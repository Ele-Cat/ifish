import{e as t,f as a,q as i,r as l,h as o,C as s,k as _,s as n,j as x,i as A,F as K,t as C,K as D,H as I}from"./index-996dd922.js";const V={class:"settings-drawer"},B=n("div",{class:"intro"},[n("p",null,"说明:"),n("p",null,"您修改的设置内容仅存储在您浏览器缓存中，本站不存储任何内容；"),n("p",null,"当您清理浏览器缓存或更换浏览器后需要重新设置，感谢您的支持与理解!")],-1),S={__name:"Index",props:{open:{type:Boolean,default:!1}},emits:["close"],setup(p,{emit:u}){const v=t(()=>a(()=>import("./SettingsBasic-5c83a46f.js"),["assets/SettingsBasic-5c83a46f.js","assets/App-dd236363.js","assets/index-996dd922.js","assets/index-e3dd4629.css","assets/App-e46b25bc.css","assets/SettingsBasic-252d63d7.css"])),d=t(()=>a(()=>import("./SettingsAppearance-206abd28.js"),["assets/SettingsAppearance-206abd28.js","assets/index-996dd922.js","assets/index-e3dd4629.css","assets/App-dd236363.js","assets/App-e46b25bc.css","assets/SettingsAppearance-79bbf557.css"])),m=t(()=>a(()=>import("./SettingsShortcutKey-e2659abe.js"),["assets/SettingsShortcutKey-e2659abe.js","assets/App-dd236363.js","assets/index-996dd922.js","assets/index-e3dd4629.css","assets/App-e46b25bc.css","assets/SettingsShortcutKey-7a5efcfc.css"])),b=t(()=>a(()=>import("./SettingsNews-dce945f6.js"),["assets/SettingsNews-dce945f6.js","assets/vuedraggable.umd-ded2c3b9.js","assets/index-996dd922.js","assets/index-e3dd4629.css","assets/App-dd236363.js","assets/App-e46b25bc.css","assets/SettingsNews-605171a1.css"])),y=t(()=>a(()=>import("./SettingsData-a8f0a5f3.js"),["assets/SettingsData-a8f0a5f3.js","assets/index-996dd922.js","assets/index-e3dd4629.css","assets/App-dd236363.js","assets/App-e46b25bc.css","assets/SettingsData-6311496e.css"])),f=()=>{u("close")},c=i("basic"),g=i([{label:"基础设置",value:"basic",component:v},{label:"外观设置",value:"appearance",component:d},{label:"资讯设置",value:"news",component:b},{label:"快捷键设置",value:"shortcutKey",component:m},{label:"数据管理",value:"export",component:y}]);return(L,r)=>{const E=l("a-tab-pane"),h=l("a-tabs"),w=l("a-drawer");return o(),s(w,{width:"80vw",title:"系统设置",placement:"right",open:p.open,onClose:f,rootClassName:"settings-root"},{default:_(()=>[n("div",V,[x(h,{activeKey:c.value,"onUpdate:activeKey":r[0]||(r[0]=e=>c.value=e),"tab-position":"left",style:{minHeight:"400px"}},{default:_(()=>[(o(!0),A(K,null,C(g.value,e=>(o(),s(E,{key:e.value,tab:e.label},{default:_(()=>[(o(),s(D,null,[(o(),s(I(e.component)))],1024))]),_:2},1032,["tab"]))),128))]),_:1},8,["activeKey"]),B])]),_:1},8,["open"])}}};export{S as default};