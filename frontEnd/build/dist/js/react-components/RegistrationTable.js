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
var react_table_1 = require("react-table");
var RegistrationTable = /** @class */ (function (_super) {
    __extends(RegistrationTable, _super);
    function RegistrationTable() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RegistrationTable.prototype.render = function () {
        return React.createElement(react_table_1.default, { className: "-highlight -striped", data: this.props.registrations, columns: this.columns, getTdProps: function (state, rowInfo, column, instance) {
                return {
                    onClick: function (e, handleOriginal) {
                        console.log(rowInfo);
                    },
                    style: { cursor: 'pointer' }
                };
            }, noDataText: "There are no climbers in the system. Try importing them from a csv file.", filterable: true, defaultPageSize: 10 });
    };
    Object.defineProperty(RegistrationTable.prototype, "columns", {
        get: function () {
            return [{
                    Header: 'Signed In',
                    accessor: 'signedIn',
                    Cell: function (c) { return c.original.signedIn ? React.createElement("i", { className: "fa fa-check" }) : React.createElement("i", { className: "fa fa-times" }); }
                }, {
                    Header: 'First Name',
                    accessor: 'firstName' // String-based value accessors!
                }, {
                    Header: 'Last Name',
                    accessor: 'lastName' // String-based value accessors!
                }, {
                    Header: 'Gender',
                    accessor: 'gender'
                }, {
                    Header: 'Address',
                    accessor: 'address'
                }, {
                    Header: 'State',
                    accessor: 'state'
                }, {
                    Header: 'Zip',
                    accessor: 'zip'
                }, {
                    Header: 'Phone Number',
                    accessor: 'phoneNumber'
                }, {
                    Header: 'Email',
                    accessor: 'email'
                }, {
                    Header: 'CCS Number',
                    accessor: 'ccsNumber'
                }];
        },
        enumerable: true,
        configurable: true
    });
    return RegistrationTable;
}(React.Component));
exports.RegistrationTable = RegistrationTable;
//# sourceMappingURL=RegistrationTable.js.map