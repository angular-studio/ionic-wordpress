(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["shop-home-shop-home-module"],{

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
/* harmony import */ var _shop_home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shop-home.page */ "./src/app/shop-home/shop-home.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _shop_home_page__WEBPACK_IMPORTED_MODULE_5__["ShopHomePage"]
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
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_shop_home_page__WEBPACK_IMPORTED_MODULE_5__["ShopHomePage"]]
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

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      Shop Home\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-searchbar animated placeholder=\"Search your item\"></ion-searchbar>\n  <div class=\"product-list\">\n    <ion-card no-margin *ngFor=\"let product of products\">\n      <ion-card-content no-padding>\n        <ion-thumbnail size=\"100px\">\n          <img [src]=\"product?.images[0]?.src\" alt=\"{{product?.name}}\">\n        </ion-thumbnail>\n        <ion-card-subtitle padding-horizontal >{{product?.name}}</ion-card-subtitle>\n        <div padding-horizontal>\n          <div [innerHtml]=\"product.description\"></div>\n          <p [innerHtml]=\"product.price_html\"></p>\n        </div>\n      </ion-card-content>\n    </ion-card>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/shop-home/shop-home.page.scss":
/*!***********************************************!*\
  !*** ./src/app/shop-home/shop-home.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-thumbnail {\n  --size: 100%; }\n"

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
/* harmony import */ var ngx_wooapi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-wooapi */ "./node_modules/ngx-wooapi/fesm5/ngx-wooapi.js");
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
    function ShopHomePage(woocommerceProductService) {
        this.woocommerceProductService = woocommerceProductService;
    }
    ShopHomePage.prototype.ngOnInit = function () {
        var _this = this;
        this.woocommerceProductService.retrieveProducts().subscribe(function (res) {
            console.log(res);
            _this.products = res.products;
        });
    };
    ShopHomePage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-shop-home',
            template: __webpack_require__(/*! ./shop-home.page.html */ "./src/app/shop-home/shop-home.page.html"),
            styles: [__webpack_require__(/*! ./shop-home.page.scss */ "./src/app/shop-home/shop-home.page.scss")],
        }),
        __metadata("design:paramtypes", [ngx_wooapi__WEBPACK_IMPORTED_MODULE_1__["WoocommerceProductsService"]])
    ], ShopHomePage);
    return ShopHomePage;
}());



/***/ })

}]);
//# sourceMappingURL=shop-home-shop-home-module.js.map