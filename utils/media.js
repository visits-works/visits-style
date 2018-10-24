import { css } from '../styled';
import { tablet, desktop, fullhd } from '../styles/variables';

function mediaFrom(device, str) {
  var template = ['@media screen and (min-width: ', 'px) {'].concat(str, ['}']);

  for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }

  var values = [device, ''].concat(args, ['']); // @ts-ignore

  return css.apply(void 0, [template].concat(values));
}

function mediaUntil(device, str) {
  var template = ['@media screen and (max-width: ', 'px) {'].concat(str, ['}']);

  for (var _len2 = arguments.length, args = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
    args[_key2 - 2] = arguments[_key2];
  }

  var values = [device, ''].concat(args, ['']); // @ts-ignore

  return css.apply(void 0, [template].concat(values));
}

export function mediaMobile(str) {
  for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
    args[_key3 - 1] = arguments[_key3];
  }

  return mediaUntil.apply(void 0, [tablet - 1, str].concat(args));
}
export function mediaTablet(str) {
  for (var _len4 = arguments.length, args = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
    args[_key4 - 1] = arguments[_key4];
  }

  return mediaFrom.apply(void 0, [tablet, str].concat(args));
}
export function mediaDesktop(str) {
  for (var _len5 = arguments.length, args = new Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
    args[_key5 - 1] = arguments[_key5];
  }

  return mediaFrom.apply(void 0, [desktop, str].concat(args));
}
export function mediaFullHD(str) {
  for (var _len6 = arguments.length, args = new Array(_len6 > 1 ? _len6 - 1 : 0), _key6 = 1; _key6 < _len6; _key6++) {
    args[_key6 - 1] = arguments[_key6];
  }

  return mediaFrom.apply(void 0, [fullhd, str].concat(args));
}
export function mediaUntilFullHD(str) {
  for (var _len7 = arguments.length, args = new Array(_len7 > 1 ? _len7 - 1 : 0), _key7 = 1; _key7 < _len7; _key7++) {
    args[_key7 - 1] = arguments[_key7];
  }

  return mediaUntil.apply(void 0, [fullhd - 1, str].concat(args));
}