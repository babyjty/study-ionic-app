"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_login_login_module_ts"],{

/***/ 74867:
/*!*****************************************************************!*\
  !*** ./src/app/components/error-popup/error-popup.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErrorPopupComponent": () => (/* binding */ ErrorPopupComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _error_popup_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./error-popup.component.html?ngResource */ 79966);
/* harmony import */ var _error_popup_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./error-popup.component.scss?ngResource */ 64294);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 51109);




let ErrorPopupComponent = class ErrorPopupComponent {
    constructor() { }
    ngOnInit() { }
};
ErrorPopupComponent.ctorParameters = () => [];
ErrorPopupComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-error-popup',
        template: _error_popup_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_error_popup_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ErrorPopupComponent);



/***/ }),

/***/ 712:
/*!**************************************************************!*\
  !*** ./src/app/components/error-popup/error-popup.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErrorPopupModule": () => (/* binding */ ErrorPopupModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 38143);
/* harmony import */ var src_app_components_error_popup_error_popup_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/components/error-popup/error-popup.component */ 74867);




let ErrorPopupModule = class ErrorPopupModule {
};
ErrorPopupModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule],
        exports: [src_app_components_error_popup_error_popup_component__WEBPACK_IMPORTED_MODULE_0__.ErrorPopupComponent],
        declarations: [src_app_components_error_popup_error_popup_component__WEBPACK_IMPORTED_MODULE_0__.ErrorPopupComponent]
    })
], ErrorPopupModule);



/***/ }),

/***/ 45393:
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageRoutingModule": () => (/* binding */ LoginPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 66825);




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ 80107:
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageModule": () => (/* binding */ LoginPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38143);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 31777);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 45393);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page */ 66825);
/* harmony import */ var _components_error_message_error_message_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/error-message/error-message.module */ 56749);
/* harmony import */ var _components_error_popup_error_popup_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/error-popup/error-popup.module */ 712);









let LoginPageModule = class LoginPageModule {
};
LoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
            _components_error_message_error_message_module__WEBPACK_IMPORTED_MODULE_2__.ErrorMessageModule,
            _components_error_popup_error_popup_module__WEBPACK_IMPORTED_MODULE_3__.ErrorPopupModule
        ],
        declarations: [
            _login_page__WEBPACK_IMPORTED_MODULE_1__.LoginPage,
        ]
    })
], LoginPageModule);



/***/ }),

/***/ 85953:
/*!******************************************!*\
  !*** ./src/app/login/login.page.form.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageForm": () => (/* binding */ LoginPageForm)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ 31777);

class LoginPageForm {
    constructor(formBuilder) {
        this.formBuilder = formBuilder;
    }
    createForm() {
        return this.formBuilder.group({
            // This function receives objects that will inform the properties of the form that we want to create & also how each property will be validated 
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required]]
        });
    }
}


/***/ }),

/***/ 66825:
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page.html?ngResource */ 41729);
/* harmony import */ var _login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.scss?ngResource */ 84053);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 31777);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var _login_page_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.page.form */ 85953);
/* harmony import */ var _service_api_authService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../service/api.authService */ 22550);
/* harmony import */ var angularx_social_login__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angularx-social-login */ 23649);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 95472);










