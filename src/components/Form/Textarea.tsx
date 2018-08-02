import React, { PureComponent } from 'react';
import styled from '../../styled';
import { boxShadow, setSize } from '../../utils';
import commonStyle, { InputProps } from './style';

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

  &:hover:not(:disabled) {
    border-color: ${({ theme }) => theme.borderHover};
  }

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.primary};
    ${({ theme }) => boxShadow('0.1em', theme.primary)}
  }
`;

interface Props extends InputProps {
  placeholder?: string;
  value?: string;
  col?: number;
  row?: number;
}

export default class Textarea extends PureComponent<Props> {
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
