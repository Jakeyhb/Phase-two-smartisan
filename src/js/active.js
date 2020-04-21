function chenck() {
  if (localStorage.getItem("flage") !== null) {
    var timsasider = null
    $(".btn-coupon").val("立即领取")
  } else {
    $(".btn-coupon").on("click", () => {
      location.href = "../html/login.html";
    })

  }

}

chenck()

// 数据渲染：