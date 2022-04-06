"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_spot-details_spot-details_module_ts"],{

/***/ 5470:
/*!******************************************************!*\
  !*** ./src/app/service/google-places-api.service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GooglePlacesAPIService": () => (/* binding */ GooglePlacesAPIService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 78336);



let GooglePlacesAPIService = class GooglePlacesAPIService {
    constructor(http) {
        this.http = http;
    }
    getLocations(radius, locationCoord) {
        return this.http.get(`http://localhost:3000/api/locations/search?radius=${radius}&location=${locationCoord}`);
    }
    getDistance(origin, destination) {
        return this.http.get(`http://localhost:3000/api/locations/distance?origin=${origin}&destination=${destination}`);
    }
    getPlaceSearch(text) {
        return this.http.get(`http://localhost:3000/api/locations/placesearch?text=${text}`);
    }
    getPlaceCoordinates(placeID) {
        return this.http.get(`http://localhost:3000/api/locations/placecoordinates?placeid=${placeID}`);
    }
    getPlaceDetails(placeID) {
        return this.http.get(`http://localhost:3000/api/locations/placedetails?placeid=${placeID}`);
    }
    getPlacePhoto(photoRef, width) {
        return this.http.get(`http://localhost:3000/api/locations/placephoto?photoRef=${photoRef}&width=${width}`);
    }
};
GooglePlacesAPIService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient }
];
GooglePlacesAPIService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], GooglePlacesAPIService);



/***/ }),

/***/ 94237:
/*!*************************************************************!*\
  !*** ./src/app/spot-details/spot-details-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SpotDetailsPageRoutingModule": () => (/* binding */ SpotDetailsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var _spot_details_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./spot-details.page */ 58569);




const routes = [
    {
        path: '',
        component: _spot_details_page__WEBPACK_IMPORTED_MODULE_0__.SpotDetailsPage
    }
];
let SpotDetailsPageRoutingModule = class SpotDetailsPageRoutingModule {
};
SpotDetailsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SpotDetailsPageRoutingModule);



/***/ }),

/***/ 5753:
/*!*****************************************************!*\
  !*** ./src/app/spot-details/spot-details.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SpotDetailsPageModule": () => (/* binding */ SpotDetailsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38143);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 31777);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var _spot_details_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./spot-details-routing.module */ 94237);
/* harmony import */ var _spot_details_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./spot-details.page */ 58569);







let SpotDetailsPageModule = class SpotDetailsPageModule {
};
SpotDetailsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _spot_details_routing_module__WEBPACK_IMPORTED_MODULE_0__.SpotDetailsPageRoutingModule
        ],
        declarations: [_spot_details_page__WEBPACK_IMPORTED_MODULE_1__.SpotDetailsPage]
    })
], SpotDetailsPageModule);



/***/ }),

/***/ 58569:
/*!***************************************************!*\
  !*** ./src/app/spot-details/spot-details.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SpotDetailsPage": () => (/* binding */ SpotDetailsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _spot_details_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./spot-details.page.html?ngResource */ 27973);
/* harmony import */ var _spot_details_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./spot-details.page.scss?ngResource */ 37137);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _service_google_places_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/google-places-api.service */ 5470);
/* harmony import */ var _awesome_cordova_plugins_geolocation_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @awesome-cordova-plugins/geolocation/ngx */ 70481);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 65485);







