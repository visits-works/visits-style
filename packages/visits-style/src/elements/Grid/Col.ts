import styled, { css } from 'styled-components';
import { mediaTablet, mediaDesktop, mediaMobile } from '../../utils/media';
import { ColSizeType } from '../../types';

interface ColProps {
  /** 1-12のサイズ */
  size?: ColSizeType;
  /** 1-12の左のoffset */
  offset?: ColSizeType;
  /** 1-12基準のサイズを画面サイズのよって可変にする */
  auto?: boolean;
}

const sizes = [
  'auto',
  '8.3333333%',
  '16.666667%',
  '25%',
  '33.333333%',
  '41.666667%',
  '50%',
  '58.333333%',
  '66.666667%',
  '75%',
  '83.333333%',
  '91.666667%',
  '100%',
];

function setAutoSize({ size, auto }: ColProps) {
  if (!auto || !size) return undefined;
  const mobileSize = size >= 4 ? sizes[12] : sizes[Math.round(size * 3)];
  const desktopSize = size >= 8 ? sizes[12] : sizes[Math.round(size * 1.5)];
  return css`
    ${mediaDesktop} {
      flex-basis: ${desktopSize};
      max-width: ${desktopSize};
    }
    ${mediaMobile} {
      flex-basis: ${mobileSize};
      max-width: ${mobileSize};
    }
  `;
}

const Col = styled.div<ColProps>`
  display: flex;
  flex: 0 0 auto;
  flex-direction: row;
  flex-wrap: wrap;
  padding: ${({ theme }) => theme.gutter / 2}px;

  ${({ size }) => (
    size
      ? { flexBasis: sizes[size], maxWidth: sizes[size] }
      : { flexGrow: 1, flexBasis: 0, maxWidth: '100%' }
  )}

  ${({ offset }) => (offset ? { marginLeft: sizes[offset] } : undefined)}

  ${mediaTablet} {
    padding: ${({ theme }) => theme.smallGutter / 2}px;
  }
  ${setAutoSize}
`;
Col.defaultProps = {
  size: 0,
  offset: 0,
};

export default Col;
