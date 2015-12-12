$(function() {
  $("#article").VerticalTextBox({
    width : 210,
    height  : 740,
    x : 20,
    y : 20,
    rows  : 4,
    size  : 18,
    additionalRule: ["・"],
    text: "熊本県警は６日、知人女性の生後３カ月の乳児に覚醒剤を投与して殺害したとして、殺人と覚せい剤取締法違反（使用）の疑いなどで熊本県益城町宮園、自称会社員、吉村天翔容疑者（２４）を逮捕した。県警は認否を明らかにしておらず、詳しい状況や動機を調べている。吉村容疑者は乳児の父親ではないという。逮捕容疑は今年９月４日未明ごろ、熊本市東区のラブホテルで、女性の長男、西田悠真ちゃんに覚醒剤を投与し、殺害した疑い。県警によると、吉村容疑者は４日午前３時すぎ、数年前から交友関係のあった２０代の無職女性＝熊本市南区＝とその長男の３人で、ホテルにチェックインした。４日午後０時半ごろ、ホテルにいた女性が「子供が泡を吹いて固まっている」と１１０番。長男は病院に運ばれたが、覚醒剤中毒で死亡した。警察官が駆け付けた際、吉村容疑者はホテルにはいなかった。吉村容疑者と女性は事件後、覚醒剤を使用したとして逮捕、起訴され、ともに執行猶予付き判決を受けている。",
    title : "乳児に覚醒剤投与、殺害疑い　熊本の２４歳男逮捕",
    titleReverse  : false,
  });
});

new Vue({
  el: '#app',
  data: {
    width: 240,
    height: 400,
    x: 0,
    y: 0,
    rows: 3,
    size: 18,
    text : "",
    title: "",
    titleReverse : false
  },
  methods: {
    generate: function () {
      $(function() {
        $("#article").VerticalTextBox({
          width : this.width,
          height  : this.height,
          x : this.x,
          y : this.y,
          rows  : this.rows,
          size  : this.size,
          additionalRule: ["・"],
          text: this.text,
          title: this.title,
          titleReverse  : this.titleReverse,
        });
      });
    },
  }
});
