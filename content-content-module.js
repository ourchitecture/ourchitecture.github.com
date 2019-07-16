(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["content-content-module"],{

/***/ "./src/app/content/cloud.page.ts":
/*!***************************************!*\
  !*** ./src/app/content/cloud.page.ts ***!
  \***************************************/
/*! exports provided: CloudPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CloudPage", function() { return CloudPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


/* tslint:disable */
var CloudPage = /** @class */ (function () {
    function CloudPage() {
    }
    CloudPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'content-cloud',
            template: "<ion-header>\n<ion-toolbar>\n<ion-buttons slot=\"start\">\n    <ion-back-button></ion-back-button>\n</ion-buttons>\n<ion-title>\n    Ourchitecture\n</ion-title>\n</ion-toolbar>\n</ion-header>\n\n<ion-content>\n<div class=\"ion-padding\">\n<h1 id=\"cloudarchitecture\">Cloud Architecture</h1>\n<p>Learn about <a href=\"https://cloudcomputing.ieee.org/standards\">Standards in Cloud Computing</a> and understand how cloud computing differs from traditional computing through increasing levels of provider abstractions for Infrastructure (IaaS), Platform (PaaS), and Software as a Service (SaaS).</p>\n<p>While many companies might claim the right to the title \"big\" cloud, we will focus our attention on the generally accepted top 3 with an honorable mention.</p>\n<ul>\n<li><a href=\"https://aws.amazon.com/\">Amazon Web Services</a></li>\n<li><a href=\"https://azure.microsoft.com/\">Microsoft Azure</a></li>\n<li><a href=\"https://cloud.google.com/\">Google Cloud Platform</a></li>\n<li><a href=\"https://www.ibm.com/cloud\">IBM Cloud</a></li>\n</ul>\n</div>\n</ion-content>",
        })
    ], CloudPage);
    return CloudPage;
}());



/***/ }),

/***/ "./src/app/content/content.module.ts":
/*!*******************************************!*\
  !*** ./src/app/content/content.module.ts ***!
  \*******************************************/
/*! exports provided: ContentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentModule", function() { return ContentModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _roles_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./roles.page */ "./src/app/content/roles.page.ts");
/* harmony import */ var _cloud_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cloud.page */ "./src/app/content/cloud.page.ts");
/* harmony import */ var _devops_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./devops.page */ "./src/app/content/devops.page.ts");
/* harmony import */ var _index_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./index.page */ "./src/app/content/index.page.ts");
/* harmony import */ var _internet_of_things_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./internet-of-things.page */ "./src/app/content/internet-of-things.page.ts");
/* harmony import */ var _microservices_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./microservices.page */ "./src/app/content/microservices.page.ts");
/* harmony import */ var _people_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./people.page */ "./src/app/content/people.page.ts");
/* harmony import */ var _process_page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./process.page */ "./src/app/content/process.page.ts");
/* harmony import */ var _serverless_page__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./serverless.page */ "./src/app/content/serverless.page.ts");
/* harmony import */ var _technology_page__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./technology.page */ "./src/app/content/technology.page.ts");





/* tslint:disable */










