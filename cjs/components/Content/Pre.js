"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = __importDefault(require("styled-components"));
var Pre = styled_components_1.default.pre(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  -webkit-overflow-scrolling: touch;\n  overflow-x: auto;\n  padding: 1.25em 1.5em;\n  white-space: pre;\n  word-wrap: normal;\n\n  &:not(:last-child) {\n    margin-bottom: 1em;\n  }\n"], ["\n  -webkit-overflow-scrolling: touch;\n  overflow-x: auto;\n  padding: 1.25em 1.5em;\n  white-space: pre;\n  word-wrap: normal;\n\n  &:not(:last-child) {\n    margin-bottom: 1em;\n  }\n"])));
Pre.displayName = 'Pre';
exports.default = Pre;
var templateObject_1;
