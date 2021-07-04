'use strict';
// #09 カスタムデータ属性を扱ってみよう
{
document.querySelector('button').addEventListener('click',() => {
  const targetNode =document.getElementById('target');

  // targetNode.textContent = 'Dotinstall';

//  ボタンをクリックしたら
//   data-translation属性の値にテキストを変更します
  targetNode.textContent =targetNode.dataset.translation ;

});
}