import{a8 as j,r as g,a9 as C,j as J,w as z,f as Q,y as P,aa as B,C as X,s as Z,G as $,H as tt,q as et,A as st,n as nt}from"./runtime-core.esm-bundler-e1893df6.js";var ot=!1;let w;const M=t=>w=t,H=Symbol();function m(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var d;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(d||(d={}));function it(){const t=j(!0),n=t.run(()=>g({}));let s=[],e=[];const c=C({install(u){M(c),c._a=u,u.provide(H,c),u.config.globalProperties.$pinia=c,e.forEach(f=>s.push(f)),e=[]},use(u){return!this._a&&!ot?e.push(u):s.push(u),this},_p:s,_a:null,_e:t,_s:new Map,state:n});return c}const k=()=>{};function V(t,n,s,e=k){t.push(n);const c=()=>{const u=t.indexOf(n);u>-1&&(t.splice(u,1),e())};return!s&&$()&&tt(c),c}function O(t,...n){t.slice().forEach(s=>{s(...n)})}function U(t,n){t instanceof Map&&n instanceof Map&&n.forEach((s,e)=>t.set(e,s)),t instanceof Set&&n instanceof Set&&n.forEach(t.add,t);for(const s in n){if(!n.hasOwnProperty(s))continue;const e=n[s],c=t[s];m(c)&&m(e)&&t.hasOwnProperty(s)&&!P(e)&&!B(e)?t[s]=U(c,e):t[s]=e}return t}const ct=Symbol();function rt(t){return!m(t)||!t.hasOwnProperty(ct)}const{assign:y}=Object;function ut(t){return!!(P(t)&&t.effect)}function at(t,n,s,e){const{state:c,actions:u,getters:f}=n,a=s.state.value[t];let I;function E(){a||(s.state.value[t]=c?c():{});const _=st(s.state.value[t]);return y(_,u,Object.keys(f||{}).reduce((S,h)=>(S[h]=C(nt(()=>{M(s);const L=s._s.get(t);return f[h].call(L,L)})),S),{}))}return I=A(t,E,n,s,e,!0),I.$reset=function(){const S=c?c():{};this.$patch(h=>{y(h,S)})},I}function A(t,n,s={},e,c,u){let f;const a=y({actions:{}},s),I={deep:!0};let E,_,S=C([]),h=C([]),L;const v=e.state.value[t];!u&&!v&&(e.state.value[t]={}),g({});let p;function K(r){let o;E=_=!1,typeof r=="function"?(r(e.state.value[t]),o={type:d.patchFunction,storeId:t,events:L}):(U(e.state.value[t],r),o={type:d.patchObject,payload:r,storeId:t,events:L});const b=p=Symbol();et().then(()=>{p===b&&(E=!0)}),_=!0,O(S,o,e.state.value[t])}const D=k;function x(){f.stop(),S=[],h=[],e._s.delete(t)}function F(r,o){return function(){M(e);const b=Array.from(arguments),Y=[],N=[];function G(i){Y.push(i)}function q(i){N.push(i)}O(h,{args:b,name:r,store:l,after:G,onError:q});let R;try{R=o.apply(this&&this.$id===t?this:l,b)}catch(i){throw O(N,i),i}return R instanceof Promise?R.then(i=>(O(Y,i),i)).catch(i=>(O(N,i),Promise.reject(i))):(O(Y,R),R)}}const W={_p:e,$id:t,$onAction:V.bind(null,h),$patch:K,$reset:D,$subscribe(r,o={}){const b=V(S,r,o.detached,()=>Y()),Y=f.run(()=>z(()=>e.state.value[t],N=>{(o.flush==="sync"?_:E)&&r({storeId:t,type:d.direct,events:L},N)},y({},I,o)));return b},$dispose:x},l=Q(W);e._s.set(t,l);const T=e._e.run(()=>(f=j(),f.run(()=>n())));for(const r in T){const o=T[r];if(P(o)&&!ut(o)||B(o))u||(v&&rt(o)&&(P(o)?o.value=v[r]:U(o,v[r])),e.state.value[t][r]=o);else if(typeof o=="function"){const b=F(r,o);T[r]=b,a.actions[r]=o}}return y(l,T),y(X(l),T),Object.defineProperty(l,"$state",{get:()=>e.state.value[t],set:r=>{K(o=>{y(o,r)})}}),e._p.forEach(r=>{y(l,f.run(()=>r({store:l,app:e._a,pinia:e,options:a})))}),v&&u&&s.hydrate&&s.hydrate(l.$state,v),E=!0,_=!0,l}function lt(t,n,s){let e,c;const u=typeof n=="function";typeof t=="string"?(e=t,c=u?s:n):(c=t,e=t.id);function f(a,I){const E=J();return a=a||E&&Z(H,null),a&&M(a),a=w,a._s.has(e)||(u?A(e,n,c,a):at(e,c,a)),a._s.get(e)}return f.$id=e,f}const Et="BREVITY_USER_TOKEN",_t={enable:!0,cookieName:"BREVITY_CSRF_TOKEN",headerName:"x-csrf-token"},St="BREVITY_LOCALE",ht="BREVITY_DISPLAY",bt="BREVITY_THEME",yt="BREVITY_CUSTON_THEME",It="BREVITY_LIGHT_MENU",Lt="BREVITY_COLUMNS_MENU",vt="BREVITY_COLUMNS_MENU_TITLE",Ot="BREVITY_COLUMNS_MENU_TOOLTIP",Tt="BREVITY_PASSWORD",Yt="BREVITY_LOCK";export{yt as C,ht as D,St as L,Tt as P,Et as T,Yt as a,bt as b,it as c,lt as d,It as e,Lt as f,vt as g,Ot as h,_t as i};