import{a as v}from"./axios-641c6ca9.js";import{j as y,o as b,p as L,m as C}from"./index-71333aae.js";import{i as $,a as h}from"./tool-e1301be4.js";import{c as N}from"./runtime-dom.esm-bundler-d15a3063.js";import{d as _,ab as j,e as z,u as E,ag as O,af as P,o as x}from"./runtime-core.esm-bundler-e1893df6.js";import{_ as I}from"./_plugin-vue_export-helper-c27b6911.js";import{i as k,T as S}from"./key-3b961902.js";import{a3 as u}from"./useConfigInject-985b36a0.js";const a="/api",T={login:`${a}/auth/login`,logout:`${a}/auth/logout`,getUserInfo:`${a}/user/getUserInfo`},w={getDemoList:`${a}/getDemoList`,createList:`${a}/createList`,updateList:`${a}/updateList`,retrieveList:`${a}/retrieveList`,deleteList:`${a}/deleteList`,retrieveListItem:`${a}/retrieveListItem`},p={...T,...w},D=_({__name:"Spinning",props:{size:{type:String,default:"default"},tip:{type:String,default:""},spinning:{type:Boolean,default:!1},background:{type:String}},setup(e){return(s,t)=>e.spinning?(x(),j("section",{key:0,class:"full-spinning",style:O([e.background?`background-color: ${e.background}`:""])},[z(E(y),{size:e.size,tip:e.tip,spinning:e.spinning},null,8,["size","tip","spinning"])],4)):P("",!0)}});const J=I(D,[["__scopeId","data-v-0f0ca7c9"]]);let l,r,d=!1,m=0;const f={service(e={}){m===0&&(r=document.createElement("div"),l=N(J,{spinning:!0,tip:e.tip,size:e.size,background:e.background}),document.body.appendChild(r),l.mount(r),d=!0),m++},close(){setTimeout(()=>{d&&(m--,m<=0&&(m=0,d=!1,l.unmount(),r&&document.body.removeChild(r)))},400)}},c=v.create({baseURL:"",timeout:1e3*60});c.interceptors.request.use(e=>{const s=b(S);if(e.headers){e.headers["x-authorization"]=s;{const t=b(k.cookieName);e.headers[k.headerName]=t}}return e.loading&&f.service(),e},e=>Promise.reject(e));c.interceptors.response.use(e=>{const s=e.config,t=e.data;return s!=null&&s.loading&&f.close(),t.error===0?(s.showSuccess&&u.success(t.msg),t.result?Promise.resolve(t.result):Promise.resolve(t)):t.error===2?(L(S),C.push("/login"),Promise.reject(t)):(s.showError&&u.error(t.msg),Promise.reject(t))},e=>{if(f.close(),e&&e.response)switch(e.response.status){case 400:e.message="错误请求";break;case 401:e.message="未授权，请重新登录";break;case 403:e.message="拒绝访问";break;case 404:e.message="请求错误,未找到该资源";break;case 405:e.message="请求方法未允许";break;case 408:e.message="请求超时";break;case 500:e.message="服务器端出错";break;case 501:e.message="网络未实现";break;case 502:e.message="网络错误";break;case 503:e.message="服务不可用";break;case 504:e.message="网络超时";break;case 505:e.message="HTTP版本不支持该请求";break;default:e.message=`连接错误： CODE：${e.response.status}`}else e=JSON.parse(JSON.stringify(e)),e.message="连接服务器失败："+e.message;return u.destroy(),u.error(e.message),Promise.reject(e)});const K={get(e,s,t){const i={headers:{"Content-type":"application/json"},...t,params:s};return c.get(p[e],i)},post(e,s,t,i){const o={headers:{"Content-type":"application/json"},...t,...i};return c.post(p[e],s,o)},formPost(e,s,t){const i={headers:{"Content-type":"multipart/form-data"},...t},o=new FormData;return Object.keys(s).forEach(n=>{$(s[n])?s[n].forEach(g=>{o.append(n+"[]",h(g)?JSON.stringify(g):g)}):h(s[n])?o.append(n,JSON.stringify(s[n])):o.append(n,s[n])}),c.post(p[e],o,i)},delete(e,s,t){const i={headers:{"Content-type":"multipart/form-data"},...t,params:s};return c.delete(p[e],i)}};export{K as h};
