"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_map_map_module_ts"],{

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

/***/ 81216:
/*!*******************************************!*\
  !*** ./src/app/map/map-routing.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MapPageRoutingModule": () => (/* binding */ MapPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var _map_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./map.page */ 69510);




const routes = [
    {
        path: '',
        component: _map_page__WEBPACK_IMPORTED_MODULE_0__.MapPage
    }
];
let MapPageRoutingModule = class MapPageRoutingModule {
};
MapPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MapPageRoutingModule);



/***/ }),

/***/ 42622:
/*!***********************************!*\
  !*** ./src/app/map/map.module.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MapPageModule": () => (/* binding */ MapPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38143);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 31777);
/* harmony import */ var _map_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./map.page */ 69510);
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../explore-container/explore-container.module */ 581);
/* harmony import */ var _map_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./map-routing.module */ 81216);








let MapPageModule = class MapPageModule {
};
MapPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__.ExploreContainerComponentModule,
            _map_routing_module__WEBPACK_IMPORTED_MODULE_2__.MapPageRoutingModule
        ],
        declarations: [_map_page__WEBPACK_IMPORTED_MODULE_0__.MapPage]
    })
], MapPageModule);



/***/ }),

/***/ 69510:
/*!*********************************!*\
  !*** ./src/app/map/map.page.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MapPage": () => (/* binding */ MapPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _map_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./map.page.html?ngResource */ 7122);
/* harmony import */ var _map_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./map.page.scss?ngResource */ 66942);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _service_google_places_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/google-places-api.service */ 5470);
/* harmony import */ var _awesome_cordova_plugins_geolocation_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @awesome-cordova-plugins/geolocation/ngx */ 70481);
/* harmony import */ var _service_profile_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/profile-api.service */ 86342);







let MapPage = class MapPage {
    // constructor(public api:GooglePlacesAPIService){}
    constructor(api, geolocation, profileApiService) {
        this.api = api;
        this.geolocation = geolocation;
        this.profileApiService = profileApiService;
        this.radius = 2000;
        this.infoWindows = [];
        this.markers = [];
        this.currentLoc = [];
        this.sg_lat = 1.3521;
        this.sg_lng = 103.8198;
    }
    ngOnInit() {
        console.log("in map page!");
        this.profileApiService.getProfile().subscribe(dataP => {
            this.profile = dataP;
        });
        setTimeout(() => {
            // console.log("hello " + this.profile)
            for (let key in this.profile) {
                sessionStorage.setItem(key, this.profile[key]);
            }
            console.log("retrieved profile " + this.profile);
        }, 1000);
    }
    panCamera() {
        this.addCurrentLocToMap(this.currentLoc);
        setTimeout(() => {
            this.addMarkersToMap(this.markers);
        }, 1000);
        this.map.panTo({ lat: this.currentLoc[0].latitude, lng: this.currentLoc[0].longitude });
        setTimeout(() => {
            this.map.setZoom(15);
        }, 1000);
    }
    getLocationsNearUser() {
        let loc = String(this.currentLoc[0].latitude) + '%2C' + String(this.currentLoc[0].longitude);
        this.api.getLocations(this.radius, loc).subscribe(result => {
            let locationData = result;
            let newLocation;
            for (let key in locationData) {
                if (locationData[key].rating && locationData[key].photos) {
                    newLocation = {
                        title: locationData[key].name,
                        latitude: String(locationData[key].geometry.location.lat),
                        longitude: String(locationData[key].geometry.location.lng),
                        rating: locationData[key].rating,
                    };
                    this.markers.push(newLocation);
                }
            }
        });
    }
    ionViewDidEnter() {
        this.showMap(this.sg_lat, this.sg_lng);
        this.geolocation.getCurrentPosition().then((resp) => {
            this.currentLoc = [{
                    latitude: resp.coords.latitude,
                    longitude: resp.coords.longitude
                }];
            this.getLocationsNearUser();
        }).catch((error) => {
            console.log('Error getting location', error);
        });
    }
    addMarkersToMap(markers) {
        for (let marker of markers) {
            let position = new google.maps.LatLng(marker.latitude, marker.longitude);
            let mapMarker = new google.maps.Marker({
                position: position,
                title: marker.title,
                latitude: marker.latitude,
                longitude: marker.longitude,
                rating: marker.rating,
            });
            mapMarker.setMap(this.map);
            //console.log(mapMarker);
            this.addInfoWindowToMarker(mapMarker);
        }
    }
    addCurrentLocToMap(markers) {
        for (let marker of markers) {
            let position = new google.maps.LatLng(marker.latitude, marker.longitude);
            let mapMarker = new google.maps.Marker({
                position: position,
                title: marker.title,
                latitude: marker.latitude,
                longitude: marker.longitude,
                rating: marker.rating,
                icon: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png'
            });
            mapMarker.setMap(this.map);
            // this.addInfoWindowToMarker(mapMarker);
        }
    }
    addInfoWindowToMarker(marker) {
        let infoWindowContent = '<div id="content" style="color:black">' +
            '<h2 id="firstHeading" class="firstHeading">' + marker.title + '</h2>' +
            '<h4> Rating: ' + marker.rating + '</h4>' +
            '<ion-button id="navigate">Navigate</ion-button>' +
            '</div>';
        let infoWindow = new google.maps.InfoWindow({
            content: infoWindowContent
        });
        marker.addListener('click', () => {
            this.closeAllInfoWindows();
            infoWindow.open(this.map, marker);
            google.maps.event.addListenerOnce(infoWindow, 'domready', () => {
                document.getElementById('navigate').addEventListener('click', () => {
                    console.log('button clicked!');
                    console.log(this.currentLoc[0].latitude);
                    window.open('https://www.google.com/maps/dir/?api=1&origin=' + this.currentLoc[0].latitude + ','
                        + this.currentLoc[0].longitude + '&destination=' + marker.latitude + ',' + marker.longitude);
                });
            });
        });
        this.infoWindows.push(infoWindow);
    }
    closeAllInfoWindows() {
        for (let window of this.infoWindows) {
            window.close();
        }
    }
    showMap(ref_lat, ref_lng) {
        const location = new google.maps.LatLng(ref_lat, ref_lng);
        const options = {
            center: location,
            zoom: 12,
            disableDefaultUI: true,
            keyboardShortcuts: false,
        };
        this.map = new google.maps.Map(this.mapRef.nativeElement, options);
        // this.addMarkersToMap(this.markers);
    }
    ionChange(event) {
        console.log(event.detail.value);
    }
};
MapPage.ctorParameters = () => [
    { type: _service_google_places_api_service__WEBPACK_IMPORTED_MODULE_2__.GooglePlacesAPIService },
    { type: _awesome_cordova_plugins_geolocation_ngx__WEBPACK_IMPORTED_MODULE_3__.Geolocation },
    { type: _service_profile_api_service__WEBPACK_IMPORTED_MODULE_4__.ProfileApiService }
];
MapPage.propDecorators = {
    mapRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ViewChild, args: ['map', { read: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ElementRef, static: false },] }],
    search: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ViewChild, args: ['search', { static: false },] }]
};
MapPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-map',
        template: _map_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_map_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], MapPage);



