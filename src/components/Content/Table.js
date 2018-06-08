// @flow
import styled from 'styled-components';

const Table = styled.table`
  margin: 30px 0 30px 30px;
  border-collapse: collapse;

  th, td {
    margin: 0;
    border: 1px solid ${({ theme }) => theme.content.table.border};
  }

  th {
    height: 36px;
    line-height: 36px;
    padding: 0 20px;
    text-align: justify;
    background-color: ${({ theme }) => theme.content.table.header};
  }

  td {
    padding: 10px 20px;
    white-space: pre-wrap;
  }
`;
Table.displayName = 'Table';

export default Table;