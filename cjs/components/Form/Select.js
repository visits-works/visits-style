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
var style_1 = __importDefault(require("./style"));
var arrow_1 = __importDefault(require("../../utils/arrow"));
var setSize_1 = __importDefault(require("../../utils/setSize"));
var HelpMessage_1 = __importDefault(require("./HelpMessage"));
var InputWrapper = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n  display: block;\n\n  select {\n    ", "\n    display: block;\n    cursor: pointer;\n    appearance: none;\n    outline: none;\n    max-width: 100%;\n    width: 100%;\n    background-color: transparent;\n    padding: 0.375em 0.625em;\n\n    ", "\n\n    border: none;\n    ", "\n\n    will-change: box-shadow;\n    transition-property: box-shadow;\n    transition-duration: 150ms;\n    transition-timing-function: ease-in-out;\n\n    &:focus {\n      border-color: ", ";\n      ", "\n    }\n\n    &::-ms-expand {\n      display: none;\n    }\n    &:-moz-focusring {\n      color: transparent;\n      text-shadow: 0 0 0 #000;\n    }\n  }\n\n  &::after {\n    ", "\n    top: 1.25em;\n    right: 0.625em;\n    z-index: 4;\n  }\n\n  ", "\n"], ["\n  position: relative;\n  display: block;\n\n  select {\n    ", "\n    display: block;\n    cursor: pointer;\n    appearance: none;\n    outline: none;\n    max-width: 100%;\n    width: 100%;\n    background-color: transparent;\n    padding: 0.375em 0.625em;\n\n    ", "\n\n    border: none;\n    ",
    "\n\n    will-change: box-shadow;\n    transition-property: box-shadow;\n    transition-duration: 150ms;\n    transition-timing-function: ease-in-out;\n\n    &:focus {\n      border-color: ", ";\n      ",
    "\n    }\n\n    &::-ms-expand {\n      display: none;\n    }\n    &:-moz-focusring {\n      color: transparent;\n      text-shadow: 0 0 0 #000;\n    }\n  }\n\n  &::after {\n    ", "\n    top: 1.25em;\n    right: 0.625em;\n    z-index: 4;\n  }\n\n  ",
    "\n"])), style_1.default, function (_a) {
    var size = _a.size;
    return setSize_1.default('font-size', size);
}, function (_a) {
    var outline = _a.outline, theme = _a.theme, error = _a.error;
    return outline ?
        "border: 1px solid " + (error ? theme.danger : theme.border) + "; border-radius: 4px;" :
        "border-bottom: 1px solid " + (error ? theme.danger : theme.border) + "; border-radius: 0;";
}, function (_a) {
    var error = _a.error, theme = _a.theme;
    return (error ? theme.danger : theme.primary);
}, function (_a) {
    var theme = _a.theme, outline = _a.outline, error = _a.error;
    return outline ?
        "box-shadow: 0 0 0 0.1em " + (error ? theme.danger : theme.primary) + ";" :
        "box-shadow: 0 0.1em " + (error ? theme.danger : theme.primary) + ";";
}, function (_a) {
    var theme = _a.theme;
    return arrow_1.default(theme.border);
}, function (_a) {
    var theme = _a.theme, disabled = _a.disabled;
    return disabled ? '' : "\n    &:hover {\n      select:not(:disabled):not(:focus) {\n        border-color: " + theme.borderHover + ";\n      }\n\n      &::after {\n        border-color: " + theme.borderHover + ";\n      }\n    }\n  ";
});
function _renderItem(item) {
    if (typeof item === 'string') {
        return react_1.default.createElement("option", { key: item, value: item }, item);
    }
    else {
        var id = item.id, name_1 = item.name;
        return react_1.default.createElement("option", { key: id, value: id }, name_1);
    }
}
var Select = /** @class */ (function (_super) {
    __extends(Select, _super);
    function Select() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.renderItem = function () {
            // @ts-ignore
            return _this.props.options.map(_renderItem);
        };
        return _this;
    }
    Select.prototype.render = function () {
        var _a = this.props, size = _a.size, outline = _a.outline, options = _a.options, error = _a.error, help = _a.help, placeholder = _a.placeholder, disabled = _a.disabled, rest = __rest(_a, ["size", "outline", "options", "error", "help", "placeholder", "disabled"]);
        return (react_1.default.createElement(InputWrapper, { size: size, outline: outline, error: error, disabled: disabled },
            react_1.default.createElement("select", __assign({}, rest, { disabled: disabled }),
                placeholder && (react_1.default.createElement("option", { disabled: true, selected: true }, placeholder)),
                this.renderItem()),
            HelpMessage_1.default(help, error)));
    };
    Select.defaultProps = {
        name: null,
        onChange: function () { },
        options: [],
    };
    return Select;
}(react_1.PureComponent));
exports.default = Select;
var templateObject_1;
