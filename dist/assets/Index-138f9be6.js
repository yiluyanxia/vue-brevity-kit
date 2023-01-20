import{D as z}from"./data-ffba0eb7.js";import{u as F}from"./useList-83c3fd25.js";import{u as K}from"./useModal-a2a210a3.js";import{d as N}from"./dayjs.min-8f56631c.js";import{d as P,g as S,c as $,a,u as e,y as q,b as r,o as b,e as t,x,r as R,ab as B,F as D,ad as V,an as G,ao as H,ac as J}from"./runtime-core.esm-bundler-e1893df6.js";import{l as Q}from"./index-2193c281.js";import{P as W,a as X}from"./UpOutlined-c02615f6.js";import{_ as Y}from"./_plugin-vue_export-helper-c27b6911.js";import"./vue-router-3d96c2fa.js";import"./index-d60ffb08.js";import"./axios-641c6ca9.js";import"./index-71333aae.js";import"./useConfigInject-985b36a0.js";import"./extends-34e645d9.js";import"./runtime-dom.esm-bundler-d15a3063.js";import"./LoadingOutlined-377d3aaa.js";import"./AntdIcon-ea494017.js";import"./CloseCircleFilled-f172dba6.js";import"./key-3b961902.js";import"./inherits-1b1b5999.js";import"./variablesCSS-e22db411.js";import"./setting-b9ced7ae.js";import"./tool-e1301be4.js";import"./layout-ad4859fc.js";import"./UserOutlined-cf9a456f.js";import"./lock-31147f4a.js";import"./Modal-569c71cb.js";import"./_commonjsHelpers-48992372.js";import"./StarOutlined-4c117a0a.js";import"./SyncOutlined-15adee8e.js";import"./ClearOutlined-61968c2b.js";import"./RotateRightOutlined-80c84fe8.js";import"./SaveOutlined-0f0d91c1.js";import"./MinusCircleFilled-e71cdf93.js";import"./ReloadOutlined-8f39c8a7.js";import"./SignalFilled-a7fff856.js";const Z=P({__name:"Edit",props:{visible:{type:Boolean,default:!0},title:{type:String,default:""},dataInfo:{type:Object,default:null},uniqueKey:{type:String,default:""}},setup(y){const u=y,m={id:"",title:"",src:"",description:"",owner:"",createdAt:"",percent:void 0,status:""},{emitClose:g,formRef:k,formState:l,onOk:w,visible:c}=K({props:u,initialState:m,watchFn:C});function C(){l.createdAt=N(u.dataInfo.createdAt)}const f={title:[{required:!0,message:"请输入标题"}]};return S(()=>{}),(v,o)=>{const _=r("a-input"),i=r("a-form-item"),p=r("a-date-picker"),U=r("a-input-number"),d=r("a-radio"),I=r("a-radio-group"),A=r("a-textarea"),E=r("a-form"),L=r("a-modal");return b(),$(L,{visible:e(c),"onUpdate:visible":o[7]||(o[7]=n=>q(c)?c.value=n:null),title:y.title,onOk:o[8]||(o[8]=n=>e(w)("updateList")),onCancel:e(g)},{default:a(()=>[t(E,{class:"brevity-form-box",ref_key:"formRef",ref:k,model:e(l),rules:f,"label-col":{span:4},"wrapper-col":{span:18}},{default:a(()=>[t(i,{label:"标题",name:"title"},{default:a(()=>[t(_,{value:e(l).title,"onUpdate:value":o[0]||(o[0]=n=>e(l).title=n)},null,8,["value"])]),_:1}),t(i,{label:"封面",name:"src"},{default:a(()=>[t(_,{value:e(l).src,"onUpdate:value":o[1]||(o[1]=n=>e(l).src=n)},null,8,["value"])]),_:1}),t(i,{label:"作者",name:"owner"},{default:a(()=>[t(_,{value:e(l).owner,"onUpdate:value":o[2]||(o[2]=n=>e(l).owner=n)},null,8,["value"])]),_:1}),t(i,{label:"时间",name:"createdAt"},{default:a(()=>[t(p,{"show-time":"",value:e(l).createdAt,"onUpdate:value":o[3]||(o[3]=n=>e(l).createdAt=n),style:{width:"100%"}},null,8,["value"])]),_:1}),t(i,{label:"进度",name:"percent"},{default:a(()=>[t(U,{value:e(l).percent,"onUpdate:value":o[4]||(o[4]=n=>e(l).percent=n),min:1,max:100,style:{width:"100%"}},null,8,["value"])]),_:1}),t(i,{label:"状态",name:"status"},{default:a(()=>[t(I,{value:e(l).status,"onUpdate:value":o[5]||(o[5]=n=>e(l).status=n)},{default:a(()=>[t(d,{value:"active"},{default:a(()=>[x("normal")]),_:1}),t(d,{value:"normal"},{default:a(()=>[x("normal")]),_:1}),t(d,{value:"exception"},{default:a(()=>[x("exception")]),_:1})]),_:1},8,["value"])]),_:1}),t(i,{label:"描述",name:"description"},{default:a(()=>[t(A,{value:e(l).description,"onUpdate:value":o[6]||(o[6]=n=>e(l).description=n),"auto-size":{minRows:2,maxRows:5}},null,8,["value"])]),_:1})]),_:1},8,["model"])]),_:1},8,["visible","title","onCancel"])}}}),h={class:"desc-box"},tt=P({__name:"Index",setup(y){const u=R(),m=R([]);m.value=z;const{closeModal:g,fetchData:k,onCreate:l,onUpdate:w,onDelete:c,pagination:C,total:f,visible:v,modalTitle:o}=F({dataInfo:u,getList:_});f.value=100;async function _(){const i=await k("retrieveList",{loading:!0});m.value=i.content,f.value=i.totalElements}return S(async()=>{}),(i,p)=>{var O;const U=r("a-button"),d=r("a-col"),I=r("a-avatar"),A=r("a-typography-paragraph"),E=r("a-card-meta"),L=r("a-card"),n=r("a-row"),M=r("a-pagination");return b(),B(D,null,[t(n,{gutter:[16,16]},{default:a(()=>[t(d,{xs:24,sm:24,md:12,lg:12,xl:8,xxl:6},{default:a(()=>[t(U,{type:"dashed",class:"brevity-card-btn",onClick:p[0]||(p[0]=s=>e(l)("新建卡片项"))},{icon:a(()=>[t(e(W))]),default:a(()=>[x(" 新建 ")]),_:1})]),_:1}),(b(!0),B(D,null,V(m.value,(s,T)=>(b(),$(d,{xs:24,sm:24,md:12,lg:12,xl:8,xxl:6,key:T},{default:a(()=>[t(L,{hoverable:""},{actions:a(()=>[t(e(Q),{key:"update",onClick:j=>e(w)("编辑卡片项",s)},null,8,["onClick"]),t(e(X),{key:"delete",onClick:j=>e(c)("deleteList",{id:s.id})},null,8,["onClick"])]),default:a(()=>[t(E,{title:s.title},{avatar:a(()=>[t(I,{size:48,src:s.src,style:{"background-color":"#f0f2f5"}},null,8,["src"])]),description:a(()=>[J("div",h,[t(A,{ellipsis:{rows:3},content:s.description},null,8,["content"])])]),_:2},1032,["title"])]),_:2},1024)]),_:2},1024))),128))]),_:1}),t(n,{type:"flex",justify:"center",class:"pt24"},{default:a(()=>[t(M,G(H(e(C))),null,16)]),_:1}),t(Z,{visible:e(v),"onUpdate:visible":p[1]||(p[1]=s=>q(v)?v.value=s:null),title:e(o),onClose:e(g),dataInfo:u.value,uniqueKey:(O=u.value)==null?void 0:O.id},null,8,["visible","title","onClose","dataInfo","uniqueKey"])],64)}}});const Mt=Y(tt,[["__scopeId","data-v-cdebddbf"]]);export{Mt as default};
