import styled, { css } from 'styled-components';
import { mediaFullHD, mediaTablet, mediaDesktop, mediaMobile } from '../../utils/media';
import { mobile, fullhd, desktop, tablet, gutter, smallGutter } from '../../styles/variables';

interface Props {
  /**  */
  fluid?: boolean;
}

function setResponsive({ fluid }: Props): any {
  if (fluid) {
    return css`
      ${mediaMobile`
        padding-right: 0.5rem;
        padding-left: 0.5rem;
      `}
      ${mediaDesktop`
        padding-right: 0.75rem;
        padding-left: 0.75rem;
      `}
      ${mediaFullHD`
        padding-right: 0.75rem;
        padding-left: 0.75rem;
      `}
    `;
  }

  return css`
    margin-right: auto;
    margin-left: auto;
    ${mediaMobile`
      max-width: ${mobile - (2 * smallGutter)}px;
    `}
    ${mediaTablet`
      max-width: ${tablet - (2 * smallGutter)}px;
    `}
    ${mediaDesktop`
      max-width: ${desktop - (2 * gutter)}px;
    `}
    ${mediaFullHD`
      max-width: ${fullhd - (2 * gutter)}px;
    `}
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
