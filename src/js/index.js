// 加载其他首页数据
// 配置代理
function datalist() {

  function list() {
    var options = {
      // http://303z9z3029.qicp.vip/
      url: "http://303z9z3029.qicp.vip/datalist",
      success: reload,
      dataType: "json",
    }
    ajax(options)
  }
  function reload(res) {

    var data = res.data.home_floors;
    // console.log(data)

    var html = "";
    // console.log(data)
    data.forEach(function (item, index) {
      // console.log(item,index)
      var title = item.title;
      // console.log(title)
      // console.log(item.tabs[0].tab_items)
      var cont = item.tabs[0].tab_items.length
      // console.log(cont)
      //渲染外层结构
      var itemdat = item
      item.tabs[0].tab_items.forEach((item, index) => {
        console.log(index)

        if (index === 0) {
          $(` <div class="common-normal-box" id="jakeby">
          <div class="header">
            <h5>${title}</h5>
          </div>
          <div class="prduct-list" id="prduct-list">
            <div class="advertise-img">
              <img
              data-original="${item.image}"
                alt=""
              />
              </div>
              </div>
  
              </div>
            `).insertBefore(".app-wrap #footer_container");

        } else {
          $(` <div class="list-duct">
          <figure class="item-cover">
            <img
            data-original="https://resource.smartisan.com/resource/a4c73e549097c7f5cf2c5e0d87e56d13.png?x-oss-process=image/resize,w_324/format,webp"
              lazy="loaded"
            />
          </figure>
          <article class="artivle">
            <h3>坚果 Pro 3</h3>
            <h5 class="txt-product-title">
              高通骁龙™ 855Plus · 4800 万模范四摄 · Smartisan OS 7.0
            </h5>
          </article>
          <aside class="item-attr-colors"></aside>
          <!-- 价格 -->
          <article class="item-price">
            <span>￥2,899.00</span>
            <!-- <span class="orignal-price">￥3,199.00</span> -->
          </article>
        </div>`)
          // .insertAfter("#jakeby .advertise-img")
        }

      })

      // console.log(item.tabs)
      //  item.tabs.forEach((item)=>{
      //  console.log(item.tabs[0].tab_items.length)
      // //  for(){

      // //  }

      //  })




    });


    // _("#dyduct-list").innerHTML = html;
    $(".common-normal-box img").lazyload({
      placeholder: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC",
      effect: "fadeIn"
    });
  }
  list();
}


datalist()