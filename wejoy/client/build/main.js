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

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<!-- <div style=\"text-align:center\">\n  <h1>\n    Welcome to {{ title }}!\n  </h1>\n  <img width=\"300\" alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">\n</div>\n<h2>Here are some links to help you start: </h2>\n<ul>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://angular.io/tutorial\">Tour of Heroes</a></h2>\n  </li>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://github.com/angular/angular-cli/wiki\">CLI Documentation</a></h2>\n  </li>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://blog.angular.io/\">Angular blog</a></h2>\n  </li>\n</ul> -->\n<app-nav-bar></app-nav-bar>\n<div style=\"min-height: calc(100vh - 230px);\">\n<router-outlet></router-outlet>\n</div>\n<app-footer></app-footer>\n"

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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.routes */ "./src/app/app.routes.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/nav-bar/nav-bar.component */ "./src/app/components/nav-bar/nav-bar.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _components_events_display_events_display_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/events-display/events-display.component */ "./src/app/components/events-display/events-display.component.ts");
/* harmony import */ var _components_events_detail_events_detail_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/events-detail/events-detail.component */ "./src/app/components/events-detail/events-detail.component.ts");
/* harmony import */ var _components_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/user-profile/user-profile.component */ "./src/app/components/user-profile/user-profile.component.ts");
/* harmony import */ var _services_get_events_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/get-events.service */ "./src/app/services/get-events.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _components_user_history_user_history_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/user-history/user-history.component */ "./src/app/components/user-history/user-history.component.ts");
/* harmony import */ var _components_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/home-page/home-page.component */ "./src/app/components/home-page/home-page.component.ts");
/* harmony import */ var _components_new_event_new_event_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/new-event/new-event.component */ "./src/app/components/new-event/new-event.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
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
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_6__["NavBarComponent"],
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"],
                _components_events_display_events_display_component__WEBPACK_IMPORTED_MODULE_8__["EventsDisplayComponent"],
                _components_events_detail_events_detail_component__WEBPACK_IMPORTED_MODULE_9__["EventsDetailComponent"],
                _components_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_10__["UserProfileComponent"],
                _components_user_history_user_history_component__WEBPACK_IMPORTED_MODULE_13__["UserHistoryComponent"],
                _components_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_14__["HomePageComponent"],
                _components_new_event_new_event_component__WEBPACK_IMPORTED_MODULE_15__["NewEventComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routes__WEBPACK_IMPORTED_MODULE_2__["routing"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormsModule"]
            ],
            providers: [
                {
                    provide: "get_events",
                    useClass: _services_get_events_service__WEBPACK_IMPORTED_MODULE_11__["GetEventsService"]
                }, {
                    provide: "auth",
                    useClass: _services_auth_service__WEBPACK_IMPORTED_MODULE_12__["AuthService"]
                }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routes.ts":
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_events_display_events_display_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/events-display/events-display.component */ "./src/app/components/events-display/events-display.component.ts");
/* harmony import */ var _components_events_detail_events_detail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/events-detail/events-detail.component */ "./src/app/components/events-detail/events-detail.component.ts");
/* harmony import */ var _components_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/user-profile/user-profile.component */ "./src/app/components/user-profile/user-profile.component.ts");
/* harmony import */ var _components_user_history_user_history_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/user-history/user-history.component */ "./src/app/components/user-history/user-history.component.ts");
/* harmony import */ var _components_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/home-page/home-page.component */ "./src/app/components/home-page/home-page.component.ts");
/* harmony import */ var _components_new_event_new_event_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/new-event/new-event.component */ "./src/app/components/new-event/new-event.component.ts");







// import { FileCreateComponent } from './others/file-create/file-create.component';
// import { ProfileComponent } from './others/profile/profile.component';
//import { UserAccessService } from './services/user-access.service';
var routes = [
    {
        path: "",
        redirectTo: "home",
        pathMatch: "full",
    },
    {
        path: "home",
        component: _components_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_5__["HomePageComponent"],
    },
    {
        path: "events",
        component: _components_events_display_events_display_component__WEBPACK_IMPORTED_MODULE_1__["EventsDisplayComponent"],
    },
    {
        path: "new-event",
        component: _components_new_event_new_event_component__WEBPACK_IMPORTED_MODULE_6__["NewEventComponent"],
    },
    {
        path: "profile",
        component: _components_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_3__["UserProfileComponent"],
    },
    // TODO
    {
        path: "history",
        component: _components_user_history_user_history_component__WEBPACK_IMPORTED_MODULE_4__["UserHistoryComponent"],
    },
    {
        path: "events/detail/:id",
        component: _components_events_detail_events_detail_component__WEBPACK_IMPORTED_MODULE_2__["EventsDetailComponent"],
    },
    // {
    //     path: "files/create",
    //     component: FileCreateComponent
    // },
    {
        path: "**",
        redirectTo: "events",
    }
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes);


/***/ }),

/***/ "./src/app/components/events-detail/events-detail.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/events-detail/events-detail.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".event-detail-timeloc{\n    position:absolute;\n    bottom:0;\n}\n\n.evetn-card{\n    max-width: 1080px;\n    /* width: minmax(max-content, 300px) minmax(200px, 1fr) 150px; */\n}\n\n/* @media (max-width: @screen-xs) {\n    body{font-size: 10px;}\n}\n\n@media (max-width: @screen-sm) {\n    body{font-size: 14px;}\n} */\n\n.flex-font-size{\n    /* font-size: 2vmin; */\n    font-size: 80%;\n}\n\npre {\n    white-space: pre-wrap;       /* css-3 */\n    white-space: -moz-pre-wrap;  /* Mozilla, since 1999 */\n    white-space: -pre-wrap;      /* Opera 4-6 */\n    white-space: -o-pre-wrap;    /* Opera 7 */\n    word-wrap: break-word;       /* Internet Explorer 5.5+ */\n}\n"

