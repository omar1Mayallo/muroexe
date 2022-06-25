"use strict";(self.webpackChunkmuroexe=self.webpackChunkmuroexe||[]).push([[903],{6913:function(i,e,t){t.d(e,{Z:function(){return l}});var s,n=t(1413),a=(t(2791),t(4849)),r=t(168),o=t(6031).ZP.div(s||(s=(0,r.Z)(["\n  width: 100%;\n  min-height: 300px;\n  background-color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]))),c=t(3329),l=function(i){return function(e){var t=e.isLoading,s=e.restProps;return t?(0,c.jsx)(o,{children:(0,c.jsx)(a.Z,{animation:"border"})}):(0,c.jsx)(i,(0,n.Z)({},s))}}},5472:function(i,e,t){t(2791);var s=t(3329);e.Z=function(i){var e=i.children,t=i.Tag,n=i.Class,a=t;return(0,s.jsx)(a,{className:"my-5 container ".concat(n),children:e})}},8025:function(i,e,t){t.d(e,{Z:function(){return n}});t(2791);var s=t(3329),n=function(i){var e=i.head,t=i.para;return(0,s.jsxs)(s.Fragment,{children:[t?(0,s.jsx)("p",{className:"para",children:t}):null,(0,s.jsx)("h2",{className:"sections-head text-center",children:e.toUpperCase()})]})}},1814:function(i,e,t){t(2791);var s=t(9434),n=t(6766),a=(t(5141),t(5472)),r=t(8025),o=t(6398),c=t(3329);e.Z=function(){var i=(0,s.v9)((function(i){return i.shop})).shopData,e=[];Object.keys(i).map((function(e){return i[e]})).map((function(i){return i.items.map((function(i){return i.onSaleValue?e.push(i):null}))}));var t=e.reverse((function(i,e){return i.onSaleValue-e.onSaleValue})).filter((function(i,e){return e<8})).map((function(i){return(0,c.jsx)("div",{className:"carousel-element m-2",children:(0,c.jsx)(o.Z,{item:i})},i.id)}));return(0,c.jsxs)(a.Z,{Tag:"section",Class:"FeaturedProducts-Carousel",children:[(0,c.jsx)(r.Z,{head:"Featured products"}),(0,c.jsx)(n.default,{additionalTransfrom:0,arrows:!0,autoPlay:!0,autoPlaySpeed:3e3,centerMode:!1,containerClass:"container-with-dots",draggable:!0,infinite:!0,keyBoardControl:!0,minimumTouchDrag:80,responsive:{desktop:{breakpoint:{max:3e3,min:1024},items:4,partialVisibilityGutter:40},tablet:{breakpoint:{max:1024,min:768},items:3,partialVisibilityGutter:30},mobile:{breakpoint:{max:767,min:0},items:1,partialVisibilityGutter:30}},showDots:!1,slidesToSlide:1,swipeable:!0,children:t})]})}},3873:function(i,e,t){t.r(e),t.d(e,{default:function(){return P}});var s=t(2791),n=t(9434),a=t(1413),r=t(5987),o=t(8025),c=t(5472),l=t(6871),d=t(3329),u=function(i){var e=i.title,t=i.backgroundImgURL,s=i.pathUrl,n=(0,l.s0)();return(0,d.jsx)("div",{onClick:function(){return n("".concat(s))},className:"menu-item",style:{backgroundImage:"url(".concat(t,")")},children:(0,d.jsx)("div",{className:"overlay",children:(0,d.jsxs)("div",{className:"content p-3",children:[(0,d.jsx)("h3",{className:"h4",children:e.toUpperCase()}),(0,d.jsx)("span",{children:"SHOP NOW"})]})})})},m=["id"],p=function(){var i=(0,n.v9)((function(i){return i.shop})).shopData,e=Object.keys(i).map((function(e){return i[e]})).map((function(i){var e=i.id,t=(0,r.Z)(i,m);return(0,d.jsx)("div",{className:"col-xl-3 col-md-6 col-sm-12 mb-4",children:(0,d.jsx)(u,(0,a.Z)({},t))},e)}));return(0,d.jsxs)(c.Z,{Tag:"section",Class:"menu-section",children:[(0,d.jsx)(o.Z,{head:"Collections"}),(0,d.jsx)("div",{className:"row",children:e})]})},h=t(885),x=t(5222),g=function(){var i=(0,l.s0)(),e=(0,s.useState)(1),t=(0,h.Z)(e,2),n=t[0],a=t[1],r=(0,s.useState)([{id:1,imgURL:"https://i.ibb.co/Bfpq0z7/co-caro.png"},{id:2,imgURL:"https://i.ibb.co/sm7PsPD/shoes-caro.png"},{id:3,imgURL:"https://i.ibb.co/ZMsy1B7/bag-caro.png"},{id:4,imgURL:"https://i.ibb.co/d6GTHG1/glass-caro.png"}]),o=(0,h.Z)(r,1)[0],u=o.map((function(i){var e=i.id,t=i.imgURL;return(0,d.jsx)("div",{className:n===e?"img-box fadeIn active-Box":"img-box fadeIn",children:(0,d.jsx)("img",{className:"img-item active",src:t,alt:"main-img",width:"350px",height:"auto"})},e)})),m=o.map((function(i){var e=i.id;return(0,d.jsx)("li",{className:n===e?"indicator-item active-indicator":"indicator-item",onClick:function(){a(e)}},e)}));return(0,d.jsx)(c.Z,{Tag:"main",Class:"Main-section",children:(0,d.jsxs)("div",{className:"row",children:[(0,d.jsxs)("div",{className:"content col-md-6 col-xs-12 ",children:[(0,d.jsxs)("h2",{className:"display-3",children:["Muro",(0,d.jsx)("span",{children:"exe"})]}),(0,d.jsx)("p",{className:"bold-paragraph",children:"Good Shoes Take you To Good Places"}),(0,d.jsxs)("p",{className:"regular-paragraph",children:["Follow with us the best fashion trends of shoes and accessories at",(0,d.jsx)("span",{children:" MUROEXE"})," online Shop"]}),(0,d.jsx)(x.Z,{onClick:function(){return i("/shop")},children:"Discover More"})]}),(0,d.jsxs)("div",{className:"carousel-container col-md-6 col-sm-12",children:[u,(0,d.jsx)("ul",{className:"main-carousel-indicators",children:m})]})]})})},f=function(i){var e=i.ImgURL,t=i.title,s=i.text;return(0,d.jsxs)("div",{className:"feature-item my-2",children:[(0,d.jsxs)("div",{className:"head-box mb-3",children:[(0,d.jsx)("img",{src:e,alt:"feature-img",width:"auto",height:"auto"}),(0,d.jsx)("h3",{className:"",children:t})]}),(0,d.jsx)("div",{className:"text-box",children:(0,d.jsx)("p",{children:s})})]})},b=["id"],j=function(){var i=(0,s.useState)([{id:1,title:"Daily offers",ImgURL:"https://i.ibb.co/PxHgrRV/shaking.pngs",text:"Discover our offers and exclusive deals and collections."},{id:2,title:"Smooth Shipping and Return",ImgURL:"https://i.ibb.co/r7B3jSV/shipping.png",text:"Enjoy our smooth shipping experience and if you are not in love with your product, we will pick it up"},{id:3,title:"Exceptional Customer Care",ImgURL:"https://i.ibb.co/fqfvrYG/service.png",text:"Our customer care specialists are always ready to help"},{id:4,title:"Endless varieties",ImgURL:"https://i.ibb.co/L85gN4m/List.png",text:"A wide variety of exclusive design ideas, crafted by designers from different cultures, backgrounds, and Countries."}]),e=(0,h.Z)(i,1)[0].map((function(i){var e=i.id,t=(0,r.Z)(i,b);return(0,d.jsx)("div",{className:"col-lg-3 col-sm-6 text-center",children:(0,d.jsx)(f,(0,a.Z)({},t))},e)}));return(0,d.jsx)(c.Z,{Tag:"section",Class:"features-section",children:(0,d.jsx)("div",{className:"row",children:e})})},v=t(1814),y=function(i){var e=i.imgUrl;return(0,d.jsx)("div",{className:"insta-card",children:(0,d.jsx)("div",{className:"insta-img-container",children:(0,d.jsx)("img",{src:e,alt:"insta-img",width:"100%",height:"auto"})})})},Z=t(6766),w=(t(5141),["id"]),N=function(){var i=(0,s.useState)([{id:1,imgUrl:"https://i.ibb.co/W3v9X1h/insta-1.jpg"},{id:2,imgUrl:"https://i.ibb.co/ByJFszF/insta-2.jpg"},{id:3,imgUrl:"https://i.ibb.co/JF96n92/insta-3.jpg"},{id:4,imgUrl:"https://i.ibb.co/dLpQfDm/insta-4.jpg"},{id:5,imgUrl:"https://i.ibb.co/1L8g25G/insta-5.jpg"},{id:6,imgUrl:"https://i.ibb.co/PcW6yN8/insta-6.jpg"},{id:7,imgUrl:"https://i.ibb.co/JFPJTf0/insta-7.jpg"},{id:8,imgUrl:"https://i.ibb.co/Z87LRnz/insta-8.jpg"}]),e=(0,h.Z)(i,1)[0].map((function(i){var e=i.id,t=(0,r.Z)(i,w);return(0,d.jsx)(y,(0,a.Z)({},t),e)}));return(0,d.jsxs)(c.Z,{Tag:"section",Class:"instagram-carousel",children:[(0,d.jsx)(o.Z,{para:"Follow Us On Instagram",head:"@muroexe"}),(0,d.jsx)(Z.default,{additionalTransfrom:0,arrows:!0,autoPlay:!0,autoPlaySpeed:3e3,centerMode:!1,containerClass:"container-with-dots",draggable:!0,infinite:!0,keyBoardControl:!0,minimumTouchDrag:80,responsive:{desktop:{breakpoint:{max:3e3,min:1024},items:5,partialVisibilityGutter:40},tablet:{breakpoint:{max:1024,min:768},items:3,partialVisibilityGutter:30},mobile:{breakpoint:{max:767,min:0},items:2,partialVisibilityGutter:30}},showDots:!1,slidesToSlide:1,swipeable:!0,children:e}),(0,d.jsx)("div",{className:"text-center mt-4",children:(0,d.jsx)("a",{href:"https://www.instagram.com/muroexe/",target:"_blank",rel:"noreferrer",children:(0,d.jsx)(x.Z,{children:"Follow Us"})})})]})},k=t(6398),C=function(){var i=(0,n.v9)((function(i){return i.shop})).shopData,e=[];Object.keys(i).map((function(e){return i[e]})).map((function(i){return i.items.map((function(i){return i.newState?e.push(i):null}))}));var t=e.filter((function(i,e){return e<8})).map((function(i){return(0,d.jsx)("div",{className:"carousel-element m-2",children:(0,d.jsx)(k.Z,{item:i})},i.id)}));return(0,d.jsxs)(c.Z,{Tag:"section",Class:"NewProducts-Carousel",children:[(0,d.jsx)(o.Z,{head:"New products"}),(0,d.jsx)(Z.default,{additionalTransfrom:0,arrows:!0,autoPlay:!0,autoPlaySpeed:3e3,centerMode:!1,containerClass:"container-with-dots",draggable:!0,infinite:!0,keyBoardControl:!0,minimumTouchDrag:80,responsive:{desktop:{breakpoint:{max:3e3,min:1024},items:4,partialVisibilityGutter:40},tablet:{breakpoint:{max:1024,min:768},items:3,partialVisibilityGutter:30},mobile:{breakpoint:{max:767,min:0},items:1,partialVisibilityGutter:30}},showDots:!1,slidesToSlide:1,swipeable:!0,children:t})]})},U=t(6913),L=(0,U.Z)(p),S=(0,U.Z)(C),T=(0,U.Z)(v.Z),P=function(){var i=(0,n.v9)((function(i){return i.shop})).isLoading;return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(g,{}),(0,d.jsx)(L,{isLoading:i}),(0,d.jsx)(S,{isLoading:i}),(0,d.jsx)(j,{}),(0,d.jsx)(T,{isLoading:i}),(0,d.jsx)(N,{})]})}}}]);
//# sourceMappingURL=903.ea46cbe3.chunk.js.map