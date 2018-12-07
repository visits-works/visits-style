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
var styled_components_1 = __importStar(require("styled-components"));
var darken_1 = __importDefault(require("polished/lib/color/darken"));
var findColorInvert_1 = __importDefault(require("../../utils/findColorInvert"));
function getColor(theme, color) {
    return (!color || color === 'light') ? theme.background : theme[color];
}
function setColor(_a) {
    var theme = _a.theme, color = _a.color, addonColor = _a.addonColor;
    var target = getColor(theme, color);
    var invertColor = findColorInvert_1.default(theme, target);
    var subColor = addonColor ? getColor(theme, addonColor) : darken_1.default(0.05, target);
    return styled_components_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    color: ", ";\n    background-color: ", ";\n\n    a, span {\n      color: ", ";\n      background-color: ", ";\n    }\n\n    a:hover {\n      background-color: ", ";\n    }\n  "], ["\n    color: ", ";\n    background-color: ", ";\n\n    a, span {\n      color: ", ";\n      background-color: ", ";\n    }\n\n    a:hover {\n      background-color: ", ";\n    }\n  "])), invertColor, target, invertColor, subColor, darken_1.default(0.05, subColor));
}
var Wrapper = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: inline-flex;\n  font-size: 0.75rem;\n  cursor: default;\n  padding: 0 .5rem;\n  height: 2em;\n  user-select: none;\n  border-radius: 3px;\n  justify-content: center;\n  align-items: center;\n  white-space: nowrap;\n  line-height: 1.5;\n\n  ", "\n\n  &:not(:last-child) {\n    margin-right: 0.5rem;\n  }\n\n  a, span {\n    position: relative;\n    display: inline-flex;\n    flex-grow: 0;\n    flex-shrink: 0;\n    min-width: 1.5rem;\n    height: 100%;\n    margin-right: -0.5rem;\n    margin-left: 0.5rem;\n    padding: 0 .5rem;\n    justify-content: center;\n    align-items: center;\n\n    &:last-child {\n      border-top-right-radius: 3px;\n      border-bottom-right-radius: 3px;\n    }\n\n    &:focus {\n      outline: none;\n    }\n\n    ", "\n  }\n\n  ", "\n"], ["\n  display: inline-flex;\n  font-size: 0.75rem;\n  cursor: default;\n  padding: 0 .5rem;\n  height: 2em;\n  user-select: none;\n  border-radius: 3px;\n  justify-content: center;\n  align-items: center;\n  white-space: nowrap;\n  line-height: 1.5;\n\n  ", "\n\n  &:not(:last-child) {\n    margin-right: 0.5rem;\n  }\n\n  a, span {\n    position: relative;\n    display: inline-flex;\n    flex-grow: 0;\n    flex-shrink: 0;\n    min-width: 1.5rem;\n    height: 100%;\n    margin-right: -0.5rem;\n    margin-left: 0.5rem;\n    padding: 0 .5rem;\n    justify-content: center;\n    align-items: center;\n\n    &:last-child {\n      border-top-right-radius: 3px;\n      border-bottom-right-radius: 3px;\n    }\n\n    &:focus {\n      outline: none;\n    }\n\n    ",
    "\n  }\n\n  ", "\n"])), setColor, function (props) { return (props.close ? styled_components_1.css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n      &:before, &:after {\n        background-color: currentColor;\n        content: \"\";\n        display: block;\n        left: 50%;\n        position: absolute;\n        top: 50%;\n        transform: translateX(-50%) translateY(-50%) rotate(45deg);\n        transform-origin: center center;\n      }\n\n      &:before {\n        height: 1px;\n        width: 50%;\n      }\n\n      &:after {\n        height: 50%;\n        width: 1px;\n      }\n\n      &:hover {\n        opacity: 1;\n      }\n    "], ["\n      &:before, &:after {\n        background-color: currentColor;\n        content: \"\";\n        display: block;\n        left: 50%;\n        position: absolute;\n        top: 50%;\n        transform: translateX(-50%) translateY(-50%) rotate(45deg);\n        transform-origin: center center;\n      }\n\n      &:before {\n        height: 1px;\n        width: 50%;\n      }\n\n      &:after {\n        height: 50%;\n        width: 1px;\n      }\n\n      &:hover {\n        opacity: 1;\n      }\n    "]))) : ''); }, function (_a) {
    var css = _a.css;
    return css || '';
});
var Tag = /** @class */ (function (_super) {
    __extends(Tag, _super);
    function Tag() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tag.prototype.render = function () {
        var _a = this.props, children = _a.children, onClose = _a.onClose, rest = __rest(_a, ["children", "onClose"]);
        return (react_1.default.createElement(Wrapper, __assign({ close: onClose !== null }, rest),
            children,
            onClose && (react_1.default.createElement("a", { tabIndex: 0, role: "link", onClick: onClose }, "\u00A0"))));
    };
    Tag.defaultProps = {
        children: null,
        onClose: null,
        onClick: null,
        color: null,
    };
    return Tag;
}(react_1.PureComponent));
exports.default = Tag;
var templateObject_1, templateObject_2, templateObject_3;