let SpotDetailsPage = class SpotDetailsPage {
    constructor(api, geolocation, router) {
        this.api = api;
        this.geolocation = geolocation;
        this.router = router;
        this.currentLoc = [];
        // this.getCurrentLocation()
    }
    getCurrentLocation() {
        this.geolocation.getCurrentPosition().then((resp) => {
            this.currentLoc = [{
                    latitude: resp.coords.latitude,
                    longitude: resp.coords.longitude
                }];
        }).catch((error) => {
            console.log('Error getting location', error);
        });
    }
    ngOnInit() {
        this.place_id = sessionStorage.getItem("place_id");
        this.linearDistance = sessionStorage.getItem('linearDistance');
        this.src = sessionStorage.getItem('src');
        this.lat = sessionStorage.getItem('lat');
        this.lng = sessionStorage.getItem('lng');
        this.fetchLocation(this.place_id);
        this.getCurrentLocation();
    }
    fetchLocation(place_id) {
        let today = new Date().getDay();
        this.api.getPlaceDetails(place_id).subscribe(result => {
            console.log(result);
            this.spotDetails = Array.of(result);
            this.spotDetails[0].result.linearDistance = this.linearDistance;
            this.spotDetails[0].result.src = this.src;
            this.spotDetails[0].result.open = this.spotDetails[0].result.opening_hours.weekday_text[(today + 6) % 7];
        });
    }
    navigateToPlace() {
        // console.log("currentLoc " + this.currentLoc[0])
        window.open('https://www.google.com/maps/dir/?api=1&origin=' + this.currentLoc[0].latitude + ','
            + this.currentLoc[0].longitude + '&destination=' + this.lat + ',' + this.lng);
    }
    createJio() {
        console.log(this.spotDetails[0]);
        this.router.navigateByUrl('/create-jio', { state: { location: this.spotDetails[0], googleid: this.place_id } });
        // this.router.navigateByUrl('/create-jio', {state: {address: this.spotDetails.result.formatted_address, name: this.spotDetails.result.name, rating: this.spotDetails.result.rating}})
    }
};
SpotDetailsPage.ctorParameters = () => [
    { type: _service_google_places_api_service__WEBPACK_IMPORTED_MODULE_2__.GooglePlacesAPIService },
    { type: _awesome_cordova_plugins_geolocation_ngx__WEBPACK_IMPORTED_MODULE_3__.Geolocation },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router }
];
SpotDetailsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-spot-details',
        template: _spot_details_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_spot_details_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SpotDetailsPage);



/***/ }),

/***/ 37137:
/*!****************************************************************!*\
  !*** ./src/app/spot-details/spot-details.page.scss?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "body {\n  margin: 0;\n}\n\nion-content {\n  margin: 0;\n}\n\nion-content ion-card {\n  width: -moz-fit-content;\n  width: fit-content;\n}\n\nion-content ion-card img {\n  width: 100%;\n  object-fit: cover;\n  padding: 0px;\n  margin: 0px;\n}\n\nion-content ion-card ion-card-content {\n  height: -moz-fit-content;\n  height: fit-content;\n  margin: 0;\n  padding: 10px;\n  font-family: \"Georgia\";\n}\n\nion-content ion-card ion-card-content ion-item {\n  padding: 0;\n  margin: 0;\n}\n\nion-content ion-card ion-card-content .p1 .titles {\n  padding: 0;\n  margin: 0;\n}\n\nion-content ion-card ion-card-content .p1 .titles .title {\n  font-family: \"Georgia\";\n  font-weight: bold;\n  font-size: 25px;\n  color: #400080;\n  white-space: normal;\n  margin-bottom: 10px;\n}\n\nion-content ion-card ion-card-content .p1 .titles .subtitle {\n  text-transform: uppercase;\n  font-family: \"Georgia\";\n  font-size: 13px;\n  color: #a4a4c1;\n}\n\nion-content ion-card ion-card-content .p2 .p-items {\n  padding: 0;\n  margin: 0;\n}\n\nion-content ion-card ion-card-content .p2 .p-items .p-item {\n  margin: 4px 4px 4px 0px;\n  font-family: \"Trebuchet MS\";\n  font-size: 18px;\n  margin-bottom: 1px;\n  white-space: normal;\n}\n\nion-content ion-card ion-card-content ion-button {\n  --background: #6b45bc;\n  width: 100%;\n  margin: 10px 5px;\n  padding: 0;\n  font-family: \"Trebuchet MS\";\n  text-transform: uppercase;\n}\n\nion-content ion-card ion-card-content ion-button ion-icon {\n  margin-left: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNwb3QtZGV0YWlscy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxTQUFBO0FBQ0o7O0FBRUE7RUFDSSxTQUFBO0FBQ0o7O0FBQ0k7RUFDSSx1QkFBQTtFQUFBLGtCQUFBO0FBQ1I7O0FBQ1E7RUFDSSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQUNaOztBQUVRO0VBQ0ksd0JBQUE7RUFBQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUFBWjs7QUFFWTtFQUNJLFVBQUE7RUFDQSxTQUFBO0FBQWhCOztBQUlnQjtFQUNJLFVBQUE7RUFDQSxTQUFBO0FBRnBCOztBQUlvQjtFQUNJLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFGeEI7O0FBS29CO0VBQ0kseUJBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBSHhCOztBQVNlO0VBQ0ssVUFBQTtFQUNBLFNBQUE7QUFQcEI7O0FBU29CO0VBQ0ksdUJBQUE7RUFDQSwyQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBUHhCOztBQVlZO0VBQ0kscUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsMkJBQUE7RUFDQSx5QkFBQTtBQVZoQjs7QUFZZ0I7RUFDSSxpQkFBQTtBQVZwQiIsImZpbGUiOiJzcG90LWRldGFpbHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7XG4gICAgbWFyZ2luOiAwO1xufVxuXG5pb24tY29udGVudCB7XG4gICAgbWFyZ2luOiAwO1xuXG4gICAgaW9uLWNhcmQge1xuICAgICAgICB3aWR0aDogZml0LWNvbnRlbnQ7XG5cbiAgICAgICAgaW1nIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICAgICAgICBwYWRkaW5nOiAwcHg7XG4gICAgICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlvbi1jYXJkLWNvbnRlbnQge1xuICAgICAgICAgICAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJHZW9yZ2lhXCI7XG5cbiAgICAgICAgICAgIGlvbi1pdGVtIHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgIC5wMSB7XG4gICAgICAgICAgICAgICAgLnRpdGxlcyB7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgLnRpdGxlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIkdlb3JnaWFcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM0MDAwODA7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgLnN1YnRpdGxlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogXCJHZW9yZ2lhXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2E0YTRjMTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgIC5wMiB7XG4gICAgICAgICAgICAgICAucC1pdGVtcyB7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgLnAtaXRlbSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDRweCA0cHggNHB4IDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIlRyZWJ1Y2hldCBNU1wiO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaW9uLWJ1dHRvbiB7XG4gICAgICAgICAgICAgICAgLS1iYWNrZ3JvdW5kOiAjNmI0NWJjO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMTBweCA1cHg7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogXCJUcmVidWNoZXQgTVNcIjtcbiAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaW9uLWljb24ge1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICAgIFxuIH1cbiB9XG4iXX0= */";

