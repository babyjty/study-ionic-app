"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_jio-details-accept_jio-details-accept_module_ts"],{

/***/ 37263:
/*!*************************************************************************!*\
  !*** ./src/app/jio-details-accept/jio-details-accept-routing.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JioDetailsAcceptPageRoutingModule": () => (/* binding */ JioDetailsAcceptPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var _jio_details_accept_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./jio-details-accept.page */ 64729);




const routes = [
    {
        path: '',
        component: _jio_details_accept_page__WEBPACK_IMPORTED_MODULE_0__.JioDetailsAcceptPage
    }
];
let JioDetailsAcceptPageRoutingModule = class JioDetailsAcceptPageRoutingModule {
};
JioDetailsAcceptPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], JioDetailsAcceptPageRoutingModule);



/***/ }),

/***/ 42335:
/*!*****************************************************************!*\
  !*** ./src/app/jio-details-accept/jio-details-accept.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JioDetailsAcceptPageModule": () => (/* binding */ JioDetailsAcceptPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38143);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 31777);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var _jio_details_accept_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./jio-details-accept-routing.module */ 37263);
/* harmony import */ var _jio_details_accept_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./jio-details-accept.page */ 64729);







let JioDetailsAcceptPageModule = class JioDetailsAcceptPageModule {
};
JioDetailsAcceptPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _jio_details_accept_routing_module__WEBPACK_IMPORTED_MODULE_0__.JioDetailsAcceptPageRoutingModule
        ],
        declarations: [_jio_details_accept_page__WEBPACK_IMPORTED_MODULE_1__.JioDetailsAcceptPage]
    })
], JioDetailsAcceptPageModule);



/***/ }),

/***/ 64729:
/*!***************************************************************!*\
  !*** ./src/app/jio-details-accept/jio-details-accept.page.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JioDetailsAcceptPage": () => (/* binding */ JioDetailsAcceptPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _jio_details_accept_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./jio-details-accept.page.html?ngResource */ 86275);
/* harmony import */ var _jio_details_accept_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./jio-details-accept.page.scss?ngResource */ 42458);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var _service_jio_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/jio-api.service */ 2330);







let JioDetailsAcceptPage = class JioDetailsAcceptPage {
    constructor(router, alertController, jioApiService) {
        this.router = router;
        this.alertController = alertController;
        this.jioApiService = jioApiService;
    }
    ngOnInit() {
        this.jio = this.router.getCurrentNavigation().extras.state.jio;
        console.log("this jio");
        console.log(this.jio);
    }
    acceptJio() {
        try {
            this.jioApiService.acceptJio().subscribe(dataA => {
                if (dataA.outcome) {
                    console.log('Within Accept Jio: Accept Success');
                    this.presentAlert('Jio Accepted', 'Save the date');
                    this.router.navigate(['/jio-list']);
                }
                else {
                    console.log('Within Accept Jio: Accept Failed');
                    this.presentAlert('Unsuccessful Acceptance', 'Please try again.');
                    this.router.navigate(['/jio-list']);
                }
            });
        }
        catch (error) {
            console.log(error);
        }
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
JioDetailsAcceptPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController },
    { type: _service_jio_api_service__WEBPACK_IMPORTED_MODULE_2__.JioApiService }
];
JioDetailsAcceptPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-jio-details-accept',
        template: _jio_details_accept_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_jio_details_accept_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], JioDetailsAcceptPage);

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

