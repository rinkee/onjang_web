'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "193f52eaeeda3c2d839fd2a003feca78",
"version.json": "8d32b9ea53dd383ede681897dfaa47cf",
"index.html": "3b57b18b4bd2d9985087004b528a0d66",
"/": "3b57b18b4bd2d9985087004b528a0d66",
"main.dart.js": "10a564de5f4ed9d704f1d79c12d37aa2",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "cea054b9a2a41e6039aaef5d3c31701b",
".git/config": "746edf58f196d57dff5cc6243cddc606",
".git/objects/61/af33b77cda8cfc445df97ca704719a8f50d7bf": "6337d5136c2ef7124286aebd251f08bc",
".git/objects/68/dc59c3de8f4cfb3b7280c96188522c7297eafc": "0de9c94a1ba9504ad545ab0646366410",
".git/objects/9e/15ea48267a699cf112aa7a57e34178d96c7e6a": "4e5bbfddb5dd6cd16ef49b020064a2a8",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/35/a94438b63678cf29ef3b70c9f8a9c655c82528": "f0869729268cc55f5e46b4ea4b75d76f",
".git/objects/69/0bfc61a081f8dbfc8da384a2879a2a041dabdd": "5a0891072c99514867caaaa2a051ff05",
".git/objects/3d/7076705716bda0283471fedf8e095e3bda8b74": "545bcb2772abccc5f774178aa8d93cc1",
".git/objects/34/ea9cc8e7687a83ea42786f3cc1afac735a3eaf": "a448b5f38281e8fb33ca25530a912356",
".git/objects/5a/3bdc29cd1e72971852056388eb514fc2e1cd47": "8a6544c3f63d1fc380423bbd412d5b89",
".git/objects/b5/e38496c44aba6a0e19928f98fd7ed9e65ac835": "28b4b8eef94d79d55a6062c40da4c84b",
".git/objects/d9/1f0e01bb6034c39c82ad07b66818c5ad761a66": "767a451af5c87811b5c636b21fbfea8b",
".git/objects/ac/2da6961949ceba3d0b9b0c9023bef887be9526": "3ea183bf76ba29fe4ed6f2f09f015189",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/be/9f9f6d8ecd9a9bbc771bb859643572f7b37037": "67406a17d5f2983bc4f19a68a3392a94",
".git/objects/df/4214f6441e52f8abf2e8d570912839bf615222": "053b8e42882da9db869b780e285ed28c",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c0/af64eeaecdd6d856e89e76bc7d10841906eab1": "c8c57b36336a71e6b835f48f539ea6b7",
".git/objects/c0/9897d1af3e5a61dcad13e156360856eba95cb1": "2a0f39dff7bfefb459c1a2b01bed5782",
".git/objects/c9/66aeeb721c7b4c90f5ad35c673c6a9681aa565": "5ec25aa7897e85cc1ba54298e5013c43",
".git/objects/fc/e91041d2a75ab7d6bb3f895ebbde00b6af35f7": "262487d7c04bc3b33a6e2a7e3b193158",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/c8/ac0482a9cd7e7e195cde7c8ccd359473414a6a": "7d6a028906ad3a03c5f3d424dc028f14",
".git/objects/c1/92880410f90e93e79c9f87fac5ec728da6fc4b": "ee67277068654300dc6fee77ce2cf96f",
".git/objects/c6/6f3dc1620f086e8915cf1f340ad68f875fd062": "97aca497b6a559d95437a1ec0751f439",
".git/objects/pack/pack-0b74ce69afab22b1750d35afac3c19d36a89099b.idx": "210493e83eb2a777d519e20670847119",
".git/objects/pack/pack-0b74ce69afab22b1750d35afac3c19d36a89099b.pack": "6d46ec94e2eab9d362d35357a25118ef",
".git/objects/45/c57a2e19dd64878dbc78fa6859b3d9de57caa3": "aab9e1a611a6028d37bf55397f5f47c6",
".git/objects/7b/ef8e15cc15739ae04f3732ff20955ab98c2486": "fe77e3cf304fc2d9864a7fa33d87600c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/19/75d7a843a3856a90538ca70fdf752f9046cb84": "b5c53bff91f2bc3103c8802330352e4b",
".git/objects/72/93488f4c1b5e845bd5358d6e3a3534abea4fe4": "cd7259dfeddefe3701788168d4344580",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/43/72734de5bc5bbd0476b2eeb7a493d5e2b6c534": "b2e09fdab6020cbdc65904c6da1a7018",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/3f/35120781880c8d6df2337143743763f98ba52a": "d69f6074ea5a0800eea5d4da75681335",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/01/1647ee7ece19a20768c1115a8bfeb728fa08e2": "dd192c7dcced286c7c738f5d831807c7",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/d3/d87a98fe916b5ae3cb4e3fffd3ca8a78d0a6d8": "5f86d8c754cf4ddd7dac9741fe9bd0e5",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/f0d9ae725bce40a2e39dfecfa9666332226b45": "4aadf41b57863bcb029d0bb393452621",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/a0/51446e1b7bccfd1e5b66367d2ea04a959459d9": "0ff7de7d235f2133934032d4bc5bc391",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/ff0aac9e54ea5e2eb45e16963fddda47f6fe92": "022bf44d6a51c020ba161b4eb05a29ba",
".git/objects/2d/32dfaccd5d2397d944999a8cd08ef3f6f16c90": "cff43af665d01ea37dbdd1a942efda80",
".git/objects/77/0877653fb5822a8030b1a107579872c8042bde": "a5d92068bfc663a1a2b4130e85a204a8",
".git/objects/84/ac4feb07e5b0a8dcc04a751be1f51d58786a36": "bbbea27cef10fd03d7266f51c291127a",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/2e/5d657b528b02a54e0ae65354b3ac5d78dbde8d": "33388f2413e4fce3176e464ab751d910",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "a32173e1c28db1d45dd0b578457a976f",
".git/logs/refs/heads/main": "a32173e1c28db1d45dd0b578457a976f",
".git/logs/refs/remotes/origin/master": "dfbdcd8bd364d25732d99c97b11f184b",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "d10cd66ddc58efe0a8f85d8e89c836cf",
".git/refs/remotes/origin/master": "08792f409ccd075eec0eec4b993a0353",
".git/index": "5196d9cb9686e7edd2eaef728b07da0f",
".git/COMMIT_EDITMSG": "2763adbf8f098a199d84ceb184d9ba0d",
".git/FETCH_HEAD": "57d79f1f6b20b582fa10995b3a411022",
"assets/AssetManifest.json": "bb1e95c1a9dd9bdbe196a867bb9f455a",
"assets/NOTICES": "4b85cb6c86baeac568ebdb82fe9a789b",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "fb3d13940b03ddb90fb11c521383a266",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "2118ebfea9627cfe5919ecbd9d329bfe",
"assets/fonts/MaterialIcons-Regular.otf": "71aed41a9e1ab4d6de715382bf0b831e",
"assets/assets/images/useBalance.png": "0dcd8834a15a8ff9500a511893a0b01c",
"assets/assets/images/afterUse.png": "e693a41e5e391fee25ef012aec5f0720",
"assets/assets/images/showLedger.gif": "2c2d22f317c3bdb11c399157e1f9df29",
"assets/assets/images/worriedMenBG.png": "b383aa640c79491fa6e30e6cd166ddd8",
"assets/assets/images/home.png": "d91560894edbd6c8790a8e72a823e4a9",
"assets/assets/images/worriedMen.png": "0ad8cdfbcb0bd2a0c9634586e7306b6f",
"assets/assets/images/use.png": "f230e11c2d203419e879d41ae0bbdbbd",
"assets/assets/images/customer.png": "53dbd4e472cd61875ba7e18f15274953",
"assets/assets/images/favorite.png": "268b8b0bb48edc7968cff2a9e58f9084",
"assets/assets/images/showLedgerOrigin.gif": "a204d4baa2d059771d76c03af47aea6b",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
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
