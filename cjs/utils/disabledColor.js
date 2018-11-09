"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const styled_1 = require("../styled");
const transparentize_1 = __importDefault(require("polished/lib/color/transparentize"));
function disabledColor(theme) {
    const textColor = transparentize_1.default(0.15, theme.textDark);
    const backColor = transparentize_1.default(0.55, theme.border);
    return styled_1.css `
    pointer-events: none;
    box-shadow: none;
    color: ${textColor};
    background-color: ${backColor};
  `;
}
exports.default = disabledColor;
