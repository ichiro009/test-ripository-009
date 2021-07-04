'use strict';
{
  document.querySelector('button').addEventListener('click',() =>{
//li要素を作ります
const li = document.createElement('li');
//select要素を取得します
const color = document.querySelector('select');

//作ったli要素のテキストの中身が= `  `;
//${color.value}でselectで選択されたvalueの値
//${color.selectedIndex}で選択された値が何番目か取得
li.textContent = `${color.value} - ${color.selectedIndex}`;

//選択された値がul の末尾のliに追加されます
document.querySelector('ul').appendChild(li);
  });
}