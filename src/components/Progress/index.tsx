import styled from 'styled-components';
import setSize from '../../utils/setSize';
import { ColorType, SizeType } from '../../types';

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

  &::-webkit-progress-bar {
    background-color: ${({ theme }) => theme.background};
  }

  &::-webkit-progress-value {
    background-color: ${({ theme }) => theme.primary};
    transition: width 400ms linear;
  }

  &::-moz-progress-bar {
    background-color: ${({ theme }) => theme.primary};
    transition: width 400ms linear;
  }

  &::-ms-fill {
    border: 0;
    background-color: ${({ theme }) => theme.primary};
    transition: width 400ms linear;
  }
`;
Progress.displayName = 'Progress';


export default Progress;
