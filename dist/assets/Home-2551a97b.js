import{j as L,k as N,u as x,l as P,_ as A,m as V,n as q,r as _,b as E,o as f,g as v,p as D,f as w,w as S,e as g,S as F,q as H,v as R,F as $,h as T,t as W,x as G,y as j}from"./index-ebd25017.js";function M(t){return L()?(N(t),!0):!1}function B(t){return typeof t=="function"?t():x(t)}const z=typeof window<"u"&&typeof document<"u",U=Object.prototype.toString,Q=t=>U.call(t)==="[object Object]",C=()=>{},J=K();function K(){var t;return z&&((t=window==null?void 0:window.navigator)==null?void 0:t.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent)}function y(t){var c;const a=B(t);return(c=a==null?void 0:a.$el)!=null?c:a}const I=z?window:void 0;function k(...t){let c,a,s,u;if(typeof t[0]=="string"||Array.isArray(t[0])?([a,s,u]=t,c=I):[c,a,s,u]=t,!c)return C;Array.isArray(a)||(a=[a]),Array.isArray(s)||(s=[s]);const l=[],p=()=>{l.forEach(r=>r()),l.length=0},h=(r,o,e,n)=>(r.addEventListener(o,e,n),()=>r.removeEventListener(o,e,n)),m=P(()=>[y(c),B(u)],([r,o])=>{if(p(),!r)return;const e=Q(o)?{...o}:o;l.push(...a.flatMap(n=>s.map(i=>h(r,n,i,e))))},{immediate:!0,flush:"post"}),b=()=>{m(),p()};return M(b),b}let O=!1;function X(t,c,a={}){const{window:s=I,ignore:u=[],capture:l=!0,detectIframe:p=!1}=a;if(!s)return;J&&!O&&(O=!0,Array.from(s.document.body.children).forEach(e=>e.addEventListener("click",C)),s.document.documentElement.addEventListener("click",C));let h=!0;const m=e=>u.some(n=>{if(typeof n=="string")return Array.from(s.document.querySelectorAll(n)).some(i=>i===e.target||e.composedPath().includes(i));{const i=y(n);return i&&(e.target===i||e.composedPath().includes(i))}}),r=[k(s,"click",e=>{const n=y(t);if(!(!n||n===e.target||e.composedPath().includes(n))){if(e.detail===0&&(h=!m(e)),!h){h=!0;return}c(e)}},{passive:!0,capture:l}),k(s,"pointerdown",e=>{const n=y(t);n&&(h=!e.composedPath().includes(n)&&!m(e))},{passive:!0}),p&&k(s,"blur",e=>{setTimeout(()=>{var n;const i=y(t);((n=s.document.activeElement)==null?void 0:n.tagName)==="IFRAME"&&!(i!=null&&i.contains(s.document.activeElement))&&c(e)},0)})].filter(Boolean);return()=>r.forEach(e=>e())}const Y={class:"search-box"},Z={key:0,class:"bg-blur"},ee=["src"],te=["onClick"],se=["src"],ne={__name:"SearchBox",setup(t){const{useSystemStore:c}=V(),a=q([{label:"百度",value:"https://www.baidu.com",icon:"./images/icons/baidu.png"},{label:"谷歌",value:"https://www.google.com",icon:"./images/icons/guge.png"},{label:"必应",value:"https://cn.bing.com",icon:"./images/icons/bing.png"},{label:"知乎",value:"https://www.zhihu.com",icon:"./images/icons/zhihu.png"},{label:"掘金",value:"https://juejin.cn",icon:"./images/icons/juejin.png"},{label:"博客园",value:"https://zzk.cnblogs.com",icon:"./images/icons/bokeyuan.png"},{label:"CSDN",value:"https://so.csdn.net/so",icon:"./images/icons/csdn.png"},{label:"GitHub",value:"https://github.com",icon:"./images/icons/github.png"},{label:"Gitee",value:"https://search.gitee.com",icon:"./images/icons/gitee.png"},{label:"Bilibili",value:"https://search.bilibili.com/all",icon:"./images/icons/bilibili.png"}]),s=_(null),u=_(!1),l=_(c.searchType),p=_(""),h=_(!1);X(s,()=>{u.value=!1});const m=()=>{u.value=!0},b=o=>{l.value=o.value,u.value=!1,c.searchType=o.value},r=()=>{const o=l.value;if(!p.value)window.open(o,"_blank");else{let e="/s?wd=";["https://www.google.com","https://www.zhihu.com","https://so.csdn.net/so","https://cn.bing.com","https://github.com"].indexOf(o)>=0?e="/search?q=":["https://juejin.cn"].indexOf(o)>=0?e="/search?query=":["https://zzk.cnblogs.com"].indexOf(o)>=0?e="/s?w=":["https://search.gitee.com"].indexOf(o)>=0?e="/?q=":["https://search.bilibili.com/all"].indexOf(o)>=0&&(e="/?keyword="),window.open(`${o}${e}${p.value}`,"_blank"),p.value=""}};return(o,e)=>{const n=E("a-tooltip"),i=E("a-input");return f(),v("div",Y,[h.value?(f(),v("div",Z)):D("",!0),w(i,{class:"search",value:p.value,"onUpdate:value":e[0]||(e[0]=d=>p.value=d),placeholder:"请输入搜索内容",onFocus:e[1]||(e[1]=d=>h.value=!0),onBlur:e[2]||(e[2]=d=>h.value=!1),onPressEnter:r},{addonBefore:S(()=>[w(n,{title:"点击切换搜索源"},{default:S(()=>[g("img",{src:a.find(d=>d.value===x(c).searchType).icon,alt:"",onClick:m},null,8,ee)]),_:1})]),suffix:S(()=>[w(x(F),{onClick:r,style:{fontSize:"18px"}})]),_:1},8,["value"]),H(g("div",{ref_key:"searchTypeRef",ref:s,class:"search-types bf"},[(f(!0),v($,null,T(a,d=>(f(),v("div",{class:W(["search-type",{active:l.value===d.value}]),key:d.value,onClick:ue=>b(d)},[g("img",{src:d.icon,alt:""},null,8,se),G(" "+j(d.label),1)],10,te))),128))],512),[[R,u.value]])])}}},oe=A(ne,[["__scopeId","data-v-93ce28a4"]]);const ae={class:"home"},ce={class:"apps-box"},le=["onClick"],ie=["src"],re={__name:"Home",setup(t){const c=_([{label:"摸鱼日报",value:"moyu",icon:"./images/apps/moyu.png"},{label:"60s读懂世界",value:"60s",icon:"./images/apps/60s.png"}]),a=s=>{console.log(s)};return(s,u)=>(f(),v("div",ae,[w(oe),g("div",ce,[(f(!0),v($,null,T(c.value,l=>(f(),v("div",{class:"app bf",key:l.value,onClick:p=>a(l)},[g("img",{src:l.icon,alt:""},null,8,ie),g("p",null,j(l.label),1)],8,le))),128))])]))}},de=A(re,[["__scopeId","data-v-5a689eb6"]]);export{de as default};
