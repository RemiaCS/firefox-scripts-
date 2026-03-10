/******
*    name: Firefox Max Speed UserJS ( Remia's modded )
* version: 115+
*    urls: https://github.com/Zenos43/Window-backup-scripts/blob/main/user.js [repo]
* HOWTO: Go to about:support -> Open Profile Folder -> Save user.js -> Restart
******/

//Tweaks
//Instant start-up
user_pref("browser.startup.preXulSkeletonUI", false);

// PREF: improve font rendering by using DirectWrite everywhere like Chrome [WINDOWS]
user_pref("gfx.font_rendering.cleartype_params.rendering_mode", 5);
user_pref("gfx.font_rendering.cleartype_params.cleartype_level", 100);
user_pref("gfx.font_rendering.cleartype_params.force_gdi_classic_max_size", 0);
user_pref("gfx.font_rendering.directwrite.use_gdi_table_loading", false);
//user_pref("gfx.font_rendering.cleartype_params.enhanced_contrast", 50); // 50-100 [OPTIONAL]
user_pref("security.OCSP.enabled", 0);

// Smooth scrolling
user_pref("general.smoothScroll.mouseWheel.durationMaxMS", 250);
user_pref("general.smoothScroll.mouseWheel.durationMinMS", 200);
user_pref("mousewheel.enable_pixel_scrolling", false);
user_pref("apz.overscroll.enabled", true);
user_pref("general.smoothScroll", true);
user_pref("mousewheel.default.delta_multiplier_y", 300);
user_pref("general.smoothScroll.msdPhysics.enabled", false);

// Disable automatically hides the cursor on typing
user_pref("dom.animations.offscreen-throttling", false);

// Open 2+ video without throttling/pausing
user_pref("widget.gtk.hide-pointer-while-typing.enabled", false);

// Zen tweaks
user_pref("network.early-hints.enabled", true);
user_pref("network.early-hints.preconnect.enabled", true);
user_pref("network.early-hints.preconnect.max_connections", 20);
user_pref("zen.theme.border-radius", 0);
user_pref("zen.theme.gradient", false);
user_pref("zen.theme.color-prefs.colorful", false);
user_pref("zen.view.experimental-rounded-view", false);
user_pref("zen.widget.windows.acrylic", false);
user_pref("zen.view.compact.animate-sidebar", false);
user_pref("browser.translations.panelShown", false);
user_pref("browser.translations.select.enable", false);
user_pref("browser.translations.enable", false);
user_pref("browser.translations.automaticallyPopup", false);

//Snappier tooltips
user_pref("ui.tooltip.delay_ms", 60);
user_pref("ui.tooltipDelay", 60);
user_pref("ui.submenuDelay", 0);
user_pref("browser.overlink-delay", 10);

//Enable Alt-Tab-like switch, Ctrl+Tab
user_pref("browser.ctrlTab.sortByRecentlyUsed", true);

//Enable userChrome.css
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);

// disable new sidebar
user_pref("sidebar.revamp", false);

/* --- revert sidebar position to left --- */
user_pref("sidebar.position_start", true);

/* general */
user_pref("parfait.animations.enabled", true);
user_pref("parfait.blur.enabled", false);
user_pref("parfait.window.borderless", false);

/* background */
user_pref("parfait.bg.accent-color", false);
user_pref("parfait.bg.contrast", 2);
user_pref("parfait.bg.gradient", false);
user_pref("parfait.bg.opacity", 4);
user_pref("parfait.bg.transparent", false);

/* tabs */
user_pref("parfait.tabs.groups.color", false);

/* sidebar */
user_pref("parfait.sidebar.width.preset", 2);

/* theme */
user_pref("parfait.theme.lwt.alt", false);
user_pref("parfait.theme.roundness.preset", 1);

/* toolbar */
user_pref("parfait.toolbar.sidebar-gutter", true);
user_pref("parfait.toolbar.unified-sidebar", true);
user_pref("parfait.toolbar.force-hl-layout", false);

/* traffic lights */
user_pref("parfait.traffic-lights.enabled", false);
user_pref("parfait.traffic-lights.mono", false);

/* url bar */
user_pref("parfait.urlbar.url.center", false);
user_pref("parfait.urlbar.results.compact", false);
user_pref("parfait.urlbar.search-mode.glow", true);

/* new tab */
user_pref("parfait.new-tab.logo", 1);
user_pref("parfait.new-tab.bg.pattern", false);

// Fill SVG Color
user_pref("svg.context-properties.content.enabled", true);

// CSS's `:has()` selector 
user_pref("layout.css.has-selector.enabled", true);

// GTK rounded corners
user_pref("widget.gtk.rounded-bottom-corners.enabled", true);

// Who is bogus? (fixes Sidebery tab dragging on Linux)
user_pref("widget.gtk.ignore-bogus-leave-notify", 1);

//Enable Ctrl+Shift+Alt+I
user_pref("devtools.chrome.enabled", true);
user_pref("devtools.debugger.remote-enabled", true);
user_pref("devtools.debugger.prompt-connection", false);

// Reduce disk read/write
user_pref("browser.sessionstore.idleDelay", 180);
user_pref("browser.sessionstore.interval", 60000);  // 1 minute; default=15000 (15s); 900000=15 min; 1800000=30 min
//user_pref("browser.sessionstore.collect_zoom", false);
//user_pref("browser.sessionstore.privacy_level", 2);
user_pref("browser.sessionstore.restore_pinned_tabs_on_demand", true);

