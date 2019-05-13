import React, { Component, InputHTMLAttributes } from 'react';
import { transparentize } from 'polished';
import styled, { css } from 'styled-components';
import { ColorType } from '../../types';

const RadioLabel = css`
  label {
    cursor: pointer;
    padding-left: 1.625em;
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
      background: ${({ theme }: any) => theme.primary};
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
      border: 0.1em solid ${({ theme }: any) => theme.border};
      border-radius: 50%;

      will-change: background;
      transition: background 150ms ease-out;
    }
  }

  input {
    display: none;

    &:checked {
      + label:before {
        border-color: ${({ theme }: any) => theme.primary};
      }
      + label:after{
        transform: scale(1);
      }
    }

    &:disabled {
      + label {
        color: ${({ theme }: any) => transparentize(0.25, theme.textDark)};
        &:before {
          background: ${({ theme }: any) => transparentize(0.55, theme.border)};
          border-color: ${({ theme }: any) => theme.border};
        }
      }
      &:checked + label:after {
        background: ${({ theme }: any) => transparentize(0.15, theme.textDark)};
      }
    }
  }
`;

const ButtonLabel = css`
  display: inline-flex;

  label {
    cursor: pointer;
    padding: 0.375em 0.75em;
    height: 2.25em;
    border: 1px solid ${({ theme }: any) => theme.border};
    text-align: center;
    width: 100%;

    &:hover {
      border-color: ${({ theme }: any) => theme.borderHover};
    }
  }

  input {
    display: none;

    &:checked + label {
      z-index: 1;
      border-color: ${({ theme }: any) => theme.primary};
      background-color: ${({ theme }: any) => transparentize(0.55, theme.primary)};
    }

    &:disabled {
      + label {
        cursor: default;
        color: ${({ theme }: any) => transparentize(0.25, theme.textDark)};
        background-color: ${({ theme }: any) => transparentize(0.55, theme.border)};
        border-color: ${({ theme }: any) => theme.border};
      }

      &:checked + label {
        border-color: ${({ theme }: any) => theme.textDark};
        background-color: ${({ theme }: any) => transparentize(0.65, theme.textDark)};
      }
    }
  }

  & + & {
    margin-left: -1px;
  }

  &:first-child label {
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }

  &:last-child label {
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
  }
`;


const Wrapper = styled.span<{ button: boolean, color?: ColorType }>`
  display: block;
  position: relative;
  width: auto;

  ${({ button }) => button ? ButtonLabel : RadioLabel}
`;

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  value: string | number;
  children?: any;
  checked?: boolean;
  button?: boolean;
  color?: ColorType;
}

export default class Radio extends Component<Props> {
  static defaultProps = {
    name: null,
    children: null,
    checked: false,
    button: false,
    onChange: () => {},
  };

  id = `radio_${this.props.name}:${this.props.value}`;

  render() {
    const { className, children, button, color, style, ...rest } = this.props;
    return (
      <Wrapper className={className} button={button!} color={color} style={style}>
        <input id={this.id} type="radio" {...rest} />
        <label htmlFor={this.id}>{children}</label>
      </Wrapper>
    );
  }
}
