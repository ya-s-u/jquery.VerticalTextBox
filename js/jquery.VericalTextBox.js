(function($) {
  // プラグイン宣言
  $.fn.VerticalTextBox = function(options){
    // グローバル変数宣言
    var Box = this;

    // デフォルト引数
    var defaults = {
      width : 240,
      height  : 400,
      x : 0,
      y : 0,
      rows  : 3,
      size  : 18,
      additionalRule  : [],
      text  : "これはサンプルテキストです。",
      title : "サンプルタイトル"
    };
    var setting = $.extend(defaults, options);

    // タイトル生成
    var titleFontSize = (setting.height-10*2) / setting.title.length;
    var title = $("<div></div>", {
      width: titleFontSize+20,
      height: setting.height,
      css: {
        float: "left",
      },
      addClass: "title",
      html: "<h1>"+setting.title+"</h1>"
    });
    Box.append(title)

    // 変数宣言
    var rows = [];
    var horizon_chars = Math.floor(setting.width / setting.size);
    var vertical_chars = Math.floor((setting.height / setting.rows) / setting.size);
    var row_chars = horizon_chars * vertical_chars;
    var rules = ["、", "）", "っ", "～", "。"];
    rules = rules.concat(setting.additionalRule)
    var lines = [];

    // 文字列を行に変換
    for(var i=0; i<horizon_chars*setting.rows; i++) {
      lines[i] = setting.text.substr(i*vertical_chars, vertical_chars);
    }

    // 禁則処理を適用
    var size = lines.length;
    for (var i=0; i<size; i++) {
      var word = lines[i][0];

      if(rules.indexOf(word) >= 0) {
        var movedWords = lines[i-1].substr((lines[i-1].length-1));

        lines[i-1] = lines[i-1].slice(0,-1);
        lines[i] = movedWords + lines[i];
      }

      if(lines[i].length > vertical_chars) {
        var offset = lines[i].length - vertical_chars;
        var movedWords = lines[i].substr(lines[i].length-offset);

        lines[i] = lines[i].substr(0, lines[i].length-offset);
        lines[i+1] = movedWords + lines[i+1];
      }
    }

    // 段落生成
    for(var i=0; i<setting.rows; i++) {
      var html = "";
      for(var j=0; j<horizon_chars; j++) {
        if(lines[i*horizon_chars+j].length < vertical_chars) {
          var offset = vertical_chars - lines[i*horizon_chars+j].length;
          html += "<p class='offset"+offset+"'>"+lines[i*horizon_chars+j]+"</p>";
        } else {
          html += "<p>"+lines[i*horizon_chars+j]+"</p>";
        }
      }

      var row = $("<div></div>", {
        width: setting.width,
        height: setting.height / setting.rows,
        css: {
          float: "left",
        },
        addClass: "child",
        html: html
      });
      rows.push(row);
    }

    // ボックス出力
    Box.width(setting.width+20);
    Box.height(setting.height + setting.rows);
    Box.css({
      "overflow": "hidden",
      "-webkit-writing-mode": "vertical-rl",
      "font-size": setting.size,
      "line-height": "1em",
      "white-space": "pre",
      "position": "absolute",
      "top": setting.x,
      "left": setting.y
    })
    Box.append("<style>\
      .title h1{\
        margin: 10px 10px 10px 0px;\
        font-size: "+titleFontSize+"px;\
      }\
      .child{\
        border-bottom:1px solid silver;\
      }\
      p.offset1{\
        letter-spacing: "+Math.round((vertical_chars/(vertical_chars-1)-1) * 1000)/1000+"em;\
      }\
      p.offset2{\
        letter-spacing: "+Math.round((vertical_chars/(vertical_chars-2)-1) * 1000)/1000+"em;\
      }\
      p.offset3{\
        letter-spacing: "+Math.round((vertical_chars/(vertical_chars-3)-1) * 1000)/1000+"em;\
      }\
    </style>")
    $.each(rows, function(i, val) { Box.append(rows[i]) })

    // メソッドチェーン対応
    return(this);
  };
})(jQuery);
