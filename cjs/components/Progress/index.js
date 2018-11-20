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
var setSize_1 = __importDefault(require("../../utils/setSize"));
var Wrapper = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: block;\n  width: 100%;\n  border-radius: 4px;\n  background-color: ", ";\n\n  ", "\n  ", "\n\n  & > div {\n    height: 100%;\n    border-radius: 4px;\n    ", "\n    background-color: ", ";\n\n    will-change: width;\n\n    transition-property: width;\n    transition-duration: 350ms;\n    transition-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n"], ["\n  display: block;\n  width: 100%;\n  border-radius: 4px;\n  background-color: ", ";\n\n  ", "\n  ", "\n\n  & > div {\n    height: 100%;\n    border-radius: 4px;\n    ", "\n    background-color: ", ";\n\n    will-change: width;\n\n    transition-property: width;\n    transition-duration: 350ms;\n    transition-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.background;
}, function (_a) {
    var size = _a.size;
    return setSize_1.default('height', size);
}, function (_a) {
    var size = _a.size, height = _a.height;
    return !size && height ? "height: " + height + ";" : '';
}, function (_a) {
    var value = _a.value, max = _a.max;
    return (value === max) ? '' : 'border-bottom-right-radius: 0; border-top-right-radius: 0;';
}, function (_a) {
    var color = _a.color, theme = _a.theme;
    return (theme[color] || color);
});
var Progress = /** @class */ (function (_super) {
    __extends(Progress, _super);
    function Progress() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Progress.prototype.render = function () {
        var _a = this.props, value = _a.value, max = _a.max;
        var percent = Math.round((value / max) * 100);
        return (react_1.default.createElement(Wrapper, __assign({}, this.props),
            react_1.default.createElement("div", { role: "progressbar", style: { width: (percent > 100 ? 100 : percent) + "%" } })));
    };
    Progress.defaultProps = {
        color: 'primary',
    };
    return Progress;
}(react_1.PureComponent));
exports.default = Progress;
;
var templateObject_1;
