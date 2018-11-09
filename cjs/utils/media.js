"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const styled_1 = require("../styled");
const variables_1 = require("../styles/variables");
function mediaFrom(device, str, ...args) {
    const template = ['@media screen and (min-width: ', 'px) {', ...str, '}'];
    const values = [device, '', ...args, ''];
    // @ts-ignore
    return styled_1.css(template, ...values);
}
function mediaUntil(device, str, ...args) {
    const template = ['@media screen and (max-width: ', 'px) {', ...str, '}'];
    const values = [device, '', ...args, ''];
    // @ts-ignore
    return styled_1.css(template, ...values);
}
function withTheme(func, ...args) {
    return function ({ theme }) {
        if (theme && theme.responsive === false)
            return '';
        return func(...args);
    };
}
function mediaMobile(str, ...args) {
    return withTheme(mediaUntil, variables_1.tablet - 1, str, ...args);
}
exports.mediaMobile = mediaMobile;
function mediaTablet(str, ...args) {
    return withTheme(mediaFrom, variables_1.tablet, str, ...args);
}
exports.mediaTablet = mediaTablet;
function mediaDesktop(str, ...args) {
    return withTheme(mediaFrom, variables_1.desktop, str, ...args);
}
exports.mediaDesktop = mediaDesktop;
function mediaFullHD(str, ...args) {
    return withTheme(mediaFrom, variables_1.fullhd, str, ...args);
}
exports.mediaFullHD = mediaFullHD;
function mediaUntilFullHD(str, ...args) {
    return mediaUntil(variables_1.fullhd - 1, str, ...args);
}
exports.mediaUntilFullHD = mediaUntilFullHD;
