"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const styled_1 = __importStar(require("../../styled"));
const media_1 = require("../../utils/media");
function parcentage(value) {
    if (!value)
        return 0;
    if (value >= 12)
        return 100;
    return Math.ceil((value / 12) * 100 * 100000) / 100000;
}
function renderSize({ size, narrow, auto, offset }) {
    if (narrow)
        return null;
    if (!size || size < 1 || size > 12) {
        return `
      flex-basis: 0;
      flex-grow: 1;
      flex-shrink: 1;
    `;
    }
    else {
        const value = parcentage(size);
        const offVal = offset ? parcentage(offset) : 0;
        return styled_1.css `
      flex: none;
      width: ${value}%;
      ${offset ? `margin-left: ${offVal}%;` : ''}
      ${auto ? media_1.mediaMobile `
        width: ${(value > 33 ? 100 : value * 3)}%;
        ${offset ? `margin-left: 0;` : ''}
      ` : ''}
    `;
    }
}
const Col = styled_1.default.div `
  display: block;
  min-height: 1px;
  max-width: 100%;

  ${({ narrow }) => narrow ? 'flex: none;' : ''}
  ${({ offset }) => offset ? `margin-left: ${parcentage(offset)}%;` : ''}

  ${renderSize}

  padding: 0.75rem;

  ${media_1.mediaTablet `
    padding: 0.5rem;
  `}

  ${media_1.mediaMobile `
    padding: 0.25rem;
  `}
`;
Col.displayName = 'Col';
exports.default = Col;
