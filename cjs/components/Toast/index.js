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
var react_dom_1 = require("react-dom");
var CSSTransition_1 = __importDefault(require("react-transition-group/CSSTransition"));
var TransitionGroup_1 = __importDefault(require("react-transition-group/TransitionGroup"));
var styled_components_1 = __importDefault(require("styled-components"));
var Box_1 = __importDefault(require("../Box"));
var Wrapper = styled_components_1.default(Box_1.default)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  padding: 0.375em 0.75em;\n  max-width: 100%;\n  margin-bottom: 1rem;\n  z-index: 9999;\n  width: fit-content;\n\n  transition-property: transform, opacity;\n  transition-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);\n  transition-duration: 250ms;\n\n  &.move-enter {\n    opacity: 0.01;\n    transform: scale(0.8);\n  }\n  &.move-enter-active {\n    opacity: 1;\n    transform: scale(1);\n  }\n  &.move-exit {\n    opacity: 1;\n    transform: scale(1);\n  }\n  &.move-exit-active {\n    opacity: 0.01;\n    transform: scale(0.8);\n  }\n"], ["\n  padding: 0.375em 0.75em;\n  max-width: 100%;\n  margin-bottom: 1rem;\n  z-index: 9999;\n  width: fit-content;\n\n  transition-property: transform, opacity;\n  transition-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);\n  transition-duration: 250ms;\n\n  &.move-enter {\n    opacity: 0.01;\n    transform: scale(0.8);\n  }\n  &.move-enter-active {\n    opacity: 1;\n    transform: scale(1);\n  }\n  &.move-exit {\n    opacity: 1;\n    transform: scale(1);\n  }\n  &.move-exit-active {\n    opacity: 0.01;\n    transform: scale(0.8);\n  }\n"])));
var ToastItem = /** @class */ (function (_super) {
    __extends(ToastItem, _super);
    function ToastItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ToastItem.prototype.componentDidMount = function () {
        if (this.props.duration !== null) {
            setTimeout(this.props.clear, this.props.duration);
        }
    };
    ToastItem.prototype.render = function () {
        var _a = this.props, message = _a.message, color = _a.color;
        return (react_1.default.createElement(Wrapper, { borderless: true, color: color }, message));
    };
    ToastItem.defaultProps = {
        duration: 5000,
    };
    return ToastItem;
}(react_1.PureComponent));
exports.ToastItem = ToastItem;
function setPosition(position, isFixed) {
    // tslint:disable-next-line
    var base = "position: " + (isFixed ? 'fixed' : 'absolute') + "; z-index: 9999; display: flex; flex-direction: column; ";
    switch (position) {
        case 'bottom': {
            return base + " bottom: 1rem; left: 50%; align-item: center; transform: translateX(-50%);";
        }
        case 'bottom-left': {
            return base + " bottom: 1rem; left: 1rem; align-item: flex-start;";
        }
        case 'bottom-right': {
            return base + " bottom: 1rem; right: 1rem; align-item: flex-end;";
        }
        case 'top': {
            return base + " top: 1rem; left: 50%; align-item: center; transform: translateX(-50%);";
        }
        case 'top-left': {
            return base + " top: 1rem; left: 1rem; align-item: flex-start;";
        }
        case 'top-right':
        default: {
            return base + " top: 1rem; right: 1rem; align-item: flex-end;";
        }
    }
}
var ToastContainer = /** @class */ (function (_super) {
    __extends(ToastContainer, _super);
    function ToastContainer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.clear = function (id) { return function () {
            _this.props.clear(id);
        }; };
        _this.renderToast = function () {
            var toasts = _this.props.toasts;
            return (react_1.default.createElement(TransitionGroup_1.default, { component: null }, toasts.map(function (props) { return (react_1.default.createElement(CSSTransition_1.default, { key: props.id, timeout: 250, classNames: "move", unmountOnExit: true },
                react_1.default.createElement(ToastItem, __assign({ key: props.id }, props, { clear: _this.clear(props.id) })))); })));
        };
        return _this;
    }
    ToastContainer.prototype.shouldComponentUpdate = function (props) {
        return props.toasts.length !== this.props.toasts.length ||
            props.position !== this.props.position;
    };
    ToastContainer.prototype.componentDidUpdate = function (props) {
        if (this.element &&
            (props.position !== this.props.position || props.fixed !== this.props.fixed)) {
            this.element.style.cssText = setPosition(this.props.position, this.props.fixed);
        }
    };
    ToastContainer.prototype.componentWillUnmount = function () {
        if (this.element)
            document.body.removeChild(this.element);
    };
    ToastContainer.prototype.render = function () {
        if (typeof document !== 'undefined' && !this.element) {
            this.element = document.createElement('div');
            this.element.style.cssText = setPosition(this.props.position, this.props.fixed);
            document.body.appendChild(this.element);
        }
        if (this.element) {
            return react_dom_1.createPortal(this.renderToast(), this.element);
        }
        return null;
    };
    ToastContainer.defaultProps = {
        toasts: [],
        position: 'top-right',
        fixed: false,
    };
    return ToastContainer;
}(react_1.Component));
exports.default = ToastContainer;
var templateObject_1;
