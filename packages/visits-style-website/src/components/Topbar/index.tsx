import React from 'react';
import styled, { css } from 'styled-components';
import { StaticQuery, graphql, Link } from 'gatsby';
import { AppBar, mediaMobile } from 'visits-style';

export const isActive = (route: string) => (match: any, location: any) =>
  (match && match.url === location.pathname) ||
  (location.pathname.startsWith(route) && route !== '/')


const pageQuery = graphql`
query {
  allMdx (filter:{ frontmatter : { menu: { eq: true } } }) {
    nodes {
      frontmatter {
        title
      }
      fields {
        slug
      }
      parent {
        ... on File {
          relativePath
        }
      }
    }
  }
}
`;

const Logo = (
  <Link to="/">
    <h2 style={{ fontSize: '1.25rem', margin: 0 }}>Visits-style</h2>
  </Link>
);

const Header = styled(AppBar)`
  z-index: 100;
  a {
    transition: color 150ms ease-in-out;
    &:hover, &.active {
      color: ${({ theme }) => theme.primary};
    }
  }

  ${mediaMobile} {
    min-height: 2.625rem;
    nav > button {
      height: 2.625rem;
      width: 2.625rem;
    }
  }
`;

export default function Topbar({ current }: { current: string }) {
  function renderMenu({ allMdx }: any) {
    const list = allMdx.nodes
      .sort((a: any, b: any) => a.frontmatter.title > b.frontmatter.title);
    const MenuList = list.map((node: any) => {
      return (
        <li key={node.fields.slug}>
          <Link
            className={node.fields.slug === current ? 'active' : ''}
            to={node.fields.slug}
          >
            {node.frontmatter.title}
          </Link>
        </li>
      );
    })
    return (<ul>{MenuList}</ul>);
  }

  return (
    <Header
      brand={Logo}
      color="dark"
      align="right"
      fixed
    >
      <StaticQuery
        query={pageQuery}
        render={renderMenu}
      />
    </Header>
  );
}
