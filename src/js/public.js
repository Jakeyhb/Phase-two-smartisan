// 下拉菜单和购物车
$(function () {
  let hide_timer = null;

  $("#shoplist").mousemove(function () {
    if (localStorage.getItem("flage")) {
      clearTimeout(hide_timer);
      hide_timer = setTimeout(() => {
        $(".shop-list").addClass("show-list")
        $(this).css({
          cursor: "pointer"
        })
      }, 200)
      return false
    }

  })
  //定时器
  $("#shoplist").mouseleave(function () {
    // flag = true;
    clearTimeout(hide_timer);
    hide_timer = setTimeout(() => {
      $(".shop-list").removeClass("show-list")
    }, 200)
  })

  $("#shoplist").on('click', () => {
    if (localStorage.getItem("flage")) {
      location.href = "../html/shopcar.html";
      // window.location.reload()
    } else {
      alert("您还未登录")
      // console.log(1)
    }
  })
  $(".shop-list").mousemove(function () {
    clearTimeout(hide_timer);
  })

  $(".shop-list").mouseout(function () {
    clearInterval(hide_timer);
    hide_timer = setInterval(() => {
      $(".shop-list").removeClass("show-list")
    }, 200)

  })
})

// console.log(localStorage.getItem("flage") !== null)
// 首页个人信息
//没有登录信息的话就不能显示  提示未登录
function chenck() {
  if (localStorage.getItem("flage") !== null) {
    var timsasider = null
    $(".aside-icon-user").mouseover((e) => {
      var target = e.srcElement || e.target;
      clearTimeout(timsasider)
      timsasider = setTimeout(() => {
        // console.log(1)
        $(".user-drawer-wrapper").attr("id", "jakebyshow");
      }, 500);
    })
    $(".aside-icon-user").mouseout((e) => {
      var target = e.srcElement || e.target;
      clearTimeout(timsasider)
      timsasider = setTimeout(() => {
        console.log(1)
        $(".user-drawer-wrapper").attr("id", "aside");
      }, 500);
    })

    $(".jakebyaside").mouseover(() => {
      // console.log($(".user-content").html())
      // var target = e.srcElement || e.target;
      clearTimeout(timsasider)
      $(".user-drawer-wrapper").attr("id", "jakebyshow");
    })
    $(".jakebyaside").mouseout((e) => {
      var target = e.srcElement || e.target;
      clearTimeout(timsasider)
      $(".user-drawer-wrapper").attr("id", "aside");
    })

  } else {
    $(".aside-icon-user").mouseover((e) => {

      var target = e.srcElement || e.target;
      //未登录提示
    })
  }
  if (localStorage.getItem("flage") === null) {
    var timsasider = null
    $(".aside-icon-user").on('click', (e) => {
      var target = e.srcElement || e.target;
      // console.log(1)
      location.href = "../html/login.html";
    })


  } else {

  }
  // 退出登录

  $(".link-item.out").on('click', () => {
    localStorage.removeItem("flage");
    alert("退出登录")
    window.location.reload()
  })

}


