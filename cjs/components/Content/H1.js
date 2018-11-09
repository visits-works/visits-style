"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const styled_1 = __importDefault(require("../../styled"));
const H1 = styled_1.default.h1 `
  font-size: 2em;
  margin-bottom: 0.5em;
  padding-left: 1rem;

  border-left: 1rem solid;
  border-bottom: 1px solid;
  border-color: ${({ theme }) => theme.border};
`;
H1.displayName = 'H1';
exports.default = H1;
