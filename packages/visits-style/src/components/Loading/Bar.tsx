import React, { PureComponent, HTMLAttributes } from 'react';
import styled from 'styled-components';
import CSSTransition from 'react-transition-group/CSSTransition';
import { ColorType, CSSType } from '../../types';

interface LoadingProps extends HTMLAttributes<HTMLDivElement> {
  /** trueの場合開始します */
  loading: boolean;
  /** バーの色の指定 */
  color?: ColorType;
  /** バーのCSS positionの指定 */
  position?: 'absolute' | 'fixed' | 'sticky';
  /** バーの背景の色の自由指定 */
  background?: string;
  /** バーの縦幅の定義 */
  size?: string;
  /** バーのアニメーションのduration指定 (単位：ms) */
  duration?: number;
  css?: CSSType;
}

const Wrapper = styled.div<LoadingProps>`
  position: ${({ position }) => position};
  background-color: ${({ background }) => background};
  top: 0;
  left: 0;
  width: 100%;

  .loading-bar {
    height: ${({ size }) => size};
    background-color: ${({ color, theme }) => theme[color!]};

    will-change: width, opacity;
    z-index: 1000000;

    transition-property: width, opacity;
    transition-duration: ${({ duration }) => duration}ms;
    transition-timing-function: linear;

    &.load-enter {
      width: 0;
    }

    &.load-enter-done {
      width: 85%;
    }

    &.load-exit {
      width: 85%;
    }

    &.load-exit-active {
      width: 100%;
      opacity: 0;
    }
  }

  ${({ css }) => css || ''}
`;


export default class LoadingBar extends PureComponent<LoadingProps> {
  static defaultProps = {
    loading: false,
    color: 'primary',
    position: 'absolute',
    background: 'transparent',
    size: '3px',
    duration: 150,
  }

  render() {
    return (
      <Wrapper {...this.props}>
        <CSSTransition
          classNames="load"
          timeout={this.props.duration!}
          in={this.props.loading}
          unmountOnExit
        >
          <div className="loading-bar" />
        </CSSTransition>
      </Wrapper>
    );
  }
}