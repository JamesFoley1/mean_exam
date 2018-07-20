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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _new_pet_new_pet_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./new-pet/new-pet.component */ "./src/app/new-pet/new-pet.component.ts");
/* harmony import */ var _pet_details_pet_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pet-details/pet-details.component */ "./src/app/pet-details/pet-details.component.ts");
/* harmony import */ var _pet_edit_pet_edit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pet-edit/pet-edit.component */ "./src/app/pet-edit/pet-edit.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    { path: 'pets', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"], children: [
            { path: 'new', component: _new_pet_new_pet_component__WEBPACK_IMPORTED_MODULE_4__["NewPetComponent"] },
        ] },
    { path: 'pets/:id', component: _pet_details_pet_details_component__WEBPACK_IMPORTED_MODULE_5__["PetDetailsComponent"] },
    { path: 'pets/edit/:id', component: _pet_edit_pet_edit_component__WEBPACK_IMPORTED_MODULE_6__["PetEditComponent"] },
    { path: '', pathMatch: 'full', redirectTo: '/pets' },
    { path: '**', component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_3__["PageNotFoundComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nav-wrapper {\n    background-color: #ea9700;\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<head>\n  <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-rc.2/css/materialize.min.css\">\n  <script src=\"https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-rc.2/js/materialize.min.js\"></script>\n</head>\n<body>\n  <nav>\n    <div class=\"nav-wrapper\">\n      <a [routerLink]=\"['']\" class=\"brand-logo\">Pet Shelter</a>\n      <ul id=\"nav-mobile\" class=\"right hide-on-med-and-down\">\n        <li><a [routerLink]=\"['']\">Home</a></li>\n        <li><a [routerLink]=\"['/pets/new']\">Add a pet to the shelter</a></li>\n      </ul>\n    </div>\n    </nav>\n</body>\n\n<router-outlet></router-outlet>\n"

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
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./http.service */ "./src/app/http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { Router, ActivatedRoute } from '@angular/router';
// [routerLink]="['/products']"
// import { FormBuilder, FormGroup, Validator } from '@angular/forms';
// private _httpService: HttpService, private fb: FormBuilder, private _route: ActivatedRoute, private _router: Router, private _parent: ProductsComponent
//#### EXAMPLES ON GETTING PARAMS FROM ROUTES!
// this._route.paramMap.subscribe(data => {
//   this.id = data.get('id');
//   this.getProduct(data.get('id'));
// })
// this.update = fb.group({
//   title: '',
//   price: '',
//   url: '',
//   _id: ''
// })
// formGroup]="create" (ngSubmit)="newProduct(create.value)"
// formControlName="title"
// [disabled]="!create.valid"
var AppComponent = /** @class */ (function () {
    function AppComponent(_httpService, _elementRef) {
        this._httpService = _httpService;
        this._elementRef = _elementRef;
    }
    AppComponent.prototype.ngAfterViewInit = function () {
        this._elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#f0f0f1';
    };
    AppComponent.prototype.ngOnInit = function () { };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
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
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _new_pet_new_pet_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./new-pet/new-pet.component */ "./src/app/new-pet/new-pet.component.ts");
/* harmony import */ var _pet_details_pet_details_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pet-details/pet-details.component */ "./src/app/pet-details/pet-details.component.ts");
/* harmony import */ var _pet_edit_pet_edit_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pet-edit/pet-edit.component */ "./src/app/pet-edit/pet-edit.component.ts");
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
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_8__["PageNotFoundComponent"],
                _new_pet_new_pet_component__WEBPACK_IMPORTED_MODULE_9__["NewPetComponent"],
                _pet_details_pet_details_component__WEBPACK_IMPORTED_MODULE_10__["PetDetailsComponent"],
                _pet_edit_pet_edit_component__WEBPACK_IMPORTED_MODULE_11__["PetEditComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]
            ],
            providers: [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col s12 m6 offset-m3 l6 offset-l3\">\n    <div class=\"card\">\n      <div class=\"card-content\">\n        <h4>Pet Shelter</h4>\n        <p>These pets are looking for a home!</p>\n        <table class=\"highlight striped\">\n          <thead>\n            <tr>\n                <th>Name</th>\n                <th>Type</th>\n                <th>Actions</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let pet of all_pets\">\n              <td>{{ pet.name }}</td>\n              <td>{{ pet.type }}</td>\n              <td>\n                <a [routerLink]=\"['/pets/', pet._id]\">Details</a><br>\n                <a [routerLink]=\"['/pets/edit/', pet._id]\">Edit</a>\n              </td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n    </div>\n  </div>\n</div>\n\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(_httpService) {
        this._httpService = _httpService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.getallPets();
    };
    HomeComponent.prototype.getallPets = function () {
        var _this = this;
        var pets = this._httpService.getPets();
        pets.subscribe(function (data) {
            console.log(data);
            _this.all_pets = data;
            return _this.all_pets;
        });
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/http.service.ts":
/*!*********************************!*\
  !*** ./src/app/http.service.ts ***!
  \*********************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
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


var HttpService = /** @class */ (function () {
    function HttpService(_http) {
        this._http = _http;
    }
    HttpService.prototype.getPets = function () {
        return this._http.get('/api/pets');
    };
    ;
    HttpService.prototype.onePet = function (id) {
        return this._http.get('/api/pets/' + id);
    };
    ;
    HttpService.prototype.createPets = function (data) {
        return this._http.post('/api/pets/new', data);
    };
    ;
    HttpService.prototype.updatePets = function (id, data) {
        return this._http.patch('/api/pets/update/' + id, data);
    };
    ;
    HttpService.prototype.addLikes = function (id) {
        return this._http.get('/api/pets/update/likes/' + id);
    };
    ;
    HttpService.prototype.adoptPet = function (id) {
        return this._http.delete('/api/pets/adopt/' + id);
    };
    ;
    HttpService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], HttpService);
    return HttpService;
}());



