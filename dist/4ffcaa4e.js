import{r as P,C as Q,L as T,M as m,o as l,H as C,a as c,O as N}from"./903daaf2.js";var p;const x=typeof window<"u",O=e=>typeof e=="function";x&&(p=window?.navigator)!=null&&p.userAgent&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function S(e,t=!1,a="Timeout"){return new Promise((n,o)=>{setTimeout(t?()=>o(a):n,e)})}function j(e){return e}function _(e,t){let a,n,o;const s=P(!0),u=()=>{s.value=!0,o()};Q(e,u,{flush:"sync"});const v=O(t)?t:t.get,i=O(t)?void 0:t.set,r=T((w,h)=>(n=w,o=h,{get(){return s.value&&(a=v(),s.value=!1),n(),a},set(E){i?.(E)}}));return Object.isExtensible(r)&&(r.trigger=u),r}const g=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},f="__vueuse_ssr_handlers__";g[f]=g[f]||{};function y(){const e=C(),t=_(()=>null,()=>e.proxy.$el);return m(t.trigger),l(t.trigger),t}var b;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(b||(b={}));var B=Object.defineProperty,d=Object.getOwnPropertySymbols,H=Object.prototype.hasOwnProperty,L=Object.prototype.propertyIsEnumerable,I=(e,t,a)=>t in e?B(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,R=(e,t)=>{for(var a in t||(t={}))H.call(t,a)&&I(e,a,t[a]);if(d)for(var a of d(t))L.call(t,a)&&I(e,a,t[a]);return e};const W={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};R({linear:j},W);const k=e=>{l(()=>{var t,a;const n=((a=(t=y().value)==null?void 0:t.getRootNode)==null?void 0:a.call(t)).host;n.style.setProperty("--width",e[0].toString()),n.style.setProperty("--height",e[1].toString())})},A=()=>({bridge:c[N]}),G=()=>{const e=c.VIEW,t=e.properties;return{layout:e.layout,properties:t,view:e}};export{G as a,k as b,A as c,S as p,y as u};
