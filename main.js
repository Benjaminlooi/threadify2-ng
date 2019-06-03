(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_threadify_threadify_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/threadify/threadify.component */ "./src/app/components/threadify/threadify.component.ts");




var routes = [
    { path: '', component: _components_threadify_threadify_component__WEBPACK_IMPORTED_MODULE_3__["ThreadifyComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'threadify2-ng';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/fesm5/angular-bootstrap-md.js");
/* harmony import */ var _components_threadify_threadify_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/threadify/threadify.component */ "./src/app/components/threadify/threadify.component.ts");











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _components_threadify_threadify_component__WEBPACK_IMPORTED_MODULE_10__["ThreadifyComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_9__["MDBBootstrapModule"].forRoot(),
                _angular_fire__WEBPACK_IMPORTED_MODULE_5__["AngularFireModule"].initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].firebaseConfig),
                _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__["AngularFirestoreModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/threadify/threadify.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/threadify/threadify.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n  <div class=\"main-wrapper mx-auto row justify-content-center\">\n\n    <div class=\"thread-wrapper col\">\n      <div class=\"second-wrapper\" #container>\n\n        <ng-container *ngIf=\"threads\">\n\n          <div *ngFor=\"let thread of threads\" class=\"thread\">\n            {{thread.payload.doc.data().message}}\n          </div>\n        </ng-container>\n\n      </div>\n    </div>\n\n\n    <form (submit)=\"onSubmit(threadInput.value)\">\n      <div class=\"form-row\">\n        <div class=\"col-md-9\">\n          <input #threadInput mdbInput [(ngModel)]=\"threadInput2\" type=\"text\" class=\"form-control\" id=\"inputThread\" name=\"first\" placeholder=\"Threadify\">\n        </div>\n        <div class=\"col-md-3\">\n\n          <a (click)=\"onSubmit(threadInput.value)\" class=\"btn btn-primary btn-md w-100\">Spank Me</a>\n        </div>\n      </div>\n    </form>\n\n\n  </div>\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/components/threadify/threadify.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/threadify/threadify.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  height: 100vh;\n  width: 100vw; }\n\nform {\n  position: absolute;\n  width: 100%;\n  bottom: 15px; }\n\n.form-control {\n  margin: 0.375rem; }\n\n.main-wrapper {\n  height: 100%;\n  position: relative;\n  max-width: 720px; }\n\n.thread-wrapper {\n  height: 100vh;\n  padding-bottom: 66.1px; }\n\n.second-wrapper {\n  position: relative;\n  height: 100%;\n  overflow-y: scroll; }\n\n.thread {\n  padding-left: 8px;\n  margin: 12px 0;\n  border-left: 4px solid #acacac; }\n\n@media (max-width: 768px) {\n  .thread-wrapper {\n    padding-bottom: 106.1px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90aHJlYWRpZnkvRDpcXHhhbXBwXFxodGRvY3NcXGJlbnNhbml0eVxcdGhyZWFkaWZ5Mi1uZy9zcmNcXGFwcFxcY29tcG9uZW50c1xcdGhyZWFkaWZ5XFx0aHJlYWRpZnkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsWUFBWSxFQUFBOztBQUdkO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZLEVBQUE7O0FBR2Q7RUFDRSxnQkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLGFBQWE7RUFDYixzQkFBc0IsRUFBQTs7QUFHeEI7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsOEJBQThCLEVBQUE7O0FBR2hDO0VBQ0U7SUFDRSx1QkFBdUIsRUFBQSxFQUN4QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdGhyZWFkaWZ5L3RocmVhZGlmeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJ7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICB3aWR0aDogMTAwdnc7XHJcbn1cclxuXHJcbmZvcm17XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJvdHRvbTogMTVweDtcclxufVxyXG5cclxuLmZvcm0tY29udHJvbHtcclxuICBtYXJnaW46IDAuMzc1cmVtO1xyXG59XHJcblxyXG4ubWFpbi13cmFwcGVye1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWF4LXdpZHRoOiA3MjBweDtcclxufVxyXG5cclxuLnRocmVhZC13cmFwcGVye1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgcGFkZGluZy1ib3R0b206IDY2LjFweDtcclxufVxyXG5cclxuLnNlY29uZC13cmFwcGVye1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG59XHJcblxyXG4udGhyZWFke1xyXG4gIHBhZGRpbmctbGVmdDogOHB4O1xyXG4gIG1hcmdpbjogMTJweCAwO1xyXG4gIGJvcmRlci1sZWZ0OiA0cHggc29saWQgI2FjYWNhYztcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KXtcclxuICAudGhyZWFkLXdyYXBwZXJ7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTA2LjFweDtcclxuICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/threadify/threadify.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/threadify/threadify.component.ts ***!
  \*************************************************************/
/*! exports provided: ThreadifyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThreadifyComponent", function() { return ThreadifyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_threads_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/threads.service */ "./src/app/services/threads.service.ts");




