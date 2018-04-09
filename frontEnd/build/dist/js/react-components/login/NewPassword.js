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
var react_bootstrap_1 = require("react-bootstrap");
var NewPassword = /** @class */ (function (_super) {
    __extends(NewPassword, _super);
    function NewPassword(props) {
        var _this = _super.call(this, props) || this;
        _this.state = { tempPassword: "", newPassword: "", showInvalidPassword: false, showModal: false };
        return _this;
    }
    NewPassword.prototype.render = function () {
        var _this = this;
        return React.createElement("div", { style: { paddingTop: '75px' } },
            React.createElement(Column_1.Column, { md: 4, mdOffset: 4 },
                this.infoModal(),
                React.createElement("div", { className: 'login-form' },
                    React.createElement("div", { className: "title" }, "Onsight"),
                    React.createElement("div", { style: { color: this.state.showInvalidPassword ? '#f00' : '#eee', fontSize: '12px', float: 'left', marginBottom: '10px' } }, "Passwords must have at least one of the following: uppercase, lowercase, and number."),
                    React.createElement("div", { className: "form-group " },
                        React.createElement("input", { type: "password", className: "form-control", placeholder: "New Password", onChange: function (e) { return _this.handleNewPasswordChange(e); } })),
                    React.createElement("div", { className: "form-group " },
                        React.createElement("input", { type: "password", className: "form-control", placeholder: "Repeat Password", onChange: function (e) { return _this.handleTempPasswordChange(e); } }),
                        this.state.tempPassword != '' && this.state.newPassword != ''
                            ? this.passwordsMatch()
                                ? React.createElement("i", { style: { color: 'green' }, className: "fa fa-check" })
                                : React.createElement("i", { className: "fa fa-times" })
                            : null),
                    React.createElement("button", { type: "button", className: "log-btn", disabled: !this.passwordsMatch() || this.state.newPassword == '', onClick: function () { return _this.onResetPassword(); } }, "Submit"))));
    };
    NewPassword.prototype.passwordsMatch = function () {
        return this.state.tempPassword == this.state.newPassword;
    };
    NewPassword.prototype.ifPasswordValid = function () {
        var hasCorrectLength = this.state.newPassword.length > 7 && this.state.newPassword.length < 99;
        var hasNumber = this.state.newPassword.match(/\d+/g) != null;
        var hasUpperCase = /[A-Z]/.test(this.state.newPassword);
        var hasLowerCase = /[a-z]/.test(this.state.newPassword);
        return this.passwordsMatch() && hasCorrectLength && hasNumber && hasUpperCase && hasLowerCase;
    };
    NewPassword.prototype.handleTempPasswordChange = function (event) {
        this.setState({ tempPassword: event.target.value });
    };
    NewPassword.prototype.handleNewPasswordChange = function (event) {
        this.setState({ newPassword: event.target.value });
    };
    NewPassword.prototype.onResetPassword = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.ifPasswordValid()) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.props.cognitoController.register(this.props.username, this.props.company, this.props.location, this.props.email, this.state.newPassword)];
                    case 1:
                        _a.sent();
                        this.setState({ showModal: true });
                        return [3 /*break*/, 3];
                    case 2:
                        this.setState({ showInvalidPassword: true });
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    NewPassword.prototype.infoModal = function () {
        var _this = this;
        return React.createElement(react_bootstrap_1.Modal, { onHide: function () { return _this.props.navigator.navigateTo('/#/'); }, show: this.state.showModal },
            React.createElement(react_bootstrap_1.Modal.Header, null,
                React.createElement(react_bootstrap_1.Modal.Title, null, "Confirmation")),
            React.createElement(react_bootstrap_1.Modal.Body, null,
                React.createElement("div", null, "Your account has been created.  A confirmation link has been sent to your email.")),
            React.createElement(react_bootstrap_1.Modal.Footer, null,
                React.createElement("button", { className: 'btn btn-primary', onClick: function () { return _this.props.navigator.navigateTo('/#/'); } }, "Close")));
    };
    return NewPassword;
}(React.Component));
exports.NewPassword = NewPassword;
//# sourceMappingURL=NewPassword.js.map