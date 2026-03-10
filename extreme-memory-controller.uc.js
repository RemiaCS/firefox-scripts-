// ==UserScript==
// @name           Extreme Memory Controller
// @author         Remia
// @version        9.0
// @include        main
// @onlyonce
// ==/UserScript==

// ==/Features/==
// runaway tab kill (>400MB)
// heavy tab ranking
// adaptive idle discard
// batch tab scanning
// lazy tab restore
// reload loop protection
// GC + CC
// precise heap shrinking
// Firefox minimizeMemoryUsage
// process memory pressure signals

(function(){

console.log(">>>> Extreme Memory Controller global init");

function attachController(win){

if(win.__ExtremeMemoryController) return;
if(!win.gBrowser) return;

win.__ExtremeMemoryController = true;

const gBrowser = win.gBrowser;

/* ================= CONFIG ================= */

const RAM_SOFT = 2000;
const RAM_HARD = 3000;
const RAM_CRITICAL = 4200;

const FREEZE_MINUTES = 8;
const IDLE_MINUTES = 10;

const RUNAWAY_TAB_MB = 400;
const HEAVY_TAB_MB = 250;

const TAB_SCAN_BATCH = 20;

const CHECK_INTERVAL = 60000;
const GC_INTERVAL = 120000;
const PROCESS_TRIM_INTERVAL = 180000;

const SHRINK_COOLDOWN = 10000;

/* idle detection (prevents flicker) */

const IdleService =
Cc["@mozilla.org/widget/useridleservice;1"]
.getService(Ci.nsIUserIdleService);

const USER_IDLE_TIME = 30;

/* ================= STATE ================= */

let lastGC = 0;
let lastTrim = 0;
let lastShrink = 0;
let tabScanIndex = 0;

let tabMemory = new WeakMap();
let lastFocusTime = new WeakMap();
let frozenTabs = new WeakSet();

/* ================= MEMORY ================= */

const Mgr =
Cc["@mozilla.org/memory-reporter-manager;1"]
.getService(Ci.nsIMemoryReporterManager);

async function getProcessInfo(){
return await ChromeUtils.requestProcInfo();
}

function totalRAM(info){

let total = info.memory;

for(let child of info.children)
total += child.memory;

return Math.round(total / 1048576);

}

/* ================= TAB UTIL ================= */

function markFocused(tab){

lastFocusTime.set(tab,Date.now());
frozenTabs.delete(tab);

}

function idleMinutes(tab){

let last = lastFocusTime.get(tab);
if(!last) return 0;

return (Date.now()-last)/60000;

}

function isMediaPlaying(tab){

try{

if(tab.soundPlaying) return true;
if(tab.hasPictureInPicture) return true;

let browser = tab.linkedBrowser;
if(!browser) return false;

let bc = browser.browsingContext;

if(bc){
if(bc.isRecordingCamera) return true;
if(bc.isRecordingMicrophone) return true;
if(bc.isRecordingScreen) return true;
}

}catch(e){}

return false;

}

/* ================= HEAT SCORE ================= */

function tabHeat(tab){

let score = 0;

let mem = tabMemory.get(tab) || 0;
let idle = idleMinutes(tab);

score += mem * 0.6;
score += idle * 20;

if(tab.selected) score -= 1000;
if(isMediaPlaying(tab)) score -= 800;

return score;

}

/* ================= MEMORY CONTROL ================= */

function runGC(){

try{

Cu.forceGC();
Cu.forceCC();

}catch(e){}

}

function shrinkJSHeaps(){

const now = Date.now();

if(now-lastShrink < SHRINK_COOLDOWN)
return;

lastShrink = now;

try{

Cu.schedulePreciseShrinkingGC(()=>{});

}catch(e){}

}

async function minimizeMemory(){

if(IdleService.idleTime < USER_IDLE_TIME*1000)
return;

await new Promise(resolve=>{
Mgr.minimizeMemoryUsage(resolve);
});

}

/* ================= TAB DISCARD ================= */

function canDiscard(tab){

if(tab.selected) return false;
if(tab.hasAttribute("pending")) return false;

if(idleMinutes(tab) < IDLE_MINUTES)
return false;

if(isMediaPlaying(tab))
return false;

return true;

}

function discardTab(tab){

if(!canDiscard(tab)) return;

try{

gBrowser.discardBrowser(tab);

console.log(">>>> discarded:",tab.label);

runGC();
shrinkJSHeaps();

}catch(e){}

}

/* ================= PROCESS ANALYSIS ================= */

function findTabByPid(pid){

for(let tab of gBrowser.tabs){

try{

let browser = tab.linkedBrowser;

if(browser.frameLoader &&
browser.frameLoader.remoteTab &&
browser.frameLoader.remoteTab.osPid === pid)

return tab;

}catch(e){}

}

return null;

}

async function analyzeProcesses(info){

let heavyTabs = [];

for(let proc of info.children){

let mb = proc.memory/1048576;

let tab = findTabByPid(proc.pid);

if(!tab) continue;

tabMemory.set(tab,mb);

if(mb >= RUNAWAY_TAB_MB)
discardTab(tab);

if(mb >= HEAVY_TAB_MB)
heavyTabs.push(tab);

}

/* heat ranking */

heavyTabs.sort((a,b)=>tabHeat(b)-tabHeat(a));

for(let tab of heavyTabs)
discardTab(tab);

}

/* ================= TAB SCANNER ================= */

function manageTabsBatch(){

const tabs = gBrowser.tabs;

let end = Math.min(tabScanIndex+TAB_SCAN_BATCH,tabs.length);

for(let i=tabScanIndex;i<end;i++){

let tab = tabs[i];

let idle = idleMinutes(tab);

if(idle >= FREEZE_MINUTES){

try{

if(!frozenTabs.has(tab) &&
!tab.selected &&
!isMediaPlaying(tab)){

tab.linkedBrowser.browsingContext.suspend();
frozenTabs.add(tab);

}

}catch(e){}

}

if(idle >= IDLE_MINUTES)
discardTab(tab);

}

tabScanIndex = end;

if(tabScanIndex >= tabs.length)
tabScanIndex = 0;

}

/* ================= EVENTS ================= */

gBrowser.tabContainer.addEventListener("TabSelect",e=>{

markFocused(e.target);

try{

e.target.linkedBrowser.browsingContext.resume();

}catch(e){}

});

for(let tab of gBrowser.tabs)
markFocused(tab);

/* ================= MAIN LOOP ================= */

async function optimize(){

const info = await getProcessInfo();

const ram = totalRAM(info);

console.log(">>>> RAM:",ram,"MB");

const now = Date.now();

manageTabsBatch();

await analyzeProcesses(info);

if(ram >= RAM_SOFT){

if(now-lastGC > GC_INTERVAL){

runGC();
lastGC = now;

}

}

if(ram >= RAM_HARD)
minimizeMemory();

if(now-lastTrim > PROCESS_TRIM_INTERVAL){

Services.obs.notifyObservers(null,"memory-pressure","low-memory");

lastTrim = now;

}

}

win.setInterval(optimize,CHECK_INTERVAL);

}

/* ================= WINDOW WATCHER ================= */

function handleWindow(win){

if(win.document.readyState==="complete")
attachController(win);
else
win.addEventListener("load",()=>attachController(win),{once:true});

}

let windows = Services.wm.getEnumerator("navigator:browser");

while(windows.hasMoreElements())
handleWindow(windows.getNext());

Services.obs.addObserver(function(subject,topic){

if(topic==="browser-delayed-startup-finished")
handleWindow(subject);

},"browser-delayed-startup-finished");

})();