var str1 = ""
var str2 = "";
var htmlitem = "";
var html1 = "";
var html2 = "";
let timeout;
let timeout2;
// 鼠标移入事件
// 进行防抖处理
// 数据的渲染
$(".title-wrappercont>.title-content>li>a").mouseover(function (e) {
  htmlitem = ""
  var target = e.srcElement || e.target;
  clearTimeout(timeout);
  // clearTimeout(timeout);
  //先让页面变干净更好的渲染
  timeout = setTimeout(() => {
    // console.log(str2)
    str2 = $(this).html()
    $(".category-wrapper").children().remove();
    navse()

    $("#sub").removeClass("sub-panel-wrapper-hide");
    $("#sub").addClass("sub-panel-wrapper-show");
    // console.log(str2)
    // $(".category-wrapper .item").remove();
    $("#navli").removeClass("active");
    // 对元素进行添加和移除class
    $(target).addClass("active");
    // console.log(htmlitem)
  }, 200);
});
$(".title-wrappercont>.title-content li a").mouseout(function (e) {
  var target = e.srcElement || e.target;
  clearTimeout(timeout);
  clearTimeout(timeout2);
  timeout2 = setTimeout(() => {
    $(".category-wrapper").children().remove();
    $("#sub").removeClass("sub-panel-wrapper-show");
    $("#sub").addClass("sub-panel-wrapper-hide");
  }, 200)
  $(target).removeClass("active");
  // $(".category-wrapper").remove();
});
//下拉列表中的事件
$(".nav-sub-container").mouseover(function () {
  clearTimeout(timeout2);
})
$(".nav-sub-container").mouseleave(function (e) {
  var target = e.srcElement || e.target;
  clearTimeout(timeout2);
  clearTimeout(timeout);
  $("#sub").removeClass("sub-panel-wrapper-show");
  $("#sub").addClass("sub-panel-wrapper-hide");
  $(target).removeClass("active");
  // console.log(html)
})
function Table() { }
// 初始化功能;
Table.prototype.init = function (options) {
  // 选择元素调用;
  // 调用bindEvent功能;
  this.btns = this.$(options.btn);
  this.contents = this.$(options.content);
  this.bindEvent(options.eventType, options.animate);
  console.log(this.$(options.content), this.btns)
}
// 元素选择功能;
Table.prototype.$ = function (selector) {
  return document.querySelectorAll(selector);
}
// 事件添加功能;
Table.prototype.bindEvent = function (eventType, animate) {
  // 获取下标;
  // 使用类名清除器;
  // 使用类名添加器;
  eventType = eventType || "mouseover";

  for (var i = 0; i < this.btns.length; i++) {
    this.btns[i].addEventListener(eventType, function (index) {
      // 在面向对象编程中，所有的函数内部this指向都应该指向实例对象;
      // 如果不统一变成统一的;
      // console.log(this);
      this.clearClass();
      this.addClass(index);
      // 是否存在animate ;
      switch (animate) {
        case "fade":
          this.fadeAnimate(index);
          break;
        case "slide":
          this.slideAnimate(index);
          break;
      }
    }.bind(this, i))
  }
}
Table.prototype.clearClass = function () {
  // console.log(this.btns);
  for (var i = 0; i < this.btns.length; i++) {
    this.btns[i].className = this.btns[i].className.replace(/\s?active/g, "");
    // this.contents.img.className = this.contents[i].className.replace(/\s?active/g, "");
    // console.log(1)
  }
}
// 类名添加器;
Table.prototype.addClass = function (index) {
  // console.log(this , index);
  this.btns[index].className += " active"
  // this.contents[index].className += " active"
  //修改 src
  // $(this.contents).src = $("this.btns[index] > img").data - original
  // this.contents.html();
  // console.log(this.contents[index])
  var imgsrc = $(target).attr('srcimg');
  $("#hot-list .item-price span").html($(target).attr('nowprice'));
  $("#hot-list .item-price .orignal-price").html($(target).attr('orignal-price'));
  $("#hot-list .item-cover img").attr("src", imgsrc);

  $(target).removeClass("active");
}
// 动画功能;
Table.prototype.fadeAnimate = function (index) {
  // 先把动画部分清零;
  this.contents[index].style.opacity = 0;
  animate(this.contents[index], { opacity: 1 });
}
Table.prototype.slideAnimate = function (index) {
  // 先把动画部分清零;
  this.contents[index].style.height = 0;
  animate(this.contents[index], { height: 257 });
}
// var table = new Table();
// table.init({
//   btn: "#hotlist .outer",
//   content: ".hot-list-duct  img",
//   animate: "slide"
// });
// tab切换
// var id = $(this).parent("td").siblings("td").find("input:first-child").val();
//          var username = $(this).parent("td").siblings("td:nth-last-of-type(2)").find("input").val();
// 更改类名，分类名多次独立调用;
// 事件的触发;
var timetable = null
$(document).on('click', "#hotlist .outer", function (e) {
  // $("#hotlist .outer").mousemove((e) => {
  var target = e.srcElement || e.target;
  // console.log(1)
  $(target).addClass("active");
  var id = $(target).parent()
  console.log(id)
  // console.log(target)
  clearTimeout(timetable);
  timetable = setTimeout(() => {
    // console.log($(".outer img").attr('src'))
    var imgsrc = $(target).attr('srcimg');
    $("#hot-list .item-price span").html($(target).attr('nowprice'));
    $("#hot-list .item-price .orignal-price").html($(target).attr('orignal-price'));
    // $(id + ".item-cover img").attr("src", imgsrc);

    $(target).removeClass("active");
  }, 400)
})

