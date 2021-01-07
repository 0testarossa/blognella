import { createProxyMiddleware } from 'http-proxy-middleware';

const exampleProxy = createProxyMiddleware([''], { target: 'http://localhost:4000' });

//const proxy = require('http-proxy-middleware')

module.exports = function(app:any) {
    // add other server routes to path array
    app.use(exampleProxy);
} 