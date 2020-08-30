// const mySwiper = new Swiper('.swiper-container', {
//     effect: "flip",
//     loop: true,
//     pagination: '.swiper-pagination',
//     nextButton: '.swiper-button-next',
//     prevButton: '.swiper-button-prev'
// });

$(function() {
  // 閉じてたら開く、開いてるよクラスつける
  $('.menu-item-wrapper').click(function(){
    var $menu_popup = $(this).find('.menu-popup');

    if($menu_popup.hasClass('is-open')) {
      // 開いてたら閉じる、クラス消す
      $menu_popup.removeClass('is-open');
      $menu_popup.fadeOut();
    } else {
      $menu_popup.addClass('is-open');
      $menu_popup.fadeIn();
    }
  })
});

// function サイドメニュー
$(function() {
  // 閉じてたら開く、開いてるよクラスつける
  $('.side-menu-item').click(function(){
    // クリックしたやつをactiveにする＋兄弟でactiveついてるやつから外す
    $(this).addClass("active");
    $(this).siblings(".active").removeClass("active");

    // なんばんめ？
    var $num = $('div.side-menu-item').index(this);
    // data-numに指定して切り替え
    $('#function-img').attr({
      'data-num': $num,
    })
    // var tabContents = $(this).attr("href");
    // $(tabContents).addClass("active").siblings(".active").removeClass("active");

  })
});


var mySwiper = new Swiper ('.swiper-container', {
    effect: 'cube',
    loop: true,
    cubeEffect: {
      slideShadows: false,
       shadowOffset: 20,
       shadowScale: 0.94,
    },
     navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    },
    autoplay: {
      delay: 3000,
      stopOnLastSlide: false,
      disableOnInteraction: false,
      reverseDirection: false
    },
  });

// ヘッダー固定
$(window).scroll(function(){
  var $function_top = $('#function').offset().top;
  console.log('function_position:' + $function_top);

  var $scroll_top = $(window).scrollTop();

  if ($scroll_top > $function_top) {
    $('#header').addClass('header-fixed');
  } else {
    $('#header').removeClass('header-fixed');
  }
});

// id="title"に表示
var options = {
  strings: ['first sentence', 'second sentence'],
  typeSpeed: 100,
  backSpeed: 100,
  loop: true,
};

var typed = new Typed('#title', options);
// $("#title").typed({
//   strings: [
//     'アニメーションが表示されるテキスト'
//    ],
//   typeSpeed: 1 // アニメーションのスピード
// });