import React from 'react';
import styled from 'styled-components';
import { mediaMobile } from 'visits-style';
import Logo from '../Logo';

const Wrapper = styled.footer`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.greyLighter};
  color: ${({ theme }) => theme.white};
  height: 5rem;
  opacity: 0.85;

  a, div {
    color: ${({ theme }) => theme.textLight};
  }

  a {
    will-change: color;
    transition: color 150ms ease-in-out;
    margin-bottom: 0.5rem;

    &:hover {
      color: ${({ theme }) => theme.blackTer};
    }
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
