"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_register_register_module_ts"],{

/***/ 52216:
/*!********************************************************************************************!*\
  !*** ./src/app/profile-photo-option-component/profile-photo-option-component.component.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePhotoOptionComponentComponent": () => (/* binding */ ProfilePhotoOptionComponentComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _profile_photo_option_component_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile-photo-option-component.component.html?ngResource */ 64130);
/* harmony import */ var _profile_photo_option_component_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile-photo-option-component.component.scss?ngResource */ 87359);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 95472);






let ProfilePhotoOptionComponentComponent = class ProfilePhotoOptionComponentComponent {
    constructor(modalController, router) {
        this.modalController = modalController;
        this.router = router;
    }
    ngOnInit() { }
    closeModal() {
        this.modalController.dismiss(null, 'backdrop');
    }
    selectPhoto(url) {
        // sendURLtobackend;
        console.log("sending URL to the back: ", url);
        sessionStorage.setItem("dp_url", url);
    }
};
ProfilePhotoOptionComponentComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ModalController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
ProfilePhotoOptionComponentComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-profile-photo-option-component',
        template: _profile_photo_option_component_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_profile_photo_option_component_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ProfilePhotoOptionComponentComponent);



/***/ }),

/***/ 23963:
/*!*****************************************************!*\
  !*** ./src/app/register/register-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterPageRoutingModule": () => (/* binding */ RegisterPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register.page */ 98135);




const routes = [
    {
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_0__.RegisterPage
    }
];
let RegisterPageRoutingModule = class RegisterPageRoutingModule {
};
RegisterPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RegisterPageRoutingModule);



/***/ }),

/***/ 30812:
/*!*******************************************!*\
  !*** ./src/app/register/register.form.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterPageForm": () => (/* binding */ RegisterPageForm)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ 31777);

class RegisterPageForm {
    constructor(formBuilder) {
        this.formBuilder = formBuilder;
        this.registerForm = this.createForm();
    }
    createForm() {
        let registerForm = this.formBuilder.group({
            // This function receives objects that will inform the properties of the form that we want to create & also how each property will be validated 
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.minLength(8)]],
            cpassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required]],
            username: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required]],
            bio: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.maxLength(200)]],
            worklevel: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required]],
            telegram: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required]],
            photoURL: [''],
            provider: ['LOCAL']
        });
        registerForm.get('cpassword').setValidators(passwordMatch(registerForm));
        return registerForm;
    }
    getForm() {
        return this.registerForm;
    }
}
function passwordMatch(registerForm) {
    const password = registerForm.get('password');
    const cpassword = registerForm.get('cpassword');
    const validator = () => {
        return password.value == cpassword.value ? null : { notMatch: true };
    };
    return validator;
}


/***/ }),

/***/ 18723:
/*!*********************************************!*\
  !*** ./src/app/register/register.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterPageModule": () => (/* binding */ RegisterPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38143);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 31777);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var _register_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register-routing.module */ 23963);
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register.page */ 98135);
/* harmony import */ var _components_error_message_error_message_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/error-message/error-message.module */ 56749);








let RegisterPageModule = class RegisterPageModule {
};
RegisterPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _register_routing_module__WEBPACK_IMPORTED_MODULE_0__.RegisterPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
            _components_error_message_error_message_module__WEBPACK_IMPORTED_MODULE_2__.ErrorMessageModule
        ],
        declarations: [_register_page__WEBPACK_IMPORTED_MODULE_1__.RegisterPage]
    })
], RegisterPageModule);



/***/ }),

/***/ 98135:
/*!*******************************************!*\
  !*** ./src/app/register/register.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterPage": () => (/* binding */ RegisterPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _register_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register.page.html?ngResource */ 84754);
