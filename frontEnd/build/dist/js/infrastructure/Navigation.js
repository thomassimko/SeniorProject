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
var Navigation = /** @class */ (function (_super) {
    __extends(Navigation, _super);
    function Navigation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Navigation.prototype.render = function () {
        return React.createElement("nav", { className: "navbar navbar-default navbar-fixed-top", style: { marginBottom: '100px' } },
            React.createElement("div", { className: "container-fluid" },
                React.createElement("div", { className: "navbar-header" },
                    React.createElement("button", { type: "button", className: "navbar-toggle", "data-toggle": "collapse", "data-target": "#myNavbar" },
                        React.createElement("span", { className: "icon-bar" }),
                        React.createElement("span", { className: "icon-bar" }),
                        React.createElement("span", { className: "icon-bar" })),
                    React.createElement("a", { className: "navbar-brand", href: "/#/" }, "Onsight")),
                React.createElement("div", { className: "collapse navbar-collapse", id: "myNavbar" }, this.getLoggedInMenu())));
    };
    Navigation.prototype.getLoggedInMenu = function () {
        var loggedIn = this.props.cognitoController.isLoggedIn();
        return React.createElement("div", { className: "collapse navbar-collapse", id: "myNavbar" },
            React.createElement("ul", { className: "nav navbar-nav" },
                React.createElement("li", null,
                    React.createElement("a", { href: "/#/about" }, "About")),
                loggedIn ?
                    React.createElement("li", { className: "dropdown" },
                        React.createElement("a", { className: "dropdown-toggle", "data-toggle": "dropdown", href: "/#/" },
                            "Play",
                            React.createElement("span", { className: "caret" })),
                        React.createElement("ul", { className: "dropdown-menu" },
                            React.createElement("li", null,
                                React.createElement("a", { href: "/#/picking" }, "Picking")),
                            React.createElement("li", null,
                                React.createElement("a", { href: "/#/classification" }, "Classification"))))
                    : null),
            loggedIn ?
                React.createElement("ul", { className: "nav navbar-nav navbar-right" },
                    React.createElement("li", { className: "dropdown" },
                        React.createElement("a", { className: "dropdown-toggle", "data-toggle": "dropdown", href: "/#/" },
                            React.createElement("i", { className: "fa fa-user-circle fa-lg" })),
                        React.createElement("ul", { className: "dropdown-menu" },
                            React.createElement("li", null,
                                React.createElement("a", { href: "/#/logout" }, "Logout")))))
                : React.createElement("ul", { className: "nav navbar-nav navbar-right" },
                    React.createElement("li", null,
                        React.createElement("a", { href: "/#/login" }, "Login")),
                    React.createElement("li", null,
                        React.createElement("a", { href: "/#/register" }, "Sign Up"))));
    };
    return Navigation;
}(React.Component));
exports.Navigation = Navigation;
//# sourceMappingURL=Navigation.js.map