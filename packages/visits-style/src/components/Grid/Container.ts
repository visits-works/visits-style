import styled, { css } from 'styled-components';
import { mediaFullHD, mediaTablet, mediaDesktop, mediaMobile } from '../../utils/media';

interface Props {
  /**  */
  fluid?: boolean;
}

function setResponsive({ fluid }: Props): any {
  if (fluid) {
    return css`
      ${mediaFullHD} {
        padding-right: 0.75rem;
        padding-left: 0.75rem;
      }
      ${mediaDesktop} {
        padding-right: 0.75rem;
        padding-left: 0.75rem;
      }
      ${mediaMobile} {
        padding-right: 0.5rem;
        padding-left: 0.5rem;
      }
    `;
  }

  return css`
    margin-right: auto;
    margin-left: auto;
    ${mediaFullHD} {
      max-width: ${({ theme }: any) => theme.fullhd - (2 * theme.gutter)}px;
    }
    ${mediaDesktop} {
      max-width: ${({ theme }: any) => theme.desktop - (2 * theme.gutter)}px;
    }
    ${mediaTablet} {
      max-width: ${({ theme }: any) => theme.tablet - (2 * theme.smallGutter)}px;
    }
    ${mediaMobile} {
      max-width: ${({ theme }: any) => theme.mobile - (2 * theme.smallGutter)}px;
    }
  `;
}

const Container = styled.div<Props>`
  position: relative;
  width: 100%;

  ${setResponsive}
`;
Container.displayName = 'Container';
Container.defaultProps = {
  fluid: false,
};

export default Container;
