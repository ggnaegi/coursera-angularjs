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

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ui-view>\n  <nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n    <a class=\"navbar-brand\" href=\"#\">MenuApp</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n      <ul class=\"navbar-nav mr-auto\">\n        <li class=\"nav-item active\">\n          <a class=\"nav-link\" href=\"#\" uiSref=\"app-root\">Home<span class=\"sr-only\">(current)</span></a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#\" uiSref=\"categories\">Categories</a>\n        </li>\n      </ul>\n    </div>\n  </nav>\n\n  <div class=\"jumbotron mt-2\">\n    <div class=\"container\">\n      <h1 class=\"display-4\">MenuApp</h1>\n      <p class=\"lead\">Welcome to the MenuApp!</p>\n      <a class=\"btn btn-primary btn-lg\" href=\"#\" uiSref=\"categories\">Show me the Categories!</a>\n    </div>\n  </div>\n</ui-view>\n\n"

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
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _uirouter_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @uirouter/angular */ "./node_modules/@uirouter/angular/lib/index.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _categories_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./categories.component */ "./src/app/categories.component.ts");
/* harmony import */ var _items_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./items.component */ "./src/app/items.component.ts");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./data.service */ "./src/app/data.service.ts");
/* harmony import */ var _router_config__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./router.config */ "./src/app/router.config.ts");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_states__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app.states */ "./src/app/app.states.ts");













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _categories_component__WEBPACK_IMPORTED_MODULE_7__["CategoriesComponent"],
                _items_component__WEBPACK_IMPORTED_MODULE_8__["ItemsComponent"],
                _items_component__WEBPACK_IMPORTED_MODULE_8__["ItemsLiComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _uirouter_angular__WEBPACK_IMPORTED_MODULE_5__["UIRouterModule"].forRoot({
                    states: [_app_states__WEBPACK_IMPORTED_MODULE_12__["appState"], _app_states__WEBPACK_IMPORTED_MODULE_12__["categoriesState"], _app_states__WEBPACK_IMPORTED_MODULE_12__["itemsState"]],
                    useHash: true,
                    config: _router_config__WEBPACK_IMPORTED_MODULE_10__["routerConfigFn"],
                })
            ],
            exports: [
                _uirouter_angular__WEBPACK_IMPORTED_MODULE_5__["UIRouterModule"]
            ],
            providers: [_data_service__WEBPACK_IMPORTED_MODULE_9__["DataService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());

Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_11__["platformBrowserDynamic"])().bootstrapModule(AppModule).catch(function (err) { return console.error(err); });


/***/ }),

/***/ "./src/app/app.states.ts":
/*!*******************************!*\
  !*** ./src/app/app.states.ts ***!
  \*******************************/
/*! exports provided: appState, getAllCategoriesPrd, categoriesState, getItemsForCategoryPrd, itemsState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appState", function() { return appState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllCategoriesPrd", function() { return getAllCategoriesPrd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "categoriesState", function() { return categoriesState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getItemsForCategoryPrd", function() { return getItemsForCategoryPrd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "itemsState", function() { return itemsState; });
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _categories_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./categories.component */ "./src/app/categories.component.ts");
/* harmony import */ var _items_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./items.component */ "./src/app/items.component.ts");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data.service */ "./src/app/data.service.ts");
/* harmony import */ var _uirouter_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @uirouter/core */ "./node_modules/@uirouter/core/lib-esm/index.js");





var appState = {
    name: 'app',
    component: _app_component__WEBPACK_IMPORTED_MODULE_0__["AppComponent"],
    url: '/',
};
var getAllCategoriesPrd = function (dataService) {
    return dataService.getAllCategories();
};
var categoriesState = {
    name: 'categories',
    url: '/categories',
    component: _categories_component__WEBPACK_IMPORTED_MODULE_1__["CategoriesComponent"],
    resolve: [
        {
            token: 'categories',
            deps: [_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]],
            resolveFn: getAllCategoriesPrd
        }
    ]
};
var getItemsForCategoryPrd = function (dataService, transition) {
    return dataService.getItemsForCategory(transition.params().categoryId);
};
var itemsState = {
    name: 'items',
    parent: 'categories',
    url: '/items/:categoryId',
    resolve: [
        {
            token: 'itemsData',
            deps: [_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"], _uirouter_core__WEBPACK_IMPORTED_MODULE_4__["Transition"]],
            resolveFn: getItemsForCategoryPrd
        }
    ],
    views: {
        "items-div": {
            component: _items_component__WEBPACK_IMPORTED_MODULE_2__["ItemsComponent"]
        },
        "items-li": {
            component: _items_component__WEBPACK_IMPORTED_MODULE_2__["ItemsLiComponent"]
        }
    }
};


/***/ }),

