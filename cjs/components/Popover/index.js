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
var styled_components_1 = __importDefault(require("styled-components"));
var CSSTransition_1 = __importDefault(require("react-transition-group/CSSTransition"));
var Box_1 = __importDefault(require("../Box"));
var Wrapper = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: inline-block;\n  outline: none;\n  color: inherit;\n\n  &:hover {\n    color: inherit;\n    text-decoration: none;\n  }\n\n  ", "\n"], ["\n  display: inline-block;\n  outline: none;\n  color: inherit;\n\n  &:hover {\n    color: inherit;\n    text-decoration: none;\n  }\n\n  ", "\n"])), function (_a) {
    var css = _a.css;
    return css || '';
});
var Tooltip = styled_components_1.default(Box_1.default)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: absolute;\n  display: flex;\n  clear: both;\n  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);\n  z-index: 9999;\n  padding: 0.5rem 0;\n  width: auto;\n  height: auto;\n  cursor: auto;\n\n  will-change: transform, opacity;\n  transform: scale(0.8);\n  opacity: 0;\n\n  transition-property: transform, opacity;\n  transition-duration: 100ms;\n  transition-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);\n\n  &.start {\n    transform: scale(1);\n    opacity: 1;\n  }\n\n  &.end {\n    transform: scale(0.8);\n    opacity: 0;\n  }\n"], ["\n  position: absolute;\n  display: flex;\n  clear: both;\n  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);\n  z-index: 9999;\n  padding: 0.5rem 0;\n  width: auto;\n  height: auto;\n  cursor: auto;\n\n  will-change: transform, opacity;\n  transform: scale(0.8);\n  opacity: 0;\n\n  transition-property: transform, opacity;\n  transition-duration: 100ms;\n  transition-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);\n\n  &.start {\n    transform: scale(1);\n    opacity: 1;\n  }\n\n  &.end {\n    transform: scale(0.8);\n    opacity: 0;\n  }\n"])));
function getPosition(position) {
    switch (position) {
        case 'top-left': {
            return { top: 0, left: 0, transform: 'translateY(-100%)' };
        }
        case 'top-right': {
            return { top: 0, right: 0, transform: 'translateY(-100%)' };
        }
        case 'top': {
            return { top: 0, left: '50%', transform: 'translate(-50%, -100%)' };
        }
        case 'bottom-left': {
            return { bottom: 0, left: 0, transform: 'translateY(100%)' };
        }
        case 'bottom-right': {
            return { bottom: 0, right: 0, transform: 'translateY(100%)' };
        }
        case 'bottom': {
            return { bottom: 0, left: '50%', transform: 'translate(-50%, 100%)' };
        }
        default: {
            return { top: 0, left: 0, transform: 'translateY(100%)' };
        }
    }
}
var Popover = /** @class */ (function (_super) {
    __extends(Popover, _super);
    function Popover() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { show: false, style: {} };
        _this.openDropdown = function () {
            if (_this.state.show)
                return;
            var style = getPosition(_this.props.position);
            _this.setState({ style: style, show: true });
        };
        _this.closeDropdown = function () {
            if (_this.state.show)
                _this.setState({ show: false });
        };
        return _this;
    }
    Popover.prototype.shouldComponentUpdate = function (props, state) {
        return this.state.show !== state.show || this.props.label !== props.label;
    };
    Popover.prototype.render = function () {
        var _a = this.props, label = _a.label, children = _a.children, style = _a.style, css = _a.css, rest = __rest(_a, ["label", "children", "style", "css"]);
        var show = this.state.show;
        var tooltipStyle = __assign({}, style, this.state.style);
        return (react_1.default.createElement(Wrapper, { tabIndex: 0, role: "button", onFocus: this.openDropdown, onBlur: this.closeDropdown, style: { display: 'block', position: 'relative' }, css: css },
            label,
            react_1.default.createElement(CSSTransition_1.default, { classNames: {
                    appear: 'start',
                    enterDone: 'start',
                    exit: 'end',
                }, in: show, timeout: 150, unmountOnExit: true },
                react_1.default.createElement(Tooltip, __assign({ role: "tooltip", style: tooltipStyle }, rest), children))));
    };
    Popover.defaultProps = {
        position: 'bottom-left',
        color: 'white',
        style: {},
    };
    return Popover;
}(react_1.Component));
exports.default = Popover;
var templateObject_1, templateObject_2;