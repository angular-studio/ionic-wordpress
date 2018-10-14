(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["shop-home-shop-home-module"],{

/***/ "./src/app/shared-components/header/header.component.html":
/*!****************************************************************!*\
  !*** ./src/app/shared-components/header/header.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      Shop Home\n    </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"presentModal()\">\n        <ion-icon name=\"search\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>"

/***/ }),

/***/ "./src/app/shared-components/header/header.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/shared-components/header/header.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared-components/header/header.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared-components/header/header.component.ts ***!
  \**************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _search_modal_search_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../search-modal/search-modal.component */ "./src/app/shared-components/search-modal/search-modal.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(modalController) {
        this.modalController = modalController;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.presentModal = function () {
        return __awaiter(this, void 0, void 0, function () {
            var modal;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _search_modal_search_modal_component__WEBPACK_IMPORTED_MODULE_2__["SearchModalComponent"],
                            componentProps: { value: 123 }
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/shared-components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/shared-components/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/shared-components/search-modal/search-modal.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/shared-components/search-modal/search-modal.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-button (click)=\"closeModal()\">\n            <ion-icon name=\"arrow-back\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n      <ion-title>\n       Search product\n      </ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n<ion-content padding>\n  <ion-searchbar debounce=\"800\" (ionChange)=\"updateSearchKey($event)\"></ion-searchbar>\n  <ion-button expand=\"full\" (click)=\"search()\">Search</ion-button>\n  <h3>Categories</h3>\n\n  <ion-list>\n    <ion-item *ngFor=\"let cat of categories\" [routerLink]=\"'/shop-home'\" [queryParams]=\"{'category': cat.id}\" (click)=\"closeModal()\">\n      <ion-avatar slot=\"start\" *ngIf=\"cat?.image\">\n        <img [src]=\"cat?.image?.src\"/>\n      </ion-avatar>\n      <ion-label>\n        <h2>{{cat.name}}</h2>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/shared-components/search-modal/search-modal.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/shared-components/search-modal/search-modal.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-searchbar {\n  padding: 0;\n  margin-bottom: 10px; }\n"

/***/ }),

/***/ "./src/app/shared-components/search-modal/search-modal.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/shared-components/search-modal/search-modal.component.ts ***!
  \**************************************************************************/
/*! exports provided: SearchModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchModalComponent", function() { return SearchModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var ngx_wooapi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-wooapi */ "./node_modules/ngx-wooapi/fesm5/ngx-wooapi.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SearchModalComponent = /** @class */ (function () {
    function SearchModalComponent(modalControler, woocommerceCategoriesService, router) {
        this.modalControler = modalControler;
        this.woocommerceCategoriesService = woocommerceCategoriesService;
        this.router = router;
        this.categories = [];
    }
    SearchModalComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.woocommerceCategoriesService.retrieveCategories().subscribe(function (res) {
            _this.categories = res;
        });
    };
    SearchModalComponent.prototype.closeModal = function () {
        this.modalControler.dismiss();
    };
    SearchModalComponent.prototype.updateSearchKey = function (e) {
        this.searchString = e.target.value;
    };
    SearchModalComponent.prototype.search = function () {
        this.router.navigate(['/shop-home'], { queryParams: { search: this.searchString } });
        this.closeModal();
    };
    SearchModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search-modal',
            template: __webpack_require__(/*! ./search-modal.component.html */ "./src/app/shared-components/search-modal/search-modal.component.html"),
            styles: [__webpack_require__(/*! ./search-modal.component.scss */ "./src/app/shared-components/search-modal/search-modal.component.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            ngx_wooapi__WEBPACK_IMPORTED_MODULE_3__["WoocommerceCategoriesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], SearchModalComponent);
    return SearchModalComponent;
}());



/***/ }),

/***/ "./src/app/shared-components/shared.components.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/shared-components/shared.components.module.ts ***!
  \***************************************************************/
/*! exports provided: SharedComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedComponentsModule", function() { return SharedComponentsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./header/header.component */ "./src/app/shared-components/header/header.component.ts");
/* harmony import */ var _search_modal_search_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./search-modal/search-modal.component */ "./src/app/shared-components/search-modal/search-modal.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var components = [
    _header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
    _search_modal_search_modal_component__WEBPACK_IMPORTED_MODULE_5__["SearchModalComponent"]
];
var SharedComponentsModule = /** @class */ (function () {
    function SharedComponentsModule() {
    }
    SharedComponentsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ],
            declarations: components,
            exports: components,
            entryComponents: [
                _search_modal_search_modal_component__WEBPACK_IMPORTED_MODULE_5__["SearchModalComponent"]
            ]
        })
    ], SharedComponentsModule);
    return SharedComponentsModule;
}());