/***/ }),

/***/ "./src/app/components/events-detail/events-detail.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/events-detail/events-detail.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"container\" *ngIf=\"event\"> -->\n<div class=\"mx-auto\" *ngIf=\"event\">\n  <div class=\"evetn-card mx-auto\">\n\n    <!-- pic and info on the side of pic, info will disable when screen too small -->\n    <div class=\"row border-right border-top p-0 mx-2 mb-0 mt-lg-5 mt-md-2\">\n      <div class=\"col-md-8 col-sm-12 event-detail-img p-0 m-0\">\n        <img class=\"card-img-left img-fluid\" src=\"{{event.imageUrl}}\" >\n      </div>\n      <div class=\"col-md-4 col-sm-12 event-detail-info d-none d-md-block\">\n        <blockquote class=\"ml-3 mt-4 blockquote text-left\">\n          <p class=\"mb-lg-4 mb-md-3 flex-font-size text-secondary\"><b>Free</b></p>\n          <p class=\"mb-1 flex-font-size font-weight-bold\">{{event.name}}</p>\n          <footer class=\"small blockquote-footer\">by {{event.owner}}</footer>\n        </blockquote>\n        <blockquote class=\"event-detail-timeloc mx-3 blockquote text-left\">\n          <p class=\"mb-lg-1 mb-md-2 small flex-font-size text-secondary\">{{event.time}}</p>\n          <p class=\"mb-lg-3 mb-md-0 d-none d-lg-block small flex-font-size text-secondary\">{{event.location}}</p>\n        </blockquote>\n      </div>\n    </div>\n\n    <!-- info appear when screen smaller than md -->\n    <div class=\"row p-0 mx-2 border-left border-right d-block d-md-none\">\n      <p class=\"m-0 px-3 pt-3 font-weight-bold\">{{event.name}}</p>\n    </div>\n    <div class=\"row p-0 mx-2 border-left border-right d-block d-md-none\">\n      <p class=\"m-0 px-3 pt-3\">{{event.location}}</p>\n    </div>\n    <div class=\"row p-0 mx-2 border-left border-right d-block d-md-none\">\n      <p class=\"m-0 px-3 pb-3\">{{event.time}}</p>\n    </div>\n\n    <!-- button and other info -->\n    <div class=\"row border border-bottom-0 p-0 mx-2\">\n      <div class=\"col-md-8 col-sm-6 mx-auto my-auto\">\n        <p class=\"text-secondary ml-3 p-0 my-0 align-middle d-block d-md-none\"><b>Free</b></p>\n      </div>\n      <div class=\"col-md-4 col-sm-6 mx-auto text-center\">\n        <!-- <button type=\"button\" class=\"btn btn-success my-3 col-11\">I'M IN</button> -->\n        <div class=\"btn-group col-12 my-3\" role=\"group\" aria-label=\"Basic example\">\n          <button type=\"button\" class=\"btn btn-secondary btn-outline-success col-lg-10 col-md-9 col-sm-10\">I'M IN</button>\n          <button type=\"button\" class=\"btn btn-secondary btn-outline-success col-lg-2 col-md-3 col-sm-2\">❤️</button>\n          <!-- <button type=\"button\" class=\"btn btn-secondary btn-outline-success col-2\">💔</button> -->\n        </div>\n      </div>\n    </div>\n    <!-- detail information -->\n    <div class=\"row border p-0 mx-2 my-0\">\n      <div class=\"col-lg-8 col-md-12 event-detail-img p-0 my-0\">\n          <blockquote class=\"mx-4 mt-lg-5 mt-md-3 blockquote text-left\">\n            <pre class=\"mb-lg-5 mb-md-3 flex-font-size mx-5 pr-2\">{{event.description}}</pre>\n            <!-- <footer class=\"blockquote-footer\">Find and join any events you like.</footer> -->\n          </blockquote>\n      </div>\n      <div class=\"col-lg-4 col-md-12 event-detail-info\">\n        <blockquote class=\"ml-3 mt-lg-5 mt-md-3 blockquote text-left\">\n          <p class=\"mb-lg-5 mb-md-3 flex-font-size\">other info ...</p>\n          <!-- <footer class=\"blockquote-footer\">Find and join any events you like.</footer> -->\n        </blockquote>\n      </div>\n    </div>\n\n  </div> \n  \n</div>"

/***/ }),

/***/ "./src/app/components/events-detail/events-detail.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/events-detail/events-detail.component.ts ***!
  \*********************************************************************/
/*! exports provided: EventsDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsDetailComponent", function() { return EventsDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var EventsDetailComponent = /** @class */ (function () {
    function EventsDetailComponent(route, getEvents) {
        this.route = route;
        this.getEvents = getEvents;
    }
    EventsDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            console.log(params);
            //this.event = this.events[+params["id"]-1];
            _this.getEvents.getEventInfo(+params["id"])
                .subscribe(function (event) {
                _this.event = event;
            });
        });
    };
    EventsDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-events-detail',
            template: __webpack_require__(/*! ./events-detail.component.html */ "./src/app/components/events-detail/events-detail.component.html"),
            styles: [__webpack_require__(/*! ./events-detail.component.css */ "./src/app/components/events-detail/events-detail.component.css")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])("get_events")),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], Object])
    ], EventsDetailComponent);
    return EventsDetailComponent;
}());



