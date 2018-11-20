"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = require("styled-components");
var variables_1 = require("../styles/variables");
function mediaFrom(device, str) {
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
    }
    var template = ['@media screen and (min-width: ', 'px) {'].concat(str, ['}']);
    var values = [device, ''].concat(args, ['']);
    // @ts-ignore
    return styled_components_1.css.apply(void 0, [template].concat(values));
}
function mediaUntil(device, str) {
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
    }
    var template = ['@media screen and (max-width: ', 'px) {'].concat(str, ['}']);
    var values = [device, ''].concat(args, ['']);
    // @ts-ignore
    return styled_components_1.css.apply(void 0, [template].concat(values));
}
function withTheme(func) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    return function (_a) {
        var theme = _a.theme;
        if (theme && theme.responsive === false)
            return '';
        return func.apply(void 0, args);
    };
}
function mediaMobile(str) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    return withTheme.apply(void 0, [mediaUntil, variables_1.tablet - 1, str].concat(args));
}
exports.mediaMobile = mediaMobile;
function mediaTablet(str) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    return withTheme.apply(void 0, [mediaFrom, variables_1.tablet, str].concat(args));
}
exports.mediaTablet = mediaTablet;
function mediaDesktop(str) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    return withTheme.apply(void 0, [mediaFrom, variables_1.desktop, str].concat(args));
}
exports.mediaDesktop = mediaDesktop;
function mediaFullHD(str) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    return withTheme.apply(void 0, [mediaFrom, variables_1.fullhd, str].concat(args));
}
exports.mediaFullHD = mediaFullHD;
function mediaUntilFullHD(str) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    return mediaUntil.apply(void 0, [variables_1.fullhd - 1, str].concat(args));
}
exports.mediaUntilFullHD = mediaUntilFullHD;
