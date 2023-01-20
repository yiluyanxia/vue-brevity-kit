import{F as et}from"./FileSaver.min-fb8bb6ca.js";import{f as kt}from"./date-45198c36.js";import{d as zt,r as U,c as Vt,a as D,b as F,o as pt,ac as T,e as v,x as nt,ab as Ht,af as Kt,ah as Jt,ai as Yt,aj as $t}from"./runtime-core.esm-bundler-e1893df6.js";import{_ as Ot}from"./_plugin-vue_export-helper-c27b6911.js";import"./_commonjsHelpers-48992372.js";import"./dayjs.min-8f56631c.js";const qt=""+new URL("qq_group-7d0fc1a5.png",import.meta.url).href;var k={},jt=function(){return typeof Promise=="function"&&Promise.prototype&&Promise.prototype.then},Bt={},b={};let dt;const Qt=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];b.getSymbolSize=function(t){if(!t)throw new Error('"version" cannot be null or undefined');if(t<1||t>40)throw new Error('"version" should be in range from 1 to 40');return t*4+17};b.getSymbolTotalCodewords=function(t){return Qt[t]};b.getBCHDigit=function(e){let t=0;for(;e!==0;)t++,e>>>=1;return t};b.setToSJISFunction=function(t){if(typeof t!="function")throw new Error('"toSJISFunc" is not a valid function.');dt=t};b.isKanjiModeEnabled=function(){return typeof dt<"u"};b.toSJIS=function(t){return dt(t)};var x={};(function(e){e.L={bit:1},e.M={bit:0},e.Q={bit:3},e.H={bit:2};function t(i){if(typeof i!="string")throw new Error("Param is not a string");switch(i.toLowerCase()){case"l":case"low":return e.L;case"m":case"medium":return e.M;case"q":case"quartile":return e.Q;case"h":case"high":return e.H;default:throw new Error("Unknown EC Level: "+i)}}e.isValid=function(r){return r&&typeof r.bit<"u"&&r.bit>=0&&r.bit<4},e.from=function(r,o){if(e.isValid(r))return r;try{return t(r)}catch{return o}}})(x);function _t(){this.buffer=[],this.length=0}_t.prototype={get:function(e){const t=Math.floor(e/8);return(this.buffer[t]>>>7-e%8&1)===1},put:function(e,t){for(let i=0;i<t;i++)this.putBit((e>>>t-i-1&1)===1)},getLengthInBits:function(){return this.length},putBit:function(e){const t=Math.floor(this.length/8);this.buffer.length<=t&&this.buffer.push(0),e&&(this.buffer[t]|=128>>>this.length%8),this.length++}};var Gt=_t;function O(e){if(!e||e<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=e,this.data=new Uint8Array(e*e),this.reservedBit=new Uint8Array(e*e)}O.prototype.set=function(e,t,i,r){const o=e*this.size+t;this.data[o]=i,r&&(this.reservedBit[o]=!0)};O.prototype.get=function(e,t){return this.data[e*this.size+t]};O.prototype.xor=function(e,t,i){this.data[e*this.size+t]^=i};O.prototype.isReserved=function(e,t){return this.reservedBit[e*this.size+t]};var xt=O,At={};(function(e){const t=b.getSymbolSize;e.getRowColCoords=function(r){if(r===1)return[];const o=Math.floor(r/7)+2,n=t(r),s=n===145?26:Math.ceil((n-13)/(2*o-2))*2,u=[n-7];for(let a=1;a<o-1;a++)u[a]=u[a-1]-s;return u.push(6),u.reverse()},e.getPositions=function(r){const o=[],n=e.getRowColCoords(r),s=n.length;for(let u=0;u<s;u++)for(let a=0;a<s;a++)u===0&&a===0||u===0&&a===s-1||u===s-1&&a===0||o.push([n[u],n[a]]);return o}})(At);var bt={};const Wt=b.getSymbolSize,yt=7;bt.getPositions=function(t){const i=Wt(t);return[[0,0],[i-yt,0],[0,i-yt]]};var Nt={};(function(e){e.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};const t={N1:3,N2:3,N3:40,N4:10};e.isValid=function(o){return o!=null&&o!==""&&!isNaN(o)&&o>=0&&o<=7},e.from=function(o){return e.isValid(o)?parseInt(o,10):void 0},e.getPenaltyN1=function(o){const n=o.size;let s=0,u=0,a=0,c=null,l=null;for(let C=0;C<n;C++){u=a=0,c=l=null;for(let f=0;f<n;f++){let g=o.get(C,f);g===c?u++:(u>=5&&(s+=t.N1+(u-5)),c=g,u=1),g=o.get(f,C),g===l?a++:(a>=5&&(s+=t.N1+(a-5)),l=g,a=1)}u>=5&&(s+=t.N1+(u-5)),a>=5&&(s+=t.N1+(a-5))}return s},e.getPenaltyN2=function(o){const n=o.size;let s=0;for(let u=0;u<n-1;u++)for(let a=0;a<n-1;a++){const c=o.get(u,a)+o.get(u,a+1)+o.get(u+1,a)+o.get(u+1,a+1);(c===4||c===0)&&s++}return s*t.N2},e.getPenaltyN3=function(o){const n=o.size;let s=0,u=0,a=0;for(let c=0;c<n;c++){u=a=0;for(let l=0;l<n;l++)u=u<<1&2047|o.get(c,l),l>=10&&(u===1488||u===93)&&s++,a=a<<1&2047|o.get(l,c),l>=10&&(a===1488||a===93)&&s++}return s*t.N3},e.getPenaltyN4=function(o){let n=0;const s=o.data.length;for(let a=0;a<s;a++)n+=o.data[a];return Math.abs(Math.ceil(n*100/s/5)-10)*t.N4};function i(r,o,n){switch(r){case e.Patterns.PATTERN000:return(o+n)%2===0;case e.Patterns.PATTERN001:return o%2===0;case e.Patterns.PATTERN010:return n%3===0;case e.Patterns.PATTERN011:return(o+n)%3===0;case e.Patterns.PATTERN100:return(Math.floor(o/2)+Math.floor(n/3))%2===0;case e.Patterns.PATTERN101:return o*n%2+o*n%3===0;case e.Patterns.PATTERN110:return(o*n%2+o*n%3)%2===0;case e.Patterns.PATTERN111:return(o*n%3+(o+n)%2)%2===0;default:throw new Error("bad maskPattern:"+r)}}e.applyMask=function(o,n){const s=n.size;for(let u=0;u<s;u++)for(let a=0;a<s;a++)n.isReserved(a,u)||n.xor(a,u,i(o,a,u))},e.getBestMask=function(o,n){const s=Object.keys(e.Patterns).length;let u=0,a=1/0;for(let c=0;c<s;c++){n(c),e.applyMask(c,o);const l=e.getPenaltyN1(o)+e.getPenaltyN2(o)+e.getPenaltyN3(o)+e.getPenaltyN4(o);e.applyMask(c,o),l<a&&(a=l,u=c)}return u}})(Nt);var W={};const R=x,q=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],j=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];W.getBlocksCount=function(t,i){switch(i){case R.L:return q[(t-1)*4+0];case R.M:return q[(t-1)*4+1];case R.Q:return q[(t-1)*4+2];case R.H:return q[(t-1)*4+3];default:return}};W.getTotalCodewordsCount=function(t,i){switch(i){case R.L:return j[(t-1)*4+0];case R.M:return j[(t-1)*4+1];case R.Q:return j[(t-1)*4+2];case R.H:return j[(t-1)*4+3];default:return}};var It={},Z={};const Y=new Uint8Array(512),Q=new Uint8Array(256);(function(){let t=1;for(let i=0;i<255;i++)Y[i]=t,Q[t]=i,t<<=1,t&256&&(t^=285);for(let i=255;i<512;i++)Y[i]=Y[i-255]})();Z.log=function(t){if(t<1)throw new Error("log("+t+")");return Q[t]};Z.exp=function(t){return Y[t]};Z.mul=function(t,i){return t===0||i===0?0:Y[Q[t]+Q[i]]};(function(e){const t=Z;e.mul=function(r,o){const n=new Uint8Array(r.length+o.length-1);for(let s=0;s<r.length;s++)for(let u=0;u<o.length;u++)n[s+u]^=t.mul(r[s],o[u]);return n},e.mod=function(r,o){let n=new Uint8Array(r);for(;n.length-o.length>=0;){const s=n[0];for(let a=0;a<o.length;a++)n[a]^=t.mul(o[a],s);let u=0;for(;u<n.length&&n[u]===0;)u++;n=n.slice(u)}return n},e.generateECPolynomial=function(r){let o=new Uint8Array([1]);for(let n=0;n<r;n++)o=e.mul(o,new Uint8Array([1,t.exp(n)]));return o}})(It);const Tt=It;function gt(e){this.genPoly=void 0,this.degree=e,this.degree&&this.initialize(this.degree)}gt.prototype.initialize=function(t){this.degree=t,this.genPoly=Tt.generateECPolynomial(this.degree)};gt.prototype.encode=function(t){if(!this.genPoly)throw new Error("Encoder not initialized");const i=new Uint8Array(t.length+this.degree);i.set(t);const r=Tt.mod(i,this.genPoly),o=this.degree-r.length;if(o>0){const n=new Uint8Array(this.degree);return n.set(r,o),n}return r};var Zt=gt,St={},L={},ht={};ht.isValid=function(t){return!isNaN(t)&&t>=1&&t<=40};var S={};const Mt="[0-9]+",Xt="[A-Z $%*+\\-./:]+";let $="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";$=$.replace(/u/g,"\\u");const te="(?:(?![A-Z0-9 $%*+\\-./:]|"+$+`)(?:.|[\r
]))+`;S.KANJI=new RegExp($,"g");S.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g");S.BYTE=new RegExp(te,"g");S.NUMERIC=new RegExp(Mt,"g");S.ALPHANUMERIC=new RegExp(Xt,"g");const ee=new RegExp("^"+$+"$"),ne=new RegExp("^"+Mt+"$"),oe=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");S.testKanji=function(t){return ee.test(t)};S.testNumeric=function(t){return ne.test(t)};S.testAlphanumeric=function(t){return oe.test(t)};(function(e){const t=ht,i=S;e.NUMERIC={id:"Numeric",bit:1<<0,ccBits:[10,12,14]},e.ALPHANUMERIC={id:"Alphanumeric",bit:1<<1,ccBits:[9,11,13]},e.BYTE={id:"Byte",bit:1<<2,ccBits:[8,16,16]},e.KANJI={id:"Kanji",bit:1<<3,ccBits:[8,10,12]},e.MIXED={bit:-1},e.getCharCountIndicator=function(n,s){if(!n.ccBits)throw new Error("Invalid mode: "+n);if(!t.isValid(s))throw new Error("Invalid version: "+s);return s>=1&&s<10?n.ccBits[0]:s<27?n.ccBits[1]:n.ccBits[2]},e.getBestModeForData=function(n){return i.testNumeric(n)?e.NUMERIC:i.testAlphanumeric(n)?e.ALPHANUMERIC:i.testKanji(n)?e.KANJI:e.BYTE},e.toString=function(n){if(n&&n.id)return n.id;throw new Error("Invalid mode")},e.isValid=function(n){return n&&n.bit&&n.ccBits};function r(o){if(typeof o!="string")throw new Error("Param is not a string");switch(o.toLowerCase()){case"numeric":return e.NUMERIC;case"alphanumeric":return e.ALPHANUMERIC;case"kanji":return e.KANJI;case"byte":return e.BYTE;default:throw new Error("Unknown mode: "+o)}}e.from=function(n,s){if(e.isValid(n))return n;try{return r(n)}catch{return s}}})(L);(function(e){const t=b,i=W,r=x,o=L,n=ht,s=1<<12|1<<11|1<<10|1<<9|1<<8|1<<5|1<<2|1<<0,u=t.getBCHDigit(s);function a(f,g,w){for(let p=1;p<=40;p++)if(g<=e.getCapacity(p,w,f))return p}function c(f,g){return o.getCharCountIndicator(f,g)+4}function l(f,g){let w=0;return f.forEach(function(p){const _=c(p.mode,g);w+=_+p.getBitsLength()}),w}function C(f,g){for(let w=1;w<=40;w++)if(l(f,w)<=e.getCapacity(w,g,o.MIXED))return w}e.from=function(g,w){return n.isValid(g)?parseInt(g,10):w},e.getCapacity=function(g,w,p){if(!n.isValid(g))throw new Error("Invalid QR Code version");typeof p>"u"&&(p=o.BYTE);const _=t.getSymbolTotalCodewords(g),m=i.getTotalCodewordsCount(g,w),y=(_-m)*8;if(p===o.MIXED)return y;const d=y-c(p,g);switch(p){case o.NUMERIC:return Math.floor(d/10*3);case o.ALPHANUMERIC:return Math.floor(d/11*2);case o.KANJI:return Math.floor(d/13);case o.BYTE:default:return Math.floor(d/8)}},e.getBestVersionForData=function(g,w){let p;const _=r.from(w,r.M);if(Array.isArray(g)){if(g.length>1)return C(g,_);if(g.length===0)return 1;p=g[0]}else p=g;return a(p.mode,p.getLength(),_)},e.getEncodedBits=function(g){if(!n.isValid(g)||g<7)throw new Error("Invalid QR Code version");let w=g<<12;for(;t.getBCHDigit(w)-u>=0;)w^=s<<t.getBCHDigit(w)-u;return g<<12|w}})(St);var vt={};const ut=b,Pt=1<<10|1<<8|1<<5|1<<4|1<<2|1<<1|1<<0,re=1<<14|1<<12|1<<10|1<<4|1<<1,Ct=ut.getBCHDigit(Pt);vt.getEncodedBits=function(t,i){const r=t.bit<<3|i;let o=r<<10;for(;ut.getBCHDigit(o)-Ct>=0;)o^=Pt<<ut.getBCHDigit(o)-Ct;return(r<<10|o)^re};var Rt={};const ie=L;function z(e){this.mode=ie.NUMERIC,this.data=e.toString()}z.getBitsLength=function(t){return 10*Math.floor(t/3)+(t%3?t%3*3+1:0)};z.prototype.getLength=function(){return this.data.length};z.prototype.getBitsLength=function(){return z.getBitsLength(this.data.length)};z.prototype.write=function(t){let i,r,o;for(i=0;i+3<=this.data.length;i+=3)r=this.data.substr(i,3),o=parseInt(r,10),t.put(o,10);const n=this.data.length-i;n>0&&(r=this.data.substr(i),o=parseInt(r,10),t.put(o,n*3+1))};var se=z;const ae=L,ot=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function V(e){this.mode=ae.ALPHANUMERIC,this.data=e}V.getBitsLength=function(t){return 11*Math.floor(t/2)+6*(t%2)};V.prototype.getLength=function(){return this.data.length};V.prototype.getBitsLength=function(){return V.getBitsLength(this.data.length)};V.prototype.write=function(t){let i;for(i=0;i+2<=this.data.length;i+=2){let r=ot.indexOf(this.data[i])*45;r+=ot.indexOf(this.data[i+1]),t.put(r,11)}this.data.length%2&&t.put(ot.indexOf(this.data[i]),6)};var ue=V,ce=function(t){for(var i=[],r=t.length,o=0;o<r;o++){var n=t.charCodeAt(o);if(n>=55296&&n<=56319&&r>o+1){var s=t.charCodeAt(o+1);s>=56320&&s<=57343&&(n=(n-55296)*1024+s-56320+65536,o+=1)}if(n<128){i.push(n);continue}if(n<2048){i.push(n>>6|192),i.push(n&63|128);continue}if(n<55296||n>=57344&&n<65536){i.push(n>>12|224),i.push(n>>6&63|128),i.push(n&63|128);continue}if(n>=65536&&n<=1114111){i.push(n>>18|240),i.push(n>>12&63|128),i.push(n>>6&63|128),i.push(n&63|128);continue}i.push(239,191,189)}return new Uint8Array(i).buffer};const le=ce,fe=L;function H(e){this.mode=fe.BYTE,typeof e=="string"&&(e=le(e)),this.data=new Uint8Array(e)}H.getBitsLength=function(t){return t*8};H.prototype.getLength=function(){return this.data.length};H.prototype.getBitsLength=function(){return H.getBitsLength(this.data.length)};H.prototype.write=function(e){for(let t=0,i=this.data.length;t<i;t++)e.put(this.data[t],8)};var de=H;const ge=L,he=b;function K(e){this.mode=ge.KANJI,this.data=e}K.getBitsLength=function(t){return t*13};K.prototype.getLength=function(){return this.data.length};K.prototype.getBitsLength=function(){return K.getBitsLength(this.data.length)};K.prototype.write=function(e){let t;for(t=0;t<this.data.length;t++){let i=he.toSJIS(this.data[t]);if(i>=33088&&i<=40956)i-=33088;else if(i>=57408&&i<=60351)i-=49472;else throw new Error("Invalid SJIS character: "+this.data[t]+`
Make sure your charset is UTF-8`);i=(i>>>8&255)*192+(i&255),e.put(i,13)}};var me=K,Lt={exports:{}};(function(e){var t={single_source_shortest_paths:function(i,r,o){var n={},s={};s[r]=0;var u=t.PriorityQueue.make();u.push(r,0);for(var a,c,l,C,f,g,w,p,_;!u.empty();){a=u.pop(),c=a.value,C=a.cost,f=i[c]||{};for(l in f)f.hasOwnProperty(l)&&(g=f[l],w=C+g,p=s[l],_=typeof s[l]>"u",(_||p>w)&&(s[l]=w,u.push(l,w),n[l]=c))}if(typeof o<"u"&&typeof s[o]>"u"){var m=["Could not find a path from ",r," to ",o,"."].join("");throw new Error(m)}return n},extract_shortest_path_from_predecessor_list:function(i,r){for(var o=[],n=r;n;)o.push(n),i[n],n=i[n];return o.reverse(),o},find_path:function(i,r,o){var n=t.single_source_shortest_paths(i,r,o);return t.extract_shortest_path_from_predecessor_list(n,o)},PriorityQueue:{make:function(i){var r=t.PriorityQueue,o={},n;i=i||{};for(n in r)r.hasOwnProperty(n)&&(o[n]=r[n]);return o.queue=[],o.sorter=i.sorter||r.default_sorter,o},default_sorter:function(i,r){return i.cost-r.cost},push:function(i,r){var o={value:i,cost:r};this.queue.push(o),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return this.queue.length===0}}};e.exports=t})(Lt);(function(e){const t=L,i=se,r=ue,o=de,n=me,s=S,u=b,a=Lt.exports;function c(m){return unescape(encodeURIComponent(m)).length}function l(m,y,d){const h=[];let E;for(;(E=m.exec(d))!==null;)h.push({data:E[0],index:E.index,mode:y,length:E[0].length});return h}function C(m){const y=l(s.NUMERIC,t.NUMERIC,m),d=l(s.ALPHANUMERIC,t.ALPHANUMERIC,m);let h,E;return u.isKanjiModeEnabled()?(h=l(s.BYTE,t.BYTE,m),E=l(s.KANJI,t.KANJI,m)):(h=l(s.BYTE_KANJI,t.BYTE,m),E=[]),y.concat(d,h,E).sort(function(A,N){return A.index-N.index}).map(function(A){return{data:A.data,mode:A.mode,length:A.length}})}function f(m,y){switch(y){case t.NUMERIC:return i.getBitsLength(m);case t.ALPHANUMERIC:return r.getBitsLength(m);case t.KANJI:return n.getBitsLength(m);case t.BYTE:return o.getBitsLength(m)}}function g(m){return m.reduce(function(y,d){const h=y.length-1>=0?y[y.length-1]:null;return h&&h.mode===d.mode?(y[y.length-1].data+=d.data,y):(y.push(d),y)},[])}function w(m){const y=[];for(let d=0;d<m.length;d++){const h=m[d];switch(h.mode){case t.NUMERIC:y.push([h,{data:h.data,mode:t.ALPHANUMERIC,length:h.length},{data:h.data,mode:t.BYTE,length:h.length}]);break;case t.ALPHANUMERIC:y.push([h,{data:h.data,mode:t.BYTE,length:h.length}]);break;case t.KANJI:y.push([h,{data:h.data,mode:t.BYTE,length:c(h.data)}]);break;case t.BYTE:y.push([{data:h.data,mode:t.BYTE,length:c(h.data)}])}}return y}function p(m,y){const d={},h={start:{}};let E=["start"];for(let B=0;B<m.length;B++){const A=m[B],N=[];for(let P=0;P<A.length;P++){const I=A[P],J=""+B+P;N.push(J),d[J]={node:I,lastCount:0},h[J]={};for(let tt=0;tt<E.length;tt++){const M=E[tt];d[M]&&d[M].node.mode===I.mode?(h[M][J]=f(d[M].lastCount+I.length,I.mode)-f(d[M].lastCount,I.mode),d[M].lastCount+=I.length):(d[M]&&(d[M].lastCount=I.length),h[M][J]=f(I.length,I.mode)+4+t.getCharCountIndicator(I.mode,y))}}E=N}for(let B=0;B<E.length;B++)h[E[B]].end=0;return{map:h,table:d}}function _(m,y){let d;const h=t.getBestModeForData(m);if(d=t.from(y,h),d!==t.BYTE&&d.bit<h.bit)throw new Error('"'+m+'" cannot be encoded with mode '+t.toString(d)+`.
 Suggested mode is: `+t.toString(h));switch(d===t.KANJI&&!u.isKanjiModeEnabled()&&(d=t.BYTE),d){case t.NUMERIC:return new i(m);case t.ALPHANUMERIC:return new r(m);case t.KANJI:return new n(m);case t.BYTE:return new o(m)}}e.fromArray=function(y){return y.reduce(function(d,h){return typeof h=="string"?d.push(_(h,null)):h.data&&d.push(_(h.data,h.mode)),d},[])},e.fromString=function(y,d){const h=C(y,u.isKanjiModeEnabled()),E=w(h),B=p(E,d),A=a.find_path(B.map,"start","end"),N=[];for(let P=1;P<A.length-1;P++)N.push(B.table[A[P]].node);return e.fromArray(g(N))},e.rawSplit=function(y){return e.fromArray(C(y,u.isKanjiModeEnabled()))}})(Rt);const X=b,rt=x,we=Gt,pe=xt,ye=At,Ce=bt,ct=Nt,lt=W,Ee=Zt,G=St,Be=vt,_e=L,it=Rt;function Ae(e,t){const i=e.size,r=Ce.getPositions(t);for(let o=0;o<r.length;o++){const n=r[o][0],s=r[o][1];for(let u=-1;u<=7;u++)if(!(n+u<=-1||i<=n+u))for(let a=-1;a<=7;a++)s+a<=-1||i<=s+a||(u>=0&&u<=6&&(a===0||a===6)||a>=0&&a<=6&&(u===0||u===6)||u>=2&&u<=4&&a>=2&&a<=4?e.set(n+u,s+a,!0,!0):e.set(n+u,s+a,!1,!0))}}function be(e){const t=e.size;for(let i=8;i<t-8;i++){const r=i%2===0;e.set(i,6,r,!0),e.set(6,i,r,!0)}}function Ne(e,t){const i=ye.getPositions(t);for(let r=0;r<i.length;r++){const o=i[r][0],n=i[r][1];for(let s=-2;s<=2;s++)for(let u=-2;u<=2;u++)s===-2||s===2||u===-2||u===2||s===0&&u===0?e.set(o+s,n+u,!0,!0):e.set(o+s,n+u,!1,!0)}}function Ie(e,t){const i=e.size,r=G.getEncodedBits(t);let o,n,s;for(let u=0;u<18;u++)o=Math.floor(u/3),n=u%3+i-8-3,s=(r>>u&1)===1,e.set(o,n,s,!0),e.set(n,o,s,!0)}function st(e,t,i){const r=e.size,o=Be.getEncodedBits(t,i);let n,s;for(n=0;n<15;n++)s=(o>>n&1)===1,n<6?e.set(n,8,s,!0):n<8?e.set(n+1,8,s,!0):e.set(r-15+n,8,s,!0),n<8?e.set(8,r-n-1,s,!0):n<9?e.set(8,15-n-1+1,s,!0):e.set(8,15-n-1,s,!0);e.set(r-8,8,1,!0)}function Te(e,t){const i=e.size;let r=-1,o=i-1,n=7,s=0;for(let u=i-1;u>0;u-=2)for(u===6&&u--;;){for(let a=0;a<2;a++)if(!e.isReserved(o,u-a)){let c=!1;s<t.length&&(c=(t[s]>>>n&1)===1),e.set(o,u-a,c),n--,n===-1&&(s++,n=7)}if(o+=r,o<0||i<=o){o-=r,r=-r;break}}}function Se(e,t,i){const r=new we;i.forEach(function(a){r.put(a.mode.bit,4),r.put(a.getLength(),_e.getCharCountIndicator(a.mode,e)),a.write(r)});const o=X.getSymbolTotalCodewords(e),n=lt.getTotalCodewordsCount(e,t),s=(o-n)*8;for(r.getLengthInBits()+4<=s&&r.put(0,4);r.getLengthInBits()%8!==0;)r.putBit(0);const u=(s-r.getLengthInBits())/8;for(let a=0;a<u;a++)r.put(a%2?17:236,8);return Me(r,e,t)}function Me(e,t,i){const r=X.getSymbolTotalCodewords(t),o=lt.getTotalCodewordsCount(t,i),n=r-o,s=lt.getBlocksCount(t,i),u=r%s,a=s-u,c=Math.floor(r/s),l=Math.floor(n/s),C=l+1,f=c-l,g=new Ee(f);let w=0;const p=new Array(s),_=new Array(s);let m=0;const y=new Uint8Array(e.buffer);for(let A=0;A<s;A++){const N=A<a?l:C;p[A]=y.slice(w,w+N),_[A]=g.encode(p[A]),w+=N,m=Math.max(m,N)}const d=new Uint8Array(r);let h=0,E,B;for(E=0;E<m;E++)for(B=0;B<s;B++)E<p[B].length&&(d[h++]=p[B][E]);for(E=0;E<f;E++)for(B=0;B<s;B++)d[h++]=_[B][E];return d}function ve(e,t,i,r){let o;if(Array.isArray(e))o=it.fromArray(e);else if(typeof e=="string"){let c=t;if(!c){const l=it.rawSplit(e);c=G.getBestVersionForData(l,i)}o=it.fromString(e,c||40)}else throw new Error("Invalid data");const n=G.getBestVersionForData(o,i);if(!n)throw new Error("The amount of data is too big to be stored in a QR Code");if(!t)t=n;else if(t<n)throw new Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: `+n+`.
`);const s=Se(t,i,o),u=X.getSymbolSize(t),a=new pe(u);return Ae(a,t),be(a),Ne(a,t),st(a,i,0),t>=7&&Ie(a,t),Te(a,s),isNaN(r)&&(r=ct.getBestMask(a,st.bind(null,a,i))),ct.applyMask(r,a),st(a,i,r),{modules:a,version:t,errorCorrectionLevel:i,maskPattern:r,segments:o}}Bt.create=function(t,i){if(typeof t>"u"||t==="")throw new Error("No input text");let r=rt.M,o,n;return typeof i<"u"&&(r=rt.from(i.errorCorrectionLevel,rt.M),o=G.from(i.version),n=ct.from(i.maskPattern),i.toSJISFunc&&X.setToSJISFunction(i.toSJISFunc)),ve(t,o,r,n)};var Dt={},mt={};(function(e){function t(i){if(typeof i=="number"&&(i=i.toString()),typeof i!="string")throw new Error("Color should be defined as hex string");let r=i.slice().replace("#","").split("");if(r.length<3||r.length===5||r.length>8)throw new Error("Invalid hex color: "+i);(r.length===3||r.length===4)&&(r=Array.prototype.concat.apply([],r.map(function(n){return[n,n]}))),r.length===6&&r.push("F","F");const o=parseInt(r.join(""),16);return{r:o>>24&255,g:o>>16&255,b:o>>8&255,a:o&255,hex:"#"+r.slice(0,6).join("")}}e.getOptions=function(r){r||(r={}),r.color||(r.color={});const o=typeof r.margin>"u"||r.margin===null||r.margin<0?4:r.margin,n=r.width&&r.width>=21?r.width:void 0,s=r.scale||4;return{width:n,scale:n?4:s,margin:o,color:{dark:t(r.color.dark||"#000000ff"),light:t(r.color.light||"#ffffffff")},type:r.type,rendererOpts:r.rendererOpts||{}}},e.getScale=function(r,o){return o.width&&o.width>=r+o.margin*2?o.width/(r+o.margin*2):o.scale},e.getImageWidth=function(r,o){const n=e.getScale(r,o);return Math.floor((r+o.margin*2)*n)},e.qrToImageData=function(r,o,n){const s=o.modules.size,u=o.modules.data,a=e.getScale(s,n),c=Math.floor((s+n.margin*2)*a),l=n.margin*a,C=[n.color.light,n.color.dark];for(let f=0;f<c;f++)for(let g=0;g<c;g++){let w=(f*c+g)*4,p=n.color.light;if(f>=l&&g>=l&&f<c-l&&g<c-l){const _=Math.floor((f-l)/a),m=Math.floor((g-l)/a);p=C[u[_*s+m]?1:0]}r[w++]=p.r,r[w++]=p.g,r[w++]=p.b,r[w]=p.a}}})(mt);(function(e){const t=mt;function i(o,n,s){o.clearRect(0,0,n.width,n.height),n.style||(n.style={}),n.height=s,n.width=s,n.style.height=s+"px",n.style.width=s+"px"}function r(){try{return document.createElement("canvas")}catch{throw new Error("You need to specify a canvas element")}}e.render=function(n,s,u){let a=u,c=s;typeof a>"u"&&(!s||!s.getContext)&&(a=s,s=void 0),s||(c=r()),a=t.getOptions(a);const l=t.getImageWidth(n.modules.size,a),C=c.getContext("2d"),f=C.createImageData(l,l);return t.qrToImageData(f.data,n,a),i(C,c,l),C.putImageData(f,0,0),c},e.renderToDataURL=function(n,s,u){let a=u;typeof a>"u"&&(!s||!s.getContext)&&(a=s,s=void 0),a||(a={});const c=e.render(n,s,a),l=a.type||"image/png",C=a.rendererOpts||{};return c.toDataURL(l,C.quality)}})(Dt);var Ut={};const Pe=mt;function Et(e,t){const i=e.a/255,r=t+'="'+e.hex+'"';return i<1?r+" "+t+'-opacity="'+i.toFixed(2).slice(1)+'"':r}function at(e,t,i){let r=e+t;return typeof i<"u"&&(r+=" "+i),r}function Re(e,t,i){let r="",o=0,n=!1,s=0;for(let u=0;u<e.length;u++){const a=Math.floor(u%t),c=Math.floor(u/t);!a&&!n&&(n=!0),e[u]?(s++,u>0&&a>0&&e[u-1]||(r+=n?at("M",a+i,.5+c+i):at("m",o,0),o=0,n=!1),a+1<t&&e[u+1]||(r+=at("h",s),s=0)):o++}return r}Ut.render=function(t,i,r){const o=Pe.getOptions(i),n=t.modules.size,s=t.modules.data,u=n+o.margin*2,a=o.color.light.a?"<path "+Et(o.color.light,"fill")+' d="M0 0h'+u+"v"+u+'H0z"/>':"",c="<path "+Et(o.color.dark,"stroke")+' d="'+Re(s,n,o.margin)+'"/>',l='viewBox="0 0 '+u+" "+u+'"',f='<svg xmlns="http://www.w3.org/2000/svg" '+(o.width?'width="'+o.width+'" height="'+o.width+'" ':"")+l+' shape-rendering="crispEdges">'+a+c+`</svg>
`;return typeof r=="function"&&r(null,f),f};const Le=jt,ft=Bt,Ft=Dt,De=Ut;function wt(e,t,i,r,o){const n=[].slice.call(arguments,1),s=n.length,u=typeof n[s-1]=="function";if(!u&&!Le())throw new Error("Callback required as last argument");if(u){if(s<2)throw new Error("Too few arguments provided");s===2?(o=i,i=t,t=r=void 0):s===3&&(t.getContext&&typeof o>"u"?(o=r,r=void 0):(o=r,r=i,i=t,t=void 0))}else{if(s<1)throw new Error("Too few arguments provided");return s===1?(i=t,t=r=void 0):s===2&&!t.getContext&&(r=i,i=t,t=void 0),new Promise(function(a,c){try{const l=ft.create(i,r);a(e(l,t,r))}catch(l){c(l)}})}try{const a=ft.create(i,r);o(null,e(a,t,r))}catch(a){o(a)}}k.create=ft.create;k.toCanvas=wt.bind(null,Ft.render);k.toDataURL=wt.bind(null,Ft.renderToDataURL);k.toString=wt.bind(null,function(e,t,i){return De.render(e,i)});const Ue=e=>(Yt("data-v-d7aeda90"),e=e(),$t(),e),Fe={class:"brevity-qr-code"},ke={class:"brevity-qr-code-input"},ze={class:"cont-box"},Ve={class:"irregular-box"},He={class:"brevity-qr-code-result"},Ke=Ue(()=>T("div",{class:"irregular-box"},"二维码",-1)),Je={class:"qr-code-box"},Ye={key:0,class:"qr-code",src:qt},$e={class:"tips"},Oe={class:"resilt-tool"},qe=zt({__name:"QRCode",setup(e){const t=U(),i=U(),r=U(""),o=U(""),n=U(!0),s=U("png"),u=[{value:"png",label:"PNG "},{value:"jpg",label:"JPG"},{value:"svg",label:"SVG"}],a=()=>{!i.value||(n.value=!1,k.toDataURL(t.value,i.value,(C,f)=>{C?console.error("error",C):r.value=f}),k.toString(i.value,(C,f)=>{C?console.error("error",C):o.value=f}))},c=()=>{i.value="",n.value=!0},l=()=>{const C="brevity_"+kt(Date.now(),"YYYYMMDD")+"."+s.value,f=new File([o.value],C,{type:"text/plain;charset=utf-8"});switch(s.value){case"png":et.exports.saveAs(r.value,C);break;case"jpg":et.exports.saveAs(r.value,C);break;case"svg":et.exports.saveAs(f);break}};return(C,f)=>{const g=F("a-textarea"),w=F("a-button"),p=F("a-select"),_=F("a-col"),m=F("a-row"),y=F("a-card");return pt(),Vt(y,{bordered:!1,title:"二维码",class:"brevity-stretch-card"},{default:D(()=>[T("div",Fe,[T("div",ke,[T("div",ze,[v(g,{bordered:!1,value:i.value,"onUpdate:value":f[0]||(f[0]=d=>i.value=d),placeholder:"请输入内容","auto-size":{minRows:20,maxRows:20}},null,8,["value"])]),T("div",Ve,[v(w,{type:"primary",class:"mr12",onClick:a},{default:D(()=>[nt("生成二维码")]),_:1}),v(w,{onClick:c},{default:D(()=>[nt("再生成一个")]),_:1})])]),T("div",He,[Ke,T("div",Je,[T("canvas",{class:"qr-code",id:"canvas",ref_key:"canvasRef",ref:t},null,512),n.value?(pt(),Ht("img",Ye)):Kt("",!0)]),T("p",$e,Jt(n.value?" 扫一扫二维码，加入 QQ 群聊":"已为您生成二维码"),1),T("div",Oe,[v(m,{gutter:24,class:"mb16"},{default:D(()=>[v(_,{span:12},{default:D(()=>[v(p,{ref:"select",value:s.value,"onUpdate:value":f[1]||(f[1]=d=>s.value=d),options:u,class:"w100"},null,8,["value"])]),_:1}),v(_,{span:12},{default:D(()=>[v(p,{ref:"select",value:s.value,"onUpdate:value":f[2]||(f[2]=d=>s.value=d),options:u,class:"w100"},null,8,["value"])]),_:1})]),_:1}),v(w,{onClick:l,block:""},{default:D(()=>[nt("保存二维码")]),_:1})])])])]),_:1})}}});const Xe=Ot(qe,[["__scopeId","data-v-d7aeda90"]]);export{Xe as default};