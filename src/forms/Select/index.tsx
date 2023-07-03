import React, { SelectHTMLAttributes, useMemo, forwardRef } from 'react';
import styled, { css } from 'styled-components';
import setSize from '../../utils/setSize';
import HelpMessage from '../HelpMessage';
import { SizeType } from '../../types';
import disabledColor from '../../utils/disabledColor';
import IconArrowDown from '../../elements/Icons/ArrowDown';

type ItemType =
  | { id: string | number; name: string; [key: string]: any }
  | string;

export interface Props extends SelectHTMLAttributes<HTMLSelectElement> {
  placeholder?: string;
  /** { id: string | number, name: string, ...rest } | string */
  options: ItemType[];
  outline?: boolean;
  /** エラーの発生時の表示テキスト */
  error?: string | any;
  /** 捕捉テキスト */
  help?: string | any;
  /** selectのサイズ */
  inputSize?: SizeType;
  /** optionのカスタムrender */
  render?: (label: string) => any;
  /** placehoderを選択可能にする */
  optional?: boolean;
  /** エラーが発生しても、エラーメッセージを出さないようにする */
  noErrorMessage?: boolean;
}

function Select({
  options = [], placeholder, render, help, error, className, inputSize, outline, optional,
  noErrorMessage, innerRef, ...rest
}: Props & { innerRef: React.Ref<any> }) {
  const list = useMemo(() => options.map((item) => (
    typeof item === 'string'
      ? (<option key={item} value={item}>{render ? render(item) : item}</option>)
      : (<option key={item.id} value={item.id}>{render ? render(item.name) : item.name}</option>)
  )), [options, render]);

  return (
    <InputWrapper
      className={className}
      inputSize={inputSize}
      outline={outline}
      error={!!error}
      disabled={rest.disabled}
    >
      <select {...rest} ref={innerRef}>
        {placeholder && (<option value="" disabled={!optional}>{placeholder}</option>)}
        {list}
      </select>
      <IconArrowDown />
      <HelpMessage help={help} error={error} noErrorMessage={noErrorMessage} />
    </InputWrapper>
  );
}
export default forwardRef<any, Props>((props, ref) => <Select {...props} innerRef={ref} />);

const InputWrapper = styled.span<Pick<Props, 'inputSize'|'outline'> & { error: boolean, disabled?: boolean }>`
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
    padding: ${({ theme }) => theme.formPadding};
    padding-right: 1.85rem;
    text-align: left;
    color: inherit;

    ${({ inputSize }) => setSize('font-size', inputSize)}

    border: 1px solid ${({ error, theme }) => (error ? theme.danger : theme.border)};
    ${({ outline, theme }) => (
    outline ? css`
        border-radius: ${theme.radius};
      ` : css`
        border-width: 0;
        border-radius: 0;
        border-bottom-width: 1px;
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
      box-shadow: ${({ theme, outline, error }) => (outline
    ? `0 0 0 0.1em ${(error ? theme.danger : theme.primary)}`
    : `0 0.1em ${(error ? theme.danger : theme.primary)}`)};
    }

    &::-ms-expand {
      display: none;
    }
    &:-moz-focusring {
      color: transparent;
      text-shadow: 0 0 0 #000;
    }

    &:invalid {
      color: ${({ theme }) => theme.placeholder};
    }
  }

  svg {
    position: absolute;
    right: 0.75rem;
    top: 50%;
    transform: translateY(-50%);
    color: ${({ theme }) => theme.border};
  }

  select:hover + svg {
    color: ${({ theme }) => theme.borderHover};
  }

  ${({ disabled, theme }) => (disabled ? css`
    select {
      ${disabledColor(theme)}
      border-style: dashed;
    }
    svg {
      display: none;
    }
  ` : undefined)}
`;
