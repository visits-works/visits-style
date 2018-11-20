"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = __importDefault(require("styled-components"));
var Code = styled_components_1.default.code(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background-color: ", ";\n  color: ", ";\n  font-size: .875em;\n  font-weight: 400;\n  padding: .25em .5em .25em;\n"], ["\n  background-color: ", ";\n  color: ", ";\n  font-size: .875em;\n  font-weight: 400;\n  padding: .25em .5em .25em;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.background;
}, function (_a) {
    var theme = _a.theme;
    return theme.danger;
});
Code.displayName = 'Code';
exports.default = Code;
var templateObject_1;
