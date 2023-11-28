var windowwidth =
  window.innerWidth || document.documentElement.clientWidth || 0;
if (windowwidth > 768) {
  var responsiveImage = [
    //PC用の画像
    {
      src: "http://konwakai-kinki.org/wp-content/uploads/2023/07/セミナー写真②-scaled.jpg",
    },
    {
      src: "http://konwakai-kinki.org/wp-content/uploads/2023/10/003-scaled.jpg",
    },
    {
      src: "http://konwakai-kinki.org/wp-content/uploads/2023/10/IMG_1881-002-scaled.jpg",
    },
  ];
} else {
  var responsiveImage = [
    //タブレットサイズ（768px）以下用の画像
    {
      src: "http://konwakai-kinki.org/wp-content/uploads/2023/07/セミナー写真②-scaled.jpg",
    },
    {
      src: "http://konwakai-kinki.org/wp-content/uploads/2023/10/003-scaled.jpg",
    },
    {
      src: "http://konwakai-kinki.org/wp-content/uploads/2023/10/IMG_1881-002-scaled.jpg",
    },
  ];
}

//Vegas全体の設定

$(".p-mainVisiual__img").vegas({
  overlay: true, //画像の上に網線やドットのオーバーレイパターン画像を指定。
  transition: "blur", //切り替わりのアニメーション。http://vegas.jaysalvat.com/documentation/transitions/参照。fade、fade2、slideLeft、slideLeft2、slideRight、slideRight2、slideUp、slideUp2、slideDown、slideDown2、zoomIn、zoomIn2、zoomOut、zoomOut2、swirlLeft、swirlLeft2、swirlRight、swirlRight2、burnburn2、blurblur2、flash、flash2が設定可能。
  transitionDuration: 2000, //切り替わりのアニメーション時間をミリ秒単位で設定
  delay: 10000, //スライド間の遅延をミリ秒単位で。
  animationDuration: 20000, //スライドアニメーション時間をミリ秒単位で設定
  animation: "kenburns", //スライドアニメーションの種類。http://vegas.jaysalvat.com/documentation/transitions/参照。kenburns、kenburnsUp、kenburnsDown、kenburnsRight、kenburnsLeft、kenburnsUpLeft、kenburnsUpRight、kenburnsDownLeft、kenburnsDownRight、randomが設定可能。
  slides: responsiveImage, //画像設定を読む
  //timer:false,// プログレスバーを非表示したい場合はこのコメントアウトを外してください
});

jQuery(function ($) {
  $(window).on("load scroll", function () {
    var box = $(".fadeBottom");
    var animated = "animated";

    box.each(function () {
      var boxOffset = $(this).offset().top;
      var scrollPos = $(window).scrollTop();
      var wh = $(window).height();

      if (scrollPos > boxOffset - wh + 100) {
        $(this).addClass(animated);
      }
    });
  });
});

jQuery(function ($) {
  $(window).on("load scroll", function () {
    var box = $(".fadeRight");
    var animated = "animated";

    box.each(function () {
      var boxOffset = $(this).offset().top;
      var scrollPos = $(window).scrollTop();
      var wh = $(window).height();

      if (scrollPos > boxOffset - wh + 100) {
        $(this).addClass(animated);
      }
    });
  });
});
const responsive_menu_btn = document.querySelector(".responsive_btn");
responsive_menu_btn.addEventListener("click", menuToggle);
function menuToggle() {
  const header_menu_detail = document.querySelector("#g-nav");
  header_menu_detail.classList.toggle("menu_active");
  responsive_menu_btn.addClass("open");
}

$(".slider").slick({
  autoplay: true, //自動的に動き出すか。初期値はfalse。
  infinite: true, //スライドをループさせるかどうか。初期値はtrue。
  speed: 500, //スライドのスピード。初期値は300。
  slidesToShow: 3, //スライドを画面に3枚見せる
  slidesToScroll: 1, //1回のスクロールで1枚の写真を移動して見せる
  prevArrow: false, //矢印部分PreviewのHTMLを変更
  nextArrow: false, //矢印部分NextのHTMLを変更
  centerMode: true, //要素を中央ぞろえにする
  variableWidth: true, //幅の違う画像の高さを揃えて表示
  dots: true, //下部ドットナビゲーションの表示
});
