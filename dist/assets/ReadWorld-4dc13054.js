import{q as l,o as p,f as m,h as u,i as d,s as i,l as v,j as _,p as g,v as h,F as f}from"./index-bfb54d8a.js";import{a as b}from"./App-9f4ed011.js";const w=["src","onClick"],k=["src"],x={__name:"ReadWorld",props:{app:{type:Object,default:()=>{}}},setup(n){const a=l(""),s=l(!1);p(()=>{b.get("http://dwz.2xb.cn/zaob").then(e=>{const{imageUrl:o}=e.data;a.value=o})});const c=()=>{t(!0)},t=e=>{s.value=e};return(e,o)=>{const r=m("a-image");return u(),d(f,null,[i("img",{class:"app-img",src:n.app.icon,alt:"",onClick:v(c,["stop"])},null,8,w),_(r,{preview:{visible:s.value,onVisibleChange:t},src:a.value},null,8,["preview","src"]),g(i("img",{src:a.value,alt:""},null,8,k),[[h,!1]])],64)}}};export{x as default};
