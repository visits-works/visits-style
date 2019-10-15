import React from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';
import styled from 'styled-components';
import { Col, mediaTablet } from 'visits-style';
import { convertTitleToId } from '../H2';

const Wrapper = styled(Col)`
  position: sticky;
  padding: 0;
  background-color: ${({ theme }) => theme.background};
  flex-direction: column;
  top: 3.25rem;
  padding: 0.85rem;

  ul {
    padding-left: 1.5rem;
  }

  li {
    display: block;
    list-style-type: none;
    padding: 0.625rem 0.325rem;

    a {
      color: ${({ theme }) => theme.text};
      cursor: pointer;
      padding: 0.325rem 0.625rem;

      &:hover {
        opacity: 0.625;
      }
    }
  }

  ${mediaTablet} {
    position: relative;
    flex-direction: row;
    flex-wrap: nowrap;
    top: 0;
    width: 100%;
    max-width: 100%;
    overflow-x: auto;
    flex-basis: 100%;
    max-width: 100%;

    ul {
      display: flex;
      flex-direction: row;
    }
  }
`;

const pageQuery = graphql`
  query {
    allMdx(
      sort: { fields: [fields___slug], order: ASC }
    ) {
      nodes {
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
        parent {
          ... on File {
            relativePath
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

  function renderMenuItem(node: any) {
    const headings = node.headings ? node.headings.filter((item: any) => item.depth === 2) : null;
    const isActive = node.parent.relativePath === current;
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
    const menuList = allMdx.nodes
      .filter((node: any) => node.fields.slug.indexOf(target) > -1);
    return (
      <Wrapper as="ul" size={2} auto>
        {menuList.map(renderMenuItem)}
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
