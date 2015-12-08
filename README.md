# jQuery VerticalTextBox

## 概要
幅・高さ・行数・文字サイズ・文字列を指定すると、新聞のような段組レイアウトを生成してくれるプラグイン。

## 使い方
1) ライブラリをロード
```html
<script src="./js/jquery-1.11.3.min.js"></script>
<script src="./js/jquery.VericalTextBox.js"></script>
```
2) タグを設置
```html
<div id="hoge"></div>
```
3) プラグインを呼び出す
```javascript
$(function() {
  $("#hoge").VerticalTextBox({
    width : 240,  // ボックスの幅
    height  : 600,  // ボックスの高さ
    rows  : 4,  // 行数
    size  : 18, // 文字サイズ
    additionalRule  : ["・"], // 禁則処理する文字
    text: "fugafuga"  // 流し込む文字列
  });
});
```

## 実行例
![](https://raw.githubusercontent.com/ya-s-u/VerticalTextBox/master/example.png)
