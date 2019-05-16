import React, { InputHTMLAttributes } from 'react';
import styled, { css } from 'styled-components';
import { setSize } from '../../utils';
import disabledColor from '../../utils/disabledColor';
import HelpMessage from '../HelpMessage';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  /** 'text' | 'number' | 'password' | 'email' | 'tel' | 'search' */
  type: 'text' | 'number' | 'password' | 'email' | 'tel' | 'search';
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
}

export default function TextInput({
  className, outline, error, style, help, leftIcon, rightIcon, ...rest
}: Props) {
  return (
    <Wrapper className={className} outline={outline} error={error} style={style}>
      {leftIcon && (<Icon>{leftIcon}</Icon>)}
      {rightIcon && (<Icon right>{rightIcon}</Icon>)}
      <input {...rest} />
      <HelpMessage help={help} error={error} />
    </Wrapper>
  );
}
TextInput.defaultProps = {
  type: 'text',
  value: '',
  maxLength: 255,
};

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

const Wrapper = styled.span<{ outline?: boolean, error?: any }>`
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

    padding: 0.375em 0.625em;
    border: none;
    ${({ outline, theme, error }) => outline ?
      `border: 1px solid ${error ? theme.danger : theme.border}; border-radius: 4px;` :
      `border-bottom: 1px solid ${error ? theme.danger : theme.border}; border-radius: 0;`
    }
    ${setSize('font-size')}

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

    &:disabled, [disabled], &:readonly {
      ${({ theme }) => disabledColor(theme)}
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
`;
