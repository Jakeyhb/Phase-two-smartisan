// 下拉菜单和购物车
$(function () {
  let hide_timer = null;
  var flag = true;
  $("#shoplist").mousemove(function () {

    flag = false;
    $(".shop-list").css({
      opacity: 1,
    });
    $(this).css({
      cursor: "pointer"
    })

  })
  //定时器
  $("#shoplist").mouseout(function () {
    flag = true;
    clearInterval(hide_timer);
    // $(".shop-list").css({
    //   opacity: 0,
    // });
    hide_timer = setInterval(function () {
      $(".shop-list").css({
        opacity: 0,
      });
    }, 100)
  })
  $(".shop-list").mousemove(function () {
    clearTimeout(hide_timer);
  })

  $(".shop-list").mouseout(function () {
    clearInterval(hide_timer);
    hide_timer = setInterval(function () {
      $(".shop-list").css({
        opacity: 0,
      });
    }, 100)

  })
})

//banner
var swiper = new Swiper('.swiper-container', {
  spaceBetween: 30,
  effect: 'fade',
  fadeEffect: {
    crossFade: true,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  autoplay: {
    delay: 4000,
    stopOnLastSlide: false,
    disableOnInteraction: true,
  },
});
