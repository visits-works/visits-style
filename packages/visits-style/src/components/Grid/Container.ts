import styled, { css } from '../../styled';
import { mediaFullHD, mediaTablet, mediaDesktop, mediaMobile } from '../../utils/media';
import { fullhd, desktop, tablet, gutter, smallGutter } from '../../styles/variables';

interface Props {
  /**  */
  fluid?: boolean;
}

function setResponsive({ fluid }: Props): any {
  if (fluid) {
    return css`
      ${mediaMobile`
        margin-right: 0.5rem;
        margin-left: 0.5rem;
      `}
      ${mediaDesktop`
        margin-right: 0.75rem;
        margin-left: 0.75rem;
      `}
      ${mediaFullHD`
        margin-right: 0.75rem;
        margin-left: 0.75rem;
      `}
    `;
  }

  return css`
    ${mediaMobile`
      margin-right: 3%;
      margin-left: 3%;
    `}
    ${mediaTablet`
      max-width: ${tablet - (2 * smallGutter)}px;
      margin-right: auto;
      margin-left: auto;
    `}
    ${mediaDesktop`
      max-width: ${desktop - (2 * gutter)}px;
      margin-right: auto;
      margin-left: auto;
    `}
    ${mediaFullHD`
      max-width: ${fullhd - (2 * gutter)}px;
      margin-right: auto;
      margin-left: auto;
    `}
  `;
}

const Container = styled.div<Props>`
  position: relative;
  margin: 0 auto;
  width: auto;
  max-width: 100%;

  ${setResponsive}
`;
Container.displayName = 'Container';
Container.defaultProps = {
  fluid: false,
};

export default Container;
