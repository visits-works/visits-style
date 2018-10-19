import React from 'react';
import { graphql, StaticQuery } from 'gatsby';

const pageQuery = graphql`
{
  allMdx {
    edges {
      node {
        id
      }
    }
  }
}
`;

export default function PropsTable({ of: component }) {
  console.log(component.name);
  function renderSideBar(data) {
    console.log(data);
    return null;
  }

  return (
    <StaticQuery
      query={pageQuery}
      render={renderSideBar}
    />
  );
}