/***/ }),

/***/ 27973:
/*!****************************************************************!*\
  !*** ./src/app/spot-details/spot-details.page.html?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar color=\"light\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Spot Details</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n  <ion-card *ngFor=\"let item of spotDetails\" color=\"light\">\n\n    <img [src] = \"item.result.src\" />\n    \n    <ion-card-content color=\"light\">\n    \n      <ion-item lines=\"none\" color=\"light\" class=\"p1\">\n        <ion-label class=\"titles\">\n          <ion-card-subtitle class=\"subtitle\">{{item.result.types[0]}}</ion-card-subtitle>\n          <ion-card-title class=\"title\">{{item.result.name}}</ion-card-title>\n        </ion-label>\n      </ion-item>\n\n      <ion-item lines=\"none\" color=\"light\" class=\"p2\">\n        \n        \n        <ion-label class=\"p-items\">\n          \n          <p class=\"p-item\"><strong>DISTANCE: </strong>{{item.result.linearDistance}} km</p>\n          <p class=\"p-item\"><strong>ADDRESS: </strong>{{item.result.formatted_address}}</p>\n          <p class=\"p-item\"><strong>RATING: </strong>{{item.result.rating}}/5</p>\n          <p class=\"p-item\"><strong>OPENING HOURS: </strong>{{item.result.open}}</p>\n\n        </ion-label>\n            \n      </ion-item>\n\n      <ion-button expand=\"block\" (click) = \"createJio()\">CREATE JIO \n        <ion-icon name=\"add\"></ion-icon>\n      </ion-button>\n\n      <ion-button expand=\"block\" (click)=\"navigateToPlace()\">GET DIRECTIONS\n        <ion-icon name=\"map-outline\" ></ion-icon>\n      </ion-button>\n\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_spot-details_spot-details_module_ts.js.map