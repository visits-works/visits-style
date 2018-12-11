function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n      max-width: ", "px;\n    "]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n      max-width: ", "px;\n    "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n      max-width: ", "px;\n    "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n      max-width: ", "px;\n    "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n        padding-right: 0.75rem;\n        padding-left: 0.75rem;\n      "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n        padding-right: 0.75rem;\n        padding-left: 0.75rem;\n      "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n        padding-right: 0.5rem;\n        padding-left: 0.5rem;\n      "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import styled, { css } from 'styled-components';
import { mediaFullHD, mediaTablet, mediaDesktop, mediaMobile } from '../../utils/media';

function setResponsive(_ref) {
  var fluid = _ref.fluid;

  if (fluid) {
    return css(["", " ", " ", ""], mediaMobile(_templateObject()), mediaDesktop(_templateObject2()), mediaFullHD(_templateObject3()));
  }

  return css(["margin-right:auto;margin-left:auto;", " ", " ", " ", ""], mediaMobile(_templateObject4(), function (_ref2) {
    var theme = _ref2.theme;
    return theme.media.mobile - 2 * theme.smallGutter;
  }), mediaTablet(_templateObject5(), function (_ref3) {
    var theme = _ref3.theme;
    return theme.media.tablet - 2 * theme.smallGutter;
  }), mediaDesktop(_templateObject6(), function (_ref4) {
    var theme = _ref4.theme;
    return theme.media.desktop - 2 * theme.gutter;
  }), mediaFullHD(_templateObject7(), function (_ref5) {
    var theme = _ref5.theme;
    return theme.media.fullhd - 2 * theme.gutter;
  }));
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