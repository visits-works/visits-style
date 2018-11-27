import React, { Component } from 'react';
import styled from 'styled-components';
import commonStyle from './style';
import arrow from '../../utils/arrow';
import setSize from '../../utils/setSize';
import HelpMessage from './HelpMessage';
const InputWrapper = styled.span `
  position: relative;
  display: block;

  select {
    ${commonStyle}
    display: block;
    cursor: pointer;
    appearance: none;
    outline: none;
    max-width: 100%;
    width: 100%;
    background-color: transparent;
    padding: 0.375em 0.625em;

    ${({ size }) => setSize('font-size', size)}

    border: none;
    ${({ outline, theme, error }) => outline ?
    `border: 1px solid ${error ? theme.danger : theme.border}; border-radius: 4px;` :
    `border-bottom: 1px solid ${error ? theme.danger : theme.border}; border-radius: 0;`}

    will-change: box-shadow;
    transition-property: box-shadow;
    transition-duration: 150ms;
    transition-timing-function: ease-in-out;

    &:focus {
      border-color: ${({ error, theme }) => (error ? theme.danger : theme.primary)};
      ${({ theme, outline, error }) => outline ?
    `box-shadow: 0 0 0 0.1em ${error ? theme.danger : theme.primary};` :
    `box-shadow: 0 0.1em ${error ? theme.danger : theme.primary};`}
    }

    &::-ms-expand {
      display: none;
    }
    &:-moz-focusring {
      color: transparent;
      text-shadow: 0 0 0 #000;
    }
  }

  &::after {
    ${({ theme }) => arrow(theme.border)}
    top: 1.25em;
    right: 0.625em;
    z-index: 4;
  }

  ${({ theme, disabled }) => disabled ? '' : `
    &:hover {
      select:not(:disabled):not(:focus) {
        border-color: ${theme.borderHover};
      }

      &::after {
        border-color: ${theme.borderHover};
      }
    }
  `}
`;
export default class Select extends Component {
    constructor() {
        super(...arguments);
        this.renderLabel = (label) => {
            if (this.props.render) {
                return this.props.render(label);
            }
            return label;
        };
        this.renderItem = () => {
            return this.props.options.map((item, idx) => {
                if (typeof item === 'string') {
                    return React.createElement("option", { key: item, value: item }, this.renderLabel(item));
                }
                else {
                    const { id, name } = item;
                    return React.createElement("option", { key: `${id}_${idx}`, value: id }, this.renderLabel(name));
                }
            });
        };
    }
    shouldComponentUpdate(props) {
        return props.options.length !== this.props.options.length ||
            props.value !== this.props.value ||
            props.disabled !== this.props.disabled ||
            props.help !== this.props.help ||
            props.error !== this.props.error;
    }
    render() {
        const { size, outline, options, error, help, placeholder, disabled, ...rest } = this.props;
        return (React.createElement(InputWrapper, { size: size, outline: outline, error: error, disabled: disabled },
            React.createElement("select", Object.assign({}, rest, { disabled: disabled }),
                placeholder && (React.createElement("option", { disabled: true, selected: true }, placeholder)),
                this.renderItem()),
            HelpMessage(help, error)));
    }
}
Select.defaultProps = {
    name: null,
    onChange: () => { },
    options: [],
};
