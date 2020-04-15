

$(".btn-wrapper").on('click', () => {
  var data = {
    username: $("#username").val(),
    password: $("#password").val(),
  };
  // console.log(data);
  xhrGet(
    "http://localhost/php/Smartisanback_dev/login.php",
    function (res) {
      res = JSON.parse(res);
      console.log(res);
      if (res.type === "success") {
        setTimeout(function () {
          location.href = "../html/index.html";
        }, 1000);
      } else {
        console.log("youcuowu")
      }
    },
    data
  );
})