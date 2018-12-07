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
function getColor(_a) {
    var theme = _a.theme, color = _a.color;
    var value = (!color || color === 'light') ? theme.background : theme[color];
    return styled_components_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    border-color: ", ";\n    border-right-color: ", ";\n    border-top-color: ", ";\n  "], ["\n    border-color: ", ";\n    border-right-color: ", ";\n    border-top-color: ", ";\n  "])), value, theme.border, theme.border);
}
var spin = styled_components_1.keyframes(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(359deg);\n  }\n"], ["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(359deg);\n  }\n"])));
var Spinner = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: inline-block;\n  width: ", ";\n  height: ", ";\n  margin: 0;\n  padding: 0;\n  position: relative;\n\n  &:after {\n    display: block;\n    top: 0;\n    left: 0;\n    animation: ", " 750ms infinite linear;\n    border: ", " solid;\n    border-radius: 100%;\n    ", "\n    content: \"\";\n    height: 100%;\n    width: 100%;\n    position: absolute;\n  }\n"], ["\n  display: inline-block;\n  width: ", ";\n  height: ", ";\n  margin: 0;\n  padding: 0;\n  position: relative;\n\n  &:after {\n    display: block;\n    top: 0;\n    left: 0;\n    animation: ", " 750ms infinite linear;\n    border: ", " solid;\n    border-radius: 100%;\n    ", "\n    content: \"\";\n    height: 100%;\n    width: 100%;\n    position: absolute;\n  }\n"])), function (_a) {
    var width = _a.width;
    return width ? width : '100%';
}, function (_a) {
    var height = _a.height;
    return height ? height : '100%';
}, spin, function (_a) {
    var borderSize = _a.borderSize;
    return borderSize;
}, getColor);
Spinner.displayName = 'Spinner';
Spinner.defaultProps = {
    borderSize: '2px',
};
exports.default = Spinner;
var templateObject_1, templateObject_2, templateObject_3;
