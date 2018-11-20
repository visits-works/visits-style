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
var react_dom_1 = require("react-dom");
var CSSTransition_1 = __importDefault(require("react-transition-group/CSSTransition"));
var styled_components_1 = __importDefault(require("styled-components"));
var Box_1 = __importDefault(require("../Box"));
var Col_1 = __importDefault(require("../Grid/Col"));
var ESC_KEY = 27;
var wrapperStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    zIndex: 9997,
    overflowY: 'scroll',
    backgroundColor: 'rgba(30, 30, 30, 0.9)',
};
var Wrapper = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\n  & > ", " {\n    transition-property: transform, opacity;\n    transition-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);\n    transition-duration: 200ms;\n  }\n\n  &.fade-enter > ", " {\n    opacity: 0.01;\n    transform: scale(0.8);\n  }\n  &.fade-enter-active > ", " {\n    opacity: 1;\n    transform: scale(1);\n  }\n  &.fade-exit > ", " {\n    opacity: 1;\n    transform: scale(1);\n  }\n  &.fade-exit-active > ", " {\n    opacity: 0.01;\n    transform: scale(0.8);\n  }\n"], ["\n\n  & > ", " {\n    transition-property: transform, opacity;\n    transition-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);\n    transition-duration: 200ms;\n  }\n\n  &.fade-enter > ", " {\n    opacity: 0.01;\n    transform: scale(0.8);\n  }\n  &.fade-enter-active > ", " {\n    opacity: 1;\n    transform: scale(1);\n  }\n  &.fade-exit > ", " {\n    opacity: 1;\n    transform: scale(1);\n  }\n  &.fade-exit-active > ", " {\n    opacity: 0.01;\n    transform: scale(0.8);\n  }\n"])), Col_1.default, Col_1.default, Col_1.default, Col_1.default, Col_1.default);
var colStyle = {
    zIndex: 9999,
    padding: '1rem',
    margin: 'auto',
};
var Modal = /** @class */ (function (_super) {
    __extends(Modal, _super);
    function Modal(props) {
        var _this = _super.call(this, props) || this;
        _this.onKeyDown = function (e) {
            if (_this.props.closeOnEsc && e.keyCode === ESC_KEY && _this.props.closeModal) {
                _this.props.closeModal();
            }
        };
        _this.onClickOverlay = function () {
            if (_this.shouldClose === null) {
                _this.shouldClose = true;
            }
            if (_this.shouldClose && _this.props.closeOnOverlay && _this.props.closeModal) {
                _this.props.closeModal();
            }
            _this.shouldClose = null;
        };
        _this.handleContentOnMouse = function () {
            _this.shouldClose = false;
        };
        _this.getModal = function () {
            var _a = _this.props, show = _a.show, size = _a.size, title = _a.title, children = _a.children, footer = _a.footer, color = _a.color, style = _a.style;
            return (react_1.default.createElement(CSSTransition_1.default, { classNames: "fade", timeout: 200, in: show, unmountOnExit: true },
                react_1.default.createElement(Wrapper, { style: wrapperStyle, onClick: _this.onClickOverlay, "aria-modal": "true" },
                    react_1.default.createElement(Col_1.default, { size: size || 6, role: "dialog", style: colStyle, onMouseUp: _this.handleContentOnMouse, onMouseDown: _this.handleContentOnMouse, auto: true },
                        react_1.default.createElement(Box_1.default, { color: color },
                            title && (react_1.default.createElement("header", null, title)),
                            react_1.default.createElement("main", { style: style }, children),
                            footer && (react_1.default.createElement("footer", null, footer)))))));
        };
        _this.shouldClose = null;
        if (typeof document !== "undefined") {
            _this.element = document.createElement('div');
            _this.element.id = props.domId || 'modal';
            document.body.appendChild(_this.element);
        }
        return _this;
    }
    Modal.prototype.componentWillUnmount = function () {
        if (this.props.domId && this.element) {
            document.body.removeChild(this.element);
        }
    };
    Modal.prototype.render = function () {
        if (typeof document !== "undefined") {
            return react_dom_1.createPortal(this.getModal(), this.element);
        }
        return null;
    };
    Modal.defaultProps = {
        domId: 'modal',
        show: false,
        color: 'white',
    };
    return Modal;
}(react_1.PureComponent));
exports.default = Modal;
var templateObject_1;
