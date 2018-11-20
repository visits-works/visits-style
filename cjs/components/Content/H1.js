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
var H1 = styled_components_1.default.h1(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  font-size: 2em;\n  margin-bottom: 0.5em;\n  padding-left: 1rem;\n\n  border-left: 1rem solid;\n  border-bottom: 1px solid;\n  border-color: ", ";\n"], ["\n  font-size: 2em;\n  margin-bottom: 0.5em;\n  padding-left: 1rem;\n\n  border-left: 1rem solid;\n  border-bottom: 1px solid;\n  border-color: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.border;
});
H1.displayName = 'H1';
exports.default = H1;
var templateObject_1;
