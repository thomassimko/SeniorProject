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
var mdbreact_1 = require("mdbreact");
var CustomModal_1 = require("./bootstrap/CustomModal");
var ClimberRegistration = /** @class */ (function (_super) {
    __extends(ClimberRegistration, _super);
    function ClimberRegistration(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            showNewClimberModal: false
        };
        return _this;
    }
    ClimberRegistration.prototype.render = function () {
        var _this = this;
        return React.createElement("span", null,
            React.createElement("a", { className: "btn btn-default", onClick: function () { return _this.setState({ showNewClimberModal: true }); } }, "New Climber"),
            React.createElement(CustomModal_1.CustomModal, { onHide: function () { }, body: this.registerForm, footer: React.createElement("div", null,
                    React.createElement("a", { className: "btn btn-default", onClick: function () { _this.setState({ showNewClimberModal: false }); } }, "Cancel"),
                    React.createElement("span", null,
                        React.createElement("a", { className: "btn btn-default", onClick: function () { return _this.addNewClimber(); } }, "Save"))), title: "Register New Climber", show: this.state.showNewClimberModal }));
    };
    ClimberRegistration.prototype.addNewClimber = function () {
        this.props.onAddNewClimber(this.state);
        this.setState({ showNewClimberModal: false });
    };
    Object.defineProperty(ClimberRegistration.prototype, "registerForm", {
        get: function () {
            var _this = this;
            return React.createElement("form", null, this.fields.map(function (field) { return _this.getFormField(field); }));
        },
        enumerable: true,
        configurable: true
    });
    ClimberRegistration.prototype.handleChange = function (accessor, e) {
        this.setState((_a = {}, _a[accessor] = e.target.value, _a));
        var _a;
    };
    ClimberRegistration.prototype.getFormField = function (field) {
        var _this = this;
        return React.createElement(mdbreact_1.Input, { key: field.accessor, label: field.label, group: true, type: field.accessor == "email" ? "email" : "text", onChange: function (event) { return _this.handleChange(field.accessor, event); } });
    };
    Object.defineProperty(ClimberRegistration.prototype, "fields", {
        get: function () {
            return [{
                    label: "First Name",
                    accessor: "firstName"
                },
                {
                    label: "Last Name",
                    accessor: "lastName"
                },
                {
                    label: "Gender",
                    accessor: "gender"
                },
                {
                    label: "Email",
                    accessor: "email"
                },
                {
                    label: "Address",
                    accessor: "address"
                },
                {
                    label: "State",
                    accessor: "state"
                },
                {
                    label: "Zip",
                    accessor: "zip"
                }];
        },
        enumerable: true,
        configurable: true
    });
    return ClimberRegistration;
}(React.Component));
exports.ClimberRegistration = ClimberRegistration;
//# sourceMappingURL=ClimberRegistration.js.map