var ContentModule = /** @class */ (function () {
    function ContentModule() {
    }
    ContentModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                    { path: '', component: _index_page__WEBPACK_IMPORTED_MODULE_8__["IndexPage"] },
                    { path: 'ROLES', component: _roles_page__WEBPACK_IMPORTED_MODULE_5__["RolesPage"] },
                    { path: 'cloud', component: _cloud_page__WEBPACK_IMPORTED_MODULE_6__["CloudPage"] },
                    { path: 'devops', component: _devops_page__WEBPACK_IMPORTED_MODULE_7__["DevopsPage"] },
                    { path: 'index', component: _index_page__WEBPACK_IMPORTED_MODULE_8__["IndexPage"] },
                    { path: 'internet-of-things', component: _internet_of_things_page__WEBPACK_IMPORTED_MODULE_9__["InternetOfThingsPage"] },
                    { path: 'microservices', component: _microservices_page__WEBPACK_IMPORTED_MODULE_10__["MicroservicesPage"] },
                    { path: 'people', component: _people_page__WEBPACK_IMPORTED_MODULE_11__["PeoplePage"] },
                    { path: 'process', component: _process_page__WEBPACK_IMPORTED_MODULE_12__["ProcessPage"] },
                    { path: 'serverless', component: _serverless_page__WEBPACK_IMPORTED_MODULE_13__["ServerlessPage"] },
                    { path: 'technology', component: _technology_page__WEBPACK_IMPORTED_MODULE_14__["TechnologyPage"] },
                ]),
            ],
            declarations: [
                _roles_page__WEBPACK_IMPORTED_MODULE_5__["RolesPage"],
                _cloud_page__WEBPACK_IMPORTED_MODULE_6__["CloudPage"],
                _devops_page__WEBPACK_IMPORTED_MODULE_7__["DevopsPage"],
                _index_page__WEBPACK_IMPORTED_MODULE_8__["IndexPage"],
                _internet_of_things_page__WEBPACK_IMPORTED_MODULE_9__["InternetOfThingsPage"],
                _microservices_page__WEBPACK_IMPORTED_MODULE_10__["MicroservicesPage"],
                _people_page__WEBPACK_IMPORTED_MODULE_11__["PeoplePage"],
                _process_page__WEBPACK_IMPORTED_MODULE_12__["ProcessPage"],
                _serverless_page__WEBPACK_IMPORTED_MODULE_13__["ServerlessPage"],
                _technology_page__WEBPACK_IMPORTED_MODULE_14__["TechnologyPage"],
            ]
        })
    ], ContentModule);
    return ContentModule;
}());



/***/ }),

/***/ "./src/app/content/devops.page.ts":
/*!****************************************!*\
  !*** ./src/app/content/devops.page.ts ***!
  \****************************************/
/*! exports provided: DevopsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DevopsPage", function() { return DevopsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


/* tslint:disable */
var DevopsPage = /** @class */ (function () {
    function DevopsPage() {
    }
    DevopsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'content-devops',
            template: "<ion-header>\n<ion-toolbar>\n<ion-buttons slot=\"start\">\n    <ion-back-button></ion-back-button>\n</ion-buttons>\n<ion-title>\n    Ourchitecture\n</ion-title>\n</ion-toolbar>\n</ion-header>\n\n<ion-content>\n<div class=\"ion-padding\">\n<h1 id=\"devops\">DevOps</h1>\n<ul>\n<li><a href=\"https://en.wikipedia.org/wiki/DevOps\">Wikipedia</a></li>\n</ul>\n</div>\n</ion-content>",
        })
    ], DevopsPage);
    return DevopsPage;
}());



/***/ }),

/***/ "./src/app/content/index.page.ts":
/*!***************************************!*\
  !*** ./src/app/content/index.page.ts ***!
  \***************************************/
