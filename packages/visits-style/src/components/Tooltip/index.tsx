import React, { createRef, RefObject, PureComponent } from 'react';
import CSSTransition from 'react-transition-group/CSSTransition';
import styled from 'styled-components';
import { ColorType, CSSType } from '../../types';

const Wrapper = styled.div<{ css?: CSSType }>`
  position: relative;
  display: 'inline-block';

  & > div[role="tooltip"] {
    position: absolute;
    clear: both;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    z-index: 9999;
    padding: 0.375rem 0.625rem;
    cursor: default;
    width: auto;
    white-space: pre;
    font-size: 0.85rem;

    transform: scale(0.8);
    opacity: 0;

    will-change: transform, opacity;
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

function getPosition(height: number, width: number, position?: any) {
  switch (position) {
    case 'top': {
      return { bottom: `${height}px`, left: '50%', transform: 'translateX(-50%)' };
    }
    case 'left': {
      return { right: `${width}px`, top: '50%', transform: 'translateY(-50%)' };
    }
    case 'right': {
      return { left: `${width}px`, top: '50%', transform: 'translateY(-50%)' };
    }
    default: {
      return { top: `${height}px`, left: '50%', transform: 'translateX(-50%)'  };
    }
  }
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
    if (this.state.show || !this.element.current) return;

    const width = this.element.current.offsetWidth + 8;
    const height = this.element.current.offsetHeight + 8;
    const style = getPosition(height, width, this.props.position);
    this.setState({ style, show: true });
  }

  closeTooltip = () => {
    if (this.state.show && this.element.current) {
      this.setState({ show: false });
    }
  }

  element: RefObject<HTMLDivElement> = createRef();

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
          <div role="tooltip">
            {label}
          </div>
        </CSSTransition>
      </Wrapper>
    );
  }
}

