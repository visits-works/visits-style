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
const utils_1 = require("../../utils");
const style_1 = __importDefault(require("./style"));
const HelpMessage_1 = __importDefault(require("./HelpMessage"));
const Icon = styled_1.default.span `
  position: absolute;
  top: 0.375em;
  bottom: 0;
  z-index: 1;
  color: ${({ theme }) => theme.border};
  ${({ right }) => right ?
    'right: 0.375em; & ~ input { padding-right: 1.555em !important; }' :
    'left: 0.375em; & ~ input { padding-left: 1.55em !important; }'}

  svg, img {
    height: 1em;
    width: 1em;
  }
`;
const Wrapper = styled_1.default.span `
  position: relative;
  display: block;

  input {
    ${style_1.default}
    max-width: 100%;
    width: 100%;
    position: relative;
    display: block;
    outline: none;
    box-shadow: none;

    padding: 0.375em 0.625em;
    border: none;
    ${({ outline, theme, error }) => outline ?
    `border: 1px solid ${error ? theme.danger : theme.border}; border-radius: 4px;` :
    `border-bottom: 1px solid ${error ? theme.danger : theme.border}; border-radius: 0;`}
    ${utils_1.setSize('font-size')}

    transition-property: box-shadow;
    transition-duration: 150ms;
    transition-timing-function: ease-in-out;

    &:focus {
      border-color: ${({ error, theme }) => (error ? theme.danger : theme.primary)};
      ${({ theme, outline, error }) => outline ?
    `box-shadow: 0 0 0 0.1em ${error ? theme.danger : theme.primary};` :
    `box-shadow: 0 0.1em ${error ? theme.danger : theme.primary};`}
    }
  }

  &:hover {
    input:not(:disabled):not(:focus):not(:active) {
      border-color: ${({ theme }) => theme.borderHover};
    }
    ${Icon} {
      color: ${({ theme }) => theme.borderHover};
    }
  }
`;
class TextInput extends react_1.PureComponent {
    render() {
        const { outline, error, help, leftIcon, rightIcon, ...rest } = this.props;
        return (react_1.default.createElement(Wrapper, { outline: outline, error: error },
            leftIcon && (react_1.default.createElement(Icon, null, leftIcon)),
            rightIcon && (react_1.default.createElement(Icon, { right: true }, rightIcon)),
            react_1.default.createElement("input", Object.assign({}, rest)),
            HelpMessage_1.default(help, error)));
    }
}
TextInput.defaultProps = {
    type: 'text',
    value: '',
    onChange: () => { },
};
exports.default = TextInput;