/*! exports provided: IndexPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexPage", function() { return IndexPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


/* tslint:disable */
var IndexPage = /** @class */ (function () {
    function IndexPage() {
    }
    IndexPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'content-index',
            template: "<ion-header>\n<ion-toolbar>\n<ion-buttons slot=\"start\">\n    <ion-back-button></ion-back-button>\n</ion-buttons>\n<ion-title>\n    Ourchitecture\n</ion-title>\n</ion-toolbar>\n</ion-header>\n\n<ion-content>\n<div class=\"ion-padding\">\n<h1 id=\"ourchitecturelogoassetsiconfaviconpngwelcometoourchitecture\"><img src=\"./assets/icon/favicon.png\" alt=\"Ourchitecture Logo\" /> Welcome to Ourchitecture</h1>\n<p>Dedicated to Open Architecture, this site provides some useful resources for Technology Architects and the people they work with.</p>\n<p><strong>Business people:</strong> technologists will be hard because you do not usually understand technology and they do not usually understand business. You generate waste when you do not focus on enabling valuable outcomes.</p>\n<p><strong>Technologists:</strong> business people will be hard because you do not usually understand business and they do not usually understand technology. You generate waste when you do not focus on enabling valuable outcomes.</p>\n<p><strong>Business-Technology Translators:</strong> You will go far, so long as you focus on enabling valuable outcomes.</p>\n<p><img src=\"./assets/figures/enterprise-traditional-lean.png\" alt=\"Enterprise, Traditional vs. Lean\" /></p>\n<h2 id=\"architecture\">Architecture</h2>\n<p>In <a href=\"https://iasaglobal.org/itabok/what-is-it-architecture/\">\"What is IT Architecture\"</a>, the International Association of Architecture (IASA) defines an IT Architect as the technology strategist for the business and IT Architecture as the art and science of designing and delivering valuable technology strategy. Wikipedia takes a more traditional and verbose approach to <a href=\"https://en.wikipedia.org/wiki/Information_technology_architecture\">their definition of IT Architecture</a>.</p>\n<p>Architects, whether formally trained and certified or developed through experience, come from a variety of backgrounds and the title and roles of an architect at any company vary significantly. Generally, there are a few distinct <a href=\"./roles\">roles of architecture</a> performed by architects.</p>\n<h2 id=\"topiccategories\">Topic Categories</h2>\n<p><a href=\"https://www.draw.io?lightbox=1&target=self&highlight=0000ff&edit=https%3A%2F%2Fgithub.com%2Fourchitecture%2Fsite-ionic-ng%2Fblob%2Fmaster%2F.github%2FCONTRIBUTING.md&nav=1&title=people-process-technology.drawio#RxZbfc6IwEMf%2FGh91gADCY8%2F%2BmundtDNe554jWUnawDIhVO1ffwGihurZa8dO8cHsd3cDu58NOiKzYn2jaMV%2FIQM5Cjy2HpHLURD4vheYr1bZ9EocJ72QK8Fs0F6Yi1ewomfVRjCoB4EaUWpRDcUMyxIyPdCoUrgahi1RDu9a0RwOhHlG5aH6RzDNd3V5e8ctiJzbWyeRdRR0G2yFmlOGK0ciVyMyU4i6XxXrGci2edu%2B9HnX%2F%2FDuHkxBqf8r4fYCf%2FLH4u718s6%2FL9OajdOxpfNCZWMLtg%2BrN9sOaCVombfWjxUXGuYVzVrXygA3GteFNJZvlgo11QJLY45TzwhLIeUMJapuJ7KM2o%2FRa63wGRxP3F1tBpba0fvL6IfF2vpfQGlYO5It%2FgawAK02JsR6CbEg7CT607i3Vw7XMO017iD1Uzuy1M5Svtt7326zsB3vzMca1P3iqZ3IwJN0AbJPfQCsTCu77aQon3uVa92O80W7W3CNjcraRme6UTDJhebNYiLQeCon%2ByRWtxN2DByiCpuSAbPU3oH6hiGLIGHhMYZJsCAdw3OwCsNJ9D6t7dFyacXeh2EZ0%2BF1kt9vyHhpas43n2Wo3%2BxwkmP4ZRzBNySnxzim8ZTQM3EMo%2BGZI9vX5vdSfFCYQV1%2F%2Bhi66Sf5RV93Dikky%2BzouzRLYLE8D78g%2FFZ%2BRtr%2FPnbhzr8McvUX\"><img src=\"./assets/figures/people-process-technology.png\" alt=\"People, Process, Technology\" /></a></p>\n<p>In his 1964 paper \"Applied Organization Changes in Industry\" Harold Leavitt coined the phrase people, process, and technology. The triad has served as a guiding reference for decades and <a href=\"https://www.cio.com/article/3331993/one-cio-s-perspective-on-the-people-process-and-technology-formula-for-business-success.html\">continues today</a>.</p>\n<ul>\n<li><a routerLink=\"/people\">People</a></li>\n<li><a routerLink=\"/process\">Process</a></li>\n<li><a routerLink=\"/technology\">Technology</a></li>\n</ul>\n</div>\n</ion-content>",
        })
    ], IndexPage);
    return IndexPage;
}());



