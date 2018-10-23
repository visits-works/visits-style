import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const Wrapper = styled.h2`
  color: ${({ theme }) => theme.text};
  a {
    color: inherit;
  }
`;

export function convertTitleToId(str: string) {
  const lower = str.toLowerCase();

  return lower.replace(' ', '-');
}

export default function H2({ children }: any) {
  const id = convertTitleToId(children);
  return (
    <Wrapper id={id}>
      <a href={`#${id}`}>
        {children}
      </a>
    </Wrapper>
  );
}
