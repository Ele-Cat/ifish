import{_ as y,y as C,h as V,E as b,r as _,o as a,j as i,c as d,z as $,d as o,F as m,k as p,D as n,C as B,e as g,R as I,L as N,i as L,a as R,G as f}from"./index-277de8d2.js";const j={class:"news"},z={class:"news-box"},D={class:"news-title"},E=["title"],O={key:0},G=["href","title"],S={__name:"Index",setup(q){const c=C([{label:"知乎热议",value:"zhihu",datas:[],isFetching:!0},{label:"百度热搜",value:"baidu",datas:[],isFetching:!0},{label:"抖音热搜",value:"douyin",datas:[],isFetching:!0},{label:"微博热搜",value:"weibo",datas:[],isFetching:!0},{label:"b站热搜",value:"bilibili",datas:[],isFetching:!0},{label:"贴吧热议",value:"tieba",datas:[],isFetching:!0},{label:"头条热搜",value:"toutiao",datas:[],isFetching:!0},{label:"历史上的今天",value:"history",datas:[],isFetching:!0},{label:"52破解",value:"pojie52",datas:[],isFetching:!0}]),h=V(!1);b.get("https://api.moyuduck.com/hot/all").then(s=>{for(const l in s.data.data)c.map(t=>{t.value===l&&(t.datas=s.data.data[l]),t.isFetching=!1});h.value=!0});const k=s=>{c.map(l=>{l.value===s&&(l.isFetching=!0)}),b.get(`https://api.moyuduck.com/hot/top?type=${s}`).then(l=>{c.map(t=>{t.value===s&&(t.datas=l.data.data,t.isFetching=!1,f({content:`${t.label}拉取成功`}))})}).catch(()=>{f({content:"拉取失败",type:"error"})})};return(s,l)=>{const t=_("a-spin"),F=_("a-empty"),x=_("perfect-scrollbar");return a(),i("div",j,[s.isFetching&&!h.value?(a(),d(t,{key:0})):$("",!0),o("div",z,[(a(!0),i(m,null,p(c,e=>(a(),i("div",{class:"news-item bf",key:e.key},[o("div",D,[o("p",null,n(e.label),1),o("p",{title:`更新时间${e.datas.time}`},[B(n(e.datas.time),1),e.isFetching?(a(),d(g(N),{key:1,title:"拉取中..."})):(a(),d(g(I),{key:0,title:`拉取最新${e.label}`,onClick:u=>k(e.value)},null,8,["title","onClick"]))],8,E)]),L(x,{class:"scroll-bar"},{default:R(()=>{var u;return[(u=e.datas.hotTops)!=null&&u.length?(a(),i("div",O,[(a(!0),i(m,null,p(e.datas.hotTops,(r,v)=>(a(),i("a",{class:"news-info",key:v,href:r.url,title:r.title,target:"_blank"},[o("span",null,n(v+1)+"."+n(r.title),1),o("span",null,n(r.hotValue),1)],8,G))),128))])):(a(),d(F,{key:1,description:"暂无数据"}))]}),_:2},1024)]))),128))])])}}},H=y(S,[["__scopeId","data-v-a2589604"]]);export{H as default};
