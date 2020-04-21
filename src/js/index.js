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
    var i = 0;
    var myarr = new Array();
    var data = res.data.home_floors;
    var flage = true
    // console.log(data)
    var html = "";
    var j = 0
    // console.log(data) 
    data.forEach(function (item1, index1) {
      // console.log(item1, index1)
      var title = item1.title;

      var cont = item1.tabs[0].tab_items.length
      // console.log(cont)
      //渲染外层结构

      item1.tabs[0].tab_items.forEach((item, index) => {

        // console.log(index)
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
        } else if (flage && index < cont && index1 === i) {
          console.log(i)
          $(` <div class="list-duct">
                  <figure class="item-cover">
                    <img
                    data-original="${item.spu.sku_info[0].ali_image}"
                      lazy="loaded"
                    />
                  </figure>
                  <article class="artivle">
                    <h3>${item.spu.name}</h3>
                    <h5 class="txt-product-title">
                    ${item.spu.sku_info[0].sub_title}
                    </h5>
                  </article>
                  <aside class="item-attr-colors"></aside>
                  <!-- 价格 -->
                  <article class="item-price">
                    <span>￥${item.spu.price}</span>
                    <!-- <span class="orignal-price">￥${item.spu.price}</span> -->
                  </article>
                </div>`)
            .insertAfter("#jakeby .advertise-img")


        }
        // else {
        //   // flage = false

        //   return false
        // }
      })

      i += 1;
      if (i === 9) {
        return false

      }

      // for (var i = 0; i < item.length; i++) {
      //   var item = item1.tabs[0].tab_items[i];
      //   console.log(i)

      //   if (i === 0) {
      //     $(` <div class="common-normal-box" id="jakeby">
      //         <div class="header">
      //           <h5>${title}</h5>
      //         </div>
      //         <div class="prduct-list" id="prduct-list">
      //           <div class="advertise-img">
      //             <img
      //             data-original="${item[0].image}"
      //               alt=""
      //             />
      //             </div>
      //             </div>
      //             </div>
      //           `).insertBefore(".app-wrap #footer_container");
      //   } else if (flage && index1 === j && i < cont) {
      //     console.log(item[i].spu.sku_info[0].ali_image)
      //     $(` <div class="list-duct">
      //                 <figure class="item-cover">
      //                   <img
      //                   data-original="${item[i].spu.sku_info[0].ali_image}"
      //                     lazy="loaded"
      //                   />
      //                 </figure>
      //                 <article class="artivle">
      //                   <h3>${item[i].spu.name}</h3>
      //                   <h5 class="txt-product-title">
      //                   ${item[i].spu.sku_info[0].sub_title}
      //                   </h5>
      //                 </article>
      //                 <aside class="item-attr-colors"></aside>
      //                 <!-- 价格 -->
      //                 <article class="item-price">
      //                   <span>￥${item[i].spu.price}</span>
      //                   <!-- <span class="orignal-price">￥${item[i].spu.price}</span> -->
      //                 </article>
      //               </div>`)
      //       .insertAfter("#jakeby .advertise-img")

      //   } else {
      //     j + 1
      //     flage = false
      //     continue
      //   }
      // else {
      //  
      //   i + 1;
      //   return false
      // }

      // }

      flage = true
      // break

      // console.log(item.tabs)
      //  item.tabs.forEach((item)=>{
      //  console.log(item.tabs[0].tab_items.length)
      // //  for(){

      // //  }

      //  })
      // console.log(index2)

    });

    // console.log(myarr)

    // _("#dyduct-list").innerHTML = html;
    $(".common-normal-box img").lazyload({
      placeholder: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC",
      effect: "fadeIn"
    });

  }

  list();

}


datalist()