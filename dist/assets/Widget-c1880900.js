import{T as c,S as f}from"./SearchForm-850e1176.js";import{L as b}from"./ListToolbar-ceb79aaa.js";import{P as k}from"./PageHeader-a1a5681d.js";import{f as y}from"./tool-e1301be4.js";import{E as T}from"./UpOutlined-c02615f6.js";import{a3 as C}from"./useConfigInject-985b36a0.js";import{d as g,f as h,ab as x,e,a as t,F as S,b as l,o as v,u as i,x as o}from"./runtime-core.esm-bundler-e1893df6.js";import{_ as A}from"./_plugin-vue_export-helper-c27b6911.js";import"./LoadingOutlined-377d3aaa.js";import"./AntdIcon-ea494017.js";import"./ReloadOutlined-8f39c8a7.js";import"./dayjs.min-8f56631c.js";import"./_commonjsHelpers-48992372.js";import"./vue-router-3d96c2fa.js";import"./extends-34e645d9.js";import"./runtime-dom.esm-bundler-d15a3063.js";import"./CloseCircleFilled-f172dba6.js";const E=g({__name:"Widget",setup(F){const m=y("BASIC_STATUS"),d=h({name:"",pid:"",userName:"",status:null,updatedAt:null,startTime:null,endTime:null}),_=[{key:"name",label:"名称"},{key:"pid",label:"PID",tip:"进程标识"},{key:"userName",label:"用户名"},{key:"status",label:"状态",options:m},{key:"updatedAt",label:"更新时间",date:!0},{key:"startTime",key1:"endTime",label:"时间范围",range:!0}],a=()=>{C.success("操作成功")};return(N,w)=>{const n=l("a-card"),s=l("a-button"),r=l("a-menu-item"),u=l("a-menu"),p=l("a-dropdown");return v(),x(S,null,[e(n,{bordered:!1,title:"操作工具条",class:"mb24"},{default:t(()=>[e(c,{title:"工具条标题",onCreate:a,onReload:a,onDelete:a,onEnable:a,onDisable:a})]),_:1}),e(n,{bordered:!1,title:"查询工具条",class:"mb24"},{default:t(()=>[e(b,{title:"工具条标题",options:i(m)},null,8,["options"])]),_:1}),e(n,{bordered:!1,title:"搜索框组",class:"mb24"},{default:t(()=>[e(f,{ref:"searchFormRef",searchState:d,schemas:_},null,8,["searchState"])]),_:1}),e(n,{bordered:!1,title:"可选页头"},{default:t(()=>[e(k,{title:"页头标题",onReload:a,style:{"margin-top":"0"}},{button:t(()=>[e(s,{onClick:a},{default:t(()=>[o("审核")]),_:1}),e(s,{onClick:a},{default:t(()=>[o("同步")]),_:1}),e(p,null,{overlay:t(()=>[e(u,{onClick:a},{default:t(()=>[e(r,{key:"1"},{default:t(()=>[o("签名")]),_:1}),e(r,{key:"2"},{default:t(()=>[o("验签")]),_:1}),e(r,{key:"3"},{default:t(()=>[o("编码")]),_:1})]),_:1})]),default:t(()=>[e(s,null,{default:t(()=>[e(i(T))]),_:1})]),_:1}),e(s,{type:"primary",onClick:a},{default:t(()=>[o("确定")]),_:1})]),default:t(()=>[o(" 次要标题，或更多描述。详情页面的首选。 ")]),_:1})]),_:1})],64)}}});const M=A(E,[["__scopeId","data-v-60f880f7"]]);export{M as default};