/* harmony import */ var _register_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register.page.scss?ngResource */ 59352);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 31777);
/* harmony import */ var _register_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register.form */ 30812);
/* harmony import */ var _service_api_authService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/api.authService */ 22550);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var _profile_photo_option_component_profile_photo_option_component_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../profile-photo-option-component/profile-photo-option-component.component */ 52216);





// import { ApiService } from './../../service/api.service';






// const { Camera } = Plugins;
let RegisterPage = class RegisterPage {
    constructor(router, formBuilder, authApiService, alertController, modalController) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.authApiService = authApiService;
        this.alertController = alertController;
        this.modalController = modalController;
        // this.mainForm();
        this.photo = "https://lh3.googleusercontent.com/PxYZd_6SRthIuCC1OvPnpNFTA5zGvyv7woU2o_g-5xrtwwhT5H6KFe4ZZYZMXjrOAyZ_1xLkOzILkw5T2HybxxliuF2l-cDqbckEFg=w600";
        this.isSubmitted = false;
    }
    // submit = false;
    // async openOptionSelection() {
    //   const modal = await this.modalController.create({
    //     component: ProfilePhotoOptionComponentComponent,
    //     //  cssClass: ‘transparent-modal’
    //   });
    openOptionSelection() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _profile_photo_option_component_profile_photo_option_component_component__WEBPACK_IMPORTED_MODULE_4__.ProfilePhotoOptionComponentComponent,
                // cssClass: ‘transparent-modal’
            });
            modal.onDidDismiss()
                .then(res => {
                this.usePicture(sessionStorage.getItem("dp_url"));
            });
            return yield modal.present();
        });
    }
    usePicture(url) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            console.log("url: " + url);
            this.photo = url;
        });
    }
    ngOnInit() {
        this.createForm();
    }
    register() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            console.log('external-register');
            this.registerForm.getForm().get('photoURL').setValue(this.photo, { onlyself: true });
            this.isSubmitted = true;
            if (!this.registerForm.getForm().valid) {
                console.log("Invalid registration");
            }
            else {
                console.log(this.registerForm.getForm().value);
                try {
                    yield this.authApiService.verifyAccount(this.registerForm.getForm().value).subscribe((dataA) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                        if (dataA.result) {
                            yield this.presentAlert('Unsuccessful Registration', "Email already registered with StudyJio");
                            this.router.navigate(['login']);
                            return;
                        }
                        else {
                            yield this.authApiService.register(this.registerForm.getForm().value).subscribe((dataR) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                                console.log(dataR);
                                if (yield dataR.success) {
                                    localStorage.setItem('userID', JSON.stringify(dataR.userID));
                                    this.presentAlert('Registration Successful', 'Hi ' + this.registerForm.getForm().get('username').value + "! Enjoy your StudyJio experience");
                                    this.router.navigate(['tabs']);
                                }
                                else {
                                    yield this.presentAlert('Unsuccessful Registration', dataR.message);
                                    this.router.navigate(['login']);
                                }
                            }));
                        }
                    }));
                }
                catch (error) {
                    console.log(error);
                }
            }
        });
    }
    createForm() {
        this.registerForm = new _register_form__WEBPACK_IMPORTED_MODULE_2__.RegisterPageForm(this.formBuilder);
    }
    presentAlert(h, b) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: h,
                subHeader: b,
                buttons: ['Dismiss']
            });
            yield alert.present();
        });
    }
};
RegisterPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder },
    { type: _service_api_authService__WEBPACK_IMPORTED_MODULE_3__.AuthApiService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ModalController }
];
RegisterPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-register',
        template: _register_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_register_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], RegisterPage);



/***/ }),

/***/ 87359:
/*!*********************************************************************************************************!*\
  !*** ./src/app/profile-photo-option-component/profile-photo-option-component.component.scss?ngResource ***!
  \*********************************************************************************************************/
