"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const styled_1 = __importStar(require("../../styled"));
const Container_1 = __importDefault(require("../Grid/Container"));
const findColorInvert_1 = __importDefault(require("../../utils/findColorInvert"));
const media_1 = require("../../utils/media");
function setColor({ color, theme }) {
    if (!color)
        return '';
    const target = theme[color] || color;
    const invertColor = findColorInvert_1.default(theme, target);
    return `background-color: ${target}; color: ${invertColor};`;
}
function setSize({ size, theme }) {
    if (!size || size === 'small')
        return '';
    switch (size) {
        case 'medium':
            return media_1.mediaDesktop `padding-bottom: 9rem; padding-top: 9rem;`({ theme });
        case 'large':
            return media_1.mediaDesktop `padding-bottom: 18rem; padding-top: 18rem;`({ theme });
        case 'full':
            return styled_1.css `
        min-height: 100vh;

        ${Body} {
          align-items: center;
          display: flex;
        }
      `;
        default:
            return '';
    }
}
const Body = styled_1.default.div `
  flex-grow: 1;
  flex-shrink: 0;
  padding: 3rem 1.5rem;

  ${({ center }) => center ? 'text-align: center;' : ''}

  h1 {
    font-size: 2rem;
    font-weight: 600;
    line-height: 1.125;

    &:not(:last-child) {
      margin-bottom: 1.5rem;
    }
  }

  h2 {
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 1.25;
  }

  h1+h2 {
    margin-top: -1.25rem;
  }
`;
const Wrapper = styled_1.default.div `
  align-items: stretch;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  ${setColor}
  ${setSize}

  header {
    background-color: inherit;
    color: inherit;
  }

  header+${Body} {
    margin-top: 3.25rem;
    margin-bottom: 3.25rem;
  }
`;
function Hero({ children, color, size, center, header }) {
    return (react_1.default.createElement(Wrapper, { color: color, size: size },
        header,
        react_1.default.createElement(Body, { center: center },
            react_1.default.createElement(Container_1.default, null, children))));
}
exports.default = Hero;
