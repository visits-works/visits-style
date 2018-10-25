import React from 'react';
import styled from 'styled-components';
import Logo from '../Logo';

const Wrapper = styled.footer`
  background-color: ${({ theme }) => theme.dark};
  color: ${({ theme }) => theme.white};
  text-align: center;
  padding: 1.5rem;
`;

export default function Footer() {
  return (
    <Wrapper>
      <Logo />
      <div>Copyright © 2018 Visits Technologies.</div>
    </Wrapper>
  );
}

