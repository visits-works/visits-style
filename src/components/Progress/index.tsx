import React from 'react';
import styled, { SizeType, ColorType, ThemeType } from '../../styled';
import setSize from '../../utils/setSize';

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
  color: ColorType;
}

const Progress = styled.progress<ProgressProps>`
  -moz-appearance: none;
  -webkit-appearance: none;
  border: none;
  border-radius: 290486px;
  display: block;
  overflow: hidden;
  padding: 0;
  width: 100%;
  color: ${({ theme }) => theme.background};

  ${({ size }) => setSize('height', size)}
  ${({ size, height }) => !size && height ? `height: ${height};` : ''}

  will-change: width;

  transition-property: width;
  transition-duration: 350ms;
  transition-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);

  &::-webkit-progress-bar {
    background-color: ${({ theme }) => theme.background};
  }

  &::-webkit-progress-value {
    background-color: ${({ theme }) => theme.primary};
  }

  &::-moz-progress-bar {
    background-color: ${({ theme }) => theme.primary};
  }

  &::-ms-fill {
    border: 0;
    background-color: ${({ theme }) => theme.primary};
  }
`;
Progress.displayName = 'Progress';


export default Progress;
