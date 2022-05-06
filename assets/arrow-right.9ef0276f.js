import{_ as L}from"./base.13ebb5a2.js";import{d as k,o as E,c as B,a as C}from"./index.bb0c295b.js";var F=typeof global=="object"&&global&&global.Object===Object&&global,G=F,z=typeof self=="object"&&self&&self.Object===Object&&self,U=G||z||Function("return this")(),A=U,D=A.Symbol,p=D,M=Object.prototype,H=M.hasOwnProperty,V=M.toString,g=p?p.toStringTag:void 0;function X(e){var t=H.call(e,g),r=e[g];try{e[g]=void 0;var o=!0}catch{}var a=V.call(e);return o&&(t?e[g]=r:delete e[g]),a}var q=Object.prototype,J=q.toString;function K(e){return J.call(e)}var Q="[object Null]",Y="[object Undefined]",O=p?p.toStringTag:void 0;function Z(e){return e==null?e===void 0?Y:Q:O&&O in Object(e)?X(e):K(e)}function ee(e){return e!=null&&typeof e=="object"}var te="[object Symbol]";function ne(e){return typeof e=="symbol"||ee(e)&&Z(e)==te}var re=/\s/;function ie(e){for(var t=e.length;t--&&re.test(e.charAt(t)););return t}var oe=/^\s+/;function ae(e){return e&&e.slice(0,ie(e)+1).replace(oe,"")}function T(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}var w=0/0,ce=/^[-+]0x[0-9a-f]+$/i,se=/^0b[01]+$/i,fe=/^0o[0-7]+$/i,ue=parseInt;function I(e){if(typeof e=="number")return e;if(ne(e))return w;if(T(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=T(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=ae(e);var r=se.test(e);return r||fe.test(e)?ue(e.slice(2),r?2:8):ce.test(e)?w:+e}var de=function(){return A.Date.now()},y=de,le="Expected a function",me=Math.max,ge=Math.min;function we(e,t,r){var o,a,s,u,i,f,d=0,$=!1,l=!1,h=!0;if(typeof e!="function")throw new TypeError(le);t=I(t)||0,T(r)&&($=!!r.leading,l="maxWait"in r,s=l?me(I(r.maxWait)||0,t):s,h="trailing"in r?!!r.trailing:h);function v(n){var c=o,m=a;return o=a=void 0,d=n,u=e.apply(m,c),u}function N(n){return d=n,i=setTimeout(b,t),$?v(n):u}function R(n){var c=n-f,m=n-d,x=t-c;return l?ge(x,s-m):x}function j(n){var c=n-f,m=n-d;return f===void 0||c>=t||c<0||l&&m>=s}function b(){var n=y();if(j(n))return S(n);i=setTimeout(b,R(n))}function S(n){return i=void 0,h&&o?v(n):(o=a=void 0,u)}function W(){i!==void 0&&clearTimeout(i),d=0,o=f=a=i=void 0}function P(){return i===void 0?u:S(y())}function _(){var n=y(),c=j(n);if(o=arguments,a=this,f=n,c){if(i===void 0)return N(f);if(l)return clearTimeout(i),i=setTimeout(b,t),v(f)}return i===void 0&&(i=setTimeout(b,t)),u}return _.cancel=W,_.flush=P,_}const be=k({name:"ArrowLeft"}),pe={viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},he=C("path",{fill:"currentColor",d:"M609.408 149.376 277.76 489.6a32 32 0 0 0 0 44.672l331.648 340.352a29.12 29.12 0 0 0 41.728 0 30.592 30.592 0 0 0 0-42.752L339.264 511.936l311.872-319.872a30.592 30.592 0 0 0 0-42.688 29.12 29.12 0 0 0-41.728 0z"},null,-1),ve=[he];function _e(e,t,r,o,a,s){return E(),B("svg",pe,ve)}var Ie=L(be,[["render",_e]]);const ye=k({name:"ArrowRight"}),Te={viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},$e=C("path",{fill:"currentColor",d:"M340.864 149.312a30.592 30.592 0 0 0 0 42.752L652.736 512 340.864 831.872a30.592 30.592 0 0 0 0 42.752 29.12 29.12 0 0 0 41.728 0L714.24 534.336a32 32 0 0 0 0-44.672L382.592 149.376a29.12 29.12 0 0 0-41.728 0z"},null,-1),je=[$e];function Se(e,t,r,o,a,s){return E(),B("svg",Te,je)}var Le=L(ye,[["render",Se]]);export{p as S,Ie as a,Le as b,ne as c,we as d,Z as e,ee as f,G as g,T as i,A as r};
