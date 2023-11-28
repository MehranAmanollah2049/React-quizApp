"use strict";(self.webpackChunkfront=self.webpackChunkfront||[]).push([[157],{253:(e,t,s)=>{s.d(t,{Z:()=>a});s(791);var n=s(184);function a(e){return(0,n.jsxs)("form",{className:"FormContent",onSubmit:e.onSubmitForm,children:[(0,n.jsx)("p",{className:"titleForm",children:e.title}),(0,n.jsx)("div",{className:"intsForm",children:e.children}),(0,n.jsx)("div",{className:"buttonOptions",children:(0,n.jsx)("button",{type:"submit",className:"".concat(e.loading?"loading":""),children:e.loading?(0,n.jsxs)("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:"25 25 50 50",children:[(0,n.jsx)("circle",{cx:"50",cy:"50",r:"20",fill:"none",stroke:"#fff",opacity:"0.3",strokeWidth:"6",strokeLinecap:"round",strokeDashoffset:"0",strokeDasharray:"200, 300"}),(0,n.jsxs)("circle",{className:"stroke-current text-gray-500",cx:"50",cy:"50",r:"20",fill:"none",stroke:"#fff",strokeWidth:"6",strokeLinecap:"round",strokeDashoffset:"0",strokeDasharray:"100, 200",children:[(0,n.jsx)("animateTransform",{attributeName:"transform",attributeType:"XML",type:"rotate",from:"0 50 50",to:"360 50 50",dur:"2.5s",repeatCount:"indefinite"}),(0,n.jsx)("animate",{attributeName:"stroke-dashoffset",values:"0;-30;-124",dur:"1.25s",repeatCount:"indefinite"}),(0,n.jsx)("animate",{attributeName:"stroke-dasharray",values:"0,200;110,200;110,200",dur:"1.25s",repeatCount:"indefinite"})]})]}):e.btnText?e.btnText:"\u062b\u0628\u062a \u0627\u0637\u0644\u0627\u0639\u0627\u062a"})})]})}},338:(e,t,s)=>{s.d(t,{Z:()=>r});var n=s(791),a=(s(978),s(184));function r(e){let[t,s]=(0,n.useState)("password");return(0,a.jsxs)("div",{className:"Int-box".concat(e.classNameText?" "+e.classNameText:""),children:[(0,a.jsx)("label",{className:"int-label",children:e.label}),(0,a.jsxs)("div",{className:"int-section",children:[(0,a.jsx)("input",{type:e.type?"password"!=e.type?e.type:t:"text",className:"password"==e.type?"padding-left":"",placeholder:e.placeHolder?e.placeHolder:"\u0644\u0637\u0641\u0627 ".concat(e.label," \u062e\u0648\u062f \u0631\u0627 \u0648\u0627\u0631\u062f \u06a9\u0646\u06cc\u062f ..."),value:e.value,onChange:e.onChageEvent,onInput:function(t){e.number&&(t.target.value=t.target.value.replace(/[^0-9.]/g,"").replace(/(\..*?)\..*/g,"$1"))},onKeyPress:function(t){e.phoneMode&&t.target.value.length>=11&&t.preventDefault()}}),"password"==e.type&&(0,a.jsxs)("div",{className:"iconEye",onClick:function(){s((e=>"password"==e?"text":"password"))},children:["password"!=t&&(0,a.jsxs)("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,a.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M15.1642 12.0521C15.1642 13.7981 13.7482 15.2141 12.0022 15.2141C10.2562 15.2141 8.84021 13.7981 8.84021 12.0521C8.84021 10.3051 10.2562 8.89014 12.0022 8.89014C13.7482 8.89014 15.1642 10.3051 15.1642 12.0521Z",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,a.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M2.75024 12.0521C2.75024 15.3321 6.89224 19.3541 12.0022 19.3541C17.1112 19.3541 21.2542 15.3351 21.2542 12.0521C21.2542 8.76912 17.1112 4.75012 12.0022 4.75012C6.89224 4.75012 2.75024 8.77212 2.75024 12.0521Z",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),"password"==t&&(0,a.jsxs)("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,a.jsx)("path",{d:"M6.42 17.7297C4.19 16.2697 2.75 14.0697 2.75 12.1397C2.75 8.85972 6.89 4.83972 12 4.83972C14.09 4.83972 16.03 5.50972 17.59 6.54972",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,a.jsx)("path",{d:"M19.8498 8.61023C20.7408 9.74023 21.2598 10.9902 21.2598 12.1402C21.2598 15.4202 17.1098 19.4402 11.9998 19.4402C11.0898 19.4402 10.2008 19.3102 9.36975 19.0802",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,a.jsx)("path",{d:"M9.76572 14.3669C9.17072 13.7779 8.83772 12.9749 8.84072 12.1379C8.83672 10.3929 10.2487 8.97493 11.9947 8.97193C12.8347 8.96993 13.6407 9.30293 14.2347 9.89693",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,a.jsx)("path",{d:"M15.1095 12.6991C14.8755 13.9911 13.8645 15.0041 12.5725 15.2411",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,a.jsx)("path",{d:"M19.8917 4.24988L4.11768 20.0239",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})]})]})]})}},157:(e,t,s)=>{s.r(t),s.d(t,{default:()=>p});var n=s(791),a=s(984),r=s(165),o=s(256),i=s(689),l=s(253),d=s(338),c=s(838),u=s(184);function p(){const e=(0,a.d$)(),t=(0,n.useContext)(r.Z),s=(0,n.useContext)(o.Z),p=(0,i.UO)();let[h,x]=(0,n.useState)({title:""}),[f,m]=(0,n.useState)(!1);return(0,n.useEffect)((()=>{s.HttpRequest.get("exam/getAnswer/".concat(p.answer_id)).then((t=>{x({title:t.data.title}),e.done()})).catch((t=>{"Request failed with status code 305"==t.message?((0,c.Z)("error","\u062e\u0637\u0627\u06cc\u06cc \u062f\u0631 \u0627\u062d\u0631\u0627\u0632 \u0647\u0648\u06cc\u062a \u0627\u0637\u0644\u0627\u0639\u0627\u062a \u0634\u0645\u0627 \u0628\u0648\u062c\u0648\u062f \u0627\u0648\u0645\u062f"),s.logOut()):"Request failed with status code 305"!=t.message&&"Request failed with status code 302"!=t.message?(0,c.Z)("error","\u0628\u0627 \u0639\u0631\u0636 \u067e\u0648\u0632\u0634 , \u062e\u0637\u0627\u06cc\u06cc \u062f\u0631 \u0633\u06cc\u062a\u0645 \u0628\u0648\u062c\u0648\u062f \u0622\u0648\u0645\u062f"):(0,c.Z)("error",t.response.data),e.done()})),t.setTitlePanel("\u0648\u06cc\u0631\u0627\u06cc\u0634 \u062c\u0648\u0627\u0628 \u0647\u0627\u06cc <span>\u067e\u0631\u0633\u0634 \u0647\u0627</span>")}),[]),(0,u.jsx)("div",{className:"SectionContainer",children:(0,u.jsx)(l.Z,{title:"\u0641\u0631\u0645 \u0648\u06cc\u0631\u0627\u06cc\u0634 \u062c\u0648\u0627\u0628 \u0647\u0627\u06cc \u0622\u0632\u0645\u0648\u0646",loading:f,onSubmitForm:function(e){e.preventDefault(),""!=h.title?(m(!0),s.HttpRequest.post("exam/answersAll/".concat(p.answer_id,"/editAnswer"),h).then((e=>{console.log(e.data),(0,c.Z)("success","\u0627\u0637\u0644\u0627\u0639\u0627\u062a \u0628\u0627 \u0645\u0648\u0641\u0642\u06cc\u062a \u0648\u06cc\u0631\u0627\u06cc\u0634 \u0634\u062f\u0646\u062f"),x({title:e.data.title}),m(!1)})).catch((e=>{"Request failed with status code 305"==e.message?((0,c.Z)("error","\u062e\u0637\u0627\u06cc\u06cc \u062f\u0631 \u0627\u062d\u0631\u0627\u0632 \u0647\u0648\u06cc\u062a \u0627\u0637\u0644\u0627\u0639\u0627\u062a \u0634\u0645\u0627 \u0628\u0648\u062c\u0648\u062f \u0627\u0648\u0645\u062f"),s.logOut()):"Request failed with status code 305"!=e.message&&"Request failed with status code 302"!=e.message?(0,c.Z)("error","\u0628\u0627 \u0639\u0631\u0636 \u067e\u0648\u0632\u0634 , \u062e\u0637\u0627\u06cc\u06cc \u062f\u0631 \u0633\u06cc\u062a\u0645 \u0628\u0648\u062c\u0648\u062f \u0622\u0648\u0645\u062f"):(0,c.Z)("error",e.response.data),m(!1)}))):(0,c.Z)("error","\u0644\u0637\u0641\u0627 \u0627\u0637\u0644\u0627\u0639\u0627\u062a \u062e\u0648\u0627\u0633\u062a\u0647 \u0634\u062f\u0647 \u0631\u0627 \u0648\u0627\u0631\u062f \u06a9\u0646\u06cc\u062f")},btnText:"\u0648\u06cc\u0631\u0627\u06cc\u0634 \u0627\u0637\u0644\u0627\u0639\u0627\u062a \u0622\u0632\u0645\u0648\u0646",children:(0,u.jsx)(d.Z,{classNameText:"num-1",label:"\u0639\u0646\u0648\u0627\u0646 \u062c\u0648\u0627\u0628",value:h.title,onChageEvent:e=>x((t=>({...t,title:e.target.value})))})})})}},165:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s(791).createContext({})},978:()=>{}}]);
//# sourceMappingURL=157.1bc8e436.chunk.js.map