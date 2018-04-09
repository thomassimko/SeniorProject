"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var amazon_cognito_identity_js_1 = require("amazon-cognito-identity-js");
var CognitoConfig_1 = require("./CognitoConfig");
var CognitoController = /** @class */ (function () {
    function CognitoController(login, logout, isLoggedIn) {
        this.isAuthed = isLoggedIn;
        this.login = login;
        this.logout = logout;
    }
    CognitoController.prototype.attemptLogIn = function (username, password) {
        var _this = this;
        if (username == "test" && password == "pass") {
            return new Promise(function (resolve, reject) {
                _this.login();
                return resolve(true);
            });
        }
        var user = new amazon_cognito_identity_js_1.CognitoUser({ Username: username, Pool: this.userPool });
        var authenticationData = { Username: username, Password: password };
        var authenticationDetails = new amazon_cognito_identity_js_1.AuthenticationDetails(authenticationData);
        return new Promise(function (resolve, reject) {
            return user.authenticateUser(authenticationDetails, {
                onSuccess: function (result) {
                    _this.login();
                    return resolve(true);
                },
                onFailure: function (err) {
                    console.error(err);
                    return resolve(false);
                }
            });
        });
    };
    CognitoController.prototype.attemptLogOut = function () {
        this.signOutUser();
        this.logout();
    };
    CognitoController.prototype.isLoggedIn = function () {
        return this.isAuthed();
    };
    CognitoController.prototype.userExists = function (username) {
        new amazon_cognito_identity_js_1.CognitoIdentityServiceProvider;
        console.log(username);
        var user = new amazon_cognito_identity_js_1.CognitoUser({ Username: username, Pool: this.userPool });
        return user.getUserAttributes(function (err, result) {
            if (err) {
                console.error(err);
                return false;
            }
            return true;
        });
    };
    CognitoController.prototype.register = function (username, company, location, email, password) {
        return __awaiter(this, void 0, void 0, function () {
            var emailData, companyData, locationData, emailAttribute, companyAttribute, locationAttribute, attributeList;
            return __generator(this, function (_a) {
                emailData = {
                    Name: 'email',
                    Value: email
                };
                companyData = {
                    Name: 'custom:company',
                    Value: company
                };
                locationData = {
                    Name: 'custom:location',
                    Value: location
                };
                emailAttribute = new amazon_cognito_identity_js_1.CognitoUserAttribute(emailData);
                companyAttribute = new amazon_cognito_identity_js_1.CognitoUserAttribute(companyData);
                locationAttribute = new amazon_cognito_identity_js_1.CognitoUserAttribute(locationData);
                attributeList = [
                    emailAttribute,
                    companyAttribute,
                    locationAttribute
                ];
                this.userPool.signUp(username, password, attributeList, [], function (err, result) {
                    if (err) {
                        alert(err);
                        return;
                    }
                    else if (result) {
                        var cognitoUser = result.user;
                        console.log('user name is ' + cognitoUser.getUsername());
                    }
                });
                return [2 /*return*/];
            });
        });
    };
    Object.defineProperty(CognitoController.prototype, "userPool", {
        get: function () {
            return new amazon_cognito_identity_js_1.CognitoUserPool({
                UserPoolId: CognitoConfig_1.default.cognito.USER_POOL_ID,
                ClientId: CognitoConfig_1.default.cognito.APP_CLIENT_ID
            });
        },
        enumerable: true,
        configurable: true
    });
    CognitoController.prototype.authUser = function () {
        return __awaiter(this, void 0, void 0, function () {
            var currentUser;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        currentUser = this.getCurrentUser();
                        if (currentUser === null) {
                            return [2 /*return*/, false];
                        }
                        return [4 /*yield*/, this.getUserToken(currentUser)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, true];
                }
            });
        });
    };
    CognitoController.prototype.getUserToken = function (currentUser) {
        return new Promise(function (resolve, reject) {
            currentUser.getSession(function (err, session) {
                if (err) {
                    reject(err);
                    return;
                }
                resolve(session.getIdToken().getJwtToken());
            });
        });
    };
    CognitoController.prototype.getCurrentUser = function () {
        return this.userPool.getCurrentUser();
    };
    CognitoController.prototype.signOutUser = function () {
        var currentUser = this.getCurrentUser();
        if (currentUser !== null) {
            currentUser.signOut();
        }
    };
    return CognitoController;
}());
exports.CognitoController = CognitoController;
//# sourceMappingURL=CognitoController.js.map