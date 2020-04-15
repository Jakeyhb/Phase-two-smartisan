"use strict";$(".btn-wrapper").on("click",function(){var e={username:$("#username").val(),password:$("#password").val()};console.log(e),xhrGet("http://localhost/php/Smartisanback_dev/register.php",function(e){"success"===(e=JSON.parse(e)).type?setTimeout(function(){location.href="../html/login.html"},2e3):alert("chognxin")},e)});
//# sourceMappingURL=reginser-dbe18df923.js.map
