"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_profile-edit_profile-edit_module_ts"],{

/***/ 61135:
/*!*************************************************************!*\
  !*** ./src/app/profile-edit/profile-edit-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileEditPageRoutingModule": () => (/* binding */ ProfileEditPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var _profile_edit_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile-edit.page */ 62258);




const routes = [
    {
        path: '',
        component: _profile_edit_page__WEBPACK_IMPORTED_MODULE_0__.ProfileEditPage
    }
];
let ProfileEditPageRoutingModule = class ProfileEditPageRoutingModule {
};
ProfileEditPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ProfileEditPageRoutingModule);



/***/ }),

/***/ 39738:
/*!*****************************************************!*\
  !*** ./src/app/profile-edit/profile-edit.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileEditPageModule": () => (/* binding */ ProfileEditPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38143);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 31777);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var _profile_edit_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile-edit-routing.module */ 61135);
/* harmony import */ var _profile_edit_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile-edit.page */ 62258);







let ProfileEditPageModule = class ProfileEditPageModule {
};
ProfileEditPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _profile_edit_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProfileEditPageRoutingModule
        ],
        declarations: [_profile_edit_page__WEBPACK_IMPORTED_MODULE_1__.ProfileEditPage]
    })
], ProfileEditPageModule);



/***/ }),

/***/ 62258:
/*!***************************************************!*\
  !*** ./src/app/profile-edit/profile-edit.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileEditPage": () => (/* binding */ ProfileEditPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _profile_edit_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile-edit.page.html?ngResource */ 15690);
/* harmony import */ var _profile_edit_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile-edit.page.scss?ngResource */ 95536);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 51109);




let ProfileEditPage = class ProfileEditPage {
    constructor() { }
    ngOnInit() {
    }
};
ProfileEditPage.ctorParameters = () => [];
ProfileEditPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-profile-edit',
        template: _profile_edit_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_profile_edit_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ProfileEditPage);



/***/ }),

/***/ 95536:
/*!****************************************************************!*\
  !*** ./src/app/profile-edit/profile-edit.page.scss?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9maWxlLWVkaXQucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 15690:
/*!****************************************************************!*\
  !*** ./src/app/profile-edit/profile-edit.page.html?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Edit Profile</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-button>Save</ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n\n    <ion-item>\n      <ion-label>change profile photo</ion-label>\n      <ion-input placeholder=\"Enter Input\"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Display Name</ion-label>\n      <ion-input maxlength=\"20\" placeholder=\"Display Name\"></ion-input>\n    </ion-item>\n\n    <ion-item> \n      <ion-label>Bio</ion-label>\n      <ion-input maxlength=\"160\" placeholder=\"Bio\"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Work Level</ion-label>\n      <ion-select placeholder=\"Select One\">\n        <ion-select-option value=\"s\">Secondary School</ion-select-option>\n        <ion-select-option value=\"i\">ITE</ion-select-option>\n        <ion-select-option value=\"j\">Junior College</ion-select-option>\n        <ion-select-option value=\"p\">Polytechnic</ion-select-option>\n        <ion-select-option value=\"j\">University</ion-select-option>\n        <ion-select-option value=\"w\">Professional</ion-select-option>\n      </ion-select>\n    </ion-item>\n\n  </ion-list>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_profile-edit_profile-edit_module_ts.js.map