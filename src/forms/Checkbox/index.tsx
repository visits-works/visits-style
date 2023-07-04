import React, {
  useMemo, InputHTMLAttributes, forwardRef, useRef, useImperativeHandle,
} from 'react';
import { transparentize } from 'polished';
import { styled } from 'styled-components';

import useIsomorphicLayoutEffect from '../../hooks/useIsomorphicLayoutEffect';

export interface Props extends InputHTMLAttributes<HTMLInputElement> {
  children?: any;
  checked?: boolean;
  indeterminate?: boolean;
}

function Approved() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      viewBox="0 0 30 30"
    >
      <path d="M11.5 18.5l-3.9-4L6 16l5.6 5.6 11.6-11.5-1.7-1.6z" fill="currentColor" />
    </svg>
  );
}

function Indeterminate() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      viewBox="0 0 30 30"
    >
      <rect width="20" height="4" y="13" x="4.5" fill="currentColor" stroke="none" rx="2" />
    </svg>
  );
}

const Checkbox = forwardRef<HTMLInputElement| null, Props>(
  ({ className, children, indeterminate, ...rest }, ref) => {
    const innerRef = useRef<HTMLInputElement>(null);
    const id = `checkbox_${rest.name}_${rest.value ?? 'none'}`;
    const innerClass = useMemo(() => {
      const arr = [];
      if (rest.checked || indeterminate) arr.push('checked');
      if (rest.disabled) arr.push('disabled');
      return arr.join(' ');
    }, [rest.checked, rest.disabled, indeterminate]);

    // @ts-ignore
    useImperativeHandle(ref, () => innerRef.current);

    useIsomorphicLayoutEffect(() => {
      if (innerRef.current) {
        // @ts-ignore
        innerRef.current.indeterminate = indeterminate;
      }
    }, [indeterminate]);

    return (
      <Wrapper className={className}>
        <input type="checkbox" id={id} {...rest} ref={innerRef} />
        <label htmlFor={id}>
          <Shape className={innerClass}>
            {indeterminate ? <Indeterminate /> : <Approved />}
          </Shape>
          {children}
        </label>
      </Wrapper>
    );
  },
);

Checkbox.displayName = 'Checkbox';

export default Checkbox;

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
    color: ${({ theme }) => theme.white};
    svg {
      opacity: 1;
    }

    &.disabled {
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
    &:disabled + label {
      color: ${({ theme }) => transparentize(0.25, theme.textDark)};
    }
  }
`;