/***/ }),

/***/ "./src/app/components/events-display/events-display.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/events-display/events-display.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* .event_card_img{\n    height: 240px;\n    width: 320px\n} */\n\n/* .event_card{\n    width: 18rem;\n} */\n\na.event_card_main:link, a:visited { \n    color: black;\n    /* text-decoration: underline; */\n    cursor: hand;\n}\n\na.event_card_main:link:active, a:visited:active { \n    color: black;\n}\n\na.event_card_main:hover {\n    text-decoration: none;\n}\n\n.card-title{\n    height: 3em;\n    /* white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis; */\n}\n\n/* .text-overflow{\n    font-size: 120%;\n    height: 5em;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n} */\n\n/* .text-overflow {\n    -webkit-line-clamp: 2;\n    overflow : hidden;\n    text-overflow: ellipsis;\n    display: -webkit-box;\n    -webkit-box-orient: vertical;\n  } */\n\n/* styles for '...' */\n\n.text-overflow {\n    font-size: 120%;\n    /* hide text if it more than N lines  */\n    overflow: hidden;\n    /* for set '...' in absolute position */\n    position: relative; \n    /* use this value to count block height */\n    /* line-height: 1.2em; */\n    /* max-height = line-height (1.2) * lines max number (3) */\n    max-height: 3em; \n    /* fix problem when last visible word doesn't adjoin right side  */\n    /* text-align: justify;   */\n    /* place for '...' */\n    margin-right: -1em;\n    padding-right: 1em;\n  }\n\n/* create the ... */\n\n.text-overflow:before {\n    /* points in the end */\n    content: '...';\n    /* absolute position */\n    position: absolute;\n    /* set position to right bottom corner of block */\n    right: 1.1em;\n    bottom: 0;\n    background: white;\n  }\n\n/* hide ... if we have text, which is less than or equal to max lines */\n\n.text-overflow:after {\n    /* points in the end */\n    content: '';\n    /* absolute position */\n    position: absolute;\n    /* set position to right bottom corner of text */\n    right: 1em;\n    /* set width and height */\n    width: 1em;\n    height: 1em;\n    margin-top: 0.2em;\n    /* bg color = bg color under block */\n    background: white;\n  }\n"

/***/ }),

/***/ "./src/app/components/events-display/events-display.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/events-display/events-display.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"carouselExampleSlidesOnly\" class=\"carousel slide d-none d-sm-block\" data-ride=\"carousel\" >\n  <div class=\"carousel-inner\">\n    <div class=\"carousel-item active\">\n      <img class=\"d-block w-100\" src=\"../../../assets/pics/index1.jpg\" alt=\"First slide\">\n    </div>\n    <div class=\"carousel-item\">\n      <img class=\"d-block w-100\" src=\"../../../assets/pics/index2.jpg\" alt=\"Second slide\">\n    </div>\n    <div class=\"carousel-item\">\n      <img class=\"d-block w-100\" src=\"../../../assets/pics/index3.jpg\" alt=\"Third slide\">\n    </div>\n  </div>\n</div>\n\n\n<!-- <div>\n  <p class=\"mx-auto\">Discover possibilities</p>\n</div> -->\n<blockquote class=\"mt-5 blockquote text-center\">\n  <p class=\"mb-0\"><b>Discover possibilities test!!!!!!!</b></p>\n  <!-- <footer class=\"blockquote-footer\">Find and join any events you like.</footer> -->\n</blockquote>\n\n\n<div class=\"container\">\n\n\n  <div class=\"row\" >\n\n    <!-- <div class=\"event_card col-lg-4 col-md-5 mx-md-auto my-4 col-sm-10\"\n        *ngFor=\"let event of events\">\n      <a [routerLink]=\"['/events/detail',event.id]\">\n        <div class=\"img-thumbnail\">\n          <img class=\"event_card_img img-fluid\" src=\"https://cdn-images-1.medium.com/max/1200/1*V3Kfghg_jIV0ubxmAnCXBA.jpeg\" />\n          <div class=\"caption event_card_info col-12\">\n            <h5 class=\"mt-2\">{{event.name}}</h5>\n            <dl>\n              <dd>time: {{event.time}}</dd>\n              <dd>time: {{event.time}}</dd>\n            </dl>\n          </div>\n        </div>\n      </a>\n    </div> -->\n\n    <!-- card: -->\n    <div class=\"mx-auto my-4 col-lg-4 col-md-6 col-sm-10\"\n          *ngFor=\"let event of events\" >\n      <a class=\"event_card_main\" [routerLink]=\"['/events/detail',event.id]\">\n        <div class=\"card event_card\">\n          <img class=\"card-img-top\" src=\"{{event.imageUrl}}\" alt=\"Card image cap\">\n          <div class=\"card-body\">\n            <div class=\"card-title\">\n              <p class=\"text-overflow font-weight-bold\">{{event.name}}</p>\n            </div>\n            <p class=\"card-text\">time: {{event.time}}</p>\n          </div>\n        </div>\n      </a>\n    </div>\n\n\n  </div>\n\n  <div class=\"row\" *ngIf=\"loading\">\n    <!-- <h3 class=\"mx-auto\">Loading ...</h3> -->\n    <img class=\"mx-auto\" src=\"../../../assets/svg/Flickr-1.2s-88px.svg\" />\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/components/events-display/events-display.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/events-display/events-display.component.ts ***!
  \***********************************************************************/
