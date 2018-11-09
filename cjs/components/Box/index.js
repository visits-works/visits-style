"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const styled_1 = __importDefault(require("../../styled"));
const findColorInvert_1 = __importDefault(require("../../utils/findColorInvert"));
const Box = styled_1.default.div `
  position: relative;
  display: flex;
  flex-direction: column;
  ${({ borderless, theme }) => borderless ? `` : `border: 1px solid ${theme.border};`}
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  border-radius: 3px;
  width: 100%;

  min-width: 0;
  word-wrap: break-word;

  ${({ color, theme }) => {
    if (!color)
        return '';
    const target = theme[color] || color;
    const invertColor = findColorInvert_1.default(theme, target);
    return `background-color: ${target}; color: ${invertColor};`;
}}
`;
Box.displayName = 'Box';
exports.default = Box;