/***/ 42458:
/*!****************************************************************************!*\
  !*** ./src/app/jio-details-accept/jio-details-accept.page.scss?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = "body {\n  margin: 0;\n}\n\n.filter-sort {\n  display: flex;\n  padding: 0px 0px 5px 0px;\n}\n\n.filter-sort ion-button {\n  --background: #6b45bc;\n  width: 200px;\n  margin: 0px 5px;\n  padding: 0;\n  font-family: \"Trebuchet MS\";\n  text-transform: uppercase;\n}\n\nion-content {\n  margin: 0;\n}\n\nion-content ion-card {\n  width: auto;\n}\n\nion-content ion-card ion-card-content {\n  margin: 0;\n  padding: 10px;\n  font-family: \"Georgia\";\n}\n\nion-content ion-card ion-card-content ion-thumbnail {\n  margin: 0px 30px 0px 0px;\n}\n\nion-content ion-card ion-card-content ion-thumbnail ion-img {\n  width: 70px;\n  height: 100%;\n  object-fit: cover;\n  padding: 0px;\n  margin: 0px;\n}\n\nion-content ion-card ion-card-content ion-item {\n  padding: 0;\n  margin: 0;\n}\n\nion-content ion-card ion-card-content .p1 .titles {\n  padding: 0px 100px 0px 0px;\n  margin: 0;\n}\n\nion-content ion-card ion-card-content .p1 .titles .title {\n  font-family: \"Georgia\";\n  font-weight: bold;\n  font-size: 25px;\n  color: #400080;\n  margin-bottom: 10px;\n}\n\nion-content ion-card ion-card-content .p1 .titles .subtitle {\n  text-transform: uppercase;\n  font-family: \"Georgia\";\n  font-size: 10px;\n  color: #a4a4c1;\n  padding-right: 40px;\n}\n\nion-content ion-card ion-card-content .p2 .p-items {\n  padding: 0;\n  margin: 0;\n}\n\nion-content ion-card ion-card-content .p2 .p-items .p-item {\n  margin: 4px 4px 4px 0px;\n  font-family: \"Trebuchet MS\";\n  font-size: 15px;\n  margin-bottom: 1px;\n}\n\nion-content ion-card ion-card-content ion-buttons {\n  position: absolute;\n  bottom: 0rem;\n  right: 0rem;\n}\n\nion-content ion-card ion-card-content ion-buttons ion-button {\n  height: 30px;\n  width: 30px;\n  color: #6b45bc;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImppby1kZXRhaWxzLWFjY2VwdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMERBO0VBQ0ksU0FBQTtBQXpESjs7QUE0REE7RUFDSSxhQUFBO0VBQ0Esd0JBQUE7QUF6REo7O0FBMkRJO0VBQ0kscUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSwyQkFBQTtFQUNBLHlCQUFBO0FBekRSOztBQTZEQTtFQUNJLFNBQUE7QUExREo7O0FBNERJO0VBQ0ksV0FBQTtBQTFEUjs7QUE0RFE7RUFDSSxTQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FBMURaOztBQTREWTtFQUNJLHdCQUFBO0FBMURoQjs7QUE0RGdCO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBMURwQjs7QUErRFk7RUFDSSxVQUFBO0VBQ0EsU0FBQTtBQTdEaEI7O0FBa0VnQjtFQUNJLDBCQUFBO0VBQ0EsU0FBQTtBQWhFcEI7O0FBa0VvQjtFQUNJLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FBaEV4Qjs7QUFtRW9CO0VBQ0kseUJBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUFqRXhCOztBQTJFZ0I7RUFDSSxVQUFBO0VBQ0EsU0FBQTtBQXpFcEI7O0FBMkVvQjtFQUNJLHVCQUFBO0VBQ0EsMkJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUF6RXhCOztBQStFWTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUE3RWhCOztBQThFZ0I7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7QUE1RXBCIiwiZmlsZSI6Imppby1kZXRhaWxzLWFjY2VwdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyAuc3BlYWtlci1jYXJkIGlvbi1jYXJkLWhlYWRlciB7XG4vLyAgICAgcGFkZGluZzogMDtcbi8vICAgfVxuICBcbi8vICAgLnNwZWFrZXItY2FyZCBpb24tY2FyZC1jb250ZW50IHtcbi8vICAgICBmbGV4OiAxIDEgYXV0bztcbiAgXG4vLyAgICAgcGFkZGluZzogMDtcbi8vICAgfVxuICBcbi8vICAgLmlvcyBpb24tbGlzdCB7XG4vLyAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbi8vICAgfVxuICBcbi8vICAgLm1kIGlvbi1saXN0IHtcbi8vICAgICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXN0ZXAtMTUwLCAjZDdkOGRhKTtcbiAgXG4vLyAgICAgcGFkZGluZzogMDtcbi8vICAgfVxuXG4vLyBpb24tYXZhdGFyIHtcbi8vICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4vLyAgICAgdG9wOiAxMHB4O1xuLy8gICAgIHJpZ2h0OiAwcHg7XG4vLyAgICAgaGVpZ2h0OiAxMDBweDtcbi8vICAgICB3aWR0aDogMTAwcHg7XG4vLyB9XG5cbi8vIC5kZXNjcmlwdGlvbiBwIHtcbi8vICAgICB3aWR0aDogNzUlO1xuLy8gfVxuXG4vLyAubG9jYXRpb24gcCB7XG4vLyAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4vLyB9XG5cbi8vIC5sb2NhdGlvbiBwMSB7XG4vLyAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4vLyB9XG5cbi8vIC5sb2NhdGlvbiBwMiB7XG4vLyAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4vLyB9XG5cbi8vIC5sb2NhdGlvbiBwMyB7XG4vLyAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4vLyB9XG5cbi8vIC5sb2NhdGlvbiBwNCB7XG4vLyAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4vLyB9XG5cbi8vIC5sb2NhdGlvbiBwNSB7XG4vLyAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4vLyB9XG5cblxuXG5ib2R5IHtcbiAgICBtYXJnaW46IDA7XG59XG5cbi5maWx0ZXItc29ydCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBwYWRkaW5nOiAwcHggMHB4IDVweCAwcHg7XG5cbiAgICBpb24tYnV0dG9uIHtcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiAjNmI0NWJjO1xuICAgICAgICB3aWR0aDogMjAwcHg7XG4gICAgICAgIG1hcmdpbjogMHB4IDVweDtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiVHJlYnVjaGV0IE1TXCI7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgfVxufVxuXG5pb24tY29udGVudCB7XG4gICAgbWFyZ2luOiAwO1xuXG4gICAgaW9uLWNhcmQge1xuICAgICAgICB3aWR0aDogYXV0bztcblxuICAgICAgICBpb24tY2FyZC1jb250ZW50IHtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJHZW9yZ2lhXCI7XG5cbiAgICAgICAgICAgIGlvbi10aHVtYm5haWwge1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMHB4IDMwcHggMHB4IDBweDtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGlvbi1pbWcge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNzBweDtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMHB4O1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlvbi1pdGVtIHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLnAxIHtcblxuICAgICAgICAgICAgICAgIC50aXRsZXMge1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwcHggMTAwcHggMHB4IDBweDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAudGl0bGUge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiR2VvcmdpYVwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDI1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzQwMDA4MDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIC5zdWJ0aXRsZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiR2VvcmdpYVwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNhNGE0YzE7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiA0MHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC5wMiB7XG4gICAgICAgICAgICAgICAgLnAtaXRlbXMge1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIC5wLWl0ZW0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiA0cHggNHB4IDRweCAwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogXCJUcmVidWNoZXQgTVNcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDFweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgXG4gICAgICAgICAgICBpb24tYnV0dG9ucyB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIGJvdHRvbTogMHJlbTtcbiAgICAgICAgICAgICAgICByaWdodDogMHJlbTtcbiAgICAgICAgICAgICAgICBpb24tYnV0dG9uIHtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzBweDtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM2YjQ1YmM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG59Il19 */";