/***/ }),

/***/ "./src/app/content/internet-of-things.page.ts":
/*!****************************************************!*\
  !*** ./src/app/content/internet-of-things.page.ts ***!
  \****************************************************/
/*! exports provided: InternetOfThingsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InternetOfThingsPage", function() { return InternetOfThingsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


/* tslint:disable */
var InternetOfThingsPage = /** @class */ (function () {
    function InternetOfThingsPage() {
    }
    InternetOfThingsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'content-internet-of-things',
            template: "<ion-header>\n<ion-toolbar>\n<ion-buttons slot=\"start\">\n    <ion-back-button></ion-back-button>\n</ion-buttons>\n<ion-title>\n    Ourchitecture\n</ion-title>\n</ion-toolbar>\n</ion-header>\n\n<ion-content>\n<div class=\"ion-padding\">\n<h1 id=\"internetofthings\">Internet of Things</h1>\n<ul>\n<li><a href=\"https://en.wikipedia.org/wiki/Internet_of_things\">Wikipedia</a></li>\n</ul>\n</div>\n</ion-content>",
        })
    ], InternetOfThingsPage);
    return InternetOfThingsPage;
}());



/***/ }),

/***/ "./src/app/content/microservices.page.ts":
/*!***********************************************!*\
  !*** ./src/app/content/microservices.page.ts ***!
  \***********************************************/
/*! exports provided: MicroservicesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MicroservicesPage", function() { return MicroservicesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


/* tslint:disable */
var MicroservicesPage = /** @class */ (function () {
    function MicroservicesPage() {
    }
    MicroservicesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'content-microservices',
            template: "<ion-header>\n<ion-toolbar>\n<ion-buttons slot=\"start\">\n    <ion-back-button></ion-back-button>\n</ion-buttons>\n<ion-title>\n    Ourchitecture\n</ion-title>\n</ion-toolbar>\n</ion-header>\n\n<ion-content>\n<div class=\"ion-padding\">\n<h1 id=\"microservices\">Microservices</h1>\n<ul>\n<li><a href=\"https://martinfowler.com/articles/microservices.html\">Martin Fowler Microservices</a></li>\n<li><a href=\"https://samnewman.io/talks/principles-of-microservices/\">Sam Newman Microservices</a></li>\n</ul>\n</div>\n</ion-content>",
        })
    ], MicroservicesPage);
    return MicroservicesPage;
}());



/***/ }),

/***/ "./src/app/content/people.page.ts":
/*!****************************************!*\
  !*** ./src/app/content/people.page.ts ***!
  \****************************************/
/*! exports provided: PeoplePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeoplePage", function() { return PeoplePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


/* tslint:disable */
var PeoplePage = /** @class */ (function () {
    function PeoplePage() {
    }
    PeoplePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'content-people',
            template: "<ion-header>\n<ion-toolbar>\n<ion-buttons slot=\"start\">\n    <ion-back-button></ion-back-button>\n</ion-buttons>\n<ion-title>\n    Ourchitecture\n</ion-title>\n</ion-toolbar>\n</ion-header>\n\n<ion-content>\n<div class=\"ion-padding\">\n<h1 id=\"people\">People</h1>\n<ul>\n<li><a href=\"https://en.wikipedia.org/wiki/Peter_Drucker\">Peter Drucker Management</a></li>\n<li><a href=\"https://www.franklincovey.com/Solutions/Leadership.html\">Franklin Covey Leadership</a></li>\n<li><a href=\"https://simonsinek.com/\">Simon Sinek Leadership</a></li>\n</ul>\n<p>See the <a href=\"https://insights.stackoverflow.com/survey/2019#developer-profile\">Developer Profile</a> of the 2019 Stack Overflow survey.</p>\n<h2 id=\"learning\">Learning</h2>\n<ul>\n<li><a href=\"https://go.forrester.com/\">Forrester</a></li>\n<li><a href=\"https://www.gartner.com/\">Gartner</a></li>\n<li><a href=\"https://www.getabstract.com/\">GetAbstract</a></li>\n<li><a href=\"https://www.mckinsey.com/mgi/our-research\">McKinsey</a></li>\n<li><a href=\"https://www.oreilly.com/\">O'Reilly</a></li>\n<li><a href=\"https://www.pluralsight.com/\">Pluralsight</a></li>\n<li><a href=\"https://www.udemy.com/\">Udemy</a></li>\n</ul>\n<h2 id=\"professionalnetworking\">Professional Networking</h2>\n<ul>\n<li><a href=\"https://www.linkedin.com/\">LinkedIn</a></li>\n<li><a href=\"https://twitter.com\">Twitter</a></li>\n</ul>\n</div>\n</ion-content>",
        })
    ], PeoplePage);
    return PeoplePage;
}());



