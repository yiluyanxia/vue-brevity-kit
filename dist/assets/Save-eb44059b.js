import{F as x}from"./FileSaver.min-fb8bb6ca.js";import{c as y}from"./clipboard-06674ff3.js";import{C as S,S as k}from"./SaveOutlined-0f0d91c1.js";import{d as C,r as w,c as g,a as e,b as o,o as B,e as t,ac as n,u as r,ai as I,aj as M}from"./runtime-core.esm-bundler-e1893df6.js";import{a3 as p}from"./useConfigInject-985b36a0.js";import{_ as j}from"./plugin-vue_export-helper-c27b6911.js";import"./commonjsHelpers-48992372.js";import"./AntdIcon-ea494017.js";import"./extends-34e645d9.js";import"./runtime-dom.esm-bundler-d15a3063.js";import"./LoadingOutlined-377d3aaa.js";import"./CloseCircleFilled-f172dba6.js";const F=a=>(I("data-v-3bf3b6df"),a=a(),M(),a),N={class:"text-block"},O={class:"text-head"},R=F(()=>n("div",{class:"title"},"示例",-1)),T={class:"tool"},V=C({__name:"Save",setup(a){const s=w(`{
    "display": "light",
    "theme": "daybreakBlue",
    "lightMenu": false,
    "columnsMenu": true,
    "columnsMenuTitle": false,
    "columnsMenuTooltip": true
}`),d=()=>{y(s.value).then(()=>{p.success("复制成功")}).catch(()=>{p.error("复制失败")})},u=()=>{const l=new Blob([s.value],{type:"text/plain;charset=utf-8"});x.exports.saveAs(l,"setting.json")};return(l,c)=>{const _=o("a-button"),i=o("a-tooltip"),m=o("a-textarea"),f=o("a-col"),v=o("a-row"),b=o("a-card");return B(),g(b,{bordered:!1,title:"保存",class:"brevity-stretch-card"},{default:e(()=>[t(v,null,{default:e(()=>[t(f,{xs:24,sm:24,md:24,lg:12,xl:12},{default:e(()=>[n("div",N,[n("div",O,[R,n("div",T,[t(i,{title:"复制"},{default:e(()=>[t(_,{type:"link",onClick:d},{icon:e(()=>[t(r(S))]),_:1})]),_:1}),t(i,{title:"保存"},{default:e(()=>[t(_,{type:"link",onClick:u},{icon:e(()=>[t(r(k))]),_:1})]),_:1})])]),t(m,{value:s.value,"onUpdate:value":c[0]||(c[0]=h=>s.value=h),"auto-size":{minRows:10,maxRows:10}},null,8,["value"])])]),_:1})]),_:1})]),_:1})}}});const Q=j(V,[["__scopeId","data-v-3bf3b6df"]]);export{Q as default};
