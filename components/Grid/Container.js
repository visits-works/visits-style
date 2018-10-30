function _templateObject7() {
  var data = _taggedTemplateLiteralLoose(["\n      max-width: ", "px;\n      margin-right: auto;\n      margin-left: auto;\n    "]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteralLoose(["\n      max-width: ", "px;\n      margin-right: auto;\n      margin-left: auto;\n    "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteralLoose(["\n      max-width: ", "px;\n      margin-right: auto;\n      margin-left: auto;\n    "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteralLoose(["\n      max-width: 100%;\n      margin-right: 3%;\n      margin-left: 3%;\n    "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteralLoose(["\n        margin-right: 0.75rem;\n        margin-left: 0.75rem;\n      "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteralLoose(["\n        margin-right: 0.75rem;\n        margin-left: 0.75rem;\n      "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n        margin-right: 0.5rem;\n        margin-left: 0.5rem;\n      "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

import styled, { css } from '../../styled';
import { mediaFullHD, mediaTablet, mediaDesktop, mediaMobile } from '../../utils/media';
import { fullhd, desktop, tablet, gutter, smallGutter } from '../../styles/variables';

function setResponsive(_ref) {
  var fluid = _ref.fluid;

  if (fluid) {
    return css(["", " ", " ", ""], mediaMobile(_templateObject()), mediaDesktop(_templateObject2()), mediaFullHD(_templateObject3()));
  }

  return css(["", " ", " ", " ", ""], mediaMobile(_templateObject4()), mediaTablet(_templateObject5(), tablet - 2 * smallGutter), mediaDesktop(_templateObject6(), desktop - 2 * gutter), mediaFullHD(_templateObject7(), fullhd - 2 * gutter));
}

var Container = styled.div.withConfig({
  displayName: "Container",
  componentId: "sc-1lmpgdg-0"
})(["position:relative;margin:0 auto;width:auto;max-width:100%;", ""], setResponsive);
Container.displayName = 'Container';
Container.defaultProps = {
  fluid: false
};
export default Container;