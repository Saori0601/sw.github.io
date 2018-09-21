//台詞リスト
var serif = new Array();
serif[1] = "こんにちはにゃん";
serif[2] = "おはようにゃん";
serif[3] = "まねきねこ が あらわれた";
serif[4] = "イメージするのは常に最強の自分にゃ";
serif[5] = "お腹空いたにゃん";
serif[6] = "おやすみにゃ";

serif[7] = "クリックされたにゃ";

//ランダムに台詞を表示
function msg() {
  var a = Math.floor(Math.random() * 6);
  $(".fukidashi").text(serif[a + 1]);
}



  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBOqfq_foJNdYL5qN_6pDvjyQluX1Z5Jd0",
    authDomain: "test-push-ba4ef.firebaseapp.com",
    databaseURL: "https://test-push-ba4ef.firebaseio.com",
    projectId: "test-push-ba4ef",
    storageBucket: "test-push-ba4ef.appspot.com",
    messagingSenderId: "911358547114"
  };
  firebase.initializeApp(config);



  const messaging = firebase.messaging();

messaging.requestPermission().then(function() {
  console.log('Notification permission granted.');
  // TODO(developer): Retrieve an Instance ID token for use with FCM.
  // ...
}).catch(function(err) {
  console.log('Unable to get permission to notify.', err);
});

 // Get Instance ID token. Initially this makes a network call, once retrieved
  // subsequent calls to getToken will return from cache.
  messaging.getToken().then(function(currentToken) {
    if (currentToken) {
      sendTokenToServer(currentToken);
      updateUIForPushEnabled(currentToken);
    } else {
      // Show permission request.
      console.log('No Instance ID token available. Request permission to generate one.');
      // Show permission UI.
      updateUIForPushPermissionRequired();
      setTokenSentToServer(false);
    }
  }).catch(function(err) {
    console.log('An error occurred while retrieving token. ', err);
    showToken('Error retrieving Instance ID token. ', err);
    setTokenSentToServer(false);
  });
}





