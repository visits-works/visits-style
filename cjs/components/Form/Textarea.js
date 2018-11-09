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
const boxShadow_1 = __importDefault(require("../../utils/boxShadow"));
const setSize_1 = __importDefault(require("../../utils/setSize"));
const style_1 = __importDefault(require("./style"));
const HelpMessage_1 = __importDefault(require("./HelpMessage"));
const Wrapper = styled_1.default.span `
  display: block;
  position: relative;

  textarea {
    ${style_1.default}
    max-width: 100%;
    width: 100%;
    padding: 0.625em;
    resize: vertical;
    appearance: none;
    overflow: auto;
    outline: none;

    border-radius: 4px;
    border: 1px solid ${({ theme, error }) => error ? theme.danger : theme.border};

    transition-property: box-shadow;
    transition-duration: 0.15s;
    transition-timing-function: ease-in-out;

    ${setSize_1.default('font-size')}

    &:focus {
      border-color: ${({ theme, error }) => error ? theme.danger : theme.primary};
      ${({ theme, error }) => boxShadow_1.default('0.1em', error ? theme.danger : theme.primary)}
    }

    &:disabled {
      resize: none;
    }
  }

  &:hover {
    textarea:not(:disabled):not(:focus) {
      border-color: ${({ theme }) => theme.borderHover};
    }
  }
`;
class Textarea extends react_1.PureComponent {
    render() {
        const { help, error, ...rest } = this.props;
        return (react_1.default.createElement(Wrapper, { error: error },
            react_1.default.createElement("textarea", Object.assign({}, rest)),
            HelpMessage_1.default(help, error)));
    }
}
Textarea.defaultProps = {
    value: '',
    col: 2,
    row: 5,
    onChange: () => { },
};
exports.default = Textarea;
