import * as React from 'react';
import styled from 'styled-components';
import { boxShadow, setSize } from '../../utils';
import commonStyle from './style';
import { InputProps } from './types';

const Input = styled.textarea`
  ${commonStyle}
  max-width: 100%;
  width: 100%;
  padding: 0.625em;
  resize: vertical;
  appearance: none;

  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.border};

  transition-property: box-shadow;
  transition-duration: 0.15s;
  transition-timing-function: ease-in-out;

  ${setSize('font-size')}

  &:hover {
    border-color: ${({ theme }) => theme.borderHover};
  }

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.primary};
    ${({ theme }) => boxShadow('0.2em', theme.primary)}
  }
`;

interface Props extends InputProps {
  placeholder?: string;
  value?: string;
  col?: number;
  row?: number;
}

export default class Textarea extends React.PureComponent<Props> {
  static defaultProps = {
    placeholder: null,
    value: '',
    col: 2,
    row: 5,
    onChange: () => {},
  }

  render() {
    return (
      <Input {...this.props} />
    );
  }
}