let LoginPage = class LoginPage {
    constructor(router, // this component is using the router
    formBuilder, authApiService, authService, alertController) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.authApiService = authApiService;
        this.authService = authService;
        this.alertController = alertController;
        this.loggedIn = false;
    }
    ngOnInit() {
        // Create form as soon as page is initialized --> have to create inside ngOnInIt() 
        this.form = new _login_page_form__WEBPACK_IMPORTED_MODULE_2__.LoginPageForm(this.formBuilder).createForm();
        this.authService.authState.subscribe((user) => {
            localStorage.setItem('profile', JSON.stringify(user));
            this.user = user;
            this.loggedIn = (user != null);
        });
    }
    register() {
        this.router.navigate(['register']);
    }
    toGoogle() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            try {
                yield this.authService.signIn(angularx_social_login__WEBPACK_IMPORTED_MODULE_5__.GoogleLoginProvider.PROVIDER_ID).then((data) => {
                    localStorage.setItem('google_auth', JSON.stringify(data));
                    console.log("inside");
                    console.log(data);
                });
                if (this.user != null) {
                    try {
                        this.authApiService.verifyAccount(this.user).subscribe((dataR) => {
                            console.log(dataR);
                            if (dataR.result) {
                                this.router.navigateByUrl('/tabs', { state: { email: this.user.email, userID: dataR.userID } });
                                localStorage.setItem('userID', JSON.stringify(dataR.userID));
                            }
                            else {
                                console.log(this.user);
                                console.log('external');
                                this.router.navigateByUrl('/external-register', { state: { email: this.user.email, provider: this.user.provider, providerID: this.user.id } });
                            }
                        });
                    }
                    catch (error) {
                        console.log(error);
                    }
                }
                else {
                    console.log('Invalid');
                }
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    toFacebook() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            try {
                yield this.authService.signIn(angularx_social_login__WEBPACK_IMPORTED_MODULE_5__.FacebookLoginProvider.PROVIDER_ID).then((data) => {
                    localStorage.setItem('google_auth', JSON.stringify(data));
                    console.log("inside");
                    console.log(data);
                });
                if (this.user != null) {
                    try {
                        yield this.authApiService.verifyAccount(this.user.email).subscribe((dataR) => {
                            console.log(dataR);
                            if (dataR.result) {
                                localStorage.setItem('userID', JSON.stringify(dataR.userID));
                                this.router.navigateByUrl('/tabs', { state: { email: this.user.email, userID: dataR.userID } });
                            }
                            else {
                                console.log(this.user);
                                console.log('external');
                                this.router.navigateByUrl('/external-register', { state: { email: this.user.email, provider: this.user.provider, providerID: this.user.id } });
                            }
                        });
                    }
                    catch (error) {
                        console.log(error);
                    }
                }
                else {
                    console.log('Invalid');
                }
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    logOut() {
        localStorage.setItem('userID', JSON.stringify(''));
        this.authService.signOut();
    }
    login() {
        console.log(this.form.value);
        if (!this.form.valid) {
            console.log("Invalid registration");
        }
        else {
            try {
                let outcome = this.authApiService.localLogin(this.form.value).subscribe((dataR) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
                    console.log(dataR);
                    if (dataR.loginSuccess) {
                        this.router.navigate(['tabs']);
                        localStorage.setItem('userID', JSON.stringify(dataR.userID));
                    }
                    else {
                        yield this.presentAlert("Invalid Email/Password", "Kindly key in valid email and password");
                        console.log("No such account");
                        this.form = new _login_page_form__WEBPACK_IMPORTED_MODULE_2__.LoginPageForm(this.formBuilder).createForm();
                    }
                }));
            }
            catch (error) {
                console.log(error);
            }
        }
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
LoginPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder },
    { type: _service_api_authService__WEBPACK_IMPORTED_MODULE_3__.AuthApiService },
    { type: angularx_social_login__WEBPACK_IMPORTED_MODULE_5__.SocialAuthService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.AlertController }
];
LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-login',
        template: _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], LoginPage);



/***/ }),

/***/ 64294:
/*!******************************************************************************!*\
  !*** ./src/app/components/error-popup/error-popup.component.scss?ngResource ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlcnJvci1wb3B1cC5jb21wb25lbnQuc2NzcyJ9 */";

/***/ }),

/***/ 84053:
/*!**************************************************!*\
  !*** ./src/app/login/login.page.scss?ngResource ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "ion-button[color=dark] {\n  text-transform: initial;\n}\n\nion-content {\n  --background: rgb(253, 253, 253);\n}\n\n.login-logo {\n  min-height: 200px;\n  text-align: center;\n  margin-left: 60px;\n  margin-right: 60px;\n  margin-top: 50px;\n  margin-bottom: 20px;\n}\n\n.relative-center {\n  justify-content: center;\n  align-items: center;\n  margin-left: 40px;\n  margin-right: 40px;\n}\n\nion-card {\n  border-top: 3px solid gray;\n  border-bottom: 3px solid gray;\n}\n\nion-input[type=email] {\n  text-transform: lowercase;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHVCQUFBO0FBQ0o7O0FBRUE7RUFDSSxnQ0FBQTtBQUNKOztBQUVBO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7RUFFSSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUFKOztBQUtBO0VBQ0ksMEJBQUE7RUFDQSw2QkFBQTtBQUZKOztBQUtDO0VBQ0cseUJBQUE7QUFGSiIsImZpbGUiOiJsb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tYnV0dG9uW2NvbG9yID0gXCJkYXJrXCJde1xuICAgIHRleHQtdHJhbnNmb3JtOiBpbml0aWFsO1xufVxuXG5pb24tY29udGVudHsvLyB0byBzZXQgYmFja2dyb3VuZCBjb2xvclxuICAgIC0tYmFja2dyb3VuZDogcmdiKDI1MywgMjUzLCAyNTMpO1xufVxuXG4ubG9naW4tbG9nbyB7XG4gICAgbWluLWhlaWdodDogMjAwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi1sZWZ0OiA2MHB4O1xuICAgIG1hcmdpbi1yaWdodDogNjBweDtcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5yZWxhdGl2ZS1jZW50ZXIgeyAvLyAuIGFsbG93cyBtZSB0byBpZGVudGlmeSBhIGNsYXNzIG9mIGEgY29tcG9uZW50IHRoYXQgLmZsZXgtY2VudGVyIHdvdWxkIGlkZW50aWZ5IHRoaXMgY2xhc3NcbiAgICAvL2Rpc3BsYXk6IGZsZXg7IC8vIGRpc3BsYXkgaXMgb2YgdHlwZSBmbGV4XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7Ly8ganVzdGlmeSB0aGUgY29udGVudCB0byB0aGUgY2VudGVyIG9mIHRoZSBzY3JlZW5cbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1hcmdpbi1sZWZ0OiA0MHB4O1xuICAgIG1hcmdpbi1yaWdodDogNDBweDtcblxuICAgIC8vaGVpZ2h0OiA0NSU7IC8vIHRvIGFkanVzdCB0aGUgdmVydGljYWwgaGVpZ2h0IHRvIGNvbnNpZGVyIHJhbmdlIG9mIDEwMCUgb2Ygc2NyZWVuXG59XG5cbmlvbi1jYXJkIHtcbiAgICBib3JkZXItdG9wOiAzcHggc29saWQgZ3JheTtcbiAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgZ3JheTtcbiB9XG5cbiBpb24taW5wdXRbdHlwZT1lbWFpbF17XG4gICAgdGV4dC10cmFuc2Zvcm06IGxvd2VyY2FzZTtcbn0iXX0= */";