/***/ }),

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

/***/ 30572:
/*!*******************************************************************************!*\
  !*** ./src/app/explore-container/explore-container.component.scss?ngResource ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = "#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4cGxvcmUtY29udGFpbmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFFQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0FBQUY7O0FBR0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUFBRjs7QUFHQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUVBLGNBQUE7RUFFQSxTQUFBO0FBRkY7O0FBS0E7RUFDRSxxQkFBQTtBQUZGIiwiZmlsZSI6ImV4cGxvcmUtY29udGFpbmVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRhaW5lciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuXG4jY29udGFpbmVyIHN0cm9uZyB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XG59XG5cbiNjb250YWluZXIgcCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG5cbiAgY29sb3I6ICM4YzhjOGM7XG5cbiAgbWFyZ2luOiAwO1xufVxuXG4jY29udGFpbmVyIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59Il19 */";

/***/ }),

/***/ 66942:
/*!**********************************************!*\
  !*** ./src/app/map/map.page.scss?ngResource ***!
  \**********************************************/
/***/ ((module) => {

module.exports = "#map {\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hcC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0FBQ0oiLCJmaWxlIjoibWFwLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNtYXAge1xuICAgIGhlaWdodDogMTAwJSAgIFxufVxuIl19 */";

/***/ }),

/***/ 50959:
/*!*******************************************************************************!*\
  !*** ./src/app/explore-container/explore-container.component.html?ngResource ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = "<div id=\"container\">\n  <strong>{{ name }}</strong>\n  <p>Explore <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://ionicframework.com/docs/components\">UI Components</a></p>\n</div>";

/***/ }),

/***/ 7122:
/*!**********************************************!*\
  !*** ./src/app/map/map.page.html?ngResource ***!
  \**********************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title>\n      Map\n    </ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button menu=\"main-menu\"></ion-menu-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <div #map id=\"map\"></div>\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button>\n      <ion-icon name=\"locate\" (click)=\"panCamera()\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=default-src_app_map_map_module_ts.js.map