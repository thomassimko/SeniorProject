"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_router_dom_1 = require("react-router-dom");
var Login_1 = require("./Login");
var ForgotPassword_1 = require("./ForgotPassword");
var Register_1 = require("./Register");
var Logout_1 = require("./Logout");
var LoginRouter = /** @class */ (function () {
    function LoginRouter(navigator, loginController) {
        this.navigator = navigator;
        this.cognitoController = loginController;
    }
    LoginRouter.prototype.login = function (props) {
        var desiredEndpoint = props.match.params.desiredEndpoint;
        return React.createElement(Login_1.Login, { navigator: this.navigator, desiredEndpoint: desiredEndpoint, cognitoController: this.cognitoController });
    };
    Object.defineProperty(LoginRouter.prototype, "forgotPassword", {
        get: function () {
            return React.createElement(ForgotPassword_1.ForgotPassword, { navigator: this.navigator });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoginRouter.prototype, "register", {
        get: function () {
            return React.createElement(Register_1.Register, { navigator: this.navigator, cognitoController: this.cognitoController });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoginRouter.prototype, "logout", {
        get: function () {
            return React.createElement(Logout_1.Logout, { navigator: this.navigator, cognitoController: this.cognitoController });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoginRouter.prototype, "routes", {
        get: function () {
            var _this = this;
            return [
                React.createElement(react_router_dom_1.Route, { key: "login", path: "/login/:desiredEndpoint?", component: function (props) { return _this.login(props); } }),
                React.createElement(react_router_dom_1.Route, { key: "forgotPassword", path: "/forgot-password", component: function () { return _this.forgotPassword; } }),
                React.createElement(react_router_dom_1.Route, { key: "logout", path: "/logout", component: function () { return _this.logout; } }),
                React.createElement(react_router_dom_1.Route, { key: "register", path: "/register", component: function () { return _this.register; } })
            ];
        },
        enumerable: true,
        configurable: true
    });
    return LoginRouter;
}());
exports.LoginRouter = LoginRouter;
//# sourceMappingURL=LoginRouter.js.map