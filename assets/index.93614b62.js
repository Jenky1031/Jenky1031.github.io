import{_ as k,E as b}from"./base.547d9837.js";import{s as I,E as y}from"./scrollHeader.ce6ff30f.js";/* empty css                */import{d as C,o as l,c as r,a as e,r as m,u as c,b as t,w as i,n as S,e as d,p as x,f as $,g as B,h,v as f,F as z}from"./index.94c2b752.js";import{_ as g}from"./plugin-vue_export-helper.21dcd24c.js";import"./error.7e8331f1.js";const E=C({name:"QuestionFilled"}),F={viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},H=e("path",{fill:"currentColor",d:"M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm23.744 191.488c-52.096 0-92.928 14.784-123.2 44.352-30.976 29.568-45.76 70.4-45.76 122.496h80.256c0-29.568 5.632-52.8 17.6-68.992 13.376-19.712 35.2-28.864 66.176-28.864 23.936 0 42.944 6.336 56.32 19.712 12.672 13.376 19.712 31.68 19.712 54.912 0 17.6-6.336 34.496-19.008 49.984l-8.448 9.856c-45.76 40.832-73.216 70.4-82.368 89.408-9.856 19.008-14.08 42.24-14.08 68.992v9.856h80.96v-9.856c0-16.896 3.52-31.68 10.56-45.76 6.336-12.672 15.488-24.64 28.16-35.2 33.792-29.568 54.208-48.576 60.544-55.616 16.896-22.528 26.048-51.392 26.048-86.592 0-42.944-14.08-76.736-42.24-101.376-28.16-25.344-65.472-37.312-111.232-37.312zm-12.672 406.208a54.272 54.272 0 0 0-38.72 14.784 49.408 49.408 0 0 0-15.488 38.016c0 15.488 4.928 28.16 15.488 38.016A54.848 54.848 0 0 0 523.072 768c15.488 0 28.16-4.928 38.72-14.784a51.52 51.52 0 0 0 16.192-38.72 51.968 51.968 0 0 0-15.488-38.016 55.936 55.936 0 0 0-39.424-14.784z"},null,-1),N=[H];function q(s,o,_,a,p,u){return l(),r("svg",F,N)}var D=k(E,[["render",q]]),M="/assets/logo_normal_dark.ca906da5.png",V="/assets/qrcode.b611994b.jpeg";const v=s=>(x("data-v-6074d4ec"),s=s(),$(),s),A={class:"header-container"},R={class:"header-logo"},T=["src"],j={class:"header-nav"},L=d(" \u9996\u9875 "),P=v(()=>e("div",{class:"nav-line"},null,-1)),Q=d(" 2022\u5C4A\u6625\u5B63\u62DB\u8058 "),W=v(()=>e("div",{class:"nav-line"},null,-1)),G=d(" \u804C\u4F4D\u6295\u9012 "),J=v(()=>e("div",{class:"nav-line"},null,-1)),K=v(()=>e("a",{class:"nav-link",href:"https://www.wenext.cn/",target:"_blank"},[e("div",null,[d("\u8D70\u8FDB"),e("span",{class:"en"},"wenext")]),e("div",{class:"nav-line"})],-1)),O={setup(s){const{isHide:o,isDark:_,logoSelected:a}=I();return(p,u)=>{const n=m("router-link");return l(),r("div",{class:S(["header-wrapper",{isHide:c(o),isDark:c(_)}])},[e("div",A,[e("div",R,[e("img",{class:"logo",src:c(a),alt:""},null,8,T)]),e("div",j,[t(n,{class:"nav-link",to:"/"},{default:i(()=>[L,P]),_:1}),t(n,{class:"nav-link",to:"/introduce"},{default:i(()=>[Q,W]),_:1}),t(n,{class:"nav-link",to:"/deliver"},{default:i(()=>[G,J]),_:1}),K])])],2)}}};var U=g(O,[["__scopeId","data-v-6074d4ec"]]);const X=s=>(x("data-v-437a3e60"),s=s(),$(),s),Y={class:"footer"},Z=X(()=>e("div",{class:"footer-text"}," \xA92019-2024 WeNext Technology Co., Ltd.All Rights Reserved. \u5907\u6848\u53F7\uFF1A\u7CA4ICP\u590714084727\u53F7-1 \u7ECF\u8425\u8BB8\u53EF\u8BC1\u7F16\u53F7\uFF1A440307111479175 ",-1)),ee=[Z],se={setup(s){return(o,_)=>(l(),r("div",Y,ee))}};var te=g(se,[["__scopeId","data-v-437a3e60"]]);const oe={class:"main"},ae=e("div",{class:"img-box"},[e("img",{src:M,alt:""})],-1),ne=e("div",{class:"affix-title"},"\u5982\u6709\u7591\u95EE\uFF1F",-1),_e=e("div",{class:"blue-bar"},null,-1),ce=e("div",{class:"affix-content"},"\u6B22\u8FCE\u5173\u6CE8\u672A\u6765\u5DE5\u573A \u62DB\u8058\u5FAE\u4FE1\u516C\u4F17\u53F7\u54A8\u8BE2",-1),ie=e("img",{class:"affix-qrcode",src:V,alt:""},null,-1),le=[ne,_e,ce,ie],fe={setup(s){const o=B(!1);return(_,a)=>{const p=m("router-view"),u=b,n=y;return l(),r(z,null,[t(U),e("div",oe,[t(p),ae]),t(te),h(e("div",{class:"affix big box",onMouseleave:a[0]||(a[0]=w=>o.value=!1)},le,544),[[f,o.value]]),h(e("div",{class:"affix small",onMouseenter:a[1]||(a[1]=w=>o.value=!0)},[t(u,{color:"#0052d9",size:"40px"},{default:i(()=>[t(c(D))]),_:1})],544),[[f,!o.value]]),t(n,{right:100,bottom:100})],64)}}};export{fe as default};
