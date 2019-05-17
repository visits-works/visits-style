import React, { SelectHTMLAttributes, useMemo } from 'react';
import styled, { css } from 'styled-components';
import arrow from '../../utils/arrow';
import setSize from '../../utils/setSize';
import HelpMessage from '../HelpMessage';
import { SizeType } from '../../types';
import disabledColor from '../../utils/disabledColor';

type ItemType =
  | { id: string | number; name: string; [key: string]: any }
  | string;

interface Props extends SelectHTMLAttributes<HTMLSelectElement> {
  placeholder?: string;
  options: ItemType[];
  outline?: boolean;
  error?: string | any;
  help?: string | any;
  inputSize?: SizeType;
  render?: (label: string) => any;
  disabled?: boolean;
}

export default function Select({
  options = [], placeholder, render, help, error, className, inputSize, outline,
  ...rest
}: Props) {
  const list = useMemo(() => options.map(item => (
    typeof item === 'string'
      ? (<option value={item}>{render ? render(item) : item}</option>)
      : (<option value={item.id}>{render ? render(item.name) : item.name}</option>)
  )), [options, render]);

  return (
    <InputWrapper
      className={className}
      size={inputSize}
      outline={outline}
      error={!!error}
      disabled={rest.disabled}
    >
      <select {...rest}>
        {placeholder && (<option value="">{placeholder}</option>)}
        {list}
      </select>
      <HelpMessage help={help} error={error} />
    </InputWrapper>
  );
}

const InputWrapper = styled.span<{ size?: SizeType, error?: boolean, outline?: boolean }>`
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
    padding-right: 1.35em;
    text-align: left;
    color: inherit;

    ${({ size }) => setSize('font-size', size)}

    border: none;
    ${({ outline, theme, error }) => (
    outline ? css`
        border: 1px solid ${error ? theme.danger : theme.border};
        border-radius: 4px;
      ` : css`
        border-bottom: 1px solid ${error ? theme.danger : theme.border};
        border-radius: 0;
      `)}

    will-change: box-shadow;
    transition-property: box-shadow;
    transition-duration: 150ms;
    transition-timing-function: ease-in-out;

    &:hover {
      border-color: ${({ theme }) => theme.borderHover};
    }

    &:focus {
      border-color: ${({ error, theme }) => (error ? theme.danger : theme.primary)};
    }

    &::-ms-expand {
      display: none;
    }
    &:-moz-focusring {
      color: transparent;
      text-shadow: 0 0 0 #000;
    }

    &:disabled, &[disabled], &:readonly {
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
`;
