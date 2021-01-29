"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_proxy_middleware_1 = require("http-proxy-middleware");
const exampleProxy = http_proxy_middleware_1.createProxyMiddleware([''], { target: 'http://localhost:4000' });
//const proxy = require('http-proxy-middleware')
module.exports = function (app) {
    // add other server routes to path array
    app.use(exampleProxy);
};
//# sourceMappingURL=setupProxy.js.map