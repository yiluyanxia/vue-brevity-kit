import{u as v}from"./vue-router-3d96c2fa.js";import{d as h,ab as B,e as o,a as e,u as s,b as a,o as r,x as c,ah as y,J as l,c as R,af as C}from"./runtime-core.esm-bundler-e1893df6.js";import{R as x}from"./ReloadOutlined-8f39c8a7.js";import{_ as P}from"./plugin-vue_export-helper-c27b6911.js";const $={class:"brevity-page-header"},H=h({__name:"PageHeader",props:{title:String,onReload:Function,back:{type:Boolean,default:!0}},emits:["reload"],setup(n,{emit:d}){const u=n,_=v(),i=()=>{d("reload")},p=()=>{_.go(-1)},m=u.back?p:void 0;return(t,N)=>{const f=a("a-button"),g=a("a-tooltip"),b=a("a-button-group"),k=a("a-page-header");return r(),B("div",$,[o(k,{onBack:s(m)},{title:e(()=>[c(y(n.title||t.$t(t.$route.meta.title)),1)]),extra:e(()=>[o(b,null,{default:e(()=>[l(t.$slots,"button",{},void 0,!0),o(g,null,{title:e(()=>[c("刷新")]),default:e(()=>[n.onReload?(r(),R(f,{key:0,onClick:i,class:"reload-btn"},{icon:e(()=>[o(s(x))]),_:1})):C("",!0)]),_:1})]),_:3})]),default:e(()=>[l(t.$slots,"default",{},void 0,!0)]),_:3},8,["onBack"])])}}});const E=P(H,[["__scopeId","data-v-7d960c20"]]);export{E as P};
