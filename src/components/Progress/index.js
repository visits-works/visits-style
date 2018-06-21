// @flow
import styled from 'styled-components';
import { setSize } from '../../utils';

type Props = {
  value: number,
  max: number,
  size?: SizeType,
  color: ColorType,
}

export const Progress = styled.progress`
  -moz-appearance: none;
  -webkit-appearance: none;
  border: none;
  border-radius: 290486px;
  display: block;
  overflow: hidden;
  padding: 0;
  width: 100%;
  color: ${props => props.theme.grey};

  ${setSize('height')}

  &::-webkit-progress-bar {
    background-color: ${props => props.theme.grey};
  }

  &::-webkit-progress-value {
    background-color: ${props => props.theme.primary};
    transition: width 400ms linear;
  }

  &::-moz-progress-bar {
    background-color: ${props => props.theme.primary};
    transition: width 400ms linear;
  }

  &::-ms-fill {
    border: 0;
    background-color: ${props => props.theme.primary};
    transition: width 400ms linear;
  }
`;
Progress.displayName = 'Progress';


export default Progress;