// Disable Pocket and Accessibility
user_pref("extensions.pocket.enabled", false);
user_pref("accessibility.force_disabled", 1);

// Disable Taskbar Preview
user_pref("browser.taskbar.lists.enabled", false);
user_pref("browser.taskbar.lists.frequent.enabled", false);
user_pref("browser.taskbar.lists.maxListItemCount", 0);
//user_pref("browser.taskbar.lists.refreshInSeconds", 2147483647);
user_pref("browser.taskbar.lists.tasks.enabled", false);
user_pref("browser.taskbar.previews.max", 0);

// Debload AI features in ff
user_pref("browser.ml.enable", false);
user_pref("browser.ml.chat.enabled", false);
user_pref("extensions.ml.enabled", false);
user_pref("browser.ml.linkPreview.enabled", false);
user_pref("browser.tabs.groups.smart.enabled", false);
user_pref("browser.tabs.groups.smart.userEnabled", false);

// Enable PiP
user_pref("media.videocontrols.picture-in-picture.enable-when-switching-tabs.enabled", true);

// Optimize rendering speed
// https://voz.vn/t/tong-hop-nhung-addon-chat-cho-firefox-pc-mobile.682181/post-23570551
// https://voz.vn/t/tong-hop-nhung-addon-chat-cho-firefox-pc-mobile.682181/post-27064564
user_pref("nglayout.initialpaint.delay", 2000);
user_pref("nglayout.initialpaint.delay_in_oopif", 2000);
//user_pref("content.notify.backoffcount", 0);
user_pref("content.notify.interval", 100000);
//user_pref("content.notify.ontimer", true);
user_pref("gfx.webrender.super-resolution.nvidia", true);
user_pref("javascript.options.wasm_experimental_compile_pipeline", true);

// Optimize page loading speed
user_pref("network.dns.disablePrefetch", true);
user_pref("network.prefetch-next", false);
user_pref("network.predictor.enabled", false);
user_pref("network.dns.disablePrefetchFromHTTPS", true);
user_pref("network.dnsCacheEntries", 20000);
user_pref("network.dnsCacheExpiration", 3600);
user_pref("network.dnsCacheExpirationGracePeriod", 240);
user_pref("network.predictor.enable-hover-on-ssl", false);
user_pref("security.remote_settings.crlite_filters.enabled", true);
user_pref("security.pki.crlite_mode", 2);
user_pref("network.predictor.enable-prefetch", true);
user_pref("network.predictor.preconnect-min-confidence", 20);
user_pref("network.predictor.prefetch-force-valid-for", 3600);
user_pref("network.predictor.prefetch-min-confidence", 30);
user_pref("network.predictor.prefetch-rolling-load-count", 120);
user_pref("network.predictor.preresolve-min-confidence", 10);

// Faster SSL
user_pref("network.ssl_tokens_cache_capacity", 32768);

// Disable network separations
user_pref("privacy.partition.network_state", false);

// Reduce cpu usage ( Not recommend )
user_pref("media.rdd-vpx.enabled", false);
user_pref("media.rdd-process.enabled", false);

// Disable Spectre ( Not recommend )
user_pref("javascript.options.spectre.disable_for_isolated_content", true);
user_pref("javascript.options.spectre.index_masking", false);
user_pref("javascript.options.spectre.object_mitigations", false);
user_pref("javascript.options.spectre.string_mitigations", false);
user_pref("javascript.options.spectre.value_masking", false);
user_pref("javascript.options.spectre.jit_to_cxx_calls", false);

// Enable punycode
// https://voz.vn/t/tong-hop-nhung-addon-chat-cho-firefox-pc-mobile.682181/post-25938099
user_pref("network.IDN_show_punycode", true);

// Prefer no animation
// https://voz.vn/p/33057189/
user_pref("ui.prefersReducedMotion", 1);

// Maximize bandwidth
// https://voz.vn/p/33049233/
user_pref("network.http.http3.cc_algorithm", 0);

// Tweak bytecode
// https://voz.vn/p/32603773/
user_pref("browser.cache.jsbc_compression_level", 2);
user_pref("dom.script_loader.bytecode_cache.strategy", -1);
user_pref("javascript.options.mem.gc_balanced_heap_limits", true);

// Enable old clear history dialog
user_pref("privacy.sanitize.useOldClearHistoryDialog", true);

// Disable IPv6
//user_pref("network.dns.disableIPv6", true);

// GoogleDNS
// https://voz.vn/t/tong-hop-nhung-addon-chat-cho-firefox-pc-mobile.682181/post-24688026
//user_pref("network.trr.uri", "https://dns.nextdns.io/");
//user_pref("network.trr.custom_uri", "https://dns.nextdns.io/");
//user_pref("network.trr.mode", 2);

// Enable/disable ECS
user_pref("network.trr.disable-ECS", true);

// Optimize HTTP3
user_pref("network.http.http3.send_background_tabs_deprioritization", true);
user_pref("network.http.http3.version_negotiation.enabled", true);
user_pref("security.tls.ech.grease_http3", true);

// Tweaks DNS over HTTPS and use default system DNS resolver
user_pref("network.dns.skipTRR-when-parental-control-enabled", false);
user_pref("network.trr.async_connInfo", true);
user_pref("network.trr.confirmation_telemetry_enabled", false);
user_pref("network.trr.mode", 4);
user_pref("network.dnsCacheEntries", -1);

