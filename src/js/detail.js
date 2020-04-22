$(function () {
  let detal_timer = null;


  //事件监听

  // console.log(1)
  // location.href = "../html/detail.html";
  var spu_id = valueByName(location.search, "spu_id");
  console.log(spu_id)


  function valueByName(search, name) {
    var start = search.indexOf(name + "=");
    if (start == -1) {
      return null;
    } else {
      var end = search.indexOf("&", start);
      if (end == -1) {
        end = search.length;
      }
      //提取出想要键值对 name=value
      var str = search.substring(start, end);
      var arr = str.split("=");
      return arr[1];
    }


    $("#shoplist").mousemove(function () {
      if (localStorage.getItem("flage")) {
        clearTimeout(hide_timer);
        hide_timer = setTimeout(() => {
          $(".shop-list").addClass("show-list")
          $(this).css({
            cursor: "pointer"
          })
        }, 200)
        return false
      }

    })
    //定时器
    $("#shoplist").mouseleave(function () {
      // flag = true;
      clearTimeout(hide_timer);
      hide_timer = setTimeout(() => {
        $(".shop-list").removeClass("show-list")
      }, 200)
    })

    $("#shoplist").on('click', () => {
      if (localStorage.getItem("flage")) {
        location.href = "../html/shopcar.html";
        // window.location.reload()
      } else {
        alert("您还未登录")
        // console.log(1)
      }
    })
    $(".shop-list").mousemove(function () {
      clearTimeout(hide_timer);
    })

    $(".shop-list").mouseout(function () {
      clearInterval(hide_timer);
      hide_timer = setInterval(() => {
        $(".shop-list").removeClass("show-list")
      }, 200)

    })
  }

})