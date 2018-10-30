import * as React from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';
// @ts-ignore
import AppBar from '@components/AppBar';

export const isActive = (route: string) => (match: any, location: any) =>
  (match && match.url === location.pathname) ||
  (location.pathname.startsWith(route) && route !== '/')


const pageQuery = graphql`
query {
  allMdx (filter:{ frontmatter : { menu: { eq: true } } }) {
    edges {
      node {
        id
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
}
`;

const Logo = (
<Link to="/">
  <h2 style={{ fontSize: '1.25rem', margin: 0 }}>Visits-style</h2>
</Link>
);

export default function Topbar({ current }: { current: string }) {
  function renderMenu({ allMdx }: any) {
    const list = allMdx.edges.map(({ node }: any) => node)
      .sort((a: any, b: any) => a.frontmatter.title > b.frontmatter.title);
    const MenuList = list.map((node: any) => {
      return (
        <AppBar.Item key={node.id}>
          <Link
            className={node.parent.relativePath === current ? 'active' : ''}
            to={node.fields.slug}
          >
            {node.frontmatter.title}
          </Link>
        </AppBar.Item>
      );
    })
    return (<ul>{MenuList}</ul>);
  }

  return (
    <AppBar
      brand={Logo}
      color="dark"
      style={{ zIndex: 100 }}
      fixed
    >
      <StaticQuery
        query={pageQuery}
        render={renderMenu}
      />
    </AppBar>
  );
}
