"use strict";(self.webpackChunkmuroexe=self.webpackChunkmuroexe||[]).push([[299],{8299:function(i,e,n){n.r(e),n.d(e,{default:function(){return C}});var s,t,a,c=n(885),r=n(2791),l=n(9126),d=n(6355),o=n(7474),h=n(3329),m=function(i){var e=i.activeOption,n=i.changeActive,s=(0,r.useState)([{id:1,name:"Information",iconName:l.HHm},{id:2,name:"Orders",iconName:d.ceS},{id:3,name:"Wishlist",iconName:l.xTs},{id:4,name:"Alerts",iconName:l.cIw},{id:5,name:"Sign out",iconName:d.fHX}]),t=(0,c.Z)(s,1)[0].map((function(i){var s=i.id,t=i.name,a=i.iconName;return(0,h.jsxs)("li",{className:e===s?"option-list-item active-option":"option-list-item",onClick:function(){return function(i,e){n(i),"Sign out"===e&&(0,o.Qk)()}(s,t)},children:[(0,h.jsx)("span",{children:(0,h.jsx)(a,{})}),t]},s)}));return(0,h.jsx)("ul",{className:"options-list",children:t})},x=n(9434),u=n(2815),j=n(5222),p=function(i){var e=i.id,n=i.activeOption,s=i.head,t=i.children;return(0,h.jsxs)("li",{className:n===e?"info-list-item active-info":"info-list-item",children:[(0,h.jsx)("h3",{children:s}),t]})},v=n(9811),f=n(6871),N=function(i){var e=i.item,n=e.imageUrl,s=e.name,t=e.price,a=(0,x.I0)(),c=(0,f.s0)();return(0,h.jsxs)("div",{className:"wish-item",children:[(0,h.jsx)("div",{className:"img-box",onClick:function(){return c("/product/".concat(s.toLowerCase().split(" ").toString().replaceAll(",","-")))},children:(0,h.jsx)("img",{src:n,alt:"img-item",width:"130px",height:"130px"})}),(0,h.jsxs)("div",{className:"text-box",children:[(0,h.jsx)("h4",{children:s}),(0,h.jsxs)("span",{children:[t," $"]})]}),(0,h.jsx)("div",{className:"remove-button",children:(0,h.jsx)(l.z3f,{onClick:function(){return a((0,u.If)(e))}})})]})},g=r.memo(N),w=function(i){var e=i.activeOption,n=(0,x.I0)(),s=(0,r.useState)([{id:1,head:"My Personal Data"},{id:2,head:"My Orders"},{id:3,head:"My Wishlist"},{id:4,head:"My Alerts"}]),t=(0,c.Z)(s,1)[0],a=(0,x.v9)((function(i){return i.user})).currentUser,l=(0,x.v9)((function(i){return i.wishList})).wishListItems,d=l.map((function(i){return(0,h.jsx)("div",{className:"col-lg-3 col-md-4 col-6 text-center mb-3",children:(0,h.jsx)(g,{item:i})},i.id)}));return(0,h.jsxs)("ul",{className:"info-list",children:[(0,h.jsx)(p,{id:t[0].id,head:t[0].head,activeOption:e,children:(0,h.jsx)("div",{className:"personal-info mt-3",children:(0,h.jsxs)("ul",{children:[(0,h.jsxs)("li",{children:[(0,h.jsx)("span",{children:"Name : "}),a.displayName]}),(0,h.jsxs)("li",{children:[(0,h.jsx)("span",{children:"Email : "}),a.email]}),(0,h.jsxs)("li",{children:[(0,h.jsx)("span",{children:"Address : "}),"Jacob Tomlin ,75N Southern Street ,London NW5 9XE ,England"]})]})})}),(0,h.jsx)(p,{id:t[1].id,head:t[1].head,activeOption:e,children:(0,h.jsx)(v.Z,{children:"No Orders Yet !"})}),(0,h.jsx)(p,{id:t[2].id,head:t[2].head,activeOption:e,children:(0,h.jsxs)("div",{className:"wishlist-info",children:[(0,h.jsx)("div",{className:"wishlist-container row",children:d}),l.length?(0,h.jsx)("div",{className:"text-center",children:(0,h.jsx)(j.Z,{Clear:!0,onClick:function(){return n((0,u.nY)())},children:"Clear"})}):(0,h.jsx)(v.Z,{children:"Your wishlist is empty"})]})}),(0,h.jsx)(p,{id:t[3].id,head:t[3].head,activeOption:e,children:(0,h.jsx)(v.Z,{children:"No email alerts yet"})})]})},Z=n(168),b=n(6031),O=b.ZP.div(s||(s=(0,Z.Z)(["\n  padding: 10px;\n  border: 1px solid rgba(160, 160, 160, 0.25);\n"]))),k=b.ZP.aside(t||(t=(0,Z.Z)(["\n  border-right: 1px solid rgba(160, 160, 160, 0.25);\n"]))),y=b.ZP.section(a||(a=(0,Z.Z)(["\n  .info-list-item {\n    display: none;\n    &.active-info {\n      display: block;\n    }\n    h3 {\n      font-size: 20px;\n      font-weight: 700;\n    }\n  }\n"]))),C=function(){var i=(0,r.useState)(1),e=(0,c.Z)(i,2),n=e[0],s=e[1];return(0,h.jsx)("section",{className:"user-page",children:(0,h.jsx)("div",{className:"container my-5",children:(0,h.jsx)(O,{children:(0,h.jsxs)("div",{className:"row",children:[(0,h.jsx)(k,{className:"col-lg-3",children:(0,h.jsx)(m,{changeActive:function(i){s(i)},activeOption:n})}),(0,h.jsx)(y,{className:"col-lg-9",children:(0,h.jsx)(w,{activeOption:n})})]})})})})}}}]);
//# sourceMappingURL=299.5fb844ac.chunk.js.map