function isObject(data) {
    return (typeof data === "object" && data !== null && data.constructor && data.constructor === Object)
}
// 对象合并;
function assign() {
    var target = arguments[0];
    for (var i = 1; i < arguments.length; i++) {
        // console.log(arguments[i]);
        for (var attr in arguments[i]) {
            target[attr] = arguments[i][attr];
        }
    }
    return target;
}
function removeCookie(name, options) {
    cookie(name, "", isObject(options) ? assign(options, { expires: -1 }) : { path: options, expires: -1 })
}
// cookie操作;
function cookie(name, value, options) {
    // 此时参数大于一个，value 是一个字符串。 那么我们认为此时我们在设置cookie;
    if (arguments.length > 1 && typeof value === "string") {
        if (!isObject(options)) {
            options = {};
        }
        if (typeof options.expires === "number") {
            var d = new Date();
            d.setDate(d.getDate() + options.expires);
        }
        return (document.cookie = [
            name + "=" + value,
            typeof options.expires === "number" ? ";expires=" + d : "",
            typeof options.domain === "string" ? ";domain=" + options.domain : "",
            typeof options.path === "string" ? ";path=" + options.path : "",
        ].join(""));
    }
    var cookie_string = document.cookie;
    var cookie_array = cookie_string.split("; ");
    for (var i = 0; i < cookie_array.length; i++) {
        if (cookie_array[i].split("=")[0] === name) {
            return cookie_array[i].split("=")[1]
        }
    }
    return "";
}
function toUrlDataSmartisan(obj, url, method) {
    if (isObject(obj)) {
        var str = "";
        for (var attr in obj) {
            str += "&" + attr + obj[attr]
        }
        str = str.slice(1);
        // 如果数据发送方式是POST，那么直接返回str就可以了;
        method = method || "";
        if (method.toUpperCase() === "POST") {
            return str;
        }
        url += "/" + str;
        return url;
    }
    return url;
}
function toUrlData(obj, url, method) {
    if (isObject(obj)) {
        var str = "";
        for (var attr in obj) {
            str += "&" + attr + "=" + obj[attr]
        }
        str = str.slice(1);
        // 如果数据发送方式是POST，那么直接返回str就可以了;
        method = method || "";
        if (method.toUpperCase() === "POST") {
            return str;
        }
        url += "?" + str;
        return url;
    }
    return url;
}
//  AJAX 请求发送;
function xhrGet(url, callback, data) {
    var xhr = null;
    if (typeof XMLHttpRequest === "function") {
        xhr = new XMLHttpRequest();
    } else {
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }
    url = toUrlData(data, url);
    xhr.open("GET", url);
    xhr.send();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && /^2\d{2}$/.test(xhr.status)) {
            typeof callback === "function" ? callback(xhr.responseText) : "";
        }
    }
}

