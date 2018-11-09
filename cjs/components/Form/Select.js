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
const style_1 = __importDefault(require("./style"));
const arrow_1 = __importDefault(require("../../utils/arrow"));
const setSize_1 = __importDefault(require("../../utils/setSize"));
const HelpMessage_1 = __importDefault(require("./HelpMessage"));
const InputWrapper = styled_1.default.div `
  position: relative;
  display: block;

  select {
    ${style_1.default}
    display: block;
    cursor: pointer;
    appearance: none;
    outline: none;
    max-width: 100%;
    width: 100%;
    background-color: transparent;
    padding: 0.375em 0.625em;

    ${({ size }) => setSize_1.default('font-size', size)}

    border: none;
    ${({ outline, theme, error }) => outline ?
    `border: 1px solid ${error ? theme.danger : theme.border}; border-radius: 4px;` :
    `border-bottom: 1px solid ${error ? theme.danger : theme.border}; border-radius: 0;`}

    will-change: box-shadow;
    transition-property: box-shadow;
    transition-duration: 150ms;
    transition-timing-function: ease-in-out;

    &:focus {
      border-color: ${({ error, theme }) => (error ? theme.danger : theme.primary)};
      ${({ theme, outline, error }) => outline ?
    `box-shadow: 0 0 0 0.1em ${error ? theme.danger : theme.primary};` :
    `box-shadow: 0 0.1em ${error ? theme.danger : theme.primary};`}
    }

    &::-ms-expand {
      display: none;
    }
    &:-moz-focusring {
      color: transparent;
      text-shadow: 0 0 0 #000;
    }
  }

  &::after {
    ${({ theme }) => arrow_1.default(theme.border)}
    top: 1.25em;
    right: 0.625em;
    z-index: 4;
  }

  ${({ theme, disabled }) => disabled ? '' : `
    &:hover {
      select:not(:disabled):not(:focus) {
        border-color: ${theme.borderHover};
      }

      &::after {
        border-color: ${theme.borderHover};
      }
    }
  `}
`;
function _renderItem(item) {
    if (typeof item === 'string') {
        return react_1.default.createElement("option", { key: item, value: item }, item);
    }
    else {
        const { id, name } = item;
        return react_1.default.createElement("option", { key: id, value: id }, name);
    }
}
class Select extends react_1.PureComponent {
    constructor() {
        super(...arguments);
        this.renderItem = () => {
            // @ts-ignore
            return this.props.options.map(_renderItem);
        };
    }
    render() {
        const { size, outline, options, error, help, placeholder, disabled, ...rest } = this.props;
        return (react_1.default.createElement(InputWrapper, { size: size, outline: outline, error: error, disabled: disabled },
            react_1.default.createElement("select", Object.assign({}, rest, { disabled: disabled }),
                placeholder && (react_1.default.createElement("option", { disabled: true, selected: true }, placeholder)),
                this.renderItem()),
            HelpMessage_1.default(help, error)));
    }
}
Select.defaultProps = {
    name: null,
    onChange: () => { },
    options: [],
};
exports.default = Select;
