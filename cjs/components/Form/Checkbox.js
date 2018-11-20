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
var transparentize_1 = __importDefault(require("polished/lib/color/transparentize"));
var styled_components_1 = __importDefault(require("styled-components"));
var Wrapper = styled_components_1.default.span(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: block;\n  position: relative;\n  width: auto;\n\n  label {\n    cursor: pointer;\n    padding-left: 0.625em;\n    max-width: 100%;\n    width: 100%;\n    line-height: 1.25;\n    margin-right: 0.625rem;\n\n    &:before, &:after {\n      content: \"\";\n      position: absolute;\n    }\n\n    &:after {\n      top: 0.25em;\n      left: 0.2em;\n      width: 0.85em;\n      height: 0.5em;\n      transform: rotate(-45deg);\n      border: 0.1em solid transparent;\n      border-top-style: none;\n      border-right-style: none;\n    }\n\n    &:before {\n      width: 1.25em;\n      height: 1.25em;\n      left:0;\n      top: 0;\n      background: transparent;\n      border: 1px solid ", ";\n      border-radius: 4px;\n      cursor: pointer;\n\n      will-change: background;\n      transition: background 150ms ease-out;\n    }\n  }\n\n  input {\n    visibility: hidden;\n\n    &:checked + label {\n      &:before{\n        border-color: ", ";\n        background: ", ";\n      }\n      &:after {\n        border-color: ", ";\n      }\n    }\n\n    &:indeterminate + label {\n      &:before {\n        border-color: ", ";\n        background: ", ";\n      }\n      &:after {\n        border-color: ", ";\n        border-left-style: none;\n      }\n    }\n\n    &:disabled {\n      + label {\n        color: ", ";\n        &:before {\n          background: ", ";\n          border-color: ", ";\n        }\n      }\n      &:checked + label:after {\n        border-color: ", ";\n      }\n    }\n  }\n"], ["\n  display: block;\n  position: relative;\n  width: auto;\n\n  label {\n    cursor: pointer;\n    padding-left: 0.625em;\n    max-width: 100%;\n    width: 100%;\n    line-height: 1.25;\n    margin-right: 0.625rem;\n\n    &:before, &:after {\n      content: \"\";\n      position: absolute;\n    }\n\n    &:after {\n      top: 0.25em;\n      left: 0.2em;\n      width: 0.85em;\n      height: 0.5em;\n      transform: rotate(-45deg);\n      border: 0.1em solid transparent;\n      border-top-style: none;\n      border-right-style: none;\n    }\n\n    &:before {\n      width: 1.25em;\n      height: 1.25em;\n      left:0;\n      top: 0;\n      background: transparent;\n      border: 1px solid ", ";\n      border-radius: 4px;\n      cursor: pointer;\n\n      will-change: background;\n      transition: background 150ms ease-out;\n    }\n  }\n\n  input {\n    visibility: hidden;\n\n    &:checked + label {\n      &:before{\n        border-color: ", ";\n        background: ", ";\n      }\n      &:after {\n        border-color: ", ";\n      }\n    }\n\n    &:indeterminate + label {\n      &:before {\n        border-color: ", ";\n        background: ", ";\n      }\n      &:after {\n        border-color: ", ";\n        border-left-style: none;\n      }\n    }\n\n    &:disabled {\n      + label {\n        color: ", ";\n        &:before {\n          background: ", ";\n          border-color: ", ";\n        }\n      }\n      &:checked + label:after {\n        border-color: ", ";\n      }\n    }\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.border;
}, function (_a) {
    var theme = _a.theme;
    return theme.primary;
}, function (_a) {
    var theme = _a.theme;
    return theme.primary;
}, function (_a) {
    var theme = _a.theme;
    return theme.white;
}, function (_a) {
    var theme = _a.theme;
    return theme.primary;
}, function (_a) {
    var theme = _a.theme;
    return theme.primary;
}, function (_a) {
    var theme = _a.theme;
    return theme.white;
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
var Checkbox = /** @class */ (function (_super) {
    __extends(Checkbox, _super);
    function Checkbox() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.id = "checkbox_" + _this.props.name;
        return _this;
    }
    Checkbox.prototype.render = function () {
        var _a = this.props, children = _a.children, rest = __rest(_a, ["children"]);
        return (react_1.default.createElement(Wrapper, null,
            react_1.default.createElement("input", __assign({ type: "checkbox", id: this.id }, rest)),
            react_1.default.createElement("label", { htmlFor: this.id }, children)));
    };
    Checkbox.defaultProps = {
        name: null,
        children: null,
        checked: false,
        onChange: function () { },
    };
    return Checkbox;
}(react_1.PureComponent));
exports.default = Checkbox;
var templateObject_1;