/***/ }),

/***/ "./src/app/new-pet/new-pet.component.css":
/*!***********************************************!*\
  !*** ./src/app/new-pet/new-pet.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/new-pet/new-pet.component.html":
/*!************************************************!*\
  !*** ./src/app/new-pet/new-pet.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col s12 m6 offset-m3 l6 offset-l3\">\n      <div class=\"card\">\n        <form class=\"card-content\" [formGroup]=\"create\" (ngSubmit)=\"createPet(create.value)\">\n          <h4>Know of a pet needing a home?</h4>\n          <label style=\"color: red;\" *ngIf=\"!create.valid && (create.dirty || create.touched)\">Each field must contain at least 3 characters.</label><br>\n          <label style=\"color: red;\" *ngIf=\"errors\">{{ errors.name.message }}</label><br>\n          <label style=\"color: red;\" *ngIf=\"errors\">{{ errors.type.message }}</label><br>\n          <label style=\"color: red;\" *ngIf=\"errors\">{{ errors.description.message }}</label><br>\n          <label>Pet Name:</label>\n          <input type=\"text\" formControlName=\"name\">\n          <label>Pet Type:</label>\n          <input type=\"text\" formControlName=\"type\">\n          <label>Description:</label>\n          <input type=\"text\" formControlName=\"description\">\n\n          <p><strong>Skills:</strong></p><br>\n\n          <label>Skill1:</label>\n          <input type=\"text\" formControlName=\"skill1\">\n          <label>Skill2:</label>\n          <input type=\"text\" formControlName=\"skill2\">\n          <label>Skill3:</label>\n          <input type=\"text\" formControlName=\"skill3\">\n\n          <button class=\"btn\" type=\"submit\" name=\"submit\" [disabled]=\"!create.valid\">Add Pet</button>\n          <a class=\"btn\" [routerLink]=\"['']\" name=\"cancel\" >Cancel</a>\n      </form>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/new-pet/new-pet.component.ts":
/*!**********************************************!*\
  !*** ./src/app/new-pet/new-pet.component.ts ***!
  \**********************************************/
/*! exports provided: NewPetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewPetComponent", function() { return NewPetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/@angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/@angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../home/home.component */ "./src/app/home/home.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NewPetComponent = /** @class */ (function () {
    function NewPetComponent(_httpService, fb, _router, _parent) {
        this._httpService = _httpService;
        this.fb = fb;
        this._router = _router;
        this._parent = _parent;
        this.create = fb.group({
            name: ['', [_node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)]],
            type: ['', [_node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)]],
            description: ['', [_node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)]],
            skills: [[]],
            skill1: ['', [_node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(30)]],
            skill2: ['', [_node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(30)]],
            skill3: ['', [_node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(30)]],
        });
    }
    NewPetComponent.prototype.ngOnInit = function () {
    };
    NewPetComponent.prototype.createPet = function (post) {
        var _this = this;
        console.log(post);
        post.skills.push(post.skill1, post.skill2, post.skill3);
        var new_pet = this._httpService.createPets(post);
        new_pet.subscribe(function (data) {
            console.log(data);
            if ('errors' in data) {
                console.log(data);
                _this.errors = data.errors;
            }
            else {
                _this._parent.ngOnInit();
                _this._router.navigate(['/pets']);
            }
        });
    };
    NewPetComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-new-pet',
            template: __webpack_require__(/*! ./new-pet.component.html */ "./src/app/new-pet/new-pet.component.html"),
            styles: [__webpack_require__(/*! ./new-pet.component.css */ "./src/app/new-pet/new-pet.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"], _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"]])
    ], NewPetComponent);
    return NewPetComponent;
}());



