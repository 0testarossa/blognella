"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const tagSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true
    },
}, { timestamps: true });
exports.default = mongoose_1.model('Tag', tagSchema);
//# sourceMappingURL=tag.js.map