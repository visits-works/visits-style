import React, { useMemo, InputHTMLAttributes } from 'react';
import { transparentize } from 'polished';
import styled from 'styled-components';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  value: string | number;
  children?: any;
  checked?: boolean;
}

export default function Radio({ className, style, children, ...rest }: Props) {
  const id = `radio_${rest.name}_${rest.value}`;
  const innerClass = useMemo(() => {
    const arr = [];
    if (rest.checked) arr.push('checked');
    if (rest.disabled) arr.push('disabled');
    return arr.join(' ');
  }, [rest.checked, rest.disabled]);

  return (
    <Wrapper className={className} style={style}>
      <label htmlFor={id}>
        <Shape className={innerClass}>
          <i />
        </Shape>
        {children}
      </label>
      <input id={id} type="radio" {...rest} />
    </Wrapper>
  );
}

const Shape = styled.div`
  display: inline-flex;
  margin: 0.5rem;
  width: 1.25em;
  height: 1.25em;
  background: transparent;
  border: 0.1em solid ${({ theme }) => theme.border};
  border-radius: 50%;
  justify-content: center;
  align-items: center;

  will-change: background-color, border-color;
  transition-property: background-color, border-color;
  transition-duration: 150ms;
  transition-timing-function: ease-out;

  &.checked {
    border-color: ${({ theme }) => theme.primary};
    & > i {
      transform: scale(1);
    }

    &.disabled > i {
      background-color: ${({ theme }) => transparentize(0.15, theme.textDark)};
    }
  }

  &.disabled {
    background: ${({ theme }) => transparentize(0.55, theme.border)};
    border-color: ${({ theme }) => theme.border};
  }

  & > i {
    display: block;
    width: 0.5em;
    height: 0.5em;
    background: ${({ theme }) => theme.primary};
    border: none;
    transform: scale(0);
    border-radius: 50%;

    will-change: transform;
    transition: transform 150ms ease-out;
  }
`;

const Wrapper = styled.span`
  display: block;
  width: auto;

  label {
    cursor: pointer;
    max-width: 100%;
    width: 100%;
    line-height: 1.25;
    margin-right: 0.625rem;
    display: flex;
    align-items: center;

    &:hover > div:not(.checked):not(.disabled) {
      border-color: ${({ theme }) => theme.borderHover};
    }
  }

  input {
    display: none;
  }
`;
