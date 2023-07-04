import React, { TextareaHTMLAttributes, HTMLAttributes, forwardRef } from 'react';
import { styled, css } from 'styled-components';

import boxShadow from '../../utils/boxShadow';
import setSize from '../../utils/setSize';
import disabledColor from '../../utils/disabledColor';
import HelpMessage from '../HelpMessage';
import type { ThemeType } from '../../types';

export interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  /** エラーの発生時の表示テキスト */
  error?: string | any;
  /** 捕捉テキスト */
  help?: string | any;
  /** エラーが発生しても、エラーメッセージを出さないようにする */
  noErrorMessage?: boolean;
}

const Textarea = forwardRef<HTMLTextAreaElement, Props>(({
  className, help, error, style, noErrorMessage, ...rest
}, ref) => (
  <InputWrapper
    className={className}
    error={Boolean(error)}
    style={style}
    disabled={Boolean(rest.disabled)}
  >
    <textarea {...rest} ref={ref} />
    <HelpMessage help={help} error={error} noErrorMessage={noErrorMessage} />
  </InputWrapper>
));
Textarea.displayName = 'Textarea';

export default Textarea;

interface InputWrapperProps extends HTMLAttributes<HTMLSpanElement> {
  error?: boolean;
  disabled?: boolean;
}

function shouldForwardProp(name: string) {
  return (
    name !== 'error'
    && name !== 'disabled'
  );
}

const InputWrapper = styled.span.withConfig({ shouldForwardProp })<InputWrapperProps>`
  display: block;
  position: relative;

  textarea {
    max-width: 100%;
    width: 100%;
    height: 100%;
    padding: 0.625em;
    resize: vertical;
    appearance: none;
    overflow: auto;
    outline: none;
    text-align: left;
    color: inherit;

    border-radius: ${({ theme }) => theme.radius};
    border: 1px solid ${({ theme, error }) => (error ? theme.danger : theme.border)};

    transition-property: box-shadow;
    transition-duration: 0.15s;
    transition-timing-function: ease-in-out;

    ${setSize('font-size')}

    &:focus {
      border-color: ${({ theme, error }) => (error ? theme.danger : theme.primary)};
      ${({ theme, error }) => boxShadow('0.1em', error ? theme.danger : theme.primary)}
    }

    &:disabled, [disabled], &:readonly {
      ${({ theme }) => disabledColor(theme as ThemeType)}
    }

    &:disabled, [disabled] {
      resize: none;
    }

    &::placeholder {
      color: ${({ theme }) => theme.placeholder};
    }
  }

  &:hover {
    textarea:not(:disabled):not(:focus) {
      border-color: ${({ theme }) => theme.borderHover};
    }
  }

${({ disabled, theme }) => (disabled
    ? css`
      textarea {
        ${disabledColor(theme as ThemeType)}
        border-style: dashed;
      }
    `
    : undefined)}
`;
