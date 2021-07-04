"use strict";
// #34 クラスを拡張したい場合を考えよう
{
  //
  // }class Post{
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
  // }
  // class SponsoredPost{
  //   constructor(text,sponsor){
  //     this.text = text;
  //     this.likeCount = 0;
  //     this.sponsor =sponsor
  //   }
  //   show(){
  //     console.log(`${this.text} - ${this.likeCount}likes`);
  //     console.log(`... sponsored by ${this.sponsor}`);
  //   }
  //   like(){
  //     this.likeCount++;
  //     this.show();
  //   }
  // }
  // const posts =[
  //   new Post('勉強中'),
  //   new Post('諸行無常'),
  //   new SponsoredPost('3分動画でマスターしよう','ドットインストール'),
  // ];
  // posts[2].show();
  // posts[2].like();
  // posts[1].show();
  // posts[1].like();
}

// #35 クラスを継承してみよう

// class 引き継がれるクラス名   extends 引き継がせたいクラス名
// 例えばこうすると
// class SponsoredPost extends post{}
// postクラスのコードが
// SponsoredPostクラスに引き継がれます。

// この場合postを親クラス
// SponsoredPost を子クラスと呼ぶ
// この継承をクラスの継承と呼ぶ

// 子クラスの特殊なルール
// super()
// this キーワードを使うには constructor() の最初で super() としてあげる必要があります。

{
    //親クラスをつくります
//   class Post {
//     constructor(text) {
//       this.text = text;
//       this.likeCount = 0;
//     }
//     show() {
//       console.log(`${this.text} - ${this.likeCount}likes`);
//     }

//     like() {
//       this.likeCount++;
//       this.show();
//     }
//   }
//   // 親Post→子SponsoredPostにクラスを継承させます
//   // this キーワードを使うには constructor() の最初で super() としてあげる必要があります。
//   class SponsoredPost extends Post{
//     constructor(text ,sponsor){
//       super(text);
//       this.sponsor = sponsor;
//     }

    
// // 親クラスの show() メソッド使う場合 super に繋げて書けば親クラスのメソッドを呼べる
//     show(){
//       super.show();
//       console.log(`...sponsored by ${this.sponsor}`);
//     }
//   }
// // 定数と newを使ってインスタンスを作ります
// const posts = [
// // new Post('thisが何か理解が浅い'),
// new Post('クラスの具体例が知りたい'),
// new SponsoredPost('頭が痛いが','これも修行'),
// ];
// posts[0].show();
// posts[0].like();

}
