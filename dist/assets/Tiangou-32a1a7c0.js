import{_ as v,h as u,bW as f,a as m,o as b,b as C,d as e,m as x,c as y,w as h,t as d,n as k,e as l,F as I,s as T,p as w,g as S}from"./index-a42e6ddf.js";const _=s=>(w("data-v-15bf1fcd"),s=s(),S(),s),$=["src"],B={class:"tiangou"},D=_(()=>e("img",{src:"https://z1.ax1x.com/2023/11/20/piUaYCT.jpg",alt:""},null,-1)),V={class:"text"},j=_(()=>e("p",null,"宝",-1)),z={__name:"Tiangou",props:{app:{type:Object,default:()=>{}}},setup(s){const o=u(!1),a=u(""),i=()=>{T.get("https://api.moyuduck.com/tiangou").then(c=>{a.value=c.data.data})};i();const{copy:r,copied:p}=f({tiangou:a});return(c,t)=>{const g=m("IDialog");return b(),C(I,null,[e("img",{src:s.app.icon,class:"app-img",alt:"",onClick:t[0]||(t[0]=x(n=>o.value=!0,["stop"]))},null,8,$),y(g,{title:"舔狗日记",visible:o.value,onOk:t[2]||(t[2]=n=>o.value=!1),onCancel:t[3]||(t[3]=n=>o.value=!1)},{default:h(()=>[e("div",B,[D,e("div",V,[j,e("p",null,d(a.value),1)]),e("button",{title:"继续舔",onClick:i}),e("p",{class:k(["copy",{copied:l(p)}]),onClick:t[1]||(t[1]=n=>l(r)(a.value))},d(l(p)?"已复制":"点击复制"),3)])]),_:1},8,["visible"])],64)}}},N=v(z,[["__scopeId","data-v-15bf1fcd"]]);export{N as default};
