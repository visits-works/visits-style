import React, { PureComponent, ReactNode, HTMLAttributes } from 'react';
import styled, { css } from 'styled-components';
import { CSSType } from '../../types';

const Wrapper = styled.div<{ required?: boolean, css?: CSSType }>`
  display: block;
  &:not(:last-child) {
    margin-bottom: 0.75rem;
  }
  ${({ required, theme }) => required ? css`
    label::after {
      content: '*';
      color: ${theme.primary};
      margin-left: 0.325rem;
    }
  ` : {}}
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

export default class Field extends PureComponent<Props> {
  render() {
    const { label, children, htmlFor, ...rest } = this.props;
    return (
      <Wrapper {...rest}>
        {label && (<Label htmlFor={htmlFor}>{label}</Label>)}
        {children}
      </Wrapper>
    );
  }
}
