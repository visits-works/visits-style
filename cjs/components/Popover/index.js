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
const styled_1 = __importDefault(require("../../styled"));
const CSSTransition_1 = __importDefault(require("react-transition-group/CSSTransition"));
const Button_1 = __importDefault(require("../Button"));
const Box_1 = __importDefault(require("../Box"));
const Tooltip = styled_1.default(Box_1.default) `
  position: absolute;
  display: flex;
  clear: both;
  background-color: white;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  z-index: 9999;
  padding: 0.5rem 0;
  width: auto;
  height: auto;
  cursor: default;

  will-change: transform, opacity;
  transform: scale(0.8);
  opacity: 0;

  transition-property: transform, opacity;
  transition-duration: 100ms;
  transition-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);

  &.start {
    transform: scale(1);
    opacity: 1;
  }

  &.end {
    transform: scale(0.8);
    opacity: 0;
  }
`;
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
class Popover extends react_1.Component {
    constructor() {
        super(...arguments);
        this.state = { show: false, style: {} };
        this.openDropdown = () => {
            if (this.state.show)
                return;
            const style = getPosition(this.props.position);
            this.setState({ style, show: true });
        };
        this.closeDropdown = () => {
            if (this.state.show)
                this.setState({ show: false });
        };
    }
    shouldComponentUpdate(props, state) {
        return this.state.show !== state.show || this.props.label !== props.label;
    }
    render() {
        const { label, color, size, children } = this.props;
        const { show, style } = this.state;
        return (react_1.default.createElement(Button_1.default, { color: color || 'text', size: size, onFocus: this.openDropdown, onBlur: this.closeDropdown, style: { display: 'block', position: 'relative' } },
            label,
            react_1.default.createElement(CSSTransition_1.default, { classNames: {
                    appear: 'start',
                    enterDone: 'start',
                    exit: 'end',
                }, in: show, timeout: 150, unmountOnExit: true },
                react_1.default.createElement(Tooltip, { style: style }, children))));
    }
}
Popover.defaultProps = {
    position: 'bottom-left',
};
exports.default = Popover;
