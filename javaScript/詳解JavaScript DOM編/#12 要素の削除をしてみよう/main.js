'use strict';
// #12 要素の削除をしてみよう

{
  document.querySelector('button').addEventListener('click',() =>{
    const item1 = document.querySelectorAll('li')[0];
    // 親Ｎodeの値ulを取得します
  //remove()を使って削除します
    // item1.remove();

    //他の削除方法
    //親Node.removeChild(削除するNOde)
    document.querySelector('ul').removeChild(item1);
  });
}