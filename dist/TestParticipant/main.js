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

module.exports = "<div FxLayout fxLayoutAlign=\"center start\">\n    <div class=\"bg\" fxFlex.md=\"70%\" fxFlex.sm=\"60%\" fxFlex.gt-md=\"80%\">\n        <app-participant-list fxFlexOffset.gt-md=\"70%\" fxFlex.gt-md=\"30%\" fxFlex=\" 100%\" [participants]=\"this.participants\"></app-participant-list>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bg {\n  background: #ddd; }\n"

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
/* harmony import */ var _services_participant_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/participant.service */ "./src/app/services/participant.service.ts");
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
    function AppComponent(_participantService) {
        this._participantService = _participantService;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.participants$ = this._participantService.getParticipants().subscribe(function (s) { return _this.participants = s; });
        this._participantService.connectSocket();
    };
    AppComponent.prototype.ngOnDestroy = function () {
        this._participantService.disconnectSocket();
        this.participants$.unsubscribe();
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_participant_service__WEBPACK_IMPORTED_MODULE_1__["ParticipantService"]])
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
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _stomp_ng2_stompjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @stomp/ng2-stompjs */ "./node_modules/@stomp/ng2-stompjs/fesm5/stomp-ng2-stompjs.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _store_participant_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./store/participant.store */ "./src/app/store/participant.store.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _components_participant_list_participant_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/participant-list/participant-list.component */ "./src/app/components/participant-list/participant-list.component.ts");
/* harmony import */ var _services_participant_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/participant.service */ "./src/app/services/participant.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _components_participant_list_participant_item_participant_item_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/participant-list/participant-item/participant-item.component */ "./src/app/components/participant-list/participant-item/participant-item.component.ts");
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
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _components_participant_list_participant_list_component__WEBPACK_IMPORTED_MODULE_9__["ParticipantListComponent"],
                _components_participant_list_participant_item_participant_item_component__WEBPACK_IMPORTED_MODULE_12__["ParticipantItemComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"].withConfig({ useColumnBasisZero: false }),
                _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["StoreModule"].forRoot({ participants: _store_participant_store__WEBPACK_IMPORTED_MODULE_5__["participantReducer"] })
            ],
            providers: [
                _stomp_ng2_stompjs__WEBPACK_IMPORTED_MODULE_3__["StompRService"],
                _services_participant_service__WEBPACK_IMPORTED_MODULE_10__["ParticipantService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/participant-list/participant-item/participant-item.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/components/participant-list/participant-item/participant-item.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-list-item [ngClass]=\"[item.ready ? '':'offline']\">\n  <mat-icon class=\"icon\" [ngClass]=\"[item.ready ? 'icon-on': 'icon-off']\">account_circle</mat-icon>\n  <p class=\"mat-caption\"> {{item.identifier}}</p>\n  <mat-divider></mat-divider>\n</mat-list-item>"

/***/ }),

/***/ "./src/app/components/participant-list/participant-item/participant-item.component.scss":
/*!**********************************************************************************************!*\
  !*** ./src/app/components/participant-list/participant-item/participant-item.component.scss ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".icon-on {\n  color: #3bcf00;\n  fill: #a6fc91; }\n\n.icon-off {\n  color: #f32727;\n  fill: #facf57; }\n\n.offline {\n  background-color: #fff5f5; }\n\n.icon {\n  margin-right: 4px; }\n\n:host {\n  display: block; }\n"

/***/ }),

/***/ "./src/app/components/participant-list/participant-item/participant-item.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/components/participant-list/participant-item/participant-item.component.ts ***!
  \********************************************************************************************/
/*! exports provided: ParticipantItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParticipantItemComponent", function() { return ParticipantItemComponent; });
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

var ParticipantItemComponent = /** @class */ (function () {
    function ParticipantItemComponent() {
    }
    ParticipantItemComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ParticipantItemComponent.prototype, "item", void 0);
    ParticipantItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-participant-item',
            template: __webpack_require__(/*! ./participant-item.component.html */ "./src/app/components/participant-list/participant-item/participant-item.component.html"),
            styles: [__webpack_require__(/*! ./participant-item.component.scss */ "./src/app/components/participant-list/participant-item/participant-item.component.scss")],
        }),
        __metadata("design:paramtypes", [])
    ], ParticipantItemComponent);
    return ParticipantItemComponent;
}());



/***/ }),

/***/ "./src/app/components/participant-list/participant-list.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/participant-list/participant-list.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-list class=\"list\" [@listAnimation]=\"participants.length\">\n  <div mat-subheader>\n    <h3>Участники: </h3>\n  </div>\n  <mat-divider></mat-divider>\n  <div *ngFor=\"let participant of partSort; trackBy: participant?.id \">\n    <app-participant-item [item]=\"participant\"></app-participant-item>\n  </div>\n</mat-list>"

