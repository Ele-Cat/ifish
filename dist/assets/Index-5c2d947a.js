import{_ as y,u as C,z as I,a as p,o as a,b as l,d as n,F as m,l as b,t as c,f as d,j as _,e as g,R as S,T as $,c as B,w as V,k as Y,s as j,q as D,U as H}from"./index-c76756ee.js";const O={class:"news"},E={class:"news-box"},L={class:"news-title"},M=["title"],R={key:2},q=["href","title"],z={__name:"Index",setup(A){const{useNewsStore:x}=C(),k=I(()=>x.lists.filter(t=>t.visible)),v=(t,s)=>{const u=`https://api.lolimi.cn/API/jhrb/?hot=${t.value}`;t.isFetching=!0,t.data=[],j.get(u).then(f=>{const{data:h,code:e,updateTime:r}=f.data;e===200&&(t.data=h.sort((o,i)=>i.hot-o.hot),t.updateTime=F(r),s&&D({content:`${t.label}拉取成功！`})),t.isFetching=!1}).catch(()=>{t.isFetching=!1})};k.value.forEach(t=>{v(t,!1)});const F=t=>H(t).format("YYYY-MM-DD HH:mm:ss"),N=t=>{if(t){let s=t.toString();return s.indexOf("万")>=0||Number(s)<1e4?s:(Number(s)/1e4).toFixed(1)+"万"}};return(t,s)=>{const u=p("a-spin"),f=p("a-empty"),h=p("perfect-scrollbar");return a(),l("div",O,[n("div",E,[(a(!0),l(m,null,b(k.value,e=>(a(),l("div",{class:"news-item bf",key:e.key},[n("div",L,[n("p",null,c(e.label),1),n("p",{title:`更新时间${e.updateTime}`},[d(c(e.updateTime),1),e.isFetching?(a(),_(g($),{key:1,title:"拉取中..."})):(a(),_(g(S),{key:0,title:`拉取最新${e.label}`,onClick:r=>v(e,!0)},null,8,["title","onClick"]))],8,M)]),B(h,{class:"scroll-bar"},{default:V(()=>{var r;return[e.isFetching?(a(),_(u,{key:0,tip:"加载中..."})):!e.isFetching&&!((r=e.data)!=null&&r.length)?(a(),_(f,{key:1,description:"暂无数据"})):(a(),l("div",R,[(a(!0),l(m,null,b(e.data,(o,i)=>(a(),l("a",{class:"news-info",key:i,href:o.url,title:o.title,target:"_blank"},[n("span",null,[d(c(i+1)+".",1),e.value==="历史上的今天"?(a(),l(m,{key:0},[d("【"+c(o.year)+"年】",1)],64)):Y("",!0),d(c(o.title),1)]),n("span",null,c(N(o.hot)),1)],8,q))),128))]))]}),_:2},1024)]))),128))])])}}},U=y(z,[["__scopeId","data-v-1e733e58"]]);export{U as default};
