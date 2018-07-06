import styled, { css } from 'styled-components';
import { mediaMobile } from '../../utils/media';
import { ColSizeType } from '../../types';

export interface ColProps {
  narrow?: boolean,
  size?: ColSizeType,
  offset?: ColSizeType,
}

function parcentage(value?: ColSizeType) {
  if (!value) return 0;
  if (value >= 12) return 100;
  return Math.ceil((value / 12) * 100 * 100000) / 100000;
}

function renderSize({ size, narrow }: ColProps) {
  if (narrow) return null;
  if (!size || size < 1 || size > 12) {
    return `
      flex-basis: 0;
      flex-grow: 1;
      flex-shrink: 1;
    `;
  } else {
    const value = parcentage(size);
    return css`
      flex: none;
      width: ${value}%;
    `;
  }
}

const Col = styled.div`
  display: block;
  min-height: 1px;
  max-width: 100%;

  ${({ narrow }) => narrow ? 'flex: none;' : ''}
  ${({ offset }) => offset ? `margin-left: ${parcentage(offset)}%;` : ''}

  ${renderSize}
  padding: 0.75rem;

  ${mediaMobile`
    padding: 0.5rem;
  `}
`;

Col.displayName = 'Col';

export default Col;
