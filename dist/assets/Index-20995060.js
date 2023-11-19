import{_ as P,u as O,r as R,h,O as j,a as D,o as n,b as c,k as E,c as p,w,d as i,e as f,S as L,H as B,I as N,F as V,l as F,n as I,f as M,t as x,K as m,L as b,i as q,P as G,Q as H,m as A,j as Q,N as U}from"./index-c76756ee.js";import{D as K}from"./vuedraggable.umd-a3d8641f.js";const X={class:"search-box"},Y={key:0,class:"bg-blur"},Z=["src"],J={class:"search-types bf"},W=["onClick"],ee=["src"],se={__name:"SearchBox",setup($){const{useSystemStore:l}=O(),_=R([{label:"百度",value:"https://www.baidu.com",icon:"./images/icons/baidu.png"},{label:"谷歌",value:"https://www.google.com",icon:"./images/icons/guge.png"},{label:"必应",value:"https://cn.bing.com",icon:"./images/icons/bing.png"},{label:"知乎",value:"https://www.zhihu.com",icon:"./images/icons/zhihu.png"},{label:"掘金",value:"https://juejin.cn",icon:"./images/icons/juejin.png"},{label:"博客园",value:"https://zzk.cnblogs.com",icon:"./images/icons/bokeyuan.png"},{label:"CSDN",value:"https://so.csdn.net/so",icon:"./images/icons/csdn.png"},{label:"GitHub",value:"https://github.com",icon:"./images/icons/github.png"},{label:"Gitee",value:"https://search.gitee.com",icon:"./images/icons/gitee.png"},{label:"Bilibili",value:"https://search.bilibili.com/all",icon:"./images/icons/bilibili.png"}]),y=h(null),r=h(!1),v=h(l.searchType),u=h(""),g=h(!1);j(y,()=>{r.value=!1});const S=()=>{r.value=!r.value},C=t=>{v.value=t.value,r.value=!1,l.searchType=t.value},d=()=>{const t=v.value;if(!u.value)window.open(t,"_blank");else{let e="/s?wd=";["https://www.google.com","https://www.zhihu.com","https://so.csdn.net/so","https://cn.bing.com","https://github.com"].indexOf(t)>=0?e="/search?q=":["https://juejin.cn"].indexOf(t)>=0?e="/search?query=":["https://zzk.cnblogs.com"].indexOf(t)>=0?e="/s?w=":["https://search.gitee.com"].indexOf(t)>=0?e="/?q=":["https://search.bilibili.com/all"].indexOf(t)>=0&&(e="/?keyword="),window.open(`${t}${e}${u.value}`,"_blank"),u.value=""}};return(t,e)=>{const z=D("a-tooltip"),a=D("a-input");return n(),c("div",X,[g.value?(n(),c("div",Y)):E("",!0),p(a,{class:"search",value:u.value,"onUpdate:value":e[0]||(e[0]=o=>u.value=o),placeholder:"请输入搜索内容",onFocus:e[1]||(e[1]=o=>g.value=!0),onBlur:e[2]||(e[2]=o=>g.value=!1),onPressEnter:d},{addonBefore:w(()=>[p(z,{title:"点击切换搜索源"},{default:w(()=>[i("img",{ref_key:"searchTypeRef",ref:y,src:_.find(o=>o.value===f(l).searchType).icon,alt:"",onClick:S},null,8,Z)]),_:1})]),suffix:w(()=>[p(f(L),{onClick:d,style:{fontSize:"18px"}})]),_:1},8,["value"]),B(i("div",J,[(n(!0),c(V,null,F(_,o=>(n(),c("div",{class:I(["search-type",{active:v.value===o.value}]),key:o.value,onClick:T=>C(o)},[i("img",{src:o.icon,alt:""},null,8,ee),M(" "+x(o.label),1)],10,W))),128))],512),[[N,r.value]])])}}},oe=P(se,[["__scopeId","data-v-63a54ef6"]]);const te=["onClick","onContextmenu"],ae={class:"logo",alt:""},ne={key:0,class:"description"},ie=["onContextmenu"],ce={class:"title"},le={__name:"Apps",setup($){const{useAppStore:l,useContextMenuStore:_,useSystemStore:y}=O(),r=m(()=>b(()=>import("./Index-da7af7e1.js"),["assets/Index-da7af7e1.js","assets/index-c76756ee.js","assets/index-85b504bc.css","assets/Index-60493898.css"])),v=m(()=>b(()=>import("./ImgPreview-3dbbf2fb.js"),["assets/ImgPreview-3dbbf2fb.js","assets/index-c76756ee.js","assets/index-85b504bc.css","assets/ImgPreview-f8b4b99a.css"])),u=m(()=>b(()=>import("./Tiangou-6d89d00d.js"),["assets/Tiangou-6d89d00d.js","assets/index-c76756ee.js","assets/index-85b504bc.css","assets/Tiangou-bbfe073a.css"])),g=m(()=>b(()=>import("./Zhibuzhi-e014ebb3.js"),["assets/Zhibuzhi-e014ebb3.js","assets/index-c76756ee.js","assets/index-85b504bc.css","assets/Zhibuzhi-40ffbfb7.css"])),S=m(()=>b(()=>import("./Gongde-d602e522.js"),["assets/Gongde-d602e522.js","assets/index-c76756ee.js","assets/index-85b504bc.css","assets/Gongde-ad34496a.css"])),C={imgpreview:v,tiangou:u,zhibuzhi:g,gongde:S},d=h([]);q(()=>l.lists,a=>{d.value=a},{immediate:!0,deep:!0});const t=a=>{l.lists=d.value},e=(a,o)=>{a.preventDefault(),_.showContextMenu(a.clientX,a.clientY),_.activeApp=o},z=a=>{a.type==="bookmark"&&window.open(a.url,"_blank")};return(a,o)=>{const T=G("lazyload");return n(),c(V,null,[p(f(K),{list:d.value,animation:100,"item-key":"id",class:"list-group apps",forceFallback:!0,"ghost-class":"ghost","fallback-tolerance":8,delay:10,move:t},{item:w(({element:s})=>[i("div",{class:I(["app",[`column${s.gridSize[1]}-row${s.gridSize[0]}`]])},[i("div",{class:"dataset",style:H({borderRadius:`${f(y).settings.appRadius}${s.gridSize[0]===s.gridSize[1]?"%":"px"}`})},[s.type==="bookmark"?(n(),c("div",{key:0,class:"bookmark",onClick:k=>z(s),onContextmenu:A(k=>e(k,s),["stop"])},[B(i("img",ae,null,512),[[T,s.icon]]),s.gridSize[1]==2&&s.gridSize[0]==1?(n(),c("div",ne,[i("p",null,x(s.title),1),i("span",null,x(s.description),1)])):E("",!0)],40,te)):(n(),c("div",{key:1,class:"comp",onContextmenu:A(k=>e(k,s),["stop"])},[(n(),Q(U(C[s.component]),{app:s},null,8,["app"]))],40,ie))],4),i("p",ce,x(s.title),1)],2)]),_:1},8,["list"]),p(f(r))],64)}}},re={class:"home"},_e={__name:"Index",setup($){return(l,_)=>(n(),c("div",re,[p(oe),p(le)]))}};export{_e as default};
