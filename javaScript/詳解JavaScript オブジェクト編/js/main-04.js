"use strict";
// #20 ランダムな整数値を作ってみよう

// Math.random() 0から1未満の数を生成する

// Math.random()*3 0以上３未満の数を生成する

// Math.floor()を使って小数点以下を切り捨てると

// Math.floor(Math.random()*3) 0から2の整数を生成
// つまりこの式を置き換えるとこう考える事も出来る

// Math.floor(Math.random() * (n + 1))

// さらに応用してmin~max までのランダムな数を作りたい場合は

// Math.floor(Math.random() * (max + 1 - min))+min

// 1~6までのランダムな数を生成
// console.log(Math.floor(Math.random() * (6 + 1 - 1))+1);

// #21 現在日時を扱ってみよう
// new Date(); 現在の日時を取得・・・

// そこから！！以下の値を取得します

// d.getFullYear(); 年を取得
// d.getMonth(); 月の数を取得ただし1月が０になる
// d.getDate(); 日を取得1-31
// d.gatDay(); 曜日を数で取得0-6 日曜日Sunが０月曜Monが１
// 時間は
// d.getHours(); 時間 0-23
// d.getMinutes();分 0-59
// d.getSeconds();秒 0-59
// d.getMilliseconds(); ミリ秒0-999 1ms = 1/1000 sec

{
  // const d = new Date();
  // // console.log(d);
  // console.log(`${d.getMonth()+1}`);
  // console.log(`${d.getFullYear()}`);
  // console.log(`${d.getDate()}`);
  // console.log(`${d.getDay()}`);
  // console.log(`${d.getHours()}`);
  // console.log(`${d.getMinutes()}`);
  // console.log(`${d.getSeconds()}`);
  // console.log(`${d.getMilliseconds()}`);
  // そのタイムゾーンで取得しても同じになるような値
  // getTime()を使うとおｋです
  // ＵＴＣと呼ばれる協定世界日時を利用
}

// #22 特定の日時を扱ってみよう

{
  // const d = new Date(2021,10);//来月のデータを取得します
  // d.setHours(10,20,30);//左から時間,分,秒を指定
  // d.setDate(31);//存在しない日にちだと自動的に繰り上げ計算を行う
  // d.setDate(d.getDate() +3);//日にを＋３日
  // console.log(d);
}

// #23 alert()､confirm()を使ってみよう
// alert() →oｋのみ
//confirm() →ok とキャンセルの2択
{
  // alert('課題やべぇぇぇぇ')
// confirm('戦いますか？');

  // const answer = confirm("戦いますか？");
  // if (answer) {//okを押した場合の処理
  //   alert("戦うを選んだ");
  // } else {//キャンセルを押した場合の処理
  //   alert("キャンセルしました");
  // }

}

// #24 setInterval()を使ってみよう
// 復習
// new Date(); 現在の日時を取得・・・
// setInterval(関数名,ミリ秒単位)
//今回は返り値がないので
//showTime関数のうしろに () は付けない

// 1000 ミリ秒、は 1 秒
// {
//   // 変数iの最初の値は０
//  let i= 0;

// function showTime(){
//   console.log(new Date());//現在日時を取得し表示
//   i++;
//   if(i> 2){
//     clearInterval(intervalId)//条件を満たすとタイマーを止める
//   }
// }
// // ここは単純に代入しただけでなく
// // 右辺setIntervalが実行（評価とも言います）されてから
// // その結果が左辺に代入される
// const intervalId = setInterval(showTime, 1000);

// }
