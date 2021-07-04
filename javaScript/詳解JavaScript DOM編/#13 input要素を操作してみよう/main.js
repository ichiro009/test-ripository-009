'use strict';
// #13 input要素を操作してみよう
{
  document.querySelector('button').addEventListener('click',() => {
  //createElement()で要素を作ります。
const li =document.createElement('li');
//inputの要素を取得します
const text = document.querySelector('input');
//テキストの内容をvalue属性で取得します。
li.textContent = text.value;
//appendChild()を使ってulの末尾に()の子ノードを追加
document.querySelector('ul').appendChild(li);

//ボタンを押すたびにテキストが空になる仕組みを作ります。
//まずtextの値を空文字にする
text.value = '';
//そしてフォーカスさせるのにfocus()を使う
text.focus();
  })
}