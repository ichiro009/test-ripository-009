"use strict";

// #14 Object.keys()を使ってみよう
// オブジェクトの特徴
// forEach()が使えないので
// Object.keys()を使うとオブジェクトのキーを配列で取得出来る
{

  // const point ={
  //   x:100,
  //   y:888,
  // };

// const keys = Object.keys(point);
//   keys.forEach(key => {
//     console.log(`key: ${key} Value: ${point[key]}`);

//   });
// const points =[

// {x:30, y:20},
// {x:10, y:50},
// {x:40, y:10},
// ];
// console.log (points[0].x);
//  縦の座標.横
}

// #15 変数を代入してみよう
{
  // 変数の場合
//  let x = 1;
//  let y = x;
//  x = 5;
//  console.log(x); x5
//  console.log(y); y1

// 配列の場合
//  let x = [1,2];
//  let y = x;
//  x[0] = 5;
//  console.log(x); x5
//  console.log(y); y5

//  この挙動の違いは変数の場合違った場所に格納されるが
//  配列の場合コンポーネントのような状態でコピーされるので
// しかしスプレッド演算子を使うと続く

//  #16 変数の挙動を理解しよう
 
 
//   let x = [1,2];
//  let y = [...x];//スプレッド演算子を使うとコピーされないので
//  x[0] = 5;
//  console.log(x); 
//  console.log(y); //ここで[1,2]が出力される
 
}
// #17 文字列を操作してみよう
{
// const str = 'hello';

// console.log(str.length);//lengthで文字列を取得します

//str.substring(開始位置,終了位置);
// 開始位置は０番目から数える
// console.log(str.substring(1,3));

// 文字列に対して配列の記法を使うと、個々の文字にアクセスできる
// あくまでアクセスできるだけある
// console.log(str[1]);
}

// #18 join()､split()を使ってみよう

// join('')[]を外して値の区切り,を変更できる
{
// const d = [2019,11,14];
// console.log(d.join('/'));

//split() []を付けて,区切りにする''が空だと１文字ずつ
// ''に値が入るとその値で ,区切りにする
//  const t = '17:08:24';
//  console.log(t.split(':'));
// const [hour,minute,second] = t.split(':');
// console.log(hour);
// console.log(minute);
// console.log(second);
}

// #19 数値を操作してみよう

{
//   const scores = [10,3,9];

//   let sum = 0;

//   scores.forEach(score => {
// sum += score;
//   });
//   const avg = sum / scores.length;
  // console.log(`合計${sum}`);
//   console.log(`平均値${avg}`);

//  console.log(Math.floor(avg));//小数点以下切り捨て
//  console.log(Math.ceil(avg));//少数点以下切り上げ
//  console.log(Math.round(avg));//四捨五入
//  console.log(avg.toFixed(1));//小数点、第（）位まで

// Math.random(); 0以上１未満のランダムな数を生成

// console.log(Math.random());


}
