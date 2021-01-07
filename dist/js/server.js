"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = __importDefault(require("./routes"));
const app = express_1.default();
const bodyParser = require('body-parser');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: true
}));
// parse application/json
app.use(bodyParser.json());
const PORT = process.env.PORT || 4000;
app.use(cors_1.default());
app.use(routes_1.default);
const uri = `mongodb://kiranella:czeczuga5@towerofbase-shard-00-00.psn5x.mongodb.net:27017,towerofbase-shard-00-01.psn5x.mongodb.net:27017,towerofbase-shard-00-02.psn5x.mongodb.net:27017/<dbname>?ssl=true&replicaSet=towerOfBase-shard-0&authSource=admin&retryWrites=true&w=majority`;
const options = { useNewUrlParser: true, useUnifiedTopology: true };
mongoose_1.default.set("useFindAndModify", false);
mongoose_1.default
    .connect(uri, options)
    .then(() => app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`)))
    .catch(error => {
    throw error;
});
