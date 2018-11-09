"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const styled_1 = __importStar(require("../../styled"));
const Col_1 = __importDefault(require("./Col"));
const media_1 = require("../../utils/media");
function renderGutter({ noGutter }) {
    if (noGutter) {
        return styled_1.css `
      margin-right: 0;
      margin-left: 0;

      > ${Col_1.default} {
        padding-right: 0;
        padding-left: 0;
      }
    `;
    }
    else {
        return styled_1.css `
      ${media_1.mediaTablet `
        margin-left: -0.5rem;
        margin-right: -0.5rem;
        margin-top: -0.5rem;

        &:last-child {
          margin-bottom: -0.5rem;
        }

        &:not(:last-child) {
          margin-bottom: 0.5rem;
        }
      `}

      ${media_1.mediaFullHD `
          margin-left: -0.75rem;
          margin-right: -0.75rem;
          margin-top: -0.75rem;

          &:last-child {
            margin-bottom: -0.75rem;
          }

          &:not(:last-child) {
            margin-bottom: 0.75rem;
          }
      `}
    `;
    }
}
const Row = styled_1.default.div `
  display: flex;
  max-width: 100%;
  flex-wrap: wrap;

  ${({ vcenter }) => vcenter ? 'align-items: center;' : ''}
  ${({ center }) => center ? 'justify-content: center;' : ''}

  ${renderGutter}
`;
Row.displayName = 'Row';
// Row.defaultProps = {
//   width: null,
//   multiline: false,
//   vcenter: false,
//   noGutter: false,
// };
exports.default = Row;
