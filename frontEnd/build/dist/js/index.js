"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ReactDOM = require("react-dom");
var react_router_dom_1 = require("react-router-dom");
var AppRouter_1 = require("./infrastructure/AppRouter");
var Navigator_1 = require("./infrastructure/Navigator");
ReactDOM.render(React.createElement(react_router_dom_1.HashRouter, null,
    React.createElement(AppRouter_1.AppRouter, { navigator: new Navigator_1.Navigator() })), document.getElementById('root'));
//# sourceMappingURL=index.js.map