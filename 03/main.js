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



// Retrieve Firebase Messaging object.
const messaging = firebase.messaging();



    console.log('Requesting permission...');
    // [START request_permission]
    messaging.requestPermission().then(function() {
      console.log('Notification permission granted.');
      // TODO(developer): Retrieve an Instance ID token for use with FCM.
      // [START_EXCLUDE]
      // In many cases once an app has been granted notification permission, it
      // should update its UI reflecting this.
      resetUI();
      // [END_EXCLUDE]
    }).catch(function(err) {
      console.log('Unable to get permission to notify.', err);
    });
    // [END request_permission]


  token=messaging.getToken();

 alert(token);






