'use strict';
// #10 要素を追加してみよう

// DOMに要素を追加する手順

// ①要素を作る

// ②中身のテキストを設定する

// ③ＤOMツリーに追加する

document.querySelector('button').addEventListener('click',() =>{
  //document.createElement('');を使って新しい要素を作る
const item2 = document.createElement('li');
// 要素の中のテキスト内容を作る
item2.textContent = 'item2';
// DOMツリーに追加するために、まず親の要素今回はulを取得
const ulNode = document.querySelector('ul');
//appendChild()を使って子の末尾に作った要素を追加
ulNode.appendChild(item2);
});