import{e as t,f as s,q as I,w as T,O as L,h as a,i as r,j as v,k as b,s as e,y as M,x as G,u as c,l as g,p as B,B as p,D as $,C as F,H as N,F as W}from"./index-1654d0dc.js";import{D as U}from"./vuedraggable.umd-9731b902.js";import{u as j}from"./App-e1dff1c8.js";const q=["onClick","onContextmenu"],H={class:"logo",alt:""},X={key:0,class:"description"},Y=["onContextmenu"],Z={class:"title"},to={__name:"Apps",setup(J){const{useAppStore:l,useContextMenuStore:d,useSystemStore:k}=j(),E=t(()=>s(()=>import("./Index-5154102b.js"),["assets/Index-5154102b.js","assets/index-1654d0dc.js","assets/index-6bb46bd4.css","assets/App-e1dff1c8.js","assets/App-e46b25bc.css","assets/Index-0568e1a6.css"])),h=t(()=>s(()=>import("./ChatGpt-118fec01.js"),["assets/ChatGpt-118fec01.js","assets/index-1654d0dc.js","assets/index-6bb46bd4.css"])),D=t(()=>s(()=>import("./ImgPreview-ae1e345d.js"),["assets/ImgPreview-ae1e345d.js","assets/index-1654d0dc.js","assets/index-6bb46bd4.css"])),f=t(()=>s(()=>import("./Tiangou-00ac5521.js"),["assets/Tiangou-00ac5521.js","assets/index-1654d0dc.js","assets/index-6bb46bd4.css","assets/App-e1dff1c8.js","assets/App-e46b25bc.css","assets/Tiangou-bd5cab81.css"])),A=t(()=>s(()=>import("./Zhibuzhi-852a95b0.js"),["assets/Zhibuzhi-852a95b0.js","assets/index-1654d0dc.js","assets/index-6bb46bd4.css","assets/enums-cf458477.js","assets/App-e1dff1c8.js","assets/App-e46b25bc.css","assets/Zhibuzhi-28f82ac2.css"])),C=t(()=>s(()=>import("./Gongde-eeb8dc72.js"),["assets/Gongde-eeb8dc72.js","assets/App-e1dff1c8.js","assets/index-1654d0dc.js","assets/index-6bb46bd4.css","assets/App-e46b25bc.css","assets/Gongde-2f5e96e3.css"])),y=t(()=>s(()=>import("./Music-613f6cb5.js"),["assets/Music-613f6cb5.js","assets/index-1654d0dc.js","assets/index-6bb46bd4.css","assets/App-e1dff1c8.js","assets/App-e46b25bc.css","assets/Music-4a95baa9.css"])),w=t(()=>s(()=>import("./WordGames-5803497c.js"),["assets/WordGames-5803497c.js","assets/index-1654d0dc.js","assets/index-6bb46bd4.css","assets/App-e1dff1c8.js","assets/App-e46b25bc.css","assets/WordGames-24830122.css"])),O=t(()=>s(()=>import("./Index-3937ff78.js"),["assets/Index-3937ff78.js","assets/index-1654d0dc.js","assets/index-6bb46bd4.css","assets/App-e1dff1c8.js","assets/App-e46b25bc.css","assets/Index-afaf4a28.css"])),V=t(()=>s(()=>import("./OnlineMiniGames-798af68c.js"),["assets/OnlineMiniGames-798af68c.js","assets/index-1654d0dc.js","assets/index-6bb46bd4.css","assets/App-e1dff1c8.js","assets/App-e46b25bc.css","assets/OnlineMiniGames-37ce9581.css"])),x=t(()=>s(()=>import("./OffWorkCountdown-13359094.js"),["assets/OffWorkCountdown-13359094.js","assets/index-1654d0dc.js","assets/index-6bb46bd4.css","assets/App-e1dff1c8.js","assets/App-e46b25bc.css","assets/OffWorkCountdown-a787bd25.css"])),z={chatGpt:h,imgpreview:D,tiangou:f,zhibuzhi:A,gongde:C,music:y,wordGames:w,fakeUpdate:O,onlineMiniGames:V,offWorkCountdown:x},_=I([]);T(()=>l.lists,i=>{_.value=i},{immediate:!0,deep:!0});const P=i=>{l.lists=_.value},u=(i,m)=>{i.preventDefault(),d.showContextMenu(i.clientX,i.clientY),d.activeApp=m},R=i=>{i.type==="bookmark"&&window.open(i.url,"_blank")};return(i,m)=>{const S=L("lazyload");return a(),r(W,null,[v(c(U),{list:_.value,animation:100,"item-key":"id",class:"list-group apps",forceFallback:!0,"ghost-class":"ghost","fallback-tolerance":8,delay:10,move:P},{item:b(({element:o})=>[e("div",{class:M(["app",[`column${o.gridSize[1]}-row${o.gridSize[0]}`]])},[e("div",{class:"dataset",style:G({borderRadius:`${c(k).settings.appRadius}${o.gridSize[0]===o.gridSize[1]?"%":"px"}`})},[o.type==="bookmark"?(a(),r("div",{key:0,class:"bookmark",onClick:n=>R(o),onContextmenu:g(n=>u(n,o),["stop"])},[B(e("img",H,null,512),[[S,o.icon]]),o.gridSize[1]==2&&o.gridSize[0]==1?(a(),r("div",X,[e("p",null,p(o.title),1),e("span",null,p(o.description),1)])):$("",!0)],40,q)):(a(),r("div",{key:1,class:"comp",onContextmenu:g(n=>u(n,o),["stop"])},[(a(),F(N(z[o.component]),{app:o},null,8,["app"]))],40,Y))],4),e("p",Z,p(o.title),1)],2)]),_:1},8,["list"]),v(c(E))],64)}}};export{to as default};
