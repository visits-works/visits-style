"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var utils_1 = require("../../utils");
var style_1 = __importDefault(require("./style"));
var HelpMessage_1 = __importDefault(require("./HelpMessage"));
var Icon = styled_components_1.default.span(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: absolute;\n  top: 0.375em;\n  bottom: 0;\n  z-index: 1;\n  color: ", ";\n  ", "\n\n  svg, img {\n    height: 1em;\n    width: 1em;\n  }\n"], ["\n  position: absolute;\n  top: 0.375em;\n  bottom: 0;\n  z-index: 1;\n  color: ", ";\n  ",
    "\n\n  svg, img {\n    height: 1em;\n    width: 1em;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.border;
}, function (_a) {
    var right = _a.right;
    return right ?
        'right: 0.375em; & ~ input { padding-right: 1.555em !important; }' :
        'left: 0.375em; & ~ input { padding-left: 1.55em !important; }';
});
var Wrapper = styled_components_1.default.span(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: relative;\n  display: block;\n\n  input {\n    ", "\n    max-width: 100%;\n    width: 100%;\n    position: relative;\n    display: block;\n    outline: none;\n    box-shadow: none;\n\n    padding: 0.375em 0.625em;\n    border: none;\n    ", "\n    ", "\n\n    transition-property: box-shadow;\n    transition-duration: 150ms;\n    transition-timing-function: ease-in-out;\n\n    &:focus {\n      border-color: ", ";\n      ", "\n    }\n  }\n\n  &:hover {\n    input:not(:disabled):not(:focus):not(:active) {\n      border-color: ", ";\n    }\n    ", " {\n      color: ", ";\n    }\n  }\n"], ["\n  position: relative;\n  display: block;\n\n  input {\n    ", "\n    max-width: 100%;\n    width: 100%;\n    position: relative;\n    display: block;\n    outline: none;\n    box-shadow: none;\n\n    padding: 0.375em 0.625em;\n    border: none;\n    ",
    "\n    ", "\n\n    transition-property: box-shadow;\n    transition-duration: 150ms;\n    transition-timing-function: ease-in-out;\n\n    &:focus {\n      border-color: ", ";\n      ",
    "\n    }\n  }\n\n  &:hover {\n    input:not(:disabled):not(:focus):not(:active) {\n      border-color: ", ";\n    }\n    ", " {\n      color: ", ";\n    }\n  }\n"])), style_1.default, function (_a) {
    var outline = _a.outline, theme = _a.theme, error = _a.error;
    return outline ?
        "border: 1px solid " + (error ? theme.danger : theme.border) + "; border-radius: 4px;" :
        "border-bottom: 1px solid " + (error ? theme.danger : theme.border) + "; border-radius: 0;";
}, utils_1.setSize('font-size'), function (_a) {
    var error = _a.error, theme = _a.theme;
    return (error ? theme.danger : theme.primary);
}, function (_a) {
    var theme = _a.theme, outline = _a.outline, error = _a.error;
    return outline ?
        "box-shadow: 0 0 0 0.1em " + (error ? theme.danger : theme.primary) + ";" :
        "box-shadow: 0 0.1em " + (error ? theme.danger : theme.primary) + ";";
}, function (_a) {
    var theme = _a.theme;
    return theme.borderHover;
}, Icon, function (_a) {
    var theme = _a.theme;
    return theme.borderHover;
});
var TextInput = /** @class */ (function (_super) {
    __extends(TextInput, _super);
    function TextInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TextInput.prototype.render = function () {
        var _a = this.props, outline = _a.outline, error = _a.error, help = _a.help, leftIcon = _a.leftIcon, rightIcon = _a.rightIcon, rest = __rest(_a, ["outline", "error", "help", "leftIcon", "rightIcon"]);
        return (react_1.default.createElement(Wrapper, { outline: outline, error: error },
            leftIcon && (react_1.default.createElement(Icon, null, leftIcon)),
            rightIcon && (react_1.default.createElement(Icon, { right: true }, rightIcon)),
            react_1.default.createElement("input", __assign({}, rest)),
            HelpMessage_1.default(help, error)));
    };
    TextInput.defaultProps = {
        type: 'text',
        value: '',
        onChange: function () { },
    };
    return TextInput;
}(react_1.PureComponent));
exports.default = TextInput;
var templateObject_1, templateObject_2;
