// var username = 
// console.log(username.length)
$(".btn-wrapper").on('click', () => {
  if ($("#username").val().length === 0 || $("#password").val().length === 0) {
    alert("请输入用户名或密码再进行登陆")
    return false
  }
  var data = {
    username: $("#username").val(),
    password: $("#password").val(),
  };
  xhrGet(
    "http://303z9z3029.qicp.vip/php/Smartisanback_dev/login.php",
    function (res) {
      res = JSON.parse(res);
      console.log(res);
      if (res.type === "success") {
        $(".btn-wrapper a").css({
          "color": "#FF6A6A"
        })
        $(".btn-wrapper a").html("欢迎登录...")

        localStorage.setItem("flage", res.detail.flage)
        setTimeout(function () {
          // alert("登录成功")
          location.href = "../html/index.html";
        }, 1000);
      } else {
        // console.log("youcuowu")
        alert(res.detail)
      }
    },
    data
  );
})