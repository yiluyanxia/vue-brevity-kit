const a=t=>{if(navigator.clipboard)return navigator.clipboard.writeText(t);{const e=document.createElement("textarea");document.body.appendChild(e),e.style.position="fixed",e.style.top="10px",e.value=t,e.select();const o=document.execCommand("copy",!0);return document.body.removeChild(e),new Promise((r,c)=>{o?r(o):c(o)})}};export{a as c};