/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.css":
/*!*************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\n    width: 20%;\n    height: 60vh;\n}"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.html":
/*!**************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col s12 m4 offset-m4 l4 offset-l4\">\n    <div class=\"card\">\n      <div class=\"card-image\">\n        <img src=\"https://pics.me.me/houston-we-have-a-problem-31508469.png\">\n      </div>\n      <div class=\"card-content\">\n        <p>Error 404: Page not found!</p>\n        <p>No really, you shouldn't be here...</p>\n      </div>\n      <div class=\"card-action\">\n        <a [routerLink]=\"['']\">Please Go Home</a>\n      </div>\n    </div>\n  </div>\n</div>\n       "

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.ts":
/*!************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.ts ***!
  \************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__(/*! ./page-not-found.component.html */ "./src/app/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__(/*! ./page-not-found.component.css */ "./src/app/page-not-found/page-not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/pet-details/pet-details.component.css":
/*!*******************************************************!*\
  !*** ./src/app/pet-details/pet-details.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p {\n    display: inline-block;\n}"

/***/ }),

/***/ "./src/app/pet-details/pet-details.component.html":
/*!********************************************************!*\
  !*** ./src/app/pet-details/pet-details.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col s12 m6 offset-m3 l6 offset-l3\">\n    <div class=\"card\">\n      <div class=\"card-content\">\n        <h5>Details about {{ pet.name }}</h5>\n        <label>Pet Type: </label>\n        <p>{{ pet.type }}</p><br>\n        <label>Description: </label>\n        <p>{{ pet.description }}</p><br>\n        <label>Skills:</label>\n        <p *ngFor=\"let skill of pet.skills\"> {{ skill }},  </p>\n        <br><label>Likes: </label>\n        <p>{{ pet.likes }}</p><br>\n      </div>\n      <div class=\"card-action center\">\n        <button class=\"btn\" (click)=\"addLike(pet._id)\" [disabled]=\"bool == false\">Like this pet</button>\n        <button class=\"btn\" (click)=\"adoptPet(pet._id)\">Adopt this pet!</button>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/pet-details/pet-details.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pet-details/pet-details.component.ts ***!
  \******************************************************/
/*! exports provided: PetDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PetDetailsComponent", function() { return PetDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PetDetailsComponent = /** @class */ (function () {
    function PetDetailsComponent(_httpService, _route, _router) {
        var _this = this;
        this._httpService = _httpService;
        this._route = _route;
        this._router = _router;
        this._route.paramMap.subscribe(function (data) {
            _this.id = data.get('id');
        });
    }
    PetDetailsComponent.prototype.ngOnInit = function () {
        this.pet = {
            name: '',
            type: '',
            description: '',
            skills: ['', '', ''],
            likes: Number
        };
        this.getOnePet();
    };
    PetDetailsComponent.prototype.getOnePet = function () {
        var _this = this;
        var one_pet = this._httpService.onePet(this.id);
        one_pet.subscribe(function (data) {
            _this.pet = data;
            console.log(_this.pet);
            return _this.pet;
        });
    };
    PetDetailsComponent.prototype.addLike = function (id) {
        var _this = this;
        this.bool = false;
        var like = this._httpService.addLikes(id);
        like.subscribe(function (data) {
            _this.ngOnInit();
            console.log(data);
        });
        return this.bool;
    };
    ;
    PetDetailsComponent.prototype.adoptPet = function (id) {
        var _this = this;
        var adoption = this._httpService.adoptPet(id);
        adoption.subscribe(function (data) {
            _this._router.navigate(['/pets']);
            console.log(data);
        });
    };
    ;
    PetDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pet-details',
            template: __webpack_require__(/*! ./pet-details.component.html */ "./src/app/pet-details/pet-details.component.html"),
            styles: [__webpack_require__(/*! ./pet-details.component.css */ "./src/app/pet-details/pet-details.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], PetDetailsComponent);
    return PetDetailsComponent;
}());



/***/ }),

