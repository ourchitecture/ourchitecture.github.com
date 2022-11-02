"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[4328],{4147:(U,O,I)=>{I.d(O,{a:()=>_,b:()=>M,p:()=>A});const A=(g,...v)=>console.warn(`[Ionic Warning]: ${g}`,...v),M=(g,...v)=>console.error(`[Ionic Error]: ${g}`,...v),_=(g,...v)=>console.error(`<${g.tagName.toLowerCase()}> must be used inside ${v.join(" or ")}.`)},2366:(U,O,I)=>{I.d(O,{A:()=>Ae,B:()=>f,C:()=>Ee,D:()=>h,E:()=>Me,F:()=>se,G:()=>_e,H:()=>$e,I:()=>C,J:()=>ue,K:()=>ae,L:()=>De,M:()=>ee,N:()=>P,O:()=>ze,P:()=>je,Q:()=>te,R:()=>j,S:()=>ce,a:()=>le,b:()=>g,c:()=>M,d:()=>N,e:()=>z,f:()=>pe,g:()=>de,h:()=>Se,i:()=>_,j:()=>X,k:()=>K,l:()=>Q,m:()=>q,n:()=>V,o:()=>x,p:()=>b,q:()=>Ue,r:()=>Le,s:()=>Fe,t:()=>$,u:()=>c,v:()=>oe,w:()=>v,x:()=>Ce,y:()=>Oe,z:()=>B});var A=I(4147);const M=(e,n)=>e.month===n.month&&e.day===n.day&&e.year===n.year,_=(e,n)=>e.year<n.year||e.year===n.year&&e.month<n.month||e.year===n.year&&e.month===n.month&&null!==e.day&&e.day<n.day,g=(e,n)=>e.year>n.year||e.year===n.year&&e.month>n.month||e.year===n.year&&e.month===n.month&&null!==e.day&&e.day>n.day,v=(e,n,t)=>{const o=Array.isArray(e)?e:[e];for(const r of o)if(void 0!==n&&_(r,n)||void 0!==t&&g(r,t)){(0,A.p)(`The value provided to ion-datetime is out of bounds.\n\nMin: ${JSON.stringify(n)}\nMax: ${JSON.stringify(t)}\nValue: ${JSON.stringify(e)}`);break}},C=(e,n)=>{if(void 0!==n)return"h23"===n;const t=new Intl.DateTimeFormat(e,{hour:"numeric"}),o=t.resolvedOptions();if(void 0!==o.hourCycle)return"h23"===o.hourCycle;const r=new Date("5/18/2021 00:00"),d=t.formatToParts(r).find(i=>"hour"===i.type);if(!d)throw new Error("Hour value not found from DateTimeFormat");return"00"===d.value},c=(e,n)=>4===e||6===e||9===e||11===e?30:2===e?(e=>e%4==0&&e%100!=0||e%400==0)(n)?29:28:31,f=(e,n={month:"numeric",year:"numeric"})=>"month"===new Intl.DateTimeFormat(e,n).formatToParts(new Date)[0].type,h=e=>"dayPeriod"===new Intl.DateTimeFormat(e,{hour:"numeric"}).formatToParts(new Date)[0].type,T=e=>("0"+(void 0!==e?Math.abs(e):"0")).slice(-2);function $(e){if(Array.isArray(e))return e.map(t=>$(t));let n="";return void 0!==e.year?(n=(e=>("000"+(void 0!==e?Math.abs(e):"0")).slice(-4))(e.year),void 0!==e.month&&(n+="-"+T(e.month),void 0!==e.day&&(n+="-"+T(e.day),void 0!==e.hour&&(n+=`T${T(e.hour)}:${T(e.minute)}:00`,n+=void 0===e.tzOffset?"Z":(e.tzOffset>0?"+":"-")+T(Math.floor(Math.abs(e.tzOffset/60)))+":"+T(e.tzOffset%60))))):void 0!==e.hour&&(n=T(e.hour)+":"+T(e.minute)),n}const H=(e,n)=>void 0===n?e:"am"===n?12===e?0:e:12===e?12:e+12,K=e=>{const{dayOfWeek:n}=e;if(null==n)throw new Error("No day of week provided");return F(e,n)},X=e=>{const{dayOfWeek:n}=e;if(null==n)throw new Error("No day of week provided");return S(e,6-n)},q=e=>S(e,1),Q=e=>F(e,1),V=e=>F(e,7),x=e=>S(e,7),F=(e,n)=>{const{month:t,day:o,year:r}=e;if(null===o)throw new Error("No day provided");const u={month:t,day:o,year:r};if(u.day=o-n,u.day<1&&(u.month-=1),u.month<1&&(u.month=12,u.year-=1),u.day<1){const d=c(u.month,u.year);u.day=d+u.day}return u},S=(e,n)=>{const{month:t,day:o,year:r}=e;if(null===o)throw new Error("No day provided");const u={month:t,day:o,year:r},d=c(t,r);return u.day=o+n,u.day>d&&(u.day-=d,u.month+=1),u.month>12&&(u.month=1,u.year+=1),u},N=e=>{const n=1===e.month?12:e.month-1,t=1===e.month?e.year-1:e.year,o=c(n,t);return{month:n,year:t,day:o<e.day?o:e.day}},z=e=>{const n=12===e.month?1:e.month+1,t=12===e.month?e.year+1:e.year,o=c(n,t);return{month:n,year:t,day:o<e.day?o:e.day}},Z=(e,n)=>{const t=e.month,o=e.year+n,r=c(t,o);return{month:t,year:o,day:r<e.day?r:e.day}},P=e=>Z(e,-1),ee=e=>Z(e,1),ne=(e,n,t)=>n?e:H(e,t),te=(e,n)=>{const{ampm:t,hour:o}=e;let r=o;return"am"===t&&"pm"===n?r=H(r,"pm"):"pm"===t&&"am"===n&&(r=Math.abs(r-12)),r},oe=e=>{const{month:n,day:t,year:o}=e,r=Object.assign({},e),u=c(n,o);return null!==t&&u<t&&(r.day=u),r},ue=(e,n,t)=>void 0===n.hour||void 0===n.minute?"Invalid Time":new Intl.DateTimeFormat(e,{hour:"numeric",minute:"numeric",timeZone:"UTC",hourCycle:t?"h23":"h12"}).format(new Date($(Object.assign(Object.assign({},n),{tzOffset:void 0})))),G=e=>{const n=e.toString();return n.length>1?n:`0${n}`},ie=(e,n)=>n?G(e):0===e?"12":e.toString(),de=(e,n,t)=>{if(null===t.day)return null;const o=new Date(`${t.month}/${t.day}/${t.year} GMT+0000`),r=new Intl.DateTimeFormat(e,{weekday:"long",month:"long",day:"numeric",timeZone:"UTC"}).format(o);return n?`Today, ${r}`:r},ae=(e,n)=>{const t=new Date(`${n.month}/${n.day}/${n.year} GMT+0000`);return new Intl.DateTimeFormat(e,{weekday:"short",month:"short",day:"numeric",timeZone:"UTC"}).format(t)},se=(e,n)=>{const t=new Date(`${n.month}/${n.day}/${n.year} GMT+0000`);return new Intl.DateTimeFormat(e,{month:"long",year:"numeric",timeZone:"UTC"}).format(t)},ce=(e,n)=>j(e,n,{month:"short",day:"numeric",year:"numeric"}),le=(e,n)=>me(e,n,{day:"numeric"}).find(t=>"day"===t.type).value,ye=(e,n)=>j(e,n,{year:"numeric"}),R=e=>new Date(`${e.month}/${e.day}/${e.year}${void 0!==e.hour&&void 0!==e.minute?` ${e.hour}:${e.minute}`:""} GMT+0000`),j=(e,n,t)=>{const o=R(n);return W(e,t).format(o)},me=(e,n,t)=>{const o=R(n);return W(e,t).formatToParts(o)},W=(e,n)=>new Intl.DateTimeFormat(e,Object.assign(Object.assign({},n),{timeZone:"UTC"})),fe=e=>{if("RelativeTimeFormat"in Intl){const n=new Intl.RelativeTimeFormat(e,{numeric:"auto"}).format(0,"day");return n.charAt(0).toUpperCase()+n.slice(1)}return"Today"},L=e=>{const n=e.getTimezoneOffset();return e.setMinutes(e.getMinutes()-n),e},he=L(new Date("2022T01:00")),ge=L(new Date("2022T13:00")),Y=(e,n)=>{const t="am"===n?he:ge,o=new Intl.DateTimeFormat(e,{hour:"numeric",timeZone:"UTC"}).formatToParts(t).find(r=>"dayPeriod"===r.type);return o?o.value:(e=>void 0===e?"":e.toUpperCase())(n)},De=e=>Array.isArray(e)?e.join(","):e,pe=()=>L(new Date).toISOString(),Te=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59],ve=[0,1,2,3,4,5,6,7,8,9,10,11],we=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],Me=(e,n,t=0)=>{const r=new Intl.DateTimeFormat(e,{weekday:"ios"===n?"short":"narrow"}),u=new Date("11/01/2020"),d=[];for(let i=t;i<t+7;i++){const a=new Date(u);a.setDate(a.getDate()+i),d.push(r.format(a))}return d},_e=(e,n,t)=>{const o=c(e,n),r=new Date(`${e}/1/${n}`).getDay(),u=r>=t?r-(t+1):6-(t-r);let d=[];for(let i=1;i<=o;i++)d.push({day:i,dayOfWeek:(u+i)%7});for(let i=0;i<=u;i++)d=[{day:null,dayOfWeek:null},...d];return d},$e=e=>[N(e),{month:e.month,year:e.year,day:e.day},z(e)],Oe=(e,n,t,o,r,u={month:"long"})=>{const{year:d}=n,i=[];if(void 0!==r){let a=r;void 0!==(null==o?void 0:o.month)&&(a=a.filter(y=>y<=o.month)),void 0!==(null==t?void 0:t.month)&&(a=a.filter(y=>y>=t.month)),a.forEach(y=>{const l=new Date(`${y}/1/${d} GMT+0000`),s=new Intl.DateTimeFormat(e,Object.assign(Object.assign({},u),{timeZone:"UTC"})).format(l);i.push({text:s,value:y})})}else{const a=o&&o.year===d?o.month:12;for(let l=t&&t.year===d?t.month:1;l<=a;l++){const s=new Date(`${l}/1/${d} GMT+0000`),m=new Intl.DateTimeFormat(e,Object.assign(Object.assign({},u),{timeZone:"UTC"})).format(s);i.push({text:m,value:l})}}return i},B=(e,n,t,o,r,u={day:"numeric"})=>{const{month:d,year:i}=n,a=[],y=c(d,i),l=null!=(null==o?void 0:o.day)&&o.year===i&&o.month===d?o.day:y,s=null!=(null==t?void 0:t.day)&&t.year===i&&t.month===d?t.day:1;if(void 0!==r){let m=r;m=m.filter(D=>D>=s&&D<=l),m.forEach(D=>{const p=new Date(`${d}/${D}/${i} GMT+0000`),w=new Intl.DateTimeFormat(e,Object.assign(Object.assign({},u),{timeZone:"UTC"})).format(p);a.push({text:w,value:D})})}else for(let m=s;m<=l;m++){const D=new Date(`${d}/${m}/${i} GMT+0000`),p=new Intl.DateTimeFormat(e,Object.assign(Object.assign({},u),{timeZone:"UTC"})).format(D);a.push({text:p,value:m})}return a},Ae=(e,n,t,o,r)=>{var u,d;let i=[];if(void 0!==r)i=r,void 0!==(null==o?void 0:o.year)&&(i=i.filter(a=>a<=o.year)),void 0!==(null==t?void 0:t.year)&&(i=i.filter(a=>a>=t.year));else{const{year:a}=n,y=null!==(u=null==o?void 0:o.year)&&void 0!==u?u:a,l=null!==(d=null==t?void 0:t.year)&&void 0!==d?d:a-100;for(let s=y;s>=l;s--)i.push(s)}return i.map(a=>({text:ye(e,{year:a,month:n.month,day:n.day}),value:a}))},J=(e,n)=>e.month===n.month&&e.year===n.year?[e]:[e,...J(z(e),n)],Ce=(e,n,t,o,r,u)=>{let d=[],i=[],a=J(t,o);return u&&(a=a.filter(({month:y})=>u.includes(y))),a.forEach(y=>{const l={month:y.month,day:null,year:y.year},s=B(e,l,t,o,r,{month:"short",day:"numeric",weekday:"short"}),m=[],D=[];s.forEach(p=>{const w=M(Object.assign(Object.assign({},l),{day:p.value}),n);D.push({text:w?fe(e):p.text,value:`${l.year}-${l.month}-${p.value}`}),m.push({month:l.month,year:l.year,day:p.value})}),i=[...i,...m],d=[...d,...D]}),{parts:i,items:d}},Ee=(e,n,t,o,r,u,d)=>{const i=C(e,t),{hours:a,minutes:y,am:l,pm:s}=((e,n="h12",t,o,r,u)=>{const d="h23"===n;let i=d?we:ve,a=Te,y=!0,l=!0;if(r&&(i=i.filter(s=>r.includes(s))),u&&(a=a.filter(s=>u.includes(s))),t)if(M(e,t)){if(void 0!==t.hour&&(i=i.filter(s=>(d?s:"pm"===e.ampm?(s+12)%24:s)>=t.hour),y=t.hour<13),void 0!==t.minute){let s=!1;void 0!==t.hour&&void 0!==e.hour&&e.hour>t.hour&&(s=!0),a=a.filter(m=>!!s||m>=t.minute)}}else _(e,t)&&(i=[],a=[],y=l=!1);return o&&(M(e,o)?(void 0!==o.hour&&(i=i.filter(s=>(d?s:"pm"===e.ampm?(s+12)%24:s)<=o.hour),l=o.hour>=13),void 0!==o.minute&&e.hour===o.hour&&(a=a.filter(s=>s<=o.minute))):g(e,o)&&(i=[],a=[],y=l=!1)),{hours:i,minutes:a,am:y,pm:l}})(n,i?"h23":"h12",o,r,u,d),m=a.map(w=>({text:ie(w,i),value:ne(w,i,n.ampm)})),D=y.map(w=>({text:G(w),value:w})),p=[];return l&&!i&&p.push({text:Y(e,"am"),value:"am"}),s&&!i&&p.push({text:Y(e,"pm"),value:"pm"}),{minutesData:D,hoursData:m,dayPeriodData:p}},be=/^(\d{4}|[+\-]\d{6})(?:-(\d{2})(?:-(\d{2}))?)?(?:T(\d{2}):(\d{2})(?::(\d{2})(?:\.(\d{3}))?)?(?:(Z)|([+\-])(\d{2})(?::(\d{2}))?)?)?$/,ke=/^((\d{2}):(\d{2})(?::(\d{2})(?:\.(\d{3}))?)?(?:(Z)|([+\-])(\d{2})(?::(\d{2}))?)?)?$/,Fe=e=>{if(void 0===e)return;let t,n=e;return"string"==typeof e&&(n=e.replace(/\[|\]|\s/g,"").split(",")),t=Array.isArray(n)?n.map(o=>parseInt(o,10)).filter(isFinite):[n],t},Se=e=>({month:parseInt(e.getAttribute("data-month"),10),day:parseInt(e.getAttribute("data-day"),10),year:parseInt(e.getAttribute("data-year"),10),dayOfWeek:parseInt(e.getAttribute("data-day-of-week"),10)});function b(e){if(Array.isArray(e))return e.map(o=>b(o));let n=null;if(null!=e&&""!==e&&(n=ke.exec(e),n?(n.unshift(void 0,void 0),n[2]=n[3]=void 0):n=be.exec(e)),null===n)return;for(let o=1;o<8;o++)n[o]=void 0!==n[o]?parseInt(n[o],10):void 0;let t=0;return n[9]&&n[10]&&(t=60*parseInt(n[10],10),n[11]&&(t+=parseInt(n[11],10)),"-"===n[9]&&(t*=-1)),{year:n[1],month:n[2],day:n[3],hour:n[4],minute:n[5],tzOffset:t,ampm:n[4]<12?"am":"pm"}}const ze=(e,n,t)=>n&&_(e,n)?n:t&&g(e,t)?t:e,je=e=>e>=12?"pm":"am",Le=(e,n)=>{const{month:t,day:o,year:r,hour:u,minute:d}=b(e),i=null!=r?r:n.year,a=null!=t?t:12;return{month:a,day:null!=o?o:c(a,i),year:i,hour:null!=u?u:23,minute:null!=d?d:59}},Ue=(e,n)=>{const{month:t,day:o,year:r,hour:u,minute:d}=b(e);return{month:null!=t?t:1,day:null!=o?o:1,year:null!=r?r:n.year,hour:null!=u?u:0,minute:null!=d?d:0}}},2854:(U,O,I)=>{I.d(O,{c:()=>_,g:()=>v,h:()=>M,o:()=>C});var A=I(9671);const M=(c,f)=>null!==f.closest(c),_=(c,f)=>"string"==typeof c&&c.length>0?Object.assign({"ion-color":!0,[`ion-color-${c}`]:!0},f):f,v=c=>{const f={};return(c=>void 0!==c?(Array.isArray(c)?c:c.split(" ")).filter(h=>null!=h).map(h=>h.trim()).filter(h=>""!==h):[])(c).forEach(h=>f[h]=!0),f},k=/^[a-z][a-z0-9+\-.]*:/,C=function(){var c=(0,A.Z)(function*(f,h,T,E){if(null!=f&&"#"!==f[0]&&!k.test(f)){const $=document.querySelector("ion-router");if($)return null!=h&&h.preventDefault(),$.push(f,T,E)}return!1});return function(h,T,E,$){return c.apply(this,arguments)}}()}}]);