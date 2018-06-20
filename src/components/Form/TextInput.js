import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { boxShadow, setSize } from '../../utils';
import commonStyle from './style';

const Input = styled.input`
  ${commonStyle}
  max-width: 100%;
  width: 100%;
  position: relative;

  padding: 0.375em 0.625em;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.border};
  ${setSize('font-size')}

  transition-property: box-shadow;
  transition-duration: 0.15s;
  transition-timing-function: ease-in-out;

  &:hover {
    border-color: ${({ theme }) => theme.borderHover};
  }

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.primary};
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
