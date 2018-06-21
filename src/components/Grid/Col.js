// @flow
import styled, { css } from 'styled-components';
import { mediaFullHD, mediaMobile } from '../../utils';

type ColSizeType = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

type Props = {
  narrow?: string,
  size?: ColSizeType,
  offset?: ColSizeType,
}

export function parcentage(value?: ColSizeType) {
  if (!value) return 0;
  return Math.ceil((value / 12) * 100 * 100000) / 100000;
}

export function renderSize({ size, narrow }: Props) {
  if (narrow) return null;
  if (!size || size < 1 || size > 12) {
    return `
      flex-basis: 0;
      flex-grow: 1;
      flex-shrink: 1;
    `;
  } else {
    const value = parcentage(size);
    const mobileSize = value * 3;
    return css`
      flex: none;
      width: ${value}%;

      ${mediaMobile`
        width: ${mobileSize}%;
      `}
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
