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
var _1 = __importDefault(require("."));
var ButtonGroup = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: inline-block;\n\n  &:not(:last-child) {\n    margin-right: 0.5rem;\n  }\n\n  ", " {\n    margin: 0;\n    border-radius: 0;\n\n    &:first-child {\n      border-top-left-radius: 4px;\n      border-bottom-left-radius: 4px;\n    }\n\n    &:not(:last-child) {\n      border-right-color: transparent;\n    }\n\n    &:last-child {\n      border-top-right-radius: 4px;\n      border-bottom-right-radius: 4px;\n    }\n  }\n"], ["\n  display: inline-block;\n\n  &:not(:last-child) {\n    margin-right: 0.5rem;\n  }\n\n  ", " {\n    margin: 0;\n    border-radius: 0;\n\n    &:first-child {\n      border-top-left-radius: 4px;\n      border-bottom-left-radius: 4px;\n    }\n\n    &:not(:last-child) {\n      border-right-color: transparent;\n    }\n\n    &:last-child {\n      border-top-right-radius: 4px;\n      border-bottom-right-radius: 4px;\n    }\n  }\n"])), _1.default);
ButtonGroup.displayName = 'ButtonGroup';
exports.default = ButtonGroup;
var templateObject_1;
