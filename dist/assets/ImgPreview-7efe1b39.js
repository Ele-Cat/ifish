import{q as n,r,h as o,i as p,s as i,l as m,j as u,p as g,v,F as d}from"./index-818f6046.js";const f=["src","onClick"],h=["src"],b={__name:"ImgPreview",props:{type:{type:String,default:"use"},app:{type:Object,default:()=>{}}},setup(e){const a=n(!1),l=()=>{s(!0)},s=t=>{a.value=t};return(t,_)=>{const c=r("a-image");return o(),p(d,null,[i("img",{class:"app-img",src:e.app.icon,alt:"",onClick:m(l,["stop"])},null,8,f),u(c,{preview:{visible:a.value,onVisibleChange:s},src:e.app.url},null,8,["preview","src"]),g(i("img",{src:e.app.url,alt:""},null,8,h),[[v,!1]])],64)}}};export{b as default};
