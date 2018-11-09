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
const Wrapper = styled_1.default.div `
  position: ${({ position }) => position};
  background-color: ${({ background }) => background};
  top: 0;
  left: 0;
  width: 100%;
`;
exports.Bar = styled_1.default.div `
  height: ${({ size }) => size};
  background-color: ${({ color, theme }) => theme[color]};

  will-change: width, opacity;
  z-index: 1000000;

  transition-property: width, opacity;
  transition-duration: ${({ duration }) => duration}ms;
  transition-timing-function: linear;

  &.load-enter {
    width: 0;
  }

  &.load-enter-done {
    width: 85%;
  }

  &.load-exit {
    width: 85%;
  }

  &.load-exit-active {
    width: 100%;
    opacity: 0;
  }
`;
class LoadingBar extends react_1.PureComponent {
    render() {
        return (react_1.default.createElement(Wrapper, Object.assign({}, this.props),
            react_1.default.createElement(CSSTransition_1.default, { classNames: "load", timeout: this.props.duration, in: this.props.loading, unmountOnExit: true },
                react_1.default.createElement(exports.Bar, Object.assign({}, this.props)))));
    }
}
LoadingBar.defaultProps = {
    loading: false,
    color: 'primary',
    position: 'absolute',
    background: 'transparent',
    size: '3px',
    duration: 150,
};
exports.default = LoadingBar;
