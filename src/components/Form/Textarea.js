import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { boxShadow, setSize } from '../../utils';
import commonStyle from './style';

const Input = styled.textarea`
  ${commonStyle}
  max-width: 100%;
  width: 100%;
  padding: 0.625em;
  resize: vertical;
  appearance: none;

  border-radius: 4px;
  border: none;
  ${({ theme }) => boxShadow('1px', theme.border, 0)}
  transition: box-shadow .15s ease-in-out;

  ${setSize('font-size')}

  &:focus {
    outline: none;
    ${({ theme }) => boxShadow('0.2em', theme.primary)}
  }
`;

export default class Textarea extends PureComponent {
  static defaultProps = {
    name: null,
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
