import{e as t,f as s,q as T,w as L,Q as b,h as a,i as r,j as v,k as M,s as e,y as G,x as B,u as c,l as g,p as W,B as p,D as $,C as F,H as N,F as U}from"./index-7ec7167c.js";import{D as j}from"./vuedraggable.umd-d96fe1ed.js";import{u as q}from"./App-c0c60556.js";const H=["onClick","onContextmenu"],Q={class:"logo",alt:""},X={key:0,class:"description"},Y=["onContextmenu"],Z={class:"title"},so={__name:"Apps",setup(J){const{useAppStore:d,useContextMenuStore:l,useSystemStore:E}=q(),k=t(()=>s(()=>import("./Index-a5cb2a69.js"),["assets/Index-a5cb2a69.js","assets/index-7ec7167c.js","assets/index-8733d98e.css","assets/App-c0c60556.js","assets/App-e46b25bc.css","assets/Index-0568e1a6.css"])),h=t(()=>s(()=>import("./ChatGpt-1983d628.js"),["assets/ChatGpt-1983d628.js","assets/index-7ec7167c.js","assets/index-8733d98e.css"])),D=t(()=>s(()=>import("./ReadWorld-3d6fa9d2.js"),["assets/ReadWorld-3d6fa9d2.js","assets/index-7ec7167c.js","assets/index-8733d98e.css","assets/App-c0c60556.js","assets/App-e46b25bc.css"])),A=t(()=>s(()=>import("./ImgPreview-bf6cc9a0.js"),["assets/ImgPreview-bf6cc9a0.js","assets/index-7ec7167c.js","assets/index-8733d98e.css"])),f=t(()=>s(()=>import("./Tiangou-b8bd718f.js"),["assets/Tiangou-b8bd718f.js","assets/index-7ec7167c.js","assets/index-8733d98e.css","assets/App-c0c60556.js","assets/App-e46b25bc.css","assets/Tiangou-bd5cab81.css"])),C=t(()=>s(()=>import("./Zhibuzhi-fd5c88a9.js"),["assets/Zhibuzhi-fd5c88a9.js","assets/index-7ec7167c.js","assets/index-8733d98e.css","assets/enums-cf458477.js","assets/App-c0c60556.js","assets/App-e46b25bc.css","assets/Zhibuzhi-28f82ac2.css"])),y=t(()=>s(()=>import("./Gongde-d79835e6.js"),["assets/Gongde-d79835e6.js","assets/App-c0c60556.js","assets/index-7ec7167c.js","assets/index-8733d98e.css","assets/App-e46b25bc.css","assets/Gongde-2f5e96e3.css"])),R=t(()=>s(()=>import("./Music-4e80bd68.js"),["assets/Music-4e80bd68.js","assets/index-7ec7167c.js","assets/index-8733d98e.css","assets/App-c0c60556.js","assets/App-e46b25bc.css","assets/Music-4a95baa9.css"])),V=t(()=>s(()=>import("./WordGames-af89f3f8.js"),["assets/WordGames-af89f3f8.js","assets/index-7ec7167c.js","assets/index-8733d98e.css","assets/App-c0c60556.js","assets/App-e46b25bc.css","assets/WordGames-24830122.css"])),w=t(()=>s(()=>import("./Index-91510199.js"),["assets/Index-91510199.js","assets/index-7ec7167c.js","assets/index-8733d98e.css","assets/App-c0c60556.js","assets/App-e46b25bc.css","assets/Index-08bc40b9.css"])),O=t(()=>s(()=>import("./OnlineMiniGames-6c53d051.js"),["assets/OnlineMiniGames-6c53d051.js","assets/index-7ec7167c.js","assets/index-8733d98e.css","assets/App-c0c60556.js","assets/App-e46b25bc.css","assets/OnlineMiniGames-025be4a1.css"])),P=t(()=>s(()=>import("./OffWorkCountdown-b3612ec1.js"),["assets/OffWorkCountdown-b3612ec1.js","assets/index-7ec7167c.js","assets/index-8733d98e.css","assets/App-c0c60556.js","assets/App-e46b25bc.css","assets/OffWorkCountdown-a787bd25.css"])),x={chatGpt:h,imgpreview:A,readWorld:D,tiangou:f,zhibuzhi:C,gongde:y,music:R,wordGames:V,fakeUpdate:w,onlineMiniGames:O,offWorkCountdown:P},_=T([]);L(()=>d.lists,i=>{_.value=i},{immediate:!0,deep:!0});const z=i=>{d.lists=_.value},u=(i,m)=>{i.preventDefault(),l.showContextMenu(i.clientX,i.clientY),l.activeApp=m},I=i=>{i.type==="bookmark"&&window.open(i.url,"_blank")};return(i,m)=>{const S=b("lazyload");return a(),r(U,null,[v(c(j),{list:_.value,animation:100,"item-key":"id",class:"list-group apps",forceFallback:!0,"ghost-class":"ghost","fallback-tolerance":8,delay:10,move:z},{item:M(({element:o})=>[e("div",{class:G(["app",[`column${o.gridSize[1]}-row${o.gridSize[0]}`]])},[e("div",{class:"dataset",style:B({borderRadius:`${c(E).settings.appRadius}${o.gridSize[0]===o.gridSize[1]?"%":"px"}`})},[o.type==="bookmark"?(a(),r("div",{key:0,class:"bookmark",onClick:n=>I(o),onContextmenu:g(n=>u(n,o),["stop"])},[W(e("img",Q,null,512),[[S,o.icon]]),o.gridSize[1]==2&&o.gridSize[0]==1?(a(),r("div",X,[e("p",null,p(o.title),1),e("span",null,p(o.description),1)])):$("",!0)],40,H)):(a(),r("div",{key:1,class:"comp",onContextmenu:g(n=>u(n,o),["stop"])},[(a(),F(N(x[o.component]),{app:o},null,8,["app"]))],40,Y))],4),e("p",Z,p(o.title),1)],2)]),_:1},8,["list"]),v(c(k))],64)}}};export{so as default};
