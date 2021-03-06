"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const mongoose_unique_validator_1 = __importDefault(require("mongoose-unique-validator"));
const tagSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
}, { timestamps: true });
exports.default = mongoose_1.model('Tag', tagSchema.plugin(mongoose_unique_validator_1.default));
//# sourceMappingURL=tag.js.map