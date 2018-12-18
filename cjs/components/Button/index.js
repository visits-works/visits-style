"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = __importStar(require("styled-components"));
var darken_1 = __importDefault(require("polished/lib/color/darken"));
var findColorInvert_1 = __importDefault(require("../../utils/findColorInvert"));
var boxShadow_1 = __importDefault(require("../../utils/boxShadow"));
var setSize_1 = __importDefault(require("../../utils/setSize"));
var disabledColor_1 = __importDefault(require("../../utils/disabledColor"));
function setColor(_a) {
    var theme = _a.theme, color = _a.color, outline = _a.outline, disabled = _a.disabled;
    if (disabled) {
        return disabledColor_1.default(theme);
    }
    if (!color) {
        return styled_components_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      background-color: ", ";\n      border-color: ", ";\n      color: ", ";\n\n      &:hover {\n        border-color: ", ";\n      }\n\n      &:active {\n        border-color: ", ";\n      }\n    "], ["\n      background-color: ", ";\n      border-color: ", ";\n      color: ", ";\n\n      &:hover {\n        border-color: ", ";\n      }\n\n      &:active {\n        border-color: ", ";\n      }\n    "])), theme.white, theme.border, theme.text, theme.borderHover, theme.borderActive);
    }
    if (color === 'text') {
        return styled_components_1.css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n      background-color: transparent;\n      border-color: transparent;\n      color: ", ";\n\n      &:hover{\n        text-decoration: underline;\n      }\n    "], ["\n      background-color: transparent;\n      border-color: transparent;\n      color: ", ";\n\n      &:hover{\n        text-decoration: underline;\n      }\n    "])), theme.text);
    }
    var target = theme[color] || color;
    var invertColor = findColorInvert_1.default(theme, target);
    if (outline) {
        return styled_components_1.css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n      background-color: transparent;\n      border-color: ", ";\n      color: ", ";\n\n      &:hover {\n        background-color: ", ";\n        color: ", ";\n      }\n\n      &:focus {\n        ", "\n      }\n    "], ["\n      background-color: transparent;\n      border-color: ", ";\n      color: ", ";\n\n      &:hover {\n        background-color: ", ";\n        color: ", ";\n      }\n\n      &:focus {\n        ", "\n      }\n    "])), target, target, target, invertColor, boxShadow_1.default('0.2rem', target, 0.2));
    }
    return styled_components_1.css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    background-color: ", ";\n    border-color: transparent;\n    color: ", ";\n    box-shadow: none;\n\n    &:hover {\n      color: ", ";\n      background-color: ", ";\n    }\n\n    &:active {\n      background-color: ", ";\n    }\n\n    &:focus {\n      ", "\n    }\n  "], ["\n    background-color: ", ";\n    border-color: transparent;\n    color: ", ";\n    box-shadow: none;\n\n    &:hover {\n      color: ", ";\n      background-color: ", ";\n    }\n\n    &:active {\n      background-color: ", ";\n    }\n\n    &:focus {\n      ", "\n    }\n  "])), target, invertColor, invertColor, darken_1.default(0.025, target), darken_1.default(0.05, target), boxShadow_1.default('0.2rem', target, 0.2));
}
var Button = styled_components_1.default.button(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  position: relative;\n  outline: none;\n  appearance: none;\n  box-sizing: border-box;\n  display: inline-block;\n  text-align: center;\n  white-space: nowrap;\n  cursor: pointer;\n  justify-content: center;\n  vertical-align: middle;\n  user-select: none;\n  border: 1px solid transparent;\n  border-radius: 4px;\n  padding: 0.375em 0.75em;\n  line-height: 1.5;\n\n  transition-property: background-color, color, box-shadow;\n  transition-duration: 150ms;\n  transition-timing-function: ease-in-out;\n\n  ", "\n  ", "\n  ", "\n"], ["\n  position: relative;\n  outline: none;\n  appearance: none;\n  box-sizing: border-box;\n  display: inline-block;\n  text-align: center;\n  white-space: nowrap;\n  cursor: pointer;\n  justify-content: center;\n  vertical-align: middle;\n  user-select: none;\n  border: 1px solid transparent;\n  border-radius: 4px;\n  padding: 0.375em 0.75em;\n  line-height: 1.5;\n\n  transition-property: background-color, color, box-shadow;\n  transition-duration: 150ms;\n  transition-timing-function: ease-in-out;\n\n  ", "\n  ", "\n  ", "\n"])), setColor, function (_a) {
    var size = _a.size;
    return setSize_1.default('font-size', size);
}, function (_a) {
    var full = _a.full;
    return full ? 'width: 100%;' : '';
});
Button.displayName = 'Button';
exports.default = Button;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
