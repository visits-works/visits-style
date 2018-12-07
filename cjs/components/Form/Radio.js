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
var transparentize_1 = __importDefault(require("polished/lib/color/transparentize"));
var styled_components_1 = __importStar(require("styled-components"));
var RadioLabel = styled_components_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  label {\n    cursor: pointer;\n    padding-left: 1.625em;\n    max-width: 100%;\n    width: 100%;\n    line-height: 1.25;\n    margin-right: 0.625rem;\n\n    &:before, &:after {\n      content: \"\";\n      position: absolute;\n    }\n\n    &:after {\n      top: 0.375em;\n      left: 0.375em;\n      width: 0.5em;\n      height: 0.5em;\n      background: ", ";\n      border: none;\n      transform: scale(0);\n      border-radius: 50%;\n\n      will-change: transform;\n      transition: transform 150ms ease-out;\n    }\n\n    &:before {\n      width: 1.25em;\n      height: 1.25em;\n      left:0;\n      top: 0;\n      background: transparent;\n      border: 0.1em solid ", ";\n      border-radius: 50%;\n\n      will-change: background;\n      transition: background 150ms ease-out;\n    }\n  }\n\n  input {\n    display: none;\n\n    &:checked {\n      + label:before {\n        border-color: ", ";\n      }\n      + label:after{\n        transform: scale(1);\n      }\n    }\n\n    &:disabled {\n      + label {\n        color: ", ";\n        &:before {\n          background: ", ";\n          border-color: ", ";\n        }\n      }\n      &:checked + label:after {\n        background: ", ";\n      }\n    }\n  }\n"], ["\n  label {\n    cursor: pointer;\n    padding-left: 1.625em;\n    max-width: 100%;\n    width: 100%;\n    line-height: 1.25;\n    margin-right: 0.625rem;\n\n    &:before, &:after {\n      content: \"\";\n      position: absolute;\n    }\n\n    &:after {\n      top: 0.375em;\n      left: 0.375em;\n      width: 0.5em;\n      height: 0.5em;\n      background: ", ";\n      border: none;\n      transform: scale(0);\n      border-radius: 50%;\n\n      will-change: transform;\n      transition: transform 150ms ease-out;\n    }\n\n    &:before {\n      width: 1.25em;\n      height: 1.25em;\n      left:0;\n      top: 0;\n      background: transparent;\n      border: 0.1em solid ", ";\n      border-radius: 50%;\n\n      will-change: background;\n      transition: background 150ms ease-out;\n    }\n  }\n\n  input {\n    display: none;\n\n    &:checked {\n      + label:before {\n        border-color: ", ";\n      }\n      + label:after{\n        transform: scale(1);\n      }\n    }\n\n    &:disabled {\n      + label {\n        color: ", ";\n        &:before {\n          background: ", ";\n          border-color: ", ";\n        }\n      }\n      &:checked + label:after {\n        background: ", ";\n      }\n    }\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.primary;
}, function (_a) {
    var theme = _a.theme;
    return theme.border;
}, function (_a) {
    var theme = _a.theme;
    return theme.primary;
}, function (_a) {
    var theme = _a.theme;
    return transparentize_1.default(0.25, theme.textDark);
}, function (_a) {
    var theme = _a.theme;
    return transparentize_1.default(0.55, theme.border);
}, function (_a) {
    var theme = _a.theme;
    return theme.border;
}, function (_a) {
    var theme = _a.theme;
    return transparentize_1.default(0.15, theme.textDark);
});
var ButtonLabel = styled_components_1.css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: inline-flex;\n\n  label {\n    cursor: pointer;\n    padding: 0.375em 0.75em;\n    height: 2.25em;\n    border: 1px solid ", ";\n    text-align: center;\n    width: 100%;\n\n    &:hover {\n      border-color: ", ";\n    }\n  }\n\n  input {\n    display: none;\n\n    &:checked + label {\n      z-index: 1;\n      border-color: ", ";\n      background-color: ", ";\n    }\n\n    &:disabled {\n      + label {\n        cursor: default;\n        color: ", ";\n        background-color: ", ";\n        border-color: ", ";\n      }\n\n      &:checked + label {\n        border-color: ", ";\n        background-color: ", ";\n      }\n    }\n  }\n\n  & + & {\n    margin-left: -1px;\n  }\n\n  &:first-child label {\n    border-top-left-radius: 4px;\n    border-bottom-left-radius: 4px;\n  }\n\n  &:last-child label {\n    border-top-right-radius: 4px;\n    border-bottom-right-radius: 4px;\n  }\n"], ["\n  display: inline-flex;\n\n  label {\n    cursor: pointer;\n    padding: 0.375em 0.75em;\n    height: 2.25em;\n    border: 1px solid ", ";\n    text-align: center;\n    width: 100%;\n\n    &:hover {\n      border-color: ", ";\n    }\n  }\n\n  input {\n    display: none;\n\n    &:checked + label {\n      z-index: 1;\n      border-color: ", ";\n      background-color: ", ";\n    }\n\n    &:disabled {\n      + label {\n        cursor: default;\n        color: ", ";\n        background-color: ", ";\n        border-color: ", ";\n      }\n\n      &:checked + label {\n        border-color: ", ";\n        background-color: ", ";\n      }\n    }\n  }\n\n  & + & {\n    margin-left: -1px;\n  }\n\n  &:first-child label {\n    border-top-left-radius: 4px;\n    border-bottom-left-radius: 4px;\n  }\n\n  &:last-child label {\n    border-top-right-radius: 4px;\n    border-bottom-right-radius: 4px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.border;
}, function (_a) {
    var theme = _a.theme;
    return theme.borderHover;
}, function (_a) {
    var theme = _a.theme;
    return theme.primary;
}, function (_a) {
    var theme = _a.theme;
    return transparentize_1.default(0.55, theme.primary);
}, function (_a) {
    var theme = _a.theme;
    return transparentize_1.default(0.25, theme.textDark);
}, function (_a) {
    var theme = _a.theme;
    return transparentize_1.default(0.55, theme.border);
}, function (_a) {
    var theme = _a.theme;
    return theme.border;
}, function (_a) {
    var theme = _a.theme;
    return theme.textDark;
}, function (_a) {
    var theme = _a.theme;
    return transparentize_1.default(0.65, theme.textDark);
});
var Wrapper = styled_components_1.default.span(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: block;\n  position: relative;\n  width: auto;\n\n  ", "\n"], ["\n  display: block;\n  position: relative;\n  width: auto;\n\n  ", "\n"])), function (_a) {
    var button = _a.button;
    return button ? ButtonLabel : RadioLabel;
});
var Radio = /** @class */ (function (_super) {
    __extends(Radio, _super);
    function Radio() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.id = "radio_" + _this.props.name + ":" + _this.props.value;
        return _this;
    }
    Radio.prototype.shouldComponentUpdate = function (props) {
        return props.checked !== this.props.checked;
    };
    Radio.prototype.render = function () {
        var _a = this.props, className = _a.className, children = _a.children, button = _a.button, color = _a.color, style = _a.style, rest = __rest(_a, ["className", "children", "button", "color", "style"]);
        return (react_1.default.createElement(Wrapper, { className: className, button: button, color: color, style: style },
            react_1.default.createElement("input", __assign({ id: this.id, type: "radio" }, rest)),
            react_1.default.createElement("label", { htmlFor: this.id }, children)));
    };
    Radio.defaultProps = {
        name: null,
        children: null,
        checked: false,
        button: false,
        onChange: function () { },
    };
    return Radio;
}(react_1.Component));
exports.default = Radio;
var templateObject_1, templateObject_2, templateObject_3;
