//点击跳转详情页
// 事件委托
var hide_timer = ""
$("#comonjakeby .hot-list-duct ").on("mouseenter", () => {
  clearTimeout(hide_timer);
  hide_timer = setTimeout(() => {
    $(".hot-list-duct").css({
      background: "#f9f9f9",
      cursor: "pointer"
    })
  }, 200)
})
$("#comonjakeby .hot-list-duct").on("mouseleave", () => {
  clearTimeout(hide_timer);
  console.log(1)
  $(".hot-list-duct").css({
    background: "#ffffff"
  })
})
$("#comonjakeby .hot-list-duct ").on("click", ".item-cover", () => {
  // console.log(1)
  location.href = "../html/detail.html";
  // var spu_id = valueByName(location.search, "spu_id");
  // alert(spu_id)

})


// $(".list-duct").on("click", () => {
//   // console.log(1)
//   // location.href = "../html/detail.html";
//   var spu_id = valueByName(location.search, "spu_id");
//   console.log(spu_id)
// })


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

}