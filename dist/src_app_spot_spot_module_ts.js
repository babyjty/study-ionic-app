"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_spot_spot_module_ts"],{

/***/ 87075:
/*!*****************************************************************************!*\
  !*** ./node_modules/ngx-order-pipe/__ivy_ngcc__/fesm2015/ngx-order-pipe.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrderModule": () => (/* binding */ OrderModule),
/* harmony export */   "OrderPipe": () => (/* binding */ OrderPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 51109);



class OrderPipe {
    /**
     * Check if a value is a string
     *
     * @param value
     */
    static isString(value) {
        return typeof value === "string" || value instanceof String;
    }
    /**
     * Sorts values ignoring the case
     *
     * @param a
     * @param b
     */
    static caseInsensitiveSort(a, b) {
        if (OrderPipe.isString(a) && OrderPipe.isString(b)) {
            return a.localeCompare(b);
        }
        return OrderPipe.defaultCompare(a, b);
    }
    /**
     * Default compare method
     *
     * @param a
     * @param b
     */
    static defaultCompare(a, b) {
        if (a && a instanceof Date) {
            a = a.getTime();
        }
        if (b && b instanceof Date) {
            b = b.getTime();
        }
        if (a === b) {
            return 0;
        }
        if (a == null) {
            return 1;
        }
        if (b == null) {
            return -1;
        }
        return a > b ? 1 : -1;
    }
    /**
     * Parse expression, split into items
     * @param expression
     * @returns {string[]}
     */
    static parseExpression(expression) {
        expression = expression.replace(/\[(\w+)\]/g, ".$1");
        expression = expression.replace(/^\./, "");
        return expression.split(".");
    }
    /**
     * Get value by expression
     *
     * @param object
     * @param expression
     * @returns {any}
     */
    static getValue(object, expression) {
        for (let i = 0, n = expression.length; i < n; ++i) {
            if (!object) {
                return;
            }
            const k = expression[i];
            if (!(k in object)) {
                return;
            }
            if (typeof object[k] === "function") {
                object = object[k]();
            }
            else {
                object = object[k];
            }
        }
        return object;
    }
    /**
     * Set value by expression
     *
     * @param object
     * @param value
     * @param expression
     */
    static setValue(object, value, expression) {
        let i;
        for (i = 0; i < expression.length - 1; i++) {
            object = object[expression[i]];
        }
        object[expression[i]] = value;
    }
    transform(value, expression, reverse, isCaseInsensitive = false, comparator) {
        if (!value) {
            return value;
        }
        if (Array.isArray(expression)) {
            return this.multiExpressionTransform(value, expression.slice(), reverse, isCaseInsensitive, comparator);
        }
        if (Array.isArray(value)) {
            return this.sortArray(value.slice(), expression, reverse, isCaseInsensitive, comparator);
        }
        if (typeof value === "object") {
            return this.transformObject(Object.assign({}, value), expression, reverse, isCaseInsensitive, comparator);
        }
        return value;
    }
    /**
     * Sort array, returns sorted array
     *
     * @param array
     * @param expression
     * @param reverse
     * @param isCaseInsensitive
     * @param comparator
     * @returns {Type[]}
     */
    sortArray(array, expression, reverse, isCaseInsensitive, comparator) {
        const isDeepLink = expression && expression.indexOf(".") !== -1;
        if (isDeepLink) {
            expression = OrderPipe.parseExpression(expression);
        }
        let compareFn;
        if (comparator && typeof comparator === "function") {
            compareFn = comparator;
        }
        else {
            compareFn = isCaseInsensitive
                ? OrderPipe.caseInsensitiveSort
                : OrderPipe.defaultCompare;
        }
        const sortedArray = array.sort((a, b) => {
            if (!expression) {
                return compareFn(a, b);
            }
            if (!isDeepLink) {
                if (a && b) {
                    return compareFn(a[expression], b[expression]);
                }
                return compareFn(a, b);
            }
            return compareFn(OrderPipe.getValue(a, expression), OrderPipe.getValue(b, expression));
        });
        if (reverse) {
            return sortedArray.reverse();
        }
        return sortedArray;
    }
    /**
     * Transform Object
     *
     * @param value
     * @param expression
     * @param reverse
     * @param isCaseInsensitive
     * @param comparator
     * @returns {any[]}
     */
    transformObject(value, expression, reverse, isCaseInsensitive, comparator) {
        const parsedExpression = OrderPipe.parseExpression(expression);
        let lastPredicate = parsedExpression.pop();
        let oldValue = OrderPipe.getValue(value, parsedExpression);
        if (!Array.isArray(oldValue)) {
            parsedExpression.push(lastPredicate);
            lastPredicate = null;
            oldValue = OrderPipe.getValue(value, parsedExpression);
        }
        if (!oldValue) {
            return value;
        }
        OrderPipe.setValue(value, this.transform(oldValue, lastPredicate, reverse, isCaseInsensitive), parsedExpression);
        return value;
    }
    /**
     * Apply multiple expressions
     *
     * @param value
     * @param {any[]} expressions
     * @param {boolean} reverse
     * @param {boolean} isCaseInsensitive
     * @param {Function} comparator
     * @returns {any}
     */
    multiExpressionTransform(value, expressions, reverse, isCaseInsensitive = false, comparator) {
        return expressions.reverse().reduce((result, expression) => {
            return this.transform(result, expression, reverse, isCaseInsensitive, comparator);
        }, value);
    }
}
OrderPipe.ɵfac = function OrderPipe_Factory(t) { return new (t || OrderPipe)(); };
OrderPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "orderBy", type: OrderPipe, pure: false });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrderPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Pipe,
        args: [{
                name: "orderBy",
                pure: false
            }]
    }], null, null); })();

