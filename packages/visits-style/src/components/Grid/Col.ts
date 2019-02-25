import styled, { css } from 'styled-components';
import { mediaMobile, mediaTablet } from '../../utils/media';
import { ColSizeType } from '../../types';

interface ColProps {
  /** 固定の幅を指定する場合 */
  narrow?: boolean;
  /** 1-12のサイズ */
  size?: ColSizeType;
  /** 1-12の左のoffset */
  offset?: ColSizeType;
  /** 1-12基準のサイズを画面サイズのよって可変にする */
  auto?: boolean;
}

function parcentage(value?: ColSizeType) {
  if (!value) return 0;
  if (value >= 12) return 100;
  return Math.ceil((value / 12) * 100 * 100000) / 100000;
}

function renderSize({ size, narrow, auto, offset }: ColProps) {
  if (narrow) return null;
  if (!size || size < 1 || size > 12) {
    return css`
      width: auto;
      max-width: auto;
    `;
  }

  const value = parcentage(size);
  const offVal = offset ? parcentage(offset) : 0;
  const autoSize = value > 33 ? 100 : value * 3;
  return css`
    width: ${value}%;
    max-width: ${value}%;
    ${offset ? `margin-left: ${offVal}%;` : {}}

    ${mediaMobile} {
      width: ${autoSize}%;
      max-width: ${autoSize}%;
      ${offset ? `margin-left: 0;` : {}}
    }
  `;
}

const Col = styled.div<ColProps>`
  display: block;
  min-height: 1px;

  ${({ narrow }) => narrow ? 'flex: none;' : {}}
  ${({ offset }) => offset ? `margin-left: ${parcentage(offset)}%;` : {}}

  ${renderSize}

  padding: 0.75rem;

  ${mediaTablet} {
    padding: 0.5rem;
  }
`;

Col.displayName = 'Col';

export default Col;
