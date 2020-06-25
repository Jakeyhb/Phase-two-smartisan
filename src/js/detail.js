$(function () {
  let detal_timer = null;


  //事件监听

  // console.log(1)
  // location.href = "../html/detail.html";
  var spu_id = valueByName(location.search, "spu_id");
  console.log(spu_id)
  datalists(spu_id)
  function datalists(spu_id) {
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
      var conts = item1.tabs[0].tab_items
      // console.log(data) 
      var listsinfo = conts.find(item => item.spu.id === spu_id)
      console.log(listsinfo)

      // data.forEach(function (item1, index1) {
      //   // console.log(item1, index1)
      //   var title = item1.title;

      //   var cont = item1.tabs[0].tab_items.length
      //   // console.log(cont)
      //   //渲染外层结构
      //   // console.log($("#jakeby").eq(1))
      //   var img_index = "#" + index1 + " .advertise-img"


      //   item1.tabs[0].tab_items.forEach((item, index) => {
      //     //获取到数据，根据不同区域进行渲染  可以进行条件判断，对位置进行定位
      //     if (index === 0) {
      //       $(` <div class="common-normal-box" id="${index1}" >
      //     <div class="header">
      //       <h5>${title}</h5>
      //     </div>
      //     <div class="prduct-list" id="prduct-list">
      //       <div class="advertise-img" >
      //         <img
      //         data-original="${item.image}"
      //           alt=""
      //         />
      //         </div>
      //         </div>
      //         </div>
      //       `).insertBefore(".app-wrap #footer_container");
      //     } else if (flage && index < cont) {
      //       // console.log(i)
      //       // console.log(img_index)

      //       $(` <div class="list-duct" spu-id="${item.spu.id}">
      //     <a href="../html/detail.html?spu_id=${item.spu.id}">
      //             <figure class="item-cover">
      //               <img
      //               data-original="${item.spu.sku_info[0].ali_image}"
      //                 lazy="loaded"
      //               />
      //             </figure>

      //     </a>
      //             <article class="artivle">
      //             <a href="../html/detail.html?spu-id="${item.spu.id}">
      //               <h3>${item.spu.name}</h3>
      //               <h5 class="txt-product-title">
      //               ${item.spu.sku_info[0].sub_title}
      //               </h5>
      //               </a>
      //             </article>
      //             <aside class="item-attr-colors"></aside>
      //             <!-- 价格 -->
      //             <article class="item-price">
      //               <span>￥${item.spu.price}</span>
      //               <!-- <span class="orignal-price">￥${item.spu.price}</span> -->
      //             </article>
      //           </div>`)
      //         .insertAfter(img_index)
      //       // $("divdata_index="${index1}])
      //     }
      //   })

      // });

      // console.log(myarr)

      // _("#dyduct-list").innerHTML = html;
      $(".common-normal-box img").lazyload({
        placeholder: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC",
        effect: "fadeIn"
      });

    }

    list();

  }

  function valueByName(search, name) {
    var start = search.indexOf(name + "=");
    if (start == -1) {
      return null;
    } else {
      var end = search.indexOf("&", start);
      if (end == -1) {
        end = search.length;
      }
      //提取出想要键值对 name=value
      var str = search.substring(start, end);
      var arr = str.split("=");
      return arr[1];
    }


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
  }

})