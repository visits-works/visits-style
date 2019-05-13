'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var styled = require('styled-components');
var styled__default = _interopDefault(styled);
var reactDom = require('react-dom');
var reactDom__default = _interopDefault(reactDom);

function Break() {
  return React__default.createElement("div", {
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
    return styled.css(["", "{padding-right:0.75rem;padding-left:0.75rem;}", "{padding-right:0.75rem;padding-left:0.75rem;}", "{padding-right:0.5rem;padding-left:0.5rem;}"], mediaFullHD, mediaDesktop, mediaMobile);
  }

  return styled.css(["margin-right:auto;margin-left:auto;", "{max-width:", "px;}", "{max-width:", "px;}", "{max-width:", "px;}", "{max-width:", "px;}"], mediaFullHD, function (_ref2) {
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
styled__default.div.withConfig({
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
    return styled.css(["width:auto;max-width:none;", "{padding:0.5rem;}"], mediaTablet);
  }

  var value = parcentage(size);
  var offVal = offset ? parcentage(offset) : 0;
  var autoSize = value > 33 ? 100 : value * 3;
  return styled.css(["width:", "%;max-width:", "%;", " ", "{width:", "%;max-width:", "%;padding:0.5rem;", "}"], value, value, offset ? "margin-left: ".concat(offVal, "%;") : {}, mediaTablet, autoSize, autoSize, offset ? "margin-left: 0;" : {});
}

var Col =
/*#__PURE__*/
styled__default.div.withConfig({
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
    return styled.css(["margin-right:0;margin-left:0;> ", "{padding-right:0;padding-left:0;}"], Col);
  }

  return styled.css(["", "{margin-left:-0.75rem;margin-right:-0.75rem;margin-top:-0.75rem;margin-bottom:0.75rem;}", "{margin-left:-0.5rem;margin-right:-0.5rem;margin-top:-0.5rem;margin-bottom:0.5rem;}"], mediaFullHD, mediaTablet);
}

var Row =
/*#__PURE__*/
styled__default.div.withConfig({
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
styled__default.pre.withConfig({
  displayName: "Pre",
  componentId: "acw6ve-0"
})(["-webkit-overflow-scrolling:touch;overflow-x:auto;padding:1.25em 1.5em;white-space:pre;word-wrap:normal;&:not(:last-child){margin-bottom:1em;}"]);
Pre.displayName = 'Pre';

var Code =
/*#__PURE__*/
styled__default.code.withConfig({
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
styled__default.h1.withConfig({
  displayName: "H1",
  componentId: "sc-1p7t0ft-0"
})(["font-size:2em;margin-bottom:0.5em;padding-left:1rem;border-left:1rem solid;border-bottom:1px solid;border-color:", ";"], function (_ref) {
  var theme = _ref.theme;
  return theme.border;
});
H1.displayName = 'H1';

var Content =
/*#__PURE__*/
styled__default.div.withConfig({
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
  return styled.css(["box-shadow:0 0 0 ", " ", ";"], size, shadowColor);
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
  return styled.css(["pointer-events:none;box-shadow:none;color:", ";background-color:", ";"], textColor, backColor);
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
    return styled.css(["background-color:", ";border-color:", ";color:", ";&:hover{border-color:", ";}&:active{border-color:", ";}"], theme.white, theme.border, theme.text, theme.borderHover, theme.borderActive);
  }

  if (color === 'text') {
    return styled.css(["background-color:transparent;border-color:transparent;color:", ";&:hover{text-decoration:underline;}"], theme.text);
  }

  var target = theme[color] || color;
  var invertColor = findColorInvert(theme, target);

  if (outline) {
    return styled.css(["background-color:transparent;border-color:", ";color:", ";&:hover{background-color:", ";color:", ";}&:focus{", "}"], target, target, target, invertColor, boxShadow('0.2rem', target, 0.2));
  }

  return styled.css(["background-color:", ";border-color:transparent;color:", ";box-shadow:none;&:hover{color:", ";background-color:", ";}&:active{background-color:", ";}&:focus{", "}"], target, invertColor, invertColor, darken(0.025, target), darken(0.05, target), boxShadow('0.2rem', target, 0.2));
}

var Button =
/*#__PURE__*/
styled__default.button.withConfig({
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
styled__default.div.withConfig({
  displayName: "ButtonGroup",
  componentId: "sc-22a909-0"
})(["display:inline-block;&:not(:last-child){margin-right:0.5rem;}", "{margin:0;border-radius:0;&:first-child{border-top-left-radius:4px;border-bottom-left-radius:4px;}&:not(:first-child){margin-left:-1px;}&:last-child{border-top-right-radius:4px;border-bottom-right-radius:4px;}}"], Button);
ButtonGroup.displayName = 'ButtonGroup';

var stripedStyle =
/*#__PURE__*/
styled.css(["tbody > tr:nth-child(odd){background-color:rgba(0,0,0,0.02);}"]);
var hoverStyle =
/*#__PURE__*/
styled.css(["tbody > tr:hover{background-color:rgba(0,0,0,0.04);}"]);
var Table =
/*#__PURE__*/
styled__default.table.withConfig({
  displayName: "Table",
  componentId: "sc-2hrn8c-0"
})(["display:block;", " max-width:100%;margin-bottom:1rem;background-color:transparent;-webkit-overflow-scrolling:touch;-ms-overflow-style:-ms-autohiding-scrollbar;td,th{vertical-align:top;padding:0.75rem;", " border-width:0 0 1px;}th{white-space:nowrap;}", " ", " ", ""], function (_ref) {
  var full = _ref.full;
  return full ? styled.css(["width:100%;"]) : '';
}, function (_ref2) {
  var theme = _ref2.theme,
      bordered = _ref2.bordered;
  return bordered ? styled.css(["border:1px solid ", ";"], theme.border) : '';
}, function (_ref3) {
  var striped = _ref3.striped;
  return striped ? stripedStyle : '';
}, function (_ref4) {
  var hover = _ref4.hover;
  return hover ? hoverStyle : '';
}, function (_ref5) {
  var headerStyle = _ref5.headerStyle;
  return headerStyle ? styled.css(["th{", "}"], headerStyle) : '';
});

function setColor$1(_ref) {
  var color = _ref.color,
      theme = _ref.theme;
  if (!color) return {};
  var target = theme[color] || color;
  var invertColor = findColorInvert(theme, target);
  return styled.css(["background-color:", ";color:", ";"], target, invertColor);
}

var Box =
/*#__PURE__*/
styled__default.div.withConfig({
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
styled__default.div.withConfig({
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
      return React__default.createElement(Wrapper, this.props, React__default.createElement("div", {
        role: "progressbar",
        style: {
          width: "".concat(percent > 100 ? 100 : percent, "%")
        }
      }));
    }
  }]);

  return Progress;
}(React.PureComponent);

_defineProperty(Progress, "defaultProps", {
  color: 'primary'
});

var Wrapper$1 =
/*#__PURE__*/
styled__default.div.withConfig({
  displayName: "Field__Wrapper",
  componentId: "sc-1vvmhhp-0"
})(["display:block;&:not(:last-child){margin-bottom:0.75rem;}", " ", ""], function (_ref) {
  var required = _ref.required,
      theme = _ref.theme;
  return required ? styled.css(["label::after{content:'*';color:", ";margin-left:0.325rem;}"], theme.primary) : {};
}, function (_ref2) {
  var css = _ref2.css;
  return css || {};
});
var Label =
/*#__PURE__*/
styled__default.label.withConfig({
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

      return React__default.createElement(Wrapper$1, rest, label && React__default.createElement(Label, {
        htmlFor: htmlFor
      }, label), children);
    }
  }]);

  return Field;
}(React.PureComponent);

function hamburger(size) {
  return styled.css(["display:block;position:relative;height:", ";width:", ";cursor:pointer;span{background-color:currentColor;display:block;height:1px;left:calc(50% - 8px);position:absolute;transform-origin:center;transition-duration:100ms;transition-property:background-color,opacity,transform;transition-timing-function:ease-out;width:16px;&:nth-child(1){top:calc(50% - 6px);}&:nth-child(2){top:calc(50% - 1px);}&:nth-child(3){top:calc(50% + 4px);}&:hover{background-color:rgba(black,0.05);}}&.active span{&:nth-child(1){transform:translateY(5px) rotate(45deg);}&:nth-child(2){opacity:0;}&:nth-child(3){transform:translateY(-5px) rotate(-45deg);}}"], size, size);
}

function Arrow(color, direction) {
  return styled.css(["position:absolute;border:3px solid ", ";border-radius:2px;border-right:0;border-top:0;content:\" \";display:block;height:0.625em;margin-top:-0.625em;pointer-events:none;top:50%;transform:rotate(-45deg);transform-origin:center;width:0.625em;"], color);
}

var Message =
/*#__PURE__*/
styled__default.span.withConfig({
  displayName: "HelpMessage__Message",
  componentId: "sc-5r3ekc-0"
})(["font-size:0.8rem;color:", ";"], function (_ref) {
  var error = _ref.error,
      theme = _ref.theme;
  return error ? theme.danger : theme.textLight;
});
function HelpMessage(help, error) {
  if (error) {
    return React__default.createElement(Message, {
      error: true
    }, error);
  }

  if (help) {
    return React__default.createElement(Message, null, help);
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
styled.css(["right:0.375em;& ~ input{padding-right:1.555em !important;}"]);
var leftIcon =
/*#__PURE__*/
styled.css(["left:0.375em;& ~ input{padding-left:1.55em !important;}"]);
var Icon =
/*#__PURE__*/
styled__default.span.withConfig({
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
styled__default.span.withConfig({
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

      return React__default.createElement(_StyledWrapper, {
        className: className,
        outline: outline,
        error: error,
        style: style,
        _css: css
      }, leftIcon && React__default.createElement(Icon, null, leftIcon), rightIcon && React__default.createElement(Icon, {
        right: true
      }, rightIcon), React__default.createElement("input", rest), HelpMessage(help, error));
    }
  }]);

  return TextInput;
}(React.PureComponent);

_defineProperty(TextInput, "defaultProps", {
  type: 'text',
  value: '',
  maxLength: 255,
  onChange: function onChange() {}
});

var _StyledWrapper = styled__default(Wrapper$2)(_templateObject(), function (p) {
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
styled__default.span.withConfig({
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

      return React__default.createElement(_StyledWrapper$1, {
        className: className,
        error: error,
        style: style,
        _css: css
      }, React__default.createElement("textarea", rest), HelpMessage(help, error));
    }
  }]);

  return Textarea;
}(React.Component);

_defineProperty(Textarea, "defaultProps", {
  value: '',
  col: 2,
  row: 5,
  onChange: function onChange() {}
});

var _StyledWrapper$1 = styled__default(Wrapper$3)(_templateObject$1(), function (p) {
  return p._css;
});

var Wrapper$4 =
/*#__PURE__*/
styled__default.span.withConfig({
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

      return React__default.createElement(Wrapper$4, {
        className: className
      }, React__default.createElement("input", _extends({
        type: "checkbox",
        id: this.id
      }, rest)), React__default.createElement("label", {
        htmlFor: this.id
      }, children));
    }
  }]);

  return Checkbox;
}(React.Component);

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
styled__default.span.withConfig({
  displayName: "Select__InputWrapper",
  componentId: "ffa0bn-0"
})(["position:relative;display:block;select{display:block;cursor:pointer;appearance:none;outline:none;max-width:100%;width:100%;height:100%;background-color:transparent;padding:0.375em 0.625em;padding-right:1.35em;text-align:left;color:inherit;", " border:none;", " will-change:box-shadow;transition-property:box-shadow;transition-duration:150ms;transition-timing-function:ease-in-out;&:focus{border-color:", ";box-shadow:", ";}&::-ms-expand{display:none;}&:-moz-focusring{color:transparent;text-shadow:0 0 0 #000;}&:disabled,[disabled],&:readonly{", "}&:invalid{color:", ";}}&::after{", " top:1.25em;right:0.625em;z-index:4;}", " ", ""], function (_ref) {
  var size = _ref.size;
  return setSize("font-size", size);
}, function (_ref2) {
  var outline = _ref2.outline,
      theme = _ref2.theme,
      error = _ref2.error;
  return outline ? styled.css(["border:1px solid ", ";border-radius:4px;"], error ? theme.danger : theme.border) : styled.css(["border-bottom:1px solid ", ";border-radius:0;"], error ? theme.danger : theme.border);
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
  return disabled ? {} : styled.css(["&:hover{select:not(:disabled):not(:focus){border-color:", ";}&::after{border-color:", ";}}"], theme.borderHover, theme.borderHover);
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
          return React__default.createElement("option", {
            key: item,
            value: item
          }, _this.renderLabel(item));
        }

        var id = item.id,
            name = item.name;
        return React__default.createElement("option", {
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

      return React__default.createElement(_StyledInputWrapper, {
        className: className,
        size: inputSize,
        outline: outline,
        error: error,
        disabled: disabled,
        _css: css
      }, React__default.createElement("select", _extends({}, rest, {
        disabled: disabled,
        required: Boolean(placeholder)
      }), placeholder && React__default.createElement("option", {
        value: ""
      }, placeholder), this.renderItem()), HelpMessage(help, error));
    }
  }]);

  return Select;
}(React.Component);

_defineProperty(Select, "defaultProps", {
  name: null,
  value: '',
  onChange: function onChange() {},
  options: []
});

var _StyledInputWrapper = styled__default(InputWrapper)(_templateObject$2(), function (p) {
  return p._css;
});

var RadioLabel =
/*#__PURE__*/
styled.css(["label{cursor:pointer;padding-left:1.625em;max-width:100%;width:100%;line-height:1.25;margin-right:0.625rem;&:before,&:after{content:\"\";position:absolute;}&:after{top:0.375em;left:0.375em;width:0.5em;height:0.5em;background:", ";border:none;transform:scale(0);border-radius:50%;will-change:transform;transition:transform 150ms ease-out;}&:before{width:1.25em;height:1.25em;left:0;top:0;background:transparent;border:0.1em solid ", ";border-radius:50%;will-change:background;transition:background 150ms ease-out;}}input{display:none;&:checked{+ label:before{border-color:", ";}+ label:after{transform:scale(1);}}&:disabled{+ label{color:", ";&:before{background:", ";border-color:", ";}}&:checked + label:after{background:", ";}}}"], function (_ref) {
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
styled.css(["display:inline-flex;label{cursor:pointer;padding:0.375em 0.75em;height:2.25em;border:1px solid ", ";text-align:center;width:100%;&:hover{border-color:", ";}}input{display:none;&:checked + label{z-index:1;border-color:", ";background-color:", ";}&:disabled{+ label{cursor:default;color:", ";background-color:", ";border-color:", ";}&:checked + label{border-color:", ";background-color:", ";}}}& + &{margin-left:-1px;}&:first-child label{border-top-left-radius:4px;border-bottom-left-radius:4px;}&:last-child label{border-top-right-radius:4px;border-bottom-right-radius:4px;}"], function (_ref8) {
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
styled__default.span.withConfig({
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

      return React__default.createElement(Wrapper$5, {
        className: className,
        button: button,
        color: color,
        style: style
      }, React__default.createElement("input", _extends({
        id: this.id,
        type: "radio"
      }, rest)), React__default.createElement("label", {
        htmlFor: this.id
      }, children));
    }
  }]);

  return Radio;
}(React.Component);

_defineProperty(Radio, "defaultProps", {
  name: null,
  children: null,
  checked: false,
  button: false,
  onChange: function onChange() {}
});

function Approved(props) {
  return React__default.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "30",
    height: "30",
    viewBox: "0 0 30 30"
  }, props), React__default.createElement("g", {
    transform: "translate(-80 -215)"
  }, React__default.createElement("g", {
    transform: "translate(17 39)"
  }, React__default.createElement("g", {
    transform: "translate(63 176)",
    fill: "none"
  }, React__default.createElement("path", {
    d: "M 15 29 C 11.26047039031982 29 7.744760036468506 27.54375076293945 5.100510120391846 24.89949035644531 C 2.456249952316284 22.25523948669434 1 18.73953056335449 1 15 C 1 11.26047039031982 2.456249952316284 7.744760036468506 5.100510120391846 5.100510120391846 C 7.744760036468506 2.456249952316284 11.26047039031982 1 15 1 C 18.73953056335449 1 22.25523948669434 2.456249952316284 24.89949035644531 5.100510120391846 C 27.54375076293945 7.744760036468506 29 11.26047039031982 29 15 C 29 18.73953056335449 27.54375076293945 22.25523948669434 24.89949035644531 24.89949035644531 C 22.25523948669434 27.54375076293945 18.73953056335449 29 15 29 Z",
    stroke: "none"
  }), React__default.createElement("path", {
    d: "M 15 2 C 11.5275707244873 2 8.262990951538086 3.352239608764648 5.807609558105469 5.807609558105469 C 3.352239608764648 8.262990951538086 2 11.5275707244873 2 15 C 2 18.47243118286133 3.352239608764648 21.73701095581055 5.807609558105469 24.19239044189453 C 8.262990951538086 26.64776039123535 11.5275707244873 28 15 28 C 18.47243118286133 28 21.73701095581055 26.64776039123535 24.19239044189453 24.19239044189453 C 26.64776039123535 21.73701095581055 28 18.47243118286133 28 15 C 28 11.5275707244873 26.64776039123535 8.262990951538086 24.19239044189453 5.807609558105469 C 21.73701095581055 3.352239608764648 18.47243118286133 2 15 2 M 15 0 C 23.28426933288574 0 30 6.715730667114258 30 15 C 30 23.28426933288574 23.28426933288574 30 15 30 C 6.715730667114258 30 0 23.28426933288574 0 15 C 0 6.715730667114258 6.715730667114258 0 15 0 Z",
    stroke: "none",
    fill: "currentColor"
  }))), React__default.createElement("path", {
    d: "M8.925,15.871,5.047,11.886,3.41,13.41,9,19,20.562,7.467l-1.7-1.595Z",
    transform: "translate(82.59 217.595)",
    fill: "currentColor"
  })));
}

function ChevronLeftRound(props) {
  return React__default.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "30",
    height: "30",
    viewBox: "0 0 30 30"
  }, props), React__default.createElement("g", {
    transform: "translate(-36 -36)"
  }, React__default.createElement("g", {
    transform: "translate(36 36)",
    fill: "none"
  }, React__default.createElement("path", {
    d: "M 15 29 C 11.26047039031982 29 7.744760036468506 27.54375076293945 5.100510120391846 24.89949035644531 C 2.456249952316284 22.25523948669434 1 18.73953056335449 1 15 C 1 11.26047039031982 2.456249952316284 7.744760036468506 5.100510120391846 5.100510120391846 C 7.744760036468506 2.456249952316284 11.26047039031982 1 15 1 C 18.73953056335449 1 22.25523948669434 2.456249952316284 24.89949035644531 5.100510120391846 C 27.54375076293945 7.744760036468506 29 11.26047039031982 29 15 C 29 18.73953056335449 27.54375076293945 22.25523948669434 24.89949035644531 24.89949035644531 C 22.25523948669434 27.54375076293945 18.73953056335449 29 15 29 Z",
    stroke: "none"
  }), React__default.createElement("path", {
    d: "M 15 2 C 11.5275707244873 2 8.262990951538086 3.352239608764648 5.807609558105469 5.807609558105469 C 3.352239608764648 8.262990951538086 2 11.5275707244873 2 15 C 2 18.47243118286133 3.352239608764648 21.73701095581055 5.807609558105469 24.19239044189453 C 8.262990951538086 26.64776039123535 11.5275707244873 28 15 28 C 18.47243118286133 28 21.73701095581055 26.64776039123535 24.19239044189453 24.19239044189453 C 26.64776039123535 21.73701095581055 28 18.47243118286133 28 15 C 28 11.5275707244873 26.64776039123535 8.262990951538086 24.19239044189453 5.807609558105469 C 21.73701095581055 3.352239608764648 18.47243118286133 2 15 2 M 15 0 C 23.28426933288574 0 30 6.715730667114258 30 15 C 30 23.28426933288574 23.28426933288574 30 15 30 C 6.715730667114258 30 0 23.28426933288574 0 15 C 0 6.715730667114258 6.715730667114258 0 15 0 Z",
    stroke: "none",
    fill: "currentColor"
  })), React__default.createElement("g", {
    transform: "translate(-207 -2136)"
  }, React__default.createElement("path", {
    d: "M1811.182,4362.342l-7.567,6.731,7.567,6.2",
    transform: "translate(-1550.116 -2181.842)",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2"
  }))));
}

function ChevronRightRound(props) {
  return React__default.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "30",
    height: "30",
    viewBox: "0 0 30 30"
  }, props), React__default.createElement("g", {
    transform: "translate(93 206) rotate(180)"
  }, React__default.createElement("g", {
    transform: "translate(63 176)",
    fill: "none"
  }, React__default.createElement("path", {
    d: "M 15 29 C 11.26047039031982 29 7.744760036468506 27.54375076293945 5.100510120391846 24.89949035644531 C 2.456249952316284 22.25523948669434 1 18.73953056335449 1 15 C 1 11.26047039031982 2.456249952316284 7.744760036468506 5.100510120391846 5.100510120391846 C 7.744760036468506 2.456249952316284 11.26047039031982 1 15 1 C 18.73953056335449 1 22.25523948669434 2.456249952316284 24.89949035644531 5.100510120391846 C 27.54375076293945 7.744760036468506 29 11.26047039031982 29 15 C 29 18.73953056335449 27.54375076293945 22.25523948669434 24.89949035644531 24.89949035644531 C 22.25523948669434 27.54375076293945 18.73953056335449 29 15 29 Z",
    stroke: "none"
  }), React__default.createElement("path", {
    d: "M 15 2 C 11.5275707244873 2 8.262990951538086 3.352239608764648 5.807609558105469 5.807609558105469 C 3.352239608764648 8.262990951538086 2 11.5275707244873 2 15 C 2 18.47243118286133 3.352239608764648 21.73701095581055 5.807609558105469 24.19239044189453 C 8.262990951538086 26.64776039123535 11.5275707244873 28 15 28 C 18.47243118286133 28 21.73701095581055 26.64776039123535 24.19239044189453 24.19239044189453 C 26.64776039123535 21.73701095581055 28 18.47243118286133 28 15 C 28 11.5275707244873 26.64776039123535 8.262990951538086 24.19239044189453 5.807609558105469 C 21.73701095581055 3.352239608764648 18.47243118286133 2 15 2 M 15 0 C 23.28426933288574 0 30 6.715730667114258 30 15 C 30 23.28426933288574 23.28426933288574 30 15 30 C 6.715730667114258 30 0 23.28426933288574 0 15 C 0 6.715730667114258 6.715730667114258 0 15 0 Z",
    stroke: "none",
    fill: "currentColor"
  })), React__default.createElement("g", {
    transform: "translate(-180 -1996)"
  }, React__default.createElement("path", {
    d: "M1811.182,4362.342l-7.567,6.731,7.567,6.2",
    transform: "translate(-1550.116 -2181.842)",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2"
  }))));
}

function FileRound(props) {
  return React__default.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "30",
    height: "30",
    viewBox: "0 0 30 30"
  }, props), React__default.createElement("g", {
    transform: "translate(-468 -383)"
  }, React__default.createElement("g", {
    transform: "translate(405 207)"
  }, React__default.createElement("g", {
    transform: "translate(63 176)",
    fill: "none"
  }, React__default.createElement("path", {
    d: "M 15 29 C 11.26047039031982 29 7.744760036468506 27.54375076293945 5.100510120391846 24.89949035644531 C 2.456249952316284 22.25523948669434 1 18.73953056335449 1 15 C 1 11.26047039031982 2.456249952316284 7.744760036468506 5.100510120391846 5.100510120391846 C 7.744760036468506 2.456249952316284 11.26047039031982 1 15 1 C 18.73953056335449 1 22.25523948669434 2.456249952316284 24.89949035644531 5.100510120391846 C 27.54375076293945 7.744760036468506 29 11.26047039031982 29 15 C 29 18.73953056335449 27.54375076293945 22.25523948669434 24.89949035644531 24.89949035644531 C 22.25523948669434 27.54375076293945 18.73953056335449 29 15 29 Z",
    stroke: "none"
  }), React__default.createElement("path", {
    d: "M 15 2 C 11.5275707244873 2 8.262990951538086 3.352239608764648 5.807609558105469 5.807609558105469 C 3.352239608764648 8.262990951538086 2 11.5275707244873 2 15 C 2 18.47243118286133 3.352239608764648 21.73701095581055 5.807609558105469 24.19239044189453 C 8.262990951538086 26.64776039123535 11.5275707244873 28 15 28 C 18.47243118286133 28 21.73701095581055 26.64776039123535 24.19239044189453 24.19239044189453 C 26.64776039123535 21.73701095581055 28 18.47243118286133 28 15 C 28 11.5275707244873 26.64776039123535 8.262990951538086 24.19239044189453 5.807609558105469 C 21.73701095581055 3.352239608764648 18.47243118286133 2 15 2 M 15 0 C 23.28426933288574 0 30 6.715730667114258 30 15 C 30 23.28426933288574 23.28426933288574 30 15 30 C 6.715730667114258 30 0 23.28426933288574 0 15 C 0 6.715730667114258 6.715730667114258 0 15 0 Z",
    stroke: "none",
    fill: "currentColor"
  }))), React__default.createElement("g", {
    transform: "translate(384 208)"
  }, React__default.createElement("g", {
    transform: "translate(93 182)",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2"
  }, React__default.createElement("rect", {
    width: "12",
    height: "16",
    rx: "1",
    stroke: "none"
  }), React__default.createElement("rect", {
    x: "1",
    y: "1",
    width: "10",
    height: "14",
    fill: "none"
  })), React__default.createElement("rect", {
    width: "4",
    height: "1.3",
    transform: "translate(97 186)",
    fill: "currentColor"
  }), React__default.createElement("rect", {
    width: "4",
    height: "1.3",
    transform: "translate(97 189)",
    fill: "currentColor"
  }), React__default.createElement("rect", {
    width: "4",
    height: "1.3",
    transform: "translate(97 192)",
    fill: "currentColor"
  }))));
}

function Pencil(props) {
  return React__default.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "17.796",
    height: "17.908",
    viewBox: "0 0 17.796 17.908"
  }, props), React__default.createElement("g", null, React__default.createElement("g", null, React__default.createElement("path", {
    d: "M1.254,12.674.5,17.408l4.726-.8L17.3,4.472,13.281.5Z",
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "1"
  })), React__default.createElement("line", {
    x2: "3.851",
    y2: "3.838",
    transform: "translate(1.375 12.766)",
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "1"
  }), React__default.createElement("line", {
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
  return React__default.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "30",
    height: "30",
    viewBox: "0 0 30 30"
  }, props), React__default.createElement("g", {
    transform: "translate(-468 -383)"
  }, React__default.createElement("g", {
    transform: "translate(468 383)",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2"
  }, React__default.createElement("circle", {
    cx: "15",
    cy: "15",
    r: "15",
    stroke: "none"
  }), React__default.createElement("circle", {
    cx: "15",
    cy: "15",
    r: "14",
    fill: "none"
  })), React__default.createElement("path", {
    d: "M-4-310a6.018,6.018,0,0,1,6-6H4a6.018,6.018,0,0,1,6,6Zm2.6-2H7.5A4.033,4.033,0,0,0,4-314H2.1A4.035,4.035,0,0,0-1.4-312Zm.4-9v-1a4.012,4.012,0,0,1,4-4,4.012,4.012,0,0,1,4,4v1a4.012,4.012,0,0,1-4,4A4.012,4.012,0,0,1-1-321Zm2-1v1a2.006,2.006,0,0,0,2,2,2.006,2.006,0,0,0,2-2v-1a2.006,2.006,0,0,0-2-2A2.006,2.006,0,0,0,1-322Z",
    transform: "translate(480 716)",
    fill: "currentColor"
  })));
}

function Close(props) {
  return React__default.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "30",
    height: "30",
    viewBox: "0 0 30 30",
    pointerEvents: "bounding-box"
  }, props), React__default.createElement("g", {
    transform: "translate(-131 -571)"
  }, React__default.createElement("g", {
    transform: "translate(132 572)"
  }, React__default.createElement("path", {
    d: "M28.5,26,16,13.5,28.5,1",
    transform: "translate(-3.501 -1)",
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeMiterlimit: "10",
    strokeWidth: "2"
  }), React__default.createElement("path", {
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
  return React__default.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "30",
    height: "30",
    viewBox: "0 0 30 30"
  }, props), React__default.createElement("path", {
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

var _react = _interopRequireDefault(React__default);

var _reactDom = _interopRequireDefault(reactDom__default);





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

var _react = _interopRequireDefault(React__default);

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
    return mapFn && (0, React__default.isValidElement)(child) ? mapFn(child) : child;
  };

  var result = Object.create(null);
  if (children) React__default.Children.map(children, function (c) {
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
    return (0, React__default.cloneElement)(child, {
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
    if (!(0, React__default.isValidElement)(child)) return;
    var hasPrev = key in prevChildMapping;
    var hasNext = key in nextChildMapping;
    var prevChild = prevChildMapping[key];
    var isLeaving = (0, React__default.isValidElement)(prevChild) && !prevChild.props.in; // item is new (entering)

    if (hasNext && (!hasPrev || isLeaving)) {
      // console.log('entering', key)
      children[key] = (0, React__default.cloneElement)(child, {
        onExited: onExited.bind(null, child),
        in: true,
        exit: getProp(child, 'exit', nextProps),
        enter: getProp(child, 'enter', nextProps)
      });
    } else if (!hasNext && hasPrev && !isLeaving) {
      // item is old (exiting)
      // console.log('leaving', key)
      children[key] = (0, React__default.cloneElement)(child, {
        in: false
      });
    } else if (hasNext && hasPrev && (0, React__default.isValidElement)(prevChild)) {
      // item hasn't changed transition states
      // copy over the last transition props;
      // console.log('unchanged', key)
      children[key] = (0, React__default.cloneElement)(child, {
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

var _react = _interopRequireDefault(React__default);





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

var _react = _interopRequireDefault(React__default);



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
    if (this.props[handler]) this.props[handler]((0, reactDom__default.findDOMNode)(this));
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
styled__default.div.withConfig({
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

  return React__default.createElement(Wrapper$6, rest, header, React__default.createElement(reactTransitionGroup_4, {
    classNames: {
      enter: 'collapsed',
      enterActive: 'collapsing',
      exit: 'expanded',
      exitActive: 'expanding'
    },
    timeout: 300,
    in: show,
    unmountOnExit: true
  }, React__default.createElement("div", {
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
      return styled.css(["background-color:", ";color:", ";backdrop-filter:blur(8px);"], backColor, textColor);
    }

    return styled.css(["background-color:", ";color:", ";"], backColor, textColor);
  }

  return styled.css(["background-color:", ";color:", ";"], backgroundColor, textColor);
}

var NavBar =
/*#__PURE__*/
styled__default.header.withConfig({
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
styled__default.button.withConfig({
  displayName: "AppBar__Burger",
  componentId: "t8gqca-1"
})(["", " display:none;margin-left:auto;border:none;background-color:transparent;color:inherit;outline:none;&:hover{background-color:rgba(0,0,0,.05);}", "{display:block;}"], hamburger('3.25rem'), mediaMobile);
var NavContent =
/*#__PURE__*/
styled__default.div.withConfig({
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
      return React__default.createElement(NavBar, _extends({
        role: "navigation"
      }, rest), React__default.createElement("nav", null, brand, React__default.createElement(Burger, {
        className: show ? 'active' : undefined,
        onClick: this.toggleMenu
      }, React__default.createElement("span", null), React__default.createElement("span", null), React__default.createElement("span", null)), React__default.createElement(NavContent, {
        className: show ? 'active' : undefined,
        align: align
      }, children)));
    }
  }]);

  return AppBar;
}(React.PureComponent);

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
  return styled.css(["color:", ";background-color:", ";a,span{color:", ";background-color:", ";}a:hover{background-color:", ";}"], invertColor, target, invertColor, subColor, darken(0.05, subColor));
}

var Wrapper$7 =
/*#__PURE__*/
styled__default.div.withConfig({
  displayName: "Tag__Wrapper",
  componentId: "sc-1gipzx7-0"
})(["display:inline-flex;font-size:0.75rem;cursor:default;padding:0 .5rem;height:2em;user-select:none;border-radius:3px;justify-content:center;align-items:center;white-space:nowrap;line-height:1.5;", " &:not(:last-child){margin-right:0.5rem;}a,span{position:relative;display:inline-flex;flex-grow:0;flex-shrink:0;min-width:1.5rem;height:100%;margin-right:-0.5rem;margin-left:0.5rem;padding:0 .5rem;justify-content:center;align-items:center;&:last-child{border-top-right-radius:3px;border-bottom-right-radius:3px;}&:focus{outline:none;}", "}", ""], setColor$3, function (props) {
  return props.close ? styled.css(["&:before,&:after{background-color:currentColor;content:\"\";display:block;left:50%;position:absolute;top:50%;transform:translateX(-50%) translateY(-50%) rotate(45deg);transform-origin:center center;}&:before{height:1px;width:50%;}&:after{height:50%;width:1px;}&:hover{opacity:1;}"]) : '';
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

      return React__default.createElement(Wrapper$7, _extends({
        close: onClose !== null
      }, rest), children, onClose && React__default.createElement("a", {
        tabIndex: 0,
        role: "link",
        onClick: onClose
      }, "\xA0"));
    }
  }]);

  return Tag;
}(React.PureComponent);

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
  return styled.css(["background-color:", ";color:", ";"], target, invertColor);
}

function setSize$1(_ref2) {
  var size = _ref2.size,
      theme = _ref2.theme;
  if (!size || size === 'small') return '';

  switch (size) {
    case 'medium':
      return styled.css(["padding-bottom:9rem;padding-top:9rem;"]);

    case 'large':
      return styled.css(["padding-bottom:18rem;padding-top:18rem;"]);

    case 'full':
      return styled.css(["min-height:100vh;", "{align-items:center;display:flex;}"], Body);

    default:
      return '';
  }
}

var Body =
/*#__PURE__*/
styled__default.div.withConfig({
  displayName: "Hero__Body",
  componentId: "sc-12m9apf-0"
})(["flex-grow:1;flex-shrink:0;padding:3rem 1.5rem;", " h1{font-size:2rem;font-weight:600;line-height:1.125;&:not(:last-child){margin-bottom:1.5rem;}}h2{font-size:1.25rem;font-weight:400;line-height:1.25;}h1+h2{margin-top:-1.25rem;}"], function (_ref3) {
  var center = _ref3.center;
  return center ? 'text-align: center;' : '';
});
var Wrapper$8 =
/*#__PURE__*/
styled__default.div.withConfig({
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

  return React__default.createElement(Wrapper$8, _extends({
    color: color,
    size: size
  }, rest), header, React__default.createElement(Body, {
    center: center
  }, React__default.createElement(Container, null, children)));
}

var Wrapper$9 =
/*#__PURE__*/
styled__default.div.withConfig({
  displayName: "Tooltip__Wrapper",
  componentId: "sc-1xyhucq-0"
})(["position:relative;display:inline-block;div[role=\"tooltip\"]{position:absolute;clear:both;box-shadow:0 1px 2px 0 rgba(0,0,0,0.05);z-index:9999;padding:0.375rem 0.625rem;cursor:default;width:auto;white-space:pre;font-size:0.85rem;z-index:9999;transform:scale(0.8);opacity:0;visibility:hidden;will-change:transform,opacity,visibility;transition-property:transform,opacity,visibility;transition-duration:100ms;transition-timing-function:cubic-bezier(0.645,0.045,0.355,1);&.start{transform:scale(1);opacity:1;visibility:visible;}}", ""], function (_ref) {
  var css = _ref.css;
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

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "element", React.createRef());

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "tooltip", React.createRef());

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
      return React__default.createElement(Wrapper$9, _extends({
        ref: this.element,
        onMouseOver: this.openTooltip,
        onMouseOut: this.closeTooltip
      }, rest), children, React__default.createElement("div", {
        ref: this.tooltip,
        className: show ? 'start' : undefined,
        role: "tooltip",
        style: style
      }, label));
    }
  }]);

  return Tooltip;
}(React.PureComponent);

_defineProperty(Tooltip, "defaultProps", {
  position: 'bottom',
  color: 'dark'
});

var SideMenu =
/*#__PURE__*/
styled__default.aside.withConfig({
  displayName: "SideMenu",
  componentId: "sc-1bcney9-0"
})(["font-size:1rem;"]);
SideMenu.displayName = 'SideMenu';
var MenuList =
/*#__PURE__*/
styled__default.ul.withConfig({
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
styled__default.p.withConfig({
  displayName: "SideMenu__MenuLabel",
  componentId: "sc-1bcney9-2"
})(["font-size:0.75em;letter-spacing:0.1em;text-transform:uppercase;&:not(:first-child){margin-top:1em;}&:not(:last-child){margin-bottom:1em;}"]);
MenuLabel.displayName = 'MenuLabel';

var CardBody =
/*#__PURE__*/
styled__default.div.withConfig({
  displayName: "Card__CardBody",
  componentId: "sc-1xqn2rf-0"
})(["padding:1.25rem;margin:0;"]);
var CardHeader =
/*#__PURE__*/
styled__default.header.withConfig({
  displayName: "Card__CardHeader",
  componentId: "sc-1xqn2rf-1"
})(["display:flex;padding:0.5rem 1.5rem;min-height:3.5rem;border-bottom:1px solid ", ";align-items:center;justify-content:space-between;"], function (_ref) {
  var theme = _ref.theme;
  return theme.border;
});
var CardFooter =
/*#__PURE__*/
styled__default.footer.withConfig({
  displayName: "Card__CardFooter",
  componentId: "sc-1xqn2rf-2"
})(["display:flex;padding:0.5rem 1.5rem;min-height:3.5rem;border-top:1px solid ", ";align-items:center;justify-content:space-between;"], function (_ref2) {
  var theme = _ref2.theme;
  return theme.border;
});
var CardImage =
/*#__PURE__*/
styled__default.a.withConfig({
  displayName: "Card__CardImage",
  componentId: "sc-1xqn2rf-3"
})(["width:100%;img{width:100%;padding:0;margin:0;border-top-left-radius:3px;border-top-right-radius:3px;}"]);
var CardImageHorizontal =
/*#__PURE__*/
styled__default.a.withConfig({
  displayName: "Card__CardImageHorizontal",
  componentId: "sc-1xqn2rf-4"
})(["flex:0 0 30%;min-width:5rem;width:30%;border-top-left-radius:3px;border-bottom-left-radius:3px;background:no-repeat center/cover;", ""], function (_ref3) {
  var url = _ref3.url;
  return url ? styled.css(["background-image:url(", ");"], url) : {};
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
      if (image && !horizontal) return React__default.createElement(CardImage, null, React__default.createElement("img", {
        src: image
      }));
      if (image && horizontal) return React__default.createElement(CardImageHorizontal, {
        url: image
      });
      if (title && !horizontal) return React__default.createElement(CardHeader, null, React__default.createElement("h3", null, title));
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
      return React__default.createElement(Box, {
        style: wrapperStyle,
        color: color
      }, header, React__default.createElement(CardBody, null, children), footer && React__default.createElement(CardFooter, null, React__default.Children.only(footer)));
    }
  }]);

  return Card;
}(React.PureComponent);

function _templateObject$3() {
  var data = _taggedTemplateLiteral(["", ""]);

  _templateObject$3 = function _templateObject() {
    return data;
  };

  return data;
}
var Wrapper$a =
/*#__PURE__*/
styled__default.div.withConfig({
  displayName: "Popover__Wrapper",
  componentId: "sc-1huajr8-0"
})(["display:inline-block;outline:none;color:inherit;&:hover{color:inherit;text-decoration:none;}", ""], function (_ref) {
  var css = _ref.css;
  return css || '';
});
var Tooltip$1 =
/*#__PURE__*/
styled__default(Box).withConfig({
  displayName: "Popover__Tooltip",
  componentId: "sc-1huajr8-1"
})(["position:absolute;display:flex;clear:both;box-shadow:0 1px 2px 0 rgba(0,0,0,0.05);z-index:9999;padding:0.5rem 0;width:auto;height:auto;cursor:auto;will-change:transform,opacity,visibility;transform:scale(0.8);opacity:0;visibility:hidden;transition-property:transform,opacity,visibility;transition-duration:100ms;transition-timing-function:cubic-bezier(0.645,0.045,0.355,1);&.start{transform:scale(1);opacity:1;visibility:visible;}"]);

var Popover =
/*#__PURE__*/
function (_Component) {
  _inherits(Popover, _Component);

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

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "tooltip", React.createRef());

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "wrapper", React.createRef());

    return _this;
  }

  _createClass(Popover, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(props, state) {
      return this.state.show !== state.show || this.state.style !== state.style || this.props.label !== props.label || this.props.position !== props.position;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          label = _this$props.label,
          children = _this$props.children,
          style = _this$props.style,
          css = _this$props.css,
          rest = _objectWithoutProperties(_this$props, ["label", "children", "style", "css"]);

      var show = this.state.show;

      var tooltipStyle = _objectSpread({}, style, this.state.style);

      return React__default.createElement(_StyledWrapper$2, {
        tabIndex: 0,
        role: "button",
        ref: this.wrapper,
        onFocus: this.openDropdown,
        onBlur: this.closeDropdown,
        style: {
          display: 'block',
          position: 'relative'
        },
        className: this.props.className,
        _css: css
      }, label, React__default.createElement(Tooltip$1, _extends({
        className: show ? 'start' : undefined,
        role: "tooltip",
        ref: this.tooltip,
        style: this.state.style
      }, rest), children));
    }
  }]);

  return Popover;
}(React.Component);

_defineProperty(Popover, "defaultProps", {
  color: 'white',
  style: {}
});

var _StyledWrapper$2 = styled__default(Wrapper$a)(_templateObject$3(), function (p) {
  return p._css;
});

var ESC_KEY = 27;
var Wrapper$b =
/*#__PURE__*/
styled__default.div.withConfig({
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

        return reactDom.createPortal(React__default.createElement(CSSTransition, {
          classNames: "fade",
          timeout: 200,
          in: _show,
          unmountOnExit: true
        }, React__default.createElement(Wrapper$b, _extends({
          role: "document"
        }, rest), React__default.createElement(Col, {
          className: "v-modal-body",
          size: _size,
          auto: true,
          role: "dialog"
        }, React__default.createElement(Box, {
          color: _color
        }, _title ? _title : null, _children, _footer ? _footer : null)), this.props.external, React__default.createElement("div", {
          className: "v-modal-shadow",
          onClick: this.onClickOverlay
        }))), this.element);
      }

      return null;
    }
  }]);

  return Modal;
}(React.PureComponent);

_defineProperty(Modal, "defaultProps", {
  show: false,
  color: 'white',
  size: 6,
  shadowColor: 'rgba(10,10,10,.86)'
});

var Wrapper$c =
/*#__PURE__*/
styled__default(Box).withConfig({
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
      return React__default.createElement(Wrapper$c, {
        borderless: true,
        color: color
      }, message);
    }
  }]);

  return ToastItem;
}(React.PureComponent);

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
      return React__default.createElement(TransitionGroup, {
        component: null
      }, toasts.map(function (props) {
        return React__default.createElement(CSSTransition, {
          key: props.id,
          timeout: 250,
          classNames: "move",
          unmountOnExit: true
        }, React__default.createElement(ToastItem, _extends({
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
        return reactDom.createPortal(this.renderToast(), this.element);
      }

      return null;
    }
  }]);

  return ToastContainer;
}(React.Component);

_defineProperty(ToastContainer, "defaultProps", {
  toasts: [],
  position: 'top-right',
  fixed: false
});

var Wrapper$d =
/*#__PURE__*/
styled__default.nav.withConfig({
  displayName: "Tabs__Wrapper",
  componentId: "sc-1qmwdm1-0"
})(["display:flex;justify-content:", ";.tab-content{position:relative;display:flex;", " align-items:center;justify-content:center;overflow:hidden;}"], setAlign, function (_ref) {
  var align = _ref.align;
  return align ? '' : 'flex-grow: 1;';
});
var TabItem =
/*#__PURE__*/
styled__default.div.withConfig({
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
styled__default.div.withConfig({
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
      var count = React.Children.count(_this.props.children);

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
      return React__default.createElement(TabItem, _extends({}, child.props, {
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
      return React__default.createElement(Wrapper$d, {
        align: align
      }, start > maxItems && React__default.createElement(Button, {
        color: "text"
      }, '<'), React__default.createElement("div", {
        className: "tab-content"
      }, React.Children.map(children, this.renderChildren), React__default.createElement(Indicator, {
        color: color,
        style: style
      })), total > maxItems && start > maxItems && React__default.createElement(Button, {
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
}(React.Component);

_defineProperty(Tabs, "defaultProps", {
  maxItems: 5
});

_defineProperty(Tabs, "Item", TabItem);

var Wrapper$e =
/*#__PURE__*/
styled__default.div.withConfig({
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
      return React__default.createElement(Wrapper$e, this.props, React__default.createElement(CSSTransition, {
        classNames: "load",
        timeout: this.props.duration,
        in: this.props.loading,
        unmountOnExit: true
      }, React__default.createElement("div", {
        className: "loading-bar"
      })));
    }
  }]);

  return LoadingBar;
}(React.PureComponent);

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
  return styled.css(["border-color:", ";border-right-color:", ";border-top-color:", ";"], value, theme.border, theme.border);
}

var spin =
/*#__PURE__*/
styled.keyframes(["from{transform:rotate(0deg);}to{transform:rotate(359deg);}"]);
var Spinner =
/*#__PURE__*/
styled__default.div.withConfig({
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
styled.css(["*,::after,::before{box-sizing:border-box;}html{line-height:1.15;-webkit-text-size-adjust:100%;-ms-overflow-style:scrollbar;}body{margin:0;font-family:", ";;font-size:", ";text-align:left;}h1{font-size:2em;margin:.67em 0;}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace,monospace;font-size:1em;}a{background-color:transparent;color:", ";}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted;}b,strong{font-weight:bolder;}code,kbd,samp{font-family:monospace,monospace;font-size:1em;}small{font-size:80%;}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline;}sub{bottom:-.25em;}sup{top:-.5em;}img{border-style:none;}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible;}button,select{text-transform:none;}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button;}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0;}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText;}input[type=date],input[type=time],input[type=datetime-local],input[type=month]{-webkit-appearance:listbox;}fieldset{padding:.35em .75em .625em;}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline;resize:vertical;}textarea{overflow:auto;}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0;}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto;}[type=search]{-webkit-appearance:textfield;outline-offset:-2px;}[type=search]::-webkit-search-decoration{-webkit-appearance:none;}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block;}summary{display:list-item;}template{display:none;}[hidden]{display:none;}blockquote,body,dd,dl,dt,fieldset,figure,h1,h2,h3,h4,h5,h6,hr,html,iframe,legend,li,ol,p,pre,textarea,ul{margin:0;padding:0;}button{font-size:inherit;}article,aside,figure,footer,header,hgroup,section{display:block;}input[type=\"checkbox\"],input[type=\"radio\"]{box-sizing:border-box;padding:0;}a{cursor:pointer;text-decoration:none;color:#3273dc;&:hover{color:currentColor;}}img{vertical-align:middle;border-style:none;}svg{overflow:hidden;vertical-align:middle;}small{font-size:.875em;}span{font-style:inherit;font-weight:inherit;}strong{color:#363636;font-weight:700;}table{border-collapse:collapse;border-spacing:0;}th{text-align:inherit;}ul{list-style-type:none;}"], function (_ref) {
  var theme = _ref.theme;
  return theme ? theme.fontFamily : '"Hiragino Sans", ヒラギノ角ゴシック, "Hiragino Kaku Gothic ProN", "ヒラギノ角ゴ ProN W3", 游ゴシック体, "Yu Gothic", YuGothic, "ヒラギノ角ゴシック Pro", HiraKakuPro-W3, "Hiragino Kaku Gothic Pro", Quicksand, メイリオ, Meiryo, Osaka, "ＭＳ Ｐゴシック", "MS PGothic", sans-serif';
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme ? theme.fontSize : '16px';
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.link;
});

exports.defaultTheme = theme;
exports.normalizeStyle = normalized;
exports.Break = Break;
exports.Container = Container;
exports.Row = Row;
exports.Col = Col;
exports.Content = Content;
exports.Button = Button;
exports.ButtonGroup = ButtonGroup;
exports.Table = Table;
exports.Box = Box;
exports.Progress = Progress;
exports.Accordion = Accordion;
exports.AppBar = AppBar;
exports.Tag = Tag;
exports.Hero = Hero;
exports.Tooltip = Tooltip;
exports.Card = Card;
exports.Popover = Popover;
exports.Modal = Modal;
exports.Toast = ToastContainer;
exports.Tabs = Tabs;
exports.LoadingBar = LoadingBar;
exports.Spinner = Spinner;
exports.Pre = Pre;
exports.Code = Code;
exports.H1 = H1;
exports.Field = Field;
exports.TextInput = TextInput;
exports.Textarea = Textarea;
exports.Checkbox = Checkbox;
exports.Select = Select;
exports.Radio = Radio;
exports.IconApproved = Approved;
exports.IconChevronLeftRound = ChevronLeftRound;
exports.IconChevronRightRound = ChevronRightRound;
exports.IconFileRound = FileRound;
exports.IconPencil = Pencil;
exports.IconUser = User;
exports.IconClose = Close;
exports.IconRefresh = Refresh;
exports.SideMenu = SideMenu;
exports.MenuList = MenuList;
exports.MenuLabel = MenuLabel;
exports.findColorInvert = findColorInvert;
exports.hambuger = hamburger;
exports.boxShadow = boxShadow;
exports.arrow = Arrow;
exports.setSize = setSize;
exports.mediaMobile = mediaMobile;
exports.mediaTablet = mediaTablet;
exports.mediaDesktop = mediaDesktop;
exports.mediaFullHD = mediaFullHD;
exports.mediaUntilFullHD = mediaUntilFullHD;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlzaXRzLmNqcy5qcyIsInNvdXJjZXMiOlsiLi4vc3JjL2NvbXBvbmVudHMvR3JpZC9CcmVhay50c3giLCIuLi9zcmMvdXRpbHMvbWVkaWEudHMiLCIuLi9zcmMvY29tcG9uZW50cy9HcmlkL0NvbnRhaW5lci50cyIsIi4uL3NyYy9jb21wb25lbnRzL0dyaWQvQ29sLnRzIiwiLi4vc3JjL2NvbXBvbmVudHMvR3JpZC9Sb3cudHMiLCIuLi9zcmMvY29tcG9uZW50cy9Db250ZW50L1ByZS50cyIsIi4uL3NyYy9jb21wb25lbnRzL0NvbnRlbnQvQ29kZS50cyIsIi4uL3NyYy9jb21wb25lbnRzL0NvbnRlbnQvSDEudHMiLCIuLi9zcmMvY29tcG9uZW50cy9Db250ZW50L2luZGV4LnRzIiwiLi4vbm9kZV9tb2R1bGVzL3BvbGlzaGVkL2xpYi9pbnRlcm5hbEhlbHBlcnMvX2N1cnJ5LmpzIiwiLi4vbm9kZV9tb2R1bGVzL3BvbGlzaGVkL2xpYi9pbnRlcm5hbEhlbHBlcnMvX2d1YXJkLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3BvbGlzaGVkL2xpYi9pbnRlcm5hbEhlbHBlcnMvX2hzbFRvUmdiLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3BvbGlzaGVkL2xpYi9pbnRlcm5hbEhlbHBlcnMvX25hbWVUb0hleC5qcyIsIi4uL25vZGVfbW9kdWxlcy9wb2xpc2hlZC9saWIvaW50ZXJuYWxIZWxwZXJzL19lcnJvcnMuanMiLCIuLi9ub2RlX21vZHVsZXMvcG9saXNoZWQvbGliL2NvbG9yL3BhcnNlVG9SZ2IuanMiLCIuLi9ub2RlX21vZHVsZXMvcG9saXNoZWQvbGliL2ludGVybmFsSGVscGVycy9fcmdiVG9Ic2wuanMiLCIuLi9ub2RlX21vZHVsZXMvcG9saXNoZWQvbGliL2NvbG9yL3BhcnNlVG9Ic2wuanMiLCIuLi9ub2RlX21vZHVsZXMvcG9saXNoZWQvbGliL2ludGVybmFsSGVscGVycy9fcmVkdWNlSGV4VmFsdWUuanMiLCIuLi9ub2RlX21vZHVsZXMvcG9saXNoZWQvbGliL2ludGVybmFsSGVscGVycy9fbnVtYmVyVG9IZXguanMiLCIuLi9ub2RlX21vZHVsZXMvcG9saXNoZWQvbGliL2ludGVybmFsSGVscGVycy9faHNsVG9IZXguanMiLCIuLi9ub2RlX21vZHVsZXMvcG9saXNoZWQvbGliL2NvbG9yL2hzbC5qcyIsIi4uL25vZGVfbW9kdWxlcy9wb2xpc2hlZC9saWIvY29sb3IvaHNsYS5qcyIsIi4uL25vZGVfbW9kdWxlcy9wb2xpc2hlZC9saWIvY29sb3IvcmdiLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3BvbGlzaGVkL2xpYi9jb2xvci9yZ2JhLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3BvbGlzaGVkL2xpYi9jb2xvci90b0NvbG9yU3RyaW5nLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3BvbGlzaGVkL2xpYi9jb2xvci9kYXJrZW4uanMiLCIuLi9ub2RlX21vZHVsZXMvcG9saXNoZWQvbGliL2NvbG9yL2dldEx1bWluYW5jZS5qcyIsIi4uL3NyYy91dGlscy9maW5kQ29sb3JJbnZlcnQudHMiLCIuLi9ub2RlX21vZHVsZXMvcG9saXNoZWQvbGliL2NvbG9yL3RyYW5zcGFyZW50aXplLmpzIiwiLi4vc3JjL3V0aWxzL2JveFNoYWRvdy50cyIsIi4uL3NyYy91dGlscy9zZXRTaXplLnRzIiwiLi4vc3JjL3V0aWxzL2Rpc2FibGVkQ29sb3IudHMiLCIuLi9zcmMvY29tcG9uZW50cy9CdXR0b24vaW5kZXgudHMiLCIuLi9zcmMvY29tcG9uZW50cy9CdXR0b24vQnV0dG9uR3JvdXAudHMiLCIuLi9zcmMvY29tcG9uZW50cy9UYWJsZS9pbmRleC50cyIsIi4uL3NyYy9jb21wb25lbnRzL0JveC9pbmRleC50c3giLCIuLi9zcmMvY29tcG9uZW50cy9Qcm9ncmVzcy9pbmRleC50c3giLCIuLi9zcmMvY29tcG9uZW50cy9Gb3JtL0ZpZWxkLnRzeCIsIi4uL3NyYy91dGlscy9oYW1idWdlci50cyIsIi4uL3NyYy91dGlscy9hcnJvdy50cyIsIi4uL3NyYy9jb21wb25lbnRzL0Zvcm0vSGVscE1lc3NhZ2UudHN4IiwiLi4vc3JjL2NvbXBvbmVudHMvRm9ybS9UZXh0SW5wdXQudHN4IiwiLi4vc3JjL2NvbXBvbmVudHMvRm9ybS9UZXh0YXJlYS50c3giLCIuLi9zcmMvY29tcG9uZW50cy9Gb3JtL0NoZWNrYm94LnRzeCIsIi4uL3NyYy9jb21wb25lbnRzL0Zvcm0vU2VsZWN0LnRzeCIsIi4uL3NyYy9jb21wb25lbnRzL0Zvcm0vUmFkaW8udHN4IiwiLi4vc3JjL2NvbXBvbmVudHMvSWNvbnMvQXBwcm92ZWQudHN4IiwiLi4vc3JjL2NvbXBvbmVudHMvSWNvbnMvQ2hldnJvbkxlZnRSb3VuZC50c3giLCIuLi9zcmMvY29tcG9uZW50cy9JY29ucy9DaGV2cm9uUmlnaHRSb3VuZC50c3giLCIuLi9zcmMvY29tcG9uZW50cy9JY29ucy9GaWxlUm91bmQudHN4IiwiLi4vc3JjL2NvbXBvbmVudHMvSWNvbnMvUGVuY2lsLnRzeCIsIi4uL3NyYy9jb21wb25lbnRzL0ljb25zL1VzZXIudHN4IiwiLi4vc3JjL2NvbXBvbmVudHMvSWNvbnMvQ2xvc2UudHN4IiwiLi4vc3JjL2NvbXBvbmVudHMvSWNvbnMvUmVmcmVzaC50c3giLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVhY3QtaXMvY2pzL3JlYWN0LWlzLnByb2R1Y3Rpb24ubWluLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3JlYWN0LWlzL2Nqcy9yZWFjdC1pcy5kZXZlbG9wbWVudC5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZWFjdC1pcy9pbmRleC5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9vYmplY3QtYXNzaWduL2luZGV4LmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvbGliL1JlYWN0UHJvcFR5cGVzU2VjcmV0LmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvY2hlY2tQcm9wVHlwZXMuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9mYWN0b3J5V2l0aFR5cGVDaGVja2Vycy5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2ZhY3RvcnlXaXRoVGhyb3dpbmdTaGltcy5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2luZGV4LmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2RvbS1oZWxwZXJzL2NsYXNzL2hhc0NsYXNzLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2RvbS1oZWxwZXJzL2NsYXNzL2FkZENsYXNzLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2RvbS1oZWxwZXJzL2NsYXNzL3JlbW92ZUNsYXNzLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3JlYWN0LWxpZmVjeWNsZXMtY29tcGF0L3JlYWN0LWxpZmVjeWNsZXMtY29tcGF0LmVzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3JlYWN0LXRyYW5zaXRpb24tZ3JvdXAvdXRpbHMvUHJvcFR5cGVzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3JlYWN0LXRyYW5zaXRpb24tZ3JvdXAvVHJhbnNpdGlvbi5qcyIsIi4uL25vZGVfbW9kdWxlcy9yZWFjdC10cmFuc2l0aW9uLWdyb3VwL0NTU1RyYW5zaXRpb24uanMiLCIuLi9ub2RlX21vZHVsZXMvcmVhY3QtdHJhbnNpdGlvbi1ncm91cC91dGlscy9DaGlsZE1hcHBpbmcuanMiLCIuLi9ub2RlX21vZHVsZXMvcmVhY3QtdHJhbnNpdGlvbi1ncm91cC9UcmFuc2l0aW9uR3JvdXAuanMiLCIuLi9ub2RlX21vZHVsZXMvcmVhY3QtdHJhbnNpdGlvbi1ncm91cC9SZXBsYWNlVHJhbnNpdGlvbi5qcyIsIi4uL25vZGVfbW9kdWxlcy9yZWFjdC10cmFuc2l0aW9uLWdyb3VwL2luZGV4LmpzIiwiLi4vc3JjL2NvbXBvbmVudHMvQWNjb3JkaW9uL2luZGV4LnRzeCIsIi4uL3NyYy91dGlscy9zZXRBbGlnbi50cyIsIi4uL3NyYy9jb21wb25lbnRzL0FwcEJhci9pbmRleC50c3giLCIuLi9zcmMvY29tcG9uZW50cy9UYWcvaW5kZXgudHN4IiwiLi4vc3JjL2NvbXBvbmVudHMvSGVyby9pbmRleC50c3giLCIuLi9zcmMvY29tcG9uZW50cy9Ub29sdGlwL2luZGV4LnRzeCIsIi4uL3NyYy9jb21wb25lbnRzL1NpZGVNZW51L2luZGV4LnRzeCIsIi4uL3NyYy9jb21wb25lbnRzL0NhcmQvaW5kZXgudHN4IiwiLi4vc3JjL2NvbXBvbmVudHMvUG9wb3Zlci9pbmRleC50c3giLCIuLi9zcmMvY29tcG9uZW50cy9Nb2RhbC9pbmRleC50c3giLCIuLi9zcmMvY29tcG9uZW50cy9Ub2FzdC9pbmRleC50c3giLCIuLi9zcmMvY29tcG9uZW50cy9UYWJzL2luZGV4LnRzeCIsIi4uL3NyYy9jb21wb25lbnRzL0xvYWRpbmcvQmFyLnRzeCIsIi4uL3NyYy9jb21wb25lbnRzL0xvYWRpbmcvU3Bpbm5lci50c3giLCIuLi9zcmMvY29tcG9uZW50cy9pbmRleC50cyIsIi4uL3NyYy90aGVtZS9kZWZhdWx0LnRzIiwiLi4vc3JjL3N0eWxlcy9ub3JtYWxpemUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQnJlYWsoKSB7XG4gIHJldHVybiA8ZGl2IHN0eWxlPXt7IHdpZHRoOiAnMTAwJScsIGhlaWdodDogMCB9fSAvPjtcbn07XG4iLCJpbXBvcnQgeyBUaGVtZVR5cGUgfSBmcm9tICcuLi90eXBlcyc7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIHRoZW1lOiBUaGVtZVR5cGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZWRpYU1vYmlsZSh7IHRoZW1lIH06IFByb3BzKSB7XG4gIGlmICghdGhlbWUucmVzcG9uc2l2ZSkgcmV0dXJuICdAbWVkaWEgKG1heC13aWR0aDogMCknO1xuICByZXR1cm4gYEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICR7dGhlbWUubW9iaWxlfXB4KWA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZWRpYVRhYmxldCh7IHRoZW1lIH06IFByb3BzKSB7XG4gIGlmICghdGhlbWUucmVzcG9uc2l2ZSkgcmV0dXJuICdAbWVkaWEgKG1heC13aWR0aDogMCknO1xuICByZXR1cm4gYEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICR7dGhlbWUudGFibGV0fXB4KWA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZWRpYURlc2t0b3AoeyB0aGVtZSB9OiBQcm9wcykge1xuICBpZiAoIXRoZW1lLnJlc3BvbnNpdmUpIHJldHVybiAnQG1lZGlhIChtYXgtd2lkdGg6IDApJztcbiAgcmV0dXJuIGBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAke3RoZW1lLmRlc2t0b3B9cHgpYDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1lZGlhRnVsbEhEKHsgdGhlbWUgfTogUHJvcHMpIHtcbiAgaWYgKCF0aGVtZS5yZXNwb25zaXZlKSByZXR1cm4gJ0BtZWRpYSAobWF4LXdpZHRoOiAwKSc7XG4gIHJldHVybiBgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogJHt0aGVtZS5mdWxsaGR9cHgpYDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1lZGlhVW50aWxGdWxsSEQoeyB0aGVtZSB9OiBQcm9wcykge1xuICBpZiAoIXRoZW1lLnJlc3BvbnNpdmUpIHJldHVybiAnQG1lZGlhIChtYXgtd2lkdGg6IDApJztcbiAgcmV0dXJuIGBAbWVkaWEgKG1pbi13aWR0aDogJHt0aGVtZS5mdWxsaGR9cHgpYDtcbn1cbiIsImltcG9ydCBzdHlsZWQsIHsgY3NzIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgbWVkaWFGdWxsSEQsIG1lZGlhVGFibGV0LCBtZWRpYURlc2t0b3AsIG1lZGlhTW9iaWxlIH0gZnJvbSAnLi4vLi4vdXRpbHMvbWVkaWEnO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICAvKiogICovXG4gIGZsdWlkPzogYm9vbGVhbjtcbn1cblxuZnVuY3Rpb24gc2V0UmVzcG9uc2l2ZSh7IGZsdWlkIH06IFByb3BzKTogYW55IHtcbiAgaWYgKGZsdWlkKSB7XG4gICAgcmV0dXJuIGNzc2BcbiAgICAgICR7bWVkaWFGdWxsSER9IHtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMC43NXJlbTtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwLjc1cmVtO1xuICAgICAgfVxuICAgICAgJHttZWRpYURlc2t0b3B9IHtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMC43NXJlbTtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwLjc1cmVtO1xuICAgICAgfVxuICAgICAgJHttZWRpYU1vYmlsZX0ge1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwLjVyZW07XG4gICAgICAgIHBhZGRpbmctbGVmdDogMC41cmVtO1xuICAgICAgfVxuICAgIGA7XG4gIH1cblxuICByZXR1cm4gY3NzYFxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAke21lZGlhRnVsbEhEfSB7XG4gICAgICBtYXgtd2lkdGg6ICR7KHsgdGhlbWUgfTogYW55KSA9PiB0aGVtZS5mdWxsaGQgLSAoMiAqIHRoZW1lLmd1dHRlcil9cHg7XG4gICAgfVxuICAgICR7bWVkaWFEZXNrdG9wfSB7XG4gICAgICBtYXgtd2lkdGg6ICR7KHsgdGhlbWUgfTogYW55KSA9PiB0aGVtZS5kZXNrdG9wIC0gKDIgKiB0aGVtZS5ndXR0ZXIpfXB4O1xuICAgIH1cbiAgICAke21lZGlhVGFibGV0fSB7XG4gICAgICBtYXgtd2lkdGg6ICR7KHsgdGhlbWUgfTogYW55KSA9PiB0aGVtZS50YWJsZXQgLSAoMiAqIHRoZW1lLnNtYWxsR3V0dGVyKX1weDtcbiAgICB9XG4gICAgJHttZWRpYU1vYmlsZX0ge1xuICAgICAgbWF4LXdpZHRoOiAkeyh7IHRoZW1lIH06IGFueSkgPT4gdGhlbWUubW9iaWxlIC0gKDIgKiB0aGVtZS5zbWFsbEd1dHRlcil9cHg7XG4gICAgfVxuICBgO1xufVxuXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2PFByb3BzPmBcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcblxuICAke3NldFJlc3BvbnNpdmV9XG5gO1xuQ29udGFpbmVyLmRpc3BsYXlOYW1lID0gJ0NvbnRhaW5lcic7XG5Db250YWluZXIuZGVmYXVsdFByb3BzID0ge1xuICBmbHVpZDogZmFsc2UsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb250YWluZXI7XG4iLCJpbXBvcnQgc3R5bGVkLCB7IGNzcyB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7IG1lZGlhVGFibGV0IH0gZnJvbSAnLi4vLi4vdXRpbHMvbWVkaWEnO1xuaW1wb3J0IHsgQ29sU2l6ZVR5cGUgfSBmcm9tICcuLi8uLi90eXBlcyc7XG5cbmludGVyZmFjZSBDb2xQcm9wcyB7XG4gIC8qKiDlm7rlrprjga7luYXjgpLmjIflrprjgZnjgovloLTlkIggKi9cbiAgbmFycm93PzogYm9vbGVhbjtcbiAgLyoqIDEtMTLjga7jgrXjgqTjgrogKi9cbiAgc2l6ZT86IENvbFNpemVUeXBlO1xuICAvKiogMS0xMuOBruW3puOBrm9mZnNldCAqL1xuICBvZmZzZXQ/OiBDb2xTaXplVHlwZTtcbiAgLyoqIDEtMTLln7rmupbjga7jgrXjgqTjgrrjgpLnlLvpnaLjgrXjgqTjgrrjga7jgojjgaPjgablj6/lpInjgavjgZnjgosgKi9cbiAgYXV0bz86IGJvb2xlYW47XG59XG5cbmZ1bmN0aW9uIHBhcmNlbnRhZ2UodmFsdWU/OiBDb2xTaXplVHlwZSkge1xuICBpZiAoIXZhbHVlKSByZXR1cm4gMDtcbiAgaWYgKHZhbHVlID49IDEyKSByZXR1cm4gMTAwO1xuICByZXR1cm4gTWF0aC5jZWlsKCh2YWx1ZSAvIDEyKSAqIDEwMCAqIDEwMDAwMCkgLyAxMDAwMDA7XG59XG5cbmZ1bmN0aW9uIHJlbmRlclNpemUoeyBzaXplLCBuYXJyb3csIGF1dG8sIG9mZnNldCB9OiBDb2xQcm9wcykge1xuICBpZiAobmFycm93KSByZXR1cm4gbnVsbDtcbiAgaWYgKCFzaXplIHx8IHNpemUgPCAxIHx8IHNpemUgPiAxMikge1xuICAgIHJldHVybiBjc3NgXG4gICAgICB3aWR0aDogYXV0bztcbiAgICAgIG1heC13aWR0aDogbm9uZTtcblxuICAgICAgJHttZWRpYVRhYmxldH0ge1xuICAgICAgICBwYWRkaW5nOiAwLjVyZW07XG4gICAgICB9XG4gICAgYDtcbiAgfVxuXG4gIGNvbnN0IHZhbHVlID0gcGFyY2VudGFnZShzaXplKTtcbiAgY29uc3Qgb2ZmVmFsID0gb2Zmc2V0ID8gcGFyY2VudGFnZShvZmZzZXQpIDogMDtcbiAgY29uc3QgYXV0b1NpemUgPSB2YWx1ZSA+IDMzID8gMTAwIDogdmFsdWUgKiAzO1xuICByZXR1cm4gY3NzYFxuICAgIHdpZHRoOiAke3ZhbHVlfSU7XG4gICAgbWF4LXdpZHRoOiAke3ZhbHVlfSU7XG4gICAgJHtvZmZzZXQgPyBgbWFyZ2luLWxlZnQ6ICR7b2ZmVmFsfSU7YCA6IHt9fVxuXG4gICAgJHttZWRpYVRhYmxldH0ge1xuICAgICAgd2lkdGg6ICR7YXV0b1NpemV9JTtcbiAgICAgIG1heC13aWR0aDogJHthdXRvU2l6ZX0lO1xuICAgICAgcGFkZGluZzogMC41cmVtO1xuICAgICAgJHtvZmZzZXQgPyBgbWFyZ2luLWxlZnQ6IDA7YCA6IHt9fVxuICAgIH1cbiAgYDtcbn1cblxuY29uc3QgQ29sID0gc3R5bGVkLmRpdjxDb2xQcm9wcz5gXG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtaW4taGVpZ2h0OiAxcHg7XG4gIHBhZGRpbmc6IDAuNzVyZW07XG5cbiAgJHsoeyBuYXJyb3cgfSkgPT4gbmFycm93ID8gJ2ZsZXg6IG5vbmU7JyA6IHt9fVxuICAkeyh7IG9mZnNldCB9KSA9PiBvZmZzZXQgPyBgbWFyZ2luLWxlZnQ6ICR7cGFyY2VudGFnZShvZmZzZXQpfSU7YCA6IHt9fVxuXG4gICR7cmVuZGVyU2l6ZX1cbmA7XG5cbkNvbC5kaXNwbGF5TmFtZSA9ICdDb2wnO1xuXG5leHBvcnQgZGVmYXVsdCBDb2w7XG4iLCJpbXBvcnQgc3R5bGVkLCB7IGNzcyB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBDb2wgZnJvbSAnLi9Db2wnO1xuaW1wb3J0IHsgbWVkaWFGdWxsSEQsIG1lZGlhVGFibGV0IH0gZnJvbSAnLi4vLi4vdXRpbHMvbWVkaWEnO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICAvKiog5Zu65a6a5bmFICovXG4gIHdpZHRoPzogc3RyaW5nO1xuICAvKiog5ZCR44GP5pWw44Gu6KGM44Gn5a++5b+c44Gn44GN44KL44KI44GG44Gr44GZ44KLICovXG4gIG11bHRpbGluZT86IGJvb2xlYW47XG4gIC8qKiDnuKbjga7kuK3lpK7mj4PjgYjjgavjgZnjgosgKi9cbiAgdmNlbnRlcj86IGJvb2xlYW47XG4gIC8qKiDmqKrluYXjga7kuK3lpK7mj4PjgYjjgavjgZnjgosgKi9cbiAgY2VudGVyPzogYm9vbGVhbjtcbiAgLyoqIENvbOOBrumWk+malOOCkuOBquOBj+OBmSAqL1xuICBub0d1dHRlcj86IGJvb2xlYW47XG59XG5cbmZ1bmN0aW9uIHJlbmRlckd1dHRlcih7IG5vR3V0dGVyIH06IFByb3BzKSB7XG4gIGlmIChub0d1dHRlcikge1xuICAgIHJldHVybiBjc3NgXG4gICAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgICBtYXJnaW4tbGVmdDogMDtcblxuICAgICAgPiAke0NvbH0ge1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwO1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgICB9XG4gICAgYDtcbiAgfVxuICByZXR1cm4gY3NzYFxuICAgICR7bWVkaWFGdWxsSER9IHtcbiAgICAgIG1hcmdpbi1sZWZ0OiAtMC43NXJlbTtcbiAgICAgIG1hcmdpbi1yaWdodDogLTAuNzVyZW07XG4gICAgICBtYXJnaW4tdG9wOiAtMC43NXJlbTtcbiAgICAgIG1hcmdpbi1ib3R0b206IDAuNzVyZW07XG4gICAgfVxuICAgICR7bWVkaWFUYWJsZXR9IHtcbiAgICAgIG1hcmdpbi1sZWZ0OiAtMC41cmVtO1xuICAgICAgbWFyZ2luLXJpZ2h0OiAtMC41cmVtO1xuICAgICAgbWFyZ2luLXRvcDogLTAuNXJlbTtcbiAgICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbiAgICB9XG4gIGA7XG59XG5cbmNvbnN0IFJvdyA9IHN0eWxlZC5kaXY8UHJvcHM+YFxuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAgZmxleC13cmFwOiB3cmFwO1xuXG4gICR7KHsgdmNlbnRlciB9KSA9PiB2Y2VudGVyID8gJ2FsaWduLWl0ZW1zOiBjZW50ZXI7JyA6ICcnfVxuICAkeyh7IGNlbnRlciB9KSA9PiBjZW50ZXIgPyAnanVzdGlmeS1jb250ZW50OiBjZW50ZXI7JyA6ICcnfVxuXG4gICR7cmVuZGVyR3V0dGVyfVxuYDtcblxuUm93LmRpc3BsYXlOYW1lID0gJ1Jvdyc7XG5cbmV4cG9ydCBkZWZhdWx0IFJvdztcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5jb25zdCBQcmUgPSBzdHlsZWQucHJlYFxuICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XG4gIG92ZXJmbG93LXg6IGF1dG87XG4gIHBhZGRpbmc6IDEuMjVlbSAxLjVlbTtcbiAgd2hpdGUtc3BhY2U6IHByZTtcbiAgd29yZC13cmFwOiBub3JtYWw7XG5cbiAgJjpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XG4gIH1cbmA7XG5QcmUuZGlzcGxheU5hbWUgPSAnUHJlJztcblxuZXhwb3J0IGRlZmF1bHQgUHJlO1xuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmNvbnN0IENvZGUgPSBzdHlsZWQuY29kZWBcbiAgYmFja2dyb3VuZC1jb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5iYWNrZ3JvdW5kfTtcbiAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuZGFuZ2VyfTtcbiAgZm9udC1zaXplOiAuODc1ZW07XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHBhZGRpbmc6IC4yNWVtIC41ZW0gLjI1ZW07XG5gO1xuXG5Db2RlLmRpc3BsYXlOYW1lID0gJ0NvZGUnO1xuXG5leHBvcnQgZGVmYXVsdCBDb2RlO1xuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmNvbnN0IEgxID0gc3R5bGVkLmgxYFxuICBmb250LXNpemU6IDJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMC41ZW07XG4gIHBhZGRpbmctbGVmdDogMXJlbTtcblxuICBib3JkZXItbGVmdDogMXJlbSBzb2xpZDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkO1xuICBib3JkZXItY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuYm9yZGVyfTtcbmA7XG5IMS5kaXNwbGF5TmFtZSA9ICdIMSc7XG5cbmV4cG9ydCBkZWZhdWx0IEgxO1xuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmNvbnN0IENvbnRlbnQgPSBzdHlsZWQuZGl2YFxuICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS50ZXh0fTtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcblxuICBsaSArIGxpIHtcbiAgICBtYXJnaW4tdG9wOiAwLjI1ZW07XG4gIH1cblxuICBwLFxuICBkbCxcbiAgb2wsXG4gIHVsLFxuICBibG9ja3F1b3RlLFxuICBwcmUsXG4gIHRhYmxlIHtcbiAgICAmOm5vdCg6bGFzdC1jaGlsZCkge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMWVtO1xuICAgIH1cbiAgfVxuXG4gIGgxLFxuICBoMixcbiAgaDMsXG4gIGg0LFxuICBoNSxcbiAgaDYge1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgbGluZS1oZWlnaHQ6IDEuMTI1O1xuICB9XG5cbiAgaDEge1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcbiAgfVxuXG4gIGgyIHtcbiAgICBmb250LXNpemU6IDEuNzVlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjU3MTRlbTtcblxuICAgICY6bm90KDpmaXJzdC1jaGlsZCkge1xuICAgICAgbWFyZ2luLXRvcDogMS4xNDI4ZW07XG4gICAgfVxuICB9XG5cbiAgaDMge1xuICAgIGZvbnQtc2l6ZTogMS41ZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMC42NjY2ZW07XG5cbiAgICAmOm5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgICAgIG1hcmdpbi10b3A6IDEuMzMzM2VtO1xuICAgIH1cbiAgfVxuXG4gIGg0IHtcbiAgICBmb250LXNpemU6IDEuMjVlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjhlbTtcbiAgfVxuXG4gIGg1IHtcbiAgICBmb250LXNpemU6IDEuMTI1ZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMC44ODg4ZW07XG4gIH1cblxuICBoNiB7XG4gICAgZm9udC1zaXplOiAxZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMWVtO1xuICB9XG5cbiAgb2wge1xuICAgIGxpc3Qtc3R5bGU6IGRlY2ltYWwgb3V0c2lkZTtcbiAgICBtYXJnaW4tbGVmdDogMmVtO1xuICAgIG1hcmdpbi10b3A6IDFlbTtcbiAgfVxuXG4gIHVsIHtcbiAgICBsaXN0LXN0eWxlOiBkaXNjIG91dHNpZGU7XG4gICAgbWFyZ2luLWxlZnQ6IDJlbTtcbiAgICBtYXJnaW4tdG9wOiAxZW07XG4gICAgdWwge1xuICAgICAgbGlzdC1zdHlsZS10eXBlOiBjaXJjbGU7XG4gICAgICBtYXJnaW4tdG9wOiAwLjVlbTtcbiAgICAgIHVsIHtcbiAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBzcXVhcmU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZGQge1xuICAgIG1hcmdpbi1sZWZ0OiAyZW07XG4gIH1cblxuICB0YWJsZSB7XG4gICAgd2lkdGg6IDEwMCU7XG5cbiAgICB0ZCwgdGgge1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5ib3JkZXJ9O1xuICAgICAgYm9yZGVyLXdpZHRoOiAwIDAgMXB4O1xuICAgICAgcGFkZGluZzogMC41ZW0gMC43NWVtO1xuICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICB9XG5cbiAgICB0aCB7XG4gICAgICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS50ZXh0fTtcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgfVxuXG4gICAgdGhlYWQge1xuICAgICAgdGQsIHRoIHtcbiAgICAgICAgYm9yZGVyLXdpZHRoOiAwIDAgMnB4O1xuICAgICAgICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS50ZXh0fTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0Zm9vdCB7XG4gICAgICB0ZCwgdGgge1xuICAgICAgICBib3JkZXItd2lkdGg6IDJweCAwIDA7XG4gICAgICAgIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnRleHR9O1xuICAgICAgfVxuICAgIH1cblxuICAgIHRib2R5ID4gdHI6bGFzdC1jaGlsZHtcbiAgICAgIHRkLCB0aCB7XG4gICAgICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDA7XG4gICAgICB9XG4gICAgfVxuICB9XG5gO1xuQ29udGVudC5kaXNwbGF5TmFtZSA9ICdDb250ZW50JztcblxuZXhwb3J0IHsgZGVmYXVsdCBhcyBQcmUgfSBmcm9tICcuL1ByZSc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIENvZGUgfSBmcm9tICcuL0NvZGUnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBIMSB9IGZyb20gJy4vSDEnO1xuXG5leHBvcnQgZGVmYXVsdCBDb250ZW50O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSBjdXJyeTtcblxuLy8gVHlwZSBkZWZpbml0aW9ucyB0YWtlbiBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9nY2FudGkvZmxvdy1zdGF0aWMtbGFuZC9ibG9iL21hc3Rlci9zcmMvRnVuLmpzXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlZGVjbGFyZVxuZnVuY3Rpb24gY3VycmllZChmLCBsZW5ndGgsIGFjYykge1xuICByZXR1cm4gZnVuY3Rpb24gZm4oKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1yZXN0LXBhcmFtc1xuICAgIHZhciBjb21iaW5lZCA9IGFjYy5jb25jYXQoQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKSk7XG4gICAgcmV0dXJuIGNvbWJpbmVkLmxlbmd0aCA+PSBsZW5ndGggPyBmLmFwcGx5KHRoaXMsIGNvbWJpbmVkKSA6IGN1cnJpZWQoZiwgbGVuZ3RoLCBjb21iaW5lZCk7XG4gIH07XG59IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZWRlY2xhcmVcblxuXG5mdW5jdGlvbiBjdXJyeShmKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tcmVkZWNsYXJlXG4gIHJldHVybiBjdXJyaWVkKGYsIGYubGVuZ3RoLCBbXSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG5mdW5jdGlvbiBndWFyZChsb3dlckJvdW5kYXJ5LCB1cHBlckJvdW5kYXJ5LCB2YWx1ZSkge1xuICByZXR1cm4gTWF0aC5tYXgobG93ZXJCb3VuZGFyeSwgTWF0aC5taW4odXBwZXJCb3VuZGFyeSwgdmFsdWUpKTtcbn1cblxudmFyIF9kZWZhdWx0ID0gZ3VhcmQ7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG5mdW5jdGlvbiBjb2xvclRvSW50KGNvbG9yKSB7XG4gIHJldHVybiBNYXRoLnJvdW5kKGNvbG9yICogMjU1KTtcbn1cblxuZnVuY3Rpb24gY29udmVydFRvSW50KHJlZCwgZ3JlZW4sIGJsdWUpIHtcbiAgcmV0dXJuIGNvbG9yVG9JbnQocmVkKSArIFwiLFwiICsgY29sb3JUb0ludChncmVlbikgKyBcIixcIiArIGNvbG9yVG9JbnQoYmx1ZSk7XG59XG5cbmZ1bmN0aW9uIGhzbFRvUmdiKGh1ZSwgc2F0dXJhdGlvbiwgbGlnaHRuZXNzLCBjb252ZXJ0KSB7XG4gIGlmIChjb252ZXJ0ID09PSB2b2lkIDApIHtcbiAgICBjb252ZXJ0ID0gY29udmVydFRvSW50O1xuICB9XG5cbiAgaWYgKHNhdHVyYXRpb24gPT09IDApIHtcbiAgICAvLyBhY2hyb21hdGljXG4gICAgcmV0dXJuIGNvbnZlcnQobGlnaHRuZXNzLCBsaWdodG5lc3MsIGxpZ2h0bmVzcyk7XG4gIH0gLy8gZm9ybXVsYXIgZnJvbSBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9IU0xfYW5kX0hTVlxuXG5cbiAgdmFyIGh1ZVByaW1lID0gaHVlICUgMzYwIC8gNjA7XG4gIHZhciBjaHJvbWEgPSAoMSAtIE1hdGguYWJzKDIgKiBsaWdodG5lc3MgLSAxKSkgKiBzYXR1cmF0aW9uO1xuICB2YXIgc2Vjb25kQ29tcG9uZW50ID0gY2hyb21hICogKDEgLSBNYXRoLmFicyhodWVQcmltZSAlIDIgLSAxKSk7XG4gIHZhciByZWQgPSAwO1xuICB2YXIgZ3JlZW4gPSAwO1xuICB2YXIgYmx1ZSA9IDA7XG5cbiAgaWYgKGh1ZVByaW1lID49IDAgJiYgaHVlUHJpbWUgPCAxKSB7XG4gICAgcmVkID0gY2hyb21hO1xuICAgIGdyZWVuID0gc2Vjb25kQ29tcG9uZW50O1xuICB9IGVsc2UgaWYgKGh1ZVByaW1lID49IDEgJiYgaHVlUHJpbWUgPCAyKSB7XG4gICAgcmVkID0gc2Vjb25kQ29tcG9uZW50O1xuICAgIGdyZWVuID0gY2hyb21hO1xuICB9IGVsc2UgaWYgKGh1ZVByaW1lID49IDIgJiYgaHVlUHJpbWUgPCAzKSB7XG4gICAgZ3JlZW4gPSBjaHJvbWE7XG4gICAgYmx1ZSA9IHNlY29uZENvbXBvbmVudDtcbiAgfSBlbHNlIGlmIChodWVQcmltZSA+PSAzICYmIGh1ZVByaW1lIDwgNCkge1xuICAgIGdyZWVuID0gc2Vjb25kQ29tcG9uZW50O1xuICAgIGJsdWUgPSBjaHJvbWE7XG4gIH0gZWxzZSBpZiAoaHVlUHJpbWUgPj0gNCAmJiBodWVQcmltZSA8IDUpIHtcbiAgICByZWQgPSBzZWNvbmRDb21wb25lbnQ7XG4gICAgYmx1ZSA9IGNocm9tYTtcbiAgfSBlbHNlIGlmIChodWVQcmltZSA+PSA1ICYmIGh1ZVByaW1lIDwgNikge1xuICAgIHJlZCA9IGNocm9tYTtcbiAgICBibHVlID0gc2Vjb25kQ29tcG9uZW50O1xuICB9XG5cbiAgdmFyIGxpZ2h0bmVzc01vZGlmaWNhdGlvbiA9IGxpZ2h0bmVzcyAtIGNocm9tYSAvIDI7XG4gIHZhciBmaW5hbFJlZCA9IHJlZCArIGxpZ2h0bmVzc01vZGlmaWNhdGlvbjtcbiAgdmFyIGZpbmFsR3JlZW4gPSBncmVlbiArIGxpZ2h0bmVzc01vZGlmaWNhdGlvbjtcbiAgdmFyIGZpbmFsQmx1ZSA9IGJsdWUgKyBsaWdodG5lc3NNb2RpZmljYXRpb247XG4gIHJldHVybiBjb252ZXJ0KGZpbmFsUmVkLCBmaW5hbEdyZWVuLCBmaW5hbEJsdWUpO1xufVxuXG52YXIgX2RlZmF1bHQgPSBoc2xUb1JnYjtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG52YXIgbmFtZWRDb2xvck1hcCA9IHtcbiAgYWxpY2VibHVlOiAnZjBmOGZmJyxcbiAgYW50aXF1ZXdoaXRlOiAnZmFlYmQ3JyxcbiAgYXF1YTogJzAwZmZmZicsXG4gIGFxdWFtYXJpbmU6ICc3ZmZmZDQnLFxuICBhenVyZTogJ2YwZmZmZicsXG4gIGJlaWdlOiAnZjVmNWRjJyxcbiAgYmlzcXVlOiAnZmZlNGM0JyxcbiAgYmxhY2s6ICcwMDAnLFxuICBibGFuY2hlZGFsbW9uZDogJ2ZmZWJjZCcsXG4gIGJsdWU6ICcwMDAwZmYnLFxuICBibHVldmlvbGV0OiAnOGEyYmUyJyxcbiAgYnJvd246ICdhNTJhMmEnLFxuICBidXJseXdvb2Q6ICdkZWI4ODcnLFxuICBjYWRldGJsdWU6ICc1ZjllYTAnLFxuICBjaGFydHJldXNlOiAnN2ZmZjAwJyxcbiAgY2hvY29sYXRlOiAnZDI2OTFlJyxcbiAgY29yYWw6ICdmZjdmNTAnLFxuICBjb3JuZmxvd2VyYmx1ZTogJzY0OTVlZCcsXG4gIGNvcm5zaWxrOiAnZmZmOGRjJyxcbiAgY3JpbXNvbjogJ2RjMTQzYycsXG4gIGN5YW46ICcwMGZmZmYnLFxuICBkYXJrYmx1ZTogJzAwMDA4YicsXG4gIGRhcmtjeWFuOiAnMDA4YjhiJyxcbiAgZGFya2dvbGRlbnJvZDogJ2I4ODYwYicsXG4gIGRhcmtncmF5OiAnYTlhOWE5JyxcbiAgZGFya2dyZWVuOiAnMDA2NDAwJyxcbiAgZGFya2dyZXk6ICdhOWE5YTknLFxuICBkYXJra2hha2k6ICdiZGI3NmInLFxuICBkYXJrbWFnZW50YTogJzhiMDA4YicsXG4gIGRhcmtvbGl2ZWdyZWVuOiAnNTU2YjJmJyxcbiAgZGFya29yYW5nZTogJ2ZmOGMwMCcsXG4gIGRhcmtvcmNoaWQ6ICc5OTMyY2MnLFxuICBkYXJrcmVkOiAnOGIwMDAwJyxcbiAgZGFya3NhbG1vbjogJ2U5OTY3YScsXG4gIGRhcmtzZWFncmVlbjogJzhmYmM4ZicsXG4gIGRhcmtzbGF0ZWJsdWU6ICc0ODNkOGInLFxuICBkYXJrc2xhdGVncmF5OiAnMmY0ZjRmJyxcbiAgZGFya3NsYXRlZ3JleTogJzJmNGY0ZicsXG4gIGRhcmt0dXJxdW9pc2U6ICcwMGNlZDEnLFxuICBkYXJrdmlvbGV0OiAnOTQwMGQzJyxcbiAgZGVlcHBpbms6ICdmZjE0OTMnLFxuICBkZWVwc2t5Ymx1ZTogJzAwYmZmZicsXG4gIGRpbWdyYXk6ICc2OTY5NjknLFxuICBkaW1ncmV5OiAnNjk2OTY5JyxcbiAgZG9kZ2VyYmx1ZTogJzFlOTBmZicsXG4gIGZpcmVicmljazogJ2IyMjIyMicsXG4gIGZsb3JhbHdoaXRlOiAnZmZmYWYwJyxcbiAgZm9yZXN0Z3JlZW46ICcyMjhiMjInLFxuICBmdWNoc2lhOiAnZmYwMGZmJyxcbiAgZ2FpbnNib3JvOiAnZGNkY2RjJyxcbiAgZ2hvc3R3aGl0ZTogJ2Y4ZjhmZicsXG4gIGdvbGQ6ICdmZmQ3MDAnLFxuICBnb2xkZW5yb2Q6ICdkYWE1MjAnLFxuICBncmF5OiAnODA4MDgwJyxcbiAgZ3JlZW46ICcwMDgwMDAnLFxuICBncmVlbnllbGxvdzogJ2FkZmYyZicsXG4gIGdyZXk6ICc4MDgwODAnLFxuICBob25leWRldzogJ2YwZmZmMCcsXG4gIGhvdHBpbms6ICdmZjY5YjQnLFxuICBpbmRpYW5yZWQ6ICdjZDVjNWMnLFxuICBpbmRpZ286ICc0YjAwODInLFxuICBpdm9yeTogJ2ZmZmZmMCcsXG4gIGtoYWtpOiAnZjBlNjhjJyxcbiAgbGF2ZW5kZXI6ICdlNmU2ZmEnLFxuICBsYXZlbmRlcmJsdXNoOiAnZmZmMGY1JyxcbiAgbGF3bmdyZWVuOiAnN2NmYzAwJyxcbiAgbGVtb25jaGlmZm9uOiAnZmZmYWNkJyxcbiAgbGlnaHRibHVlOiAnYWRkOGU2JyxcbiAgbGlnaHRjb3JhbDogJ2YwODA4MCcsXG4gIGxpZ2h0Y3lhbjogJ2UwZmZmZicsXG4gIGxpZ2h0Z29sZGVucm9keWVsbG93OiAnZmFmYWQyJyxcbiAgbGlnaHRncmF5OiAnZDNkM2QzJyxcbiAgbGlnaHRncmVlbjogJzkwZWU5MCcsXG4gIGxpZ2h0Z3JleTogJ2QzZDNkMycsXG4gIGxpZ2h0cGluazogJ2ZmYjZjMScsXG4gIGxpZ2h0c2FsbW9uOiAnZmZhMDdhJyxcbiAgbGlnaHRzZWFncmVlbjogJzIwYjJhYScsXG4gIGxpZ2h0c2t5Ymx1ZTogJzg3Y2VmYScsXG4gIGxpZ2h0c2xhdGVncmF5OiAnNzg5JyxcbiAgbGlnaHRzbGF0ZWdyZXk6ICc3ODknLFxuICBsaWdodHN0ZWVsYmx1ZTogJ2IwYzRkZScsXG4gIGxpZ2h0eWVsbG93OiAnZmZmZmUwJyxcbiAgbGltZTogJzBmMCcsXG4gIGxpbWVncmVlbjogJzMyY2QzMicsXG4gIGxpbmVuOiAnZmFmMGU2JyxcbiAgbWFnZW50YTogJ2YwZicsXG4gIG1hcm9vbjogJzgwMDAwMCcsXG4gIG1lZGl1bWFxdWFtYXJpbmU6ICc2NmNkYWEnLFxuICBtZWRpdW1ibHVlOiAnMDAwMGNkJyxcbiAgbWVkaXVtb3JjaGlkOiAnYmE1NWQzJyxcbiAgbWVkaXVtcHVycGxlOiAnOTM3MGRiJyxcbiAgbWVkaXVtc2VhZ3JlZW46ICczY2IzNzEnLFxuICBtZWRpdW1zbGF0ZWJsdWU6ICc3YjY4ZWUnLFxuICBtZWRpdW1zcHJpbmdncmVlbjogJzAwZmE5YScsXG4gIG1lZGl1bXR1cnF1b2lzZTogJzQ4ZDFjYycsXG4gIG1lZGl1bXZpb2xldHJlZDogJ2M3MTU4NScsXG4gIG1pZG5pZ2h0Ymx1ZTogJzE5MTk3MCcsXG4gIG1pbnRjcmVhbTogJ2Y1ZmZmYScsXG4gIG1pc3R5cm9zZTogJ2ZmZTRlMScsXG4gIG1vY2Nhc2luOiAnZmZlNGI1JyxcbiAgbmF2YWpvd2hpdGU6ICdmZmRlYWQnLFxuICBuYXZ5OiAnMDAwMDgwJyxcbiAgb2xkbGFjZTogJ2ZkZjVlNicsXG4gIG9saXZlOiAnODA4MDAwJyxcbiAgb2xpdmVkcmFiOiAnNmI4ZTIzJyxcbiAgb3JhbmdlOiAnZmZhNTAwJyxcbiAgb3JhbmdlcmVkOiAnZmY0NTAwJyxcbiAgb3JjaGlkOiAnZGE3MGQ2JyxcbiAgcGFsZWdvbGRlbnJvZDogJ2VlZThhYScsXG4gIHBhbGVncmVlbjogJzk4ZmI5OCcsXG4gIHBhbGV0dXJxdW9pc2U6ICdhZmVlZWUnLFxuICBwYWxldmlvbGV0cmVkOiAnZGI3MDkzJyxcbiAgcGFwYXlhd2hpcDogJ2ZmZWZkNScsXG4gIHBlYWNocHVmZjogJ2ZmZGFiOScsXG4gIHBlcnU6ICdjZDg1M2YnLFxuICBwaW5rOiAnZmZjMGNiJyxcbiAgcGx1bTogJ2RkYTBkZCcsXG4gIHBvd2RlcmJsdWU6ICdiMGUwZTYnLFxuICBwdXJwbGU6ICc4MDAwODAnLFxuICByZWJlY2NhcHVycGxlOiAnNjM5JyxcbiAgcmVkOiAnZjAwJyxcbiAgcm9zeWJyb3duOiAnYmM4ZjhmJyxcbiAgcm95YWxibHVlOiAnNDE2OWUxJyxcbiAgc2FkZGxlYnJvd246ICc4YjQ1MTMnLFxuICBzYWxtb246ICdmYTgwNzInLFxuICBzYW5keWJyb3duOiAnZjRhNDYwJyxcbiAgc2VhZ3JlZW46ICcyZThiNTcnLFxuICBzZWFzaGVsbDogJ2ZmZjVlZScsXG4gIHNpZW5uYTogJ2EwNTIyZCcsXG4gIHNpbHZlcjogJ2MwYzBjMCcsXG4gIHNreWJsdWU6ICc4N2NlZWInLFxuICBzbGF0ZWJsdWU6ICc2YTVhY2QnLFxuICBzbGF0ZWdyYXk6ICc3MDgwOTAnLFxuICBzbGF0ZWdyZXk6ICc3MDgwOTAnLFxuICBzbm93OiAnZmZmYWZhJyxcbiAgc3ByaW5nZ3JlZW46ICcwMGZmN2YnLFxuICBzdGVlbGJsdWU6ICc0NjgyYjQnLFxuICB0YW46ICdkMmI0OGMnLFxuICB0ZWFsOiAnMDA4MDgwJyxcbiAgdGhpc3RsZTogJ2Q4YmZkOCcsXG4gIHRvbWF0bzogJ2ZmNjM0NycsXG4gIHR1cnF1b2lzZTogJzQwZTBkMCcsXG4gIHZpb2xldDogJ2VlODJlZScsXG4gIHdoZWF0OiAnZjVkZWIzJyxcbiAgd2hpdGU6ICdmZmYnLFxuICB3aGl0ZXNtb2tlOiAnZjVmNWY1JyxcbiAgeWVsbG93OiAnZmYwJyxcbiAgeWVsbG93Z3JlZW46ICc5YWNkMzInXG4gIC8qKlxuICAgKiBDaGVja3MgaWYgYSBzdHJpbmcgaXMgYSBDU1MgbmFtZWQgY29sb3IgYW5kIHJldHVybnMgaXRzIGVxdWl2YWxlbnQgaGV4IHZhbHVlLCBvdGhlcndpc2UgcmV0dXJucyB0aGUgb3JpZ2luYWwgY29sb3IuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuXG59O1xuXG5mdW5jdGlvbiBuYW1lVG9IZXgoY29sb3IpIHtcbiAgaWYgKHR5cGVvZiBjb2xvciAhPT0gJ3N0cmluZycpIHJldHVybiBjb2xvcjtcbiAgdmFyIG5vcm1hbGl6ZWRDb2xvck5hbWUgPSBjb2xvci50b0xvd2VyQ2FzZSgpO1xuICByZXR1cm4gbmFtZWRDb2xvck1hcFtub3JtYWxpemVkQ29sb3JOYW1lXSA/IFwiI1wiICsgbmFtZWRDb2xvck1hcFtub3JtYWxpemVkQ29sb3JOYW1lXSA6IGNvbG9yO1xufVxuXG52YXIgX2RlZmF1bHQgPSBuYW1lVG9IZXg7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHsgaWYgKHNlbGYgPT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzTG9vc2Uoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzLnByb3RvdHlwZSk7IHN1YkNsYXNzLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IHN1YkNsYXNzOyBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbmZ1bmN0aW9uIF93cmFwTmF0aXZlU3VwZXIoQ2xhc3MpIHsgdmFyIF9jYWNoZSA9IHR5cGVvZiBNYXAgPT09IFwiZnVuY3Rpb25cIiA/IG5ldyBNYXAoKSA6IHVuZGVmaW5lZDsgX3dyYXBOYXRpdmVTdXBlciA9IGZ1bmN0aW9uIF93cmFwTmF0aXZlU3VwZXIoQ2xhc3MpIHsgaWYgKENsYXNzID09PSBudWxsIHx8ICFfaXNOYXRpdmVGdW5jdGlvbihDbGFzcykpIHJldHVybiBDbGFzczsgaWYgKHR5cGVvZiBDbGFzcyAhPT0gXCJmdW5jdGlvblwiKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTsgfSBpZiAodHlwZW9mIF9jYWNoZSAhPT0gXCJ1bmRlZmluZWRcIikgeyBpZiAoX2NhY2hlLmhhcyhDbGFzcykpIHJldHVybiBfY2FjaGUuZ2V0KENsYXNzKTsgX2NhY2hlLnNldChDbGFzcywgV3JhcHBlcik7IH0gZnVuY3Rpb24gV3JhcHBlcigpIHsgcmV0dXJuIF9jb25zdHJ1Y3QoQ2xhc3MsIGFyZ3VtZW50cywgX2dldFByb3RvdHlwZU9mKHRoaXMpLmNvbnN0cnVjdG9yKTsgfSBXcmFwcGVyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBXcmFwcGVyLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyByZXR1cm4gX3NldFByb3RvdHlwZU9mKFdyYXBwZXIsIENsYXNzKTsgfTsgcmV0dXJuIF93cmFwTmF0aXZlU3VwZXIoQ2xhc3MpOyB9XG5cbmZ1bmN0aW9uIGlzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpIHsgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcInVuZGVmaW5lZFwiIHx8ICFSZWZsZWN0LmNvbnN0cnVjdCkgcmV0dXJuIGZhbHNlOyBpZiAoUmVmbGVjdC5jb25zdHJ1Y3Quc2hhbSkgcmV0dXJuIGZhbHNlOyBpZiAodHlwZW9mIFByb3h5ID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiB0cnVlOyB0cnkgeyBEYXRlLnByb3RvdHlwZS50b1N0cmluZy5jYWxsKFJlZmxlY3QuY29uc3RydWN0KERhdGUsIFtdLCBmdW5jdGlvbiAoKSB7fSkpOyByZXR1cm4gdHJ1ZTsgfSBjYXRjaCAoZSkgeyByZXR1cm4gZmFsc2U7IH0gfVxuXG5mdW5jdGlvbiBfY29uc3RydWN0KFBhcmVudCwgYXJncywgQ2xhc3MpIHsgaWYgKGlzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpKSB7IF9jb25zdHJ1Y3QgPSBSZWZsZWN0LmNvbnN0cnVjdDsgfSBlbHNlIHsgX2NvbnN0cnVjdCA9IGZ1bmN0aW9uIF9jb25zdHJ1Y3QoUGFyZW50LCBhcmdzLCBDbGFzcykgeyB2YXIgYSA9IFtudWxsXTsgYS5wdXNoLmFwcGx5KGEsIGFyZ3MpOyB2YXIgQ29uc3RydWN0b3IgPSBGdW5jdGlvbi5iaW5kLmFwcGx5KFBhcmVudCwgYSk7IHZhciBpbnN0YW5jZSA9IG5ldyBDb25zdHJ1Y3RvcigpOyBpZiAoQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihpbnN0YW5jZSwgQ2xhc3MucHJvdG90eXBlKTsgcmV0dXJuIGluc3RhbmNlOyB9OyB9IHJldHVybiBfY29uc3RydWN0LmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7IH1cblxuZnVuY3Rpb24gX2lzTmF0aXZlRnVuY3Rpb24oZm4pIHsgcmV0dXJuIEZ1bmN0aW9uLnRvU3RyaW5nLmNhbGwoZm4pLmluZGV4T2YoXCJbbmF0aXZlIGNvZGVdXCIpICE9PSAtMTsgfVxuXG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxuXG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pOyB9OyByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pOyB9XG5cbi8vIGJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9zdHlsZWQtY29tcG9uZW50cy9zdHlsZWQtY29tcG9uZW50cy9ibG9iL2ZjZjZmMzgwNGM1N2ExNGRkNzk4NGRmYWI3YmMwNmVlMmVkY2EwNDQvc3JjL3V0aWxzL2Vycm9yLmpzXG5cbi8qKlxuICogUGFyc2UgZXJyb3JzLm1kIGFuZCB0dXJuIGl0IGludG8gYSBzaW1wbGUgaGFzaCBvZiBjb2RlOiBtZXNzYWdlXG4gKiBAcHJpdmF0ZVxuICovXG52YXIgRVJST1JTID0ge1xuICBcIjFcIjogXCJQYXNzZWQgaW52YWxpZCBhcmd1bWVudHMgdG8gaHNsLCBwbGVhc2UgcGFzcyBtdWx0aXBsZSBudW1iZXJzIGUuZy4gaHNsKDM2MCwgMC43NSwgMC40KSBvciBhbiBvYmplY3QgZS5nLiByZ2IoeyBodWU6IDI1NSwgc2F0dXJhdGlvbjogMC40LCBsaWdodG5lc3M6IDAuNzUgfSkuXFxuXFxuXCIsXG4gIFwiMlwiOiBcIlBhc3NlZCBpbnZhbGlkIGFyZ3VtZW50cyB0byBoc2xhLCBwbGVhc2UgcGFzcyBtdWx0aXBsZSBudW1iZXJzIGUuZy4gaHNsYSgzNjAsIDAuNzUsIDAuNCwgMC43KSBvciBhbiBvYmplY3QgZS5nLiByZ2IoeyBodWU6IDI1NSwgc2F0dXJhdGlvbjogMC40LCBsaWdodG5lc3M6IDAuNzUsIGFscGhhOiAwLjcgfSkuXFxuXFxuXCIsXG4gIFwiM1wiOiBcIlBhc3NlZCBhbiBpbmNvcnJlY3QgYXJndW1lbnQgdG8gYSBjb2xvciBmdW5jdGlvbiwgcGxlYXNlIHBhc3MgYSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgYSBjb2xvci5cXG5cXG5cIixcbiAgXCI0XCI6IFwiQ291bGRuJ3QgZ2VuZXJhdGUgdmFsaWQgcmdiIHN0cmluZyBmcm9tICVzLCBpdCByZXR1cm5lZCAlcy5cXG5cXG5cIixcbiAgXCI1XCI6IFwiQ291bGRuJ3QgcGFyc2UgdGhlIGNvbG9yIHN0cmluZy4gUGxlYXNlIHByb3ZpZGUgdGhlIGNvbG9yIGFzIGEgc3RyaW5nIGluIGhleCwgcmdiLCByZ2JhLCBoc2wgb3IgaHNsYSBub3RhdGlvbi5cXG5cXG5cIixcbiAgXCI2XCI6IFwiUGFzc2VkIGludmFsaWQgYXJndW1lbnRzIHRvIHJnYiwgcGxlYXNlIHBhc3MgbXVsdGlwbGUgbnVtYmVycyBlLmcuIHJnYigyNTUsIDIwNSwgMTAwKSBvciBhbiBvYmplY3QgZS5nLiByZ2IoeyByZWQ6IDI1NSwgZ3JlZW46IDIwNSwgYmx1ZTogMTAwIH0pLlxcblxcblwiLFxuICBcIjdcIjogXCJQYXNzZWQgaW52YWxpZCBhcmd1bWVudHMgdG8gcmdiYSwgcGxlYXNlIHBhc3MgbXVsdGlwbGUgbnVtYmVycyBlLmcuIHJnYigyNTUsIDIwNSwgMTAwLCAwLjc1KSBvciBhbiBvYmplY3QgZS5nLiByZ2IoeyByZWQ6IDI1NSwgZ3JlZW46IDIwNSwgYmx1ZTogMTAwLCBhbHBoYTogMC43NSB9KS5cXG5cXG5cIixcbiAgXCI4XCI6IFwiUGFzc2VkIGludmFsaWQgYXJndW1lbnQgdG8gdG9Db2xvclN0cmluZywgcGxlYXNlIHBhc3MgYSBSZ2JDb2xvciwgUmdiYUNvbG9yLCBIc2xDb2xvciBvciBIc2xhQ29sb3Igb2JqZWN0LlxcblxcblwiLFxuICBcIjlcIjogXCJQbGVhc2UgcHJvdmlkZSBhIG51bWJlciBvZiBzdGVwcyB0byB0aGUgbW9kdWxhclNjYWxlIGhlbHBlci5cXG5cXG5cIixcbiAgXCIxMFwiOiBcIlBsZWFzZSBwYXNzIGEgbnVtYmVyIG9yIG9uZSBvZiB0aGUgcHJlZGVmaW5lZCBzY2FsZXMgdG8gdGhlIG1vZHVsYXJTY2FsZSBoZWxwZXIgYXMgdGhlIHJhdGlvLlxcblxcblwiLFxuICBcIjExXCI6IFwiSW52YWxpZCB2YWx1ZSBwYXNzZWQgYXMgYmFzZSB0byBtb2R1bGFyU2NhbGUsIGV4cGVjdGVkIG51bWJlciBvciBlbSBzdHJpbmcgYnV0IGdvdCBcXFwiJXNcXFwiXFxuXFxuXCIsXG4gIFwiMTJcIjogXCJFeHBlY3RlZCBhIHN0cmluZyBlbmRpbmcgaW4gXFxcInB4XFxcIiBvciBhIG51bWJlciBwYXNzZWQgYXMgdGhlIGZpcnN0IGFyZ3VtZW50IHRvICVzKCksIGdvdCBcXFwiJXNcXFwiIGluc3RlYWQuXFxuXFxuXCIsXG4gIFwiMTNcIjogXCJFeHBlY3RlZCBhIHN0cmluZyBlbmRpbmcgaW4gXFxcInB4XFxcIiBvciBhIG51bWJlciBwYXNzZWQgYXMgdGhlIHNlY29uZCBhcmd1bWVudCB0byAlcygpLCBnb3QgXFxcIiVzXFxcIiBpbnN0ZWFkLlxcblxcblwiLFxuICBcIjE0XCI6IFwiUGFzc2VkIGludmFsaWQgcGl4ZWwgdmFsdWUgKFxcXCIlc1xcXCIpIHRvICVzKCksIHBsZWFzZSBwYXNzIGEgdmFsdWUgbGlrZSBcXFwiMTJweFxcXCIgb3IgMTIuXFxuXFxuXCIsXG4gIFwiMTVcIjogXCJQYXNzZWQgaW52YWxpZCBiYXNlIHZhbHVlIChcXFwiJXNcXFwiKSB0byAlcygpLCBwbGVhc2UgcGFzcyBhIHZhbHVlIGxpa2UgXFxcIjEycHhcXFwiIG9yIDEyLlxcblxcblwiLFxuICBcIjE2XCI6IFwiWW91IG11c3QgcHJvdmlkZSBhIHRlbXBsYXRlIHRvIHRoaXMgbWV0aG9kLlxcblxcblwiLFxuICBcIjE3XCI6IFwiWW91IHBhc3NlZCBhbiB1bnN1cHBvcnRlZCBzZWxlY3RvciBzdGF0ZSB0byB0aGlzIG1ldGhvZC5cXG5cXG5cIixcbiAgXCIxOFwiOiBcIm1pblNjcmVlbiBhbmQgbWF4U2NyZWVuIG11c3QgYmUgcHJvdmlkZWQgYXMgc3RyaW5naWZpZWQgbnVtYmVycyB3aXRoIHRoZSBzYW1lIHVuaXRzLlxcblxcblwiLFxuICBcIjE5XCI6IFwiZnJvbVNpemUgYW5kIHRvU2l6ZSBtdXN0IGJlIHByb3ZpZGVkIGFzIHN0cmluZ2lmaWVkIG51bWJlcnMgd2l0aCB0aGUgc2FtZSB1bml0cy5cXG5cXG5cIixcbiAgXCIyMFwiOiBcImV4cGVjdHMgZWl0aGVyIGFuIGFycmF5IG9mIG9iamVjdHMgb3IgYSBzaW5nbGUgb2JqZWN0IHdpdGggdGhlIHByb3BlcnRpZXMgcHJvcCwgZnJvbVNpemUsIGFuZCB0b1NpemUuXFxuXFxuXCIsXG4gIFwiMjFcIjogXCJleHBlY3RzIHRoZSBvYmplY3RzIGluIHRoZSBmaXJzdCBhcmd1bWVudCBhcnJheSB0byBoYXZlIHRoZSBwcm9wZXJ0aWVzIGBwcm9wYCwgYGZyb21TaXplYCwgYW5kIGB0b1NpemVgLlxcblxcblwiLFxuICBcIjIyXCI6IFwiZXhwZWN0cyB0aGUgZmlyc3QgYXJndW1lbnQgb2JqZWN0IHRvIGhhdmUgdGhlIHByb3BlcnRpZXMgYHByb3BgLCBgZnJvbVNpemVgLCBhbmQgYHRvU2l6ZWAuXFxuXFxuXCIsXG4gIFwiMjNcIjogXCJmb250RmFjZSBleHBlY3RzIGEgbmFtZSBvZiBhIGZvbnQtZmFtaWx5LlxcblxcblwiLFxuICBcIjI0XCI6IFwiZm9udEZhY2UgZXhwZWN0cyBlaXRoZXIgdGhlIHBhdGggdG8gdGhlIGZvbnQgZmlsZShzKSBvciBhIG5hbWUgb2YgYSBsb2NhbCBjb3B5LlxcblxcblwiLFxuICBcIjI1XCI6IFwiZm9udEZhY2UgZXhwZWN0cyBsb2NhbEZvbnRzIHRvIGJlIGFuIGFycmF5LlxcblxcblwiLFxuICBcIjI2XCI6IFwiZm9udEZhY2UgZXhwZWN0cyBmaWxlRm9ybWF0cyB0byBiZSBhbiBhcnJheS5cXG5cXG5cIixcbiAgXCIyN1wiOiBcInJhZGlhbEdyYWRpZW50IHJlcXVyaWVzIGF0IGxlYXN0IDIgY29sb3Itc3RvcHMgdG8gcHJvcGVybHkgcmVuZGVyLlxcblxcblwiLFxuICBcIjI4XCI6IFwiUGxlYXNlIHN1cHBseSBhIGZpbGVuYW1lIHRvIHJldGluYUltYWdlKCkgYXMgdGhlIGZpcnN0IGFyZ3VtZW50LlxcblxcblwiLFxuICBcIjI5XCI6IFwiUGFzc2VkIGludmFsaWQgYXJndW1lbnQgdG8gdHJpYW5nbGUsIHBsZWFzZSBwYXNzIGNvcnJlY3QgcG9pbnRpbmdEaXJlY3Rpb24gZS5nLiAncmlnaHQnLlxcblxcblwiLFxuICBcIjMwXCI6IFwiUGFzc2VkIGFuIGludmFsaWQgdmFsdWUgdG8gYGhlaWdodGAgb3IgYHdpZHRoYC4gUGxlYXNlIHByb3ZpZGUgYSBwaXhlbCBiYXNlZCB1bml0LlxcblxcblwiLFxuICBcIjMxXCI6IFwiVGhlIGFuaW1hdGlvbiBzaG9ydGhhbmQgb25seSB0YWtlcyA4IGFyZ3VtZW50cy4gU2VlIHRoZSBzcGVjaWZpY2F0aW9uIGZvciBtb3JlIGluZm9ybWF0aW9uOiBodHRwOi8vbWRuLmlvL2FuaW1hdGlvblxcblxcblwiLFxuICBcIjMyXCI6IFwiVG8gcGFzcyBtdWx0aXBsZSBhbmltYXRpb25zIHBsZWFzZSBzdXBwbHkgdGhlbSBpbiBhcnJheXMsIGUuZy4gYW5pbWF0aW9uKFsncm90YXRlJywgJzJzJ10sIFsnbW92ZScsICcxcyddKVxcblRvIHBhc3MgYSBzaW5nbGUgYW5pbWF0aW9uIHBsZWFzZSBzdXBwbHkgdGhlbSBpbiBzaW1wbGUgdmFsdWVzLCBlLmcuIGFuaW1hdGlvbigncm90YXRlJywgJzJzJylcXG5cXG5cIixcbiAgXCIzM1wiOiBcIlRoZSBhbmltYXRpb24gc2hvcnRoYW5kIGFycmF5cyBjYW4gb25seSBoYXZlIDggZWxlbWVudHMuIFNlZSB0aGUgc3BlY2lmaWNhdGlvbiBmb3IgbW9yZSBpbmZvcm1hdGlvbjogaHR0cDovL21kbi5pby9hbmltYXRpb25cXG5cXG5cIixcbiAgXCIzNFwiOiBcImJvcmRlclJhZGl1cyBleHBlY3RzIGEgcmFkaXVzIHZhbHVlIGFzIGEgc3RyaW5nIG9yIG51bWJlciBhcyB0aGUgc2Vjb25kIGFyZ3VtZW50LlxcblxcblwiLFxuICBcIjM1XCI6IFwiYm9yZGVyUmFkaXVzIGV4cGVjdHMgb25lIG9mIFxcXCJ0b3BcXFwiLCBcXFwiYm90dG9tXFxcIiwgXFxcImxlZnRcXFwiIG9yIFxcXCJyaWdodFxcXCIgYXMgdGhlIGZpcnN0IGFyZ3VtZW50LlxcblxcblwiLFxuICBcIjM2XCI6IFwiUHJvcGVydHkgbXVzdCBiZSBhIHN0cmluZyB2YWx1ZS5cXG5cXG5cIixcbiAgXCIzN1wiOiBcIlN5bnRheCBFcnJvciBhdCAlcy5cXG5cXG5cIixcbiAgXCIzOFwiOiBcIkZvcm11bGEgY29udGFpbnMgYSBmdW5jdGlvbiB0aGF0IG5lZWRzIHBhcmVudGhlc2VzIGF0ICVzLlxcblxcblwiLFxuICBcIjM5XCI6IFwiRm9ybXVsYSBpcyBtaXNzaW5nIGNsb3NpbmcgcGFyZW50aGVzaXMgYXQgJXMuXFxuXFxuXCIsXG4gIFwiNDBcIjogXCJGb3JtdWxhIGhhcyB0b28gbWFueSBjbG9zaW5nIHBhcmVudGhlc2VzIGF0ICVzLlxcblxcblwiLFxuICBcIjQxXCI6IFwiQWxsIHZhbHVlcyBpbiBhIGZvcm11bGEgbXVzdCBoYXZlIHRoZSBzYW1lIHVuaXQgb3IgYmUgdW5pdGxlc3MuXFxuXFxuXCIsXG4gIFwiNDJcIjogXCJQbGVhc2UgcHJvdmlkZSBhIG51bWJlciBvZiBzdGVwcyB0byB0aGUgbW9kdWxhclNjYWxlIGhlbHBlci5cXG5cXG5cIixcbiAgXCI0M1wiOiBcIlBsZWFzZSBwYXNzIGEgbnVtYmVyIG9yIG9uZSBvZiB0aGUgcHJlZGVmaW5lZCBzY2FsZXMgdG8gdGhlIG1vZHVsYXJTY2FsZSBoZWxwZXIgYXMgdGhlIHJhdGlvLlxcblxcblwiLFxuICBcIjQ0XCI6IFwiSW52YWxpZCB2YWx1ZSBwYXNzZWQgYXMgYmFzZSB0byBtb2R1bGFyU2NhbGUsIGV4cGVjdGVkIG51bWJlciBvciBlbS9yZW0gc3RyaW5nIGJ1dCBnb3QgJXMuXFxuXFxuXCIsXG4gIFwiNDVcIjogXCJQYXNzZWQgaW52YWxpZCBhcmd1bWVudCB0byBoc2xUb0NvbG9yU3RyaW5nLCBwbGVhc2UgcGFzcyBhIEhzbENvbG9yIG9yIEhzbGFDb2xvciBvYmplY3QuXFxuXFxuXCIsXG4gIFwiNDZcIjogXCJQYXNzZWQgaW52YWxpZCBhcmd1bWVudCB0byByZ2JUb0NvbG9yU3RyaW5nLCBwbGVhc2UgcGFzcyBhIFJnYkNvbG9yIG9yIFJnYmFDb2xvciBvYmplY3QuXFxuXFxuXCIsXG4gIFwiNDdcIjogXCJtaW5TY3JlZW4gYW5kIG1heFNjcmVlbiBtdXN0IGJlIHByb3ZpZGVkIGFzIHN0cmluZ2lmaWVkIG51bWJlcnMgd2l0aCB0aGUgc2FtZSB1bml0cy5cXG5cXG5cIixcbiAgXCI0OFwiOiBcImZyb21TaXplIGFuZCB0b1NpemUgbXVzdCBiZSBwcm92aWRlZCBhcyBzdHJpbmdpZmllZCBudW1iZXJzIHdpdGggdGhlIHNhbWUgdW5pdHMuXFxuXFxuXCIsXG4gIFwiNDlcIjogXCJFeHBlY3RzIGVpdGhlciBhbiBhcnJheSBvZiBvYmplY3RzIG9yIGEgc2luZ2xlIG9iamVjdCB3aXRoIHRoZSBwcm9wZXJ0aWVzIHByb3AsIGZyb21TaXplLCBhbmQgdG9TaXplLlxcblxcblwiLFxuICBcIjUwXCI6IFwiRXhwZWN0cyB0aGUgb2JqZWN0cyBpbiB0aGUgZmlyc3QgYXJndW1lbnQgYXJyYXkgdG8gaGF2ZSB0aGUgcHJvcGVydGllcyBwcm9wLCBmcm9tU2l6ZSwgYW5kIHRvU2l6ZS5cXG5cXG5cIixcbiAgXCI1MVwiOiBcIkV4cGVjdHMgdGhlIGZpcnN0IGFyZ3VtZW50IG9iamVjdCB0byBoYXZlIHRoZSBwcm9wZXJ0aWVzIHByb3AsIGZyb21TaXplLCBhbmQgdG9TaXplLlxcblxcblwiLFxuICBcIjUyXCI6IFwiZm9udEZhY2UgZXhwZWN0cyBlaXRoZXIgdGhlIHBhdGggdG8gdGhlIGZvbnQgZmlsZShzKSBvciBhIG5hbWUgb2YgYSBsb2NhbCBjb3B5LlxcblxcblwiLFxuICBcIjUzXCI6IFwiZm9udEZhY2UgZXhwZWN0cyBsb2NhbEZvbnRzIHRvIGJlIGFuIGFycmF5LlxcblxcblwiLFxuICBcIjU0XCI6IFwiZm9udEZhY2UgZXhwZWN0cyBmaWxlRm9ybWF0cyB0byBiZSBhbiBhcnJheS5cXG5cXG5cIixcbiAgXCI1NVwiOiBcImZvbnRGYWNlIGV4cGVjdHMgYSBuYW1lIG9mIGEgZm9udC1mYW1pbHkuXFxuXFxuXCIsXG4gIFwiNTZcIjogXCJsaW5lYXJHcmFkaWVudCByZXF1cmllcyBhdCBsZWFzdCAyIGNvbG9yLXN0b3BzIHRvIHByb3Blcmx5IHJlbmRlci5cXG5cXG5cIixcbiAgXCI1N1wiOiBcInJhZGlhbEdyYWRpZW50IHJlcXVyaWVzIGF0IGxlYXN0IDIgY29sb3Itc3RvcHMgdG8gcHJvcGVybHkgcmVuZGVyLlxcblxcblwiLFxuICBcIjU4XCI6IFwiUGxlYXNlIHN1cHBseSBhIGZpbGVuYW1lIHRvIHJldGluYUltYWdlKCkgYXMgdGhlIGZpcnN0IGFyZ3VtZW50LlxcblxcblwiLFxuICBcIjU5XCI6IFwiUGFzc2VkIGludmFsaWQgYXJndW1lbnQgdG8gdHJpYW5nbGUsIHBsZWFzZSBwYXNzIGNvcnJlY3QgcG9pbnRpbmdEaXJlY3Rpb24gZS5nLiAncmlnaHQnLlxcblxcblwiLFxuICBcIjYwXCI6IFwiUGFzc2VkIGFuIGludmFsaWQgdmFsdWUgdG8gYGhlaWdodGAgb3IgYHdpZHRoYC4gUGxlYXNlIHByb3ZpZGUgYSBwaXhlbCBiYXNlZCB1bml0LlxcblxcblwiLFxuICBcIjYxXCI6IFwiUHJvcGVydHkgbXVzdCBiZSBhIHN0cmluZyB2YWx1ZS5cXG5cXG5cIixcbiAgXCI2MlwiOiBcImJvcmRlclJhZGl1cyBleHBlY3RzIGEgcmFkaXVzIHZhbHVlIGFzIGEgc3RyaW5nIG9yIG51bWJlciBhcyB0aGUgc2Vjb25kIGFyZ3VtZW50LlxcblxcblwiLFxuICBcIjYzXCI6IFwiYm9yZGVyUmFkaXVzIGV4cGVjdHMgb25lIG9mIFxcXCJ0b3BcXFwiLCBcXFwiYm90dG9tXFxcIiwgXFxcImxlZnRcXFwiIG9yIFxcXCJyaWdodFxcXCIgYXMgdGhlIGZpcnN0IGFyZ3VtZW50LlxcblxcblwiLFxuICBcIjY0XCI6IFwiVGhlIGFuaW1hdGlvbiBzaG9ydGhhbmQgb25seSB0YWtlcyA4IGFyZ3VtZW50cy4gU2VlIHRoZSBzcGVjaWZpY2F0aW9uIGZvciBtb3JlIGluZm9ybWF0aW9uOiBodHRwOi8vbWRuLmlvL2FuaW1hdGlvbi5cXG5cXG5cIixcbiAgXCI2NVwiOiBcIlRvIHBhc3MgbXVsdGlwbGUgYW5pbWF0aW9ucyBwbGVhc2Ugc3VwcGx5IHRoZW0gaW4gYXJyYXlzLCBlLmcuIGFuaW1hdGlvbihbJ3JvdGF0ZScsICcycyddLCBbJ21vdmUnLCAnMXMnXSlcXFxcblRvIHBhc3MgYSBzaW5nbGUgYW5pbWF0aW9uIHBsZWFzZSBzdXBwbHkgdGhlbSBpbiBzaW1wbGUgdmFsdWVzLCBlLmcuIGFuaW1hdGlvbigncm90YXRlJywgJzJzJykuXFxuXFxuXCIsXG4gIFwiNjZcIjogXCJUaGUgYW5pbWF0aW9uIHNob3J0aGFuZCBhcnJheXMgY2FuIG9ubHkgaGF2ZSA4IGVsZW1lbnRzLiBTZWUgdGhlIHNwZWNpZmljYXRpb24gZm9yIG1vcmUgaW5mb3JtYXRpb246IGh0dHA6Ly9tZG4uaW8vYW5pbWF0aW9uLlxcblxcblwiLFxuICBcIjY3XCI6IFwiWW91IG11c3QgcHJvdmlkZSBhIHRlbXBsYXRlIHRvIHRoaXMgbWV0aG9kLlxcblxcblwiLFxuICBcIjY4XCI6IFwiWW91IHBhc3NlZCBhbiB1bnN1cHBvcnRlZCBzZWxlY3RvciBzdGF0ZSB0byB0aGlzIG1ldGhvZC5cXG5cXG5cIixcbiAgXCI2OVwiOiBcIkV4cGVjdGVkIGEgc3RyaW5nIGVuZGluZyBpbiBcXFwicHhcXFwiIG9yIGEgbnVtYmVyIHBhc3NlZCBhcyB0aGUgZmlyc3QgYXJndW1lbnQgdG8gJXMoKSwgZ290ICVzIGluc3RlYWQuXFxuXFxuXCIsXG4gIFwiNzBcIjogXCJFeHBlY3RlZCBhIHN0cmluZyBlbmRpbmcgaW4gXFxcInB4XFxcIiBvciBhIG51bWJlciBwYXNzZWQgYXMgdGhlIHNlY29uZCBhcmd1bWVudCB0byAlcygpLCBnb3QgJXMgaW5zdGVhZC5cXG5cXG5cIixcbiAgXCI3MVwiOiBcIlBhc3NlZCBpbnZhbGlkIHBpeGVsIHZhbHVlICVzIHRvICVzKCksIHBsZWFzZSBwYXNzIGEgdmFsdWUgbGlrZSBcXFwiMTJweFxcXCIgb3IgMTIuXFxuXFxuXCIsXG4gIFwiNzJcIjogXCJQYXNzZWQgaW52YWxpZCBiYXNlIHZhbHVlICVzIHRvICVzKCksIHBsZWFzZSBwYXNzIGEgdmFsdWUgbGlrZSBcXFwiMTJweFxcXCIgb3IgMTIuXFxuXCJcbn07XG4vKipcbiAqIHN1cGVyIGJhc2ljIHZlcnNpb24gb2Ygc3ByaW50ZlxuICogQHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBmb3JtYXQoKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICB2YXIgYSA9IGFyZ3NbMF07XG4gIHZhciBiID0gW107XG4gIHZhciBjO1xuXG4gIGZvciAoYyA9IDE7IGMgPCBhcmdzLmxlbmd0aDsgYyArPSAxKSB7XG4gICAgYi5wdXNoKGFyZ3NbY10pO1xuICB9XG5cbiAgYi5mb3JFYWNoKGZ1bmN0aW9uIChkKSB7XG4gICAgYSA9IGEucmVwbGFjZSgvJVthLXpdLywgZCk7XG4gIH0pO1xuICByZXR1cm4gYTtcbn1cbi8qKlxuICogQ3JlYXRlIGFuIGVycm9yIGZpbGUgb3V0IG9mIGVycm9ycy5tZCBmb3IgZGV2ZWxvcG1lbnQgYW5kIGEgc2ltcGxlIHdlYiBsaW5rIHRvIHRoZSBmdWxsIGVycm9yc1xuICogaW4gcHJvZHVjdGlvbiBtb2RlLlxuICogQHByaXZhdGVcbiAqL1xuXG5cbnZhciBQb2xpc2hlZEVycm9yID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uIChfRXJyb3IpIHtcbiAgX2luaGVyaXRzTG9vc2UoUG9saXNoZWRFcnJvciwgX0Vycm9yKTtcblxuICBmdW5jdGlvbiBQb2xpc2hlZEVycm9yKGNvZGUpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgX3RoaXMgPSBfRXJyb3IuY2FsbCh0aGlzLCBcIkFuIGVycm9yIG9jY3VycmVkLiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3N0eWxlZC1jb21wb25lbnRzL3BvbGlzaGVkL2Jsb2IvbWFzdGVyL3NyYy9pbnRlcm5hbEhlbHBlcnMvZXJyb3JzLm1kI1wiICsgY29kZSArIFwiIGZvciBtb3JlIGluZm9ybWF0aW9uLlwiKSB8fCB0aGlzO1xuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbjIgPiAxID8gX2xlbjIgLSAxIDogMCksIF9rZXkyID0gMTsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgICBhcmdzW19rZXkyIC0gMV0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgICAgfVxuXG4gICAgICBfdGhpcyA9IF9FcnJvci5jYWxsKHRoaXMsIGZvcm1hdC5hcHBseSh2b2lkIDAsIFtFUlJPUlNbY29kZV1dLmNvbmNhdChhcmdzKSkpIHx8IHRoaXM7XG4gICAgfVxuXG4gICAgcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpO1xuICB9XG5cbiAgcmV0dXJuIFBvbGlzaGVkRXJyb3I7XG59KFxuLyojX19QVVJFX18qL1xuX3dyYXBOYXRpdmVTdXBlcihFcnJvcikpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBQb2xpc2hlZEVycm9yO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBfaHNsVG9SZ2IgPVxuLyojX19QVVJFX18qL1xuX2ludGVyb3BSZXF1aXJlRGVmYXVsdChcbi8qI19fUFVSRV9fKi9cbnJlcXVpcmUoXCIuLi9pbnRlcm5hbEhlbHBlcnMvX2hzbFRvUmdiXCIpKTtcblxudmFyIF9uYW1lVG9IZXggPVxuLyojX19QVVJFX18qL1xuX2ludGVyb3BSZXF1aXJlRGVmYXVsdChcbi8qI19fUFVSRV9fKi9cbnJlcXVpcmUoXCIuLi9pbnRlcm5hbEhlbHBlcnMvX25hbWVUb0hleFwiKSk7XG5cbnZhciBfZXJyb3JzID1cbi8qI19fUFVSRV9fKi9cbl9pbnRlcm9wUmVxdWlyZURlZmF1bHQoXG4vKiNfX1BVUkVfXyovXG5yZXF1aXJlKFwiLi4vaW50ZXJuYWxIZWxwZXJzL19lcnJvcnNcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgaGV4UmVnZXggPSAvXiNbYS1mQS1GMC05XXs2fSQvO1xudmFyIGhleFJnYmFSZWdleCA9IC9eI1thLWZBLUYwLTldezh9JC87XG52YXIgcmVkdWNlZEhleFJlZ2V4ID0gL14jW2EtZkEtRjAtOV17M30kLztcbnZhciByZWR1Y2VkUmdiYUhleFJlZ2V4ID0gL14jW2EtZkEtRjAtOV17NH0kLztcbnZhciByZ2JSZWdleCA9IC9ecmdiXFwoXFxzKihcXGR7MSwzfSlcXHMqLFxccyooXFxkezEsM30pXFxzKixcXHMqKFxcZHsxLDN9KVxccypcXCkkLztcbnZhciByZ2JhUmVnZXggPSAvXnJnYmFcXChcXHMqKFxcZHsxLDN9KVxccyosXFxzKihcXGR7MSwzfSlcXHMqLFxccyooXFxkezEsM30pXFxzKixcXHMqKFstK10/WzAtOV0qWy5dP1swLTldKylcXHMqXFwpJC87XG52YXIgaHNsUmVnZXggPSAvXmhzbFxcKFxccyooXFxkezAsM31bLl0/WzAtOV0rKVxccyosXFxzKihcXGR7MSwzfSklXFxzKixcXHMqKFxcZHsxLDN9KSVcXHMqXFwpJC87XG52YXIgaHNsYVJlZ2V4ID0gL15oc2xhXFwoXFxzKihcXGR7MCwzfVsuXT9bMC05XSspXFxzKixcXHMqKFxcZHsxLDN9KSVcXHMqLFxccyooXFxkezEsM30pJVxccyosXFxzKihbLStdP1swLTldKlsuXT9bMC05XSspXFxzKlxcKSQvO1xuLyoqXG4gKiBSZXR1cm5zIGFuIFJnYkNvbG9yIG9yIFJnYmFDb2xvciBvYmplY3QuIFRoaXMgdXRpbGl0eSBmdW5jdGlvbiBpcyBvbmx5IHVzZWZ1bFxuICogaWYgd2FudCB0byBleHRyYWN0IGEgY29sb3IgY29tcG9uZW50LiBXaXRoIHRoZSBjb2xvciB1dGlsIGB0b0NvbG9yU3RyaW5nYCB5b3VcbiAqIGNhbiBjb252ZXJ0IGEgUmdiQ29sb3Igb3IgUmdiYUNvbG9yIG9iamVjdCBiYWNrIHRvIGEgc3RyaW5nLlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBc3NpZ25zIGB7IHJlZDogMjU1LCBncmVlbjogMCwgYmx1ZTogMCB9YCB0byBjb2xvcjFcbiAqIGNvbnN0IGNvbG9yMSA9IHBhcnNlVG9SZ2IoJ3JnYigyNTUsIDAsIDApJyk7XG4gKiAvLyBBc3NpZ25zIGB7IHJlZDogOTIsIGdyZWVuOiAxMDIsIGJsdWU6IDExMiwgYWxwaGE6IDAuNzUgfWAgdG8gY29sb3IyXG4gKiBjb25zdCBjb2xvcjIgPSBwYXJzZVRvUmdiKCdoc2xhKDIxMCwgMTAlLCA0MCUsIDAuNzUpJyk7XG4gKi9cblxuZnVuY3Rpb24gcGFyc2VUb1JnYihjb2xvcikge1xuICBpZiAodHlwZW9mIGNvbG9yICE9PSAnc3RyaW5nJykge1xuICAgIHRocm93IG5ldyBfZXJyb3JzLmRlZmF1bHQoMyk7XG4gIH1cblxuICB2YXIgbm9ybWFsaXplZENvbG9yID0gKDAsIF9uYW1lVG9IZXguZGVmYXVsdCkoY29sb3IpO1xuXG4gIGlmIChub3JtYWxpemVkQ29sb3IubWF0Y2goaGV4UmVnZXgpKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJlZDogcGFyc2VJbnQoXCJcIiArIG5vcm1hbGl6ZWRDb2xvclsxXSArIG5vcm1hbGl6ZWRDb2xvclsyXSwgMTYpLFxuICAgICAgZ3JlZW46IHBhcnNlSW50KFwiXCIgKyBub3JtYWxpemVkQ29sb3JbM10gKyBub3JtYWxpemVkQ29sb3JbNF0sIDE2KSxcbiAgICAgIGJsdWU6IHBhcnNlSW50KFwiXCIgKyBub3JtYWxpemVkQ29sb3JbNV0gKyBub3JtYWxpemVkQ29sb3JbNl0sIDE2KVxuICAgIH07XG4gIH1cblxuICBpZiAobm9ybWFsaXplZENvbG9yLm1hdGNoKGhleFJnYmFSZWdleCkpIHtcbiAgICB2YXIgYWxwaGEgPSBwYXJzZUZsb2F0KChwYXJzZUludChcIlwiICsgbm9ybWFsaXplZENvbG9yWzddICsgbm9ybWFsaXplZENvbG9yWzhdLCAxNikgLyAyNTUpLnRvRml4ZWQoMikpO1xuICAgIHJldHVybiB7XG4gICAgICByZWQ6IHBhcnNlSW50KFwiXCIgKyBub3JtYWxpemVkQ29sb3JbMV0gKyBub3JtYWxpemVkQ29sb3JbMl0sIDE2KSxcbiAgICAgIGdyZWVuOiBwYXJzZUludChcIlwiICsgbm9ybWFsaXplZENvbG9yWzNdICsgbm9ybWFsaXplZENvbG9yWzRdLCAxNiksXG4gICAgICBibHVlOiBwYXJzZUludChcIlwiICsgbm9ybWFsaXplZENvbG9yWzVdICsgbm9ybWFsaXplZENvbG9yWzZdLCAxNiksXG4gICAgICBhbHBoYTogYWxwaGFcbiAgICB9O1xuICB9XG5cbiAgaWYgKG5vcm1hbGl6ZWRDb2xvci5tYXRjaChyZWR1Y2VkSGV4UmVnZXgpKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJlZDogcGFyc2VJbnQoXCJcIiArIG5vcm1hbGl6ZWRDb2xvclsxXSArIG5vcm1hbGl6ZWRDb2xvclsxXSwgMTYpLFxuICAgICAgZ3JlZW46IHBhcnNlSW50KFwiXCIgKyBub3JtYWxpemVkQ29sb3JbMl0gKyBub3JtYWxpemVkQ29sb3JbMl0sIDE2KSxcbiAgICAgIGJsdWU6IHBhcnNlSW50KFwiXCIgKyBub3JtYWxpemVkQ29sb3JbM10gKyBub3JtYWxpemVkQ29sb3JbM10sIDE2KVxuICAgIH07XG4gIH1cblxuICBpZiAobm9ybWFsaXplZENvbG9yLm1hdGNoKHJlZHVjZWRSZ2JhSGV4UmVnZXgpKSB7XG4gICAgdmFyIF9hbHBoYSA9IHBhcnNlRmxvYXQoKHBhcnNlSW50KFwiXCIgKyBub3JtYWxpemVkQ29sb3JbNF0gKyBub3JtYWxpemVkQ29sb3JbNF0sIDE2KSAvIDI1NSkudG9GaXhlZCgyKSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgcmVkOiBwYXJzZUludChcIlwiICsgbm9ybWFsaXplZENvbG9yWzFdICsgbm9ybWFsaXplZENvbG9yWzFdLCAxNiksXG4gICAgICBncmVlbjogcGFyc2VJbnQoXCJcIiArIG5vcm1hbGl6ZWRDb2xvclsyXSArIG5vcm1hbGl6ZWRDb2xvclsyXSwgMTYpLFxuICAgICAgYmx1ZTogcGFyc2VJbnQoXCJcIiArIG5vcm1hbGl6ZWRDb2xvclszXSArIG5vcm1hbGl6ZWRDb2xvclszXSwgMTYpLFxuICAgICAgYWxwaGE6IF9hbHBoYVxuICAgIH07XG4gIH1cblxuICB2YXIgcmdiTWF0Y2hlZCA9IHJnYlJlZ2V4LmV4ZWMobm9ybWFsaXplZENvbG9yKTtcblxuICBpZiAocmdiTWF0Y2hlZCkge1xuICAgIHJldHVybiB7XG4gICAgICByZWQ6IHBhcnNlSW50KFwiXCIgKyByZ2JNYXRjaGVkWzFdLCAxMCksXG4gICAgICBncmVlbjogcGFyc2VJbnQoXCJcIiArIHJnYk1hdGNoZWRbMl0sIDEwKSxcbiAgICAgIGJsdWU6IHBhcnNlSW50KFwiXCIgKyByZ2JNYXRjaGVkWzNdLCAxMClcbiAgICB9O1xuICB9XG5cbiAgdmFyIHJnYmFNYXRjaGVkID0gcmdiYVJlZ2V4LmV4ZWMobm9ybWFsaXplZENvbG9yKTtcblxuICBpZiAocmdiYU1hdGNoZWQpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcmVkOiBwYXJzZUludChcIlwiICsgcmdiYU1hdGNoZWRbMV0sIDEwKSxcbiAgICAgIGdyZWVuOiBwYXJzZUludChcIlwiICsgcmdiYU1hdGNoZWRbMl0sIDEwKSxcbiAgICAgIGJsdWU6IHBhcnNlSW50KFwiXCIgKyByZ2JhTWF0Y2hlZFszXSwgMTApLFxuICAgICAgYWxwaGE6IHBhcnNlRmxvYXQoXCJcIiArIHJnYmFNYXRjaGVkWzRdKVxuICAgIH07XG4gIH1cblxuICB2YXIgaHNsTWF0Y2hlZCA9IGhzbFJlZ2V4LmV4ZWMobm9ybWFsaXplZENvbG9yKTtcblxuICBpZiAoaHNsTWF0Y2hlZCkge1xuICAgIHZhciBodWUgPSBwYXJzZUludChcIlwiICsgaHNsTWF0Y2hlZFsxXSwgMTApO1xuICAgIHZhciBzYXR1cmF0aW9uID0gcGFyc2VJbnQoXCJcIiArIGhzbE1hdGNoZWRbMl0sIDEwKSAvIDEwMDtcbiAgICB2YXIgbGlnaHRuZXNzID0gcGFyc2VJbnQoXCJcIiArIGhzbE1hdGNoZWRbM10sIDEwKSAvIDEwMDtcbiAgICB2YXIgcmdiQ29sb3JTdHJpbmcgPSBcInJnYihcIiArICgwLCBfaHNsVG9SZ2IuZGVmYXVsdCkoaHVlLCBzYXR1cmF0aW9uLCBsaWdodG5lc3MpICsgXCIpXCI7XG4gICAgdmFyIGhzbFJnYk1hdGNoZWQgPSByZ2JSZWdleC5leGVjKHJnYkNvbG9yU3RyaW5nKTtcblxuICAgIGlmICghaHNsUmdiTWF0Y2hlZCkge1xuICAgICAgdGhyb3cgbmV3IF9lcnJvcnMuZGVmYXVsdCg0LCBub3JtYWxpemVkQ29sb3IsIHJnYkNvbG9yU3RyaW5nKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgcmVkOiBwYXJzZUludChcIlwiICsgaHNsUmdiTWF0Y2hlZFsxXSwgMTApLFxuICAgICAgZ3JlZW46IHBhcnNlSW50KFwiXCIgKyBoc2xSZ2JNYXRjaGVkWzJdLCAxMCksXG4gICAgICBibHVlOiBwYXJzZUludChcIlwiICsgaHNsUmdiTWF0Y2hlZFszXSwgMTApXG4gICAgfTtcbiAgfVxuXG4gIHZhciBoc2xhTWF0Y2hlZCA9IGhzbGFSZWdleC5leGVjKG5vcm1hbGl6ZWRDb2xvcik7XG5cbiAgaWYgKGhzbGFNYXRjaGVkKSB7XG4gICAgdmFyIF9odWUgPSBwYXJzZUludChcIlwiICsgaHNsYU1hdGNoZWRbMV0sIDEwKTtcblxuICAgIHZhciBfc2F0dXJhdGlvbiA9IHBhcnNlSW50KFwiXCIgKyBoc2xhTWF0Y2hlZFsyXSwgMTApIC8gMTAwO1xuXG4gICAgdmFyIF9saWdodG5lc3MgPSBwYXJzZUludChcIlwiICsgaHNsYU1hdGNoZWRbM10sIDEwKSAvIDEwMDtcblxuICAgIHZhciBfcmdiQ29sb3JTdHJpbmcgPSBcInJnYihcIiArICgwLCBfaHNsVG9SZ2IuZGVmYXVsdCkoX2h1ZSwgX3NhdHVyYXRpb24sIF9saWdodG5lc3MpICsgXCIpXCI7XG5cbiAgICB2YXIgX2hzbFJnYk1hdGNoZWQgPSByZ2JSZWdleC5leGVjKF9yZ2JDb2xvclN0cmluZyk7XG5cbiAgICBpZiAoIV9oc2xSZ2JNYXRjaGVkKSB7XG4gICAgICB0aHJvdyBuZXcgX2Vycm9ycy5kZWZhdWx0KDQsIG5vcm1hbGl6ZWRDb2xvciwgX3JnYkNvbG9yU3RyaW5nKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgcmVkOiBwYXJzZUludChcIlwiICsgX2hzbFJnYk1hdGNoZWRbMV0sIDEwKSxcbiAgICAgIGdyZWVuOiBwYXJzZUludChcIlwiICsgX2hzbFJnYk1hdGNoZWRbMl0sIDEwKSxcbiAgICAgIGJsdWU6IHBhcnNlSW50KFwiXCIgKyBfaHNsUmdiTWF0Y2hlZFszXSwgMTApLFxuICAgICAgYWxwaGE6IHBhcnNlRmxvYXQoXCJcIiArIGhzbGFNYXRjaGVkWzRdKVxuICAgIH07XG4gIH1cblxuICB0aHJvdyBuZXcgX2Vycm9ycy5kZWZhdWx0KDUpO1xufVxuXG52YXIgX2RlZmF1bHQgPSBwYXJzZVRvUmdiO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxuZnVuY3Rpb24gcmdiVG9Ic2woY29sb3IpIHtcbiAgLy8gbWFrZSBzdXJlIHJnYiBhcmUgY29udGFpbmVkIGluIGEgc2V0IG9mIFswLCAyNTVdXG4gIHZhciByZWQgPSBjb2xvci5yZWQgLyAyNTU7XG4gIHZhciBncmVlbiA9IGNvbG9yLmdyZWVuIC8gMjU1O1xuICB2YXIgYmx1ZSA9IGNvbG9yLmJsdWUgLyAyNTU7XG4gIHZhciBtYXggPSBNYXRoLm1heChyZWQsIGdyZWVuLCBibHVlKTtcbiAgdmFyIG1pbiA9IE1hdGgubWluKHJlZCwgZ3JlZW4sIGJsdWUpO1xuICB2YXIgbGlnaHRuZXNzID0gKG1heCArIG1pbikgLyAyO1xuXG4gIGlmIChtYXggPT09IG1pbikge1xuICAgIC8vIGFjaHJvbWF0aWNcbiAgICBpZiAoY29sb3IuYWxwaGEgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaHVlOiAwLFxuICAgICAgICBzYXR1cmF0aW9uOiAwLFxuICAgICAgICBsaWdodG5lc3M6IGxpZ2h0bmVzcyxcbiAgICAgICAgYWxwaGE6IGNvbG9yLmFscGhhXG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBodWU6IDAsXG4gICAgICAgIHNhdHVyYXRpb246IDAsXG4gICAgICAgIGxpZ2h0bmVzczogbGlnaHRuZXNzXG4gICAgICB9O1xuICAgIH1cbiAgfVxuXG4gIHZhciBodWU7XG4gIHZhciBkZWx0YSA9IG1heCAtIG1pbjtcbiAgdmFyIHNhdHVyYXRpb24gPSBsaWdodG5lc3MgPiAwLjUgPyBkZWx0YSAvICgyIC0gbWF4IC0gbWluKSA6IGRlbHRhIC8gKG1heCArIG1pbik7XG5cbiAgc3dpdGNoIChtYXgpIHtcbiAgICBjYXNlIHJlZDpcbiAgICAgIGh1ZSA9IChncmVlbiAtIGJsdWUpIC8gZGVsdGEgKyAoZ3JlZW4gPCBibHVlID8gNiA6IDApO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIGdyZWVuOlxuICAgICAgaHVlID0gKGJsdWUgLSByZWQpIC8gZGVsdGEgKyAyO1xuICAgICAgYnJlYWs7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgLy8gYmx1ZSBjYXNlXG4gICAgICBodWUgPSAocmVkIC0gZ3JlZW4pIC8gZGVsdGEgKyA0O1xuICAgICAgYnJlYWs7XG4gIH1cblxuICBodWUgKj0gNjA7XG5cbiAgaWYgKGNvbG9yLmFscGhhICE9PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaHVlOiBodWUsXG4gICAgICBzYXR1cmF0aW9uOiBzYXR1cmF0aW9uLFxuICAgICAgbGlnaHRuZXNzOiBsaWdodG5lc3MsXG4gICAgICBhbHBoYTogY29sb3IuYWxwaGFcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBodWU6IGh1ZSxcbiAgICBzYXR1cmF0aW9uOiBzYXR1cmF0aW9uLFxuICAgIGxpZ2h0bmVzczogbGlnaHRuZXNzXG4gIH07XG59XG5cbnZhciBfZGVmYXVsdCA9IHJnYlRvSHNsO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIF9wYXJzZVRvUmdiID1cbi8qI19fUFVSRV9fKi9cbl9pbnRlcm9wUmVxdWlyZURlZmF1bHQoXG4vKiNfX1BVUkVfXyovXG5yZXF1aXJlKFwiLi9wYXJzZVRvUmdiXCIpKTtcblxudmFyIF9yZ2JUb0hzbCA9XG4vKiNfX1BVUkVfXyovXG5faW50ZXJvcFJlcXVpcmVEZWZhdWx0KFxuLyojX19QVVJFX18qL1xucmVxdWlyZShcIi4uL2ludGVybmFsSGVscGVycy9fcmdiVG9Ic2xcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG4vKipcbiAqIFJldHVybnMgYW4gSHNsQ29sb3Igb3IgSHNsYUNvbG9yIG9iamVjdC4gVGhpcyB1dGlsaXR5IGZ1bmN0aW9uIGlzIG9ubHkgdXNlZnVsXG4gKiBpZiB3YW50IHRvIGV4dHJhY3QgYSBjb2xvciBjb21wb25lbnQuIFdpdGggdGhlIGNvbG9yIHV0aWwgYHRvQ29sb3JTdHJpbmdgIHlvdVxuICogY2FuIGNvbnZlcnQgYSBIc2xDb2xvciBvciBIc2xhQ29sb3Igb2JqZWN0IGJhY2sgdG8gYSBzdHJpbmcuXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFzc2lnbnMgYHsgaHVlOiAwLCBzYXR1cmF0aW9uOiAxLCBsaWdodG5lc3M6IDAuNSB9YCB0byBjb2xvcjFcbiAqIGNvbnN0IGNvbG9yMSA9IHBhcnNlVG9Ic2woJ3JnYigyNTUsIDAsIDApJyk7XG4gKiAvLyBBc3NpZ25zIGB7IGh1ZTogMTI4LCBzYXR1cmF0aW9uOiAxLCBsaWdodG5lc3M6IDAuNSwgYWxwaGE6IDAuNzUgfWAgdG8gY29sb3IyXG4gKiBjb25zdCBjb2xvcjIgPSBwYXJzZVRvSHNsKCdoc2xhKDEyOCwgMTAwJSwgNTAlLCAwLjc1KScpO1xuICovXG5mdW5jdGlvbiBwYXJzZVRvSHNsKGNvbG9yKSB7XG4gIC8vIE5vdGU6IEF0IGEgbGF0ZXIgc3RhZ2Ugd2UgY2FuIG9wdGltaXplIHRoaXMgZnVuY3Rpb24gYXMgcmlnaHQgbm93IGEgaHNsXG4gIC8vIGNvbG9yIHdvdWxkIGJlIHBhcnNlZCBjb252ZXJ0ZWQgdG8gcmdiIHZhbHVlcyBhbmQgY29udmVydGVkIGJhY2sgdG8gaHNsLlxuICByZXR1cm4gKDAsIF9yZ2JUb0hzbC5kZWZhdWx0KSgoMCwgX3BhcnNlVG9SZ2IuZGVmYXVsdCkoY29sb3IpKTtcbn1cblxudmFyIF9kZWZhdWx0ID0gcGFyc2VUb0hzbDtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbi8qKlxuICogUmVkdWNlcyBoZXggdmFsdWVzIGlmIHBvc3NpYmxlIGUuZy4gI2ZmODg2NiB0byAjZjg2XG4gKiBAcHJpdmF0ZVxuICovXG52YXIgcmVkdWNlSGV4VmFsdWUgPSBmdW5jdGlvbiByZWR1Y2VIZXhWYWx1ZSh2YWx1ZSkge1xuICBpZiAodmFsdWUubGVuZ3RoID09PSA3ICYmIHZhbHVlWzFdID09PSB2YWx1ZVsyXSAmJiB2YWx1ZVszXSA9PT0gdmFsdWVbNF0gJiYgdmFsdWVbNV0gPT09IHZhbHVlWzZdKSB7XG4gICAgcmV0dXJuIFwiI1wiICsgdmFsdWVbMV0gKyB2YWx1ZVszXSArIHZhbHVlWzVdO1xuICB9XG5cbiAgcmV0dXJuIHZhbHVlO1xufTtcblxudmFyIF9kZWZhdWx0ID0gcmVkdWNlSGV4VmFsdWU7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG5mdW5jdGlvbiBudW1iZXJUb0hleCh2YWx1ZSkge1xuICB2YXIgaGV4ID0gdmFsdWUudG9TdHJpbmcoMTYpO1xuICByZXR1cm4gaGV4Lmxlbmd0aCA9PT0gMSA/IFwiMFwiICsgaGV4IDogaGV4O1xufVxuXG52YXIgX2RlZmF1bHQgPSBudW1iZXJUb0hleDtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBfaHNsVG9SZ2IgPVxuLyojX19QVVJFX18qL1xuX2ludGVyb3BSZXF1aXJlRGVmYXVsdChcbi8qI19fUFVSRV9fKi9cbnJlcXVpcmUoXCIuL19oc2xUb1JnYlwiKSk7XG5cbnZhciBfcmVkdWNlSGV4VmFsdWUgPVxuLyojX19QVVJFX18qL1xuX2ludGVyb3BSZXF1aXJlRGVmYXVsdChcbi8qI19fUFVSRV9fKi9cbnJlcXVpcmUoXCIuL19yZWR1Y2VIZXhWYWx1ZVwiKSk7XG5cbnZhciBfbnVtYmVyVG9IZXggPVxuLyojX19QVVJFX18qL1xuX2ludGVyb3BSZXF1aXJlRGVmYXVsdChcbi8qI19fUFVSRV9fKi9cbnJlcXVpcmUoXCIuL19udW1iZXJUb0hleFwiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIGNvbG9yVG9IZXgoY29sb3IpIHtcbiAgcmV0dXJuICgwLCBfbnVtYmVyVG9IZXguZGVmYXVsdCkoTWF0aC5yb3VuZChjb2xvciAqIDI1NSkpO1xufVxuXG5mdW5jdGlvbiBjb252ZXJ0VG9IZXgocmVkLCBncmVlbiwgYmx1ZSkge1xuICByZXR1cm4gKDAsIF9yZWR1Y2VIZXhWYWx1ZS5kZWZhdWx0KShcIiNcIiArIGNvbG9yVG9IZXgocmVkKSArIGNvbG9yVG9IZXgoZ3JlZW4pICsgY29sb3JUb0hleChibHVlKSk7XG59XG5cbmZ1bmN0aW9uIGhzbFRvSGV4KGh1ZSwgc2F0dXJhdGlvbiwgbGlnaHRuZXNzKSB7XG4gIHJldHVybiAoMCwgX2hzbFRvUmdiLmRlZmF1bHQpKGh1ZSwgc2F0dXJhdGlvbiwgbGlnaHRuZXNzLCBjb252ZXJ0VG9IZXgpO1xufVxuXG52YXIgX2RlZmF1bHQgPSBoc2xUb0hleDtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBfaHNsVG9IZXggPVxuLyojX19QVVJFX18qL1xuX2ludGVyb3BSZXF1aXJlRGVmYXVsdChcbi8qI19fUFVSRV9fKi9cbnJlcXVpcmUoXCIuLi9pbnRlcm5hbEhlbHBlcnMvX2hzbFRvSGV4XCIpKTtcblxudmFyIF9lcnJvcnMgPVxuLyojX19QVVJFX18qL1xuX2ludGVyb3BSZXF1aXJlRGVmYXVsdChcbi8qI19fUFVSRV9fKi9cbnJlcXVpcmUoXCIuLi9pbnRlcm5hbEhlbHBlcnMvX2Vycm9yc1wiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbi8qKlxuICogUmV0dXJucyBhIHN0cmluZyB2YWx1ZSBmb3IgdGhlIGNvbG9yLiBUaGUgcmV0dXJuZWQgcmVzdWx0IGlzIHRoZSBzbWFsbGVzdCBwb3NzaWJsZSBoZXggbm90YXRpb24uXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFN0eWxlcyBhcyBvYmplY3QgdXNhZ2VcbiAqIGNvbnN0IHN0eWxlcyA9IHtcbiAqICAgYmFja2dyb3VuZDogaHNsKDM1OSwgMC43NSwgMC40KSxcbiAqICAgYmFja2dyb3VuZDogaHNsKHsgaHVlOiAzNjAsIHNhdHVyYXRpb246IDAuNzUsIGxpZ2h0bmVzczogMC40IH0pLFxuICogfVxuICpcbiAqIC8vIHN0eWxlZC1jb21wb25lbnRzIHVzYWdlXG4gKiBjb25zdCBkaXYgPSBzdHlsZWQuZGl2YFxuICogICBiYWNrZ3JvdW5kOiAke2hzbCgzNTksIDAuNzUsIDAuNCl9O1xuICogICBiYWNrZ3JvdW5kOiAke2hzbCh7IGh1ZTogMzYwLCBzYXR1cmF0aW9uOiAwLjc1LCBsaWdodG5lc3M6IDAuNCB9KX07XG4gKiBgXG4gKlxuICogLy8gQ1NTIGluIEpTIE91dHB1dFxuICpcbiAqIGVsZW1lbnQge1xuICogICBiYWNrZ3JvdW5kOiBcIiNiMzE5MWNcIjtcbiAqICAgYmFja2dyb3VuZDogXCIjYjMxOTFjXCI7XG4gKiB9XG4gKi9cbmZ1bmN0aW9uIGhzbCh2YWx1ZSwgc2F0dXJhdGlvbiwgbGlnaHRuZXNzKSB7XG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInICYmIHR5cGVvZiBzYXR1cmF0aW9uID09PSAnbnVtYmVyJyAmJiB0eXBlb2YgbGlnaHRuZXNzID09PSAnbnVtYmVyJykge1xuICAgIHJldHVybiAoMCwgX2hzbFRvSGV4LmRlZmF1bHQpKHZhbHVlLCBzYXR1cmF0aW9uLCBsaWdodG5lc3MpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgc2F0dXJhdGlvbiA9PT0gdW5kZWZpbmVkICYmIGxpZ2h0bmVzcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuICgwLCBfaHNsVG9IZXguZGVmYXVsdCkodmFsdWUuaHVlLCB2YWx1ZS5zYXR1cmF0aW9uLCB2YWx1ZS5saWdodG5lc3MpO1xuICB9XG5cbiAgdGhyb3cgbmV3IF9lcnJvcnMuZGVmYXVsdCgxKTtcbn1cblxudmFyIF9kZWZhdWx0ID0gaHNsO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIF9oc2xUb0hleCA9XG4vKiNfX1BVUkVfXyovXG5faW50ZXJvcFJlcXVpcmVEZWZhdWx0KFxuLyojX19QVVJFX18qL1xucmVxdWlyZShcIi4uL2ludGVybmFsSGVscGVycy9faHNsVG9IZXhcIikpO1xuXG52YXIgX2hzbFRvUmdiID1cbi8qI19fUFVSRV9fKi9cbl9pbnRlcm9wUmVxdWlyZURlZmF1bHQoXG4vKiNfX1BVUkVfXyovXG5yZXF1aXJlKFwiLi4vaW50ZXJuYWxIZWxwZXJzL19oc2xUb1JnYlwiKSk7XG5cbnZhciBfZXJyb3JzID1cbi8qI19fUFVSRV9fKi9cbl9pbnRlcm9wUmVxdWlyZURlZmF1bHQoXG4vKiNfX1BVUkVfXyovXG5yZXF1aXJlKFwiLi4vaW50ZXJuYWxIZWxwZXJzL19lcnJvcnNcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG4vKipcbiAqIFJldHVybnMgYSBzdHJpbmcgdmFsdWUgZm9yIHRoZSBjb2xvci4gVGhlIHJldHVybmVkIHJlc3VsdCBpcyB0aGUgc21hbGxlc3QgcG9zc2libGUgcmdiYSBvciBoZXggbm90YXRpb24uXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFN0eWxlcyBhcyBvYmplY3QgdXNhZ2VcbiAqIGNvbnN0IHN0eWxlcyA9IHtcbiAqICAgYmFja2dyb3VuZDogaHNsYSgzNTksIDAuNzUsIDAuNCwgMC43KSxcbiAqICAgYmFja2dyb3VuZDogaHNsYSh7IGh1ZTogMzYwLCBzYXR1cmF0aW9uOiAwLjc1LCBsaWdodG5lc3M6IDAuNCwgYWxwaGE6IDAsNyB9KSxcbiAqICAgYmFja2dyb3VuZDogaHNsYSgzNTksIDAuNzUsIDAuNCwgMSksXG4gKiB9XG4gKlxuICogLy8gc3R5bGVkLWNvbXBvbmVudHMgdXNhZ2VcbiAqIGNvbnN0IGRpdiA9IHN0eWxlZC5kaXZgXG4gKiAgIGJhY2tncm91bmQ6ICR7aHNsYSgzNTksIDAuNzUsIDAuNCwgMC43KX07XG4gKiAgIGJhY2tncm91bmQ6ICR7aHNsYSh7IGh1ZTogMzYwLCBzYXR1cmF0aW9uOiAwLjc1LCBsaWdodG5lc3M6IDAuNCwgYWxwaGE6IDAsNyB9KX07XG4gKiAgIGJhY2tncm91bmQ6ICR7aHNsYSgzNTksIDAuNzUsIDAuNCwgMSl9O1xuICogYFxuICpcbiAqIC8vIENTUyBpbiBKUyBPdXRwdXRcbiAqXG4gKiBlbGVtZW50IHtcbiAqICAgYmFja2dyb3VuZDogXCJyZ2JhKDE3OSwyNSwyOCwwLjcpXCI7XG4gKiAgIGJhY2tncm91bmQ6IFwicmdiYSgxNzksMjUsMjgsMC43KVwiO1xuICogICBiYWNrZ3JvdW5kOiBcIiNiMzE5MWNcIjtcbiAqIH1cbiAqL1xuZnVuY3Rpb24gaHNsYSh2YWx1ZSwgc2F0dXJhdGlvbiwgbGlnaHRuZXNzLCBhbHBoYSkge1xuICBpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJyAmJiB0eXBlb2Ygc2F0dXJhdGlvbiA9PT0gJ251bWJlcicgJiYgdHlwZW9mIGxpZ2h0bmVzcyA9PT0gJ251bWJlcicgJiYgdHlwZW9mIGFscGhhID09PSAnbnVtYmVyJykge1xuICAgIHJldHVybiBhbHBoYSA+PSAxID8gKDAsIF9oc2xUb0hleC5kZWZhdWx0KSh2YWx1ZSwgc2F0dXJhdGlvbiwgbGlnaHRuZXNzKSA6IFwicmdiYShcIiArICgwLCBfaHNsVG9SZ2IuZGVmYXVsdCkodmFsdWUsIHNhdHVyYXRpb24sIGxpZ2h0bmVzcykgKyBcIixcIiArIGFscGhhICsgXCIpXCI7XG4gIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiBzYXR1cmF0aW9uID09PSB1bmRlZmluZWQgJiYgbGlnaHRuZXNzID09PSB1bmRlZmluZWQgJiYgYWxwaGEgPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiB2YWx1ZS5hbHBoYSA+PSAxID8gKDAsIF9oc2xUb0hleC5kZWZhdWx0KSh2YWx1ZS5odWUsIHZhbHVlLnNhdHVyYXRpb24sIHZhbHVlLmxpZ2h0bmVzcykgOiBcInJnYmEoXCIgKyAoMCwgX2hzbFRvUmdiLmRlZmF1bHQpKHZhbHVlLmh1ZSwgdmFsdWUuc2F0dXJhdGlvbiwgdmFsdWUubGlnaHRuZXNzKSArIFwiLFwiICsgdmFsdWUuYWxwaGEgKyBcIilcIjtcbiAgfVxuXG4gIHRocm93IG5ldyBfZXJyb3JzLmRlZmF1bHQoMik7XG59XG5cbnZhciBfZGVmYXVsdCA9IGhzbGE7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX3JlZHVjZUhleFZhbHVlID1cbi8qI19fUFVSRV9fKi9cbl9pbnRlcm9wUmVxdWlyZURlZmF1bHQoXG4vKiNfX1BVUkVfXyovXG5yZXF1aXJlKFwiLi4vaW50ZXJuYWxIZWxwZXJzL19yZWR1Y2VIZXhWYWx1ZVwiKSk7XG5cbnZhciBfbnVtYmVyVG9IZXggPVxuLyojX19QVVJFX18qL1xuX2ludGVyb3BSZXF1aXJlRGVmYXVsdChcbi8qI19fUFVSRV9fKi9cbnJlcXVpcmUoXCIuLi9pbnRlcm5hbEhlbHBlcnMvX251bWJlclRvSGV4XCIpKTtcblxudmFyIF9lcnJvcnMgPVxuLyojX19QVVJFX18qL1xuX2ludGVyb3BSZXF1aXJlRGVmYXVsdChcbi8qI19fUFVSRV9fKi9cbnJlcXVpcmUoXCIuLi9pbnRlcm5hbEhlbHBlcnMvX2Vycm9yc1wiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbi8qKlxuICogUmV0dXJucyBhIHN0cmluZyB2YWx1ZSBmb3IgdGhlIGNvbG9yLiBUaGUgcmV0dXJuZWQgcmVzdWx0IGlzIHRoZSBzbWFsbGVzdCBwb3NzaWJsZSBoZXggbm90YXRpb24uXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFN0eWxlcyBhcyBvYmplY3QgdXNhZ2VcbiAqIGNvbnN0IHN0eWxlcyA9IHtcbiAqICAgYmFja2dyb3VuZDogcmdiKDI1NSwgMjA1LCAxMDApLFxuICogICBiYWNrZ3JvdW5kOiByZ2IoeyByZWQ6IDI1NSwgZ3JlZW46IDIwNSwgYmx1ZTogMTAwIH0pLFxuICogfVxuICpcbiAqIC8vIHN0eWxlZC1jb21wb25lbnRzIHVzYWdlXG4gKiBjb25zdCBkaXYgPSBzdHlsZWQuZGl2YFxuICogICBiYWNrZ3JvdW5kOiAke3JnYigyNTUsIDIwNSwgMTAwKX07XG4gKiAgIGJhY2tncm91bmQ6ICR7cmdiKHsgcmVkOiAyNTUsIGdyZWVuOiAyMDUsIGJsdWU6IDEwMCB9KX07XG4gKiBgXG4gKlxuICogLy8gQ1NTIGluIEpTIE91dHB1dFxuICpcbiAqIGVsZW1lbnQge1xuICogICBiYWNrZ3JvdW5kOiBcIiNmZmNkNjRcIjtcbiAqICAgYmFja2dyb3VuZDogXCIjZmZjZDY0XCI7XG4gKiB9XG4gKi9cbmZ1bmN0aW9uIHJnYih2YWx1ZSwgZ3JlZW4sIGJsdWUpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicgJiYgdHlwZW9mIGdyZWVuID09PSAnbnVtYmVyJyAmJiB0eXBlb2YgYmx1ZSA9PT0gJ251bWJlcicpIHtcbiAgICByZXR1cm4gKDAsIF9yZWR1Y2VIZXhWYWx1ZS5kZWZhdWx0KShcIiNcIiArICgwLCBfbnVtYmVyVG9IZXguZGVmYXVsdCkodmFsdWUpICsgKDAsIF9udW1iZXJUb0hleC5kZWZhdWx0KShncmVlbikgKyAoMCwgX251bWJlclRvSGV4LmRlZmF1bHQpKGJsdWUpKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIGdyZWVuID09PSB1bmRlZmluZWQgJiYgYmx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuICgwLCBfcmVkdWNlSGV4VmFsdWUuZGVmYXVsdCkoXCIjXCIgKyAoMCwgX251bWJlclRvSGV4LmRlZmF1bHQpKHZhbHVlLnJlZCkgKyAoMCwgX251bWJlclRvSGV4LmRlZmF1bHQpKHZhbHVlLmdyZWVuKSArICgwLCBfbnVtYmVyVG9IZXguZGVmYXVsdCkodmFsdWUuYmx1ZSkpO1xuICB9XG5cbiAgdGhyb3cgbmV3IF9lcnJvcnMuZGVmYXVsdCg2KTtcbn1cblxudmFyIF9kZWZhdWx0ID0gcmdiO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIF9wYXJzZVRvUmdiID1cbi8qI19fUFVSRV9fKi9cbl9pbnRlcm9wUmVxdWlyZURlZmF1bHQoXG4vKiNfX1BVUkVfXyovXG5yZXF1aXJlKFwiLi9wYXJzZVRvUmdiXCIpKTtcblxudmFyIF9yZ2IgPVxuLyojX19QVVJFX18qL1xuX2ludGVyb3BSZXF1aXJlRGVmYXVsdChcbi8qI19fUFVSRV9fKi9cbnJlcXVpcmUoXCIuL3JnYlwiKSk7XG5cbnZhciBfZXJyb3JzID1cbi8qI19fUFVSRV9fKi9cbl9pbnRlcm9wUmVxdWlyZURlZmF1bHQoXG4vKiNfX1BVUkVfXyovXG5yZXF1aXJlKFwiLi4vaW50ZXJuYWxIZWxwZXJzL19lcnJvcnNcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG4vKipcbiAqIFJldHVybnMgYSBzdHJpbmcgdmFsdWUgZm9yIHRoZSBjb2xvci4gVGhlIHJldHVybmVkIHJlc3VsdCBpcyB0aGUgc21hbGxlc3QgcG9zc2libGUgcmdiYSBvciBoZXggbm90YXRpb24uXG4gKlxuICogQ2FuIGFsc28gYmUgdXNlZCB0byBmYWRlIGEgY29sb3IgYnkgcGFzc2luZyBhIGhleCB2YWx1ZSBvciBuYW1lZCBDU1MgY29sb3IgYWxvbmcgd2l0aCBhbiBhbHBoYSB2YWx1ZS5cbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gU3R5bGVzIGFzIG9iamVjdCB1c2FnZVxuICogY29uc3Qgc3R5bGVzID0ge1xuICogICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjA1LCAxMDAsIDAuNyksXG4gKiAgIGJhY2tncm91bmQ6IHJnYmEoeyByZWQ6IDI1NSwgZ3JlZW46IDIwNSwgYmx1ZTogMTAwLCBhbHBoYTogMC43IH0pLFxuICogICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjA1LCAxMDAsIDEpLFxuICogICBiYWNrZ3JvdW5kOiByZ2JhKCcjZmZmZmZmJywgMC40KSxcbiAqICAgYmFja2dyb3VuZDogcmdiYSgnYmxhY2snLCAwLjcpLFxuICogfVxuICpcbiAqIC8vIHN0eWxlZC1jb21wb25lbnRzIHVzYWdlXG4gKiBjb25zdCBkaXYgPSBzdHlsZWQuZGl2YFxuICogICBiYWNrZ3JvdW5kOiAke3JnYmEoMjU1LCAyMDUsIDEwMCwgMC43KX07XG4gKiAgIGJhY2tncm91bmQ6ICR7cmdiYSh7IHJlZDogMjU1LCBncmVlbjogMjA1LCBibHVlOiAxMDAsIGFscGhhOiAwLjcgfSl9O1xuICogICBiYWNrZ3JvdW5kOiAke3JnYmEoMjU1LCAyMDUsIDEwMCwgMSl9O1xuICogICBiYWNrZ3JvdW5kOiAke3JnYmEoJyNmZmZmZmYnLCAwLjQpfTtcbiAqICAgYmFja2dyb3VuZDogJHtyZ2JhKCdibGFjaycsIDAuNyl9O1xuICogYFxuICpcbiAqIC8vIENTUyBpbiBKUyBPdXRwdXRcbiAqXG4gKiBlbGVtZW50IHtcbiAqICAgYmFja2dyb3VuZDogXCJyZ2JhKDI1NSwyMDUsMTAwLDAuNylcIjtcbiAqICAgYmFja2dyb3VuZDogXCJyZ2JhKDI1NSwyMDUsMTAwLDAuNylcIjtcbiAqICAgYmFja2dyb3VuZDogXCIjZmZjZDY0XCI7XG4gKiAgIGJhY2tncm91bmQ6IFwicmdiYSgyNTUsMjU1LDI1NSwwLjQpXCI7XG4gKiAgIGJhY2tncm91bmQ6IFwicmdiYSgwLDAsMCwwLjcpXCI7XG4gKiB9XG4gKi9cbmZ1bmN0aW9uIHJnYmEoZmlyc3RWYWx1ZSwgc2Vjb25kVmFsdWUsIHRoaXJkVmFsdWUsIGZvdXJ0aFZhbHVlKSB7XG4gIGlmICh0eXBlb2YgZmlyc3RWYWx1ZSA9PT0gJ3N0cmluZycgJiYgdHlwZW9mIHNlY29uZFZhbHVlID09PSAnbnVtYmVyJykge1xuICAgIHZhciByZ2JWYWx1ZSA9ICgwLCBfcGFyc2VUb1JnYi5kZWZhdWx0KShmaXJzdFZhbHVlKTtcbiAgICByZXR1cm4gXCJyZ2JhKFwiICsgcmdiVmFsdWUucmVkICsgXCIsXCIgKyByZ2JWYWx1ZS5ncmVlbiArIFwiLFwiICsgcmdiVmFsdWUuYmx1ZSArIFwiLFwiICsgc2Vjb25kVmFsdWUgKyBcIilcIjtcbiAgfSBlbHNlIGlmICh0eXBlb2YgZmlyc3RWYWx1ZSA9PT0gJ251bWJlcicgJiYgdHlwZW9mIHNlY29uZFZhbHVlID09PSAnbnVtYmVyJyAmJiB0eXBlb2YgdGhpcmRWYWx1ZSA9PT0gJ251bWJlcicgJiYgdHlwZW9mIGZvdXJ0aFZhbHVlID09PSAnbnVtYmVyJykge1xuICAgIHJldHVybiBmb3VydGhWYWx1ZSA+PSAxID8gKDAsIF9yZ2IuZGVmYXVsdCkoZmlyc3RWYWx1ZSwgc2Vjb25kVmFsdWUsIHRoaXJkVmFsdWUpIDogXCJyZ2JhKFwiICsgZmlyc3RWYWx1ZSArIFwiLFwiICsgc2Vjb25kVmFsdWUgKyBcIixcIiArIHRoaXJkVmFsdWUgKyBcIixcIiArIGZvdXJ0aFZhbHVlICsgXCIpXCI7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGZpcnN0VmFsdWUgPT09ICdvYmplY3QnICYmIHNlY29uZFZhbHVlID09PSB1bmRlZmluZWQgJiYgdGhpcmRWYWx1ZSA9PT0gdW5kZWZpbmVkICYmIGZvdXJ0aFZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gZmlyc3RWYWx1ZS5hbHBoYSA+PSAxID8gKDAsIF9yZ2IuZGVmYXVsdCkoZmlyc3RWYWx1ZS5yZWQsIGZpcnN0VmFsdWUuZ3JlZW4sIGZpcnN0VmFsdWUuYmx1ZSkgOiBcInJnYmEoXCIgKyBmaXJzdFZhbHVlLnJlZCArIFwiLFwiICsgZmlyc3RWYWx1ZS5ncmVlbiArIFwiLFwiICsgZmlyc3RWYWx1ZS5ibHVlICsgXCIsXCIgKyBmaXJzdFZhbHVlLmFscGhhICsgXCIpXCI7XG4gIH1cblxuICB0aHJvdyBuZXcgX2Vycm9ycy5kZWZhdWx0KDcpO1xufVxuXG52YXIgX2RlZmF1bHQgPSByZ2JhO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIF9oc2wgPVxuLyojX19QVVJFX18qL1xuX2ludGVyb3BSZXF1aXJlRGVmYXVsdChcbi8qI19fUFVSRV9fKi9cbnJlcXVpcmUoXCIuL2hzbFwiKSk7XG5cbnZhciBfaHNsYSA9XG4vKiNfX1BVUkVfXyovXG5faW50ZXJvcFJlcXVpcmVEZWZhdWx0KFxuLyojX19QVVJFX18qL1xucmVxdWlyZShcIi4vaHNsYVwiKSk7XG5cbnZhciBfcmdiID1cbi8qI19fUFVSRV9fKi9cbl9pbnRlcm9wUmVxdWlyZURlZmF1bHQoXG4vKiNfX1BVUkVfXyovXG5yZXF1aXJlKFwiLi9yZ2JcIikpO1xuXG52YXIgX3JnYmEgPVxuLyojX19QVVJFX18qL1xuX2ludGVyb3BSZXF1aXJlRGVmYXVsdChcbi8qI19fUFVSRV9fKi9cbnJlcXVpcmUoXCIuL3JnYmFcIikpO1xuXG52YXIgX2Vycm9ycyA9XG4vKiNfX1BVUkVfXyovXG5faW50ZXJvcFJlcXVpcmVEZWZhdWx0KFxuLyojX19QVVJFX18qL1xucmVxdWlyZShcIi4uL2ludGVybmFsSGVscGVycy9fZXJyb3JzXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIGlzUmdiID0gZnVuY3Rpb24gaXNSZ2IoY29sb3IpIHtcbiAgcmV0dXJuIHR5cGVvZiBjb2xvci5yZWQgPT09ICdudW1iZXInICYmIHR5cGVvZiBjb2xvci5ncmVlbiA9PT0gJ251bWJlcicgJiYgdHlwZW9mIGNvbG9yLmJsdWUgPT09ICdudW1iZXInICYmICh0eXBlb2YgY29sb3IuYWxwaGEgIT09ICdudW1iZXInIHx8IHR5cGVvZiBjb2xvci5hbHBoYSA9PT0gJ3VuZGVmaW5lZCcpO1xufTtcblxudmFyIGlzUmdiYSA9IGZ1bmN0aW9uIGlzUmdiYShjb2xvcikge1xuICByZXR1cm4gdHlwZW9mIGNvbG9yLnJlZCA9PT0gJ251bWJlcicgJiYgdHlwZW9mIGNvbG9yLmdyZWVuID09PSAnbnVtYmVyJyAmJiB0eXBlb2YgY29sb3IuYmx1ZSA9PT0gJ251bWJlcicgJiYgdHlwZW9mIGNvbG9yLmFscGhhID09PSAnbnVtYmVyJztcbn07XG5cbnZhciBpc0hzbCA9IGZ1bmN0aW9uIGlzSHNsKGNvbG9yKSB7XG4gIHJldHVybiB0eXBlb2YgY29sb3IuaHVlID09PSAnbnVtYmVyJyAmJiB0eXBlb2YgY29sb3Iuc2F0dXJhdGlvbiA9PT0gJ251bWJlcicgJiYgdHlwZW9mIGNvbG9yLmxpZ2h0bmVzcyA9PT0gJ251bWJlcicgJiYgKHR5cGVvZiBjb2xvci5hbHBoYSAhPT0gJ251bWJlcicgfHwgdHlwZW9mIGNvbG9yLmFscGhhID09PSAndW5kZWZpbmVkJyk7XG59O1xuXG52YXIgaXNIc2xhID0gZnVuY3Rpb24gaXNIc2xhKGNvbG9yKSB7XG4gIHJldHVybiB0eXBlb2YgY29sb3IuaHVlID09PSAnbnVtYmVyJyAmJiB0eXBlb2YgY29sb3Iuc2F0dXJhdGlvbiA9PT0gJ251bWJlcicgJiYgdHlwZW9mIGNvbG9yLmxpZ2h0bmVzcyA9PT0gJ251bWJlcicgJiYgdHlwZW9mIGNvbG9yLmFscGhhID09PSAnbnVtYmVyJztcbn07XG4vKipcbiAqIENvbnZlcnRzIGEgUmdiQ29sb3IsIFJnYmFDb2xvciwgSHNsQ29sb3Igb3IgSHNsYUNvbG9yIG9iamVjdCB0byBhIGNvbG9yIHN0cmluZy5cbiAqIFRoaXMgdXRpbCBpcyB1c2VmdWwgaW4gY2FzZSB5b3Ugb25seSBrbm93IG9uIHJ1bnRpbWUgd2hpY2ggY29sb3Igb2JqZWN0IGlzXG4gKiB1c2VkLiBPdGhlcndpc2Ugd2UgcmVjb21tZW5kIHRvIHJlbHkgb24gYHJnYmAsIGByZ2JhYCwgYGhzbGAgb3IgYGhzbGFgLlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBTdHlsZXMgYXMgb2JqZWN0IHVzYWdlXG4gKiBjb25zdCBzdHlsZXMgPSB7XG4gKiAgIGJhY2tncm91bmQ6IHRvQ29sb3JTdHJpbmcoeyByZWQ6IDI1NSwgZ3JlZW46IDIwNSwgYmx1ZTogMTAwIH0pLFxuICogICBiYWNrZ3JvdW5kOiB0b0NvbG9yU3RyaW5nKHsgcmVkOiAyNTUsIGdyZWVuOiAyMDUsIGJsdWU6IDEwMCwgYWxwaGE6IDAuNzIgfSksXG4gKiAgIGJhY2tncm91bmQ6IHRvQ29sb3JTdHJpbmcoeyBodWU6IDI0MCwgc2F0dXJhdGlvbjogMSwgbGlnaHRuZXNzOiAwLjUgfSksXG4gKiAgIGJhY2tncm91bmQ6IHRvQ29sb3JTdHJpbmcoeyBodWU6IDM2MCwgc2F0dXJhdGlvbjogMC43NSwgbGlnaHRuZXNzOiAwLjQsIGFscGhhOiAwLjcyIH0pLFxuICogfVxuICpcbiAqIC8vIHN0eWxlZC1jb21wb25lbnRzIHVzYWdlXG4gKiBjb25zdCBkaXYgPSBzdHlsZWQuZGl2YFxuICogICBiYWNrZ3JvdW5kOiAke3RvQ29sb3JTdHJpbmcoeyByZWQ6IDI1NSwgZ3JlZW46IDIwNSwgYmx1ZTogMTAwIH0pfTtcbiAqICAgYmFja2dyb3VuZDogJHt0b0NvbG9yU3RyaW5nKHsgcmVkOiAyNTUsIGdyZWVuOiAyMDUsIGJsdWU6IDEwMCwgYWxwaGE6IDAuNzIgfSl9O1xuICogICBiYWNrZ3JvdW5kOiAke3RvQ29sb3JTdHJpbmcoeyBodWU6IDI0MCwgc2F0dXJhdGlvbjogMSwgbGlnaHRuZXNzOiAwLjUgfSl9O1xuICogICBiYWNrZ3JvdW5kOiAke3RvQ29sb3JTdHJpbmcoeyBodWU6IDM2MCwgc2F0dXJhdGlvbjogMC43NSwgbGlnaHRuZXNzOiAwLjQsIGFscGhhOiAwLjcyIH0pfTtcbiAqIGBcbiAqXG4gKiAvLyBDU1MgaW4gSlMgT3V0cHV0XG4gKiBlbGVtZW50IHtcbiAqICAgYmFja2dyb3VuZDogXCIjZmZjZDY0XCI7XG4gKiAgIGJhY2tncm91bmQ6IFwicmdiYSgyNTUsMjA1LDEwMCwwLjcyKVwiO1xuICogICBiYWNrZ3JvdW5kOiBcIiMwMGZcIjtcbiAqICAgYmFja2dyb3VuZDogXCJyZ2JhKDE3OSwyNSwyNSwwLjcyKVwiO1xuICogfVxuICovXG5cblxuZnVuY3Rpb24gdG9Db2xvclN0cmluZyhjb2xvcikge1xuICBpZiAodHlwZW9mIGNvbG9yICE9PSAnb2JqZWN0JykgdGhyb3cgbmV3IF9lcnJvcnMuZGVmYXVsdCg4KTtcbiAgaWYgKGlzUmdiYShjb2xvcikpIHJldHVybiAoMCwgX3JnYmEuZGVmYXVsdCkoY29sb3IpO1xuICBpZiAoaXNSZ2IoY29sb3IpKSByZXR1cm4gKDAsIF9yZ2IuZGVmYXVsdCkoY29sb3IpO1xuICBpZiAoaXNIc2xhKGNvbG9yKSkgcmV0dXJuICgwLCBfaHNsYS5kZWZhdWx0KShjb2xvcik7XG4gIGlmIChpc0hzbChjb2xvcikpIHJldHVybiAoMCwgX2hzbC5kZWZhdWx0KShjb2xvcik7XG4gIHRocm93IG5ldyBfZXJyb3JzLmRlZmF1bHQoOCk7XG59XG5cbnZhciBfZGVmYXVsdCA9IHRvQ29sb3JTdHJpbmc7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX2N1cnJ5ID1cbi8qI19fUFVSRV9fKi9cbl9pbnRlcm9wUmVxdWlyZURlZmF1bHQoXG4vKiNfX1BVUkVfXyovXG5yZXF1aXJlKFwiLi4vaW50ZXJuYWxIZWxwZXJzL19jdXJyeVwiKSk7XG5cbnZhciBfZ3VhcmQgPVxuLyojX19QVVJFX18qL1xuX2ludGVyb3BSZXF1aXJlRGVmYXVsdChcbi8qI19fUFVSRV9fKi9cbnJlcXVpcmUoXCIuLi9pbnRlcm5hbEhlbHBlcnMvX2d1YXJkXCIpKTtcblxudmFyIF9wYXJzZVRvSHNsID1cbi8qI19fUFVSRV9fKi9cbl9pbnRlcm9wUmVxdWlyZURlZmF1bHQoXG4vKiNfX1BVUkVfXyovXG5yZXF1aXJlKFwiLi9wYXJzZVRvSHNsXCIpKTtcblxudmFyIF90b0NvbG9yU3RyaW5nID1cbi8qI19fUFVSRV9fKi9cbl9pbnRlcm9wUmVxdWlyZURlZmF1bHQoXG4vKiNfX1BVUkVfXyovXG5yZXF1aXJlKFwiLi90b0NvbG9yU3RyaW5nXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2V4dGVuZHMoKSB7IF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTsgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH1cblxuLyoqXG4gKiBSZXR1cm5zIGEgc3RyaW5nIHZhbHVlIGZvciB0aGUgZGFya2VuZWQgY29sb3IuXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFN0eWxlcyBhcyBvYmplY3QgdXNhZ2VcbiAqIGNvbnN0IHN0eWxlcyA9IHtcbiAqICAgYmFja2dyb3VuZDogZGFya2VuKDAuMiwgJyNGRkNENjQnKSxcbiAqICAgYmFja2dyb3VuZDogZGFya2VuKCcwLjInLCAncmdiYSgyNTUsMjA1LDEwMCwwLjcpJyksXG4gKiB9XG4gKlxuICogLy8gc3R5bGVkLWNvbXBvbmVudHMgdXNhZ2VcbiAqIGNvbnN0IGRpdiA9IHN0eWxlZC5kaXZgXG4gKiAgIGJhY2tncm91bmQ6ICR7ZGFya2VuKDAuMiwgJyNGRkNENjQnKX07XG4gKiAgIGJhY2tncm91bmQ6ICR7ZGFya2VuKCcwLjInLCAncmdiYSgyNTUsMjA1LDEwMCwwLjcpJyl9O1xuICogYFxuICpcbiAqIC8vIENTUyBpbiBKUyBPdXRwdXRcbiAqXG4gKiBlbGVtZW50IHtcbiAqICAgYmFja2dyb3VuZDogXCIjZmZiZDMxXCI7XG4gKiAgIGJhY2tncm91bmQ6IFwicmdiYSgyNTUsMTg5LDQ5LDAuNylcIjtcbiAqIH1cbiAqL1xuZnVuY3Rpb24gZGFya2VuKGFtb3VudCwgY29sb3IpIHtcbiAgaWYgKGNvbG9yID09PSAndHJhbnNwYXJlbnQnKSByZXR1cm4gY29sb3I7XG4gIHZhciBoc2xDb2xvciA9ICgwLCBfcGFyc2VUb0hzbC5kZWZhdWx0KShjb2xvcik7XG4gIHJldHVybiAoMCwgX3RvQ29sb3JTdHJpbmcuZGVmYXVsdCkoX2V4dGVuZHMoe30sIGhzbENvbG9yLCB7XG4gICAgbGlnaHRuZXNzOiAoMCwgX2d1YXJkLmRlZmF1bHQpKDAsIDEsIGhzbENvbG9yLmxpZ2h0bmVzcyAtIHBhcnNlRmxvYXQoYW1vdW50KSlcbiAgfSkpO1xufSAvLyBwcmV0dGllci1pZ25vcmVcblxuXG52YXIgY3VycmllZERhcmtlbiA9XG4vKiNfX1BVUkVfXyovXG4oMCwgX2N1cnJ5LmRlZmF1bHRcbi8qIDo6PG51bWJlciB8IHN0cmluZywgc3RyaW5nLCBzdHJpbmc+ICovXG4pKGRhcmtlbik7XG52YXIgX2RlZmF1bHQgPSBjdXJyaWVkRGFya2VuO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIF9wYXJzZVRvUmdiID1cbi8qI19fUFVSRV9fKi9cbl9pbnRlcm9wUmVxdWlyZURlZmF1bHQoXG4vKiNfX1BVUkVfXyovXG5yZXF1aXJlKFwiLi9wYXJzZVRvUmdiXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuLyoqXG4gKiBSZXR1cm5zIGEgbnVtYmVyIChmbG9hdCkgcmVwcmVzZW50aW5nIHRoZSBsdW1pbmFuY2Ugb2YgYSBjb2xvci5cbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gU3R5bGVzIGFzIG9iamVjdCB1c2FnZVxuICogY29uc3Qgc3R5bGVzID0ge1xuICogICBiYWNrZ3JvdW5kOiBnZXRMdW1pbmFuY2UoJyNDQ0NENjQnKSA+PSBnZXRMdW1pbmFuY2UoJyMwMDAwZmYnKSA/ICcjQ0NDRDY0JyA6ICcjMDAwMGZmJyxcbiAqICAgYmFja2dyb3VuZDogZ2V0THVtaW5hbmNlKCdyZ2JhKDU4LCAxMzMsIDI1NSwgMSknKSA+PSBnZXRMdW1pbmFuY2UoJ3JnYmEoMjU1LCA1NywgMTQ5LCAxKScpID9cbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAncmdiYSg1OCwgMTMzLCAyNTUsIDEpJyA6XG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3JnYmEoMjU1LCA1NywgMTQ5LCAxKScsXG4gKiB9XG4gKlxuICogLy8gc3R5bGVkLWNvbXBvbmVudHMgdXNhZ2VcbiAqIGNvbnN0IGRpdiA9IHN0eWxlZC5kaXZgXG4gKiAgIGJhY2tncm91bmQ6ICR7Z2V0THVtaW5hbmNlKCcjQ0NDRDY0JykgPj0gZ2V0THVtaW5hbmNlKCcjMDAwMGZmJykgPyAnI0NDQ0Q2NCcgOiAnIzAwMDBmZid9O1xuICogICBiYWNrZ3JvdW5kOiAke2dldEx1bWluYW5jZSgncmdiYSg1OCwgMTMzLCAyNTUsIDEpJykgPj0gZ2V0THVtaW5hbmNlKCdyZ2JhKDI1NSwgNTcsIDE0OSwgMSknKSA/XG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3JnYmEoNTgsIDEzMywgMjU1LCAxKScgOlxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICdyZ2JhKDI1NSwgNTcsIDE0OSwgMSknfTtcbiAqXG4gKiAvLyBDU1MgaW4gSlMgT3V0cHV0XG4gKlxuICogZGl2IHtcbiAqICAgYmFja2dyb3VuZDogXCIjQ0NDRDY0XCI7XG4gKiAgIGJhY2tncm91bmQ6IFwicmdiYSg1OCwgMTMzLCAyNTUsIDEpXCI7XG4gKiB9XG4gKi9cbmZ1bmN0aW9uIGdldEx1bWluYW5jZShjb2xvcikge1xuICBpZiAoY29sb3IgPT09ICd0cmFuc3BhcmVudCcpIHJldHVybiAwO1xuICB2YXIgcmdiQ29sb3IgPSAoMCwgX3BhcnNlVG9SZ2IuZGVmYXVsdCkoY29sb3IpO1xuXG4gIHZhciBfT2JqZWN0JGtleXMkbWFwID0gT2JqZWN0LmtleXMocmdiQ29sb3IpLm1hcChmdW5jdGlvbiAoa2V5KSB7XG4gICAgdmFyIGNoYW5uZWwgPSByZ2JDb2xvcltrZXldIC8gMjU1O1xuICAgIHJldHVybiBjaGFubmVsIDw9IDAuMDM5MjggPyBjaGFubmVsIC8gMTIuOTIgOiBNYXRoLnBvdygoY2hhbm5lbCArIDAuMDU1KSAvIDEuMDU1LCAyLjQpO1xuICB9KSxcbiAgICAgIHIgPSBfT2JqZWN0JGtleXMkbWFwWzBdLFxuICAgICAgZyA9IF9PYmplY3Qka2V5cyRtYXBbMV0sXG4gICAgICBiID0gX09iamVjdCRrZXlzJG1hcFsyXTtcblxuICByZXR1cm4gcGFyc2VGbG9hdCgoMC4yMTI2ICogciArIDAuNzE1MiAqIGcgKyAwLjA3MjIgKiBiKS50b0ZpeGVkKDMpKTtcbn1cblxudmFyIF9kZWZhdWx0ID0gZ2V0THVtaW5hbmNlO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDsiLCJpbXBvcnQgZ2V0THVtaW5hbmNlIGZyb20gJ3BvbGlzaGVkL2xpYi9jb2xvci9nZXRMdW1pbmFuY2UnO1xuaW1wb3J0IHsgVGhlbWVUeXBlIH0gZnJvbSAnLi4vdHlwZXMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmaW5kQ29sb3JJbnZlcnQoeyBibGFjaywgd2hpdGUgfTogVGhlbWVUeXBlLCBjb2xvcjogc3RyaW5nKSB7XG4gIGlmICghY29sb3IgfHwgZ2V0THVtaW5hbmNlKGNvbG9yKSA+IDAuNTUpIHtcbiAgICByZXR1cm4gYmxhY2s7XG4gIH1cbiAgcmV0dXJuIHdoaXRlO1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBfY3VycnkgPVxuLyojX19QVVJFX18qL1xuX2ludGVyb3BSZXF1aXJlRGVmYXVsdChcbi8qI19fUFVSRV9fKi9cbnJlcXVpcmUoXCIuLi9pbnRlcm5hbEhlbHBlcnMvX2N1cnJ5XCIpKTtcblxudmFyIF9ndWFyZCA9XG4vKiNfX1BVUkVfXyovXG5faW50ZXJvcFJlcXVpcmVEZWZhdWx0KFxuLyojX19QVVJFX18qL1xucmVxdWlyZShcIi4uL2ludGVybmFsSGVscGVycy9fZ3VhcmRcIikpO1xuXG52YXIgX3JnYmEgPVxuLyojX19QVVJFX18qL1xuX2ludGVyb3BSZXF1aXJlRGVmYXVsdChcbi8qI19fUFVSRV9fKi9cbnJlcXVpcmUoXCIuL3JnYmFcIikpO1xuXG52YXIgX3BhcnNlVG9SZ2IgPVxuLyojX19QVVJFX18qL1xuX2ludGVyb3BSZXF1aXJlRGVmYXVsdChcbi8qI19fUFVSRV9fKi9cbnJlcXVpcmUoXCIuL3BhcnNlVG9SZ2JcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfZXh0ZW5kcygpIHsgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9OyByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfVxuXG4vKipcbiAqIERlY3JlYXNlcyB0aGUgb3BhY2l0eSBvZiBhIGNvbG9yLiBJdHMgcmFuZ2UgZm9yIHRoZSBhbW91bnQgaXMgYmV0d2VlbiAwIHRvIDEuXG4gKlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBTdHlsZXMgYXMgb2JqZWN0IHVzYWdlXG4gKiBjb25zdCBzdHlsZXMgPSB7XG4gKiAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50aXplKDAuMSwgJyNmZmYnKTtcbiAqICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnRpemUoMC4yLCAnaHNsKDAsIDAlLCAxMDAlKScpLFxuICogICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudGl6ZSgnMC41JywgJ3JnYmEoMjU1LCAwLCAwLCAwLjgpJyksXG4gKiB9XG4gKlxuICogLy8gc3R5bGVkLWNvbXBvbmVudHMgdXNhZ2VcbiAqIGNvbnN0IGRpdiA9IHN0eWxlZC5kaXZgXG4gKiAgIGJhY2tncm91bmQ6ICR7dHJhbnNwYXJlbnRpemUoMC4xLCAnI2ZmZicpfTtcbiAqICAgYmFja2dyb3VuZDogJHt0cmFuc3BhcmVudGl6ZSgwLjIsICdoc2woMCwgMCUsIDEwMCUpJyl9LFxuICogICBiYWNrZ3JvdW5kOiAke3RyYW5zcGFyZW50aXplKCcwLjUnLCAncmdiYSgyNTUsIDAsIDAsIDAuOCknKX0sXG4gKiBgXG4gKlxuICogLy8gQ1NTIGluIEpTIE91dHB1dFxuICpcbiAqIGVsZW1lbnQge1xuICogICBiYWNrZ3JvdW5kOiBcInJnYmEoMjU1LDI1NSwyNTUsMC45KVwiO1xuICogICBiYWNrZ3JvdW5kOiBcInJnYmEoMjU1LDI1NSwyNTUsMC44KVwiO1xuICogICBiYWNrZ3JvdW5kOiBcInJnYmEoMjU1LDAsMCwwLjMpXCI7XG4gKiB9XG4gKi9cbmZ1bmN0aW9uIHRyYW5zcGFyZW50aXplKGFtb3VudCwgY29sb3IpIHtcbiAgaWYgKGNvbG9yID09PSAndHJhbnNwYXJlbnQnKSByZXR1cm4gY29sb3I7XG4gIHZhciBwYXJzZWRDb2xvciA9ICgwLCBfcGFyc2VUb1JnYi5kZWZhdWx0KShjb2xvcik7XG4gIHZhciBhbHBoYSA9IHR5cGVvZiBwYXJzZWRDb2xvci5hbHBoYSA9PT0gJ251bWJlcicgPyBwYXJzZWRDb2xvci5hbHBoYSA6IDE7XG5cbiAgdmFyIGNvbG9yV2l0aEFscGhhID0gX2V4dGVuZHMoe30sIHBhcnNlZENvbG9yLCB7XG4gICAgYWxwaGE6ICgwLCBfZ3VhcmQuZGVmYXVsdCkoMCwgMSwgKGFscGhhICogMTAwIC0gcGFyc2VGbG9hdChhbW91bnQpICogMTAwKSAvIDEwMClcbiAgfSk7XG5cbiAgcmV0dXJuICgwLCBfcmdiYS5kZWZhdWx0KShjb2xvcldpdGhBbHBoYSk7XG59IC8vIHByZXR0aWVyLWlnbm9yZVxuXG5cbnZhciBjdXJyaWVkVHJhbnNwYXJlbnRpemUgPVxuLyojX19QVVJFX18qL1xuKDAsIF9jdXJyeS5kZWZhdWx0XG4vKiA6OjxudW1iZXIgfCBzdHJpbmcsIHN0cmluZywgc3RyaW5nPiAqL1xuKSh0cmFuc3BhcmVudGl6ZSk7XG52YXIgX2RlZmF1bHQgPSBjdXJyaWVkVHJhbnNwYXJlbnRpemU7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0OyIsImltcG9ydCB7IGNzcyB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB0cmFuc3BhcmVudGl6ZSBmcm9tICdwb2xpc2hlZC9saWIvY29sb3IvdHJhbnNwYXJlbnRpemUnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBib3hTaGFkb3coc2l6ZTogc3RyaW5nLCBjb2xvcjogc3RyaW5nLCBhbW91bnQ/OiBudW1iZXIpIHtcbiAgY29uc3Qgc2hhZG93Q29sb3IgPSBhbW91bnQgPyB0cmFuc3BhcmVudGl6ZShhbW91bnQsIGNvbG9yKSA6IGNvbG9yO1xuICByZXR1cm4gY3NzYGJveC1zaGFkb3c6IDAgMCAwICR7c2l6ZX0gJHtzaGFkb3dDb2xvcn07YDtcbn1cbiIsImltcG9ydCB7IFNpemVUeXBlIH0gZnJvbSAnLi4vdHlwZXMnO1xuXG50eXBlIFNpemVQcm9wc05hbWVUeXBlID0gJ2ZvbnQtc2l6ZScgfCAnaGVpZ2h0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2V0U2l6ZShuYW1lOiBTaXplUHJvcHNOYW1lVHlwZSwgc2l6ZT86IFNpemVUeXBlKSB7XG4gIHN3aXRjaCAoc2l6ZSkge1xuICAgIGNhc2UgJ3NtYWxsJzpcbiAgICAgIHJldHVybiBgJHtuYW1lfTogMC43NXJlbTtgO1xuICAgIGNhc2UgJ21lZGl1bSc6XG4gICAgICByZXR1cm4gYCR7bmFtZX06IDEuMjVyZW07YDtcbiAgICBjYXNlICdsYXJnZSc6XG4gICAgICByZXR1cm4gYCR7bmFtZX06IDEuNXJlbTtgO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gYCR7bmFtZX06IDFyZW07YDtcbiAgfVxufVxuIiwiaW1wb3J0IHsgY3NzIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHRyYW5zcGFyZW50aXplIGZyb20gJ3BvbGlzaGVkL2xpYi9jb2xvci90cmFuc3BhcmVudGl6ZSc7XG5pbXBvcnQgeyBUaGVtZVR5cGUsIENTU1R5cGUgfSBmcm9tICcuLi90eXBlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRpc2FibGVkQ29sb3IodGhlbWU6IFRoZW1lVHlwZSk6IENTU1R5cGUge1xuICBjb25zdCB0ZXh0Q29sb3IgPSB0cmFuc3BhcmVudGl6ZSgwLjE1LCB0aGVtZS50ZXh0RGFyayk7XG4gIGNvbnN0IGJhY2tDb2xvciA9IHRyYW5zcGFyZW50aXplKDAuNTUsIHRoZW1lLmJvcmRlcik7XG4gIHJldHVybiBjc3NgXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICBjb2xvcjogJHt0ZXh0Q29sb3J9O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR7YmFja0NvbG9yfTtcbiAgYDtcbn1cbiIsImltcG9ydCBzdHlsZWQsIHsgY3NzIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgSFRNTEF0dHJpYnV0ZXMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgZGFya2VuIGZyb20gJ3BvbGlzaGVkL2xpYi9jb2xvci9kYXJrZW4nO1xuaW1wb3J0IGZpbmRDb2xvckludmVydCBmcm9tICcuLi8uLi91dGlscy9maW5kQ29sb3JJbnZlcnQnO1xuaW1wb3J0IGJveFNoYWRvdyBmcm9tICcuLi8uLi91dGlscy9ib3hTaGFkb3cnO1xuaW1wb3J0IHNldFNpemUgZnJvbSAnLi4vLi4vdXRpbHMvc2V0U2l6ZSc7XG5pbXBvcnQgZGlzYWJsZWRDb2xvciBmcm9tICcuLi8uLi91dGlscy9kaXNhYmxlZENvbG9yJztcbmltcG9ydCB7IENvbG9yVHlwZSwgVGhlbWVUeXBlLCBTaXplVHlwZSB9IGZyb20gJy4uLy4uL3R5cGVzJztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgdGhlbWU6IFRoZW1lVHlwZTtcbiAgY29sb3I/OiBDb2xvclR5cGU7XG4gIG91dGxpbmU/OiBib29sZWFuO1xuICBkaXNhYmxlZD86IGJvb2xlYW47XG59XG5cbmZ1bmN0aW9uIHNldENvbG9yKHsgdGhlbWUsIGNvbG9yLCBvdXRsaW5lLCBkaXNhYmxlZCB9OiBQcm9wcykge1xuICBpZiAoZGlzYWJsZWQpIHtcbiAgICByZXR1cm4gZGlzYWJsZWRDb2xvcih0aGVtZSk7XG4gIH1cbiAgaWYgKCFjb2xvcikge1xuICAgIHJldHVybiBjc3NgXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lLndoaXRlfTtcbiAgICAgIGJvcmRlci1jb2xvcjogJHt0aGVtZS5ib3JkZXJ9O1xuICAgICAgY29sb3I6ICR7dGhlbWUudGV4dH07XG5cbiAgICAgICY6aG92ZXIge1xuICAgICAgICBib3JkZXItY29sb3I6ICR7dGhlbWUuYm9yZGVySG92ZXJ9O1xuICAgICAgfVxuXG4gICAgICAmOmFjdGl2ZSB7XG4gICAgICAgIGJvcmRlci1jb2xvcjogJHt0aGVtZS5ib3JkZXJBY3RpdmV9O1xuICAgICAgfVxuICAgIGA7XG4gIH1cbiAgaWYgKGNvbG9yID09PSAndGV4dCcpIHtcbiAgICByZXR1cm4gY3NzYFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgY29sb3I6ICR7dGhlbWUudGV4dH07XG5cbiAgICAgICY6aG92ZXJ7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgfVxuICAgIGA7XG4gIH1cblxuICBjb25zdCB0YXJnZXQgPSB0aGVtZVtjb2xvcl0gfHwgY29sb3I7XG4gIGNvbnN0IGludmVydENvbG9yID0gZmluZENvbG9ySW52ZXJ0KHRoZW1lLCB0YXJnZXQpO1xuICBpZiAob3V0bGluZSkge1xuICAgIHJldHVybiBjc3NgXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgIGJvcmRlci1jb2xvcjogJHt0YXJnZXR9O1xuICAgICAgY29sb3I6ICR7dGFyZ2V0fTtcblxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7dGFyZ2V0fTtcbiAgICAgICAgY29sb3I6ICR7aW52ZXJ0Q29sb3J9O1xuICAgICAgfVxuXG4gICAgICAmOmZvY3VzIHtcbiAgICAgICAgJHtib3hTaGFkb3coJzAuMnJlbScsIHRhcmdldCwgMC4yKX1cbiAgICAgIH1cbiAgICBgO1xuICB9XG5cbiAgcmV0dXJuIGNzc2BcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RhcmdldH07XG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBjb2xvcjogJHtpbnZlcnRDb2xvcn07XG4gICAgYm94LXNoYWRvdzogbm9uZTtcblxuICAgICY6aG92ZXIge1xuICAgICAgY29sb3I6ICR7aW52ZXJ0Q29sb3J9O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtkYXJrZW4oMC4wMjUsIHRhcmdldCl9O1xuICAgIH1cblxuICAgICY6YWN0aXZlIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7ZGFya2VuKDAuMDUsIHRhcmdldCl9O1xuICAgIH1cblxuICAgICY6Zm9jdXMge1xuICAgICAgJHtib3hTaGFkb3coJzAuMnJlbScsIHRhcmdldCwgMC4yKX1cbiAgICB9XG4gIGA7XG59XG5cbmludGVyZmFjZSBCdXR0b25Qcm9wcyBleHRlbmRzIEhUTUxBdHRyaWJ1dGVzPEhUTUxCdXR0b25FbGVtZW50PiB7XG4gIC8qKiDjg5zjgr/jg7Pjga7oibIgKi9cbiAgY29sb3I/OiBDb2xvclR5cGU7XG4gIC8qKiDjg5zjgr/jg7Pjga7jgrXjgqTjgrogKi9cbiAgc2l6ZT86IFNpemVUeXBlO1xuICAvKiog6IOM5pmv44GM6YCP5piO44Gq44Oc44K/44Oz44Gn44GZ44KLICovXG4gIG91dGxpbmU/OiBib29sZWFuO1xuICAvKiog5YWo5L2T5bmF44Gu44Oc44K/44Oz44Gn6Kit5a6aICovXG4gIGZ1bGw/OiBib29sZWFuO1xufVxuXG5jb25zdCBCdXR0b24gPSBzdHlsZWQuYnV0dG9uPEJ1dHRvblByb3BzPmBcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdXRsaW5lOiBub25lO1xuICBhcHBlYXJhbmNlOiBub25lO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIHBhZGRpbmc6IDAuMzc1ZW0gMC43NWVtO1xuICBsaW5lLWhlaWdodDogMS41O1xuXG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IGJhY2tncm91bmQtY29sb3IsIGNvbG9yLCBib3gtc2hhZG93O1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAxNTBtcztcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xuXG4gICR7c2V0Q29sb3J9XG4gICR7KHsgc2l6ZSB9KSA9PiBzZXRTaXplKCdmb250LXNpemUnLCBzaXplKX1cbiAgJHsoeyBmdWxsIH0pID0+IGZ1bGwgPyAnd2lkdGg6IDEwMCU7JyA6ICcnfVxuYDtcbkJ1dHRvbi5kaXNwbGF5TmFtZSA9ICdCdXR0b24nO1xuXG5leHBvcnQgZGVmYXVsdCBCdXR0b247XG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBCdXR0b24gZnJvbSAnLic7XG5cbmNvbnN0IEJ1dHRvbkdyb3VwID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXG4gICY6bm90KDpsYXN0LWNoaWxkKSB7XG4gICAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XG4gIH1cblxuICAke0J1dHRvbn0ge1xuICAgIG1hcmdpbjogMDtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuXG4gICAgJjpmaXJzdC1jaGlsZCB7XG4gICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA0cHg7XG4gICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA0cHg7XG4gICAgfVxuXG4gICAgJjpub3QoOmZpcnN0LWNoaWxkKSB7XG4gICAgICBtYXJnaW4tbGVmdDogLTFweDtcbiAgICB9XG5cbiAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDRweDtcbiAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA0cHg7XG4gICAgfVxuICB9XG5gO1xuQnV0dG9uR3JvdXAuZGlzcGxheU5hbWUgPSAnQnV0dG9uR3JvdXAnO1xuXG5leHBvcnQgZGVmYXVsdCBCdXR0b25Hcm91cDtcbiIsImltcG9ydCBzdHlsZWQsIHsgY3NzIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgU2l6ZVR5cGUgfSBmcm9tICcuLi8uLi90eXBlcyc7XG5cbmNvbnN0IHN0cmlwZWRTdHlsZSA9IGNzc2BcbiAgdGJvZHkgPiB0cjpudGgtY2hpbGQob2RkKSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjAyKTtcbiAgfVxuYDtcblxuY29uc3QgaG92ZXJTdHlsZSA9IGNzc2BcbiAgdGJvZHkgPiB0cjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjA0KTtcbiAgfVxuYDtcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgc2l6ZT86IFNpemVUeXBlO1xuICBmdWxsPzogYm9vbGVhbjtcbiAgaGVhZGVyU3R5bGU/OiBhbnk7XG4gIGJvcmRlcmVkPzogYm9vbGVhbjtcbiAgYm9yZGVybGVzcz86IGJvb2xlYW47XG4gIHN0cmlwZWQ/OiBib29sZWFuO1xuICBob3Zlcj86IGJvb2xlYW47XG59XG5cbmNvbnN0IFRhYmxlID0gc3R5bGVkLnRhYmxlPFByb3BzPmBcbiAgZGlzcGxheTogYmxvY2s7XG4gICR7KHsgZnVsbCB9KSA9PiBmdWxsID8gY3NzYHdpZHRoOiAxMDAlO2AgOiAnJ31cbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcblxuICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XG4gIC1tcy1vdmVyZmxvdy1zdHlsZTogLW1zLWF1dG9oaWRpbmctc2Nyb2xsYmFyO1xuXG4gIHRkLCB0aCB7XG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICBwYWRkaW5nOiAwLjc1cmVtO1xuICAgICR7KHsgdGhlbWUsIGJvcmRlcmVkIH0pID0+IGJvcmRlcmVkID8gY3NzYFxuICAgICAgYm9yZGVyOiAxcHggc29saWQgJHt0aGVtZS5ib3JkZXJ9O1xuICAgIGAgOiAnJ31cbiAgICBib3JkZXItd2lkdGg6IDAgMCAxcHg7XG4gIH1cblxuICB0aCB7IHdoaXRlLXNwYWNlOiBub3dyYXA7IH1cblxuICAkeyh7IHN0cmlwZWQgfSkgPT4gc3RyaXBlZCA/IHN0cmlwZWRTdHlsZSA6ICcnfVxuICAkeyh7IGhvdmVyIH0pID0+IGhvdmVyID8gaG92ZXJTdHlsZSA6ICcnfVxuXG4gICR7KHsgaGVhZGVyU3R5bGUgfSkgPT4gaGVhZGVyU3R5bGUgPyBjc3NgXG4gICAgdGgge1xuICAgICAgJHtoZWFkZXJTdHlsZX1cbiAgICB9XG4gIGAgOiAnJ31cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IFRhYmxlO1xuIiwiaW1wb3J0IHsgSFRNTEF0dHJpYnV0ZXMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkLCB7IGNzcyB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBmaW5kQ29sb3JJbnZlcnQgZnJvbSAnLi4vLi4vdXRpbHMvZmluZENvbG9ySW52ZXJ0JztcbmltcG9ydCB7IENvbG9yVHlwZSB9IGZyb20gJy4uLy4uL3R5cGVzJztcblxuZXhwb3J0IGludGVyZmFjZSBQcm9wcyBleHRlbmRzIEhUTUxBdHRyaWJ1dGVzPEhUTUxEaXZFbGVtZW50PiB7XG4gIC8qKiDoibLmjIflrpogKi9cbiAgY29sb3I/OiBDb2xvclR5cGU7XG4gIC8qKiBib3JkZXLjgpLpnZ7ooajnpLrjgZnjgosgKi9cbiAgYm9yZGVybGVzcz86IGJvb2xlYW47XG4gIHN0eWxlPzogYW55O1xufVxuXG5mdW5jdGlvbiBzZXRDb2xvcih7IGNvbG9yLCB0aGVtZSB9OiBhbnkpIHtcbiAgaWYgKCFjb2xvcikgcmV0dXJuIHt9O1xuXG4gIGNvbnN0IHRhcmdldCA9IHRoZW1lW2NvbG9yXSB8fCBjb2xvcjtcbiAgY29uc3QgaW52ZXJ0Q29sb3IgPSBmaW5kQ29sb3JJbnZlcnQodGhlbWUsIHRhcmdldCk7XG4gIHJldHVybiBjc3NgYmFja2dyb3VuZC1jb2xvcjogJHt0YXJnZXR9OyBjb2xvcjogJHtpbnZlcnRDb2xvcn07YDtcbn1cblxuY29uc3QgQm94ID0gc3R5bGVkLmRpdjxQcm9wcz5gXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgJHsoeyBib3JkZXJsZXNzLCB0aGVtZSB9KSA9PiBib3JkZXJsZXNzID8gYGAgOiBgYm9yZGVyOiAxcHggc29saWQgJHt0aGVtZS5ib3JkZXJ9O2B9XG4gIGJveC1zaGFkb3c6IDAgMXB4IDJweCAwIHJnYmEoMCwgMCwgMCwgMC4wNSk7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgd2lkdGg6IDEwMCU7XG5cbiAgbWluLXdpZHRoOiAwO1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG5cbiAgJHtzZXRDb2xvcn1cbmA7XG5Cb3guZGlzcGxheU5hbWUgPSAnQm94JztcblxuZXhwb3J0IGRlZmF1bHQgQm94O1xuIiwiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQsIEhUTUxBdHRyaWJ1dGVzIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgc2V0U2l6ZSBmcm9tICcuLi8uLi91dGlscy9zZXRTaXplJztcbmltcG9ydCB7IENvbG9yVHlwZSwgU2l6ZVR5cGUsIENTU1R5cGUgfSBmcm9tICcuLi8uLi90eXBlcyc7XG5cbmludGVyZmFjZSBQcm9ncmVzc1Byb3BzIGV4dGVuZHMgSFRNTEF0dHJpYnV0ZXM8SFRNTERpdkVsZW1lbnQ+e1xuICAvKiog54++54q244Gu6YCy5o2XICovXG4gIHZhbHVlOiBudW1iZXI7XG4gIC8qKiDpgLLmjZfjga7mnIDlpKflgKQgKi9cbiAgbWF4OiBudW1iZXI7XG4gIC8qKiDjg5Djg7zjga7jgrXjgqTjgrogKi9cbiAgc2l6ZT86IFNpemVUeXBlO1xuICAvKiogc2l6ZeOCkuS9v+OCj+OBquOBhOOBqOOBjeOBrue4puW5heOCkuaMh+WumuOBmeOCiyAqL1xuICBoZWlnaHQ/OiBzdHJpbmc7XG4gIC8qKiDjg5Djg7zjga7oibIgKi9cbiAgY29sb3I/OiBDb2xvclR5cGU7XG4gIC8qKiDjgqvjgrnjgr/jg6BDU1PlrprnvqkgKi9cbiAgY3NzPzogQ1NTVHlwZTtcbn1cblxuY29uc3QgV3JhcHBlciA9IHN0eWxlZC5kaXY8UHJvZ3Jlc3NQcm9wcz5gXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuYmFja2dyb3VuZH07XG5cbiAgJHsoeyBzaXplIH0pID0+IHNldFNpemUoJ2hlaWdodCcsIHNpemUpfVxuICAkeyh7IHNpemUsIGhlaWdodCB9KSA9PiAhc2l6ZSAmJiBoZWlnaHQgPyBgaGVpZ2h0OiAke2hlaWdodH07YCA6ICcnfVxuXG4gICYgPiBkaXZbcm9sZT1cInByb2dyZXNzYmFyXCJdIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAkeyh7IHZhbHVlLCBtYXggfSkgPT4gKHZhbHVlID09PSBtYXgpID8gJycgOiAnYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7IGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwOyd9XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHsoeyBjb2xvciwgdGhlbWUgfSkgPT4gKHRoZW1lW2NvbG9yIV0gfHwgY29sb3IpfTtcblxuICAgIHdpbGwtY2hhbmdlOiB3aWR0aDtcblxuICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IHdpZHRoO1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDM1MG1zO1xuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSk7XG4gICAgei1pbmRleDogMTtcbiAgfVxuICAkeyh7IGNzcyB9KSA9PiAoY3NzIHx8ICcnKX1cbmA7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvZ3Jlc3MgZXh0ZW5kcyBQdXJlQ29tcG9uZW50PFByb2dyZXNzUHJvcHM+IHtcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBjb2xvcjogJ3ByaW1hcnknLFxuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICBjb25zdCB7IHZhbHVlLCBtYXggfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgcGVyY2VudCA9IE1hdGgucm91bmQoKHZhbHVlL21heCkgKiAxMDApO1xuICAgIHJldHVybiAoXG4gICAgICA8V3JhcHBlciB7Li4udGhpcy5wcm9wc30+XG4gICAgICAgIDxkaXYgcm9sZT1cInByb2dyZXNzYmFyXCIgc3R5bGU9e3sgd2lkdGg6IGAke3BlcmNlbnQgPiAxMDAgPyAxMDAgOiBwZXJjZW50fSVgIH19ID48L2Rpdj5cbiAgICAgIDwvV3JhcHBlcj5cbiAgICApO1xuICB9XG59O1xuIiwiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQsIFJlYWN0Tm9kZSwgSFRNTEF0dHJpYnV0ZXMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkLCB7IGNzcyB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7IENTU1R5cGUgfSBmcm9tICcuLi8uLi90eXBlcyc7XG5cbmNvbnN0IFdyYXBwZXIgPSBzdHlsZWQuZGl2PHsgcmVxdWlyZWQ/OiBib29sZWFuLCBjc3M/OiBDU1NUeXBlIH0+YFxuICBkaXNwbGF5OiBibG9jaztcbiAgJjpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjc1cmVtO1xuICB9XG4gICR7KHsgcmVxdWlyZWQsIHRoZW1lIH0pID0+IHJlcXVpcmVkID8gY3NzYFxuICAgIGxhYmVsOjphZnRlciB7XG4gICAgICBjb250ZW50OiAnKic7XG4gICAgICBjb2xvcjogJHt0aGVtZS5wcmltYXJ5fTtcbiAgICAgIG1hcmdpbi1sZWZ0OiAwLjMyNXJlbTtcbiAgICB9XG4gIGAgOiB7fX1cblxuICAkeyh7IGNzcyB9KSA9PiBjc3MgfHwge319XG5gO1xuXG5jb25zdCBMYWJlbCA9IHN0eWxlZC5sYWJlbGBcbiAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUudGV4dFN0cm9uZ307XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDFyZW07XG4gIG1hcmdpbi1ib3R0b206IDAuMzI1cmVtO1xuYDtcblxuaW50ZXJmYWNlIFByb3BzIGV4dGVuZHMgSFRNTEF0dHJpYnV0ZXM8SFRNTERpdkVsZW1lbnQ+IHtcbiAgbGFiZWw/OiBzdHJpbmc7XG4gIGNoaWxkcmVuOiBSZWFjdE5vZGU7XG4gIHJlcXVpcmVkPzogYm9vbGVhbjtcbiAgaHRtbEZvcj86IHN0cmluZztcbiAgY3NzPzogQ1NTVHlwZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmllbGQgZXh0ZW5kcyBQdXJlQ29tcG9uZW50PFByb3BzPiB7XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGxhYmVsLCBjaGlsZHJlbiwgaHRtbEZvciwgLi4ucmVzdCB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPFdyYXBwZXIgey4uLnJlc3R9PlxuICAgICAgICB7bGFiZWwgJiYgKDxMYWJlbCBodG1sRm9yPXtodG1sRm9yfT57bGFiZWx9PC9MYWJlbD4pfVxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L1dyYXBwZXI+XG4gICAgKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgY3NzIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgQ1NTVHlwZSB9IGZyb20gJy4uL3R5cGVzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFtYnVyZ2VyKHNpemU6IHN0cmluZyk6IENTU1R5cGUge1xuICByZXR1cm4gY3NzYFxuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBoZWlnaHQ6ICR7c2l6ZX07XG4gICAgd2lkdGg6ICR7c2l6ZX07XG5cbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgc3BhbiB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjdXJyZW50Q29sb3I7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIGhlaWdodDogMXB4O1xuICAgICAgbGVmdDogY2FsYyg1MCUgLSA4cHgpO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xuICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMTAwbXM7XG4gICAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBiYWNrZ3JvdW5kLWNvbG9yLCBvcGFjaXR5LCB0cmFuc2Zvcm07XG4gICAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XG4gICAgICB3aWR0aDogMTZweDtcblxuICAgICAgJjpudGgtY2hpbGQoMSkge1xuICAgICAgICB0b3A6IGNhbGMoNTAlIC0gNnB4KTtcbiAgICAgIH1cbiAgICAgICY6bnRoLWNoaWxkKDIpIHtcbiAgICAgICAgdG9wOiBjYWxjKDUwJSAtIDFweCk7XG4gICAgICB9XG4gICAgICAmOm50aC1jaGlsZCgzKSB7XG4gICAgICAgIHRvcDogY2FsYyg1MCUgKyA0cHgpO1xuICAgICAgfVxuXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYShibGFjaywgMC4wNSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgJi5hY3RpdmUgc3BhbiB7XG4gICAgICAmOm50aC1jaGlsZCgxKSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg1cHgpIHJvdGF0ZSg0NWRlZyk7XG4gICAgICB9XG4gICAgICAmOm50aC1jaGlsZCgyKSB7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICB9XG4gICAgICAmOm50aC1jaGlsZCgzKSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNXB4KSByb3RhdGUoLTQ1ZGVnKTtcbiAgICAgIH1cbiAgICB9XG4gIGA7XG59XG4iLCJpbXBvcnQgeyBjc3MgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgeyBDU1NUeXBlIH0gZnJvbSAnLi4vdHlwZXMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcnJvdyhjb2xvcjogc3RyaW5nLCBkaXJlY3Rpb24/OiBzdHJpbmcpOiBDU1NUeXBlIHtcbiAgcmV0dXJuIGNzc2BcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm9yZGVyOiAzcHggc29saWQgJHtjb2xvcn07XG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgIGJvcmRlci1yaWdodDogMDtcbiAgICBib3JkZXItdG9wOiAwO1xuICAgIGNvbnRlbnQ6IFwiIFwiO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGhlaWdodDogMC42MjVlbTtcbiAgICBtYXJnaW4tdG9wOiAtMC42MjVlbTtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICB0b3A6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcbiAgICB3aWR0aDogMC42MjVlbTtcbiAgYDtcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuaW50ZXJmYWNlIE1zZ1Byb3BzIHtcbiAgZXJyb3I/OiBib29sZWFuO1xufVxuXG5jb25zdCBNZXNzYWdlID0gc3R5bGVkLnNwYW48TXNnUHJvcHM+YFxuICBmb250LXNpemU6IDAuOHJlbTtcbiAgY29sb3I6ICR7KHsgZXJyb3IsIHRoZW1lIH0pID0+IGVycm9yID8gdGhlbWUuZGFuZ2VyIDogdGhlbWUudGV4dExpZ2h0fTtcbmA7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlbHBNZXNzYWdlKGhlbHA/OiBzdHJpbmcsIGVycm9yPzogc3RyaW5nKSB7XG4gIGlmIChlcnJvcikge1xuICAgIHJldHVybiAoPE1lc3NhZ2UgZXJyb3I+e2Vycm9yfTwvTWVzc2FnZT4pO1xuICB9XG4gIGlmIChoZWxwKSB7XG4gICAgcmV0dXJuICg8TWVzc2FnZT57aGVscH08L01lc3NhZ2U+KTtcbiAgfVxufVxuIiwiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQsIElucHV0SFRNTEF0dHJpYnV0ZXMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkLCB7IGNzcyB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7IHNldFNpemUgfSBmcm9tICcuLi8uLi91dGlscyc7XG5pbXBvcnQgZGlzYWJsZWRDb2xvciBmcm9tICcuLi8uLi91dGlscy9kaXNhYmxlZENvbG9yJztcbmltcG9ydCBIZWxwTWVzc2FnZSBmcm9tICcuL0hlbHBNZXNzYWdlJztcbmltcG9ydCB7IENTU1R5cGUgfSBmcm9tICcuLi8uLi90eXBlcyc7XG5cbmludGVyZmFjZSBXcmFwcGVyUHJvcHMge1xuICBvdXRsaW5lPzogYm9vbGVhbjtcbiAgZXJyb3I/OiBhbnk7XG4gIGNzcz86IENTU1R5cGU7XG59XG5cbmludGVyZmFjZSBJY29uUHJvcHMge1xuICByaWdodD86IGJvb2xlYW47XG59XG5cbmNvbnN0IHJpZ2h0SWNvbiA9IGNzc2BcbiAgcmlnaHQ6IDAuMzc1ZW07XG4gICYgfiBpbnB1dCB7XG4gICAgcGFkZGluZy1yaWdodDogMS41NTVlbSAhaW1wb3J0YW50O1xuICB9XG5gO1xuXG5jb25zdCBsZWZ0SWNvbiA9IGNzc2BcbiAgbGVmdDogMC4zNzVlbTtcbiAgJiB+IGlucHV0IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDEuNTVlbSAhaW1wb3J0YW50O1xuICB9XG5gO1xuXG5jb25zdCBJY29uID0gc3R5bGVkLnNwYW48SWNvblByb3BzPmBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDAuMzc1ZW07XG4gIGJvdHRvbTogMDtcbiAgei1pbmRleDogMTtcbiAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuYm9yZGVyfTtcbiAgJHsoeyByaWdodCB9KSA9PiByaWdodCA/IHJpZ2h0SWNvbiA6IGxlZnRJY29ufVxuXG4gIHN2ZywgaW1nIHtcbiAgICBoZWlnaHQ6IDFlbTtcbiAgICB3aWR0aDogMWVtO1xuICB9XG5gO1xuXG5jb25zdCBXcmFwcGVyID0gc3R5bGVkLnNwYW48V3JhcHBlclByb3BzPmBcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBibG9jaztcblxuICBpbnB1dCB7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICAgIGFwcGVhcmFuY2U6IG5vbmU7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBjb2xvcjogaW5oZXJpdDtcblxuICAgIHBhZGRpbmc6IDAuMzc1ZW0gMC42MjVlbTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgJHsoeyBvdXRsaW5lLCB0aGVtZSwgZXJyb3IgfSkgPT4gb3V0bGluZSA/XG4gICAgICBgYm9yZGVyOiAxcHggc29saWQgJHtlcnJvciA/IHRoZW1lLmRhbmdlciA6IHRoZW1lLmJvcmRlcn07IGJvcmRlci1yYWRpdXM6IDRweDtgIDpcbiAgICAgIGBib3JkZXItYm90dG9tOiAxcHggc29saWQgJHtlcnJvciA/IHRoZW1lLmRhbmdlciA6IHRoZW1lLmJvcmRlcn07IGJvcmRlci1yYWRpdXM6IDA7YFxuICAgIH1cbiAgICAke3NldFNpemUoJ2ZvbnQtc2l6ZScpfVxuXG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYm94LXNoYWRvdztcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAxNTBtcztcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XG5cbiAgICAmOmZvY3VzIHtcbiAgICAgIGJvcmRlci1jb2xvcjogJHsoeyBlcnJvciwgdGhlbWUgfSkgPT4gKGVycm9yID8gdGhlbWUuZGFuZ2VyIDogdGhlbWUucHJpbWFyeSl9O1xuICAgICAgJHsoeyB0aGVtZSwgb3V0bGluZSwgZXJyb3IgfSkgPT4gb3V0bGluZSA/XG4gICAgICAgIGBib3gtc2hhZG93OiAwIDAgMCAwLjFlbSAke2Vycm9yID8gdGhlbWUuZGFuZ2VyIDogdGhlbWUucHJpbWFyeX07YCA6XG4gICAgICAgIGBib3gtc2hhZG93OiAwIDAuMWVtICR7ZXJyb3IgPyB0aGVtZS5kYW5nZXIgOiB0aGVtZS5wcmltYXJ5fTtgXG4gICAgICB9XG4gICAgfVxuXG4gICAgJjpkaXNhYmxlZCwgW2Rpc2FibGVkXSwgJjpyZWFkb25seSB7XG4gICAgICAkeyh7IHRoZW1lIH0pID0+IGRpc2FibGVkQ29sb3IodGhlbWUpfVxuICAgIH1cblxuICAgICY6ZGlzYWJsZWQsIFtkaXNhYmxlZF0ge1xuICAgICAgcmVzaXplOiBub25lO1xuICAgIH1cblxuICAgICY6OnBsYWNlaG9sZGVyIHtcbiAgICAgIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnBsYWNlaG9sZGVyfTtcbiAgICB9XG4gIH1cblxuICAmOmhvdmVyIHtcbiAgICBpbnB1dDpub3QoOmRpc2FibGVkKTpub3QoOmZvY3VzKTpub3QoOmFjdGl2ZSkge1xuICAgICAgYm9yZGVyLWNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmJvcmRlckhvdmVyfTtcbiAgICB9XG4gICAgJHtJY29ufSB7XG4gICAgICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5ib3JkZXJIb3Zlcn07XG4gICAgfVxuICB9XG4gICR7KHsgY3NzIH0pID0+IGNzcyB8fCAnJ31cbmA7XG5cbmludGVyZmFjZSBQcm9wcyBleHRlbmRzIElucHV0SFRNTEF0dHJpYnV0ZXM8SFRNTElucHV0RWxlbWVudD4ge1xuICBwbGFjZWhvbGRlcj86IHN0cmluZztcbiAgLyoqICd0ZXh0JyB8ICdudW1iZXInIHwgJ3Bhc3N3b3JkJyB8ICdlbWFpbCcgfCAndGVsJyB8ICdzZWFyY2gnICovXG4gIHR5cGU6ICd0ZXh0JyB8ICdudW1iZXInIHwgJ3Bhc3N3b3JkJyB8ICdlbWFpbCcgfCAndGVsJyB8ICdzZWFyY2gnO1xuICAvKiog44Ko44Op44O844Gu55m655Sf5pmC44Gu6KGo56S644OG44Kt44K544OIICovXG4gIGVycm9yPzogc3RyaW5nIHwgYW55O1xuICAvKiog5o2V5o2J44OG44Kt44K544OIICovXG4gIGhlbHA/OiBzdHJpbmcgfCBhbnk7XG4gIC8qKiDjg5zjg4Pjgq/jgrnns7vjga7jg4fjgrbjgqTjg7PjgafjgZnjgosgKi9cbiAgb3V0bGluZT86IGJvb2xlYW47XG4gIC8qKiDlt6blgbTjga7jgqLjgqTjgrPjg7MgKi9cbiAgbGVmdEljb24/OiBhbnk7XG4gIC8qKiDlj7PlgbTjga7jgqLjgqTjgrPjg7MgKi9cbiAgcmlnaHRJY29uPzogYW55O1xuICAvKiog44Kr44K544K/44OgQ1NT5a6a576pICovXG4gIGNzcz86IENTU1R5cGU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRleHRJbnB1dCBleHRlbmRzIFB1cmVDb21wb25lbnQ8UHJvcHM+IHtcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICB0eXBlOiAndGV4dCcsXG4gICAgdmFsdWU6ICcnLFxuICAgIG1heExlbmd0aDogMjU1LFxuICAgIG9uQ2hhbmdlOiAoKSA9PiB7fSxcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgY2xhc3NOYW1lLCBvdXRsaW5lLCBlcnJvciwgaGVscCwgbGVmdEljb24sIHJpZ2h0SWNvbiwgc3R5bGUsIGNzcywgLi4ucmVzdFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8V3JhcHBlciBjbGFzc05hbWU9e2NsYXNzTmFtZX0gb3V0bGluZT17b3V0bGluZX0gZXJyb3I9e2Vycm9yfSBzdHlsZT17c3R5bGV9IGNzcz17Y3NzfT5cbiAgICAgICAge2xlZnRJY29uICYmICg8SWNvbj57bGVmdEljb259PC9JY29uPil9XG4gICAgICAgIHtyaWdodEljb24gJiYgKDxJY29uIHJpZ2h0PntyaWdodEljb259PC9JY29uPil9XG4gICAgICAgIDxpbnB1dCB7Li4ucmVzdH0gLz5cbiAgICAgICAge0hlbHBNZXNzYWdlKGhlbHAsIGVycm9yKX1cbiAgICAgIDwvV3JhcHBlcj5cbiAgICApO1xuICB9XG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBUZXh0YXJlYUhUTUxBdHRyaWJ1dGVzIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgYm94U2hhZG93IGZyb20gJy4uLy4uL3V0aWxzL2JveFNoYWRvdyc7XG5pbXBvcnQgc2V0U2l6ZSBmcm9tICcuLi8uLi91dGlscy9zZXRTaXplJztcbmltcG9ydCBkaXNhYmxlZENvbG9yIGZyb20gJy4uLy4uL3V0aWxzL2Rpc2FibGVkQ29sb3InO1xuaW1wb3J0IEhlbHBNZXNzYWdlIGZyb20gJy4vSGVscE1lc3NhZ2UnO1xuaW1wb3J0IHsgQ1NTVHlwZSB9IGZyb20gJy4uLy4uL3R5cGVzJztcblxuaW50ZXJmYWNlIFdyYXBwZXJQcm9wcyB7XG4gIGVycm9yPzogc3RyaW5nO1xuICBjc3M/OiBDU1NUeXBlO1xufVxuXG5jb25zdCBXcmFwcGVyID0gc3R5bGVkLnNwYW48V3JhcHBlclByb3BzPmBcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICB0ZXh0YXJlYSB7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBwYWRkaW5nOiAwLjYyNWVtO1xuICAgIHJlc2l6ZTogdmVydGljYWw7XG4gICAgYXBwZWFyYW5jZTogbm9uZTtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgY29sb3I6IGluaGVyaXQ7XG5cbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgJHsoeyB0aGVtZSwgZXJyb3IgfSkgPT4gZXJyb3IgPyB0aGVtZS5kYW5nZXIgOiB0aGVtZS5ib3JkZXJ9O1xuXG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYm94LXNoYWRvdztcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjE1cztcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XG5cbiAgICAke3NldFNpemUoJ2ZvbnQtc2l6ZScpfVxuXG4gICAgJjpmb2N1cyB7XG4gICAgICBib3JkZXItY29sb3I6ICR7KHsgdGhlbWUsIGVycm9yIH0pID0+IGVycm9yID8gdGhlbWUuZGFuZ2VyIDogdGhlbWUucHJpbWFyeX07XG4gICAgICAkeyh7IHRoZW1lLCBlcnJvciB9KSA9PiBib3hTaGFkb3coJzAuMWVtJywgZXJyb3IgPyB0aGVtZS5kYW5nZXIgOiB0aGVtZS5wcmltYXJ5KX1cbiAgICB9XG5cbiAgICAmOmRpc2FibGVkLCBbZGlzYWJsZWRdLCAmOnJlYWRvbmx5IHtcbiAgICAgICR7KHsgdGhlbWUgfSkgPT4gZGlzYWJsZWRDb2xvcih0aGVtZSl9XG4gICAgfVxuXG4gICAgJjpkaXNhYmxlZCwgW2Rpc2FibGVkXSB7XG4gICAgICByZXNpemU6IG5vbmU7XG4gICAgfVxuXG4gICAgJjo6cGxhY2Vob2xkZXIge1xuICAgICAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUucGxhY2Vob2xkZXJ9O1xuICAgIH1cbiAgfVxuXG4gICY6aG92ZXIge1xuICAgIHRleHRhcmVhOm5vdCg6ZGlzYWJsZWQpOm5vdCg6Zm9jdXMpIHtcbiAgICAgIGJvcmRlci1jb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5ib3JkZXJIb3Zlcn07XG4gICAgfVxuICB9XG4gICR7KHsgY3NzIH0pID0+IGNzcyB8fCB7fX1cbmA7XG5cbmludGVyZmFjZSBQcm9wcyBleHRlbmRzIFRleHRhcmVhSFRNTEF0dHJpYnV0ZXM8SFRNTFRleHRBcmVhRWxlbWVudD4ge1xuICAvKiog44Ko44Op44O844Gu55m655Sf5pmC44Gu6KGo56S644OG44Kt44K544OIICovXG4gIGVycm9yPzogc3RyaW5nIHwgYW55O1xuICAvKiog5o2V5o2J44OG44Kt44K544OIICovXG4gIGhlbHA/OiBzdHJpbmcgfCBhbnk7XG4gIC8qKiDjgqvjgrnjgr/jg6BDU1PlrprnvqkgKi9cbiAgY3NzPzogQ1NTVHlwZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGV4dGFyZWEgZXh0ZW5kcyBDb21wb25lbnQ8UHJvcHM+IHtcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICB2YWx1ZTogJycsXG4gICAgY29sOiAyLFxuICAgIHJvdzogNSxcbiAgICBvbkNoYW5nZTogKCkgPT4ge30sXG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY2xhc3NOYW1lLCBoZWxwLCBlcnJvciwgc3R5bGUsIGNzcywgLi4ucmVzdCB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPFdyYXBwZXIgY2xhc3NOYW1lPXtjbGFzc05hbWV9IGVycm9yPXtlcnJvcn0gc3R5bGU9e3N0eWxlfSBjc3M9e2Nzc30+XG4gICAgICAgIDx0ZXh0YXJlYSB7Li4ucmVzdH0gLz5cbiAgICAgICAge0hlbHBNZXNzYWdlKGhlbHAsIGVycm9yKX1cbiAgICAgIDwvV3JhcHBlcj5cbiAgICApO1xuICB9XG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBJbnB1dEhUTUxBdHRyaWJ1dGVzIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHRyYW5zcGFyZW50aXplIGZyb20gJ3BvbGlzaGVkL2xpYi9jb2xvci90cmFuc3BhcmVudGl6ZSc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuY29uc3QgV3JhcHBlciA9IHN0eWxlZC5zcGFuYFxuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogYXV0bztcblxuICBsYWJlbCB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHBhZGRpbmctbGVmdDogMC42MjVlbTtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbGluZS1oZWlnaHQ6IDEuMjU7XG4gICAgbWFyZ2luLXJpZ2h0OiAwLjYyNXJlbTtcblxuICAgICY6YmVmb3JlLCAmOmFmdGVyIHtcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgfVxuXG4gICAgJjphZnRlciB7XG4gICAgICB0b3A6IDAuMjVlbTtcbiAgICAgIGxlZnQ6IDAuMmVtO1xuICAgICAgd2lkdGg6IDAuODVlbTtcbiAgICAgIGhlaWdodDogMC41ZW07XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICAgICAgYm9yZGVyOiAwLjFlbSBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgIGJvcmRlci10b3Atc3R5bGU6IG5vbmU7XG4gICAgICBib3JkZXItcmlnaHQtc3R5bGU6IG5vbmU7XG4gICAgfVxuXG4gICAgJjpiZWZvcmUge1xuICAgICAgd2lkdGg6IDEuMjVlbTtcbiAgICAgIGhlaWdodDogMS4yNWVtO1xuICAgICAgbGVmdDowO1xuICAgICAgdG9wOiAwO1xuICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmJvcmRlcn07XG4gICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICAgIHdpbGwtY2hhbmdlOiBiYWNrZ3JvdW5kO1xuICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAxNTBtcyBlYXNlLW91dDtcbiAgICB9XG4gIH1cblxuICBpbnB1dCB7XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuXG4gICAgJjpjaGVja2VkICsgbGFiZWwge1xuICAgICAgJjpiZWZvcmV7XG4gICAgICAgIGJvcmRlci1jb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5wcmltYXJ5fTtcbiAgICAgICAgYmFja2dyb3VuZDogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5wcmltYXJ5fTtcbiAgICAgIH1cbiAgICAgICY6YWZ0ZXIge1xuICAgICAgICBib3JkZXItY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUud2hpdGV9O1xuICAgICAgfVxuICAgIH1cblxuICAgICY6aW5kZXRlcm1pbmF0ZSArIGxhYmVsIHtcbiAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnByaW1hcnl9O1xuICAgICAgICBiYWNrZ3JvdW5kOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnByaW1hcnl9O1xuICAgICAgfVxuICAgICAgJjphZnRlciB7XG4gICAgICAgIGJvcmRlci1jb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS53aGl0ZX07XG4gICAgICAgIGJvcmRlci1sZWZ0LXN0eWxlOiBub25lO1xuICAgICAgfVxuICAgIH1cblxuICAgICY6ZGlzYWJsZWQge1xuICAgICAgKyBsYWJlbCB7XG4gICAgICAgIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRyYW5zcGFyZW50aXplKDAuMjUsIHRoZW1lLnRleHREYXJrKX07XG4gICAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAkeyh7IHRoZW1lIH0pID0+IHRyYW5zcGFyZW50aXplKDAuNTUsIHRoZW1lLmJvcmRlcil9O1xuICAgICAgICAgIGJvcmRlci1jb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5ib3JkZXJ9O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAmOmNoZWNrZWQgKyBsYWJlbDphZnRlciB7XG4gICAgICAgIGJvcmRlci1jb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0cmFuc3BhcmVudGl6ZSgwLjE1LCB0aGVtZS50ZXh0RGFyayl9O1xuICAgICAgfVxuICAgIH1cbiAgfVxuYDtcblxuaW50ZXJmYWNlIFByb3BzIGV4dGVuZHMgSW5wdXRIVE1MQXR0cmlidXRlczxIVE1MSW5wdXRFbGVtZW50PiB7XG4gIGNoaWxkcmVuPzogYW55O1xuICBjaGVja2VkPzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hlY2tib3ggZXh0ZW5kcyBDb21wb25lbnQ8UHJvcHM+IHtcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBuYW1lOiBudWxsLFxuICAgIGNoaWxkcmVuOiBudWxsLFxuICAgIGNoZWNrZWQ6IGZhbHNlLFxuICAgIG9uQ2hhbmdlOiAoKSA9PiB7fSxcbiAgfTtcblxuICBpZCA9IGBjaGVja2JveF8ke3RoaXMucHJvcHMubmFtZX1gO1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNsYXNzTmFtZSwgY2hpbGRyZW4sIC4uLnJlc3QgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxXcmFwcGVyIGNsYXNzTmFtZT17Y2xhc3NOYW1lfSA+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBpZD17dGhpcy5pZH0gey4uLnJlc3R9IC8+XG4gICAgICAgIDxsYWJlbCBodG1sRm9yPXt0aGlzLmlkfT57Y2hpbGRyZW59PC9sYWJlbD5cbiAgICAgIDwvV3JhcHBlcj5cbiAgICApO1xuICB9XG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBTZWxlY3RIVE1MQXR0cmlidXRlcyB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCwgeyBjc3MgfSBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCBhcnJvdyBmcm9tIFwiLi4vLi4vdXRpbHMvYXJyb3dcIjtcbmltcG9ydCBzZXRTaXplIGZyb20gXCIuLi8uLi91dGlscy9zZXRTaXplXCI7XG5pbXBvcnQgSGVscE1lc3NhZ2UgZnJvbSBcIi4vSGVscE1lc3NhZ2VcIjtcbmltcG9ydCB7IFNpemVUeXBlLCBDU1NUeXBlIH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgZGlzYWJsZWRDb2xvciBmcm9tIFwiLi4vLi4vdXRpbHMvZGlzYWJsZWRDb2xvclwiO1xuXG5pbnRlcmZhY2UgV3JhcHBlclByb3BzIHtcbiAgc2l6ZT86IFNpemVUeXBlO1xuICBvdXRsaW5lPzogYm9vbGVhbjtcbiAgZXJyb3I/OiBzdHJpbmc7XG4gIGRpc2FibGVkPzogYm9vbGVhbjtcbiAgY3NzPzogQ1NTVHlwZTtcbn1cblxuY29uc3QgSW5wdXRXcmFwcGVyID0gc3R5bGVkLnNwYW48V3JhcHBlclByb3BzPmBcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBibG9jaztcblxuICBzZWxlY3Qge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBhcHBlYXJhbmNlOiBub25lO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBwYWRkaW5nOiAwLjM3NWVtIDAuNjI1ZW07XG4gICAgcGFkZGluZy1yaWdodDogMS4zNWVtO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgY29sb3I6IGluaGVyaXQ7XG5cbiAgICAkeyh7IHNpemUgfSkgPT4gc2V0U2l6ZShcImZvbnQtc2l6ZVwiLCBzaXplKX1cblxuICAgIGJvcmRlcjogbm9uZTtcbiAgICAkeyh7IG91dGxpbmUsIHRoZW1lLCBlcnJvciB9KSA9PlxuICAgICAgb3V0bGluZSA/IGNzc2BcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJHtlcnJvciA/IHRoZW1lLmRhbmdlciA6IHRoZW1lLmJvcmRlcn07XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgIGAgOiBjc3NgXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAke2Vycm9yID8gdGhlbWUuZGFuZ2VyIDogdGhlbWUuYm9yZGVyfTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICAgIGB9XG5cbiAgICB3aWxsLWNoYW5nZTogYm94LXNoYWRvdztcbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBib3gtc2hhZG93O1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDE1MG1zO1xuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcblxuICAgICY6Zm9jdXMge1xuICAgICAgYm9yZGVyLWNvbG9yOiAkeyh7IGVycm9yLCB0aGVtZSB9KSA9PiBlcnJvciA/IHRoZW1lLmRhbmdlciA6IHRoZW1lLnByaW1hcnl9O1xuICAgICAgYm94LXNoYWRvdzogJHtcbiAgICAgICAgKHsgdGhlbWUsIG91dGxpbmUsIGVycm9yIH0pID0+IG91dGxpbmUgP1xuICAgICAgICAgIChlcnJvciA/IHRoZW1lLmRhbmdlciA6IHRoZW1lLnByaW1hcnkpIDpcbiAgICAgICAgICAoZXJyb3IgPyB0aGVtZS5kYW5nZXIgOiB0aGVtZS5wcmltYXJ5KVxuICAgICAgICB9O1xuICAgIH1cblxuICAgICY6Oi1tcy1leHBhbmQge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gICAgJjotbW96LWZvY3VzcmluZyB7XG4gICAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICB0ZXh0LXNoYWRvdzogMCAwIDAgIzAwMDtcbiAgICB9XG5cbiAgICAmOmRpc2FibGVkLCBbZGlzYWJsZWRdLCAmOnJlYWRvbmx5IHtcbiAgICAgICR7KHsgdGhlbWUgfSkgPT4gZGlzYWJsZWRDb2xvcih0aGVtZSl9XG4gICAgfVxuXG4gICAgJjppbnZhbGlkIHtcbiAgICAgIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnBsYWNlaG9sZGVyfTtcbiAgICB9XG4gIH1cblxuICAmOjphZnRlciB7XG4gICAgJHsoeyB0aGVtZSB9KSA9PiBhcnJvdyh0aGVtZS5ib3JkZXIpfVxuICAgIHRvcDogMS4yNWVtO1xuICAgIHJpZ2h0OiAwLjYyNWVtO1xuICAgIHotaW5kZXg6IDQ7XG4gIH1cblxuICAkeyh7IHRoZW1lLCBkaXNhYmxlZCB9KSA9PlxuICAgIGRpc2FibGVkXG4gICAgICA/IHt9XG4gICAgICA6IGNzc2BcbiAgICAmOmhvdmVyIHtcbiAgICAgIHNlbGVjdDpub3QoOmRpc2FibGVkKTpub3QoOmZvY3VzKSB7XG4gICAgICAgIGJvcmRlci1jb2xvcjogJHt0aGVtZS5ib3JkZXJIb3Zlcn07XG4gICAgICB9XG5cbiAgICAgICY6OmFmdGVyIHtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAke3RoZW1lLmJvcmRlckhvdmVyfTtcbiAgICAgIH1cbiAgICB9XG4gIGB9XG5cbiAgJHsoeyBjc3MgfSkgPT4gY3NzIHx8IHt9fVxuYDtcblxudHlwZSBJdGVtVHlwZSA9XG4gIHwgeyBpZDogc3RyaW5nIHwgbnVtYmVyOyBuYW1lOiBzdHJpbmc7IFtrZXk6IHN0cmluZ106IGFueSB9XG4gIHwgc3RyaW5nO1xuXG5pbnRlcmZhY2UgUHJvcHMgZXh0ZW5kcyBTZWxlY3RIVE1MQXR0cmlidXRlczxIVE1MU2VsZWN0RWxlbWVudD4ge1xuICBwbGFjZWhvbGRlcj86IHN0cmluZztcbiAgb3B0aW9uczogSXRlbVR5cGVbXTtcbiAgb3V0bGluZT86IGJvb2xlYW47XG4gIGVycm9yPzogc3RyaW5nIHwgYW55O1xuICBoZWxwPzogc3RyaW5nIHwgYW55O1xuICBpbnB1dFNpemU/OiBTaXplVHlwZTtcbiAgcmVuZGVyPzogKGxhYmVsOiBzdHJpbmcpID0+IGFueTtcbiAgZGlzYWJsZWQ/OiBib29sZWFuO1xuICBjc3M/OiBDU1NUeXBlO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWxlY3QgZXh0ZW5kcyBDb21wb25lbnQ8UHJvcHM+IHtcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBuYW1lOiBudWxsLFxuICAgIHZhbHVlOiAnJyxcbiAgICBvbkNoYW5nZTogKCkgPT4ge30sXG4gICAgb3B0aW9uczogW10sXG4gIH07XG5cbiAgcmVuZGVyTGFiZWwgPSAobGFiZWw6IHN0cmluZykgPT4ge1xuICAgIGlmICh0aGlzLnByb3BzLnJlbmRlcikge1xuICAgICAgcmV0dXJuIHRoaXMucHJvcHMucmVuZGVyKGxhYmVsKTtcbiAgICB9XG4gICAgcmV0dXJuIGxhYmVsO1xuICB9XG5cbiAgcmVuZGVySXRlbSA9ICgpID0+IHtcbiAgICByZXR1cm4gdGhpcy5wcm9wcy5vcHRpb25zLm1hcCgoaXRlbSwgaWR4KSA9PiB7XG4gICAgICBpZiAodHlwZW9mIGl0ZW0gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPG9wdGlvbiBrZXk9e2l0ZW19IHZhbHVlPXtpdGVtfT5cbiAgICAgICAgICAgIHt0aGlzLnJlbmRlckxhYmVsKGl0ZW0pfVxuICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgY29uc3QgeyBpZCwgbmFtZSB9ID0gaXRlbTtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxvcHRpb24ga2V5PXtgJHtpZH1fJHtpZHh9YH0gdmFsdWU9e2lkfT5cbiAgICAgICAgICB7dGhpcy5yZW5kZXJMYWJlbChuYW1lKX1cbiAgICAgICAgPC9vcHRpb24+XG4gICAgICApO1xuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGNzcyxcbiAgICAgIGNsYXNzTmFtZSxcbiAgICAgIGlucHV0U2l6ZSxcbiAgICAgIG91dGxpbmUsXG4gICAgICBvcHRpb25zLFxuICAgICAgZXJyb3IsXG4gICAgICBoZWxwLFxuICAgICAgcGxhY2Vob2xkZXIsXG4gICAgICBkaXNhYmxlZCxcbiAgICAgIC4uLnJlc3RcbiAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgIHJldHVybiAoXG4gICAgICA8SW5wdXRXcmFwcGVyXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxuICAgICAgICBzaXplPXtpbnB1dFNpemV9XG4gICAgICAgIG91dGxpbmU9e291dGxpbmV9XG4gICAgICAgIGVycm9yPXtlcnJvcn1cbiAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgICBjc3M9e2Nzc31cbiAgICAgID5cbiAgICAgICAgPHNlbGVjdCB7Li4ucmVzdH0gZGlzYWJsZWQ9e2Rpc2FibGVkfSByZXF1aXJlZD17Qm9vbGVhbihwbGFjZWhvbGRlcil9PlxuICAgICAgICAgIHtwbGFjZWhvbGRlciAmJiAoXG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+XG4gICAgICAgICAgICAgIHtwbGFjZWhvbGRlcn1cbiAgICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICAgICl9XG4gICAgICAgICAge3RoaXMucmVuZGVySXRlbSgpfVxuICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAge0hlbHBNZXNzYWdlKGhlbHAsIGVycm9yKX1cbiAgICAgIDwvSW5wdXRXcmFwcGVyPlxuICAgICk7XG4gIH1cbn1cbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIElucHV0SFRNTEF0dHJpYnV0ZXMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdHJhbnNwYXJlbnRpemUgZnJvbSAncG9saXNoZWQvbGliL2NvbG9yL3RyYW5zcGFyZW50aXplJztcbmltcG9ydCBzdHlsZWQsIHsgY3NzIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgQ29sb3JUeXBlIH0gZnJvbSAnLi4vLi4vdHlwZXMnO1xuXG5jb25zdCBSYWRpb0xhYmVsID0gY3NzYFxuICBsYWJlbCB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHBhZGRpbmctbGVmdDogMS42MjVlbTtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbGluZS1oZWlnaHQ6IDEuMjU7XG4gICAgbWFyZ2luLXJpZ2h0OiAwLjYyNXJlbTtcblxuICAgICY6YmVmb3JlLCAmOmFmdGVyIHtcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgfVxuXG4gICAgJjphZnRlciB7XG4gICAgICB0b3A6IDAuMzc1ZW07XG4gICAgICBsZWZ0OiAwLjM3NWVtO1xuICAgICAgd2lkdGg6IDAuNWVtO1xuICAgICAgaGVpZ2h0OiAwLjVlbTtcbiAgICAgIGJhY2tncm91bmQ6ICR7KHsgdGhlbWUgfTogYW55KSA9PiB0aGVtZS5wcmltYXJ5fTtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG5cbiAgICAgIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm07XG4gICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMTUwbXMgZWFzZS1vdXQ7XG4gICAgfVxuXG4gICAgJjpiZWZvcmUge1xuICAgICAgd2lkdGg6IDEuMjVlbTtcbiAgICAgIGhlaWdodDogMS4yNWVtO1xuICAgICAgbGVmdDowO1xuICAgICAgdG9wOiAwO1xuICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICBib3JkZXI6IDAuMWVtIHNvbGlkICR7KHsgdGhlbWUgfTogYW55KSA9PiB0aGVtZS5ib3JkZXJ9O1xuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuXG4gICAgICB3aWxsLWNoYW5nZTogYmFja2dyb3VuZDtcbiAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgMTUwbXMgZWFzZS1vdXQ7XG4gICAgfVxuICB9XG5cbiAgaW5wdXQge1xuICAgIGRpc3BsYXk6IG5vbmU7XG5cbiAgICAmOmNoZWNrZWQge1xuICAgICAgKyBsYWJlbDpiZWZvcmUge1xuICAgICAgICBib3JkZXItY29sb3I6ICR7KHsgdGhlbWUgfTogYW55KSA9PiB0aGVtZS5wcmltYXJ5fTtcbiAgICAgIH1cbiAgICAgICsgbGFiZWw6YWZ0ZXJ7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgJjpkaXNhYmxlZCB7XG4gICAgICArIGxhYmVsIHtcbiAgICAgICAgY29sb3I6ICR7KHsgdGhlbWUgfTogYW55KSA9PiB0cmFuc3BhcmVudGl6ZSgwLjI1LCB0aGVtZS50ZXh0RGFyayl9O1xuICAgICAgICAmOmJlZm9yZSB7XG4gICAgICAgICAgYmFja2dyb3VuZDogJHsoeyB0aGVtZSB9OiBhbnkpID0+IHRyYW5zcGFyZW50aXplKDAuNTUsIHRoZW1lLmJvcmRlcil9O1xuICAgICAgICAgIGJvcmRlci1jb2xvcjogJHsoeyB0aGVtZSB9OiBhbnkpID0+IHRoZW1lLmJvcmRlcn07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgICY6Y2hlY2tlZCArIGxhYmVsOmFmdGVyIHtcbiAgICAgICAgYmFja2dyb3VuZDogJHsoeyB0aGVtZSB9OiBhbnkpID0+IHRyYW5zcGFyZW50aXplKDAuMTUsIHRoZW1lLnRleHREYXJrKX07XG4gICAgICB9XG4gICAgfVxuICB9XG5gO1xuXG5jb25zdCBCdXR0b25MYWJlbCA9IGNzc2BcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG5cbiAgbGFiZWwge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBwYWRkaW5nOiAwLjM3NWVtIDAuNzVlbTtcbiAgICBoZWlnaHQ6IDIuMjVlbTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAkeyh7IHRoZW1lIH06IGFueSkgPT4gdGhlbWUuYm9yZGVyfTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIGJvcmRlci1jb2xvcjogJHsoeyB0aGVtZSB9OiBhbnkpID0+IHRoZW1lLmJvcmRlckhvdmVyfTtcbiAgICB9XG4gIH1cblxuICBpbnB1dCB7XG4gICAgZGlzcGxheTogbm9uZTtcblxuICAgICY6Y2hlY2tlZCArIGxhYmVsIHtcbiAgICAgIHotaW5kZXg6IDE7XG4gICAgICBib3JkZXItY29sb3I6ICR7KHsgdGhlbWUgfTogYW55KSA9PiB0aGVtZS5wcmltYXJ5fTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7KHsgdGhlbWUgfTogYW55KSA9PiB0cmFuc3BhcmVudGl6ZSgwLjU1LCB0aGVtZS5wcmltYXJ5KX07XG4gICAgfVxuXG4gICAgJjpkaXNhYmxlZCB7XG4gICAgICArIGxhYmVsIHtcbiAgICAgICAgY3Vyc29yOiBkZWZhdWx0O1xuICAgICAgICBjb2xvcjogJHsoeyB0aGVtZSB9OiBhbnkpID0+IHRyYW5zcGFyZW50aXplKDAuMjUsIHRoZW1lLnRleHREYXJrKX07XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7KHsgdGhlbWUgfTogYW55KSA9PiB0cmFuc3BhcmVudGl6ZSgwLjU1LCB0aGVtZS5ib3JkZXIpfTtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkeyh7IHRoZW1lIH06IGFueSkgPT4gdGhlbWUuYm9yZGVyfTtcbiAgICAgIH1cblxuICAgICAgJjpjaGVja2VkICsgbGFiZWwge1xuICAgICAgICBib3JkZXItY29sb3I6ICR7KHsgdGhlbWUgfTogYW55KSA9PiB0aGVtZS50ZXh0RGFya307XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7KHsgdGhlbWUgfTogYW55KSA9PiB0cmFuc3BhcmVudGl6ZSgwLjY1LCB0aGVtZS50ZXh0RGFyayl9O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gICYgKyAmIHtcbiAgICBtYXJnaW4tbGVmdDogLTFweDtcbiAgfVxuXG4gICY6Zmlyc3QtY2hpbGQgbGFiZWwge1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDRweDtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA0cHg7XG4gIH1cblxuICAmOmxhc3QtY2hpbGQgbGFiZWwge1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA0cHg7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDRweDtcbiAgfVxuYDtcblxuXG5jb25zdCBXcmFwcGVyID0gc3R5bGVkLnNwYW48eyBidXR0b246IGJvb2xlYW4sIGNvbG9yPzogQ29sb3JUeXBlIH0+YFxuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogYXV0bztcblxuICAkeyh7IGJ1dHRvbiB9KSA9PiBidXR0b24gPyBCdXR0b25MYWJlbCA6IFJhZGlvTGFiZWx9XG5gO1xuXG5pbnRlcmZhY2UgUHJvcHMgZXh0ZW5kcyBJbnB1dEhUTUxBdHRyaWJ1dGVzPEhUTUxJbnB1dEVsZW1lbnQ+IHtcbiAgdmFsdWU6IHN0cmluZyB8IG51bWJlcjtcbiAgY2hpbGRyZW4/OiBhbnk7XG4gIGNoZWNrZWQ/OiBib29sZWFuO1xuICBidXR0b24/OiBib29sZWFuO1xuICBjb2xvcj86IENvbG9yVHlwZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmFkaW8gZXh0ZW5kcyBDb21wb25lbnQ8UHJvcHM+IHtcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBuYW1lOiBudWxsLFxuICAgIGNoaWxkcmVuOiBudWxsLFxuICAgIGNoZWNrZWQ6IGZhbHNlLFxuICAgIGJ1dHRvbjogZmFsc2UsXG4gICAgb25DaGFuZ2U6ICgpID0+IHt9LFxuICB9O1xuXG4gIGlkID0gYHJhZGlvXyR7dGhpcy5wcm9wcy5uYW1lfToke3RoaXMucHJvcHMudmFsdWV9YDtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjbGFzc05hbWUsIGNoaWxkcmVuLCBidXR0b24sIGNvbG9yLCBzdHlsZSwgLi4ucmVzdCB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPFdyYXBwZXIgY2xhc3NOYW1lPXtjbGFzc05hbWV9IGJ1dHRvbj17YnV0dG9uIX0gY29sb3I9e2NvbG9yfSBzdHlsZT17c3R5bGV9PlxuICAgICAgICA8aW5wdXQgaWQ9e3RoaXMuaWR9IHR5cGU9XCJyYWRpb1wiIHsuLi5yZXN0fSAvPlxuICAgICAgICA8bGFiZWwgaHRtbEZvcj17dGhpcy5pZH0+e2NoaWxkcmVufTwvbGFiZWw+XG4gICAgICA8L1dyYXBwZXI+XG4gICAgKTtcbiAgfVxufVxuIiwiLyogdHNsaW50OmRpc2FibGUgbWF4LWxpbmUtbGVuZ3RoICovXG5pbXBvcnQgUmVhY3QsIHsgU1ZHQXR0cmlidXRlcyB9IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwcm92ZWQocHJvcHM6IFNWR0F0dHJpYnV0ZXM8U1ZHU1ZHRWxlbWVudD4pIHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgIHdpZHRoPVwiMzBcIlxuICAgICAgaGVpZ2h0PVwiMzBcIlxuICAgICAgdmlld0JveD1cIjAgMCAzMCAzMFwiXG4gICAgICB7Li4ucHJvcHN9XG4gICAgPlxuICAgICAgPGcgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC04MCAtMjE1KVwiPlxuICAgICAgICA8ZyB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMTcgMzkpXCI+XG4gICAgICAgICAgPGcgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDYzIDE3NilcIiBmaWxsPVwibm9uZVwiPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgZD1cIk0gMTUgMjkgQyAxMS4yNjA0NzAzOTAzMTk4MiAyOSA3Ljc0NDc2MDAzNjQ2ODUwNiAyNy41NDM3NTA3NjI5Mzk0NSA1LjEwMDUxMDEyMDM5MTg0NiAyNC44OTk0OTAzNTY0NDUzMSBDIDIuNDU2MjQ5OTUyMzE2Mjg0IDIyLjI1NTIzOTQ4NjY5NDM0IDEgMTguNzM5NTMwNTYzMzU0NDkgMSAxNSBDIDEgMTEuMjYwNDcwMzkwMzE5ODIgMi40NTYyNDk5NTIzMTYyODQgNy43NDQ3NjAwMzY0Njg1MDYgNS4xMDA1MTAxMjAzOTE4NDYgNS4xMDA1MTAxMjAzOTE4NDYgQyA3Ljc0NDc2MDAzNjQ2ODUwNiAyLjQ1NjI0OTk1MjMxNjI4NCAxMS4yNjA0NzAzOTAzMTk4MiAxIDE1IDEgQyAxOC43Mzk1MzA1NjMzNTQ0OSAxIDIyLjI1NTIzOTQ4NjY5NDM0IDIuNDU2MjQ5OTUyMzE2Mjg0IDI0Ljg5OTQ5MDM1NjQ0NTMxIDUuMTAwNTEwMTIwMzkxODQ2IEMgMjcuNTQzNzUwNzYyOTM5NDUgNy43NDQ3NjAwMzY0Njg1MDYgMjkgMTEuMjYwNDcwMzkwMzE5ODIgMjkgMTUgQyAyOSAxOC43Mzk1MzA1NjMzNTQ0OSAyNy41NDM3NTA3NjI5Mzk0NSAyMi4yNTUyMzk0ODY2OTQzNCAyNC44OTk0OTAzNTY0NDUzMSAyNC44OTk0OTAzNTY0NDUzMSBDIDIyLjI1NTIzOTQ4NjY5NDM0IDI3LjU0Mzc1MDc2MjkzOTQ1IDE4LjczOTUzMDU2MzM1NDQ5IDI5IDE1IDI5IFpcIlxuICAgICAgICAgICAgICBzdHJva2U9XCJub25lXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICBkPVwiTSAxNSAyIEMgMTEuNTI3NTcwNzI0NDg3MyAyIDguMjYyOTkwOTUxNTM4MDg2IDMuMzUyMjM5NjA4NzY0NjQ4IDUuODA3NjA5NTU4MTA1NDY5IDUuODA3NjA5NTU4MTA1NDY5IEMgMy4zNTIyMzk2MDg3NjQ2NDggOC4yNjI5OTA5NTE1MzgwODYgMiAxMS41Mjc1NzA3MjQ0ODczIDIgMTUgQyAyIDE4LjQ3MjQzMTE4Mjg2MTMzIDMuMzUyMjM5NjA4NzY0NjQ4IDIxLjczNzAxMDk1NTgxMDU1IDUuODA3NjA5NTU4MTA1NDY5IDI0LjE5MjM5MDQ0MTg5NDUzIEMgOC4yNjI5OTA5NTE1MzgwODYgMjYuNjQ3NzYwMzkxMjM1MzUgMTEuNTI3NTcwNzI0NDg3MyAyOCAxNSAyOCBDIDE4LjQ3MjQzMTE4Mjg2MTMzIDI4IDIxLjczNzAxMDk1NTgxMDU1IDI2LjY0Nzc2MDM5MTIzNTM1IDI0LjE5MjM5MDQ0MTg5NDUzIDI0LjE5MjM5MDQ0MTg5NDUzIEMgMjYuNjQ3NzYwMzkxMjM1MzUgMjEuNzM3MDEwOTU1ODEwNTUgMjggMTguNDcyNDMxMTgyODYxMzMgMjggMTUgQyAyOCAxMS41Mjc1NzA3MjQ0ODczIDI2LjY0Nzc2MDM5MTIzNTM1IDguMjYyOTkwOTUxNTM4MDg2IDI0LjE5MjM5MDQ0MTg5NDUzIDUuODA3NjA5NTU4MTA1NDY5IEMgMjEuNzM3MDEwOTU1ODEwNTUgMy4zNTIyMzk2MDg3NjQ2NDggMTguNDcyNDMxMTgyODYxMzMgMiAxNSAyIE0gMTUgMCBDIDIzLjI4NDI2OTMzMjg4NTc0IDAgMzAgNi43MTU3MzA2NjcxMTQyNTggMzAgMTUgQyAzMCAyMy4yODQyNjkzMzI4ODU3NCAyMy4yODQyNjkzMzI4ODU3NCAzMCAxNSAzMCBDIDYuNzE1NzMwNjY3MTE0MjU4IDMwIDAgMjMuMjg0MjY5MzMyODg1NzQgMCAxNSBDIDAgNi43MTU3MzA2NjcxMTQyNTggNi43MTU3MzA2NjcxMTQyNTggMCAxNSAwIFpcIlxuICAgICAgICAgICAgICBzdHJva2U9XCJub25lXCJcbiAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZz5cbiAgICAgICAgPC9nPlxuICAgICAgICA8cGF0aFxuICAgICAgICAgIGQ9XCJNOC45MjUsMTUuODcxLDUuMDQ3LDExLjg4NiwzLjQxLDEzLjQxLDksMTksMjAuNTYyLDcuNDY3bC0xLjctMS41OTVaXCJcbiAgICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoODIuNTkgMjE3LjU5NSlcIlxuICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAvPlxuICAgICAgPC9nPlxuICAgIDwvc3ZnPlxuICApO1xufVxuIiwiLyogdHNsaW50OmRpc2FibGUgbWF4LWxpbmUtbGVuZ3RoICovXG5pbXBvcnQgUmVhY3QsIHsgU1ZHQXR0cmlidXRlcyB9IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2hldnJvbkxlZnRSb3VuZChwcm9wczogU1ZHQXR0cmlidXRlczxTVkdTVkdFbGVtZW50Pikge1xuICByZXR1cm4gKFxuICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMzBcIiBoZWlnaHQ9XCIzMFwiIHZpZXdCb3g9XCIwIDAgMzAgMzBcIiB7Li4ucHJvcHN9PlxuICAgICAgPGcgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC0zNiAtMzYpXCI+XG4gICAgICAgIDxnIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgzNiAzNilcIiBmaWxsPVwibm9uZVwiPlxuICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICBkPVwiTSAxNSAyOSBDIDExLjI2MDQ3MDM5MDMxOTgyIDI5IDcuNzQ0NzYwMDM2NDY4NTA2IDI3LjU0Mzc1MDc2MjkzOTQ1IDUuMTAwNTEwMTIwMzkxODQ2IDI0Ljg5OTQ5MDM1NjQ0NTMxIEMgMi40NTYyNDk5NTIzMTYyODQgMjIuMjU1MjM5NDg2Njk0MzQgMSAxOC43Mzk1MzA1NjMzNTQ0OSAxIDE1IEMgMSAxMS4yNjA0NzAzOTAzMTk4MiAyLjQ1NjI0OTk1MjMxNjI4NCA3Ljc0NDc2MDAzNjQ2ODUwNiA1LjEwMDUxMDEyMDM5MTg0NiA1LjEwMDUxMDEyMDM5MTg0NiBDIDcuNzQ0NzYwMDM2NDY4NTA2IDIuNDU2MjQ5OTUyMzE2Mjg0IDExLjI2MDQ3MDM5MDMxOTgyIDEgMTUgMSBDIDE4LjczOTUzMDU2MzM1NDQ5IDEgMjIuMjU1MjM5NDg2Njk0MzQgMi40NTYyNDk5NTIzMTYyODQgMjQuODk5NDkwMzU2NDQ1MzEgNS4xMDA1MTAxMjAzOTE4NDYgQyAyNy41NDM3NTA3NjI5Mzk0NSA3Ljc0NDc2MDAzNjQ2ODUwNiAyOSAxMS4yNjA0NzAzOTAzMTk4MiAyOSAxNSBDIDI5IDE4LjczOTUzMDU2MzM1NDQ5IDI3LjU0Mzc1MDc2MjkzOTQ1IDIyLjI1NTIzOTQ4NjY5NDM0IDI0Ljg5OTQ5MDM1NjQ0NTMxIDI0Ljg5OTQ5MDM1NjQ0NTMxIEMgMjIuMjU1MjM5NDg2Njk0MzQgMjcuNTQzNzUwNzYyOTM5NDUgMTguNzM5NTMwNTYzMzU0NDkgMjkgMTUgMjkgWlwiXG4gICAgICAgICAgICBzdHJva2U9XCJub25lXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICBkPVwiTSAxNSAyIEMgMTEuNTI3NTcwNzI0NDg3MyAyIDguMjYyOTkwOTUxNTM4MDg2IDMuMzUyMjM5NjA4NzY0NjQ4IDUuODA3NjA5NTU4MTA1NDY5IDUuODA3NjA5NTU4MTA1NDY5IEMgMy4zNTIyMzk2MDg3NjQ2NDggOC4yNjI5OTA5NTE1MzgwODYgMiAxMS41Mjc1NzA3MjQ0ODczIDIgMTUgQyAyIDE4LjQ3MjQzMTE4Mjg2MTMzIDMuMzUyMjM5NjA4NzY0NjQ4IDIxLjczNzAxMDk1NTgxMDU1IDUuODA3NjA5NTU4MTA1NDY5IDI0LjE5MjM5MDQ0MTg5NDUzIEMgOC4yNjI5OTA5NTE1MzgwODYgMjYuNjQ3NzYwMzkxMjM1MzUgMTEuNTI3NTcwNzI0NDg3MyAyOCAxNSAyOCBDIDE4LjQ3MjQzMTE4Mjg2MTMzIDI4IDIxLjczNzAxMDk1NTgxMDU1IDI2LjY0Nzc2MDM5MTIzNTM1IDI0LjE5MjM5MDQ0MTg5NDUzIDI0LjE5MjM5MDQ0MTg5NDUzIEMgMjYuNjQ3NzYwMzkxMjM1MzUgMjEuNzM3MDEwOTU1ODEwNTUgMjggMTguNDcyNDMxMTgyODYxMzMgMjggMTUgQyAyOCAxMS41Mjc1NzA3MjQ0ODczIDI2LjY0Nzc2MDM5MTIzNTM1IDguMjYyOTkwOTUxNTM4MDg2IDI0LjE5MjM5MDQ0MTg5NDUzIDUuODA3NjA5NTU4MTA1NDY5IEMgMjEuNzM3MDEwOTU1ODEwNTUgMy4zNTIyMzk2MDg3NjQ2NDggMTguNDcyNDMxMTgyODYxMzMgMiAxNSAyIE0gMTUgMCBDIDIzLjI4NDI2OTMzMjg4NTc0IDAgMzAgNi43MTU3MzA2NjcxMTQyNTggMzAgMTUgQyAzMCAyMy4yODQyNjkzMzI4ODU3NCAyMy4yODQyNjkzMzI4ODU3NCAzMCAxNSAzMCBDIDYuNzE1NzMwNjY3MTE0MjU4IDMwIDAgMjMuMjg0MjY5MzMyODg1NzQgMCAxNSBDIDAgNi43MTU3MzA2NjcxMTQyNTggNi43MTU3MzA2NjcxMTQyNTggMCAxNSAwIFpcIlxuICAgICAgICAgICAgc3Ryb2tlPVwibm9uZVwiXG4gICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L2c+XG4gICAgICAgIDxnIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgtMjA3IC0yMTM2KVwiPlxuICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICBkPVwiTTE4MTEuMTgyLDQzNjIuMzQybC03LjU2Nyw2LjczMSw3LjU2Nyw2LjJcIlxuICAgICAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC0xNTUwLjExNiAtMjE4MS44NDIpXCJcbiAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICBzdHJva2VXaWR0aD1cIjJcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZz5cbiAgICAgIDwvZz5cbiAgICA8L3N2Zz5cbiAgKTtcbn1cbiIsIi8qIHRzbGludDpkaXNhYmxlIG1heC1saW5lLWxlbmd0aCAqL1xuaW1wb3J0IFJlYWN0LCB7IFNWR0F0dHJpYnV0ZXMgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2hldnJvblJpZ2h0Um91bmQocHJvcHM6IFNWR0F0dHJpYnV0ZXM8U1ZHU1ZHRWxlbWVudD4pIHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgIHdpZHRoPVwiMzBcIlxuICAgICAgaGVpZ2h0PVwiMzBcIlxuICAgICAgdmlld0JveD1cIjAgMCAzMCAzMFwiXG4gICAgICB7Li4ucHJvcHN9XG4gICAgPlxuICAgICAgPGcgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDkzIDIwNikgcm90YXRlKDE4MClcIj5cbiAgICAgICAgPGcgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDYzIDE3NilcIiBmaWxsPVwibm9uZVwiPlxuICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICBkPVwiTSAxNSAyOSBDIDExLjI2MDQ3MDM5MDMxOTgyIDI5IDcuNzQ0NzYwMDM2NDY4NTA2IDI3LjU0Mzc1MDc2MjkzOTQ1IDUuMTAwNTEwMTIwMzkxODQ2IDI0Ljg5OTQ5MDM1NjQ0NTMxIEMgMi40NTYyNDk5NTIzMTYyODQgMjIuMjU1MjM5NDg2Njk0MzQgMSAxOC43Mzk1MzA1NjMzNTQ0OSAxIDE1IEMgMSAxMS4yNjA0NzAzOTAzMTk4MiAyLjQ1NjI0OTk1MjMxNjI4NCA3Ljc0NDc2MDAzNjQ2ODUwNiA1LjEwMDUxMDEyMDM5MTg0NiA1LjEwMDUxMDEyMDM5MTg0NiBDIDcuNzQ0NzYwMDM2NDY4NTA2IDIuNDU2MjQ5OTUyMzE2Mjg0IDExLjI2MDQ3MDM5MDMxOTgyIDEgMTUgMSBDIDE4LjczOTUzMDU2MzM1NDQ5IDEgMjIuMjU1MjM5NDg2Njk0MzQgMi40NTYyNDk5NTIzMTYyODQgMjQuODk5NDkwMzU2NDQ1MzEgNS4xMDA1MTAxMjAzOTE4NDYgQyAyNy41NDM3NTA3NjI5Mzk0NSA3Ljc0NDc2MDAzNjQ2ODUwNiAyOSAxMS4yNjA0NzAzOTAzMTk4MiAyOSAxNSBDIDI5IDE4LjczOTUzMDU2MzM1NDQ5IDI3LjU0Mzc1MDc2MjkzOTQ1IDIyLjI1NTIzOTQ4NjY5NDM0IDI0Ljg5OTQ5MDM1NjQ0NTMxIDI0Ljg5OTQ5MDM1NjQ0NTMxIEMgMjIuMjU1MjM5NDg2Njk0MzQgMjcuNTQzNzUwNzYyOTM5NDUgMTguNzM5NTMwNTYzMzU0NDkgMjkgMTUgMjkgWlwiXG4gICAgICAgICAgICBzdHJva2U9XCJub25lXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICBkPVwiTSAxNSAyIEMgMTEuNTI3NTcwNzI0NDg3MyAyIDguMjYyOTkwOTUxNTM4MDg2IDMuMzUyMjM5NjA4NzY0NjQ4IDUuODA3NjA5NTU4MTA1NDY5IDUuODA3NjA5NTU4MTA1NDY5IEMgMy4zNTIyMzk2MDg3NjQ2NDggOC4yNjI5OTA5NTE1MzgwODYgMiAxMS41Mjc1NzA3MjQ0ODczIDIgMTUgQyAyIDE4LjQ3MjQzMTE4Mjg2MTMzIDMuMzUyMjM5NjA4NzY0NjQ4IDIxLjczNzAxMDk1NTgxMDU1IDUuODA3NjA5NTU4MTA1NDY5IDI0LjE5MjM5MDQ0MTg5NDUzIEMgOC4yNjI5OTA5NTE1MzgwODYgMjYuNjQ3NzYwMzkxMjM1MzUgMTEuNTI3NTcwNzI0NDg3MyAyOCAxNSAyOCBDIDE4LjQ3MjQzMTE4Mjg2MTMzIDI4IDIxLjczNzAxMDk1NTgxMDU1IDI2LjY0Nzc2MDM5MTIzNTM1IDI0LjE5MjM5MDQ0MTg5NDUzIDI0LjE5MjM5MDQ0MTg5NDUzIEMgMjYuNjQ3NzYwMzkxMjM1MzUgMjEuNzM3MDEwOTU1ODEwNTUgMjggMTguNDcyNDMxMTgyODYxMzMgMjggMTUgQyAyOCAxMS41Mjc1NzA3MjQ0ODczIDI2LjY0Nzc2MDM5MTIzNTM1IDguMjYyOTkwOTUxNTM4MDg2IDI0LjE5MjM5MDQ0MTg5NDUzIDUuODA3NjA5NTU4MTA1NDY5IEMgMjEuNzM3MDEwOTU1ODEwNTUgMy4zNTIyMzk2MDg3NjQ2NDggMTguNDcyNDMxMTgyODYxMzMgMiAxNSAyIE0gMTUgMCBDIDIzLjI4NDI2OTMzMjg4NTc0IDAgMzAgNi43MTU3MzA2NjcxMTQyNTggMzAgMTUgQyAzMCAyMy4yODQyNjkzMzI4ODU3NCAyMy4yODQyNjkzMzI4ODU3NCAzMCAxNSAzMCBDIDYuNzE1NzMwNjY3MTE0MjU4IDMwIDAgMjMuMjg0MjY5MzMyODg1NzQgMCAxNSBDIDAgNi43MTU3MzA2NjcxMTQyNTggNi43MTU3MzA2NjcxMTQyNTggMCAxNSAwIFpcIlxuICAgICAgICAgICAgc3Ryb2tlPVwibm9uZVwiXG4gICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L2c+XG4gICAgICAgIDxnIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgtMTgwIC0xOTk2KVwiPlxuICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICBkPVwiTTE4MTEuMTgyLDQzNjIuMzQybC03LjU2Nyw2LjczMSw3LjU2Nyw2LjJcIlxuICAgICAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC0xNTUwLjExNiAtMjE4MS44NDIpXCJcbiAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICBzdHJva2VXaWR0aD1cIjJcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZz5cbiAgICAgIDwvZz5cbiAgICA8L3N2Zz5cbiAgKTtcbn1cbiIsIi8qIHRzbGludDpkaXNhYmxlIG1heC1saW5lLWxlbmd0aCAqL1xuaW1wb3J0IFJlYWN0LCB7IFNWR0F0dHJpYnV0ZXMgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRmlsZVJvdW5kKHByb3BzOiBTVkdBdHRyaWJ1dGVzPFNWR1NWR0VsZW1lbnQ+KSB7XG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICB3aWR0aD1cIjMwXCJcbiAgICAgIGhlaWdodD1cIjMwXCJcbiAgICAgIHZpZXdCb3g9XCIwIDAgMzAgMzBcIlxuICAgICAgey4uLnByb3BzfVxuICAgID5cbiAgICAgIDxnIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgtNDY4IC0zODMpXCI+XG4gICAgICAgIDxnIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSg0MDUgMjA3KVwiPlxuICAgICAgICAgIDxnIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSg2MyAxNzYpXCIgZmlsbD1cIm5vbmVcIj5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgIGQ9XCJNIDE1IDI5IEMgMTEuMjYwNDcwMzkwMzE5ODIgMjkgNy43NDQ3NjAwMzY0Njg1MDYgMjcuNTQzNzUwNzYyOTM5NDUgNS4xMDA1MTAxMjAzOTE4NDYgMjQuODk5NDkwMzU2NDQ1MzEgQyAyLjQ1NjI0OTk1MjMxNjI4NCAyMi4yNTUyMzk0ODY2OTQzNCAxIDE4LjczOTUzMDU2MzM1NDQ5IDEgMTUgQyAxIDExLjI2MDQ3MDM5MDMxOTgyIDIuNDU2MjQ5OTUyMzE2Mjg0IDcuNzQ0NzYwMDM2NDY4NTA2IDUuMTAwNTEwMTIwMzkxODQ2IDUuMTAwNTEwMTIwMzkxODQ2IEMgNy43NDQ3NjAwMzY0Njg1MDYgMi40NTYyNDk5NTIzMTYyODQgMTEuMjYwNDcwMzkwMzE5ODIgMSAxNSAxIEMgMTguNzM5NTMwNTYzMzU0NDkgMSAyMi4yNTUyMzk0ODY2OTQzNCAyLjQ1NjI0OTk1MjMxNjI4NCAyNC44OTk0OTAzNTY0NDUzMSA1LjEwMDUxMDEyMDM5MTg0NiBDIDI3LjU0Mzc1MDc2MjkzOTQ1IDcuNzQ0NzYwMDM2NDY4NTA2IDI5IDExLjI2MDQ3MDM5MDMxOTgyIDI5IDE1IEMgMjkgMTguNzM5NTMwNTYzMzU0NDkgMjcuNTQzNzUwNzYyOTM5NDUgMjIuMjU1MjM5NDg2Njk0MzQgMjQuODk5NDkwMzU2NDQ1MzEgMjQuODk5NDkwMzU2NDQ1MzEgQyAyMi4yNTUyMzk0ODY2OTQzNCAyNy41NDM3NTA3NjI5Mzk0NSAxOC43Mzk1MzA1NjMzNTQ0OSAyOSAxNSAyOSBaXCJcbiAgICAgICAgICAgICAgc3Ryb2tlPVwibm9uZVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgZD1cIk0gMTUgMiBDIDExLjUyNzU3MDcyNDQ4NzMgMiA4LjI2Mjk5MDk1MTUzODA4NiAzLjM1MjIzOTYwODc2NDY0OCA1LjgwNzYwOTU1ODEwNTQ2OSA1LjgwNzYwOTU1ODEwNTQ2OSBDIDMuMzUyMjM5NjA4NzY0NjQ4IDguMjYyOTkwOTUxNTM4MDg2IDIgMTEuNTI3NTcwNzI0NDg3MyAyIDE1IEMgMiAxOC40NzI0MzExODI4NjEzMyAzLjM1MjIzOTYwODc2NDY0OCAyMS43MzcwMTA5NTU4MTA1NSA1LjgwNzYwOTU1ODEwNTQ2OSAyNC4xOTIzOTA0NDE4OTQ1MyBDIDguMjYyOTkwOTUxNTM4MDg2IDI2LjY0Nzc2MDM5MTIzNTM1IDExLjUyNzU3MDcyNDQ4NzMgMjggMTUgMjggQyAxOC40NzI0MzExODI4NjEzMyAyOCAyMS43MzcwMTA5NTU4MTA1NSAyNi42NDc3NjAzOTEyMzUzNSAyNC4xOTIzOTA0NDE4OTQ1MyAyNC4xOTIzOTA0NDE4OTQ1MyBDIDI2LjY0Nzc2MDM5MTIzNTM1IDIxLjczNzAxMDk1NTgxMDU1IDI4IDE4LjQ3MjQzMTE4Mjg2MTMzIDI4IDE1IEMgMjggMTEuNTI3NTcwNzI0NDg3MyAyNi42NDc3NjAzOTEyMzUzNSA4LjI2Mjk5MDk1MTUzODA4NiAyNC4xOTIzOTA0NDE4OTQ1MyA1LjgwNzYwOTU1ODEwNTQ2OSBDIDIxLjczNzAxMDk1NTgxMDU1IDMuMzUyMjM5NjA4NzY0NjQ4IDE4LjQ3MjQzMTE4Mjg2MTMzIDIgMTUgMiBNIDE1IDAgQyAyMy4yODQyNjkzMzI4ODU3NCAwIDMwIDYuNzE1NzMwNjY3MTE0MjU4IDMwIDE1IEMgMzAgMjMuMjg0MjY5MzMyODg1NzQgMjMuMjg0MjY5MzMyODg1NzQgMzAgMTUgMzAgQyA2LjcxNTczMDY2NzExNDI1OCAzMCAwIDIzLjI4NDI2OTMzMjg4NTc0IDAgMTUgQyAwIDYuNzE1NzMwNjY3MTE0MjU4IDYuNzE1NzMwNjY3MTE0MjU4IDAgMTUgMCBaXCJcbiAgICAgICAgICAgICAgc3Ryb2tlPVwibm9uZVwiXG4gICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2c+XG4gICAgICAgIDwvZz5cbiAgICAgICAgPGcgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDM4NCAyMDgpXCI+XG4gICAgICAgICAgPGdcbiAgICAgICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSg5MyAxODIpXCJcbiAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICBzdHJva2VXaWR0aD1cIjJcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxyZWN0IHdpZHRoPVwiMTJcIiBoZWlnaHQ9XCIxNlwiIHJ4PVwiMVwiIHN0cm9rZT1cIm5vbmVcIiAvPlxuICAgICAgICAgICAgPHJlY3QgeD1cIjFcIiB5PVwiMVwiIHdpZHRoPVwiMTBcIiBoZWlnaHQ9XCIxNFwiIGZpbGw9XCJub25lXCIgLz5cbiAgICAgICAgICA8L2c+XG4gICAgICAgICAgPHJlY3RcbiAgICAgICAgICAgIHdpZHRoPVwiNFwiXG4gICAgICAgICAgICBoZWlnaHQ9XCIxLjNcIlxuICAgICAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDk3IDE4NilcIlxuICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8cmVjdFxuICAgICAgICAgICAgd2lkdGg9XCI0XCJcbiAgICAgICAgICAgIGhlaWdodD1cIjEuM1wiXG4gICAgICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoOTcgMTg5KVwiXG4gICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxyZWN0XG4gICAgICAgICAgICB3aWR0aD1cIjRcIlxuICAgICAgICAgICAgaGVpZ2h0PVwiMS4zXCJcbiAgICAgICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSg5NyAxOTIpXCJcbiAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZz5cbiAgICAgIDwvZz5cbiAgICA8L3N2Zz5cbiAgKTtcbn1cbiIsImltcG9ydCBSZWFjdCwgeyBTVkdBdHRyaWJ1dGVzIH0gZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQZW5jaWwocHJvcHM6IFNWR0F0dHJpYnV0ZXM8U1ZHU1ZHRWxlbWVudD4pIHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgIHdpZHRoPVwiMTcuNzk2XCJcbiAgICAgIGhlaWdodD1cIjE3LjkwOFwiXG4gICAgICB2aWV3Qm94PVwiMCAwIDE3Ljc5NiAxNy45MDhcIlxuICAgICAgey4uLnByb3BzfVxuICAgID5cbiAgICAgIDxnPlxuICAgICAgICA8Zz5cbiAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgZD1cIk0xLjI1NCwxMi42NzQuNSwxNy40MDhsNC43MjYtLjhMMTcuMyw0LjQ3MiwxMy4yODEuNVpcIlxuICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXG4gICAgICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcbiAgICAgICAgICAgIHN0cm9rZVdpZHRoPVwiMVwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9nPlxuICAgICAgICA8bGluZVxuICAgICAgICAgIHgyPVwiMy44NTFcIlxuICAgICAgICAgIHkyPVwiMy44MzhcIlxuICAgICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgxLjM3NSAxMi43NjYpXCJcbiAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxuICAgICAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxuICAgICAgICAgIHN0cm9rZVdpZHRoPVwiMVwiXG4gICAgICAgIC8+XG4gICAgICAgIDxsaW5lXG4gICAgICAgICAgeDI9XCIzLjgzNlwiXG4gICAgICAgICAgeTI9XCIzLjgwMVwiXG4gICAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDEwLjk0OSAyLjk1OSlcIlxuICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXG4gICAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXG4gICAgICAgICAgc3Ryb2tlV2lkdGg9XCIxXCJcbiAgICAgICAgLz5cbiAgICAgIDwvZz5cbiAgICA8L3N2Zz5cbiAgKTtcbn1cbiIsIi8qIHRzbGludDpkaXNhYmxlIG1heC1saW5lLWxlbmd0aCAqL1xuaW1wb3J0IFJlYWN0LCB7IFNWR0F0dHJpYnV0ZXMgfSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFVzZXIocHJvcHM6IFNWR0F0dHJpYnV0ZXM8U1ZHU1ZHRWxlbWVudD4pIHtcbiAgcmV0dXJuKFxuICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMzBcIiBoZWlnaHQ9XCIzMFwiIHZpZXdCb3g9XCIwIDAgMzAgMzBcIiB7Li4ucHJvcHN9PlxuICAgIDxnIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgtNDY4IC0zODMpXCI+XG4gICAgICA8ZyB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoNDY4IDM4MylcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZVdpZHRoPVwiMlwiPlxuICAgICAgICA8Y2lyY2xlIGN4PVwiMTVcIiBjeT1cIjE1XCIgcj1cIjE1XCIgc3Ryb2tlPVwibm9uZVwiLz5cbiAgICAgICAgPGNpcmNsZSBjeD1cIjE1XCIgY3k9XCIxNVwiIHI9XCIxNFwiIGZpbGw9XCJub25lXCIvPlxuICAgICAgPC9nPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD1cIk0tNC0zMTBhNi4wMTgsNi4wMTgsMCwwLDEsNi02SDRhNi4wMTgsNi4wMTgsMCwwLDEsNiw2Wm0yLjYtMkg3LjVBNC4wMzMsNC4wMzMsMCwwLDAsNC0zMTRIMi4xQTQuMDM1LDQuMDM1LDAsMCwwLTEuNC0zMTJabS40LTl2LTFhNC4wMTIsNC4wMTIsMCwwLDEsNC00LDQuMDEyLDQuMDEyLDAsMCwxLDQsNHYxYTQuMDEyLDQuMDEyLDAsMCwxLTQsNEE0LjAxMiw0LjAxMiwwLDAsMS0xLTMyMVptMi0xdjFhMi4wMDYsMi4wMDYsMCwwLDAsMiwyLDIuMDA2LDIuMDA2LDAsMCwwLDItMnYtMWEyLjAwNiwyLjAwNiwwLDAsMC0yLTJBMi4wMDYsMi4wMDYsMCwwLDAsMS0zMjJaXCJcbiAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDQ4MCA3MTYpXCJcbiAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICAvPlxuICAgIDwvZz5cbiAgPC9zdmc+XG4gICk7XG59XG4iLCIvKiB0c2xpbnQ6ZGlzYWJsZSBtYXgtbGluZS1sZW5ndGggKi9cbmltcG9ydCBSZWFjdCwgeyBTVkdBdHRyaWJ1dGVzIH0gZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDbG9zZShwcm9wczogU1ZHQXR0cmlidXRlczxTVkdTVkdFbGVtZW50Pikge1xuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgd2lkdGg9XCIzMFwiXG4gICAgICBoZWlnaHQ9XCIzMFwiXG4gICAgICB2aWV3Qm94PVwiMCAwIDMwIDMwXCJcbiAgICAgIHBvaW50ZXJFdmVudHM9XCJib3VuZGluZy1ib3hcIlxuICAgICAgey4uLnByb3BzfVxuICAgID5cbiAgICAgIDxnIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgtMTMxIC01NzEpXCI+XG4gICAgICAgIDxnIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgxMzIgNTcyKVwiPlxuICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICBkPVwiTTI4LjUsMjYsMTYsMTMuNSwyOC41LDFcIlxuICAgICAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC0zLjUwMSAtMSlcIlxuICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXG4gICAgICAgICAgICBzdHJva2VNaXRlcmxpbWl0PVwiMTBcIlxuICAgICAgICAgICAgc3Ryb2tlV2lkdGg9XCIyXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICBkPVwiTTEsMjYsMTMuNSwxMy41LDEsMVwiXG4gICAgICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTEgLTEpXCJcbiAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxuICAgICAgICAgICAgc3Ryb2tlTWl0ZXJsaW1pdD1cIjEwXCJcbiAgICAgICAgICAgIHN0cm9rZVdpZHRoPVwiMlwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9nPlxuICAgICAgPC9nPlxuICAgIDwvc3ZnPlxuICApO1xufVxuIiwiLyogdHNsaW50OmRpc2FibGUgbWF4LWxpbmUtbGVuZ3RoICovXG5pbXBvcnQgUmVhY3QsIHsgU1ZHQXR0cmlidXRlcyB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSZWZyZXNoKHByb3BzOiBTVkdBdHRyaWJ1dGVzPFNWR1NWR0VsZW1lbnQ+KSB7XG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICB3aWR0aD1cIjMwXCJcbiAgICAgIGhlaWdodD1cIjMwXCJcbiAgICAgIHZpZXdCb3g9XCIwIDAgMzAgMzBcIlxuICAgICAgey4uLnByb3BzfVxuICAgID5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9XCJNMjQuMDY1LDlBMTUuMDY5LDE1LjA2OSwwLDAsMCw5LjE0MiwyMi4xMDVhMS4yNTYsMS4yNTYsMCwxLDAsMi40NzguNDA2YzAtLjAyNy4wMDgtLjA1NS4wMS0uMDgyYTEyLjUyLDEyLjUyLDAsMCwxLDIxLjMtNy4yMjZsLTIuNTg0LDIuNTg0LDcuNTMyLDEuMjU1LTEuMjU1LTcuNTMyLTEuOTIsMS45MkExNSwxNSwwLDAsMCwyNC4wNjUsOVptMTMuNywxNS41ODlBMS4yNTUsMS4yNTUsMCwwLDAsMzYuNSwyNS43YTEyLjUxMiwxMi41MTIsMCwwLDEtMjEuODkzLDYuNTY5bDEuOTI3LTEuOTI3TDksMjkuMDg2bDEuMjU1LDcuNTMyLDIuNTcyLTIuNTcyYTE1LjAyLDE1LjAyLDAsMCwwLDI2LjE2LTguMDIzQTEuMjU2LDEuMjU2LDAsMCwwLDM3LjkyMywyNC42LDEuMjczLDEuMjczLDAsMCwwLDM3Ljc2MywyNC41ODlaXCJcbiAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC05IC05KVwiXG4gICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgLz5cbiAgICA8L3N2Zz5cbiAgKTtcbn1cbiIsIi8qKiBAbGljZW5zZSBSZWFjdCB2MTYuOC4xXG4gKiByZWFjdC1pcy5wcm9kdWN0aW9uLm1pbi5qc1xuICpcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cyxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTtcbnZhciBiPVwiZnVuY3Rpb25cIj09PXR5cGVvZiBTeW1ib2wmJlN5bWJvbC5mb3IsYz1iP1N5bWJvbC5mb3IoXCJyZWFjdC5lbGVtZW50XCIpOjYwMTAzLGQ9Yj9TeW1ib2wuZm9yKFwicmVhY3QucG9ydGFsXCIpOjYwMTA2LGU9Yj9TeW1ib2wuZm9yKFwicmVhY3QuZnJhZ21lbnRcIik6NjAxMDcsZj1iP1N5bWJvbC5mb3IoXCJyZWFjdC5zdHJpY3RfbW9kZVwiKTo2MDEwOCxnPWI/U3ltYm9sLmZvcihcInJlYWN0LnByb2ZpbGVyXCIpOjYwMTE0LGg9Yj9TeW1ib2wuZm9yKFwicmVhY3QucHJvdmlkZXJcIik6NjAxMDksaz1iP1N5bWJvbC5mb3IoXCJyZWFjdC5jb250ZXh0XCIpOjYwMTEwLGw9Yj9TeW1ib2wuZm9yKFwicmVhY3QuYXN5bmNfbW9kZVwiKTo2MDExMSxtPWI/U3ltYm9sLmZvcihcInJlYWN0LmNvbmN1cnJlbnRfbW9kZVwiKTo2MDExMSxuPWI/U3ltYm9sLmZvcihcInJlYWN0LmZvcndhcmRfcmVmXCIpOjYwMTEyLHA9Yj9TeW1ib2wuZm9yKFwicmVhY3Quc3VzcGVuc2VcIik6NjAxMTMscT1iP1N5bWJvbC5mb3IoXCJyZWFjdC5tZW1vXCIpOlxuNjAxMTUscj1iP1N5bWJvbC5mb3IoXCJyZWFjdC5sYXp5XCIpOjYwMTE2O2Z1bmN0aW9uIHQoYSl7aWYoXCJvYmplY3RcIj09PXR5cGVvZiBhJiZudWxsIT09YSl7dmFyIHU9YS4kJHR5cGVvZjtzd2l0Y2godSl7Y2FzZSBjOnN3aXRjaChhPWEudHlwZSxhKXtjYXNlIGw6Y2FzZSBtOmNhc2UgZTpjYXNlIGc6Y2FzZSBmOmNhc2UgcDpyZXR1cm4gYTtkZWZhdWx0OnN3aXRjaChhPWEmJmEuJCR0eXBlb2YsYSl7Y2FzZSBrOmNhc2UgbjpjYXNlIGg6cmV0dXJuIGE7ZGVmYXVsdDpyZXR1cm4gdX19Y2FzZSByOmNhc2UgcTpjYXNlIGQ6cmV0dXJuIHV9fX1mdW5jdGlvbiB2KGEpe3JldHVybiB0KGEpPT09bX1leHBvcnRzLnR5cGVPZj10O2V4cG9ydHMuQXN5bmNNb2RlPWw7ZXhwb3J0cy5Db25jdXJyZW50TW9kZT1tO2V4cG9ydHMuQ29udGV4dENvbnN1bWVyPWs7ZXhwb3J0cy5Db250ZXh0UHJvdmlkZXI9aDtleHBvcnRzLkVsZW1lbnQ9YztleHBvcnRzLkZvcndhcmRSZWY9bjtcbmV4cG9ydHMuRnJhZ21lbnQ9ZTtleHBvcnRzLkxhenk9cjtleHBvcnRzLk1lbW89cTtleHBvcnRzLlBvcnRhbD1kO2V4cG9ydHMuUHJvZmlsZXI9ZztleHBvcnRzLlN0cmljdE1vZGU9ZjtleHBvcnRzLlN1c3BlbnNlPXA7ZXhwb3J0cy5pc1ZhbGlkRWxlbWVudFR5cGU9ZnVuY3Rpb24oYSl7cmV0dXJuXCJzdHJpbmdcIj09PXR5cGVvZiBhfHxcImZ1bmN0aW9uXCI9PT10eXBlb2YgYXx8YT09PWV8fGE9PT1tfHxhPT09Z3x8YT09PWZ8fGE9PT1wfHxcIm9iamVjdFwiPT09dHlwZW9mIGEmJm51bGwhPT1hJiYoYS4kJHR5cGVvZj09PXJ8fGEuJCR0eXBlb2Y9PT1xfHxhLiQkdHlwZW9mPT09aHx8YS4kJHR5cGVvZj09PWt8fGEuJCR0eXBlb2Y9PT1uKX07ZXhwb3J0cy5pc0FzeW5jTW9kZT1mdW5jdGlvbihhKXtyZXR1cm4gdihhKXx8dChhKT09PWx9O2V4cG9ydHMuaXNDb25jdXJyZW50TW9kZT12O2V4cG9ydHMuaXNDb250ZXh0Q29uc3VtZXI9ZnVuY3Rpb24oYSl7cmV0dXJuIHQoYSk9PT1rfTtcbmV4cG9ydHMuaXNDb250ZXh0UHJvdmlkZXI9ZnVuY3Rpb24oYSl7cmV0dXJuIHQoYSk9PT1ofTtleHBvcnRzLmlzRWxlbWVudD1mdW5jdGlvbihhKXtyZXR1cm5cIm9iamVjdFwiPT09dHlwZW9mIGEmJm51bGwhPT1hJiZhLiQkdHlwZW9mPT09Y307ZXhwb3J0cy5pc0ZvcndhcmRSZWY9ZnVuY3Rpb24oYSl7cmV0dXJuIHQoYSk9PT1ufTtleHBvcnRzLmlzRnJhZ21lbnQ9ZnVuY3Rpb24oYSl7cmV0dXJuIHQoYSk9PT1lfTtleHBvcnRzLmlzTGF6eT1mdW5jdGlvbihhKXtyZXR1cm4gdChhKT09PXJ9O2V4cG9ydHMuaXNNZW1vPWZ1bmN0aW9uKGEpe3JldHVybiB0KGEpPT09cX07ZXhwb3J0cy5pc1BvcnRhbD1mdW5jdGlvbihhKXtyZXR1cm4gdChhKT09PWR9O2V4cG9ydHMuaXNQcm9maWxlcj1mdW5jdGlvbihhKXtyZXR1cm4gdChhKT09PWd9O2V4cG9ydHMuaXNTdHJpY3RNb2RlPWZ1bmN0aW9uKGEpe3JldHVybiB0KGEpPT09Zn07XG5leHBvcnRzLmlzU3VzcGVuc2U9ZnVuY3Rpb24oYSl7cmV0dXJuIHQoYSk9PT1wfTtcbiIsIi8qKiBAbGljZW5zZSBSZWFjdCB2MTYuOC4xXG4gKiByZWFjdC1pcy5kZXZlbG9wbWVudC5qc1xuICpcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuXG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgKGZ1bmN0aW9uKCkge1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG4vLyBUaGUgU3ltYm9sIHVzZWQgdG8gdGFnIHRoZSBSZWFjdEVsZW1lbnQtbGlrZSB0eXBlcy4gSWYgdGhlcmUgaXMgbm8gbmF0aXZlIFN5bWJvbFxuLy8gbm9yIHBvbHlmaWxsLCB0aGVuIGEgcGxhaW4gbnVtYmVyIGlzIHVzZWQgZm9yIHBlcmZvcm1hbmNlLlxudmFyIGhhc1N5bWJvbCA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLmZvcjtcblxudmFyIFJFQUNUX0VMRU1FTlRfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmVsZW1lbnQnKSA6IDB4ZWFjNztcbnZhciBSRUFDVF9QT1JUQUxfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnBvcnRhbCcpIDogMHhlYWNhO1xudmFyIFJFQUNUX0ZSQUdNRU5UX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5mcmFnbWVudCcpIDogMHhlYWNiO1xudmFyIFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5zdHJpY3RfbW9kZScpIDogMHhlYWNjO1xudmFyIFJFQUNUX1BST0ZJTEVSX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5wcm9maWxlcicpIDogMHhlYWQyO1xudmFyIFJFQUNUX1BST1ZJREVSX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5wcm92aWRlcicpIDogMHhlYWNkO1xudmFyIFJFQUNUX0NPTlRFWFRfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmNvbnRleHQnKSA6IDB4ZWFjZTtcbnZhciBSRUFDVF9BU1lOQ19NT0RFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5hc3luY19tb2RlJykgOiAweGVhY2Y7XG52YXIgUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5jb25jdXJyZW50X21vZGUnKSA6IDB4ZWFjZjtcbnZhciBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuZm9yd2FyZF9yZWYnKSA6IDB4ZWFkMDtcbnZhciBSRUFDVF9TVVNQRU5TRV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3Quc3VzcGVuc2UnKSA6IDB4ZWFkMTtcbnZhciBSRUFDVF9NRU1PX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5tZW1vJykgOiAweGVhZDM7XG52YXIgUkVBQ1RfTEFaWV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QubGF6eScpIDogMHhlYWQ0O1xuXG5mdW5jdGlvbiBpc1ZhbGlkRWxlbWVudFR5cGUodHlwZSkge1xuICByZXR1cm4gdHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nIHx8XG4gIC8vIE5vdGU6IGl0cyB0eXBlb2YgbWlnaHQgYmUgb3RoZXIgdGhhbiAnc3ltYm9sJyBvciAnbnVtYmVyJyBpZiBpdCdzIGEgcG9seWZpbGwuXG4gIHR5cGUgPT09IFJFQUNUX0ZSQUdNRU5UX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfUFJPRklMRVJfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NVU1BFTlNFX1RZUEUgfHwgdHlwZW9mIHR5cGUgPT09ICdvYmplY3QnICYmIHR5cGUgIT09IG51bGwgJiYgKHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0xBWllfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9NRU1PX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfUFJPVklERVJfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9DT05URVhUX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSk7XG59XG5cbi8qKlxuICogRm9ya2VkIGZyb20gZmJqcy93YXJuaW5nOlxuICogaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL2ZianMvYmxvYi9lNjZiYTIwYWQ1YmU0MzNlYjU0NDIzZjJiMDk3ZDgyOTMyNGQ5ZGU2L3BhY2thZ2VzL2ZianMvc3JjL19fZm9ya3NfXy93YXJuaW5nLmpzXG4gKlxuICogT25seSBjaGFuZ2UgaXMgd2UgdXNlIGNvbnNvbGUud2FybiBpbnN0ZWFkIG9mIGNvbnNvbGUuZXJyb3IsXG4gKiBhbmQgZG8gbm90aGluZyB3aGVuICdjb25zb2xlJyBpcyBub3Qgc3VwcG9ydGVkLlxuICogVGhpcyByZWFsbHkgc2ltcGxpZmllcyB0aGUgY29kZS5cbiAqIC0tLVxuICogU2ltaWxhciB0byBpbnZhcmlhbnQgYnV0IG9ubHkgbG9ncyBhIHdhcm5pbmcgaWYgdGhlIGNvbmRpdGlvbiBpcyBub3QgbWV0LlxuICogVGhpcyBjYW4gYmUgdXNlZCB0byBsb2cgaXNzdWVzIGluIGRldmVsb3BtZW50IGVudmlyb25tZW50cyBpbiBjcml0aWNhbFxuICogcGF0aHMuIFJlbW92aW5nIHRoZSBsb2dnaW5nIGNvZGUgZm9yIHByb2R1Y3Rpb24gZW52aXJvbm1lbnRzIHdpbGwga2VlcCB0aGVcbiAqIHNhbWUgbG9naWMgYW5kIGZvbGxvdyB0aGUgc2FtZSBjb2RlIHBhdGhzLlxuICovXG5cbnZhciBsb3dQcmlvcml0eVdhcm5pbmcgPSBmdW5jdGlvbiAoKSB7fTtcblxue1xuICB2YXIgcHJpbnRXYXJuaW5nID0gZnVuY3Rpb24gKGZvcm1hdCkge1xuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgdmFyIGFyZ0luZGV4ID0gMDtcbiAgICB2YXIgbWVzc2FnZSA9ICdXYXJuaW5nOiAnICsgZm9ybWF0LnJlcGxhY2UoLyVzL2csIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBhcmdzW2FyZ0luZGV4KytdO1xuICAgIH0pO1xuICAgIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbnNvbGUud2FybihtZXNzYWdlKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIC8vIC0tLSBXZWxjb21lIHRvIGRlYnVnZ2luZyBSZWFjdCAtLS1cbiAgICAgIC8vIFRoaXMgZXJyb3Igd2FzIHRocm93biBhcyBhIGNvbnZlbmllbmNlIHNvIHRoYXQgeW91IGNhbiB1c2UgdGhpcyBzdGFja1xuICAgICAgLy8gdG8gZmluZCB0aGUgY2FsbHNpdGUgdGhhdCBjYXVzZWQgdGhpcyB3YXJuaW5nIHRvIGZpcmUuXG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgfSBjYXRjaCAoeCkge31cbiAgfTtcblxuICBsb3dQcmlvcml0eVdhcm5pbmcgPSBmdW5jdGlvbiAoY29uZGl0aW9uLCBmb3JtYXQpIHtcbiAgICBpZiAoZm9ybWF0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignYGxvd1ByaW9yaXR5V2FybmluZyhjb25kaXRpb24sIGZvcm1hdCwgLi4uYXJncylgIHJlcXVpcmVzIGEgd2FybmluZyAnICsgJ21lc3NhZ2UgYXJndW1lbnQnKTtcbiAgICB9XG4gICAgaWYgKCFjb25kaXRpb24pIHtcbiAgICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4yID4gMiA/IF9sZW4yIC0gMiA6IDApLCBfa2V5MiA9IDI7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgICAgYXJnc1tfa2V5MiAtIDJdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICAgIH1cblxuICAgICAgcHJpbnRXYXJuaW5nLmFwcGx5KHVuZGVmaW5lZCwgW2Zvcm1hdF0uY29uY2F0KGFyZ3MpKTtcbiAgICB9XG4gIH07XG59XG5cbnZhciBsb3dQcmlvcml0eVdhcm5pbmckMSA9IGxvd1ByaW9yaXR5V2FybmluZztcblxuZnVuY3Rpb24gdHlwZU9mKG9iamVjdCkge1xuICBpZiAodHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgJiYgb2JqZWN0ICE9PSBudWxsKSB7XG4gICAgdmFyICQkdHlwZW9mID0gb2JqZWN0LiQkdHlwZW9mO1xuICAgIHN3aXRjaCAoJCR0eXBlb2YpIHtcbiAgICAgIGNhc2UgUkVBQ1RfRUxFTUVOVF9UWVBFOlxuICAgICAgICB2YXIgdHlwZSA9IG9iamVjdC50eXBlO1xuXG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgIGNhc2UgUkVBQ1RfQVNZTkNfTU9ERV9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9GUkFHTUVOVF9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfUFJPRklMRVJfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1NUUklDVF9NT0RFX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9UWVBFOlxuICAgICAgICAgICAgcmV0dXJuIHR5cGU7XG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHZhciAkJHR5cGVvZlR5cGUgPSB0eXBlICYmIHR5cGUuJCR0eXBlb2Y7XG5cbiAgICAgICAgICAgIHN3aXRjaCAoJCR0eXBlb2ZUeXBlKSB7XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfQ09OVEVYVF9UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfUFJPVklERVJfVFlQRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gJCR0eXBlb2ZUeXBlO1xuICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiAkJHR5cGVvZjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgY2FzZSBSRUFDVF9MQVpZX1RZUEU6XG4gICAgICBjYXNlIFJFQUNUX01FTU9fVFlQRTpcbiAgICAgIGNhc2UgUkVBQ1RfUE9SVEFMX1RZUEU6XG4gICAgICAgIHJldHVybiAkJHR5cGVvZjtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdW5kZWZpbmVkO1xufVxuXG4vLyBBc3luY01vZGUgaXMgZGVwcmVjYXRlZCBhbG9uZyB3aXRoIGlzQXN5bmNNb2RlXG52YXIgQXN5bmNNb2RlID0gUkVBQ1RfQVNZTkNfTU9ERV9UWVBFO1xudmFyIENvbmN1cnJlbnRNb2RlID0gUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEU7XG52YXIgQ29udGV4dENvbnN1bWVyID0gUkVBQ1RfQ09OVEVYVF9UWVBFO1xudmFyIENvbnRleHRQcm92aWRlciA9IFJFQUNUX1BST1ZJREVSX1RZUEU7XG52YXIgRWxlbWVudCA9IFJFQUNUX0VMRU1FTlRfVFlQRTtcbnZhciBGb3J3YXJkUmVmID0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTtcbnZhciBGcmFnbWVudCA9IFJFQUNUX0ZSQUdNRU5UX1RZUEU7XG52YXIgTGF6eSA9IFJFQUNUX0xBWllfVFlQRTtcbnZhciBNZW1vID0gUkVBQ1RfTUVNT19UWVBFO1xudmFyIFBvcnRhbCA9IFJFQUNUX1BPUlRBTF9UWVBFO1xudmFyIFByb2ZpbGVyID0gUkVBQ1RfUFJPRklMRVJfVFlQRTtcbnZhciBTdHJpY3RNb2RlID0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRTtcbnZhciBTdXNwZW5zZSA9IFJFQUNUX1NVU1BFTlNFX1RZUEU7XG5cbnZhciBoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0FzeW5jTW9kZSA9IGZhbHNlO1xuXG4vLyBBc3luY01vZGUgc2hvdWxkIGJlIGRlcHJlY2F0ZWRcbmZ1bmN0aW9uIGlzQXN5bmNNb2RlKG9iamVjdCkge1xuICB7XG4gICAgaWYgKCFoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0FzeW5jTW9kZSkge1xuICAgICAgaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNBc3luY01vZGUgPSB0cnVlO1xuICAgICAgbG93UHJpb3JpdHlXYXJuaW5nJDEoZmFsc2UsICdUaGUgUmVhY3RJcy5pc0FzeW5jTW9kZSgpIGFsaWFzIGhhcyBiZWVuIGRlcHJlY2F0ZWQsICcgKyAnYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiBSZWFjdCAxNysuIFVwZGF0ZSB5b3VyIGNvZGUgdG8gdXNlICcgKyAnUmVhY3RJcy5pc0NvbmN1cnJlbnRNb2RlKCkgaW5zdGVhZC4gSXQgaGFzIHRoZSBleGFjdCBzYW1lIEFQSS4nKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGlzQ29uY3VycmVudE1vZGUob2JqZWN0KSB8fCB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfQVNZTkNfTU9ERV9UWVBFO1xufVxuZnVuY3Rpb24gaXNDb25jdXJyZW50TW9kZShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzQ29udGV4dENvbnN1bWVyKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0NPTlRFWFRfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzQ29udGV4dFByb3ZpZGVyKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1BST1ZJREVSX1RZUEU7XG59XG5mdW5jdGlvbiBpc0VsZW1lbnQob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0JyAmJiBvYmplY3QgIT09IG51bGwgJiYgb2JqZWN0LiQkdHlwZW9mID09PSBSRUFDVF9FTEVNRU5UX1RZUEU7XG59XG5mdW5jdGlvbiBpc0ZvcndhcmRSZWYob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzRnJhZ21lbnQob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfRlJBR01FTlRfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzTGF6eShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9MQVpZX1RZUEU7XG59XG5mdW5jdGlvbiBpc01lbW8ob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfTUVNT19UWVBFO1xufVxuZnVuY3Rpb24gaXNQb3J0YWwob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfUE9SVEFMX1RZUEU7XG59XG5mdW5jdGlvbiBpc1Byb2ZpbGVyKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1BST0ZJTEVSX1RZUEU7XG59XG5mdW5jdGlvbiBpc1N0cmljdE1vZGUob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzU3VzcGVuc2Uob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfU1VTUEVOU0VfVFlQRTtcbn1cblxuZXhwb3J0cy50eXBlT2YgPSB0eXBlT2Y7XG5leHBvcnRzLkFzeW5jTW9kZSA9IEFzeW5jTW9kZTtcbmV4cG9ydHMuQ29uY3VycmVudE1vZGUgPSBDb25jdXJyZW50TW9kZTtcbmV4cG9ydHMuQ29udGV4dENvbnN1bWVyID0gQ29udGV4dENvbnN1bWVyO1xuZXhwb3J0cy5Db250ZXh0UHJvdmlkZXIgPSBDb250ZXh0UHJvdmlkZXI7XG5leHBvcnRzLkVsZW1lbnQgPSBFbGVtZW50O1xuZXhwb3J0cy5Gb3J3YXJkUmVmID0gRm9yd2FyZFJlZjtcbmV4cG9ydHMuRnJhZ21lbnQgPSBGcmFnbWVudDtcbmV4cG9ydHMuTGF6eSA9IExhenk7XG5leHBvcnRzLk1lbW8gPSBNZW1vO1xuZXhwb3J0cy5Qb3J0YWwgPSBQb3J0YWw7XG5leHBvcnRzLlByb2ZpbGVyID0gUHJvZmlsZXI7XG5leHBvcnRzLlN0cmljdE1vZGUgPSBTdHJpY3RNb2RlO1xuZXhwb3J0cy5TdXNwZW5zZSA9IFN1c3BlbnNlO1xuZXhwb3J0cy5pc1ZhbGlkRWxlbWVudFR5cGUgPSBpc1ZhbGlkRWxlbWVudFR5cGU7XG5leHBvcnRzLmlzQXN5bmNNb2RlID0gaXNBc3luY01vZGU7XG5leHBvcnRzLmlzQ29uY3VycmVudE1vZGUgPSBpc0NvbmN1cnJlbnRNb2RlO1xuZXhwb3J0cy5pc0NvbnRleHRDb25zdW1lciA9IGlzQ29udGV4dENvbnN1bWVyO1xuZXhwb3J0cy5pc0NvbnRleHRQcm92aWRlciA9IGlzQ29udGV4dFByb3ZpZGVyO1xuZXhwb3J0cy5pc0VsZW1lbnQgPSBpc0VsZW1lbnQ7XG5leHBvcnRzLmlzRm9yd2FyZFJlZiA9IGlzRm9yd2FyZFJlZjtcbmV4cG9ydHMuaXNGcmFnbWVudCA9IGlzRnJhZ21lbnQ7XG5leHBvcnRzLmlzTGF6eSA9IGlzTGF6eTtcbmV4cG9ydHMuaXNNZW1vID0gaXNNZW1vO1xuZXhwb3J0cy5pc1BvcnRhbCA9IGlzUG9ydGFsO1xuZXhwb3J0cy5pc1Byb2ZpbGVyID0gaXNQcm9maWxlcjtcbmV4cG9ydHMuaXNTdHJpY3RNb2RlID0gaXNTdHJpY3RNb2RlO1xuZXhwb3J0cy5pc1N1c3BlbnNlID0gaXNTdXNwZW5zZTtcbiAgfSkoKTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC1pcy5wcm9kdWN0aW9uLm1pbi5qcycpO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC1pcy5kZXZlbG9wbWVudC5qcycpO1xufVxuIiwiLypcbm9iamVjdC1hc3NpZ25cbihjKSBTaW5kcmUgU29yaHVzXG5AbGljZW5zZSBNSVRcbiovXG5cbid1c2Ugc3RyaWN0Jztcbi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG52YXIgZ2V0T3duUHJvcGVydHlTeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcbnZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG52YXIgcHJvcElzRW51bWVyYWJsZSA9IE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGU7XG5cbmZ1bmN0aW9uIHRvT2JqZWN0KHZhbCkge1xuXHRpZiAodmFsID09PSBudWxsIHx8IHZhbCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignT2JqZWN0LmFzc2lnbiBjYW5ub3QgYmUgY2FsbGVkIHdpdGggbnVsbCBvciB1bmRlZmluZWQnKTtcblx0fVxuXG5cdHJldHVybiBPYmplY3QodmFsKTtcbn1cblxuZnVuY3Rpb24gc2hvdWxkVXNlTmF0aXZlKCkge1xuXHR0cnkge1xuXHRcdGlmICghT2JqZWN0LmFzc2lnbikge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIERldGVjdCBidWdneSBwcm9wZXJ0eSBlbnVtZXJhdGlvbiBvcmRlciBpbiBvbGRlciBWOCB2ZXJzaW9ucy5cblxuXHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTQxMThcblx0XHR2YXIgdGVzdDEgPSBuZXcgU3RyaW5nKCdhYmMnKTsgIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tbmV3LXdyYXBwZXJzXG5cdFx0dGVzdDFbNV0gPSAnZGUnO1xuXHRcdGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0ZXN0MSlbMF0gPT09ICc1Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTMwNTZcblx0XHR2YXIgdGVzdDIgPSB7fTtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IDEwOyBpKyspIHtcblx0XHRcdHRlc3QyWydfJyArIFN0cmluZy5mcm9tQ2hhckNvZGUoaSldID0gaTtcblx0XHR9XG5cdFx0dmFyIG9yZGVyMiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRlc3QyKS5tYXAoZnVuY3Rpb24gKG4pIHtcblx0XHRcdHJldHVybiB0ZXN0MltuXTtcblx0XHR9KTtcblx0XHRpZiAob3JkZXIyLmpvaW4oJycpICE9PSAnMDEyMzQ1Njc4OScpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0zMDU2XG5cdFx0dmFyIHRlc3QzID0ge307XG5cdFx0J2FiY2RlZmdoaWprbG1ub3BxcnN0Jy5zcGxpdCgnJykuZm9yRWFjaChmdW5jdGlvbiAobGV0dGVyKSB7XG5cdFx0XHR0ZXN0M1tsZXR0ZXJdID0gbGV0dGVyO1xuXHRcdH0pO1xuXHRcdGlmIChPYmplY3Qua2V5cyhPYmplY3QuYXNzaWduKHt9LCB0ZXN0MykpLmpvaW4oJycpICE9PVxuXHRcdFx0XHQnYWJjZGVmZ2hpamtsbW5vcHFyc3QnKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRydWU7XG5cdH0gY2F0Y2ggKGVycikge1xuXHRcdC8vIFdlIGRvbid0IGV4cGVjdCBhbnkgb2YgdGhlIGFib3ZlIHRvIHRocm93LCBidXQgYmV0dGVyIHRvIGJlIHNhZmUuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2hvdWxkVXNlTmF0aXZlKCkgPyBPYmplY3QuYXNzaWduIDogZnVuY3Rpb24gKHRhcmdldCwgc291cmNlKSB7XG5cdHZhciBmcm9tO1xuXHR2YXIgdG8gPSB0b09iamVjdCh0YXJnZXQpO1xuXHR2YXIgc3ltYm9scztcblxuXHRmb3IgKHZhciBzID0gMTsgcyA8IGFyZ3VtZW50cy5sZW5ndGg7IHMrKykge1xuXHRcdGZyb20gPSBPYmplY3QoYXJndW1lbnRzW3NdKTtcblxuXHRcdGZvciAodmFyIGtleSBpbiBmcm9tKSB7XG5cdFx0XHRpZiAoaGFzT3duUHJvcGVydHkuY2FsbChmcm9tLCBrZXkpKSB7XG5cdFx0XHRcdHRvW2tleV0gPSBmcm9tW2tleV07XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKGdldE93blByb3BlcnR5U3ltYm9scykge1xuXHRcdFx0c3ltYm9scyA9IGdldE93blByb3BlcnR5U3ltYm9scyhmcm9tKTtcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3ltYm9scy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRpZiAocHJvcElzRW51bWVyYWJsZS5jYWxsKGZyb20sIHN5bWJvbHNbaV0pKSB7XG5cdFx0XHRcdFx0dG9bc3ltYm9sc1tpXV0gPSBmcm9tW3N5bWJvbHNbaV1dO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHRvO1xufTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgUmVhY3RQcm9wVHlwZXNTZWNyZXQgPSAnU0VDUkVUX0RPX05PVF9QQVNTX1RISVNfT1JfWU9VX1dJTExfQkVfRklSRUQnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0UHJvcFR5cGVzU2VjcmV0O1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBwcmludFdhcm5pbmcgPSBmdW5jdGlvbigpIHt9O1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICB2YXIgUmVhY3RQcm9wVHlwZXNTZWNyZXQgPSByZXF1aXJlKCcuL2xpYi9SZWFjdFByb3BUeXBlc1NlY3JldCcpO1xuICB2YXIgbG9nZ2VkVHlwZUZhaWx1cmVzID0ge307XG4gIHZhciBoYXMgPSBGdW5jdGlvbi5jYWxsLmJpbmQoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSk7XG5cbiAgcHJpbnRXYXJuaW5nID0gZnVuY3Rpb24odGV4dCkge1xuICAgIHZhciBtZXNzYWdlID0gJ1dhcm5pbmc6ICcgKyB0ZXh0O1xuICAgIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IobWVzc2FnZSk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAvLyAtLS0gV2VsY29tZSB0byBkZWJ1Z2dpbmcgUmVhY3QgLS0tXG4gICAgICAvLyBUaGlzIGVycm9yIHdhcyB0aHJvd24gYXMgYSBjb252ZW5pZW5jZSBzbyB0aGF0IHlvdSBjYW4gdXNlIHRoaXMgc3RhY2tcbiAgICAgIC8vIHRvIGZpbmQgdGhlIGNhbGxzaXRlIHRoYXQgY2F1c2VkIHRoaXMgd2FybmluZyB0byBmaXJlLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgIH0gY2F0Y2ggKHgpIHt9XG4gIH07XG59XG5cbi8qKlxuICogQXNzZXJ0IHRoYXQgdGhlIHZhbHVlcyBtYXRjaCB3aXRoIHRoZSB0eXBlIHNwZWNzLlxuICogRXJyb3IgbWVzc2FnZXMgYXJlIG1lbW9yaXplZCBhbmQgd2lsbCBvbmx5IGJlIHNob3duIG9uY2UuXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IHR5cGVTcGVjcyBNYXAgb2YgbmFtZSB0byBhIFJlYWN0UHJvcFR5cGVcbiAqIEBwYXJhbSB7b2JqZWN0fSB2YWx1ZXMgUnVudGltZSB2YWx1ZXMgdGhhdCBuZWVkIHRvIGJlIHR5cGUtY2hlY2tlZFxuICogQHBhcmFtIHtzdHJpbmd9IGxvY2F0aW9uIGUuZy4gXCJwcm9wXCIsIFwiY29udGV4dFwiLCBcImNoaWxkIGNvbnRleHRcIlxuICogQHBhcmFtIHtzdHJpbmd9IGNvbXBvbmVudE5hbWUgTmFtZSBvZiB0aGUgY29tcG9uZW50IGZvciBlcnJvciBtZXNzYWdlcy5cbiAqIEBwYXJhbSB7P0Z1bmN0aW9ufSBnZXRTdGFjayBSZXR1cm5zIHRoZSBjb21wb25lbnQgc3RhY2suXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBjaGVja1Byb3BUeXBlcyh0eXBlU3BlY3MsIHZhbHVlcywgbG9jYXRpb24sIGNvbXBvbmVudE5hbWUsIGdldFN0YWNrKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgZm9yICh2YXIgdHlwZVNwZWNOYW1lIGluIHR5cGVTcGVjcykge1xuICAgICAgaWYgKGhhcyh0eXBlU3BlY3MsIHR5cGVTcGVjTmFtZSkpIHtcbiAgICAgICAgdmFyIGVycm9yO1xuICAgICAgICAvLyBQcm9wIHR5cGUgdmFsaWRhdGlvbiBtYXkgdGhyb3cuIEluIGNhc2UgdGhleSBkbywgd2UgZG9uJ3Qgd2FudCB0b1xuICAgICAgICAvLyBmYWlsIHRoZSByZW5kZXIgcGhhc2Ugd2hlcmUgaXQgZGlkbid0IGZhaWwgYmVmb3JlLiBTbyB3ZSBsb2cgaXQuXG4gICAgICAgIC8vIEFmdGVyIHRoZXNlIGhhdmUgYmVlbiBjbGVhbmVkIHVwLCB3ZSdsbCBsZXQgdGhlbSB0aHJvdy5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIGlzIGludGVudGlvbmFsbHkgYW4gaW52YXJpYW50IHRoYXQgZ2V0cyBjYXVnaHQuIEl0J3MgdGhlIHNhbWVcbiAgICAgICAgICAvLyBiZWhhdmlvciBhcyB3aXRob3V0IHRoaXMgc3RhdGVtZW50IGV4Y2VwdCB3aXRoIGEgYmV0dGVyIG1lc3NhZ2UuXG4gICAgICAgICAgaWYgKHR5cGVvZiB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgdmFyIGVyciA9IEVycm9yKFxuICAgICAgICAgICAgICAoY29tcG9uZW50TmFtZSB8fCAnUmVhY3QgY2xhc3MnKSArICc6ICcgKyBsb2NhdGlvbiArICcgdHlwZSBgJyArIHR5cGVTcGVjTmFtZSArICdgIGlzIGludmFsaWQ7ICcgK1xuICAgICAgICAgICAgICAnaXQgbXVzdCBiZSBhIGZ1bmN0aW9uLCB1c3VhbGx5IGZyb20gdGhlIGBwcm9wLXR5cGVzYCBwYWNrYWdlLCBidXQgcmVjZWl2ZWQgYCcgKyB0eXBlb2YgdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0gKyAnYC4nXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgZXJyLm5hbWUgPSAnSW52YXJpYW50IFZpb2xhdGlvbic7XG4gICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVycm9yID0gdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0odmFsdWVzLCB0eXBlU3BlY05hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBudWxsLCBSZWFjdFByb3BUeXBlc1NlY3JldCk7XG4gICAgICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICAgICAgZXJyb3IgPSBleDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZXJyb3IgJiYgIShlcnJvciBpbnN0YW5jZW9mIEVycm9yKSkge1xuICAgICAgICAgIHByaW50V2FybmluZyhcbiAgICAgICAgICAgIChjb21wb25lbnROYW1lIHx8ICdSZWFjdCBjbGFzcycpICsgJzogdHlwZSBzcGVjaWZpY2F0aW9uIG9mICcgK1xuICAgICAgICAgICAgbG9jYXRpb24gKyAnIGAnICsgdHlwZVNwZWNOYW1lICsgJ2AgaXMgaW52YWxpZDsgdGhlIHR5cGUgY2hlY2tlciAnICtcbiAgICAgICAgICAgICdmdW5jdGlvbiBtdXN0IHJldHVybiBgbnVsbGAgb3IgYW4gYEVycm9yYCBidXQgcmV0dXJuZWQgYSAnICsgdHlwZW9mIGVycm9yICsgJy4gJyArXG4gICAgICAgICAgICAnWW91IG1heSBoYXZlIGZvcmdvdHRlbiB0byBwYXNzIGFuIGFyZ3VtZW50IHRvIHRoZSB0eXBlIGNoZWNrZXIgJyArXG4gICAgICAgICAgICAnY3JlYXRvciAoYXJyYXlPZiwgaW5zdGFuY2VPZiwgb2JqZWN0T2YsIG9uZU9mLCBvbmVPZlR5cGUsIGFuZCAnICtcbiAgICAgICAgICAgICdzaGFwZSBhbGwgcmVxdWlyZSBhbiBhcmd1bWVudCkuJ1xuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IgJiYgIShlcnJvci5tZXNzYWdlIGluIGxvZ2dlZFR5cGVGYWlsdXJlcykpIHtcbiAgICAgICAgICAvLyBPbmx5IG1vbml0b3IgdGhpcyBmYWlsdXJlIG9uY2UgYmVjYXVzZSB0aGVyZSB0ZW5kcyB0byBiZSBhIGxvdCBvZiB0aGVcbiAgICAgICAgICAvLyBzYW1lIGVycm9yLlxuICAgICAgICAgIGxvZ2dlZFR5cGVGYWlsdXJlc1tlcnJvci5tZXNzYWdlXSA9IHRydWU7XG5cbiAgICAgICAgICB2YXIgc3RhY2sgPSBnZXRTdGFjayA/IGdldFN0YWNrKCkgOiAnJztcblxuICAgICAgICAgIHByaW50V2FybmluZyhcbiAgICAgICAgICAgICdGYWlsZWQgJyArIGxvY2F0aW9uICsgJyB0eXBlOiAnICsgZXJyb3IubWVzc2FnZSArIChzdGFjayAhPSBudWxsID8gc3RhY2sgOiAnJylcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogUmVzZXRzIHdhcm5pbmcgY2FjaGUgd2hlbiB0ZXN0aW5nLlxuICpcbiAqIEBwcml2YXRlXG4gKi9cbmNoZWNrUHJvcFR5cGVzLnJlc2V0V2FybmluZ0NhY2hlID0gZnVuY3Rpb24oKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgbG9nZ2VkVHlwZUZhaWx1cmVzID0ge307XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjaGVja1Byb3BUeXBlcztcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgUmVhY3RJcyA9IHJlcXVpcmUoJ3JlYWN0LWlzJyk7XG52YXIgYXNzaWduID0gcmVxdWlyZSgnb2JqZWN0LWFzc2lnbicpO1xuXG52YXIgUmVhY3RQcm9wVHlwZXNTZWNyZXQgPSByZXF1aXJlKCcuL2xpYi9SZWFjdFByb3BUeXBlc1NlY3JldCcpO1xudmFyIGNoZWNrUHJvcFR5cGVzID0gcmVxdWlyZSgnLi9jaGVja1Byb3BUeXBlcycpO1xuXG52YXIgaGFzID0gRnVuY3Rpb24uY2FsbC5iaW5kKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkpO1xudmFyIHByaW50V2FybmluZyA9IGZ1bmN0aW9uKCkge307XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHByaW50V2FybmluZyA9IGZ1bmN0aW9uKHRleHQpIHtcbiAgICB2YXIgbWVzc2FnZSA9ICdXYXJuaW5nOiAnICsgdGV4dDtcbiAgICBpZiAodHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25zb2xlLmVycm9yKG1lc3NhZ2UpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgLy8gLS0tIFdlbGNvbWUgdG8gZGVidWdnaW5nIFJlYWN0IC0tLVxuICAgICAgLy8gVGhpcyBlcnJvciB3YXMgdGhyb3duIGFzIGEgY29udmVuaWVuY2Ugc28gdGhhdCB5b3UgY2FuIHVzZSB0aGlzIHN0YWNrXG4gICAgICAvLyB0byBmaW5kIHRoZSBjYWxsc2l0ZSB0aGF0IGNhdXNlZCB0aGlzIHdhcm5pbmcgdG8gZmlyZS5cbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICB9IGNhdGNoICh4KSB7fVxuICB9O1xufVxuXG5mdW5jdGlvbiBlbXB0eUZ1bmN0aW9uVGhhdFJldHVybnNOdWxsKCkge1xuICByZXR1cm4gbnVsbDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpc1ZhbGlkRWxlbWVudCwgdGhyb3dPbkRpcmVjdEFjY2Vzcykge1xuICAvKiBnbG9iYWwgU3ltYm9sICovXG4gIHZhciBJVEVSQVRPUl9TWU1CT0wgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC5pdGVyYXRvcjtcbiAgdmFyIEZBVVhfSVRFUkFUT1JfU1lNQk9MID0gJ0BAaXRlcmF0b3InOyAvLyBCZWZvcmUgU3ltYm9sIHNwZWMuXG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGl0ZXJhdG9yIG1ldGhvZCBmdW5jdGlvbiBjb250YWluZWQgb24gdGhlIGl0ZXJhYmxlIG9iamVjdC5cbiAgICpcbiAgICogQmUgc3VyZSB0byBpbnZva2UgdGhlIGZ1bmN0aW9uIHdpdGggdGhlIGl0ZXJhYmxlIGFzIGNvbnRleHQ6XG4gICAqXG4gICAqICAgICB2YXIgaXRlcmF0b3JGbiA9IGdldEl0ZXJhdG9yRm4obXlJdGVyYWJsZSk7XG4gICAqICAgICBpZiAoaXRlcmF0b3JGbikge1xuICAgKiAgICAgICB2YXIgaXRlcmF0b3IgPSBpdGVyYXRvckZuLmNhbGwobXlJdGVyYWJsZSk7XG4gICAqICAgICAgIC4uLlxuICAgKiAgICAgfVxuICAgKlxuICAgKiBAcGFyYW0gez9vYmplY3R9IG1heWJlSXRlcmFibGVcbiAgICogQHJldHVybiB7P2Z1bmN0aW9ufVxuICAgKi9cbiAgZnVuY3Rpb24gZ2V0SXRlcmF0b3JGbihtYXliZUl0ZXJhYmxlKSB7XG4gICAgdmFyIGl0ZXJhdG9yRm4gPSBtYXliZUl0ZXJhYmxlICYmIChJVEVSQVRPUl9TWU1CT0wgJiYgbWF5YmVJdGVyYWJsZVtJVEVSQVRPUl9TWU1CT0xdIHx8IG1heWJlSXRlcmFibGVbRkFVWF9JVEVSQVRPUl9TWU1CT0xdKTtcbiAgICBpZiAodHlwZW9mIGl0ZXJhdG9yRm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiBpdGVyYXRvckZuO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDb2xsZWN0aW9uIG9mIG1ldGhvZHMgdGhhdCBhbGxvdyBkZWNsYXJhdGlvbiBhbmQgdmFsaWRhdGlvbiBvZiBwcm9wcyB0aGF0IGFyZVxuICAgKiBzdXBwbGllZCB0byBSZWFjdCBjb21wb25lbnRzLiBFeGFtcGxlIHVzYWdlOlxuICAgKlxuICAgKiAgIHZhciBQcm9wcyA9IHJlcXVpcmUoJ1JlYWN0UHJvcFR5cGVzJyk7XG4gICAqICAgdmFyIE15QXJ0aWNsZSA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgICogICAgIHByb3BUeXBlczoge1xuICAgKiAgICAgICAvLyBBbiBvcHRpb25hbCBzdHJpbmcgcHJvcCBuYW1lZCBcImRlc2NyaXB0aW9uXCIuXG4gICAqICAgICAgIGRlc2NyaXB0aW9uOiBQcm9wcy5zdHJpbmcsXG4gICAqXG4gICAqICAgICAgIC8vIEEgcmVxdWlyZWQgZW51bSBwcm9wIG5hbWVkIFwiY2F0ZWdvcnlcIi5cbiAgICogICAgICAgY2F0ZWdvcnk6IFByb3BzLm9uZU9mKFsnTmV3cycsJ1Bob3RvcyddKS5pc1JlcXVpcmVkLFxuICAgKlxuICAgKiAgICAgICAvLyBBIHByb3AgbmFtZWQgXCJkaWFsb2dcIiB0aGF0IHJlcXVpcmVzIGFuIGluc3RhbmNlIG9mIERpYWxvZy5cbiAgICogICAgICAgZGlhbG9nOiBQcm9wcy5pbnN0YW5jZU9mKERpYWxvZykuaXNSZXF1aXJlZFxuICAgKiAgICAgfSxcbiAgICogICAgIHJlbmRlcjogZnVuY3Rpb24oKSB7IC4uLiB9XG4gICAqICAgfSk7XG4gICAqXG4gICAqIEEgbW9yZSBmb3JtYWwgc3BlY2lmaWNhdGlvbiBvZiBob3cgdGhlc2UgbWV0aG9kcyBhcmUgdXNlZDpcbiAgICpcbiAgICogICB0eXBlIDo9IGFycmF5fGJvb2x8ZnVuY3xvYmplY3R8bnVtYmVyfHN0cmluZ3xvbmVPZihbLi4uXSl8aW5zdGFuY2VPZiguLi4pXG4gICAqICAgZGVjbCA6PSBSZWFjdFByb3BUeXBlcy57dHlwZX0oLmlzUmVxdWlyZWQpP1xuICAgKlxuICAgKiBFYWNoIGFuZCBldmVyeSBkZWNsYXJhdGlvbiBwcm9kdWNlcyBhIGZ1bmN0aW9uIHdpdGggdGhlIHNhbWUgc2lnbmF0dXJlLiBUaGlzXG4gICAqIGFsbG93cyB0aGUgY3JlYXRpb24gb2YgY3VzdG9tIHZhbGlkYXRpb24gZnVuY3Rpb25zLiBGb3IgZXhhbXBsZTpcbiAgICpcbiAgICogIHZhciBNeUxpbmsgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gICAqICAgIHByb3BUeXBlczoge1xuICAgKiAgICAgIC8vIEFuIG9wdGlvbmFsIHN0cmluZyBvciBVUkkgcHJvcCBuYW1lZCBcImhyZWZcIi5cbiAgICogICAgICBocmVmOiBmdW5jdGlvbihwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUpIHtcbiAgICogICAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAqICAgICAgICBpZiAocHJvcFZhbHVlICE9IG51bGwgJiYgdHlwZW9mIHByb3BWYWx1ZSAhPT0gJ3N0cmluZycgJiZcbiAgICogICAgICAgICAgICAhKHByb3BWYWx1ZSBpbnN0YW5jZW9mIFVSSSkpIHtcbiAgICogICAgICAgICAgcmV0dXJuIG5ldyBFcnJvcihcbiAgICogICAgICAgICAgICAnRXhwZWN0ZWQgYSBzdHJpbmcgb3IgYW4gVVJJIGZvciAnICsgcHJvcE5hbWUgKyAnIGluICcgK1xuICAgKiAgICAgICAgICAgIGNvbXBvbmVudE5hbWVcbiAgICogICAgICAgICAgKTtcbiAgICogICAgICAgIH1cbiAgICogICAgICB9XG4gICAqICAgIH0sXG4gICAqICAgIHJlbmRlcjogZnVuY3Rpb24oKSB7Li4ufVxuICAgKiAgfSk7XG4gICAqXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cblxuICB2YXIgQU5PTllNT1VTID0gJzw8YW5vbnltb3VzPj4nO1xuXG4gIC8vIEltcG9ydGFudCFcbiAgLy8gS2VlcCB0aGlzIGxpc3QgaW4gc3luYyB3aXRoIHByb2R1Y3Rpb24gdmVyc2lvbiBpbiBgLi9mYWN0b3J5V2l0aFRocm93aW5nU2hpbXMuanNgLlxuICB2YXIgUmVhY3RQcm9wVHlwZXMgPSB7XG4gICAgYXJyYXk6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdhcnJheScpLFxuICAgIGJvb2w6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdib29sZWFuJyksXG4gICAgZnVuYzogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ2Z1bmN0aW9uJyksXG4gICAgbnVtYmVyOiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignbnVtYmVyJyksXG4gICAgb2JqZWN0OiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignb2JqZWN0JyksXG4gICAgc3RyaW5nOiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignc3RyaW5nJyksXG4gICAgc3ltYm9sOiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignc3ltYm9sJyksXG5cbiAgICBhbnk6IGNyZWF0ZUFueVR5cGVDaGVja2VyKCksXG4gICAgYXJyYXlPZjogY3JlYXRlQXJyYXlPZlR5cGVDaGVja2VyLFxuICAgIGVsZW1lbnQ6IGNyZWF0ZUVsZW1lbnRUeXBlQ2hlY2tlcigpLFxuICAgIGVsZW1lbnRUeXBlOiBjcmVhdGVFbGVtZW50VHlwZVR5cGVDaGVja2VyKCksXG4gICAgaW5zdGFuY2VPZjogY3JlYXRlSW5zdGFuY2VUeXBlQ2hlY2tlcixcbiAgICBub2RlOiBjcmVhdGVOb2RlQ2hlY2tlcigpLFxuICAgIG9iamVjdE9mOiBjcmVhdGVPYmplY3RPZlR5cGVDaGVja2VyLFxuICAgIG9uZU9mOiBjcmVhdGVFbnVtVHlwZUNoZWNrZXIsXG4gICAgb25lT2ZUeXBlOiBjcmVhdGVVbmlvblR5cGVDaGVja2VyLFxuICAgIHNoYXBlOiBjcmVhdGVTaGFwZVR5cGVDaGVja2VyLFxuICAgIGV4YWN0OiBjcmVhdGVTdHJpY3RTaGFwZVR5cGVDaGVja2VyLFxuICB9O1xuXG4gIC8qKlxuICAgKiBpbmxpbmVkIE9iamVjdC5pcyBwb2x5ZmlsbCB0byBhdm9pZCByZXF1aXJpbmcgY29uc3VtZXJzIHNoaXAgdGhlaXIgb3duXG4gICAqIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL09iamVjdC9pc1xuICAgKi9cbiAgLyplc2xpbnQtZGlzYWJsZSBuby1zZWxmLWNvbXBhcmUqL1xuICBmdW5jdGlvbiBpcyh4LCB5KSB7XG4gICAgLy8gU2FtZVZhbHVlIGFsZ29yaXRobVxuICAgIGlmICh4ID09PSB5KSB7XG4gICAgICAvLyBTdGVwcyAxLTUsIDctMTBcbiAgICAgIC8vIFN0ZXBzIDYuYi02LmU6ICswICE9IC0wXG4gICAgICByZXR1cm4geCAhPT0gMCB8fCAxIC8geCA9PT0gMSAvIHk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFN0ZXAgNi5hOiBOYU4gPT0gTmFOXG4gICAgICByZXR1cm4geCAhPT0geCAmJiB5ICE9PSB5O1xuICAgIH1cbiAgfVxuICAvKmVzbGludC1lbmFibGUgbm8tc2VsZi1jb21wYXJlKi9cblxuICAvKipcbiAgICogV2UgdXNlIGFuIEVycm9yLWxpa2Ugb2JqZWN0IGZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5IGFzIHBlb3BsZSBtYXkgY2FsbFxuICAgKiBQcm9wVHlwZXMgZGlyZWN0bHkgYW5kIGluc3BlY3QgdGhlaXIgb3V0cHV0LiBIb3dldmVyLCB3ZSBkb24ndCB1c2UgcmVhbFxuICAgKiBFcnJvcnMgYW55bW9yZS4gV2UgZG9uJ3QgaW5zcGVjdCB0aGVpciBzdGFjayBhbnl3YXksIGFuZCBjcmVhdGluZyB0aGVtXG4gICAqIGlzIHByb2hpYml0aXZlbHkgZXhwZW5zaXZlIGlmIHRoZXkgYXJlIGNyZWF0ZWQgdG9vIG9mdGVuLCBzdWNoIGFzIHdoYXRcbiAgICogaGFwcGVucyBpbiBvbmVPZlR5cGUoKSBmb3IgYW55IHR5cGUgYmVmb3JlIHRoZSBvbmUgdGhhdCBtYXRjaGVkLlxuICAgKi9cbiAgZnVuY3Rpb24gUHJvcFR5cGVFcnJvcihtZXNzYWdlKSB7XG4gICAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcbiAgICB0aGlzLnN0YWNrID0gJyc7XG4gIH1cbiAgLy8gTWFrZSBgaW5zdGFuY2VvZiBFcnJvcmAgc3RpbGwgd29yayBmb3IgcmV0dXJuZWQgZXJyb3JzLlxuICBQcm9wVHlwZUVycm9yLnByb3RvdHlwZSA9IEVycm9yLnByb3RvdHlwZTtcblxuICBmdW5jdGlvbiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSkge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICB2YXIgbWFudWFsUHJvcFR5cGVDYWxsQ2FjaGUgPSB7fTtcbiAgICAgIHZhciBtYW51YWxQcm9wVHlwZVdhcm5pbmdDb3VudCA9IDA7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNoZWNrVHlwZShpc1JlcXVpcmVkLCBwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUsIHNlY3JldCkge1xuICAgICAgY29tcG9uZW50TmFtZSA9IGNvbXBvbmVudE5hbWUgfHwgQU5PTllNT1VTO1xuICAgICAgcHJvcEZ1bGxOYW1lID0gcHJvcEZ1bGxOYW1lIHx8IHByb3BOYW1lO1xuXG4gICAgICBpZiAoc2VjcmV0ICE9PSBSZWFjdFByb3BUeXBlc1NlY3JldCkge1xuICAgICAgICBpZiAodGhyb3dPbkRpcmVjdEFjY2Vzcykge1xuICAgICAgICAgIC8vIE5ldyBiZWhhdmlvciBvbmx5IGZvciB1c2VycyBvZiBgcHJvcC10eXBlc2AgcGFja2FnZVxuICAgICAgICAgIHZhciBlcnIgPSBuZXcgRXJyb3IoXG4gICAgICAgICAgICAnQ2FsbGluZyBQcm9wVHlwZXMgdmFsaWRhdG9ycyBkaXJlY3RseSBpcyBub3Qgc3VwcG9ydGVkIGJ5IHRoZSBgcHJvcC10eXBlc2AgcGFja2FnZS4gJyArXG4gICAgICAgICAgICAnVXNlIGBQcm9wVHlwZXMuY2hlY2tQcm9wVHlwZXMoKWAgdG8gY2FsbCB0aGVtLiAnICtcbiAgICAgICAgICAgICdSZWFkIG1vcmUgYXQgaHR0cDovL2ZiLm1lL3VzZS1jaGVjay1wcm9wLXR5cGVzJ1xuICAgICAgICAgICk7XG4gICAgICAgICAgZXJyLm5hbWUgPSAnSW52YXJpYW50IFZpb2xhdGlvbic7XG4gICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICB9IGVsc2UgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgdHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgLy8gT2xkIGJlaGF2aW9yIGZvciBwZW9wbGUgdXNpbmcgUmVhY3QuUHJvcFR5cGVzXG4gICAgICAgICAgdmFyIGNhY2hlS2V5ID0gY29tcG9uZW50TmFtZSArICc6JyArIHByb3BOYW1lO1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICFtYW51YWxQcm9wVHlwZUNhbGxDYWNoZVtjYWNoZUtleV0gJiZcbiAgICAgICAgICAgIC8vIEF2b2lkIHNwYW1taW5nIHRoZSBjb25zb2xlIGJlY2F1c2UgdGhleSBhcmUgb2Z0ZW4gbm90IGFjdGlvbmFibGUgZXhjZXB0IGZvciBsaWIgYXV0aG9yc1xuICAgICAgICAgICAgbWFudWFsUHJvcFR5cGVXYXJuaW5nQ291bnQgPCAzXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICBwcmludFdhcm5pbmcoXG4gICAgICAgICAgICAgICdZb3UgYXJlIG1hbnVhbGx5IGNhbGxpbmcgYSBSZWFjdC5Qcm9wVHlwZXMgdmFsaWRhdGlvbiAnICtcbiAgICAgICAgICAgICAgJ2Z1bmN0aW9uIGZvciB0aGUgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBwcm9wIG9uIGAnICsgY29tcG9uZW50TmFtZSAgKyAnYC4gVGhpcyBpcyBkZXByZWNhdGVkICcgK1xuICAgICAgICAgICAgICAnYW5kIHdpbGwgdGhyb3cgaW4gdGhlIHN0YW5kYWxvbmUgYHByb3AtdHlwZXNgIHBhY2thZ2UuICcgK1xuICAgICAgICAgICAgICAnWW91IG1heSBiZSBzZWVpbmcgdGhpcyB3YXJuaW5nIGR1ZSB0byBhIHRoaXJkLXBhcnR5IFByb3BUeXBlcyAnICtcbiAgICAgICAgICAgICAgJ2xpYnJhcnkuIFNlZSBodHRwczovL2ZiLm1lL3JlYWN0LXdhcm5pbmctZG9udC1jYWxsLXByb3B0eXBlcyAnICsgJ2ZvciBkZXRhaWxzLidcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBtYW51YWxQcm9wVHlwZUNhbGxDYWNoZVtjYWNoZUtleV0gPSB0cnVlO1xuICAgICAgICAgICAgbWFudWFsUHJvcFR5cGVXYXJuaW5nQ291bnQrKztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChwcm9wc1twcm9wTmFtZV0gPT0gbnVsbCkge1xuICAgICAgICBpZiAoaXNSZXF1aXJlZCkge1xuICAgICAgICAgIGlmIChwcm9wc1twcm9wTmFtZV0gPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignVGhlICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBpcyBtYXJrZWQgYXMgcmVxdWlyZWQgJyArICgnaW4gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGJ1dCBpdHMgdmFsdWUgaXMgYG51bGxgLicpKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdUaGUgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIGlzIG1hcmtlZCBhcyByZXF1aXJlZCBpbiAnICsgKCdgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgYnV0IGl0cyB2YWx1ZSBpcyBgdW5kZWZpbmVkYC4nKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgY2hhaW5lZENoZWNrVHlwZSA9IGNoZWNrVHlwZS5iaW5kKG51bGwsIGZhbHNlKTtcbiAgICBjaGFpbmVkQ2hlY2tUeXBlLmlzUmVxdWlyZWQgPSBjaGVja1R5cGUuYmluZChudWxsLCB0cnVlKTtcblxuICAgIHJldHVybiBjaGFpbmVkQ2hlY2tUeXBlO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoZXhwZWN0ZWRUeXBlKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lLCBzZWNyZXQpIHtcbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgaWYgKHByb3BUeXBlICE9PSBleHBlY3RlZFR5cGUpIHtcbiAgICAgICAgLy8gYHByb3BWYWx1ZWAgYmVpbmcgaW5zdGFuY2Ugb2YsIHNheSwgZGF0ZS9yZWdleHAsIHBhc3MgdGhlICdvYmplY3QnXG4gICAgICAgIC8vIGNoZWNrLCBidXQgd2UgY2FuIG9mZmVyIGEgbW9yZSBwcmVjaXNlIGVycm9yIG1lc3NhZ2UgaGVyZSByYXRoZXIgdGhhblxuICAgICAgICAvLyAnb2YgdHlwZSBgb2JqZWN0YCcuXG4gICAgICAgIHZhciBwcmVjaXNlVHlwZSA9IGdldFByZWNpc2VUeXBlKHByb3BWYWx1ZSk7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgcHJlY2lzZVR5cGUgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgJykgKyAoJ2AnICsgZXhwZWN0ZWRUeXBlICsgJ2AuJykpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVBbnlUeXBlQ2hlY2tlcigpIHtcbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIoZW1wdHlGdW5jdGlvblRoYXRSZXR1cm5zTnVsbCk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVBcnJheU9mVHlwZUNoZWNrZXIodHlwZUNoZWNrZXIpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIGlmICh0eXBlb2YgdHlwZUNoZWNrZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdQcm9wZXJ0eSBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIGNvbXBvbmVudCBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCBoYXMgaW52YWxpZCBQcm9wVHlwZSBub3RhdGlvbiBpbnNpZGUgYXJyYXlPZi4nKTtcbiAgICAgIH1cbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICBpZiAoIUFycmF5LmlzQXJyYXkocHJvcFZhbHVlKSkge1xuICAgICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBwcm9wVHlwZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBhbiBhcnJheS4nKSk7XG4gICAgICB9XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BWYWx1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgZXJyb3IgPSB0eXBlQ2hlY2tlcihwcm9wVmFsdWUsIGksIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUgKyAnWycgKyBpICsgJ10nLCBSZWFjdFByb3BUeXBlc1NlY3JldCk7XG4gICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnRUeXBlQ2hlY2tlcigpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICBpZiAoIWlzVmFsaWRFbGVtZW50KHByb3BWYWx1ZSkpIHtcbiAgICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgcHJvcFR5cGUgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYSBzaW5nbGUgUmVhY3RFbGVtZW50LicpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlRWxlbWVudFR5cGVUeXBlQ2hlY2tlcigpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICBpZiAoIVJlYWN0SXMuaXNWYWxpZEVsZW1lbnRUeXBlKHByb3BWYWx1ZSkpIHtcbiAgICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgcHJvcFR5cGUgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYSBzaW5nbGUgUmVhY3RFbGVtZW50IHR5cGUuJykpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVJbnN0YW5jZVR5cGVDaGVja2VyKGV4cGVjdGVkQ2xhc3MpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIGlmICghKHByb3BzW3Byb3BOYW1lXSBpbnN0YW5jZW9mIGV4cGVjdGVkQ2xhc3MpKSB7XG4gICAgICAgIHZhciBleHBlY3RlZENsYXNzTmFtZSA9IGV4cGVjdGVkQ2xhc3MubmFtZSB8fCBBTk9OWU1PVVM7XG4gICAgICAgIHZhciBhY3R1YWxDbGFzc05hbWUgPSBnZXRDbGFzc05hbWUocHJvcHNbcHJvcE5hbWVdKTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgYWN0dWFsQ2xhc3NOYW1lICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkICcpICsgKCdpbnN0YW5jZSBvZiBgJyArIGV4cGVjdGVkQ2xhc3NOYW1lICsgJ2AuJykpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVFbnVtVHlwZUNoZWNrZXIoZXhwZWN0ZWRWYWx1ZXMpIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoZXhwZWN0ZWRWYWx1ZXMpKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICBwcmludFdhcm5pbmcoXG4gICAgICAgICAgICAnSW52YWxpZCBhcmd1bWVudHMgc3VwcGxpZWQgdG8gb25lT2YsIGV4cGVjdGVkIGFuIGFycmF5LCBnb3QgJyArIGFyZ3VtZW50cy5sZW5ndGggKyAnIGFyZ3VtZW50cy4gJyArXG4gICAgICAgICAgICAnQSBjb21tb24gbWlzdGFrZSBpcyB0byB3cml0ZSBvbmVPZih4LCB5LCB6KSBpbnN0ZWFkIG9mIG9uZU9mKFt4LCB5LCB6XSkuJ1xuICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcHJpbnRXYXJuaW5nKCdJbnZhbGlkIGFyZ3VtZW50IHN1cHBsaWVkIHRvIG9uZU9mLCBleHBlY3RlZCBhbiBhcnJheS4nKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGVtcHR5RnVuY3Rpb25UaGF0UmV0dXJuc051bGw7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBleHBlY3RlZFZhbHVlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoaXMocHJvcFZhbHVlLCBleHBlY3RlZFZhbHVlc1tpXSkpIHtcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB2YXIgdmFsdWVzU3RyaW5nID0gSlNPTi5zdHJpbmdpZnkoZXhwZWN0ZWRWYWx1ZXMsIGZ1bmN0aW9uIHJlcGxhY2VyKGtleSwgdmFsdWUpIHtcbiAgICAgICAgaWYgKGdldFByb3BUeXBlKHZhbHVlKSA9PT0gJ3N5bWJvbCcpIHtcbiAgICAgICAgICByZXR1cm4gU3RyaW5nKHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdmFsdWUgYCcgKyBTdHJpbmcocHJvcFZhbHVlKSArICdgICcgKyAoJ3N1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBvbmUgb2YgJyArIHZhbHVlc1N0cmluZyArICcuJykpO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlT2JqZWN0T2ZUeXBlQ2hlY2tlcih0eXBlQ2hlY2tlcikge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgaWYgKHR5cGVvZiB0eXBlQ2hlY2tlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ1Byb3BlcnR5IGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgY29tcG9uZW50IGAnICsgY29tcG9uZW50TmFtZSArICdgIGhhcyBpbnZhbGlkIFByb3BUeXBlIG5vdGF0aW9uIGluc2lkZSBvYmplY3RPZi4nKTtcbiAgICAgIH1cbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgaWYgKHByb3BUeXBlICE9PSAnb2JqZWN0Jykge1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBwcm9wVHlwZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBhbiBvYmplY3QuJykpO1xuICAgICAgfVxuICAgICAgZm9yICh2YXIga2V5IGluIHByb3BWYWx1ZSkge1xuICAgICAgICBpZiAoaGFzKHByb3BWYWx1ZSwga2V5KSkge1xuICAgICAgICAgIHZhciBlcnJvciA9IHR5cGVDaGVja2VyKHByb3BWYWx1ZSwga2V5LCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lICsgJy4nICsga2V5LCBSZWFjdFByb3BUeXBlc1NlY3JldCk7XG4gICAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgICAgIHJldHVybiBlcnJvcjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlVW5pb25UeXBlQ2hlY2tlcihhcnJheU9mVHlwZUNoZWNrZXJzKSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGFycmF5T2ZUeXBlQ2hlY2tlcnMpKSB7XG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gcHJpbnRXYXJuaW5nKCdJbnZhbGlkIGFyZ3VtZW50IHN1cHBsaWVkIHRvIG9uZU9mVHlwZSwgZXhwZWN0ZWQgYW4gaW5zdGFuY2Ugb2YgYXJyYXkuJykgOiB2b2lkIDA7XG4gICAgICByZXR1cm4gZW1wdHlGdW5jdGlvblRoYXRSZXR1cm5zTnVsbDtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFycmF5T2ZUeXBlQ2hlY2tlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBjaGVja2VyID0gYXJyYXlPZlR5cGVDaGVja2Vyc1tpXTtcbiAgICAgIGlmICh0eXBlb2YgY2hlY2tlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBwcmludFdhcm5pbmcoXG4gICAgICAgICAgJ0ludmFsaWQgYXJndW1lbnQgc3VwcGxpZWQgdG8gb25lT2ZUeXBlLiBFeHBlY3RlZCBhbiBhcnJheSBvZiBjaGVjayBmdW5jdGlvbnMsIGJ1dCAnICtcbiAgICAgICAgICAncmVjZWl2ZWQgJyArIGdldFBvc3RmaXhGb3JUeXBlV2FybmluZyhjaGVja2VyKSArICcgYXQgaW5kZXggJyArIGkgKyAnLidcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIGVtcHR5RnVuY3Rpb25UaGF0UmV0dXJuc051bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFycmF5T2ZUeXBlQ2hlY2tlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGNoZWNrZXIgPSBhcnJheU9mVHlwZUNoZWNrZXJzW2ldO1xuICAgICAgICBpZiAoY2hlY2tlcihwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUsIFJlYWN0UHJvcFR5cGVzU2VjcmV0KSA9PSBudWxsKSB7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBzdXBwbGllZCB0byAnICsgKCdgJyArIGNvbXBvbmVudE5hbWUgKyAnYC4nKSk7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVOb2RlQ2hlY2tlcigpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIGlmICghaXNOb2RlKHByb3BzW3Byb3BOYW1lXSkpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBzdXBwbGllZCB0byAnICsgKCdgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYSBSZWFjdE5vZGUuJykpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVTaGFwZVR5cGVDaGVja2VyKHNoYXBlVHlwZXMpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgaWYgKHByb3BUeXBlICE9PSAnb2JqZWN0Jykge1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgYCcgKyBwcm9wVHlwZSArICdgICcgKyAoJ3N1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBgb2JqZWN0YC4nKSk7XG4gICAgICB9XG4gICAgICBmb3IgKHZhciBrZXkgaW4gc2hhcGVUeXBlcykge1xuICAgICAgICB2YXIgY2hlY2tlciA9IHNoYXBlVHlwZXNba2V5XTtcbiAgICAgICAgaWYgKCFjaGVja2VyKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGVycm9yID0gY2hlY2tlcihwcm9wVmFsdWUsIGtleSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSArICcuJyArIGtleSwgUmVhY3RQcm9wVHlwZXNTZWNyZXQpO1xuICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlU3RyaWN0U2hhcGVUeXBlQ2hlY2tlcihzaGFwZVR5cGVzKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgIGlmIChwcm9wVHlwZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlIGAnICsgcHJvcFR5cGUgKyAnYCAnICsgKCdzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYG9iamVjdGAuJykpO1xuICAgICAgfVxuICAgICAgLy8gV2UgbmVlZCB0byBjaGVjayBhbGwga2V5cyBpbiBjYXNlIHNvbWUgYXJlIHJlcXVpcmVkIGJ1dCBtaXNzaW5nIGZyb21cbiAgICAgIC8vIHByb3BzLlxuICAgICAgdmFyIGFsbEtleXMgPSBhc3NpZ24oe30sIHByb3BzW3Byb3BOYW1lXSwgc2hhcGVUeXBlcyk7XG4gICAgICBmb3IgKHZhciBrZXkgaW4gYWxsS2V5cykge1xuICAgICAgICB2YXIgY2hlY2tlciA9IHNoYXBlVHlwZXNba2V5XTtcbiAgICAgICAgaWYgKCFjaGVja2VyKSB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKFxuICAgICAgICAgICAgJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIGtleSBgJyArIGtleSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLicgK1xuICAgICAgICAgICAgJ1xcbkJhZCBvYmplY3Q6ICcgKyBKU09OLnN0cmluZ2lmeShwcm9wc1twcm9wTmFtZV0sIG51bGwsICcgICcpICtcbiAgICAgICAgICAgICdcXG5WYWxpZCBrZXlzOiAnICsgIEpTT04uc3RyaW5naWZ5KE9iamVjdC5rZXlzKHNoYXBlVHlwZXMpLCBudWxsLCAnICAnKVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGVycm9yID0gY2hlY2tlcihwcm9wVmFsdWUsIGtleSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSArICcuJyArIGtleSwgUmVhY3RQcm9wVHlwZXNTZWNyZXQpO1xuICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBpc05vZGUocHJvcFZhbHVlKSB7XG4gICAgc3dpdGNoICh0eXBlb2YgcHJvcFZhbHVlKSB7XG4gICAgICBjYXNlICdudW1iZXInOlxuICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgIGNhc2UgJ3VuZGVmaW5lZCc6XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgY2FzZSAnYm9vbGVhbic6XG4gICAgICAgIHJldHVybiAhcHJvcFZhbHVlO1xuICAgICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkocHJvcFZhbHVlKSkge1xuICAgICAgICAgIHJldHVybiBwcm9wVmFsdWUuZXZlcnkoaXNOb2RlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocHJvcFZhbHVlID09PSBudWxsIHx8IGlzVmFsaWRFbGVtZW50KHByb3BWYWx1ZSkpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBpdGVyYXRvckZuID0gZ2V0SXRlcmF0b3JGbihwcm9wVmFsdWUpO1xuICAgICAgICBpZiAoaXRlcmF0b3JGbikge1xuICAgICAgICAgIHZhciBpdGVyYXRvciA9IGl0ZXJhdG9yRm4uY2FsbChwcm9wVmFsdWUpO1xuICAgICAgICAgIHZhciBzdGVwO1xuICAgICAgICAgIGlmIChpdGVyYXRvckZuICE9PSBwcm9wVmFsdWUuZW50cmllcykge1xuICAgICAgICAgICAgd2hpbGUgKCEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZSkge1xuICAgICAgICAgICAgICBpZiAoIWlzTm9kZShzdGVwLnZhbHVlKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBJdGVyYXRvciB3aWxsIHByb3ZpZGUgZW50cnkgW2ssdl0gdHVwbGVzIHJhdGhlciB0aGFuIHZhbHVlcy5cbiAgICAgICAgICAgIHdoaWxlICghKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmUpIHtcbiAgICAgICAgICAgICAgdmFyIGVudHJ5ID0gc3RlcC52YWx1ZTtcbiAgICAgICAgICAgICAgaWYgKGVudHJ5KSB7XG4gICAgICAgICAgICAgICAgaWYgKCFpc05vZGUoZW50cnlbMV0pKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGlzU3ltYm9sKHByb3BUeXBlLCBwcm9wVmFsdWUpIHtcbiAgICAvLyBOYXRpdmUgU3ltYm9sLlxuICAgIGlmIChwcm9wVHlwZSA9PT0gJ3N5bWJvbCcpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIC8vIDE5LjQuMy41IFN5bWJvbC5wcm90b3R5cGVbQEB0b1N0cmluZ1RhZ10gPT09ICdTeW1ib2wnXG4gICAgaWYgKHByb3BWYWx1ZVsnQEB0b1N0cmluZ1RhZyddID09PSAnU3ltYm9sJykge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgLy8gRmFsbGJhY2sgZm9yIG5vbi1zcGVjIGNvbXBsaWFudCBTeW1ib2xzIHdoaWNoIGFyZSBwb2x5ZmlsbGVkLlxuICAgIGlmICh0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIHByb3BWYWx1ZSBpbnN0YW5jZW9mIFN5bWJvbCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLy8gRXF1aXZhbGVudCBvZiBgdHlwZW9mYCBidXQgd2l0aCBzcGVjaWFsIGhhbmRsaW5nIGZvciBhcnJheSBhbmQgcmVnZXhwLlxuICBmdW5jdGlvbiBnZXRQcm9wVHlwZShwcm9wVmFsdWUpIHtcbiAgICB2YXIgcHJvcFR5cGUgPSB0eXBlb2YgcHJvcFZhbHVlO1xuICAgIGlmIChBcnJheS5pc0FycmF5KHByb3BWYWx1ZSkpIHtcbiAgICAgIHJldHVybiAnYXJyYXknO1xuICAgIH1cbiAgICBpZiAocHJvcFZhbHVlIGluc3RhbmNlb2YgUmVnRXhwKSB7XG4gICAgICAvLyBPbGQgd2Via2l0cyAoYXQgbGVhc3QgdW50aWwgQW5kcm9pZCA0LjApIHJldHVybiAnZnVuY3Rpb24nIHJhdGhlciB0aGFuXG4gICAgICAvLyAnb2JqZWN0JyBmb3IgdHlwZW9mIGEgUmVnRXhwLiBXZSdsbCBub3JtYWxpemUgdGhpcyBoZXJlIHNvIHRoYXQgL2JsYS9cbiAgICAgIC8vIHBhc3NlcyBQcm9wVHlwZXMub2JqZWN0LlxuICAgICAgcmV0dXJuICdvYmplY3QnO1xuICAgIH1cbiAgICBpZiAoaXNTeW1ib2wocHJvcFR5cGUsIHByb3BWYWx1ZSkpIHtcbiAgICAgIHJldHVybiAnc3ltYm9sJztcbiAgICB9XG4gICAgcmV0dXJuIHByb3BUeXBlO1xuICB9XG5cbiAgLy8gVGhpcyBoYW5kbGVzIG1vcmUgdHlwZXMgdGhhbiBgZ2V0UHJvcFR5cGVgLiBPbmx5IHVzZWQgZm9yIGVycm9yIG1lc3NhZ2VzLlxuICAvLyBTZWUgYGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyYC5cbiAgZnVuY3Rpb24gZ2V0UHJlY2lzZVR5cGUocHJvcFZhbHVlKSB7XG4gICAgaWYgKHR5cGVvZiBwcm9wVmFsdWUgPT09ICd1bmRlZmluZWQnIHx8IHByb3BWYWx1ZSA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuICcnICsgcHJvcFZhbHVlO1xuICAgIH1cbiAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgIGlmIChwcm9wVHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGlmIChwcm9wVmFsdWUgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICAgIHJldHVybiAnZGF0ZSc7XG4gICAgICB9IGVsc2UgaWYgKHByb3BWYWx1ZSBpbnN0YW5jZW9mIFJlZ0V4cCkge1xuICAgICAgICByZXR1cm4gJ3JlZ2V4cCc7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBwcm9wVHlwZTtcbiAgfVxuXG4gIC8vIFJldHVybnMgYSBzdHJpbmcgdGhhdCBpcyBwb3N0Zml4ZWQgdG8gYSB3YXJuaW5nIGFib3V0IGFuIGludmFsaWQgdHlwZS5cbiAgLy8gRm9yIGV4YW1wbGUsIFwidW5kZWZpbmVkXCIgb3IgXCJvZiB0eXBlIGFycmF5XCJcbiAgZnVuY3Rpb24gZ2V0UG9zdGZpeEZvclR5cGVXYXJuaW5nKHZhbHVlKSB7XG4gICAgdmFyIHR5cGUgPSBnZXRQcmVjaXNlVHlwZSh2YWx1ZSk7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlICdhcnJheSc6XG4gICAgICBjYXNlICdvYmplY3QnOlxuICAgICAgICByZXR1cm4gJ2FuICcgKyB0eXBlO1xuICAgICAgY2FzZSAnYm9vbGVhbic6XG4gICAgICBjYXNlICdkYXRlJzpcbiAgICAgIGNhc2UgJ3JlZ2V4cCc6XG4gICAgICAgIHJldHVybiAnYSAnICsgdHlwZTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiB0eXBlO1xuICAgIH1cbiAgfVxuXG4gIC8vIFJldHVybnMgY2xhc3MgbmFtZSBvZiB0aGUgb2JqZWN0LCBpZiBhbnkuXG4gIGZ1bmN0aW9uIGdldENsYXNzTmFtZShwcm9wVmFsdWUpIHtcbiAgICBpZiAoIXByb3BWYWx1ZS5jb25zdHJ1Y3RvciB8fCAhcHJvcFZhbHVlLmNvbnN0cnVjdG9yLm5hbWUpIHtcbiAgICAgIHJldHVybiBBTk9OWU1PVVM7XG4gICAgfVxuICAgIHJldHVybiBwcm9wVmFsdWUuY29uc3RydWN0b3IubmFtZTtcbiAgfVxuXG4gIFJlYWN0UHJvcFR5cGVzLmNoZWNrUHJvcFR5cGVzID0gY2hlY2tQcm9wVHlwZXM7XG4gIFJlYWN0UHJvcFR5cGVzLnJlc2V0V2FybmluZ0NhY2hlID0gY2hlY2tQcm9wVHlwZXMucmVzZXRXYXJuaW5nQ2FjaGU7XG4gIFJlYWN0UHJvcFR5cGVzLlByb3BUeXBlcyA9IFJlYWN0UHJvcFR5cGVzO1xuXG4gIHJldHVybiBSZWFjdFByb3BUeXBlcztcbn07XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIFJlYWN0UHJvcFR5cGVzU2VjcmV0ID0gcmVxdWlyZSgnLi9saWIvUmVhY3RQcm9wVHlwZXNTZWNyZXQnKTtcblxuZnVuY3Rpb24gZW1wdHlGdW5jdGlvbigpIHt9XG5mdW5jdGlvbiBlbXB0eUZ1bmN0aW9uV2l0aFJlc2V0KCkge31cbmVtcHR5RnVuY3Rpb25XaXRoUmVzZXQucmVzZXRXYXJuaW5nQ2FjaGUgPSBlbXB0eUZ1bmN0aW9uO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiBzaGltKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSwgc2VjcmV0KSB7XG4gICAgaWYgKHNlY3JldCA9PT0gUmVhY3RQcm9wVHlwZXNTZWNyZXQpIHtcbiAgICAgIC8vIEl0IGlzIHN0aWxsIHNhZmUgd2hlbiBjYWxsZWQgZnJvbSBSZWFjdC5cbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIGVyciA9IG5ldyBFcnJvcihcbiAgICAgICdDYWxsaW5nIFByb3BUeXBlcyB2YWxpZGF0b3JzIGRpcmVjdGx5IGlzIG5vdCBzdXBwb3J0ZWQgYnkgdGhlIGBwcm9wLXR5cGVzYCBwYWNrYWdlLiAnICtcbiAgICAgICdVc2UgUHJvcFR5cGVzLmNoZWNrUHJvcFR5cGVzKCkgdG8gY2FsbCB0aGVtLiAnICtcbiAgICAgICdSZWFkIG1vcmUgYXQgaHR0cDovL2ZiLm1lL3VzZS1jaGVjay1wcm9wLXR5cGVzJ1xuICAgICk7XG4gICAgZXJyLm5hbWUgPSAnSW52YXJpYW50IFZpb2xhdGlvbic7XG4gICAgdGhyb3cgZXJyO1xuICB9O1xuICBzaGltLmlzUmVxdWlyZWQgPSBzaGltO1xuICBmdW5jdGlvbiBnZXRTaGltKCkge1xuICAgIHJldHVybiBzaGltO1xuICB9O1xuICAvLyBJbXBvcnRhbnQhXG4gIC8vIEtlZXAgdGhpcyBsaXN0IGluIHN5bmMgd2l0aCBwcm9kdWN0aW9uIHZlcnNpb24gaW4gYC4vZmFjdG9yeVdpdGhUeXBlQ2hlY2tlcnMuanNgLlxuICB2YXIgUmVhY3RQcm9wVHlwZXMgPSB7XG4gICAgYXJyYXk6IHNoaW0sXG4gICAgYm9vbDogc2hpbSxcbiAgICBmdW5jOiBzaGltLFxuICAgIG51bWJlcjogc2hpbSxcbiAgICBvYmplY3Q6IHNoaW0sXG4gICAgc3RyaW5nOiBzaGltLFxuICAgIHN5bWJvbDogc2hpbSxcblxuICAgIGFueTogc2hpbSxcbiAgICBhcnJheU9mOiBnZXRTaGltLFxuICAgIGVsZW1lbnQ6IHNoaW0sXG4gICAgZWxlbWVudFR5cGU6IHNoaW0sXG4gICAgaW5zdGFuY2VPZjogZ2V0U2hpbSxcbiAgICBub2RlOiBzaGltLFxuICAgIG9iamVjdE9mOiBnZXRTaGltLFxuICAgIG9uZU9mOiBnZXRTaGltLFxuICAgIG9uZU9mVHlwZTogZ2V0U2hpbSxcbiAgICBzaGFwZTogZ2V0U2hpbSxcbiAgICBleGFjdDogZ2V0U2hpbSxcblxuICAgIGNoZWNrUHJvcFR5cGVzOiBlbXB0eUZ1bmN0aW9uV2l0aFJlc2V0LFxuICAgIHJlc2V0V2FybmluZ0NhY2hlOiBlbXB0eUZ1bmN0aW9uXG4gIH07XG5cbiAgUmVhY3RQcm9wVHlwZXMuUHJvcFR5cGVzID0gUmVhY3RQcm9wVHlwZXM7XG5cbiAgcmV0dXJuIFJlYWN0UHJvcFR5cGVzO1xufTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgdmFyIFJlYWN0SXMgPSByZXF1aXJlKCdyZWFjdC1pcycpO1xuXG4gIC8vIEJ5IGV4cGxpY2l0bHkgdXNpbmcgYHByb3AtdHlwZXNgIHlvdSBhcmUgb3B0aW5nIGludG8gbmV3IGRldmVsb3BtZW50IGJlaGF2aW9yLlxuICAvLyBodHRwOi8vZmIubWUvcHJvcC10eXBlcy1pbi1wcm9kXG4gIHZhciB0aHJvd09uRGlyZWN0QWNjZXNzID0gdHJ1ZTtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2ZhY3RvcnlXaXRoVHlwZUNoZWNrZXJzJykoUmVhY3RJcy5pc0VsZW1lbnQsIHRocm93T25EaXJlY3RBY2Nlc3MpO1xufSBlbHNlIHtcbiAgLy8gQnkgZXhwbGljaXRseSB1c2luZyBgcHJvcC10eXBlc2AgeW91IGFyZSBvcHRpbmcgaW50byBuZXcgcHJvZHVjdGlvbiBiZWhhdmlvci5cbiAgLy8gaHR0cDovL2ZiLm1lL3Byb3AtdHlwZXMtaW4tcHJvZFxuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZmFjdG9yeVdpdGhUaHJvd2luZ1NoaW1zJykoKTtcbn1cbiIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgZGVmYXVsdDogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IGhhc0NsYXNzO1xuXG5mdW5jdGlvbiBoYXNDbGFzcyhlbGVtZW50LCBjbGFzc05hbWUpIHtcbiAgaWYgKGVsZW1lbnQuY2xhc3NMaXN0KSByZXR1cm4gISFjbGFzc05hbWUgJiYgZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoY2xhc3NOYW1lKTtlbHNlIHJldHVybiAoXCIgXCIgKyAoZWxlbWVudC5jbGFzc05hbWUuYmFzZVZhbCB8fCBlbGVtZW50LmNsYXNzTmFtZSkgKyBcIiBcIikuaW5kZXhPZihcIiBcIiArIGNsYXNzTmFtZSArIFwiIFwiKSAhPT0gLTE7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1tcImRlZmF1bHRcIl07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gYWRkQ2xhc3M7XG5cbnZhciBfaGFzQ2xhc3MgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2hhc0NsYXNzXCIpKTtcblxuZnVuY3Rpb24gYWRkQ2xhc3MoZWxlbWVudCwgY2xhc3NOYW1lKSB7XG4gIGlmIChlbGVtZW50LmNsYXNzTGlzdCkgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7ZWxzZSBpZiAoISgwLCBfaGFzQ2xhc3MuZGVmYXVsdCkoZWxlbWVudCwgY2xhc3NOYW1lKSkgaWYgKHR5cGVvZiBlbGVtZW50LmNsYXNzTmFtZSA9PT0gJ3N0cmluZycpIGVsZW1lbnQuY2xhc3NOYW1lID0gZWxlbWVudC5jbGFzc05hbWUgKyAnICcgKyBjbGFzc05hbWU7ZWxzZSBlbGVtZW50LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAoZWxlbWVudC5jbGFzc05hbWUgJiYgZWxlbWVudC5jbGFzc05hbWUuYmFzZVZhbCB8fCAnJykgKyAnICcgKyBjbGFzc05hbWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdOyIsIid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gcmVwbGFjZUNsYXNzTmFtZShvcmlnQ2xhc3MsIGNsYXNzVG9SZW1vdmUpIHtcbiAgcmV0dXJuIG9yaWdDbGFzcy5yZXBsYWNlKG5ldyBSZWdFeHAoJyhefFxcXFxzKScgKyBjbGFzc1RvUmVtb3ZlICsgJyg/OlxcXFxzfCQpJywgJ2cnKSwgJyQxJykucmVwbGFjZSgvXFxzKy9nLCAnICcpLnJlcGxhY2UoL15cXHMqfFxccyokL2csICcnKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiByZW1vdmVDbGFzcyhlbGVtZW50LCBjbGFzc05hbWUpIHtcbiAgaWYgKGVsZW1lbnQuY2xhc3NMaXN0KSBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTtlbHNlIGlmICh0eXBlb2YgZWxlbWVudC5jbGFzc05hbWUgPT09ICdzdHJpbmcnKSBlbGVtZW50LmNsYXNzTmFtZSA9IHJlcGxhY2VDbGFzc05hbWUoZWxlbWVudC5jbGFzc05hbWUsIGNsYXNzTmFtZSk7ZWxzZSBlbGVtZW50LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCByZXBsYWNlQ2xhc3NOYW1lKGVsZW1lbnQuY2xhc3NOYW1lICYmIGVsZW1lbnQuY2xhc3NOYW1lLmJhc2VWYWwgfHwgJycsIGNsYXNzTmFtZSkpO1xufTsiLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbmZ1bmN0aW9uIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgLy8gQ2FsbCB0aGlzLmNvbnN0cnVjdG9yLmdEU0ZQIHRvIHN1cHBvcnQgc3ViLWNsYXNzZXMuXG4gIHZhciBzdGF0ZSA9IHRoaXMuY29uc3RydWN0b3IuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzKHRoaXMucHJvcHMsIHRoaXMuc3RhdGUpO1xuICBpZiAoc3RhdGUgIT09IG51bGwgJiYgc3RhdGUgIT09IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuc2V0U3RhdGUoc3RhdGUpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gIC8vIENhbGwgdGhpcy5jb25zdHJ1Y3Rvci5nRFNGUCB0byBzdXBwb3J0IHN1Yi1jbGFzc2VzLlxuICAvLyBVc2UgdGhlIHNldFN0YXRlKCkgdXBkYXRlciB0byBlbnN1cmUgc3RhdGUgaXNuJ3Qgc3RhbGUgaW4gY2VydGFpbiBlZGdlIGNhc2VzLlxuICBmdW5jdGlvbiB1cGRhdGVyKHByZXZTdGF0ZSkge1xuICAgIHZhciBzdGF0ZSA9IHRoaXMuY29uc3RydWN0b3IuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzKG5leHRQcm9wcywgcHJldlN0YXRlKTtcbiAgICByZXR1cm4gc3RhdGUgIT09IG51bGwgJiYgc3RhdGUgIT09IHVuZGVmaW5lZCA/IHN0YXRlIDogbnVsbDtcbiAgfVxuICAvLyBCaW5kaW5nIFwidGhpc1wiIGlzIGltcG9ydGFudCBmb3Igc2hhbGxvdyByZW5kZXJlciBzdXBwb3J0LlxuICB0aGlzLnNldFN0YXRlKHVwZGF0ZXIuYmluZCh0aGlzKSk7XG59XG5cbmZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVcGRhdGUobmV4dFByb3BzLCBuZXh0U3RhdGUpIHtcbiAgdHJ5IHtcbiAgICB2YXIgcHJldlByb3BzID0gdGhpcy5wcm9wcztcbiAgICB2YXIgcHJldlN0YXRlID0gdGhpcy5zdGF0ZTtcbiAgICB0aGlzLnByb3BzID0gbmV4dFByb3BzO1xuICAgIHRoaXMuc3RhdGUgPSBuZXh0U3RhdGU7XG4gICAgdGhpcy5fX3JlYWN0SW50ZXJuYWxTbmFwc2hvdEZsYWcgPSB0cnVlO1xuICAgIHRoaXMuX19yZWFjdEludGVybmFsU25hcHNob3QgPSB0aGlzLmdldFNuYXBzaG90QmVmb3JlVXBkYXRlKFxuICAgICAgcHJldlByb3BzLFxuICAgICAgcHJldlN0YXRlXG4gICAgKTtcbiAgfSBmaW5hbGx5IHtcbiAgICB0aGlzLnByb3BzID0gcHJldlByb3BzO1xuICAgIHRoaXMuc3RhdGUgPSBwcmV2U3RhdGU7XG4gIH1cbn1cblxuLy8gUmVhY3QgbWF5IHdhcm4gYWJvdXQgY1dNL2NXUlAvY1dVIG1ldGhvZHMgYmVpbmcgZGVwcmVjYXRlZC5cbi8vIEFkZCBhIGZsYWcgdG8gc3VwcHJlc3MgdGhlc2Ugd2FybmluZ3MgZm9yIHRoaXMgc3BlY2lhbCBjYXNlLlxuY29tcG9uZW50V2lsbE1vdW50Ll9fc3VwcHJlc3NEZXByZWNhdGlvbldhcm5pbmcgPSB0cnVlO1xuY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcy5fX3N1cHByZXNzRGVwcmVjYXRpb25XYXJuaW5nID0gdHJ1ZTtcbmNvbXBvbmVudFdpbGxVcGRhdGUuX19zdXBwcmVzc0RlcHJlY2F0aW9uV2FybmluZyA9IHRydWU7XG5cbmZ1bmN0aW9uIHBvbHlmaWxsKENvbXBvbmVudCkge1xuICB2YXIgcHJvdG90eXBlID0gQ29tcG9uZW50LnByb3RvdHlwZTtcblxuICBpZiAoIXByb3RvdHlwZSB8fCAhcHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0NhbiBvbmx5IHBvbHlmaWxsIGNsYXNzIGNvbXBvbmVudHMnKTtcbiAgfVxuXG4gIGlmIChcbiAgICB0eXBlb2YgQ29tcG9uZW50LmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyAhPT0gJ2Z1bmN0aW9uJyAmJlxuICAgIHR5cGVvZiBwcm90b3R5cGUuZ2V0U25hcHNob3RCZWZvcmVVcGRhdGUgIT09ICdmdW5jdGlvbidcbiAgKSB7XG4gICAgcmV0dXJuIENvbXBvbmVudDtcbiAgfVxuXG4gIC8vIElmIG5ldyBjb21wb25lbnQgQVBJcyBhcmUgZGVmaW5lZCwgXCJ1bnNhZmVcIiBsaWZlY3ljbGVzIHdvbid0IGJlIGNhbGxlZC5cbiAgLy8gRXJyb3IgaWYgYW55IG9mIHRoZXNlIGxpZmVjeWNsZXMgYXJlIHByZXNlbnQsXG4gIC8vIEJlY2F1c2UgdGhleSB3b3VsZCB3b3JrIGRpZmZlcmVudGx5IGJldHdlZW4gb2xkZXIgYW5kIG5ld2VyICgxNi4zKykgdmVyc2lvbnMgb2YgUmVhY3QuXG4gIHZhciBmb3VuZFdpbGxNb3VudE5hbWUgPSBudWxsO1xuICB2YXIgZm91bmRXaWxsUmVjZWl2ZVByb3BzTmFtZSA9IG51bGw7XG4gIHZhciBmb3VuZFdpbGxVcGRhdGVOYW1lID0gbnVsbDtcbiAgaWYgKHR5cGVvZiBwcm90b3R5cGUuY29tcG9uZW50V2lsbE1vdW50ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgZm91bmRXaWxsTW91bnROYW1lID0gJ2NvbXBvbmVudFdpbGxNb3VudCc7XG4gIH0gZWxzZSBpZiAodHlwZW9mIHByb3RvdHlwZS5VTlNBRkVfY29tcG9uZW50V2lsbE1vdW50ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgZm91bmRXaWxsTW91bnROYW1lID0gJ1VOU0FGRV9jb21wb25lbnRXaWxsTW91bnQnO1xuICB9XG4gIGlmICh0eXBlb2YgcHJvdG90eXBlLmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMgPT09ICdmdW5jdGlvbicpIHtcbiAgICBmb3VuZFdpbGxSZWNlaXZlUHJvcHNOYW1lID0gJ2NvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMnO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBwcm90b3R5cGUuVU5TQUZFX2NvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMgPT09ICdmdW5jdGlvbicpIHtcbiAgICBmb3VuZFdpbGxSZWNlaXZlUHJvcHNOYW1lID0gJ1VOU0FGRV9jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzJztcbiAgfVxuICBpZiAodHlwZW9mIHByb3RvdHlwZS5jb21wb25lbnRXaWxsVXBkYXRlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgZm91bmRXaWxsVXBkYXRlTmFtZSA9ICdjb21wb25lbnRXaWxsVXBkYXRlJztcbiAgfSBlbHNlIGlmICh0eXBlb2YgcHJvdG90eXBlLlVOU0FGRV9jb21wb25lbnRXaWxsVXBkYXRlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgZm91bmRXaWxsVXBkYXRlTmFtZSA9ICdVTlNBRkVfY29tcG9uZW50V2lsbFVwZGF0ZSc7XG4gIH1cbiAgaWYgKFxuICAgIGZvdW5kV2lsbE1vdW50TmFtZSAhPT0gbnVsbCB8fFxuICAgIGZvdW5kV2lsbFJlY2VpdmVQcm9wc05hbWUgIT09IG51bGwgfHxcbiAgICBmb3VuZFdpbGxVcGRhdGVOYW1lICE9PSBudWxsXG4gICkge1xuICAgIHZhciBjb21wb25lbnROYW1lID0gQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvbmVudC5uYW1lO1xuICAgIHZhciBuZXdBcGlOYW1lID1cbiAgICAgIHR5cGVvZiBDb21wb25lbnQuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzID09PSAnZnVuY3Rpb24nXG4gICAgICAgID8gJ2dldERlcml2ZWRTdGF0ZUZyb21Qcm9wcygpJ1xuICAgICAgICA6ICdnZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZSgpJztcblxuICAgIHRocm93IEVycm9yKFxuICAgICAgJ1Vuc2FmZSBsZWdhY3kgbGlmZWN5Y2xlcyB3aWxsIG5vdCBiZSBjYWxsZWQgZm9yIGNvbXBvbmVudHMgdXNpbmcgbmV3IGNvbXBvbmVudCBBUElzLlxcblxcbicgK1xuICAgICAgICBjb21wb25lbnROYW1lICtcbiAgICAgICAgJyB1c2VzICcgK1xuICAgICAgICBuZXdBcGlOYW1lICtcbiAgICAgICAgJyBidXQgYWxzbyBjb250YWlucyB0aGUgZm9sbG93aW5nIGxlZ2FjeSBsaWZlY3ljbGVzOicgK1xuICAgICAgICAoZm91bmRXaWxsTW91bnROYW1lICE9PSBudWxsID8gJ1xcbiAgJyArIGZvdW5kV2lsbE1vdW50TmFtZSA6ICcnKSArXG4gICAgICAgIChmb3VuZFdpbGxSZWNlaXZlUHJvcHNOYW1lICE9PSBudWxsXG4gICAgICAgICAgPyAnXFxuICAnICsgZm91bmRXaWxsUmVjZWl2ZVByb3BzTmFtZVxuICAgICAgICAgIDogJycpICtcbiAgICAgICAgKGZvdW5kV2lsbFVwZGF0ZU5hbWUgIT09IG51bGwgPyAnXFxuICAnICsgZm91bmRXaWxsVXBkYXRlTmFtZSA6ICcnKSArXG4gICAgICAgICdcXG5cXG5UaGUgYWJvdmUgbGlmZWN5Y2xlcyBzaG91bGQgYmUgcmVtb3ZlZC4gTGVhcm4gbW9yZSBhYm91dCB0aGlzIHdhcm5pbmcgaGVyZTpcXG4nICtcbiAgICAgICAgJ2h0dHBzOi8vZmIubWUvcmVhY3QtYXN5bmMtY29tcG9uZW50LWxpZmVjeWNsZS1ob29rcydcbiAgICApO1xuICB9XG5cbiAgLy8gUmVhY3QgPD0gMTYuMiBkb2VzIG5vdCBzdXBwb3J0IHN0YXRpYyBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMuXG4gIC8vIEFzIGEgd29ya2Fyb3VuZCwgdXNlIGNXTSBhbmQgY1dSUCB0byBpbnZva2UgdGhlIG5ldyBzdGF0aWMgbGlmZWN5Y2xlLlxuICAvLyBOZXdlciB2ZXJzaW9ucyBvZiBSZWFjdCB3aWxsIGlnbm9yZSB0aGVzZSBsaWZlY3ljbGVzIGlmIGdEU0ZQIGV4aXN0cy5cbiAgaWYgKHR5cGVvZiBDb21wb25lbnQuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcHJvdG90eXBlLmNvbXBvbmVudFdpbGxNb3VudCA9IGNvbXBvbmVudFdpbGxNb3VudDtcbiAgICBwcm90b3R5cGUuY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyA9IGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHM7XG4gIH1cblxuICAvLyBSZWFjdCA8PSAxNi4yIGRvZXMgbm90IHN1cHBvcnQgZ2V0U25hcHNob3RCZWZvcmVVcGRhdGUuXG4gIC8vIEFzIGEgd29ya2Fyb3VuZCwgdXNlIGNXVSB0byBpbnZva2UgdGhlIG5ldyBsaWZlY3ljbGUuXG4gIC8vIE5ld2VyIHZlcnNpb25zIG9mIFJlYWN0IHdpbGwgaWdub3JlIHRoYXQgbGlmZWN5Y2xlIGlmIGdTQlUgZXhpc3RzLlxuICBpZiAodHlwZW9mIHByb3RvdHlwZS5nZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGlmICh0eXBlb2YgcHJvdG90eXBlLmNvbXBvbmVudERpZFVwZGF0ZSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAnQ2Fubm90IHBvbHlmaWxsIGdldFNuYXBzaG90QmVmb3JlVXBkYXRlKCkgZm9yIGNvbXBvbmVudHMgdGhhdCBkbyBub3QgZGVmaW5lIGNvbXBvbmVudERpZFVwZGF0ZSgpIG9uIHRoZSBwcm90b3R5cGUnXG4gICAgICApO1xuICAgIH1cblxuICAgIHByb3RvdHlwZS5jb21wb25lbnRXaWxsVXBkYXRlID0gY29tcG9uZW50V2lsbFVwZGF0ZTtcblxuICAgIHZhciBjb21wb25lbnREaWRVcGRhdGUgPSBwcm90b3R5cGUuY29tcG9uZW50RGlkVXBkYXRlO1xuXG4gICAgcHJvdG90eXBlLmNvbXBvbmVudERpZFVwZGF0ZSA9IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZVBvbHlmaWxsKFxuICAgICAgcHJldlByb3BzLFxuICAgICAgcHJldlN0YXRlLFxuICAgICAgbWF5YmVTbmFwc2hvdFxuICAgICkge1xuICAgICAgLy8gMTYuMysgd2lsbCBub3QgZXhlY3V0ZSBvdXIgd2lsbC11cGRhdGUgbWV0aG9kO1xuICAgICAgLy8gSXQgd2lsbCBwYXNzIGEgc25hcHNob3QgdmFsdWUgdG8gZGlkLXVwZGF0ZSB0aG91Z2guXG4gICAgICAvLyBPbGRlciB2ZXJzaW9ucyB3aWxsIHJlcXVpcmUgb3VyIHBvbHlmaWxsZWQgd2lsbC11cGRhdGUgdmFsdWUuXG4gICAgICAvLyBXZSBuZWVkIHRvIGhhbmRsZSBib3RoIGNhc2VzLCBidXQgY2FuJ3QganVzdCBjaGVjayBmb3IgdGhlIHByZXNlbmNlIG9mIFwibWF5YmVTbmFwc2hvdFwiLFxuICAgICAgLy8gQmVjYXVzZSBmb3IgPD0gMTUueCB2ZXJzaW9ucyB0aGlzIG1pZ2h0IGJlIGEgXCJwcmV2Q29udGV4dFwiIG9iamVjdC5cbiAgICAgIC8vIFdlIGFsc28gY2FuJ3QganVzdCBjaGVjayBcIl9fcmVhY3RJbnRlcm5hbFNuYXBzaG90XCIsXG4gICAgICAvLyBCZWNhdXNlIGdldC1zbmFwc2hvdCBtaWdodCByZXR1cm4gYSBmYWxzeSB2YWx1ZS5cbiAgICAgIC8vIFNvIGNoZWNrIGZvciB0aGUgZXhwbGljaXQgX19yZWFjdEludGVybmFsU25hcHNob3RGbGFnIGZsYWcgdG8gZGV0ZXJtaW5lIGJlaGF2aW9yLlxuICAgICAgdmFyIHNuYXBzaG90ID0gdGhpcy5fX3JlYWN0SW50ZXJuYWxTbmFwc2hvdEZsYWdcbiAgICAgICAgPyB0aGlzLl9fcmVhY3RJbnRlcm5hbFNuYXBzaG90XG4gICAgICAgIDogbWF5YmVTbmFwc2hvdDtcblxuICAgICAgY29tcG9uZW50RGlkVXBkYXRlLmNhbGwodGhpcywgcHJldlByb3BzLCBwcmV2U3RhdGUsIHNuYXBzaG90KTtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIENvbXBvbmVudDtcbn1cblxuZXhwb3J0IHsgcG9seWZpbGwgfTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5jbGFzc05hbWVzU2hhcGUgPSBleHBvcnRzLnRpbWVvdXRzU2hhcGUgPSB2b2lkIDA7XG5cbnZhciBfcHJvcFR5cGVzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicHJvcC10eXBlc1wiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciB0aW1lb3V0c1NoYXBlID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IF9wcm9wVHlwZXMuZGVmYXVsdC5vbmVPZlR5cGUoW19wcm9wVHlwZXMuZGVmYXVsdC5udW1iZXIsIF9wcm9wVHlwZXMuZGVmYXVsdC5zaGFwZSh7XG4gIGVudGVyOiBfcHJvcFR5cGVzLmRlZmF1bHQubnVtYmVyLFxuICBleGl0OiBfcHJvcFR5cGVzLmRlZmF1bHQubnVtYmVyLFxuICBhcHBlYXI6IF9wcm9wVHlwZXMuZGVmYXVsdC5udW1iZXJcbn0pLmlzUmVxdWlyZWRdKSA6IG51bGw7XG5leHBvcnRzLnRpbWVvdXRzU2hhcGUgPSB0aW1lb3V0c1NoYXBlO1xudmFyIGNsYXNzTmFtZXNTaGFwZSA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyBfcHJvcFR5cGVzLmRlZmF1bHQub25lT2ZUeXBlKFtfcHJvcFR5cGVzLmRlZmF1bHQuc3RyaW5nLCBfcHJvcFR5cGVzLmRlZmF1bHQuc2hhcGUoe1xuICBlbnRlcjogX3Byb3BUeXBlcy5kZWZhdWx0LnN0cmluZyxcbiAgZXhpdDogX3Byb3BUeXBlcy5kZWZhdWx0LnN0cmluZyxcbiAgYWN0aXZlOiBfcHJvcFR5cGVzLmRlZmF1bHQuc3RyaW5nXG59KSwgX3Byb3BUeXBlcy5kZWZhdWx0LnNoYXBlKHtcbiAgZW50ZXI6IF9wcm9wVHlwZXMuZGVmYXVsdC5zdHJpbmcsXG4gIGVudGVyRG9uZTogX3Byb3BUeXBlcy5kZWZhdWx0LnN0cmluZyxcbiAgZW50ZXJBY3RpdmU6IF9wcm9wVHlwZXMuZGVmYXVsdC5zdHJpbmcsXG4gIGV4aXQ6IF9wcm9wVHlwZXMuZGVmYXVsdC5zdHJpbmcsXG4gIGV4aXREb25lOiBfcHJvcFR5cGVzLmRlZmF1bHQuc3RyaW5nLFxuICBleGl0QWN0aXZlOiBfcHJvcFR5cGVzLmRlZmF1bHQuc3RyaW5nXG59KV0pIDogbnVsbDtcbmV4cG9ydHMuY2xhc3NOYW1lc1NoYXBlID0gY2xhc3NOYW1lc1NoYXBlOyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gZXhwb3J0cy5FWElUSU5HID0gZXhwb3J0cy5FTlRFUkVEID0gZXhwb3J0cy5FTlRFUklORyA9IGV4cG9ydHMuRVhJVEVEID0gZXhwb3J0cy5VTk1PVU5URUQgPSB2b2lkIDA7XG5cbnZhciBQcm9wVHlwZXMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicHJvcC10eXBlc1wiKSk7XG5cbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbnZhciBfcmVhY3REb20gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdC1kb21cIikpO1xuXG52YXIgX3JlYWN0TGlmZWN5Y2xlc0NvbXBhdCA9IHJlcXVpcmUoXCJyZWFjdC1saWZlY3ljbGVzLWNvbXBhdFwiKTtcblxudmFyIF9Qcm9wVHlwZXMgPSByZXF1aXJlKFwiLi91dGlscy9Qcm9wVHlwZXNcIik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikgeyBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7IHJldHVybiBvYmo7IH0gZWxzZSB7IHZhciBuZXdPYmogPSB7fTsgaWYgKG9iaiAhPSBudWxsKSB7IGZvciAodmFyIGtleSBpbiBvYmopIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHsgdmFyIGRlc2MgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDoge307IGlmIChkZXNjLmdldCB8fCBkZXNjLnNldCkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpOyB9IGVsc2UgeyBuZXdPYmpba2V5XSA9IG9ialtrZXldOyB9IH0gfSB9IG5ld09iai5kZWZhdWx0ID0gb2JqOyByZXR1cm4gbmV3T2JqOyB9IH1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCkgeyBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTsgdmFyIHRhcmdldCA9IHt9OyB2YXIgc291cmNlS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7IHZhciBrZXksIGk7IGZvciAoaSA9IDA7IGkgPCBzb3VyY2VLZXlzLmxlbmd0aDsgaSsrKSB7IGtleSA9IHNvdXJjZUtleXNbaV07IGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHNMb29zZShzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MucHJvdG90eXBlKTsgc3ViQ2xhc3MucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gc3ViQ2xhc3M7IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIFVOTU9VTlRFRCA9ICd1bm1vdW50ZWQnO1xuZXhwb3J0cy5VTk1PVU5URUQgPSBVTk1PVU5URUQ7XG52YXIgRVhJVEVEID0gJ2V4aXRlZCc7XG5leHBvcnRzLkVYSVRFRCA9IEVYSVRFRDtcbnZhciBFTlRFUklORyA9ICdlbnRlcmluZyc7XG5leHBvcnRzLkVOVEVSSU5HID0gRU5URVJJTkc7XG52YXIgRU5URVJFRCA9ICdlbnRlcmVkJztcbmV4cG9ydHMuRU5URVJFRCA9IEVOVEVSRUQ7XG52YXIgRVhJVElORyA9ICdleGl0aW5nJztcbi8qKlxuICogVGhlIFRyYW5zaXRpb24gY29tcG9uZW50IGxldHMgeW91IGRlc2NyaWJlIGEgdHJhbnNpdGlvbiBmcm9tIG9uZSBjb21wb25lbnRcbiAqIHN0YXRlIHRvIGFub3RoZXIgX292ZXIgdGltZV8gd2l0aCBhIHNpbXBsZSBkZWNsYXJhdGl2ZSBBUEkuIE1vc3QgY29tbW9ubHlcbiAqIGl0J3MgdXNlZCB0byBhbmltYXRlIHRoZSBtb3VudGluZyBhbmQgdW5tb3VudGluZyBvZiBhIGNvbXBvbmVudCwgYnV0IGNhbiBhbHNvXG4gKiBiZSB1c2VkIHRvIGRlc2NyaWJlIGluLXBsYWNlIHRyYW5zaXRpb24gc3RhdGVzIGFzIHdlbGwuXG4gKlxuICogLS0tXG4gKlxuICogKipOb3RlKio6IGBUcmFuc2l0aW9uYCBpcyBhIHBsYXRmb3JtLWFnbm9zdGljIGJhc2UgY29tcG9uZW50LiBJZiB5b3UncmUgdXNpbmdcbiAqIHRyYW5zaXRpb25zIGluIENTUywgeW91J2xsIHByb2JhYmx5IHdhbnQgdG8gdXNlXG4gKiBbYENTU1RyYW5zaXRpb25gXShodHRwczovL3JlYWN0Y29tbXVuaXR5Lm9yZy9yZWFjdC10cmFuc2l0aW9uLWdyb3VwL2Nzcy10cmFuc2l0aW9uKVxuICogaW5zdGVhZC4gSXQgaW5oZXJpdHMgYWxsIHRoZSBmZWF0dXJlcyBvZiBgVHJhbnNpdGlvbmAsIGJ1dCBjb250YWluc1xuICogYWRkaXRpb25hbCBmZWF0dXJlcyBuZWNlc3NhcnkgdG8gcGxheSBuaWNlIHdpdGggQ1NTIHRyYW5zaXRpb25zIChoZW5jZSB0aGVcbiAqIG5hbWUgb2YgdGhlIGNvbXBvbmVudCkuXG4gKlxuICogLS0tXG4gKlxuICogQnkgZGVmYXVsdCB0aGUgYFRyYW5zaXRpb25gIGNvbXBvbmVudCBkb2VzIG5vdCBhbHRlciB0aGUgYmVoYXZpb3Igb2YgdGhlXG4gKiBjb21wb25lbnQgaXQgcmVuZGVycywgaXQgb25seSB0cmFja3MgXCJlbnRlclwiIGFuZCBcImV4aXRcIiBzdGF0ZXMgZm9yIHRoZVxuICogY29tcG9uZW50cy4gSXQncyB1cCB0byB5b3UgdG8gZ2l2ZSBtZWFuaW5nIGFuZCBlZmZlY3QgdG8gdGhvc2Ugc3RhdGVzLiBGb3JcbiAqIGV4YW1wbGUgd2UgY2FuIGFkZCBzdHlsZXMgdG8gYSBjb21wb25lbnQgd2hlbiBpdCBlbnRlcnMgb3IgZXhpdHM6XG4gKlxuICogYGBganN4XG4gKiBpbXBvcnQgeyBUcmFuc2l0aW9uIH0gZnJvbSAncmVhY3QtdHJhbnNpdGlvbi1ncm91cCc7XG4gKlxuICogY29uc3QgZHVyYXRpb24gPSAzMDA7XG4gKlxuICogY29uc3QgZGVmYXVsdFN0eWxlID0ge1xuICogICB0cmFuc2l0aW9uOiBgb3BhY2l0eSAke2R1cmF0aW9ufW1zIGVhc2UtaW4tb3V0YCxcbiAqICAgb3BhY2l0eTogMCxcbiAqIH1cbiAqXG4gKiBjb25zdCB0cmFuc2l0aW9uU3R5bGVzID0ge1xuICogICBlbnRlcmluZzogeyBvcGFjaXR5OiAwIH0sXG4gKiAgIGVudGVyZWQ6ICB7IG9wYWNpdHk6IDEgfSxcbiAqIH07XG4gKlxuICogY29uc3QgRmFkZSA9ICh7IGluOiBpblByb3AgfSkgPT4gKFxuICogICA8VHJhbnNpdGlvbiBpbj17aW5Qcm9wfSB0aW1lb3V0PXtkdXJhdGlvbn0+XG4gKiAgICAge3N0YXRlID0+IChcbiAqICAgICAgIDxkaXYgc3R5bGU9e3tcbiAqICAgICAgICAgLi4uZGVmYXVsdFN0eWxlLFxuICogICAgICAgICAuLi50cmFuc2l0aW9uU3R5bGVzW3N0YXRlXVxuICogICAgICAgfX0+XG4gKiAgICAgICAgIEknbSBhIGZhZGUgVHJhbnNpdGlvbiFcbiAqICAgICAgIDwvZGl2PlxuICogICAgICl9XG4gKiAgIDwvVHJhbnNpdGlvbj5cbiAqICk7XG4gKiBgYGBcbiAqXG4gKiBUaGVyZSBhcmUgNCBtYWluIHN0YXRlcyBhIFRyYW5zaXRpb24gY2FuIGJlIGluOlxuICogIC0gYCdlbnRlcmluZydgXG4gKiAgLSBgJ2VudGVyZWQnYFxuICogIC0gYCdleGl0aW5nJ2BcbiAqICAtIGAnZXhpdGVkJ2BcbiAqXG4gKiBUcmFuc2l0aW9uIHN0YXRlIGlzIHRvZ2dsZWQgdmlhIHRoZSBgaW5gIHByb3AuIFdoZW4gYHRydWVgIHRoZSBjb21wb25lbnRcbiAqIGJlZ2lucyB0aGUgXCJFbnRlclwiIHN0YWdlLiBEdXJpbmcgdGhpcyBzdGFnZSwgdGhlIGNvbXBvbmVudCB3aWxsIHNoaWZ0IGZyb21cbiAqIGl0cyBjdXJyZW50IHRyYW5zaXRpb24gc3RhdGUsIHRvIGAnZW50ZXJpbmcnYCBmb3IgdGhlIGR1cmF0aW9uIG9mIHRoZVxuICogdHJhbnNpdGlvbiBhbmQgdGhlbiB0byB0aGUgYCdlbnRlcmVkJ2Agc3RhZ2Ugb25jZSBpdCdzIGNvbXBsZXRlLiBMZXQncyB0YWtlXG4gKiB0aGUgZm9sbG93aW5nIGV4YW1wbGUgKHdlJ2xsIHVzZSB0aGVcbiAqIFt1c2VTdGF0ZV0oaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL2hvb2tzLXJlZmVyZW5jZS5odG1sI3VzZXN0YXRlKSBob29rKTpcbiAqXG4gKiBgYGBqc3hcbiAqIGZ1bmN0aW9uIEFwcCgpIHtcbiAqICAgY29uc3QgW2luUHJvcCwgc2V0SW5Qcm9wXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAqICAgcmV0dXJuIChcbiAqICAgICA8ZGl2PlxuICogICAgICAgPFRyYW5zaXRpb24gaW49e2luUHJvcH0gdGltZW91dD17NTAwfT5cbiAqICAgICAgICAge3N0YXRlID0+IChcbiAqICAgICAgICAgICAvLyAuLi5cbiAqICAgICAgICAgKX1cbiAqICAgICAgIDwvVHJhbnNpdGlvbj5cbiAqICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2V0SW5Qcm9wKHRydWUpfT5cbiAqICAgICAgICAgQ2xpY2sgdG8gRW50ZXJcbiAqICAgICAgIDwvYnV0dG9uPlxuICogICAgIDwvZGl2PlxuICogICApO1xuICogfVxuICogYGBgXG4gKlxuICogV2hlbiB0aGUgYnV0dG9uIGlzIGNsaWNrZWQgdGhlIGNvbXBvbmVudCB3aWxsIHNoaWZ0IHRvIHRoZSBgJ2VudGVyaW5nJ2Agc3RhdGVcbiAqIGFuZCBzdGF5IHRoZXJlIGZvciA1MDBtcyAodGhlIHZhbHVlIG9mIGB0aW1lb3V0YCkgYmVmb3JlIGl0IGZpbmFsbHkgc3dpdGNoZXNcbiAqIHRvIGAnZW50ZXJlZCdgLlxuICpcbiAqIFdoZW4gYGluYCBpcyBgZmFsc2VgIHRoZSBzYW1lIHRoaW5nIGhhcHBlbnMgZXhjZXB0IHRoZSBzdGF0ZSBtb3ZlcyBmcm9tXG4gKiBgJ2V4aXRpbmcnYCB0byBgJ2V4aXRlZCdgLlxuICovXG5cbmV4cG9ydHMuRVhJVElORyA9IEVYSVRJTkc7XG5cbnZhciBUcmFuc2l0aW9uID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0c0xvb3NlKFRyYW5zaXRpb24sIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIFRyYW5zaXRpb24ocHJvcHMsIGNvbnRleHQpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfdGhpcyA9IF9SZWFjdCRDb21wb25lbnQuY2FsbCh0aGlzLCBwcm9wcywgY29udGV4dCkgfHwgdGhpcztcbiAgICB2YXIgcGFyZW50R3JvdXAgPSBjb250ZXh0LnRyYW5zaXRpb25Hcm91cDsgLy8gSW4gdGhlIGNvbnRleHQgb2YgYSBUcmFuc2l0aW9uR3JvdXAgYWxsIGVudGVycyBhcmUgcmVhbGx5IGFwcGVhcnNcblxuICAgIHZhciBhcHBlYXIgPSBwYXJlbnRHcm91cCAmJiAhcGFyZW50R3JvdXAuaXNNb3VudGluZyA/IHByb3BzLmVudGVyIDogcHJvcHMuYXBwZWFyO1xuICAgIHZhciBpbml0aWFsU3RhdHVzO1xuICAgIF90aGlzLmFwcGVhclN0YXR1cyA9IG51bGw7XG5cbiAgICBpZiAocHJvcHMuaW4pIHtcbiAgICAgIGlmIChhcHBlYXIpIHtcbiAgICAgICAgaW5pdGlhbFN0YXR1cyA9IEVYSVRFRDtcbiAgICAgICAgX3RoaXMuYXBwZWFyU3RhdHVzID0gRU5URVJJTkc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpbml0aWFsU3RhdHVzID0gRU5URVJFRDtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHByb3BzLnVubW91bnRPbkV4aXQgfHwgcHJvcHMubW91bnRPbkVudGVyKSB7XG4gICAgICAgIGluaXRpYWxTdGF0dXMgPSBVTk1PVU5URUQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpbml0aWFsU3RhdHVzID0gRVhJVEVEO1xuICAgICAgfVxuICAgIH1cblxuICAgIF90aGlzLnN0YXRlID0ge1xuICAgICAgc3RhdHVzOiBpbml0aWFsU3RhdHVzXG4gICAgfTtcbiAgICBfdGhpcy5uZXh0Q2FsbGJhY2sgPSBudWxsO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBUcmFuc2l0aW9uLnByb3RvdHlwZTtcblxuICBfcHJvdG8uZ2V0Q2hpbGRDb250ZXh0ID0gZnVuY3Rpb24gZ2V0Q2hpbGRDb250ZXh0KCkge1xuICAgIHJldHVybiB7XG4gICAgICB0cmFuc2l0aW9uR3JvdXA6IG51bGwgLy8gYWxsb3dzIGZvciBuZXN0ZWQgVHJhbnNpdGlvbnNcblxuICAgIH07XG4gIH07XG5cbiAgVHJhbnNpdGlvbi5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMgPSBmdW5jdGlvbiBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMoX3JlZiwgcHJldlN0YXRlKSB7XG4gICAgdmFyIG5leHRJbiA9IF9yZWYuaW47XG5cbiAgICBpZiAobmV4dEluICYmIHByZXZTdGF0ZS5zdGF0dXMgPT09IFVOTU9VTlRFRCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc3RhdHVzOiBFWElURURcbiAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH07IC8vIGdldFNuYXBzaG90QmVmb3JlVXBkYXRlKHByZXZQcm9wcykge1xuICAvLyAgIGxldCBuZXh0U3RhdHVzID0gbnVsbFxuICAvLyAgIGlmIChwcmV2UHJvcHMgIT09IHRoaXMucHJvcHMpIHtcbiAgLy8gICAgIGNvbnN0IHsgc3RhdHVzIH0gPSB0aGlzLnN0YXRlXG4gIC8vICAgICBpZiAodGhpcy5wcm9wcy5pbikge1xuICAvLyAgICAgICBpZiAoc3RhdHVzICE9PSBFTlRFUklORyAmJiBzdGF0dXMgIT09IEVOVEVSRUQpIHtcbiAgLy8gICAgICAgICBuZXh0U3RhdHVzID0gRU5URVJJTkdcbiAgLy8gICAgICAgfVxuICAvLyAgICAgfSBlbHNlIHtcbiAgLy8gICAgICAgaWYgKHN0YXR1cyA9PT0gRU5URVJJTkcgfHwgc3RhdHVzID09PSBFTlRFUkVEKSB7XG4gIC8vICAgICAgICAgbmV4dFN0YXR1cyA9IEVYSVRJTkdcbiAgLy8gICAgICAgfVxuICAvLyAgICAgfVxuICAvLyAgIH1cbiAgLy8gICByZXR1cm4geyBuZXh0U3RhdHVzIH1cbiAgLy8gfVxuXG5cbiAgX3Byb3RvLmNvbXBvbmVudERpZE1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy51cGRhdGVTdGF0dXModHJ1ZSwgdGhpcy5hcHBlYXJTdGF0dXMpO1xuICB9O1xuXG4gIF9wcm90by5jb21wb25lbnREaWRVcGRhdGUgPSBmdW5jdGlvbiBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XG4gICAgdmFyIG5leHRTdGF0dXMgPSBudWxsO1xuXG4gICAgaWYgKHByZXZQcm9wcyAhPT0gdGhpcy5wcm9wcykge1xuICAgICAgdmFyIHN0YXR1cyA9IHRoaXMuc3RhdGUuc3RhdHVzO1xuXG4gICAgICBpZiAodGhpcy5wcm9wcy5pbikge1xuICAgICAgICBpZiAoc3RhdHVzICE9PSBFTlRFUklORyAmJiBzdGF0dXMgIT09IEVOVEVSRUQpIHtcbiAgICAgICAgICBuZXh0U3RhdHVzID0gRU5URVJJTkc7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChzdGF0dXMgPT09IEVOVEVSSU5HIHx8IHN0YXR1cyA9PT0gRU5URVJFRCkge1xuICAgICAgICAgIG5leHRTdGF0dXMgPSBFWElUSU5HO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy51cGRhdGVTdGF0dXMoZmFsc2UsIG5leHRTdGF0dXMpO1xuICB9O1xuXG4gIF9wcm90by5jb21wb25lbnRXaWxsVW5tb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMuY2FuY2VsTmV4dENhbGxiYWNrKCk7XG4gIH07XG5cbiAgX3Byb3RvLmdldFRpbWVvdXRzID0gZnVuY3Rpb24gZ2V0VGltZW91dHMoKSB7XG4gICAgdmFyIHRpbWVvdXQgPSB0aGlzLnByb3BzLnRpbWVvdXQ7XG4gICAgdmFyIGV4aXQsIGVudGVyLCBhcHBlYXI7XG4gICAgZXhpdCA9IGVudGVyID0gYXBwZWFyID0gdGltZW91dDtcblxuICAgIGlmICh0aW1lb3V0ICE9IG51bGwgJiYgdHlwZW9mIHRpbWVvdXQgIT09ICdudW1iZXInKSB7XG4gICAgICBleGl0ID0gdGltZW91dC5leGl0O1xuICAgICAgZW50ZXIgPSB0aW1lb3V0LmVudGVyOyAvLyBUT0RPOiByZW1vdmUgZmFsbGJhY2sgZm9yIG5leHQgbWFqb3JcblxuICAgICAgYXBwZWFyID0gdGltZW91dC5hcHBlYXIgIT09IHVuZGVmaW5lZCA/IHRpbWVvdXQuYXBwZWFyIDogZW50ZXI7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIGV4aXQ6IGV4aXQsXG4gICAgICBlbnRlcjogZW50ZXIsXG4gICAgICBhcHBlYXI6IGFwcGVhclxuICAgIH07XG4gIH07XG5cbiAgX3Byb3RvLnVwZGF0ZVN0YXR1cyA9IGZ1bmN0aW9uIHVwZGF0ZVN0YXR1cyhtb3VudGluZywgbmV4dFN0YXR1cykge1xuICAgIGlmIChtb3VudGluZyA9PT0gdm9pZCAwKSB7XG4gICAgICBtb3VudGluZyA9IGZhbHNlO1xuICAgIH1cblxuICAgIGlmIChuZXh0U3RhdHVzICE9PSBudWxsKSB7XG4gICAgICAvLyBuZXh0U3RhdHVzIHdpbGwgYWx3YXlzIGJlIEVOVEVSSU5HIG9yIEVYSVRJTkcuXG4gICAgICB0aGlzLmNhbmNlbE5leHRDYWxsYmFjaygpO1xuXG4gICAgICB2YXIgbm9kZSA9IF9yZWFjdERvbS5kZWZhdWx0LmZpbmRET01Ob2RlKHRoaXMpO1xuXG4gICAgICBpZiAobmV4dFN0YXR1cyA9PT0gRU5URVJJTkcpIHtcbiAgICAgICAgdGhpcy5wZXJmb3JtRW50ZXIobm9kZSwgbW91bnRpbmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5wZXJmb3JtRXhpdChub2RlKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHRoaXMucHJvcHMudW5tb3VudE9uRXhpdCAmJiB0aGlzLnN0YXRlLnN0YXR1cyA9PT0gRVhJVEVEKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgc3RhdHVzOiBVTk1PVU5URURcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8ucGVyZm9ybUVudGVyID0gZnVuY3Rpb24gcGVyZm9ybUVudGVyKG5vZGUsIG1vdW50aW5nKSB7XG4gICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICB2YXIgZW50ZXIgPSB0aGlzLnByb3BzLmVudGVyO1xuICAgIHZhciBhcHBlYXJpbmcgPSB0aGlzLmNvbnRleHQudHJhbnNpdGlvbkdyb3VwID8gdGhpcy5jb250ZXh0LnRyYW5zaXRpb25Hcm91cC5pc01vdW50aW5nIDogbW91bnRpbmc7XG4gICAgdmFyIHRpbWVvdXRzID0gdGhpcy5nZXRUaW1lb3V0cygpO1xuICAgIHZhciBlbnRlclRpbWVvdXQgPSBhcHBlYXJpbmcgPyB0aW1lb3V0cy5hcHBlYXIgOiB0aW1lb3V0cy5lbnRlcjsgLy8gbm8gZW50ZXIgYW5pbWF0aW9uIHNraXAgcmlnaHQgdG8gRU5URVJFRFxuICAgIC8vIGlmIHdlIGFyZSBtb3VudGluZyBhbmQgcnVubmluZyB0aGlzIGl0IG1lYW5zIGFwcGVhciBfbXVzdF8gYmUgc2V0XG5cbiAgICBpZiAoIW1vdW50aW5nICYmICFlbnRlcikge1xuICAgICAgdGhpcy5zYWZlU2V0U3RhdGUoe1xuICAgICAgICBzdGF0dXM6IEVOVEVSRURcbiAgICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgX3RoaXMyLnByb3BzLm9uRW50ZXJlZChub2RlKTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMucHJvcHMub25FbnRlcihub2RlLCBhcHBlYXJpbmcpO1xuICAgIHRoaXMuc2FmZVNldFN0YXRlKHtcbiAgICAgIHN0YXR1czogRU5URVJJTkdcbiAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICBfdGhpczIucHJvcHMub25FbnRlcmluZyhub2RlLCBhcHBlYXJpbmcpO1xuXG4gICAgICBfdGhpczIub25UcmFuc2l0aW9uRW5kKG5vZGUsIGVudGVyVGltZW91dCwgZnVuY3Rpb24gKCkge1xuICAgICAgICBfdGhpczIuc2FmZVNldFN0YXRlKHtcbiAgICAgICAgICBzdGF0dXM6IEVOVEVSRURcbiAgICAgICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIF90aGlzMi5wcm9wcy5vbkVudGVyZWQobm9kZSwgYXBwZWFyaW5nKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICBfcHJvdG8ucGVyZm9ybUV4aXQgPSBmdW5jdGlvbiBwZXJmb3JtRXhpdChub2RlKSB7XG4gICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICB2YXIgZXhpdCA9IHRoaXMucHJvcHMuZXhpdDtcbiAgICB2YXIgdGltZW91dHMgPSB0aGlzLmdldFRpbWVvdXRzKCk7IC8vIG5vIGV4aXQgYW5pbWF0aW9uIHNraXAgcmlnaHQgdG8gRVhJVEVEXG5cbiAgICBpZiAoIWV4aXQpIHtcbiAgICAgIHRoaXMuc2FmZVNldFN0YXRlKHtcbiAgICAgICAgc3RhdHVzOiBFWElURURcbiAgICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgX3RoaXMzLnByb3BzLm9uRXhpdGVkKG5vZGUpO1xuICAgICAgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5wcm9wcy5vbkV4aXQobm9kZSk7XG4gICAgdGhpcy5zYWZlU2V0U3RhdGUoe1xuICAgICAgc3RhdHVzOiBFWElUSU5HXG4gICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgX3RoaXMzLnByb3BzLm9uRXhpdGluZyhub2RlKTtcblxuICAgICAgX3RoaXMzLm9uVHJhbnNpdGlvbkVuZChub2RlLCB0aW1lb3V0cy5leGl0LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIF90aGlzMy5zYWZlU2V0U3RhdGUoe1xuICAgICAgICAgIHN0YXR1czogRVhJVEVEXG4gICAgICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBfdGhpczMucHJvcHMub25FeGl0ZWQobm9kZSk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgX3Byb3RvLmNhbmNlbE5leHRDYWxsYmFjayA9IGZ1bmN0aW9uIGNhbmNlbE5leHRDYWxsYmFjaygpIHtcbiAgICBpZiAodGhpcy5uZXh0Q2FsbGJhY2sgIT09IG51bGwpIHtcbiAgICAgIHRoaXMubmV4dENhbGxiYWNrLmNhbmNlbCgpO1xuICAgICAgdGhpcy5uZXh0Q2FsbGJhY2sgPSBudWxsO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8uc2FmZVNldFN0YXRlID0gZnVuY3Rpb24gc2FmZVNldFN0YXRlKG5leHRTdGF0ZSwgY2FsbGJhY2spIHtcbiAgICAvLyBUaGlzIHNob3VsZG4ndCBiZSBuZWNlc3NhcnksIGJ1dCB0aGVyZSBhcmUgd2VpcmQgcmFjZSBjb25kaXRpb25zIHdpdGhcbiAgICAvLyBzZXRTdGF0ZSBjYWxsYmFja3MgYW5kIHVubW91bnRpbmcgaW4gdGVzdGluZywgc28gYWx3YXlzIG1ha2Ugc3VyZSB0aGF0XG4gICAgLy8gd2UgY2FuIGNhbmNlbCBhbnkgcGVuZGluZyBzZXRTdGF0ZSBjYWxsYmFja3MgYWZ0ZXIgd2UgdW5tb3VudC5cbiAgICBjYWxsYmFjayA9IHRoaXMuc2V0TmV4dENhbGxiYWNrKGNhbGxiYWNrKTtcbiAgICB0aGlzLnNldFN0YXRlKG5leHRTdGF0ZSwgY2FsbGJhY2spO1xuICB9O1xuXG4gIF9wcm90by5zZXROZXh0Q2FsbGJhY2sgPSBmdW5jdGlvbiBzZXROZXh0Q2FsbGJhY2soY2FsbGJhY2spIHtcbiAgICB2YXIgX3RoaXM0ID0gdGhpcztcblxuICAgIHZhciBhY3RpdmUgPSB0cnVlO1xuXG4gICAgdGhpcy5uZXh0Q2FsbGJhY2sgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGlmIChhY3RpdmUpIHtcbiAgICAgICAgYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIF90aGlzNC5uZXh0Q2FsbGJhY2sgPSBudWxsO1xuICAgICAgICBjYWxsYmFjayhldmVudCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHRoaXMubmV4dENhbGxiYWNrLmNhbmNlbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGFjdGl2ZSA9IGZhbHNlO1xuICAgIH07XG5cbiAgICByZXR1cm4gdGhpcy5uZXh0Q2FsbGJhY2s7XG4gIH07XG5cbiAgX3Byb3RvLm9uVHJhbnNpdGlvbkVuZCA9IGZ1bmN0aW9uIG9uVHJhbnNpdGlvbkVuZChub2RlLCB0aW1lb3V0LCBoYW5kbGVyKSB7XG4gICAgdGhpcy5zZXROZXh0Q2FsbGJhY2soaGFuZGxlcik7XG4gICAgdmFyIGRvZXNOb3RIYXZlVGltZW91dE9yTGlzdGVuZXIgPSB0aW1lb3V0ID09IG51bGwgJiYgIXRoaXMucHJvcHMuYWRkRW5kTGlzdGVuZXI7XG5cbiAgICBpZiAoIW5vZGUgfHwgZG9lc05vdEhhdmVUaW1lb3V0T3JMaXN0ZW5lcikge1xuICAgICAgc2V0VGltZW91dCh0aGlzLm5leHRDYWxsYmFjaywgMCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRoaXMucHJvcHMuYWRkRW5kTGlzdGVuZXIpIHtcbiAgICAgIHRoaXMucHJvcHMuYWRkRW5kTGlzdGVuZXIobm9kZSwgdGhpcy5uZXh0Q2FsbGJhY2spO1xuICAgIH1cblxuICAgIGlmICh0aW1lb3V0ICE9IG51bGwpIHtcbiAgICAgIHNldFRpbWVvdXQodGhpcy5uZXh0Q2FsbGJhY2ssIHRpbWVvdXQpO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8ucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBzdGF0dXMgPSB0aGlzLnN0YXRlLnN0YXR1cztcblxuICAgIGlmIChzdGF0dXMgPT09IFVOTU9VTlRFRCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgdmFyIF90aGlzJHByb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgY2hpbGRyZW4gPSBfdGhpcyRwcm9wcy5jaGlsZHJlbixcbiAgICAgICAgY2hpbGRQcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKF90aGlzJHByb3BzLCBbXCJjaGlsZHJlblwiXSk7IC8vIGZpbHRlciBwcm9wcyBmb3IgVHJhbnN0aXRpb25cblxuXG4gICAgZGVsZXRlIGNoaWxkUHJvcHMuaW47XG4gICAgZGVsZXRlIGNoaWxkUHJvcHMubW91bnRPbkVudGVyO1xuICAgIGRlbGV0ZSBjaGlsZFByb3BzLnVubW91bnRPbkV4aXQ7XG4gICAgZGVsZXRlIGNoaWxkUHJvcHMuYXBwZWFyO1xuICAgIGRlbGV0ZSBjaGlsZFByb3BzLmVudGVyO1xuICAgIGRlbGV0ZSBjaGlsZFByb3BzLmV4aXQ7XG4gICAgZGVsZXRlIGNoaWxkUHJvcHMudGltZW91dDtcbiAgICBkZWxldGUgY2hpbGRQcm9wcy5hZGRFbmRMaXN0ZW5lcjtcbiAgICBkZWxldGUgY2hpbGRQcm9wcy5vbkVudGVyO1xuICAgIGRlbGV0ZSBjaGlsZFByb3BzLm9uRW50ZXJpbmc7XG4gICAgZGVsZXRlIGNoaWxkUHJvcHMub25FbnRlcmVkO1xuICAgIGRlbGV0ZSBjaGlsZFByb3BzLm9uRXhpdDtcbiAgICBkZWxldGUgY2hpbGRQcm9wcy5vbkV4aXRpbmc7XG4gICAgZGVsZXRlIGNoaWxkUHJvcHMub25FeGl0ZWQ7XG5cbiAgICBpZiAodHlwZW9mIGNoaWxkcmVuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gY2hpbGRyZW4oc3RhdHVzLCBjaGlsZFByb3BzKTtcbiAgICB9XG5cbiAgICB2YXIgY2hpbGQgPSBfcmVhY3QuZGVmYXVsdC5DaGlsZHJlbi5vbmx5KGNoaWxkcmVuKTtcblxuICAgIHJldHVybiBfcmVhY3QuZGVmYXVsdC5jbG9uZUVsZW1lbnQoY2hpbGQsIGNoaWxkUHJvcHMpO1xuICB9O1xuXG4gIHJldHVybiBUcmFuc2l0aW9uO1xufShfcmVhY3QuZGVmYXVsdC5Db21wb25lbnQpO1xuXG5UcmFuc2l0aW9uLmNvbnRleHRUeXBlcyA9IHtcbiAgdHJhbnNpdGlvbkdyb3VwOiBQcm9wVHlwZXMub2JqZWN0XG59O1xuVHJhbnNpdGlvbi5jaGlsZENvbnRleHRUeXBlcyA9IHtcbiAgdHJhbnNpdGlvbkdyb3VwOiBmdW5jdGlvbiB0cmFuc2l0aW9uR3JvdXAoKSB7fVxufTtcblRyYW5zaXRpb24ucHJvcFR5cGVzID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8ge1xuICAvKipcbiAgICogQSBgZnVuY3Rpb25gIGNoaWxkIGNhbiBiZSB1c2VkIGluc3RlYWQgb2YgYSBSZWFjdCBlbGVtZW50LiBUaGlzIGZ1bmN0aW9uIGlzXG4gICAqIGNhbGxlZCB3aXRoIHRoZSBjdXJyZW50IHRyYW5zaXRpb24gc3RhdHVzIChgJ2VudGVyaW5nJ2AsIGAnZW50ZXJlZCdgLFxuICAgKiBgJ2V4aXRpbmcnYCwgYCdleGl0ZWQnYCwgYCd1bm1vdW50ZWQnYCksIHdoaWNoIGNhbiBiZSB1c2VkIHRvIGFwcGx5IGNvbnRleHRcbiAgICogc3BlY2lmaWMgcHJvcHMgdG8gYSBjb21wb25lbnQuXG4gICAqXG4gICAqIGBgYGpzeFxuICAgKiA8VHJhbnNpdGlvbiBpbj17dGhpcy5zdGF0ZS5pbn0gdGltZW91dD17MTUwfT5cbiAgICogICB7c3RhdGUgPT4gKFxuICAgKiAgICAgPE15Q29tcG9uZW50IGNsYXNzTmFtZT17YGZhZGUgZmFkZS0ke3N0YXRlfWB9IC8+XG4gICAqICAgKX1cbiAgICogPC9UcmFuc2l0aW9uPlxuICAgKiBgYGBcbiAgICovXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLCBQcm9wVHlwZXMuZWxlbWVudC5pc1JlcXVpcmVkXSkuaXNSZXF1aXJlZCxcblxuICAvKipcbiAgICogU2hvdyB0aGUgY29tcG9uZW50OyB0cmlnZ2VycyB0aGUgZW50ZXIgb3IgZXhpdCBzdGF0ZXNcbiAgICovXG4gIGluOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogQnkgZGVmYXVsdCB0aGUgY2hpbGQgY29tcG9uZW50IGlzIG1vdW50ZWQgaW1tZWRpYXRlbHkgYWxvbmcgd2l0aFxuICAgKiB0aGUgcGFyZW50IGBUcmFuc2l0aW9uYCBjb21wb25lbnQuIElmIHlvdSB3YW50IHRvIFwibGF6eSBtb3VudFwiIHRoZSBjb21wb25lbnQgb24gdGhlXG4gICAqIGZpcnN0IGBpbj17dHJ1ZX1gIHlvdSBjYW4gc2V0IGBtb3VudE9uRW50ZXJgLiBBZnRlciB0aGUgZmlyc3QgZW50ZXIgdHJhbnNpdGlvbiB0aGUgY29tcG9uZW50IHdpbGwgc3RheVxuICAgKiBtb3VudGVkLCBldmVuIG9uIFwiZXhpdGVkXCIsIHVubGVzcyB5b3UgYWxzbyBzcGVjaWZ5IGB1bm1vdW50T25FeGl0YC5cbiAgICovXG4gIG1vdW50T25FbnRlcjogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIEJ5IGRlZmF1bHQgdGhlIGNoaWxkIGNvbXBvbmVudCBzdGF5cyBtb3VudGVkIGFmdGVyIGl0IHJlYWNoZXMgdGhlIGAnZXhpdGVkJ2Agc3RhdGUuXG4gICAqIFNldCBgdW5tb3VudE9uRXhpdGAgaWYgeW91J2QgcHJlZmVyIHRvIHVubW91bnQgdGhlIGNvbXBvbmVudCBhZnRlciBpdCBmaW5pc2hlcyBleGl0aW5nLlxuICAgKi9cbiAgdW5tb3VudE9uRXhpdDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIE5vcm1hbGx5IGEgY29tcG9uZW50IGlzIG5vdCB0cmFuc2l0aW9uZWQgaWYgaXQgaXMgc2hvd24gd2hlbiB0aGUgYDxUcmFuc2l0aW9uPmAgY29tcG9uZW50IG1vdW50cy5cbiAgICogSWYgeW91IHdhbnQgdG8gdHJhbnNpdGlvbiBvbiB0aGUgZmlyc3QgbW91bnQgc2V0IGBhcHBlYXJgIHRvIGB0cnVlYCwgYW5kIHRoZVxuICAgKiBjb21wb25lbnQgd2lsbCB0cmFuc2l0aW9uIGluIGFzIHNvb24gYXMgdGhlIGA8VHJhbnNpdGlvbj5gIG1vdW50cy5cbiAgICpcbiAgICogPiBOb3RlOiB0aGVyZSBhcmUgbm8gc3BlY2lmaWMgXCJhcHBlYXJcIiBzdGF0ZXMuIGBhcHBlYXJgIG9ubHkgYWRkcyBhbiBhZGRpdGlvbmFsIGBlbnRlcmAgdHJhbnNpdGlvbi5cbiAgICovXG4gIGFwcGVhcjogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIEVuYWJsZSBvciBkaXNhYmxlIGVudGVyIHRyYW5zaXRpb25zLlxuICAgKi9cbiAgZW50ZXI6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBFbmFibGUgb3IgZGlzYWJsZSBleGl0IHRyYW5zaXRpb25zLlxuICAgKi9cbiAgZXhpdDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIFRoZSBkdXJhdGlvbiBvZiB0aGUgdHJhbnNpdGlvbiwgaW4gbWlsbGlzZWNvbmRzLlxuICAgKiBSZXF1aXJlZCB1bmxlc3MgYGFkZEVuZExpc3RlbmVyYCBpcyBwcm92aWRlZC5cbiAgICpcbiAgICogWW91IG1heSBzcGVjaWZ5IGEgc2luZ2xlIHRpbWVvdXQgZm9yIGFsbCB0cmFuc2l0aW9uczpcbiAgICpcbiAgICogYGBganN4XG4gICAqIHRpbWVvdXQ9ezUwMH1cbiAgICogYGBgXG4gICAqXG4gICAqIG9yIGluZGl2aWR1YWxseTpcbiAgICpcbiAgICogYGBganN4XG4gICAqIHRpbWVvdXQ9e3tcbiAgICogIGFwcGVhcjogNTAwLFxuICAgKiAgZW50ZXI6IDMwMCxcbiAgICogIGV4aXQ6IDUwMCxcbiAgICogfX1cbiAgICogYGBgXG4gICAqXG4gICAqIC0gYGFwcGVhcmAgZGVmYXVsdHMgdG8gdGhlIHZhbHVlIG9mIGBlbnRlcmBcbiAgICogLSBgZW50ZXJgIGRlZmF1bHRzIHRvIGAwYFxuICAgKiAtIGBleGl0YCBkZWZhdWx0cyB0byBgMGBcbiAgICpcbiAgICogQHR5cGUge251bWJlciB8IHsgZW50ZXI/OiBudW1iZXIsIGV4aXQ/OiBudW1iZXIsIGFwcGVhcj86IG51bWJlciB9fVxuICAgKi9cbiAgdGltZW91dDogZnVuY3Rpb24gdGltZW91dChwcm9wcykge1xuICAgIHZhciBwdCA9IF9Qcm9wVHlwZXMudGltZW91dHNTaGFwZTtcbiAgICBpZiAoIXByb3BzLmFkZEVuZExpc3RlbmVyKSBwdCA9IHB0LmlzUmVxdWlyZWQ7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICByZXR1cm4gcHQuYXBwbHkodm9pZCAwLCBbcHJvcHNdLmNvbmNhdChhcmdzKSk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEFkZCBhIGN1c3RvbSB0cmFuc2l0aW9uIGVuZCB0cmlnZ2VyLiBDYWxsZWQgd2l0aCB0aGUgdHJhbnNpdGlvbmluZ1xuICAgKiBET00gbm9kZSBhbmQgYSBgZG9uZWAgY2FsbGJhY2suIEFsbG93cyBmb3IgbW9yZSBmaW5lIGdyYWluZWQgdHJhbnNpdGlvbiBlbmRcbiAgICogbG9naWMuICoqTm90ZToqKiBUaW1lb3V0cyBhcmUgc3RpbGwgdXNlZCBhcyBhIGZhbGxiYWNrIGlmIHByb3ZpZGVkLlxuICAgKlxuICAgKiBgYGBqc3hcbiAgICogYWRkRW5kTGlzdGVuZXI9eyhub2RlLCBkb25lKSA9PiB7XG4gICAqICAgLy8gdXNlIHRoZSBjc3MgdHJhbnNpdGlvbmVuZCBldmVudCB0byBtYXJrIHRoZSBmaW5pc2ggb2YgYSB0cmFuc2l0aW9uXG4gICAqICAgbm9kZS5hZGRFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgZG9uZSwgZmFsc2UpO1xuICAgKiB9fVxuICAgKiBgYGBcbiAgICovXG4gIGFkZEVuZExpc3RlbmVyOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQ2FsbGJhY2sgZmlyZWQgYmVmb3JlIHRoZSBcImVudGVyaW5nXCIgc3RhdHVzIGlzIGFwcGxpZWQuIEFuIGV4dHJhIHBhcmFtZXRlclxuICAgKiBgaXNBcHBlYXJpbmdgIGlzIHN1cHBsaWVkIHRvIGluZGljYXRlIGlmIHRoZSBlbnRlciBzdGFnZSBpcyBvY2N1cnJpbmcgb24gdGhlIGluaXRpYWwgbW91bnRcbiAgICpcbiAgICogQHR5cGUgRnVuY3Rpb24obm9kZTogSHRtbEVsZW1lbnQsIGlzQXBwZWFyaW5nOiBib29sKSAtPiB2b2lkXG4gICAqL1xuICBvbkVudGVyOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQ2FsbGJhY2sgZmlyZWQgYWZ0ZXIgdGhlIFwiZW50ZXJpbmdcIiBzdGF0dXMgaXMgYXBwbGllZC4gQW4gZXh0cmEgcGFyYW1ldGVyXG4gICAqIGBpc0FwcGVhcmluZ2AgaXMgc3VwcGxpZWQgdG8gaW5kaWNhdGUgaWYgdGhlIGVudGVyIHN0YWdlIGlzIG9jY3VycmluZyBvbiB0aGUgaW5pdGlhbCBtb3VudFxuICAgKlxuICAgKiBAdHlwZSBGdW5jdGlvbihub2RlOiBIdG1sRWxlbWVudCwgaXNBcHBlYXJpbmc6IGJvb2wpXG4gICAqL1xuICBvbkVudGVyaW5nOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQ2FsbGJhY2sgZmlyZWQgYWZ0ZXIgdGhlIFwiZW50ZXJlZFwiIHN0YXR1cyBpcyBhcHBsaWVkLiBBbiBleHRyYSBwYXJhbWV0ZXJcbiAgICogYGlzQXBwZWFyaW5nYCBpcyBzdXBwbGllZCB0byBpbmRpY2F0ZSBpZiB0aGUgZW50ZXIgc3RhZ2UgaXMgb2NjdXJyaW5nIG9uIHRoZSBpbml0aWFsIG1vdW50XG4gICAqXG4gICAqIEB0eXBlIEZ1bmN0aW9uKG5vZGU6IEh0bWxFbGVtZW50LCBpc0FwcGVhcmluZzogYm9vbCkgLT4gdm9pZFxuICAgKi9cbiAgb25FbnRlcmVkOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQ2FsbGJhY2sgZmlyZWQgYmVmb3JlIHRoZSBcImV4aXRpbmdcIiBzdGF0dXMgaXMgYXBwbGllZC5cbiAgICpcbiAgICogQHR5cGUgRnVuY3Rpb24obm9kZTogSHRtbEVsZW1lbnQpIC0+IHZvaWRcbiAgICovXG4gIG9uRXhpdDogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIGZpcmVkIGFmdGVyIHRoZSBcImV4aXRpbmdcIiBzdGF0dXMgaXMgYXBwbGllZC5cbiAgICpcbiAgICogQHR5cGUgRnVuY3Rpb24obm9kZTogSHRtbEVsZW1lbnQpIC0+IHZvaWRcbiAgICovXG4gIG9uRXhpdGluZzogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIGZpcmVkIGFmdGVyIHRoZSBcImV4aXRlZFwiIHN0YXR1cyBpcyBhcHBsaWVkLlxuICAgKlxuICAgKiBAdHlwZSBGdW5jdGlvbihub2RlOiBIdG1sRWxlbWVudCkgLT4gdm9pZFxuICAgKi9cbiAgb25FeGl0ZWQ6IFByb3BUeXBlcy5mdW5jIC8vIE5hbWUgdGhlIGZ1bmN0aW9uIHNvIGl0IGlzIGNsZWFyZXIgaW4gdGhlIGRvY3VtZW50YXRpb25cblxufSA6IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxuVHJhbnNpdGlvbi5kZWZhdWx0UHJvcHMgPSB7XG4gIGluOiBmYWxzZSxcbiAgbW91bnRPbkVudGVyOiBmYWxzZSxcbiAgdW5tb3VudE9uRXhpdDogZmFsc2UsXG4gIGFwcGVhcjogZmFsc2UsXG4gIGVudGVyOiB0cnVlLFxuICBleGl0OiB0cnVlLFxuICBvbkVudGVyOiBub29wLFxuICBvbkVudGVyaW5nOiBub29wLFxuICBvbkVudGVyZWQ6IG5vb3AsXG4gIG9uRXhpdDogbm9vcCxcbiAgb25FeGl0aW5nOiBub29wLFxuICBvbkV4aXRlZDogbm9vcFxufTtcblRyYW5zaXRpb24uVU5NT1VOVEVEID0gMDtcblRyYW5zaXRpb24uRVhJVEVEID0gMTtcblRyYW5zaXRpb24uRU5URVJJTkcgPSAyO1xuVHJhbnNpdGlvbi5FTlRFUkVEID0gMztcblRyYW5zaXRpb24uRVhJVElORyA9IDQ7XG5cbnZhciBfZGVmYXVsdCA9ICgwLCBfcmVhY3RMaWZlY3ljbGVzQ29tcGF0LnBvbHlmaWxsKShUcmFuc2l0aW9uKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBQcm9wVHlwZXMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicHJvcC10eXBlc1wiKSk7XG5cbnZhciBfYWRkQ2xhc3MgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJkb20taGVscGVycy9jbGFzcy9hZGRDbGFzc1wiKSk7XG5cbnZhciBfcmVtb3ZlQ2xhc3MgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJkb20taGVscGVycy9jbGFzcy9yZW1vdmVDbGFzc1wiKSk7XG5cbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbnZhciBfVHJhbnNpdGlvbiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vVHJhbnNpdGlvblwiKSk7XG5cbnZhciBfUHJvcFR5cGVzID0gcmVxdWlyZShcIi4vdXRpbHMvUHJvcFR5cGVzXCIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHsgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkgeyByZXR1cm4gb2JqOyB9IGVsc2UgeyB2YXIgbmV3T2JqID0ge307IGlmIChvYmogIT0gbnVsbCkgeyBmb3IgKHZhciBrZXkgaW4gb2JqKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7IHZhciBkZXNjID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IHt9OyBpZiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTsgfSBlbHNlIHsgbmV3T2JqW2tleV0gPSBvYmpba2V5XTsgfSB9IH0gfSBuZXdPYmouZGVmYXVsdCA9IG9iajsgcmV0dXJuIG5ld09iajsgfSB9XG5cbmZ1bmN0aW9uIF9leHRlbmRzKCkgeyBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07IHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0c0xvb3NlKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcy5wcm90b3R5cGUpOyBzdWJDbGFzcy5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBzdWJDbGFzczsgc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgYWRkQ2xhc3MgPSBmdW5jdGlvbiBhZGRDbGFzcyhub2RlLCBjbGFzc2VzKSB7XG4gIHJldHVybiBub2RlICYmIGNsYXNzZXMgJiYgY2xhc3Nlcy5zcGxpdCgnICcpLmZvckVhY2goZnVuY3Rpb24gKGMpIHtcbiAgICByZXR1cm4gKDAsIF9hZGRDbGFzcy5kZWZhdWx0KShub2RlLCBjKTtcbiAgfSk7XG59O1xuXG52YXIgcmVtb3ZlQ2xhc3MgPSBmdW5jdGlvbiByZW1vdmVDbGFzcyhub2RlLCBjbGFzc2VzKSB7XG4gIHJldHVybiBub2RlICYmIGNsYXNzZXMgJiYgY2xhc3Nlcy5zcGxpdCgnICcpLmZvckVhY2goZnVuY3Rpb24gKGMpIHtcbiAgICByZXR1cm4gKDAsIF9yZW1vdmVDbGFzcy5kZWZhdWx0KShub2RlLCBjKTtcbiAgfSk7XG59O1xuLyoqXG4gKiBBIHRyYW5zaXRpb24gY29tcG9uZW50IGluc3BpcmVkIGJ5IHRoZSBleGNlbGxlbnRcbiAqIFtuZy1hbmltYXRlXShodHRwOi8vd3d3Lm5nYW5pbWF0ZS5vcmcvKSBsaWJyYXJ5LCB5b3Ugc2hvdWxkIHVzZSBpdCBpZiB5b3UncmVcbiAqIHVzaW5nIENTUyB0cmFuc2l0aW9ucyBvciBhbmltYXRpb25zLiBJdCdzIGJ1aWx0IHVwb24gdGhlXG4gKiBbYFRyYW5zaXRpb25gXShodHRwczovL3JlYWN0Y29tbXVuaXR5Lm9yZy9yZWFjdC10cmFuc2l0aW9uLWdyb3VwL3RyYW5zaXRpb24pXG4gKiBjb21wb25lbnQsIHNvIGl0IGluaGVyaXRzIGFsbCBvZiBpdHMgcHJvcHMuXG4gKlxuICogYENTU1RyYW5zaXRpb25gIGFwcGxpZXMgYSBwYWlyIG9mIGNsYXNzIG5hbWVzIGR1cmluZyB0aGUgYGFwcGVhcmAsIGBlbnRlcmAsXG4gKiBhbmQgYGV4aXRgIHN0YXRlcyBvZiB0aGUgdHJhbnNpdGlvbi4gVGhlIGZpcnN0IGNsYXNzIGlzIGFwcGxpZWQgYW5kIHRoZW4gYVxuICogc2Vjb25kIGAqLWFjdGl2ZWAgY2xhc3MgaW4gb3JkZXIgdG8gYWN0aXZhdGUgdGhlIENTU1MgdHJhbnNpdGlvbi4gQWZ0ZXIgdGhlXG4gKiB0cmFuc2l0aW9uLCBtYXRjaGluZyBgKi1kb25lYCBjbGFzcyBuYW1lcyBhcmUgYXBwbGllZCB0byBwZXJzaXN0IHRoZVxuICogdHJhbnNpdGlvbiBzdGF0ZS5cbiAqXG4gKiBgYGBqc3hcbiAqIGZ1bmN0aW9uIEFwcCgpIHtcbiAqICAgY29uc3QgW2luUHJvcCwgc2V0SW5Qcm9wXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAqICAgcmV0dXJuIChcbiAqICAgICA8ZGl2PlxuICogICAgICAgPENTU1RyYW5zaXRpb24gaW49e2luUHJvcH0gdGltZW91dD17MjAwfSBjbGFzc05hbWVzPVwibXktbm9kZVwiPlxuICogICAgICAgICA8ZGl2PlxuICogICAgICAgICAgIHtcIkknbGwgcmVjZWl2ZSBteS1ub2RlLSogY2xhc3Nlc1wifVxuICogICAgICAgICA8L2Rpdj5cbiAqICAgICAgIDwvQ1NTVHJhbnNpdGlvbj5cbiAqICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IHNldEluUHJvcCh0cnVlKX0+XG4gKiAgICAgICAgIENsaWNrIHRvIEVudGVyXG4gKiAgICAgICA8L2J1dHRvbj5cbiAqICAgICA8L2Rpdj5cbiAqICAgKTtcbiAqIH1cbiAqIGBgYFxuICpcbiAqIFdoZW4gdGhlIGBpbmAgcHJvcCBpcyBzZXQgdG8gYHRydWVgLCB0aGUgY2hpbGQgY29tcG9uZW50IHdpbGwgZmlyc3QgcmVjZWl2ZVxuICogdGhlIGNsYXNzIGBleGFtcGxlLWVudGVyYCwgdGhlbiB0aGUgYGV4YW1wbGUtZW50ZXItYWN0aXZlYCB3aWxsIGJlIGFkZGVkIGluXG4gKiB0aGUgbmV4dCB0aWNrLiBgQ1NTVHJhbnNpdGlvbmAgW2ZvcmNlcyBhXG4gKiByZWZsb3ddKGh0dHBzOi8vZ2l0aHViLmNvbS9yZWFjdGpzL3JlYWN0LXRyYW5zaXRpb24tZ3JvdXAvYmxvYi81MDA3MzAzZTcyOWE3NGJlNjZhMjFjM2UyMjA1ZTQ5MTY4MjE1MjRiL3NyYy9DU1NUcmFuc2l0aW9uLmpzI0wyMDgtTDIxNSlcbiAqIGJldHdlZW4gYmVmb3JlIGFkZGluZyB0aGUgYGV4YW1wbGUtZW50ZXItYWN0aXZlYC4gVGhpcyBpcyBhbiBpbXBvcnRhbnQgdHJpY2tcbiAqIGJlY2F1c2UgaXQgYWxsb3dzIHVzIHRvIHRyYW5zaXRpb24gYmV0d2VlbiBgZXhhbXBsZS1lbnRlcmAgYW5kXG4gKiBgZXhhbXBsZS1lbnRlci1hY3RpdmVgIGV2ZW4gdGhvdWdoIHRoZXkgd2VyZSBhZGRlZCBpbW1lZGlhdGVseSBvbmUgYWZ0ZXJcbiAqIGFub3RoZXIuIE1vc3Qgbm90YWJseSwgdGhpcyBpcyB3aGF0IG1ha2VzIGl0IHBvc3NpYmxlIGZvciB1cyB0byBhbmltYXRlXG4gKiBfYXBwZWFyYW5jZV8uXG4gKlxuICogYGBgY3NzXG4gKiAubXktbm9kZS1lbnRlciB7XG4gKiAgIG9wYWNpdHk6IDA7XG4gKiB9XG4gKiAubXktbm9kZS1lbnRlci1hY3RpdmUge1xuICogICBvcGFjaXR5OiAxO1xuICogICB0cmFuc2l0aW9uOiBvcGFjaXR5IDIwMG1zO1xuICogfVxuICogLm15LW5vZGUtZXhpdCB7XG4gKiAgIG9wYWNpdHk6IDE7XG4gKiB9XG4gKiAubXktbm9kZS1leGl0LWFjdGl2ZSB7XG4gKiAgIG9wYWNpdHk6IDA7XG4gKiAgIHRyYW5zaXRpb246IG9wYWNpdHk6IDIwMG1zO1xuICogfVxuICogYGBgXG4gKlxuICogYCotYWN0aXZlYCBjbGFzc2VzIHJlcHJlc2VudCB3aGljaCBzdHlsZXMgeW91IHdhbnQgdG8gYW5pbWF0ZSAqKnRvKiouXG4gKi9cblxuXG52YXIgQ1NTVHJhbnNpdGlvbiA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHNMb29zZShDU1NUcmFuc2l0aW9uLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBDU1NUcmFuc2l0aW9uKCkge1xuICAgIHZhciBfdGhpcztcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICBfdGhpcyA9IF9SZWFjdCRDb21wb25lbnQuY2FsbC5hcHBseShfUmVhY3QkQ29tcG9uZW50LCBbdGhpc10uY29uY2F0KGFyZ3MpKSB8fCB0aGlzO1xuXG4gICAgX3RoaXMub25FbnRlciA9IGZ1bmN0aW9uIChub2RlLCBhcHBlYXJpbmcpIHtcbiAgICAgIHZhciBfdGhpcyRnZXRDbGFzc05hbWVzID0gX3RoaXMuZ2V0Q2xhc3NOYW1lcyhhcHBlYXJpbmcgPyAnYXBwZWFyJyA6ICdlbnRlcicpLFxuICAgICAgICAgIGNsYXNzTmFtZSA9IF90aGlzJGdldENsYXNzTmFtZXMuY2xhc3NOYW1lO1xuXG4gICAgICBfdGhpcy5yZW1vdmVDbGFzc2VzKG5vZGUsICdleGl0Jyk7XG5cbiAgICAgIGFkZENsYXNzKG5vZGUsIGNsYXNzTmFtZSk7XG5cbiAgICAgIGlmIChfdGhpcy5wcm9wcy5vbkVudGVyKSB7XG4gICAgICAgIF90aGlzLnByb3BzLm9uRW50ZXIobm9kZSwgYXBwZWFyaW5nKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3RoaXMub25FbnRlcmluZyA9IGZ1bmN0aW9uIChub2RlLCBhcHBlYXJpbmcpIHtcbiAgICAgIHZhciBfdGhpcyRnZXRDbGFzc05hbWVzMiA9IF90aGlzLmdldENsYXNzTmFtZXMoYXBwZWFyaW5nID8gJ2FwcGVhcicgOiAnZW50ZXInKSxcbiAgICAgICAgICBhY3RpdmVDbGFzc05hbWUgPSBfdGhpcyRnZXRDbGFzc05hbWVzMi5hY3RpdmVDbGFzc05hbWU7XG5cbiAgICAgIF90aGlzLnJlZmxvd0FuZEFkZENsYXNzKG5vZGUsIGFjdGl2ZUNsYXNzTmFtZSk7XG5cbiAgICAgIGlmIChfdGhpcy5wcm9wcy5vbkVudGVyaW5nKSB7XG4gICAgICAgIF90aGlzLnByb3BzLm9uRW50ZXJpbmcobm9kZSwgYXBwZWFyaW5nKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3RoaXMub25FbnRlcmVkID0gZnVuY3Rpb24gKG5vZGUsIGFwcGVhcmluZykge1xuICAgICAgdmFyIGFwcGVhckNsYXNzTmFtZSA9IF90aGlzLmdldENsYXNzTmFtZXMoJ2FwcGVhcicpLmRvbmVDbGFzc05hbWU7XG5cbiAgICAgIHZhciBlbnRlckNsYXNzTmFtZSA9IF90aGlzLmdldENsYXNzTmFtZXMoJ2VudGVyJykuZG9uZUNsYXNzTmFtZTtcblxuICAgICAgdmFyIGRvbmVDbGFzc05hbWUgPSBhcHBlYXJpbmcgPyBhcHBlYXJDbGFzc05hbWUgKyBcIiBcIiArIGVudGVyQ2xhc3NOYW1lIDogZW50ZXJDbGFzc05hbWU7XG5cbiAgICAgIF90aGlzLnJlbW92ZUNsYXNzZXMobm9kZSwgYXBwZWFyaW5nID8gJ2FwcGVhcicgOiAnZW50ZXInKTtcblxuICAgICAgYWRkQ2xhc3Mobm9kZSwgZG9uZUNsYXNzTmFtZSk7XG5cbiAgICAgIGlmIChfdGhpcy5wcm9wcy5vbkVudGVyZWQpIHtcbiAgICAgICAgX3RoaXMucHJvcHMub25FbnRlcmVkKG5vZGUsIGFwcGVhcmluZyk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF90aGlzLm9uRXhpdCA9IGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICB2YXIgX3RoaXMkZ2V0Q2xhc3NOYW1lczMgPSBfdGhpcy5nZXRDbGFzc05hbWVzKCdleGl0JyksXG4gICAgICAgICAgY2xhc3NOYW1lID0gX3RoaXMkZ2V0Q2xhc3NOYW1lczMuY2xhc3NOYW1lO1xuXG4gICAgICBfdGhpcy5yZW1vdmVDbGFzc2VzKG5vZGUsICdhcHBlYXInKTtcblxuICAgICAgX3RoaXMucmVtb3ZlQ2xhc3Nlcyhub2RlLCAnZW50ZXInKTtcblxuICAgICAgYWRkQ2xhc3Mobm9kZSwgY2xhc3NOYW1lKTtcblxuICAgICAgaWYgKF90aGlzLnByb3BzLm9uRXhpdCkge1xuICAgICAgICBfdGhpcy5wcm9wcy5vbkV4aXQobm9kZSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF90aGlzLm9uRXhpdGluZyA9IGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICB2YXIgX3RoaXMkZ2V0Q2xhc3NOYW1lczQgPSBfdGhpcy5nZXRDbGFzc05hbWVzKCdleGl0JyksXG4gICAgICAgICAgYWN0aXZlQ2xhc3NOYW1lID0gX3RoaXMkZ2V0Q2xhc3NOYW1lczQuYWN0aXZlQ2xhc3NOYW1lO1xuXG4gICAgICBfdGhpcy5yZWZsb3dBbmRBZGRDbGFzcyhub2RlLCBhY3RpdmVDbGFzc05hbWUpO1xuXG4gICAgICBpZiAoX3RoaXMucHJvcHMub25FeGl0aW5nKSB7XG4gICAgICAgIF90aGlzLnByb3BzLm9uRXhpdGluZyhub2RlKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3RoaXMub25FeGl0ZWQgPSBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgdmFyIF90aGlzJGdldENsYXNzTmFtZXM1ID0gX3RoaXMuZ2V0Q2xhc3NOYW1lcygnZXhpdCcpLFxuICAgICAgICAgIGRvbmVDbGFzc05hbWUgPSBfdGhpcyRnZXRDbGFzc05hbWVzNS5kb25lQ2xhc3NOYW1lO1xuXG4gICAgICBfdGhpcy5yZW1vdmVDbGFzc2VzKG5vZGUsICdleGl0Jyk7XG5cbiAgICAgIGFkZENsYXNzKG5vZGUsIGRvbmVDbGFzc05hbWUpO1xuXG4gICAgICBpZiAoX3RoaXMucHJvcHMub25FeGl0ZWQpIHtcbiAgICAgICAgX3RoaXMucHJvcHMub25FeGl0ZWQobm9kZSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF90aGlzLmdldENsYXNzTmFtZXMgPSBmdW5jdGlvbiAodHlwZSkge1xuICAgICAgdmFyIGNsYXNzTmFtZXMgPSBfdGhpcy5wcm9wcy5jbGFzc05hbWVzO1xuICAgICAgdmFyIGlzU3RyaW5nQ2xhc3NOYW1lcyA9IHR5cGVvZiBjbGFzc05hbWVzID09PSAnc3RyaW5nJztcbiAgICAgIHZhciBwcmVmaXggPSBpc1N0cmluZ0NsYXNzTmFtZXMgJiYgY2xhc3NOYW1lcyA/IGNsYXNzTmFtZXMgKyAnLScgOiAnJztcbiAgICAgIHZhciBjbGFzc05hbWUgPSBpc1N0cmluZ0NsYXNzTmFtZXMgPyBwcmVmaXggKyB0eXBlIDogY2xhc3NOYW1lc1t0eXBlXTtcbiAgICAgIHZhciBhY3RpdmVDbGFzc05hbWUgPSBpc1N0cmluZ0NsYXNzTmFtZXMgPyBjbGFzc05hbWUgKyAnLWFjdGl2ZScgOiBjbGFzc05hbWVzW3R5cGUgKyAnQWN0aXZlJ107XG4gICAgICB2YXIgZG9uZUNsYXNzTmFtZSA9IGlzU3RyaW5nQ2xhc3NOYW1lcyA/IGNsYXNzTmFtZSArICctZG9uZScgOiBjbGFzc05hbWVzW3R5cGUgKyAnRG9uZSddO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgY2xhc3NOYW1lOiBjbGFzc05hbWUsXG4gICAgICAgIGFjdGl2ZUNsYXNzTmFtZTogYWN0aXZlQ2xhc3NOYW1lLFxuICAgICAgICBkb25lQ2xhc3NOYW1lOiBkb25lQ2xhc3NOYW1lXG4gICAgICB9O1xuICAgIH07XG5cbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gQ1NTVHJhbnNpdGlvbi5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLnJlbW92ZUNsYXNzZXMgPSBmdW5jdGlvbiByZW1vdmVDbGFzc2VzKG5vZGUsIHR5cGUpIHtcbiAgICB2YXIgX3RoaXMkZ2V0Q2xhc3NOYW1lczYgPSB0aGlzLmdldENsYXNzTmFtZXModHlwZSksXG4gICAgICAgIGNsYXNzTmFtZSA9IF90aGlzJGdldENsYXNzTmFtZXM2LmNsYXNzTmFtZSxcbiAgICAgICAgYWN0aXZlQ2xhc3NOYW1lID0gX3RoaXMkZ2V0Q2xhc3NOYW1lczYuYWN0aXZlQ2xhc3NOYW1lLFxuICAgICAgICBkb25lQ2xhc3NOYW1lID0gX3RoaXMkZ2V0Q2xhc3NOYW1lczYuZG9uZUNsYXNzTmFtZTtcblxuICAgIGNsYXNzTmFtZSAmJiByZW1vdmVDbGFzcyhub2RlLCBjbGFzc05hbWUpO1xuICAgIGFjdGl2ZUNsYXNzTmFtZSAmJiByZW1vdmVDbGFzcyhub2RlLCBhY3RpdmVDbGFzc05hbWUpO1xuICAgIGRvbmVDbGFzc05hbWUgJiYgcmVtb3ZlQ2xhc3Mobm9kZSwgZG9uZUNsYXNzTmFtZSk7XG4gIH07XG5cbiAgX3Byb3RvLnJlZmxvd0FuZEFkZENsYXNzID0gZnVuY3Rpb24gcmVmbG93QW5kQWRkQ2xhc3Mobm9kZSwgY2xhc3NOYW1lKSB7XG4gICAgLy8gVGhpcyBpcyBmb3IgdG8gZm9yY2UgYSByZXBhaW50LFxuICAgIC8vIHdoaWNoIGlzIG5lY2Vzc2FyeSBpbiBvcmRlciB0byB0cmFuc2l0aW9uIHN0eWxlcyB3aGVuIGFkZGluZyBhIGNsYXNzIG5hbWUuXG4gICAgaWYgKGNsYXNzTmFtZSkge1xuICAgICAgLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLWV4cHJlc3Npb25zICovXG4gICAgICBub2RlICYmIG5vZGUuc2Nyb2xsVG9wO1xuICAgICAgLyogZXNsaW50LWVuYWJsZSBuby11bnVzZWQtZXhwcmVzc2lvbnMgKi9cblxuICAgICAgYWRkQ2xhc3Mobm9kZSwgY2xhc3NOYW1lKTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgcHJvcHMgPSBfZXh0ZW5kcyh7fSwgdGhpcy5wcm9wcyk7XG5cbiAgICBkZWxldGUgcHJvcHMuY2xhc3NOYW1lcztcbiAgICByZXR1cm4gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChfVHJhbnNpdGlvbi5kZWZhdWx0LCBfZXh0ZW5kcyh7fSwgcHJvcHMsIHtcbiAgICAgIG9uRW50ZXI6IHRoaXMub25FbnRlcixcbiAgICAgIG9uRW50ZXJlZDogdGhpcy5vbkVudGVyZWQsXG4gICAgICBvbkVudGVyaW5nOiB0aGlzLm9uRW50ZXJpbmcsXG4gICAgICBvbkV4aXQ6IHRoaXMub25FeGl0LFxuICAgICAgb25FeGl0aW5nOiB0aGlzLm9uRXhpdGluZyxcbiAgICAgIG9uRXhpdGVkOiB0aGlzLm9uRXhpdGVkXG4gICAgfSkpO1xuICB9O1xuXG4gIHJldHVybiBDU1NUcmFuc2l0aW9uO1xufShfcmVhY3QuZGVmYXVsdC5Db21wb25lbnQpO1xuXG5DU1NUcmFuc2l0aW9uLmRlZmF1bHRQcm9wcyA9IHtcbiAgY2xhc3NOYW1lczogJydcbn07XG5DU1NUcmFuc2l0aW9uLnByb3BUeXBlcyA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IF9leHRlbmRzKHt9LCBfVHJhbnNpdGlvbi5kZWZhdWx0LnByb3BUeXBlcywge1xuICAvKipcbiAgICogVGhlIGFuaW1hdGlvbiBjbGFzc05hbWVzIGFwcGxpZWQgdG8gdGhlIGNvbXBvbmVudCBhcyBpdCBlbnRlcnMsIGV4aXRzIG9yXG4gICAqIGhhcyBmaW5pc2hlZCB0aGUgdHJhbnNpdGlvbi4gQSBzaW5nbGUgbmFtZSBjYW4gYmUgcHJvdmlkZWQgYW5kIGl0IHdpbGwgYmVcbiAgICogc3VmZml4ZWQgZm9yIGVhY2ggc3RhZ2U6IGUuZy5cbiAgICpcbiAgICogYGNsYXNzTmFtZXM9XCJmYWRlXCJgIGFwcGxpZXMgYGZhZGUtZW50ZXJgLCBgZmFkZS1lbnRlci1hY3RpdmVgLFxuICAgKiBgZmFkZS1lbnRlci1kb25lYCwgYGZhZGUtZXhpdGAsIGBmYWRlLWV4aXQtYWN0aXZlYCwgYGZhZGUtZXhpdC1kb25lYCxcbiAgICogYGZhZGUtYXBwZWFyYCwgYGZhZGUtYXBwZWFyLWFjdGl2ZWAsIGFuZCBgZmFkZS1hcHBlYXItZG9uZWAuXG4gICAqXG4gICAqICoqTm90ZSoqOiBgZmFkZS1hcHBlYXItZG9uZWAgYW5kIGBmYWRlLWVudGVyLWRvbmVgIHdpbGwgX2JvdGhfIGJlIGFwcGxpZWQuXG4gICAqIFRoaXMgYWxsb3dzIHlvdSB0byBkZWZpbmUgZGlmZmVyZW50IGJlaGF2aW9yIGZvciB3aGVuIGFwcGVhcmluZyBpcyBkb25lIGFuZFxuICAgKiB3aGVuIHJlZ3VsYXIgZW50ZXJpbmcgaXMgZG9uZSwgdXNpbmcgc2VsZWN0b3JzIGxpa2VcbiAgICogYC5mYWRlLWVudGVyLWRvbmU6bm90KC5mYWRlLWFwcGVhci1kb25lKWAuIEZvciBleGFtcGxlLCB5b3UgY291bGQgYXBwbHkgYW5cbiAgICogZXBpYyBlbnRyYW5jZSBhbmltYXRpb24gd2hlbiBlbGVtZW50IGZpcnN0IGFwcGVhcnMgaW4gdGhlIERPTSB1c2luZ1xuICAgKiBbQW5pbWF0ZS5jc3NdKGh0dHBzOi8vZGFuZWRlbi5naXRodWIuaW8vYW5pbWF0ZS5jc3MvKS4gT3RoZXJ3aXNlIHlvdSBjYW5cbiAgICogc2ltcGx5IHVzZSBgZmFkZS1lbnRlci1kb25lYCBmb3IgZGVmaW5pbmcgYm90aCBjYXNlcy5cbiAgICpcbiAgICogRWFjaCBpbmRpdmlkdWFsIGNsYXNzTmFtZXMgY2FuIGFsc28gYmUgc3BlY2lmaWVkIGluZGVwZW5kZW50bHkgbGlrZTpcbiAgICpcbiAgICogYGBganNcbiAgICogY2xhc3NOYW1lcz17e1xuICAgKiAgYXBwZWFyOiAnbXktYXBwZWFyJyxcbiAgICogIGFwcGVhckFjdGl2ZTogJ215LWFjdGl2ZS1hcHBlYXInLFxuICAgKiAgYXBwZWFyRG9uZTogJ215LWRvbmUtYXBwZWFyJyxcbiAgICogIGVudGVyOiAnbXktZW50ZXInLFxuICAgKiAgZW50ZXJBY3RpdmU6ICdteS1hY3RpdmUtZW50ZXInLFxuICAgKiAgZW50ZXJEb25lOiAnbXktZG9uZS1lbnRlcicsXG4gICAqICBleGl0OiAnbXktZXhpdCcsXG4gICAqICBleGl0QWN0aXZlOiAnbXktYWN0aXZlLWV4aXQnLFxuICAgKiAgZXhpdERvbmU6ICdteS1kb25lLWV4aXQnLFxuICAgKiB9fVxuICAgKiBgYGBcbiAgICpcbiAgICogSWYgeW91IHdhbnQgdG8gc2V0IHRoZXNlIGNsYXNzZXMgdXNpbmcgQ1NTIE1vZHVsZXM6XG4gICAqXG4gICAqIGBgYGpzXG4gICAqIGltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMuY3NzJztcbiAgICogYGBgXG4gICAqXG4gICAqIHlvdSBtaWdodCB3YW50IHRvIHVzZSBjYW1lbENhc2UgaW4geW91ciBDU1MgZmlsZSwgdGhhdCB3YXkgY291bGQgc2ltcGx5XG4gICAqIHNwcmVhZCB0aGVtIGluc3RlYWQgb2YgbGlzdGluZyB0aGVtIG9uZSBieSBvbmU6XG4gICAqXG4gICAqIGBgYGpzXG4gICAqIGNsYXNzTmFtZXM9e3sgLi4uc3R5bGVzIH19XG4gICAqIGBgYFxuICAgKlxuICAgKiBAdHlwZSB7c3RyaW5nIHwge1xuICAgKiAgYXBwZWFyPzogc3RyaW5nLFxuICAgKiAgYXBwZWFyQWN0aXZlPzogc3RyaW5nLFxuICAgKiAgYXBwZWFyRG9uZT86IHN0cmluZyxcbiAgICogIGVudGVyPzogc3RyaW5nLFxuICAgKiAgZW50ZXJBY3RpdmU/OiBzdHJpbmcsXG4gICAqICBlbnRlckRvbmU/OiBzdHJpbmcsXG4gICAqICBleGl0Pzogc3RyaW5nLFxuICAgKiAgZXhpdEFjdGl2ZT86IHN0cmluZyxcbiAgICogIGV4aXREb25lPzogc3RyaW5nLFxuICAgKiB9fVxuICAgKi9cbiAgY2xhc3NOYW1lczogX1Byb3BUeXBlcy5jbGFzc05hbWVzU2hhcGUsXG5cbiAgLyoqXG4gICAqIEEgYDxUcmFuc2l0aW9uPmAgY2FsbGJhY2sgZmlyZWQgaW1tZWRpYXRlbHkgYWZ0ZXIgdGhlICdlbnRlcicgb3IgJ2FwcGVhcicgY2xhc3MgaXNcbiAgICogYXBwbGllZC5cbiAgICpcbiAgICogQHR5cGUgRnVuY3Rpb24obm9kZTogSHRtbEVsZW1lbnQsIGlzQXBwZWFyaW5nOiBib29sKVxuICAgKi9cbiAgb25FbnRlcjogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIEEgYDxUcmFuc2l0aW9uPmAgY2FsbGJhY2sgZmlyZWQgaW1tZWRpYXRlbHkgYWZ0ZXIgdGhlICdlbnRlci1hY3RpdmUnIG9yXG4gICAqICdhcHBlYXItYWN0aXZlJyBjbGFzcyBpcyBhcHBsaWVkLlxuICAgKlxuICAgKiBAdHlwZSBGdW5jdGlvbihub2RlOiBIdG1sRWxlbWVudCwgaXNBcHBlYXJpbmc6IGJvb2wpXG4gICAqL1xuICBvbkVudGVyaW5nOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQSBgPFRyYW5zaXRpb24+YCBjYWxsYmFjayBmaXJlZCBpbW1lZGlhdGVseSBhZnRlciB0aGUgJ2VudGVyJyBvclxuICAgKiAnYXBwZWFyJyBjbGFzc2VzIGFyZSAqKnJlbW92ZWQqKiBhbmQgdGhlIGBkb25lYCBjbGFzcyBpcyBhZGRlZCB0byB0aGUgRE9NIG5vZGUuXG4gICAqXG4gICAqIEB0eXBlIEZ1bmN0aW9uKG5vZGU6IEh0bWxFbGVtZW50LCBpc0FwcGVhcmluZzogYm9vbClcbiAgICovXG4gIG9uRW50ZXJlZDogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIEEgYDxUcmFuc2l0aW9uPmAgY2FsbGJhY2sgZmlyZWQgaW1tZWRpYXRlbHkgYWZ0ZXIgdGhlICdleGl0JyBjbGFzcyBpc1xuICAgKiBhcHBsaWVkLlxuICAgKlxuICAgKiBAdHlwZSBGdW5jdGlvbihub2RlOiBIdG1sRWxlbWVudClcbiAgICovXG4gIG9uRXhpdDogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIEEgYDxUcmFuc2l0aW9uPmAgY2FsbGJhY2sgZmlyZWQgaW1tZWRpYXRlbHkgYWZ0ZXIgdGhlICdleGl0LWFjdGl2ZScgaXMgYXBwbGllZC5cbiAgICpcbiAgICogQHR5cGUgRnVuY3Rpb24obm9kZTogSHRtbEVsZW1lbnQpXG4gICAqL1xuICBvbkV4aXRpbmc6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBBIGA8VHJhbnNpdGlvbj5gIGNhbGxiYWNrIGZpcmVkIGltbWVkaWF0ZWx5IGFmdGVyIHRoZSAnZXhpdCcgY2xhc3Nlc1xuICAgKiBhcmUgKipyZW1vdmVkKiogYW5kIHRoZSBgZXhpdC1kb25lYCBjbGFzcyBpcyBhZGRlZCB0byB0aGUgRE9NIG5vZGUuXG4gICAqXG4gICAqIEB0eXBlIEZ1bmN0aW9uKG5vZGU6IEh0bWxFbGVtZW50KVxuICAgKi9cbiAgb25FeGl0ZWQ6IFByb3BUeXBlcy5mdW5jXG59KSA6IHt9O1xudmFyIF9kZWZhdWx0ID0gQ1NTVHJhbnNpdGlvbjtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzW1wiZGVmYXVsdFwiXTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZ2V0Q2hpbGRNYXBwaW5nID0gZ2V0Q2hpbGRNYXBwaW5nO1xuZXhwb3J0cy5tZXJnZUNoaWxkTWFwcGluZ3MgPSBtZXJnZUNoaWxkTWFwcGluZ3M7XG5leHBvcnRzLmdldEluaXRpYWxDaGlsZE1hcHBpbmcgPSBnZXRJbml0aWFsQ2hpbGRNYXBwaW5nO1xuZXhwb3J0cy5nZXROZXh0Q2hpbGRNYXBwaW5nID0gZ2V0TmV4dENoaWxkTWFwcGluZztcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcblxuLyoqXG4gKiBHaXZlbiBgdGhpcy5wcm9wcy5jaGlsZHJlbmAsIHJldHVybiBhbiBvYmplY3QgbWFwcGluZyBrZXkgdG8gY2hpbGQuXG4gKlxuICogQHBhcmFtIHsqfSBjaGlsZHJlbiBgdGhpcy5wcm9wcy5jaGlsZHJlbmBcbiAqIEByZXR1cm4ge29iamVjdH0gTWFwcGluZyBvZiBrZXkgdG8gY2hpbGRcbiAqL1xuZnVuY3Rpb24gZ2V0Q2hpbGRNYXBwaW5nKGNoaWxkcmVuLCBtYXBGbikge1xuICB2YXIgbWFwcGVyID0gZnVuY3Rpb24gbWFwcGVyKGNoaWxkKSB7XG4gICAgcmV0dXJuIG1hcEZuICYmICgwLCBfcmVhY3QuaXNWYWxpZEVsZW1lbnQpKGNoaWxkKSA/IG1hcEZuKGNoaWxkKSA6IGNoaWxkO1xuICB9O1xuXG4gIHZhciByZXN1bHQgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICBpZiAoY2hpbGRyZW4pIF9yZWFjdC5DaGlsZHJlbi5tYXAoY2hpbGRyZW4sIGZ1bmN0aW9uIChjKSB7XG4gICAgcmV0dXJuIGM7XG4gIH0pLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgLy8gcnVuIHRoZSBtYXAgZnVuY3Rpb24gaGVyZSBpbnN0ZWFkIHNvIHRoYXQgdGhlIGtleSBpcyB0aGUgY29tcHV0ZWQgb25lXG4gICAgcmVzdWx0W2NoaWxkLmtleV0gPSBtYXBwZXIoY2hpbGQpO1xuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cbi8qKlxuICogV2hlbiB5b3UncmUgYWRkaW5nIG9yIHJlbW92aW5nIGNoaWxkcmVuIHNvbWUgbWF5IGJlIGFkZGVkIG9yIHJlbW92ZWQgaW4gdGhlXG4gKiBzYW1lIHJlbmRlciBwYXNzLiBXZSB3YW50IHRvIHNob3cgKmJvdGgqIHNpbmNlIHdlIHdhbnQgdG8gc2ltdWx0YW5lb3VzbHlcbiAqIGFuaW1hdGUgZWxlbWVudHMgaW4gYW5kIG91dC4gVGhpcyBmdW5jdGlvbiB0YWtlcyBhIHByZXZpb3VzIHNldCBvZiBrZXlzXG4gKiBhbmQgYSBuZXcgc2V0IG9mIGtleXMgYW5kIG1lcmdlcyB0aGVtIHdpdGggaXRzIGJlc3QgZ3Vlc3Mgb2YgdGhlIGNvcnJlY3RcbiAqIG9yZGVyaW5nLiBJbiB0aGUgZnV0dXJlIHdlIG1heSBleHBvc2Ugc29tZSBvZiB0aGUgdXRpbGl0aWVzIGluXG4gKiBSZWFjdE11bHRpQ2hpbGQgdG8gbWFrZSB0aGlzIGVhc3ksIGJ1dCBmb3Igbm93IFJlYWN0IGl0c2VsZiBkb2VzIG5vdFxuICogZGlyZWN0bHkgaGF2ZSB0aGlzIGNvbmNlcHQgb2YgdGhlIHVuaW9uIG9mIHByZXZDaGlsZHJlbiBhbmQgbmV4dENoaWxkcmVuXG4gKiBzbyB3ZSBpbXBsZW1lbnQgaXQgaGVyZS5cbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gcHJldiBwcmV2IGNoaWxkcmVuIGFzIHJldHVybmVkIGZyb21cbiAqIGBSZWFjdFRyYW5zaXRpb25DaGlsZE1hcHBpbmcuZ2V0Q2hpbGRNYXBwaW5nKClgLlxuICogQHBhcmFtIHtvYmplY3R9IG5leHQgbmV4dCBjaGlsZHJlbiBhcyByZXR1cm5lZCBmcm9tXG4gKiBgUmVhY3RUcmFuc2l0aW9uQ2hpbGRNYXBwaW5nLmdldENoaWxkTWFwcGluZygpYC5cbiAqIEByZXR1cm4ge29iamVjdH0gYSBrZXkgc2V0IHRoYXQgY29udGFpbnMgYWxsIGtleXMgaW4gYHByZXZgIGFuZCBhbGwga2V5c1xuICogaW4gYG5leHRgIGluIGEgcmVhc29uYWJsZSBvcmRlci5cbiAqL1xuXG5cbmZ1bmN0aW9uIG1lcmdlQ2hpbGRNYXBwaW5ncyhwcmV2LCBuZXh0KSB7XG4gIHByZXYgPSBwcmV2IHx8IHt9O1xuICBuZXh0ID0gbmV4dCB8fCB7fTtcblxuICBmdW5jdGlvbiBnZXRWYWx1ZUZvcktleShrZXkpIHtcbiAgICByZXR1cm4ga2V5IGluIG5leHQgPyBuZXh0W2tleV0gOiBwcmV2W2tleV07XG4gIH0gLy8gRm9yIGVhY2gga2V5IG9mIGBuZXh0YCwgdGhlIGxpc3Qgb2Yga2V5cyB0byBpbnNlcnQgYmVmb3JlIHRoYXQga2V5IGluXG4gIC8vIHRoZSBjb21iaW5lZCBsaXN0XG5cblxuICB2YXIgbmV4dEtleXNQZW5kaW5nID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgdmFyIHBlbmRpbmdLZXlzID0gW107XG5cbiAgZm9yICh2YXIgcHJldktleSBpbiBwcmV2KSB7XG4gICAgaWYgKHByZXZLZXkgaW4gbmV4dCkge1xuICAgICAgaWYgKHBlbmRpbmdLZXlzLmxlbmd0aCkge1xuICAgICAgICBuZXh0S2V5c1BlbmRpbmdbcHJldktleV0gPSBwZW5kaW5nS2V5cztcbiAgICAgICAgcGVuZGluZ0tleXMgPSBbXTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcGVuZGluZ0tleXMucHVzaChwcmV2S2V5KTtcbiAgICB9XG4gIH1cblxuICB2YXIgaTtcbiAgdmFyIGNoaWxkTWFwcGluZyA9IHt9O1xuXG4gIGZvciAodmFyIG5leHRLZXkgaW4gbmV4dCkge1xuICAgIGlmIChuZXh0S2V5c1BlbmRpbmdbbmV4dEtleV0pIHtcbiAgICAgIGZvciAoaSA9IDA7IGkgPCBuZXh0S2V5c1BlbmRpbmdbbmV4dEtleV0ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIHBlbmRpbmdOZXh0S2V5ID0gbmV4dEtleXNQZW5kaW5nW25leHRLZXldW2ldO1xuICAgICAgICBjaGlsZE1hcHBpbmdbbmV4dEtleXNQZW5kaW5nW25leHRLZXldW2ldXSA9IGdldFZhbHVlRm9yS2V5KHBlbmRpbmdOZXh0S2V5KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjaGlsZE1hcHBpbmdbbmV4dEtleV0gPSBnZXRWYWx1ZUZvcktleShuZXh0S2V5KTtcbiAgfSAvLyBGaW5hbGx5LCBhZGQgdGhlIGtleXMgd2hpY2ggZGlkbid0IGFwcGVhciBiZWZvcmUgYW55IGtleSBpbiBgbmV4dGBcblxuXG4gIGZvciAoaSA9IDA7IGkgPCBwZW5kaW5nS2V5cy5sZW5ndGg7IGkrKykge1xuICAgIGNoaWxkTWFwcGluZ1twZW5kaW5nS2V5c1tpXV0gPSBnZXRWYWx1ZUZvcktleShwZW5kaW5nS2V5c1tpXSk7XG4gIH1cblxuICByZXR1cm4gY2hpbGRNYXBwaW5nO1xufVxuXG5mdW5jdGlvbiBnZXRQcm9wKGNoaWxkLCBwcm9wLCBwcm9wcykge1xuICByZXR1cm4gcHJvcHNbcHJvcF0gIT0gbnVsbCA/IHByb3BzW3Byb3BdIDogY2hpbGQucHJvcHNbcHJvcF07XG59XG5cbmZ1bmN0aW9uIGdldEluaXRpYWxDaGlsZE1hcHBpbmcocHJvcHMsIG9uRXhpdGVkKSB7XG4gIHJldHVybiBnZXRDaGlsZE1hcHBpbmcocHJvcHMuY2hpbGRyZW4sIGZ1bmN0aW9uIChjaGlsZCkge1xuICAgIHJldHVybiAoMCwgX3JlYWN0LmNsb25lRWxlbWVudCkoY2hpbGQsIHtcbiAgICAgIG9uRXhpdGVkOiBvbkV4aXRlZC5iaW5kKG51bGwsIGNoaWxkKSxcbiAgICAgIGluOiB0cnVlLFxuICAgICAgYXBwZWFyOiBnZXRQcm9wKGNoaWxkLCAnYXBwZWFyJywgcHJvcHMpLFxuICAgICAgZW50ZXI6IGdldFByb3AoY2hpbGQsICdlbnRlcicsIHByb3BzKSxcbiAgICAgIGV4aXQ6IGdldFByb3AoY2hpbGQsICdleGl0JywgcHJvcHMpXG4gICAgfSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBnZXROZXh0Q2hpbGRNYXBwaW5nKG5leHRQcm9wcywgcHJldkNoaWxkTWFwcGluZywgb25FeGl0ZWQpIHtcbiAgdmFyIG5leHRDaGlsZE1hcHBpbmcgPSBnZXRDaGlsZE1hcHBpbmcobmV4dFByb3BzLmNoaWxkcmVuKTtcbiAgdmFyIGNoaWxkcmVuID0gbWVyZ2VDaGlsZE1hcHBpbmdzKHByZXZDaGlsZE1hcHBpbmcsIG5leHRDaGlsZE1hcHBpbmcpO1xuICBPYmplY3Qua2V5cyhjaGlsZHJlbikuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgdmFyIGNoaWxkID0gY2hpbGRyZW5ba2V5XTtcbiAgICBpZiAoISgwLCBfcmVhY3QuaXNWYWxpZEVsZW1lbnQpKGNoaWxkKSkgcmV0dXJuO1xuICAgIHZhciBoYXNQcmV2ID0ga2V5IGluIHByZXZDaGlsZE1hcHBpbmc7XG4gICAgdmFyIGhhc05leHQgPSBrZXkgaW4gbmV4dENoaWxkTWFwcGluZztcbiAgICB2YXIgcHJldkNoaWxkID0gcHJldkNoaWxkTWFwcGluZ1trZXldO1xuICAgIHZhciBpc0xlYXZpbmcgPSAoMCwgX3JlYWN0LmlzVmFsaWRFbGVtZW50KShwcmV2Q2hpbGQpICYmICFwcmV2Q2hpbGQucHJvcHMuaW47IC8vIGl0ZW0gaXMgbmV3IChlbnRlcmluZylcblxuICAgIGlmIChoYXNOZXh0ICYmICghaGFzUHJldiB8fCBpc0xlYXZpbmcpKSB7XG4gICAgICAvLyBjb25zb2xlLmxvZygnZW50ZXJpbmcnLCBrZXkpXG4gICAgICBjaGlsZHJlbltrZXldID0gKDAsIF9yZWFjdC5jbG9uZUVsZW1lbnQpKGNoaWxkLCB7XG4gICAgICAgIG9uRXhpdGVkOiBvbkV4aXRlZC5iaW5kKG51bGwsIGNoaWxkKSxcbiAgICAgICAgaW46IHRydWUsXG4gICAgICAgIGV4aXQ6IGdldFByb3AoY2hpbGQsICdleGl0JywgbmV4dFByb3BzKSxcbiAgICAgICAgZW50ZXI6IGdldFByb3AoY2hpbGQsICdlbnRlcicsIG5leHRQcm9wcylcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAoIWhhc05leHQgJiYgaGFzUHJldiAmJiAhaXNMZWF2aW5nKSB7XG4gICAgICAvLyBpdGVtIGlzIG9sZCAoZXhpdGluZylcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdsZWF2aW5nJywga2V5KVxuICAgICAgY2hpbGRyZW5ba2V5XSA9ICgwLCBfcmVhY3QuY2xvbmVFbGVtZW50KShjaGlsZCwge1xuICAgICAgICBpbjogZmFsc2VcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAoaGFzTmV4dCAmJiBoYXNQcmV2ICYmICgwLCBfcmVhY3QuaXNWYWxpZEVsZW1lbnQpKHByZXZDaGlsZCkpIHtcbiAgICAgIC8vIGl0ZW0gaGFzbid0IGNoYW5nZWQgdHJhbnNpdGlvbiBzdGF0ZXNcbiAgICAgIC8vIGNvcHkgb3ZlciB0aGUgbGFzdCB0cmFuc2l0aW9uIHByb3BzO1xuICAgICAgLy8gY29uc29sZS5sb2coJ3VuY2hhbmdlZCcsIGtleSlcbiAgICAgIGNoaWxkcmVuW2tleV0gPSAoMCwgX3JlYWN0LmNsb25lRWxlbWVudCkoY2hpbGQsIHtcbiAgICAgICAgb25FeGl0ZWQ6IG9uRXhpdGVkLmJpbmQobnVsbCwgY2hpbGQpLFxuICAgICAgICBpbjogcHJldkNoaWxkLnByb3BzLmluLFxuICAgICAgICBleGl0OiBnZXRQcm9wKGNoaWxkLCAnZXhpdCcsIG5leHRQcm9wcyksXG4gICAgICAgIGVudGVyOiBnZXRQcm9wKGNoaWxkLCAnZW50ZXInLCBuZXh0UHJvcHMpXG4gICAgICB9KTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gY2hpbGRyZW47XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBfcHJvcFR5cGVzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicHJvcC10eXBlc1wiKSk7XG5cbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbnZhciBfcmVhY3RMaWZlY3ljbGVzQ29tcGF0ID0gcmVxdWlyZShcInJlYWN0LWxpZmVjeWNsZXMtY29tcGF0XCIpO1xuXG52YXIgX0NoaWxkTWFwcGluZyA9IHJlcXVpcmUoXCIuL3V0aWxzL0NoaWxkTWFwcGluZ1wiKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCkgeyBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTsgdmFyIHRhcmdldCA9IHt9OyB2YXIgc291cmNlS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7IHZhciBrZXksIGk7IGZvciAoaSA9IDA7IGkgPCBzb3VyY2VLZXlzLmxlbmd0aDsgaSsrKSB7IGtleSA9IHNvdXJjZUtleXNbaV07IGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBfZXh0ZW5kcygpIHsgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9OyByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHNMb29zZShzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MucHJvdG90eXBlKTsgc3ViQ2xhc3MucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gc3ViQ2xhc3M7IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7IGlmIChzZWxmID09PSB2b2lkIDApIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBzZWxmOyB9XG5cbnZhciB2YWx1ZXMgPSBPYmplY3QudmFsdWVzIHx8IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIE9iamVjdC5rZXlzKG9iaikubWFwKGZ1bmN0aW9uIChrKSB7XG4gICAgcmV0dXJuIG9ialtrXTtcbiAgfSk7XG59O1xuXG52YXIgZGVmYXVsdFByb3BzID0ge1xuICBjb21wb25lbnQ6ICdkaXYnLFxuICBjaGlsZEZhY3Rvcnk6IGZ1bmN0aW9uIGNoaWxkRmFjdG9yeShjaGlsZCkge1xuICAgIHJldHVybiBjaGlsZDtcbiAgfVxuICAvKipcbiAgICogVGhlIGA8VHJhbnNpdGlvbkdyb3VwPmAgY29tcG9uZW50IG1hbmFnZXMgYSBzZXQgb2YgdHJhbnNpdGlvbiBjb21wb25lbnRzXG4gICAqIChgPFRyYW5zaXRpb24+YCBhbmQgYDxDU1NUcmFuc2l0aW9uPmApIGluIGEgbGlzdC4gTGlrZSB3aXRoIHRoZSB0cmFuc2l0aW9uXG4gICAqIGNvbXBvbmVudHMsIGA8VHJhbnNpdGlvbkdyb3VwPmAgaXMgYSBzdGF0ZSBtYWNoaW5lIGZvciBtYW5hZ2luZyB0aGUgbW91bnRpbmdcbiAgICogYW5kIHVubW91bnRpbmcgb2YgY29tcG9uZW50cyBvdmVyIHRpbWUuXG4gICAqXG4gICAqIENvbnNpZGVyIHRoZSBleGFtcGxlIGJlbG93LiBBcyBpdGVtcyBhcmUgcmVtb3ZlZCBvciBhZGRlZCB0byB0aGUgVG9kb0xpc3QgdGhlXG4gICAqIGBpbmAgcHJvcCBpcyB0b2dnbGVkIGF1dG9tYXRpY2FsbHkgYnkgdGhlIGA8VHJhbnNpdGlvbkdyb3VwPmAuXG4gICAqXG4gICAqIE5vdGUgdGhhdCBgPFRyYW5zaXRpb25Hcm91cD5gICBkb2VzIG5vdCBkZWZpbmUgYW55IGFuaW1hdGlvbiBiZWhhdmlvciFcbiAgICogRXhhY3RseSBfaG93XyBhIGxpc3QgaXRlbSBhbmltYXRlcyBpcyB1cCB0byB0aGUgaW5kaXZpZHVhbCB0cmFuc2l0aW9uXG4gICAqIGNvbXBvbmVudC4gVGhpcyBtZWFucyB5b3UgY2FuIG1peCBhbmQgbWF0Y2ggYW5pbWF0aW9ucyBhY3Jvc3MgZGlmZmVyZW50IGxpc3RcbiAgICogaXRlbXMuXG4gICAqL1xuXG59O1xuXG52YXIgVHJhbnNpdGlvbkdyb3VwID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0c0xvb3NlKFRyYW5zaXRpb25Hcm91cCwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gVHJhbnNpdGlvbkdyb3VwKHByb3BzLCBjb250ZXh0KSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX3RoaXMgPSBfUmVhY3QkQ29tcG9uZW50LmNhbGwodGhpcywgcHJvcHMsIGNvbnRleHQpIHx8IHRoaXM7XG5cbiAgICB2YXIgaGFuZGxlRXhpdGVkID0gX3RoaXMuaGFuZGxlRXhpdGVkLmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSkpOyAvLyBJbml0aWFsIGNoaWxkcmVuIHNob3VsZCBhbGwgYmUgZW50ZXJpbmcsIGRlcGVuZGVudCBvbiBhcHBlYXJcblxuXG4gICAgX3RoaXMuc3RhdGUgPSB7XG4gICAgICBoYW5kbGVFeGl0ZWQ6IGhhbmRsZUV4aXRlZCxcbiAgICAgIGZpcnN0UmVuZGVyOiB0cnVlXG4gICAgfTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gVHJhbnNpdGlvbkdyb3VwLnByb3RvdHlwZTtcblxuICBfcHJvdG8uZ2V0Q2hpbGRDb250ZXh0ID0gZnVuY3Rpb24gZ2V0Q2hpbGRDb250ZXh0KCkge1xuICAgIHJldHVybiB7XG4gICAgICB0cmFuc2l0aW9uR3JvdXA6IHtcbiAgICAgICAgaXNNb3VudGluZzogIXRoaXMuYXBwZWFyZWRcbiAgICAgIH1cbiAgICB9O1xuICB9O1xuXG4gIF9wcm90by5jb21wb25lbnREaWRNb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMuYXBwZWFyZWQgPSB0cnVlO1xuICAgIHRoaXMubW91bnRlZCA9IHRydWU7XG4gIH07XG5cbiAgX3Byb3RvLmNvbXBvbmVudFdpbGxVbm1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5tb3VudGVkID0gZmFsc2U7XG4gIH07XG5cbiAgVHJhbnNpdGlvbkdyb3VwLmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyA9IGZ1bmN0aW9uIGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyhuZXh0UHJvcHMsIF9yZWYpIHtcbiAgICB2YXIgcHJldkNoaWxkTWFwcGluZyA9IF9yZWYuY2hpbGRyZW4sXG4gICAgICAgIGhhbmRsZUV4aXRlZCA9IF9yZWYuaGFuZGxlRXhpdGVkLFxuICAgICAgICBmaXJzdFJlbmRlciA9IF9yZWYuZmlyc3RSZW5kZXI7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNoaWxkcmVuOiBmaXJzdFJlbmRlciA/ICgwLCBfQ2hpbGRNYXBwaW5nLmdldEluaXRpYWxDaGlsZE1hcHBpbmcpKG5leHRQcm9wcywgaGFuZGxlRXhpdGVkKSA6ICgwLCBfQ2hpbGRNYXBwaW5nLmdldE5leHRDaGlsZE1hcHBpbmcpKG5leHRQcm9wcywgcHJldkNoaWxkTWFwcGluZywgaGFuZGxlRXhpdGVkKSxcbiAgICAgIGZpcnN0UmVuZGVyOiBmYWxzZVxuICAgIH07XG4gIH07XG5cbiAgX3Byb3RvLmhhbmRsZUV4aXRlZCA9IGZ1bmN0aW9uIGhhbmRsZUV4aXRlZChjaGlsZCwgbm9kZSkge1xuICAgIHZhciBjdXJyZW50Q2hpbGRNYXBwaW5nID0gKDAsIF9DaGlsZE1hcHBpbmcuZ2V0Q2hpbGRNYXBwaW5nKSh0aGlzLnByb3BzLmNoaWxkcmVuKTtcbiAgICBpZiAoY2hpbGQua2V5IGluIGN1cnJlbnRDaGlsZE1hcHBpbmcpIHJldHVybjtcblxuICAgIGlmIChjaGlsZC5wcm9wcy5vbkV4aXRlZCkge1xuICAgICAgY2hpbGQucHJvcHMub25FeGl0ZWQobm9kZSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMubW91bnRlZCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZShmdW5jdGlvbiAoc3RhdGUpIHtcbiAgICAgICAgdmFyIGNoaWxkcmVuID0gX2V4dGVuZHMoe30sIHN0YXRlLmNoaWxkcmVuKTtcblxuICAgICAgICBkZWxldGUgY2hpbGRyZW5bY2hpbGQua2V5XTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBjaGlsZHJlbjogY2hpbGRyZW5cbiAgICAgICAgfTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8ucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBfdGhpcyRwcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgIENvbXBvbmVudCA9IF90aGlzJHByb3BzLmNvbXBvbmVudCxcbiAgICAgICAgY2hpbGRGYWN0b3J5ID0gX3RoaXMkcHJvcHMuY2hpbGRGYWN0b3J5LFxuICAgICAgICBwcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKF90aGlzJHByb3BzLCBbXCJjb21wb25lbnRcIiwgXCJjaGlsZEZhY3RvcnlcIl0pO1xuXG4gICAgdmFyIGNoaWxkcmVuID0gdmFsdWVzKHRoaXMuc3RhdGUuY2hpbGRyZW4pLm1hcChjaGlsZEZhY3RvcnkpO1xuICAgIGRlbGV0ZSBwcm9wcy5hcHBlYXI7XG4gICAgZGVsZXRlIHByb3BzLmVudGVyO1xuICAgIGRlbGV0ZSBwcm9wcy5leGl0O1xuXG4gICAgaWYgKENvbXBvbmVudCA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIGNoaWxkcmVuO1xuICAgIH1cblxuICAgIHJldHVybiBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KENvbXBvbmVudCwgcHJvcHMsIGNoaWxkcmVuKTtcbiAgfTtcblxuICByZXR1cm4gVHJhbnNpdGlvbkdyb3VwO1xufShfcmVhY3QuZGVmYXVsdC5Db21wb25lbnQpO1xuXG5UcmFuc2l0aW9uR3JvdXAuY2hpbGRDb250ZXh0VHlwZXMgPSB7XG4gIHRyYW5zaXRpb25Hcm91cDogX3Byb3BUeXBlcy5kZWZhdWx0Lm9iamVjdC5pc1JlcXVpcmVkXG59O1xuVHJhbnNpdGlvbkdyb3VwLnByb3BUeXBlcyA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IHtcbiAgLyoqXG4gICAqIGA8VHJhbnNpdGlvbkdyb3VwPmAgcmVuZGVycyBhIGA8ZGl2PmAgYnkgZGVmYXVsdC4gWW91IGNhbiBjaGFuZ2UgdGhpc1xuICAgKiBiZWhhdmlvciBieSBwcm92aWRpbmcgYSBgY29tcG9uZW50YCBwcm9wLlxuICAgKiBJZiB5b3UgdXNlIFJlYWN0IHYxNisgYW5kIHdvdWxkIGxpa2UgdG8gYXZvaWQgYSB3cmFwcGluZyBgPGRpdj5gIGVsZW1lbnRcbiAgICogeW91IGNhbiBwYXNzIGluIGBjb21wb25lbnQ9e251bGx9YC4gVGhpcyBpcyB1c2VmdWwgaWYgdGhlIHdyYXBwaW5nIGRpdlxuICAgKiBib3JrcyB5b3VyIGNzcyBzdHlsZXMuXG4gICAqL1xuICBjb21wb25lbnQ6IF9wcm9wVHlwZXMuZGVmYXVsdC5hbnksXG5cbiAgLyoqXG4gICAqIEEgc2V0IG9mIGA8VHJhbnNpdGlvbj5gIGNvbXBvbmVudHMsIHRoYXQgYXJlIHRvZ2dsZWQgYGluYCBhbmQgb3V0IGFzIHRoZXlcbiAgICogbGVhdmUuIHRoZSBgPFRyYW5zaXRpb25Hcm91cD5gIHdpbGwgaW5qZWN0IHNwZWNpZmljIHRyYW5zaXRpb24gcHJvcHMsIHNvXG4gICAqIHJlbWVtYmVyIHRvIHNwcmVhZCB0aGVtIHRocm91Z2ggaWYgeW91IGFyZSB3cmFwcGluZyB0aGUgYDxUcmFuc2l0aW9uPmAgYXNcbiAgICogd2l0aCBvdXIgYDxGYWRlPmAgZXhhbXBsZS5cbiAgICpcbiAgICogV2hpbGUgdGhpcyBjb21wb25lbnQgaXMgbWVhbnQgZm9yIG11bHRpcGxlIGBUcmFuc2l0aW9uYCBvciBgQ1NTVHJhbnNpdGlvbmBcbiAgICogY2hpbGRyZW4sIHNvbWV0aW1lcyB5b3UgbWF5IHdhbnQgdG8gaGF2ZSBhIHNpbmdsZSB0cmFuc2l0aW9uIGNoaWxkIHdpdGhcbiAgICogY29udGVudCB0aGF0IHlvdSB3YW50IHRvIGJlIHRyYW5zaXRpb25lZCBvdXQgYW5kIGluIHdoZW4geW91IGNoYW5nZSBpdFxuICAgKiAoZS5nLiByb3V0ZXMsIGltYWdlcyBldGMuKSBJbiB0aGF0IGNhc2UgeW91IGNhbiBjaGFuZ2UgdGhlIGBrZXlgIHByb3Agb2ZcbiAgICogdGhlIHRyYW5zaXRpb24gY2hpbGQgYXMgeW91IGNoYW5nZSBpdHMgY29udGVudCwgdGhpcyB3aWxsIGNhdXNlXG4gICAqIGBUcmFuc2l0aW9uR3JvdXBgIHRvIHRyYW5zaXRpb24gdGhlIGNoaWxkIG91dCBhbmQgYmFjayBpbi5cbiAgICovXG4gIGNoaWxkcmVuOiBfcHJvcFR5cGVzLmRlZmF1bHQubm9kZSxcblxuICAvKipcbiAgICogQSBjb252ZW5pZW5jZSBwcm9wIHRoYXQgZW5hYmxlcyBvciBkaXNhYmxlcyBhcHBlYXIgYW5pbWF0aW9uc1xuICAgKiBmb3IgYWxsIGNoaWxkcmVuLiBOb3RlIHRoYXQgc3BlY2lmeWluZyB0aGlzIHdpbGwgb3ZlcnJpZGUgYW55IGRlZmF1bHRzIHNldFxuICAgKiBvbiBpbmRpdmlkdWFsIGNoaWxkcmVuIFRyYW5zaXRpb25zLlxuICAgKi9cbiAgYXBwZWFyOiBfcHJvcFR5cGVzLmRlZmF1bHQuYm9vbCxcblxuICAvKipcbiAgICogQSBjb252ZW5pZW5jZSBwcm9wIHRoYXQgZW5hYmxlcyBvciBkaXNhYmxlcyBlbnRlciBhbmltYXRpb25zXG4gICAqIGZvciBhbGwgY2hpbGRyZW4uIE5vdGUgdGhhdCBzcGVjaWZ5aW5nIHRoaXMgd2lsbCBvdmVycmlkZSBhbnkgZGVmYXVsdHMgc2V0XG4gICAqIG9uIGluZGl2aWR1YWwgY2hpbGRyZW4gVHJhbnNpdGlvbnMuXG4gICAqL1xuICBlbnRlcjogX3Byb3BUeXBlcy5kZWZhdWx0LmJvb2wsXG5cbiAgLyoqXG4gICAqIEEgY29udmVuaWVuY2UgcHJvcCB0aGF0IGVuYWJsZXMgb3IgZGlzYWJsZXMgZXhpdCBhbmltYXRpb25zXG4gICAqIGZvciBhbGwgY2hpbGRyZW4uIE5vdGUgdGhhdCBzcGVjaWZ5aW5nIHRoaXMgd2lsbCBvdmVycmlkZSBhbnkgZGVmYXVsdHMgc2V0XG4gICAqIG9uIGluZGl2aWR1YWwgY2hpbGRyZW4gVHJhbnNpdGlvbnMuXG4gICAqL1xuICBleGl0OiBfcHJvcFR5cGVzLmRlZmF1bHQuYm9vbCxcblxuICAvKipcbiAgICogWW91IG1heSBuZWVkIHRvIGFwcGx5IHJlYWN0aXZlIHVwZGF0ZXMgdG8gYSBjaGlsZCBhcyBpdCBpcyBleGl0aW5nLlxuICAgKiBUaGlzIGlzIGdlbmVyYWxseSBkb25lIGJ5IHVzaW5nIGBjbG9uZUVsZW1lbnRgIGhvd2V2ZXIgaW4gdGhlIGNhc2Ugb2YgYW4gZXhpdGluZ1xuICAgKiBjaGlsZCB0aGUgZWxlbWVudCBoYXMgYWxyZWFkeSBiZWVuIHJlbW92ZWQgYW5kIG5vdCBhY2Nlc3NpYmxlIHRvIHRoZSBjb25zdW1lci5cbiAgICpcbiAgICogSWYgeW91IGRvIG5lZWQgdG8gdXBkYXRlIGEgY2hpbGQgYXMgaXQgbGVhdmVzIHlvdSBjYW4gcHJvdmlkZSBhIGBjaGlsZEZhY3RvcnlgXG4gICAqIHRvIHdyYXAgZXZlcnkgY2hpbGQsIGV2ZW4gdGhlIG9uZXMgdGhhdCBhcmUgbGVhdmluZy5cbiAgICpcbiAgICogQHR5cGUgRnVuY3Rpb24oY2hpbGQ6IFJlYWN0RWxlbWVudCkgLT4gUmVhY3RFbGVtZW50XG4gICAqL1xuICBjaGlsZEZhY3Rvcnk6IF9wcm9wVHlwZXMuZGVmYXVsdC5mdW5jXG59IDoge307XG5UcmFuc2l0aW9uR3JvdXAuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzO1xuXG52YXIgX2RlZmF1bHQgPSAoMCwgX3JlYWN0TGlmZWN5Y2xlc0NvbXBhdC5wb2x5ZmlsbCkoVHJhbnNpdGlvbkdyb3VwKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdOyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX3Byb3BUeXBlcyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInByb3AtdHlwZXNcIikpO1xuXG52YXIgX3JlYWN0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgX3JlYWN0RG9tID0gcmVxdWlyZShcInJlYWN0LWRvbVwiKTtcblxudmFyIF9UcmFuc2l0aW9uR3JvdXAgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL1RyYW5zaXRpb25Hcm91cFwiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpIHsgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307IHZhciB0YXJnZXQgPSB7fTsgdmFyIHNvdXJjZUtleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpOyB2YXIga2V5LCBpOyBmb3IgKGkgPSAwOyBpIDwgc291cmNlS2V5cy5sZW5ndGg7IGkrKykgeyBrZXkgPSBzb3VyY2VLZXlzW2ldOyBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlOyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzTG9vc2Uoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzLnByb3RvdHlwZSk7IHN1YkNsYXNzLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IHN1YkNsYXNzOyBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbi8qKlxuICogVGhlIGA8UmVwbGFjZVRyYW5zaXRpb24+YCBjb21wb25lbnQgaXMgYSBzcGVjaWFsaXplZCBgVHJhbnNpdGlvbmAgY29tcG9uZW50XG4gKiB0aGF0IGFuaW1hdGVzIGJldHdlZW4gdHdvIGNoaWxkcmVuLlxuICpcbiAqIGBgYGpzeFxuICogPFJlcGxhY2VUcmFuc2l0aW9uIGluPlxuICogICA8RmFkZT48ZGl2PkkgYXBwZWFyIGZpcnN0PC9kaXY+PC9GYWRlPlxuICogICA8RmFkZT48ZGl2PkkgcmVwbGFjZSB0aGUgYWJvdmU8L2Rpdj48L0ZhZGU+XG4gKiA8L1JlcGxhY2VUcmFuc2l0aW9uPlxuICogYGBgXG4gKi9cbnZhciBSZXBsYWNlVHJhbnNpdGlvbiA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHNMb29zZShSZXBsYWNlVHJhbnNpdGlvbiwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gUmVwbGFjZVRyYW5zaXRpb24oKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIF9hcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgX2FyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgX3RoaXMgPSBfUmVhY3QkQ29tcG9uZW50LmNhbGwuYXBwbHkoX1JlYWN0JENvbXBvbmVudCwgW3RoaXNdLmNvbmNhdChfYXJncykpIHx8IHRoaXM7XG5cbiAgICBfdGhpcy5oYW5kbGVFbnRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuMiksIF9rZXkyID0gMDsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgICBhcmdzW19rZXkyXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBfdGhpcy5oYW5kbGVMaWZlY3ljbGUoJ29uRW50ZXInLCAwLCBhcmdzKTtcbiAgICB9O1xuXG4gICAgX3RoaXMuaGFuZGxlRW50ZXJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBmb3IgKHZhciBfbGVuMyA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbjMpLCBfa2V5MyA9IDA7IF9rZXkzIDwgX2xlbjM7IF9rZXkzKyspIHtcbiAgICAgICAgYXJnc1tfa2V5M10gPSBhcmd1bWVudHNbX2tleTNdO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gX3RoaXMuaGFuZGxlTGlmZWN5Y2xlKCdvbkVudGVyaW5nJywgMCwgYXJncyk7XG4gICAgfTtcblxuICAgIF90aGlzLmhhbmRsZUVudGVyZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBmb3IgKHZhciBfbGVuNCA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbjQpLCBfa2V5NCA9IDA7IF9rZXk0IDwgX2xlbjQ7IF9rZXk0KyspIHtcbiAgICAgICAgYXJnc1tfa2V5NF0gPSBhcmd1bWVudHNbX2tleTRdO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gX3RoaXMuaGFuZGxlTGlmZWN5Y2xlKCdvbkVudGVyZWQnLCAwLCBhcmdzKTtcbiAgICB9O1xuXG4gICAgX3RoaXMuaGFuZGxlRXhpdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGZvciAodmFyIF9sZW41ID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuNSksIF9rZXk1ID0gMDsgX2tleTUgPCBfbGVuNTsgX2tleTUrKykge1xuICAgICAgICBhcmdzW19rZXk1XSA9IGFyZ3VtZW50c1tfa2V5NV07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBfdGhpcy5oYW5kbGVMaWZlY3ljbGUoJ29uRXhpdCcsIDEsIGFyZ3MpO1xuICAgIH07XG5cbiAgICBfdGhpcy5oYW5kbGVFeGl0aW5nID0gZnVuY3Rpb24gKCkge1xuICAgICAgZm9yICh2YXIgX2xlbjYgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW42KSwgX2tleTYgPSAwOyBfa2V5NiA8IF9sZW42OyBfa2V5NisrKSB7XG4gICAgICAgIGFyZ3NbX2tleTZdID0gYXJndW1lbnRzW19rZXk2XTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIF90aGlzLmhhbmRsZUxpZmVjeWNsZSgnb25FeGl0aW5nJywgMSwgYXJncyk7XG4gICAgfTtcblxuICAgIF90aGlzLmhhbmRsZUV4aXRlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGZvciAodmFyIF9sZW43ID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuNyksIF9rZXk3ID0gMDsgX2tleTcgPCBfbGVuNzsgX2tleTcrKykge1xuICAgICAgICBhcmdzW19rZXk3XSA9IGFyZ3VtZW50c1tfa2V5N107XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBfdGhpcy5oYW5kbGVMaWZlY3ljbGUoJ29uRXhpdGVkJywgMSwgYXJncyk7XG4gICAgfTtcblxuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBSZXBsYWNlVHJhbnNpdGlvbi5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLmhhbmRsZUxpZmVjeWNsZSA9IGZ1bmN0aW9uIGhhbmRsZUxpZmVjeWNsZShoYW5kbGVyLCBpZHgsIG9yaWdpbmFsQXJncykge1xuICAgIHZhciBfY2hpbGQkcHJvcHM7XG5cbiAgICB2YXIgY2hpbGRyZW4gPSB0aGlzLnByb3BzLmNoaWxkcmVuO1xuXG4gICAgdmFyIGNoaWxkID0gX3JlYWN0LmRlZmF1bHQuQ2hpbGRyZW4udG9BcnJheShjaGlsZHJlbilbaWR4XTtcblxuICAgIGlmIChjaGlsZC5wcm9wc1toYW5kbGVyXSkgKF9jaGlsZCRwcm9wcyA9IGNoaWxkLnByb3BzKVtoYW5kbGVyXS5hcHBseShfY2hpbGQkcHJvcHMsIG9yaWdpbmFsQXJncyk7XG4gICAgaWYgKHRoaXMucHJvcHNbaGFuZGxlcl0pIHRoaXMucHJvcHNbaGFuZGxlcl0oKDAsIF9yZWFjdERvbS5maW5kRE9NTm9kZSkodGhpcykpO1xuICB9O1xuXG4gIF9wcm90by5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIF90aGlzJHByb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgY2hpbGRyZW4gPSBfdGhpcyRwcm9wcy5jaGlsZHJlbixcbiAgICAgICAgaW5Qcm9wID0gX3RoaXMkcHJvcHMuaW4sXG4gICAgICAgIHByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UoX3RoaXMkcHJvcHMsIFtcImNoaWxkcmVuXCIsIFwiaW5cIl0pO1xuXG4gICAgdmFyIF9SZWFjdCRDaGlsZHJlbiR0b0FyciA9IF9yZWFjdC5kZWZhdWx0LkNoaWxkcmVuLnRvQXJyYXkoY2hpbGRyZW4pLFxuICAgICAgICBmaXJzdCA9IF9SZWFjdCRDaGlsZHJlbiR0b0FyclswXSxcbiAgICAgICAgc2Vjb25kID0gX1JlYWN0JENoaWxkcmVuJHRvQXJyWzFdO1xuXG4gICAgZGVsZXRlIHByb3BzLm9uRW50ZXI7XG4gICAgZGVsZXRlIHByb3BzLm9uRW50ZXJpbmc7XG4gICAgZGVsZXRlIHByb3BzLm9uRW50ZXJlZDtcbiAgICBkZWxldGUgcHJvcHMub25FeGl0O1xuICAgIGRlbGV0ZSBwcm9wcy5vbkV4aXRpbmc7XG4gICAgZGVsZXRlIHByb3BzLm9uRXhpdGVkO1xuICAgIHJldHVybiBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9UcmFuc2l0aW9uR3JvdXAuZGVmYXVsdCwgcHJvcHMsIGluUHJvcCA/IF9yZWFjdC5kZWZhdWx0LmNsb25lRWxlbWVudChmaXJzdCwge1xuICAgICAga2V5OiAnZmlyc3QnLFxuICAgICAgb25FbnRlcjogdGhpcy5oYW5kbGVFbnRlcixcbiAgICAgIG9uRW50ZXJpbmc6IHRoaXMuaGFuZGxlRW50ZXJpbmcsXG4gICAgICBvbkVudGVyZWQ6IHRoaXMuaGFuZGxlRW50ZXJlZFxuICAgIH0pIDogX3JlYWN0LmRlZmF1bHQuY2xvbmVFbGVtZW50KHNlY29uZCwge1xuICAgICAga2V5OiAnc2Vjb25kJyxcbiAgICAgIG9uRW50ZXI6IHRoaXMuaGFuZGxlRXhpdCxcbiAgICAgIG9uRW50ZXJpbmc6IHRoaXMuaGFuZGxlRXhpdGluZyxcbiAgICAgIG9uRW50ZXJlZDogdGhpcy5oYW5kbGVFeGl0ZWRcbiAgICB9KSk7XG4gIH07XG5cbiAgcmV0dXJuIFJlcGxhY2VUcmFuc2l0aW9uO1xufShfcmVhY3QuZGVmYXVsdC5Db21wb25lbnQpO1xuXG5SZXBsYWNlVHJhbnNpdGlvbi5wcm9wVHlwZXMgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyB7XG4gIGluOiBfcHJvcFR5cGVzLmRlZmF1bHQuYm9vbC5pc1JlcXVpcmVkLFxuICBjaGlsZHJlbjogZnVuY3Rpb24gY2hpbGRyZW4ocHJvcHMsIHByb3BOYW1lKSB7XG4gICAgaWYgKF9yZWFjdC5kZWZhdWx0LkNoaWxkcmVuLmNvdW50KHByb3BzW3Byb3BOYW1lXSkgIT09IDIpIHJldHVybiBuZXcgRXJyb3IoXCJcXFwiXCIgKyBwcm9wTmFtZSArIFwiXFxcIiBtdXN0IGJlIGV4YWN0bHkgdHdvIHRyYW5zaXRpb24gY29tcG9uZW50cy5cIik7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn0gOiB7fTtcbnZhciBfZGVmYXVsdCA9IFJlcGxhY2VUcmFuc2l0aW9uO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdOyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX0NTU1RyYW5zaXRpb24gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL0NTU1RyYW5zaXRpb25cIikpO1xuXG52YXIgX1JlcGxhY2VUcmFuc2l0aW9uID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9SZXBsYWNlVHJhbnNpdGlvblwiKSk7XG5cbnZhciBfVHJhbnNpdGlvbkdyb3VwID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9UcmFuc2l0aW9uR3JvdXBcIikpO1xuXG52YXIgX1RyYW5zaXRpb24gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL1RyYW5zaXRpb25cIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgVHJhbnNpdGlvbjogX1RyYW5zaXRpb24uZGVmYXVsdCxcbiAgVHJhbnNpdGlvbkdyb3VwOiBfVHJhbnNpdGlvbkdyb3VwLmRlZmF1bHQsXG4gIFJlcGxhY2VUcmFuc2l0aW9uOiBfUmVwbGFjZVRyYW5zaXRpb24uZGVmYXVsdCxcbiAgQ1NTVHJhbnNpdGlvbjogX0NTU1RyYW5zaXRpb24uZGVmYXVsdFxufTsiLCJpbXBvcnQgUmVhY3QsIHsgSFRNTEF0dHJpYnV0ZXMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBDU1NUcmFuc2l0aW9uIH0gZnJvbSAncmVhY3QtdHJhbnNpdGlvbi1ncm91cCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7IENTU1R5cGUgfSBmcm9tICcuLi8uLi90eXBlcyc7XG5cbmludGVyZmFjZSBQcm9wcyBleHRlbmRzIEhUTUxBdHRyaWJ1dGVzPEhUTUxEaXZFbGVtZW50PiB7XG4gIHNob3c6IGJvb2xlYW47XG4gIGhlYWRlcjogYW55O1xuICBjc3M/OiBDU1NUeXBlO1xufVxuXG5jb25zdCBXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgJiA+IC5fX2NvbnRlbnQge1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IHRvcDtcbiAgICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtLCBtYXgtaGVpZ2h0O1xuICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybSwgbWF4LWhlaWdodDtcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAzMDBtcztcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgbWF4LWhlaWdodDogYXV0bztcblxuICAgICYuY29sbGFwc2VkIHtcbiAgICAgIG1heC1oZWlnaHQ6IDA7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlWSgwKTtcbiAgICB9XG5cbiAgICAmLmNvbGxhcHNpbmcge1xuICAgICAgbWF4LWhlaWdodDogMTVyZW07XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlWSgxKTtcbiAgICB9XG5cbiAgICAmLmV4cGFuZGVkIHtcbiAgICAgIG1heC1oZWlnaHQ6IDE1cmVtO1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZVkoMSk7XG4gICAgfVxuXG4gICAgJi5leHBhbmRpbmcge1xuICAgICAgbWF4LWhlaWdodDogMHB4O1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZVkoMCk7XG4gICAgfVxuICB9XG5cbiAgJHsoeyBjc3MgfTogeyBjc3M/OiBDU1NUeXBlIH0pID0+IGNzcyB8fCB7fX1cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFjY29yZGlvbih7IGhlYWRlciwgc2hvdywgY2hpbGRyZW4sIC4uLnJlc3QgfTogUHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8V3JhcHBlciB7Li4ucmVzdH0+XG4gICAgICB7aGVhZGVyfVxuICAgICAgPENTU1RyYW5zaXRpb25cbiAgICAgICAgY2xhc3NOYW1lcz17e1xuICAgICAgICAgIGVudGVyOiAnY29sbGFwc2VkJyxcbiAgICAgICAgICBlbnRlckFjdGl2ZTogJ2NvbGxhcHNpbmcnLFxuICAgICAgICAgIGV4aXQ6ICdleHBhbmRlZCcsXG4gICAgICAgICAgZXhpdEFjdGl2ZTogJ2V4cGFuZGluZycsXG4gICAgICAgIH19XG4gICAgICAgIHRpbWVvdXQ9ezMwMH1cbiAgICAgICAgaW49e3Nob3d9XG4gICAgICAgIHVubW91bnRPbkV4aXRcbiAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJfX2NvbnRlbnRcIj5cbiAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9DU1NUcmFuc2l0aW9uPlxuICAgIDwvV3JhcHBlcj5cbiAgKTtcbn1cbiIsIlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2V0QWxpZ24oeyBhbGlnbiB9OiB7IGFsaWduPzogJ2xlZnQnIHwgJ3JpZ2h0JyB8ICdjZW50ZXInIH0pIHtcbiAgc3dpdGNoIChhbGlnbikge1xuICAgIGNhc2UgJ2xlZnQnOlxuICAgICAgcmV0dXJuICdmbGV4LXN0YXJ0JztcbiAgICBjYXNlICdyaWdodCc6XG4gICAgICByZXR1cm4gJ2ZsZXgtZW5kJztcbiAgICBjYXNlICdjZW50ZXInOlxuICAgICAgcmV0dXJuICdjZW50ZXInO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gJ3NwYWNlLWV2ZW5seSc7XG4gIH1cbn1cbiIsImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50LCBIVE1MQXR0cmlidXRlcyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB0cmFuc3BhcmVudGl6ZSBmcm9tICdwb2xpc2hlZC9saWIvY29sb3IvdHJhbnNwYXJlbnRpemUnO1xuaW1wb3J0IHN0eWxlZCwgeyBjc3MgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgZmluZENvbG9ySW52ZXJ0IGZyb20gJy4uLy4uL3V0aWxzL2ZpbmRDb2xvckludmVydCc7XG5pbXBvcnQgaGFtYnVnZXIgZnJvbSAnLi4vLi4vdXRpbHMvaGFtYnVnZXInO1xuaW1wb3J0IHNldEFsaWduIGZyb20gJy4uLy4uL3V0aWxzL3NldEFsaWduJztcbmltcG9ydCB7IG1lZGlhVGFibGV0LCBtZWRpYU1vYmlsZSB9IGZyb20gJy4uLy4uL3V0aWxzL21lZGlhJztcbmltcG9ydCB7IENvbG9yVHlwZSwgQWxpZ25UeXBlLCBDU1NUeXBlLCBUaGVtZVR5cGUgfSBmcm9tICcuLi8uLi90eXBlcyc7XG5cbmZ1bmN0aW9uIHNldENvbG9yKFxuICB7IGNvbG9yLCB0aGVtZSwgYmFja2Ryb3AgfTogeyBjb2xvcj86IENvbG9yVHlwZSwgdGhlbWU6IFRoZW1lVHlwZSwgYmFja2Ryb3A/OiBib29sZWFuIH0sXG4pIHtcbiAgY29uc3QgYmFja2dyb3VuZENvbG9yID0gY29sb3IgPyB0aGVtZVtjb2xvcl0gOiAndHJhbnNwYXJlbnQnO1xuICBjb25zdCB0ZXh0Q29sb3IgPVxuICAgIGZpbmRDb2xvckludmVydCh0aGVtZSwgYmFja2dyb3VuZENvbG9yID09PSAndHJhbnNwYXJlbnQnID8gdGhlbWUuYmFja2dyb3VuZCA6IGJhY2tncm91bmRDb2xvcik7XG5cbiAgaWYgKGJhY2tkcm9wKSB7XG4gICAgY29uc3QgYmFja0NvbG9yID1cbiAgICAgIHRyYW5zcGFyZW50aXplKDAuMiwgKGJhY2tncm91bmRDb2xvciA9PT0gJ3RyYW5zcGFyZW50JyA/IHRoZW1lLndoaXRlIDogYmFja2dyb3VuZENvbG9yKSk7XG4gICAgY29uc3QgdWEgPSBuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCk7XG4gICAgaWYgKHVhLmluZGV4T2YoJ3NhZmFyaScpID4gLTEgJiYgdWEuaW5kZXhPZignY2hyb21lJykgPT09IC0xKSB7XG4gICAgICByZXR1cm4gY3NzYGJhY2tncm91bmQtY29sb3I6ICR7YmFja0NvbG9yfTsgY29sb3I6ICR7dGV4dENvbG9yfTsgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDhweCk7YDtcbiAgICB9XG5cbiAgICByZXR1cm4gY3NzYFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtiYWNrQ29sb3J9O1xuICAgICAgY29sb3I6ICR7dGV4dENvbG9yfTtcbiAgICBgO1xuICB9XG5cbiAgcmV0dXJuIGNzc2BiYWNrZ3JvdW5kLWNvbG9yOiAke2JhY2tncm91bmRDb2xvcn07IGNvbG9yOiAke3RleHRDb2xvcn07YDtcbn1cblxuaW50ZXJmYWNlIE5hdlByb3BzIHtcbiAgY29sb3I/OiBDb2xvclR5cGU7XG4gIGJhY2tkcm9wPzogYm9vbGVhbjtcbiAgZml4ZWQ/OiBib29sZWFuO1xuICBzdGlja3k/OiBib29sZWFuO1xuICBmbHVpZD86IGJvb2xlYW47XG4gIHNob3c/OiBib29sZWFuO1xuICBzdHlsZT86IGFueTtcbiAgYWxpZ24/OiBBbGlnblR5cGU7XG4gIHJvbGU6IHN0cmluZztcbiAgY3NzPzogQ1NTVHlwZTtcbn1cblxuY29uc3QgTmF2QmFyID0gc3R5bGVkLmhlYWRlcjxOYXZQcm9wcz5gXG4gIHBvc2l0aW9uOiAke1xuICAgICh7IGZpeGVkLCBzdGlja3kgfSkgPT4gKCEoc3RpY2t5IHx8IGZpeGVkKSA/ICdyZWxhdGl2ZScgOiAoZml4ZWQgPyAnZml4ZWQnIDogJ3N0aWNreScpKVxuICB9O1xuICBkaXNwbGF5OiBmbGV4O1xuICB0b3A6IC0xcHg7XG4gIG1pbi1oZWlnaHQ6IDMuMjVyZW07XG4gIHdpZHRoOiAxMDAlO1xuICB6LWluZGV4OiAzMDtcblxuICBwYWRkaW5nOiAkeyh7IGZsdWlkIH06IE5hdlByb3BzKSA9PiBmbHVpZCA/ICcwIDAuNzVyZW0nIDogJzAgNSUnfTtcblxuICAmID4gbmF2IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZmxleDogMSAwIGF1dG87XG4gIH1cblxuICAke3NldENvbG9yfVxuXG4gIGEgeyBjb2xvcjogaW5oZXJpdDsgfVxuXG4gICR7bWVkaWFUYWJsZXR9IHtcbiAgICBwYWRkaW5nOiAkeyh7IGZsdWlkIH06IE5hdlByb3BzKSA9PiBmbHVpZCA/ICcwIDAuNXJlbScgOiAnMCAzJSd9O1xuICB9XG4gICR7KHsgY3NzIH0pID0+IGNzcyB8fCB7fX1cbmA7XG5cbmNvbnN0IEJ1cmdlciA9IHN0eWxlZC5idXR0b25gXG4gICR7aGFtYnVnZXIoJzMuMjVyZW0nKX1cbiAgZGlzcGxheTogbm9uZTtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiBpbmhlcml0O1xuXG4gIG91dGxpbmU6IG5vbmU7XG5cbiAgJjpob3ZlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIC4wNSk7XG4gIH1cblxuICAke21lZGlhTW9iaWxlfSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbmA7XG5cbmludGVyZmFjZSBDb250ZW50UHJvcHMge1xuICBjb2xvcj86IENvbG9yVHlwZTtcbiAgc2hvdz86IGJvb2xlYW47XG4gIGFsaWduPzogJ2xlZnQnIHwgJ3JpZ2h0Jztcbn1cblxuY29uc3QgTmF2Q29udGVudCA9IHN0eWxlZC5kaXY8Q29udGVudFByb3BzPmBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LWJhc2lzOiBhdXRvO1xuICBmbGV4LWdyb3c6IDE7XG4gIGhlaWdodDogMTAwJTtcblxuICAmID4gdWwge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIGZsZXgtZ3JvdzogMTtcbiAgICBmbGV4LWJhc2lzOiAxMDAlO1xuICAgIGhlaWdodDogaW5oZXJpdDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogJHtzZXRBbGlnbn07XG5cbiAgICBsaSB7XG4gICAgICBwYWRkaW5nOiAwLjg1cmVtO1xuICAgIH1cbiAgfVxuXG4gICYgPiBkaXYsICYgPiBzcGFuLCAmID4gZm9ybSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICAkeyh7IGNvbG9yIH0pID0+IChjb2xvciA/IGBjb2xvcjogJHtjb2xvcn07YCA6ICcnKX1cbiAgfVxuXG4gICR7bWVkaWFNb2JpbGV9IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgIGhlaWdodDogYXV0bztcblxuICAgIHBhZGRpbmctYm90dG9tOiAwLjVyZW07XG5cbiAgICAmOm5vdCguYWN0aXZlKSB7XG4gICAgICBkaXNwbGF5Om5vbmU7XG4gICAgfVxuXG4gICAgJiA+IHVsIHtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgZmxleC1iYXNpczogYXV0bztcbiAgICAgIGxpIHtcbiAgICAgICAgcGFkZGluZzogLjVyZW0gMDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmID4gZGl2LCAmID4gc3BhbiwgJiA+IGZvcm0ge1xuICAgICAgcGFkZGluZzogLjVyZW0gMDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgfVxuYDtcblxuXG5pbnRlcmZhY2UgUHJvcHMgZXh0ZW5kcyBIVE1MQXR0cmlidXRlczxIVE1MRGl2RWxlbWVudD4ge1xuICAvKiogYmFja2dyb3VuZOiJsiAqL1xuICBjb2xvcj86IENvbG9yVHlwZTtcbiAgLyoqIOODreOCtOOBruOCpOODoeODvOOCuOOAgeODl+ODreOCuOOCp+OCr+ODiOWQjeOBquOBqSAqL1xuICBicmFuZD86IFJlYWN0LlJlYWN0RWxlbWVudDxhbnk+IHwgc3RyaW5nO1xuICAvKiog5a6a576p44GV44KM44Gf5L2N572u44KS5Zu65a6a44Gr44GZ44KLICovXG4gIGZpeGVkPzogYm9vbGVhbjtcbiAgLyoqIChJRTEx5LiN5Y+vKeeUu+mdouOBjOOCueOCr+ODreODvOODq+OBleOCjOOBpuOCguS4iuOBp+iyvOOCiuS7mOOBkeOBhOOCi+OCiOOBhuOBq+OBmeOCiyAqL1xuICBzdGlja3k/OiBib29sZWFuO1xuICAvKiog5Lit5aSu5Lim44Gz44GL44KJ6Ieq5YuV5bmF44Gn6KGo56S644GX44G+44GZICovXG4gIGZsdWlkPzogYm9vbGVhbjtcbiAgLyoqIOiDjOaZr+OBjGJsdXLjgZXjgozjgb7jgZnvvIhzYWZhcmnlsILnlKjjgIHku5bjga/pgI/mmI7luqbvvIkgKi9cbiAgYmFja2Ryb3A/OiBib29sZWFuO1xuICAvKiogY2hpbGRyZW7jgavlrprnvqnjgZnjgotFbGVtZW5044Gu5Lim44Gz6aCG44KS5oyH5a6a44GX44G+44GZ44CC5pyq5a6a576p44Gv6Ieq5YuV5Lim44GzICovXG4gIGFsaWduPzogJ2xlZnQnIHwgJ3JpZ2h0JztcbiAgLyoqIOOCq+OCueOCv+ODoENTU+Wumue+qSAqL1xuICBjc3M/OiBDU1NUeXBlO1xufVxuXG50eXBlIFN0YXRlID0ge1xuICBzaG93OiBib29sZWFuLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBwQmFyIGV4dGVuZHMgUHVyZUNvbXBvbmVudDxQcm9wcywgU3RhdGU+IHtcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBjb2xvcjogbnVsbCxcbiAgICBicmFuZDogbnVsbCxcbiAgICBmaXhlZDogZmFsc2UsXG4gICAgc3RpY2t5OiBmYWxzZSxcbiAgICBmbHVpZDogZmFsc2UsXG4gICAgYmFja2Ryb3A6IGZhbHNlLFxuICB9O1xuXG4gIHN0YXRlID0geyBzaG93OiBmYWxzZSB9O1xuXG4gIHRvZ2dsZU1lbnUgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNob3c6ICF0aGlzLnN0YXRlLnNob3cgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjaGlsZHJlbiwgYWxpZ24sIGJyYW5kLCAuLi5yZXN0IH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgc2hvdyB9ID0gdGhpcy5zdGF0ZTtcbiAgICByZXR1cm4gKFxuICAgICAgPE5hdkJhclxuICAgICAgICByb2xlPVwibmF2aWdhdGlvblwiXG4gICAgICAgIHsuLi5yZXN0fVxuICAgICAgPlxuICAgICAgICA8bmF2PlxuICAgICAgICAgIHticmFuZH1cbiAgICAgICAgICA8QnVyZ2VyIGNsYXNzTmFtZT17c2hvdyA/ICdhY3RpdmUnIDogdW5kZWZpbmVkfSBvbkNsaWNrPXt0aGlzLnRvZ2dsZU1lbnV9PlxuICAgICAgICAgICAgPHNwYW4gLz5cbiAgICAgICAgICAgIDxzcGFuIC8+XG4gICAgICAgICAgICA8c3BhbiAvPlxuICAgICAgICAgIDwvQnVyZ2VyPlxuICAgICAgICAgIDxOYXZDb250ZW50IGNsYXNzTmFtZT17c2hvdyA/ICdhY3RpdmUnIDogdW5kZWZpbmVkfSBhbGlnbj17YWxpZ259PlxuICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICAgIDwvTmF2Q29udGVudD5cbiAgICAgICAgPC9uYXY+XG4gICAgICA8L05hdkJhcj5cbiAgICApO1xuICB9XG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgSFRNTEF0dHJpYnV0ZXMsIFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkLCB7IGNzcyB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBkYXJrZW4gZnJvbSAncG9saXNoZWQvbGliL2NvbG9yL2Rhcmtlbic7XG5pbXBvcnQgZmluZENvbG9ySW52ZXJ0IGZyb20gJy4uLy4uL3V0aWxzL2ZpbmRDb2xvckludmVydCc7XG5pbXBvcnQgeyBDb2xvclR5cGUsIFRoZW1lVHlwZSwgQ1NTVHlwZSB9IGZyb20gJy4uLy4uL3R5cGVzJztcblxuaW50ZXJmYWNlIFdyYXBwZXJQcm9wcyB7XG4gIGNvbG9yPzogQ29sb3JUeXBlO1xuICBhZGRvbkNvbG9yPzogQ29sb3JUeXBlO1xuICBjbG9zZTogYm9vbGVhbjtcbiAgY3NzPzogQ1NTVHlwZTtcbn1cblxuZnVuY3Rpb24gZ2V0Q29sb3IodGhlbWU6IFRoZW1lVHlwZSwgY29sb3I/OiBDb2xvclR5cGUpIHtcbiAgcmV0dXJuICghY29sb3IgfHwgY29sb3IgPT09ICdsaWdodCcpID8gdGhlbWUuYmFja2dyb3VuZCA6IHRoZW1lW2NvbG9yXTtcbn1cblxuZnVuY3Rpb24gc2V0Q29sb3IoeyB0aGVtZSwgY29sb3IsIGFkZG9uQ29sb3IgfTpcbiAgICB7IHRoZW1lOiBUaGVtZVR5cGUsIGNvbG9yPzogQ29sb3JUeXBlLCBhZGRvbkNvbG9yPzogQ29sb3JUeXBlIH0pIHtcbiAgY29uc3QgdGFyZ2V0ID0gZ2V0Q29sb3IodGhlbWUsIGNvbG9yKTtcbiAgY29uc3QgaW52ZXJ0Q29sb3IgPSBmaW5kQ29sb3JJbnZlcnQodGhlbWUsIHRhcmdldCk7XG5cbiAgY29uc3Qgc3ViQ29sb3IgPSBhZGRvbkNvbG9yID8gZ2V0Q29sb3IodGhlbWUsIGFkZG9uQ29sb3IpIDogZGFya2VuKDAuMDUsIHRhcmdldCk7XG5cbiAgcmV0dXJuIGNzc2BcbiAgICBjb2xvcjogJHtpbnZlcnRDb2xvcn07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHt0YXJnZXR9O1xuXG4gICAgYSwgc3BhbiB7XG4gICAgICBjb2xvcjogJHtpbnZlcnRDb2xvcn07XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3N1YkNvbG9yfTtcbiAgICB9XG5cbiAgICBhOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7ZGFya2VuKDAuMDUsIHN1YkNvbG9yKX07XG4gICAgfVxuICBgO1xufVxuXG5jb25zdCBXcmFwcGVyID0gc3R5bGVkLmRpdjxXcmFwcGVyUHJvcHM+YFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xuICBjdXJzb3I6IGRlZmF1bHQ7XG4gIHBhZGRpbmc6IDAgLjVyZW07XG4gIGhlaWdodDogMmVtO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcblxuICAke3NldENvbG9yfVxuXG4gICY6bm90KDpsYXN0LWNoaWxkKSB7XG4gICAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XG4gIH1cblxuICBhLCBzcGFuIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgZmxleC1ncm93OiAwO1xuICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgIG1pbi13aWR0aDogMS41cmVtO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBtYXJnaW4tcmlnaHQ6IC0wLjVyZW07XG4gICAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcbiAgICBwYWRkaW5nOiAwIC41cmVtO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDNweDtcbiAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAzcHg7XG4gICAgfVxuXG4gICAgJjpmb2N1cyB7XG4gICAgICBvdXRsaW5lOiBub25lO1xuICAgIH1cblxuICAgICR7cHJvcHMgPT4gKHByb3BzLmNsb3NlID8gY3NzYFxuICAgICAgJjpiZWZvcmUsICY6YWZ0ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjdXJyZW50Q29sb3I7XG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKC01MCUpIHJvdGF0ZSg0NWRlZyk7XG4gICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciBjZW50ZXI7XG4gICAgICB9XG5cbiAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgaGVpZ2h0OiAxcHg7XG4gICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICB9XG5cbiAgICAgICY6YWZ0ZXIge1xuICAgICAgICBoZWlnaHQ6IDUwJTtcbiAgICAgICAgd2lkdGg6IDFweDtcbiAgICAgIH1cblxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICB9XG4gICAgYCA6ICcnKX1cbiAgfVxuXG4gICR7KHsgY3NzIH0pID0+IGNzcyB8fCAnJ31cbmA7XG5cbmludGVyZmFjZSBQcm9wcyBleHRlbmRzIEhUTUxBdHRyaWJ1dGVzPEhUTUxEaXZFbGVtZW50PiB7XG4gIC8qKiDjgr/jgrDjga7lhoXlrrkgKi9cbiAgY2hpbGRyZW46IGFueTtcbiAgLyoqIFjjg5zjgr/jg7Pjga7ov73liqDvvIvjgq/jg6rjg4Pjgq/mmYLjga7jgqTjg5njg7Pjg4jjg4/jg7Pjg4njg6njg7wgKi9cbiAgb25DbG9zZT86ICgpID0+IHZvaWQ7XG4gIC8qKiDjgq/jg6rjg4Pjgq/mmYLjga7jgqTjg5njg7Pjg4jjg4/jg7Pjg4njg6njg7wgKi9cbiAgb25DbGljaz86ICgpID0+IHZvaWQ7XG4gIC8qKiDoibLjga7mjIflrpogKi9cbiAgY29sb3I/OiBDb2xvclR5cGU7XG4gIC8qKiDjgqvjgrnjgr/jg6BDU1PlrprnvqkgKi9cbiAgY3NzPzogQ1NTVHlwZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFnIGV4dGVuZHMgUHVyZUNvbXBvbmVudDxQcm9wcz4ge1xuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGNoaWxkcmVuOiBudWxsLFxuICAgIG9uQ2xvc2U6IG51bGwsXG4gICAgb25DbGljazogbnVsbCxcbiAgICBjb2xvcjogbnVsbCxcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjaGlsZHJlbiwgb25DbG9zZSwgLi4ucmVzdCB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPFdyYXBwZXIgY2xvc2U9e29uQ2xvc2UgIT09IG51bGx9IHsuLi5yZXN0fT5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgICB7b25DbG9zZSAmJiAoPGEgdGFiSW5kZXg9ezB9IHJvbGU9XCJsaW5rXCIgb25DbGljaz17b25DbG9zZX0+Jm5ic3A7PC9hPil9XG4gICAgICA8L1dyYXBwZXI+XG4gICAgKTtcbiAgfVxufVxuIiwiaW1wb3J0IFJlYWN0LCB7IEhUTUxBdHRyaWJ1dGVzIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCwgeyBjc3MgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJy4uL0dyaWQvQ29udGFpbmVyJztcbmltcG9ydCBmaW5kQ29sb3JJbnZlcnQgZnJvbSAnLi4vLi4vdXRpbHMvZmluZENvbG9ySW52ZXJ0JztcbmltcG9ydCB7IG1lZGlhRGVza3RvcCB9IGZyb20gJy4uLy4uL3V0aWxzL21lZGlhJztcbmltcG9ydCB7IENvbG9yVHlwZSwgVGhlbWVUeXBlLCBTaXplVHlwZSB9IGZyb20gJy4uLy4uL3R5cGVzJztcblxuaW50ZXJmYWNlIFByb3BzIGV4dGVuZHMgSFRNTEF0dHJpYnV0ZXM8SFRNTERpdkVsZW1lbnQ+IHtcbiAgLyoqIOiDjOaZr+OBruiJsiAqL1xuICBjb2xvcj86IENvbG9yVHlwZTtcbiAgLyoqIHNtYWxsIHwgbWVkaXVtIHwgbGFyZ2UgfCBmdWxsICovXG4gIHNpemU/OiBTaXplVHlwZSB8ICdmdWxsJztcbiAgLyoqICAqL1xuICBjaGlsZHJlbj86IFJlYWN0LlJlYWN0Q2hpbGQ7XG4gIC8qKiBjaGlsZHJlbuOBruS4reWkruaPg+OBiCAqL1xuICBjZW50ZXI/OiBib29sZWFuO1xuICAvKiog44Kr44K544K/44Og44OY44OD44OA44O8ICovXG4gIGhlYWRlcj86IFJlYWN0LlJlYWN0RWxlbWVudDxhbnk+O1xufVxuXG5mdW5jdGlvbiBzZXRDb2xvcih7IGNvbG9yLCB0aGVtZSB9OiB7IGNvbG9yPzogQ29sb3JUeXBlLCB0aGVtZTogVGhlbWVUeXBlIH0pIHtcbiAgaWYgKCFjb2xvcikgcmV0dXJuICcnO1xuXG4gIGNvbnN0IHRhcmdldCA9IHRoZW1lW2NvbG9yXSB8fCBjb2xvcjtcbiAgY29uc3QgaW52ZXJ0Q29sb3IgPSBmaW5kQ29sb3JJbnZlcnQodGhlbWUsIHRhcmdldCk7XG4gIHJldHVybiBjc3NgYmFja2dyb3VuZC1jb2xvcjogJHt0YXJnZXR9OyBjb2xvcjogJHtpbnZlcnRDb2xvcn07YDtcbn1cblxuZnVuY3Rpb24gc2V0U2l6ZSh7IHNpemUsIHRoZW1lIH06IHsgc2l6ZT86IFNpemVUeXBlIHwgJ2Z1bGwnLCB0aGVtZTogVGhlbWVUeXBlIH0pIHtcbiAgaWYgKCFzaXplIHx8IHNpemUgPT09ICdzbWFsbCcpIHJldHVybiAnJztcblxuICBzd2l0Y2ggKHNpemUpIHtcbiAgICBjYXNlICdtZWRpdW0nIDpcbiAgICAgIHJldHVybiBjc3NgcGFkZGluZy1ib3R0b206IDlyZW07IHBhZGRpbmctdG9wOiA5cmVtO2A7XG4gICAgY2FzZSAnbGFyZ2UnIDpcbiAgICAgIHJldHVybiBjc3NgcGFkZGluZy1ib3R0b206IDE4cmVtOyBwYWRkaW5nLXRvcDogMThyZW07YDtcbiAgICBjYXNlICdmdWxsJyA6XG4gICAgICByZXR1cm4gY3NzYFxuICAgICAgICBtaW4taGVpZ2h0OiAxMDB2aDtcblxuICAgICAgICAke0JvZHl9IHtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIH1cbiAgICAgIGA7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiAnJztcbiAgfVxufVxuXG5pbnRlcmZhY2UgQm9keVByb3BzIHtcbiAgY2VudGVyPzogYm9vbGVhbjtcbn1cblxuY29uc3QgQm9keSA9IHN0eWxlZC5kaXY8Qm9keVByb3BzPmBcbiAgZmxleC1ncm93OiAxO1xuICBmbGV4LXNocmluazogMDtcbiAgcGFkZGluZzogM3JlbSAxLjVyZW07XG5cbiAgJHsoeyBjZW50ZXIgfSkgPT4gY2VudGVyID8gJ3RleHQtYWxpZ246IGNlbnRlcjsnIDogJyd9XG5cbiAgaDEge1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjEyNTtcblxuICAgICY6bm90KDpsYXN0LWNoaWxkKSB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG4gICAgfVxuICB9XG5cbiAgaDIge1xuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjI1O1xuICB9XG5cbiAgaDEraDIge1xuICAgIG1hcmdpbi10b3A6IC0xLjI1cmVtO1xuICB9XG5gO1xuXG5pbnRlcmZhY2UgV3JhcHBlclByb3BzIHtcbiAgY29sb3I/OiBDb2xvclR5cGU7XG4gIHNpemU/OiBTaXplVHlwZSB8ICdmdWxsJztcbn1cblxuY29uc3QgV3JhcHBlciA9IHN0eWxlZC5kaXY8V3JhcHBlclByb3BzPmBcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgJHtzZXRDb2xvcn1cbiAgJHtzZXRTaXplfVxuXG4gIGhlYWRlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcbiAgICBjb2xvcjogaW5oZXJpdDtcbiAgfVxuXG4gIGhlYWRlciske0JvZHl9IHtcbiAgICBtYXJnaW4tdG9wOiAzLjI1cmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDMuMjVyZW07XG4gIH1cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlcm8oeyBjaGlsZHJlbiwgY29sb3IsIHNpemUsIGNlbnRlciwgaGVhZGVyLCAuLi5yZXN0IH06IFByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPFdyYXBwZXIgY29sb3I9e2NvbG9yfSBzaXplPXtzaXplfSB7Li4ucmVzdH0+XG4gICAgICB7aGVhZGVyfVxuICAgICAgPEJvZHkgY2VudGVyPXtjZW50ZXJ9PlxuICAgICAgICA8Q29udGFpbmVyPlxuICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC9Db250YWluZXI+XG4gICAgICA8L0JvZHk+XG4gICAgPC9XcmFwcGVyPlxuICApO1xufVxuIiwiaW1wb3J0IFJlYWN0LCB7IGNyZWF0ZVJlZiwgUmVmT2JqZWN0LCBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgeyBDb2xvclR5cGUsIENTU1R5cGUgfSBmcm9tICcuLi8uLi90eXBlcyc7XG5cbmNvbnN0IFdyYXBwZXIgPSBzdHlsZWQuZGl2PHsgY3NzPzogQ1NTVHlwZSB9PmBcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cbiAgZGl2W3JvbGU9XCJ0b29sdGlwXCJdIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgY2xlYXI6IGJvdGg7XG4gICAgYm94LXNoYWRvdzogMCAxcHggMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjA1KTtcbiAgICB6LWluZGV4OiA5OTk5O1xuICAgIHBhZGRpbmc6IDAuMzc1cmVtIDAuNjI1cmVtO1xuICAgIGN1cnNvcjogZGVmYXVsdDtcbiAgICB3aWR0aDogYXV0bztcbiAgICB3aGl0ZS1zcGFjZTogcHJlO1xuICAgIGZvbnQtc2l6ZTogMC44NXJlbTtcbiAgICB6LWluZGV4OiA5OTk5O1xuXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjgpO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuXG4gICAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybSwgb3BhY2l0eSwgdmlzaWJpbGl0eTtcbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiB0cmFuc2Zvcm0sIG9wYWNpdHksIHZpc2liaWxpdHk7XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMTAwbXM7XG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKTtcblxuICAgICYuc3RhcnQge1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgIH1cbiAgfVxuICAkeyh7IGNzcyB9KSA9PiBjc3MgfHwgJyd9XG5gO1xuXG5pbnRlcmZhY2UgVG9vbHRpcFByb3BzIHtcbiAgLyoqIOWQueOBjeWHuuOBl+OBqOOBl+OBpuihqOekuuOBl+OBn+OBhOWGheWuuSAqL1xuICBsYWJlbDogYW55O1xuICAvKiog44Oe44Km44K544Kq44O844OQ44O844Gu5a++6LGh44Gr44Gq44KLZWxlbWVudCAqL1xuICBjaGlsZHJlbjogYW55O1xuICAvKiog5ZC544GN5Ye644GX44Gu6IOM5pmv6Imy44Gu5oyH5a6aICovXG4gIGNvbG9yPzogQ29sb3JUeXBlO1xuICAvKiog6KGo56S644GV44KM44KL5aC05omAICovXG4gIHBvc2l0aW9uPzogJ3RvcCcgfCAnbGVmdCcgfCAncmlnaHQnIHwgJ2JvdHRvbSc7XG4gIC8qKiDjgqvjgrnjgr/jg6BDU1PlrprnvqkgKi9cbiAgY3NzPzogQ1NTVHlwZTtcbn1cblxuaW50ZXJmYWNlIFN0YXRlIHtcbiAgc2hvdzogYm9vbGVhbjtcbiAgc3R5bGU6IGFueTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9vbHRpcCBleHRlbmRzIFB1cmVDb21wb25lbnQ8VG9vbHRpcFByb3BzLCBTdGF0ZT4ge1xuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIHBvc2l0aW9uOiAnYm90dG9tJyxcbiAgICBjb2xvcjogJ2RhcmsnLFxuICB9O1xuXG4gIHN0YXRlID0ge1xuICAgIHNob3c6IGZhbHNlLFxuICAgIHN0eWxlOiB7fSxcbiAgfTtcblxuICBvcGVuVG9vbHRpcCA9ICgpID0+IHtcbiAgICBpZiAodGhpcy5zdGF0ZS5zaG93IHx8ICF0aGlzLmVsZW1lbnQuY3VycmVudCB8fCAhdGhpcy50b29sdGlwLmN1cnJlbnQpIHJldHVybjtcblxuICAgIGNvbnN0IHBhcmVudFJlY3QgPSB0aGlzLmVsZW1lbnQuY3VycmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBjb25zdCByZWN0ID0gdGhpcy50b29sdGlwLmN1cnJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgY29uc3QgbGVmdCA9IHBhcmVudFJlY3Qud2lkdGggKyA4O1xuICAgIGNvbnN0IHRvcCA9IHBhcmVudFJlY3QuaGVpZ2h0ICsgODtcbiAgICBjb25zdCB3aWR0aCA9IChwYXJlbnRSZWN0LndpZHRoIC0gcmVjdC53aWR0aCkgPj4gMTtcbiAgICBjb25zdCBoZWlnaHQgPSAocGFyZW50UmVjdC5oZWlnaHQgLSByZWN0LmhlaWdodCkgPj4gMTtcbiAgICBsZXQgc3R5bGUgPSB7fTtcblxuICAgIHN3aXRjaCAodGhpcy5wcm9wcy5wb3NpdGlvbikge1xuICAgICAgY2FzZSAndG9wJzoge1xuICAgICAgICBzdHlsZSA9IHsgYm90dG9tOiBgJHt0b3B9cHhgLCBsZWZ0OiBgJHt3aWR0aH1weGAgfTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlICdsZWZ0Jzoge1xuICAgICAgICBzdHlsZSA9IHsgcmlnaHQ6IGAke2xlZnR9cHhgLCB0b3A6IGAke2hlaWdodH1weGAgfTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlICdyaWdodCc6IHtcbiAgICAgICAgc3R5bGUgPSB7IGxlZnQ6IGAke2xlZnR9cHhgLCB0b3A6IGAke2hlaWdodH1weGAgfTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBkZWZhdWx0OiB7XG4gICAgICAgIHN0eWxlID0geyB0b3A6IGAke3RvcH1weGAsIGxlZnQ6IGAke3dpZHRofXB4YCAgfTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHN0eWxlLCBzaG93OiB0cnVlIH0pO1xuICB9XG5cbiAgY2xvc2VUb29sdGlwID0gKCkgPT4ge1xuICAgIGlmICh0aGlzLnN0YXRlLnNob3cpIHRoaXMuc2V0U3RhdGUoeyBzaG93OiBmYWxzZSB9KTtcbiAgfVxuXG4gIGVsZW1lbnQ6IFJlZk9iamVjdDxIVE1MRGl2RWxlbWVudD4gPSBjcmVhdGVSZWYoKTtcbiAgdG9vbHRpcDogUmVmT2JqZWN0PEhUTUxEaXZFbGVtZW50PiA9IGNyZWF0ZVJlZigpO1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGxhYmVsLCBjaGlsZHJlbiwgLi4ucmVzdCB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IHNob3csIHN0eWxlIH0gPSB0aGlzLnN0YXRlO1xuICAgIHJldHVybiAoXG4gICAgICA8V3JhcHBlclxuICAgICAgICByZWY9e3RoaXMuZWxlbWVudH1cbiAgICAgICAgb25Nb3VzZU92ZXI9e3RoaXMub3BlblRvb2x0aXB9XG4gICAgICAgIG9uTW91c2VPdXQ9e3RoaXMuY2xvc2VUb29sdGlwfVxuICAgICAgICB7Li4ucmVzdH1cbiAgICAgID5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8ZGl2XG4gICAgICAgICAgcmVmPXt0aGlzLnRvb2x0aXB9XG4gICAgICAgICAgY2xhc3NOYW1lPXtzaG93ID8gJ3N0YXJ0JyA6IHVuZGVmaW5lZH1cbiAgICAgICAgICByb2xlPVwidG9vbHRpcFwiXG4gICAgICAgICAgc3R5bGU9e3N0eWxlfVxuICAgICAgICA+XG4gICAgICAgICAge2xhYmVsfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvV3JhcHBlcj5cbiAgICApO1xuICB9XG59XG5cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuZXhwb3J0IGNvbnN0IFNpZGVNZW51ID0gc3R5bGVkLmFzaWRlYFxuICBmb250LXNpemU6IDFyZW07XG5gO1xuU2lkZU1lbnUuZGlzcGxheU5hbWUgPSAnU2lkZU1lbnUnO1xuXG5leHBvcnQgY29uc3QgTWVudUxpc3QgPSBzdHlsZWQudWxgXG4gIGxpbmUtaGVpZ2h0OiAxLjI1O1xuXG4gIGEge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBhZGRpbmc6IDAuNWVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS50ZXh0fTtcbiAgICAmOmhvdmVyIHtcbiAgICAgIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnByaW1hcnl9O1xuICAgIH1cbiAgICAmLmFjdGl2ZSB7XG4gICAgICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5wcmltYXJ5fTtcbiAgICB9XG4gIH1cblxuICBsaSB7XG4gICAgdWwge1xuICAgICAgbWFyZ2luOiAwLjc1ZW07XG4gICAgICBwYWRkaW5nLWxlZnQ6IDAuNzVlbTtcbiAgICB9XG4gIH1cbmA7XG5NZW51TGlzdC5kaXNwbGF5TmFtZSA9ICdNZW51TGlzdCc7XG5cbmV4cG9ydCBjb25zdCBNZW51TGFiZWwgPSBzdHlsZWQucGBcbiAgZm9udC1zaXplOiAwLjc1ZW07XG4gIGxldHRlci1zcGFjaW5nOiAwLjFlbTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcblxuICAmOm5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgICBtYXJnaW4tdG9wOiAxZW07XG4gIH1cbiAgJjpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XG4gIH1cbmA7XG5NZW51TGFiZWwuZGlzcGxheU5hbWUgPSAnTWVudUxhYmVsJztcblxuIiwiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQsIENTU1Byb3BlcnRpZXMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkLCB7IGNzcyB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBCb3ggZnJvbSAnLi4vQm94JztcbmltcG9ydCB7IENvbG9yVHlwZSB9IGZyb20gJy4uLy4uL3R5cGVzJztcblxuY29uc3QgQ2FyZEJvZHkgPSBzdHlsZWQuZGl2YFxuICBwYWRkaW5nOiAxLjI1cmVtO1xuICBtYXJnaW46IDA7XG5gO1xuXG5jb25zdCBDYXJkSGVhZGVyID0gc3R5bGVkLmhlYWRlcmBcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZzogMC41cmVtIDEuNXJlbTtcbiAgbWluLWhlaWdodDogMy41cmVtO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5ib3JkZXJ9O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5gO1xuXG5jb25zdCBDYXJkRm9vdGVyID0gc3R5bGVkLmZvb3RlcmBcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZzogMC41cmVtIDEuNXJlbTtcbiAgbWluLWhlaWdodDogMy41cmVtO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5ib3JkZXJ9O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5gO1xuXG5jb25zdCBDYXJkSW1hZ2UgPSBzdHlsZWQuYWBcbiAgd2lkdGg6IDEwMCU7XG5cbiAgaW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMDtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAzcHg7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDNweDtcbiAgfVxuYDtcblxuaW50ZXJmYWNlIEltYWdlUHJvcHMge1xuICB1cmw/OiBzdHJpbmc7XG59XG5cbmNvbnN0IENhcmRJbWFnZUhvcml6b250YWwgPSBzdHlsZWQuYTxJbWFnZVByb3BzPmBcbiAgZmxleDogMCAwIDMwJTtcbiAgbWluLXdpZHRoOiA1cmVtO1xuICB3aWR0aDogMzAlO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAzcHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDNweDtcblxuICBiYWNrZ3JvdW5kOiBuby1yZXBlYXQgY2VudGVyL2NvdmVyO1xuICAkeyh7IHVybCB9KSA9PiB1cmwgPyBjc3NgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7dXJsfSk7YCA6IHt9fVxuYDtcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgLyoqIOODrOOCueODneODs+OCt+ODluOBquOCpOODoeODvOOCuOOCkui/veWKoOOBmeOCiyAqL1xuICBpbWFnZT86IHN0cmluZztcbiAgLyoqIOOCv+OCpOODiOODqyAqL1xuICB0aXRsZT86IHN0cmluZztcbiAgLyoqIOODmOODg+ODgOODvOOBruWPs+WBtOOBq+i/veWKoOOBmeOCiyAqL1xuICBoZWFkZXJPcHRpb25zPzogYW55O1xuICAvKiogaGVhZGVy6YOo5YiG77yI44Kk44Oh44O844K477yJ44KS5qiq5Lim44Gz44Gr44GZ44KLICovXG4gIGhvcml6b250YWw/OiBib29sZWFuO1xuICAvKiogZm9vdGVyICovXG4gIGZvb3Rlcj86IGFueTtcbiAgLyoqIOiJsuOBruaMh+WumiAqL1xuICBjb2xvcj86IENvbG9yVHlwZTtcbiAgLyoqIOODmOODg+ODgOOCkiAqL1xuICBoZWFkZXJPblRvcD86IGJvb2xlYW47XG4gIC8qKiDjgqvjgrnjgr9pbmxpbmUgc3R5bGUgKi9cbiAgc3R5bGU/OiBhbnk7XG59XG5cbmNvbnN0IGhvcml6b250YWxTdHlsZTogQ1NTUHJvcGVydGllcyA9IHsgZmxleERpcmVjdGlvbjogJ3JvdycgfTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FyZCBleHRlbmRzIFB1cmVDb21wb25lbnQ8UHJvcHM+IHtcbiAgcmVuZGVySGVhZGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgaW1hZ2UsIHRpdGxlLCBob3Jpem9udGFsIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgaWYgKGltYWdlICYmICFob3Jpem9udGFsKSByZXR1cm4gKDxDYXJkSW1hZ2U+PGltZyBzcmM9e2ltYWdlfSAvPjwvQ2FyZEltYWdlPik7XG4gICAgaWYgKGltYWdlICYmIGhvcml6b250YWwpIHJldHVybiAoPENhcmRJbWFnZUhvcml6b250YWwgdXJsPXtpbWFnZX0gLz4pO1xuICAgIGlmICh0aXRsZSAmJiAhaG9yaXpvbnRhbCkgcmV0dXJuICg8Q2FyZEhlYWRlcj48aDM+e3RpdGxlfTwvaDM+PC9DYXJkSGVhZGVyPik7XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNoaWxkcmVuLCBob3Jpem9udGFsLCBmb290ZXIsIGNvbG9yIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgY29uc3QgaGVhZGVyID0gdGhpcy5yZW5kZXJIZWFkZXIoKTtcbiAgICBjb25zdCB3cmFwcGVyU3R5bGUgPSBob3Jpem9udGFsID8gaG9yaXpvbnRhbFN0eWxlIDogdW5kZWZpbmVkO1xuICAgIHJldHVybiAoXG4gICAgICA8Qm94IHN0eWxlPXt3cmFwcGVyU3R5bGV9IGNvbG9yPXtjb2xvcn0+XG4gICAgICAgIHtoZWFkZXJ9XG4gICAgICAgIDxDYXJkQm9keT5cbiAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvQ2FyZEJvZHk+XG4gICAgICAgIHtmb290ZXIgJiYgKDxDYXJkRm9vdGVyPntSZWFjdC5DaGlsZHJlbi5vbmx5KGZvb3Rlcil9PC9DYXJkRm9vdGVyPil9XG4gICAgICA8L0JveD5cbiAgICApO1xuICB9XG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBjcmVhdGVSZWYsIFJlZk9iamVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IEJveCwgeyBQcm9wcyBhcyBCb3hQcm9wcyB9IGZyb20gJy4uL0JveCc7XG5pbXBvcnQgeyBDU1NUeXBlIH0gZnJvbSAnLi4vLi4vdHlwZXMnO1xuXG5jb25zdCBXcmFwcGVyID0gc3R5bGVkLmRpdjx7IGNzcz86IENTU1R5cGUgfT5gXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgb3V0bGluZTogbm9uZTtcbiAgY29sb3I6IGluaGVyaXQ7XG5cbiAgJjpob3ZlciB7XG4gICAgY29sb3I6IGluaGVyaXQ7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB9XG5cbiAgJHsoeyBjc3MgfSkgPT4gY3NzIHx8ICcnfVxuYDtcblxuY29uc3QgVG9vbHRpcCA9IHN0eWxlZChCb3gpYFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGNsZWFyOiBib3RoO1xuICBib3gtc2hhZG93OiAwIDFweCAycHggMCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuICB6LWluZGV4OiA5OTk5O1xuICBwYWRkaW5nOiAwLjVyZW0gMDtcbiAgd2lkdGg6IGF1dG87XG4gIGhlaWdodDogYXV0bztcbiAgY3Vyc29yOiBhdXRvO1xuXG4gIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm0sIG9wYWNpdHksIHZpc2liaWxpdHk7XG4gIHRyYW5zZm9ybTogc2NhbGUoMC44KTtcbiAgb3BhY2l0eTogMDtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuXG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybSwgb3BhY2l0eSwgdmlzaWJpbGl0eTtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMTAwbXM7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSk7XG5cbiAgJi5zdGFydCB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIH1cbmA7XG5cbmludGVyZmFjZSBQcm9wcyBleHRlbmRzIEJveFByb3BzIHtcbiAgLyoqIOODnOOCv+ODs+OBruWGheWuuSAqL1xuICBsYWJlbDogUmVhY3QuUmVhY3ROb2RlO1xuICAvKiog5YaF5a6544Gu44Oq44K544OIICovXG4gIGNoaWxkcmVuPzogUmVhY3QuUmVhY3ROb2RlIHwgUmVhY3QuUmVhY3ROb2RlO1xuICAvKiog5Y+z44Gu5Z+65rqW44Gn44Oq44K544OI44KS6KGo56S644GZ44KLICovXG4gIHJpZ2h0PzogYm9vbGVhbjtcbiAgLyoqIOWQueOBjeWHuuOBl+OBjOihqOekuuOBleOCjOOCi+WgtOaJgCAqL1xuICBwb3NpdGlvbj86ICd0b3AtbGVmdCcgfCAndG9wJyB8ICd0b3AtcmlnaHQnIHwgJ2JvdHRvbS1sZWZ0JyB8ICdib3R0b20nIHwgJ2JvdHRvbS1yaWdodCc7XG4gIC8qKiDjgqvjgrnjgr/jg6BDU1PlrprnvqkgKi9cbiAgY3NzPzogQ1NTVHlwZTtcbn1cblxuaW50ZXJmYWNlIFN0YXRlIHtcbiAgc2hvdzogYm9vbGVhbjtcbiAgc3R5bGU6IGFueTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9wb3ZlciBleHRlbmRzIENvbXBvbmVudDxQcm9wcywgU3RhdGU+IHtcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBjb2xvcjogJ3doaXRlJyxcbiAgICBzdHlsZToge30sXG4gIH07XG5cbiAgc3RhdGUgPSB7IHNob3c6IGZhbHNlLCBzdHlsZToge30gfTtcblxuICBzaG91bGRDb21wb25lbnRVcGRhdGUocHJvcHM6IFByb3BzLCBzdGF0ZTogU3RhdGUpIHtcbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy5zdGF0ZS5zaG93ICE9PSBzdGF0ZS5zaG93XG4gICAgICB8fCB0aGlzLnN0YXRlLnN0eWxlICE9PSBzdGF0ZS5zdHlsZVxuICAgICAgfHwgdGhpcy5wcm9wcy5sYWJlbCAhPT0gcHJvcHMubGFiZWxcbiAgICAgIHx8IHRoaXMucHJvcHMucG9zaXRpb24gIT09IHByb3BzLnBvc2l0aW9uXG4gICAgKTtcbiAgfVxuXG4gIG9wZW5Ecm9wZG93biA9ICgpID0+IHtcbiAgICBpZiAodGhpcy5zdGF0ZS5zaG93IHx8ICF0aGlzLnRvb2x0aXAuY3VycmVudCB8fCAhdGhpcy53cmFwcGVyLmN1cnJlbnQpIHJldHVybjtcblxuICAgIGxldCBzdHlsZSA9IHt9O1xuICAgIGNvbnN0IHBhcmVudFJlY3QgPSB0aGlzLndyYXBwZXIuY3VycmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBjb25zdCB0b29sdGlwUmVjdCA9IHRoaXMudG9vbHRpcC5jdXJyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gICAgc3dpdGNoICh0aGlzLnByb3BzLnBvc2l0aW9uKSB7XG4gICAgICBjYXNlICd0b3AtbGVmdCc6IHtcbiAgICAgICAgc3R5bGUgPSB7IGJvdHRvbTogYCR7cGFyZW50UmVjdC5oZWlnaHQgKyA4fXB4YCwgbGVmdDogMCB9O1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgJ3RvcC1yaWdodCc6IHtcbiAgICAgICAgc3R5bGUgPSB7IGJvdHRvbTogYCR7cGFyZW50UmVjdC5oZWlnaHQgKyA4fXB4YCwgcmlnaHQ6IDAgfTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlICd0b3AnOiB7XG4gICAgICAgIHN0eWxlID0ge1xuICAgICAgICAgIGJvdHRvbTogYCR7cGFyZW50UmVjdC5oZWlnaHQgKyA4fXB4YCxcbiAgICAgICAgICBsZWZ0OiBgJHsocGFyZW50UmVjdC53aWR0aCAtIHRvb2x0aXBSZWN0LndpZHRoKSA+PiAxfXB4YCxcbiAgICAgICAgfTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlICdib3R0b20tcmlnaHQnOiB7XG4gICAgICAgIHN0eWxlID0geyB0b3A6IGAke3BhcmVudFJlY3QuaGVpZ2h0ICsgOH1weGAsIHJpZ2h0OiAwIH07XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSAnYm90dG9tJzoge1xuICAgICAgICBzdHlsZSA9IHtcbiAgICAgICAgICB0b3A6IGAke3BhcmVudFJlY3QuaGVpZ2h0ICsgOH1weGAsXG4gICAgICAgICAgbGVmdDogYCR7KHBhcmVudFJlY3Qud2lkdGggLSB0b29sdGlwUmVjdC53aWR0aCkgPj4gMX1weGAsXG4gICAgICAgIH07XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgLy8gYm90dG9tLWxlZnRcbiAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgc3R5bGUgPSB7IHRvcDogYCR7cGFyZW50UmVjdC5oZWlnaHQgKyA4fXB4YCwgbGVmdDogMCB9O1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLnNldFN0YXRlKHsgc3R5bGUsIHNob3c6IHRydWUgfSk7XG4gIH1cblxuICBjbG9zZURyb3Bkb3duID0gKCkgPT4ge1xuICAgIGlmICh0aGlzLnN0YXRlLnNob3cpIHRoaXMuc2V0U3RhdGUoeyBzaG93OiBmYWxzZSB9KTtcbiAgfVxuXG4gIHRvb2x0aXA6IFJlZk9iamVjdDxIVE1MRGl2RWxlbWVudD4gPSBjcmVhdGVSZWYoKTtcbiAgd3JhcHBlcjogUmVmT2JqZWN0PEhUTUxEaXZFbGVtZW50PiA9IGNyZWF0ZVJlZigpO1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGxhYmVsLCBjaGlsZHJlbiwgc3R5bGUsIGNzcywgLi4ucmVzdCB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IHNob3cgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgdG9vbHRpcFN0eWxlID0geyAuLi5zdHlsZSwgLi4udGhpcy5zdGF0ZS5zdHlsZSB9O1xuICAgIHJldHVybiAoXG4gICAgICA8V3JhcHBlclxuICAgICAgICB0YWJJbmRleD17MH1cbiAgICAgICAgcm9sZT1cImJ1dHRvblwiXG4gICAgICAgIHJlZj17dGhpcy53cmFwcGVyfVxuICAgICAgICBvbkZvY3VzPXt0aGlzLm9wZW5Ecm9wZG93bn1cbiAgICAgICAgb25CbHVyPXt0aGlzLmNsb3NlRHJvcGRvd259XG4gICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6ICdibG9jaycsIHBvc2l0aW9uOiAncmVsYXRpdmUnIH19XG4gICAgICAgIGNsYXNzTmFtZT17dGhpcy5wcm9wcy5jbGFzc05hbWV9XG4gICAgICAgIGNzcz17Y3NzfVxuICAgICAgPlxuICAgICAgICB7bGFiZWx9XG4gICAgICAgIDxUb29sdGlwXG4gICAgICAgICAgY2xhc3NOYW1lPXtzaG93ID8gJ3N0YXJ0JyA6IHVuZGVmaW5lZH1cbiAgICAgICAgICByb2xlPVwidG9vbHRpcFwiXG4gICAgICAgICAgcmVmPXt0aGlzLnRvb2x0aXB9XG4gICAgICAgICAgc3R5bGU9e3RoaXMuc3RhdGUuc3R5bGV9XG4gICAgICAgICAgey4uLnJlc3R9XG4gICAgICAgID5cbiAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvVG9vbHRpcD5cbiAgICAgIDwvV3JhcHBlcj5cbiAgICApO1xuICB9XG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCwgSFRNTEF0dHJpYnV0ZXMsIEZyYWdtZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY3JlYXRlUG9ydGFsIH0gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBDU1NUcmFuc2l0aW9uIGZyb20gJ3JlYWN0LXRyYW5zaXRpb24tZ3JvdXAvQ1NTVHJhbnNpdGlvbic7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBCb3ggZnJvbSAnLi4vQm94JztcbmltcG9ydCBDb2wgZnJvbSAnLi4vR3JpZC9Db2wnO1xuaW1wb3J0IHsgQ29sb3JUeXBlLCBDb2xTaXplVHlwZSwgQ1NTVHlwZSB9IGZyb20gJy4uLy4uL3R5cGVzJztcblxuY29uc3QgRVNDX0tFWSA9IDI3O1xuXG5jb25zdCBXcmFwcGVyID0gc3R5bGVkLmRpdjx7IGNzcz86IENTU1R5cGUsIHNoYWRvd0NvbG9yPzogc3RyaW5nIH0+YFxuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgei1pbmRleDogOTk5NztcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBhZGRpbmc6IDAuNzVyZW07XG5cbiAgLnYtbW9kYWwtYm9keSB7XG4gICAgei1pbmRleDogOTk5OTtcbiAgICBtYXJnaW46IDA7XG4gICAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybSwgb3BhY2l0eTtcbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiB0cmFuc2Zvcm0sIG9wYWNpdHk7XG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKTtcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAyMDBtcztcbiAgfVxuXG4gICYuZmFkZS1lbnRlciA+IC52LW1vZGFsLWJvZHkge1xuICAgIG9wYWNpdHk6IDAuMDE7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjgpO1xuICB9XG4gICYuZmFkZS1lbnRlci1hY3RpdmUgPiAudi1tb2RhbC1ib2R5IHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIH1cbiAgJi5mYWRlLWV4aXQgPiAudi1tb2RhbC1ib2R5IHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIH1cbiAgJi5mYWRlLWV4aXQtYWN0aXZlID4gLnYtbW9kYWwtYm9keSB7XG4gICAgb3BhY2l0eTogMC4wMTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOCk7XG4gIH1cblxuICAudi1tb2RhbC1zaGFkb3cge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICB0b3A6IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHsoeyBzaGFkb3dDb2xvciB9KSA9PiBzaGFkb3dDb2xvciB8fCAndHJhbnNwYXJlbnQnfTtcbiAgfVxuXG4gICR7KHsgY3NzIH0pID0+IGNzcyB8fCB7fX1cbmA7XG5cbmludGVyZmFjZSBQcm9wcyBleHRlbmRzIEhUTUxBdHRyaWJ1dGVzPEhUTUxEaXZFbGVtZW50PiB7XG4gIC8qKiDjg5jjg4Pjg4Djg7zjga7jgr/jgqTjg4jjg6vmlofoqIAgKi9cbiAgdGl0bGU/OiBhbnk7XG4gIC8qKiAxfjEy44Gu44Oi44O844OA44Or44K144Kk44K6ICovXG4gIHNpemU/OiBDb2xTaXplVHlwZTtcbiAgLyoqIHRydWXjga7loLTlkIjjgIHjg6Ljg7zjg4Djg6vjgpLooajnpLrjgZfjgb7jgZnjgIIgKi9cbiAgc2hvdz86IGJvb2xlYW47XG4gIC8qKiDjg6Ljg7zjg4Djg6vjga5ib2R544Gr5YWl44KM44KL5YaF5a65ICovXG4gIGNoaWxkcmVuPzogYW55O1xuICAvKiog44Oi44O844OA44Or44GuZm9vdGVy44Gr5YWl44KM44KL5YaF5a65ICovXG4gIGZvb3Rlcj86IGFueTtcbiAgLyoqIOODouODvOODgOODq+OBruiJsiAqL1xuICBjb2xvcj86IENvbG9yVHlwZTtcbiAgLyoqIOODouODvOODgOODq+OCkumWieOBmOOCi+WHpueQhiAqL1xuICBjbG9zZU1vZGFsOiAoKSA9PiB2b2lkO1xuICAvKiog44Kq44O844OQ44O844Os44Kk44Gu44Kv44Oq44OD44Kv44Gn44Oi44O844OA44Or44Kv44Ot44O844K6ICovXG4gIGNsb3NlT25PdmVybGF5PzogYm9vbGVhbjtcbiAgLyoqIGVzY+ODnOOCv+ODs+OBp+OCr+ODreODvOOCuiAqL1xuICBjbG9zZU9uRXNjPzogYm9vbGVhbjtcbiAgLyoqIG92ZXJsYXnjga7og4zmma/jga7oqK3lrpogKi9cbiAgc2hhZG93Q29sb3I/OiBzdHJpbmc7XG4gIC8qKiDjg6Ljg7zjg4Djg6vlpJbjgavooajnpLrjgZnjgotFbGVtZW50cyAqL1xuICBleHRlcm5hbD86IGFueTtcbiAgLyoqIOOCq+OCueOCv+ODoENTU+Wumue+qSAqL1xuICBjc3M/OiBDU1NUeXBlO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb2RhbCBleHRlbmRzIFB1cmVDb21wb25lbnQ8UHJvcHM+IHtcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBzaG93OiBmYWxzZSxcbiAgICBjb2xvcjogJ3doaXRlJyxcbiAgICBzaXplOiA2LFxuICAgIHNoYWRvd0NvbG9yOiAncmdiYSgxMCwxMCwxMCwuODYpJyxcbiAgfTtcblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICBpZiAodGhpcy5lbGVtZW50KSB7XG4gICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHRoaXMuZWxlbWVudCk7XG4gICAgfVxuICB9XG5cbiAgb25LZXlEb3duID0gKGU6IGFueSkgPT4ge1xuICAgIGlmICh0aGlzLnByb3BzLmNsb3NlT25Fc2MgJiYgZS5rZXlDb2RlID09PSBFU0NfS0VZICYmIHRoaXMucHJvcHMuY2xvc2VNb2RhbCkge1xuICAgICAgdGhpcy5wcm9wcy5jbG9zZU1vZGFsKCk7XG4gICAgfVxuICB9XG5cbiAgb25DbGlja092ZXJsYXkgPSAoKSA9PiB7XG4gICAgaWYgKHRoaXMucHJvcHMuY2xvc2VPbk92ZXJsYXkgJiYgdGhpcy5wcm9wcy5jbG9zZU1vZGFsKSB7XG4gICAgICB0aGlzLnByb3BzLmNsb3NlTW9kYWwoKTtcbiAgICB9XG4gIH1cblxuICBlbGVtZW50PzogSFRNTERpdkVsZW1lbnQ7XG4gIHNob3VsZENsb3NlOiBib29sZWFuIHwgbnVsbCA9IG51bGw7XG5cbiAgcmVuZGVyKCk6IFJlYWN0LlJlYWN0UG9ydGFsIHwgbnVsbCB7XG4gICAgaWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJ1bmRlZmluZWRcIiAmJiAhdGhpcy5lbGVtZW50KSB7XG4gICAgICB0aGlzLmVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5lbGVtZW50KTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5lbGVtZW50KSB7XG4gICAgICBjb25zdCB7XG4gICAgICAgIHNob3csIHNpemUsIHRpdGxlLCBjaGlsZHJlbiwgZm9vdGVyLCBjb2xvciwgb25DbGljaywgLi4ucmVzdFxuICAgICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgIHJldHVybiBjcmVhdGVQb3J0YWwoKFxuICAgICAgICA8Q1NTVHJhbnNpdGlvblxuICAgICAgICAgIGNsYXNzTmFtZXM9XCJmYWRlXCJcbiAgICAgICAgICB0aW1lb3V0PXsyMDB9XG4gICAgICAgICAgaW49e3Nob3d9XG4gICAgICAgICAgdW5tb3VudE9uRXhpdFxuICAgICAgICA+XG4gICAgICAgICAgPFdyYXBwZXIgcm9sZT1cImRvY3VtZW50XCIgey4uLnJlc3R9PlxuICAgICAgICAgICAgPENvbCBjbGFzc05hbWU9XCJ2LW1vZGFsLWJvZHlcIiBzaXplPXtzaXplfSBhdXRvIHJvbGU9XCJkaWFsb2dcIj5cbiAgICAgICAgICAgICAgPEJveCBjb2xvcj17Y29sb3J9PlxuICAgICAgICAgICAgICAgIHt0aXRsZSA/IHRpdGxlIDogbnVsbH1cbiAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgICAgICAgICAge2Zvb3RlciA/IGZvb3RlciA6IG51bGx9XG4gICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICB7dGhpcy5wcm9wcy5leHRlcm5hbH1cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidi1tb2RhbC1zaGFkb3dcIiBvbkNsaWNrPXt0aGlzLm9uQ2xpY2tPdmVybGF5fSAvPlxuICAgICAgICAgIDwvV3JhcHBlcj5cbiAgICAgICAgPC9DU1NUcmFuc2l0aW9uPlxuICAgICAgKSwgdGhpcy5lbGVtZW50KTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjcmVhdGVQb3J0YWwgfSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IENTU1RyYW5zaXRpb24gZnJvbSAncmVhY3QtdHJhbnNpdGlvbi1ncm91cC9DU1NUcmFuc2l0aW9uJztcbmltcG9ydCBUcmFuc2l0aW9uR3JvdXAgZnJvbSAncmVhY3QtdHJhbnNpdGlvbi1ncm91cC9UcmFuc2l0aW9uR3JvdXAnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmltcG9ydCBCb3ggZnJvbSAnLi4vQm94JztcbmltcG9ydCB7IENvbG9yVHlwZSB9IGZyb20gJy4uLy4uL3R5cGVzJztcblxudHlwZSBQb3NpdGlvblR5cGUgPSAndG9wJyB8ICd0b3AtbGVmdCcgfCAndG9wLXJpZ2h0JyB8ICdib3R0b20nIHwgJ2JvdHRvbS1sZWZ0JyB8ICdib3R0b20tcmlnaHQnO1xuXG5pbnRlcmZhY2UgVG9hc3RUeXBlIHtcbiAgLyoqIOiqjeitmElEICovXG4gIGlkOiBzdHJpbmc7XG4gIC8qKiDooajnpLrjgZnjgovlhoXlrrkgKi9cbiAgbWVzc2FnZT86IFJlYWN0LlJlYWN0Tm9kZTtcbiAgLyoqIOiDjOaZr+OBruiJsiAqL1xuICBjb2xvcj86IENvbG9yVHlwZTtcbiAgLyoqIOihqOekuuOBleOCjOOCi+aZgumWkyBudWxs44Gu5aC05ZCI44Gv6Ieq5YuV44Gn6ZaJ44GY44KJ44KM44G+44Gb44KTICovXG4gIGR1cmF0aW9uPzogbnVtYmVyIHwgbnVsbDtcbn1cblxuaW50ZXJmYWNlIFRvYXN0UHJvcHMgZXh0ZW5kcyBUb2FzdFR5cGUge1xuICBjbGVhcjogKCkgPT4gdm9pZDtcbn1cblxuY29uc3QgV3JhcHBlciA9IHN0eWxlZChCb3gpYFxuICBwYWRkaW5nOiAwLjM3NWVtIDAuNzVlbTtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICB6LWluZGV4OiA5OTk5O1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG5cbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtLCBvcGFjaXR5O1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAyNTBtcztcblxuICAmLm1vdmUtZW50ZXIge1xuICAgIG9wYWNpdHk6IDAuMDE7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjgpO1xuICB9XG4gICYubW92ZS1lbnRlci1hY3RpdmUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgfVxuICAmLm1vdmUtZXhpdCB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB9XG4gICYubW92ZS1leGl0LWFjdGl2ZSB7XG4gICAgb3BhY2l0eTogMC4wMTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOCk7XG4gIH1cbmA7XG5cbmV4cG9ydCBjbGFzcyBUb2FzdEl0ZW0gZXh0ZW5kcyBQdXJlQ29tcG9uZW50PFRvYXN0UHJvcHM+IHtcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBkdXJhdGlvbjogNTAwMCxcbiAgfTtcblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5kdXJhdGlvbiAhPT0gbnVsbCkge1xuICAgICAgc2V0VGltZW91dCh0aGlzLnByb3BzLmNsZWFyLCB0aGlzLnByb3BzLmR1cmF0aW9uKTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBtZXNzYWdlLCBjb2xvciB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPFdyYXBwZXIgYm9yZGVybGVzcyBjb2xvcj17Y29sb3J9PlxuICAgICAgICB7bWVzc2FnZX1cbiAgICAgIDwvV3JhcHBlcj5cbiAgICApO1xuICB9XG59XG5cbmZ1bmN0aW9uIHNldFBvc2l0aW9uKHBvc2l0aW9uOiBzdHJpbmcsIGlzRml4ZWQ/OiBib29sZWFuKSB7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICBjb25zdCBiYXNlID0gYHBvc2l0aW9uOiAke2lzRml4ZWQgPyAnZml4ZWQnIDogJ2Fic29sdXRlJ307IHotaW5kZXg6IDk5OTk7IGRpc3BsYXk6IGZsZXg7IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IGA7XG4gIHN3aXRjaCAocG9zaXRpb24pIHtcbiAgICBjYXNlICdib3R0b20nOiB7XG4gICAgICByZXR1cm4gYCR7YmFzZX0gYm90dG9tOiAxcmVtOyBsZWZ0OiA1MCU7IGFsaWduLWl0ZW06IGNlbnRlcjsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO2A7XG4gICAgfVxuICAgIGNhc2UgJ2JvdHRvbS1sZWZ0Jzoge1xuICAgICAgcmV0dXJuIGAke2Jhc2V9IGJvdHRvbTogMXJlbTsgbGVmdDogMXJlbTsgYWxpZ24taXRlbTogZmxleC1zdGFydDtgO1xuICAgIH1cbiAgICBjYXNlICdib3R0b20tcmlnaHQnOiB7XG4gICAgICByZXR1cm4gYCR7YmFzZX0gYm90dG9tOiAxcmVtOyByaWdodDogMXJlbTsgYWxpZ24taXRlbTogZmxleC1lbmQ7YDtcbiAgICB9XG4gICAgY2FzZSAndG9wJzoge1xuICAgICAgcmV0dXJuIGAke2Jhc2V9IHRvcDogMXJlbTsgbGVmdDogNTAlOyBhbGlnbi1pdGVtOiBjZW50ZXI7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtgO1xuICAgIH1cbiAgICBjYXNlICd0b3AtbGVmdCc6IHtcbiAgICAgIHJldHVybiBgJHtiYXNlfSB0b3A6IDFyZW07IGxlZnQ6IDFyZW07IGFsaWduLWl0ZW06IGZsZXgtc3RhcnQ7YDtcbiAgICB9XG4gICAgY2FzZSAndG9wLXJpZ2h0JzpcbiAgICBkZWZhdWx0OiB7XG4gICAgICByZXR1cm4gYCR7YmFzZX0gdG9wOiAxcmVtOyByaWdodDogMXJlbTsgYWxpZ24taXRlbTogZmxleC1lbmQ7YDtcbiAgICB9XG4gIH1cbn1cblxuaW50ZXJmYWNlIENvbnRhaW5lclByb3BzIHtcbiAgLyoqIOihqOekuuOBmeOCi1RvYXN044Gu44Oq44K544OIICovXG4gIHRvYXN0czogVG9hc3RUeXBlW107XG4gIC8qKiB0b2FzdOOCkua2iOOBmeOCv+OCpOODn+ODs+OCsOOBruOCs+ODvOODq+ODkOODg+OCryAqL1xuICBjbGVhcjogKGlkOiBzdHJpbmcpID0+IHZvaWQ7XG4gIC8qKiB0b3AsIHRvcC1yaWdodCwgdG9wLWxlZnQsIGJvdHRvbSwgYm90dG9tLXJpZ2h0LCBib3R0b20tbGVmdCAqL1xuICBwb3NpdGlvbj86IFBvc2l0aW9uVHlwZTtcbiAgLyoqIOOCueOCr+ODreODvOODq+OBl+OBpuOCguWbuuWumuOBqOOBl+OBpuihqOekuuOBmeOCiyAqL1xuICBmaXhlZD86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvYXN0Q29udGFpbmVyIGV4dGVuZHMgQ29tcG9uZW50PENvbnRhaW5lclByb3BzPiB7XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgdG9hc3RzOiBbXSxcbiAgICBwb3NpdGlvbjogJ3RvcC1yaWdodCcsXG4gICAgZml4ZWQ6IGZhbHNlLFxuICB9O1xuXG4gIHNob3VsZENvbXBvbmVudFVwZGF0ZShwcm9wczogQ29udGFpbmVyUHJvcHMpIHtcbiAgICByZXR1cm4gcHJvcHMudG9hc3RzLmxlbmd0aCAhPT0gdGhpcy5wcm9wcy50b2FzdHMubGVuZ3RoIHx8XG4gICAgICBwcm9wcy5wb3NpdGlvbiAhPT0gdGhpcy5wcm9wcy5wb3NpdGlvbjtcbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcm9wczogQ29udGFpbmVyUHJvcHMpIHtcbiAgICBpZiAoXG4gICAgICB0aGlzLmVsZW1lbnQgJiZcbiAgICAgIChwcm9wcy5wb3NpdGlvbiAhPT0gdGhpcy5wcm9wcy5wb3NpdGlvbiB8fCBwcm9wcy5maXhlZCAhPT0gdGhpcy5wcm9wcy5maXhlZClcbiAgICApIHtcbiAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5jc3NUZXh0ID0gc2V0UG9zaXRpb24odGhpcy5wcm9wcy5wb3NpdGlvbiEsIHRoaXMucHJvcHMuZml4ZWQpO1xuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIGlmICh0aGlzLmVsZW1lbnQpIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQodGhpcy5lbGVtZW50KTtcbiAgfVxuXG4gIGNsZWFyID0gKGlkOiBzdHJpbmcpID0+ICgpID0+IHtcbiAgICB0aGlzLnByb3BzLmNsZWFyKGlkKTtcbiAgfVxuXG4gIHJlbmRlclRvYXN0ID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgdG9hc3RzIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8VHJhbnNpdGlvbkdyb3VwIGNvbXBvbmVudD17bnVsbH0+XG4gICAgICAgIHt0b2FzdHMubWFwKHByb3BzID0+IChcbiAgICAgICAgICA8Q1NTVHJhbnNpdGlvblxuICAgICAgICAgICAga2V5PXtwcm9wcy5pZH1cbiAgICAgICAgICAgIHRpbWVvdXQ9ezI1MH1cbiAgICAgICAgICAgIGNsYXNzTmFtZXM9XCJtb3ZlXCJcbiAgICAgICAgICAgIHVubW91bnRPbkV4aXRcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8VG9hc3RJdGVtXG4gICAgICAgICAgICAgIGtleT17cHJvcHMuaWR9XG4gICAgICAgICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgICAgICAgY2xlYXI9e3RoaXMuY2xlYXIocHJvcHMuaWQpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0NTU1RyYW5zaXRpb24+XG4gICAgICAgICkpfVxuICAgICAgPC9UcmFuc2l0aW9uR3JvdXA+XG4gICAgKTtcbiAgfVxuXG4gIGVsZW1lbnQ/OiBIVE1MRGl2RWxlbWVudDtcblxuICByZW5kZXIoKTogUmVhY3QuUmVhY3RQb3J0YWwgfCBudWxsIHtcbiAgICBpZiAodHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJyAmJiAhdGhpcy5lbGVtZW50KSB7XG4gICAgICB0aGlzLmVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5jc3NUZXh0ID0gc2V0UG9zaXRpb24odGhpcy5wcm9wcy5wb3NpdGlvbiEsIHRoaXMucHJvcHMuZml4ZWQpO1xuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLmVsZW1lbnQpO1xuICAgIH1cblxuXG4gICAgaWYgKHRoaXMuZWxlbWVudCkge1xuICAgICAgcmV0dXJuIGNyZWF0ZVBvcnRhbCh0aGlzLnJlbmRlclRvYXN0KCksIHRoaXMuZWxlbWVudCk7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIENoaWxkcmVuLCBDU1NQcm9wZXJ0aWVzIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgc2V0QWxpZ24gZnJvbSAnLi4vLi4vdXRpbHMvc2V0QWxpZ24nO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi9CdXR0b24nO1xuaW1wb3J0IHsgQ29sb3JUeXBlLCBUaGVtZVR5cGUsIEFsaWduVHlwZSB9IGZyb20gJy4uLy4uL3R5cGVzJztcblxuY29uc3QgV3JhcHBlciA9IHN0eWxlZC5uYXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogJHtzZXRBbGlnbn07XG5cbiAgLnRhYi1jb250ZW50IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICAkeyh7IGFsaWduIH0pID0+IGFsaWduID8gJycgOiAnZmxleC1ncm93OiAxOyd9XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICB9XG5gO1xuXG5pbnRlcmZhY2UgSXRlbVByb3BzIHtcbiAgYWxpZ24/OiBhbnk7XG4gIGFjdGl2ZTogYm9vbGVhbjtcbn1cblxuY29uc3QgVGFiSXRlbSA9IHN0eWxlZC5kaXY8SXRlbVByb3BzPmBcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZsZXgtZ3JvdzogMTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuXG4gIGEge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUudGV4dH07XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgIHBhZGRpbmc6IDAuMzc1ZW0gMC43NWVtO1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcblxuICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IGJhY2tncm91bmQtY29sb3I7XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMTUwbXM7XG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xuXG4gICAgJjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMDMpO1xuICAgIH1cbiAgfVxuYDtcblxuZnVuY3Rpb24gc2V0Q29sb3IoeyB0aGVtZSwgY29sb3IgfTogeyB0aGVtZTogVGhlbWVUeXBlLCBjb2xvcj86IENvbG9yVHlwZSB9KSB7XG4gIHJldHVybiAhY29sb3IgPyB0aGVtZS5iYWNrZ3JvdW5kIDogdGhlbWVbY29sb3JdO1xufVxuXG5pbnRlcmZhY2UgSW5kaWNhdG9yUHJvcHMge1xuICBjb2xvcj86IENvbG9yVHlwZTtcbiAgc3R5bGU/OiBDU1NQcm9wZXJ0aWVzO1xufVxuXG5jb25zdCBJbmRpY2F0b3IgPSBzdHlsZWQuZGl2PEluZGljYXRvclByb3BzPmBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICR7c2V0Q29sb3J9O1xuICBoZWlnaHQ6IDJweDtcblxuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQ7XG5cbiAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybTtcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAyMDBtcztcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKTtcbmA7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIC8qKiDoibLmjIflrpogKi9cbiAgY29sb3I/OiBDb2xvclR5cGU7XG4gIC8qKiBsZWZ0IHwgcmlnaHQgfCBjZW50ZXIgKi9cbiAgYWxpZ24/OiBBbGlnblR5cGU7XG4gIC8qKiDkuIDmsJfjgavooajnpLrjgZnjgovmnIDlpKfjga7mlbDjga7mjIflrpogKi9cbiAgbWF4SXRlbXM/OiBudW1iZXI7XG5cbiAgY2hpbGRyZW46IGFueTtcbn1cblxuaW50ZXJmYWNlIFN0YXRlIHtcbiAgc3RhcnQ6IG51bWJlcjtcbiAgY3VycmVudD86IG51bWJlcjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFicyBleHRlbmRzIENvbXBvbmVudDxQcm9wcz4ge1xuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIG1heEl0ZW1zOiA1LFxuICB9XG5cbiAgc3RhdGljIGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyhwcm9wczogUHJvcHMsIHN0YXRlOiBTdGF0ZSkge1xuICAgIGxldCBhY3RpdmVJbmRleDtcbiAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gcHJvcHMuY2hpbGRyZW4ubGVuZ3RoOyBpIDwgbGVuOyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IGNoaWxkID0gcHJvcHMuY2hpbGRyZW5baV07XG4gICAgICBpZiAoY2hpbGQucHJvcHMuYWN0aXZlKSB7XG4gICAgICAgIGFjdGl2ZUluZGV4ID0gaTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLnN0YXRlLFxuICAgICAgY3VycmVudDogYWN0aXZlSW5kZXgsXG4gICAgfTtcbiAgfVxuXG4gIHN0YXRpYyBJdGVtID0gVGFiSXRlbTtcblxuICBzdGF0ZSA9IHsgc3RhcnQ6IDAsIGN1cnJlbnQ6IG51bGwgfTtcblxuICBzaG91bGRDb21wb25lbnRVcGRhdGUocHJvcHM6IFByb3BzLCBzdGF0ZTogU3RhdGUpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZS5zdGFydCAhPT0gc3RhdGUuc3RhcnQgfHxcbiAgICAgIHRoaXMuc3RhdGUuY3VycmVudCAhPT0gc3RhdGUuY3VycmVudDtcbiAgfVxuXG4gIG9uTmV4dCA9ICgpID0+IHtcbiAgICBjb25zdCB0aHJlc2hvbGQgPSB0aGlzLnByb3BzLm1heEl0ZW1zITtcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuc3RhdGUuc3RhcnQgKyB0aHJlc2hvbGQ7XG4gICAgY29uc3QgY291bnQgPSBDaGlsZHJlbi5jb3VudCh0aGlzLnByb3BzLmNoaWxkcmVuKVxuICAgIGlmICh2YWx1ZSA8IGNvdW50KSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgc3RhcnQ6IHZhbHVlIH0pO1xuICAgIH1cbiAgfVxuXG4gIG9uUHJldiA9ICgpID0+IHtcbiAgICBpZiAodGhpcy5zdGF0ZS5zdGFydCA9PT0gMCkgcmV0dXJuO1xuXG4gICAgY29uc3QgdGhyZXNob2xkID0gdGhpcy5wcm9wcy5tYXhJdGVtcyE7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLnN0YXRlLnN0YXJ0IC0gdGhyZXNob2xkO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBzdGFydDogdmFsdWUgPCAwID8gMCA6IHZhbHVlIH0pO1xuICB9XG5cbiAgZ2V0SW5kaWNhdG9yUG9zaXRpb24gPSAoKTogQ1NTUHJvcGVydGllcyB8IHVuZGVmaW5lZCA9PiB7XG4gICAgY29uc3QgeyBjdXJyZW50IH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHsgY2hpbGRyZW4sIG1heEl0ZW1zIH0gPSB0aGlzLnByb3BzO1xuICAgIGlmIChjdXJyZW50ID09PSBudWxsIHx8IGN1cnJlbnQgPT09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICBpZiAoIWNoaWxkcmVuIHx8ICFjaGlsZHJlbi5sZW5ndGgpIHJldHVybiB1bmRlZmluZWQ7XG5cbiAgICBjb25zdCB0b3RhbCA9IGNoaWxkcmVuLmxlbmd0aCA+IG1heEl0ZW1zISA/IG1heEl0ZW1zIDogY2hpbGRyZW4ubGVuZ3RoO1xuICAgIGNvbnN0IHZhbHVlID0gKGN1cnJlbnQgKiAxMDApICsgJyUnO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHZpc2liaWxpdHk6ICd2aXNpYmxlJyxcbiAgICAgIHdpZHRoOiBgJHtNYXRoLnJvdW5kKCgxMDAgLyB0b3RhbCkpfSVgLFxuICAgICAgdHJhbnNmb3JtOiBgdHJhbnNsYXRlWCgke3ZhbHVlfSlgXG4gICAgfTtcbiAgfVxuXG4gIC8vIFRPRE86IG1ha2UgdGFiIHNjcm9sbGFibGUgdmlhIGFycm93IGljb25zXG4gIHJlbmRlckNoaWxkcmVuID0gKGNoaWxkOiBSZWFjdC5SZWFjdENoaWxkLCBpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgaWYgKHRoaXMuc3RhdGUuc3RhcnQgPiBpbmRleCkgcmV0dXJuIG51bGw7XG4gICAgaWYgKHRoaXMuc3RhdGUuc3RhcnQgKyBpbmRleCA+PSB0aGlzLnByb3BzLm1heEl0ZW1zISkgcmV0dXJuIG51bGw7XG4gICAgaWYgKHR5cGVvZiBjaGlsZCA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIGNoaWxkID09PSAnbnVtYmVyJykgcmV0dXJuIG51bGw7XG5cbiAgICByZXR1cm4gPFRhYkl0ZW0gey4uLmNoaWxkLnByb3BzfSBhbGlnbj17dGhpcy5wcm9wcy5hbGlnbn0gLz47XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjaGlsZHJlbiwgYWxpZ24sIGNvbG9yLCBtYXhJdGVtcyB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IHN0YXJ0IH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHRvdGFsID0gY2hpbGRyZW4gPyBjaGlsZHJlbi5sZW5ndGggOiAwO1xuICAgIGNvbnN0IHN0eWxlID0gdGhpcy5nZXRJbmRpY2F0b3JQb3NpdGlvbigpO1xuICAgIHJldHVybiAoXG4gICAgICA8V3JhcHBlciBhbGlnbj17YWxpZ259PlxuICAgICAgICB7c3RhcnQgPiBtYXhJdGVtcyEgJiYgKDxCdXR0b24gY29sb3I9XCJ0ZXh0XCI+eyc8J308L0J1dHRvbj4pfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYi1jb250ZW50XCI+XG4gICAgICAgICAge0NoaWxkcmVuLm1hcChjaGlsZHJlbiwgdGhpcy5yZW5kZXJDaGlsZHJlbil9XG4gICAgICAgICAgPEluZGljYXRvciBjb2xvcj17Y29sb3J9IHN0eWxlPXtzdHlsZX0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHt0b3RhbCA+IG1heEl0ZW1zISAmJiBzdGFydCA+IG1heEl0ZW1zISAmJiAoPEJ1dHRvbiBjb2xvcj1cInRleHRcIj57Jz4nfTwvQnV0dG9uPil9XG4gICAgICA8L1dyYXBwZXI+XG4gICAgKTtcbiAgfVxufTtcbiIsImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50LCBIVE1MQXR0cmlidXRlcyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IENTU1RyYW5zaXRpb24gZnJvbSAncmVhY3QtdHJhbnNpdGlvbi1ncm91cC9DU1NUcmFuc2l0aW9uJztcbmltcG9ydCB7IENvbG9yVHlwZSwgQ1NTVHlwZSB9IGZyb20gJy4uLy4uL3R5cGVzJztcblxuaW50ZXJmYWNlIExvYWRpbmdQcm9wcyBleHRlbmRzIEhUTUxBdHRyaWJ1dGVzPEhUTUxEaXZFbGVtZW50PiB7XG4gIC8qKiB0cnVl44Gu5aC05ZCI6ZaL5aeL44GX44G+44GZICovXG4gIGxvYWRpbmc6IGJvb2xlYW47XG4gIC8qKiDjg5Djg7zjga7oibLjga7mjIflrpogKi9cbiAgY29sb3I/OiBDb2xvclR5cGU7XG4gIC8qKiDjg5Djg7zjga5DU1MgcG9zaXRpb27jga7mjIflrpogKi9cbiAgcG9zaXRpb24/OiAnYWJzb2x1dGUnIHwgJ2ZpeGVkJyB8ICdzdGlja3knO1xuICAvKiog44OQ44O844Gu6IOM5pmv44Gu6Imy44Gu6Ieq55Sx5oyH5a6aICovXG4gIGJhY2tncm91bmQ/OiBzdHJpbmc7XG4gIC8qKiDjg5Djg7zjga7nuKbluYXjga7lrprnvqkgKi9cbiAgc2l6ZT86IHN0cmluZztcbiAgLyoqIOODkOODvOOBruOCouODi+ODoeODvOOCt+ODp+ODs+OBrmR1cmF0aW9u5oyH5a6aICjljZjkvY3vvJptcykgKi9cbiAgZHVyYXRpb24/OiBudW1iZXI7XG4gIGNzcz86IENTU1R5cGU7XG59XG5cbmNvbnN0IFdyYXBwZXIgPSBzdHlsZWQuZGl2PExvYWRpbmdQcm9wcz5gXG4gIHBvc2l0aW9uOiAkeyh7IHBvc2l0aW9uIH0pID0+IHBvc2l0aW9ufTtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHsoeyBiYWNrZ3JvdW5kIH0pID0+IGJhY2tncm91bmR9O1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuXG4gIC5sb2FkaW5nLWJhciB7XG4gICAgaGVpZ2h0OiAkeyh7IHNpemUgfSkgPT4gc2l6ZX07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHsoeyBjb2xvciwgdGhlbWUgfSkgPT4gdGhlbWVbY29sb3IhXX07XG5cbiAgICB3aWxsLWNoYW5nZTogd2lkdGgsIG9wYWNpdHk7XG4gICAgei1pbmRleDogMTAwMDAwMDtcblxuICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IHdpZHRoLCBvcGFjaXR5O1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246ICR7KHsgZHVyYXRpb24gfSkgPT4gZHVyYXRpb259bXM7XG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcblxuICAgICYubG9hZC1lbnRlciB7XG4gICAgICB3aWR0aDogMDtcbiAgICB9XG5cbiAgICAmLmxvYWQtZW50ZXItZG9uZSB7XG4gICAgICB3aWR0aDogODUlO1xuICAgIH1cblxuICAgICYubG9hZC1leGl0IHtcbiAgICAgIHdpZHRoOiA4NSU7XG4gICAgfVxuXG4gICAgJi5sb2FkLWV4aXQtYWN0aXZlIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG4gIH1cblxuICAkeyh7IGNzcyB9KSA9PiBjc3MgfHwge319XG5gO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvYWRpbmdCYXIgZXh0ZW5kcyBQdXJlQ29tcG9uZW50PExvYWRpbmdQcm9wcz4ge1xuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgIGNvbG9yOiAncHJpbWFyeScsXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgYmFja2dyb3VuZDogJ3RyYW5zcGFyZW50JyxcbiAgICBzaXplOiAnM3B4JyxcbiAgICBkdXJhdGlvbjogMTUwLFxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8V3JhcHBlciB7Li4udGhpcy5wcm9wc30+XG4gICAgICAgIDxDU1NUcmFuc2l0aW9uXG4gICAgICAgICAgY2xhc3NOYW1lcz1cImxvYWRcIlxuICAgICAgICAgIHRpbWVvdXQ9e3RoaXMucHJvcHMuZHVyYXRpb24hfVxuICAgICAgICAgIGluPXt0aGlzLnByb3BzLmxvYWRpbmd9XG4gICAgICAgICAgdW5tb3VudE9uRXhpdFxuICAgICAgICA+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2FkaW5nLWJhclwiIC8+XG4gICAgICAgIDwvQ1NTVHJhbnNpdGlvbj5cbiAgICAgIDwvV3JhcHBlcj5cbiAgICApO1xuICB9XG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgSFRNTEF0dHJpYnV0ZXMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkLCB7IGNzcywga2V5ZnJhbWVzIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgQ29sb3JUeXBlLCBUaGVtZVR5cGUgfSBmcm9tICcuLi8uLi90eXBlcyc7XG5cbmludGVyZmFjZSBQcm9wcyBleHRlbmRzIEhUTUxBdHRyaWJ1dGVzPEhUTUxEaXZFbGVtZW50PntcbiAgLyoqIOiJsuOBruaMh+WumiAqL1xuICBjb2xvcj86IENvbG9yVHlwZTtcbiAgLyoqIOaoquW5hSAqL1xuICB3aWR0aD86IHN0cmluZztcbiAgLyoqIOe4puW5hSAqL1xuICBoZWlnaHQ/OiBzdHJpbmc7XG4gIC8qKiBzcGlubmVy44Gu5aSq44GVICovXG4gIGJvcmRlclNpemU/OiBzdHJpbmc7XG59XG5cbmZ1bmN0aW9uIGdldENvbG9yKHsgdGhlbWUsIGNvbG9yIH06IHsgdGhlbWU6IFRoZW1lVHlwZSwgY29sb3I/OiBDb2xvclR5cGUgfSkge1xuICBjb25zdCB2YWx1ZSA9ICghY29sb3IgfHwgY29sb3IgPT09ICdsaWdodCcpID8gdGhlbWUuYmFja2dyb3VuZCA6IHRoZW1lW2NvbG9yXTtcblxuICByZXR1cm4gY3NzYFxuICAgIGJvcmRlci1jb2xvcjogJHt2YWx1ZX07XG4gICAgYm9yZGVyLXJpZ2h0LWNvbG9yOiAke3RoZW1lLmJvcmRlcn07XG4gICAgYm9yZGVyLXRvcC1jb2xvcjogJHt0aGVtZS5ib3JkZXJ9O1xuICBgO1xufVxuXG5jb25zdCBzcGluID0ga2V5ZnJhbWVzYFxuICBmcm9tIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxuICB0byB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzU5ZGVnKTtcbiAgfVxuYDtcblxuY29uc3QgU3Bpbm5lciA9IHN0eWxlZC5kaXY8UHJvcHM+YFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAkeyh7IHdpZHRoIH0pID0+IHdpZHRoID8gd2lkdGggOiAnMTAwJSd9O1xuICBoZWlnaHQ6ICR7KHsgaGVpZ2h0IH0pID0+IGhlaWdodCA/IGhlaWdodCA6ICcxMDAlJ307XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICY6YWZ0ZXIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIGFuaW1hdGlvbjogJHtzcGlufSA3NTBtcyBpbmZpbml0ZSBsaW5lYXI7XG4gICAgYm9yZGVyOiAkeyh7IGJvcmRlclNpemUgfSkgPT4gYm9yZGVyU2l6ZX0gc29saWQ7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICAke2dldENvbG9yfVxuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgfVxuYDtcblNwaW5uZXIuZGlzcGxheU5hbWUgPSAnU3Bpbm5lcic7XG5TcGlubmVyLmRlZmF1bHRQcm9wcyA9IHtcbiAgYm9yZGVyU2l6ZTogJzJweCcsXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNwaW5uZXI7XG4iLCIvLyBncmlkICYgbGF5b3V0XG5leHBvcnQgeyBkZWZhdWx0IGFzIEJyZWFrIH0gZnJvbSAnLi9HcmlkL0JyZWFrJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQ29udGFpbmVyIH0gZnJvbSAnLi9HcmlkL0NvbnRhaW5lcic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFJvdyB9IGZyb20gJy4vR3JpZC9Sb3cnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBDb2wgfSBmcm9tICcuL0dyaWQvQ29sJztcblxuXG4vLyBjb21tb25cbmV4cG9ydCB7IGRlZmF1bHQgYXMgQ29udGVudCB9IGZyb20gJy4vQ29udGVudCc7XG5leHBvcnQgKiBmcm9tICcuL0NvbnRlbnQnO1xuXG5leHBvcnQgeyBkZWZhdWx0IGFzIEJ1dHRvbiB9IGZyb20gJy4vQnV0dG9uJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQnV0dG9uR3JvdXAgfSBmcm9tICcuL0J1dHRvbi9CdXR0b25Hcm91cCc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFRhYmxlIH0gZnJvbSAnLi9UYWJsZSc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEJveCB9IGZyb20gJy4vQm94JztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgUHJvZ3Jlc3MgfSBmcm9tICcuL1Byb2dyZXNzJztcblxuLy8gZm9ybVxuZXhwb3J0ICogZnJvbSAnLi9Gb3JtJztcblxuLy8gaWNvbnNcbmV4cG9ydCAqIGZyb20gJy4vSWNvbnMnO1xuXG4vLyBjb21wb25lbnRzXG5leHBvcnQgeyBkZWZhdWx0IGFzIEFjY29yZGlvbiB9IGZyb20gJy4vQWNjb3JkaW9uJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQXBwQmFyIH0gZnJvbSAnLi9BcHBCYXInO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBUYWcgfSBmcm9tICcuL1RhZyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEhlcm8gfSBmcm9tICcuL0hlcm8nO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBUb29sdGlwIH0gZnJvbSAnLi9Ub29sdGlwJztcbmV4cG9ydCAqIGZyb20gJy4vU2lkZU1lbnUnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBDYXJkIH0gZnJvbSAnLi9DYXJkJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgUG9wb3ZlciB9IGZyb20gJy4vUG9wb3Zlcic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIE1vZGFsIH0gZnJvbSAnLi9Nb2RhbCc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFRvYXN0IH0gZnJvbSAnLi9Ub2FzdCc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFRhYnMgfSBmcm9tICcuL1RhYnMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBMb2FkaW5nQmFyIH0gZnJvbSAnLi9Mb2FkaW5nL0Jhcic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFNwaW5uZXIgfSBmcm9tICcuL0xvYWRpbmcvU3Bpbm5lcic7XG4iLCJpbXBvcnQgeyBUaGVtZVR5cGUgfSBmcm9tIFwiLi4vdHlwZXNcIjtcblxuY29uc3QgdGhlbWU6IFRoZW1lVHlwZSA9IHtcbiAgZm9udEZhbWlseTogJ+ODkuODqeOCruODjuinkuOCtOOCt+ODg+OCryxcIuODkuODqeOCruODjuinkuOCtCBQcm9OIFczXCIs44Oh44Kk44Oq44KqLE1laXJ5byxcIu+8re+8syDvvLDjgrTjgrfjg4Pjgq9cIixcIk1TIFBHb3RoaWNcIixzYW5zLXNlcmlmJyxcbiAgZm9udFNpemU6ICcxNnB4JyxcblxuICByZXNwb25zaXZlOiB0cnVlLFxuICBndXR0ZXI6IDI0LFxuICBzbWFsbEd1dHRlcjogMTYsXG4gIGJveFNoYWRvdzogJzAgMXB4IDJweCAwIHJnYmEoMCwgMCwgMCwgMC4wNSknLFxuXG4gIG1vYmlsZTogNTc2LFxuICB0YWJsZXQ6IDc2OSxcbiAgZGVza3RvcDogOTYwLFxuICBmdWxsaGQ6IDEzNDQsXG5cbiAgcmFkaXVzOiA0LFxuXG4gIHByaW1hcnk6ICcjMzdCMTUxJyxcbiAgbGluazogJyM1NzhiYTknLFxuICBpbmZvOiAnIzIwOWNlZScsXG4gIHN1Y2Nlc3M6ICcjMGZhODg2JyxcbiAgd2FybmluZzogJyNmMmI1NDEnLFxuICBkYW5nZXI6ICcjZjM1NzVhJyxcbiAgZGFyazogJyMzNjM2MzYnLFxuICBsaWdodDogJyM5YjliOWInLFxuXG4gIGJsYWNrOiAnIzBhMGEwYScsXG4gIGJsYWNrQmlzOiAnIzEyMTIxMicsXG4gIGJsYWNrVGVyOiAnIzI0MjQyNCcsXG5cbiAgd2hpdGU6ICcjZmZmZmZmJyxcbiAgd2hpdGVCaXM6ICcjZmFmYWZhJyxcbiAgd2hpdGVUZXI6ICcjZjVmNWY1JyxcblxuICBncmV5OiAnIzdhN2E3YScsXG4gIGdyZXlMaWdodDogJyM5YjliOWInLFxuICBncmV5TGlnaHRlcjogJyNkYmRiZGInLFxuXG4gIHRleHQ6ICcjNGE0YTRhJyxcbiAgdGV4dERhcms6ICcjNGE0YTRhJyxcbiAgdGV4dExpZ2h0OiAnIzdhN2E3YScsXG4gIHRleHRTdHJvbmc6ICcjNGE0YTRhJyxcblxuICBiYWNrZ3JvdW5kOiAnI2Y1ZjVmNScsXG5cbiAgYm9yZGVyOiAnI2RiZGJkYicsXG4gIGJvcmRlckhvdmVyOiAnIzliOWI5YicsXG4gIGJvcmRlckFjdGl2ZTogJyM0YTRhNGEnLFxuXG4gIHBsYWNlaG9sZGVyOiAnIzdhN2E3YScsXG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IHRoZW1lO1xuIiwiaW1wb3J0IHsgY3NzIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG4vKiEgYmFzZWQgb24gbm9ybWFsaXplLmNzcyB2OC4wLjAgfCBNSVQgTGljZW5zZSB8IGdpdGh1Yi5jb20vbmVjb2xhcy9ub3JtYWxpemUuY3NzICovXG5jb25zdCBub3JtYWxpemVkOiBhbnkgPSBjc3NgXG4gICosIDo6YWZ0ZXIsIDo6YmVmb3JlIHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB9XG5cbiAgaHRtbCB7XG4gICAgbGluZS1oZWlnaHQ6IDEuMTU7XG4gICAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO1xuICAgIC1tcy1vdmVyZmxvdy1zdHlsZTogc2Nyb2xsYmFyO1xuICB9XG5cbiAgYm9keSB7XG4gICAgbWFyZ2luOiAwO1xuICAgIGZvbnQtZmFtaWx5OiAkeyh7IHRoZW1lIH06IGFueSkgPT4gdGhlbWUgPyB0aGVtZS5mb250RmFtaWx5IDogJ1wiSGlyYWdpbm8gU2Fuc1wiLCDjg5Ljg6njgq7jg47op5LjgrTjgrfjg4Pjgq8sIFwiSGlyYWdpbm8gS2FrdSBHb3RoaWMgUHJvTlwiLCBcIuODkuODqeOCruODjuinkuOCtCBQcm9OIFczXCIsIOa4uOOCtOOCt+ODg+OCr+S9kywgXCJZdSBHb3RoaWNcIiwgWXVHb3RoaWMsIFwi44OS44Op44Ku44OO6KeS44K044K344OD44KvIFByb1wiLCBIaXJhS2FrdVByby1XMywgXCJIaXJhZ2lubyBLYWt1IEdvdGhpYyBQcm9cIiwgUXVpY2tzYW5kLCDjg6HjgqTjg6rjgqosIE1laXJ5bywgT3Nha2EsIFwi77yt77yzIO+8sOOCtOOCt+ODg+OCr1wiLCBcIk1TIFBHb3RoaWNcIiwgc2Fucy1zZXJpZid9OztcbiAgICBmb250LXNpemU6ICR7KHsgdGhlbWUgfTogYW55KSA9PiB0aGVtZSA/IHRoZW1lLmZvbnRTaXplIDogJzE2cHgnfTtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB9XG5cbiAgaDEge1xuICAgIGZvbnQtc2l6ZTogMmVtO1xuICAgIG1hcmdpbjogLjY3ZW0gMDtcbiAgfVxuXG4gIGhyIHtcbiAgICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcbiAgICBoZWlnaHQ6IDA7XG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XG4gIH1cblxuICBwcmUge1xuICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsbW9ub3NwYWNlO1xuICAgIGZvbnQtc2l6ZTogMWVtO1xuICB9XG5cbiAgYSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgY29sb3I6ICR7KHsgdGhlbWUgfTogYW55KSA9PiB0aGVtZS5saW5rfTtcbiAgfVxuXG4gIGFiYnJbdGl0bGVdIHtcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGRvdHRlZDtcbiAgfVxuXG4gIGIsc3Ryb25nIHtcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xuICB9XG5cbiAgY29kZSxrYmQsc2FtcCB7XG4gICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSxtb25vc3BhY2U7XG4gICAgZm9udC1zaXplOiAxZW07XG4gIH1cblxuICBzbWFsbCB7XG4gICAgZm9udC1zaXplOiA4MCU7XG4gIH1cblxuICBzdWIsc3VwIHtcbiAgICBmb250LXNpemU6IDc1JTtcbiAgICBsaW5lLWhlaWdodDogMDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xuICB9XG5cbiAgc3ViIHtcbiAgICBib3R0b206IC0uMjVlbTtcbiAgfVxuXG4gIHN1cCB7XG4gICAgdG9wOiAtLjVlbTtcbiAgfVxuXG4gIGltZyB7XG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xuICB9XG5cbiAgYnV0dG9uLGlucHV0LG9wdGdyb3VwLHNlbGVjdCx0ZXh0YXJlYSB7XG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gICAgZm9udC1zaXplOiAxMDAlO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjE1O1xuICAgIG1hcmdpbjogMDtcbiAgfVxuXG4gIGJ1dHRvbixpbnB1dCB7XG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XG4gIH1cblxuICBidXR0b24sc2VsZWN0IHtcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgfVxuXG4gIFt0eXBlPWJ1dHRvbl0sW3R5cGU9cmVzZXRdLFt0eXBlPXN1Ym1pdF0sYnV0dG9uIHtcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjtcbiAgfVxuXG4gIFt0eXBlPWJ1dHRvbl06Oi1tb3otZm9jdXMtaW5uZXIsW3R5cGU9cmVzZXRdOjotbW96LWZvY3VzLWlubmVyLFt0eXBlPXN1Ym1pdF06Oi1tb3otZm9jdXMtaW5uZXIsYnV0dG9uOjotbW96LWZvY3VzLWlubmVyIHtcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XG4gICAgcGFkZGluZzogMDtcbiAgfVxuXG4gIFt0eXBlPWJ1dHRvbl06LW1vei1mb2N1c3JpbmcsW3R5cGU9cmVzZXRdOi1tb3otZm9jdXNyaW5nLFt0eXBlPXN1Ym1pdF06LW1vei1mb2N1c3JpbmcsYnV0dG9uOi1tb3otZm9jdXNyaW5nIHtcbiAgICBvdXRsaW5lOiAxcHggZG90dGVkIEJ1dHRvblRleHQ7XG4gIH1cblxuICBpbnB1dFt0eXBlPWRhdGVdLFxuICBpbnB1dFt0eXBlPXRpbWVdLFxuICBpbnB1dFt0eXBlPWRhdGV0aW1lLWxvY2FsXSxcbiAgaW5wdXRbdHlwZT1tb250aF0ge1xuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbGlzdGJveDtcbiAgfVxuXG4gIGZpZWxkc2V0IHtcbiAgICBwYWRkaW5nOiAuMzVlbSAuNzVlbSAuNjI1ZW07XG4gIH1cblxuICBsZWdlbmQge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgY29sb3I6IGluaGVyaXQ7XG4gICAgZGlzcGxheTogdGFibGU7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgfVxuXG4gIHByb2dyZXNzIHtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG4gICAgcmVzaXplOiB2ZXJ0aWNhbDtcbiAgfVxuXG4gIHRleHRhcmVhIHtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgfVxuXG4gIFt0eXBlPWNoZWNrYm94XSxbdHlwZT1yYWRpb10ge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgcGFkZGluZzogMDtcbiAgfVxuXG4gIFt0eXBlPW51bWJlcl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sW3R5cGU9bnVtYmVyXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICB9XG5cbiAgW3R5cGU9c2VhcmNoXSB7XG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7XG4gICAgb3V0bGluZS1vZmZzZXQ6IC0ycHg7XG4gIH1cblxuICBbdHlwZT1zZWFyY2hdOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uIHtcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIH1cblxuICA6Oi13ZWJraXQtZmlsZS11cGxvYWQtYnV0dG9uIHtcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjtcbiAgICBmb250OiBpbmhlcml0O1xuICB9XG5cbiAgZGV0YWlscyB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cblxuICBzdW1tYXJ5IHtcbiAgICBkaXNwbGF5OiBsaXN0LWl0ZW07XG4gIH1cblxuICB0ZW1wbGF0ZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIFtoaWRkZW5dIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgYmxvY2txdW90ZSwgYm9keSwgZGQsIGRsLCBkdCwgZmllbGRzZXQsIGZpZ3VyZSwgaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgaHIsIGh0bWwsIGlmcmFtZSwgbGVnZW5kLCBsaSwgb2wsIHAsIHByZSwgdGV4dGFyZWEsIHVsIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgfVxuXG4gIGJ1dHRvbiB7XG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xuICB9XG5cbiAgYXJ0aWNsZSwgYXNpZGUsIGZpZ3VyZSxcbiAgZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgc2VjdGlvbiB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cblxuICBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0sIGlucHV0W3R5cGU9XCJyYWRpb1wiXSB7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG5cbiAgYSB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjb2xvcjogIzMyNzNkYztcblxuICAgICY6aG92ZXIge1xuICAgICAgY29sb3I6IGN1cnJlbnRDb2xvcjtcbiAgICB9XG4gIH1cblxuICBpbWcge1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xuICB9XG5cbiAgc3ZnIHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIH1cblxuICBzbWFsbCB7XG4gICAgZm9udC1zaXplOiAuODc1ZW07XG4gIH1cblxuICBzcGFuIHtcbiAgICBmb250LXN0eWxlOiBpbmhlcml0O1xuICAgIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xuICB9XG5cbiAgc3Ryb25nIHtcbiAgICBjb2xvcjogIzM2MzYzNjtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICB9XG5cbiAgdGFibGUge1xuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gICAgYm9yZGVyLXNwYWNpbmc6IDA7XG4gIH1cblxuICB0aCB7XG4gICAgdGV4dC1hbGlnbjogaW5oZXJpdDtcbiAgfVxuXG4gIHVsIHtcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIH1cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IG5vcm1hbGl6ZWQ7XG4iXSwibmFtZXMiOlsiQnJlYWsiLCJSZWFjdCIsIndpZHRoIiwiaGVpZ2h0IiwibWVkaWFNb2JpbGUiLCJ0aGVtZSIsInJlc3BvbnNpdmUiLCJtb2JpbGUiLCJtZWRpYVRhYmxldCIsInRhYmxldCIsIm1lZGlhRGVza3RvcCIsImRlc2t0b3AiLCJtZWRpYUZ1bGxIRCIsImZ1bGxoZCIsIm1lZGlhVW50aWxGdWxsSEQiLCJzZXRSZXNwb25zaXZlIiwiZmx1aWQiLCJjc3MiLCJndXR0ZXIiLCJzbWFsbEd1dHRlciIsIkNvbnRhaW5lciIsInN0eWxlZCIsImRpdiIsImRpc3BsYXlOYW1lIiwiZGVmYXVsdFByb3BzIiwicGFyY2VudGFnZSIsInZhbHVlIiwiTWF0aCIsImNlaWwiLCJyZW5kZXJTaXplIiwic2l6ZSIsIm5hcnJvdyIsImF1dG8iLCJvZmZzZXQiLCJvZmZWYWwiLCJhdXRvU2l6ZSIsIkNvbCIsInJlbmRlckd1dHRlciIsIm5vR3V0dGVyIiwiUm93IiwidmNlbnRlciIsImNlbnRlciIsIlByZSIsInByZSIsIkNvZGUiLCJjb2RlIiwiYmFja2dyb3VuZCIsImRhbmdlciIsIkgxIiwiaDEiLCJib3JkZXIiLCJDb250ZW50IiwidGV4dCIsIl9oc2xUb1JnYiIsInJlcXVpcmUkJDAiLCJfbmFtZVRvSGV4IiwicmVxdWlyZSQkMSIsIl9lcnJvcnMiLCJyZXF1aXJlJCQyIiwiX3JnYlRvSHNsIiwiX3JlZHVjZUhleFZhbHVlIiwiX251bWJlclRvSGV4IiwiX2hzbFRvSGV4IiwicmVxdWlyZSQkMyIsInJlcXVpcmUkJDQiLCJfY3VycnkiLCJfZ3VhcmQiLCJmaW5kQ29sb3JJbnZlcnQiLCJjb2xvciIsImJsYWNrIiwid2hpdGUiLCJnZXRMdW1pbmFuY2UiLCJib3hTaGFkb3ciLCJhbW91bnQiLCJzaGFkb3dDb2xvciIsInRyYW5zcGFyZW50aXplIiwic2V0U2l6ZSIsIm5hbWUiLCJkaXNhYmxlZENvbG9yIiwidGV4dENvbG9yIiwidGV4dERhcmsiLCJiYWNrQ29sb3IiLCJzZXRDb2xvciIsIm91dGxpbmUiLCJkaXNhYmxlZCIsImJvcmRlckhvdmVyIiwiYm9yZGVyQWN0aXZlIiwidGFyZ2V0IiwiaW52ZXJ0Q29sb3IiLCJkYXJrZW4iLCJCdXR0b24iLCJidXR0b24iLCJmdWxsIiwiQnV0dG9uR3JvdXAiLCJzdHJpcGVkU3R5bGUiLCJob3ZlclN0eWxlIiwiVGFibGUiLCJ0YWJsZSIsImJvcmRlcmVkIiwic3RyaXBlZCIsImhvdmVyIiwiaGVhZGVyU3R5bGUiLCJCb3giLCJib3JkZXJsZXNzIiwiV3JhcHBlciIsIm1heCIsIlByb2dyZXNzIiwicHJvcHMiLCJwZXJjZW50Iiwicm91bmQiLCJQdXJlQ29tcG9uZW50IiwicmVxdWlyZWQiLCJwcmltYXJ5IiwiTGFiZWwiLCJsYWJlbCIsInRleHRTdHJvbmciLCJGaWVsZCIsImNoaWxkcmVuIiwiaHRtbEZvciIsInJlc3QiLCJoYW1idXJnZXIiLCJBcnJvdyIsImRpcmVjdGlvbiIsIk1lc3NhZ2UiLCJzcGFuIiwiZXJyb3IiLCJ0ZXh0TGlnaHQiLCJIZWxwTWVzc2FnZSIsImhlbHAiLCJyaWdodEljb24iLCJsZWZ0SWNvbiIsIkljb24iLCJyaWdodCIsInBsYWNlaG9sZGVyIiwiVGV4dElucHV0IiwiY2xhc3NOYW1lIiwic3R5bGUiLCJ0eXBlIiwibWF4TGVuZ3RoIiwib25DaGFuZ2UiLCJUZXh0YXJlYSIsIkNvbXBvbmVudCIsImNvbCIsInJvdyIsIkNoZWNrYm94IiwiaWQiLCJjaGVja2VkIiwiSW5wdXRXcmFwcGVyIiwiYXJyb3ciLCJTZWxlY3QiLCJyZW5kZXIiLCJvcHRpb25zIiwibWFwIiwiaXRlbSIsImlkeCIsInJlbmRlckxhYmVsIiwiaW5wdXRTaXplIiwiQm9vbGVhbiIsInJlbmRlckl0ZW0iLCJSYWRpb0xhYmVsIiwiQnV0dG9uTGFiZWwiLCJSYWRpbyIsIkFwcHJvdmVkIiwiQ2hldnJvbkxlZnRSb3VuZCIsIkNoZXZyb25SaWdodFJvdW5kIiwiRmlsZVJvdW5kIiwiUGVuY2lsIiwiVXNlciIsIkNsb3NlIiwiUmVmcmVzaCIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsImIiLCJTeW1ib2wiLCJmb3IiLCJjIiwiZCIsImUiLCJmIiwiZyIsImgiLCJrIiwibCIsIm0iLCJuIiwicCIsInEiLCJyIiwidCIsImEiLCJ1IiwiJCR0eXBlb2YiLCJ2IiwicHJvY2VzcyIsImVudiIsIk5PREVfRU5WIiwiaGFzU3ltYm9sIiwiUkVBQ1RfRUxFTUVOVF9UWVBFIiwiUkVBQ1RfUE9SVEFMX1RZUEUiLCJSRUFDVF9GUkFHTUVOVF9UWVBFIiwiUkVBQ1RfU1RSSUNUX01PREVfVFlQRSIsIlJFQUNUX1BST0ZJTEVSX1RZUEUiLCJSRUFDVF9QUk9WSURFUl9UWVBFIiwiUkVBQ1RfQ09OVEVYVF9UWVBFIiwiUkVBQ1RfQVNZTkNfTU9ERV9UWVBFIiwiUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEUiLCJSRUFDVF9GT1JXQVJEX1JFRl9UWVBFIiwiUkVBQ1RfU1VTUEVOU0VfVFlQRSIsIlJFQUNUX01FTU9fVFlQRSIsIlJFQUNUX0xBWllfVFlQRSIsImlzVmFsaWRFbGVtZW50VHlwZSIsImxvd1ByaW9yaXR5V2FybmluZyIsInByaW50V2FybmluZyIsImZvcm1hdCIsIl9sZW4iLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJhcmdzIiwiQXJyYXkiLCJfa2V5IiwiYXJnSW5kZXgiLCJtZXNzYWdlIiwicmVwbGFjZSIsImNvbnNvbGUiLCJ3YXJuIiwiRXJyb3IiLCJ4IiwiY29uZGl0aW9uIiwidW5kZWZpbmVkIiwiX2xlbjIiLCJfa2V5MiIsImFwcGx5IiwiY29uY2F0IiwibG93UHJpb3JpdHlXYXJuaW5nJDEiLCJ0eXBlT2YiLCJvYmplY3QiLCIkJHR5cGVvZlR5cGUiLCJBc3luY01vZGUiLCJDb25jdXJyZW50TW9kZSIsIkNvbnRleHRDb25zdW1lciIsIkNvbnRleHRQcm92aWRlciIsIkVsZW1lbnQiLCJGb3J3YXJkUmVmIiwiRnJhZ21lbnQiLCJMYXp5IiwiTWVtbyIsIlBvcnRhbCIsIlByb2ZpbGVyIiwiU3RyaWN0TW9kZSIsIlN1c3BlbnNlIiwiaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNBc3luY01vZGUiLCJpc0FzeW5jTW9kZSIsImlzQ29uY3VycmVudE1vZGUiLCJpc0NvbnRleHRDb25zdW1lciIsImlzQ29udGV4dFByb3ZpZGVyIiwiaXNFbGVtZW50IiwiaXNGb3J3YXJkUmVmIiwiaXNGcmFnbWVudCIsImlzTGF6eSIsImlzTWVtbyIsImlzUG9ydGFsIiwiaXNQcm9maWxlciIsImlzU3RyaWN0TW9kZSIsImlzU3VzcGVuc2UiLCJtb2R1bGUiLCJnZXRPd25Qcm9wZXJ0eVN5bWJvbHMiLCJoYXNPd25Qcm9wZXJ0eSIsInByb3RvdHlwZSIsInByb3BJc0VudW1lcmFibGUiLCJwcm9wZXJ0eUlzRW51bWVyYWJsZSIsInRvT2JqZWN0IiwidmFsIiwiVHlwZUVycm9yIiwic2hvdWxkVXNlTmF0aXZlIiwiYXNzaWduIiwidGVzdDEiLCJTdHJpbmciLCJnZXRPd25Qcm9wZXJ0eU5hbWVzIiwidGVzdDIiLCJpIiwiZnJvbUNoYXJDb2RlIiwib3JkZXIyIiwiam9pbiIsInRlc3QzIiwic3BsaXQiLCJmb3JFYWNoIiwibGV0dGVyIiwia2V5cyIsImVyciIsInNvdXJjZSIsImZyb20iLCJ0byIsInN5bWJvbHMiLCJzIiwia2V5IiwiY2FsbCIsIlJlYWN0UHJvcFR5cGVzU2VjcmV0IiwibG9nZ2VkVHlwZUZhaWx1cmVzIiwiaGFzIiwiRnVuY3Rpb24iLCJiaW5kIiwiY2hlY2tQcm9wVHlwZXMiLCJ0eXBlU3BlY3MiLCJ2YWx1ZXMiLCJsb2NhdGlvbiIsImNvbXBvbmVudE5hbWUiLCJnZXRTdGFjayIsInR5cGVTcGVjTmFtZSIsImV4Iiwic3RhY2siLCJyZXNldFdhcm5pbmdDYWNoZSIsImVtcHR5RnVuY3Rpb25UaGF0UmV0dXJuc051bGwiLCJpc1ZhbGlkRWxlbWVudCIsInRocm93T25EaXJlY3RBY2Nlc3MiLCJJVEVSQVRPUl9TWU1CT0wiLCJpdGVyYXRvciIsIkZBVVhfSVRFUkFUT1JfU1lNQk9MIiwiZ2V0SXRlcmF0b3JGbiIsIm1heWJlSXRlcmFibGUiLCJpdGVyYXRvckZuIiwiQU5PTllNT1VTIiwiUmVhY3RQcm9wVHlwZXMiLCJhcnJheSIsImNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyIiwiYm9vbCIsImZ1bmMiLCJudW1iZXIiLCJzdHJpbmciLCJzeW1ib2wiLCJhbnkiLCJjcmVhdGVBbnlUeXBlQ2hlY2tlciIsImFycmF5T2YiLCJjcmVhdGVBcnJheU9mVHlwZUNoZWNrZXIiLCJlbGVtZW50IiwiY3JlYXRlRWxlbWVudFR5cGVDaGVja2VyIiwiZWxlbWVudFR5cGUiLCJjcmVhdGVFbGVtZW50VHlwZVR5cGVDaGVja2VyIiwiaW5zdGFuY2VPZiIsImNyZWF0ZUluc3RhbmNlVHlwZUNoZWNrZXIiLCJub2RlIiwiY3JlYXRlTm9kZUNoZWNrZXIiLCJvYmplY3RPZiIsImNyZWF0ZU9iamVjdE9mVHlwZUNoZWNrZXIiLCJvbmVPZiIsImNyZWF0ZUVudW1UeXBlQ2hlY2tlciIsIm9uZU9mVHlwZSIsImNyZWF0ZVVuaW9uVHlwZUNoZWNrZXIiLCJzaGFwZSIsImNyZWF0ZVNoYXBlVHlwZUNoZWNrZXIiLCJleGFjdCIsImNyZWF0ZVN0cmljdFNoYXBlVHlwZUNoZWNrZXIiLCJpcyIsInkiLCJQcm9wVHlwZUVycm9yIiwiY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIiLCJ2YWxpZGF0ZSIsIm1hbnVhbFByb3BUeXBlQ2FsbENhY2hlIiwibWFudWFsUHJvcFR5cGVXYXJuaW5nQ291bnQiLCJjaGVja1R5cGUiLCJpc1JlcXVpcmVkIiwicHJvcE5hbWUiLCJwcm9wRnVsbE5hbWUiLCJzZWNyZXQiLCJjYWNoZUtleSIsImNoYWluZWRDaGVja1R5cGUiLCJleHBlY3RlZFR5cGUiLCJwcm9wVmFsdWUiLCJwcm9wVHlwZSIsImdldFByb3BUeXBlIiwicHJlY2lzZVR5cGUiLCJnZXRQcmVjaXNlVHlwZSIsInR5cGVDaGVja2VyIiwiaXNBcnJheSIsIlJlYWN0SXMiLCJleHBlY3RlZENsYXNzIiwiZXhwZWN0ZWRDbGFzc05hbWUiLCJhY3R1YWxDbGFzc05hbWUiLCJnZXRDbGFzc05hbWUiLCJleHBlY3RlZFZhbHVlcyIsInZhbHVlc1N0cmluZyIsIkpTT04iLCJzdHJpbmdpZnkiLCJyZXBsYWNlciIsImFycmF5T2ZUeXBlQ2hlY2tlcnMiLCJjaGVja2VyIiwiZ2V0UG9zdGZpeEZvclR5cGVXYXJuaW5nIiwiaXNOb2RlIiwic2hhcGVUeXBlcyIsImFsbEtleXMiLCJldmVyeSIsInN0ZXAiLCJlbnRyaWVzIiwibmV4dCIsImRvbmUiLCJlbnRyeSIsImlzU3ltYm9sIiwiUmVnRXhwIiwiRGF0ZSIsImNvbnN0cnVjdG9yIiwiUHJvcFR5cGVzIiwiZW1wdHlGdW5jdGlvbiIsImVtcHR5RnVuY3Rpb25XaXRoUmVzZXQiLCJzaGltIiwiZ2V0U2hpbSIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJvYmoiLCJfX2VzTW9kdWxlIiwiZGVmYXVsdCIsImhhc0NsYXNzIiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJiYXNlVmFsIiwiaW5kZXhPZiIsImFkZENsYXNzIiwiX2hhc0NsYXNzIiwiYWRkIiwic2V0QXR0cmlidXRlIiwicmVwbGFjZUNsYXNzTmFtZSIsIm9yaWdDbGFzcyIsImNsYXNzVG9SZW1vdmUiLCJyZW1vdmVDbGFzcyIsInJlbW92ZSIsImNvbXBvbmVudFdpbGxNb3VudCIsInN0YXRlIiwiZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzIiwic2V0U3RhdGUiLCJjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzIiwibmV4dFByb3BzIiwidXBkYXRlciIsInByZXZTdGF0ZSIsImNvbXBvbmVudFdpbGxVcGRhdGUiLCJuZXh0U3RhdGUiLCJwcmV2UHJvcHMiLCJfX3JlYWN0SW50ZXJuYWxTbmFwc2hvdEZsYWciLCJfX3JlYWN0SW50ZXJuYWxTbmFwc2hvdCIsImdldFNuYXBzaG90QmVmb3JlVXBkYXRlIiwiX19zdXBwcmVzc0RlcHJlY2F0aW9uV2FybmluZyIsInBvbHlmaWxsIiwiaXNSZWFjdENvbXBvbmVudCIsImZvdW5kV2lsbE1vdW50TmFtZSIsImZvdW5kV2lsbFJlY2VpdmVQcm9wc05hbWUiLCJmb3VuZFdpbGxVcGRhdGVOYW1lIiwiVU5TQUZFX2NvbXBvbmVudFdpbGxNb3VudCIsIlVOU0FGRV9jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzIiwiVU5TQUZFX2NvbXBvbmVudFdpbGxVcGRhdGUiLCJuZXdBcGlOYW1lIiwiY29tcG9uZW50RGlkVXBkYXRlIiwiY29tcG9uZW50RGlkVXBkYXRlUG9seWZpbGwiLCJtYXliZVNuYXBzaG90Iiwic25hcHNob3QiLCJfUHJvcFR5cGVzIiwiX3JlYWN0TGlmZWN5Y2xlc0NvbXBhdCIsIl9yZWFjdCIsIl9DaGlsZE1hcHBpbmciLCJfcmVhY3REb20iLCJBY2NvcmRpb24iLCJoZWFkZXIiLCJzaG93IiwiQ1NTVHJhbnNpdGlvbiIsImVudGVyIiwiZW50ZXJBY3RpdmUiLCJleGl0IiwiZXhpdEFjdGl2ZSIsInNldEFsaWduIiwiYWxpZ24iLCJiYWNrZHJvcCIsImJhY2tncm91bmRDb2xvciIsInVhIiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwidG9Mb3dlckNhc2UiLCJOYXZCYXIiLCJmaXhlZCIsInN0aWNreSIsIkJ1cmdlciIsImhhbWJ1Z2VyIiwiTmF2Q29udGVudCIsIkFwcEJhciIsImJyYW5kIiwidG9nZ2xlTWVudSIsImdldENvbG9yIiwiYWRkb25Db2xvciIsInN1YkNvbG9yIiwiY2xvc2UiLCJUYWciLCJvbkNsb3NlIiwib25DbGljayIsIkJvZHkiLCJIZXJvIiwiVG9vbHRpcCIsImN1cnJlbnQiLCJ0b29sdGlwIiwicGFyZW50UmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInJlY3QiLCJsZWZ0IiwidG9wIiwicG9zaXRpb24iLCJib3R0b20iLCJjcmVhdGVSZWYiLCJvcGVuVG9vbHRpcCIsImNsb3NlVG9vbHRpcCIsIlNpZGVNZW51IiwiYXNpZGUiLCJNZW51TGlzdCIsInVsIiwiTWVudUxhYmVsIiwiQ2FyZEJvZHkiLCJDYXJkSGVhZGVyIiwiQ2FyZEZvb3RlciIsImZvb3RlciIsIkNhcmRJbWFnZSIsIkNhcmRJbWFnZUhvcml6b250YWwiLCJ1cmwiLCJob3Jpem9udGFsU3R5bGUiLCJmbGV4RGlyZWN0aW9uIiwiQ2FyZCIsImltYWdlIiwidGl0bGUiLCJob3Jpem9udGFsIiwicmVuZGVySGVhZGVyIiwid3JhcHBlclN0eWxlIiwiQ2hpbGRyZW4iLCJvbmx5IiwiUG9wb3ZlciIsIndyYXBwZXIiLCJ0b29sdGlwUmVjdCIsInRvb2x0aXBTdHlsZSIsIm9wZW5Ecm9wZG93biIsImNsb3NlRHJvcGRvd24iLCJkaXNwbGF5IiwiRVNDX0tFWSIsIk1vZGFsIiwiY2xvc2VPbkVzYyIsImtleUNvZGUiLCJjbG9zZU1vZGFsIiwiY2xvc2VPbk92ZXJsYXkiLCJkb2N1bWVudCIsImJvZHkiLCJyZW1vdmVDaGlsZCIsImNyZWF0ZUVsZW1lbnQiLCJhcHBlbmRDaGlsZCIsImNyZWF0ZVBvcnRhbCIsImV4dGVybmFsIiwib25DbGlja092ZXJsYXkiLCJUb2FzdEl0ZW0iLCJkdXJhdGlvbiIsInNldFRpbWVvdXQiLCJjbGVhciIsInNldFBvc2l0aW9uIiwiaXNGaXhlZCIsImJhc2UiLCJUb2FzdENvbnRhaW5lciIsInRvYXN0cyIsImNzc1RleHQiLCJyZW5kZXJUb2FzdCIsIm5hdiIsIlRhYkl0ZW0iLCJJbmRpY2F0b3IiLCJUYWJzIiwic3RhcnQiLCJ0aHJlc2hvbGQiLCJtYXhJdGVtcyIsImNvdW50IiwidG90YWwiLCJ2aXNpYmlsaXR5IiwidHJhbnNmb3JtIiwiY2hpbGQiLCJpbmRleCIsImdldEluZGljYXRvclBvc2l0aW9uIiwicmVuZGVyQ2hpbGRyZW4iLCJhY3RpdmVJbmRleCIsImxlbiIsImFjdGl2ZSIsIkxvYWRpbmdCYXIiLCJsb2FkaW5nIiwic3BpbiIsImtleWZyYW1lcyIsIlNwaW5uZXIiLCJib3JkZXJTaXplIiwiZm9udEZhbWlseSIsImZvbnRTaXplIiwicmFkaXVzIiwibGluayIsImluZm8iLCJzdWNjZXNzIiwid2FybmluZyIsImRhcmsiLCJsaWdodCIsImJsYWNrQmlzIiwiYmxhY2tUZXIiLCJ3aGl0ZUJpcyIsIndoaXRlVGVyIiwiZ3JleSIsImdyZXlMaWdodCIsImdyZXlMaWdodGVyIiwibm9ybWFsaXplZCJdLCJtYXBw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Q0FBQyxTQUFTLEVBQUUsRUFBRSxXQUFXLEVBQUUsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxlQUFlLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sZ0JBQWdCLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTs7QUFFdnZCLFNBQVMsd0JBQXdCLEdBQUcsRUFBRSxJQUFJLE9BQU8sT0FBTyxLQUFLLFdBQVcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsT0FBTyxLQUFLLENBQUMsQ0FBQyxJQUFJLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLE9BQU8sS0FBSyxDQUFDLENBQUMsSUFBSSxPQUFPLEtBQUssS0FBSyxVQUFVLEVBQUUsT0FBTyxJQUFJLENBQUMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRSxZQUFZLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRSxPQUFPLEtBQUssQ0FBQyxFQUFFLEVBQUU7O0FBRW5VLFNBQVMsVUFBVSxDQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEVBQUUsSUFBSSx3QkFBd0IsRUFBRSxFQUFFLEVBQUUsVUFBVSxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUMsRUFBRSxNQUFNLEVBQUUsVUFBVSxHQUFHLFNBQVMsVUFBVSxDQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxJQUFJ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QyxDQUFDO0lBQ3BELE9BQU8sT0FBTyxHQUFHLFFBQVEsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLFFBQVEsQ0FBQyxLQUFLLEdBQUcsR0FBRyxHQUFHLFFBQVEsQ0FBQyxJQUFJLEdBQUcsR0FBRyxHQUFHLFdBQVcsR0FBRyxHQUFHLENBQUM7R0FDdEcsTUFBTSxJQUFJLE9BQU8sVUFBVSxLQUFLLFFBQVEsSUFBSSxPQUFPLFdBQVcsS0FBSyxRQUFRLElBQUksT0FBTyxVQUFVLEtBQUssUUFBUSxJQUFJLE9BQU8sV0FBVyxLQUFLLFFBQVEsRUFBRTtJQUNqSixPQUFPLFdBQVcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxPQUFPLEdBQUcsVUFBVSxHQUFHLEdBQUcsR0FBRyxXQUFXLEdBQUcsR0FBRyxHQUFHLFVBQVUsR0FBRyxHQUFHLEdBQUcsV0FBVyxHQUFHLEdBQUcsQ0FBQztHQUMxSyxNQUFNLElBQUksT0FBTyxVQUFVLEtBQUssUUFBUSxJQUFJLFdBQVcsS0FBSyxTQUFTLElBQUksVUFBVSxLQUFLLFNBQVMsSUFBSSxXQUFXLEtBQUssU0FBUyxFQUFFO0lBQy9ILE9BQU8sVUFBVSxDQUFDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxVQUFVLENBQUMsS0FBSyxFQUFFLFVBQVUsQ0FBQyxJQUFJLENBQUMsR0FBRyxPQUFPLEdBQUcsVUFBVSxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsVUFBVSxDQUFDLEtBQUssR0FBRyxHQUFHLEdBQUcsVUFBVSxDQUFDLElBQUksR0FBRyxHQUFHLEdBQUcsVUFBVSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7R0FDaE47O0VBRUQsTUFBTSxJQUFJRCxTQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO0NBQzlCOztBQUVELElBQUksUUFBUSxHQUFHLElBQUksQ0FB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LEVBQUUsSUFBSSxJQUFJLEdBQUcsTUFBTSxDQUFDLGNBQWMsSUFBSSxNQUFNLENBQUMsd0JBQXdCLEdBQUcsTUFBTSxDQUFDLHdCQUF3QixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLEdBQUcsRUFBRSxFQUFFLE1BQU0sQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQyxFQUFFLE1BQU0sRUFBRSxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQyxDQUFDLE9BQU8sTUFBTSxDQUFDLEVBQUUsRUFBRTs7QUFFeGQsU0FBUyxRQUFRLEdBQUcsRUFBRSxRQUFRLEdBQUcsTUFBTSxDQUFDLE1BQU0sSUFBSSxVQUFVLE1BQU0sRUFBRSxFQUFFLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsSUFBSSxNQUFNLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxJQUFJLEdBQUcsSUFBSSxNQUFNLEVBQUUsRUFBRSxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLEVBQUUsRUFBRSxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsT0FBTyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsT0FBTyxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxTQUFTLENBQUMsQ0FBQyxFQUFFOztBQUU3VCxTQUFTLGNBQWMsQ0FBQyxRQUFRLEVBQUUsVUFBVSxFQUFFLEVBQUUsUUFBUSxD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QyxVQUFVLEdBQUcsR0FBRyxHQUFHLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUU7O0FBRS9GLFNBQVMsNkJBQTZCLENBQUMsTUFBTSxFQUFFLFFBQVEsRUFBRSxFQUFFLElBQUksTUFBTSxJQUFJLElBQUksRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDLElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQyxDQUFDLElBQUksVUFBVSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxHQUFHLEdBQUcsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxRQUFRLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxTQUFTLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsT0FBTyxNQUFNLENBQUMsRUFBRTs7QUFFblQsU0FBUyxRQUFRLEdBQUcsRUFBRSxRQUFRLEdBQUcsTUFBTSxDQUFDLE1BQU0sSUFBSSxVQUFVLE1BQU0sRUFBRSxFQUFFLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsSUFBSSxNQUFNLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxJQUFJLEdBQUcsSUFBSSxNQUFNLEVBQUUsRUFBRSxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLEVBQUUsRUFBRSxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLENB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
