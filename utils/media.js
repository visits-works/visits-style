function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

import { css } from 'styled-components';

function mediaFrom(device, str) {
  var template = ['@media screen and (min-width: ', 'px) {'].concat(_toConsumableArray(str), ['}']);

  for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }

  var values = [device, ''].concat(args, ['']);
  return css( // @ts-ignore
  ['', ''], // @ts-ignore
  [function (_ref) {
    var theme = _ref.theme;
    return theme.responsive ? css.apply(void 0, [template].concat(_toConsumableArray(values))) : '';
  }]);
}

function mediaUntil(device, str) {
  var template = ['@media screen and (max-width: ', 'px) {'].concat(_toConsumableArray(str), ['}']);

  for (var _len2 = arguments.length, args = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
    args[_key2 - 2] = arguments[_key2];
  }

  var values = [device, ''].concat(args, ['']);
  return css( // @ts-ignore
  ['', ''], // @ts-ignore
  [function (_ref2) {
    var theme = _ref2.theme;
    return theme.responsive ? css.apply(void 0, [template].concat(_toConsumableArray(values))) : '';
  }]);
}

export function mediaMobile(str) {
  for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
    args[_key3 - 1] = arguments[_key3];
  }

  return mediaUntil.apply(void 0, [function (_ref3) {
    var theme = _ref3.theme;
    return theme.media.tablet - 1;
  }, str].concat(args));
}
export function mediaTablet(str) {
  for (var _len4 = arguments.length, args = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
    args[_key4 - 1] = arguments[_key4];
  }

  return mediaFrom.apply(void 0, [function (_ref4) {
    var theme = _ref4.theme;
    return theme.media.tablet;
  }, str].concat(args));
}
export function mediaDesktop(str) {
  for (var _len5 = arguments.length, args = new Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
    args[_key5 - 1] = arguments[_key5];
  }

  return mediaFrom.apply(void 0, [function (_ref5) {
    var theme = _ref5.theme;
    return theme.media.desktop;
  }, str].concat(args));
}
export function mediaFullHD(str) {
  for (var _len6 = arguments.length, args = new Array(_len6 > 1 ? _len6 - 1 : 0), _key6 = 1; _key6 < _len6; _key6++) {
    args[_key6 - 1] = arguments[_key6];
  }

  return mediaFrom.apply(void 0, [function (_ref6) {
    var theme = _ref6.theme;
    return theme.media.fullhd;
  }, str].concat(args));
}
export function mediaUntilFullHD(str) {
  for (var _len7 = arguments.length, args = new Array(_len7 > 1 ? _len7 - 1 : 0), _key7 = 1; _key7 < _len7; _key7++) {
    args[_key7 - 1] = arguments[_key7];
  }

  return mediaUntil.apply(void 0, [function (_ref7) {
    var theme = _ref7.theme;
    return theme.media.fullhd - 1;
  }, str].concat(args));
}