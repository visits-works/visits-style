"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var styled_components_1 = __importStar(require("styled-components"));
var Container_1 = __importDefault(require("../Grid/Container"));
var findColorInvert_1 = __importDefault(require("../../utils/findColorInvert"));
function setColor(_a) {
    var color = _a.color, theme = _a.theme;
    if (!color)
        return '';
    var target = theme[color] || color;
    var invertColor = findColorInvert_1.default(theme, target);
    return styled_components_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["background-color: ", "; color: ", ";"], ["background-color: ", "; color: ", ";"])), target, invertColor);
}
function setSize(_a) {
    var size = _a.size, theme = _a.theme;
    if (!size || size === 'small')
        return '';
    switch (size) {
        case 'medium':
            return styled_components_1.css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["padding-bottom: 9rem; padding-top: 9rem;"], ["padding-bottom: 9rem; padding-top: 9rem;"])));
        case 'large':
            return styled_components_1.css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["padding-bottom: 18rem; padding-top: 18rem;"], ["padding-bottom: 18rem; padding-top: 18rem;"])));
        case 'full':
            return styled_components_1.css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n        min-height: 100vh;\n\n        ", " {\n          align-items: center;\n          display: flex;\n        }\n      "], ["\n        min-height: 100vh;\n\n        ", " {\n          align-items: center;\n          display: flex;\n        }\n      "])), Body);
        default:
            return '';
    }
}
var Body = styled_components_1.default.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  flex-grow: 1;\n  flex-shrink: 0;\n  padding: 3rem 1.5rem;\n\n  ", "\n\n  h1 {\n    font-size: 2rem;\n    font-weight: 600;\n    line-height: 1.125;\n\n    &:not(:last-child) {\n      margin-bottom: 1.5rem;\n    }\n  }\n\n  h2 {\n    font-size: 1.25rem;\n    font-weight: 400;\n    line-height: 1.25;\n  }\n\n  h1+h2 {\n    margin-top: -1.25rem;\n  }\n"], ["\n  flex-grow: 1;\n  flex-shrink: 0;\n  padding: 3rem 1.5rem;\n\n  ", "\n\n  h1 {\n    font-size: 2rem;\n    font-weight: 600;\n    line-height: 1.125;\n\n    &:not(:last-child) {\n      margin-bottom: 1.5rem;\n    }\n  }\n\n  h2 {\n    font-size: 1.25rem;\n    font-weight: 400;\n    line-height: 1.25;\n  }\n\n  h1+h2 {\n    margin-top: -1.25rem;\n  }\n"])), function (_a) {
    var center = _a.center;
    return center ? 'text-align: center;' : '';
});
var Wrapper = styled_components_1.default.div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  align-items: stretch;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  ", "\n  ", "\n\n  header {\n    background-color: inherit;\n    color: inherit;\n  }\n\n  header+", " {\n    margin-top: 3.25rem;\n    margin-bottom: 3.25rem;\n  }\n"], ["\n  align-items: stretch;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  ", "\n  ", "\n\n  header {\n    background-color: inherit;\n    color: inherit;\n  }\n\n  header+", " {\n    margin-top: 3.25rem;\n    margin-bottom: 3.25rem;\n  }\n"])), setColor, setSize, Body);
function Hero(_a) {
    var children = _a.children, color = _a.color, size = _a.size, center = _a.center, header = _a.header, rest = __rest(_a, ["children", "color", "size", "center", "header"]);
    return (react_1.default.createElement(Wrapper, __assign({ color: color, size: size }, rest),
        header,
        react_1.default.createElement(Body, { center: center },
            react_1.default.createElement(Container_1.default, null, children))));
}
exports.default = Hero;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
