// importScripts(
//     'https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js'
//   );

// self.addEventListener("install",e => {
//     e.waitUntil(
//         caches.open("static").then(cache => {
//             return cache.addAll(["./index.html","./corider.png"]);
//         })
//     );
// });

// self.addEventListener("fetch", e=> {
//     console.log(`Intercepting fetch request for: ${e.request.url}`);
// });

// service-worker.js

self.addEventListener('install', function(event) {
    event.waitUntil(
      caches.open('my-cache').then(function(cache) {
        return cache.addAll([
          '/index.html',
          
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.match(event.request).then(function(response) {
        return response || fetch(event.request);
      })
    );
  });
  