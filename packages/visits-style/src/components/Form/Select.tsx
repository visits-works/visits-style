import React, { Component, HTMLAttributes } from 'react';
import styled from 'styled-components';
import commonStyle from './style';
import arrow from '../../utils/arrow';
import setSize from '../../utils/setSize';
import HelpMessage from './HelpMessage';
import { SizeType } from '../../types';

interface WrapperProps {
  size?: SizeType;
  outline?: boolean;
  error?: string;
  disabled?: boolean;
}

const InputWrapper = styled.span<WrapperProps>`
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
      `border-bottom: 1px solid ${error ? theme.danger : theme.border}; border-radius: 0;`
    }

    will-change: box-shadow;
    transition-property: box-shadow;
    transition-duration: 150ms;
    transition-timing-function: ease-in-out;

    &:focus {
      border-color: ${({ error, theme }) => (error ? theme.danger : theme.primary)};
      ${({ theme, outline, error }) => outline ?
        `box-shadow: 0 0 0 0.1em ${error ? theme.danger : theme.primary};` :
        `box-shadow: 0 0.1em ${error ? theme.danger : theme.primary};`
      }
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

type ItemType = { id: string | number, name: string, [key: string]: any } | string;

interface Props extends HTMLAttributes<HTMLSelectElement> {
  name: string;
  value: string | number;
  placeholder?: string;
  options: Array<ItemType>;
  size?: SizeType;
  outline?: boolean;
  error?: string | any;
  help?: string | any;
  disabled?: boolean;
  render?: (label: string) => any,
}

export default class Select extends Component<Props> {
  static defaultProps = {
    name: null,
    onChange: () => {},
    options: [],
  };

  shouldComponentUpdate(props: Props) {
    return props.options.length !== this.props.options.length ||
      props.value !== this.props.value ||
      props.disabled !== this.props.disabled ||
      props.help !== this.props.help ||
      props.error !== this.props.error;
  }

  renderLabel = (label: string) => {
    if (this.props.render) {
      return this.props.render(label);
    }
    return label;
  }

  renderItem = () => {
    return this.props.options.map((item, idx) => {
      if (typeof item === 'string') {
        return <option key={item} value={item}>{this.renderLabel(item)}</option>
      } else {
        const { id, name } = item;
        return <option key={`${id}_${idx}`} value={id}>{this.renderLabel(name)}</option>
      }
    });
  }

  render() {
    const { className, size, outline, options, error, help, placeholder, disabled, ...rest } = this.props;
    return (
      <InputWrapper className={className} size={size} outline={outline} error={error} disabled={disabled}>
        <select {...rest} disabled={disabled}>
          {placeholder && (
            <option disabled selected>{placeholder}</option>
          )}
          {this.renderItem()}
        </select>
        {HelpMessage(help, error)}
      </InputWrapper>
    );
  }
}
