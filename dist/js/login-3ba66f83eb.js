"use strict";$(".btn-wrapper").on("click",function(){var o={username:$("#username").val(),password:$("#password").val()};xhrGet("http://localhost/php/Smartisanback_dev/login.php",function(o){o=JSON.parse(o),console.log(o),"success"===o.type?setTimeout(function(){location.href="../html/index.html"},1e3):console.log("youcuowu")},o)});
//# sourceMappingURL=login-3ba66f83eb.js.map
