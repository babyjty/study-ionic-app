"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_jio-details-pending_jio-details-pending_module_ts"],{

/***/ 51751:
/*!***************************************************************************!*\
  !*** ./src/app/jio-details-pending/jio-details-pending-routing.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JioDetailsPendingPageRoutingModule": () => (/* binding */ JioDetailsPendingPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var _jio_details_pending_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./jio-details-pending.page */ 63519);




const routes = [
    {
        path: '',
        component: _jio_details_pending_page__WEBPACK_IMPORTED_MODULE_0__.JioDetailsPendingPage
    }
];
let JioDetailsPendingPageRoutingModule = class JioDetailsPendingPageRoutingModule {
};
JioDetailsPendingPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], JioDetailsPendingPageRoutingModule);



/***/ }),

/***/ 37796:
/*!*******************************************************************!*\
  !*** ./src/app/jio-details-pending/jio-details-pending.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JioDetailsPendingPageModule": () => (/* binding */ JioDetailsPendingPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38143);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 31777);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var _jio_details_pending_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./jio-details-pending-routing.module */ 51751);
/* harmony import */ var _jio_details_pending_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./jio-details-pending.page */ 63519);







let JioDetailsPendingPageModule = class JioDetailsPendingPageModule {
};
JioDetailsPendingPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _jio_details_pending_routing_module__WEBPACK_IMPORTED_MODULE_0__.JioDetailsPendingPageRoutingModule
        ],
        declarations: [_jio_details_pending_page__WEBPACK_IMPORTED_MODULE_1__.JioDetailsPendingPage]
    })
], JioDetailsPendingPageModule);



/***/ }),

/***/ 63519:
/*!*****************************************************************!*\
  !*** ./src/app/jio-details-pending/jio-details-pending.page.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JioDetailsPendingPage": () => (/* binding */ JioDetailsPendingPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _jio_details_pending_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./jio-details-pending.page.html?ngResource */ 34197);
/* harmony import */ var _jio_details_pending_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./jio-details-pending.page.scss?ngResource */ 51881);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 65485);





let JioDetailsPendingPage = class JioDetailsPendingPage {
    constructor(route) {
        this.route = route;
    }
    nextpage() {
        this.route.navigate(['/jio-list']);
    }
    ngOnInit() {
    }
};
JioDetailsPendingPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
JioDetailsPendingPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-jio-details-pending',
        template: _jio_details_pending_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_jio_details_pending_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], JioDetailsPendingPage);

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

