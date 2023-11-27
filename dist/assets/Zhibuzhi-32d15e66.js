import{q as Q,E as V,r as g,h as r,i as s,s as H,l as j,j as u,k as l,F as i,D as b,t as k,u as w,C as p,z as d,B as f,bu as $,M as F,N as Z}from"./index-dd1c0eec.js";import{e as M,w as O,c as P,b as T,v as L,d as G}from"./enums-cf458477.js";import{_ as J}from"./App-fdd16137.js";const A=h=>(F("data-v-6c9b8863"),h=h(),Z(),h),K=["src"],W={class:"zhibuzhi"},X={key:2,class:"cost-performance-box"},Y={class:"cost-performance"},ee={class:"tips"},ae=A(()=>H("p",{class:"notes"},"低于0.8很惨，高于1.5很爽，高于2.0爽到爆",-1)),le=A(()=>H("p",{class:"bottom"},"来算算你的工作值不值~",-1)),ue={__name:"Zhibuzhi",props:{app:{type:Object,default:()=>{}}},setup(h){const x=Q(!1),n=Q(1),S=Q(),z={span:4},o=V({averageDailySalary:void 0,workingHours:void 0,commutingHours:void 0,fishingHours:void 0,education:void 0,workEnvironment:void 0,colleagueAppearance:void 0,colleagueQuality:void 0,vocationalQualification:void 0,workHours:void 0}),I={averageDailySalary:[{required:!0,message:"请输入",trigger:["change","blur"]}],workingHours:[{required:!0,message:"请输入",trigger:["change","blur"]}],commutingHours:[{required:!0,message:"请输入",trigger:["change","blur"]}],fishingHours:[{required:!0,message:"请输入",trigger:["change","blur"]}],education:[{required:!0,message:"请选择",trigger:["change","blur"]}],workEnvironment:[{required:!0,message:"请选择",trigger:["change","blur"]}],colleagueAppearance:[{required:!0,message:"请选择",trigger:["change","blur"]}],colleagueQuality:[{required:!0,message:"请选择",trigger:["change","blur"]}],vocationalQualification:[{required:!0,message:"请选择",trigger:["change","blur"]}],workHours:[{required:!0,message:"请选择",trigger:["change","blur"]}]},N=()=>{S.value.validate(["averageDailySalary","workingHours","commutingHours","fishingHours"]).then(()=>{n.value++}).catch(m=>{console.log("error",m)})},C=Q(),U=Q(""),B=()=>{S.value.validate(["education","workEnvironment","colleagueAppearance","colleagueQuality","vocationalQualification","workHours"]).then(()=>{const{averageDailySalary:m,colleagueAppearance:a,colleagueQuality:_,commutingHours:t,education:c,fishingHours:v,vocationalQualification:y,workEnvironment:q,workHours:D,workingHours:E}=$(o);C.value=(m*(q*a*_)*D/(35*(E+t-.5*v)*c*y)).toFixed(2),U.value=C.value<.8?"太惨了！ 为你抹泪~~":C.value<1.5?"普普通通！ 马马虎虎！熬着吧。":C.value<2?"好公司啊！令人羡慕至极。":"爽爆了！ 大佬您公司还招人吗？",n.value++}).catch(m=>{console.log("error",m)})},R=()=>{n.value=1};return(m,a)=>{const _=g("a-input-number"),t=g("a-form-item"),c=g("a-select-option"),v=g("a-select"),y=g("a-button"),q=g("a-row"),D=g("a-form"),E=g("IDialog");return r(),s(i,null,[H("img",{src:h.app.icon,alt:"",onClick:a[0]||(a[0]=j(e=>x.value=!0,["stop"]))},null,8,K),u(E,{title:"这班上的值不值",visible:x.value,onOk:a[12]||(a[12]=e=>x.value=!1),onCancel:a[13]||(a[13]=e=>x.value=!1)},{default:l(()=>[H("div",W,[u(D,{ref_key:"formRef",ref:S,model:o,rules:I,"label-col":z},{default:l(()=>[n.value===1?(r(),s(i,{key:0},[u(t,{label:"平均日薪",name:"averageDailySalary"},{default:l(()=>[u(_,{min:0,max:999999,value:o.averageDailySalary,"onUpdate:value":a[1]||(a[1]=e=>o.averageDailySalary=e),placeholder:"月薪/工作日（单位：元）"},null,8,["value"])]),_:1}),u(t,{label:"工作时长",name:"workingHours"},{default:l(()=>[u(_,{min:0,max:24,value:o.workingHours,"onUpdate:value":a[2]||(a[2]=e=>o.workingHours=e),placeholder:"上班时间-上班时间（单位：小时）"},null,8,["value"])]),_:1}),u(t,{label:"通勤时长",required:"",name:"commutingHours"},{default:l(()=>[u(_,{min:0,max:24,value:o.commutingHours,"onUpdate:value":a[3]||(a[3]=e=>o.commutingHours=e),placeholder:"上下班通勤时间（单位：小时）"},null,8,["value"])]),_:1}),u(t,{label:"摸鱼时长",name:"fishingHours"},{default:l(()=>[u(_,{min:0,max:24,value:o.fishingHours,"onUpdate:value":a[4]||(a[4]=e=>o.fishingHours=e),placeholder:"摸鱼+吃饭+午休时间"},null,8,["value"])]),_:1})],64)):b("",!0),n.value===2?(r(),s(i,{key:1},[u(t,{label:"学历",name:"education"},{default:l(()=>[u(v,{value:o.education,"onUpdate:value":a[5]||(a[5]=e=>o.education=e),allowClear:"",placeholder:"请选择"},{default:l(()=>[(r(!0),s(i,null,k(w(M),e=>(r(),p(c,{value:e.value,key:e.value},{default:l(()=>[d(f(e.label),1)]),_:2},1032,["value"]))),128))]),_:1},8,["value"])]),_:1}),u(t,{label:"工作环境",name:"workEnvironment"},{default:l(()=>[u(v,{value:o.workEnvironment,"onUpdate:value":a[6]||(a[6]=e=>o.workEnvironment=e),allowClear:"",placeholder:"请选择"},{default:l(()=>[(r(!0),s(i,null,k(w(O),e=>(r(),p(c,{value:e.value,key:e.value},{default:l(()=>[d(f(e.label),1)]),_:2},1032,["value"]))),128))]),_:1},8,["value"])]),_:1}),u(t,{label:"同事颜值",name:"colleagueAppearance"},{default:l(()=>[u(v,{value:o.colleagueAppearance,"onUpdate:value":a[7]||(a[7]=e=>o.colleagueAppearance=e),allowClear:"",placeholder:"请选择"},{default:l(()=>[(r(!0),s(i,null,k(w(P),e=>(r(),p(c,{value:e.value,key:e.value},{default:l(()=>[d(f(e.label),1)]),_:2},1032,["value"]))),128))]),_:1},8,["value"])]),_:1}),u(t,{label:"同事质量",name:"colleagueQuality"},{default:l(()=>[u(v,{value:o.colleagueQuality,"onUpdate:value":a[8]||(a[8]=e=>o.colleagueQuality=e),allowClear:"",placeholder:"请选择"},{default:l(()=>[(r(!0),s(i,null,k(w(T),e=>(r(),p(c,{value:e.value,key:e.value},{default:l(()=>[d(f(e.label),1)]),_:2},1032,["value"]))),128))]),_:1},8,["value"])]),_:1}),u(t,{label:"职业资质",name:"vocationalQualification"},{default:l(()=>[u(v,{value:o.vocationalQualification,"onUpdate:value":a[9]||(a[9]=e=>o.vocationalQualification=e),allowClear:"",placeholder:"请选择"},{default:l(()=>[(r(!0),s(i,null,k(w(L),e=>(r(),p(c,{value:e.value,key:e.value},{default:l(()=>[d(f(e.label),1)]),_:2},1032,["value"]))),128))]),_:1},8,["value"])]),_:1}),u(t,{label:"上班时间",name:"workHours"},{default:l(()=>[u(v,{value:o.workHours,"onUpdate:value":a[10]||(a[10]=e=>o.workHours=e),allowClear:"",placeholder:"请选择"},{default:l(()=>[(r(!0),s(i,null,k(w(G),e=>(r(),p(c,{value:e.value,key:e.value},{default:l(()=>[d(f(e.label),1)]),_:2},1032,["value"]))),128))]),_:1},8,["value"])]),_:1})],64)):b("",!0),n.value===3?(r(),s("div",X,[H("p",Y,f(C.value),1),H("p",ee,f(U.value),1),ae])):b("",!0),u(q,{type:"flex",justify:n.value!=3?"end":"center"},{default:l(()=>[n.value===1?(r(),p(y,{key:0,type:"primary",onClick:N},{default:l(()=>[d("下一步")]),_:1})):b("",!0),n.value===2?(r(),s(i,{key:1},[u(y,{onClick:a[11]||(a[11]=e=>n.value--)},{default:l(()=>[d("上一步")]),_:1}),u(y,{type:"primary",onClick:B,style:{"margin-left":"12px"}},{default:l(()=>[d("查看结果")]),_:1})],64)):b("",!0),n.value===3?(r(),p(y,{key:2,type:"primary",onClick:R},{default:l(()=>[d("重新计算")]),_:1})):b("",!0)]),_:1},8,["justify"])]),_:1},8,["model"]),le])]),_:1},8,["visible"])],64)}}},ne=J(ue,[["__scopeId","data-v-6c9b8863"]]);export{ne as default};