/***/ }),

/***/ 86275:
/*!****************************************************************************!*\
  !*** ./src/app/jio-details-accept/jio-details-accept.page.html?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title>\n      View Jio\n    </ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class = 'description'>\n  <ion-card>\n    <!-- <div>\n      <img [src] = \"this.jio.image\"/>\n    </div> -->\n\n    <div>\n      <img src = \"assets/img/StudyJioLogo.png\"/>\n    </div>\n\n    <ion-item>\n      <ion-thumbnail>\n        <img src = \"assets/img/StudyJioLogo.png\"/>\n      </ion-thumbnail>\n      <ion-card-content><br><br></ion-card-content>\n\n      \n      <ion-label>\n        <p class = \"p-item\"><strong>Username: </strong>Username</p>\n        <p class = \"p-item\"><strong>Telegram: </strong>Telegram</p>\n        <p class = \"p-item\"><strong>Worklevel: </strong>Worklevel</p>\n        <p class = \"p-item\">Bio</p>\n      </ion-label>\n    </ion-item>\n\n    <ion-card-content>\n      <ion-label class = \"titles\">\n        <br>\n        <ion-card-title class = \"title\">JIO HEADER</ion-card-title>\n      </ion-label>\n      <ion-label class = \"p-items\">\n        <!-- <p class = \"p-item\"><strong>Date & Time: </strong>{{this.jio.datetimestring}}</p>\n        <p class = \"p-item\"><strong>Duration: </strong>{{this.jio.duration}}</p>\n        <p class = \"p-item\">Description</p> -->\n\n        <p class = \"p-item\"><strong>Date & Time: </strong>Datetime String</p>\n        <p class = \"p-item\"><strong>Duration: </strong>Duration</p>\n        <p class = \"p-item\">Description</p>\n      </ion-label>\n    </ion-card-content>\n\n    <ion-card-content> \n      <ion-grid>\n        <ion-row>\n          <ion-col>\n            <ion-label class = \"titles\">\n              <ion-card-title class = \"title\">Jioer Details</ion-card-title>\n            </ion-label>\n            <ion-label class = \"p-items\">\n              <!-- <p class = \"p-item\"><strong>Username: </strong>{{this.jio.jioer.username}}</p>\n              <p class = \"p-item\"><strong>Telegram: </strong>{{this.jio.jioer.telegram}}</p>\n              <p class = \"p-item\"><strong>Worklevel: </strong>{{this.jio.jioer.worklevel}}</p>\n              <p class = \"p-item\">{{this.jio.jioer.bio}} -->\n      \n              <p class = \"p-item\"><strong>Username: </strong>Username</p>\n              <p class = \"p-item\"><strong>Telegram: </strong>Telegram</p>\n              <p class = \"p-item\"><strong>Worklevel: </strong>Worklevel</p>\n              <p class = \"p-item\">Bio</p>\n            </ion-label>\n          </ion-col>\n          <ion-col>\n            <div>\n              <!-- <img src = \"assets/img/StudyJioLogo.png\"/> -->\n            </div>\n          </ion-col>\n        </ion-row>\n       \n      </ion-grid>\n\n\n\n    </ion-card-content>\n\n  \n\n    <ion-card-content>\n      <ion-label class = \"titles\">\n        <ion-card-title class = \"title\">LOCATION NAME</ion-card-title>\n        <!-- <ion-card-title class = \"title\">{{this.jio.location.name}}</ion-card-title> -->\n      </ion-label>\n      <ion-label class = \"p-items\">\n        <!-- <p class = \"p-item\"><strong>Address: </strong>{{this.jio.location.address}}}</p>\n        <p class = \"p-item\"><strong>Rating: </strong>{{this.jio.location.rating}}</p> -->\n        <p class = \"p-item\"><strong>Address: </strong>Address</p>\n        <p class = \"p-item\"><strong>Rating: </strong>Rating</p>\n      </ion-label>\n\n    </ion-card-content>   \n    <ion-button size = full (click)=\"acceptJio()\" >Accept Jio</ion-button>\n   \n  </ion-card>\n\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_jio-details-accept_jio-details-accept_module_ts.js.map