import React from 'react';
import styled, { SizeType, ColorType, StyledComponentClass, ThemeType } from '../../styled';
import setSize from '../../utils/setSize';

interface Props {
  value: number;
  max: number;
  size?: SizeType;
  color: ColorType;
}

export const Progress = styled.progress<Props>`
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
