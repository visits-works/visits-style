import React, { PureComponent } from 'react';
import styled, { css, ThemeType } from '../../styled';
import { setSize } from '../../utils';
import commonStyle, { InputProps } from './style';

interface WrapperProps {
  outline?: boolean;
  error?: any;
}


const Icon = styled.span<{ right?: boolean }>`
  position: absolute;
  display: flex;
  align-items: center;
  top: 0;
  bottom: 0;
  z-index: 1;
  color: ${({ theme }) => theme.border};
  ${({ right }) => right ?
    'right: 0.375rem; & ~ input { padding-right: 1.555rem !important; }' :
    'left: 0.375rem; & ~ input { padding-left: 1.55rem !important; }'
  }

  svg, img {
    height: 1rem;
    width: 1rem;
  }
`;

const Wrapper = styled.span<WrapperProps>`
  position: relative;
  display: block;

  input {
    ${commonStyle}
    max-width: 100%;
    width: 100%;
    position: relative;
    display: block;
    outline: none;

    padding: 0.375em 0.625em;
    border: none;
    ${({ outline, theme }) => outline ?
      `border: 1px solid ${theme.border}; border-radius: 4px;` :
      `border-bottom: 1px solid ${theme.border};`
    }
    ${setSize('font-size')}

    transition-property: box-shadow;
    transition-duration: 150ms;
    transition-timing-function: ease-in-out;

    ${({ error, theme }) => error ? `border-color: ${theme.danger};` : ''}

    &:focus {
      border-color: ${({ error, theme }) => (error ? theme.danger : theme.primary)};
      ${({ theme, outline, error }) => outline ?
        `box-shadow: 0 0 0 0.1em ${error ? theme.danger : theme.primary};` :
        `box-shadow: 0 0.1em ${error ? theme.danger : theme.primary};`
      }
    }
  }

  &:hover {
    input:not(:disabled):not(:focus) {
      border-color: ${({ theme }) => theme.borderHover};
    }
    ${Icon} {
      color: ${({ theme }) => theme.borderHover};
    }
  }
`;

const Message = styled.span<{ error?: boolean }>`
  font-size: 0.8rem;
  ${({ error, theme }) => error ? `color: ${theme.danger};` : `color: ${theme.textLight};`};
`;

interface Props extends InputProps {
  placeholder?: string;
  /** 'text' | 'number' | 'password' | 'email' | 'phone' */
  type: 'text' | 'number' | 'password' | 'email' | 'phone';
  /** エラーの発生時の表示テキスト */
  error?: string;
  /** 捕捉テキスト */
  help?: string;
  /** ボックス系のデザインでする */
  outline?: boolean;
  /** 左側のアイコン */
  leftIcon?: any;
  /** 右側のアイコン */
  rightIcon?: any;
  style?: any;
}

function HelpMessage(help?: string, error?: string) {
  if (error) {
    return (<Message error>{error}</Message>);
  }
  if (help) {
    return (<Message>{help}</Message>);
  }
}

export default class TextInput extends PureComponent<Props> {
  static defaultProps = {
    type: 'text',
    value: '',
    onChange: () => {},
  };

  render() {
    const { outline, error, help, leftIcon, rightIcon, ...rest } = this.props;
    return (
      <Wrapper outline={outline} error={error}>
        {leftIcon && (<Icon>{leftIcon}</Icon>)}
        {rightIcon && (<Icon right>{rightIcon}</Icon>)}
        <input {...rest} />
        {HelpMessage(help, error)}
      </Wrapper>
    );
  }
}
