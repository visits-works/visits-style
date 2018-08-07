import React, { Component } from 'react';
import styled, { ColorType, SizeType, StyledComponentClass, ThemeType } from '../../styled';
import CSSTransition from 'react-transition-group/CSSTransition';

import findColorInvert from '../../utils/findColorInvert';
import Button from '../Button';
import Box from '../Box';

const Wrapper = styled(Button)`
  display: inline-flex;
  position: relative;
  vertical-align: top;
`;

const Tooltip = styled(Box)`
  position: absolute;
  display: flex;
  clear: both;
  background-color: white;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  z-index: 9999;
  padding: 0.5rem 0;
  width: auto;
  height: auto;
  cursor: default;

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

interface Props {
  /** ボタンの内容 */
  label: React.ReactNode;
  /** ボタンの色 */
  color?: ColorType;
  /** 内容のリスト */
  children?: React.ReactNode | React.ReactNode;
  /** 右の基準でリストを表示する */
  right?: boolean;
  /** ボタンのサイズ */
  size?: SizeType;

  position?: 'top-left' | 'top' | 'top-right' | 'bottom-left' | 'bottom' | 'bottom-right';
}

interface State {
  show: boolean;
  style: any;
}

export default class Popover extends Component<Props, State> {
  static defaultProps = {
    position: 'bottom-left',
  };

  state = { show: false, style: {} };

  shouldComponentUpdate(props: Props, state: State) {
    return this.state.show !== state.show || this.props.label !== props.label;
  }

  openDropdown = () => {
    if (this.state.show || !this.element.current) return;
    let style = {};

    const height = this.element.current.offsetHeight + 8;

    switch (this.props.position) {
      case 'top-left': {
        style = { bottom: `${height}px`, left: 0 };
        break;
      }
      case 'top-right': {
        style = { bottom: `${height}px`, right: 0 };
        break;
      }
      case 'top': {
        style = { bottom: `${height}px` };
        break;
      }
      case 'bottom-left': {
        style = { top: `${height}px`, left: 0 };
        break;
      }
      case 'bottom-right': {
        style = { top: `${height}px`, right: 0 };
        break;
      }
      case 'bottom': {
        style = { top: `${height}px` };
        break;
      }
      default: {
        style = { top: `${height}px`, left: 0 };
        break;
      }
    }

    this.setState({ style, show: true });
  }

  closeDropdown = () => {
    if (this.state.show) this.setState({ show: false });
  }

  element = React.createRef<HTMLDivElement>();

  render() {
    const { label, color, size, children } = this.props;
    const { show, style } = this.state;
    return (
      <Wrapper
        innerRef={this.element}
        color={color || 'text'}
        size={size}
        onFocus={this.openDropdown}
        onBlur={this.closeDropdown}
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
          <Tooltip style={style}>
            {children}
          </Tooltip>
        </CSSTransition>
      </Wrapper>
    );
  }
}
