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
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Column_1 = require("../bootstrap/Column");
var react_bootstrap_1 = require("react-bootstrap");
var ForgotPassword = /** @class */ (function (_super) {
    __extends(ForgotPassword, _super);
    function ForgotPassword(props) {
        var _this = _super.call(this, props) || this;
        _this.state = { username: "", showModal: false };
        return _this;
    }
    ForgotPassword.prototype.render = function () {
        var _this = this;
        return React.createElement("div", { style: { paddingTop: '75px' } },
            this.infoModal(),
            React.createElement(Column_1.Column, { md: 4, mdOffset: 4 },
                React.createElement("div", { className: 'login-form' },
                    React.createElement("div", { className: 'title' }, "QuickPick"),
                    React.createElement("div", { style: { textAlign: 'center', marginBottom: '10px', color: '#ccc' } }, "Forgot Password"),
                    React.createElement("div", { className: "form-group " },
                        React.createElement("input", { type: "text", className: "form-control", placeholder: "Username", onChange: function (e) { return _this.handleUsernameChange(e); } })),
                    React.createElement("button", { type: "button", className: "log-btn", disabled: this.state.username == '', onClick: function () { return _this.onResetPassword(); } }, "Submit"))));
    };
    ForgotPassword.prototype.handleUsernameChange = function (event) {
        this.setState({ username: event.target.value });
    };
    ForgotPassword.prototype.onResetPassword = function () {
        this.setState({ showModal: true });
        //TODO change password
    };
    ForgotPassword.prototype.infoModal = function () {
        var _this = this;
        return React.createElement(react_bootstrap_1.Modal, { onHide: function () { return _this.props.navigator.navigateTo('/#/login'); }, show: this.state.showModal },
            React.createElement(react_bootstrap_1.Modal.Header, null,
                React.createElement(react_bootstrap_1.Modal.Title, null, "Confirmation")),
            React.createElement(react_bootstrap_1.Modal.Body, null,
                React.createElement("div", null, "A confirmation has been sent to your email.")),
            React.createElement(react_bootstrap_1.Modal.Footer, null,
                React.createElement("button", { className: 'btn btn-primary', onClick: function () { return _this.props.navigator.navigateTo('/#/login'); } }, "Close")));
    };
    return ForgotPassword;
}(React.Component));
exports.ForgotPassword = ForgotPassword;
//# sourceMappingURL=ForgotPassword.js.map