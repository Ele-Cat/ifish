import{_ as N,h as C,y as R,r as f,o as r,j as s,i as u,a,F as v,z as y,k,e as w,c as g,C as i,D as p,d as q,be as I,p as V,b as j}from"./index-36c0e35a.js";const F=[{label:"专科及以下学历",value:.8},{label:"普通本科学历",value:1},{label:"211/985本科学历",value:1.2},{label:"普通硕士学历",value:1.4},{label:"211/985硕士学历",value:1.6},{label:"普通博士学历",value:1.8},{label:"211/985博士学历",value:2}],Z=[{label:"偏僻地区或郊区的工厂、工地、艰苦户外等工作环境",value:.8},{label:"工厂、工地、艰苦户外等工作环境",value:.9},{label:"普通工作环境",value:1},{label:"CBD、体制内等工作环境",value:1.1}],P=[{label:"周围没有好看异性",value:.9},{label:"周围好看的异性不多不少",value:1},{label:"周围很多好看异性",value:1.1}],T=[{label:"周围脑残同事较多",value:.95},{label:"周围基本上都是普通同事",value:1},{label:"周围优秀同事较多",value:1.05}],L=[{label:"无要求",value:1},{label:"建造、造价、监理",value:1.05},{label:"建筑、岩土、结构",value:1.1},{label:"主任医师、教授",value:1.15}],$=[{label:"08:30前上班",value:.95},{label:"08:30后上班",value:1}];const G=H=>(V("data-v-e0c89882"),H=H(),j(),H),J={class:"zhibuzhi"},K={key:2,class:"cost-performance-box"},M={class:"cost-performance"},O={class:"tips"},W=G(()=>q("p",{class:"notes"},"低于0.8很惨，高于1.5很爽，高于2.0爽到爆",-1)),X={__name:"Zhibuzhi",setup(H){const t=C(1),Q=C(),U={span:4},o=R({averageDailySalary:void 0,workingHours:void 0,commutingHours:void 0,fishingHours:void 0,education:void 0,workEnvironment:void 0,colleagueAppearance:void 0,colleagueQuality:void 0,vocationalQualification:void 0,workHours:void 0}),E={averageDailySalary:[{required:!0,message:"请输入",trigger:["change","blur"]}],workingHours:[{required:!0,message:"请输入",trigger:["change","blur"]}],commutingHours:[{required:!0,message:"请输入",trigger:["change","blur"]}],fishingHours:[{required:!0,message:"请输入",trigger:["change","blur"]}],education:[{required:!0,message:"请选择",trigger:["change","blur"]}],workEnvironment:[{required:!0,message:"请选择",trigger:["change","blur"]}],colleagueAppearance:[{required:!0,message:"请选择",trigger:["change","blur"]}],colleagueQuality:[{required:!0,message:"请选择",trigger:["change","blur"]}],vocationalQualification:[{required:!0,message:"请选择",trigger:["change","blur"]}],workHours:[{required:!0,message:"请选择",trigger:["change","blur"]}]},A=()=>{Q.value.validate(["averageDailySalary","workingHours","commutingHours","fishingHours"]).then(()=>{t.value++}).catch(m=>{console.log("error",m)})},h=C(),D=C(""),z=()=>{Q.value.validate(["education","workEnvironment","colleagueAppearance","colleagueQuality","vocationalQualification","workHours"]).then(()=>{const{averageDailySalary:m,colleagueAppearance:l,colleagueQuality:_,commutingHours:n,education:c,fishingHours:d,vocationalQualification:b,workEnvironment:x,workHours:S,workingHours:e}=I(o);h.value=(m*(x*l*_)*S/(35*(e+n-.5*d)*c*b)).toFixed(2),D.value=h.value<.8?"太惨了！ 为你抹泪~~":h.value<1.5?"普普通通！ 马马虎虎！熬着吧。":h.value<2?"好公司啊！令人羡慕至极。":"爽爆了！ 大佬您公司还招人吗？",t.value++}).catch(m=>{console.log("error",m)})},B=()=>{t.value=1};return(m,l)=>{const _=f("a-input-number"),n=f("a-form-item"),c=f("a-select-option"),d=f("a-select"),b=f("a-button"),x=f("a-row"),S=f("a-form");return r(),s("div",J,[u(S,{ref_key:"formRef",ref:Q,model:o,rules:E,"label-col":U},{default:a(()=>[t.value===1?(r(),s(v,{key:0},[u(n,{label:"平均日薪",name:"averageDailySalary"},{default:a(()=>[u(_,{min:0,max:999999,value:o.averageDailySalary,"onUpdate:value":l[0]||(l[0]=e=>o.averageDailySalary=e),placeholder:"月薪/工作日（单位：元）"},null,8,["value"])]),_:1}),u(n,{label:"工作时长",name:"workingHours"},{default:a(()=>[u(_,{min:0,max:24,value:o.workingHours,"onUpdate:value":l[1]||(l[1]=e=>o.workingHours=e),placeholder:"上班时间-上班时间（单位：小时）"},null,8,["value"])]),_:1}),u(n,{label:"通勤时长",required:"",name:"commutingHours"},{default:a(()=>[u(_,{min:0,max:24,value:o.commutingHours,"onUpdate:value":l[2]||(l[2]=e=>o.commutingHours=e),placeholder:"上下班通勤时间（单位：小时）"},null,8,["value"])]),_:1}),u(n,{label:"摸鱼时长",name:"fishingHours"},{default:a(()=>[u(_,{min:0,max:24,value:o.fishingHours,"onUpdate:value":l[3]||(l[3]=e=>o.fishingHours=e),placeholder:"摸鱼+吃饭+午休时间"},null,8,["value"])]),_:1})],64)):y("",!0),t.value===2?(r(),s(v,{key:1},[u(n,{label:"学历",name:"education"},{default:a(()=>[u(d,{value:o.education,"onUpdate:value":l[4]||(l[4]=e=>o.education=e),allowClear:"",placeholder:"请选择"},{default:a(()=>[(r(!0),s(v,null,k(w(F),e=>(r(),g(c,{value:e.value,key:e.value},{default:a(()=>[i(p(e.label),1)]),_:2},1032,["value"]))),128))]),_:1},8,["value"])]),_:1}),u(n,{label:"工作环境",name:"workEnvironment"},{default:a(()=>[u(d,{value:o.workEnvironment,"onUpdate:value":l[5]||(l[5]=e=>o.workEnvironment=e),allowClear:"",placeholder:"请选择"},{default:a(()=>[(r(!0),s(v,null,k(w(Z),e=>(r(),g(c,{value:e.value,key:e.value},{default:a(()=>[i(p(e.label),1)]),_:2},1032,["value"]))),128))]),_:1},8,["value"])]),_:1}),u(n,{label:"同事颜值",name:"colleagueAppearance"},{default:a(()=>[u(d,{value:o.colleagueAppearance,"onUpdate:value":l[6]||(l[6]=e=>o.colleagueAppearance=e),allowClear:"",placeholder:"请选择"},{default:a(()=>[(r(!0),s(v,null,k(w(P),e=>(r(),g(c,{value:e.value,key:e.value},{default:a(()=>[i(p(e.label),1)]),_:2},1032,["value"]))),128))]),_:1},8,["value"])]),_:1}),u(n,{label:"同事质量",name:"colleagueQuality"},{default:a(()=>[u(d,{value:o.colleagueQuality,"onUpdate:value":l[7]||(l[7]=e=>o.colleagueQuality=e),allowClear:"",placeholder:"请选择"},{default:a(()=>[(r(!0),s(v,null,k(w(T),e=>(r(),g(c,{value:e.value,key:e.value},{default:a(()=>[i(p(e.label),1)]),_:2},1032,["value"]))),128))]),_:1},8,["value"])]),_:1}),u(n,{label:"职业资质",name:"vocationalQualification"},{default:a(()=>[u(d,{value:o.vocationalQualification,"onUpdate:value":l[8]||(l[8]=e=>o.vocationalQualification=e),allowClear:"",placeholder:"请选择"},{default:a(()=>[(r(!0),s(v,null,k(w(L),e=>(r(),g(c,{value:e.value,key:e.value},{default:a(()=>[i(p(e.label),1)]),_:2},1032,["value"]))),128))]),_:1},8,["value"])]),_:1}),u(n,{label:"上班时间",name:"workHours"},{default:a(()=>[u(d,{value:o.workHours,"onUpdate:value":l[9]||(l[9]=e=>o.workHours=e),allowClear:"",placeholder:"请选择"},{default:a(()=>[(r(!0),s(v,null,k(w($),e=>(r(),g(c,{value:e.value,key:e.value},{default:a(()=>[i(p(e.label),1)]),_:2},1032,["value"]))),128))]),_:1},8,["value"])]),_:1})],64)):y("",!0),t.value===3?(r(),s("div",K,[q("p",M,p(h.value),1),q("p",O,p(D.value),1),W])):y("",!0),u(x,{type:"flex",justify:t.value!=3?"end":"center"},{default:a(()=>[t.value===1?(r(),g(b,{key:0,type:"primary",onClick:A},{default:a(()=>[i("下一步")]),_:1})):y("",!0),t.value===2?(r(),s(v,{key:1},[u(b,{onClick:l[10]||(l[10]=e=>t.value--)},{default:a(()=>[i("上一步")]),_:1}),u(b,{type:"primary",onClick:z,style:{"margin-left":"12px"}},{default:a(()=>[i("查看结果")]),_:1})],64)):y("",!0),t.value===3?(r(),g(b,{key:2,type:"primary",onClick:B},{default:a(()=>[i("重新计算")]),_:1})):y("",!0)]),_:1},8,["justify"])]),_:1},8,["model"])])}}},ee=N(X,[["__scopeId","data-v-e0c89882"]]);export{ee as default};
