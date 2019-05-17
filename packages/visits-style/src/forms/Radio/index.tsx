import React, { useRef, InputHTMLAttributes } from 'react';
import { transparentize } from 'polished';
import styled from 'styled-components';
import { ColorType } from '../../types';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  value: string | number;
  children?: any;
  checked?: boolean;
  color?: ColorType;
}

export default function Radio({ className, color, style, children, ...rest }: Props) {
  const id = useRef(`radio_${rest.name}`);
  return (
    <Wrapper className={className} color={color} style={style}>
      <input id={id.current} type="radio" {...rest} />
      <label htmlFor={id.current}>{children}</label>
    </Wrapper>
  );
}

const Wrapper = styled.span<{ color?: ColorType }>`
  display: block;
  position: relative;
  width: auto;

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
