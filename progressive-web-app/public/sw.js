const CACHE_NAME = "static-v1";
const urlsToCache = ["/"];

self.addEventListener("install", event => {
  console.log("V1 installing…");

  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache)));
});

self.addEventListener("activate", event => {
  console.log("V1 now ready to handle fetches!");
});

self.addEventListener("fetch", event => {
  const url = new URL(event.request.url);
  console.log(url);

  event.respondWith(
    caches
      .match(event.request)
      .then(response => response || fetch(event.request))
  );

  // if (url.origin == location.origin && url.pathname == '/dog.svg') {
  //   event.respondWith(caches.match('/cat.svg'));
  // }
});
