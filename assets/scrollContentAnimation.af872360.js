import{u as i}from"./scroll.6452b8c6.js";function u(){i(l);function l(){o()}function o(){document.querySelectorAll(".js-scroll").forEach(n=>{t(n,100)&&c(n)})}function t(e,n=0){return e.getBoundingClientRect().top<=(window.innerHeight||document.documentElement.clientHeight)-n}function c(e){e.classList.add("scrolled")}}export{u};
