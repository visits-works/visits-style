import React from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';
import styled from 'styled-components';
// @ts-ignore
import { Col, SideMenu, MenuList } from '@components';
// @ts-ignore
import { mediaMobile } from '@utils';
import { convertTitleToId } from '../H2';

const Wrapper = styled(Col)`
  width: 250px;
  flex: 0 250px;
  padding: 1.5rem !important;
  background-color: ${({ theme }) => theme.background};

  ${mediaMobile`
    width: 100%;
    flex: 1;
  `}
`;

const pageQuery = graphql`
  query {
    allMdx(
      sort: { fields: [fields___slug], order: ASC }
    ) {
      edges {
        node {
          headings {
            value
            depth
          }
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

  function renderMenuItem({ node }: any) {
    const headings = node.headings ? node.headings.filter((item: any) => item.depth === 2) : null;
    const isActive = node.fields.slug === `/${current}`;
    return (
      <li key={node.fields.slug}>
        <Link to={node.fields.slug} className={isActive ? 'active' : ''}>
          {node.frontmatter.title}
        </Link>
        {(headings.length && isActive) ? (
          <ul>
            {headings.map((item: any) => {
              const url = `${node.fields.slug}#${convertTitleToId(item.value)}`;
              return (
                <li key={url}>
                  <Link to={url}>{item.value}</Link>
                </li>
              );
            })}
          </ul>
        ) : null}
      </li>
    );
  }

  function renderSideBar({ allMdx }: any) {
    const menuList = allMdx.edges
      .filter(({ node }: any) => node.fields.slug.indexOf(target) > -1);
    return (
      <Wrapper narrow>
        <SideMenu>
          <MenuList>
            {menuList.map(renderMenuItem)}
          </MenuList>
        </SideMenu>
      </Wrapper>
    );
  }

  return (
    <StaticQuery
      query={pageQuery}
      render={renderSideBar}
    />
  );
}