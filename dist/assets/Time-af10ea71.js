import{q as _,w as v,h as c,i,u,F as f,B as l,D as d,s as w,a as m}from"./index-70fa9e9d.js";import{_ as h,u as g}from"./App-ffc36fab.js";const y={class:"l-time"},T={key:0},D={class:"time"},k={__name:"Time",setup(x){const{useSystemStore:t}=g(),s=()=>{const e=["星期日","星期一","星期二","星期三","星期四","星期五","星期六"];return`${m().format("YYYY年MM月DD日")} ${e[m().day()]}`},a=()=>`${m().format("HH:mm:ss")}`,o=_(s()),n=_(a());let r=null;const p=()=>{o.value=s(),n.value=a(),r=setInterval(()=>{o.value=s(),n.value=a()},1e3)};return v(()=>t.settings.showTime,e=>{r&&clearInterval(r),e&&p()},{immediate:!0,deep:!0}),(e,B)=>(c(),i("div",y,[u(t).settings.showTime?(c(),i(f,{key:0},[u(t).settings.showDate?(c(),i("p",T,l(o.value),1)):d("",!0),w("p",D,l(n.value),1)],64)):d("",!0)]))}},Y=h(k,[["__scopeId","data-v-64854499"]]);export{Y as default};
