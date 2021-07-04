"use strict";

// 詳解JavaScript オブジェクト編
// #01 配列を作ってみよう
{
  // const score1 =80;
  // const score2 =90;
  // const score3 =40;

  // これが配列の一例です
  // const scores = [80,90,40]
  // console.log(scores);
}

// #02 配列の要素にアクセスしてみよう

{
  // const scores = [80,90,43];
  // console.log(scores[0]);
  // scores[3] = 55;
  // console.log(scores[3]);
  // あれ？？定数なのに代入出来てる？？
  // 配列の要素への代入なら出来る！！
  // しかしsocresそのものに代入は出来ない！！
  // length を使うと要素の数を取得できる
  // console.log(scores.length);
}

// #03 配列とループ処理を組み合わせよう
{
  // const scores =[80,90,40,55];

  // // この書き方だと要素が増えると大変です
  // console.log(`Score: ${scores[0]}`);
  // console.log(`Score: ${scores[1]}`);
  // console.log(`Score: ${scores[2]}`);


  // // これをfor文を使って改善
  // for (let i=0; i < 4 ; i++){
  //   console.log(`Score: ${scores[i]}`);
  // }

  // ★★★
  // // これをさらに改善して要素の数取得lengthと組み合わせると
  // // 要素が増えて数字を変更する手間が省けます
  // for (let i=0; i < scores.length ; i++){
  //   console.log(`Score ${i} ${scores[i]}`);
  // }
}
// #04 配列の要素を変更してみよう

// unshift()配列の先頭に追加する
// push()配列の末尾に追加する

// 配列の削除方法
// shift()先頭から削除 １つだけ
// pop()末尾から削除 1つだけ
{
  // const scores = [80, 90, 40, 70];
  // ドットを使って定数・変数と命令文を繋げる
//   scores.unshift(100,200);
//   scores.pop();
//   for (let i = 0; i < scores.length; i++) {
//     console.log(`Score ${i}: ${scores[i]}`);
//   }
}


// #05 splice()で配列を変更してみよう
// 先ほどの命令と違って途中の配列が命令対象
// splice(変化が開始する位置,削除数,追加する要素)
// まず変更させたい定数・変数を書いて
// ドット書いて命令文

// const scores =[80,90,40,70];
// scores.splice(1,1,555)
// for(let i =0 ; i < scores.length; i++){
//   console.log(`Score ${i} : ${scores[i]}`);
// }

// #06 スプレッド構文を使ってみよう
// 配列を[]を外した状態で展開できます。
// {
//   const otherScores =[10,20];

//   const scores = [89,70,...otherScores];
//   // console.log(scores);

//   function sum(a,b){
//     console.log(a+b);
//   }
//   sum(...otherScores);
//   // 現在のsum はsum(10,20);
// }


// #07 分割代入を使ってみよう

{
// const scores = [80,90,40,70];

// こうすると別々の定数として代入されます
// const [a,b,c,d] =scores;
// console.log(d);


// 定数に入れたいのは最初の二つだけで
// 後の二つは配列のままにしたい。
// const[a,b, ...others] =scores;
// console.log(others);

// 代入した数字を交換したい
// let x = 30;
// let y = 70;

// [x,y] =[y,x];

// console.log(x,y);
}



// #08 forEach()を使ってみよう

{
  const scores =[80,90,40,70];


// forEach( (値1、値２) =>{  }  );
// 一つ目の引数に配列の値が先頭から順番に格納されます
//  二つ目の引数は、何番目かの情報を受け取ります
//  今回は、その名前をindex としてます

  scores.forEach((score, index) =>{
    console.log(`Scores:${index}: ${score}`);
  }
  );
}

