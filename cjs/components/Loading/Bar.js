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
var CSSTransition_1 = __importDefault(require("react-transition-group/CSSTransition"));
var Wrapper = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: ", ";\n  background-color: ", ";\n  top: 0;\n  left: 0;\n  width: 100%;\n\n  .loading-bar {\n    height: ", ";\n    background-color: ", ";\n\n    will-change: width, opacity;\n    z-index: 1000000;\n\n    transition-property: width, opacity;\n    transition-duration: ", "ms;\n    transition-timing-function: linear;\n\n    &.load-enter {\n      width: 0;\n    }\n\n    &.load-enter-done {\n      width: 85%;\n    }\n\n    &.load-exit {\n      width: 85%;\n    }\n\n    &.load-exit-active {\n      width: 100%;\n      opacity: 0;\n    }\n  }\n\n  ", "\n"], ["\n  position: ", ";\n  background-color: ", ";\n  top: 0;\n  left: 0;\n  width: 100%;\n\n  .loading-bar {\n    height: ", ";\n    background-color: ", ";\n\n    will-change: width, opacity;\n    z-index: 1000000;\n\n    transition-property: width, opacity;\n    transition-duration: ", "ms;\n    transition-timing-function: linear;\n\n    &.load-enter {\n      width: 0;\n    }\n\n    &.load-enter-done {\n      width: 85%;\n    }\n\n    &.load-exit {\n      width: 85%;\n    }\n\n    &.load-exit-active {\n      width: 100%;\n      opacity: 0;\n    }\n  }\n\n  ", "\n"])), function (_a) {
    var position = _a.position;
    return position;
}, function (_a) {
    var background = _a.background;
    return background;
}, function (_a) {
    var size = _a.size;
    return size;
}, function (_a) {
    var color = _a.color, theme = _a.theme;
    return theme[color];
}, function (_a) {
    var duration = _a.duration;
    return duration;
}, function (_a) {
    var css = _a.css;
    return css || '';
});
var LoadingBar = /** @class */ (function (_super) {
    __extends(LoadingBar, _super);
    function LoadingBar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LoadingBar.prototype.render = function () {
        return (react_1.default.createElement(Wrapper, __assign({}, this.props),
            react_1.default.createElement(CSSTransition_1.default, { classNames: "load", timeout: this.props.duration, in: this.props.loading, unmountOnExit: true },
                react_1.default.createElement("div", { className: "loading-bar" }))));
    };
    LoadingBar.defaultProps = {
        loading: false,
        color: 'primary',
        position: 'absolute',
        background: 'transparent',
        size: '3px',
        duration: 150,
    };
    return LoadingBar;
}(react_1.PureComponent));
exports.default = LoadingBar;
var templateObject_1;