/***/ }),

/***/ "./src/app/components/participant-list/participant-list.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/components/participant-list/participant-list.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".list {\n  background-color: #fafafa;\n  border-radius: 0 0 6px 6px;\n  border: 1px solid #ddd;\n  margin: 4px; }\n\n.material-icons {\n  width: 26px;\n  height: 26px;\n  font-size: 26px;\n  margin-right: 4px; }\n"

/***/ }),

/***/ "./src/app/components/participant-list/participant-list.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/participant-list/participant-list.component.ts ***!
  \***************************************************************************/
/*! exports provided: ParticipantListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParticipantListComponent", function() { return ParticipantListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ParticipantListComponent = /** @class */ (function () {
    function ParticipantListComponent() {
    }
    Object.defineProperty(ParticipantListComponent.prototype, "partSort", {
        get: function () {
            return this.participants.sort(function (a, b) { return a.ready < b.ready ? 1 : -1; });
        },
        enumerable: true,
        configurable: true
    });
    ParticipantListComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], ParticipantListComponent.prototype, "participants", void 0);
    ParticipantListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-participant-list',
            template: __webpack_require__(/*! ./participant-list.component.html */ "./src/app/components/participant-list/participant-list.component.html"),
            styles: [__webpack_require__(/*! ./participant-list.component.scss */ "./src/app/components/participant-list/participant-list.component.scss")],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('listAnimation', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => *', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ height: "0px", overflow: 'hidden', }), { optional: true }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["stagger"])('50ms', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.1s ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["keyframes"])([
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ height: "0px" }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ height: '*' }),
                            ]))
                        ]), { optional: true }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.1s ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["keyframes"])([
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ height: '*' }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ height: "0px" }),
                        ])), { optional: true }),
                    ])
                ]),
            ]
        }),
        __metadata("design:paramtypes", [])
    ], ParticipantListComponent);
    return ParticipantListComponent;
}());



/***/ }),

/***/ "./src/app/services/participant.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/participant.service.ts ***!
  \*************************************************/
/*! exports provided: ParticipantService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParticipantService", function() { return ParticipantService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _stomp_ng2_stompjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @stomp/ng2-stompjs */ "./node_modules/@stomp/ng2-stompjs/fesm5/stomp-ng2-stompjs.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ParticipantService = /** @class */ (function () {
    function ParticipantService(_stomp, _store, http) {
        this._stomp = _stomp;
        this._store = _store;
        this.http = http;
    }
    ParticipantService.prototype.getParticipants = function () {
        var _this = this;
        this.http.get("http://89.223.27.70/participants").subscribe(function (s) { return _this._store.dispatch({ type: "PARTICIPANT_ADD_RANGE", message: s }); });
        return this._store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])("participants"));
    };
    ParticipantService.prototype.connectSocket = function () {
        var _this = this;
        if (this._subscription$)
            return;
        this._stomp.config = {
            url: 'ws://89.223.27.70/ws',
            debug: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["isDevMode"])() ? true : false,
            heartbeat_in: 0,
            headers: {},
            heartbeat_out: 20000,
            reconnect_delay: 5000
        };
        this._stomp.initAndConnect();
        this._subscription$ = this._stomp.subscribe('/topic/messages').subscribe(function (s) {
            var message = JSON.parse(s.body);
            _this._store.dispatch({ type: message.messageType, message: message });
        });
    };
    ParticipantService.prototype.disconnectSocket = function () {
        this._subscription$.unsubscribe();
        this._stomp.disconnect();
    };
    ParticipantService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_stomp_ng2_stompjs__WEBPACK_IMPORTED_MODULE_1__["StompRService"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], ParticipantService);
    return ParticipantService;
}());



/***/ }),

/***/ "./src/app/store/participant.store.ts":
/*!********************************************!*\
  !*** ./src/app/store/participant.store.ts ***!
  \********************************************/
/*! exports provided: participantReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "participantReducer", function() { return participantReducer; });
function participantReducer(state, action) {
    if (state === void 0) { state = []; }
    switch (action.type) {
        case "PARTICIPANT_ADDED":
            state.push(action.message.participant);
            return state;
        case "PARTICIPANT_REMOVED":
            state = state.filter(function (s) { return s.id !== action.message.participantId; });
            return state;
        case "PARTICIPANT_READY_STATUS_CHANGED":
            var participant = state.find(function (s) { return s.id === action.message.participantId; });
            if (participant)
                participant.ready = action.message.newReadyStatus;
            return state;
        case "PARTICIPANT_ADD_RANGE":
            state = state.concat(action.message).reduce(function (ret, el) {
                if (!ret.some(function (s) { return s.id === el.id; })) {
                    ret.push(el);
                }
                return ret;
            }, []);
        default:
            return state;
    }
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

module.exports = __webpack_require__(/*! /home/useroker/Project/TestParticipant/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map