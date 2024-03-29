function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"\">\n  <div class=\"w3-top w3-padding\" id=\"largetop\">\n    <div id=\"topNavigate\" class=\"w3-bar w3-wide w3-padding w3-card\">\n      <a id=\"title\" class=\"w3-bar-item w3-text-white\"><b>COVID-19 ESTIMATOR</b></a>\n      <!-- Float links to the right. Hide them on small screens -->\n      <div id=\"navlinks\" class=\"w3-right w3-hide-small\">\n        <a class=\"w3-bar-item w3-button w3-card w3-red w3-hover-white\" href=\"https://www.cdc.gov\">Visit CDC</a>\n      </div>\n    </div>\n  </div>\n  <br>\n  <br>\n\n  <main class=\"w3-margin-top\">\n    <aside class=\"w3-left w3-card-16 leftcont \">\n\n      <form id=\"formid\" #form=\"ngForm\" name=\"covid\" class=\"w3-form\" (submit)=\"covid19ImpactEstimator(form)\" novalidate>\n        <i>Note: Projections are calculated for Africa with an average age of 19.7, average daily income of $4 and an average income population of 0.73%</i>\n        <div class=\"w3-row w3-card-16 w3-margin-top innerconter\">\n          <aside class=\"w3-margin\">\n            <!----------------------------------->\n            <div class=\"w3-container w3-third w3-block w3-margin-bottom\">\n              <aside class=\"w3-container\">\n                <label for=\"population\">Population</label><br>\n                <input id=\"population\" class=\"w3-input w3-threequarter w3-animate-input\" required type=\"number\"\n                  [class.formerror]=\"data_population.invalid && data_population.touched\" #data_population=\"ngModel\"\n                  placeholder=\"Population\" name=\"data_population\" [(ngModel)]=\"model.data_population\"><br>\n              </aside><br><br>\n              <aside class=\"w3-container\">\n                <label for=\"time\">Time Elapsed</label><br>\n                <input id=\"time\" class=\"w3-input w3-threequarter w3-animate-input\" required type=\"number\"\n                  [class.formerror]=\"data_time_toelapse.invalid && data_time_toelapse.touched\"\n                  #data_time_toelapse=\"ngModel\" placeholder=\"Time Elapsed\" name=\"data_time_toelapse\"\n                  [(ngModel)]=\"model.data_time_to_elapse\">\n              </aside>\n            </div>\n            <!-- ----------------------------- -->\n            <div class=\"w3-container w3-third w3-block w3-margin-bottom\">\n              <aside class=\"w3-container\">\n                <label for=\"report\">Reported Cases</label><br>\n                <input id=\"report\" class=\"w3-input w3-threequarter w3-animate-input\" required type=\"number\"\n                  [class.formerror]=\"data_reported_cases.invalid && data_reported_cases.touched\"\n                  #data_reported_cases=\"ngModel\" placeholder=\"Reported Cases\" name=\"data_reported_cases\"\n                  [(ngModel)]=\"model.data_reported_cases\"><br>\n              </aside><br><br>\n              <aside class=\"w3-container\">\n                <label for=\"bed\">Total Hospital Beds</label><br>\n                <input id=\"bed\" class=\"w3-input w3-threequarter w3-animate-input\" required type=\"number\"\n                  [class.formerror]=\"data_total_hospital_beds.invalid && data_total_hospital_beds.touched\"\n                  #data_total_hospital_beds=\"ngModel\" placeholder=\"Hospital Beds\" name=\"data_total_hospital_beds\"\n                  [(ngModel)]=\"model.data_total_hospital_beds\">\n              </aside>\n            </div>\n            <!-------------------------------- -->\n            <div class=\"w3-container w3-third w3_block w3-margin-bottom\">\n              <div class=\"w3-margin-bottom\" style=\"display: flex; align-items: baseline;\">\n                <label for=\"date\">Period Type</label>\n                <figure>\n\n                  <select id=\"date\" class=\"w3-rest w3-input w3-animate-input\" name=\"data_period_type\" #data_period_type\n                    (blur)=\"validatePeriodType(data_period_type.value)\" [(ngModel)]=\"model.data_period_type\"\n                    [class.formerror]=\"hasdataperiodtype\" (change)=\"validatePeriodType(data_period_type.value)\">\n                    <option value=\"default\">Data Period type</option>\n                    <option value=\"days\">Days</option>\n                    <option value=\"weeks\">Weeks</option>\n                    <option value=\"months\">Months</option>\n                  </select>\n                </figure>\n              </div>\n\n              <div class=\"w3-margin-top\">\n                <input type=\"submit\" name=\"data-go-estimate\" value=\"Estimate Data\" [disabled]=\"form.invalid\"\n                  class=\"w3-card w3-button w3-threequarter w3-hover-border-red w3-red\">\n              </div>\n            </div>\n          </aside>\n        </div>\n        <!-- Model:{{ model | json }} -->\n\n      </form>\n      <aside class=\"w3-container\" id=\"reest\" *ngIf=\"currimpactinfectx\">\n       <h3 class=\"w3-center\">Estimated Result</h3>\n        <main class=\"w3-card-16\" id=\"result\">\n          <div class=\"w3-container\">\n            <h4>Minimum Impact</h4>\n            <ul class=\"w3-ul\">\n              <li><span>Currently Infected : </span>{{ currimpactinfectx }}</li>\n              <li><span>Infections By RequestedTime  : </span>{{ infectbytimex }}</li>\n              <li><span>SevereCases By RequestedTime  : </span>{{ severbytimex }}</li>\n              <li><span>Hospital Beds By RequestedTime  : </span>{{ hospitalbedsx }}</li>\n              <li><span>Cases For ICU By RequestedTime  : </span>{{ icutimex }}</li>\n              <li><span>Cases For Ventilators By RequestedTime  : </span>{{ venttimex }}</li>\n              <li><span>Dollars In Flight  : </span>{{ dollarfilx }}</li>\n             \n            </ul>\n          </div>\n          <div class=\"w3-container\">\n            <h4>Severe Impact</h4>\n            <ul class=\"w3-ul\">\n              <li><span>Currently Infected : </span>{{ currimpactinfecty }}</li>\n              <li><span>Infections By RequestedTime  : </span>{{ infectbytimey }}</li>\n              <li><span>SevereCases By RequestedTime  : </span>{{ severbytimey }}</li>\n              <li><span>Hospital Beds By RequestedTime  : </span>{{ hospitalbedsy }}</li>\n              <li><span>Cases For ICU By RequestedTime  : </span>{{ icutimey }}</li>\n              <li><span>Cases For Ventilators By RequestedTime  : </span>{{ venttimey }}</li>\n              <li><span>Dollars In Flight  : </span>{{ dollarfily }}</li>\n            </ul>\n          </div>\n        </main>\n\n      </aside>\n\n      <!-- ================================= -->\n\n\n    </aside>\n\n  </main>\n\n\n</div>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "*{\r\n    font-family: monospace;\r\n}\r\n#largetop{\r\n    background: linear-gradient(to right, rgb(155, 7, 7),rgba(0, 0, 0, 0.945));\r\n}\r\n.w3_block{\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n.leftcont{\r\n    /* position: fixed; */\r\n    width:100%;\r\n    height: 800px;\r\n    background: rgba(155, 7, 7, 0.267);\r\n}\r\nform, #result{\r\n    width:95%;\r\n    margin: auto;\r\n}\r\n#result{\r\n    display: flex; \r\n    align-items: baseline;\r\n    background: rgb(168, 164, 164);\r\n}\r\n.w3-animate-input,select,.innerconter{\r\n    background: white;\r\n}\r\n.w3-button{\r\n    font-weight: bold;\r\n}\r\n@media screen and (max-width: 378px){\r\n    form{\r\n        width:100%;\r\n    } \r\n}\r\n.formerror{\r\n    border:3px solid red;\r\n}\r\n@media screen and (max-width:800px){\r\n    #result{\r\n        flex-wrap: wrap;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLDBFQUEwRTtBQUM5RTtBQUNBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLFVBQVU7SUFDVixhQUFhO0lBQ2Isa0NBQWtDO0FBQ3RDO0FBQ0E7SUFDSSxTQUFTO0lBQ1QsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLHFCQUFxQjtJQUNyQiw4QkFBOEI7QUFDbEM7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSTtRQUNJLFVBQVU7SUFDZDtBQUNKO0FBQ0E7SUFDSSxvQkFBb0I7QUFDeEI7QUFDQTtJQUNJO1FBQ0ksZUFBZTtJQUNuQjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqe1xyXG4gICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcclxufVxyXG4jbGFyZ2V0b3B7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYigxNTUsIDcsIDcpLHJnYmEoMCwgMCwgMCwgMC45NDUpKTtcclxufVxyXG4udzNfYmxvY2t7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG4ubGVmdGNvbnR7XHJcbiAgICAvKiBwb3NpdGlvbjogZml4ZWQ7ICovXHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgaGVpZ2h0OiA4MDBweDtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMTU1LCA3LCA3LCAwLjI2Nyk7XHJcbn1cclxuZm9ybSwgI3Jlc3VsdHtcclxuICAgIHdpZHRoOjk1JTtcclxuICAgIG1hcmdpbjogYXV0bztcclxufVxyXG4jcmVzdWx0e1xyXG4gICAgZGlzcGxheTogZmxleDsgXHJcbiAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMTY4LCAxNjQsIDE2NCk7XHJcbn1cclxuXHJcbi53My1hbmltYXRlLWlucHV0LHNlbGVjdCwuaW5uZXJjb250ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxufVxyXG4udzMtYnV0dG9ue1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzc4cHgpe1xyXG4gICAgZm9ybXtcclxuICAgICAgICB3aWR0aDoxMDAlO1xyXG4gICAgfSBcclxufVxyXG4uZm9ybWVycm9ye1xyXG4gICAgYm9yZGVyOjNweCBzb2xpZCByZWQ7XHJcbn0gXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ODAwcHgpe1xyXG4gICAgI3Jlc3VsdHtcclxuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICB9XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _covid_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./covid.model */
    "./src/app/covid.model.ts");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'covid19EstimatorUi';
        this.hasdataperiodtype = false;
        this.model = new _covid_model__WEBPACK_IMPORTED_MODULE_2__["Covid"]('', '', '', '', 'default');
      }

      _createClass(AppComponent, [{
        key: "validatePeriodType",
        value: function validatePeriodType(value) {
          if (value === 'default') {
            this.hasdataperiodtype = true;
          } else {
            this.hasdataperiodtype = false;
          }
        }
      }, {
        key: "covid19ImpactEstimator",
        value: function covid19ImpactEstimator(form) {
          var data = {
            region: {
              name: 'Africa',
              avgAge: 19.7,
              avgDailyIncomeInUSD: 4,
              avgDailyIncomePopulation: 0.73
            },
            periodType: this.model.data_period_type,
            timeToElapse: this.model.data_time_to_elapse,
            reportedCases: this.model.data_reported_cases,
            population: this.model.data_population,
            totalHospitalBeds: this.model.data_total_hospital_beds
          };
          var realData = data;
          var record = {
            data: realData,
            impact: {
              currentlyInfected: null,
              infectionsByRequestedTime: null,
              severeCasesByRequestedTime: null,
              hospitalBedsByRequestedTime: null,
              casesForICUByRequestedTime: null,
              casesForVentilatorsByRequestedTime: null,
              dollarsInFlight: null
            },
            severeImpact: {
              currentlyInfected: null,
              infectionsByRequestedTime: null,
              severeCasesByRequestedTime: null,
              hospitalBedsByRequestedTime: null,
              casesForICUByRequestedTime: null,
              casesForVentilatorsByRequestedTime: null,
              dollarsInFlight: null
            }
          };
          record.impact.currentlyInfected = data.reportedCases * 10;
          this.currimpactinfectx = record.impact.currentlyInfected;
          record.severeImpact.currentlyInfected = data.reportedCases * 50;
          this.currimpactinfecty = record.severeImpact.currentlyInfected; // infectionsByRequestedTime for impact && severeImpact

          var calDay = null;
          var period = data.timeToElapse;

          if (data.periodType === 'days') {
            calDay = period;
          } else if (data.periodType === 'weeks') {
            calDay = period * 7;
          } else if (data.periodType === 'months') {
            calDay = period * 30;
          }

          var factor = Math.trunc(calDay / 3);
          record.impact.infectionsByRequestedTime = Math.trunc(record.impact.currentlyInfected * Math.pow(2, factor));
          this.infectbytimex = record.impact.infectionsByRequestedTime;
          record.severeImpact.infectionsByRequestedTime = Math.trunc(record.severeImpact.currentlyInfected * Math.pow(2, factor));
          this.infectbytimey = record.severeImpact.infectionsByRequestedTime; // 15% percent calculation of impact and severe impact

          record.impact.severeCasesByRequestedTime = Math.trunc(0.15 * record.impact.infectionsByRequestedTime);
          this.severbytimex = record.impact.severeCasesByRequestedTime;
          record.severeImpact.severeCasesByRequestedTime = Math.trunc(0.15 * record.severeImpact.infectionsByRequestedTime);
          this.severbytimey = record.severeImpact.severeCasesByRequestedTime; // total number of hospitalBedsByRequestedTime for impact && severe impact

          record.impact.hospitalBedsByRequestedTime = Math.trunc(0.35 * data.totalHospitalBeds - record.impact.severeCasesByRequestedTime);
          this.hospitalbedsx = record.impact.hospitalBedsByRequestedTime;
          record.severeImpact.hospitalBedsByRequestedTime = Math.trunc(0.35 * data.totalHospitalBeds - record.severeImpact.severeCasesByRequestedTime);
          this.hospitalbedsy = record.severeImpact.hospitalBedsByRequestedTime; // casesForICUByRequestedTime for impact && severe impact

          record.impact.casesForICUByRequestedTime = Math.trunc(0.05 * record.impact.infectionsByRequestedTime);
          this.icutimex = record.impact.casesForICUByRequestedTime;
          record.severeImpact.casesForICUByRequestedTime = Math.trunc(0.05 * record.severeImpact.infectionsByRequestedTime);
          this.icutimey = record.severeImpact.casesForICUByRequestedTime; // casesForVentilatorsByRequestedTime for impact && severe impact

          record.impact.casesForVentilatorsByRequestedTime = Math.trunc(0.02 * record.impact.infectionsByRequestedTime);
          this.venttimex = record.impact.casesForVentilatorsByRequestedTime;
          record.severeImpact.casesForVentilatorsByRequestedTime = Math.trunc(0.02 * record.severeImpact.infectionsByRequestedTime);
          this.venttimey = record.impact.casesForVentilatorsByRequestedTime; // estimation of how much money the economy is likely to lose daily form impact && severe impact

          record.impact.dollarsInFlight = Math.trunc(record.impact.infectionsByRequestedTime * data.region.avgDailyIncomePopulation * data.region.avgDailyIncomeInUSD / calDay);
          this.dollarfilx = record.impact.dollarsInFlight;
          record.severeImpact.dollarsInFlight = Math.trunc(record.severeImpact.infectionsByRequestedTime * data.region.avgDailyIncomePopulation * data.region.avgDailyIncomeInUSD / calDay);
          this.dollarfily = record.severeImpact.dollarsInFlight;
        }
      }]);

      return AppComponent;
    }();

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/covid.model.ts":
  /*!********************************!*\
    !*** ./src/app/covid.model.ts ***!
    \********************************/

  /*! exports provided: Covid */

  /***/
  function srcAppCovidModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Covid", function () {
      return Covid;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Covid = function Covid(data_population, data_time_to_elapse, data_reported_cases, data_total_hospital_beds, data_period_type) {
      _classCallCheck(this, Covid);

      this.data_population = data_population;
      this.data_time_to_elapse = data_time_to_elapse;
      this.data_reported_cases = data_reported_cases;
      this.data_total_hospital_beds = data_total_hospital_beds;
      this.data_period_type = data_period_type;
    };
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\HP\Documents\Angular\covid19EstimatorUi\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map