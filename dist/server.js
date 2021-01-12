"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
// import todoRoutes from "./routes/index.js"
const path_1 = __importDefault(require("path"));
const body_parser_1 = __importDefault(require("body-parser"));
const routes_1 = __importDefault(require("./routes"));
// const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const mongoose = require('mongoose');
// const path = require('path');
const app = express_1.default();
// parse application/x-www-form-urlencoded
app.use(body_parser_1.default.urlencoded({
    extended: true
}));
// parse application/json
app.use(body_parser_1.default.json());
const PORT = process.env.PORT || 4000;
// const api = require('./routes/index');
// Configure app to use route
app.use(cors_1.default());
app.use(routes_1.default);
// This middleware informs the express application to serve our compiled React files
// if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'staging') {
if (process.env.NODE_ENV === 'production') {
    app.use(express_1.default.static(path_1.default.join(__dirname, 'client/build')));
    app.get('*', function (req, res) {
        res.sendFile(path_1.default.join(__dirname, 'client/build', 'index.js'));
    });
}
;
const uri = `mongodb://kiranella:czeczuga5@towerofbase-shard-00-00.psn5x.mongodb.net:27017,towerofbase-shard-00-01.psn5x.mongodb.net:27017,towerofbase-shard-00-02.psn5x.mongodb.net:27017/blognellaDatabase?ssl=true&replicaSet=towerOfBase-shard-0&authSource=admin&retryWrites=true&w=majority`;
const options = { useNewUrlParser: true, useUnifiedTopology: true };
mongoose_1.default.set("useFindAndModify", false);
mongoose_1.default
    .connect(uri, options)
    .then(() => app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`)))
    .catch(error => {
    throw error;
});
//# sourceMappingURL=server.js.map