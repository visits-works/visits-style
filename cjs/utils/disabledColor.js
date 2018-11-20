"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = require("styled-components");
var transparentize_1 = __importDefault(require("polished/lib/color/transparentize"));
function disabledColor(theme) {
    var textColor = transparentize_1.default(0.15, theme.textDark);
    var backColor = transparentize_1.default(0.55, theme.border);
    return styled_components_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    pointer-events: none;\n    box-shadow: none;\n    color: ", ";\n    background-color: ", ";\n  "], ["\n    pointer-events: none;\n    box-shadow: none;\n    color: ", ";\n    background-color: ", ";\n  "])), textColor, backColor);
}
exports.default = disabledColor;
var templateObject_1;
