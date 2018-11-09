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
const React = __importStar(require("react"));
const styled_1 = __importStar(require("../../styled"));
const darken_1 = __importDefault(require("polished/lib/color/darken"));
const findColorInvert_1 = __importDefault(require("../../utils/findColorInvert"));
function getColor(theme, color) {
    return (!color || color === 'light') ? theme.background : theme[color];
}
function setColor({ theme, color, addonColor }) {
    const target = getColor(theme, color);
    const invertColor = findColorInvert_1.default(theme, target);
    const subColor = addonColor ? getColor(theme, addonColor) : darken_1.default(0.05, target);
    return styled_1.css `
    color: ${invertColor};
    background-color: ${target};

    a, span {
      color: ${invertColor};
      background-color: ${subColor};
    }

    a:hover {
      background-color: ${darken_1.default(0.05, subColor)};
    }
  `;
}
const Wrapper = styled_1.default.div `
  display: inline-flex;
  font-size: 0.75rem;
  cursor: default;
  padding: 0 .5rem;
  height: 2em;
  user-select: none;
  border-radius: 3px;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  line-height: 1.5;

  ${setColor}

  &:not(:last-child) {
    margin-right: 0.5rem;
  }

  a, span {
    position: relative;
    display: inline-flex;
    flex-grow: 0;
    flex-shrink: 0;
    min-width: 1.5rem;
    height: 100%;
    margin-right: -0.5rem;
    margin-left: 0.5rem;
    padding: 0 .5rem;
    justify-content: center;
    align-items: center;

    &:last-child {
      border-top-right-radius: 3px;
      border-bottom-right-radius: 3px;
    }

    &:focus {
      outline: none;
    }

    ${props => (props.close ? styled_1.css `
      &:before, &:after {
        background-color: currentColor;
        content: "";
        display: block;
        left: 50%;
        position: absolute;
        top: 50%;
        transform: translateX(-50%) translateY(-50%) rotate(45deg);
        transform-origin: center center;
      }

      &:before {
        height: 1px;
        width: 50%;
      }

      &:after {
        height: 50%;
        width: 1px;
      }

      &:hover {
        opacity: 1;
      }
    ` : '')}
  }
`;
class Tag extends React.PureComponent {
    render() {
        const { children, onClose, ...rest } = this.props;
        return (React.createElement(Wrapper, Object.assign({ close: onClose !== null }, rest),
            children,
            onClose && (React.createElement("a", { tabIndex: 0, role: "link", onClick: onClose }, "\u00A0"))));
    }
}
Tag.defaultProps = {
    children: null,
    onClose: null,
    onClick: null,
    color: null,
};
exports.default = Tag;
