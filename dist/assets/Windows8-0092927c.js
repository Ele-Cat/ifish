import{_ as r}from"./App-9be516e4.js";import{p as v,w as _,h as p,i as u,q as d,z as f,y as m,ap as h,L as w,M as I}from"./index-c1c08e54.js";const s=e=>(w("data-v-dd9f7520"),e=e(),I(),e),x={class:"fake-box"},y={class:"inner"},b=h('<div class="loader" data-v-dd9f7520><div class="circle" data-v-dd9f7520></div><div class="circle" data-v-dd9f7520></div><div class="circle" data-v-dd9f7520></div><div class="circle" data-v-dd9f7520></div><div class="circle" data-v-dd9f7520></div></div><a data-v-dd9f7520>Configuring Windows updates</a><br data-v-dd9f7520>',3),S=s(()=>d("span",null,"complete.",-1)),g=s(()=>d("br",null,null,-1)),B=s(()=>d("span",null,"Do not turn off your computer.",-1)),W={__name:"Windows8",props:{visible:{type:Boolean,default:!1}},setup(e){const l=e,a=v(0);let t=null,i=5e3;const n=()=>{t=setInterval(()=>{a.value++,a.value>=99&&(a.value=0)},i)},o=()=>{a.value=0,t&&clearInterval(t)};return _(()=>l.visible,c=>{c?(o(),n()):o()},{immediate:!0,deep:!0}),(c,k)=>(p(),u("div",x,[d("div",y,[b,d("a",null,f(a.value)+"%",1),m(),S,g,B])]))}},D=r(W,[["__scopeId","data-v-dd9f7520"]]);export{D as default};