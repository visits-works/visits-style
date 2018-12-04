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
var disabledColor_1 = __importDefault(require("../../utils/disabledColor"));
exports.default = styled_components_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  text-align: left;\n  color: inherit;\n\n  &:disabled, [disabled] {\n    ", "\n  }\n  &:readonly {\n    ", "\n  }\n"], ["\n  text-align: left;\n  color: inherit;\n\n  &:disabled, [disabled] {\n    ", "\n  }\n  &:readonly {\n    ", "\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return disabledColor_1.default(theme);
}, function (_a) {
    var theme = _a.theme;
    return disabledColor_1.default(theme);
});
var templateObject_1;
