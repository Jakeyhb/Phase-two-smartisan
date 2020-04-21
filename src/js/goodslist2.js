//列表页渲染
function shoplist(optionsdata) {
  //合并对象  请求地址
  function load(optionsdata) {
    var optionsurl = {
      // http://303z9z3029.qicp.vip/
      // url: "http://localhost:3000/shoplist",
      url: "http://303z9z3029.qicp.vip/shoplist",
      success: render,
    }
    var options = $.extend(optionsurl, optionsdata);
    console.log(options)
    ajax(options)
  }
  function render(res) {
    console.log(res)

    var data = res.data;
    // console.log(data)

    var html = "";

    // console.log(data)
    data.list.forEach(function (item) {
      // console.log(item)

      html += `
      <section   class="spu-item-normal-box flex-item spu-item-normal-box" gotoskuid="${item.spuInfo.skuId}" spuid="${item.spuInfo.spuld}">
        <figure  class="item-cover">
         <img  data-lazywidth="216" data-lazyheight="216" data-src="${item.spuInfo.images}" src="${item.spuInfo.images}" lazy="loaded" />
        </figure>
        <article >
         <h3 >${item.spuInfo.spuTitle}</h3>
         <h5  class="txt-product-title">${item.spuInfo.activeTitle}</h5>
        </article>
        <article  class="item-price">
         <span >￥${item.spuInfo.discountPrice === 0 ? item.spuInfo.price : item.spuInfo.discountPrice}</span>
         <span  class="orignal-price">￥${item.spuInfo.price}</span>
        </article>
        <div  class="activity-tag">
         <span data-v-03828e8f=""  class="yellow">  </span>
        </div>
        <div  class="markup-tag"></div>
       </section>`
      // console.log(item.spuInfo)
      // var arry = [];
      // arry.push(item.spuInfo)

    })

    _("#parts").innerHTML = html;
    $("#parts img").lazyload({
      placeholder: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC",
      effect: "fadeIn"
    });
  }
  load(optionsdata)
}

function clothingtabs() {
  var options = {
    dataType: "json",
    data: {
      category_id: "157",
      page: 1,
      sort: "sort",
      num: 50,
      type: "shop",
      channel_id: 1001
    }


  }
  shoplist(options)
}

function breathe() {

  var options = {
    // http://303z9z3029.qicp.vip/
    dataType: "json",
    data: {
      category_id: "155",
      page: 1,
      sort: "sort",
      num: 30,
      type: "shop",
      channel_id: 1001
    }

  }

  shoplist(options)
}


function smartisanphone() {

  var options = {
    // http://303z9z3029.qicp.vip/



    dataType: "json",
    data: {
      category_id: "151",
      page: 1,
      sort: "sort",
      num: 30,
      type: "shop",
      channel_id: 1001
    }



  }
  shoplist(options)
}

function parts() {
  var options = {
    // http://303z9z3029.qicp.vip/
    // url: "http://303z9z3029.qicp.vip/shoplist",

    dataType: "json",
    // category_id=185&page=1&sort=sort&num=20&type=shop&channel_id=1001
    data: {
      category_id: "185",
      page: 1,
      sort: "sort",
      num: 30,
      type: "shop",
      channel_id: 1001
    }

  }
  shoplist(options)
}
function dycuilural() {



  var options = {

    dataType: "json",
    // category_id=185&page=1&sort=sort&num=20&type=shop&channel_id=1001
    data: {
      category_id: "321",
      page: 1,
      sort: "sort",
      num: 30,
      type: "shop",
      channel_id: 1001
    }
  }
  shoplist(options)
}


function goodselect() {
  var options = {
    // http://303z9z3029.qicp.vip/
    // url: "http://303z9z3029.qicp.vip/shoplist",

    dataType: "json",
    // category_id=185&page=1&sort=sort&num=20&type=shop&channel_id=1001
    data: {
      category_id: "311",
      page: 1,
      sort: "sort",
      num: 50,
      type: "shop",
      channel_id: 1001
    }

  }
  shoplist(options)
}

function tntdisplay() {
  var options = {

    dataType: "json",
    // category_id=185&page=1&sort=sort&num=20&type=shop&channel_id=1001
    data: {
      category_id: "218",
      page: 1,
      sort: "sort",
      num: 50,
      type: "shop",
      channel_id: 1001
    }



  }
  shoplist(options)
}
// function tntdisplay() {
//   var options = {

//     dataType: "json",
//     // category_id=185&page=1&sort=sort&num=20&type=shop&channel_id=1001
//     data: {
//       category_id: "218",
//       page: 1,
//       sort: "sort",
//       num: 50,
//       type: "shop",
//       channel_id: 1001
//     }



//   }
//   shoplist(options)
// }
function sweepingmachine() {

  var options = {

    dataType: "json",
    // category_id=185&page=1&sort=sort&num=20&type=shop&channel_id=1001
    data: {
      category_id: "313",
      page: 1,
      sort: "sort",
      num: 50,
      type: "shop",
      channel_id: 1001
    }

  }
  shoplist(options)
}



var url = window.location.pathname;

var urljude = url.split("/")
console.log(url, urljude)


// switch (urljude[2]) {
switch (urljude[5]) {
  case "clothingBags.html": clothingtabs();
    break;
  case "breathe.html": breathe();
    break;
  case "phonesmartisan.html": smartisanphone();
    break;

  case "parts.html": parts();
    break;
  case "dyCulturalandCreative.html": dycuilural();
    break;
  case "sweepingmachine.html": sweepingmachine();
    break;
  case "TNTdisplay.html": tntdisplay();
    break;
  case "goodselect.html": goodselect();
    break;

}


