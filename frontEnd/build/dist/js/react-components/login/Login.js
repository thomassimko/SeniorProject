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
var Column_1 = require("../bootstrap/Column");
var Login = /** @class */ (function (_super) {
    __extends(Login, _super);
    function Login(props) {
        var _this = _super.call(this, props) || this;
        _this.state = { username: "", password: "", showError: false, isLoading: false };
        return _this;
    }
    Login.prototype.render = function () {
        var _this = this;
        return React.createElement("div", { style: { paddingTop: '75px' } },
            React.createElement(Column_1.Column, { md: 4, mdOffset: 4 },
                React.createElement("div", { className: 'login-form' },
                    React.createElement("div", { className: "title" }, "Onsight"),
                    React.createElement("div", { className: "form-group " },
                        React.createElement("input", { type: "text", className: "login-form-control", placeholder: "Username ", id: "UserName", onChange: function (e) { return _this.handleUsernameChange(e); } }),
                        React.createElement("i", { className: "fa fa-user" })),
                    React.createElement("div", { className: "form-group log-status " + (this.state.showError ? 'wrong-entry' : '') },
                        React.createElement("input", { type: "password", className: "login-form-control", placeholder: "Password", id: "Password", onChange: function (e) { return _this.handlePasswordChange(e); } }),
                        React.createElement("i", { className: "fa fa-lock" })),
                    this.state.showError ? React.createElement("span", { style: { color: '#f00', fontSize: '12px', float: 'left' } }, "Invalid Credentials") : null,
                    React.createElement("a", { className: "link", href: "/#/forgot-password" }, "Lost your password?"),
                    React.createElement("button", { type: "button", className: "log-btn", onClick: function () { return _this.onAttemptLogin(); } }, this.state.isLoading
                        ? React.createElement("span", null,
                            React.createElement("i", { className: "fa fa-refresh fa-spin" }),
                            "\u00A0Logging in...")
                        : 'Log in'))));
    };
    Login.prototype.handleUsernameChange = function (event) {
        this.setState({ username: event.target.value });
    };
    Login.prototype.handlePasswordChange = function (event) {
        this.setState({ password: event.target.value, showError: false });
    };
    Login.prototype.onAttemptLogin = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.setState({ isLoading: true });
                        return [4 /*yield*/, this.props.cognitoController.attemptLogIn(this.state.username, this.state.password)];
                    case 1:
                        if (_a.sent()) {
                            console.log(this.props.cognitoController.isLoggedIn());
                            if (this.props.desiredEndpoint) {
                                this.props.navigator.navigateTo(decodeURI(this.props.desiredEndpoint));
                            }
                            this.props.navigator.navigateTo('/#/');
                        }
                        else {
                            console.error('error');
                            this.setState({ showError: true, isLoading: false });
                            this.setState({ isLoading: false });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    return Login;
}(React.Component));
exports.Login = Login;
//# sourceMappingURL=Login.js.map