"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function mediaMobile(_a) {
    var theme = _a.theme;
    return "@media screen and (max-width: " + (theme.responsive ? theme.mobile : 0) + "px)";
}
exports.mediaMobile = mediaMobile;
function mediaTablet(_a) {
    var theme = _a.theme;
    return "@media screen and (min-width: " + (theme.responsive ? theme.tablet : 0) + "px)";
}
exports.mediaTablet = mediaTablet;
function mediaDesktop(_a) {
    var theme = _a.theme;
    return "@media screen and (min-width: " + (theme.responsive ? theme.desktop : 0) + "px)";
}
exports.mediaDesktop = mediaDesktop;
function mediaFullHD(_a) {
    var theme = _a.theme;
    return "@media screen and (min-width: " + (theme.responsive ? theme.fullhd : 0) + "px)";
}
exports.mediaFullHD = mediaFullHD;
function mediaUntilFullHD(_a) {
    var theme = _a.theme;
    return "@media screen and (max-width: " + (theme.responsive ? theme.fullhd : 0) + "px)";
}
exports.mediaUntilFullHD = mediaUntilFullHD;
