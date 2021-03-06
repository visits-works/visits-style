import React, { TextareaHTMLAttributes, forwardRef } from 'react';
import styled, { css } from 'styled-components';
import boxShadow from '../../utils/boxShadow';
import setSize from '../../utils/setSize';
import disabledColor from '../../utils/disabledColor';
import HelpMessage from '../HelpMessage';

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  /** エラーの発生時の表示テキスト */
  error?: string | any;
  /** 捕捉テキスト */
  help?: string | any;
  /** エラーが発生しても、エラーメッセージを出さないようにする */
  noErrorMessage?: boolean;
}

function Textarea({
  className, help, error, style, innerRef, noErrorMessage, ...rest
}: Props & { innerRef: React.Ref<any> }) {
  return (
    <Wrapper className={className} error={!!error} style={style} disabled={rest.disabled}>
      <textarea {...rest} ref={innerRef} />
      <HelpMessage help={help} error={error} noErrorMessage={noErrorMessage} />
    </Wrapper>
  );
}
export default forwardRef<any, Props>((props, ref) => <Textarea {...props} innerRef={ref} />);

const Wrapper = styled.span<{ error?: boolean, disabled?: boolean }>`
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
    textarea:not(:disabled):not(:focus) {
      border-color: ${({ theme }) => theme.borderHover};
    }
  }

${({ disabled, theme }) => (disabled
    ? css`
      textarea {
        ${disabledColor(theme)}
        border-style: dashed;
      }
    `
    : undefined)}
`;
