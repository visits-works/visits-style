import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { Button } from 'visits-style';

const Container = styled.div`
  padding: 2.85rem 0;
  border-bottom: 1px solid ${({ theme }) => theme.border};

  h1, summary, footer {
    display: block;
    text-align: center;
    margin-bottom: 1rem;
  }

  a:not(:last-child) {
    margin-right: 0.85rem;
  }
`;

export default function Hero() {
  return (
    <Container>
      <h1>Visits-style</h1>
      <summary>
        VISITS Technologiesのreactデザインコンポーネント
      </summary>
      <footer>
        <Link to="/core">
          <Button color="primary">Get Started</Button>
        </Link>
        <a href="https://github.com/visits-works/visits-style" target="_blank" rel="noopener noreferrer">
          <Button color="primary">Github</Button>
        </a>
        <a href="https://visits-works.github.io/visits-style/storybook" target="_blank" rel="noopener noreferrer">
          <Button color="primary">試してみる</Button>
        </a>
      </footer>
    </Container>
  );
}