// No affiliate allow
user_pref("privacy.query_stripping.enabled", true);
user_pref("privacy.query_stripping.strip_list", "uls_trackid utm_campaign utm_content utm_medium utm_source utm_term");
user_pref("privacy.query_stripping.enabled.pbmode", true);

// Enable h265
user_pref("dom.media.webcodecs.h265.enabled", true);

// Re-enable backspace for returning to previous page
user_pref("browser.backspace_action", 0);

// Enable Kyber to access blocked websites
user_pref("security.tls.enable_kyber", true);

// Reduce network request
// https://voz.vn/t/tong-hop-nhung-addon-chat-cho-firefox-pc-mobile.682181/post-27409530
user_pref("network.http.rcwn.enabled", false);

// Fix Facebook time (ESR <= 115)
user_pref("dom.textMetrics.fontBoundingBox.enabled", true);

// PREF: disable EcoQoS [WINDOWS] 
// Background tab processes use efficiency mode on Windows 11 to limit resource use. 
// [WARNING] Leave this alone, unless you're on Desktop and you rely on 
// background tabs to have maximum performance. 
// [1] https://devblogs.microsoft.com/performance-diagnostics/introducing-ecoqos/ 
// [2] https://bugzilla.mozilla.org/show_bug.cgi?id=1796525 
// [3] https://bugzilla.mozilla.org/show_bug.cgi?id=1800412 
// [4] https://reddit.com/r/firefox/comments/107fj69/how_can_i_disable_the_efficiency_mode_on_firefox/ 
user_pref("dom.ipc.processPriorityManager.backgroundUsesEcoQoS", false);

// PREF: use bigger packets
// Reduce Firefox's CPU usage by requiring fewer application-to-driver data transfers.
// However, it does not affect the actual packet sizes transmitted over the network.
// [1] https://www.mail-archive.com/support-seamonkey@lists.mozilla.org/msg74561.html
// Can cause crashing: https://github.com/BrowserWorks/Waterfox/releases/tag/G6.0.10
user_pref("network.buffer.cache.size", 262144); // 256 kb; default=32768 (32 kb)
user_pref("network.buffer.cache.count", 128); // default=24
user_pref("network.http.pacing.requests.burst", 12); // default=10, controls how many HTTP requests are sent at once
user_pref("network.http.pacing.requests.min-parallelism", 8); // default=6
user_pref("network.http.max-connections", 1800); // default=900
user_pref("network.http.max-persistent-connections-per-server", 12); // default=6 
user_pref("network.http.max-urgent-start-excessive-connections-per-host", 6); // default=3
user_pref("media.cache_size", 1024000); // in KB, default = 512000 (500MB)

// Enable Add Search
user_pref("browser.urlbar.update2.engineAliasRefresh", true);

// Enable PWA
user_pref("browser.ssb.enabled", true);

// Force RAM cache, uncomment // to enable
// https://voz.vn/t/cach-ep-firefox-luu-cache-tren-ram-ma-khong-can-ramdisk.664955/
user_pref("browser.cache.disk.enable", false);
user_pref("browser.cache.memory.enable", true);
user_pref("browser.cache.disk.capacity", 0);
user_pref("browser.cache.disk.max_entry_size", 0);
user_pref("browser.cache.disk.smart_size.first_run", false);
user_pref("browser.cache.disk_cache_ssl", false);

// Disable notifications
user_pref("dom.webnotifications.enabled", false);
user_pref("dom.webnotifications.serviceworker.enabled", false);

// Enable WebM
user_pref("media.mediasource.webm.enabled", true);

// Disable Flash
user_pref("plugin.state.flash", 0);

// Disable Tracking ( Useless! )
user_pref("privacy.trackingprotection.enabled", true);                   // Disable tracking protection ( keep this on )
user_pref("privacy.trackingprotection.cryptomining.enabled", false);      // Disable cryptomining protection
user_pref("privacy.resistFingerprinting", true);                       	// 
user_pref("layout.css.font-visibility.resistFingerprinting", 3);    //
user_pref("privacy.trackingprotection.fingerprinting.enabled", false);    // Disable fingerprint protection 
user_pref("privacy.trackingprotection.socialtracking.enabled", false);    // Disable social protection
user_pref("privacy.globalprivacycontrol.enabled", true);                 // Successor to DNT
user_pref("privacy.globalprivacycontrol.functionality.enabled", true);   // Successor to DNT

// Block autoplay in tabs until selected
user_pref("media.block-autoplay-until-in-foreground", true);
user_pref("media.block-play-until-document-interaction", true);
user_pref("media.block-play-until-visible", true);

// Tabs/address bar tweaks
user_pref("browser.tabs.hoverPreview.enabled", false); // Disable tab previews when hovering over them
user_pref("browser.urlbar.untrimOnUserInteraction.featureGate", true);
user_pref("browser.tabs.tabmanager.enabled", true); // Disable tab manager menu/icon
user_pref("browser.tabs.tabMinWidth", 76); // Minimum tab width, 76 is the default in 88.0
user_pref("browser.urlbar.suggest.openpage", false);
// Disable live search suggestions (Google, Bing, etc.)
// [WARNING] Search engines keylog every character you type from the URL bar.
// Override these if you trust and use a privacy respecting search engine.
// [NOTE] Both prefs must be true for live search to work in the location bar.
// [SETTING] Search>Provide search suggestions > Show search suggestions in address bar result
user_pref("browser.search.suggest.enabled", false);
// Hide Firefox Suggest label in URL dropdown box
user_pref("browser.urlbar.groupLabels.enabled", false);
user_pref("browser.tabs.closeWindowWithLastTab", false);

