var keyArray = ["Ⅰ", "Ⅱ", "Ⅲ", "Ⅳ", "Ⅴ", "Ⅵ", "Ⅶ"];
var key0array = ["I", "II", "III", "IV", "V", "VI", "VII"];
var key1array = ["C", "D", "E", "F", "G", "A", "B"]; //C
var key2array = ["C♯", "D♯", "E♯", "F♯", "G♯", "A♯", "C"]; //C#
var key3array = ["D♭", "E♭", "F", "G♭", "A♭", "B♭", "C"]; //D♭
var key4array = ["D", "E", "F♯", "G", "A", "B", "C♯"]; //D
var key5array = ["E♭", "F", "G", "A♭", "B♭", "C", "D"]; //D#(E♭)ダブル♯が必要だから使わない？
var key6array = ["E♭", "F", "G", "A♭", "B♭", "C", "D"]; //E♭
var key7array = ["E", "F♯", "G♯", "A", "B", "C♯", "D♯"]; //E
var key8array = ["F", "G", "A", "B♭", "C", "D", "E"]; //F
var key9array = ["F♯", "G♯", "A♯", "B", "C♯", "D♯", "F"]; //F#
var key10array = ["G♭", "A♭", "B♭", "C♭", "D♭", "E♭", "F"]; //G♭
var key11array = ["G", "A", "B", "C", "D", "E", "F♯"]; //G
var key12array = ["A♭", "B♭", "C", "D♭", "E♭", "F", "G"]; //G#(A♭)
var key13array = ["A♭", "B♭", "C", "D♭", "E♭", "F", "G"]; //A♭
var key14array = ["A", "B", "C♯", "D", "E", "F♯", "G♯"]; //A
var key15array = ["B♭", "C", "D", "E♭", "F", "G", "A"]; //A#(B♭)
var key16array = ["B♭", "C", "D", "E♭", "F", "G", "A"]; //B♭
var key17array = ["B", "C♯", "D♯", "E", "F♯", "G♯", "A♯"]; //B
var key18array = ["C♭", "D♭", "E♭", "E", "G♭", "A♭", "B♭"]; //C♭

// 初期HTML記述をセット
var defaultHTML;
function DefaultSave() {
  defaultHTML = document.getElementById("reset").innerHTML;
}
// HTML記述を初期状態に戻す
function HTMLRestore() {
  document.getElementById("reset").innerHTML = defaultHTML;
}

//ダブル♭配列 ♭♭を取るとB♭major(key16)になる
var dblFlatArray = [];
for (i = 0; i < 7; i++) {
  dblFlatNote = key1array[i] + "♭♭";
  dblFlatArray.push(dblFlatNote);
}

//ダブル♯配列 ♯♯を取るとDmajor(key４)になる
var dblSharpArray = [];
for (i = 0; i < 7; i++) {
  dblSharpNote = key1array[i] + "♯♯";
  dblSharpArray.push(dblSharpNote);
}

//スケール選択関数
function FscaleSlect(x) {
  switch (x) {
    case 0:
      return key0array;
      break;
    case 1:
      return key1array;
      break;
    case 2:
      return key2array;
      break;
    case 3:
      return key3array;
      break;
    case 4:
      return key4array;
      break;
    case 5:
      return key5array;
      break;
    case 6:
      return key6array;
      break;
    case 7:
      return key7array;
      break;
    case 8:
      return key8array;
      break;
    case 9:
      return key9array;
      break;
    case 10:
      return key10array;
      break;
    case 11:
      return key11array;
      break;
    case 12:
      return key12array;
      break;
    case 13:
      return key13array;
      break;
    case 14:
      return key14array;
      break;
    case 15:
      return key15array;
      break;
    case 16:
      return key16array;
      break;
    case 17:
      return key17array;
      break;
    case 18:
      return key18array;
      break;
  }
}

//枠回転指定関数
function Frotation(y) {
  switch (y) {
    case 1:
      return 0;
      break;
    case 2:
      return 210;
      break;
    case 3:
      return 210;
      break;
    case 4:
      return 60;
      break;
    case 5:
      return 270;
      break;
    case 6:
      return 270;
      break;
    case 7:
      return 120;
      break;
    case 8:
      return 330;
      break;
    case 9:
      return 180;
      break;
    case 10:
      return 180;
      break;
    case 11:
      return 30;
      break;
    case 12:
      return 240;
      break;
    case 13:
      return 240;
      break;
    case 14:
      return 90;
      break;
    case 15:
      return 300;
      break;
    case 16:
      return 300;
      break;
    case 17:
      return 150;
      break;
    case 18:
      return 150;
      break;
  }
}

//実行
$(function () {
  //初期値保存
  DefaultSave();
  FscaleSlect(0);

  //変更発生時
  $("[name=key]").on("change", function () {
    //選択スケール判定
    var val = $("[name=key]").val();
    var keyNum = parseInt(val.replace("key", ""));
    var myArray = FscaleSlect(keyNum);

    //初期化
    HTMLRestore();

    //選択キーに変更
    $("td").each(function () {
      for (i = 0; i < 7; i++) {
        //txt変換
        var note = $(this).text();
        //音名変換、♯♭を消去
        var noteName = note
          .replace(keyArray[i], myArray[i])
          .replace("♯♭", "")
          .replace("♭♯", "");
        //一度保管
        $(this).html(noteName);

        //ダブル♯♭を消去
        for (j = 0; j < 7; j++) {
          var note2 = $(this).text();
          var newNoteName = note2
            .replace(dblFlatArray[j], key16array[j])
            .replace(dblSharpArray[j], key4array[j]);
          $(this).html(newNoteName);
        }
      }
    });

    //枠の角度変更
    if (keyNum == 0) {
      $("#waku").css({ 'cssText': 'display: none !important' });
    } else {
      $("#waku").css({ 'cssText': 'display: block !important' });
      var myRotation = Frotation(keyNum);
      $('#waku').css({ transform: 'rotate(' + myRotation + 'deg)' });
    };
  });
});