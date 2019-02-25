import styled, { css } from 'styled-components';
import Col from './Col';
import { mediaFullHD, mediaTablet } from '../../utils/media';

function renderGutter(_ref) {
  var noGutter = _ref.noGutter;

  if (noGutter) {
    return css(["margin-right:0;margin-left:0;> ", "{padding-right:0;padding-left:0;}"], Col);
  }

  return css(["", "{margin-left:-0.5rem;margin-right:-0.5rem;margin-top:-0.5rem;&:last-child{margin-bottom:-0.5rem;}&:not(:last-child){margin-bottom:0.5rem;}}", "{margin-left:-0.75rem;margin-right:-0.75rem;margin-top:-0.75rem;&:last-child{margin-bottom:-0.75rem;}&:not(:last-child){margin-bottom:0.75rem;}}"], mediaTablet, mediaFullHD);
}

var Row =
/*#__PURE__*/
styled.div.withConfig({
  displayName: "Row",
  componentId: "sc-1syuetm-0"
})(["display:flex;width:100%;flex-wrap:wrap;", " ", " ", ""], function (_ref2) {
  var vcenter = _ref2.vcenter;
  return vcenter ? 'align-items: center;' : '';
}, function (_ref3) {
  var center = _ref3.center;
  return center ? 'justify-content: center;' : '';
}, renderGutter);
Row.displayName = 'Row';
export default Row;