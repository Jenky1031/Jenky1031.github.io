import{A as t,_ as u,Z as L}from"./vendor.3b9415e3.js";function S({selector:n,sliderId:a,index:d}){const e=t(d),o=t(0),s=t([]),l=()=>{const i=document.getElementById(a).offsetWidth;document.querySelectorAll(n).forEach((c,f)=>{s.value[f]=c.offsetLeft+(c.offsetWidth-i)/2})},r=()=>{o.value=s.value[e.value]};return u(()=>{l(),r()}),L(e,()=>{r()}),{activeIndex:e,sliderLeft:o}}export{S as u};