var ThreadifyComponent = /** @class */ (function () {
    function ThreadifyComponent(threadsService) {
        var _this = this;
        this.threadsService = threadsService;
        this.getCoffeeOrders = function () {
            _this.threadsService.getThreads().subscribe(function (res) {
                _this.threads = res;
                setTimeout(function () {
                    _this.scrollToBottom();
                }, 50);
            });
        };
    }
    ThreadifyComponent.prototype.ngOnInit = function () {
        this.getCoffeeOrders();
        this.scrollToBottom();
    };
    ThreadifyComponent.prototype.ngAfterViewInit = function () {
        this.scrollToBottom();
    };
    ThreadifyComponent.prototype.onSubmit = function (data) {
        this.threadInput2 = '';
        this.threadsService.createThread(data);
    };
    ThreadifyComponent.prototype.scrollToBottom = function () {
        this.container.nativeElement.scrollTop = this.container.nativeElement.scrollHeight;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('container'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ThreadifyComponent.prototype, "container", void 0);
    ThreadifyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-threadify',
            template: __webpack_require__(/*! ./threadify.component.html */ "./src/app/components/threadify/threadify.component.html"),
            styles: [__webpack_require__(/*! ./threadify.component.scss */ "./src/app/components/threadify/threadify.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_threads_service__WEBPACK_IMPORTED_MODULE_2__["ThreadsService"]])
    ], ThreadifyComponent);
    return ThreadifyComponent;
}());



/***/ }),

/***/ "./src/app/services/threads.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/threads.service.ts ***!
  \*********************************************/
/*! exports provided: ThreadsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThreadsService", function() { return ThreadsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");



var ThreadsService = /** @class */ (function () {
    function ThreadsService(firestore) {
        this.firestore = firestore;
    }
    ThreadsService.prototype.getThreads = function () {
        return this.firestore.collection('threads_main', function (ref) { return ref.orderBy('timestamp', 'asc'); }).snapshotChanges();
    };
    ThreadsService.prototype.createThread = function (data) {
        var _this = this;
        var thread = {
            message: data,
            timestamp: new Date()
        };
        return new Promise(function (resolve, reject) {
            _this.firestore.collection('threads_main').add(thread).then(function (res) { }, function (err) { reject(err); });
        });
    };
    ThreadsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]])
    ], ThreadsService);
    return ThreadsService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    firebaseConfig: {
        apiKey: "AIzaSyCK5tDu2zmXDw3lSHc9rTsPPe5jYzQEO4M",
        authDomain: "threadifyng.firebaseapp.com",
        databaseURL: "https://threadifyng.firebaseio.com",
        projectId: "threadifyng",
        storageBucket: "threadifyng.appspot.com",
        messagingSenderId: "40407034699",
        appId: "1:40407034699:web:23476a3a6622bcdf"
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\xampp\htdocs\bensanity\threadify2-ng\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map