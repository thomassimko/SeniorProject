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
var react_bootstrap_1 = require("react-bootstrap");
var util_1 = require("util");
var CustomModal = /** @class */ (function (_super) {
    __extends(CustomModal, _super);
    function CustomModal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CustomModal.prototype.render = function () {
        var _this = this;
        return React.createElement(react_bootstrap_1.Modal, { onHide: function () { !util_1.isNullOrUndefined(_this.props.onHide) ? _this.props.onHide() : null; }, show: this.props.show },
            !util_1.isNullOrUndefined(this.props.title)
                ? React.createElement(react_bootstrap_1.Modal.Header, null,
                    React.createElement(react_bootstrap_1.Modal.Title, null, this.props.title))
                : null,
            React.createElement(react_bootstrap_1.Modal.Body, null, this.props.body),
            React.createElement(react_bootstrap_1.Modal.Footer, null, this.props.footer));
    };
    return CustomModal;
}(React.Component));
exports.CustomModal = CustomModal;
//# sourceMappingURL=CustomModal.js.map