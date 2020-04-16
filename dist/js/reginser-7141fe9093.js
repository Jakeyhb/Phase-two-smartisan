"use strict";$(".btn-wrapper").on("click",function(){var e={username:$("#username").val(),password:$("#password").val()};console.log(e),xhrGet("http://303z9z3029.qicp.vip/php/Smartisanback_dev/register.php",function(e){"success"===(e=JSON.parse(e)).type?setTimeout(function(){location.href="../html/login.html"},2e3):alert("chognxin")},e)});
//# sourceMappingURL=reginser-7141fe9093.js.map
