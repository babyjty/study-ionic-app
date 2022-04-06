"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_jio-details_jio-details_module_ts"],{

/***/ 52474:
/*!***********************************************************!*\
  !*** ./src/app/jio-details/jio-details-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JioDetailsPageRoutingModule": () => (/* binding */ JioDetailsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var _jio_details_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./jio-details.page */ 90333);




const routes = [
    {
        path: '',
        component: _jio_details_page__WEBPACK_IMPORTED_MODULE_0__.JioDetailsPage
    }
];
let JioDetailsPageRoutingModule = class JioDetailsPageRoutingModule {
};
JioDetailsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], JioDetailsPageRoutingModule);



/***/ }),

/***/ 31597:
/*!***************************************************!*\
  !*** ./src/app/jio-details/jio-details.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JioDetailsPageModule": () => (/* binding */ JioDetailsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38143);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 31777);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var _jio_details_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./jio-details-routing.module */ 52474);
/* harmony import */ var _jio_details_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./jio-details.page */ 90333);







let JioDetailsPageModule = class JioDetailsPageModule {
};
JioDetailsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _jio_details_routing_module__WEBPACK_IMPORTED_MODULE_0__.JioDetailsPageRoutingModule
        ],
        declarations: [_jio_details_page__WEBPACK_IMPORTED_MODULE_1__.JioDetailsPage]
    })
], JioDetailsPageModule);



/***/ }),

/***/ 90333:
/*!*************************************************!*\
  !*** ./src/app/jio-details/jio-details.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JioDetailsPage": () => (/* binding */ JioDetailsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _jio_details_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./jio-details.page.html?ngResource */ 24870);
/* harmony import */ var _jio_details_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./jio-details.page.scss?ngResource */ 32998);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 65485);





let JioDetailsPage = class JioDetailsPage {
    constructor(route) {
        this.route = route;
    }
    nextpage() {
        this.route.navigate(['/jio-list']);
    }
    ngOnInit() {
    }
    // acceptJio(jio){
    //   try{
    //   } catch(error){console.log(error)}
    // }
    cancelJio() {
    }
};
JioDetailsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
JioDetailsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-jio-details',
        template: _jio_details_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_jio_details_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], JioDetailsPage);

// jios = [
//   {
//     message: 'Message 1';,
//      name: 'Name 1';,
//     address: 'Address 1';,
//     contact: 'Contact 1';,
//     closing: 'Closing 1';,
//     opening: 'Opening 1';
//     crowedness: 'Crowedness 1';
//     description: 'Description 1';,
//     photo: 'Photo 1';,
//   }
// ]


/***/ }),

