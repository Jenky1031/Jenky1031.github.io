import{_ as G,E as O}from"./base.eeb2084b.js";import{j as Q,E as W,b as X,a as q}from"./job.439aa2f9.js";/* empty css                */import{d as Y,o,c as a,a as e,g as Z,h as k,m as ee,u as s,i as T,n as B,F as x,O as $,j as L,v as V,b as d,W as g,X as te,w as f,Q as l,G as D,a6 as se,J as ie,p as oe,f as le,e as ae}from"./index.8ab5fab6.js";import{_ as ne}from"./plugin-vue_export-helper.21dcd24c.js";import"./error.7e8331f1.js";import"./arrow-right.18cdadaf.js";const de=Y({name:"ArrowLeftBold"}),re={viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},ce=e("path",{fill:"currentColor",d:"M685.248 104.704a64 64 0 0 1 0 90.496L368.448 512l316.8 316.8a64 64 0 0 1-90.496 90.496L232.704 557.248a64 64 0 0 1 0-90.496l362.048-362.048a64 64 0 0 1 90.496 0z"},null,-1),ve=[ce];function _e(c,_,n,z,p,E){return o(),a("svg",re,ve)}var pe=G(de,[["render",_e]]);const r=c=>(oe("data-v-1b7c0700"),c=c(),le(),c),ue={class:"m-deliver"},me={class:"m-banner"},he={class:"m-banner-img"},ge=["src"],fe=["src"],be={class:"m-deliver-main"},we={class:"m-deliver-tabs"},ye=["onClick"],Ce={class:"m-deliver-content"},ke=r(()=>e("div",{class:"m-deliver-title m-title"},"\u6821\u56ED\u62DB\u8058",-1)),xe=r(()=>e("div",{class:"m-deliver-top-content"},[e("p",null,"\u6BD5\u4E1A\u65F6\u95F4\uFF1A2021\u30012022\u5C4A\u5E94\u5C4A\u6BD5\u4E1A\u751F\uFF08\u6BD5\u4E1A\u65F6\u95F4\uFF1A2020\u5E749\u6708\uFF0D2022\u5E748\u6708\uFF09"),e("div",{class:"m-deliver-top-content-center"},[e("p",null,"*\u4E2D\u56FD\u5883\u5185\u9AD8\u6821\u7684\u6BD5\u4E1A\u751F\u4EE5\u6BD5\u4E1A\u8BC1\u3001\u5B66\u4F4D\u8BC1\u65F6\u95F4\u4E3A\u51C6\uFF1B"),e("p",null,"\u4E2D\u56FD\u5883\u5916\u9AD8\u6821\u7684\u6BD5\u4E1A\u751F\u4EE5\u6BD5\u4E1A\u8BC1\u3001\u6559\u80B2\u90E8\u5B66\u5386\u8BA4\u8BC1\u4E3A\u51C6\u3002")]),e("p",null,"\u5B9E\u4E60\u751F\u62DB\u8058\uFF1A\u5927\u4E8C\u4EE5\u4E0A\u5728\u6821\u751F\u3002")],-1)),$e=[ke,xe],Le={class:"m-deliver-content"},Ve={class:"search-input"},ze={class:"m-deliver-top"},Ee={class:"m-deliver-total"},Ie={class:"m-deliver-list"},Se={class:"m-deliver-item-top"},Te={class:"m-deliver-item-left"},Be={class:"m-deliver-item-title"},De={class:"m-deliver-item-types"},je={class:"m-deliver-item-type"},Ue=r(()=>e("div",{class:"m-deliver-item-type"},"\u6821\u56ED\u62DB\u8058",-1)),Ae={class:"m-deliver-item-pos"},Me=["onClick"],Ne=r(()=>e("div",{class:"m-deliver-item-line"},null,-1)),He={class:"m-deliver-item-detail-wrapper"},Je={class:"m-deliver-item-detail"},Ke=r(()=>e("div",{class:"m-deliver-item-detail-title"},"\u5C97\u4F4D\u804C\u8D23",-1)),Re=["innerHTML"],Fe=["onClick"],Pe={class:"deliver-cate"},Ge=r(()=>e("div",{class:"deliver-cate-nav-title"},"\u8FD4\u56DE\u5C97\u4F4D\u5217\u8868",-1)),Oe={class:"deliver-cate-content-wrapper"},Qe={class:"deliver-cate-content"},We={setup(c){Z(v=>({"3c7d4a04":_.value}));const _=k("#fff"),n=k([{id:1,title:"\u516C\u544A",active:!0},{id:2,title:"\u5C97\u4F4D\u5217\u8868",active:!1}]),z=v=>{n.value.forEach(i=>i.active=!1),v.active=!0,v.id===1&&(_.value="#fff"),v.id===2&&(_.value="rgb(240, 240, 240)")},p=k(!1),{Search:E,ArrowRight:j,categoryId:u,categoryList:U,limit:b,page:w,total:I,keyword:y,jobsList:A,getCategoryListApi:Xe,getJobListApi:M,changePage:N,search:C,postJob:H,toggleShowDetail:J}=Q();M();const S=()=>{p.value=!1,window.scrollTo(0,0)};return ee(u,()=>{S()}),(v,i)=>{const K=W,R=X,F=O,P=q;return o(),a("div",ue,[e("div",{class:B(["m-deliver-banner","banner",,{isHide:n.value[1].active}])},[e("div",me,[e("div",he,[e("img",{src:s(T)("/nav_bg.png"),alt:""},null,8,ge)]),e("video",{class:"banner m-banner-video",loop:"",autoplay:"",muted:"",src:s(T)("/mobile/banner_video.mp4")},null,8,fe)])],2),e("div",be,[e("div",we,[(o(!0),a(x,null,$(n.value,t=>(o(),a("div",{key:t.id,class:B(["m-deliver-tab",{active:t.active}]),onClick:m=>z(t)},l(t.title),11,ye))),128))]),L(e("div",Ce,$e,512),[[V,n.value[0].active]]),L(e("div",Le,[e("div",Ve,[d(K,{modelValue:s(y),"onUpdate:modelValue":i[1]||(i[1]=t=>g(y)?y.value=t:null),modelModifiers:{trim:!0,lazy:!0},placeholder:"\u641C\u7D22\u5DE5\u4F5C\u5C97\u4F4D",clearable:"",onKeyup:te(s(C),["enter"])},{prefix:f(()=>[d(s(E),{class:"search-icon"})]),suffix:f(()=>[e("span",{class:"search-label pointer",onClick:i[0]||(i[0]=(...t)=>s(C)&&s(C)(...t))},"\u67E5\u770B"),d(s(j),{class:"arrow-icon"})]),_:1},8,["modelValue","onKeyup"])]),e("div",ze,[e("div",Ee,"\u5171"+l(s(I))+"\u4E2A\u5C97\u4F4D",1),e("div",{class:"m-deliver-btn",onClick:i[2]||(i[2]=t=>p.value=!0)},"\u7B5B\u9009\u6761\u4EF6")]),e("div",Ie,[(o(!0),a(x,null,$(s(A),(t,m)=>(o(),a("div",{class:"m-deliver-item",key:t.id},[e("div",Se,[e("div",Te,[e("div",Be,l(t.title),1),e("div",De,[e("div",je,l(t.zhineng.name),1),Ue]),e("div",Ae," \u5DE5\u4F5C\u5730\u70B9\uFF1A"+l(t.locations.map(h=>h.city||h.province).join("/")),1)]),e("div",{class:"m-deliver-item-right",onClick:h=>s(H)(t.link)},"\u6295\u9012\u5C97\u4F4D",8,Me)]),Ne,L(e("div",He,[e("div",Je,[Ke,e("div",{class:"m-deliver-item-detail-content",innerHTML:t.description},null,8,Re)])],512),[[V,t.showDetail]]),e("div",{class:"m-deliver-item-bottom",onClick:h=>s(J)(m)},l(t.showDetail?"\u6536\u8D77":"\u67E5\u770B\u8BE6\u60C5"),9,Fe)]))),128))]),d(R,{"hide-on-single-page":"",background:"",layout:"prev, pager, next",total:s(I),"page-size":s(b),"onUpdate:page-size":i[3]||(i[3]=t=>g(b)?b.value=t:null),"current-page":s(w),"onUpdate:current-page":i[4]||(i[4]=t=>g(w)?w.value=t:null),onCurrentChange:s(N)},null,8,["total","page-size","current-page","onCurrentChange"])],512),[[V,n.value[1].active]])]),p.value?(o(),D(se,{key:0,to:"body"},[e("div",Pe,[e("div",{class:"deliver-cate-nav",onClick:S},[d(F,null,{default:f(()=>[d(s(pe))]),_:1}),Ge]),e("div",Oe,[e("div",Qe,[(o(!0),a(x,null,$(s(U),t=>(o(),D(P,{key:t.id,label:t.id,modelValue:s(u),"onUpdate:modelValue":i[5]||(i[5]=m=>g(u)?u.value=m:null),size:"large",style:{"font-size":"0.36rem"}},{default:f(()=>[ae(l(t.label),1)]),_:2},1032,["label","modelValue"]))),128))])])])])):ie("",!0)])}}};var ot=ne(We,[["__scopeId","data-v-1b7c0700"]]);export{ot as default};
