import * as React from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';
import { GoMarkGithub } from 'react-icons/go';
// @ts-ignore
import AppBar from '@components/AppBar';

import LogoImage from '../Logo';

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
      }
    }
  }
}
`;

const Logo = (
<Link to="/">
  <LogoImage />
</Link>
);

export default function Topbar({ current }: { current: string }) {
  let target = current;

  if (target.indexOf('/') > -1) {
    target = target.substr(0, target.indexOf('/'));
  }

  function renderMenu({ allMdx }: any) {
    const list = allMdx.edges.map(({ node }: any) => node)
      .sort((a: any, b: any) => a.frontmatter.title > b.frontmatter.title);
    const MenuList = list.map((node: any) => {
      return (
        <AppBar.Item key={node.id}>
          <Link
            className={node.fields.slug === `/${target}/` ? 'active' : ''}
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
      sticky
    >
      <StaticQuery
        query={pageQuery}
        render={renderMenu}
      />
      <a
        href="https://github.com/visits-works/visits-style"
        target="_blank"
        style={{ fontSize: '1.5rem' }}
      >
        <GoMarkGithub />
      </a>
    </AppBar>
  );
}
