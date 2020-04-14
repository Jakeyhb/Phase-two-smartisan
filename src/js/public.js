// 下拉菜单和购物车
$(function () {

  let hide_timer = null;
  var flag = true;
  $("#shoplist").mousemove(function () {

    flag = false;
    $(".shop-list").css({
      opacity: 1,
    });
    $(this).css({
      cursor: "pointer"
    })

  })
  //定时器
  $("#shoplist").mouseout(function () {
    flag = true;
    clearInterval(hide_timer);
    // $(".shop-list").css({
    //   opacity: 0,
    // });
    hide_timer = setInterval(function () {
      $(".shop-list").css({
        opacity: 0,
      });
    }, 100)
  })
  $(".shop-list").mousemove(function () {
    clearTimeout(hide_timer);
  })

  $(".shop-list").mouseout(function () {
    clearInterval(hide_timer);
    hide_timer = setInterval(function () {
      $(".shop-list").css({
        opacity: 0,
      });
    }, 200)

  })
})
var str2;
var html1 = "";
var html2 = "";
let timeout;


$("#navli").mousemove(function (e) {
  var target = e.srcElement || e.target;
  // console.log(str2)
  clearTimeout(timeout);
  timeout = setTimeout(() => {
    var str2 = $(target).html();
    console.log(str2)
    $("#navli").removeClass("active");
    loadnav();
    
    $(".category-wrapper").append(html1);
    $("#sub").removeClass("sub-panel-wrapper-hide");
    $("#sub").addClass("sub-panel-wrapper-show");
    $(target).addClass("active");
  }, 200);
});



$("#navli").mouseleave(function (e) {
  var target = e.srcElement || e.target;
  clearTimeout(timeout);
  $("#sub").removeClass("sub-panel-wrapper-show");
  $("#sub").addClass("sub-panel-wrapper-hide");
  $(target).removeClass("active");
  // $(".category-wrapper").remove();
});



function loadnav() {
  var options = {
    // http://303z9z3029.qicp.vip/
    url: "http://localhost:3000/secon_nav",
    success: rendernav,
    dataType: "json",
  };
  ajax(options);
}
function rendernav(res) {
  // console.log(res)
  res.forEach(function (item, index) {
    // console.log(item)
    // console.log(str2)
    if (item.name === str2) {
      item.list.forEach(function (item, index) {
        //  console.log(item.sub)
        item.sub.forEach(function (item) {
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
                         </li>`
        })
        html1 += ` 
               <li class="item">
                 <div class="container">
                   <div class="title">${item.title}</div>
                    <ul class="category-container" style="width: 202px;">
                    ${html2}
                     </ul>
                    </div>
                 </li>
              `
      });
    }
  });
  console.log(html1)
}
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
    url: "http://localhost:3000/shot_list",

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
    url: "http://localhost:3000/productlis",

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
    url: "http://localhost:3000/dy",
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