/***/ }),

/***/ 79966:
/*!******************************************************************************!*\
  !*** ./src/app/components/error-popup/error-popup.component.html?ngResource ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = "<p>\n  error-popup works!\n</p>\n";

/***/ }),

/***/ 41729:
/*!**************************************************!*\
  !*** ./src/app/login/login.page.html?ngResource ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\n  <div class = \"login-logo\">\n    <img src = \"assets/img/StudyJioLogo.png\">\n  </div>\n\n  \n  \n  <div class = \"relative-center\">\n    <form [formGroup] = \"form\">\n      <!-- ion-card from ionic documentation -->\n      <ion-card >\n        <!-- <ion-card-header>\n          <ion-card-title>Login</ion-card-title> -->\n        <!-- </ion-card-header> -->\n      \n        <ion-card-content>\n          <ion-item>\n            <ion-label position=\"floating\">Email</ion-label>\n            <ion-input class = \"registerEmail\" type = \"email\" formControlName = \"email\"></ion-input>\n          </ion-item>\n\n          <!-- check if field is touched & check if there is error in the email field and if the error is of type required -->\n          <!-- <ion-label color = \"danger\" *ngIf = \"form.get('email').touched && form.get('email').errors?.required\">Email is mandatory</ion-label> -->\n          <!-- check if field is touched & check if there is error in the email field and if the error is of type email -->\n          <!-- <ion-label color = \"danger\" *ngIf = \"form.get('email').touched && form.get('email').errors?.email\">Email is invalid</ion-label>  -->\n          \n          <app-error-message [field]= \"form.get('email')\" error = \"required\" message = \"Email is required\"></app-error-message>\n          <app-error-message [field]= \"form.get('email')\" error = \"email\" message = \"Email is invalid\"></app-error-message>\n\n          <ion-item>\n            <ion-label position=\"floating\">Password</ion-label>\n            <ion-input type = \"password\" formControlName = \"password\"></ion-input>\n          </ion-item>\n          <!-- check if field is touched & check if there is error in the password field and if the error is of type required -->\n          <!-- <ion-label color = \"danger\" *ngIf = \"form.get('password').touched && form.get('password').errors?.required\">Password is mandatory</ion-label> -->\n\n          <app-error-message [field]= \"form.get('password')\" error = \"required\" message = \"Password is required\"></app-error-message>\n\n\n        </ion-card-content>\n        <ion-button size = full (click) = \"login()\" [disabled] = \"!form.valid\">LOGIN</ion-button>\n        <ion-button fill = \"clear\" size = full (click) = \"register()\">Register</ion-button>\n        <!--<ion-button color=\"dark\" fill = \"clear\" size = full routerLink = '/forget'>Forget Password</ion-button>-->\n        <div class = \"ion-text-center\">\n          <p> ________________________ </p>\n          <p> Connect Using</p>\n        </div>\n        <div class = 'ion-text-center'>\n          <ion-button color = \"clear\" (click) = \"toGoogle()\">\n            <img src = \"assets/img/GoogleLogo.png\" style = \"width:100% ; height: 100%\">\n          </ion-button>\n          <ion-button color = \"clear\" (click) = \"toFacebook()\">\n            <img src = \"assets/img/FacebookLogo.png\" style = \"width:100% ; height: 100%\">\n          </ion-button>\n        </div>\n      </ion-card>\n    </form>\n  </div>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_login_login_module_ts.js.map