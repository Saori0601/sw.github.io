    //台詞リスト
    var serif = new Array;
    serif[1] ="こんにちはにゃん";
    serif[2] ="おはようにゃん";
    serif[3] ="まねきねこ が あらわれた";
    serif[4] ="イメージするのは常に最強の自分にゃ";
    serif[5] ="お腹空いたにゃん";
    serif[6] ="おやすみにゃ";

    serif[7] ="クリックされたにゃ";


   //ランダムに台詞を表示
   function msg(){
    var a = Math.floor( Math.random() * 6 );
    $(".fukidashi").text(serif[a +1 ]);
   }

   Notification.requestPermission(function(status){
   console.log('Notification permission requested:',status);
   })

self.addEventListener('notificationclick',function(event){
    console.log('Notification Clicked.',event.notification.tag);
     event.notification.close();
       $(".fukidashi").text(serif[7]);
});

   function msg02(){
   $(".fukidashi").text(serif[7]);
 }