/**
 * Created by vadimdez on 20/01/2017.
 */
class OrderModule {
}
OrderModule.ɵfac = function OrderModule_Factory(t) { return new (t || OrderModule)(); };
OrderModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: OrderModule });
OrderModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ providers: [OrderPipe] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrderModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
        args: [{
                declarations: [OrderPipe],
                exports: [OrderPipe],
                providers: [OrderPipe]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](OrderModule, { declarations: [OrderPipe], exports: [OrderPipe] }); })();

/**
 * Generated bundle index. Do not edit.
 */





/***/ }),

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

/***/ 45233:
/*!*********************************************!*\
  !*** ./src/app/spot/spot-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SpotPageRoutingModule": () => (/* binding */ SpotPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var _spot_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./spot.page */ 43582);




const routes = [
    {
        path: '',
        component: _spot_page__WEBPACK_IMPORTED_MODULE_0__.SpotPage,
    },
];
let SpotPageRoutingModule = class SpotPageRoutingModule {
};
SpotPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], SpotPageRoutingModule);



/***/ }),

/***/ 5060:
/*!*************************************!*\
  !*** ./src/app/spot/spot.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SpotPageModule": () => (/* binding */ SpotPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38143);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 31777);
/* harmony import */ var _spot_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./spot.page */ 43582);
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../explore-container/explore-container.module */ 581);
/* harmony import */ var _spot_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./spot-routing.module */ 45233);
/* harmony import */ var ngx_order_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-order-pipe */ 87075);









let SpotPageModule = class SpotPageModule {
};
SpotPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__.ExploreContainerComponentModule,
            _spot_routing_module__WEBPACK_IMPORTED_MODULE_2__.SpotPageRoutingModule,
            ngx_order_pipe__WEBPACK_IMPORTED_MODULE_8__.OrderModule
        ],
        declarations: [_spot_page__WEBPACK_IMPORTED_MODULE_0__.SpotPage]
    })
], SpotPageModule);



/***/ }),

/***/ 43582:
/*!***********************************!*\
  !*** ./src/app/spot/spot.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SpotPage": () => (/* binding */ SpotPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _spot_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./spot.page.html?ngResource */ 85153);
/* harmony import */ var _spot_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./spot.page.scss?ngResource */ 54705);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var _service_google_places_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/google-places-api.service */ 5470);
/* harmony import */ var _awesome_cordova_plugins_geolocation_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @awesome-cordova-plugins/geolocation/ngx */ 70481);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 65485);








