'use strict';
// #07 classNameを操作してみよう
// #08 classListを使ってみよう
{ 
  document.querySelector('button').addEventListener('click', () => {
    const targetNode = document.getElementById('target');
 
    // これを実行すると元々あったクラス名も消える
    // targetNode.className = 'my-color ';

    // なのでclassNameで残したいクラス名があるなら、追記する必要がある。
    // targetNode.className = 'my-color my-border';


// 単純にクラス名を追加したいだけなら、こっちで記述を
    // targetNode.classList.add('my-color');
    
    // contains('my-color')とは？
    // my-colorクラスがついてるかどうかを判定して
    // true falseで返してくれるif文とセットで使う

    
    // if(targetNode.classList.contains('my-color') === true){
    //   targetNode.classList.remove('my-color');
    // }else{
    //   targetNode.classList.add('my-color');
    // }
// 上記のコードをさらに短く書くと

targetNode.classList.toggle('my-color');
  });

}
    