(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8785],{992:(B,C,E)=>{"use strict";E.d(C,{c:()=>e});var L=E(6895),S=E(2723),t=E(1571);class e{constructor(){}ngOnInit(){}static#e=this.\u0275fac=function(i){return new(i||e)};static#t=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-footer"]],standalone:!0,features:[t.jDz],decls:6,vars:1,consts:[["collapse","fade",3,"translucent"],["href","https://github.com/ourchitecture/ourchitecture.github.com/"],["name","logo-github","slot","start"]],template:function(i,s){1&i&&(t.TgZ(0,"ion-footer",0)(1,"ion-toolbar")(2,"ion-buttons")(3,"ion-button",1),t._UZ(4,"ion-icon",2),t._uU(5," GitHub "),t.qZA()()()()),2&i&&t.Q6J("translucent",!0)},dependencies:[L.ez,S.Pc,S.YG,S.Sm,S.fr,S.gu,S.sr]})}},7447:(B,C,E)=>{"use strict";E.d(C,{G:()=>v});var L=E(9671),S=E(6895),t=E(2723),e=E(4697),r=E(1571),i=E(849);function s(_,a){1&_&&(r.TgZ(0,"ion-toolbar"),r._UZ(1,"ion-skeleton-text",9),r.qZA()),2&_&&(r.xp6(1),r.Q6J("animated",!0))}function o(_,a){if(1&_){const f=r.EpF();r.TgZ(0,"ion-toolbar")(1,"ion-searchbar",10),r.NdJ("keyup",function(p){r.CHM(f);const T=r.oxw();return r.KtG(T.searchKeyUp(p))})("ionChange",function(p){r.CHM(f);const T=r.oxw();return r.KtG(T.search(p))}),r.qZA(),r.TgZ(2,"ion-buttons",3)(3,"ion-button",11),r.NdJ("click",function(){r.CHM(f);const p=r.oxw();return r.KtG(p.submitSearch())}),r._uU(4,"Search"),r.qZA()()()}if(2&_){const f=r.oxw();r.xp6(3),r.Q6J("disabled",0===f.searchQuery.length)}}function u(_,a){1&_&&(r.TgZ(0,"ion-list")(1,"ion-item"),r._UZ(2,"ion-skeleton-text",9),r.qZA(),r.TgZ(3,"ion-item"),r._UZ(4,"ion-skeleton-text",16),r.qZA(),r.TgZ(5,"ion-item"),r._UZ(6,"ion-skeleton-text",17),r.qZA(),r.TgZ(7,"ion-item"),r._UZ(8,"ion-skeleton-text",18),r.qZA()()),2&_&&(r.xp6(2),r.Q6J("animated",!0),r.xp6(2),r.Q6J("animated",!0),r.xp6(2),r.Q6J("animated",!0),r.xp6(2),r.Q6J("animated",!0))}function d(_,a){1&_&&(r.TgZ(0,"ion-item")(1,"ion-label",19),r._uU(2,"No search results found"),r.qZA()())}function l(_,a){if(1&_&&(r.TgZ(0,"ion-item",20)(1,"ion-label",21),r._uU(2),r.qZA()()),2&_){const f=a.$implicit;r.Q6J("href",f.url),r.xp6(2),r.Oqu(f.title)}}function y(_,a){if(1&_){const f=r.EpF();r.TgZ(0,"ion-header")(1,"ion-toolbar")(2,"ion-title"),r._uU(3,"Search Results"),r.qZA(),r.TgZ(4,"ion-buttons",12)(5,"ion-button",13),r.NdJ("click",function(){r.CHM(f);const p=r.oxw();return r.KtG(p.dismissSearchResults())}),r._uU(6,"Close"),r.qZA()()()(),r.TgZ(7,"ion-content",14),r.YNc(8,u,9,4,"ion-list",7),r.TgZ(9,"ion-list"),r.YNc(10,d,3,0,"ion-item",7),r.YNc(11,l,3,2,"ion-item",15),r.qZA()()}if(2&_){const f=r.oxw();r.xp6(8),r.Q6J("ngIf",f.isSearchResultsLoading),r.xp6(2),r.Q6J("ngIf",!f.isSearchResultsLoading&&0===f.searchResults.length),r.xp6(1),r.Q6J("ngForOf",f.searchResults)("ngForTrackBy",f.getSearchResultTracker)}}const m="app_dark-mode";class v{constructor(a){this.storage=a,this.wasDarkModeToggleEnabled=!0,this.isDarkModeToggleEnabled=!0,this.logo="assets/icons/favicon-light.svg",this.searchDocuments=[],this.searchIndex={},this.searchQuery="",this.isSearchResultsVisible=!1,this.isSearchResultsLoading=!1,this.searchResults=[]}ngOnInit(){var a=this;return(0,L.Z)(function*(){yield a.storage?.create(),a.wasDarkModeToggleEnabled=yield a.getIsDarkModeEnabledFromStorage(),a.isDarkModeToggleEnabled=a.wasDarkModeToggleEnabled,a.setLogo(a.isDarkModeToggleEnabled);const f=yield fetch("/api/data/search-index.json");if(f.ok){const c=yield f.json();a.searchDocuments=c.documents,a.searchIndex=e.Index.load(c.index)}else{const c=yield f.text();console.error("Failed to retrieve search index",f.status,f.statusText,c)}})()}toggleDarkMode(){var a=this;return(0,L.Z)(function*(){!a.storage||a.isDarkModeToggleEnabled==a.wasDarkModeToggleEnabled&&(a.wasDarkModeToggleEnabled=!a.isDarkModeToggleEnabled,yield a.storage.set(m,a.wasDarkModeToggleEnabled),console.log("Toggling dark mode setting..."),document.body.classList.toggle("dark",a.wasDarkModeToggleEnabled),a.isDarkModeToggleEnabled=a.wasDarkModeToggleEnabled,a.setLogo(a.isDarkModeToggleEnabled))})()}searchKeyUp(a){13===a.keyCode&&this.submitSearch()}loadSearchResults(){var a=this;return(0,L.Z)(function*(){try{console.debug("Searching for",a.searchQuery);const f=a.searchIndex.search(a.searchQuery);a.searchResults=f.slice(0,15).map(c=>{const p=a.searchDocuments.find(T=>T.id===c.ref);return p||console.error("Failed to find a matching document for the search index result",c.ref),{id:c.ref,url:p?.url,title:p?.title}}),console.debug("search results",a.searchResults)}catch(f){console.error("Unexpected search error",f)}finally{a.isSearchResultsLoading=!1}})()}search(a){var f=this;return(0,L.Z)(function*(){f.searchQuery=a.target.value.trim()})()}submitSearch(){var a=this;return(0,L.Z)(function*(){a.searchQuery.length>0&&(a.searchResults=[],a.isSearchResultsLoading=!0,a.isSearchResultsVisible=!0,yield a.loadSearchResults())})()}dismissSearchResults(){this.searchResults=[],this.isSearchResultsLoading=!1,this.isSearchResultsVisible=!1}getSearchResultTracker(a,f){return f.id}getIsDarkModeEnabledFromStorage(){var a=this;return(0,L.Z)(function*(){const f=yield a.storage?.get(m);let c=!0;return c=null==f?!!window.matchMedia("(prefers-color-scheme: dark)"):!!f,document.body.classList.toggle("dark",c),c})()}setLogo(a){this.logo=a?"assets/icons/favicon-dark.svg":"assets/icons/favicon-light.svg"}static#e=this.\u0275fac=function(f){return new(f||v)(r.Y36(i.K))};static#t=this.\u0275cmp=r.Xpm({type:v,selectors:[["app-header"]],inputs:{title:"title"},standalone:!0,features:[r.jDz],decls:16,vars:5,consts:[["slot","start"],["href","/home"],[3,"src"],["slot","end"],["title","Toggle display between light and dark mode",3,"click"],["name","contrast-outline","slot","start"],[1,"ion-hide-sm-down"],[4,"ngIf"],[3,"isOpen","didDismiss"],[2,"width","100%","height","100%",3,"animated"],["show-clear-button","focus",3,"keyup","ionChange"],[3,"disabled","click"],["slot","primary"],[3,"click"],[1,"ion-padding"],[3,"href",4,"ngFor","ngForOf","ngForTrackBy"],[2,"width","90%","height","100%",3,"animated"],[2,"width","65%","height","100%",3,"animated"],[2,"width","30%","height","100%",3,"animated"],["color","warning",1,"ion-text-wrap"],[3,"href"],[1,"ion-text-wrap"]],template:function(f,c){1&f&&(r.TgZ(0,"ion-toolbar")(1,"ion-buttons",0),r._UZ(2,"ion-back-button"),r.qZA(),r.TgZ(3,"ion-title")(4,"a",1),r._UZ(5,"ion-icon",2),r.qZA(),r._uU(6),r.qZA(),r.TgZ(7,"ion-buttons",3)(8,"ion-button",4),r.NdJ("click",function(){return c.toggleDarkMode()}),r._UZ(9,"ion-icon",5),r.TgZ(10,"ion-text",6),r._uU(11,"Display Mode"),r.qZA()()()(),r.YNc(12,s,2,1,"ion-toolbar",7),r.YNc(13,o,5,1,"ion-toolbar",7),r.TgZ(14,"ion-modal",8),r.NdJ("didDismiss",function(){return c.dismissSearchResults()}),r.YNc(15,y,12,4,"ng-template"),r.qZA()),2&f&&(r.xp6(5),r.Q6J("src",c.logo),r.xp6(1),r.hij(" ",c.title,""),r.xp6(6),r.Q6J("ngIf",0===c.searchDocuments.length),r.xp6(1),r.Q6J("ngIf",c.searchDocuments.length>0),r.xp6(1),r.Q6J("isOpen",c.isSearchResultsVisible))},dependencies:[S.ez,S.sg,S.O5,t.Pc,t.oU,t.YG,t.Sm,t.W2,t.Gu,t.gu,t.Ie,t.Q$,t.q_,t.VI,t.CK,t.yW,t.wd,t.sr,t.ki,t.j9,t.cs]})}},4697:(B,C,E)=>{var L,S;!function(){var e,t=function(e){var n=new t.Builder;return n.pipeline.add(t.trimmer,t.stopWordFilter,t.stemmer),n.searchPipeline.add(t.stemmer),e.call(n,n),n.build()};t.version="2.3.9",t.utils={},t.utils.warn=(e=this,function(n){e.console&&console.warn&&console.warn(n)}),t.utils.asString=function(e){return null==e?"":e.toString()},t.utils.clone=function(e){if(null==e)return e;for(var n=Object.create(null),r=Object.keys(e),i=0;i<r.length;i++){var s=r[i],o=e[s];if(Array.isArray(o))n[s]=o.slice();else{if("string"!=typeof o&&"number"!=typeof o&&"boolean"!=typeof o)throw new TypeError("clone is not deep and does not support nested objects");n[s]=o}}return n},t.FieldRef=function(e,n,r){this.docRef=e,this.fieldName=n,this._stringValue=r},t.FieldRef.joiner="/",t.FieldRef.fromString=function(e){var n=e.indexOf(t.FieldRef.joiner);if(-1===n)throw"malformed field ref string";var r=e.slice(0,n),i=e.slice(n+1);return new t.FieldRef(i,r,e)},t.FieldRef.prototype.toString=function(){return null==this._stringValue&&(this._stringValue=this.fieldName+t.FieldRef.joiner+this.docRef),this._stringValue},t.Set=function(e){if(this.elements=Object.create(null),e){this.length=e.length;for(var n=0;n<this.length;n++)this.elements[e[n]]=!0}else this.length=0},t.Set.complete={intersect:function(e){return e},union:function(){return this},contains:function(){return!0}},t.Set.empty={intersect:function(){return this},union:function(e){return e},contains:function(){return!1}},t.Set.prototype.contains=function(e){return!!this.elements[e]},t.Set.prototype.intersect=function(e){var n,r,i,s=[];if(e===t.Set.complete)return this;if(e===t.Set.empty)return e;this.length<e.length?(n=this,r=e):(n=e,r=this),i=Object.keys(n.elements);for(var o=0;o<i.length;o++){var u=i[o];u in r.elements&&s.push(u)}return new t.Set(s)},t.Set.prototype.union=function(e){return e===t.Set.complete?t.Set.complete:e===t.Set.empty?this:new t.Set(Object.keys(this.elements).concat(Object.keys(e.elements)))},t.idf=function(e,n){var r=0;for(var i in e)"_index"!=i&&(r+=Object.keys(e[i]).length);return Math.log(1+Math.abs((n-r+.5)/(r+.5)))},t.Token=function(e,n){this.str=e||"",this.metadata=n||{}},t.Token.prototype.toString=function(){return this.str},t.Token.prototype.update=function(e){return this.str=e(this.str,this.metadata),this},t.Token.prototype.clone=function(e){return new t.Token((e=e||function(n){return n})(this.str,this.metadata),this.metadata)},t.tokenizer=function(e,n){if(null==e||null==e)return[];if(Array.isArray(e))return e.map(function(m){return new t.Token(t.utils.asString(m).toLowerCase(),t.utils.clone(n))});for(var r=e.toString().toLowerCase(),i=r.length,s=[],o=0,u=0;o<=i;o++){var l=o-u;if(r.charAt(o).match(t.tokenizer.separator)||o==i){if(l>0){var y=t.utils.clone(n)||{};y.position=[u,l],y.index=s.length,s.push(new t.Token(r.slice(u,o),y))}u=o+1}}return s},t.tokenizer.separator=/[\s\-]+/,t.Pipeline=function(){this._stack=[]},t.Pipeline.registeredFunctions=Object.create(null),t.Pipeline.registerFunction=function(e,n){n in this.registeredFunctions&&t.utils.warn("Overwriting existing registered function: "+n),e.label=n,t.Pipeline.registeredFunctions[e.label]=e},t.Pipeline.warnIfFunctionNotRegistered=function(e){e.label&&e.label in this.registeredFunctions||t.utils.warn("Function is not registered with pipeline. This may cause problems when serialising the index.\n",e)},t.Pipeline.load=function(e){var n=new t.Pipeline;return e.forEach(function(r){var i=t.Pipeline.registeredFunctions[r];if(!i)throw new Error("Cannot load unregistered function: "+r);n.add(i)}),n},t.Pipeline.prototype.add=function(){var e=Array.prototype.slice.call(arguments);e.forEach(function(n){t.Pipeline.warnIfFunctionNotRegistered(n),this._stack.push(n)},this)},t.Pipeline.prototype.after=function(e,n){t.Pipeline.warnIfFunctionNotRegistered(n);var r=this._stack.indexOf(e);if(-1==r)throw new Error("Cannot find existingFn");this._stack.splice(r+=1,0,n)},t.Pipeline.prototype.before=function(e,n){t.Pipeline.warnIfFunctionNotRegistered(n);var r=this._stack.indexOf(e);if(-1==r)throw new Error("Cannot find existingFn");this._stack.splice(r,0,n)},t.Pipeline.prototype.remove=function(e){var n=this._stack.indexOf(e);-1!=n&&this._stack.splice(n,1)},t.Pipeline.prototype.run=function(e){for(var n=this._stack.length,r=0;r<n;r++){for(var i=this._stack[r],s=[],o=0;o<e.length;o++){var u=i(e[o],o,e);if(null!=u&&""!==u)if(Array.isArray(u))for(var d=0;d<u.length;d++)s.push(u[d]);else s.push(u)}e=s}return e},t.Pipeline.prototype.runString=function(e,n){var r=new t.Token(e,n);return this.run([r]).map(function(i){return i.toString()})},t.Pipeline.prototype.reset=function(){this._stack=[]},t.Pipeline.prototype.toJSON=function(){return this._stack.map(function(e){return t.Pipeline.warnIfFunctionNotRegistered(e),e.label})},t.Vector=function(e){this._magnitude=0,this.elements=e||[]},t.Vector.prototype.positionForIndex=function(e){if(0==this.elements.length)return 0;for(var n=0,r=this.elements.length/2,i=r-n,s=Math.floor(i/2),o=this.elements[2*s];i>1&&(o<e&&(n=s),o>e&&(r=s),o!=e);)i=r-n,s=n+Math.floor(i/2),o=this.elements[2*s];return o==e||o>e?2*s:o<e?2*(s+1):void 0},t.Vector.prototype.insert=function(e,n){this.upsert(e,n,function(){throw"duplicate index"})},t.Vector.prototype.upsert=function(e,n,r){this._magnitude=0;var i=this.positionForIndex(e);this.elements[i]==e?this.elements[i+1]=r(this.elements[i+1],n):this.elements.splice(i,0,e,n)},t.Vector.prototype.magnitude=function(){if(this._magnitude)return this._magnitude;for(var e=0,n=this.elements.length,r=1;r<n;r+=2){var i=this.elements[r];e+=i*i}return this._magnitude=Math.sqrt(e)},t.Vector.prototype.dot=function(e){for(var n=0,r=this.elements,i=e.elements,s=r.length,o=i.length,u=0,d=0,l=0,y=0;l<s&&y<o;)(u=r[l])<(d=i[y])?l+=2:u>d?y+=2:u==d&&(n+=r[l+1]*i[y+1],l+=2,y+=2);return n},t.Vector.prototype.similarity=function(e){return this.dot(e)/this.magnitude()||0},t.Vector.prototype.toArray=function(){for(var e=new Array(this.elements.length/2),n=1,r=0;n<this.elements.length;n+=2,r++)e[r]=this.elements[n];return e},t.Vector.prototype.toJSON=function(){return this.elements},t.stemmer=function(){var e={ational:"ate",tional:"tion",enci:"ence",anci:"ance",izer:"ize",bli:"ble",alli:"al",entli:"ent",eli:"e",ousli:"ous",ization:"ize",ation:"ate",ator:"ate",alism:"al",iveness:"ive",fulness:"ful",ousness:"ous",aliti:"al",iviti:"ive",biliti:"ble",logi:"log"},n={icate:"ic",ative:"",alize:"al",iciti:"ic",ical:"ic",ful:"",ness:""},i="[aeiouy]",s="[^aeiou][^aeiouy]*",m=new RegExp("^([^aeiou][^aeiouy]*)?[aeiouy][aeiou]*[^aeiou][^aeiouy]*"),v=new RegExp("^([^aeiou][^aeiouy]*)?[aeiouy][aeiou]*[^aeiou][^aeiouy]*[aeiouy][aeiou]*[^aeiou][^aeiouy]*"),_=new RegExp("^([^aeiou][^aeiouy]*)?[aeiouy][aeiou]*[^aeiou][^aeiouy]*([aeiouy][aeiou]*)?$"),a=new RegExp("^([^aeiou][^aeiouy]*)?[aeiouy]"),f=/^(.+?)(ss|i)es$/,c=/^(.+?)([^s])s$/,p=/^(.+?)eed$/,T=/^(.+?)(ed|ing)$/,k=/.$/,w=/(at|bl|iz)$/,D=new RegExp("([^aeiouylsz])\\1$"),j=new RegExp("^"+s+i+"[^aeiouwxy]$"),M=/^(.+?[^aeiou])y$/,V=/^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$/,U=/^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/,Z=/^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$/,z=/^(.+?)(s|t)(ion)$/,O=/^(.+?)e$/,W=/ll$/,q=new RegExp("^"+s+i+"[^aeiouwxy]$"),N=function(h){var x,R,P,g,b,I,A;if(h.length<3)return h;if("y"==(P=h.substr(0,1))&&(h=P.toUpperCase()+h.substr(1)),b=c,(g=f).test(h)?h=h.replace(g,"$1$2"):b.test(h)&&(h=h.replace(b,"$1$2")),b=T,(g=p).test(h)){var Q=g.exec(h);(g=m).test(Q[1])&&(h=h.replace(g=k,""))}else if(b.test(h)){Q=b.exec(h);(b=a).test(x=Q[1])&&(I=D,A=j,(b=w).test(h=x)?h+="e":I.test(h)?h=h.replace(g=k,""):A.test(h)&&(h+="e"))}return(g=M).test(h)&&(h=(x=(Q=g.exec(h))[1])+"i"),(g=V).test(h)&&(R=(Q=g.exec(h))[2],(g=m).test(x=Q[1])&&(h=x+e[R])),(g=U).test(h)&&(R=(Q=g.exec(h))[2],(g=m).test(x=Q[1])&&(h=x+n[R])),b=z,(g=Z).test(h)?(Q=g.exec(h),(g=v).test(x=Q[1])&&(h=x)):b.test(h)&&(Q=b.exec(h),(b=v).test(x=Q[1]+Q[2])&&(h=x)),(g=O).test(h)&&(Q=g.exec(h),b=_,I=q,((g=v).test(x=Q[1])||b.test(x)&&!I.test(x))&&(h=x)),b=v,(g=W).test(h)&&b.test(h)&&(h=h.replace(g=k,"")),"y"==P&&(h=P.toLowerCase()+h.substr(1)),h};return function(F){return F.update(N)}}(),t.Pipeline.registerFunction(t.stemmer,"stemmer"),t.generateStopWordFilter=function(e){var n=e.reduce(function(r,i){return r[i]=i,r},{});return function(r){if(r&&n[r.toString()]!==r.toString())return r}},t.stopWordFilter=t.generateStopWordFilter(["a","able","about","across","after","all","almost","also","am","among","an","and","any","are","as","at","be","because","been","but","by","can","cannot","could","dear","did","do","does","either","else","ever","every","for","from","get","got","had","has","have","he","her","hers","him","his","how","however","i","if","in","into","is","it","its","just","least","let","like","likely","may","me","might","most","must","my","neither","no","nor","not","of","off","often","on","only","or","other","our","own","rather","said","say","says","she","should","since","so","some","than","that","the","their","them","then","there","these","they","this","tis","to","too","twas","us","wants","was","we","were","what","when","where","which","while","who","whom","why","will","with","would","yet","you","your"]),t.Pipeline.registerFunction(t.stopWordFilter,"stopWordFilter"),t.trimmer=function(e){return e.update(function(n){return n.replace(/^\W+/,"").replace(/\W+$/,"")})},t.Pipeline.registerFunction(t.trimmer,"trimmer"),t.TokenSet=function(){this.final=!1,this.edges={},this.id=t.TokenSet._nextId,t.TokenSet._nextId+=1},t.TokenSet._nextId=1,t.TokenSet.fromArray=function(e){for(var n=new t.TokenSet.Builder,r=0,i=e.length;r<i;r++)n.insert(e[r]);return n.finish(),n.root},t.TokenSet.fromClause=function(e){return"editDistance"in e?t.TokenSet.fromFuzzyString(e.term,e.editDistance):t.TokenSet.fromString(e.term)},t.TokenSet.fromFuzzyString=function(e,n){for(var r=new t.TokenSet,i=[{node:r,editsRemaining:n,str:e}];i.length;){var s=i.pop();if(s.str.length>0){var u,o=s.str.charAt(0);o in s.node.edges?u=s.node.edges[o]:(u=new t.TokenSet,s.node.edges[o]=u),1==s.str.length&&(u.final=!0),i.push({node:u,editsRemaining:s.editsRemaining,str:s.str.slice(1)})}if(0!=s.editsRemaining){if("*"in s.node.edges)var d=s.node.edges["*"];else d=new t.TokenSet,s.node.edges["*"]=d;if(0==s.str.length&&(d.final=!0),i.push({node:d,editsRemaining:s.editsRemaining-1,str:s.str}),s.str.length>1&&i.push({node:s.node,editsRemaining:s.editsRemaining-1,str:s.str.slice(1)}),1==s.str.length&&(s.node.final=!0),s.str.length>=1){if("*"in s.node.edges)var l=s.node.edges["*"];else l=new t.TokenSet,s.node.edges["*"]=l;1==s.str.length&&(l.final=!0),i.push({node:l,editsRemaining:s.editsRemaining-1,str:s.str.slice(1)})}if(s.str.length>1){var v,y=s.str.charAt(0),m=s.str.charAt(1);m in s.node.edges?v=s.node.edges[m]:(v=new t.TokenSet,s.node.edges[m]=v),1==s.str.length&&(v.final=!0),i.push({node:v,editsRemaining:s.editsRemaining-1,str:y+s.str.slice(2)})}}}return r},t.TokenSet.fromString=function(e){for(var n=new t.TokenSet,r=n,i=0,s=e.length;i<s;i++){var o=e[i],u=i==s-1;if("*"==o)n.edges[o]=n,n.final=u;else{var d=new t.TokenSet;d.final=u,n.edges[o]=d,n=d}}return r},t.TokenSet.prototype.toArray=function(){for(var e=[],n=[{prefix:"",node:this}];n.length;){var r=n.pop(),i=Object.keys(r.node.edges),s=i.length;r.node.final&&(r.prefix.charAt(0),e.push(r.prefix));for(var o=0;o<s;o++){var u=i[o];n.push({prefix:r.prefix.concat(u),node:r.node.edges[u]})}}return e},t.TokenSet.prototype.toString=function(){if(this._str)return this._str;for(var e=this.final?"1":"0",n=Object.keys(this.edges).sort(),r=n.length,i=0;i<r;i++){var s=n[i];e=e+s+this.edges[s].id}return e},t.TokenSet.prototype.intersect=function(e){for(var n=new t.TokenSet,r=void 0,i=[{qNode:e,output:n,node:this}];i.length;){r=i.pop();for(var s=Object.keys(r.qNode.edges),o=s.length,u=Object.keys(r.node.edges),d=u.length,l=0;l<o;l++)for(var y=s[l],m=0;m<d;m++){var v=u[m];if(v==y||"*"==y){var _=r.node.edges[v],a=r.qNode.edges[y],f=_.final&&a.final,c=void 0;v in r.output.edges?(c=r.output.edges[v]).final=c.final||f:((c=new t.TokenSet).final=f,r.output.edges[v]=c),i.push({qNode:a,output:c,node:_})}}}return n},t.TokenSet.Builder=function(){this.previousWord="",this.root=new t.TokenSet,this.uncheckedNodes=[],this.minimizedNodes={}},t.TokenSet.Builder.prototype.insert=function(e){var n,r=0;if(e<this.previousWord)throw new Error("Out of order word insertion");for(var i=0;i<e.length&&i<this.previousWord.length&&e[i]==this.previousWord[i];i++)r++;for(this.minimize(r),n=0==this.uncheckedNodes.length?this.root:this.uncheckedNodes[this.uncheckedNodes.length-1].child,i=r;i<e.length;i++){var s=new t.TokenSet,o=e[i];n.edges[o]=s,this.uncheckedNodes.push({parent:n,char:o,child:s}),n=s}n.final=!0,this.previousWord=e},t.TokenSet.Builder.prototype.finish=function(){this.minimize(0)},t.TokenSet.Builder.prototype.minimize=function(e){for(var n=this.uncheckedNodes.length-1;n>=e;n--){var r=this.uncheckedNodes[n],i=r.child.toString();i in this.minimizedNodes?r.parent.edges[r.char]=this.minimizedNodes[i]:(r.child._str=i,this.minimizedNodes[i]=r.child),this.uncheckedNodes.pop()}},t.Index=function(e){this.invertedIndex=e.invertedIndex,this.fieldVectors=e.fieldVectors,this.tokenSet=e.tokenSet,this.fields=e.fields,this.pipeline=e.pipeline},t.Index.prototype.search=function(e){return this.query(function(n){new t.QueryParser(e,n).parse()})},t.Index.prototype.query=function(e){for(var n=new t.Query(this.fields),r=Object.create(null),i=Object.create(null),s=Object.create(null),o=Object.create(null),u=Object.create(null),d=0;d<this.fields.length;d++)i[this.fields[d]]=new t.Vector;for(e.call(n,n),d=0;d<n.clauses.length;d++){var y,l=n.clauses[d],m=t.Set.empty;y=l.usePipeline?this.pipeline.runString(l.term,{fields:l.fields}):[l.term];for(var v=0;v<y.length;v++){l.term=y[v];var a=t.TokenSet.fromClause(l),f=this.tokenSet.intersect(a).toArray();if(0===f.length&&l.presence===t.Query.presence.REQUIRED){for(var c=0;c<l.fields.length;c++)o[p=l.fields[c]]=t.Set.empty;break}for(var T=0;T<f.length;T++){var k=f[T],w=this.invertedIndex[k],D=w._index;for(c=0;c<l.fields.length;c++){var j=w[p=l.fields[c]],M=Object.keys(j),V=k+"/"+p,U=new t.Set(M);if(l.presence==t.Query.presence.REQUIRED&&(m=m.union(U),void 0===o[p]&&(o[p]=t.Set.complete)),l.presence!=t.Query.presence.PROHIBITED){if(i[p].upsert(D,l.boost,function(H,K){return H+K}),!s[V]){for(var Z=0;Z<M.length;Z++){var q,z=M[Z],O=new t.FieldRef(z,p),W=j[z];void 0===(q=r[O])?r[O]=new t.MatchData(k,p,W):q.add(k,p,W)}s[V]=!0}}else void 0===u[p]&&(u[p]=t.Set.empty),u[p]=u[p].union(U)}}}if(l.presence===t.Query.presence.REQUIRED)for(c=0;c<l.fields.length;c++)o[p=l.fields[c]]=o[p].intersect(m)}var N=t.Set.complete,F=t.Set.empty;for(d=0;d<this.fields.length;d++){var p;o[p=this.fields[d]]&&(N=N.intersect(o[p])),u[p]&&(F=F.union(u[p]))}var h=Object.keys(r),x=[],R=Object.create(null);if(n.isNegated())for(h=Object.keys(this.fieldVectors),d=0;d<h.length;d++){var P=t.FieldRef.fromString(O=h[d]);r[O]=new t.MatchData}for(d=0;d<h.length;d++){var g=(P=t.FieldRef.fromString(h[d])).docRef;if(N.contains(g)&&!F.contains(g)){var A,I=i[P.fieldName].similarity(this.fieldVectors[P]);if(void 0!==(A=R[g]))A.score+=I,A.matchData.combine(r[P]);else{var Q={ref:g,score:I,matchData:r[P]};R[g]=Q,x.push(Q)}}}return x.sort(function(J,$){return $.score-J.score})},t.Index.prototype.toJSON=function(){var e=Object.keys(this.invertedIndex).sort().map(function(r){return[r,this.invertedIndex[r]]},this),n=Object.keys(this.fieldVectors).map(function(r){return[r,this.fieldVectors[r].toJSON()]},this);return{version:t.version,fields:this.fields,fieldVectors:n,invertedIndex:e,pipeline:this.pipeline.toJSON()}},t.Index.load=function(e){var n={},r={},i=e.fieldVectors,s=Object.create(null),o=e.invertedIndex,u=new t.TokenSet.Builder,d=t.Pipeline.load(e.pipeline);e.version!=t.version&&t.utils.warn("Version mismatch when loading serialised index. Current version of lunr '"+t.version+"' does not match serialized index '"+e.version+"'");for(var l=0;l<i.length;l++)r[(y=i[l])[0]]=new t.Vector(y[1]);for(l=0;l<o.length;l++){var y,_=(y=o[l])[0],a=y[1];u.insert(_),s[_]=a}return u.finish(),n.fields=e.fields,n.fieldVectors=r,n.invertedIndex=s,n.tokenSet=u.root,n.pipeline=d,new t.Index(n)},t.Builder=function(){this._ref="id",this._fields=Object.create(null),this._documents=Object.create(null),this.invertedIndex=Object.create(null),this.fieldTermFrequencies={},this.fieldLengths={},this.tokenizer=t.tokenizer,this.pipeline=new t.Pipeline,this.searchPipeline=new t.Pipeline,this.documentCount=0,this._b=.75,this._k1=1.2,this.termIndex=0,this.metadataWhitelist=[]},t.Builder.prototype.ref=function(e){this._ref=e},t.Builder.prototype.field=function(e,n){if(/\//.test(e))throw new RangeError("Field '"+e+"' contains illegal character '/'");this._fields[e]=n||{}},t.Builder.prototype.b=function(e){this._b=e<0?0:e>1?1:e},t.Builder.prototype.k1=function(e){this._k1=e},t.Builder.prototype.add=function(e,n){var r=e[this._ref],i=Object.keys(this._fields);this._documents[r]=n||{},this.documentCount+=1;for(var s=0;s<i.length;s++){var o=i[s],u=this._fields[o].extractor,d=u?u(e):e[o],l=this.tokenizer(d,{fields:[o]}),y=this.pipeline.run(l),m=new t.FieldRef(r,o),v=Object.create(null);this.fieldTermFrequencies[m]=v,this.fieldLengths[m]=0,this.fieldLengths[m]+=y.length;for(var _=0;_<y.length;_++){var a=y[_];if(null==v[a]&&(v[a]=0),v[a]+=1,null==this.invertedIndex[a]){var f=Object.create(null);f._index=this.termIndex,this.termIndex+=1;for(var c=0;c<i.length;c++)f[i[c]]=Object.create(null);this.invertedIndex[a]=f}null==this.invertedIndex[a][o][r]&&(this.invertedIndex[a][o][r]=Object.create(null));for(var p=0;p<this.metadataWhitelist.length;p++){var T=this.metadataWhitelist[p],k=a.metadata[T];null==this.invertedIndex[a][o][r][T]&&(this.invertedIndex[a][o][r][T]=[]),this.invertedIndex[a][o][r][T].push(k)}}}},t.Builder.prototype.calculateAverageFieldLengths=function(){for(var e=Object.keys(this.fieldLengths),n=e.length,r={},i={},s=0;s<n;s++){var o=t.FieldRef.fromString(e[s]),u=o.fieldName;i[u]||(i[u]=0),i[u]+=1,r[u]||(r[u]=0),r[u]+=this.fieldLengths[o]}var d=Object.keys(this._fields);for(s=0;s<d.length;s++){var l=d[s];r[l]=r[l]/i[l]}this.averageFieldLength=r},t.Builder.prototype.createFieldVectors=function(){for(var e={},n=Object.keys(this.fieldTermFrequencies),r=n.length,i=Object.create(null),s=0;s<r;s++){for(var o=t.FieldRef.fromString(n[s]),u=o.fieldName,d=this.fieldLengths[o],l=new t.Vector,y=this.fieldTermFrequencies[o],m=Object.keys(y),v=m.length,_=this._fields[u].boost||1,a=this._documents[o.docRef].boost||1,f=0;f<v;f++){var k,w,D,c=m[f],p=y[c],T=this.invertedIndex[c]._index;void 0===i[c]?(k=t.idf(this.invertedIndex[c],this.documentCount),i[c]=k):k=i[c],w=k*((this._k1+1)*p)/(this._k1*(1-this._b+this._b*(d/this.averageFieldLength[u]))+p),w*=_,w*=a,D=Math.round(1e3*w)/1e3,l.insert(T,D)}e[o]=l}this.fieldVectors=e},t.Builder.prototype.createTokenSet=function(){this.tokenSet=t.TokenSet.fromArray(Object.keys(this.invertedIndex).sort())},t.Builder.prototype.build=function(){return this.calculateAverageFieldLengths(),this.createFieldVectors(),this.createTokenSet(),new t.Index({invertedIndex:this.invertedIndex,fieldVectors:this.fieldVectors,tokenSet:this.tokenSet,fields:Object.keys(this._fields),pipeline:this.searchPipeline})},t.Builder.prototype.use=function(e){var n=Array.prototype.slice.call(arguments,1);n.unshift(this),e.apply(this,n)},t.MatchData=function(e,n,r){for(var i=Object.create(null),s=Object.keys(r||{}),o=0;o<s.length;o++){var u=s[o];i[u]=r[u].slice()}this.metadata=Object.create(null),void 0!==e&&(this.metadata[e]=Object.create(null),this.metadata[e][n]=i)},t.MatchData.prototype.combine=function(e){for(var n=Object.keys(e.metadata),r=0;r<n.length;r++){var i=n[r],s=Object.keys(e.metadata[i]);null==this.metadata[i]&&(this.metadata[i]=Object.create(null));for(var o=0;o<s.length;o++){var u=s[o],d=Object.keys(e.metadata[i][u]);null==this.metadata[i][u]&&(this.metadata[i][u]=Object.create(null));for(var l=0;l<d.length;l++){var y=d[l];this.metadata[i][u][y]=null==this.metadata[i][u][y]?e.metadata[i][u][y]:this.metadata[i][u][y].concat(e.metadata[i][u][y])}}}},t.MatchData.prototype.add=function(e,n,r){if(!(e in this.metadata))return this.metadata[e]=Object.create(null),void(this.metadata[e][n]=r);if(n in this.metadata[e])for(var i=Object.keys(r),s=0;s<i.length;s++){var o=i[s];this.metadata[e][n][o]=o in this.metadata[e][n]?this.metadata[e][n][o].concat(r[o]):r[o]}else this.metadata[e][n]=r},t.Query=function(e){this.clauses=[],this.allFields=e},t.Query.wildcard=new String("*"),t.Query.wildcard.NONE=0,t.Query.wildcard.LEADING=1,t.Query.wildcard.TRAILING=2,t.Query.presence={OPTIONAL:1,REQUIRED:2,PROHIBITED:3},t.Query.prototype.clause=function(e){return"fields"in e||(e.fields=this.allFields),"boost"in e||(e.boost=1),"usePipeline"in e||(e.usePipeline=!0),"wildcard"in e||(e.wildcard=t.Query.wildcard.NONE),e.wildcard&t.Query.wildcard.LEADING&&e.term.charAt(0)!=t.Query.wildcard&&(e.term="*"+e.term),e.wildcard&t.Query.wildcard.TRAILING&&e.term.slice(-1)!=t.Query.wildcard&&(e.term=e.term+"*"),"presence"in e||(e.presence=t.Query.presence.OPTIONAL),this.clauses.push(e),this},t.Query.prototype.isNegated=function(){for(var e=0;e<this.clauses.length;e++)if(this.clauses[e].presence!=t.Query.presence.PROHIBITED)return!1;return!0},t.Query.prototype.term=function(e,n){if(Array.isArray(e))return e.forEach(function(i){this.term(i,t.utils.clone(n))},this),this;var r=n||{};return r.term=e.toString(),this.clause(r),this},t.QueryParseError=function(e,n,r){this.name="QueryParseError",this.message=e,this.start=n,this.end=r},t.QueryParseError.prototype=new Error,t.QueryLexer=function(e){this.lexemes=[],this.str=e,this.length=e.length,this.pos=0,this.start=0,this.escapeCharPositions=[]},t.QueryLexer.prototype.run=function(){for(var e=t.QueryLexer.lexText;e;)e=e(this)},t.QueryLexer.prototype.sliceString=function(){for(var e=[],n=this.start,r=this.pos,i=0;i<this.escapeCharPositions.length;i++)e.push(this.str.slice(n,r=this.escapeCharPositions[i])),n=r+1;return e.push(this.str.slice(n,this.pos)),this.escapeCharPositions.length=0,e.join("")},t.QueryLexer.prototype.emit=function(e){this.lexemes.push({type:e,str:this.sliceString(),start:this.start,end:this.pos}),this.start=this.pos},t.QueryLexer.prototype.escapeCharacter=function(){this.escapeCharPositions.push(this.pos-1),this.pos+=1},t.QueryLexer.prototype.next=function(){if(this.pos>=this.length)return t.QueryLexer.EOS;var e=this.str.charAt(this.pos);return this.pos+=1,e},t.QueryLexer.prototype.width=function(){return this.pos-this.start},t.QueryLexer.prototype.ignore=function(){this.start==this.pos&&(this.pos+=1),this.start=this.pos},t.QueryLexer.prototype.backup=function(){this.pos-=1},t.QueryLexer.prototype.acceptDigitRun=function(){var e,n;do{n=(e=this.next()).charCodeAt(0)}while(n>47&&n<58);e!=t.QueryLexer.EOS&&this.backup()},t.QueryLexer.prototype.more=function(){return this.pos<this.length},t.QueryLexer.EOS="EOS",t.QueryLexer.FIELD="FIELD",t.QueryLexer.TERM="TERM",t.QueryLexer.EDIT_DISTANCE="EDIT_DISTANCE",t.QueryLexer.BOOST="BOOST",t.QueryLexer.PRESENCE="PRESENCE",t.QueryLexer.lexField=function(e){return e.backup(),e.emit(t.QueryLexer.FIELD),e.ignore(),t.QueryLexer.lexText},t.QueryLexer.lexTerm=function(e){if(e.width()>1&&(e.backup(),e.emit(t.QueryLexer.TERM)),e.ignore(),e.more())return t.QueryLexer.lexText},t.QueryLexer.lexEditDistance=function(e){return e.ignore(),e.acceptDigitRun(),e.emit(t.QueryLexer.EDIT_DISTANCE),t.QueryLexer.lexText},t.QueryLexer.lexBoost=function(e){return e.ignore(),e.acceptDigitRun(),e.emit(t.QueryLexer.BOOST),t.QueryLexer.lexText},t.QueryLexer.lexEOS=function(e){e.width()>0&&e.emit(t.QueryLexer.TERM)},t.QueryLexer.termSeparator=t.tokenizer.separator,t.QueryLexer.lexText=function(e){for(;;){var n=e.next();if(n==t.QueryLexer.EOS)return t.QueryLexer.lexEOS;if(92!=n.charCodeAt(0)){if(":"==n)return t.QueryLexer.lexField;if("~"==n)return e.backup(),e.width()>0&&e.emit(t.QueryLexer.TERM),t.QueryLexer.lexEditDistance;if("^"==n)return e.backup(),e.width()>0&&e.emit(t.QueryLexer.TERM),t.QueryLexer.lexBoost;if("+"==n&&1===e.width()||"-"==n&&1===e.width())return e.emit(t.QueryLexer.PRESENCE),t.QueryLexer.lexText;if(n.match(t.QueryLexer.termSeparator))return t.QueryLexer.lexTerm}else e.escapeCharacter()}},t.QueryParser=function(e,n){this.lexer=new t.QueryLexer(e),this.query=n,this.currentClause={},this.lexemeIdx=0},t.QueryParser.prototype.parse=function(){this.lexer.run(),this.lexemes=this.lexer.lexemes;for(var e=t.QueryParser.parseClause;e;)e=e(this);return this.query},t.QueryParser.prototype.peekLexeme=function(){return this.lexemes[this.lexemeIdx]},t.QueryParser.prototype.consumeLexeme=function(){var e=this.peekLexeme();return this.lexemeIdx+=1,e},t.QueryParser.prototype.nextClause=function(){this.query.clause(this.currentClause),this.currentClause={}},t.QueryParser.parseClause=function(e){var n=e.peekLexeme();if(null!=n)switch(n.type){case t.QueryLexer.PRESENCE:return t.QueryParser.parsePresence;case t.QueryLexer.FIELD:return t.QueryParser.parseField;case t.QueryLexer.TERM:return t.QueryParser.parseTerm;default:var r="expected either a field or a term, found "+n.type;throw n.str.length>=1&&(r+=" with value '"+n.str+"'"),new t.QueryParseError(r,n.start,n.end)}},t.QueryParser.parsePresence=function(e){var n=e.consumeLexeme();if(null!=n){switch(n.str){case"-":e.currentClause.presence=t.Query.presence.PROHIBITED;break;case"+":e.currentClause.presence=t.Query.presence.REQUIRED;break;default:throw new t.QueryParseError("unrecognised presence operator'"+n.str+"'",n.start,n.end)}var i=e.peekLexeme();if(null==i)throw new t.QueryParseError("expecting term or field, found nothing",n.start,n.end);switch(i.type){case t.QueryLexer.FIELD:return t.QueryParser.parseField;case t.QueryLexer.TERM:return t.QueryParser.parseTerm;default:throw new t.QueryParseError("expecting term or field, found '"+i.type+"'",i.start,i.end)}}},t.QueryParser.parseField=function(e){var n=e.consumeLexeme();if(null!=n){if(-1==e.query.allFields.indexOf(n.str)){var r=e.query.allFields.map(function(o){return"'"+o+"'"}).join(", ");throw new t.QueryParseError("unrecognised field '"+n.str+"', possible fields: "+r,n.start,n.end)}e.currentClause.fields=[n.str];var s=e.peekLexeme();if(null==s)throw new t.QueryParseError("expecting term, found nothing",n.start,n.end);if(s.type===t.QueryLexer.TERM)return t.QueryParser.parseTerm;throw new t.QueryParseError("expecting term, found '"+s.type+"'",s.start,s.end)}},t.QueryParser.parseTerm=function(e){var n=e.consumeLexeme();if(null!=n){e.currentClause.term=n.str.toLowerCase(),-1!=n.str.indexOf("*")&&(e.currentClause.usePipeline=!1);var r=e.peekLexeme();if(null==r)return void e.nextClause();switch(r.type){case t.QueryLexer.TERM:return e.nextClause(),t.QueryParser.parseTerm;case t.QueryLexer.FIELD:return e.nextClause(),t.QueryParser.parseField;case t.QueryLexer.EDIT_DISTANCE:return t.QueryParser.parseEditDistance;case t.QueryLexer.BOOST:return t.QueryParser.parseBoost;case t.QueryLexer.PRESENCE:return e.nextClause(),t.QueryParser.parsePresence;default:throw new t.QueryParseError("Unexpected lexeme type '"+r.type+"'",r.start,r.end)}}},t.QueryParser.parseEditDistance=function(e){var n=e.consumeLexeme();if(null!=n){var r=parseInt(n.str,10);if(isNaN(r))throw new t.QueryParseError("edit distance must be numeric",n.start,n.end);e.currentClause.editDistance=r;var s=e.peekLexeme();if(null==s)return void e.nextClause();switch(s.type){case t.QueryLexer.TERM:return e.nextClause(),t.QueryParser.parseTerm;case t.QueryLexer.FIELD:return e.nextClause(),t.QueryParser.parseField;case t.QueryLexer.EDIT_DISTANCE:return t.QueryParser.parseEditDistance;case t.QueryLexer.BOOST:return t.QueryParser.parseBoost;case t.QueryLexer.PRESENCE:return e.nextClause(),t.QueryParser.parsePresence;default:throw new t.QueryParseError("Unexpected lexeme type '"+s.type+"'",s.start,s.end)}}},t.QueryParser.parseBoost=function(e){var n=e.consumeLexeme();if(null!=n){var r=parseInt(n.str,10);if(isNaN(r))throw new t.QueryParseError("boost must be numeric",n.start,n.end);e.currentClause.boost=r;var s=e.peekLexeme();if(null==s)return void e.nextClause();switch(s.type){case t.QueryLexer.TERM:return e.nextClause(),t.QueryParser.parseTerm;case t.QueryLexer.FIELD:return e.nextClause(),t.QueryParser.parseField;case t.QueryLexer.EDIT_DISTANCE:return t.QueryParser.parseEditDistance;case t.QueryLexer.BOOST:return t.QueryParser.parseBoost;case t.QueryLexer.PRESENCE:return e.nextClause(),t.QueryParser.parsePresence;default:throw new t.QueryParseError("Unexpected lexeme type '"+s.type+"'",s.start,s.end)}}},void 0!==(S="function"==typeof(L=function(){return t})?L.call(C,E,C,B):L)&&(B.exports=S)}()}}]);