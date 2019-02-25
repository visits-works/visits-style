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
function boxShadow(size, color, amount) {
    var shadowColor = amount ? transparentize_1.default(amount, color) : color;
    return styled_components_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["box-shadow: 0 0 0 ", " ", ";"], ["box-shadow: 0 0 0 ", " ", ";"])), size, shadowColor);
}
exports.default = boxShadow;
var templateObject_1;
