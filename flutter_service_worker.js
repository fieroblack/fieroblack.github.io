'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "da76f4dd2a2bb4565cb23ebbb0b233ea",
"version.json": "68cb009ec02452f22d9b7283099aaa61",
"index.html": "909d94eff0c59ccfc859fcbe7255fcff",
"/": "909d94eff0c59ccfc859fcbe7255fcff",
"main.dart.js": "e253e9f9b3dc6d20a595e433cc67eb1c",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"favicon.png": "eab02f75d91e2d2f8f26dfe295e3acc7",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "2fd0246f46387a4274a225af944f3ee4",
"assets/AssetManifest.json": "8c48474bcc63440cabf7bd61446e2947",
"assets/NOTICES": "4107677776affef1442d8cd6de6bdcb4",
"assets/FontManifest.json": "5465ce2ff1aa346484ae4b9363608cbd",
"assets/AssetManifest.bin.json": "9942ce54ef79df6059448e83ac198230",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "83702ed7b950907257df85acd61eb6df",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "23fd02a61faec931b01440ea20d987d5",
"assets/fonts/MaterialIcons-Regular.otf": "c01c4764f45f068ca441f6d0604594fb",
"assets/assets/video/viaggio.mp4": "ada9cd43a441877adbc9a829da1382b7",
"assets/assets/images/foto8.jpeg": "326b8893cdcb1738257b9f9791baee91",
"assets/assets/images/foto12.jpeg": "588ff2171ad7266c9badae79af514e7d",
"assets/assets/images/foto4.jpeg": "aa6bb65a36a54ae44e6d2ca705c62b92",
"assets/assets/images/davale.jpeg": "9f66c2e3b01d6e2b8981026b66e527e5",
"assets/assets/images/foto5.jpeg": "8dc11b7e03befa12d0218c7acb38ba1b",
"assets/assets/images/boat-tour.jpg": "7ff9961ca449a4c0927285299199c930",
"assets/assets/images/foto13.jpeg": "35171ee8c80a7f509ccceb6bd8ef033e",
"assets/assets/images/foto9.jpeg": "c55d620230fc35ac73290a805f0ad6f0",
"assets/assets/images/foto2.jpeg": "5e9dbe597e78e0a152237c5a0fa85a65",
"assets/assets/images/foto18.jpeg": "5fca9818787029149049129aaa04c7e2",
"assets/assets/images/capri.jpeg": "70fb09b7bba898ea424c9af91aabdcd6",
"assets/assets/images/foto14.jpeg": "e0b01f1330d8ccbc1e05f8d9424fb834",
"assets/assets/images/foto15.jpeg": "9d1f2c39eed1d9ff840463703212a6e8",
"assets/assets/images/capresers.jpeg": "ea6b5a9d87000add7a0e2198dfa83173",
"assets/assets/images/foto19.jpeg": "f5fbd2d7e434f5dbe1e97414c96bfa9b",
"assets/assets/images/foto3.jpeg": "5db85f7e9c0971a39d89c15845a71487",
"assets/assets/images/foto20.jpeg": "a7981f347f52c9fbdeb3c86d09d8c406",
"assets/assets/images/foto16.jpeg": "fb881e0829a7ba5148f25d81b9c85114",
"assets/assets/images/foto17.jpeg": "468233b81e7cb1168a97bc9923266243",
"assets/assets/images/location.jpg": "c1a1b5655686c4db92290335646f3690",
"assets/assets/images/foto1.jpeg": "379dee78016cc3818d49ceb563d2b3f8",
"assets/assets/images/sep.png": "1cf4dfd13dd966d89ae85d51290228e4",
"assets/assets/images/foto10.jpeg": "1c5d53348d58c10e99fac56c0785d4f0",
"assets/assets/images/zag.jpeg": "5d6ec9f688f9e9325f0e5a6de0354e05",
"assets/assets/images/foto6.jpeg": "802c02710085a0b21d3f54b29af4387f",
"assets/assets/images/foto7.jpeg": "4369a61a4f5e1bd73df9df7287f25ecd",
"assets/assets/images/foto11.jpeg": "819f2b0c428f196062a41890d3e5b34e",
"assets/assets/icons/aperitivo.png": "95ef5c8867c05e41e0d659218945d736",
"assets/assets/icons/auto.png": "04842955531adf3df1013b38d76e848c",
"assets/assets/icons/boat.png": "00d39f88a744696c610f61ef1199f35a",
"assets/assets/icons/danza.png": "afe2399e7ba98f6fa68c36c594d3d2bd",
"assets/assets/icons/grotta.png": "e3d94300701a8a97be91b4dcccafd1df",
"assets/assets/icons/park.png": "73a408d73cdb4c7d5af8366939023090",
"assets/assets/icons/faro.png": "2a63f81c8fad681421c5d057bed9ce4f",
"assets/assets/icons/profumo.png": "6f1469a7cdde2c8fc98ab908fc972ac7",
"assets/assets/icons/segnaposto.png": "22e5f64c19748080a2b9c04f3d2cd9d3",
"assets/assets/icons/giardini.png": "f502f9a47edfba7d1a6aeb5d7763513e",
"assets/assets/icons/torta.png": "c33c149e5d4ed2baf62e6029e0ede9da",
"assets/assets/icons/tickets.png": "249a1d0c93aa459d1e261c91dc9cdd95",
"assets/assets/icons/panorama.png": "3c9805787fcf5cf7cf557fee3b052274",
"assets/assets/icons/borsa.png": "99e677f22665a199add992b50085de57",
"assets/assets/icons/casa-rossa.png": "2e50e19566b826a2ad9cc281f32fbd2f",
"assets/assets/icons/itinerario.png": "d43c1d689675e87d305f2b3b5e6d84f7",
"assets/assets/icons/sposi.png": "9cd16a64988972ee2efef6181034b730",
"assets/assets/icons/funicolare.png": "a92f9aaf70c10432b22aaeb4bf94d3ac",
"assets/assets/icons/museo.png": "1b6d2f2dee98fcf20cb8ce85a9ef2d89",
"assets/assets/icons/proibito.png": "6cff6844ec546cc616d75edc62a2029a",
"assets/assets/icons/clock.png": "04d267ea095e56cd6355e936203ffaa5",
"assets/assets/icons/bus.png": "fd63d8c41895545ab1b477ac57a6e3e0",
"assets/assets/icons/pranzo.png": "34e108539ff0244bb45e84db941d02fa",
"assets/assets/fonts/Tangerine-Bold.ttf": "8159a553ef417c00bc5c02ccc269dbdd",
"assets/assets/fonts/Gruppo-Regular.ttf": "bc9af224571efcd3b70b12a626e3c1e4",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "9fe690d47b904d72c7d020bd303adf16",
"canvaskit/canvaskit.js.symbols": "27361387bc24144b46a745f1afe92b50",
"canvaskit/skwasm.wasm": "1c93738510f202d9ff44d36a4760126b",
"canvaskit/chromium/canvaskit.js.symbols": "f7c5e5502d577306fb6d530b1864ff86",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.wasm": "c054c2c892172308ca5a0bd1d7a7754b",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.wasm": "a37f2b0af4995714de856e21e882325c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
