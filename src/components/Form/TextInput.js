import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { boxShadow } from '../../utils';
import commonStyle from './style';

const Input = styled.input`
  ${commonStyle}
  max-width: 100%;
  width: 100%;

  padding: 0.375em 0.625em;
  border-radius: 4px;
  border: none;
  ${({ theme }) => boxShadow('1px', theme.border, 0)}
  will-change: box-shadow, transition;
  transition: box-shadow .15s ease-in-out;

  &:focus {
    outline: none;
    ${({ theme }) => boxShadow('0.2em', theme.primary)}
  }
`;

export default class TextInput extends PureComponent {
  static defaultProps = {
    name: null,
    type: 'text',
    placeholder: null,
    value: '',
    onChange: () => {},
  }

  render() {
    return <Input {...this.props} />;
  }
}
