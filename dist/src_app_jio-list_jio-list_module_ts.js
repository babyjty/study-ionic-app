"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_jio-list_jio-list_module_ts"],{

/***/ 25843:
/*!*****************************************************!*\
  !*** ./src/app/jio-list/jio-list-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JioListPageRoutingModule": () => (/* binding */ JioListPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var _jio_list_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./jio-list.page */ 93570);




const routes = [
    {
        path: '',
        component: _jio_list_page__WEBPACK_IMPORTED_MODULE_0__.JioListPage
    }
];
let JioListPageRoutingModule = class JioListPageRoutingModule {
};
JioListPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], JioListPageRoutingModule);



/***/ }),

/***/ 45454:
/*!*********************************************!*\
  !*** ./src/app/jio-list/jio-list.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JioListPageModule": () => (/* binding */ JioListPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38143);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 31777);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var _jio_list_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./jio-list-routing.module */ 25843);
/* harmony import */ var _jio_list_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./jio-list.page */ 93570);







let JioListPageModule = class JioListPageModule {
};
JioListPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _jio_list_routing_module__WEBPACK_IMPORTED_MODULE_0__.JioListPageRoutingModule
        ],
        declarations: [_jio_list_page__WEBPACK_IMPORTED_MODULE_1__.JioListPage]
    })
], JioListPageModule);



/***/ }),

/***/ 93570:
/*!*******************************************!*\
  !*** ./src/app/jio-list/jio-list.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JioListPage": () => (/* binding */ JioListPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _jio_list_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./jio-list.page.html?ngResource */ 52142);
/* harmony import */ var _jio_list_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./jio-list.page.scss?ngResource */ 86526);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var _service_jio_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/jio-api.service */ 2330);







let JioListPage = class JioListPage {
    constructor(router, jioApiService, alertController) {
        this.router = router;
        this.jioApiService = jioApiService;
        this.alertController = alertController;
        this.myJios = [
            {
                title: "test title",
                description: "test description",
                location: "test location",
                datetime: "test date time",
                duration: "test duration"
            }
        ];
    }
    ngOnInit() {
        this.jioApiService.getMyJio().subscribe(dataMJ => {
            this.jio = dataMJ;
        });
    }
    deleteJio(jio) {
        this.jioApiService.deleteJio(jio).subscribe(dataC => {
            if (dataC.result) {
                console.log('Jio Cancelled');
                this.presentAlert('Jio Cancelled', 'Sad to see you go :(');
            }
            else {
                console.log('Jio Cancel Unsuccesful');
                this.presentAlert('Jio Cancel Unsuccessful', 'Please try again');
            }
        });
    }
    presentAlert(h, b) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: h,
                subHeader: b,
                buttons: ['Dismiss']
            });
            yield alert.present();
        });
    }
};
JioListPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _service_jio_api_service__WEBPACK_IMPORTED_MODULE_2__.JioApiService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController }
];
JioListPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-jio-list',
        template: _jio_list_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_jio_list_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], JioListPage);

// jioList = [
//     {
//       picture: 'Picture 1';
//       message: 'Message 1';
//       location: 'Location 1';
//       distance: 'Distance 1';
//       cost: 'Cost 1';
//       crowdedness: 'Crowdedness 1';
//     }
//   ]


/***/ }),