function xhrPost(url, callback, data) {
    var xhr = null;
    if (typeof XMLHttpRequest === "function") {
        xhr = new XMLHttpRequest();
    } else {
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    data = toUrlData(data, url, "POST");
    // console.log(data);
    xhr.send(data);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && /^2\d{2}$/.test(xhr.status)) {
            callback(xhr.responseText);
        }
    }
}
// ajax 兼容性良好的封装;
function ajaxsmartisan(options) {
    // 默认参数;
    var _default = {
        type: "GET",
        url: "",
        data: null,
        // 返回的数据类型;
        dataType: "text",
        status: null,
        success: function () { },
        complete: function () { },
        error: function () { }
    }
    // 我们会创建一些默认参数, 如果用户传入了其他数据会对默认参数进行覆盖;
    options = assign(_default, options);
    options.type = options.type.toLowerCase();
    // 如果存在context;
    if (isObject(options.context)) {
        var callback_list = ["success", "complete", "error"];
        // 如果老版本浏览器更新成for循环;
        callback_list.forEach(function (item) {
            // console.log(options[item]);
            options[item] = options[item].bind(options.context);
        })
    }
    // 1. 创建shr ;
    var xhr = null;
    if (typeof XMLHttpRequest === "function") {
        xhr = new XMLHttpRequest();
    } else {
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }
    // 可以简化;
    // 1. 如果请求方式为get，那么我们把数据拼接到url上;
    if (options.type === "get") {
        options.url = toUrlDataSmartisan(options.data, options.url, options.type)
    }
    // 2. 如果请求方式为post，那么我们把数据拼接到data上;
    if (options.type === "post") {
        options.data = toUrlDataSmartisan(options.data, options.url, options.type)
    }
    // 2. 根据数据进行方法的调用;
    xhr.open(options.type, options.url, true);
    options.type === "post" ? xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded") : "";
    // 3. 调用send方法;
    xhr.send(options.type === "get" ? null : options.data);
    // 4. 调用回调函数;
    xhr.onreadystatechange = function () {
        // xhr程序运行结束;
        if (xhr.readyState === 4) {
            options.complete();

            if (/^2\d{2}$/.test(xhr.status)) {
                // 5.传递数据
                // 如果需要转换成json那么我们就返回json,如果不需要原样返回;
                // 如果JSON.parse报错了那么我们要调用错误函数;
                try {
                    var res = options.dataType === "json" ? JSON.parse(xhr.responseText) : xhr.responseText;
                    options.success(res);
                } catch (e) {
                    options.error(e, xhr.status);
                }
            } else {
                options.error("error", xhr.status);
            }
            // 策略模式调用 : 
            if (isObject(options.status)) {
                typeof options.status[xhr.status] === "function" ? options.status[xhr.status]() : "";
            }
        }
    }
}
function ajax(options) {
    // 默认参数;
    var _default = {
        type: "GET",
        url: "",
        data: null,
        // 返回的数据类型;
        dataType: "text",
        status: null,
        success: function () { },
        complete: function () { },
        error: function () { }
    }
    // 我们会创建一些默认参数, 如果用户传入了其他数据会对默认参数进行覆盖;
    options = assign(_default, options);
    options.type = options.type.toLowerCase();
    // 如果存在context;
    if (isObject(options.context)) {
        var callback_list = ["success", "complete", "error"];
        // 如果老版本浏览器更新成for循环;
        callback_list.forEach(function (item) {
            // console.log(options[item]);
            options[item] = options[item].bind(options.context);
        })
    }
    // 1. 创建shr ;
    var xhr = null;
    if (typeof XMLHttpRequest === "function") {
        xhr = new XMLHttpRequest();
    } else {
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }
    // 可以简化;
    // 1. 如果请求方式为get，那么我们把数据拼接到url上;
    if (options.type === "get") {
        options.url = toUrlData(options.data, options.url, options.type)
    }
    // 2. 如果请求方式为post，那么我们把数据拼接到data上;
    if (options.type === "post") {
        options.data = toUrlData(options.data, options.url, options.type)
    }
    // 2. 根据数据进行方法的调用;
    xhr.open(options.type, options.url, true);
    options.type === "post" ? xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded") : "";
    // 3. 调用send方法;
    xhr.send(options.type === "get" ? null : options.data);
    // 4. 调用回调函数;
    xhr.onreadystatechange = function () {
        // xhr程序运行结束;
        if (xhr.readyState === 4) {
            options.complete();

            if (/^2\d{2}$/.test(xhr.status)) {
                // 5.传递数据
                // 如果需要转换成json那么我们就返回json,如果不需要原样返回;
                // 如果JSON.parse报错了那么我们要调用错误函数;
                try {
                    var res = options.dataType === "json" ? JSON.parse(xhr.responseText) : xhr.responseText;
                    options.success(res);
                } catch (e) {
                    options.error(e, xhr.status);
                }
            } else {
                options.error("error", xhr.status);
            }
            // 策略模式调用 : 
            if (isObject(options.status)) {
                typeof options.status[xhr.status] === "function" ? options.status[xhr.status]() : "";
            }
        }
    }
}
function jsonp(url, callback, file_name, data) {
    var _default = {}
    _default[file_name || "callback"] = "global_fn_name";
    // 防止data为空;
    data = data || {};
    // console.log(_default);
    data = assign(_default, data);
    // 1. 全局函数; 在局部作用域之中声明全局函数;
    window["global_fn_name"] = function (res) {
        callback(res);
    }
    // 2. 创建script标签 ;
    var script_ele = document.createElement("script");
    // 3. 放入url链接;
    script_ele.src = toUrlData(data, url);
    document.body.appendChild(script_ele);
    script_ele.onload = function () {
        script_ele.remove();
    }
}

