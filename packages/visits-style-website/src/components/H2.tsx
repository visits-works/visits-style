import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.h2`
  color: ${({ theme }) => theme.text};
  margin: 1rem 0;
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
