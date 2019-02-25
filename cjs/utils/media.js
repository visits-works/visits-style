"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function mediaMobile(_a) {
    var theme = _a.theme;
    return "@media screen and (max-width: " + (theme.responsive ? 0 : theme.mobile) + "px)";
}
exports.mediaMobile = mediaMobile;
function mediaTablet(_a) {
    var theme = _a.theme;
    return "@media screen and (min-width: " + (theme.responsive ? 0 : theme.tablet) + "px)";
}
exports.mediaTablet = mediaTablet;
function mediaDesktop(_a) {
    var theme = _a.theme;
    return "@media screen and (min-width: " + (theme.responsive ? 0 : theme.desktop) + "px)";
}
exports.mediaDesktop = mediaDesktop;
function mediaFullHD(_a) {
    var theme = _a.theme;
    return "@media screen and (min-width: " + (theme.responsive ? 0 : theme.fullhd) + "px)";
}
exports.mediaFullHD = mediaFullHD;
function mediaUntilFullHD(_a) {
    var theme = _a.theme;
    return "@media screen and (max-width: " + (theme.responsive ? 0 : theme.fullhd) + "px)";
}
exports.mediaUntilFullHD = mediaUntilFullHD;
