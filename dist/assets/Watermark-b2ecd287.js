import{c as v}from"./runtime-dom.esm-bundler-d15a3063.js";import{d as _,r as y,c as g,a as s,b as c,o as k,e as i,x as f}from"./runtime-core.esm-bundler-e1893df6.js";let d,l,n=!1;const w={width:"240px",height:"120px",textAlign:"center",textBaseline:"middle",font:"16px serif",fillStyle:"rgba(0, 0, 0, .2)",rotate:-15,text:"brevity水印"},p={service(e){if(e={...w,...e},n)return;const t=document.createElement("canvas");t.setAttribute("width",e.width),t.setAttribute("height",e.height);const a=t.getContext("2d");a.textAlign=e.textAlign,a.textBaseline=e.textBaseline,a.font=e.font,a.fillStyle=e.fillStyle,a.rotate(e.rotate*Math.PI/180),a.fillText(e.text,parseFloat(e.width)/2,parseFloat(e.height)/2);const r=`
        position:fixed;
        top:0;
        right:0;
        bottom:0;
        left:0;
        width:100%;
        height:100%;
        z-index: 99999;
        pointer-events:none;
        background-repeat:repeat;
        background-image:url('${t.toDataURL()}')`;l=document.createElement("div"),l.setAttribute("style",r),d=v({}),document.body.appendChild(l),d.mount(l),n=!0},close(){n&&(n=!1,d.unmount(),l&&document.body.removeChild(l))}},B=_({__name:"Watermark",setup(e){const t=y(),a=()=>{o();let r={};t.value?r={text:t.value}:r={},p.service(r)},o=()=>{p.close()};return(r,u)=>{const x=c("a-input"),m=c("a-button"),h=c("a-card");return k(),g(h,{bordered:!1,title:"水印",class:"brevity-stretch-card"},{default:s(()=>[i(x,{value:t.value,"onUpdate:value":u[0]||(u[0]=b=>t.value=b),style:{"max-width":"360px",display:"block"}},null,8,["value"]),i(m,{type:"primary",class:"mt24 mr12",onClick:a},{default:s(()=>[f("加水印")]),_:1}),i(m,{type:"primary",class:"mr12",onClick:o},{default:s(()=>[f("去水印")]),_:1})]),_:1})}}});export{B as default};
