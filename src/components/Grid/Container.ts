import * as React from 'react';
import styled, { css, StyledComponentClass } from 'styled-components';
import { mediaFullHD, mediaTablet, mediaDesktop, mediaMobile } from '../../utils/media';
import { fullhd, desktop, tablet, gutter, smallGutter } from '../../styles/variables';

interface Props {
  fluid?: boolean;
}

function setResponsive({ fluid }: Props) {
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
      margin-right: 3%;
      margin-left: 3%;
    `}
    ${mediaDesktop`
      max-width: ${desktop - (2 * gutter)}px;
      margin-right: 5%;
      margin-left: 5%;
    `}
    ${mediaFullHD`
      max-width: ${fullhd - (2 * gutter)}px;
      margin-right: 5%;
      margin-left: 5%;
    `}
  `;
}

const Container = styled.div`
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