// Set media cache in Private Browsing to in-memory
// [NOTE] MSE (Media Source Extensions) are already stored in-memory in PB
user_pref("browser.privatebrowsing.forceMediaMemoryCache", true);

// Purge session icon in Private Browsing windows
user_pref("browser.privatebrowsing.resetPBM.enabled", true);

// Enable seperate search engine for Private Windows
// [SETTINGS] Preferences>Search>Default Search Engine>"Use this search engine in Private Windows"
user_pref("browser.search.separatePrivateDefault.ui.enabled", true);

// Disable Firefox Suggest
// [1] https://github.com/arkenfox/user.js/issues/1257
user_pref("browser.urlbar.quicksuggest.enabled", false); // controls whether the UI is shown


// Disable search and form history
// Be aware that autocomplete form data can be read by third parties [1][2].
// Form data can easily be stolen by third parties.
// [SETTING] Privacy & Security>History>Custom Settings>Remember search and form history
// [1] https://blog.mindedsecurity.com/2011/10/autocompleteagain.html
// [2] https://bugzilla.mozilla.org/381681
user_pref("browser.formfill.enable", false);

// Disable formless login capture for Password Manager [FF51+]
// [1] https://bugzilla.mozilla.org/show_bug.cgi?id=1166947
user_pref("signon.formlessCapture.enabled", false);

// Disable capturing credentials in private browsing
user_pref("signon.privateBrowsingCapture.enabled", false);

// Zoom tweaks
user_pref("zoom.maxPercent", 700);
user_pref("zoom.minPercent", 10);

// Increase the speed of processing images
user_pref("image.mem.decode_bytes_at_a_time", 131072); // The speed of processing images (default=16384=16KB) (131072=128KB)

// Improve browser cached
//browser.cache.disk.capacity = 8192000 # Increase cache size on disk to 8 GB
//browser.cache.disk.smart_size.enabled = false # force a fixed max cache size on disk
//browser.cache.frecency_half_life_hours = 18 # lower cache sweep intervals
//browser.cache.max_shutdown_io_lag = 16 # let the browser finish more io on shutdown
user_pref("browser.cache.frecency_half_life_hours", 18);
user_pref("browser.cache.max_shutdown_io_lag", 16);
user_pref("browser.cache.memory.capacity", -1);
user_pref("browser.cache.memory.max_entry_size", -1);
//browser.cache.disk.metadata_memory_limit = 15360 # increase size (in KB) of "Intermediate memory caching of frequently used metadata (a.k.a. disk cache memory pool)"

// Optimize RAM, uncomment // to enable
user_pref("dom.ipc.processCount", 1);
user_pref("fission.autostart", false);
user_pref("dom.ipc.processCount.webIsolated", 1);

// Disable WebGL
user_pref("webgl.disabled", true);

// Disable WebRTC (Prevent the use of SPDY, Websockets and WebRTC if not supported by the web proxy)
user_pref("media.peerconnection.enabled", false);
user_pref("media.http.spdy.enabled", false);
user_pref("media.websocket.enabled", false);
user_pref("network.websocket.enabled", false); 
user_pref("media.peerconnection.video.enabled", false);
user_pref("media.peerconnection.identity.enabled", false);
user_pref("media.navigator.enabled", false);
user_pref("media.navigator.video.enabled", false);

// Send a DO NOT TRACK (DNT) header
user_pref("privacy.donottrackheader.enabled", true);
user_pref("privacy.donottrackheader.value", 1);

// Set time range to "Everything" as default in "Clear Recent History" when pressing Ctrl+Shift+H
user_pref("privacy.sanitize.timeSpan", 0);

// Check all the boxes by default in "Clear Recent History" when pressing Ctrl+Shift+H
user_pref("privacy.history.custom", true); // Set History section to show all options
user_pref("privacy.cpd.cache", true);          // Cache
user_pref("privacy.cpd.cookies", true);        // Cookies
user_pref("privacy.cpd.downloads", true);      // Downloads - This is not listed
user_pref("privacy.cpd.formdata", true);       // Form & Search History
user_pref("privacy.cpd.history", true);        // Browsing & Download History
user_pref("privacy.cpd.offlineApps", true);    // Offline Website Data
user_pref("privacy.cpd.passwords", true);      // Passwords - This is not listed
user_pref("privacy.cpd.sessions", true);       // Active Logins
user_pref("privacy.cpd.siteSettings", true);   // Site Preferences

// Fuck Webkit
user_pref("layout.css.prefixes.webkit", false);
user_pref("browser.urlbar.speculativeConnect.enabled", false);

// Optimize back/forward cached no need to reload
user_pref("dom.script_loader.navigation_cache", true);
user_pref("browser.cache.check_doc_frequency", 2);
user_pref("dom.script_loader.external_scripts.speculate_async.enabled", false);
user_pref("dom.script_loader.external_scripts.speculate_link_preload.enabled", false);
user_pref("dom.script_loader.external_scripts.speculate_non_parser_inserted.enabled", false);

