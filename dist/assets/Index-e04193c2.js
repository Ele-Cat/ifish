import{a as v}from"./axios-21b846bc.js";import{E as C,_ as V,y as $,h as B,r as h,o as e,j as o,c as d,z as I,d as n,F as b,k as g,D as c,C as N,e as f,R as L,L as R,i as j,a as z}from"./index-920b5fed.js";const k=({type:m="success",content:i="提示语",duration:r=3})=>{C.open({type:m,content:i,duration:r})};const D={class:"news"},E={class:"news-box"},O={class:"news-title"},S=["title"],q={key:0},A=["href","title"],G={__name:"Index",setup(m){const i=$([{label:"知乎热议",value:"zhihu",datas:[],isFetching:!0},{label:"百度热搜",value:"baidu",datas:[],isFetching:!0},{label:"抖音热搜",value:"douyin",datas:[],isFetching:!0},{label:"微博热搜",value:"weibo",datas:[],isFetching:!0},{label:"b站热搜",value:"bilibili",datas:[],isFetching:!0},{label:"贴吧热议",value:"tieba",datas:[],isFetching:!0},{label:"头条热搜",value:"toutiao",datas:[],isFetching:!0},{label:"历史上的今天",value:"history",datas:[],isFetching:!0},{label:"52破解",value:"pojie52",datas:[],isFetching:!0}]),r=B(!1);v.get("https://api.moyuduck.com/hot/all").then(s=>{for(const l in s.data.data)i.map(t=>{t.value===l&&(t.datas=s.data.data[l]),t.isFetching=!1});r.value=!0});const F=s=>{i.map(l=>{l.value===s&&(l.isFetching=!0)}),v.get(`https://api.moyuduck.com/hot/top?type=${s}`).then(l=>{i.map(t=>{t.value===s&&(t.datas=l.data.data,t.isFetching=!1,k({content:`${t.label}拉取成功`}))})}).catch(()=>{k({content:"拉取失败",type:"error"})})};return(s,l)=>{const t=h("a-spin"),x=h("a-empty"),y=h("perfect-scrollbar");return e(),o("div",D,[s.isFetching&&!r.value?(e(),d(t,{key:0})):I("",!0),n("div",E,[(e(!0),o(b,null,g(i,a=>(e(),o("div",{class:"news-item bf",key:a.key},[n("div",O,[n("p",null,c(a.label),1),n("p",{title:`更新时间${a.datas.time}`},[N(c(a.datas.time),1),a.isFetching?(e(),d(f(R),{key:1,title:"拉取中..."})):(e(),d(f(L),{key:0,title:`拉取最新${a.label}`,onClick:_=>F(a.value)},null,8,["title","onClick"]))],8,S)]),j(y,{class:"scroll-bar"},{default:z(()=>{var _;return[(_=a.datas.hotTops)!=null&&_.length?(e(),o("div",q,[(e(!0),o(b,null,g(a.datas.hotTops,(u,p)=>(e(),o("a",{class:"news-info",key:p,href:u.url,title:u.title,target:"_blank"},[n("span",null,c(p+1)+"."+c(u.title),1),n("span",null,c(u.hotValue),1)],8,A))),128))])):(e(),d(x,{key:1,description:"暂无数据"}))]}),_:2},1024)]))),128))])])}}},K=V(G,[["__scopeId","data-v-49032e62"]]);export{K as default};