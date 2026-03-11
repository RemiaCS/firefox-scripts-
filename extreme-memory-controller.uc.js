// ==UserScript==
// @name           Extreme Memory Controller
// @author         Remia
// @version        32.2
// @include        main
// @onlyonce
// ==/UserScript==

(function(){

console.clear();
console.log("EXTREME MEMORY CONTROLLER V32.2 INIT 🚀");

function attachController(win){

if(win.__ExtremeMemoryController) return;
if(!win.gBrowser) return;

win.__ExtremeMemoryController = true;

const gBrowser = win.gBrowser;

/* CONFIG */

const IDLE_FREEZE = 10;	// 10 min
const IDLE_DISCARD = 12; // 12 min
const PINNED_DISCARD = 20;	// 20 min

const TAB_BATCH = 15;
const OPTIMIZE_INTERVAL = 15000;
const CLEAN_MEMORY_PERIOD = 20*60*1000;	// 20 min

/* STATE */

let lastFocusTime = new WeakMap();
let frozenTabs = new WeakSet();
let tabScanIndex = 0;

/* SERVICES */

const Mgr =
Cc["@mozilla.org/memory-reporter-manager;1"]
.getService(Ci.nsIMemoryReporterManager);

/* UTIL */

function markFocused(tab){
lastFocusTime.set(tab,Date.now());
}

function idleMinutes(tab){

/* skip idle for viewing tab */

if(tab.selected)
return 0;

/* skip idle for media tabs */

if(mediaState(tab))
return 0;

let last = lastFocusTime.get(tab);
if(!last) return 0;

return (Date.now()-last)/60000;
}

function mediaState(tab){

if(tab.hasPictureInPicture)
return "PiP";

if(tab.soundPlaying)
return "AUDIO";

return null;
}

function isLoadedTab(tab){

if(tab.hasAttribute("pending"))
return false;

let browser = tab.linkedBrowser;
if(!browser) return false;

let url = browser.currentURI?.spec || "";

if(url.startsWith("about:")) return false;
if(url.startsWith("chrome:")) return false;
if(url.startsWith("moz-extension:")) return false;

return true;
}

/* TAB SCORE */

function tabScore(tab){

let score = 0;

let idle = idleMinutes(tab);

score += idle;

if(frozenTabs.has(tab))
score += 5;

if(tab.pinned)
score -= 100;

if(mediaState(tab))
score -= 50;

return score;
}

/* GC */

function runGC(){

try{
Cu.forceGC();
Cu.forceCC();
console.log("♻ GC + CC");
}catch(e){}

}

/* DISCARD */

function canDiscard(tab){

if(tab.selected) return false;
if(mediaState(tab)) return false;
if(!isLoadedTab(tab)) return false;

return true;
}

function discardTab(tab){

if(!canDiscard(tab)) return false;

try{

gBrowser.discardBrowser(tab);

console.log("🗑 DISCARDED:",tab.label);

setTimeout(runGC,2000);

return true;

}catch(e){}

return false;
}

/* FREEZE */

function freezeTab(tab){

try{

if(frozenTabs.has(tab)) return;
if(tab.selected) return;
if(mediaState(tab)) return;

tab.linkedBrowser.browsingContext.suspend();

frozenTabs.add(tab);

console.log("💤 FROZEN:",tab.label);

}catch(e){}

}

/* TAB MANAGEMENT */

function manageTabs(){

let tabs = gBrowser.tabs;

let end =
Math.min(tabScanIndex + TAB_BATCH, tabs.length);

for(let i=tabScanIndex;i<end;i++){

let tab = tabs[i];

if(!isLoadedTab(tab)) continue;
if(tab.selected) continue;

/* skip media tabs */

if(mediaState(tab)) continue;

let idle = idleMinutes(tab);

/* pinned timeout */

if(tab.pinned){

if(idle >= PINNED_DISCARD){

console.log("📌 PINNED TAB EXPIRED → DISCARD:",tab.label);

discardTab(tab);

}

continue;
}

/* freeze */

if(idle >= IDLE_FREEZE)
freezeTab(tab);

/* discard */

if(idle >= IDLE_DISCARD)
discardTab(tab);

}

tabScanIndex = end;

if(tabScanIndex >= tabs.length)
tabScanIndex = 0;

}

/* TAB DEBUG PANEL */

function logTabs(){

let tabs =
Array.from(gBrowser.tabs)
.filter(isLoadedTab);

tabs.sort((a,b)=>tabScore(b)-tabScore(a));

console.clear();

console.log(
"🧠 TAB MONITOR ("+tabs.length+" tabs)"
);

for(let i=0;i<tabs.length;i++){

let tab = tabs[i];

let idle =
Math.round(idleMinutes(tab));

let flags = [];

if(tab.selected)
flags.push("👀 VIEWING");

if(tab.pinned)
flags.push("📌 PINNED");

if(mediaState(tab))
flags.push("🎵 PLAYING MEDIA");

if(frozenTabs.has(tab))
flags.push("💤 FROZEN");

if(!tab.pinned && idle >= IDLE_DISCARD && !mediaState(tab))
flags.push("🟥 DISCARD SOON");

if(!tab.pinned && idle < IDLE_DISCARD && !mediaState(tab))
flags.push("🟩 ACTIVE");

console.log(
(i+1)+".",
tab.label,
"| idle:",idle+"m",
"| score:",tabScore(tab),
"|",
flags.join(" | ")
);

}

}

/* MEMORY CLEANER */

function isPrimaryWindow(){

try{

let wm =
Cc["@mozilla.org/appshell/window-mediator;1"]
.getService(Ci.nsIWindowMediator);

let enumerator =
wm.getEnumerator("navigator:browser");

let win = enumerator.getNext();

if(gBrowser === win.gBrowser)
return true;

}catch(e){}

return false;
}

function cleanMemory(){

try{

if(!isPrimaryWindow()) return;

console.log("🧹 MEMORY CLEAN START");

Services.obs.notifyObservers(
null,
"child-mmu-request"
);

Mgr.minimizeMemoryUsage(()=>{

console.log("✅ MEMORY CLEANED");

});

}catch(e){

console.log(e);

}

}

/* LOOPS */

win.setInterval(
manageTabs,
OPTIMIZE_INTERVAL
);

win.setInterval(
logTabs,
30000
);

win.setInterval(
cleanMemory,
CLEAN_MEMORY_PERIOD
);

/* EVENTS */

gBrowser.tabContainer.addEventListener(
"TabSelect",
e=>markFocused(e.target)
);

for(let tab of gBrowser.tabs)
markFocused(tab);

console.log("✅ EMC READY");

}

/* WINDOW WATCHER */

function handleWindow(win){

if(win.document.readyState==="complete")
attachController(win);

else
win.addEventListener(
"load",
()=>attachController(win),
{once:true}
);

}

let windows =
Services.wm.getEnumerator("navigator:browser");

while(windows.hasMoreElements())
handleWindow(windows.getNext());

Services.obs.addObserver(

function(subject,topic){

if(topic==="browser-delayed-startup-finished")
handleWindow(subject);

},

"browser-delayed-startup-finished"

);

})();