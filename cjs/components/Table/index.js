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
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = __importStar(require("styled-components"));
var stripedStyle = styled_components_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  tbody > tr:nth-child(odd) {\n    background-color: rgba(0, 0, 0, 0.02);\n  }\n"], ["\n  tbody > tr:nth-child(odd) {\n    background-color: rgba(0, 0, 0, 0.02);\n  }\n"])));
var hoverStyle = styled_components_1.css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  tbody > tr:hover {\n    background-color: rgba(0, 0, 0, 0.04);\n  }\n"], ["\n  tbody > tr:hover {\n    background-color: rgba(0, 0, 0, 0.04);\n  }\n"])));
var Table = styled_components_1.default.table(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  display: block;\n  ", "\n  max-width: 100%;\n  margin-bottom: 1rem;\n  background-color: transparent;\n\n  -webkit-overflow-scrolling: touch;\n  -ms-overflow-style: -ms-autohiding-scrollbar;\n\n  td, th {\n    vertical-align: top;\n    padding: 0.75rem;\n    ", "\n    border-width: 0 0 1px;\n  }\n\n  th { white-space: nowrap; }\n\n  ", "\n  ", "\n\n  ", "\n"], ["\n  display: block;\n  ", "\n  max-width: 100%;\n  margin-bottom: 1rem;\n  background-color: transparent;\n\n  -webkit-overflow-scrolling: touch;\n  -ms-overflow-style: -ms-autohiding-scrollbar;\n\n  td, th {\n    vertical-align: top;\n    padding: 0.75rem;\n    ",
    "\n    border-width: 0 0 1px;\n  }\n\n  th { white-space: nowrap; }\n\n  ", "\n  ", "\n\n  ",
    "\n"])), function (_a) {
    var full = _a.full;
    return full ? 'width: 100%;' : '';
}, function (_a) {
    var theme = _a.theme, bordered = _a.bordered;
    return bordered ? "\n      border: 1px solid " + theme.border + ";\n    " : "\n      border: 1px solid " + theme.border + ";\n    ";
}, function (_a) {
    var striped = _a.striped;
    return striped ? stripedStyle : '';
}, function (_a) {
    var hover = _a.hover;
    return hover ? hoverStyle : '';
}, function (_a) {
    var headerStyle = _a.headerStyle;
    return headerStyle ? styled_components_1.css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    th {\n      ", "\n    }\n  "], ["\n    th {\n      ", "\n    }\n  "])), headerStyle) : '';
});
exports.default = Table;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