// 购物车跳转
// 二级菜单列表渲染
function navse() {
  function loadnav() {
    var options = {
      // http://303z9z3029.qicp.vip/
      url: "http://303z9z3029.qicp.vip/secon_nav",
      success: rendernav,
      dataType: "json",
    };
    ajax(options);
  }
  function rendernav(res) {
    // htmlitem = ""
    // console.log(res)
    res.forEach(function (item) {
      // console.log(item)
      // console.log(str2)
      // console.log(item.list.length);
      if (item.name === str2 && item.list.length === 1) {
        // console.log(item);
        item.list.forEach(function (item) {
          item.sub.forEach(function (item) {

            // console.log(item)
            html2 += `<li class="category-item">
                         <a
                            data-url="https://www.smartisan.com/category/297?type=shop"
                            class="link"
                          >
                         <img
                           src="${item.image}"
                           class="picture"
                         />
                         <span class="sub-title">${item.name}</span></a>
                       </li>
                    `;
          });
          // console.log(item.length);
          html1 += `
           
             <li class="item">
               <div class="container">
                 <div class="title">${item.title}</div>
                  <ul class="category-container" style="width: 202px;">
                  ${html2}
                   </ul>
                  </div>
               </li>
            `;
          htmlitem += `${html1}`;
          html1 = "";
          html2 = "";
        });
        $(".category-wrapper").html(htmlitem);
        // return false
      }
      if (item.name === str2 && item.list.length > 1) {
        let lisize = item.list.length;
        item.list.forEach(function (item) {
          item.sub.forEach(function (item) {
            html2 += `
            <li  class="category-item">
              <a
                data-url=""
                class="link"
                ><img src="${item.image}"
                  class="picture"
                /><span  class="sub-title"
                  >${item.name}</span
                ></a>
            </li> `;
          });
          // console.log(item);
          html1 += `
          <li class="item">
            <div class="container">
              <div class="title">
                ${item.title}
              </div>
              <ul class="category-container" style="width: 202px;">
              ${html2}
              </ul>
            </div>
          </li>`;
          htmlitem += html1;
          html1 = "";
          html2 = "";
        });
        $(".category-wrapper").html(htmlitem);
      }
    });
  }
  loadnav()
}


// 首页购物车登录之后展示的页面
// 先布局一下，当登录之后就会展示购物车页面  将购物车数据先初始化一下到localstrong中
// shopcardataimg: [

// ],
//   title
// price
// count
// data: {

// }

