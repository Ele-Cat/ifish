import{_,h as p,r as d,o as r,j as g,d as t,bA as v,i as f,a as m,b4 as b,F as h,bH as k,p as x,b as I}from"./index-c3abd06a.js";const y="/ifish/images/apps/tiangou.jpg";const u=o=>(x("data-v-08b2f151"),o=o(),I(),o),C=["src"],T={class:"tiangou"},S=u(()=>t("img",{src:y,alt:""},null,-1)),j={class:"text"},w=u(()=>t("p",null,"宝",-1)),B={__name:"Tiangou",props:{app:{type:Object,default:()=>{}}},setup(o){const s=p(!1),i=p(""),n=()=>{k.get("https://api.moyuduck.com/tiangou").then(a=>{i.value=a.data.data})};return n(),(a,e)=>{const c=d("IDialog");return r(),g(h,null,[t("img",{src:o.app.icon,alt:"",onClick:e[0]||(e[0]=v(l=>s.value=!0,["stop"]))},null,8,C),f(c,{title:a.dialogTitle,visible:s.value,onOk:e[1]||(e[1]=l=>s.value=!1),onCancel:e[2]||(e[2]=l=>s.value=!1)},{default:m(()=>[t("div",T,[S,t("div",j,[w,t("p",null,b(i.value),1)]),t("button",{title:"继续舔",onClick:n})])]),_:1},8,["title","visible"])],64)}}},V=_(B,[["__scopeId","data-v-08b2f151"]]);export{V as default};
