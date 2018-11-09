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
const CSSTransition_1 = __importDefault(require("react-transition-group/CSSTransition"));
const Box_1 = __importDefault(require("../Box"));
const styled_1 = __importDefault(require("../../styled"));
const TooltipDiv = styled_1.default(Box_1.default) `
  position: absolute;
  clear: both;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  z-index: 9999;
  padding: 0.375rem 0.625rem;
  cursor: default;
  width: auto;
  white-space: pre;
  font-size: 0.85rem;

  transform: scale(0.8);
  opacity: 0;

  will-change: transform, opacity;
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
function getPosition(height, width, position) {
    switch (position) {
        case 'top': {
            return { bottom: `${height}px`, left: '50%', transform: 'translateX(-50%)' };
        }
        case 'left': {
            return { right: `${width}px`, top: '50%', transform: 'translateY(-50%)' };
        }
        case 'right': {
            return { left: `${width}px`, top: '50%', transform: 'translateY(-50%)' };
        }
        default: {
            return { top: `${height}px`, left: '50%', transform: 'translateX(-50%)' };
        }
    }
}
class Tooltip extends react_1.PureComponent {
    constructor() {
        super(...arguments);
        this.state = {
            show: false,
            style: {},
        };
        this.openTooltip = () => {
            if (this.state.show || !this.element.current)
                return;
            const width = this.element.current.offsetWidth + 8;
            const height = this.element.current.offsetHeight + 8;
            const style = getPosition(height, width, this.props.position);
            this.setState({ style, show: true });
        };
        this.closeTooltip = () => {
            if (this.state.show && this.element.current) {
                this.setState({ show: false });
            }
        };
        this.element = react_1.createRef();
    }
    render() {
        const { color, label, children } = this.props;
        const { show, style } = this.state;
        return (react_1.default.createElement("div", { ref: this.element, style: { display: 'inline-block', position: 'relative', ...this.props.style }, onMouseOver: this.openTooltip, onMouseOut: this.closeTooltip },
            children,
            react_1.default.createElement(CSSTransition_1.default, { classNames: {
                    appear: 'start',
                    enterDone: 'start',
                    exit: 'end',
                }, in: show, timeout: 150, unmountOnExit: true },
                react_1.default.createElement(TooltipDiv, { color: color, style: style, borderless: true }, label))));
    }
}
Tooltip.defaultProps = {
    position: 'bottom',
    color: 'dark',
};
exports.default = Tooltip;
