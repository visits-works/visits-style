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
var arrow_1 = __importDefault(require("../../utils/arrow"));
var setSize_1 = __importDefault(require("../../utils/setSize"));
var HelpMessage_1 = __importDefault(require("./HelpMessage"));
var disabledColor_1 = __importDefault(require("../../utils/disabledColor"));
var InputWrapper = styled_components_1.default.span(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  position: relative;\n  display: block;\n\n  select {\n    display: block;\n    cursor: pointer;\n    appearance: none;\n    outline: none;\n    max-width: 100%;\n    width: 100%;\n    height: 100%;\n    background-color: transparent;\n    padding: 0.375em 0.625em;\n    text-align: left;\n    color: inherit;\n\n    ", "\n\n    border: none;\n    ", "\n\n    will-change: box-shadow;\n    transition-property: box-shadow;\n    transition-duration: 150ms;\n    transition-timing-function: ease-in-out;\n\n    &:focus {\n      border-color: ", ";\n      box-shadow: ", ";\n    }\n\n    &::-ms-expand {\n      display: none;\n    }\n    &:-moz-focusring {\n      color: transparent;\n      text-shadow: 0 0 0 #000;\n    }\n\n    &:disabled, [disabled], &:readonly {\n      ", "\n    }\n\n    &:invalid {\n      color: ", ";\n    }\n  }\n\n  &::after {\n    ", "\n    top: 1.25em;\n    right: 0.625em;\n    z-index: 4;\n  }\n\n  ", "\n\n  ", "\n"], ["\n  position: relative;\n  display: block;\n\n  select {\n    display: block;\n    cursor: pointer;\n    appearance: none;\n    outline: none;\n    max-width: 100%;\n    width: 100%;\n    height: 100%;\n    background-color: transparent;\n    padding: 0.375em 0.625em;\n    text-align: left;\n    color: inherit;\n\n    ", "\n\n    border: none;\n    ",
    "\n\n    will-change: box-shadow;\n    transition-property: box-shadow;\n    transition-duration: 150ms;\n    transition-timing-function: ease-in-out;\n\n    &:focus {\n      border-color: ", ";\n      box-shadow: ",
    ";\n    }\n\n    &::-ms-expand {\n      display: none;\n    }\n    &:-moz-focusring {\n      color: transparent;\n      text-shadow: 0 0 0 #000;\n    }\n\n    &:disabled, [disabled], &:readonly {\n      ", "\n    }\n\n    &:invalid {\n      color: ", ";\n    }\n  }\n\n  &::after {\n    ", "\n    top: 1.25em;\n    right: 0.625em;\n    z-index: 4;\n  }\n\n  ",
    "\n\n  ", "\n"])), function (_a) {
    var size = _a.size;
    return setSize_1.default("font-size", size);
}, function (_a) {
    var outline = _a.outline, theme = _a.theme, error = _a.error;
    return outline ? styled_components_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n        border: 1px solid ", ";\n        border-radius: 4px;\n      "], ["\n        border: 1px solid ", ";\n        border-radius: 4px;\n      "])), error ? theme.danger : theme.border) : styled_components_1.css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n        border-bottom: 1px solid ", ";\n        border-radius: 0;\n      "], ["\n        border-bottom: 1px solid ", ";\n        border-radius: 0;\n      "])), error ? theme.danger : theme.border);
}, function (_a) {
    var error = _a.error, theme = _a.theme;
    return error ? theme.danger : theme.primary;
}, function (_a) {
    var theme = _a.theme, outline = _a.outline, error = _a.error;
    return outline ?
        (error ? theme.danger : theme.primary) :
        (error ? theme.danger : theme.primary);
}, function (_a) {
    var theme = _a.theme;
    return disabledColor_1.default(theme);
}, function (_a) {
    var theme = _a.theme;
    return theme.placeholder;
}, function (_a) {
    var theme = _a.theme;
    return arrow_1.default(theme.border);
}, function (_a) {
    var theme = _a.theme, disabled = _a.disabled;
    return disabled
        ? {}
        : styled_components_1.css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    &:hover {\n      select:not(:disabled):not(:focus) {\n        border-color: ", ";\n      }\n\n      &::after {\n        border-color: ", ";\n      }\n    }\n  "], ["\n    &:hover {\n      select:not(:disabled):not(:focus) {\n        border-color: ", ";\n      }\n\n      &::after {\n        border-color: ", ";\n      }\n    }\n  "])), theme.borderHover, theme.borderHover);
}, function (_a) {
    var css = _a.css;
    return css || {};
});
var Select = /** @class */ (function (_super) {
    __extends(Select, _super);
    function Select() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.renderLabel = function (label) {
            if (_this.props.render) {
                return _this.props.render(label);
            }
            return label;
        };
        _this.renderItem = function () {
            return _this.props.options.map(function (item, idx) {
                if (typeof item === 'string') {
                    return (react_1.default.createElement("option", { key: item, value: item }, _this.renderLabel(item)));
                }
                var id = item.id, name = item.name;
                return (react_1.default.createElement("option", { key: id + "_" + idx, value: id }, _this.renderLabel(name)));
            });
        };
        return _this;
    }
    Select.prototype.shouldComponentUpdate = function (props) {
        return (props.options.length !== this.props.options.length ||
            props.value !== this.props.value ||
            props.disabled !== this.props.disabled ||
            props.help !== this.props.help ||
            props.error !== this.props.error);
    };
    Select.prototype.render = function () {
        var _a = this.props, css = _a.css, className = _a.className, inputSize = _a.inputSize, outline = _a.outline, options = _a.options, error = _a.error, help = _a.help, placeholder = _a.placeholder, disabled = _a.disabled, rest = __rest(_a, ["css", "className", "inputSize", "outline", "options", "error", "help", "placeholder", "disabled"]);
        return (react_1.default.createElement(InputWrapper, { className: className, size: inputSize, outline: outline, error: error, disabled: disabled, css: css },
            react_1.default.createElement("select", __assign({}, rest, { disabled: disabled, required: Boolean(placeholder) }),
                placeholder && (react_1.default.createElement("option", { value: "" }, placeholder)),
                this.renderItem()),
            HelpMessage_1.default(help, error)));
    };
    Select.defaultProps = {
        name: null,
        value: '',
        onChange: function () { },
        options: [],
    };
    return Select;
}(react_1.Component));
exports.default = Select;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
