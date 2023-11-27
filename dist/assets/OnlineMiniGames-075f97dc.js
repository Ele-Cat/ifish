import{q as c,E,J as C,W as R,r as m,h as y,i as _,s as t,j as n,l as G,u as a,bY as P,bZ as T,B as z,y as I,k as h,z as S,C as U,x as j,F,t as q,D as A,I as J,M as W,N as Y}from"./index-dd1c0eec.js";import{_ as Z,u as H,r as K}from"./App-fdd16137.js";const Q=u=>(W("data-v-4fcda457"),u=u(),Y(),u),X={class:"ctrl-game"},ee=["src"],te={class:"active-game"},ae=Q(()=>t("p",null,"点击开始游戏",-1)),le={class:"title-link"},se={class:"game-box"},oe={class:"game-list"},ne=["onClick"],ie=["src"],ue={__name:"OnlineMiniGames",props:{type:{type:String,default:"use"}},setup(u){const{useAppStore:o}=H(),s=c(0),p=c(!0),r=E([{label:"俄罗斯方块",icon:"https://oss-cn-hangzhou.aliyuncs.com/codingsky/tuboshu/tools/game.png",url:"http://farter.cn/tetr.js/"},{label:"简易华容道",icon:"https://oss-cn-hangzhou.aliyuncs.com/codingsky/tuboshu/tools/game.png",url:"https://sliding.toys/"},{label:"迷宫大全",icon:"https://oss-cn-hangzhou.aliyuncs.com/codingsky/tuboshu/tools/game.png",url:"https://maze.toys/"},{label:"球归色条",url:"http://looptap.top"},{label:"躲避小球",url:"http://guiduo.top"},{label:"切方块",icon:"https://oss-cn-hangzhou.aliyuncs.com/codingsky/tuboshu/tools/cut-the-box/cube.png",url:"https://hellokit.com.cn/cut-the-box"},{label:"盖塔楼",icon:"https://oss-cn-hangzhou.aliyuncs.com/codingsky/tuboshu/tools/build-tower/box-icon.png",url:"https://hellokit.com.cn/build-tower"},{label:"圣诞老人过桥",icon:"https://oss-cn-hangzhou.aliyuncs.com/codingsky/tuboshu/tools/game.png",url:"https://hellokit.com.cn/bridge"},{label:"闯关小游戏",icon:"https://oss-cn-hangzhou.aliyuncs.com/codingsky/tuboshu/tools/game.png",url:"https://hellokit.com.cn/barrier-game"},{label:"2048",icon:"https://oss-cn-hangzhou.aliyuncs.com/codingsky/tuboshu/tools/2048/2048.jpeg",url:"https://hellokit.com.cn/2048"},{label:"魔方",icon:"https://img.zhuayuya.com/icon/mofang.webp",url:"https://www.zhuayuya.com/cube/index.html"},{label:"扫雷",icon:"https://img.zhuayuya.com/icon/saolei.webp",url:"https://www.zhuayuya.com/saolei_tow/index.html"},{label:"数独",icon:"https://img.zhuayuya.com/icon/shudu.webp",url:"https://www.zhuayuya.com/sudoku_tow/index.html"},{label:"西瓜插口红",icon:"https://img.zhuayuya.com/images/y69.png",url:"https://game.zhuayuya.com/yxmb/69/index.html"},{label:"贪吃蛇",icon:"https://img.zhuayuya.com/images/y14.png",url:"https://game.zhuayuya.com/yxmb/14/index.html"},{label:"中国象棋",icon:"https://img.zhuayuya.com/images/y65.png",url:"https://game.zhuayuya.com/yxmb/65/index.html"},{label:"射箭游戏",icon:"https://img.zhuayuya.com/images/y30.png",url:"https://game.zhuayuya.com/yxmb/30/index.html"},{label:"最强眼力",icon:"https://img.zhuayuya.com/images/y36.png",url:"https://game.zhuayuya.com/yxmb/36/index.html"},{label:"飞机大战",icon:"https://img.zhuayuya.com/images/y31.png",url:"https://game.zhuayuya.com/yxmb/31/index.html"},{label:"维京战争",icon:"https://img.zhuayuya.com/images/y1.png",url:"https://game.zhuayuya.com/yxmb/1/index.html"},{label:"3D拳击",icon:"https://img.zhuayuya.com/images/y58.png",url:"https://game.zhuayuya.com/yxmb/58/index.html"},{label:"线条生存",icon:"https://img.zhuayuya.com/images/y19.png",url:"https://game.zhuayuya.com/yxmb/19/index.html"},{label:"架子鼓",url:"http://guozhivip.com/jzg/"},{label:"对称绘画",url:"http://weavesilk.com"},{label:"流星雨",url:"https://www.meteorshowers.org"},{label:"孔明灯",url:"https://henxiangsi.com/"},{label:"3d飞行兔子",icon:"https://img.zhuayuya.com/images/y72.png",url:"https://game.zhuayuya.com/yxmb/72/index.html"}]),L=C(()=>g=>K(g)),i=C(()=>r[s.value]),d=c(!1),f=c(!1),k=g=>{s.value+=g,s.value<0&&(s.value=r.length-1),s.value>r.length-1&&(s.value=0)},b=c(null),{isFullscreen:N,toggle:x}=R(b),O=()=>{d.value=!0,J(()=>{b.value.addEventListener("load",()=>{f.value=!1})})},V=()=>{window.open(i.value.url,"_blank")};return(g,e)=>{const w=m("a-input-number"),$=m("a-space"),B=m("perfect-scrollbar"),D=m("a-spin"),M=m("IDialog");return y(),_(F,null,[t("div",{class:I(["online-mini-game",{preview:u.type==="preview"}]),onClick:O},[t("div",X,[n(a(P),{onClick:e[0]||(e[0]=G(l=>k(-1),["stop"]))}),n(a(T),{onClick:e[1]||(e[1]=G(l=>k(1),["stop"]))})]),t("img",{src:i.value.icon||L.value(i.value.url),alt:""},null,8,ee),t("div",te,[t("p",null,z(i.value.label),1),ae])],2),n(M,{title:`在线小游戏 - ${i.value.label}`,width:a(o).miniGames.width,visible:d.value,zIndex:10010,wrapClassName:"game-dialog",onCancel:e[6]||(e[6]=l=>d.value=!1)},{titleLink:h(()=>[t("span",le,[t("a",{href:"javascript:;",class:"link",title:"全屏娱乐",onClick:e[2]||(e[2]=l=>p.value=!p.value)},z(p.value?"隐藏":"显示")+"游戏列表",1),t("a",{href:"javascript:;",class:"link",title:"全屏娱乐",onClick:e[3]||(e[3]=(...l)=>a(x)&&a(x)(...l))},"全屏"),t("a",{href:"javascript:;",class:"link",title:"点击进入原站",onClick:V},"进入原站"),n($,null,{default:h(()=>[S(" 窗口大小 "),n(w,{min:480,value:a(o).miniGames.width,"onUpdate:value":e[4]||(e[4]=l=>a(o).miniGames.width=l),size:"small"},null,8,["value"]),S("* "),n(w,{min:360,value:a(o).miniGames.height,"onUpdate:value":e[5]||(e[5]=l=>a(o).miniGames.height=l),size:"small"},null,8,["value"])]),_:1})])]),default:h(()=>[t("div",se,[p.value?(y(),U(B,{key:0,class:"scroll-bar",style:j({height:a(o).miniGames.height+"px"})},{default:h(()=>[t("div",oe,[(y(!0),_(F,null,q(r,(l,v)=>(y(),_("p",{class:I(["game-item",{active:s.value===v}]),key:v,onClick:ce=>s.value=v},z(l.label),11,ne))),128))])]),_:1},8,["style"])):A("",!0),n(D,{spinning:f.value,tip:"加载中，请耐心等待..."},{default:h(()=>[t("iframe",{ref_key:"iframeRef",ref:b,src:i.value.url,style:j({height:a(o).miniGames.height+"px",backgroundColor:a(N)?"#FFF":"transparent"}),frameborder:"0"},null,12,ie)]),_:1},8,["spinning"])])]),_:1},8,["title","width","visible"])],64)}}},pe=Z(ue,[["__scopeId","data-v-4fcda457"]]);export{pe as default};
