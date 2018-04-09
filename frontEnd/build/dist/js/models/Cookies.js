"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cookies = require('browser-cookies');
var Cookies = /** @class */ (function () {
    function Cookies() {
    }
    Cookies.prototype.get = function (name) {
        return cookies.get(name);
    };
    Cookies.prototype.set = function (name, value, options) {
        cookies.set(name, value);
    };
    Cookies.prototype.erase = function (name) {
        cookies.erase(name);
    };
    return Cookies;
}());
exports.Cookies = Cookies;
//# sourceMappingURL=Cookies.js.map