// GFX rendering tweaks
user_pref("gfx.canvas.accelerated", true);
user_pref("gfx.canvas.accelerated.cache-items", 32768);
user_pref("gfx.canvas.accelerated.cache-size", 4096);
user_pref("layers.acceleration.force-enabled", false);
user_pref("gfx.content.skia-font-cache-size", 20);
user_pref("gfx.webrender.all", true);
user_pref("gfx.webrender.compositor", true);
user_pref("gfx.webrender.compositor.force-enabled", true);
user_pref("gfx.webrender.enabled", true);
user_pref("gfx.webrender.precache-shaders", true);
user_pref("gfx.webrender.program-binary-disk", true);
user_pref("gfx.webrender.software.opengl", true);
user_pref("image.mem.shared.unmap.min_expiration_ms", 120000);
user_pref("layers.gpu-process.enabled", true);
user_pref("layers.gpu-process.force-enabled", true);

// Media
user_pref("image.cache.size", 10485760);
user_pref("media.memory_cache_max_size", 1048576);
user_pref("media.memory_caches_combined_limit_kb", 3145728);
user_pref("media.hardware-video-decoding.force-enabled", true);
user_pref("media.ffmpeg.vaapi.enabled", true);
user_pref("media.cache_readahead_limit", 300); // 300 = 5min. Buffer X amount of seconds ahead (when media.mediasource.enabled is set to true [default] this setting might only apply to the built in media player) 
user_pref("media.cache_resume_threshold", 300); // Only continue buffering while the already-loaded buffer is shorter than X seconds
user_pref("image.http.accept", "/"); // don't accept webp by default. Default = "image/webp,/" 

// PDF Tweaks ( Dark mode )
user_pref("pdfjs.forcePageColors", true);
user_pref("pdfjs.pageColorsBackground", "#202020");
user_pref("pdfjs.pageColorsForeground", "#d1d1d1");

// Disable FastBack to save RAM
//user_pref("fission.bfcacheInParent", false);
//user_pref("fission.disableSessionHistoryInParent", true);
//user_pref("browser.sessionhistory.max_total_viewers", 0);

// Enable Multi-Account Container
//user_pref("privacy.userContext.enabled", true); //enable Multi-Account Container
//user_pref("privacy.userContext.ui.enabled", true); //enable Multi-Account Container

/*** [SECTION 0200]: GEOLOCATION / LANGUAGE / LOCALE ***/
user_pref("_user.js.parrot", "0200 syntax error: the parrot's definitely deceased!");
/* 0201: use Mozilla geolocation service instead of Google if permission is granted [FF74+]
 * Optionally enable logging to the console (defaults to false) ***/
user_pref("geo.provider.network.url", "https://location.services.mozilla.com/v1/geolocate?key=%MOZILLA_API_KEY%");
// user_pref("geo.provider.network.logging.enabled", true); // [HIDDEN PREF]
/* 0202: disable using the OS's geolocation service ***/
user_pref("geo.provider.ms-windows-location", false); // [WINDOWS]
user_pref("geo.provider.use_corelocation", false); // [MAC]
user_pref("geo.provider.use_gpsd", false); // [LINUX]
user_pref("geo.provider.use_geoclue", false); // [FF102+] [LINUX]

// Enable Cookie Banner Protection
user_pref("cookiebanners.service.mode", 2);
user_pref("cookiebanners.service.mode.privateBrowsing", 2);

// Disable Restricted Domains
user_pref("extensions.webextensions.restrictedDomains", "");

// Modal-less mpv:// handler
user_pref("network.protocol-handler.external.mpv", true);

// Location-Aware Browsing ( Privacy )
user_pref("accessibility.typeaheadfind", false);
user_pref("geo.enabled", false);
user_pref("geo.wifi.logging.enabled", false);
user_pref("geo.wifi.uri", "");
user_pref("layout.spellcheckDefault", 0);

// Disable certificate warning bypass
user_pref("browser.xul.error_pages.enabled", false);

// Enable support for Content Security Policy
user_pref("security.csp.enable", true);

// Disable Safe Browsing anti-malware
user_pref("browser.safebrowsing.enabled", false);
user_pref("browser.safebrowsing.downloads.enabled", false);
user_pref("browser.safebrowsing.malware.enabled", false);

// Turn on XSS Filter
user_pref("browser.urlbar.filter.javascript", true);

// Restrict third party cookies
user_pref("network.cookie.cookieBehavior", 1);

// Disable Java unless required
user_pref("plugin.state.java", 0);
user_pref("plugin.state.npdeployjava1", 0);

// Disable webcam and microphone unless necessary
//user_pref("media.navigator.enabled", false);
//user_pref("media.navigator.video.enabled", false);

// Disable Firefox Hello
user_pref("loop.enabled", false);

// Disable JavaScript fingerprinting and/or data collection
user_pref("dom.event.clipboardevents.enabled", false);
user_pref("dom.battery.enabled", false);
user_pref("browser.send_pings", false);

// Disable device sensors
user_pref("device.sensors.enabled", false);
user_pref("camera.control.face_detection.enabled", false);
user_pref("camera.control.autofocus_moving_callback.enabled", false);

// Disable unnecessary protocols
// This disables older protocols that are known to be weak or entirely broken (3DES, RC4 and MD5).
user_pref("security.ssl3.rsa_rc4_128_sha", false);user_pref("security.ssl3.rsa_rc4_128_md5", false);
user_pref("security.ssl3.rsa_des_ede3_sha", false);
user_pref("security.ssl3.ecdhe_ecdsa_rc4_128_sha", false);
user_pref("security.ssl3.ecdhe_rsa_rc4_128_sha", false);
user_pref("app.update.auto", false);

