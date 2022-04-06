"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_jio_jio_module_ts"],{

/***/ 24762:
/*!******************************************************************!*\
  !*** ./src/app/explore-container/explore-container.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExploreContainerComponent": () => (/* binding */ ExploreContainerComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _explore_container_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./explore-container.component.html?ngResource */ 50959);
/* harmony import */ var _explore_container_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./explore-container.component.scss?ngResource */ 30572);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 51109);




let ExploreContainerComponent = class ExploreContainerComponent {
    constructor() { }
    ngOnInit() { }
};
ExploreContainerComponent.ctorParameters = () => [];
ExploreContainerComponent.propDecorators = {
    name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
};
ExploreContainerComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-explore-container',
        template: _explore_container_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_explore_container_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ExploreContainerComponent);



/***/ }),

/***/ 581:
/*!***************************************************************!*\
  !*** ./src/app/explore-container/explore-container.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExploreContainerComponentModule": () => (/* binding */ ExploreContainerComponentModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 38143);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 31777);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var _explore_container_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./explore-container.component */ 24762);






let ExploreContainerComponentModule = class ExploreContainerComponentModule {
};
ExploreContainerComponentModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule],
        declarations: [_explore_container_component__WEBPACK_IMPORTED_MODULE_0__.ExploreContainerComponent],
        exports: [_explore_container_component__WEBPACK_IMPORTED_MODULE_0__.ExploreContainerComponent]
    })
], ExploreContainerComponentModule);



/***/ }),

/***/ 22737:
/*!*******************************************!*\
  !*** ./src/app/jio/jio-routing.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JioPageRoutingModule": () => (/* binding */ JioPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var _jio_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./jio.page */ 2371);




const routes = [
    {
        path: '',
        component: _jio_page__WEBPACK_IMPORTED_MODULE_0__.JioPage,
    }
];
let JioPageRoutingModule = class JioPageRoutingModule {
};
JioPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], JioPageRoutingModule);



/***/ }),

/***/ 96319:
/*!***********************************!*\
  !*** ./src/app/jio/jio.module.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JioPageModule": () => (/* binding */ JioPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38143);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 31777);
/* harmony import */ var _jio_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./jio.page */ 2371);
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../explore-container/explore-container.module */ 581);
/* harmony import */ var _jio_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./jio-routing.module */ 22737);









let JioPageModule = class JioPageModule {
};
JioPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__.ExploreContainerComponentModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forChild([{ path: '', component: _jio_page__WEBPACK_IMPORTED_MODULE_0__.JioPage }]),
            _jio_routing_module__WEBPACK_IMPORTED_MODULE_2__.JioPageRoutingModule,
        ],
        declarations: [_jio_page__WEBPACK_IMPORTED_MODULE_0__.JioPage]
    })
], JioPageModule);



/***/ }),

/***/ 2371:
/*!*********************************!*\
  !*** ./src/app/jio/jio.page.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JioPage": () => (/* binding */ JioPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _jio_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./jio.page.html?ngResource */ 27265);
/* harmony import */ var _jio_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./jio.page.scss?ngResource */ 36024);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var _service_jio_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/jio-api.service */ 2330);






let JioPage = class JioPage {
    constructor(router, jioApiService) {
        this.router = router;
        this.jioApiService = jioApiService;
    }
    ngOnInit() {
        try {
            this.jioApiService.getJios().subscribe((dataJ) => {
                this.jioList = dataJ;
                console.log(this.jioList);
            });
        }
        catch (error) {
            console.log(error);
        }
    }
    createJio() {
        this.router.navigate(['/create-jio']);
    }
    viewJio(jio1) {
        this.router.navigateByUrl('/jio-details-accept', { state: { jio: jio1 } });
    }
};
JioPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: _service_jio_api_service__WEBPACK_IMPORTED_MODULE_2__.JioApiService }
];
JioPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-jio',
        template: _jio_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_jio_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], JioPage);

