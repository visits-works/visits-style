import React, { useRef, InputHTMLAttributes } from 'react';
import styled from 'styled-components';

const Wrapper = styled.span`
  display: inline-block;
  cursor: pointer;
  line-height: 1.25;
  position: relative;

  input {
    display: none;
  }

  label {
    position: relative;
    display: block;
    height: 1.25rem;
    min-width: 3rem;
    background: #898989;
    border-radius: 100px;
    cursor: pointer;
    transition: all .3s ease;

    &:after {
      position: absolute;
      display: block;
      left: 0.125rem;
      top: 0.125rem;
      width: 1rem;
      height: 1rem;
      border-radius: 100px;
      background: white;
      box-shadow: 0px 3px 3px rgba(#000,.05);
      content: '';
      transition: all .3s ease;
    }
  }

  input:checked ~ label {
    background: ${({ theme }) => theme.primary};
    &:after {
      left: calc(100% - 1.125rem);
    }
  }
`;

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  children?: any;
}

export default function Switch({ className, children, ...rest }: Props) {
  const id = useRef(`switch_${rest.name}`);

  return (
    <Wrapper className={className}>
      <input id={id.current} type="checkbox" {...rest} />
      <label htmlFor={id.current} />
    </Wrapper>
  );
}
