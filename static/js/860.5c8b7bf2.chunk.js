"use strict";(self.webpackChunkfront=self.webpackChunkfront||[]).push([[860],{253:(e,t,s)=>{s.d(t,{Z:()=>n});s(791);var a=s(184);function n(e){return(0,a.jsxs)("form",{className:"FormContent",onSubmit:e.onSubmitForm,children:[(0,a.jsx)("p",{className:"titleForm",children:e.title}),(0,a.jsx)("div",{className:"intsForm",children:e.children}),(0,a.jsx)("div",{className:"buttonOptions",children:(0,a.jsx)("button",{type:"submit",className:"".concat(e.loading?"loading":""),children:e.loading?(0,a.jsxs)("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:"25 25 50 50",children:[(0,a.jsx)("circle",{cx:"50",cy:"50",r:"20",fill:"none",stroke:"#fff",opacity:"0.3",strokeWidth:"6",strokeLinecap:"round",strokeDashoffset:"0",strokeDasharray:"200, 300"}),(0,a.jsxs)("circle",{className:"stroke-current text-gray-500",cx:"50",cy:"50",r:"20",fill:"none",stroke:"#fff",strokeWidth:"6",strokeLinecap:"round",strokeDashoffset:"0",strokeDasharray:"100, 200",children:[(0,a.jsx)("animateTransform",{attributeName:"transform",attributeType:"XML",type:"rotate",from:"0 50 50",to:"360 50 50",dur:"2.5s",repeatCount:"indefinite"}),(0,a.jsx)("animate",{attributeName:"stroke-dashoffset",values:"0;-30;-124",dur:"1.25s",repeatCount:"indefinite"}),(0,a.jsx)("animate",{attributeName:"stroke-dasharray",values:"0,200;110,200;110,200",dur:"1.25s",repeatCount:"indefinite"})]})]}):e.btnText?e.btnText:"\u062b\u0628\u062a \u0627\u0637\u0644\u0627\u0639\u0627\u062a"})})]})}},338:(e,t,s)=>{s.d(t,{Z:()=>r});var a=s(791),n=(s(978),s(184));function r(e){let[t,s]=(0,a.useState)("password");return(0,n.jsxs)("div",{className:"Int-box".concat(e.classNameText?" "+e.classNameText:""),children:[(0,n.jsx)("label",{className:"int-label",children:e.label}),(0,n.jsxs)("div",{className:"int-section",children:[(0,n.jsx)("input",{type:e.type?"password"!=e.type?e.type:t:"text",className:"password"==e.type?"padding-left":"",placeholder:e.placeHolder?e.placeHolder:"\u0644\u0637\u0641\u0627 ".concat(e.label," \u062e\u0648\u062f \u0631\u0627 \u0648\u0627\u0631\u062f \u06a9\u0646\u06cc\u062f ..."),value:e.value,onChange:e.onChageEvent,onInput:function(t){e.number&&(t.target.value=t.target.value.replace(/[^0-9.]/g,"").replace(/(\..*?)\..*/g,"$1"))},onKeyPress:function(t){e.phoneMode&&t.target.value.length>=11&&t.preventDefault()}}),"password"==e.type&&(0,n.jsxs)("div",{className:"iconEye",onClick:function(){s((e=>"password"==e?"text":"password"))},children:["password"!=t&&(0,n.jsxs)("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,n.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M15.1642 12.0521C15.1642 13.7981 13.7482 15.2141 12.0022 15.2141C10.2562 15.2141 8.84021 13.7981 8.84021 12.0521C8.84021 10.3051 10.2562 8.89014 12.0022 8.89014C13.7482 8.89014 15.1642 10.3051 15.1642 12.0521Z",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,n.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M2.75024 12.0521C2.75024 15.3321 6.89224 19.3541 12.0022 19.3541C17.1112 19.3541 21.2542 15.3351 21.2542 12.0521C21.2542 8.76912 17.1112 4.75012 12.0022 4.75012C6.89224 4.75012 2.75024 8.77212 2.75024 12.0521Z",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),"password"==t&&(0,n.jsxs)("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,n.jsx)("path",{d:"M6.42 17.7297C4.19 16.2697 2.75 14.0697 2.75 12.1397C2.75 8.85972 6.89 4.83972 12 4.83972C14.09 4.83972 16.03 5.50972 17.59 6.54972",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,n.jsx)("path",{d:"M19.8498 8.61023C20.7408 9.74023 21.2598 10.9902 21.2598 12.1402C21.2598 15.4202 17.1098 19.4402 11.9998 19.4402C11.0898 19.4402 10.2008 19.3102 9.36975 19.0802",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,n.jsx)("path",{d:"M9.76572 14.3669C9.17072 13.7779 8.83772 12.9749 8.84072 12.1379C8.83672 10.3929 10.2487 8.97493 11.9947 8.97193C12.8347 8.96993 13.6407 9.30293 14.2347 9.89693",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,n.jsx)("path",{d:"M15.1095 12.6991C14.8755 13.9911 13.8645 15.0041 12.5725 15.2411",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,n.jsx)("path",{d:"M19.8917 4.24988L4.11768 20.0239",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})]})]})]})}},101:(e,t,s)=>{s.d(t,{Z:()=>i});var a=s(791),n=s(87),r=s(184);function i(e){return(0,r.jsx)(a.Fragment,{children:e.link?(0,r.jsx)(n.rU,{to:e.link,className:"DrpBtn".concat(e.theme?" "+e.theme:""),children:e.title}):(0,r.jsx)("div",{className:"DrpBtn".concat(e.theme?" "+e.theme:""),onClick:e.onClickEvent,children:e.title})})}},707:(e,t,s)=>{s.d(t,{Z:()=>r});var a=s(791),n=s(184);function r(e){let[t,s]=(0,a.useState)(0),[r,i]=(0,a.useState)(0),[o,l]=(0,a.useState)(!1);const d=(0,a.useRef)(null);function c(){l((e=>!e))}return(0,a.useEffect)((()=>{d.current&&(s(d.current.clientHeight),i(d.current.clientWidth))})),(0,n.jsxs)("div",{className:"RowTable",children:[e.children,(0,n.jsx)("div",{className:"RowBox",style:{width:"calc(100% / ".concat(e.operationCol,")")},children:e.loading?(0,n.jsxs)("svg",{className:"loading-row",version:"1.1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:"25 25 50 50",children:[(0,n.jsx)("circle",{cx:"50",cy:"50",r:"20",fill:"none",stroke:"var(--title)",opacity:"0.3",strokeWidth:"6",strokeLinecap:"round",strokeDashoffset:"0",strokeDasharray:"200, 300"}),(0,n.jsxs)("circle",{className:"stroke-current text-gray-500",cx:"50",cy:"50",r:"20",fill:"none",stroke:"var(--title)",strokeWidth:"6",strokeLinecap:"round",strokeDashoffset:"0",strokeDasharray:"100, 200",children:[(0,n.jsx)("animateTransform",{attributeName:"transform",attributeType:"XML",type:"rotate",from:"0 50 50",to:"360 50 50",dur:"2.5s",repeatCount:"indefinite"}),(0,n.jsx)("animate",{attributeName:"stroke-dashoffset",values:"0;-30;-124",dur:"1.25s",repeatCount:"indefinite"}),(0,n.jsx)("animate",{attributeName:"stroke-dasharray",values:"0,200;110,200;110,200",dur:"1.25s",repeatCount:"indefinite"})]})]}):(0,n.jsxs)(a.Fragment,{children:[(0,n.jsxs)("div",{className:"operiationBtn".concat(o?" active":""),onClick:c,children:[(0,n.jsxs)("svg",{viewBox:"0 0 25 25",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,n.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5.30396 6.30405C4.08098 7.52702 3.5 9.57319 3.5 13.0001C3.5 16.427 4.08098 18.4732 5.30396 19.6961C6.52693 20.9191 8.5731 21.5001 12 21.5001C15.4269 21.5001 17.4731 20.9191 18.696 19.6961C19.919 18.4732 20.5 16.427 20.5 13.0001C20.5 9.57319 19.919 7.52702 18.696 6.30405C17.4731 5.08107 15.4269 4.50009 12 4.50009C8.5731 4.50009 6.52693 5.08107 5.30396 6.30405ZM4.24329 5.24339C5.91107 3.57561 8.4899 3.00009 12 3.00009C15.5101 3.00009 18.0889 3.57561 19.7567 5.24339C21.4245 6.91116 22 9.48999 22 13.0001C22 16.5102 21.4245 19.089 19.7567 20.7568C18.0889 22.4246 15.5101 23.0001 12 23.0001C8.4899 23.0001 5.91107 22.4246 4.24329 20.7568C2.57552 19.089 2 16.5102 2 13.0001C2 9.48999 2.57552 6.91116 4.24329 5.24339Z"}),(0,n.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M14.9934 13C14.9934 12.4477 15.4411 12 15.9934 12H16.0024C16.5547 12 17.0024 12.4477 17.0024 13C17.0024 13.5523 16.5547 14 16.0024 14H15.9934C15.4411 14 14.9934 13.5523 14.9934 13Z"}),(0,n.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M10.9944 13C10.9944 12.4477 11.4421 12 11.9944 12H12.0034C12.5557 12 13.0034 12.4477 13.0034 13C13.0034 13.5523 12.5557 14 12.0034 14H11.9944C11.4421 14 10.9944 13.5523 10.9944 13Z"}),(0,n.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M6.99561 13C6.99561 12.4477 7.44332 12 7.99561 12H8.00461C8.55689 12 9.00461 12.4477 9.00461 13C9.00461 13.5523 8.55689 14 8.00461 14H7.99561C7.44332 14 6.99561 13.5523 6.99561 13Z"})]}),(0,n.jsx)("div",{className:"drpRow".concat(o?"":" close"),style:{height:t,width:r},children:(0,n.jsx)("div",{className:"drpContentRow",ref:d,children:e.btns.map((e=>e))})})]}),(0,n.jsx)("div",{className:"overlayDrpRow".concat(o?" active":""),onClick:c})]})})]})}},55:(e,t,s)=>{s.d(t,{Z:()=>n});s(791);var a=s(184);function n(e){return(0,a.jsx)("div",{className:"Tooltip".concat(e.customClass?" "+e.customClass:""),children:e.title})}},276:(e,t,s)=>{s.d(t,{Z:()=>n});s(791);var a=s(184);function n(e){return(0,a.jsxs)("div",{className:"TableContent",children:[(0,a.jsx)("p",{className:"titleTable",children:e.title}),(0,a.jsxs)("div",{className:"TableAll",children:[(0,a.jsx)("div",{className:"thCon",children:e.thData.map((e=>(0,a.jsx)("div",{className:"thBox",style:{width:"calc(100% / ".concat(e.cloNum,")"),justifyContent:e.position},children:e.title},e.id)))}),(0,a.jsxs)("div",{className:"rowContent",children:[e.isLoading&&(0,a.jsx)("div",{className:"loadingTable",children:(0,a.jsxs)("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:"25 25 50 50",children:[(0,a.jsx)("circle",{cx:"50",cy:"50",r:"20",fill:"none",stroke:"var(--title)",opacity:"0.3",strokeWidth:"6",strokeLinecap:"round",strokeDashoffset:"0",strokeDasharray:"200, 300"}),(0,a.jsxs)("circle",{className:"stroke-current text-gray-500",cx:"50",cy:"50",r:"20",fill:"none",stroke:"var(--title)",strokeWidth:"6",strokeLinecap:"round",strokeDashoffset:"0",strokeDasharray:"100, 200",children:[(0,a.jsx)("animateTransform",{attributeName:"transform",attributeType:"XML",type:"rotate",from:"0 50 50",to:"360 50 50",dur:"2.5s",repeatCount:"indefinite"}),(0,a.jsx)("animate",{attributeName:"stroke-dashoffset",values:"0;-30;-124",dur:"1.25s",repeatCount:"indefinite"}),(0,a.jsx)("animate",{attributeName:"stroke-dasharray",values:"0,200;110,200;110,200",dur:"1.25s",repeatCount:"indefinite"})]})]})}),0==e.isLoading&&0==e.children.length?(0,a.jsx)("div",{className:"emptyTable",children:"\u0645\u0648\u0631\u062f\u06cc \u06cc\u0627\u0641\u062a \u0646\u0634\u062f :("}):0==e.isLoading?e.children:null]})]})]})}},860:(e,t,s)=>{s.r(t),s.d(t,{default:()=>v});var a=s(791),n=s(984),r=s(338),i=s(165),o=s(253),l=(s(357),s(838)),d=s(256),c=s(689);const u=function(e,t){let{type:s}=t;return"setQuestionData"==s?t.data:"add"==s?function(e,t){return[...e,t.data]}(e,t):"delete"==s?function(e,t){return e.filter((e=>e.id!=t.data))}(e,t):void 0};var h=s(707),x=s(101),m=s(55),p=s(276),f=s(184);function v(){const e=(0,n.d$)(),t=(0,a.useContext)(i.Z),s=(0,a.useContext)(d.Z),v=(0,c.UO)();(0,a.useEffect)((()=>{e.done(),t.setTitlePanel("\u062b\u0628\u062a \u067e\u0631\u0633\u0634 \u0647\u0627\u06cc <span>\u0622\u0632\u0645\u0648\u0646</span>")}),[]);let[w,j]=(0,a.useState)({title:""}),[C,k]=(0,a.useState)(!1),[g,N]=(0,a.useReducer)(u,[]),[y,b]=(0,a.useState)(!1);(0,a.useEffect)((()=>{b(!0),s.HttpRequest.get("exam/questions/".concat(v.quiz_id,"/get")).then((e=>{N({type:"setQuestionData",data:e.data}),b(!1)})).catch((e=>{"Request failed with status code 305"==e.message?((0,l.Z)("error","\u062e\u0637\u0627\u06cc\u06cc \u062f\u0631 \u0627\u062d\u0631\u0627\u0632 \u0647\u0648\u06cc\u062a \u0627\u0637\u0644\u0627\u0639\u0627\u062a \u0634\u0645\u0627 \u0628\u0648\u062c\u0648\u062f \u0627\u0648\u0645\u062f"),s.logOut()):"Request failed with status code 305"!=e.message&&"Request failed with status code 302"!=e.message?(0,l.Z)("error","\u0628\u0627 \u0639\u0631\u0636 \u067e\u0648\u0632\u0634 , \u062e\u0637\u0627\u06cc\u06cc \u062f\u0631 \u0633\u06cc\u062a\u0645 \u0628\u0648\u062c\u0648\u062f \u0622\u0648\u0645\u062f"):(0,l.Z)("error",e.response.data),b(!1)}))}),[]);let[Z,R]=(0,a.useState)(!1);return(0,f.jsxs)(a.Fragment,{children:[(0,f.jsx)("div",{className:"SectionContainer",children:(0,f.jsx)(o.Z,{title:"\u0641\u0631\u0645 \u062b\u0628\u062a \u067e\u0631\u0633\u0634 \u0647\u0627\u06cc \u0622\u0632\u0645\u0648\u0646",loading:C,onSubmitForm:function(e){e.preventDefault(),""!=w.title?(k(!0),s.HttpRequest.post("exam/questions/".concat(v.quiz_id,"/add"),w).then((e=>{(0,l.Z)("success","\u067e\u0631\u0633\u0634 \u0628\u0627 \u0645\u0648\u0641\u0642\u06cc\u062a \u062b\u0628\u062a \u0634\u062f"),j({title:""}),N({type:"add",data:e.data}),k(!1)})).catch((e=>{"Request failed with status code 305"==e.message?((0,l.Z)("error","\u062e\u0637\u0627\u06cc\u06cc \u062f\u0631 \u0627\u062d\u0631\u0627\u0632 \u0647\u0648\u06cc\u062a \u0627\u0637\u0644\u0627\u0639\u0627\u062a \u0634\u0645\u0627 \u0628\u0648\u062c\u0648\u062f \u0627\u0648\u0645\u062f"),s.logOut()):"Request failed with status code 305"!=e.message&&"Request failed with status code 302"!=e.message?(0,l.Z)("error","\u0628\u0627 \u0639\u0631\u0636 \u067e\u0648\u0632\u0634 , \u062e\u0637\u0627\u06cc\u06cc \u062f\u0631 \u0633\u06cc\u062a\u0645 \u0628\u0648\u062c\u0648\u062f \u0622\u0648\u0645\u062f"):(0,l.Z)("error",e.response.data),k(!1)}))):(0,l.Z)("error","\u0644\u0637\u0641\u0627 \u0627\u0637\u0644\u0627\u0639\u0627\u062a \u062e\u0648\u0627\u0633\u062a\u0647 \u0634\u062f\u0647 \u0631\u0627 \u0648\u0627\u0631\u062f \u06a9\u0646\u06cc\u062f")},btnText:"\u062b\u0628\u062a \u0627\u0637\u0644\u0627\u0639\u0627\u062a \u0622\u0632\u0645\u0648\u0646",children:(0,f.jsx)(r.Z,{classNameText:"num-1",label:"\u0639\u0646\u0648\u0627\u0646 \u067e\u0631\u0633\u0634",value:w.title,onChageEvent:e=>j((t=>({...t,title:e.target.value})))})})}),(0,f.jsx)("div",{className:"SectionContainer",children:(0,f.jsx)(p.Z,{title:"\u0644\u06cc\u0633\u062a \u067e\u0631\u0633\u0634 \u0647\u0627",isLoading:y,thData:[{id:1,title:"\u0631\u062f\u06cc\u0641",cloNum:8,position:"center"},{id:2,title:"\u0639\u0646\u0648\u0627\u0646",cloNum:3,position:"flex-start"},{id:3,title:"\u06af\u0632\u06cc\u0646\u0647 \u0647\u0627",cloNum:7,position:"center"},{id:4,title:"\u062f\u0627\u0631\u0627\u06cc \u06af\u0632\u06cc\u0646\u0647 \u062f\u0631\u0633\u062a",cloNum:5,position:"center"},{id:5,title:"\u0639\u0645\u0644\u06cc\u0627\u062a",cloNum:8,position:"center"}],children:g.map(((e,t)=>(0,f.jsxs)(h.Z,{operationCol:8,loading:Z==e.id,btns:[(0,f.jsx)(x.Z,{title:"\u0648\u06cc\u0631\u0627\u06cc\u0634",theme:"blue",link:"/panel/exam/".concat(e.id,"/Editquestions")},"row-1"),(0,f.jsx)(x.Z,{title:"\u062b\u0628\u062a \u06af\u0632\u06cc\u0646\u0647 \u0647\u0627",theme:"green",link:"/panel/exam/".concat(e.id,"/answers")},"row-2"),(0,f.jsx)(x.Z,{title:"\u062d\u0630\u0641",theme:"red",onClickEvent:()=>{return t=e.id,R(t),void s.HttpRequest.delete("exam/questions/delete/".concat(t)).then((e=>{N({type:"delete",data:t}),R(!1),(0,l.Z)("success","\u0639\u0645\u0644\u06cc\u0627\u062a \u0628\u0627 \u0645\u0648\u0641\u0642\u06cc\u062a \u0627\u0646\u062c\u0627\u0645 \u0634\u062f")})).catch((e=>{"Request failed with status code 305"==e.message?((0,l.Z)("error","\u062e\u0637\u0627\u06cc\u06cc \u062f\u0631 \u0627\u062d\u0631\u0627\u0632 \u0647\u0648\u06cc\u062a \u0627\u0637\u0644\u0627\u0639\u0627\u062a \u0634\u0645\u0627 \u0628\u0648\u062c\u0648\u062f \u0627\u0648\u0645\u062f"),s.logOut()):"Request failed with status code 305"!=e.message&&"Request failed with status code 302"!=e.message?(0,l.Z)("error","\u0628\u0627 \u0639\u0631\u0636 \u067e\u0648\u0632\u0634 , \u062e\u0637\u0627\u06cc\u06cc \u062f\u0631 \u0633\u06cc\u062a\u0645 \u0628\u0648\u062c\u0648\u062f \u0622\u0648\u0645\u062f"):(0,l.Z)("error",e.response.data),R(!1)}));var t}},"row-3")],children:[(0,f.jsx)("div",{className:"RowBox",style:{width:"calc(100% / 8)"},children:t+1}),(0,f.jsxs)("div",{className:"RowBox rightArrow leftArrow",style:{width:"calc(100% / 3)",justifyContent:"flex-start",gap:10},children:[(0,f.jsx)("span",{className:"text-span2",children:e.title}),(0,f.jsx)(m.Z,{title:e.title})]}),(0,f.jsxs)("div",{className:"RowBox leftArrow",style:{width:"calc(100% / 7)"},children:[e.answers_num," \u06af\u0632\u06cc\u0646\u0647"]}),(0,f.jsx)("div",{className:"RowBox leftArrow",style:{width:"calc(100% / 5)"},children:e.hasnswer?(0,f.jsx)("span",{className:"tag success",children:"\u06af\u0632\u06cc\u0646\u0647 \u062f\u0631\u0633\u062a \u062b\u0628\u062a \u0634\u062f\u0647"}):(0,f.jsx)("span",{className:"tag error",children:"\u06af\u0632\u06cc\u0646\u0647 \u062f\u0631\u0633\u062a \u062b\u0628\u062a \u0646\u0634\u062f\u0647"})})]},e.id+"Question")))})})]})}},165:(e,t,s)=>{s.d(t,{Z:()=>a});const a=s(791).createContext({})},978:()=>{},357:()=>{}}]);
//# sourceMappingURL=860.5c8b7bf2.chunk.js.map