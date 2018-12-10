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
var react_dom_1 = require("react-dom");
var CSSTransition_1 = __importDefault(require("react-transition-group/CSSTransition"));
var styled_components_1 = __importDefault(require("styled-components"));
var Box_1 = __importDefault(require("../Box"));
var Col_1 = __importDefault(require("../Grid/Col"));
var ESC_KEY = 27;
var Wrapper = styled_components_1.default(Col_1.default)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  z-index: 9999;\n  margin: 0;\n  will-change: transform, opacity;\n  transition-property: transform, opacity;\n  transition-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);\n  transition-duration: 200ms;\n\n  &.fade-enter {\n    opacity: 0.01;\n    transform: scale(0.8);\n  }\n  &.fade-enter-active {\n    opacity: 1;\n    transform: scale(1);\n  }\n  &.fade-exit {\n    opacity: 1;\n    transform: scale(1);\n  }\n  &.fade-exit-active {\n    opacity: 0.01;\n    transform: scale(0.8);\n  }\n  ", "\n"], ["\n  z-index: 9999;\n  margin: 0;\n  will-change: transform, opacity;\n  transition-property: transform, opacity;\n  transition-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);\n  transition-duration: 200ms;\n\n  &.fade-enter {\n    opacity: 0.01;\n    transform: scale(0.8);\n  }\n  &.fade-enter-active {\n    opacity: 1;\n    transform: scale(1);\n  }\n  &.fade-exit {\n    opacity: 1;\n    transform: scale(1);\n  }\n  &.fade-exit-active {\n    opacity: 0.01;\n    transform: scale(0.8);\n  }\n  ", "\n"])), function (_a) {
    var css = _a.css;
    return css || '';
});
var Shadow = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  top: 0;\n  ", "\n  background-color: ", ";\n"], ["\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  top: 0;\n  ", "\n  background-color: ", ";\n"])), function (_a) {
    var show = _a.show;
    return show ? '' : 'display: none;';
}, function (_a) {
    var color = _a.color;
    return color;
});
var Modal = /** @class */ (function (_super) {
    __extends(Modal, _super);
    function Modal() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onKeyDown = function (e) {
            if (_this.props.closeOnEsc && e.keyCode === ESC_KEY && _this.props.closeModal) {
                _this.props.closeModal();
            }
        };
        _this.onClickOverlay = function () {
            if (_this.props.closeOnOverlay && _this.props.closeModal) {
                _this.props.closeModal();
            }
        };
        _this.shouldClose = null;
        return _this;
    }
    Modal.prototype.componentWillUnmount = function () {
        if (this.element) {
            document.body.removeChild(this.element);
        }
    };
    Modal.prototype.render = function () {
        if (typeof document !== "undefined" && !this.element) {
            this.element = document.createElement('div');
            document.body.appendChild(this.element);
        }
        if (this.element) {
            var _a = this.props, show = _a.show, size = _a.size, title = _a.title, children = _a.children, footer = _a.footer, color = _a.color, style = _a.style, onClick = _a.onClick, shadowColor = _a.shadowColor, rest = __rest(_a, ["show", "size", "title", "children", "footer", "color", "style", "onClick", "shadowColor"]);
            if (show) {
                this.element.style.cssText =
                    'position: fixed; top: 0; right: 0; left: 0; bottom: 0; z-index: 9997; overflow-y: auto;' +
                        'display: flex; align-items: center; justify-content: center;' +
                        'flex-direction: column; padding: 0.75rem;';
            }
            else {
                this.element.style.cssText = '';
            }
            return react_dom_1.createPortal((react_1.default.createElement(react_1.Fragment, null,
                react_1.default.createElement(CSSTransition_1.default, { classNames: "fade", timeout: 200, in: show, unmountOnExit: true },
                    react_1.default.createElement(Wrapper, __assign({ size: size, role: "document", auto: true }, rest),
                        react_1.default.createElement(Box_1.default, { color: color, role: "dialog" },
                            title ? title : null,
                            children,
                            footer ? footer : null))),
                react_1.default.createElement(Shadow, { onClick: this.onClickOverlay, show: show, color: shadowColor }))), this.element);
        }
        return null;
    };
    Modal.defaultProps = {
        show: false,
        color: 'white',
        size: 6,
        shadowColor: 'rgba(10,10,10,.86)',
    };
    return Modal;
}(react_1.PureComponent));
exports.default = Modal;
var templateObject_1, templateObject_2;
