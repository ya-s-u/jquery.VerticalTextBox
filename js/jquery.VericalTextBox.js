(function($) {
  // プラグイン宣言
  $.fn.VerticalTextBox = function(options){
    // グローバル変数宣言
    var Box = this;

    // デフォルト引数
    var defaults = {
      width : 240,
      height  : 400,
      rows  : 3,
      size  : 18,
      text   : 'これはサンプルテキストです。'
    };
    var setting = $.extend(defaults, options);

    // 段落生成
    var rows = [];
    var horizon_chars = Math.floor(setting.width / setting.size);
    var vertical_chars = Math.floor((setting.height / setting.rows) / setting.size);
    var row_chars = horizon_chars * vertical_chars;

    for(var i=0; i<setting.rows; i++) {
      var row = $("<div></div>", {
        width: setting.width,
        height: setting.height / setting.rows,
        css: {
          float: "left",
        },
        addClass: "child",
        text: setting.text.substr(i*row_chars, row_chars)
      });
      rows.push(row);
    }

    // ボックス出力
    Box.width(setting.width);
    Box.height(setting.height + setting.rows);
    Box.css({
      "overflow": "hidden",
      "-webkit-writing-mode": "vertical-rl",
      "font-size": setting.size,
      "line-height": "1em",
      "white-space":  "pre",
      "overflow-wrap":  "break-word"
    })
    Box.append("<style>.child{border-bottom:1px solid silver}</style>")
    $.each(rows, function(i, val) { Box.append(rows[i]) })

    // メソッドチェーン対応
    return(this);
  };
})(jQuery);
