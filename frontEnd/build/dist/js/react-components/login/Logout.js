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
var Logout = /** @class */ (function (_super) {
    __extends(Logout, _super);
    function Logout() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Logout.prototype.componentWillMount = function () {
        if (this.props.cognitoController.isLoggedIn())
            this.props.cognitoController.attemptLogOut();
    };
    Logout.prototype.render = function () {
        this.props.navigator.navigateTo('/#/login');
        return React.createElement("div", { style: { paddingTop: '75px' } },
            React.createElement(Column_1.Column, { md: 4, mdOffset: 4 }));
    };
    return Logout;
}(React.Component));
exports.Logout = Logout;
//# sourceMappingURL=Logout.js.map