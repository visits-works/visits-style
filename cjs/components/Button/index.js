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
const styled_1 = __importStar(require("../../styled"));
const darken_1 = __importDefault(require("polished/lib/color/darken"));
const findColorInvert_1 = __importDefault(require("../../utils/findColorInvert"));
const boxShadow_1 = __importDefault(require("../../utils/boxShadow"));
const setSize_1 = __importDefault(require("../../utils/setSize"));
const disabledColor_1 = __importDefault(require("../../utils/disabledColor"));
function setColor({ theme, color, outline, disabled }) {
    if (disabled) {
        return disabledColor_1.default(theme);
    }
    if (!color) {
        return styled_1.css `
      background-color: ${theme.white};
      border-color: ${theme.border};
      color: ${theme.text};

      &:hover {
        border-color: ${theme.borderHover};
      }

      &:active {
        border-color: ${theme.borderActive};
      }
    `;
    }
    if (color === 'text') {
        return styled_1.css `
      background-color: transparent;
      border-color: transparent;
      color: ${theme.text};

      &:hover{
        text-decoration: underline;
      }
    `;
    }
    const target = theme[color] || color;
    const invertColor = findColorInvert_1.default(theme, target);
    if (outline) {
        return styled_1.css `
      background-color: transparent;
      border-color: ${target};
      color: ${target};

      &:hover {
        background-color: ${target};
        color: ${invertColor};
      }

      &:focus {
        ${boxShadow_1.default('0.2rem', target, 0.2)}
      }
    `;
    }
    return styled_1.css `
    background-color: ${target};
    border-color: ${target};
    border-color: transparent;
    color: ${invertColor};
    box-shadow: none;

    &:hover {
      background-color: ${darken_1.default(0.025, target)};
    }

    &:active {
      background-color: ${darken_1.default(0.05, target)};
    }

    &:focus {
      ${boxShadow_1.default('0.2rem', target, 0.2)}
    }
  `;
}
const Button = styled_1.default.button `
  position: relative;
  outline: none;
  appearance: none;
  box-sizing: border-box;
  display: inline-flex;
  text-align: center;
  white-space: nowrap;
  cursor: pointer;
  justify-content: center;
  border: 1px solid transparent;
  border-radius: 4px;
  height: 2.25em;
  padding: 0.375em 0.75em;

  transition-property: background-color, color, box-shadow;
  transition-duration: 150ms;
  transition-timing-function: ease-in-out;

  ${setColor}
  ${({ size }) => setSize_1.default('font-size', size)}
  ${({ full }) => full ? 'width: 100%;' : ''}

  &:not(:last-child) {
    margin-right: 0.5rem;
    margin-bottom: 0.5rem;
  }
`;
Button.displayName = 'Button';
exports.default = Button;