/***/ 51881:
/*!******************************************************************************!*\
  !*** ./src/app/jio-details-pending/jio-details-pending.page.scss?ngResource ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = ".speaker-card ion-card-header {\n  padding: 0;\n}\n\n.speaker-card ion-card-content {\n  flex: 1 1 auto;\n  padding: 0;\n}\n\n.ios ion-list {\n  margin-bottom: 10px;\n}\n\n.md ion-list {\n  border-top: 1px solid var(--ion-color-step-150, #d7d8da);\n  padding: 0;\n}\n\nion-avatar {\n  position: absolute;\n  top: 10px;\n  right: 0px;\n  height: 100px;\n  width: 100px;\n}\n\n.description p {\n  width: 75%;\n}\n\n.location p {\n  font-weight: bold;\n}\n\n.location p1 {\n  font-weight: bold;\n}\n\n.location p2 {\n  font-weight: bold;\n}\n\n.location p3 {\n  font-weight: bold;\n}\n\n.location p4 {\n  font-weight: bold;\n}\n\n.location p5 {\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImppby1kZXRhaWxzLXBlbmRpbmcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksVUFBQTtBQUNKOztBQUVFO0VBQ0UsY0FBQTtFQUVBLFVBQUE7QUFBSjs7QUFHRTtFQUNFLG1CQUFBO0FBQUo7O0FBR0U7RUFDRSx3REFBQTtFQUVBLFVBQUE7QUFESjs7QUFJQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQURKOztBQUlBO0VBQ0ksVUFBQTtBQURKOztBQUlBO0VBQ0ksaUJBQUE7QUFESjs7QUFJQTtFQUNJLGlCQUFBO0FBREo7O0FBSUE7RUFDSSxpQkFBQTtBQURKOztBQUlBO0VBQ0ksaUJBQUE7QUFESjs7QUFJQTtFQUNJLGlCQUFBO0FBREo7O0FBSUE7RUFDSSxpQkFBQTtBQURKIiwiZmlsZSI6Imppby1kZXRhaWxzLXBlbmRpbmcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNwZWFrZXItY2FyZCBpb24tY2FyZC1oZWFkZXIge1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cbiAgXG4gIC5zcGVha2VyLWNhcmQgaW9uLWNhcmQtY29udGVudCB7XG4gICAgZmxleDogMSAxIGF1dG87XG4gIFxuICAgIHBhZGRpbmc6IDA7XG4gIH1cbiAgXG4gIC5pb3MgaW9uLWxpc3Qge1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIH1cbiAgXG4gIC5tZCBpb24tbGlzdCB7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1zdGVwLTE1MCwgI2Q3ZDhkYSk7XG4gIFxuICAgIHBhZGRpbmc6IDA7XG4gIH1cblxuaW9uLWF2YXRhciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMTBweDtcbiAgICByaWdodDogMHB4O1xuICAgIGhlaWdodDogMTAwcHg7XG4gICAgd2lkdGg6IDEwMHB4O1xufVxuXG4uZGVzY3JpcHRpb24gcCB7XG4gICAgd2lkdGg6IDc1JTtcbn1cblxuLmxvY2F0aW9uIHAge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ubG9jYXRpb24gcDEge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ubG9jYXRpb24gcDIge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ubG9jYXRpb24gcDMge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ubG9jYXRpb24gcDQge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ubG9jYXRpb24gcDUge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuIl19 */";

/***/ }),

/***/ 34197:
/*!******************************************************************************!*\
  !*** ./src/app/jio-details-pending/jio-details-pending.page.html?ngResource ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title>\n      Jio\n    </ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class = 'description'>\n  <ion-card color = 'medium'>\n  \n    <ion-card-content> \n      <p>Hi, my name is Tzi Yu! and I am studying in NTU business and computing, would love to make new friends </p> \n      <!-- {{jios.description}} -->\n    </ion-card-content>\n  \n    <ion-avatar>\n      <img src=\"https://static.vecteezy.com/system/resources/thumbnails/000/599/173/small/coffee.jpg\">\n      <!-- {{jios.photo}} -->\n    </ion-avatar>\n  \n  </ion-card>\n\n  <ion-card class = 'location' color = 'medium'>\n    <ion-card-header>\n      <p>\n        Starbucks\n        <!-- {{jios.name}} -->\n      </p>\n    </ion-card-header>\n    <ion-card-content> \n      <p1>\n      Address: 76 Nanyang Drive 01-06 NTU North Spine, 637331\n      <!-- {{jios.address}} -->\n      <br>\n      Hours : Open - Closes 10PM\n      <!-- {{jios.closing}} -->\n      <br>\n      Phone : 6910 1245 \n      <!-- {{jios.contact}} -->\n      <br>\n      </p1>\n      <ion-text color = 'danger'>\n        Live:\n      </ion-text>\n      <ion-text>\n        <p3>\n          A little busy\n          <!-- {{jios.crowdesness}} -->\n        </p3>\n      </ion-text>\n      <br>\n      <br>\n      <p2>\n      Start Time: \n      </p2>\n      16:00\n      <!-- {{jios.opening}} -->\n      <br>\n      <br>\n      <p4>\n        End Time:\n      </p4>\n      18:00\n      <!-- {{jios.closing}} -->\n      <br>\n      <br>\n      <p5>\n      Description:\n      </p5>\n      Wouldn't mind some dinner!\n      <!-- {{jios.message}} -->\n      <br>\n      <br>\n      <ion-button color = 'secondary'  >\n        <b>Pending</b>\n      </ion-button>\n\n    </ion-card-content>\n</ion-card>\n  \n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_jio-details-pending_jio-details-pending_module_ts.js.map