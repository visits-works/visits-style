import React, { createRef, RefObject, PureComponent } from 'react';
import styled, { css } from 'styled-components';
import { ColorType, CSSType } from '../../types';

const Wrapper = styled.div<{ show?: boolean, css?: CSSType }>`
  position: relative;
  display: inline-block;

  div[role="tooltip"] {
    position: absolute;
    clear: both;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    z-index: 9999;
    padding: 0.375rem 0.625rem;
    cursor: default;
    width: auto;
    white-space: pre;
    font-size: 0.85rem;
    z-index: 9999;

    transform: scale(0.8);
    opacity: 0;
    visibility: hidden;

    will-change: transform, opacity, visibility;
    transition-property: transform, opacity, visibility;
    transition-duration: 100ms;
    transition-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);

    ${({ show }) => show && css`
      transform: scale(1);
      opacity: 1;
      visibility: visible;
    `}
  }
  ${({ css }) => css || ''}
`;

interface TooltipProps {
  /** 吹き出しとして表示したい内容 */
  label: any;
  /** マウスオーバーの対象になるelement */
  children: any;
  /** 吹き出しの背景色の指定 */
  color?: ColorType;
  /** 表示される場所 */
  position?: 'top' | 'left' | 'right' | 'bottom';
  /** カスタムCSS定義 */
  css?: CSSType;
}

interface State {
  show: boolean;
  style: any;
}

export default class Tooltip extends PureComponent<TooltipProps, State> {
  static defaultProps = {
    position: 'bottom',
    color: 'dark',
  };

  state = {
    show: false,
    style: {},
  };

  openTooltip = () => {
    if (this.state.show || !this.element.current || !this.tooltip.current) return;

    const parentRect = this.element.current.getBoundingClientRect();
    const rect = this.tooltip.current.getBoundingClientRect();
    const left = parentRect.width + 8;
    const top = parentRect.height + 8;
    const width = (parentRect.width - rect.width) >> 1;
    const height = (parentRect.height - rect.height) >> 1;
    let style = {};

    switch (this.props.position) {
      case 'top': {
        style = { bottom: `${top}px`, left: `${width}px` };
        break;
      }
      case 'left': {
        style = { right: `${left}px`, top: `${height}px` };
        break;
      }
      case 'right': {
        style = { left: `${left}px`, top: `${height}px` };
        break;
      }
      default: {
        style = { top: `${top}px`, left: `${width}px`  };
        break;
      }
    }

    this.setState({ style, show: true });
  }

  closeTooltip = () => {
    if (this.state.show) this.setState({ show: false });
  }

  element: RefObject<HTMLDivElement> = createRef();
  tooltip: RefObject<HTMLDivElement> = createRef();

  render() {
    const { label, children, ...rest } = this.props;
    const { show, style } = this.state;
    return (
      <Wrapper
        ref={this.element}
        onMouseOver={this.openTooltip}
        onMouseOut={this.closeTooltip}
        {...rest}
      >
        {children}
        <div
          ref={this.tooltip}
          className={show ? 'start' : undefined}
          role="tooltip"
          style={style}
        >
          {label}
        </div>
      </Wrapper>
    );
  }
}

