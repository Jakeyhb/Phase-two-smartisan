
function parts() {

  console.log(2)
  function load() {

    var options = {
      // http://303z9z3029.qicp.vip/
      url: "http://303z9z3029.qicp.vip/parts",

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
  function render(res) {
    console.log(res)

    var data = res.data;
    // console.log(data)

    var html = "";

    // console.log(data)
    data.list.forEach(function (item) {
      // console.log(item)

      html += `
        <section   class="spu-item-normal-box flex-item spu-item-normal-box" gotoskuid="" spuid="1000602">
        <figure  class="item-cover">
         <img  data-lazywidth="216" data-lazyheight="216" data-src="${item.spuInfo.images}" src="${item.spuInfo.images}" lazy="loaded" />
        </figure>
        <article >
         <h3 >${item.spuInfo.spuTitle}</h3>
         <h5  class="txt-product-title">${item.spuInfo.activeTitle}</h5>
        </article>
        <article  class="item-price">
         <span >￥${item.spuInfo.discountPrice}</span>
         <span  class="orignal-price">￥${item.spuInfo.price}</span>
        </article>
        <div  class="activity-tag">
         <span data-v-03828e8f=""  class="yellow"> 大促 </span>
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
  load()

}
parts()


