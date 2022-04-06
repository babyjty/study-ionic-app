"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_loading_loading_module_ts"],{

/***/ 81571:
/*!***************************************************!*\
  !*** ./src/app/loading/loading-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoadingPageRoutingModule": () => (/* binding */ LoadingPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var _loading_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loading.page */ 78532);




const routes = [
    {
        path: '',
        component: _loading_page__WEBPACK_IMPORTED_MODULE_0__.LoadingPage
    }
];
let LoadingPageRoutingModule = class LoadingPageRoutingModule {
};
LoadingPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoadingPageRoutingModule);



/***/ }),

/***/ 3416:
/*!*******************************************!*\
  !*** ./src/app/loading/loading.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoadingPageModule": () => (/* binding */ LoadingPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38143);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 31777);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var _loading_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loading-routing.module */ 81571);
/* harmony import */ var _loading_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loading.page */ 78532);







let LoadingPageModule = class LoadingPageModule {
};
LoadingPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _loading_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoadingPageRoutingModule
        ],
        declarations: [_loading_page__WEBPACK_IMPORTED_MODULE_1__.LoadingPage]
    })
], LoadingPageModule);



/***/ }),

/***/ 78532:
/*!*****************************************!*\
  !*** ./src/app/loading/loading.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoadingPage": () => (/* binding */ LoadingPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _loading_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loading.page.html?ngResource */ 60293);
/* harmony import */ var _loading_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loading.page.scss?ngResource */ 45659);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 65485);





let LoadingPage = class LoadingPage {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
        setTimeout(() => {
            this.router.navigate(['login']);
        }, 100);
    }
};
LoadingPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
LoadingPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-loading',
        template: _loading_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_loading_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], LoadingPage);



/***/ }),

/***/ 45659:
/*!******************************************************!*\
  !*** ./src/app/loading/loading.page.scss?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = ".flex-center {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvYWRpbmcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FBQ0oiLCJmaWxlIjoibG9hZGluZy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmxleC1jZW50ZXIgeyAvLyAuIGFsbG93cyBtZSB0byBpZGVudGlmeSBhIGNsYXNzIG9mIGEgY29tcG9uZW50IHRoYXQgLmZsZXgtY2VudGVyIHdvdWxkIGlkZW50aWZ5IHRoaXMgY2xhc3NcbiAgICBkaXNwbGF5OiBmbGV4OyAvLyBkaXNwbGF5IGlzIG9mIHR5cGUgZmxleFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOy8vIGp1c3RpZnkgdGhlIGNvbnRlbnQgdG8gdGhlIGNlbnRlciBvZiB0aGUgc2NyZWVuXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDEwMCU7IC8vIHRvIGFkanVzdCB0aGUgdmVydGljYWwgaGVpZ2h0IHRvIGNvbnNpZGVyIHJhbmdlIG9mIDEwMCUgb2Ygc2NyZWVuXG59Il19 */";

/***/ }),

/***/ 60293:
/*!******************************************************!*\
  !*** ./src/app/loading/loading.page.html?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\n  <div class = \"flex-center\">\n    <ion-spinner name=\"lines\"></ion-spinner>\n  </div>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_loading_loading_module_ts.js.map