/*! exports provided: EventsDisplayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsDisplayComponent", function() { return EventsDisplayComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var EventsDisplayComponent = /** @class */ (function () {
    function EventsDisplayComponent(getEvents) {
        this.getEvents = getEvents;
        this.loadMore = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.loading = true;
        this.events = [];
    }
    EventsDisplayComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loadMoreEvents();
        this.sub = this.loadMore
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(500))
            .subscribe(function (res) {
            console.log("loading!");
            //this.events=this.events.concat(this.getEvents.loadMoreEvents_());
            //this.loading = false;
            _this.loadMoreEvents();
        });
    };
    EventsDisplayComponent.prototype.loadMoreEvents = function () {
        var _this = this;
        this.getEvents.loadMoreEvents()
            .subscribe(function (events) {
            _this.events = _this.events.concat(events);
            _this.loading = false;
        });
        //this.events=this.events.concat(this.getEvents.loadMoreEvents_());
        //this.loading = false;
    };
    EventsDisplayComponent.prototype.onScrollDown = function (e) {
        var scrollPosition = window.pageYOffset || window.scrollY || document.documentElement.scrollTop;
        if ((scrollPosition + window.innerHeight) > (document.body.offsetHeight - 30)) {
            //this.events=this.events.concat(this.events2);
            this.loading = true;
            this.loadMore.next("loadmore");
            console.log("reached");
        }
        //console.log(pos+window.innerHeight);
        //console.log(window.pageYOffset+window.innerHeight);
        // console.log(window.scrollY);
        // console.log(document.documentElement.scrollTop);
        //console.log(document.body.offsetHeight);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:scroll', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], EventsDisplayComponent.prototype, "onScrollDown", null);
    EventsDisplayComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-events-display',
            template: __webpack_require__(/*! ./events-display.component.html */ "./src/app/components/events-display/events-display.component.html"),
            styles: [__webpack_require__(/*! ./events-display.component.css */ "./src/app/components/events-display/events-display.component.css")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])("get_events")),
        __metadata("design:paramtypes", [Object])
    ], EventsDisplayComponent);
    return EventsDisplayComponent;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/footer/footer.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Footer -->\n<footer class=\"page-footer font-small blue pt-4 mt-4\" style=\"background-color: #e9e9e9;\">\n  <div class=\"container\">\n    <div class=\"container-fluid text-center text-md-left\">\n      <div class=\"row\">\n\n        <div class=\"col-md-6 mt-md-0 mt-3\">\n          <h5>WeJoy</h5>\n          <p>Find and join differnet events.</p>\n        </div>\n  \n        <!-- <hr class=\"clearfix w-100 d-md-none pb-3\">\n        <div class=\"col-md-6 mb-md-0 mb-3\">\n  \n          <h5 class=\"text-uppercase\">Links</h5>\n  \n          <ul class=\"list-unstyled\">\n            <li>\n              <a href=\"#!\">Link 1</a>\n            </li>\n            <li>\n              <a href=\"#!\">Link 2</a>\n            </li>\n            <li>\n              <a href=\"#!\">Link 3</a>\n            </li>\n            <li>\n              <a href=\"#!\">Link 4</a>\n            </li>\n          </ul>\n        </div> -->\n  \n      </div>\n  \n    </div>\n    <div class=\"footer-copyright text-center py-3\">© 2018 Copyright:\n      <a> WeJoy.com</a>\n    </div>\n  </div>\n</footer>\n"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
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

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/components/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/home-page/home-page.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/home-page/home-page.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/home-page/home-page.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/home-page/home-page.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"carouselExampleSlidesOnly\" class=\"carousel slide d-none d-sm-block\" data-ride=\"carousel\" >\n  <div class=\"carousel-inner\">\n    <div class=\"carousel-item active\">\n      <img class=\"d-block w-100\" src=\"../../../assets/pics/index1.jpg\" alt=\"First slide\">\n    </div>\n    <div class=\"carousel-item\">\n      <img class=\"d-block w-100\" src=\"../../../assets/pics/index2.jpg\" alt=\"Second slide\">\n    </div>\n    <div class=\"carousel-item\">\n      <img class=\"d-block w-100\" src=\"../../../assets/pics/index3.jpg\" alt=\"Third slide\">\n    </div>\n  </div>\n</div>\n\n\n<!-- <div>\n  <p class=\"mx-auto\">Discover possibilities</p>\n</div> -->\n<blockquote class=\"mt-5 blockquote text-center\">\n  <p class=\"mb-0\"><b>Discover possibilities</b></p>\n  <!-- <footer class=\"blockquote-footer\">Find and join any events you like.</footer> -->\n</blockquote>\n\n\n<div class=\"container\">\n  <div class=\"row\" >\n\n    <!-- card: -->\n    <div class=\"mx-auto my-4 col-lg-4 col-md-6 col-sm-10\"\n          *ngFor=\"let event of events\" >\n      <a class=\"event_card_main\" [routerLink]=\"['/events/detail',event.id]\">\n        <div class=\"card event_card\">\n          <img class=\"card-img-top\" src=\"{{event.imageUrl}}\" alt=\"Card image cap\">\n          <div class=\"card-body\">\n            <div class=\"card-title\">\n              <p class=\"text-overflow font-weight-bold\">{{event.name}}</p>\n            </div>\n            <p class=\"card-text\">time: {{event.time}}</p>\n          </div>\n        </div>\n      </a>\n    </div>\n    \n\n  </div>\n  \n  <!-- cat-->\n  <div class=\"row\" *ngIf=\"loading\">\n    <!-- <h3 class=\"mx-auto\">Loading ...</h3> -->\n    <img class=\"mx-auto\" src=\"../../../assets/svg/Flickr-1.2s-88px.svg\" />\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/components/home-page/home-page.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/home-page/home-page.component.ts ***!
  \*************************************************************/
