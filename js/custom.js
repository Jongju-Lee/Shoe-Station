$(function () {
  /* ##### GNB - Mega Menu ##### */
  $(".gnb_title").hover(function () {
    $(".gnb_content").removeClass("active");
    $(this).next().addClass("active");
  });
  $(".gnb_content").mouseleave(function () {
    $(this).removeClass("active");
    $(".sneakers").addClass("active");
  });
  $(".tab_menu li").mouseenter(function () {
    $(".tab_menu li").removeClass("active");
    $(this).addClass("active");
  });
  $(".tab_menu li").mouseleave(function () {
    $(this).removeClass("active");
  });
  $(".btn_close").click(function () {
    $(".gnb_content").removeClass("active");
  });
  /* ########## Slick.js ########## */
  /* ##### Section - Intro ##### */
  $(".intro_slider").slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    dots: false,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
  /* ##### Section - Best Brand(Sub Slider) ##### */
  $(".best_brand_sub_slider").slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    dots: false,
    arrows: true,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  });
});
