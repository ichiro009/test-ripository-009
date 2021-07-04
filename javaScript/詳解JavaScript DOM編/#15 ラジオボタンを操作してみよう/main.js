'use strict';
// #15 ラジオボタンを操作してみよう

{
  document.querySelector('button').addEventListener('click',()=>{
  //全てのinput要素をdocument.querySelectorAllで取得

const colors =document.querySelectorAll('input');
// 選択された値を保持するので定数じゃなく変数宣言
let selectedColor;
//forEachを使ってcolorsにループ処理をする
colors.forEach(color=>{
//checkedを使って要素がチェックされてるか確認する
if(color.checked === true){
// チェックされていれば値が追加される
  selectedColor = color.value;
}
});
//createElement('li')でli要素を作る
const li =document.createElement('li');

//上記のforEachのif文の値をliのテキストにする
li.textContent = selectedColor;
//
document.querySelector('ul').appendChild(li);
  });
}