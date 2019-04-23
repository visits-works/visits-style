import React, { Component, TextareaHTMLAttributes } from 'react';
import styled from 'styled-components';
import boxShadow from '../../utils/boxShadow';
import setSize from '../../utils/setSize';
import disabledColor from '../../utils/disabledColor';
import HelpMessage from './HelpMessage';
import { CSSType } from '../../types';

interface WrapperProps {
  error?: string;
  css?: CSSType;
}

const Wrapper = styled.span<WrapperProps>`
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

    border-radius: 4px;
    border: 1px solid ${({ theme, error }) => error ? theme.danger : theme.border};

    transition-property: box-shadow;
    transition-duration: 0.15s;
    transition-timing-function: ease-in-out;

    ${setSize('font-size')}

    &:focus {
      border-color: ${({ theme, error }) => error ? theme.danger : theme.primary};
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
  ${({ css }) => css || {}}
`;

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  /** エラーの発生時の表示テキスト */
  error?: string | any;
  /** 捕捉テキスト */
  help?: string | any;
  /** カスタムCSS定義 */
  css?: CSSType;
}

export default class Textarea extends Component<Props> {
  static defaultProps = {
    value: '',
    col: 2,
    row: 5,
    onChange: () => {},
  };

  render() {
    const { className, help, error, style, css, ...rest } = this.props;
    return (
      <Wrapper className={className} error={error} style={style} css={css}>
        <textarea {...rest} />
        {HelpMessage(help, error)}
      </Wrapper>
    );
  }
}
