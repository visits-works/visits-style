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
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var styled_components_1 = __importStar(require("styled-components"));
var Wrapper = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: block;\n  &:not(:last-child) {\n    margin-bottom: 0.75rem;\n  }\n  ", "\n\n  ", "\n"], ["\n  display: block;\n  &:not(:last-child) {\n    margin-bottom: 0.75rem;\n  }\n  ",
    "\n\n  ", "\n"])), function (_a) {
    var required = _a.required, theme = _a.theme;
    return required ? styled_components_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    label::after {\n      content: '*';\n      color: ", ";\n      margin-left: 0.325rem;\n    }\n  "], ["\n    label::after {\n      content: '*';\n      color: ", ";\n      margin-left: 0.325rem;\n    }\n  "])), theme.primary) : '';
}, function (_a) {
    var css = _a.css;
    return css || '';
});
var Label = styled_components_1.default.label(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  color: ", ";\n  display: block;\n  font-size: 1rem;\n  margin-bottom: 0.325rem;\n"], ["\n  color: ", ";\n  display: block;\n  font-size: 1rem;\n  margin-bottom: 0.325rem;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.textStrong;
});
var Field = /** @class */ (function (_super) {
    __extends(Field, _super);
    function Field() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Field.prototype.render = function () {
        var _a = this.props, label = _a.label, children = _a.children, rest = __rest(_a, ["label", "children"]);
        return (react_1.default.createElement(Wrapper, __assign({}, rest),
            label && (react_1.default.createElement(Label, null, label)),
            children));
    };
    return Field;
}(react_1.PureComponent));
exports.default = Field;
var templateObject_1, templateObject_2, templateObject_3;
