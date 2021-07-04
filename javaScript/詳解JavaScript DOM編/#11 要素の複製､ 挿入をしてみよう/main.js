'use strict';
// #11 要素の複製､ 挿入をしてみよう

// ①li要素を複製する

// ②ＤOMツリーに追加する
{
document.querySelector('button').addEventListener('click',() => {
  // querySelectorAllを使って０番目のliタグを取得します
const item0 = document.querySelectorAll('li')[0];
//cloneNode(true);を使って要素のコピーを作る
const copy = item0.cloneNode(true);
// item 2 の前に挿入したいなら、親要素と item 2 の値が必要
//親要素ulを取得
const ul = document.querySelector('ul');
//item 2 を取得
const item2 =document.querySelectorAll('li')[2];
//insertBefore()を使ってitem2の手前にcopyした要素を挿入
ul.insertBefore(copy,item2);
});

}