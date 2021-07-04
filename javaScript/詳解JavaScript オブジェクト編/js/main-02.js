"use strict";
// #09 map()を使ってみよう

{
  const prices= [180,190 ,200];

  // それぞれの値を２０ずつ増やした値が欲しい

  // prices の各要素を price で受け取って、そこに 20 を足したうえで新しい要素を作って返してくれる

// const updatePrices = prices.map((price) =>{
//   return price +20;

// });
// 上述をさらに短く書くと

// 省略ポイント：引数は、一つだと()を省略できる
// =>の後すぐにリターンが来る場合{}とreturn を省略できる

const updatePrices = prices.map(price =>
   price +20);
console.log(updatePrices);
}

// #10 filter()を使ってみよう

// filter()とは配列の要素をチェックして
// 条件にあうものを抽出し別の配列として取得できる
{
  // const numbers =[1,4,7,8,10];

//  const evenNumber = numbers.filter(number =>{
//   if(number % 2 === 0){
//     return true;
//   }else{
//     return false;
//   }
//   });
// 上述を短く書くと
// if文を使わなくてもreturnで返せばいいだけなので

//  const evenNumber = numbers.filter(number =>
// number % 2 ===0);

// console.log(...evenNumber);

}

// #11 オブジェクトを作ってみよう
  
// オブジェクトは配列と違って値に名前を付けて管理できます
// 例えばＸＹ座標の管理に便利です

{
//  const point = {x:100, y: 180};

//  const point ={
//    x:100,
//    y:180,
//  };
// console.log(point);

  }  
  // 用語について
  // この場合の
  // x:100, の塊をプロパティ（メンバー
  // xを名前、キー
  // 100を値と呼ぶ



  // #12 プロパティを操作してみよう
{
  // const point = {
  //   x:100,
  //   y:180,
  // };

  // ここでは100と表示されます
// console.log(point.x);
// 他の書き方もあります
// console.log(point['x']);

// 値を変更する方法について
// point.x = 200
// point['y'] = 500
// console.log(point.x);
// console.log(point['y']);

// 新しいプロパティを追加する方法

// point.z =777;
// console.log(point.z);

// プロパティを削除する方法→deleteを使う

// delete point.x;
// console.log(point);
}
// #13 オブジェクトを操作してみよう
// ...を使うとプロパティが追加できる
// {
// const otherProps = {
// r:4,  color:'red',
// };

// const point = {
//   x: 100,  y:180,
//   ...otherProps
// }
// //  console.log(point); 

// const{x,r,...others} = point;
// console.log(x);
// console.log(r);
// console.log(others);
// }
// １１２行目の説明
// 分割代入を使うこともできる、 const {} として point を代入するのですが、こちらにオブジェクトのキーと同じ定数名を使ってあげれば、そのキーの値が代入されるという仕組みになっています。

