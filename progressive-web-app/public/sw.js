const CACHE_NAME = "static-v1";
const urlsToCache = ["/"];

self.addEventListener("install", event => {
  console.log("V1 installing…");

  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener("activate", event => {
  console.log("V1 now ready to handle fetches!");
});

self.addEventListener("fetch", event => {
  const url = new URL(event.request.url);
  // console.log(url);

  event.respondWith(
    caches
      .match(event.request)
      .then(response => response || fetch(event.request))
  );
});

let deferredPrompt;

self.addEventListener("beforeinstallprompt", e => {
  e.preventDefault();
  deferredPrompt = e;
  btnAdd.style.display = "block";
});

// btnAdd.addEventListener("click", e => {
//   btnAdd.style.display = "none";
//   //Show the prompt
//   deferredPrompt.prompt();
//   deferredPrompt.userChoice.then(choiceResult => {
//     if (choiceResult.outcome === "accepted") {
//       console.log("User Accepted");
//     } else {
//       console.log("User Denied");
//     }
//     deferredPrompt = null;
//   });
// });

self.addEventListener('appinstalled', (evt) => {
    app.logEvent('a2hs', 'installed');
})