/***/ 86526:
/*!********************************************************!*\
  !*** ./src/app/jio-list/jio-list.page.scss?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = ".jio p {\n  font-weight: bold;\n}\n\n.jio p1 {\n  font-weight: bold;\n  white-space: pre-wrap;\n}\n\nbody {\n  margin: 0;\n}\n\nion-card-content {\n  margin: 0;\n  padding: 10px;\n  font-family: \"Georgia\";\n}\n\nion-thumbnail {\n  margin: 0px 30px 0px 0px;\n}\n\nion-img {\n  width: 70px;\n  height: 100%;\n  object-fit: cover;\n  padding: 0px;\n  margin: 0px;\n}\n\nion-item {\n  padding: 0;\n  margin: 0;\n}\n\nion-label {\n  padding: 0;\n  margin: 0;\n}\n\np {\n  margin: 4px 4px 4px 0px;\n  font-family: \"Trebuchet MS\";\n}\n\n.title {\n  font-family: \"Georgia\";\n  font-weight: bold;\n}\n\n.subtitle {\n  text-transform: uppercase;\n  font-family: \"Georgia\";\n  font-size: 10px;\n}\n\n.header {\n  display: flex;\n  padding: 0px 0px 5px 0px;\n}\n\n.option {\n  width: 100px;\n  margin: 0px 5px;\n  padding: 0;\n  font-family: \"Trebuchet MS\";\n  text-transform: uppercase;\n}\n\nion-content {\n  margin: 0;\n}\n\nion-content ion-card {\n  width: auto;\n}\n\nion-content ion-card ion-card-content {\n  height: 150px;\n  margin: 0;\n  padding: 10px;\n  font-family: \"Georgia\";\n}\n\nion-content ion-card ion-card-content ion-thumbnail {\n  margin: 0px 30px 0px 0px;\n}\n\nion-content ion-card ion-card-content ion-thumbnail ion-img {\n  width: 70px;\n  height: 100%;\n  object-fit: cover;\n  padding: 0px;\n  margin: 0px;\n}\n\nion-content ion-card ion-card-content ion-item {\n  padding: 0;\n  margin: 0;\n}\n\nion-content ion-card ion-card-content .p1 .titles {\n  padding: 0px 100px 0px 0px;\n  margin: 0;\n}\n\nion-content ion-card ion-card-content .p1 .titles .title {\n  font-family: \"Georgia\";\n  font-weight: bold;\n  font-size: 25px;\n  color: #400080;\n  margin-bottom: 10px;\n}\n\nion-content ion-card ion-card-content .p1 .titles .subtitle {\n  text-transform: uppercase;\n  font-family: \"Georgia\";\n  font-size: 10px;\n  color: #a4a4c1;\n  padding-right: 40px;\n}\n\nion-content ion-card ion-card-content .p2 .p-items {\n  padding: 0;\n  margin: 0;\n}\n\nion-content ion-card ion-card-content .p2 .p-items .p-item {\n  margin: 4px 4px 4px 0px;\n  font-family: \"Trebuchet MS\";\n  font-size: 15px;\n  margin-bottom: 1px;\n}\n\nion-content ion-card ion-card-content ion-buttons {\n  position: absolute;\n  bottom: 0rem;\n  right: 0rem;\n}\n\nion-content ion-card ion-card-content ion-buttons ion-button {\n  height: 30px;\n  width: 30px;\n  color: #6b45bc;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImppby1saXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxpQkFBQTtFQUNBLHFCQUFBO0FBQ0o7O0FBR0E7RUFDSSxTQUFBO0FBQUo7O0FBR0E7RUFDSSxTQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FBQUo7O0FBR0E7RUFDSSx3QkFBQTtBQUFKOztBQUdBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBQUo7O0FBR0E7RUFDSSxVQUFBO0VBQ0EsU0FBQTtBQUFKOztBQUdBO0VBQ0ksVUFBQTtFQUNBLFNBQUE7QUFBSjs7QUFHQTtFQUNJLHVCQUFBO0VBQ0EsMkJBQUE7QUFBSjs7QUFHQTtFQUNJLHNCQUFBO0VBQ0EsaUJBQUE7QUFBSjs7QUFHQTtFQUNJLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0FBQUo7O0FBSUE7RUFDSSxhQUFBO0VBQ0Esd0JBQUE7QUFESjs7QUFJQTtFQUNJLFlBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLDJCQUFBO0VBQ0EseUJBQUE7QUFESjs7QUFLQTtFQUNJLFNBQUE7QUFGSjs7QUFJSTtFQUNJLFdBQUE7QUFGUjs7QUFJUTtFQUNJLGFBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FBRlo7O0FBSVk7RUFDSSx3QkFBQTtBQUZoQjs7QUFJZ0I7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFGcEI7O0FBT1k7RUFDSSxVQUFBO0VBQ0EsU0FBQTtBQUxoQjs7QUFVZ0I7RUFDSSwwQkFBQTtFQUNBLFNBQUE7QUFScEI7O0FBVW9CO0VBQ0ksc0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUFSeEI7O0FBV29CO0VBQ0kseUJBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUFUeEI7O0FBbUJnQjtFQUNJLFVBQUE7RUFDQSxTQUFBO0FBakJwQjs7QUFtQm9CO0VBQ0ksdUJBQUE7RUFDQSwyQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQWpCeEI7O0FBdUJZO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQXJCaEI7O0FBc0JnQjtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtBQXBCcEIiLCJmaWxlIjoiamlvLWxpc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmppbyBwIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmppbyBwMSB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xufVxuXG5cbmJvZHkge1xuICAgIG1hcmdpbjogMDtcbn1cblxuaW9uLWNhcmQtY29udGVudCB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgZm9udC1mYW1pbHk6IFwiR2VvcmdpYVwiO1xufVxuXG5pb24tdGh1bWJuYWlsIHtcbiAgICBtYXJnaW46IDBweCAzMHB4IDBweCAwcHg7XG59XG5cbmlvbi1pbWcge1xuICAgIHdpZHRoOiA3MHB4O1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICBwYWRkaW5nOiAwcHg7XG4gICAgbWFyZ2luOiAwcHg7XG59XG5cbmlvbi1pdGVtIHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMDtcbn1cblxuaW9uLWxhYmVsIHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMDtcbn1cblxucCB7XG4gICAgbWFyZ2luOiA0cHggNHB4IDRweCAwcHg7XG4gICAgZm9udC1mYW1pbHk6IFwiVHJlYnVjaGV0IE1TXCI7XG59XG5cbi50aXRsZSB7XG4gICAgZm9udC1mYW1pbHk6IFwiR2VvcmdpYVwiO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uc3VidGl0bGUge1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgZm9udC1mYW1pbHk6IFwiR2VvcmdpYVwiO1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAvLyBjb2xvcjogbGlnaHRnb2xkZW5yb2R5ZWxsb3c7XG59XG5cbi5oZWFkZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgcGFkZGluZzogMHB4IDBweCA1cHggMHB4O1xufVxuXG4ub3B0aW9uIHtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgbWFyZ2luOiAwcHggNXB4O1xuICAgIHBhZGRpbmc6IDA7XG4gICAgZm9udC1mYW1pbHk6IFwiVHJlYnVjaGV0IE1TXCI7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuXG5pb24tY29udGVudCB7XG4gICAgbWFyZ2luOiAwO1xuXG4gICAgaW9uLWNhcmQge1xuICAgICAgICB3aWR0aDogYXV0bztcblxuICAgICAgICBpb24tY2FyZC1jb250ZW50IHtcbiAgICAgICAgICAgIGhlaWdodDogMTUwcHg7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiR2VvcmdpYVwiO1xuXG4gICAgICAgICAgICBpb24tdGh1bWJuYWlsIHtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDBweCAzMHB4IDBweCAwcHg7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpb24taW1nIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDcwcHg7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDBweDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBpb24taXRlbSB7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC5wMSB7XG5cbiAgICAgICAgICAgICAgICAudGl0bGVzIHtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMHB4IDEwMHB4IDBweCAwcHg7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgLnRpdGxlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIkdlb3JnaWFcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM0MDAwODA7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAuc3VidGl0bGUge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIkdlb3JnaWFcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjYTRhNGMxO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogNDBweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgXG4gICAgICAgICAgICAucDIge1xuICAgICAgICAgICAgICAgIC5wLWl0ZW1zIHtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAucC1pdGVtIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogNHB4IDRweCA0cHggMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiVHJlYnVjaGV0IE1TXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxcHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaW9uLWJ1dHRvbnMge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICBib3R0b206IDByZW07XG4gICAgICAgICAgICAgICAgcmlnaHQ6IDByZW07XG4gICAgICAgICAgICAgICAgaW9uLWJ1dHRvbiB7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNmI0NWJjO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxufVxuIl19 */";

