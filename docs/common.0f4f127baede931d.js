"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8592],{7543:(D,p,l)=>{l.d(p,{c:()=>a});var r=l(1308),h=l(7864),c=l(1911);const a=(o,n)=>{let s,t;const i=(g,w,f)=>{if(typeof document>"u")return;const _=document.elementFromPoint(g,w);_&&n(_)?_!==s&&(v(),u(_,f)):v()},u=(g,w)=>{s=g,t||(t=s);const f=s;(0,r.c)(()=>f.classList.add("ion-activated")),w()},v=(g=!1)=>{if(!s)return;const w=s;(0,r.c)(()=>w.classList.remove("ion-activated")),g&&t!==s&&s.click(),s=void 0};return(0,c.createGesture)({el:o,gestureName:"buttonActiveDrag",threshold:0,onStart:g=>i(g.currentX,g.currentY,h.a),onMove:g=>i(g.currentX,g.currentY,h.b),onEnd:()=>{v(!0),(0,h.h)(),t=void 0}})}},5062:(D,p,l)=>{l.d(p,{i:()=>r});const r=h=>h&&""!==h.dir?"rtl"===h.dir.toLowerCase():"rtl"===document?.dir.toLowerCase()},5106:(D,p,l)=>{l.r(p),l.d(p,{startFocusVisible:()=>a});const r="ion-focused",c=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp","Home","End"],a=o=>{let n=[],s=!0;const t=o?o.shadowRoot:document,i=o||document.body,u=E=>{n.forEach(d=>d.classList.remove(r)),E.forEach(d=>d.classList.add(r)),n=E},v=()=>{s=!1,u([])},g=E=>{s=c.includes(E.key),s||u([])},w=E=>{if(s&&void 0!==E.composedPath){const d=E.composedPath().filter(m=>!!m.classList&&m.classList.contains("ion-focusable"));u(d)}},f=()=>{t.activeElement===i&&u([])};return t.addEventListener("keydown",g),t.addEventListener("focusin",w),t.addEventListener("focusout",f),t.addEventListener("touchstart",v),t.addEventListener("mousedown",v),{destroy:()=>{t.removeEventListener("keydown",g),t.removeEventListener("focusin",w),t.removeEventListener("focusout",f),t.removeEventListener("touchstart",v),t.removeEventListener("mousedown",v)},setFocus:u}}},7040:(D,p,l)=>{l.d(p,{C:()=>o,a:()=>c,d:()=>a});var r=l(5861),h=l(5730);const c=function(){var n=(0,r.Z)(function*(s,t,i,u,v,g){var w;if(s)return s.attachViewToDom(t,i,v,u);if(!(g||"string"==typeof i||i instanceof HTMLElement))throw new Error("framework delegate is missing");const f="string"==typeof i?null===(w=t.ownerDocument)||void 0===w?void 0:w.createElement(i):i;return u&&u.forEach(_=>f.classList.add(_)),v&&Object.assign(f,v),t.appendChild(f),yield new Promise(_=>(0,h.c)(f,_)),f});return function(t,i,u,v,g,w){return n.apply(this,arguments)}}(),a=(n,s)=>{if(s){if(n)return n.removeViewFromDom(s.parentElement,s);s.remove()}return Promise.resolve()},o=()=>{let n,s;return{attachViewToDom:function(){var u=(0,r.Z)(function*(v,g,w={},f=[]){var _,E;if(n=v,g){const m="string"==typeof g?null===(_=n.ownerDocument)||void 0===_?void 0:_.createElement(g):g;f.forEach(e=>m.classList.add(e)),Object.assign(m,w),n.appendChild(m),yield new Promise(e=>(0,h.c)(m,e))}else if(n.children.length>0&&!n.children[0].classList.contains("ion-delegate-host")){const e=null===(E=n.ownerDocument)||void 0===E?void 0:E.createElement("div");e.classList.add("ion-delegate-host"),f.forEach(y=>e.classList.add(y)),e.append(...n.children),n.appendChild(e)}const d=document.querySelector("ion-app")||document.body;return s=document.createComment("ionic teleport"),n.parentNode.insertBefore(s,n),d.appendChild(n),n});return function(g,w){return u.apply(this,arguments)}}(),removeViewFromDom:()=>(n&&s&&(s.parentNode.insertBefore(n,s),s.remove()),Promise.resolve())}}},7864:(D,p,l)=>{l.d(p,{a:()=>a,b:()=>o,c:()=>c,d:()=>s,h:()=>n});const r={getEngine(){var t;const i=window;return i.TapticEngine||(null===(t=i.Capacitor)||void 0===t?void 0:t.isPluginAvailable("Haptics"))&&i.Capacitor.Plugins.Haptics},available(){var t;const i=window;return!!this.getEngine()&&("web"!==(null===(t=i.Capacitor)||void 0===t?void 0:t.getPlatform())||typeof navigator<"u"&&void 0!==navigator.vibrate)},isCordova:()=>!!window.TapticEngine,isCapacitor:()=>!!window.Capacitor,impact(t){const i=this.getEngine();if(!i)return;const u=this.isCapacitor()?t.style.toUpperCase():t.style;i.impact({style:u})},notification(t){const i=this.getEngine();if(!i)return;const u=this.isCapacitor()?t.style.toUpperCase():t.style;i.notification({style:u})},selection(){this.impact({style:"light"})},selectionStart(){const t=this.getEngine();!t||(this.isCapacitor()?t.selectionStart():t.gestureSelectionStart())},selectionChanged(){const t=this.getEngine();!t||(this.isCapacitor()?t.selectionChanged():t.gestureSelectionChanged())},selectionEnd(){const t=this.getEngine();!t||(this.isCapacitor()?t.selectionEnd():t.gestureSelectionEnd())}},h=()=>r.available(),c=()=>{h()&&r.selection()},a=()=>{h()&&r.selectionStart()},o=()=>{h()&&r.selectionChanged()},n=()=>{h()&&r.selectionEnd()},s=t=>{h()&&r.impact(t)}},6642:(D,p,l)=>{l.d(p,{I:()=>o,a:()=>u,b:()=>n,c:()=>w,d:()=>_,f:()=>v,g:()=>i,i:()=>t,p:()=>f,r:()=>E,s:()=>g});var r=l(5861),h=l(5730),c=l(4147);const o="ion-content",n=".ion-content-scroll-host",s=`${o}, ${n}`,t=d=>"ION-CONTENT"===d.tagName,i=function(){var d=(0,r.Z)(function*(m){return t(m)?(yield new Promise(e=>(0,h.c)(m,e)),m.getScrollElement()):m});return function(e){return d.apply(this,arguments)}}(),u=d=>d.querySelector(n)||d.querySelector(s),v=d=>d.closest(s),g=(d,m)=>t(d)?d.scrollToTop(m):Promise.resolve(d.scrollTo({top:0,left:0,behavior:m>0?"smooth":"auto"})),w=(d,m,e,y)=>t(d)?d.scrollByPoint(m,e,y):Promise.resolve(d.scrollBy({top:e,left:m,behavior:y>0?"smooth":"auto"})),f=d=>(0,c.a)(d,o),_=d=>{if(t(d)){const e=d.scrollY;return d.scrollY=!1,e}return d.style.setProperty("overflow","hidden"),!0},E=(d,m)=>{t(d)?d.scrollY=m:d.style.removeProperty("overflow")}},2357:(D,p,l)=>{l.d(p,{a:()=>r,b:()=>g,c:()=>s,d:()=>w,e:()=>M,f:()=>n,g:()=>f,h:()=>c,i:()=>h,j:()=>e,k:()=>y,l:()=>t,m:()=>u,n:()=>_,o:()=>i,p:()=>o,q:()=>a,r:()=>m,s:()=>C,t:()=>v,u:()=>E,v:()=>d});const r="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Arrow Back</title><path stroke-linecap='square' stroke-miterlimit='10' stroke-width='48' d='M244 400L100 256l144-144M120 256h292' class='ionicon-fill-none'/></svg>",h="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Arrow Down</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 268l144 144 144-144M256 392V100' class='ionicon-fill-none'/></svg>",c="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Caret Back</title><path d='M368 64L144 256l224 192V64z'/></svg>",a="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Caret Down</title><path d='M64 144l192 224 192-224H64z'/></svg>",o="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Caret Up</title><path d='M448 368L256 144 64 368h384z'/></svg>",n="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Checkmark</title><path stroke-linecap='round' stroke-linejoin='round' d='M416 128L192 384l-96-96' class='ionicon-fill-none ionicon-stroke-width'/></svg>",s="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Back</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M328 112L184 256l144 144' class='ionicon-fill-none'/></svg>",t="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Down</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 184l144 144 144-144' class='ionicon-fill-none'/></svg>",i="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Forward</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",u="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Forward</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",v="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Close</title><path d='M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z'/></svg>",g="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Close Circle</title><path d='M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm75.31 260.69a16 16 0 11-22.62 22.62L256 278.63l-52.69 52.68a16 16 0 01-22.62-22.62L233.37 256l-52.68-52.69a16 16 0 0122.62-22.62L256 233.37l52.69-52.68a16 16 0 0122.62 22.62L278.63 256z'/></svg>",w="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Close</title><path d='M400 145.49L366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z'/></svg>",f="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Ellipse</title><circle cx='256' cy='256' r='192' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>",_="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Ellipsis Horizontal</title><circle cx='256' cy='256' r='48'/><circle cx='416' cy='256' r='48'/><circle cx='96' cy='256' r='48'/></svg>",E="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Menu</title><path stroke-linecap='round' stroke-miterlimit='10' d='M80 160h352M80 256h352M80 352h352' class='ionicon-fill-none ionicon-stroke-width'/></svg>",d="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Menu</title><path d='M64 384h384v-42.67H64zm0-106.67h384v-42.66H64zM64 128v42.67h384V128z'/></svg>",m="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Remove</title><path stroke-linecap='round' stroke-linejoin='round' d='M400 256H112' class='ionicon-fill-none ionicon-stroke-width'/></svg>",e="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Reorder Three</title><path stroke-linecap='round' stroke-linejoin='round' d='M96 256h320M96 176h320M96 336h320' class='ionicon-fill-none ionicon-stroke-width'/></svg>",y="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Reorder Two</title><path stroke-linecap='square' stroke-linejoin='round' stroke-width='44' d='M118 304h276M118 208h276' class='ionicon-fill-none'/></svg>",C="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Search</title><path d='M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-miterlimit='10' d='M338.29 338.29L448 448' class='ionicon-fill-none ionicon-stroke-width'/></svg>",M="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Search</title><path d='M464 428L339.92 303.9a160.48 160.48 0 0030.72-94.58C370.64 120.37 298.27 48 209.32 48S48 120.37 48 209.32s72.37 161.32 161.32 161.32a160.48 160.48 0 0094.58-30.72L428 464zM209.32 319.69a110.38 110.38 0 11110.37-110.37 110.5 110.5 0 01-110.37 110.37z'/></svg>"},8439:(D,p,l)=>{l.d(p,{s:()=>r});const r=t=>{try{if(t instanceof s)return t.value;if(!a()||"string"!=typeof t||""===t)return t;const i=document.createDocumentFragment(),u=document.createElement("div");i.appendChild(u),u.innerHTML=t,n.forEach(f=>{const _=i.querySelectorAll(f);for(let E=_.length-1;E>=0;E--){const d=_[E];d.parentNode?d.parentNode.removeChild(d):i.removeChild(d);const m=c(d);for(let e=0;e<m.length;e++)h(m[e])}});const v=c(i);for(let f=0;f<v.length;f++)h(v[f]);const g=document.createElement("div");g.appendChild(i);const w=g.querySelector("div");return null!==w?w.innerHTML:g.innerHTML}catch(i){return console.error(i),""}},h=t=>{if(t.nodeType&&1!==t.nodeType)return;for(let u=t.attributes.length-1;u>=0;u--){const v=t.attributes.item(u),g=v.name;if(!o.includes(g.toLowerCase())){t.removeAttribute(g);continue}const w=v.value;null!=w&&w.toLowerCase().includes("javascript:")&&t.removeAttribute(g)}const i=c(t);for(let u=0;u<i.length;u++)h(i[u])},c=t=>null!=t.children?t.children:t.childNodes,a=()=>{var t;const u=null===(t=window?.Ionic)||void 0===t?void 0:t.config;return!u||(u.get?u.get("sanitizerEnabled",!0):!0===u.sanitizerEnabled||void 0===u.sanitizerEnabled)},o=["class","id","href","src","name","slot"],n=["script","style","iframe","meta","link","object","embed"];class s{constructor(i){this.value=i}}},1316:(D,p,l)=>{l.r(p),l.d(p,{KEYBOARD_DID_CLOSE:()=>h,KEYBOARD_DID_OPEN:()=>r,copyVisualViewport:()=>m,keyboardDidClose:()=>f,keyboardDidOpen:()=>g,keyboardDidResize:()=>w,resetKeyboardAssist:()=>s,setKeyboardClose:()=>v,setKeyboardOpen:()=>u,startKeyboardAssist:()=>t,trackViewportChanges:()=>d});const r="ionKeyboardDidShow",h="ionKeyboardDidHide";let a={},o={},n=!1;const s=()=>{a={},o={},n=!1},t=e=>{i(e),e.visualViewport&&(o=m(e.visualViewport),e.visualViewport.onresize=()=>{d(e),g()||w(e)?u(e):f(e)&&v(e)})},i=e=>{e.addEventListener("keyboardDidShow",y=>u(e,y)),e.addEventListener("keyboardDidHide",()=>v(e))},u=(e,y)=>{_(e,y),n=!0},v=e=>{E(e),n=!1},g=()=>!n&&a.width===o.width&&(a.height-o.height)*o.scale>150,w=e=>n&&!f(e),f=e=>n&&o.height===e.innerHeight,_=(e,y)=>{const M=new CustomEvent(r,{detail:{keyboardHeight:y?y.keyboardHeight:e.innerHeight-o.height}});e.dispatchEvent(M)},E=e=>{const y=new CustomEvent(h);e.dispatchEvent(y)},d=e=>{a=Object.assign({},o),o=m(e.visualViewport)},m=e=>({width:Math.round(e.width),height:Math.round(e.height),offsetTop:e.offsetTop,offsetLeft:e.offsetLeft,pageTop:e.pageTop,pageLeft:e.pageLeft,scale:e.scale})},9852:(D,p,l)=>{l.d(p,{c:()=>h});var r=l(3457);const h=c=>{let a,o,n;const s=()=>{a=()=>{n=!0,c&&c(!0)},o=()=>{n=!1,c&&c(!1)},null==r.w||r.w.addEventListener("keyboardWillShow",a),null==r.w||r.w.addEventListener("keyboardWillHide",o)};return s(),{init:s,destroy:()=>{null==r.w||r.w.removeEventListener("keyboardWillShow",a),null==r.w||r.w.removeEventListener("keyboardWillHide",o),a=o=void 0},isKeyboardVisible:()=>n}}},7741:(D,p,l)=>{l.d(p,{S:()=>h});const h={bubbles:{dur:1e3,circles:9,fn:(c,a,o)=>{const n=c*a/o-c+"ms",s=2*Math.PI*a/o;return{r:5,style:{top:9*Math.sin(s)+"px",left:9*Math.cos(s)+"px","animation-delay":n}}}},circles:{dur:1e3,circles:8,fn:(c,a,o)=>{const n=a/o,s=c*n-c+"ms",t=2*Math.PI*n;return{r:5,style:{top:9*Math.sin(t)+"px",left:9*Math.cos(t)+"px","animation-delay":s}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(c,a)=>({r:6,style:{left:9-9*a+"px","animation-delay":-110*a+"ms"}})},lines:{dur:1e3,lines:8,fn:(c,a,o)=>({y1:14,y2:26,style:{transform:`rotate(${360/o*a+(a<o/2?180:-180)}deg)`,"animation-delay":c*a/o-c+"ms"}})},"lines-small":{dur:1e3,lines:8,fn:(c,a,o)=>({y1:12,y2:20,style:{transform:`rotate(${360/o*a+(a<o/2?180:-180)}deg)`,"animation-delay":c*a/o-c+"ms"}})},"lines-sharp":{dur:1e3,lines:12,fn:(c,a,o)=>({y1:17,y2:29,style:{transform:`rotate(${30*a+(a<6?180:-180)}deg)`,"animation-delay":c*a/o-c+"ms"}})},"lines-sharp-small":{dur:1e3,lines:12,fn:(c,a,o)=>({y1:12,y2:20,style:{transform:`rotate(${30*a+(a<6?180:-180)}deg)`,"animation-delay":c*a/o-c+"ms"}})}}},1959:(D,p,l)=>{l.r(p),l.d(p,{createSwipeBackGesture:()=>o});var r=l(5730),h=l(5062),c=l(1911);l(4349);const o=(n,s,t,i,u)=>{const v=n.ownerDocument.defaultView,g=(0,h.i)(n),f=e=>g?-e.deltaX:e.deltaX;return(0,c.createGesture)({el:n,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:e=>(e=>{const{startX:C}=e;return g?C>=v.innerWidth-50:C<=50})(e)&&s(),onStart:t,onMove:e=>{const C=f(e)/v.innerWidth;i(C)},onEnd:e=>{const y=f(e),C=v.innerWidth,M=y/C,b=(e=>g?-e.velocityX:e.velocityX)(e),O=b>=0&&(b>.2||y>C/2),L=(O?1-M:M)*C;let x=0;if(L>5){const T=L/Math.abs(b);x=Math.min(T,540)}u(O,M<=0?.01:(0,r.l)(0,M,.9999),x)}})}},992:(D,p,l)=>{l.d(p,{c:()=>c});var r=l(6353),h=l(2206);class c{constructor(){}ngOnInit(){}static#t=this.\u0275fac=function(n){return new(n||c)};static#e=this.\u0275cmp=r.Xpm({type:c,selectors:[["app-footer"]],decls:6,vars:1,consts:[["collapse","fade",3,"translucent"],["href","https://github.com/ourchitecture/ourchitecture.github.com/"],["name","logo-github","slot","start"]],template:function(n,s){1&n&&(r.TgZ(0,"ion-footer",0)(1,"ion-toolbar")(2,"ion-buttons")(3,"ion-button",1),r._UZ(4,"ion-icon",2),r._uU(5," GitHub "),r.qZA()()()()),2&n&&r.Q6J("translucent",!0)},dependencies:[h.YG,h.Sm,h.fr,h.gu,h.sr]})}},6029:(D,p,l)=>{l.d(p,{J:()=>o});var r=l(6895),h=l(4719),c=l(2206),a=l(6353);class o{static#t=this.\u0275fac=function(t){return new(t||o)};static#e=this.\u0275mod=a.oAB({type:o});static#n=this.\u0275inj=a.cJS({imports:[r.ez,h.u5,c.Pc]})}}}]);