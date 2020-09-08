// var cacheName = "testPWA";


var cacheName = 'app-cache-v1';
var filesToCache = [
  '/', 
  'assets/cat1.jpg',
  'assets/cat2.jpg'
];

self.addEventListener('install', function(event) {
  //Do stuff
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.smth).then(function(response) {
      console.log('[Service Worker] Fetching resource: '+event.request.url);
      return smth || fetch(event.request).then(function(response) {
        return caches.open(cacheName)
      })
    })
  )
})

// .then(function() {
//   return self.skipWaiting();
// })