"use-strict";
// #06 Panelクラスを作ろう
//#07 インスタンスを生成しよう
{
  class Panel {
    constructor() {
      const section = document.createElement("section");
      section.classList.add("panel");

      //thisを使ってimgをPanelのプロパティにする
      this.img = document.createElement("img");
      //初期の画像をランダムで変化するように
      this.img.src = this.getRandomImage();

      //未定義のtimeoutIdを指定
      this.timeoutId = undefined;

      this.stop = document.createElement("div");
      this.stop.textContent = "STOP";
      this.stop.classList.add("stop","inactive");
      //stopボタンをクリックしたら止まるようにします
      this.stop.addEventListener("click", () => {
        if(this.stop.classList.contains('inactive')){
          return;
        }
        this.stop.classList.add('inactive');
        clearTimeout(this.timeoutId);

        //stopボタンを押すたびにpanelsLeft変数が減る処理
        panelsLeft--;

        if (panelsLeft === 0) {
          spin.classList.remove('inactive');
          panelsLeft = 3;
          checkResult();
        }
      });

      // #07 インスタンスを生成しよう
      //img と stop を section の子要素として追加
      section.appendChild(this.img);
      section.appendChild(this.stop);

      //作ったsectionをmainに追加する
      const main = document.querySelector("main");
      main.appendChild(section);
    }

    //getRandomImageの内容を記述します
    getRandomImage() {
      //配列で画像データを用意します
      const images = ["img/seven.png", "img/bell.png", "img/cherry.png"];
      //Math.random()で取得できるのは0以上1未満
      //images.lengthで要素の数今回は”３”を取得
      //Math.floorを使って小数点以下を切り捨
      //images[つまり3未満の整数でランダムな数を生成]
      return images[Math.floor(Math.random() * images.length)];
    }

    //spinメソッドを定義します
    spin() {
      this.img.src = this.getRandomImage();
      //30ミリ秒後にspinメソッドの処理を繰り返し行う
      this.timeoutId = setTimeout(() => {
        this.spin();
      }, 30);
    }
//それぞれのパネルのimg.srcを調べて、一致しているかどうかを判断

//this.img.src !== p1.img.srcと

//this.img.src !== p2.img.src;
// を&&でつなげているので、両方ともtrueだった場合にだけtrueを返しています（＝つまり、どちらのパネルとも同じではなかった場合にtrueを返す）。
    isUnmatched(p1,p2){
      // if(this.img.src !== p1.img.src && this.img.src !== p2.img.src){
      //   return true;
      // }else {
      //   return false
      // }
      return this.img.src !== p1.img.src && this.img.src !== p2.img.src
    }
    unmatch(){
      this.img.classList.add('unmatched');
    }
    activate(){
      this.img.classList.remove('unmatched');
      this.stop.classList.remove('inactive');
    }
  }

  //個々の変数を比較する処理をclass Panelの外に記述

  function checkResult() {
    //左のパネル（panels[0]）が真ん中のパネル（panels[1]）と右のパネル（panels[2]）と同じか判定して、もし違っていたらpanels[0]にunmatchのクラスをつけて薄くする
    if (panels[0].isUnmatched(panels[1], panels[2])) {
      panels[0].unmatch();
    }
    if (panels[1].isUnmatched(panels[0], panels[2])) {
      panels[1].unmatch();
    }
    if (panels[2].isUnmatched(panels[1], panels[0])) {
      panels[2].unmatch();
    }
  }

  //Panelクラスから３つのインスタンスを生成します

  const panels = [new Panel(), new Panel(), new Panel()];

  //あといくつ動いてるパネルがあるかを変数で保持
  let panelsLeft = 3;

  //spinメソッドを定義します
  const spin = document.getElementById("spin");
  spin.addEventListener("click", () => {
    if(spin.classList.contains('inactive')){
      return;
    }
    spin.classList.add('inactive');
    panels.forEach((panel) => {
      panel.activate();
      panel.spin();
    });
  });
}
