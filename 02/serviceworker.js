//キャッシュ名。識別用
var cacheName = 'manekineko';

//キャッシュしたいファイルのリストを登録する
var filesToCache = [
   'index.html',
   'jquery.js',
   'style.css',
];

//ブラウザにインストールする
 self.addEventListener('install',function(event){
  event.waitUntil(
   caches.open(cacheName).then(function(cache){
     return cache.addAll(filesToCache);
    })
   );
  });


//
self.addEventListener('activate',function(event){
    event.waitUntil(
    caches.keys().then(function(keyList){
      return Promise.all(keyList.map(function(key){
        if(key !== cacheName){
        return caches.delete(key);
         }
      }));
    })
   );
   return self.clients.claim();
});


//
self.addEventListener('fetch',function(event){
    event.respondWith(
     caches.match(event.request).then(function(response){
     return response || fetch(event.request);

    })
   );
});



