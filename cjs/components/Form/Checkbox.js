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
const transparentize_1 = __importDefault(require("polished/lib/color/transparentize"));
const styled_1 = __importDefault(require("../../styled"));
const Wrapper = styled_1.default.span `
  display: block;
  position: relative;
  width: auto;

  label {
    cursor: pointer;
    padding-left: 0.625em;
    max-width: 100%;
    width: 100%;
    line-height: 1.25;
    margin-right: 0.625rem;

    &:before, &:after {
      content: "";
      position: absolute;
    }

    &:after {
      top: 0.25em;
      left: 0.2em;
      width: 0.85em;
      height: 0.5em;
      transform: rotate(-45deg);
      border: 0.1em solid transparent;
      border-top-style: none;
      border-right-style: none;
    }

    &:before {
      width: 1.25em;
      height: 1.25em;
      left:0;
      top: 0;
      background: transparent;
      border: 1px solid ${({ theme }) => theme.border};
      border-radius: 4px;
      cursor: pointer;

      will-change: background;
      transition: background 150ms ease-out;
    }
  }

  input {
    visibility: hidden;

    &:checked + label {
      &:before{
        border-color: ${({ theme }) => theme.primary};
        background: ${({ theme }) => theme.primary};
      }
      &:after {
        border-color: ${({ theme }) => theme.white};
      }
    }

    &:indeterminate + label {
      &:before {
        border-color: ${({ theme }) => theme.primary};
        background: ${({ theme }) => theme.primary};
      }
      &:after {
        border-color: ${({ theme }) => theme.white};
        border-left-style: none;
      }
    }

    &:disabled {
      + label {
        color: ${({ theme }) => transparentize_1.default(0.25, theme.textDark)};
        &:before {
          background: ${({ theme }) => transparentize_1.default(0.55, theme.border)};
          border-color: ${({ theme }) => theme.border};
        }
      }
      &:checked + label:after {
        border-color: ${({ theme }) => transparentize_1.default(0.15, theme.textDark)};
      }
    }
  }
`;
class Checkbox extends react_1.PureComponent {
    constructor() {
        super(...arguments);
        this.id = `checkbox_${this.props.name}`;
    }
    render() {
        const { children, ...rest } = this.props;
        return (react_1.default.createElement(Wrapper, null,
            react_1.default.createElement("input", Object.assign({ type: "checkbox", id: this.id }, rest)),
            react_1.default.createElement("label", { htmlFor: this.id }, children)));
    }
}
Checkbox.defaultProps = {
    name: null,
    children: null,
    checked: false,
    onChange: () => { },
};
exports.default = Checkbox;