/** TELEMETRY ***/
user_pref("datareporting.policy.dataSubmissionEnabled", false);
user_pref("datareporting.healthreport.uploadEnabled", false);
user_pref("datareporting.healthreport.documentServerURI", "");
user_pref("datareporting.healthreport.service.enabled", false);
user_pref("datareporting.policy.dataSubmissionEnabled.v2", false);
user_pref("dom.ipc.plugins.flash.subprocess.crashreporter.enabled", false);
user_pref("dom.ipc.plugins.reportCrashURL", false);
user_pref("toolkit.telemetry.cachedClientID", "");
user_pref("toolkit.telemetry.prompted", 2);
user_pref("toolkit.telemetry.rejected", true);
user_pref("toolkit.telemetry.unifiedIsOptIn", true);
user_pref("toolkit.telemetry.optoutSample", false);
user_pref("toolkit.telemetry.unified", false);
user_pref("toolkit.telemetry.enabled", false);
user_pref("toolkit.telemetry.server", "data:,");
user_pref("toolkit.telemetry.archive.enabled", false);
user_pref("toolkit.telemetry.newProfilePing.enabled", false);
user_pref("toolkit.telemetry.shutdownPingSender.enabled", false);
user_pref("toolkit.telemetry.updatePing.enabled", false);
user_pref("toolkit.telemetry.bhrPing.enabled", false);
user_pref("toolkit.telemetry.firstShutdownPing.enabled", false);
user_pref("toolkit.telemetry.coverage.opt-out", true);
user_pref("toolkit.coverage.opt-out", true);
user_pref("toolkit.coverage.endpoint.base", "");
user_pref("browser.ping-centre.telemetry", false);
user_pref("browser.newtabpage.activity-stream.feeds.telemetry", false);
user_pref("browser.newtabpage.activity-stream.telemetry", false);
user_pref("browser.vpn_promo.enabled", false);

/** EXPERIMENTS ***/
user_pref("app.shield.optoutstudies.enabled", false);
user_pref("app.normandy.enabled", false);
user_pref("app.normandy.api_url", "");

/** CRASH REPORTS ***/
user_pref("breakpad.reportURL", "");
user_pref("browser.tabs.crashReporting.sendReport", false);
user_pref("browser.crashReports.unsubmittedCheck.autoSubmit2", false);

/** DETECTION ***/
user_pref("captivedetect.canonicalURL", "");
user_pref("network.captive-portal-service.enabled", false);
user_pref("network.notify.checkForProxies", false);
user_pref("network.connectivity-service.enabled", false);
user_pref("dom.private-attribution.submission.enabled", false);

/** MOZILLA UI ***/
user_pref("browser.privatebrowsing.vpnpromourl", "");
user_pref("extensions.getAddons.showPane", false);
user_pref("extensions.webservice.discoverURL", "");
user_pref("extensions.getAddons.discovery.api_url", "");
user_pref("extensions.htmlaboutaddons.recommendations.enabled", false);
user_pref("extensions.htmlaboutaddons.discover.enabled", false);
user_pref("browser.discovery.enabled", false);
user_pref("browser.shell.checkDefaultBrowser", false);
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.addons", false);
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.features", false);

// Disable saving page thumbnails/icons
user_pref("browser.pagethumbnails.capturing_disabled", true);
user_pref("pageThumbs.enabled", false);
user_pref("browser.shell.shortcutFavicons", false); // URL shortcut files use a cached .ico file (randomly named) which is stored in your profile/shortcutCache directory. The .ico remains after the shortcut is deleted. If set to false then the shortcuts use a generic Firefox icon

//
user_pref("browser.preferences.moreFromMozilla", false);
user_pref("browser.aboutConfig.showWarning", false);
user_pref("browser.aboutwelcome.enabled", false);

/** THEME ADJUSTMENTS ***/
user_pref("browser.compactmode.show", true);
user_pref("browser.display.focus_ring_on_anything", true);
user_pref("browser.display.focus_ring_style", 0);
user_pref("browser.display.focus_ring_width", 0);
user_pref("layout.css.prefers-color-scheme.content-override", 2);
user_pref("browser.privateWindowSeparation.enabled", false); // WINDOWS

/** FULLSCREEN NOTICE ***/
user_pref("full-screen-api.transition-duration.enter", "0 0");
user_pref("full-screen-api.transition-duration.leave", "0 0");
user_pref("full-screen-api.warning.delay", -1);
user_pref("full-screen-api.warning.timeout", 0);

/** URL BAR ***/
user_pref("browser.urlbar.suggest.calculator", true);
user_pref("browser.urlbar.unitConversion.enabled", true);
user_pref("browser.urlbar.trending.featureGate", false);
user_pref("browser.urlbar.trimHttps", true);
user_pref("browser.urlbar.trimURLs", true);

/** NEW TAB PAGE ***/
user_pref("browser.newtabpage.activity-stream.feeds.topsites", false);
user_pref("browser.newtabpage.activity-stream.feeds.section.topstories", false);
user_pref("browser.newtabpage.activity-stream.showSearch", false);
user_pref("browser.newtabpage.activity-stream.showSponsored", false);
user_pref("browser.newtabpage.activity-stream.showSponsoredTopSites", false);

