// 下拉菜单和购物车
$(function () {
  let hide_timer = null;

  $("#shoplist").mousemove(function () {
    clearTimeout(hide_timer);
    hide_timer = setTimeout(() => {
      $(".shop-list").addClass("show-list")
      $(this).css({
        cursor: "pointer"
      })
    }, 200)

  })
  //定时器
  $("#shoplist").mouseleave(function () {
    // flag = true;
    clearTimeout(hide_timer);
    hide_timer = setTimeout(() => {
      $(".shop-list").removeClass("show-list")
    }, 200)
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

// $(".title-wrappercont>.title-content li").each((i) => {
// $(document).ready(function () {

//   $(this).parents("li").find("ul").slideToggle();
// });

// $('.title-wrappercont>.title-content li a').on('mousemove', function (e) {
//   // console.log('target');  //被点击了
//   // $('body').css('backgroundColor','#ff0');
//   var target = e.srcElement || e.target;
//   str2 = $(this).html()
//   loadnav()


// })
// var mouose = true;

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
    if (!htmlitem) {
      loadnav()

    }


    $("#sub").removeClass("sub-panel-wrapper-hide");
    $("#sub").addClass("sub-panel-wrapper-show");
    // console.log(str2)
    // $(".category-wrapper .item").remove();
    $("#navli").removeClass("active");
    // 对元素进行添加和移除class
    $(target).addClass("active");
    console.log(htmlitem)
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
    // console.log(html)
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

      // return false
    }

  });

  // console.log(html)
}
// loadnav();
//banner
var swiper = new Swiper('.swiper-container', {
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
     <div class="hot-list-duct">
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

  _("#hot-list").innerHTML = html;
  $("#hot-list img").lazyload({
    placeholder: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC",
    effect: "fadeIn"
  });
}
load();
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


// $(" img").lazyload({
//   placeholder: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC",
//   effect: "fadeIn"
// });


// 下拉列表
