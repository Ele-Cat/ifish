import{_ as g,u as w,t as x}from"./App-cceafc19.js";import{q as b,f as o,h as u,i as c,j as a,k as l,u as p,F as S,t as k,C as y,z as C,B}from"./index-76246b87.js";const W={class:"wallpaper-setting"},U={__name:"WallpaperSetting",setup(F){const{useSystemStore:s}=w(),n=b({...s.settings}),i={style:{width:"88px"}},m=()=>{x({content:"修改源成功"})};return(L,t)=>{const _=o("a-slider"),r=o("a-form-item"),d=o("a-select-option"),v=o("a-select"),f=o("a-form");return u(),c("div",W,[a(f,{model:n.value,"label-col":i},{default:l(()=>[a(r,{label:"遮罩"},{default:l(()=>[a(_,{min:0,max:100,value:p(s).settings.wallpaper.mask,"onUpdate:value":t[0]||(t[0]=e=>p(s).settings.wallpaper.mask=e)},null,8,["value"])]),_:1}),a(r,{label:"模糊"},{default:l(()=>[a(_,{min:0,max:100,value:p(s).settings.wallpaper.blur,"onUpdate:value":t[1]||(t[1]=e=>p(s).settings.wallpaper.blur=e)},null,8,["value"])]),_:1}),a(r,{label:"随机背景源"},{default:l(()=>[a(v,{value:n.value.wallpaper.action,"onUpdate:value":t[2]||(t[2]=e=>n.value.wallpaper.action=e),onChange:m},{default:l(()=>[(u(!0),c(S,null,k(n.value.wallpaper.actionList,e=>(u(),y(d,{key:e.value,value:e.value},{default:l(()=>[C(B(e.label),1)]),_:2},1032,["value"]))),128))]),_:1},8,["value"])]),_:1})]),_:1},8,["model"])])}}},h=g(U,[["__scopeId","data-v-5a5f5c5c"]]);export{h as default};
