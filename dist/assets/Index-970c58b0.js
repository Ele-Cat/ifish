import{_ as $,a$ as y,r as C,q as v,b as _,o as e,d as i,j as r,k as V,g as o,F as m,m as f,t as c,f as B,e as g,bO as I,bP as N,c as O,i as j,bQ as p}from"./index-ecdf5d5d.js";const L={class:"news"},R={class:"news-box"},q={class:"news-title"},z=["title"],D={key:0},E=["href","title"],P={__name:"Index",setup(Q){const n=y([{label:"知乎热议",value:"zhihu",datas:[],isFetching:!0},{label:"百度热搜",value:"baidu",datas:[],isFetching:!0},{label:"抖音热搜",value:"douyin",datas:[],isFetching:!0},{label:"微博热搜",value:"weibo",datas:[],isFetching:!0},{label:"b站热搜",value:"bilibili",datas:[],isFetching:!0},{label:"贴吧热议",value:"tieba",datas:[],isFetching:!0},{label:"头条热搜",value:"toutiao",datas:[],isFetching:!0},{label:"历史上的今天",value:"history",datas:[],isFetching:!0},{label:"52破解",value:"pojie52",datas:[],isFetching:!0}]),h=C(!1);v.get("https://api.moyuduck.com/hot/all").then(l=>{for(const a in l.data.data)n.map(t=>{t.value===a&&(t.datas=l.data.data[a]),t.isFetching=!1});h.value=!0});const k=l=>{n.map(a=>{a.value===l&&(a.isFetching=!0)}),v.get(`https://api.moyuduck.com/hot/top?type=${l}`).then(a=>{n.map(t=>{t.value===l&&(t.datas=a.data.data||[],t.isFetching=!1,p({type:a.data.data?"success":"warning",content:a.data.data?`${t.label}拉取成功`:`${t.label}拉取失败`}))})}).catch(()=>{p({content:"拉取失败",type:"error"})})};return(l,a)=>{const t=_("a-spin"),F=_("a-empty"),x=_("perfect-scrollbar");return e(),i("div",L,[l.isFetching&&!h.value?(e(),r(t,{key:0})):V("",!0),o("div",R,[(e(!0),i(m,null,f(n,s=>(e(),i("div",{class:"news-item bf",key:s.key},[o("div",q,[o("p",null,c(s.label),1),o("p",{title:`更新时间${s.datas.time}`},[B(c(s.datas.time),1),s.isFetching?(e(),r(g(N),{key:1,title:"拉取中..."})):(e(),r(g(I),{key:0,title:`拉取最新${s.label}`,onClick:u=>k(s.value)},null,8,["title","onClick"]))],8,z)]),O(x,{class:"scroll-bar"},{default:j(()=>{var u;return[(u=s.datas.hotTops)!=null&&u.length?(e(),i("div",D,[(e(!0),i(m,null,f(s.datas.hotTops,(d,b)=>(e(),i("a",{class:"news-info",key:b,href:d.url,title:d.title,target:"_blank"},[o("span",null,c(b+1)+"."+c(d.title),1),o("span",null,c(d.hotValue),1)],8,E))),128))])):(e(),r(F,{key:1,description:"暂无数据"}))]}),_:2},1024)]))),128))])])}}},A=$(P,[["__scopeId","data-v-2cbf0216"]]);export{A as default};
