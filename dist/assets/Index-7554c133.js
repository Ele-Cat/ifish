import{e as T,m as R,t as J,q as K,s as Z,v as ee,h as g,x as U,w as te,_ as M,u as ne,y as se,r as P,o as b,j as w,z as oe,i as S,a as O,d as E,S as ae,A as le,B as ie,F as W,k as G,n as re,C as ce,D as H,f as q,g as F,c as ue,l as pe}from"./index-53d1173d.js";function ve(t){return Z()?(ee(t),!0):!1}function _(t){return typeof t=="function"?t():T(t)}const V=typeof window<"u"&&typeof document<"u",de=Object.prototype.toString,fe=t=>de.call(t)==="[object Object]",B=()=>{},ge=me();function me(){var t;return V&&((t=window==null?void 0:window.navigator)==null?void 0:t.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent)}function he(t,i={}){if(!R(t))return J(t);const l=Array.isArray(t.value)?Array.from({length:t.value.length}):{};for(const s in t.value)l[s]=K(()=>({get(){return t.value[s]},set(r){var v;if((v=_(i.replaceRef))!=null?v:!0)if(Array.isArray(t.value)){const u=[...t.value];u[s]=r,t.value=u}else{const u={...t.value,[s]:r};Object.setPrototypeOf(u,Object.getPrototypeOf(t.value)),t.value=u}else t.value[s]=r}}));return l}function C(t){var i;const l=_(t);return(i=l==null?void 0:l.$el)!=null?i:l}const z=V?window:void 0;function k(...t){let i,l,s,r;if(typeof t[0]=="string"||Array.isArray(t[0])?([l,s,r]=t,i=z):[i,l,s,r]=t,!i)return B;Array.isArray(l)||(l=[l]),Array.isArray(s)||(s=[s]);const v=[],d=()=>{v.forEach(p=>p()),v.length=0},u=(p,n,e,o)=>(p.addEventListener(n,e,o),()=>p.removeEventListener(n,e,o)),m=te(()=>[C(i),_(r)],([p,n])=>{if(d(),!p)return;const e=fe(n)?{...n}:n;v.push(...l.flatMap(o=>s.map(c=>u(p,o,c,e))))},{immediate:!0,flush:"post"}),h=()=>{m(),d()};return ve(h),h}let j=!1;function _e(t,i,l={}){const{window:s=z,ignore:r=[],capture:v=!0,detectIframe:d=!1}=l;if(!s)return;ge&&!j&&(j=!0,Array.from(s.document.body.children).forEach(e=>e.addEventListener("click",B)),s.document.documentElement.addEventListener("click",B));let u=!0;const m=e=>r.some(o=>{if(typeof o=="string")return Array.from(s.document.querySelectorAll(o)).some(c=>c===e.target||e.composedPath().includes(c));{const c=C(o);return c&&(e.target===c||e.composedPath().includes(c))}}),p=[k(s,"click",e=>{const o=C(t);if(!(!o||o===e.target||e.composedPath().includes(o))){if(e.detail===0&&(u=!m(e)),!u){u=!0;return}i(e)}},{passive:!0,capture:v}),k(s,"pointerdown",e=>{const o=C(t);o&&(u=!e.composedPath().includes(o)&&!m(e))},{passive:!0}),d&&k(s,"blur",e=>{setTimeout(()=>{var o;const c=C(t);((o=s.document.activeElement)==null?void 0:o.tagName)==="IFRAME"&&!(c!=null&&c.contains(s.document.activeElement))&&i(e)},0)})].filter(Boolean);return()=>p.forEach(e=>e())}function Be(t,i={}){var l,s;const{pointerTypes:r,preventDefault:v,stopPropagation:d,exact:u,onMove:m,onEnd:h,onStart:p,initialValue:n,axis:e="both",draggingElement:o=z,containerElement:c,handle:f=t}=i,y=g((l=_(n))!=null?l:{x:0,y:0}),x=g(),$=a=>r?r.includes(a.pointerType):!0,I=a=>{_(v)&&a.preventDefault(),_(d)&&a.stopPropagation()},X=a=>{var A;if(!$(a)||_(u)&&a.target!==_(t))return;const L=((A=_(c))!=null?A:_(t)).getBoundingClientRect(),N={x:a.clientX-L.left,y:a.clientY-L.top};(p==null?void 0:p(N,a))!==!1&&(x.value=N,I(a))},Y=a=>{if(!$(a)||!x.value)return;let{x:A,y:D}=y.value;(e==="x"||e==="both")&&(A=a.clientX-x.value.x),(e==="y"||e==="both")&&(D=a.clientY-x.value.y),y.value={x:A,y:D},m==null||m(y.value,a),I(a)},Q=a=>{$(a)&&x.value&&(x.value=void 0,h==null||h(y.value,a),I(a))};if(V){const a={capture:(s=i.capture)!=null?s:!0};k(f,"pointerdown",X,a),k(o,"pointermove",Y,a),k(o,"pointerup",Q,a)}return{...he(y),position:y,isDragging:U(()=>!!x.value),style:U(()=>`left:${y.value.x}px;top:${y.value.y}px;`)}}const ye={class:"search-box"},be={key:0,class:"bg-blur"},we=["src"],xe=["onClick"],Se=["src"],ke={__name:"SearchBox",setup(t){const{useSystemStore:i}=ne(),l=se([{label:"百度",value:"https://www.baidu.com",icon:"./images/icons/baidu.png"},{label:"谷歌",value:"https://www.google.com",icon:"./images/icons/guge.png"},{label:"必应",value:"https://cn.bing.com",icon:"./images/icons/bing.png"},{label:"知乎",value:"https://www.zhihu.com",icon:"./images/icons/zhihu.png"},{label:"掘金",value:"https://juejin.cn",icon:"./images/icons/juejin.png"},{label:"博客园",value:"https://zzk.cnblogs.com",icon:"./images/icons/bokeyuan.png"},{label:"CSDN",value:"https://so.csdn.net/so",icon:"./images/icons/csdn.png"},{label:"GitHub",value:"https://github.com",icon:"./images/icons/github.png"},{label:"Gitee",value:"https://search.gitee.com",icon:"./images/icons/gitee.png"},{label:"Bilibili",value:"https://search.bilibili.com/all",icon:"./images/icons/bilibili.png"}]),s=g(null),r=g(!1),v=g(i.searchType),d=g(""),u=g(!1);_e(s,()=>{r.value=!1});const m=()=>{r.value=!0},h=n=>{v.value=n.value,r.value=!1,i.searchType=n.value},p=()=>{const n=v.value;if(!d.value)window.open(n,"_blank");else{let e="/s?wd=";["https://www.google.com","https://www.zhihu.com","https://so.csdn.net/so","https://cn.bing.com","https://github.com"].indexOf(n)>=0?e="/search?q=":["https://juejin.cn"].indexOf(n)>=0?e="/search?query=":["https://zzk.cnblogs.com"].indexOf(n)>=0?e="/s?w=":["https://search.gitee.com"].indexOf(n)>=0?e="/?q=":["https://search.bilibili.com/all"].indexOf(n)>=0&&(e="/?keyword="),window.open(`${n}${e}${d.value}`,"_blank"),d.value=""}};return(n,e)=>{const o=P("a-tooltip"),c=P("a-input");return b(),w("div",ye,[u.value?(b(),w("div",be)):oe("",!0),S(c,{class:"search",value:d.value,"onUpdate:value":e[0]||(e[0]=f=>d.value=f),placeholder:"请输入搜索内容",onFocus:e[1]||(e[1]=f=>u.value=!0),onBlur:e[2]||(e[2]=f=>u.value=!1),onPressEnter:p},{addonBefore:O(()=>[S(o,{title:"点击切换搜索源"},{default:O(()=>[E("img",{src:l.find(f=>f.value===T(i).searchType).icon,alt:"",onClick:m},null,8,we)]),_:1})]),suffix:O(()=>[S(T(ae),{onClick:p,style:{fontSize:"18px"}})]),_:1},8,["value"]),le(E("div",{ref_key:"searchTypeRef",ref:s,class:"search-types bf"},[(b(!0),w(W,null,G(l,f=>(b(),w("div",{class:re(["search-type",{active:v.value===f.value}]),key:f.value,onClick:y=>h(f)},[E("img",{src:f.icon,alt:""},null,8,Se),ce(" "+H(f.label),1)],10,xe))),128))],512),[[ie,r.value]])])}}},Ae=M(ke,[["__scopeId","data-v-81844f60"]]);const Ce={class:"apps-box"},Ee=["onClick"],Oe=["src"],Te={__name:"Apps",setup(t){const i=q(()=>F(()=>import("./IDialog-02eace45.js"),["assets/IDialog-02eace45.js","assets/index-53d1173d.js","assets/index-6586fc83.css","assets/IDialog-83905bc8.css"])),l=q(()=>F(()=>import("./Tiangou-837631fd.js"),["assets/Tiangou-837631fd.js","assets/axios-21b846bc.js","assets/index-53d1173d.js","assets/index-6586fc83.css","assets/Tiangou-4cd24ecd.css"])),s=g([{label:"摸鱼日报",value:"moyu",icon:"./images/apps/moyu.png",imageUrl:"https://api.vvhan.com/api/moyu"},{label:"60s读懂世界",value:"60s",icon:"./images/apps/60s.png",imageUrl:"https://api.vvhan.com/api/60s"},{label:"舔狗日记",value:"tiangou",icon:"./images/apps/tiangou.png",component:l}]),r=g(!1),v=g(!1),d=g(""),u=g(""),m=g(null),h=n=>{console.log(n),["moyu","60s"].includes(n.value)?(d.value=n.imageUrl,p(!0)):["tiangou"].includes(n.value)&&(m.value=n.component,u.value=n.label,r.value=!0)},p=n=>{v.value=n};return(n,e)=>{const o=P("a-image");return b(),w("div",Ce,[(b(!0),w(W,null,G(s.value,c=>(b(),w("div",{class:"app bf",key:c.value,onClick:f=>h(c)},[E("img",{src:c.icon,alt:""},null,8,Oe),E("p",null,H(c.label),1)],8,Ee))),128)),S(T(i),{title:u.value,visible:r.value,onOk:e[0]||(e[0]=c=>r.value=!1),onCancel:e[1]||(e[1]=c=>r.value=!1)},{default:O(()=>[(b(),ue(pe(m.value)))]),_:1},8,["title","visible"]),S(o,{width:200,style:{width:"0",height:"0"},preview:{visible:v.value,onVisibleChange:p},src:d.value},null,8,["preview","src"])])}}},$e=M(Te,[["__scopeId","data-v-9e110ce3"]]),Ie={class:"home"},De={__name:"Index",setup(t){return(i,l)=>(b(),w("div",Ie,[S(Ae),S($e)]))}},Ve=Object.freeze(Object.defineProperty({__proto__:null,default:De},Symbol.toStringTag,{value:"Module"}));export{Ve as I,Be as u};
