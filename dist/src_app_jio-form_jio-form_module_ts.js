"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_jio-form_jio-form_module_ts"],{

/***/ 41998:
/*!*****************************************************!*\
  !*** ./src/app/jio-form/jio-form-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JioFormPageRoutingModule": () => (/* binding */ JioFormPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var _jio_form_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./jio-form.page */ 19900);




const routes = [
    {
        path: '',
        component: _jio_form_page__WEBPACK_IMPORTED_MODULE_0__.JioFormPage
    }
];
let JioFormPageRoutingModule = class JioFormPageRoutingModule {
};
JioFormPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], JioFormPageRoutingModule);



/***/ }),

/***/ 12677:
/*!*********************************************!*\
  !*** ./src/app/jio-form/jio-form.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JioFormPageModule": () => (/* binding */ JioFormPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38143);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 31777);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var _jio_form_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./jio-form-routing.module */ 41998);
/* harmony import */ var _jio_form_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./jio-form.page */ 19900);







let JioFormPageModule = class JioFormPageModule {
};
JioFormPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _jio_form_routing_module__WEBPACK_IMPORTED_MODULE_0__.JioFormPageRoutingModule
        ],
        declarations: [_jio_form_page__WEBPACK_IMPORTED_MODULE_1__.JioFormPage]
    })
], JioFormPageModule);



/***/ }),

/***/ 19900:
/*!*******************************************!*\
  !*** ./src/app/jio-form/jio-form.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JioFormPage": () => (/* binding */ JioFormPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _jio_form_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./jio-form.page.html?ngResource */ 97144);
/* harmony import */ var _jio_form_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./jio-form.page.scss?ngResource */ 76281);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 51109);




let JioFormPage = class JioFormPage {
    constructor() { }
    ngOnInit() {
    }
};
JioFormPage.ctorParameters = () => [];
JioFormPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-jio-form',
        template: _jio_form_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_jio_form_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], JioFormPage);



/***/ }),

/***/ 76281:
/*!********************************************************!*\
  !*** ./src/app/jio-form/jio-form.page.scss?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJqaW8tZm9ybS5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 97144:
/*!********************************************************!*\
  !*** ./src/app/jio-form/jio-form.page.html?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Create Jio</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-button>Create</ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n\n    <ion-item>\n      <ion-label>Message</ion-label>\n      <ion-input placeholder=\"Input Message\"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Jio Date</ion-label>\n      <ion-input placeholder=\"Input Date\"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Jio Start Time</ion-label>\n      <ion-input placeholder=\"Input Starting Time\"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Jio End Time</ion-label>\n      <ion-input placeholder=\"Input End Time\"></ion-input>\n    </ion-item>\n\n\n  </ion-list>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_jio-form_jio-form_module_ts.js.map