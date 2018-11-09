"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const transparentize_1 = __importDefault(require("polished/lib/color/transparentize"));
function boxShadow(size, color, amount) {
    const shadowColor = amount ? transparentize_1.default(amount, color) : color;
    return `box-shadow: 0 0 0 ${size} ${shadowColor};`;
}
exports.default = boxShadow;
