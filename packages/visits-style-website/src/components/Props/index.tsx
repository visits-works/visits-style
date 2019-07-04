import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
// @ts-ignore
import { Table } from 'visits-style';

const pageQuery = graphql`
{
  allFile(filter: {ext: {eq: ".tsx"}}) {
    edges {
      node {
        fields {
          meta {
            name
            props {
              name
              description
              required
              type
            }
          }
        }
      }
    }
  }
}
`;

function findNode(meta: any[] | any, target: string): any {
  if (!meta) return null;

  if (Array.isArray(meta) && meta.length > 0) {
    const node = meta.filter(item => findNode(item, target));
    return node.length ? node[0] : null;
  } else if (typeof meta === 'object') {
    return meta.name === target ? meta : null;
  }

  return null;
}

export default function PropsTable({ name }: { name: string }) {
  function renderTable({ allFile }: any) {
    const nodes = allFile.edges;
    let target = null;
    for (let i = 0, len = nodes.length; i < len; i++) {
      if (!nodes[i].node.fields) continue;
      const node = findNode(nodes[i].node.fields.meta, name);
      if (node) {
        target = node;
        break;
      }
    }
    if (!target) return null;

    return (
      <Table striped>
        <thead>
          <tr>
            <th>name</th>
            <th>type</th>
            <th>required</th>
            <th>default</th>
            <th>description</th>
          </tr>
        </thead>
        <tbody>
          {target.props.map((item: any) => (
            <tr key={item.name}>
              <td>{item.name}</td>
              <td>{item.type}</td>
              <td>{`${item.required}`}</td>
              <td>{item.defaultValue}</td>
              <td>{item.description}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  }

  return <StaticQuery query={pageQuery} render={renderTable} />;
}
