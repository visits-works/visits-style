import React from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';
import styled from 'styled-components';
// @ts-ignore
import { Col, SideMenu, MenuList } from '@components';
// @ts-ignore
import { mediaMobile } from '@utils';

const Menu = styled(SideMenu)`
  width: 250px;
  padding: 1.5rem;

  ${mediaMobile`
    position: relative;
    top: 0;
    width: calc(100vw - 3rem);
  `}
`;

const pageQuery = graphql`
  query {
    allMdx {
      edges {
        node {
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

export default function Sidebar({ current }: any) {
  if (current === '') return null;
  let target = current;

  if (target.indexOf('/') > -1) {
    target = target.substr(0, target.indexOf('/'));
  }

  function renderSideBar({ allMdx }: any) {
    const menuList = allMdx.edges.filter(
      ({ node }: any) => node.fields.slug.indexOf(target) > -1 && node.fields.slug !== `/${target}/`
    ).sort((a: any, b: any) => a.node.frontmatter.title > b.node.frontmatter.title);
    return (
      <Col narrow>
        <Menu>
          <MenuList>
            {menuList.map(({ node }: any) => (
              <li key={node.fields.slug}>
                <Link to={node.fields.slug} className={node.fields.slug === `/${current}` ? 'active' : ''}>
                  {node.frontmatter.title}
                </Link>
              </li>
            ))}
          </MenuList>
        </Menu>
      </Col>
    );
  }

  return (
    <StaticQuery
      query={pageQuery}
      render={renderSideBar}
    />
  );
}
