import{r as B}from"./utils-7dc22624.js";import{n as p}from"./nav-8caf7704.js";import{u as D,y as C,f as m,g as S,G as A,a as y,P as F,o as a,b as l,h as s,F as u,k as v,n as g,t as _,e as V,c as f,w as h,H as E}from"./index-c9e4a597.js";const G={class:"navs bf"},H={class:"nav-left"},J=["onClick"],P={class:"nav-box"},j={class:"nav-top"},q=["onClick"],K={class:"nav-title"},M={class:"nav-list"},O=["onClick"],Q={alt:""},ee={__name:"Index",setup(R){const{useNavStore:i}=D(),b=C(()=>e=>B(e)),w=p.map(e=>e.title),N=C(()=>p[n.value].nav.map(e=>e.title)),n=m(i.active[0]||0),r=m(i.active[1]||0),d=m([]);S(()=>[n.value,r.value],()=>{d.value=[],A(()=>{d.value=p[n.value].nav[r.value].nav})},{immediate:!0,deep:!0});const L=e=>{n.value=e,r.value=0,i.toggleActive(e,0)},$=e=>{r.value=e,i.toggleActive(n.value,e)},I=e=>{window.open(e.url,"_blank")};return(e,U)=>{const k=y("perfect-scrollbar"),T=y("a-tooltip"),x=F("lazyload");return a(),l("div",G,[s("div",H,[s("ul",null,[(a(!0),l(u,null,v(V(w),(c,t)=>(a(),l("li",{class:g({active:n.value===t}),key:t,onClick:o=>L(t)},_(c),11,J))),128))])]),s("div",P,[s("div",j,[f(k,null,{default:h(()=>[s("ul",null,[(a(!0),l(u,null,v(N.value,(c,t)=>(a(),l("li",{class:g({active:r.value===t}),key:t,onClick:o=>$(t)},_(c),11,q))),128))])]),_:1})]),f(k,{class:"scroll-bar"},{default:h(()=>[(a(!0),l(u,null,v(d.value,(c,t)=>(a(),l("div",{class:"nav-box",key:t},[s("p",K,_(c.title),1),s("ul",M,[(a(!0),l(u,null,v(c.nav,(o,z)=>(a(),l("li",{key:z,onClick:W=>I(o)},[f(T,{title:o.desc&&`${o.name}：${o.desc}`,placement:"topLeft"},{default:h(()=>[E(s("img",Q,null,512),[[x,b.value(o.url)]]),s("p",null,_(o.name),1)]),_:2},1032,["title"])],8,O))),128))])]))),128))]),_:1})])])}}};export{ee as default};
