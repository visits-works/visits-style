"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = require("styled-components");
function mediaFrom(device, str) {
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
    }
    var template = ['@media screen and (min-width: ', 'px) {'].concat(str, ['}']);
    var values = [device, ''].concat(args, ['']);
    return styled_components_1.css(
    // @ts-ignore
    ['', ''], 
    // @ts-ignore
    [function (_a) {
            var theme = _a.theme;
            return theme.responsive ? styled_components_1.css.apply(void 0, [template].concat(values)) : '';
        }]);
}
function mediaUntil(device, str) {
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
    }
    var template = ['@media screen and (max-width: ', 'px) {'].concat(str, ['}']);
    var values = [device, ''].concat(args, ['']);
    return styled_components_1.css(
    // @ts-ignore
    ['', ''], 
    // @ts-ignore
    [function (_a) {
            var theme = _a.theme;
            return theme.responsive ? styled_components_1.css.apply(void 0, [template].concat(values)) : '';
        }]);
}
function mediaMobile(str) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    return mediaUntil.apply(void 0, [function (_a) {
            var theme = _a.theme;
            return theme.media.tablet - 1;
        }, str].concat(args));
}
exports.mediaMobile = mediaMobile;
function mediaTablet(str) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    return mediaFrom.apply(void 0, [function (_a) {
            var theme = _a.theme;
            return theme.media.tablet;
        }, str].concat(args));
}
exports.mediaTablet = mediaTablet;
function mediaDesktop(str) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    return mediaFrom.apply(void 0, [function (_a) {
            var theme = _a.theme;
            return theme.media.desktop;
        }, str].concat(args));
}
exports.mediaDesktop = mediaDesktop;
function mediaFullHD(str) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    return mediaFrom.apply(void 0, [function (_a) {
            var theme = _a.theme;
            return theme.media.fullhd;
        }, str].concat(args));
}
exports.mediaFullHD = mediaFullHD;
function mediaUntilFullHD(str) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    return mediaUntil.apply(void 0, [function (_a) {
            var theme = _a.theme;
            return theme.media.fullhd - 1;
        }, str].concat(args));
}
exports.mediaUntilFullHD = mediaUntilFullHD;
