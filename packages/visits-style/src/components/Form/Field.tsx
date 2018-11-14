import React, { PureComponent, ReactNode } from 'react';
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
  font-weight: 700;
  margin-bottom: 0.325rem;
`;

interface Props {
  label?: string;
  children: ReactNode;
  style?: any;
}

export default class Field extends PureComponent<Props> {
  render() {
    const { label, children, style } = this.props;
    return (
      <Wrapper style={style}>
        {label && (<Label>{label}</Label>)}
        {children}
      </Wrapper>
    );
  }
}
