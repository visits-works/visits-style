import React, { Component, Children } from 'react';
import styled from 'styled-components';
import setAlign from '../../utils/setAlign';
import Button from '../Button';
const Wrapper = styled.nav `
  display: flex;
  justify-content: ${setAlign};

  .tab-content {
    position: relative;
    display: flex;
    ${({ align }) => align ? '' : 'flex-grow: 1;'}
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }
`;
const TabItem = styled.div `
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
const Indicator = styled.div `
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
export default class Tabs extends Component {
    constructor() {
        super(...arguments);
        this.state = { start: 0, current: null };
        this.onNext = () => {
            const threshold = this.props.maxItems;
            const value = this.state.start + threshold;
            const count = Children.count(this.props.children);
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
            return React.createElement(TabItem, Object.assign({}, child.props, { align: this.props.align }));
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
        return (React.createElement(Wrapper, { align: align },
            start > maxItems && (React.createElement(Button, { color: "text" }, '<')),
            React.createElement("div", { className: "tab-content" },
                Children.map(children, this.renderChildren),
                React.createElement(Indicator, { color: color, style: style })),
            total > maxItems && start > maxItems && (React.createElement(Button, { color: "text" }, '>'))));
    }
}
Tabs.defaultProps = {
    maxItems: 5,
};
Tabs.Item = TabItem;
;
