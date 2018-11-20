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
var findColorInvert_1 = __importDefault(require("../../utils/findColorInvert"));
var Box = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  ", "\n  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);\n  border-radius: 3px;\n  width: 100%;\n\n  min-width: 0;\n  word-wrap: break-word;\n\n  ", "\n"], ["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  ", "\n  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);\n  border-radius: 3px;\n  width: 100%;\n\n  min-width: 0;\n  word-wrap: break-word;\n\n  ",
    "\n"])), function (_a) {
    var borderless = _a.borderless, theme = _a.theme;
    return borderless ? "" : "border: 1px solid " + theme.border + ";";
}, function (_a) {
    var color = _a.color, theme = _a.theme;
    if (!color)
        return '';
    var target = theme[color] || color;
    var invertColor = findColorInvert_1.default(theme, target);
    return "background-color: " + target + "; color: " + invertColor + ";";
});
Box.displayName = 'Box';
exports.default = Box;
var templateObject_1;
