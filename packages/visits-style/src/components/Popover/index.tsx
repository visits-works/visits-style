import React, { Component, createRef, RefObject } from 'react';
import styled from 'styled-components';
import Box, { Props as BoxProps } from '../Box';
import { CSSType } from '../../types';

const Wrapper = styled.div<{ css?: CSSType }>`
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

  will-change: transform, opacity, visibility;
  transform: scale(0.8);
  opacity: 0;
  visibility: hidden;

  transition-property: transform, opacity, visibility;
  transition-duration: 100ms;
  transition-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);

  &.start {
    transform: scale(1);
    opacity: 1;
    visibility: visible;
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

export default class Popover extends Component<Props, State> {
  static defaultProps = {
    color: 'white',
    style: {},
  };

  state = { show: false, style: {} };

  shouldComponentUpdate(props: Props, state: State) {
    return (
      this.state.show !== state.show
      || this.state.style !== state.style
      || this.props.label !== props.label
      || this.props.position !== props.position
    );
  }

  openDropdown = () => {
    if (this.state.show || !this.tooltip.current || !this.wrapper.current) return;

    let style = {};
    const parentRect = this.wrapper.current.getBoundingClientRect();
    const tooltipRect = this.tooltip.current.getBoundingClientRect();

    switch (this.props.position) {
      case 'top-left': {
        style = { bottom: `${parentRect.height + 8}px`, left: 0 };
        break;
      }
      case 'top-right': {
        style = { bottom: `${parentRect.height + 8}px`, right: 0 };
        break;
      }
      case 'top': {
        style = {
          bottom: `${parentRect.height + 8}px`,
          left: `${(parentRect.width - tooltipRect.width) >> 1}px`,
        };
        break;
      }
      case 'bottom-right': {
        style = { top: `${parentRect.height + 8}px`, right: 0 };
        break;
      }
      case 'bottom': {
        style = {
          top: `${parentRect.height + 8}px`,
          left: `${(parentRect.width - tooltipRect.width) >> 1}px`,
        };
        break;
      }
      // bottom-left
      default: {
        style = { top: `${parentRect.height + 8}px`, left: 0 };
        break;
      }
    }

    this.setState({ style, show: true });
  }

  closeDropdown = () => {
    if (this.state.show) this.setState({ show: false });
  }

  tooltip: RefObject<HTMLDivElement> = createRef();
  wrapper: RefObject<HTMLDivElement> = createRef();

  render() {
    const { label, children, style, css, ...rest } = this.props;
    const { show } = this.state;
    const tooltipStyle = { ...style, ...this.state.style };
    return (
      <Wrapper
        tabIndex={0}
        role="button"
        ref={this.wrapper}
        onFocus={this.openDropdown}
        onBlur={this.closeDropdown}
        style={{ display: 'block', position: 'relative' }}
        className={this.props.className}
        css={css}
      >
        {label}
        <Tooltip
          className={show ? 'start' : undefined}
          role="tooltip"
          ref={this.tooltip}
          style={this.state.style}
          {...rest}
        >
          {children}
        </Tooltip>
      </Wrapper>
    );
  }
}
