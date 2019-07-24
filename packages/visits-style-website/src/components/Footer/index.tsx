import React from 'react';
import styled from 'styled-components';
import Logo from '../Logo';

const Wrapper = styled.footer`
  text-align: center;
  background-color: ${({ theme }) => theme.footer};
  color: ${({ theme }) => theme.white};
  height: 5.5rem;
  padding: 1.25rem 0;
  opacity: 0.85;

  a, p {
    color: ${({ theme }) => theme.textLight};
  }

  a {
    display: inline-block;
    will-change: color;
    transition: color 150ms ease-in-out;
    margin-bottom: 0.5rem;

    &:hover {
      color: ${({ theme }) => theme.blackTer};
    }
  }
  p {
    font-size: 0.95rem;
  }
`;

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <Wrapper>
      <a href="https://visits.world" target="_blank" rel="noopener noreferrer"><Logo /></a>
      <p>©{currentYear} VISITS Technologies Inc.</p>
    </Wrapper>
  );
}
