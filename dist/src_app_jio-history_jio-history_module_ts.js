"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_jio-history_jio-history_module_ts"],{

/***/ 28101:
/*!***********************************************************!*\
  !*** ./src/app/jio-history/jio-history-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JioHistoryPageRoutingModule": () => (/* binding */ JioHistoryPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var _jio_history_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./jio-history.page */ 10633);




const routes = [
    {
        path: '',
        component: _jio_history_page__WEBPACK_IMPORTED_MODULE_0__.JioHistoryPage
    }
];
let JioHistoryPageRoutingModule = class JioHistoryPageRoutingModule {
};
JioHistoryPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], JioHistoryPageRoutingModule);



/***/ }),

/***/ 7617:
/*!***************************************************!*\
  !*** ./src/app/jio-history/jio-history.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JioHistoryPageModule": () => (/* binding */ JioHistoryPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38143);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 31777);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var _jio_history_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./jio-history-routing.module */ 28101);
/* harmony import */ var _jio_history_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./jio-history.page */ 10633);







let JioHistoryPageModule = class JioHistoryPageModule {
};
JioHistoryPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _jio_history_routing_module__WEBPACK_IMPORTED_MODULE_0__.JioHistoryPageRoutingModule
        ],
        declarations: [_jio_history_page__WEBPACK_IMPORTED_MODULE_1__.JioHistoryPage]
    })
], JioHistoryPageModule);



/***/ }),

/***/ 10633:
/*!*************************************************!*\
  !*** ./src/app/jio-history/jio-history.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JioHistoryPage": () => (/* binding */ JioHistoryPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _jio_history_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./jio-history.page.html?ngResource */ 9665);
/* harmony import */ var _jio_history_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./jio-history.page.scss?ngResource */ 20025);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 51109);




let JioHistoryPage = class JioHistoryPage {
    constructor() { }
    ngOnInit() {
    }
};
JioHistoryPage.ctorParameters = () => [];
JioHistoryPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-jio-history',
        template: _jio_history_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_jio_history_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], JioHistoryPage);



/***/ }),

/***/ 20025:
/*!**************************************************************!*\
  !*** ./src/app/jio-history/jio-history.page.scss?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = ".jio p {\n  font-weight: bold;\n}\n\n.jio p1 {\n  font-weight: bold;\n  white-space: pre-wrap;\n}\n\nbody {\n  margin: 0;\n}\n\nion-card-content {\n  margin: 0;\n  padding: 10px;\n  font-family: \"Georgia\";\n}\n\nion-thumbnail {\n  margin: 0px 30px 0px 0px;\n}\n\nion-img {\n  width: 70px;\n  height: 100%;\n  object-fit: cover;\n  padding: 0px;\n  margin: 0px;\n}\n\nion-item {\n  padding: 0;\n  margin: 0;\n}\n\nion-label {\n  padding: 0;\n  margin: 0;\n}\n\np {\n  margin: 4px 4px 4px 0px;\n  font-family: \"Trebuchet MS\";\n}\n\n.title {\n  font-family: \"Georgia\";\n  font-weight: bold;\n}\n\n.subtitle {\n  text-transform: uppercase;\n  font-family: \"Georgia\";\n  font-size: 10px;\n}\n\n.header {\n  display: flex;\n  padding: 0px 0px 5px 0px;\n}\n\n.option {\n  width: 100px;\n  margin: 0px 5px;\n  padding: 0;\n  font-family: \"Trebuchet MS\";\n  text-transform: uppercase;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImppby1oaXN0b3J5LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxpQkFBQTtFQUNBLHFCQUFBO0FBQ0o7O0FBR0E7RUFDSSxTQUFBO0FBQUo7O0FBR0E7RUFDSSxTQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FBQUo7O0FBR0E7RUFDSSx3QkFBQTtBQUFKOztBQUdBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBQUo7O0FBR0E7RUFDSSxVQUFBO0VBQ0EsU0FBQTtBQUFKOztBQUdBO0VBQ0ksVUFBQTtFQUNBLFNBQUE7QUFBSjs7QUFHQTtFQUNJLHVCQUFBO0VBQ0EsMkJBQUE7QUFBSjs7QUFHQTtFQUNJLHNCQUFBO0VBQ0EsaUJBQUE7QUFBSjs7QUFHQTtFQUNJLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0FBQUo7O0FBSUE7RUFDSSxhQUFBO0VBQ0Esd0JBQUE7QUFESjs7QUFJQTtFQUNJLFlBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLDJCQUFBO0VBQ0EseUJBQUE7QUFESiIsImZpbGUiOiJqaW8taGlzdG9yeS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuamlvIHAge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uamlvIHAxIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XG59XG5cblxuYm9keSB7XG4gICAgbWFyZ2luOiAwO1xufVxuXG5pb24tY2FyZC1jb250ZW50IHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBmb250LWZhbWlseTogXCJHZW9yZ2lhXCI7XG59XG5cbmlvbi10aHVtYm5haWwge1xuICAgIG1hcmdpbjogMHB4IDMwcHggMHB4IDBweDtcbn1cblxuaW9uLWltZyB7XG4gICAgd2lkdGg6IDcwcHg7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgIHBhZGRpbmc6IDBweDtcbiAgICBtYXJnaW46IDBweDtcbn1cblxuaW9uLWl0ZW0ge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xufVxuXG5pb24tbGFiZWwge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xufVxuXG5wIHtcbiAgICBtYXJnaW46IDRweCA0cHggNHB4IDBweDtcbiAgICBmb250LWZhbWlseTogXCJUcmVidWNoZXQgTVNcIjtcbn1cblxuLnRpdGxlIHtcbiAgICBmb250LWZhbWlseTogXCJHZW9yZ2lhXCI7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5zdWJ0aXRsZSB7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBmb250LWZhbWlseTogXCJHZW9yZ2lhXCI7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIC8vIGNvbG9yOiBsaWdodGdvbGRlbnJvZHllbGxvdztcbn1cblxuLmhlYWRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBwYWRkaW5nOiAwcHggMHB4IDVweCAwcHg7XG59XG5cbi5vcHRpb24ge1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBtYXJnaW46IDBweCA1cHg7XG4gICAgcGFkZGluZzogMDtcbiAgICBmb250LWZhbWlseTogXCJUcmVidWNoZXQgTVNcIjtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufSJdfQ== */";

