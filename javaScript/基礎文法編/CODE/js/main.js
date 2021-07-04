'use strict';
// #05 文字列を扱ってみよう
// console.log('お肉食べたい');

// 文字列内にシングルクォテーションを使いたい場合
// ダブルクォテーションで囲む
// もしくはシングルクォテーションの前後に\
// バックスラッシュを入れる
// console.log("it's show time!");
// console.log('it\'s show time!');
// \n とすると改行、 \t とするとタブ(空白)という意味
// console.log("hello\ntest\ttitle");

// + で文字列同士を連結する
// console.log('hello'+'everyone');

// ------------------------------------------------
// #06 数値の計算をしてみよう

// console.log(199 + 88);
// console.log(199 / 88);
// %は割り算ではなく余り
// console.log(100%3);
// 乗の計算は ** アスタリスクを二つ使う
// console.log(100 **2);


// #07 定数を使ってみよう
// 定数ですconst 君は定数定数
// 定数の名前はprice で値１５０が中に入ってます
// このように値を割り当てることを代入と呼ぶ

// const price = 150;

// 定数のconst に値を再代入するとエラーが出ます
// price = 777;
// console.log(price * 3);



// #08 変数を使ってみよう
// 変数let を使えば定数と違って
// 値の再代入が出来ます。

// let value =30;

// value = 140;
// console.log(value);

// 最近のプログラムでは値がたびたび変化すると分かりにくいので
// 基本const 定数を使い,それでは処理できない場合
// 変数letを使う事が多い。



// 定数・変数の命名規則について！！

// 英数字、$ _ のみ！！
// 数値から始める命名はアウト

// ハイフンは使えない
// let my-name;   

// 最初が文字なのでダメ
// let 0price;  

// 大文字と小文字は区別される

// 予約語は定数・変数に命名できない
// let const; はアウト

// #09 変数を使った計算をしてみよう

// 例えば
let price = 500;

// price = price + 100;
// この計算式の簡略化が次の計算式

// price += 100;

// price = price*2;
// price*=2;

// price = price + 1;
// price +=1;
// price ++;

// price -=1;
// price--;

console.log(price);