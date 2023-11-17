import{_ as V,r as C,b1 as $,a as g,o as r,b as i,f as Q,k as j,c as u,g as l,F as s,i as k,j as y,d as w,bX as B,h as p,e as d,t as f,bY as Z,bZ as F,b_ as O,b$ as P,c0 as T,bk as L,p as M,m as X}from"./index-0f40f7ec.js";const Y=H=>(M("data-v-330acf28"),H=H(),X(),H),G=["src"],J={class:"zhibuzhi"},K={key:2,class:"cost-performance-box"},W={class:"cost-performance"},ee={class:"tips"},ae=Y(()=>Q("p",{class:"notes"},"低于0.8很惨，高于1.5很爽，高于2.0爽到爆",-1)),le={__name:"Zhibuzhi",props:{app:{type:Object,default:()=>{}}},setup(H){const x=C(!1),t=C(1),S=C(),A={span:4},o=$({averageDailySalary:void 0,workingHours:void 0,commutingHours:void 0,fishingHours:void 0,education:void 0,workEnvironment:void 0,colleagueAppearance:void 0,colleagueQuality:void 0,vocationalQualification:void 0,workHours:void 0}),I={averageDailySalary:[{required:!0,message:"请输入",trigger:["change","blur"]}],workingHours:[{required:!0,message:"请输入",trigger:["change","blur"]}],commutingHours:[{required:!0,message:"请输入",trigger:["change","blur"]}],fishingHours:[{required:!0,message:"请输入",trigger:["change","blur"]}],education:[{required:!0,message:"请选择",trigger:["change","blur"]}],workEnvironment:[{required:!0,message:"请选择",trigger:["change","blur"]}],colleagueAppearance:[{required:!0,message:"请选择",trigger:["change","blur"]}],colleagueQuality:[{required:!0,message:"请选择",trigger:["change","blur"]}],vocationalQualification:[{required:!0,message:"请选择",trigger:["change","blur"]}],workHours:[{required:!0,message:"请选择",trigger:["change","blur"]}]},z=()=>{S.value.validate(["averageDailySalary","workingHours","commutingHours","fishingHours"]).then(()=>{t.value++}).catch(m=>{console.log("error",m)})},h=C(),E=C(""),N=()=>{S.value.validate(["education","workEnvironment","colleagueAppearance","colleagueQuality","vocationalQualification","workHours"]).then(()=>{const{averageDailySalary:m,colleagueAppearance:a,colleagueQuality:_,commutingHours:n,education:c,fishingHours:v,vocationalQualification:b,workEnvironment:q,workHours:D,workingHours:U}=L(o);h.value=(m*(q*a*_)*D/(35*(U+n-.5*v)*c*b)).toFixed(2),E.value=h.value<.8?"太惨了！ 为你抹泪~~":h.value<1.5?"普普通通！ 马马虎虎！熬着吧。":h.value<2?"好公司啊！令人羡慕至极。":"爽爆了！ 大佬您公司还招人吗？",t.value++}).catch(m=>{console.log("error",m)})},R=()=>{t.value=1};return(m,a)=>{const _=g("a-input-number"),n=g("a-form-item"),c=g("a-select-option"),v=g("a-select"),b=g("a-button"),q=g("a-row"),D=g("a-form"),U=g("IDialog");return r(),i(s,null,[Q("img",{src:H.app.icon,alt:"",onClick:a[0]||(a[0]=j(e=>x.value=!0,["stop"]))},null,8,G),u(U,{title:"这班上的值不值",visible:x.value,onOk:a[12]||(a[12]=e=>x.value=!1),onCancel:a[13]||(a[13]=e=>x.value=!1)},{default:l(()=>[Q("div",J,[u(D,{ref_key:"formRef",ref:S,model:o,rules:I,"label-col":A},{default:l(()=>[t.value===1?(r(),i(s,{key:0},[u(n,{label:"平均日薪",name:"averageDailySalary"},{default:l(()=>[u(_,{min:0,max:999999,value:o.averageDailySalary,"onUpdate:value":a[1]||(a[1]=e=>o.averageDailySalary=e),placeholder:"月薪/工作日（单位：元）"},null,8,["value"])]),_:1}),u(n,{label:"工作时长",name:"workingHours"},{default:l(()=>[u(_,{min:0,max:24,value:o.workingHours,"onUpdate:value":a[2]||(a[2]=e=>o.workingHours=e),placeholder:"上班时间-上班时间（单位：小时）"},null,8,["value"])]),_:1}),u(n,{label:"通勤时长",required:"",name:"commutingHours"},{default:l(()=>[u(_,{min:0,max:24,value:o.commutingHours,"onUpdate:value":a[3]||(a[3]=e=>o.commutingHours=e),placeholder:"上下班通勤时间（单位：小时）"},null,8,["value"])]),_:1}),u(n,{label:"摸鱼时长",name:"fishingHours"},{default:l(()=>[u(_,{min:0,max:24,value:o.fishingHours,"onUpdate:value":a[4]||(a[4]=e=>o.fishingHours=e),placeholder:"摸鱼+吃饭+午休时间"},null,8,["value"])]),_:1})],64)):k("",!0),t.value===2?(r(),i(s,{key:1},[u(n,{label:"学历",name:"education"},{default:l(()=>[u(v,{value:o.education,"onUpdate:value":a[5]||(a[5]=e=>o.education=e),allowClear:"",placeholder:"请选择"},{default:l(()=>[(r(!0),i(s,null,y(w(B),e=>(r(),p(c,{value:e.value,key:e.value},{default:l(()=>[d(f(e.label),1)]),_:2},1032,["value"]))),128))]),_:1},8,["value"])]),_:1}),u(n,{label:"工作环境",name:"workEnvironment"},{default:l(()=>[u(v,{value:o.workEnvironment,"onUpdate:value":a[6]||(a[6]=e=>o.workEnvironment=e),allowClear:"",placeholder:"请选择"},{default:l(()=>[(r(!0),i(s,null,y(w(Z),e=>(r(),p(c,{value:e.value,key:e.value},{default:l(()=>[d(f(e.label),1)]),_:2},1032,["value"]))),128))]),_:1},8,["value"])]),_:1}),u(n,{label:"同事颜值",name:"colleagueAppearance"},{default:l(()=>[u(v,{value:o.colleagueAppearance,"onUpdate:value":a[7]||(a[7]=e=>o.colleagueAppearance=e),allowClear:"",placeholder:"请选择"},{default:l(()=>[(r(!0),i(s,null,y(w(F),e=>(r(),p(c,{value:e.value,key:e.value},{default:l(()=>[d(f(e.label),1)]),_:2},1032,["value"]))),128))]),_:1},8,["value"])]),_:1}),u(n,{label:"同事质量",name:"colleagueQuality"},{default:l(()=>[u(v,{value:o.colleagueQuality,"onUpdate:value":a[8]||(a[8]=e=>o.colleagueQuality=e),allowClear:"",placeholder:"请选择"},{default:l(()=>[(r(!0),i(s,null,y(w(O),e=>(r(),p(c,{value:e.value,key:e.value},{default:l(()=>[d(f(e.label),1)]),_:2},1032,["value"]))),128))]),_:1},8,["value"])]),_:1}),u(n,{label:"职业资质",name:"vocationalQualification"},{default:l(()=>[u(v,{value:o.vocationalQualification,"onUpdate:value":a[9]||(a[9]=e=>o.vocationalQualification=e),allowClear:"",placeholder:"请选择"},{default:l(()=>[(r(!0),i(s,null,y(w(P),e=>(r(),p(c,{value:e.value,key:e.value},{default:l(()=>[d(f(e.label),1)]),_:2},1032,["value"]))),128))]),_:1},8,["value"])]),_:1}),u(n,{label:"上班时间",name:"workHours"},{default:l(()=>[u(v,{value:o.workHours,"onUpdate:value":a[10]||(a[10]=e=>o.workHours=e),allowClear:"",placeholder:"请选择"},{default:l(()=>[(r(!0),i(s,null,y(w(T),e=>(r(),p(c,{value:e.value,key:e.value},{default:l(()=>[d(f(e.label),1)]),_:2},1032,["value"]))),128))]),_:1},8,["value"])]),_:1})],64)):k("",!0),t.value===3?(r(),i("div",K,[Q("p",W,f(h.value),1),Q("p",ee,f(E.value),1),ae])):k("",!0),u(q,{type:"flex",justify:t.value!=3?"end":"center"},{default:l(()=>[t.value===1?(r(),p(b,{key:0,type:"primary",onClick:z},{default:l(()=>[d("下一步")]),_:1})):k("",!0),t.value===2?(r(),i(s,{key:1},[u(b,{onClick:a[11]||(a[11]=e=>t.value--)},{default:l(()=>[d("上一步")]),_:1}),u(b,{type:"primary",onClick:N,style:{"margin-left":"12px"}},{default:l(()=>[d("查看结果")]),_:1})],64)):k("",!0),t.value===3?(r(),p(b,{key:2,type:"primary",onClick:R},{default:l(()=>[d("重新计算")]),_:1})):k("",!0)]),_:1},8,["justify"])]),_:1},8,["model"])])]),_:1},8,["visible"])],64)}}},oe=V(le,[["__scopeId","data-v-330acf28"]]);export{oe as default};