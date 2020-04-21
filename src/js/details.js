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

})