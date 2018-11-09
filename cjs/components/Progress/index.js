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
const setSize_1 = __importDefault(require("../../utils/setSize"));
const Wrapper = styled_1.default.div `
  display: block;
  width: 100%;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.background};

  ${({ size }) => setSize_1.default('height', size)}
  ${({ size, height }) => !size && height ? `height: ${height};` : ''}

  & > div {
    height: 100%;
    border-radius: 4px;
    ${({ value, max }) => (value === max) ? '' : 'border-bottom-right-radius: 0; border-top-right-radius: 0;'}
    background-color: ${({ color, theme }) => (theme[color] || color)};

    will-change: width;

    transition-property: width;
    transition-duration: 350ms;
    transition-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);
  }
`;
class Progress extends react_1.PureComponent {
    render() {
        const { value, max } = this.props;
        const percent = Math.round((value / max) * 100);
        return (react_1.default.createElement(Wrapper, Object.assign({}, this.props),
            react_1.default.createElement("div", { role: "progressbar", style: { width: `${percent > 100 ? 100 : percent}%` } })));
    }
}
Progress.defaultProps = {
    color: 'primary',
};
exports.default = Progress;
;