/** PDF ***/
user_pref("browser.download.open_pdf_attachments_inline", true);

/** TAB BEHAVIOR ***/
user_pref("browser.bookmarks.openInTabClosesMenu", false);
user_pref("browser.menu.showViewImageInfo", true);
user_pref("findbar.highlightAll", true);
user_pref("findbar.modalHighlight", true);  // Dim the rest o
user_pref("layout.word_select.eat_space_to_next_word", false);

// Disable Activity Stream recent Highlights in the Library
user_pref("browser.library.activity-stream.enabled", false);
user_pref("browser.newtabpage.activity-stream.feeds.section.highlights", false);
user_pref("browser.newtabpage.activity-stream.section.highlights.includeBookmarks", false);
user_pref("browser.newtabpage.activity-stream.section.highlights.includeDownloads", false);
user_pref("browser.newtabpage.activity-stream.section.highlights.includeVisited", false);
user_pref("browser.newtabpage.activity-stream.section.highlights.includePocket", false);
user_pref("browser.newtabpage.activity-stream.telemetry.ping.endpoint", "");

// Enhanced Tracking Protection (ETP)
user_pref("browser.contentblocking.category", "strict"); // [HIDDEN]
user_pref("privacy.trackingprotection.allow_list.baseline.enabled", true);
user_pref("privacy.trackingprotection.allow_list.convenience.enabled", true);

// Remove temp files opened from non-PB windows with an external application
user_pref("browser.download.start_downloads_in_tmp_dir", true);
user_pref("browser.helperApps.deleteTempFileOnExit", true);

// Disable UITour backend
// This way, there is no chance that a remote page can use it.
user_pref("browser.uitour.enabled", false);

// Disable CSP Level 2 Reporting [FF140+]
// [1] https://github.com/yokoffing/Betterfox/issues/415
user_pref("security.csp.reporting.enabled", false);

// Display warning on the padlock for "broken security"
user_pref("security.ssl.treat_unsafe_negotiation_as_broken", true);

// Display advanced information on Insecure Connection warning pages
// [TEST] https://expired.badssl.com/
user_pref("browser.xul.error_pages.expert_bad_cert", true);

// Disable 0-RTT (round-trip time) to improve TLS 1.3 security [FF51+]
// This data is not forward secret, as it is encrypted solely under keys derived using
// the offered PSK. There are no guarantees of non-replay between connections.
// [1] https://github.com/tlswg/tls13-spec/issues/1001
// [2] https://www.rfc-editor.org/rfc/rfc9001.html#name-replay-attacks-with-0-rtt
// [3] https://blog.cloudflare.com/tls-1-3-overview-and-q-and-a/
user_pref("security.tls.enable_0rtt_data", false);


// Limit (or disable) HTTP authentication credentials dialogs triggered by sub-resources [FF41+]
// Hardens against potential credentials phishing.
// [WARNING] Hardening this pref may prevent you from subscribing to SoGo calendars in Thunderbird 138
// 0=don't allow sub-resources to open HTTP authentication credentials dialogs
// 1=don't allow cross-origin sub-resources to open HTTP authentication credentials dialogs
// 2=allow sub-resources to open HTTP authentication credentials dialogs (default)
// [1] https://web.archive.org/web/20181123134351/https://www.fxsitecompat.com/en-CA/docs/2015/http-auth-dialog-can-no-longer-be-triggered-by-cross-origin-resources/
user_pref("network.auth.subresource-http-auth-allow", 1);

// Prevent password truncation when submitting form data
// [1] https://www.ghacks.net/2020/05/18/firefox-77-wont-truncate-text-exceeding-max-length-to-address-password-pasting-issues/
user_pref("editor.truncate_user_pastes", false);

// Block insecure passive content (images) on HTTPS pages
// [WARNING] This preference blocks all mixed content, including upgradable.
// Firefox still attempts an HTTP connection if it can't find a secure one,
// even with HTTPS First Policy. Although rare, this leaves a small risk of
// a malicious image being served through a MITM attack.
// Disable this pref if using HTTPS-Only Mode.
// [NOTE] Enterprise users may need to enable this setting [1].
// [1] https://blog.mozilla.org/security/2024/06/05/firefox-will-upgrade-more-mixed-content-in-version-127/
user_pref("security.mixed_content.block_display_content", true);

// Allow PDFs to load javascript
// https://www.reddit.com/r/uBlockOrigin/comments/mulc86/firefox_88_now_supports_javascript_in_pdf_files/
user_pref("pdfjs.enableScripting", false);

// Limit allowed extension directories
// 1=profile, 2=user, 4=application, 8=system, 16=temporary, 31=all
// The pref value represents the sum: e.g. 5 would be profile and application directories.
// [WARNING] Breaks usage of files which are installed outside allowed directories.
// [1] https://archive.is/DYjAM
user_pref("extensions.enabledScopes", 5); // [HIDDEN PREF]

// Control the amount of cross-origin information to send
// Controls how much referrer to send across origins (different domains).
// 0=send full URI (default), 1=scheme+host+port+path, 2=scheme+host+port
// [1] https://blog.mozilla.org/security/2021/03/22/firefox-87-trims-http-referrers-by-default-to-protect-user-privacy/
// [2] https://web.dev/referrer-best-practices/
// [3] https://www.reddit.com/r/waterfox/comments/16px8yq/comment/k29r6bu/?context=3
user_pref("network.http.referer.XOriginTrimmingPolicy", 2);

