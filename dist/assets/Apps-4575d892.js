import{e as s,f as i,p as R,w as I,O as T,h as a,i as r,j as v,k as b,q as e,x as L,t as M,u as c,l as g,n as B,z as p,C as G,B as $,H as F,F as N}from"./index-c1c08e54.js";import{D as W}from"./vuedraggable.umd-701cb00e.js";import{u as U}from"./App-9be516e4.js";const j=["onClick","onContextmenu"],q={class:"logo",alt:""},H={key:0,class:"description"},X=["onContextmenu"],Y={class:"title"},oo={__name:"Apps",setup(Z){const{useAppStore:l,useContextMenuStore:d,useSystemStore:k}=U(),E=s(()=>i(()=>import("./Index-e1b6cd4a.js"),["assets/Index-e1b6cd4a.js","assets/index-c1c08e54.js","assets/index-0dc88247.css","assets/App-9be516e4.js","assets/App-54093a0b.css","assets/Index-60493898.css"])),h=s(()=>i(()=>import("./ImgPreview-97331460.js"),["assets/ImgPreview-97331460.js","assets/index-c1c08e54.js","assets/index-0dc88247.css"])),f=s(()=>i(()=>import("./Tiangou-9e178ee9.js"),["assets/Tiangou-9e178ee9.js","assets/index-c1c08e54.js","assets/index-0dc88247.css","assets/App-9be516e4.js","assets/App-54093a0b.css","assets/Tiangou-bd5cab81.css"])),A=s(()=>i(()=>import("./Zhibuzhi-03da3d14.js"),["assets/Zhibuzhi-03da3d14.js","assets/index-c1c08e54.js","assets/index-0dc88247.css","assets/enums-cf458477.js","assets/App-9be516e4.js","assets/App-54093a0b.css","assets/Zhibuzhi-40ffbfb7.css"])),C=s(()=>i(()=>import("./Gongde-6e9aca2e.js"),["assets/Gongde-6e9aca2e.js","assets/App-9be516e4.js","assets/index-c1c08e54.js","assets/index-0dc88247.css","assets/App-54093a0b.css","assets/Gongde-2f5e96e3.css"])),D=s(()=>i(()=>import("./Music-b8b032c8.js"),["assets/Music-b8b032c8.js","assets/index-c1c08e54.js","assets/index-0dc88247.css","assets/App-9be516e4.js","assets/App-54093a0b.css","assets/Music-4a95baa9.css"])),y=s(()=>i(()=>import("./WordGames-ea054615.js"),["assets/WordGames-ea054615.js","assets/index-c1c08e54.js","assets/index-0dc88247.css","assets/App-9be516e4.js","assets/App-54093a0b.css","assets/WordGames-24830122.css"])),w=s(()=>i(()=>import("./Index-9dd3723e.js"),["assets/Index-9dd3723e.js","assets/index-c1c08e54.js","assets/index-0dc88247.css","assets/App-9be516e4.js","assets/App-54093a0b.css","assets/Index-afaf4a28.css"])),z=s(()=>i(()=>import("./OnlineMiniGames-a0bb8b53.js"),["assets/OnlineMiniGames-a0bb8b53.js","assets/index-c1c08e54.js","assets/index-0dc88247.css","assets/App-9be516e4.js","assets/App-54093a0b.css","assets/utils-521ae38d.js","assets/OnlineMiniGames-37ce9581.css"])),x=s(()=>i(()=>import("./OffWorkCountdown-7ad2c60e.js"),["assets/OffWorkCountdown-7ad2c60e.js","assets/index-c1c08e54.js","assets/index-0dc88247.css","assets/App-9be516e4.js","assets/App-54093a0b.css","assets/utils-521ae38d.js","assets/OffWorkCountdown-44d6b4b0.css"])),O={imgpreview:h,tiangou:f,zhibuzhi:A,gongde:C,music:D,wordGames:y,fakeUpdate:w,onlineMiniGames:z,offWorkCountdown:x},_=R([]);I(()=>l.lists,t=>{_.value=t},{immediate:!0,deep:!0});const S=t=>{l.lists=_.value},u=(t,m)=>{t.preventDefault(),d.showContextMenu(t.clientX,t.clientY),d.activeApp=m},V=t=>{t.type==="bookmark"&&window.open(t.url,"_blank")};return(t,m)=>{const P=T("lazyload");return a(),r(N,null,[v(c(W),{list:_.value,animation:100,"item-key":"id",class:"list-group apps",forceFallback:!0,"ghost-class":"ghost","fallback-tolerance":8,delay:10,move:S},{item:b(({element:o})=>[e("div",{class:L(["app",[`column${o.gridSize[1]}-row${o.gridSize[0]}`]])},[e("div",{class:"dataset",style:M({borderRadius:`${c(k).settings.appRadius}${o.gridSize[0]===o.gridSize[1]?"%":"px"}`})},[o.type==="bookmark"?(a(),r("div",{key:0,class:"bookmark",onClick:n=>V(o),onContextmenu:g(n=>u(n,o),["stop"])},[B(e("img",q,null,512),[[P,o.icon]]),o.gridSize[1]==2&&o.gridSize[0]==1?(a(),r("div",H,[e("p",null,p(o.title),1),e("span",null,p(o.description),1)])):G("",!0)],40,j)):(a(),r("div",{key:1,class:"comp",onContextmenu:g(n=>u(n,o),["stop"])},[(a(),$(F(O[o.component]),{app:o},null,8,["app"]))],40,X))],4),e("p",Y,p(o.title),1)],2)]),_:1},8,["list"]),v(c(E))],64)}}};export{oo as default};