import{q as n,f as o,h as r,i as p,s as i,l as m,j as u,p as g,v,F as f}from"./index-3bfaf213.js";const d=["src","onClick"],h=["src"],b={__name:"ImgPreview",props:{type:{type:String,default:"use"},app:{type:Object,default:()=>{}}},setup(e){const a=n(!1),l=()=>{s(!0)},s=t=>{a.value=t};return(t,_)=>{const c=o("a-image");return r(),p(f,null,[i("img",{class:"app-img",src:e.app.icon,alt:"",onClick:m(l,["stop"])},null,8,d),u(c,{preview:{visible:a.value,onVisibleChange:s},src:e.app.url},null,8,["preview","src"]),g(i("img",{src:e.app.url,alt:""},null,8,h),[[v,!1]])],64)}}};export{b as default};
