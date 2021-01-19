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
const tinymce_react_1 = require("@tinymce/tinymce-react");
const TestPage = () => {
    const [data, setData] = react_1.useState('<p>React is really <em>nice</em>!</p>');
    const handleEditorChange = (e) => {
        setData(e.target.getContent());
        console.log('Content was updated:', e.target.getContent());
    };
    return (react_1.default.createElement(tinymce_react_1.Editor, { initialValue: data, init: {
            plugins: 'link image code',
            toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | code'
        }, onChange: (e) => handleEditorChange(e) }));
};
exports.default = TestPage;
//# sourceMappingURL=testPage.js.map