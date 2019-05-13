import React, { PureComponent, Component, createRef, Children } from 'react';
import styled, { css, keyframes } from 'styled-components';
import reactDom, { createPortal } from 'react-dom';

function Break() {
  return React.createElement("div", {
    style: {
      width: '100%',
      height: 0
    }
  });
}

function mediaMobile(_ref) {
  var theme = _ref.theme;
  if (!theme.responsive) return '@media (max-width: 0)';
  return "@media screen and (max-width: ".concat(theme.mobile, "px)");
}
function mediaTablet(_ref2) {
  var theme = _ref2.theme;
  if (!theme.responsive) return '@media (max-width: 0)';
  return "@media screen and (max-width: ".concat(theme.tablet, "px)");
}
function mediaDesktop(_ref3) {
  var theme = _ref3.theme;
  if (!theme.responsive) return '@media (max-width: 0)';
  return "@media screen and (max-width: ".concat(theme.desktop, "px)");
}
function mediaFullHD(_ref4) {
  var theme = _ref4.theme;
  if (!theme.responsive) return '@media (max-width: 0)';
  return "@media screen and (max-width: ".concat(theme.fullhd, "px)");
}
function mediaUntilFullHD(_ref5) {
  var theme = _ref5.theme;
  if (!theme.responsive) return '@media (max-width: 0)';
  return "@media (min-width: ".concat(theme.fullhd, "px)");
}

function setResponsive(_ref) {
  var fluid = _ref.fluid;

  if (fluid) {
    return css(["", "{padding-right:0.75rem;padding-left:0.75rem;}", "{padding-right:0.75rem;padding-left:0.75rem;}", "{padding-right:0.5rem;padding-left:0.5rem;}"], mediaFullHD, mediaDesktop, mediaMobile);
  }

  return css(["margin-right:auto;margin-left:auto;", "{max-width:", "px;}", "{max-width:", "px;}", "{max-width:", "px;}", "{max-width:", "px;}"], mediaFullHD, function (_ref2) {
    var theme = _ref2.theme;
    return theme.fullhd - 2 * theme.gutter;
  }, mediaDesktop, function (_ref3) {
    var theme = _ref3.theme;
    return theme.desktop - 2 * theme.gutter;
  }, mediaTablet, function (_ref4) {
    var theme = _ref4.theme;
    return theme.tablet - 2 * theme.smallGutter;
  }, mediaMobile, function (_ref5) {
    var theme = _ref5.theme;
    return theme.mobile - 2 * theme.smallGutter;
  });
}

var Container =
/*#__PURE__*/
styled.div.withConfig({
  displayName: "Container",
  componentId: "sc-1lmpgdg-0"
})(["position:relative;width:100%;", ""], setResponsive);
Container.displayName = 'Container';
Container.defaultProps = {
  fluid: false
};

function parcentage(value) {
  if (!value) return 0;
  if (value >= 12) return 100;
  return Math.ceil(value / 12 * 100 * 100000) / 100000;
}

function renderSize(_ref) {
  var size = _ref.size,
      narrow = _ref.narrow,
      auto = _ref.auto,
      offset = _ref.offset;
  if (narrow) return null;

  if (!size || size < 1 || size > 12) {
    return css(["width:auto;max-width:none;", "{padding:0.5rem;}"], mediaTablet);
  }

  var value = parcentage(size);
  var offVal = offset ? parcentage(offset) : 0;
  var autoSize = value > 33 ? 100 : value * 3;
  return css(["width:", "%;max-width:", "%;", " ", "{width:", "%;max-width:", "%;padding:0.5rem;", "}"], value, value, offset ? "margin-left: ".concat(offVal, "%;") : {}, mediaTablet, autoSize, autoSize, offset ? "margin-left: 0;" : {});
}

var Col =
/*#__PURE__*/
styled.div.withConfig({
  displayName: "Col",
  componentId: "sc-1q9tfma-0"
})(["display:block;min-height:1px;padding:0.75rem;", " ", " ", ""], function (_ref2) {
  var narrow = _ref2.narrow;
  return narrow ? 'flex: none;' : {};
}, function (_ref3) {
  var offset = _ref3.offset;
  return offset ? "margin-left: ".concat(parcentage(offset), "%;") : {};
}, renderSize);
Col.displayName = 'Col';

function renderGutter(_ref) {
  var noGutter = _ref.noGutter;

  if (noGutter) {
    return css(["margin-right:0;margin-left:0;> ", "{padding-right:0;padding-left:0;}"], Col);
  }

  return css(["", "{margin-left:-0.75rem;margin-right:-0.75rem;margin-top:-0.75rem;margin-bottom:0.75rem;}", "{margin-left:-0.5rem;margin-right:-0.5rem;margin-top:-0.5rem;margin-bottom:0.5rem;}"], mediaFullHD, mediaTablet);
}

var Row =
/*#__PURE__*/
styled.div.withConfig({
  displayName: "Row",
  componentId: "sc-1syuetm-0"
})(["display:flex;width:100%;flex-wrap:wrap;", " ", " ", ""], function (_ref2) {
  var vcenter = _ref2.vcenter;
  return vcenter ? 'align-items: center;' : '';
}, function (_ref3) {
  var center = _ref3.center;
  return center ? 'justify-content: center;' : '';
}, renderGutter);
Row.displayName = 'Row';

var Pre =
/*#__PURE__*/
styled.pre.withConfig({
  displayName: "Pre",
  componentId: "acw6ve-0"
})(["-webkit-overflow-scrolling:touch;overflow-x:auto;padding:1.25em 1.5em;white-space:pre;word-wrap:normal;&:not(:last-child){margin-bottom:1em;}"]);
Pre.displayName = 'Pre';

var Code =
/*#__PURE__*/
styled.code.withConfig({
  displayName: "Code",
  componentId: "sl7eyv-0"
})(["background-color:", ";color:", ";font-size:.875em;font-weight:400;padding:.25em .5em .25em;"], function (_ref) {
  var theme = _ref.theme;
  return theme.background;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.danger;
});
Code.displayName = 'Code';

var H1 =
/*#__PURE__*/
styled.h1.withConfig({
  displayName: "H1",
  componentId: "sc-1p7t0ft-0"
})(["font-size:2em;margin-bottom:0.5em;padding-left:1rem;border-left:1rem solid;border-bottom:1px solid;border-color:", ";"], function (_ref) {
  var theme = _ref.theme;
  return theme.border;
});
H1.displayName = 'H1';

var Content =
/*#__PURE__*/
styled.div.withConfig({
  displayName: "Content",
  componentId: "cvkr7t-0"
})(["color:", ";line-height:1.5;li + li{margin-top:0.25em;}p,dl,ol,ul,blockquote,pre,table{&:not(:last-child){margin-bottom:1em;}}h1,h2,h3,h4,h5,h6{font-weight:600;line-height:1.125;}h1{font-size:2rem;margin-bottom:0.5em;}h2{font-size:1.75em;margin-bottom:0.5714em;&:not(:first-child){margin-top:1.1428em;}}h3{font-size:1.5em;margin-bottom:0.6666em;&:not(:first-child){margin-top:1.3333em;}}h4{font-size:1.25em;margin-bottom:0.8em;}h5{font-size:1.125em;margin-bottom:0.8888em;}h6{font-size:1em;margin-bottom:1em;}ol{list-style:decimal outside;margin-left:2em;margin-top:1em;}ul{list-style:disc outside;margin-left:2em;margin-top:1em;ul{list-style-type:circle;margin-top:0.5em;ul{list-style-type:square;}}}dd{margin-left:2em;}table{width:100%;td,th{border:1px solid ", ";border-width:0 0 1px;padding:0.5em 0.75em;vertical-align:top;}th{color:", ";text-align:left;}thead{td,th{border-width:0 0 2px;color:", ";}}tfoot{td,th{border-width:2px 0 0;color:", ";}}tbody > tr:last-child{td,th{border-bottom-width:0;}}}"], function (_ref) {
  var theme = _ref.theme;
  return theme.text;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.border;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.text;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.text;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.text;
});
Content.displayName = 'Content';

function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x.default : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var _curry = createCommonjsModule(function (module, exports) {

exports.__esModule = true;
exports.default = curry;

// Type definitions taken from https://github.com/gcanti/flow-static-land/blob/master/src/Fun.js
// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line no-redeclare
function curried(f, length, acc) {
  return function fn() {
    // eslint-disable-next-line prefer-rest-params
    var combined = acc.concat(Array.prototype.slice.call(arguments));
    return combined.length >= length ? f.apply(this, combined) : curried(f, length, combined);
  };
} // eslint-disable-next-line no-redeclare


function curry(f) {
  // eslint-disable-line no-redeclare
  return curried(f, f.length, []);
}

module.exports = exports.default;
});

unwrapExports(_curry);

var _guard = createCommonjsModule(function (module, exports) {

exports.__esModule = true;
exports.default = void 0;

function guard(lowerBoundary, upperBoundary, value) {
  return Math.max(lowerBoundary, Math.min(upperBoundary, value));
}

var _default = guard;
exports.default = _default;
module.exports = exports.default;
});

unwrapExports(_guard);

var _hslToRgb = createCommonjsModule(function (module, exports) {

exports.__esModule = true;
exports.default = void 0;

function colorToInt(color) {
  return Math.round(color * 255);
}

function convertToInt(red, green, blue) {
  return colorToInt(red) + "," + colorToInt(green) + "," + colorToInt(blue);
}

function hslToRgb(hue, saturation, lightness, convert) {
  if (convert === void 0) {
    convert = convertToInt;
  }

  if (saturation === 0) {
    // achromatic
    return convert(lightness, lightness, lightness);
  } // formular from https://en.wikipedia.org/wiki/HSL_and_HSV


  var huePrime = hue % 360 / 60;
  var chroma = (1 - Math.abs(2 * lightness - 1)) * saturation;
  var secondComponent = chroma * (1 - Math.abs(huePrime % 2 - 1));
  var red = 0;
  var green = 0;
  var blue = 0;

  if (huePrime >= 0 && huePrime < 1) {
    red = chroma;
    green = secondComponent;
  } else if (huePrime >= 1 && huePrime < 2) {
    red = secondComponent;
    green = chroma;
  } else if (huePrime >= 2 && huePrime < 3) {
    green = chroma;
    blue = secondComponent;
  } else if (huePrime >= 3 && huePrime < 4) {
    green = secondComponent;
    blue = chroma;
  } else if (huePrime >= 4 && huePrime < 5) {
    red = secondComponent;
    blue = chroma;
  } else if (huePrime >= 5 && huePrime < 6) {
    red = chroma;
    blue = secondComponent;
  }

  var lightnessModification = lightness - chroma / 2;
  var finalRed = red + lightnessModification;
  var finalGreen = green + lightnessModification;
  var finalBlue = blue + lightnessModification;
  return convert(finalRed, finalGreen, finalBlue);
}

var _default = hslToRgb;
exports.default = _default;
module.exports = exports.default;
});

unwrapExports(_hslToRgb);

var _nameToHex = createCommonjsModule(function (module, exports) {

exports.__esModule = true;
exports.default = void 0;
var namedColorMap = {
  aliceblue: 'f0f8ff',
  antiquewhite: 'faebd7',
  aqua: '00ffff',
  aquamarine: '7fffd4',
  azure: 'f0ffff',
  beige: 'f5f5dc',
  bisque: 'ffe4c4',
  black: '000',
  blanchedalmond: 'ffebcd',
  blue: '0000ff',
  blueviolet: '8a2be2',
  brown: 'a52a2a',
  burlywood: 'deb887',
  cadetblue: '5f9ea0',
  chartreuse: '7fff00',
  chocolate: 'd2691e',
  coral: 'ff7f50',
  cornflowerblue: '6495ed',
  cornsilk: 'fff8dc',
  crimson: 'dc143c',
  cyan: '00ffff',
  darkblue: '00008b',
  darkcyan: '008b8b',
  darkgoldenrod: 'b8860b',
  darkgray: 'a9a9a9',
  darkgreen: '006400',
  darkgrey: 'a9a9a9',
  darkkhaki: 'bdb76b',
  darkmagenta: '8b008b',
  darkolivegreen: '556b2f',
  darkorange: 'ff8c00',
  darkorchid: '9932cc',
  darkred: '8b0000',
  darksalmon: 'e9967a',
  darkseagreen: '8fbc8f',
  darkslateblue: '483d8b',
  darkslategray: '2f4f4f',
  darkslategrey: '2f4f4f',
  darkturquoise: '00ced1',
  darkviolet: '9400d3',
  deeppink: 'ff1493',
  deepskyblue: '00bfff',
  dimgray: '696969',
  dimgrey: '696969',
  dodgerblue: '1e90ff',
  firebrick: 'b22222',
  floralwhite: 'fffaf0',
  forestgreen: '228b22',
  fuchsia: 'ff00ff',
  gainsboro: 'dcdcdc',
  ghostwhite: 'f8f8ff',
  gold: 'ffd700',
  goldenrod: 'daa520',
  gray: '808080',
  green: '008000',
  greenyellow: 'adff2f',
  grey: '808080',
  honeydew: 'f0fff0',
  hotpink: 'ff69b4',
  indianred: 'cd5c5c',
  indigo: '4b0082',
  ivory: 'fffff0',
  khaki: 'f0e68c',
  lavender: 'e6e6fa',
  lavenderblush: 'fff0f5',
  lawngreen: '7cfc00',
  lemonchiffon: 'fffacd',
  lightblue: 'add8e6',
  lightcoral: 'f08080',
  lightcyan: 'e0ffff',
  lightgoldenrodyellow: 'fafad2',
  lightgray: 'd3d3d3',
  lightgreen: '90ee90',
  lightgrey: 'd3d3d3',
  lightpink: 'ffb6c1',
  lightsalmon: 'ffa07a',
  lightseagreen: '20b2aa',
  lightskyblue: '87cefa',
  lightslategray: '789',
  lightslategrey: '789',
  lightsteelblue: 'b0c4de',
  lightyellow: 'ffffe0',
  lime: '0f0',
  limegreen: '32cd32',
  linen: 'faf0e6',
  magenta: 'f0f',
  maroon: '800000',
  mediumaquamarine: '66cdaa',
  mediumblue: '0000cd',
  mediumorchid: 'ba55d3',
  mediumpurple: '9370db',
  mediumseagreen: '3cb371',
  mediumslateblue: '7b68ee',
  mediumspringgreen: '00fa9a',
  mediumturquoise: '48d1cc',
  mediumvioletred: 'c71585',
  midnightblue: '191970',
  mintcream: 'f5fffa',
  mistyrose: 'ffe4e1',
  moccasin: 'ffe4b5',
  navajowhite: 'ffdead',
  navy: '000080',
  oldlace: 'fdf5e6',
  olive: '808000',
  olivedrab: '6b8e23',
  orange: 'ffa500',
  orangered: 'ff4500',
  orchid: 'da70d6',
  palegoldenrod: 'eee8aa',
  palegreen: '98fb98',
  paleturquoise: 'afeeee',
  palevioletred: 'db7093',
  papayawhip: 'ffefd5',
  peachpuff: 'ffdab9',
  peru: 'cd853f',
  pink: 'ffc0cb',
  plum: 'dda0dd',
  powderblue: 'b0e0e6',
  purple: '800080',
  rebeccapurple: '639',
  red: 'f00',
  rosybrown: 'bc8f8f',
  royalblue: '4169e1',
  saddlebrown: '8b4513',
  salmon: 'fa8072',
  sandybrown: 'f4a460',
  seagreen: '2e8b57',
  seashell: 'fff5ee',
  sienna: 'a0522d',
  silver: 'c0c0c0',
  skyblue: '87ceeb',
  slateblue: '6a5acd',
  slategray: '708090',
  slategrey: '708090',
  snow: 'fffafa',
  springgreen: '00ff7f',
  steelblue: '4682b4',
  tan: 'd2b48c',
  teal: '008080',
  thistle: 'd8bfd8',
  tomato: 'ff6347',
  turquoise: '40e0d0',
  violet: 'ee82ee',
  wheat: 'f5deb3',
  white: 'fff',
  whitesmoke: 'f5f5f5',
  yellow: 'ff0',
  yellowgreen: '9acd32'
  /**
   * Checks if a string is a CSS named color and returns its equivalent hex value, otherwise returns the original color.
   * @private
   */

};

function nameToHex(color) {
  if (typeof color !== 'string') return color;
  var normalizedColorName = color.toLowerCase();
  return namedColorMap[normalizedColorName] ? "#" + namedColorMap[normalizedColorName] : color;
}

var _default = nameToHex;
exports.default = _default;
module.exports = exports.default;
});

unwrapExports(_nameToHex);

var _errors = createCommonjsModule(function (module, exports) {

exports.__esModule = true;
exports.default = void 0;

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

// based on https://github.com/styled-components/styled-components/blob/fcf6f3804c57a14dd7984dfab7bc06ee2edca044/src/utils/error.js

/**
 * Parse errors.md and turn it into a simple hash of code: message
 * @private
 */
var ERRORS = {
  "1": "Passed invalid arguments to hsl, please pass multiple numbers e.g. hsl(360, 0.75, 0.4) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75 }).\n\n",
  "2": "Passed invalid arguments to hsla, please pass multiple numbers e.g. hsla(360, 0.75, 0.4, 0.7) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75, alpha: 0.7 }).\n\n",
  "3": "Passed an incorrect argument to a color function, please pass a string representation of a color.\n\n",
  "4": "Couldn't generate valid rgb string from %s, it returned %s.\n\n",
  "5": "Couldn't parse the color string. Please provide the color as a string in hex, rgb, rgba, hsl or hsla notation.\n\n",
  "6": "Passed invalid arguments to rgb, please pass multiple numbers e.g. rgb(255, 205, 100) or an object e.g. rgb({ red: 255, green: 205, blue: 100 }).\n\n",
  "7": "Passed invalid arguments to rgba, please pass multiple numbers e.g. rgb(255, 205, 100, 0.75) or an object e.g. rgb({ red: 255, green: 205, blue: 100, alpha: 0.75 }).\n\n",
  "8": "Passed invalid argument to toColorString, please pass a RgbColor, RgbaColor, HslColor or HslaColor object.\n\n",
  "9": "Please provide a number of steps to the modularScale helper.\n\n",
  "10": "Please pass a number or one of the predefined scales to the modularScale helper as the ratio.\n\n",
  "11": "Invalid value passed as base to modularScale, expected number or em string but got \"%s\"\n\n",
  "12": "Expected a string ending in \"px\" or a number passed as the first argument to %s(), got \"%s\" instead.\n\n",
  "13": "Expected a string ending in \"px\" or a number passed as the second argument to %s(), got \"%s\" instead.\n\n",
  "14": "Passed invalid pixel value (\"%s\") to %s(), please pass a value like \"12px\" or 12.\n\n",
  "15": "Passed invalid base value (\"%s\") to %s(), please pass a value like \"12px\" or 12.\n\n",
  "16": "You must provide a template to this method.\n\n",
  "17": "You passed an unsupported selector state to this method.\n\n",
  "18": "minScreen and maxScreen must be provided as stringified numbers with the same units.\n\n",
  "19": "fromSize and toSize must be provided as stringified numbers with the same units.\n\n",
  "20": "expects either an array of objects or a single object with the properties prop, fromSize, and toSize.\n\n",
  "21": "expects the objects in the first argument array to have the properties `prop`, `fromSize`, and `toSize`.\n\n",
  "22": "expects the first argument object to have the properties `prop`, `fromSize`, and `toSize`.\n\n",
  "23": "fontFace expects a name of a font-family.\n\n",
  "24": "fontFace expects either the path to the font file(s) or a name of a local copy.\n\n",
  "25": "fontFace expects localFonts to be an array.\n\n",
  "26": "fontFace expects fileFormats to be an array.\n\n",
  "27": "radialGradient requries at least 2 color-stops to properly render.\n\n",
  "28": "Please supply a filename to retinaImage() as the first argument.\n\n",
  "29": "Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.\n\n",
  "30": "Passed an invalid value to `height` or `width`. Please provide a pixel based unit.\n\n",
  "31": "The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation\n\n",
  "32": "To pass multiple animations please supply them in arrays, e.g. animation(['rotate', '2s'], ['move', '1s'])\nTo pass a single animation please supply them in simple values, e.g. animation('rotate', '2s')\n\n",
  "33": "The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation\n\n",
  "34": "borderRadius expects a radius value as a string or number as the second argument.\n\n",
  "35": "borderRadius expects one of \"top\", \"bottom\", \"left\" or \"right\" as the first argument.\n\n",
  "36": "Property must be a string value.\n\n",
  "37": "Syntax Error at %s.\n\n",
  "38": "Formula contains a function that needs parentheses at %s.\n\n",
  "39": "Formula is missing closing parenthesis at %s.\n\n",
  "40": "Formula has too many closing parentheses at %s.\n\n",
  "41": "All values in a formula must have the same unit or be unitless.\n\n",
  "42": "Please provide a number of steps to the modularScale helper.\n\n",
  "43": "Please pass a number or one of the predefined scales to the modularScale helper as the ratio.\n\n",
  "44": "Invalid value passed as base to modularScale, expected number or em/rem string but got %s.\n\n",
  "45": "Passed invalid argument to hslToColorString, please pass a HslColor or HslaColor object.\n\n",
  "46": "Passed invalid argument to rgbToColorString, please pass a RgbColor or RgbaColor object.\n\n",
  "47": "minScreen and maxScreen must be provided as stringified numbers with the same units.\n\n",
  "48": "fromSize and toSize must be provided as stringified numbers with the same units.\n\n",
  "49": "Expects either an array of objects or a single object with the properties prop, fromSize, and toSize.\n\n",
  "50": "Expects the objects in the first argument array to have the properties prop, fromSize, and toSize.\n\n",
  "51": "Expects the first argument object to have the properties prop, fromSize, and toSize.\n\n",
  "52": "fontFace expects either the path to the font file(s) or a name of a local copy.\n\n",
  "53": "fontFace expects localFonts to be an array.\n\n",
  "54": "fontFace expects fileFormats to be an array.\n\n",
  "55": "fontFace expects a name of a font-family.\n\n",
  "56": "linearGradient requries at least 2 color-stops to properly render.\n\n",
  "57": "radialGradient requries at least 2 color-stops to properly render.\n\n",
  "58": "Please supply a filename to retinaImage() as the first argument.\n\n",
  "59": "Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.\n\n",
  "60": "Passed an invalid value to `height` or `width`. Please provide a pixel based unit.\n\n",
  "61": "Property must be a string value.\n\n",
  "62": "borderRadius expects a radius value as a string or number as the second argument.\n\n",
  "63": "borderRadius expects one of \"top\", \"bottom\", \"left\" or \"right\" as the first argument.\n\n",
  "64": "The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation.\n\n",
  "65": "To pass multiple animations please supply them in arrays, e.g. animation(['rotate', '2s'], ['move', '1s'])\\nTo pass a single animation please supply them in simple values, e.g. animation('rotate', '2s').\n\n",
  "66": "The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation.\n\n",
  "67": "You must provide a template to this method.\n\n",
  "68": "You passed an unsupported selector state to this method.\n\n",
  "69": "Expected a string ending in \"px\" or a number passed as the first argument to %s(), got %s instead.\n\n",
  "70": "Expected a string ending in \"px\" or a number passed as the second argument to %s(), got %s instead.\n\n",
  "71": "Passed invalid pixel value %s to %s(), please pass a value like \"12px\" or 12.\n\n",
  "72": "Passed invalid base value %s to %s(), please pass a value like \"12px\" or 12.\n"
};
/**
 * super basic version of sprintf
 * @private
 */

function format() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var a = args[0];
  var b = [];
  var c;

  for (c = 1; c < args.length; c += 1) {
    b.push(args[c]);
  }

  b.forEach(function (d) {
    a = a.replace(/%[a-z]/, d);
  });
  return a;
}
/**
 * Create an error file out of errors.md for development and a simple web link to the full errors
 * in production mode.
 * @private
 */


var PolishedError =
/*#__PURE__*/
function (_Error) {
  _inheritsLoose(PolishedError, _Error);

  function PolishedError(code) {
    var _this;

    if (process.env.NODE_ENV === 'production') {
      _this = _Error.call(this, "An error occurred. See https://github.com/styled-components/polished/blob/master/src/internalHelpers/errors.md#" + code + " for more information.") || this;
    } else {
      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }

      _this = _Error.call(this, format.apply(void 0, [ERRORS[code]].concat(args))) || this;
    }

    return _assertThisInitialized(_this);
  }

  return PolishedError;
}(
/*#__PURE__*/
_wrapNativeSuper(Error));

exports.default = PolishedError;
module.exports = exports.default;
});

unwrapExports(_errors);

var parseToRgb_1 = createCommonjsModule(function (module, exports) {

exports.__esModule = true;
exports.default = void 0;

var _hslToRgb$1 =
/*#__PURE__*/
_interopRequireDefault(
/*#__PURE__*/
_hslToRgb);

var _nameToHex$1 =
/*#__PURE__*/
_interopRequireDefault(
/*#__PURE__*/
_nameToHex);

var _errors$1 =
/*#__PURE__*/
_interopRequireDefault(
/*#__PURE__*/
_errors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var hexRegex = /^#[a-fA-F0-9]{6}$/;
var hexRgbaRegex = /^#[a-fA-F0-9]{8}$/;
var reducedHexRegex = /^#[a-fA-F0-9]{3}$/;
var reducedRgbaHexRegex = /^#[a-fA-F0-9]{4}$/;
var rgbRegex = /^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/;
var rgbaRegex = /^rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*([-+]?[0-9]*[.]?[0-9]+)\s*\)$/;
var hslRegex = /^hsl\(\s*(\d{0,3}[.]?[0-9]+)\s*,\s*(\d{1,3})%\s*,\s*(\d{1,3})%\s*\)$/;
var hslaRegex = /^hsla\(\s*(\d{0,3}[.]?[0-9]+)\s*,\s*(\d{1,3})%\s*,\s*(\d{1,3})%\s*,\s*([-+]?[0-9]*[.]?[0-9]+)\s*\)$/;
/**
 * Returns an RgbColor or RgbaColor object. This utility function is only useful
 * if want to extract a color component. With the color util `toColorString` you
 * can convert a RgbColor or RgbaColor object back to a string.
 *
 * @example
 * // Assigns `{ red: 255, green: 0, blue: 0 }` to color1
 * const color1 = parseToRgb('rgb(255, 0, 0)');
 * // Assigns `{ red: 92, green: 102, blue: 112, alpha: 0.75 }` to color2
 * const color2 = parseToRgb('hsla(210, 10%, 40%, 0.75)');
 */

function parseToRgb(color) {
  if (typeof color !== 'string') {
    throw new _errors$1.default(3);
  }

  var normalizedColor = (0, _nameToHex$1.default)(color);

  if (normalizedColor.match(hexRegex)) {
    return {
      red: parseInt("" + normalizedColor[1] + normalizedColor[2], 16),
      green: parseInt("" + normalizedColor[3] + normalizedColor[4], 16),
      blue: parseInt("" + normalizedColor[5] + normalizedColor[6], 16)
    };
  }

  if (normalizedColor.match(hexRgbaRegex)) {
    var alpha = parseFloat((parseInt("" + normalizedColor[7] + normalizedColor[8], 16) / 255).toFixed(2));
    return {
      red: parseInt("" + normalizedColor[1] + normalizedColor[2], 16),
      green: parseInt("" + normalizedColor[3] + normalizedColor[4], 16),
      blue: parseInt("" + normalizedColor[5] + normalizedColor[6], 16),
      alpha: alpha
    };
  }

  if (normalizedColor.match(reducedHexRegex)) {
    return {
      red: parseInt("" + normalizedColor[1] + normalizedColor[1], 16),
      green: parseInt("" + normalizedColor[2] + normalizedColor[2], 16),
      blue: parseInt("" + normalizedColor[3] + normalizedColor[3], 16)
    };
  }

  if (normalizedColor.match(reducedRgbaHexRegex)) {
    var _alpha = parseFloat((parseInt("" + normalizedColor[4] + normalizedColor[4], 16) / 255).toFixed(2));

    return {
      red: parseInt("" + normalizedColor[1] + normalizedColor[1], 16),
      green: parseInt("" + normalizedColor[2] + normalizedColor[2], 16),
      blue: parseInt("" + normalizedColor[3] + normalizedColor[3], 16),
      alpha: _alpha
    };
  }

  var rgbMatched = rgbRegex.exec(normalizedColor);

  if (rgbMatched) {
    return {
      red: parseInt("" + rgbMatched[1], 10),
      green: parseInt("" + rgbMatched[2], 10),
      blue: parseInt("" + rgbMatched[3], 10)
    };
  }

  var rgbaMatched = rgbaRegex.exec(normalizedColor);

  if (rgbaMatched) {
    return {
      red: parseInt("" + rgbaMatched[1], 10),
      green: parseInt("" + rgbaMatched[2], 10),
      blue: parseInt("" + rgbaMatched[3], 10),
      alpha: parseFloat("" + rgbaMatched[4])
    };
  }

  var hslMatched = hslRegex.exec(normalizedColor);

  if (hslMatched) {
    var hue = parseInt("" + hslMatched[1], 10);
    var saturation = parseInt("" + hslMatched[2], 10) / 100;
    var lightness = parseInt("" + hslMatched[3], 10) / 100;
    var rgbColorString = "rgb(" + (0, _hslToRgb$1.default)(hue, saturation, lightness) + ")";
    var hslRgbMatched = rgbRegex.exec(rgbColorString);

    if (!hslRgbMatched) {
      throw new _errors$1.default(4, normalizedColor, rgbColorString);
    }

    return {
      red: parseInt("" + hslRgbMatched[1], 10),
      green: parseInt("" + hslRgbMatched[2], 10),
      blue: parseInt("" + hslRgbMatched[3], 10)
    };
  }

  var hslaMatched = hslaRegex.exec(normalizedColor);

  if (hslaMatched) {
    var _hue = parseInt("" + hslaMatched[1], 10);

    var _saturation = parseInt("" + hslaMatched[2], 10) / 100;

    var _lightness = parseInt("" + hslaMatched[3], 10) / 100;

    var _rgbColorString = "rgb(" + (0, _hslToRgb$1.default)(_hue, _saturation, _lightness) + ")";

    var _hslRgbMatched = rgbRegex.exec(_rgbColorString);

    if (!_hslRgbMatched) {
      throw new _errors$1.default(4, normalizedColor, _rgbColorString);
    }

    return {
      red: parseInt("" + _hslRgbMatched[1], 10),
      green: parseInt("" + _hslRgbMatched[2], 10),
      blue: parseInt("" + _hslRgbMatched[3], 10),
      alpha: parseFloat("" + hslaMatched[4])
    };
  }

  throw new _errors$1.default(5);
}

var _default = parseToRgb;
exports.default = _default;
module.exports = exports.default;
});

unwrapExports(parseToRgb_1);

var _rgbToHsl = createCommonjsModule(function (module, exports) {

exports.__esModule = true;
exports.default = void 0;

function rgbToHsl(color) {
  // make sure rgb are contained in a set of [0, 255]
  var red = color.red / 255;
  var green = color.green / 255;
  var blue = color.blue / 255;
  var max = Math.max(red, green, blue);
  var min = Math.min(red, green, blue);
  var lightness = (max + min) / 2;

  if (max === min) {
    // achromatic
    if (color.alpha !== undefined) {
      return {
        hue: 0,
        saturation: 0,
        lightness: lightness,
        alpha: color.alpha
      };
    } else {
      return {
        hue: 0,
        saturation: 0,
        lightness: lightness
      };
    }
  }

  var hue;
  var delta = max - min;
  var saturation = lightness > 0.5 ? delta / (2 - max - min) : delta / (max + min);

  switch (max) {
    case red:
      hue = (green - blue) / delta + (green < blue ? 6 : 0);
      break;

    case green:
      hue = (blue - red) / delta + 2;
      break;

    default:
      // blue case
      hue = (red - green) / delta + 4;
      break;
  }

  hue *= 60;

  if (color.alpha !== undefined) {
    return {
      hue: hue,
      saturation: saturation,
      lightness: lightness,
      alpha: color.alpha
    };
  }

  return {
    hue: hue,
    saturation: saturation,
    lightness: lightness
  };
}

var _default = rgbToHsl;
exports.default = _default;
module.exports = exports.default;
});

unwrapExports(_rgbToHsl);

var parseToHsl_1 = createCommonjsModule(function (module, exports) {

exports.__esModule = true;
exports.default = void 0;

var _parseToRgb =
/*#__PURE__*/
_interopRequireDefault(
/*#__PURE__*/
parseToRgb_1);

var _rgbToHsl$1 =
/*#__PURE__*/
_interopRequireDefault(
/*#__PURE__*/
_rgbToHsl);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Returns an HslColor or HslaColor object. This utility function is only useful
 * if want to extract a color component. With the color util `toColorString` you
 * can convert a HslColor or HslaColor object back to a string.
 *
 * @example
 * // Assigns `{ hue: 0, saturation: 1, lightness: 0.5 }` to color1
 * const color1 = parseToHsl('rgb(255, 0, 0)');
 * // Assigns `{ hue: 128, saturation: 1, lightness: 0.5, alpha: 0.75 }` to color2
 * const color2 = parseToHsl('hsla(128, 100%, 50%, 0.75)');
 */
function parseToHsl(color) {
  // Note: At a later stage we can optimize this function as right now a hsl
  // color would be parsed converted to rgb values and converted back to hsl.
  return (0, _rgbToHsl$1.default)((0, _parseToRgb.default)(color));
}

var _default = parseToHsl;
exports.default = _default;
module.exports = exports.default;
});

unwrapExports(parseToHsl_1);

var _reduceHexValue = createCommonjsModule(function (module, exports) {

exports.__esModule = true;
exports.default = void 0;

/**
 * Reduces hex values if possible e.g. #ff8866 to #f86
 * @private
 */
var reduceHexValue = function reduceHexValue(value) {
  if (value.length === 7 && value[1] === value[2] && value[3] === value[4] && value[5] === value[6]) {
    return "#" + value[1] + value[3] + value[5];
  }

  return value;
};

var _default = reduceHexValue;
exports.default = _default;
module.exports = exports.default;
});

unwrapExports(_reduceHexValue);

var _numberToHex = createCommonjsModule(function (module, exports) {

exports.__esModule = true;
exports.default = void 0;

function numberToHex(value) {
  var hex = value.toString(16);
  return hex.length === 1 ? "0" + hex : hex;
}

var _default = numberToHex;
exports.default = _default;
module.exports = exports.default;
});

unwrapExports(_numberToHex);

var _hslToHex = createCommonjsModule(function (module, exports) {

exports.__esModule = true;
exports.default = void 0;

var _hslToRgb$1 =
/*#__PURE__*/
_interopRequireDefault(
/*#__PURE__*/
_hslToRgb);

var _reduceHexValue$1 =
/*#__PURE__*/
_interopRequireDefault(
/*#__PURE__*/
_reduceHexValue);

var _numberToHex$1 =
/*#__PURE__*/
_interopRequireDefault(
/*#__PURE__*/
_numberToHex);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function colorToHex(color) {
  return (0, _numberToHex$1.default)(Math.round(color * 255));
}

function convertToHex(red, green, blue) {
  return (0, _reduceHexValue$1.default)("#" + colorToHex(red) + colorToHex(green) + colorToHex(blue));
}

function hslToHex(hue, saturation, lightness) {
  return (0, _hslToRgb$1.default)(hue, saturation, lightness, convertToHex);
}

var _default = hslToHex;
exports.default = _default;
module.exports = exports.default;
});

unwrapExports(_hslToHex);

var hsl_1 = createCommonjsModule(function (module, exports) {

exports.__esModule = true;
exports.default = void 0;

var _hslToHex$1 =
/*#__PURE__*/
_interopRequireDefault(
/*#__PURE__*/
_hslToHex);

var _errors$1 =
/*#__PURE__*/
_interopRequireDefault(
/*#__PURE__*/
_errors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Returns a string value for the color. The returned result is the smallest possible hex notation.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: hsl(359, 0.75, 0.4),
 *   background: hsl({ hue: 360, saturation: 0.75, lightness: 0.4 }),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${hsl(359, 0.75, 0.4)};
 *   background: ${hsl({ hue: 360, saturation: 0.75, lightness: 0.4 })};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "#b3191c";
 *   background: "#b3191c";
 * }
 */
function hsl(value, saturation, lightness) {
  if (typeof value === 'number' && typeof saturation === 'number' && typeof lightness === 'number') {
    return (0, _hslToHex$1.default)(value, saturation, lightness);
  } else if (typeof value === 'object' && saturation === undefined && lightness === undefined) {
    return (0, _hslToHex$1.default)(value.hue, value.saturation, value.lightness);
  }

  throw new _errors$1.default(1);
}

var _default = hsl;
exports.default = _default;
module.exports = exports.default;
});

unwrapExports(hsl_1);

var hsla_1 = createCommonjsModule(function (module, exports) {

exports.__esModule = true;
exports.default = void 0;

var _hslToHex$1 =
/*#__PURE__*/
_interopRequireDefault(
/*#__PURE__*/
_hslToHex);

var _hslToRgb$1 =
/*#__PURE__*/
_interopRequireDefault(
/*#__PURE__*/
_hslToRgb);

var _errors$1 =
/*#__PURE__*/
_interopRequireDefault(
/*#__PURE__*/
_errors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Returns a string value for the color. The returned result is the smallest possible rgba or hex notation.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: hsla(359, 0.75, 0.4, 0.7),
 *   background: hsla({ hue: 360, saturation: 0.75, lightness: 0.4, alpha: 0,7 }),
 *   background: hsla(359, 0.75, 0.4, 1),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${hsla(359, 0.75, 0.4, 0.7)};
 *   background: ${hsla({ hue: 360, saturation: 0.75, lightness: 0.4, alpha: 0,7 })};
 *   background: ${hsla(359, 0.75, 0.4, 1)};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "rgba(179,25,28,0.7)";
 *   background: "rgba(179,25,28,0.7)";
 *   background: "#b3191c";
 * }
 */
function hsla(value, saturation, lightness, alpha) {
  if (typeof value === 'number' && typeof saturation === 'number' && typeof lightness === 'number' && typeof alpha === 'number') {
    return alpha >= 1 ? (0, _hslToHex$1.default)(value, saturation, lightness) : "rgba(" + (0, _hslToRgb$1.default)(value, saturation, lightness) + "," + alpha + ")";
  } else if (typeof value === 'object' && saturation === undefined && lightness === undefined && alpha === undefined) {
    return value.alpha >= 1 ? (0, _hslToHex$1.default)(value.hue, value.saturation, value.lightness) : "rgba(" + (0, _hslToRgb$1.default)(value.hue, value.saturation, value.lightness) + "," + value.alpha + ")";
  }

  throw new _errors$1.default(2);
}

var _default = hsla;
exports.default = _default;
module.exports = exports.default;
});

unwrapExports(hsla_1);

var rgb_1 = createCommonjsModule(function (module, exports) {

exports.__esModule = true;
exports.default = void 0;

var _reduceHexValue$1 =
/*#__PURE__*/
_interopRequireDefault(
/*#__PURE__*/
_reduceHexValue);

var _numberToHex$1 =
/*#__PURE__*/
_interopRequireDefault(
/*#__PURE__*/
_numberToHex);

var _errors$1 =
/*#__PURE__*/
_interopRequireDefault(
/*#__PURE__*/
_errors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Returns a string value for the color. The returned result is the smallest possible hex notation.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: rgb(255, 205, 100),
 *   background: rgb({ red: 255, green: 205, blue: 100 }),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${rgb(255, 205, 100)};
 *   background: ${rgb({ red: 255, green: 205, blue: 100 })};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "#ffcd64";
 *   background: "#ffcd64";
 * }
 */
function rgb(value, green, blue) {
  if (typeof value === 'number' && typeof green === 'number' && typeof blue === 'number') {
    return (0, _reduceHexValue$1.default)("#" + (0, _numberToHex$1.default)(value) + (0, _numberToHex$1.default)(green) + (0, _numberToHex$1.default)(blue));
  } else if (typeof value === 'object' && green === undefined && blue === undefined) {
    return (0, _reduceHexValue$1.default)("#" + (0, _numberToHex$1.default)(value.red) + (0, _numberToHex$1.default)(value.green) + (0, _numberToHex$1.default)(value.blue));
  }

  throw new _errors$1.default(6);
}

var _default = rgb;
exports.default = _default;
module.exports = exports.default;
});

unwrapExports(rgb_1);

var rgba_1 = createCommonjsModule(function (module, exports) {

exports.__esModule = true;
exports.default = void 0;

var _parseToRgb =
/*#__PURE__*/
_interopRequireDefault(
/*#__PURE__*/
parseToRgb_1);

var _rgb =
/*#__PURE__*/
_interopRequireDefault(
/*#__PURE__*/
rgb_1);

var _errors$1 =
/*#__PURE__*/
_interopRequireDefault(
/*#__PURE__*/
_errors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Returns a string value for the color. The returned result is the smallest possible rgba or hex notation.
 *
 * Can also be used to fade a color by passing a hex value or named CSS color along with an alpha value.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: rgba(255, 205, 100, 0.7),
 *   background: rgba({ red: 255, green: 205, blue: 100, alpha: 0.7 }),
 *   background: rgba(255, 205, 100, 1),
 *   background: rgba('#ffffff', 0.4),
 *   background: rgba('black', 0.7),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${rgba(255, 205, 100, 0.7)};
 *   background: ${rgba({ red: 255, green: 205, blue: 100, alpha: 0.7 })};
 *   background: ${rgba(255, 205, 100, 1)};
 *   background: ${rgba('#ffffff', 0.4)};
 *   background: ${rgba('black', 0.7)};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "rgba(255,205,100,0.7)";
 *   background: "rgba(255,205,100,0.7)";
 *   background: "#ffcd64";
 *   background: "rgba(255,255,255,0.4)";
 *   background: "rgba(0,0,0,0.7)";
 * }
 */
function rgba(firstValue, secondValue, thirdValue, fourthValue) {
  if (typeof firstValue === 'string' && typeof secondValue === 'number') {
    var rgbValue = (0, _parseToRgb.default)(firstValue);
    return "rgba(" + rgbValue.red + "," + rgbValue.green + "," + rgbValue.blue + "," + secondValue + ")";
  } else if (typeof firstValue === 'number' && typeof secondValue === 'number' && typeof thirdValue === 'number' && typeof fourthValue === 'number') {
    return fourthValue >= 1 ? (0, _rgb.default)(firstValue, secondValue, thirdValue) : "rgba(" + firstValue + "," + secondValue + "," + thirdValue + "," + fourthValue + ")";
  } else if (typeof firstValue === 'object' && secondValue === undefined && thirdValue === undefined && fourthValue === undefined) {
    return firstValue.alpha >= 1 ? (0, _rgb.default)(firstValue.red, firstValue.green, firstValue.blue) : "rgba(" + firstValue.red + "," + firstValue.green + "," + firstValue.blue + "," + firstValue.alpha + ")";
  }

  throw new _errors$1.default(7);
}

var _default = rgba;
exports.default = _default;
module.exports = exports.default;
});

unwrapExports(rgba_1);

var toColorString_1 = createCommonjsModule(function (module, exports) {

exports.__esModule = true;
exports.default = void 0;

var _hsl =
/*#__PURE__*/
_interopRequireDefault(
/*#__PURE__*/
hsl_1);

var _hsla =
/*#__PURE__*/
_interopRequireDefault(
/*#__PURE__*/
hsla_1);

var _rgb =
/*#__PURE__*/
_interopRequireDefault(
/*#__PURE__*/
rgb_1);

var _rgba =
/*#__PURE__*/
_interopRequireDefault(
/*#__PURE__*/
rgba_1);

var _errors$1 =
/*#__PURE__*/
_interopRequireDefault(
/*#__PURE__*/
_errors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isRgb = function isRgb(color) {
  return typeof color.red === 'number' && typeof color.green === 'number' && typeof color.blue === 'number' && (typeof color.alpha !== 'number' || typeof color.alpha === 'undefined');
};

var isRgba = function isRgba(color) {
  return typeof color.red === 'number' && typeof color.green === 'number' && typeof color.blue === 'number' && typeof color.alpha === 'number';
};

var isHsl = function isHsl(color) {
  return typeof color.hue === 'number' && typeof color.saturation === 'number' && typeof color.lightness === 'number' && (typeof color.alpha !== 'number' || typeof color.alpha === 'undefined');
};

var isHsla = function isHsla(color) {
  return typeof color.hue === 'number' && typeof color.saturation === 'number' && typeof color.lightness === 'number' && typeof color.alpha === 'number';
};
/**
 * Converts a RgbColor, RgbaColor, HslColor or HslaColor object to a color string.
 * This util is useful in case you only know on runtime which color object is
 * used. Otherwise we recommend to rely on `rgb`, `rgba`, `hsl` or `hsla`.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: toColorString({ red: 255, green: 205, blue: 100 }),
 *   background: toColorString({ red: 255, green: 205, blue: 100, alpha: 0.72 }),
 *   background: toColorString({ hue: 240, saturation: 1, lightness: 0.5 }),
 *   background: toColorString({ hue: 360, saturation: 0.75, lightness: 0.4, alpha: 0.72 }),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${toColorString({ red: 255, green: 205, blue: 100 })};
 *   background: ${toColorString({ red: 255, green: 205, blue: 100, alpha: 0.72 })};
 *   background: ${toColorString({ hue: 240, saturation: 1, lightness: 0.5 })};
 *   background: ${toColorString({ hue: 360, saturation: 0.75, lightness: 0.4, alpha: 0.72 })};
 * `
 *
 * // CSS in JS Output
 * element {
 *   background: "#ffcd64";
 *   background: "rgba(255,205,100,0.72)";
 *   background: "#00f";
 *   background: "rgba(179,25,25,0.72)";
 * }
 */


function toColorString(color) {
  if (typeof color !== 'object') throw new _errors$1.default(8);
  if (isRgba(color)) return (0, _rgba.default)(color);
  if (isRgb(color)) return (0, _rgb.default)(color);
  if (isHsla(color)) return (0, _hsla.default)(color);
  if (isHsl(color)) return (0, _hsl.default)(color);
  throw new _errors$1.default(8);
}

var _default = toColorString;
exports.default = _default;
module.exports = exports.default;
});

unwrapExports(toColorString_1);

var darken_1 = createCommonjsModule(function (module, exports) {

exports.__esModule = true;
exports.default = void 0;

var _curry$1 =
/*#__PURE__*/
_interopRequireDefault(
/*#__PURE__*/
_curry);

var _guard$1 =
/*#__PURE__*/
_interopRequireDefault(
/*#__PURE__*/
_guard);

var _parseToHsl =
/*#__PURE__*/
_interopRequireDefault(
/*#__PURE__*/
parseToHsl_1);

var _toColorString =
/*#__PURE__*/
_interopRequireDefault(
/*#__PURE__*/
toColorString_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * Returns a string value for the darkened color.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: darken(0.2, '#FFCD64'),
 *   background: darken('0.2', 'rgba(255,205,100,0.7)'),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${darken(0.2, '#FFCD64')};
 *   background: ${darken('0.2', 'rgba(255,205,100,0.7)')};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "#ffbd31";
 *   background: "rgba(255,189,49,0.7)";
 * }
 */
function darken(amount, color) {
  if (color === 'transparent') return color;
  var hslColor = (0, _parseToHsl.default)(color);
  return (0, _toColorString.default)(_extends({}, hslColor, {
    lightness: (0, _guard$1.default)(0, 1, hslColor.lightness - parseFloat(amount))
  }));
} // prettier-ignore


var curriedDarken =
/*#__PURE__*/
(0, _curry$1.default
/* ::<number | string, string, string> */
)(darken);
var _default = curriedDarken;
exports.default = _default;
module.exports = exports.default;
});

var darken = unwrapExports(darken_1);

var getLuminance_1 = createCommonjsModule(function (module, exports) {

exports.__esModule = true;
exports.default = void 0;

var _parseToRgb =
/*#__PURE__*/
_interopRequireDefault(
/*#__PURE__*/
parseToRgb_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Returns a number (float) representing the luminance of a color.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: getLuminance('#CCCD64') >= getLuminance('#0000ff') ? '#CCCD64' : '#0000ff',
 *   background: getLuminance('rgba(58, 133, 255, 1)') >= getLuminance('rgba(255, 57, 149, 1)') ?
 *                             'rgba(58, 133, 255, 1)' :
 *                             'rgba(255, 57, 149, 1)',
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${getLuminance('#CCCD64') >= getLuminance('#0000ff') ? '#CCCD64' : '#0000ff'};
 *   background: ${getLuminance('rgba(58, 133, 255, 1)') >= getLuminance('rgba(255, 57, 149, 1)') ?
 *                             'rgba(58, 133, 255, 1)' :
 *                             'rgba(255, 57, 149, 1)'};
 *
 * // CSS in JS Output
 *
 * div {
 *   background: "#CCCD64";
 *   background: "rgba(58, 133, 255, 1)";
 * }
 */
function getLuminance(color) {
  if (color === 'transparent') return 0;
  var rgbColor = (0, _parseToRgb.default)(color);

  var _Object$keys$map = Object.keys(rgbColor).map(function (key) {
    var channel = rgbColor[key] / 255;
    return channel <= 0.03928 ? channel / 12.92 : Math.pow((channel + 0.055) / 1.055, 2.4);
  }),
      r = _Object$keys$map[0],
      g = _Object$keys$map[1],
      b = _Object$keys$map[2];

  return parseFloat((0.2126 * r + 0.7152 * g + 0.0722 * b).toFixed(3));
}

var _default = getLuminance;
exports.default = _default;
module.exports = exports.default;
});

var getLuminance = unwrapExports(getLuminance_1);
var getLuminance_2 = getLuminance_1.named;

function findColorInvert(_ref, color) {
  var black = _ref.black,
      white = _ref.white;

  if (!color || getLuminance(color) > 0.55) {
    return black;
  }

  return white;
}

var transparentize_1 = createCommonjsModule(function (module, exports) {

exports.__esModule = true;
exports.default = void 0;

var _curry$1 =
/*#__PURE__*/
_interopRequireDefault(
/*#__PURE__*/
_curry);

var _guard$1 =
/*#__PURE__*/
_interopRequireDefault(
/*#__PURE__*/
_guard);

var _rgba =
/*#__PURE__*/
_interopRequireDefault(
/*#__PURE__*/
rgba_1);

var _parseToRgb =
/*#__PURE__*/
_interopRequireDefault(
/*#__PURE__*/
parseToRgb_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * Decreases the opacity of a color. Its range for the amount is between 0 to 1.
 *
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: transparentize(0.1, '#fff');
 *   background: transparentize(0.2, 'hsl(0, 0%, 100%)'),
 *   background: transparentize('0.5', 'rgba(255, 0, 0, 0.8)'),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${transparentize(0.1, '#fff')};
 *   background: ${transparentize(0.2, 'hsl(0, 0%, 100%)')},
 *   background: ${transparentize('0.5', 'rgba(255, 0, 0, 0.8)')},
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "rgba(255,255,255,0.9)";
 *   background: "rgba(255,255,255,0.8)";
 *   background: "rgba(255,0,0,0.3)";
 * }
 */
function transparentize(amount, color) {
  if (color === 'transparent') return color;
  var parsedColor = (0, _parseToRgb.default)(color);
  var alpha = typeof parsedColor.alpha === 'number' ? parsedColor.alpha : 1;

  var colorWithAlpha = _extends({}, parsedColor, {
    alpha: (0, _guard$1.default)(0, 1, (alpha * 100 - parseFloat(amount) * 100) / 100)
  });

  return (0, _rgba.default)(colorWithAlpha);
} // prettier-ignore


var curriedTransparentize =
/*#__PURE__*/
(0, _curry$1.default
/* ::<number | string, string, string> */
)(transparentize);
var _default = curriedTransparentize;
exports.default = _default;
module.exports = exports.default;
});

var transparentize = unwrapExports(transparentize_1);

function boxShadow(size, color, amount) {
  var shadowColor = amount ? transparentize(amount, color) : color;
  return css(["box-shadow:0 0 0 ", " ", ";"], size, shadowColor);
}

function setSize(name, size) {
  switch (size) {
    case 'small':
      return "".concat(name, ": 0.75rem;");

    case 'medium':
      return "".concat(name, ": 1.25rem;");

    case 'large':
      return "".concat(name, ": 1.5rem;");

    default:
      return "".concat(name, ": 1rem;");
  }
}

function disabledColor(theme) {
  var textColor = transparentize(0.15, theme.textDark);
  var backColor = transparentize(0.55, theme.border);
  return css(["pointer-events:none;box-shadow:none;color:", ";background-color:", ";"], textColor, backColor);
}

function setColor(_ref) {
  var theme = _ref.theme,
      color = _ref.color,
      outline = _ref.outline,
      disabled = _ref.disabled;

  if (disabled) {
    return disabledColor(theme);
  }

  if (!color) {
    return css(["background-color:", ";border-color:", ";color:", ";&:hover{border-color:", ";}&:active{border-color:", ";}"], theme.white, theme.border, theme.text, theme.borderHover, theme.borderActive);
  }

  if (color === 'text') {
    return css(["background-color:transparent;border-color:transparent;color:", ";&:hover{text-decoration:underline;}"], theme.text);
  }

  var target = theme[color] || color;
  var invertColor = findColorInvert(theme, target);

  if (outline) {
    return css(["background-color:transparent;border-color:", ";color:", ";&:hover{background-color:", ";color:", ";}&:focus{", "}"], target, target, target, invertColor, boxShadow('0.2rem', target, 0.2));
  }

  return css(["background-color:", ";border-color:transparent;color:", ";box-shadow:none;&:hover{color:", ";background-color:", ";}&:active{background-color:", ";}&:focus{", "}"], target, invertColor, invertColor, darken(0.025, target), darken(0.05, target), boxShadow('0.2rem', target, 0.2));
}

var Button =
/*#__PURE__*/
styled.button.withConfig({
  displayName: "Button",
  componentId: "rhklzy-0"
})(["position:relative;outline:none;appearance:none;box-sizing:border-box;display:inline-block;text-align:center;white-space:nowrap;cursor:pointer;justify-content:center;vertical-align:middle;user-select:none;border:1px solid transparent;border-radius:4px;padding:0.375em 0.75em;line-height:1.5;transition-property:background-color,color,box-shadow;transition-duration:150ms;transition-timing-function:ease-in-out;", " ", " ", ""], setColor, function (_ref2) {
  var size = _ref2.size;
  return setSize('font-size', size);
}, function (_ref3) {
  var full = _ref3.full;
  return full ? 'width: 100%;' : '';
});
Button.displayName = 'Button';

var ButtonGroup =
/*#__PURE__*/
styled.div.withConfig({
  displayName: "ButtonGroup",
  componentId: "sc-22a909-0"
})(["display:inline-block;&:not(:last-child){margin-right:0.5rem;}", "{margin:0;border-radius:0;&:first-child{border-top-left-radius:4px;border-bottom-left-radius:4px;}&:not(:first-child){margin-left:-1px;}&:last-child{border-top-right-radius:4px;border-bottom-right-radius:4px;}}"], Button);
ButtonGroup.displayName = 'ButtonGroup';

var stripedStyle =
/*#__PURE__*/
css(["tbody > tr:nth-child(odd){background-color:rgba(0,0,0,0.02);}"]);
var hoverStyle =
/*#__PURE__*/
css(["tbody > tr:hover{background-color:rgba(0,0,0,0.04);}"]);
var Table =
/*#__PURE__*/
styled.table.withConfig({
  displayName: "Table",
  componentId: "sc-2hrn8c-0"
})(["display:block;", " max-width:100%;margin-bottom:1rem;background-color:transparent;-webkit-overflow-scrolling:touch;-ms-overflow-style:-ms-autohiding-scrollbar;td,th{vertical-align:top;padding:0.75rem;", " border-width:0 0 1px;}th{white-space:nowrap;}", " ", " ", ""], function (_ref) {
  var full = _ref.full;
  return full ? css(["width:100%;"]) : '';
}, function (_ref2) {
  var theme = _ref2.theme,
      bordered = _ref2.bordered;
  return bordered ? css(["border:1px solid ", ";"], theme.border) : '';
}, function (_ref3) {
  var striped = _ref3.striped;
  return striped ? stripedStyle : '';
}, function (_ref4) {
  var hover = _ref4.hover;
  return hover ? hoverStyle : '';
}, function (_ref5) {
  var headerStyle = _ref5.headerStyle;
  return headerStyle ? css(["th{", "}"], headerStyle) : '';
});

function setColor$1(_ref) {
  var color = _ref.color,
      theme = _ref.theme;
  if (!color) return {};
  var target = theme[color] || color;
  var invertColor = findColorInvert(theme, target);
  return css(["background-color:", ";color:", ";"], target, invertColor);
}

var Box =
/*#__PURE__*/
styled.div.withConfig({
  displayName: "Box",
  componentId: "v21x8u-0"
})(["position:relative;display:flex;flex-direction:column;", " box-shadow:0 1px 2px 0 rgba(0,0,0,0.05);border-radius:3px;width:100%;min-width:0;word-wrap:break-word;", ""], function (_ref2) {
  var borderless = _ref2.borderless,
      theme = _ref2.theme;
  return borderless ? "" : "border: 1px solid ".concat(theme.border, ";");
}, setColor$1);
Box.displayName = 'Box';

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

var Wrapper =
/*#__PURE__*/
styled.div.withConfig({
  displayName: "Progress__Wrapper",
  componentId: "sc-1toznj0-0"
})(["position:relative;display:block;width:100%;border-radius:4px;background-color:", ";", " ", " & > div[role=\"progressbar\"]{position:relative;height:100%;border-radius:4px;", " background-color:", ";will-change:width;transition-property:width;transition-duration:350ms;transition-timing-function:cubic-bezier(0.645,0.045,0.355,1);z-index:1;}", ""], function (_ref) {
  var theme = _ref.theme;
  return theme.background;
}, function (_ref2) {
  var size = _ref2.size;
  return setSize('height', size);
}, function (_ref3) {
  var size = _ref3.size,
      height = _ref3.height;
  return !size && height ? "height: ".concat(height, ";") : '';
}, function (_ref4) {
  var value = _ref4.value,
      max = _ref4.max;
  return value === max ? '' : 'border-bottom-right-radius: 0; border-top-right-radius: 0;';
}, function (_ref5) {
  var color = _ref5.color,
      theme = _ref5.theme;
  return theme[color] || color;
}, function (_ref6) {
  var css = _ref6.css;
  return css || '';
});

var Progress =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Progress, _PureComponent);

  function Progress() {
    _classCallCheck(this, Progress);

    return _possibleConstructorReturn(this, _getPrototypeOf(Progress).apply(this, arguments));
  }

  _createClass(Progress, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          value = _this$props.value,
          max = _this$props.max;
      var percent = Math.round(value / max * 100);
      return React.createElement(Wrapper, this.props, React.createElement("div", {
        role: "progressbar",
        style: {
          width: "".concat(percent > 100 ? 100 : percent, "%")
        }
      }));
    }
  }]);

  return Progress;
}(PureComponent);

_defineProperty(Progress, "defaultProps", {
  color: 'primary'
});

var Wrapper$1 =
/*#__PURE__*/
styled.div.withConfig({
  displayName: "Field__Wrapper",
  componentId: "sc-1vvmhhp-0"
})(["display:block;&:not(:last-child){margin-bottom:0.75rem;}", " ", ""], function (_ref) {
  var required = _ref.required,
      theme = _ref.theme;
  return required ? css(["label::after{content:'*';color:", ";margin-left:0.325rem;}"], theme.primary) : {};
}, function (_ref2) {
  var css = _ref2.css;
  return css || {};
});
var Label =
/*#__PURE__*/
styled.label.withConfig({
  displayName: "Field__Label",
  componentId: "sc-1vvmhhp-1"
})(["color:", ";display:block;font-size:1rem;margin-bottom:0.325rem;"], function (_ref3) {
  var theme = _ref3.theme;
  return theme.textStrong;
});

var Field =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Field, _PureComponent);

  function Field() {
    _classCallCheck(this, Field);

    return _possibleConstructorReturn(this, _getPrototypeOf(Field).apply(this, arguments));
  }

  _createClass(Field, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          label = _this$props.label,
          children = _this$props.children,
          htmlFor = _this$props.htmlFor,
          rest = _objectWithoutProperties(_this$props, ["label", "children", "htmlFor"]);

      return React.createElement(Wrapper$1, rest, label && React.createElement(Label, {
        htmlFor: htmlFor
      }, label), children);
    }
  }]);

  return Field;
}(PureComponent);

function hamburger(size) {
  return css(["display:block;position:relative;height:", ";width:", ";cursor:pointer;span{background-color:currentColor;display:block;height:1px;left:calc(50% - 8px);position:absolute;transform-origin:center;transition-duration:100ms;transition-property:background-color,opacity,transform;transition-timing-function:ease-out;width:16px;&:nth-child(1){top:calc(50% - 6px);}&:nth-child(2){top:calc(50% - 1px);}&:nth-child(3){top:calc(50% + 4px);}&:hover{background-color:rgba(black,0.05);}}&.active span{&:nth-child(1){transform:translateY(5px) rotate(45deg);}&:nth-child(2){opacity:0;}&:nth-child(3){transform:translateY(-5px) rotate(-45deg);}}"], size, size);
}

function Arrow(color, direction) {
  return css(["position:absolute;border:3px solid ", ";border-radius:2px;border-right:0;border-top:0;content:\" \";display:block;height:0.625em;margin-top:-0.625em;pointer-events:none;top:50%;transform:rotate(-45deg);transform-origin:center;width:0.625em;"], color);
}

var Message =
/*#__PURE__*/
styled.span.withConfig({
  displayName: "HelpMessage__Message",
  componentId: "sc-5r3ekc-0"
})(["font-size:0.8rem;color:", ";"], function (_ref) {
  var error = _ref.error,
      theme = _ref.theme;
  return error ? theme.danger : theme.textLight;
});
function HelpMessage(help, error) {
  if (error) {
    return React.createElement(Message, {
      error: true
    }, error);
  }

  if (help) {
    return React.createElement(Message, null, help);
  }
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["", ""]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var rightIcon =
/*#__PURE__*/
css(["right:0.375em;& ~ input{padding-right:1.555em !important;}"]);
var leftIcon =
/*#__PURE__*/
css(["left:0.375em;& ~ input{padding-left:1.55em !important;}"]);
var Icon =
/*#__PURE__*/
styled.span.withConfig({
  displayName: "TextInput__Icon",
  componentId: "sc-1mtsepk-0"
})(["position:absolute;top:0.375em;bottom:0;z-index:1;color:", ";", " svg,img{height:1em;width:1em;}"], function (_ref) {
  var theme = _ref.theme;
  return theme.border;
}, function (_ref2) {
  var right = _ref2.right;
  return right ? rightIcon : leftIcon;
});
var Wrapper$2 =
/*#__PURE__*/
styled.span.withConfig({
  displayName: "TextInput__Wrapper",
  componentId: "sc-1mtsepk-1"
})(["position:relative;display:block;input{max-width:100%;width:100%;height:100%;position:relative;display:block;outline:none;box-shadow:none;appearance:none;text-align:left;color:inherit;padding:0.375em 0.625em;border:none;", " ", " transition-property:box-shadow;transition-duration:150ms;transition-timing-function:ease-in-out;&:focus{border-color:", ";", "}&:disabled,[disabled],&:readonly{", "}&:disabled,[disabled]{resize:none;}&::placeholder{color:", ";}}&:hover{input:not(:disabled):not(:focus):not(:active){border-color:", ";}", "{color:", ";}}", ""], function (_ref3) {
  var outline = _ref3.outline,
      theme = _ref3.theme,
      error = _ref3.error;
  return outline ? "border: 1px solid ".concat(error ? theme.danger : theme.border, "; border-radius: 4px;") : "border-bottom: 1px solid ".concat(error ? theme.danger : theme.border, "; border-radius: 0;");
}, setSize('font-size'), function (_ref4) {
  var error = _ref4.error,
      theme = _ref4.theme;
  return error ? theme.danger : theme.primary;
}, function (_ref5) {
  var theme = _ref5.theme,
      outline = _ref5.outline,
      error = _ref5.error;
  return outline ? "box-shadow: 0 0 0 0.1em ".concat(error ? theme.danger : theme.primary, ";") : "box-shadow: 0 0.1em ".concat(error ? theme.danger : theme.primary, ";");
}, function (_ref6) {
  var theme = _ref6.theme;
  return disabledColor(theme);
}, function (_ref7) {
  var theme = _ref7.theme;
  return theme.placeholder;
}, function (_ref8) {
  var theme = _ref8.theme;
  return theme.borderHover;
}, Icon, function (_ref9) {
  var theme = _ref9.theme;
  return theme.borderHover;
}, function (_ref10) {
  var css = _ref10.css;
  return css || '';
});

var TextInput =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(TextInput, _PureComponent);

  function TextInput() {
    _classCallCheck(this, TextInput);

    return _possibleConstructorReturn(this, _getPrototypeOf(TextInput).apply(this, arguments));
  }

  _createClass(TextInput, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          outline = _this$props.outline,
          error = _this$props.error,
          help = _this$props.help,
          leftIcon = _this$props.leftIcon,
          rightIcon = _this$props.rightIcon,
          style = _this$props.style,
          css = _this$props.css,
          rest = _objectWithoutProperties(_this$props, ["className", "outline", "error", "help", "leftIcon", "rightIcon", "style", "css"]);

      return React.createElement(_StyledWrapper, {
        className: className,
        outline: outline,
        error: error,
        style: style,
        _css: css
      }, leftIcon && React.createElement(Icon, null, leftIcon), rightIcon && React.createElement(Icon, {
        right: true
      }, rightIcon), React.createElement("input", rest), HelpMessage(help, error));
    }
  }]);

  return TextInput;
}(PureComponent);

_defineProperty(TextInput, "defaultProps", {
  type: 'text',
  value: '',
  maxLength: 255,
  onChange: function onChange() {}
});

var _StyledWrapper = styled(Wrapper$2)(_templateObject(), function (p) {
  return p._css;
});

function _templateObject$1() {
  var data = _taggedTemplateLiteral(["", ""]);

  _templateObject$1 = function _templateObject() {
    return data;
  };

  return data;
}
var Wrapper$3 =
/*#__PURE__*/
styled.span.withConfig({
  displayName: "Textarea__Wrapper",
  componentId: "jj36u2-0"
})(["display:block;position:relative;textarea{max-width:100%;width:100%;height:100%;padding:0.625em;resize:vertical;appearance:none;overflow:auto;outline:none;text-align:left;color:inherit;border-radius:4px;border:1px solid ", ";transition-property:box-shadow;transition-duration:0.15s;transition-timing-function:ease-in-out;", " &:focus{border-color:", ";", "}&:disabled,[disabled],&:readonly{", "}&:disabled,[disabled]{resize:none;}&::placeholder{color:", ";}}&:hover{textarea:not(:disabled):not(:focus){border-color:", ";}}", ""], function (_ref) {
  var theme = _ref.theme,
      error = _ref.error;
  return error ? theme.danger : theme.border;
}, setSize('font-size'), function (_ref2) {
  var theme = _ref2.theme,
      error = _ref2.error;
  return error ? theme.danger : theme.primary;
}, function (_ref3) {
  var theme = _ref3.theme,
      error = _ref3.error;
  return boxShadow('0.1em', error ? theme.danger : theme.primary);
}, function (_ref4) {
  var theme = _ref4.theme;
  return disabledColor(theme);
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.placeholder;
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.borderHover;
}, function (_ref7) {
  var css = _ref7.css;
  return css || {};
});

var Textarea =
/*#__PURE__*/
function (_Component) {
  _inherits(Textarea, _Component);

  function Textarea() {
    _classCallCheck(this, Textarea);

    return _possibleConstructorReturn(this, _getPrototypeOf(Textarea).apply(this, arguments));
  }

  _createClass(Textarea, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          help = _this$props.help,
          error = _this$props.error,
          style = _this$props.style,
          css = _this$props.css,
          rest = _objectWithoutProperties(_this$props, ["className", "help", "error", "style", "css"]);

      return React.createElement(_StyledWrapper$1, {
        className: className,
        error: error,
        style: style,
        _css: css
      }, React.createElement("textarea", rest), HelpMessage(help, error));
    }
  }]);

  return Textarea;
}(Component);

_defineProperty(Textarea, "defaultProps", {
  value: '',
  col: 2,
  row: 5,
  onChange: function onChange() {}
});

var _StyledWrapper$1 = styled(Wrapper$3)(_templateObject$1(), function (p) {
  return p._css;
});

var Wrapper$4 =
/*#__PURE__*/
styled.span.withConfig({
  displayName: "Checkbox__Wrapper",
  componentId: "sc-1r9gosw-0"
})(["display:block;position:relative;width:auto;label{cursor:pointer;padding-left:0.625em;max-width:100%;width:100%;line-height:1.25;margin-right:0.625rem;&:before,&:after{content:\"\";position:absolute;}&:after{top:0.25em;left:0.2em;width:0.85em;height:0.5em;transform:rotate(-45deg);border:0.1em solid transparent;border-top-style:none;border-right-style:none;}&:before{width:1.25em;height:1.25em;left:0;top:0;background:transparent;border:1px solid ", ";border-radius:4px;cursor:pointer;will-change:background;transition:background 150ms ease-out;}}input{visibility:hidden;&:checked + label{&:before{border-color:", ";background:", ";}&:after{border-color:", ";}}&:indeterminate + label{&:before{border-color:", ";background:", ";}&:after{border-color:", ";border-left-style:none;}}&:disabled{+ label{color:", ";&:before{background:", ";border-color:", ";}}&:checked + label:after{border-color:", ";}}}"], function (_ref) {
  var theme = _ref.theme;
  return theme.border;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.primary;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.primary;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.white;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.primary;
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.primary;
}, function (_ref7) {
  var theme = _ref7.theme;
  return theme.white;
}, function (_ref8) {
  var theme = _ref8.theme;
  return transparentize(0.25, theme.textDark);
}, function (_ref9) {
  var theme = _ref9.theme;
  return transparentize(0.55, theme.border);
}, function (_ref10) {
  var theme = _ref10.theme;
  return theme.border;
}, function (_ref11) {
  var theme = _ref11.theme;
  return transparentize(0.15, theme.textDark);
});

var Checkbox =
/*#__PURE__*/
function (_Component) {
  _inherits(Checkbox, _Component);

  function Checkbox() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Checkbox);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Checkbox)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "id", "checkbox_".concat(_this.props.name));

    return _this;
  }

  _createClass(Checkbox, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          children = _this$props.children,
          rest = _objectWithoutProperties(_this$props, ["className", "children"]);

      return React.createElement(Wrapper$4, {
        className: className
      }, React.createElement("input", _extends({
        type: "checkbox",
        id: this.id
      }, rest)), React.createElement("label", {
        htmlFor: this.id
      }, children));
    }
  }]);

  return Checkbox;
}(Component);

_defineProperty(Checkbox, "defaultProps", {
  name: null,
  children: null,
  checked: false,
  onChange: function onChange() {}
});

function _templateObject$2() {
  var data = _taggedTemplateLiteral(["", ""]);

  _templateObject$2 = function _templateObject() {
    return data;
  };

  return data;
}
var InputWrapper =
/*#__PURE__*/
styled.span.withConfig({
  displayName: "Select__InputWrapper",
  componentId: "ffa0bn-0"
})(["position:relative;display:block;select{display:block;cursor:pointer;appearance:none;outline:none;max-width:100%;width:100%;height:100%;background-color:transparent;padding:0.375em 0.625em;padding-right:1.35em;text-align:left;color:inherit;", " border:none;", " will-change:box-shadow;transition-property:box-shadow;transition-duration:150ms;transition-timing-function:ease-in-out;&:focus{border-color:", ";box-shadow:", ";}&::-ms-expand{display:none;}&:-moz-focusring{color:transparent;text-shadow:0 0 0 #000;}&:disabled,[disabled],&:readonly{", "}&:invalid{color:", ";}}&::after{", " top:1.25em;right:0.625em;z-index:4;}", " ", ""], function (_ref) {
  var size = _ref.size;
  return setSize("font-size", size);
}, function (_ref2) {
  var outline = _ref2.outline,
      theme = _ref2.theme,
      error = _ref2.error;
  return outline ? css(["border:1px solid ", ";border-radius:4px;"], error ? theme.danger : theme.border) : css(["border-bottom:1px solid ", ";border-radius:0;"], error ? theme.danger : theme.border);
}, function (_ref3) {
  var error = _ref3.error,
      theme = _ref3.theme;
  return error ? theme.danger : theme.primary;
}, function (_ref4) {
  var theme = _ref4.theme,
      outline = _ref4.outline,
      error = _ref4.error;
  return outline ? error ? theme.danger : theme.primary : error ? theme.danger : theme.primary;
}, function (_ref5) {
  var theme = _ref5.theme;
  return disabledColor(theme);
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.placeholder;
}, function (_ref7) {
  var theme = _ref7.theme;
  return Arrow(theme.border);
}, function (_ref8) {
  var theme = _ref8.theme,
      disabled = _ref8.disabled;
  return disabled ? {} : css(["&:hover{select:not(:disabled):not(:focus){border-color:", ";}&::after{border-color:", ";}}"], theme.borderHover, theme.borderHover);
}, function (_ref9) {
  var css = _ref9.css;
  return css || {};
});

var Select =
/*#__PURE__*/
function (_Component) {
  _inherits(Select, _Component);

  function Select() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Select);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Select)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "renderLabel", function (label) {
      if (_this.props.render) {
        return _this.props.render(label);
      }

      return label;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "renderItem", function () {
      return _this.props.options.map(function (item, idx) {
        if (typeof item === 'string') {
          return React.createElement("option", {
            key: item,
            value: item
          }, _this.renderLabel(item));
        }

        var id = item.id,
            name = item.name;
        return React.createElement("option", {
          key: "".concat(id, "_").concat(idx),
          value: id
        }, _this.renderLabel(name));
      });
    });

    return _this;
  }

  _createClass(Select, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          css = _this$props.css,
          className = _this$props.className,
          inputSize = _this$props.inputSize,
          outline = _this$props.outline,
          options = _this$props.options,
          error = _this$props.error,
          help = _this$props.help,
          placeholder = _this$props.placeholder,
          disabled = _this$props.disabled,
          rest = _objectWithoutProperties(_this$props, ["css", "className", "inputSize", "outline", "options", "error", "help", "placeholder", "disabled"]);

      return React.createElement(_StyledInputWrapper, {
        className: className,
        size: inputSize,
        outline: outline,
        error: error,
        disabled: disabled,
        _css: css
      }, React.createElement("select", _extends({}, rest, {
        disabled: disabled,
        required: Boolean(placeholder)
      }), placeholder && React.createElement("option", {
        value: ""
      }, placeholder), this.renderItem()), HelpMessage(help, error));
    }
  }]);

  return Select;
}(Component);

_defineProperty(Select, "defaultProps", {
  name: null,
  value: '',
  onChange: function onChange() {},
  options: []
});

var _StyledInputWrapper = styled(InputWrapper)(_templateObject$2(), function (p) {
  return p._css;
});

var RadioLabel =
/*#__PURE__*/
css(["label{cursor:pointer;padding-left:1.625em;max-width:100%;width:100%;line-height:1.25;margin-right:0.625rem;&:before,&:after{content:\"\";position:absolute;}&:after{top:0.375em;left:0.375em;width:0.5em;height:0.5em;background:", ";border:none;transform:scale(0);border-radius:50%;will-change:transform;transition:transform 150ms ease-out;}&:before{width:1.25em;height:1.25em;left:0;top:0;background:transparent;border:0.1em solid ", ";border-radius:50%;will-change:background;transition:background 150ms ease-out;}}input{display:none;&:checked{+ label:before{border-color:", ";}+ label:after{transform:scale(1);}}&:disabled{+ label{color:", ";&:before{background:", ";border-color:", ";}}&:checked + label:after{background:", ";}}}"], function (_ref) {
  var theme = _ref.theme;
  return theme.primary;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.border;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.primary;
}, function (_ref4) {
  var theme = _ref4.theme;
  return transparentize(0.25, theme.textDark);
}, function (_ref5) {
  var theme = _ref5.theme;
  return transparentize(0.55, theme.border);
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.border;
}, function (_ref7) {
  var theme = _ref7.theme;
  return transparentize(0.15, theme.textDark);
});
var ButtonLabel =
/*#__PURE__*/
css(["display:inline-flex;label{cursor:pointer;padding:0.375em 0.75em;height:2.25em;border:1px solid ", ";text-align:center;width:100%;&:hover{border-color:", ";}}input{display:none;&:checked + label{z-index:1;border-color:", ";background-color:", ";}&:disabled{+ label{cursor:default;color:", ";background-color:", ";border-color:", ";}&:checked + label{border-color:", ";background-color:", ";}}}& + &{margin-left:-1px;}&:first-child label{border-top-left-radius:4px;border-bottom-left-radius:4px;}&:last-child label{border-top-right-radius:4px;border-bottom-right-radius:4px;}"], function (_ref8) {
  var theme = _ref8.theme;
  return theme.border;
}, function (_ref9) {
  var theme = _ref9.theme;
  return theme.borderHover;
}, function (_ref10) {
  var theme = _ref10.theme;
  return theme.primary;
}, function (_ref11) {
  var theme = _ref11.theme;
  return transparentize(0.55, theme.primary);
}, function (_ref12) {
  var theme = _ref12.theme;
  return transparentize(0.25, theme.textDark);
}, function (_ref13) {
  var theme = _ref13.theme;
  return transparentize(0.55, theme.border);
}, function (_ref14) {
  var theme = _ref14.theme;
  return theme.border;
}, function (_ref15) {
  var theme = _ref15.theme;
  return theme.textDark;
}, function (_ref16) {
  var theme = _ref16.theme;
  return transparentize(0.65, theme.textDark);
});
var Wrapper$5 =
/*#__PURE__*/
styled.span.withConfig({
  displayName: "Radio__Wrapper",
  componentId: "sc-20otqg-0"
})(["display:block;position:relative;width:auto;", ""], function (_ref17) {
  var button = _ref17.button;
  return button ? ButtonLabel : RadioLabel;
});

var Radio =
/*#__PURE__*/
function (_Component) {
  _inherits(Radio, _Component);

  function Radio() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Radio);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Radio)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "id", "radio_".concat(_this.props.name, ":").concat(_this.props.value));

    return _this;
  }

  _createClass(Radio, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          children = _this$props.children,
          button = _this$props.button,
          color = _this$props.color,
          style = _this$props.style,
          rest = _objectWithoutProperties(_this$props, ["className", "children", "button", "color", "style"]);

      return React.createElement(Wrapper$5, {
        className: className,
        button: button,
        color: color,
        style: style
      }, React.createElement("input", _extends({
        id: this.id,
        type: "radio"
      }, rest)), React.createElement("label", {
        htmlFor: this.id
      }, children));
    }
  }]);

  return Radio;
}(Component);

_defineProperty(Radio, "defaultProps", {
  name: null,
  children: null,
  checked: false,
  button: false,
  onChange: function onChange() {}
});

function Approved(props) {
  return React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "30",
    height: "30",
    viewBox: "0 0 30 30"
  }, props), React.createElement("g", {
    transform: "translate(-80 -215)"
  }, React.createElement("g", {
    transform: "translate(17 39)"
  }, React.createElement("g", {
    transform: "translate(63 176)",
    fill: "none"
  }, React.createElement("path", {
    d: "M 15 29 C 11.26047039031982 29 7.744760036468506 27.54375076293945 5.100510120391846 24.89949035644531 C 2.456249952316284 22.25523948669434 1 18.73953056335449 1 15 C 1 11.26047039031982 2.456249952316284 7.744760036468506 5.100510120391846 5.100510120391846 C 7.744760036468506 2.456249952316284 11.26047039031982 1 15 1 C 18.73953056335449 1 22.25523948669434 2.456249952316284 24.89949035644531 5.100510120391846 C 27.54375076293945 7.744760036468506 29 11.26047039031982 29 15 C 29 18.73953056335449 27.54375076293945 22.25523948669434 24.89949035644531 24.89949035644531 C 22.25523948669434 27.54375076293945 18.73953056335449 29 15 29 Z",
    stroke: "none"
  }), React.createElement("path", {
    d: "M 15 2 C 11.5275707244873 2 8.262990951538086 3.352239608764648 5.807609558105469 5.807609558105469 C 3.352239608764648 8.262990951538086 2 11.5275707244873 2 15 C 2 18.47243118286133 3.352239608764648 21.73701095581055 5.807609558105469 24.19239044189453 C 8.262990951538086 26.64776039123535 11.5275707244873 28 15 28 C 18.47243118286133 28 21.73701095581055 26.64776039123535 24.19239044189453 24.19239044189453 C 26.64776039123535 21.73701095581055 28 18.47243118286133 28 15 C 28 11.5275707244873 26.64776039123535 8.262990951538086 24.19239044189453 5.807609558105469 C 21.73701095581055 3.352239608764648 18.47243118286133 2 15 2 M 15 0 C 23.28426933288574 0 30 6.715730667114258 30 15 C 30 23.28426933288574 23.28426933288574 30 15 30 C 6.715730667114258 30 0 23.28426933288574 0 15 C 0 6.715730667114258 6.715730667114258 0 15 0 Z",
    stroke: "none",
    fill: "currentColor"
  }))), React.createElement("path", {
    d: "M8.925,15.871,5.047,11.886,3.41,13.41,9,19,20.562,7.467l-1.7-1.595Z",
    transform: "translate(82.59 217.595)",
    fill: "currentColor"
  })));
}

function ChevronLeftRound(props) {
  return React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "30",
    height: "30",
    viewBox: "0 0 30 30"
  }, props), React.createElement("g", {
    transform: "translate(-36 -36)"
  }, React.createElement("g", {
    transform: "translate(36 36)",
    fill: "none"
  }, React.createElement("path", {
    d: "M 15 29 C 11.26047039031982 29 7.744760036468506 27.54375076293945 5.100510120391846 24.89949035644531 C 2.456249952316284 22.25523948669434 1 18.73953056335449 1 15 C 1 11.26047039031982 2.456249952316284 7.744760036468506 5.100510120391846 5.100510120391846 C 7.744760036468506 2.456249952316284 11.26047039031982 1 15 1 C 18.73953056335449 1 22.25523948669434 2.456249952316284 24.89949035644531 5.100510120391846 C 27.54375076293945 7.744760036468506 29 11.26047039031982 29 15 C 29 18.73953056335449 27.54375076293945 22.25523948669434 24.89949035644531 24.89949035644531 C 22.25523948669434 27.54375076293945 18.73953056335449 29 15 29 Z",
    stroke: "none"
  }), React.createElement("path", {
    d: "M 15 2 C 11.5275707244873 2 8.262990951538086 3.352239608764648 5.807609558105469 5.807609558105469 C 3.352239608764648 8.262990951538086 2 11.5275707244873 2 15 C 2 18.47243118286133 3.352239608764648 21.73701095581055 5.807609558105469 24.19239044189453 C 8.262990951538086 26.64776039123535 11.5275707244873 28 15 28 C 18.47243118286133 28 21.73701095581055 26.64776039123535 24.19239044189453 24.19239044189453 C 26.64776039123535 21.73701095581055 28 18.47243118286133 28 15 C 28 11.5275707244873 26.64776039123535 8.262990951538086 24.19239044189453 5.807609558105469 C 21.73701095581055 3.352239608764648 18.47243118286133 2 15 2 M 15 0 C 23.28426933288574 0 30 6.715730667114258 30 15 C 30 23.28426933288574 23.28426933288574 30 15 30 C 6.715730667114258 30 0 23.28426933288574 0 15 C 0 6.715730667114258 6.715730667114258 0 15 0 Z",
    stroke: "none",
    fill: "currentColor"
  })), React.createElement("g", {
    transform: "translate(-207 -2136)"
  }, React.createElement("path", {
    d: "M1811.182,4362.342l-7.567,6.731,7.567,6.2",
    transform: "translate(-1550.116 -2181.842)",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2"
  }))));
}

function ChevronRightRound(props) {
  return React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "30",
    height: "30",
    viewBox: "0 0 30 30"
  }, props), React.createElement("g", {
    transform: "translate(93 206) rotate(180)"
  }, React.createElement("g", {
    transform: "translate(63 176)",
    fill: "none"
  }, React.createElement("path", {
    d: "M 15 29 C 11.26047039031982 29 7.744760036468506 27.54375076293945 5.100510120391846 24.89949035644531 C 2.456249952316284 22.25523948669434 1 18.73953056335449 1 15 C 1 11.26047039031982 2.456249952316284 7.744760036468506 5.100510120391846 5.100510120391846 C 7.744760036468506 2.456249952316284 11.26047039031982 1 15 1 C 18.73953056335449 1 22.25523948669434 2.456249952316284 24.89949035644531 5.100510120391846 C 27.54375076293945 7.744760036468506 29 11.26047039031982 29 15 C 29 18.73953056335449 27.54375076293945 22.25523948669434 24.89949035644531 24.89949035644531 C 22.25523948669434 27.54375076293945 18.73953056335449 29 15 29 Z",
    stroke: "none"
  }), React.createElement("path", {
    d: "M 15 2 C 11.5275707244873 2 8.262990951538086 3.352239608764648 5.807609558105469 5.807609558105469 C 3.352239608764648 8.262990951538086 2 11.5275707244873 2 15 C 2 18.47243118286133 3.352239608764648 21.73701095581055 5.807609558105469 24.19239044189453 C 8.262990951538086 26.64776039123535 11.5275707244873 28 15 28 C 18.47243118286133 28 21.73701095581055 26.64776039123535 24.19239044189453 24.19239044189453 C 26.64776039123535 21.73701095581055 28 18.47243118286133 28 15 C 28 11.5275707244873 26.64776039123535 8.262990951538086 24.19239044189453 5.807609558105469 C 21.73701095581055 3.352239608764648 18.47243118286133 2 15 2 M 15 0 C 23.28426933288574 0 30 6.715730667114258 30 15 C 30 23.28426933288574 23.28426933288574 30 15 30 C 6.715730667114258 30 0 23.28426933288574 0 15 C 0 6.715730667114258 6.715730667114258 0 15 0 Z",
    stroke: "none",
    fill: "currentColor"
  })), React.createElement("g", {
    transform: "translate(-180 -1996)"
  }, React.createElement("path", {
    d: "M1811.182,4362.342l-7.567,6.731,7.567,6.2",
    transform: "translate(-1550.116 -2181.842)",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2"
  }))));
}

function FileRound(props) {
  return React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "30",
    height: "30",
    viewBox: "0 0 30 30"
  }, props), React.createElement("g", {
    transform: "translate(-468 -383)"
  }, React.createElement("g", {
    transform: "translate(405 207)"
  }, React.createElement("g", {
    transform: "translate(63 176)",
    fill: "none"
  }, React.createElement("path", {
    d: "M 15 29 C 11.26047039031982 29 7.744760036468506 27.54375076293945 5.100510120391846 24.89949035644531 C 2.456249952316284 22.25523948669434 1 18.73953056335449 1 15 C 1 11.26047039031982 2.456249952316284 7.744760036468506 5.100510120391846 5.100510120391846 C 7.744760036468506 2.456249952316284 11.26047039031982 1 15 1 C 18.73953056335449 1 22.25523948669434 2.456249952316284 24.89949035644531 5.100510120391846 C 27.54375076293945 7.744760036468506 29 11.26047039031982 29 15 C 29 18.73953056335449 27.54375076293945 22.25523948669434 24.89949035644531 24.89949035644531 C 22.25523948669434 27.54375076293945 18.73953056335449 29 15 29 Z",
    stroke: "none"
  }), React.createElement("path", {
    d: "M 15 2 C 11.5275707244873 2 8.262990951538086 3.352239608764648 5.807609558105469 5.807609558105469 C 3.352239608764648 8.262990951538086 2 11.5275707244873 2 15 C 2 18.47243118286133 3.352239608764648 21.73701095581055 5.807609558105469 24.19239044189453 C 8.262990951538086 26.64776039123535 11.5275707244873 28 15 28 C 18.47243118286133 28 21.73701095581055 26.64776039123535 24.19239044189453 24.19239044189453 C 26.64776039123535 21.73701095581055 28 18.47243118286133 28 15 C 28 11.5275707244873 26.64776039123535 8.262990951538086 24.19239044189453 5.807609558105469 C 21.73701095581055 3.352239608764648 18.47243118286133 2 15 2 M 15 0 C 23.28426933288574 0 30 6.715730667114258 30 15 C 30 23.28426933288574 23.28426933288574 30 15 30 C 6.715730667114258 30 0 23.28426933288574 0 15 C 0 6.715730667114258 6.715730667114258 0 15 0 Z",
    stroke: "none",
    fill: "currentColor"
  }))), React.createElement("g", {
    transform: "translate(384 208)"
  }, React.createElement("g", {
    transform: "translate(93 182)",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2"
  }, React.createElement("rect", {
    width: "12",
    height: "16",
    rx: "1",
    stroke: "none"
  }), React.createElement("rect", {
    x: "1",
    y: "1",
    width: "10",
    height: "14",
    fill: "none"
  })), React.createElement("rect", {
    width: "4",
    height: "1.3",
    transform: "translate(97 186)",
    fill: "currentColor"
  }), React.createElement("rect", {
    width: "4",
    height: "1.3",
    transform: "translate(97 189)",
    fill: "currentColor"
  }), React.createElement("rect", {
    width: "4",
    height: "1.3",
    transform: "translate(97 192)",
    fill: "currentColor"
  }))));
}

function Pencil(props) {
  return React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "17.796",
    height: "17.908",
    viewBox: "0 0 17.796 17.908"
  }, props), React.createElement("g", null, React.createElement("g", null, React.createElement("path", {
    d: "M1.254,12.674.5,17.408l4.726-.8L17.3,4.472,13.281.5Z",
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "1"
  })), React.createElement("line", {
    x2: "3.851",
    y2: "3.838",
    transform: "translate(1.375 12.766)",
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "1"
  }), React.createElement("line", {
    x2: "3.836",
    y2: "3.801",
    transform: "translate(10.949 2.959)",
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "1"
  })));
}

function User(props) {
  return React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "30",
    height: "30",
    viewBox: "0 0 30 30"
  }, props), React.createElement("g", {
    transform: "translate(-468 -383)"
  }, React.createElement("g", {
    transform: "translate(468 383)",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2"
  }, React.createElement("circle", {
    cx: "15",
    cy: "15",
    r: "15",
    stroke: "none"
  }), React.createElement("circle", {
    cx: "15",
    cy: "15",
    r: "14",
    fill: "none"
  })), React.createElement("path", {
    d: "M-4-310a6.018,6.018,0,0,1,6-6H4a6.018,6.018,0,0,1,6,6Zm2.6-2H7.5A4.033,4.033,0,0,0,4-314H2.1A4.035,4.035,0,0,0-1.4-312Zm.4-9v-1a4.012,4.012,0,0,1,4-4,4.012,4.012,0,0,1,4,4v1a4.012,4.012,0,0,1-4,4A4.012,4.012,0,0,1-1-321Zm2-1v1a2.006,2.006,0,0,0,2,2,2.006,2.006,0,0,0,2-2v-1a2.006,2.006,0,0,0-2-2A2.006,2.006,0,0,0,1-322Z",
    transform: "translate(480 716)",
    fill: "currentColor"
  })));
}

function Close(props) {
  return React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "30",
    height: "30",
    viewBox: "0 0 30 30",
    pointerEvents: "bounding-box"
  }, props), React.createElement("g", {
    transform: "translate(-131 -571)"
  }, React.createElement("g", {
    transform: "translate(132 572)"
  }, React.createElement("path", {
    d: "M28.5,26,16,13.5,28.5,1",
    transform: "translate(-3.501 -1)",
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeMiterlimit: "10",
    strokeWidth: "2"
  }), React.createElement("path", {
    d: "M1,26,13.5,13.5,1,1",
    transform: "translate(-1 -1)",
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeMiterlimit: "10",
    strokeWidth: "2"
  }))));
}

function Refresh(props) {
  return React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "30",
    height: "30",
    viewBox: "0 0 30 30"
  }, props), React.createElement("path", {
    d: "M24.065,9A15.069,15.069,0,0,0,9.142,22.105a1.256,1.256,0,1,0,2.478.406c0-.027.008-.055.01-.082a12.52,12.52,0,0,1,21.3-7.226l-2.584,2.584,7.532,1.255-1.255-7.532-1.92,1.92A15,15,0,0,0,24.065,9Zm13.7,15.589A1.255,1.255,0,0,0,36.5,25.7a12.512,12.512,0,0,1-21.893,6.569l1.927-1.927L9,29.086l1.255,7.532,2.572-2.572a15.02,15.02,0,0,0,26.16-8.023A1.256,1.256,0,0,0,37.923,24.6,1.273,1.273,0,0,0,37.763,24.589Z",
    transform: "translate(-9 -9)",
    fill: "currentColor"
  }));
}

var reactIs_production_min = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: !0
  });
  var b = "function" === typeof Symbol && Symbol.for,
      c = b ? Symbol.for("react.element") : 60103,
      d = b ? Symbol.for("react.portal") : 60106,
      e = b ? Symbol.for("react.fragment") : 60107,
      f = b ? Symbol.for("react.strict_mode") : 60108,
      g = b ? Symbol.for("react.profiler") : 60114,
      h = b ? Symbol.for("react.provider") : 60109,
      k = b ? Symbol.for("react.context") : 60110,
      l = b ? Symbol.for("react.async_mode") : 60111,
      m = b ? Symbol.for("react.concurrent_mode") : 60111,
      n = b ? Symbol.for("react.forward_ref") : 60112,
      p = b ? Symbol.for("react.suspense") : 60113,
      q = b ? Symbol.for("react.memo") : 60115,
      r = b ? Symbol.for("react.lazy") : 60116;

  function t(a) {
    if ("object" === typeof a && null !== a) {
      var u = a.$$typeof;

      switch (u) {
        case c:
          switch (a = a.type, a) {
            case l:
            case m:
            case e:
            case g:
            case f:
            case p:
              return a;

            default:
              switch (a = a && a.$$typeof, a) {
                case k:
                case n:
                case h:
                  return a;

                default:
                  return u;
              }

          }

        case r:
        case q:
        case d:
          return u;
      }
    }
  }

  function v(a) {
    return t(a) === m;
  }

  exports.typeOf = t;
  exports.AsyncMode = l;
  exports.ConcurrentMode = m;
  exports.ContextConsumer = k;
  exports.ContextProvider = h;
  exports.Element = c;
  exports.ForwardRef = n;
  exports.Fragment = e;
  exports.Lazy = r;
  exports.Memo = q;
  exports.Portal = d;
  exports.Profiler = g;
  exports.StrictMode = f;
  exports.Suspense = p;

  exports.isValidElementType = function (a) {
    return "string" === typeof a || "function" === typeof a || a === e || a === m || a === g || a === f || a === p || "object" === typeof a && null !== a && (a.$$typeof === r || a.$$typeof === q || a.$$typeof === h || a.$$typeof === k || a.$$typeof === n);
  };

  exports.isAsyncMode = function (a) {
    return v(a) || t(a) === l;
  };

  exports.isConcurrentMode = v;

  exports.isContextConsumer = function (a) {
    return t(a) === k;
  };

  exports.isContextProvider = function (a) {
    return t(a) === h;
  };

  exports.isElement = function (a) {
    return "object" === typeof a && null !== a && a.$$typeof === c;
  };

  exports.isForwardRef = function (a) {
    return t(a) === n;
  };

  exports.isFragment = function (a) {
    return t(a) === e;
  };

  exports.isLazy = function (a) {
    return t(a) === r;
  };

  exports.isMemo = function (a) {
    return t(a) === q;
  };

  exports.isPortal = function (a) {
    return t(a) === d;
  };

  exports.isProfiler = function (a) {
    return t(a) === g;
  };

  exports.isStrictMode = function (a) {
    return t(a) === f;
  };

  exports.isSuspense = function (a) {
    return t(a) === p;
  };
});
unwrapExports(reactIs_production_min);
var reactIs_production_min_1 = reactIs_production_min.typeOf;
var reactIs_production_min_2 = reactIs_production_min.AsyncMode;
var reactIs_production_min_3 = reactIs_production_min.ConcurrentMode;
var reactIs_production_min_4 = reactIs_production_min.ContextConsumer;
var reactIs_production_min_5 = reactIs_production_min.ContextProvider;
var reactIs_production_min_6 = reactIs_production_min.Element;
var reactIs_production_min_7 = reactIs_production_min.ForwardRef;
var reactIs_production_min_8 = reactIs_production_min.Fragment;
var reactIs_production_min_9 = reactIs_production_min.Lazy;
var reactIs_production_min_10 = reactIs_production_min.Memo;
var reactIs_production_min_11 = reactIs_production_min.Portal;
var reactIs_production_min_12 = reactIs_production_min.Profiler;
var reactIs_production_min_13 = reactIs_production_min.StrictMode;
var reactIs_production_min_14 = reactIs_production_min.Suspense;
var reactIs_production_min_15 = reactIs_production_min.isValidElementType;
var reactIs_production_min_16 = reactIs_production_min.isAsyncMode;
var reactIs_production_min_17 = reactIs_production_min.isConcurrentMode;
var reactIs_production_min_18 = reactIs_production_min.isContextConsumer;
var reactIs_production_min_19 = reactIs_production_min.isContextProvider;
var reactIs_production_min_20 = reactIs_production_min.isElement;
var reactIs_production_min_21 = reactIs_production_min.isForwardRef;
var reactIs_production_min_22 = reactIs_production_min.isFragment;
var reactIs_production_min_23 = reactIs_production_min.isLazy;
var reactIs_production_min_24 = reactIs_production_min.isMemo;
var reactIs_production_min_25 = reactIs_production_min.isPortal;
var reactIs_production_min_26 = reactIs_production_min.isProfiler;
var reactIs_production_min_27 = reactIs_production_min.isStrictMode;
var reactIs_production_min_28 = reactIs_production_min.isSuspense;

var reactIs_development = createCommonjsModule(function (module, exports) {

  if (process.env.NODE_ENV !== "production") {
    (function () {

      Object.defineProperty(exports, '__esModule', {
        value: true
      }); // The Symbol used to tag the ReactElement-like types. If there is no native Symbol
      // nor polyfill, then a plain number is used for performance.

      var hasSymbol = typeof Symbol === 'function' && Symbol.for;
      var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
      var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
      var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
      var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
      var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
      var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
      var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;
      var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
      var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
      var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
      var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
      var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
      var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;

      function isValidElementType(type) {
        return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
        type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE);
      }
      /**
       * Forked from fbjs/warning:
       * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
       *
       * Only change is we use console.warn instead of console.error,
       * and do nothing when 'console' is not supported.
       * This really simplifies the code.
       * ---
       * Similar to invariant but only logs a warning if the condition is not met.
       * This can be used to log issues in development environments in critical
       * paths. Removing the logging code for production environments will keep the
       * same logic and follow the same code paths.
       */


      var lowPriorityWarning = function () {};

      {
        var printWarning = function (format) {
          for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            args[_key - 1] = arguments[_key];
          }

          var argIndex = 0;
          var message = 'Warning: ' + format.replace(/%s/g, function () {
            return args[argIndex++];
          });

          if (typeof console !== 'undefined') {
            console.warn(message);
          }

          try {
            // --- Welcome to debugging React ---
            // This error was thrown as a convenience so that you can use this stack
            // to find the callsite that caused this warning to fire.
            throw new Error(message);
          } catch (x) {}
        };

        lowPriorityWarning = function (condition, format) {
          if (format === undefined) {
            throw new Error('`lowPriorityWarning(condition, format, ...args)` requires a warning ' + 'message argument');
          }

          if (!condition) {
            for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
              args[_key2 - 2] = arguments[_key2];
            }

            printWarning.apply(undefined, [format].concat(args));
          }
        };
      }
      var lowPriorityWarning$1 = lowPriorityWarning;

      function typeOf(object) {
        if (typeof object === 'object' && object !== null) {
          var $$typeof = object.$$typeof;

          switch ($$typeof) {
            case REACT_ELEMENT_TYPE:
              var type = object.type;

              switch (type) {
                case REACT_ASYNC_MODE_TYPE:
                case REACT_CONCURRENT_MODE_TYPE:
                case REACT_FRAGMENT_TYPE:
                case REACT_PROFILER_TYPE:
                case REACT_STRICT_MODE_TYPE:
                case REACT_SUSPENSE_TYPE:
                  return type;

                default:
                  var $$typeofType = type && type.$$typeof;

                  switch ($$typeofType) {
                    case REACT_CONTEXT_TYPE:
                    case REACT_FORWARD_REF_TYPE:
                    case REACT_PROVIDER_TYPE:
                      return $$typeofType;

                    default:
                      return $$typeof;
                  }

              }

            case REACT_LAZY_TYPE:
            case REACT_MEMO_TYPE:
            case REACT_PORTAL_TYPE:
              return $$typeof;
          }
        }

        return undefined;
      } // AsyncMode is deprecated along with isAsyncMode


      var AsyncMode = REACT_ASYNC_MODE_TYPE;
      var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
      var ContextConsumer = REACT_CONTEXT_TYPE;
      var ContextProvider = REACT_PROVIDER_TYPE;
      var Element = REACT_ELEMENT_TYPE;
      var ForwardRef = REACT_FORWARD_REF_TYPE;
      var Fragment = REACT_FRAGMENT_TYPE;
      var Lazy = REACT_LAZY_TYPE;
      var Memo = REACT_MEMO_TYPE;
      var Portal = REACT_PORTAL_TYPE;
      var Profiler = REACT_PROFILER_TYPE;
      var StrictMode = REACT_STRICT_MODE_TYPE;
      var Suspense = REACT_SUSPENSE_TYPE;
      var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

      function isAsyncMode(object) {
        {
          if (!hasWarnedAboutDeprecatedIsAsyncMode) {
            hasWarnedAboutDeprecatedIsAsyncMode = true;
            lowPriorityWarning$1(false, 'The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
          }
        }
        return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
      }

      function isConcurrentMode(object) {
        return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
      }

      function isContextConsumer(object) {
        return typeOf(object) === REACT_CONTEXT_TYPE;
      }

      function isContextProvider(object) {
        return typeOf(object) === REACT_PROVIDER_TYPE;
      }

      function isElement(object) {
        return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
      }

      function isForwardRef(object) {
        return typeOf(object) === REACT_FORWARD_REF_TYPE;
      }

      function isFragment(object) {
        return typeOf(object) === REACT_FRAGMENT_TYPE;
      }

      function isLazy(object) {
        return typeOf(object) === REACT_LAZY_TYPE;
      }

      function isMemo(object) {
        return typeOf(object) === REACT_MEMO_TYPE;
      }

      function isPortal(object) {
        return typeOf(object) === REACT_PORTAL_TYPE;
      }

      function isProfiler(object) {
        return typeOf(object) === REACT_PROFILER_TYPE;
      }

      function isStrictMode(object) {
        return typeOf(object) === REACT_STRICT_MODE_TYPE;
      }

      function isSuspense(object) {
        return typeOf(object) === REACT_SUSPENSE_TYPE;
      }

      exports.typeOf = typeOf;
      exports.AsyncMode = AsyncMode;
      exports.ConcurrentMode = ConcurrentMode;
      exports.ContextConsumer = ContextConsumer;
      exports.ContextProvider = ContextProvider;
      exports.Element = Element;
      exports.ForwardRef = ForwardRef;
      exports.Fragment = Fragment;
      exports.Lazy = Lazy;
      exports.Memo = Memo;
      exports.Portal = Portal;
      exports.Profiler = Profiler;
      exports.StrictMode = StrictMode;
      exports.Suspense = Suspense;
      exports.isValidElementType = isValidElementType;
      exports.isAsyncMode = isAsyncMode;
      exports.isConcurrentMode = isConcurrentMode;
      exports.isContextConsumer = isContextConsumer;
      exports.isContextProvider = isContextProvider;
      exports.isElement = isElement;
      exports.isForwardRef = isForwardRef;
      exports.isFragment = isFragment;
      exports.isLazy = isLazy;
      exports.isMemo = isMemo;
      exports.isPortal = isPortal;
      exports.isProfiler = isProfiler;
      exports.isStrictMode = isStrictMode;
      exports.isSuspense = isSuspense;
    })();
  }
});
unwrapExports(reactIs_development);
var reactIs_development_1 = reactIs_development.typeOf;
var reactIs_development_2 = reactIs_development.AsyncMode;
var reactIs_development_3 = reactIs_development.ConcurrentMode;
var reactIs_development_4 = reactIs_development.ContextConsumer;
var reactIs_development_5 = reactIs_development.ContextProvider;
var reactIs_development_6 = reactIs_development.Element;
var reactIs_development_7 = reactIs_development.ForwardRef;
var reactIs_development_8 = reactIs_development.Fragment;
var reactIs_development_9 = reactIs_development.Lazy;
var reactIs_development_10 = reactIs_development.Memo;
var reactIs_development_11 = reactIs_development.Portal;
var reactIs_development_12 = reactIs_development.Profiler;
var reactIs_development_13 = reactIs_development.StrictMode;
var reactIs_development_14 = reactIs_development.Suspense;
var reactIs_development_15 = reactIs_development.isValidElementType;
var reactIs_development_16 = reactIs_development.isAsyncMode;
var reactIs_development_17 = reactIs_development.isConcurrentMode;
var reactIs_development_18 = reactIs_development.isContextConsumer;
var reactIs_development_19 = reactIs_development.isContextProvider;
var reactIs_development_20 = reactIs_development.isElement;
var reactIs_development_21 = reactIs_development.isForwardRef;
var reactIs_development_22 = reactIs_development.isFragment;
var reactIs_development_23 = reactIs_development.isLazy;
var reactIs_development_24 = reactIs_development.isMemo;
var reactIs_development_25 = reactIs_development.isPortal;
var reactIs_development_26 = reactIs_development.isProfiler;
var reactIs_development_27 = reactIs_development.isStrictMode;
var reactIs_development_28 = reactIs_development.isSuspense;

var reactIs = createCommonjsModule(function (module) {

  if (process.env.NODE_ENV === 'production') {
    module.exports = reactIs_production_min;
  } else {
    module.exports = reactIs_development;
  }
});

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
/* eslint-disable no-unused-vars */

var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
  if (val === null || val === undefined) {
    throw new TypeError('Object.assign cannot be called with null or undefined');
  }

  return Object(val);
}

function shouldUseNative() {
  try {
    if (!Object.assign) {
      return false;
    } // Detect buggy property enumeration order in older V8 versions.
    // https://bugs.chromium.org/p/v8/issues/detail?id=4118


    var test1 = new String('abc'); // eslint-disable-line no-new-wrappers

    test1[5] = 'de';

    if (Object.getOwnPropertyNames(test1)[0] === '5') {
      return false;
    } // https://bugs.chromium.org/p/v8/issues/detail?id=3056


    var test2 = {};

    for (var i = 0; i < 10; i++) {
      test2['_' + String.fromCharCode(i)] = i;
    }

    var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
      return test2[n];
    });

    if (order2.join('') !== '0123456789') {
      return false;
    } // https://bugs.chromium.org/p/v8/issues/detail?id=3056


    var test3 = {};
    'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
      test3[letter] = letter;
    });

    if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
      return false;
    }

    return true;
  } catch (err) {
    // We don't expect any of the above to throw, but better to be safe.
    return false;
  }
}

var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
  var from;
  var to = toObject(target);
  var symbols;

  for (var s = 1; s < arguments.length; s++) {
    from = Object(arguments[s]);

    for (var key in from) {
      if (hasOwnProperty.call(from, key)) {
        to[key] = from[key];
      }
    }

    if (getOwnPropertySymbols) {
      symbols = getOwnPropertySymbols(from);

      for (var i = 0; i < symbols.length; i++) {
        if (propIsEnumerable.call(from, symbols[i])) {
          to[symbols[i]] = from[symbols[i]];
        }
      }
    }
  }

  return to;
};

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
var ReactPropTypesSecret_1 = ReactPropTypesSecret;

var printWarning = function () {};

if (process.env.NODE_ENV !== 'production') {
  var ReactPropTypesSecret$1 = ReactPropTypesSecret_1;
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function (text) {
    var message = 'Warning: ' + text;

    if (typeof console !== 'undefined') {
      console.error(message);
    }

    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}
/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */


function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (process.env.NODE_ENV !== 'production') {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error; // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.

        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.');
            err.name = 'Invariant Violation';
            throw err;
          }

          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret$1);
        } catch (ex) {
          error = ex;
        }

        if (error && !(error instanceof Error)) {
          printWarning((componentName || 'React class') + ': type specification of ' + location + ' `' + typeSpecName + '` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a ' + typeof error + '. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).');
        }

        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;
          var stack = getStack ? getStack() : '';
          printWarning('Failed ' + location + ' type: ' + error.message + (stack != null ? stack : ''));
        }
      }
    }
  }
}
/**
 * Resets warning cache when testing.
 *
 * @private
 */


checkPropTypes.resetWarningCache = function () {
  if (process.env.NODE_ENV !== 'production') {
    loggedTypeFailures = {};
  }
};

var checkPropTypes_1 = checkPropTypes;

var has$1 = Function.call.bind(Object.prototype.hasOwnProperty);

var printWarning$1 = function () {};

if (process.env.NODE_ENV !== 'production') {
  printWarning$1 = function (text) {
    var message = 'Warning: ' + text;

    if (typeof console !== 'undefined') {
      console.error(message);
    }

    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

var factoryWithTypeCheckers = function (isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */

  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);

    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }
  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */


  var ANONYMOUS = '<<anonymous>>'; // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.

  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),
    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker
  };
  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */

  /*eslint-disable no-self-compare*/

  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */


  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  } // Make `instanceof Error` still work for returned errors.


  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (process.env.NODE_ENV !== 'production') {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }

    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret_1) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error('Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use `PropTypes.checkPropTypes()` to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
          err.name = 'Invariant Violation';
          throw err;
        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;

          if (!manualPropTypeCallCache[cacheKey] && // Avoid spamming the console because they are often not actionable except for lib authors
          manualPropTypeWarningCount < 3) {
            printWarning$1('You are manually calling a React.PropTypes validation ' + 'function for the `' + propFullName + '` prop on `' + componentName + '`. This is deprecated ' + 'and will throw in the standalone `prop-types` package. ' + 'You may be seeing this warning due to a third-party PropTypes ' + 'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.');
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }

      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }

          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }

        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);
    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);

      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }

      var propValue = props[propName];

      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }

      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret_1);

        if (error instanceof Error) {
          return error;
        }
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];

      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];

      if (!reactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (process.env.NODE_ENV !== 'production') {
        if (arguments.length > 1) {
          printWarning$1('Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' + 'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).');
        } else {
          printWarning$1('Invalid argument supplied to oneOf, expected an array.');
        }
      }

      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];

      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        if (getPropType(value) === 'symbol') {
          return String(value);
        }

        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }

    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }

      var propValue = props[propName];
      var propType = getPropType(propValue);

      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }

      for (var key in propValue) {
        if (has$1(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);

          if (error instanceof Error) {
            return error;
          }
        }
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
      process.env.NODE_ENV !== 'production' ? printWarning$1('Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];

      if (typeof checker !== 'function') {
        printWarning$1('Invalid argument supplied to oneOfType. Expected an array of check functions, but ' + 'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.');
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];

        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret_1) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }

    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);

      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }

      for (var key in shapeTypes) {
        var checker = shapeTypes[key];

        if (!checker) {
          continue;
        }

        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);

        if (error) {
          return error;
        }
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);

      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      } // We need to check all keys in case some are required but missing from
      // props.


      var allKeys = objectAssign({}, props[propName], shapeTypes);

      for (var key in allKeys) {
        var checker = shapeTypes[key];

        if (!checker) {
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' + '\nBad object: ' + JSON.stringify(props[propName], null, '  ') + '\nValid keys: ' + JSON.stringify(Object.keys(shapeTypes), null, '  '));
        }

        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);

        if (error) {
          return error;
        }
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;

      case 'boolean':
        return !propValue;

      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }

        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);

        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;

          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;

              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;

      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    } // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'


    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    } // Fallback for non-spec compliant Symbols which are polyfilled.


    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  } // Equivalent of `typeof` but with special handling for array and regexp.


  function getPropType(propValue) {
    var propType = typeof propValue;

    if (Array.isArray(propValue)) {
      return 'array';
    }

    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }

    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }

    return propType;
  } // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.


  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }

    var propType = getPropType(propValue);

    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }

    return propType;
  } // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"


  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);

    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;

      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;

      default:
        return type;
    }
  } // Returns class name of the object, if any.


  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }

    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes_1;
  ReactPropTypes.resetWarningCache = checkPropTypes_1.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;
  return ReactPropTypes;
};

function emptyFunction() {}

function emptyFunctionWithReset() {}

emptyFunctionWithReset.resetWarningCache = emptyFunction;

var factoryWithThrowingShims = function () {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret_1) {
      // It is still safe when called from React.
      return;
    }

    var err = new Error('Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use PropTypes.checkPropTypes() to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
    err.name = 'Invariant Violation';
    throw err;
  }
  shim.isRequired = shim;

  function getShim() {
    return shim;
  }
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.

  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,
    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,
    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };
  ReactPropTypes.PropTypes = ReactPropTypes;
  return ReactPropTypes;
};

var propTypes = createCommonjsModule(function (module) {
  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  if (process.env.NODE_ENV !== 'production') {
    var ReactIs = reactIs; // By explicitly using `prop-types` you are opting into new development behavior.
    // http://fb.me/prop-types-in-prod

    var throwOnDirectAccess = true;
    module.exports = factoryWithTypeCheckers(ReactIs.isElement, throwOnDirectAccess);
  } else {
    // By explicitly using `prop-types` you are opting into new production behavior.
    // http://fb.me/prop-types-in-prod
    module.exports = factoryWithThrowingShims();
  }
});

var interopRequireDefault = createCommonjsModule(function (module) {
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  module.exports = _interopRequireDefault;
});
unwrapExports(interopRequireDefault);

var hasClass_1 = createCommonjsModule(function (module, exports) {

  exports.__esModule = true;
  exports.default = hasClass;

  function hasClass(element, className) {
    if (element.classList) return !!className && element.classList.contains(className);else return (" " + (element.className.baseVal || element.className) + " ").indexOf(" " + className + " ") !== -1;
  }

  module.exports = exports["default"];
});
unwrapExports(hasClass_1);

var addClass_1 = createCommonjsModule(function (module, exports) {

  exports.__esModule = true;
  exports.default = addClass;

  var _hasClass = interopRequireDefault(hasClass_1);

  function addClass(element, className) {
    if (element.classList) element.classList.add(className);else if (!(0, _hasClass.default)(element, className)) if (typeof element.className === 'string') element.className = element.className + ' ' + className;else element.setAttribute('class', (element.className && element.className.baseVal || '') + ' ' + className);
  }

  module.exports = exports["default"];
});
unwrapExports(addClass_1);

function replaceClassName(origClass, classToRemove) {
  return origClass.replace(new RegExp('(^|\\s)' + classToRemove + '(?:\\s|$)', 'g'), '$1').replace(/\s+/g, ' ').replace(/^\s*|\s*$/g, '');
}

var removeClass = function removeClass(element, className) {
  if (element.classList) element.classList.remove(className);else if (typeof element.className === 'string') element.className = replaceClassName(element.className, className);else element.setAttribute('class', replaceClassName(element.className && element.className.baseVal || '', className));
};

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function componentWillMount() {
  // Call this.constructor.gDSFP to support sub-classes.
  var state = this.constructor.getDerivedStateFromProps(this.props, this.state);

  if (state !== null && state !== undefined) {
    this.setState(state);
  }
}

function componentWillReceiveProps(nextProps) {
  // Call this.constructor.gDSFP to support sub-classes.
  // Use the setState() updater to ensure state isn't stale in certain edge cases.
  function updater(prevState) {
    var state = this.constructor.getDerivedStateFromProps(nextProps, prevState);
    return state !== null && state !== undefined ? state : null;
  } // Binding "this" is important for shallow renderer support.


  this.setState(updater.bind(this));
}

function componentWillUpdate(nextProps, nextState) {
  try {
    var prevProps = this.props;
    var prevState = this.state;
    this.props = nextProps;
    this.state = nextState;
    this.__reactInternalSnapshotFlag = true;
    this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(prevProps, prevState);
  } finally {
    this.props = prevProps;
    this.state = prevState;
  }
} // React may warn about cWM/cWRP/cWU methods being deprecated.
// Add a flag to suppress these warnings for this special case.


componentWillMount.__suppressDeprecationWarning = true;
componentWillReceiveProps.__suppressDeprecationWarning = true;
componentWillUpdate.__suppressDeprecationWarning = true;

function polyfill(Component) {
  var prototype = Component.prototype;

  if (!prototype || !prototype.isReactComponent) {
    throw new Error('Can only polyfill class components');
  }

  if (typeof Component.getDerivedStateFromProps !== 'function' && typeof prototype.getSnapshotBeforeUpdate !== 'function') {
    return Component;
  } // If new component APIs are defined, "unsafe" lifecycles won't be called.
  // Error if any of these lifecycles are present,
  // Because they would work differently between older and newer (16.3+) versions of React.


  var foundWillMountName = null;
  var foundWillReceivePropsName = null;
  var foundWillUpdateName = null;

  if (typeof prototype.componentWillMount === 'function') {
    foundWillMountName = 'componentWillMount';
  } else if (typeof prototype.UNSAFE_componentWillMount === 'function') {
    foundWillMountName = 'UNSAFE_componentWillMount';
  }

  if (typeof prototype.componentWillReceiveProps === 'function') {
    foundWillReceivePropsName = 'componentWillReceiveProps';
  } else if (typeof prototype.UNSAFE_componentWillReceiveProps === 'function') {
    foundWillReceivePropsName = 'UNSAFE_componentWillReceiveProps';
  }

  if (typeof prototype.componentWillUpdate === 'function') {
    foundWillUpdateName = 'componentWillUpdate';
  } else if (typeof prototype.UNSAFE_componentWillUpdate === 'function') {
    foundWillUpdateName = 'UNSAFE_componentWillUpdate';
  }

  if (foundWillMountName !== null || foundWillReceivePropsName !== null || foundWillUpdateName !== null) {
    var componentName = Component.displayName || Component.name;
    var newApiName = typeof Component.getDerivedStateFromProps === 'function' ? 'getDerivedStateFromProps()' : 'getSnapshotBeforeUpdate()';
    throw Error('Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n' + componentName + ' uses ' + newApiName + ' but also contains the following legacy lifecycles:' + (foundWillMountName !== null ? '\n  ' + foundWillMountName : '') + (foundWillReceivePropsName !== null ? '\n  ' + foundWillReceivePropsName : '') + (foundWillUpdateName !== null ? '\n  ' + foundWillUpdateName : '') + '\n\nThe above lifecycles should be removed. Learn more about this warning here:\n' + 'https://fb.me/react-async-component-lifecycle-hooks');
  } // React <= 16.2 does not support static getDerivedStateFromProps.
  // As a workaround, use cWM and cWRP to invoke the new static lifecycle.
  // Newer versions of React will ignore these lifecycles if gDSFP exists.


  if (typeof Component.getDerivedStateFromProps === 'function') {
    prototype.componentWillMount = componentWillMount;
    prototype.componentWillReceiveProps = componentWillReceiveProps;
  } // React <= 16.2 does not support getSnapshotBeforeUpdate.
  // As a workaround, use cWU to invoke the new lifecycle.
  // Newer versions of React will ignore that lifecycle if gSBU exists.


  if (typeof prototype.getSnapshotBeforeUpdate === 'function') {
    if (typeof prototype.componentDidUpdate !== 'function') {
      throw new Error('Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype');
    }

    prototype.componentWillUpdate = componentWillUpdate;
    var componentDidUpdate = prototype.componentDidUpdate;

    prototype.componentDidUpdate = function componentDidUpdatePolyfill(prevProps, prevState, maybeSnapshot) {
      // 16.3+ will not execute our will-update method;
      // It will pass a snapshot value to did-update though.
      // Older versions will require our polyfilled will-update value.
      // We need to handle both cases, but can't just check for the presence of "maybeSnapshot",
      // Because for <= 15.x versions this might be a "prevContext" object.
      // We also can't just check "__reactInternalSnapshot",
      // Because get-snapshot might return a falsy value.
      // So check for the explicit __reactInternalSnapshotFlag flag to determine behavior.
      var snapshot = this.__reactInternalSnapshotFlag ? this.__reactInternalSnapshot : maybeSnapshot;
      componentDidUpdate.call(this, prevProps, prevState, snapshot);
    };
  }

  return Component;
}

var reactLifecyclesCompat_es = /*#__PURE__*/Object.freeze({
  polyfill: polyfill
});

var PropTypes = createCommonjsModule(function (module, exports) {

exports.__esModule = true;
exports.classNamesShape = exports.timeoutsShape = void 0;

var _propTypes = _interopRequireDefault(propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var timeoutsShape = process.env.NODE_ENV !== 'production' ? _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.shape({
  enter: _propTypes.default.number,
  exit: _propTypes.default.number,
  appear: _propTypes.default.number
}).isRequired]) : null;
exports.timeoutsShape = timeoutsShape;
var classNamesShape = process.env.NODE_ENV !== 'production' ? _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.shape({
  enter: _propTypes.default.string,
  exit: _propTypes.default.string,
  active: _propTypes.default.string
}), _propTypes.default.shape({
  enter: _propTypes.default.string,
  enterDone: _propTypes.default.string,
  enterActive: _propTypes.default.string,
  exit: _propTypes.default.string,
  exitDone: _propTypes.default.string,
  exitActive: _propTypes.default.string
})]) : null;
exports.classNamesShape = classNamesShape;
});

unwrapExports(PropTypes);
var PropTypes_1 = PropTypes.classNamesShape;
var PropTypes_2 = PropTypes.timeoutsShape;

var Transition_1 = createCommonjsModule(function (module, exports) {

exports.__esModule = true;
exports.default = exports.EXITING = exports.ENTERED = exports.ENTERING = exports.EXITED = exports.UNMOUNTED = void 0;

var PropTypes$1 = _interopRequireWildcard(propTypes);

var _react = _interopRequireDefault(React);

var _reactDom = _interopRequireDefault(reactDom);





function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var UNMOUNTED = 'unmounted';
exports.UNMOUNTED = UNMOUNTED;
var EXITED = 'exited';
exports.EXITED = EXITED;
var ENTERING = 'entering';
exports.ENTERING = ENTERING;
var ENTERED = 'entered';
exports.ENTERED = ENTERED;
var EXITING = 'exiting';
/**
 * The Transition component lets you describe a transition from one component
 * state to another _over time_ with a simple declarative API. Most commonly
 * it's used to animate the mounting and unmounting of a component, but can also
 * be used to describe in-place transition states as well.
 *
 * ---
 *
 * **Note**: `Transition` is a platform-agnostic base component. If you're using
 * transitions in CSS, you'll probably want to use
 * [`CSSTransition`](https://reactcommunity.org/react-transition-group/css-transition)
 * instead. It inherits all the features of `Transition`, but contains
 * additional features necessary to play nice with CSS transitions (hence the
 * name of the component).
 *
 * ---
 *
 * By default the `Transition` component does not alter the behavior of the
 * component it renders, it only tracks "enter" and "exit" states for the
 * components. It's up to you to give meaning and effect to those states. For
 * example we can add styles to a component when it enters or exits:
 *
 * ```jsx
 * import { Transition } from 'react-transition-group';
 *
 * const duration = 300;
 *
 * const defaultStyle = {
 *   transition: `opacity ${duration}ms ease-in-out`,
 *   opacity: 0,
 * }
 *
 * const transitionStyles = {
 *   entering: { opacity: 0 },
 *   entered:  { opacity: 1 },
 * };
 *
 * const Fade = ({ in: inProp }) => (
 *   <Transition in={inProp} timeout={duration}>
 *     {state => (
 *       <div style={{
 *         ...defaultStyle,
 *         ...transitionStyles[state]
 *       }}>
 *         I'm a fade Transition!
 *       </div>
 *     )}
 *   </Transition>
 * );
 * ```
 *
 * There are 4 main states a Transition can be in:
 *  - `'entering'`
 *  - `'entered'`
 *  - `'exiting'`
 *  - `'exited'`
 *
 * Transition state is toggled via the `in` prop. When `true` the component
 * begins the "Enter" stage. During this stage, the component will shift from
 * its current transition state, to `'entering'` for the duration of the
 * transition and then to the `'entered'` stage once it's complete. Let's take
 * the following example (we'll use the
 * [useState](https://reactjs.org/docs/hooks-reference.html#usestate) hook):
 *
 * ```jsx
 * function App() {
 *   const [inProp, setInProp] = useState(false);
 *   return (
 *     <div>
 *       <Transition in={inProp} timeout={500}>
 *         {state => (
 *           // ...
 *         )}
 *       </Transition>
 *       <button onClick={() => setInProp(true)}>
 *         Click to Enter
 *       </button>
 *     </div>
 *   );
 * }
 * ```
 *
 * When the button is clicked the component will shift to the `'entering'` state
 * and stay there for 500ms (the value of `timeout`) before it finally switches
 * to `'entered'`.
 *
 * When `in` is `false` the same thing happens except the state moves from
 * `'exiting'` to `'exited'`.
 */

exports.EXITING = EXITING;

var Transition =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(Transition, _React$Component);

  function Transition(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;
    var parentGroup = context.transitionGroup; // In the context of a TransitionGroup all enters are really appears

    var appear = parentGroup && !parentGroup.isMounting ? props.enter : props.appear;
    var initialStatus;
    _this.appearStatus = null;

    if (props.in) {
      if (appear) {
        initialStatus = EXITED;
        _this.appearStatus = ENTERING;
      } else {
        initialStatus = ENTERED;
      }
    } else {
      if (props.unmountOnExit || props.mountOnEnter) {
        initialStatus = UNMOUNTED;
      } else {
        initialStatus = EXITED;
      }
    }

    _this.state = {
      status: initialStatus
    };
    _this.nextCallback = null;
    return _this;
  }

  var _proto = Transition.prototype;

  _proto.getChildContext = function getChildContext() {
    return {
      transitionGroup: null // allows for nested Transitions

    };
  };

  Transition.getDerivedStateFromProps = function getDerivedStateFromProps(_ref, prevState) {
    var nextIn = _ref.in;

    if (nextIn && prevState.status === UNMOUNTED) {
      return {
        status: EXITED
      };
    }

    return null;
  }; // getSnapshotBeforeUpdate(prevProps) {
  //   let nextStatus = null
  //   if (prevProps !== this.props) {
  //     const { status } = this.state
  //     if (this.props.in) {
  //       if (status !== ENTERING && status !== ENTERED) {
  //         nextStatus = ENTERING
  //       }
  //     } else {
  //       if (status === ENTERING || status === ENTERED) {
  //         nextStatus = EXITING
  //       }
  //     }
  //   }
  //   return { nextStatus }
  // }


  _proto.componentDidMount = function componentDidMount() {
    this.updateStatus(true, this.appearStatus);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var nextStatus = null;

    if (prevProps !== this.props) {
      var status = this.state.status;

      if (this.props.in) {
        if (status !== ENTERING && status !== ENTERED) {
          nextStatus = ENTERING;
        }
      } else {
        if (status === ENTERING || status === ENTERED) {
          nextStatus = EXITING;
        }
      }
    }

    this.updateStatus(false, nextStatus);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.cancelNextCallback();
  };

  _proto.getTimeouts = function getTimeouts() {
    var timeout = this.props.timeout;
    var exit, enter, appear;
    exit = enter = appear = timeout;

    if (timeout != null && typeof timeout !== 'number') {
      exit = timeout.exit;
      enter = timeout.enter; // TODO: remove fallback for next major

      appear = timeout.appear !== undefined ? timeout.appear : enter;
    }

    return {
      exit: exit,
      enter: enter,
      appear: appear
    };
  };

  _proto.updateStatus = function updateStatus(mounting, nextStatus) {
    if (mounting === void 0) {
      mounting = false;
    }

    if (nextStatus !== null) {
      // nextStatus will always be ENTERING or EXITING.
      this.cancelNextCallback();

      var node = _reactDom.default.findDOMNode(this);

      if (nextStatus === ENTERING) {
        this.performEnter(node, mounting);
      } else {
        this.performExit(node);
      }
    } else if (this.props.unmountOnExit && this.state.status === EXITED) {
      this.setState({
        status: UNMOUNTED
      });
    }
  };

  _proto.performEnter = function performEnter(node, mounting) {
    var _this2 = this;

    var enter = this.props.enter;
    var appearing = this.context.transitionGroup ? this.context.transitionGroup.isMounting : mounting;
    var timeouts = this.getTimeouts();
    var enterTimeout = appearing ? timeouts.appear : timeouts.enter; // no enter animation skip right to ENTERED
    // if we are mounting and running this it means appear _must_ be set

    if (!mounting && !enter) {
      this.safeSetState({
        status: ENTERED
      }, function () {
        _this2.props.onEntered(node);
      });
      return;
    }

    this.props.onEnter(node, appearing);
    this.safeSetState({
      status: ENTERING
    }, function () {
      _this2.props.onEntering(node, appearing);

      _this2.onTransitionEnd(node, enterTimeout, function () {
        _this2.safeSetState({
          status: ENTERED
        }, function () {
          _this2.props.onEntered(node, appearing);
        });
      });
    });
  };

  _proto.performExit = function performExit(node) {
    var _this3 = this;

    var exit = this.props.exit;
    var timeouts = this.getTimeouts(); // no exit animation skip right to EXITED

    if (!exit) {
      this.safeSetState({
        status: EXITED
      }, function () {
        _this3.props.onExited(node);
      });
      return;
    }

    this.props.onExit(node);
    this.safeSetState({
      status: EXITING
    }, function () {
      _this3.props.onExiting(node);

      _this3.onTransitionEnd(node, timeouts.exit, function () {
        _this3.safeSetState({
          status: EXITED
        }, function () {
          _this3.props.onExited(node);
        });
      });
    });
  };

  _proto.cancelNextCallback = function cancelNextCallback() {
    if (this.nextCallback !== null) {
      this.nextCallback.cancel();
      this.nextCallback = null;
    }
  };

  _proto.safeSetState = function safeSetState(nextState, callback) {
    // This shouldn't be necessary, but there are weird race conditions with
    // setState callbacks and unmounting in testing, so always make sure that
    // we can cancel any pending setState callbacks after we unmount.
    callback = this.setNextCallback(callback);
    this.setState(nextState, callback);
  };

  _proto.setNextCallback = function setNextCallback(callback) {
    var _this4 = this;

    var active = true;

    this.nextCallback = function (event) {
      if (active) {
        active = false;
        _this4.nextCallback = null;
        callback(event);
      }
    };

    this.nextCallback.cancel = function () {
      active = false;
    };

    return this.nextCallback;
  };

  _proto.onTransitionEnd = function onTransitionEnd(node, timeout, handler) {
    this.setNextCallback(handler);
    var doesNotHaveTimeoutOrListener = timeout == null && !this.props.addEndListener;

    if (!node || doesNotHaveTimeoutOrListener) {
      setTimeout(this.nextCallback, 0);
      return;
    }

    if (this.props.addEndListener) {
      this.props.addEndListener(node, this.nextCallback);
    }

    if (timeout != null) {
      setTimeout(this.nextCallback, timeout);
    }
  };

  _proto.render = function render() {
    var status = this.state.status;

    if (status === UNMOUNTED) {
      return null;
    }

    var _this$props = this.props,
        children = _this$props.children,
        childProps = _objectWithoutPropertiesLoose(_this$props, ["children"]); // filter props for Transtition


    delete childProps.in;
    delete childProps.mountOnEnter;
    delete childProps.unmountOnExit;
    delete childProps.appear;
    delete childProps.enter;
    delete childProps.exit;
    delete childProps.timeout;
    delete childProps.addEndListener;
    delete childProps.onEnter;
    delete childProps.onEntering;
    delete childProps.onEntered;
    delete childProps.onExit;
    delete childProps.onExiting;
    delete childProps.onExited;

    if (typeof children === 'function') {
      return children(status, childProps);
    }

    var child = _react.default.Children.only(children);

    return _react.default.cloneElement(child, childProps);
  };

  return Transition;
}(_react.default.Component);

Transition.contextTypes = {
  transitionGroup: PropTypes$1.object
};
Transition.childContextTypes = {
  transitionGroup: function transitionGroup() {}
};
Transition.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * A `function` child can be used instead of a React element. This function is
   * called with the current transition status (`'entering'`, `'entered'`,
   * `'exiting'`, `'exited'`, `'unmounted'`), which can be used to apply context
   * specific props to a component.
   *
   * ```jsx
   * <Transition in={this.state.in} timeout={150}>
   *   {state => (
   *     <MyComponent className={`fade fade-${state}`} />
   *   )}
   * </Transition>
   * ```
   */
  children: PropTypes$1.oneOfType([PropTypes$1.func.isRequired, PropTypes$1.element.isRequired]).isRequired,

  /**
   * Show the component; triggers the enter or exit states
   */
  in: PropTypes$1.bool,

  /**
   * By default the child component is mounted immediately along with
   * the parent `Transition` component. If you want to "lazy mount" the component on the
   * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
   * mounted, even on "exited", unless you also specify `unmountOnExit`.
   */
  mountOnEnter: PropTypes$1.bool,

  /**
   * By default the child component stays mounted after it reaches the `'exited'` state.
   * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
   */
  unmountOnExit: PropTypes$1.bool,

  /**
   * Normally a component is not transitioned if it is shown when the `<Transition>` component mounts.
   * If you want to transition on the first mount set `appear` to `true`, and the
   * component will transition in as soon as the `<Transition>` mounts.
   *
   * > Note: there are no specific "appear" states. `appear` only adds an additional `enter` transition.
   */
  appear: PropTypes$1.bool,

  /**
   * Enable or disable enter transitions.
   */
  enter: PropTypes$1.bool,

  /**
   * Enable or disable exit transitions.
   */
  exit: PropTypes$1.bool,

  /**
   * The duration of the transition, in milliseconds.
   * Required unless `addEndListener` is provided.
   *
   * You may specify a single timeout for all transitions:
   *
   * ```jsx
   * timeout={500}
   * ```
   *
   * or individually:
   *
   * ```jsx
   * timeout={{
   *  appear: 500,
   *  enter: 300,
   *  exit: 500,
   * }}
   * ```
   *
   * - `appear` defaults to the value of `enter`
   * - `enter` defaults to `0`
   * - `exit` defaults to `0`
   *
   * @type {number | { enter?: number, exit?: number, appear?: number }}
   */
  timeout: function timeout(props) {
    var pt = PropTypes.timeoutsShape;
    if (!props.addEndListener) pt = pt.isRequired;

    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return pt.apply(void 0, [props].concat(args));
  },

  /**
   * Add a custom transition end trigger. Called with the transitioning
   * DOM node and a `done` callback. Allows for more fine grained transition end
   * logic. **Note:** Timeouts are still used as a fallback if provided.
   *
   * ```jsx
   * addEndListener={(node, done) => {
   *   // use the css transitionend event to mark the finish of a transition
   *   node.addEventListener('transitionend', done, false);
   * }}
   * ```
   */
  addEndListener: PropTypes$1.func,

  /**
   * Callback fired before the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEnter: PropTypes$1.func,

  /**
   * Callback fired after the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: PropTypes$1.func,

  /**
   * Callback fired after the "entered" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEntered: PropTypes$1.func,

  /**
   * Callback fired before the "exiting" status is applied.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExit: PropTypes$1.func,

  /**
   * Callback fired after the "exiting" status is applied.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExiting: PropTypes$1.func,

  /**
   * Callback fired after the "exited" status is applied.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExited: PropTypes$1.func // Name the function so it is clearer in the documentation

} : {};

function noop() {}

Transition.defaultProps = {
  in: false,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false,
  enter: true,
  exit: true,
  onEnter: noop,
  onEntering: noop,
  onEntered: noop,
  onExit: noop,
  onExiting: noop,
  onExited: noop
};
Transition.UNMOUNTED = 0;
Transition.EXITED = 1;
Transition.ENTERING = 2;
Transition.ENTERED = 3;
Transition.EXITING = 4;

var _default = (0, reactLifecyclesCompat_es.polyfill)(Transition);

exports.default = _default;
});

unwrapExports(Transition_1);
var Transition_2 = Transition_1.EXITING;
var Transition_3 = Transition_1.ENTERED;
var Transition_4 = Transition_1.ENTERING;
var Transition_5 = Transition_1.EXITED;
var Transition_6 = Transition_1.UNMOUNTED;

var CSSTransition_1 = createCommonjsModule(function (module, exports) {

exports.__esModule = true;
exports.default = void 0;

var PropTypes$1 = _interopRequireWildcard(propTypes);

var _addClass = _interopRequireDefault(addClass_1);

var _removeClass = _interopRequireDefault(removeClass);

var _react = _interopRequireDefault(React);

var _Transition = _interopRequireDefault(Transition_1);



function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var addClass = function addClass(node, classes) {
  return node && classes && classes.split(' ').forEach(function (c) {
    return (0, _addClass.default)(node, c);
  });
};

var removeClass$1 = function removeClass(node, classes) {
  return node && classes && classes.split(' ').forEach(function (c) {
    return (0, _removeClass.default)(node, c);
  });
};
/**
 * A transition component inspired by the excellent
 * [ng-animate](http://www.nganimate.org/) library, you should use it if you're
 * using CSS transitions or animations. It's built upon the
 * [`Transition`](https://reactcommunity.org/react-transition-group/transition)
 * component, so it inherits all of its props.
 *
 * `CSSTransition` applies a pair of class names during the `appear`, `enter`,
 * and `exit` states of the transition. The first class is applied and then a
 * second `*-active` class in order to activate the CSSS transition. After the
 * transition, matching `*-done` class names are applied to persist the
 * transition state.
 *
 * ```jsx
 * function App() {
 *   const [inProp, setInProp] = useState(false);
 *   return (
 *     <div>
 *       <CSSTransition in={inProp} timeout={200} classNames="my-node">
 *         <div>
 *           {"I'll receive my-node-* classes"}
 *         </div>
 *       </CSSTransition>
 *       <button type="button" onClick={() => setInProp(true)}>
 *         Click to Enter
 *       </button>
 *     </div>
 *   );
 * }
 * ```
 *
 * When the `in` prop is set to `true`, the child component will first receive
 * the class `example-enter`, then the `example-enter-active` will be added in
 * the next tick. `CSSTransition` [forces a
 * reflow](https://github.com/reactjs/react-transition-group/blob/5007303e729a74be66a21c3e2205e4916821524b/src/CSSTransition.js#L208-L215)
 * between before adding the `example-enter-active`. This is an important trick
 * because it allows us to transition between `example-enter` and
 * `example-enter-active` even though they were added immediately one after
 * another. Most notably, this is what makes it possible for us to animate
 * _appearance_.
 *
 * ```css
 * .my-node-enter {
 *   opacity: 0;
 * }
 * .my-node-enter-active {
 *   opacity: 1;
 *   transition: opacity 200ms;
 * }
 * .my-node-exit {
 *   opacity: 1;
 * }
 * .my-node-exit-active {
 *   opacity: 0;
 *   transition: opacity: 200ms;
 * }
 * ```
 *
 * `*-active` classes represent which styles you want to animate **to**.
 */


var CSSTransition =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(CSSTransition, _React$Component);

  function CSSTransition() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

    _this.onEnter = function (node, appearing) {
      var _this$getClassNames = _this.getClassNames(appearing ? 'appear' : 'enter'),
          className = _this$getClassNames.className;

      _this.removeClasses(node, 'exit');

      addClass(node, className);

      if (_this.props.onEnter) {
        _this.props.onEnter(node, appearing);
      }
    };

    _this.onEntering = function (node, appearing) {
      var _this$getClassNames2 = _this.getClassNames(appearing ? 'appear' : 'enter'),
          activeClassName = _this$getClassNames2.activeClassName;

      _this.reflowAndAddClass(node, activeClassName);

      if (_this.props.onEntering) {
        _this.props.onEntering(node, appearing);
      }
    };

    _this.onEntered = function (node, appearing) {
      var appearClassName = _this.getClassNames('appear').doneClassName;

      var enterClassName = _this.getClassNames('enter').doneClassName;

      var doneClassName = appearing ? appearClassName + " " + enterClassName : enterClassName;

      _this.removeClasses(node, appearing ? 'appear' : 'enter');

      addClass(node, doneClassName);

      if (_this.props.onEntered) {
        _this.props.onEntered(node, appearing);
      }
    };

    _this.onExit = function (node) {
      var _this$getClassNames3 = _this.getClassNames('exit'),
          className = _this$getClassNames3.className;

      _this.removeClasses(node, 'appear');

      _this.removeClasses(node, 'enter');

      addClass(node, className);

      if (_this.props.onExit) {
        _this.props.onExit(node);
      }
    };

    _this.onExiting = function (node) {
      var _this$getClassNames4 = _this.getClassNames('exit'),
          activeClassName = _this$getClassNames4.activeClassName;

      _this.reflowAndAddClass(node, activeClassName);

      if (_this.props.onExiting) {
        _this.props.onExiting(node);
      }
    };

    _this.onExited = function (node) {
      var _this$getClassNames5 = _this.getClassNames('exit'),
          doneClassName = _this$getClassNames5.doneClassName;

      _this.removeClasses(node, 'exit');

      addClass(node, doneClassName);

      if (_this.props.onExited) {
        _this.props.onExited(node);
      }
    };

    _this.getClassNames = function (type) {
      var classNames = _this.props.classNames;
      var isStringClassNames = typeof classNames === 'string';
      var prefix = isStringClassNames && classNames ? classNames + '-' : '';
      var className = isStringClassNames ? prefix + type : classNames[type];
      var activeClassName = isStringClassNames ? className + '-active' : classNames[type + 'Active'];
      var doneClassName = isStringClassNames ? className + '-done' : classNames[type + 'Done'];
      return {
        className: className,
        activeClassName: activeClassName,
        doneClassName: doneClassName
      };
    };

    return _this;
  }

  var _proto = CSSTransition.prototype;

  _proto.removeClasses = function removeClasses(node, type) {
    var _this$getClassNames6 = this.getClassNames(type),
        className = _this$getClassNames6.className,
        activeClassName = _this$getClassNames6.activeClassName,
        doneClassName = _this$getClassNames6.doneClassName;

    className && removeClass$1(node, className);
    activeClassName && removeClass$1(node, activeClassName);
    doneClassName && removeClass$1(node, doneClassName);
  };

  _proto.reflowAndAddClass = function reflowAndAddClass(node, className) {
    // This is for to force a repaint,
    // which is necessary in order to transition styles when adding a class name.
    if (className) {
      /* eslint-disable no-unused-expressions */
      node && node.scrollTop;
      /* eslint-enable no-unused-expressions */

      addClass(node, className);
    }
  };

  _proto.render = function render() {
    var props = _extends({}, this.props);

    delete props.classNames;
    return _react.default.createElement(_Transition.default, _extends({}, props, {
      onEnter: this.onEnter,
      onEntered: this.onEntered,
      onEntering: this.onEntering,
      onExit: this.onExit,
      onExiting: this.onExiting,
      onExited: this.onExited
    }));
  };

  return CSSTransition;
}(_react.default.Component);

CSSTransition.defaultProps = {
  classNames: ''
};
CSSTransition.propTypes = process.env.NODE_ENV !== "production" ? _extends({}, _Transition.default.propTypes, {
  /**
   * The animation classNames applied to the component as it enters, exits or
   * has finished the transition. A single name can be provided and it will be
   * suffixed for each stage: e.g.
   *
   * `classNames="fade"` applies `fade-enter`, `fade-enter-active`,
   * `fade-enter-done`, `fade-exit`, `fade-exit-active`, `fade-exit-done`,
   * `fade-appear`, `fade-appear-active`, and `fade-appear-done`.
   *
   * **Note**: `fade-appear-done` and `fade-enter-done` will _both_ be applied.
   * This allows you to define different behavior for when appearing is done and
   * when regular entering is done, using selectors like
   * `.fade-enter-done:not(.fade-appear-done)`. For example, you could apply an
   * epic entrance animation when element first appears in the DOM using
   * [Animate.css](https://daneden.github.io/animate.css/). Otherwise you can
   * simply use `fade-enter-done` for defining both cases.
   *
   * Each individual classNames can also be specified independently like:
   *
   * ```js
   * classNames={{
   *  appear: 'my-appear',
   *  appearActive: 'my-active-appear',
   *  appearDone: 'my-done-appear',
   *  enter: 'my-enter',
   *  enterActive: 'my-active-enter',
   *  enterDone: 'my-done-enter',
   *  exit: 'my-exit',
   *  exitActive: 'my-active-exit',
   *  exitDone: 'my-done-exit',
   * }}
   * ```
   *
   * If you want to set these classes using CSS Modules:
   *
   * ```js
   * import styles from './styles.css';
   * ```
   *
   * you might want to use camelCase in your CSS file, that way could simply
   * spread them instead of listing them one by one:
   *
   * ```js
   * classNames={{ ...styles }}
   * ```
   *
   * @type {string | {
   *  appear?: string,
   *  appearActive?: string,
   *  appearDone?: string,
   *  enter?: string,
   *  enterActive?: string,
   *  enterDone?: string,
   *  exit?: string,
   *  exitActive?: string,
   *  exitDone?: string,
   * }}
   */
  classNames: PropTypes.classNamesShape,

  /**
   * A `<Transition>` callback fired immediately after the 'enter' or 'appear' class is
   * applied.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEnter: PropTypes$1.func,

  /**
   * A `<Transition>` callback fired immediately after the 'enter-active' or
   * 'appear-active' class is applied.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: PropTypes$1.func,

  /**
   * A `<Transition>` callback fired immediately after the 'enter' or
   * 'appear' classes are **removed** and the `done` class is added to the DOM node.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntered: PropTypes$1.func,

  /**
   * A `<Transition>` callback fired immediately after the 'exit' class is
   * applied.
   *
   * @type Function(node: HtmlElement)
   */
  onExit: PropTypes$1.func,

  /**
   * A `<Transition>` callback fired immediately after the 'exit-active' is applied.
   *
   * @type Function(node: HtmlElement)
   */
  onExiting: PropTypes$1.func,

  /**
   * A `<Transition>` callback fired immediately after the 'exit' classes
   * are **removed** and the `exit-done` class is added to the DOM node.
   *
   * @type Function(node: HtmlElement)
   */
  onExited: PropTypes$1.func
}) : {};
var _default = CSSTransition;
exports.default = _default;
module.exports = exports["default"];
});

var CSSTransition = unwrapExports(CSSTransition_1);

var ChildMapping = createCommonjsModule(function (module, exports) {

exports.__esModule = true;
exports.getChildMapping = getChildMapping;
exports.mergeChildMappings = mergeChildMappings;
exports.getInitialChildMapping = getInitialChildMapping;
exports.getNextChildMapping = getNextChildMapping;



/**
 * Given `this.props.children`, return an object mapping key to child.
 *
 * @param {*} children `this.props.children`
 * @return {object} Mapping of key to child
 */
function getChildMapping(children, mapFn) {
  var mapper = function mapper(child) {
    return mapFn && (0, React.isValidElement)(child) ? mapFn(child) : child;
  };

  var result = Object.create(null);
  if (children) React.Children.map(children, function (c) {
    return c;
  }).forEach(function (child) {
    // run the map function here instead so that the key is the computed one
    result[child.key] = mapper(child);
  });
  return result;
}
/**
 * When you're adding or removing children some may be added or removed in the
 * same render pass. We want to show *both* since we want to simultaneously
 * animate elements in and out. This function takes a previous set of keys
 * and a new set of keys and merges them with its best guess of the correct
 * ordering. In the future we may expose some of the utilities in
 * ReactMultiChild to make this easy, but for now React itself does not
 * directly have this concept of the union of prevChildren and nextChildren
 * so we implement it here.
 *
 * @param {object} prev prev children as returned from
 * `ReactTransitionChildMapping.getChildMapping()`.
 * @param {object} next next children as returned from
 * `ReactTransitionChildMapping.getChildMapping()`.
 * @return {object} a key set that contains all keys in `prev` and all keys
 * in `next` in a reasonable order.
 */


function mergeChildMappings(prev, next) {
  prev = prev || {};
  next = next || {};

  function getValueForKey(key) {
    return key in next ? next[key] : prev[key];
  } // For each key of `next`, the list of keys to insert before that key in
  // the combined list


  var nextKeysPending = Object.create(null);
  var pendingKeys = [];

  for (var prevKey in prev) {
    if (prevKey in next) {
      if (pendingKeys.length) {
        nextKeysPending[prevKey] = pendingKeys;
        pendingKeys = [];
      }
    } else {
      pendingKeys.push(prevKey);
    }
  }

  var i;
  var childMapping = {};

  for (var nextKey in next) {
    if (nextKeysPending[nextKey]) {
      for (i = 0; i < nextKeysPending[nextKey].length; i++) {
        var pendingNextKey = nextKeysPending[nextKey][i];
        childMapping[nextKeysPending[nextKey][i]] = getValueForKey(pendingNextKey);
      }
    }

    childMapping[nextKey] = getValueForKey(nextKey);
  } // Finally, add the keys which didn't appear before any key in `next`


  for (i = 0; i < pendingKeys.length; i++) {
    childMapping[pendingKeys[i]] = getValueForKey(pendingKeys[i]);
  }

  return childMapping;
}

function getProp(child, prop, props) {
  return props[prop] != null ? props[prop] : child.props[prop];
}

function getInitialChildMapping(props, onExited) {
  return getChildMapping(props.children, function (child) {
    return (0, React.cloneElement)(child, {
      onExited: onExited.bind(null, child),
      in: true,
      appear: getProp(child, 'appear', props),
      enter: getProp(child, 'enter', props),
      exit: getProp(child, 'exit', props)
    });
  });
}

function getNextChildMapping(nextProps, prevChildMapping, onExited) {
  var nextChildMapping = getChildMapping(nextProps.children);
  var children = mergeChildMappings(prevChildMapping, nextChildMapping);
  Object.keys(children).forEach(function (key) {
    var child = children[key];
    if (!(0, React.isValidElement)(child)) return;
    var hasPrev = key in prevChildMapping;
    var hasNext = key in nextChildMapping;
    var prevChild = prevChildMapping[key];
    var isLeaving = (0, React.isValidElement)(prevChild) && !prevChild.props.in; // item is new (entering)

    if (hasNext && (!hasPrev || isLeaving)) {
      // console.log('entering', key)
      children[key] = (0, React.cloneElement)(child, {
        onExited: onExited.bind(null, child),
        in: true,
        exit: getProp(child, 'exit', nextProps),
        enter: getProp(child, 'enter', nextProps)
      });
    } else if (!hasNext && hasPrev && !isLeaving) {
      // item is old (exiting)
      // console.log('leaving', key)
      children[key] = (0, React.cloneElement)(child, {
        in: false
      });
    } else if (hasNext && hasPrev && (0, React.isValidElement)(prevChild)) {
      // item hasn't changed transition states
      // copy over the last transition props;
      // console.log('unchanged', key)
      children[key] = (0, React.cloneElement)(child, {
        onExited: onExited.bind(null, child),
        in: prevChild.props.in,
        exit: getProp(child, 'exit', nextProps),
        enter: getProp(child, 'enter', nextProps)
      });
    }
  });
  return children;
}
});

unwrapExports(ChildMapping);
var ChildMapping_1 = ChildMapping.getChildMapping;
var ChildMapping_2 = ChildMapping.mergeChildMappings;
var ChildMapping_3 = ChildMapping.getInitialChildMapping;
var ChildMapping_4 = ChildMapping.getNextChildMapping;

var TransitionGroup_1 = createCommonjsModule(function (module, exports) {

exports.__esModule = true;
exports.default = void 0;

var _propTypes = _interopRequireDefault(propTypes);

var _react = _interopRequireDefault(React);





function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var values = Object.values || function (obj) {
  return Object.keys(obj).map(function (k) {
    return obj[k];
  });
};

var defaultProps = {
  component: 'div',
  childFactory: function childFactory(child) {
    return child;
  }
  /**
   * The `<TransitionGroup>` component manages a set of transition components
   * (`<Transition>` and `<CSSTransition>`) in a list. Like with the transition
   * components, `<TransitionGroup>` is a state machine for managing the mounting
   * and unmounting of components over time.
   *
   * Consider the example below. As items are removed or added to the TodoList the
   * `in` prop is toggled automatically by the `<TransitionGroup>`.
   *
   * Note that `<TransitionGroup>`  does not define any animation behavior!
   * Exactly _how_ a list item animates is up to the individual transition
   * component. This means you can mix and match animations across different list
   * items.
   */

};

var TransitionGroup =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(TransitionGroup, _React$Component);

  function TransitionGroup(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;

    var handleExited = _this.handleExited.bind(_assertThisInitialized(_assertThisInitialized(_this))); // Initial children should all be entering, dependent on appear


    _this.state = {
      handleExited: handleExited,
      firstRender: true
    };
    return _this;
  }

  var _proto = TransitionGroup.prototype;

  _proto.getChildContext = function getChildContext() {
    return {
      transitionGroup: {
        isMounting: !this.appeared
      }
    };
  };

  _proto.componentDidMount = function componentDidMount() {
    this.appeared = true;
    this.mounted = true;
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.mounted = false;
  };

  TransitionGroup.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, _ref) {
    var prevChildMapping = _ref.children,
        handleExited = _ref.handleExited,
        firstRender = _ref.firstRender;
    return {
      children: firstRender ? (0, ChildMapping.getInitialChildMapping)(nextProps, handleExited) : (0, ChildMapping.getNextChildMapping)(nextProps, prevChildMapping, handleExited),
      firstRender: false
    };
  };

  _proto.handleExited = function handleExited(child, node) {
    var currentChildMapping = (0, ChildMapping.getChildMapping)(this.props.children);
    if (child.key in currentChildMapping) return;

    if (child.props.onExited) {
      child.props.onExited(node);
    }

    if (this.mounted) {
      this.setState(function (state) {
        var children = _extends({}, state.children);

        delete children[child.key];
        return {
          children: children
        };
      });
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        Component = _this$props.component,
        childFactory = _this$props.childFactory,
        props = _objectWithoutPropertiesLoose(_this$props, ["component", "childFactory"]);

    var children = values(this.state.children).map(childFactory);
    delete props.appear;
    delete props.enter;
    delete props.exit;

    if (Component === null) {
      return children;
    }

    return _react.default.createElement(Component, props, children);
  };

  return TransitionGroup;
}(_react.default.Component);

TransitionGroup.childContextTypes = {
  transitionGroup: _propTypes.default.object.isRequired
};
TransitionGroup.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * `<TransitionGroup>` renders a `<div>` by default. You can change this
   * behavior by providing a `component` prop.
   * If you use React v16+ and would like to avoid a wrapping `<div>` element
   * you can pass in `component={null}`. This is useful if the wrapping div
   * borks your css styles.
   */
  component: _propTypes.default.any,

  /**
   * A set of `<Transition>` components, that are toggled `in` and out as they
   * leave. the `<TransitionGroup>` will inject specific transition props, so
   * remember to spread them through if you are wrapping the `<Transition>` as
   * with our `<Fade>` example.
   *
   * While this component is meant for multiple `Transition` or `CSSTransition`
   * children, sometimes you may want to have a single transition child with
   * content that you want to be transitioned out and in when you change it
   * (e.g. routes, images etc.) In that case you can change the `key` prop of
   * the transition child as you change its content, this will cause
   * `TransitionGroup` to transition the child out and back in.
   */
  children: _propTypes.default.node,

  /**
   * A convenience prop that enables or disables appear animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  appear: _propTypes.default.bool,

  /**
   * A convenience prop that enables or disables enter animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  enter: _propTypes.default.bool,

  /**
   * A convenience prop that enables or disables exit animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  exit: _propTypes.default.bool,

  /**
   * You may need to apply reactive updates to a child as it is exiting.
   * This is generally done by using `cloneElement` however in the case of an exiting
   * child the element has already been removed and not accessible to the consumer.
   *
   * If you do need to update a child as it leaves you can provide a `childFactory`
   * to wrap every child, even the ones that are leaving.
   *
   * @type Function(child: ReactElement) -> ReactElement
   */
  childFactory: _propTypes.default.func
} : {};
TransitionGroup.defaultProps = defaultProps;

var _default = (0, reactLifecyclesCompat_es.polyfill)(TransitionGroup);

exports.default = _default;
module.exports = exports["default"];
});

var TransitionGroup = unwrapExports(TransitionGroup_1);

var ReplaceTransition_1 = createCommonjsModule(function (module, exports) {

exports.__esModule = true;
exports.default = void 0;

var _propTypes = _interopRequireDefault(propTypes);

var _react = _interopRequireDefault(React);



var _TransitionGroup = _interopRequireDefault(TransitionGroup_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

/**
 * The `<ReplaceTransition>` component is a specialized `Transition` component
 * that animates between two children.
 *
 * ```jsx
 * <ReplaceTransition in>
 *   <Fade><div>I appear first</div></Fade>
 *   <Fade><div>I replace the above</div></Fade>
 * </ReplaceTransition>
 * ```
 */
var ReplaceTransition =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(ReplaceTransition, _React$Component);

  function ReplaceTransition() {
    var _this;

    for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
      _args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(_args)) || this;

    _this.handleEnter = function () {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return _this.handleLifecycle('onEnter', 0, args);
    };

    _this.handleEntering = function () {
      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }

      return _this.handleLifecycle('onEntering', 0, args);
    };

    _this.handleEntered = function () {
      for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }

      return _this.handleLifecycle('onEntered', 0, args);
    };

    _this.handleExit = function () {
      for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        args[_key5] = arguments[_key5];
      }

      return _this.handleLifecycle('onExit', 1, args);
    };

    _this.handleExiting = function () {
      for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
        args[_key6] = arguments[_key6];
      }

      return _this.handleLifecycle('onExiting', 1, args);
    };

    _this.handleExited = function () {
      for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
        args[_key7] = arguments[_key7];
      }

      return _this.handleLifecycle('onExited', 1, args);
    };

    return _this;
  }

  var _proto = ReplaceTransition.prototype;

  _proto.handleLifecycle = function handleLifecycle(handler, idx, originalArgs) {
    var _child$props;

    var children = this.props.children;

    var child = _react.default.Children.toArray(children)[idx];

    if (child.props[handler]) (_child$props = child.props)[handler].apply(_child$props, originalArgs);
    if (this.props[handler]) this.props[handler]((0, reactDom.findDOMNode)(this));
  };

  _proto.render = function render() {
    var _this$props = this.props,
        children = _this$props.children,
        inProp = _this$props.in,
        props = _objectWithoutPropertiesLoose(_this$props, ["children", "in"]);

    var _React$Children$toArr = _react.default.Children.toArray(children),
        first = _React$Children$toArr[0],
        second = _React$Children$toArr[1];

    delete props.onEnter;
    delete props.onEntering;
    delete props.onEntered;
    delete props.onExit;
    delete props.onExiting;
    delete props.onExited;
    return _react.default.createElement(_TransitionGroup.default, props, inProp ? _react.default.cloneElement(first, {
      key: 'first',
      onEnter: this.handleEnter,
      onEntering: this.handleEntering,
      onEntered: this.handleEntered
    }) : _react.default.cloneElement(second, {
      key: 'second',
      onEnter: this.handleExit,
      onEntering: this.handleExiting,
      onEntered: this.handleExited
    }));
  };

  return ReplaceTransition;
}(_react.default.Component);

ReplaceTransition.propTypes = process.env.NODE_ENV !== "production" ? {
  in: _propTypes.default.bool.isRequired,
  children: function children(props, propName) {
    if (_react.default.Children.count(props[propName]) !== 2) return new Error("\"" + propName + "\" must be exactly two transition components.");
    return null;
  }
} : {};
var _default = ReplaceTransition;
exports.default = _default;
module.exports = exports["default"];
});

unwrapExports(ReplaceTransition_1);

var reactTransitionGroup = createCommonjsModule(function (module) {

var _CSSTransition = _interopRequireDefault(CSSTransition_1);

var _ReplaceTransition = _interopRequireDefault(ReplaceTransition_1);

var _TransitionGroup = _interopRequireDefault(TransitionGroup_1);

var _Transition = _interopRequireDefault(Transition_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  Transition: _Transition.default,
  TransitionGroup: _TransitionGroup.default,
  ReplaceTransition: _ReplaceTransition.default,
  CSSTransition: _CSSTransition.default
};
});

unwrapExports(reactTransitionGroup);
var reactTransitionGroup_1 = reactTransitionGroup.Transition;
var reactTransitionGroup_2 = reactTransitionGroup.TransitionGroup;
var reactTransitionGroup_3 = reactTransitionGroup.ReplaceTransition;
var reactTransitionGroup_4 = reactTransitionGroup.CSSTransition;

var Wrapper$6 =
/*#__PURE__*/
styled.div.withConfig({
  displayName: "Accordion__Wrapper",
  componentId: "sc-1yjowun-0"
})(["& > .__content{transform-origin:top;will-change:transform,max-height;transition-property:transform,max-height;transition-duration:300ms;transition-timing-function:ease-in-out;height:auto;overflow:hidden;max-height:auto;&.collapsed{max-height:0;transform:scaleY(0);}&.collapsing{max-height:15rem;transform:scaleY(1);}&.expanded{max-height:15rem;transform:scaleY(1);}&.expanding{max-height:0px;transform:scaleY(0);}}", ""], function (_ref) {
  var css = _ref.css;
  return css || {};
});
function Accordion(_ref2) {
  var header = _ref2.header,
      show = _ref2.show,
      children = _ref2.children,
      rest = _objectWithoutProperties(_ref2, ["header", "show", "children"]);

  return React.createElement(Wrapper$6, rest, header, React.createElement(reactTransitionGroup_4, {
    classNames: {
      enter: 'collapsed',
      enterActive: 'collapsing',
      exit: 'expanded',
      exitActive: 'expanding'
    },
    timeout: 300,
    in: show,
    unmountOnExit: true
  }, React.createElement("div", {
    className: "__content"
  }, children)));
}

function setAlign(_ref) {
  var align = _ref.align;

  switch (align) {
    case 'left':
      return 'flex-start';

    case 'right':
      return 'flex-end';

    case 'center':
      return 'center';

    default:
      return 'space-evenly';
  }
}

function setColor$2(_ref) {
  var color = _ref.color,
      theme = _ref.theme,
      backdrop = _ref.backdrop;
  var backgroundColor = color ? theme[color] : 'transparent';
  var textColor = findColorInvert(theme, backgroundColor === 'transparent' ? theme.background : backgroundColor);

  if (backdrop) {
    var backColor = transparentize(0.2, backgroundColor === 'transparent' ? theme.white : backgroundColor);
    var ua = navigator.userAgent.toLowerCase();

    if (ua.indexOf('safari') > -1 && ua.indexOf('chrome') === -1) {
      return css(["background-color:", ";color:", ";backdrop-filter:blur(8px);"], backColor, textColor);
    }

    return css(["background-color:", ";color:", ";"], backColor, textColor);
  }

  return css(["background-color:", ";color:", ";"], backgroundColor, textColor);
}

var NavBar =
/*#__PURE__*/
styled.header.withConfig({
  displayName: "AppBar__NavBar",
  componentId: "t8gqca-0"
})(["position:", ";display:flex;top:-1px;min-height:3.25rem;width:100%;z-index:30;padding:", ";& > nav{display:flex;flex-direction:row;flex-wrap:wrap;align-items:center;flex:1 0 auto;}", " a{color:inherit;}", "{padding:", ";}", ""], function (_ref2) {
  var fixed = _ref2.fixed,
      sticky = _ref2.sticky;
  return !(sticky || fixed) ? 'relative' : fixed ? 'fixed' : 'sticky';
}, function (_ref3) {
  var fluid = _ref3.fluid;
  return fluid ? '0 0.75rem' : '0 5%';
}, setColor$2, mediaTablet, function (_ref4) {
  var fluid = _ref4.fluid;
  return fluid ? '0 0.5rem' : '0 3%';
}, function (_ref5) {
  var css = _ref5.css;
  return css || {};
});
var Burger =
/*#__PURE__*/
styled.button.withConfig({
  displayName: "AppBar__Burger",
  componentId: "t8gqca-1"
})(["", " display:none;margin-left:auto;border:none;background-color:transparent;color:inherit;outline:none;&:hover{background-color:rgba(0,0,0,.05);}", "{display:block;}"], hamburger('3.25rem'), mediaMobile);
var NavContent =
/*#__PURE__*/
styled.div.withConfig({
  displayName: "AppBar__NavContent",
  componentId: "t8gqca-2"
})(["display:flex;flex-direction:row;justify-content:space-between;align-items:center;flex-basis:auto;flex-grow:1;height:100%;& > ul{display:flex;flex-direction:row;list-style:none;flex-grow:1;flex-basis:100%;height:inherit;align-items:center;justify-content:", ";li{padding:0.85rem;}}& > div,& > span,& > form{display:flex;", "}", "{width:100%;flex-direction:column;align-items:flex-start;height:auto;padding-bottom:0.5rem;&:not(.active){display:none;}& > ul{flex-direction:column;align-items:flex-start;width:100%;flex-basis:auto;li{padding:.5rem 0;}}& > div,& > span,& > form{padding:.5rem 0;width:100%;}}"], setAlign, function (_ref6) {
  var color = _ref6.color;
  return color ? "color: ".concat(color, ";") : '';
}, mediaMobile);

var AppBar =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(AppBar, _PureComponent);

  function AppBar() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, AppBar);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(AppBar)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      show: false
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "toggleMenu", function () {
      _this.setState({
        show: !_this.state.show
      });
    });

    return _this;
  }

  _createClass(AppBar, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          align = _this$props.align,
          brand = _this$props.brand,
          rest = _objectWithoutProperties(_this$props, ["children", "align", "brand"]);

      var show = this.state.show;
      return React.createElement(NavBar, _extends({
        role: "navigation"
      }, rest), React.createElement("nav", null, brand, React.createElement(Burger, {
        className: show ? 'active' : undefined,
        onClick: this.toggleMenu
      }, React.createElement("span", null), React.createElement("span", null), React.createElement("span", null)), React.createElement(NavContent, {
        className: show ? 'active' : undefined,
        align: align
      }, children)));
    }
  }]);

  return AppBar;
}(PureComponent);

_defineProperty(AppBar, "defaultProps", {
  color: null,
  brand: null,
  fixed: false,
  sticky: false,
  fluid: false,
  backdrop: false
});

function getColor(theme, color) {
  return !color || color === 'light' ? theme.background : theme[color];
}

function setColor$3(_ref) {
  var theme = _ref.theme,
      color = _ref.color,
      addonColor = _ref.addonColor;
  var target = getColor(theme, color);
  var invertColor = findColorInvert(theme, target);
  var subColor = addonColor ? getColor(theme, addonColor) : darken(0.05, target);
  return css(["color:", ";background-color:", ";a,span{color:", ";background-color:", ";}a:hover{background-color:", ";}"], invertColor, target, invertColor, subColor, darken(0.05, subColor));
}

var Wrapper$7 =
/*#__PURE__*/
styled.div.withConfig({
  displayName: "Tag__Wrapper",
  componentId: "sc-1gipzx7-0"
})(["display:inline-flex;font-size:0.75rem;cursor:default;padding:0 .5rem;height:2em;user-select:none;border-radius:3px;justify-content:center;align-items:center;white-space:nowrap;line-height:1.5;", " &:not(:last-child){margin-right:0.5rem;}a,span{position:relative;display:inline-flex;flex-grow:0;flex-shrink:0;min-width:1.5rem;height:100%;margin-right:-0.5rem;margin-left:0.5rem;padding:0 .5rem;justify-content:center;align-items:center;&:last-child{border-top-right-radius:3px;border-bottom-right-radius:3px;}&:focus{outline:none;}", "}", ""], setColor$3, function (props) {
  return props.close ? css(["&:before,&:after{background-color:currentColor;content:\"\";display:block;left:50%;position:absolute;top:50%;transform:translateX(-50%) translateY(-50%) rotate(45deg);transform-origin:center center;}&:before{height:1px;width:50%;}&:after{height:50%;width:1px;}&:hover{opacity:1;}"]) : '';
}, function (_ref2) {
  var css = _ref2.css;
  return css || '';
});

var Tag =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Tag, _PureComponent);

  function Tag() {
    _classCallCheck(this, Tag);

    return _possibleConstructorReturn(this, _getPrototypeOf(Tag).apply(this, arguments));
  }

  _createClass(Tag, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          onClose = _this$props.onClose,
          rest = _objectWithoutProperties(_this$props, ["children", "onClose"]);

      return React.createElement(Wrapper$7, _extends({
        close: onClose !== null
      }, rest), children, onClose && React.createElement("a", {
        tabIndex: 0,
        role: "link",
        onClick: onClose
      }, "\xA0"));
    }
  }]);

  return Tag;
}(PureComponent);

_defineProperty(Tag, "defaultProps", {
  children: null,
  onClose: null,
  onClick: null,
  color: null
});

function setColor$4(_ref) {
  var color = _ref.color,
      theme = _ref.theme;
  if (!color) return '';
  var target = theme[color] || color;
  var invertColor = findColorInvert(theme, target);
  return css(["background-color:", ";color:", ";"], target, invertColor);
}

function setSize$1(_ref2) {
  var size = _ref2.size,
      theme = _ref2.theme;
  if (!size || size === 'small') return '';

  switch (size) {
    case 'medium':
      return css(["padding-bottom:9rem;padding-top:9rem;"]);

    case 'large':
      return css(["padding-bottom:18rem;padding-top:18rem;"]);

    case 'full':
      return css(["min-height:100vh;", "{align-items:center;display:flex;}"], Body);

    default:
      return '';
  }
}

var Body =
/*#__PURE__*/
styled.div.withConfig({
  displayName: "Hero__Body",
  componentId: "sc-12m9apf-0"
})(["flex-grow:1;flex-shrink:0;padding:3rem 1.5rem;", " h1{font-size:2rem;font-weight:600;line-height:1.125;&:not(:last-child){margin-bottom:1.5rem;}}h2{font-size:1.25rem;font-weight:400;line-height:1.25;}h1+h2{margin-top:-1.25rem;}"], function (_ref3) {
  var center = _ref3.center;
  return center ? 'text-align: center;' : '';
});
var Wrapper$8 =
/*#__PURE__*/
styled.div.withConfig({
  displayName: "Hero__Wrapper",
  componentId: "sc-12m9apf-1"
})(["align-items:stretch;display:flex;flex-direction:column;justify-content:space-between;", " ", " header{background-color:inherit;color:inherit;}header+", "{margin-top:3.25rem;margin-bottom:3.25rem;}"], setColor$4, setSize$1, Body);
function Hero(_ref4) {
  var children = _ref4.children,
      color = _ref4.color,
      size = _ref4.size,
      center = _ref4.center,
      header = _ref4.header,
      rest = _objectWithoutProperties(_ref4, ["children", "color", "size", "center", "header"]);

  return React.createElement(Wrapper$8, _extends({
    color: color,
    size: size
  }, rest), header, React.createElement(Body, {
    center: center
  }, React.createElement(Container, null, children)));
}

var Wrapper$9 =
/*#__PURE__*/
styled.div.withConfig({
  displayName: "Tooltip__Wrapper",
  componentId: "sc-1xyhucq-0"
})(["position:relative;display:inline-block;div[role=\"tooltip\"]{position:absolute;clear:both;box-shadow:0 1px 2px 0 rgba(0,0,0,0.05);z-index:9999;padding:0.375rem 0.625rem;cursor:default;width:auto;white-space:pre;font-size:0.85rem;z-index:9999;transform:scale(0.8);opacity:0;visibility:hidden;will-change:transform,opacity,visibility;transition-property:transform,opacity,visibility;transition-duration:100ms;transition-timing-function:cubic-bezier(0.645,0.045,0.355,1);", "}", ""], function (_ref) {
  var show = _ref.show;
  return show && css(["transform:scale(1);opacity:1;visibility:visible;"]);
}, function (_ref2) {
  var css = _ref2.css;
  return css || '';
});

var Tooltip =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Tooltip, _PureComponent);

  function Tooltip() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Tooltip);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Tooltip)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      show: false,
      style: {}
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "openTooltip", function () {
      if (_this.state.show || !_this.element.current || !_this.tooltip.current) return;

      var parentRect = _this.element.current.getBoundingClientRect();

      var rect = _this.tooltip.current.getBoundingClientRect();

      var left = parentRect.width + 8;
      var top = parentRect.height + 8;
      var width = parentRect.width - rect.width >> 1;
      var height = parentRect.height - rect.height >> 1;
      var style = {};

      switch (_this.props.position) {
        case 'top':
          {
            style = {
              bottom: "".concat(top, "px"),
              left: "".concat(width, "px")
            };
            break;
          }

        case 'left':
          {
            style = {
              right: "".concat(left, "px"),
              top: "".concat(height, "px")
            };
            break;
          }

        case 'right':
          {
            style = {
              left: "".concat(left, "px"),
              top: "".concat(height, "px")
            };
            break;
          }

        default:
          {
            style = {
              top: "".concat(top, "px"),
              left: "".concat(width, "px")
            };
            break;
          }
      }

      _this.setState({
        style: style,
        show: true
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "closeTooltip", function () {
      if (_this.state.show) _this.setState({
        show: false
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "element", createRef());

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "tooltip", createRef());

    return _this;
  }

  _createClass(Tooltip, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          label = _this$props.label,
          children = _this$props.children,
          rest = _objectWithoutProperties(_this$props, ["label", "children"]);

      var _this$state = this.state,
          show = _this$state.show,
          style = _this$state.style;
      return React.createElement(Wrapper$9, _extends({
        ref: this.element,
        onMouseOver: this.openTooltip,
        onMouseOut: this.closeTooltip
      }, rest), children, React.createElement("div", {
        ref: this.tooltip,
        className: show ? 'start' : undefined,
        role: "tooltip",
        style: style
      }, label));
    }
  }]);

  return Tooltip;
}(PureComponent);

_defineProperty(Tooltip, "defaultProps", {
  position: 'bottom',
  color: 'dark'
});

var SideMenu =
/*#__PURE__*/
styled.aside.withConfig({
  displayName: "SideMenu",
  componentId: "sc-1bcney9-0"
})(["font-size:1rem;"]);
SideMenu.displayName = 'SideMenu';
var MenuList =
/*#__PURE__*/
styled.ul.withConfig({
  displayName: "SideMenu__MenuList",
  componentId: "sc-1bcney9-1"
})(["line-height:1.25;a{display:block;padding:0.5em;border-radius:4px;color:", ";&:hover{color:", ";}&.active{color:", ";}}li{ul{margin:0.75em;padding-left:0.75em;}}"], function (_ref) {
  var theme = _ref.theme;
  return theme.text;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.primary;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.primary;
});
MenuList.displayName = 'MenuList';
var MenuLabel =
/*#__PURE__*/
styled.p.withConfig({
  displayName: "SideMenu__MenuLabel",
  componentId: "sc-1bcney9-2"
})(["font-size:0.75em;letter-spacing:0.1em;text-transform:uppercase;&:not(:first-child){margin-top:1em;}&:not(:last-child){margin-bottom:1em;}"]);
MenuLabel.displayName = 'MenuLabel';

var CardBody =
/*#__PURE__*/
styled.div.withConfig({
  displayName: "Card__CardBody",
  componentId: "sc-1xqn2rf-0"
})(["padding:1.25rem;margin:0;"]);
var CardHeader =
/*#__PURE__*/
styled.header.withConfig({
  displayName: "Card__CardHeader",
  componentId: "sc-1xqn2rf-1"
})(["display:flex;padding:0.5rem 1.5rem;min-height:3.5rem;border-bottom:1px solid ", ";align-items:center;justify-content:space-between;"], function (_ref) {
  var theme = _ref.theme;
  return theme.border;
});
var CardFooter =
/*#__PURE__*/
styled.footer.withConfig({
  displayName: "Card__CardFooter",
  componentId: "sc-1xqn2rf-2"
})(["display:flex;padding:0.5rem 1.5rem;min-height:3.5rem;border-top:1px solid ", ";align-items:center;justify-content:space-between;"], function (_ref2) {
  var theme = _ref2.theme;
  return theme.border;
});
var CardImage =
/*#__PURE__*/
styled.a.withConfig({
  displayName: "Card__CardImage",
  componentId: "sc-1xqn2rf-3"
})(["width:100%;img{width:100%;padding:0;margin:0;border-top-left-radius:3px;border-top-right-radius:3px;}"]);
var CardImageHorizontal =
/*#__PURE__*/
styled.a.withConfig({
  displayName: "Card__CardImageHorizontal",
  componentId: "sc-1xqn2rf-4"
})(["flex:0 0 30%;min-width:5rem;width:30%;border-top-left-radius:3px;border-bottom-left-radius:3px;background:no-repeat center/cover;", ""], function (_ref3) {
  var url = _ref3.url;
  return url ? css(["background-image:url(", ");"], url) : {};
});
var horizontalStyle = {
  flexDirection: 'row'
};

var Card =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Card, _PureComponent);

  function Card() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Card);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Card)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "renderHeader", function () {
      var _this$props = _this.props,
          image = _this$props.image,
          title = _this$props.title,
          horizontal = _this$props.horizontal;
      if (image && !horizontal) return React.createElement(CardImage, null, React.createElement("img", {
        src: image
      }));
      if (image && horizontal) return React.createElement(CardImageHorizontal, {
        url: image
      });
      if (title && !horizontal) return React.createElement(CardHeader, null, React.createElement("h3", null, title));
      return null;
    });

    return _this;
  }

  _createClass(Card, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          children = _this$props2.children,
          horizontal = _this$props2.horizontal,
          footer = _this$props2.footer,
          color = _this$props2.color;
      var header = this.renderHeader();
      var wrapperStyle = horizontal ? horizontalStyle : undefined;
      return React.createElement(Box, {
        style: wrapperStyle,
        color: color
      }, header, React.createElement(CardBody, null, children), footer && React.createElement(CardFooter, null, React.Children.only(footer)));
    }
  }]);

  return Card;
}(PureComponent);

function _templateObject$3() {
  var data = _taggedTemplateLiteral(["", ""]);

  _templateObject$3 = function _templateObject() {
    return data;
  };

  return data;
}
var Wrapper$a =
/*#__PURE__*/
styled.div.withConfig({
  displayName: "Popover__Wrapper",
  componentId: "sc-1huajr8-0"
})(["display:block;outline:none;color:inherit;position:relative;&:hover{color:inherit;text-decoration:none;}", ""], function (_ref) {
  var css = _ref.css;
  return css || '';
});
var Tooltip$1 =
/*#__PURE__*/
styled(Box).withConfig({
  displayName: "Popover__Tooltip",
  componentId: "sc-1huajr8-1"
})(["position:absolute;display:flex;clear:both;box-shadow:0 1px 2px 0 rgba(0,0,0,0.05);z-index:9999;padding:0.5rem 0;width:auto;height:auto;cursor:auto;will-change:transform,opacity,visibility;transform:scale(0.8);opacity:0;visibility:hidden;transition-property:transform,opacity,visibility;transition-duration:100ms;transition-timing-function:cubic-bezier(0.645,0.045,0.355,1);", ""], function (_ref2) {
  var show = _ref2.show;
  return show && css(["transform:scale(1);opacity:1;visibility:visible;"]);
});

var Popover =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Popover, _PureComponent);

  function Popover() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Popover);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Popover)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      show: false,
      style: {}
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "openDropdown", function () {
      if (_this.state.show || !_this.tooltip.current || !_this.wrapper.current) return;
      var style = {};

      var parentRect = _this.wrapper.current.getBoundingClientRect();

      var tooltipRect = _this.tooltip.current.getBoundingClientRect();

      switch (_this.props.position) {
        case 'top-left':
          {
            style = {
              bottom: "".concat(parentRect.height + 8, "px"),
              left: 0
            };
            break;
          }

        case 'top-right':
          {
            style = {
              bottom: "".concat(parentRect.height + 8, "px"),
              right: 0
            };
            break;
          }

        case 'top':
          {
            style = {
              bottom: "".concat(parentRect.height + 8, "px"),
              left: "".concat(parentRect.width - tooltipRect.width >> 1, "px")
            };
            break;
          }

        case 'bottom-right':
          {
            style = {
              top: "".concat(parentRect.height + 8, "px"),
              right: 0
            };
            break;
          }

        case 'bottom':
          {
            style = {
              top: "".concat(parentRect.height + 8, "px"),
              left: "".concat(parentRect.width - tooltipRect.width >> 1, "px")
            };
            break;
          }
        // bottom-left

        default:
          {
            style = {
              top: "".concat(parentRect.height + 8, "px"),
              left: 0
            };
            break;
          }
      }

      _this.setState({
        style: style,
        show: true
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "closeDropdown", function () {
      if (_this.state.show) _this.setState({
        show: false
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "tooltip", createRef());

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "wrapper", createRef());

    return _this;
  }

  _createClass(Popover, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          label = _this$props.label,
          children = _this$props.children,
          style = _this$props.style,
          css = _this$props.css,
          rest = _objectWithoutProperties(_this$props, ["label", "children", "style", "css"]);

      var show = this.state.show;
      return React.createElement(_StyledWrapper$2, {
        tabIndex: 0,
        role: "button",
        ref: this.wrapper,
        onFocus: this.openDropdown,
        onBlur: this.closeDropdown,
        className: this.props.className,
        _css: css
      }, label, React.createElement(Tooltip$1, _extends({
        show: show,
        role: "tooltip",
        ref: this.tooltip,
        style: this.state.style
      }, rest), children));
    }
  }]);

  return Popover;
}(PureComponent);

_defineProperty(Popover, "defaultProps", {
  color: 'white',
  style: {}
});

var _StyledWrapper$2 = styled(Wrapper$a)(_templateObject$3(), function (p) {
  return p._css;
});

var ESC_KEY = 27;
var Wrapper$b =
/*#__PURE__*/
styled.div.withConfig({
  displayName: "Modal__Wrapper",
  componentId: "pb7lhx-0"
})(["position:fixed;top:0;right:0;left:0;bottom:0;z-index:9997;overflow-y:auto;display:flex;align-items:center;justify-content:center;flex-direction:column;padding:0.75rem;.v-modal-body{z-index:9999;margin:0;will-change:transform,opacity;transition-property:transform,opacity;transition-timing-function:cubic-bezier(0.645,0.045,0.355,1);transition-duration:200ms;}&.fade-enter > .v-modal-body{opacity:0.01;transform:scale(0.8);}&.fade-enter-active > .v-modal-body{opacity:1;transform:scale(1);}&.fade-exit > .v-modal-body{opacity:1;transform:scale(1);}&.fade-exit-active > .v-modal-body{opacity:0.01;transform:scale(0.8);}.v-modal-shadow{position:fixed;bottom:0;left:0;right:0;top:0;background-color:", ";}", ""], function (_ref) {
  var shadowColor = _ref.shadowColor;
  return shadowColor || 'transparent';
}, function (_ref2) {
  var css = _ref2.css;
  return css || {};
});

var Modal =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Modal, _PureComponent);

  function Modal() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Modal);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Modal)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onKeyDown", function (e) {
      if (_this.props.closeOnEsc && e.keyCode === ESC_KEY && _this.props.closeModal) {
        _this.props.closeModal();
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onClickOverlay", function () {
      if (_this.props.closeOnOverlay && _this.props.closeModal) {
        _this.props.closeModal();
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "element", void 0);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "shouldClose", null);

    return _this;
  }

  _createClass(Modal, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.element) {
        document.body.removeChild(this.element);
      }
    }
  }, {
    key: "render",
    value: function render() {
      if (typeof document !== "undefined" && !this.element) {
        this.element = document.createElement('div');
        document.body.appendChild(this.element);
      }

      if (this.element) {
        var _this$props = this.props,
            _show = _this$props.show,
            _size = _this$props.size,
            _title = _this$props.title,
            _children = _this$props.children,
            _footer = _this$props.footer,
            _color = _this$props.color,
            onClick = _this$props.onClick,
            rest = _objectWithoutProperties(_this$props, ["show", "size", "title", "children", "footer", "color", "onClick"]);

        return createPortal(React.createElement(CSSTransition, {
          classNames: "fade",
          timeout: 200,
          in: _show,
          unmountOnExit: true
        }, React.createElement(Wrapper$b, _extends({
          role: "document"
        }, rest), React.createElement(Col, {
          className: "v-modal-body",
          size: _size,
          auto: true,
          role: "dialog"
        }, React.createElement(Box, {
          color: _color
        }, _title ? _title : null, _children, _footer ? _footer : null)), this.props.external, React.createElement("div", {
          className: "v-modal-shadow",
          onClick: this.onClickOverlay
        }))), this.element);
      }

      return null;
    }
  }]);

  return Modal;
}(PureComponent);

_defineProperty(Modal, "defaultProps", {
  show: false,
  color: 'white',
  size: 6,
  shadowColor: 'rgba(10,10,10,.86)'
});

var Wrapper$c =
/*#__PURE__*/
styled(Box).withConfig({
  displayName: "Toast__Wrapper",
  componentId: "sc-8192b2-0"
})(["padding:0.375em 0.75em;max-width:100%;margin-bottom:1rem;z-index:9999;width:fit-content;transition-property:transform,opacity;transition-timing-function:cubic-bezier(0.645,0.045,0.355,1);transition-duration:250ms;&.move-enter{opacity:0.01;transform:scale(0.8);}&.move-enter-active{opacity:1;transform:scale(1);}&.move-exit{opacity:1;transform:scale(1);}&.move-exit-active{opacity:0.01;transform:scale(0.8);}"]);
var ToastItem =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(ToastItem, _PureComponent);

  function ToastItem() {
    _classCallCheck(this, ToastItem);

    return _possibleConstructorReturn(this, _getPrototypeOf(ToastItem).apply(this, arguments));
  }

  _createClass(ToastItem, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.duration !== null) {
        setTimeout(this.props.clear, this.props.duration);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          message = _this$props.message,
          color = _this$props.color;
      return React.createElement(Wrapper$c, {
        borderless: true,
        color: color
      }, message);
    }
  }]);

  return ToastItem;
}(PureComponent);

_defineProperty(ToastItem, "defaultProps", {
  duration: 5000
});

function setPosition(position, isFixed) {
  // tslint:disable-next-line
  var base = "position: ".concat(isFixed ? 'fixed' : 'absolute', "; z-index: 9999; display: flex; flex-direction: column; ");

  switch (position) {
    case 'bottom':
      {
        return "".concat(base, " bottom: 1rem; left: 50%; align-item: center; transform: translateX(-50%);");
      }

    case 'bottom-left':
      {
        return "".concat(base, " bottom: 1rem; left: 1rem; align-item: flex-start;");
      }

    case 'bottom-right':
      {
        return "".concat(base, " bottom: 1rem; right: 1rem; align-item: flex-end;");
      }

    case 'top':
      {
        return "".concat(base, " top: 1rem; left: 50%; align-item: center; transform: translateX(-50%);");
      }

    case 'top-left':
      {
        return "".concat(base, " top: 1rem; left: 1rem; align-item: flex-start;");
      }

    case 'top-right':
    default:
      {
        return "".concat(base, " top: 1rem; right: 1rem; align-item: flex-end;");
      }
  }
}

var ToastContainer =
/*#__PURE__*/
function (_Component) {
  _inherits(ToastContainer, _Component);

  function ToastContainer() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ToastContainer);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ToastContainer)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "clear", function (id) {
      return function () {
        _this.props.clear(id);
      };
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "renderToast", function () {
      var toasts = _this.props.toasts;
      return React.createElement(TransitionGroup, {
        component: null
      }, toasts.map(function (props) {
        return React.createElement(CSSTransition, {
          key: props.id,
          timeout: 250,
          classNames: "move",
          unmountOnExit: true
        }, React.createElement(ToastItem, _extends({
          key: props.id
        }, props, {
          clear: _this.clear(props.id)
        })));
      }));
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "element", void 0);

    return _this;
  }

  _createClass(ToastContainer, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(props) {
      return props.toasts.length !== this.props.toasts.length || props.position !== this.props.position;
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(props) {
      if (this.element && (props.position !== this.props.position || props.fixed !== this.props.fixed)) {
        this.element.style.cssText = setPosition(this.props.position, this.props.fixed);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.element) document.body.removeChild(this.element);
    }
  }, {
    key: "render",
    value: function render() {
      if (typeof document !== 'undefined' && !this.element) {
        this.element = document.createElement('div');
        this.element.style.cssText = setPosition(this.props.position, this.props.fixed);
        document.body.appendChild(this.element);
      }

      if (this.element) {
        return createPortal(this.renderToast(), this.element);
      }

      return null;
    }
  }]);

  return ToastContainer;
}(Component);

_defineProperty(ToastContainer, "defaultProps", {
  toasts: [],
  position: 'top-right',
  fixed: false
});

var Wrapper$d =
/*#__PURE__*/
styled.nav.withConfig({
  displayName: "Tabs__Wrapper",
  componentId: "sc-1qmwdm1-0"
})(["display:flex;justify-content:", ";.tab-content{position:relative;display:flex;", " align-items:center;justify-content:center;overflow:hidden;}"], setAlign, function (_ref) {
  var align = _ref.align;
  return align ? '' : 'flex-grow: 1;';
});
var TabItem =
/*#__PURE__*/
styled.div.withConfig({
  displayName: "Tabs__TabItem",
  componentId: "sc-1qmwdm1-1"
})(["display:block;flex-grow:1;cursor:pointer;a{display:flex;color:", ";justify-content:center;align-items:center;vertical-align:top;padding:0.375em 0.75em;border-bottom:2px solid transparent;transition-property:background-color;transition-duration:150ms;transition-timing-function:ease-in-out;&:hover{background-color:rgba(0,0,0,0.03);}}"], function (_ref2) {
  var theme = _ref2.theme;
  return theme.text;
});

function setColor$5(_ref3) {
  var theme = _ref3.theme,
      color = _ref3.color;
  return !color ? theme.background : theme[color];
}

var Indicator =
/*#__PURE__*/
styled.div.withConfig({
  displayName: "Tabs__Indicator",
  componentId: "sc-1qmwdm1-2"
})(["position:absolute;bottom:0;left:0;background-color:", ";height:2px;visibility:hidden;transform-origin:left;will-change:transform;transition-property:transform;transition-duration:200ms;transition-timing-function:cubic-bezier(0.645,0.045,0.355,1);"], setColor$5);

var Tabs =
/*#__PURE__*/
function (_Component) {
  _inherits(Tabs, _Component);

  function Tabs() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Tabs);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Tabs)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      start: 0,
      current: null
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onNext", function () {
      var threshold = _this.props.maxItems;
      var value = _this.state.start + threshold;
      var count = Children.count(_this.props.children);

      if (value < count) {
        _this.setState({
          start: value
        });
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onPrev", function () {
      if (_this.state.start === 0) return;
      var threshold = _this.props.maxItems;
      var value = _this.state.start - threshold;

      _this.setState({
        start: value < 0 ? 0 : value
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getIndicatorPosition", function () {
      var current = _this.state.current;
      var _this$props = _this.props,
          children = _this$props.children,
          maxItems = _this$props.maxItems;
      if (current === null || current === undefined) return undefined;
      if (!children || !children.length) return undefined;
      var total = children.length > maxItems ? maxItems : children.length;
      var value = current * 100 + '%';
      return {
        visibility: 'visible',
        width: "".concat(Math.round(100 / total), "%"),
        transform: "translateX(".concat(value, ")")
      };
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "renderChildren", function (child, index) {
      if (_this.state.start > index) return null;
      if (_this.state.start + index >= _this.props.maxItems) return null;
      if (typeof child === 'string' || typeof child === 'number') return null;
      return React.createElement(TabItem, _extends({}, child.props, {
        align: _this.props.align
      }));
    });

    return _this;
  }

  _createClass(Tabs, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(props, state) {
      return this.state.start !== state.start || this.state.current !== state.current;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          children = _this$props2.children,
          align = _this$props2.align,
          color = _this$props2.color,
          maxItems = _this$props2.maxItems;
      var start = this.state.start;
      var total = children ? children.length : 0;
      var style = this.getIndicatorPosition();
      return React.createElement(Wrapper$d, {
        align: align
      }, start > maxItems && React.createElement(Button, {
        color: "text"
      }, '<'), React.createElement("div", {
        className: "tab-content"
      }, Children.map(children, this.renderChildren), React.createElement(Indicator, {
        color: color,
        style: style
      })), total > maxItems && start > maxItems && React.createElement(Button, {
        color: "text"
      }, '>'));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, state) {
      var activeIndex;

      for (var i = 0, len = props.children.length; i < len; i += 1) {
        var child = props.children[i];

        if (child.props.active) {
          activeIndex = i;
          break;
        }
      }

      return _objectSpread({}, state, {
        current: activeIndex
      });
    }
  }]);

  return Tabs;
}(Component);

_defineProperty(Tabs, "defaultProps", {
  maxItems: 5
});

_defineProperty(Tabs, "Item", TabItem);

var Wrapper$e =
/*#__PURE__*/
styled.div.withConfig({
  displayName: "Bar__Wrapper",
  componentId: "wnou71-0"
})(["position:", ";background-color:", ";top:0;left:0;width:100%;.loading-bar{height:", ";background-color:", ";will-change:width,opacity;z-index:1000000;transition-property:width,opacity;transition-duration:", "ms;transition-timing-function:linear;&.load-enter{width:0;}&.load-enter-done{width:85%;}&.load-exit{width:85%;}&.load-exit-active{width:100%;opacity:0;}}", ""], function (_ref) {
  var position = _ref.position;
  return position;
}, function (_ref2) {
  var background = _ref2.background;
  return background;
}, function (_ref3) {
  var size = _ref3.size;
  return size;
}, function (_ref4) {
  var color = _ref4.color,
      theme = _ref4.theme;
  return theme[color];
}, function (_ref5) {
  var duration = _ref5.duration;
  return duration;
}, function (_ref6) {
  var css = _ref6.css;
  return css || {};
});

var LoadingBar =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(LoadingBar, _PureComponent);

  function LoadingBar() {
    _classCallCheck(this, LoadingBar);

    return _possibleConstructorReturn(this, _getPrototypeOf(LoadingBar).apply(this, arguments));
  }

  _createClass(LoadingBar, [{
    key: "render",
    value: function render() {
      return React.createElement(Wrapper$e, this.props, React.createElement(CSSTransition, {
        classNames: "load",
        timeout: this.props.duration,
        in: this.props.loading,
        unmountOnExit: true
      }, React.createElement("div", {
        className: "loading-bar"
      })));
    }
  }]);

  return LoadingBar;
}(PureComponent);

_defineProperty(LoadingBar, "defaultProps", {
  loading: false,
  color: 'primary',
  position: 'absolute',
  background: 'transparent',
  size: '3px',
  duration: 150
});

function getColor$1(_ref) {
  var theme = _ref.theme,
      color = _ref.color;
  var value = !color || color === 'light' ? theme.background : theme[color];
  return css(["border-color:", ";border-right-color:", ";border-top-color:", ";"], value, theme.border, theme.border);
}

var spin =
/*#__PURE__*/
keyframes(["from{transform:rotate(0deg);}to{transform:rotate(359deg);}"]);
var Spinner =
/*#__PURE__*/
styled.div.withConfig({
  displayName: "Spinner",
  componentId: "sc-1ql2mvr-0"
})(["display:inline-block;width:", ";height:", ";margin:0;padding:0;position:relative;&:after{display:block;top:0;left:0;animation:", " 750ms infinite linear;border:", " solid;border-radius:100%;", " content:\"\";height:100%;width:100%;position:absolute;}"], function (_ref2) {
  var width = _ref2.width;
  return width ? width : '100%';
}, function (_ref3) {
  var height = _ref3.height;
  return height ? height : '100%';
}, spin, function (_ref4) {
  var borderSize = _ref4.borderSize;
  return borderSize;
}, getColor$1);
Spinner.displayName = 'Spinner';
Spinner.defaultProps = {
  borderSize: '2px'
};

// grid & layout

var theme = {
  fontFamily: 'ヒラギノ角ゴシック,"ヒラギノ角ゴ ProN W3",メイリオ,Meiryo,"ＭＳ Ｐゴシック","MS PGothic",sans-serif',
  fontSize: '16px',
  responsive: true,
  gutter: 24,
  smallGutter: 16,
  boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  mobile: 576,
  tablet: 769,
  desktop: 960,
  fullhd: 1344,
  radius: 4,
  primary: '#37B151',
  link: '#578ba9',
  info: '#209cee',
  success: '#0fa886',
  warning: '#f2b541',
  danger: '#f3575a',
  dark: '#363636',
  light: '#9b9b9b',
  black: '#0a0a0a',
  blackBis: '#121212',
  blackTer: '#242424',
  white: '#ffffff',
  whiteBis: '#fafafa',
  whiteTer: '#f5f5f5',
  grey: '#7a7a7a',
  greyLight: '#9b9b9b',
  greyLighter: '#dbdbdb',
  text: '#4a4a4a',
  textDark: '#4a4a4a',
  textLight: '#7a7a7a',
  textStrong: '#4a4a4a',
  background: '#f5f5f5',
  border: '#dbdbdb',
  borderHover: '#9b9b9b',
  borderActive: '#4a4a4a',
  placeholder: '#7a7a7a'
};

/*! based on normalize.css v8.0.0 | MIT License | github.com/necolas/normalize.css */

var normalized =
/*#__PURE__*/
css(["*,::after,::before{box-sizing:border-box;}html{line-height:1.15;-webkit-text-size-adjust:100%;-ms-overflow-style:scrollbar;}body{margin:0;font-family:", ";;font-size:", ";text-align:left;}h1{font-size:2em;margin:.67em 0;}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace,monospace;font-size:1em;}a{background-color:transparent;color:", ";}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted;}b,strong{font-weight:bolder;}code,kbd,samp{font-family:monospace,monospace;font-size:1em;}small{font-size:80%;}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline;}sub{bottom:-.25em;}sup{top:-.5em;}img{border-style:none;}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible;}button,select{text-transform:none;}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button;}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0;}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText;}input[type=date],input[type=time],input[type=datetime-local],input[type=month]{-webkit-appearance:listbox;}fieldset{padding:.35em .75em .625em;}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline;resize:vertical;}textarea{overflow:auto;}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0;}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto;}[type=search]{-webkit-appearance:textfield;outline-offset:-2px;}[type=search]::-webkit-search-decoration{-webkit-appearance:none;}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block;}summary{display:list-item;}template{display:none;}[hidden]{display:none;}blockquote,body,dd,dl,dt,fieldset,figure,h1,h2,h3,h4,h5,h6,hr,html,iframe,legend,li,ol,p,pre,textarea,ul{margin:0;padding:0;}button{font-size:inherit;}article,aside,figure,footer,header,hgroup,section{display:block;}input[type=\"checkbox\"],input[type=\"radio\"]{box-sizing:border-box;padding:0;}a{cursor:pointer;text-decoration:none;color:#3273dc;&:hover{color:currentColor;}}img{vertical-align:middle;border-style:none;}svg{overflow:hidden;vertical-align:middle;}small{font-size:.875em;}span{font-style:inherit;font-weight:inherit;}strong{color:#363636;font-weight:700;}table{border-collapse:collapse;border-spacing:0;}th{text-align:inherit;}ul{list-style-type:none;}"], function (_ref) {
  var theme = _ref.theme;
  return theme ? theme.fontFamily : '"Hiragino Sans", ヒラギノ角ゴシック, "Hiragino Kaku Gothic ProN", "ヒラギノ角ゴ ProN W3", 游ゴシック体, "Yu Gothic", YuGothic, "ヒラギノ角ゴシック Pro", HiraKakuPro-W3, "Hiragino Kaku Gothic Pro", Quicksand, メイリオ, Meiryo, Osaka, "ＭＳ Ｐゴシック", "MS PGothic", sans-serif';
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme ? theme.fontSize : '16px';
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.link;
});

export { theme as defaultTheme, normalized as normalizeStyle, Break, Container, Row, Col, Content, Button, ButtonGroup, Table, Box, Progress, Accordion, AppBar, Tag, Hero, Tooltip, Card, Popover, Modal, ToastContainer as Toast, Tabs, LoadingBar, Spinner, Pre, Code, H1, Field, TextInput, Textarea, Checkbox, Select, Radio, Approved as IconApproved, ChevronLeftRound as IconChevronLeftRound, ChevronRightRound as IconChevronRightRound, FileRound as IconFileRound, Pencil as IconPencil, User as IconUser, Close as IconClose, Refresh as IconRefresh, SideMenu, MenuList, MenuLabel, findColorInvert, hamburger as hambuger, boxShadow, Arrow as arrow, setSize, mediaMobile, mediaTablet, mediaDesktop, mediaFullHD, mediaUntilFullHD };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlzaXRzLmpzIiwic291cmNlcyI6WyIuLi9zcmMvY29tcG9uZW50cy9HcmlkL0JyZWFrLnRzeCIsIi4uL3NyYy91dGlscy9tZWRpYS50cyIsIi4uL3NyYy9jb21wb25lbnRzL0dyaWQvQ29udGFpbmVyLnRzIiwiLi4vc3JjL2NvbXBvbmVudHMvR3JpZC9Db2wudHMiLCIuLi9zcmMvY29tcG9uZW50cy9HcmlkL1Jvdy50cyIsIi4uL3NyYy9jb21wb25lbnRzL0NvbnRlbnQvUHJlLnRzIiwiLi4vc3JjL2NvbXBvbmVudHMvQ29udGVudC9Db2RlLnRzIiwiLi4vc3JjL2NvbXBvbmVudHMvQ29udGVudC9IMS50cyIsIi4uL3NyYy9jb21wb25lbnRzL0NvbnRlbnQvaW5kZXgudHMiLCIuLi9ub2RlX21vZHVsZXMvcG9saXNoZWQvbGliL2ludGVybmFsSGVscGVycy9fY3VycnkuanMiLCIuLi9ub2RlX21vZHVsZXMvcG9saXNoZWQvbGliL2ludGVybmFsSGVscGVycy9fZ3VhcmQuanMiLCIuLi9ub2RlX21vZHVsZXMvcG9saXNoZWQvbGliL2ludGVybmFsSGVscGVycy9faHNsVG9SZ2IuanMiLCIuLi9ub2RlX21vZHVsZXMvcG9saXNoZWQvbGliL2ludGVybmFsSGVscGVycy9fbmFtZVRvSGV4LmpzIiwiLi4vbm9kZV9tb2R1bGVzL3BvbGlzaGVkL2xpYi9pbnRlcm5hbEhlbHBlcnMvX2Vycm9ycy5qcyIsIi4uL25vZGVfbW9kdWxlcy9wb2xpc2hlZC9saWIvY29sb3IvcGFyc2VUb1JnYi5qcyIsIi4uL25vZGVfbW9kdWxlcy9wb2xpc2hlZC9saWIvaW50ZXJuYWxIZWxwZXJzL19yZ2JUb0hzbC5qcyIsIi4uL25vZGVfbW9kdWxlcy9wb2xpc2hlZC9saWIvY29sb3IvcGFyc2VUb0hzbC5qcyIsIi4uL25vZGVfbW9kdWxlcy9wb2xpc2hlZC9saWIvaW50ZXJuYWxIZWxwZXJzL19yZWR1Y2VIZXhWYWx1ZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9wb2xpc2hlZC9saWIvaW50ZXJuYWxIZWxwZXJzL19udW1iZXJUb0hleC5qcyIsIi4uL25vZGVfbW9kdWxlcy9wb2xpc2hlZC9saWIvaW50ZXJuYWxIZWxwZXJzL19oc2xUb0hleC5qcyIsIi4uL25vZGVfbW9kdWxlcy9wb2xpc2hlZC9saWIvY29sb3IvaHNsLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3BvbGlzaGVkL2xpYi9jb2xvci9oc2xhLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3BvbGlzaGVkL2xpYi9jb2xvci9yZ2IuanMiLCIuLi9ub2RlX21vZHVsZXMvcG9saXNoZWQvbGliL2NvbG9yL3JnYmEuanMiLCIuLi9ub2RlX21vZHVsZXMvcG9saXNoZWQvbGliL2NvbG9yL3RvQ29sb3JTdHJpbmcuanMiLCIuLi9ub2RlX21vZHVsZXMvcG9saXNoZWQvbGliL2NvbG9yL2Rhcmtlbi5qcyIsIi4uL25vZGVfbW9kdWxlcy9wb2xpc2hlZC9saWIvY29sb3IvZ2V0THVtaW5hbmNlLmpzIiwiLi4vc3JjL3V0aWxzL2ZpbmRDb2xvckludmVydC50cyIsIi4uL25vZGVfbW9kdWxlcy9wb2xpc2hlZC9saWIvY29sb3IvdHJhbnNwYXJlbnRpemUuanMiLCIuLi9zcmMvdXRpbHMvYm94U2hhZG93LnRzIiwiLi4vc3JjL3V0aWxzL3NldFNpemUudHMiLCIuLi9zcmMvdXRpbHMvZGlzYWJsZWRDb2xvci50cyIsIi4uL3NyYy9jb21wb25lbnRzL0J1dHRvbi9pbmRleC50cyIsIi4uL3NyYy9jb21wb25lbnRzL0J1dHRvbi9CdXR0b25Hcm91cC50cyIsIi4uL3NyYy9jb21wb25lbnRzL1RhYmxlL2luZGV4LnRzIiwiLi4vc3JjL2NvbXBvbmVudHMvQm94L2luZGV4LnRzeCIsIi4uL3NyYy9jb21wb25lbnRzL1Byb2dyZXNzL2luZGV4LnRzeCIsIi4uL3NyYy9jb21wb25lbnRzL0Zvcm0vRmllbGQudHN4IiwiLi4vc3JjL3V0aWxzL2hhbWJ1Z2VyLnRzIiwiLi4vc3JjL3V0aWxzL2Fycm93LnRzIiwiLi4vc3JjL2NvbXBvbmVudHMvRm9ybS9IZWxwTWVzc2FnZS50c3giLCIuLi9zcmMvY29tcG9uZW50cy9Gb3JtL1RleHRJbnB1dC50c3giLCIuLi9zcmMvY29tcG9uZW50cy9Gb3JtL1RleHRhcmVhLnRzeCIsIi4uL3NyYy9jb21wb25lbnRzL0Zvcm0vQ2hlY2tib3gudHN4IiwiLi4vc3JjL2NvbXBvbmVudHMvRm9ybS9TZWxlY3QudHN4IiwiLi4vc3JjL2NvbXBvbmVudHMvRm9ybS9SYWRpby50c3giLCIuLi9zcmMvY29tcG9uZW50cy9JY29ucy9BcHByb3ZlZC50c3giLCIuLi9zcmMvY29tcG9uZW50cy9JY29ucy9DaGV2cm9uTGVmdFJvdW5kLnRzeCIsIi4uL3NyYy9jb21wb25lbnRzL0ljb25zL0NoZXZyb25SaWdodFJvdW5kLnRzeCIsIi4uL3NyYy9jb21wb25lbnRzL0ljb25zL0ZpbGVSb3VuZC50c3giLCIuLi9zcmMvY29tcG9uZW50cy9JY29ucy9QZW5jaWwudHN4IiwiLi4vc3JjL2NvbXBvbmVudHMvSWNvbnMvVXNlci50c3giLCIuLi9zcmMvY29tcG9uZW50cy9JY29ucy9DbG9zZS50c3giLCIuLi9zcmMvY29tcG9uZW50cy9JY29ucy9SZWZyZXNoLnRzeCIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZWFjdC1pcy9janMvcmVhY3QtaXMucHJvZHVjdGlvbi5taW4uanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVhY3QtaXMvY2pzL3JlYWN0LWlzLmRldmVsb3BtZW50LmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3JlYWN0LWlzL2luZGV4LmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL29iamVjdC1hc3NpZ24vaW5kZXguanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9saWIvUmVhY3RQcm9wVHlwZXNTZWNyZXQuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9jaGVja1Byb3BUeXBlcy5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2ZhY3RvcnlXaXRoVHlwZUNoZWNrZXJzLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvZmFjdG9yeVdpdGhUaHJvd2luZ1NoaW1zLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvaW5kZXguanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvZG9tLWhlbHBlcnMvY2xhc3MvaGFzQ2xhc3MuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvZG9tLWhlbHBlcnMvY2xhc3MvYWRkQ2xhc3MuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvZG9tLWhlbHBlcnMvY2xhc3MvcmVtb3ZlQ2xhc3MuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVhY3QtbGlmZWN5Y2xlcy1jb21wYXQvcmVhY3QtbGlmZWN5Y2xlcy1jb21wYXQuZXMuanMiLCIuLi9ub2RlX21vZHVsZXMvcmVhY3QtdHJhbnNpdGlvbi1ncm91cC91dGlscy9Qcm9wVHlwZXMuanMiLCIuLi9ub2RlX21vZHVsZXMvcmVhY3QtdHJhbnNpdGlvbi1ncm91cC9UcmFuc2l0aW9uLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3JlYWN0LXRyYW5zaXRpb24tZ3JvdXAvQ1NTVHJhbnNpdGlvbi5qcyIsIi4uL25vZGVfbW9kdWxlcy9yZWFjdC10cmFuc2l0aW9uLWdyb3VwL3V0aWxzL0NoaWxkTWFwcGluZy5qcyIsIi4uL25vZGVfbW9kdWxlcy9yZWFjdC10cmFuc2l0aW9uLWdyb3VwL1RyYW5zaXRpb25Hcm91cC5qcyIsIi4uL25vZGVfbW9kdWxlcy9yZWFjdC10cmFuc2l0aW9uLWdyb3VwL1JlcGxhY2VUcmFuc2l0aW9uLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3JlYWN0LXRyYW5zaXRpb24tZ3JvdXAvaW5kZXguanMiLCIuLi9zcmMvY29tcG9uZW50cy9BY2NvcmRpb24vaW5kZXgudHN4IiwiLi4vc3JjL3V0aWxzL3NldEFsaWduLnRzIiwiLi4vc3JjL2NvbXBvbmVudHMvQXBwQmFyL2luZGV4LnRzeCIsIi4uL3NyYy9jb21wb25lbnRzL1RhZy9pbmRleC50c3giLCIuLi9zcmMvY29tcG9uZW50cy9IZXJvL2luZGV4LnRzeCIsIi4uL3NyYy9jb21wb25lbnRzL1Rvb2x0aXAvaW5kZXgudHN4IiwiLi4vc3JjL2NvbXBvbmVudHMvU2lkZU1lbnUvaW5kZXgudHN4IiwiLi4vc3JjL2NvbXBvbmVudHMvQ2FyZC9pbmRleC50c3giLCIuLi9zcmMvY29tcG9uZW50cy9Qb3BvdmVyL2luZGV4LnRzeCIsIi4uL3NyYy9jb21wb25lbnRzL01vZGFsL2luZGV4LnRzeCIsIi4uL3NyYy9jb21wb25lbnRzL1RvYXN0L2luZGV4LnRzeCIsIi4uL3NyYy9jb21wb25lbnRzL1RhYnMvaW5kZXgudHN4IiwiLi4vc3JjL2NvbXBvbmVudHMvTG9hZGluZy9CYXIudHN4IiwiLi4vc3JjL2NvbXBvbmVudHMvTG9hZGluZy9TcGlubmVyLnRzeCIsIi4uL3NyYy9jb21wb25lbnRzL2luZGV4LnRzIiwiLi4vc3JjL3RoZW1lL2RlZmF1bHQudHMiLCIuLi9zcmMvc3R5bGVzL25vcm1hbGl6ZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCcmVhaygpIHtcbiAgcmV0dXJuIDxkaXYgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJywgaGVpZ2h0OiAwIH19IC8+O1xufTtcbiIsImltcG9ydCB7IFRoZW1lVHlwZSB9IGZyb20gJy4uL3R5cGVzJztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgdGhlbWU6IFRoZW1lVHlwZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1lZGlhTW9iaWxlKHsgdGhlbWUgfTogUHJvcHMpIHtcbiAgaWYgKCF0aGVtZS5yZXNwb25zaXZlKSByZXR1cm4gJ0BtZWRpYSAobWF4LXdpZHRoOiAwKSc7XG4gIHJldHVybiBgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogJHt0aGVtZS5tb2JpbGV9cHgpYDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1lZGlhVGFibGV0KHsgdGhlbWUgfTogUHJvcHMpIHtcbiAgaWYgKCF0aGVtZS5yZXNwb25zaXZlKSByZXR1cm4gJ0BtZWRpYSAobWF4LXdpZHRoOiAwKSc7XG4gIHJldHVybiBgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogJHt0aGVtZS50YWJsZXR9cHgpYDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1lZGlhRGVza3RvcCh7IHRoZW1lIH06IFByb3BzKSB7XG4gIGlmICghdGhlbWUucmVzcG9uc2l2ZSkgcmV0dXJuICdAbWVkaWEgKG1heC13aWR0aDogMCknO1xuICByZXR1cm4gYEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICR7dGhlbWUuZGVza3RvcH1weClgO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWVkaWFGdWxsSEQoeyB0aGVtZSB9OiBQcm9wcykge1xuICBpZiAoIXRoZW1lLnJlc3BvbnNpdmUpIHJldHVybiAnQG1lZGlhIChtYXgtd2lkdGg6IDApJztcbiAgcmV0dXJuIGBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAke3RoZW1lLmZ1bGxoZH1weClgO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWVkaWFVbnRpbEZ1bGxIRCh7IHRoZW1lIH06IFByb3BzKSB7XG4gIGlmICghdGhlbWUucmVzcG9uc2l2ZSkgcmV0dXJuICdAbWVkaWEgKG1heC13aWR0aDogMCknO1xuICByZXR1cm4gYEBtZWRpYSAobWluLXdpZHRoOiAke3RoZW1lLmZ1bGxoZH1weClgO1xufVxuIiwiaW1wb3J0IHN0eWxlZCwgeyBjc3MgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgeyBtZWRpYUZ1bGxIRCwgbWVkaWFUYWJsZXQsIG1lZGlhRGVza3RvcCwgbWVkaWFNb2JpbGUgfSBmcm9tICcuLi8uLi91dGlscy9tZWRpYSc7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIC8qKiAgKi9cbiAgZmx1aWQ/OiBib29sZWFuO1xufVxuXG5mdW5jdGlvbiBzZXRSZXNwb25zaXZlKHsgZmx1aWQgfTogUHJvcHMpOiBhbnkge1xuICBpZiAoZmx1aWQpIHtcbiAgICByZXR1cm4gY3NzYFxuICAgICAgJHttZWRpYUZ1bGxIRH0ge1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwLjc1cmVtO1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDAuNzVyZW07XG4gICAgICB9XG4gICAgICAke21lZGlhRGVza3RvcH0ge1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwLjc1cmVtO1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDAuNzVyZW07XG4gICAgICB9XG4gICAgICAke21lZGlhTW9iaWxlfSB7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDAuNXJlbTtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwLjVyZW07XG4gICAgICB9XG4gICAgYDtcbiAgfVxuXG4gIHJldHVybiBjc3NgXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICR7bWVkaWFGdWxsSER9IHtcbiAgICAgIG1heC13aWR0aDogJHsoeyB0aGVtZSB9OiBhbnkpID0+IHRoZW1lLmZ1bGxoZCAtICgyICogdGhlbWUuZ3V0dGVyKX1weDtcbiAgICB9XG4gICAgJHttZWRpYURlc2t0b3B9IHtcbiAgICAgIG1heC13aWR0aDogJHsoeyB0aGVtZSB9OiBhbnkpID0+IHRoZW1lLmRlc2t0b3AgLSAoMiAqIHRoZW1lLmd1dHRlcil9cHg7XG4gICAgfVxuICAgICR7bWVkaWFUYWJsZXR9IHtcbiAgICAgIG1heC13aWR0aDogJHsoeyB0aGVtZSB9OiBhbnkpID0+IHRoZW1lLnRhYmxldCAtICgyICogdGhlbWUuc21hbGxHdXR0ZXIpfXB4O1xuICAgIH1cbiAgICAke21lZGlhTW9iaWxlfSB7XG4gICAgICBtYXgtd2lkdGg6ICR7KHsgdGhlbWUgfTogYW55KSA9PiB0aGVtZS5tb2JpbGUgLSAoMiAqIHRoZW1lLnNtYWxsR3V0dGVyKX1weDtcbiAgICB9XG4gIGA7XG59XG5cbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXY8UHJvcHM+YFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuXG4gICR7c2V0UmVzcG9uc2l2ZX1cbmA7XG5Db250YWluZXIuZGlzcGxheU5hbWUgPSAnQ29udGFpbmVyJztcbkNvbnRhaW5lci5kZWZhdWx0UHJvcHMgPSB7XG4gIGZsdWlkOiBmYWxzZSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRhaW5lcjtcbiIsImltcG9ydCBzdHlsZWQsIHsgY3NzIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgbWVkaWFUYWJsZXQgfSBmcm9tICcuLi8uLi91dGlscy9tZWRpYSc7XG5pbXBvcnQgeyBDb2xTaXplVHlwZSB9IGZyb20gJy4uLy4uL3R5cGVzJztcblxuaW50ZXJmYWNlIENvbFByb3BzIHtcbiAgLyoqIOWbuuWumuOBruW5heOCkuaMh+WumuOBmeOCi+WgtOWQiCAqL1xuICBuYXJyb3c/OiBib29sZWFuO1xuICAvKiogMS0xMuOBruOCteOCpOOCuiAqL1xuICBzaXplPzogQ29sU2l6ZVR5cGU7XG4gIC8qKiAxLTEy44Gu5bem44Gub2Zmc2V0ICovXG4gIG9mZnNldD86IENvbFNpemVUeXBlO1xuICAvKiogMS0xMuWfuua6luOBruOCteOCpOOCuuOCkueUu+mdouOCteOCpOOCuuOBruOCiOOBo+OBpuWPr+WkieOBq+OBmeOCiyAqL1xuICBhdXRvPzogYm9vbGVhbjtcbn1cblxuZnVuY3Rpb24gcGFyY2VudGFnZSh2YWx1ZT86IENvbFNpemVUeXBlKSB7XG4gIGlmICghdmFsdWUpIHJldHVybiAwO1xuICBpZiAodmFsdWUgPj0gMTIpIHJldHVybiAxMDA7XG4gIHJldHVybiBNYXRoLmNlaWwoKHZhbHVlIC8gMTIpICogMTAwICogMTAwMDAwKSAvIDEwMDAwMDtcbn1cblxuZnVuY3Rpb24gcmVuZGVyU2l6ZSh7IHNpemUsIG5hcnJvdywgYXV0bywgb2Zmc2V0IH06IENvbFByb3BzKSB7XG4gIGlmIChuYXJyb3cpIHJldHVybiBudWxsO1xuICBpZiAoIXNpemUgfHwgc2l6ZSA8IDEgfHwgc2l6ZSA+IDEyKSB7XG4gICAgcmV0dXJuIGNzc2BcbiAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgbWF4LXdpZHRoOiBub25lO1xuXG4gICAgICAke21lZGlhVGFibGV0fSB7XG4gICAgICAgIHBhZGRpbmc6IDAuNXJlbTtcbiAgICAgIH1cbiAgICBgO1xuICB9XG5cbiAgY29uc3QgdmFsdWUgPSBwYXJjZW50YWdlKHNpemUpO1xuICBjb25zdCBvZmZWYWwgPSBvZmZzZXQgPyBwYXJjZW50YWdlKG9mZnNldCkgOiAwO1xuICBjb25zdCBhdXRvU2l6ZSA9IHZhbHVlID4gMzMgPyAxMDAgOiB2YWx1ZSAqIDM7XG4gIHJldHVybiBjc3NgXG4gICAgd2lkdGg6ICR7dmFsdWV9JTtcbiAgICBtYXgtd2lkdGg6ICR7dmFsdWV9JTtcbiAgICAke29mZnNldCA/IGBtYXJnaW4tbGVmdDogJHtvZmZWYWx9JTtgIDoge319XG5cbiAgICAke21lZGlhVGFibGV0fSB7XG4gICAgICB3aWR0aDogJHthdXRvU2l6ZX0lO1xuICAgICAgbWF4LXdpZHRoOiAke2F1dG9TaXplfSU7XG4gICAgICBwYWRkaW5nOiAwLjVyZW07XG4gICAgICAke29mZnNldCA/IGBtYXJnaW4tbGVmdDogMDtgIDoge319XG4gICAgfVxuICBgO1xufVxuXG5jb25zdCBDb2wgPSBzdHlsZWQuZGl2PENvbFByb3BzPmBcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1pbi1oZWlnaHQ6IDFweDtcbiAgcGFkZGluZzogMC43NXJlbTtcblxuICAkeyh7IG5hcnJvdyB9KSA9PiBuYXJyb3cgPyAnZmxleDogbm9uZTsnIDoge319XG4gICR7KHsgb2Zmc2V0IH0pID0+IG9mZnNldCA/IGBtYXJnaW4tbGVmdDogJHtwYXJjZW50YWdlKG9mZnNldCl9JTtgIDoge319XG5cbiAgJHtyZW5kZXJTaXplfVxuYDtcblxuQ29sLmRpc3BsYXlOYW1lID0gJ0NvbCc7XG5cbmV4cG9ydCBkZWZhdWx0IENvbDtcbiIsImltcG9ydCBzdHlsZWQsIHsgY3NzIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IENvbCBmcm9tICcuL0NvbCc7XG5pbXBvcnQgeyBtZWRpYUZ1bGxIRCwgbWVkaWFUYWJsZXQgfSBmcm9tICcuLi8uLi91dGlscy9tZWRpYSc7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIC8qKiDlm7rlrprluYUgKi9cbiAgd2lkdGg/OiBzdHJpbmc7XG4gIC8qKiDlkJHjgY/mlbDjga7ooYzjgaflr77lv5zjgafjgY3jgovjgojjgYbjgavjgZnjgosgKi9cbiAgbXVsdGlsaW5lPzogYm9vbGVhbjtcbiAgLyoqIOe4puOBruS4reWkruaPg+OBiOOBq+OBmeOCiyAqL1xuICB2Y2VudGVyPzogYm9vbGVhbjtcbiAgLyoqIOaoquW5heOBruS4reWkruaPg+OBiOOBq+OBmeOCiyAqL1xuICBjZW50ZXI/OiBib29sZWFuO1xuICAvKiogQ29s44Gu6ZaT6ZqU44KS44Gq44GP44GZICovXG4gIG5vR3V0dGVyPzogYm9vbGVhbjtcbn1cblxuZnVuY3Rpb24gcmVuZGVyR3V0dGVyKHsgbm9HdXR0ZXIgfTogUHJvcHMpIHtcbiAgaWYgKG5vR3V0dGVyKSB7XG4gICAgcmV0dXJuIGNzc2BcbiAgICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuXG4gICAgICA+ICR7Q29sfSB7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDA7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICAgIH1cbiAgICBgO1xuICB9XG4gIHJldHVybiBjc3NgXG4gICAgJHttZWRpYUZ1bGxIRH0ge1xuICAgICAgbWFyZ2luLWxlZnQ6IC0wLjc1cmVtO1xuICAgICAgbWFyZ2luLXJpZ2h0OiAtMC43NXJlbTtcbiAgICAgIG1hcmdpbi10b3A6IC0wLjc1cmVtO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMC43NXJlbTtcbiAgICB9XG4gICAgJHttZWRpYVRhYmxldH0ge1xuICAgICAgbWFyZ2luLWxlZnQ6IC0wLjVyZW07XG4gICAgICBtYXJnaW4tcmlnaHQ6IC0wLjVyZW07XG4gICAgICBtYXJnaW4tdG9wOiAtMC41cmVtO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xuICAgIH1cbiAgYDtcbn1cblxuY29uc3QgUm93ID0gc3R5bGVkLmRpdjxQcm9wcz5gXG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICBmbGV4LXdyYXA6IHdyYXA7XG5cbiAgJHsoeyB2Y2VudGVyIH0pID0+IHZjZW50ZXIgPyAnYWxpZ24taXRlbXM6IGNlbnRlcjsnIDogJyd9XG4gICR7KHsgY2VudGVyIH0pID0+IGNlbnRlciA/ICdqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsnIDogJyd9XG5cbiAgJHtyZW5kZXJHdXR0ZXJ9XG5gO1xuXG5Sb3cuZGlzcGxheU5hbWUgPSAnUm93JztcblxuZXhwb3J0IGRlZmF1bHQgUm93O1xuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmNvbnN0IFByZSA9IHN0eWxlZC5wcmVgXG4gIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcbiAgb3ZlcmZsb3cteDogYXV0bztcbiAgcGFkZGluZzogMS4yNWVtIDEuNWVtO1xuICB3aGl0ZS1zcGFjZTogcHJlO1xuICB3b3JkLXdyYXA6IG5vcm1hbDtcblxuICAmOm5vdCg6bGFzdC1jaGlsZCkge1xuICAgIG1hcmdpbi1ib3R0b206IDFlbTtcbiAgfVxuYDtcblByZS5kaXNwbGF5TmFtZSA9ICdQcmUnO1xuXG5leHBvcnQgZGVmYXVsdCBQcmU7XG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuY29uc3QgQ29kZSA9IHN0eWxlZC5jb2RlYFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmJhY2tncm91bmR9O1xuICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5kYW5nZXJ9O1xuICBmb250LXNpemU6IC44NzVlbTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgcGFkZGluZzogLjI1ZW0gLjVlbSAuMjVlbTtcbmA7XG5cbkNvZGUuZGlzcGxheU5hbWUgPSAnQ29kZSc7XG5cbmV4cG9ydCBkZWZhdWx0IENvZGU7XG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuY29uc3QgSDEgPSBzdHlsZWQuaDFgXG4gIGZvbnQtc2l6ZTogMmVtO1xuICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcbiAgcGFkZGluZy1sZWZ0OiAxcmVtO1xuXG4gIGJvcmRlci1sZWZ0OiAxcmVtIHNvbGlkO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQ7XG4gIGJvcmRlci1jb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5ib3JkZXJ9O1xuYDtcbkgxLmRpc3BsYXlOYW1lID0gJ0gxJztcblxuZXhwb3J0IGRlZmF1bHQgSDE7XG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuY29uc3QgQ29udGVudCA9IHN0eWxlZC5kaXZgXG4gIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnRleHR9O1xuICBsaW5lLWhlaWdodDogMS41O1xuXG4gIGxpICsgbGkge1xuICAgIG1hcmdpbi10b3A6IDAuMjVlbTtcbiAgfVxuXG4gIHAsXG4gIGRsLFxuICBvbCxcbiAgdWwsXG4gIGJsb2NrcXVvdGUsXG4gIHByZSxcbiAgdGFibGUge1xuICAgICY6bm90KDpsYXN0LWNoaWxkKSB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxZW07XG4gICAgfVxuICB9XG5cbiAgaDEsXG4gIGgyLFxuICBoMyxcbiAgaDQsXG4gIGg1LFxuICBoNiB7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBsaW5lLWhlaWdodDogMS4xMjU7XG4gIH1cblxuICBoMSB7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDAuNWVtO1xuICB9XG5cbiAgaDIge1xuICAgIGZvbnQtc2l6ZTogMS43NWVtO1xuICAgIG1hcmdpbi1ib3R0b206IDAuNTcxNGVtO1xuXG4gICAgJjpub3QoOmZpcnN0LWNoaWxkKSB7XG4gICAgICBtYXJnaW4tdG9wOiAxLjE0MjhlbTtcbiAgICB9XG4gIH1cblxuICBoMyB7XG4gICAgZm9udC1zaXplOiAxLjVlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjY2NjZlbTtcblxuICAgICY6bm90KDpmaXJzdC1jaGlsZCkge1xuICAgICAgbWFyZ2luLXRvcDogMS4zMzMzZW07XG4gICAgfVxuICB9XG5cbiAgaDQge1xuICAgIGZvbnQtc2l6ZTogMS4yNWVtO1xuICAgIG1hcmdpbi1ib3R0b206IDAuOGVtO1xuICB9XG5cbiAgaDUge1xuICAgIGZvbnQtc2l6ZTogMS4xMjVlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjg4ODhlbTtcbiAgfVxuXG4gIGg2IHtcbiAgICBmb250LXNpemU6IDFlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XG4gIH1cblxuICBvbCB7XG4gICAgbGlzdC1zdHlsZTogZGVjaW1hbCBvdXRzaWRlO1xuICAgIG1hcmdpbi1sZWZ0OiAyZW07XG4gICAgbWFyZ2luLXRvcDogMWVtO1xuICB9XG5cbiAgdWwge1xuICAgIGxpc3Qtc3R5bGU6IGRpc2Mgb3V0c2lkZTtcbiAgICBtYXJnaW4tbGVmdDogMmVtO1xuICAgIG1hcmdpbi10b3A6IDFlbTtcbiAgICB1bCB7XG4gICAgICBsaXN0LXN0eWxlLXR5cGU6IGNpcmNsZTtcbiAgICAgIG1hcmdpbi10b3A6IDAuNWVtO1xuICAgICAgdWwge1xuICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IHNxdWFyZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBkZCB7XG4gICAgbWFyZ2luLWxlZnQ6IDJlbTtcbiAgfVxuXG4gIHRhYmxlIHtcbiAgICB3aWR0aDogMTAwJTtcblxuICAgIHRkLCB0aCB7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmJvcmRlcn07XG4gICAgICBib3JkZXItd2lkdGg6IDAgMCAxcHg7XG4gICAgICBwYWRkaW5nOiAwLjVlbSAwLjc1ZW07XG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgIH1cblxuICAgIHRoIHtcbiAgICAgIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnRleHR9O1xuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICB9XG5cbiAgICB0aGVhZCB7XG4gICAgICB0ZCwgdGgge1xuICAgICAgICBib3JkZXItd2lkdGg6IDAgMCAycHg7XG4gICAgICAgIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnRleHR9O1xuICAgICAgfVxuICAgIH1cblxuICAgIHRmb290IHtcbiAgICAgIHRkLCB0aCB7XG4gICAgICAgIGJvcmRlci13aWR0aDogMnB4IDAgMDtcbiAgICAgICAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUudGV4dH07XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGJvZHkgPiB0cjpsYXN0LWNoaWxke1xuICAgICAgdGQsIHRoIHtcbiAgICAgICAgYm9yZGVyLWJvdHRvbS13aWR0aDogMDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbmA7XG5Db250ZW50LmRpc3BsYXlOYW1lID0gJ0NvbnRlbnQnO1xuXG5leHBvcnQgeyBkZWZhdWx0IGFzIFByZSB9IGZyb20gJy4vUHJlJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQ29kZSB9IGZyb20gJy4vQ29kZSc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEgxIH0gZnJvbSAnLi9IMSc7XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRlbnQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IGN1cnJ5O1xuXG4vLyBUeXBlIGRlZmluaXRpb25zIHRha2VuIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL2djYW50aS9mbG93LXN0YXRpYy1sYW5kL2Jsb2IvbWFzdGVyL3NyYy9GdW4uanNcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVkZWNsYXJlXG5mdW5jdGlvbiBjdXJyaWVkKGYsIGxlbmd0aCwgYWNjKSB7XG4gIHJldHVybiBmdW5jdGlvbiBmbigpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLXJlc3QtcGFyYW1zXG4gICAgdmFyIGNvbWJpbmVkID0gYWNjLmNvbmNhdChBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpKTtcbiAgICByZXR1cm4gY29tYmluZWQubGVuZ3RoID49IGxlbmd0aCA/IGYuYXBwbHkodGhpcywgY29tYmluZWQpIDogY3VycmllZChmLCBsZW5ndGgsIGNvbWJpbmVkKTtcbiAgfTtcbn0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlZGVjbGFyZVxuXG5cbmZ1bmN0aW9uIGN1cnJ5KGYpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1yZWRlY2xhcmVcbiAgcmV0dXJuIGN1cnJpZWQoZiwgZi5sZW5ndGgsIFtdKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbmZ1bmN0aW9uIGd1YXJkKGxvd2VyQm91bmRhcnksIHVwcGVyQm91bmRhcnksIHZhbHVlKSB7XG4gIHJldHVybiBNYXRoLm1heChsb3dlckJvdW5kYXJ5LCBNYXRoLm1pbih1cHBlckJvdW5kYXJ5LCB2YWx1ZSkpO1xufVxuXG52YXIgX2RlZmF1bHQgPSBndWFyZDtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbmZ1bmN0aW9uIGNvbG9yVG9JbnQoY29sb3IpIHtcbiAgcmV0dXJuIE1hdGgucm91bmQoY29sb3IgKiAyNTUpO1xufVxuXG5mdW5jdGlvbiBjb252ZXJ0VG9JbnQocmVkLCBncmVlbiwgYmx1ZSkge1xuICByZXR1cm4gY29sb3JUb0ludChyZWQpICsgXCIsXCIgKyBjb2xvclRvSW50KGdyZWVuKSArIFwiLFwiICsgY29sb3JUb0ludChibHVlKTtcbn1cblxuZnVuY3Rpb24gaHNsVG9SZ2IoaHVlLCBzYXR1cmF0aW9uLCBsaWdodG5lc3MsIGNvbnZlcnQpIHtcbiAgaWYgKGNvbnZlcnQgPT09IHZvaWQgMCkge1xuICAgIGNvbnZlcnQgPSBjb252ZXJ0VG9JbnQ7XG4gIH1cblxuICBpZiAoc2F0dXJhdGlvbiA9PT0gMCkge1xuICAgIC8vIGFjaHJvbWF0aWNcbiAgICByZXR1cm4gY29udmVydChsaWdodG5lc3MsIGxpZ2h0bmVzcywgbGlnaHRuZXNzKTtcbiAgfSAvLyBmb3JtdWxhciBmcm9tIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0hTTF9hbmRfSFNWXG5cblxuICB2YXIgaHVlUHJpbWUgPSBodWUgJSAzNjAgLyA2MDtcbiAgdmFyIGNocm9tYSA9ICgxIC0gTWF0aC5hYnMoMiAqIGxpZ2h0bmVzcyAtIDEpKSAqIHNhdHVyYXRpb247XG4gIHZhciBzZWNvbmRDb21wb25lbnQgPSBjaHJvbWEgKiAoMSAtIE1hdGguYWJzKGh1ZVByaW1lICUgMiAtIDEpKTtcbiAgdmFyIHJlZCA9IDA7XG4gIHZhciBncmVlbiA9IDA7XG4gIHZhciBibHVlID0gMDtcblxuICBpZiAoaHVlUHJpbWUgPj0gMCAmJiBodWVQcmltZSA8IDEpIHtcbiAgICByZWQgPSBjaHJvbWE7XG4gICAgZ3JlZW4gPSBzZWNvbmRDb21wb25lbnQ7XG4gIH0gZWxzZSBpZiAoaHVlUHJpbWUgPj0gMSAmJiBodWVQcmltZSA8IDIpIHtcbiAgICByZWQgPSBzZWNvbmRDb21wb25lbnQ7XG4gICAgZ3JlZW4gPSBjaHJvbWE7XG4gIH0gZWxzZSBpZiAoaHVlUHJpbWUgPj0gMiAmJiBodWVQcmltZSA8IDMpIHtcbiAgICBncmVlbiA9IGNocm9tYTtcbiAgICBibHVlID0gc2Vjb25kQ29tcG9uZW50O1xuICB9IGVsc2UgaWYgKGh1ZVByaW1lID49IDMgJiYgaHVlUHJpbWUgPCA0KSB7XG4gICAgZ3JlZW4gPSBzZWNvbmRDb21wb25lbnQ7XG4gICAgYmx1ZSA9IGNocm9tYTtcbiAgfSBlbHNlIGlmIChodWVQcmltZSA+PSA0ICYmIGh1ZVByaW1lIDwgNSkge1xuICAgIHJlZCA9IHNlY29uZENvbXBvbmVudDtcbiAgICBibHVlID0gY2hyb21hO1xuICB9IGVsc2UgaWYgKGh1ZVByaW1lID49IDUgJiYgaHVlUHJpbWUgPCA2KSB7XG4gICAgcmVkID0gY2hyb21hO1xuICAgIGJsdWUgPSBzZWNvbmRDb21wb25lbnQ7XG4gIH1cblxuICB2YXIgbGlnaHRuZXNzTW9kaWZpY2F0aW9uID0gbGlnaHRuZXNzIC0gY2hyb21hIC8gMjtcbiAgdmFyIGZpbmFsUmVkID0gcmVkICsgbGlnaHRuZXNzTW9kaWZpY2F0aW9uO1xuICB2YXIgZmluYWxHcmVlbiA9IGdyZWVuICsgbGlnaHRuZXNzTW9kaWZpY2F0aW9uO1xuICB2YXIgZmluYWxCbHVlID0gYmx1ZSArIGxpZ2h0bmVzc01vZGlmaWNhdGlvbjtcbiAgcmV0dXJuIGNvbnZlcnQoZmluYWxSZWQsIGZpbmFsR3JlZW4sIGZpbmFsQmx1ZSk7XG59XG5cbnZhciBfZGVmYXVsdCA9IGhzbFRvUmdiO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBuYW1lZENvbG9yTWFwID0ge1xuICBhbGljZWJsdWU6ICdmMGY4ZmYnLFxuICBhbnRpcXVld2hpdGU6ICdmYWViZDcnLFxuICBhcXVhOiAnMDBmZmZmJyxcbiAgYXF1YW1hcmluZTogJzdmZmZkNCcsXG4gIGF6dXJlOiAnZjBmZmZmJyxcbiAgYmVpZ2U6ICdmNWY1ZGMnLFxuICBiaXNxdWU6ICdmZmU0YzQnLFxuICBibGFjazogJzAwMCcsXG4gIGJsYW5jaGVkYWxtb25kOiAnZmZlYmNkJyxcbiAgYmx1ZTogJzAwMDBmZicsXG4gIGJsdWV2aW9sZXQ6ICc4YTJiZTInLFxuICBicm93bjogJ2E1MmEyYScsXG4gIGJ1cmx5d29vZDogJ2RlYjg4NycsXG4gIGNhZGV0Ymx1ZTogJzVmOWVhMCcsXG4gIGNoYXJ0cmV1c2U6ICc3ZmZmMDAnLFxuICBjaG9jb2xhdGU6ICdkMjY5MWUnLFxuICBjb3JhbDogJ2ZmN2Y1MCcsXG4gIGNvcm5mbG93ZXJibHVlOiAnNjQ5NWVkJyxcbiAgY29ybnNpbGs6ICdmZmY4ZGMnLFxuICBjcmltc29uOiAnZGMxNDNjJyxcbiAgY3lhbjogJzAwZmZmZicsXG4gIGRhcmtibHVlOiAnMDAwMDhiJyxcbiAgZGFya2N5YW46ICcwMDhiOGInLFxuICBkYXJrZ29sZGVucm9kOiAnYjg4NjBiJyxcbiAgZGFya2dyYXk6ICdhOWE5YTknLFxuICBkYXJrZ3JlZW46ICcwMDY0MDAnLFxuICBkYXJrZ3JleTogJ2E5YTlhOScsXG4gIGRhcmtraGFraTogJ2JkYjc2YicsXG4gIGRhcmttYWdlbnRhOiAnOGIwMDhiJyxcbiAgZGFya29saXZlZ3JlZW46ICc1NTZiMmYnLFxuICBkYXJrb3JhbmdlOiAnZmY4YzAwJyxcbiAgZGFya29yY2hpZDogJzk5MzJjYycsXG4gIGRhcmtyZWQ6ICc4YjAwMDAnLFxuICBkYXJrc2FsbW9uOiAnZTk5NjdhJyxcbiAgZGFya3NlYWdyZWVuOiAnOGZiYzhmJyxcbiAgZGFya3NsYXRlYmx1ZTogJzQ4M2Q4YicsXG4gIGRhcmtzbGF0ZWdyYXk6ICcyZjRmNGYnLFxuICBkYXJrc2xhdGVncmV5OiAnMmY0ZjRmJyxcbiAgZGFya3R1cnF1b2lzZTogJzAwY2VkMScsXG4gIGRhcmt2aW9sZXQ6ICc5NDAwZDMnLFxuICBkZWVwcGluazogJ2ZmMTQ5MycsXG4gIGRlZXBza3libHVlOiAnMDBiZmZmJyxcbiAgZGltZ3JheTogJzY5Njk2OScsXG4gIGRpbWdyZXk6ICc2OTY5NjknLFxuICBkb2RnZXJibHVlOiAnMWU5MGZmJyxcbiAgZmlyZWJyaWNrOiAnYjIyMjIyJyxcbiAgZmxvcmFsd2hpdGU6ICdmZmZhZjAnLFxuICBmb3Jlc3RncmVlbjogJzIyOGIyMicsXG4gIGZ1Y2hzaWE6ICdmZjAwZmYnLFxuICBnYWluc2Jvcm86ICdkY2RjZGMnLFxuICBnaG9zdHdoaXRlOiAnZjhmOGZmJyxcbiAgZ29sZDogJ2ZmZDcwMCcsXG4gIGdvbGRlbnJvZDogJ2RhYTUyMCcsXG4gIGdyYXk6ICc4MDgwODAnLFxuICBncmVlbjogJzAwODAwMCcsXG4gIGdyZWVueWVsbG93OiAnYWRmZjJmJyxcbiAgZ3JleTogJzgwODA4MCcsXG4gIGhvbmV5ZGV3OiAnZjBmZmYwJyxcbiAgaG90cGluazogJ2ZmNjliNCcsXG4gIGluZGlhbnJlZDogJ2NkNWM1YycsXG4gIGluZGlnbzogJzRiMDA4MicsXG4gIGl2b3J5OiAnZmZmZmYwJyxcbiAga2hha2k6ICdmMGU2OGMnLFxuICBsYXZlbmRlcjogJ2U2ZTZmYScsXG4gIGxhdmVuZGVyYmx1c2g6ICdmZmYwZjUnLFxuICBsYXduZ3JlZW46ICc3Y2ZjMDAnLFxuICBsZW1vbmNoaWZmb246ICdmZmZhY2QnLFxuICBsaWdodGJsdWU6ICdhZGQ4ZTYnLFxuICBsaWdodGNvcmFsOiAnZjA4MDgwJyxcbiAgbGlnaHRjeWFuOiAnZTBmZmZmJyxcbiAgbGlnaHRnb2xkZW5yb2R5ZWxsb3c6ICdmYWZhZDInLFxuICBsaWdodGdyYXk6ICdkM2QzZDMnLFxuICBsaWdodGdyZWVuOiAnOTBlZTkwJyxcbiAgbGlnaHRncmV5OiAnZDNkM2QzJyxcbiAgbGlnaHRwaW5rOiAnZmZiNmMxJyxcbiAgbGlnaHRzYWxtb246ICdmZmEwN2EnLFxuICBsaWdodHNlYWdyZWVuOiAnMjBiMmFhJyxcbiAgbGlnaHRza3libHVlOiAnODdjZWZhJyxcbiAgbGlnaHRzbGF0ZWdyYXk6ICc3ODknLFxuICBsaWdodHNsYXRlZ3JleTogJzc4OScsXG4gIGxpZ2h0c3RlZWxibHVlOiAnYjBjNGRlJyxcbiAgbGlnaHR5ZWxsb3c6ICdmZmZmZTAnLFxuICBsaW1lOiAnMGYwJyxcbiAgbGltZWdyZWVuOiAnMzJjZDMyJyxcbiAgbGluZW46ICdmYWYwZTYnLFxuICBtYWdlbnRhOiAnZjBmJyxcbiAgbWFyb29uOiAnODAwMDAwJyxcbiAgbWVkaXVtYXF1YW1hcmluZTogJzY2Y2RhYScsXG4gIG1lZGl1bWJsdWU6ICcwMDAwY2QnLFxuICBtZWRpdW1vcmNoaWQ6ICdiYTU1ZDMnLFxuICBtZWRpdW1wdXJwbGU6ICc5MzcwZGInLFxuICBtZWRpdW1zZWFncmVlbjogJzNjYjM3MScsXG4gIG1lZGl1bXNsYXRlYmx1ZTogJzdiNjhlZScsXG4gIG1lZGl1bXNwcmluZ2dyZWVuOiAnMDBmYTlhJyxcbiAgbWVkaXVtdHVycXVvaXNlOiAnNDhkMWNjJyxcbiAgbWVkaXVtdmlvbGV0cmVkOiAnYzcxNTg1JyxcbiAgbWlkbmlnaHRibHVlOiAnMTkxOTcwJyxcbiAgbWludGNyZWFtOiAnZjVmZmZhJyxcbiAgbWlzdHlyb3NlOiAnZmZlNGUxJyxcbiAgbW9jY2FzaW46ICdmZmU0YjUnLFxuICBuYXZham93aGl0ZTogJ2ZmZGVhZCcsXG4gIG5hdnk6ICcwMDAwODAnLFxuICBvbGRsYWNlOiAnZmRmNWU2JyxcbiAgb2xpdmU6ICc4MDgwMDAnLFxuICBvbGl2ZWRyYWI6ICc2YjhlMjMnLFxuICBvcmFuZ2U6ICdmZmE1MDAnLFxuICBvcmFuZ2VyZWQ6ICdmZjQ1MDAnLFxuICBvcmNoaWQ6ICdkYTcwZDYnLFxuICBwYWxlZ29sZGVucm9kOiAnZWVlOGFhJyxcbiAgcGFsZWdyZWVuOiAnOThmYjk4JyxcbiAgcGFsZXR1cnF1b2lzZTogJ2FmZWVlZScsXG4gIHBhbGV2aW9sZXRyZWQ6ICdkYjcwOTMnLFxuICBwYXBheWF3aGlwOiAnZmZlZmQ1JyxcbiAgcGVhY2hwdWZmOiAnZmZkYWI5JyxcbiAgcGVydTogJ2NkODUzZicsXG4gIHBpbms6ICdmZmMwY2InLFxuICBwbHVtOiAnZGRhMGRkJyxcbiAgcG93ZGVyYmx1ZTogJ2IwZTBlNicsXG4gIHB1cnBsZTogJzgwMDA4MCcsXG4gIHJlYmVjY2FwdXJwbGU6ICc2MzknLFxuICByZWQ6ICdmMDAnLFxuICByb3N5YnJvd246ICdiYzhmOGYnLFxuICByb3lhbGJsdWU6ICc0MTY5ZTEnLFxuICBzYWRkbGVicm93bjogJzhiNDUxMycsXG4gIHNhbG1vbjogJ2ZhODA3MicsXG4gIHNhbmR5YnJvd246ICdmNGE0NjAnLFxuICBzZWFncmVlbjogJzJlOGI1NycsXG4gIHNlYXNoZWxsOiAnZmZmNWVlJyxcbiAgc2llbm5hOiAnYTA1MjJkJyxcbiAgc2lsdmVyOiAnYzBjMGMwJyxcbiAgc2t5Ymx1ZTogJzg3Y2VlYicsXG4gIHNsYXRlYmx1ZTogJzZhNWFjZCcsXG4gIHNsYXRlZ3JheTogJzcwODA5MCcsXG4gIHNsYXRlZ3JleTogJzcwODA5MCcsXG4gIHNub3c6ICdmZmZhZmEnLFxuICBzcHJpbmdncmVlbjogJzAwZmY3ZicsXG4gIHN0ZWVsYmx1ZTogJzQ2ODJiNCcsXG4gIHRhbjogJ2QyYjQ4YycsXG4gIHRlYWw6ICcwMDgwODAnLFxuICB0aGlzdGxlOiAnZDhiZmQ4JyxcbiAgdG9tYXRvOiAnZmY2MzQ3JyxcbiAgdHVycXVvaXNlOiAnNDBlMGQwJyxcbiAgdmlvbGV0OiAnZWU4MmVlJyxcbiAgd2hlYXQ6ICdmNWRlYjMnLFxuICB3aGl0ZTogJ2ZmZicsXG4gIHdoaXRlc21va2U6ICdmNWY1ZjUnLFxuICB5ZWxsb3c6ICdmZjAnLFxuICB5ZWxsb3dncmVlbjogJzlhY2QzMidcbiAgLyoqXG4gICAqIENoZWNrcyBpZiBhIHN0cmluZyBpcyBhIENTUyBuYW1lZCBjb2xvciBhbmQgcmV0dXJucyBpdHMgZXF1aXZhbGVudCBoZXggdmFsdWUsIG90aGVyd2lzZSByZXR1cm5zIHRoZSBvcmlnaW5hbCBjb2xvci5cbiAgICogQHByaXZhdGVcbiAgICovXG5cbn07XG5cbmZ1bmN0aW9uIG5hbWVUb0hleChjb2xvcikge1xuICBpZiAodHlwZW9mIGNvbG9yICE9PSAnc3RyaW5nJykgcmV0dXJuIGNvbG9yO1xuICB2YXIgbm9ybWFsaXplZENvbG9yTmFtZSA9IGNvbG9yLnRvTG93ZXJDYXNlKCk7XG4gIHJldHVybiBuYW1lZENvbG9yTWFwW25vcm1hbGl6ZWRDb2xvck5hbWVdID8gXCIjXCIgKyBuYW1lZENvbG9yTWFwW25vcm1hbGl6ZWRDb2xvck5hbWVdIDogY29sb3I7XG59XG5cbnZhciBfZGVmYXVsdCA9IG5hbWVUb0hleDtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHNMb29zZShzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MucHJvdG90eXBlKTsgc3ViQ2xhc3MucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gc3ViQ2xhc3M7IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxuZnVuY3Rpb24gX3dyYXBOYXRpdmVTdXBlcihDbGFzcykgeyB2YXIgX2NhY2hlID0gdHlwZW9mIE1hcCA9PT0gXCJmdW5jdGlvblwiID8gbmV3IE1hcCgpIDogdW5kZWZpbmVkOyBfd3JhcE5hdGl2ZVN1cGVyID0gZnVuY3Rpb24gX3dyYXBOYXRpdmVTdXBlcihDbGFzcykgeyBpZiAoQ2xhc3MgPT09IG51bGwgfHwgIV9pc05hdGl2ZUZ1bmN0aW9uKENsYXNzKSkgcmV0dXJuIENsYXNzOyBpZiAodHlwZW9mIENsYXNzICE9PSBcImZ1bmN0aW9uXCIpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpOyB9IGlmICh0eXBlb2YgX2NhY2hlICE9PSBcInVuZGVmaW5lZFwiKSB7IGlmIChfY2FjaGUuaGFzKENsYXNzKSkgcmV0dXJuIF9jYWNoZS5nZXQoQ2xhc3MpOyBfY2FjaGUuc2V0KENsYXNzLCBXcmFwcGVyKTsgfSBmdW5jdGlvbiBXcmFwcGVyKCkgeyByZXR1cm4gX2NvbnN0cnVjdChDbGFzcywgYXJndW1lbnRzLCBfZ2V0UHJvdG90eXBlT2YodGhpcykuY29uc3RydWN0b3IpOyB9IFdyYXBwZXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IFdyYXBwZXIsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IHJldHVybiBfc2V0UHJvdG90eXBlT2YoV3JhcHBlciwgQ2xhc3MpOyB9OyByZXR1cm4gX3dyYXBOYXRpdmVTdXBlcihDbGFzcyk7IH1cblxuZnVuY3Rpb24gaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkgeyBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwidW5kZWZpbmVkXCIgfHwgIVJlZmxlY3QuY29uc3RydWN0KSByZXR1cm4gZmFsc2U7IGlmIChSZWZsZWN0LmNvbnN0cnVjdC5zaGFtKSByZXR1cm4gZmFsc2U7IGlmICh0eXBlb2YgUHJveHkgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHRydWU7IHRyeSB7IERhdGUucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoRGF0ZSwgW10sIGZ1bmN0aW9uICgpIHt9KSk7IHJldHVybiB0cnVlOyB9IGNhdGNoIChlKSB7IHJldHVybiBmYWxzZTsgfSB9XG5cbmZ1bmN0aW9uIF9jb25zdHJ1Y3QoUGFyZW50LCBhcmdzLCBDbGFzcykgeyBpZiAoaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkpIHsgX2NvbnN0cnVjdCA9IFJlZmxlY3QuY29uc3RydWN0OyB9IGVsc2UgeyBfY29uc3RydWN0ID0gZnVuY3Rpb24gX2NvbnN0cnVjdChQYXJlbnQsIGFyZ3MsIENsYXNzKSB7IHZhciBhID0gW251bGxdOyBhLnB1c2guYXBwbHkoYSwgYXJncyk7IHZhciBDb25zdHJ1Y3RvciA9IEZ1bmN0aW9uLmJpbmQuYXBwbHkoUGFyZW50LCBhKTsgdmFyIGluc3RhbmNlID0gbmV3IENvbnN0cnVjdG9yKCk7IGlmIChDbGFzcykgX3NldFByb3RvdHlwZU9mKGluc3RhbmNlLCBDbGFzcy5wcm90b3R5cGUpOyByZXR1cm4gaW5zdGFuY2U7IH07IH0gcmV0dXJuIF9jb25zdHJ1Y3QuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsgfVxuXG5mdW5jdGlvbiBfaXNOYXRpdmVGdW5jdGlvbihmbikgeyByZXR1cm4gRnVuY3Rpb24udG9TdHJpbmcuY2FsbChmbikuaW5kZXhPZihcIltuYXRpdmUgY29kZV1cIikgIT09IC0xOyB9XG5cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBvLl9fcHJvdG9fXyA9IHA7IHJldHVybiBvOyB9OyByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApOyB9XG5cbmZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7IH07IHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7IH1cblxuLy8gYmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL3N0eWxlZC1jb21wb25lbnRzL3N0eWxlZC1jb21wb25lbnRzL2Jsb2IvZmNmNmYzODA0YzU3YTE0ZGQ3OTg0ZGZhYjdiYzA2ZWUyZWRjYTA0NC9zcmMvdXRpbHMvZXJyb3IuanNcblxuLyoqXG4gKiBQYXJzZSBlcnJvcnMubWQgYW5kIHR1cm4gaXQgaW50byBhIHNpbXBsZSBoYXNoIG9mIGNvZGU6IG1lc3NhZ2VcbiAqIEBwcml2YXRlXG4gKi9cbnZhciBFUlJPUlMgPSB7XG4gIFwiMVwiOiBcIlBhc3NlZCBpbnZhbGlkIGFyZ3VtZW50cyB0byBoc2wsIHBsZWFzZSBwYXNzIG11bHRpcGxlIG51bWJlcnMgZS5nLiBoc2woMzYwLCAwLjc1LCAwLjQpIG9yIGFuIG9iamVjdCBlLmcuIHJnYih7IGh1ZTogMjU1LCBzYXR1cmF0aW9uOiAwLjQsIGxpZ2h0bmVzczogMC43NSB9KS5cXG5cXG5cIixcbiAgXCIyXCI6IFwiUGFzc2VkIGludmFsaWQgYXJndW1lbnRzIHRvIGhzbGEsIHBsZWFzZSBwYXNzIG11bHRpcGxlIG51bWJlcnMgZS5nLiBoc2xhKDM2MCwgMC43NSwgMC40LCAwLjcpIG9yIGFuIG9iamVjdCBlLmcuIHJnYih7IGh1ZTogMjU1LCBzYXR1cmF0aW9uOiAwLjQsIGxpZ2h0bmVzczogMC43NSwgYWxwaGE6IDAuNyB9KS5cXG5cXG5cIixcbiAgXCIzXCI6IFwiUGFzc2VkIGFuIGluY29ycmVjdCBhcmd1bWVudCB0byBhIGNvbG9yIGZ1bmN0aW9uLCBwbGVhc2UgcGFzcyBhIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiBhIGNvbG9yLlxcblxcblwiLFxuICBcIjRcIjogXCJDb3VsZG4ndCBnZW5lcmF0ZSB2YWxpZCByZ2Igc3RyaW5nIGZyb20gJXMsIGl0IHJldHVybmVkICVzLlxcblxcblwiLFxuICBcIjVcIjogXCJDb3VsZG4ndCBwYXJzZSB0aGUgY29sb3Igc3RyaW5nLiBQbGVhc2UgcHJvdmlkZSB0aGUgY29sb3IgYXMgYSBzdHJpbmcgaW4gaGV4LCByZ2IsIHJnYmEsIGhzbCBvciBoc2xhIG5vdGF0aW9uLlxcblxcblwiLFxuICBcIjZcIjogXCJQYXNzZWQgaW52YWxpZCBhcmd1bWVudHMgdG8gcmdiLCBwbGVhc2UgcGFzcyBtdWx0aXBsZSBudW1iZXJzIGUuZy4gcmdiKDI1NSwgMjA1LCAxMDApIG9yIGFuIG9iamVjdCBlLmcuIHJnYih7IHJlZDogMjU1LCBncmVlbjogMjA1LCBibHVlOiAxMDAgfSkuXFxuXFxuXCIsXG4gIFwiN1wiOiBcIlBhc3NlZCBpbnZhbGlkIGFyZ3VtZW50cyB0byByZ2JhLCBwbGVhc2UgcGFzcyBtdWx0aXBsZSBudW1iZXJzIGUuZy4gcmdiKDI1NSwgMjA1LCAxMDAsIDAuNzUpIG9yIGFuIG9iamVjdCBlLmcuIHJnYih7IHJlZDogMjU1LCBncmVlbjogMjA1LCBibHVlOiAxMDAsIGFscGhhOiAwLjc1IH0pLlxcblxcblwiLFxuICBcIjhcIjogXCJQYXNzZWQgaW52YWxpZCBhcmd1bWVudCB0byB0b0NvbG9yU3RyaW5nLCBwbGVhc2UgcGFzcyBhIFJnYkNvbG9yLCBSZ2JhQ29sb3IsIEhzbENvbG9yIG9yIEhzbGFDb2xvciBvYmplY3QuXFxuXFxuXCIsXG4gIFwiOVwiOiBcIlBsZWFzZSBwcm92aWRlIGEgbnVtYmVyIG9mIHN0ZXBzIHRvIHRoZSBtb2R1bGFyU2NhbGUgaGVscGVyLlxcblxcblwiLFxuICBcIjEwXCI6IFwiUGxlYXNlIHBhc3MgYSBudW1iZXIgb3Igb25lIG9mIHRoZSBwcmVkZWZpbmVkIHNjYWxlcyB0byB0aGUgbW9kdWxhclNjYWxlIGhlbHBlciBhcyB0aGUgcmF0aW8uXFxuXFxuXCIsXG4gIFwiMTFcIjogXCJJbnZhbGlkIHZhbHVlIHBhc3NlZCBhcyBiYXNlIHRvIG1vZHVsYXJTY2FsZSwgZXhwZWN0ZWQgbnVtYmVyIG9yIGVtIHN0cmluZyBidXQgZ290IFxcXCIlc1xcXCJcXG5cXG5cIixcbiAgXCIxMlwiOiBcIkV4cGVjdGVkIGEgc3RyaW5nIGVuZGluZyBpbiBcXFwicHhcXFwiIG9yIGEgbnVtYmVyIHBhc3NlZCBhcyB0aGUgZmlyc3QgYXJndW1lbnQgdG8gJXMoKSwgZ290IFxcXCIlc1xcXCIgaW5zdGVhZC5cXG5cXG5cIixcbiAgXCIxM1wiOiBcIkV4cGVjdGVkIGEgc3RyaW5nIGVuZGluZyBpbiBcXFwicHhcXFwiIG9yIGEgbnVtYmVyIHBhc3NlZCBhcyB0aGUgc2Vjb25kIGFyZ3VtZW50IHRvICVzKCksIGdvdCBcXFwiJXNcXFwiIGluc3RlYWQuXFxuXFxuXCIsXG4gIFwiMTRcIjogXCJQYXNzZWQgaW52YWxpZCBwaXhlbCB2YWx1ZSAoXFxcIiVzXFxcIikgdG8gJXMoKSwgcGxlYXNlIHBhc3MgYSB2YWx1ZSBsaWtlIFxcXCIxMnB4XFxcIiBvciAxMi5cXG5cXG5cIixcbiAgXCIxNVwiOiBcIlBhc3NlZCBpbnZhbGlkIGJhc2UgdmFsdWUgKFxcXCIlc1xcXCIpIHRvICVzKCksIHBsZWFzZSBwYXNzIGEgdmFsdWUgbGlrZSBcXFwiMTJweFxcXCIgb3IgMTIuXFxuXFxuXCIsXG4gIFwiMTZcIjogXCJZb3UgbXVzdCBwcm92aWRlIGEgdGVtcGxhdGUgdG8gdGhpcyBtZXRob2QuXFxuXFxuXCIsXG4gIFwiMTdcIjogXCJZb3UgcGFzc2VkIGFuIHVuc3VwcG9ydGVkIHNlbGVjdG9yIHN0YXRlIHRvIHRoaXMgbWV0aG9kLlxcblxcblwiLFxuICBcIjE4XCI6IFwibWluU2NyZWVuIGFuZCBtYXhTY3JlZW4gbXVzdCBiZSBwcm92aWRlZCBhcyBzdHJpbmdpZmllZCBudW1iZXJzIHdpdGggdGhlIHNhbWUgdW5pdHMuXFxuXFxuXCIsXG4gIFwiMTlcIjogXCJmcm9tU2l6ZSBhbmQgdG9TaXplIG11c3QgYmUgcHJvdmlkZWQgYXMgc3RyaW5naWZpZWQgbnVtYmVycyB3aXRoIHRoZSBzYW1lIHVuaXRzLlxcblxcblwiLFxuICBcIjIwXCI6IFwiZXhwZWN0cyBlaXRoZXIgYW4gYXJyYXkgb2Ygb2JqZWN0cyBvciBhIHNpbmdsZSBvYmplY3Qgd2l0aCB0aGUgcHJvcGVydGllcyBwcm9wLCBmcm9tU2l6ZSwgYW5kIHRvU2l6ZS5cXG5cXG5cIixcbiAgXCIyMVwiOiBcImV4cGVjdHMgdGhlIG9iamVjdHMgaW4gdGhlIGZpcnN0IGFyZ3VtZW50IGFycmF5IHRvIGhhdmUgdGhlIHByb3BlcnRpZXMgYHByb3BgLCBgZnJvbVNpemVgLCBhbmQgYHRvU2l6ZWAuXFxuXFxuXCIsXG4gIFwiMjJcIjogXCJleHBlY3RzIHRoZSBmaXJzdCBhcmd1bWVudCBvYmplY3QgdG8gaGF2ZSB0aGUgcHJvcGVydGllcyBgcHJvcGAsIGBmcm9tU2l6ZWAsIGFuZCBgdG9TaXplYC5cXG5cXG5cIixcbiAgXCIyM1wiOiBcImZvbnRGYWNlIGV4cGVjdHMgYSBuYW1lIG9mIGEgZm9udC1mYW1pbHkuXFxuXFxuXCIsXG4gIFwiMjRcIjogXCJmb250RmFjZSBleHBlY3RzIGVpdGhlciB0aGUgcGF0aCB0byB0aGUgZm9udCBmaWxlKHMpIG9yIGEgbmFtZSBvZiBhIGxvY2FsIGNvcHkuXFxuXFxuXCIsXG4gIFwiMjVcIjogXCJmb250RmFjZSBleHBlY3RzIGxvY2FsRm9udHMgdG8gYmUgYW4gYXJyYXkuXFxuXFxuXCIsXG4gIFwiMjZcIjogXCJmb250RmFjZSBleHBlY3RzIGZpbGVGb3JtYXRzIHRvIGJlIGFuIGFycmF5LlxcblxcblwiLFxuICBcIjI3XCI6IFwicmFkaWFsR3JhZGllbnQgcmVxdXJpZXMgYXQgbGVhc3QgMiBjb2xvci1zdG9wcyB0byBwcm9wZXJseSByZW5kZXIuXFxuXFxuXCIsXG4gIFwiMjhcIjogXCJQbGVhc2Ugc3VwcGx5IGEgZmlsZW5hbWUgdG8gcmV0aW5hSW1hZ2UoKSBhcyB0aGUgZmlyc3QgYXJndW1lbnQuXFxuXFxuXCIsXG4gIFwiMjlcIjogXCJQYXNzZWQgaW52YWxpZCBhcmd1bWVudCB0byB0cmlhbmdsZSwgcGxlYXNlIHBhc3MgY29ycmVjdCBwb2ludGluZ0RpcmVjdGlvbiBlLmcuICdyaWdodCcuXFxuXFxuXCIsXG4gIFwiMzBcIjogXCJQYXNzZWQgYW4gaW52YWxpZCB2YWx1ZSB0byBgaGVpZ2h0YCBvciBgd2lkdGhgLiBQbGVhc2UgcHJvdmlkZSBhIHBpeGVsIGJhc2VkIHVuaXQuXFxuXFxuXCIsXG4gIFwiMzFcIjogXCJUaGUgYW5pbWF0aW9uIHNob3J0aGFuZCBvbmx5IHRha2VzIDggYXJndW1lbnRzLiBTZWUgdGhlIHNwZWNpZmljYXRpb24gZm9yIG1vcmUgaW5mb3JtYXRpb246IGh0dHA6Ly9tZG4uaW8vYW5pbWF0aW9uXFxuXFxuXCIsXG4gIFwiMzJcIjogXCJUbyBwYXNzIG11bHRpcGxlIGFuaW1hdGlvbnMgcGxlYXNlIHN1cHBseSB0aGVtIGluIGFycmF5cywgZS5nLiBhbmltYXRpb24oWydyb3RhdGUnLCAnMnMnXSwgWydtb3ZlJywgJzFzJ10pXFxuVG8gcGFzcyBhIHNpbmdsZSBhbmltYXRpb24gcGxlYXNlIHN1cHBseSB0aGVtIGluIHNpbXBsZSB2YWx1ZXMsIGUuZy4gYW5pbWF0aW9uKCdyb3RhdGUnLCAnMnMnKVxcblxcblwiLFxuICBcIjMzXCI6IFwiVGhlIGFuaW1hdGlvbiBzaG9ydGhhbmQgYXJyYXlzIGNhbiBvbmx5IGhhdmUgOCBlbGVtZW50cy4gU2VlIHRoZSBzcGVjaWZpY2F0aW9uIGZvciBtb3JlIGluZm9ybWF0aW9uOiBodHRwOi8vbWRuLmlvL2FuaW1hdGlvblxcblxcblwiLFxuICBcIjM0XCI6IFwiYm9yZGVyUmFkaXVzIGV4cGVjdHMgYSByYWRpdXMgdmFsdWUgYXMgYSBzdHJpbmcgb3IgbnVtYmVyIGFzIHRoZSBzZWNvbmQgYXJndW1lbnQuXFxuXFxuXCIsXG4gIFwiMzVcIjogXCJib3JkZXJSYWRpdXMgZXhwZWN0cyBvbmUgb2YgXFxcInRvcFxcXCIsIFxcXCJib3R0b21cXFwiLCBcXFwibGVmdFxcXCIgb3IgXFxcInJpZ2h0XFxcIiBhcyB0aGUgZmlyc3QgYXJndW1lbnQuXFxuXFxuXCIsXG4gIFwiMzZcIjogXCJQcm9wZXJ0eSBtdXN0IGJlIGEgc3RyaW5nIHZhbHVlLlxcblxcblwiLFxuICBcIjM3XCI6IFwiU3ludGF4IEVycm9yIGF0ICVzLlxcblxcblwiLFxuICBcIjM4XCI6IFwiRm9ybXVsYSBjb250YWlucyBhIGZ1bmN0aW9uIHRoYXQgbmVlZHMgcGFyZW50aGVzZXMgYXQgJXMuXFxuXFxuXCIsXG4gIFwiMzlcIjogXCJGb3JtdWxhIGlzIG1pc3NpbmcgY2xvc2luZyBwYXJlbnRoZXNpcyBhdCAlcy5cXG5cXG5cIixcbiAgXCI0MFwiOiBcIkZvcm11bGEgaGFzIHRvbyBtYW55IGNsb3NpbmcgcGFyZW50aGVzZXMgYXQgJXMuXFxuXFxuXCIsXG4gIFwiNDFcIjogXCJBbGwgdmFsdWVzIGluIGEgZm9ybXVsYSBtdXN0IGhhdmUgdGhlIHNhbWUgdW5pdCBvciBiZSB1bml0bGVzcy5cXG5cXG5cIixcbiAgXCI0MlwiOiBcIlBsZWFzZSBwcm92aWRlIGEgbnVtYmVyIG9mIHN0ZXBzIHRvIHRoZSBtb2R1bGFyU2NhbGUgaGVscGVyLlxcblxcblwiLFxuICBcIjQzXCI6IFwiUGxlYXNlIHBhc3MgYSBudW1iZXIgb3Igb25lIG9mIHRoZSBwcmVkZWZpbmVkIHNjYWxlcyB0byB0aGUgbW9kdWxhclNjYWxlIGhlbHBlciBhcyB0aGUgcmF0aW8uXFxuXFxuXCIsXG4gIFwiNDRcIjogXCJJbnZhbGlkIHZhbHVlIHBhc3NlZCBhcyBiYXNlIHRvIG1vZHVsYXJTY2FsZSwgZXhwZWN0ZWQgbnVtYmVyIG9yIGVtL3JlbSBzdHJpbmcgYnV0IGdvdCAlcy5cXG5cXG5cIixcbiAgXCI0NVwiOiBcIlBhc3NlZCBpbnZhbGlkIGFyZ3VtZW50IHRvIGhzbFRvQ29sb3JTdHJpbmcsIHBsZWFzZSBwYXNzIGEgSHNsQ29sb3Igb3IgSHNsYUNvbG9yIG9iamVjdC5cXG5cXG5cIixcbiAgXCI0NlwiOiBcIlBhc3NlZCBpbnZhbGlkIGFyZ3VtZW50IHRvIHJnYlRvQ29sb3JTdHJpbmcsIHBsZWFzZSBwYXNzIGEgUmdiQ29sb3Igb3IgUmdiYUNvbG9yIG9iamVjdC5cXG5cXG5cIixcbiAgXCI0N1wiOiBcIm1pblNjcmVlbiBhbmQgbWF4U2NyZWVuIG11c3QgYmUgcHJvdmlkZWQgYXMgc3RyaW5naWZpZWQgbnVtYmVycyB3aXRoIHRoZSBzYW1lIHVuaXRzLlxcblxcblwiLFxuICBcIjQ4XCI6IFwiZnJvbVNpemUgYW5kIHRvU2l6ZSBtdXN0IGJlIHByb3ZpZGVkIGFzIHN0cmluZ2lmaWVkIG51bWJlcnMgd2l0aCB0aGUgc2FtZSB1bml0cy5cXG5cXG5cIixcbiAgXCI0OVwiOiBcIkV4cGVjdHMgZWl0aGVyIGFuIGFycmF5IG9mIG9iamVjdHMgb3IgYSBzaW5nbGUgb2JqZWN0IHdpdGggdGhlIHByb3BlcnRpZXMgcHJvcCwgZnJvbVNpemUsIGFuZCB0b1NpemUuXFxuXFxuXCIsXG4gIFwiNTBcIjogXCJFeHBlY3RzIHRoZSBvYmplY3RzIGluIHRoZSBmaXJzdCBhcmd1bWVudCBhcnJheSB0byBoYXZlIHRoZSBwcm9wZXJ0aWVzIHByb3AsIGZyb21TaXplLCBhbmQgdG9TaXplLlxcblxcblwiLFxuICBcIjUxXCI6IFwiRXhwZWN0cyB0aGUgZmlyc3QgYXJndW1lbnQgb2JqZWN0IHRvIGhhdmUgdGhlIHByb3BlcnRpZXMgcHJvcCwgZnJvbVNpemUsIGFuZCB0b1NpemUuXFxuXFxuXCIsXG4gIFwiNTJcIjogXCJmb250RmFjZSBleHBlY3RzIGVpdGhlciB0aGUgcGF0aCB0byB0aGUgZm9udCBmaWxlKHMpIG9yIGEgbmFtZSBvZiBhIGxvY2FsIGNvcHkuXFxuXFxuXCIsXG4gIFwiNTNcIjogXCJmb250RmFjZSBleHBlY3RzIGxvY2FsRm9udHMgdG8gYmUgYW4gYXJyYXkuXFxuXFxuXCIsXG4gIFwiNTRcIjogXCJmb250RmFjZSBleHBlY3RzIGZpbGVGb3JtYXRzIHRvIGJlIGFuIGFycmF5LlxcblxcblwiLFxuICBcIjU1XCI6IFwiZm9udEZhY2UgZXhwZWN0cyBhIG5hbWUgb2YgYSBmb250LWZhbWlseS5cXG5cXG5cIixcbiAgXCI1NlwiOiBcImxpbmVhckdyYWRpZW50IHJlcXVyaWVzIGF0IGxlYXN0IDIgY29sb3Itc3RvcHMgdG8gcHJvcGVybHkgcmVuZGVyLlxcblxcblwiLFxuICBcIjU3XCI6IFwicmFkaWFsR3JhZGllbnQgcmVxdXJpZXMgYXQgbGVhc3QgMiBjb2xvci1zdG9wcyB0byBwcm9wZXJseSByZW5kZXIuXFxuXFxuXCIsXG4gIFwiNThcIjogXCJQbGVhc2Ugc3VwcGx5IGEgZmlsZW5hbWUgdG8gcmV0aW5hSW1hZ2UoKSBhcyB0aGUgZmlyc3QgYXJndW1lbnQuXFxuXFxuXCIsXG4gIFwiNTlcIjogXCJQYXNzZWQgaW52YWxpZCBhcmd1bWVudCB0byB0cmlhbmdsZSwgcGxlYXNlIHBhc3MgY29ycmVjdCBwb2ludGluZ0RpcmVjdGlvbiBlLmcuICdyaWdodCcuXFxuXFxuXCIsXG4gIFwiNjBcIjogXCJQYXNzZWQgYW4gaW52YWxpZCB2YWx1ZSB0byBgaGVpZ2h0YCBvciBgd2lkdGhgLiBQbGVhc2UgcHJvdmlkZSBhIHBpeGVsIGJhc2VkIHVuaXQuXFxuXFxuXCIsXG4gIFwiNjFcIjogXCJQcm9wZXJ0eSBtdXN0IGJlIGEgc3RyaW5nIHZhbHVlLlxcblxcblwiLFxuICBcIjYyXCI6IFwiYm9yZGVyUmFkaXVzIGV4cGVjdHMgYSByYWRpdXMgdmFsdWUgYXMgYSBzdHJpbmcgb3IgbnVtYmVyIGFzIHRoZSBzZWNvbmQgYXJndW1lbnQuXFxuXFxuXCIsXG4gIFwiNjNcIjogXCJib3JkZXJSYWRpdXMgZXhwZWN0cyBvbmUgb2YgXFxcInRvcFxcXCIsIFxcXCJib3R0b21cXFwiLCBcXFwibGVmdFxcXCIgb3IgXFxcInJpZ2h0XFxcIiBhcyB0aGUgZmlyc3QgYXJndW1lbnQuXFxuXFxuXCIsXG4gIFwiNjRcIjogXCJUaGUgYW5pbWF0aW9uIHNob3J0aGFuZCBvbmx5IHRha2VzIDggYXJndW1lbnRzLiBTZWUgdGhlIHNwZWNpZmljYXRpb24gZm9yIG1vcmUgaW5mb3JtYXRpb246IGh0dHA6Ly9tZG4uaW8vYW5pbWF0aW9uLlxcblxcblwiLFxuICBcIjY1XCI6IFwiVG8gcGFzcyBtdWx0aXBsZSBhbmltYXRpb25zIHBsZWFzZSBzdXBwbHkgdGhlbSBpbiBhcnJheXMsIGUuZy4gYW5pbWF0aW9uKFsncm90YXRlJywgJzJzJ10sIFsnbW92ZScsICcxcyddKVxcXFxuVG8gcGFzcyBhIHNpbmdsZSBhbmltYXRpb24gcGxlYXNlIHN1cHBseSB0aGVtIGluIHNpbXBsZSB2YWx1ZXMsIGUuZy4gYW5pbWF0aW9uKCdyb3RhdGUnLCAnMnMnKS5cXG5cXG5cIixcbiAgXCI2NlwiOiBcIlRoZSBhbmltYXRpb24gc2hvcnRoYW5kIGFycmF5cyBjYW4gb25seSBoYXZlIDggZWxlbWVudHMuIFNlZSB0aGUgc3BlY2lmaWNhdGlvbiBmb3IgbW9yZSBpbmZvcm1hdGlvbjogaHR0cDovL21kbi5pby9hbmltYXRpb24uXFxuXFxuXCIsXG4gIFwiNjdcIjogXCJZb3UgbXVzdCBwcm92aWRlIGEgdGVtcGxhdGUgdG8gdGhpcyBtZXRob2QuXFxuXFxuXCIsXG4gIFwiNjhcIjogXCJZb3UgcGFzc2VkIGFuIHVuc3VwcG9ydGVkIHNlbGVjdG9yIHN0YXRlIHRvIHRoaXMgbWV0aG9kLlxcblxcblwiLFxuICBcIjY5XCI6IFwiRXhwZWN0ZWQgYSBzdHJpbmcgZW5kaW5nIGluIFxcXCJweFxcXCIgb3IgYSBudW1iZXIgcGFzc2VkIGFzIHRoZSBmaXJzdCBhcmd1bWVudCB0byAlcygpLCBnb3QgJXMgaW5zdGVhZC5cXG5cXG5cIixcbiAgXCI3MFwiOiBcIkV4cGVjdGVkIGEgc3RyaW5nIGVuZGluZyBpbiBcXFwicHhcXFwiIG9yIGEgbnVtYmVyIHBhc3NlZCBhcyB0aGUgc2Vjb25kIGFyZ3VtZW50IHRvICVzKCksIGdvdCAlcyBpbnN0ZWFkLlxcblxcblwiLFxuICBcIjcxXCI6IFwiUGFzc2VkIGludmFsaWQgcGl4ZWwgdmFsdWUgJXMgdG8gJXMoKSwgcGxlYXNlIHBhc3MgYSB2YWx1ZSBsaWtlIFxcXCIxMnB4XFxcIiBvciAxMi5cXG5cXG5cIixcbiAgXCI3MlwiOiBcIlBhc3NlZCBpbnZhbGlkIGJhc2UgdmFsdWUgJXMgdG8gJXMoKSwgcGxlYXNlIHBhc3MgYSB2YWx1ZSBsaWtlIFxcXCIxMnB4XFxcIiBvciAxMi5cXG5cIlxufTtcbi8qKlxuICogc3VwZXIgYmFzaWMgdmVyc2lvbiBvZiBzcHJpbnRmXG4gKiBAcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIGZvcm1hdCgpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIHZhciBhID0gYXJnc1swXTtcbiAgdmFyIGIgPSBbXTtcbiAgdmFyIGM7XG5cbiAgZm9yIChjID0gMTsgYyA8IGFyZ3MubGVuZ3RoOyBjICs9IDEpIHtcbiAgICBiLnB1c2goYXJnc1tjXSk7XG4gIH1cblxuICBiLmZvckVhY2goZnVuY3Rpb24gKGQpIHtcbiAgICBhID0gYS5yZXBsYWNlKC8lW2Etel0vLCBkKTtcbiAgfSk7XG4gIHJldHVybiBhO1xufVxuLyoqXG4gKiBDcmVhdGUgYW4gZXJyb3IgZmlsZSBvdXQgb2YgZXJyb3JzLm1kIGZvciBkZXZlbG9wbWVudCBhbmQgYSBzaW1wbGUgd2ViIGxpbmsgdG8gdGhlIGZ1bGwgZXJyb3JzXG4gKiBpbiBwcm9kdWN0aW9uIG1vZGUuXG4gKiBAcHJpdmF0ZVxuICovXG5cblxudmFyIFBvbGlzaGVkRXJyb3IgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKF9FcnJvcikge1xuICBfaW5oZXJpdHNMb29zZShQb2xpc2hlZEVycm9yLCBfRXJyb3IpO1xuXG4gIGZ1bmN0aW9uIFBvbGlzaGVkRXJyb3IoY29kZSkge1xuICAgIHZhciBfdGhpcztcblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBfdGhpcyA9IF9FcnJvci5jYWxsKHRoaXMsIFwiQW4gZXJyb3Igb2NjdXJyZWQuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vc3R5bGVkLWNvbXBvbmVudHMvcG9saXNoZWQvYmxvYi9tYXN0ZXIvc3JjL2ludGVybmFsSGVscGVycy9lcnJvcnMubWQjXCIgKyBjb2RlICsgXCIgZm9yIG1vcmUgaW5mb3JtYXRpb24uXCIpIHx8IHRoaXM7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuMiA+IDEgPyBfbGVuMiAtIDEgOiAwKSwgX2tleTIgPSAxOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICAgIGFyZ3NbX2tleTIgLSAxXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgICB9XG5cbiAgICAgIF90aGlzID0gX0Vycm9yLmNhbGwodGhpcywgZm9ybWF0LmFwcGx5KHZvaWQgMCwgW0VSUk9SU1tjb2RlXV0uY29uY2F0KGFyZ3MpKSkgfHwgdGhpcztcbiAgICB9XG5cbiAgICByZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyk7XG4gIH1cblxuICByZXR1cm4gUG9saXNoZWRFcnJvcjtcbn0oXG4vKiNfX1BVUkVfXyovXG5fd3JhcE5hdGl2ZVN1cGVyKEVycm9yKSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IFBvbGlzaGVkRXJyb3I7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIF9oc2xUb1JnYiA9XG4vKiNfX1BVUkVfXyovXG5faW50ZXJvcFJlcXVpcmVEZWZhdWx0KFxuLyojX19QVVJFX18qL1xucmVxdWlyZShcIi4uL2ludGVybmFsSGVscGVycy9faHNsVG9SZ2JcIikpO1xuXG52YXIgX25hbWVUb0hleCA9XG4vKiNfX1BVUkVfXyovXG5faW50ZXJvcFJlcXVpcmVEZWZhdWx0KFxuLyojX19QVVJFX18qL1xucmVxdWlyZShcIi4uL2ludGVybmFsSGVscGVycy9fbmFtZVRvSGV4XCIpKTtcblxudmFyIF9lcnJvcnMgPVxuLyojX19QVVJFX18qL1xuX2ludGVyb3BSZXF1aXJlRGVmYXVsdChcbi8qI19fUFVSRV9fKi9cbnJlcXVpcmUoXCIuLi9pbnRlcm5hbEhlbHBlcnMvX2Vycm9yc1wiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBoZXhSZWdleCA9IC9eI1thLWZBLUYwLTldezZ9JC87XG52YXIgaGV4UmdiYVJlZ2V4ID0gL14jW2EtZkEtRjAtOV17OH0kLztcbnZhciByZWR1Y2VkSGV4UmVnZXggPSAvXiNbYS1mQS1GMC05XXszfSQvO1xudmFyIHJlZHVjZWRSZ2JhSGV4UmVnZXggPSAvXiNbYS1mQS1GMC05XXs0fSQvO1xudmFyIHJnYlJlZ2V4ID0gL15yZ2JcXChcXHMqKFxcZHsxLDN9KVxccyosXFxzKihcXGR7MSwzfSlcXHMqLFxccyooXFxkezEsM30pXFxzKlxcKSQvO1xudmFyIHJnYmFSZWdleCA9IC9ecmdiYVxcKFxccyooXFxkezEsM30pXFxzKixcXHMqKFxcZHsxLDN9KVxccyosXFxzKihcXGR7MSwzfSlcXHMqLFxccyooWy0rXT9bMC05XSpbLl0/WzAtOV0rKVxccypcXCkkLztcbnZhciBoc2xSZWdleCA9IC9eaHNsXFwoXFxzKihcXGR7MCwzfVsuXT9bMC05XSspXFxzKixcXHMqKFxcZHsxLDN9KSVcXHMqLFxccyooXFxkezEsM30pJVxccypcXCkkLztcbnZhciBoc2xhUmVnZXggPSAvXmhzbGFcXChcXHMqKFxcZHswLDN9Wy5dP1swLTldKylcXHMqLFxccyooXFxkezEsM30pJVxccyosXFxzKihcXGR7MSwzfSklXFxzKixcXHMqKFstK10/WzAtOV0qWy5dP1swLTldKylcXHMqXFwpJC87XG4vKipcbiAqIFJldHVybnMgYW4gUmdiQ29sb3Igb3IgUmdiYUNvbG9yIG9iamVjdC4gVGhpcyB1dGlsaXR5IGZ1bmN0aW9uIGlzIG9ubHkgdXNlZnVsXG4gKiBpZiB3YW50IHRvIGV4dHJhY3QgYSBjb2xvciBjb21wb25lbnQuIFdpdGggdGhlIGNvbG9yIHV0aWwgYHRvQ29sb3JTdHJpbmdgIHlvdVxuICogY2FuIGNvbnZlcnQgYSBSZ2JDb2xvciBvciBSZ2JhQ29sb3Igb2JqZWN0IGJhY2sgdG8gYSBzdHJpbmcuXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFzc2lnbnMgYHsgcmVkOiAyNTUsIGdyZWVuOiAwLCBibHVlOiAwIH1gIHRvIGNvbG9yMVxuICogY29uc3QgY29sb3IxID0gcGFyc2VUb1JnYigncmdiKDI1NSwgMCwgMCknKTtcbiAqIC8vIEFzc2lnbnMgYHsgcmVkOiA5MiwgZ3JlZW46IDEwMiwgYmx1ZTogMTEyLCBhbHBoYTogMC43NSB9YCB0byBjb2xvcjJcbiAqIGNvbnN0IGNvbG9yMiA9IHBhcnNlVG9SZ2IoJ2hzbGEoMjEwLCAxMCUsIDQwJSwgMC43NSknKTtcbiAqL1xuXG5mdW5jdGlvbiBwYXJzZVRvUmdiKGNvbG9yKSB7XG4gIGlmICh0eXBlb2YgY29sb3IgIT09ICdzdHJpbmcnKSB7XG4gICAgdGhyb3cgbmV3IF9lcnJvcnMuZGVmYXVsdCgzKTtcbiAgfVxuXG4gIHZhciBub3JtYWxpemVkQ29sb3IgPSAoMCwgX25hbWVUb0hleC5kZWZhdWx0KShjb2xvcik7XG5cbiAgaWYgKG5vcm1hbGl6ZWRDb2xvci5tYXRjaChoZXhSZWdleCkpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcmVkOiBwYXJzZUludChcIlwiICsgbm9ybWFsaXplZENvbG9yWzFdICsgbm9ybWFsaXplZENvbG9yWzJdLCAxNiksXG4gICAgICBncmVlbjogcGFyc2VJbnQoXCJcIiArIG5vcm1hbGl6ZWRDb2xvclszXSArIG5vcm1hbGl6ZWRDb2xvcls0XSwgMTYpLFxuICAgICAgYmx1ZTogcGFyc2VJbnQoXCJcIiArIG5vcm1hbGl6ZWRDb2xvcls1XSArIG5vcm1hbGl6ZWRDb2xvcls2XSwgMTYpXG4gICAgfTtcbiAgfVxuXG4gIGlmIChub3JtYWxpemVkQ29sb3IubWF0Y2goaGV4UmdiYVJlZ2V4KSkge1xuICAgIHZhciBhbHBoYSA9IHBhcnNlRmxvYXQoKHBhcnNlSW50KFwiXCIgKyBub3JtYWxpemVkQ29sb3JbN10gKyBub3JtYWxpemVkQ29sb3JbOF0sIDE2KSAvIDI1NSkudG9GaXhlZCgyKSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJlZDogcGFyc2VJbnQoXCJcIiArIG5vcm1hbGl6ZWRDb2xvclsxXSArIG5vcm1hbGl6ZWRDb2xvclsyXSwgMTYpLFxuICAgICAgZ3JlZW46IHBhcnNlSW50KFwiXCIgKyBub3JtYWxpemVkQ29sb3JbM10gKyBub3JtYWxpemVkQ29sb3JbNF0sIDE2KSxcbiAgICAgIGJsdWU6IHBhcnNlSW50KFwiXCIgKyBub3JtYWxpemVkQ29sb3JbNV0gKyBub3JtYWxpemVkQ29sb3JbNl0sIDE2KSxcbiAgICAgIGFscGhhOiBhbHBoYVxuICAgIH07XG4gIH1cblxuICBpZiAobm9ybWFsaXplZENvbG9yLm1hdGNoKHJlZHVjZWRIZXhSZWdleCkpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcmVkOiBwYXJzZUludChcIlwiICsgbm9ybWFsaXplZENvbG9yWzFdICsgbm9ybWFsaXplZENvbG9yWzFdLCAxNiksXG4gICAgICBncmVlbjogcGFyc2VJbnQoXCJcIiArIG5vcm1hbGl6ZWRDb2xvclsyXSArIG5vcm1hbGl6ZWRDb2xvclsyXSwgMTYpLFxuICAgICAgYmx1ZTogcGFyc2VJbnQoXCJcIiArIG5vcm1hbGl6ZWRDb2xvclszXSArIG5vcm1hbGl6ZWRDb2xvclszXSwgMTYpXG4gICAgfTtcbiAgfVxuXG4gIGlmIChub3JtYWxpemVkQ29sb3IubWF0Y2gocmVkdWNlZFJnYmFIZXhSZWdleCkpIHtcbiAgICB2YXIgX2FscGhhID0gcGFyc2VGbG9hdCgocGFyc2VJbnQoXCJcIiArIG5vcm1hbGl6ZWRDb2xvcls0XSArIG5vcm1hbGl6ZWRDb2xvcls0XSwgMTYpIC8gMjU1KS50b0ZpeGVkKDIpKTtcblxuICAgIHJldHVybiB7XG4gICAgICByZWQ6IHBhcnNlSW50KFwiXCIgKyBub3JtYWxpemVkQ29sb3JbMV0gKyBub3JtYWxpemVkQ29sb3JbMV0sIDE2KSxcbiAgICAgIGdyZWVuOiBwYXJzZUludChcIlwiICsgbm9ybWFsaXplZENvbG9yWzJdICsgbm9ybWFsaXplZENvbG9yWzJdLCAxNiksXG4gICAgICBibHVlOiBwYXJzZUludChcIlwiICsgbm9ybWFsaXplZENvbG9yWzNdICsgbm9ybWFsaXplZENvbG9yWzNdLCAxNiksXG4gICAgICBhbHBoYTogX2FscGhhXG4gICAgfTtcbiAgfVxuXG4gIHZhciByZ2JNYXRjaGVkID0gcmdiUmVnZXguZXhlYyhub3JtYWxpemVkQ29sb3IpO1xuXG4gIGlmIChyZ2JNYXRjaGVkKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJlZDogcGFyc2VJbnQoXCJcIiArIHJnYk1hdGNoZWRbMV0sIDEwKSxcbiAgICAgIGdyZWVuOiBwYXJzZUludChcIlwiICsgcmdiTWF0Y2hlZFsyXSwgMTApLFxuICAgICAgYmx1ZTogcGFyc2VJbnQoXCJcIiArIHJnYk1hdGNoZWRbM10sIDEwKVxuICAgIH07XG4gIH1cblxuICB2YXIgcmdiYU1hdGNoZWQgPSByZ2JhUmVnZXguZXhlYyhub3JtYWxpemVkQ29sb3IpO1xuXG4gIGlmIChyZ2JhTWF0Y2hlZCkge1xuICAgIHJldHVybiB7XG4gICAgICByZWQ6IHBhcnNlSW50KFwiXCIgKyByZ2JhTWF0Y2hlZFsxXSwgMTApLFxuICAgICAgZ3JlZW46IHBhcnNlSW50KFwiXCIgKyByZ2JhTWF0Y2hlZFsyXSwgMTApLFxuICAgICAgYmx1ZTogcGFyc2VJbnQoXCJcIiArIHJnYmFNYXRjaGVkWzNdLCAxMCksXG4gICAgICBhbHBoYTogcGFyc2VGbG9hdChcIlwiICsgcmdiYU1hdGNoZWRbNF0pXG4gICAgfTtcbiAgfVxuXG4gIHZhciBoc2xNYXRjaGVkID0gaHNsUmVnZXguZXhlYyhub3JtYWxpemVkQ29sb3IpO1xuXG4gIGlmIChoc2xNYXRjaGVkKSB7XG4gICAgdmFyIGh1ZSA9IHBhcnNlSW50KFwiXCIgKyBoc2xNYXRjaGVkWzFdLCAxMCk7XG4gICAgdmFyIHNhdHVyYXRpb24gPSBwYXJzZUludChcIlwiICsgaHNsTWF0Y2hlZFsyXSwgMTApIC8gMTAwO1xuICAgIHZhciBsaWdodG5lc3MgPSBwYXJzZUludChcIlwiICsgaHNsTWF0Y2hlZFszXSwgMTApIC8gMTAwO1xuICAgIHZhciByZ2JDb2xvclN0cmluZyA9IFwicmdiKFwiICsgKDAsIF9oc2xUb1JnYi5kZWZhdWx0KShodWUsIHNhdHVyYXRpb24sIGxpZ2h0bmVzcykgKyBcIilcIjtcbiAgICB2YXIgaHNsUmdiTWF0Y2hlZCA9IHJnYlJlZ2V4LmV4ZWMocmdiQ29sb3JTdHJpbmcpO1xuXG4gICAgaWYgKCFoc2xSZ2JNYXRjaGVkKSB7XG4gICAgICB0aHJvdyBuZXcgX2Vycm9ycy5kZWZhdWx0KDQsIG5vcm1hbGl6ZWRDb2xvciwgcmdiQ29sb3JTdHJpbmcpO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICByZWQ6IHBhcnNlSW50KFwiXCIgKyBoc2xSZ2JNYXRjaGVkWzFdLCAxMCksXG4gICAgICBncmVlbjogcGFyc2VJbnQoXCJcIiArIGhzbFJnYk1hdGNoZWRbMl0sIDEwKSxcbiAgICAgIGJsdWU6IHBhcnNlSW50KFwiXCIgKyBoc2xSZ2JNYXRjaGVkWzNdLCAxMClcbiAgICB9O1xuICB9XG5cbiAgdmFyIGhzbGFNYXRjaGVkID0gaHNsYVJlZ2V4LmV4ZWMobm9ybWFsaXplZENvbG9yKTtcblxuICBpZiAoaHNsYU1hdGNoZWQpIHtcbiAgICB2YXIgX2h1ZSA9IHBhcnNlSW50KFwiXCIgKyBoc2xhTWF0Y2hlZFsxXSwgMTApO1xuXG4gICAgdmFyIF9zYXR1cmF0aW9uID0gcGFyc2VJbnQoXCJcIiArIGhzbGFNYXRjaGVkWzJdLCAxMCkgLyAxMDA7XG5cbiAgICB2YXIgX2xpZ2h0bmVzcyA9IHBhcnNlSW50KFwiXCIgKyBoc2xhTWF0Y2hlZFszXSwgMTApIC8gMTAwO1xuXG4gICAgdmFyIF9yZ2JDb2xvclN0cmluZyA9IFwicmdiKFwiICsgKDAsIF9oc2xUb1JnYi5kZWZhdWx0KShfaHVlLCBfc2F0dXJhdGlvbiwgX2xpZ2h0bmVzcykgKyBcIilcIjtcblxuICAgIHZhciBfaHNsUmdiTWF0Y2hlZCA9IHJnYlJlZ2V4LmV4ZWMoX3JnYkNvbG9yU3RyaW5nKTtcblxuICAgIGlmICghX2hzbFJnYk1hdGNoZWQpIHtcbiAgICAgIHRocm93IG5ldyBfZXJyb3JzLmRlZmF1bHQoNCwgbm9ybWFsaXplZENvbG9yLCBfcmdiQ29sb3JTdHJpbmcpO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICByZWQ6IHBhcnNlSW50KFwiXCIgKyBfaHNsUmdiTWF0Y2hlZFsxXSwgMTApLFxuICAgICAgZ3JlZW46IHBhcnNlSW50KFwiXCIgKyBfaHNsUmdiTWF0Y2hlZFsyXSwgMTApLFxuICAgICAgYmx1ZTogcGFyc2VJbnQoXCJcIiArIF9oc2xSZ2JNYXRjaGVkWzNdLCAxMCksXG4gICAgICBhbHBoYTogcGFyc2VGbG9hdChcIlwiICsgaHNsYU1hdGNoZWRbNF0pXG4gICAgfTtcbiAgfVxuXG4gIHRocm93IG5ldyBfZXJyb3JzLmRlZmF1bHQoNSk7XG59XG5cbnZhciBfZGVmYXVsdCA9IHBhcnNlVG9SZ2I7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG5mdW5jdGlvbiByZ2JUb0hzbChjb2xvcikge1xuICAvLyBtYWtlIHN1cmUgcmdiIGFyZSBjb250YWluZWQgaW4gYSBzZXQgb2YgWzAsIDI1NV1cbiAgdmFyIHJlZCA9IGNvbG9yLnJlZCAvIDI1NTtcbiAgdmFyIGdyZWVuID0gY29sb3IuZ3JlZW4gLyAyNTU7XG4gIHZhciBibHVlID0gY29sb3IuYmx1ZSAvIDI1NTtcbiAgdmFyIG1heCA9IE1hdGgubWF4KHJlZCwgZ3JlZW4sIGJsdWUpO1xuICB2YXIgbWluID0gTWF0aC5taW4ocmVkLCBncmVlbiwgYmx1ZSk7XG4gIHZhciBsaWdodG5lc3MgPSAobWF4ICsgbWluKSAvIDI7XG5cbiAgaWYgKG1heCA9PT0gbWluKSB7XG4gICAgLy8gYWNocm9tYXRpY1xuICAgIGlmIChjb2xvci5hbHBoYSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBodWU6IDAsXG4gICAgICAgIHNhdHVyYXRpb246IDAsXG4gICAgICAgIGxpZ2h0bmVzczogbGlnaHRuZXNzLFxuICAgICAgICBhbHBoYTogY29sb3IuYWxwaGFcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGh1ZTogMCxcbiAgICAgICAgc2F0dXJhdGlvbjogMCxcbiAgICAgICAgbGlnaHRuZXNzOiBsaWdodG5lc3NcbiAgICAgIH07XG4gICAgfVxuICB9XG5cbiAgdmFyIGh1ZTtcbiAgdmFyIGRlbHRhID0gbWF4IC0gbWluO1xuICB2YXIgc2F0dXJhdGlvbiA9IGxpZ2h0bmVzcyA+IDAuNSA/IGRlbHRhIC8gKDIgLSBtYXggLSBtaW4pIDogZGVsdGEgLyAobWF4ICsgbWluKTtcblxuICBzd2l0Y2ggKG1heCkge1xuICAgIGNhc2UgcmVkOlxuICAgICAgaHVlID0gKGdyZWVuIC0gYmx1ZSkgLyBkZWx0YSArIChncmVlbiA8IGJsdWUgPyA2IDogMCk7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgZ3JlZW46XG4gICAgICBodWUgPSAoYmx1ZSAtIHJlZCkgLyBkZWx0YSArIDI7XG4gICAgICBicmVhaztcblxuICAgIGRlZmF1bHQ6XG4gICAgICAvLyBibHVlIGNhc2VcbiAgICAgIGh1ZSA9IChyZWQgLSBncmVlbikgLyBkZWx0YSArIDQ7XG4gICAgICBicmVhaztcbiAgfVxuXG4gIGh1ZSAqPSA2MDtcblxuICBpZiAoY29sb3IuYWxwaGEgIT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiB7XG4gICAgICBodWU6IGh1ZSxcbiAgICAgIHNhdHVyYXRpb246IHNhdHVyYXRpb24sXG4gICAgICBsaWdodG5lc3M6IGxpZ2h0bmVzcyxcbiAgICAgIGFscGhhOiBjb2xvci5hbHBoYVxuICAgIH07XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGh1ZTogaHVlLFxuICAgIHNhdHVyYXRpb246IHNhdHVyYXRpb24sXG4gICAgbGlnaHRuZXNzOiBsaWdodG5lc3NcbiAgfTtcbn1cblxudmFyIF9kZWZhdWx0ID0gcmdiVG9Ic2w7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX3BhcnNlVG9SZ2IgPVxuLyojX19QVVJFX18qL1xuX2ludGVyb3BSZXF1aXJlRGVmYXVsdChcbi8qI19fUFVSRV9fKi9cbnJlcXVpcmUoXCIuL3BhcnNlVG9SZ2JcIikpO1xuXG52YXIgX3JnYlRvSHNsID1cbi8qI19fUFVSRV9fKi9cbl9pbnRlcm9wUmVxdWlyZURlZmF1bHQoXG4vKiNfX1BVUkVfXyovXG5yZXF1aXJlKFwiLi4vaW50ZXJuYWxIZWxwZXJzL19yZ2JUb0hzbFwiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbi8qKlxuICogUmV0dXJucyBhbiBIc2xDb2xvciBvciBIc2xhQ29sb3Igb2JqZWN0LiBUaGlzIHV0aWxpdHkgZnVuY3Rpb24gaXMgb25seSB1c2VmdWxcbiAqIGlmIHdhbnQgdG8gZXh0cmFjdCBhIGNvbG9yIGNvbXBvbmVudC4gV2l0aCB0aGUgY29sb3IgdXRpbCBgdG9Db2xvclN0cmluZ2AgeW91XG4gKiBjYW4gY29udmVydCBhIEhzbENvbG9yIG9yIEhzbGFDb2xvciBvYmplY3QgYmFjayB0byBhIHN0cmluZy5cbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQXNzaWducyBgeyBodWU6IDAsIHNhdHVyYXRpb246IDEsIGxpZ2h0bmVzczogMC41IH1gIHRvIGNvbG9yMVxuICogY29uc3QgY29sb3IxID0gcGFyc2VUb0hzbCgncmdiKDI1NSwgMCwgMCknKTtcbiAqIC8vIEFzc2lnbnMgYHsgaHVlOiAxMjgsIHNhdHVyYXRpb246IDEsIGxpZ2h0bmVzczogMC41LCBhbHBoYTogMC43NSB9YCB0byBjb2xvcjJcbiAqIGNvbnN0IGNvbG9yMiA9IHBhcnNlVG9Ic2woJ2hzbGEoMTI4LCAxMDAlLCA1MCUsIDAuNzUpJyk7XG4gKi9cbmZ1bmN0aW9uIHBhcnNlVG9Ic2woY29sb3IpIHtcbiAgLy8gTm90ZTogQXQgYSBsYXRlciBzdGFnZSB3ZSBjYW4gb3B0aW1pemUgdGhpcyBmdW5jdGlvbiBhcyByaWdodCBub3cgYSBoc2xcbiAgLy8gY29sb3Igd291bGQgYmUgcGFyc2VkIGNvbnZlcnRlZCB0byByZ2IgdmFsdWVzIGFuZCBjb252ZXJ0ZWQgYmFjayB0byBoc2wuXG4gIHJldHVybiAoMCwgX3JnYlRvSHNsLmRlZmF1bHQpKCgwLCBfcGFyc2VUb1JnYi5kZWZhdWx0KShjb2xvcikpO1xufVxuXG52YXIgX2RlZmF1bHQgPSBwYXJzZVRvSHNsO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxuLyoqXG4gKiBSZWR1Y2VzIGhleCB2YWx1ZXMgaWYgcG9zc2libGUgZS5nLiAjZmY4ODY2IHRvICNmODZcbiAqIEBwcml2YXRlXG4gKi9cbnZhciByZWR1Y2VIZXhWYWx1ZSA9IGZ1bmN0aW9uIHJlZHVjZUhleFZhbHVlKHZhbHVlKSB7XG4gIGlmICh2YWx1ZS5sZW5ndGggPT09IDcgJiYgdmFsdWVbMV0gPT09IHZhbHVlWzJdICYmIHZhbHVlWzNdID09PSB2YWx1ZVs0XSAmJiB2YWx1ZVs1XSA9PT0gdmFsdWVbNl0pIHtcbiAgICByZXR1cm4gXCIjXCIgKyB2YWx1ZVsxXSArIHZhbHVlWzNdICsgdmFsdWVbNV07XG4gIH1cblxuICByZXR1cm4gdmFsdWU7XG59O1xuXG52YXIgX2RlZmF1bHQgPSByZWR1Y2VIZXhWYWx1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbmZ1bmN0aW9uIG51bWJlclRvSGV4KHZhbHVlKSB7XG4gIHZhciBoZXggPSB2YWx1ZS50b1N0cmluZygxNik7XG4gIHJldHVybiBoZXgubGVuZ3RoID09PSAxID8gXCIwXCIgKyBoZXggOiBoZXg7XG59XG5cbnZhciBfZGVmYXVsdCA9IG51bWJlclRvSGV4O1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIF9oc2xUb1JnYiA9XG4vKiNfX1BVUkVfXyovXG5faW50ZXJvcFJlcXVpcmVEZWZhdWx0KFxuLyojX19QVVJFX18qL1xucmVxdWlyZShcIi4vX2hzbFRvUmdiXCIpKTtcblxudmFyIF9yZWR1Y2VIZXhWYWx1ZSA9XG4vKiNfX1BVUkVfXyovXG5faW50ZXJvcFJlcXVpcmVEZWZhdWx0KFxuLyojX19QVVJFX18qL1xucmVxdWlyZShcIi4vX3JlZHVjZUhleFZhbHVlXCIpKTtcblxudmFyIF9udW1iZXJUb0hleCA9XG4vKiNfX1BVUkVfXyovXG5faW50ZXJvcFJlcXVpcmVEZWZhdWx0KFxuLyojX19QVVJFX18qL1xucmVxdWlyZShcIi4vX251bWJlclRvSGV4XCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gY29sb3JUb0hleChjb2xvcikge1xuICByZXR1cm4gKDAsIF9udW1iZXJUb0hleC5kZWZhdWx0KShNYXRoLnJvdW5kKGNvbG9yICogMjU1KSk7XG59XG5cbmZ1bmN0aW9uIGNvbnZlcnRUb0hleChyZWQsIGdyZWVuLCBibHVlKSB7XG4gIHJldHVybiAoMCwgX3JlZHVjZUhleFZhbHVlLmRlZmF1bHQpKFwiI1wiICsgY29sb3JUb0hleChyZWQpICsgY29sb3JUb0hleChncmVlbikgKyBjb2xvclRvSGV4KGJsdWUpKTtcbn1cblxuZnVuY3Rpb24gaHNsVG9IZXgoaHVlLCBzYXR1cmF0aW9uLCBsaWdodG5lc3MpIHtcbiAgcmV0dXJuICgwLCBfaHNsVG9SZ2IuZGVmYXVsdCkoaHVlLCBzYXR1cmF0aW9uLCBsaWdodG5lc3MsIGNvbnZlcnRUb0hleCk7XG59XG5cbnZhciBfZGVmYXVsdCA9IGhzbFRvSGV4O1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIF9oc2xUb0hleCA9XG4vKiNfX1BVUkVfXyovXG5faW50ZXJvcFJlcXVpcmVEZWZhdWx0KFxuLyojX19QVVJFX18qL1xucmVxdWlyZShcIi4uL2ludGVybmFsSGVscGVycy9faHNsVG9IZXhcIikpO1xuXG52YXIgX2Vycm9ycyA9XG4vKiNfX1BVUkVfXyovXG5faW50ZXJvcFJlcXVpcmVEZWZhdWx0KFxuLyojX19QVVJFX18qL1xucmVxdWlyZShcIi4uL2ludGVybmFsSGVscGVycy9fZXJyb3JzXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuLyoqXG4gKiBSZXR1cm5zIGEgc3RyaW5nIHZhbHVlIGZvciB0aGUgY29sb3IuIFRoZSByZXR1cm5lZCByZXN1bHQgaXMgdGhlIHNtYWxsZXN0IHBvc3NpYmxlIGhleCBub3RhdGlvbi5cbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gU3R5bGVzIGFzIG9iamVjdCB1c2FnZVxuICogY29uc3Qgc3R5bGVzID0ge1xuICogICBiYWNrZ3JvdW5kOiBoc2woMzU5LCAwLjc1LCAwLjQpLFxuICogICBiYWNrZ3JvdW5kOiBoc2woeyBodWU6IDM2MCwgc2F0dXJhdGlvbjogMC43NSwgbGlnaHRuZXNzOiAwLjQgfSksXG4gKiB9XG4gKlxuICogLy8gc3R5bGVkLWNvbXBvbmVudHMgdXNhZ2VcbiAqIGNvbnN0IGRpdiA9IHN0eWxlZC5kaXZgXG4gKiAgIGJhY2tncm91bmQ6ICR7aHNsKDM1OSwgMC43NSwgMC40KX07XG4gKiAgIGJhY2tncm91bmQ6ICR7aHNsKHsgaHVlOiAzNjAsIHNhdHVyYXRpb246IDAuNzUsIGxpZ2h0bmVzczogMC40IH0pfTtcbiAqIGBcbiAqXG4gKiAvLyBDU1MgaW4gSlMgT3V0cHV0XG4gKlxuICogZWxlbWVudCB7XG4gKiAgIGJhY2tncm91bmQ6IFwiI2IzMTkxY1wiO1xuICogICBiYWNrZ3JvdW5kOiBcIiNiMzE5MWNcIjtcbiAqIH1cbiAqL1xuZnVuY3Rpb24gaHNsKHZhbHVlLCBzYXR1cmF0aW9uLCBsaWdodG5lc3MpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicgJiYgdHlwZW9mIHNhdHVyYXRpb24gPT09ICdudW1iZXInICYmIHR5cGVvZiBsaWdodG5lc3MgPT09ICdudW1iZXInKSB7XG4gICAgcmV0dXJuICgwLCBfaHNsVG9IZXguZGVmYXVsdCkodmFsdWUsIHNhdHVyYXRpb24sIGxpZ2h0bmVzcyk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiBzYXR1cmF0aW9uID09PSB1bmRlZmluZWQgJiYgbGlnaHRuZXNzID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gKDAsIF9oc2xUb0hleC5kZWZhdWx0KSh2YWx1ZS5odWUsIHZhbHVlLnNhdHVyYXRpb24sIHZhbHVlLmxpZ2h0bmVzcyk7XG4gIH1cblxuICB0aHJvdyBuZXcgX2Vycm9ycy5kZWZhdWx0KDEpO1xufVxuXG52YXIgX2RlZmF1bHQgPSBoc2w7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX2hzbFRvSGV4ID1cbi8qI19fUFVSRV9fKi9cbl9pbnRlcm9wUmVxdWlyZURlZmF1bHQoXG4vKiNfX1BVUkVfXyovXG5yZXF1aXJlKFwiLi4vaW50ZXJuYWxIZWxwZXJzL19oc2xUb0hleFwiKSk7XG5cbnZhciBfaHNsVG9SZ2IgPVxuLyojX19QVVJFX18qL1xuX2ludGVyb3BSZXF1aXJlRGVmYXVsdChcbi8qI19fUFVSRV9fKi9cbnJlcXVpcmUoXCIuLi9pbnRlcm5hbEhlbHBlcnMvX2hzbFRvUmdiXCIpKTtcblxudmFyIF9lcnJvcnMgPVxuLyojX19QVVJFX18qL1xuX2ludGVyb3BSZXF1aXJlRGVmYXVsdChcbi8qI19fUFVSRV9fKi9cbnJlcXVpcmUoXCIuLi9pbnRlcm5hbEhlbHBlcnMvX2Vycm9yc1wiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbi8qKlxuICogUmV0dXJucyBhIHN0cmluZyB2YWx1ZSBmb3IgdGhlIGNvbG9yLiBUaGUgcmV0dXJuZWQgcmVzdWx0IGlzIHRoZSBzbWFsbGVzdCBwb3NzaWJsZSByZ2JhIG9yIGhleCBub3RhdGlvbi5cbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gU3R5bGVzIGFzIG9iamVjdCB1c2FnZVxuICogY29uc3Qgc3R5bGVzID0ge1xuICogICBiYWNrZ3JvdW5kOiBoc2xhKDM1OSwgMC43NSwgMC40LCAwLjcpLFxuICogICBiYWNrZ3JvdW5kOiBoc2xhKHsgaHVlOiAzNjAsIHNhdHVyYXRpb246IDAuNzUsIGxpZ2h0bmVzczogMC40LCBhbHBoYTogMCw3IH0pLFxuICogICBiYWNrZ3JvdW5kOiBoc2xhKDM1OSwgMC43NSwgMC40LCAxKSxcbiAqIH1cbiAqXG4gKiAvLyBzdHlsZWQtY29tcG9uZW50cyB1c2FnZVxuICogY29uc3QgZGl2ID0gc3R5bGVkLmRpdmBcbiAqICAgYmFja2dyb3VuZDogJHtoc2xhKDM1OSwgMC43NSwgMC40LCAwLjcpfTtcbiAqICAgYmFja2dyb3VuZDogJHtoc2xhKHsgaHVlOiAzNjAsIHNhdHVyYXRpb246IDAuNzUsIGxpZ2h0bmVzczogMC40LCBhbHBoYTogMCw3IH0pfTtcbiAqICAgYmFja2dyb3VuZDogJHtoc2xhKDM1OSwgMC43NSwgMC40LCAxKX07XG4gKiBgXG4gKlxuICogLy8gQ1NTIGluIEpTIE91dHB1dFxuICpcbiAqIGVsZW1lbnQge1xuICogICBiYWNrZ3JvdW5kOiBcInJnYmEoMTc5LDI1LDI4LDAuNylcIjtcbiAqICAgYmFja2dyb3VuZDogXCJyZ2JhKDE3OSwyNSwyOCwwLjcpXCI7XG4gKiAgIGJhY2tncm91bmQ6IFwiI2IzMTkxY1wiO1xuICogfVxuICovXG5mdW5jdGlvbiBoc2xhKHZhbHVlLCBzYXR1cmF0aW9uLCBsaWdodG5lc3MsIGFscGhhKSB7XG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInICYmIHR5cGVvZiBzYXR1cmF0aW9uID09PSAnbnVtYmVyJyAmJiB0eXBlb2YgbGlnaHRuZXNzID09PSAnbnVtYmVyJyAmJiB0eXBlb2YgYWxwaGEgPT09ICdudW1iZXInKSB7XG4gICAgcmV0dXJuIGFscGhhID49IDEgPyAoMCwgX2hzbFRvSGV4LmRlZmF1bHQpKHZhbHVlLCBzYXR1cmF0aW9uLCBsaWdodG5lc3MpIDogXCJyZ2JhKFwiICsgKDAsIF9oc2xUb1JnYi5kZWZhdWx0KSh2YWx1ZSwgc2F0dXJhdGlvbiwgbGlnaHRuZXNzKSArIFwiLFwiICsgYWxwaGEgKyBcIilcIjtcbiAgfSBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHNhdHVyYXRpb24gPT09IHVuZGVmaW5lZCAmJiBsaWdodG5lc3MgPT09IHVuZGVmaW5lZCAmJiBhbHBoYSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIHZhbHVlLmFscGhhID49IDEgPyAoMCwgX2hzbFRvSGV4LmRlZmF1bHQpKHZhbHVlLmh1ZSwgdmFsdWUuc2F0dXJhdGlvbiwgdmFsdWUubGlnaHRuZXNzKSA6IFwicmdiYShcIiArICgwLCBfaHNsVG9SZ2IuZGVmYXVsdCkodmFsdWUuaHVlLCB2YWx1ZS5zYXR1cmF0aW9uLCB2YWx1ZS5saWdodG5lc3MpICsgXCIsXCIgKyB2YWx1ZS5hbHBoYSArIFwiKVwiO1xuICB9XG5cbiAgdGhyb3cgbmV3IF9lcnJvcnMuZGVmYXVsdCgyKTtcbn1cblxudmFyIF9kZWZhdWx0ID0gaHNsYTtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBfcmVkdWNlSGV4VmFsdWUgPVxuLyojX19QVVJFX18qL1xuX2ludGVyb3BSZXF1aXJlRGVmYXVsdChcbi8qI19fUFVSRV9fKi9cbnJlcXVpcmUoXCIuLi9pbnRlcm5hbEhlbHBlcnMvX3JlZHVjZUhleFZhbHVlXCIpKTtcblxudmFyIF9udW1iZXJUb0hleCA9XG4vKiNfX1BVUkVfXyovXG5faW50ZXJvcFJlcXVpcmVEZWZhdWx0KFxuLyojX19QVVJFX18qL1xucmVxdWlyZShcIi4uL2ludGVybmFsSGVscGVycy9fbnVtYmVyVG9IZXhcIikpO1xuXG52YXIgX2Vycm9ycyA9XG4vKiNfX1BVUkVfXyovXG5faW50ZXJvcFJlcXVpcmVEZWZhdWx0KFxuLyojX19QVVJFX18qL1xucmVxdWlyZShcIi4uL2ludGVybmFsSGVscGVycy9fZXJyb3JzXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuLyoqXG4gKiBSZXR1cm5zIGEgc3RyaW5nIHZhbHVlIGZvciB0aGUgY29sb3IuIFRoZSByZXR1cm5lZCByZXN1bHQgaXMgdGhlIHNtYWxsZXN0IHBvc3NpYmxlIGhleCBub3RhdGlvbi5cbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gU3R5bGVzIGFzIG9iamVjdCB1c2FnZVxuICogY29uc3Qgc3R5bGVzID0ge1xuICogICBiYWNrZ3JvdW5kOiByZ2IoMjU1LCAyMDUsIDEwMCksXG4gKiAgIGJhY2tncm91bmQ6IHJnYih7IHJlZDogMjU1LCBncmVlbjogMjA1LCBibHVlOiAxMDAgfSksXG4gKiB9XG4gKlxuICogLy8gc3R5bGVkLWNvbXBvbmVudHMgdXNhZ2VcbiAqIGNvbnN0IGRpdiA9IHN0eWxlZC5kaXZgXG4gKiAgIGJhY2tncm91bmQ6ICR7cmdiKDI1NSwgMjA1LCAxMDApfTtcbiAqICAgYmFja2dyb3VuZDogJHtyZ2IoeyByZWQ6IDI1NSwgZ3JlZW46IDIwNSwgYmx1ZTogMTAwIH0pfTtcbiAqIGBcbiAqXG4gKiAvLyBDU1MgaW4gSlMgT3V0cHV0XG4gKlxuICogZWxlbWVudCB7XG4gKiAgIGJhY2tncm91bmQ6IFwiI2ZmY2Q2NFwiO1xuICogICBiYWNrZ3JvdW5kOiBcIiNmZmNkNjRcIjtcbiAqIH1cbiAqL1xuZnVuY3Rpb24gcmdiKHZhbHVlLCBncmVlbiwgYmx1ZSkge1xuICBpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJyAmJiB0eXBlb2YgZ3JlZW4gPT09ICdudW1iZXInICYmIHR5cGVvZiBibHVlID09PSAnbnVtYmVyJykge1xuICAgIHJldHVybiAoMCwgX3JlZHVjZUhleFZhbHVlLmRlZmF1bHQpKFwiI1wiICsgKDAsIF9udW1iZXJUb0hleC5kZWZhdWx0KSh2YWx1ZSkgKyAoMCwgX251bWJlclRvSGV4LmRlZmF1bHQpKGdyZWVuKSArICgwLCBfbnVtYmVyVG9IZXguZGVmYXVsdCkoYmx1ZSkpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgZ3JlZW4gPT09IHVuZGVmaW5lZCAmJiBibHVlID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gKDAsIF9yZWR1Y2VIZXhWYWx1ZS5kZWZhdWx0KShcIiNcIiArICgwLCBfbnVtYmVyVG9IZXguZGVmYXVsdCkodmFsdWUucmVkKSArICgwLCBfbnVtYmVyVG9IZXguZGVmYXVsdCkodmFsdWUuZ3JlZW4pICsgKDAsIF9udW1iZXJUb0hleC5kZWZhdWx0KSh2YWx1ZS5ibHVlKSk7XG4gIH1cblxuICB0aHJvdyBuZXcgX2Vycm9ycy5kZWZhdWx0KDYpO1xufVxuXG52YXIgX2RlZmF1bHQgPSByZ2I7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX3BhcnNlVG9SZ2IgPVxuLyojX19QVVJFX18qL1xuX2ludGVyb3BSZXF1aXJlRGVmYXVsdChcbi8qI19fUFVSRV9fKi9cbnJlcXVpcmUoXCIuL3BhcnNlVG9SZ2JcIikpO1xuXG52YXIgX3JnYiA9XG4vKiNfX1BVUkVfXyovXG5faW50ZXJvcFJlcXVpcmVEZWZhdWx0KFxuLyojX19QVVJFX18qL1xucmVxdWlyZShcIi4vcmdiXCIpKTtcblxudmFyIF9lcnJvcnMgPVxuLyojX19QVVJFX18qL1xuX2ludGVyb3BSZXF1aXJlRGVmYXVsdChcbi8qI19fUFVSRV9fKi9cbnJlcXVpcmUoXCIuLi9pbnRlcm5hbEhlbHBlcnMvX2Vycm9yc1wiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbi8qKlxuICogUmV0dXJucyBhIHN0cmluZyB2YWx1ZSBmb3IgdGhlIGNvbG9yLiBUaGUgcmV0dXJuZWQgcmVzdWx0IGlzIHRoZSBzbWFsbGVzdCBwb3NzaWJsZSByZ2JhIG9yIGhleCBub3RhdGlvbi5cbiAqXG4gKiBDYW4gYWxzbyBiZSB1c2VkIHRvIGZhZGUgYSBjb2xvciBieSBwYXNzaW5nIGEgaGV4IHZhbHVlIG9yIG5hbWVkIENTUyBjb2xvciBhbG9uZyB3aXRoIGFuIGFscGhhIHZhbHVlLlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBTdHlsZXMgYXMgb2JqZWN0IHVzYWdlXG4gKiBjb25zdCBzdHlsZXMgPSB7XG4gKiAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyMDUsIDEwMCwgMC43KSxcbiAqICAgYmFja2dyb3VuZDogcmdiYSh7IHJlZDogMjU1LCBncmVlbjogMjA1LCBibHVlOiAxMDAsIGFscGhhOiAwLjcgfSksXG4gKiAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyMDUsIDEwMCwgMSksXG4gKiAgIGJhY2tncm91bmQ6IHJnYmEoJyNmZmZmZmYnLCAwLjQpLFxuICogICBiYWNrZ3JvdW5kOiByZ2JhKCdibGFjaycsIDAuNyksXG4gKiB9XG4gKlxuICogLy8gc3R5bGVkLWNvbXBvbmVudHMgdXNhZ2VcbiAqIGNvbnN0IGRpdiA9IHN0eWxlZC5kaXZgXG4gKiAgIGJhY2tncm91bmQ6ICR7cmdiYSgyNTUsIDIwNSwgMTAwLCAwLjcpfTtcbiAqICAgYmFja2dyb3VuZDogJHtyZ2JhKHsgcmVkOiAyNTUsIGdyZWVuOiAyMDUsIGJsdWU6IDEwMCwgYWxwaGE6IDAuNyB9KX07XG4gKiAgIGJhY2tncm91bmQ6ICR7cmdiYSgyNTUsIDIwNSwgMTAwLCAxKX07XG4gKiAgIGJhY2tncm91bmQ6ICR7cmdiYSgnI2ZmZmZmZicsIDAuNCl9O1xuICogICBiYWNrZ3JvdW5kOiAke3JnYmEoJ2JsYWNrJywgMC43KX07XG4gKiBgXG4gKlxuICogLy8gQ1NTIGluIEpTIE91dHB1dFxuICpcbiAqIGVsZW1lbnQge1xuICogICBiYWNrZ3JvdW5kOiBcInJnYmEoMjU1LDIwNSwxMDAsMC43KVwiO1xuICogICBiYWNrZ3JvdW5kOiBcInJnYmEoMjU1LDIwNSwxMDAsMC43KVwiO1xuICogICBiYWNrZ3JvdW5kOiBcIiNmZmNkNjRcIjtcbiAqICAgYmFja2dyb3VuZDogXCJyZ2JhKDI1NSwyNTUsMjU1LDAuNClcIjtcbiAqICAgYmFja2dyb3VuZDogXCJyZ2JhKDAsMCwwLDAuNylcIjtcbiAqIH1cbiAqL1xuZnVuY3Rpb24gcmdiYShmaXJzdFZhbHVlLCBzZWNvbmRWYWx1ZSwgdGhpcmRWYWx1ZSwgZm91cnRoVmFsdWUpIHtcbiAgaWYgKHR5cGVvZiBmaXJzdFZhbHVlID09PSAnc3RyaW5nJyAmJiB0eXBlb2Ygc2Vjb25kVmFsdWUgPT09ICdudW1iZXInKSB7XG4gICAgdmFyIHJnYlZhbHVlID0gKDAsIF9wYXJzZVRvUmdiLmRlZmF1bHQpKGZpcnN0VmFsdWUpO1xuICAgIHJldHVybiBcInJnYmEoXCIgKyByZ2JWYWx1ZS5yZWQgKyBcIixcIiArIHJnYlZhbHVlLmdyZWVuICsgXCIsXCIgKyByZ2JWYWx1ZS5ibHVlICsgXCIsXCIgKyBzZWNvbmRWYWx1ZSArIFwiKVwiO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBmaXJzdFZhbHVlID09PSAnbnVtYmVyJyAmJiB0eXBlb2Ygc2Vjb25kVmFsdWUgPT09ICdudW1iZXInICYmIHR5cGVvZiB0aGlyZFZhbHVlID09PSAnbnVtYmVyJyAmJiB0eXBlb2YgZm91cnRoVmFsdWUgPT09ICdudW1iZXInKSB7XG4gICAgcmV0dXJuIGZvdXJ0aFZhbHVlID49IDEgPyAoMCwgX3JnYi5kZWZhdWx0KShmaXJzdFZhbHVlLCBzZWNvbmRWYWx1ZSwgdGhpcmRWYWx1ZSkgOiBcInJnYmEoXCIgKyBmaXJzdFZhbHVlICsgXCIsXCIgKyBzZWNvbmRWYWx1ZSArIFwiLFwiICsgdGhpcmRWYWx1ZSArIFwiLFwiICsgZm91cnRoVmFsdWUgKyBcIilcIjtcbiAgfSBlbHNlIGlmICh0eXBlb2YgZmlyc3RWYWx1ZSA9PT0gJ29iamVjdCcgJiYgc2Vjb25kVmFsdWUgPT09IHVuZGVmaW5lZCAmJiB0aGlyZFZhbHVlID09PSB1bmRlZmluZWQgJiYgZm91cnRoVmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBmaXJzdFZhbHVlLmFscGhhID49IDEgPyAoMCwgX3JnYi5kZWZhdWx0KShmaXJzdFZhbHVlLnJlZCwgZmlyc3RWYWx1ZS5ncmVlbiwgZmlyc3RWYWx1ZS5ibHVlKSA6IFwicmdiYShcIiArIGZpcnN0VmFsdWUucmVkICsgXCIsXCIgKyBmaXJzdFZhbHVlLmdyZWVuICsgXCIsXCIgKyBmaXJzdFZhbHVlLmJsdWUgKyBcIixcIiArIGZpcnN0VmFsdWUuYWxwaGEgKyBcIilcIjtcbiAgfVxuXG4gIHRocm93IG5ldyBfZXJyb3JzLmRlZmF1bHQoNyk7XG59XG5cbnZhciBfZGVmYXVsdCA9IHJnYmE7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX2hzbCA9XG4vKiNfX1BVUkVfXyovXG5faW50ZXJvcFJlcXVpcmVEZWZhdWx0KFxuLyojX19QVVJFX18qL1xucmVxdWlyZShcIi4vaHNsXCIpKTtcblxudmFyIF9oc2xhID1cbi8qI19fUFVSRV9fKi9cbl9pbnRlcm9wUmVxdWlyZURlZmF1bHQoXG4vKiNfX1BVUkVfXyovXG5yZXF1aXJlKFwiLi9oc2xhXCIpKTtcblxudmFyIF9yZ2IgPVxuLyojX19QVVJFX18qL1xuX2ludGVyb3BSZXF1aXJlRGVmYXVsdChcbi8qI19fUFVSRV9fKi9cbnJlcXVpcmUoXCIuL3JnYlwiKSk7XG5cbnZhciBfcmdiYSA9XG4vKiNfX1BVUkVfXyovXG5faW50ZXJvcFJlcXVpcmVEZWZhdWx0KFxuLyojX19QVVJFX18qL1xucmVxdWlyZShcIi4vcmdiYVwiKSk7XG5cbnZhciBfZXJyb3JzID1cbi8qI19fUFVSRV9fKi9cbl9pbnRlcm9wUmVxdWlyZURlZmF1bHQoXG4vKiNfX1BVUkVfXyovXG5yZXF1aXJlKFwiLi4vaW50ZXJuYWxIZWxwZXJzL19lcnJvcnNcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgaXNSZ2IgPSBmdW5jdGlvbiBpc1JnYihjb2xvcikge1xuICByZXR1cm4gdHlwZW9mIGNvbG9yLnJlZCA9PT0gJ251bWJlcicgJiYgdHlwZW9mIGNvbG9yLmdyZWVuID09PSAnbnVtYmVyJyAmJiB0eXBlb2YgY29sb3IuYmx1ZSA9PT0gJ251bWJlcicgJiYgKHR5cGVvZiBjb2xvci5hbHBoYSAhPT0gJ251bWJlcicgfHwgdHlwZW9mIGNvbG9yLmFscGhhID09PSAndW5kZWZpbmVkJyk7XG59O1xuXG52YXIgaXNSZ2JhID0gZnVuY3Rpb24gaXNSZ2JhKGNvbG9yKSB7XG4gIHJldHVybiB0eXBlb2YgY29sb3IucmVkID09PSAnbnVtYmVyJyAmJiB0eXBlb2YgY29sb3IuZ3JlZW4gPT09ICdudW1iZXInICYmIHR5cGVvZiBjb2xvci5ibHVlID09PSAnbnVtYmVyJyAmJiB0eXBlb2YgY29sb3IuYWxwaGEgPT09ICdudW1iZXInO1xufTtcblxudmFyIGlzSHNsID0gZnVuY3Rpb24gaXNIc2woY29sb3IpIHtcbiAgcmV0dXJuIHR5cGVvZiBjb2xvci5odWUgPT09ICdudW1iZXInICYmIHR5cGVvZiBjb2xvci5zYXR1cmF0aW9uID09PSAnbnVtYmVyJyAmJiB0eXBlb2YgY29sb3IubGlnaHRuZXNzID09PSAnbnVtYmVyJyAmJiAodHlwZW9mIGNvbG9yLmFscGhhICE9PSAnbnVtYmVyJyB8fCB0eXBlb2YgY29sb3IuYWxwaGEgPT09ICd1bmRlZmluZWQnKTtcbn07XG5cbnZhciBpc0hzbGEgPSBmdW5jdGlvbiBpc0hzbGEoY29sb3IpIHtcbiAgcmV0dXJuIHR5cGVvZiBjb2xvci5odWUgPT09ICdudW1iZXInICYmIHR5cGVvZiBjb2xvci5zYXR1cmF0aW9uID09PSAnbnVtYmVyJyAmJiB0eXBlb2YgY29sb3IubGlnaHRuZXNzID09PSAnbnVtYmVyJyAmJiB0eXBlb2YgY29sb3IuYWxwaGEgPT09ICdudW1iZXInO1xufTtcbi8qKlxuICogQ29udmVydHMgYSBSZ2JDb2xvciwgUmdiYUNvbG9yLCBIc2xDb2xvciBvciBIc2xhQ29sb3Igb2JqZWN0IHRvIGEgY29sb3Igc3RyaW5nLlxuICogVGhpcyB1dGlsIGlzIHVzZWZ1bCBpbiBjYXNlIHlvdSBvbmx5IGtub3cgb24gcnVudGltZSB3aGljaCBjb2xvciBvYmplY3QgaXNcbiAqIHVzZWQuIE90aGVyd2lzZSB3ZSByZWNvbW1lbmQgdG8gcmVseSBvbiBgcmdiYCwgYHJnYmFgLCBgaHNsYCBvciBgaHNsYWAuXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFN0eWxlcyBhcyBvYmplY3QgdXNhZ2VcbiAqIGNvbnN0IHN0eWxlcyA9IHtcbiAqICAgYmFja2dyb3VuZDogdG9Db2xvclN0cmluZyh7IHJlZDogMjU1LCBncmVlbjogMjA1LCBibHVlOiAxMDAgfSksXG4gKiAgIGJhY2tncm91bmQ6IHRvQ29sb3JTdHJpbmcoeyByZWQ6IDI1NSwgZ3JlZW46IDIwNSwgYmx1ZTogMTAwLCBhbHBoYTogMC43MiB9KSxcbiAqICAgYmFja2dyb3VuZDogdG9Db2xvclN0cmluZyh7IGh1ZTogMjQwLCBzYXR1cmF0aW9uOiAxLCBsaWdodG5lc3M6IDAuNSB9KSxcbiAqICAgYmFja2dyb3VuZDogdG9Db2xvclN0cmluZyh7IGh1ZTogMzYwLCBzYXR1cmF0aW9uOiAwLjc1LCBsaWdodG5lc3M6IDAuNCwgYWxwaGE6IDAuNzIgfSksXG4gKiB9XG4gKlxuICogLy8gc3R5bGVkLWNvbXBvbmVudHMgdXNhZ2VcbiAqIGNvbnN0IGRpdiA9IHN0eWxlZC5kaXZgXG4gKiAgIGJhY2tncm91bmQ6ICR7dG9Db2xvclN0cmluZyh7IHJlZDogMjU1LCBncmVlbjogMjA1LCBibHVlOiAxMDAgfSl9O1xuICogICBiYWNrZ3JvdW5kOiAke3RvQ29sb3JTdHJpbmcoeyByZWQ6IDI1NSwgZ3JlZW46IDIwNSwgYmx1ZTogMTAwLCBhbHBoYTogMC43MiB9KX07XG4gKiAgIGJhY2tncm91bmQ6ICR7dG9Db2xvclN0cmluZyh7IGh1ZTogMjQwLCBzYXR1cmF0aW9uOiAxLCBsaWdodG5lc3M6IDAuNSB9KX07XG4gKiAgIGJhY2tncm91bmQ6ICR7dG9Db2xvclN0cmluZyh7IGh1ZTogMzYwLCBzYXR1cmF0aW9uOiAwLjc1LCBsaWdodG5lc3M6IDAuNCwgYWxwaGE6IDAuNzIgfSl9O1xuICogYFxuICpcbiAqIC8vIENTUyBpbiBKUyBPdXRwdXRcbiAqIGVsZW1lbnQge1xuICogICBiYWNrZ3JvdW5kOiBcIiNmZmNkNjRcIjtcbiAqICAgYmFja2dyb3VuZDogXCJyZ2JhKDI1NSwyMDUsMTAwLDAuNzIpXCI7XG4gKiAgIGJhY2tncm91bmQ6IFwiIzAwZlwiO1xuICogICBiYWNrZ3JvdW5kOiBcInJnYmEoMTc5LDI1LDI1LDAuNzIpXCI7XG4gKiB9XG4gKi9cblxuXG5mdW5jdGlvbiB0b0NvbG9yU3RyaW5nKGNvbG9yKSB7XG4gIGlmICh0eXBlb2YgY29sb3IgIT09ICdvYmplY3QnKSB0aHJvdyBuZXcgX2Vycm9ycy5kZWZhdWx0KDgpO1xuICBpZiAoaXNSZ2JhKGNvbG9yKSkgcmV0dXJuICgwLCBfcmdiYS5kZWZhdWx0KShjb2xvcik7XG4gIGlmIChpc1JnYihjb2xvcikpIHJldHVybiAoMCwgX3JnYi5kZWZhdWx0KShjb2xvcik7XG4gIGlmIChpc0hzbGEoY29sb3IpKSByZXR1cm4gKDAsIF9oc2xhLmRlZmF1bHQpKGNvbG9yKTtcbiAgaWYgKGlzSHNsKGNvbG9yKSkgcmV0dXJuICgwLCBfaHNsLmRlZmF1bHQpKGNvbG9yKTtcbiAgdGhyb3cgbmV3IF9lcnJvcnMuZGVmYXVsdCg4KTtcbn1cblxudmFyIF9kZWZhdWx0ID0gdG9Db2xvclN0cmluZztcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBfY3VycnkgPVxuLyojX19QVVJFX18qL1xuX2ludGVyb3BSZXF1aXJlRGVmYXVsdChcbi8qI19fUFVSRV9fKi9cbnJlcXVpcmUoXCIuLi9pbnRlcm5hbEhlbHBlcnMvX2N1cnJ5XCIpKTtcblxudmFyIF9ndWFyZCA9XG4vKiNfX1BVUkVfXyovXG5faW50ZXJvcFJlcXVpcmVEZWZhdWx0KFxuLyojX19QVVJFX18qL1xucmVxdWlyZShcIi4uL2ludGVybmFsSGVscGVycy9fZ3VhcmRcIikpO1xuXG52YXIgX3BhcnNlVG9Ic2wgPVxuLyojX19QVVJFX18qL1xuX2ludGVyb3BSZXF1aXJlRGVmYXVsdChcbi8qI19fUFVSRV9fKi9cbnJlcXVpcmUoXCIuL3BhcnNlVG9Ic2xcIikpO1xuXG52YXIgX3RvQ29sb3JTdHJpbmcgPVxuLyojX19QVVJFX18qL1xuX2ludGVyb3BSZXF1aXJlRGVmYXVsdChcbi8qI19fUFVSRV9fKi9cbnJlcXVpcmUoXCIuL3RvQ29sb3JTdHJpbmdcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfZXh0ZW5kcygpIHsgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9OyByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfVxuXG4vKipcbiAqIFJldHVybnMgYSBzdHJpbmcgdmFsdWUgZm9yIHRoZSBkYXJrZW5lZCBjb2xvci5cbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gU3R5bGVzIGFzIG9iamVjdCB1c2FnZVxuICogY29uc3Qgc3R5bGVzID0ge1xuICogICBiYWNrZ3JvdW5kOiBkYXJrZW4oMC4yLCAnI0ZGQ0Q2NCcpLFxuICogICBiYWNrZ3JvdW5kOiBkYXJrZW4oJzAuMicsICdyZ2JhKDI1NSwyMDUsMTAwLDAuNyknKSxcbiAqIH1cbiAqXG4gKiAvLyBzdHlsZWQtY29tcG9uZW50cyB1c2FnZVxuICogY29uc3QgZGl2ID0gc3R5bGVkLmRpdmBcbiAqICAgYmFja2dyb3VuZDogJHtkYXJrZW4oMC4yLCAnI0ZGQ0Q2NCcpfTtcbiAqICAgYmFja2dyb3VuZDogJHtkYXJrZW4oJzAuMicsICdyZ2JhKDI1NSwyMDUsMTAwLDAuNyknKX07XG4gKiBgXG4gKlxuICogLy8gQ1NTIGluIEpTIE91dHB1dFxuICpcbiAqIGVsZW1lbnQge1xuICogICBiYWNrZ3JvdW5kOiBcIiNmZmJkMzFcIjtcbiAqICAgYmFja2dyb3VuZDogXCJyZ2JhKDI1NSwxODksNDksMC43KVwiO1xuICogfVxuICovXG5mdW5jdGlvbiBkYXJrZW4oYW1vdW50LCBjb2xvcikge1xuICBpZiAoY29sb3IgPT09ICd0cmFuc3BhcmVudCcpIHJldHVybiBjb2xvcjtcbiAgdmFyIGhzbENvbG9yID0gKDAsIF9wYXJzZVRvSHNsLmRlZmF1bHQpKGNvbG9yKTtcbiAgcmV0dXJuICgwLCBfdG9Db2xvclN0cmluZy5kZWZhdWx0KShfZXh0ZW5kcyh7fSwgaHNsQ29sb3IsIHtcbiAgICBsaWdodG5lc3M6ICgwLCBfZ3VhcmQuZGVmYXVsdCkoMCwgMSwgaHNsQ29sb3IubGlnaHRuZXNzIC0gcGFyc2VGbG9hdChhbW91bnQpKVxuICB9KSk7XG59IC8vIHByZXR0aWVyLWlnbm9yZVxuXG5cbnZhciBjdXJyaWVkRGFya2VuID1cbi8qI19fUFVSRV9fKi9cbigwLCBfY3VycnkuZGVmYXVsdFxuLyogOjo8bnVtYmVyIHwgc3RyaW5nLCBzdHJpbmcsIHN0cmluZz4gKi9cbikoZGFya2VuKTtcbnZhciBfZGVmYXVsdCA9IGN1cnJpZWREYXJrZW47XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX3BhcnNlVG9SZ2IgPVxuLyojX19QVVJFX18qL1xuX2ludGVyb3BSZXF1aXJlRGVmYXVsdChcbi8qI19fUFVSRV9fKi9cbnJlcXVpcmUoXCIuL3BhcnNlVG9SZ2JcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG4vKipcbiAqIFJldHVybnMgYSBudW1iZXIgKGZsb2F0KSByZXByZXNlbnRpbmcgdGhlIGx1bWluYW5jZSBvZiBhIGNvbG9yLlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBTdHlsZXMgYXMgb2JqZWN0IHVzYWdlXG4gKiBjb25zdCBzdHlsZXMgPSB7XG4gKiAgIGJhY2tncm91bmQ6IGdldEx1bWluYW5jZSgnI0NDQ0Q2NCcpID49IGdldEx1bWluYW5jZSgnIzAwMDBmZicpID8gJyNDQ0NENjQnIDogJyMwMDAwZmYnLFxuICogICBiYWNrZ3JvdW5kOiBnZXRMdW1pbmFuY2UoJ3JnYmEoNTgsIDEzMywgMjU1LCAxKScpID49IGdldEx1bWluYW5jZSgncmdiYSgyNTUsIDU3LCAxNDksIDEpJykgP1xuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICdyZ2JhKDU4LCAxMzMsIDI1NSwgMSknIDpcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAncmdiYSgyNTUsIDU3LCAxNDksIDEpJyxcbiAqIH1cbiAqXG4gKiAvLyBzdHlsZWQtY29tcG9uZW50cyB1c2FnZVxuICogY29uc3QgZGl2ID0gc3R5bGVkLmRpdmBcbiAqICAgYmFja2dyb3VuZDogJHtnZXRMdW1pbmFuY2UoJyNDQ0NENjQnKSA+PSBnZXRMdW1pbmFuY2UoJyMwMDAwZmYnKSA/ICcjQ0NDRDY0JyA6ICcjMDAwMGZmJ307XG4gKiAgIGJhY2tncm91bmQ6ICR7Z2V0THVtaW5hbmNlKCdyZ2JhKDU4LCAxMzMsIDI1NSwgMSknKSA+PSBnZXRMdW1pbmFuY2UoJ3JnYmEoMjU1LCA1NywgMTQ5LCAxKScpID9cbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAncmdiYSg1OCwgMTMzLCAyNTUsIDEpJyA6XG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3JnYmEoMjU1LCA1NywgMTQ5LCAxKSd9O1xuICpcbiAqIC8vIENTUyBpbiBKUyBPdXRwdXRcbiAqXG4gKiBkaXYge1xuICogICBiYWNrZ3JvdW5kOiBcIiNDQ0NENjRcIjtcbiAqICAgYmFja2dyb3VuZDogXCJyZ2JhKDU4LCAxMzMsIDI1NSwgMSlcIjtcbiAqIH1cbiAqL1xuZnVuY3Rpb24gZ2V0THVtaW5hbmNlKGNvbG9yKSB7XG4gIGlmIChjb2xvciA9PT0gJ3RyYW5zcGFyZW50JykgcmV0dXJuIDA7XG4gIHZhciByZ2JDb2xvciA9ICgwLCBfcGFyc2VUb1JnYi5kZWZhdWx0KShjb2xvcik7XG5cbiAgdmFyIF9PYmplY3Qka2V5cyRtYXAgPSBPYmplY3Qua2V5cyhyZ2JDb2xvcikubWFwKGZ1bmN0aW9uIChrZXkpIHtcbiAgICB2YXIgY2hhbm5lbCA9IHJnYkNvbG9yW2tleV0gLyAyNTU7XG4gICAgcmV0dXJuIGNoYW5uZWwgPD0gMC4wMzkyOCA/IGNoYW5uZWwgLyAxMi45MiA6IE1hdGgucG93KChjaGFubmVsICsgMC4wNTUpIC8gMS4wNTUsIDIuNCk7XG4gIH0pLFxuICAgICAgciA9IF9PYmplY3Qka2V5cyRtYXBbMF0sXG4gICAgICBnID0gX09iamVjdCRrZXlzJG1hcFsxXSxcbiAgICAgIGIgPSBfT2JqZWN0JGtleXMkbWFwWzJdO1xuXG4gIHJldHVybiBwYXJzZUZsb2F0KCgwLjIxMjYgKiByICsgMC43MTUyICogZyArIDAuMDcyMiAqIGIpLnRvRml4ZWQoMykpO1xufVxuXG52YXIgX2RlZmF1bHQgPSBnZXRMdW1pbmFuY2U7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0OyIsImltcG9ydCBnZXRMdW1pbmFuY2UgZnJvbSAncG9saXNoZWQvbGliL2NvbG9yL2dldEx1bWluYW5jZSc7XG5pbXBvcnQgeyBUaGVtZVR5cGUgfSBmcm9tICcuLi90eXBlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZpbmRDb2xvckludmVydCh7IGJsYWNrLCB3aGl0ZSB9OiBUaGVtZVR5cGUsIGNvbG9yOiBzdHJpbmcpIHtcbiAgaWYgKCFjb2xvciB8fCBnZXRMdW1pbmFuY2UoY29sb3IpID4gMC41NSkge1xuICAgIHJldHVybiBibGFjaztcbiAgfVxuICByZXR1cm4gd2hpdGU7XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIF9jdXJyeSA9XG4vKiNfX1BVUkVfXyovXG5faW50ZXJvcFJlcXVpcmVEZWZhdWx0KFxuLyojX19QVVJFX18qL1xucmVxdWlyZShcIi4uL2ludGVybmFsSGVscGVycy9fY3VycnlcIikpO1xuXG52YXIgX2d1YXJkID1cbi8qI19fUFVSRV9fKi9cbl9pbnRlcm9wUmVxdWlyZURlZmF1bHQoXG4vKiNfX1BVUkVfXyovXG5yZXF1aXJlKFwiLi4vaW50ZXJuYWxIZWxwZXJzL19ndWFyZFwiKSk7XG5cbnZhciBfcmdiYSA9XG4vKiNfX1BVUkVfXyovXG5faW50ZXJvcFJlcXVpcmVEZWZhdWx0KFxuLyojX19QVVJFX18qL1xucmVxdWlyZShcIi4vcmdiYVwiKSk7XG5cbnZhciBfcGFyc2VUb1JnYiA9XG4vKiNfX1BVUkVfXyovXG5faW50ZXJvcFJlcXVpcmVEZWZhdWx0KFxuLyojX19QVVJFX18qL1xucmVxdWlyZShcIi4vcGFyc2VUb1JnYlwiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9leHRlbmRzKCkgeyBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07IHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9XG5cbi8qKlxuICogRGVjcmVhc2VzIHRoZSBvcGFjaXR5IG9mIGEgY29sb3IuIEl0cyByYW5nZSBmb3IgdGhlIGFtb3VudCBpcyBiZXR3ZWVuIDAgdG8gMS5cbiAqXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFN0eWxlcyBhcyBvYmplY3QgdXNhZ2VcbiAqIGNvbnN0IHN0eWxlcyA9IHtcbiAqICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnRpemUoMC4xLCAnI2ZmZicpO1xuICogICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudGl6ZSgwLjIsICdoc2woMCwgMCUsIDEwMCUpJyksXG4gKiAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50aXplKCcwLjUnLCAncmdiYSgyNTUsIDAsIDAsIDAuOCknKSxcbiAqIH1cbiAqXG4gKiAvLyBzdHlsZWQtY29tcG9uZW50cyB1c2FnZVxuICogY29uc3QgZGl2ID0gc3R5bGVkLmRpdmBcbiAqICAgYmFja2dyb3VuZDogJHt0cmFuc3BhcmVudGl6ZSgwLjEsICcjZmZmJyl9O1xuICogICBiYWNrZ3JvdW5kOiAke3RyYW5zcGFyZW50aXplKDAuMiwgJ2hzbCgwLCAwJSwgMTAwJSknKX0sXG4gKiAgIGJhY2tncm91bmQ6ICR7dHJhbnNwYXJlbnRpemUoJzAuNScsICdyZ2JhKDI1NSwgMCwgMCwgMC44KScpfSxcbiAqIGBcbiAqXG4gKiAvLyBDU1MgaW4gSlMgT3V0cHV0XG4gKlxuICogZWxlbWVudCB7XG4gKiAgIGJhY2tncm91bmQ6IFwicmdiYSgyNTUsMjU1LDI1NSwwLjkpXCI7XG4gKiAgIGJhY2tncm91bmQ6IFwicmdiYSgyNTUsMjU1LDI1NSwwLjgpXCI7XG4gKiAgIGJhY2tncm91bmQ6IFwicmdiYSgyNTUsMCwwLDAuMylcIjtcbiAqIH1cbiAqL1xuZnVuY3Rpb24gdHJhbnNwYXJlbnRpemUoYW1vdW50LCBjb2xvcikge1xuICBpZiAoY29sb3IgPT09ICd0cmFuc3BhcmVudCcpIHJldHVybiBjb2xvcjtcbiAgdmFyIHBhcnNlZENvbG9yID0gKDAsIF9wYXJzZVRvUmdiLmRlZmF1bHQpKGNvbG9yKTtcbiAgdmFyIGFscGhhID0gdHlwZW9mIHBhcnNlZENvbG9yLmFscGhhID09PSAnbnVtYmVyJyA/IHBhcnNlZENvbG9yLmFscGhhIDogMTtcblxuICB2YXIgY29sb3JXaXRoQWxwaGEgPSBfZXh0ZW5kcyh7fSwgcGFyc2VkQ29sb3IsIHtcbiAgICBhbHBoYTogKDAsIF9ndWFyZC5kZWZhdWx0KSgwLCAxLCAoYWxwaGEgKiAxMDAgLSBwYXJzZUZsb2F0KGFtb3VudCkgKiAxMDApIC8gMTAwKVxuICB9KTtcblxuICByZXR1cm4gKDAsIF9yZ2JhLmRlZmF1bHQpKGNvbG9yV2l0aEFscGhhKTtcbn0gLy8gcHJldHRpZXItaWdub3JlXG5cblxudmFyIGN1cnJpZWRUcmFuc3BhcmVudGl6ZSA9XG4vKiNfX1BVUkVfXyovXG4oMCwgX2N1cnJ5LmRlZmF1bHRcbi8qIDo6PG51bWJlciB8IHN0cmluZywgc3RyaW5nLCBzdHJpbmc+ICovXG4pKHRyYW5zcGFyZW50aXplKTtcbnZhciBfZGVmYXVsdCA9IGN1cnJpZWRUcmFuc3BhcmVudGl6ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7IiwiaW1wb3J0IHsgY3NzIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHRyYW5zcGFyZW50aXplIGZyb20gJ3BvbGlzaGVkL2xpYi9jb2xvci90cmFuc3BhcmVudGl6ZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJveFNoYWRvdyhzaXplOiBzdHJpbmcsIGNvbG9yOiBzdHJpbmcsIGFtb3VudD86IG51bWJlcikge1xuICBjb25zdCBzaGFkb3dDb2xvciA9IGFtb3VudCA/IHRyYW5zcGFyZW50aXplKGFtb3VudCwgY29sb3IpIDogY29sb3I7XG4gIHJldHVybiBjc3NgYm94LXNoYWRvdzogMCAwIDAgJHtzaXplfSAke3NoYWRvd0NvbG9yfTtgO1xufVxuIiwiaW1wb3J0IHsgU2l6ZVR5cGUgfSBmcm9tICcuLi90eXBlcyc7XG5cbnR5cGUgU2l6ZVByb3BzTmFtZVR5cGUgPSAnZm9udC1zaXplJyB8ICdoZWlnaHQnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzZXRTaXplKG5hbWU6IFNpemVQcm9wc05hbWVUeXBlLCBzaXplPzogU2l6ZVR5cGUpIHtcbiAgc3dpdGNoIChzaXplKSB7XG4gICAgY2FzZSAnc21hbGwnOlxuICAgICAgcmV0dXJuIGAke25hbWV9OiAwLjc1cmVtO2A7XG4gICAgY2FzZSAnbWVkaXVtJzpcbiAgICAgIHJldHVybiBgJHtuYW1lfTogMS4yNXJlbTtgO1xuICAgIGNhc2UgJ2xhcmdlJzpcbiAgICAgIHJldHVybiBgJHtuYW1lfTogMS41cmVtO2A7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBgJHtuYW1lfTogMXJlbTtgO1xuICB9XG59XG4iLCJpbXBvcnQgeyBjc3MgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgdHJhbnNwYXJlbnRpemUgZnJvbSAncG9saXNoZWQvbGliL2NvbG9yL3RyYW5zcGFyZW50aXplJztcbmltcG9ydCB7IFRoZW1lVHlwZSwgQ1NTVHlwZSB9IGZyb20gJy4uL3R5cGVzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGlzYWJsZWRDb2xvcih0aGVtZTogVGhlbWVUeXBlKTogQ1NTVHlwZSB7XG4gIGNvbnN0IHRleHRDb2xvciA9IHRyYW5zcGFyZW50aXplKDAuMTUsIHRoZW1lLnRleHREYXJrKTtcbiAgY29uc3QgYmFja0NvbG9yID0gdHJhbnNwYXJlbnRpemUoMC41NSwgdGhlbWUuYm9yZGVyKTtcbiAgcmV0dXJuIGNzc2BcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICAgIGNvbG9yOiAke3RleHRDb2xvcn07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHtiYWNrQ29sb3J9O1xuICBgO1xufVxuIiwiaW1wb3J0IHN0eWxlZCwgeyBjc3MgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgeyBIVE1MQXR0cmlidXRlcyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBkYXJrZW4gZnJvbSAncG9saXNoZWQvbGliL2NvbG9yL2Rhcmtlbic7XG5pbXBvcnQgZmluZENvbG9ySW52ZXJ0IGZyb20gJy4uLy4uL3V0aWxzL2ZpbmRDb2xvckludmVydCc7XG5pbXBvcnQgYm94U2hhZG93IGZyb20gJy4uLy4uL3V0aWxzL2JveFNoYWRvdyc7XG5pbXBvcnQgc2V0U2l6ZSBmcm9tICcuLi8uLi91dGlscy9zZXRTaXplJztcbmltcG9ydCBkaXNhYmxlZENvbG9yIGZyb20gJy4uLy4uL3V0aWxzL2Rpc2FibGVkQ29sb3InO1xuaW1wb3J0IHsgQ29sb3JUeXBlLCBUaGVtZVR5cGUsIFNpemVUeXBlIH0gZnJvbSAnLi4vLi4vdHlwZXMnO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICB0aGVtZTogVGhlbWVUeXBlO1xuICBjb2xvcj86IENvbG9yVHlwZTtcbiAgb3V0bGluZT86IGJvb2xlYW47XG4gIGRpc2FibGVkPzogYm9vbGVhbjtcbn1cblxuZnVuY3Rpb24gc2V0Q29sb3IoeyB0aGVtZSwgY29sb3IsIG91dGxpbmUsIGRpc2FibGVkIH06IFByb3BzKSB7XG4gIGlmIChkaXNhYmxlZCkge1xuICAgIHJldHVybiBkaXNhYmxlZENvbG9yKHRoZW1lKTtcbiAgfVxuICBpZiAoIWNvbG9yKSB7XG4gICAgcmV0dXJuIGNzc2BcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7dGhlbWUud2hpdGV9O1xuICAgICAgYm9yZGVyLWNvbG9yOiAke3RoZW1lLmJvcmRlcn07XG4gICAgICBjb2xvcjogJHt0aGVtZS50ZXh0fTtcblxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGJvcmRlci1jb2xvcjogJHt0aGVtZS5ib3JkZXJIb3Zlcn07XG4gICAgICB9XG5cbiAgICAgICY6YWN0aXZlIHtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAke3RoZW1lLmJvcmRlckFjdGl2ZX07XG4gICAgICB9XG4gICAgYDtcbiAgfVxuICBpZiAoY29sb3IgPT09ICd0ZXh0Jykge1xuICAgIHJldHVybiBjc3NgXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICBjb2xvcjogJHt0aGVtZS50ZXh0fTtcblxuICAgICAgJjpob3ZlcntcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICB9XG4gICAgYDtcbiAgfVxuXG4gIGNvbnN0IHRhcmdldCA9IHRoZW1lW2NvbG9yXSB8fCBjb2xvcjtcbiAgY29uc3QgaW52ZXJ0Q29sb3IgPSBmaW5kQ29sb3JJbnZlcnQodGhlbWUsIHRhcmdldCk7XG4gIGlmIChvdXRsaW5lKSB7XG4gICAgcmV0dXJuIGNzc2BcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgYm9yZGVyLWNvbG9yOiAke3RhcmdldH07XG4gICAgICBjb2xvcjogJHt0YXJnZXR9O1xuXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHt0YXJnZXR9O1xuICAgICAgICBjb2xvcjogJHtpbnZlcnRDb2xvcn07XG4gICAgICB9XG5cbiAgICAgICY6Zm9jdXMge1xuICAgICAgICAke2JveFNoYWRvdygnMC4ycmVtJywgdGFyZ2V0LCAwLjIpfVxuICAgICAgfVxuICAgIGA7XG4gIH1cblxuICByZXR1cm4gY3NzYFxuICAgIGJhY2tncm91bmQtY29sb3I6ICR7dGFyZ2V0fTtcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGNvbG9yOiAke2ludmVydENvbG9yfTtcbiAgICBib3gtc2hhZG93OiBub25lO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICBjb2xvcjogJHtpbnZlcnRDb2xvcn07XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke2RhcmtlbigwLjAyNSwgdGFyZ2V0KX07XG4gICAgfVxuXG4gICAgJjphY3RpdmUge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtkYXJrZW4oMC4wNSwgdGFyZ2V0KX07XG4gICAgfVxuXG4gICAgJjpmb2N1cyB7XG4gICAgICAke2JveFNoYWRvdygnMC4ycmVtJywgdGFyZ2V0LCAwLjIpfVxuICAgIH1cbiAgYDtcbn1cblxuaW50ZXJmYWNlIEJ1dHRvblByb3BzIGV4dGVuZHMgSFRNTEF0dHJpYnV0ZXM8SFRNTEJ1dHRvbkVsZW1lbnQ+IHtcbiAgLyoqIOODnOOCv+ODs+OBruiJsiAqL1xuICBjb2xvcj86IENvbG9yVHlwZTtcbiAgLyoqIOODnOOCv+ODs+OBruOCteOCpOOCuiAqL1xuICBzaXplPzogU2l6ZVR5cGU7XG4gIC8qKiDog4zmma/jgYzpgI/mmI7jgarjg5zjgr/jg7PjgafjgZnjgosgKi9cbiAgb3V0bGluZT86IGJvb2xlYW47XG4gIC8qKiDlhajkvZPluYXjga7jg5zjgr/jg7PjgafoqK3lrpogKi9cbiAgZnVsbD86IGJvb2xlYW47XG59XG5cbmNvbnN0IEJ1dHRvbiA9IHN0eWxlZC5idXR0b248QnV0dG9uUHJvcHM+YFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGFwcGVhcmFuY2U6IG5vbmU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgcGFkZGluZzogMC4zNzVlbSAwLjc1ZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG5cbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYmFja2dyb3VuZC1jb2xvciwgY29sb3IsIGJveC1zaGFkb3c7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDE1MG1zO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XG5cbiAgJHtzZXRDb2xvcn1cbiAgJHsoeyBzaXplIH0pID0+IHNldFNpemUoJ2ZvbnQtc2l6ZScsIHNpemUpfVxuICAkeyh7IGZ1bGwgfSkgPT4gZnVsbCA/ICd3aWR0aDogMTAwJTsnIDogJyd9XG5gO1xuQnV0dG9uLmRpc3BsYXlOYW1lID0gJ0J1dHRvbic7XG5cbmV4cG9ydCBkZWZhdWx0IEJ1dHRvbjtcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuJztcblxuY29uc3QgQnV0dG9uR3JvdXAgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cbiAgJjpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcbiAgfVxuXG4gICR7QnV0dG9ufSB7XG4gICAgbWFyZ2luOiAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG5cbiAgICAmOmZpcnN0LWNoaWxkIHtcbiAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDRweDtcbiAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDRweDtcbiAgICB9XG5cbiAgICAmOm5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgICAgIG1hcmdpbi1sZWZ0OiAtMXB4O1xuICAgIH1cblxuICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNHB4O1xuICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDRweDtcbiAgICB9XG4gIH1cbmA7XG5CdXR0b25Hcm91cC5kaXNwbGF5TmFtZSA9ICdCdXR0b25Hcm91cCc7XG5cbmV4cG9ydCBkZWZhdWx0IEJ1dHRvbkdyb3VwO1xuIiwiaW1wb3J0IHN0eWxlZCwgeyBjc3MgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgeyBTaXplVHlwZSB9IGZyb20gJy4uLy4uL3R5cGVzJztcblxuY29uc3Qgc3RyaXBlZFN0eWxlID0gY3NzYFxuICB0Ym9keSA+IHRyOm50aC1jaGlsZChvZGQpIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMDIpO1xuICB9XG5gO1xuXG5jb25zdCBob3ZlclN0eWxlID0gY3NzYFxuICB0Ym9keSA+IHRyOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMDQpO1xuICB9XG5gO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBzaXplPzogU2l6ZVR5cGU7XG4gIGZ1bGw/OiBib29sZWFuO1xuICBoZWFkZXJTdHlsZT86IGFueTtcbiAgYm9yZGVyZWQ/OiBib29sZWFuO1xuICBib3JkZXJsZXNzPzogYm9vbGVhbjtcbiAgc3RyaXBlZD86IGJvb2xlYW47XG4gIGhvdmVyPzogYm9vbGVhbjtcbn1cblxuY29uc3QgVGFibGUgPSBzdHlsZWQudGFibGU8UHJvcHM+YFxuICBkaXNwbGF5OiBibG9jaztcbiAgJHsoeyBmdWxsIH0pID0+IGZ1bGwgPyBjc3Ngd2lkdGg6IDEwMCU7YCA6ICcnfVxuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuXG4gIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcbiAgLW1zLW92ZXJmbG93LXN0eWxlOiAtbXMtYXV0b2hpZGluZy1zY3JvbGxiYXI7XG5cbiAgdGQsIHRoIHtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgIHBhZGRpbmc6IDAuNzVyZW07XG4gICAgJHsoeyB0aGVtZSwgYm9yZGVyZWQgfSkgPT4gYm9yZGVyZWQgPyBjc3NgXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAke3RoZW1lLmJvcmRlcn07XG4gICAgYCA6ICcnfVxuICAgIGJvcmRlci13aWR0aDogMCAwIDFweDtcbiAgfVxuXG4gIHRoIHsgd2hpdGUtc3BhY2U6IG5vd3JhcDsgfVxuXG4gICR7KHsgc3RyaXBlZCB9KSA9PiBzdHJpcGVkID8gc3RyaXBlZFN0eWxlIDogJyd9XG4gICR7KHsgaG92ZXIgfSkgPT4gaG92ZXIgPyBob3ZlclN0eWxlIDogJyd9XG5cbiAgJHsoeyBoZWFkZXJTdHlsZSB9KSA9PiBoZWFkZXJTdHlsZSA/IGNzc2BcbiAgICB0aCB7XG4gICAgICAke2hlYWRlclN0eWxlfVxuICAgIH1cbiAgYCA6ICcnfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgVGFibGU7XG4iLCJpbXBvcnQgeyBIVE1MQXR0cmlidXRlcyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQsIHsgY3NzIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IGZpbmRDb2xvckludmVydCBmcm9tICcuLi8uLi91dGlscy9maW5kQ29sb3JJbnZlcnQnO1xuaW1wb3J0IHsgQ29sb3JUeXBlIH0gZnJvbSAnLi4vLi4vdHlwZXMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFByb3BzIGV4dGVuZHMgSFRNTEF0dHJpYnV0ZXM8SFRNTERpdkVsZW1lbnQ+IHtcbiAgLyoqIOiJsuaMh+WumiAqL1xuICBjb2xvcj86IENvbG9yVHlwZTtcbiAgLyoqIGJvcmRlcuOCkumdnuihqOekuuOBmeOCiyAqL1xuICBib3JkZXJsZXNzPzogYm9vbGVhbjtcbiAgc3R5bGU/OiBhbnk7XG59XG5cbmZ1bmN0aW9uIHNldENvbG9yKHsgY29sb3IsIHRoZW1lIH06IGFueSkge1xuICBpZiAoIWNvbG9yKSByZXR1cm4ge307XG5cbiAgY29uc3QgdGFyZ2V0ID0gdGhlbWVbY29sb3JdIHx8IGNvbG9yO1xuICBjb25zdCBpbnZlcnRDb2xvciA9IGZpbmRDb2xvckludmVydCh0aGVtZSwgdGFyZ2V0KTtcbiAgcmV0dXJuIGNzc2BiYWNrZ3JvdW5kLWNvbG9yOiAke3RhcmdldH07IGNvbG9yOiAke2ludmVydENvbG9yfTtgO1xufVxuXG5jb25zdCBCb3ggPSBzdHlsZWQuZGl2PFByb3BzPmBcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAkeyh7IGJvcmRlcmxlc3MsIHRoZW1lIH0pID0+IGJvcmRlcmxlc3MgPyBgYCA6IGBib3JkZXI6IDFweCBzb2xpZCAke3RoZW1lLmJvcmRlcn07YH1cbiAgYm94LXNoYWRvdzogMCAxcHggMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjA1KTtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICB3aWR0aDogMTAwJTtcblxuICBtaW4td2lkdGg6IDA7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcblxuICAke3NldENvbG9yfVxuYDtcbkJveC5kaXNwbGF5TmFtZSA9ICdCb3gnO1xuXG5leHBvcnQgZGVmYXVsdCBCb3g7XG4iLCJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCwgSFRNTEF0dHJpYnV0ZXMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBzZXRTaXplIGZyb20gJy4uLy4uL3V0aWxzL3NldFNpemUnO1xuaW1wb3J0IHsgQ29sb3JUeXBlLCBTaXplVHlwZSwgQ1NTVHlwZSB9IGZyb20gJy4uLy4uL3R5cGVzJztcblxuaW50ZXJmYWNlIFByb2dyZXNzUHJvcHMgZXh0ZW5kcyBIVE1MQXR0cmlidXRlczxIVE1MRGl2RWxlbWVudD57XG4gIC8qKiDnj77nirbjga7pgLLmjZcgKi9cbiAgdmFsdWU6IG51bWJlcjtcbiAgLyoqIOmAsuaNl+OBruacgOWkp+WApCAqL1xuICBtYXg6IG51bWJlcjtcbiAgLyoqIOODkOODvOOBruOCteOCpOOCuiAqL1xuICBzaXplPzogU2l6ZVR5cGU7XG4gIC8qKiBzaXpl44KS5L2/44KP44Gq44GE44Go44GN44Gu57im5bmF44KS5oyH5a6a44GZ44KLICovXG4gIGhlaWdodD86IHN0cmluZztcbiAgLyoqIOODkOODvOOBruiJsiAqL1xuICBjb2xvcj86IENvbG9yVHlwZTtcbiAgLyoqIOOCq+OCueOCv+ODoENTU+Wumue+qSAqL1xuICBjc3M/OiBDU1NUeXBlO1xufVxuXG5jb25zdCBXcmFwcGVyID0gc3R5bGVkLmRpdjxQcm9ncmVzc1Byb3BzPmBcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5iYWNrZ3JvdW5kfTtcblxuICAkeyh7IHNpemUgfSkgPT4gc2V0U2l6ZSgnaGVpZ2h0Jywgc2l6ZSl9XG4gICR7KHsgc2l6ZSwgaGVpZ2h0IH0pID0+ICFzaXplICYmIGhlaWdodCA/IGBoZWlnaHQ6ICR7aGVpZ2h0fTtgIDogJyd9XG5cbiAgJiA+IGRpdltyb2xlPVwicHJvZ3Jlc3NiYXJcIl0ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICR7KHsgdmFsdWUsIG1heCB9KSA9PiAodmFsdWUgPT09IG1heCkgPyAnJyA6ICdib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDsgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7J31cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyh7IGNvbG9yLCB0aGVtZSB9KSA9PiAodGhlbWVbY29sb3IhXSB8fCBjb2xvcil9O1xuXG4gICAgd2lsbC1jaGFuZ2U6IHdpZHRoO1xuXG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogd2lkdGg7XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMzUwbXM7XG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKTtcbiAgICB6LWluZGV4OiAxO1xuICB9XG4gICR7KHsgY3NzIH0pID0+IChjc3MgfHwgJycpfVxuYDtcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9ncmVzcyBleHRlbmRzIFB1cmVDb21wb25lbnQ8UHJvZ3Jlc3NQcm9wcz4ge1xuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGNvbG9yOiAncHJpbWFyeScsXG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIGNvbnN0IHsgdmFsdWUsIG1heCB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBwZXJjZW50ID0gTWF0aC5yb3VuZCgodmFsdWUvbWF4KSAqIDEwMCk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxXcmFwcGVyIHsuLi50aGlzLnByb3BzfT5cbiAgICAgICAgPGRpdiByb2xlPVwicHJvZ3Jlc3NiYXJcIiBzdHlsZT17eyB3aWR0aDogYCR7cGVyY2VudCA+IDEwMCA/IDEwMCA6IHBlcmNlbnR9JWAgfX0gPjwvZGl2PlxuICAgICAgPC9XcmFwcGVyPlxuICAgICk7XG4gIH1cbn07XG4iLCJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCwgUmVhY3ROb2RlLCBIVE1MQXR0cmlidXRlcyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQsIHsgY3NzIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgQ1NTVHlwZSB9IGZyb20gJy4uLy4uL3R5cGVzJztcblxuY29uc3QgV3JhcHBlciA9IHN0eWxlZC5kaXY8eyByZXF1aXJlZD86IGJvb2xlYW4sIGNzcz86IENTU1R5cGUgfT5gXG4gIGRpc3BsYXk6IGJsb2NrO1xuICAmOm5vdCg6bGFzdC1jaGlsZCkge1xuICAgIG1hcmdpbi1ib3R0b206IDAuNzVyZW07XG4gIH1cbiAgJHsoeyByZXF1aXJlZCwgdGhlbWUgfSkgPT4gcmVxdWlyZWQgPyBjc3NgXG4gICAgbGFiZWw6OmFmdGVyIHtcbiAgICAgIGNvbnRlbnQ6ICcqJztcbiAgICAgIGNvbG9yOiAke3RoZW1lLnByaW1hcnl9O1xuICAgICAgbWFyZ2luLWxlZnQ6IDAuMzI1cmVtO1xuICAgIH1cbiAgYCA6IHt9fVxuXG4gICR7KHsgY3NzIH0pID0+IGNzcyB8fCB7fX1cbmA7XG5cbmNvbnN0IExhYmVsID0gc3R5bGVkLmxhYmVsYFxuICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS50ZXh0U3Ryb25nfTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMC4zMjVyZW07XG5gO1xuXG5pbnRlcmZhY2UgUHJvcHMgZXh0ZW5kcyBIVE1MQXR0cmlidXRlczxIVE1MRGl2RWxlbWVudD4ge1xuICBsYWJlbD86IHN0cmluZztcbiAgY2hpbGRyZW46IFJlYWN0Tm9kZTtcbiAgcmVxdWlyZWQ/OiBib29sZWFuO1xuICBodG1sRm9yPzogc3RyaW5nO1xuICBjc3M/OiBDU1NUeXBlO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGaWVsZCBleHRlbmRzIFB1cmVDb21wb25lbnQ8UHJvcHM+IHtcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgbGFiZWwsIGNoaWxkcmVuLCBodG1sRm9yLCAuLi5yZXN0IH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8V3JhcHBlciB7Li4ucmVzdH0+XG4gICAgICAgIHtsYWJlbCAmJiAoPExhYmVsIGh0bWxGb3I9e2h0bWxGb3J9PntsYWJlbH08L0xhYmVsPil9XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvV3JhcHBlcj5cbiAgICApO1xuICB9XG59XG4iLCJpbXBvcnQgeyBjc3MgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgeyBDU1NUeXBlIH0gZnJvbSAnLi4vdHlwZXMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW1idXJnZXIoc2l6ZTogc3RyaW5nKTogQ1NTVHlwZSB7XG4gIHJldHVybiBjc3NgXG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGhlaWdodDogJHtzaXplfTtcbiAgICB3aWR0aDogJHtzaXplfTtcblxuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBzcGFuIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGN1cnJlbnRDb2xvcjtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgaGVpZ2h0OiAxcHg7XG4gICAgICBsZWZ0OiBjYWxjKDUwJSAtIDhweCk7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XG4gICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAxMDBtcztcbiAgICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IGJhY2tncm91bmQtY29sb3IsIG9wYWNpdHksIHRyYW5zZm9ybTtcbiAgICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcbiAgICAgIHdpZHRoOiAxNnB4O1xuXG4gICAgICAmOm50aC1jaGlsZCgxKSB7XG4gICAgICAgIHRvcDogY2FsYyg1MCUgLSA2cHgpO1xuICAgICAgfVxuICAgICAgJjpudGgtY2hpbGQoMikge1xuICAgICAgICB0b3A6IGNhbGMoNTAlIC0gMXB4KTtcbiAgICAgIH1cbiAgICAgICY6bnRoLWNoaWxkKDMpIHtcbiAgICAgICAgdG9wOiBjYWxjKDUwJSArIDRweCk7XG4gICAgICB9XG5cbiAgICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKGJsYWNrLCAwLjA1KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmLmFjdGl2ZSBzcGFuIHtcbiAgICAgICY6bnRoLWNoaWxkKDEpIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDVweCkgcm90YXRlKDQ1ZGVnKTtcbiAgICAgIH1cbiAgICAgICY6bnRoLWNoaWxkKDIpIHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgIH1cbiAgICAgICY6bnRoLWNoaWxkKDMpIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01cHgpIHJvdGF0ZSgtNDVkZWcpO1xuICAgICAgfVxuICAgIH1cbiAgYDtcbn1cbiIsImltcG9ydCB7IGNzcyB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7IENTU1R5cGUgfSBmcm9tICcuLi90eXBlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFycm93KGNvbG9yOiBzdHJpbmcsIGRpcmVjdGlvbj86IHN0cmluZyk6IENTU1R5cGUge1xuICByZXR1cm4gY3NzYFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3JkZXI6IDNweCBzb2xpZCAke2NvbG9yfTtcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgYm9yZGVyLXJpZ2h0OiAwO1xuICAgIGJvcmRlci10b3A6IDA7XG4gICAgY29udGVudDogXCIgXCI7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgaGVpZ2h0OiAwLjYyNWVtO1xuICAgIG1hcmdpbi10b3A6IC0wLjYyNWVtO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIHRvcDogNTAlO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xuICAgIHdpZHRoOiAwLjYyNWVtO1xuICBgO1xufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5pbnRlcmZhY2UgTXNnUHJvcHMge1xuICBlcnJvcj86IGJvb2xlYW47XG59XG5cbmNvbnN0IE1lc3NhZ2UgPSBzdHlsZWQuc3BhbjxNc2dQcm9wcz5gXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xuICBjb2xvcjogJHsoeyBlcnJvciwgdGhlbWUgfSkgPT4gZXJyb3IgPyB0aGVtZS5kYW5nZXIgOiB0aGVtZS50ZXh0TGlnaHR9O1xuYDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGVscE1lc3NhZ2UoaGVscD86IHN0cmluZywgZXJyb3I/OiBzdHJpbmcpIHtcbiAgaWYgKGVycm9yKSB7XG4gICAgcmV0dXJuICg8TWVzc2FnZSBlcnJvcj57ZXJyb3J9PC9NZXNzYWdlPik7XG4gIH1cbiAgaWYgKGhlbHApIHtcbiAgICByZXR1cm4gKDxNZXNzYWdlPntoZWxwfTwvTWVzc2FnZT4pO1xuICB9XG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCwgSW5wdXRIVE1MQXR0cmlidXRlcyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQsIHsgY3NzIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgc2V0U2l6ZSB9IGZyb20gJy4uLy4uL3V0aWxzJztcbmltcG9ydCBkaXNhYmxlZENvbG9yIGZyb20gJy4uLy4uL3V0aWxzL2Rpc2FibGVkQ29sb3InO1xuaW1wb3J0IEhlbHBNZXNzYWdlIGZyb20gJy4vSGVscE1lc3NhZ2UnO1xuaW1wb3J0IHsgQ1NTVHlwZSB9IGZyb20gJy4uLy4uL3R5cGVzJztcblxuaW50ZXJmYWNlIFdyYXBwZXJQcm9wcyB7XG4gIG91dGxpbmU/OiBib29sZWFuO1xuICBlcnJvcj86IGFueTtcbiAgY3NzPzogQ1NTVHlwZTtcbn1cblxuaW50ZXJmYWNlIEljb25Qcm9wcyB7XG4gIHJpZ2h0PzogYm9vbGVhbjtcbn1cblxuY29uc3QgcmlnaHRJY29uID0gY3NzYFxuICByaWdodDogMC4zNzVlbTtcbiAgJiB+IGlucHV0IHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxLjU1NWVtICFpbXBvcnRhbnQ7XG4gIH1cbmA7XG5cbmNvbnN0IGxlZnRJY29uID0gY3NzYFxuICBsZWZ0OiAwLjM3NWVtO1xuICAmIH4gaW5wdXQge1xuICAgIHBhZGRpbmctbGVmdDogMS41NWVtICFpbXBvcnRhbnQ7XG4gIH1cbmA7XG5cbmNvbnN0IEljb24gPSBzdHlsZWQuc3BhbjxJY29uUHJvcHM+YFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMC4zNzVlbTtcbiAgYm90dG9tOiAwO1xuICB6LWluZGV4OiAxO1xuICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5ib3JkZXJ9O1xuICAkeyh7IHJpZ2h0IH0pID0+IHJpZ2h0ID8gcmlnaHRJY29uIDogbGVmdEljb259XG5cbiAgc3ZnLCBpbWcge1xuICAgIGhlaWdodDogMWVtO1xuICAgIHdpZHRoOiAxZW07XG4gIH1cbmA7XG5cbmNvbnN0IFdyYXBwZXIgPSBzdHlsZWQuc3BhbjxXcmFwcGVyUHJvcHM+YFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuXG4gIGlucHV0IHtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgYXBwZWFyYW5jZTogbm9uZTtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGNvbG9yOiBpbmhlcml0O1xuXG4gICAgcGFkZGluZzogMC4zNzVlbSAwLjYyNWVtO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICAkeyh7IG91dGxpbmUsIHRoZW1lLCBlcnJvciB9KSA9PiBvdXRsaW5lID9cbiAgICAgIGBib3JkZXI6IDFweCBzb2xpZCAke2Vycm9yID8gdGhlbWUuZGFuZ2VyIDogdGhlbWUuYm9yZGVyfTsgYm9yZGVyLXJhZGl1czogNHB4O2AgOlxuICAgICAgYGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAke2Vycm9yID8gdGhlbWUuZGFuZ2VyIDogdGhlbWUuYm9yZGVyfTsgYm9yZGVyLXJhZGl1czogMDtgXG4gICAgfVxuICAgICR7c2V0U2l6ZSgnZm9udC1zaXplJyl9XG5cbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBib3gtc2hhZG93O1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDE1MG1zO1xuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcblxuICAgICY6Zm9jdXMge1xuICAgICAgYm9yZGVyLWNvbG9yOiAkeyh7IGVycm9yLCB0aGVtZSB9KSA9PiAoZXJyb3IgPyB0aGVtZS5kYW5nZXIgOiB0aGVtZS5wcmltYXJ5KX07XG4gICAgICAkeyh7IHRoZW1lLCBvdXRsaW5lLCBlcnJvciB9KSA9PiBvdXRsaW5lID9cbiAgICAgICAgYGJveC1zaGFkb3c6IDAgMCAwIDAuMWVtICR7ZXJyb3IgPyB0aGVtZS5kYW5nZXIgOiB0aGVtZS5wcmltYXJ5fTtgIDpcbiAgICAgICAgYGJveC1zaGFkb3c6IDAgMC4xZW0gJHtlcnJvciA/IHRoZW1lLmRhbmdlciA6IHRoZW1lLnByaW1hcnl9O2BcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmOmRpc2FibGVkLCBbZGlzYWJsZWRdLCAmOnJlYWRvbmx5IHtcbiAgICAgICR7KHsgdGhlbWUgfSkgPT4gZGlzYWJsZWRDb2xvcih0aGVtZSl9XG4gICAgfVxuXG4gICAgJjpkaXNhYmxlZCwgW2Rpc2FibGVkXSB7XG4gICAgICByZXNpemU6IG5vbmU7XG4gICAgfVxuXG4gICAgJjo6cGxhY2Vob2xkZXIge1xuICAgICAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUucGxhY2Vob2xkZXJ9O1xuICAgIH1cbiAgfVxuXG4gICY6aG92ZXIge1xuICAgIGlucHV0Om5vdCg6ZGlzYWJsZWQpOm5vdCg6Zm9jdXMpOm5vdCg6YWN0aXZlKSB7XG4gICAgICBib3JkZXItY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuYm9yZGVySG92ZXJ9O1xuICAgIH1cbiAgICAke0ljb259IHtcbiAgICAgIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmJvcmRlckhvdmVyfTtcbiAgICB9XG4gIH1cbiAgJHsoeyBjc3MgfSkgPT4gY3NzIHx8ICcnfVxuYDtcblxuaW50ZXJmYWNlIFByb3BzIGV4dGVuZHMgSW5wdXRIVE1MQXR0cmlidXRlczxIVE1MSW5wdXRFbGVtZW50PiB7XG4gIHBsYWNlaG9sZGVyPzogc3RyaW5nO1xuICAvKiogJ3RleHQnIHwgJ251bWJlcicgfCAncGFzc3dvcmQnIHwgJ2VtYWlsJyB8ICd0ZWwnIHwgJ3NlYXJjaCcgKi9cbiAgdHlwZTogJ3RleHQnIHwgJ251bWJlcicgfCAncGFzc3dvcmQnIHwgJ2VtYWlsJyB8ICd0ZWwnIHwgJ3NlYXJjaCc7XG4gIC8qKiDjgqjjg6njg7zjga7nmbrnlJ/mmYLjga7ooajnpLrjg4bjgq3jgrnjg4ggKi9cbiAgZXJyb3I/OiBzdHJpbmcgfCBhbnk7XG4gIC8qKiDmjZXmjYnjg4bjgq3jgrnjg4ggKi9cbiAgaGVscD86IHN0cmluZyB8IGFueTtcbiAgLyoqIOODnOODg+OCr+OCueezu+OBruODh+OCtuOCpOODs+OBp+OBmeOCiyAqL1xuICBvdXRsaW5lPzogYm9vbGVhbjtcbiAgLyoqIOW3puWBtOOBruOCouOCpOOCs+ODsyAqL1xuICBsZWZ0SWNvbj86IGFueTtcbiAgLyoqIOWPs+WBtOOBruOCouOCpOOCs+ODsyAqL1xuICByaWdodEljb24/OiBhbnk7XG4gIC8qKiDjgqvjgrnjgr/jg6BDU1PlrprnvqkgKi9cbiAgY3NzPzogQ1NTVHlwZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGV4dElucHV0IGV4dGVuZHMgUHVyZUNvbXBvbmVudDxQcm9wcz4ge1xuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIHR5cGU6ICd0ZXh0JyxcbiAgICB2YWx1ZTogJycsXG4gICAgbWF4TGVuZ3RoOiAyNTUsXG4gICAgb25DaGFuZ2U6ICgpID0+IHt9LFxuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBjbGFzc05hbWUsIG91dGxpbmUsIGVycm9yLCBoZWxwLCBsZWZ0SWNvbiwgcmlnaHRJY29uLCBzdHlsZSwgY3NzLCAuLi5yZXN0XG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxXcmFwcGVyIGNsYXNzTmFtZT17Y2xhc3NOYW1lfSBvdXRsaW5lPXtvdXRsaW5lfSBlcnJvcj17ZXJyb3J9IHN0eWxlPXtzdHlsZX0gY3NzPXtjc3N9PlxuICAgICAgICB7bGVmdEljb24gJiYgKDxJY29uPntsZWZ0SWNvbn08L0ljb24+KX1cbiAgICAgICAge3JpZ2h0SWNvbiAmJiAoPEljb24gcmlnaHQ+e3JpZ2h0SWNvbn08L0ljb24+KX1cbiAgICAgICAgPGlucHV0IHsuLi5yZXN0fSAvPlxuICAgICAgICB7SGVscE1lc3NhZ2UoaGVscCwgZXJyb3IpfVxuICAgICAgPC9XcmFwcGVyPlxuICAgICk7XG4gIH1cbn1cbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIFRleHRhcmVhSFRNTEF0dHJpYnV0ZXMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBib3hTaGFkb3cgZnJvbSAnLi4vLi4vdXRpbHMvYm94U2hhZG93JztcbmltcG9ydCBzZXRTaXplIGZyb20gJy4uLy4uL3V0aWxzL3NldFNpemUnO1xuaW1wb3J0IGRpc2FibGVkQ29sb3IgZnJvbSAnLi4vLi4vdXRpbHMvZGlzYWJsZWRDb2xvcic7XG5pbXBvcnQgSGVscE1lc3NhZ2UgZnJvbSAnLi9IZWxwTWVzc2FnZSc7XG5pbXBvcnQgeyBDU1NUeXBlIH0gZnJvbSAnLi4vLi4vdHlwZXMnO1xuXG5pbnRlcmZhY2UgV3JhcHBlclByb3BzIHtcbiAgZXJyb3I/OiBzdHJpbmc7XG4gIGNzcz86IENTU1R5cGU7XG59XG5cbmNvbnN0IFdyYXBwZXIgPSBzdHlsZWQuc3BhbjxXcmFwcGVyUHJvcHM+YFxuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gIHRleHRhcmVhIHtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHBhZGRpbmc6IDAuNjI1ZW07XG4gICAgcmVzaXplOiB2ZXJ0aWNhbDtcbiAgICBhcHBlYXJhbmNlOiBub25lO1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBjb2xvcjogaW5oZXJpdDtcblxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAkeyh7IHRoZW1lLCBlcnJvciB9KSA9PiBlcnJvciA/IHRoZW1lLmRhbmdlciA6IHRoZW1lLmJvcmRlcn07XG5cbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBib3gtc2hhZG93O1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMTVzO1xuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcblxuICAgICR7c2V0U2l6ZSgnZm9udC1zaXplJyl9XG5cbiAgICAmOmZvY3VzIHtcbiAgICAgIGJvcmRlci1jb2xvcjogJHsoeyB0aGVtZSwgZXJyb3IgfSkgPT4gZXJyb3IgPyB0aGVtZS5kYW5nZXIgOiB0aGVtZS5wcmltYXJ5fTtcbiAgICAgICR7KHsgdGhlbWUsIGVycm9yIH0pID0+IGJveFNoYWRvdygnMC4xZW0nLCBlcnJvciA/IHRoZW1lLmRhbmdlciA6IHRoZW1lLnByaW1hcnkpfVxuICAgIH1cblxuICAgICY6ZGlzYWJsZWQsIFtkaXNhYmxlZF0sICY6cmVhZG9ubHkge1xuICAgICAgJHsoeyB0aGVtZSB9KSA9PiBkaXNhYmxlZENvbG9yKHRoZW1lKX1cbiAgICB9XG5cbiAgICAmOmRpc2FibGVkLCBbZGlzYWJsZWRdIHtcbiAgICAgIHJlc2l6ZTogbm9uZTtcbiAgICB9XG5cbiAgICAmOjpwbGFjZWhvbGRlciB7XG4gICAgICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5wbGFjZWhvbGRlcn07XG4gICAgfVxuICB9XG5cbiAgJjpob3ZlciB7XG4gICAgdGV4dGFyZWE6bm90KDpkaXNhYmxlZCk6bm90KDpmb2N1cykge1xuICAgICAgYm9yZGVyLWNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmJvcmRlckhvdmVyfTtcbiAgICB9XG4gIH1cbiAgJHsoeyBjc3MgfSkgPT4gY3NzIHx8IHt9fVxuYDtcblxuaW50ZXJmYWNlIFByb3BzIGV4dGVuZHMgVGV4dGFyZWFIVE1MQXR0cmlidXRlczxIVE1MVGV4dEFyZWFFbGVtZW50PiB7XG4gIC8qKiDjgqjjg6njg7zjga7nmbrnlJ/mmYLjga7ooajnpLrjg4bjgq3jgrnjg4ggKi9cbiAgZXJyb3I/OiBzdHJpbmcgfCBhbnk7XG4gIC8qKiDmjZXmjYnjg4bjgq3jgrnjg4ggKi9cbiAgaGVscD86IHN0cmluZyB8IGFueTtcbiAgLyoqIOOCq+OCueOCv+ODoENTU+Wumue+qSAqL1xuICBjc3M/OiBDU1NUeXBlO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXh0YXJlYSBleHRlbmRzIENvbXBvbmVudDxQcm9wcz4ge1xuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIHZhbHVlOiAnJyxcbiAgICBjb2w6IDIsXG4gICAgcm93OiA1LFxuICAgIG9uQ2hhbmdlOiAoKSA9PiB7fSxcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjbGFzc05hbWUsIGhlbHAsIGVycm9yLCBzdHlsZSwgY3NzLCAuLi5yZXN0IH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8V3JhcHBlciBjbGFzc05hbWU9e2NsYXNzTmFtZX0gZXJyb3I9e2Vycm9yfSBzdHlsZT17c3R5bGV9IGNzcz17Y3NzfT5cbiAgICAgICAgPHRleHRhcmVhIHsuLi5yZXN0fSAvPlxuICAgICAgICB7SGVscE1lc3NhZ2UoaGVscCwgZXJyb3IpfVxuICAgICAgPC9XcmFwcGVyPlxuICAgICk7XG4gIH1cbn1cbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIElucHV0SFRNTEF0dHJpYnV0ZXMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdHJhbnNwYXJlbnRpemUgZnJvbSAncG9saXNoZWQvbGliL2NvbG9yL3RyYW5zcGFyZW50aXplJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5jb25zdCBXcmFwcGVyID0gc3R5bGVkLnNwYW5gXG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiBhdXRvO1xuXG4gIGxhYmVsIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgcGFkZGluZy1sZWZ0OiAwLjYyNWVtO1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBsaW5lLWhlaWdodDogMS4yNTtcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNjI1cmVtO1xuXG4gICAgJjpiZWZvcmUsICY6YWZ0ZXIge1xuICAgICAgY29udGVudDogXCJcIjtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB9XG5cbiAgICAmOmFmdGVyIHtcbiAgICAgIHRvcDogMC4yNWVtO1xuICAgICAgbGVmdDogMC4yZW07XG4gICAgICB3aWR0aDogMC44NWVtO1xuICAgICAgaGVpZ2h0OiAwLjVlbTtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG4gICAgICBib3JkZXI6IDAuMWVtIHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgYm9yZGVyLXRvcC1zdHlsZTogbm9uZTtcbiAgICAgIGJvcmRlci1yaWdodC1zdHlsZTogbm9uZTtcbiAgICB9XG5cbiAgICAmOmJlZm9yZSB7XG4gICAgICB3aWR0aDogMS4yNWVtO1xuICAgICAgaGVpZ2h0OiAxLjI1ZW07XG4gICAgICBsZWZ0OjA7XG4gICAgICB0b3A6IDA7XG4gICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuYm9yZGVyfTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgICAgd2lsbC1jaGFuZ2U6IGJhY2tncm91bmQ7XG4gICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDE1MG1zIGVhc2Utb3V0O1xuICAgIH1cbiAgfVxuXG4gIGlucHV0IHtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG5cbiAgICAmOmNoZWNrZWQgKyBsYWJlbCB7XG4gICAgICAmOmJlZm9yZXtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnByaW1hcnl9O1xuICAgICAgICBiYWNrZ3JvdW5kOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnByaW1hcnl9O1xuICAgICAgfVxuICAgICAgJjphZnRlciB7XG4gICAgICAgIGJvcmRlci1jb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS53aGl0ZX07XG4gICAgICB9XG4gICAgfVxuXG4gICAgJjppbmRldGVybWluYXRlICsgbGFiZWwge1xuICAgICAgJjpiZWZvcmUge1xuICAgICAgICBib3JkZXItY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUucHJpbWFyeX07XG4gICAgICAgIGJhY2tncm91bmQ6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUucHJpbWFyeX07XG4gICAgICB9XG4gICAgICAmOmFmdGVyIHtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLndoaXRlfTtcbiAgICAgICAgYm9yZGVyLWxlZnQtc3R5bGU6IG5vbmU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgJjpkaXNhYmxlZCB7XG4gICAgICArIGxhYmVsIHtcbiAgICAgICAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdHJhbnNwYXJlbnRpemUoMC4yNSwgdGhlbWUudGV4dERhcmspfTtcbiAgICAgICAgJjpiZWZvcmUge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICR7KHsgdGhlbWUgfSkgPT4gdHJhbnNwYXJlbnRpemUoMC41NSwgdGhlbWUuYm9yZGVyKX07XG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmJvcmRlcn07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgICY6Y2hlY2tlZCArIGxhYmVsOmFmdGVyIHtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRyYW5zcGFyZW50aXplKDAuMTUsIHRoZW1lLnRleHREYXJrKX07XG4gICAgICB9XG4gICAgfVxuICB9XG5gO1xuXG5pbnRlcmZhY2UgUHJvcHMgZXh0ZW5kcyBJbnB1dEhUTUxBdHRyaWJ1dGVzPEhUTUxJbnB1dEVsZW1lbnQ+IHtcbiAgY2hpbGRyZW4/OiBhbnk7XG4gIGNoZWNrZWQ/OiBib29sZWFuO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaGVja2JveCBleHRlbmRzIENvbXBvbmVudDxQcm9wcz4ge1xuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIG5hbWU6IG51bGwsXG4gICAgY2hpbGRyZW46IG51bGwsXG4gICAgY2hlY2tlZDogZmFsc2UsXG4gICAgb25DaGFuZ2U6ICgpID0+IHt9LFxuICB9O1xuXG4gIGlkID0gYGNoZWNrYm94XyR7dGhpcy5wcm9wcy5uYW1lfWA7XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY2xhc3NOYW1lLCBjaGlsZHJlbiwgLi4ucmVzdCB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPFdyYXBwZXIgY2xhc3NOYW1lPXtjbGFzc05hbWV9ID5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGlkPXt0aGlzLmlkfSB7Li4ucmVzdH0gLz5cbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9e3RoaXMuaWR9PntjaGlsZHJlbn08L2xhYmVsPlxuICAgICAgPC9XcmFwcGVyPlxuICAgICk7XG4gIH1cbn1cbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIFNlbGVjdEhUTUxBdHRyaWJ1dGVzIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVkLCB7IGNzcyB9IGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IGFycm93IGZyb20gXCIuLi8uLi91dGlscy9hcnJvd1wiO1xuaW1wb3J0IHNldFNpemUgZnJvbSBcIi4uLy4uL3V0aWxzL3NldFNpemVcIjtcbmltcG9ydCBIZWxwTWVzc2FnZSBmcm9tIFwiLi9IZWxwTWVzc2FnZVwiO1xuaW1wb3J0IHsgU2l6ZVR5cGUsIENTU1R5cGUgfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcbmltcG9ydCBkaXNhYmxlZENvbG9yIGZyb20gXCIuLi8uLi91dGlscy9kaXNhYmxlZENvbG9yXCI7XG5cbmludGVyZmFjZSBXcmFwcGVyUHJvcHMge1xuICBzaXplPzogU2l6ZVR5cGU7XG4gIG91dGxpbmU/OiBib29sZWFuO1xuICBlcnJvcj86IHN0cmluZztcbiAgZGlzYWJsZWQ/OiBib29sZWFuO1xuICBjc3M/OiBDU1NUeXBlO1xufVxuXG5jb25zdCBJbnB1dFdyYXBwZXIgPSBzdHlsZWQuc3BhbjxXcmFwcGVyUHJvcHM+YFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuXG4gIHNlbGVjdCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGFwcGVhcmFuY2U6IG5vbmU7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIHBhZGRpbmc6IDAuMzc1ZW0gMC42MjVlbTtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxLjM1ZW07XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBjb2xvcjogaW5oZXJpdDtcblxuICAgICR7KHsgc2l6ZSB9KSA9PiBzZXRTaXplKFwiZm9udC1zaXplXCIsIHNpemUpfVxuXG4gICAgYm9yZGVyOiBub25lO1xuICAgICR7KHsgb3V0bGluZSwgdGhlbWUsIGVycm9yIH0pID0+XG4gICAgICBvdXRsaW5lID8gY3NzYFxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAke2Vycm9yID8gdGhlbWUuZGFuZ2VyIDogdGhlbWUuYm9yZGVyfTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgYCA6IGNzc2BcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICR7ZXJyb3IgPyB0aGVtZS5kYW5nZXIgOiB0aGVtZS5ib3JkZXJ9O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgICAgYH1cblxuICAgIHdpbGwtY2hhbmdlOiBib3gtc2hhZG93O1xuICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IGJveC1zaGFkb3c7XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMTUwbXM7XG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xuXG4gICAgJjpmb2N1cyB7XG4gICAgICBib3JkZXItY29sb3I6ICR7KHsgZXJyb3IsIHRoZW1lIH0pID0+IGVycm9yID8gdGhlbWUuZGFuZ2VyIDogdGhlbWUucHJpbWFyeX07XG4gICAgICBib3gtc2hhZG93OiAke1xuICAgICAgICAoeyB0aGVtZSwgb3V0bGluZSwgZXJyb3IgfSkgPT4gb3V0bGluZSA/XG4gICAgICAgICAgKGVycm9yID8gdGhlbWUuZGFuZ2VyIDogdGhlbWUucHJpbWFyeSkgOlxuICAgICAgICAgIChlcnJvciA/IHRoZW1lLmRhbmdlciA6IHRoZW1lLnByaW1hcnkpXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgJjo6LW1zLWV4cGFuZCB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgICAmOi1tb3otZm9jdXNyaW5nIHtcbiAgICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgIHRleHQtc2hhZG93OiAwIDAgMCAjMDAwO1xuICAgIH1cblxuICAgICY6ZGlzYWJsZWQsIFtkaXNhYmxlZF0sICY6cmVhZG9ubHkge1xuICAgICAgJHsoeyB0aGVtZSB9KSA9PiBkaXNhYmxlZENvbG9yKHRoZW1lKX1cbiAgICB9XG5cbiAgICAmOmludmFsaWQge1xuICAgICAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUucGxhY2Vob2xkZXJ9O1xuICAgIH1cbiAgfVxuXG4gICY6OmFmdGVyIHtcbiAgICAkeyh7IHRoZW1lIH0pID0+IGFycm93KHRoZW1lLmJvcmRlcil9XG4gICAgdG9wOiAxLjI1ZW07XG4gICAgcmlnaHQ6IDAuNjI1ZW07XG4gICAgei1pbmRleDogNDtcbiAgfVxuXG4gICR7KHsgdGhlbWUsIGRpc2FibGVkIH0pID0+XG4gICAgZGlzYWJsZWRcbiAgICAgID8ge31cbiAgICAgIDogY3NzYFxuICAgICY6aG92ZXIge1xuICAgICAgc2VsZWN0Om5vdCg6ZGlzYWJsZWQpOm5vdCg6Zm9jdXMpIHtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAke3RoZW1lLmJvcmRlckhvdmVyfTtcbiAgICAgIH1cblxuICAgICAgJjo6YWZ0ZXIge1xuICAgICAgICBib3JkZXItY29sb3I6ICR7dGhlbWUuYm9yZGVySG92ZXJ9O1xuICAgICAgfVxuICAgIH1cbiAgYH1cblxuICAkeyh7IGNzcyB9KSA9PiBjc3MgfHwge319XG5gO1xuXG50eXBlIEl0ZW1UeXBlID1cbiAgfCB7IGlkOiBzdHJpbmcgfCBudW1iZXI7IG5hbWU6IHN0cmluZzsgW2tleTogc3RyaW5nXTogYW55IH1cbiAgfCBzdHJpbmc7XG5cbmludGVyZmFjZSBQcm9wcyBleHRlbmRzIFNlbGVjdEhUTUxBdHRyaWJ1dGVzPEhUTUxTZWxlY3RFbGVtZW50PiB7XG4gIHBsYWNlaG9sZGVyPzogc3RyaW5nO1xuICBvcHRpb25zOiBJdGVtVHlwZVtdO1xuICBvdXRsaW5lPzogYm9vbGVhbjtcbiAgZXJyb3I/OiBzdHJpbmcgfCBhbnk7XG4gIGhlbHA/OiBzdHJpbmcgfCBhbnk7XG4gIGlucHV0U2l6ZT86IFNpemVUeXBlO1xuICByZW5kZXI/OiAobGFiZWw6IHN0cmluZykgPT4gYW55O1xuICBkaXNhYmxlZD86IGJvb2xlYW47XG4gIGNzcz86IENTU1R5cGU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlbGVjdCBleHRlbmRzIENvbXBvbmVudDxQcm9wcz4ge1xuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIG5hbWU6IG51bGwsXG4gICAgdmFsdWU6ICcnLFxuICAgIG9uQ2hhbmdlOiAoKSA9PiB7fSxcbiAgICBvcHRpb25zOiBbXSxcbiAgfTtcblxuICByZW5kZXJMYWJlbCA9IChsYWJlbDogc3RyaW5nKSA9PiB7XG4gICAgaWYgKHRoaXMucHJvcHMucmVuZGVyKSB7XG4gICAgICByZXR1cm4gdGhpcy5wcm9wcy5yZW5kZXIobGFiZWwpO1xuICAgIH1cbiAgICByZXR1cm4gbGFiZWw7XG4gIH1cblxuICByZW5kZXJJdGVtID0gKCkgPT4ge1xuICAgIHJldHVybiB0aGlzLnByb3BzLm9wdGlvbnMubWFwKChpdGVtLCBpZHgpID0+IHtcbiAgICAgIGlmICh0eXBlb2YgaXRlbSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8b3B0aW9uIGtleT17aXRlbX0gdmFsdWU9e2l0ZW19PlxuICAgICAgICAgICAge3RoaXMucmVuZGVyTGFiZWwoaXRlbSl9XG4gICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICBjb25zdCB7IGlkLCBuYW1lIH0gPSBpdGVtO1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPG9wdGlvbiBrZXk9e2Ake2lkfV8ke2lkeH1gfSB2YWx1ZT17aWR9PlxuICAgICAgICAgIHt0aGlzLnJlbmRlckxhYmVsKG5hbWUpfVxuICAgICAgICA8L29wdGlvbj5cbiAgICAgICk7XG4gICAgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgY3NzLFxuICAgICAgY2xhc3NOYW1lLFxuICAgICAgaW5wdXRTaXplLFxuICAgICAgb3V0bGluZSxcbiAgICAgIG9wdGlvbnMsXG4gICAgICBlcnJvcixcbiAgICAgIGhlbHAsXG4gICAgICBwbGFjZWhvbGRlcixcbiAgICAgIGRpc2FibGVkLFxuICAgICAgLi4ucmVzdFxuICAgIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxJbnB1dFdyYXBwZXJcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XG4gICAgICAgIHNpemU9e2lucHV0U2l6ZX1cbiAgICAgICAgb3V0bGluZT17b3V0bGluZX1cbiAgICAgICAgZXJyb3I9e2Vycm9yfVxuICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICAgIGNzcz17Y3NzfVxuICAgICAgPlxuICAgICAgICA8c2VsZWN0IHsuLi5yZXN0fSBkaXNhYmxlZD17ZGlzYWJsZWR9IHJlcXVpcmVkPXtCb29sZWFuKHBsYWNlaG9sZGVyKX0+XG4gICAgICAgICAge3BsYWNlaG9sZGVyICYmIChcbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj5cbiAgICAgICAgICAgICAge3BsYWNlaG9sZGVyfVxuICAgICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICAgKX1cbiAgICAgICAgICB7dGhpcy5yZW5kZXJJdGVtKCl9XG4gICAgICAgIDwvc2VsZWN0PlxuICAgICAgICB7SGVscE1lc3NhZ2UoaGVscCwgZXJyb3IpfVxuICAgICAgPC9JbnB1dFdyYXBwZXI+XG4gICAgKTtcbiAgfVxufVxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgSW5wdXRIVE1MQXR0cmlidXRlcyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB0cmFuc3BhcmVudGl6ZSBmcm9tICdwb2xpc2hlZC9saWIvY29sb3IvdHJhbnNwYXJlbnRpemUnO1xuaW1wb3J0IHN0eWxlZCwgeyBjc3MgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgeyBDb2xvclR5cGUgfSBmcm9tICcuLi8uLi90eXBlcyc7XG5cbmNvbnN0IFJhZGlvTGFiZWwgPSBjc3NgXG4gIGxhYmVsIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgcGFkZGluZy1sZWZ0OiAxLjYyNWVtO1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBsaW5lLWhlaWdodDogMS4yNTtcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNjI1cmVtO1xuXG4gICAgJjpiZWZvcmUsICY6YWZ0ZXIge1xuICAgICAgY29udGVudDogXCJcIjtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB9XG5cbiAgICAmOmFmdGVyIHtcbiAgICAgIHRvcDogMC4zNzVlbTtcbiAgICAgIGxlZnQ6IDAuMzc1ZW07XG4gICAgICB3aWR0aDogMC41ZW07XG4gICAgICBoZWlnaHQ6IDAuNWVtO1xuICAgICAgYmFja2dyb3VuZDogJHsoeyB0aGVtZSB9OiBhbnkpID0+IHRoZW1lLnByaW1hcnl9O1xuICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcblxuICAgICAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybTtcbiAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxNTBtcyBlYXNlLW91dDtcbiAgICB9XG5cbiAgICAmOmJlZm9yZSB7XG4gICAgICB3aWR0aDogMS4yNWVtO1xuICAgICAgaGVpZ2h0OiAxLjI1ZW07XG4gICAgICBsZWZ0OjA7XG4gICAgICB0b3A6IDA7XG4gICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgIGJvcmRlcjogMC4xZW0gc29saWQgJHsoeyB0aGVtZSB9OiBhbnkpID0+IHRoZW1lLmJvcmRlcn07XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG5cbiAgICAgIHdpbGwtY2hhbmdlOiBiYWNrZ3JvdW5kO1xuICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAxNTBtcyBlYXNlLW91dDtcbiAgICB9XG4gIH1cblxuICBpbnB1dCB7XG4gICAgZGlzcGxheTogbm9uZTtcblxuICAgICY6Y2hlY2tlZCB7XG4gICAgICArIGxhYmVsOmJlZm9yZSB7XG4gICAgICAgIGJvcmRlci1jb2xvcjogJHsoeyB0aGVtZSB9OiBhbnkpID0+IHRoZW1lLnByaW1hcnl9O1xuICAgICAgfVxuICAgICAgKyBsYWJlbDphZnRlcntcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmOmRpc2FibGVkIHtcbiAgICAgICsgbGFiZWwge1xuICAgICAgICBjb2xvcjogJHsoeyB0aGVtZSB9OiBhbnkpID0+IHRyYW5zcGFyZW50aXplKDAuMjUsIHRoZW1lLnRleHREYXJrKX07XG4gICAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAkeyh7IHRoZW1lIH06IGFueSkgPT4gdHJhbnNwYXJlbnRpemUoMC41NSwgdGhlbWUuYm9yZGVyKX07XG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiAkeyh7IHRoZW1lIH06IGFueSkgPT4gdGhlbWUuYm9yZGVyfTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgJjpjaGVja2VkICsgbGFiZWw6YWZ0ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiAkeyh7IHRoZW1lIH06IGFueSkgPT4gdHJhbnNwYXJlbnRpemUoMC4xNSwgdGhlbWUudGV4dERhcmspfTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbmA7XG5cbmNvbnN0IEJ1dHRvbkxhYmVsID0gY3NzYFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcblxuICBsYWJlbCB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHBhZGRpbmc6IDAuMzc1ZW0gMC43NWVtO1xuICAgIGhlaWdodDogMi4yNWVtO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICR7KHsgdGhlbWUgfTogYW55KSA9PiB0aGVtZS5ib3JkZXJ9O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcblxuICAgICY6aG92ZXIge1xuICAgICAgYm9yZGVyLWNvbG9yOiAkeyh7IHRoZW1lIH06IGFueSkgPT4gdGhlbWUuYm9yZGVySG92ZXJ9O1xuICAgIH1cbiAgfVxuXG4gIGlucHV0IHtcbiAgICBkaXNwbGF5OiBub25lO1xuXG4gICAgJjpjaGVja2VkICsgbGFiZWwge1xuICAgICAgei1pbmRleDogMTtcbiAgICAgIGJvcmRlci1jb2xvcjogJHsoeyB0aGVtZSB9OiBhbnkpID0+IHRoZW1lLnByaW1hcnl9O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHsoeyB0aGVtZSB9OiBhbnkpID0+IHRyYW5zcGFyZW50aXplKDAuNTUsIHRoZW1lLnByaW1hcnkpfTtcbiAgICB9XG5cbiAgICAmOmRpc2FibGVkIHtcbiAgICAgICsgbGFiZWwge1xuICAgICAgICBjdXJzb3I6IGRlZmF1bHQ7XG4gICAgICAgIGNvbG9yOiAkeyh7IHRoZW1lIH06IGFueSkgPT4gdHJhbnNwYXJlbnRpemUoMC4yNSwgdGhlbWUudGV4dERhcmspfTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHsoeyB0aGVtZSB9OiBhbnkpID0+IHRyYW5zcGFyZW50aXplKDAuNTUsIHRoZW1lLmJvcmRlcil9O1xuICAgICAgICBib3JkZXItY29sb3I6ICR7KHsgdGhlbWUgfTogYW55KSA9PiB0aGVtZS5ib3JkZXJ9O1xuICAgICAgfVxuXG4gICAgICAmOmNoZWNrZWQgKyBsYWJlbCB7XG4gICAgICAgIGJvcmRlci1jb2xvcjogJHsoeyB0aGVtZSB9OiBhbnkpID0+IHRoZW1lLnRleHREYXJrfTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHsoeyB0aGVtZSB9OiBhbnkpID0+IHRyYW5zcGFyZW50aXplKDAuNjUsIHRoZW1lLnRleHREYXJrKX07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgJiArICYge1xuICAgIG1hcmdpbi1sZWZ0OiAtMXB4O1xuICB9XG5cbiAgJjpmaXJzdC1jaGlsZCBsYWJlbCB7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNHB4O1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDRweDtcbiAgfVxuXG4gICY6bGFzdC1jaGlsZCBsYWJlbCB7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDRweDtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNHB4O1xuICB9XG5gO1xuXG5cbmNvbnN0IFdyYXBwZXIgPSBzdHlsZWQuc3Bhbjx7IGJ1dHRvbjogYm9vbGVhbiwgY29sb3I/OiBDb2xvclR5cGUgfT5gXG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiBhdXRvO1xuXG4gICR7KHsgYnV0dG9uIH0pID0+IGJ1dHRvbiA/IEJ1dHRvbkxhYmVsIDogUmFkaW9MYWJlbH1cbmA7XG5cbmludGVyZmFjZSBQcm9wcyBleHRlbmRzIElucHV0SFRNTEF0dHJpYnV0ZXM8SFRNTElucHV0RWxlbWVudD4ge1xuICB2YWx1ZTogc3RyaW5nIHwgbnVtYmVyO1xuICBjaGlsZHJlbj86IGFueTtcbiAgY2hlY2tlZD86IGJvb2xlYW47XG4gIGJ1dHRvbj86IGJvb2xlYW47XG4gIGNvbG9yPzogQ29sb3JUeXBlO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSYWRpbyBleHRlbmRzIENvbXBvbmVudDxQcm9wcz4ge1xuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIG5hbWU6IG51bGwsXG4gICAgY2hpbGRyZW46IG51bGwsXG4gICAgY2hlY2tlZDogZmFsc2UsXG4gICAgYnV0dG9uOiBmYWxzZSxcbiAgICBvbkNoYW5nZTogKCkgPT4ge30sXG4gIH07XG5cbiAgaWQgPSBgcmFkaW9fJHt0aGlzLnByb3BzLm5hbWV9OiR7dGhpcy5wcm9wcy52YWx1ZX1gO1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNsYXNzTmFtZSwgY2hpbGRyZW4sIGJ1dHRvbiwgY29sb3IsIHN0eWxlLCAuLi5yZXN0IH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8V3JhcHBlciBjbGFzc05hbWU9e2NsYXNzTmFtZX0gYnV0dG9uPXtidXR0b24hfSBjb2xvcj17Y29sb3J9IHN0eWxlPXtzdHlsZX0+XG4gICAgICAgIDxpbnB1dCBpZD17dGhpcy5pZH0gdHlwZT1cInJhZGlvXCIgey4uLnJlc3R9IC8+XG4gICAgICAgIDxsYWJlbCBodG1sRm9yPXt0aGlzLmlkfT57Y2hpbGRyZW59PC9sYWJlbD5cbiAgICAgIDwvV3JhcHBlcj5cbiAgICApO1xuICB9XG59XG4iLCIvKiB0c2xpbnQ6ZGlzYWJsZSBtYXgtbGluZS1sZW5ndGggKi9cbmltcG9ydCBSZWFjdCwgeyBTVkdBdHRyaWJ1dGVzIH0gZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHByb3ZlZChwcm9wczogU1ZHQXR0cmlidXRlczxTVkdTVkdFbGVtZW50Pikge1xuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgd2lkdGg9XCIzMFwiXG4gICAgICBoZWlnaHQ9XCIzMFwiXG4gICAgICB2aWV3Qm94PVwiMCAwIDMwIDMwXCJcbiAgICAgIHsuLi5wcm9wc31cbiAgICA+XG4gICAgICA8ZyB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTgwIC0yMTUpXCI+XG4gICAgICAgIDxnIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgxNyAzOSlcIj5cbiAgICAgICAgICA8ZyB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoNjMgMTc2KVwiIGZpbGw9XCJub25lXCI+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICBkPVwiTSAxNSAyOSBDIDExLjI2MDQ3MDM5MDMxOTgyIDI5IDcuNzQ0NzYwMDM2NDY4NTA2IDI3LjU0Mzc1MDc2MjkzOTQ1IDUuMTAwNTEwMTIwMzkxODQ2IDI0Ljg5OTQ5MDM1NjQ0NTMxIEMgMi40NTYyNDk5NTIzMTYyODQgMjIuMjU1MjM5NDg2Njk0MzQgMSAxOC43Mzk1MzA1NjMzNTQ0OSAxIDE1IEMgMSAxMS4yNjA0NzAzOTAzMTk4MiAyLjQ1NjI0OTk1MjMxNjI4NCA3Ljc0NDc2MDAzNjQ2ODUwNiA1LjEwMDUxMDEyMDM5MTg0NiA1LjEwMDUxMDEyMDM5MTg0NiBDIDcuNzQ0NzYwMDM2NDY4NTA2IDIuNDU2MjQ5OTUyMzE2Mjg0IDExLjI2MDQ3MDM5MDMxOTgyIDEgMTUgMSBDIDE4LjczOTUzMDU2MzM1NDQ5IDEgMjIuMjU1MjM5NDg2Njk0MzQgMi40NTYyNDk5NTIzMTYyODQgMjQuODk5NDkwMzU2NDQ1MzEgNS4xMDA1MTAxMjAzOTE4NDYgQyAyNy41NDM3NTA3NjI5Mzk0NSA3Ljc0NDc2MDAzNjQ2ODUwNiAyOSAxMS4yNjA0NzAzOTAzMTk4MiAyOSAxNSBDIDI5IDE4LjczOTUzMDU2MzM1NDQ5IDI3LjU0Mzc1MDc2MjkzOTQ1IDIyLjI1NTIzOTQ4NjY5NDM0IDI0Ljg5OTQ5MDM1NjQ0NTMxIDI0Ljg5OTQ5MDM1NjQ0NTMxIEMgMjIuMjU1MjM5NDg2Njk0MzQgMjcuNTQzNzUwNzYyOTM5NDUgMTguNzM5NTMwNTYzMzU0NDkgMjkgMTUgMjkgWlwiXG4gICAgICAgICAgICAgIHN0cm9rZT1cIm5vbmVcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgIGQ9XCJNIDE1IDIgQyAxMS41Mjc1NzA3MjQ0ODczIDIgOC4yNjI5OTA5NTE1MzgwODYgMy4zNTIyMzk2MDg3NjQ2NDggNS44MDc2MDk1NTgxMDU0NjkgNS44MDc2MDk1NTgxMDU0NjkgQyAzLjM1MjIzOTYwODc2NDY0OCA4LjI2Mjk5MDk1MTUzODA4NiAyIDExLjUyNzU3MDcyNDQ4NzMgMiAxNSBDIDIgMTguNDcyNDMxMTgyODYxMzMgMy4zNTIyMzk2MDg3NjQ2NDggMjEuNzM3MDEwOTU1ODEwNTUgNS44MDc2MDk1NTgxMDU0NjkgMjQuMTkyMzkwNDQxODk0NTMgQyA4LjI2Mjk5MDk1MTUzODA4NiAyNi42NDc3NjAzOTEyMzUzNSAxMS41Mjc1NzA3MjQ0ODczIDI4IDE1IDI4IEMgMTguNDcyNDMxMTgyODYxMzMgMjggMjEuNzM3MDEwOTU1ODEwNTUgMjYuNjQ3NzYwMzkxMjM1MzUgMjQuMTkyMzkwNDQxODk0NTMgMjQuMTkyMzkwNDQxODk0NTMgQyAyNi42NDc3NjAzOTEyMzUzNSAyMS43MzcwMTA5NTU4MTA1NSAyOCAxOC40NzI0MzExODI4NjEzMyAyOCAxNSBDIDI4IDExLjUyNzU3MDcyNDQ4NzMgMjYuNjQ3NzYwMzkxMjM1MzUgOC4yNjI5OTA5NTE1MzgwODYgMjQuMTkyMzkwNDQxODk0NTMgNS44MDc2MDk1NTgxMDU0NjkgQyAyMS43MzcwMTA5NTU4MTA1NSAzLjM1MjIzOTYwODc2NDY0OCAxOC40NzI0MzExODI4NjEzMyAyIDE1IDIgTSAxNSAwIEMgMjMuMjg0MjY5MzMyODg1NzQgMCAzMCA2LjcxNTczMDY2NzExNDI1OCAzMCAxNSBDIDMwIDIzLjI4NDI2OTMzMjg4NTc0IDIzLjI4NDI2OTMzMjg4NTc0IDMwIDE1IDMwIEMgNi43MTU3MzA2NjcxMTQyNTggMzAgMCAyMy4yODQyNjkzMzI4ODU3NCAwIDE1IEMgMCA2LjcxNTczMDY2NzExNDI1OCA2LjcxNTczMDY2NzExNDI1OCAwIDE1IDAgWlwiXG4gICAgICAgICAgICAgIHN0cm9rZT1cIm5vbmVcIlxuICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9nPlxuICAgICAgICA8L2c+XG4gICAgICAgIDxwYXRoXG4gICAgICAgICAgZD1cIk04LjkyNSwxNS44NzEsNS4wNDcsMTEuODg2LDMuNDEsMTMuNDEsOSwxOSwyMC41NjIsNy40NjdsLTEuNy0xLjU5NVpcIlxuICAgICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSg4Mi41OSAyMTcuNTk1KVwiXG4gICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgIC8+XG4gICAgICA8L2c+XG4gICAgPC9zdmc+XG4gICk7XG59XG4iLCIvKiB0c2xpbnQ6ZGlzYWJsZSBtYXgtbGluZS1sZW5ndGggKi9cbmltcG9ydCBSZWFjdCwgeyBTVkdBdHRyaWJ1dGVzIH0gZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDaGV2cm9uTGVmdFJvdW5kKHByb3BzOiBTVkdBdHRyaWJ1dGVzPFNWR1NWR0VsZW1lbnQ+KSB7XG4gIHJldHVybiAoXG4gICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIzMFwiIGhlaWdodD1cIjMwXCIgdmlld0JveD1cIjAgMCAzMCAzMFwiIHsuLi5wcm9wc30+XG4gICAgICA8ZyB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTM2IC0zNilcIj5cbiAgICAgICAgPGcgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDM2IDM2KVwiIGZpbGw9XCJub25lXCI+XG4gICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgIGQ9XCJNIDE1IDI5IEMgMTEuMjYwNDcwMzkwMzE5ODIgMjkgNy43NDQ3NjAwMzY0Njg1MDYgMjcuNTQzNzUwNzYyOTM5NDUgNS4xMDA1MTAxMjAzOTE4NDYgMjQuODk5NDkwMzU2NDQ1MzEgQyAyLjQ1NjI0OTk1MjMxNjI4NCAyMi4yNTUyMzk0ODY2OTQzNCAxIDE4LjczOTUzMDU2MzM1NDQ5IDEgMTUgQyAxIDExLjI2MDQ3MDM5MDMxOTgyIDIuNDU2MjQ5OTUyMzE2Mjg0IDcuNzQ0NzYwMDM2NDY4NTA2IDUuMTAwNTEwMTIwMzkxODQ2IDUuMTAwNTEwMTIwMzkxODQ2IEMgNy43NDQ3NjAwMzY0Njg1MDYgMi40NTYyNDk5NTIzMTYyODQgMTEuMjYwNDcwMzkwMzE5ODIgMSAxNSAxIEMgMTguNzM5NTMwNTYzMzU0NDkgMSAyMi4yNTUyMzk0ODY2OTQzNCAyLjQ1NjI0OTk1MjMxNjI4NCAyNC44OTk0OTAzNTY0NDUzMSA1LjEwMDUxMDEyMDM5MTg0NiBDIDI3LjU0Mzc1MDc2MjkzOTQ1IDcuNzQ0NzYwMDM2NDY4NTA2IDI5IDExLjI2MDQ3MDM5MDMxOTgyIDI5IDE1IEMgMjkgMTguNzM5NTMwNTYzMzU0NDkgMjcuNTQzNzUwNzYyOTM5NDUgMjIuMjU1MjM5NDg2Njk0MzQgMjQuODk5NDkwMzU2NDQ1MzEgMjQuODk5NDkwMzU2NDQ1MzEgQyAyMi4yNTUyMzk0ODY2OTQzNCAyNy41NDM3NTA3NjI5Mzk0NSAxOC43Mzk1MzA1NjMzNTQ0OSAyOSAxNSAyOSBaXCJcbiAgICAgICAgICAgIHN0cm9rZT1cIm5vbmVcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgIGQ9XCJNIDE1IDIgQyAxMS41Mjc1NzA3MjQ0ODczIDIgOC4yNjI5OTA5NTE1MzgwODYgMy4zNTIyMzk2MDg3NjQ2NDggNS44MDc2MDk1NTgxMDU0NjkgNS44MDc2MDk1NTgxMDU0NjkgQyAzLjM1MjIzOTYwODc2NDY0OCA4LjI2Mjk5MDk1MTUzODA4NiAyIDExLjUyNzU3MDcyNDQ4NzMgMiAxNSBDIDIgMTguNDcyNDMxMTgyODYxMzMgMy4zNTIyMzk2MDg3NjQ2NDggMjEuNzM3MDEwOTU1ODEwNTUgNS44MDc2MDk1NTgxMDU0NjkgMjQuMTkyMzkwNDQxODk0NTMgQyA4LjI2Mjk5MDk1MTUzODA4NiAyNi42NDc3NjAzOTEyMzUzNSAxMS41Mjc1NzA3MjQ0ODczIDI4IDE1IDI4IEMgMTguNDcyNDMxMTgyODYxMzMgMjggMjEuNzM3MDEwOTU1ODEwNTUgMjYuNjQ3NzYwMzkxMjM1MzUgMjQuMTkyMzkwNDQxODk0NTMgMjQuMTkyMzkwNDQxODk0NTMgQyAyNi42NDc3NjAzOTEyMzUzNSAyMS43MzcwMTA5NTU4MTA1NSAyOCAxOC40NzI0MzExODI4NjEzMyAyOCAxNSBDIDI4IDExLjUyNzU3MDcyNDQ4NzMgMjYuNjQ3NzYwMzkxMjM1MzUgOC4yNjI5OTA5NTE1MzgwODYgMjQuMTkyMzkwNDQxODk0NTMgNS44MDc2MDk1NTgxMDU0NjkgQyAyMS43MzcwMTA5NTU4MTA1NSAzLjM1MjIzOTYwODc2NDY0OCAxOC40NzI0MzExODI4NjEzMyAyIDE1IDIgTSAxNSAwIEMgMjMuMjg0MjY5MzMyODg1NzQgMCAzMCA2LjcxNTczMDY2NzExNDI1OCAzMCAxNSBDIDMwIDIzLjI4NDI2OTMzMjg4NTc0IDIzLjI4NDI2OTMzMjg4NTc0IDMwIDE1IDMwIEMgNi43MTU3MzA2NjcxMTQyNTggMzAgMCAyMy4yODQyNjkzMzI4ODU3NCAwIDE1IEMgMCA2LjcxNTczMDY2NzExNDI1OCA2LjcxNTczMDY2NzExNDI1OCAwIDE1IDAgWlwiXG4gICAgICAgICAgICBzdHJva2U9XCJub25lXCJcbiAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZz5cbiAgICAgICAgPGcgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC0yMDcgLTIxMzYpXCI+XG4gICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgIGQ9XCJNMTgxMS4xODIsNDM2Mi4zNDJsLTcuNTY3LDYuNzMxLDcuNTY3LDYuMlwiXG4gICAgICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTE1NTAuMTE2IC0yMTgxLjg0MilcIlxuICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAgIHN0cm9rZVdpZHRoPVwiMlwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9nPlxuICAgICAgPC9nPlxuICAgIDwvc3ZnPlxuICApO1xufVxuIiwiLyogdHNsaW50OmRpc2FibGUgbWF4LWxpbmUtbGVuZ3RoICovXG5pbXBvcnQgUmVhY3QsIHsgU1ZHQXR0cmlidXRlcyB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDaGV2cm9uUmlnaHRSb3VuZChwcm9wczogU1ZHQXR0cmlidXRlczxTVkdTVkdFbGVtZW50Pikge1xuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgd2lkdGg9XCIzMFwiXG4gICAgICBoZWlnaHQ9XCIzMFwiXG4gICAgICB2aWV3Qm94PVwiMCAwIDMwIDMwXCJcbiAgICAgIHsuLi5wcm9wc31cbiAgICA+XG4gICAgICA8ZyB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoOTMgMjA2KSByb3RhdGUoMTgwKVwiPlxuICAgICAgICA8ZyB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoNjMgMTc2KVwiIGZpbGw9XCJub25lXCI+XG4gICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgIGQ9XCJNIDE1IDI5IEMgMTEuMjYwNDcwMzkwMzE5ODIgMjkgNy43NDQ3NjAwMzY0Njg1MDYgMjcuNTQzNzUwNzYyOTM5NDUgNS4xMDA1MTAxMjAzOTE4NDYgMjQuODk5NDkwMzU2NDQ1MzEgQyAyLjQ1NjI0OTk1MjMxNjI4NCAyMi4yNTUyMzk0ODY2OTQzNCAxIDE4LjczOTUzMDU2MzM1NDQ5IDEgMTUgQyAxIDExLjI2MDQ3MDM5MDMxOTgyIDIuNDU2MjQ5OTUyMzE2Mjg0IDcuNzQ0NzYwMDM2NDY4NTA2IDUuMTAwNTEwMTIwMzkxODQ2IDUuMTAwNTEwMTIwMzkxODQ2IEMgNy43NDQ3NjAwMzY0Njg1MDYgMi40NTYyNDk5NTIzMTYyODQgMTEuMjYwNDcwMzkwMzE5ODIgMSAxNSAxIEMgMTguNzM5NTMwNTYzMzU0NDkgMSAyMi4yNTUyMzk0ODY2OTQzNCAyLjQ1NjI0OTk1MjMxNjI4NCAyNC44OTk0OTAzNTY0NDUzMSA1LjEwMDUxMDEyMDM5MTg0NiBDIDI3LjU0Mzc1MDc2MjkzOTQ1IDcuNzQ0NzYwMDM2NDY4NTA2IDI5IDExLjI2MDQ3MDM5MDMxOTgyIDI5IDE1IEMgMjkgMTguNzM5NTMwNTYzMzU0NDkgMjcuNTQzNzUwNzYyOTM5NDUgMjIuMjU1MjM5NDg2Njk0MzQgMjQuODk5NDkwMzU2NDQ1MzEgMjQuODk5NDkwMzU2NDQ1MzEgQyAyMi4yNTUyMzk0ODY2OTQzNCAyNy41NDM3NTA3NjI5Mzk0NSAxOC43Mzk1MzA1NjMzNTQ0OSAyOSAxNSAyOSBaXCJcbiAgICAgICAgICAgIHN0cm9rZT1cIm5vbmVcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgIGQ9XCJNIDE1IDIgQyAxMS41Mjc1NzA3MjQ0ODczIDIgOC4yNjI5OTA5NTE1MzgwODYgMy4zNTIyMzk2MDg3NjQ2NDggNS44MDc2MDk1NTgxMDU0NjkgNS44MDc2MDk1NTgxMDU0NjkgQyAzLjM1MjIzOTYwODc2NDY0OCA4LjI2Mjk5MDk1MTUzODA4NiAyIDExLjUyNzU3MDcyNDQ4NzMgMiAxNSBDIDIgMTguNDcyNDMxMTgyODYxMzMgMy4zNTIyMzk2MDg3NjQ2NDggMjEuNzM3MDEwOTU1ODEwNTUgNS44MDc2MDk1NTgxMDU0NjkgMjQuMTkyMzkwNDQxODk0NTMgQyA4LjI2Mjk5MDk1MTUzODA4NiAyNi42NDc3NjAzOTEyMzUzNSAxMS41Mjc1NzA3MjQ0ODczIDI4IDE1IDI4IEMgMTguNDcyNDMxMTgyODYxMzMgMjggMjEuNzM3MDEwOTU1ODEwNTUgMjYuNjQ3NzYwMzkxMjM1MzUgMjQuMTkyMzkwNDQxODk0NTMgMjQuMTkyMzkwNDQxODk0NTMgQyAyNi42NDc3NjAzOTEyMzUzNSAyMS43MzcwMTA5NTU4MTA1NSAyOCAxOC40NzI0MzExODI4NjEzMyAyOCAxNSBDIDI4IDExLjUyNzU3MDcyNDQ4NzMgMjYuNjQ3NzYwMzkxMjM1MzUgOC4yNjI5OTA5NTE1MzgwODYgMjQuMTkyMzkwNDQxODk0NTMgNS44MDc2MDk1NTgxMDU0NjkgQyAyMS43MzcwMTA5NTU4MTA1NSAzLjM1MjIzOTYwODc2NDY0OCAxOC40NzI0MzExODI4NjEzMyAyIDE1IDIgTSAxNSAwIEMgMjMuMjg0MjY5MzMyODg1NzQgMCAzMCA2LjcxNTczMDY2NzExNDI1OCAzMCAxNSBDIDMwIDIzLjI4NDI2OTMzMjg4NTc0IDIzLjI4NDI2OTMzMjg4NTc0IDMwIDE1IDMwIEMgNi43MTU3MzA2NjcxMTQyNTggMzAgMCAyMy4yODQyNjkzMzI4ODU3NCAwIDE1IEMgMCA2LjcxNTczMDY2NzExNDI1OCA2LjcxNTczMDY2NzExNDI1OCAwIDE1IDAgWlwiXG4gICAgICAgICAgICBzdHJva2U9XCJub25lXCJcbiAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZz5cbiAgICAgICAgPGcgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC0xODAgLTE5OTYpXCI+XG4gICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgIGQ9XCJNMTgxMS4xODIsNDM2Mi4zNDJsLTcuNTY3LDYuNzMxLDcuNTY3LDYuMlwiXG4gICAgICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTE1NTAuMTE2IC0yMTgxLjg0MilcIlxuICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAgIHN0cm9rZVdpZHRoPVwiMlwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9nPlxuICAgICAgPC9nPlxuICAgIDwvc3ZnPlxuICApO1xufVxuIiwiLyogdHNsaW50OmRpc2FibGUgbWF4LWxpbmUtbGVuZ3RoICovXG5pbXBvcnQgUmVhY3QsIHsgU1ZHQXR0cmlidXRlcyB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGaWxlUm91bmQocHJvcHM6IFNWR0F0dHJpYnV0ZXM8U1ZHU1ZHRWxlbWVudD4pIHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgIHdpZHRoPVwiMzBcIlxuICAgICAgaGVpZ2h0PVwiMzBcIlxuICAgICAgdmlld0JveD1cIjAgMCAzMCAzMFwiXG4gICAgICB7Li4ucHJvcHN9XG4gICAgPlxuICAgICAgPGcgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC00NjggLTM4MylcIj5cbiAgICAgICAgPGcgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDQwNSAyMDcpXCI+XG4gICAgICAgICAgPGcgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDYzIDE3NilcIiBmaWxsPVwibm9uZVwiPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgZD1cIk0gMTUgMjkgQyAxMS4yNjA0NzAzOTAzMTk4MiAyOSA3Ljc0NDc2MDAzNjQ2ODUwNiAyNy41NDM3NTA3NjI5Mzk0NSA1LjEwMDUxMDEyMDM5MTg0NiAyNC44OTk0OTAzNTY0NDUzMSBDIDIuNDU2MjQ5OTUyMzE2Mjg0IDIyLjI1NTIzOTQ4NjY5NDM0IDEgMTguNzM5NTMwNTYzMzU0NDkgMSAxNSBDIDEgMTEuMjYwNDcwMzkwMzE5ODIgMi40NTYyNDk5NTIzMTYyODQgNy43NDQ3NjAwMzY0Njg1MDYgNS4xMDA1MTAxMjAzOTE4NDYgNS4xMDA1MTAxMjAzOTE4NDYgQyA3Ljc0NDc2MDAzNjQ2ODUwNiAyLjQ1NjI0OTk1MjMxNjI4NCAxMS4yNjA0NzAzOTAzMTk4MiAxIDE1IDEgQyAxOC43Mzk1MzA1NjMzNTQ0OSAxIDIyLjI1NTIzOTQ4NjY5NDM0IDIuNDU2MjQ5OTUyMzE2Mjg0IDI0Ljg5OTQ5MDM1NjQ0NTMxIDUuMTAwNTEwMTIwMzkxODQ2IEMgMjcuNTQzNzUwNzYyOTM5NDUgNy43NDQ3NjAwMzY0Njg1MDYgMjkgMTEuMjYwNDcwMzkwMzE5ODIgMjkgMTUgQyAyOSAxOC43Mzk1MzA1NjMzNTQ0OSAyNy41NDM3NTA3NjI5Mzk0NSAyMi4yNTUyMzk0ODY2OTQzNCAyNC44OTk0OTAzNTY0NDUzMSAyNC44OTk0OTAzNTY0NDUzMSBDIDIyLjI1NTIzOTQ4NjY5NDM0IDI3LjU0Mzc1MDc2MjkzOTQ1IDE4LjczOTUzMDU2MzM1NDQ5IDI5IDE1IDI5IFpcIlxuICAgICAgICAgICAgICBzdHJva2U9XCJub25lXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICBkPVwiTSAxNSAyIEMgMTEuNTI3NTcwNzI0NDg3MyAyIDguMjYyOTkwOTUxNTM4MDg2IDMuMzUyMjM5NjA4NzY0NjQ4IDUuODA3NjA5NTU4MTA1NDY5IDUuODA3NjA5NTU4MTA1NDY5IEMgMy4zNTIyMzk2MDg3NjQ2NDggOC4yNjI5OTA5NTE1MzgwODYgMiAxMS41Mjc1NzA3MjQ0ODczIDIgMTUgQyAyIDE4LjQ3MjQzMTE4Mjg2MTMzIDMuMzUyMjM5NjA4NzY0NjQ4IDIxLjczNzAxMDk1NTgxMDU1IDUuODA3NjA5NTU4MTA1NDY5IDI0LjE5MjM5MDQ0MTg5NDUzIEMgOC4yNjI5OTA5NTE1MzgwODYgMjYuNjQ3NzYwMzkxMjM1MzUgMTEuNTI3NTcwNzI0NDg3MyAyOCAxNSAyOCBDIDE4LjQ3MjQzMTE4Mjg2MTMzIDI4IDIxLjczNzAxMDk1NTgxMDU1IDI2LjY0Nzc2MDM5MTIzNTM1IDI0LjE5MjM5MDQ0MTg5NDUzIDI0LjE5MjM5MDQ0MTg5NDUzIEMgMjYuNjQ3NzYwMzkxMjM1MzUgMjEuNzM3MDEwOTU1ODEwNTUgMjggMTguNDcyNDMxMTgyODYxMzMgMjggMTUgQyAyOCAxMS41Mjc1NzA3MjQ0ODczIDI2LjY0Nzc2MDM5MTIzNTM1IDguMjYyOTkwOTUxNTM4MDg2IDI0LjE5MjM5MDQ0MTg5NDUzIDUuODA3NjA5NTU4MTA1NDY5IEMgMjEuNzM3MDEwOTU1ODEwNTUgMy4zNTIyMzk2MDg3NjQ2NDggMTguNDcyNDMxMTgyODYxMzMgMiAxNSAyIE0gMTUgMCBDIDIzLjI4NDI2OTMzMjg4NTc0IDAgMzAgNi43MTU3MzA2NjcxMTQyNTggMzAgMTUgQyAzMCAyMy4yODQyNjkzMzI4ODU3NCAyMy4yODQyNjkzMzI4ODU3NCAzMCAxNSAzMCBDIDYuNzE1NzMwNjY3MTE0MjU4IDMwIDAgMjMuMjg0MjY5MzMyODg1NzQgMCAxNSBDIDAgNi43MTU3MzA2NjcxMTQyNTggNi43MTU3MzA2NjcxMTQyNTggMCAxNSAwIFpcIlxuICAgICAgICAgICAgICBzdHJva2U9XCJub25lXCJcbiAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZz5cbiAgICAgICAgPC9nPlxuICAgICAgICA8ZyB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMzg0IDIwOClcIj5cbiAgICAgICAgICA8Z1xuICAgICAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDkzIDE4MilcIlxuICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAgIHN0cm9rZVdpZHRoPVwiMlwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHJlY3Qgd2lkdGg9XCIxMlwiIGhlaWdodD1cIjE2XCIgcng9XCIxXCIgc3Ryb2tlPVwibm9uZVwiIC8+XG4gICAgICAgICAgICA8cmVjdCB4PVwiMVwiIHk9XCIxXCIgd2lkdGg9XCIxMFwiIGhlaWdodD1cIjE0XCIgZmlsbD1cIm5vbmVcIiAvPlxuICAgICAgICAgIDwvZz5cbiAgICAgICAgICA8cmVjdFxuICAgICAgICAgICAgd2lkdGg9XCI0XCJcbiAgICAgICAgICAgIGhlaWdodD1cIjEuM1wiXG4gICAgICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoOTcgMTg2KVwiXG4gICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxyZWN0XG4gICAgICAgICAgICB3aWR0aD1cIjRcIlxuICAgICAgICAgICAgaGVpZ2h0PVwiMS4zXCJcbiAgICAgICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSg5NyAxODkpXCJcbiAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPHJlY3RcbiAgICAgICAgICAgIHdpZHRoPVwiNFwiXG4gICAgICAgICAgICBoZWlnaHQ9XCIxLjNcIlxuICAgICAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDk3IDE5MilcIlxuICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9nPlxuICAgICAgPC9nPlxuICAgIDwvc3ZnPlxuICApO1xufVxuIiwiaW1wb3J0IFJlYWN0LCB7IFNWR0F0dHJpYnV0ZXMgfSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBlbmNpbChwcm9wczogU1ZHQXR0cmlidXRlczxTVkdTVkdFbGVtZW50Pikge1xuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgd2lkdGg9XCIxNy43OTZcIlxuICAgICAgaGVpZ2h0PVwiMTcuOTA4XCJcbiAgICAgIHZpZXdCb3g9XCIwIDAgMTcuNzk2IDE3LjkwOFwiXG4gICAgICB7Li4ucHJvcHN9XG4gICAgPlxuICAgICAgPGc+XG4gICAgICAgIDxnPlxuICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICBkPVwiTTEuMjU0LDEyLjY3NC41LDE3LjQwOGw0LjcyNi0uOEwxNy4zLDQuNDcyLDEzLjI4MS41WlwiXG4gICAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcbiAgICAgICAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxuICAgICAgICAgICAgc3Ryb2tlV2lkdGg9XCIxXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L2c+XG4gICAgICAgIDxsaW5lXG4gICAgICAgICAgeDI9XCIzLjg1MVwiXG4gICAgICAgICAgeTI9XCIzLjgzOFwiXG4gICAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDEuMzc1IDEyLjc2NilcIlxuICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXG4gICAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXG4gICAgICAgICAgc3Ryb2tlV2lkdGg9XCIxXCJcbiAgICAgICAgLz5cbiAgICAgICAgPGxpbmVcbiAgICAgICAgICB4Mj1cIjMuODM2XCJcbiAgICAgICAgICB5Mj1cIjMuODAxXCJcbiAgICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMTAuOTQ5IDIuOTU5KVwiXG4gICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcbiAgICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcbiAgICAgICAgICBzdHJva2VXaWR0aD1cIjFcIlxuICAgICAgICAvPlxuICAgICAgPC9nPlxuICAgIDwvc3ZnPlxuICApO1xufVxuIiwiLyogdHNsaW50OmRpc2FibGUgbWF4LWxpbmUtbGVuZ3RoICovXG5pbXBvcnQgUmVhY3QsIHsgU1ZHQXR0cmlidXRlcyB9IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVXNlcihwcm9wczogU1ZHQXR0cmlidXRlczxTVkdTVkdFbGVtZW50Pikge1xuICByZXR1cm4oXG4gICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIzMFwiIGhlaWdodD1cIjMwXCIgdmlld0JveD1cIjAgMCAzMCAzMFwiIHsuLi5wcm9wc30+XG4gICAgPGcgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC00NjggLTM4MylcIj5cbiAgICAgIDxnIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSg0NjggMzgzKVwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlV2lkdGg9XCIyXCI+XG4gICAgICAgIDxjaXJjbGUgY3g9XCIxNVwiIGN5PVwiMTVcIiByPVwiMTVcIiBzdHJva2U9XCJub25lXCIvPlxuICAgICAgICA8Y2lyY2xlIGN4PVwiMTVcIiBjeT1cIjE1XCIgcj1cIjE0XCIgZmlsbD1cIm5vbmVcIi8+XG4gICAgICA8L2c+XG4gICAgICA8cGF0aFxuICAgICAgICBkPVwiTS00LTMxMGE2LjAxOCw2LjAxOCwwLDAsMSw2LTZINGE2LjAxOCw2LjAxOCwwLDAsMSw2LDZabTIuNi0ySDcuNUE0LjAzMyw0LjAzMywwLDAsMCw0LTMxNEgyLjFBNC4wMzUsNC4wMzUsMCwwLDAtMS40LTMxMlptLjQtOXYtMWE0LjAxMiw0LjAxMiwwLDAsMSw0LTQsNC4wMTIsNC4wMTIsMCwwLDEsNCw0djFhNC4wMTIsNC4wMTIsMCwwLDEtNCw0QTQuMDEyLDQuMDEyLDAsMCwxLTEtMzIxWm0yLTF2MWEyLjAwNiwyLjAwNiwwLDAsMCwyLDIsMi4wMDYsMi4wMDYsMCwwLDAsMi0ydi0xYTIuMDA2LDIuMDA2LDAsMCwwLTItMkEyLjAwNiwyLjAwNiwwLDAsMCwxLTMyMlpcIlxuICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoNDgwIDcxNilcIlxuICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgIC8+XG4gICAgPC9nPlxuICA8L3N2Zz5cbiAgKTtcbn1cbiIsIi8qIHRzbGludDpkaXNhYmxlIG1heC1saW5lLWxlbmd0aCAqL1xuaW1wb3J0IFJlYWN0LCB7IFNWR0F0dHJpYnV0ZXMgfSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENsb3NlKHByb3BzOiBTVkdBdHRyaWJ1dGVzPFNWR1NWR0VsZW1lbnQ+KSB7XG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICB3aWR0aD1cIjMwXCJcbiAgICAgIGhlaWdodD1cIjMwXCJcbiAgICAgIHZpZXdCb3g9XCIwIDAgMzAgMzBcIlxuICAgICAgcG9pbnRlckV2ZW50cz1cImJvdW5kaW5nLWJveFwiXG4gICAgICB7Li4ucHJvcHN9XG4gICAgPlxuICAgICAgPGcgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC0xMzEgLTU3MSlcIj5cbiAgICAgICAgPGcgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDEzMiA1NzIpXCI+XG4gICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgIGQ9XCJNMjguNSwyNiwxNiwxMy41LDI4LjUsMVwiXG4gICAgICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTMuNTAxIC0xKVwiXG4gICAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcbiAgICAgICAgICAgIHN0cm9rZU1pdGVybGltaXQ9XCIxMFwiXG4gICAgICAgICAgICBzdHJva2VXaWR0aD1cIjJcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgIGQ9XCJNMSwyNiwxMy41LDEzLjUsMSwxXCJcbiAgICAgICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgtMSAtMSlcIlxuICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXG4gICAgICAgICAgICBzdHJva2VNaXRlcmxpbWl0PVwiMTBcIlxuICAgICAgICAgICAgc3Ryb2tlV2lkdGg9XCIyXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L2c+XG4gICAgICA8L2c+XG4gICAgPC9zdmc+XG4gICk7XG59XG4iLCIvKiB0c2xpbnQ6ZGlzYWJsZSBtYXgtbGluZS1sZW5ndGggKi9cbmltcG9ydCBSZWFjdCwgeyBTVkdBdHRyaWJ1dGVzIH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJlZnJlc2gocHJvcHM6IFNWR0F0dHJpYnV0ZXM8U1ZHU1ZHRWxlbWVudD4pIHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgIHdpZHRoPVwiMzBcIlxuICAgICAgaGVpZ2h0PVwiMzBcIlxuICAgICAgdmlld0JveD1cIjAgMCAzMCAzMFwiXG4gICAgICB7Li4ucHJvcHN9XG4gICAgPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD1cIk0yNC4wNjUsOUExNS4wNjksMTUuMDY5LDAsMCwwLDkuMTQyLDIyLjEwNWExLjI1NiwxLjI1NiwwLDEsMCwyLjQ3OC40MDZjMC0uMDI3LjAwOC0uMDU1LjAxLS4wODJhMTIuNTIsMTIuNTIsMCwwLDEsMjEuMy03LjIyNmwtMi41ODQsMi41ODQsNy41MzIsMS4yNTUtMS4yNTUtNy41MzItMS45MiwxLjkyQTE1LDE1LDAsMCwwLDI0LjA2NSw5Wm0xMy43LDE1LjU4OUExLjI1NSwxLjI1NSwwLDAsMCwzNi41LDI1LjdhMTIuNTEyLDEyLjUxMiwwLDAsMS0yMS44OTMsNi41NjlsMS45MjctMS45MjdMOSwyOS4wODZsMS4yNTUsNy41MzIsMi41NzItMi41NzJhMTUuMDIsMTUuMDIsMCwwLDAsMjYuMTYtOC4wMjNBMS4yNTYsMS4yNTYsMCwwLDAsMzcuOTIzLDI0LjYsMS4yNzMsMS4yNzMsMCwwLDAsMzcuNzYzLDI0LjU4OVpcIlxuICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTkgLTkpXCJcbiAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICAvPlxuICAgIDwvc3ZnPlxuICApO1xufVxuIiwiLyoqIEBsaWNlbnNlIFJlYWN0IHYxNi44LjFcbiAqIHJlYWN0LWlzLnByb2R1Y3Rpb24ubWluLmpzXG4gKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO09iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO1xudmFyIGI9XCJmdW5jdGlvblwiPT09dHlwZW9mIFN5bWJvbCYmU3ltYm9sLmZvcixjPWI/U3ltYm9sLmZvcihcInJlYWN0LmVsZW1lbnRcIik6NjAxMDMsZD1iP1N5bWJvbC5mb3IoXCJyZWFjdC5wb3J0YWxcIik6NjAxMDYsZT1iP1N5bWJvbC5mb3IoXCJyZWFjdC5mcmFnbWVudFwiKTo2MDEwNyxmPWI/U3ltYm9sLmZvcihcInJlYWN0LnN0cmljdF9tb2RlXCIpOjYwMTA4LGc9Yj9TeW1ib2wuZm9yKFwicmVhY3QucHJvZmlsZXJcIik6NjAxMTQsaD1iP1N5bWJvbC5mb3IoXCJyZWFjdC5wcm92aWRlclwiKTo2MDEwOSxrPWI/U3ltYm9sLmZvcihcInJlYWN0LmNvbnRleHRcIik6NjAxMTAsbD1iP1N5bWJvbC5mb3IoXCJyZWFjdC5hc3luY19tb2RlXCIpOjYwMTExLG09Yj9TeW1ib2wuZm9yKFwicmVhY3QuY29uY3VycmVudF9tb2RlXCIpOjYwMTExLG49Yj9TeW1ib2wuZm9yKFwicmVhY3QuZm9yd2FyZF9yZWZcIik6NjAxMTIscD1iP1N5bWJvbC5mb3IoXCJyZWFjdC5zdXNwZW5zZVwiKTo2MDExMyxxPWI/U3ltYm9sLmZvcihcInJlYWN0Lm1lbW9cIik6XG42MDExNSxyPWI/U3ltYm9sLmZvcihcInJlYWN0LmxhenlcIik6NjAxMTY7ZnVuY3Rpb24gdChhKXtpZihcIm9iamVjdFwiPT09dHlwZW9mIGEmJm51bGwhPT1hKXt2YXIgdT1hLiQkdHlwZW9mO3N3aXRjaCh1KXtjYXNlIGM6c3dpdGNoKGE9YS50eXBlLGEpe2Nhc2UgbDpjYXNlIG06Y2FzZSBlOmNhc2UgZzpjYXNlIGY6Y2FzZSBwOnJldHVybiBhO2RlZmF1bHQ6c3dpdGNoKGE9YSYmYS4kJHR5cGVvZixhKXtjYXNlIGs6Y2FzZSBuOmNhc2UgaDpyZXR1cm4gYTtkZWZhdWx0OnJldHVybiB1fX1jYXNlIHI6Y2FzZSBxOmNhc2UgZDpyZXR1cm4gdX19fWZ1bmN0aW9uIHYoYSl7cmV0dXJuIHQoYSk9PT1tfWV4cG9ydHMudHlwZU9mPXQ7ZXhwb3J0cy5Bc3luY01vZGU9bDtleHBvcnRzLkNvbmN1cnJlbnRNb2RlPW07ZXhwb3J0cy5Db250ZXh0Q29uc3VtZXI9aztleHBvcnRzLkNvbnRleHRQcm92aWRlcj1oO2V4cG9ydHMuRWxlbWVudD1jO2V4cG9ydHMuRm9yd2FyZFJlZj1uO1xuZXhwb3J0cy5GcmFnbWVudD1lO2V4cG9ydHMuTGF6eT1yO2V4cG9ydHMuTWVtbz1xO2V4cG9ydHMuUG9ydGFsPWQ7ZXhwb3J0cy5Qcm9maWxlcj1nO2V4cG9ydHMuU3RyaWN0TW9kZT1mO2V4cG9ydHMuU3VzcGVuc2U9cDtleHBvcnRzLmlzVmFsaWRFbGVtZW50VHlwZT1mdW5jdGlvbihhKXtyZXR1cm5cInN0cmluZ1wiPT09dHlwZW9mIGF8fFwiZnVuY3Rpb25cIj09PXR5cGVvZiBhfHxhPT09ZXx8YT09PW18fGE9PT1nfHxhPT09Znx8YT09PXB8fFwib2JqZWN0XCI9PT10eXBlb2YgYSYmbnVsbCE9PWEmJihhLiQkdHlwZW9mPT09cnx8YS4kJHR5cGVvZj09PXF8fGEuJCR0eXBlb2Y9PT1ofHxhLiQkdHlwZW9mPT09a3x8YS4kJHR5cGVvZj09PW4pfTtleHBvcnRzLmlzQXN5bmNNb2RlPWZ1bmN0aW9uKGEpe3JldHVybiB2KGEpfHx0KGEpPT09bH07ZXhwb3J0cy5pc0NvbmN1cnJlbnRNb2RlPXY7ZXhwb3J0cy5pc0NvbnRleHRDb25zdW1lcj1mdW5jdGlvbihhKXtyZXR1cm4gdChhKT09PWt9O1xuZXhwb3J0cy5pc0NvbnRleHRQcm92aWRlcj1mdW5jdGlvbihhKXtyZXR1cm4gdChhKT09PWh9O2V4cG9ydHMuaXNFbGVtZW50PWZ1bmN0aW9uKGEpe3JldHVyblwib2JqZWN0XCI9PT10eXBlb2YgYSYmbnVsbCE9PWEmJmEuJCR0eXBlb2Y9PT1jfTtleHBvcnRzLmlzRm9yd2FyZFJlZj1mdW5jdGlvbihhKXtyZXR1cm4gdChhKT09PW59O2V4cG9ydHMuaXNGcmFnbWVudD1mdW5jdGlvbihhKXtyZXR1cm4gdChhKT09PWV9O2V4cG9ydHMuaXNMYXp5PWZ1bmN0aW9uKGEpe3JldHVybiB0KGEpPT09cn07ZXhwb3J0cy5pc01lbW89ZnVuY3Rpb24oYSl7cmV0dXJuIHQoYSk9PT1xfTtleHBvcnRzLmlzUG9ydGFsPWZ1bmN0aW9uKGEpe3JldHVybiB0KGEpPT09ZH07ZXhwb3J0cy5pc1Byb2ZpbGVyPWZ1bmN0aW9uKGEpe3JldHVybiB0KGEpPT09Z307ZXhwb3J0cy5pc1N0cmljdE1vZGU9ZnVuY3Rpb24oYSl7cmV0dXJuIHQoYSk9PT1mfTtcbmV4cG9ydHMuaXNTdXNwZW5zZT1mdW5jdGlvbihhKXtyZXR1cm4gdChhKT09PXB9O1xuIiwiLyoqIEBsaWNlbnNlIFJlYWN0IHYxNi44LjFcbiAqIHJlYWN0LWlzLmRldmVsb3BtZW50LmpzXG4gKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAoZnVuY3Rpb24oKSB7XG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbi8vIFRoZSBTeW1ib2wgdXNlZCB0byB0YWcgdGhlIFJlYWN0RWxlbWVudC1saWtlIHR5cGVzLiBJZiB0aGVyZSBpcyBubyBuYXRpdmUgU3ltYm9sXG4vLyBub3IgcG9seWZpbGwsIHRoZW4gYSBwbGFpbiBudW1iZXIgaXMgdXNlZCBmb3IgcGVyZm9ybWFuY2UuXG52YXIgaGFzU3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wuZm9yO1xuXG52YXIgUkVBQ1RfRUxFTUVOVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuZWxlbWVudCcpIDogMHhlYWM3O1xudmFyIFJFQUNUX1BPUlRBTF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QucG9ydGFsJykgOiAweGVhY2E7XG52YXIgUkVBQ1RfRlJBR01FTlRfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmZyYWdtZW50JykgOiAweGVhY2I7XG52YXIgUkVBQ1RfU1RSSUNUX01PREVfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnN0cmljdF9tb2RlJykgOiAweGVhY2M7XG52YXIgUkVBQ1RfUFJPRklMRVJfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnByb2ZpbGVyJykgOiAweGVhZDI7XG52YXIgUkVBQ1RfUFJPVklERVJfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnByb3ZpZGVyJykgOiAweGVhY2Q7XG52YXIgUkVBQ1RfQ09OVEVYVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuY29udGV4dCcpIDogMHhlYWNlO1xudmFyIFJFQUNUX0FTWU5DX01PREVfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmFzeW5jX21vZGUnKSA6IDB4ZWFjZjtcbnZhciBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmNvbmN1cnJlbnRfbW9kZScpIDogMHhlYWNmO1xudmFyIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5mb3J3YXJkX3JlZicpIDogMHhlYWQwO1xudmFyIFJFQUNUX1NVU1BFTlNFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5zdXNwZW5zZScpIDogMHhlYWQxO1xudmFyIFJFQUNUX01FTU9fVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0Lm1lbW8nKSA6IDB4ZWFkMztcbnZhciBSRUFDVF9MQVpZX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5sYXp5JykgOiAweGVhZDQ7XG5cbmZ1bmN0aW9uIGlzVmFsaWRFbGVtZW50VHlwZSh0eXBlKSB7XG4gIHJldHVybiB0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicgfHxcbiAgLy8gTm90ZTogaXRzIHR5cGVvZiBtaWdodCBiZSBvdGhlciB0aGFuICdzeW1ib2wnIG9yICdudW1iZXInIGlmIGl0J3MgYSBwb2x5ZmlsbC5cbiAgdHlwZSA9PT0gUkVBQ1RfRlJBR01FTlRfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9QUk9GSUxFUl9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1VTUEVOU0VfVFlQRSB8fCB0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgdHlwZSAhPT0gbnVsbCAmJiAodHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTEFaWV9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX01FTU9fVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9QUk9WSURFUl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0NPTlRFWFRfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFKTtcbn1cblxuLyoqXG4gKiBGb3JrZWQgZnJvbSBmYmpzL3dhcm5pbmc6XG4gKiBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svZmJqcy9ibG9iL2U2NmJhMjBhZDViZTQzM2ViNTQ0MjNmMmIwOTdkODI5MzI0ZDlkZTYvcGFja2FnZXMvZmJqcy9zcmMvX19mb3Jrc19fL3dhcm5pbmcuanNcbiAqXG4gKiBPbmx5IGNoYW5nZSBpcyB3ZSB1c2UgY29uc29sZS53YXJuIGluc3RlYWQgb2YgY29uc29sZS5lcnJvcixcbiAqIGFuZCBkbyBub3RoaW5nIHdoZW4gJ2NvbnNvbGUnIGlzIG5vdCBzdXBwb3J0ZWQuXG4gKiBUaGlzIHJlYWxseSBzaW1wbGlmaWVzIHRoZSBjb2RlLlxuICogLS0tXG4gKiBTaW1pbGFyIHRvIGludmFyaWFudCBidXQgb25seSBsb2dzIGEgd2FybmluZyBpZiB0aGUgY29uZGl0aW9uIGlzIG5vdCBtZXQuXG4gKiBUaGlzIGNhbiBiZSB1c2VkIHRvIGxvZyBpc3N1ZXMgaW4gZGV2ZWxvcG1lbnQgZW52aXJvbm1lbnRzIGluIGNyaXRpY2FsXG4gKiBwYXRocy4gUmVtb3ZpbmcgdGhlIGxvZ2dpbmcgY29kZSBmb3IgcHJvZHVjdGlvbiBlbnZpcm9ubWVudHMgd2lsbCBrZWVwIHRoZVxuICogc2FtZSBsb2dpYyBhbmQgZm9sbG93IHRoZSBzYW1lIGNvZGUgcGF0aHMuXG4gKi9cblxudmFyIGxvd1ByaW9yaXR5V2FybmluZyA9IGZ1bmN0aW9uICgpIHt9O1xuXG57XG4gIHZhciBwcmludFdhcm5pbmcgPSBmdW5jdGlvbiAoZm9ybWF0KSB7XG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICB2YXIgYXJnSW5kZXggPSAwO1xuICAgIHZhciBtZXNzYWdlID0gJ1dhcm5pbmc6ICcgKyBmb3JtYXQucmVwbGFjZSgvJXMvZywgZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGFyZ3NbYXJnSW5kZXgrK107XG4gICAgfSk7XG4gICAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uc29sZS53YXJuKG1lc3NhZ2UpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgLy8gLS0tIFdlbGNvbWUgdG8gZGVidWdnaW5nIFJlYWN0IC0tLVxuICAgICAgLy8gVGhpcyBlcnJvciB3YXMgdGhyb3duIGFzIGEgY29udmVuaWVuY2Ugc28gdGhhdCB5b3UgY2FuIHVzZSB0aGlzIHN0YWNrXG4gICAgICAvLyB0byBmaW5kIHRoZSBjYWxsc2l0ZSB0aGF0IGNhdXNlZCB0aGlzIHdhcm5pbmcgdG8gZmlyZS5cbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICB9IGNhdGNoICh4KSB7fVxuICB9O1xuXG4gIGxvd1ByaW9yaXR5V2FybmluZyA9IGZ1bmN0aW9uIChjb25kaXRpb24sIGZvcm1hdCkge1xuICAgIGlmIChmb3JtYXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdgbG93UHJpb3JpdHlXYXJuaW5nKGNvbmRpdGlvbiwgZm9ybWF0LCAuLi5hcmdzKWAgcmVxdWlyZXMgYSB3YXJuaW5nICcgKyAnbWVzc2FnZSBhcmd1bWVudCcpO1xuICAgIH1cbiAgICBpZiAoIWNvbmRpdGlvbikge1xuICAgICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbjIgPiAyID8gX2xlbjIgLSAyIDogMCksIF9rZXkyID0gMjsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgICBhcmdzW19rZXkyIC0gMl0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgICAgfVxuXG4gICAgICBwcmludFdhcm5pbmcuYXBwbHkodW5kZWZpbmVkLCBbZm9ybWF0XS5jb25jYXQoYXJncykpO1xuICAgIH1cbiAgfTtcbn1cblxudmFyIGxvd1ByaW9yaXR5V2FybmluZyQxID0gbG93UHJpb3JpdHlXYXJuaW5nO1xuXG5mdW5jdGlvbiB0eXBlT2Yob2JqZWN0KSB7XG4gIGlmICh0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0JyAmJiBvYmplY3QgIT09IG51bGwpIHtcbiAgICB2YXIgJCR0eXBlb2YgPSBvYmplY3QuJCR0eXBlb2Y7XG4gICAgc3dpdGNoICgkJHR5cGVvZikge1xuICAgICAgY2FzZSBSRUFDVF9FTEVNRU5UX1RZUEU6XG4gICAgICAgIHZhciB0eXBlID0gb2JqZWN0LnR5cGU7XG5cbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgY2FzZSBSRUFDVF9BU1lOQ19NT0RFX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX0ZSQUdNRU5UX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9QUk9GSUxFUl9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfU1RSSUNUX01PREVfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX1RZUEU6XG4gICAgICAgICAgICByZXR1cm4gdHlwZTtcbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgdmFyICQkdHlwZW9mVHlwZSA9IHR5cGUgJiYgdHlwZS4kJHR5cGVvZjtcblxuICAgICAgICAgICAgc3dpdGNoICgkJHR5cGVvZlR5cGUpIHtcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9DT05URVhUX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9QUk9WSURFUl9UWVBFOlxuICAgICAgICAgICAgICAgIHJldHVybiAkJHR5cGVvZlR5cGU7XG4gICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuICQkdHlwZW9mO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBjYXNlIFJFQUNUX0xBWllfVFlQRTpcbiAgICAgIGNhc2UgUkVBQ1RfTUVNT19UWVBFOlxuICAgICAgY2FzZSBSRUFDVF9QT1JUQUxfVFlQRTpcbiAgICAgICAgcmV0dXJuICQkdHlwZW9mO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWQ7XG59XG5cbi8vIEFzeW5jTW9kZSBpcyBkZXByZWNhdGVkIGFsb25nIHdpdGggaXNBc3luY01vZGVcbnZhciBBc3luY01vZGUgPSBSRUFDVF9BU1lOQ19NT0RFX1RZUEU7XG52YXIgQ29uY3VycmVudE1vZGUgPSBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRTtcbnZhciBDb250ZXh0Q29uc3VtZXIgPSBSRUFDVF9DT05URVhUX1RZUEU7XG52YXIgQ29udGV4dFByb3ZpZGVyID0gUkVBQ1RfUFJPVklERVJfVFlQRTtcbnZhciBFbGVtZW50ID0gUkVBQ1RfRUxFTUVOVF9UWVBFO1xudmFyIEZvcndhcmRSZWYgPSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFO1xudmFyIEZyYWdtZW50ID0gUkVBQ1RfRlJBR01FTlRfVFlQRTtcbnZhciBMYXp5ID0gUkVBQ1RfTEFaWV9UWVBFO1xudmFyIE1lbW8gPSBSRUFDVF9NRU1PX1RZUEU7XG52YXIgUG9ydGFsID0gUkVBQ1RfUE9SVEFMX1RZUEU7XG52YXIgUHJvZmlsZXIgPSBSRUFDVF9QUk9GSUxFUl9UWVBFO1xudmFyIFN0cmljdE1vZGUgPSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFO1xudmFyIFN1c3BlbnNlID0gUkVBQ1RfU1VTUEVOU0VfVFlQRTtcblxudmFyIGhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQXN5bmNNb2RlID0gZmFsc2U7XG5cbi8vIEFzeW5jTW9kZSBzaG91bGQgYmUgZGVwcmVjYXRlZFxuZnVuY3Rpb24gaXNBc3luY01vZGUob2JqZWN0KSB7XG4gIHtcbiAgICBpZiAoIWhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQXN5bmNNb2RlKSB7XG4gICAgICBoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0FzeW5jTW9kZSA9IHRydWU7XG4gICAgICBsb3dQcmlvcml0eVdhcm5pbmckMShmYWxzZSwgJ1RoZSBSZWFjdElzLmlzQXN5bmNNb2RlKCkgYWxpYXMgaGFzIGJlZW4gZGVwcmVjYXRlZCwgJyArICdhbmQgd2lsbCBiZSByZW1vdmVkIGluIFJlYWN0IDE3Ky4gVXBkYXRlIHlvdXIgY29kZSB0byB1c2UgJyArICdSZWFjdElzLmlzQ29uY3VycmVudE1vZGUoKSBpbnN0ZWFkLiBJdCBoYXMgdGhlIGV4YWN0IHNhbWUgQVBJLicpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gaXNDb25jdXJyZW50TW9kZShvYmplY3QpIHx8IHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9BU1lOQ19NT0RFX1RZUEU7XG59XG5mdW5jdGlvbiBpc0NvbmN1cnJlbnRNb2RlKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFO1xufVxuZnVuY3Rpb24gaXNDb250ZXh0Q29uc3VtZXIob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfQ09OVEVYVF9UWVBFO1xufVxuZnVuY3Rpb24gaXNDb250ZXh0UHJvdmlkZXIob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfUFJPVklERVJfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzRWxlbWVudChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmIG9iamVjdCAhPT0gbnVsbCAmJiBvYmplY3QuJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzRm9yd2FyZFJlZihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFO1xufVxuZnVuY3Rpb24gaXNGcmFnbWVudChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9GUkFHTUVOVF9UWVBFO1xufVxuZnVuY3Rpb24gaXNMYXp5KG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0xBWllfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzTWVtbyhvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9NRU1PX1RZUEU7XG59XG5mdW5jdGlvbiBpc1BvcnRhbChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9QT1JUQUxfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzUHJvZmlsZXIob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfUFJPRklMRVJfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzU3RyaWN0TW9kZShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFO1xufVxuZnVuY3Rpb24gaXNTdXNwZW5zZShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9TVVNQRU5TRV9UWVBFO1xufVxuXG5leHBvcnRzLnR5cGVPZiA9IHR5cGVPZjtcbmV4cG9ydHMuQXN5bmNNb2RlID0gQXN5bmNNb2RlO1xuZXhwb3J0cy5Db25jdXJyZW50TW9kZSA9IENvbmN1cnJlbnRNb2RlO1xuZXhwb3J0cy5Db250ZXh0Q29uc3VtZXIgPSBDb250ZXh0Q29uc3VtZXI7XG5leHBvcnRzLkNvbnRleHRQcm92aWRlciA9IENvbnRleHRQcm92aWRlcjtcbmV4cG9ydHMuRWxlbWVudCA9IEVsZW1lbnQ7XG5leHBvcnRzLkZvcndhcmRSZWYgPSBGb3J3YXJkUmVmO1xuZXhwb3J0cy5GcmFnbWVudCA9IEZyYWdtZW50O1xuZXhwb3J0cy5MYXp5ID0gTGF6eTtcbmV4cG9ydHMuTWVtbyA9IE1lbW87XG5leHBvcnRzLlBvcnRhbCA9IFBvcnRhbDtcbmV4cG9ydHMuUHJvZmlsZXIgPSBQcm9maWxlcjtcbmV4cG9ydHMuU3RyaWN0TW9kZSA9IFN0cmljdE1vZGU7XG5leHBvcnRzLlN1c3BlbnNlID0gU3VzcGVuc2U7XG5leHBvcnRzLmlzVmFsaWRFbGVtZW50VHlwZSA9IGlzVmFsaWRFbGVtZW50VHlwZTtcbmV4cG9ydHMuaXNBc3luY01vZGUgPSBpc0FzeW5jTW9kZTtcbmV4cG9ydHMuaXNDb25jdXJyZW50TW9kZSA9IGlzQ29uY3VycmVudE1vZGU7XG5leHBvcnRzLmlzQ29udGV4dENvbnN1bWVyID0gaXNDb250ZXh0Q29uc3VtZXI7XG5leHBvcnRzLmlzQ29udGV4dFByb3ZpZGVyID0gaXNDb250ZXh0UHJvdmlkZXI7XG5leHBvcnRzLmlzRWxlbWVudCA9IGlzRWxlbWVudDtcbmV4cG9ydHMuaXNGb3J3YXJkUmVmID0gaXNGb3J3YXJkUmVmO1xuZXhwb3J0cy5pc0ZyYWdtZW50ID0gaXNGcmFnbWVudDtcbmV4cG9ydHMuaXNMYXp5ID0gaXNMYXp5O1xuZXhwb3J0cy5pc01lbW8gPSBpc01lbW87XG5leHBvcnRzLmlzUG9ydGFsID0gaXNQb3J0YWw7XG5leHBvcnRzLmlzUHJvZmlsZXIgPSBpc1Byb2ZpbGVyO1xuZXhwb3J0cy5pc1N0cmljdE1vZGUgPSBpc1N0cmljdE1vZGU7XG5leHBvcnRzLmlzU3VzcGVuc2UgPSBpc1N1c3BlbnNlO1xuICB9KSgpO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LWlzLnByb2R1Y3Rpb24ubWluLmpzJyk7XG59IGVsc2Uge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LWlzLmRldmVsb3BtZW50LmpzJyk7XG59XG4iLCIvKlxub2JqZWN0LWFzc2lnblxuKGMpIFNpbmRyZSBTb3JodXNcbkBsaWNlbnNlIE1JVFxuKi9cblxuJ3VzZSBzdHJpY3QnO1xuLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cbnZhciBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xudmFyIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbnZhciBwcm9wSXNFbnVtZXJhYmxlID0gT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcblxuZnVuY3Rpb24gdG9PYmplY3QodmFsKSB7XG5cdGlmICh2YWwgPT09IG51bGwgfHwgdmFsID09PSB1bmRlZmluZWQpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdPYmplY3QuYXNzaWduIGNhbm5vdCBiZSBjYWxsZWQgd2l0aCBudWxsIG9yIHVuZGVmaW5lZCcpO1xuXHR9XG5cblx0cmV0dXJuIE9iamVjdCh2YWwpO1xufVxuXG5mdW5jdGlvbiBzaG91bGRVc2VOYXRpdmUoKSB7XG5cdHRyeSB7XG5cdFx0aWYgKCFPYmplY3QuYXNzaWduKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gRGV0ZWN0IGJ1Z2d5IHByb3BlcnR5IGVudW1lcmF0aW9uIG9yZGVyIGluIG9sZGVyIFY4IHZlcnNpb25zLlxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9NDExOFxuXHRcdHZhciB0ZXN0MSA9IG5ldyBTdHJpbmcoJ2FiYycpOyAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1uZXctd3JhcHBlcnNcblx0XHR0ZXN0MVs1XSA9ICdkZSc7XG5cdFx0aWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRlc3QxKVswXSA9PT0gJzUnKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzA1NlxuXHRcdHZhciB0ZXN0MiA9IHt9O1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgMTA7IGkrKykge1xuXHRcdFx0dGVzdDJbJ18nICsgU3RyaW5nLmZyb21DaGFyQ29kZShpKV0gPSBpO1xuXHRcdH1cblx0XHR2YXIgb3JkZXIyID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGVzdDIpLm1hcChmdW5jdGlvbiAobikge1xuXHRcdFx0cmV0dXJuIHRlc3QyW25dO1xuXHRcdH0pO1xuXHRcdGlmIChvcmRlcjIuam9pbignJykgIT09ICcwMTIzNDU2Nzg5Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTMwNTZcblx0XHR2YXIgdGVzdDMgPSB7fTtcblx0XHQnYWJjZGVmZ2hpamtsbW5vcHFyc3QnLnNwbGl0KCcnKS5mb3JFYWNoKGZ1bmN0aW9uIChsZXR0ZXIpIHtcblx0XHRcdHRlc3QzW2xldHRlcl0gPSBsZXR0ZXI7XG5cdFx0fSk7XG5cdFx0aWYgKE9iamVjdC5rZXlzKE9iamVjdC5hc3NpZ24oe30sIHRlc3QzKSkuam9pbignJykgIT09XG5cdFx0XHRcdCdhYmNkZWZnaGlqa2xtbm9wcXJzdCcpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdHJ1ZTtcblx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0Ly8gV2UgZG9uJ3QgZXhwZWN0IGFueSBvZiB0aGUgYWJvdmUgdG8gdGhyb3csIGJ1dCBiZXR0ZXIgdG8gYmUgc2FmZS5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzaG91bGRVc2VOYXRpdmUoKSA/IE9iamVjdC5hc3NpZ24gOiBmdW5jdGlvbiAodGFyZ2V0LCBzb3VyY2UpIHtcblx0dmFyIGZyb207XG5cdHZhciB0byA9IHRvT2JqZWN0KHRhcmdldCk7XG5cdHZhciBzeW1ib2xzO1xuXG5cdGZvciAodmFyIHMgPSAxOyBzIDwgYXJndW1lbnRzLmxlbmd0aDsgcysrKSB7XG5cdFx0ZnJvbSA9IE9iamVjdChhcmd1bWVudHNbc10pO1xuXG5cdFx0Zm9yICh2YXIga2V5IGluIGZyb20pIHtcblx0XHRcdGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGZyb20sIGtleSkpIHtcblx0XHRcdFx0dG9ba2V5XSA9IGZyb21ba2V5XTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG5cdFx0XHRzeW1ib2xzID0gZ2V0T3duUHJvcGVydHlTeW1ib2xzKGZyb20pO1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzeW1ib2xzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGlmIChwcm9wSXNFbnVtZXJhYmxlLmNhbGwoZnJvbSwgc3ltYm9sc1tpXSkpIHtcblx0XHRcdFx0XHR0b1tzeW1ib2xzW2ldXSA9IGZyb21bc3ltYm9sc1tpXV07XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gdG87XG59O1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBSZWFjdFByb3BUeXBlc1NlY3JldCA9ICdTRUNSRVRfRE9fTk9UX1BBU1NfVEhJU19PUl9ZT1VfV0lMTF9CRV9GSVJFRCc7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3RQcm9wVHlwZXNTZWNyZXQ7XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIHByaW50V2FybmluZyA9IGZ1bmN0aW9uKCkge307XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHZhciBSZWFjdFByb3BUeXBlc1NlY3JldCA9IHJlcXVpcmUoJy4vbGliL1JlYWN0UHJvcFR5cGVzU2VjcmV0Jyk7XG4gIHZhciBsb2dnZWRUeXBlRmFpbHVyZXMgPSB7fTtcbiAgdmFyIGhhcyA9IEZ1bmN0aW9uLmNhbGwuYmluZChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5KTtcblxuICBwcmludFdhcm5pbmcgPSBmdW5jdGlvbih0ZXh0KSB7XG4gICAgdmFyIG1lc3NhZ2UgPSAnV2FybmluZzogJyArIHRleHQ7XG4gICAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uc29sZS5lcnJvcihtZXNzYWdlKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIC8vIC0tLSBXZWxjb21lIHRvIGRlYnVnZ2luZyBSZWFjdCAtLS1cbiAgICAgIC8vIFRoaXMgZXJyb3Igd2FzIHRocm93biBhcyBhIGNvbnZlbmllbmNlIHNvIHRoYXQgeW91IGNhbiB1c2UgdGhpcyBzdGFja1xuICAgICAgLy8gdG8gZmluZCB0aGUgY2FsbHNpdGUgdGhhdCBjYXVzZWQgdGhpcyB3YXJuaW5nIHRvIGZpcmUuXG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgfSBjYXRjaCAoeCkge31cbiAgfTtcbn1cblxuLyoqXG4gKiBBc3NlcnQgdGhhdCB0aGUgdmFsdWVzIG1hdGNoIHdpdGggdGhlIHR5cGUgc3BlY3MuXG4gKiBFcnJvciBtZXNzYWdlcyBhcmUgbWVtb3JpemVkIGFuZCB3aWxsIG9ubHkgYmUgc2hvd24gb25jZS5cbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gdHlwZVNwZWNzIE1hcCBvZiBuYW1lIHRvIGEgUmVhY3RQcm9wVHlwZVxuICogQHBhcmFtIHtvYmplY3R9IHZhbHVlcyBSdW50aW1lIHZhbHVlcyB0aGF0IG5lZWQgdG8gYmUgdHlwZS1jaGVja2VkXG4gKiBAcGFyYW0ge3N0cmluZ30gbG9jYXRpb24gZS5nLiBcInByb3BcIiwgXCJjb250ZXh0XCIsIFwiY2hpbGQgY29udGV4dFwiXG4gKiBAcGFyYW0ge3N0cmluZ30gY29tcG9uZW50TmFtZSBOYW1lIG9mIHRoZSBjb21wb25lbnQgZm9yIGVycm9yIG1lc3NhZ2VzLlxuICogQHBhcmFtIHs/RnVuY3Rpb259IGdldFN0YWNrIFJldHVybnMgdGhlIGNvbXBvbmVudCBzdGFjay5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGNoZWNrUHJvcFR5cGVzKHR5cGVTcGVjcywgdmFsdWVzLCBsb2NhdGlvbiwgY29tcG9uZW50TmFtZSwgZ2V0U3RhY2spIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBmb3IgKHZhciB0eXBlU3BlY05hbWUgaW4gdHlwZVNwZWNzKSB7XG4gICAgICBpZiAoaGFzKHR5cGVTcGVjcywgdHlwZVNwZWNOYW1lKSkge1xuICAgICAgICB2YXIgZXJyb3I7XG4gICAgICAgIC8vIFByb3AgdHlwZSB2YWxpZGF0aW9uIG1heSB0aHJvdy4gSW4gY2FzZSB0aGV5IGRvLCB3ZSBkb24ndCB3YW50IHRvXG4gICAgICAgIC8vIGZhaWwgdGhlIHJlbmRlciBwaGFzZSB3aGVyZSBpdCBkaWRuJ3QgZmFpbCBiZWZvcmUuIFNvIHdlIGxvZyBpdC5cbiAgICAgICAgLy8gQWZ0ZXIgdGhlc2UgaGF2ZSBiZWVuIGNsZWFuZWQgdXAsIHdlJ2xsIGxldCB0aGVtIHRocm93LlxuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgaXMgaW50ZW50aW9uYWxseSBhbiBpbnZhcmlhbnQgdGhhdCBnZXRzIGNhdWdodC4gSXQncyB0aGUgc2FtZVxuICAgICAgICAgIC8vIGJlaGF2aW9yIGFzIHdpdGhvdXQgdGhpcyBzdGF0ZW1lbnQgZXhjZXB0IHdpdGggYSBiZXR0ZXIgbWVzc2FnZS5cbiAgICAgICAgICBpZiAodHlwZW9mIHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB2YXIgZXJyID0gRXJyb3IoXG4gICAgICAgICAgICAgIChjb21wb25lbnROYW1lIHx8ICdSZWFjdCBjbGFzcycpICsgJzogJyArIGxvY2F0aW9uICsgJyB0eXBlIGAnICsgdHlwZVNwZWNOYW1lICsgJ2AgaXMgaW52YWxpZDsgJyArXG4gICAgICAgICAgICAgICdpdCBtdXN0IGJlIGEgZnVuY3Rpb24sIHVzdWFsbHkgZnJvbSB0aGUgYHByb3AtdHlwZXNgIHBhY2thZ2UsIGJ1dCByZWNlaXZlZCBgJyArIHR5cGVvZiB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSArICdgLidcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBlcnIubmFtZSA9ICdJbnZhcmlhbnQgVmlvbGF0aW9uJztcbiAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICB9XG4gICAgICAgICAgZXJyb3IgPSB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSh2YWx1ZXMsIHR5cGVTcGVjTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIG51bGwsIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgfSBjYXRjaCAoZXgpIHtcbiAgICAgICAgICBlcnJvciA9IGV4O1xuICAgICAgICB9XG4gICAgICAgIGlmIChlcnJvciAmJiAhKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpKSB7XG4gICAgICAgICAgcHJpbnRXYXJuaW5nKFxuICAgICAgICAgICAgKGNvbXBvbmVudE5hbWUgfHwgJ1JlYWN0IGNsYXNzJykgKyAnOiB0eXBlIHNwZWNpZmljYXRpb24gb2YgJyArXG4gICAgICAgICAgICBsb2NhdGlvbiArICcgYCcgKyB0eXBlU3BlY05hbWUgKyAnYCBpcyBpbnZhbGlkOyB0aGUgdHlwZSBjaGVja2VyICcgK1xuICAgICAgICAgICAgJ2Z1bmN0aW9uIG11c3QgcmV0dXJuIGBudWxsYCBvciBhbiBgRXJyb3JgIGJ1dCByZXR1cm5lZCBhICcgKyB0eXBlb2YgZXJyb3IgKyAnLiAnICtcbiAgICAgICAgICAgICdZb3UgbWF5IGhhdmUgZm9yZ290dGVuIHRvIHBhc3MgYW4gYXJndW1lbnQgdG8gdGhlIHR5cGUgY2hlY2tlciAnICtcbiAgICAgICAgICAgICdjcmVhdG9yIChhcnJheU9mLCBpbnN0YW5jZU9mLCBvYmplY3RPZiwgb25lT2YsIG9uZU9mVHlwZSwgYW5kICcgK1xuICAgICAgICAgICAgJ3NoYXBlIGFsbCByZXF1aXJlIGFuIGFyZ3VtZW50KS4nXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvciAmJiAhKGVycm9yLm1lc3NhZ2UgaW4gbG9nZ2VkVHlwZUZhaWx1cmVzKSkge1xuICAgICAgICAgIC8vIE9ubHkgbW9uaXRvciB0aGlzIGZhaWx1cmUgb25jZSBiZWNhdXNlIHRoZXJlIHRlbmRzIHRvIGJlIGEgbG90IG9mIHRoZVxuICAgICAgICAgIC8vIHNhbWUgZXJyb3IuXG4gICAgICAgICAgbG9nZ2VkVHlwZUZhaWx1cmVzW2Vycm9yLm1lc3NhZ2VdID0gdHJ1ZTtcblxuICAgICAgICAgIHZhciBzdGFjayA9IGdldFN0YWNrID8gZ2V0U3RhY2soKSA6ICcnO1xuXG4gICAgICAgICAgcHJpbnRXYXJuaW5nKFxuICAgICAgICAgICAgJ0ZhaWxlZCAnICsgbG9jYXRpb24gKyAnIHR5cGU6ICcgKyBlcnJvci5tZXNzYWdlICsgKHN0YWNrICE9IG51bGwgPyBzdGFjayA6ICcnKVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBSZXNldHMgd2FybmluZyBjYWNoZSB3aGVuIHRlc3RpbmcuXG4gKlxuICogQHByaXZhdGVcbiAqL1xuY2hlY2tQcm9wVHlwZXMucmVzZXRXYXJuaW5nQ2FjaGUgPSBmdW5jdGlvbigpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBsb2dnZWRUeXBlRmFpbHVyZXMgPSB7fTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNoZWNrUHJvcFR5cGVzO1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBSZWFjdElzID0gcmVxdWlyZSgncmVhY3QtaXMnKTtcbnZhciBhc3NpZ24gPSByZXF1aXJlKCdvYmplY3QtYXNzaWduJyk7XG5cbnZhciBSZWFjdFByb3BUeXBlc1NlY3JldCA9IHJlcXVpcmUoJy4vbGliL1JlYWN0UHJvcFR5cGVzU2VjcmV0Jyk7XG52YXIgY2hlY2tQcm9wVHlwZXMgPSByZXF1aXJlKCcuL2NoZWNrUHJvcFR5cGVzJyk7XG5cbnZhciBoYXMgPSBGdW5jdGlvbi5jYWxsLmJpbmQoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSk7XG52YXIgcHJpbnRXYXJuaW5nID0gZnVuY3Rpb24oKSB7fTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgcHJpbnRXYXJuaW5nID0gZnVuY3Rpb24odGV4dCkge1xuICAgIHZhciBtZXNzYWdlID0gJ1dhcm5pbmc6ICcgKyB0ZXh0O1xuICAgIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IobWVzc2FnZSk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAvLyAtLS0gV2VsY29tZSB0byBkZWJ1Z2dpbmcgUmVhY3QgLS0tXG4gICAgICAvLyBUaGlzIGVycm9yIHdhcyB0aHJvd24gYXMgYSBjb252ZW5pZW5jZSBzbyB0aGF0IHlvdSBjYW4gdXNlIHRoaXMgc3RhY2tcbiAgICAgIC8vIHRvIGZpbmQgdGhlIGNhbGxzaXRlIHRoYXQgY2F1c2VkIHRoaXMgd2FybmluZyB0byBmaXJlLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgIH0gY2F0Y2ggKHgpIHt9XG4gIH07XG59XG5cbmZ1bmN0aW9uIGVtcHR5RnVuY3Rpb25UaGF0UmV0dXJuc051bGwoKSB7XG4gIHJldHVybiBudWxsO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGlzVmFsaWRFbGVtZW50LCB0aHJvd09uRGlyZWN0QWNjZXNzKSB7XG4gIC8qIGdsb2JhbCBTeW1ib2wgKi9cbiAgdmFyIElURVJBVE9SX1NZTUJPTCA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLml0ZXJhdG9yO1xuICB2YXIgRkFVWF9JVEVSQVRPUl9TWU1CT0wgPSAnQEBpdGVyYXRvcic7IC8vIEJlZm9yZSBTeW1ib2wgc3BlYy5cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgaXRlcmF0b3IgbWV0aG9kIGZ1bmN0aW9uIGNvbnRhaW5lZCBvbiB0aGUgaXRlcmFibGUgb2JqZWN0LlxuICAgKlxuICAgKiBCZSBzdXJlIHRvIGludm9rZSB0aGUgZnVuY3Rpb24gd2l0aCB0aGUgaXRlcmFibGUgYXMgY29udGV4dDpcbiAgICpcbiAgICogICAgIHZhciBpdGVyYXRvckZuID0gZ2V0SXRlcmF0b3JGbihteUl0ZXJhYmxlKTtcbiAgICogICAgIGlmIChpdGVyYXRvckZuKSB7XG4gICAqICAgICAgIHZhciBpdGVyYXRvciA9IGl0ZXJhdG9yRm4uY2FsbChteUl0ZXJhYmxlKTtcbiAgICogICAgICAgLi4uXG4gICAqICAgICB9XG4gICAqXG4gICAqIEBwYXJhbSB7P29iamVjdH0gbWF5YmVJdGVyYWJsZVxuICAgKiBAcmV0dXJuIHs/ZnVuY3Rpb259XG4gICAqL1xuICBmdW5jdGlvbiBnZXRJdGVyYXRvckZuKG1heWJlSXRlcmFibGUpIHtcbiAgICB2YXIgaXRlcmF0b3JGbiA9IG1heWJlSXRlcmFibGUgJiYgKElURVJBVE9SX1NZTUJPTCAmJiBtYXliZUl0ZXJhYmxlW0lURVJBVE9SX1NZTUJPTF0gfHwgbWF5YmVJdGVyYWJsZVtGQVVYX0lURVJBVE9SX1NZTUJPTF0pO1xuICAgIGlmICh0eXBlb2YgaXRlcmF0b3JGbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIGl0ZXJhdG9yRm47XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENvbGxlY3Rpb24gb2YgbWV0aG9kcyB0aGF0IGFsbG93IGRlY2xhcmF0aW9uIGFuZCB2YWxpZGF0aW9uIG9mIHByb3BzIHRoYXQgYXJlXG4gICAqIHN1cHBsaWVkIHRvIFJlYWN0IGNvbXBvbmVudHMuIEV4YW1wbGUgdXNhZ2U6XG4gICAqXG4gICAqICAgdmFyIFByb3BzID0gcmVxdWlyZSgnUmVhY3RQcm9wVHlwZXMnKTtcbiAgICogICB2YXIgTXlBcnRpY2xlID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICAgKiAgICAgcHJvcFR5cGVzOiB7XG4gICAqICAgICAgIC8vIEFuIG9wdGlvbmFsIHN0cmluZyBwcm9wIG5hbWVkIFwiZGVzY3JpcHRpb25cIi5cbiAgICogICAgICAgZGVzY3JpcHRpb246IFByb3BzLnN0cmluZyxcbiAgICpcbiAgICogICAgICAgLy8gQSByZXF1aXJlZCBlbnVtIHByb3AgbmFtZWQgXCJjYXRlZ29yeVwiLlxuICAgKiAgICAgICBjYXRlZ29yeTogUHJvcHMub25lT2YoWydOZXdzJywnUGhvdG9zJ10pLmlzUmVxdWlyZWQsXG4gICAqXG4gICAqICAgICAgIC8vIEEgcHJvcCBuYW1lZCBcImRpYWxvZ1wiIHRoYXQgcmVxdWlyZXMgYW4gaW5zdGFuY2Ugb2YgRGlhbG9nLlxuICAgKiAgICAgICBkaWFsb2c6IFByb3BzLmluc3RhbmNlT2YoRGlhbG9nKS5pc1JlcXVpcmVkXG4gICAqICAgICB9LFxuICAgKiAgICAgcmVuZGVyOiBmdW5jdGlvbigpIHsgLi4uIH1cbiAgICogICB9KTtcbiAgICpcbiAgICogQSBtb3JlIGZvcm1hbCBzcGVjaWZpY2F0aW9uIG9mIGhvdyB0aGVzZSBtZXRob2RzIGFyZSB1c2VkOlxuICAgKlxuICAgKiAgIHR5cGUgOj0gYXJyYXl8Ym9vbHxmdW5jfG9iamVjdHxudW1iZXJ8c3RyaW5nfG9uZU9mKFsuLi5dKXxpbnN0YW5jZU9mKC4uLilcbiAgICogICBkZWNsIDo9IFJlYWN0UHJvcFR5cGVzLnt0eXBlfSguaXNSZXF1aXJlZCk/XG4gICAqXG4gICAqIEVhY2ggYW5kIGV2ZXJ5IGRlY2xhcmF0aW9uIHByb2R1Y2VzIGEgZnVuY3Rpb24gd2l0aCB0aGUgc2FtZSBzaWduYXR1cmUuIFRoaXNcbiAgICogYWxsb3dzIHRoZSBjcmVhdGlvbiBvZiBjdXN0b20gdmFsaWRhdGlvbiBmdW5jdGlvbnMuIEZvciBleGFtcGxlOlxuICAgKlxuICAgKiAgdmFyIE15TGluayA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgICogICAgcHJvcFR5cGVzOiB7XG4gICAqICAgICAgLy8gQW4gb3B0aW9uYWwgc3RyaW5nIG9yIFVSSSBwcm9wIG5hbWVkIFwiaHJlZlwiLlxuICAgKiAgICAgIGhyZWY6IGZ1bmN0aW9uKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSkge1xuICAgKiAgICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICogICAgICAgIGlmIChwcm9wVmFsdWUgIT0gbnVsbCAmJiB0eXBlb2YgcHJvcFZhbHVlICE9PSAnc3RyaW5nJyAmJlxuICAgKiAgICAgICAgICAgICEocHJvcFZhbHVlIGluc3RhbmNlb2YgVVJJKSkge1xuICAgKiAgICAgICAgICByZXR1cm4gbmV3IEVycm9yKFxuICAgKiAgICAgICAgICAgICdFeHBlY3RlZCBhIHN0cmluZyBvciBhbiBVUkkgZm9yICcgKyBwcm9wTmFtZSArICcgaW4gJyArXG4gICAqICAgICAgICAgICAgY29tcG9uZW50TmFtZVxuICAgKiAgICAgICAgICApO1xuICAgKiAgICAgICAgfVxuICAgKiAgICAgIH1cbiAgICogICAgfSxcbiAgICogICAgcmVuZGVyOiBmdW5jdGlvbigpIHsuLi59XG4gICAqICB9KTtcbiAgICpcbiAgICogQGludGVybmFsXG4gICAqL1xuXG4gIHZhciBBTk9OWU1PVVMgPSAnPDxhbm9ueW1vdXM+Pic7XG5cbiAgLy8gSW1wb3J0YW50IVxuICAvLyBLZWVwIHRoaXMgbGlzdCBpbiBzeW5jIHdpdGggcHJvZHVjdGlvbiB2ZXJzaW9uIGluIGAuL2ZhY3RvcnlXaXRoVGhyb3dpbmdTaGltcy5qc2AuXG4gIHZhciBSZWFjdFByb3BUeXBlcyA9IHtcbiAgICBhcnJheTogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ2FycmF5JyksXG4gICAgYm9vbDogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ2Jvb2xlYW4nKSxcbiAgICBmdW5jOiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignZnVuY3Rpb24nKSxcbiAgICBudW1iZXI6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdudW1iZXInKSxcbiAgICBvYmplY3Q6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdvYmplY3QnKSxcbiAgICBzdHJpbmc6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdzdHJpbmcnKSxcbiAgICBzeW1ib2w6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdzeW1ib2wnKSxcblxuICAgIGFueTogY3JlYXRlQW55VHlwZUNoZWNrZXIoKSxcbiAgICBhcnJheU9mOiBjcmVhdGVBcnJheU9mVHlwZUNoZWNrZXIsXG4gICAgZWxlbWVudDogY3JlYXRlRWxlbWVudFR5cGVDaGVja2VyKCksXG4gICAgZWxlbWVudFR5cGU6IGNyZWF0ZUVsZW1lbnRUeXBlVHlwZUNoZWNrZXIoKSxcbiAgICBpbnN0YW5jZU9mOiBjcmVhdGVJbnN0YW5jZVR5cGVDaGVja2VyLFxuICAgIG5vZGU6IGNyZWF0ZU5vZGVDaGVja2VyKCksXG4gICAgb2JqZWN0T2Y6IGNyZWF0ZU9iamVjdE9mVHlwZUNoZWNrZXIsXG4gICAgb25lT2Y6IGNyZWF0ZUVudW1UeXBlQ2hlY2tlcixcbiAgICBvbmVPZlR5cGU6IGNyZWF0ZVVuaW9uVHlwZUNoZWNrZXIsXG4gICAgc2hhcGU6IGNyZWF0ZVNoYXBlVHlwZUNoZWNrZXIsXG4gICAgZXhhY3Q6IGNyZWF0ZVN0cmljdFNoYXBlVHlwZUNoZWNrZXIsXG4gIH07XG5cbiAgLyoqXG4gICAqIGlubGluZWQgT2JqZWN0LmlzIHBvbHlmaWxsIHRvIGF2b2lkIHJlcXVpcmluZyBjb25zdW1lcnMgc2hpcCB0aGVpciBvd25cbiAgICogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvT2JqZWN0L2lzXG4gICAqL1xuICAvKmVzbGludC1kaXNhYmxlIG5vLXNlbGYtY29tcGFyZSovXG4gIGZ1bmN0aW9uIGlzKHgsIHkpIHtcbiAgICAvLyBTYW1lVmFsdWUgYWxnb3JpdGhtXG4gICAgaWYgKHggPT09IHkpIHtcbiAgICAgIC8vIFN0ZXBzIDEtNSwgNy0xMFxuICAgICAgLy8gU3RlcHMgNi5iLTYuZTogKzAgIT0gLTBcbiAgICAgIHJldHVybiB4ICE9PSAwIHx8IDEgLyB4ID09PSAxIC8geTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gU3RlcCA2LmE6IE5hTiA9PSBOYU5cbiAgICAgIHJldHVybiB4ICE9PSB4ICYmIHkgIT09IHk7XG4gICAgfVxuICB9XG4gIC8qZXNsaW50LWVuYWJsZSBuby1zZWxmLWNvbXBhcmUqL1xuXG4gIC8qKlxuICAgKiBXZSB1c2UgYW4gRXJyb3ItbGlrZSBvYmplY3QgZm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHkgYXMgcGVvcGxlIG1heSBjYWxsXG4gICAqIFByb3BUeXBlcyBkaXJlY3RseSBhbmQgaW5zcGVjdCB0aGVpciBvdXRwdXQuIEhvd2V2ZXIsIHdlIGRvbid0IHVzZSByZWFsXG4gICAqIEVycm9ycyBhbnltb3JlLiBXZSBkb24ndCBpbnNwZWN0IHRoZWlyIHN0YWNrIGFueXdheSwgYW5kIGNyZWF0aW5nIHRoZW1cbiAgICogaXMgcHJvaGliaXRpdmVseSBleHBlbnNpdmUgaWYgdGhleSBhcmUgY3JlYXRlZCB0b28gb2Z0ZW4sIHN1Y2ggYXMgd2hhdFxuICAgKiBoYXBwZW5zIGluIG9uZU9mVHlwZSgpIGZvciBhbnkgdHlwZSBiZWZvcmUgdGhlIG9uZSB0aGF0IG1hdGNoZWQuXG4gICAqL1xuICBmdW5jdGlvbiBQcm9wVHlwZUVycm9yKG1lc3NhZ2UpIHtcbiAgICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xuICAgIHRoaXMuc3RhY2sgPSAnJztcbiAgfVxuICAvLyBNYWtlIGBpbnN0YW5jZW9mIEVycm9yYCBzdGlsbCB3b3JrIGZvciByZXR1cm5lZCBlcnJvcnMuXG4gIFByb3BUeXBlRXJyb3IucHJvdG90eXBlID0gRXJyb3IucHJvdG90eXBlO1xuXG4gIGZ1bmN0aW9uIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHZhciBtYW51YWxQcm9wVHlwZUNhbGxDYWNoZSA9IHt9O1xuICAgICAgdmFyIG1hbnVhbFByb3BUeXBlV2FybmluZ0NvdW50ID0gMDtcbiAgICB9XG4gICAgZnVuY3Rpb24gY2hlY2tUeXBlKGlzUmVxdWlyZWQsIHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSwgc2VjcmV0KSB7XG4gICAgICBjb21wb25lbnROYW1lID0gY29tcG9uZW50TmFtZSB8fCBBTk9OWU1PVVM7XG4gICAgICBwcm9wRnVsbE5hbWUgPSBwcm9wRnVsbE5hbWUgfHwgcHJvcE5hbWU7XG5cbiAgICAgIGlmIChzZWNyZXQgIT09IFJlYWN0UHJvcFR5cGVzU2VjcmV0KSB7XG4gICAgICAgIGlmICh0aHJvd09uRGlyZWN0QWNjZXNzKSB7XG4gICAgICAgICAgLy8gTmV3IGJlaGF2aW9yIG9ubHkgZm9yIHVzZXJzIG9mIGBwcm9wLXR5cGVzYCBwYWNrYWdlXG4gICAgICAgICAgdmFyIGVyciA9IG5ldyBFcnJvcihcbiAgICAgICAgICAgICdDYWxsaW5nIFByb3BUeXBlcyB2YWxpZGF0b3JzIGRpcmVjdGx5IGlzIG5vdCBzdXBwb3J0ZWQgYnkgdGhlIGBwcm9wLXR5cGVzYCBwYWNrYWdlLiAnICtcbiAgICAgICAgICAgICdVc2UgYFByb3BUeXBlcy5jaGVja1Byb3BUeXBlcygpYCB0byBjYWxsIHRoZW0uICcgK1xuICAgICAgICAgICAgJ1JlYWQgbW9yZSBhdCBodHRwOi8vZmIubWUvdXNlLWNoZWNrLXByb3AtdHlwZXMnXG4gICAgICAgICAgKTtcbiAgICAgICAgICBlcnIubmFtZSA9ICdJbnZhcmlhbnQgVmlvbGF0aW9uJztcbiAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgIH0gZWxzZSBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAvLyBPbGQgYmVoYXZpb3IgZm9yIHBlb3BsZSB1c2luZyBSZWFjdC5Qcm9wVHlwZXNcbiAgICAgICAgICB2YXIgY2FjaGVLZXkgPSBjb21wb25lbnROYW1lICsgJzonICsgcHJvcE5hbWU7XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgIW1hbnVhbFByb3BUeXBlQ2FsbENhY2hlW2NhY2hlS2V5XSAmJlxuICAgICAgICAgICAgLy8gQXZvaWQgc3BhbW1pbmcgdGhlIGNvbnNvbGUgYmVjYXVzZSB0aGV5IGFyZSBvZnRlbiBub3QgYWN0aW9uYWJsZSBleGNlcHQgZm9yIGxpYiBhdXRob3JzXG4gICAgICAgICAgICBtYW51YWxQcm9wVHlwZVdhcm5pbmdDb3VudCA8IDNcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIHByaW50V2FybmluZyhcbiAgICAgICAgICAgICAgJ1lvdSBhcmUgbWFudWFsbHkgY2FsbGluZyBhIFJlYWN0LlByb3BUeXBlcyB2YWxpZGF0aW9uICcgK1xuICAgICAgICAgICAgICAnZnVuY3Rpb24gZm9yIHRoZSBgJyArIHByb3BGdWxsTmFtZSArICdgIHByb3Agb24gYCcgKyBjb21wb25lbnROYW1lICArICdgLiBUaGlzIGlzIGRlcHJlY2F0ZWQgJyArXG4gICAgICAgICAgICAgICdhbmQgd2lsbCB0aHJvdyBpbiB0aGUgc3RhbmRhbG9uZSBgcHJvcC10eXBlc2AgcGFja2FnZS4gJyArXG4gICAgICAgICAgICAgICdZb3UgbWF5IGJlIHNlZWluZyB0aGlzIHdhcm5pbmcgZHVlIHRvIGEgdGhpcmQtcGFydHkgUHJvcFR5cGVzICcgK1xuICAgICAgICAgICAgICAnbGlicmFyeS4gU2VlIGh0dHBzOi8vZmIubWUvcmVhY3Qtd2FybmluZy1kb250LWNhbGwtcHJvcHR5cGVzICcgKyAnZm9yIGRldGFpbHMuJ1xuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIG1hbnVhbFByb3BUeXBlQ2FsbENhY2hlW2NhY2hlS2V5XSA9IHRydWU7XG4gICAgICAgICAgICBtYW51YWxQcm9wVHlwZVdhcm5pbmdDb3VudCsrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHByb3BzW3Byb3BOYW1lXSA9PSBudWxsKSB7XG4gICAgICAgIGlmIChpc1JlcXVpcmVkKSB7XG4gICAgICAgICAgaWYgKHByb3BzW3Byb3BOYW1lXSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdUaGUgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIGlzIG1hcmtlZCBhcyByZXF1aXJlZCAnICsgKCdpbiBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgYnV0IGl0cyB2YWx1ZSBpcyBgbnVsbGAuJykpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ1RoZSAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2AgaXMgbWFya2VkIGFzIHJlcXVpcmVkIGluICcgKyAoJ2AnICsgY29tcG9uZW50TmFtZSArICdgLCBidXQgaXRzIHZhbHVlIGlzIGB1bmRlZmluZWRgLicpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBjaGFpbmVkQ2hlY2tUeXBlID0gY2hlY2tUeXBlLmJpbmQobnVsbCwgZmFsc2UpO1xuICAgIGNoYWluZWRDaGVja1R5cGUuaXNSZXF1aXJlZCA9IGNoZWNrVHlwZS5iaW5kKG51bGwsIHRydWUpO1xuXG4gICAgcmV0dXJuIGNoYWluZWRDaGVja1R5cGU7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcihleHBlY3RlZFR5cGUpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUsIHNlY3JldCkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICBpZiAocHJvcFR5cGUgIT09IGV4cGVjdGVkVHlwZSkge1xuICAgICAgICAvLyBgcHJvcFZhbHVlYCBiZWluZyBpbnN0YW5jZSBvZiwgc2F5LCBkYXRlL3JlZ2V4cCwgcGFzcyB0aGUgJ29iamVjdCdcbiAgICAgICAgLy8gY2hlY2ssIGJ1dCB3ZSBjYW4gb2ZmZXIgYSBtb3JlIHByZWNpc2UgZXJyb3IgbWVzc2FnZSBoZXJlIHJhdGhlciB0aGFuXG4gICAgICAgIC8vICdvZiB0eXBlIGBvYmplY3RgJy5cbiAgICAgICAgdmFyIHByZWNpc2VUeXBlID0gZ2V0UHJlY2lzZVR5cGUocHJvcFZhbHVlKTtcblxuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBwcmVjaXNlVHlwZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCAnKSArICgnYCcgKyBleHBlY3RlZFR5cGUgKyAnYC4nKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUFueVR5cGVDaGVja2VyKCkge1xuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcihlbXB0eUZ1bmN0aW9uVGhhdFJldHVybnNOdWxsKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUFycmF5T2ZUeXBlQ2hlY2tlcih0eXBlQ2hlY2tlcikge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgaWYgKHR5cGVvZiB0eXBlQ2hlY2tlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ1Byb3BlcnR5IGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgY29tcG9uZW50IGAnICsgY29tcG9uZW50TmFtZSArICdgIGhhcyBpbnZhbGlkIFByb3BUeXBlIG5vdGF0aW9uIGluc2lkZSBhcnJheU9mLicpO1xuICAgICAgfVxuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIGlmICghQXJyYXkuaXNBcnJheShwcm9wVmFsdWUpKSB7XG4gICAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIHByb3BUeXBlICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGFuIGFycmF5LicpKTtcbiAgICAgIH1cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcFZhbHVlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBlcnJvciA9IHR5cGVDaGVja2VyKHByb3BWYWx1ZSwgaSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSArICdbJyArIGkgKyAnXScsIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlRWxlbWVudFR5cGVDaGVja2VyKCkge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIGlmICghaXNWYWxpZEVsZW1lbnQocHJvcFZhbHVlKSkge1xuICAgICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBwcm9wVHlwZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBhIHNpbmdsZSBSZWFjdEVsZW1lbnQuJykpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVFbGVtZW50VHlwZVR5cGVDaGVja2VyKCkge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIGlmICghUmVhY3RJcy5pc1ZhbGlkRWxlbWVudFR5cGUocHJvcFZhbHVlKSkge1xuICAgICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBwcm9wVHlwZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBhIHNpbmdsZSBSZWFjdEVsZW1lbnQgdHlwZS4nKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUluc3RhbmNlVHlwZUNoZWNrZXIoZXhwZWN0ZWRDbGFzcykge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgaWYgKCEocHJvcHNbcHJvcE5hbWVdIGluc3RhbmNlb2YgZXhwZWN0ZWRDbGFzcykpIHtcbiAgICAgICAgdmFyIGV4cGVjdGVkQ2xhc3NOYW1lID0gZXhwZWN0ZWRDbGFzcy5uYW1lIHx8IEFOT05ZTU9VUztcbiAgICAgICAgdmFyIGFjdHVhbENsYXNzTmFtZSA9IGdldENsYXNzTmFtZShwcm9wc1twcm9wTmFtZV0pO1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBhY3R1YWxDbGFzc05hbWUgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgJykgKyAoJ2luc3RhbmNlIG9mIGAnICsgZXhwZWN0ZWRDbGFzc05hbWUgKyAnYC4nKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUVudW1UeXBlQ2hlY2tlcihleHBlY3RlZFZhbHVlcykge1xuICAgIGlmICghQXJyYXkuaXNBcnJheShleHBlY3RlZFZhbHVlcykpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICAgIHByaW50V2FybmluZyhcbiAgICAgICAgICAgICdJbnZhbGlkIGFyZ3VtZW50cyBzdXBwbGllZCB0byBvbmVPZiwgZXhwZWN0ZWQgYW4gYXJyYXksIGdvdCAnICsgYXJndW1lbnRzLmxlbmd0aCArICcgYXJndW1lbnRzLiAnICtcbiAgICAgICAgICAgICdBIGNvbW1vbiBtaXN0YWtlIGlzIHRvIHdyaXRlIG9uZU9mKHgsIHksIHopIGluc3RlYWQgb2Ygb25lT2YoW3gsIHksIHpdKS4nXG4gICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwcmludFdhcm5pbmcoJ0ludmFsaWQgYXJndW1lbnQgc3VwcGxpZWQgdG8gb25lT2YsIGV4cGVjdGVkIGFuIGFycmF5LicpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gZW1wdHlGdW5jdGlvblRoYXRSZXR1cm5zTnVsbDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGV4cGVjdGVkVmFsdWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChpcyhwcm9wVmFsdWUsIGV4cGVjdGVkVmFsdWVzW2ldKSkge1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHZhciB2YWx1ZXNTdHJpbmcgPSBKU09OLnN0cmluZ2lmeShleHBlY3RlZFZhbHVlcywgZnVuY3Rpb24gcmVwbGFjZXIoa2V5LCB2YWx1ZSkge1xuICAgICAgICBpZiAoZ2V0UHJvcFR5cGUodmFsdWUpID09PSAnc3ltYm9sJykge1xuICAgICAgICAgIHJldHVybiBTdHJpbmcodmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB2YWx1ZSBgJyArIFN0cmluZyhwcm9wVmFsdWUpICsgJ2AgJyArICgnc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIG9uZSBvZiAnICsgdmFsdWVzU3RyaW5nICsgJy4nKSk7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVPYmplY3RPZlR5cGVDaGVja2VyKHR5cGVDaGVja2VyKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICBpZiAodHlwZW9mIHR5cGVDaGVja2VyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignUHJvcGVydHkgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiBjb21wb25lbnQgYCcgKyBjb21wb25lbnROYW1lICsgJ2AgaGFzIGludmFsaWQgUHJvcFR5cGUgbm90YXRpb24gaW5zaWRlIG9iamVjdE9mLicpO1xuICAgICAgfVxuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICBpZiAocHJvcFR5cGUgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIHByb3BUeXBlICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGFuIG9iamVjdC4nKSk7XG4gICAgICB9XG4gICAgICBmb3IgKHZhciBrZXkgaW4gcHJvcFZhbHVlKSB7XG4gICAgICAgIGlmIChoYXMocHJvcFZhbHVlLCBrZXkpKSB7XG4gICAgICAgICAgdmFyIGVycm9yID0gdHlwZUNoZWNrZXIocHJvcFZhbHVlLCBrZXksIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUgKyAnLicgKyBrZXksIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVVbmlvblR5cGVDaGVja2VyKGFycmF5T2ZUeXBlQ2hlY2tlcnMpIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoYXJyYXlPZlR5cGVDaGVja2VycykpIHtcbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyBwcmludFdhcm5pbmcoJ0ludmFsaWQgYXJndW1lbnQgc3VwcGxpZWQgdG8gb25lT2ZUeXBlLCBleHBlY3RlZCBhbiBpbnN0YW5jZSBvZiBhcnJheS4nKSA6IHZvaWQgMDtcbiAgICAgIHJldHVybiBlbXB0eUZ1bmN0aW9uVGhhdFJldHVybnNOdWxsO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyYXlPZlR5cGVDaGVja2Vycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGNoZWNrZXIgPSBhcnJheU9mVHlwZUNoZWNrZXJzW2ldO1xuICAgICAgaWYgKHR5cGVvZiBjaGVja2VyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHByaW50V2FybmluZyhcbiAgICAgICAgICAnSW52YWxpZCBhcmd1bWVudCBzdXBwbGllZCB0byBvbmVPZlR5cGUuIEV4cGVjdGVkIGFuIGFycmF5IG9mIGNoZWNrIGZ1bmN0aW9ucywgYnV0ICcgK1xuICAgICAgICAgICdyZWNlaXZlZCAnICsgZ2V0UG9zdGZpeEZvclR5cGVXYXJuaW5nKGNoZWNrZXIpICsgJyBhdCBpbmRleCAnICsgaSArICcuJ1xuICAgICAgICApO1xuICAgICAgICByZXR1cm4gZW1wdHlGdW5jdGlvblRoYXRSZXR1cm5zTnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyYXlPZlR5cGVDaGVja2Vycy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgY2hlY2tlciA9IGFycmF5T2ZUeXBlQ2hlY2tlcnNbaV07XG4gICAgICAgIGlmIChjaGVja2VyKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSwgUmVhY3RQcm9wVHlwZXNTZWNyZXQpID09IG51bGwpIHtcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIHN1cHBsaWVkIHRvICcgKyAoJ2AnICsgY29tcG9uZW50TmFtZSArICdgLicpKTtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZU5vZGVDaGVja2VyKCkge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgaWYgKCFpc05vZGUocHJvcHNbcHJvcE5hbWVdKSkge1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIHN1cHBsaWVkIHRvICcgKyAoJ2AnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBhIFJlYWN0Tm9kZS4nKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVNoYXBlVHlwZUNoZWNrZXIoc2hhcGVUeXBlcykge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICBpZiAocHJvcFR5cGUgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSBgJyArIHByb3BUeXBlICsgJ2AgJyArICgnc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGBvYmplY3RgLicpKTtcbiAgICAgIH1cbiAgICAgIGZvciAodmFyIGtleSBpbiBzaGFwZVR5cGVzKSB7XG4gICAgICAgIHZhciBjaGVja2VyID0gc2hhcGVUeXBlc1trZXldO1xuICAgICAgICBpZiAoIWNoZWNrZXIpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgZXJyb3IgPSBjaGVja2VyKHByb3BWYWx1ZSwga2V5LCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lICsgJy4nICsga2V5LCBSZWFjdFByb3BUeXBlc1NlY3JldCk7XG4gICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgIHJldHVybiBlcnJvcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVTdHJpY3RTaGFwZVR5cGVDaGVja2VyKHNoYXBlVHlwZXMpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgaWYgKHByb3BUeXBlICE9PSAnb2JqZWN0Jykge1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgYCcgKyBwcm9wVHlwZSArICdgICcgKyAoJ3N1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBgb2JqZWN0YC4nKSk7XG4gICAgICB9XG4gICAgICAvLyBXZSBuZWVkIHRvIGNoZWNrIGFsbCBrZXlzIGluIGNhc2Ugc29tZSBhcmUgcmVxdWlyZWQgYnV0IG1pc3NpbmcgZnJvbVxuICAgICAgLy8gcHJvcHMuXG4gICAgICB2YXIgYWxsS2V5cyA9IGFzc2lnbih7fSwgcHJvcHNbcHJvcE5hbWVdLCBzaGFwZVR5cGVzKTtcbiAgICAgIGZvciAodmFyIGtleSBpbiBhbGxLZXlzKSB7XG4gICAgICAgIHZhciBjaGVja2VyID0gc2hhcGVUeXBlc1trZXldO1xuICAgICAgICBpZiAoIWNoZWNrZXIpIHtcbiAgICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoXG4gICAgICAgICAgICAnSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Aga2V5IGAnICsga2V5ICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AuJyArXG4gICAgICAgICAgICAnXFxuQmFkIG9iamVjdDogJyArIEpTT04uc3RyaW5naWZ5KHByb3BzW3Byb3BOYW1lXSwgbnVsbCwgJyAgJykgK1xuICAgICAgICAgICAgJ1xcblZhbGlkIGtleXM6ICcgKyAgSlNPTi5zdHJpbmdpZnkoT2JqZWN0LmtleXMoc2hhcGVUeXBlcyksIG51bGwsICcgICcpXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgZXJyb3IgPSBjaGVja2VyKHByb3BWYWx1ZSwga2V5LCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lICsgJy4nICsga2V5LCBSZWFjdFByb3BUeXBlc1NlY3JldCk7XG4gICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgIHJldHVybiBlcnJvcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzTm9kZShwcm9wVmFsdWUpIHtcbiAgICBzd2l0Y2ggKHR5cGVvZiBwcm9wVmFsdWUpIHtcbiAgICAgIGNhc2UgJ251bWJlcic6XG4gICAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgY2FzZSAndW5kZWZpbmVkJzpcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICBjYXNlICdib29sZWFuJzpcbiAgICAgICAgcmV0dXJuICFwcm9wVmFsdWU7XG4gICAgICBjYXNlICdvYmplY3QnOlxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShwcm9wVmFsdWUpKSB7XG4gICAgICAgICAgcmV0dXJuIHByb3BWYWx1ZS5ldmVyeShpc05vZGUpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwcm9wVmFsdWUgPT09IG51bGwgfHwgaXNWYWxpZEVsZW1lbnQocHJvcFZhbHVlKSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGl0ZXJhdG9yRm4gPSBnZXRJdGVyYXRvckZuKHByb3BWYWx1ZSk7XG4gICAgICAgIGlmIChpdGVyYXRvckZuKSB7XG4gICAgICAgICAgdmFyIGl0ZXJhdG9yID0gaXRlcmF0b3JGbi5jYWxsKHByb3BWYWx1ZSk7XG4gICAgICAgICAgdmFyIHN0ZXA7XG4gICAgICAgICAgaWYgKGl0ZXJhdG9yRm4gIT09IHByb3BWYWx1ZS5lbnRyaWVzKSB7XG4gICAgICAgICAgICB3aGlsZSAoIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lKSB7XG4gICAgICAgICAgICAgIGlmICghaXNOb2RlKHN0ZXAudmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIEl0ZXJhdG9yIHdpbGwgcHJvdmlkZSBlbnRyeSBbayx2XSB0dXBsZXMgcmF0aGVyIHRoYW4gdmFsdWVzLlxuICAgICAgICAgICAgd2hpbGUgKCEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZSkge1xuICAgICAgICAgICAgICB2YXIgZW50cnkgPSBzdGVwLnZhbHVlO1xuICAgICAgICAgICAgICBpZiAoZW50cnkpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWlzTm9kZShlbnRyeVsxXSkpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaXNTeW1ib2wocHJvcFR5cGUsIHByb3BWYWx1ZSkge1xuICAgIC8vIE5hdGl2ZSBTeW1ib2wuXG4gICAgaWYgKHByb3BUeXBlID09PSAnc3ltYm9sJykge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgLy8gMTkuNC4zLjUgU3ltYm9sLnByb3RvdHlwZVtAQHRvU3RyaW5nVGFnXSA9PT0gJ1N5bWJvbCdcbiAgICBpZiAocHJvcFZhbHVlWydAQHRvU3RyaW5nVGFnJ10gPT09ICdTeW1ib2wnKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBGYWxsYmFjayBmb3Igbm9uLXNwZWMgY29tcGxpYW50IFN5bWJvbHMgd2hpY2ggYXJlIHBvbHlmaWxsZWQuXG4gICAgaWYgKHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgcHJvcFZhbHVlIGluc3RhbmNlb2YgU3ltYm9sKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvLyBFcXVpdmFsZW50IG9mIGB0eXBlb2ZgIGJ1dCB3aXRoIHNwZWNpYWwgaGFuZGxpbmcgZm9yIGFycmF5IGFuZCByZWdleHAuXG4gIGZ1bmN0aW9uIGdldFByb3BUeXBlKHByb3BWYWx1ZSkge1xuICAgIHZhciBwcm9wVHlwZSA9IHR5cGVvZiBwcm9wVmFsdWU7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkocHJvcFZhbHVlKSkge1xuICAgICAgcmV0dXJuICdhcnJheSc7XG4gICAgfVxuICAgIGlmIChwcm9wVmFsdWUgaW5zdGFuY2VvZiBSZWdFeHApIHtcbiAgICAgIC8vIE9sZCB3ZWJraXRzIChhdCBsZWFzdCB1bnRpbCBBbmRyb2lkIDQuMCkgcmV0dXJuICdmdW5jdGlvbicgcmF0aGVyIHRoYW5cbiAgICAgIC8vICdvYmplY3QnIGZvciB0eXBlb2YgYSBSZWdFeHAuIFdlJ2xsIG5vcm1hbGl6ZSB0aGlzIGhlcmUgc28gdGhhdCAvYmxhL1xuICAgICAgLy8gcGFzc2VzIFByb3BUeXBlcy5vYmplY3QuXG4gICAgICByZXR1cm4gJ29iamVjdCc7XG4gICAgfVxuICAgIGlmIChpc1N5bWJvbChwcm9wVHlwZSwgcHJvcFZhbHVlKSkge1xuICAgICAgcmV0dXJuICdzeW1ib2wnO1xuICAgIH1cbiAgICByZXR1cm4gcHJvcFR5cGU7XG4gIH1cblxuICAvLyBUaGlzIGhhbmRsZXMgbW9yZSB0eXBlcyB0aGFuIGBnZXRQcm9wVHlwZWAuIE9ubHkgdXNlZCBmb3IgZXJyb3IgbWVzc2FnZXMuXG4gIC8vIFNlZSBgY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXJgLlxuICBmdW5jdGlvbiBnZXRQcmVjaXNlVHlwZShwcm9wVmFsdWUpIHtcbiAgICBpZiAodHlwZW9mIHByb3BWYWx1ZSA9PT0gJ3VuZGVmaW5lZCcgfHwgcHJvcFZhbHVlID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gJycgKyBwcm9wVmFsdWU7XG4gICAgfVxuICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgaWYgKHByb3BUeXBlID09PSAnb2JqZWN0Jykge1xuICAgICAgaWYgKHByb3BWYWx1ZSBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgICAgcmV0dXJuICdkYXRlJztcbiAgICAgIH0gZWxzZSBpZiAocHJvcFZhbHVlIGluc3RhbmNlb2YgUmVnRXhwKSB7XG4gICAgICAgIHJldHVybiAncmVnZXhwJztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHByb3BUeXBlO1xuICB9XG5cbiAgLy8gUmV0dXJucyBhIHN0cmluZyB0aGF0IGlzIHBvc3RmaXhlZCB0byBhIHdhcm5pbmcgYWJvdXQgYW4gaW52YWxpZCB0eXBlLlxuICAvLyBGb3IgZXhhbXBsZSwgXCJ1bmRlZmluZWRcIiBvciBcIm9mIHR5cGUgYXJyYXlcIlxuICBmdW5jdGlvbiBnZXRQb3N0Zml4Rm9yVHlwZVdhcm5pbmcodmFsdWUpIHtcbiAgICB2YXIgdHlwZSA9IGdldFByZWNpc2VUeXBlKHZhbHVlKTtcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgJ2FycmF5JzpcbiAgICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICAgIHJldHVybiAnYW4gJyArIHR5cGU7XG4gICAgICBjYXNlICdib29sZWFuJzpcbiAgICAgIGNhc2UgJ2RhdGUnOlxuICAgICAgY2FzZSAncmVnZXhwJzpcbiAgICAgICAgcmV0dXJuICdhICcgKyB0eXBlO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHR5cGU7XG4gICAgfVxuICB9XG5cbiAgLy8gUmV0dXJucyBjbGFzcyBuYW1lIG9mIHRoZSBvYmplY3QsIGlmIGFueS5cbiAgZnVuY3Rpb24gZ2V0Q2xhc3NOYW1lKHByb3BWYWx1ZSkge1xuICAgIGlmICghcHJvcFZhbHVlLmNvbnN0cnVjdG9yIHx8ICFwcm9wVmFsdWUuY29uc3RydWN0b3IubmFtZSkge1xuICAgICAgcmV0dXJuIEFOT05ZTU9VUztcbiAgICB9XG4gICAgcmV0dXJuIHByb3BWYWx1ZS5jb25zdHJ1Y3Rvci5uYW1lO1xuICB9XG5cbiAgUmVhY3RQcm9wVHlwZXMuY2hlY2tQcm9wVHlwZXMgPSBjaGVja1Byb3BUeXBlcztcbiAgUmVhY3RQcm9wVHlwZXMucmVzZXRXYXJuaW5nQ2FjaGUgPSBjaGVja1Byb3BUeXBlcy5yZXNldFdhcm5pbmdDYWNoZTtcbiAgUmVhY3RQcm9wVHlwZXMuUHJvcFR5cGVzID0gUmVhY3RQcm9wVHlwZXM7XG5cbiAgcmV0dXJuIFJlYWN0UHJvcFR5cGVzO1xufTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgUmVhY3RQcm9wVHlwZXNTZWNyZXQgPSByZXF1aXJlKCcuL2xpYi9SZWFjdFByb3BUeXBlc1NlY3JldCcpO1xuXG5mdW5jdGlvbiBlbXB0eUZ1bmN0aW9uKCkge31cbmZ1bmN0aW9uIGVtcHR5RnVuY3Rpb25XaXRoUmVzZXQoKSB7fVxuZW1wdHlGdW5jdGlvbldpdGhSZXNldC5yZXNldFdhcm5pbmdDYWNoZSA9IGVtcHR5RnVuY3Rpb247XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIHNoaW0ocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lLCBzZWNyZXQpIHtcbiAgICBpZiAoc2VjcmV0ID09PSBSZWFjdFByb3BUeXBlc1NlY3JldCkge1xuICAgICAgLy8gSXQgaXMgc3RpbGwgc2FmZSB3aGVuIGNhbGxlZCBmcm9tIFJlYWN0LlxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgZXJyID0gbmV3IEVycm9yKFxuICAgICAgJ0NhbGxpbmcgUHJvcFR5cGVzIHZhbGlkYXRvcnMgZGlyZWN0bHkgaXMgbm90IHN1cHBvcnRlZCBieSB0aGUgYHByb3AtdHlwZXNgIHBhY2thZ2UuICcgK1xuICAgICAgJ1VzZSBQcm9wVHlwZXMuY2hlY2tQcm9wVHlwZXMoKSB0byBjYWxsIHRoZW0uICcgK1xuICAgICAgJ1JlYWQgbW9yZSBhdCBodHRwOi8vZmIubWUvdXNlLWNoZWNrLXByb3AtdHlwZXMnXG4gICAgKTtcbiAgICBlcnIubmFtZSA9ICdJbnZhcmlhbnQgVmlvbGF0aW9uJztcbiAgICB0aHJvdyBlcnI7XG4gIH07XG4gIHNoaW0uaXNSZXF1aXJlZCA9IHNoaW07XG4gIGZ1bmN0aW9uIGdldFNoaW0oKSB7XG4gICAgcmV0dXJuIHNoaW07XG4gIH07XG4gIC8vIEltcG9ydGFudCFcbiAgLy8gS2VlcCB0aGlzIGxpc3QgaW4gc3luYyB3aXRoIHByb2R1Y3Rpb24gdmVyc2lvbiBpbiBgLi9mYWN0b3J5V2l0aFR5cGVDaGVja2Vycy5qc2AuXG4gIHZhciBSZWFjdFByb3BUeXBlcyA9IHtcbiAgICBhcnJheTogc2hpbSxcbiAgICBib29sOiBzaGltLFxuICAgIGZ1bmM6IHNoaW0sXG4gICAgbnVtYmVyOiBzaGltLFxuICAgIG9iamVjdDogc2hpbSxcbiAgICBzdHJpbmc6IHNoaW0sXG4gICAgc3ltYm9sOiBzaGltLFxuXG4gICAgYW55OiBzaGltLFxuICAgIGFycmF5T2Y6IGdldFNoaW0sXG4gICAgZWxlbWVudDogc2hpbSxcbiAgICBlbGVtZW50VHlwZTogc2hpbSxcbiAgICBpbnN0YW5jZU9mOiBnZXRTaGltLFxuICAgIG5vZGU6IHNoaW0sXG4gICAgb2JqZWN0T2Y6IGdldFNoaW0sXG4gICAgb25lT2Y6IGdldFNoaW0sXG4gICAgb25lT2ZUeXBlOiBnZXRTaGltLFxuICAgIHNoYXBlOiBnZXRTaGltLFxuICAgIGV4YWN0OiBnZXRTaGltLFxuXG4gICAgY2hlY2tQcm9wVHlwZXM6IGVtcHR5RnVuY3Rpb25XaXRoUmVzZXQsXG4gICAgcmVzZXRXYXJuaW5nQ2FjaGU6IGVtcHR5RnVuY3Rpb25cbiAgfTtcblxuICBSZWFjdFByb3BUeXBlcy5Qcm9wVHlwZXMgPSBSZWFjdFByb3BUeXBlcztcblxuICByZXR1cm4gUmVhY3RQcm9wVHlwZXM7XG59O1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICB2YXIgUmVhY3RJcyA9IHJlcXVpcmUoJ3JlYWN0LWlzJyk7XG5cbiAgLy8gQnkgZXhwbGljaXRseSB1c2luZyBgcHJvcC10eXBlc2AgeW91IGFyZSBvcHRpbmcgaW50byBuZXcgZGV2ZWxvcG1lbnQgYmVoYXZpb3IuXG4gIC8vIGh0dHA6Ly9mYi5tZS9wcm9wLXR5cGVzLWluLXByb2RcbiAgdmFyIHRocm93T25EaXJlY3RBY2Nlc3MgPSB0cnVlO1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZmFjdG9yeVdpdGhUeXBlQ2hlY2tlcnMnKShSZWFjdElzLmlzRWxlbWVudCwgdGhyb3dPbkRpcmVjdEFjY2Vzcyk7XG59IGVsc2Uge1xuICAvLyBCeSBleHBsaWNpdGx5IHVzaW5nIGBwcm9wLXR5cGVzYCB5b3UgYXJlIG9wdGluZyBpbnRvIG5ldyBwcm9kdWN0aW9uIGJlaGF2aW9yLlxuICAvLyBodHRwOi8vZmIubWUvcHJvcC10eXBlcy1pbi1wcm9kXG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9mYWN0b3J5V2l0aFRocm93aW5nU2hpbXMnKSgpO1xufVxuIiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBkZWZhdWx0OiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gaGFzQ2xhc3M7XG5cbmZ1bmN0aW9uIGhhc0NsYXNzKGVsZW1lbnQsIGNsYXNzTmFtZSkge1xuICBpZiAoZWxlbWVudC5jbGFzc0xpc3QpIHJldHVybiAhIWNsYXNzTmFtZSAmJiBlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhjbGFzc05hbWUpO2Vsc2UgcmV0dXJuIChcIiBcIiArIChlbGVtZW50LmNsYXNzTmFtZS5iYXNlVmFsIHx8IGVsZW1lbnQuY2xhc3NOYW1lKSArIFwiIFwiKS5pbmRleE9mKFwiIFwiICsgY2xhc3NOYW1lICsgXCIgXCIpICE9PSAtMTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzW1wiZGVmYXVsdFwiXTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSBhZGRDbGFzcztcblxudmFyIF9oYXNDbGFzcyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vaGFzQ2xhc3NcIikpO1xuXG5mdW5jdGlvbiBhZGRDbGFzcyhlbGVtZW50LCBjbGFzc05hbWUpIHtcbiAgaWYgKGVsZW1lbnQuY2xhc3NMaXN0KSBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtlbHNlIGlmICghKDAsIF9oYXNDbGFzcy5kZWZhdWx0KShlbGVtZW50LCBjbGFzc05hbWUpKSBpZiAodHlwZW9mIGVsZW1lbnQuY2xhc3NOYW1lID09PSAnc3RyaW5nJykgZWxlbWVudC5jbGFzc05hbWUgPSBlbGVtZW50LmNsYXNzTmFtZSArICcgJyArIGNsYXNzTmFtZTtlbHNlIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdjbGFzcycsIChlbGVtZW50LmNsYXNzTmFtZSAmJiBlbGVtZW50LmNsYXNzTmFtZS5iYXNlVmFsIHx8ICcnKSArICcgJyArIGNsYXNzTmFtZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1tcImRlZmF1bHRcIl07IiwiJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiByZXBsYWNlQ2xhc3NOYW1lKG9yaWdDbGFzcywgY2xhc3NUb1JlbW92ZSkge1xuICByZXR1cm4gb3JpZ0NsYXNzLnJlcGxhY2UobmV3IFJlZ0V4cCgnKF58XFxcXHMpJyArIGNsYXNzVG9SZW1vdmUgKyAnKD86XFxcXHN8JCknLCAnZycpLCAnJDEnKS5yZXBsYWNlKC9cXHMrL2csICcgJykucmVwbGFjZSgvXlxccyp8XFxzKiQvZywgJycpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHJlbW92ZUNsYXNzKGVsZW1lbnQsIGNsYXNzTmFtZSkge1xuICBpZiAoZWxlbWVudC5jbGFzc0xpc3QpIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpO2Vsc2UgaWYgKHR5cGVvZiBlbGVtZW50LmNsYXNzTmFtZSA9PT0gJ3N0cmluZycpIGVsZW1lbnQuY2xhc3NOYW1lID0gcmVwbGFjZUNsYXNzTmFtZShlbGVtZW50LmNsYXNzTmFtZSwgY2xhc3NOYW1lKTtlbHNlIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdjbGFzcycsIHJlcGxhY2VDbGFzc05hbWUoZWxlbWVudC5jbGFzc05hbWUgJiYgZWxlbWVudC5jbGFzc05hbWUuYmFzZVZhbCB8fCAnJywgY2xhc3NOYW1lKSk7XG59OyIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuZnVuY3Rpb24gY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAvLyBDYWxsIHRoaXMuY29uc3RydWN0b3IuZ0RTRlAgdG8gc3VwcG9ydCBzdWItY2xhc3Nlcy5cbiAgdmFyIHN0YXRlID0gdGhpcy5jb25zdHJ1Y3Rvci5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHModGhpcy5wcm9wcywgdGhpcy5zdGF0ZSk7XG4gIGlmIChzdGF0ZSAhPT0gbnVsbCAmJiBzdGF0ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5zZXRTdGF0ZShzdGF0ZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgLy8gQ2FsbCB0aGlzLmNvbnN0cnVjdG9yLmdEU0ZQIHRvIHN1cHBvcnQgc3ViLWNsYXNzZXMuXG4gIC8vIFVzZSB0aGUgc2V0U3RhdGUoKSB1cGRhdGVyIHRvIGVuc3VyZSBzdGF0ZSBpc24ndCBzdGFsZSBpbiBjZXJ0YWluIGVkZ2UgY2FzZXMuXG4gIGZ1bmN0aW9uIHVwZGF0ZXIocHJldlN0YXRlKSB7XG4gICAgdmFyIHN0YXRlID0gdGhpcy5jb25zdHJ1Y3Rvci5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMobmV4dFByb3BzLCBwcmV2U3RhdGUpO1xuICAgIHJldHVybiBzdGF0ZSAhPT0gbnVsbCAmJiBzdGF0ZSAhPT0gdW5kZWZpbmVkID8gc3RhdGUgOiBudWxsO1xuICB9XG4gIC8vIEJpbmRpbmcgXCJ0aGlzXCIgaXMgaW1wb3J0YW50IGZvciBzaGFsbG93IHJlbmRlcmVyIHN1cHBvcnQuXG4gIHRoaXMuc2V0U3RhdGUodXBkYXRlci5iaW5kKHRoaXMpKTtcbn1cblxuZnVuY3Rpb24gY29tcG9uZW50V2lsbFVwZGF0ZShuZXh0UHJvcHMsIG5leHRTdGF0ZSkge1xuICB0cnkge1xuICAgIHZhciBwcmV2UHJvcHMgPSB0aGlzLnByb3BzO1xuICAgIHZhciBwcmV2U3RhdGUgPSB0aGlzLnN0YXRlO1xuICAgIHRoaXMucHJvcHMgPSBuZXh0UHJvcHM7XG4gICAgdGhpcy5zdGF0ZSA9IG5leHRTdGF0ZTtcbiAgICB0aGlzLl9fcmVhY3RJbnRlcm5hbFNuYXBzaG90RmxhZyA9IHRydWU7XG4gICAgdGhpcy5fX3JlYWN0SW50ZXJuYWxTbmFwc2hvdCA9IHRoaXMuZ2V0U25hcHNob3RCZWZvcmVVcGRhdGUoXG4gICAgICBwcmV2UHJvcHMsXG4gICAgICBwcmV2U3RhdGVcbiAgICApO1xuICB9IGZpbmFsbHkge1xuICAgIHRoaXMucHJvcHMgPSBwcmV2UHJvcHM7XG4gICAgdGhpcy5zdGF0ZSA9IHByZXZTdGF0ZTtcbiAgfVxufVxuXG4vLyBSZWFjdCBtYXkgd2FybiBhYm91dCBjV00vY1dSUC9jV1UgbWV0aG9kcyBiZWluZyBkZXByZWNhdGVkLlxuLy8gQWRkIGEgZmxhZyB0byBzdXBwcmVzcyB0aGVzZSB3YXJuaW5ncyBmb3IgdGhpcyBzcGVjaWFsIGNhc2UuXG5jb21wb25lbnRXaWxsTW91bnQuX19zdXBwcmVzc0RlcHJlY2F0aW9uV2FybmluZyA9IHRydWU7XG5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzLl9fc3VwcHJlc3NEZXByZWNhdGlvbldhcm5pbmcgPSB0cnVlO1xuY29tcG9uZW50V2lsbFVwZGF0ZS5fX3N1cHByZXNzRGVwcmVjYXRpb25XYXJuaW5nID0gdHJ1ZTtcblxuZnVuY3Rpb24gcG9seWZpbGwoQ29tcG9uZW50KSB7XG4gIHZhciBwcm90b3R5cGUgPSBDb21wb25lbnQucHJvdG90eXBlO1xuXG4gIGlmICghcHJvdG90eXBlIHx8ICFwcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudCkge1xuICAgIHRocm93IG5ldyBFcnJvcignQ2FuIG9ubHkgcG9seWZpbGwgY2xhc3MgY29tcG9uZW50cycpO1xuICB9XG5cbiAgaWYgKFxuICAgIHR5cGVvZiBDb21wb25lbnQuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzICE9PSAnZnVuY3Rpb24nICYmXG4gICAgdHlwZW9mIHByb3RvdHlwZS5nZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZSAhPT0gJ2Z1bmN0aW9uJ1xuICApIHtcbiAgICByZXR1cm4gQ29tcG9uZW50O1xuICB9XG5cbiAgLy8gSWYgbmV3IGNvbXBvbmVudCBBUElzIGFyZSBkZWZpbmVkLCBcInVuc2FmZVwiIGxpZmVjeWNsZXMgd29uJ3QgYmUgY2FsbGVkLlxuICAvLyBFcnJvciBpZiBhbnkgb2YgdGhlc2UgbGlmZWN5Y2xlcyBhcmUgcHJlc2VudCxcbiAgLy8gQmVjYXVzZSB0aGV5IHdvdWxkIHdvcmsgZGlmZmVyZW50bHkgYmV0d2VlbiBvbGRlciBhbmQgbmV3ZXIgKDE2LjMrKSB2ZXJzaW9ucyBvZiBSZWFjdC5cbiAgdmFyIGZvdW5kV2lsbE1vdW50TmFtZSA9IG51bGw7XG4gIHZhciBmb3VuZFdpbGxSZWNlaXZlUHJvcHNOYW1lID0gbnVsbDtcbiAgdmFyIGZvdW5kV2lsbFVwZGF0ZU5hbWUgPSBudWxsO1xuICBpZiAodHlwZW9mIHByb3RvdHlwZS5jb21wb25lbnRXaWxsTW91bnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBmb3VuZFdpbGxNb3VudE5hbWUgPSAnY29tcG9uZW50V2lsbE1vdW50JztcbiAgfSBlbHNlIGlmICh0eXBlb2YgcHJvdG90eXBlLlVOU0FGRV9jb21wb25lbnRXaWxsTW91bnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBmb3VuZFdpbGxNb3VudE5hbWUgPSAnVU5TQUZFX2NvbXBvbmVudFdpbGxNb3VudCc7XG4gIH1cbiAgaWYgKHR5cGVvZiBwcm90b3R5cGUuY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGZvdW5kV2lsbFJlY2VpdmVQcm9wc05hbWUgPSAnY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyc7XG4gIH0gZWxzZSBpZiAodHlwZW9mIHByb3RvdHlwZS5VTlNBRkVfY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGZvdW5kV2lsbFJlY2VpdmVQcm9wc05hbWUgPSAnVU5TQUZFX2NvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMnO1xuICB9XG4gIGlmICh0eXBlb2YgcHJvdG90eXBlLmNvbXBvbmVudFdpbGxVcGRhdGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICBmb3VuZFdpbGxVcGRhdGVOYW1lID0gJ2NvbXBvbmVudFdpbGxVcGRhdGUnO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBwcm90b3R5cGUuVU5TQUZFX2NvbXBvbmVudFdpbGxVcGRhdGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICBmb3VuZFdpbGxVcGRhdGVOYW1lID0gJ1VOU0FGRV9jb21wb25lbnRXaWxsVXBkYXRlJztcbiAgfVxuICBpZiAoXG4gICAgZm91bmRXaWxsTW91bnROYW1lICE9PSBudWxsIHx8XG4gICAgZm91bmRXaWxsUmVjZWl2ZVByb3BzTmFtZSAhPT0gbnVsbCB8fFxuICAgIGZvdW5kV2lsbFVwZGF0ZU5hbWUgIT09IG51bGxcbiAgKSB7XG4gICAgdmFyIGNvbXBvbmVudE5hbWUgPSBDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9uZW50Lm5hbWU7XG4gICAgdmFyIG5ld0FwaU5hbWUgPVxuICAgICAgdHlwZW9mIENvbXBvbmVudC5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMgPT09ICdmdW5jdGlvbidcbiAgICAgICAgPyAnZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzKCknXG4gICAgICAgIDogJ2dldFNuYXBzaG90QmVmb3JlVXBkYXRlKCknO1xuXG4gICAgdGhyb3cgRXJyb3IoXG4gICAgICAnVW5zYWZlIGxlZ2FjeSBsaWZlY3ljbGVzIHdpbGwgbm90IGJlIGNhbGxlZCBmb3IgY29tcG9uZW50cyB1c2luZyBuZXcgY29tcG9uZW50IEFQSXMuXFxuXFxuJyArXG4gICAgICAgIGNvbXBvbmVudE5hbWUgK1xuICAgICAgICAnIHVzZXMgJyArXG4gICAgICAgIG5ld0FwaU5hbWUgK1xuICAgICAgICAnIGJ1dCBhbHNvIGNvbnRhaW5zIHRoZSBmb2xsb3dpbmcgbGVnYWN5IGxpZmVjeWNsZXM6JyArXG4gICAgICAgIChmb3VuZFdpbGxNb3VudE5hbWUgIT09IG51bGwgPyAnXFxuICAnICsgZm91bmRXaWxsTW91bnROYW1lIDogJycpICtcbiAgICAgICAgKGZvdW5kV2lsbFJlY2VpdmVQcm9wc05hbWUgIT09IG51bGxcbiAgICAgICAgICA/ICdcXG4gICcgKyBmb3VuZFdpbGxSZWNlaXZlUHJvcHNOYW1lXG4gICAgICAgICAgOiAnJykgK1xuICAgICAgICAoZm91bmRXaWxsVXBkYXRlTmFtZSAhPT0gbnVsbCA/ICdcXG4gICcgKyBmb3VuZFdpbGxVcGRhdGVOYW1lIDogJycpICtcbiAgICAgICAgJ1xcblxcblRoZSBhYm92ZSBsaWZlY3ljbGVzIHNob3VsZCBiZSByZW1vdmVkLiBMZWFybiBtb3JlIGFib3V0IHRoaXMgd2FybmluZyBoZXJlOlxcbicgK1xuICAgICAgICAnaHR0cHM6Ly9mYi5tZS9yZWFjdC1hc3luYy1jb21wb25lbnQtbGlmZWN5Y2xlLWhvb2tzJ1xuICAgICk7XG4gIH1cblxuICAvLyBSZWFjdCA8PSAxNi4yIGRvZXMgbm90IHN1cHBvcnQgc3RhdGljIGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcy5cbiAgLy8gQXMgYSB3b3JrYXJvdW5kLCB1c2UgY1dNIGFuZCBjV1JQIHRvIGludm9rZSB0aGUgbmV3IHN0YXRpYyBsaWZlY3ljbGUuXG4gIC8vIE5ld2VyIHZlcnNpb25zIG9mIFJlYWN0IHdpbGwgaWdub3JlIHRoZXNlIGxpZmVjeWNsZXMgaWYgZ0RTRlAgZXhpc3RzLlxuICBpZiAodHlwZW9mIENvbXBvbmVudC5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMgPT09ICdmdW5jdGlvbicpIHtcbiAgICBwcm90b3R5cGUuY29tcG9uZW50V2lsbE1vdW50ID0gY29tcG9uZW50V2lsbE1vdW50O1xuICAgIHByb3RvdHlwZS5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzID0gY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcztcbiAgfVxuXG4gIC8vIFJlYWN0IDw9IDE2LjIgZG9lcyBub3Qgc3VwcG9ydCBnZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZS5cbiAgLy8gQXMgYSB3b3JrYXJvdW5kLCB1c2UgY1dVIHRvIGludm9rZSB0aGUgbmV3IGxpZmVjeWNsZS5cbiAgLy8gTmV3ZXIgdmVyc2lvbnMgb2YgUmVhY3Qgd2lsbCBpZ25vcmUgdGhhdCBsaWZlY3ljbGUgaWYgZ1NCVSBleGlzdHMuXG4gIGlmICh0eXBlb2YgcHJvdG90eXBlLmdldFNuYXBzaG90QmVmb3JlVXBkYXRlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgaWYgKHR5cGVvZiBwcm90b3R5cGUuY29tcG9uZW50RGlkVXBkYXRlICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICdDYW5ub3QgcG9seWZpbGwgZ2V0U25hcHNob3RCZWZvcmVVcGRhdGUoKSBmb3IgY29tcG9uZW50cyB0aGF0IGRvIG5vdCBkZWZpbmUgY29tcG9uZW50RGlkVXBkYXRlKCkgb24gdGhlIHByb3RvdHlwZSdcbiAgICAgICk7XG4gICAgfVxuXG4gICAgcHJvdG90eXBlLmNvbXBvbmVudFdpbGxVcGRhdGUgPSBjb21wb25lbnRXaWxsVXBkYXRlO1xuXG4gICAgdmFyIGNvbXBvbmVudERpZFVwZGF0ZSA9IHByb3RvdHlwZS5jb21wb25lbnREaWRVcGRhdGU7XG5cbiAgICBwcm90b3R5cGUuY29tcG9uZW50RGlkVXBkYXRlID0gZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlUG9seWZpbGwoXG4gICAgICBwcmV2UHJvcHMsXG4gICAgICBwcmV2U3RhdGUsXG4gICAgICBtYXliZVNuYXBzaG90XG4gICAgKSB7XG4gICAgICAvLyAxNi4zKyB3aWxsIG5vdCBleGVjdXRlIG91ciB3aWxsLXVwZGF0ZSBtZXRob2Q7XG4gICAgICAvLyBJdCB3aWxsIHBhc3MgYSBzbmFwc2hvdCB2YWx1ZSB0byBkaWQtdXBkYXRlIHRob3VnaC5cbiAgICAgIC8vIE9sZGVyIHZlcnNpb25zIHdpbGwgcmVxdWlyZSBvdXIgcG9seWZpbGxlZCB3aWxsLXVwZGF0ZSB2YWx1ZS5cbiAgICAgIC8vIFdlIG5lZWQgdG8gaGFuZGxlIGJvdGggY2FzZXMsIGJ1dCBjYW4ndCBqdXN0IGNoZWNrIGZvciB0aGUgcHJlc2VuY2Ugb2YgXCJtYXliZVNuYXBzaG90XCIsXG4gICAgICAvLyBCZWNhdXNlIGZvciA8PSAxNS54IHZlcnNpb25zIHRoaXMgbWlnaHQgYmUgYSBcInByZXZDb250ZXh0XCIgb2JqZWN0LlxuICAgICAgLy8gV2UgYWxzbyBjYW4ndCBqdXN0IGNoZWNrIFwiX19yZWFjdEludGVybmFsU25hcHNob3RcIixcbiAgICAgIC8vIEJlY2F1c2UgZ2V0LXNuYXBzaG90IG1pZ2h0IHJldHVybiBhIGZhbHN5IHZhbHVlLlxuICAgICAgLy8gU28gY2hlY2sgZm9yIHRoZSBleHBsaWNpdCBfX3JlYWN0SW50ZXJuYWxTbmFwc2hvdEZsYWcgZmxhZyB0byBkZXRlcm1pbmUgYmVoYXZpb3IuXG4gICAgICB2YXIgc25hcHNob3QgPSB0aGlzLl9fcmVhY3RJbnRlcm5hbFNuYXBzaG90RmxhZ1xuICAgICAgICA/IHRoaXMuX19yZWFjdEludGVybmFsU25hcHNob3RcbiAgICAgICAgOiBtYXliZVNuYXBzaG90O1xuXG4gICAgICBjb21wb25lbnREaWRVcGRhdGUuY2FsbCh0aGlzLCBwcmV2UHJvcHMsIHByZXZTdGF0ZSwgc25hcHNob3QpO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gQ29tcG9uZW50O1xufVxuXG5leHBvcnQgeyBwb2x5ZmlsbCB9O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmNsYXNzTmFtZXNTaGFwZSA9IGV4cG9ydHMudGltZW91dHNTaGFwZSA9IHZvaWQgMDtcblxudmFyIF9wcm9wVHlwZXMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIHRpbWVvdXRzU2hhcGUgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gX3Byb3BUeXBlcy5kZWZhdWx0Lm9uZU9mVHlwZShbX3Byb3BUeXBlcy5kZWZhdWx0Lm51bWJlciwgX3Byb3BUeXBlcy5kZWZhdWx0LnNoYXBlKHtcbiAgZW50ZXI6IF9wcm9wVHlwZXMuZGVmYXVsdC5udW1iZXIsXG4gIGV4aXQ6IF9wcm9wVHlwZXMuZGVmYXVsdC5udW1iZXIsXG4gIGFwcGVhcjogX3Byb3BUeXBlcy5kZWZhdWx0Lm51bWJlclxufSkuaXNSZXF1aXJlZF0pIDogbnVsbDtcbmV4cG9ydHMudGltZW91dHNTaGFwZSA9IHRpbWVvdXRzU2hhcGU7XG52YXIgY2xhc3NOYW1lc1NoYXBlID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IF9wcm9wVHlwZXMuZGVmYXVsdC5vbmVPZlR5cGUoW19wcm9wVHlwZXMuZGVmYXVsdC5zdHJpbmcsIF9wcm9wVHlwZXMuZGVmYXVsdC5zaGFwZSh7XG4gIGVudGVyOiBfcHJvcFR5cGVzLmRlZmF1bHQuc3RyaW5nLFxuICBleGl0OiBfcHJvcFR5cGVzLmRlZmF1bHQuc3RyaW5nLFxuICBhY3RpdmU6IF9wcm9wVHlwZXMuZGVmYXVsdC5zdHJpbmdcbn0pLCBfcHJvcFR5cGVzLmRlZmF1bHQuc2hhcGUoe1xuICBlbnRlcjogX3Byb3BUeXBlcy5kZWZhdWx0LnN0cmluZyxcbiAgZW50ZXJEb25lOiBfcHJvcFR5cGVzLmRlZmF1bHQuc3RyaW5nLFxuICBlbnRlckFjdGl2ZTogX3Byb3BUeXBlcy5kZWZhdWx0LnN0cmluZyxcbiAgZXhpdDogX3Byb3BUeXBlcy5kZWZhdWx0LnN0cmluZyxcbiAgZXhpdERvbmU6IF9wcm9wVHlwZXMuZGVmYXVsdC5zdHJpbmcsXG4gIGV4aXRBY3RpdmU6IF9wcm9wVHlwZXMuZGVmYXVsdC5zdHJpbmdcbn0pXSkgOiBudWxsO1xuZXhwb3J0cy5jbGFzc05hbWVzU2hhcGUgPSBjbGFzc05hbWVzU2hhcGU7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSBleHBvcnRzLkVYSVRJTkcgPSBleHBvcnRzLkVOVEVSRUQgPSBleHBvcnRzLkVOVEVSSU5HID0gZXhwb3J0cy5FWElURUQgPSBleHBvcnRzLlVOTU9VTlRFRCA9IHZvaWQgMDtcblxudmFyIFByb3BUeXBlcyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpKTtcblxudmFyIF9yZWFjdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcblxudmFyIF9yZWFjdERvbSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0LWRvbVwiKSk7XG5cbnZhciBfcmVhY3RMaWZlY3ljbGVzQ29tcGF0ID0gcmVxdWlyZShcInJlYWN0LWxpZmVjeWNsZXMtY29tcGF0XCIpO1xuXG52YXIgX1Byb3BUeXBlcyA9IHJlcXVpcmUoXCIuL3V0aWxzL1Byb3BUeXBlc1wiKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7IGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHsgcmV0dXJuIG9iajsgfSBlbHNlIHsgdmFyIG5ld09iaiA9IHt9OyBpZiAob2JqICE9IG51bGwpIHsgZm9yICh2YXIga2V5IGluIG9iaikgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkgeyB2YXIgZGVzYyA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiB7fTsgaWYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7IH0gZWxzZSB7IG5ld09ialtrZXldID0gb2JqW2tleV07IH0gfSB9IH0gbmV3T2JqLmRlZmF1bHQgPSBvYmo7IHJldHVybiBuZXdPYmo7IH0gfVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKSB7IGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9OyB2YXIgdGFyZ2V0ID0ge307IHZhciBzb3VyY2VLZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTsgdmFyIGtleSwgaTsgZm9yIChpID0gMDsgaSA8IHNvdXJjZUtleXMubGVuZ3RoOyBpKyspIHsga2V5ID0gc291cmNlS2V5c1tpXTsgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0c0xvb3NlKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcy5wcm90b3R5cGUpOyBzdWJDbGFzcy5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBzdWJDbGFzczsgc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgVU5NT1VOVEVEID0gJ3VubW91bnRlZCc7XG5leHBvcnRzLlVOTU9VTlRFRCA9IFVOTU9VTlRFRDtcbnZhciBFWElURUQgPSAnZXhpdGVkJztcbmV4cG9ydHMuRVhJVEVEID0gRVhJVEVEO1xudmFyIEVOVEVSSU5HID0gJ2VudGVyaW5nJztcbmV4cG9ydHMuRU5URVJJTkcgPSBFTlRFUklORztcbnZhciBFTlRFUkVEID0gJ2VudGVyZWQnO1xuZXhwb3J0cy5FTlRFUkVEID0gRU5URVJFRDtcbnZhciBFWElUSU5HID0gJ2V4aXRpbmcnO1xuLyoqXG4gKiBUaGUgVHJhbnNpdGlvbiBjb21wb25lbnQgbGV0cyB5b3UgZGVzY3JpYmUgYSB0cmFuc2l0aW9uIGZyb20gb25lIGNvbXBvbmVudFxuICogc3RhdGUgdG8gYW5vdGhlciBfb3ZlciB0aW1lXyB3aXRoIGEgc2ltcGxlIGRlY2xhcmF0aXZlIEFQSS4gTW9zdCBjb21tb25seVxuICogaXQncyB1c2VkIHRvIGFuaW1hdGUgdGhlIG1vdW50aW5nIGFuZCB1bm1vdW50aW5nIG9mIGEgY29tcG9uZW50LCBidXQgY2FuIGFsc29cbiAqIGJlIHVzZWQgdG8gZGVzY3JpYmUgaW4tcGxhY2UgdHJhbnNpdGlvbiBzdGF0ZXMgYXMgd2VsbC5cbiAqXG4gKiAtLS1cbiAqXG4gKiAqKk5vdGUqKjogYFRyYW5zaXRpb25gIGlzIGEgcGxhdGZvcm0tYWdub3N0aWMgYmFzZSBjb21wb25lbnQuIElmIHlvdSdyZSB1c2luZ1xuICogdHJhbnNpdGlvbnMgaW4gQ1NTLCB5b3UnbGwgcHJvYmFibHkgd2FudCB0byB1c2VcbiAqIFtgQ1NTVHJhbnNpdGlvbmBdKGh0dHBzOi8vcmVhY3Rjb21tdW5pdHkub3JnL3JlYWN0LXRyYW5zaXRpb24tZ3JvdXAvY3NzLXRyYW5zaXRpb24pXG4gKiBpbnN0ZWFkLiBJdCBpbmhlcml0cyBhbGwgdGhlIGZlYXR1cmVzIG9mIGBUcmFuc2l0aW9uYCwgYnV0IGNvbnRhaW5zXG4gKiBhZGRpdGlvbmFsIGZlYXR1cmVzIG5lY2Vzc2FyeSB0byBwbGF5IG5pY2Ugd2l0aCBDU1MgdHJhbnNpdGlvbnMgKGhlbmNlIHRoZVxuICogbmFtZSBvZiB0aGUgY29tcG9uZW50KS5cbiAqXG4gKiAtLS1cbiAqXG4gKiBCeSBkZWZhdWx0IHRoZSBgVHJhbnNpdGlvbmAgY29tcG9uZW50IGRvZXMgbm90IGFsdGVyIHRoZSBiZWhhdmlvciBvZiB0aGVcbiAqIGNvbXBvbmVudCBpdCByZW5kZXJzLCBpdCBvbmx5IHRyYWNrcyBcImVudGVyXCIgYW5kIFwiZXhpdFwiIHN0YXRlcyBmb3IgdGhlXG4gKiBjb21wb25lbnRzLiBJdCdzIHVwIHRvIHlvdSB0byBnaXZlIG1lYW5pbmcgYW5kIGVmZmVjdCB0byB0aG9zZSBzdGF0ZXMuIEZvclxuICogZXhhbXBsZSB3ZSBjYW4gYWRkIHN0eWxlcyB0byBhIGNvbXBvbmVudCB3aGVuIGl0IGVudGVycyBvciBleGl0czpcbiAqXG4gKiBgYGBqc3hcbiAqIGltcG9ydCB7IFRyYW5zaXRpb24gfSBmcm9tICdyZWFjdC10cmFuc2l0aW9uLWdyb3VwJztcbiAqXG4gKiBjb25zdCBkdXJhdGlvbiA9IDMwMDtcbiAqXG4gKiBjb25zdCBkZWZhdWx0U3R5bGUgPSB7XG4gKiAgIHRyYW5zaXRpb246IGBvcGFjaXR5ICR7ZHVyYXRpb259bXMgZWFzZS1pbi1vdXRgLFxuICogICBvcGFjaXR5OiAwLFxuICogfVxuICpcbiAqIGNvbnN0IHRyYW5zaXRpb25TdHlsZXMgPSB7XG4gKiAgIGVudGVyaW5nOiB7IG9wYWNpdHk6IDAgfSxcbiAqICAgZW50ZXJlZDogIHsgb3BhY2l0eTogMSB9LFxuICogfTtcbiAqXG4gKiBjb25zdCBGYWRlID0gKHsgaW46IGluUHJvcCB9KSA9PiAoXG4gKiAgIDxUcmFuc2l0aW9uIGluPXtpblByb3B9IHRpbWVvdXQ9e2R1cmF0aW9ufT5cbiAqICAgICB7c3RhdGUgPT4gKFxuICogICAgICAgPGRpdiBzdHlsZT17e1xuICogICAgICAgICAuLi5kZWZhdWx0U3R5bGUsXG4gKiAgICAgICAgIC4uLnRyYW5zaXRpb25TdHlsZXNbc3RhdGVdXG4gKiAgICAgICB9fT5cbiAqICAgICAgICAgSSdtIGEgZmFkZSBUcmFuc2l0aW9uIVxuICogICAgICAgPC9kaXY+XG4gKiAgICAgKX1cbiAqICAgPC9UcmFuc2l0aW9uPlxuICogKTtcbiAqIGBgYFxuICpcbiAqIFRoZXJlIGFyZSA0IG1haW4gc3RhdGVzIGEgVHJhbnNpdGlvbiBjYW4gYmUgaW46XG4gKiAgLSBgJ2VudGVyaW5nJ2BcbiAqICAtIGAnZW50ZXJlZCdgXG4gKiAgLSBgJ2V4aXRpbmcnYFxuICogIC0gYCdleGl0ZWQnYFxuICpcbiAqIFRyYW5zaXRpb24gc3RhdGUgaXMgdG9nZ2xlZCB2aWEgdGhlIGBpbmAgcHJvcC4gV2hlbiBgdHJ1ZWAgdGhlIGNvbXBvbmVudFxuICogYmVnaW5zIHRoZSBcIkVudGVyXCIgc3RhZ2UuIER1cmluZyB0aGlzIHN0YWdlLCB0aGUgY29tcG9uZW50IHdpbGwgc2hpZnQgZnJvbVxuICogaXRzIGN1cnJlbnQgdHJhbnNpdGlvbiBzdGF0ZSwgdG8gYCdlbnRlcmluZydgIGZvciB0aGUgZHVyYXRpb24gb2YgdGhlXG4gKiB0cmFuc2l0aW9uIGFuZCB0aGVuIHRvIHRoZSBgJ2VudGVyZWQnYCBzdGFnZSBvbmNlIGl0J3MgY29tcGxldGUuIExldCdzIHRha2VcbiAqIHRoZSBmb2xsb3dpbmcgZXhhbXBsZSAod2UnbGwgdXNlIHRoZVxuICogW3VzZVN0YXRlXShodHRwczovL3JlYWN0anMub3JnL2RvY3MvaG9va3MtcmVmZXJlbmNlLmh0bWwjdXNlc3RhdGUpIGhvb2spOlxuICpcbiAqIGBgYGpzeFxuICogZnVuY3Rpb24gQXBwKCkge1xuICogICBjb25zdCBbaW5Qcm9wLCBzZXRJblByb3BdID0gdXNlU3RhdGUoZmFsc2UpO1xuICogICByZXR1cm4gKFxuICogICAgIDxkaXY+XG4gKiAgICAgICA8VHJhbnNpdGlvbiBpbj17aW5Qcm9wfSB0aW1lb3V0PXs1MDB9PlxuICogICAgICAgICB7c3RhdGUgPT4gKFxuICogICAgICAgICAgIC8vIC4uLlxuICogICAgICAgICApfVxuICogICAgICAgPC9UcmFuc2l0aW9uPlxuICogICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRJblByb3AodHJ1ZSl9PlxuICogICAgICAgICBDbGljayB0byBFbnRlclxuICogICAgICAgPC9idXR0b24+XG4gKiAgICAgPC9kaXY+XG4gKiAgICk7XG4gKiB9XG4gKiBgYGBcbiAqXG4gKiBXaGVuIHRoZSBidXR0b24gaXMgY2xpY2tlZCB0aGUgY29tcG9uZW50IHdpbGwgc2hpZnQgdG8gdGhlIGAnZW50ZXJpbmcnYCBzdGF0ZVxuICogYW5kIHN0YXkgdGhlcmUgZm9yIDUwMG1zICh0aGUgdmFsdWUgb2YgYHRpbWVvdXRgKSBiZWZvcmUgaXQgZmluYWxseSBzd2l0Y2hlc1xuICogdG8gYCdlbnRlcmVkJ2AuXG4gKlxuICogV2hlbiBgaW5gIGlzIGBmYWxzZWAgdGhlIHNhbWUgdGhpbmcgaGFwcGVucyBleGNlcHQgdGhlIHN0YXRlIG1vdmVzIGZyb21cbiAqIGAnZXhpdGluZydgIHRvIGAnZXhpdGVkJ2AuXG4gKi9cblxuZXhwb3J0cy5FWElUSU5HID0gRVhJVElORztcblxudmFyIFRyYW5zaXRpb24gPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzTG9vc2UoVHJhbnNpdGlvbiwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gVHJhbnNpdGlvbihwcm9wcywgY29udGV4dCkge1xuICAgIHZhciBfdGhpcztcblxuICAgIF90aGlzID0gX1JlYWN0JENvbXBvbmVudC5jYWxsKHRoaXMsIHByb3BzLCBjb250ZXh0KSB8fCB0aGlzO1xuICAgIHZhciBwYXJlbnRHcm91cCA9IGNvbnRleHQudHJhbnNpdGlvbkdyb3VwOyAvLyBJbiB0aGUgY29udGV4dCBvZiBhIFRyYW5zaXRpb25Hcm91cCBhbGwgZW50ZXJzIGFyZSByZWFsbHkgYXBwZWFyc1xuXG4gICAgdmFyIGFwcGVhciA9IHBhcmVudEdyb3VwICYmICFwYXJlbnRHcm91cC5pc01vdW50aW5nID8gcHJvcHMuZW50ZXIgOiBwcm9wcy5hcHBlYXI7XG4gICAgdmFyIGluaXRpYWxTdGF0dXM7XG4gICAgX3RoaXMuYXBwZWFyU3RhdHVzID0gbnVsbDtcblxuICAgIGlmIChwcm9wcy5pbikge1xuICAgICAgaWYgKGFwcGVhcikge1xuICAgICAgICBpbml0aWFsU3RhdHVzID0gRVhJVEVEO1xuICAgICAgICBfdGhpcy5hcHBlYXJTdGF0dXMgPSBFTlRFUklORztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGluaXRpYWxTdGF0dXMgPSBFTlRFUkVEO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAocHJvcHMudW5tb3VudE9uRXhpdCB8fCBwcm9wcy5tb3VudE9uRW50ZXIpIHtcbiAgICAgICAgaW5pdGlhbFN0YXR1cyA9IFVOTU9VTlRFRDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGluaXRpYWxTdGF0dXMgPSBFWElURUQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgX3RoaXMuc3RhdGUgPSB7XG4gICAgICBzdGF0dXM6IGluaXRpYWxTdGF0dXNcbiAgICB9O1xuICAgIF90aGlzLm5leHRDYWxsYmFjayA9IG51bGw7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IFRyYW5zaXRpb24ucHJvdG90eXBlO1xuXG4gIF9wcm90by5nZXRDaGlsZENvbnRleHQgPSBmdW5jdGlvbiBnZXRDaGlsZENvbnRleHQoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRyYW5zaXRpb25Hcm91cDogbnVsbCAvLyBhbGxvd3MgZm9yIG5lc3RlZCBUcmFuc2l0aW9uc1xuXG4gICAgfTtcbiAgfTtcblxuICBUcmFuc2l0aW9uLmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyA9IGZ1bmN0aW9uIGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyhfcmVmLCBwcmV2U3RhdGUpIHtcbiAgICB2YXIgbmV4dEluID0gX3JlZi5pbjtcblxuICAgIGlmIChuZXh0SW4gJiYgcHJldlN0YXRlLnN0YXR1cyA9PT0gVU5NT1VOVEVEKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdGF0dXM6IEVYSVRFRFxuICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfTsgLy8gZ2V0U25hcHNob3RCZWZvcmVVcGRhdGUocHJldlByb3BzKSB7XG4gIC8vICAgbGV0IG5leHRTdGF0dXMgPSBudWxsXG4gIC8vICAgaWYgKHByZXZQcm9wcyAhPT0gdGhpcy5wcm9wcykge1xuICAvLyAgICAgY29uc3QgeyBzdGF0dXMgfSA9IHRoaXMuc3RhdGVcbiAgLy8gICAgIGlmICh0aGlzLnByb3BzLmluKSB7XG4gIC8vICAgICAgIGlmIChzdGF0dXMgIT09IEVOVEVSSU5HICYmIHN0YXR1cyAhPT0gRU5URVJFRCkge1xuICAvLyAgICAgICAgIG5leHRTdGF0dXMgPSBFTlRFUklOR1xuICAvLyAgICAgICB9XG4gIC8vICAgICB9IGVsc2Uge1xuICAvLyAgICAgICBpZiAoc3RhdHVzID09PSBFTlRFUklORyB8fCBzdGF0dXMgPT09IEVOVEVSRUQpIHtcbiAgLy8gICAgICAgICBuZXh0U3RhdHVzID0gRVhJVElOR1xuICAvLyAgICAgICB9XG4gIC8vICAgICB9XG4gIC8vICAgfVxuICAvLyAgIHJldHVybiB7IG5leHRTdGF0dXMgfVxuICAvLyB9XG5cblxuICBfcHJvdG8uY29tcG9uZW50RGlkTW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLnVwZGF0ZVN0YXR1cyh0cnVlLCB0aGlzLmFwcGVhclN0YXR1cyk7XG4gIH07XG5cbiAgX3Byb3RvLmNvbXBvbmVudERpZFVwZGF0ZSA9IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcbiAgICB2YXIgbmV4dFN0YXR1cyA9IG51bGw7XG5cbiAgICBpZiAocHJldlByb3BzICE9PSB0aGlzLnByb3BzKSB7XG4gICAgICB2YXIgc3RhdHVzID0gdGhpcy5zdGF0ZS5zdGF0dXM7XG5cbiAgICAgIGlmICh0aGlzLnByb3BzLmluKSB7XG4gICAgICAgIGlmIChzdGF0dXMgIT09IEVOVEVSSU5HICYmIHN0YXR1cyAhPT0gRU5URVJFRCkge1xuICAgICAgICAgIG5leHRTdGF0dXMgPSBFTlRFUklORztcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHN0YXR1cyA9PT0gRU5URVJJTkcgfHwgc3RhdHVzID09PSBFTlRFUkVEKSB7XG4gICAgICAgICAgbmV4dFN0YXR1cyA9IEVYSVRJTkc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLnVwZGF0ZVN0YXR1cyhmYWxzZSwgbmV4dFN0YXR1cyk7XG4gIH07XG5cbiAgX3Byb3RvLmNvbXBvbmVudFdpbGxVbm1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5jYW5jZWxOZXh0Q2FsbGJhY2soKTtcbiAgfTtcblxuICBfcHJvdG8uZ2V0VGltZW91dHMgPSBmdW5jdGlvbiBnZXRUaW1lb3V0cygpIHtcbiAgICB2YXIgdGltZW91dCA9IHRoaXMucHJvcHMudGltZW91dDtcbiAgICB2YXIgZXhpdCwgZW50ZXIsIGFwcGVhcjtcbiAgICBleGl0ID0gZW50ZXIgPSBhcHBlYXIgPSB0aW1lb3V0O1xuXG4gICAgaWYgKHRpbWVvdXQgIT0gbnVsbCAmJiB0eXBlb2YgdGltZW91dCAhPT0gJ251bWJlcicpIHtcbiAgICAgIGV4aXQgPSB0aW1lb3V0LmV4aXQ7XG4gICAgICBlbnRlciA9IHRpbWVvdXQuZW50ZXI7IC8vIFRPRE86IHJlbW92ZSBmYWxsYmFjayBmb3IgbmV4dCBtYWpvclxuXG4gICAgICBhcHBlYXIgPSB0aW1lb3V0LmFwcGVhciAhPT0gdW5kZWZpbmVkID8gdGltZW91dC5hcHBlYXIgOiBlbnRlcjtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgZXhpdDogZXhpdCxcbiAgICAgIGVudGVyOiBlbnRlcixcbiAgICAgIGFwcGVhcjogYXBwZWFyXG4gICAgfTtcbiAgfTtcblxuICBfcHJvdG8udXBkYXRlU3RhdHVzID0gZnVuY3Rpb24gdXBkYXRlU3RhdHVzKG1vdW50aW5nLCBuZXh0U3RhdHVzKSB7XG4gICAgaWYgKG1vdW50aW5nID09PSB2b2lkIDApIHtcbiAgICAgIG1vdW50aW5nID0gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKG5leHRTdGF0dXMgIT09IG51bGwpIHtcbiAgICAgIC8vIG5leHRTdGF0dXMgd2lsbCBhbHdheXMgYmUgRU5URVJJTkcgb3IgRVhJVElORy5cbiAgICAgIHRoaXMuY2FuY2VsTmV4dENhbGxiYWNrKCk7XG5cbiAgICAgIHZhciBub2RlID0gX3JlYWN0RG9tLmRlZmF1bHQuZmluZERPTU5vZGUodGhpcyk7XG5cbiAgICAgIGlmIChuZXh0U3RhdHVzID09PSBFTlRFUklORykge1xuICAgICAgICB0aGlzLnBlcmZvcm1FbnRlcihub2RlLCBtb3VudGluZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnBlcmZvcm1FeGl0KG5vZGUpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodGhpcy5wcm9wcy51bm1vdW50T25FeGl0ICYmIHRoaXMuc3RhdGUuc3RhdHVzID09PSBFWElURUQpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBzdGF0dXM6IFVOTU9VTlRFRFxuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5wZXJmb3JtRW50ZXIgPSBmdW5jdGlvbiBwZXJmb3JtRW50ZXIobm9kZSwgbW91bnRpbmcpIHtcbiAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgIHZhciBlbnRlciA9IHRoaXMucHJvcHMuZW50ZXI7XG4gICAgdmFyIGFwcGVhcmluZyA9IHRoaXMuY29udGV4dC50cmFuc2l0aW9uR3JvdXAgPyB0aGlzLmNvbnRleHQudHJhbnNpdGlvbkdyb3VwLmlzTW91bnRpbmcgOiBtb3VudGluZztcbiAgICB2YXIgdGltZW91dHMgPSB0aGlzLmdldFRpbWVvdXRzKCk7XG4gICAgdmFyIGVudGVyVGltZW91dCA9IGFwcGVhcmluZyA/IHRpbWVvdXRzLmFwcGVhciA6IHRpbWVvdXRzLmVudGVyOyAvLyBubyBlbnRlciBhbmltYXRpb24gc2tpcCByaWdodCB0byBFTlRFUkVEXG4gICAgLy8gaWYgd2UgYXJlIG1vdW50aW5nIGFuZCBydW5uaW5nIHRoaXMgaXQgbWVhbnMgYXBwZWFyIF9tdXN0XyBiZSBzZXRcblxuICAgIGlmICghbW91bnRpbmcgJiYgIWVudGVyKSB7XG4gICAgICB0aGlzLnNhZmVTZXRTdGF0ZSh7XG4gICAgICAgIHN0YXR1czogRU5URVJFRFxuICAgICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICBfdGhpczIucHJvcHMub25FbnRlcmVkKG5vZGUpO1xuICAgICAgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5wcm9wcy5vbkVudGVyKG5vZGUsIGFwcGVhcmluZyk7XG4gICAgdGhpcy5zYWZlU2V0U3RhdGUoe1xuICAgICAgc3RhdHVzOiBFTlRFUklOR1xuICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgIF90aGlzMi5wcm9wcy5vbkVudGVyaW5nKG5vZGUsIGFwcGVhcmluZyk7XG5cbiAgICAgIF90aGlzMi5vblRyYW5zaXRpb25FbmQobm9kZSwgZW50ZXJUaW1lb3V0LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIF90aGlzMi5zYWZlU2V0U3RhdGUoe1xuICAgICAgICAgIHN0YXR1czogRU5URVJFRFxuICAgICAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgX3RoaXMyLnByb3BzLm9uRW50ZXJlZChub2RlLCBhcHBlYXJpbmcpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIF9wcm90by5wZXJmb3JtRXhpdCA9IGZ1bmN0aW9uIHBlcmZvcm1FeGl0KG5vZGUpIHtcbiAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgIHZhciBleGl0ID0gdGhpcy5wcm9wcy5leGl0O1xuICAgIHZhciB0aW1lb3V0cyA9IHRoaXMuZ2V0VGltZW91dHMoKTsgLy8gbm8gZXhpdCBhbmltYXRpb24gc2tpcCByaWdodCB0byBFWElURURcblxuICAgIGlmICghZXhpdCkge1xuICAgICAgdGhpcy5zYWZlU2V0U3RhdGUoe1xuICAgICAgICBzdGF0dXM6IEVYSVRFRFxuICAgICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICBfdGhpczMucHJvcHMub25FeGl0ZWQobm9kZSk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnByb3BzLm9uRXhpdChub2RlKTtcbiAgICB0aGlzLnNhZmVTZXRTdGF0ZSh7XG4gICAgICBzdGF0dXM6IEVYSVRJTkdcbiAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICBfdGhpczMucHJvcHMub25FeGl0aW5nKG5vZGUpO1xuXG4gICAgICBfdGhpczMub25UcmFuc2l0aW9uRW5kKG5vZGUsIHRpbWVvdXRzLmV4aXQsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgX3RoaXMzLnNhZmVTZXRTdGF0ZSh7XG4gICAgICAgICAgc3RhdHVzOiBFWElURURcbiAgICAgICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIF90aGlzMy5wcm9wcy5vbkV4aXRlZChub2RlKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICBfcHJvdG8uY2FuY2VsTmV4dENhbGxiYWNrID0gZnVuY3Rpb24gY2FuY2VsTmV4dENhbGxiYWNrKCkge1xuICAgIGlmICh0aGlzLm5leHRDYWxsYmFjayAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5uZXh0Q2FsbGJhY2suY2FuY2VsKCk7XG4gICAgICB0aGlzLm5leHRDYWxsYmFjayA9IG51bGw7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5zYWZlU2V0U3RhdGUgPSBmdW5jdGlvbiBzYWZlU2V0U3RhdGUobmV4dFN0YXRlLCBjYWxsYmFjaykge1xuICAgIC8vIFRoaXMgc2hvdWxkbid0IGJlIG5lY2Vzc2FyeSwgYnV0IHRoZXJlIGFyZSB3ZWlyZCByYWNlIGNvbmRpdGlvbnMgd2l0aFxuICAgIC8vIHNldFN0YXRlIGNhbGxiYWNrcyBhbmQgdW5tb3VudGluZyBpbiB0ZXN0aW5nLCBzbyBhbHdheXMgbWFrZSBzdXJlIHRoYXRcbiAgICAvLyB3ZSBjYW4gY2FuY2VsIGFueSBwZW5kaW5nIHNldFN0YXRlIGNhbGxiYWNrcyBhZnRlciB3ZSB1bm1vdW50LlxuICAgIGNhbGxiYWNrID0gdGhpcy5zZXROZXh0Q2FsbGJhY2soY2FsbGJhY2spO1xuICAgIHRoaXMuc2V0U3RhdGUobmV4dFN0YXRlLCBjYWxsYmFjayk7XG4gIH07XG5cbiAgX3Byb3RvLnNldE5leHRDYWxsYmFjayA9IGZ1bmN0aW9uIHNldE5leHRDYWxsYmFjayhjYWxsYmFjaykge1xuICAgIHZhciBfdGhpczQgPSB0aGlzO1xuXG4gICAgdmFyIGFjdGl2ZSA9IHRydWU7XG5cbiAgICB0aGlzLm5leHRDYWxsYmFjayA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgaWYgKGFjdGl2ZSkge1xuICAgICAgICBhY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgX3RoaXM0Lm5leHRDYWxsYmFjayA9IG51bGw7XG4gICAgICAgIGNhbGxiYWNrKGV2ZW50KTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgdGhpcy5uZXh0Q2FsbGJhY2suY2FuY2VsID0gZnVuY3Rpb24gKCkge1xuICAgICAgYWN0aXZlID0gZmFsc2U7XG4gICAgfTtcblxuICAgIHJldHVybiB0aGlzLm5leHRDYWxsYmFjaztcbiAgfTtcblxuICBfcHJvdG8ub25UcmFuc2l0aW9uRW5kID0gZnVuY3Rpb24gb25UcmFuc2l0aW9uRW5kKG5vZGUsIHRpbWVvdXQsIGhhbmRsZXIpIHtcbiAgICB0aGlzLnNldE5leHRDYWxsYmFjayhoYW5kbGVyKTtcbiAgICB2YXIgZG9lc05vdEhhdmVUaW1lb3V0T3JMaXN0ZW5lciA9IHRpbWVvdXQgPT0gbnVsbCAmJiAhdGhpcy5wcm9wcy5hZGRFbmRMaXN0ZW5lcjtcblxuICAgIGlmICghbm9kZSB8fCBkb2VzTm90SGF2ZVRpbWVvdXRPckxpc3RlbmVyKSB7XG4gICAgICBzZXRUaW1lb3V0KHRoaXMubmV4dENhbGxiYWNrLCAwKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5wcm9wcy5hZGRFbmRMaXN0ZW5lcikge1xuICAgICAgdGhpcy5wcm9wcy5hZGRFbmRMaXN0ZW5lcihub2RlLCB0aGlzLm5leHRDYWxsYmFjayk7XG4gICAgfVxuXG4gICAgaWYgKHRpbWVvdXQgIT0gbnVsbCkge1xuICAgICAgc2V0VGltZW91dCh0aGlzLm5leHRDYWxsYmFjaywgdGltZW91dCk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIHN0YXR1cyA9IHRoaXMuc3RhdGUuc3RhdHVzO1xuXG4gICAgaWYgKHN0YXR1cyA9PT0gVU5NT1VOVEVEKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICB2YXIgX3RoaXMkcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICBjaGlsZHJlbiA9IF90aGlzJHByb3BzLmNoaWxkcmVuLFxuICAgICAgICBjaGlsZFByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UoX3RoaXMkcHJvcHMsIFtcImNoaWxkcmVuXCJdKTsgLy8gZmlsdGVyIHByb3BzIGZvciBUcmFuc3RpdGlvblxuXG5cbiAgICBkZWxldGUgY2hpbGRQcm9wcy5pbjtcbiAgICBkZWxldGUgY2hpbGRQcm9wcy5tb3VudE9uRW50ZXI7XG4gICAgZGVsZXRlIGNoaWxkUHJvcHMudW5tb3VudE9uRXhpdDtcbiAgICBkZWxldGUgY2hpbGRQcm9wcy5hcHBlYXI7XG4gICAgZGVsZXRlIGNoaWxkUHJvcHMuZW50ZXI7XG4gICAgZGVsZXRlIGNoaWxkUHJvcHMuZXhpdDtcbiAgICBkZWxldGUgY2hpbGRQcm9wcy50aW1lb3V0O1xuICAgIGRlbGV0ZSBjaGlsZFByb3BzLmFkZEVuZExpc3RlbmVyO1xuICAgIGRlbGV0ZSBjaGlsZFByb3BzLm9uRW50ZXI7XG4gICAgZGVsZXRlIGNoaWxkUHJvcHMub25FbnRlcmluZztcbiAgICBkZWxldGUgY2hpbGRQcm9wcy5vbkVudGVyZWQ7XG4gICAgZGVsZXRlIGNoaWxkUHJvcHMub25FeGl0O1xuICAgIGRlbGV0ZSBjaGlsZFByb3BzLm9uRXhpdGluZztcbiAgICBkZWxldGUgY2hpbGRQcm9wcy5vbkV4aXRlZDtcblxuICAgIGlmICh0eXBlb2YgY2hpbGRyZW4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiBjaGlsZHJlbihzdGF0dXMsIGNoaWxkUHJvcHMpO1xuICAgIH1cblxuICAgIHZhciBjaGlsZCA9IF9yZWFjdC5kZWZhdWx0LkNoaWxkcmVuLm9ubHkoY2hpbGRyZW4pO1xuXG4gICAgcmV0dXJuIF9yZWFjdC5kZWZhdWx0LmNsb25lRWxlbWVudChjaGlsZCwgY2hpbGRQcm9wcyk7XG4gIH07XG5cbiAgcmV0dXJuIFRyYW5zaXRpb247XG59KF9yZWFjdC5kZWZhdWx0LkNvbXBvbmVudCk7XG5cblRyYW5zaXRpb24uY29udGV4dFR5cGVzID0ge1xuICB0cmFuc2l0aW9uR3JvdXA6IFByb3BUeXBlcy5vYmplY3Rcbn07XG5UcmFuc2l0aW9uLmNoaWxkQ29udGV4dFR5cGVzID0ge1xuICB0cmFuc2l0aW9uR3JvdXA6IGZ1bmN0aW9uIHRyYW5zaXRpb25Hcm91cCgpIHt9XG59O1xuVHJhbnNpdGlvbi5wcm9wVHlwZXMgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyB7XG4gIC8qKlxuICAgKiBBIGBmdW5jdGlvbmAgY2hpbGQgY2FuIGJlIHVzZWQgaW5zdGVhZCBvZiBhIFJlYWN0IGVsZW1lbnQuIFRoaXMgZnVuY3Rpb24gaXNcbiAgICogY2FsbGVkIHdpdGggdGhlIGN1cnJlbnQgdHJhbnNpdGlvbiBzdGF0dXMgKGAnZW50ZXJpbmcnYCwgYCdlbnRlcmVkJ2AsXG4gICAqIGAnZXhpdGluZydgLCBgJ2V4aXRlZCdgLCBgJ3VubW91bnRlZCdgKSwgd2hpY2ggY2FuIGJlIHVzZWQgdG8gYXBwbHkgY29udGV4dFxuICAgKiBzcGVjaWZpYyBwcm9wcyB0byBhIGNvbXBvbmVudC5cbiAgICpcbiAgICogYGBganN4XG4gICAqIDxUcmFuc2l0aW9uIGluPXt0aGlzLnN0YXRlLmlufSB0aW1lb3V0PXsxNTB9PlxuICAgKiAgIHtzdGF0ZSA9PiAoXG4gICAqICAgICA8TXlDb21wb25lbnQgY2xhc3NOYW1lPXtgZmFkZSBmYWRlLSR7c3RhdGV9YH0gLz5cbiAgICogICApfVxuICAgKiA8L1RyYW5zaXRpb24+XG4gICAqIGBgYFxuICAgKi9cbiAgY2hpbGRyZW46IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsIFByb3BUeXBlcy5lbGVtZW50LmlzUmVxdWlyZWRdKS5pc1JlcXVpcmVkLFxuXG4gIC8qKlxuICAgKiBTaG93IHRoZSBjb21wb25lbnQ7IHRyaWdnZXJzIHRoZSBlbnRlciBvciBleGl0IHN0YXRlc1xuICAgKi9cbiAgaW46IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBCeSBkZWZhdWx0IHRoZSBjaGlsZCBjb21wb25lbnQgaXMgbW91bnRlZCBpbW1lZGlhdGVseSBhbG9uZyB3aXRoXG4gICAqIHRoZSBwYXJlbnQgYFRyYW5zaXRpb25gIGNvbXBvbmVudC4gSWYgeW91IHdhbnQgdG8gXCJsYXp5IG1vdW50XCIgdGhlIGNvbXBvbmVudCBvbiB0aGVcbiAgICogZmlyc3QgYGluPXt0cnVlfWAgeW91IGNhbiBzZXQgYG1vdW50T25FbnRlcmAuIEFmdGVyIHRoZSBmaXJzdCBlbnRlciB0cmFuc2l0aW9uIHRoZSBjb21wb25lbnQgd2lsbCBzdGF5XG4gICAqIG1vdW50ZWQsIGV2ZW4gb24gXCJleGl0ZWRcIiwgdW5sZXNzIHlvdSBhbHNvIHNwZWNpZnkgYHVubW91bnRPbkV4aXRgLlxuICAgKi9cbiAgbW91bnRPbkVudGVyOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogQnkgZGVmYXVsdCB0aGUgY2hpbGQgY29tcG9uZW50IHN0YXlzIG1vdW50ZWQgYWZ0ZXIgaXQgcmVhY2hlcyB0aGUgYCdleGl0ZWQnYCBzdGF0ZS5cbiAgICogU2V0IGB1bm1vdW50T25FeGl0YCBpZiB5b3UnZCBwcmVmZXIgdG8gdW5tb3VudCB0aGUgY29tcG9uZW50IGFmdGVyIGl0IGZpbmlzaGVzIGV4aXRpbmcuXG4gICAqL1xuICB1bm1vdW50T25FeGl0OiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogTm9ybWFsbHkgYSBjb21wb25lbnQgaXMgbm90IHRyYW5zaXRpb25lZCBpZiBpdCBpcyBzaG93biB3aGVuIHRoZSBgPFRyYW5zaXRpb24+YCBjb21wb25lbnQgbW91bnRzLlxuICAgKiBJZiB5b3Ugd2FudCB0byB0cmFuc2l0aW9uIG9uIHRoZSBmaXJzdCBtb3VudCBzZXQgYGFwcGVhcmAgdG8gYHRydWVgLCBhbmQgdGhlXG4gICAqIGNvbXBvbmVudCB3aWxsIHRyYW5zaXRpb24gaW4gYXMgc29vbiBhcyB0aGUgYDxUcmFuc2l0aW9uPmAgbW91bnRzLlxuICAgKlxuICAgKiA+IE5vdGU6IHRoZXJlIGFyZSBubyBzcGVjaWZpYyBcImFwcGVhclwiIHN0YXRlcy4gYGFwcGVhcmAgb25seSBhZGRzIGFuIGFkZGl0aW9uYWwgYGVudGVyYCB0cmFuc2l0aW9uLlxuICAgKi9cbiAgYXBwZWFyOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogRW5hYmxlIG9yIGRpc2FibGUgZW50ZXIgdHJhbnNpdGlvbnMuXG4gICAqL1xuICBlbnRlcjogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIEVuYWJsZSBvciBkaXNhYmxlIGV4aXQgdHJhbnNpdGlvbnMuXG4gICAqL1xuICBleGl0OiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogVGhlIGR1cmF0aW9uIG9mIHRoZSB0cmFuc2l0aW9uLCBpbiBtaWxsaXNlY29uZHMuXG4gICAqIFJlcXVpcmVkIHVubGVzcyBgYWRkRW5kTGlzdGVuZXJgIGlzIHByb3ZpZGVkLlxuICAgKlxuICAgKiBZb3UgbWF5IHNwZWNpZnkgYSBzaW5nbGUgdGltZW91dCBmb3IgYWxsIHRyYW5zaXRpb25zOlxuICAgKlxuICAgKiBgYGBqc3hcbiAgICogdGltZW91dD17NTAwfVxuICAgKiBgYGBcbiAgICpcbiAgICogb3IgaW5kaXZpZHVhbGx5OlxuICAgKlxuICAgKiBgYGBqc3hcbiAgICogdGltZW91dD17e1xuICAgKiAgYXBwZWFyOiA1MDAsXG4gICAqICBlbnRlcjogMzAwLFxuICAgKiAgZXhpdDogNTAwLFxuICAgKiB9fVxuICAgKiBgYGBcbiAgICpcbiAgICogLSBgYXBwZWFyYCBkZWZhdWx0cyB0byB0aGUgdmFsdWUgb2YgYGVudGVyYFxuICAgKiAtIGBlbnRlcmAgZGVmYXVsdHMgdG8gYDBgXG4gICAqIC0gYGV4aXRgIGRlZmF1bHRzIHRvIGAwYFxuICAgKlxuICAgKiBAdHlwZSB7bnVtYmVyIHwgeyBlbnRlcj86IG51bWJlciwgZXhpdD86IG51bWJlciwgYXBwZWFyPzogbnVtYmVyIH19XG4gICAqL1xuICB0aW1lb3V0OiBmdW5jdGlvbiB0aW1lb3V0KHByb3BzKSB7XG4gICAgdmFyIHB0ID0gX1Byb3BUeXBlcy50aW1lb3V0c1NoYXBlO1xuICAgIGlmICghcHJvcHMuYWRkRW5kTGlzdGVuZXIpIHB0ID0gcHQuaXNSZXF1aXJlZDtcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHJldHVybiBwdC5hcHBseSh2b2lkIDAsIFtwcm9wc10uY29uY2F0KGFyZ3MpKTtcbiAgfSxcblxuICAvKipcbiAgICogQWRkIGEgY3VzdG9tIHRyYW5zaXRpb24gZW5kIHRyaWdnZXIuIENhbGxlZCB3aXRoIHRoZSB0cmFuc2l0aW9uaW5nXG4gICAqIERPTSBub2RlIGFuZCBhIGBkb25lYCBjYWxsYmFjay4gQWxsb3dzIGZvciBtb3JlIGZpbmUgZ3JhaW5lZCB0cmFuc2l0aW9uIGVuZFxuICAgKiBsb2dpYy4gKipOb3RlOioqIFRpbWVvdXRzIGFyZSBzdGlsbCB1c2VkIGFzIGEgZmFsbGJhY2sgaWYgcHJvdmlkZWQuXG4gICAqXG4gICAqIGBgYGpzeFxuICAgKiBhZGRFbmRMaXN0ZW5lcj17KG5vZGUsIGRvbmUpID0+IHtcbiAgICogICAvLyB1c2UgdGhlIGNzcyB0cmFuc2l0aW9uZW5kIGV2ZW50IHRvIG1hcmsgdGhlIGZpbmlzaCBvZiBhIHRyYW5zaXRpb25cbiAgICogICBub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCBkb25lLCBmYWxzZSk7XG4gICAqIH19XG4gICAqIGBgYFxuICAgKi9cbiAgYWRkRW5kTGlzdGVuZXI6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmaXJlZCBiZWZvcmUgdGhlIFwiZW50ZXJpbmdcIiBzdGF0dXMgaXMgYXBwbGllZC4gQW4gZXh0cmEgcGFyYW1ldGVyXG4gICAqIGBpc0FwcGVhcmluZ2AgaXMgc3VwcGxpZWQgdG8gaW5kaWNhdGUgaWYgdGhlIGVudGVyIHN0YWdlIGlzIG9jY3VycmluZyBvbiB0aGUgaW5pdGlhbCBtb3VudFxuICAgKlxuICAgKiBAdHlwZSBGdW5jdGlvbihub2RlOiBIdG1sRWxlbWVudCwgaXNBcHBlYXJpbmc6IGJvb2wpIC0+IHZvaWRcbiAgICovXG4gIG9uRW50ZXI6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmaXJlZCBhZnRlciB0aGUgXCJlbnRlcmluZ1wiIHN0YXR1cyBpcyBhcHBsaWVkLiBBbiBleHRyYSBwYXJhbWV0ZXJcbiAgICogYGlzQXBwZWFyaW5nYCBpcyBzdXBwbGllZCB0byBpbmRpY2F0ZSBpZiB0aGUgZW50ZXIgc3RhZ2UgaXMgb2NjdXJyaW5nIG9uIHRoZSBpbml0aWFsIG1vdW50XG4gICAqXG4gICAqIEB0eXBlIEZ1bmN0aW9uKG5vZGU6IEh0bWxFbGVtZW50LCBpc0FwcGVhcmluZzogYm9vbClcbiAgICovXG4gIG9uRW50ZXJpbmc6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmaXJlZCBhZnRlciB0aGUgXCJlbnRlcmVkXCIgc3RhdHVzIGlzIGFwcGxpZWQuIEFuIGV4dHJhIHBhcmFtZXRlclxuICAgKiBgaXNBcHBlYXJpbmdgIGlzIHN1cHBsaWVkIHRvIGluZGljYXRlIGlmIHRoZSBlbnRlciBzdGFnZSBpcyBvY2N1cnJpbmcgb24gdGhlIGluaXRpYWwgbW91bnRcbiAgICpcbiAgICogQHR5cGUgRnVuY3Rpb24obm9kZTogSHRtbEVsZW1lbnQsIGlzQXBwZWFyaW5nOiBib29sKSAtPiB2b2lkXG4gICAqL1xuICBvbkVudGVyZWQ6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmaXJlZCBiZWZvcmUgdGhlIFwiZXhpdGluZ1wiIHN0YXR1cyBpcyBhcHBsaWVkLlxuICAgKlxuICAgKiBAdHlwZSBGdW5jdGlvbihub2RlOiBIdG1sRWxlbWVudCkgLT4gdm9pZFxuICAgKi9cbiAgb25FeGl0OiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQ2FsbGJhY2sgZmlyZWQgYWZ0ZXIgdGhlIFwiZXhpdGluZ1wiIHN0YXR1cyBpcyBhcHBsaWVkLlxuICAgKlxuICAgKiBAdHlwZSBGdW5jdGlvbihub2RlOiBIdG1sRWxlbWVudCkgLT4gdm9pZFxuICAgKi9cbiAgb25FeGl0aW5nOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQ2FsbGJhY2sgZmlyZWQgYWZ0ZXIgdGhlIFwiZXhpdGVkXCIgc3RhdHVzIGlzIGFwcGxpZWQuXG4gICAqXG4gICAqIEB0eXBlIEZ1bmN0aW9uKG5vZGU6IEh0bWxFbGVtZW50KSAtPiB2b2lkXG4gICAqL1xuICBvbkV4aXRlZDogUHJvcFR5cGVzLmZ1bmMgLy8gTmFtZSB0aGUgZnVuY3Rpb24gc28gaXQgaXMgY2xlYXJlciBpbiB0aGUgZG9jdW1lbnRhdGlvblxuXG59IDoge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5UcmFuc2l0aW9uLmRlZmF1bHRQcm9wcyA9IHtcbiAgaW46IGZhbHNlLFxuICBtb3VudE9uRW50ZXI6IGZhbHNlLFxuICB1bm1vdW50T25FeGl0OiBmYWxzZSxcbiAgYXBwZWFyOiBmYWxzZSxcbiAgZW50ZXI6IHRydWUsXG4gIGV4aXQ6IHRydWUsXG4gIG9uRW50ZXI6IG5vb3AsXG4gIG9uRW50ZXJpbmc6IG5vb3AsXG4gIG9uRW50ZXJlZDogbm9vcCxcbiAgb25FeGl0OiBub29wLFxuICBvbkV4aXRpbmc6IG5vb3AsXG4gIG9uRXhpdGVkOiBub29wXG59O1xuVHJhbnNpdGlvbi5VTk1PVU5URUQgPSAwO1xuVHJhbnNpdGlvbi5FWElURUQgPSAxO1xuVHJhbnNpdGlvbi5FTlRFUklORyA9IDI7XG5UcmFuc2l0aW9uLkVOVEVSRUQgPSAzO1xuVHJhbnNpdGlvbi5FWElUSU5HID0gNDtcblxudmFyIF9kZWZhdWx0ID0gKDAsIF9yZWFjdExpZmVjeWNsZXNDb21wYXQucG9seWZpbGwpKFRyYW5zaXRpb24pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIFByb3BUeXBlcyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpKTtcblxudmFyIF9hZGRDbGFzcyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcImRvbS1oZWxwZXJzL2NsYXNzL2FkZENsYXNzXCIpKTtcblxudmFyIF9yZW1vdmVDbGFzcyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcImRvbS1oZWxwZXJzL2NsYXNzL3JlbW92ZUNsYXNzXCIpKTtcblxudmFyIF9yZWFjdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcblxudmFyIF9UcmFuc2l0aW9uID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9UcmFuc2l0aW9uXCIpKTtcblxudmFyIF9Qcm9wVHlwZXMgPSByZXF1aXJlKFwiLi91dGlscy9Qcm9wVHlwZXNcIik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikgeyBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7IHJldHVybiBvYmo7IH0gZWxzZSB7IHZhciBuZXdPYmogPSB7fTsgaWYgKG9iaiAhPSBudWxsKSB7IGZvciAodmFyIGtleSBpbiBvYmopIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHsgdmFyIGRlc2MgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDoge307IGlmIChkZXNjLmdldCB8fCBkZXNjLnNldCkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpOyB9IGVsc2UgeyBuZXdPYmpba2V5XSA9IG9ialtrZXldOyB9IH0gfSB9IG5ld09iai5kZWZhdWx0ID0gb2JqOyByZXR1cm4gbmV3T2JqOyB9IH1cblxuZnVuY3Rpb24gX2V4dGVuZHMoKSB7IF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTsgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzTG9vc2Uoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzLnByb3RvdHlwZSk7IHN1YkNsYXNzLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IHN1YkNsYXNzOyBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBhZGRDbGFzcyA9IGZ1bmN0aW9uIGFkZENsYXNzKG5vZGUsIGNsYXNzZXMpIHtcbiAgcmV0dXJuIG5vZGUgJiYgY2xhc3NlcyAmJiBjbGFzc2VzLnNwbGl0KCcgJykuZm9yRWFjaChmdW5jdGlvbiAoYykge1xuICAgIHJldHVybiAoMCwgX2FkZENsYXNzLmRlZmF1bHQpKG5vZGUsIGMpO1xuICB9KTtcbn07XG5cbnZhciByZW1vdmVDbGFzcyA9IGZ1bmN0aW9uIHJlbW92ZUNsYXNzKG5vZGUsIGNsYXNzZXMpIHtcbiAgcmV0dXJuIG5vZGUgJiYgY2xhc3NlcyAmJiBjbGFzc2VzLnNwbGl0KCcgJykuZm9yRWFjaChmdW5jdGlvbiAoYykge1xuICAgIHJldHVybiAoMCwgX3JlbW92ZUNsYXNzLmRlZmF1bHQpKG5vZGUsIGMpO1xuICB9KTtcbn07XG4vKipcbiAqIEEgdHJhbnNpdGlvbiBjb21wb25lbnQgaW5zcGlyZWQgYnkgdGhlIGV4Y2VsbGVudFxuICogW25nLWFuaW1hdGVdKGh0dHA6Ly93d3cubmdhbmltYXRlLm9yZy8pIGxpYnJhcnksIHlvdSBzaG91bGQgdXNlIGl0IGlmIHlvdSdyZVxuICogdXNpbmcgQ1NTIHRyYW5zaXRpb25zIG9yIGFuaW1hdGlvbnMuIEl0J3MgYnVpbHQgdXBvbiB0aGVcbiAqIFtgVHJhbnNpdGlvbmBdKGh0dHBzOi8vcmVhY3Rjb21tdW5pdHkub3JnL3JlYWN0LXRyYW5zaXRpb24tZ3JvdXAvdHJhbnNpdGlvbilcbiAqIGNvbXBvbmVudCwgc28gaXQgaW5oZXJpdHMgYWxsIG9mIGl0cyBwcm9wcy5cbiAqXG4gKiBgQ1NTVHJhbnNpdGlvbmAgYXBwbGllcyBhIHBhaXIgb2YgY2xhc3MgbmFtZXMgZHVyaW5nIHRoZSBgYXBwZWFyYCwgYGVudGVyYCxcbiAqIGFuZCBgZXhpdGAgc3RhdGVzIG9mIHRoZSB0cmFuc2l0aW9uLiBUaGUgZmlyc3QgY2xhc3MgaXMgYXBwbGllZCBhbmQgdGhlbiBhXG4gKiBzZWNvbmQgYCotYWN0aXZlYCBjbGFzcyBpbiBvcmRlciB0byBhY3RpdmF0ZSB0aGUgQ1NTUyB0cmFuc2l0aW9uLiBBZnRlciB0aGVcbiAqIHRyYW5zaXRpb24sIG1hdGNoaW5nIGAqLWRvbmVgIGNsYXNzIG5hbWVzIGFyZSBhcHBsaWVkIHRvIHBlcnNpc3QgdGhlXG4gKiB0cmFuc2l0aW9uIHN0YXRlLlxuICpcbiAqIGBgYGpzeFxuICogZnVuY3Rpb24gQXBwKCkge1xuICogICBjb25zdCBbaW5Qcm9wLCBzZXRJblByb3BdID0gdXNlU3RhdGUoZmFsc2UpO1xuICogICByZXR1cm4gKFxuICogICAgIDxkaXY+XG4gKiAgICAgICA8Q1NTVHJhbnNpdGlvbiBpbj17aW5Qcm9wfSB0aW1lb3V0PXsyMDB9IGNsYXNzTmFtZXM9XCJteS1ub2RlXCI+XG4gKiAgICAgICAgIDxkaXY+XG4gKiAgICAgICAgICAge1wiSSdsbCByZWNlaXZlIG15LW5vZGUtKiBjbGFzc2VzXCJ9XG4gKiAgICAgICAgIDwvZGl2PlxuICogICAgICAgPC9DU1NUcmFuc2l0aW9uPlxuICogICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17KCkgPT4gc2V0SW5Qcm9wKHRydWUpfT5cbiAqICAgICAgICAgQ2xpY2sgdG8gRW50ZXJcbiAqICAgICAgIDwvYnV0dG9uPlxuICogICAgIDwvZGl2PlxuICogICApO1xuICogfVxuICogYGBgXG4gKlxuICogV2hlbiB0aGUgYGluYCBwcm9wIGlzIHNldCB0byBgdHJ1ZWAsIHRoZSBjaGlsZCBjb21wb25lbnQgd2lsbCBmaXJzdCByZWNlaXZlXG4gKiB0aGUgY2xhc3MgYGV4YW1wbGUtZW50ZXJgLCB0aGVuIHRoZSBgZXhhbXBsZS1lbnRlci1hY3RpdmVgIHdpbGwgYmUgYWRkZWQgaW5cbiAqIHRoZSBuZXh0IHRpY2suIGBDU1NUcmFuc2l0aW9uYCBbZm9yY2VzIGFcbiAqIHJlZmxvd10oaHR0cHM6Ly9naXRodWIuY29tL3JlYWN0anMvcmVhY3QtdHJhbnNpdGlvbi1ncm91cC9ibG9iLzUwMDczMDNlNzI5YTc0YmU2NmEyMWMzZTIyMDVlNDkxNjgyMTUyNGIvc3JjL0NTU1RyYW5zaXRpb24uanMjTDIwOC1MMjE1KVxuICogYmV0d2VlbiBiZWZvcmUgYWRkaW5nIHRoZSBgZXhhbXBsZS1lbnRlci1hY3RpdmVgLiBUaGlzIGlzIGFuIGltcG9ydGFudCB0cmlja1xuICogYmVjYXVzZSBpdCBhbGxvd3MgdXMgdG8gdHJhbnNpdGlvbiBiZXR3ZWVuIGBleGFtcGxlLWVudGVyYCBhbmRcbiAqIGBleGFtcGxlLWVudGVyLWFjdGl2ZWAgZXZlbiB0aG91Z2ggdGhleSB3ZXJlIGFkZGVkIGltbWVkaWF0ZWx5IG9uZSBhZnRlclxuICogYW5vdGhlci4gTW9zdCBub3RhYmx5LCB0aGlzIGlzIHdoYXQgbWFrZXMgaXQgcG9zc2libGUgZm9yIHVzIHRvIGFuaW1hdGVcbiAqIF9hcHBlYXJhbmNlXy5cbiAqXG4gKiBgYGBjc3NcbiAqIC5teS1ub2RlLWVudGVyIHtcbiAqICAgb3BhY2l0eTogMDtcbiAqIH1cbiAqIC5teS1ub2RlLWVudGVyLWFjdGl2ZSB7XG4gKiAgIG9wYWNpdHk6IDE7XG4gKiAgIHRyYW5zaXRpb246IG9wYWNpdHkgMjAwbXM7XG4gKiB9XG4gKiAubXktbm9kZS1leGl0IHtcbiAqICAgb3BhY2l0eTogMTtcbiAqIH1cbiAqIC5teS1ub2RlLWV4aXQtYWN0aXZlIHtcbiAqICAgb3BhY2l0eTogMDtcbiAqICAgdHJhbnNpdGlvbjogb3BhY2l0eTogMjAwbXM7XG4gKiB9XG4gKiBgYGBcbiAqXG4gKiBgKi1hY3RpdmVgIGNsYXNzZXMgcmVwcmVzZW50IHdoaWNoIHN0eWxlcyB5b3Ugd2FudCB0byBhbmltYXRlICoqdG8qKi5cbiAqL1xuXG5cbnZhciBDU1NUcmFuc2l0aW9uID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0c0xvb3NlKENTU1RyYW5zaXRpb24sIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIENTU1RyYW5zaXRpb24oKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIF90aGlzID0gX1JlYWN0JENvbXBvbmVudC5jYWxsLmFwcGx5KF9SZWFjdCRDb21wb25lbnQsIFt0aGlzXS5jb25jYXQoYXJncykpIHx8IHRoaXM7XG5cbiAgICBfdGhpcy5vbkVudGVyID0gZnVuY3Rpb24gKG5vZGUsIGFwcGVhcmluZykge1xuICAgICAgdmFyIF90aGlzJGdldENsYXNzTmFtZXMgPSBfdGhpcy5nZXRDbGFzc05hbWVzKGFwcGVhcmluZyA/ICdhcHBlYXInIDogJ2VudGVyJyksXG4gICAgICAgICAgY2xhc3NOYW1lID0gX3RoaXMkZ2V0Q2xhc3NOYW1lcy5jbGFzc05hbWU7XG5cbiAgICAgIF90aGlzLnJlbW92ZUNsYXNzZXMobm9kZSwgJ2V4aXQnKTtcblxuICAgICAgYWRkQ2xhc3Mobm9kZSwgY2xhc3NOYW1lKTtcblxuICAgICAgaWYgKF90aGlzLnByb3BzLm9uRW50ZXIpIHtcbiAgICAgICAgX3RoaXMucHJvcHMub25FbnRlcihub2RlLCBhcHBlYXJpbmcpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfdGhpcy5vbkVudGVyaW5nID0gZnVuY3Rpb24gKG5vZGUsIGFwcGVhcmluZykge1xuICAgICAgdmFyIF90aGlzJGdldENsYXNzTmFtZXMyID0gX3RoaXMuZ2V0Q2xhc3NOYW1lcyhhcHBlYXJpbmcgPyAnYXBwZWFyJyA6ICdlbnRlcicpLFxuICAgICAgICAgIGFjdGl2ZUNsYXNzTmFtZSA9IF90aGlzJGdldENsYXNzTmFtZXMyLmFjdGl2ZUNsYXNzTmFtZTtcblxuICAgICAgX3RoaXMucmVmbG93QW5kQWRkQ2xhc3Mobm9kZSwgYWN0aXZlQ2xhc3NOYW1lKTtcblxuICAgICAgaWYgKF90aGlzLnByb3BzLm9uRW50ZXJpbmcpIHtcbiAgICAgICAgX3RoaXMucHJvcHMub25FbnRlcmluZyhub2RlLCBhcHBlYXJpbmcpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfdGhpcy5vbkVudGVyZWQgPSBmdW5jdGlvbiAobm9kZSwgYXBwZWFyaW5nKSB7XG4gICAgICB2YXIgYXBwZWFyQ2xhc3NOYW1lID0gX3RoaXMuZ2V0Q2xhc3NOYW1lcygnYXBwZWFyJykuZG9uZUNsYXNzTmFtZTtcblxuICAgICAgdmFyIGVudGVyQ2xhc3NOYW1lID0gX3RoaXMuZ2V0Q2xhc3NOYW1lcygnZW50ZXInKS5kb25lQ2xhc3NOYW1lO1xuXG4gICAgICB2YXIgZG9uZUNsYXNzTmFtZSA9IGFwcGVhcmluZyA/IGFwcGVhckNsYXNzTmFtZSArIFwiIFwiICsgZW50ZXJDbGFzc05hbWUgOiBlbnRlckNsYXNzTmFtZTtcblxuICAgICAgX3RoaXMucmVtb3ZlQ2xhc3Nlcyhub2RlLCBhcHBlYXJpbmcgPyAnYXBwZWFyJyA6ICdlbnRlcicpO1xuXG4gICAgICBhZGRDbGFzcyhub2RlLCBkb25lQ2xhc3NOYW1lKTtcblxuICAgICAgaWYgKF90aGlzLnByb3BzLm9uRW50ZXJlZCkge1xuICAgICAgICBfdGhpcy5wcm9wcy5vbkVudGVyZWQobm9kZSwgYXBwZWFyaW5nKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3RoaXMub25FeGl0ID0gZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgIHZhciBfdGhpcyRnZXRDbGFzc05hbWVzMyA9IF90aGlzLmdldENsYXNzTmFtZXMoJ2V4aXQnKSxcbiAgICAgICAgICBjbGFzc05hbWUgPSBfdGhpcyRnZXRDbGFzc05hbWVzMy5jbGFzc05hbWU7XG5cbiAgICAgIF90aGlzLnJlbW92ZUNsYXNzZXMobm9kZSwgJ2FwcGVhcicpO1xuXG4gICAgICBfdGhpcy5yZW1vdmVDbGFzc2VzKG5vZGUsICdlbnRlcicpO1xuXG4gICAgICBhZGRDbGFzcyhub2RlLCBjbGFzc05hbWUpO1xuXG4gICAgICBpZiAoX3RoaXMucHJvcHMub25FeGl0KSB7XG4gICAgICAgIF90aGlzLnByb3BzLm9uRXhpdChub2RlKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3RoaXMub25FeGl0aW5nID0gZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgIHZhciBfdGhpcyRnZXRDbGFzc05hbWVzNCA9IF90aGlzLmdldENsYXNzTmFtZXMoJ2V4aXQnKSxcbiAgICAgICAgICBhY3RpdmVDbGFzc05hbWUgPSBfdGhpcyRnZXRDbGFzc05hbWVzNC5hY3RpdmVDbGFzc05hbWU7XG5cbiAgICAgIF90aGlzLnJlZmxvd0FuZEFkZENsYXNzKG5vZGUsIGFjdGl2ZUNsYXNzTmFtZSk7XG5cbiAgICAgIGlmIChfdGhpcy5wcm9wcy5vbkV4aXRpbmcpIHtcbiAgICAgICAgX3RoaXMucHJvcHMub25FeGl0aW5nKG5vZGUpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfdGhpcy5vbkV4aXRlZCA9IGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICB2YXIgX3RoaXMkZ2V0Q2xhc3NOYW1lczUgPSBfdGhpcy5nZXRDbGFzc05hbWVzKCdleGl0JyksXG4gICAgICAgICAgZG9uZUNsYXNzTmFtZSA9IF90aGlzJGdldENsYXNzTmFtZXM1LmRvbmVDbGFzc05hbWU7XG5cbiAgICAgIF90aGlzLnJlbW92ZUNsYXNzZXMobm9kZSwgJ2V4aXQnKTtcblxuICAgICAgYWRkQ2xhc3Mobm9kZSwgZG9uZUNsYXNzTmFtZSk7XG5cbiAgICAgIGlmIChfdGhpcy5wcm9wcy5vbkV4aXRlZCkge1xuICAgICAgICBfdGhpcy5wcm9wcy5vbkV4aXRlZChub2RlKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3RoaXMuZ2V0Q2xhc3NOYW1lcyA9IGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgICB2YXIgY2xhc3NOYW1lcyA9IF90aGlzLnByb3BzLmNsYXNzTmFtZXM7XG4gICAgICB2YXIgaXNTdHJpbmdDbGFzc05hbWVzID0gdHlwZW9mIGNsYXNzTmFtZXMgPT09ICdzdHJpbmcnO1xuICAgICAgdmFyIHByZWZpeCA9IGlzU3RyaW5nQ2xhc3NOYW1lcyAmJiBjbGFzc05hbWVzID8gY2xhc3NOYW1lcyArICctJyA6ICcnO1xuICAgICAgdmFyIGNsYXNzTmFtZSA9IGlzU3RyaW5nQ2xhc3NOYW1lcyA/IHByZWZpeCArIHR5cGUgOiBjbGFzc05hbWVzW3R5cGVdO1xuICAgICAgdmFyIGFjdGl2ZUNsYXNzTmFtZSA9IGlzU3RyaW5nQ2xhc3NOYW1lcyA/IGNsYXNzTmFtZSArICctYWN0aXZlJyA6IGNsYXNzTmFtZXNbdHlwZSArICdBY3RpdmUnXTtcbiAgICAgIHZhciBkb25lQ2xhc3NOYW1lID0gaXNTdHJpbmdDbGFzc05hbWVzID8gY2xhc3NOYW1lICsgJy1kb25lJyA6IGNsYXNzTmFtZXNbdHlwZSArICdEb25lJ107XG4gICAgICByZXR1cm4ge1xuICAgICAgICBjbGFzc05hbWU6IGNsYXNzTmFtZSxcbiAgICAgICAgYWN0aXZlQ2xhc3NOYW1lOiBhY3RpdmVDbGFzc05hbWUsXG4gICAgICAgIGRvbmVDbGFzc05hbWU6IGRvbmVDbGFzc05hbWVcbiAgICAgIH07XG4gICAgfTtcblxuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBDU1NUcmFuc2l0aW9uLnByb3RvdHlwZTtcblxuICBfcHJvdG8ucmVtb3ZlQ2xhc3NlcyA9IGZ1bmN0aW9uIHJlbW92ZUNsYXNzZXMobm9kZSwgdHlwZSkge1xuICAgIHZhciBfdGhpcyRnZXRDbGFzc05hbWVzNiA9IHRoaXMuZ2V0Q2xhc3NOYW1lcyh0eXBlKSxcbiAgICAgICAgY2xhc3NOYW1lID0gX3RoaXMkZ2V0Q2xhc3NOYW1lczYuY2xhc3NOYW1lLFxuICAgICAgICBhY3RpdmVDbGFzc05hbWUgPSBfdGhpcyRnZXRDbGFzc05hbWVzNi5hY3RpdmVDbGFzc05hbWUsXG4gICAgICAgIGRvbmVDbGFzc05hbWUgPSBfdGhpcyRnZXRDbGFzc05hbWVzNi5kb25lQ2xhc3NOYW1lO1xuXG4gICAgY2xhc3NOYW1lICYmIHJlbW92ZUNsYXNzKG5vZGUsIGNsYXNzTmFtZSk7XG4gICAgYWN0aXZlQ2xhc3NOYW1lICYmIHJlbW92ZUNsYXNzKG5vZGUsIGFjdGl2ZUNsYXNzTmFtZSk7XG4gICAgZG9uZUNsYXNzTmFtZSAmJiByZW1vdmVDbGFzcyhub2RlLCBkb25lQ2xhc3NOYW1lKTtcbiAgfTtcblxuICBfcHJvdG8ucmVmbG93QW5kQWRkQ2xhc3MgPSBmdW5jdGlvbiByZWZsb3dBbmRBZGRDbGFzcyhub2RlLCBjbGFzc05hbWUpIHtcbiAgICAvLyBUaGlzIGlzIGZvciB0byBmb3JjZSBhIHJlcGFpbnQsXG4gICAgLy8gd2hpY2ggaXMgbmVjZXNzYXJ5IGluIG9yZGVyIHRvIHRyYW5zaXRpb24gc3R5bGVzIHdoZW4gYWRkaW5nIGEgY2xhc3MgbmFtZS5cbiAgICBpZiAoY2xhc3NOYW1lKSB7XG4gICAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtZXhwcmVzc2lvbnMgKi9cbiAgICAgIG5vZGUgJiYgbm9kZS5zY3JvbGxUb3A7XG4gICAgICAvKiBlc2xpbnQtZW5hYmxlIG5vLXVudXNlZC1leHByZXNzaW9ucyAqL1xuXG4gICAgICBhZGRDbGFzcyhub2RlLCBjbGFzc05hbWUpO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8ucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBwcm9wcyA9IF9leHRlbmRzKHt9LCB0aGlzLnByb3BzKTtcblxuICAgIGRlbGV0ZSBwcm9wcy5jbGFzc05hbWVzO1xuICAgIHJldHVybiBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9UcmFuc2l0aW9uLmRlZmF1bHQsIF9leHRlbmRzKHt9LCBwcm9wcywge1xuICAgICAgb25FbnRlcjogdGhpcy5vbkVudGVyLFxuICAgICAgb25FbnRlcmVkOiB0aGlzLm9uRW50ZXJlZCxcbiAgICAgIG9uRW50ZXJpbmc6IHRoaXMub25FbnRlcmluZyxcbiAgICAgIG9uRXhpdDogdGhpcy5vbkV4aXQsXG4gICAgICBvbkV4aXRpbmc6IHRoaXMub25FeGl0aW5nLFxuICAgICAgb25FeGl0ZWQ6IHRoaXMub25FeGl0ZWRcbiAgICB9KSk7XG4gIH07XG5cbiAgcmV0dXJuIENTU1RyYW5zaXRpb247XG59KF9yZWFjdC5kZWZhdWx0LkNvbXBvbmVudCk7XG5cbkNTU1RyYW5zaXRpb24uZGVmYXVsdFByb3BzID0ge1xuICBjbGFzc05hbWVzOiAnJ1xufTtcbkNTU1RyYW5zaXRpb24ucHJvcFR5cGVzID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gX2V4dGVuZHMoe30sIF9UcmFuc2l0aW9uLmRlZmF1bHQucHJvcFR5cGVzLCB7XG4gIC8qKlxuICAgKiBUaGUgYW5pbWF0aW9uIGNsYXNzTmFtZXMgYXBwbGllZCB0byB0aGUgY29tcG9uZW50IGFzIGl0IGVudGVycywgZXhpdHMgb3JcbiAgICogaGFzIGZpbmlzaGVkIHRoZSB0cmFuc2l0aW9uLiBBIHNpbmdsZSBuYW1lIGNhbiBiZSBwcm92aWRlZCBhbmQgaXQgd2lsbCBiZVxuICAgKiBzdWZmaXhlZCBmb3IgZWFjaCBzdGFnZTogZS5nLlxuICAgKlxuICAgKiBgY2xhc3NOYW1lcz1cImZhZGVcImAgYXBwbGllcyBgZmFkZS1lbnRlcmAsIGBmYWRlLWVudGVyLWFjdGl2ZWAsXG4gICAqIGBmYWRlLWVudGVyLWRvbmVgLCBgZmFkZS1leGl0YCwgYGZhZGUtZXhpdC1hY3RpdmVgLCBgZmFkZS1leGl0LWRvbmVgLFxuICAgKiBgZmFkZS1hcHBlYXJgLCBgZmFkZS1hcHBlYXItYWN0aXZlYCwgYW5kIGBmYWRlLWFwcGVhci1kb25lYC5cbiAgICpcbiAgICogKipOb3RlKio6IGBmYWRlLWFwcGVhci1kb25lYCBhbmQgYGZhZGUtZW50ZXItZG9uZWAgd2lsbCBfYm90aF8gYmUgYXBwbGllZC5cbiAgICogVGhpcyBhbGxvd3MgeW91IHRvIGRlZmluZSBkaWZmZXJlbnQgYmVoYXZpb3IgZm9yIHdoZW4gYXBwZWFyaW5nIGlzIGRvbmUgYW5kXG4gICAqIHdoZW4gcmVndWxhciBlbnRlcmluZyBpcyBkb25lLCB1c2luZyBzZWxlY3RvcnMgbGlrZVxuICAgKiBgLmZhZGUtZW50ZXItZG9uZTpub3QoLmZhZGUtYXBwZWFyLWRvbmUpYC4gRm9yIGV4YW1wbGUsIHlvdSBjb3VsZCBhcHBseSBhblxuICAgKiBlcGljIGVudHJhbmNlIGFuaW1hdGlvbiB3aGVuIGVsZW1lbnQgZmlyc3QgYXBwZWFycyBpbiB0aGUgRE9NIHVzaW5nXG4gICAqIFtBbmltYXRlLmNzc10oaHR0cHM6Ly9kYW5lZGVuLmdpdGh1Yi5pby9hbmltYXRlLmNzcy8pLiBPdGhlcndpc2UgeW91IGNhblxuICAgKiBzaW1wbHkgdXNlIGBmYWRlLWVudGVyLWRvbmVgIGZvciBkZWZpbmluZyBib3RoIGNhc2VzLlxuICAgKlxuICAgKiBFYWNoIGluZGl2aWR1YWwgY2xhc3NOYW1lcyBjYW4gYWxzbyBiZSBzcGVjaWZpZWQgaW5kZXBlbmRlbnRseSBsaWtlOlxuICAgKlxuICAgKiBgYGBqc1xuICAgKiBjbGFzc05hbWVzPXt7XG4gICAqICBhcHBlYXI6ICdteS1hcHBlYXInLFxuICAgKiAgYXBwZWFyQWN0aXZlOiAnbXktYWN0aXZlLWFwcGVhcicsXG4gICAqICBhcHBlYXJEb25lOiAnbXktZG9uZS1hcHBlYXInLFxuICAgKiAgZW50ZXI6ICdteS1lbnRlcicsXG4gICAqICBlbnRlckFjdGl2ZTogJ215LWFjdGl2ZS1lbnRlcicsXG4gICAqICBlbnRlckRvbmU6ICdteS1kb25lLWVudGVyJyxcbiAgICogIGV4aXQ6ICdteS1leGl0JyxcbiAgICogIGV4aXRBY3RpdmU6ICdteS1hY3RpdmUtZXhpdCcsXG4gICAqICBleGl0RG9uZTogJ215LWRvbmUtZXhpdCcsXG4gICAqIH19XG4gICAqIGBgYFxuICAgKlxuICAgKiBJZiB5b3Ugd2FudCB0byBzZXQgdGhlc2UgY2xhc3NlcyB1c2luZyBDU1MgTW9kdWxlczpcbiAgICpcbiAgICogYGBganNcbiAgICogaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcy5jc3MnO1xuICAgKiBgYGBcbiAgICpcbiAgICogeW91IG1pZ2h0IHdhbnQgdG8gdXNlIGNhbWVsQ2FzZSBpbiB5b3VyIENTUyBmaWxlLCB0aGF0IHdheSBjb3VsZCBzaW1wbHlcbiAgICogc3ByZWFkIHRoZW0gaW5zdGVhZCBvZiBsaXN0aW5nIHRoZW0gb25lIGJ5IG9uZTpcbiAgICpcbiAgICogYGBganNcbiAgICogY2xhc3NOYW1lcz17eyAuLi5zdHlsZXMgfX1cbiAgICogYGBgXG4gICAqXG4gICAqIEB0eXBlIHtzdHJpbmcgfCB7XG4gICAqICBhcHBlYXI/OiBzdHJpbmcsXG4gICAqICBhcHBlYXJBY3RpdmU/OiBzdHJpbmcsXG4gICAqICBhcHBlYXJEb25lPzogc3RyaW5nLFxuICAgKiAgZW50ZXI/OiBzdHJpbmcsXG4gICAqICBlbnRlckFjdGl2ZT86IHN0cmluZyxcbiAgICogIGVudGVyRG9uZT86IHN0cmluZyxcbiAgICogIGV4aXQ/OiBzdHJpbmcsXG4gICAqICBleGl0QWN0aXZlPzogc3RyaW5nLFxuICAgKiAgZXhpdERvbmU/OiBzdHJpbmcsXG4gICAqIH19XG4gICAqL1xuICBjbGFzc05hbWVzOiBfUHJvcFR5cGVzLmNsYXNzTmFtZXNTaGFwZSxcblxuICAvKipcbiAgICogQSBgPFRyYW5zaXRpb24+YCBjYWxsYmFjayBmaXJlZCBpbW1lZGlhdGVseSBhZnRlciB0aGUgJ2VudGVyJyBvciAnYXBwZWFyJyBjbGFzcyBpc1xuICAgKiBhcHBsaWVkLlxuICAgKlxuICAgKiBAdHlwZSBGdW5jdGlvbihub2RlOiBIdG1sRWxlbWVudCwgaXNBcHBlYXJpbmc6IGJvb2wpXG4gICAqL1xuICBvbkVudGVyOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQSBgPFRyYW5zaXRpb24+YCBjYWxsYmFjayBmaXJlZCBpbW1lZGlhdGVseSBhZnRlciB0aGUgJ2VudGVyLWFjdGl2ZScgb3JcbiAgICogJ2FwcGVhci1hY3RpdmUnIGNsYXNzIGlzIGFwcGxpZWQuXG4gICAqXG4gICAqIEB0eXBlIEZ1bmN0aW9uKG5vZGU6IEh0bWxFbGVtZW50LCBpc0FwcGVhcmluZzogYm9vbClcbiAgICovXG4gIG9uRW50ZXJpbmc6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBBIGA8VHJhbnNpdGlvbj5gIGNhbGxiYWNrIGZpcmVkIGltbWVkaWF0ZWx5IGFmdGVyIHRoZSAnZW50ZXInIG9yXG4gICAqICdhcHBlYXInIGNsYXNzZXMgYXJlICoqcmVtb3ZlZCoqIGFuZCB0aGUgYGRvbmVgIGNsYXNzIGlzIGFkZGVkIHRvIHRoZSBET00gbm9kZS5cbiAgICpcbiAgICogQHR5cGUgRnVuY3Rpb24obm9kZTogSHRtbEVsZW1lbnQsIGlzQXBwZWFyaW5nOiBib29sKVxuICAgKi9cbiAgb25FbnRlcmVkOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQSBgPFRyYW5zaXRpb24+YCBjYWxsYmFjayBmaXJlZCBpbW1lZGlhdGVseSBhZnRlciB0aGUgJ2V4aXQnIGNsYXNzIGlzXG4gICAqIGFwcGxpZWQuXG4gICAqXG4gICAqIEB0eXBlIEZ1bmN0aW9uKG5vZGU6IEh0bWxFbGVtZW50KVxuICAgKi9cbiAgb25FeGl0OiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQSBgPFRyYW5zaXRpb24+YCBjYWxsYmFjayBmaXJlZCBpbW1lZGlhdGVseSBhZnRlciB0aGUgJ2V4aXQtYWN0aXZlJyBpcyBhcHBsaWVkLlxuICAgKlxuICAgKiBAdHlwZSBGdW5jdGlvbihub2RlOiBIdG1sRWxlbWVudClcbiAgICovXG4gIG9uRXhpdGluZzogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIEEgYDxUcmFuc2l0aW9uPmAgY2FsbGJhY2sgZmlyZWQgaW1tZWRpYXRlbHkgYWZ0ZXIgdGhlICdleGl0JyBjbGFzc2VzXG4gICAqIGFyZSAqKnJlbW92ZWQqKiBhbmQgdGhlIGBleGl0LWRvbmVgIGNsYXNzIGlzIGFkZGVkIHRvIHRoZSBET00gbm9kZS5cbiAgICpcbiAgICogQHR5cGUgRnVuY3Rpb24obm9kZTogSHRtbEVsZW1lbnQpXG4gICAqL1xuICBvbkV4aXRlZDogUHJvcFR5cGVzLmZ1bmNcbn0pIDoge307XG52YXIgX2RlZmF1bHQgPSBDU1NUcmFuc2l0aW9uO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdOyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5nZXRDaGlsZE1hcHBpbmcgPSBnZXRDaGlsZE1hcHBpbmc7XG5leHBvcnRzLm1lcmdlQ2hpbGRNYXBwaW5ncyA9IG1lcmdlQ2hpbGRNYXBwaW5ncztcbmV4cG9ydHMuZ2V0SW5pdGlhbENoaWxkTWFwcGluZyA9IGdldEluaXRpYWxDaGlsZE1hcHBpbmc7XG5leHBvcnRzLmdldE5leHRDaGlsZE1hcHBpbmcgPSBnZXROZXh0Q2hpbGRNYXBwaW5nO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZShcInJlYWN0XCIpO1xuXG4vKipcbiAqIEdpdmVuIGB0aGlzLnByb3BzLmNoaWxkcmVuYCwgcmV0dXJuIGFuIG9iamVjdCBtYXBwaW5nIGtleSB0byBjaGlsZC5cbiAqXG4gKiBAcGFyYW0geyp9IGNoaWxkcmVuIGB0aGlzLnByb3BzLmNoaWxkcmVuYFxuICogQHJldHVybiB7b2JqZWN0fSBNYXBwaW5nIG9mIGtleSB0byBjaGlsZFxuICovXG5mdW5jdGlvbiBnZXRDaGlsZE1hcHBpbmcoY2hpbGRyZW4sIG1hcEZuKSB7XG4gIHZhciBtYXBwZXIgPSBmdW5jdGlvbiBtYXBwZXIoY2hpbGQpIHtcbiAgICByZXR1cm4gbWFwRm4gJiYgKDAsIF9yZWFjdC5pc1ZhbGlkRWxlbWVudCkoY2hpbGQpID8gbWFwRm4oY2hpbGQpIDogY2hpbGQ7XG4gIH07XG5cbiAgdmFyIHJlc3VsdCA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gIGlmIChjaGlsZHJlbikgX3JlYWN0LkNoaWxkcmVuLm1hcChjaGlsZHJlbiwgZnVuY3Rpb24gKGMpIHtcbiAgICByZXR1cm4gYztcbiAgfSkuZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAvLyBydW4gdGhlIG1hcCBmdW5jdGlvbiBoZXJlIGluc3RlYWQgc28gdGhhdCB0aGUga2V5IGlzIHRoZSBjb21wdXRlZCBvbmVcbiAgICByZXN1bHRbY2hpbGQua2V5XSA9IG1hcHBlcihjaGlsZCk7XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufVxuLyoqXG4gKiBXaGVuIHlvdSdyZSBhZGRpbmcgb3IgcmVtb3ZpbmcgY2hpbGRyZW4gc29tZSBtYXkgYmUgYWRkZWQgb3IgcmVtb3ZlZCBpbiB0aGVcbiAqIHNhbWUgcmVuZGVyIHBhc3MuIFdlIHdhbnQgdG8gc2hvdyAqYm90aCogc2luY2Ugd2Ugd2FudCB0byBzaW11bHRhbmVvdXNseVxuICogYW5pbWF0ZSBlbGVtZW50cyBpbiBhbmQgb3V0LiBUaGlzIGZ1bmN0aW9uIHRha2VzIGEgcHJldmlvdXMgc2V0IG9mIGtleXNcbiAqIGFuZCBhIG5ldyBzZXQgb2Yga2V5cyBhbmQgbWVyZ2VzIHRoZW0gd2l0aCBpdHMgYmVzdCBndWVzcyBvZiB0aGUgY29ycmVjdFxuICogb3JkZXJpbmcuIEluIHRoZSBmdXR1cmUgd2UgbWF5IGV4cG9zZSBzb21lIG9mIHRoZSB1dGlsaXRpZXMgaW5cbiAqIFJlYWN0TXVsdGlDaGlsZCB0byBtYWtlIHRoaXMgZWFzeSwgYnV0IGZvciBub3cgUmVhY3QgaXRzZWxmIGRvZXMgbm90XG4gKiBkaXJlY3RseSBoYXZlIHRoaXMgY29uY2VwdCBvZiB0aGUgdW5pb24gb2YgcHJldkNoaWxkcmVuIGFuZCBuZXh0Q2hpbGRyZW5cbiAqIHNvIHdlIGltcGxlbWVudCBpdCBoZXJlLlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBwcmV2IHByZXYgY2hpbGRyZW4gYXMgcmV0dXJuZWQgZnJvbVxuICogYFJlYWN0VHJhbnNpdGlvbkNoaWxkTWFwcGluZy5nZXRDaGlsZE1hcHBpbmcoKWAuXG4gKiBAcGFyYW0ge29iamVjdH0gbmV4dCBuZXh0IGNoaWxkcmVuIGFzIHJldHVybmVkIGZyb21cbiAqIGBSZWFjdFRyYW5zaXRpb25DaGlsZE1hcHBpbmcuZ2V0Q2hpbGRNYXBwaW5nKClgLlxuICogQHJldHVybiB7b2JqZWN0fSBhIGtleSBzZXQgdGhhdCBjb250YWlucyBhbGwga2V5cyBpbiBgcHJldmAgYW5kIGFsbCBrZXlzXG4gKiBpbiBgbmV4dGAgaW4gYSByZWFzb25hYmxlIG9yZGVyLlxuICovXG5cblxuZnVuY3Rpb24gbWVyZ2VDaGlsZE1hcHBpbmdzKHByZXYsIG5leHQpIHtcbiAgcHJldiA9IHByZXYgfHwge307XG4gIG5leHQgPSBuZXh0IHx8IHt9O1xuXG4gIGZ1bmN0aW9uIGdldFZhbHVlRm9yS2V5KGtleSkge1xuICAgIHJldHVybiBrZXkgaW4gbmV4dCA/IG5leHRba2V5XSA6IHByZXZba2V5XTtcbiAgfSAvLyBGb3IgZWFjaCBrZXkgb2YgYG5leHRgLCB0aGUgbGlzdCBvZiBrZXlzIHRvIGluc2VydCBiZWZvcmUgdGhhdCBrZXkgaW5cbiAgLy8gdGhlIGNvbWJpbmVkIGxpc3RcblxuXG4gIHZhciBuZXh0S2V5c1BlbmRpbmcgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICB2YXIgcGVuZGluZ0tleXMgPSBbXTtcblxuICBmb3IgKHZhciBwcmV2S2V5IGluIHByZXYpIHtcbiAgICBpZiAocHJldktleSBpbiBuZXh0KSB7XG4gICAgICBpZiAocGVuZGluZ0tleXMubGVuZ3RoKSB7XG4gICAgICAgIG5leHRLZXlzUGVuZGluZ1twcmV2S2V5XSA9IHBlbmRpbmdLZXlzO1xuICAgICAgICBwZW5kaW5nS2V5cyA9IFtdO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBwZW5kaW5nS2V5cy5wdXNoKHByZXZLZXkpO1xuICAgIH1cbiAgfVxuXG4gIHZhciBpO1xuICB2YXIgY2hpbGRNYXBwaW5nID0ge307XG5cbiAgZm9yICh2YXIgbmV4dEtleSBpbiBuZXh0KSB7XG4gICAgaWYgKG5leHRLZXlzUGVuZGluZ1tuZXh0S2V5XSkge1xuICAgICAgZm9yIChpID0gMDsgaSA8IG5leHRLZXlzUGVuZGluZ1tuZXh0S2V5XS5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgcGVuZGluZ05leHRLZXkgPSBuZXh0S2V5c1BlbmRpbmdbbmV4dEtleV1baV07XG4gICAgICAgIGNoaWxkTWFwcGluZ1tuZXh0S2V5c1BlbmRpbmdbbmV4dEtleV1baV1dID0gZ2V0VmFsdWVGb3JLZXkocGVuZGluZ05leHRLZXkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNoaWxkTWFwcGluZ1tuZXh0S2V5XSA9IGdldFZhbHVlRm9yS2V5KG5leHRLZXkpO1xuICB9IC8vIEZpbmFsbHksIGFkZCB0aGUga2V5cyB3aGljaCBkaWRuJ3QgYXBwZWFyIGJlZm9yZSBhbnkga2V5IGluIGBuZXh0YFxuXG5cbiAgZm9yIChpID0gMDsgaSA8IHBlbmRpbmdLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgY2hpbGRNYXBwaW5nW3BlbmRpbmdLZXlzW2ldXSA9IGdldFZhbHVlRm9yS2V5KHBlbmRpbmdLZXlzW2ldKTtcbiAgfVxuXG4gIHJldHVybiBjaGlsZE1hcHBpbmc7XG59XG5cbmZ1bmN0aW9uIGdldFByb3AoY2hpbGQsIHByb3AsIHByb3BzKSB7XG4gIHJldHVybiBwcm9wc1twcm9wXSAhPSBudWxsID8gcHJvcHNbcHJvcF0gOiBjaGlsZC5wcm9wc1twcm9wXTtcbn1cblxuZnVuY3Rpb24gZ2V0SW5pdGlhbENoaWxkTWFwcGluZyhwcm9wcywgb25FeGl0ZWQpIHtcbiAgcmV0dXJuIGdldENoaWxkTWFwcGluZyhwcm9wcy5jaGlsZHJlbiwgZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgcmV0dXJuICgwLCBfcmVhY3QuY2xvbmVFbGVtZW50KShjaGlsZCwge1xuICAgICAgb25FeGl0ZWQ6IG9uRXhpdGVkLmJpbmQobnVsbCwgY2hpbGQpLFxuICAgICAgaW46IHRydWUsXG4gICAgICBhcHBlYXI6IGdldFByb3AoY2hpbGQsICdhcHBlYXInLCBwcm9wcyksXG4gICAgICBlbnRlcjogZ2V0UHJvcChjaGlsZCwgJ2VudGVyJywgcHJvcHMpLFxuICAgICAgZXhpdDogZ2V0UHJvcChjaGlsZCwgJ2V4aXQnLCBwcm9wcylcbiAgICB9KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGdldE5leHRDaGlsZE1hcHBpbmcobmV4dFByb3BzLCBwcmV2Q2hpbGRNYXBwaW5nLCBvbkV4aXRlZCkge1xuICB2YXIgbmV4dENoaWxkTWFwcGluZyA9IGdldENoaWxkTWFwcGluZyhuZXh0UHJvcHMuY2hpbGRyZW4pO1xuICB2YXIgY2hpbGRyZW4gPSBtZXJnZUNoaWxkTWFwcGluZ3MocHJldkNoaWxkTWFwcGluZywgbmV4dENoaWxkTWFwcGluZyk7XG4gIE9iamVjdC5rZXlzKGNoaWxkcmVuKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICB2YXIgY2hpbGQgPSBjaGlsZHJlbltrZXldO1xuICAgIGlmICghKDAsIF9yZWFjdC5pc1ZhbGlkRWxlbWVudCkoY2hpbGQpKSByZXR1cm47XG4gICAgdmFyIGhhc1ByZXYgPSBrZXkgaW4gcHJldkNoaWxkTWFwcGluZztcbiAgICB2YXIgaGFzTmV4dCA9IGtleSBpbiBuZXh0Q2hpbGRNYXBwaW5nO1xuICAgIHZhciBwcmV2Q2hpbGQgPSBwcmV2Q2hpbGRNYXBwaW5nW2tleV07XG4gICAgdmFyIGlzTGVhdmluZyA9ICgwLCBfcmVhY3QuaXNWYWxpZEVsZW1lbnQpKHByZXZDaGlsZCkgJiYgIXByZXZDaGlsZC5wcm9wcy5pbjsgLy8gaXRlbSBpcyBuZXcgKGVudGVyaW5nKVxuXG4gICAgaWYgKGhhc05leHQgJiYgKCFoYXNQcmV2IHx8IGlzTGVhdmluZykpIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdlbnRlcmluZycsIGtleSlcbiAgICAgIGNoaWxkcmVuW2tleV0gPSAoMCwgX3JlYWN0LmNsb25lRWxlbWVudCkoY2hpbGQsIHtcbiAgICAgICAgb25FeGl0ZWQ6IG9uRXhpdGVkLmJpbmQobnVsbCwgY2hpbGQpLFxuICAgICAgICBpbjogdHJ1ZSxcbiAgICAgICAgZXhpdDogZ2V0UHJvcChjaGlsZCwgJ2V4aXQnLCBuZXh0UHJvcHMpLFxuICAgICAgICBlbnRlcjogZ2V0UHJvcChjaGlsZCwgJ2VudGVyJywgbmV4dFByb3BzKVxuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmICghaGFzTmV4dCAmJiBoYXNQcmV2ICYmICFpc0xlYXZpbmcpIHtcbiAgICAgIC8vIGl0ZW0gaXMgb2xkIChleGl0aW5nKVxuICAgICAgLy8gY29uc29sZS5sb2coJ2xlYXZpbmcnLCBrZXkpXG4gICAgICBjaGlsZHJlbltrZXldID0gKDAsIF9yZWFjdC5jbG9uZUVsZW1lbnQpKGNoaWxkLCB7XG4gICAgICAgIGluOiBmYWxzZVxuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChoYXNOZXh0ICYmIGhhc1ByZXYgJiYgKDAsIF9yZWFjdC5pc1ZhbGlkRWxlbWVudCkocHJldkNoaWxkKSkge1xuICAgICAgLy8gaXRlbSBoYXNuJ3QgY2hhbmdlZCB0cmFuc2l0aW9uIHN0YXRlc1xuICAgICAgLy8gY29weSBvdmVyIHRoZSBsYXN0IHRyYW5zaXRpb24gcHJvcHM7XG4gICAgICAvLyBjb25zb2xlLmxvZygndW5jaGFuZ2VkJywga2V5KVxuICAgICAgY2hpbGRyZW5ba2V5XSA9ICgwLCBfcmVhY3QuY2xvbmVFbGVtZW50KShjaGlsZCwge1xuICAgICAgICBvbkV4aXRlZDogb25FeGl0ZWQuYmluZChudWxsLCBjaGlsZCksXG4gICAgICAgIGluOiBwcmV2Q2hpbGQucHJvcHMuaW4sXG4gICAgICAgIGV4aXQ6IGdldFByb3AoY2hpbGQsICdleGl0JywgbmV4dFByb3BzKSxcbiAgICAgICAgZW50ZXI6IGdldFByb3AoY2hpbGQsICdlbnRlcicsIG5leHRQcm9wcylcbiAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBjaGlsZHJlbjtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIF9wcm9wVHlwZXMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpKTtcblxudmFyIF9yZWFjdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcblxudmFyIF9yZWFjdExpZmVjeWNsZXNDb21wYXQgPSByZXF1aXJlKFwicmVhY3QtbGlmZWN5Y2xlcy1jb21wYXRcIik7XG5cbnZhciBfQ2hpbGRNYXBwaW5nID0gcmVxdWlyZShcIi4vdXRpbHMvQ2hpbGRNYXBwaW5nXCIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKSB7IGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9OyB2YXIgdGFyZ2V0ID0ge307IHZhciBzb3VyY2VLZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTsgdmFyIGtleSwgaTsgZm9yIChpID0gMDsgaSA8IHNvdXJjZUtleXMubGVuZ3RoOyBpKyspIHsga2V5ID0gc291cmNlS2V5c1tpXTsgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIF9leHRlbmRzKCkgeyBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07IHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0c0xvb3NlKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcy5wcm90b3R5cGUpOyBzdWJDbGFzcy5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBzdWJDbGFzczsgc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHsgaWYgKHNlbGYgPT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIHNlbGY7IH1cblxudmFyIHZhbHVlcyA9IE9iamVjdC52YWx1ZXMgfHwgZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4gT2JqZWN0LmtleXMob2JqKS5tYXAoZnVuY3Rpb24gKGspIHtcbiAgICByZXR1cm4gb2JqW2tdO1xuICB9KTtcbn07XG5cbnZhciBkZWZhdWx0UHJvcHMgPSB7XG4gIGNvbXBvbmVudDogJ2RpdicsXG4gIGNoaWxkRmFjdG9yeTogZnVuY3Rpb24gY2hpbGRGYWN0b3J5KGNoaWxkKSB7XG4gICAgcmV0dXJuIGNoaWxkO1xuICB9XG4gIC8qKlxuICAgKiBUaGUgYDxUcmFuc2l0aW9uR3JvdXA+YCBjb21wb25lbnQgbWFuYWdlcyBhIHNldCBvZiB0cmFuc2l0aW9uIGNvbXBvbmVudHNcbiAgICogKGA8VHJhbnNpdGlvbj5gIGFuZCBgPENTU1RyYW5zaXRpb24+YCkgaW4gYSBsaXN0LiBMaWtlIHdpdGggdGhlIHRyYW5zaXRpb25cbiAgICogY29tcG9uZW50cywgYDxUcmFuc2l0aW9uR3JvdXA+YCBpcyBhIHN0YXRlIG1hY2hpbmUgZm9yIG1hbmFnaW5nIHRoZSBtb3VudGluZ1xuICAgKiBhbmQgdW5tb3VudGluZyBvZiBjb21wb25lbnRzIG92ZXIgdGltZS5cbiAgICpcbiAgICogQ29uc2lkZXIgdGhlIGV4YW1wbGUgYmVsb3cuIEFzIGl0ZW1zIGFyZSByZW1vdmVkIG9yIGFkZGVkIHRvIHRoZSBUb2RvTGlzdCB0aGVcbiAgICogYGluYCBwcm9wIGlzIHRvZ2dsZWQgYXV0b21hdGljYWxseSBieSB0aGUgYDxUcmFuc2l0aW9uR3JvdXA+YC5cbiAgICpcbiAgICogTm90ZSB0aGF0IGA8VHJhbnNpdGlvbkdyb3VwPmAgIGRvZXMgbm90IGRlZmluZSBhbnkgYW5pbWF0aW9uIGJlaGF2aW9yIVxuICAgKiBFeGFjdGx5IF9ob3dfIGEgbGlzdCBpdGVtIGFuaW1hdGVzIGlzIHVwIHRvIHRoZSBpbmRpdmlkdWFsIHRyYW5zaXRpb25cbiAgICogY29tcG9uZW50LiBUaGlzIG1lYW5zIHlvdSBjYW4gbWl4IGFuZCBtYXRjaCBhbmltYXRpb25zIGFjcm9zcyBkaWZmZXJlbnQgbGlzdFxuICAgKiBpdGVtcy5cbiAgICovXG5cbn07XG5cbnZhciBUcmFuc2l0aW9uR3JvdXAgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzTG9vc2UoVHJhbnNpdGlvbkdyb3VwLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBUcmFuc2l0aW9uR3JvdXAocHJvcHMsIGNvbnRleHQpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfdGhpcyA9IF9SZWFjdCRDb21wb25lbnQuY2FsbCh0aGlzLCBwcm9wcywgY29udGV4dCkgfHwgdGhpcztcblxuICAgIHZhciBoYW5kbGVFeGl0ZWQgPSBfdGhpcy5oYW5kbGVFeGl0ZWQuYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKSk7IC8vIEluaXRpYWwgY2hpbGRyZW4gc2hvdWxkIGFsbCBiZSBlbnRlcmluZywgZGVwZW5kZW50IG9uIGFwcGVhclxuXG5cbiAgICBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGhhbmRsZUV4aXRlZDogaGFuZGxlRXhpdGVkLFxuICAgICAgZmlyc3RSZW5kZXI6IHRydWVcbiAgICB9O1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBUcmFuc2l0aW9uR3JvdXAucHJvdG90eXBlO1xuXG4gIF9wcm90by5nZXRDaGlsZENvbnRleHQgPSBmdW5jdGlvbiBnZXRDaGlsZENvbnRleHQoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRyYW5zaXRpb25Hcm91cDoge1xuICAgICAgICBpc01vdW50aW5nOiAhdGhpcy5hcHBlYXJlZFxuICAgICAgfVxuICAgIH07XG4gIH07XG5cbiAgX3Byb3RvLmNvbXBvbmVudERpZE1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5hcHBlYXJlZCA9IHRydWU7XG4gICAgdGhpcy5tb3VudGVkID0gdHJ1ZTtcbiAgfTtcblxuICBfcHJvdG8uY29tcG9uZW50V2lsbFVubW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLm1vdW50ZWQgPSBmYWxzZTtcbiAgfTtcblxuICBUcmFuc2l0aW9uR3JvdXAuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzID0gZnVuY3Rpb24gZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzKG5leHRQcm9wcywgX3JlZikge1xuICAgIHZhciBwcmV2Q2hpbGRNYXBwaW5nID0gX3JlZi5jaGlsZHJlbixcbiAgICAgICAgaGFuZGxlRXhpdGVkID0gX3JlZi5oYW5kbGVFeGl0ZWQsXG4gICAgICAgIGZpcnN0UmVuZGVyID0gX3JlZi5maXJzdFJlbmRlcjtcbiAgICByZXR1cm4ge1xuICAgICAgY2hpbGRyZW46IGZpcnN0UmVuZGVyID8gKDAsIF9DaGlsZE1hcHBpbmcuZ2V0SW5pdGlhbENoaWxkTWFwcGluZykobmV4dFByb3BzLCBoYW5kbGVFeGl0ZWQpIDogKDAsIF9DaGlsZE1hcHBpbmcuZ2V0TmV4dENoaWxkTWFwcGluZykobmV4dFByb3BzLCBwcmV2Q2hpbGRNYXBwaW5nLCBoYW5kbGVFeGl0ZWQpLFxuICAgICAgZmlyc3RSZW5kZXI6IGZhbHNlXG4gICAgfTtcbiAgfTtcblxuICBfcHJvdG8uaGFuZGxlRXhpdGVkID0gZnVuY3Rpb24gaGFuZGxlRXhpdGVkKGNoaWxkLCBub2RlKSB7XG4gICAgdmFyIGN1cnJlbnRDaGlsZE1hcHBpbmcgPSAoMCwgX0NoaWxkTWFwcGluZy5nZXRDaGlsZE1hcHBpbmcpKHRoaXMucHJvcHMuY2hpbGRyZW4pO1xuICAgIGlmIChjaGlsZC5rZXkgaW4gY3VycmVudENoaWxkTWFwcGluZykgcmV0dXJuO1xuXG4gICAgaWYgKGNoaWxkLnByb3BzLm9uRXhpdGVkKSB7XG4gICAgICBjaGlsZC5wcm9wcy5vbkV4aXRlZChub2RlKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5tb3VudGVkKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKGZ1bmN0aW9uIChzdGF0ZSkge1xuICAgICAgICB2YXIgY2hpbGRyZW4gPSBfZXh0ZW5kcyh7fSwgc3RhdGUuY2hpbGRyZW4pO1xuXG4gICAgICAgIGRlbGV0ZSBjaGlsZHJlbltjaGlsZC5rZXldO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGNoaWxkcmVuOiBjaGlsZHJlblxuICAgICAgICB9O1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIF90aGlzJHByb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgQ29tcG9uZW50ID0gX3RoaXMkcHJvcHMuY29tcG9uZW50LFxuICAgICAgICBjaGlsZEZhY3RvcnkgPSBfdGhpcyRwcm9wcy5jaGlsZEZhY3RvcnksXG4gICAgICAgIHByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UoX3RoaXMkcHJvcHMsIFtcImNvbXBvbmVudFwiLCBcImNoaWxkRmFjdG9yeVwiXSk7XG5cbiAgICB2YXIgY2hpbGRyZW4gPSB2YWx1ZXModGhpcy5zdGF0ZS5jaGlsZHJlbikubWFwKGNoaWxkRmFjdG9yeSk7XG4gICAgZGVsZXRlIHByb3BzLmFwcGVhcjtcbiAgICBkZWxldGUgcHJvcHMuZW50ZXI7XG4gICAgZGVsZXRlIHByb3BzLmV4aXQ7XG5cbiAgICBpZiAoQ29tcG9uZW50ID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gY2hpbGRyZW47XG4gICAgfVxuXG4gICAgcmV0dXJuIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoQ29tcG9uZW50LCBwcm9wcywgY2hpbGRyZW4pO1xuICB9O1xuXG4gIHJldHVybiBUcmFuc2l0aW9uR3JvdXA7XG59KF9yZWFjdC5kZWZhdWx0LkNvbXBvbmVudCk7XG5cblRyYW5zaXRpb25Hcm91cC5jaGlsZENvbnRleHRUeXBlcyA9IHtcbiAgdHJhbnNpdGlvbkdyb3VwOiBfcHJvcFR5cGVzLmRlZmF1bHQub2JqZWN0LmlzUmVxdWlyZWRcbn07XG5UcmFuc2l0aW9uR3JvdXAucHJvcFR5cGVzID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8ge1xuICAvKipcbiAgICogYDxUcmFuc2l0aW9uR3JvdXA+YCByZW5kZXJzIGEgYDxkaXY+YCBieSBkZWZhdWx0LiBZb3UgY2FuIGNoYW5nZSB0aGlzXG4gICAqIGJlaGF2aW9yIGJ5IHByb3ZpZGluZyBhIGBjb21wb25lbnRgIHByb3AuXG4gICAqIElmIHlvdSB1c2UgUmVhY3QgdjE2KyBhbmQgd291bGQgbGlrZSB0byBhdm9pZCBhIHdyYXBwaW5nIGA8ZGl2PmAgZWxlbWVudFxuICAgKiB5b3UgY2FuIHBhc3MgaW4gYGNvbXBvbmVudD17bnVsbH1gLiBUaGlzIGlzIHVzZWZ1bCBpZiB0aGUgd3JhcHBpbmcgZGl2XG4gICAqIGJvcmtzIHlvdXIgY3NzIHN0eWxlcy5cbiAgICovXG4gIGNvbXBvbmVudDogX3Byb3BUeXBlcy5kZWZhdWx0LmFueSxcblxuICAvKipcbiAgICogQSBzZXQgb2YgYDxUcmFuc2l0aW9uPmAgY29tcG9uZW50cywgdGhhdCBhcmUgdG9nZ2xlZCBgaW5gIGFuZCBvdXQgYXMgdGhleVxuICAgKiBsZWF2ZS4gdGhlIGA8VHJhbnNpdGlvbkdyb3VwPmAgd2lsbCBpbmplY3Qgc3BlY2lmaWMgdHJhbnNpdGlvbiBwcm9wcywgc29cbiAgICogcmVtZW1iZXIgdG8gc3ByZWFkIHRoZW0gdGhyb3VnaCBpZiB5b3UgYXJlIHdyYXBwaW5nIHRoZSBgPFRyYW5zaXRpb24+YCBhc1xuICAgKiB3aXRoIG91ciBgPEZhZGU+YCBleGFtcGxlLlxuICAgKlxuICAgKiBXaGlsZSB0aGlzIGNvbXBvbmVudCBpcyBtZWFudCBmb3IgbXVsdGlwbGUgYFRyYW5zaXRpb25gIG9yIGBDU1NUcmFuc2l0aW9uYFxuICAgKiBjaGlsZHJlbiwgc29tZXRpbWVzIHlvdSBtYXkgd2FudCB0byBoYXZlIGEgc2luZ2xlIHRyYW5zaXRpb24gY2hpbGQgd2l0aFxuICAgKiBjb250ZW50IHRoYXQgeW91IHdhbnQgdG8gYmUgdHJhbnNpdGlvbmVkIG91dCBhbmQgaW4gd2hlbiB5b3UgY2hhbmdlIGl0XG4gICAqIChlLmcuIHJvdXRlcywgaW1hZ2VzIGV0Yy4pIEluIHRoYXQgY2FzZSB5b3UgY2FuIGNoYW5nZSB0aGUgYGtleWAgcHJvcCBvZlxuICAgKiB0aGUgdHJhbnNpdGlvbiBjaGlsZCBhcyB5b3UgY2hhbmdlIGl0cyBjb250ZW50LCB0aGlzIHdpbGwgY2F1c2VcbiAgICogYFRyYW5zaXRpb25Hcm91cGAgdG8gdHJhbnNpdGlvbiB0aGUgY2hpbGQgb3V0IGFuZCBiYWNrIGluLlxuICAgKi9cbiAgY2hpbGRyZW46IF9wcm9wVHlwZXMuZGVmYXVsdC5ub2RlLFxuXG4gIC8qKlxuICAgKiBBIGNvbnZlbmllbmNlIHByb3AgdGhhdCBlbmFibGVzIG9yIGRpc2FibGVzIGFwcGVhciBhbmltYXRpb25zXG4gICAqIGZvciBhbGwgY2hpbGRyZW4uIE5vdGUgdGhhdCBzcGVjaWZ5aW5nIHRoaXMgd2lsbCBvdmVycmlkZSBhbnkgZGVmYXVsdHMgc2V0XG4gICAqIG9uIGluZGl2aWR1YWwgY2hpbGRyZW4gVHJhbnNpdGlvbnMuXG4gICAqL1xuICBhcHBlYXI6IF9wcm9wVHlwZXMuZGVmYXVsdC5ib29sLFxuXG4gIC8qKlxuICAgKiBBIGNvbnZlbmllbmNlIHByb3AgdGhhdCBlbmFibGVzIG9yIGRpc2FibGVzIGVudGVyIGFuaW1hdGlvbnNcbiAgICogZm9yIGFsbCBjaGlsZHJlbi4gTm90ZSB0aGF0IHNwZWNpZnlpbmcgdGhpcyB3aWxsIG92ZXJyaWRlIGFueSBkZWZhdWx0cyBzZXRcbiAgICogb24gaW5kaXZpZHVhbCBjaGlsZHJlbiBUcmFuc2l0aW9ucy5cbiAgICovXG4gIGVudGVyOiBfcHJvcFR5cGVzLmRlZmF1bHQuYm9vbCxcblxuICAvKipcbiAgICogQSBjb252ZW5pZW5jZSBwcm9wIHRoYXQgZW5hYmxlcyBvciBkaXNhYmxlcyBleGl0IGFuaW1hdGlvbnNcbiAgICogZm9yIGFsbCBjaGlsZHJlbi4gTm90ZSB0aGF0IHNwZWNpZnlpbmcgdGhpcyB3aWxsIG92ZXJyaWRlIGFueSBkZWZhdWx0cyBzZXRcbiAgICogb24gaW5kaXZpZHVhbCBjaGlsZHJlbiBUcmFuc2l0aW9ucy5cbiAgICovXG4gIGV4aXQ6IF9wcm9wVHlwZXMuZGVmYXVsdC5ib29sLFxuXG4gIC8qKlxuICAgKiBZb3UgbWF5IG5lZWQgdG8gYXBwbHkgcmVhY3RpdmUgdXBkYXRlcyB0byBhIGNoaWxkIGFzIGl0IGlzIGV4aXRpbmcuXG4gICAqIFRoaXMgaXMgZ2VuZXJhbGx5IGRvbmUgYnkgdXNpbmcgYGNsb25lRWxlbWVudGAgaG93ZXZlciBpbiB0aGUgY2FzZSBvZiBhbiBleGl0aW5nXG4gICAqIGNoaWxkIHRoZSBlbGVtZW50IGhhcyBhbHJlYWR5IGJlZW4gcmVtb3ZlZCBhbmQgbm90IGFjY2Vzc2libGUgdG8gdGhlIGNvbnN1bWVyLlxuICAgKlxuICAgKiBJZiB5b3UgZG8gbmVlZCB0byB1cGRhdGUgYSBjaGlsZCBhcyBpdCBsZWF2ZXMgeW91IGNhbiBwcm92aWRlIGEgYGNoaWxkRmFjdG9yeWBcbiAgICogdG8gd3JhcCBldmVyeSBjaGlsZCwgZXZlbiB0aGUgb25lcyB0aGF0IGFyZSBsZWF2aW5nLlxuICAgKlxuICAgKiBAdHlwZSBGdW5jdGlvbihjaGlsZDogUmVhY3RFbGVtZW50KSAtPiBSZWFjdEVsZW1lbnRcbiAgICovXG4gIGNoaWxkRmFjdG9yeTogX3Byb3BUeXBlcy5kZWZhdWx0LmZ1bmNcbn0gOiB7fTtcblRyYW5zaXRpb25Hcm91cC5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHM7XG5cbnZhciBfZGVmYXVsdCA9ICgwLCBfcmVhY3RMaWZlY3ljbGVzQ29tcGF0LnBvbHlmaWxsKShUcmFuc2l0aW9uR3JvdXApO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1tcImRlZmF1bHRcIl07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBfcHJvcFR5cGVzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicHJvcC10eXBlc1wiKSk7XG5cbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbnZhciBfcmVhY3REb20gPSByZXF1aXJlKFwicmVhY3QtZG9tXCIpO1xuXG52YXIgX1RyYW5zaXRpb25Hcm91cCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vVHJhbnNpdGlvbkdyb3VwXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCkgeyBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTsgdmFyIHRhcmdldCA9IHt9OyB2YXIgc291cmNlS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7IHZhciBrZXksIGk7IGZvciAoaSA9IDA7IGkgPCBzb3VyY2VLZXlzLmxlbmd0aDsgaSsrKSB7IGtleSA9IHNvdXJjZUtleXNbaV07IGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHNMb29zZShzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MucHJvdG90eXBlKTsgc3ViQ2xhc3MucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gc3ViQ2xhc3M7IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxuLyoqXG4gKiBUaGUgYDxSZXBsYWNlVHJhbnNpdGlvbj5gIGNvbXBvbmVudCBpcyBhIHNwZWNpYWxpemVkIGBUcmFuc2l0aW9uYCBjb21wb25lbnRcbiAqIHRoYXQgYW5pbWF0ZXMgYmV0d2VlbiB0d28gY2hpbGRyZW4uXG4gKlxuICogYGBganN4XG4gKiA8UmVwbGFjZVRyYW5zaXRpb24gaW4+XG4gKiAgIDxGYWRlPjxkaXY+SSBhcHBlYXIgZmlyc3Q8L2Rpdj48L0ZhZGU+XG4gKiAgIDxGYWRlPjxkaXY+SSByZXBsYWNlIHRoZSBhYm92ZTwvZGl2PjwvRmFkZT5cbiAqIDwvUmVwbGFjZVRyYW5zaXRpb24+XG4gKiBgYGBcbiAqL1xudmFyIFJlcGxhY2VUcmFuc2l0aW9uID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0c0xvb3NlKFJlcGxhY2VUcmFuc2l0aW9uLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBSZXBsYWNlVHJhbnNpdGlvbigpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgX2FyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBfYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICBfdGhpcyA9IF9SZWFjdCRDb21wb25lbnQuY2FsbC5hcHBseShfUmVhY3QkQ29tcG9uZW50LCBbdGhpc10uY29uY2F0KF9hcmdzKSkgfHwgdGhpcztcblxuICAgIF90aGlzLmhhbmRsZUVudGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4yKSwgX2tleTIgPSAwOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICAgIGFyZ3NbX2tleTJdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIF90aGlzLmhhbmRsZUxpZmVjeWNsZSgnb25FbnRlcicsIDAsIGFyZ3MpO1xuICAgIH07XG5cbiAgICBfdGhpcy5oYW5kbGVFbnRlcmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGZvciAodmFyIF9sZW4zID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuMyksIF9rZXkzID0gMDsgX2tleTMgPCBfbGVuMzsgX2tleTMrKykge1xuICAgICAgICBhcmdzW19rZXkzXSA9IGFyZ3VtZW50c1tfa2V5M107XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBfdGhpcy5oYW5kbGVMaWZlY3ljbGUoJ29uRW50ZXJpbmcnLCAwLCBhcmdzKTtcbiAgICB9O1xuXG4gICAgX3RoaXMuaGFuZGxlRW50ZXJlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGZvciAodmFyIF9sZW40ID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuNCksIF9rZXk0ID0gMDsgX2tleTQgPCBfbGVuNDsgX2tleTQrKykge1xuICAgICAgICBhcmdzW19rZXk0XSA9IGFyZ3VtZW50c1tfa2V5NF07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBfdGhpcy5oYW5kbGVMaWZlY3ljbGUoJ29uRW50ZXJlZCcsIDAsIGFyZ3MpO1xuICAgIH07XG5cbiAgICBfdGhpcy5oYW5kbGVFeGl0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgZm9yICh2YXIgX2xlbjUgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW41KSwgX2tleTUgPSAwOyBfa2V5NSA8IF9sZW41OyBfa2V5NSsrKSB7XG4gICAgICAgIGFyZ3NbX2tleTVdID0gYXJndW1lbnRzW19rZXk1XTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIF90aGlzLmhhbmRsZUxpZmVjeWNsZSgnb25FeGl0JywgMSwgYXJncyk7XG4gICAgfTtcblxuICAgIF90aGlzLmhhbmRsZUV4aXRpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBmb3IgKHZhciBfbGVuNiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbjYpLCBfa2V5NiA9IDA7IF9rZXk2IDwgX2xlbjY7IF9rZXk2KyspIHtcbiAgICAgICAgYXJnc1tfa2V5Nl0gPSBhcmd1bWVudHNbX2tleTZdO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gX3RoaXMuaGFuZGxlTGlmZWN5Y2xlKCdvbkV4aXRpbmcnLCAxLCBhcmdzKTtcbiAgICB9O1xuXG4gICAgX3RoaXMuaGFuZGxlRXhpdGVkID0gZnVuY3Rpb24gKCkge1xuICAgICAgZm9yICh2YXIgX2xlbjcgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW43KSwgX2tleTcgPSAwOyBfa2V5NyA8IF9sZW43OyBfa2V5NysrKSB7XG4gICAgICAgIGFyZ3NbX2tleTddID0gYXJndW1lbnRzW19rZXk3XTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIF90aGlzLmhhbmRsZUxpZmVjeWNsZSgnb25FeGl0ZWQnLCAxLCBhcmdzKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IFJlcGxhY2VUcmFuc2l0aW9uLnByb3RvdHlwZTtcblxuICBfcHJvdG8uaGFuZGxlTGlmZWN5Y2xlID0gZnVuY3Rpb24gaGFuZGxlTGlmZWN5Y2xlKGhhbmRsZXIsIGlkeCwgb3JpZ2luYWxBcmdzKSB7XG4gICAgdmFyIF9jaGlsZCRwcm9wcztcblxuICAgIHZhciBjaGlsZHJlbiA9IHRoaXMucHJvcHMuY2hpbGRyZW47XG5cbiAgICB2YXIgY2hpbGQgPSBfcmVhY3QuZGVmYXVsdC5DaGlsZHJlbi50b0FycmF5KGNoaWxkcmVuKVtpZHhdO1xuXG4gICAgaWYgKGNoaWxkLnByb3BzW2hhbmRsZXJdKSAoX2NoaWxkJHByb3BzID0gY2hpbGQucHJvcHMpW2hhbmRsZXJdLmFwcGx5KF9jaGlsZCRwcm9wcywgb3JpZ2luYWxBcmdzKTtcbiAgICBpZiAodGhpcy5wcm9wc1toYW5kbGVyXSkgdGhpcy5wcm9wc1toYW5kbGVyXSgoMCwgX3JlYWN0RG9tLmZpbmRET01Ob2RlKSh0aGlzKSk7XG4gIH07XG5cbiAgX3Byb3RvLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgX3RoaXMkcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICBjaGlsZHJlbiA9IF90aGlzJHByb3BzLmNoaWxkcmVuLFxuICAgICAgICBpblByb3AgPSBfdGhpcyRwcm9wcy5pbixcbiAgICAgICAgcHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShfdGhpcyRwcm9wcywgW1wiY2hpbGRyZW5cIiwgXCJpblwiXSk7XG5cbiAgICB2YXIgX1JlYWN0JENoaWxkcmVuJHRvQXJyID0gX3JlYWN0LmRlZmF1bHQuQ2hpbGRyZW4udG9BcnJheShjaGlsZHJlbiksXG4gICAgICAgIGZpcnN0ID0gX1JlYWN0JENoaWxkcmVuJHRvQXJyWzBdLFxuICAgICAgICBzZWNvbmQgPSBfUmVhY3QkQ2hpbGRyZW4kdG9BcnJbMV07XG5cbiAgICBkZWxldGUgcHJvcHMub25FbnRlcjtcbiAgICBkZWxldGUgcHJvcHMub25FbnRlcmluZztcbiAgICBkZWxldGUgcHJvcHMub25FbnRlcmVkO1xuICAgIGRlbGV0ZSBwcm9wcy5vbkV4aXQ7XG4gICAgZGVsZXRlIHByb3BzLm9uRXhpdGluZztcbiAgICBkZWxldGUgcHJvcHMub25FeGl0ZWQ7XG4gICAgcmV0dXJuIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX1RyYW5zaXRpb25Hcm91cC5kZWZhdWx0LCBwcm9wcywgaW5Qcm9wID8gX3JlYWN0LmRlZmF1bHQuY2xvbmVFbGVtZW50KGZpcnN0LCB7XG4gICAgICBrZXk6ICdmaXJzdCcsXG4gICAgICBvbkVudGVyOiB0aGlzLmhhbmRsZUVudGVyLFxuICAgICAgb25FbnRlcmluZzogdGhpcy5oYW5kbGVFbnRlcmluZyxcbiAgICAgIG9uRW50ZXJlZDogdGhpcy5oYW5kbGVFbnRlcmVkXG4gICAgfSkgOiBfcmVhY3QuZGVmYXVsdC5jbG9uZUVsZW1lbnQoc2Vjb25kLCB7XG4gICAgICBrZXk6ICdzZWNvbmQnLFxuICAgICAgb25FbnRlcjogdGhpcy5oYW5kbGVFeGl0LFxuICAgICAgb25FbnRlcmluZzogdGhpcy5oYW5kbGVFeGl0aW5nLFxuICAgICAgb25FbnRlcmVkOiB0aGlzLmhhbmRsZUV4aXRlZFxuICAgIH0pKTtcbiAgfTtcblxuICByZXR1cm4gUmVwbGFjZVRyYW5zaXRpb247XG59KF9yZWFjdC5kZWZhdWx0LkNvbXBvbmVudCk7XG5cblJlcGxhY2VUcmFuc2l0aW9uLnByb3BUeXBlcyA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IHtcbiAgaW46IF9wcm9wVHlwZXMuZGVmYXVsdC5ib29sLmlzUmVxdWlyZWQsXG4gIGNoaWxkcmVuOiBmdW5jdGlvbiBjaGlsZHJlbihwcm9wcywgcHJvcE5hbWUpIHtcbiAgICBpZiAoX3JlYWN0LmRlZmF1bHQuQ2hpbGRyZW4uY291bnQocHJvcHNbcHJvcE5hbWVdKSAhPT0gMikgcmV0dXJuIG5ldyBFcnJvcihcIlxcXCJcIiArIHByb3BOYW1lICsgXCJcXFwiIG11c3QgYmUgZXhhY3RseSB0d28gdHJhbnNpdGlvbiBjb21wb25lbnRzLlwiKTtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufSA6IHt9O1xudmFyIF9kZWZhdWx0ID0gUmVwbGFjZVRyYW5zaXRpb247XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1tcImRlZmF1bHRcIl07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfQ1NTVHJhbnNpdGlvbiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vQ1NTVHJhbnNpdGlvblwiKSk7XG5cbnZhciBfUmVwbGFjZVRyYW5zaXRpb24gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL1JlcGxhY2VUcmFuc2l0aW9uXCIpKTtcblxudmFyIF9UcmFuc2l0aW9uR3JvdXAgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL1RyYW5zaXRpb25Hcm91cFwiKSk7XG5cbnZhciBfVHJhbnNpdGlvbiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vVHJhbnNpdGlvblwiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBUcmFuc2l0aW9uOiBfVHJhbnNpdGlvbi5kZWZhdWx0LFxuICBUcmFuc2l0aW9uR3JvdXA6IF9UcmFuc2l0aW9uR3JvdXAuZGVmYXVsdCxcbiAgUmVwbGFjZVRyYW5zaXRpb246IF9SZXBsYWNlVHJhbnNpdGlvbi5kZWZhdWx0LFxuICBDU1NUcmFuc2l0aW9uOiBfQ1NTVHJhbnNpdGlvbi5kZWZhdWx0XG59OyIsImltcG9ydCBSZWFjdCwgeyBIVE1MQXR0cmlidXRlcyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IENTU1RyYW5zaXRpb24gfSBmcm9tICdyZWFjdC10cmFuc2l0aW9uLWdyb3VwJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgQ1NTVHlwZSB9IGZyb20gJy4uLy4uL3R5cGVzJztcblxuaW50ZXJmYWNlIFByb3BzIGV4dGVuZHMgSFRNTEF0dHJpYnV0ZXM8SFRNTERpdkVsZW1lbnQ+IHtcbiAgc2hvdzogYm9vbGVhbjtcbiAgaGVhZGVyOiBhbnk7XG4gIGNzcz86IENTU1R5cGU7XG59XG5cbmNvbnN0IFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICAmID4gLl9fY29udGVudCB7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogdG9wO1xuICAgIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm0sIG1heC1oZWlnaHQ7XG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtLCBtYXgtaGVpZ2h0O1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDMwMG1zO1xuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBtYXgtaGVpZ2h0OiBhdXRvO1xuXG4gICAgJi5jb2xsYXBzZWQge1xuICAgICAgbWF4LWhlaWdodDogMDtcbiAgICAgIHRyYW5zZm9ybTogc2NhbGVZKDApO1xuICAgIH1cblxuICAgICYuY29sbGFwc2luZyB7XG4gICAgICBtYXgtaGVpZ2h0OiAxNXJlbTtcbiAgICAgIHRyYW5zZm9ybTogc2NhbGVZKDEpO1xuICAgIH1cblxuICAgICYuZXhwYW5kZWQge1xuICAgICAgbWF4LWhlaWdodDogMTVyZW07XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlWSgxKTtcbiAgICB9XG5cbiAgICAmLmV4cGFuZGluZyB7XG4gICAgICBtYXgtaGVpZ2h0OiAwcHg7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlWSgwKTtcbiAgICB9XG4gIH1cblxuICAkeyh7IGNzcyB9OiB7IGNzcz86IENTU1R5cGUgfSkgPT4gY3NzIHx8IHt9fVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWNjb3JkaW9uKHsgaGVhZGVyLCBzaG93LCBjaGlsZHJlbiwgLi4ucmVzdCB9OiBQcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxXcmFwcGVyIHsuLi5yZXN0fT5cbiAgICAgIHtoZWFkZXJ9XG4gICAgICA8Q1NTVHJhbnNpdGlvblxuICAgICAgICBjbGFzc05hbWVzPXt7XG4gICAgICAgICAgZW50ZXI6ICdjb2xsYXBzZWQnLFxuICAgICAgICAgIGVudGVyQWN0aXZlOiAnY29sbGFwc2luZycsXG4gICAgICAgICAgZXhpdDogJ2V4cGFuZGVkJyxcbiAgICAgICAgICBleGl0QWN0aXZlOiAnZXhwYW5kaW5nJyxcbiAgICAgICAgfX1cbiAgICAgICAgdGltZW91dD17MzAwfVxuICAgICAgICBpbj17c2hvd31cbiAgICAgICAgdW5tb3VudE9uRXhpdFxuICAgICAgPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIl9fY29udGVudFwiPlxuICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0NTU1RyYW5zaXRpb24+XG4gICAgPC9XcmFwcGVyPlxuICApO1xufVxuIiwiXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzZXRBbGlnbih7IGFsaWduIH06IHsgYWxpZ24/OiAnbGVmdCcgfCAncmlnaHQnIHwgJ2NlbnRlcicgfSkge1xuICBzd2l0Y2ggKGFsaWduKSB7XG4gICAgY2FzZSAnbGVmdCc6XG4gICAgICByZXR1cm4gJ2ZsZXgtc3RhcnQnO1xuICAgIGNhc2UgJ3JpZ2h0JzpcbiAgICAgIHJldHVybiAnZmxleC1lbmQnO1xuICAgIGNhc2UgJ2NlbnRlcic6XG4gICAgICByZXR1cm4gJ2NlbnRlcic7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiAnc3BhY2UtZXZlbmx5JztcbiAgfVxufVxuIiwiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQsIEhUTUxBdHRyaWJ1dGVzIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHRyYW5zcGFyZW50aXplIGZyb20gJ3BvbGlzaGVkL2xpYi9jb2xvci90cmFuc3BhcmVudGl6ZSc7XG5pbXBvcnQgc3R5bGVkLCB7IGNzcyB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBmaW5kQ29sb3JJbnZlcnQgZnJvbSAnLi4vLi4vdXRpbHMvZmluZENvbG9ySW52ZXJ0JztcbmltcG9ydCBoYW1idWdlciBmcm9tICcuLi8uLi91dGlscy9oYW1idWdlcic7XG5pbXBvcnQgc2V0QWxpZ24gZnJvbSAnLi4vLi4vdXRpbHMvc2V0QWxpZ24nO1xuaW1wb3J0IHsgbWVkaWFUYWJsZXQsIG1lZGlhTW9iaWxlIH0gZnJvbSAnLi4vLi4vdXRpbHMvbWVkaWEnO1xuaW1wb3J0IHsgQ29sb3JUeXBlLCBBbGlnblR5cGUsIENTU1R5cGUsIFRoZW1lVHlwZSB9IGZyb20gJy4uLy4uL3R5cGVzJztcblxuZnVuY3Rpb24gc2V0Q29sb3IoXG4gIHsgY29sb3IsIHRoZW1lLCBiYWNrZHJvcCB9OiB7IGNvbG9yPzogQ29sb3JUeXBlLCB0aGVtZTogVGhlbWVUeXBlLCBiYWNrZHJvcD86IGJvb2xlYW4gfSxcbikge1xuICBjb25zdCBiYWNrZ3JvdW5kQ29sb3IgPSBjb2xvciA/IHRoZW1lW2NvbG9yXSA6ICd0cmFuc3BhcmVudCc7XG4gIGNvbnN0IHRleHRDb2xvciA9XG4gICAgZmluZENvbG9ySW52ZXJ0KHRoZW1lLCBiYWNrZ3JvdW5kQ29sb3IgPT09ICd0cmFuc3BhcmVudCcgPyB0aGVtZS5iYWNrZ3JvdW5kIDogYmFja2dyb3VuZENvbG9yKTtcblxuICBpZiAoYmFja2Ryb3ApIHtcbiAgICBjb25zdCBiYWNrQ29sb3IgPVxuICAgICAgdHJhbnNwYXJlbnRpemUoMC4yLCAoYmFja2dyb3VuZENvbG9yID09PSAndHJhbnNwYXJlbnQnID8gdGhlbWUud2hpdGUgOiBiYWNrZ3JvdW5kQ29sb3IpKTtcbiAgICBjb25zdCB1YSA9IG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKTtcbiAgICBpZiAodWEuaW5kZXhPZignc2FmYXJpJykgPiAtMSAmJiB1YS5pbmRleE9mKCdjaHJvbWUnKSA9PT0gLTEpIHtcbiAgICAgIHJldHVybiBjc3NgYmFja2dyb3VuZC1jb2xvcjogJHtiYWNrQ29sb3J9OyBjb2xvcjogJHt0ZXh0Q29sb3J9OyBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoOHB4KTtgO1xuICAgIH1cblxuICAgIHJldHVybiBjc3NgXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke2JhY2tDb2xvcn07XG4gICAgICBjb2xvcjogJHt0ZXh0Q29sb3J9O1xuICAgIGA7XG4gIH1cblxuICByZXR1cm4gY3NzYGJhY2tncm91bmQtY29sb3I6ICR7YmFja2dyb3VuZENvbG9yfTsgY29sb3I6ICR7dGV4dENvbG9yfTtgO1xufVxuXG5pbnRlcmZhY2UgTmF2UHJvcHMge1xuICBjb2xvcj86IENvbG9yVHlwZTtcbiAgYmFja2Ryb3A/OiBib29sZWFuO1xuICBmaXhlZD86IGJvb2xlYW47XG4gIHN0aWNreT86IGJvb2xlYW47XG4gIGZsdWlkPzogYm9vbGVhbjtcbiAgc2hvdz86IGJvb2xlYW47XG4gIHN0eWxlPzogYW55O1xuICBhbGlnbj86IEFsaWduVHlwZTtcbiAgcm9sZTogc3RyaW5nO1xuICBjc3M/OiBDU1NUeXBlO1xufVxuXG5jb25zdCBOYXZCYXIgPSBzdHlsZWQuaGVhZGVyPE5hdlByb3BzPmBcbiAgcG9zaXRpb246ICR7XG4gICAgKHsgZml4ZWQsIHN0aWNreSB9KSA9PiAoIShzdGlja3kgfHwgZml4ZWQpID8gJ3JlbGF0aXZlJyA6IChmaXhlZCA/ICdmaXhlZCcgOiAnc3RpY2t5JykpXG4gIH07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHRvcDogLTFweDtcbiAgbWluLWhlaWdodDogMy4yNXJlbTtcbiAgd2lkdGg6IDEwMCU7XG4gIHotaW5kZXg6IDMwO1xuXG4gIHBhZGRpbmc6ICR7KHsgZmx1aWQgfTogTmF2UHJvcHMpID0+IGZsdWlkID8gJzAgMC43NXJlbScgOiAnMCA1JSd9O1xuXG4gICYgPiBuYXYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmbGV4OiAxIDAgYXV0bztcbiAgfVxuXG4gICR7c2V0Q29sb3J9XG5cbiAgYSB7IGNvbG9yOiBpbmhlcml0OyB9XG5cbiAgJHttZWRpYVRhYmxldH0ge1xuICAgIHBhZGRpbmc6ICR7KHsgZmx1aWQgfTogTmF2UHJvcHMpID0+IGZsdWlkID8gJzAgMC41cmVtJyA6ICcwIDMlJ307XG4gIH1cbiAgJHsoeyBjc3MgfSkgPT4gY3NzIHx8IHt9fVxuYDtcblxuY29uc3QgQnVyZ2VyID0gc3R5bGVkLmJ1dHRvbmBcbiAgJHtoYW1idWdlcignMy4yNXJlbScpfVxuICBkaXNwbGF5OiBub25lO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6IGluaGVyaXQ7XG5cbiAgb3V0bGluZTogbm9uZTtcblxuICAmOmhvdmVye1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgLjA1KTtcbiAgfVxuXG4gICR7bWVkaWFNb2JpbGV9IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuYDtcblxuaW50ZXJmYWNlIENvbnRlbnRQcm9wcyB7XG4gIGNvbG9yPzogQ29sb3JUeXBlO1xuICBzaG93PzogYm9vbGVhbjtcbiAgYWxpZ24/OiAnbGVmdCcgfCAncmlnaHQnO1xufVxuXG5jb25zdCBOYXZDb250ZW50ID0gc3R5bGVkLmRpdjxDb250ZW50UHJvcHM+YFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtYmFzaXM6IGF1dG87XG4gIGZsZXgtZ3JvdzogMTtcbiAgaGVpZ2h0OiAxMDAlO1xuXG4gICYgPiB1bCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgZmxleC1ncm93OiAxO1xuICAgIGZsZXgtYmFzaXM6IDEwMCU7XG4gICAgaGVpZ2h0OiBpbmhlcml0O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiAke3NldEFsaWdufTtcblxuICAgIGxpIHtcbiAgICAgIHBhZGRpbmc6IDAuODVyZW07XG4gICAgfVxuICB9XG5cbiAgJiA+IGRpdiwgJiA+IHNwYW4sICYgPiBmb3JtIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgICR7KHsgY29sb3IgfSkgPT4gKGNvbG9yID8gYGNvbG9yOiAke2NvbG9yfTtgIDogJycpfVxuICB9XG5cbiAgJHttZWRpYU1vYmlsZX0ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgaGVpZ2h0OiBhdXRvO1xuXG4gICAgcGFkZGluZy1ib3R0b206IDAuNXJlbTtcblxuICAgICY6bm90KC5hY3RpdmUpIHtcbiAgICAgIGRpc3BsYXk6bm9uZTtcbiAgICB9XG5cbiAgICAmID4gdWwge1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBmbGV4LWJhc2lzOiBhdXRvO1xuICAgICAgbGkge1xuICAgICAgICBwYWRkaW5nOiAuNXJlbSAwO1xuICAgICAgfVxuICAgIH1cblxuICAgICYgPiBkaXYsICYgPiBzcGFuLCAmID4gZm9ybSB7XG4gICAgICBwYWRkaW5nOiAuNXJlbSAwO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICB9XG5gO1xuXG5cbmludGVyZmFjZSBQcm9wcyBleHRlbmRzIEhUTUxBdHRyaWJ1dGVzPEhUTUxEaXZFbGVtZW50PiB7XG4gIC8qKiBiYWNrZ3JvdW5k6ImyICovXG4gIGNvbG9yPzogQ29sb3JUeXBlO1xuICAvKiog44Ot44K044Gu44Kk44Oh44O844K444CB44OX44Ot44K444Kn44Kv44OI5ZCN44Gq44GpICovXG4gIGJyYW5kPzogUmVhY3QuUmVhY3RFbGVtZW50PGFueT4gfCBzdHJpbmc7XG4gIC8qKiDlrprnvqnjgZXjgozjgZ/kvY3nva7jgpLlm7rlrprjgavjgZnjgosgKi9cbiAgZml4ZWQ/OiBib29sZWFuO1xuICAvKiogKElFMTHkuI3lj68p55S76Z2i44GM44K544Kv44Ot44O844Or44GV44KM44Gm44KC5LiK44Gn6LK844KK5LuY44GR44GE44KL44KI44GG44Gr44GZ44KLICovXG4gIHN0aWNreT86IGJvb2xlYW47XG4gIC8qKiDkuK3lpK7kuKbjgbPjgYvjgonoh6rli5XluYXjgafooajnpLrjgZfjgb7jgZkgKi9cbiAgZmx1aWQ/OiBib29sZWFuO1xuICAvKiog6IOM5pmv44GMYmx1cuOBleOCjOOBvuOBme+8iHNhZmFyaeWwgueUqOOAgeS7luOBr+mAj+aYjuW6pu+8iSAqL1xuICBiYWNrZHJvcD86IGJvb2xlYW47XG4gIC8qKiBjaGlsZHJlbuOBq+Wumue+qeOBmeOCi0VsZW1lbnTjga7kuKbjgbPpoIbjgpLmjIflrprjgZfjgb7jgZnjgILmnKrlrprnvqnjga/oh6rli5XkuKbjgbMgKi9cbiAgYWxpZ24/OiAnbGVmdCcgfCAncmlnaHQnO1xuICAvKiog44Kr44K544K/44OgQ1NT5a6a576pICovXG4gIGNzcz86IENTU1R5cGU7XG59XG5cbnR5cGUgU3RhdGUgPSB7XG4gIHNob3c6IGJvb2xlYW4sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcHBCYXIgZXh0ZW5kcyBQdXJlQ29tcG9uZW50PFByb3BzLCBTdGF0ZT4ge1xuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGNvbG9yOiBudWxsLFxuICAgIGJyYW5kOiBudWxsLFxuICAgIGZpeGVkOiBmYWxzZSxcbiAgICBzdGlja3k6IGZhbHNlLFxuICAgIGZsdWlkOiBmYWxzZSxcbiAgICBiYWNrZHJvcDogZmFsc2UsXG4gIH07XG5cbiAgc3RhdGUgPSB7IHNob3c6IGZhbHNlIH07XG5cbiAgdG9nZ2xlTWVudSA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgc2hvdzogIXRoaXMuc3RhdGUuc2hvdyB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNoaWxkcmVuLCBhbGlnbiwgYnJhbmQsIC4uLnJlc3QgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBzaG93IH0gPSB0aGlzLnN0YXRlO1xuICAgIHJldHVybiAoXG4gICAgICA8TmF2QmFyXG4gICAgICAgIHJvbGU9XCJuYXZpZ2F0aW9uXCJcbiAgICAgICAgey4uLnJlc3R9XG4gICAgICA+XG4gICAgICAgIDxuYXY+XG4gICAgICAgICAge2JyYW5kfVxuICAgICAgICAgIDxCdXJnZXIgY2xhc3NOYW1lPXtzaG93ID8gJ2FjdGl2ZScgOiB1bmRlZmluZWR9IG9uQ2xpY2s9e3RoaXMudG9nZ2xlTWVudX0+XG4gICAgICAgICAgICA8c3BhbiAvPlxuICAgICAgICAgICAgPHNwYW4gLz5cbiAgICAgICAgICAgIDxzcGFuIC8+XG4gICAgICAgICAgPC9CdXJnZXI+XG4gICAgICAgICAgPE5hdkNvbnRlbnQgY2xhc3NOYW1lPXtzaG93ID8gJ2FjdGl2ZScgOiB1bmRlZmluZWR9IGFsaWduPXthbGlnbn0+XG4gICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgICAgPC9OYXZDb250ZW50PlxuICAgICAgICA8L25hdj5cbiAgICAgIDwvTmF2QmFyPlxuICAgICk7XG4gIH1cbn1cbiIsImltcG9ydCBSZWFjdCwgeyBIVE1MQXR0cmlidXRlcywgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQsIHsgY3NzIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IGRhcmtlbiBmcm9tICdwb2xpc2hlZC9saWIvY29sb3IvZGFya2VuJztcbmltcG9ydCBmaW5kQ29sb3JJbnZlcnQgZnJvbSAnLi4vLi4vdXRpbHMvZmluZENvbG9ySW52ZXJ0JztcbmltcG9ydCB7IENvbG9yVHlwZSwgVGhlbWVUeXBlLCBDU1NUeXBlIH0gZnJvbSAnLi4vLi4vdHlwZXMnO1xuXG5pbnRlcmZhY2UgV3JhcHBlclByb3BzIHtcbiAgY29sb3I/OiBDb2xvclR5cGU7XG4gIGFkZG9uQ29sb3I/OiBDb2xvclR5cGU7XG4gIGNsb3NlOiBib29sZWFuO1xuICBjc3M/OiBDU1NUeXBlO1xufVxuXG5mdW5jdGlvbiBnZXRDb2xvcih0aGVtZTogVGhlbWVUeXBlLCBjb2xvcj86IENvbG9yVHlwZSkge1xuICByZXR1cm4gKCFjb2xvciB8fCBjb2xvciA9PT0gJ2xpZ2h0JykgPyB0aGVtZS5iYWNrZ3JvdW5kIDogdGhlbWVbY29sb3JdO1xufVxuXG5mdW5jdGlvbiBzZXRDb2xvcih7IHRoZW1lLCBjb2xvciwgYWRkb25Db2xvciB9OlxuICAgIHsgdGhlbWU6IFRoZW1lVHlwZSwgY29sb3I/OiBDb2xvclR5cGUsIGFkZG9uQ29sb3I/OiBDb2xvclR5cGUgfSkge1xuICBjb25zdCB0YXJnZXQgPSBnZXRDb2xvcih0aGVtZSwgY29sb3IpO1xuICBjb25zdCBpbnZlcnRDb2xvciA9IGZpbmRDb2xvckludmVydCh0aGVtZSwgdGFyZ2V0KTtcblxuICBjb25zdCBzdWJDb2xvciA9IGFkZG9uQ29sb3IgPyBnZXRDb2xvcih0aGVtZSwgYWRkb25Db2xvcikgOiBkYXJrZW4oMC4wNSwgdGFyZ2V0KTtcblxuICByZXR1cm4gY3NzYFxuICAgIGNvbG9yOiAke2ludmVydENvbG9yfTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RhcmdldH07XG5cbiAgICBhLCBzcGFuIHtcbiAgICAgIGNvbG9yOiAke2ludmVydENvbG9yfTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7c3ViQ29sb3J9O1xuICAgIH1cblxuICAgIGE6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtkYXJrZW4oMC4wNSwgc3ViQ29sb3IpfTtcbiAgICB9XG4gIGA7XG59XG5cbmNvbnN0IFdyYXBwZXIgPSBzdHlsZWQuZGl2PFdyYXBwZXJQcm9wcz5gXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBmb250LXNpemU6IDAuNzVyZW07XG4gIGN1cnNvcjogZGVmYXVsdDtcbiAgcGFkZGluZzogMCAuNXJlbTtcbiAgaGVpZ2h0OiAyZW07XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBsaW5lLWhlaWdodDogMS41O1xuXG4gICR7c2V0Q29sb3J9XG5cbiAgJjpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcbiAgfVxuXG4gIGEsIHNwYW4ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICBmbGV4LWdyb3c6IDA7XG4gICAgZmxleC1zaHJpbms6IDA7XG4gICAgbWluLXdpZHRoOiAxLjVyZW07XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1hcmdpbi1yaWdodDogLTAuNXJlbTtcbiAgICBtYXJnaW4tbGVmdDogMC41cmVtO1xuICAgIHBhZGRpbmc6IDAgLjVyZW07XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogM3B4O1xuICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDNweDtcbiAgICB9XG5cbiAgICAmOmZvY3VzIHtcbiAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgfVxuXG4gICAgJHtwcm9wcyA9PiAocHJvcHMuY2xvc2UgPyBjc3NgXG4gICAgICAmOmJlZm9yZSwgJjphZnRlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGN1cnJlbnRDb2xvcjtcbiAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoLTUwJSkgcm90YXRlKDQ1ZGVnKTtcbiAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGNlbnRlcjtcbiAgICAgIH1cblxuICAgICAgJjpiZWZvcmUge1xuICAgICAgICBoZWlnaHQ6IDFweDtcbiAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgIH1cblxuICAgICAgJjphZnRlciB7XG4gICAgICAgIGhlaWdodDogNTAlO1xuICAgICAgICB3aWR0aDogMXB4O1xuICAgICAgfVxuXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgIH1cbiAgICBgIDogJycpfVxuICB9XG5cbiAgJHsoeyBjc3MgfSkgPT4gY3NzIHx8ICcnfVxuYDtcblxuaW50ZXJmYWNlIFByb3BzIGV4dGVuZHMgSFRNTEF0dHJpYnV0ZXM8SFRNTERpdkVsZW1lbnQ+IHtcbiAgLyoqIOOCv+OCsOOBruWGheWuuSAqL1xuICBjaGlsZHJlbjogYW55O1xuICAvKiogWOODnOOCv+ODs+OBrui/veWKoO+8i+OCr+ODquODg+OCr+aZguOBruOCpOODmeODs+ODiOODj+ODs+ODieODqeODvCAqL1xuICBvbkNsb3NlPzogKCkgPT4gdm9pZDtcbiAgLyoqIOOCr+ODquODg+OCr+aZguOBruOCpOODmeODs+ODiOODj+ODs+ODieODqeODvCAqL1xuICBvbkNsaWNrPzogKCkgPT4gdm9pZDtcbiAgLyoqIOiJsuOBruaMh+WumiAqL1xuICBjb2xvcj86IENvbG9yVHlwZTtcbiAgLyoqIOOCq+OCueOCv+ODoENTU+Wumue+qSAqL1xuICBjc3M/OiBDU1NUeXBlO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUYWcgZXh0ZW5kcyBQdXJlQ29tcG9uZW50PFByb3BzPiB7XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgY2hpbGRyZW46IG51bGwsXG4gICAgb25DbG9zZTogbnVsbCxcbiAgICBvbkNsaWNrOiBudWxsLFxuICAgIGNvbG9yOiBudWxsLFxuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNoaWxkcmVuLCBvbkNsb3NlLCAuLi5yZXN0IH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8V3JhcHBlciBjbG9zZT17b25DbG9zZSAhPT0gbnVsbH0gey4uLnJlc3R9PlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIHtvbkNsb3NlICYmICg8YSB0YWJJbmRleD17MH0gcm9sZT1cImxpbmtcIiBvbkNsaWNrPXtvbkNsb3NlfT4mbmJzcDs8L2E+KX1cbiAgICAgIDwvV3JhcHBlcj5cbiAgICApO1xuICB9XG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgSFRNTEF0dHJpYnV0ZXMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkLCB7IGNzcyB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBDb250YWluZXIgZnJvbSAnLi4vR3JpZC9Db250YWluZXInO1xuaW1wb3J0IGZpbmRDb2xvckludmVydCBmcm9tICcuLi8uLi91dGlscy9maW5kQ29sb3JJbnZlcnQnO1xuaW1wb3J0IHsgbWVkaWFEZXNrdG9wIH0gZnJvbSAnLi4vLi4vdXRpbHMvbWVkaWEnO1xuaW1wb3J0IHsgQ29sb3JUeXBlLCBUaGVtZVR5cGUsIFNpemVUeXBlIH0gZnJvbSAnLi4vLi4vdHlwZXMnO1xuXG5pbnRlcmZhY2UgUHJvcHMgZXh0ZW5kcyBIVE1MQXR0cmlidXRlczxIVE1MRGl2RWxlbWVudD4ge1xuICAvKiog6IOM5pmv44Gu6ImyICovXG4gIGNvbG9yPzogQ29sb3JUeXBlO1xuICAvKiogc21hbGwgfCBtZWRpdW0gfCBsYXJnZSB8IGZ1bGwgKi9cbiAgc2l6ZT86IFNpemVUeXBlIHwgJ2Z1bGwnO1xuICAvKiogICovXG4gIGNoaWxkcmVuPzogUmVhY3QuUmVhY3RDaGlsZDtcbiAgLyoqIGNoaWxkcmVu44Gu5Lit5aSu5o+D44GIICovXG4gIGNlbnRlcj86IGJvb2xlYW47XG4gIC8qKiDjgqvjgrnjgr/jg6Djg5jjg4Pjg4Djg7wgKi9cbiAgaGVhZGVyPzogUmVhY3QuUmVhY3RFbGVtZW50PGFueT47XG59XG5cbmZ1bmN0aW9uIHNldENvbG9yKHsgY29sb3IsIHRoZW1lIH06IHsgY29sb3I/OiBDb2xvclR5cGUsIHRoZW1lOiBUaGVtZVR5cGUgfSkge1xuICBpZiAoIWNvbG9yKSByZXR1cm4gJyc7XG5cbiAgY29uc3QgdGFyZ2V0ID0gdGhlbWVbY29sb3JdIHx8IGNvbG9yO1xuICBjb25zdCBpbnZlcnRDb2xvciA9IGZpbmRDb2xvckludmVydCh0aGVtZSwgdGFyZ2V0KTtcbiAgcmV0dXJuIGNzc2BiYWNrZ3JvdW5kLWNvbG9yOiAke3RhcmdldH07IGNvbG9yOiAke2ludmVydENvbG9yfTtgO1xufVxuXG5mdW5jdGlvbiBzZXRTaXplKHsgc2l6ZSwgdGhlbWUgfTogeyBzaXplPzogU2l6ZVR5cGUgfCAnZnVsbCcsIHRoZW1lOiBUaGVtZVR5cGUgfSkge1xuICBpZiAoIXNpemUgfHwgc2l6ZSA9PT0gJ3NtYWxsJykgcmV0dXJuICcnO1xuXG4gIHN3aXRjaCAoc2l6ZSkge1xuICAgIGNhc2UgJ21lZGl1bScgOlxuICAgICAgcmV0dXJuIGNzc2BwYWRkaW5nLWJvdHRvbTogOXJlbTsgcGFkZGluZy10b3A6IDlyZW07YDtcbiAgICBjYXNlICdsYXJnZScgOlxuICAgICAgcmV0dXJuIGNzc2BwYWRkaW5nLWJvdHRvbTogMThyZW07IHBhZGRpbmctdG9wOiAxOHJlbTtgO1xuICAgIGNhc2UgJ2Z1bGwnIDpcbiAgICAgIHJldHVybiBjc3NgXG4gICAgICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuXG4gICAgICAgICR7Qm9keX0ge1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgfVxuICAgICAgYDtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuICcnO1xuICB9XG59XG5cbmludGVyZmFjZSBCb2R5UHJvcHMge1xuICBjZW50ZXI/OiBib29sZWFuO1xufVxuXG5jb25zdCBCb2R5ID0gc3R5bGVkLmRpdjxCb2R5UHJvcHM+YFxuICBmbGV4LWdyb3c6IDE7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICBwYWRkaW5nOiAzcmVtIDEuNXJlbTtcblxuICAkeyh7IGNlbnRlciB9KSA9PiBjZW50ZXIgPyAndGV4dC1hbGlnbjogY2VudGVyOycgOiAnJ31cblxuICBoMSB7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgbGluZS1oZWlnaHQ6IDEuMTI1O1xuXG4gICAgJjpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcbiAgICB9XG4gIH1cblxuICBoMiB7XG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgbGluZS1oZWlnaHQ6IDEuMjU7XG4gIH1cblxuICBoMStoMiB7XG4gICAgbWFyZ2luLXRvcDogLTEuMjVyZW07XG4gIH1cbmA7XG5cbmludGVyZmFjZSBXcmFwcGVyUHJvcHMge1xuICBjb2xvcj86IENvbG9yVHlwZTtcbiAgc2l6ZT86IFNpemVUeXBlIHwgJ2Z1bGwnO1xufVxuXG5jb25zdCBXcmFwcGVyID0gc3R5bGVkLmRpdjxXcmFwcGVyUHJvcHM+YFxuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAke3NldENvbG9yfVxuICAke3NldFNpemV9XG5cbiAgaGVhZGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xuICAgIGNvbG9yOiBpbmhlcml0O1xuICB9XG5cbiAgaGVhZGVyKyR7Qm9keX0ge1xuICAgIG1hcmdpbi10b3A6IDMuMjVyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMy4yNXJlbTtcbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGVybyh7IGNoaWxkcmVuLCBjb2xvciwgc2l6ZSwgY2VudGVyLCBoZWFkZXIsIC4uLnJlc3QgfTogUHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8V3JhcHBlciBjb2xvcj17Y29sb3J9IHNpemU9e3NpemV9IHsuLi5yZXN0fT5cbiAgICAgIHtoZWFkZXJ9XG4gICAgICA8Qm9keSBjZW50ZXI9e2NlbnRlcn0+XG4gICAgICAgIDxDb250YWluZXI+XG4gICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgIDwvQm9keT5cbiAgICA8L1dyYXBwZXI+XG4gICk7XG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgY3JlYXRlUmVmLCBSZWZPYmplY3QsIFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkLCB7IGNzcyB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7IENvbG9yVHlwZSwgQ1NTVHlwZSB9IGZyb20gJy4uLy4uL3R5cGVzJztcblxuY29uc3QgV3JhcHBlciA9IHN0eWxlZC5kaXY8eyBzaG93PzogYm9vbGVhbiwgY3NzPzogQ1NTVHlwZSB9PmBcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cbiAgZGl2W3JvbGU9XCJ0b29sdGlwXCJdIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgY2xlYXI6IGJvdGg7XG4gICAgYm94LXNoYWRvdzogMCAxcHggMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjA1KTtcbiAgICB6LWluZGV4OiA5OTk5O1xuICAgIHBhZGRpbmc6IDAuMzc1cmVtIDAuNjI1cmVtO1xuICAgIGN1cnNvcjogZGVmYXVsdDtcbiAgICB3aWR0aDogYXV0bztcbiAgICB3aGl0ZS1zcGFjZTogcHJlO1xuICAgIGZvbnQtc2l6ZTogMC44NXJlbTtcbiAgICB6LWluZGV4OiA5OTk5O1xuXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjgpO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuXG4gICAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybSwgb3BhY2l0eSwgdmlzaWJpbGl0eTtcbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiB0cmFuc2Zvcm0sIG9wYWNpdHksIHZpc2liaWxpdHk7XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMTAwbXM7XG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKTtcblxuICAgICR7KHsgc2hvdyB9KSA9PiBzaG93ICYmIGNzc2BcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgICBgfVxuICB9XG4gICR7KHsgY3NzIH0pID0+IGNzcyB8fCAnJ31cbmA7XG5cbmludGVyZmFjZSBUb29sdGlwUHJvcHMge1xuICAvKiog5ZC544GN5Ye644GX44Go44GX44Gm6KGo56S644GX44Gf44GE5YaF5a65ICovXG4gIGxhYmVsOiBhbnk7XG4gIC8qKiDjg57jgqbjgrnjgqrjg7zjg5Djg7zjga7lr77osaHjgavjgarjgotlbGVtZW50ICovXG4gIGNoaWxkcmVuOiBhbnk7XG4gIC8qKiDlkLnjgY3lh7rjgZfjga7og4zmma/oibLjga7mjIflrpogKi9cbiAgY29sb3I/OiBDb2xvclR5cGU7XG4gIC8qKiDooajnpLrjgZXjgozjgovloLTmiYAgKi9cbiAgcG9zaXRpb24/OiAndG9wJyB8ICdsZWZ0JyB8ICdyaWdodCcgfCAnYm90dG9tJztcbiAgLyoqIOOCq+OCueOCv+ODoENTU+Wumue+qSAqL1xuICBjc3M/OiBDU1NUeXBlO1xufVxuXG5pbnRlcmZhY2UgU3RhdGUge1xuICBzaG93OiBib29sZWFuO1xuICBzdHlsZTogYW55O1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb29sdGlwIGV4dGVuZHMgUHVyZUNvbXBvbmVudDxUb29sdGlwUHJvcHMsIFN0YXRlPiB7XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgcG9zaXRpb246ICdib3R0b20nLFxuICAgIGNvbG9yOiAnZGFyaycsXG4gIH07XG5cbiAgc3RhdGUgPSB7XG4gICAgc2hvdzogZmFsc2UsXG4gICAgc3R5bGU6IHt9LFxuICB9O1xuXG4gIG9wZW5Ub29sdGlwID0gKCkgPT4ge1xuICAgIGlmICh0aGlzLnN0YXRlLnNob3cgfHwgIXRoaXMuZWxlbWVudC5jdXJyZW50IHx8ICF0aGlzLnRvb2x0aXAuY3VycmVudCkgcmV0dXJuO1xuXG4gICAgY29uc3QgcGFyZW50UmVjdCA9IHRoaXMuZWxlbWVudC5jdXJyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGNvbnN0IHJlY3QgPSB0aGlzLnRvb2x0aXAuY3VycmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBjb25zdCBsZWZ0ID0gcGFyZW50UmVjdC53aWR0aCArIDg7XG4gICAgY29uc3QgdG9wID0gcGFyZW50UmVjdC5oZWlnaHQgKyA4O1xuICAgIGNvbnN0IHdpZHRoID0gKHBhcmVudFJlY3Qud2lkdGggLSByZWN0LndpZHRoKSA+PiAxO1xuICAgIGNvbnN0IGhlaWdodCA9IChwYXJlbnRSZWN0LmhlaWdodCAtIHJlY3QuaGVpZ2h0KSA+PiAxO1xuICAgIGxldCBzdHlsZSA9IHt9O1xuXG4gICAgc3dpdGNoICh0aGlzLnByb3BzLnBvc2l0aW9uKSB7XG4gICAgICBjYXNlICd0b3AnOiB7XG4gICAgICAgIHN0eWxlID0geyBib3R0b206IGAke3RvcH1weGAsIGxlZnQ6IGAke3dpZHRofXB4YCB9O1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgJ2xlZnQnOiB7XG4gICAgICAgIHN0eWxlID0geyByaWdodDogYCR7bGVmdH1weGAsIHRvcDogYCR7aGVpZ2h0fXB4YCB9O1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgJ3JpZ2h0Jzoge1xuICAgICAgICBzdHlsZSA9IHsgbGVmdDogYCR7bGVmdH1weGAsIHRvcDogYCR7aGVpZ2h0fXB4YCB9O1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgc3R5bGUgPSB7IHRvcDogYCR7dG9wfXB4YCwgbGVmdDogYCR7d2lkdGh9cHhgICB9O1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLnNldFN0YXRlKHsgc3R5bGUsIHNob3c6IHRydWUgfSk7XG4gIH1cblxuICBjbG9zZVRvb2x0aXAgPSAoKSA9PiB7XG4gICAgaWYgKHRoaXMuc3RhdGUuc2hvdykgdGhpcy5zZXRTdGF0ZSh7IHNob3c6IGZhbHNlIH0pO1xuICB9XG5cbiAgZWxlbWVudDogUmVmT2JqZWN0PEhUTUxEaXZFbGVtZW50PiA9IGNyZWF0ZVJlZigpO1xuICB0b29sdGlwOiBSZWZPYmplY3Q8SFRNTERpdkVsZW1lbnQ+ID0gY3JlYXRlUmVmKCk7XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgbGFiZWwsIGNoaWxkcmVuLCAuLi5yZXN0IH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgc2hvdywgc3R5bGUgfSA9IHRoaXMuc3RhdGU7XG4gICAgcmV0dXJuIChcbiAgICAgIDxXcmFwcGVyXG4gICAgICAgIHJlZj17dGhpcy5lbGVtZW50fVxuICAgICAgICBvbk1vdXNlT3Zlcj17dGhpcy5vcGVuVG9vbHRpcH1cbiAgICAgICAgb25Nb3VzZU91dD17dGhpcy5jbG9zZVRvb2x0aXB9XG4gICAgICAgIHsuLi5yZXN0fVxuICAgICAgPlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDxkaXZcbiAgICAgICAgICByZWY9e3RoaXMudG9vbHRpcH1cbiAgICAgICAgICBjbGFzc05hbWU9e3Nob3cgPyAnc3RhcnQnIDogdW5kZWZpbmVkfVxuICAgICAgICAgIHJvbGU9XCJ0b29sdGlwXCJcbiAgICAgICAgICBzdHlsZT17c3R5bGV9XG4gICAgICAgID5cbiAgICAgICAgICB7bGFiZWx9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9XcmFwcGVyPlxuICAgICk7XG4gIH1cbn1cblxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5leHBvcnQgY29uc3QgU2lkZU1lbnUgPSBzdHlsZWQuYXNpZGVgXG4gIGZvbnQtc2l6ZTogMXJlbTtcbmA7XG5TaWRlTWVudS5kaXNwbGF5TmFtZSA9ICdTaWRlTWVudSc7XG5cbmV4cG9ydCBjb25zdCBNZW51TGlzdCA9IHN0eWxlZC51bGBcbiAgbGluZS1oZWlnaHQ6IDEuMjU7XG5cbiAgYSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcGFkZGluZzogMC41ZW07XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnRleHR9O1xuICAgICY6aG92ZXIge1xuICAgICAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUucHJpbWFyeX07XG4gICAgfVxuICAgICYuYWN0aXZlIHtcbiAgICAgIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnByaW1hcnl9O1xuICAgIH1cbiAgfVxuXG4gIGxpIHtcbiAgICB1bCB7XG4gICAgICBtYXJnaW46IDAuNzVlbTtcbiAgICAgIHBhZGRpbmctbGVmdDogMC43NWVtO1xuICAgIH1cbiAgfVxuYDtcbk1lbnVMaXN0LmRpc3BsYXlOYW1lID0gJ01lbnVMaXN0JztcblxuZXhwb3J0IGNvbnN0IE1lbnVMYWJlbCA9IHN0eWxlZC5wYFxuICBmb250LXNpemU6IDAuNzVlbTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMWVtO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuXG4gICY6bm90KDpmaXJzdC1jaGlsZCkge1xuICAgIG1hcmdpbi10b3A6IDFlbTtcbiAgfVxuICAmOm5vdCg6bGFzdC1jaGlsZCkge1xuICAgIG1hcmdpbi1ib3R0b206IDFlbTtcbiAgfVxuYDtcbk1lbnVMYWJlbC5kaXNwbGF5TmFtZSA9ICdNZW51TGFiZWwnO1xuXG4iLCJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCwgQ1NTUHJvcGVydGllcyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQsIHsgY3NzIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IEJveCBmcm9tICcuLi9Cb3gnO1xuaW1wb3J0IHsgQ29sb3JUeXBlIH0gZnJvbSAnLi4vLi4vdHlwZXMnO1xuXG5jb25zdCBDYXJkQm9keSA9IHN0eWxlZC5kaXZgXG4gIHBhZGRpbmc6IDEuMjVyZW07XG4gIG1hcmdpbjogMDtcbmA7XG5cbmNvbnN0IENhcmRIZWFkZXIgPSBzdHlsZWQuaGVhZGVyYFxuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nOiAwLjVyZW0gMS41cmVtO1xuICBtaW4taGVpZ2h0OiAzLjVyZW07XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmJvcmRlcn07XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbmA7XG5cbmNvbnN0IENhcmRGb290ZXIgPSBzdHlsZWQuZm9vdGVyYFxuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nOiAwLjVyZW0gMS41cmVtO1xuICBtaW4taGVpZ2h0OiAzLjVyZW07XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmJvcmRlcn07XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbmA7XG5cbmNvbnN0IENhcmRJbWFnZSA9IHN0eWxlZC5hYFxuICB3aWR0aDogMTAwJTtcblxuICBpbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDNweDtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogM3B4O1xuICB9XG5gO1xuXG5pbnRlcmZhY2UgSW1hZ2VQcm9wcyB7XG4gIHVybD86IHN0cmluZztcbn1cblxuY29uc3QgQ2FyZEltYWdlSG9yaXpvbnRhbCA9IHN0eWxlZC5hPEltYWdlUHJvcHM+YFxuICBmbGV4OiAwIDAgMzAlO1xuICBtaW4td2lkdGg6IDVyZW07XG4gIHdpZHRoOiAzMCU7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDNweDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogM3B4O1xuXG4gIGJhY2tncm91bmQ6IG5vLXJlcGVhdCBjZW50ZXIvY292ZXI7XG4gICR7KHsgdXJsIH0pID0+IHVybCA/IGNzc2BiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHt1cmx9KTtgIDoge319XG5gO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICAvKiog44Os44K544Od44Oz44K344OW44Gq44Kk44Oh44O844K444KS6L+95Yqg44GZ44KLICovXG4gIGltYWdlPzogc3RyaW5nO1xuICAvKiog44K/44Kk44OI44OrICovXG4gIHRpdGxlPzogc3RyaW5nO1xuICAvKiog44OY44OD44OA44O844Gu5Y+z5YG044Gr6L+95Yqg44GZ44KLICovXG4gIGhlYWRlck9wdGlvbnM/OiBhbnk7XG4gIC8qKiBoZWFkZXLpg6jliIbvvIjjgqTjg6Hjg7zjgrjvvInjgpLmqKrkuKbjgbPjgavjgZnjgosgKi9cbiAgaG9yaXpvbnRhbD86IGJvb2xlYW47XG4gIC8qKiBmb290ZXIgKi9cbiAgZm9vdGVyPzogYW55O1xuICAvKiog6Imy44Gu5oyH5a6aICovXG4gIGNvbG9yPzogQ29sb3JUeXBlO1xuICAvKiog44OY44OD44OA44KSICovXG4gIGhlYWRlck9uVG9wPzogYm9vbGVhbjtcbiAgLyoqIOOCq+OCueOCv2lubGluZSBzdHlsZSAqL1xuICBzdHlsZT86IGFueTtcbn1cblxuY29uc3QgaG9yaXpvbnRhbFN0eWxlOiBDU1NQcm9wZXJ0aWVzID0geyBmbGV4RGlyZWN0aW9uOiAncm93JyB9O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYXJkIGV4dGVuZHMgUHVyZUNvbXBvbmVudDxQcm9wcz4ge1xuICByZW5kZXJIZWFkZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBpbWFnZSwgdGl0bGUsIGhvcml6b250YWwgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBpZiAoaW1hZ2UgJiYgIWhvcml6b250YWwpIHJldHVybiAoPENhcmRJbWFnZT48aW1nIHNyYz17aW1hZ2V9IC8+PC9DYXJkSW1hZ2U+KTtcbiAgICBpZiAoaW1hZ2UgJiYgaG9yaXpvbnRhbCkgcmV0dXJuICg8Q2FyZEltYWdlSG9yaXpvbnRhbCB1cmw9e2ltYWdlfSAvPik7XG4gICAgaWYgKHRpdGxlICYmICFob3Jpem9udGFsKSByZXR1cm4gKDxDYXJkSGVhZGVyPjxoMz57dGl0bGV9PC9oMz48L0NhcmRIZWFkZXI+KTtcblxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY2hpbGRyZW4sIGhvcml6b250YWwsIGZvb3RlciwgY29sb3IgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBjb25zdCBoZWFkZXIgPSB0aGlzLnJlbmRlckhlYWRlcigpO1xuICAgIGNvbnN0IHdyYXBwZXJTdHlsZSA9IGhvcml6b250YWwgPyBob3Jpem9udGFsU3R5bGUgOiB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIChcbiAgICAgIDxCb3ggc3R5bGU9e3dyYXBwZXJTdHlsZX0gY29sb3I9e2NvbG9yfT5cbiAgICAgICAge2hlYWRlcn1cbiAgICAgICAgPENhcmRCb2R5PlxuICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC9DYXJkQm9keT5cbiAgICAgICAge2Zvb3RlciAmJiAoPENhcmRGb290ZXI+e1JlYWN0LkNoaWxkcmVuLm9ubHkoZm9vdGVyKX08L0NhcmRGb290ZXI+KX1cbiAgICAgIDwvQm94PlxuICAgICk7XG4gIH1cbn1cbiIsImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50LCBjcmVhdGVSZWYsIFJlZk9iamVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQsIHsgY3NzIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IEJveCwgeyBQcm9wcyBhcyBCb3hQcm9wcyB9IGZyb20gJy4uL0JveCc7XG5pbXBvcnQgeyBDU1NUeXBlIH0gZnJvbSAnLi4vLi4vdHlwZXMnO1xuXG5jb25zdCBXcmFwcGVyID0gc3R5bGVkLmRpdjx7IGNzcz86IENTU1R5cGUgfT5gXG4gIGRpc3BsYXk6IGJsb2NrO1xuICBvdXRsaW5lOiBub25lO1xuICBjb2xvcjogaW5oZXJpdDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICY6aG92ZXIge1xuICAgIGNvbG9yOiBpbmhlcml0O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgfVxuXG4gICR7KHsgY3NzIH0pID0+IGNzcyB8fCAnJ31cbmA7XG5cbmNvbnN0IFRvb2x0aXAgPSBzdHlsZWQoQm94KTx7IHNob3c/OiBib29sZWFuIH0+YFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGNsZWFyOiBib3RoO1xuICBib3gtc2hhZG93OiAwIDFweCAycHggMCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuICB6LWluZGV4OiA5OTk5O1xuICBwYWRkaW5nOiAwLjVyZW0gMDtcbiAgd2lkdGg6IGF1dG87XG4gIGhlaWdodDogYXV0bztcbiAgY3Vyc29yOiBhdXRvO1xuXG4gIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm0sIG9wYWNpdHksIHZpc2liaWxpdHk7XG4gIHRyYW5zZm9ybTogc2NhbGUoMC44KTtcbiAgb3BhY2l0eTogMDtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuXG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybSwgb3BhY2l0eSwgdmlzaWJpbGl0eTtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMTAwbXM7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSk7XG5cbiAgJHsoeyBzaG93IH0pID0+IHNob3cgJiYgY3NzYFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgb3BhY2l0eTogMTtcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICBgfVxuYDtcblxuaW50ZXJmYWNlIFByb3BzIGV4dGVuZHMgQm94UHJvcHMge1xuICAvKiog44Oc44K/44Oz44Gu5YaF5a65ICovXG4gIGxhYmVsOiBSZWFjdC5SZWFjdE5vZGU7XG4gIC8qKiDlhoXlrrnjga7jg6rjgrnjg4ggKi9cbiAgY2hpbGRyZW4/OiBSZWFjdC5SZWFjdE5vZGUgfCBSZWFjdC5SZWFjdE5vZGU7XG4gIC8qKiDlj7Pjga7ln7rmupbjgafjg6rjgrnjg4jjgpLooajnpLrjgZnjgosgKi9cbiAgcmlnaHQ/OiBib29sZWFuO1xuICAvKiog5ZC544GN5Ye644GX44GM6KGo56S644GV44KM44KL5aC05omAICovXG4gIHBvc2l0aW9uPzogJ3RvcC1sZWZ0JyB8ICd0b3AnIHwgJ3RvcC1yaWdodCcgfCAnYm90dG9tLWxlZnQnIHwgJ2JvdHRvbScgfCAnYm90dG9tLXJpZ2h0JztcbiAgLyoqIOOCq+OCueOCv+ODoENTU+Wumue+qSAqL1xuICBjc3M/OiBDU1NUeXBlO1xufVxuXG5pbnRlcmZhY2UgU3RhdGUge1xuICBzaG93OiBib29sZWFuO1xuICBzdHlsZTogYW55O1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb3BvdmVyIGV4dGVuZHMgUHVyZUNvbXBvbmVudDxQcm9wcywgU3RhdGU+IHtcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBjb2xvcjogJ3doaXRlJyxcbiAgICBzdHlsZToge30sXG4gIH07XG4gIHN0YXRlID0geyBzaG93OiBmYWxzZSwgc3R5bGU6IHt9IH07XG5cbiAgb3BlbkRyb3Bkb3duID0gKCkgPT4ge1xuICAgIGlmICh0aGlzLnN0YXRlLnNob3cgfHwgIXRoaXMudG9vbHRpcC5jdXJyZW50IHx8ICF0aGlzLndyYXBwZXIuY3VycmVudCkgcmV0dXJuO1xuXG4gICAgbGV0IHN0eWxlID0ge307XG4gICAgY29uc3QgcGFyZW50UmVjdCA9IHRoaXMud3JhcHBlci5jdXJyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGNvbnN0IHRvb2x0aXBSZWN0ID0gdGhpcy50b29sdGlwLmN1cnJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICBzd2l0Y2ggKHRoaXMucHJvcHMucG9zaXRpb24pIHtcbiAgICAgIGNhc2UgJ3RvcC1sZWZ0Jzoge1xuICAgICAgICBzdHlsZSA9IHsgYm90dG9tOiBgJHtwYXJlbnRSZWN0LmhlaWdodCArIDh9cHhgLCBsZWZ0OiAwIH07XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSAndG9wLXJpZ2h0Jzoge1xuICAgICAgICBzdHlsZSA9IHsgYm90dG9tOiBgJHtwYXJlbnRSZWN0LmhlaWdodCArIDh9cHhgLCByaWdodDogMCB9O1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgJ3RvcCc6IHtcbiAgICAgICAgc3R5bGUgPSB7XG4gICAgICAgICAgYm90dG9tOiBgJHtwYXJlbnRSZWN0LmhlaWdodCArIDh9cHhgLFxuICAgICAgICAgIGxlZnQ6IGAkeyhwYXJlbnRSZWN0LndpZHRoIC0gdG9vbHRpcFJlY3Qud2lkdGgpID4+IDF9cHhgLFxuICAgICAgICB9O1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgJ2JvdHRvbS1yaWdodCc6IHtcbiAgICAgICAgc3R5bGUgPSB7IHRvcDogYCR7cGFyZW50UmVjdC5oZWlnaHQgKyA4fXB4YCwgcmlnaHQ6IDAgfTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlICdib3R0b20nOiB7XG4gICAgICAgIHN0eWxlID0ge1xuICAgICAgICAgIHRvcDogYCR7cGFyZW50UmVjdC5oZWlnaHQgKyA4fXB4YCxcbiAgICAgICAgICBsZWZ0OiBgJHsocGFyZW50UmVjdC53aWR0aCAtIHRvb2x0aXBSZWN0LndpZHRoKSA+PiAxfXB4YCxcbiAgICAgICAgfTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICAvLyBib3R0b20tbGVmdFxuICAgICAgZGVmYXVsdDoge1xuICAgICAgICBzdHlsZSA9IHsgdG9wOiBgJHtwYXJlbnRSZWN0LmhlaWdodCArIDh9cHhgLCBsZWZ0OiAwIH07XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuc2V0U3RhdGUoeyBzdHlsZSwgc2hvdzogdHJ1ZSB9KTtcbiAgfVxuXG4gIGNsb3NlRHJvcGRvd24gPSAoKSA9PiB7XG4gICAgaWYgKHRoaXMuc3RhdGUuc2hvdykgdGhpcy5zZXRTdGF0ZSh7IHNob3c6IGZhbHNlIH0pO1xuICB9XG5cbiAgdG9vbHRpcDogUmVmT2JqZWN0PEhUTUxEaXZFbGVtZW50PiA9IGNyZWF0ZVJlZigpO1xuICB3cmFwcGVyOiBSZWZPYmplY3Q8SFRNTERpdkVsZW1lbnQ+ID0gY3JlYXRlUmVmKCk7XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgbGFiZWwsIGNoaWxkcmVuLCBzdHlsZSwgY3NzLCAuLi5yZXN0IH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgc2hvdyB9ID0gdGhpcy5zdGF0ZTtcbiAgICByZXR1cm4gKFxuICAgICAgPFdyYXBwZXJcbiAgICAgICAgdGFiSW5kZXg9ezB9XG4gICAgICAgIHJvbGU9XCJidXR0b25cIlxuICAgICAgICByZWY9e3RoaXMud3JhcHBlcn1cbiAgICAgICAgb25Gb2N1cz17dGhpcy5vcGVuRHJvcGRvd259XG4gICAgICAgIG9uQmx1cj17dGhpcy5jbG9zZURyb3Bkb3dufVxuICAgICAgICBjbGFzc05hbWU9e3RoaXMucHJvcHMuY2xhc3NOYW1lfVxuICAgICAgICBjc3M9e2Nzc31cbiAgICAgID5cbiAgICAgICAge2xhYmVsfVxuICAgICAgICA8VG9vbHRpcFxuICAgICAgICAgIHNob3c9e3Nob3d9XG4gICAgICAgICAgcm9sZT1cInRvb2x0aXBcIlxuICAgICAgICAgIHJlZj17dGhpcy50b29sdGlwfVxuICAgICAgICAgIHN0eWxlPXt0aGlzLnN0YXRlLnN0eWxlfVxuICAgICAgICAgIHsuLi5yZXN0fVxuICAgICAgICA+XG4gICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L1Rvb2x0aXA+XG4gICAgICA8L1dyYXBwZXI+XG4gICAgKTtcbiAgfVxufVxuIiwiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQsIEhUTUxBdHRyaWJ1dGVzLCBGcmFnbWVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNyZWF0ZVBvcnRhbCB9IGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgQ1NTVHJhbnNpdGlvbiBmcm9tICdyZWFjdC10cmFuc2l0aW9uLWdyb3VwL0NTU1RyYW5zaXRpb24nO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgQm94IGZyb20gJy4uL0JveCc7XG5pbXBvcnQgQ29sIGZyb20gJy4uL0dyaWQvQ29sJztcbmltcG9ydCB7IENvbG9yVHlwZSwgQ29sU2l6ZVR5cGUsIENTU1R5cGUgfSBmcm9tICcuLi8uLi90eXBlcyc7XG5cbmNvbnN0IEVTQ19LRVkgPSAyNztcblxuY29uc3QgV3JhcHBlciA9IHN0eWxlZC5kaXY8eyBjc3M/OiBDU1NUeXBlLCBzaGFkb3dDb2xvcj86IHN0cmluZyB9PmBcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIHotaW5kZXg6IDk5OTc7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwYWRkaW5nOiAwLjc1cmVtO1xuXG4gIC52LW1vZGFsLWJvZHkge1xuICAgIHotaW5kZXg6IDk5OTk7XG4gICAgbWFyZ2luOiAwO1xuICAgIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm0sIG9wYWNpdHk7XG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtLCBvcGFjaXR5O1xuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSk7XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMjAwbXM7XG4gIH1cblxuICAmLmZhZGUtZW50ZXIgPiAudi1tb2RhbC1ib2R5IHtcbiAgICBvcGFjaXR5OiAwLjAxO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC44KTtcbiAgfVxuICAmLmZhZGUtZW50ZXItYWN0aXZlID4gLnYtbW9kYWwtYm9keSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB9XG4gICYuZmFkZS1leGl0ID4gLnYtbW9kYWwtYm9keSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB9XG4gICYuZmFkZS1leGl0LWFjdGl2ZSA+IC52LW1vZGFsLWJvZHkge1xuICAgIG9wYWNpdHk6IDAuMDE7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjgpO1xuICB9XG5cbiAgLnYtbW9kYWwtc2hhZG93IHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgdG9wOiAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR7KHsgc2hhZG93Q29sb3IgfSkgPT4gc2hhZG93Q29sb3IgfHwgJ3RyYW5zcGFyZW50J307XG4gIH1cblxuICAkeyh7IGNzcyB9KSA9PiBjc3MgfHwge319XG5gO1xuXG5pbnRlcmZhY2UgUHJvcHMgZXh0ZW5kcyBIVE1MQXR0cmlidXRlczxIVE1MRGl2RWxlbWVudD4ge1xuICAvKiog44OY44OD44OA44O844Gu44K/44Kk44OI44Or5paH6KiAICovXG4gIHRpdGxlPzogYW55O1xuICAvKiogMX4xMuOBruODouODvOODgOODq+OCteOCpOOCuiAqL1xuICBzaXplPzogQ29sU2l6ZVR5cGU7XG4gIC8qKiB0cnVl44Gu5aC05ZCI44CB44Oi44O844OA44Or44KS6KGo56S644GX44G+44GZ44CCICovXG4gIHNob3c/OiBib29sZWFuO1xuICAvKiog44Oi44O844OA44Or44GuYm9keeOBq+WFpeOCjOOCi+WGheWuuSAqL1xuICBjaGlsZHJlbj86IGFueTtcbiAgLyoqIOODouODvOODgOODq+OBrmZvb3RlcuOBq+WFpeOCjOOCi+WGheWuuSAqL1xuICBmb290ZXI/OiBhbnk7XG4gIC8qKiDjg6Ljg7zjg4Djg6vjga7oibIgKi9cbiAgY29sb3I/OiBDb2xvclR5cGU7XG4gIC8qKiDjg6Ljg7zjg4Djg6vjgpLplonjgZjjgovlh6bnkIYgKi9cbiAgY2xvc2VNb2RhbDogKCkgPT4gdm9pZDtcbiAgLyoqIOOCquODvOODkOODvOODrOOCpOOBruOCr+ODquODg+OCr+OBp+ODouODvOODgOODq+OCr+ODreODvOOCuiAqL1xuICBjbG9zZU9uT3ZlcmxheT86IGJvb2xlYW47XG4gIC8qKiBlc2Pjg5zjgr/jg7Pjgafjgq/jg63jg7zjgrogKi9cbiAgY2xvc2VPbkVzYz86IGJvb2xlYW47XG4gIC8qKiBvdmVybGF544Gu6IOM5pmv44Gu6Kit5a6aICovXG4gIHNoYWRvd0NvbG9yPzogc3RyaW5nO1xuICAvKiog44Oi44O844OA44Or5aSW44Gr6KGo56S644GZ44KLRWxlbWVudHMgKi9cbiAgZXh0ZXJuYWw/OiBhbnk7XG4gIC8qKiDjgqvjgrnjgr/jg6BDU1PlrprnvqkgKi9cbiAgY3NzPzogQ1NTVHlwZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW9kYWwgZXh0ZW5kcyBQdXJlQ29tcG9uZW50PFByb3BzPiB7XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgc2hvdzogZmFsc2UsXG4gICAgY29sb3I6ICd3aGl0ZScsXG4gICAgc2l6ZTogNixcbiAgICBzaGFkb3dDb2xvcjogJ3JnYmEoMTAsMTAsMTAsLjg2KScsXG4gIH07XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgaWYgKHRoaXMuZWxlbWVudCkge1xuICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZCh0aGlzLmVsZW1lbnQpO1xuICAgIH1cbiAgfVxuXG4gIG9uS2V5RG93biA9IChlOiBhbnkpID0+IHtcbiAgICBpZiAodGhpcy5wcm9wcy5jbG9zZU9uRXNjICYmIGUua2V5Q29kZSA9PT0gRVNDX0tFWSAmJiB0aGlzLnByb3BzLmNsb3NlTW9kYWwpIHtcbiAgICAgIHRoaXMucHJvcHMuY2xvc2VNb2RhbCgpO1xuICAgIH1cbiAgfVxuXG4gIG9uQ2xpY2tPdmVybGF5ID0gKCkgPT4ge1xuICAgIGlmICh0aGlzLnByb3BzLmNsb3NlT25PdmVybGF5ICYmIHRoaXMucHJvcHMuY2xvc2VNb2RhbCkge1xuICAgICAgdGhpcy5wcm9wcy5jbG9zZU1vZGFsKCk7XG4gICAgfVxuICB9XG5cbiAgZWxlbWVudD86IEhUTUxEaXZFbGVtZW50O1xuICBzaG91bGRDbG9zZTogYm9vbGVhbiB8IG51bGwgPSBudWxsO1xuXG4gIHJlbmRlcigpOiBSZWFjdC5SZWFjdFBvcnRhbCB8IG51bGwge1xuICAgIGlmICh0eXBlb2YgZG9jdW1lbnQgIT09IFwidW5kZWZpbmVkXCIgJiYgIXRoaXMuZWxlbWVudCkge1xuICAgICAgdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuZWxlbWVudCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuZWxlbWVudCkge1xuICAgICAgY29uc3Qge1xuICAgICAgICBzaG93LCBzaXplLCB0aXRsZSwgY2hpbGRyZW4sIGZvb3RlciwgY29sb3IsIG9uQ2xpY2ssIC4uLnJlc3RcbiAgICAgIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgICByZXR1cm4gY3JlYXRlUG9ydGFsKChcbiAgICAgICAgPENTU1RyYW5zaXRpb25cbiAgICAgICAgICBjbGFzc05hbWVzPVwiZmFkZVwiXG4gICAgICAgICAgdGltZW91dD17MjAwfVxuICAgICAgICAgIGluPXtzaG93fVxuICAgICAgICAgIHVubW91bnRPbkV4aXRcbiAgICAgICAgPlxuICAgICAgICAgIDxXcmFwcGVyIHJvbGU9XCJkb2N1bWVudFwiIHsuLi5yZXN0fT5cbiAgICAgICAgICAgIDxDb2wgY2xhc3NOYW1lPVwidi1tb2RhbC1ib2R5XCIgc2l6ZT17c2l6ZX0gYXV0byByb2xlPVwiZGlhbG9nXCI+XG4gICAgICAgICAgICAgIDxCb3ggY29sb3I9e2NvbG9yfT5cbiAgICAgICAgICAgICAgICB7dGl0bGUgPyB0aXRsZSA6IG51bGx9XG4gICAgICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICAgICAgICAgIHtmb290ZXIgPyBmb290ZXIgOiBudWxsfVxuICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAge3RoaXMucHJvcHMuZXh0ZXJuYWx9XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInYtbW9kYWwtc2hhZG93XCIgb25DbGljaz17dGhpcy5vbkNsaWNrT3ZlcmxheX0gLz5cbiAgICAgICAgICA8L1dyYXBwZXI+XG4gICAgICAgIDwvQ1NTVHJhbnNpdGlvbj5cbiAgICAgICksIHRoaXMuZWxlbWVudCk7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY3JlYXRlUG9ydGFsIH0gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBDU1NUcmFuc2l0aW9uIGZyb20gJ3JlYWN0LXRyYW5zaXRpb24tZ3JvdXAvQ1NTVHJhbnNpdGlvbic7XG5pbXBvcnQgVHJhbnNpdGlvbkdyb3VwIGZyb20gJ3JlYWN0LXRyYW5zaXRpb24tZ3JvdXAvVHJhbnNpdGlvbkdyb3VwJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5pbXBvcnQgQm94IGZyb20gJy4uL0JveCc7XG5pbXBvcnQgeyBDb2xvclR5cGUgfSBmcm9tICcuLi8uLi90eXBlcyc7XG5cbnR5cGUgUG9zaXRpb25UeXBlID0gJ3RvcCcgfCAndG9wLWxlZnQnIHwgJ3RvcC1yaWdodCcgfCAnYm90dG9tJyB8ICdib3R0b20tbGVmdCcgfCAnYm90dG9tLXJpZ2h0JztcblxuaW50ZXJmYWNlIFRvYXN0VHlwZSB7XG4gIC8qKiDoqo3orZhJRCAqL1xuICBpZDogc3RyaW5nO1xuICAvKiog6KGo56S644GZ44KL5YaF5a65ICovXG4gIG1lc3NhZ2U/OiBSZWFjdC5SZWFjdE5vZGU7XG4gIC8qKiDog4zmma/jga7oibIgKi9cbiAgY29sb3I/OiBDb2xvclR5cGU7XG4gIC8qKiDooajnpLrjgZXjgozjgovmmYLplpMgbnVsbOOBruWgtOWQiOOBr+iHquWLleOBp+mWieOBmOOCieOCjOOBvuOBm+OCkyAqL1xuICBkdXJhdGlvbj86IG51bWJlciB8IG51bGw7XG59XG5cbmludGVyZmFjZSBUb2FzdFByb3BzIGV4dGVuZHMgVG9hc3RUeXBlIHtcbiAgY2xlYXI6ICgpID0+IHZvaWQ7XG59XG5cbmNvbnN0IFdyYXBwZXIgPSBzdHlsZWQoQm94KWBcbiAgcGFkZGluZzogMC4zNzVlbSAwLjc1ZW07XG4gIG1heC13aWR0aDogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgei1pbmRleDogOTk5OTtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xuXG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybSwgb3BhY2l0eTtcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKTtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMjUwbXM7XG5cbiAgJi5tb3ZlLWVudGVyIHtcbiAgICBvcGFjaXR5OiAwLjAxO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC44KTtcbiAgfVxuICAmLm1vdmUtZW50ZXItYWN0aXZlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIH1cbiAgJi5tb3ZlLWV4aXQge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgfVxuICAmLm1vdmUtZXhpdC1hY3RpdmUge1xuICAgIG9wYWNpdHk6IDAuMDE7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjgpO1xuICB9XG5gO1xuXG5leHBvcnQgY2xhc3MgVG9hc3RJdGVtIGV4dGVuZHMgUHVyZUNvbXBvbmVudDxUb2FzdFByb3BzPiB7XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgZHVyYXRpb246IDUwMDAsXG4gIH07XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgaWYgKHRoaXMucHJvcHMuZHVyYXRpb24gIT09IG51bGwpIHtcbiAgICAgIHNldFRpbWVvdXQodGhpcy5wcm9wcy5jbGVhciwgdGhpcy5wcm9wcy5kdXJhdGlvbik7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgbWVzc2FnZSwgY29sb3IgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxXcmFwcGVyIGJvcmRlcmxlc3MgY29sb3I9e2NvbG9yfT5cbiAgICAgICAge21lc3NhZ2V9XG4gICAgICA8L1dyYXBwZXI+XG4gICAgKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBzZXRQb3NpdGlvbihwb3NpdGlvbjogc3RyaW5nLCBpc0ZpeGVkPzogYm9vbGVhbikge1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgY29uc3QgYmFzZSA9IGBwb3NpdGlvbjogJHtpc0ZpeGVkID8gJ2ZpeGVkJyA6ICdhYnNvbHV0ZSd9OyB6LWluZGV4OiA5OTk5OyBkaXNwbGF5OiBmbGV4OyBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBgO1xuICBzd2l0Y2ggKHBvc2l0aW9uKSB7XG4gICAgY2FzZSAnYm90dG9tJzoge1xuICAgICAgcmV0dXJuIGAke2Jhc2V9IGJvdHRvbTogMXJlbTsgbGVmdDogNTAlOyBhbGlnbi1pdGVtOiBjZW50ZXI7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtgO1xuICAgIH1cbiAgICBjYXNlICdib3R0b20tbGVmdCc6IHtcbiAgICAgIHJldHVybiBgJHtiYXNlfSBib3R0b206IDFyZW07IGxlZnQ6IDFyZW07IGFsaWduLWl0ZW06IGZsZXgtc3RhcnQ7YDtcbiAgICB9XG4gICAgY2FzZSAnYm90dG9tLXJpZ2h0Jzoge1xuICAgICAgcmV0dXJuIGAke2Jhc2V9IGJvdHRvbTogMXJlbTsgcmlnaHQ6IDFyZW07IGFsaWduLWl0ZW06IGZsZXgtZW5kO2A7XG4gICAgfVxuICAgIGNhc2UgJ3RvcCc6IHtcbiAgICAgIHJldHVybiBgJHtiYXNlfSB0b3A6IDFyZW07IGxlZnQ6IDUwJTsgYWxpZ24taXRlbTogY2VudGVyOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7YDtcbiAgICB9XG4gICAgY2FzZSAndG9wLWxlZnQnOiB7XG4gICAgICByZXR1cm4gYCR7YmFzZX0gdG9wOiAxcmVtOyBsZWZ0OiAxcmVtOyBhbGlnbi1pdGVtOiBmbGV4LXN0YXJ0O2A7XG4gICAgfVxuICAgIGNhc2UgJ3RvcC1yaWdodCc6XG4gICAgZGVmYXVsdDoge1xuICAgICAgcmV0dXJuIGAke2Jhc2V9IHRvcDogMXJlbTsgcmlnaHQ6IDFyZW07IGFsaWduLWl0ZW06IGZsZXgtZW5kO2A7XG4gICAgfVxuICB9XG59XG5cbmludGVyZmFjZSBDb250YWluZXJQcm9wcyB7XG4gIC8qKiDooajnpLrjgZnjgotUb2FzdOOBruODquOCueODiCAqL1xuICB0b2FzdHM6IFRvYXN0VHlwZVtdO1xuICAvKiogdG9hc3TjgpLmtojjgZnjgr/jgqTjg5/jg7PjgrDjga7jgrPjg7zjg6vjg5Djg4Pjgq8gKi9cbiAgY2xlYXI6IChpZDogc3RyaW5nKSA9PiB2b2lkO1xuICAvKiogdG9wLCB0b3AtcmlnaHQsIHRvcC1sZWZ0LCBib3R0b20sIGJvdHRvbS1yaWdodCwgYm90dG9tLWxlZnQgKi9cbiAgcG9zaXRpb24/OiBQb3NpdGlvblR5cGU7XG4gIC8qKiDjgrnjgq/jg63jg7zjg6vjgZfjgabjgoLlm7rlrprjgajjgZfjgabooajnpLrjgZnjgosgKi9cbiAgZml4ZWQ/OiBib29sZWFuO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb2FzdENvbnRhaW5lciBleHRlbmRzIENvbXBvbmVudDxDb250YWluZXJQcm9wcz4ge1xuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIHRvYXN0czogW10sXG4gICAgcG9zaXRpb246ICd0b3AtcmlnaHQnLFxuICAgIGZpeGVkOiBmYWxzZSxcbiAgfTtcblxuICBzaG91bGRDb21wb25lbnRVcGRhdGUocHJvcHM6IENvbnRhaW5lclByb3BzKSB7XG4gICAgcmV0dXJuIHByb3BzLnRvYXN0cy5sZW5ndGggIT09IHRoaXMucHJvcHMudG9hc3RzLmxlbmd0aCB8fFxuICAgICAgcHJvcHMucG9zaXRpb24gIT09IHRoaXMucHJvcHMucG9zaXRpb247XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUocHJvcHM6IENvbnRhaW5lclByb3BzKSB7XG4gICAgaWYgKFxuICAgICAgdGhpcy5lbGVtZW50ICYmXG4gICAgICAocHJvcHMucG9zaXRpb24gIT09IHRoaXMucHJvcHMucG9zaXRpb24gfHwgcHJvcHMuZml4ZWQgIT09IHRoaXMucHJvcHMuZml4ZWQpXG4gICAgKSB7XG4gICAgICB0aGlzLmVsZW1lbnQuc3R5bGUuY3NzVGV4dCA9IHNldFBvc2l0aW9uKHRoaXMucHJvcHMucG9zaXRpb24hLCB0aGlzLnByb3BzLmZpeGVkKTtcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICBpZiAodGhpcy5lbGVtZW50KSBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHRoaXMuZWxlbWVudCk7XG4gIH1cblxuICBjbGVhciA9IChpZDogc3RyaW5nKSA9PiAoKSA9PiB7XG4gICAgdGhpcy5wcm9wcy5jbGVhcihpZCk7XG4gIH1cblxuICByZW5kZXJUb2FzdCA9ICgpID0+IHtcbiAgICBjb25zdCB7IHRvYXN0cyB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPFRyYW5zaXRpb25Hcm91cCBjb21wb25lbnQ9e251bGx9PlxuICAgICAgICB7dG9hc3RzLm1hcChwcm9wcyA9PiAoXG4gICAgICAgICAgPENTU1RyYW5zaXRpb25cbiAgICAgICAgICAgIGtleT17cHJvcHMuaWR9XG4gICAgICAgICAgICB0aW1lb3V0PXsyNTB9XG4gICAgICAgICAgICBjbGFzc05hbWVzPVwibW92ZVwiXG4gICAgICAgICAgICB1bm1vdW50T25FeGl0XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPFRvYXN0SXRlbVxuICAgICAgICAgICAgICBrZXk9e3Byb3BzLmlkfVxuICAgICAgICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAgICAgICAgIGNsZWFyPXt0aGlzLmNsZWFyKHByb3BzLmlkKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9DU1NUcmFuc2l0aW9uPlxuICAgICAgICApKX1cbiAgICAgIDwvVHJhbnNpdGlvbkdyb3VwPlxuICAgICk7XG4gIH1cblxuICBlbGVtZW50PzogSFRNTERpdkVsZW1lbnQ7XG5cbiAgcmVuZGVyKCk6IFJlYWN0LlJlYWN0UG9ydGFsIHwgbnVsbCB7XG4gICAgaWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcgJiYgIXRoaXMuZWxlbWVudCkge1xuICAgICAgdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICB0aGlzLmVsZW1lbnQuc3R5bGUuY3NzVGV4dCA9IHNldFBvc2l0aW9uKHRoaXMucHJvcHMucG9zaXRpb24hLCB0aGlzLnByb3BzLmZpeGVkKTtcbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5lbGVtZW50KTtcbiAgICB9XG5cblxuICAgIGlmICh0aGlzLmVsZW1lbnQpIHtcbiAgICAgIHJldHVybiBjcmVhdGVQb3J0YWwodGhpcy5yZW5kZXJUb2FzdCgpLCB0aGlzLmVsZW1lbnQpO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBDaGlsZHJlbiwgQ1NTUHJvcGVydGllcyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHNldEFsaWduIGZyb20gJy4uLy4uL3V0aWxzL3NldEFsaWduJztcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vQnV0dG9uJztcbmltcG9ydCB7IENvbG9yVHlwZSwgVGhlbWVUeXBlLCBBbGlnblR5cGUgfSBmcm9tICcuLi8uLi90eXBlcyc7XG5cbmNvbnN0IFdyYXBwZXIgPSBzdHlsZWQubmF2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6ICR7c2V0QWxpZ259O1xuXG4gIC50YWItY29udGVudCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgJHsoeyBhbGlnbiB9KSA9PiBhbGlnbiA/ICcnIDogJ2ZsZXgtZ3JvdzogMTsnfVxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgfVxuYDtcblxuaW50ZXJmYWNlIEl0ZW1Qcm9wcyB7XG4gIGFsaWduPzogYW55O1xuICBhY3RpdmU6IGJvb2xlYW47XG59XG5cbmNvbnN0IFRhYkl0ZW0gPSBzdHlsZWQuZGl2PEl0ZW1Qcm9wcz5gXG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmbGV4LWdyb3c6IDE7XG4gIGN1cnNvcjogcG9pbnRlcjtcblxuICBhIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnRleHR9O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICBwYWRkaW5nOiAwLjM3NWVtIDAuNzVlbTtcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XG5cbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBiYWNrZ3JvdW5kLWNvbG9yO1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDE1MG1zO1xuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcblxuICAgICY6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjAzKTtcbiAgICB9XG4gIH1cbmA7XG5cbmZ1bmN0aW9uIHNldENvbG9yKHsgdGhlbWUsIGNvbG9yIH06IHsgdGhlbWU6IFRoZW1lVHlwZSwgY29sb3I/OiBDb2xvclR5cGUgfSkge1xuICByZXR1cm4gIWNvbG9yID8gdGhlbWUuYmFja2dyb3VuZCA6IHRoZW1lW2NvbG9yXTtcbn1cblxuaW50ZXJmYWNlIEluZGljYXRvclByb3BzIHtcbiAgY29sb3I/OiBDb2xvclR5cGU7XG4gIHN0eWxlPzogQ1NTUHJvcGVydGllcztcbn1cblxuY29uc3QgSW5kaWNhdG9yID0gc3R5bGVkLmRpdjxJbmRpY2F0b3JQcm9wcz5gXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAke3NldENvbG9yfTtcbiAgaGVpZ2h0OiAycHg7XG5cbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0O1xuXG4gIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm07XG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybTtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMjAwbXM7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSk7XG5gO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICAvKiog6Imy5oyH5a6aICovXG4gIGNvbG9yPzogQ29sb3JUeXBlO1xuICAvKiogbGVmdCB8IHJpZ2h0IHwgY2VudGVyICovXG4gIGFsaWduPzogQWxpZ25UeXBlO1xuICAvKiog5LiA5rCX44Gr6KGo56S644GZ44KL5pyA5aSn44Gu5pWw44Gu5oyH5a6aICovXG4gIG1heEl0ZW1zPzogbnVtYmVyO1xuXG4gIGNoaWxkcmVuOiBhbnk7XG59XG5cbmludGVyZmFjZSBTdGF0ZSB7XG4gIHN0YXJ0OiBudW1iZXI7XG4gIGN1cnJlbnQ/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhYnMgZXh0ZW5kcyBDb21wb25lbnQ8UHJvcHM+IHtcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBtYXhJdGVtczogNSxcbiAgfVxuXG4gIHN0YXRpYyBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMocHJvcHM6IFByb3BzLCBzdGF0ZTogU3RhdGUpIHtcbiAgICBsZXQgYWN0aXZlSW5kZXg7XG4gICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHByb3BzLmNoaWxkcmVuLmxlbmd0aDsgaSA8IGxlbjsgaSArPSAxKSB7XG4gICAgICBjb25zdCBjaGlsZCA9IHByb3BzLmNoaWxkcmVuW2ldO1xuICAgICAgaWYgKGNoaWxkLnByb3BzLmFjdGl2ZSkge1xuICAgICAgICBhY3RpdmVJbmRleCA9IGk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAuLi5zdGF0ZSxcbiAgICAgIGN1cnJlbnQ6IGFjdGl2ZUluZGV4LFxuICAgIH07XG4gIH1cblxuICBzdGF0aWMgSXRlbSA9IFRhYkl0ZW07XG5cbiAgc3RhdGUgPSB7IHN0YXJ0OiAwLCBjdXJyZW50OiBudWxsIH07XG5cbiAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKHByb3BzOiBQcm9wcywgc3RhdGU6IFN0YXRlKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGUuc3RhcnQgIT09IHN0YXRlLnN0YXJ0IHx8XG4gICAgICB0aGlzLnN0YXRlLmN1cnJlbnQgIT09IHN0YXRlLmN1cnJlbnQ7XG4gIH1cblxuICBvbk5leHQgPSAoKSA9PiB7XG4gICAgY29uc3QgdGhyZXNob2xkID0gdGhpcy5wcm9wcy5tYXhJdGVtcyE7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLnN0YXRlLnN0YXJ0ICsgdGhyZXNob2xkO1xuICAgIGNvbnN0IGNvdW50ID0gQ2hpbGRyZW4uY291bnQodGhpcy5wcm9wcy5jaGlsZHJlbilcbiAgICBpZiAodmFsdWUgPCBjb3VudCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHN0YXJ0OiB2YWx1ZSB9KTtcbiAgICB9XG4gIH1cblxuICBvblByZXYgPSAoKSA9PiB7XG4gICAgaWYgKHRoaXMuc3RhdGUuc3RhcnQgPT09IDApIHJldHVybjtcblxuICAgIGNvbnN0IHRocmVzaG9sZCA9IHRoaXMucHJvcHMubWF4SXRlbXMhO1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5zdGF0ZS5zdGFydCAtIHRocmVzaG9sZDtcbiAgICB0aGlzLnNldFN0YXRlKHsgc3RhcnQ6IHZhbHVlIDwgMCA/IDAgOiB2YWx1ZSB9KTtcbiAgfVxuXG4gIGdldEluZGljYXRvclBvc2l0aW9uID0gKCk6IENTU1Byb3BlcnRpZXMgfCB1bmRlZmluZWQgPT4ge1xuICAgIGNvbnN0IHsgY3VycmVudCB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCB7IGNoaWxkcmVuLCBtYXhJdGVtcyB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAoY3VycmVudCA9PT0gbnVsbCB8fCBjdXJyZW50ID09PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWQ7XG4gICAgaWYgKCFjaGlsZHJlbiB8fCAhY2hpbGRyZW4ubGVuZ3RoKSByZXR1cm4gdW5kZWZpbmVkO1xuXG4gICAgY29uc3QgdG90YWwgPSBjaGlsZHJlbi5sZW5ndGggPiBtYXhJdGVtcyEgPyBtYXhJdGVtcyA6IGNoaWxkcmVuLmxlbmd0aDtcbiAgICBjb25zdCB2YWx1ZSA9IChjdXJyZW50ICogMTAwKSArICclJztcblxuICAgIHJldHVybiB7XG4gICAgICB2aXNpYmlsaXR5OiAndmlzaWJsZScsXG4gICAgICB3aWR0aDogYCR7TWF0aC5yb3VuZCgoMTAwIC8gdG90YWwpKX0lYCxcbiAgICAgIHRyYW5zZm9ybTogYHRyYW5zbGF0ZVgoJHt2YWx1ZX0pYFxuICAgIH07XG4gIH1cblxuICAvLyBUT0RPOiBtYWtlIHRhYiBzY3JvbGxhYmxlIHZpYSBhcnJvdyBpY29uc1xuICByZW5kZXJDaGlsZHJlbiA9IChjaGlsZDogUmVhY3QuUmVhY3RDaGlsZCwgaW5kZXg6IG51bWJlcikgPT4ge1xuICAgIGlmICh0aGlzLnN0YXRlLnN0YXJ0ID4gaW5kZXgpIHJldHVybiBudWxsO1xuICAgIGlmICh0aGlzLnN0YXRlLnN0YXJ0ICsgaW5kZXggPj0gdGhpcy5wcm9wcy5tYXhJdGVtcyEpIHJldHVybiBudWxsO1xuICAgIGlmICh0eXBlb2YgY2hpbGQgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiBjaGlsZCA9PT0gJ251bWJlcicpIHJldHVybiBudWxsO1xuXG4gICAgcmV0dXJuIDxUYWJJdGVtIHsuLi5jaGlsZC5wcm9wc30gYWxpZ249e3RoaXMucHJvcHMuYWxpZ259IC8+O1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY2hpbGRyZW4sIGFsaWduLCBjb2xvciwgbWF4SXRlbXMgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBzdGFydCB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCB0b3RhbCA9IGNoaWxkcmVuID8gY2hpbGRyZW4ubGVuZ3RoIDogMDtcbiAgICBjb25zdCBzdHlsZSA9IHRoaXMuZ2V0SW5kaWNhdG9yUG9zaXRpb24oKTtcbiAgICByZXR1cm4gKFxuICAgICAgPFdyYXBwZXIgYWxpZ249e2FsaWdufT5cbiAgICAgICAge3N0YXJ0ID4gbWF4SXRlbXMhICYmICg8QnV0dG9uIGNvbG9yPVwidGV4dFwiPnsnPCd9PC9CdXR0b24+KX1cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWItY29udGVudFwiPlxuICAgICAgICAgIHtDaGlsZHJlbi5tYXAoY2hpbGRyZW4sIHRoaXMucmVuZGVyQ2hpbGRyZW4pfVxuICAgICAgICAgIDxJbmRpY2F0b3IgY29sb3I9e2NvbG9yfSBzdHlsZT17c3R5bGV9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7dG90YWwgPiBtYXhJdGVtcyEgJiYgc3RhcnQgPiBtYXhJdGVtcyEgJiYgKDxCdXR0b24gY29sb3I9XCJ0ZXh0XCI+eyc+J308L0J1dHRvbj4pfVxuICAgICAgPC9XcmFwcGVyPlxuICAgICk7XG4gIH1cbn07XG4iLCJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCwgSFRNTEF0dHJpYnV0ZXMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBDU1NUcmFuc2l0aW9uIGZyb20gJ3JlYWN0LXRyYW5zaXRpb24tZ3JvdXAvQ1NTVHJhbnNpdGlvbic7XG5pbXBvcnQgeyBDb2xvclR5cGUsIENTU1R5cGUgfSBmcm9tICcuLi8uLi90eXBlcyc7XG5cbmludGVyZmFjZSBMb2FkaW5nUHJvcHMgZXh0ZW5kcyBIVE1MQXR0cmlidXRlczxIVE1MRGl2RWxlbWVudD4ge1xuICAvKiogdHJ1ZeOBruWgtOWQiOmWi+Wni+OBl+OBvuOBmSAqL1xuICBsb2FkaW5nOiBib29sZWFuO1xuICAvKiog44OQ44O844Gu6Imy44Gu5oyH5a6aICovXG4gIGNvbG9yPzogQ29sb3JUeXBlO1xuICAvKiog44OQ44O844GuQ1NTIHBvc2l0aW9u44Gu5oyH5a6aICovXG4gIHBvc2l0aW9uPzogJ2Fic29sdXRlJyB8ICdmaXhlZCcgfCAnc3RpY2t5JztcbiAgLyoqIOODkOODvOOBruiDjOaZr+OBruiJsuOBruiHqueUseaMh+WumiAqL1xuICBiYWNrZ3JvdW5kPzogc3RyaW5nO1xuICAvKiog44OQ44O844Gu57im5bmF44Gu5a6a576pICovXG4gIHNpemU/OiBzdHJpbmc7XG4gIC8qKiDjg5Djg7zjga7jgqLjg4vjg6Hjg7zjgrfjg6fjg7Pjga5kdXJhdGlvbuaMh+WumiAo5Y2Y5L2N77yabXMpICovXG4gIGR1cmF0aW9uPzogbnVtYmVyO1xuICBjc3M/OiBDU1NUeXBlO1xufVxuXG5jb25zdCBXcmFwcGVyID0gc3R5bGVkLmRpdjxMb2FkaW5nUHJvcHM+YFxuICBwb3NpdGlvbjogJHsoeyBwb3NpdGlvbiB9KSA9PiBwb3NpdGlvbn07XG4gIGJhY2tncm91bmQtY29sb3I6ICR7KHsgYmFja2dyb3VuZCB9KSA9PiBiYWNrZ3JvdW5kfTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcblxuICAubG9hZGluZy1iYXIge1xuICAgIGhlaWdodDogJHsoeyBzaXplIH0pID0+IHNpemV9O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR7KHsgY29sb3IsIHRoZW1lIH0pID0+IHRoZW1lW2NvbG9yIV19O1xuXG4gICAgd2lsbC1jaGFuZ2U6IHdpZHRoLCBvcGFjaXR5O1xuICAgIHotaW5kZXg6IDEwMDAwMDA7XG5cbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiB3aWR0aCwgb3BhY2l0eTtcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAkeyh7IGR1cmF0aW9uIH0pID0+IGR1cmF0aW9ufW1zO1xuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XG5cbiAgICAmLmxvYWQtZW50ZXIge1xuICAgICAgd2lkdGg6IDA7XG4gICAgfVxuXG4gICAgJi5sb2FkLWVudGVyLWRvbmUge1xuICAgICAgd2lkdGg6IDg1JTtcbiAgICB9XG5cbiAgICAmLmxvYWQtZXhpdCB7XG4gICAgICB3aWR0aDogODUlO1xuICAgIH1cblxuICAgICYubG9hZC1leGl0LWFjdGl2ZSB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuICB9XG5cbiAgJHsoeyBjc3MgfSkgPT4gY3NzIHx8IHt9fVxuYDtcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2FkaW5nQmFyIGV4dGVuZHMgUHVyZUNvbXBvbmVudDxMb2FkaW5nUHJvcHM+IHtcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICBjb2xvcjogJ3ByaW1hcnknLFxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIGJhY2tncm91bmQ6ICd0cmFuc3BhcmVudCcsXG4gICAgc2l6ZTogJzNweCcsXG4gICAgZHVyYXRpb246IDE1MCxcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPFdyYXBwZXIgey4uLnRoaXMucHJvcHN9PlxuICAgICAgICA8Q1NTVHJhbnNpdGlvblxuICAgICAgICAgIGNsYXNzTmFtZXM9XCJsb2FkXCJcbiAgICAgICAgICB0aW1lb3V0PXt0aGlzLnByb3BzLmR1cmF0aW9uIX1cbiAgICAgICAgICBpbj17dGhpcy5wcm9wcy5sb2FkaW5nfVxuICAgICAgICAgIHVubW91bnRPbkV4aXRcbiAgICAgICAgPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9hZGluZy1iYXJcIiAvPlxuICAgICAgICA8L0NTU1RyYW5zaXRpb24+XG4gICAgICA8L1dyYXBwZXI+XG4gICAgKTtcbiAgfVxufVxuIiwiaW1wb3J0IFJlYWN0LCB7IEhUTUxBdHRyaWJ1dGVzIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCwgeyBjc3MsIGtleWZyYW1lcyB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7IENvbG9yVHlwZSwgVGhlbWVUeXBlIH0gZnJvbSAnLi4vLi4vdHlwZXMnO1xuXG5pbnRlcmZhY2UgUHJvcHMgZXh0ZW5kcyBIVE1MQXR0cmlidXRlczxIVE1MRGl2RWxlbWVudD57XG4gIC8qKiDoibLjga7mjIflrpogKi9cbiAgY29sb3I/OiBDb2xvclR5cGU7XG4gIC8qKiDmqKrluYUgKi9cbiAgd2lkdGg/OiBzdHJpbmc7XG4gIC8qKiDnuKbluYUgKi9cbiAgaGVpZ2h0Pzogc3RyaW5nO1xuICAvKiogc3Bpbm5lcuOBruWkquOBlSAqL1xuICBib3JkZXJTaXplPzogc3RyaW5nO1xufVxuXG5mdW5jdGlvbiBnZXRDb2xvcih7IHRoZW1lLCBjb2xvciB9OiB7IHRoZW1lOiBUaGVtZVR5cGUsIGNvbG9yPzogQ29sb3JUeXBlIH0pIHtcbiAgY29uc3QgdmFsdWUgPSAoIWNvbG9yIHx8IGNvbG9yID09PSAnbGlnaHQnKSA/IHRoZW1lLmJhY2tncm91bmQgOiB0aGVtZVtjb2xvcl07XG5cbiAgcmV0dXJuIGNzc2BcbiAgICBib3JkZXItY29sb3I6ICR7dmFsdWV9O1xuICAgIGJvcmRlci1yaWdodC1jb2xvcjogJHt0aGVtZS5ib3JkZXJ9O1xuICAgIGJvcmRlci10b3AtY29sb3I6ICR7dGhlbWUuYm9yZGVyfTtcbiAgYDtcbn1cblxuY29uc3Qgc3BpbiA9IGtleWZyYW1lc2BcbiAgZnJvbSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIH1cbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM1OWRlZyk7XG4gIH1cbmA7XG5cbmNvbnN0IFNwaW5uZXIgPSBzdHlsZWQuZGl2PFByb3BzPmBcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogJHsoeyB3aWR0aCB9KSA9PiB3aWR0aCA/IHdpZHRoIDogJzEwMCUnfTtcbiAgaGVpZ2h0OiAkeyh7IGhlaWdodCB9KSA9PiBoZWlnaHQgPyBoZWlnaHQgOiAnMTAwJSd9O1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAmOmFmdGVyIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICBhbmltYXRpb246ICR7c3Bpbn0gNzUwbXMgaW5maW5pdGUgbGluZWFyO1xuICAgIGJvcmRlcjogJHsoeyBib3JkZXJTaXplIH0pID0+IGJvcmRlclNpemV9IHNvbGlkO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgJHtnZXRDb2xvcn1cbiAgICBjb250ZW50OiBcIlwiO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIH1cbmA7XG5TcGlubmVyLmRpc3BsYXlOYW1lID0gJ1NwaW5uZXInO1xuU3Bpbm5lci5kZWZhdWx0UHJvcHMgPSB7XG4gIGJvcmRlclNpemU6ICcycHgnLFxufVxuXG5leHBvcnQgZGVmYXVsdCBTcGlubmVyO1xuIiwiLy8gZ3JpZCAmIGxheW91dFxuZXhwb3J0IHsgZGVmYXVsdCBhcyBCcmVhayB9IGZyb20gJy4vR3JpZC9CcmVhayc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIENvbnRhaW5lciB9IGZyb20gJy4vR3JpZC9Db250YWluZXInO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBSb3cgfSBmcm9tICcuL0dyaWQvUm93JztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQ29sIH0gZnJvbSAnLi9HcmlkL0NvbCc7XG5cblxuLy8gY29tbW9uXG5leHBvcnQgeyBkZWZhdWx0IGFzIENvbnRlbnQgfSBmcm9tICcuL0NvbnRlbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9Db250ZW50JztcblxuZXhwb3J0IHsgZGVmYXVsdCBhcyBCdXR0b24gfSBmcm9tICcuL0J1dHRvbic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEJ1dHRvbkdyb3VwIH0gZnJvbSAnLi9CdXR0b24vQnV0dG9uR3JvdXAnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBUYWJsZSB9IGZyb20gJy4vVGFibGUnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBCb3ggfSBmcm9tICcuL0JveCc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFByb2dyZXNzIH0gZnJvbSAnLi9Qcm9ncmVzcyc7XG5cbi8vIGZvcm1cbmV4cG9ydCAqIGZyb20gJy4vRm9ybSc7XG5cbi8vIGljb25zXG5leHBvcnQgKiBmcm9tICcuL0ljb25zJztcblxuLy8gY29tcG9uZW50c1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBBY2NvcmRpb24gfSBmcm9tICcuL0FjY29yZGlvbic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEFwcEJhciB9IGZyb20gJy4vQXBwQmFyJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgVGFnIH0gZnJvbSAnLi9UYWcnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBIZXJvIH0gZnJvbSAnLi9IZXJvJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgVG9vbHRpcCB9IGZyb20gJy4vVG9vbHRpcCc7XG5leHBvcnQgKiBmcm9tICcuL1NpZGVNZW51JztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQ2FyZCB9IGZyb20gJy4vQ2FyZCc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFBvcG92ZXIgfSBmcm9tICcuL1BvcG92ZXInO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBNb2RhbCB9IGZyb20gJy4vTW9kYWwnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBUb2FzdCB9IGZyb20gJy4vVG9hc3QnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBUYWJzIH0gZnJvbSAnLi9UYWJzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTG9hZGluZ0JhciB9IGZyb20gJy4vTG9hZGluZy9CYXInO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBTcGlubmVyIH0gZnJvbSAnLi9Mb2FkaW5nL1NwaW5uZXInO1xuIiwiaW1wb3J0IHsgVGhlbWVUeXBlIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5cbmNvbnN0IHRoZW1lOiBUaGVtZVR5cGUgPSB7XG4gIGZvbnRGYW1pbHk6ICfjg5Ljg6njgq7jg47op5LjgrTjgrfjg4Pjgq8sXCLjg5Ljg6njgq7jg47op5LjgrQgUHJvTiBXM1wiLOODoeOCpOODquOCqixNZWlyeW8sXCLvvK3vvLMg77yw44K044K344OD44KvXCIsXCJNUyBQR290aGljXCIsc2Fucy1zZXJpZicsXG4gIGZvbnRTaXplOiAnMTZweCcsXG5cbiAgcmVzcG9uc2l2ZTogdHJ1ZSxcbiAgZ3V0dGVyOiAyNCxcbiAgc21hbGxHdXR0ZXI6IDE2LFxuICBib3hTaGFkb3c6ICcwIDFweCAycHggMCByZ2JhKDAsIDAsIDAsIDAuMDUpJyxcblxuICBtb2JpbGU6IDU3NixcbiAgdGFibGV0OiA3NjksXG4gIGRlc2t0b3A6IDk2MCxcbiAgZnVsbGhkOiAxMzQ0LFxuXG4gIHJhZGl1czogNCxcblxuICBwcmltYXJ5OiAnIzM3QjE1MScsXG4gIGxpbms6ICcjNTc4YmE5JyxcbiAgaW5mbzogJyMyMDljZWUnLFxuICBzdWNjZXNzOiAnIzBmYTg4NicsXG4gIHdhcm5pbmc6ICcjZjJiNTQxJyxcbiAgZGFuZ2VyOiAnI2YzNTc1YScsXG4gIGRhcms6ICcjMzYzNjM2JyxcbiAgbGlnaHQ6ICcjOWI5YjliJyxcblxuICBibGFjazogJyMwYTBhMGEnLFxuICBibGFja0JpczogJyMxMjEyMTInLFxuICBibGFja1RlcjogJyMyNDI0MjQnLFxuXG4gIHdoaXRlOiAnI2ZmZmZmZicsXG4gIHdoaXRlQmlzOiAnI2ZhZmFmYScsXG4gIHdoaXRlVGVyOiAnI2Y1ZjVmNScsXG5cbiAgZ3JleTogJyM3YTdhN2EnLFxuICBncmV5TGlnaHQ6ICcjOWI5YjliJyxcbiAgZ3JleUxpZ2h0ZXI6ICcjZGJkYmRiJyxcblxuICB0ZXh0OiAnIzRhNGE0YScsXG4gIHRleHREYXJrOiAnIzRhNGE0YScsXG4gIHRleHRMaWdodDogJyM3YTdhN2EnLFxuICB0ZXh0U3Ryb25nOiAnIzRhNGE0YScsXG5cbiAgYmFja2dyb3VuZDogJyNmNWY1ZjUnLFxuXG4gIGJvcmRlcjogJyNkYmRiZGInLFxuICBib3JkZXJIb3ZlcjogJyM5YjliOWInLFxuICBib3JkZXJBY3RpdmU6ICcjNGE0YTRhJyxcblxuICBwbGFjZWhvbGRlcjogJyM3YTdhN2EnLFxufTtcblxuXG5leHBvcnQgZGVmYXVsdCB0aGVtZTtcbiIsImltcG9ydCB7IGNzcyB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuLyohIGJhc2VkIG9uIG5vcm1hbGl6ZS5jc3MgdjguMC4wIHwgTUlUIExpY2Vuc2UgfCBnaXRodWIuY29tL25lY29sYXMvbm9ybWFsaXplLmNzcyAqL1xuY29uc3Qgbm9ybWFsaXplZDogYW55ID0gY3NzYFxuICAqLCA6OmFmdGVyLCA6OmJlZm9yZSB7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgfVxuXG4gIGh0bWwge1xuICAgIGxpbmUtaGVpZ2h0OiAxLjE1O1xuICAgIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTtcbiAgICAtbXMtb3ZlcmZsb3ctc3R5bGU6IHNjcm9sbGJhcjtcbiAgfVxuXG4gIGJvZHkge1xuICAgIG1hcmdpbjogMDtcbiAgICBmb250LWZhbWlseTogJHsoeyB0aGVtZSB9OiBhbnkpID0+IHRoZW1lID8gdGhlbWUuZm9udEZhbWlseSA6ICdcIkhpcmFnaW5vIFNhbnNcIiwg44OS44Op44Ku44OO6KeS44K044K344OD44KvLCBcIkhpcmFnaW5vIEtha3UgR290aGljIFByb05cIiwgXCLjg5Ljg6njgq7jg47op5LjgrQgUHJvTiBXM1wiLCDmuLjjgrTjgrfjg4Pjgq/kvZMsIFwiWXUgR290aGljXCIsIFl1R290aGljLCBcIuODkuODqeOCruODjuinkuOCtOOCt+ODg+OCryBQcm9cIiwgSGlyYUtha3VQcm8tVzMsIFwiSGlyYWdpbm8gS2FrdSBHb3RoaWMgUHJvXCIsIFF1aWNrc2FuZCwg44Oh44Kk44Oq44KqLCBNZWlyeW8sIE9zYWthLCBcIu+8re+8syDvvLDjgrTjgrfjg4Pjgq9cIiwgXCJNUyBQR290aGljXCIsIHNhbnMtc2VyaWYnfTs7XG4gICAgZm9udC1zaXplOiAkeyh7IHRoZW1lIH06IGFueSkgPT4gdGhlbWUgPyB0aGVtZS5mb250U2l6ZSA6ICcxNnB4J307XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgfVxuXG4gIGgxIHtcbiAgICBmb250LXNpemU6IDJlbTtcbiAgICBtYXJnaW46IC42N2VtIDA7XG4gIH1cblxuICBociB7XG4gICAgYm94LXNpemluZzogY29udGVudC1ib3g7XG4gICAgaGVpZ2h0OiAwO1xuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xuICB9XG5cbiAgcHJlIHtcbiAgICBmb250LWZhbWlseTogbW9ub3NwYWNlLG1vbm9zcGFjZTtcbiAgICBmb250LXNpemU6IDFlbTtcbiAgfVxuXG4gIGEge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGNvbG9yOiAkeyh7IHRoZW1lIH06IGFueSkgPT4gdGhlbWUubGlua307XG4gIH1cblxuICBhYmJyW3RpdGxlXSB7XG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSBkb3R0ZWQ7XG4gIH1cblxuICBiLHN0cm9uZyB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgfVxuXG4gIGNvZGUsa2JkLHNhbXAge1xuICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsbW9ub3NwYWNlO1xuICAgIGZvbnQtc2l6ZTogMWVtO1xuICB9XG5cbiAgc21hbGwge1xuICAgIGZvbnQtc2l6ZTogODAlO1xuICB9XG5cbiAgc3ViLHN1cCB7XG4gICAgZm9udC1zaXplOiA3NSU7XG4gICAgbGluZS1oZWlnaHQ6IDA7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbiAgfVxuXG4gIHN1YiB7XG4gICAgYm90dG9tOiAtLjI1ZW07XG4gIH1cblxuICBzdXAge1xuICAgIHRvcDogLS41ZW07XG4gIH1cblxuICBpbWcge1xuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcbiAgfVxuXG4gIGJ1dHRvbixpbnB1dCxvcHRncm91cCxzZWxlY3QsdGV4dGFyZWEge1xuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICAgIGZvbnQtc2l6ZTogMTAwJTtcbiAgICBsaW5lLWhlaWdodDogMS4xNTtcbiAgICBtYXJnaW46IDA7XG4gIH1cblxuICBidXR0b24saW5wdXQge1xuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xuICB9XG5cbiAgYnV0dG9uLHNlbGVjdCB7XG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIH1cblxuICBbdHlwZT1idXR0b25dLFt0eXBlPXJlc2V0XSxbdHlwZT1zdWJtaXRdLGJ1dHRvbiB7XG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247XG4gIH1cblxuICBbdHlwZT1idXR0b25dOjotbW96LWZvY3VzLWlubmVyLFt0eXBlPXJlc2V0XTo6LW1vei1mb2N1cy1pbm5lcixbdHlwZT1zdWJtaXRdOjotbW96LWZvY3VzLWlubmVyLGJ1dHRvbjo6LW1vei1mb2N1cy1pbm5lciB7XG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cblxuICBbdHlwZT1idXR0b25dOi1tb3otZm9jdXNyaW5nLFt0eXBlPXJlc2V0XTotbW96LWZvY3VzcmluZyxbdHlwZT1zdWJtaXRdOi1tb3otZm9jdXNyaW5nLGJ1dHRvbjotbW96LWZvY3VzcmluZyB7XG4gICAgb3V0bGluZTogMXB4IGRvdHRlZCBCdXR0b25UZXh0O1xuICB9XG5cbiAgaW5wdXRbdHlwZT1kYXRlXSxcbiAgaW5wdXRbdHlwZT10aW1lXSxcbiAgaW5wdXRbdHlwZT1kYXRldGltZS1sb2NhbF0sXG4gIGlucHV0W3R5cGU9bW9udGhdIHtcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IGxpc3Rib3g7XG4gIH1cblxuICBmaWVsZHNldCB7XG4gICAgcGFkZGluZzogLjM1ZW0gLjc1ZW0gLjYyNWVtO1xuICB9XG5cbiAgbGVnZW5kIHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGNvbG9yOiBpbmhlcml0O1xuICAgIGRpc3BsYXk6IHRhYmxlO1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAwO1xuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gIH1cblxuICBwcm9ncmVzcyB7XG4gICAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xuICAgIHJlc2l6ZTogdmVydGljYWw7XG4gIH1cblxuICB0ZXh0YXJlYSB7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gIH1cblxuICBbdHlwZT1jaGVja2JveF0sW3R5cGU9cmFkaW9dIHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cblxuICBbdHlwZT1udW1iZXJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFt0eXBlPW51bWJlcl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xuICAgIGhlaWdodDogYXV0bztcbiAgfVxuXG4gIFt0eXBlPXNlYXJjaF0ge1xuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogdGV4dGZpZWxkO1xuICAgIG91dGxpbmUtb2Zmc2V0OiAtMnB4O1xuICB9XG5cbiAgW3R5cGU9c2VhcmNoXTo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbiB7XG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICB9XG5cbiAgOjotd2Via2l0LWZpbGUtdXBsb2FkLWJ1dHRvbiB7XG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247XG4gICAgZm9udDogaW5oZXJpdDtcbiAgfVxuXG4gIGRldGFpbHMge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG5cbiAgc3VtbWFyeSB7XG4gICAgZGlzcGxheTogbGlzdC1pdGVtO1xuICB9XG5cbiAgdGVtcGxhdGUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICBbaGlkZGVuXSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIGJsb2NrcXVvdGUsIGJvZHksIGRkLCBkbCwgZHQsIGZpZWxkc2V0LCBmaWd1cmUsIGgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIGhyLCBodG1sLCBpZnJhbWUsIGxlZ2VuZCwgbGksIG9sLCBwLCBwcmUsIHRleHRhcmVhLCB1bCB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cblxuICBidXR0b24ge1xuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgfVxuXG4gIGFydGljbGUsIGFzaWRlLCBmaWd1cmUsXG4gIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIHNlY3Rpb24ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG5cbiAgaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdLCBpbnB1dFt0eXBlPVwicmFkaW9cIl0ge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgcGFkZGluZzogMDtcbiAgfVxuXG4gIGEge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY29sb3I6ICMzMjczZGM7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIGNvbG9yOiBjdXJyZW50Q29sb3I7XG4gICAgfVxuICB9XG5cbiAgaW1nIHtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcbiAgfVxuXG4gIHN2ZyB7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB9XG5cbiAgc21hbGwge1xuICAgIGZvbnQtc2l6ZTogLjg3NWVtO1xuICB9XG5cbiAgc3BhbiB7XG4gICAgZm9udC1zdHlsZTogaW5oZXJpdDtcbiAgICBmb250LXdlaWdodDogaW5oZXJpdDtcbiAgfVxuXG4gIHN0cm9uZyB7XG4gICAgY29sb3I6ICMzNjM2MzY7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgfVxuXG4gIHRhYmxlIHtcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICAgIGJvcmRlci1zcGFjaW5nOiAwO1xuICB9XG5cbiAgdGgge1xuICAgIHRleHQtYWxpZ246IGluaGVyaXQ7XG4gIH1cblxuICB1bCB7XG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBub3JtYWxpemVkO1xuIl0sIm5hbWVzIjpbIkJyZWFrIiwid2lkdGgiLCJoZWlnaHQiLCJtZWRpYU1vYmlsZSIsInRoZW1lIiwicmVzcG9uc2l2ZSIsIm1vYmlsZSIsIm1lZGlhVGFibGV0IiwidGFibGV0IiwibWVkaWFEZXNrdG9wIiwiZGVza3RvcCIsIm1lZGlhRnVsbEhEIiwiZnVsbGhkIiwibWVkaWFVbnRpbEZ1bGxIRCIsInNldFJlc3BvbnNpdmUiLCJmbHVpZCIsImNzcyIsImd1dHRlciIsInNtYWxsR3V0dGVyIiwiQ29udGFpbmVyIiwic3R5bGVkIiwiZGl2IiwiZGlzcGxheU5hbWUiLCJkZWZhdWx0UHJvcHMiLCJwYXJjZW50YWdlIiwidmFsdWUiLCJNYXRoIiwiY2VpbCIsInJlbmRlclNpemUiLCJzaXplIiwibmFycm93IiwiYXV0byIsIm9mZnNldCIsIm9mZlZhbCIsImF1dG9TaXplIiwiQ29sIiwicmVuZGVyR3V0dGVyIiwibm9HdXR0ZXIiLCJSb3ciLCJ2Y2VudGVyIiwiY2VudGVyIiwiUHJlIiwicHJlIiwiQ29kZSIsImNvZGUiLCJiYWNrZ3JvdW5kIiwiZGFuZ2VyIiwiSDEiLCJoMSIsImJvcmRlciIsIkNvbnRlbnQiLCJ0ZXh0IiwiX2hzbFRvUmdiIiwicmVxdWlyZSQkMCIsIl9uYW1lVG9IZXgiLCJyZXF1aXJlJCQxIiwiX2Vycm9ycyIsInJlcXVpcmUkJDIiLCJfcmdiVG9Ic2wiLCJfcmVkdWNlSGV4VmFsdWUiLCJfbnVtYmVyVG9IZXgiLCJfaHNsVG9IZXgiLCJyZXF1aXJlJCQzIiwicmVxdWlyZSQkNCIsIl9jdXJyeSIsIl9ndWFyZCIsImZpbmRDb2xvckludmVydCIsImNvbG9yIiwiYmxhY2siLCJ3aGl0ZSIsImdldEx1bWluYW5jZSIsImJveFNoYWRvdyIsImFtb3VudCIsInNoYWRvd0NvbG9yIiwidHJhbnNwYXJlbnRpemUiLCJzZXRTaXplIiwibmFtZSIsImRpc2FibGVkQ29sb3IiLCJ0ZXh0Q29sb3IiLCJ0ZXh0RGFyayIsImJhY2tDb2xvciIsInNldENvbG9yIiwib3V0bGluZSIsImRpc2FibGVkIiwiYm9yZGVySG92ZXIiLCJib3JkZXJBY3RpdmUiLCJ0YXJnZXQiLCJpbnZlcnRDb2xvciIsImRhcmtlbiIsIkJ1dHRvbiIsImJ1dHRvbiIsImZ1bGwiLCJCdXR0b25Hcm91cCIsInN0cmlwZWRTdHlsZSIsImhvdmVyU3R5bGUiLCJUYWJsZSIsInRhYmxlIiwiYm9yZGVyZWQiLCJzdHJpcGVkIiwiaG92ZXIiLCJoZWFkZXJTdHlsZSIsIkJveCIsImJvcmRlcmxlc3MiLCJXcmFwcGVyIiwibWF4IiwiUHJvZ3Jlc3MiLCJwcm9wcyIsInBlcmNlbnQiLCJyb3VuZCIsIlB1cmVDb21wb25lbnQiLCJyZXF1aXJlZCIsInByaW1hcnkiLCJMYWJlbCIsImxhYmVsIiwidGV4dFN0cm9uZyIsIkZpZWxkIiwiY2hpbGRyZW4iLCJodG1sRm9yIiwicmVzdCIsImhhbWJ1cmdlciIsIkFycm93IiwiZGlyZWN0aW9uIiwiTWVzc2FnZSIsInNwYW4iLCJlcnJvciIsInRleHRMaWdodCIsIkhlbHBNZXNzYWdlIiwiaGVscCIsInJpZ2h0SWNvbiIsImxlZnRJY29uIiwiSWNvbiIsInJpZ2h0IiwicGxhY2Vob2xkZXIiLCJUZXh0SW5wdXQiLCJjbGFzc05hbWUiLCJzdHlsZSIsInR5cGUiLCJtYXhMZW5ndGgiLCJvbkNoYW5nZSIsIlRleHRhcmVhIiwiQ29tcG9uZW50IiwiY29sIiwicm93IiwiQ2hlY2tib3giLCJpZCIsImNoZWNrZWQiLCJJbnB1dFdyYXBwZXIiLCJhcnJvdyIsIlNlbGVjdCIsInJlbmRlciIsIm9wdGlvbnMiLCJtYXAiLCJpdGVtIiwiaWR4IiwicmVuZGVyTGFiZWwiLCJpbnB1dFNpemUiLCJCb29sZWFuIiwicmVuZGVySXRlbSIsIlJhZGlvTGFiZWwiLCJCdXR0b25MYWJlbCIsIlJhZGlvIiwiQXBwcm92ZWQiLCJDaGV2cm9uTGVmdFJvdW5kIiwiQ2hldnJvblJpZ2h0Um91bmQiLCJGaWxlUm91bmQiLCJQZW5jaWwiLCJVc2VyIiwiQ2xvc2UiLCJSZWZyZXNoIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIiwiYiIsIlN5bWJvbCIsImZvciIsImMiLCJkIiwiZSIsImYiLCJnIiwiaCIsImsiLCJsIiwibSIsIm4iLCJwIiwicSIsInIiLCJ0IiwiYSIsInUiLCIkJHR5cGVvZiIsInYiLCJwcm9jZXNzIiwiZW52IiwiTk9ERV9FTlYiLCJoYXNTeW1ib2wiLCJSRUFDVF9FTEVNRU5UX1RZUEUiLCJSRUFDVF9QT1JUQUxfVFlQRSIsIlJFQUNUX0ZSQUdNRU5UX1RZUEUiLCJSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFIiwiUkVBQ1RfUFJPRklMRVJfVFlQRSIsIlJFQUNUX1BST1ZJREVSX1RZUEUiLCJSRUFDVF9DT05URVhUX1RZUEUiLCJSRUFDVF9BU1lOQ19NT0RFX1RZUEUiLCJSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRSIsIlJFQUNUX0ZPUldBUkRfUkVGX1RZUEUiLCJSRUFDVF9TVVNQRU5TRV9UWVBFIiwiUkVBQ1RfTUVNT19UWVBFIiwiUkVBQ1RfTEFaWV9UWVBFIiwiaXNWYWxpZEVsZW1lbnRUeXBlIiwibG93UHJpb3JpdHlXYXJuaW5nIiwicHJpbnRXYXJuaW5nIiwiZm9ybWF0IiwiX2xlbiIsImFyZ3VtZW50cyIsImxlbmd0aCIsImFyZ3MiLCJBcnJheSIsIl9rZXkiLCJhcmdJbmRleCIsIm1lc3NhZ2UiLCJyZXBsYWNlIiwiY29uc29sZSIsIndhcm4iLCJFcnJvciIsIngiLCJjb25kaXRpb24iLCJ1bmRlZmluZWQiLCJfbGVuMiIsIl9rZXkyIiwiYXBwbHkiLCJjb25jYXQiLCJsb3dQcmlvcml0eVdhcm5pbmckMSIsInR5cGVPZiIsIm9iamVjdCIsIiQkdHlwZW9mVHlwZSIsIkFzeW5jTW9kZSIsIkNvbmN1cnJlbnRNb2RlIiwiQ29udGV4dENvbnN1bWVyIiwiQ29udGV4dFByb3ZpZGVyIiwiRWxlbWVudCIsIkZvcndhcmRSZWYiLCJGcmFnbWVudCIsIkxhenkiLCJNZW1vIiwiUG9ydGFsIiwiUHJvZmlsZXIiLCJTdHJpY3RNb2RlIiwiU3VzcGVuc2UiLCJoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0FzeW5jTW9kZSIsImlzQXN5bmNNb2RlIiwiaXNDb25jdXJyZW50TW9kZSIsImlzQ29udGV4dENvbnN1bWVyIiwiaXNDb250ZXh0UHJvdmlkZXIiLCJpc0VsZW1lbnQiLCJpc0ZvcndhcmRSZWYiLCJpc0ZyYWdtZW50IiwiaXNMYXp5IiwiaXNNZW1vIiwiaXNQb3J0YWwiLCJpc1Byb2ZpbGVyIiwiaXNTdHJpY3RNb2RlIiwiaXNTdXNwZW5zZSIsIm1vZHVsZSIsImdldE93blByb3BlcnR5U3ltYm9scyIsImhhc093blByb3BlcnR5IiwicHJvdG90eXBlIiwicHJvcElzRW51bWVyYWJsZSIsInByb3BlcnR5SXNFbnVtZXJhYmxlIiwidG9PYmplY3QiLCJ2YWwiLCJUeXBlRXJyb3IiLCJzaG91bGRVc2VOYXRpdmUiLCJhc3NpZ24iLCJ0ZXN0MSIsIlN0cmluZyIsImdldE93blByb3BlcnR5TmFtZXMiLCJ0ZXN0MiIsImkiLCJmcm9tQ2hhckNvZGUiLCJvcmRlcjIiLCJqb2luIiwidGVzdDMiLCJzcGxpdCIsImZvckVhY2giLCJsZXR0ZXIiLCJrZXlzIiwiZXJyIiwic291cmNlIiwiZnJvbSIsInRvIiwic3ltYm9scyIsInMiLCJrZXkiLCJjYWxsIiwiUmVhY3RQcm9wVHlwZXNTZWNyZXQiLCJsb2dnZWRUeXBlRmFpbHVyZXMiLCJoYXMiLCJGdW5jdGlvbiIsImJpbmQiLCJjaGVja1Byb3BUeXBlcyIsInR5cGVTcGVjcyIsInZhbHVlcyIsImxvY2F0aW9uIiwiY29tcG9uZW50TmFtZSIsImdldFN0YWNrIiwidHlwZVNwZWNOYW1lIiwiZXgiLCJzdGFjayIsInJlc2V0V2FybmluZ0NhY2hlIiwiZW1wdHlGdW5jdGlvblRoYXRSZXR1cm5zTnVsbCIsImlzVmFsaWRFbGVtZW50IiwidGhyb3dPbkRpcmVjdEFjY2VzcyIsIklURVJBVE9SX1NZTUJPTCIsIml0ZXJhdG9yIiwiRkFVWF9JVEVSQVRPUl9TWU1CT0wiLCJnZXRJdGVyYXRvckZuIiwibWF5YmVJdGVyYWJsZSIsIml0ZXJhdG9yRm4iLCJBTk9OWU1PVVMiLCJSZWFjdFByb3BUeXBlcyIsImFycmF5IiwiY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIiLCJib29sIiwiZnVuYyIsIm51bWJlciIsInN0cmluZyIsInN5bWJvbCIsImFueSIsImNyZWF0ZUFueVR5cGVDaGVja2VyIiwiYXJyYXlPZiIsImNyZWF0ZUFycmF5T2ZUeXBlQ2hlY2tlciIsImVsZW1lbnQiLCJjcmVhdGVFbGVtZW50VHlwZUNoZWNrZXIiLCJlbGVtZW50VHlwZSIsImNyZWF0ZUVsZW1lbnRUeXBlVHlwZUNoZWNrZXIiLCJpbnN0YW5jZU9mIiwiY3JlYXRlSW5zdGFuY2VUeXBlQ2hlY2tlciIsIm5vZGUiLCJjcmVhdGVOb2RlQ2hlY2tlciIsIm9iamVjdE9mIiwiY3JlYXRlT2JqZWN0T2ZUeXBlQ2hlY2tlciIsIm9uZU9mIiwiY3JlYXRlRW51bVR5cGVDaGVja2VyIiwib25lT2ZUeXBlIiwiY3JlYXRlVW5pb25UeXBlQ2hlY2tlciIsInNoYXBlIiwiY3JlYXRlU2hhcGVUeXBlQ2hlY2tlciIsImV4YWN0IiwiY3JlYXRlU3RyaWN0U2hhcGVUeXBlQ2hlY2tlciIsImlzIiwieSIsIlByb3BUeXBlRXJyb3IiLCJjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlciIsInZhbGlkYXRlIiwibWFudWFsUHJvcFR5cGVDYWxsQ2FjaGUiLCJtYW51YWxQcm9wVHlwZVdhcm5pbmdDb3VudCIsImNoZWNrVHlwZSIsImlzUmVxdWlyZWQiLCJwcm9wTmFtZSIsInByb3BGdWxsTmFtZSIsInNlY3JldCIsImNhY2hlS2V5IiwiY2hhaW5lZENoZWNrVHlwZSIsImV4cGVjdGVkVHlwZSIsInByb3BWYWx1ZSIsInByb3BUeXBlIiwiZ2V0UHJvcFR5cGUiLCJwcmVjaXNlVHlwZSIsImdldFByZWNpc2VUeXBlIiwidHlwZUNoZWNrZXIiLCJpc0FycmF5IiwiUmVhY3RJcyIsImV4cGVjdGVkQ2xhc3MiLCJleHBlY3RlZENsYXNzTmFtZSIsImFjdHVhbENsYXNzTmFtZSIsImdldENsYXNzTmFtZSIsImV4cGVjdGVkVmFsdWVzIiwidmFsdWVzU3RyaW5nIiwiSlNPTiIsInN0cmluZ2lmeSIsInJlcGxhY2VyIiwiYXJyYXlPZlR5cGVDaGVja2VycyIsImNoZWNrZXIiLCJnZXRQb3N0Zml4Rm9yVHlwZVdhcm5pbmciLCJpc05vZGUiLCJzaGFwZVR5cGVzIiwiYWxsS2V5cyIsImV2ZXJ5Iiwic3RlcCIsImVudHJpZXMiLCJuZXh0IiwiZG9uZSIsImVudHJ5IiwiaXNTeW1ib2wiLCJSZWdFeHAiLCJEYXRlIiwiY29uc3RydWN0b3IiLCJQcm9wVHlwZXMiLCJlbXB0eUZ1bmN0aW9uIiwiZW1wdHlGdW5jdGlvbldpdGhSZXNldCIsInNoaW0iLCJnZXRTaGltIiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsIm9iaiIsIl9fZXNNb2R1bGUiLCJkZWZhdWx0IiwiaGFzQ2xhc3MiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsImJhc2VWYWwiLCJpbmRleE9mIiwiYWRkQ2xhc3MiLCJfaGFzQ2xhc3MiLCJhZGQiLCJzZXRBdHRyaWJ1dGUiLCJyZXBsYWNlQ2xhc3NOYW1lIiwib3JpZ0NsYXNzIiwiY2xhc3NUb1JlbW92ZSIsInJlbW92ZUNsYXNzIiwicmVtb3ZlIiwiY29tcG9uZW50V2lsbE1vdW50Iiwic3RhdGUiLCJnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMiLCJzZXRTdGF0ZSIsImNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMiLCJuZXh0UHJvcHMiLCJ1cGRhdGVyIiwicHJldlN0YXRlIiwiY29tcG9uZW50V2lsbFVwZGF0ZSIsIm5leHRTdGF0ZSIsInByZXZQcm9wcyIsIl9fcmVhY3RJbnRlcm5hbFNuYXBzaG90RmxhZyIsIl9fcmVhY3RJbnRlcm5hbFNuYXBzaG90IiwiZ2V0U25hcHNob3RCZWZvcmVVcGRhdGUiLCJfX3N1cHByZXNzRGVwcmVjYXRpb25XYXJuaW5nIiwicG9seWZpbGwiLCJpc1JlYWN0Q29tcG9uZW50IiwiZm91bmRXaWxsTW91bnROYW1lIiwiZm91bmRXaWxsUmVjZWl2ZVByb3BzTmFtZSIsImZvdW5kV2lsbFVwZGF0ZU5hbWUiLCJVTlNBRkVfY29tcG9uZW50V2lsbE1vdW50IiwiVU5TQUZFX2NvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMiLCJVTlNBRkVfY29tcG9uZW50V2lsbFVwZGF0ZSIsIm5ld0FwaU5hbWUiLCJjb21wb25lbnREaWRVcGRhdGUiLCJjb21wb25lbnREaWRVcGRhdGVQb2x5ZmlsbCIsIm1heWJlU25hcHNob3QiLCJzbmFwc2hvdCIsIl9Qcm9wVHlwZXMiLCJfcmVhY3RMaWZlY3ljbGVzQ29tcGF0IiwiX3JlYWN0IiwiX0NoaWxkTWFwcGluZyIsIl9yZWFjdERvbSIsIkFjY29yZGlvbiIsImhlYWRlciIsInNob3ciLCJDU1NUcmFuc2l0aW9uIiwiZW50ZXIiLCJlbnRlckFjdGl2ZSIsImV4aXQiLCJleGl0QWN0aXZlIiwic2V0QWxpZ24iLCJhbGlnbiIsImJhY2tkcm9wIiwiYmFja2dyb3VuZENvbG9yIiwidWEiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJ0b0xvd2VyQ2FzZSIsIk5hdkJhciIsImZpeGVkIiwic3RpY2t5IiwiQnVyZ2VyIiwiaGFtYnVnZXIiLCJOYXZDb250ZW50IiwiQXBwQmFyIiwiYnJhbmQiLCJ0b2dnbGVNZW51IiwiZ2V0Q29sb3IiLCJhZGRvbkNvbG9yIiwic3ViQ29sb3IiLCJjbG9zZSIsIlRhZyIsIm9uQ2xvc2UiLCJvbkNsaWNrIiwiQm9keSIsIkhlcm8iLCJUb29sdGlwIiwiY3VycmVudCIsInRvb2x0aXAiLCJwYXJlbnRSZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwicmVjdCIsImxlZnQiLCJ0b3AiLCJwb3NpdGlvbiIsImJvdHRvbSIsImNyZWF0ZVJlZiIsIm9wZW5Ub29sdGlwIiwiY2xvc2VUb29sdGlwIiwiU2lkZU1lbnUiLCJhc2lkZSIsIk1lbnVMaXN0IiwidWwiLCJNZW51TGFiZWwiLCJDYXJkQm9keSIsIkNhcmRIZWFkZXIiLCJDYXJkRm9vdGVyIiwiZm9vdGVyIiwiQ2FyZEltYWdlIiwiQ2FyZEltYWdlSG9yaXpvbnRhbCIsInVybCIsImhvcml6b250YWxTdHlsZSIsImZsZXhEaXJlY3Rpb24iLCJDYXJkIiwiaW1hZ2UiLCJ0aXRsZSIsImhvcml6b250YWwiLCJyZW5kZXJIZWFkZXIiLCJ3cmFwcGVyU3R5bGUiLCJSZWFjdCIsIkNoaWxkcmVuIiwib25seSIsIlBvcG92ZXIiLCJ3cmFwcGVyIiwidG9vbHRpcFJlY3QiLCJvcGVuRHJvcGRvd24iLCJjbG9zZURyb3Bkb3duIiwiRVNDX0tFWSIsIk1vZGFsIiwiY2xvc2VPbkVzYyIsImtleUNvZGUiLCJjbG9zZU1vZGFsIiwiY2xvc2VPbk92ZXJsYXkiLCJkb2N1bWVudCIsImJvZHkiLCJyZW1vdmVDaGlsZCIsImNyZWF0ZUVsZW1lbnQiLCJhcHBlbmRDaGlsZCIsImNyZWF0ZVBvcnRhbCIsImV4dGVybmFsIiwib25DbGlja092ZXJsYXkiLCJUb2FzdEl0ZW0iLCJkdXJhdGlvbiIsInNldFRpbWVvdXQiLCJjbGVhciIsInNldFBvc2l0aW9uIiwiaXNGaXhlZCIsImJhc2UiLCJUb2FzdENvbnRhaW5lciIsInRvYXN0cyIsImNzc1RleHQiLCJyZW5kZXJUb2FzdCIsIm5hdiIsIlRhYkl0ZW0iLCJJbmRpY2F0b3IiLCJUYWJzIiwic3RhcnQiLCJ0aHJlc2hvbGQiLCJtYXhJdGVtcyIsImNvdW50IiwidG90YWwiLCJ2aXNpYmlsaXR5IiwidHJhbnNmb3JtIiwiY2hpbGQiLCJpbmRleCIsImdldEluZGljYXRvclBvc2l0aW9uIiwicmVuZGVyQ2hpbGRyZW4iLCJhY3RpdmVJbmRleCIsImxlbiIsImFjdGl2ZSIsIkxvYWRpbmdCYXIiLCJsb2FkaW5nIiwic3BpbiIsImtleWZyYW1lcyIsIlNwaW5uZXIiLCJib3JkZXJTaXplIiwiZm9udEZhbWlseSIsImZvbnRTaXplIiwicmFkaXVzIiwibGluayIsImluZm8iLCJzdWNjZXNzIiwid2FybmluZyIsImRhcmsiLCJsaWdodCIsImJsYWNrQmlzIiwiYmxhY2tUZXIiLCJ3aGl0ZUJpcyIsIndoaXRlVGVyIiwiZ3JleSIsImdyZXlMaWdodCIsImdyZXlMaWdodGVyIiwibm9ybWFsaXplZCJdLCJtYXBwaW5ncyI6Ijs7OztBQUVlLFNBQVNBLEtBQVQsR0FBaUI7U0FDdkI7SUFBSyxLQUFLLEVBQUU7TUFBRUMsS0FBSyxFQUFFLE1BQVQ7TUFBaUJDLE1BQU0sRUFBRTs7SUFBNUM7OztBQ0dLLFNBQVNDLFdBQVQsT0FBdUM7TUFBaEJDLEtBQWdCLFFBQWhCQSxLQUFnQjtNQUN4QyxDQUFDQSxLQUFLLENBQUNDLFVBQVgsRUFBdUIsT0FBTyx1QkFBUDtpREFDaUJELEtBQUssQ0FBQ0UsTUFBOUM7O0FBR0YsQUFBTyxTQUFTQyxXQUFULFFBQXVDO01BQWhCSCxLQUFnQixTQUFoQkEsS0FBZ0I7TUFDeEMsQ0FBQ0EsS0FBSyxDQUFDQyxVQUFYLEVBQXVCLE9BQU8sdUJBQVA7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QUFDLElBQUksT0FBTyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsT0FBTyxLQUFLLENBQUMsQ0FBQyxJQUFJLE9BQU8sS0FBSyxLQUFLLFVBQVUsRUFBRSxPQUFPLElBQUksQ0FBQyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFFLFlBQVksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFLE9BQU8sS0FBSyxDQUFDLEVBQUUsRUFBRTs7QUFFblUsU0FBUyxVQUFVLENBQUMsTUFBTSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsRUFBRSxJQUFJLHdCQUF3QixFQUFFLEVBQUUsRUFBRSxVQUFVLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxFQUFFLE1BQU0sRUFBRSxVQUFVLEdBQUcsU0FBUyxVQUFVLENBQUMsTUFBTSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxXQUFXLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxRQUFRLEdBQUcsSUFBSSxXQUFXLEVBQUUsQ0FBQyxDQUFDLElBQUksS0FBSyxFQUFFLGVBQWUsQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsT0FBTyxRQUFRLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxPQUFPLFVBQVUsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxDQUFDLEVBQUU7O0FBRWphLFNBQVMsaUJBQWlCLENBQUMsRUFBRSxFQUFFLEVBQUUsT0FB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SSxXQUFXLEdBQUcsc0JBQXNCLENBQUNDLFlBQXVCLENBQUMsQ0FBQzs7OztBQUlsRSxTQUFTLHNCQUFzQixDQUFDLEdBQUcsRUFBRSxFQUFFLE9BQU8sR0FBRyxJQUFJLEdBQUcsQ0FBQyxVQUFVLEdBQUcsR0FBRyxHQUFHLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUU7O0FBRS9GLFNBQVMsdUJBQXVCLENBQUMsR0FBRyxFQUFFLEVBQUUsSUFBSSxHQUFHLElBQUksR0FBRyxDQUFDLFVBQVUsRUFBRSxFQUFFLE9BQU8sR0FBRyxDQUFDLEVBQUUsTUFBTSxFQUFFLElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQyxDQUFDLElBQUksR0FBRyxJQUFJLElBQUksRUFBRSxFQUFFLEtBQUssSUFBSSxHQUFHLElBQUksR0FBRyxFQUFFLEVBQUUsSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUFFLEVBQUUsSUFBSSxJQUFJLEdBQUcsTUFBTSxDQUFDLGNBQWMsSUFBSSxNQUFNLENBQUMsd0JBQXdCLEdBQUcsTUFBTSxDQUFDLHdCQUF3QixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLEdBQUcsRUFBRSxFQUFFLE1BQU0sQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQyxFQUFFLE1BQU0sRUFBRSxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQyxDQUFDLE9BQU8sTUFBTSxDQUFDLEVBQUUsRUFBRTs7QUFFeGQsU0FBUyxRQUFRLEdBQUcsRUFBRSxRQUFRLEdBQUcsTUFBTSxDQUFDLE1BQU0sSUFBSSxVQUFVLE1BQU0sRUFBRSxFQUFFLEtBQUssSUFB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LE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsT0FBTyxNQUFNLENBQUMsRUFBRTs7QUFFblQsU0FBUyxRQUFRLEdBQUcsRUFBRSxRQUFRLEdBQUcsTUFBTSxDQUFDLE1BQU0sSUFBSSxVQUFVLE1BQU0sRUFBRSxFQUFFLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsSUFBSSxNQUFNLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxJQUFJLEdBQUcsSUFBSSxNQUFNLEVBQUUsRUFBRSxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLEVBQUUsRUFBRSxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsT0FBTyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsT0FBTyxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxTQUFTLENBQUMsQ0FBQyxFQUFFOztBQUU3VCxTQUFTLGNBQWMsQ0FBQyxRQUFRLEVBQUUsVUFBVSxFQUFFLEVBQUUsUUFBUSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsV0FBVyxHQUFHLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxTQUFTLEdBQUcsVUFBVSxDQUFDLEVBQUU7O0FBRXZMLFNBQVMsc0JBQXNCLENBQUMsSUFBSSxFQUFFLEVBQUUsSUFBSSxJQUFJLEtBQUssS0FBSyxDQUFDLEVBQUUsRUFBRSxNQUFNLElBQUksY0FBYyxDQUFDLDJEQUEyRCxDQUFDLENBQUMsRUFBRSxDQUFDLE9BQU8sSUFBSSxDQUFDLEVBQUU7O0FBRXRLLElBQUksTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLElB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