// Disable SB checks for downloads (remote)
// To verify the safety of certain executable files, Firefox may submit some information about the
// file, including the name, origin, size and a cryptographic hash of the contents, to the Google
// Safe Browsing service which helps Firefox determine whether or not the file should be blocked.
// [NOTE] If you do not understand the consequences, override this.
user_pref("browser.safebrowsing.downloads.remote.enabled", false);

// Default permission for Web Notifications
// To add site exceptions: Page Info>Permissions>Receive Notifications
// To manage site exceptions: Options>Privacy & Security>Permissions>Notifications>Settings
// 0=always ask (default), 1=allow, 2=block
// [1] https://easylinuxtipsproject.blogspot.com/p/security.html#ID5
// [2] https://github.com/yokoffing/Betterfox/wiki/Common-Overrides#site-notifications
user_pref("permissions.default.desktop-notification", 2);

// Default permission for Location Requests
// 0=always ask (default), 1=allow, 2=block
user_pref("permissions.default.geo", 2);

// Disable search engine updates (e.g. OpenSearch)
// Prevent Firefox from adding back search engines after you removed them.
// [NOTE] This does not affect Mozilla's built-in or Web Extension search engines.
user_pref("browser.search.update", false);

// Remove special permissions for certain mozilla domains [FF35+]
// default = resource://app/defaults/permissions
user_pref("permissions.manager.defaultsUrl", "");

// Disable metadata caching for installed add-ons by default
// [1] https://blog.mozilla.org/addons/how-to-opt-out-of-add-on-metadata-updates/
user_pref("extensions.getAddons.cache.enabled", false);

// Disable daily active users [FF136+]
user_pref("datareporting.usage.uploadEnabled", false);

// Minimize URL bar suggestions (bookmarks, history, open tabs)
// Dropdown options in the URL bar:
//user_pref("browser.urlbar.suggest.history", false);
//user_pref("browser.urlbar.suggest.bookmark", true); // DEFAULT
//user_pref("browser.urlbar.suggest.clipboard", false);
//user_pref("browser.urlbar.suggest.openpage", false);
user_pref("browser.urlbar.suggest.engines", false);
user_pref("browser.newtabpage.activity-stream.showSponsoredCheckboxes", false);

// Clear default topsites
// [NOTE] This does not block you from adding your own.
user_pref("browser.newtabpage.activity-stream.default.sites", "");

// Disable adding downloads to the system's "recent documents" list 
user_pref("browser.download.manager.addToRecentDocs", false);

// Amount of Back/Forward cached pages stored in memory for each tab
// Pages that were recently visited are stored in memory in such a way
// that they don't have to be re-parsed. This improves performance
// when pressing Back and Forward. This pref limits the maximum
// number of pages stored in memory. If you are not using the Back
// and Forward buttons that much, but rather using tabs, then there
// is no reason for Firefox to keep memory for this.
// -1=determine automatically (8 pages)
// [1] https://kb.mozillazine.org/Browser.sessionhistory.max_total_viewers#Possible_values_and_their_effects
user_pref("browser.sessionhistory.max_total_viewers", 4);

// Pacing requests [FF23+]
// Controls how many HTTP requests are sent at a time.
// Pacing HTTP requests can have some benefits, such as reducing network congestion,
// improving web page loading speed, and avoiding server overload.
// Pacing requests adds a slight delay between requests to throttle them.
// If you have a fast machine and internet connection, disabling pacing
// may provide a small speed boost when loading pages with lots of requests.
// false=Firefox will send as many requests as possible without pacing
// true=Firefox will pace requests (default)
user_pref("network.http.pacing.requests.enabled", false);

// Link-mouseover opening connection to linked server
// When accessing content online, devices use sockets as endpoints.
// The global limit on half-open sockets controls how many speculative
// connection attempts can occur at once when starting new connections [3].
// If the user follows through, pages can load faster since some
// work was done in advance. Firefox opens predictive connections
// to sites when hovering over New Tab thumbnails or starting a
// URL Bar search [1] and hyperlinks within a page [2].
// [NOTE] DNS (if enabled), TCP, and SSL handshakes are set up in advance,
// but page contents are not downloaded until a click on the link is registered.
// [1] https://support.mozilla.org/en-US/kb/how-stop-firefox-making-automatic-connections?redirectslug=how-stop-firefox-automatically-making-connections&redirectlocale=en-US#:~:text=Speculative%20pre%2Dconnections
// [2] https://news.slashdot.org/story/15/08/14/2321202/how-to-quash-firefoxs-silent-requests
// [3] https://searchfox.org/mozilla-central/rev/028c68d5f32df54bca4cf96376f79e48dfafdf08/modules/libpref/init/all.js#1280-1282
// [4] https://www.keycdn.com/blog/resource-hints#prefetch
// [5] https://3perf.com/blog/link-rels/#prefetch
user_pref("network.http.speculative-parallel-limit", 0);

// Mousedown speculative connections on bookmarks and history [FF98+]
// Whether to warm up network connections for places:menus and places:toolbar.
user_pref("browser.places.speculativeConnect.enabled", false);

// CSS Masonry Layout [NIGHTLY]
// [1] https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Masonry_Layout
// [2] https://www.smashingmagazine.com/native-css-masonry-layout-css-grid/
user_pref("layout.css.grid-template-masonry-value.enabled", true);


