import{r as B}from"./utils-85b1d591.js";import{I as v,bL as d,h as p,r as m,aU as D,o as a,j as l,d as s,F as i,k as u,n as h,b4 as _,e as T,i as f,a as k,bx as F}from"./index-3f7713bc.js";const V={class:"navs bf"},j={class:"nav-left"},E=["onClick"],J={class:"nav-box"},S={class:"nav-top"},U=["onClick"],q={class:"nav-title"},A={class:"nav-list"},G=["onClick"],H={alt:""},R={__name:"Index",setup(K){const C=v(()=>e=>B(e)),b=d.map(e=>e.title),y=v(()=>d[c.value].nav.map(e=>e.title)),c=p(0),r=p(0),L=v(()=>d[c.value].nav[r.value].nav),x=e=>{c.value=e,r.value=0},I=e=>{r.value=e},N=e=>{window.open(e.url,"_blank")};return(e,M)=>{const $=m("a-tooltip"),g=m("perfect-scrollbar"),w=D("lazyload");return a(),l("div",V,[s("div",j,[s("ul",null,[(a(!0),l(i,null,u(T(b),(o,t)=>(a(),l("li",{class:h({active:c.value===t}),key:t,onClick:n=>x(t)},_(o),11,E))),128))])]),s("div",J,[s("div",S,[s("ul",null,[(a(!0),l(i,null,u(y.value,(o,t)=>(a(),l("li",{class:h({active:r.value===t}),key:t,onClick:n=>I(t)},_(o),11,U))),128))])]),f(g,{class:"scroll-bar"},{default:k(()=>[(a(!0),l(i,null,u(L.value,(o,t)=>(a(),l("div",{class:"nav-box",key:t},[s("p",q,_(o.title),1),s("ul",A,[(a(!0),l(i,null,u(o.nav,(n,z)=>(a(),l("li",{key:z,onClick:O=>N(n)},[f($,{title:`${n.name}：${n.desc}`,placement:"topLeft"},{default:k(()=>[F(s("img",H,null,512),[[w,C.value(n.url)]]),s("p",null,_(n.name),1)]),_:2},1032,["title"])],8,G))),128))])]))),128))]),_:1})])])}}};export{R as default};