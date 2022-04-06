"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_forget_forget_module_ts"],{

/***/ 70386:
/*!*************************************************!*\
  !*** ./src/app/forget/forget-routing.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForgetPageRoutingModule": () => (/* binding */ ForgetPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var _forget_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forget.page */ 18946);




const routes = [
    {
        path: '',
        component: _forget_page__WEBPACK_IMPORTED_MODULE_0__.ForgetPage
    }
];
let ForgetPageRoutingModule = class ForgetPageRoutingModule {
};
ForgetPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ForgetPageRoutingModule);



/***/ }),

/***/ 29296:
/*!*****************************************!*\
  !*** ./src/app/forget/forget.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForgetPageModule": () => (/* binding */ ForgetPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38143);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 31777);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var _forget_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forget-routing.module */ 70386);
/* harmony import */ var _forget_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forget.page */ 18946);
/* harmony import */ var _components_error_message_error_message_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/error-message/error-message.module */ 56749);








let ForgetPageModule = class ForgetPageModule {
};
ForgetPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _forget_routing_module__WEBPACK_IMPORTED_MODULE_0__.ForgetPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
            _components_error_message_error_message_module__WEBPACK_IMPORTED_MODULE_2__.ErrorMessageModule
        ],
        declarations: [_forget_page__WEBPACK_IMPORTED_MODULE_1__.ForgetPage]
    })
], ForgetPageModule);



/***/ }),

/***/ 47341:
/*!********************************************!*\
  !*** ./src/app/forget/forget.page.form.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForgetPageForm": () => (/* binding */ ForgetPageForm)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ 31777);

class ForgetPageForm {
    constructor(formBuilder) {
        this.formBuilder = formBuilder;
        this.forgetForm = this.createForm();
    }
    createForm() {
        return this.forgetForm = this.formBuilder.group({
            // This function receives objects that will inform the properties of the form that we want to create & also how each property will be validated 
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.email]],
        });
    }
    getForm() {
        return this.forgetForm;
    }
}


/***/ }),

/***/ 18946:
/*!***************************************!*\
  !*** ./src/app/forget/forget.page.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForgetPage": () => (/* binding */ ForgetPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _forget_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forget.page.html?ngResource */ 59113);
/* harmony import */ var _forget_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forget.page.scss?ngResource */ 7698);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 31777);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var _forget_page_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./forget.page.form */ 47341);







let ForgetPage = class ForgetPage {
    constructor(router, formBuilder) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.isSubmitted = false;
        // this.mainForm();
    }
    ngOnInit() {
        this.createForm();
    }
    confirm() {
        this.isSubmitted = true;
        if (!this.forgetForm.getForm().valid) {
            console.log("Invalid email");
        }
        else {
            console.log(this.forgetForm.getForm().value);
        }
        this.router.navigate(['loading']);
    }
    createForm() {
        this.forgetForm = new _forget_page_form__WEBPACK_IMPORTED_MODULE_2__.ForgetPageForm(this.formBuilder);
    }
};
ForgetPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder }
];
ForgetPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-forget',
        template: _forget_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_forget_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ForgetPage);



/***/ }),

/***/ 7698:
/*!****************************************************!*\
  !*** ./src/app/forget/forget.page.scss?ngResource ***!
  \****************************************************/
/***/ ((module) => {

module.exports = ".login-logo {\n  min-height: 200px;\n  text-align: center;\n  margin-left: 80px;\n  margin-right: 80px;\n  margin-top: 40px;\n  border-bottom: 10px;\n}\n\nion-card {\n  border-top: 3px solid gray;\n  border-bottom: 3px solid gray;\n}\n\nion-item {\n  margin-bottom: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcmdldC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFQTtFQUNJLDBCQUFBO0VBQ0EsNkJBQUE7QUFDSjs7QUFFQztFQUNJLG1CQUFBO0FBQ0wiLCJmaWxlIjoiZm9yZ2V0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dpbi1sb2dvIHtcbiAgICBtaW4taGVpZ2h0OiAyMDBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLWxlZnQ6IDgwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiA4MHB4O1xuICAgIG1hcmdpbi10b3A6IDQwcHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMTBweDtcbn1cblxuaW9uLWNhcmQge1xuICAgIGJvcmRlci10b3A6IDNweCBzb2xpZCBncmF5O1xuICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCBncmF5O1xuIH1cblxuIGlvbi1pdGVte1xuICAgICBtYXJnaW4tYm90dG9tOjMwcHg7XG4gfSJdfQ== */";

/***/ }),

/***/ 59113:
/*!****************************************************!*\
  !*** ./src/app/forget/forget.page.html?ngResource ***!
  \****************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\n  <ion-fab vertical = \"top\" horizontal = \"start\">\n    <ion-fab-button color = \"clear\" routerLink = '/login'>\n      <ion-icon name = \"arrow-back-outline\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n  <form [formGroup]=\"forgetForm.getForm()\">\n    <div class = \"login-logo\">\n      <img src = \"assets/img/StudyJioLogo.png\">\n    </div>\n    <ion-card color = \"clear\">\n      <ion-card-content>\n        <ion-item>\n          <ion-label position = \"floating\">Enter Email</ion-label>\n          <ion-input type = \"email\" formControlName=\"email\"></ion-input>\n        </ion-item>\n        <app-error-message [field]= \"forgetForm.getForm().get('email')\" error = \"required\" message = \"Email is required\"></app-error-message>\n        <app-error-message [field]= \"forgetForm.getForm().get('email')\" error = \"email\" message = \"Email is invalid\"></app-error-message>\n\n        \n        <ion-button size = full [disabled] = \"!forgetForm.getForm().valid\" (click) = \"confirm()\">Request Password Reset</ion-button>\n      </ion-card-content>\n    </ion-card>\n  </form>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_forget_forget_module_ts.js.map