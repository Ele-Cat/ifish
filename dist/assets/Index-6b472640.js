import{b as o,e,p,D as R,V as S,f as T,h as a,i as u,q as s,l as x,j as A,k as z,F as m,s as C,z as B,B as v,n as F,v as M,u as h,H as $,a7 as j,I as N,L as X,M as q}from"./index-4f2d26c8.js";import{_ as H,t as U}from"./App-04b8d74e.js";const g=n=>(X("data-v-cad0f795"),n=n(),q(),n),G=["src"],J={class:"fake-update"},K=g(()=>s("p",{class:"title"},"请选择一个主题",-1)),Q={class:"fakes"},Y=["title","onClick"],Z=["src"],ss=g(()=>s("div",{class:"tips"},[s("p",null," 1.本功能会让你的电脑进入一个假更新的画面，让别人以为你的电脑正在升级，这时候你就可以休息一下，优雅地喝一杯咖啡。不要有内疚感，适当的休息可以让你的大脑重新充满活力，能面对更多挑战，更高效地完成工作。 "),s("p",null,"2.全屏后，点击Esc退出伪装升级。")],-1)),os={__name:"Index",props:{app:{type:Object,default:()=>{}}},setup(n){const f=o(()=>e(()=>import("./Windows98-9ea2b1b4.js"),["assets/Windows98-9ea2b1b4.js","assets/App-04b8d74e.js","assets/index-4f2d26c8.js","assets/index-0924ed20.css","assets/App-64111cec.css","assets/Windows98-c448f4ea.css"])),k=o(()=>e(()=>import("./WindowsXp-e65a20c9.js"),["assets/WindowsXp-e65a20c9.js","assets/App-04b8d74e.js","assets/index-4f2d26c8.js","assets/index-0924ed20.css","assets/App-64111cec.css","assets/WindowsXp-23081427.css"])),b=o(()=>e(()=>import("./WindowsVista-397c3c39.js"),["assets/WindowsVista-397c3c39.js","assets/App-04b8d74e.js","assets/index-4f2d26c8.js","assets/index-0924ed20.css","assets/App-64111cec.css","assets/WindowsVista-32f11741.css"])),y=o(()=>e(()=>import("./Windows7-fb49b832.js"),["assets/Windows7-fb49b832.js","assets/App-04b8d74e.js","assets/index-4f2d26c8.js","assets/index-0924ed20.css","assets/App-64111cec.css","assets/Windows7-e0014d4f.css"])),w=o(()=>e(()=>import("./Windows8-bc23b6f1.js"),["assets/Windows8-bc23b6f1.js","assets/App-04b8d74e.js","assets/index-4f2d26c8.js","assets/index-0924ed20.css","assets/App-64111cec.css","assets/Windows8-db5c8e65.css"])),E=o(()=>e(()=>import("./Windows10-154f676a.js"),["assets/Windows10-154f676a.js","assets/App-04b8d74e.js","assets/index-4f2d26c8.js","assets/index-0924ed20.css","assets/App-64111cec.css","assets/Windows10-17bf915c.css"])),I=o(()=>e(()=>import("./MacOS-ed2fc645.js"),["assets/MacOS-ed2fc645.js","assets/App-04b8d74e.js","assets/index-4f2d26c8.js","assets/index-0924ed20.css","assets/App-64111cec.css","assets/MacOS-d9c34ce7.css"])),D=o(()=>e(()=>import("./BlueScreen-368dc404.js"),["assets/BlueScreen-368dc404.js","assets/App-04b8d74e.js","assets/index-4f2d26c8.js","assets/index-0924ed20.css","assets/App-64111cec.css","assets/BlueScreen-57242105.css"])),i=p(!1),_=p({}),V=R([{label:"Windows 98",cover:"https://oss-cn-hangzhou.aliyuncs.com/codingsky/tuboshu/tools/fakeupdate/assets/img/1.png",component:f},{label:"Windows XP",cover:"https://oss-cn-hangzhou.aliyuncs.com/codingsky/tuboshu/tools/fakeupdate/assets/img/2.png",component:k},{label:"Windows Vista",cover:"https://oss-cn-hangzhou.aliyuncs.com/codingsky/tuboshu/tools/fakeupdate/assets/img/3.png",component:b},{label:"Windows 7",cover:"https://oss-cn-hangzhou.aliyuncs.com/codingsky/tuboshu/tools/fakeupdate/assets/img/4.png",component:y},{label:"Windows 8",cover:"https://oss-cn-hangzhou.aliyuncs.com/codingsky/tuboshu/tools/fakeupdate/assets/img/5.png",component:w},{label:"Windows 10",cover:"https://oss-cn-hangzhou.aliyuncs.com/codingsky/tuboshu/tools/fakeupdate/assets/img/win10u.png",component:E},{label:"MacOS",cover:"https://oss-cn-hangzhou.aliyuncs.com/codingsky/tuboshu/tools/fakeupdate/assets/img/6.png",component:I},{label:"蓝屏",cover:"https://hellokit.com.cn/fakeupdate/assets/img/SSa5BPv.png",component:D}]),d=p(null),{isFullscreen:r,enter:W}=S(d),O=l=>{if(!l.component){U({type:"warning",content:"开发中..."});return}_.value=l,N(()=>{W()})};return(l,c)=>{const P=T("IDialog");return a(),u(m,null,[s("img",{src:n.app.icon,class:"app-img",alt:"",onClick:c[0]||(c[0]=x(t=>i.value=!0,["stop"]))},null,8,G),A(P,{title:"伪装升级",width:640,visible:i.value,onCancel:c[1]||(c[1]=t=>i.value=!1)},{default:z(()=>[s("div",J,[K,s("div",Q,[(a(!0),u(m,null,C(V,(t,L)=>(a(),u("div",{class:"fake-item",title:t.label,key:L,onClick:es=>O(t)},[s("img",{src:t.cover,alt:""},null,8,Z),s("p",null,B(t.label),1)],8,Y))),128))]),ss])]),_:1},8,["visible"]),(a(),v(j,{to:"body"},[F((a(),v($(_.value.component),{ref_key:"fakeRef",ref:d,visible:h(r)},null,8,["visible"])),[[M,h(r)]])]))],64)}}},as=H(os,[["__scopeId","data-v-cad0f795"]]);export{as as default};
