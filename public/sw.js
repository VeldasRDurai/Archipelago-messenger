console.log("ws file is in public folder");
this.addEventListener( 'push' , () => {
    self.registration.sendNotification('test Message', {});
});

// const cacheData = 'appV1';

// this.addEventListener( 'install' , event => {
//     event.waitUntil( 
//         caches.open(cacheData).then( cache => {
//             cache.addAll([
//                 '/static/js/vendors~main.chunk.js',
//                 '/static/js/main.chunk.js',
//                 '/static/js/bundle.js',
//                 '/index.html',
//                 '/'
//             ])
//         })
//     )
// });
// this.addEventListener( 'fetch', event => {
//     if(!navigator.onLine){
//         event.respondWith(
//             caches.match(event.request).then( resp => {
//                 if(resp){
//                     return resp;
//                 }
//             })
//         );
//     }
// });