import{u as X}from"./useList-83c3fd25.js";import{f as Y}from"./date-45198c36.js";import{L as Z}from"./ListToolbar-ceb79aaa.js";import{f as tt}from"./tool-e1301be4.js";import{D as et}from"./data-ffba0eb7.js";import{u as ot}from"./useModal-a2a210a3.js";import{d as at}from"./dayjs.min-8f56631c.js";import{d as F,g as R,c as nt,a as e,u as o,y as M,b as l,o as $,e as t,x as c,r as z,f as st,ab as lt,F as it,ac as p,ah as L,ai as rt,aj as ut}from"./runtime-core.esm-bundler-e1893df6.js";import{D as pt,P as ct}from"./UpOutlined-c02615f6.js";import{a3 as E}from"./useConfigInject-985b36a0.js";import{_ as dt}from"./_plugin-vue_export-helper-c27b6911.js";import"./vue-router-3d96c2fa.js";import"./index-d60ffb08.js";import"./axios-641c6ca9.js";import"./index-71333aae.js";import"./key-3b961902.js";import"./inherits-1b1b5999.js";import"./runtime-dom.esm-bundler-d15a3063.js";import"./variablesCSS-e22db411.js";import"./setting-b9ced7ae.js";import"./index-2193c281.js";import"./AntdIcon-ea494017.js";import"./StarOutlined-4c117a0a.js";import"./SyncOutlined-15adee8e.js";import"./CloseCircleFilled-f172dba6.js";import"./LoadingOutlined-377d3aaa.js";import"./ClearOutlined-61968c2b.js";import"./RotateRightOutlined-80c84fe8.js";import"./SaveOutlined-0f0d91c1.js";import"./UserOutlined-cf9a456f.js";import"./MinusCircleFilled-e71cdf93.js";import"./ReloadOutlined-8f39c8a7.js";import"./SignalFilled-a7fff856.js";import"./layout-ad4859fc.js";import"./lock-31147f4a.js";import"./Modal-569c71cb.js";import"./extends-34e645d9.js";import"./_commonjsHelpers-48992372.js";const mt=F({__name:"Edit",props:{visible:{type:Boolean,default:!0},title:{type:String,default:""},dataInfo:{type:Object,default:null},uniqueKey:{type:String,default:""}},setup(d){const f=d,_={id:"",title:"",src:"",description:"",owner:"",createdAt:"",percent:void 0,status:""},{emitClose:v,formRef:C,formState:n,onOk:S,visible:b}=ot({props:f,initialState:_,watchFn:h});function h(){n.createdAt=at(f.dataInfo.createdAt)}const A={title:[{required:!0,message:"请输入标题"}]};return R(()=>{}),(O,s)=>{const m=l("a-input"),u=l("a-form-item"),k=l("a-date-picker"),y=l("a-input-number"),g=l("a-radio"),I=l("a-radio-group"),T=l("a-textarea"),w=l("a-form"),x=l("a-modal");return $(),nt(x,{visible:o(b),"onUpdate:visible":s[7]||(s[7]=a=>M(b)?b.value=a:null),title:d.title,onOk:s[8]||(s[8]=a=>o(S)("updateList")),onCancel:o(v)},{default:e(()=>[t(w,{class:"brevity-form-box",ref_key:"formRef",ref:C,model:o(n),rules:A,"label-col":{span:4},"wrapper-col":{span:18}},{default:e(()=>[t(u,{label:"标题",name:"title"},{default:e(()=>[t(m,{value:o(n).title,"onUpdate:value":s[0]||(s[0]=a=>o(n).title=a)},null,8,["value"])]),_:1}),t(u,{label:"封面",name:"src"},{default:e(()=>[t(m,{value:o(n).src,"onUpdate:value":s[1]||(s[1]=a=>o(n).src=a)},null,8,["value"])]),_:1}),t(u,{label:"作者",name:"owner"},{default:e(()=>[t(m,{value:o(n).owner,"onUpdate:value":s[2]||(s[2]=a=>o(n).owner=a)},null,8,["value"])]),_:1}),t(u,{label:"时间",name:"createdAt"},{default:e(()=>[t(k,{"show-time":"",value:o(n).createdAt,"onUpdate:value":s[3]||(s[3]=a=>o(n).createdAt=a),style:{width:"100%"}},null,8,["value"])]),_:1}),t(u,{label:"进度",name:"percent"},{default:e(()=>[t(y,{value:o(n).percent,"onUpdate:value":s[4]||(s[4]=a=>o(n).percent=a),min:1,max:100,style:{width:"100%"}},null,8,["value"])]),_:1}),t(u,{label:"状态",name:"status"},{default:e(()=>[t(I,{value:o(n).status,"onUpdate:value":s[5]||(s[5]=a=>o(n).status=a)},{default:e(()=>[t(g,{value:"active"},{default:e(()=>[c("normal")]),_:1}),t(g,{value:"normal"},{default:e(()=>[c("normal")]),_:1}),t(g,{value:"exception"},{default:e(()=>[c("exception")]),_:1})]),_:1},8,["value"])]),_:1}),t(u,{label:"描述",name:"description"},{default:e(()=>[t(T,{value:o(n).description,"onUpdate:value":s[6]||(s[6]=a=>o(n).description=a),"auto-size":{minRows:2,maxRows:5}},null,8,["value"])]),_:1})]),_:1},8,["model"])]),_:1},8,["visible","title","onCancel"])}}}),j=d=>(rt("data-v-01ff4ec0"),d=d(),ut(),d),_t={href:"https://www.antdv.com/"},ft={class:"list-content-box"},vt={class:"list-content-item"},bt=j(()=>p("span",null,"作者",-1)),yt={class:"list-content-item"},gt=j(()=>p("span",null,"时间",-1)),kt={class:"list-content-item"},wt=F({__name:"Index",setup(d){const f=et,_=z([]),v=z(),C=tt("BASIC_STATUS"),n=st({status:"",content:""}),{closeModal:S,fetchData:b,onCreate:h,onDelete:A,onUpdate:O,onTableChange:s,loading:m,pagination:u,total:k,visible:y,modalTitle:g}=X({dataInfo:v,searchState:n,getList:x});function I(a){n.status=a.option,n.content=a.query,x()}const T=(a,r)=>{switch(console.log("click",a),a.key){case"delete":A("deleteList",{id:r.id});break;case"finish":E.success("操作成功");break;case"reset":E.success("操作成功")}};m.value=!0;function w(){var a;for(let r=1;r<f.length;r++)(a=_.value)==null||a.push({id:r.toString(),title:"",src:"",description:"",owner:"",createdAt:"",percent:0,status:""})}w(),setTimeout(()=>{_.value=f,k.value=100,m.value=!1},1e3);async function x(){const a=await b("retrieveList");_.value=a.content,k.value=a.totalElements}return R(async()=>{w()}),(a,r)=>{var q;const U=l("a-button"),D=l("a-menu-item"),K=l("a-menu"),N=l("a-dropdown"),P=l("a-avatar"),V=l("a-list-item-meta"),G=l("a-progress"),H=l("a-skeleton"),J=l("a-list-item"),Q=l("a-list"),W=l("a-card");return $(),lt(it,null,[t(W,{bordered:!1,class:"brevity-list-card"},{default:e(()=>[t(Z,{options:o(C),searchState:n,onOnFinish:I},null,8,["options","searchState"]),t(Q,{class:"brevity-list-box","item-layout":"horizontal","data-source":_.value,pagination:o(u),onChange:o(s)},{renderItem:e(({item:i})=>[t(J,null,{actions:e(()=>[t(U,{type:"link",size:"small",onClick:B=>o(O)("编辑列表项",i)},{default:e(()=>[c("编辑")]),_:2},1032,["onClick"]),t(N,null,{overlay:e(()=>[t(K,{onClick:B=>T(B,i)},{default:e(()=>[t(D,{key:"reset"},{default:e(()=>[c("重置")]),_:1}),t(D,{key:"finish"},{default:e(()=>[c("完成")]),_:1}),t(D,{key:"delete"},{default:e(()=>[c("删除")]),_:1})]),_:2},1032,["onClick"])]),default:e(()=>[t(U,{type:"link",size:"small"},{default:e(()=>[c(" 更多 "),t(o(pt))]),_:1})]),_:2},1024)]),default:e(()=>[t(H,{avatar:"",title:!1,loading:o(m),active:""},{default:e(()=>[t(V,{description:i.description},{title:e(()=>[p("a",_t,L(i.title),1)]),avatar:e(()=>[t(P,{shape:"square",size:48,src:i.src,style:{"background-color":"#f0f2f5"}},null,8,["src"])]),_:2},1032,["description"]),p("div",ft,[p("div",vt,[bt,p("p",null,L(i.owner),1)]),p("div",yt,[gt,p("p",null,L(o(Y)(i.createdAt)),1)]),p("div",kt,[t(G,{percent:i.percent,status:i.status,style:{width:"180px"}},null,8,["percent","status"])])])]),_:2},1032,["loading"])]),_:2},1024)]),footer:e(()=>[t(U,{type:"dashed",class:"brevity-list-btn",onClick:r[0]||(r[0]=i=>o(h)("新建列表项"))},{icon:e(()=>[t(o(ct))]),default:e(()=>[c(" 新建 ")]),_:1})]),_:1},8,["data-source","pagination","onChange"])]),_:1}),t(mt,{visible:o(y),"onUpdate:visible":r[1]||(r[1]=i=>M(y)?y.value=i:null),title:o(g),onClose:o(S),dataInfo:v.value,uniqueKey:(q=v.value)==null?void 0:q.id},null,8,["visible","title","onClose","dataInfo","uniqueKey"])],64)}}});const le=dt(wt,[["__scopeId","data-v-01ff4ec0"]]);export{le as default};