import React from 'react';
import styled from 'styled-components';
import { mediaMobile } from 'visits-style';
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

  ${mediaMobile} {
    padding: 0.85rem;
  }
`;

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <Wrapper>
      <a href="https://visits.world" target="_blank" rel="noopener noreferrer"><Logo /></a>
      <div>©{currentYear} VISITS Technologies Inc.</div>
    </Wrapper>
  );
}
