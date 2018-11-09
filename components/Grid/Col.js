import styled, { css } from '../../styled';
import { mediaMobile, mediaTablet } from '../../utils/media';
function parcentage(value) {
    if (!value)
        return 0;
    if (value >= 12)
        return 100;
    return Math.ceil((value / 12) * 100 * 100000) / 100000;
}
function renderSize({ size, narrow, auto, offset }) {
    if (narrow)
        return null;
    if (!size || size < 1 || size > 12) {
        return `
      flex-basis: 0;
      flex-grow: 1;
      flex-shrink: 1;
    `;
    }
    else {
        const value = parcentage(size);
        const offVal = offset ? parcentage(offset) : 0;
        return css `
      flex: none;
      width: ${value}%;
      ${offset ? `margin-left: ${offVal}%;` : ''}
      ${auto ? mediaMobile `
        width: ${(value > 33 ? 100 : value * 3)}%;
        ${offset ? `margin-left: 0;` : ''}
      ` : ''}
    `;
    }
}
const Col = styled.div `
  display: block;
  min-height: 1px;
  max-width: 100%;

  ${({ narrow }) => narrow ? 'flex: none;' : ''}
  ${({ offset }) => offset ? `margin-left: ${parcentage(offset)}%;` : ''}

  ${renderSize}

  padding: 0.75rem;

  ${mediaTablet `
    padding: 0.5rem;
  `}

  ${mediaMobile `
    padding: 0.25rem;
  `}
`;
Col.displayName = 'Col';
export default Col;
