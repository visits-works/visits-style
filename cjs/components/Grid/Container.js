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
const variables_1 = require("../../styles/variables");
function setResponsive({ fluid }) {
    if (fluid) {
        return styled_1.css `
      ${media_1.mediaMobile `
        margin-right: 0.5rem;
        margin-left: 0.5rem;
      `}
      ${media_1.mediaDesktop `
        margin-right: 0.75rem;
        margin-left: 0.75rem;
      `}
      ${media_1.mediaFullHD `
        margin-right: 0.75rem;
        margin-left: 0.75rem;
      `}
    `;
    }
    return styled_1.css `
    ${media_1.mediaMobile `
      max-width: 100%;
      margin-right: 3%;
      margin-left: 3%;
    `}
    ${media_1.mediaTablet `
      max-width: ${variables_1.tablet - (2 * variables_1.smallGutter)}px;
      margin-right: auto;
      margin-left: auto;
    `}
    ${media_1.mediaDesktop `
      max-width: ${variables_1.desktop - (2 * variables_1.gutter)}px;
      margin-right: auto;
      margin-left: auto;
    `}
    ${media_1.mediaFullHD `
      max-width: ${variables_1.fullhd - (2 * variables_1.gutter)}px;
      margin-right: auto;
      margin-left: auto;
    `}
  `;
}
const Container = styled_1.default.div `
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
exports.default = Container;
