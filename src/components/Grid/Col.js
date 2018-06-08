// @flow
import styled, { type ReactComponentStyled } from 'styled-components';

type SizeType = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

type Props = {
  narrow?: string,
  size?: SizeType,
  offset?: SizeType,
}

export function parcentage(value?: SizeType) {
  if (!value) return 0;
  return ((value / 12) * 100).toFixed(6);
}

export function renderSize({ size }: Props) {
  if (!size || size < 1 || size > 12) {
    return `
      flex: 0 0 auto;
      width: auto;
      max-width: none;
    `;
  } else {
    const value = parcentage(size);
    return `
      width: 100%;
      flex: 0 0 ${value}%;
      max-width: ${value}%;
    `;
  }
}

const Col: ReactComponentStyled<Props> = styled.div`
  position: relative;
  min-height: 1px;

  ${({ narrow }) => narrow ? 'flex: none;' : ''}
  ${({ offset }) => offset ? `margin-left: ${parcentage(offset)}%;` : ''}

  ${renderSize}
`;

Col.displayName = 'Col';

export default Col;
