"use strict";$(function(){var a=null;$("#shoplist").mousemove(function(){$(".shop-list").css({opacity:1}),$(this).css({cursor:"pointer"})}),$("#shoplist").mouseout(function(){clearInterval(a),a=setInterval(function(){$(".shop-list").css({opacity:0})},100)}),$(".shop-list").mousemove(function(){clearTimeout(a)}),$(".shop-list").mouseout(function(){clearInterval(a),a=setInterval(function(){$(".shop-list").css({opacity:0})},200)})});var swiper=new Swiper(".swiper-container",{spaceBetween:30,effect:"fade",fadeEffect:{crossFade:!0},pagination:{el:".swiper-pagination",clickable:!0},autoplay:{delay:4e3,stopOnLastSlide:!1,disableOnInteraction:!0}});function load(){ajax({url:"http://303z9z3029.qicp.vip/shot_list",success:render,dataType:"json"})}function render(a){var n=a.data,e="";n.forEach(function(a){e+='\n     <div class="hot-list-duct">\n    <figure class="item-cover">\n      <img\n      data-original="'.concat(a.image_url,'"\n        lazy="loaded"\n      />\n    </figure>\n    <article class="artivle">\n      <h3>').concat(a.goods_name,'</h3>\n      <h5 class="txt-product-title">\n       ').concat(a.short_name,'\n      </h5>\n    </article>\n    <aside class="item-attr-colors">\n      <figure class="outer">\n        <img\n          data-v-380b3c68=""\n          data-original="https://resource.smartisan.com/resource/a95138cf41c70fbb689e0bcd785a362f.png?x-oss-process=image/resize,w_30/format,webp"\n        />\n      </figure>\n      <figure class="outer active">\n        <img\n        data-original="https://resource.smartisan.com/resource/b86e1a8858c1445d3fd77a0dcba2eb5c.png?x-oss-process=image/resize,w_30/format,webp"\n        />\n      </figure>\n      <figure class="outer">\n        <img\n          data-v-380b3c68=""\n          data-original="https://resource.smartisan.com/resource/d0c2d694d76184aa8deabab5e8e951af.png?x-oss-process=image/resize,w_30/format,webp"\n        />\n      </figure>\n    </aside>\n    \n    <article class="item-price">\n      <span>￥').concat(a.nowsales.toFixed(2),'</span>\n      <span class="orignal-price">￥').concat(a.befsales.toFixed(2),"</span>\n    </article>\n  </div>")}),_("#hot-list").innerHTML=e,$("#hot-list img").lazyload({placeholder:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC",effect:"fadeIn"})}function productlist(){ajax({url:"http://303z9z3029.qicp.vip/productlis",success:renderproductlist,dataType:"json"})}function renderproductlist(a){var n=a.data.advimg,e=a.list.data,s="";n.forEach(function(a){s+='\n    <div class="advertise-img">\n    <img\n    data-original="'.concat(a.advimg_url,'"\n      alt=""\n    />\n  </div>')}),e.forEach(function(a){s+='\n  <div class="list-duct">\n    <figure class="item-cover">\n      <img\n      data-original="'.concat(a.image_url,'"\n        lazy="loaded"\n      />\n    </figure>\n    <article class="artivle">\n      <h3>').concat(a.goods_name,'</h3>\n      <h5 class="txt-product-title">\n       ').concat(a.short_name,'\n      </h5>\n    </article>\n    <aside class="item-attr-colors">\n      <figure class="outer">\n        <img\n          data-v-380b3c68=""\n          data-original="https://resource.smartisan.com/resource/a95138cf41c70fbb689e0bcd785a362f.png?x-oss-process=image/resize,w_30/format,webp"\n        />\n      </figure>\n      <figure class="outer active">\n        <img\n        data-original="https://resource.smartisan.com/resource/b86e1a8858c1445d3fd77a0dcba2eb5c.png?x-oss-process=image/resize,w_30/format,webp"\n        />\n      </figure>\n      <figure class="outer">\n        <img\n          data-v-380b3c68=""\n          data-original="https://resource.smartisan.com/resource/d0c2d694d76184aa8deabab5e8e951af.png?x-oss-process=image/resize,w_30/format,webp"\n        />\n      </figure>\n    </aside>\n    <article class="item-price">\n      <span>￥').concat(a.nowsales.toFixed(2),'</span>\n      <span class="orignal-price">￥').concat(a.befsales.toFixed(2),"</span>\n    </article>\n  </div>")}),_("#prduct-list").innerHTML=s,$("#prduct-list img").lazyload({placeholder:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC",effect:"fadeIn"})}function dylist(){ajax({url:"http://303z9z3029.qicp.vip/dy",success:dyproductlist,dataType:"json"})}function dyproductlist(a){var n=a.data.advimg,e=a.list.data,s="";n.forEach(function(a){s+='\n    <div class="advertise-img">\n    <img\n    data-original="'.concat(a.advimg_url,'"\n      alt=""\n    />\n  </div>')}),e.forEach(function(a){s+='\n  <div class="list-duct">\n    <figure class="item-cover">\n      <img\n      data-original="'.concat(a.image_url,'"\n        lazy="loaded"\n      />\n    </figure>\n    <article class="artivle">\n      <h3>').concat(a.goods_name,'</h3>\n      <h5 class="txt-product-title">\n       ').concat(a.short_name,'\n      </h5>\n    </article>\n    <aside class="item-attr-colors"> \n    </aside>\n    <article class="item-price">\n      <span>￥').concat(a.nowsales.toFixed(2),"</span>\n      \n    </article>\n  </div>")}),_("#dyduct-list").innerHTML=s,$("#dyduct-list img").lazyload({placeholder:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC",effect:"fadeIn"})}load(),productlist(),dylist();
//# sourceMappingURL=public-1db7559974.js.map