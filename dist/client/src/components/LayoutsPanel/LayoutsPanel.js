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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@material-ui/core");
const Button_1 = __importDefault(require("@material-ui/core/Button"));
const react_1 = __importStar(require("react"));
const react_router_dom_1 = require("react-router-dom");
const LayoutsPanel_styled_1 = require("./LayoutsPanel.styled");
const validatorMsg_1 = require("../validators/validatorMsg");
const Layout_1 = require("../../APIRequests/Layout");
const LayoutPanel_data_1 = require("./LayoutPanel.data");
const App_styles_1 = require("../../App.styles");
const LayoutsPanel = () => {
    const [allLayouts, setAllLayouts] = react_1.useState(LayoutPanel_data_1.allLayoutNames);
    const lang = localStorage.getItem("blognellaLang");
    const layout = localStorage.getItem("blognellaTheme") || "default";
    const [anchorEl, setAnchorEl] = react_1.useState(null);
    const [errorMsg, setErrorMsg] = react_1.useState([]);
    const [chosenLayout, setChosenLayout] = react_1.useState({ _id: "", name: "", mainWidth: 500 });
    const marks = [
        {
            value: 560,
            label: lang === "en" ? `Main Post Width ${chosenLayout.mainWidth}px` : "Szerokość Głównego Wpisu",
        },
        {
            value: 670,
            label: lang === "en" ? `About Post Width ${930 - chosenLayout.mainWidth}px` : "Szerokość Sekcji 'O mnie'",
        },
    ];
    const handleMainWidthChange = (event, newValue) => {
        false && event.persist();
        setChosenLayout(Object.assign(Object.assign({}, chosenLayout), { mainWidth: newValue }));
    };
    const fetchAllLayouts = () => {
        Layout_1.getLayouts()
            .then(({ data: { layouts } }) => layouts.length > 0 && setChosenLayout(Object.assign(Object.assign({}, layouts[0]), { mainWidth: Math.round(layouts[0].mainWidth * 9.3) })))
            .catch((err) => console.log(err));
    };
    const onLayoutSave = (event) => {
        event.persist();
        Layout_1.updateLayout(Object.assign(Object.assign({}, chosenLayout), { mainWidth: chosenLayout.mainWidth / 9.3 }))
            .then(({ status }) => {
            if (status !== 403 && status !== 500) {
                setErrorMsg([lang === "en" ? " Saved layout " : " Zapisano układ strony "]);
                setAnchorEl(event.target);
                window.location.reload();
            }
            else {
                setErrorMsg([lang === "en" ? "There are server problems" : "Wystąpiły problemy z serwerem"]);
                setAnchorEl(event.target);
            }
        });
    };
    react_1.useEffect(() => {
        fetchAllLayouts();
        false && setAllLayouts(LayoutPanel_data_1.allLayoutNames);
    }, []);
    const onLayoutClick = (layoutName) => {
        setChosenLayout(Object.assign(Object.assign({}, chosenLayout), { name: layoutName }));
    };
    const getListItems = () => {
        return allLayouts.map((layout) => react_1.default.createElement(core_1.ListItem, { key: layout.name, style: { cursor: "pointer", color: chosenLayout.name === layout.name ? layout.colors[2] : "inherit",
                border: chosenLayout.name === layout.name && layout.name !== "white" ? "1px solid rgba(223, 223, 223, 0.2)"
                    : chosenLayout.name === layout.name ? "1px solid rgba(0, 0, 0, 0.2)" : "unset", borderRadius: "1rem" }, onClick: () => onLayoutClick(layout.name) },
            react_1.default.createElement(core_1.ListItemText, { primary: lang === "en" ? layout.name : layout.plName }),
            react_1.default.createElement(LayoutsPanel_styled_1.StyledLayoutColorsContainer, null,
                react_1.default.createElement("div", { style: { backgroundColor: layout.colors[0], height: "0.66rem" } }),
                react_1.default.createElement("div", { style: { backgroundColor: layout.colors[1], height: "0.66rem" } }),
                react_1.default.createElement("div", { style: { backgroundColor: layout.colors[2], height: "0.66rem" } }))));
    };
    return (react_1.default.createElement(LayoutsPanel_styled_1.StyledLayoutsPanel, { textColor: App_styles_1.theme.text[layout] },
        react_1.default.createElement(LayoutsPanel_styled_1.StyledCenterText, null, lang === "en" ? "Theme Name" : "Nazwa Motywu"),
        react_1.default.createElement(core_1.List, null, getListItems()),
        react_1.default.createElement("div", null,
            react_1.default.createElement(LayoutsPanel_styled_1.StyledCenterText, null, lang === "en" ? "Sections Width" : "Szerokość Sekcji"),
            react_1.default.createElement(core_1.Slider, { "aria-labelledby": "discrete-slider-custom", step: 1, valueLabelDisplay: "auto", marks: marks, min: 500, max: 730, value: chosenLayout.mainWidth, onChange: handleMainWidthChange }),
            react_1.default.createElement(Button_1.default, { variant: "contained", color: "primary", onClick: onLayoutSave }, lang === "en" ? "Save Layout" : "Zapisz Układ Strony"),
            react_1.default.createElement(core_1.Popover, { id: Boolean(anchorEl) ? 'simple-popover' : undefined, open: Boolean(anchorEl), anchorEl: anchorEl, onClose: () => setAnchorEl(null), anchorOrigin: {
                    vertical: 'bottom',
                    horizontal: 'center',
                }, transformOrigin: {
                    vertical: 'top',
                    horizontal: 'center',
                } },
                react_1.default.createElement(core_1.Typography, null, validatorMsg_1.getValidatorMsg(errorMsg))))));
};
exports.default = react_router_dom_1.withRouter(LayoutsPanel);
//# sourceMappingURL=LayoutsPanel.js.map