'use strict';
// #20 フォームを送信してみよう
{
  // document.querySelector('form').addEventListener('submit',()=>{
  //   ページ遷移されるのでsubmitはすぐに消えます
  // console.log('submit');
  // });
  document.querySelector('form').addEventListener('submit',e =>{
    //引数をeにしてイベントオブジェクトを渡す
    //.preventDefault()により既定の動作今回では
    //ページ遷移をキャンセルする
   e.preventDefault();
  console.log('submit');
  });
}
//フォームを Enter キーで送信するには、 form タグの中に button タグが必要ですが、
//実は form タグの中に <input type="text"> が 
//1 つだけの場合は、 button を省略しても Enter キーだけで送信できます。