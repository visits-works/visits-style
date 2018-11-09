"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const styled_1 = __importDefault(require("../../styled"));
const _1 = __importDefault(require("."));
const ButtonGroup = styled_1.default.div `
  display: inline-block;

  &:not(:last-child) {
    margin-right: 0.5rem;
  }

  ${_1.default} {
    margin: 0;
    border-radius: 0;

    &:first-child {
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
    }

    &:not(:last-child) {
      border-right-color: transparent;
    }

    &:last-child {
      border-top-right-radius: 4px;
      border-bottom-right-radius: 4px;
    }
  }
`;
ButtonGroup.displayName = 'ButtonGroup';
exports.default = ButtonGroup;
