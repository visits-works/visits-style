import React, { Component } from 'react';
import styled from 'styled-components';
import CSSTransition from 'react-transition-group/CSSTransition';
import Box, { Props as BoxProps } from '../Box';
import { CSSType } from '../../types';

const Wrapper = styled.a<{ css?: CSSType }>`
  display: inline-block;
  outline: none;
  color: inherit;

  &:hover {
    color: inherit;
    text-decoration: none;
  }

  ${({ css }) => css || ''}
`;

const Tooltip = styled(Box)`
  position: absolute;
  display: flex;
  clear: both;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  z-index: 9999;
  padding: 0.5rem 0;
  width: auto;
  height: auto;
  cursor: auto;

  will-change: transform, opacity;
  transform: scale(0.8);
  opacity: 0;

  transition-property: transform, opacity;
  transition-duration: 100ms;
  transition-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);

  &.start {
    transform: scale(1);
    opacity: 1;
  }

  &.end {
    transform: scale(0.8);
    opacity: 0;
  }
`;

interface Props extends BoxProps {
  /** ボタンの内容 */
  label: React.ReactNode;
  /** 内容のリスト */
  children?: React.ReactNode | React.ReactNode;
  /** 右の基準でリストを表示する */
  right?: boolean;
  /** 吹き出しが表示される場所 */
  position?: 'top-left' | 'top' | 'top-right' | 'bottom-left' | 'bottom' | 'bottom-right';
  /** カスタムCSS定義 */
  css?: CSSType;
}

interface State {
  show: boolean;
  style: any;
}

function getPosition(position?: any) {
  switch (position) {
    case 'top-left': {
      return { top: 0, left: 0, transform: 'translateY(-100%)' };
    }
    case 'top-right': {
      return { top: 0, right: 0, transform: 'translateY(-100%)' };
    }
    case 'top': {
      return { top:  0, left: '50%', transform: 'translate(-50%, -100%)' };
    }
    case 'bottom-left': {
      return { bottom: 0, left: 0, transform: 'translateY(100%)' };
    }
    case 'bottom-right': {
      return { bottom: 0, right: 0, transform: 'translateY(100%)' };
    }
    case 'bottom': {
      return { bottom: 0, left: '50%', transform: 'translate(-50%, 100%)' };
    }
    default: {
      return { top: 0, left: 0, transform: 'translateY(100%)' };
    }
  }
}

export default class Popover extends Component<Props, State> {
  static defaultProps = {
    position: 'bottom-left',
    color: 'white',
    style: {},
  };

  state = { show: false, style: {} };

  shouldComponentUpdate(props: Props, state: State) {
    return this.state.show !== state.show || this.props.label !== props.label;
  }

  openDropdown = () => {
    if (this.state.show) return;

    const style = getPosition(this.props.position);
    this.setState({ style, show: true });
  }

  closeDropdown = () => {
    if (this.state.show) this.setState({ show: false });
  }

  render() {
    const { label, children, style, css, ...rest } = this.props;
    const { show } = this.state;
    const tooltipStyle = { ...style, ...this.state.style };
    return (
      <Wrapper
        tabIndex={0}
        role="button"
        onFocus={this.openDropdown}
        onBlur={this.closeDropdown}
        style={{ display: 'block', position: 'relative' }}
        css={css}
      >
        {label}
        <CSSTransition
          classNames={{
            appear: 'start',
            enterDone: 'start',
            exit: 'end',
          }}
          in={show}
          timeout={150}
          unmountOnExit
        >
          <Tooltip role="tooltip" style={tooltipStyle} {...rest}>
            {children}
          </Tooltip>
        </CSSTransition>
      </Wrapper>
    );
  }
}