/***/ 32998:
/*!**************************************************************!*\
  !*** ./src/app/jio-details/jio-details.page.scss?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = ".speaker-card ion-card-header {\n  padding: 0;\n}\n\n.speaker-card ion-card-content {\n  flex: 1 1 auto;\n  padding: 0;\n}\n\n.ios ion-list {\n  margin-bottom: 10px;\n}\n\n.md ion-list {\n  border-top: 1px solid var(--ion-color-step-150, #d7d8da);\n  padding: 0;\n}\n\nion-avatar {\n  position: absolute;\n  top: 10px;\n  right: 0px;\n  height: 100px;\n  width: 100px;\n}\n\n.description p {\n  width: 75%;\n}\n\n.location p {\n  font-weight: bold;\n}\n\n.location p1 {\n  font-weight: bold;\n}\n\n.location p2 {\n  font-weight: bold;\n}\n\n.location p3 {\n  font-weight: bold;\n}\n\n.location p4 {\n  font-weight: bold;\n}\n\n.location p5 {\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImppby1kZXRhaWxzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFVBQUE7QUFDSjs7QUFFRTtFQUNFLGNBQUE7RUFFQSxVQUFBO0FBQUo7O0FBR0U7RUFDRSxtQkFBQTtBQUFKOztBQUdFO0VBQ0Usd0RBQUE7RUFFQSxVQUFBO0FBREo7O0FBSUE7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUFESjs7QUFJQTtFQUNJLFVBQUE7QUFESjs7QUFJQTtFQUNJLGlCQUFBO0FBREo7O0FBSUE7RUFDSSxpQkFBQTtBQURKOztBQUlBO0VBQ0ksaUJBQUE7QUFESjs7QUFJQTtFQUNJLGlCQUFBO0FBREo7O0FBSUE7RUFDSSxpQkFBQTtBQURKOztBQUlBO0VBQ0ksaUJBQUE7QUFESiIsImZpbGUiOiJqaW8tZGV0YWlscy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3BlYWtlci1jYXJkIGlvbi1jYXJkLWhlYWRlciB7XG4gICAgcGFkZGluZzogMDtcbiAgfVxuICBcbiAgLnNwZWFrZXItY2FyZCBpb24tY2FyZC1jb250ZW50IHtcbiAgICBmbGV4OiAxIDEgYXV0bztcbiAgXG4gICAgcGFkZGluZzogMDtcbiAgfVxuICBcbiAgLmlvcyBpb24tbGlzdCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgfVxuICBcbiAgLm1kIGlvbi1saXN0IHtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXN0ZXAtMTUwLCAjZDdkOGRhKTtcbiAgXG4gICAgcGFkZGluZzogMDtcbiAgfVxuXG5pb24tYXZhdGFyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAxMHB4O1xuICAgIHJpZ2h0OiAwcHg7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICB3aWR0aDogMTAwcHg7XG59XG5cbi5kZXNjcmlwdGlvbiBwIHtcbiAgICB3aWR0aDogNzUlO1xufVxuXG4ubG9jYXRpb24gcCB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5sb2NhdGlvbiBwMSB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5sb2NhdGlvbiBwMiB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5sb2NhdGlvbiBwMyB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5sb2NhdGlvbiBwNCB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5sb2NhdGlvbiBwNSB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4iXX0= */";

/***/ }),

/***/ 24870:
/*!**************************************************************!*\
  !*** ./src/app/jio-details/jio-details.page.html?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title>\n      Jio\n    </ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class = 'description'>\n  <ion-card color = 'medium'>\n  \n    <ion-card-content> \n      <p>Hi, my name is Tzi Yu! and I am studying in NTU business and computing, would love to make new friends </p> \n      <!-- {{jios.description}} -->\n    </ion-card-content>\n  \n    <ion-avatar>\n      <img src=\"https://static.vecteezy.com/system/resources/thumbnails/000/599/173/small/coffee.jpg\">\n      <!-- {{jios.photo}} -->\n    </ion-avatar>\n  \n  </ion-card>\n\n  <ion-card class = 'location' color = 'medium'>\n    <ion-card-header>\n      <p>\n        Starbucks\n        <!-- {{jios.name}} -->\n      </p>\n    </ion-card-header>\n    <ion-card-content> \n      <p1>\n      Address: 76 Nanyang Drive 01-06 NTU North Spine, 637331\n      <!-- {{jios.address}} -->\n      <br>\n      Hours : Open - Closes 10PM\n      <!-- {{jios.closing}} -->\n      <br>\n      Phone : 6910 1245 \n      <!-- {{jios.contact}} -->\n      <br>\n      </p1>\n      <ion-text color = 'danger'>\n        Live:\n      </ion-text>\n      <ion-text>\n        <p3>\n          A little busy\n          <!-- {{jios.crowdesness}} -->\n        </p3>\n      </ion-text>\n      <br>\n      <br>\n      <p2>\n      Start Time: \n      </p2>\n      16:00\n      <!-- {{jios.opening}} -->\n      <br>\n      <br>\n      <p4>\n        End Time:\n      </p4>\n      18:00\n      <!-- {{jios.closing}} -->\n      <br>\n      <br>\n      <p5>\n      Description:\n      </p5>\n      Wouldn't mind some dinner!\n      <!-- {{jios.message}} -->\n      <br>\n      <br>\n      <ion-button color = 'secondary' (click)=\"nextpage()\" (click)=\"removeJio(jio)\" >\n        <b>Cancel / Withdraw</b>\n      </ion-button>\n\n    </ion-card-content>\n</ion-card>\n  \n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_jio-details_jio-details_module_ts.js.map