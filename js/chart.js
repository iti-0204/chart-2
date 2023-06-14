let question_elem = "";
let count = 0;
let now_num = -1;
let color_list = [
  "#777777",
  "#575757",
  "#474747",
  "#373737",
  "#272727",
  "#171717",
];
// console.log(question_text);

$(function () {
  $(".start-button").on("click", function () {
    $(".topicon").fadeOut(500, function () {
      console.log("aiueo");
      $(".question-background").fadeIn(500).css("display", "flex");
      question_elem = document.getElementById("question");
    });
  });
});

//質問文の変更
function changeQ(num, ques) {
  count = num;
  question_text = ques;
  if (count == 100) {
    now_num = color_list.length - 1;
    console.log(color_list[now_num]);
  } else {
    now_num += 1;
  }
  //書き換え実行
  $("p").fadeOut(500, function () {
    switch (count) {
      case 100:
        //最後の画面処理
        $("#last-foundation-back").removeClass("color-change");
        $("#last-foundation-back").css({
          "background-color": "#131313",
        });
        switch (question_text) {
          case "ステージ":
            $(".imgin-1").css(
              "background-image",
              "url(../images/chart-img/ステージ部署長.png)"
            );
            $("#logo-img").attr("src", "./images/logo/night_logo.png");
            $(".busyo_name").html("Stage");
            break;
          case "PA":
            $(".imgin-1").css(
              "background-image",
              "url(../images/chart-img/PA部署長.png)"
            );
            $("#logo-img").attr("src", "./images/logo/night_logo.png");
            $(".busyo_name").html("Stage");
            break;
          case "Web":
            $(".imgin-1").css(
              "background-image",
              "url(../images/chart-img/web部署長.png)"
            );
            $("#logo-img").attr("src", "./images/logo/web_logo.png");
            $(".busyo_name").html("Web");
            break;
          case "インテリア":
            $(".imgin-1").css(
              "background-image",
              "url(../images/chart-img/インテリア部署長.png)"
            );
            $("#logo-img").attr("src", "./images/logo/interior_logo.png");
            $(".busyo_name").html("Interior");
            break;
          case "エクステリア":
            $(".imgin-1").css(
              "background-image",
              "url(../images/chart-img/エクステリア部署長.png)"
            );
            $("#logo-img").attr("src", "./images/logo/exterior_logo.png");
            $(".busyo_name").html("Exterior");
            break;
          case "カフェ":
            $(".imgin-1").css(
              "background-image",
              "url(../images/chart-img/カフェ部署長.png)"
            );
            $("#logo-img").attr("src", "./images/logo/cafe_logo.png");
            $(".busyo_name").html("Cafe");
            break;
          case "グラフィック":
            $(".imgin-1").css(
              "background-image",
              "url(../images/chart-img/グラフィック部署長.png)"
            );
            $("#logo-img").attr("src", "./images/logo/gra_logo.png");
            $(".busyo_name").html("Graphic");
            break;
          case "ディレクション":
            $(".imgin-1").css(
              "background-image",
              "url(../images/chart-img/ディレクション部署長.png)"
            );
            $("#logo-img").attr("src", "./images/logo/dire_logo.png");
            $(".busyo_name").html("Direction");
            break;
          case "バー":
            $(".imgin-1").css(
              "background-image",
              "url(../images/chart-img/バー部署長.png)"
            );
            $("#logo-img").attr("src", "./images/logo/bar_logo.png");
            $(".busyo_name").html("Bar");
            break;
          case "ブース":
            $(".imgin-1").css(
              "background-image",
              "url(../images/chart-img/ブース部署長.png)"
            );
            $("#logo-img").attr("src", "./images/logo/booth_logo.png");
            $(".busyo_name").html("Booth");
            break;
          case "ワークショップ":
            $(".imgin-1").css(
              "background-image",
              "url(../images/chart-img/ワークショップ部署長.png)"
            );
            $("#logo-img").attr("src", "./images/logo/work_logo.png");
            $(".busyo_name").html("Workshop");
            break;
          case "映像":
            $(".imgin-1").css(
              "background-image",
              "url(../images/chart-img/映像部署長.png)"
            );
            $("#logo-img").attr("src", "./images/logo/movie_logo.png");
            $(".busyo_name").html("Movie");
            break;
          case "体育祭":
            $(".imgin-1").css(
              "background-image",
              "url(../images/chart-img/体育祭部署長.png)"
            );
            $("#logo-img").attr("src", "./images/logo/ath_logo.png");
            $(".busyo_name").html("Athleticfestival");
            break;
        }
        $(".question-background").fadeOut(100);
        $(".last-background").fadeIn(500).css("display", "flex");
        console.log("ラスト着火");
        break;
      default:
        $("p").html(question_text);
        $(".foundation-back-1").addClass("color-change");
        $("p").fadeIn(500);
        $(".color-change").css({
          "background-color": color_list[now_num],
        });
        break;
    }

    // console.log($(".color-change").css("background-color"));
  });
  // $(".foundation-back-1").removeClass("color-change");
  console.log(question_text);
}

