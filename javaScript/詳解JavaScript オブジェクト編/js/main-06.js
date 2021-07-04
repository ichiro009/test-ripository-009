"use strict";
// #30 クラスの概念を理解しよう

// クラス
// →オブジェクトをテンプレート化したもの

// インスタンス
// →クラスから作られるオブジェクト

// クラスの作り方
// class クラス名{}
// クラスの先頭は慣習的に大文字にすることが多い。

// メソッドconstructor()特殊なメソッドで
// インスタンスのプロパティを初期化できる

// thisディス;
// →クラスから作られるインスタンスをクラス内で表現できる
// キーワード

// メソッド→関数をプロパティの値にした場合の呼び名

// インスタンスの作り方;
// new クラス名(値)

// #31 クラスを作ってみよう
{
//   class Post {

//     constructor(msg) {
//       this.text = msg;
//       this.likeCount = 0;
//     }
//     show() {
//       console.log(`${this.text} -${this.likeCount}いいね`);
//     }
//   }
// const posts =[
// new Post('JavaScriptの勉強中だよ'),//newの値はconstructorに渡される
// new Post('プログラミング難し'),

// ];
// posts[0].show();
// posts[1].show();

}

// クエッション？
// この○○の部分が同じでなければいけないのはなぜか？
// constructor(〇〇){
//   this.text = 〇〇;
//   this.likeCount = 0;
// }
// ここには例で申し上げますと'JavaScriptの勉強中…'の文字列が渡されてきます。

// そして〇〇に'JavaScriptの勉強中…'が入るわけですね。

// そしてそれを後で参照するためにここではthis.textに保存しているのです。

// この〇〇（仮引数）の名前ははなんでもよく、「abc」でも「cdf」もかまいません。ただ、それをthis.textに入れたいので、上の〇〇と下の〇〇が違うとJavaScriptは「何をthis.textに入れたらいいのかわからない」状態になってしまうのです。

// なので、上の〇〇と下の〇〇は同じ、というわけですね。

// #32 カプセル化を理解しよう
{
// クラスを定義して内容を設定します
// class Post{
//   constructor(text){
//     this.text = text;
//     this.likeCount = 0;
//   }
//   show(){
//     console.log(`${this.text} - ${this.likeCount}good`);
//   }
//   like(){
//     this.likeCount++;
//     this.show();
//   }
// }

// インスタンスを生成します
// const posts = [
// new Post('JavaScriptの勉強中だよ'),
// new Post('プログラミング楽しい'),
// ];

// インスタンスからクラスを呼び出します
// posts[0].like();
// posts[1].like();

}

// #33 静的メソッドを使ってみよう
// 静的メソッドとはインスタンスを介さず直接クラスから
// 呼び出すメソッドのこと
{
// class Post{
//   constructor(text){
//     this.text = text;
//     this.likeCount = 0;
//   }

//   show(){
//     console.log(`${this.text} - ${this.likeCount}likes`);
//   }
//   like(){
//     this.likeCount++;
//     this.show();
//   }
 
//   // メソッドの前に static＋半角スペースを付けると
//   // クラスから直接呼び出せる静的メソッドを作れる
//   // なお 静的メソッドはthisを使えない
//   static showInfo(){
//     console.log(`Post class version 1.0`);
//   }
// }

// const posts = [
// new Post('thisってなんぞや'),
// new Post('thisとはクラス内のオブジェクトそのもの'),

// ];
// Post.showInfo();
// posts[0].show();
// posts[0].like();

}

// なぜ静的メソッドではthisを使えないのか

// クラス内で使われる this は、このクラスから作られるインスタンスである。

// 静的メソッドではそもそもインスタンスを作らずに呼び出すので、 this を使うことができないのである。

// 結論：作ってないものは呼び出せない。


