import React, { Component, Children, CSSProperties } from 'react';
import styled, { StyledComponentClass } from 'styled-components';
import setAlign from '../../utils/setAlign';
import { ThemeType, ColorType } from '../../types';
import Button from '../Button';

const Wrapper = styled.nav`
  display: flex;
  justify-content: ${setAlign};

  .tab-content {
    position: relative;
    display: flex;
    ${({ align }) => align ? '' : 'flex-grow: 1;'}
    align-items: center;
    justify-content: center;
  }
`;

const TabItem = styled.div<{ align?: any, active: boolean }>`
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

function setColor({ theme, color }: { theme: ThemeType, color?: ColorType }) {
  return (!color || color === 'light') ? theme.background : theme[color];
}

const Indicator = styled.div<{ color?: ColorType, style?: CSSProperties }>`
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: ${setColor};
  height: 2px;

  visibility: hidden;

  will-change: transform;
  transition-property: transform;
  transition-duration: 200ms;
  transition-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);
`;

interface Props {
  /**  */
  color?: ColorType;
  align?: 'left' | 'right' | 'center';
  maxItems?: number;

  children: any;
}

interface State {
  start: number;
  current?: number;
}

export default class Tabs extends Component<Props> {
  static defaultProps = {
    maxItems: 5,
  }

  static getDerivedStateFromProps(props: Props, state: State) {
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

  static Item = TabItem;

  state = { start: 0, current: null };

  shouldComponentUpdate(props: Props, state: State) {
    return this.state.start !== state.start ||
      this.state.current !== state.current;
  }

  onNext = () => {
    const threshold = this.props.maxItems!;
    const value = this.state.start + threshold;
    const count = Children.count(this.props.children)
    if (value < count) {
      this.setState({ start: value });
    }
  }

  onPrev = () => {
    if (this.state.start === 0) return;

    const threshold = this.props.maxItems!;
    const value = this.state.start - threshold;
    this.setState({ start: value < 0 ? 0 : value });
  }

  getIndicatorPosition = (): CSSProperties | undefined => {
    const { current } = this.state;
    const { children, maxItems } = this.props;
    if (current === null || current === undefined) return undefined;
    if (!children || !children.length) return undefined;

    const total = children.length > maxItems! ? maxItems : children.length;
    const value = (current * 100) + '%';

    return {
      visibility: 'visible',
      width: `${Math.round((100 / total))}%`,
      transform: `translateX(${value})`
    };
  }

  renderChildren = (child: React.ReactChild, index: number) => {
    if (this.state.start > index) return null;
    if (this.state.start + index >= this.props.maxItems!) return null;
    if (typeof child === 'string' || typeof child === 'number') return null;

    return <TabItem {...child.props} align={this.props.align} />;
  }

  render() {
    const { children, align, color, maxItems } = this.props;
    const { start } = this.state;
    const total = children ? children.length : 0;
    const style = this.getIndicatorPosition();
    return (
      <Wrapper align={align}>
        {start > maxItems! && (<Button color="text">{'<'}</Button>)}
        <div className="tab-content">
          {Children.map(children, this.renderChildren)}
          <Indicator color={color} style={style} />
        </div>
        {total > maxItems! && start > maxItems! && (<Button color="text">{'>'}</Button>)}
      </Wrapper>
    );
  }
};
