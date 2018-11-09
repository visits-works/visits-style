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
function getColor({ theme, color }) {
    const value = (!color || color === 'light') ? theme.background : theme[color];
    return styled_1.css `
    border-color: ${value};
    border-right-color: ${theme.border};
    border-top-color: ${theme.border};
  `;
}
const Spinner = styled_1.default.div `
  display: inline-block;
  width: ${({ width }) => width ? width : '100%'};
  height: ${({ height }) => height ? height : '100%'};
  margin: 0;
  padding: 0;
  position: relative;

  &:after {
    display: block;
    top: 0;
    left: 0;
    animation: spin 750ms infinite linear;
    border: ${({ borderSize }) => borderSize} solid;
    border-radius: 100%;
    ${getColor}
    content: "";
    height: 100%;
    width: 100%;
    position: absolute;
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(359deg);
    }
  }
`;
Spinner.displayName = 'Spinner';
Spinner.defaultProps = {
    borderSize: '2px',
};
exports.default = Spinner;
