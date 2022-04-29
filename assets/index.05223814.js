import"./base.eeb2084b.js";import{j as N,E as R,a as T,b as $}from"./job.439aa2f9.js";import{m as A,o as i,c as r,a as e,u as t,i as w,b as _,W as p,X as F,w as y,F as b,O as C,Q as l,p as H,f as J,G as P,e as G,j as x,v as V}from"./index.8ab5fab6.js";import{_ as O}from"./plugin-vue_export-helper.21dcd24c.js";import"./error.7e8331f1.js";import"./arrow-right.18cdadaf.js";const a=c=>(H("data-v-7e7f49d2"),c=c(),J(),c),Q=["src"],W=["src"],X={class:"deliver"},Y={class:"deliver-selector box"},q={class:"search-input"},Z={class:"search-content"},ee=a(()=>e("div",{class:"category-title"},"\u5C97\u4F4D\u7C7B\u522B",-1)),se={class:"category-content"},te={class:"category-wrap"},oe={class:"deliver-content"},ae={class:"deliver-content-top"},ne=a(()=>e("div",{class:"title"},"\u9762\u5411\u5BF9\u8C61",-1)),ie=a(()=>e("div",{class:"detail-top"},"2021\u30012022\u5C4A\u5E94\u5C4A\u6BD5\u4E1A\u751F\uFF08\u6BD5\u4E1A\u65F6\u95F4\uFF1A2020\u5E749\u6708\uFF0D2022\u5E748\u6708\uFF09",-1)),le=a(()=>e("div",{class:"detail-bottom"}," *\u4E2D\u56FD\u5883\u5185\u9AD8\u6821\u7684\u6BD5\u4E1A\u751F\u4EE5\u6BD5\u4E1A\u8BC1\u3001\u5B66\u4F4D\u8BC1\u65F6\u95F4\u4E3A\u51C6\uFF1B\u4E2D\u56FD\u5883\u5916\u9AD8\u6821\u7684\u6BD5\u4E1A\u751F\u4EE5\u6BD5\u4E1A\u8BC1\u3001\u6559\u80B2\u90E8\u5B66\u5386\u8BA4\u8BC1\u4E3A\u51C6\u3002 ",-1)),ce={class:"label"},de={class:"list"},re={class:"item-top"},_e={class:"item-left"},pe={class:"name"},ve={class:"type"},ue=a(()=>e("span",null,"\u6821\u56ED\u62DB\u8058",-1)),he={class:"small-grey"},ge={class:"item-right"},me=["onClick"],ye=["onClick"],be={class:"item-bottom"},fe={class:"post res"},ke=a(()=>e("div",{class:"post-title"},"\u5C97\u4F4D\u804C\u8D23",-1)),we=["innerHTML"],Ce=["onClick"],xe={setup(c){const{Search:I,ArrowRight:z,categoryId:v,categoryList:f,limit:u,page:h,total:k,keyword:g,jobsList:D,initCategoryId:L,getJobListApi:Ve,changePage:S,search:m,postJob:j,openDetail:E,closeDetail:U}=N();return A(f,()=>{L()}),(Ie,o)=>{const B=R,K=T,M=$;return i(),r(b,null,[e("img",{class:"nav-bg",src:t(w)("/nav_bg.png"),alt:""},null,8,Q),e("video",{class:"banner banner-video",loop:"",autoplay:"",muted:"",src:t(w)("/banner_video.mp4")}," Your browser does not support the video tag. ",8,W),e("div",X,[e("div",Y,[e("div",q,[_(B,{modelValue:t(g),"onUpdate:modelValue":o[1]||(o[1]=s=>p(g)?g.value=s:null),modelModifiers:{trim:!0,lazy:!0},placeholder:"\u641C\u7D22\u5DE5\u4F5C\u5C97\u4F4D",clearable:"",onKeyup:F(t(m),["enter"])},{prefix:y(()=>[_(t(I),{class:"search-icon"})]),suffix:y(()=>[e("span",{class:"search-label pointer",onClick:o[0]||(o[0]=(...s)=>t(m)&&t(m)(...s))},"\u67E5\u770B"),_(t(z),{class:"arrow-icon"})]),_:1},8,["modelValue","onKeyup"])]),e("div",Z,[ee,e("div",se,[e("div",te,[(i(!0),r(b,null,C(t(f),s=>(i(),P(K,{key:s.id,label:s.id,modelValue:t(v),"onUpdate:modelValue":o[2]||(o[2]=d=>p(v)?v.value=d:null),size:"large",style:{"font-size":"18px"}},{default:y(()=>[G(l(s.label),1)]),_:2},1032,["label","modelValue"]))),128))])])])]),e("div",oe,[e("div",ae,[ne,ie,le,e("div",ce,"\u5171"+l(t(k))+"\u4E2A\u5C97\u4F4D",1)]),e("div",de,[(i(!0),r(b,null,C(t(D),(s,d)=>(i(),r("div",{class:"item",key:s.id},[e("div",re,[e("div",_e,[e("div",pe,l(s.title),1),e("div",ve,[e("span",null,l(s.zhineng.name),1),ue]),e("div",he,"\u5DE5\u4F5C\u5730\u70B9\uFF1A"+l(s.locations.map(n=>n.city||n.province).join("/")),1)]),e("div",ge,[e("div",{class:"deliver-btn pointer",onClick:n=>t(j)(s.link)},"\u6295\u9012\u804C\u4F4D",8,me),x(e("div",{class:"pointer small-grey",onClick:n=>t(E)(d)},"\u663E\u793A\u8BE6\u60C5",8,ye),[[V,!s.showDetail]])])]),x(e("div",be,[e("div",fe,[ke,e("div",{class:"post-content",innerHTML:s.description},null,8,we)]),e("div",{class:"small-grey shrink pointer",onClick:n=>t(U)(d)},"\u6536\u8D77",8,Ce)],512),[[V,s.showDetail]])]))),128))]),_(M,{"hide-on-single-page":"",background:"",layout:"prev, pager, next",total:t(k),"page-size":t(u),"onUpdate:page-size":o[3]||(o[3]=s=>p(u)?u.value=s:null),"current-page":t(h),"onUpdate:current-page":o[4]||(o[4]=s=>p(h)?h.value=s:null),onCurrentChange:t(S)},null,8,["total","page-size","current-page","onCurrentChange"])])])],64)}}};var Ue=O(xe,[["__scopeId","data-v-7e7f49d2"]]);export{Ue as default};
