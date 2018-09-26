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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"container\">\n  <div class=\"jumbotron\">\n    <div class=\"row\">\n      <div class=\"col-sm-12\" *ngIf=\"!div1\">\n        <form class=\"form\" (ngSubmit)=\"checkandinsert(f)\" #f=\"ngForm\"> \n          <label>Enter Your Name</label>\n          <input type=\"text\" name=\"name\" class=\"form-control\" ngModel required>\n          <label>Enter Your Email</label>\n          <input type=\"email\" name=\"email\" class=\"form-control\" ngModel required pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$\">\n          <label>Enter Your Mobile Number</label>\n          <input type=\"number\" name=\"mobile\" class=\"form-control\" ngModel required pattern=\"[6789][0-9]{9}\"><br> -->\n          <br>\n          <form (ngSubmit)=\"setlogin(f)\" #f=\"ngForm\">\n          <input id=\"tokentext\" type=\"text\" ngModel name=\"tokentext\" required> <br><br>\n          <button [disabled]=\"!f.valid\" type=\"submit\" class=\"btn btn-primary\">Login(Set token)</button> &nbsp; <br><br>\n          </form>\n          <button type=\"button\" class=\"btn btn-primary\" (click)=\"logout();\">LogOut(remove token)</button><br><br>\n          <button type=\"button\" class=\"btn btn-primary\" (click)=\"first();\">Call Get method</button><br><br>\n          <button type=\"button\" class=\"btn btn-primary\" (click)=\"second();\">Call Post Method</button>\n          \n          <!-- <div *ngFor=\"let ele of dummy\">\n           <option>{{ele}}</option>\n          </div>\n     -->\n        <!-- </form>\n      </div>\n      <div class=\"col-sm-12\" *ngIf=\"!div2\">\n        <div *ngFor=\"let users of user\">\n        <h1 class=\"text-center info\">Hi Welcome</h1>\n        <h2 class=\"text-center\">name : {{users.name}}</h2>\n        <h3 class=\"text-center\">Email : {{users.email}}<br><br>Phone No : {{users.phone}}<br><br>\n          <button class=\"btn btn-danger\" (click)=\"logout()\">LOGOUT</button>\n        </h3>\n        </div>\n      </div>\n      <div class=\"col-sm-12\" *ngIf=\"!div3\">\n        <form class=\"form\" (ngSubmit)=\"otpvalidate(f)\" #f=\"ngForm\"> \n          <label>Enter OTP</label>\n          <input type=\"number\" name=\"otp\" class=\"form-control\" ngModel required><br>\n          <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!f.valid\">Submit</button><br>{{error}}\n\n        </form>\n      </div>\n    </div>\n  </div>\n</div> -->\n\n\n\n\n\n\n\n\n\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(http) {
        this.http = http;
        this.div1 = false;
        this.div2 = true;
        this.div3 = true;
        this.user = [];
        this.dummy = ["Ahmedabad", "Bangalore", "Bhopal", "Calcutta", "Chandigarh", "Chennai", "Delhi", "Gurgaon", "Hyderabad", "Kolkatta", "Lucknow", "Mumbai", "NOIDA", "Pune", "Adilabad", "Agartala", "Agra", "Ahmednagar", "Aizawl", "Ajmer", "Aligarh", "Allahabad", "Ambala", "Amritsar", "Aurangabad", "Bahadurgarh", "Ballabhgarh", "Bareilly", "Bathinda", "Bhubaneswar", "Bhuj", "Bikaner", "Bilaspur", "Bodh Gaya", "Bokaro Steel City", "Chhapra", "Chittoor", "Coimbatore", "Cuttack", "Daman and Diu", "Darjeeling", "Dehradun", "Dhanbad", "Dharamsala", "Dharwad", "Dibrugarh", "Dimapur", "Durgapur", "Erode", "Faridabad", "Faridkot", "Firozpur", "Gandhinagar", "Gangtok", "Gaya", "Gulbarga", "Guntur", "Gurdaspur", "Guwahati", "Gwalior", "Haldia", "Haridwar", "Hisar", "Hoshiarpur", "Hospet", "Hubli", "Imphal", "Indore", "Itanagar", "Itarsi", "Jabalpur", "Jaipur", "Jaisalmer", "Jalandhar", "Jammu", "Jamnagar", "Jamshedpur", "Jhansi", "Jind", "Jodhpur", "Junagadh", "Kalyan", "Kanchipuram", "Kannur", "Kanpur", "Kapurthala", "Karnal", "Karur", "Kashipur", "Kharagpur", "Kochi", "Kodinar", "Kohima", "Kolar", "Kolhapur", "Kollam", "Kota", "Kottayam", "Kozhikode", "Leh", "Lonavla", "Ludhiana", "Madurai", "Mangalore", "Mapusa", "Margao", "Mathura", "Medak", "Meerut", "Miraj", "Modinagar", "Mohali", "Morena", "Murshidabad", "Mussoorie", "Muzaffarnagar", "Muzaffarpur", "Mysore", "Nagercoil", "Nagpur", "Nainital", "Nashik", "Navi Mumbai", "Nellore", "Neyveli", "Palakkad", "Palghar", "Panaji", "Panchkula", "Panipat", "Pathankot", "Patiala", "Patna", "Pondicherry", "Port Blair", "Puri", "Raichur", "Raiganj", "Raigarh", "Raikot", "Raipur", "Rajkot", "Rameshwaram", "Ramngarh", "Rampur", "Ranchi", "Raurkela", "Rewa", "Rewari", "Rohtak", "Roorkee", "Saharanpur", "Salem", "Sangli", "Satara", "Shillong", "Shimla", "Shimoga", "Silchar", "Siliguri", "Sivaganga", "Solan", "Sonipat", "Srinagar", "Surat", "Tezpur", "Thanjavur", "Thiruvallur", "Thiruvananthapuram", "Thrissur", "Tiruchirappalli", "Tirupati", "Udaipur", "Udupi", "Ujjain", "Vadodara", "Vapi", "Varanasi", "Vellore", "Vijayawada", "Visakhapatnam", "Warangal", "Wardha"];
    }
    AppComponent.prototype.ngOnInit = function () {
        console.log(localStorage.getItem('auth_token'));
    };
    AppComponent.prototype.setlogin = function (f) {
        console.log(f.value.tokentext);
        this.http.post('/api/login', { token: f.value.tokentext }).subscribe(function (result) {
            localStorage.setItem('auth_token', f.value.tokentext);
            console.log(result.message + ' with token ' + localStorage.getItem('auth_token'));
        }, function (e) {
            console.log('unabel to login');
        });
    };
    AppComponent.prototype.logout = function () {
        this.http.get('/api/logout').subscribe(function (result) {
            console.log(result.message + ' and removed  token ' + localStorage.getItem('auth_token'));
            localStorage.removeItem('auth_token');
        }, function (e) {
            console.log('unabel to Logout');
        });
    };
    AppComponent.prototype.first = function () {
        this.http.get("api/insert").subscribe(function (resultl) {
            console.log(resultl);
        }, function (e) {
            console.log(e.error);
        });
    };
    AppComponent.prototype.second = function () {
        this.http.post('/api/second', { 'name': 'lalith kumar' }).subscribe(function (result) {
            console.log(result);
        }, function (e) {
            console.log(e.error);
        });
    };
    AppComponent.prototype.checkandinsert = function (form) {
        // var newuser=[{
        //   'name':form.value.name,
        //   'email':form.value.email,
        //   'phone':form.value.mobile
        // }];
        // return this.http.post('/api/checkuser', {'email':form.value.email,'phone':form.value.mobile,'user':newuser})
        // .subscribe((result)=>{
        //   if(result.json().Status==="Success") {
        //     this.div1=true;
        //     this.div3=false;
        //     this.user=newuser;
        //     this.otpid=result.json().Details;
        //   } else {
        //     this.user=result.json();
        //     this.div1=true;
        //     this.div2=false;
        //   }
        // });
    };
    AppComponent.prototype.otpvalidate = function (form) {
        // return this.http.post('/api/otpvalid', {'sid':this.otpid,'otp':form.value.otp, 'user':this.user})
        // .subscribe((result)=>{
        //   if(result.json().done===true) {
        //     this.div3=true;
        //     this.div2=false;
        //   } else {
        //     this.error="please enter valid OTP";
        //   }
        // })
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _interceptor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./interceptor */ "./src/app/interceptor.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
            providers: [{ provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"], useClass: _interceptor__WEBPACK_IMPORTED_MODULE_5__["TokenInterceptor"], multi: true }]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/interceptor.ts":
/*!********************************!*\
  !*** ./src/app/interceptor.ts ***!
  \********************************/
/*! exports provided: TokenInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenInterceptor", function() { return TokenInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_add_operator_do__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/add/operator/do */ "./node_modules/rxjs-compat/_esm5/add/operator/do.js");
// import { Injectable } from '@angular/core';
// import {
//   HttpRequest,
//   HttpHandler,
//   HttpEvent,
//   HttpInterceptor
// } from '@angular/common/http';
// import { Observable } from 'rxjs/Observable';
// @Injectable()
// export class TokenInterceptor implements HttpInterceptor {
//     token:String="helloalith";
//   constructor() {}
//   intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//     request = request.clone({
//       setHeaders: {
//         userId: `1`
//       }
//     });
//     return next.handle(request);
//   }
// }


var TokenInterceptor = /** @class */ (function () {
    function TokenInterceptor() {
    }
    TokenInterceptor.prototype.intercept = function (req, next) {
        var curbody = req.body;
        if (localStorage.getItem('auth_token') == null) {
            var token = 'false';
        }
        else {
            var token = localStorage.getItem('auth_token');
        }
        var request = req.clone({
            // headers: new HttpHeaders().set('idd','1')
            setHeaders: { idd: token }
            // headers.set('authentication', `hello`);
        });
        return next.handle(request);
        // .do(
        //     (event:any)=> {},
        //     (error:any)=>{
        //         if(error instanceof HttpErrorResponse) {
        //             if(error.status == 501 ) {
        //                 console.log("this is error")
        //             }
        //         }
        //     }
        // )
    };
    TokenInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], TokenInterceptor);
    return TokenInterceptor;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\lalith\otpreg\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map