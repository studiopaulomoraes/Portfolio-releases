'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "8d8a4d9d3f0222630eda166aa6d65541",
"version.json": "1615900b6514c3c49ca38ad58333d868",
"app_check_debug.js": "f301be8c2eb6d102e58294a104a8b62e",
"index.html": "f6f86ca74ff14de5f78f84f40c33e5de",
"/": "f6f86ca74ff14de5f78f84f40c33e5de",
"CNAME": "536f609b833ede66f77dfe6fd9bd1f9e",
"main.dart.js": "dced42ca24349ffb4c2b0c7ad6dfa82e",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"index.dev.html": "f5cad62ede948ed54f070d2025cec3b4",
"favicon.png": "d738c32daa7a8ac1ff94a97b115d7817",
"app_check_debug.js.example": "13656dfc83c39c03b3eacdde516c1faf",
"icons/Icon-192.png": "8fab28020a6d4c3dc66a786ebedcc107",
"icons/Icon-maskable-192.png": "8fab28020a6d4c3dc66a786ebedcc107",
"icons/Icon-maskable-512.png": "d5605551ba7cee6d6b0ace05808bb962",
"icons/Icon-512.png": "d5605551ba7cee6d6b0ace05808bb962",
"manifest.json": "b9f4bf6ca2381af6b76e00ee2602bc37",
"assets/AssetManifest.json": "efcafae56d5a8fb52a9b6b5e474e2140",
"assets/NOTICES": "cd09060c77193d697c3812e39a259552",
"assets/FontManifest.json": "ab81aef5b3d916e25d2ab4f4de95b20b",
"assets/AssetManifest.bin.json": "340b163ff7e7b5d59d93e41f00623065",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "882ea6b0ad45d95a7480caaff91a6136",
"assets/fonts/MaterialIcons-Regular.otf": "28d116b2e8cf431f2ac15c01470f768e",
"assets/assets/ic_store_google_play.png": "3366a8cbfcae0d1370008d0d4a185e67",
"assets/assets/ic_store_google_play_pt.png": "a5fccb0b8805010bdf712a58725673f8",
"assets/assets/ic_app_job_matcher.png": "a6f96b9ca16ae1f8e740a78cc3433b8d",
"assets/assets/ic_platform_android.png": "83a32c5fcc41be4b5d8c8aeca410d382",
"assets/assets/ic_store_app_store_light_pt.png": "97b61b0ae9ec47713052533bd7963717",
"assets/assets/ic_store_amazon.png": "98d919fb3f2882bef5df77934f187be0",
"assets/assets/instagram.png": "26631a4043b14dff84180bdf51c3cacb",
"assets/assets/ic_status_wifi.png": "53cb88feb2b686f82fed62515bf26ab9",
"assets/assets/config/project_links.json": "6fad7226ac2973f3e6d51a0bb6416cbf",
"assets/assets/config/education_entries.json": "bf2ad2604af7e1eee9907953133a46c2",
"assets/assets/config/skills_profile.json": "4763aee7795d0988cf81fcf19bd78607",
"assets/assets/config/contact_links.json": "aac5aeb28ef73996225114fc696ca0ea",
"assets/assets/config/career_entries.json": "1e8cbf0727735939c1d57e2e92ed8eca",
"assets/assets/config/book_links.json": "683ab4126c960290d44687403b0f5421",
"assets/assets/ic_platform_flutter.png": "6c85d1c722a634ab35c11029b51ecc6c",
"assets/assets/ic_platform_firebase.png": "48217d874351fba04ea24a91311b8887",
"assets/assets/ic_store_amazon.svg": "106975d56d45997e9d3bdf754d47e2b6",
"assets/assets/github.png": "d22ee3727a7216019c3848df6eafa024",
"assets/assets/ic_store_amazon_pt.png": "b5e84e760d6940881cabdbf01d2d702e",
"assets/assets/ic_profile.png": "56615b250b802cbbe40eec6565168f84",
"assets/assets/ic_platform_ios.png": "e01f5a4f2c70bdd939124eee9cebe7df",
"assets/assets/ic_store_app_store_pt.png": "cb15c2f6c176cca4b18af1c160e77f2d",
"assets/assets/medium_light.png": "bd516690c99267a778885736015befe8",
"assets/assets/book_cover_pt.png": "8b559807cfebbab042075decb74f5baa",
"assets/assets/medium.png": "fb86f4060325caef8ea1f0fad0d25f40",
"assets/assets/moon.png": "a270b8a10d1a9a52441bf5a322dd1b86",
"assets/assets/ic_app_career.png": "1cd8d9aa8b348c039eb0137548ab5385",
"assets/assets/book_cover_en.png": "24f78a8dd715188799aacade373ab401",
"assets/assets/avatar.png": "b0dafe38319b3a3611e3f390a973e450",
"assets/assets/ic_app_education.png": "b50be6161a46f614de0e25b079f76797",
"assets/assets/ic_store_kiwify_pt.png": "055f166c4a8b9cc928d53434c67ea142",
"assets/assets/GoogleSansRegular.ttf": "b5c77a6aed75cdad9489effd0d5ea411",
"assets/assets/works/ic_hotel_guaira_palace.png": "e51b4ad13c2f63f5f95e8740411348e9",
"assets/assets/works/ic_code_reviewer.png": "ad4c634537c934de324007eec5b5d92b",
"assets/assets/works/ic_garvey_park_hotel.png": "751fd10577e4eb9c69570da922d27935",
"assets/assets/works/ic_hoteis_othon.webp": "eed2649ea48ccb65c1cf1d1fdacc31ee",
"assets/assets/works/ic_lizon_curitiba_hotel.png": "e8c1027175f8a846fb7e9c882040055f",
"assets/assets/works/ic_bradesco_seguros_dirija_bem.webp": "0c06f8ffccd1d0286ffb166784114df3",
"assets/assets/works/ic_generic_hotel_app.png": "468819543088b7c5d19d46d7c5e4cffd",
"assets/assets/works/ic_mc_flats.webp": "74d2afafe0fe01e762f1f1b4f142fc73",
"assets/assets/works/ic_hotel_rainha_do_brasil.png": "548dd0efd2764dcc4baada1f8f64477c",
"assets/assets/works/ic_executive_inn_hotel.png": "6a7f2dbb74eb35fe4d3c34481de635fb",
"assets/assets/works/ic_liberty_carro_conectado.webp": "9fe4d5a7d55fb0414a5a6519b2fc1dbb",
"assets/assets/works/ic_hotel_continental_inn.png": "b9e3be1c750833a0d7545786fc4c7c1f",
"assets/assets/works/ic_ceabs_lora_busca.png": "bd425fe55c962f6660692726cff730cc",
"assets/assets/works/ic_ceabs_auto_closing.webp": "93e59f09df6403e4b63d3a79aa35a514",
"assets/assets/works/ic_feller_paulista_hotel.png": "bb53320fd13fdcba19a29157eb9640b6",
"assets/assets/works/ic_rede_brisa_hoteis.png": "11a937e722edaaeb3327ea5d88d42ac7",
"assets/assets/works/ic_hotel_hostel_villa_santana.png": "0ba5a224ca6af95dfdc68c649d08370f",
"assets/assets/works/ic_hotel_sol_belo_horizonte.png": "a36e60c5986f9999339b2eb21a9eba7d",
"assets/assets/works/ic_imperial_hotel.png": "641025645ffb10b9dfd1ea7f0ac62118",
"assets/assets/works/ic_bm_fbovespa.png": "4cc0f7f47025cdaff8d441b58f86dcdd",
"assets/assets/works/ic_caravelle_palace_hotel.png": "df89090dac98d6664654da6906b96e62",
"assets/assets/works/ic_ae_broadcast.webp": "881390c02bffd04501abb1fc8510cfc6",
"assets/assets/works/ic_pousada_hibiscus_beach.png": "a2154b6b4755a9cbeb5787ff2ff73753",
"assets/assets/works/ic_hotel_rondonia_palace.png": "6ee662b959738a5ab58a1ef668fece74",
"assets/assets/works/ic_hotel_pouso_real.png": "4c1941d440d5e57d6e16a27e40aedfec",
"assets/assets/works/ic_bradesco_net_empresa.png": "b7077f0bbc8cc327b1ff99971bf04eef",
"assets/assets/works/ic_riema_hoteis.png": "1ddd591434d3bcca3e60e5ce9bc06cd7",
"assets/assets/works/ic_santander_empresas.png": "36681f3e386aec383a22eaf1e3485b74",
"assets/assets/works/ic_brisa_barra_hotel.png": "ed5c2a2ef5b8827fb02822fb3e5fcc50",
"assets/assets/works/ic_metropole_rio_hotel.png": "06926a41a38b9b5106c90df964382db2",
"assets/assets/works/ic_mabu_hoteis.webp": "acefb62d14f1930ecaabd0f0faf48be8",
"assets/assets/works/ic_udfe_ycard_carteirinha_de_estudante.png": "843e814d72731ee63ff6670492b892e2",
"assets/assets/works/ic_geo_sat.png": "f423d7b1fc1c4fd8a4f1bb9ccb92d7af",
"assets/assets/works/ic_san_raphael_hotel.png": "bb469556ca5db6c50a99e90b2110bd10",
"assets/assets/works/ic_dorisol_recife_grand_hotel.png": "74f3edf4a7bc290533054004a137c5e7",
"assets/assets/works/ic_costao_do_santinho.webp": "e1a6b41d842333ed6092c71be3e309da",
"assets/assets/works/ic_ipep_mobile.png": "170a010af9fad733ee3ebe1ac09c6905",
"assets/assets/works/ic_netshoes.png": "91bcece958d68cb59d62905e50a45fed",
"assets/assets/works/ic_philadelphia_inquirer.png": "249ea38db07562051a85ae76c02d92d2",
"assets/assets/works/ic_viale_hotels.webp": "f7b57f0cc82bc65fd491b551db958be8",
"assets/assets/works/ic_carima_hotel_convention.png": "a05a91a4d8aac9b6e32a3599a08c1c15",
"assets/assets/works/ic_malapronta_com.png": "2ecdf342c0a703da5f9c11ef994e83ac",
"assets/assets/works/ic_wedoc.png": "6c145e06698d77d296b849ff18870465",
"assets/assets/works/ic_hotel_vilamar_copacabana.png": "3a06f6434f642b4909951d53067be62d",
"assets/assets/works/ic_brasil_tropical_hotel.png": "b089f9f2665034cc618e8b1dccf24414",
"assets/assets/works/ic_slaviero_hoteis.png": "4ad8b9dd364b314e465adadefc07a4ee",
"assets/assets/works/ic_hotel_villa_rica.png": "4f9da62f8464c878ec7c11882cb9d909",
"assets/assets/works/ic_magalu.png": "e2ebedc64c1316b14acaa5e326376045",
"assets/assets/logo_probox_studio.png": "56615b250b802cbbe40eec6565168f84",
"assets/assets/ic_app_terminal.png": "713c3b328bc162a9cd5ceedf92fde5ee",
"assets/assets/ic_settings.png": "1966b6e3246359ea38fd7fce46e44fe9",
"assets/assets/twitter.png": "8f35a40403a84631c4125c4f1859c7a6",
"assets/assets/linkedin.png": "926e2dcf5ab4220a359867614556df68",
"assets/assets/ic_platform_kmp.png": "2d8b3379ece506f1501f513c70a9dfb9",
"assets/assets/ic_app_book.png": "f972acfc02b7da9e3175ade67af6f83f",
"assets/assets/ic_app_skills.png": "ed81f5e15975e41eb1a5b3f4ae747ae8",
"assets/assets/ic_store_kiwify.png": "13f8ad546ddb85da5de816b613a049c4",
"assets/assets/ic_app_photos.png": "9256c2fc91bdba32d0f25bbd94dba0a3",
"assets/assets/ic_store_kiwify.svg": "3a862545222a1e88814a372cd03f5e91",
"assets/assets/ic_app_contact.png": "13152e4e7811a3bca470f0b6c40565a4",
"assets/assets/ic_store_app_store_light.png": "2e541ed659b8bca79ff76fecfe7fad5a",
"assets/assets/ic_store_app_store.png": "b37a3205c03550db11b938d473b9ae1c",
"assets/assets/fonts/NotoColorEmoji.ttf": "46d5c51b979f91964c084f9ddd0af9fa",
"assets/assets/facebook.png": "021ada146ffb7c1753557ff29618d04c",
"assets/assets/ic_platform_ai_sparkles.png": "e96536810abd6242b0b539d3c689f965",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b"};
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
