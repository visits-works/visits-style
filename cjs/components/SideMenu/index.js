"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const styled_1 = __importDefault(require("../../styled"));
exports.SideMenu = styled_1.default.aside `
  font-size: 1rem;
`;
exports.SideMenu.displayName = 'SideMenu';
exports.MenuList = styled_1.default.ul `
  line-height: 1.25;

  a {
    display: block;
    padding: 0.5em;
    border-radius: 4px;
    color: ${({ theme }) => theme.text};
    &:hover {
      color: ${({ theme }) => theme.primary};
    }
    &.active {
      color: ${({ theme }) => theme.primary};
    }
  }

  li {
    ul {
      margin: 0.75em;
      padding-left: 0.75em;
    }
  }
`;
exports.MenuList.displayName = 'MenuList';
exports.MenuLabel = styled_1.default.p `
  font-size: 0.75em;
  letter-spacing: 0.1em;
  text-transform: uppercase;

  &:not(:first-child) {
    margin-top: 1em;
  }
  &:not(:last-child) {
    margin-bottom: 1em;
  }
`;
exports.MenuLabel.displayName = 'MenuLabel';