/***/ "./src/app/categories.component.html":
/*!*******************************************!*\
  !*** ./src/app/categories.component.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\r\n  <a class=\"navbar-brand\" href=\"#\">MenuApp</a>\r\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n    <ul class=\"navbar-nav mr-auto\">\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" href=\"#\" uiSref=\"home\">Home</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" href=\"#\" uiSref=\"categories\">Categories</a>\r\n      </li>\r\n      <li class=\"nav-item\" ui-view=\"items-li\"></li>\r\n      <li class=\"nav-item dropdown\">\r\n        <a class=\"nav-link dropdown-toggle\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n          Choose category\r\n        </a>\r\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\r\n          <a class=\"dropdown-item\" uiSref=\"items\" [uiParams]=\"{categoryId:category.short_name}\" *ngFor=\"let category of categoriesList\">{{ category.name}}</a>\r\n        </div>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</nav>\r\n\r\n<div ui-view=\"items-div\">\r\n  <ul class=\"mt-2 ml-2 list-group\">\r\n    <a class=\"list-group-item list-group-item-action\" *ngFor=\"let category of categoriesList\" uiSref=\"items\" [uiParams]=\"{categoryId:category.short_name}\" href=\"#\">\r\n      {{category.name}}\r\n    </a>\r\n  </ul>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/categories.component.ts":
/*!*****************************************!*\
  !*** ./src/app/categories.component.ts ***!
  \*****************************************/
/*! exports provided: CategoriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesComponent", function() { return CategoriesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CategoriesComponent = /** @class */ (function () {
    function CategoriesComponent() {
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('categories'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CategoriesComponent.prototype, "categoriesList", void 0);
    CategoriesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./categories.component.html */ "./src/app/categories.component.html")
        })
    ], CategoriesComponent);
    return CategoriesComponent;
}());



/***/ }),

/***/ "./src/app/data.service.ts":
/*!*********************************!*\
  !*** ./src/app/data.service.ts ***!
  \*********************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var DataService = /** @class */ (function () {
    function DataService(httpClient) {
        this.httpClient = httpClient;
        this.baseUrl = "https://davids-restaurant.herokuapp.com";
    }
    DataService.prototype.getAllCategories = function () {
        return this.httpClient.get(this.baseUrl + "/categories.json").toPromise().then(function (result) {
            return result.sort(function (x, y) {
                var xName = x.name.toLowerCase();
                var yName = y.name.toLowerCase();
                return yName <= xName ? xName > yName ? 1 : 0 : -1;
            });
        });
    };
    DataService.prototype.getItemsForCategory = function (categoryShortName) {
        return this.httpClient.get(this.baseUrl + "/menu_items.json", { params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('category', categoryShortName) }).toPromise().then(function (result) {
            return {
                'currentCategory': result['category'],
                'sortedItems': result['menu_items'].sort(function (x, y) {
                    var xName = x.name.toLowerCase();
                    var yName = y.name.toLowerCase();
                    return yName <= xName ? xName > yName ? 1 : 0 : -1;
                })
            };
        });
    };
    DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/items.component.ts":
/*!************************************!*\
  !*** ./src/app/items.component.ts ***!
  \************************************/
/*! exports provided: ItemsComponent, ItemsLiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemsComponent", function() { return ItemsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemsLiComponent", function() { return ItemsLiComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ItemsComponent = /** @class */ (function () {
    function ItemsComponent() {
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('itemsData'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ItemsComponent.prototype, "itemsData", void 0);
    ItemsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: "<ul class=\"list-group mt-2 ml-2\">\n" +
                "<li *ngFor=\"let item of itemsData.sortedItems\" class=\"list-group-item\">{{item.name}}</li>\n" +
                "</ul>"
        })
    ], ItemsComponent);
    return ItemsComponent;
}());

var ItemsLiComponent = /** @class */ (function () {
    function ItemsLiComponent() {
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('itemsData'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ItemsLiComponent.prototype, "itemsData", void 0);
    ItemsLiComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: "<a class=\"nav-link\">{{itemsData.currentCategory.name}}<span class=\"sr-only\">(current)</span></a>"
        })
    ], ItemsLiComponent);
    return ItemsLiComponent;
}());



/***/ }),

/***/ "./src/app/router.config.ts":
/*!**********************************!*\
  !*** ./src/app/router.config.ts ***!
  \**********************************/
/*! exports provided: routerConfigFn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routerConfigFn", function() { return routerConfigFn; });
function routerConfigFn(router, injector) {
    router.urlService.rules.otherwise({ state: 'app' });
}


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
    production: false
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

module.exports = __webpack_require__(/*! C:\Dev\AngularJS-Coursera-Project\module4-solution-angular-7\MenuApp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map