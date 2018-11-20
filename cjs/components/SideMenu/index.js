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
exports.SideMenu = styled_components_1.default.aside(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  font-size: 1rem;\n"], ["\n  font-size: 1rem;\n"])));
exports.SideMenu.displayName = 'SideMenu';
exports.MenuList = styled_components_1.default.ul(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  line-height: 1.25;\n\n  a {\n    display: block;\n    padding: 0.5em;\n    border-radius: 4px;\n    color: ", ";\n    &:hover {\n      color: ", ";\n    }\n    &.active {\n      color: ", ";\n    }\n  }\n\n  li {\n    ul {\n      margin: 0.75em;\n      padding-left: 0.75em;\n    }\n  }\n"], ["\n  line-height: 1.25;\n\n  a {\n    display: block;\n    padding: 0.5em;\n    border-radius: 4px;\n    color: ", ";\n    &:hover {\n      color: ", ";\n    }\n    &.active {\n      color: ", ";\n    }\n  }\n\n  li {\n    ul {\n      margin: 0.75em;\n      padding-left: 0.75em;\n    }\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.text;
}, function (_a) {
    var theme = _a.theme;
    return theme.primary;
}, function (_a) {
    var theme = _a.theme;
    return theme.primary;
});
exports.MenuList.displayName = 'MenuList';
exports.MenuLabel = styled_components_1.default.p(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  font-size: 0.75em;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n\n  &:not(:first-child) {\n    margin-top: 1em;\n  }\n  &:not(:last-child) {\n    margin-bottom: 1em;\n  }\n"], ["\n  font-size: 0.75em;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n\n  &:not(:first-child) {\n    margin-top: 1em;\n  }\n  &:not(:last-child) {\n    margin-bottom: 1em;\n  }\n"])));
exports.MenuLabel.displayName = 'MenuLabel';
var templateObject_1, templateObject_2, templateObject_3;