/***/ }),

/***/ "./src/app/content/process.page.ts":
/*!*****************************************!*\
  !*** ./src/app/content/process.page.ts ***!
  \*****************************************/
/*! exports provided: ProcessPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProcessPage", function() { return ProcessPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


/* tslint:disable */
var ProcessPage = /** @class */ (function () {
    function ProcessPage() {
    }
    ProcessPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'content-process',
            template: "<ion-header>\n<ion-toolbar>\n<ion-buttons slot=\"start\">\n    <ion-back-button></ion-back-button>\n</ion-buttons>\n<ion-title>\n    Ourchitecture\n</ion-title>\n</ion-toolbar>\n</ion-header>\n\n<ion-content>\n<div class=\"ion-padding\">\n<h1 id=\"process\">Process</h1>\n<ul>\n<li><a href=\"https://agilemanifesto.org/\">Agile Manifesto</a></li>\n<li><a href=\"https://en.wikipedia.org/wiki/Lean_IT\">Lean IT</a></li>\n<li><a href=\"https://www.atlassian.com/agile/kanban\">Kanban</a></li>\n<li><a href=\"https://www.mountaingoatsoftware.com/agile/new-to-agile-or-scrum\">Agile</a></li>\n<li><a href=\"https://www.scaledagileframework.com/\">Scaled Agile Framework (SAFe)</a></li>\n<li><a href=\"http://www.extremeprogramming.org/\">Extreme Programming</a></li>\n<li><a href=\"https://www.scrum.org/\">Scrum</a></li>\n</ul>\n</div>\n</ion-content>",
        })
    ], ProcessPage);
    return ProcessPage;
}());



/***/ }),

/***/ "./src/app/content/roles.page.ts":
/*!***************************************!*\
  !*** ./src/app/content/roles.page.ts ***!
  \***************************************/
