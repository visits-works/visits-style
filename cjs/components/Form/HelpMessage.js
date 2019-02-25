"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var Message = styled_components_1.default.span(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  font-size: 0.8rem;\n  color: ", ";\n"], ["\n  font-size: 0.8rem;\n  color: ", ";\n"])), function (_a) {
    var error = _a.error, theme = _a.theme;
    return error ? theme.danger : theme.textLight;
});
function HelpMessage(help, error) {
    if (error) {
        return (react_1.default.createElement(Message, { error: true }, error));
    }
    if (help) {
        return (react_1.default.createElement(Message, null, help));
    }
}
exports.default = HelpMessage;
var templateObject_1;