// 选择器 : 为了区分jquery所以使用 _
function _(selector) {
    var ele = document.querySelectorAll(selector);
    if (ele === null) {
        return ele;
    }
    if (ele.length === 1) {
        return ele[0];
    }
    return [].slice.call(ele);
}
// class 工具

function removeClass(ele, className) {
    var reg = new RegExp("\\s?" + className, "g");
    ele.className = ele.className.replace(reg, "");
}

function addClass(ele, className) {
    var reg = new RegExp("\\s?" + className, "g");
    if (reg.test(ele.className)) {
        return false;
    }
    ele.className += " " + className;
}

// 事件委托的高级封装;
function on(ele, type, cb_selector, cb) {
    // 做一个基本判断 : 
    // 1. 正常绑定事件;
    // 2. 实现事件委托; 多一个参数 => 选择器;
    // 严谨 : 1. 参数数量不一样 ;
    //        2. cb_selector => 正常 是函数;
    //                       => 委托 是字符串;
    if (arguments.length === 4 && typeof cb_selector === "string") {
        // 事件委托;
        // 如果你的程序只有两套逻辑，在第一个逻辑之中直接return false ; 
        // 可以省略第二个if逻辑;
        ele.addEventListener(type, function (evt) {
            // 在里面加上逻辑进行判断;
            // 根据逻辑决定是否调用 事件处理函数;
            var e = evt || event;
            var target = e.target || e.srcElement;
            // 判定 : 
            var node = target;
            // 判定究竟是什么选择器非常重要;
            // 截取选择器的开头;
            var selector_start = cb_selector.substr(0, 1);
            var selector_type = null;
            // 为了不让cb_selector 重复截取，那么在这进行一个替换;
            var selector = cb_selector;
            switch (selector_start) {
                case ".":
                    selector_type = "className";
                    // 去掉选择符;
                    selector = cb_selector.slice(1);
                    break;
                case "#":
                    selector_type = "id";
                    // 去掉选择符;
                    selector = cb_selector.slice(1);
                    break;
                default:
                    selector_type = "nodeName";
                    break;
            }
            while (node !== ele) {
                // 你为啥知道这个是类名那 ?
                // 选择器定了;
                // 如果此时判定的是标签，那么这个时候我们需要将传入的参数大写;
                // 上述代码逻辑 : (selector_type === "nodeName" ? selector.toUpperCase() : selector)
                if (!node) break;
                if (node[selector_type] === (selector_type === "nodeName" ? selector.toUpperCase() : selector)) {
                    cb.call(node, e);
                    break;
                }
                node = node.parentNode;
            }

        });
        return false;
    }
    ele.addEventListener(type, cb_selector);
}
// 函数优化功能；
// 函数节流 : 
function throttle(callback, delay) {
    delay = delay || 100;
    // 返回一个新函数,新函数用于回调函数的调用;
    var t = null;
    return function () {
        if (typeof t === "number") {
            return false;
        }
        // 需要外部函数的参数;
        // 类似于 bind 的封装;
        var _arguments = arguments;
        t = setTimeout(function () {
            t = null;
            callback.apply(false, _arguments);
        }, delay)
    }
}
// 函数去抖 : 
function shaking(callback, delay) {
    delay = delay || 100;
    // 返回一个新函数,新函数用于回调函数的调用;
    var t = null;
    return function () {
        clearTimeout(t);
        // 需要外部函数的参数;
        // 类似于 bind 的封装;
        var _arguments = arguments;
        t = setTimeout(function () {
            t = null;
            callback.apply(false, _arguments);
        }, delay)
    }
}