"use strict";$(function(){var s=null;$("#shoplist").mousemove(function(){$(".shop-list").css({opacity:1}),$(this).css({cursor:"pointer"})}),$("#shoplist").mouseout(function(){clearInterval(s),s=setInterval(function(){$(".shop-list").css({opacity:0})},100)}),$(".shop-list").mousemove(function(){clearTimeout(s)}),$(".shop-list").mouseout(function(){clearInterval(s),s=setInterval(function(){$(".shop-list").css({opacity:0})},200)})});var swiper=new Swiper(".swiper-container",{spaceBetween:30,effect:"fade",fadeEffect:{crossFade:!0},pagination:{el:".swiper-pagination",clickable:!0},autoplay:{delay:4e3,stopOnLastSlide:!1,disableOnInteraction:!0}});function load(){ajax({url:"http://localhost:3000/shot_list",success:render,dataType:"json"})}function render(s){var a=s.data,n="";a.forEach(function(s){n+='\n     <div class="hot-list-duct">\n    <figure class="item-cover">\n      <img\n        src="'.concat(s.image_url,'"\n        lazy="loaded"\n      />\n    </figure>\n    <article class="artivle">\n      <h3>').concat(s.goods_name,'</h3>\n      <h5 class="txt-product-title">\n       ').concat(s.short_name,'\n      </h5>\n    </article>\n    <aside class="item-attr-colors">\n      <figure class="outer">\n        <img\n          data-v-380b3c68=""\n          src="https://resource.smartisan.com/resource/a95138cf41c70fbb689e0bcd785a362f.png?x-oss-process=image/resize,w_30/format,webp"\n        />\n      </figure>\n      <figure class="outer active">\n        <img\n          src="https://resource.smartisan.com/resource/b86e1a8858c1445d3fd77a0dcba2eb5c.png?x-oss-process=image/resize,w_30/format,webp"\n        />\n      </figure>\n      <figure class="outer">\n        <img\n          data-v-380b3c68=""\n          src="https://resource.smartisan.com/resource/d0c2d694d76184aa8deabab5e8e951af.png?x-oss-process=image/resize,w_30/format,webp"\n        />\n      </figure>\n    </aside>\n    \n    <article class="item-price">\n      <span>￥').concat(s.nowsales.toFixed(2),'</span>\n      <span class="orignal-price">￥').concat(s.befsales.toFixed(2),"</span>\n    </article>\n  </div>")}),_("#hot-list").innerHTML=n}function productlist(){ajax({url:"http://localhost:3000/productlis",success:renderproductlist,dataType:"json"})}function renderproductlist(s){var a=s.data.advimg,n=s.list.data,e="";a.forEach(function(s){e+='\n    <div class="advertise-img">\n    <img\n      src="'.concat(s.advimg_url,'"\n      alt=""\n    />\n  </div>')}),n.forEach(function(s){e+='\n  <div class="list-duct">\n    <figure class="item-cover">\n      <img\n        src="'.concat(s.image_url,'"\n        lazy="loaded"\n      />\n    </figure>\n    <article class="artivle">\n      <h3>').concat(s.goods_name,'</h3>\n      <h5 class="txt-product-title">\n       ').concat(s.short_name,'\n      </h5>\n    </article>\n    <aside class="item-attr-colors">\n      <figure class="outer">\n        <img\n          data-v-380b3c68=""\n          src="https://resource.smartisan.com/resource/a95138cf41c70fbb689e0bcd785a362f.png?x-oss-process=image/resize,w_30/format,webp"\n        />\n      </figure>\n      <figure class="outer active">\n        <img\n          src="https://resource.smartisan.com/resource/b86e1a8858c1445d3fd77a0dcba2eb5c.png?x-oss-process=image/resize,w_30/format,webp"\n        />\n      </figure>\n      <figure class="outer">\n        <img\n          data-v-380b3c68=""\n          src="https://resource.smartisan.com/resource/d0c2d694d76184aa8deabab5e8e951af.png?x-oss-process=image/resize,w_30/format,webp"\n        />\n      </figure>\n    </aside>\n    <article class="item-price">\n      <span>￥').concat(s.nowsales.toFixed(2),'</span>\n      <span class="orignal-price">￥').concat(s.befsales.toFixed(2),"</span>\n    </article>\n  </div>")}),_("#prduct-list").innerHTML=e}function dylist(){ajax({url:"http://localhost:3000/dy",success:dyproductlist,dataType:"json"})}function dyproductlist(s){console.log(s);var a=s.data.advimg,n=s.list.data;console.log(a,n);var e="";a.forEach(function(s){e+='\n    <div class="advertise-img">\n    <img\n      src="'.concat(s.advimg_url,'"\n      alt=""\n    />\n  </div>')}),n.forEach(function(s){e+='\n  <div class="list-duct">\n    <figure class="item-cover">\n      <img\n        src="'.concat(s.image_url,'"\n        lazy="loaded"\n      />\n    </figure>\n    <article class="artivle">\n      <h3>').concat(s.goods_name,'</h3>\n      <h5 class="txt-product-title">\n       ').concat(s.short_name,'\n      </h5>\n    </article>\n    <aside class="item-attr-colors"> \n    </aside>\n    <article class="item-price">\n      <span>￥').concat(s.nowsales.toFixed(2),"</span>\n      \n    </article>\n  </div>")}),console.log(e),_("#dyduct-list").innerHTML=e}load(),productlist(),dylist();
//# sourceMappingURL=public-abd6e3bce9.js.map
