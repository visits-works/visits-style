"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const st = __importStar(require("styled-components"));
const { default: styled, css, keyframes, ThemeProvider, } = st;
exports.css = css;
exports.keyframes = keyframes;
exports.ThemeProvider = ThemeProvider;
exports.default = styled;
