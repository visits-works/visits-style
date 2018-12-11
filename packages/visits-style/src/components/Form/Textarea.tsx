import React, { Component, InputHTMLAttributes } from 'react';
import styled from 'styled-components';
import boxShadow from '../../utils/boxShadow';
import setSize from '../../utils/setSize';
import disabledColor from '../../utils/disabledColor';
import HelpMessage from './HelpMessage';

interface WrapperProps {
  error?: string;
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
`;

interface Props extends InputHTMLAttributes<HTMLTextAreaElement> {
  /** エラーの発生時の表示テキスト */
  error?: string | any;
  /** 捕捉テキスト */
  help?: string | any;
}

export default class Textarea extends Component<Props> {
  static defaultProps = {
    value: '',
    col: 2,
    row: 5,
    onChange: () => {},
  };

  shouldComponentUpdate(props: Props) {
    return props.value !== this.props.value ||
      props.help !== this.props.help ||
      props.error !== this.props.error ||
      props.disabled !== this.props.disabled ||
      props.readOnly !== this.props.readOnly;
  }

  render() {
    const { className, help, error, style, ...rest } = this.props;
    return (
      <Wrapper className={className} error={error} style={style}>
        <textarea {...rest} />
        {HelpMessage(help, error)}
      </Wrapper>
    );
  }
}