/*! exports provided: HomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageComponent", function() { return HomePageComponent; });
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
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};

var HomePageComponent = /** @class */ (function () {
    function HomePageComponent(getEvents) {
        this.getEvents = getEvents;
        this.events = [];
    }
    HomePageComponent.prototype.ngOnInit = function () {
        this.loadEvents();
    };
    HomePageComponent.prototype.loadEvents = function () {
        var _this = this;
        this.getEvents.loadEventsHome()
            .subscribe(function (events) {
            _this.events = events;
        });
    };
    HomePageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home-page',
            template: __webpack_require__(/*! ./home-page.component.html */ "./src/app/components/home-page/home-page.component.html"),
            styles: [__webpack_require__(/*! ./home-page.component.css */ "./src/app/components/home-page/home-page.component.css")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])("get_events")),
        __metadata("design:paramtypes", [Object])
    ], HomePageComponent);
    return HomePageComponent;
}());



/***/ }),

/***/ "./src/app/components/nav-bar/nav-bar.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/nav-bar/nav-bar.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nav-go-right{\n    position: absolute;\n    right: 0px\n}"

/***/ }),

/***/ "./src/app/components/nav-bar/nav-bar.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/nav-bar/nav-bar.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light sticky-top px-3 pt-3 pb-2\" style=\"background-color: #e3f2fd;\">\n  <!-- <div class=\"container\"> -->\n    <a class=\"navbar-brand\" href=\"#\">WeJoy</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarTogglerDemo\" aria-controls=\"navbarTogglerDemo\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n\n    <div class=\"collapse navbar-collapse\" id=\"navbarTogglerDemo\">\n      <ul class=\"navbar-nav mr-2 mt-2 mt-lg-0\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#\">Home <span class=\"sr-only\">(current)</span></a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" [routerLink]=\"['/events']\" >Events</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" [routerLink]=\"['/new-event']\">Create</a>\n        </li>\n      </ul>\n\n      <div class=\"form-inline my-2 mr-auto my-lg-0\">\n        <input class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Search\">\n        <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Search</button>\n      </div>\n\n      <div class=\"form-inline my-2 mr-2 my-lg-0\" *ngIf=\"!auth.isAuthenticated()\">\n        <button class=\"btn btn-success my-2 my-sm-0\" (click)=\"login()\">Sign In</button>\n      </div>\n\n      <ul class=\"navbar-nav navbar-right\" *ngIf=\"auth.isAuthenticated()\">\n        <li class=\"nav-item dropdown\" >\n            <a class=\"nav-link dropdown-toggle\" href=\"just to make the mouse to become a hand\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n              {{username}}\n            </a>\n            <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"navbarDropdown\">\n              <a class=\"dropdown-item\" [routerLink]=\"['/profile']\" >Profile</a>\n              <a class=\"dropdown-item\" [routerLink]=\"['/history']\" >My Events</a>\n              <div class=\"dropdown-divider\"></div>\n              <a class=\"dropdown-item\" href=\"#\" (click)=\"logout()\" >Log Out</a>\n            </div>\n          </li>\n      </ul>\n\n    </div>\n  <!-- </div> -->\n</nav>\n"

/***/ }),

/***/ "./src/app/components/nav-bar/nav-bar.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/nav-bar/nav-bar.component.ts ***!
  \*********************************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
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
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};

//import { debounceTime, map } from 'rxjs/operators';
var NavBarComponent = /** @class */ (function () {
    // searchBox: FormControl = new FormControl();
    function NavBarComponent(auth) {
        this.auth = auth;
        this.username = "";
        this.auth.handleAuthentication();
    }
    // constructor(@Inject("auth") private auth,
    //             @Inject("keywords") private keywords,
    //             private router: Router) {
    //   this.auth.handleAuthentication();
    // }
    NavBarComponent.prototype.ngAfterContentChecked = function () {
        if (localStorage.getItem('profile')) {
            this.username = JSON.parse(localStorage.getItem('profile')).nickname;
        }
    };
    // //d = new Date();
    NavBarComponent.prototype.ngOnInit = function () { };
    NavBarComponent.prototype.login = function () {
        this.auth.login();
    };
    NavBarComponent.prototype.logout = function () {
        this.auth.logout();
    };
    NavBarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nav-bar',
            template: __webpack_require__(/*! ./nav-bar.component.html */ "./src/app/components/nav-bar/nav-bar.component.html"),
            styles: [__webpack_require__(/*! ./nav-bar.component.css */ "./src/app/components/nav-bar/nav-bar.component.css")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])("auth")),
        __metadata("design:paramtypes", [Object])
    ], NavBarComponent);
    return NavBarComponent;
}());



/***/ }),

