import{_ as k,h as n,r as x,y as z,a as g,o as i,b as s,d as t,c as m,w as c,F as _,l as w,t as j,e as p}from"./index-c1450cd8.js";const C={class:"word-games"},G=["onClick"],W=["src","alt"],q=["href"],B=["src"],D={__name:"WordGames",setup(F){const a=n({}),o=n(!1),d=x([{label:"小黑屋",icon:"https://qiujunya.com/adarkroom/favicon.ico",url:"https://qiujunya.com/adarkroom/?lang=zh_cn"},{label:"猫国建设者",icon:"https://img.zhuayuya.com/element_icon/tavg/maomao.png",url:"https://likexia.gitee.io/cat-zh/#"},{label:"偷偷钓个鱼",icon:"https://img.zhuayuya.com/element_icon/tavg/toutoudiaogeyu.png",url:"https://fishing.florastudio.app/"},{label:"钓鱼公司",icon:"https://img.zhuayuya.com/element_icon/tavg/diaoyulao.png",url:"https://gltyx.github.io/fish/fish/fish.html"},{label:"超级进化",icon:"	https://img.zhuayuya.com/element_icon/tavg/jinhua.png",url:"https://g8hh.github.io/evolve/"},{label:"模拟修仙",icon:"https://img.zhuayuya.com/element_icon/tavg/monixiuxian.png",url:"https://cultivation-simulato.g8hh.com.cn/"},{label:"汉字炼金术",icon:"https://img.zhuayuya.com/element_icon/tavg/hanzilianjinshu.png",url:"https://g8hh.github.io/chinese-character-alchemy/"},{label:"激燃太空",icon:"https://img.zhuayuya.com/element_icon/tavg/jirantaikong.png",url:"https://g1tyx.github.io/the-ignited-space/"},{label:"矿石",icon:"	https://img.zhuayuya.com/element_icon/tavg/kuangshi.png",url:"https://g1tyx.github.io/into-the-quarry/"},{label:"能源收集",icon:"https://img.zhuayuya.com/element_icon/tavg/nengyuanshouji.png",url:"https://gityxs.github.io/planet-fall-idle/"}]),r=n(null),{toggle:u}=z(r),y=h=>{o.value=!0,a.value=h};return(h,l)=>{const v=g("perfect-scrollbar"),f=g("IDialog");return i(),s(_,null,[t("div",C,[m(v,{class:"scroll-bar"},{default:c(()=>[(i(!0),s(_,null,w(d,(e,b)=>(i(),s("div",{class:"word-item",key:b,onClick:I=>y(e)},[t("img",{src:e.icon,onerror:"this.src='./images/website.svg'",alt:e.name},null,8,W),t("p",null,j(e.label),1)],8,G))),128))]),_:1})]),m(f,{title:a.value.label,width:1200,visible:o.value,wrapClassName:"game-dialog",onCancel:l[1]||(l[1]=e=>o.value=!1)},{titleLink:c(()=>[t("a",{href:"javascript:;",class:"link",onClick:l[0]||(l[0]=(...e)=>p(u)&&p(u)(...e))},"全屏娱乐"),t("a",{href:a.value.url,target:"_blank",class:"link"},"点我进入原站",8,q)]),default:c(()=>[t("iframe",{ref_key:"iframeRef",ref:r,src:a.value.url,frameborder:"0"},null,8,B)]),_:1},8,["title","visible"])],64)}}},V=k(D,[["__scopeId","data-v-5ef5a1c6"]]);export{V as default};