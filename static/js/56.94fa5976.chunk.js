(this["webpackJsonpseba-bikroy"]=this["webpackJsonpseba-bikroy"]||[]).push([[56],{188:function(e,a,t){"use strict";var l=t(1);a.a=function(e){var a=e.label,t=e.option,n=e.name,c=e.onChange,s=e.placeholder,r=e.required;return Object(l.jsxs)("div",{className:"mb-3 row",children:[Object(l.jsxs)("label",{for:n,className:"col-sm-3 col-form-label",children:[Object(l.jsxs)("span",{className:"add__product__form__title",children:[a,r&&Object(l.jsx)("span",{style:{color:"#ff0000",fontSize:"18px"},children:" *"})]}),Object(l.jsx)("span",{className:"text-secondary text__small ",children:t})]}),Object(l.jsx)("div",{className:"col-sm-9",children:Object(l.jsx)("input",{type:"text",name:n,id:n,className:"form-control",onChange:c,placeholder:s})})]})}},189:function(e,a,t){"use strict";var l=t(1);a.a=function(e){var a=e.label,t=e.name,n=e.onChange,c=e.option,s=e.multiple,r=e.required;return Object(l.jsxs)("div",{className:"mb-3 row",children:[Object(l.jsxs)("label",{for:"gallery",className:"col-sm-3 col-form-label",children:[Object(l.jsxs)("span",{className:"add__product__form__title",children:[a,r&&Object(l.jsx)("span",{style:{color:"#ff0000",fontSize:"18px"},children:" *"})]}),Object(l.jsx)("span",{className:"text-secondary text__small ",children:c})]}),Object(l.jsx)("div",{className:"col-sm-9",children:Object(l.jsx)("input",{type:"file",name:t,id:t,className:"form-control",onChange:n,multiple:s})})]})}},190:function(e,a,t){"use strict";var l=t(1);a.a=function(e){var a=e.label,t=e.options,n=e.name,c=e.option,s=e.required,r=e.onChange;return Object(l.jsxs)("div",{className:"mb-3 row",children:[Object(l.jsxs)("label",{for:"category",className:"col-sm-3 col-form-label",children:[Object(l.jsxs)("span",{className:"add__product__form__title",children:[a,s&&Object(l.jsx)("span",{style:{color:"#ff0000",fontSize:"18px"},children:" *"})]}),Object(l.jsx)("span",{className:"text-secondary text__small ",children:c})]}),Object(l.jsx)("div",{className:"col-sm-9",children:Object(l.jsx)("select",{onChange:r,className:"form-select",name:n,children:t.map((function(e){return Object(l.jsxs)("option",{value:e.name,children:[" ",e.name]},e.name)}))})})]})}},495:function(e,a,t){"use strict";t.r(a);var l=t(51),n=t(13),c=t(6),s=t(2),r=t(188),o=t(189),i=t(190),m=t(1);a.default=function(){var e=Object(s.useState)({}),a=Object(c.a)(e,2),t=a[0],d=a[1],b=function(e){var a=e.target,t=a.name,c=a.value;d((function(e){return Object(n.a)(Object(n.a)({},e),{},Object(l.a)({},t,c))}))};return Object(m.jsx)("div",{className:"create__category mt-3",children:Object(m.jsxs)("form",{onSubmit:function(e){e.preventDefault(),console.log(t)},className:"create__category__form bg-white shadow-sm p-4",children:[Object(m.jsx)("h2",{className:"cms__title mb-4",children:"Create Child Category"}),Object(m.jsx)(r.a,{label:"Child Category Name  ",option:"(English Language)",name:"child_category_name",type:"text",placeholder:"Enter Child Category Name",onChange:b,required:!0}),Object(m.jsx)(r.a,{label:"Child Category Name",option:"(Bangla Language) (optional)",name:"child_category_bangla",type:"text",placeholder:"Enter Child Category Name (bangla)",onChange:b,required:!1}),Object(m.jsx)(i.a,{label:"Select Category",name:"category",required:!0,options:[{id:1,value:"electronic",name:"Electronic"},{id:2,value:"fashion",name:"Fashion"},{id:3,value:"baby",name:"Baby"}],onChange:b}),Object(m.jsx)(i.a,{label:"Select Sub Category",name:"subCategory",required:!0,options:[{id:1,value:"mobile",name:"mobile"},{id:2,value:"t-shirt",name:"t-shirt"},{id:3,value:"mam",name:"Mam"}],onChange:b}),Object(m.jsx)(r.a,{label:"Child Category Slug",name:"meta_title",type:"text",placeholder:"Enter Child Category Slug",onChange:b,required:!0}),Object(m.jsx)(r.a,{label:"Meta Title",name:"meta_title",type:"text",placeholder:"Enter Meta Title",onChange:b,required:!1}),Object(m.jsx)(r.a,{label:"Meta Description",name:"meta_description",type:"text",placeholder:"Enter Meta Description",onChange:b,required:!1}),Object(m.jsx)(o.a,{label:"Child Category Image",name:"category_icon",onChange:b,multiple:!1,required:!0}),Object(m.jsx)("div",{className:"text-center",children:Object(m.jsx)("button",{type:"submit",className:"btn btn-success me-3",children:"Save"})})]})})}}}]);
//# sourceMappingURL=56.94fa5976.chunk.js.map