'use-strick';

// #20 関数で処理をまとめてみよう

// 英単語：Advertising  広告

// function showAd(){
//   console.log('-----------');
//   console.log('-------Ad------');
//   console.log('-----------');
// }

// showAd();
// showAd();

// // #21 引数を使ってみよう

// // この状態だと仮引数
// function showAd(message ='none'){
//   console.log('-----------');
//   console.log(`---${message} ----Ad------`);
//   console.log('-----------');
// }

// // こちらは実際渡される引数なので実引数
// showAd();
// showAd('oh!');

// #22 returnで値を返してみよう
// returnで返すと関数の外側でも値を使って計算できる
// returnで関数に処理が返されるので,
// console.logで表示させることができない
// 使えない
// function sum(a,b,c){
//   // console.log(a + b + c);
//   return a + b + c;
// }
// sum(3,77,88);
// sum(5,33,88);

// const total = sum(3,7,8) + sum(5,5,5);

// console.log(total);


// #23 関数式を使ってみよう
// 関数式の場合、関数を定数や変数に代入する
// このような関数は名前がないので無名関数と呼ばれる

// const sum = function(a,b,c){
//   return a + b + c;
// }

// const total = sum(1,2,3) + sum(3,4,5);
// console.log(total);


// #24 アロー関数を使ってみよう

// 関数を省略してかける
// 前回の関数がこんなに短くなります
// return の意味合いも含まれます。

// const sum = (a,b,c) => a + b + c;

// const total = sum(3,4,5) +  sum(3,4,5);
// console.log(total);

// 引数が一つなら()は不要です
// =>の先にすぐreturnがくる場合{}は不要

// const double = a => a * 2;

// console.log(double(77));

// #25 スコープについて理解しよう

// 定数や変数のスコープ
// スコープとは有効範囲のことを示す

// const x = 2;
// function f(){

  // 関数の中に定数・変数があればそちらが優先的に適用される

  // const x = 1;
//   console.log(x);
// }
// f();

// 関数内で定義した定数や変数は、関数の外で使うと
// エラーがでる
// ここのXは関数内のｘではなく
// 81行目で定義したxである

// console.log(x);


// if でも while でもブロックのあるところでは定数や変数のスコープが分かれる

// #26 コードをブロックで囲っておこう
// ブロックで囲んでスコープを分ける習慣を付けましょう
// {const x =100;
// console.log(x);}