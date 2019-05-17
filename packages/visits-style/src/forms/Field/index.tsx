import React, { ReactNode, HTMLAttributes } from 'react';
import styled, { css } from 'styled-components';

const Wrapper = styled.div<{ required?: boolean }>`
  display: block;
  &:not(:last-child) {
    margin-bottom: 0.75rem;
  }
  ${({ required, theme }) => (required ? css`
    label::after {
      content: '*';
      color: ${theme.primary};
      margin-left: 0.325rem;
    }
  ` : undefined)}
`;

const Label = styled.label`
  color: ${({ theme }) => theme.textStrong};
  display: block;
  font-size: 1rem;
  margin-bottom: 0.325rem;
`;

interface Props extends HTMLAttributes<HTMLDivElement> {
  label?: string;
  children: ReactNode;
  required?: boolean;
  htmlFor?: string;
}

export default function Field({ label, children, htmlFor, ...rest }: Props) {
  return (
    <Wrapper {...rest}>
      {label && (<Label htmlFor={htmlFor}>{label}</Label>)}
      {children}
    </Wrapper>
  );
}
