"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const styled_1 = __importDefault(require("../../styled"));
const Code = styled_1.default.code `
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.danger};
  font-size: .875em;
  font-weight: 400;
  padding: .25em .5em .25em;
`;
Code.displayName = 'Code';
exports.default = Code;