let SpotPage = class SpotPage {
    constructor(api, geolocation, actionSheetController, router) {
        this.api = api;
        this.geolocation = geolocation;
        this.actionSheetController = actionSheetController;
        this.router = router;
        this.radius = 2000;
        this.currentCoord = undefined;
        this.preferredLoc = undefined;
        this.orderHeader = '';
        this.isDescOrder = true;
        this.getCurrentLocation();
    }
    getCurrentLocation() {
        this.geolocation.getCurrentPosition().then((resp) => {
            this.currentCoord = String(resp.coords.latitude) + '%2C' + String(resp.coords.longitude);
            console.log(this.currentCoord);
        }).catch((error) => {
            console.log('Error getting location', error);
        });
    }
    fetchLocations() {
        console.log(this.preferredLoc);
        this.api.getPlaceSearch(this.preferredLoc).subscribe(resultID => {
            let placeID = String(resultID);
            if (!placeID) {
                return;
            }
            this.api.getPlaceCoordinates(String(placeID)).subscribe(resultCoord => {
                let coord, lat, lng;
                for (let key in resultCoord) {
                    if (resultCoord.hasOwnProperty(key)) {
                        if (key == 'lat') {
                            lat = resultCoord[key];
                        }
                        else if (key == 'lng') {
                            lng = resultCoord[key];
                        }
                        else {
                            coord = resultCoord[key];
                        }
                    }
                }
                this.api.getLocations(this.radius, coord).subscribe(result => {
                    this.locationData = result;
                    this.locationData = this.locationData.filter(location => {
                        if (location.rating) {
                            return location;
                        }
                    });
                    let destination;
                    // Get the distances for all the locations retrieved from Google Places
                    for (let i = 0; i < this.locationData.length; i++) {
                        destination = 'place_id:' + this.locationData[i].place_id;
                        // Get walking distance
                        this.fetchDistance(placeID, destination, i);
                        let lat2 = this.locationData[i].geometry.location.lat;
                        let lng2 = this.locationData[i].geometry.location.lng;
                        // Get straight line distance using Haversine Formula
                        this.locationData[i].linearDistance = this.getDistanceFromLatLonInKm(lat, lng, lat2, lng2);
                        // Add picture for each location
                        if (this.locationData[i].photos) {
                            this.fetchPhoto(this.locationData[i].photos[0].photo_reference, 1000, i);
                        }
                        else {
                            if (this.locationData[i].types[0] == 'library') {
                                this.locationData[i].src = 'https://static.vecteezy.com/system/resources/previews/000/567/874/non_2x/library-building-icon-vector.jpg';
                            }
                            else {
                                this.locationData[i].src = "https://static.vecteezy.com/system/resources/thumbnails/000/599/173/small/coffee.jpg";
                            }
                        }
                    }
                    console.log(this.locationData);
                    this.filteredLocations = this.locationData;
                });
            });
        });
    }
    // fetchLocation(place_id:String){
    //   this.api.getPlaceDetails(place_id).subscribe(result => {
    //     console.log(result);
    //   })
    // }
    fetchDistance(origin, destination, index) {
        // Google Distance Matrix API call 
        this.api.getDistance(origin, destination).subscribe(result => {
            this.locationData[index].walkingDistance = Number(result) / 1000;
        });
    }
    getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
        var R = 6371; // Radius of the earth in km
        var dLat = this.deg2rad(lat2 - lat1);
        var dLon = this.deg2rad(lon2 - lon1);
        var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) *
                Math.sin(dLon / 2) * Math.sin(dLon / 2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        var d = R * c; // Distance in km
        return Math.round(d * 1000) / 1000;
    }
    deg2rad(deg) {
        return deg * (Math.PI / 180);
    }
    fetchPhoto(photoRef, width, index) {
        this.api.getPlacePhoto(photoRef, width).subscribe(result => {
            for (let key in result) {
                if (key == 'url') {
                    // console.log(result[key]);
                    this.locationData[index].src = result[key];
                }
            }
        });
    }
    // SORTING
    sort(headerName) {
        this.isDescOrder = !this.isDescOrder;
        this.orderHeader = headerName;
    }
    sorting() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetController.create({
                header: 'SORT BY',
                buttons: [{
                        text: 'Name',
                        data: 10,
                        handler: () => {
                            this.sort('name');
                        }
                    }, {
                        text: 'Address',
                        data: 'Data value',
                        handler: () => {
                            this.sort('vicinity');
                        }
                    }, {
                        text: 'Rating',
                        handler: () => {
                            this.sort('rating');
                        }
                    }, {
                        text: 'Distance',
                        handler: () => {
                            this.sort('linearDistance');
                        }
                    }, {
                        text: 'Cancel',
                        icon: 'close',
                        role: 'cancel',
                        handler: () => {
                            // console.log('Cancel clicked');
                        }
                    }]
            });
            yield actionSheet.present();
            const { role, data } = yield actionSheet.onDidDismiss();
            // console.log('onDidDismiss resolved with role and data', role, data);
        });
    }
    // SEARCH BAR
    search() {
        const searchbar = document.getElementById("search-bar");
        // const items = Array.from(document.querySelector('ion-list').children);
        const items = this.locationData;
        searchbar.addEventListener('ionInput', handleInput);
        function handleInput(event) {
            const query = event.target.value.toLowerCase();
            requestAnimationFrame(() => {
                items.forEach((item) => {
                    const shouldShow = item.textContent.toLowerCase().indexOf(query) > -1;
                    item.style.display = shouldShow ? 'block' : 'none';
                });
            });
        }
    }
    // FILTERING
    // filter(array: string, func: any) {
    //   let array2 = [];
    //   for ( var counter = 0; counter < array.length; counter++) {       
    //     if (func(array[counter], counter, array )) {
    //       array2.push(array[counter]);
    //     }
    //   }
    //   return array2;
    // }
    filtering() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetController.create({
                header: 'FILTER BY',
                buttons: [{
                        text: 'Distance',
                        data: 'Data value',
                        handler: () => {
                            this.filteringDistance();
                        }
                    }, {
                        text: 'Rating',
                        handler: () => {
                            // this.filter('rating',function(value: number) {return value >3});
                            this.filteringRating();
                        }
                    }, {
                        text: 'Price',
                        data: 10,
                        handler: () => {
                            this.filteringPrice();
                        }
                    }, {
                        text: 'Cancel',
                        icon: 'close',
                        role: 'cancel',
                        handler: () => {
                            console.log('Cancel clicked');
                        }
                    }]
            });
            yield actionSheet.present();
            const { role, data } = yield actionSheet.onDidDismiss();
            // console.log('onDidDismiss resolved with role and data', role, data);
        });
    }
    filteringDistance() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetController.create({
                header: 'FILTER BY DISTANCE',
                buttons: [{
                        text: 'Within 500m',
                        data: 10,
                        handler: () => {
                            this.filteredLocations = this.locationData.filter(item => {
                                if (item.linearDistance <= 0.5) {
                                    return item;
                                }
                            });
                        }
                    }, {
                        text: 'Within 1000m',
                        data: 'Data value',
                        handler: () => {
                            this.filteredLocations = this.locationData.filter(item => {
                                if (item.linearDistance <= 1.0) {
                                    return item;
                                }
                            });
                        }
                    }, {
                        text: 'Within 2000m',
                        handler: () => {
                            this.filteredLocations = this.locationData;
                        }
                    }, {
                        text: 'Cancel',
                        icon: 'close',
                        role: 'cancel',
                        handler: () => {
                            console.log('Cancel clicked');
                        }
                    }]
            });
            yield actionSheet.present();
            const { role, data } = yield actionSheet.onDidDismiss();
            // console.log('onDidDismiss resolved with role and data', role, data);
        });
    }
    filteringRating() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetController.create({
                header: 'FILTER BY RATING',
                buttons: [{
                        text: 'Above 4/5',
                        data: 10,
                        handler: () => {
                            this.filteredLocations = this.locationData.filter(item => {
                                if (item.rating >= 4.0) {
                                    return item;
                                }
                            });
                        }
                    }, {
                        text: 'Above 3/5',
                        data: 'Data value',
                        handler: () => {
                            this.filteredLocations = this.locationData.filter(item => {
                                if (item.rating >= 3.0) {
                                    return item;
                                }
                            });
                        }
                    }, {
                        text: 'ALL',
                        handler: () => {
                            this.filteredLocations = this.locationData.filter(item => {
                                if (item.rating >= 0.0) {
                                    return item;
                                }
                            });
                        }
                    }, {
                        text: 'Cancel',
                        icon: 'close',
                        role: 'cancel',
                        handler: () => {
                            console.log('Cancel clicked');
                        }
                    }]
            });
            yield actionSheet.present();
            const { role, data } = yield actionSheet.onDidDismiss();
            // console.log('onDidDismiss resolved with role and data', role, data);
        });
    }
    filteringPrice() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetController.create({
                header: 'FILTER BY PRICE',
                buttons: [{
                        text: '$',
                        data: 10,
                        handler: () => {
                        }
                    }, {
                        text: '$$',
                        data: 'Data value',
                        handler: () => {
                        }
                    }, {
                        text: '$$$',
                        handler: () => {
                        }
                    }, {
                        text: 'Cancel',
                        icon: 'close',
                        role: 'cancel',
                        handler: () => {
                            console.log('Cancel clicked');
                        }
                    }]
            });
            yield actionSheet.present();
            const { role, data } = yield actionSheet.onDidDismiss();
            // console.log('onDidDismiss resolved with role and data', role, data);
        });
    }
    // GO TO DETAILS PAGE
    goToDetailsPage(place_id, linearDistance, src, lat, lng) {
        sessionStorage.setItem("place_id", place_id);
        sessionStorage.setItem('linearDistance', String(linearDistance));
        sessionStorage.setItem('src', src);
        sessionStorage.setItem('lat', lat);
        sessionStorage.setItem('lng', lng);
        console.log(place_id);
        this.router.navigate(['/spot-details', place_id]);
        // this.router.navigate(['spot-details']);
    }
};
SpotPage.ctorParameters = () => [
    { type: _service_google_places_api_service__WEBPACK_IMPORTED_MODULE_2__.GooglePlacesAPIService },
    { type: _awesome_cordova_plugins_geolocation_ngx__WEBPACK_IMPORTED_MODULE_3__.Geolocation },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ActionSheetController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router }
];
SpotPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-spot',
        template: _spot_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_spot_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SpotPage);



