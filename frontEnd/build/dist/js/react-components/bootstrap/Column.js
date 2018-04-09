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
var Column = /** @class */ (function (_super) {
    __extends(Column, _super);
    function Column() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Column.prototype.render = function () {
        return React.createElement("div", { className: this.convertPropsSizeToClassName() }, this.props.children);
    };
    Column.prototype.convertPropsSizeToClassName = function () {
        return this.mdSettings + " " + this.smSettings + " " + this.lgSettings;
    };
    Object.defineProperty(Column.prototype, "mdSettings", {
        get: function () {
            return (this.props.md ? "col-md-" + this.props.md : '') + " " + (this.props.mdOffset ? "col-md-offset-" + this.props.mdOffset : '');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Column.prototype, "smSettings", {
        get: function () {
            return (this.props.sm ? "col-sm-" + this.props.sm : '') + " " + (this.props.smOffset ? "col-sm-offset-" + this.props.smOffset : '');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Column.prototype, "lgSettings", {
        get: function () {
            return (this.props.lg ? "col-lg-" + this.props.lg : '') + " " + (this.props.lgOffset ? "col-lg-offset-" + this.props.lgOffset : '');
        },
        enumerable: true,
        configurable: true
    });
    return Column;
}(React.Component));
exports.Column = Column;
//# sourceMappingURL=Column.js.map