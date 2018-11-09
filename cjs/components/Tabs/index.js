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
const setAlign_1 = __importDefault(require("../../utils/setAlign"));
const Button_1 = __importDefault(require("../Button"));
const Wrapper = styled_1.default.nav `
  display: flex;
  justify-content: ${setAlign_1.default};

  .tab-content {
    position: relative;
    display: flex;
    ${({ align }) => align ? '' : 'flex-grow: 1;'}
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }
`;
const TabItem = styled_1.default.div `
  display: block;
  flex-grow: 1;
  cursor: pointer;

  a {
    display: flex;
    color: ${({ theme }) => theme.text};
    justify-content: center;
    align-items: center;
    vertical-align: top;
    padding: 0.375em 0.75em;
    border-bottom: 2px solid transparent;

    transition-property: background-color;
    transition-duration: 150ms;
    transition-timing-function: ease-in-out;

    &:hover {
      background-color: rgba(0, 0, 0, 0.03);
    }
  }
`;
function setColor({ theme, color }) {
    return !color ? theme.background : theme[color];
}
const Indicator = styled_1.default.div `
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: ${setColor};
  height: 2px;

  visibility: hidden;
  transform-origin: left;

  will-change: transform;
  transition-property: transform;
  transition-duration: 200ms;
  transition-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);
`;
class Tabs extends react_1.Component {
    constructor() {
        super(...arguments);
        this.state = { start: 0, current: null };
        this.onNext = () => {
            const threshold = this.props.maxItems;
            const value = this.state.start + threshold;
            const count = react_1.Children.count(this.props.children);
            if (value < count) {
                this.setState({ start: value });
            }
        };
        this.onPrev = () => {
            if (this.state.start === 0)
                return;
            const threshold = this.props.maxItems;
            const value = this.state.start - threshold;
            this.setState({ start: value < 0 ? 0 : value });
        };
        this.getIndicatorPosition = () => {
            const { current } = this.state;
            const { children, maxItems } = this.props;
            if (current === null || current === undefined)
                return undefined;
            if (!children || !children.length)
                return undefined;
            const total = children.length > maxItems ? maxItems : children.length;
            const value = (current * 100) + '%';
            return {
                visibility: 'visible',
                width: `${Math.round((100 / total))}%`,
                transform: `translateX(${value})`
            };
        };
        // TODO: make tab scrollable via arrow icons
        this.renderChildren = (child, index) => {
            if (this.state.start > index)
                return null;
            if (this.state.start + index >= this.props.maxItems)
                return null;
            if (typeof child === 'string' || typeof child === 'number')
                return null;
            return react_1.default.createElement(TabItem, Object.assign({}, child.props, { align: this.props.align }));
        };
    }
    static getDerivedStateFromProps(props, state) {
        let activeIndex;
        for (let i = 0, len = props.children.length; i < len; i += 1) {
            const child = props.children[i];
            if (child.props.active) {
                activeIndex = i;
                break;
            }
        }
        return {
            ...state,
            current: activeIndex,
        };
    }
    shouldComponentUpdate(props, state) {
        return this.state.start !== state.start ||
            this.state.current !== state.current;
    }
    render() {
        const { children, align, color, maxItems } = this.props;
        const { start } = this.state;
        const total = children ? children.length : 0;
        const style = this.getIndicatorPosition();
        return (react_1.default.createElement(Wrapper, { align: align },
            start > maxItems && (react_1.default.createElement(Button_1.default, { color: "text" }, '<')),
            react_1.default.createElement("div", { className: "tab-content" },
                react_1.Children.map(children, this.renderChildren),
                react_1.default.createElement(Indicator, { color: color, style: style })),
            total > maxItems && start > maxItems && (react_1.default.createElement(Button_1.default, { color: "text" }, '>'))));
    }
}
Tabs.defaultProps = {
    maxItems: 5,
};
Tabs.Item = TabItem;
exports.default = Tabs;
;