/*! exports provided: RolesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RolesPage", function() { return RolesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


/* tslint:disable */
var RolesPage = /** @class */ (function () {
    function RolesPage() {
    }
    RolesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'content-roles',
            template: "<ion-header>\n<ion-toolbar>\n<ion-buttons slot=\"start\">\n    <ion-back-button></ion-back-button>\n</ion-buttons>\n<ion-title>\n    Ourchitecture\n</ion-title>\n</ion-toolbar>\n</ion-header>\n\n<ion-content>\n<div class=\"ion-padding\">\n<p>Generally, the <a href=\"https://iasaglobal.org/itabok-1/engagement-model/role-descriptions/\">types of architecture roles<sup>&#11127;</sup></a>, fall into these categories:</p>\n<h3 id=\"enterprisearchitecture\">Enterprise Architecture</h3>\n<p>The Enterprise Architect has mastered the fundamental skills in architecture and has been a practicing professional\narchitect within one of the specializations prior to moving into the enterprise architecture\npractice. The enterprise architect has learned enough of the specializations to lead the\narchitecture teams within an organization. Enterprise architects will have functioned as a\nsolutions architect to the extent necessary to lead at the enterprise or global level. To be\nan enterprise architect, a successful candidate will have learned the value of the existing\nspecializations and proven their ability to lead the cross-functional architecture teams to\nsuccess.</p>\n<h3 id=\"solutionarchitecture\">Solution Architecture</h3>\n<p>The Solution Architect has mastered the fundamental skills in architecture and has been a practicing architect\nwithin delivery based organization. The solution architect is responsible for delivery on\none or more projects within the scope of the business case for the solution. Their primary\nrole is to optimize the value of a solution to an organization through delivery and reduce\nowner risk in its delivery while ensuring the solution meets all compliance and regulatory\nwhich impact the system. The solution architect will work with specialist architects,\ntechnical staff and stakeholders of the solution to ensure it is delivered or canceled based\non the most effective strategy for the organization as a whole.</p>\n<h3 id=\"businessarchitecture\">Business Architecture</h3>\n<p>The Business Architect provides leadership of business initiatives through technology strategy by participating in\nthe development of a business strategy to accomplish specific business goals. They provide\ninnovation and opportunity recognition within business units. Specifically the business\narchitect has mastered the delivery of value through technology support of business\nstrategy. The business architect has developed their understanding of business valuation,\nbusiness process and business strategy delivery. They act as a liaison from the technology\ngroups to enhance business development and have tremendously advanced skills in business\nvaluation of technology as well has human dynamics.</p>\n<h3 id=\"informationarchitecture\">Information Architecture</h3>\n<p>The Information Architect directs the use, integration and storage of information within a particular business unit\n(vertical structure) or business capability (horizontal structure). The information\narchitect may focus in on one particular form such as usage focused strategy, information\nstorage or other elements of information architecture or but must consider all elements of\ninformation architecture in the organization or customer base. The information architect has\nmastered the management of information across and within their industry.</p>\n<h3 id=\"infrastructurearchitecture\">Infrastructure Architecture</h3>\n<p>The Infrastructure Architect provides strategic uses of infrastructure, network, and operations as an asset. They create\nand deliver technology strategies to optimize the use of technology resources related to\nhardware and physical system. It should be noted, this is not meant as quantitative overlap\nwith the upcoming physical system architect who focuses on highly complex physical systems\nengineering domains such as satellite, defense, and embedded technology though there is some\noverlap. The infrastructure architect uses their mastery of network, computing platform and\noperations to guide the organization to valuable investments in hardware and platform.</p>\n<h3 id=\"softwarearchitecture\">Software Architecture</h3>\n<p>The Software Architect has mastered the value, use, development and delivery of software intensive systems. They\nhave developed skills in software development lifecycles, software engineering and software\ndesign. The software architect is responsible for the value generated from software systems\nor system of systems within their direct supervision. They work with project teams to ensure\nvalue is delivered for investment and feed resulting valuation results into the business,\ninformation and infrastructure areas.</p>\n</div>\n</ion-content>",
        })
    ], RolesPage);
    return RolesPage;
}());



/***/ }),

/***/ "./src/app/content/serverless.page.ts":
/*!********************************************!*\
  !*** ./src/app/content/serverless.page.ts ***!
  \********************************************/
/*! exports provided: ServerlessPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServerlessPage", function() { return ServerlessPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


/* tslint:disable */
var ServerlessPage = /** @class */ (function () {
    function ServerlessPage() {
    }
    ServerlessPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'content-serverless',
            template: "<ion-header>\n<ion-toolbar>\n<ion-buttons slot=\"start\">\n    <ion-back-button></ion-back-button>\n</ion-buttons>\n<ion-title>\n    Ourchitecture\n</ion-title>\n</ion-toolbar>\n</ion-header>\n\n<ion-content>\n<div class=\"ion-padding\">\n<h1 id=\"serverless\">Serverless</h1>\n<ul>\n<li><a href=\"https://martinfowler.com/articles/serverless.html\">Martin Fowler Serverless Architectures</a></li>\n</ul>\n</div>\n</ion-content>",
        })
    ], ServerlessPage);
    return ServerlessPage;
}());