/***/ }),

/***/ 52142:
/*!********************************************************!*\
  !*** ./src/app/jio-list/jio-list.page.html?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = " \n  <ion-header [translucent]=\"true\">\n    <ion-toolbar>\n      <ion-title>My Jios</ion-title>\n      <ion-buttons slot=\"start\">\n        <ion-back-button></ion-back-button>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n\n\n  <ion-content [fullscreen]=\"true\">\n\n    <ion-card *ngFor=\"let jio of myJios\" color=\"light\">\n      <ion-card-content color=\"light\">\n        <ion-item lines=\"none\" color=\"light\" class=\"p1\">\n          <ion-label class=\"titles\">\n            <ion-card-title class=\"title\">{{jio.title}}</ion-card-title>\n            <ion-card-subtitle class=\"subtitle\">{{jio.description}}</ion-card-subtitle>\n          </ion-label>\n        </ion-item>\n        <ion-item lines=\"none\" color=\"light\" class=\"p2\">\n          <ion-label class=\"p-items\">\n            <p class=\"p-item\"><strong>Location: </strong>{{jio.location}}</p>\n            <p class=\"p-item\"><strong>Date & Time: </strong>{{jio.datetime}}</p>\n            <p class=\"p-item\"><strong>Duration: </strong>{{jio.duration}}</p>\n          </ion-label>     \n          <ion-badge color=\"success\" slot=\"end\">Accepted</ion-badge>\n        </ion-item>\n       \n      </ion-card-content>\n    </ion-card>\n\n  </ion-content>\n\n\n\n    <!-- <ion-row class=\"ion-align-items-center ion-no-padding\" >\n      <p1>\n      Pending Jios\n      </p1>\n    </ion-row>\n    <ion-card class = 'jio' color = 'medium' (click)=\"nextpage1()\">\n      <ion-grid>\n       <ion-row>\n        <ion-col>\n          <img src=\"https://static.vecteezy.com/system/resources/thumbnails/000/599/173/small/coffee.jpg\">\n        </ion-col>\n      <ion-col> \n      <ion-card-content>\n        <p>Message</p>\n      </ion-card-content>\n      </ion-col>\n       </ion-row>\n       <ion-card-content>\n        <p><strong>Address: </strong> {{item.vicinity}}</p>\n        <p><strong>Rating: </strong>{{item.rating}}/5</p>\n        <p><strong>Price: $</strong>$$</p>\n        <p><strong>Work Level: </strong></p>\n        <p><span style=\"color:red; font-weight: bold\">Live: </span>Not so busy</p>\n      </ion-card-content>\n      </ion-grid>\n    </ion-card>\n    <br>\n    <ion-text class = 'ion-text-center'>\n      Upcoming Jios\n    </ion-text>\n  \n    <ion-card class = 'jio' color = 'medium' (click)=\"nextpage()\">\n      <ion-grid>\n       <ion-row>\n        <ion-col>\n          <img src=\"https://static.vecteezy.com/system/resources/thumbnails/000/599/173/small/coffee.jpg\">\n        </ion-col>\n      <ion-col> \n      <ion-card-content>\n        <p>Message</p>\n      </ion-card-content>\n      </ion-col>\n       </ion-row>\n       <ion-card-content>\n        <p1><p><strong>Address: </strong> {{item.vicinity}}</p>\n          <p><strong>Rating: </strong>{{item.rating}}/5</p>\n          <p><strong>Price: $</strong>$$</p>\n          <p><strong>Work Level: </strong></p>\n          <p><span style=\"color:red; font-weight: bold\">Live: </span>Not so busy</p></p1>\n      </ion-card-content>\n      </ion-grid>\n    </ion-card> -->\n\n  \n  \n  \n    <!-- <ion-card class = 'jio' color = 'medium' (click)=\"nextpage()\" orderBy: orderHeader: isDescOrder\" *ngFor = 'let card of jioList'>\n        <ion-grid>\n         <ion-row>\n          <ion-col>\n            <img src=\"{{jioList.picture}}\">\n          </ion-col>\n        <ion-col> \n        <ion-card-content>\n          <p>{{jioList.message}}</p>\n        </ion-card-content>\n        </ion-col>\n         </ion-row>\n         <ion-card-content>\n          <p1>{{jioList.location}} {{jioList.distance}} {{jioList.cost}} {{jioList.crowdesness}}</p1>\n        </ion-card-content>\n        </ion-grid>\n      </ion-card> -->\n";

/***/ })

}]);
//# sourceMappingURL=src_app_jio-list_jio-list_module_ts.js.map