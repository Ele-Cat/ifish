import{_ as m,u as y,h as v,bL as g,I as h,r as f,aU as k,o,j as n,F as S,k as x,i as b,a as C,bx as I,d as l,b4 as L,bK as T}from"./index-af3c2075.js";import{r as i,u as z}from"./utils-85b1d591.js";const B={class:"system-tags"},D=["onClick"],w=["alt"],F={__name:"SystemTags",setup(N){const{useAppStore:_}=y(),r=v([]);g.map(e=>{e.nav.map(c=>{c.nav.map(s=>{s.nav.map(a=>{r.value.push(a)})})})});const p=h(()=>e=>i(e)),d=e=>{_.lists.push({id:z(21),type:"bookmark",title:e.name,url:e.url,icon:i(e.url),description:e.desc,gridSize:[1,1]}),T({content:"添加成功"})};return(e,c)=>{const s=f("a-tooltip"),a=k("lazyload");return o(),n("div",B,[(o(!0),n(S,null,x(r.value,(t,u)=>(o(),n("div",{class:"system-tag",key:u,onClick:V=>d(t)},[b(s,{title:t.desc,placement:"topLeft"},{default:C(()=>[I(l("img",{alt:t.name},null,8,w),[[a,p.value(t.url)]]),l("p",null,L(t.name),1)]),_:2},1032,["title"])],8,D))),128))])}}},E=m(F,[["__scopeId","data-v-943ace50"]]);export{E as default};
