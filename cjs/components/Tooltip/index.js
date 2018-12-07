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
var CSSTransition_1 = __importDefault(require("react-transition-group/CSSTransition"));
var styled_components_1 = __importDefault(require("styled-components"));
var Wrapper = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n  display: 'inline-block';\n\n  & > div[role=\"tooltip\"] {\n    position: absolute;\n    clear: both;\n    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);\n    z-index: 9999;\n    padding: 0.375rem 0.625rem;\n    cursor: default;\n    width: auto;\n    white-space: pre;\n    font-size: 0.85rem;\n\n    transform: scale(0.8);\n    opacity: 0;\n\n    will-change: transform, opacity;\n    transition-property: transform, opacity;\n    transition-duration: 100ms;\n    transition-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);\n\n    &.start {\n      transform: scale(1);\n      opacity: 1;\n    }\n\n    &.end {\n      transform: scale(0.8);\n      opacity: 0;\n    }\n  }\n  ", "\n"], ["\n  position: relative;\n  display: 'inline-block';\n\n  & > div[role=\"tooltip\"] {\n    position: absolute;\n    clear: both;\n    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);\n    z-index: 9999;\n    padding: 0.375rem 0.625rem;\n    cursor: default;\n    width: auto;\n    white-space: pre;\n    font-size: 0.85rem;\n\n    transform: scale(0.8);\n    opacity: 0;\n\n    will-change: transform, opacity;\n    transition-property: transform, opacity;\n    transition-duration: 100ms;\n    transition-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);\n\n    &.start {\n      transform: scale(1);\n      opacity: 1;\n    }\n\n    &.end {\n      transform: scale(0.8);\n      opacity: 0;\n    }\n  }\n  ", "\n"])), function (_a) {
    var css = _a.css;
    return css || '';
});
function getPosition(height, width, position) {
    switch (position) {
        case 'top': {
            return { bottom: height + "px", left: '50%', transform: 'translateX(-50%)' };
        }
        case 'left': {
            return { right: width + "px", top: '50%', transform: 'translateY(-50%)' };
        }
        case 'right': {
            return { left: width + "px", top: '50%', transform: 'translateY(-50%)' };
        }
        default: {
            return { top: height + "px", left: '50%', transform: 'translateX(-50%)' };
        }
    }
}
var Tooltip = /** @class */ (function (_super) {
    __extends(Tooltip, _super);
    function Tooltip() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            show: false,
            style: {},
        };
        _this.openTooltip = function () {
            if (_this.state.show || !_this.element.current)
                return;
            var width = _this.element.current.offsetWidth + 8;
            var height = _this.element.current.offsetHeight + 8;
            var style = getPosition(height, width, _this.props.position);
            _this.setState({ style: style, show: true });
        };
        _this.closeTooltip = function () {
            if (_this.state.show && _this.element.current) {
                _this.setState({ show: false });
            }
        };
        _this.element = react_1.createRef();
        return _this;
    }
    Tooltip.prototype.render = function () {
        var _a = this.props, label = _a.label, children = _a.children, rest = __rest(_a, ["label", "children"]);
        var _b = this.state, show = _b.show, style = _b.style;
        return (react_1.default.createElement(Wrapper, __assign({ ref: this.element, onMouseOver: this.openTooltip, onMouseOut: this.closeTooltip }, rest),
            children,
            react_1.default.createElement(CSSTransition_1.default, { classNames: {
                    appear: 'start',
                    enterDone: 'start',
                    exit: 'end',
                }, in: show, timeout: 150, unmountOnExit: true },
                react_1.default.createElement("div", { role: "tooltip" }, label))));
    };
    Tooltip.defaultProps = {
        position: 'bottom',
        color: 'dark',
    };
    return Tooltip;
}(react_1.PureComponent));
exports.default = Tooltip;
var templateObject_1;
