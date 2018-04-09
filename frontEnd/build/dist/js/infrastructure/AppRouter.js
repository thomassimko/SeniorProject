"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_router_dom_1 = require("react-router-dom");
var App_1 = require("../react-components/App");
var Navigation_1 = require("./Navigation");
var NotFound_1 = require("../react-components/NotFound");
var react_router_1 = require("react-router");
var SecureRoute_1 = require("../react-components/general/SecureRoute");
var CognitoController_1 = require("../models/CognitoController");
var LoginRouter_1 = require("../react-components/login/LoginRouter");
var AppRouter = /** @class */ (function (_super) {
    __extends(AppRouter, _super);
    function AppRouter() {
        var _this = _super.call(this) || this;
        _this.state = {
            isAuthed: false,
            isAuthenticating: true
        };
        return _this;
    }
    AppRouter.prototype.componentDidMount = function () {
        return __awaiter(this, void 0, void 0, function () {
            var e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.cognitoController.authUser()];
                    case 1:
                        if (_a.sent()) {
                            this.login();
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        e_1 = _a.sent();
                        alert(e_1);
                        return [3 /*break*/, 3];
                    case 3:
                        this.setState({ isAuthenticating: false });
                        return [2 /*return*/];
                }
            });
        });
    };
    Object.defineProperty(AppRouter.prototype, "app", {
        get: function () {
            return React.createElement(App_1.App, null);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppRouter.prototype, "cognitoController", {
        get: function () {
            var _this = this;
            return new CognitoController_1.CognitoController(function () { return _this.login(); }, function () { return _this.logout(); }, function () { return _this.isLoggedIn(); });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppRouter.prototype, "loginRouter", {
        get: function () {
            return new LoginRouter_1.LoginRouter(this.props.navigator, this.cognitoController);
        },
        enumerable: true,
        configurable: true
    });
    AppRouter.prototype.routes = function () {
        var _this = this;
        return this.loginRouter.routes.concat([
            React.createElement(SecureRoute_1.SecureRoute, { key: "app", isAuthed: this.state.isAuthed, exact: true, path: '/', component: function () { return _this.app; } })
        ]);
    };
    AppRouter.prototype.render = function () {
        return !this.state.isAuthenticating && React.createElement("div", null,
            React.createElement(Navigation_1.Navigation, { cognitoController: this.cognitoController }),
            React.createElement("div", { style: { padding: '10px', paddingTop: '75px' } },
                React.createElement(react_router_dom_1.HashRouter, null,
                    React.createElement(react_router_1.Switch, null,
                        this.routes(),
                        React.createElement(react_router_dom_1.Route, { path: "*", component: NotFound_1.NotFound })))));
    };
    AppRouter.prototype.login = function () {
        console.log('logging in');
        this.setState({ isAuthed: true });
    };
    AppRouter.prototype.logout = function () {
        console.log('logging out');
        this.setState({ isAuthed: false });
    };
    AppRouter.prototype.isLoggedIn = function () {
        return this.state.isAuthed;
    };
    return AppRouter;
}(React.Component));
exports.AppRouter = AppRouter;
//# sourceMappingURL=AppRouter.js.map