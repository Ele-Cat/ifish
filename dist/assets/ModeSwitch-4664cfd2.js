import{u as n}from"./App-d5c81cd4.js";import{w as r,r as c,h as l,B as m,k as d,q as u,x as h,u as o}from"./index-d011c746.js";const g={__name:"ModeSwitch",setup(f){const{useSystemStore:e}=n();let s=document.documentElement;r(()=>e.settings.darkMode,t=>{t&&s.setAttribute("theme","dark")},{immediate:!0});const a=()=>{e.changeMode()};return(t,p)=>{const i=c("a-tooltip");return l(),m(i,{title:`切换为${o(e).settings.darkMode?"日间":"夜间"}模式`,placement:"left"},{default:d(()=>[u("i",{class:h(["ifishfont mode-switch-icon",[o(e).settings.darkMode?"ifish-dark":"ifish-light"]]),onClick:a},null,2)]),_:1},8,["title"])}}};export{g as default};