/***/ }),

/***/ 30572:
/*!*******************************************************************************!*\
  !*** ./src/app/explore-container/explore-container.component.scss?ngResource ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = "#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4cGxvcmUtY29udGFpbmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFFQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0FBQUY7O0FBR0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUFBRjs7QUFHQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUVBLGNBQUE7RUFFQSxTQUFBO0FBRkY7O0FBS0E7RUFDRSxxQkFBQTtBQUZGIiwiZmlsZSI6ImV4cGxvcmUtY29udGFpbmVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRhaW5lciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuXG4jY29udGFpbmVyIHN0cm9uZyB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XG59XG5cbiNjb250YWluZXIgcCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG5cbiAgY29sb3I6ICM4YzhjOGM7XG5cbiAgbWFyZ2luOiAwO1xufVxuXG4jY29udGFpbmVyIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59Il19 */";

/***/ }),

/***/ 54705:
/*!************************************************!*\
  !*** ./src/app/spot/spot.page.scss?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "body {\n  margin: 0;\n}\n\n.filter-sort {\n  display: flex;\n  padding: 0px 0px 5px 0px;\n}\n\n.filter-sort ion-button {\n  --background: #6b45bc;\n  width: 200px;\n  margin: 0px 5px;\n  padding: 0;\n  font-family: \"Trebuchet MS\";\n  text-transform: uppercase;\n}\n\nion-content {\n  margin: 0;\n}\n\nion-content ion-card {\n  width: auto;\n}\n\nion-content ion-card ion-card-content {\n  height: 150px;\n  margin: 0;\n  padding: 10px;\n  font-family: \"Georgia\";\n}\n\nion-content ion-card ion-card-content ion-thumbnail {\n  margin: 0px 30px 0px 0px;\n}\n\nion-content ion-card ion-card-content ion-thumbnail ion-img {\n  width: 70px;\n  height: 100%;\n  object-fit: cover;\n  padding: 0px;\n  margin: 0px;\n}\n\nion-content ion-card ion-card-content ion-item {\n  padding: 0;\n  margin: 0;\n}\n\nion-content ion-card ion-card-content .p1 .titles {\n  padding: 0px 100px 0px 0px;\n  margin: 0;\n}\n\nion-content ion-card ion-card-content .p1 .titles .title {\n  font-family: \"Georgia\";\n  font-weight: bold;\n  font-size: 25px;\n  color: #400080;\n  margin-bottom: 10px;\n}\n\nion-content ion-card ion-card-content .p1 .titles .subtitle {\n  text-transform: uppercase;\n  font-family: \"Georgia\";\n  font-size: 10px;\n  color: #a4a4c1;\n  padding-right: 40px;\n}\n\nion-content ion-card ion-card-content .p2 .p-items {\n  padding: 0;\n  margin: 0;\n}\n\nion-content ion-card ion-card-content .p2 .p-items .p-item {\n  margin: 4px 4px 4px 0px;\n  font-family: \"Trebuchet MS\";\n  font-size: 15px;\n  margin-bottom: 1px;\n}\n\nion-content ion-card ion-card-content ion-buttons {\n  position: absolute;\n  bottom: 0rem;\n  right: 0rem;\n}\n\nion-content ion-card ion-card-content ion-buttons ion-button {\n  height: 30px;\n  width: 30px;\n  color: #6b45bc;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNwb3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksU0FBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLHdCQUFBO0FBQ0o7O0FBQ0k7RUFDSSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLDJCQUFBO0VBQ0EseUJBQUE7QUFDUjs7QUFHQTtFQUNJLFNBQUE7QUFBSjs7QUFFSTtFQUNJLFdBQUE7QUFBUjs7QUFFUTtFQUNJLGFBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FBQVo7O0FBRVk7RUFDSSx3QkFBQTtBQUFoQjs7QUFFZ0I7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFBcEI7O0FBS1k7RUFDSSxVQUFBO0VBQ0EsU0FBQTtBQUhoQjs7QUFRZ0I7RUFDSSwwQkFBQTtFQUNBLFNBQUE7QUFOcEI7O0FBUW9CO0VBQ0ksc0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUFOeEI7O0FBU29CO0VBQ0kseUJBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUFQeEI7O0FBaUJnQjtFQUNJLFVBQUE7RUFDQSxTQUFBO0FBZnBCOztBQWlCb0I7RUFDSSx1QkFBQTtFQUNBLDJCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBZnhCOztBQXFCWTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFuQmhCOztBQW9CZ0I7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7QUFsQnBCIiwiZmlsZSI6InNwb3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7XG4gICAgbWFyZ2luOiAwO1xufVxuXG4uZmlsdGVyLXNvcnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgcGFkZGluZzogMHB4IDBweCA1cHggMHB4O1xuXG4gICAgaW9uLWJ1dHRvbiB7XG4gICAgICAgIC0tYmFja2dyb3VuZDogIzZiNDViYztcbiAgICAgICAgd2lkdGg6IDIwMHB4O1xuICAgICAgICBtYXJnaW46IDBweCA1cHg7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIlRyZWJ1Y2hldCBNU1wiO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIH1cbn1cblxuaW9uLWNvbnRlbnQge1xuICAgIG1hcmdpbjogMDtcblxuICAgIGlvbi1jYXJkIHtcbiAgICAgICAgd2lkdGg6IGF1dG87XG5cbiAgICAgICAgaW9uLWNhcmQtY29udGVudCB7XG4gICAgICAgICAgICBoZWlnaHQ6IDE1MHB4O1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIkdlb3JnaWFcIjtcblxuICAgICAgICAgICAgaW9uLXRodW1ibmFpbCB7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwcHggMzBweCAwcHggMHB4O1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaW9uLWltZyB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA3MHB4O1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwcHg7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaW9uLWl0ZW0ge1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAucDEge1xuXG4gICAgICAgICAgICAgICAgLnRpdGxlcyB7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDBweCAxMDBweCAwcHggMHB4O1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIC50aXRsZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogXCJHZW9yZ2lhXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNDAwMDgwO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgLnN1YnRpdGxlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogXCJHZW9yZ2lhXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2E0YTRjMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDQwcHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLnAyIHtcbiAgICAgICAgICAgICAgICAucC1pdGVtcyB7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgLnAtaXRlbSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDRweCA0cHggNHB4IDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIlRyZWJ1Y2hldCBNU1wiO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMXB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlvbi1idXR0b25zIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgYm90dG9tOiAwcmVtO1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAwcmVtO1xuICAgICAgICAgICAgICAgIGlvbi1idXR0b24ge1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzZiNDViYztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbn1cblxuXG5cblxuXG4iXX0= */";

