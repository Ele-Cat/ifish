import{_ as r}from"./App-9be516e4.js";import{p,w as u,h as f,i as h,q as e,y as o,z as m,L as v,M as g}from"./index-c1c08e54.js";const t=s=>(v("data-v-604d2a2a"),s=s(),g(),s),k={class:"fake-box"},I={class:"inner"},w=t(()=>e("img",{src:"https://hellokit.com.cn/fakeupdate/assets/img/eZQzDJL.gif",style:{"vertical-align":"middle","padding-top":"25px",float:"left"},draggable:"false",ondragstart:"return false;"},null,-1)),x=t(()=>e("a",null,"Configuring updates: Stage",-1)),y=t(()=>e("a",null,"1",-1)),b=t(()=>e("span",null,"of",-1)),S=t(()=>e("a",null,"3",-1)),V=t(()=>e("span",null,"complete.",-1)),B=t(()=>e("br",null,null,-1)),D=t(()=>e("span",null,"Do not turn off your computer.",-1)),W=t(()=>e("img",{class:"image_block",src:"https://hellokit.com.cn/fakeupdate/assets/img/PI73wHG.png"},null,-1)),z={__name:"WindowsVista",props:{visible:{type:Boolean,default:!1}},setup(s){const c=s,a=p(0);let l=null,_=5e3;const d=()=>{l=setInterval(()=>{a.value++,a.value>=99&&(a.value=0)},_)},n=()=>{a.value=0,l&&clearInterval(l)};return u(()=>c.visible,i=>{i?(n(),d()):n()},{immediate:!0,deep:!0}),(i,L)=>(f(),h("div",k,[e("div",I,[w,x,y,o(),b,o(),S,o(" - "),e("a",null,m(a.value)+"%",1),o(),V,B,D]),W]))}},C=r(z,[["__scopeId","data-v-604d2a2a"]]);export{C as default};