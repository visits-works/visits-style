import styled, { css } from 'styled-components';
import { mediaFullHD, mediaTablet, mediaDesktop, mediaMobile } from '../../utils/media';

function setResponsive(_ref) {
  var fluid = _ref.fluid;

  if (fluid) {
    return css(["", "{padding-right:0.5rem;padding-left:0.5rem;}", "{padding-right:0.75rem;padding-left:0.75rem;}", "{padding-right:0.75rem;padding-left:0.75rem;}"], mediaMobile, mediaDesktop, mediaFullHD);
  }

  return css(["margin-right:auto;margin-left:auto;", "{max-width:", "px;}", "{max-width:", "px;}", "{max-width:", "px;}", "{max-width:", "px;}"], mediaMobile, function (_ref2) {
    var theme = _ref2.theme;
    return theme.mobile - 2 * theme.smallGutter;
  }, mediaTablet, function (_ref3) {
    var theme = _ref3.theme;
    return theme.tablet - 2 * theme.smallGutter;
  }, mediaDesktop, function (_ref4) {
    var theme = _ref4.theme;
    return theme.desktop - 2 * theme.gutter;
  }, mediaFullHD, function (_ref5) {
    var theme = _ref5.theme;
    return theme.fullhd - 2 * theme.gutter;
  });
}

var Container =
/*#__PURE__*/
styled.div.withConfig({
  displayName: "Container",
  componentId: "sc-1lmpgdg-0"
})(["position:relative;width:100%;", ""], setResponsive);
Container.displayName = 'Container';
Container.defaultProps = {
  fluid: false
};
export default Container;