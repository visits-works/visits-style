import React, { useMemo, InputHTMLAttributes, forwardRef } from 'react';
import { transparentize } from 'polished';
import styled from 'styled-components';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  children?: any;
  checked?: boolean;
}

function Approved() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      viewBox="0 0 30 30"
    >
      <g transform="translate(-80 -215)">
        <path
          d="M8.925,15.871,5.047,11.886,3.41,13.41,9,19,20.562,7.467l-1.7-1.595Z"
          transform="translate(82.59 217.595)"
          fill="currentColor"
        />
      </g>
    </svg>
  );
}

function Checkbox({
  className, children, innerRef, ...rest
}: Props & { innerRef: React.Ref<any> }) {
  const id = `checkbox_${rest.name}_${rest.value}`;
  const innerClass = useMemo(() => {
    const arr = [];
    if (rest.checked) arr.push('checked');
    if (rest.disabled) arr.push('disabled');
    return arr.join(' ');
  }, [rest.checked, rest.disabled]);

  return (
    <Wrapper className={className}>
      <input type="checkbox" id={id} {...rest} ref={innerRef} />
      <label htmlFor={id}>
        <Shape className={innerClass}>
          <Approved />
        </Shape>
        {children}
      </label>
    </Wrapper>
  );
}

export default forwardRef<any, Props>((props, ref) => <Checkbox {...props} innerRef={ref} />);

const Shape = styled.div`
  display: inline-flex;
  margin: 0.5rem;
  width: 1.25em;
  height: 1.25em;
  background: transparent;
  border: 0.1em solid ${({ theme }) => theme.border};
  border-radius: ${({ theme }) => theme.radius};
  justify-content: center;
  align-items: center;

  will-change: background-color;
  transition: background-color 150ms ease-out;

  svg {
    opacity: 0;
    stroke-width: 0.1em;
    stroke: currentColor;
  }

  &.checked {
    border-color: ${({ theme }) => theme.primary};
    background-color: ${({ theme }) => theme.primary};
    svg {
      opacity: 1;
      color: ${({ theme }) => theme.white};
    }

    &.disabled svg {
      color: ${({ theme }) => transparentize(0.15, theme.textDark)};
    }
  }

  &.disabled {
    background: ${({ theme }) => transparentize(0.55, theme.border)};
    border-color: ${({ theme }) => theme.border};
  }
`;

const Wrapper = styled.span`
  display: block;
  position: relative;
  width: auto;

  label {
    display: flex;
    align-items: center;
    cursor: pointer;
    padding-left: 0.625em;
    max-width: 100%;
    width: 100%;
    line-height: 1.25;
    margin-right: 0.625rem;
  }

  input {
    display: none;

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

    &:disabled + label {
      color: ${({ theme }) => transparentize(0.25, theme.textDark)};
    }
  }
`;
