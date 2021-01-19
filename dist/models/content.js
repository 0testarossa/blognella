"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const contentSchema = new mongoose_1.Schema({
    text: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
}, { timestamps: true });
exports.default = mongoose_1.model('Content', contentSchema);
//# sourceMappingURL=content.js.map