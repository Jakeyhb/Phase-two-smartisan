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
    url: "http://localhost:3000/shot_list",
    data: {
      "host_goods": ""

    },
    success: render,
    dataType: "json",

  }

  ajax(options)
}
function render(res) {
  var data = res.data;
  console.log(data)
  var html = "";
  // console.log(data)
  data.forEach(function (item) {
    // console.log(item)
    html += `
     <div class="hot-list-duct">
    <figure class="item-cover">
      <img
        src="${item.image_url}"
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
          src="https://resource.smartisan.com/resource/a95138cf41c70fbb689e0bcd785a362f.png?x-oss-process=image/resize,w_30/format,webp"
        />
      </figure>
      <figure class="outer active">
        <img
          src="https://resource.smartisan.com/resource/b86e1a8858c1445d3fd77a0dcba2eb5c.png?x-oss-process=image/resize,w_30/format,webp"
        />
      </figure>
      <figure class="outer">
        <img
          data-v-380b3c68=""
          src="https://resource.smartisan.com/resource/d0c2d694d76184aa8deabab5e8e951af.png?x-oss-process=image/resize,w_30/format,webp"
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
}
load();




function productlist() {
  var options = {
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
      src="${item.advimg_url}"
      alt=""
    />
  </div>`
  });
  list.forEach(function (item) {
    console.log(item)
    html += `
  <div class="list-duct">
    <figure class="item-cover">
      <img
        src="${item.image_url}"
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
          src="https://resource.smartisan.com/resource/a95138cf41c70fbb689e0bcd785a362f.png?x-oss-process=image/resize,w_30/format,webp"
        />
      </figure>
      <figure class="outer active">
        <img
          src="https://resource.smartisan.com/resource/b86e1a8858c1445d3fd77a0dcba2eb5c.png?x-oss-process=image/resize,w_30/format,webp"
        />
      </figure>
      <figure class="outer">
        <img
          data-v-380b3c68=""
          src="https://resource.smartisan.com/resource/d0c2d694d76184aa8deabab5e8e951af.png?x-oss-process=image/resize,w_30/format,webp"
        />
      </figure>
    </aside>

    <article class="item-price">
      <span>￥${item.nowsales.toFixed(2)}</span>
      <span class="orignal-price">￥${item.befsales.toFixed(2)}</span>
    </article>
  </div>`
  })
  console.log(html)
  _("#prduct-list").innerHTML = html;
}
productlist();



