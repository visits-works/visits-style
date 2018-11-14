import React, { PureComponent } from 'react';
import styled from 'styled-components';
import boxShadow from '../../utils/boxShadow';
import setSize from '../../utils/setSize';
import commonStyle, { InputProps } from './style';
import HelpMessage from './HelpMessage';

interface WrapperProps {
  error?: string;
}

const Wrapper = styled.span<WrapperProps>`
  display: block;
  position: relative;

  textarea {
    ${commonStyle}
    max-width: 100%;
    width: 100%;
    padding: 0.625em;
    resize: vertical;
    appearance: none;
    overflow: auto;
    outline: none;

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

    &:disabled {
      resize: none;
    }
  }

  &:hover {
    textarea:not(:disabled):not(:focus) {
      border-color: ${({ theme }) => theme.borderHover};
    }
  }
`;

interface Props extends InputProps {
  placeholder?: string;
  value?: string;
  col?: number;
  row?: number;
  /** エラーの発生時の表示テキスト */
  error?: string;
  /** 捕捉テキスト */
  help?: string;
}

export default class Textarea extends PureComponent<Props> {
  static defaultProps = {
    value: '',
    col: 2,
    row: 5,
    onChange: () => {},
  };

  render() {
    const { help, error, ...rest } = this.props;
    return (
      <Wrapper error={error}>
        <textarea {...rest} />
        {HelpMessage(help, error)}
      </Wrapper>
    );
  }
}
