import{P as x}from"./PageHeader-a1a5681d.js";import{u as N,r as y}from"./regexp-0a157ec9.js";import{g as B}from"./tool-e1301be4.js";import{d as F,f as P,g as k,ab as w,e,a,F as I,b as m,o as U,u as i,x as d}from"./runtime-core.esm-bundler-e1893df6.js";import"./vue-router-3d96c2fa.js";import"./ReloadOutlined-8f39c8a7.js";import"./AntdIcon-ea494017.js";import"./plugin-vue_export-helper-c27b6911.js";import"./index-d60ffb08.js";import"./axios-641c6ca9.js";import"./index-71333aae.js";import"./useConfigInject-985b36a0.js";import"./extends-34e645d9.js";import"./runtime-dom.esm-bundler-d15a3063.js";import"./LoadingOutlined-377d3aaa.js";import"./CloseCircleFilled-f172dba6.js";import"./key-3b961902.js";import"./inherits-1b1b5999.js";import"./variablesCSS-e22db411.js";import"./setting-b9ced7ae.js";import"./index-2193c281.js";import"./StarOutlined-4c117a0a.js";import"./SyncOutlined-15adee8e.js";import"./ClearOutlined-61968c2b.js";import"./RotateRightOutlined-80c84fe8.js";import"./SaveOutlined-0f0d91c1.js";import"./UpOutlined-c02615f6.js";import"./UserOutlined-cf9a456f.js";import"./MinusCircleFilled-e71cdf93.js";import"./SignalFilled-a7fff856.js";import"./layout-ad4859fc.js";import"./lock-31147f4a.js";const ue=F({__name:"BasicForm",setup(q){const s={id:"",name:"",pid:null,userName:"",description:""},t=P(s),{id:l,getInfo:C,getQuery:f,goBack:D,onFinish:_}=N({formState:t,initialState:s}),c={name:[{required:!0,message:"请输入名称"}],pid:[{required:!0,message:"请输入 PID"},{pattern:y.number,message:"PID 仅支持数字",trigger:"blur"}],userName:[{required:!0,message:"请输入用户名"}]};return k(()=>{f()}),(E,o)=>{const p=m("a-input"),n=m("a-form-item"),b=m("a-textarea"),u=m("a-button"),v=m("a-form"),g=m("a-card");return U(),w(I,null,[e(x,{back:!1}),e(g,{bordered:!1,class:"layout-edit-card"},{default:a(()=>[e(v,{class:"brevity-form-box",ref:"formRef",model:t,rules:c,"label-col":{span:4},"wrapper-col":{span:18},autocomplete:"off",onFinish:o[4]||(o[4]=r=>i(_)(i(l)?"updateList":"createList"))},{default:a(()=>[e(n,{label:"名称",name:"name"},{default:a(()=>[e(p,{value:t.name,"onUpdate:value":o[0]||(o[0]=r=>t.name=r)},null,8,["value"])]),_:1}),e(n,{label:"PID",name:"pid"},{default:a(()=>[e(p,{value:t.pid,"onUpdate:value":o[1]||(o[1]=r=>t.pid=r),disabled:i(B)(i(l))},null,8,["value","disabled"])]),_:1}),e(n,{label:"用户名",name:"userName"},{default:a(()=>[e(p,{value:t.userName,"onUpdate:value":o[2]||(o[2]=r=>t.userName=r)},null,8,["value"])]),_:1}),e(n,{label:"描述",name:"description"},{default:a(()=>[e(b,{value:t.description,"onUpdate:value":o[3]||(o[3]=r=>t.description=r),rows:4},null,8,["value"])]),_:1}),e(n,{"wrapper-col":{offset:4}},{default:a(()=>[e(u,{type:"primary","html-type":"submit",class:"mr12"},{default:a(()=>[d("确定")]),_:1}),e(u,null,{default:a(()=>[d("取消")]),_:1})]),_:1})]),_:1},8,["model"])]),_:1})],64)}}});export{ue as default};
