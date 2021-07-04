"use strict";
// #25 setTimeout()を使ってみよう
// setTimeout()は、指定した時間のあとに 1 回だけ処理を実行するように予約する命令

{
  //  １回だけ呼び出す処理
  // function showTime(){
  //   console.log(new Date());
  // }
  // //ここのshowTimeの後に()はいらない
  // setTimeout(showTime,1000);
  // 連続して呼び出す処理
  // 関数の中で同じ関数が呼び出されその中関数で・・つまり無限処理
  // function showTime(){
  //   console.log(new Date());
  //   setTimeout(showTime,1000);
  // }
  // showTime();
  // 特定の回数で止める処理
  // let i =0;
  // function showTime(){
  //   console.log(new Date());
  //   const timeoutId =setTimeout(showTime,1000);
  //   i++;
  //   if(i >2){
  //     clearTimeout(timeoutId);
  //   }
  // }
  // showTime();
  // ifの条件式が成立した場合
  // clearTimeout()によって()内の処理を止めます。
}

// #26 タイマー処理の違いを理解しよう

// setInterval()一定時間ごとに処理を実行する命令
// 設定時間キッチリ
// たとえば 1000 ミリ秒間隔で 300 ミリ秒かかる処理を実行した場合、 1000 ミリ秒きっかりの間隔で実行されていきます。
// つまり1000ミリ秒の間に処理も実行されます

// だから、もし処理に 1200 ミリ秒かかる場合でも setInterval() では 1000 ミリ秒きっかりに処理を実行しようとするので、2 つの処理が重なってシステムに負荷がかかってしまう場合もあります。

// // 一方 setTimeout() だと 1000 ミリ秒後に 300 ミリ秒の処理を実行した場合、次の処理は処理終了後から 1000 ミリ秒後に実行されます。
// なので処理が重複する事がない

// #27 例外処理を使ってみよう
// ユーザーから名前を受け取って大文字にする処理について
// toUpperCase(); を使うと大文字になります。
//toUpperCase();は文字列にしか使えない
{
  // const name =5;
  // try{
  //   console.log(name.toUpperCase());
  // }
  // catch(e){
  //   // console.log(e);
  // }
  // console.log('Finish');
  // 例外→エラーが出そうな箇所をtry{}で囲む
  // catch(e){console.log(e);}でエラーmsgをコンソールに出力
  // そうすると通常ならエラーで処理が止まるが続けてプログラムが実行される
}

// #28 オブジェクトが複数ある場合を考えよう
// 文字列はシングルまたはダブルクォテーションで囲む
{
  //  const posts = [
  //    {
  //      text: 'JavaScriptの勉強中・・・',
  //      likeCount: 0,
  //    },
  //    {
  //      text: 'プログラミング最高だぜ！',
  //      likeCount: 5,
  //      color: 'blue',
  //    },
  //  ];
  //  function show(post){
  //    console.log(`${post.text} - ${post.likeCount}いいね${post.color}`);
  //  }
  //  show(posts[1]);
}

// #29 メソッドを使ってみよう

// メソッド→関数をプロパティの値にした場合の呼び名

// this→同じオブジェクト内のプロパティにアクセスできる。
{
// const posts = [
//   {
//     text: "JavaScriptの勉強中",
    // likeCount: 0,
    // show:function (){
    //   console.log(`${this.text} - ${this.likeCount}いいね`);
    // }
    //   },
    // 上記をさらに短く書く方法 :function を略せる
//     show() {
//       console.log(`${this.text} - ${this.likeCount}いいね`);
//     },
//   },
//   {
//     text: "プログラミング楽しい！",
//     likeCount: 0,
//     show() {
//       console.log(`${this.text} - ${this.likeCount}いいね`);
//     },
//   },
// ];

// posts[0].show();
// posts[1].show();
// 
}