/***/ "./src/app/components/new-event/new-event.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/new-event/new-event.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/new-event/new-event.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/new-event/new-event.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <form #formRef=\"ngForm\">\n    <div class=\"form-group\">\n      <label for=\"eventName\">Event Name</label>\n      <input tpye=\"text\" class=\"form-control\" id=\"eventName\"\n             name=\"eventName\" required placeholder=\"事件名称\" [(ngModel)]=\"newEvent.name\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"eventTime\">Event Time</label>\n      <input tpye=\"text\" class=\"form-control\" id=\"eventTime\"\n             name=\"eventTime\" required placeholder=\"时间\" [(ngModel)]=\"newEvent.time\">\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"eventImgUrl\">Event Image Url</label>\n      <input tpye=\"text\" class=\"form-control\" id=\"eventImgUrl\"\n             name=\"eventImgUrl\" required placeholder=\"image Url\" [(ngModel)]=\"newEvent.imageUrl\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"eventDesc\">Event Description</label>\n      <textarea tpye=\"text\" row=\"3\" class=\"form-control\" id=\"eventDesc\"\n                name=\"eventDesc\" required placeholder=\"事件描述\" [(ngModel)]=\"newEvent.description\">\n      </textarea>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-md-12\">Event Name</div>\n      <button type=\"submit\" class=\"btn btn-primary pull-right\" (click)=\"addEvent()\"> add Event</button>\n    </div>\n\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/components/new-event/new-event.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/new-event/new-event.component.ts ***!
  \*************************************************************/
/*! exports provided: NewEventComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewEventComponent", function() { return NewEventComponent; });
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
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};

var DEFAULT_EVENT = Object.freeze({
    id: 0,
    name: "",
    description: "",
    location: "",
    time: "",
    owner: "",
    imageUrl: ""
});
var NewEventComponent = /** @class */ (function () {
    function NewEventComponent(getEvent) {
        this.getEvent = getEvent;
        this.newEvent = Object.assign({}, DEFAULT_EVENT);
    }
    NewEventComponent.prototype.ngOnInit = function () {
    };
    NewEventComponent.prototype.addEvent = function () {
        this.getEvent.addEvent(this.newEvent)
            .catch(function (error) { return console.log(error.body); });
        this.newEvent = Object.assign({}, DEFAULT_EVENT);
    };
    NewEventComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-new-event',
            template: __webpack_require__(/*! ./new-event.component.html */ "./src/app/components/new-event/new-event.component.html"),
            styles: [__webpack_require__(/*! ./new-event.component.css */ "./src/app/components/new-event/new-event.component.css")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])("get_events")),
        __metadata("design:paramtypes", [Object])
    ], NewEventComponent);
    return NewEventComponent;
}());



/***/ }),

/***/ "./src/app/components/user-history/user-history.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/user-history/user-history.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/user-history/user-history.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/user-history/user-history.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  user-history works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/user-history/user-history.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/user-history/user-history.component.ts ***!
  \*******************************************************************/
/*! exports provided: UserHistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserHistoryComponent", function() { return UserHistoryComponent; });
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

var UserHistoryComponent = /** @class */ (function () {
    function UserHistoryComponent() {
    }
    UserHistoryComponent.prototype.ngOnInit = function () {
    };
    UserHistoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-history',
            template: __webpack_require__(/*! ./user-history.component.html */ "./src/app/components/user-history/user-history.component.html"),
            styles: [__webpack_require__(/*! ./user-history.component.css */ "./src/app/components/user-history/user-history.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UserHistoryComponent);
    return UserHistoryComponent;
}());



/***/ }),

/***/ "./src/app/components/user-profile/user-profile.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/user-profile/user-profile.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/user-profile/user-profile.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/user-profile/user-profile.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container my-4\">\n  <ul class=\"nav nav-tabs\" id=\"myTab\" role=\"tablist\">\n    <li class=\"nav-item\">\n      <a class=\"nav-link active\" id=\"profile-tab\" data-toggle=\"tab\" href=\"#profile\" role=\"tab\" aria-controls=\"profile\" aria-selected=\"true\">Profile</a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" id=\"set-tab\" data-toggle=\"tab\" href=\"#set\" role=\"tab\" aria-controls=\"set\" aria-selected=\"false\">Settings</a>\n    </li>\n    <!-- <li class=\"nav-item\">\n      <a class=\"nav-link\" id=\"contact-tab\" data-toggle=\"tab\" href=\"#contact\" role=\"tab\" aria-controls=\"contact\" aria-selected=\"false\">Contact</a>\n    </li> -->\n  </ul>\n  <div class=\"tab-content\" id=\"myTabContent\">\n    <div class=\"tab-pane fade show active mx-auto col-sm-12 col-md-10\" id=\"profile\" role=\"tabpanel\" aria-labelledby=\"profile-tab\">\n      <ul class=\"list-group list-group-flush \">\n        <li class=\"list-group-item mt-4\">\n          <div class=\"row\">\n            <div class=\"col-sm-12 col-md-3\">E-mail:</div>\n            <div class=\"mx-auto\">{{email}}</div>\n          </div>\n        </li>\n        <li class=\"list-group-item\">\n          <div class=\"row\">\n            <div class=\"col-sm-12 col-md-3\">User name:</div>\n            <div class=\"mx-auto\">{{username}}</div>\n          </div>\n        </li>\n        <!-- <li class=\"list-group-item\">Morbi leo risus</li>\n        <li class=\"list-group-item\">Porta ac consectetur ac</li>\n        <li class=\"list-group-item\">Vestibulum at eros</li> -->\n      </ul>\n    </div>\n    <div class=\"tab-pane fade\" id=\"set\" role=\"tabpanel\" aria-labelledby=\"set-tab\">\n      <div class=\"form-inline my-2 mr-2 my-lg-0\" >\n        <button class=\"btn btn-success mx-auto my-4\" (click)=\"changePass()\">Change Password</button>\n      </div>\n      <div class=\"row\">\n        <div class=\"mx-auto\">{{message}}</div>\n      </div>\n    </div>\n    <!-- <div class=\"tab-pane fade\" id=\"contact\" role=\"tabpanel\" aria-labelledby=\"contact-tab\">...</div> -->\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/user-profile/user-profile.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/user-profile/user-profile.component.ts ***!
  \*******************************************************************/