/***/ }),

/***/ "./src/app/content/technology.page.ts":
/*!********************************************!*\
  !*** ./src/app/content/technology.page.ts ***!
  \********************************************/
/*! exports provided: TechnologyPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TechnologyPage", function() { return TechnologyPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


/* tslint:disable */
var TechnologyPage = /** @class */ (function () {
    function TechnologyPage() {
    }
    TechnologyPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'content-technology',
            template: "<ion-header>\n<ion-toolbar>\n<ion-buttons slot=\"start\">\n    <ion-back-button></ion-back-button>\n</ion-buttons>\n<ion-title>\n    Ourchitecture\n</ion-title>\n</ion-toolbar>\n</ion-header>\n\n<ion-content>\n<div class=\"ion-padding\">\n<h1 id=\"technology\">Technology</h1>\n<p>See the <a href=\"https://insights.stackoverflow.com/survey/2019#technology\">Technology</a> section of the 2019 Stack Overflow survey.</p>\n<p>See the ThoughtWorks <a href=\"http://www.thoughtworks.com/radar\">Technology Radar</a>.</p>\n<h2 id=\"currenttopics\">Current Topics</h2>\n<ul>\n<li><a routerLink=\"/cloud\">Cloud</a></li>\n<li><a routerLink=\"/devops\">DevOps</a></li>\n<li><a routerLink=\"/internet-of-things\">Internet of Things</a></li>\n<li><a routerLink=\"/microservices\">Microservices</a></li>\n<li><a routerLink=\"/serverless\">Serverless</a></li>\n</ul>\n<h2 id=\"tools\">Tools</h2>\n<ul>\n<li><a href=\"https://asciidoctor.org/docs/user-manual/\">Asciidoctor</a></li>\n<li><a href=\"https://draw.io\">DrawIO</a></li>\n<li><a href=\"https://github.com/\">GitHub</a></li>\n<li><a href=\"https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet\">Markdown</a></li>\n<li><a href=\"https://code.visualstudio.com/\">VS Code</a></li>\n</ul>\n<h2 id=\"platforms\">Platforms</h2>\n<ul>\n<li><a href=\"https://www.cloudfoundry.org/\">Cloud Foundry</a></li>\n<li><a href=\"https://www.docker.com/\">Docker</a></li>\n<li><a href=\"https://www.elastic.co/elk-stack\">ElasticSearch, Logstash, Kibana (ELK)</a></li>\n<li><a href=\"https://istio.io/\">Istio</a></li>\n<li><a href=\"http://kubernetes.io/\">Kubernetes</a> and <a href=\"https://github.com/ramitsurana/awesome-kubernetes\">Awesome Kubernetes</a> resources</li>\n<li><a href=\"https://www.openstack.org/\">OpenStack</a></li>\n</ul>\n<h2 id=\"languages\">Languages</h2>\n<ul>\n<li><a href=\"https://dotnet.microsoft.com/download\">.NET</a></li>\n<li><a href=\"https://fsharp.org/\">F#</a></li>\n<li><a href=\"https://golang.org/\">GO</a></li>\n<li><a href=\"https://nodejs.org/\">NodeJS</a></li>\n<li><a href=\"https://www.java.com/\">Java</a></li>\n<li><a href=\"https://kotlinlang.org/\">Kotlin</a></li>\n<li><a href=\"https://www.php.net/\">PHP</a></li>\n<li><a href=\"https://www.python.org/\">Python</a></li>\n<li><a href=\"https://www.r-project.org/\">R</a></li>\n<li><a href=\"https://www.ruby-lang.org/en/\">Ruby</a></li>\n<li><a href=\"https://www.rust-lang.org/\">Rust</a></li>\n</ul>\n</div>\n</ion-content>",
        })
    ], TechnologyPage);
    return TechnologyPage;
}());



/***/ })

}]);
//# sourceMappingURL=content-content-module.js.map