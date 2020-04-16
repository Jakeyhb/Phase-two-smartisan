
// console.log($(".btn-wrapper"))

$(".btn-wrapper").on('click', () => {
  // console.log(1)
  var data = {
    username: $("#username").val(),
    password: $("#password").val(),
  };
  console.log(data);
  // 获取前端用户数据发送给服务端，让服务端进行处理即可;

  // 发送请求给后端;
  xhrGet(
    "http://303z9z3029.qicp.vip/php/Smartisanback_dev/register.php",
    function (res) {
      res = JSON.parse(res);
      // console.log(res);
      // 成功 :  给提示; 跳转;
      // 失败 :  给提示;
      if (res.type === "success") {
        setTimeout(function () {
          location.href = "../html/login.html";
        }, 2000);
      } else {
        alert("chognxin")
        // success_alert_ele.style.display = "none";
        // error_alert_ele.style.display = "block";
        // error_alert_ele.innerHTML = res.detail;
      }
    },
    data
  );
})



