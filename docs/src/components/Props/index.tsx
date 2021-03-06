import React from 'react';
import styled from 'styled-components';
import { Table, mediaMobile } from 'visits-style';

const FlexTable = styled(Table)`
  display: block;

  tr {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

  th, td {
    display: block;
    flex: 0 100px;
    width: 100px;
    word-wrap: break-word;

    &:nth-child(5) {
      flex: 6;
      width: auto;
    }
  }

  ${mediaMobile} {
    th, td {
      width: auto;
      &:nth-child(5) {
        flex: 0 100%;
      }
    }
  }
`;

export default function PropsTable({ fields }: any) {
  if (!fields || !fields.props.length) return null;
  if(!fields.props[0].length) return null;

  return (
    <FlexTable striped>
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
        {fields.props[0].map((item: any) => (
          <tr key={item.name}>
            <td>{item.name}</td>
            <td>{item.type}</td>
            <td>{`${item.required}`}</td>
            <td>{item.defaultValue || ''}</td>
            <td>{item.description}</td>
          </tr>
        ))}
      </tbody>
    </FlexTable>
  );
}
