"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const AddTodo = ({ saveTodo }) => {
    const [formData, setFormData] = react_1.useState();
    const handleForm = (e) => {
        setFormData({
            ...formData,
            [e.currentTarget.id]: e.currentTarget.value,
        });
    };
    console.log(formData);
    return (react_1.default.createElement("form", { className: 'Form', onSubmit: (e) => saveTodo(e, formData) },
        react_1.default.createElement("div", null,
            react_1.default.createElement("div", null,
                react_1.default.createElement("label", { htmlFor: 'name' }, "Name"),
                react_1.default.createElement("input", { onChange: handleForm, type: 'text', id: 'name' })),
            react_1.default.createElement("div", null,
                react_1.default.createElement("label", { htmlFor: 'description' }, "Description"),
                react_1.default.createElement("input", { onChange: handleForm, type: 'text', id: 'description' }))),
        react_1.default.createElement("button", { disabled: formData === undefined ? true : false }, "Add Todo")));
};
exports.default = AddTodo;
//# sourceMappingURL=AddTodo.js.map