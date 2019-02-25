import React from 'react';
import styled from 'styled-components';
import Logo from '../Logo';

const Wrapper = styled.footer`
  display: flex;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.dark};
  color: ${({ theme }) => theme.white};
  padding: 1rem 2.5rem;
`;

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <Wrapper>
      <Logo />
      <div>Copyright ©{currentYear} Visits Technologies.</div>
    </Wrapper>
  );
}
