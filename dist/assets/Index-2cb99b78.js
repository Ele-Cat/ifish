import{b as o,e as s,q as _,f as i,h as t,C as l,k as p,s as g,j as I,i as x,F as E,t as D,K as k,H as B}from"./index-b57193e6.js";import{_ as V,e as A}from"./App-c7202ba9.js";const C={class:"wallpaper"},K={__name:"Index",setup(P){const c=o(()=>s(()=>import("./WallpaperBasic-dfe01fb2.js"),["assets/WallpaperBasic-dfe01fb2.js","assets/App-c7202ba9.js","assets/index-b57193e6.js","assets/index-e3dd4629.css","assets/App-e46b25bc.css","assets/WallpaperBasic-e22593e9.css"])),v=o(()=>s(()=>import("./WallpaperDynamics-28d8ca0e.js"),["assets/WallpaperDynamics-28d8ca0e.js","assets/App-c7202ba9.js","assets/index-b57193e6.js","assets/index-e3dd4629.css","assets/App-e46b25bc.css","assets/WallpaperDynamics-47c8395a.css"])),u=o(()=>s(()=>import("./WallpaperPure-5cf1a6bf.js"),["assets/WallpaperPure-5cf1a6bf.js","assets/App-c7202ba9.js","assets/index-b57193e6.js","assets/index-e3dd4629.css","assets/App-e46b25bc.css","assets/WallpaperPure-33516cbb.css"])),d=o(()=>s(()=>import("./WallpaperSetting-c7495358.js"),["assets/WallpaperSetting-c7495358.js","assets/App-c7202ba9.js","assets/index-b57193e6.js","assets/index-e3dd4629.css","assets/App-e46b25bc.css","assets/WallpaperSetting-fefda111.css"])),n=_(!1);A.on("openBgSettings",()=>{n.value=!0});const r=_("basic"),m=_([{label:"精选壁纸",value:"basic",component:c},{label:"动态壁纸",value:"dynamics",component:v},{label:"纯色壁纸",value:"pure",component:u},{label:"壁纸设置",value:"setting",component:d}]);return(L,a)=>{const b=i("a-tab-pane"),f=i("a-tabs"),y=i("IDialog");return t(),l(y,{title:"桌面壁纸设置",width:800,mask:!1,visible:n.value,onOk:a[1]||(a[1]=e=>n.value=!1),onCancel:a[2]||(a[2]=e=>n.value=!1)},{default:p(()=>[g("div",C,[I(f,{activeKey:r.value,"onUpdate:activeKey":a[0]||(a[0]=e=>r.value=e),"tab-position":"left",style:{minHeight:"394px"}},{default:p(()=>[(t(!0),x(E,null,D(m.value,e=>(t(),l(b,{key:e.value,tab:e.label},{default:p(()=>[(t(),l(k,null,[(t(),l(B(e.component)))],1024))]),_:2},1032,["tab"]))),128))]),_:1},8,["activeKey"])])]),_:1},8,["visible"])}}},T=V(K,[["__scopeId","data-v-2a54d2bc"]]);export{T as default};