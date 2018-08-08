//キャッシュ名。識別用
var cacheName = "manekineko";

//キャッシュしたいファイルのリストを登録する
var filesToCache = ["index.html", "main.js", "jquery.js", "style.css"];

//ブラウザにインストールする
self.addEventListener("install", function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll(filesToCache);
    })
  );
});

//
self.addEventListener("activate", function(event) {
  event.waitUntil(
    caches.keys().then(function(keyList) {
      return Promise.all(
        keyList.map(function(key) {
          if (key !== cacheName) {
            return caches.delete(key);
          }
        })
      );
    })
  );
  return self.clients.claim();
});

//
self.addEventListener("fetch", function(event) {
  if (
    event.request.cache === "only-if-cached" &&
    event.request.mode !== "same-origin"
  ) {
    return;
  }
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});

self.addEventListener("push", function(event) {
  console.log("Push Notification Recieved", event);
  if (Notification.permission == "granted") {
    event.waitUntil(
      self.registration.showNotification("受信しました",{
           body:"お知らせです。",
           icon:"iconV2.png"
          }).then(
        function(showEvent) {
        },
        function(error) {
          console.log(error);
        }
      )
    );
  }
});

self.addEventListener("notificationclick", function(event) {
  event.notification.close();
});
