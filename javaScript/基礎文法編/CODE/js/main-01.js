'use strick';
// #10 データ型について見ていこう


// 文字列string  'ヘロロ～'  '世界'
// 数値 Number   8 7 9 7

// Undefined →定義されていないを意味する

// Null→ヌルとかナルとか呼ばれる 値が無い事を示す

// 真偽値(Boolean) true false

// 複雑な構造のデータ型
// オブジェクト(Object) {a:3 , b:5}
// typeof を使うとデータ型が何か調べて出力する
// console.log(typeof 'container');
// console.log(typeof  5);
// console.log(typeof  undefined);
// console.log(typeof null);
// console.log(typeof false);
// console.log(typeof {a:3,b:5});

// #11 数字からなる文字列を扱ってみよう

// console.log('5' * 3);
// console.log('5' - '3');

// ＋の場合上記と違う結果がでるので注意
// 計算結果ではなく単純に文字列の結合になります
// console.log('5' + '3');

// parseInt('値',10)を使うと値が１０進数の整数になります
// console.log(parseInt('5',10) + 3);

// 数値に出来ない値を使うとNon で返される
// console.log(parseInt('さかなクン',10) + 3);

// #12 比較演算子を使ってみよう

// const price = 1200;

// console.log(price > 1000); //true
// console.log(price < 1000); //false
// console.log(price >= 1000); 
// console.log(price <= 1000); 
// console.log(price === 1000); 
// console.log(price !== 1000); 


// 用語undefined 未定義を意味する
// 比較演算子ではない単一の値の場合の
// 真偽値true/falseの判定
// 単一値だと
// 0 null undefined 空文字列 false 
// がfalseとして判定されます
// 逆にそれ以外の値は、true として評価されます

// Boolean（）を使うと値を true,falseで評価できる

// console.log(Boolean(undefined));
// console.log(Boolean("hello"));


// #13 ifで条件分岐をしてみよう


// const score =45;
// もしscoreの値が８０と同じかそれ以上なら
// コンソールにGreat!!!を出力
// if(score >= 80){
//   console.log('Great!!!');

  // 前の条件に該当しない場合で
  // scoreの値が６０と同じかそれ以上なら
  // コンソールにGoodを出力
// } else if (score >= 60){
//   console.log('Good')
// 前述のどの条件にも該当しないなら
// コンソールにDo your bestを出力
// }else {
//   console.log('Do your best')
// }

// if文における{}で囲んだ部分をブロックと呼ぶ
// 特徴としてはこのブロック毎にセミコロンがいらない



// #14 条件演算子を使ってみよう

// 条件式？ trueの処理:falseの処理

// const score = 80;

// score >= 80 ? console.log('Great'):console.log('fight!!');