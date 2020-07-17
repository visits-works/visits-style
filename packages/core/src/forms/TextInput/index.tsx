import React, { InputHTMLAttributes, forwardRef } from 'react';
import styled, { css } from 'styled-components';
import { setSize } from '../../utils';
import disabledColor from '../../utils/disabledColor';
import HelpMessage from '../HelpMessage';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  /**
   * 'text' | 'number' | 'password' | 'email' | 'tel' | 'search'
   * @default 'text'
   */
  type?: 'text' | 'number' | 'password' | 'email' | 'tel' | 'search';
  /** エラーの発生時の表示テキスト */
  error?: string | any;
  /** 捕捉テキスト */
  help?: string | any;
  /** ボックス系のデザインでする */
  outline?: boolean;
  /** 左側のアイコン */
  leftIcon?: any;
  /** 右側のアイコン */
  rightIcon?: any;
  /** エラーが発生しても、エラーメッセージを出さないようにする */
  noErrorMessage?: boolean;
}

function TextInput({
  className, outline, error, style, help, leftIcon, rightIcon, type = 'text', maxLength = 255,
  noErrorMessage, innerRef, ...rest
}: Props & { innerRef: React.Ref<any> }) {
  return (
    <Wrapper
      className={className}
      outline={outline}
      error={error}
      style={style}
      disabled={rest.disabled}
    >
      {leftIcon && (<Icon>{leftIcon}</Icon>)}
      {rightIcon && (<Icon right>{rightIcon}</Icon>)}
      <input type={type} maxLength={maxLength} ref={innerRef} {...rest} />
      <HelpMessage help={help} error={error} noErrorMessage={noErrorMessage} />
    </Wrapper>
  );
}
export default forwardRef<any, Props>((props, ref) => <TextInput {...props} innerRef={ref} />);

const rightIcon = css`
  right: 0.375em;
  & ~ input {
    padding-right: 1.555em !important;
  }
`;

const leftIcon = css`
  left: 0.375em;
  & ~ input {
    padding-left: 1.55em !important;
  }
`;

const Icon = styled.span<{ right?: boolean }>`
  position: absolute;
  top: 0.375em;
  bottom: 0;
  z-index: 1;
  color: ${({ theme }) => theme.border};
  ${({ right }) => (right ? rightIcon : leftIcon)}

  svg, img {
    height: 1em;
    width: 1em;
  }
`;

const Wrapper = styled.span<{ outline?: boolean, error?: any, disabled?: boolean }>`
  position: relative;
  display: block;

  input {
    max-width: 100%;
    width: 100%;
    height: 100%;
    position: relative;
    display: block;
    outline: none;
    box-shadow: none;
    appearance: none;
    text-align: left;
    color: inherit;

    padding: ${({ theme }) => theme.formPadding};
    border: 1px solid ${({ error, theme }) => (error ? theme.danger : theme.border)};
    ${({ outline, theme }) => (outline
    ? { borderRadius: theme.radius }
    : { borderRadius: 0, borderWidth: 0, borderBottomWidth: '1px' })}
    ${setSize('font-size')}

    transition-property: box-shadow;
    transition-duration: 150ms;
    transition-timing-function: ease-in-out;

    &:focus {
      border-color: ${({ error, theme }) => (error ? theme.danger : theme.primary)};
      box-shadow: ${({ theme, outline, error }) => (outline
    ? `0 0 0 0.1em ${(error ? theme.danger : theme.primary)}`
    : `0 0.1em ${(error ? theme.danger : theme.primary)}`)};
    }

    &:disabled, [disabled] {
      resize: none;
    }

    &::placeholder {
      color: ${({ theme }) => theme.placeholder};
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

  ${({ disabled, theme }) => (disabled
    ? css`
      input {
        ${disabledColor(theme)}
        border-style: dashed;
      }
    `
    : undefined)}
`;