//はいボタンを押したとき
$(document).on("click", ".yesbutton", function () {
  console.log("着火");
  setTimeout(function () {
    switch (count) {
      case 0:
        changeQ(1, "めちゃくちゃ" + "<br>" + "目立ちたい？");
        break;
      case 1:
        changeQ(100, "ステージ");
        break;
      case 2:
        changeQ(7, "ノートのすみに" + "<br>" + "落書きしちゃう");
        break;
      case 3:
        changeQ(100, "バー");
        break;
      case 4:
        changeQ(100, "インテリア");
        break;
      case 5:
        changeQ(100, "カフェ");
        break;
      case 6:
        changeQ(100, "エクステリア");
        break;
      case 7:
        changeQ(8, "ゲームが好き");
        break;
      case 8:
        changeQ(100, "Web");
        break;
      case 9:
        changeQ(11, "予定は進んで" + "<br>" + "たてる方");
        break;
      case 10:
        changeQ(100, "ブース");
        break;
      case 11:
        changeQ(100, "ディレクション");
        break;
      case 12:
        changeQ(100, "体育祭");
        break;
      case 13:
        changeQ(100, "ワークショップ");
        break;
      case 14:
        changeQ(100, "PA");
        break;
      case 15:
        changeQ(100, "映像");
        break;
    }
  }, 200);
});

//いいえボタンを押したとき
$(document).on("click", ".nobutton", function () {
  setTimeout(function () {
    switch (count) {
      case 0:
        changeQ(2, "細かい作業が" + "<br>" + "好き");
        break;
      case 1:
        changeQ(3, "お酒が好き");
        break;
      case 2:
        changeQ(4, "家具選びが好き");
        break;
      case 3:
        changeQ(5, "料理が好き");
        break;
      case 4:
        changeQ(6, "部屋を飾るのが" + "<br>" + "好き");
        break;
      case 5:
        changeQ(7, "ノートのすみに" + "<br>" + "落書きしちゃう");
        break;
      case 6:
        changeQ(13, "人に何か教える" + "<br>" + "のが好き");
        break;
      case 7:
        changeQ(9, "手作業で物を" + "<br>" + "作るのが好き");
        break;
      case 8:
        changeQ(10, "祝われるより" + "<br>" + "祝いたい派");
        break;
      case 9:
        changeQ(12, "スポーツが好き");
        break;
      case 10:
        changeQ(100, "グラフィック");
        break;
      case 11:
        changeQ(13, "人に何か教える" + "<br>" + "のが好き");
        break;
      case 12:
        changeQ(15, "映画をよく見る");
        break;
      case 13:
        changeQ(14, "音楽が好き");
        break;
      case 14:
        changeQ(15, "映画をよく見る");
        break;
      case 15:
        changeQ(8, "ゲームが好き");
        break;
    }
  }, 200);
});

$(document).on("click", "#retry-button", function () {
  location.reload();
});