/***/ }),

/***/ 50959:
/*!*******************************************************************************!*\
  !*** ./src/app/explore-container/explore-container.component.html?ngResource ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = "<div id=\"container\">\n  <strong>{{ name }}</strong>\n  <p>Explore <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://ionicframework.com/docs/components\">UI Components</a></p>\n</div>";

/***/ }),

/***/ 85153:
/*!************************************************!*\
  !*** ./src/app/spot/spot.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\">\n\n  <ion-toolbar>\n    <ion-title>\n      Spot\n    </ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button menu=\"main-menu\"></ion-menu-button>\n    </ion-buttons>\n  </ion-toolbar>\n      \n  <!-- <ion-searchbar placeholder=\"Find a place to study...\" [(ngModel)]=\"preferredLoc\" (keydown.enter)=\"fetchLocations()\" animated></ion-searchbar> -->\n  \n  <ion-searchbar placeholder=\"Enter location\" [(ngModel)]=\"preferredLoc\" (keydown.enter)=\"fetchLocations()\" id=\"search-bar\"></ion-searchbar>\n  \n  <div class=\"filter-sort\">\n    <ion-button expand=\"block\" (click)=\"filtering()\" class=\"fliter\">FILTER</ion-button>\n    <ion-button expand=\"block\" (click)=\"sorting()\" class=\"sort\">SORT</ion-button>\n  </div>\n    \n</ion-header>\n    \n<ion-content>\n\n  <ion-card *ngFor=\"let item of filteredLocations | orderBy: orderHeader: isDescOrder\" color=\"light\" (click)=\"goToDetailsPage(item.place_id, item.linearDistance, item.src, item.geometry.location.lat, item.geometry.location.lng)\">\n\n    <ion-card-content color=\"light\">\n    \n      <ion-item lines=\"none\" color=\"light\" class=\"p1\">\n\n        <ion-label class=\"titles\">\n\n          <ion-card-subtitle class=\"subtitle\">{{item.types[0]}}</ion-card-subtitle>\n\n          <ion-card-title class=\"title\">{{item.name}}</ion-card-title>\n\n        </ion-label>\n\n      </ion-item>\n\n      <ion-item lines=\"none\" color=\"light\" class=\"p2\">\n\n        <ion-thumbnail>\n          <ion-img [src]=\"item.src\"></ion-img>\n        </ion-thumbnail>\n        \n        <ion-label class=\"p-items\">\n          \n          <p class=\"p-item\"><strong>DISTANCE: </strong>{{item.linearDistance}} km</p>\n          <p class=\"p-item\"><strong>ADDRESS: </strong>{{item.vicinity}}</p>\n          <p class=\"p-item\"><strong>RATING: </strong>{{item.rating}}/5</p>\n\n          <!-- <p><strong>PRICE: $</strong>$$</p>\n          <p><span style=\"color:red; font-weight: bold\">LIVE: </span>Not so busy</p> -->\n        </ion-label>\n            \n      </ion-item>\n\n      <!-- <ion-buttons>\n        <ion-button>\n          <ion-icon slot=\"icon-only\" name=\"add\"></ion-icon>\n        </ion-button>\n      </ion-buttons> -->\n    \n    </ion-card-content>\n  </ion-card>\n</ion-content>\n ";

/***/ })

}]);
//# sourceMappingURL=src_app_spot_spot_module_ts.js.map