/***/ ((module) => {

module.exports = "ion-content {\n  --background: transparent !important;\n}\n\n.container {\n  background-color: white;\n  color: black;\n}\n\n.title {\n  padding-left: 10px;\n}\n\n.removePhoto {\n  height: 45px;\n  width: 45px;\n  background-color: #e74d33;\n  border-radius: 22px;\n  margin: 0 auto;\n}\n\n.icon {\n  padding-top: 10px;\n  font-size: 24px;\n  color: white;\n}\n\n.galleryPhoto {\n  height: 45px;\n  width: 45px;\n  background-color: #6f2a89;\n  border-radius: 22px;\n  margin: 0 auto;\n}\n\n.cameraPhoto {\n  height: 45px;\n  width: 45px;\n  background-color: #92c45a;\n  border-radius: 22px;\n  margin: 0 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUtcGhvdG8tb3B0aW9uLWNvbXBvbmVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG9DQUFBO0FBQ0o7O0FBQ0U7RUFDRSx1QkFBQTtFQUNBLFlBQUE7QUFFSjs7QUFBRTtFQUNFLGtCQUFBO0FBR0o7O0FBREU7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FBSUo7O0FBRkU7RUFDRSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FBS0o7O0FBSEU7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FBTUo7O0FBSkU7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FBT0oiLCJmaWxlIjoicHJvZmlsZS1waG90by1vcHRpb24tY29tcG9uZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgfVxuICAuY29udGFpbmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBjb2xvcjogYmxhY2s7XG4gIH1cbiAgLnRpdGxlIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIH1cbiAgLnJlbW92ZVBob3RvIHtcbiAgICBoZWlnaHQ6IDQ1cHg7XG4gICAgd2lkdGg6IDQ1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U3NGQzMztcbiAgICBib3JkZXItcmFkaXVzOiAyMnB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICB9XG4gIC5pY29uIHtcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICB9XG4gIC5nYWxsZXJ5UGhvdG8ge1xuICAgIGhlaWdodDogNDVweDtcbiAgICB3aWR0aDogNDVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmYyYTg5O1xuICAgIGJvcmRlci1yYWRpdXM6IDIycHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gIH1cbiAgLmNhbWVyYVBob3RvIHtcbiAgICBoZWlnaHQ6IDQ1cHg7XG4gICAgd2lkdGg6IDQ1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzkyYzQ1YTtcbiAgICBib3JkZXItcmFkaXVzOiAyMnB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICB9XG4iXX0= */";

/***/ }),

