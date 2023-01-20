import{P as z}from"./PageHeader-a1a5681d.js";import{u as K,r as X}from"./regexp-0a157ec9.js";import{f as Z,g as S,r as ee,k as U}from"./tool-e1301be4.js";import{O as te,S as ae,A as oe}from"./data-ffba0eb7.js";import{d as ne,f as re,r as O,g as se,ab as _,e as a,a as n,F as h,b as r,o as u,ac as R,c as k,u as g,af as f,ad as T,x as v,ah as A}from"./runtime-core.esm-bundler-e1893df6.js";import"./vue-router-3d96c2fa.js";import"./ReloadOutlined-8f39c8a7.js";import"./AntdIcon-ea494017.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./index-d60ffb08.js";import"./axios-641c6ca9.js";import"./index-71333aae.js";import"./useConfigInject-985b36a0.js";import"./extends-34e645d9.js";import"./runtime-dom.esm-bundler-d15a3063.js";import"./LoadingOutlined-377d3aaa.js";import"./CloseCircleFilled-f172dba6.js";import"./key-3b961902.js";import"./inherits-1b1b5999.js";import"./variablesCSS-e22db411.js";import"./setting-b9ced7ae.js";import"./index-2193c281.js";import"./StarOutlined-4c117a0a.js";import"./SyncOutlined-15adee8e.js";import"./ClearOutlined-61968c2b.js";import"./RotateRightOutlined-80c84fe8.js";import"./SaveOutlined-0f0d91c1.js";import"./UpOutlined-c02615f6.js";import"./UserOutlined-cf9a456f.js";import"./MinusCircleFilled-e71cdf93.js";import"./SignalFilled-a7fff856.js";import"./layout-ad4859fc.js";import"./lock-31147f4a.js";const le={class:"step-form-steps-box"},ie={class:"check-all"},De=ne({__name:"StepForm",setup(ue){const b={id:"",name:"",pid:null,userName:"",description:"",role:"",authority:""},o=re(b),{id:L,formRef:C,getInfo:pe,getQuery:E,goBack:ce,onFinish:B}=K({formState:o,initialState:b}),F={name:[{required:!0,message:"请输入姓名"}],pid:[{required:!0,message:"请输入用户编码"},{pattern:X.number,message:"用户编码仅支持数字",trigger:"blur"}],userName:[{required:!0,message:"请输入用户名"}],role:[{required:!0,message:"请选择角色"}],authority:[{required:!0,message:"请选择权限"}]},p=O(0),N=i=>{var e;i==="prev"?p.value--:(e=C.value)==null||e.validate().then(async()=>{var s;p.value==0&&((s=C.value)==null||s.resetFields()),p.value++})},q=()=>{ee(o,b),p.value=0},w=Z("ROLE_TYPE"),d=O(),I=i=>{o.authority="",i==="owner"?d.value=U(te):i==="securityadmin"?d.value=U(ae):i==="accessadmin"&&(d.value=U(oe))},Y=(i,e)=>{let s={};d.value.map(l=>{l.name===e.name&&(e.checkedList=i.target.checked?e.list:[]),l.checkedList.length>0&&(s[l.name]=l.checkedList)}),Object.keys(s).length>0?o.authority=JSON.stringify(s):o.authority=""},H=(i,e)=>{let s={};d.value.map(l=>{l.name===e.name&&(l.check=i.length===e.list.length,l.indeterminate=S(i.length&&i.length<e.list.length)),l.checkedList.length>0&&(s[l.name]=l.checkedList)}),Object.keys(s).length>0?o.authority=JSON.stringify(s):o.authority=""};return se(()=>{E()}),(i,e)=>{const s=r("a-step"),l=r("a-steps"),x=r("a-input"),c=r("a-form-item"),P=r("a-textarea"),$=r("a-select-option"),j=r("a-select"),J=r("a-checkbox"),V=r("a-checkbox-group"),D=r("a-divider"),G=r("a-form-item-rest"),y=r("a-button"),M=r("a-form"),Q=r("a-result"),W=r("a-card");return u(),_(h,null,[a(z,{back:!1}),a(W,{bordered:!1,class:"layout-edit-card"},{default:n(()=>[R("div",le,[a(l,{current:p.value,class:"step-form-steps"},{default:n(()=>[a(s,{title:"新建用户",disabled:""}),a(s,{title:"配置权限",disabled:""}),a(s,{title:"完成",disabled:""})]),_:1},8,["current"])]),p.value!=2?(u(),k(M,{key:0,class:"brevity-form-box",ref_key:"formRef",ref:C,model:o,rules:F,"label-col":{span:4},"wrapper-col":{span:18},autocomplete:"off",onFinish:e[7]||(e[7]=t=>g(B)(g(L)?"updateList":"createList"))},{default:n(()=>[p.value===0?(u(),_(h,{key:0},[a(c,{label:"姓名",name:"name"},{default:n(()=>[a(x,{value:o.name,"onUpdate:value":e[0]||(e[0]=t=>o.name=t)},null,8,["value"])]),_:1}),a(c,{label:"用户编码",name:"pid"},{default:n(()=>[a(x,{value:o.pid,"onUpdate:value":e[1]||(e[1]=t=>o.pid=t),disabled:g(S)(g(L))},null,8,["value","disabled"])]),_:1}),a(c,{label:"用户名",name:"userName"},{default:n(()=>[a(x,{value:o.userName,"onUpdate:value":e[2]||(e[2]=t=>o.userName=t)},null,8,["value"])]),_:1}),a(c,{label:"描述",name:"description"},{default:n(()=>[a(P,{value:o.description,"onUpdate:value":e[3]||(e[3]=t=>o.description=t),rows:4},null,8,["value"])]),_:1})],64)):f("",!0),p.value===1?(u(),_(h,{key:1},[a(c,{label:"角色",name:"role"},{default:n(()=>[a(j,{ref:"select",value:o.role,"onUpdate:value":e[4]||(e[4]=t=>o.role=t),onChange:I},{default:n(()=>[(u(!0),_(h,null,T(g(w),t=>(u(),k($,{key:t.id,value:t.value},{default:n(()=>[v(A(t.label),1)]),_:2},1032,["value"]))),128))]),_:1},8,["value"])]),_:1}),o.role?(u(),k(c,{key:0,label:"权限",name:"authority"},{default:n(()=>[a(G,null,{default:n(()=>[(u(!0),_(h,null,T(d.value,t=>(u(),_("div",{key:t.name},[R("div",ie,[a(J,{checked:t.check,"onUpdate:checked":m=>t.check=m,indeterminate:t.indeterminate,onChange:m=>Y(m,t)},{default:n(()=>[v(A(t.name),1)]),_:2},1032,["checked","onUpdate:checked","indeterminate","onChange"])]),a(V,{value:t.checkedList,"onUpdate:value":m=>t.checkedList=m,options:t.list,onChange:m=>H(m,t)},null,8,["value","onUpdate:value","options","onChange"]),a(D)]))),128))]),_:1})]),_:1})):f("",!0)],64)):f("",!0),a(c,{"wrapper-col":{offset:4}},{default:n(()=>[p.value>0?(u(),k(y,{key:0,class:"mr12",onClick:e[5]||(e[5]=t=>N("prev"))},{default:n(()=>[v("上一步")]),_:1})):f("",!0),a(y,{type:"primary",onClick:e[6]||(e[6]=t=>N("next"))},{default:n(()=>[v("下一步")]),_:1})]),_:1})]),_:1},8,["model"])):f("",!0),p.value===2?(u(),k(Q,{key:1,status:"success",title:"操作成功","sub-title":"用户添加后需进行激活，方可正常使用"},{extra:n(()=>[a(y,{key:"console",type:"primary",onClick:q},{default:n(()=>[v("继续")]),_:1}),a(y,{key:"buy"},{default:n(()=>[v("返回")]),_:1})]),_:1})):f("",!0)]),_:1})],64)}}});export{De as default};
