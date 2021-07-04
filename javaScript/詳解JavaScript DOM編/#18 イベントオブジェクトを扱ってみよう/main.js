// #18 イベントオブジェクトを扱ってみよう
'use strict';
{
  document.querySelector('button').addEventListener('dblclick',()=>{
console.log('Double Clicked!');
  });
// //'mousemove',e の引数をeにします。
//   document.addEventListener('mousemove',e =>{
// // console.log('動いたよ');
// console.log(e.clientX,e.clientY);
//   });


  //'keydown',e の引数をeにします。
    document.addEventListener('keydown',e =>{
      console.log(e.key);
        });
  
}