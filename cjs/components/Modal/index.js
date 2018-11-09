"use strict";
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
const react_1 = __importStar(require("react"));
const react_dom_1 = require("react-dom");
const CSSTransition_1 = __importDefault(require("react-transition-group/CSSTransition"));
const styled_1 = __importDefault(require("../../styled"));
const Box_1 = __importDefault(require("../Box"));
const Col_1 = __importDefault(require("../Grid/Col"));
const ESC_KEY = 27;
const wrapperStyle = {
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
const Wrapper = styled_1.default.div `

  & > ${Col_1.default} {
    transition-property: transform, opacity;
    transition-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);
    transition-duration: 200ms;
  }

  &.fade-enter > ${Col_1.default} {
    opacity: 0.01;
    transform: scale(0.8);
  }
  &.fade-enter-active > ${Col_1.default} {
    opacity: 1;
    transform: scale(1);
  }
  &.fade-exit > ${Col_1.default} {
    opacity: 1;
    transform: scale(1);
  }
  &.fade-exit-active > ${Col_1.default} {
    opacity: 0.01;
    transform: scale(0.8);
  }
`;
const colStyle = {
    zIndex: 9999,
    padding: '1rem',
    margin: 'auto',
};
class Modal extends react_1.PureComponent {
    constructor(props) {
        super(props);
        this.onKeyDown = (e) => {
            if (this.props.closeOnEsc && e.keyCode === ESC_KEY && this.props.closeModal) {
                this.props.closeModal();
            }
        };
        this.onClickOverlay = () => {
            if (this.shouldClose === null) {
                this.shouldClose = true;
            }
            if (this.shouldClose && this.props.closeOnOverlay && this.props.closeModal) {
                this.props.closeModal();
            }
            this.shouldClose = null;
        };
        this.handleContentOnMouse = () => {
            this.shouldClose = false;
        };
        this.getModal = () => {
            const { show, size, title, children, footer, color, style } = this.props;
            return (react_1.default.createElement(CSSTransition_1.default, { classNames: "fade", timeout: 200, in: show, unmountOnExit: true },
                react_1.default.createElement(Wrapper, { style: wrapperStyle, onClick: this.onClickOverlay, "aria-modal": "true" },
                    react_1.default.createElement(Col_1.default, { size: size || 6, role: "dialog", style: colStyle, onMouseUp: this.handleContentOnMouse, onMouseDown: this.handleContentOnMouse, auto: true },
                        react_1.default.createElement(Box_1.default, { color: color },
                            title && (react_1.default.createElement("header", null, title)),
                            react_1.default.createElement("main", { style: style }, children),
                            footer && (react_1.default.createElement("footer", null, footer)))))));
        };
        this.shouldClose = null;
        if (typeof document !== "undefined") {
            this.element = document.createElement('div');
            this.element.id = props.domId || 'modal';
            document.body.appendChild(this.element);
        }
    }
    componentWillUnmount() {
        if (this.props.domId) {
            this.element.remove();
        }
    }
    render() {
        if (typeof document !== "undefined") {
            return react_dom_1.createPortal(this.getModal(), this.element);
        }
        return null;
    }
}
Modal.defaultProps = {
    domId: 'modal',
    show: false,
    color: 'white',
};
exports.default = Modal;
