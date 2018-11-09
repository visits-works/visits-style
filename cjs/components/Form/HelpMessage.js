"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const styled_1 = __importDefault(require("../../styled"));
const Message = styled_1.default.span `
  font-size: 0.8rem;
  ${({ error, theme }) => error ? `color: ${theme.danger};` : `color: ${theme.textLight};`};
`;
function HelpMessage(help, error) {
    if (error) {
        return (react_1.default.createElement(Message, { error: true }, error));
    }
    if (help) {
        return (react_1.default.createElement(Message, null, help));
    }
}
exports.default = HelpMessage;