// cards = [
//   {
//     location: 'Location 1';,
//     distance: 'Distance 1';,
//     cost: 'Cost 1';,
//     crowedness: 'Crowdedness 1';,
//     message: 'Message 1';
//     picture: 'Picture 1';
//   }
// ]


/***/ }),

/***/ 30572:
/*!*******************************************************************************!*\
  !*** ./src/app/explore-container/explore-container.component.scss?ngResource ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = "#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4cGxvcmUtY29udGFpbmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFFQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0FBQUY7O0FBR0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUFBRjs7QUFHQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUVBLGNBQUE7RUFFQSxTQUFBO0FBRkY7O0FBS0E7RUFDRSxxQkFBQTtBQUZGIiwiZmlsZSI6ImV4cGxvcmUtY29udGFpbmVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRhaW5lciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuXG4jY29udGFpbmVyIHN0cm9uZyB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XG59XG5cbiNjb250YWluZXIgcCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG5cbiAgY29sb3I6ICM4YzhjOGM7XG5cbiAgbWFyZ2luOiAwO1xufVxuXG4jY29udGFpbmVyIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59Il19 */";

/***/ }),

/***/ 36024:
/*!**********************************************!*\
  !*** ./src/app/jio/jio.page.scss?ngResource ***!
  \**********************************************/