/***/ }),

/***/ "./src/app/shop-home/shop-home.module.ts":
/*!***********************************************!*\
  !*** ./src/app/shop-home/shop-home.module.ts ***!
  \***********************************************/
/*! exports provided: ShopHomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopHomePageModule", function() { return ShopHomePageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared-components/shared.components.module */ "./src/app/shared-components/shared.components.module.ts");
/* harmony import */ var _shop_home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shop-home.page */ "./src/app/shop-home/shop-home.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: '',
        component: _shop_home_page__WEBPACK_IMPORTED_MODULE_6__["ShopHomePage"]
    }
];
var ShopHomePageModule = /** @class */ (function () {
    function ShopHomePageModule() {
    }
    ShopHomePageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                _shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_5__["SharedComponentsModule"]
            ],
            declarations: [_shop_home_page__WEBPACK_IMPORTED_MODULE_6__["ShopHomePage"]]
        })
    ], ShopHomePageModule);
    return ShopHomePageModule;
}());



/***/ }),

/***/ "./src/app/shop-home/shop-home.page.html":
/*!***********************************************!*\
  !*** ./src/app/shop-home/shop-home.page.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<ion-content>\n  <div class=\"product-list\">\n    <ion-card no-margin *ngFor=\"let product of products\">\n      <ion-card-content no-padding>\n        <ion-thumbnail>\n          <img [src]=\"product?.images[0]?.src\" alt=\"{{product?.name}}\">\n        </ion-thumbnail>\n        <ion-card-subtitle padding-horizontal >{{product?.name}}</ion-card-subtitle>\n        <div padding-horizontal>\n          <div [innerHtml]=\"product.description\"></div>\n          <p [innerHtml]=\"product.price_html\"></p>\n        </div>\n      </ion-card-content>\n    </ion-card>\n  </div>\n\n  <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\n    <ion-infinite-scroll-content\n      loadingSpinner=\"bubbles\"\n      loadingText=\"Loading more data...\">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>"

/***/ }),

/***/ "./src/app/shop-home/shop-home.page.scss":
/*!***********************************************!*\
  !*** ./src/app/shop-home/shop-home.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".product-list {\n  display: flex;\n  flex-wrap: wrap; }\n  .product-list ion-card {\n    width: calc(50% - 15px);\n    margin: 10px 0 10px 10px; }\n  .product-list /deep/ ion-thumbnail {\n    --size: 100%; }\n"

/***/ }),

/***/ "./src/app/shop-home/shop-home.page.ts":
/*!*********************************************!*\
  !*** ./src/app/shop-home/shop-home.page.ts ***!
  \*********************************************/
/*! exports provided: ShopHomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopHomePage", function() { return ShopHomePage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_wooapi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-wooapi */ "./node_modules/ngx-wooapi/fesm5/ngx-wooapi.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ShopHomePage = /** @class */ (function () {
    function ShopHomePage(activatedRoute, woocommerceProductService) {
        this.activatedRoute = activatedRoute;
        this.woocommerceProductService = woocommerceProductService;
        this.products = [];
        this.query = {
            page: 1
        };
    }
    ShopHomePage.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.queryParams.subscribe(function (params) {
            _this.query = Object.keys(params).length ? Object.assign(_this.query, params) : {
                page: 1
            };
            console.log('query', params, _this.query);
            if (params) {
                _this.getproducts(_this.query);
                _this.products = [];
            }
            else {
                _this.getproducts();
            }
        });
    };
    ShopHomePage.prototype.loadData = function (res) {
        console.log(res);
        this.query.page++;
        console.log(this.query);
        this.getproducts(this.query, res);
    };
    ShopHomePage.prototype.getproducts = function (query, scroll) {
        var _this = this;
        this.woocommerceProductService.retrieveProducts(query).subscribe(function (res) {
            console.log(res);
            _this.products = _this.products.concat(res.products);
            _this.headers = res.headers;
            if (scroll) {
                scroll.target.complete();
            }
        });
    };
    ShopHomePage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-shop-home',
            template: __webpack_require__(/*! ./shop-home.page.html */ "./src/app/shop-home/shop-home.page.html"),
            styles: [__webpack_require__(/*! ./shop-home.page.scss */ "./src/app/shop-home/shop-home.page.scss")],
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            ngx_wooapi__WEBPACK_IMPORTED_MODULE_2__["WoocommerceProductsService"]])
    ], ShopHomePage);
    return ShopHomePage;
}());



/***/ })

}]);
//# sourceMappingURL=shop-home-shop-home-module.js.map