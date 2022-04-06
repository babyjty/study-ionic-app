"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_chat-indiv_chat-indiv_module_ts"],{

/***/ 92066:
/*!*********************************************************!*\
  !*** ./src/app/chat-indiv/chat-indiv-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChatIndivPageRoutingModule": () => (/* binding */ ChatIndivPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var _chat_indiv_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chat-indiv.page */ 28893);




const routes = [
    {
        path: '',
        component: _chat_indiv_page__WEBPACK_IMPORTED_MODULE_0__.ChatIndivPage
    }
];
let ChatIndivPageRoutingModule = class ChatIndivPageRoutingModule {
};
ChatIndivPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ChatIndivPageRoutingModule);



/***/ }),

/***/ 68264:
/*!*************************************************!*\
  !*** ./src/app/chat-indiv/chat-indiv.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChatIndivPageModule": () => (/* binding */ ChatIndivPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38143);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 31777);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var _chat_indiv_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chat-indiv-routing.module */ 92066);
/* harmony import */ var _chat_indiv_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chat-indiv.page */ 28893);







let ChatIndivPageModule = class ChatIndivPageModule {
};
ChatIndivPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _chat_indiv_routing_module__WEBPACK_IMPORTED_MODULE_0__.ChatIndivPageRoutingModule
        ],
        declarations: [_chat_indiv_page__WEBPACK_IMPORTED_MODULE_1__.ChatIndivPage]
    })
], ChatIndivPageModule);



/***/ }),

/***/ 28893:
/*!***********************************************!*\
  !*** ./src/app/chat-indiv/chat-indiv.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChatIndivPage": () => (/* binding */ ChatIndivPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _chat_indiv_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chat-indiv.page.html?ngResource */ 14088);
/* harmony import */ var _chat_indiv_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chat-indiv.page.scss?ngResource */ 72715);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 51109);




let ChatIndivPage = class ChatIndivPage {
    constructor() { }
    ngOnInit() {
    }
};
ChatIndivPage.ctorParameters = () => [];
ChatIndivPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-chat-indiv',
        template: _chat_indiv_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_chat_indiv_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ChatIndivPage);



/***/ }),

/***/ 72715:
/*!************************************************************!*\
  !*** ./src/app/chat-indiv/chat-indiv.page.scss?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaGF0LWluZGl2LnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 14088:
/*!************************************************************!*\
  !*** ./src/app/chat-indiv/chat-indiv.page.html?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>chat-indiv</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_chat-indiv_chat-indiv_module_ts.js.map