/***/ 59352:
/*!********************************************************!*\
  !*** ./src/app/register/register.page.scss?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "ion-content {\n  --background: rgb(255, 255, 255);\n}\n\nion-button {\n  margin: 10px;\n}\n\n.login-logo {\n  min-height: 200px;\n  text-align: center;\n  margin-left: 80px;\n  margin-right: 80px;\n  margin-top: 40px;\n  border-bottom: 20px;\n}\n\nion-card {\n  border-top: 3px solid gray;\n  border-bottom: 3px solid gray;\n}\n\nion-input[type=email] {\n  text-transform: lowercase;\n}\n\n.container {\n  width: 200px;\n  height: 200px;\n  display: block;\n  margin: 0 auto;\n  margin-top: 30px;\n}\n\n.profile-pic {\n  width: 150px;\n  height: 150px;\n}\n\n.outer {\n  width: 100% !important;\n  height: 100% !important;\n  max-width: 150px !important;\n  /* any size */\n  max-height: 150px !important;\n  /* any size */\n  margin: auto;\n  border-radius: 100%;\n  position: relative;\n  background-size: 150px 150px;\n}\n\n.inner {\n  background-color: #1859cb;\n  width: 45px;\n  height: 45px;\n  border-radius: 100%;\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.camera-icon {\n  height: 30px;\n  width: 30px;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdDQUFBO0FBQ0o7O0FBRUE7RUFDSSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFQTtFQUNJLDBCQUFBO0VBQ0EsNkJBQUE7QUFDSjs7QUFFQTtFQUNJLHlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFDRTtFQUNFLFlBQUE7RUFDQSxhQUFBO0FBRUo7O0FBQUU7RUFDRSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsMkJBQUE7RUFBNkIsYUFBQTtFQUM3Qiw0QkFBQTtFQUE4QixhQUFBO0VBQzlCLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsNEJBQUE7QUFLSjs7QUFIRTtFQUNFLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQU1KOztBQUpFO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBT0oiLCJmaWxlIjoicmVnaXN0ZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnR7Ly8gdG8gc2V0IGJhY2tncm91bmQgY29sb3JcbiAgICAtLWJhY2tncm91bmQ6IHJnYigyNTUsIDI1NSwgMjU1KTtcbn1cblxuaW9uLWJ1dHRvbntcbiAgICBtYXJnaW46IDEwcHg7XG59XG5cbi5sb2dpbi1sb2dvIHtcbiAgICBtaW4taGVpZ2h0OiAyMDBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLWxlZnQ6IDgwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiA4MHB4O1xuICAgIG1hcmdpbi10b3A6IDQwcHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMjBweDtcbn1cblxuaW9uLWNhcmQge1xuICAgIGJvcmRlci10b3A6IDNweCBzb2xpZCBncmF5O1xuICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCBncmF5O1xuIH1cblxuaW9uLWlucHV0W3R5cGU9ZW1haWxde1xuICAgIHRleHQtdHJhbnNmb3JtOiBsb3dlcmNhc2U7XG59XG5cbi5jb250YWluZXIge1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBoZWlnaHQ6IDIwMHB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gIH1cbiAgLnByb2ZpbGUtcGljIHtcbiAgICB3aWR0aDogMTUwcHg7XG4gICAgaGVpZ2h0OiAxNTBweDtcbiAgfVxuICAub3V0ZXIge1xuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgbWF4LXdpZHRoOiAxNTBweCAhaW1wb3J0YW50OyAvKiBhbnkgc2l6ZSAqL1xuICAgIG1heC1oZWlnaHQ6IDE1MHB4ICFpbXBvcnRhbnQ7IC8qIGFueSBzaXplICovXG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTUwcHggMTUwcHg7XG4gIH1cbiAgLmlubmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTg1OWNiO1xuICAgIHdpZHRoOiA0NXB4O1xuICAgIGhlaWdodDogNDVweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG4gIC5jYW1lcmEtaWNvbiB7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfSJdfQ== */";

/***/ }),

