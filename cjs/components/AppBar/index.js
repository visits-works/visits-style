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
const styled_1 = __importStar(require("../../styled"));
const findColorInvert_1 = __importDefault(require("../../utils/findColorInvert"));
const hambuger_1 = __importDefault(require("../../utils/hambuger"));
const setAlign_1 = __importDefault(require("../../utils/setAlign"));
const media_1 = require("../../utils/media");
function setColor({ color, theme, backdrop }) {
    const backgroundColor = color ? theme[color] : 'transparent';
    const textColor = findColorInvert_1.default(theme, backgroundColor === 'transparent' ? theme.background : backgroundColor);
    if (backdrop) {
        const backColor = transparentize_1.default(0.2, (backgroundColor === 'transparent' ? theme.white : backgroundColor));
        const ua = navigator.userAgent.toLowerCase();
        if (ua.indexOf('safari') > -1 && ua.indexOf('chrome') === -1) {
            return `background-color: ${backColor}; color: ${textColor}; backdrop-filter: blur(8px);`;
        }
        return styled_1.css `
      background-color: ${backColor};
      color: ${textColor};
    `;
    }
    return `background-color: ${backgroundColor}; color: ${textColor};`;
}
const NavBar = styled_1.default.header `
  position: ${({ fixed, sticky }) => (!(sticky || fixed) ? 'relative' : (fixed ? 'fixed' : 'sticky'))};
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: stretch;
  top: -1px;

  min-height: 3.25rem;
  width: 100%;
  z-index: 30;

  ${setColor}

  a { color: inherit; }

  ${media_1.mediaTablet `padding: ${({ fluid }) => fluid ? '0 0.5rem' : '0 3%'};`}
  ${media_1.mediaUntilFullHD `padding: ${({ fluid }) => fluid ? '0 0.75rem' : '0 5%'};`}
`;
const Burger = styled_1.default.button `
  ${hambuger_1.default('3.25rem')}
  display: none;
  margin-left: auto;
  border: none;
  background-color: transparent;
  color: inherit;

  outline: none;

  &:hover{
    background-color: rgba(0, 0, 0, .05);
  }

  ${media_1.mediaMobile ` display: block; `}
`;
const NavContent = styled_1.default.div `
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-basis: auto;
  flex-grow: 1;

  & > ul {
    display: flex;
    flex-direction: row;
    list-style: none;
    flex-grow: 1;
    justify-content: ${setAlign_1.default};

    li {
      padding: 0 0.75rem;
    }
  }

  & > div, & > span, & > form {
    display: flex;
    ${({ color }) => (color ? `color: ${color};` : '')}
  }

  ${media_1.mediaMobile `
    width: 100%;
    flex-direction: column;
    align-items: flex-start;

    padding-bottom: 0.5rem;

    button:not(.active)+& {
      display:none;
    }

    & > ul {
      flex-direction: column;
      width: 100%;
      li {
        padding: .5rem 0;
      }
    }

    & > div, & > span, & > form {
      padding: .5rem 0;
      width: 100%;
    }
  `}
`;
const NavItem = styled_1.default.li `
  text-align: center;

  a {
    display: block;
    padding: .5rem 1rem;
    color: inherit;
    opacity: 1;

    will-change: opacity;
    transition: opacity 200ms cubic-bezier(0.645, 0.045, 0.355, 1);

    &:hover, &.active {
      opacity: 0.65;
    }
  }
`;
class AppBar extends react_1.PureComponent {
    constructor() {
        super(...arguments);
        this.state = { show: false };
        this.toggleMenu = () => {
            this.setState({ show: !this.state.show });
        };
    }
    render() {
        const { color, brand, children, style, fixed, sticky, backdrop, align } = this.props;
        const { show } = this.state;
        return (react_1.default.createElement(NavBar, { color: color, fixed: fixed, sticky: sticky, backdrop: backdrop, role: "navigation", style: style },
            brand,
            react_1.default.createElement(Burger, { className: show ? 'active' : '', onClick: this.toggleMenu },
                react_1.default.createElement("span", null),
                react_1.default.createElement("span", null),
                react_1.default.createElement("span", null)),
            react_1.default.createElement(NavContent, { align: align }, children)));
    }
}
AppBar.defaultProps = {
    color: null,
    brand: null,
    fixed: false,
    sticky: false,
    fluid: false,
    backdrop: false,
    style: null,
};
AppBar.Item = NavItem;
exports.default = AppBar;
