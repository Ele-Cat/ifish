import{b as t,e as s,q as T,w as L,Q as b,h as a,i as r,j as v,k as M,s as e,y as G,x as B,u as c,l as g,p as W,B as p,D as $,C as F,H as N,F as U}from"./index-79c720f7.js";import{D as j}from"./vuedraggable.umd-6ad4f475.js";import{u as q}from"./App-a102ebf9.js";const H=["onClick","onContextmenu"],Q={class:"logo",alt:""},X={key:0,class:"description"},Y=["onContextmenu"],Z={class:"title"},so={__name:"Apps",setup(J){const{useAppStore:d,useContextMenuStore:l,useSystemStore:E}=q(),k=t(()=>s(()=>import("./Index-c68a256d.js"),["assets/Index-c68a256d.js","assets/index-79c720f7.js","assets/index-c3c2086a.css","assets/App-a102ebf9.js","assets/App-e46b25bc.css","assets/Index-0568e1a6.css"])),h=t(()=>s(()=>import("./ChatGpt-303f1d0f.js"),["assets/ChatGpt-303f1d0f.js","assets/index-79c720f7.js","assets/index-c3c2086a.css"])),D=t(()=>s(()=>import("./ReadWorld-3e12531b.js"),["assets/ReadWorld-3e12531b.js","assets/index-79c720f7.js","assets/index-c3c2086a.css","assets/App-a102ebf9.js","assets/App-e46b25bc.css"])),A=t(()=>s(()=>import("./ImgPreview-536a8438.js"),["assets/ImgPreview-536a8438.js","assets/index-79c720f7.js","assets/index-c3c2086a.css"])),C=t(()=>s(()=>import("./Tiangou-c02161de.js"),["assets/Tiangou-c02161de.js","assets/index-79c720f7.js","assets/index-c3c2086a.css","assets/App-a102ebf9.js","assets/App-e46b25bc.css","assets/Tiangou-bd5cab81.css"])),f=t(()=>s(()=>import("./Zhibuzhi-88708a7e.js"),["assets/Zhibuzhi-88708a7e.js","assets/index-79c720f7.js","assets/index-c3c2086a.css","assets/enums-cf458477.js","assets/App-a102ebf9.js","assets/App-e46b25bc.css","assets/Zhibuzhi-28f82ac2.css"])),y=t(()=>s(()=>import("./Gongde-29948c44.js"),["assets/Gongde-29948c44.js","assets/App-a102ebf9.js","assets/index-79c720f7.js","assets/index-c3c2086a.css","assets/App-e46b25bc.css","assets/Gongde-2f5e96e3.css"])),R=t(()=>s(()=>import("./Music-257dc3b7.js"),["assets/Music-257dc3b7.js","assets/index-79c720f7.js","assets/index-c3c2086a.css","assets/App-a102ebf9.js","assets/App-e46b25bc.css","assets/Music-4a95baa9.css"])),V=t(()=>s(()=>import("./WordGames-a4b23562.js"),["assets/WordGames-a4b23562.js","assets/index-79c720f7.js","assets/index-c3c2086a.css","assets/App-a102ebf9.js","assets/App-e46b25bc.css","assets/WordGames-5992e476.css"])),w=t(()=>s(()=>import("./Index-ded32472.js"),["assets/Index-ded32472.js","assets/index-79c720f7.js","assets/index-c3c2086a.css","assets/App-a102ebf9.js","assets/App-e46b25bc.css","assets/Index-08bc40b9.css"])),O=t(()=>s(()=>import("./OnlineMiniGames-35e35f54.js"),["assets/OnlineMiniGames-35e35f54.js","assets/index-79c720f7.js","assets/index-c3c2086a.css","assets/App-a102ebf9.js","assets/App-e46b25bc.css","assets/OnlineMiniGames-7d5fa132.css"])),P=t(()=>s(()=>import("./OffWorkCountdown-3c4a3cf3.js"),["assets/OffWorkCountdown-3c4a3cf3.js","assets/index-79c720f7.js","assets/index-c3c2086a.css","assets/App-a102ebf9.js","assets/App-e46b25bc.css","assets/OffWorkCountdown-a787bd25.css"])),x={chatGpt:h,imgpreview:A,readWorld:D,tiangou:C,zhibuzhi:f,gongde:y,music:R,wordGames:V,fakeUpdate:w,onlineMiniGames:O,offWorkCountdown:P},_=T([]);L(()=>d.lists,i=>{_.value=i},{immediate:!0,deep:!0});const z=i=>{d.lists=_.value},u=(i,m)=>{i.preventDefault(),l.showContextMenu(i.clientX,i.clientY),l.activeApp=m},I=i=>{i.type==="bookmark"&&window.open(i.url,"_blank")};return(i,m)=>{const S=b("lazyload");return a(),r(U,null,[v(c(j),{list:_.value,animation:100,"item-key":"id",class:"list-group apps",forceFallback:!0,"ghost-class":"ghost","fallback-tolerance":8,delay:10,move:z},{item:M(({element:o})=>[e("div",{class:G(["app",[`column${o.gridSize[1]}-row${o.gridSize[0]}`]])},[e("div",{class:"dataset",style:B({borderRadius:`${c(E).settings.appRadius}${o.gridSize[0]===o.gridSize[1]?"%":"px"}`})},[o.type==="bookmark"?(a(),r("div",{key:0,class:"bookmark",onClick:n=>I(o),onContextmenu:g(n=>u(n,o),["stop"])},[W(e("img",Q,null,512),[[S,o.icon]]),o.gridSize[1]==2&&o.gridSize[0]==1?(a(),r("div",X,[e("p",null,p(o.title),1),e("span",null,p(o.description),1)])):$("",!0)],40,H)):(a(),r("div",{key:1,class:"comp",onContextmenu:g(n=>u(n,o),["stop"])},[(a(),F(N(x[o.component]),{app:o},null,8,["app"]))],40,Y))],4),e("p",Z,p(o.title),1)],2)]),_:1},8,["list"]),v(c(k))],64)}}};export{so as default};
