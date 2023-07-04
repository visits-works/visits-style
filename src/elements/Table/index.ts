import { styled,  css } from 'styled-components';
import { SizeType } from '../../types';

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

export interface Props {
  size?: SizeType;
  full?: boolean;
  headerStyle?: any;
  bordered?: boolean;
  striped?: boolean;
  hover?: boolean;
}

export default styled.table<Props>`
  ${({ full }) => (full ? css`width: 100%;` : undefined)}
  max-width: 100%;
  margin-bottom: 1rem;
  background-color: transparent;

  -webkit-overflow-scrolling: touch;
  -ms-overflow-style: -ms-autohiding-scrollbar;

  td, th {
    vertical-align: top;
    padding: 0.75rem;
    ${({ theme, bordered }) => (bordered ? css`
      border: 1px solid ${theme.border};
    ` : undefined)}
    border-width: 0 0 1px;
  }

  th { white-space: nowrap; }

  ${({ striped }) => (striped ? stripedStyle : undefined)}
  ${({ hover }) => (hover ? hoverStyle : undefined)}

  ${({ headerStyle }) => (headerStyle ? css`
    th {
      ${headerStyle}
    }
  ` : undefined)}
`;
