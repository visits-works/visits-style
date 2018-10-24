import { css } from '../../styled';
import disabledColor from '../../utils/disabledColor';
export default css(["font-size:1em;text-align:left;color:inherit;&:disabled,[disabled]{", "}&:readonly{", "}"], function (_ref) {
  var theme = _ref.theme;
  return disabledColor(theme);
}, function (_ref2) {
  var theme = _ref2.theme;
  return disabledColor(theme);
});