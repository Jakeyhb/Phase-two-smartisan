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
    $(".shop-list").css({
      opacity: 0,
    });
  })
})


// $(".position-header").mouseout(function () {
//   clearInterval(hide_timer);
//   hide_timer = setInterval(function () {
//     $(".shop-list").css({
//       opacity: 0,
//     }), 1000
//   })
// })


// $(".lists-container").mousemove(function () {
//   $(".shop-list").css({
//     opacity: 1,
//   });
// })
