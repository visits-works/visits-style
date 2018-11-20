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
var Wrapper = styled_components_1.default.label(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: inline-block;\n  cursor: pointer;\n  line-height: 1.25;\n  position: relative;\n\n  input {\n    cursor: pointer;\n    margin-right: 0.5em;\n  }\n\n  input+label {\n\n  }\n\n  &:not(:first-child) {\n    margin-left: 0.5em;\n  }\n"], ["\n  display: inline-block;\n  cursor: pointer;\n  line-height: 1.25;\n  position: relative;\n\n  input {\n    cursor: pointer;\n    margin-right: 0.5em;\n  }\n\n  input+label {\n\n  }\n\n  &:not(:first-child) {\n    margin-left: 0.5em;\n  }\n"])));
var Switch = /** @class */ (function (_super) {
    __extends(Switch, _super);
    function Switch() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.id = "switch_" + _this.props.name;
        return _this;
    }
    Switch.prototype.render = function () {
        var _a = this.props, children = _a.children, rest = __rest(_a, ["children"]);
        return (react_1.default.createElement(Wrapper, null,
            react_1.default.createElement("input", __assign({ id: this.id, type: "checkbox" }, rest)),
            react_1.default.createElement("label", { htmlFor: this.id }, children)));
    };
    Switch.defaultProps = {
        children: null,
        onChange: function () { },
    };
    return Switch;
}(react_1.PureComponent));
exports.default = Switch;
var templateObject_1;
