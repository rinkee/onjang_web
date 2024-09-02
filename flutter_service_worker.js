'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "1002ec2521e1d9a820775fc3077dbd43",
"version.json": "8d32b9ea53dd383ede681897dfaa47cf",
"index.html": "333cbcdbfb6c2e2112d6f1a4d49c5cda",
"/": "333cbcdbfb6c2e2112d6f1a4d49c5cda",
"main.dart.js": "10a564de5f4ed9d704f1d79c12d37aa2",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "cea054b9a2a41e6039aaef5d3c31701b",
".git/REBASE_HEAD": "efbeb925d4cd16988dcbd4d77c8a73c4",
".git/ORIG_HEAD": "77347bd7918f9cb9809b657a527e41bf",
".git/config": "731686d464fa8bbca458f9cfbd3f0c69",
".git/objects/61/03313eeb02ade32d1f6f035adc459c65d5c53c": "4c2e0361f091a3e00e7c5e4fd6f536b9",
".git/objects/61/af33b77cda8cfc445df97ca704719a8f50d7bf": "6337d5136c2ef7124286aebd251f08bc",
".git/objects/68/dc59c3de8f4cfb3b7280c96188522c7297eafc": "0de9c94a1ba9504ad545ab0646366410",
".git/objects/57/8322e2b8da90f8efeadff7f2d163a606754a07": "40f3cd601c206b7c50255096145cf198",
".git/objects/9e/15ea48267a699cf112aa7a57e34178d96c7e6a": "4e5bbfddb5dd6cd16ef49b020064a2a8",
".git/objects/32/4d598a6c2d2550a02d27b0552aaff2d2866865": "724cd3630fca614f9ab961ad157bdb3f",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/35/a94438b63678cf29ef3b70c9f8a9c655c82528": "f0869729268cc55f5e46b4ea4b75d76f",
".git/objects/69/0bfc61a081f8dbfc8da384a2879a2a041dabdd": "5a0891072c99514867caaaa2a051ff05",
".git/objects/51/9c209cfb30c49f925f9af091f6d5c3f61a4a34": "3296bcd968c376bfd52ba1087a877280",
".git/objects/3d/7076705716bda0283471fedf8e095e3bda8b74": "545bcb2772abccc5f774178aa8d93cc1",
".git/objects/34/ea9cc8e7687a83ea42786f3cc1afac735a3eaf": "a448b5f38281e8fb33ca25530a912356",
".git/objects/5a/3bdc29cd1e72971852056388eb514fc2e1cd47": "8a6544c3f63d1fc380423bbd412d5b89",
".git/objects/b5/e38496c44aba6a0e19928f98fd7ed9e65ac835": "28b4b8eef94d79d55a6062c40da4c84b",
".git/objects/d9/1f0e01bb6034c39c82ad07b66818c5ad761a66": "767a451af5c87811b5c636b21fbfea8b",
".git/objects/ac/2da6961949ceba3d0b9b0c9023bef887be9526": "3ea183bf76ba29fe4ed6f2f09f015189",
".git/objects/ad/377d35c4f4d7bf92c4f754ac67aca43f36cf82": "5b3a89c44ec2d71e06fbb2b37ff315fe",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/be/9f9f6d8ecd9a9bbc771bb859643572f7b37037": "67406a17d5f2983bc4f19a68a3392a94",
".git/objects/df/4214f6441e52f8abf2e8d570912839bf615222": "053b8e42882da9db869b780e285ed28c",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/e2/150fb2cafad940bc4db75873b2f4a650dfa70e": "ed16534b54243df7887ff9fccefaa1aa",
".git/objects/f3/c87ecff13545f62272a63013df002628d2e4d9": "798cf3be1b186f9e255bbb46b6d7ba0f",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c0/af64eeaecdd6d856e89e76bc7d10841906eab1": "c8c57b36336a71e6b835f48f539ea6b7",
".git/objects/c0/9897d1af3e5a61dcad13e156360856eba95cb1": "2a0f39dff7bfefb459c1a2b01bed5782",
".git/objects/c9/66aeeb721c7b4c90f5ad35c673c6a9681aa565": "5ec25aa7897e85cc1ba54298e5013c43",
".git/objects/c9/9055fd2a845ca57d689288d59e56c364d37739": "beafba6c90a0cef1be7ef7707e254db9",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/bb96c802f9b4aac3a42f550b6a2d60adc92306": "055282765f21977c9158ed613e14a8e3",
".git/objects/c8/ac0482a9cd7e7e195cde7c8ccd359473414a6a": "7d6a028906ad3a03c5f3d424dc028f14",
".git/objects/c8/6457a51d80d1a9ee7eb157106f23c29735d2cf": "bad688260949f06402006a1aed6c8737",
".git/objects/fb/3c5f63d3db84ad540ac6d45919d1c176adfb1b": "9fbdb22ed619f238e0129ee60305d9d8",
".git/objects/c6/6f3dc1620f086e8915cf1f340ad68f875fd062": "97aca497b6a559d95437a1ec0751f439",
".git/objects/4e/b81accfae21e0798a4471fb7fdcddb3ecde3b9": "25fef67082f159ec4f5113b0f085d6bf",
".git/objects/pack/tmp_pack_KzaiXf": "16c848f9f2ef5f1dab183233867b96e2",
".git/objects/pack/pack-ea8155b0209ae25f4b72e2e0e41879892eb811f1.idx": "8ac6cf7560555fd9ebf6ec6f2d0267ac",
".git/objects/pack/pack-ea8155b0209ae25f4b72e2e0e41879892eb811f1.pack": "e616116b040ab847e8b979f096d89fb4",
".git/objects/pack/tmp_pack_BycwzC": "5272b05a1d6fe346dafbfddff80f6b8a",
".git/objects/42/c27b2dcc19203012db5dbf3867a57af21ef5e4": "f42a058856418624f2744ad46618d9f0",
".git/objects/45/c57a2e19dd64878dbc78fa6859b3d9de57caa3": "aab9e1a611a6028d37bf55397f5f47c6",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/7b/ef8e15cc15739ae04f3732ff20955ab98c2486": "fe77e3cf304fc2d9864a7fa33d87600c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/7e/2f8c39ae448aed01065a750ee53629dd04fdb6": "8a56469533c887d8bfc38bdac910d2b1",
".git/objects/10/ade3b4754c7470e47c6b6ecde5665e7d58ca80": "688c908a8ec31ab92d9f88787293745a",
".git/objects/19/75d7a843a3856a90538ca70fdf752f9046cb84": "b5c53bff91f2bc3103c8802330352e4b",
".git/objects/4d/2f8db5d162dcde6c9ad295d5f7d9ef5b66e982": "6468d035239021ba53fcf02fbcd84cca",
".git/objects/72/93488f4c1b5e845bd5358d6e3a3534abea4fe4": "cd7259dfeddefe3701788168d4344580",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/2a/0760ceff01aafe89229c89627ac7dae4a5c1a2": "19f25dab911b5de63769342a17f58a6e",
".git/objects/43/72734de5bc5bbd0476b2eeb7a493d5e2b6c534": "b2e09fdab6020cbdc65904c6da1a7018",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9f/cc1c19df106070d12144a28261e267556d4912": "cee4815be12511ac92675e9e8b30f8e7",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/9a/123c22083f2df792c7c054fed9f3b268002a0c": "afc7a07547ca45d61bec9e72449b1c5c",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/01/1647ee7ece19a20768c1115a8bfeb728fa08e2": "dd192c7dcced286c7c738f5d831807c7",
".git/objects/6c/07bcf60e91f3fc7155e751535313e09c85123a": "c2fe07f044b74e595453659911e7f807",
".git/objects/39/ea18dd716d28ef4453b66f1864dedf2f3f3131": "0a1f59f65dc7d095c2a3cffb00e123d1",
".git/objects/52/be0d8a20aa4d5860da357d3e03275459f442d2": "9935b17f0d6b8606cbcb1364bcf83dbc",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/d3/d87a98fe916b5ae3cb4e3fffd3ca8a78d0a6d8": "5f86d8c754cf4ddd7dac9741fe9bd0e5",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/f0d9ae725bce40a2e39dfecfa9666332226b45": "4aadf41b57863bcb029d0bb393452621",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/a7/7e569ad861952865a0c600bd51b8a05bf8d0ba": "f9b9b72de77ca40beee97291ce84148c",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/d2/a74f77e32f5258a6f1b4d874b6c2f687f41433": "3191076a353a66a1293fe763e9fff27e",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/db/6a3b40083bfa9433a3d9928e279ffa887ac3b5": "ab8a512d8601397598f1c6ff4d17a60a",
".git/objects/c4/62891a102049d3ef622e5726f1724aaf9458ce": "42e80624c8729c6d3f31ac9df2398048",
".git/objects/c5/6c6725376d64d07cccbded6619203c5c5219ff": "0b5031a49c96d190c198266c52258838",
".git/objects/e9/dfeb973a496a9ce7767e4fd0147222cfbd0f22": "51d92e51d27a0326eda7c99221584201",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/ff0aac9e54ea5e2eb45e16963fddda47f6fe92": "022bf44d6a51c020ba161b4eb05a29ba",
".git/objects/2d/32dfaccd5d2397d944999a8cd08ef3f6f16c90": "cff43af665d01ea37dbdd1a942efda80",
".git/objects/2d/33f8ca3a6636c0c05c8a292ac1e9063a945d95": "741420b58035d3917d8b4d94fd170759",
".git/objects/77/0877653fb5822a8030b1a107579872c8042bde": "a5d92068bfc663a1a2b4130e85a204a8",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/4a/945d7dcef67e3960736183e7fe485113f6bdeb": "3b4f2047ad9628c1d59fc933e0685aa7",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/2e/5d657b528b02a54e0ae65354b3ac5d78dbde8d": "33388f2413e4fce3176e464ab751d910",
".git/objects/22/15788429c1af632f92aa9b089c9d69eed5ee22": "d70fd095b67602f8fb5a8d6fd44c1f61",
".git/objects/22/97b264d8c8d961447a563db025a72adc0fa36a": "917bf94db0454fc04699773446d5e213",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "a6bb1bc70ea9e281345d7789a55a636c",
".git/logs/refs/heads/new": "8b595ee565621a02b080bcdd454711b9",
".git/logs/refs/heads/main": "021e1a23950e8eccef82b73c158e6e72",
".git/logs/refs/remotes/origin/main": "24d454580aebe352fca18563da766e8e",
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
".git/refs/heads/new": "77347bd7918f9cb9809b657a527e41bf",
".git/refs/heads/main": "efbeb925d4cd16988dcbd4d77c8a73c4",
".git/refs/remotes/origin/main": "23b764d5b005ac0c5b8c542679d9a749",
".git/index": "94c09b55855594a488db7b76f5376384",
".git/COMMIT_EDITMSG": "9cd599a3523898e6a12e13ec787da50a",
".git/FETCH_HEAD": "10d57cc523893d07fb2307269868df96",
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
