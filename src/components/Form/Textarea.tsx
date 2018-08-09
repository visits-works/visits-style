import React, { PureComponent } from 'react';
import styled from '../../styled';
import { boxShadow, setSize } from '../../utils';
import commonStyle, { InputProps } from './style';
import HelpMessage from './HelpMessage';

const Wrapper = styled.span`
  textarea {
    ${commonStyle}
    max-width: 100%;
    width: 100%;
    padding: 0.625em;
    resize: vertical;
    appearance: none;
    overflow: auto;

    border-radius: 4px;
    border: 1px solid ${({ theme }) => theme.border};

    transition-property: box-shadow;
    transition-duration: 0.15s;
    transition-timing-function: ease-in-out;

    ${setSize('font-size')}

    &:focus {
      outline: none;
      border-color: ${({ theme }) => theme.primary};
      ${({ theme }) => boxShadow('0.1em', theme.primary)}
    }

    &:disabled {
      resize: none;
    }
  }

  &:hover {
    input:not(:disabled):not(:focus) {
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
      <Wrapper>
        <textarea {...rest} />
        {HelpMessage(help, error)}
      </Wrapper>
    );
  }
}
