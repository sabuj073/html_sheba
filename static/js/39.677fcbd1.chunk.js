(this["webpackJsonpseba-bikroy"]=this["webpackJsonpseba-bikroy"]||[]).push([[39],{188:function(e,a,t){"use strict";var l=t(1);a.a=function(e){var a=e.label,t=e.option,o=e.name,c=e.onChange,n=e.placeholder,s=e.required;return Object(l.jsxs)("div",{className:"mb-3 row",children:[Object(l.jsxs)("label",{for:o,className:"col-sm-3 col-form-label",children:[Object(l.jsxs)("span",{className:"add__product__form__title",children:[a,s&&Object(l.jsx)("span",{style:{color:"#ff0000",fontSize:"18px"},children:" *"})]}),Object(l.jsx)("span",{className:"text-secondary text__small ",children:t})]}),Object(l.jsx)("div",{className:"col-sm-9",children:Object(l.jsx)("input",{type:"text",name:o,id:o,className:"form-control",onChange:c,placeholder:n})})]})}},189:function(e,a,t){"use strict";var l=t(1);a.a=function(e){var a=e.label,t=e.name,o=e.onChange,c=e.option,n=e.multiple,s=e.required;return Object(l.jsxs)("div",{className:"mb-3 row",children:[Object(l.jsxs)("label",{for:"gallery",className:"col-sm-3 col-form-label",children:[Object(l.jsxs)("span",{className:"add__product__form__title",children:[a,s&&Object(l.jsx)("span",{style:{color:"#ff0000",fontSize:"18px"},children:" *"})]}),Object(l.jsx)("span",{className:"text-secondary text__small ",children:c})]}),Object(l.jsx)("div",{className:"col-sm-9",children:Object(l.jsx)("input",{type:"file",name:t,id:t,className:"form-control",onChange:o,multiple:n})})]})}},190:function(e,a,t){"use strict";var l=t(1);a.a=function(e){var a=e.label,t=e.options,o=e.name,c=e.option,n=e.required,s=e.onChange;return Object(l.jsxs)("div",{className:"mb-3 row",children:[Object(l.jsxs)("label",{for:"category",className:"col-sm-3 col-form-label",children:[Object(l.jsxs)("span",{className:"add__product__form__title",children:[a,n&&Object(l.jsx)("span",{style:{color:"#ff0000",fontSize:"18px"},children:" *"})]}),Object(l.jsx)("span",{className:"text-secondary text__small ",children:c})]}),Object(l.jsx)("div",{className:"col-sm-9",children:Object(l.jsx)("select",{onChange:s,className:"form-select",name:o,children:t.map((function(e){return Object(l.jsxs)("option",{value:e.name,children:[" ",e.name]},e.name)}))})})]})}},204:function(e,a,t){"use strict";var l=t(6),o=t(219),c=t.n(o),n=t(221),s=t(2),r=t(8),i=t(203),d=t(188),m=t(189),b=t(190),j=t(205),p=t.n(j),u=t(1);a.a=function(e){var a=e.submitHandler,t=e.inputHandler,o=e.onChange,j=Object(s.useState)("Hello There"),h=Object(l.a)(j,2),x=h[0],O=h[1];return Object(u.jsxs)("form",{id:"productform",onSubmit:a,className:"add__product__form bg-white shadow-sm p-4",children:[Object(u.jsx)("h2",{className:"cms__title mb-4",children:"Add Product"}),Object(u.jsx)(d.a,{label:"Product Name/ Title",option:"(English Language)",name:"product_name",type:"text",required:!0,placeholder:"Enter Product Name",onChange:t}),Object(u.jsx)(d.a,{label:"Product Name/ Title",option:"(Bangla Language) (optional)",name:"product_name_bangla",type:"text",placeholder:"Enter Product Name (bangla)",onChange:t}),Object(u.jsx)(d.a,{label:"Product Name/ Title",option:"(Banglish Language) (optional)",name:"product_name_banglish",type:"text",placeholder:"Enter Product Name (banglish)",onChange:t}),Object(u.jsx)(d.a,{label:"Brand Name",option:"(optional)",name:"brand",type:"text",placeholder:"Brand Name",onChange:t}),Object(u.jsx)(b.a,{label:"Category",name:"category",required:!0,options:[{id:1,value:"electronic",name:"Electronic"},{id:2,value:"fashion",name:"Fashion"},{id:3,value:"baby",name:"Baby"}],onChange:t}),Object(u.jsx)(b.a,{label:"Select Sub Category",name:"sub_category",options:[{id:1,value:"mobile",name:"mobile"},{id:2,value:"t-shirt",name:"t-shirt"},{id:3,value:"mam",name:"Mam"}],onChange:t}),Object(u.jsx)(b.a,{label:"Select Child Category",name:"child_category",options:[{id:1,value:"mobile",name:"mobile"},{id:2,value:"t-shirt",name:"t-shirt"},{id:3,value:"mam",name:"Mam"}],onChange:t}),Object(u.jsx)(m.a,{label:"Current Features Image",name:"featureImage",onChange:t,required:!0}),Object(u.jsx)(m.a,{label:"Product Gallery",option:"Multiple Image (optional)",name:"featureImage",onChange:t,multiple:!0}),Object(u.jsx)(d.a,{label:"Youtube Video URL",option:"(optional)",name:"youtube_url",type:"text",placeholder:"Enter Youtube Video URL",onChange:t}),Object(u.jsx)(b.a,{label:"Product Condition",name:"productCondition",options:[{id:1,value:"new",name:"New"},{id:2,value:"recent",name:"Recent"},{id:3,value:"old",name:"Old"}],onChange:t,option:"(optional)"}),Object(u.jsx)(d.a,{label:"Product  Measurements",option:"(optional)",name:"product_size_check",type:"text",placeholder:"Enter Product Sizes",onChange:t}),Object(u.jsx)(d.a,{label:"Delivery Time",option:"(optional)",name:"product_size_check",type:"text",placeholder:"Delivery Time",onChange:t}),Object(u.jsxs)("div",{className:"mb-3 row",children:[Object(u.jsxs)("label",{for:"product_colors",className:"col-sm-3 col-form-label",children:[Object(u.jsx)("span",{className:"add__product__form__title",children:"Product Colors"}),Object(u.jsx)("span",{className:"text-secondary text__small",children:"(Choose Your Favourite Color.)"})]}),Object(u.jsx)("div",{className:"col-sm-9",children:Object(u.jsxs)("div",{className:"row",children:[Object(u.jsx)("div",{className:"col-md-4",children:Object(u.jsx)(i.a,{isMulti:!0,name:"category",options:[{value:"red",label:"red"},{value:"blue",label:"blue"},{value:"darkcyan",label:"darkcyan"}],className:"basic-multi-select",classNamePrefix:"select",onChange:o})}),Object(u.jsx)("div",{className:"col-md-8",children:Object(u.jsxs)("div",{className:p.a.productColorWrapper,children:[Object(u.jsx)("input",{type:"text",className:"form-control",placeholder:"Enter Color Name"}),Object(u.jsx)("input",{type:"text",className:"form-control ms-2",placeholder:"Enter Price"}),Object(u.jsx)("button",{type:"button",className:p.a.colorButton,children:Object(u.jsx)(r.p,{})})]})})]})})]}),Object(u.jsx)(d.a,{label:"Product Stock",option:"Leave Empty will Show Always Available (optional)",name:"",type:"text",placeholder:" e.g. 15",onChange:t}),Object(u.jsx)(d.a,{label:"Product Regular Price",option:"(optional)",name:"",type:"text",placeholder:"e.g. 00",onChange:t}),Object(u.jsx)(d.a,{label:"Product Selling Price",option:"(optional)",name:"",type:"text",placeholder:"e.g. 00",onChange:t,required:!0}),Object(u.jsx)(d.a,{label:"Product Buying Price",option:"(In Taka)",name:"buying_price",type:"text",placeholder:"e.g. 200 tk",onChange:t}),Object(u.jsxs)("div",{className:"mb-3 row",children:[Object(u.jsx)("label",{for:"meta_description",className:"col-sm-3 col-form-label",children:Object(u.jsx)("span",{className:"add__product__form__title ",children:"Product Description"})}),Object(u.jsx)("div",{className:"col-sm-9",children:Object(u.jsx)(n.CKEditor,{className:"height",editor:c.a,data:x,name:"description",onChange:function(e,a){var t=a.getData();O(t)}})})]}),Object(u.jsxs)("div",{className:"mb-3 row",children:[Object(u.jsx)("label",{for:"meta_description",className:"col-sm-3 col-form-label",children:Object(u.jsx)("span",{className:"add__product__form__title ",children:"Product Term and Condition"})}),Object(u.jsx)("div",{className:"col-sm-9",children:Object(u.jsx)(n.CKEditor,{className:"height",editor:c.a,data:x,name:"description",onChange:function(e,a){var t=a.getData();O(t)}})})]}),Object(u.jsx)("div",{className:"form-check py-3 h4 text-center",children:Object(u.jsx)("label",{className:"form-check-label",for:"seo",children:Object(u.jsx)("span",{style:{fontWeight:"600"},children:"Allow Product SEO"})})}),Object(u.jsx)(d.a,{label:"Product Mega Title",option:"Write meta Separated by Comma [,] (optional)",name:"",type:"text",placeholder:"Meta Title",onChange:t}),Object(u.jsx)(d.a,{label:"Product Meta Tags",option:"Write meta Separated by Comma [,] (optional)",name:"",type:"text",placeholder:"Meta Tags",onChange:t}),Object(u.jsxs)("div",{className:"mb-3 row",children:[Object(u.jsxs)("label",{for:"meta_description",className:"col-sm-3 col-form-label",children:[Object(u.jsx)("span",{className:"add__product__form__title ",children:"Product Meta Description"}),Object(u.jsx)("span",{className:"text-secondary text__small",children:" (optional) "})]}),Object(u.jsx)("div",{className:"col-sm-9",children:Object(u.jsx)("textarea",{type:"text",rows:"3",className:"form-control",id:"meta_description",placeholder:"Meta Description "})})]}),Object(u.jsx)("div",{className:"text-center",children:Object(u.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Submit"})})]})}},205:function(e,a,t){e.exports={productColorWrapper:"AddProduct_productColorWrapper__3QKwi",colorButton:"AddProduct_colorButton__-koCz"}},278:function(e,a,t){"use strict";t.r(a);var l=t(51),o=t(13),c=t(6),n=t(2),s=t(204),r=t(1);a.default=function(){var e=Object(n.useState)({}),a=Object(c.a)(e,2),t=a[0],i=a[1];return Object(r.jsx)("div",{className:"add__product mt-3",children:Object(r.jsx)(s.a,{submitHandler:function(e){e.preventDefault(),console.log(t)},inputHandler:function(e){var a=e.target,t=a.name,c=a.value;i((function(e){return Object(o.a)(Object(o.a)({},e),{},Object(l.a)({},t,c))}))},onChange:function(e){console.log(e)}})})}}}]);
//# sourceMappingURL=39.677fcbd1.chunk.js.map