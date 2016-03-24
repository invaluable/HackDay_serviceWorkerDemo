self.addEventListener('install', function(event){
	console.log('install');
	console.log(event);
	event.waitUntil(
    caches.open('v1').then(function(cache) {
      return cache.addAll([
        '/img/catalogcover.jpg',
				'/js/build.js',
				'/css/bootstrap.min.css',
				'/app/catalog/ZP4QDKRRAY'
      ]);
    })
  );
});

// self.addEventListener('activate', function(event){
// 	console.log('activate');
//   console.log(event);
// });

// self.addEventListener('fetch', function(event) {
// 	console.log('fetch');
// 	event.respondWith(
//     fetch(event.request).catch(function() {
//       return caches.match(event.request);
//     })
//   );
// });

self.addEventListener('activate', function(event) {

  console.log('[activate] Activating service worker!');

  console.log('[activate] Claiming this service worker!');
  event.waitUntil(self.clients.claim());

});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {

        if (response) {
          console.log(
            '[fetch] Returning from Service Worker cache: ',
            event.request.url
          );
          return response;
        }

        console.log('[fetch] Returning from server: ', event.request.url);
        return fetch(event.request);
      }
    )
  );
});
