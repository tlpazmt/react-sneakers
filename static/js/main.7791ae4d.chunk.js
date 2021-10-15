(this["webpackJsonpreact-sneakers"]=this["webpackJsonpreact-sneakers"]||[]).push([[0],{30:function(e,t,c){},31:function(e,t,c){},32:function(e,t,c){},39:function(e,t,c){},40:function(e,t,c){},41:function(e,t,c){},42:function(e,t,c){},43:function(e,t,c){},44:function(e,t,c){},45:function(e,t,c){},46:function(e,t,c){},47:function(e,t,c){"use strict";c.r(t);var s=c(1),i=c(13),a=c.n(i),n=(c(30),c(4)),r=(c(31),c(3)),j=(c(32),c(8)),l=Object(s.createContext)(),d=Object(s.createContext)(),m=c(0),o=function(e){var t=Object(s.useContext)(d),c=Object(n.a)(t,1)[0];return Object(m.jsxs)("header",{className:"header",children:[Object(m.jsxs)(j.b,{className:"header_info",to:"/",children:[Object(m.jsx)("img",{src:"/img/logo.png",alt:"logo"}),Object(m.jsxs)("div",{className:"header_title",children:[Object(m.jsx)("h2",{children:"REACT SNEAKERS"}),Object(m.jsx)("div",{children:"\u041c\u0430\u0433\u0430\u0437\u0438\u043d \u043b\u0443\u0447\u0448\u0438\u0445 \u043a\u0440\u043e\u0441\u0441\u043e\u0432\u043e\u043a"})]})]}),Object(m.jsxs)("div",{className:"header_right",children:[Object(m.jsxs)("div",{className:"header_cart",onClick:function(){return e.clickBasket(!0)},children:[Object(m.jsx)("img",{src:"./img/cart.svg",alt:"cart"}),Object(m.jsxs)("div",{children:[c," \u0440\u0443\u0431."]})]}),Object(m.jsx)(j.b,{className:"header_like",to:"/saved",children:Object(m.jsx)("img",{src:"./img/like.svg",alt:"like"})}),Object(m.jsx)("div",{className:"header_user",children:Object(m.jsx)("img",{src:"./img/user.svg",alt:"user"})})]})]})},b=c(11),u=c(12),O=(c(39),function(e){var t=e.item,c=Object(s.useContext)(l),i=Object(n.a)(c,2),a=i[0],r=i[1],j=Object(s.useContext)(d),o=Object(n.a)(j,2),O=o[0],h=o[1],x=function(e){var c,s=Object(u.a)(a),i=O,n=Object(b.a)(s);try{for(n.s();!(c=n.n()).done;){var j=c.value;if(j.id===t.id){j[e]=!j[e],"inBasket"===e&&(j.inBasket?i+=j.price:i-=j.price);break}}}catch(l){n.e(l)}finally{n.f()}r(s),h(i)};return Object(m.jsx)("div",{className:"item",children:Object(m.jsxs)("div",{className:"item-content",children:[Object(m.jsxs)("div",{className:"item_top",children:[Object(m.jsx)("img",{src:t.imgPath,alt:"img"}),Object(m.jsx)("div",{className:t.inFavourite?"add-favourite favourite-active":"add-favourite",onClick:function(){return x("inFavourite")},children:Object(m.jsx)("img",{src:t.inFavourite?"./img/heart-solid.svg":"./img/heart-regular.svg",alt:"like",className:"item_like"})})]}),Object(m.jsx)("div",{className:"item_name",children:t.name}),Object(m.jsxs)("div",{className:"item_bottom",children:[Object(m.jsxs)("div",{className:"item-price",children:[Object(m.jsx)("label",{children:"\u0426\u0435\u043d\u0430:"}),Object(m.jsxs)("div",{children:[t.price," \u0440\u0443\u0431."]})]}),Object(m.jsx)("div",{className:t.inBasket?"item_plus plus-active":"item_plus",onClick:function(){return x("inBasket")},children:Object(m.jsx)("img",{src:t.inBasket?"./img/check.svg":"./img/plus.svg",alt:"plus"})})]})]})})}),h=(c(40),function(e){var t=Object(s.useContext)(l),c=Object(n.a)(t,1)[0],i=Object(s.useState)(c),a=Object(n.a)(i,2),r=a[0],j=a[1];return Object(m.jsxs)("div",{className:"content",children:[Object(m.jsxs)("div",{className:"content-top",children:[Object(m.jsx)("h1",{children:"\u0412\u0441\u0435 \u043a\u0440\u043e\u0441\u0441\u043e\u0432\u043a\u0438"}),Object(m.jsx)("input",{type:"text",placeholder:"\u041f\u043e\u0438\u0441\u043a...",onChange:function(e){var t=c.filter((function(t){return-1!==t.name.toLowerCase().search(e.target.value.toLowerCase())}));j(t)},style:{background:"url(./img/search.svg) 18px 10px no-repeat"}})]}),Object(m.jsx)("div",{className:"items",children:r.length?r.map((function(e,t){return Object(m.jsx)(O,{item:e},t)})):Object(m.jsx)("h4",{className:"no-items",children:"\u0423 \u043d\u0430\u0441 \u043d\u0435\u0442 \u0442\u0430\u043a\u0438\u0445 \u043a\u0440\u043e\u0441\u0441\u043e\u0432\u043e\u043a :("})})]})}),x=c(49),v=c(48),g=(c(41),function(e){return Object(m.jsxs)("div",{className:"noSaved",children:[Object(m.jsx)("div",{className:"noSaved_smile",children:Object(m.jsx)("img",{src:"./img/oops.png",alt:"Oops"})}),Object(m.jsx)("h3",{children:"\u0417\u0430\u043a\u043b\u0430\u0434\u043e\u043a \u043d\u0435\u0442 :("}),Object(m.jsx)("p",{children:"\u0412\u044b \u043d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u043b\u0438 \u0432 \u0437\u0430\u043a\u043b\u0430\u0434\u043a\u0438"}),Object(m.jsxs)(j.b,{className:"button",to:"/",children:[Object(m.jsx)("span",{children:Object(m.jsx)("img",{src:"./img/arrow.svg",alt:"arrow"})}),"\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f \u043d\u0430\u0437\u0430\u0434"]})]})}),k=(c(42),function(e){var t=Object(s.useContext)(l),c=Object(n.a)(t,1)[0].filter((function(e){return e.inFavourite}));return Object(m.jsxs)("div",{className:"content",children:[Object(m.jsxs)("h1",{children:[Object(m.jsx)(j.b,{to:"/",children:Object(m.jsx)("img",{src:"./img/back.png",alt:"back"})}),"\u041c\u043e\u0438 \u0437\u0430\u043a\u043b\u0430\u0434\u043a\u0438"]}),c.length?Object(m.jsx)(x.a,{className:"items",children:c.map((function(e,t){return Object(m.jsx)(v.a,{timeout:400,classNames:"saved-item",children:Object(m.jsx)(O,{item:e},t)},e.id)}))}):Object(m.jsx)(g,{})]})}),p=(c(43),function(e){var t=e.item,c=Object(s.useContext)(l),i=Object(n.a)(c,2),a=i[0],r=i[1],j=Object(s.useContext)(d),o=Object(n.a)(j,2),O=o[0],h=o[1];return Object(m.jsxs)("div",{className:"basket_item",children:[Object(m.jsx)("div",{className:"basket_item-img",children:Object(m.jsx)("img",{src:t.imgPath,alt:"img"})}),Object(m.jsxs)("div",{className:"basket_item-info",children:[Object(m.jsx)("div",{className:"basket_item-title",children:t.name}),Object(m.jsxs)("div",{className:"basket_item-price",children:[t.price," \u0440\u0443\u0431."]})]}),Object(m.jsx)("div",{className:"basket_item-delete",onClick:function(){var e,c=Object(u.a)(a),s=O,i=Object(b.a)(c);try{for(i.s();!(e=i.n()).done;){var n=e.value;if(n.id===t.id){n.inBasket=!1,s-=n.price;break}}}catch(j){i.e(j)}finally{i.f()}r(c),h(s)},children:Object(m.jsx)("img",{src:"./img/delete.svg",alt:"X"})})]})}),f=(c(44),function(e){return Object(m.jsxs)("div",{className:"basket empty-basket",children:[Object(m.jsx)("h3",{children:"\u041a\u043e\u0440\u0437\u0438\u043d\u0430"}),Object(m.jsxs)("div",{className:"empty-basket_content",children:[Object(m.jsx)("div",{className:"empty-basket_img",children:Object(m.jsx)("img",{src:"./img/box.png",alt:"box"})}),Object(m.jsx)("h4",{children:"\u041a\u043e\u0440\u0437\u0438\u043d\u0430 \u043f\u0443\u0441\u0442\u0430\u044f"}),Object(m.jsx)("div",{className:"empty-basket_detail",children:"\u0414\u043e\u0431\u0430\u0432\u044c\u0442\u0435 \u0445\u043e\u0442\u044f \u0431\u044b \u043e\u0434\u043d\u0443 \u043f\u0430\u0440\u0443 \u043a\u0440\u043e\u0441\u0441\u043e\u0432\u043e\u043a, \u0447\u0442\u043e\u0431\u044b \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u0437\u0430\u043a\u0430\u0437."}),Object(m.jsxs)("button",{className:"button",onClick:function(){return e.clickBasket(!1)},children:[Object(m.jsx)("span",{children:Object(m.jsx)("img",{src:"./img/arrow.svg",alt:"arrow"})}),"\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f \u043d\u0430\u0437\u0430\u0434"]})]})]})}),N=(c(45),function(e){var t=Object(s.useContext)(l),c=Object(n.a)(t,2),i=c[0],a=c[1],r=Object(s.useContext)(d),j=Object(n.a)(r,2)[1],o=0,O=i.filter((function(e,t){return!!e.inBasket&&(o+=e.price,!0)}));return Object(m.jsx)("div",{className:"overlay",children:O.length?Object(m.jsxs)("div",{className:"basket",children:[Object(m.jsx)("h3",{children:"\u041a\u043e\u0440\u0437\u0438\u043d\u0430"}),Object(m.jsx)("div",{className:"basket_top",children:Object(m.jsx)(x.a,{className:"basket_items",children:O.map((function(e,t){return Object(m.jsx)(v.a,{timeout:400,classNames:"basket-item",children:Object(m.jsx)(p,{item:e},e.id)},e.id)}))})}),Object(m.jsxs)("div",{className:"basket_bottom",children:[Object(m.jsxs)("div",{className:"basket_sale",children:[Object(m.jsx)("label",{children:"\u0421\u043a\u0438\u0434\u043a\u0430:"}),Object(m.jsx)("div",{children:"10%"})]}),Object(m.jsxs)("div",{className:"basket_sum",children:[Object(m.jsx)("label",{children:"\u0418\u0442\u043e\u0433\u043e:"}),Object(m.jsxs)("div",{children:[Math.floor(.9*o)," \u0440\u0443\u0431."]})]}),Object(m.jsx)("button",{className:"button",onClick:function(){var t,c=Object(u.a)(i),s=Object(b.a)(c);try{for(s.s();!(t=s.n()).done;){var n=t.value;n.inBasket&&(n.inBasket=!1)}}catch(r){s.e(r)}finally{s.f()}a(c),j(0),e.clickSuccess(!0),e.clickBasket(!1)},children:"\u041e\u0444\u043e\u0440\u043c\u0438\u0442\u044c \u0437\u0430\u043a\u0430\u0437"})]})]}):Object(m.jsx)(f,{clickBasket:e.clickBasket})})}),y=function(e){return Object(m.jsx)("div",{className:"overlay",children:Object(m.jsxs)("div",{className:"basket empty-basket",children:[Object(m.jsx)("h3",{children:"\u041a\u043e\u0440\u0437\u0438\u043d\u0430"}),Object(m.jsxs)("div",{className:"empty-basket_content",children:[Object(m.jsx)("div",{className:"empty-basket_img success_basket",children:Object(m.jsx)("img",{src:"./img/success.jpg",alt:"success"})}),Object(m.jsx)("h4",{children:"\u0417\u0430\u043a\u0430\u0437 \u043e\u0444\u043e\u0440\u043c\u043b\u0435\u043d!"}),Object(m.jsxs)("div",{className:"empty-basket_detail",children:["\u0412\u0430\u0448 \u0437\u0430\u043a\u0430\u0437 #",Math.floor(99*Math.random())+1," \u0441\u043a\u043e\u0440\u043e \u0431\u0443\u0434\u0435\u0442 \u043f\u0435\u0440\u0435\u0434\u0430\u043d \u043a\u0443\u0440\u044c\u0435\u0440\u0441\u043a\u043e\u0439 \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0435"]}),Object(m.jsxs)("button",{className:"button",onClick:function(){return e.clickSuccess(!1)},children:[Object(m.jsx)("span",{children:Object(m.jsx)("img",{src:"./img/arrow.svg",alt:"arrow"})}),"\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f \u043d\u0430\u0437\u0430\u0434"]})]})]})})},B=(c(46),Object(r.f)((function(e){var t=Object(s.useState)(!1),c=Object(n.a)(t,2),i=c[0],a=c[1],j=Object(s.useState)(!1),l=Object(n.a)(j,2),d=l[0],b=l[1];return Object(m.jsxs)("div",{className:"main",children:[Object(m.jsx)(o,{clickBasket:a}),Object(m.jsx)("hr",{}),Object(m.jsxs)(r.c,{children:[Object(m.jsx)(r.a,{path:"/saved",component:k}),Object(m.jsx)(r.a,{path:"/",component:h})]}),Object(m.jsx)(v.a,{in:i,timeout:200,classNames:"basket",unmountOnExit:!0,onEnter:function(){document.querySelector("body").classList.add("lock"),document.addEventListener("click",(function(e){return e.target.classList.contains("overlay")&&a(!1)}))},onExited:function(){document.querySelector("body").classList.remove("lock"),document.addEventListener("click",(function(e){return e.target.classList.contains("overlay")&&a(!1)}))},children:Object(m.jsx)(N,{clickBasket:a,clickSuccess:b})}),Object(m.jsx)(v.a,{in:d,timeout:200,classNames:"success-basket",unmountOnExit:!0,onEnter:function(){document.querySelector("body").classList.add("lock"),document.addEventListener("click",(function(e){return e.target.classList.contains("overlay")&&b(!1)}))},onExited:function(){document.querySelector("body").classList.remove("lock"),document.addEventListener("click",(function(e){return e.target.classList.contains("overlay")&&b(!1)}))},children:Object(m.jsx)(y,{clickSuccess:b})})]})})));var _=function(){var e=Object(s.useState)([{id:0,name:"\u041c\u0443\u0436\u0441\u043a\u0438\u0435 \u041a\u0440\u043e\u0441\u0441\u043e\u0432\u043a\u0438 Nike Blazer Mid Suede",imgPath:"./img/item1.jpg",price:12999,inBasket:!1,inFavourite:!1},{id:1,name:"\u041c\u0443\u0436\u0441\u043a\u0438\u0435 \u041a\u0440\u043e\u0441\u0441\u043e\u0432\u043a\u0438 Nike Air Max 270",imgPath:"./img/item2.jpg",price:1e4,inBasket:!1,inFavourite:!1},{id:2,name:"\u041c\u0443\u0436\u0441\u043a\u0438\u0435 \u041a\u0440\u043e\u0441\u0441\u043e\u0432\u043a\u0438 Nike Blazer Mid Suede",imgPath:"./img/item3.jpg",price:12999,inBasket:!1,inFavourite:!1},{id:3,name:"\u041a\u0440\u043e\u0441\u0441\u043e\u0432\u043a\u0438 Puma X Aka Boku Future Rider",imgPath:"./img/item4.jpg",price:14999,inBasket:!1,inFavourite:!1},{id:4,name:"\u041c\u0443\u0436\u0441\u043a\u0438\u0435 \u041a\u0440\u043e\u0441\u0441\u043e\u0432\u043a\u0438 Under Armour Curry 8",imgPath:"./img/item5.jpg",price:11999,inBasket:!1,inFavourite:!1},{id:5,name:"\u041c\u0443\u0436\u0441\u043a\u0438\u0435 \u041a\u0440\u043e\u0441\u0441\u043e\u0432\u043a\u0438 Nike Kyrie 7",imgPath:"./img/item6.jpg",price:9999,inBasket:!1,inFavourite:!1},{id:6,name:"\u041c\u0443\u0436\u0441\u043a\u0438\u0435 \u041a\u0440\u043e\u0441\u0441\u043e\u0432\u043a\u0438 Jordan Air Jordan 11",imgPath:"./img/item7.jpg",price:18e3,inBasket:!1,inFavourite:!1},{id:7,name:"\u041c\u0443\u0436\u0441\u043a\u0438\u0435 \u041a\u0440\u043e\u0441\u0441\u043e\u0432\u043a\u0438 Nike LeBron XVIII",imgPath:"./img/item8.jpg",price:14999,inBasket:!1,inFavourite:!1},{id:8,name:"\u041c\u0443\u0436\u0441\u043a\u0438\u0435 \u041a\u0440\u043e\u0441\u0441\u043e\u0432\u043a\u0438 Nike Lebron XVIII Low",imgPath:"./img/item9.jpg",price:12499,inBasket:!1,inFavourite:!1},{id:9,name:"\u041c\u0443\u0436\u0441\u043a\u0438\u0435 \u041a\u0440\u043e\u0441\u0441\u043e\u0432\u043a\u0438 Nike Kyrie Flytrap IV",imgPath:"./img/item10.jpg",price:18790,inBasket:!1,inFavourite:!1}]),t=Object(n.a)(e,2),c=t[0],i=t[1],a=Object(s.useState)(0),r=Object(n.a)(a,2),j=r[0],o=r[1];return Object(m.jsx)(d.Provider,{value:[j,o],children:Object(m.jsx)(l.Provider,{value:[c,i],children:Object(m.jsx)("div",{className:"App",children:Object(m.jsx)(B,{})})})})};a.a.render(Object(m.jsx)(j.a,{children:Object(m.jsx)(_,{})}),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.7791ae4d.chunk.js.map