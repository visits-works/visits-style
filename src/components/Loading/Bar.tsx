import React, { PureComponent } from 'react';
import styled, { ThemeType, ColorType } from '../../styled';
import CSSTransition from 'react-transition-group/CSSTransition';
interface Props {
  loading: boolean;
  /** バーの色の指定 */
  color?: ColorType;
  /** バーのCSS positionの指定 */
  position?: 'absolute' | 'fixed' | 'sticky';
  /** バーの縦幅の定義 */
  size?: string;
  /** バーのアニメーションのduration指定 (単位：ms) */
  duration: number;
}

export const Bar = styled.div<Props>`
  position: ${({ position }) => position};
  top: 0;
  left: 0;
  transform: scaleX(0);
  transform-origin: left;
  width: 100%;
  height: ${({ size }) => size};
  background-color: ${({ color, theme }) => theme[color!]};

  will-change: transform, opacity;
  z-index: 1000000;

  transition-property: transform, opacity;
  transition-duration: ${({ duration }) => duration}ms;
  transition-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);

  &.start {
    transform: scaleX(0.8);
  }

  &.end {
    transform: scaleX(1);
    opacity: 0;
  }
`;


export default class LoadingBar extends PureComponent<Props> {
  static defaultProps = {
    loading: false,
    color: 'primary',
    position: 'absolute',
    size: '3px',
    duration: 150,
  }

  render() {
    return (
      <CSSTransition
        classNames={{
          appear: 'start',
          enterDone: 'start',
          exit: 'end',
        }}
        timeout={200}
        in={this.props.loading}
        unmountOnExit
      >
        <Bar {...this.props} />
      </CSSTransition>
    );
  }
}