/***/ ((module) => {

module.exports = "body {\n  margin: 0;\n}\n\n.filter-sort {\n  display: flex;\n  padding: 0px 0px 5px 0px;\n}\n\n.filter-sort ion-button {\n  --background: #6b45bc;\n  width: 200px;\n  margin: 0px 5px;\n  padding: 0;\n  font-family: \"Trebuchet MS\";\n  text-transform: uppercase;\n}\n\nion-content {\n  margin: 0;\n}\n\nion-content ion-card {\n  width: auto;\n}\n\nion-content ion-card ion-card-content {\n  height: 150px;\n  margin: 0;\n  padding: 10px;\n  font-family: \"Georgia\";\n}\n\nion-content ion-card ion-card-content ion-thumbnail {\n  margin: 0px 30px 0px 0px;\n}\n\nion-content ion-card ion-card-content ion-thumbnail ion-img {\n  width: 70px;\n  height: 100%;\n  object-fit: cover;\n  padding: 0px;\n  margin: 0px;\n}\n\nion-content ion-card ion-card-content ion-item {\n  padding: 0;\n  margin: 0;\n}\n\nion-content ion-card ion-card-content .p1 .titles {\n  padding: 0px 100px 0px 0px;\n  margin: 0;\n}\n\nion-content ion-card ion-card-content .p1 .titles .title {\n  font-family: \"Georgia\";\n  font-weight: bold;\n  font-size: 25px;\n  color: #400080;\n  margin-bottom: 10px;\n}\n\nion-content ion-card ion-card-content .p1 .titles .subtitle {\n  text-transform: uppercase;\n  font-family: \"Georgia\";\n  font-size: 10px;\n  color: #a4a4c1;\n  padding-right: 40px;\n}\n\nion-content ion-card ion-card-content .p2 .p-items {\n  padding: 0;\n  margin: 0;\n}\n\nion-content ion-card ion-card-content .p2 .p-items .p-item {\n  margin: 4px 4px 4px 0px;\n  font-family: \"Trebuchet MS\";\n  font-size: 15px;\n  margin-bottom: 1px;\n}\n\nion-content ion-card ion-card-content ion-buttons {\n  position: absolute;\n  bottom: 0rem;\n  right: 0rem;\n}\n\nion-content ion-card ion-card-content ion-buttons ion-button {\n  height: 30px;\n  width: 30px;\n  color: #6b45bc;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImppby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0ZBO0VBQ0ksU0FBQTtBQW5GSjs7QUFzRkE7RUFDSSxhQUFBO0VBQ0Esd0JBQUE7QUFuRko7O0FBcUZJO0VBQ0kscUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSwyQkFBQTtFQUNBLHlCQUFBO0FBbkZSOztBQXVGQTtFQUNJLFNBQUE7QUFwRko7O0FBc0ZJO0VBQ0ksV0FBQTtBQXBGUjs7QUFzRlE7RUFDSSxhQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQXBGWjs7QUFzRlk7RUFDSSx3QkFBQTtBQXBGaEI7O0FBc0ZnQjtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQXBGcEI7O0FBeUZZO0VBQ0ksVUFBQTtFQUNBLFNBQUE7QUF2RmhCOztBQTRGZ0I7RUFDSSwwQkFBQTtFQUNBLFNBQUE7QUExRnBCOztBQTRGb0I7RUFDSSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQTFGeEI7O0FBNkZvQjtFQUNJLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FBM0Z4Qjs7QUFxR2dCO0VBQ0ksVUFBQTtFQUNBLFNBQUE7QUFuR3BCOztBQXFHb0I7RUFDSSx1QkFBQTtFQUNBLDJCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBbkd4Qjs7QUF5R1k7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBdkdoQjs7QUF3R2dCO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0FBdEdwQiIsImZpbGUiOiJqaW8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHRcblx0Ly8gaW9uLXRvb2xiYXJ7XG4vLyAgICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbi8vICAgICAtLWlvbi1jb2xvci1iYXNlOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuLy8gICAgIC0tYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbi8vICAgICB9wqDCoFxuXG4vLyAuamlvIHAge1xuLy8gICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuLy8gfVxuXG4vLyAuamlvIHAxIHtcbi8vICAgICBmb250LXdlaWdodDogYm9sZDtcbi8vICAgICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XG4vLyB9XG5cblxuXG4vLyBib2R5IHtcbi8vICAgICBtYXJnaW46IDA7XG4vLyB9XG5cbi8vIGlvbi1jYXJkLWNvbnRlbnQge1xuLy8gICAgIG1hcmdpbjogMDtcbi8vICAgICBwYWRkaW5nOiAxMHB4O1xuLy8gICAgIGZvbnQtZmFtaWx5OiBcIkdlb3JnaWFcIjtcbi8vIH1cblxuLy8gaW9uLXRodW1ibmFpbCB7XG4vLyAgICAgbWFyZ2luOiAwcHggMzBweCAwcHggMHB4O1xuLy8gfVxuXG4vLyBpb24taW1nIHtcbi8vICAgICB3aWR0aDogNzBweDtcbi8vICAgICBoZWlnaHQ6IDEwMCU7XG4vLyAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4vLyAgICAgcGFkZGluZzogMHB4O1xuLy8gICAgIG1hcmdpbjogMHB4O1xuLy8gfVxuXG4vLyBpb24taXRlbSB7XG4vLyAgICAgcGFkZGluZzogMDtcbi8vICAgICBtYXJnaW46IDA7XG4vLyB9XG5cbi8vIGlvbi1sYWJlbCB7XG4vLyAgICAgcGFkZGluZzogMDtcbi8vICAgICBtYXJnaW46IDA7XG4vLyB9XG5cbi8vIHAge1xuLy8gICAgIG1hcmdpbjogNHB4IDRweCA0cHggMHB4O1xuLy8gICAgIGZvbnQtZmFtaWx5OiBcIlRyZWJ1Y2hldCBNU1wiO1xuLy8gfVxuXG4vLyAudGl0bGUge1xuLy8gICAgIGZvbnQtZmFtaWx5OiBcIkdlb3JnaWFcIjtcbi8vICAgICBmb250LXdlaWdodDogYm9sZDtcbi8vIH1cblxuLy8gLnN1YnRpdGxlIHtcbi8vICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuLy8gICAgIGZvbnQtZmFtaWx5OiBcIkdlb3JnaWFcIjtcbi8vICAgICBmb250LXNpemU6IDEwcHg7XG4vLyAgICAgLy8gY29sb3I6IGxpZ2h0Z29sZGVucm9keWVsbG93O1xuLy8gfVxuXG4vLyAuaGVhZGVyIHtcbi8vICAgICBkaXNwbGF5OiBmbGV4O1xuLy8gICAgIHBhZGRpbmc6IDBweCAwcHggNXB4IDBweDtcbi8vIH1cblxuLy8gLm9wdGlvbiB7XG4vLyAgICAgd2lkdGg6IDEwMHB4O1xuLy8gICAgIG1hcmdpbjogMHB4IDVweDtcbi8vICAgICBwYWRkaW5nOiAwO1xuLy8gICAgIGZvbnQtZmFtaWx5OiBcIlRyZWJ1Y2hldCBNU1wiO1xuLy8gICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4vLyB9XG5cblxuXG5cblxuYm9keSB7XG4gICAgbWFyZ2luOiAwO1xufVxuXG4uZmlsdGVyLXNvcnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgcGFkZGluZzogMHB4IDBweCA1cHggMHB4O1xuXG4gICAgaW9uLWJ1dHRvbiB7XG4gICAgICAgIC0tYmFja2dyb3VuZDogIzZiNDViYztcbiAgICAgICAgd2lkdGg6IDIwMHB4O1xuICAgICAgICBtYXJnaW46IDBweCA1cHg7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIlRyZWJ1Y2hldCBNU1wiO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIH1cbn1cblxuaW9uLWNvbnRlbnQge1xuICAgIG1hcmdpbjogMDtcblxuICAgIGlvbi1jYXJkIHtcbiAgICAgICAgd2lkdGg6IGF1dG87XG5cbiAgICAgICAgaW9uLWNhcmQtY29udGVudCB7XG4gICAgICAgICAgICBoZWlnaHQ6IDE1MHB4O1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIkdlb3JnaWFcIjtcblxuICAgICAgICAgICAgaW9uLXRodW1ibmFpbCB7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwcHggMzBweCAwcHggMHB4O1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaW9uLWltZyB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA3MHB4O1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwcHg7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaW9uLWl0ZW0ge1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAucDEge1xuXG4gICAgICAgICAgICAgICAgLnRpdGxlcyB7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDBweCAxMDBweCAwcHggMHB4O1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIC50aXRsZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogXCJHZW9yZ2lhXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNDAwMDgwO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgLnN1YnRpdGxlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogXCJHZW9yZ2lhXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2E0YTRjMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDQwcHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLnAyIHtcbiAgICAgICAgICAgICAgICAucC1pdGVtcyB7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgLnAtaXRlbSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDRweCA0cHggNHB4IDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIlRyZWJ1Y2hldCBNU1wiO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMXB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlvbi1idXR0b25zIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgYm90dG9tOiAwcmVtO1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAwcmVtO1xuICAgICAgICAgICAgICAgIGlvbi1idXR0b24ge1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzZiNDViYztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbn1cbiJdfQ== */";

/***/ }),

