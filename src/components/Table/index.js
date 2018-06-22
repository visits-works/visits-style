// @flow
import styled, { css } from 'styled-components';

function setSize({ size }: Props) {
  switch(size) {
    case 'small':
      return 'padding: 0.3rem;';
    default:
      return 'padding: 0.75rem;';
  }
}

const stripedStyle = css`
  tbody > tr:nth-child(odd) {
    background-color: rgba(0, 0, 0, 0.02);
  }
`;

const hoverStyle = css`
  tbody > tr:hover {
    background-color: rgba(0, 0, 0, 0.04);
  }
`;

type Props = {
  size?: SizeType,
  full?: boolean,
  headerStyle?: any,
  bordered?: boolean,
  borderless?: boolean,
  striped?: boolean,
  hover?: boolean,
  theme: ThemeType,
}

const Table = styled.table`
  display: block;
  ${({ full }) => full ? 'width: 100%;' : ''}
  max-width: 100%;
  margin-bottom: 1rem;
  background-color: transparent;

  -webkit-overflow-scrolling: touch;
  -ms-overflow-style: -ms-autohiding-scrollbar;

  td, th {
    vertical-align: top;
    padding: 0.75rem;
    ${({ theme, bordered }) => bordered ? `
      border: 1px solid ${theme.border};
    ` : `
      border: 1px solid ${theme.border};
    `}
    border-width: 0 0 1px;
  }

  th { white-space: nowrap; }

  ${({ striped }) => striped ? stripedStyle : ''}
  ${({ hover }) => hover ? hoverStyle : ''}

  ${({ headerStyle }) => headerStyle ? css`
    th {
      ${headerStyle}
    }
  ` : ''}
`;

export default Table;