/*! exports provided: UserProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileComponent", function() { return UserProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var UserProfileComponent = /** @class */ (function () {
    function UserProfileComponent(auth, router) {
        this.auth = auth;
        this.router = router;
        this.username = "";
        this.email = "";
        this.message = "";
    }
    UserProfileComponent.prototype.ngOnInit = function () {
        //if(this.auth.isAuthenticated()){
        this.username = JSON.parse(localStorage.getItem("profile")).nickname;
        this.email = JSON.parse(localStorage.getItem("profile")).name;
        //this.auth.getMoreProfile();
        // }else{
        //   //this.router.navigate(['/files']);
        // }
    };
    UserProfileComponent.prototype.changePass = function () {
        var _this = this;
        this.auth.changePass()
            .subscribe(function (res) {
            console.log(res);
            _this.message = "We've just send you a e-mail to reset your password.";
        }, function (err) {
            console.log(err.error.text);
            _this.message = err.error.text;
        });
        //this.message=this.auth.changePass();
    };
    UserProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-profile',
            template: __webpack_require__(/*! ./user-profile.component.html */ "./src/app/components/user-profile/user-profile.component.html"),
            styles: [__webpack_require__(/*! ./user-profile.component.css */ "./src/app/components/user-profile/user-profile.component.css")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])("auth")),
        __metadata("design:paramtypes", [Object, _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], UserProfileComponent);
    return UserProfileComponent;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var auth0_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! auth0-js */ "./node_modules/auth0-js/src/index.js");
