"use strict";

// イベントの伝播について

{
  // イベントの伝播により
  // liの方にイベントリスナーを追加していなくても。li要素がクリックされたということをJavaScriptが認識して、ulの方でクリックイベントが起こる
  document.querySelector("ul").addEventListener("click", (e) => {
    // 選択範囲をliに絞るためもしnodeNameがＬIならば
    // if (e.target.nodeName === "LI") {

      e.target.classList.toggle("done");
    // }
  });

  document.querySelector('li').addEventListener('click', e => {
    e.stopPropagation();
    alert("li がクリックされました。");
  }); 
}
//質問
// if文の条件で使われているe.target.nodeNameのLIですが、なぜ大文字なのかと疑問に思いました。
// 回答
// これは、Element.tagNameはタグ名を大文字で返すようになっているため、LIと比較しています。そういう仕様ということになりますね。

// stopPropagation()について
// 「このイベントを親要素に伝播 (Propagation) させない」という指定