/***/ "./src/app/pet-edit/pet-edit.component.css":
/*!*************************************************!*\
  !*** ./src/app/pet-edit/pet-edit.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pet-edit/pet-edit.component.html":
/*!**************************************************!*\
  !*** ./src/app/pet-edit/pet-edit.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col s12 m6 offset-m3 l6 offset-l3\">\n      <div class=\"card\">\n        <form class=\"card-content\" [formGroup]=\"update\" (ngSubmit)=\"updatePet(update.value)\">\n          <h4>Edit this pet</h4>\n          <label style=\"color: red;\" *ngIf=\"!update.valid && (update.dirty || update.touched)\">Each field must contain at least 3 characters.</label><br>\n          <label style=\"color: red;\" *ngIf=\"errors\">{{ errors.name.message }}</label><br>\n          <label style=\"color: red;\" *ngIf=\"errors\">{{ errors.type.message }}</label><br>\n          <label style=\"color: red;\" *ngIf=\"errors\">{{ errors.description.message }}</label><br>\n          <label>Pet Name:</label>\n          <input type=\"text\" formControlName=\"name\" [ngModel]=\"pet.name\">\n          <label>Pet Type:</label>\n          <input type=\"text\" formControlName=\"type\" [ngModel]=\"pet.type\">\n          <label>Description:</label>\n          <input type=\"text\" formControlName=\"description\" [ngModel]=\"pet.description\">\n\n          <p><strong>Skills:</strong></p><br>\n\n          <ul>\n            <li>\n              <label>Skill 1:</label>\n              <input type=\"text\" formControlName=\"skill1\" [ngModel]=\"pet.skills[0]\">\n            </li>\n            <li>\n              <label>Skill 2:</label>\n              <input type=\"text\" formControlName=\"skill2\" [ngModel]=\"pet.skills[1]\">\n            </li>\n            <li>\n              <label>Skill 3:</label>\n              <input type=\"text\" formControlName=\"skill3\" [ngModel]=\"pet.skills[2]\">\n            </li>\n          </ul>\n          \n          <!-- <label>Skill2:</label>\n          <input type=\"text\" formControlName=\"skill2\">\n          <label>Skill3:</label>\n          <input type=\"text\" formControlName=\"skill3\"> -->\n\n          <button class=\"btn\" type=\"submit\" name=\"submit\" [disabled]=\"!update.valid\">Add Pet</button>\n          <a class=\"btn\" [routerLink]=\"['/pets/', id]\" name=\"cancel\" >Cancel</a>\n      </form>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/pet-edit/pet-edit.component.ts":
/*!************************************************!*\
  !*** ./src/app/pet-edit/pet-edit.component.ts ***!
  \************************************************/
/*! exports provided: PetEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PetEditComponent", function() { return PetEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/@angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/@angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PetEditComponent = /** @class */ (function () {
    function PetEditComponent(_httpService, fb, _route, _router) {
        var _this = this;
        this._httpService = _httpService;
        this.fb = fb;
        this._route = _route;
        this._router = _router;
        this._route.paramMap.subscribe(function (data) {
            _this.id = data.get('id');
        });
        this.update = fb.group({
            name: ['', [_node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)]],
            type: ['', [_node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)]],
            description: ['', [_node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)]],
            skills: [[]],
            skill1: ['', [_node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(30)]],
            skill2: ['', [_node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(30)]],
            skill3: ['', [_node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(30)]],
        });
    }
    PetEditComponent.prototype.ngOnInit = function () {
        this.pet = {
            name: '',
            type: '',
            description: '',
            skills: [],
            skill1: '',
            skill2: '',
            skill3: '',
        };
        this.getPet();
    };
    PetEditComponent.prototype.getPet = function () {
        var _this = this;
        var pet = this._httpService.onePet(this.id);
        pet.subscribe(function (data) {
            _this.pet = data;
            return _this.pet;
        });
    };
    PetEditComponent.prototype.updatePet = function (post) {
        var _this = this;
        post.skills.push(post.skill1, post.skill2, post.skill3);
        console.log(post);
        var pet = this._httpService.updatePets(this.id, post);
        pet.subscribe(function (data) {
            console.log(data);
            if ('errors' in data) {
                console.log(data);
                _this.errors = data.errors;
            }
            else {
                _this._router.navigate(['/pets/', _this.id]);
            }
        });
    };
    PetEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pet-edit',
            template: __webpack_require__(/*! ./pet-edit.component.html */ "./src/app/pet-edit/pet-edit.component.html"),
            styles: [__webpack_require__(/*! ./pet-edit.component.css */ "./src/app/pet-edit/pet-edit.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"], _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], PetEditComponent);
    return PetEditComponent;
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

module.exports = __webpack_require__(/*! /Users/PickleRick/Desktop/CD_MEAN/angular/mean_exam/public/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map