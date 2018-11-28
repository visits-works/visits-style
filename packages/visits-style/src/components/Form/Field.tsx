import React, { PureComponent, ReactNode, HTMLAttributes } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: block;
  &:not(:last-child) {
    margin-bottom: 0.75rem;
  }
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
}

export default class Field extends PureComponent<Props> {
  render() {
    const { label, children, ...rest } = this.props;
    return (
      <Wrapper {...rest}>
        {label && (<Label>{label}</Label>)}
        {children}
      </Wrapper>
    );
  }
}
