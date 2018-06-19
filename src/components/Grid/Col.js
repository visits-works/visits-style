// @flow
import styled, { type ReactComponentStyled } from 'styled-components';
import { fullhd, tablet } from '../../styles/variables';

type SizeType = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

type Props = {
  narrow?: string,
  size?: SizeType,
  offset?: SizeType,
}

export function parcentage(value?: SizeType, volume?: number = 1) {
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
    return `
      flex: none;
      width: ${value}%;
    `;
  }
}

const Col: ReactComponentStyled<Props> = styled.div`
  display: block;
  min-height: 1px;

  ${({ narrow }) => narrow ? 'flex: none;' : ''}
  ${({ offset }) => offset ? `margin-left: ${parcentage(offset)}%;` : ''}

  ${renderSize}

  @media (min-width: ${fullhd}px) {
    padding: 0.75rem;
  }

  @media (min-width: ${tablet}px) {
    padding: 0.5rem;
  }
`;

Col.displayName = 'Col';

export default Col;
