import{D as _}from"./vuedraggable.umd-bc81d91a.js";import{_ as n,u as d,a as p,o as r,b as h,c as a,g as u,f as t,t as g,d as o,p as w,m as b}from"./index-07920f2d.js";const m=e=>(w("data-v-252d0a42"),e=e(),b(),e),v={class:"settings-news"},f=m(()=>t("p",{class:"title"},"支持拖拽排序、是否启用",-1)),k={class:"news-item"},S={__name:"SettingsNews",setup(e){const{useNewsStore:c}=d();return(x,N)=>{const i=p("a-switch");return r(),h("div",v,[f,a(o(_),{list:o(c).lists,animation:100,"item-key":"id",class:"list-group news-box",forceFallback:!0,"ghost-class":"ghost","fallback-tolerance":8,delay:10},{item:u(({element:s})=>[t("div",k,[t("p",null,g(s.label),1),a(i,{checked:s.visible,"onUpdate:checked":l=>s.visible=l,title:`${s.visible?"关闭":"启用"} ${s.label}`},null,8,["checked","onUpdate:checked","title"])])]),_:1},8,["list"])])}}},B=n(S,[["__scopeId","data-v-252d0a42"]]);export{B as default};
