"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var map = new Map();
var MockCookies = /** @class */ (function () {
    function MockCookies() {
    }
    MockCookies.prototype.get = function (name) {
        return map.has(name) ? map.get(name) : null;
    };
    MockCookies.prototype.set = function (name, value, options) {
        map.set(name, value);
    };
    MockCookies.prototype.erase = function (name) {
        map.delete(name);
    };
    return MockCookies;
}());
exports.MockCookies = MockCookies;
//# sourceMappingURL=mock-cookies.js.map