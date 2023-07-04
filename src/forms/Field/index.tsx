import React, { ReactNode, HTMLAttributes } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: block;
  margin: 1.5rem 0;
`;

const Label = styled.h5`
  display: block;
  font-size: 1rem;
  font-weight: normal;
  margin-bottom: 0.625rem;
  text-align: left;
  color: ${({ theme }) => theme.textStrong};

  & > i {
    color: ${({ theme }) => theme.primary};
    margin-left: 0.325rem;
  }
`;

export interface Props extends HTMLAttributes<HTMLDivElement> {
  label?: string;
  children: ReactNode;
  required?: boolean;
}

export default function Field({ label, children, required, ...rest }: Props) {
  return (
    <Wrapper {...rest}>
      {label && (
        <Label>
          {label}
          {required && (<i>*</i>)}
        </Label>
      )}
      {children}
    </Wrapper>
  );
}
