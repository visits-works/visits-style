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
const Wrapper = styled_1.default.div `
  display: block;
  &:not(:last-child) {
    margin-bottom: 0.75rem;
  }
`;
const Label = styled_1.default.label `
  color: ${({ theme }) => theme.textStrong};
  display: block;
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 0.325rem;
`;
class Field extends react_1.PureComponent {
    render() {
        const { label, children, style } = this.props;
        return (react_1.default.createElement(Wrapper, { style: style },
            label && (react_1.default.createElement(Label, null, label)),
            children));
    }
}
exports.default = Field;
