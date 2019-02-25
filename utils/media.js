export function mediaMobile(_ref) {
  var theme = _ref.theme;
  return "@media screen and (max-width: ".concat(theme.responsive ? 0 : theme.mobile, "px)");
}
export function mediaTablet(_ref2) {
  var theme = _ref2.theme;
  return "@media screen and (min-width: ".concat(theme.responsive ? 0 : theme.tablet, "px)");
}
export function mediaDesktop(_ref3) {
  var theme = _ref3.theme;
  return "@media screen and (min-width: ".concat(theme.responsive ? 0 : theme.desktop, "px)");
}
export function mediaFullHD(_ref4) {
  var theme = _ref4.theme;
  return "@media screen and (min-width: ".concat(theme.responsive ? 0 : theme.fullhd, "px)");
}
export function mediaUntilFullHD(_ref5) {
  var theme = _ref5.theme;
  return "@media screen and (max-width: ".concat(theme.responsive ? 0 : theme.fullhd, "px)");
}