import{f as n,g as s,h as i,r as l,o as t,c as o,a as c,d as a,i as K,j as x,F as E,k as w,K as A,l as B}from"./index-a2eb0d5a.js";const C={class:"settings-drawer"},k=a("div",{class:"intro"},[a("p",null,"说明:"),a("p",null,"您修改的设置内容仅存储在您浏览器缓存中，本站不存储任何内容；"),a("p",null,"当您清理浏览器缓存或更换浏览器后需要重新设置，感谢您的支持与理解!")],-1),D={__name:"Index",props:{open:{type:Boolean,default:!1}},emits:["close"],setup(p,{emit:u}){const d=n(()=>s(()=>import("./SettingsBasic-34be5cc3.js"),["assets/SettingsBasic-34be5cc3.js","assets/index-a2eb0d5a.js","assets/index-3a90f35e.css"])),v=n(()=>s(()=>import("./SettingsAppearance-050559dc.js"),["assets/SettingsAppearance-050559dc.js","assets/index-a2eb0d5a.js","assets/index-3a90f35e.css"])),m=n(()=>s(()=>import("./SettingsShortcutKey-db27db2d.js"),["assets/SettingsShortcutKey-db27db2d.js","assets/index-a2eb0d5a.js","assets/index-3a90f35e.css"])),b=()=>{u("close")},_=i("basic"),y=i([{label:"基础设置",value:"basic",component:d},{label:"外观设置",value:"appearance",component:v},{label:"快捷键设置",value:"shortcutKey",component:m}]);return(I,r)=>{const f=l("a-tab-pane"),g=l("a-tabs"),h=l("a-drawer");return t(),o(h,{width:"80vw",title:"系统设置",placement:"right",open:p.open,onClose:b,rootClassName:"settings-root"},{default:c(()=>[a("div",C,[K(g,{activeKey:_.value,"onUpdate:activeKey":r[0]||(r[0]=e=>_.value=e),"tab-position":"left",style:{minHeight:"200px"}},{default:c(()=>[(t(!0),x(E,null,w(y.value,e=>(t(),o(f,{key:e.value,tab:e.label},{default:c(()=>[(t(),o(A,null,[(t(),o(B(e.component)))],1024))]),_:2},1032,["tab"]))),128))]),_:1},8,["activeKey"]),k])]),_:1},8,["open"])}}};export{D as default};