/* harmony import */ var auth0_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(auth0_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
// src/app/auth/auth.service.ts
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import {tokenNotExpired} from "angular2-jwt";
window.global = window;
var AuthService = /** @class */ (function () {
    function AuthService(router, http) {
        this.router = router;
        this.http = http;
        this.auth0 = new auth0_js__WEBPACK_IMPORTED_MODULE_2__["WebAuth"]({
            clientID: 'SQqTnHXz9lyqAWKdJgO00BJBhbj8OGnG',
            domain: 'wenbosong.auth0.com',
            responseType: 'token id_token',
            audience: 'https://wenbosong.auth0.com/userinfo',
            redirectUri: 'http://localhost:3000/callback',
            scope: 'openid profile'
        });
    }
    // public login(){
    //   console.log("try");
    //   this.auth0.authorize();
    // }
    AuthService.prototype.login = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.auth0.authorize(function () {
                //console.log("1");
                //this.handleAuthentication();
                _this.getProfile(function (err, profile) {
                    //console.log("2");
                    localStorage.setItem("profile", JSON.stringify(profile));
                    resolve();
                });
            });
        });
    };
    AuthService.prototype.handleAuthentication = function () {
        var _this = this;
        this.auth0.parseHash(function (err, authResult) {
            if (authResult && authResult.accessToken && authResult.idToken) {
                _this.setSession(authResult);
                _this.router.navigate(['/home']);
            }
            else if (err) {
                _this.router.navigate(['/home']);
                console.log(err);
                alert("Error: " + err.error + ". Check the console for further details.");
            }
        });
    };
    AuthService.prototype.setSession = function (authResult) {
        // Set the time that the access token will expire at
        var expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
        localStorage.setItem('access_token', authResult.accessToken);
        localStorage.setItem('id_token', authResult.idToken);
        localStorage.setItem('expires_at', expiresAt);
        this.getProfile(function (err, profile) {
            localStorage.setItem("profile", JSON.stringify(profile));
            //this.username = profile.nickname;
            //console.log(this.logged);
            //console.log(this.username);
        });
    };
    AuthService.prototype.logout = function () {
        // Remove tokens and expiry time from localStorage
        console.log("try out");
        localStorage.removeItem('access_token');
        localStorage.removeItem('id_token');
        localStorage.removeItem('expires_at');
        localStorage.removeItem('profile');
        // Go back to the home route
        //this.router.navigate(['/']);
    };
    AuthService.prototype.isAuthenticated = function () {
        var expiresAt = JSON.parse(localStorage.getItem('expires_at') || '{}');
        return new Date().getTime() < expiresAt;
    };
    AuthService.prototype.getProfile = function (cb) {
        var accessToken = localStorage.getItem('access_token');
        if (!accessToken) {
            throw new Error('Access token must exist to fetch profile');
        }
        var self = this;
        this.auth0.client.userInfo(accessToken, function (err, profile) {
            if (profile) {
                self.userProfile = profile;
            }
            cb(err, profile);
        });
    };
    AuthService.prototype.changePass = function () {
        console.log("change");
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        var profile = {
            client_id: "O228e5ilo3JZXHQKSfYRmi6VvwQXCsC9",
            email: JSON.parse(localStorage.getItem("profile")).name,
            connection: "Username-Password-Authentication"
        };
        console.log(profile);
        // return this.http.post('api/v1/files', file, httpOptions).toPromise().then((res: Response) => {
        //   this.getFiles();
        //   return res.json();
        // }).catch(this.handleError);
        return this.http.post('https://zksun.auth0.com/dbconnections/change_password', profile, httpOptions);
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/get-events.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/get-events.service.ts ***!
  \************************************************/
/*! exports provided: GetEventsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetEventsService", function() { return GetEventsService; });
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



var GetEventsService = /** @class */ (function () {
    // fake_events = [
    //   {
    //     id:1,
    //     name: "Pop Up Dinner NYC",
    //     time: "SEP 08 2018",
    //     description: `New York City (NYC) gets to experience the glamour of the popular All-white Dinners. Soirée en Blanc “An Evening in White” the Pop Up edition Soirée dans le Parc comes to the City. Only 2000 diners will experience this elegant All-White showcase. Register NOW to get First round invitation. (Date subject to change before Ticket sales begin soon.
    //       Pop Up NYC takes the hurdles out of the fun experience and added more fun and convenience. No hauling of tables and chairs to the secret venue. Yes, you will be dining under the stars at one of the City's most picturesque locations.
    //       Luxury buses transport you to the secret location either from a metro station or convenient pre-arranged parking lot. You are welcomed at the secret location by Live Band and top Deejays, hundreds of white linen tables and white chairs. Yes, tables, chairs and linens are provided.
    //       Let's not forget your picnic basket. Sip fine wine, champagne and dance the evening away. Register now to get first chance to get Early Bird prices and secure your spot before they are sold out.`,
    //     location: "Secret NYC Location 10021",
    //     owner: "The Signature Society",
    //     imageUrl: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F41638359%2F61861132805%2F1%2Foriginal.jpg?w=800&auto=compress&rect=107%2C107%2C3460%2C1730&s=0ccf42500cd2901cd0874105ff720da2",
    //     },
    //     {
    //       id:2,
    //       name: "Color Block Party at Pier 17",
    //       time: "JUN 30 2018",
    //       description: `We are celebrating summer at Pier 17 at the Seaport District NYC, with a sea of colorful experiences. Join us for a Color Block Party on Saturday, June 30th featuring acclaimed artist GERONIMO, who will unveil a new semi-permanent installation overlooking the East River, based on her trademark massive-scale, colorful sculptures made of recycled, air-inflated balloons.
    //       The FREE all-day party, taking place on the brand-new Pier 17 Heineken® Riverdeck, will kick off at 12:00 PM with live DJs, food trucks, signature drinks and some of the most incredible views of Brooklyn, the East River and the City.
    //       Don't miss performances by Brittany Sky and the headliner Cut Copy DJs, along with a spectacular entrance by artist GERONIMO, starting at 6:00 PM.
    //       Dress head-to-toe in your colorful best for a chance to win from the $10,000 worth of prizes.
    //       Please note that tickets do not guarantee entry. Entry is on a first-come, first-served basis.`,
    //       location: "Pier 17 89 South Street New York, NY 10038",
    //       owner: "Seaport District NYC",
    //       imageUrl: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F45786833%2F176701156929%2F1%2Foriginal.jpg?w=800&auto=compress&rect=0%2C90%2C1432%2C716&s=931bb553257dd1999ab71df82147b99d",
    //     },
    //     {
    //       id:3,
    //       name: "ROOFTOP PARTY SATURDAY NIGHT , TIMES SQUARE | 360 VIEWS OF NYC",
    //       time: "JUN 23 2018",
    //       description: `Must say ICLUBNYC LIST TO GET IN
    //       ROOFTOP PARTY SATURDAY NIGHT
    //       WITH a UPSCALE AND CLASSY Atmosphere
    //       AT
    //       SKY ROOM Rooftop TIMES SQUARE
    //       330 west 40th st BET 8th & 9th ave.
    //       Mix music top 40s
    //       Doors open at 10pm
    //       FOR BOTTLE SERVICE, B'DAY PARTY OR ANY EVENTS email US BOOKING
    //       21 and over with proper ID /FINAL ENTRENCE IS UPTO THE DOORMAN Discretion
    //       LADIES FREE / GENTS FREE B4 11:00PM $20 after ONLY ON ICLUBNYC LIST
    //       Must Show ticket or say ICLUBNYC LIST TO GET IN
    //       STRICT DRESS CODE POLICY: -Gentlemen: Shoes, Button down shirts, and jeans are acceptable. No baggy attire, Sneakers, Boots, or Hats are allowed. -Ladies: Heels & classy`,
    //       location: "SKY ROOM 330 WEST 40TH New York, NY 10036",
    //       owner: "ICLUBNYC",
    //       imageUrl:"https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F44550934%2F24250841862%2F1%2Foriginal.jpg?w=800&auto=compress&rect=0%2C68%2C700%2C350&s=9b2728adc37ebc30ff35e478c0bfc34d"
    //     }
    // ];
    function GetEventsService(http) {
        this.http = http;
    }
    GetEventsService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    GetEventsService.prototype.loadMoreEvents = function () {
        //return this.fake_events;
        return this.http.get("api/v1/events");
    };
    GetEventsService.prototype.loadEventsHome = function () {
        //return this.fake_events;
        return this.http.get("api/v1/events");
    };
    GetEventsService.prototype.getEventInfo = function (id) {
        //return this.fake_events[id];
        // let res=new Observable<Event>(
        //   (observer)=>{
        //   observer.next(this.fake_events[id]);
        //   observer.complete();
        // });
        //return res;
        return this.http.get("api/v1/events/" + id);
    };
    GetEventsService.prototype.addEvent = function (event) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'content-type': 'application/json' });
        return this.http.post('/api/v1/events', event)
            .toPromise()
            .then(function (res) {
            return res;
        })
            .catch(this.handleError);
    };
    GetEventsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], GetEventsService);
    return GetEventsService;
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

module.exports = __webpack_require__(/*! /Users/wenbo/Documents/WeJoy/WeJoy/wejoy/client/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map