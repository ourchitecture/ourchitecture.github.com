"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[7275],{9315:(J,P,r)=>{r.d(P,{r:()=>e});var l=r(1571),u=r(6895),n=r(2723);class e{constructor(){this.title="",this.url="",this.thumbnailImageFileName="",this.color="",this.visit=new l.vpe}ngOnInit(){}select(){this.visit.emit(this.url)}}e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=l.Xpm({type:e,selectors:[["app-book-item"]],inputs:{title:"title",url:"url",thumbnailImageFileName:"thumbnailImageFileName",color:"color"},outputs:{visit:"visit"},standalone:!0,features:[l.jDz],decls:6,vars:4,consts:[["button","","detail","",3,"color","click"],["name","book-outline","slot","start"],[3,"alt","src"],[1,"ion-text-wrap"]],template:function(o,p){1&o&&(l.TgZ(0,"ion-item",0),l.NdJ("click",function(){return p.select()}),l._UZ(1,"ion-icon",1),l.TgZ(2,"ion-thumbnail"),l._UZ(3,"img",2),l.qZA(),l.TgZ(4,"ion-label",3),l._uU(5),l.qZA()()),2&o&&(l.Q6J("color",p.color),l.xp6(3),l.Q6J("alt","Book cover of "+p.title)("src","/assets/thumbnails/books/"+p.thumbnailImageFileName,l.LSH),l.xp6(2),l.Oqu(p.title))},dependencies:[u.ez,n.Pc,n.gu,n.Ie,n.Q$,n.Bs],styles:["ion-label[_ngcontent-%COMP%]{margin-left:15px}"]})},4456:(J,P,r)=>{r.d(P,{y:()=>E});var l=r(9671),u=r(6895),n=r(2723),e=r(1571),Z=r(515),o=r(4482),p=r(5403),b=r(8421),A=r(5963);function M(a){let i,t=1/0;return null!=a&&("object"==typeof a?({count:t=1/0,delay:i}=a):t=a),t<=0?()=>Z.E:(0,o.e)((d,L)=>{let v,U=0;const F=()=>{if(v?.unsubscribe(),v=null,null!=i){const C="number"==typeof i?(0,A.H)(i):(0,b.Xf)(i(U)),k=(0,p.x)(L,()=>{k.unsubscribe(),w()});C.subscribe(k)}else w()},w=()=>{let C=!1;v=d.subscribe((0,p.x)(L,void 0,()=>{++U<t?v?F():C=!0:L.complete()})),C&&F()};w()})}class g{constructor(t){this.document=t}start(t,i,...d){var L=this;return(0,l.Z)(function*(){if(!M)throw new Error("Not Implemented: Non-repeating timer has not been implemented yet.");return new Promise((U,v)=>{const F=L.getWindow().setInterval(function(){const w={options:t,id:F};try{i(),U(w)}catch(C){v(C)}},t.durationInMs,d)})})()}stop(t){if(!t.options.repeat)throw new Error("Not Implemented: Non-repeating timer has not been implemented yet.");this.getWindow().clearInterval(t.id)}getWindow(){return this.document.defaultView}}function y(a,t){if(1&a&&(e.TgZ(0,"p"),e._uU(1),e.qZA()),2&a){const i=e.oxw();e.xp6(1),e.hij(" You are about to leave this website. Please confirm. You will be automatically redirected to the URL below in ",i.secondsLeft," seconds. ")}}function N(a,t){1&a&&(e.TgZ(0,"p"),e._uU(1," Automatically redirecting the browser to the URL below... "),e.qZA())}g.\u0275fac=function(t){return new(t||g)(e.LFG(u.K0))},g.\u0275prov=e.Yz7({token:g,factory:g.\u0275fac,providedIn:"root"});class c{constructor(t,i){this.timerService=t,this.document=i,this.secondsLeft=10}ngOnInit(){var t=this;return(0,l.Z)(function*(){t.redirectTimerHandle=yield t.timerService.start({durationInMs:10,repeat:!0},()=>{if(!(t.secondsLeft>0))return t.secondsLeft<=0?(t.resetCountdown(),void(t.document.location.href=t.url)):void 0;t.secondsLeft--})})()}ngOnDestroy(){this.resetCountdown()}cancel(){this.resetCountdown(),this.modalController.dismiss()}resetCountdown(){try{this.timerService.stop(this.redirectTimerHandle)}catch{}this.secondsLeft=10}getWindow(){return this.document.defaultView}}c.\u0275fac=function(t){return new(t||c)(e.Y36(g),e.Y36(u.K0))},c.\u0275cmp=e.Xpm({type:c,selectors:[["app-leaving-site"]],inputs:{url:"url",modalController:"modalController"},standalone:!0,features:[e.jDz],decls:18,vars:6,consts:[["slot","secondary"],["color","secondary",3,"click"],["color","primary"],["slot","primary"],["color","primary",3,"href","strong"],[1,"ion-padding"],[4,"ngIf"],[3,"href"]],template:function(t,i){1&t&&(e.TgZ(0,"ion-header")(1,"ion-toolbar")(2,"ion-buttons",0)(3,"ion-button",1),e.NdJ("click",function(){return i.cancel()}),e._uU(4,"Cancel"),e.qZA()(),e.TgZ(5,"ion-title",2),e._uU(6,"Leaving?"),e.qZA(),e.TgZ(7,"ion-buttons",3)(8,"ion-button",4),e._uU(9,"Confirm"),e.qZA()()()(),e.TgZ(10,"ion-content",5),e.YNc(11,y,2,1,"p",6),e.YNc(12,N,2,0,"p",6),e.TgZ(13,"p"),e._uU(14,"Feel free to click on the link directly at any time."),e.qZA(),e.TgZ(15,"ion-note")(16,"a",7),e._uU(17),e.qZA()()()),2&t&&(e.xp6(8),e.Q6J("href",i.url)("strong",!0),e.xp6(3),e.Q6J("ngIf",i.secondsLeft>0),e.xp6(1),e.Q6J("ngIf",i.secondsLeft<=0),e.xp6(4),e.Q6J("href",i.url,e.LSH),e.xp6(1),e.Oqu(i.url))},dependencies:[u.ez,u.O5,n.Pc,n.YG,n.Sm,n.W2,n.Gu,n.uN,n.wd,n.sr]});var f=r(433);class s{}s.\u0275fac=function(t){return new(t||s)},s.\u0275mod=e.oAB({type:s}),s.\u0275inj=e.cJS({imports:[u.ez,f.u5,n.Pc]});var T=r(1481);class h{constructor(t){this.sanitizer=t}transform(t){return this.sanitizer.bypassSecurityTrustResourceUrl(t)}}h.\u0275fac=function(t){return new(t||h)(e.Y36(T.H7,16))},h.\u0275pipe=e.Yjl({name:"safe",type:h,pure:!0});const S=["videoPlaceholder"],B=["videoFrame"];function D(a,t){1&a&&(e.TgZ(0,"div",7,8),e._UZ(2,"ion-skeleton-text",9),e.qZA()),2&a&&(e.xp6(2),e.Q6J("animated",!0))}class I{constructor(t){this.animationController=t,this.videoWidth="1px",this.videoHeight="1px",this.isVideoReady=!1}ngAfterViewInit(){this.videoFrameRef.nativeElement.onload=()=>{this.videoWidth="100%",this.videoHeight="80%",this.animationController.create().addElement(this.videoPlaceholderRef.nativeElement).fromTo("opacity","1","0").duration(1e3).play(),this.animationController.create().addElement(this.videoFrameRef.nativeElement).keyframes([{offset:0,opacity:"0"},{offset:1,opacity:"1"}]).duration(900).play().finally(()=>{this.isVideoReady=!0})}}close(){this.modalController.dismiss()}}I.\u0275fac=function(t){return new(t||I)(e.Y36(n.vB))},I.\u0275cmp=e.Xpm({type:I,selectors:[["app-play-video"]],viewQuery:function(t,i){if(1&t&&(e.Gf(S,5),e.Gf(B,5)),2&t){let d;e.iGM(d=e.CRH())&&(i.videoPlaceholderRef=d.first),e.iGM(d=e.CRH())&&(i.videoFrameRef=d.first)}},inputs:{title:"title",url:"url",modalController:"modalController"},standalone:!0,features:[e.jDz],decls:12,vars:8,consts:[["color","primary"],["slot","primary"],["color","secondary",3,"click"],[1,"ion-padding"],["style","width: 100%; height: 80%",4,"ngIf"],["frameborder","0","allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture","allowfullscreen","",2,"opacity","0.1",3,"width","height","src","title"],["videoFrame",""],[2,"width","100%","height","80%"],["videoPlaceholder",""],[2,"width","100%","height","100%",3,"animated"]],template:function(t,i){1&t&&(e.TgZ(0,"ion-header")(1,"ion-toolbar")(2,"ion-title",0),e._uU(3),e.qZA(),e.TgZ(4,"ion-buttons",1)(5,"ion-button",2),e.NdJ("click",function(){return i.close()}),e._uU(6,"Close"),e.qZA()()()(),e.TgZ(7,"ion-content",3),e.YNc(8,D,3,1,"div",4),e._UZ(9,"iframe",5,6),e.ALo(11,"safe"),e.qZA()),2&t&&(e.xp6(3),e.Oqu(i.title),e.xp6(5),e.Q6J("ngIf",!i.isVideoReady),e.xp6(1),e.Q6J("width",i.videoWidth)("height",i.videoHeight)("src",e.lcZ(11,6,i.url),e.uOi)("title",i.title))},dependencies:[u.ez,u.O5,n.Pc,n.YG,n.Sm,n.W2,n.Gu,n.CK,n.wd,n.sr,s,h],styles:["iframe[_ngcontent-%COMP%]{position:absolute;left:0;top:0}"]});class E{constructor(t){this.modalController=t}openVideo(t){var i=this;return(0,l.Z)(function*(){yield(yield i.modalController.create({component:I,componentProps:{title:t.title,url:t.url,modalController:i.modalController},canDismiss:!0,keyboardClose:!0,showBackdrop:!0})).present()})()}openLeavingSite(t){var i=this;return(0,l.Z)(function*(){yield(yield i.modalController.create({component:c,componentProps:{url:t,modalController:i.modalController},canDismiss:!0,keyboardClose:!0,showBackdrop:!0})).present()})()}}},7275:(J,P,r)=>{r.r(P),r.d(P,{PeoplePageModule:()=>c});var l=r(6895),u=r(433),n=r(2723),e=r(8468),Z=r(4456),o=r(1571),p=r(1481),b=r(4732),A=r(992),M=r(9315);const g=function(){return["./personas"]};class y extends Z.y{constructor(s,T,h){super(s),this.metaService=T,this.titleService=h}ngOnInit(){this.titleService.setTitle("People"),this.metaService.updateTag({name:"description",content:"People are an organization's best resources, supported by technology and the processes they participate in"},"name=description"),this.metaService.updateTag({name:"keywords",content:"organization,people"},"name=keywords")}}y.\u0275fac=function(s){return new(s||y)(o.Y36(n.IN),o.Y36(p.h_),o.Y36(p.Dx))},y.\u0275cmp=o.Xpm({type:y,selectors:[["app-people"]],features:[o.qOj],decls:23,vars:4,consts:[[3,"translucent"],["title","People"],[3,"fullscreen"],["collapse","condense"],["color","primary","size","large"],["lines","full"],["detail","",3,"routerLink"],[1,"ion-text-wrap"],["title",'Peter Drucker: "The Drucker Library" Boxed Set',"thumbnailImageFileName","peter-drucker_the-drucker-library-boxed-set.jpg","url","https://a.co/d/aMdwtNb",3,"visit"],["title","Peopleware: Productive Projects and Teams","thumbnailImageFileName","tom-demarco_peopleware-productive-projects-and-teams.jpg","url","https://a.co/d/3klkunX",3,"visit"]],template:function(s,T){1&s&&(o.TgZ(0,"ion-header",0),o._UZ(1,"app-header",1),o.qZA(),o.TgZ(2,"ion-content",2)(3,"ion-header",3)(4,"ion-toolbar")(5,"ion-title",4),o._uU(6,"People"),o.qZA()()(),o.TgZ(7,"div")(8,"ion-card")(9,"ion-card-header")(10,"ion-card-title"),o._uU(11," Resources "),o.qZA()(),o.TgZ(12,"ion-card-content")(13,"ion-list",5)(14,"ion-item",6)(15,"ion-label",7)(16,"h2"),o._uU(17,"Personas"),o.qZA(),o.TgZ(18,"p"),o._uU(19,"The types of people in an organization."),o.qZA()()(),o.TgZ(20,"app-book-item",8),o.NdJ("visit",function(S){return T.openLeavingSite(S)}),o.qZA(),o.TgZ(21,"app-book-item",9),o.NdJ("visit",function(S){return T.openLeavingSite(S)}),o.qZA()()()()()(),o._UZ(22,"app-footer")),2&s&&(o.Q6J("translucent",!0),o.xp6(2),o.Q6J("fullscreen",!0),o.xp6(12),o.Q6J("routerLink",o.DdM(3,g)))},dependencies:[n.PM,n.FN,n.Zi,n.Dq,n.W2,n.Gu,n.Ie,n.Q$,n.q_,n.wd,n.sr,n.YI,e.rH,b.G,A.c,M.r]});const N=[{path:"",component:y},{path:"personas",loadChildren:()=>r.e(9733).then(r.bind(r,9733)).then(f=>f.PersonasPageModule)}];class m{}m.\u0275fac=function(s){return new(s||m)},m.\u0275mod=o.oAB({type:m}),m.\u0275inj=o.cJS({imports:[e.Bz.forChild(N),e.Bz]});class c{}c.\u0275fac=function(s){return new(s||c)},c.\u0275mod=o.oAB({type:c}),c.\u0275inj=o.cJS({imports:[l.ez,u.u5,n.Pc,m,b.G,A.c,M.r]})}}]);