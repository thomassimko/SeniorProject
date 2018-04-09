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
var util_1 = require("util");
var parse = require("csv-parse");
var RegistrationTable_1 = require("./RegistrationTable");
var ClimberRegistration_1 = require("./ClimberRegistration");
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            registrations: []
        };
        return _this;
    }
    App.prototype.render = function () {
        var _this = this;
        console.log(this.state);
        return React.createElement("div", { style: { marginLeft: '10px', marginRight: '10px' } },
            React.createElement("div", { style: { textAlign: "right" } },
                React.createElement("label", { className: "btn btn-default" },
                    "Import",
                    React.createElement("input", { className: "hidden", type: "file", accept: ".csv", onChange: function (event) { return _this.handleFileUpload(event); } })),
                React.createElement(ClimberRegistration_1.ClimberRegistration, { onAddNewClimber: function (climber) { return _this.setState({ registrations: _this.state.registrations.concat([climber]) }); } })),
            React.createElement(RegistrationTable_1.RegistrationTable, { registrations: this.state.registrations }));
    };
    App.prototype.handleFileUpload = function (event) {
        var _this = this;
        var file = event.target.files[0];
        if (!util_1.isNullOrUndefined(file)) {
            var reader_1 = new FileReader();
            reader_1.onload = function () {
                parse(reader_1.result, { auto_parse: true, columns: true, auto_parse_date: true }, function (err, output) {
                    if (output != null) {
                        var registrations = output.map(function (registration) {
                            return {
                                firstName: registration["First Name"],
                                lastName: registration["Last Name"],
                                gender: registration["Gender"],
                                address: registration["Home Address 1"],
                                state: registration["Home State"],
                                zip: registration["Home Zip"],
                                phoneNumber: registration["Phone Number"],
                                email: registration["Email"],
                                birthDate: registration["Birth Date"],
                                emergencyContact: {
                                    name: registration["Emergency Contact Name"],
                                    phone: registration["Emergency Contact Phone"]
                                },
                                ccsNumber: registration["CCS number"],
                                signedIn: false
                            };
                        });
                        _this.setState({ registrations: registrations });
                    }
                });
            };
            reader_1.readAsText(file);
        }
    };
    return App;
}(React.Component));
exports.App = App;
//# sourceMappingURL=App.js.map