'use strict';
// #16 チェックボックスを操作してみよう
{
  document.querySelector('button').addEventListener('click',() =>{
    //querySelectorAll によって3つの input 要素がすべて取得
    // input 要素は NodeList というオブジェクトに格納され、colors に代入NodeList(3) [input, input, input]
const colors = document.querySelectorAll('input');

//選択された値を配列で保持する
const selectedColors =[];

colors.forEach(color => {
  //NodeList 内の3つの input 要素を1つずつ取り出して color に代入し、その checked 属性を確認
  if(color.checked === true){
    selectedColors.push(color.value);
  }
});
const li =document.createElement('li');

// li.textContent = selectedColors.join(',');
//配列は文字列で表現される時に,区切りになるので
//,区切りの場合なら.join(',');は不要です
li.textContent = selectedColors;

document.querySelector('ul').appendChild(li);
  });

//appendChild(li)は
//１５行目の定数のliなのでクォテーションで囲まない
}
// 質問
// li.textContent=selectedColors;
// 上のコードで、selectedColorsが配列なのにもかかわらず、li.textContentは文字列として表示されます。
// その理由が分かりません。
// 答え
// Javascriptは型が緩い動的型付けなプログラミング言語であります。
// よって、文字列の変数に配列を格納する際に暗黙的に型変換を行います。