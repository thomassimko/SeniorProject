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
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var NotFound = /** @class */ (function (_super) {
    __extends(NotFound, _super);
    function NotFound() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.notFoundContainerStyle = {
            borderBottomLeftRadius: '10px',
            borderBottomRightRadius: '10px',
            borderTopLeftRadius: '10px',
            borderTopRightRadius: '10px',
            backgroundColor: '#ffffce',
            padding: '20px'
        };
        return _this;
    }
    NotFound.prototype.render = function () {
        return React.createElement("div", { style: __assign({}, this.notFoundContainerStyle, { marginTop: '50px' }) },
            React.createElement("h2", null,
                React.createElement("i", { className: 'fa fa-exclamation-triangle' }),
                "\u00A0Page Not Found"));
    };
    return NotFound;
}(React.Component));
exports.NotFound = NotFound;
//# sourceMappingURL=NotFound.js.map