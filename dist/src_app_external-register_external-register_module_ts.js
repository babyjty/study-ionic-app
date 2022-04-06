"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_external-register_external-register_module_ts"],{

/***/ 94374:
/*!***********************************************************************!*\
  !*** ./src/app/external-register/external-register-routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExternalRegisterPageRoutingModule": () => (/* binding */ ExternalRegisterPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var _external_register_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./external-register.page */ 99958);




const routes = [
    {
        path: '',
        component: _external_register_page__WEBPACK_IMPORTED_MODULE_0__.ExternalRegisterPage
    }
];
let ExternalRegisterPageRoutingModule = class ExternalRegisterPageRoutingModule {
};
ExternalRegisterPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ExternalRegisterPageRoutingModule);



/***/ }),

/***/ 61158:
/*!***************************************************************!*\
  !*** ./src/app/external-register/external-register.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExternalRegisterPageModule": () => (/* binding */ ExternalRegisterPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38143);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 31777);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var _external_register_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./external-register-routing.module */ 94374);
/* harmony import */ var _external_register_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./external-register.page */ 99958);
/* harmony import */ var _components_error_message_error_message_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/error-message/error-message.module */ 56749);








let ExternalRegisterPageModule = class ExternalRegisterPageModule {
};
ExternalRegisterPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _external_register_routing_module__WEBPACK_IMPORTED_MODULE_0__.ExternalRegisterPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
            _components_error_message_error_message_module__WEBPACK_IMPORTED_MODULE_2__.ErrorMessageModule
        ],
        declarations: [_external_register_page__WEBPACK_IMPORTED_MODULE_1__.ExternalRegisterPage]
    })
], ExternalRegisterPageModule);



/***/ }),

/***/ 21350:
/*!******************************************************************!*\
  !*** ./src/app/external-register/external-register.page.form.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExternalRegisterPageForm": () => (/* binding */ ExternalRegisterPageForm)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ 31777);

class ExternalRegisterPageForm {
    constructor(email, provider, providerID, formBuilder) {
        this.email = email;
        this.provider = provider;
        this.providerID = providerID;
        this.formBuilder = formBuilder;
        this.extRegisterForm = this.createForm(this.email, this.provider, this.providerID);
    }
    createForm(email, provider, provID) {
        console.log("CreateForm");
        this.extRegisterForm = this.formBuilder.group({
            email: [email],
            provider: [provider],
            username: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required]],
            bio: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.maxLength(200)]],
            workLevel: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required]],
            telegram: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required]],
            providerID: [provID]
        });
        console.log(this.extRegisterForm.value);
        return this.extRegisterForm;
    }
    getForm() {
        return this.extRegisterForm;
    }
}


/***/ }),

/***/ 99958:
/*!*************************************************************!*\
  !*** ./src/app/external-register/external-register.page.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExternalRegisterPage": () => (/* binding */ ExternalRegisterPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _external_register_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./external-register.page.html?ngResource */ 62636);
/* harmony import */ var _external_register_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./external-register.page.scss?ngResource */ 74464);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 31777);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var _external_register_page_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./external-register.page.form */ 21350);
/* harmony import */ var _service_api_authService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../service/api.authService */ 22550);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 95472);









let ExternalRegisterPage = class ExternalRegisterPage {
    constructor(router, formbuilder, authApiService, alertController) {
        this.router = router;
        this.formbuilder = formbuilder;
        this.authApiService = authApiService;
        this.alertController = alertController;
        this.isSubmitted = false;
        console.log(this.email = this.router.getCurrentNavigation().extras.state.email.toLowerCase());
        console.log(this.provider = this.router.getCurrentNavigation().extras.state.provider);
        console.log(this.providerID = this.router.getCurrentNavigation().extras.state.providerID);
    }
    ngOnInit() {
        this.createForm();
    }
    extRegister() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            console.log('external-register');
            this.isSubmitted = true;
            if (!this.extRegisterForm.getForm().valid) {
                console.log("Invalid registration");
            }
            else {
                console.log(this.extRegisterForm.getForm().value);
                try {
                    yield this.authApiService.register(this.extRegisterForm.getForm().value).subscribe((dataR) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
                        console.log(dataR);
                        if (dataR.success) {
                            localStorage.setItem('userID', JSON.stringify(dataR.userID));
                            this.presentAlert('Registration Successful', 'Hi ' + this.extRegisterForm.getForm().get('username').value + "! Enjoy your StudyJio experience");
                            this.router.navigate(['tabs']);
                        }
                        else {
                            yield this.presentAlert('Unsuccessful Registration', dataR.message);
                            this.router.navigate(['login']);
                        }
                    }));
                }
                catch (error) {
                    console.log(error);
                }
            }
            this.router.navigate(['tabs']);
        });
    }
    createForm() {
        console.log(this.email, this.provider, this.providerID, "createForm");
        this.extRegisterForm = new _external_register_page_form__WEBPACK_IMPORTED_MODULE_2__.ExternalRegisterPageForm(this.email, this.provider, this.providerID, this.formbuilder);
    }
    presentAlert(h, b) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: h,
                subHeader: b,
                buttons: ['Dismiss']
            });
            yield alert.present();
        });
    }
};
ExternalRegisterPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder },
    { type: _service_api_authService__WEBPACK_IMPORTED_MODULE_3__.AuthApiService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController }
];
ExternalRegisterPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-external-register',
        template: _external_register_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_external_register_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ExternalRegisterPage);



