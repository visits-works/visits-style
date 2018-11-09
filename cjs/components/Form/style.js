"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const styled_1 = require("../../styled");
const disabledColor_1 = __importDefault(require("../../utils/disabledColor"));
exports.default = styled_1.css `
  font-size: 1em;
  text-align: left;
  color: inherit;

  &:disabled, [disabled] {
    ${({ theme }) => disabledColor_1.default(theme)}
  }
  &:readonly {
    ${({ theme }) => disabledColor_1.default(theme)}
  }
`;
