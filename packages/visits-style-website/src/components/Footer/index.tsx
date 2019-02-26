import React from 'react';
import styled from 'styled-components';
import Logo from '../Logo';

const Wrapper = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.dark};
  color: ${({ theme }) => theme.white};
  padding: 1.25rem 2.5rem;

  a {
    color: inherit;
    will-change: color;
    transition: color 150ms ease-in-out;

    &:hover {
      color: ${({ theme }) => theme.textLight};
    }
  }
`;

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <Wrapper>
      <a href="https://visits.world" target="_blank"><Logo /></a>
      <div>Copyright ©{currentYear} Visits Technologies.</div>
    </Wrapper>
  );
}
