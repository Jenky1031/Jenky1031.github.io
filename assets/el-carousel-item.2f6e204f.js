var Me=Object.defineProperty,Ne=Object.defineProperties;var $e=Object.getOwnPropertyDescriptors;var oe=Object.getOwnPropertySymbols;var Be=Object.prototype.hasOwnProperty,Ae=Object.prototype.propertyIsEnumerable;var ne=(c,u,l)=>u in c?Me(c,u,{enumerable:!0,configurable:!0,writable:!0,value:l}):c[u]=l,Q=(c,u)=>{for(var l in u||(u={}))Be.call(u,l)&&ne(c,l,u[l]);if(oe)for(var l of oe(u))Ae.call(u,l)&&ne(c,l,u[l]);return c},Y=(c,u)=>Ne(c,$e(u));import{d as ce,h as p,A as S,u as t,m as q,D as Le,E as ve,L as Oe,R as Re,S as Pe,o as I,c as T,a as U,G as re,w as j,j as W,v as K,n as C,I as z,b as F,T as le,J as H,B as fe,H as me,F as ze,O as He,Q as Ve,x as De,z as Ue,U as je,V as Fe,y as We}from"./index.d9ea6381.js";import{d as de,i as Ke,u as pe,e as Xe,E as ie,b as he,f as Ge,w as Je,g as Qe}from"./base.b8c2d775.js";import{d as Ye,i as qe,a as Ze,b as xe}from"./arrow-right.d4e73829.js";var et="Expected a function";function ue(c,u,l){var a=!0,i=!0;if(typeof c!="function")throw new TypeError(et);return qe(l)&&(a="leading"in l?!!l.leading:a,i="trailing"in l?!!l.trailing:i),Ye(c,u,{leading:a,maxWait:u,trailing:i})}const ge=Symbol("carouselContextKey"),tt=de({initialIndex:{type:Number,default:0},height:{type:String,default:""},trigger:{type:String,default:"hover"},autoplay:{type:Boolean,default:!0},interval:{type:Number,default:3e3},indicatorPosition:{type:String,default:""},indicator:{type:Boolean,default:!0},arrow:{type:String,default:"hover"},type:{type:String,default:""},loop:{type:Boolean,default:!0},direction:{type:String,default:"horizontal",validator(c){return["horizontal","vertical"].includes(c)}},pauseOnHover:{type:Boolean,default:!0}}),at={change:(c,u)=>[c,u].every(Ke)},st=["onMouseenter","onMouseleave"],ot=["onMouseenter","onClick"],nt={key:0},rt={name:"ElCarousel"},lt=ce(Y(Q({},rt),{props:tt,emits:at,setup(c,{expose:u,emit:l}){const a=c,i=pe("carousel"),w=300,n=p(-1),h=p(null),_=p(!1),g=p(),v=p([]),k=S(()=>a.arrow!=="never"&&!t($)),M=S(()=>v.value.some(e=>e.props.label.toString().length>0)),N=S(()=>{const e=[i.b(),i.m(a.direction)];return t(L)&&e.push(i.m("card")),e}),V=S(()=>{const e=[i.e("indicators"),i.em("indicators",a.direction)];return M.value&&e.push(i.em("indicators","labels")),(a.indicatorPosition==="outside"||t(L))&&e.push(i.em("indicators","outside")),e}),L=S(()=>a.type==="card"),$=S(()=>a.direction==="vertical"),D=ue(e=>{o(e)},w,{trailing:!0}),X=ue(e=>{Ce(e)},w);function O(){h.value&&(clearInterval(h.value),h.value=null)}function R(){a.interval<=0||!a.autoplay||h.value||(h.value=setInterval(()=>r(),a.interval))}const r=()=>{n.value<v.value.length-1?n.value=n.value+1:a.loop&&(n.value=0)};function o(e){if(De(e)){const y=v.value.filter(A=>A.props.name===e);y.length>0&&(e=v.value.indexOf(y[0]))}if(e=Number(e),Number.isNaN(e)||e!==Math.floor(e))return;const s=v.value.length,m=n.value;e<0?n.value=a.loop?s-1:0:e>=s?n.value=a.loop?0:s-1:n.value=e,m===n.value&&f(m)}function f(e){v.value.forEach((s,m)=>{s.translateItem(m,n.value,e)})}function d(e){v.value.push(e)}function E(e){const s=v.value.findIndex(m=>m.uid===e);s!==-1&&(v.value.splice(s,1),n.value===s&&ee())}function B(e,s){var m,y,A,te;const P=t(v),ae=P.length;if(ae===0||!e.states.inStage)return!1;const be=s+1,we=s-1,se=ae-1,ke=P[se].states.active,Ee=P[0].states.active,Se=(y=(m=P[be])==null?void 0:m.states)==null?void 0:y.active,Te=(te=(A=P[we])==null?void 0:A.states)==null?void 0:te.active;return s===se&&Ee||Se?"left":s===0&&ke||Te?"right":!1}function b(){_.value=!0,a.pauseOnHover&&O()}function G(){_.value=!1,R()}function Z(e){t($)||v.value.forEach((s,m)=>{e===B(s,m)&&(s.states.hover=!0)})}function x(){t($)||v.value.forEach(e=>{e.states.hover=!1})}function Ie(e){n.value=e}function Ce(e){a.trigger==="hover"&&e!==n.value&&(n.value=e)}function _e(){o(n.value-1)}function ee(){o(n.value+1)}q(()=>n.value,(e,s)=>{f(s),s>-1&&l("change",e,s)}),q(()=>a.autoplay,e=>{e?R():O()}),q(()=>a.loop,()=>{o(n.value)});const J=Le();return ve(async()=>{await Oe(),J.value=Xe(g.value,()=>{f()}),a.initialIndex<v.value.length&&a.initialIndex>=0&&(n.value=a.initialIndex),R()}),Re(()=>{O(),g.value&&J.value&&J.value.stop()}),Pe(ge,{root:g,isCardType:L,isVertical:$,items:v,loop:a.loop,addItem:d,removeItem:E,setActiveItem:o}),u({setActiveItem:o,prev:_e,next:ee}),(e,s)=>(I(),T("div",{ref_key:"root",ref:g,class:C(t(N)),onMouseenter:z(b,["stop"]),onMouseleave:z(G,["stop"])},[U("div",{class:C(t(i).e("container")),style:me({height:e.height})},[t(k)?(I(),re(le,{key:0,name:"carousel-arrow-left"},{default:j(()=>[W(U("button",{type:"button",class:C([t(i).e("arrow"),t(i).em("arrow","left")]),onMouseenter:s[0]||(s[0]=m=>Z("left")),onMouseleave:x,onClick:s[1]||(s[1]=z(m=>t(D)(n.value-1),["stop"]))},[F(t(ie),null,{default:j(()=>[F(t(Ze))]),_:1})],34),[[K,(e.arrow==="always"||_.value)&&(a.loop||n.value>0)]])]),_:1})):H("v-if",!0),t(k)?(I(),re(le,{key:1,name:"carousel-arrow-right"},{default:j(()=>[W(U("button",{type:"button",class:C([t(i).e("arrow"),t(i).em("arrow","right")]),onMouseenter:s[2]||(s[2]=m=>Z("right")),onMouseleave:x,onClick:s[3]||(s[3]=z(m=>t(D)(n.value+1),["stop"]))},[F(t(ie),null,{default:j(()=>[F(t(xe))]),_:1})],34),[[K,(e.arrow==="always"||_.value)&&(a.loop||n.value<v.value.length-1)]])]),_:1})):H("v-if",!0),fe(e.$slots,"default")],6),e.indicatorPosition!=="none"?(I(),T("ul",{key:0,class:C(t(V))},[(I(!0),T(ze,null,He(v.value,(m,y)=>(I(),T("li",{key:y,class:C([t(i).e("indicator"),t(i).em("indicator",e.direction),t(i).is("active",y===n.value)]),onMouseenter:A=>t(X)(y),onClick:z(A=>Ie(y),["stop"])},[U("button",{class:C(t(i).e("button"))},[t(M)?(I(),T("span",nt,Ve(m.props.label),1)):H("v-if",!0)],2)],42,ot))),128))],2)):H("v-if",!0)],42,st))}}));var it=he(lt,[["__file","/home/runner/work/element-plus/element-plus/packages/components/carousel/src/carousel.vue"]]);const ut=de({name:{type:String,default:""},label:{type:[String,Number],default:""}}),ct={name:"ElCarouselItem"},vt=ce(Y(Q({},ct),{props:ut,setup(c){const u=c,l=pe("carousel"),a=Ue(ge),i=We(),w=.83,n=p(!1),h=p(0),_=p(1),g=p(!1),v=p(!1),k=p(!1),M=p(!1),{isCardType:N,isVertical:V}=a,L=S(()=>{const o=`${`translate${t(V)?"Y":"X"}`}(${t(h)}px)`,f=`scale(${t(_)})`;return{transform:[o,f].join(" ")}});function $(r,o,f){const d=f-1,E=o-1,B=o+1,b=f/2;return o===0&&r===d?-1:o===d&&r===0?f:r<E&&o-r>=b?f+1:r>B&&r-o>=b?-2:r}function D(r,o){var f;const d=((f=a.root.value)==null?void 0:f.offsetWidth)||0;return k.value?d*((2-w)*(r-o)+1)/4:r<o?-(1+w)*d/4:(3+w)*d/4}function X(r,o,f){const d=a.root.value;return d?((f?d.offsetHeight:d.offsetWidth)||0)*(r-o):0}const O=(r,o,f)=>{var d;const E=t(N),B=(d=a.items.value.length)!=null?d:Number.NaN,b=r===o;!E&&!Ge(f)&&(M.value=b||r===f),!b&&B>2&&a.loop&&(r=$(r,o,B));const G=t(V);g.value=b,E?(k.value=Math.round(Math.abs(r-o))<=1,h.value=D(r,o),_.value=t(g)?1:w):h.value=X(r,o,G),v.value=!0};function R(){if(a&&t(N)){const r=a.items.value.findIndex(({uid:o})=>o===i.uid);a.setActiveItem(r)}}return ve(()=>{a.addItem({props:u,states:je({hover:n,translate:h,scale:_,active:g,ready:v,inStage:k,animating:M}),uid:i.uid,translateItem:O})}),Fe(()=>{a.removeItem(i.uid)}),(r,o)=>W((I(),T("div",{class:C([t(l).e("item"),t(l).is("active",g.value),t(l).is("in-stage",k.value),t(l).is("hover",n.value),t(l).is("animating",M.value),{[t(l).em("item","card")]:t(N)}]),style:me(t(L)),onClick:R},[t(N)?W((I(),T("div",{key:0,class:C(t(l).e("mask"))},null,2)),[[K,!g.value]]):H("v-if",!0),fe(r.$slots,"default")],6)),[[K,v.value]])}}));var ye=he(vt,[["__file","/home/runner/work/element-plus/element-plus/packages/components/carousel/src/carousel-item.vue"]]);const ht=Je(it,{CarouselItem:ye}),gt=Qe(ye);export{gt as E,ht as a};
