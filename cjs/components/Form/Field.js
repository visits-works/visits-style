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
var Wrapper = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: block;\n  &:not(:last-child) {\n    margin-bottom: 0.75rem;\n  }\n"], ["\n  display: block;\n  &:not(:last-child) {\n    margin-bottom: 0.75rem;\n  }\n"])));
var Label = styled_components_1.default.label(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  color: ", ";\n  display: block;\n  font-size: 1rem;\n  font-weight: 700;\n  margin-bottom: 0.325rem;\n"], ["\n  color: ", ";\n  display: block;\n  font-size: 1rem;\n  font-weight: 700;\n  margin-bottom: 0.325rem;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.textStrong;
});
var Field = /** @class */ (function (_super) {
    __extends(Field, _super);
    function Field() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Field.prototype.render = function () {
        var _a = this.props, label = _a.label, children = _a.children, style = _a.style;
        return (react_1.default.createElement(Wrapper, { style: style },
            label && (react_1.default.createElement(Label, null, label)),
            children));
    };
    return Field;
}(react_1.PureComponent));
exports.default = Field;
var templateObject_1, templateObject_2;
