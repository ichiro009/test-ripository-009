'use strict';
// #19 フォームで使われるイベントを見てみ
{
  const text = document.querySelector('textarea');

//   text.addEventListener('focus',()=>{
// console.log('フォーカスしたよ');
//   });
//   //フォーカスが外れる事をblurブラーと呼ぶ
//   text.addEventListener('blur',()=>{
// console.log('ブラーしたよ');
//   });
  
  //inputは内容が更新されたとき
  text.addEventListener('input',()=>{
// console.log('input');
//テキストの文字数を取得します
console.log(text.value.length);
  });
  //changeは更新が確定したとき
  text.addEventListener('change',()=>{
console.log('change');
  });
}