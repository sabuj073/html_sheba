/*! For license information please see 17.9aa4a461.chunk.js.LICENSE.txt */
(this["webpackJsonpseba-bikroy"]=this["webpackJsonpseba-bikroy"]||[]).push([[17],{181:function(e,r,t){"use strict";var n=t(182),a=t.n(n),d=t(1);r.a=function(e){var r=e.title,t=e.length,n=e.background,c=e.isFilter;return Object(d.jsxs)("div",{className:a.a.orderTitleWrapper,style:{backgroundColor:n},children:[Object(d.jsxs)("h3",{className:a.a.orderTitle,children:[r,": ",Object(d.jsxs)("span",{children:[" ",t]})]}),c&&Object(d.jsxs)("select",{className:a.a.orderSelect,name:"",id:"",children:[Object(d.jsx)("option",{value:"",children:"Today's"}),Object(d.jsx)("option",{value:"",children:"This Week"}),Object(d.jsx)("option",{value:"",children:"This Month"}),Object(d.jsx)("option",{value:"",children:"This Year"})]})]})}},182:function(e,r,t){e.exports={orderTitleWrapper:"OrderTitle_orderTitleWrapper__1NHez",orderTitle:"OrderTitle_orderTitle__x9Jkp",orderSelect:"OrderTitle_orderSelect__1YGKZ"}},183:function(e,r,t){"use strict";e.exports=t(184)},184:function(e,r,t){"use strict";var n=60103,a=60106,d=60107,c=60108,l=60114,i=60109,s=60110,o=60112,b=60113,u=60120,j=60115,O=60116,h=60121,p=60122,m=60117,x=60129,f=60131;if("function"===typeof Symbol&&Symbol.for){var k=Symbol.for;n=k("react.element"),a=k("react.portal"),d=k("react.fragment"),c=k("react.strict_mode"),l=k("react.profiler"),i=k("react.provider"),s=k("react.context"),o=k("react.forward_ref"),b=k("react.suspense"),u=k("react.suspense_list"),j=k("react.memo"),O=k("react.lazy"),h=k("react.block"),p=k("react.server.block"),m=k("react.fundamental"),x=k("react.debug_trace_mode"),f=k("react.legacy_hidden")}function g(e){if("object"===typeof e&&null!==e){var r=e.$$typeof;switch(r){case n:switch(e=e.type){case d:case l:case c:case b:case u:return e;default:switch(e=e&&e.$$typeof){case s:case o:case O:case j:case i:return e;default:return r}}case a:return r}}}var v=i,y=n,_=o,N=d,S=O,w=j,C=a,T=l,L=c,$=b;r.ContextConsumer=s,r.ContextProvider=v,r.Element=y,r.ForwardRef=_,r.Fragment=N,r.Lazy=S,r.Memo=w,r.Portal=C,r.Profiler=T,r.StrictMode=L,r.Suspense=$,r.isAsyncMode=function(){return!1},r.isConcurrentMode=function(){return!1},r.isContextConsumer=function(e){return g(e)===s},r.isContextProvider=function(e){return g(e)===i},r.isElement=function(e){return"object"===typeof e&&null!==e&&e.$$typeof===n},r.isForwardRef=function(e){return g(e)===o},r.isFragment=function(e){return g(e)===d},r.isLazy=function(e){return g(e)===O},r.isMemo=function(e){return g(e)===j},r.isPortal=function(e){return g(e)===a},r.isProfiler=function(e){return g(e)===l},r.isStrictMode=function(e){return g(e)===c},r.isSuspense=function(e){return g(e)===b},r.isValidElementType=function(e){return"string"===typeof e||"function"===typeof e||e===d||e===l||e===x||e===c||e===b||e===u||e===f||"object"===typeof e&&null!==e&&(e.$$typeof===O||e.$$typeof===j||e.$$typeof===i||e.$$typeof===s||e.$$typeof===o||e.$$typeof===m||e.$$typeof===h||e[0]===p)},r.typeOf=g},185:function(e,r,t){"use strict";var n=t(3),a=t(186),d=t.n(a),c=t(1);r.a=function(e){var r=e.orderLinks;return Object(c.jsx)("div",{className:d.a.orderLink,children:r.map((function(e){return Object(c.jsx)(n.b,{to:"".concat(e.link),className:d.a.orderLinkItem,style:{backgroundColor:e.background},children:e.title},e.id)}))})}},186:function(e,r,t){e.exports={orderLink:"OrderLink_orderLink__OVvJy",orderLinkItem:"OrderLink_orderLinkItem__3AgxE"}},187:function(e,r,t){"use strict";t.d(r,"b",(function(){return n})),t.d(r,"c",(function(){return a})),t.d(r,"a",(function(){return d}));var n=[{id:1,link:"/cms/orders/new-order",title:"New Order",background:"#004a7c"},{id:2,link:"/cms/orders/all-pending-order",title:"Pending Order",background:"#e74c3c"},{id:3,link:"/cms/orders/all-pickup-order",title:"Picked Order",background:"rgb(255, 179, 0)"},{id:4,link:"/cms/orders/all-residual-order",title:"Residual Order",background:"#3498db"},{id:5,link:"/cms/orders/all-cancel-order",title:"Cancel Order",background:"#ff0000"},{id:6,link:"/cms/orders/all-complete-order",title:"Complete Order",background:"green"},{id:6,link:"/cms/orders/total-orders",title:"Total Orders",background:"#333"}],a=[{id:1,link:"/vendor/dashboard/orders/new-order",title:"New Order",background:"#004a7c"},{id:2,link:"/vendor/dashboard/orders/all-pending-order",title:"Pending Order",background:"#e74c3c"},{id:3,link:"/vendor/dashboard/orders/all-pickup-order",title:"Picked Order",background:"rgb(255, 179, 0)"},{id:4,link:"/vendor/dashboard/orders/all-residual-order",title:"Residual Order",background:"#3498db"},{id:1,link:"/vendor/dashboard/orders/all-cancel-order",title:"Cancel Order",background:"#ff0000"},{id:1,link:"/vendor/dashboard/orders/all-complete-order",title:"Complete Order",background:"green"}],d=[{id:1,link:"/delivery-man/orders/new-order",title:"New Order",background:"#004a7c"},{id:2,link:"/delivery-man/orders/all-pending-order",title:"Pending Order",background:"#e74c3c"},{id:3,link:"/delivery-man/orders/all-pickup-order",title:"Picked Order",background:"rgb(255, 179, 0)"},{id:4,link:"/delivery-man/orders/all-residual-order",title:"Residual Order",background:"#3498db"},{id:1,link:"/delivery-man/orders/all-cancel-order",title:"Cancel Order",background:"#ff0000"},{id:1,link:"/delivery-man/orders/all-complete-order",title:"Complete Order",background:"green"}]},195:function(e,r,t){"use strict";var n=t(2),a=t.n(n),d=t(183),c=t(1),l=a.a.lazy((function(){return t.e(3).then(t.bind(null,191))}));r.a=function(e){var r=e.data,t=e.idName;return Object(c.jsx)("div",{class:"modal fade",id:"".concat(t),tabindex:"-1","aria-labelledby":"".concat(t,"Label"),"aria-hidden":"true",children:Object(c.jsx)("div",{class:"modal-dialog modal-xl",children:Object(c.jsxs)("div",{class:"modal-content",children:[Object(c.jsxs)("div",{class:"modal-header",children:[Object(c.jsx)("h5",{class:"modal-title",id:"".concat(t,"Label"),children:"Invoice Modal"}),Object(c.jsx)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})]}),Object(c.jsx)("div",{class:"modal-body",children:Object(c.jsx)(d.Suspense,{fallback:"Loading ...",children:Object(c.jsx)(l,{data:r})})}),Object(c.jsx)("div",{class:"modal-footer",children:Object(c.jsx)("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal",children:"Close"})})]})})})}},196:function(e,r,t){"use strict";var n=t(2),a=t.n(n),d=t(183),c=t(1),l=a.a.lazy((function(){return t.e(58).then(t.bind(null,213))}));r.a=function(e){var r=e.data,t=e.idName;return Object(c.jsx)("div",{class:"modal fade",id:"".concat(t),tabindex:"-1","aria-labelledby":"".concat(t,"Label"),"aria-hidden":"true",children:Object(c.jsx)("div",{class:"modal-dialog modal-xl",children:Object(c.jsxs)("div",{class:"modal-content",children:[Object(c.jsxs)("div",{class:"modal-header",children:[Object(c.jsx)("h5",{class:"modal-title",id:"".concat(t,"Label"),children:"Order Details Modal"}),Object(c.jsx)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})]}),Object(c.jsx)("div",{class:"modal-body",children:Object(c.jsx)(d.Suspense,{fallback:"Loading ...",children:Object(c.jsx)(l,{data:r})})}),Object(c.jsx)("div",{class:"modal-footer",children:Object(c.jsx)("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal",children:"Close"})})]})})})}},197:function(e,r,t){e.exports={newOrderTableWrapper:"Orders_newOrderTableWrapper__lN4Lz",newOrderTable:"Orders_newOrderTable__3H2pb",invoice:"Orders_invoice__3dB1u",details:"Orders_details__a3ZMv",location:"Orders_location__2pQxP",accept:"Orders_accept__2iDpK",cancel:"Orders_cancel__3NyM5",orderSelect:"Orders_orderSelect__3cadM",times:"Orders_times__1E9gY",payment:"Orders_payment__RylAK"}},493:function(e,r,t){"use strict";t.r(r);var n=t(4),a=t.n(n),d=t(9),c=t(6),l=t(195),i=t(196),s=t(185),o=t(187),b=t(181),u=t(197),j=t.n(u),O=t(10),h=t(2),p=t(1);r.default=function(){var e=Object(h.useState)([]),r=Object(c.a)(e,2),t=r[0],n=r[1],u=Object(h.useState)([]),m=Object(c.a)(u,2),x=(m[0],m[1]);return function(){var e=Object(d.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.post("get-total-order").then((function(e){0==t.length&&Number(e.data.length)>0&&(n(e.data),x(Number(e.data.length)))}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()(),Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("div",{className:j.a.newOrder,children:[Object(p.jsx)(b.a,{title:"Total Orders",length:t.length,background:"#004a7c",isFilter:!0}),Object(p.jsx)("div",{className:j.a.newOrderTableWrapper,children:Object(p.jsxs)("table",{className:j.a.newOrderTable,children:[Object(p.jsx)("thead",{children:Object(p.jsxs)("tr",{children:[Object(p.jsx)("th",{children:"SL"}),Object(p.jsx)("th",{children:"Date & Time"}),Object(p.jsx)("th",{children:"Amount"}),Object(p.jsx)("th",{children:"Invoice"}),Object(p.jsx)("th",{children:"O.Details"}),Object(p.jsx)("th",{children:"Location"}),Object(p.jsx)("th",{children:"Action"}),Object(p.jsx)("th",{children:"Accepted By "}),Object(p.jsx)("th",{children:"Status"})]})}),Object(p.jsx)("tbody",{children:t.map((function(e,r){return Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{children:r+1}),Object(p.jsx)("td",{children:e.date_data}),Object(p.jsxs)("td",{children:["\u09f3",e.total_amount]}),Object(p.jsx)("td",{children:Object(p.jsxs)("button",{"data-bs-toggle":"modal","data-bs-target":"#invoiceModalCMS",className:j.a.invoice,children:["#SB",e.order_id]})}),Object(p.jsx)("td",{children:Object(p.jsx)("button",{"data-bs-toggle":"modal","data-bs-target":"#orderDetailsNew",className:j.a.details,children:"Details"})}),Object(p.jsx)("td",{className:j.a.location,children:Object(p.jsx)("span",{children:e.address})}),Object(p.jsx)("td",{children:Object(p.jsx)("button",{className:j.a.accept,children:"Accept"})}),Object(p.jsx)("td",{children:Object(p.jsxs)("select",{className:j.a.orderSelect,name:"",style:{background:"#1e88e5"},children:[Object(p.jsx)("option",{value:"",children:"Super Admin"}),Object(p.jsx)("option",{value:"",children:"Sub Admin"}),Object(p.jsx)("option",{value:"",children:"Admin One"})]})}),Object(p.jsx)("td",{children:Object(p.jsxs)("select",{value:e.status,className:j.a.orderSelect,name:"",id:"",style:{background:"#e74c3c"},children:[Object(p.jsx)("option",{style:{background:"#e74c3c"},value:"Pending",children:"Pending"}),Object(p.jsx)("option",{style:{background:"rgb(255, 179, 0)"},value:"Picked Up",children:"Picked Up"}),Object(p.jsx)("option",{style:{background:"#3498db"},value:"Residual",children:"Residual"}),Object(p.jsx)("option",{style:{background:"green"},value:"Complete",children:"Complete"}),Object(p.jsx)("option",{style:{background:"red"},value:"Cancel",children:"Cancel"}),Object(p.jsx)("option",{style:{background:"red"},value:"Spam",children:"Spam"})]})})]})}))})]})}),Object(p.jsx)(s.a,{orderLinks:o.b})]}),Object(p.jsx)(l.a,{data:[],idName:"invoiceModalCMS"}),Object(p.jsx)(i.a,{data:[],idName:"orderDetailsNew"})]})}}}]);
//# sourceMappingURL=17.9aa4a461.chunk.js.map