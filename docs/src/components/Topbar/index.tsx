import * as React from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';
import { GoMarkGithub } from 'react-icons/go';
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
      }
    }
  }
}
`;

const Logo = (
<Link to="/">
  <svg xmlns="http://www.w3.org/2000/svg" width="120" height="25" viewBox="0 0 120 25">
    <path
      style={{ fill: 'currentColor', fillRule: 'evenodd' }}
      d="M191.083,3755.6L183,3731.43h4.412l6.4,20.4h0.1l6.2-20.4h4.008L196.4,3755.6h-5.321Zm24.788,0h-3.94v-24.17h3.94v24.17Zm12.764-18.16c0,5.84,13.034,2.5,13.034,11.25,0,5.24-4.244,7.31-8.891,7.31-4.817,0-8.555-1.7-9.094-7.18l3.638-.53c0.538,2.47,1.582,4.6,5.523,4.6,2.425,0,4.883-.8,4.883-3.67,0-6.11-13.033-2.17-13.033-11.31,0-4.37,3.671-6.91,8.487-6.91,4.277,0,7.813,1.57,8.285,6.94l-3.638.44c-0.336-2.31-1.279-4.21-4.681-4.21C229.948,3734.17,228.635,3735.51,228.635,3737.44Zm25.294,18.16h-3.941v-24.17h3.941v24.17Zm15.323,0v-20.9h-7.308v-3.27h18.489v3.27h-7.24v20.9h-3.941Zm20.713-18.16c0,5.84,13.034,2.5,13.034,11.25,0,5.24-4.244,7.31-8.891,7.31-4.816,0-8.555-1.7-9.093-7.18l3.637-.53c0.538,2.47,1.583,4.6,5.523,4.6,2.425,0,4.883-.8,4.883-3.67,0-6.11-13.033-2.17-13.033-11.31,0-4.37,3.671-6.91,8.487-6.91,4.277,0,7.813,1.57,8.285,6.94l-3.637.44c-0.337-2.31-1.28-4.21-4.682-4.21C291.279,3734.17,289.965,3735.51,289.965,3737.44Z"
      transform="translate(-183 -3731)"
    />
  </svg>
</Link>
);

export default function Topbar({ current }: { current: string }) {
  let target = current;

  if (target.indexOf('/') > -1) {
    target = target.substr(0, target.indexOf('/'));
  }

  function renderMenu({ allMdx }: any) {
    const MenuList = allMdx.edges.map(({ node }: any) => {
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
      style={{ zIndex: 10 }}
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