/***/ }),

/***/ 9665:
/*!**************************************************************!*\
  !*** ./src/app/jio-history/jio-history.page.html?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = " \n  <ion-header>\n    <ion-toolbar>\n      <ion-title>My Jios hello</ion-title>\n      <ion-buttons slot=\"start\">\n        <ion-back-button></ion-back-button>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n\n\n  <!-- <ion-content> -->\n    <!-- <ion-button fill=\"outline\" size=\"small\">\n      Filters\n    </ion-button>\n    <ion-button fill=\"outline\" size=\"small\">\n      Sort\n    </ion-button>\n    <br>\n    <br>\n    <ion-row class=\"ion-align-items-center ion-no-padding\" >\n      <p1>\n      Pending Jios\n      </p1>\n    </ion-row>\n    <ion-card class = 'jio' color = 'medium' (click)=\"nextpage()\">\n      <ion-grid>\n       <ion-row>\n        <ion-col>\n          <img src=\"https://static.vecteezy.com/system/resources/thumbnails/000/599/173/small/coffee.jpg\">\n        </ion-col>\n      <ion-col> \n      <ion-card-content>\n        <p>Message</p>\n      </ion-card-content>\n      </ion-col>\n       </ion-row>\n       <ion-card-content>\n        <p><strong>Address: </strong> {{item.vicinity}}</p>\n        <p><strong>Rating: </strong>{{item.rating}}/5</p>\n        <p><strong>Price: $</strong>$$</p>\n        <p><strong>Work Level: </strong></p>\n        <p><span style=\"color:red; font-weight: bold\">Live: </span>Not so busy</p>\n      </ion-card-content>\n      </ion-grid>\n    </ion-card>\n    <br>\n    <ion-text class = 'ion-text-center'>\n      Upcoming Jios\n    </ion-text>\n  \n    <ion-card class = 'jio' color = 'medium' (click)=\"nextpage()\">\n      <ion-grid>\n       <ion-row>\n        <ion-col>\n          <img src=\"https://static.vecteezy.com/system/resources/thumbnails/000/599/173/small/coffee.jpg\">\n        </ion-col>\n      <ion-col> \n      <ion-card-content>\n        <p>Message</p>\n      </ion-card-content>\n      </ion-col>\n       </ion-row>\n       <ion-card-content>\n        <p1><p><strong>Address: </strong> {{item.vicinity}}</p>\n          <p><strong>Rating: </strong>{{item.rating}}/5</p>\n          <p><strong>Price: $</strong>$$</p>\n          <p><strong>Work Level: </strong></p>\n          <p><span style=\"color:red; font-weight: bold\">Live: </span>Not so busy</p></p1>\n      </ion-card-content>\n      </ion-grid>\n    </ion-card>\n\n    <ion-tabs>\n      <ion-tab-bar slot=\"bottom\" (click)=\"nextpage3()\">\n        <ion-tab-button tab=\"schedule\">\n          <ion-label>Current</ion-label>\n        </ion-tab-button>\n\n        <ion-tab-button tab=\"speakers\">\n          <ion-label>History</ion-label>\n        </ion-tab-button>\n      </ion-tab-bar>\n    </ion-tabs>\n   -->\n  \n  \n    <!-- <ion-card class = 'jio' color = 'medium' (click)=\"nextpage()\" *ngFor = 'let card of jioList'>\n        <ion-grid>\n         <ion-row>\n          <ion-col>\n            <img src=\"{{jioList.picture}}\">\n          </ion-col>\n        <ion-col> \n        <ion-card-content>\n          <p>{{jioList.message}}</p>\n        </ion-card-content>\n        </ion-col>\n         </ion-row>\n         <ion-card-content>\n          <p1>{{jioList.location}} {{jioList.distance}} {{jioList.cost}} {{jioList.crowdesness}}</p1>\n        </ion-card-content>\n        </ion-grid>\n      </ion-card> -->\n    ";

/***/ })

}]);
//# sourceMappingURL=src_app_jio-history_jio-history_module_ts.js.map