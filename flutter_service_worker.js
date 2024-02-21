'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "8d32b9ea53dd383ede681897dfaa47cf",
"index.html": "39338187bf12f15c2a89f58329edc39d",
"/": "39338187bf12f15c2a89f58329edc39d",
"main.dart.js": "8045ea87f163fdc5cdeeae5cbe4f3ef6",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "cea054b9a2a41e6039aaef5d3c31701b",
".git/ORIG_HEAD": "9ebfef992f81e204886837831994030c",
".git/config": "d79b0fe62cee2ebf7449fa6c58f15eef",
".git/objects/95/50929e4ec64ba05b7bc24905d8b42e75bee992": "00f61c330bc34cf25b431960c586ecab",
".git/objects/57/1b161c6aa3667bcbad3cbd1239ca4962caa68e": "20a3a36bebb7421bfa745da58040cd36",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/9e/15ea48267a699cf112aa7a57e34178d96c7e6a": "4e5bbfddb5dd6cd16ef49b020064a2a8",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/94/b52e13bf7919ae4ea7235d78019b592dde8611": "b79fa5ca1cdbf72f253763797850f314",
".git/objects/0e/e3590f4d74c3a4e4621a8d048d01f13436ec7a": "25939fd9f3cb53628d90cf3f4f9a026a",
".git/objects/60/6c8c0ad521967e06c2b28098aaad172a7c0d89": "84e06f954dc7d26920113547cc2b7e09",
".git/objects/34/ea9cc8e7687a83ea42786f3cc1afac735a3eaf": "a448b5f38281e8fb33ca25530a912356",
".git/objects/a3/f2337d86f21a78c523693361033424c47e3954": "58b51309c8341dbab5305ce47996aa4d",
".git/objects/ad/0a142733cea0ae4116851c415103c31da4e993": "dcd48a81e532d25c4426d19e19d927d2",
".git/objects/bb/44f5a917143c9f4448bdfee7ad8c88fc0bfcb1": "e06b3028f916239e27cb0121b111f134",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/bb/4114b3d2a5bdd1e81588164febbd6adef55d56": "c635145ccee4d37db0844f625f391ff6",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d0/86a604054fa5e3b7b395fee5fde0ae360b78e4": "7c164a8bb74bab800efb8ab327526a6e",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/f4/daad307419cdb9ca3ad937c09ba18358c6c9e3": "321ce885b0f291bea75222320d0204ba",
".git/objects/f4/a4c684cdcc3f5990e2f75f0014848e3bcc95dc": "ca32f7b6eaee316ac5ac033d5aac77a1",
".git/objects/f3/7badf0212638d6976b4018f89a2f60e6dc7247": "e784348b56b4eea1d36d91cd3f15df36",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/fb/c9227ae78bcf41692f6ab15291ae9708dbd2f2": "34bf8a29f65e37a19cb3b8f6479cd54e",
".git/objects/c6/959d46605de8352b65aaca3a364a9595513e28": "2ae402953ec373cc15d96e9932d7ceae",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/4b/08c92a6448f807045994c6de22d8ee9093aaab": "73d0aae290bed3c22142aa1a7a3ba56f",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/1a/1896cfa8a99128b3a3d30e71e820aa6781259b": "c40133fbed39583c7e36e2539bd7cf78",
".git/objects/7b/3958b6f73dbfab530d8a3b992aa5ba345d4178": "38a40e0079fa147a2c7bee8d8d89c65c",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/75/d77079d58fdda34ffa968014ff79577757000e": "6ebb9e9e5dab72a146b7cf59c1427ce2",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/5c/c6b490a6d2abcb3104cd22d8091b93110b3719": "d4c8ffaa5603b7e1787b74cceb0cd761",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/3f/69334a5729f0868a97f039ebb9cefbd7ecfd35": "60a7b091dafc74406d6ea6d2af22d64f",
".git/objects/30/113998c946d3714021bd3655caabad312c893c": "98741f60de35cafbed7c463a13c65d4d",
".git/objects/64/573e05691e5b8506c94dfee366ae9faee3d81a": "c321656cba0f4171ebfb6e7ecb089c38",
".git/objects/90/6f604882bfec6f38298acc81310d8540c4f66b": "adfa19bcbb75b1a5f83c8d42fbbd3a3b",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/ba/b0dea054d11a42c7ff9e20df78ca4f81cc8538": "c46a56de619ff40d14d4a2147650f78e",
".git/objects/b1/6510ce396d6b7287a4125806454ddbaa9da11a": "4be2fd294329251b26b3ff3cf4b17bb9",
".git/objects/d5/1069eab289a58acde4f7c3278f247613656015": "b59020b5e55722143441dfee3497953e",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/db/52aaa60741caeccd9535b1aaef530bc2963114": "9a7d61489ae2b15a697369f096dff82e",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/8b1de1fc5c07a430d8fc24ce09b17881bcdb55": "4d489d5dadd7a58a543e6e0397b1081c",
".git/objects/c3/417463d3521b33ddcfbce17d6ad789254d9c5e": "2089157a3d3a70cae179f8d0208558b1",
".git/objects/c4/8298bf1ee9175eac50e8a58808ea7431c95833": "e48f1efd16a7542394ac083096d63b04",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/c5/57a6cbda1ceb2e0c41a021fe4ad7a4338dca46": "2a330add9a95161b2daf843f458a786c",
".git/objects/c2/06f548164b500729b75a04b76784a8644929da": "1efb817c511b1a58a8739b8224b975e5",
".git/objects/e9/91bcecf4cd95c365fea36bb72fec66cc6a628a": "6df271eb32f5e31778dde83a8b382fb0",
".git/objects/e7/a94658c357b0cda853d46f34b97fa700b1993a": "f7ad837c7bf1cd8ce1c72da887f6c6b6",
".git/objects/e7/a8251918cf5f9e8539a2116fe579963480fbb2": "9ec4823988c13fd1ff7bebc98c0caada",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/48/50e679b56656bfdee1fb37cd7919861b239b42": "a135d53b3fcf345ca7dd599ff75993dc",
".git/objects/23/c194d98303aeb47903311161bdd93dadc2c4f9": "3ec6543db5f548c1493951923411aa12",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/2b/e39c7fd3da441ddac9bea54fd12621dd39960a": "24031b20667d22ca8dba4debe8b9eab5",
".git/objects/7a/7a69c1c419b1ddb785fddb8296dcc39bc380f8": "863fd58e0ecd6eebb4fdc2054fab6077",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "0aebccfd5866bfc3e7c8f625230c22f7",
".git/logs/HEAD": "c1a5027f9991ac79edf09af9f28e329f",
".git/logs/refs/heads/main": "5c484d8074d96b996438ed5989923043",
".git/logs/refs/remotes/origin/main": "aef7f98e8c9bae4fb2dd97e662923c25",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "0b416b685589f14b9f0b36da83051319",
".git/refs/remotes/origin/main": "0b416b685589f14b9f0b36da83051319",
".git/index": "734c4ba02a662c9f60b295c855672814",
".git/packed-refs": "a891e6bb26eb0d480aef486a7e8ea166",
".git/COMMIT_EDITMSG": "7b66edc09cdad5fd478b5092f3c07972",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/NOTICES": "53ca75ff6798e7fe7cc2466119a58e38",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "69a99f98c8b1fb8111c5fb961769fcd8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"assets/fonts/MaterialIcons-Regular.otf": "934eafa9ddf9c6322a3ed789312060be",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
