'use strick';
// #15 論理演算子を使ってみよう

// const score = 100;
// const name1 = 'sawada';

// if (score >= 70) {
//   if(name1 === 'sawada'){
//     console.log('素晴らしい！！');
//   }
// }

// && なおかつ(AND)
// !! もしくは(OR)
// !~ではない(NOT)

// 前述のコードを短く書くと
// if(score >= 50 && name1 === 'sawada'){
//   console.log('あっぱれじゃ');
// }


// #16 switchで条件分岐をしてみよう

// 前回のおさらいコード

// const signal ='green';

// if(signal === 'red'){
//   console.log('Stop!');
// } else if (signal === 'yellow'){
//   console.log('Caution!');
//   }else if(signal === 'blue'){
//     console.log('Go!');
//   }
// 一行だけじゃなく何行でも書けます

// switch (signal){
//   case 'red':
//     console.log('Stop');
//     break;
//   case 'yellow':
//     console.log('Caution');
//     break;
//   case 'blue':
//   case 'green':
//     console.log('GO!!!');
//     break;
//     default:
//       console.log('Wrong signal');
//       break;
// }

// #17 forを使ったループ処理をしよう

// i が 1 から 10 以下である間、 i を 1 ずつ増やしながら次の処理をしてね
// letには値が再代入されるので、変数let を使う
// for(let i =1 ; i<=10; i++){
//   // console.log(i+'oh yeah');
// console.log(`oh yeah ${i}`);
// }

// 用語：テンプレートリテラル
// 文字列に変数の値を埋め込む記法
// バッククォートを使う


// #18 whileを使ったループ処理をしよう
// let hp = 100;

// while (hp > 0){
  // この下の増減の処理が無いと無限ループに陥って
  // ブラウザが停止するので必ず入れましょう
//   hp -= 25;
//   console.log(`15のダメージ：残りのHP${hp}`);
// }

let hp = -50;
// 下記場合
// 条件式の処理が後でなされるので
// console.log(); の処理がなされ表示される
// do{
//   console.log(`残りのHP${hp}`);
//   hp -= 25;
//    } while (hp > 0);

// #19 continue､breakを使ってみよう
// continueを使うとその処理がスキップ出来る

// for(let i = 1; i<=10; i++){

//   if(i % 2 ===  0) {
//     continue;
//   }
//   console.log(i);
// }

// 補足：
// iに三を割って余が出ない
// つまり三の倍数の時
// i % 3 ===  0

// breakループを途中で終了させる
// continueは１回スキップさせる
// これが違いです。

// for(let i =1; i<=10; i++){
//   if(i===4){
//     break;
//   }
//  console.log(i);
// }