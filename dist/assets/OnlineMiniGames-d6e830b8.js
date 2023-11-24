import{p as c,D as E,E as C,V as R,r as m,h as y,i as _,q as t,j as o,l as G,u as a,bX as P,bY as T,z as k,x as I,k as h,y as L,B as U,t as S,F,s as q,C as A,I as X,L as Y,M as H}from"./index-0ef10f6d.js";import{_ as J,u as K}from"./App-346024a4.js";import{r as Q}from"./utils-7dc22624.js";const W=u=>(Y("data-v-42b1cd8a"),u=u(),H(),u),Z={class:"ctrl-game"},ee=["src"],te={class:"active-game"},ae=W(()=>t("p",null,"点击开始游戏",-1)),se={class:"title-link"},le={class:"game-box"},ne={class:"game-list"},oe=["onClick"],ie=["src"],ue={__name:"OnlineMiniGames",props:{type:{type:String,default:"use"}},setup(u){const{useAppStore:n}=K(),l=c(0),r=c(!0),p=E([{label:"俄罗斯方块",icon:"https://oss-cn-hangzhou.aliyuncs.com/codingsky/tuboshu/tools/game.png",url:"http://farter.cn/tetr.js/"},{label:"简易华容道",icon:"https://oss-cn-hangzhou.aliyuncs.com/codingsky/tuboshu/tools/game.png",url:"https://sliding.toys/"},{label:"迷宫大全",icon:"https://oss-cn-hangzhou.aliyuncs.com/codingsky/tuboshu/tools/game.png",url:"https://maze.toys/"},{label:"切方块",icon:"https://oss-cn-hangzhou.aliyuncs.com/codingsky/tuboshu/tools/cut-the-box/cube.png",url:"https://hellokit.com.cn/cut-the-box"},{label:"盖塔楼",icon:"https://oss-cn-hangzhou.aliyuncs.com/codingsky/tuboshu/tools/build-tower/box-icon.png",url:"https://hellokit.com.cn/build-tower"},{label:"圣诞老人过桥",icon:"https://oss-cn-hangzhou.aliyuncs.com/codingsky/tuboshu/tools/game.png",url:"https://hellokit.com.cn/bridge"},{label:"闯关小游戏",icon:"https://oss-cn-hangzhou.aliyuncs.com/codingsky/tuboshu/tools/game.png",url:"https://hellokit.com.cn/barrier-game"},{label:"2048",icon:"https://oss-cn-hangzhou.aliyuncs.com/codingsky/tuboshu/tools/2048/2048.jpeg",url:"https://hellokit.com.cn/2048"},{label:"数独",icon:"https://img.zhuayuya.com/icon/shudu.webp",url:"https://www.zhuayuya.com/sudoku_tow/index.html"},{label:"西瓜插口红",icon:"https://img.zhuayuya.com/images/y69.png",url:"https://game.zhuayuya.com/yxmb/69/index.html"},{label:"贪吃蛇",icon:"https://img.zhuayuya.com/images/y14.png",url:"https://game.zhuayuya.com/yxmb/14/index.html"},{label:"中国象棋",icon:"https://img.zhuayuya.com/images/y65.png",url:"https://game.zhuayuya.com/yxmb/65/index.html"},{label:"射箭游戏",icon:"https://img.zhuayuya.com/images/y30.png",url:"https://game.zhuayuya.com/yxmb/30/index.html"},{label:"最强眼力",icon:"https://img.zhuayuya.com/images/y36.png",url:"https://game.zhuayuya.com/yxmb/36/index.html"},{label:"飞机大战",icon:"https://img.zhuayuya.com/images/y31.png",url:"https://game.zhuayuya.com/yxmb/31/index.html"},{label:"维京战争",icon:"https://img.zhuayuya.com/images/y1.png",url:"https://game.zhuayuya.com/yxmb/1/index.html"},{label:"3D拳击",icon:"https://img.zhuayuya.com/images/y58.png",url:"https://game.zhuayuya.com/yxmb/58/index.html"},{label:"线条生存",icon:"https://img.zhuayuya.com/images/y19.png",url:"https://game.zhuayuya.com/yxmb/19/index.html"},{label:"3d飞行兔子",icon:"https://img.zhuayuya.com/images/y72.png",url:"https://game.zhuayuya.com/yxmb/72/index.html"}]),V=C(()=>g=>Q(g)),i=C(()=>p[l.value]),d=c(!1),z=c(!1),f=g=>{l.value+=g,l.value<0&&(l.value=p.length-1),l.value>p.length-1&&(l.value=0)},b=c(null),{isFullscreen:j,toggle:x}=R(b),N=()=>{d.value=!0,X(()=>{b.value.addEventListener("load",()=>{z.value=!1})})},O=()=>{window.open(i.value.url,"_blank")};return(g,e)=>{const w=m("a-input-number"),$=m("a-space"),B=m("perfect-scrollbar"),D=m("a-spin"),M=m("IDialog");return y(),_(F,null,[t("div",{class:I(["online-mini-game",{preview:u.type==="preview"}]),onClick:N},[t("div",Z,[o(a(P),{onClick:e[0]||(e[0]=G(s=>f(-1),["stop"]))}),o(a(T),{onClick:e[1]||(e[1]=G(s=>f(1),["stop"]))})]),t("img",{src:i.value.icon||V.value(i.value.url),alt:""},null,8,ee),t("div",te,[t("p",null,k(i.value.label),1),ae])],2),o(M,{title:`在线小游戏 - ${i.value.label}`,width:a(n).miniGames.width,visible:d.value,zIndex:10010,wrapClassName:"game-dialog",onCancel:e[6]||(e[6]=s=>d.value=!1)},{titleLink:h(()=>[t("span",se,[t("a",{href:"javascript:;",class:"link",title:"全屏娱乐",onClick:e[2]||(e[2]=s=>r.value=!r.value)},k(r.value?"隐藏":"显示")+"游戏列表",1),t("a",{href:"javascript:;",class:"link",title:"全屏娱乐",onClick:e[3]||(e[3]=(...s)=>a(x)&&a(x)(...s))},"全屏"),t("a",{href:"javascript:;",class:"link",title:"点击进入原站",onClick:O},"进入原站"),o($,null,{default:h(()=>[L(" 窗口大小 "),o(w,{min:480,value:a(n).miniGames.width,"onUpdate:value":e[4]||(e[4]=s=>a(n).miniGames.width=s),size:"small"},null,8,["value"]),L("* "),o(w,{min:360,value:a(n).miniGames.height,"onUpdate:value":e[5]||(e[5]=s=>a(n).miniGames.height=s),size:"small"},null,8,["value"])]),_:1})])]),default:h(()=>[t("div",le,[r.value?(y(),U(B,{key:0,class:"scroll-bar",style:S({height:a(n).miniGames.height+"px"})},{default:h(()=>[t("div",ne,[(y(!0),_(F,null,q(p,(s,v)=>(y(),_("p",{class:I(["game-item",{active:l.value===v}]),key:v,onClick:ce=>l.value=v},k(s.label),11,oe))),128))])]),_:1},8,["style"])):A("",!0),o(D,{spinning:z.value,tip:"加载中，请耐心等待..."},{default:h(()=>[t("iframe",{ref_key:"iframeRef",ref:b,src:i.value.url,style:S({height:a(n).miniGames.height+"px",backgroundColor:a(j)?"#FFF":"transparent"}),frameborder:"0"},null,12,ie)]),_:1},8,["spinning"])])]),_:1},8,["title","width","visible"])],64)}}},pe=J(ue,[["__scopeId","data-v-42b1cd8a"]]);export{pe as default};