/***/ 50959:
/*!*******************************************************************************!*\
  !*** ./src/app/explore-container/explore-container.component.html?ngResource ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = "<div id=\"container\">\n  <strong>{{ name }}</strong>\n  <p>Explore <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://ionicframework.com/docs/components\">UI Components</a></p>\n</div>";

/***/ }),

/***/ 27265:
/*!**********************************************!*\
  !*** ./src/app/jio/jio.page.html?ngResource ***!
  \**********************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title>\n      Jio\n    </ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button menu=\"main-menu\"></ion-menu-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<!-- <ion-refresher on-refresh=\"doRefresh()\"></ion-refresher>\n<ion-list>\n  <ion-item class=\"item-avatar\" ng-repeat=\"item in items\">\n    <img src=\"{{item.user.picture.thumbnail}} \" />\n    ## {{item.user.name.first}} {{item.user.name.last}}\n    <p>{{item.user.location.city}} {{item.user.password}}</p>\n  </ion-item>\n</ion-list> -->\n\n<ion-content [fullscreen]=\"true\">\n\n<!-- \n<ion-card class = 'jio' (click)=\"nextpage()\" color = 'medium'>\n  <ion-grid>\n   <ion-row>\n    <ion-col>\n      <img src=\"https://static.vecteezy.com/system/resources/thumbnails/000/599/173/small/coffee.jpg\">\n    </ion-col>\n  <ion-col> \n  <ion-card-content color=\"light\">\n    <p>Message</p>\n  </ion-card-content>\n  </ion-col>\n   </ion-row>\n   <ion-card-content>\n    <p><strong>Address: </strong> {{item.vicinity}}</p>\n    <p><strong>Rating: </strong>{{item.rating}}/5</p>\n    <p><strong>Price: $</strong>$$</p>\n    <p><strong>Work Level: </strong></p>\n    <p><span style=\"color:red; font-weight: bold\">Live: </span>Not so busy</p>\n    <ion-fab vertical = \"bottom\" horizontal = \"end\" slot = \"fixed\">\n      <ion-fab-button color = \"success\" (click) = \"createJio()\" >\n        <ion-icon name = \"add\"></ion-icon>\n      </ion-fab-button>\n  \n  <ion-fab vertical = \"bottom\" horizontal = \"end\" slot = \"fixed\">\n      <ion-fab-button color = \"success\" (click) = \"createJio()\" >\n        <ion-icon name = \"add\"></ion-icon>\n      </ion-fab-button>\n  </ion-card-content>\n  </ion-grid>\n</ion-card> -->\n\n\n\n    <!-- <ion-card class = 'jio' (click)=\"viewJio(card)\" color = 'medium' *ngFor = 'let card of jioList'>\n      <ion-grid>\n       <ion-row>\n      <ion-col> \n      <ion-card-title>\n        <h2>{{card.header}}</h2>\n      </ion-card-title>\n      </ion-col>\n       </ion-row>\n       <ion-card-content>\n        <p1>Location: {{card.jioLocation}}</p1>\n        <br>\n        <p1>Date: {{card.jio_date_time}} </p1>\n        <br>\n        <p1>Duration: {{card.jio_duration}}</p1>\n        <br>\n        <p1>Description: {{card.jio_description}}</p1>\n      </ion-card-content>\n      </ion-grid>\n    </ion-card> -->\n\n    <ion-card *ngFor = 'let card of jioList' color = 'light' (click) = 'viewJio(card)'>\n      <ion-card-content color = 'light'>\n        <ion-item lines = 'none' color = 'light' class = 'p1'>\n          <ion-label class = 'titles'>\n            <ion-card-title class = 'title'>\n              {{card.header}}\n            </ion-card-title>\n            <ion-card-subtitle class = 'subtitle'>\n              {{card.jio_description}}\n            </ion-card-subtitle>\n          </ion-label>\n        </ion-item>\n        <ion-item lines = 'none' color = 'light' class = 'p2'>\n          <ion-label class = 'p-items'>\n            <p class = 'p-item'>\n              <strong>\n                LOCATION: \n              </strong>\n              {{card.jioLocation}}\n            </p>\n            <p class = 'p-item'>\n              <strong>\n                DATE & TIME: \n              </strong>\n              {{card.jio_date_time}}\n            </p>\n            <p class = 'p-item'> \n              <strong>\n                DURATION:\n              </strong>\n              {{card.jio_duration}}\n            </p>\n          </ion-label>\n        </ion-item>\n      </ion-card-content>\n    </ion-card>\n\n\n    \n\n    <ion-fab vertical = \"bottom\" horizontal = \"end\" slot = \"fixed\">\n      <ion-fab-button color = \"success\" (click) = \"createJio()\" >\n        <ion-icon name = \"add\"></ion-icon>\n      </ion-fab-button>\n    </ion-fab>\n\t</ion-content>\n\t\n\t\n\t";

/***/ })

}]);
//# sourceMappingURL=src_app_jio_jio_module_ts.js.map