import{u as i,g as c,a as r,o as l,i as d,w as m,h,n as u,e as o}from"./index-c9e4a597.js";const k={__name:"ModeSwitch",setup(_){const{useSystemStore:e}=i();let s=document.documentElement;c(()=>e.settings.darkMode,t=>{t&&s.setAttribute("theme","dark")},{immediate:!0});const a=()=>{e.changeMode()};return(t,f)=>{const n=r("a-tooltip");return l(),d(n,{title:`切换为${o(e).settings.darkMode?"日间":"夜间"}模式`,placement:"left"},{default:m(()=>[h("i",{class:u(["ifishfont mode-switch-icon",[o(e).settings.darkMode?"ifish-dark":"ifish-light"]]),onClick:a},null,2)]),_:1},8,["title"])}}};export{k as default};
