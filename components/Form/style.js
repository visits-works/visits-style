import { css } from '../../styled';
import disabledColor from '../../utils/disabledColor';
export default css(["font-size:1em;text-align:left;color:inherit;&:disabled,[disabled]{", "}&:readonly{", "}"], ({
  theme
}) => disabledColor(theme), ({
  theme
}) => disabledColor(theme));