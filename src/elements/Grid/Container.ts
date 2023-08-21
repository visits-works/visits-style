import { styled, css } from 'styled-components';
import { mediaUntilFullHD, mediaDesktop, mediaMobile, mediaTablet } from '../../utils/media';

export interface Props {
  /**  */
  fluid?: boolean;
}

function setGap(width: string, gap: number) {
  return parseInt(width.replace('px', ''), 10) - (2 * gap);
}

function setResponsive({ fluid }: Props): any {
  if (fluid) {
    return css`
      padding-right: 0.75rem;
      padding-left: 0.75rem;
      ${mediaTablet} {
        padding-right: 0.5rem;
        padding-left: 0.5rem;
      }
    `;
  }

  return css`
    margin-right: auto;
    margin-left: auto;

    ${mediaUntilFullHD} {
      max-width: ${({ theme }) => setGap(theme.media.fullhd, theme.gutter)}px;
    }
    ${mediaDesktop} {
      max-width: ${({ theme }) => setGap(theme.media.desktop, theme.gutter)}px;
    }
    ${mediaTablet} {
      max-width: ${({ theme }) => setGap(theme.media.tablet, theme.smallGutter)}px;
    }
    ${mediaMobile} {
      max-width: ${({ theme }) => setGap(theme.media.mobile, theme.smallGutter)}px;
    }
  `;
}
export default styled.div.withConfig({ shouldForwardProp: (name) => name !== 'fluid' })<Props>`
  position: relative;
  width: 100%;

  ${setResponsive}
`;
