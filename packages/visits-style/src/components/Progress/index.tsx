import React, { PureComponent } from 'react';
import styled from 'styled-components';
import setSize from '../../utils/setSize';
import { ColorType, SizeType } from '../../types';

interface ProgressProps {
  /** 現状の進捗 */
  value: number;
  /** 進捗の最大値 */
  max: number;
  /** バーのサイズ */
  size?: SizeType;
  /** sizeを使わないときの縦幅を指定する */
  height?: string;
  /** バーの色 */
  color?: ColorType;

  style?: any;
}

const Wrapper = styled.div<ProgressProps>`
  display: block;
  width: 100%;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.background};

  ${({ size }) => setSize('height', size)}
  ${({ size, height }) => !size && height ? `height: ${height};` : ''}

  & > div {
    height: 100%;
    border-radius: 4px;
    ${({ value, max }) => (value === max) ? '' : 'border-bottom-right-radius: 0; border-top-right-radius: 0;'}
    background-color: ${({ color, theme }) => (theme[color!] || color)};

    will-change: width;

    transition-property: width;
    transition-duration: 350ms;
    transition-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);
  }
`;


export default class Progress extends PureComponent<ProgressProps> {
  static defaultProps = {
    color: 'primary',
  }

  render () {
    const { value, max } = this.props;
    const percent = Math.round((value/max) * 100);
    return (
      <Wrapper {...this.props}>
        <div role="progressbar" style={{ width: `${percent > 100 ? 100 : percent}%` }} ></div>
      </Wrapper>
    );
  }
};
