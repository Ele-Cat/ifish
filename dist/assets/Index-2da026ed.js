import{r as B}from"./utils-7dc22624.js";import{n as p}from"./nav-8caf7704.js";import{u as D}from"./App-d5c81cd4.js";import{E as C,p as m,w as S,I as A,r as y,O as E,h as a,i as l,q as s,F as u,s as v,u as F,j as f,k as h,x as g,z as _,n as V}from"./index-d011c746.js";const j={class:"navs bf"},q={class:"nav-left"},J=["onClick"],O={class:"nav-box"},G={class:"nav-top"},H=["onClick"],K={class:"nav-title"},M={class:"nav-list"},P=["onClick"],Q={alt:""},te={__name:"Index",setup(R){const{useNavStore:i}=D(),b=C(()=>e=>B(e)),w=p.map(e=>e.title),L=C(()=>p[n.value].nav.map(e=>e.title)),n=m(i.active[0]||0),r=m(i.active[1]||0),d=m([]);S(()=>[n.value,r.value],()=>{d.value=[],A(()=>{d.value=p[n.value].nav[r.value].nav})},{immediate:!0,deep:!0});const N=e=>{n.value=e,r.value=0,i.toggleActive(e,0)},I=e=>{r.value=e,i.toggleActive(n.value,e)},$=e=>{window.open(e.url,"_blank")};return(e,U)=>{const k=y("perfect-scrollbar"),x=y("a-tooltip"),z=E("lazyload");return a(),l("div",j,[s("div",q,[s("ul",null,[(a(!0),l(u,null,v(F(w),(c,t)=>(a(),l("li",{class:g({active:n.value===t}),key:t,onClick:o=>N(t)},_(c),11,J))),128))])]),s("div",O,[s("div",G,[f(k,null,{default:h(()=>[s("ul",null,[(a(!0),l(u,null,v(L.value,(c,t)=>(a(),l("li",{class:g({active:r.value===t}),key:t,onClick:o=>I(t)},_(c),11,H))),128))])]),_:1})]),f(k,{class:"scroll-bar"},{default:h(()=>[(a(!0),l(u,null,v(d.value,(c,t)=>(a(),l("div",{class:"nav-box",key:t},[s("p",K,_(c.title),1),s("ul",M,[(a(!0),l(u,null,v(c.nav,(o,T)=>(a(),l("li",{key:T,onClick:W=>$(o)},[f(x,{title:o.desc&&`${o.name}：${o.desc}`,placement:"topLeft"},{default:h(()=>[V(s("img",Q,null,512),[[z,b.value(o.url)]]),s("p",null,_(o.name),1)]),_:2},1032,["title"])],8,P))),128))])]))),128))]),_:1})])])}}};export{te as default};
