import{D as _}from"./vuedraggable.umd-701cb00e.js";import{_ as n,u as d}from"./App-9be516e4.js";import{r,h as p,i as h,j as a,k as u,q as t,z as g,u as o,L as m,M as w}from"./index-c1c08e54.js";const k=e=>(m("data-v-252d0a42"),e=e(),w(),e),v={class:"settings-news"},b=k(()=>t("p",{class:"title"},"支持拖拽排序、是否启用",-1)),f={class:"news-item"},S={__name:"SettingsNews",setup(e){const{useNewsStore:c}=d();return(x,N)=>{const i=r("a-switch");return p(),h("div",v,[b,a(o(_),{list:o(c).lists,animation:100,"item-key":"id",class:"list-group news-box",forceFallback:!0,"ghost-class":"ghost","fallback-tolerance":8,delay:10},{item:u(({element:s})=>[t("div",f,[t("p",null,g(s.label),1),a(i,{checked:s.visible,"onUpdate:checked":l=>s.visible=l,title:`${s.visible?"关闭":"启用"} ${s.label}`},null,8,["checked","onUpdate:checked","title"])])]),_:1},8,["list"])])}}},D=n(S,[["__scopeId","data-v-252d0a42"]]);export{D as default};