import React, { Component, HTMLAttributes } from "react";
import styled, { css } from "styled-components";
import arrow from "../../utils/arrow";
import setSize from "../../utils/setSize";
import HelpMessage from "./HelpMessage";
import { SizeType, CSSType } from "../../types";
import disabledColor from "../../utils/disabledColor";

interface WrapperProps {
  size?: SizeType;
  outline?: boolean;
  error?: string;
  disabled?: boolean;
  css?: CSSType;
}

const InputWrapper = styled.span<WrapperProps>`
  position: relative;
  display: block;

  select {
    display: block;
    cursor: pointer;
    appearance: none;
    outline: none;
    max-width: 100%;
    width: 100%;
    height: 100%;
    background-color: transparent;
    padding: 0.375em 0.625em;
    text-align: left;
    color: inherit;

    ${({ size }) => setSize("font-size", size)}

    border: none;
    ${({ outline, theme, error }) =>
      outline ? css`
        border: 1px solid ${error ? theme.danger : theme.border};
        border-radius: 4px;
      ` : css`
        border-bottom: 1px solid ${error ? theme.danger : theme.border};
        border-radius: 0;
      `}

    will-change: box-shadow;
    transition-property: box-shadow;
    transition-duration: 150ms;
    transition-timing-function: ease-in-out;

    &:focus {
      border-color: ${({ error, theme }) => error ? theme.danger : theme.primary};
      ${({ theme, outline, error }) =>
        outline
          ? `box-shadow: 0 0 0 0.1em ${error ? theme.danger : theme.primary};`
          : `box-shadow: 0 0.1em ${error ? theme.danger : theme.primary};`}
    }

    &::-ms-expand {
      display: none;
    }
    &:-moz-focusring {
      color: transparent;
      text-shadow: 0 0 0 #000;
    }

    &:disabled, [disabled], &:readonly {
      ${({ theme }) => disabledColor(theme)}
    }

    &:invalid {
      color: ${({ theme }) => theme.placeholder};
    }
  }

  &::after {
    ${({ theme }) => arrow(theme.border)}
    top: 1.25em;
    right: 0.625em;
    z-index: 4;
  }

  ${({ theme, disabled }) =>
    disabled
      ? ""
      : `
    &:hover {
      select:not(:disabled):not(:focus) {
        border-color: ${theme.borderHover};
      }

      &::after {
        border-color: ${theme.borderHover};
      }
    }
  `}

  ${({ css }) => css || ''}
`;

type ItemType =
  | { id: string | number; name: string; [key: string]: any }
  | string;

interface Props extends HTMLAttributes<HTMLSelectElement> {
  placeholder?: string;
  options: ItemType[];
  size?: SizeType;
  outline?: boolean;
  error?: string | any;
  help?: string | any;
  render?: (label: string) => any;
  css?: CSSType;
}

export default class Select extends Component<Props> {
  static defaultProps = {
    name: null,
    value: '',
    onChange: () => {},
    options: [],
  };

  shouldComponentUpdate(props: Props) {
    return (
      props.options.length !== this.props.options.length ||
      props.value !== this.props.value ||
      props.disabled !== this.props.disabled ||
      props.help !== this.props.help ||
      props.error !== this.props.error
    );
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
        return (
          <option key={item} value={item}>
            {this.renderLabel(item)}
          </option>
        );
      }
      const { id, name } = item;
      return (
        <option key={`${id}_${idx}`} value={id}>
          {this.renderLabel(name)}
        </option>
      );
    });
  }

  render() {
    const {
      css,
      className,
      size,
      outline,
      options,
      error,
      help,
      placeholder,
      disabled,
      ...rest
    } = this.props;

    return (
      <InputWrapper
        className={className}
        size={size}
        outline={outline}
        error={error}
        disabled={disabled}
        css={css}
      >
        <select {...rest} disabled={disabled} required={Boolean(placeholder)}>
          {placeholder && (
            <option value="">
              {placeholder}
            </option>
          )}
          {this.renderItem()}
        </select>
        {HelpMessage(help, error)}
      </InputWrapper>
    );
  }
}
