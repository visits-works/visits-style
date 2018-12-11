"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
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
var media_1 = require("../../utils/media");
function setColor(_a) {
    var color = _a.color, theme = _a.theme;
    if (!color)
        return '';
    var target = theme[color] || color;
    var invertColor = findColorInvert_1.default(theme, target);
    return "background-color: " + target + "; color: " + invertColor + ";";
}
function setSize(_a) {
    var size = _a.size, theme = _a.theme;
    if (!size || size === 'small')
        return '';
    switch (size) {
        case 'medium':
            return media_1.mediaDesktop(templateObject_1 || (templateObject_1 = __makeTemplateObject(["padding-bottom: 9rem; padding-top: 9rem;"], ["padding-bottom: 9rem; padding-top: 9rem;"])));
        case 'large':
            return media_1.mediaDesktop(templateObject_2 || (templateObject_2 = __makeTemplateObject(["padding-bottom: 18rem; padding-top: 18rem;"], ["padding-bottom: 18rem; padding-top: 18rem;"])));
        case 'full':
            return styled_components_1.css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n        min-height: 100vh;\n\n        ", " {\n          align-items: center;\n          display: flex;\n        }\n      "], ["\n        min-height: 100vh;\n\n        ", " {\n          align-items: center;\n          display: flex;\n        }\n      "])), Body);
        default:
            return '';
    }
}
var Body = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  flex-grow: 1;\n  flex-shrink: 0;\n  padding: 3rem 1.5rem;\n\n  ", "\n\n  h1 {\n    font-size: 2rem;\n    font-weight: 600;\n    line-height: 1.125;\n\n    &:not(:last-child) {\n      margin-bottom: 1.5rem;\n    }\n  }\n\n  h2 {\n    font-size: 1.25rem;\n    font-weight: 400;\n    line-height: 1.25;\n  }\n\n  h1+h2 {\n    margin-top: -1.25rem;\n  }\n"], ["\n  flex-grow: 1;\n  flex-shrink: 0;\n  padding: 3rem 1.5rem;\n\n  ", "\n\n  h1 {\n    font-size: 2rem;\n    font-weight: 600;\n    line-height: 1.125;\n\n    &:not(:last-child) {\n      margin-bottom: 1.5rem;\n    }\n  }\n\n  h2 {\n    font-size: 1.25rem;\n    font-weight: 400;\n    line-height: 1.25;\n  }\n\n  h1+h2 {\n    margin-top: -1.25rem;\n  }\n"])), function (_a) {
    var center = _a.center;
    return center ? 'text-align: center;' : '';
});
var Wrapper = styled_components_1.default.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  align-items: stretch;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  ", "\n  ", "\n\n  header {\n    background-color: inherit;\n    color: inherit;\n  }\n\n  header+", " {\n    margin-top: 3.25rem;\n    margin-bottom: 3.25rem;\n  }\n"], ["\n  align-items: stretch;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  ", "\n  ", "\n\n  header {\n    background-color: inherit;\n    color: inherit;\n  }\n\n  header+", " {\n    margin-top: 3.25rem;\n    margin-bottom: 3.25rem;\n  }\n"])), setColor, setSize, Body);
function Hero(_a) {
    var children = _a.children, color = _a.color, size = _a.size, center = _a.center, header = _a.header;
    return (react_1.default.createElement(Wrapper, { color: color, size: size },
        header,
        react_1.default.createElement(Body, { center: center },
            react_1.default.createElement(Container_1.default, null, children))));
}
exports.default = Hero;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
