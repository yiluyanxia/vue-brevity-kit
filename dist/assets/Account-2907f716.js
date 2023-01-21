import{u as F,r as H}from"./regexp-0a157ec9.js";import{g as D}from"./tool-e1301be4.js";import{u as M}from"./layout-ad4859fc.js";import{d as Q,r as _,f as R,g as T,c as v,a,b as o,o as s,e as t,u as l,ab as b,af as f,x as c,ah as y}from"./runtime-core.esm-bundler-e1893df6.js";import{_ as $}from"./plugin-vue_export-helper-c27b6911.js";import"./index-d60ffb08.js";import"./axios-641c6ca9.js";import"./index-71333aae.js";import"./useConfigInject-985b36a0.js";import"./extends-34e645d9.js";import"./runtime-dom.esm-bundler-d15a3063.js";import"./LoadingOutlined-377d3aaa.js";import"./AntdIcon-ea494017.js";import"./CloseCircleFilled-f172dba6.js";import"./vue-router-3d96c2fa.js";import"./key-3b961902.js";import"./inherits-1b1b5999.js";import"./variablesCSS-e22db411.js";import"./setting-b9ced7ae.js";import"./index-2193c281.js";import"./StarOutlined-4c117a0a.js";import"./SyncOutlined-15adee8e.js";import"./ClearOutlined-61968c2b.js";import"./RotateRightOutlined-80c84fe8.js";import"./SaveOutlined-0f0d91c1.js";import"./UpOutlined-c02615f6.js";import"./UserOutlined-cf9a456f.js";import"./MinusCircleFilled-e71cdf93.js";import"./ReloadOutlined-8f39c8a7.js";import"./SignalFilled-a7fff856.js";import"./lock-31147f4a.js";const j={key:0,class:"brevity-setting-title"},G={key:0,class:"brevity-setting-title"},J={key:0,class:"brevity-setting-title"},O=Q({__name:"Account",setup(P){const u=M(),g=_("1"),k={id:"",name:"Admin",email:"Admin@Admin.com",userName:"admin",description:""},i=R(k),{id:x,getQuery:A,onFinish:w}=F({formState:i,initialState:k}),B={name:[{required:!0,message:"请输入名称"}],email:[{required:!0,message:"请输入邮箱"},{pattern:H.email,message:"邮箱格式错误",trigger:"blur"}],userName:[{required:!0,message:"请输入用户名"}]},C=_([{title:"项目消息",desc:"当被提及时、分配至某个项目时接收相关消息",value:!0},{title:"系统消息",desc:"当系统出现警告时接收相关消息",value:!0},{title:"接收消息",desc:"在非异常情况下，用户可以发送模板消息至当前账号",value:"0",options:[{value:"0",label:"仅管理员"},{value:"1",label:"消息组员"},{value:"2",label:"任何用户"}]},{title:"接收方式",desc:"选择一种方式用于接收系统发送的消息",value:"1",options:[{value:"0",label:"平台"},{value:"1",label:"邮件"},{value:"2",label:"短信"}]}]),K=_([{title:"绑定邮箱",desc:"已绑定邮箱为 admin@admin.com",btn:"修改"},{title:"账号密码",desc:"密码为8-20位，且包含字母数字及特殊符号",btn:"修改"},{title:"网络会话",desc:"查看登录您帐户的设备列表。撤销您不认识的任何会话",btn:"查看"},{title:"SSH 密钥",desc:"查看与您的帐户关联的 SSH 密钥",btn:"查看"}]);return T(()=>{A()}),(W,n)=>{const m=o("a-input"),r=o("a-form-item"),q=o("a-textarea"),S=o("a-button"),I=o("a-form"),p=o("a-tab-pane"),L=o("a-select"),V=o("a-switch"),U=o("a-list-item-meta"),N=o("a-list-item"),h=o("a-list"),z=o("a-tabs"),E=o("a-card");return s(),v(E,{bordered:!1,class:"brevity-stretch-card"},{default:a(()=>[t(z,{activeKey:g.value,"onUpdate:activeKey":n[5]||(n[5]=e=>g.value=e),"tab-position":l(u).miniScreen?"top":"left",class:"brevity-setting-tabs"},{default:a(()=>[t(p,{key:"1",tab:"基本信息"},{default:a(()=>[l(u).miniScreen?f("",!0):(s(),b("div",j,"基本信息")),t(I,{class:"setting-form-box",ref:"formRef",model:i,rules:B,layout:"vertical","label-col":{span:4},"wrapper-col":{span:18},autocomplete:"off",onFinish:n[4]||(n[4]=e=>l(w)(l(x)?"updateList":"createList"))},{default:a(()=>[t(r,{label:"用户名",name:"userName"},{default:a(()=>[t(m,{value:i.userName,"onUpdate:value":n[0]||(n[0]=e=>i.userName=e)},null,8,["value"])]),_:1}),t(r,{label:"邮箱",name:"email"},{default:a(()=>[t(m,{value:i.email,"onUpdate:value":n[1]||(n[1]=e=>i.email=e),disabled:l(D)(l(x))},null,8,["value","disabled"])]),_:1}),t(r,{label:"姓名",name:"name"},{default:a(()=>[t(m,{value:i.name,"onUpdate:value":n[2]||(n[2]=e=>i.name=e)},null,8,["value"])]),_:1}),t(r,{label:"简介",name:"description"},{default:a(()=>[t(q,{value:i.description,"onUpdate:value":n[3]||(n[3]=e=>i.description=e),rows:4},null,8,["value"])]),_:1}),t(r,null,{default:a(()=>[t(S,{type:"primary","html-type":"submit",class:"mr12"},{default:a(()=>[c("确定")]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),t(p,{key:"2",tab:"消息通知"},{default:a(()=>[l(u).miniScreen?f("",!0):(s(),b("div",G,"消息通知")),t(h,{"item-layout":"horizontal","data-source":C.value},{renderItem:a(({item:e})=>[t(N,null,{actions:a(()=>[e.options?(s(),v(L,{key:0,value:e.value,"onUpdate:value":d=>e.value=d,options:e.options,style:{width:"100px"}},null,8,["value","onUpdate:value","options"])):(s(),v(V,{key:1,checked:e.value,"onUpdate:checked":d=>e.value=d},null,8,["checked","onUpdate:checked"]))]),default:a(()=>[t(U,{description:e.desc},{title:a(()=>[c(y(e.title),1)]),_:2},1032,["description"])]),_:2},1024)]),_:1},8,["data-source"])]),_:1}),t(p,{key:"3",tab:"账号安全"},{default:a(()=>[l(u).miniScreen?f("",!0):(s(),b("div",J,"账号安全")),t(h,{"item-layout":"horizontal","data-source":K.value},{renderItem:a(({item:e})=>[t(N,null,{actions:a(()=>[t(S,{type:"link"},{default:a(()=>[c(y(e.btn),1)]),_:2},1024)]),default:a(()=>[t(U,{description:e.desc},{title:a(()=>[c(y(e.title),1)]),_:2},1032,["description"])]),_:2},1024)]),_:1},8,["data-source"])]),_:1})]),_:1},8,["activeKey","tab-position"])]),_:1})}}});const Be=$(O,[["__scopeId","data-v-0c6387bd"]]);export{Be as default};
