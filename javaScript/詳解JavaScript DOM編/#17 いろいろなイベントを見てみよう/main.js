'use strict';
// #17 いろいろなイベントを見てみよう
{
  document.querySelector('button').addEventListener('dblclick',() =>{
console.log('二回押したなぁ');
  });

  document.addEventListener('mousemove',()=>{
    console.log('moved!');
  });
}