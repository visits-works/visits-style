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
var Content = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  color: ", ";\n\n  li + li {\n    margin-top: 0.25em;\n  }\n\n  p,\n  dl,\n  ol,\n  ul,\n  blockquote,\n  pre,\n  table {\n    &:not(:last-child) {\n      margin-bottom: 1em;\n    }\n  }\n\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    font-weight: 600;\n    line-height: 1.125;\n  }\n\n  h1 {\n    font-size: 2rem;\n    margin-bottom: 0.5em;\n  }\n\n  h2 {\n    font-size: 1.75em;\n    margin-bottom: 0.5714em;\n\n    &:not(:first-child) {\n      margin-top: 1.1428em;\n    }\n  }\n\n  h3 {\n    font-size: 1.5em;\n    margin-bottom: 0.6666em;\n\n    &:not(:first-child) {\n      margin-top: 1.3333em;\n    }\n  }\n\n  h4 {\n    font-size: 1.25em;\n    margin-bottom: 0.8em;\n  }\n\n  h5 {\n    font-size: 1.125em;\n    margin-bottom: 0.8888em;\n  }\n\n  h6 {\n    font-size: 1em;\n    margin-bottom: 1em;\n  }\n\n  ol {\n    list-style: decimal outside;\n    margin-left: 2em;\n    margin-top: 1em;\n  }\n\n  ul {\n    list-style: disc outside;\n    margin-left: 2em;\n    margin-top: 1em;\n    ul {\n      list-style-type: circle;\n      margin-top: 0.5em;\n      ul {\n        list-style-type: square;\n      }\n    }\n  }\n\n  dd {\n    margin-left: 2em;\n  }\n\n  table {\n    width: 100%;\n\n    td, th {\n      border: 1px solid ", ";\n      border-width: 0 0 1px;\n      padding: 0.5em 0.75em;\n      vertical-align: top;\n    }\n\n    th {\n      color: ", ";\n      text-align: left;\n    }\n\n    thead {\n      td, th {\n        border-width: 0 0 2px;\n        color: ", ";\n      }\n    }\n\n    tfoot {\n      td, th {\n        border-width: 2px 0 0;\n        color: ", ";\n      }\n    }\n\n    tbody > tr:last-child{\n      td, th {\n        border-bottom-width: 0;\n      }\n    }\n  }\n"], ["\n  color: ", ";\n\n  li + li {\n    margin-top: 0.25em;\n  }\n\n  p,\n  dl,\n  ol,\n  ul,\n  blockquote,\n  pre,\n  table {\n    &:not(:last-child) {\n      margin-bottom: 1em;\n    }\n  }\n\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    font-weight: 600;\n    line-height: 1.125;\n  }\n\n  h1 {\n    font-size: 2rem;\n    margin-bottom: 0.5em;\n  }\n\n  h2 {\n    font-size: 1.75em;\n    margin-bottom: 0.5714em;\n\n    &:not(:first-child) {\n      margin-top: 1.1428em;\n    }\n  }\n\n  h3 {\n    font-size: 1.5em;\n    margin-bottom: 0.6666em;\n\n    &:not(:first-child) {\n      margin-top: 1.3333em;\n    }\n  }\n\n  h4 {\n    font-size: 1.25em;\n    margin-bottom: 0.8em;\n  }\n\n  h5 {\n    font-size: 1.125em;\n    margin-bottom: 0.8888em;\n  }\n\n  h6 {\n    font-size: 1em;\n    margin-bottom: 1em;\n  }\n\n  ol {\n    list-style: decimal outside;\n    margin-left: 2em;\n    margin-top: 1em;\n  }\n\n  ul {\n    list-style: disc outside;\n    margin-left: 2em;\n    margin-top: 1em;\n    ul {\n      list-style-type: circle;\n      margin-top: 0.5em;\n      ul {\n        list-style-type: square;\n      }\n    }\n  }\n\n  dd {\n    margin-left: 2em;\n  }\n\n  table {\n    width: 100%;\n\n    td, th {\n      border: 1px solid ", ";\n      border-width: 0 0 1px;\n      padding: 0.5em 0.75em;\n      vertical-align: top;\n    }\n\n    th {\n      color: ", ";\n      text-align: left;\n    }\n\n    thead {\n      td, th {\n        border-width: 0 0 2px;\n        color: ", ";\n      }\n    }\n\n    tfoot {\n      td, th {\n        border-width: 2px 0 0;\n        color: ", ";\n      }\n    }\n\n    tbody > tr:last-child{\n      td, th {\n        border-bottom-width: 0;\n      }\n    }\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.text;
}, function (_a) {
    var theme = _a.theme;
    return theme.border;
}, function (_a) {
    var theme = _a.theme;
    return theme.text;
}, function (_a) {
    var theme = _a.theme;
    return theme.text;
}, function (_a) {
    var theme = _a.theme;
    return theme.text;
});
Content.displayName = 'Content';
var Pre_1 = require("./Pre");
exports.Pre = Pre_1.default;
var Code_1 = require("./Code");
exports.Code = Code_1.default;
var H1_1 = require("./H1");
exports.H1 = H1_1.default;
exports.default = Content;
var templateObject_1;
