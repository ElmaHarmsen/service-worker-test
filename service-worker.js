var cacheName = 'app-cache-v1';
var filesToCache = [
  '/', 
  'assets/cat1.jpg',
  'assets/cat2.jpg'
];

self.addEventListener('install', function(event) {
  console.log('[Service Worker] Install');
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      console.log('[Service Worker] Caching all: app shell and content');
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.smth).then(function(smth) {
      console.log('[Service Worker] Fetching resource: '+event.request.url);
      return smth || fetch(event.request).then(function(response) {
        return caches.open(cacheName).then(function(cache) {
          console.log('[Service Worker] Caching new resource: '+event.request.url);
          cache.put(event.request, response.clone());
          return response;
        })
      })
    })
  )
})

// .then(function() {
//   return self.skipWaiting();
// })