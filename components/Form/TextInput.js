import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { setSize } from '../../utils';
import commonStyle from './style';
import HelpMessage from './HelpMessage';
const Icon = styled.span `
  position: absolute;
  top: 0.375em;
  bottom: 0;
  z-index: 1;
  color: ${({ theme }) => theme.border};
  ${({ right }) => right ?
    'right: 0.375em; & ~ input { padding-right: 1.555em !important; }' :
    'left: 0.375em; & ~ input { padding-left: 1.55em !important; }'}

  svg, img {
    height: 1em;
    width: 1em;
  }
`;
const Wrapper = styled.span `
  position: relative;
  display: block;

  input {
    ${commonStyle}
    max-width: 100%;
    width: 100%;
    position: relative;
    display: block;
    outline: none;
    box-shadow: none;
    appearance: none;

    padding: 0.375em 0.625em;
    border: none;
    ${({ outline, theme, error }) => outline ?
    `border: 1px solid ${error ? theme.danger : theme.border}; border-radius: 4px;` :
    `border-bottom: 1px solid ${error ? theme.danger : theme.border}; border-radius: 0;`}
    ${setSize('font-size')}

    transition-property: box-shadow;
    transition-duration: 150ms;
    transition-timing-function: ease-in-out;

    &:focus {
      border-color: ${({ error, theme }) => (error ? theme.danger : theme.primary)};
      ${({ theme, outline, error }) => outline ?
    `box-shadow: 0 0 0 0.1em ${error ? theme.danger : theme.primary};` :
    `box-shadow: 0 0.1em ${error ? theme.danger : theme.primary};`}
    }
  }

  &:hover {
    input:not(:disabled):not(:focus):not(:active) {
      border-color: ${({ theme }) => theme.borderHover};
    }
    ${Icon} {
      color: ${({ theme }) => theme.borderHover};
    }
  }
`;
export default class TextInput extends PureComponent {
    render() {
        const { outline, error, help, leftIcon, rightIcon, style, ...rest } = this.props;
        return (React.createElement(Wrapper, { outline: outline, error: error, style: style },
            leftIcon && (React.createElement(Icon, null, leftIcon)),
            rightIcon && (React.createElement(Icon, { right: true }, rightIcon)),
            React.createElement("input", Object.assign({}, rest)),
            HelpMessage(help, error)));
    }
}
TextInput.defaultProps = {
    type: 'text',
    value: '',
    maxLength: 255,
    onChange: () => { },
};
