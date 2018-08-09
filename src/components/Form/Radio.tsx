import React, { PureComponent, ReactNode } from 'react';
import transparentize from 'polished/lib/color/transparentize';
import styled from '../../styled';
import { InputProps } from './style';

const Wrapper = styled.span`
  display: block;
  position: relative;
  width: auto;

  label {
    cursor: pointer;
    padding-left: 0.625em;
    max-width: 100%;
    width: 100%;
    line-height: 1.25;
    margin-right: 0.625rem;

    &:before, &:after {
      content: "";
      position: absolute;
    }

    &:after {
      top: 0.375em;
      left: 0.375em;
      width: 0.5em;
      height: 0.5em;
      background: ${({ theme }) => theme.white};
      border: none;
      transform: scale(0);
      border-radius: 50%;

      will-change: transform;
      transition: transform 150ms ease-out;
    }

    &:before {
      width: 1.25em;
      height: 1.25em;
      left:0;
      top: 0;
      background: transparent;
      border: 1px solid ${({ theme }) => theme.border};
      border-radius: 50%;

      will-change: background;
      transition: background 150ms ease-out;
    }
  }

  input {
    visibility: hidden;

    &:checked {
      + label:before {
        border-color: ${({ theme }) => transparentize(0.55, theme.border)};
        background: ${({ theme }) => theme.primary};
      }
      + label:after{
        transform: scale(1);
      }
    }

    &:disabled {
      + label {
        color: ${({ theme }) => transparentize(0.25, theme.textDark)};
        &:before {
          background: ${({ theme }) => transparentize(0.55, theme.border)};
        }
      }
      &:checked + label:after {
        background: ${({ theme }) => transparentize(0.15, theme.textDark)};
      }
    }
  }
`;

interface Props extends InputProps {
  value: string | number;
  children?: any;
  checked?: boolean;
}

export default class Radio extends PureComponent<Props> {
  static defaultProps = {
    name: null,
    children: null,
    checked: false,
    onChange: () => {},
  };

  id = `radio_${this.props.name}:${this.props.value}`;

  render() {
    const { children, ...rest } = this.props;
    return (
      <Wrapper>
        <input id={this.id} type="radio" {...rest} />
        <label htmlFor={this.id}>{children}</label>
      </Wrapper>
    );
  }
}
