"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = require("styled-components");
function Arrow(color, direction) {
    return styled_components_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    position: absolute;\n    border: 3px solid ", ";\n    border-radius: 2px;\n    border-right: 0;\n    border-top: 0;\n    content: \" \";\n    display: block;\n    height: 0.625em;\n    margin-top: -0.625em;\n    pointer-events: none;\n    top: 50%;\n    transform: rotate(-45deg);\n    transform-origin: center;\n    width: 0.625em;\n  "], ["\n    position: absolute;\n    border: 3px solid ", ";\n    border-radius: 2px;\n    border-right: 0;\n    border-top: 0;\n    content: \" \";\n    display: block;\n    height: 0.625em;\n    margin-top: -0.625em;\n    pointer-events: none;\n    top: 50%;\n    transform: rotate(-45deg);\n    transform-origin: center;\n    width: 0.625em;\n  "])), color);
}
exports.default = Arrow;
var templateObject_1;