//banner
var swiper = new Swiper('.swiper-container', {
  loop: true,
  spaceBetween: 30,
  effect: 'fade',
  fadeEffect: {
    crossFade: true,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  autoplay: {
    delay: 4000,
    stopOnLastSlide: false,
    disableOnInteraction: true,
  },
});



// 渲染界面

// 热销产品列表渲染
function hotlist() {
  function load() {
    var options = {
      // http://303z9z3029.qicp.vip/
      url: "http://303z9z3029.qicp.vip/shot_list",

      success: render,
      dataType: "json",

    }
    ajax(options)
  }
  function render(res) {
    // console.log(res)

    var data = res.data;
    // console.log(data)

    var html = "";

    // console.log(data)
    data.forEach(function (item) {
      // console.log(item)
      html += `
       <div class="hot-list-duct" >
      <figure class="item-cover">
        <img
        data-original="${item.image_url}"
          lazy="loaded"
        />
      </figure>
      <article class="artivle">
        <h3>${item.goods_name}</h3>
        <h5 class="txt-product-title">
         ${item.short_name}
        </h5>
      </article>
      <aside class="item-attr-colors" id="hotlist">
      <figure class="outer">
      <img
        data-v-380b3c68=""
        data-original="https://resource.smartisan.com/resource/a95138cf41c70fbb689e0bcd785a362f.png?x-oss-process=image/resize,w_30/format,webp"
        srcimg="https://resource.smartisan.com/resource/f195e666e089d4e3775ce67d8e9523ce.png" nowprice="￥2,699.00" orignal-price ="￥2,999.00"
      />
      
    </figure>
    <figure class="outer">
      <img
      data-original="https://resource.smartisan.com/resource/b86e1a8858c1445d3fd77a0dcba2eb5c.png?x-oss-process=image/resize,w_30/format,webp"
      srcimg="https://resource.smartisan.com/resource/9934374dda26c292555dd1ec0887e17b.png" nowprice="￥2,899.00" orignal-price ="￥3,199.00"
      />
  
    </figure>
    <figure class="outer">
      <img
        data-v-380b3c68=""
        src="https://resource.smartisan.com/resource/d0c2d694d76184aa8deabab5e8e951af.png?x-oss-process=image/resize,w_30/format,webp"
        srcimg="https://resource.smartisan.com/resource/a4c73e549097c7f5cf2c5e0d87e56d13.png" nowprice="￥31,99.00" orignal-price ="￥3,499.00"
      />
     
    </figure>
      </aside>
      
      <article class="item-price">
        <span>￥${item.nowsales.toFixed(2)}</span>
        <span class="orignal-price">￥${item.befsales.toFixed(2)}</span>
      </article>
    </div>`
    })

    _("#hot-list").innerHTML = html;
    $("#hot-list img").lazyload({
      placeholder: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC",
      effect: "fadeIn"
    });
  }
  load();
}
// 列表1
function productlist() {
  function productlist() {
    var options = {
      // http://303z9z3029.qicp.vip/
      url: "http://303z9z3029.qicp.vip/productlis",

      success: renderproductlist,
      dataType: "json",
    }
    ajax(options)
  }
  function renderproductlist(res) {
    var data = res.data.advimg;
    var list = res.list.data;
    // console.log(data, list)
    var html = "";
    // console.log(data)
    data.forEach(function (item) {
      // console.log(item)
      // console.log(data.adv_url)
      html += `
      <div class="advertise-img">
      <img
      data-original="${item.advimg_url}"
        alt=""
      />
    </div>`
    });
    list.forEach(function (item) {
      // console.log(item)
      html += `
    <div class="list-duct">
      <figure class="item-cover">
        <img
        data-original="${item.image_url}"
          lazy="loaded"
        />
      </figure>
      <article class="artivle">
        <h3>${item.goods_name}</h3>
        <h5 class="txt-product-title">
         ${item.short_name}
        </h5>
      </article>
      <aside class="item-attr-colors">
        <figure class="outer">
          <img
            data-v-380b3c68=""
            data-original="https://resource.smartisan.com/resource/a95138cf41c70fbb689e0bcd785a362f.png?x-oss-process=image/resize,w_30/format,webp"
          />
        </figure>
        <figure class="outer active">
          <img
          data-original="https://resource.smartisan.com/resource/b86e1a8858c1445d3fd77a0dcba2eb5c.png?x-oss-process=image/resize,w_30/format,webp"
          />
        </figure>
        <figure class="outer">
          <img
            data-v-380b3c68=""
            data-original="https://resource.smartisan.com/resource/d0c2d694d76184aa8deabab5e8e951af.png?x-oss-process=image/resize,w_30/format,webp"
          />
        </figure>
      </aside>
      <article class="item-price">
        <span>￥${item.nowsales.toFixed(2)}</span>
        <span class="orignal-price">￥${item.befsales.toFixed(2)}</span>
      </article>
    </div>`
    })

    // console.log(html)
    _("#prduct-list").innerHTML = html;
    $("#prduct-list img").lazyload({
      placeholder: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC",
      effect: "fadeIn"
    });
  }
  productlist();
}
// 列表  抖音文创
function dy() {
  function dylist() {
    var options = {
      // http://303z9z3029.qicp.vip/
      url: "http://303z9z3029.qicp.vip/dy",
      success: dyproductlist,
      dataType: "json",
    }
    ajax(options)
  }
  function dyproductlist(res) {
    // console.log(res)
    var data = res.data.advimg;
    var list = res.list.data;
    // console.log(data, list)
    var html = "";
    // console.log(data)
    data.forEach(function (item) {
      // console.log(item)
      // console.log(data.adv_url)
      html += `
      <div class="advertise-img">
      <img
      data-original="${item.advimg_url}"
        alt=""
      />
    </div>`
    });
    list.forEach(function (item) {
      // console.log(item)
      html += `
    <div class="list-duct">
      <figure class="item-cover">
        <img
        data-original="${item.image_url}"
          lazy="loaded"
        />
      </figure>
      <article class="artivle">
        <h3>${item.goods_name}</h3>
        <h5 class="txt-product-title">
         ${item.short_name}
        </h5>
      </article>
      <aside class="item-attr-colors"> 
      </aside>
      <article class="item-price">
        <span>￥${item.nowsales.toFixed(2)}</span>
        
      </article>
    </div>`
    })
    // console.log(html)

    _("#dyduct-list").innerHTML = html;
    $("#dyduct-list img").lazyload({
      placeholder: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC",
      effect: "fadeIn"
    });

  }
  dylist();
}





// $(" img").lazyload({
//   placeholder: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC",
//   effect: "fadeIn"
// });



// parts数据


// console.log(2)
// parts页面的数据
function parts() {
  function loadparts() {

    var options = {
      // http://303z9z3029.qicp.vip/
      url: "http://localhost:3000/parts",

      success: render,
      dataType: "json",
      // category_id=185&page=1&sort=sort&num=20&type=shop&channel_id=1001
      data: {
        category_id: "185",
        page: 1,
        sort: "sort",
        num: 20,
        type: "shop",
        channel_id: 1001
      }

    }
    ajax(options)
  }
  function renderparts(res) {
    // console.log(res)

    var data = res.data;
    console.log(data)

    var html = "";

    // console.log(data)
    data.forEach(function (item) {
      console.log(item.list)
      html += `
        <section   class="spu-item-normal-box flex-item spu-item-normal-box" gotoskuid="" spuid="1000602">
        <figure  class="item-cover">
         <img  data-lazywidth="216" data-lazyheight="216" data-src="https://resource.smartisan.com/resource/a4c73e549097c7f5cf2c5e0d87e56d13.png?x-oss-process=image/resize,w_324/format,webp" src="https://resource.smartisan.com/resource/a4c73e549097c7f5cf2c5e0d87e56d13.png?x-oss-process=image/resize,w_324/format,webp" lazy="loaded" />
        </figure>
        <article >
         <h3 >坚果 Pro 3</h3>
         <h5  class="txt-product-title">高通骁龙™ 855Plus &middot; 4800 万模范四摄 &middot; Smartisan OS 7.0</h5>
        </article>
        <aside  class="item-attr-colors">
         <figure  class="outer">
          <img  src="https://resource.smartisan.com/resource/a95138cf41c70fbb689e0bcd785a362f.png?x-oss-process=image/resize,w_30/format,webp" />
         </figure>
         <figure  class="outer">
          <img  src="https://resource.smartisan.com/resource/b86e1a8858c1445d3fd77a0dcba2eb5c.png?x-oss-process=image/resize,w_30/format,webp" />
         </figure>
         <figure  class="outer active">
          <img  src="https://resource.smartisan.com/resource/d0c2d694d76184aa8deabab5e8e951af.png?x-oss-process=image/resize,w_30/format,webp" />
         </figure>
        </aside>
        <article  class="item-price">
         <span >￥2,899.00</span>
         <span  class="orignal-price">￥3,199.00</span>
        </article>
        <div  class="activity-tag">
         <span data-v-03828e8f=""  class="yellow"> 直降 </span>
        </div>
        <div  class="markup-tag"></div>
       </section>`
    })

    _("#parts").innerHTML = html;
    $("#parts img").lazyload({
      placeholder: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC",
      effect: "fadeIn"
    });
  }


  loadparts()
}


// 函数的统一执行

chenck()

dy();
productlist()
hotlist();

