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
var validatorjs_1 = require("validatorjs");
var React = require("react");
var mobx_react_1 = require("mobx-react");
var mobx_react_form_1 = require("mobx-react-form");
var Register = /** @class */ (function (_super) {
    __extends(Register, _super);
    function Register() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.plugins = { dvr: validatorjs_1.default };
        _this.fields = [{
                name: 'email',
                label: 'Email',
                placeholder: 'Insert Email',
                rules: 'required|email|string|between:5,25',
            }, {
                name: 'password',
                label: 'Password',
                placeholder: 'Insert Password',
                rules: 'required|string|between:5,25',
            }, {
                name: 'passwordConfirm',
                label: 'Password Confirmation',
                placeholder: 'Confirm Password',
                rules: 'required|string|same:password',
            }];
        _this.hooks = {
            onSuccess: function (form) {
                alert('Form is valid! Send the request here.');
                // get field values
                console.log('Form Values!', form.values());
            },
            onError: function (form) {
                alert('Form has errors!');
                // get all form errors
                console.log('All form errors', form.errors());
            }
        };
        _this.form = new mobx_react_form_1.default(_this.fields, __assign({}, _this.plugins, _this.hooks));
        return _this;
    }
    Object.defineProperty(Register.prototype, "reactForm", {
        get: function () {
            return mobx_react_1.observer(function (_a) {
                var form = _a.form;
                return (React.createElement("form", { onSubmit: form.onSubmit },
                    React.createElement("label", { htmlFor: form.$('username').id }, form.$('username').label),
                    React.createElement("input", __assign({}, form.$('username').bind())),
                    React.createElement("p", null, form.$('username').error),
                    React.createElement("button", { type: "submit", onClick: form.onSubmit }, "Submit"),
                    React.createElement("button", { type: "button", onClick: form.onClear }, "Clear"),
                    React.createElement("button", { type: "button", onClick: form.onReset }, "Reset"),
                    React.createElement("p", null, form.error)));
            });
        },
        enumerable: true,
        configurable: true
    });
    Register.prototype.render = function () {
        return this.reactForm(this.form);
    };
    return Register;
}(React.Component));
exports.Register = Register;
//# sourceMappingURL=Register.js.map