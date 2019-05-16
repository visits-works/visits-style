import React, { useRef, InputHTMLAttributes } from 'react';
import { transparentize } from 'polished';
import styled from 'styled-components';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  children?: any;
  checked?: boolean;
}

export default function Checkbox({ className, children, ...rest }: Props) {
  const id = useRef(`checkbox_${rest.name}`);

  return (
    <Wrapper className={className}>
      <input type="checkbox" id={id.current} {...rest} />
      <label htmlFor={id.current}>{children}</label>
    </Wrapper>
  );
}

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
      top: 0.25em;
      left: 0.2em;
      width: 0.85em;
      height: 0.5em;
      transform: rotate(-45deg);
      border: 0.1em solid transparent;
      border-top-style: none;
      border-right-style: none;
    }

    &:before {
      width: 1.25em;
      height: 1.25em;
      left:0;
      top: 0;
      background: transparent;
      border: 1px solid ${({ theme }) => theme.border};
      border-radius: 4px;
      cursor: pointer;

      will-change: background;
      transition: background 150ms ease-out;
    }
  }

  input {
    visibility: hidden;

    &:checked + label {
      &:before{
        border-color: ${({ theme }) => theme.primary};
        background: ${({ theme }) => theme.primary};
      }
      &:after {
        border-color: ${({ theme }) => theme.white};
      }
    }

    &:indeterminate + label {
      &:before {
        border-color: ${({ theme }) => theme.primary};
        background: ${({ theme }) => theme.primary};
      }
      &:after {
        border-color: ${({ theme }) => theme.white};
        border-left-style: none;
      }
    }

    &:disabled {
      + label {
        color: ${({ theme }) => transparentize(0.25, theme.textDark)};
        &:before {
          background: ${({ theme }) => transparentize(0.55, theme.border)};
          border-color: ${({ theme }) => theme.border};
        }
      }
      &:checked + label:after {
        border-color: ${({ theme }) => transparentize(0.15, theme.textDark)};
      }
    }
  }
`;