/***/ 64130:
/*!*********************************************************************************************************!*\
  !*** ./src/app/profile-photo-option-component/profile-photo-option-component.component.html?ngResource ***!
  \*********************************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-content (click)=\"closeModal()\">\n  <ion-grid>\n    <ion-row>\n      <ion-col (click)=\"selectPhoto('https://lh3.googleusercontent.com/Czn9y9yAUpvuI6SGoVSnNe29_kZ84Ey_9saCrdpA7a5j2_8IWlUFSBM3_GMkjBPmbG8AS1jWtrzgQG4nCsyAlR_VtEI0fXMeKD8ILA=w357')\">\n        <img src = \"https://lh3.googleusercontent.com/Czn9y9yAUpvuI6SGoVSnNe29_kZ84Ey_9saCrdpA7a5j2_8IWlUFSBM3_GMkjBPmbG8AS1jWtrzgQG4nCsyAlR_VtEI0fXMeKD8ILA=w357\">\n      </ion-col>\n      <ion-col (click)=\"selectPhoto('https://lh3.googleusercontent.com/jY3UkYH6v9OvQmTs7Fgv06DXB7IxEE1OO898p9XbB5cUlTAIML2QeUCFMOZajf-kWbtyXMM4rFKYAJoKHfShPSJPl9T7qenORAq9=w600')\">\n        <img src = \"https://lh3.googleusercontent.com/jY3UkYH6v9OvQmTs7Fgv06DXB7IxEE1OO898p9XbB5cUlTAIML2QeUCFMOZajf-kWbtyXMM4rFKYAJoKHfShPSJPl9T7qenORAq9=w600\">\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col (click)=\"selectPhoto('https://lh3.googleusercontent.com/ULjfyo4LJhtV3J9K7lu1xh0YZQBa6WHPp-cwlV2C9sUIyTpgSlv554mh_97fRXsziOIu9xwpukl5NQoDbkE3mlXlWR8zU7qcWQsxVg=w357')\">\n        <img src = \"https://lh3.googleusercontent.com/ULjfyo4LJhtV3J9K7lu1xh0YZQBa6WHPp-cwlV2C9sUIyTpgSlv554mh_97fRXsziOIu9xwpukl5NQoDbkE3mlXlWR8zU7qcWQsxVg=w357\">\n      </ion-col>\n      <ion-col (click)=\"selectPhoto('https://lh3.googleusercontent.com/POesFfbLX3KLQVs6ezfRM8AlQzZLlF9rvmdR5FURUt5IsBCwpw_LN6lqoeUrIoVI5dVDjpviUdDgLsmz7oOph7vB3pxpX1aJytLI=w357')\">\n        <img src = \"https://lh3.googleusercontent.com/POesFfbLX3KLQVs6ezfRM8AlQzZLlF9rvmdR5FURUt5IsBCwpw_LN6lqoeUrIoVI5dVDjpviUdDgLsmz7oOph7vB3pxpX1aJytLI=w357\">\n      </ion-col>\n    </ion-row>    \n    <ion-row>\n      <ion-col (click)=\"selectPhoto('https://lh3.googleusercontent.com/u-2FnHbaJ3U_KCDlmg2McX9Yfo7brsAzOffqihNXCGkHljA89SPPzwdjQiVSWcsvxCoj_ydBcDNCuZvHEekaYekaMEH4XX32k9US=w357')\">\n        <img src = \"https://lh3.googleusercontent.com/u-2FnHbaJ3U_KCDlmg2McX9Yfo7brsAzOffqihNXCGkHljA89SPPzwdjQiVSWcsvxCoj_ydBcDNCuZvHEekaYekaMEH4XX32k9US=w357\">\n      </ion-col>\n      <ion-col (click)=\"selectPhoto('https://lh3.googleusercontent.com/Q4uXff5hD6T91FlaDiqZTpMu-kEgwx6IcUHXsWF_Moq5u6VOvfqKuIXN2_StL78LNiA1YW3e16vnrLq_zqvfOMtK7PLy9AcKGxWr=w357')\">\n        <img src = \"https://lh3.googleusercontent.com/Q4uXff5hD6T91FlaDiqZTpMu-kEgwx6IcUHXsWF_Moq5u6VOvfqKuIXN2_StL78LNiA1YW3e16vnrLq_zqvfOMtK7PLy9AcKGxWr=w357\">\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col (click)=\"selectPhoto('https://lh3.googleusercontent.com/ULjfyo4LJhtV3J9K7lu1xh0YZQBa6WHPp-cwlV2C9sUIyTpgSlv554mh_97fRXsziOIu9xwpukl5NQoDbkE3mlXlWR8zU7qcWQsxVg=w357')\">\n        <img src = \"https://lh3.googleusercontent.com/ULjfyo4LJhtV3J9K7lu1xh0YZQBa6WHPp-cwlV2C9sUIyTpgSlv554mh_97fRXsziOIu9xwpukl5NQoDbkE3mlXlWR8zU7qcWQsxVg=w357\">\n      </ion-col>\n      <ion-col (click)=\"selectPhoto('https://lh3.googleusercontent.com/4INjNruxtn0e_ij-wVm3w0fzhcC3tqwi62xo2ldxr0vlDcsDx42f5Q-f_nC_qIHgzrSxYtcp8VH7XwOP6lARc9wSrB5UI59hAuOSWg=w357')\">\n        <img src = \"https://lh3.googleusercontent.com/4INjNruxtn0e_ij-wVm3w0fzhcC3tqwi62xo2ldxr0vlDcsDx42f5Q-f_nC_qIHgzrSxYtcp8VH7XwOP6lARc9wSrB5UI59hAuOSWg=w357\">\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col (click)=\"selectPhoto('https://lh3.googleusercontent.com/Uaaf5rXrUhV7nztyD0wuGzGXbPtSu0iocz4Y76Qcr0Z5FQF6VMBV2MyfLyYOFCf-7dtOGjjpMVNA4mPByTn7q2-fovpWtATTGRRL=w357')\">\n        <img src = \"https://lh3.googleusercontent.com/Uaaf5rXrUhV7nztyD0wuGzGXbPtSu0iocz4Y76Qcr0Z5FQF6VMBV2MyfLyYOFCf-7dtOGjjpMVNA4mPByTn7q2-fovpWtATTGRRL=w357\">\n      </ion-col>\n      <ion-col (click)=\"selectPhoto('https://lh3.googleusercontent.com/p2VWbRroqahbC79YQ2dYm2haSRNwRxcn4dQFDJhdpVrwZHgUkOWuIg05kYcNLtqIp_7zU18-OIscFnJABtk0HIaHEoLRfSxR0d3xWA=w357')\">\n        <img src = \"https://lh3.googleusercontent.com/p2VWbRroqahbC79YQ2dYm2haSRNwRxcn4dQFDJhdpVrwZHgUkOWuIg05kYcNLtqIp_7zU18-OIscFnJABtk0HIaHEoLRfSxR0d3xWA=w357\">\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n<!-- <ion-footer class=\"container\">\n  <ion-grid class=\"ion-padding-top\">\n    <ion-row>\n      <ion-col size=\"3\" class=\"ion-text-center\">\n        <div class=\"removePhoto\">\n          <ion-icon name=\"trash\" class=\"icon\"></ion-icon>\n        </div>\n        <p>\n          Remove\n        </p>\n      </ion-col>\n      <ion-col size=\"3\" class=\"ion-text-center\" (click)=\"startCapture('Photos')\">\n       <div class=\"galleryPhoto\">\n          <ion-icon name=\"images\" class=\"icon\"></ion-icon>\n       </div>\n       <p>\n         Gallery\n       </p>\n     </ion-col>\n     <ion-col size=\"3\" class=\"ion-text-center\"   (click)=\"startCapture('Camera')\">\n       <div class=\"cameraPhoto\">\n         <ion-icon name=\"camera\" class=\"icon\"></ion-icon>\n       </div>\n       <p>\n         Camera\n       </p>\n     </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-footer> -->";

/***/ }),

