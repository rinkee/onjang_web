'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "8d32b9ea53dd383ede681897dfaa47cf",
"index.html": "28cdce315d8201dca74cc6f61f7d55dc",
"/": "28cdce315d8201dca74cc6f61f7d55dc",
"main.dart.js": "4705066ceb69cc9cf608c9bda1850ffd",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "cea054b9a2a41e6039aaef5d3c31701b",
".git/config": "746edf58f196d57dff5cc6243cddc606",
".git/objects/61/af33b77cda8cfc445df97ca704719a8f50d7bf": "6337d5136c2ef7124286aebd251f08bc",
".git/objects/0c/8821e480cafa1489e8aad9d9ddd3d5c60f879b": "1c3df71888bd674aeb64007720152d84",
".git/objects/68/5484eab262da7201a31f54610425eb7a017eb0": "25956c6850fad1676956d23fec8d72dc",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "0d104480d68c1652a53721377a02a882",
".git/objects/03/58b5c6b2d2cf797119104b2f3fdfa26752d33f": "3e2f645ddff0f29a3b26c9e46a922c44",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/9e/15ea48267a699cf112aa7a57e34178d96c7e6a": "4e5bbfddb5dd6cd16ef49b020064a2a8",
".git/objects/35/f4f14a19da656b5089e19ce3c9cd36f45db7c3": "70f48cd523af9c950fb87f848b708ca5",
".git/objects/35/a94438b63678cf29ef3b70c9f8a9c655c82528": "f0869729268cc55f5e46b4ea4b75d76f",
".git/objects/69/c8cac678fbeafe065d474fbfdf461bcf7abf8e": "b50c13d1e5df1ccaba09a9177ab7b415",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/51/3b692c0453be6f2ed67bde4d288c6d2e2922cf": "72df92e6068be4a45ecb886185809ae0",
".git/objects/93/ae8beefb9e28c60cd9ac6dfcff6492d1970ea0": "41842898bfc5e2bb87b8159c2fdc8c3a",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "fd2d8c0d844b234856b36b93f652048f",
".git/objects/0e/a0a8f33482a4f1e95c40ba006f194e267d507f": "81ee86e3a92e08f0a889908f86c68382",
".git/objects/34/ea9cc8e7687a83ea42786f3cc1afac735a3eaf": "a448b5f38281e8fb33ca25530a912356",
".git/objects/a3/832d6740eef3f45d537299f7326ccb5110ecb5": "8ee13e01a1cd843c73d6534c1f94228e",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "468a6506934a07c970a4739eae75eedd",
".git/objects/b5/e38496c44aba6a0e19928f98fd7ed9e65ac835": "28b4b8eef94d79d55a6062c40da4c84b",
".git/objects/d9/1f0e01bb6034c39c82ad07b66818c5ad761a66": "767a451af5c87811b5c636b21fbfea8b",
".git/objects/d9/84965630e2b71f0c560981117facbfd9a330a9": "16614d2e08f40ab54f4073546f2728f3",
".git/objects/ac/2da6961949ceba3d0b9b0c9023bef887be9526": "3ea183bf76ba29fe4ed6f2f09f015189",
".git/objects/ad/6ce3b38b37a16c5a8d83ea6c7fa34c08ae6855": "dba8b728b373be9afbdd9e6be79a2083",
".git/objects/ad/19bcb1e1eee0c461ffd6627e61efe01bf91143": "e09189d1be755948eaa2ceb5b831bc39",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/be/9f9f6d8ecd9a9bbc771bb859643572f7b37037": "67406a17d5f2983bc4f19a68a3392a94",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/df/4214f6441e52f8abf2e8d570912839bf615222": "053b8e42882da9db869b780e285ed28c",
".git/objects/a2/a0a495d6027b936c6311db30b677a17a815ef2": "ee32c936cfe6747049b0758d696cbd66",
".git/objects/a5/f62e560f6cd25d94872656ecdaa5979db8ebc9": "f8be680ec480881ccd7e22de818ca419",
".git/objects/a5/4326ed4b45d13eb94e5a48328ac007440dc7f8": "bd64c7bb2ee220b55456eb1d72e6cd30",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ab/478a2a0ea39734b60838da6e66f085edc42b1b": "be4b2ab07339aa9f52d7785903f9f572",
".git/objects/e2/de90d5075a238d9d25683ef9ae03ae6da9debf": "26889bb2de9c8b137266cf51069c887d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c7/e2677980e37bfe54e0dcecc2834db3e5e4f0bc": "e4652ac0816aa3be57ce7ac9f963d97b",
".git/objects/c0/af64eeaecdd6d856e89e76bc7d10841906eab1": "c8c57b36336a71e6b835f48f539ea6b7",
".git/objects/c9/66aeeb721c7b4c90f5ad35c673c6a9681aa565": "5ec25aa7897e85cc1ba54298e5013c43",
".git/objects/c9/185a0e2ccbb2328b0b42c9ce1db132574a1d95": "485505c30f7f34c10c71b8977a269ddb",
".git/objects/c9/1d46772e183f9de7e878ab40457c33855dd38e": "6f7ba9a764498b6be75d3f278cacf5e8",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/7d4c38894339e3d986278684683e0a3be244c4": "6729fb96072fafe4954f732b1ae5b44f",
".git/objects/cf/c135744ad4e7955e61d1a41d2057e379e9622c": "a89089c3b82190dd18d0477c221bf1bf",
".git/objects/e4/4f1adc4f0781634622e1c0803e924ecefdd535": "a07261baa7ccc4d8add1373531c7a859",
".git/objects/c6/6f3dc1620f086e8915cf1f340ad68f875fd062": "97aca497b6a559d95437a1ec0751f439",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/4b/17e71929bfab687a85da65c7ac3b6406c399b5": "2e394a0839ada54156c396e88edfe33d",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "71df17c95c3124eada62b59e7dabda78",
".git/objects/89/608ccd78a6f46b19d7ce0660234188d835c87e": "120059fa937c3c17349a8ebca580c506",
".git/objects/73/efb4ce3b9c4663b8307843f5802e1fa133a2f5": "d35360ca878ef2d3f63279523e7bb1b7",
".git/objects/87/1390e0713c2ec38d67b3c7b5a5a1fc326670b1": "9b825ec57e9301eb499399a5ced804c7",
".git/objects/74/943a3f86653f65b71608ae832f24de2b6dcdaf": "4df247c9f0d55734448c99cbdb536ecd",
".git/objects/7b/ef8e15cc15739ae04f3732ff20955ab98c2486": "fe77e3cf304fc2d9864a7fa33d87600c",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/4d/3bd28bf48710bfd135cae9a5317e05da178ce9": "1c8764a0444bad59004f36d1f05a0bad",
".git/objects/81/54c4862cb4ba832466424fe740c153694a0bf0": "df6ed027631a65e9f83d596199568043",
".git/objects/72/93488f4c1b5e845bd5358d6e3a3534abea4fe4": "cd7259dfeddefe3701788168d4344580",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "cd62ee54b7ceea7b2a7804e69b1d9134",
".git/objects/36/eb39ee5be6ba3d6a11ebaa06a6a0d85a4d8307": "f2c4186d4ac7d9f13a8c03a80ea20406",
".git/objects/31/9b1487eb2d4e71bf5eb9ac755169fc24cd030d": "447e4bab641b270817e2065be57634ce",
".git/objects/96/14f3b8663723a6f5377b8ad0fc359d62856a72": "7cf6ad915a1b9e51aedccedd4f316450",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/6d/7d4a4ad72fb786ed102173cc56222ac7206310": "138cc6097645da2d477e885f7689fa17",
".git/objects/52/a323a217e4e468f6f19c76577a171c9abe52fc": "8ed18266f37644883290021101d1b488",
".git/objects/0f/e41a60e85f3ef8ddc019e4bf98acdb412d2a4c": "8dbe13d769239bba578c3eac8e941fae",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/7fc8f75e91d7031832a11726d141ad899c9eb9": "295a43d0f8d3915883bbd0906682c282",
".git/objects/d4/f0d9ae725bce40a2e39dfecfa9666332226b45": "4aadf41b57863bcb029d0bb393452621",
".git/objects/ba/1aae1c40a61a8304f489bb6b237a6e60ab5150": "680517bafb995b182fdd2c3f10bbc4f9",
".git/objects/a7/3304fa332001e62feec9e3cfe4e034f3356143": "f4e84ceb9c7a05c253cd53f0948da818",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "aa25b932ec40efacb1efe27e7cf25d82",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/de/c0b11c40235b8b2dc0e2bc745e57eb7998f642": "4c793430f2b74366e31a437f65ce4d18",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/e1/8a40df3b1b0eb9a61edd992104cd07bcc43495": "5f88dba8827cc39c5a9edb0b0cbbfe32",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/f9/a9cd079adb2930d2a99cc87648bb8b1461afbc": "3c0efb344c22b0c44943ecceb06d2b63",
".git/objects/f7/f501929521357fc1188a34b9b97b76f8382455": "3f54745c6c4659ace62eb66e7c112127",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
".git/objects/f6/79cb2d830fbbb7fbe74096bd82443c87d9dc2d": "5c245d1f46da7439902aaf7cf0ba7741",
".git/objects/ce/ad803a6c6d0b32427cfca672b648c6ed95aa0a": "8e4d82917dcc2a1ad0ba6aedf2d6c5af",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/24/e0550c9010ca9b7f7bd9a4b799dacc19adcc95": "618bee777664361ad8f144eef1b722ae",
".git/objects/15/959fefcb4708d0d5f072a2dd009ba742ce55f8": "d0d78ac935e0144b606fd111c7948463",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/1c/47109a767e91e994f53fa228f018d7e0d7c4d4": "0c7535cf56b41cd3cd55e20518f316b3",
".git/objects/47/1ec829e7f694771d6e4b08ad32a571fa0491a6": "7ed397046dadb8d78c8a9918c932ff9a",
".git/objects/13/1527bf5564f6badb05433e62cff030ec7672f8": "fd4ec5f6ad60f7b1420abdec1ef1b166",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "0aebccfd5866bfc3e7c8f625230c22f7",
".git/logs/HEAD": "06032f54f1a31125131361b3428392da",
".git/logs/refs/heads/master": "06032f54f1a31125131361b3428392da",
".git/logs/refs/remotes/origin/master": "35752f450cf7879fba68f4bff8080e00",
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
".git/refs/heads/master": "0cf79deb91cc9300cc28dc6ab484623e",
".git/refs/remotes/origin/master": "0cf79deb91cc9300cc28dc6ab484623e",
".git/index": "7b5b48a514e91fd1f5055c1902e55652",
".git/COMMIT_EDITMSG": "19f85b0d1373f1dd7e15a2e31453314e",
"assets/AssetManifest.json": "bb1e95c1a9dd9bdbe196a867bb9f455a",
"assets/NOTICES": "6b1debba0f1384c9b07b864346692946",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "fb3d13940b03ddb90fb11c521383a266",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "2118ebfea9627cfe5919ecbd9d329bfe",
"assets/fonts/MaterialIcons-Regular.otf": "b37ee30033f33d59cf8854e525ea71dd",
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
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
