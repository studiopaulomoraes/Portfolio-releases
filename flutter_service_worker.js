'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"index.html": "ec171671c15f45b49c8e29394beea93e",
"/": "ec171671c15f45b49c8e29394beea93e",
"version.json": "5ca1734b9930fb560bbb41eae8408669",
"main.dart.js": "6ef55272f2043f2e980fe194d533ea3b",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"assets/fonts/MaterialIcons-Regular.otf": "e1f69883a6a4adabbfdbf099d609bead",
"assets/AssetManifest.bin": "03b3ea4f3ff6511312a61af4e1045710",
"assets/AssetManifest.json": "cc282ede109499cbf759d501d13aa916",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/NOTICES": "096d6ba185b521f75489c2fe4b5366b5",
"assets/FontManifest.json": "ab310715c29abd30b1eb1b6c626d8ec7",
"assets/AssetManifest.bin.json": "d11acf155e9624e8f07116252367add6",
"assets/assets/facebook.png": "021ada146ffb7c1753557ff29618d04c",
"assets/assets/github.png": "d22ee3727a7216019c3848df6eafa024",
"assets/assets/twitter.png": "8f35a40403a84631c4125c4f1859c7a6",
"assets/assets/moon.png": "a270b8a10d1a9a52441bf5a322dd1b86",
"assets/assets/medium.png": "fb86f4060325caef8ea1f0fad0d25f40",
"assets/assets/logo_probox_studio.png": "ece18cc8c517776b3366087d13d8ccfd",
"assets/assets/avatar.png": "b0dafe38319b3a3611e3f390a973e450",
"assets/assets/FontManifest.json": "bf66a3e6b76384355a2c9db4868e085c",
"assets/assets/GoogleSansRegular.ttf": "b5c77a6aed75cdad9489effd0d5ea411",
"assets/assets/instagram.png": "26631a4043b14dff84180bdf51c3cacb",
"assets/assets/medium_light.png": "bd516690c99267a778885736015befe8",
"assets/assets/linkedin.png": "926e2dcf5ab4220a359867614556df68",
"assets/assets/works/ic_caravelle_palace_hotel.jpg": "8b2f0879e7ed7a0efab28bfb81c2e623",
"assets/assets/works/ic_bradesco_seguros_dirija_bem.webp": "76fdfd4912467bd324968a37e284f5bc",
"assets/assets/works/ic_malapronta_com.jpg": "3f78cae849f1b6876f6c12af48f3fced",
"assets/assets/works/ic_pousada_hibiscus_beach.jpg": "d706e8e9c4534c53340c590a63819c0f",
"assets/assets/works/ic_code_reviewer.png": "44f0198b87d92c6c7b8ff0d1bca7d6f2",
"assets/assets/works/ic_ae_broadcast.webp": "21734efe2e322fc559e5e18927632d33",
"assets/assets/works/ic_hotel_sol_belo_horizonte.jpg": "ed23e51baa1dd7ccff4f054845b16732",
"assets/assets/works/ic_metropole_rio_hotel.jpg": "8c8e78a566b609fd3861ffe61f8ebd03",
"assets/assets/works/ic_hotel_rainha_do_brasil.jpg": "7d281a5426abf399b3e6b357a4710284",
"assets/assets/works/ic_dorisol_recife_grand_hotel.jpg": "0466552f37d5088764ab318011257b9c",
"assets/assets/works/ic_hoteis_othon.webp": "f758a027b0aca7f187dce5fe8d79b86d",
"assets/assets/works/ic_udfe_ycard_carteirinha_de_estudante.png": "a34c418763acbcb7047eea3b8f79d33e",
"assets/assets/works/ic_mc_flats.webp": "62f4e79aadc2e4529403d3529e2c6bb5",
"assets/assets/works/ic_generic_hotel_app.jpg": "d48638e76d865bd6fd4ec7fa61a4e341",
"assets/assets/works/ic_ceabs_auto_closing.webp": "eda8ba0d110eaca346e8f3b8e7d81b17",
"assets/assets/works/ic_hotel_pouso_real.jpg": "39b436fa3fc5d5b638455870d517ad83",
"assets/assets/works/ic_mabu_hoteis.webp": "bb665c6dacb6fc2ecf00bd640485aa01",
"assets/assets/works/ic_viale_hotels.webp": "9d6c18abd3e8d781c87a9eceaa7f2a15",
"assets/assets/works/ic_rede_brisa_hoteis.jpg": "430c0227eba09b9940b6fb19aec978ee",
"assets/assets/works/ic_hotel_rondonia_palace.jpg": "3726b92b557275d0503d612fceff7b87",
"assets/assets/works/ic_executive_inn_hotel.png": "adfc91af87b145bbcb3396bae5473d4f",
"assets/assets/works/ic_liberty_carro_conectado.webp": "5884b9bf95f8ae20f942b045c5d52c92",
"assets/assets/works/ic_hotel_villa_rica.jpg": "8f562bea069ca2f6d62f6fc614cf0ab2",
"assets/assets/works/ic_slaviero_hoteis.jpg": "01561e332a25b1bafcbbe3afeabcab62",
"assets/assets/works/ic_garvey_park_hotel.jpg": "df27f889d91085230c860fb490b34c18",
"assets/assets/works/ic_hotel_guaira_palace.jpg": "5f1dbfd897bb1b12e763e0e0f77dd38e",
"assets/assets/works/ic_bm_fbovespa.png": "9fb5ec2d3ce98dfc3d2029295d9a10fc",
"assets/assets/works/ic_lizon_curitiba_hotel.jpg": "0551cd23dabe37526eb0b746d4b810f9",
"assets/assets/works/ic_costao_do_santinho.webp": "ba18784dab359471b1223ba19a1623f5",
"assets/assets/works/ic_hotel_continental_inn.jpg": "e2c9c41adf8d979317a51e8e585450e2",
"assets/assets/works/ic_riema_hoteis.jpg": "a16dcec34104f80ef8fca908cd2e2c56",
"assets/assets/works/ic_carima_hotel_convention.png": "f05c9c5778cee81b7dab311eef374ce1",
"assets/assets/works/ic_hotel_hostel_villa_santana.jpg": "9ba64b4adca0077d96c93f689f16a915",
"assets/assets/works/ic_hotel_vilamar_copacabana.jpg": "2cc1fc41b8e3b2c5c2c09e49093d5342",
"assets/assets/works/ic_san_raphael_hotel.jpg": "3c0ad5ccaa17ef767359c71143237dab",
"assets/assets/works/ic_imperial_hotel.jpg": "d02420a84c2a1c9fd2d0ea46dbf42f4f",
"assets/assets/works/ic_brisa_barra_hotel.png": "86238eb160c92818f211942cd778e046",
"assets/assets/works/ic_brasil_tropical_hotel.jpg": "c58425a8cb88d43559ae9e969ea36e3f",
"assets/assets/works/ic_ceabs_lora_busca.png": "0029134c768093cc7ba6dabd2b045a29",
"assets/assets/works/ic_feller_paulista_hotel.jpg": "8f47b49e930f395b4ce181bd4c5b35fc",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"manifest.json": "28e4b2b40a3720624fe9bbc2f21bb43f",
"flutter_bootstrap.js": "1548219b67b4082369cd1e1188b77ab1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1"};
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
