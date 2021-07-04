"use strict";
// #05 addEventListener()を使ってみよう
// #06 要素の属性を操作してみよう
{
  document.querySelector("button").addEventListener("click", () => {
    const targetNode = document.getElementById("target");

    targetNode.textContent = "変わった";
    targetNode.title = "タイトル属性変化";
    // targetNode.style.color = 'red';
  
// たとえば、背景色を設定したい場合、 background-color = skyblue ではなくて、 JavaScript から扱いときは - を消して、 2 単語目以降の最初の文字を大文字にしてあげる必要があります。
//text-shadow ならtextShadow となる
    // targetNode.style.textShadow = '1px 5px 2px gray';
    targetNode.style.marginTop = '100px';
  });
}
