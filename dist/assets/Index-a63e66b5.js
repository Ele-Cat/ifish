import{_ as y,u as C,a as B,t as I}from"./App-d5c81cd4.js";import{E as S,r as p,h as a,i as l,q as n,F as m,s as b,b as $,z as r,y as _,B as d,u as g,R as V,N as Y,j,k as D,C as E}from"./index-d011c746.js";const H={class:"news"},O={class:"news-box"},L={class:"news-title"},M=["title"],R={key:2},q=["href","title"],z={__name:"Index",setup(A){const{useNewsStore:x}=C(),k=S(()=>x.lists.filter(t=>t.visible)),v=(t,s)=>{const u=`https://api.lolimi.cn/API/jhrb/?hot=${t.value}`;t.isFetching=!0,t.data=[],B.get(u).then(h=>{const{data:f,code:e,updateTime:c}=h.data;e===200&&(t.data=f.sort((o,i)=>i.hot-o.hot),t.updateTime=F(c),s&&I({content:`${t.label}拉取成功！`})),t.isFetching=!1}).catch(()=>{t.isFetching=!1})};k.value.forEach(t=>{v(t,!1)});const F=t=>$(t).format("YYYY-MM-DD HH:mm:ss"),N=t=>{if(t){let s=t.toString();return s.indexOf("万")>=0||Number(s)<1e4?s:(Number(s)/1e4).toFixed(1)+"万"}};return(t,s)=>{const u=p("a-spin"),h=p("a-empty"),f=p("perfect-scrollbar");return a(),l("div",H,[n("div",O,[(a(!0),l(m,null,b(k.value,e=>(a(),l("div",{class:"news-item bf",key:e.key},[n("div",L,[n("p",null,r(e.label),1),n("p",{title:`更新时间${e.updateTime}`},[_(r(e.updateTime),1),e.isFetching?(a(),d(g(Y),{key:1,title:"拉取中..."})):(a(),d(g(V),{key:0,title:`拉取最新${e.label}`,onClick:c=>v(e,!0)},null,8,["title","onClick"]))],8,M)]),j(f,{class:"scroll-bar"},{default:D(()=>{var c;return[e.isFetching?(a(),d(u,{key:0,tip:"加载中..."})):!e.isFetching&&!((c=e.data)!=null&&c.length)?(a(),d(h,{key:1,description:"暂无数据"})):(a(),l("div",R,[(a(!0),l(m,null,b(e.data,(o,i)=>(a(),l("a",{class:"news-info",key:i,href:o.url,title:o.title,target:"_blank"},[n("span",null,[_(r(i+1)+".",1),e.value==="历史上的今天"?(a(),l(m,{key:0},[_("【"+r(o.year)+"年】",1)],64)):E("",!0),_(r(o.title),1)]),n("span",null,r(N(o.hot)),1)],8,q))),128))]))]}),_:2},1024)]))),128))])])}}},J=y(z,[["__scopeId","data-v-1e733e58"]]);export{J as default};