/***/ }),

/***/ 74464:
/*!**************************************************************************!*\
  !*** ./src/app/external-register/external-register.page.scss?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = "ion-content {\n  --background: rgb(255, 255, 255);\n}\n\nion-button {\n  margin: 10px;\n}\n\n.login-logo {\n  min-height: 200px;\n  text-align: center;\n  margin-left: 80px;\n  margin-right: 80px;\n  margin-top: 40px;\n  border-bottom: 20px;\n}\n\nion-card {\n  border-top: 3px solid gray;\n  border-bottom: 3px solid gray;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsLXJlZ2lzdGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdDQUFBO0FBQ0o7O0FBRUE7RUFDSSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFQTtFQUNJLDBCQUFBO0VBQ0EsNkJBQUE7QUFDSiIsImZpbGUiOiJleHRlcm5hbC1yZWdpc3Rlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudHsvLyB0byBzZXQgYmFja2dyb3VuZCBjb2xvclxuICAgIC0tYmFja2dyb3VuZDogcmdiKDI1NSwgMjU1LCAyNTUpO1xufVxuXG5pb24tYnV0dG9ue1xuICAgIG1hcmdpbjogMTBweDtcbn1cblxuLmxvZ2luLWxvZ28ge1xuICAgIG1pbi1oZWlnaHQ6IDIwMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tbGVmdDogODBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDgwcHg7XG4gICAgbWFyZ2luLXRvcDogNDBweDtcbiAgICBib3JkZXItYm90dG9tOiAyMHB4O1xufVxuXG5pb24tY2FyZCB7XG4gICAgYm9yZGVyLXRvcDogM3B4IHNvbGlkIGdyYXk7XG4gICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIGdyYXk7XG4gfVxuXG4iXX0= */";

/***/ }),

/***/ 62636:
/*!**************************************************************************!*\
  !*** ./src/app/external-register/external-register.page.html?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = "\n<ion-content>\n\n  <ion-fab vertical = \"top\" horizontal = \"start\">\n    <ion-fab-button color = \"clear\" routerLink = '/login'>\n      <ion-icon name = \"arrow-back-outline\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n  \n  <form [formGroup]=\"extRegisterForm.getForm()\">\n    <div class = \"login-logo\">\n      <img src = \"assets/img/StudyJioLogo.png\">\n    </div>\n    <ion-card color = \"clear\">\n      <ion-card-header>\n        <ion-card-title>Details</ion-card-title>\n      </ion-card-header>\n\n      <ion-card-content>\n        <ion-item>\n          <!-- <ion-label position = \"floating\">Email</ion-label> -->\n          <ion-label>{{email}}</ion-label>\n        </ion-item>\n\n        <ion-item>\n          <!-- <ion-label position = \"floating\">agent</ion-label> -->\n          <ion-label>{{provider}}</ion-label>\n        </ion-item>\n\n        <ion-item>\n          <ion-label position = \"floating\">User Name</ion-label>\n          <ion-input type = \"text\"  formControlName=\"username\"></ion-input>\n        </ion-item>\n        <app-error-message [field]= \"extRegisterForm.getForm().get('username')\" error = \"required\" message = \"Username is required\"></app-error-message>\n\n        <ion-item>\n          <ion-label position = \"floating\">Telegram/Contact</ion-label>\n          <ion-input type = \"text\"  formControlName=\"telegram\"></ion-input>\n        </ion-item>\n        <app-error-message [field]= \"extRegisterForm.getForm().get('telegram')\" error = \"required\" message = \"Telegram/Contact is required\"></app-error-message>\n\n        <ion-item>\n          <ion-label position = \"floating\">Bio</ion-label>\n          <ion-input type = \"text\"  formControlName=\"bio\"></ion-input>\n        </ion-item>\n        <app-error-message [field]= \"extRegisterForm.getForm().get('bio')\" error = \"required\" message = \"Bio is required\"></app-error-message>\n      </ion-card-content>\n    </ion-card>\n\n\n    <ion-card>\n      <ion-card-header>\n        <ion-card-title>Work Level</ion-card-title>\n      </ion-card-header>\n\n      <ion-card-content>\n        <ion-radio-group formControlName = \"workLevel\">\n\n          <ion-item>\n            <ion-label>Secondary School</ion-label>\n            <ion-radio value=\"Secondary School\"></ion-radio>\n          </ion-item>\n      \n          <ion-item>\n            <ion-label>Junior College</ion-label>\n            <ion-radio value=\"Junior College\"></ion-radio>\n          </ion-item>\n      \n          <ion-item>\n            <ion-label>Polytechnic</ion-label>\n            <ion-radio value=\"Polytechnic\"></ion-radio>\n          </ion-item>\n      \n          <ion-item>\n            <ion-label>University</ion-label>\n            <ion-radio value=\"University\"></ion-radio>\n          </ion-item>\n        </ion-radio-group>\n        <app-error-message [field]= \"extRegisterForm.getForm().get('workLevel')\" error = \"required\" message = \"Work Level is required\"></app-error-message>\n\n\n      </ion-card-content>\n    </ion-card>\n    <ion-button (click) = \"extRegister()\" size = full [disabled] = \"!extRegisterForm.getForm().valid\" >Register</ion-button>\n  </form>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_external-register_external-register_module_ts.js.map