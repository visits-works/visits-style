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
    };
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
var boxShadow_1 = __importDefault(require("../../utils/boxShadow"));
var setSize_1 = __importDefault(require("../../utils/setSize"));
var disabledColor_1 = __importDefault(require("../../utils/disabledColor"));
var HelpMessage_1 = __importDefault(require("./HelpMessage"));
var Wrapper = styled_components_1.default.span(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: block;\n  position: relative;\n\n  textarea {\n    max-width: 100%;\n    width: 100%;\n    height: 100%;\n    padding: 0.625em;\n    resize: vertical;\n    appearance: none;\n    overflow: auto;\n    outline: none;\n    text-align: left;\n    color: inherit;\n\n    border-radius: 4px;\n    border: 1px solid ", ";\n\n    transition-property: box-shadow;\n    transition-duration: 0.15s;\n    transition-timing-function: ease-in-out;\n\n    ", "\n\n    &:focus {\n      border-color: ", ";\n      ", "\n    }\n\n    &:disabled, [disabled], &:readonly {\n      ", "\n    }\n\n    &:disabled, [disabled] {\n      resize: none;\n    }\n\n    &::placeholder {\n      color: ", ";\n    }\n  }\n\n  &:hover {\n    textarea:not(:disabled):not(:focus) {\n      border-color: ", ";\n    }\n  }\n  ", "\n"], ["\n  display: block;\n  position: relative;\n\n  textarea {\n    max-width: 100%;\n    width: 100%;\n    height: 100%;\n    padding: 0.625em;\n    resize: vertical;\n    appearance: none;\n    overflow: auto;\n    outline: none;\n    text-align: left;\n    color: inherit;\n\n    border-radius: 4px;\n    border: 1px solid ", ";\n\n    transition-property: box-shadow;\n    transition-duration: 0.15s;\n    transition-timing-function: ease-in-out;\n\n    ", "\n\n    &:focus {\n      border-color: ", ";\n      ", "\n    }\n\n    &:disabled, [disabled], &:readonly {\n      ", "\n    }\n\n    &:disabled, [disabled] {\n      resize: none;\n    }\n\n    &::placeholder {\n      color: ", ";\n    }\n  }\n\n  &:hover {\n    textarea:not(:disabled):not(:focus) {\n      border-color: ", ";\n    }\n  }\n  ", "\n"])), function (_a) {
    var theme = _a.theme, error = _a.error;
    return error ? theme.danger : theme.border;
}, setSize_1.default('font-size'), function (_a) {
    var theme = _a.theme, error = _a.error;
    return error ? theme.danger : theme.primary;
}, function (_a) {
    var theme = _a.theme, error = _a.error;
    return boxShadow_1.default('0.1em', error ? theme.danger : theme.primary);
}, function (_a) {
    var theme = _a.theme;
    return disabledColor_1.default(theme);
}, function (_a) {
    var theme = _a.theme;
    return theme.placeholder;
}, function (_a) {
    var theme = _a.theme;
    return theme.borderHover;
}, function (_a) {
    var css = _a.css;
    return css || {};
});
var Textarea = /** @class */ (function (_super) {
    __extends(Textarea, _super);
    function Textarea() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Textarea.prototype.shouldComponentUpdate = function (props) {
        return props.value !== this.props.value ||
            props.help !== this.props.help ||
            props.error !== this.props.error ||
            props.disabled !== this.props.disabled ||
            props.readOnly !== this.props.readOnly;
    };
    Textarea.prototype.render = function () {
        var _a = this.props, className = _a.className, help = _a.help, error = _a.error, style = _a.style, css = _a.css, rest = __rest(_a, ["className", "help", "error", "style", "css"]);
        return (react_1.default.createElement(Wrapper, { className: className, error: error, style: style, css: css },
            react_1.default.createElement("textarea", __assign({}, rest)),
            HelpMessage_1.default(help, error)));
    };
    Textarea.defaultProps = {
        value: '',
        col: 2,
        row: 5,
        onChange: function () { },
    };
    return Textarea;
}(react_1.Component));
exports.default = Textarea;
var templateObject_1;