/***/ 84754:
/*!********************************************************!*\
  !*** ./src/app/register/register.page.html?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title>\n      Register\n    </ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n   </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n\n  <!-- <ion-fab vertical = \"top\" horizontal = \"start\">\n    <ion-fab-button color = \"clear\" routerLink = '/login'>\n      <ion-icon name = \"arrow-back-outline\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab> -->\n  <form [formGroup]=\"registerForm.getForm()\">\n\n    <!-- <div class = \"login-logo\">\n      <img src = \"assets/img/StudyJioLogo.png\">\n    </div> -->\n\n    <div class=\"container\">\n      <div class=\"outer\" [ngStyle]=\"{'background-image': 'url(' + photo + ')'}\">\n          <div class=\"inner\" (click)=\"openOptionSelection()\">\n             <ion-icon name=\"camera\" class=\"camera-icon\"></ion-icon>\n          </div>\n       </div>\n    </div>\n\n    <ion-card color = \"clear\">\n      <ion-card-header>\n        <ion-card-title>Details</ion-card-title>\n      </ion-card-header>\n\n      <ion-card-content>\n        <ion-item>\n          <ion-label position = \"floating\" >Email</ion-label>\n          <!-- Checks the email field of the form -->\n          <ion-input type = \"email\" formControlName=\"email\"></ion-input>\n        </ion-item>\n        <app-error-message [field]= \"registerForm.getForm().get('email')\" error = \"required\" message = \"Email is required\"></app-error-message>\n        <app-error-message [field]= \"registerForm.getForm().get('email')\" error = \"email\" message = \"Email is invalid\"></app-error-message>\n\n        <ion-item>\n          <ion-label position = \"floating\">Password</ion-label>\n          <ion-input type = \"password\" formControlName=\"password\"></ion-input>\n        </ion-item>\n        <app-error-message [field]= \"registerForm.getForm().get('password')\" error = \"required\" message = \"Password is required\"></app-error-message>\n        <app-error-message [field]= \"registerForm.getForm().get('password')\" error = \"minlength\" message = \"Password has to be minimum 8 characters\"></app-error-message>\n\n\n        <ion-item>\n          <ion-label position = \"floating\">Confirm Password</ion-label>\n          <ion-input type = \"password\"  formControlName=\"cpassword\"></ion-input>\n        </ion-item>\n        <app-error-message [field]= \"registerForm.getForm().get('cpassword')\" error = \"required\" message = \"Password is required\"></app-error-message>\n        <app-error-message [field]= \"registerForm.getForm().get('cpassword')\" error = \"notMatch\" message = \"Passwords do not match\"></app-error-message>\n        \n\n        <ion-item>\n          <ion-label position = \"floating\">User Name</ion-label>\n          <ion-input type = \"text\"  formControlName=\"username\"></ion-input>\n        </ion-item>\n        <app-error-message [field]= \"registerForm.getForm().get('username')\" error = \"required\" message = \"Username is required\"></app-error-message>\n\n        <ion-item>\n          <ion-label position = \"floating\">Telegram/Contact</ion-label>\n          <ion-input type = \"text\"  formControlName=\"telegram\"></ion-input>\n        </ion-item>\n        <app-error-message [field]= \"registerForm.getForm().get('telegram')\" error = \"required\" message = \"Telegram/Contact is required\"></app-error-message>\n\n        \n        <ion-item>\n          <ion-label position = \"floating\">Bio</ion-label>\n          <ion-input type = \"text\"  formControlName=\"bio\"></ion-input>\n        </ion-item>\n        <app-error-message [field]= \"registerForm.getForm().get('bio')\" error = \"required\" message = \"Bio is required\"></app-error-message>\n\n      </ion-card-content>\n\n\n    </ion-card>\n\n\n    <ion-card>\n      <ion-card-header>\n        <ion-card-title>Work Level</ion-card-title>\n      </ion-card-header>\n\n      <ion-card-content>\n        <ion-radio-group formControlName=\"worklevel\">\n\n          <ion-item>\n            <ion-label>Secondary School</ion-label>\n            <ion-radio value=\"Secondary School\"></ion-radio>\n          </ion-item>\n      \n          <ion-item>\n            <ion-label>Junior College</ion-label>\n            <ion-radio value=\"Junior College\"></ion-radio>\n          </ion-item>\n      \n          <ion-item>\n            <ion-label>Polytechnic</ion-label>\n            <ion-radio value=\"Polytechnic\"></ion-radio>\n          </ion-item>\n      \n          <ion-item>\n            <ion-label>University</ion-label>\n            <ion-radio value=\"University\"></ion-radio>\n          </ion-item>\n\n        </ion-radio-group>\n\n      </ion-card-content>\n    </ion-card>\n    <ion-button size = full (click)=\"register()\" [disabled] = \"!registerForm.getForm().valid\" >Register</ion-button>\n  </form>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_register_register_module_ts.js.map