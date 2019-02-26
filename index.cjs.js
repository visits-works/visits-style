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
  return "@media screen and (max-width: ".concat(theme.responsive ? theme.mobile : 0, "px)");
}
function mediaTablet(_ref2) {
  var theme = _ref2.theme;
  return "@media screen and (min-width: ".concat(theme.responsive ? theme.tablet : 0, "px)");
}
function mediaDesktop(_ref3) {
  var theme = _ref3.theme;
  return "@media screen and (min-width: ".concat(theme.responsive ? theme.desktop : 0, "px)");
}
function mediaFullHD(_ref4) {
  var theme = _ref4.theme;
  return "@media screen and (min-width: ".concat(theme.responsive ? theme.fullhd : 0, "px)");
}
function mediaUntilFullHD(_ref5) {
  var theme = _ref5.theme;
  return "@media screen and (max-width: ".concat(theme.responsive ? theme.fullhd : 0, "px)");
}

function setResponsive(_ref) {
  var fluid = _ref.fluid;

  if (fluid) {
    return styled.css(["", "{padding-right:0.5rem;padding-left:0.5rem;}", "{padding-right:0.75rem;padding-left:0.75rem;}", "{padding-right:0.75rem;padding-left:0.75rem;}"], mediaMobile, mediaDesktop, mediaFullHD);
  }

  return styled.css(["margin-right:auto;margin-left:auto;", "{max-width:", "px;}", "{max-width:", "px;}", "{max-width:", "px;}", "{max-width:", "px;}"], mediaMobile, function (_ref2) {
    var theme = _ref2.theme;
    return theme.mobile - 2 * theme.smallGutter;
  }, mediaTablet, function (_ref3) {
    var theme = _ref3.theme;
    return theme.tablet - 2 * theme.smallGutter;
  }, mediaDesktop, function (_ref4) {
    var theme = _ref4.theme;
    return theme.desktop - 2 * theme.gutter;
  }, mediaFullHD, function (_ref5) {
    var theme = _ref5.theme;
    return theme.fullhd - 2 * theme.gutter;
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
    return styled.css(["width:auto;max-width:none;"]);
  }

  var value = parcentage(size);
  var offVal = offset ? parcentage(offset) : 0;
  var autoSize = value > 33 ? 100 : value * 3;
  return styled.css(["width:", "%;max-width:", "%;", " ", "{width:", "%;max-width:", "%;", "}"], value, value, offset ? "margin-left: ".concat(offVal, "%;") : {}, mediaMobile, autoSize, autoSize, offset ? "margin-left: 0;" : {});
}

var Col =
/*#__PURE__*/
styled__default.div.withConfig({
  displayName: "Col",
  componentId: "sc-1q9tfma-0"
})(["display:block;min-height:1px;", " ", " ", " padding:0.75rem;", "{padding:0.5rem;}"], function (_ref2) {
  var narrow = _ref2.narrow;
  return narrow ? 'flex: none;' : {};
}, function (_ref3) {
  var offset = _ref3.offset;
  return offset ? "margin-left: ".concat(parcentage(offset), "%;") : {};
}, renderSize, mediaTablet);
Col.displayName = 'Col';

function renderGutter(_ref) {
  var noGutter = _ref.noGutter;

  if (noGutter) {
    return styled.css(["margin-right:0;margin-left:0;> ", "{padding-right:0;padding-left:0;}"], Col);
  }

  return styled.css(["", "{margin-left:-0.5rem;margin-right:-0.5rem;margin-top:-0.5rem;&:last-child{margin-bottom:-0.5rem;}&:not(:last-child){margin-bottom:0.5rem;}}", "{margin-left:-0.75rem;margin-right:-0.75rem;margin-top:-0.75rem;&:last-child{margin-bottom:-0.75rem;}&:not(:last-child){margin-bottom:0.75rem;}}"], mediaTablet, mediaFullHD);
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
  exports.default = curry; // Type definitions taken from https://github.com/gcanti/flow-static-land/blob/master/src/Fun.js
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

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
  }

  function _wrapNativeSuper(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;

    _wrapNativeSuper = function _wrapNativeSuper(Class) {
      if (Class === null || !_isNativeFunction(Class)) return Class;

      if (typeof Class !== "function") {
        throw new TypeError("Super expression must either be null or a function");
      }

      if (typeof _cache !== "undefined") {
        if (_cache.has(Class)) return _cache.get(Class);

        _cache.set(Class, Wrapper);
      }

      function Wrapper() {
        return _construct(Class, arguments, _getPrototypeOf(this).constructor);
      }

      Wrapper.prototype = Object.create(Class.prototype, {
        constructor: {
          value: Wrapper,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      return _setPrototypeOf(Wrapper, Class);
    };

    return _wrapNativeSuper(Class);
  }

  function isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _construct(Parent, args, Class) {
    if (isNativeReflectConstruct()) {
      _construct = Reflect.construct;
    } else {
      _construct = function _construct(Parent, args, Class) {
        var a = [null];
        a.push.apply(a, args);
        var Constructor = Function.bind.apply(Parent, a);
        var instance = new Constructor();
        if (Class) _setPrototypeOf(instance, Class.prototype);
        return instance;
      };
    }

    return _construct.apply(null, arguments);
  }

  function _isNativeFunction(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  } // based on https://github.com/styled-components/styled-components/blob/fcf6f3804c57a14dd7984dfab7bc06ee2edca044/src/utils/error.js

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
        _this = _Error.call(this, "An error occurred. See https://github.com/styled-components/polished/blob/master/src/error/errors.md#" + code + " for more information.") || this;
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

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

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

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }
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

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

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

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }
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

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }
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

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }
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

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }
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

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

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

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
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

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }
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

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
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
          rest = _objectWithoutProperties(_this$props, ["label", "children"]);

      return React__default.createElement(Wrapper$1, rest, label && React__default.createElement(Label, null, label), children);
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
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(props) {
      return props.value !== this.props.value || props.help !== this.props.help || props.error !== this.props.error || props.disabled !== this.props.disabled || props.readOnly !== this.props.readOnly;
    }
  }, {
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
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(props) {
      return props.checked !== this.props.checked || props.children !== this.props.children;
    }
  }, {
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
})(["position:relative;display:block;select{display:block;cursor:pointer;appearance:none;outline:none;max-width:100%;width:100%;height:100%;background-color:transparent;padding:0.375em 0.625em;text-align:left;color:inherit;", " border:none;", " will-change:box-shadow;transition-property:box-shadow;transition-duration:150ms;transition-timing-function:ease-in-out;&:focus{border-color:", ";box-shadow:", ";}&::-ms-expand{display:none;}&:-moz-focusring{color:transparent;text-shadow:0 0 0 #000;}&:disabled,[disabled],&:readonly{", "}&:invalid{color:", ";}}&::after{", " top:1.25em;right:0.625em;z-index:4;}", " ", ""], function (_ref) {
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
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(props) {
      return props.options.length !== this.props.options.length || props.value !== this.props.value || props.disabled !== this.props.disabled || props.help !== this.props.help || props.error !== this.props.error;
    }
  }, {
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
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(props) {
      return props.checked !== this.props.checked;
    }
  }, {
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
})(["position:", ";display:flex;flex-wrap:wrap;align-items:center;justify-content:stretch;top:-1px;min-height:3.25rem;width:100%;z-index:30;", " a{color:inherit;}", "{padding:", ";}", "{padding:", ";}", ""], function (_ref2) {
  var fixed = _ref2.fixed,
      sticky = _ref2.sticky;
  return !(sticky || fixed) ? 'relative' : fixed ? 'fixed' : 'sticky';
}, setColor$2, mediaTablet, function (_ref3) {
  var fluid = _ref3.fluid;
  return fluid ? '0 0.5rem' : '0 3%';
}, mediaUntilFullHD, function (_ref4) {
  var fluid = _ref4.fluid;
  return fluid ? '0 0.75rem' : '0 5%';
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
})(["display:flex;justify-content:space-between;align-items:center;flex-basis:auto;flex-grow:1;& > ul{display:flex;flex-direction:row;list-style:none;flex-grow:1;justify-content:", ";li{padding:0 0.75rem;}}& > div,& > span,& > form{display:flex;", "}", "{width:100%;flex-direction:column;align-items:flex-start;padding-bottom:0.5rem;button:not(.active)+&{display:none;}& > ul{flex-direction:column;width:100%;li{padding:.5rem 0;}}& > div,& > span,& > form{padding:.5rem 0;width:100%;}}"], setAlign, function (_ref6) {
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
      }, rest), brand, React__default.createElement(Burger, {
        className: show ? 'active' : '',
        onClick: this.toggleMenu
      }, React__default.createElement("span", null), React__default.createElement("span", null), React__default.createElement("span", null)), React__default.createElement(NavContent, {
        align: align
      }, children));
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

var Wrapper$6 =
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

      return React__default.createElement(Wrapper$6, _extends({
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
var Wrapper$7 =
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

  return React__default.createElement(Wrapper$7, _extends({
    color: color,
    size: size
  }, rest), header, React__default.createElement(Body, {
    center: center
  }, React__default.createElement(Container, null, children)));
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

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var timeoutsShape = process.env.NODE_ENV !== 'production' ? _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.shape({
    enter: _propTypes.default.number,
    exit: _propTypes.default.number
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

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    } else {
      var newObj = {};

      if (obj != null) {
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {};

            if (desc.get || desc.set) {
              Object.defineProperty(newObj, key, desc);
            } else {
              newObj[key] = obj[key];
            }
          }
        }
      }

      newObj.default = obj;
      return newObj;
    }
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

  function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
  }

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
   * By default the `Transition` component does not alter the behavior of the
   * component it renders, it only tracks "enter" and "exit" states for the components.
   * It's up to you to give meaning and effect to those states. For example we can
   * add styles to a component when it enters or exits:
   *
   * ```jsx
   * import Transition from 'react-transition-group/Transition';
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
   *     {(state) => (
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
   * As noted the `Transition` component doesn't _do_ anything by itself to its child component.
   * What it does do is track transition states over time so you can update the
   * component (such as by adding styles or classes) when it changes states.
   *
   * There are 4 main states a Transition can be in:
   *  - `'entering'`
   *  - `'entered'`
   *  - `'exiting'`
   *  - `'exited'`
   *
   * Transition state is toggled via the `in` prop. When `true` the component begins the
   * "Enter" stage. During this stage, the component will shift from its current transition state,
   * to `'entering'` for the duration of the transition and then to the `'entered'` stage once
   * it's complete. Let's take the following example:
   *
   * ```jsx
   * state = { in: false };
   *
   * toggleEnterState = () => {
   *   this.setState({ in: true });
   * }
   *
   * render() {
   *   return (
   *     <div>
   *       <Transition in={this.state.in} timeout={500} />
   *       <button onClick={this.toggleEnterState}>Click to Enter</button>
   *     </div>
   *   );
   * }
   * ```
   *
   * When the button is clicked the component will shift to the `'entering'` state and
   * stay there for 500ms (the value of `timeout`) before it finally switches to `'entered'`.
   *
   * When `in` is `false` the same thing happens except the state moves from `'exiting'` to `'exited'`.
   *
   * ## Timing
   *
   * Timing is often the trickiest part of animation, mistakes can result in slight delays
   * that are hard to pin down. A common example is when you want to add an exit transition,
   * you should set the desired final styles when the state is `'exiting'`. That's when the
   * transition to those styles will start and, if you matched the `timeout` prop with the
   * CSS Transition duration, it will end exactly when the state changes to `'exited'`.
   *
   * > **Note**: For simpler transitions the `Transition` component might be enough, but
   * > take into account that it's platform-agnostic, while the `CSSTransition` component
   * > [forces reflows](https://github.com/reactjs/react-transition-group/blob/5007303e729a74be66a21c3e2205e4916821524b/src/CSSTransition.js#L208-L215)
   * > in order to make more complex transitions more predictable. For example, even though
   * > classes `example-enter` and `example-enter-active` are applied immediately one after
   * > another, you can still transition from one to the other because of the forced reflow
   * > (read [this issue](https://github.com/reactjs/react-transition-group/issues/159#issuecomment-322761171)
   * > for more info). Take this into account when choosing between `Transition` and
   * > `CSSTransition`.
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
        enter = timeout.enter;
        appear = timeout.appear;
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
      var timeouts = this.getTimeouts(); // no enter animation skip right to ENTERED
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
        _this2.props.onEntering(node, appearing); // FIXME: appear timeout?


        _this2.onTransitionEnd(node, timeouts.enter, function () {
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

      if (node) {
        if (this.props.addEndListener) {
          this.props.addEndListener(node, this.nextCallback);
        }

        if (timeout != null) {
          setTimeout(this.nextCallback, timeout);
        }
      } else {
        setTimeout(this.nextCallback, 0);
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
     * A `function` child can be used instead of a React element.
     * This function is called with the current transition status
     * ('entering', 'entered', 'exiting', 'exited', 'unmounted'), which can be used
     * to apply context specific props to a component.
     *
     * ```jsx
     * <Transition timeout={150}>
     *   {(status) => (
     *     <MyComponent className={`fade fade-${status}`} />
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
     * Required unless `addEndListener` is provided
     *
     * You may specify a single timeout for all transitions like: `timeout={500}`,
     * or individually like:
     *
     * ```jsx
     * timeout={{
     *  enter: 300,
     *  exit: 500,
     * }}
     * ```
     *
     * @type {number | { enter?: number, exit?: number }}
     */
    timeout: function timeout(props) {
      var pt = process.env.NODE_ENV !== "production" ? PropTypes.timeoutsShape : {};
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

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    } else {
      var newObj = {};

      if (obj != null) {
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {};

            if (desc.get || desc.set) {
              Object.defineProperty(newObj, key, desc);
            } else {
              newObj[key] = obj[key];
            }
          }
        }
      }

      newObj.default = obj;
      return newObj;
    }
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

  function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
  }

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
   * A `Transition` component using CSS transitions and animations.
   * It's inspired by the excellent [ng-animate](http://www.nganimate.org/) library.
   *
   * `CSSTransition` applies a pair of class names during the `appear`, `enter`,
   * and `exit` stages of the transition. The first class is applied and then a
   * second "active" class in order to activate the css animation. After the animation,
   * matching `done` class names are applied to persist the animation state.
   *
   * When the `in` prop is toggled to `true` the Component will get
   * the `example-enter` CSS class and the `example-enter-active` CSS class
   * added in the next tick. This is a convention based on the `classNames` prop.
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
        var _this$getClassNames3 = _this.getClassNames('enter'),
            doneClassName = _this$getClassNames3.doneClassName;

        _this.removeClasses(node, appearing ? 'appear' : 'enter');

        addClass(node, doneClassName);

        if (_this.props.onEntered) {
          _this.props.onEntered(node, appearing);
        }
      };

      _this.onExit = function (node) {
        var _this$getClassNames4 = _this.getClassNames('exit'),
            className = _this$getClassNames4.className;

        _this.removeClasses(node, 'appear');

        _this.removeClasses(node, 'enter');

        addClass(node, className);

        if (_this.props.onExit) {
          _this.props.onExit(node);
        }
      };

      _this.onExiting = function (node) {
        var _this$getClassNames5 = _this.getClassNames('exit'),
            activeClassName = _this$getClassNames5.activeClassName;

        _this.reflowAndAddClass(node, activeClassName);

        if (_this.props.onExiting) {
          _this.props.onExiting(node);
        }
      };

      _this.onExited = function (node) {
        var _this$getClassNames6 = _this.getClassNames('exit'),
            doneClassName = _this$getClassNames6.doneClassName;

        _this.removeClasses(node, 'exit');

        addClass(node, doneClassName);

        if (_this.props.onExited) {
          _this.props.onExited(node);
        }
      };

      _this.getClassNames = function (type) {
        var classNames = _this.props.classNames;
        var className = typeof classNames !== 'string' ? classNames[type] : classNames + '-' + type;
        var activeClassName = typeof classNames !== 'string' ? classNames[type + 'Active'] : className + '-active';
        var doneClassName = typeof classNames !== 'string' ? classNames[type + 'Done'] : className + '-done';
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
      var _this$getClassNames7 = this.getClassNames(type),
          className = _this$getClassNames7.className,
          activeClassName = _this$getClassNames7.activeClassName,
          doneClassName = _this$getClassNames7.doneClassName;

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

  CSSTransition.propTypes = process.env.NODE_ENV !== "production" ? _extends({}, _Transition.default.propTypes, {
    /**
     * The animation classNames applied to the component as it enters, exits or has finished the transition.
     * A single name can be provided and it will be suffixed for each stage: e.g.
     *
     * `classNames="fade"` applies `fade-enter`, `fade-enter-active`, `fade-enter-done`,
     * `fade-exit`, `fade-exit-active`, `fade-exit-done`, `fade-appear`, and `fade-appear-active`.
     * Each individual classNames can also be specified independently like:
     *
     * ```js
     * classNames={{
     *  appear: 'my-appear',
     *  appearActive: 'my-active-appear',
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
     * you might want to use camelCase in your CSS file, that way could simply spread
     * them instead of listing them one by one:
     *
     * ```js
     * classNames={{ ...styles }}
     * ```
     *
     * @type {string | {
     *  appear?: string,
     *  appearActive?: string,
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

var Wrapper$8 =
/*#__PURE__*/
styled__default.div.withConfig({
  displayName: "Tooltip__Wrapper",
  componentId: "sc-1xyhucq-0"
})(["position:relative;display:inline-block;div[role=\"tooltip\"]{position:absolute;clear:both;box-shadow:0 1px 2px 0 rgba(0,0,0,0.05);z-index:9999;padding:0.375rem 0.625rem;cursor:default;width:auto;white-space:pre;font-size:0.85rem;transform:scale(0.8);opacity:0;will-change:transform,opacity;transition-property:transform,opacity;transition-duration:100ms;transition-timing-function:cubic-bezier(0.645,0.045,0.355,1);&.start{transform:scale(1);opacity:1;}&.end{transform:scale(0.8);opacity:0;}}", ""], function (_ref) {
  var css = _ref.css;
  return css || '';
});

function getPosition(height, width, position) {
  switch (position) {
    case 'top':
      {
        return {
          bottom: "".concat(height, "px"),
          left: '50%',
          transform: 'translateX(-50%)'
        };
      }

    case 'left':
      {
        return {
          right: "".concat(width, "px"),
          top: '50%',
          transform: 'translateY(-50%)'
        };
      }

    case 'right':
      {
        return {
          left: "".concat(width, "px"),
          top: '50%',
          transform: 'translateY(-50%)'
        };
      }

    default:
      {
        return {
          top: "".concat(height, "px"),
          left: '50%',
          transform: 'translateX(-50%)'
        };
      }
  }
}

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
      if (_this.state.show || !_this.element.current) return;
      var width = _this.element.current.offsetWidth + 8;
      var height = _this.element.current.offsetHeight + 8;
      var style = getPosition(height, width, _this.props.position);

      _this.setState({
        style: style,
        show: true
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "closeTooltip", function () {
      if (_this.state.show && _this.element.current) {
        _this.setState({
          show: false
        });
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "element", React.createRef());

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
      return React__default.createElement(Wrapper$8, _extends({
        ref: this.element,
        onMouseOver: this.openTooltip,
        onMouseOut: this.closeTooltip
      }, rest), children, React__default.createElement(CSSTransition, {
        classNames: {
          appear: 'start',
          enterDone: 'start',
          exit: 'end'
        },
        in: show,
        timeout: 150,
        unmountOnExit: true
      }, React__default.createElement("div", {
        role: "tooltip"
      }, label)));
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
var Wrapper$9 =
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
})(["position:absolute;display:flex;clear:both;box-shadow:0 1px 2px 0 rgba(0,0,0,0.05);z-index:9999;padding:0.5rem 0;width:auto;height:auto;cursor:auto;will-change:transform,opacity;transform:scale(0.8);opacity:0;transition-property:transform,opacity;transition-duration:100ms;transition-timing-function:cubic-bezier(0.645,0.045,0.355,1);&.start{transform:scale(1);opacity:1;}&.end{transform:scale(0.8);opacity:0;}"]);

function getPosition$1(position) {
  switch (position) {
    case 'top-left':
      {
        return {
          top: 0,
          left: 0,
          transform: 'translateY(-100%)'
        };
      }

    case 'top-right':
      {
        return {
          top: 0,
          right: 0,
          transform: 'translateY(-100%)'
        };
      }

    case 'top':
      {
        return {
          top: 0,
          left: '50%',
          transform: 'translate(-50%, -100%)'
        };
      }

    case 'bottom-left':
      {
        return {
          bottom: 0,
          left: 0,
          transform: 'translateY(100%)'
        };
      }

    case 'bottom-right':
      {
        return {
          bottom: 0,
          right: 0,
          transform: 'translateY(100%)'
        };
      }

    case 'bottom':
      {
        return {
          bottom: 0,
          left: '50%',
          transform: 'translate(-50%, 100%)'
        };
      }

    default:
      {
        return {
          top: 0,
          left: 0,
          transform: 'translateY(100%)'
        };
      }
  }
}

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
      if (_this.state.show) return;
      var style = getPosition$1(_this.props.position);

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

    return _this;
  }

  _createClass(Popover, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(props, state) {
      return this.state.show !== state.show || this.props.label !== props.label;
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
        onFocus: this.openDropdown,
        onBlur: this.closeDropdown,
        style: {
          display: 'block',
          position: 'relative'
        },
        _css: css
      }, label, React__default.createElement(CSSTransition, {
        classNames: {
          appear: 'start',
          enterDone: 'start',
          exit: 'end'
        },
        in: show,
        timeout: 150,
        unmountOnExit: true
      }, React__default.createElement(Tooltip$1, _extends({
        role: "tooltip",
        style: tooltipStyle
      }, rest), children)));
    }
  }]);

  return Popover;
}(React.Component);

_defineProperty(Popover, "defaultProps", {
  position: 'bottom-left',
  color: 'white',
  style: {}
});

var _StyledWrapper$2 = styled__default(Wrapper$9)(_templateObject$3(), function (p) {
  return p._css;
});

var ESC_KEY = 27;
var Wrapper$a =
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
        }, React__default.createElement(Wrapper$a, _extends({
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

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
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

  function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

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

var Wrapper$b =
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
      return React__default.createElement(Wrapper$b, {
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

var Wrapper$c =
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
      return React__default.createElement(Wrapper$c, {
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

var Wrapper$d =
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
      return React__default.createElement(Wrapper$d, this.props, React__default.createElement(CSSTransition, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguY2pzLmpzIiwic291cmNlcyI6WyIuLi9zcmMvY29tcG9uZW50cy9HcmlkL0JyZWFrLnRzeCIsIi4uL3NyYy91dGlscy9tZWRpYS50cyIsIi4uL3NyYy9jb21wb25lbnRzL0dyaWQvQ29udGFpbmVyLnRzIiwiLi4vc3JjL2NvbXBvbmVudHMvR3JpZC9Db2wudHMiLCIuLi9zcmMvY29tcG9uZW50cy9HcmlkL1Jvdy50cyIsIi4uL3NyYy9jb21wb25lbnRzL0NvbnRlbnQvUHJlLnRzIiwiLi4vc3JjL2NvbXBvbmVudHMvQ29udGVudC9Db2RlLnRzIiwiLi4vc3JjL2NvbXBvbmVudHMvQ29udGVudC9IMS50cyIsIi4uL3NyYy9jb21wb25lbnRzL0NvbnRlbnQvaW5kZXgudHMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9saXNoZWQvbGliL2ludGVybmFsSGVscGVycy9fY3VycnkuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9saXNoZWQvbGliL2ludGVybmFsSGVscGVycy9fZ3VhcmQuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9saXNoZWQvbGliL2ludGVybmFsSGVscGVycy9faHNsVG9SZ2IuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9saXNoZWQvbGliL2ludGVybmFsSGVscGVycy9fbmFtZVRvSGV4LmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3BvbGlzaGVkL2xpYi9pbnRlcm5hbEhlbHBlcnMvX2Vycm9ycy5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb2xpc2hlZC9saWIvY29sb3IvcGFyc2VUb1JnYi5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb2xpc2hlZC9saWIvaW50ZXJuYWxIZWxwZXJzL19yZ2JUb0hzbC5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb2xpc2hlZC9saWIvY29sb3IvcGFyc2VUb0hzbC5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb2xpc2hlZC9saWIvaW50ZXJuYWxIZWxwZXJzL19yZWR1Y2VIZXhWYWx1ZS5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb2xpc2hlZC9saWIvaW50ZXJuYWxIZWxwZXJzL19udW1iZXJUb0hleC5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb2xpc2hlZC9saWIvaW50ZXJuYWxIZWxwZXJzL19oc2xUb0hleC5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb2xpc2hlZC9saWIvY29sb3IvaHNsLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3BvbGlzaGVkL2xpYi9jb2xvci9oc2xhLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3BvbGlzaGVkL2xpYi9jb2xvci9yZ2IuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9saXNoZWQvbGliL2NvbG9yL3JnYmEuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9saXNoZWQvbGliL2NvbG9yL3RvQ29sb3JTdHJpbmcuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9saXNoZWQvbGliL2NvbG9yL2Rhcmtlbi5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb2xpc2hlZC9saWIvY29sb3IvZ2V0THVtaW5hbmNlLmpzIiwiLi4vc3JjL3V0aWxzL2ZpbmRDb2xvckludmVydC50cyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb2xpc2hlZC9saWIvY29sb3IvdHJhbnNwYXJlbnRpemUuanMiLCIuLi9zcmMvdXRpbHMvYm94U2hhZG93LnRzIiwiLi4vc3JjL3V0aWxzL3NldFNpemUudHMiLCIuLi9zcmMvdXRpbHMvZGlzYWJsZWRDb2xvci50cyIsIi4uL3NyYy9jb21wb25lbnRzL0J1dHRvbi9pbmRleC50cyIsIi4uL3NyYy9jb21wb25lbnRzL0J1dHRvbi9CdXR0b25Hcm91cC50cyIsIi4uL3NyYy9jb21wb25lbnRzL1RhYmxlL2luZGV4LnRzIiwiLi4vc3JjL2NvbXBvbmVudHMvQm94L2luZGV4LnRzeCIsIi4uL3NyYy9jb21wb25lbnRzL1Byb2dyZXNzL2luZGV4LnRzeCIsIi4uL3NyYy9jb21wb25lbnRzL0Zvcm0vRmllbGQudHN4IiwiLi4vc3JjL3V0aWxzL2hhbWJ1Z2VyLnRzIiwiLi4vc3JjL3V0aWxzL2Fycm93LnRzIiwiLi4vc3JjL2NvbXBvbmVudHMvRm9ybS9IZWxwTWVzc2FnZS50c3giLCIuLi9zcmMvY29tcG9uZW50cy9Gb3JtL1RleHRJbnB1dC50c3giLCIuLi9zcmMvY29tcG9uZW50cy9Gb3JtL1RleHRhcmVhLnRzeCIsIi4uL3NyYy9jb21wb25lbnRzL0Zvcm0vQ2hlY2tib3gudHN4IiwiLi4vc3JjL2NvbXBvbmVudHMvRm9ybS9TZWxlY3QudHN4IiwiLi4vc3JjL2NvbXBvbmVudHMvRm9ybS9SYWRpby50c3giLCIuLi9zcmMvdXRpbHMvc2V0QWxpZ24udHMiLCIuLi9zcmMvY29tcG9uZW50cy9BcHBCYXIvaW5kZXgudHN4IiwiLi4vc3JjL2NvbXBvbmVudHMvVGFnL2luZGV4LnRzeCIsIi4uL3NyYy9jb21wb25lbnRzL0hlcm8vaW5kZXgudHN4IiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3JlYWN0LWlzL2Nqcy9yZWFjdC1pcy5wcm9kdWN0aW9uLm1pbi5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZWFjdC1pcy9janMvcmVhY3QtaXMuZGV2ZWxvcG1lbnQuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVhY3QtaXMvaW5kZXguanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvb2JqZWN0LWFzc2lnbi9pbmRleC5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2xpYi9SZWFjdFByb3BUeXBlc1NlY3JldC5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2NoZWNrUHJvcFR5cGVzLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvZmFjdG9yeVdpdGhUeXBlQ2hlY2tlcnMuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9mYWN0b3J5V2l0aFRocm93aW5nU2hpbXMuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9pbmRleC5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9kb20taGVscGVycy9jbGFzcy9oYXNDbGFzcy5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9kb20taGVscGVycy9jbGFzcy9hZGRDbGFzcy5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9kb20taGVscGVycy9jbGFzcy9yZW1vdmVDbGFzcy5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZWFjdC1saWZlY3ljbGVzLWNvbXBhdC9yZWFjdC1saWZlY3ljbGVzLWNvbXBhdC5lcy5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZWFjdC10cmFuc2l0aW9uLWdyb3VwL3V0aWxzL1Byb3BUeXBlcy5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZWFjdC10cmFuc2l0aW9uLWdyb3VwL1RyYW5zaXRpb24uanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVhY3QtdHJhbnNpdGlvbi1ncm91cC9DU1NUcmFuc2l0aW9uLmpzIiwiLi4vc3JjL2NvbXBvbmVudHMvVG9vbHRpcC9pbmRleC50c3giLCIuLi9zcmMvY29tcG9uZW50cy9TaWRlTWVudS9pbmRleC50c3giLCIuLi9zcmMvY29tcG9uZW50cy9DYXJkL2luZGV4LnRzeCIsIi4uL3NyYy9jb21wb25lbnRzL1BvcG92ZXIvaW5kZXgudHN4IiwiLi4vc3JjL2NvbXBvbmVudHMvTW9kYWwvaW5kZXgudHN4IiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3JlYWN0LXRyYW5zaXRpb24tZ3JvdXAvdXRpbHMvQ2hpbGRNYXBwaW5nLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3JlYWN0LXRyYW5zaXRpb24tZ3JvdXAvVHJhbnNpdGlvbkdyb3VwLmpzIiwiLi4vc3JjL2NvbXBvbmVudHMvVG9hc3QvaW5kZXgudHN4IiwiLi4vc3JjL2NvbXBvbmVudHMvVGFicy9pbmRleC50c3giLCIuLi9zcmMvY29tcG9uZW50cy9Mb2FkaW5nL0Jhci50c3giLCIuLi9zcmMvY29tcG9uZW50cy9Mb2FkaW5nL1NwaW5uZXIudHN4IiwiLi4vc3JjL2NvbXBvbmVudHMvaW5kZXgudHMiLCIuLi9zcmMvdGhlbWUvZGVmYXVsdC50cyIsIi4uL3NyYy9zdHlsZXMvbm9ybWFsaXplLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJyZWFrKCkge1xuICByZXR1cm4gPGRpdiBzdHlsZT17eyB3aWR0aDogJzEwMCUnLCBoZWlnaHQ6IDAgfX0gLz47XG59O1xuIiwiaW1wb3J0IHsgVGhlbWVUeXBlIH0gZnJvbSAnLi4vdHlwZXMnO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICB0aGVtZTogVGhlbWVUeXBlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWVkaWFNb2JpbGUoeyB0aGVtZSB9OiBQcm9wcykge1xuICByZXR1cm4gYEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICR7dGhlbWUucmVzcG9uc2l2ZSA/IHRoZW1lLm1vYmlsZSA6IDB9cHgpYDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1lZGlhVGFibGV0KHsgdGhlbWUgfTogUHJvcHMpIHtcbiAgcmV0dXJuIGBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAke3RoZW1lLnJlc3BvbnNpdmUgPyB0aGVtZS50YWJsZXQgOiAwfXB4KWA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZWRpYURlc2t0b3AoeyB0aGVtZSB9OiBQcm9wcykge1xuICByZXR1cm4gYEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICR7dGhlbWUucmVzcG9uc2l2ZSA/IHRoZW1lLmRlc2t0b3AgOiAwfXB4KWA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZWRpYUZ1bGxIRCh7IHRoZW1lIH06IFByb3BzKSB7XG4gIHJldHVybiBgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJHt0aGVtZS5yZXNwb25zaXZlID8gdGhlbWUuZnVsbGhkIDogMH1weClgO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWVkaWFVbnRpbEZ1bGxIRCh7IHRoZW1lIH06IFByb3BzKSB7XG4gIHJldHVybiBgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogJHt0aGVtZS5yZXNwb25zaXZlID8gdGhlbWUuZnVsbGhkIDogMH1weClgO1xufVxuIiwiaW1wb3J0IHN0eWxlZCwgeyBjc3MgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgeyBtZWRpYUZ1bGxIRCwgbWVkaWFUYWJsZXQsIG1lZGlhRGVza3RvcCwgbWVkaWFNb2JpbGUgfSBmcm9tICcuLi8uLi91dGlscy9tZWRpYSc7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIC8qKiAgKi9cbiAgZmx1aWQ/OiBib29sZWFuO1xufVxuXG5mdW5jdGlvbiBzZXRSZXNwb25zaXZlKHsgZmx1aWQgfTogUHJvcHMpOiBhbnkge1xuICBpZiAoZmx1aWQpIHtcbiAgICByZXR1cm4gY3NzYFxuICAgICAgJHttZWRpYU1vYmlsZX0ge1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwLjVyZW07XG4gICAgICAgIHBhZGRpbmctbGVmdDogMC41cmVtO1xuICAgICAgfVxuICAgICAgJHttZWRpYURlc2t0b3B9IHtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMC43NXJlbTtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwLjc1cmVtO1xuICAgICAgfVxuICAgICAgJHttZWRpYUZ1bGxIRH0ge1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwLjc1cmVtO1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDAuNzVyZW07XG4gICAgICB9XG4gICAgYDtcbiAgfVxuXG4gIHJldHVybiBjc3NgXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICR7bWVkaWFNb2JpbGV9IHtcbiAgICAgIG1heC13aWR0aDogJHsoeyB0aGVtZSB9OiBhbnkpID0+IHRoZW1lLm1vYmlsZSAtICgyICogdGhlbWUuc21hbGxHdXR0ZXIpfXB4O1xuICAgIH1cbiAgICAke21lZGlhVGFibGV0fSB7XG4gICAgICBtYXgtd2lkdGg6ICR7KHsgdGhlbWUgfTogYW55KSA9PiB0aGVtZS50YWJsZXQgLSAoMiAqIHRoZW1lLnNtYWxsR3V0dGVyKX1weDtcbiAgICB9XG4gICAgJHttZWRpYURlc2t0b3B9IHtcbiAgICAgIG1heC13aWR0aDogJHsoeyB0aGVtZSB9OiBhbnkpID0+IHRoZW1lLmRlc2t0b3AgLSAoMiAqIHRoZW1lLmd1dHRlcil9cHg7XG4gICAgfVxuICAgICR7bWVkaWFGdWxsSER9IHtcbiAgICAgIG1heC13aWR0aDogJHsoeyB0aGVtZSB9OiBhbnkpID0+IHRoZW1lLmZ1bGxoZCAtICgyICogdGhlbWUuZ3V0dGVyKX1weDtcbiAgICB9XG4gIGA7XG59XG5cbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXY8UHJvcHM+YFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuXG4gICR7c2V0UmVzcG9uc2l2ZX1cbmA7XG5Db250YWluZXIuZGlzcGxheU5hbWUgPSAnQ29udGFpbmVyJztcbkNvbnRhaW5lci5kZWZhdWx0UHJvcHMgPSB7XG4gIGZsdWlkOiBmYWxzZSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRhaW5lcjtcbiIsImltcG9ydCBzdHlsZWQsIHsgY3NzIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgbWVkaWFNb2JpbGUsIG1lZGlhVGFibGV0IH0gZnJvbSAnLi4vLi4vdXRpbHMvbWVkaWEnO1xuaW1wb3J0IHsgQ29sU2l6ZVR5cGUgfSBmcm9tICcuLi8uLi90eXBlcyc7XG5cbmludGVyZmFjZSBDb2xQcm9wcyB7XG4gIC8qKiDlm7rlrprjga7luYXjgpLmjIflrprjgZnjgovloLTlkIggKi9cbiAgbmFycm93PzogYm9vbGVhbjtcbiAgLyoqIDEtMTLjga7jgrXjgqTjgrogKi9cbiAgc2l6ZT86IENvbFNpemVUeXBlO1xuICAvKiogMS0xMuOBruW3puOBrm9mZnNldCAqL1xuICBvZmZzZXQ/OiBDb2xTaXplVHlwZTtcbiAgLyoqIDEtMTLln7rmupbjga7jgrXjgqTjgrrjgpLnlLvpnaLjgrXjgqTjgrrjga7jgojjgaPjgablj6/lpInjgavjgZnjgosgKi9cbiAgYXV0bz86IGJvb2xlYW47XG59XG5cbmZ1bmN0aW9uIHBhcmNlbnRhZ2UodmFsdWU/OiBDb2xTaXplVHlwZSkge1xuICBpZiAoIXZhbHVlKSByZXR1cm4gMDtcbiAgaWYgKHZhbHVlID49IDEyKSByZXR1cm4gMTAwO1xuICByZXR1cm4gTWF0aC5jZWlsKCh2YWx1ZSAvIDEyKSAqIDEwMCAqIDEwMDAwMCkgLyAxMDAwMDA7XG59XG5cbmZ1bmN0aW9uIHJlbmRlclNpemUoeyBzaXplLCBuYXJyb3csIGF1dG8sIG9mZnNldCB9OiBDb2xQcm9wcykge1xuICBpZiAobmFycm93KSByZXR1cm4gbnVsbDtcbiAgaWYgKCFzaXplIHx8IHNpemUgPCAxIHx8IHNpemUgPiAxMikge1xuICAgIHJldHVybiBjc3NgXG4gICAgICB3aWR0aDogYXV0bztcbiAgICAgIG1heC13aWR0aDogbm9uZTtcbiAgICBgO1xuICB9XG5cbiAgY29uc3QgdmFsdWUgPSBwYXJjZW50YWdlKHNpemUpO1xuICBjb25zdCBvZmZWYWwgPSBvZmZzZXQgPyBwYXJjZW50YWdlKG9mZnNldCkgOiAwO1xuICBjb25zdCBhdXRvU2l6ZSA9IHZhbHVlID4gMzMgPyAxMDAgOiB2YWx1ZSAqIDM7XG4gIHJldHVybiBjc3NgXG4gICAgd2lkdGg6ICR7dmFsdWV9JTtcbiAgICBtYXgtd2lkdGg6ICR7dmFsdWV9JTtcbiAgICAke29mZnNldCA/IGBtYXJnaW4tbGVmdDogJHtvZmZWYWx9JTtgIDoge319XG5cbiAgICAke21lZGlhTW9iaWxlfSB7XG4gICAgICB3aWR0aDogJHthdXRvU2l6ZX0lO1xuICAgICAgbWF4LXdpZHRoOiAke2F1dG9TaXplfSU7XG4gICAgICAke29mZnNldCA/IGBtYXJnaW4tbGVmdDogMDtgIDoge319XG4gICAgfVxuICBgO1xufVxuXG5jb25zdCBDb2wgPSBzdHlsZWQuZGl2PENvbFByb3BzPmBcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1pbi1oZWlnaHQ6IDFweDtcblxuICAkeyh7IG5hcnJvdyB9KSA9PiBuYXJyb3cgPyAnZmxleDogbm9uZTsnIDoge319XG4gICR7KHsgb2Zmc2V0IH0pID0+IG9mZnNldCA/IGBtYXJnaW4tbGVmdDogJHtwYXJjZW50YWdlKG9mZnNldCl9JTtgIDoge319XG5cbiAgJHtyZW5kZXJTaXplfVxuXG4gIHBhZGRpbmc6IDAuNzVyZW07XG5cbiAgJHttZWRpYVRhYmxldH0ge1xuICAgIHBhZGRpbmc6IDAuNXJlbTtcbiAgfVxuYDtcblxuQ29sLmRpc3BsYXlOYW1lID0gJ0NvbCc7XG5cbmV4cG9ydCBkZWZhdWx0IENvbDtcbiIsImltcG9ydCBzdHlsZWQsIHsgY3NzIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IENvbCBmcm9tICcuL0NvbCc7XG5pbXBvcnQgeyBtZWRpYUZ1bGxIRCwgbWVkaWFUYWJsZXQgfSBmcm9tICcuLi8uLi91dGlscy9tZWRpYSc7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIC8qKiDlm7rlrprluYUgKi9cbiAgd2lkdGg/OiBzdHJpbmc7XG4gIC8qKiDlkJHjgY/mlbDjga7ooYzjgaflr77lv5zjgafjgY3jgovjgojjgYbjgavjgZnjgosgKi9cbiAgbXVsdGlsaW5lPzogYm9vbGVhbjtcbiAgLyoqIOe4puOBruS4reWkruaPg+OBiOOBq+OBmeOCiyAqL1xuICB2Y2VudGVyPzogYm9vbGVhbjtcbiAgLyoqIOaoquW5heOBruS4reWkruaPg+OBiOOBq+OBmeOCiyAqL1xuICBjZW50ZXI/OiBib29sZWFuO1xuICAvKiogQ29s44Gu6ZaT6ZqU44KS44Gq44GP44GZICovXG4gIG5vR3V0dGVyPzogYm9vbGVhbjtcbn1cblxuZnVuY3Rpb24gcmVuZGVyR3V0dGVyKHsgbm9HdXR0ZXIgfTogUHJvcHMpIHtcbiAgaWYgKG5vR3V0dGVyKSB7XG4gICAgcmV0dXJuIGNzc2BcbiAgICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuXG4gICAgICA+ICR7Q29sfSB7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDA7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICAgIH1cbiAgICBgO1xuICB9XG4gIHJldHVybiBjc3NgXG4gICAgJHttZWRpYVRhYmxldH0ge1xuICAgICAgbWFyZ2luLWxlZnQ6IC0wLjVyZW07XG4gICAgICBtYXJnaW4tcmlnaHQ6IC0wLjVyZW07XG4gICAgICBtYXJnaW4tdG9wOiAtMC41cmVtO1xuXG4gICAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAtMC41cmVtO1xuICAgICAgfVxuXG4gICAgICAmOm5vdCg6bGFzdC1jaGlsZCkge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG4gICAgICB9XG4gICAgfVxuXG4gICAgJHttZWRpYUZ1bGxIRH0ge1xuICAgICAgbWFyZ2luLWxlZnQ6IC0wLjc1cmVtO1xuICAgICAgbWFyZ2luLXJpZ2h0OiAtMC43NXJlbTtcbiAgICAgIG1hcmdpbi10b3A6IC0wLjc1cmVtO1xuXG4gICAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAtMC43NXJlbTtcbiAgICAgIH1cblxuICAgICAgJjpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMC43NXJlbTtcbiAgICAgIH1cbiAgICB9XG4gIGA7XG59XG5cbmNvbnN0IFJvdyA9IHN0eWxlZC5kaXY8UHJvcHM+YFxuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAgZmxleC13cmFwOiB3cmFwO1xuXG4gICR7KHsgdmNlbnRlciB9KSA9PiB2Y2VudGVyID8gJ2FsaWduLWl0ZW1zOiBjZW50ZXI7JyA6ICcnfVxuICAkeyh7IGNlbnRlciB9KSA9PiBjZW50ZXIgPyAnanVzdGlmeS1jb250ZW50OiBjZW50ZXI7JyA6ICcnfVxuXG4gICR7cmVuZGVyR3V0dGVyfVxuYDtcblxuUm93LmRpc3BsYXlOYW1lID0gJ1Jvdyc7XG5cbmV4cG9ydCBkZWZhdWx0IFJvdztcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5jb25zdCBQcmUgPSBzdHlsZWQucHJlYFxuICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XG4gIG92ZXJmbG93LXg6IGF1dG87XG4gIHBhZGRpbmc6IDEuMjVlbSAxLjVlbTtcbiAgd2hpdGUtc3BhY2U6IHByZTtcbiAgd29yZC13cmFwOiBub3JtYWw7XG5cbiAgJjpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XG4gIH1cbmA7XG5QcmUuZGlzcGxheU5hbWUgPSAnUHJlJztcblxuZXhwb3J0IGRlZmF1bHQgUHJlO1xuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmNvbnN0IENvZGUgPSBzdHlsZWQuY29kZWBcbiAgYmFja2dyb3VuZC1jb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5iYWNrZ3JvdW5kfTtcbiAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuZGFuZ2VyfTtcbiAgZm9udC1zaXplOiAuODc1ZW07XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHBhZGRpbmc6IC4yNWVtIC41ZW0gLjI1ZW07XG5gO1xuXG5Db2RlLmRpc3BsYXlOYW1lID0gJ0NvZGUnO1xuXG5leHBvcnQgZGVmYXVsdCBDb2RlO1xuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmNvbnN0IEgxID0gc3R5bGVkLmgxYFxuICBmb250LXNpemU6IDJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMC41ZW07XG4gIHBhZGRpbmctbGVmdDogMXJlbTtcblxuICBib3JkZXItbGVmdDogMXJlbSBzb2xpZDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkO1xuICBib3JkZXItY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuYm9yZGVyfTtcbmA7XG5IMS5kaXNwbGF5TmFtZSA9ICdIMSc7XG5cbmV4cG9ydCBkZWZhdWx0IEgxO1xuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmNvbnN0IENvbnRlbnQgPSBzdHlsZWQuZGl2YFxuICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS50ZXh0fTtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcblxuICBsaSArIGxpIHtcbiAgICBtYXJnaW4tdG9wOiAwLjI1ZW07XG4gIH1cblxuICBwLFxuICBkbCxcbiAgb2wsXG4gIHVsLFxuICBibG9ja3F1b3RlLFxuICBwcmUsXG4gIHRhYmxlIHtcbiAgICAmOm5vdCg6bGFzdC1jaGlsZCkge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMWVtO1xuICAgIH1cbiAgfVxuXG4gIGgxLFxuICBoMixcbiAgaDMsXG4gIGg0LFxuICBoNSxcbiAgaDYge1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgbGluZS1oZWlnaHQ6IDEuMTI1O1xuICB9XG5cbiAgaDEge1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcbiAgfVxuXG4gIGgyIHtcbiAgICBmb250LXNpemU6IDEuNzVlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjU3MTRlbTtcblxuICAgICY6bm90KDpmaXJzdC1jaGlsZCkge1xuICAgICAgbWFyZ2luLXRvcDogMS4xNDI4ZW07XG4gICAgfVxuICB9XG5cbiAgaDMge1xuICAgIGZvbnQtc2l6ZTogMS41ZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMC42NjY2ZW07XG5cbiAgICAmOm5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgICAgIG1hcmdpbi10b3A6IDEuMzMzM2VtO1xuICAgIH1cbiAgfVxuXG4gIGg0IHtcbiAgICBmb250LXNpemU6IDEuMjVlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjhlbTtcbiAgfVxuXG4gIGg1IHtcbiAgICBmb250LXNpemU6IDEuMTI1ZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMC44ODg4ZW07XG4gIH1cblxuICBoNiB7XG4gICAgZm9udC1zaXplOiAxZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMWVtO1xuICB9XG5cbiAgb2wge1xuICAgIGxpc3Qtc3R5bGU6IGRlY2ltYWwgb3V0c2lkZTtcbiAgICBtYXJnaW4tbGVmdDogMmVtO1xuICAgIG1hcmdpbi10b3A6IDFlbTtcbiAgfVxuXG4gIHVsIHtcbiAgICBsaXN0LXN0eWxlOiBkaXNjIG91dHNpZGU7XG4gICAgbWFyZ2luLWxlZnQ6IDJlbTtcbiAgICBtYXJnaW4tdG9wOiAxZW07XG4gICAgdWwge1xuICAgICAgbGlzdC1zdHlsZS10eXBlOiBjaXJjbGU7XG4gICAgICBtYXJnaW4tdG9wOiAwLjVlbTtcbiAgICAgIHVsIHtcbiAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBzcXVhcmU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZGQge1xuICAgIG1hcmdpbi1sZWZ0OiAyZW07XG4gIH1cblxuICB0YWJsZSB7XG4gICAgd2lkdGg6IDEwMCU7XG5cbiAgICB0ZCwgdGgge1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5ib3JkZXJ9O1xuICAgICAgYm9yZGVyLXdpZHRoOiAwIDAgMXB4O1xuICAgICAgcGFkZGluZzogMC41ZW0gMC43NWVtO1xuICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICB9XG5cbiAgICB0aCB7XG4gICAgICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS50ZXh0fTtcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgfVxuXG4gICAgdGhlYWQge1xuICAgICAgdGQsIHRoIHtcbiAgICAgICAgYm9yZGVyLXdpZHRoOiAwIDAgMnB4O1xuICAgICAgICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS50ZXh0fTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0Zm9vdCB7XG4gICAgICB0ZCwgdGgge1xuICAgICAgICBib3JkZXItd2lkdGg6IDJweCAwIDA7XG4gICAgICAgIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnRleHR9O1xuICAgICAgfVxuICAgIH1cblxuICAgIHRib2R5ID4gdHI6bGFzdC1jaGlsZHtcbiAgICAgIHRkLCB0aCB7XG4gICAgICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDA7XG4gICAgICB9XG4gICAgfVxuICB9XG5gO1xuQ29udGVudC5kaXNwbGF5TmFtZSA9ICdDb250ZW50JztcblxuZXhwb3J0IHsgZGVmYXVsdCBhcyBQcmUgfSBmcm9tICcuL1ByZSc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIENvZGUgfSBmcm9tICcuL0NvZGUnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBIMSB9IGZyb20gJy4vSDEnO1xuXG5leHBvcnQgZGVmYXVsdCBDb250ZW50O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSBjdXJyeTtcblxuLy8gVHlwZSBkZWZpbml0aW9ucyB0YWtlbiBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9nY2FudGkvZmxvdy1zdGF0aWMtbGFuZC9ibG9iL21hc3Rlci9zcmMvRnVuLmpzXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlZGVjbGFyZVxuZnVuY3Rpb24gY3VycmllZChmLCBsZW5ndGgsIGFjYykge1xuICByZXR1cm4gZnVuY3Rpb24gZm4oKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1yZXN0LXBhcmFtc1xuICAgIHZhciBjb21iaW5lZCA9IGFjYy5jb25jYXQoQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKSk7XG4gICAgcmV0dXJuIGNvbWJpbmVkLmxlbmd0aCA+PSBsZW5ndGggPyBmLmFwcGx5KHRoaXMsIGNvbWJpbmVkKSA6IGN1cnJpZWQoZiwgbGVuZ3RoLCBjb21iaW5lZCk7XG4gIH07XG59IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZWRlY2xhcmVcblxuXG5mdW5jdGlvbiBjdXJyeShmKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tcmVkZWNsYXJlXG4gIHJldHVybiBjdXJyaWVkKGYsIGYubGVuZ3RoLCBbXSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG5mdW5jdGlvbiBndWFyZChsb3dlckJvdW5kYXJ5LCB1cHBlckJvdW5kYXJ5LCB2YWx1ZSkge1xuICByZXR1cm4gTWF0aC5tYXgobG93ZXJCb3VuZGFyeSwgTWF0aC5taW4odXBwZXJCb3VuZGFyeSwgdmFsdWUpKTtcbn1cblxudmFyIF9kZWZhdWx0ID0gZ3VhcmQ7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG5mdW5jdGlvbiBjb2xvclRvSW50KGNvbG9yKSB7XG4gIHJldHVybiBNYXRoLnJvdW5kKGNvbG9yICogMjU1KTtcbn1cblxuZnVuY3Rpb24gY29udmVydFRvSW50KHJlZCwgZ3JlZW4sIGJsdWUpIHtcbiAgcmV0dXJuIGNvbG9yVG9JbnQocmVkKSArIFwiLFwiICsgY29sb3JUb0ludChncmVlbikgKyBcIixcIiArIGNvbG9yVG9JbnQoYmx1ZSk7XG59XG5cbmZ1bmN0aW9uIGhzbFRvUmdiKGh1ZSwgc2F0dXJhdGlvbiwgbGlnaHRuZXNzLCBjb252ZXJ0KSB7XG4gIGlmIChjb252ZXJ0ID09PSB2b2lkIDApIHtcbiAgICBjb252ZXJ0ID0gY29udmVydFRvSW50O1xuICB9XG5cbiAgaWYgKHNhdHVyYXRpb24gPT09IDApIHtcbiAgICAvLyBhY2hyb21hdGljXG4gICAgcmV0dXJuIGNvbnZlcnQobGlnaHRuZXNzLCBsaWdodG5lc3MsIGxpZ2h0bmVzcyk7XG4gIH0gLy8gZm9ybXVsYXIgZnJvbSBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9IU0xfYW5kX0hTVlxuXG5cbiAgdmFyIGh1ZVByaW1lID0gaHVlICUgMzYwIC8gNjA7XG4gIHZhciBjaHJvbWEgPSAoMSAtIE1hdGguYWJzKDIgKiBsaWdodG5lc3MgLSAxKSkgKiBzYXR1cmF0aW9uO1xuICB2YXIgc2Vjb25kQ29tcG9uZW50ID0gY2hyb21hICogKDEgLSBNYXRoLmFicyhodWVQcmltZSAlIDIgLSAxKSk7XG4gIHZhciByZWQgPSAwO1xuICB2YXIgZ3JlZW4gPSAwO1xuICB2YXIgYmx1ZSA9IDA7XG5cbiAgaWYgKGh1ZVByaW1lID49IDAgJiYgaHVlUHJpbWUgPCAxKSB7XG4gICAgcmVkID0gY2hyb21hO1xuICAgIGdyZWVuID0gc2Vjb25kQ29tcG9uZW50O1xuICB9IGVsc2UgaWYgKGh1ZVByaW1lID49IDEgJiYgaHVlUHJpbWUgPCAyKSB7XG4gICAgcmVkID0gc2Vjb25kQ29tcG9uZW50O1xuICAgIGdyZWVuID0gY2hyb21hO1xuICB9IGVsc2UgaWYgKGh1ZVByaW1lID49IDIgJiYgaHVlUHJpbWUgPCAzKSB7XG4gICAgZ3JlZW4gPSBjaHJvbWE7XG4gICAgYmx1ZSA9IHNlY29uZENvbXBvbmVudDtcbiAgfSBlbHNlIGlmIChodWVQcmltZSA+PSAzICYmIGh1ZVByaW1lIDwgNCkge1xuICAgIGdyZWVuID0gc2Vjb25kQ29tcG9uZW50O1xuICAgIGJsdWUgPSBjaHJvbWE7XG4gIH0gZWxzZSBpZiAoaHVlUHJpbWUgPj0gNCAmJiBodWVQcmltZSA8IDUpIHtcbiAgICByZWQgPSBzZWNvbmRDb21wb25lbnQ7XG4gICAgYmx1ZSA9IGNocm9tYTtcbiAgfSBlbHNlIGlmIChodWVQcmltZSA+PSA1ICYmIGh1ZVByaW1lIDwgNikge1xuICAgIHJlZCA9IGNocm9tYTtcbiAgICBibHVlID0gc2Vjb25kQ29tcG9uZW50O1xuICB9XG5cbiAgdmFyIGxpZ2h0bmVzc01vZGlmaWNhdGlvbiA9IGxpZ2h0bmVzcyAtIGNocm9tYSAvIDI7XG4gIHZhciBmaW5hbFJlZCA9IHJlZCArIGxpZ2h0bmVzc01vZGlmaWNhdGlvbjtcbiAgdmFyIGZpbmFsR3JlZW4gPSBncmVlbiArIGxpZ2h0bmVzc01vZGlmaWNhdGlvbjtcbiAgdmFyIGZpbmFsQmx1ZSA9IGJsdWUgKyBsaWdodG5lc3NNb2RpZmljYXRpb247XG4gIHJldHVybiBjb252ZXJ0KGZpbmFsUmVkLCBmaW5hbEdyZWVuLCBmaW5hbEJsdWUpO1xufVxuXG52YXIgX2RlZmF1bHQgPSBoc2xUb1JnYjtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG52YXIgbmFtZWRDb2xvck1hcCA9IHtcbiAgYWxpY2VibHVlOiAnZjBmOGZmJyxcbiAgYW50aXF1ZXdoaXRlOiAnZmFlYmQ3JyxcbiAgYXF1YTogJzAwZmZmZicsXG4gIGFxdWFtYXJpbmU6ICc3ZmZmZDQnLFxuICBhenVyZTogJ2YwZmZmZicsXG4gIGJlaWdlOiAnZjVmNWRjJyxcbiAgYmlzcXVlOiAnZmZlNGM0JyxcbiAgYmxhY2s6ICcwMDAnLFxuICBibGFuY2hlZGFsbW9uZDogJ2ZmZWJjZCcsXG4gIGJsdWU6ICcwMDAwZmYnLFxuICBibHVldmlvbGV0OiAnOGEyYmUyJyxcbiAgYnJvd246ICdhNTJhMmEnLFxuICBidXJseXdvb2Q6ICdkZWI4ODcnLFxuICBjYWRldGJsdWU6ICc1ZjllYTAnLFxuICBjaGFydHJldXNlOiAnN2ZmZjAwJyxcbiAgY2hvY29sYXRlOiAnZDI2OTFlJyxcbiAgY29yYWw6ICdmZjdmNTAnLFxuICBjb3JuZmxvd2VyYmx1ZTogJzY0OTVlZCcsXG4gIGNvcm5zaWxrOiAnZmZmOGRjJyxcbiAgY3JpbXNvbjogJ2RjMTQzYycsXG4gIGN5YW46ICcwMGZmZmYnLFxuICBkYXJrYmx1ZTogJzAwMDA4YicsXG4gIGRhcmtjeWFuOiAnMDA4YjhiJyxcbiAgZGFya2dvbGRlbnJvZDogJ2I4ODYwYicsXG4gIGRhcmtncmF5OiAnYTlhOWE5JyxcbiAgZGFya2dyZWVuOiAnMDA2NDAwJyxcbiAgZGFya2dyZXk6ICdhOWE5YTknLFxuICBkYXJra2hha2k6ICdiZGI3NmInLFxuICBkYXJrbWFnZW50YTogJzhiMDA4YicsXG4gIGRhcmtvbGl2ZWdyZWVuOiAnNTU2YjJmJyxcbiAgZGFya29yYW5nZTogJ2ZmOGMwMCcsXG4gIGRhcmtvcmNoaWQ6ICc5OTMyY2MnLFxuICBkYXJrcmVkOiAnOGIwMDAwJyxcbiAgZGFya3NhbG1vbjogJ2U5OTY3YScsXG4gIGRhcmtzZWFncmVlbjogJzhmYmM4ZicsXG4gIGRhcmtzbGF0ZWJsdWU6ICc0ODNkOGInLFxuICBkYXJrc2xhdGVncmF5OiAnMmY0ZjRmJyxcbiAgZGFya3NsYXRlZ3JleTogJzJmNGY0ZicsXG4gIGRhcmt0dXJxdW9pc2U6ICcwMGNlZDEnLFxuICBkYXJrdmlvbGV0OiAnOTQwMGQzJyxcbiAgZGVlcHBpbms6ICdmZjE0OTMnLFxuICBkZWVwc2t5Ymx1ZTogJzAwYmZmZicsXG4gIGRpbWdyYXk6ICc2OTY5NjknLFxuICBkaW1ncmV5OiAnNjk2OTY5JyxcbiAgZG9kZ2VyYmx1ZTogJzFlOTBmZicsXG4gIGZpcmVicmljazogJ2IyMjIyMicsXG4gIGZsb3JhbHdoaXRlOiAnZmZmYWYwJyxcbiAgZm9yZXN0Z3JlZW46ICcyMjhiMjInLFxuICBmdWNoc2lhOiAnZmYwMGZmJyxcbiAgZ2FpbnNib3JvOiAnZGNkY2RjJyxcbiAgZ2hvc3R3aGl0ZTogJ2Y4ZjhmZicsXG4gIGdvbGQ6ICdmZmQ3MDAnLFxuICBnb2xkZW5yb2Q6ICdkYWE1MjAnLFxuICBncmF5OiAnODA4MDgwJyxcbiAgZ3JlZW46ICcwMDgwMDAnLFxuICBncmVlbnllbGxvdzogJ2FkZmYyZicsXG4gIGdyZXk6ICc4MDgwODAnLFxuICBob25leWRldzogJ2YwZmZmMCcsXG4gIGhvdHBpbms6ICdmZjY5YjQnLFxuICBpbmRpYW5yZWQ6ICdjZDVjNWMnLFxuICBpbmRpZ286ICc0YjAwODInLFxuICBpdm9yeTogJ2ZmZmZmMCcsXG4gIGtoYWtpOiAnZjBlNjhjJyxcbiAgbGF2ZW5kZXI6ICdlNmU2ZmEnLFxuICBsYXZlbmRlcmJsdXNoOiAnZmZmMGY1JyxcbiAgbGF3bmdyZWVuOiAnN2NmYzAwJyxcbiAgbGVtb25jaGlmZm9uOiAnZmZmYWNkJyxcbiAgbGlnaHRibHVlOiAnYWRkOGU2JyxcbiAgbGlnaHRjb3JhbDogJ2YwODA4MCcsXG4gIGxpZ2h0Y3lhbjogJ2UwZmZmZicsXG4gIGxpZ2h0Z29sZGVucm9keWVsbG93OiAnZmFmYWQyJyxcbiAgbGlnaHRncmF5OiAnZDNkM2QzJyxcbiAgbGlnaHRncmVlbjogJzkwZWU5MCcsXG4gIGxpZ2h0Z3JleTogJ2QzZDNkMycsXG4gIGxpZ2h0cGluazogJ2ZmYjZjMScsXG4gIGxpZ2h0c2FsbW9uOiAnZmZhMDdhJyxcbiAgbGlnaHRzZWFncmVlbjogJzIwYjJhYScsXG4gIGxpZ2h0c2t5Ymx1ZTogJzg3Y2VmYScsXG4gIGxpZ2h0c2xhdGVncmF5OiAnNzg5JyxcbiAgbGlnaHRzbGF0ZWdyZXk6ICc3ODknLFxuICBsaWdodHN0ZWVsYmx1ZTogJ2IwYzRkZScsXG4gIGxpZ2h0eWVsbG93OiAnZmZmZmUwJyxcbiAgbGltZTogJzBmMCcsXG4gIGxpbWVncmVlbjogJzMyY2QzMicsXG4gIGxpbmVuOiAnZmFmMGU2JyxcbiAgbWFnZW50YTogJ2YwZicsXG4gIG1hcm9vbjogJzgwMDAwMCcsXG4gIG1lZGl1bWFxdWFtYXJpbmU6ICc2NmNkYWEnLFxuICBtZWRpdW1ibHVlOiAnMDAwMGNkJyxcbiAgbWVkaXVtb3JjaGlkOiAnYmE1NWQzJyxcbiAgbWVkaXVtcHVycGxlOiAnOTM3MGRiJyxcbiAgbWVkaXVtc2VhZ3JlZW46ICczY2IzNzEnLFxuICBtZWRpdW1zbGF0ZWJsdWU6ICc3YjY4ZWUnLFxuICBtZWRpdW1zcHJpbmdncmVlbjogJzAwZmE5YScsXG4gIG1lZGl1bXR1cnF1b2lzZTogJzQ4ZDFjYycsXG4gIG1lZGl1bXZpb2xldHJlZDogJ2M3MTU4NScsXG4gIG1pZG5pZ2h0Ymx1ZTogJzE5MTk3MCcsXG4gIG1pbnRjcmVhbTogJ2Y1ZmZmYScsXG4gIG1pc3R5cm9zZTogJ2ZmZTRlMScsXG4gIG1vY2Nhc2luOiAnZmZlNGI1JyxcbiAgbmF2YWpvd2hpdGU6ICdmZmRlYWQnLFxuICBuYXZ5OiAnMDAwMDgwJyxcbiAgb2xkbGFjZTogJ2ZkZjVlNicsXG4gIG9saXZlOiAnODA4MDAwJyxcbiAgb2xpdmVkcmFiOiAnNmI4ZTIzJyxcbiAgb3JhbmdlOiAnZmZhNTAwJyxcbiAgb3JhbmdlcmVkOiAnZmY0NTAwJyxcbiAgb3JjaGlkOiAnZGE3MGQ2JyxcbiAgcGFsZWdvbGRlbnJvZDogJ2VlZThhYScsXG4gIHBhbGVncmVlbjogJzk4ZmI5OCcsXG4gIHBhbGV0dXJxdW9pc2U6ICdhZmVlZWUnLFxuICBwYWxldmlvbGV0cmVkOiAnZGI3MDkzJyxcbiAgcGFwYXlhd2hpcDogJ2ZmZWZkNScsXG4gIHBlYWNocHVmZjogJ2ZmZGFiOScsXG4gIHBlcnU6ICdjZDg1M2YnLFxuICBwaW5rOiAnZmZjMGNiJyxcbiAgcGx1bTogJ2RkYTBkZCcsXG4gIHBvd2RlcmJsdWU6ICdiMGUwZTYnLFxuICBwdXJwbGU6ICc4MDAwODAnLFxuICByZWJlY2NhcHVycGxlOiAnNjM5JyxcbiAgcmVkOiAnZjAwJyxcbiAgcm9zeWJyb3duOiAnYmM4ZjhmJyxcbiAgcm95YWxibHVlOiAnNDE2OWUxJyxcbiAgc2FkZGxlYnJvd246ICc4YjQ1MTMnLFxuICBzYWxtb246ICdmYTgwNzInLFxuICBzYW5keWJyb3duOiAnZjRhNDYwJyxcbiAgc2VhZ3JlZW46ICcyZThiNTcnLFxuICBzZWFzaGVsbDogJ2ZmZjVlZScsXG4gIHNpZW5uYTogJ2EwNTIyZCcsXG4gIHNpbHZlcjogJ2MwYzBjMCcsXG4gIHNreWJsdWU6ICc4N2NlZWInLFxuICBzbGF0ZWJsdWU6ICc2YTVhY2QnLFxuICBzbGF0ZWdyYXk6ICc3MDgwOTAnLFxuICBzbGF0ZWdyZXk6ICc3MDgwOTAnLFxuICBzbm93OiAnZmZmYWZhJyxcbiAgc3ByaW5nZ3JlZW46ICcwMGZmN2YnLFxuICBzdGVlbGJsdWU6ICc0NjgyYjQnLFxuICB0YW46ICdkMmI0OGMnLFxuICB0ZWFsOiAnMDA4MDgwJyxcbiAgdGhpc3RsZTogJ2Q4YmZkOCcsXG4gIHRvbWF0bzogJ2ZmNjM0NycsXG4gIHR1cnF1b2lzZTogJzQwZTBkMCcsXG4gIHZpb2xldDogJ2VlODJlZScsXG4gIHdoZWF0OiAnZjVkZWIzJyxcbiAgd2hpdGU6ICdmZmYnLFxuICB3aGl0ZXNtb2tlOiAnZjVmNWY1JyxcbiAgeWVsbG93OiAnZmYwJyxcbiAgeWVsbG93Z3JlZW46ICc5YWNkMzInXG4gIC8qKlxuICAgKiBDaGVja3MgaWYgYSBzdHJpbmcgaXMgYSBDU1MgbmFtZWQgY29sb3IgYW5kIHJldHVybnMgaXRzIGVxdWl2YWxlbnQgaGV4IHZhbHVlLCBvdGhlcndpc2UgcmV0dXJucyB0aGUgb3JpZ2luYWwgY29sb3IuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuXG59O1xuXG5mdW5jdGlvbiBuYW1lVG9IZXgoY29sb3IpIHtcbiAgaWYgKHR5cGVvZiBjb2xvciAhPT0gJ3N0cmluZycpIHJldHVybiBjb2xvcjtcbiAgdmFyIG5vcm1hbGl6ZWRDb2xvck5hbWUgPSBjb2xvci50b0xvd2VyQ2FzZSgpO1xuICByZXR1cm4gbmFtZWRDb2xvck1hcFtub3JtYWxpemVkQ29sb3JOYW1lXSA/IFwiI1wiICsgbmFtZWRDb2xvck1hcFtub3JtYWxpemVkQ29sb3JOYW1lXSA6IGNvbG9yO1xufVxuXG52YXIgX2RlZmF1bHQgPSBuYW1lVG9IZXg7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHsgaWYgKHNlbGYgPT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzTG9vc2Uoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzLnByb3RvdHlwZSk7IHN1YkNsYXNzLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IHN1YkNsYXNzOyBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbmZ1bmN0aW9uIF93cmFwTmF0aXZlU3VwZXIoQ2xhc3MpIHsgdmFyIF9jYWNoZSA9IHR5cGVvZiBNYXAgPT09IFwiZnVuY3Rpb25cIiA/IG5ldyBNYXAoKSA6IHVuZGVmaW5lZDsgX3dyYXBOYXRpdmVTdXBlciA9IGZ1bmN0aW9uIF93cmFwTmF0aXZlU3VwZXIoQ2xhc3MpIHsgaWYgKENsYXNzID09PSBudWxsIHx8ICFfaXNOYXRpdmVGdW5jdGlvbihDbGFzcykpIHJldHVybiBDbGFzczsgaWYgKHR5cGVvZiBDbGFzcyAhPT0gXCJmdW5jdGlvblwiKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTsgfSBpZiAodHlwZW9mIF9jYWNoZSAhPT0gXCJ1bmRlZmluZWRcIikgeyBpZiAoX2NhY2hlLmhhcyhDbGFzcykpIHJldHVybiBfY2FjaGUuZ2V0KENsYXNzKTsgX2NhY2hlLnNldChDbGFzcywgV3JhcHBlcik7IH0gZnVuY3Rpb24gV3JhcHBlcigpIHsgcmV0dXJuIF9jb25zdHJ1Y3QoQ2xhc3MsIGFyZ3VtZW50cywgX2dldFByb3RvdHlwZU9mKHRoaXMpLmNvbnN0cnVjdG9yKTsgfSBXcmFwcGVyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBXcmFwcGVyLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyByZXR1cm4gX3NldFByb3RvdHlwZU9mKFdyYXBwZXIsIENsYXNzKTsgfTsgcmV0dXJuIF93cmFwTmF0aXZlU3VwZXIoQ2xhc3MpOyB9XG5cbmZ1bmN0aW9uIGlzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpIHsgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcInVuZGVmaW5lZFwiIHx8ICFSZWZsZWN0LmNvbnN0cnVjdCkgcmV0dXJuIGZhbHNlOyBpZiAoUmVmbGVjdC5jb25zdHJ1Y3Quc2hhbSkgcmV0dXJuIGZhbHNlOyBpZiAodHlwZW9mIFByb3h5ID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiB0cnVlOyB0cnkgeyBEYXRlLnByb3RvdHlwZS50b1N0cmluZy5jYWxsKFJlZmxlY3QuY29uc3RydWN0KERhdGUsIFtdLCBmdW5jdGlvbiAoKSB7fSkpOyByZXR1cm4gdHJ1ZTsgfSBjYXRjaCAoZSkgeyByZXR1cm4gZmFsc2U7IH0gfVxuXG5mdW5jdGlvbiBfY29uc3RydWN0KFBhcmVudCwgYXJncywgQ2xhc3MpIHsgaWYgKGlzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpKSB7IF9jb25zdHJ1Y3QgPSBSZWZsZWN0LmNvbnN0cnVjdDsgfSBlbHNlIHsgX2NvbnN0cnVjdCA9IGZ1bmN0aW9uIF9jb25zdHJ1Y3QoUGFyZW50LCBhcmdzLCBDbGFzcykgeyB2YXIgYSA9IFtudWxsXTsgYS5wdXNoLmFwcGx5KGEsIGFyZ3MpOyB2YXIgQ29uc3RydWN0b3IgPSBGdW5jdGlvbi5iaW5kLmFwcGx5KFBhcmVudCwgYSk7IHZhciBpbnN0YW5jZSA9IG5ldyBDb25zdHJ1Y3RvcigpOyBpZiAoQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihpbnN0YW5jZSwgQ2xhc3MucHJvdG90eXBlKTsgcmV0dXJuIGluc3RhbmNlOyB9OyB9IHJldHVybiBfY29uc3RydWN0LmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7IH1cblxuZnVuY3Rpb24gX2lzTmF0aXZlRnVuY3Rpb24oZm4pIHsgcmV0dXJuIEZ1bmN0aW9uLnRvU3RyaW5nLmNhbGwoZm4pLmluZGV4T2YoXCJbbmF0aXZlIGNvZGVdXCIpICE9PSAtMTsgfVxuXG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxuXG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pOyB9OyByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pOyB9XG5cbi8vIGJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9zdHlsZWQtY29tcG9uZW50cy9zdHlsZWQtY29tcG9uZW50cy9ibG9iL2ZjZjZmMzgwNGM1N2ExNGRkNzk4NGRmYWI3YmMwNmVlMmVkY2EwNDQvc3JjL3V0aWxzL2Vycm9yLmpzXG5cbi8qKlxuICogUGFyc2UgZXJyb3JzLm1kIGFuZCB0dXJuIGl0IGludG8gYSBzaW1wbGUgaGFzaCBvZiBjb2RlOiBtZXNzYWdlXG4gKiBAcHJpdmF0ZVxuICovXG52YXIgRVJST1JTID0ge1xuICBcIjFcIjogXCJQYXNzZWQgaW52YWxpZCBhcmd1bWVudHMgdG8gaHNsLCBwbGVhc2UgcGFzcyBtdWx0aXBsZSBudW1iZXJzIGUuZy4gaHNsKDM2MCwgMC43NSwgMC40KSBvciBhbiBvYmplY3QgZS5nLiByZ2IoeyBodWU6IDI1NSwgc2F0dXJhdGlvbjogMC40LCBsaWdodG5lc3M6IDAuNzUgfSkuXFxuXFxuXCIsXG4gIFwiMlwiOiBcIlBhc3NlZCBpbnZhbGlkIGFyZ3VtZW50cyB0byBoc2xhLCBwbGVhc2UgcGFzcyBtdWx0aXBsZSBudW1iZXJzIGUuZy4gaHNsYSgzNjAsIDAuNzUsIDAuNCwgMC43KSBvciBhbiBvYmplY3QgZS5nLiByZ2IoeyBodWU6IDI1NSwgc2F0dXJhdGlvbjogMC40LCBsaWdodG5lc3M6IDAuNzUsIGFscGhhOiAwLjcgfSkuXFxuXFxuXCIsXG4gIFwiM1wiOiBcIlBhc3NlZCBhbiBpbmNvcnJlY3QgYXJndW1lbnQgdG8gYSBjb2xvciBmdW5jdGlvbiwgcGxlYXNlIHBhc3MgYSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgYSBjb2xvci5cXG5cXG5cIixcbiAgXCI0XCI6IFwiQ291bGRuJ3QgZ2VuZXJhdGUgdmFsaWQgcmdiIHN0cmluZyBmcm9tICVzLCBpdCByZXR1cm5lZCAlcy5cXG5cXG5cIixcbiAgXCI1XCI6IFwiQ291bGRuJ3QgcGFyc2UgdGhlIGNvbG9yIHN0cmluZy4gUGxlYXNlIHByb3ZpZGUgdGhlIGNvbG9yIGFzIGEgc3RyaW5nIGluIGhleCwgcmdiLCByZ2JhLCBoc2wgb3IgaHNsYSBub3RhdGlvbi5cXG5cXG5cIixcbiAgXCI2XCI6IFwiUGFzc2VkIGludmFsaWQgYXJndW1lbnRzIHRvIHJnYiwgcGxlYXNlIHBhc3MgbXVsdGlwbGUgbnVtYmVycyBlLmcuIHJnYigyNTUsIDIwNSwgMTAwKSBvciBhbiBvYmplY3QgZS5nLiByZ2IoeyByZWQ6IDI1NSwgZ3JlZW46IDIwNSwgYmx1ZTogMTAwIH0pLlxcblxcblwiLFxuICBcIjdcIjogXCJQYXNzZWQgaW52YWxpZCBhcmd1bWVudHMgdG8gcmdiYSwgcGxlYXNlIHBhc3MgbXVsdGlwbGUgbnVtYmVycyBlLmcuIHJnYigyNTUsIDIwNSwgMTAwLCAwLjc1KSBvciBhbiBvYmplY3QgZS5nLiByZ2IoeyByZWQ6IDI1NSwgZ3JlZW46IDIwNSwgYmx1ZTogMTAwLCBhbHBoYTogMC43NSB9KS5cXG5cXG5cIixcbiAgXCI4XCI6IFwiUGFzc2VkIGludmFsaWQgYXJndW1lbnQgdG8gdG9Db2xvclN0cmluZywgcGxlYXNlIHBhc3MgYSBSZ2JDb2xvciwgUmdiYUNvbG9yLCBIc2xDb2xvciBvciBIc2xhQ29sb3Igb2JqZWN0LlxcblxcblwiLFxuICBcIjlcIjogXCJQbGVhc2UgcHJvdmlkZSBhIG51bWJlciBvZiBzdGVwcyB0byB0aGUgbW9kdWxhclNjYWxlIGhlbHBlci5cXG5cXG5cIixcbiAgXCIxMFwiOiBcIlBsZWFzZSBwYXNzIGEgbnVtYmVyIG9yIG9uZSBvZiB0aGUgcHJlZGVmaW5lZCBzY2FsZXMgdG8gdGhlIG1vZHVsYXJTY2FsZSBoZWxwZXIgYXMgdGhlIHJhdGlvLlxcblxcblwiLFxuICBcIjExXCI6IFwiSW52YWxpZCB2YWx1ZSBwYXNzZWQgYXMgYmFzZSB0byBtb2R1bGFyU2NhbGUsIGV4cGVjdGVkIG51bWJlciBvciBlbSBzdHJpbmcgYnV0IGdvdCBcXFwiJXNcXFwiXFxuXFxuXCIsXG4gIFwiMTJcIjogXCJFeHBlY3RlZCBhIHN0cmluZyBlbmRpbmcgaW4gXFxcInB4XFxcIiBvciBhIG51bWJlciBwYXNzZWQgYXMgdGhlIGZpcnN0IGFyZ3VtZW50IHRvICVzKCksIGdvdCBcXFwiJXNcXFwiIGluc3RlYWQuXFxuXFxuXCIsXG4gIFwiMTNcIjogXCJFeHBlY3RlZCBhIHN0cmluZyBlbmRpbmcgaW4gXFxcInB4XFxcIiBvciBhIG51bWJlciBwYXNzZWQgYXMgdGhlIHNlY29uZCBhcmd1bWVudCB0byAlcygpLCBnb3QgXFxcIiVzXFxcIiBpbnN0ZWFkLlxcblxcblwiLFxuICBcIjE0XCI6IFwiUGFzc2VkIGludmFsaWQgcGl4ZWwgdmFsdWUgKFxcXCIlc1xcXCIpIHRvICVzKCksIHBsZWFzZSBwYXNzIGEgdmFsdWUgbGlrZSBcXFwiMTJweFxcXCIgb3IgMTIuXFxuXFxuXCIsXG4gIFwiMTVcIjogXCJQYXNzZWQgaW52YWxpZCBiYXNlIHZhbHVlIChcXFwiJXNcXFwiKSB0byAlcygpLCBwbGVhc2UgcGFzcyBhIHZhbHVlIGxpa2UgXFxcIjEycHhcXFwiIG9yIDEyLlxcblxcblwiLFxuICBcIjE2XCI6IFwiWW91IG11c3QgcHJvdmlkZSBhIHRlbXBsYXRlIHRvIHRoaXMgbWV0aG9kLlxcblxcblwiLFxuICBcIjE3XCI6IFwiWW91IHBhc3NlZCBhbiB1bnN1cHBvcnRlZCBzZWxlY3RvciBzdGF0ZSB0byB0aGlzIG1ldGhvZC5cXG5cXG5cIixcbiAgXCIxOFwiOiBcIm1pblNjcmVlbiBhbmQgbWF4U2NyZWVuIG11c3QgYmUgcHJvdmlkZWQgYXMgc3RyaW5naWZpZWQgbnVtYmVycyB3aXRoIHRoZSBzYW1lIHVuaXRzLlxcblxcblwiLFxuICBcIjE5XCI6IFwiZnJvbVNpemUgYW5kIHRvU2l6ZSBtdXN0IGJlIHByb3ZpZGVkIGFzIHN0cmluZ2lmaWVkIG51bWJlcnMgd2l0aCB0aGUgc2FtZSB1bml0cy5cXG5cXG5cIixcbiAgXCIyMFwiOiBcImV4cGVjdHMgZWl0aGVyIGFuIGFycmF5IG9mIG9iamVjdHMgb3IgYSBzaW5nbGUgb2JqZWN0IHdpdGggdGhlIHByb3BlcnRpZXMgcHJvcCwgZnJvbVNpemUsIGFuZCB0b1NpemUuXFxuXFxuXCIsXG4gIFwiMjFcIjogXCJleHBlY3RzIHRoZSBvYmplY3RzIGluIHRoZSBmaXJzdCBhcmd1bWVudCBhcnJheSB0byBoYXZlIHRoZSBwcm9wZXJ0aWVzIGBwcm9wYCwgYGZyb21TaXplYCwgYW5kIGB0b1NpemVgLlxcblxcblwiLFxuICBcIjIyXCI6IFwiZXhwZWN0cyB0aGUgZmlyc3QgYXJndW1lbnQgb2JqZWN0IHRvIGhhdmUgdGhlIHByb3BlcnRpZXMgYHByb3BgLCBgZnJvbVNpemVgLCBhbmQgYHRvU2l6ZWAuXFxuXFxuXCIsXG4gIFwiMjNcIjogXCJmb250RmFjZSBleHBlY3RzIGEgbmFtZSBvZiBhIGZvbnQtZmFtaWx5LlxcblxcblwiLFxuICBcIjI0XCI6IFwiZm9udEZhY2UgZXhwZWN0cyBlaXRoZXIgdGhlIHBhdGggdG8gdGhlIGZvbnQgZmlsZShzKSBvciBhIG5hbWUgb2YgYSBsb2NhbCBjb3B5LlxcblxcblwiLFxuICBcIjI1XCI6IFwiZm9udEZhY2UgZXhwZWN0cyBsb2NhbEZvbnRzIHRvIGJlIGFuIGFycmF5LlxcblxcblwiLFxuICBcIjI2XCI6IFwiZm9udEZhY2UgZXhwZWN0cyBmaWxlRm9ybWF0cyB0byBiZSBhbiBhcnJheS5cXG5cXG5cIixcbiAgXCIyN1wiOiBcInJhZGlhbEdyYWRpZW50IHJlcXVyaWVzIGF0IGxlYXN0IDIgY29sb3Itc3RvcHMgdG8gcHJvcGVybHkgcmVuZGVyLlxcblxcblwiLFxuICBcIjI4XCI6IFwiUGxlYXNlIHN1cHBseSBhIGZpbGVuYW1lIHRvIHJldGluYUltYWdlKCkgYXMgdGhlIGZpcnN0IGFyZ3VtZW50LlxcblxcblwiLFxuICBcIjI5XCI6IFwiUGFzc2VkIGludmFsaWQgYXJndW1lbnQgdG8gdHJpYW5nbGUsIHBsZWFzZSBwYXNzIGNvcnJlY3QgcG9pbnRpbmdEaXJlY3Rpb24gZS5nLiAncmlnaHQnLlxcblxcblwiLFxuICBcIjMwXCI6IFwiUGFzc2VkIGFuIGludmFsaWQgdmFsdWUgdG8gYGhlaWdodGAgb3IgYHdpZHRoYC4gUGxlYXNlIHByb3ZpZGUgYSBwaXhlbCBiYXNlZCB1bml0LlxcblxcblwiLFxuICBcIjMxXCI6IFwiVGhlIGFuaW1hdGlvbiBzaG9ydGhhbmQgb25seSB0YWtlcyA4IGFyZ3VtZW50cy4gU2VlIHRoZSBzcGVjaWZpY2F0aW9uIGZvciBtb3JlIGluZm9ybWF0aW9uOiBodHRwOi8vbWRuLmlvL2FuaW1hdGlvblxcblxcblwiLFxuICBcIjMyXCI6IFwiVG8gcGFzcyBtdWx0aXBsZSBhbmltYXRpb25zIHBsZWFzZSBzdXBwbHkgdGhlbSBpbiBhcnJheXMsIGUuZy4gYW5pbWF0aW9uKFsncm90YXRlJywgJzJzJ10sIFsnbW92ZScsICcxcyddKVxcblRvIHBhc3MgYSBzaW5nbGUgYW5pbWF0aW9uIHBsZWFzZSBzdXBwbHkgdGhlbSBpbiBzaW1wbGUgdmFsdWVzLCBlLmcuIGFuaW1hdGlvbigncm90YXRlJywgJzJzJylcXG5cXG5cIixcbiAgXCIzM1wiOiBcIlRoZSBhbmltYXRpb24gc2hvcnRoYW5kIGFycmF5cyBjYW4gb25seSBoYXZlIDggZWxlbWVudHMuIFNlZSB0aGUgc3BlY2lmaWNhdGlvbiBmb3IgbW9yZSBpbmZvcm1hdGlvbjogaHR0cDovL21kbi5pby9hbmltYXRpb25cXG5cXG5cIixcbiAgXCIzNFwiOiBcImJvcmRlclJhZGl1cyBleHBlY3RzIGEgcmFkaXVzIHZhbHVlIGFzIGEgc3RyaW5nIG9yIG51bWJlciBhcyB0aGUgc2Vjb25kIGFyZ3VtZW50LlxcblxcblwiLFxuICBcIjM1XCI6IFwiYm9yZGVyUmFkaXVzIGV4cGVjdHMgb25lIG9mIFxcXCJ0b3BcXFwiLCBcXFwiYm90dG9tXFxcIiwgXFxcImxlZnRcXFwiIG9yIFxcXCJyaWdodFxcXCIgYXMgdGhlIGZpcnN0IGFyZ3VtZW50LlxcblxcblwiLFxuICBcIjM2XCI6IFwiUHJvcGVydHkgbXVzdCBiZSBhIHN0cmluZyB2YWx1ZS5cXG5cXG5cIixcbiAgXCIzN1wiOiBcIlN5bnRheCBFcnJvciBhdCAlcy5cXG5cXG5cIixcbiAgXCIzOFwiOiBcIkZvcm11bGEgY29udGFpbnMgYSBmdW5jdGlvbiB0aGF0IG5lZWRzIHBhcmVudGhlc2VzIGF0ICVzLlxcblxcblwiLFxuICBcIjM5XCI6IFwiRm9ybXVsYSBpcyBtaXNzaW5nIGNsb3NpbmcgcGFyZW50aGVzaXMgYXQgJXMuXFxuXFxuXCIsXG4gIFwiNDBcIjogXCJGb3JtdWxhIGhhcyB0b28gbWFueSBjbG9zaW5nIHBhcmVudGhlc2VzIGF0ICVzLlxcblxcblwiLFxuICBcIjQxXCI6IFwiQWxsIHZhbHVlcyBpbiBhIGZvcm11bGEgbXVzdCBoYXZlIHRoZSBzYW1lIHVuaXQgb3IgYmUgdW5pdGxlc3MuXFxuXFxuXCIsXG4gIFwiNDJcIjogXCJQbGVhc2UgcHJvdmlkZSBhIG51bWJlciBvZiBzdGVwcyB0byB0aGUgbW9kdWxhclNjYWxlIGhlbHBlci5cXG5cXG5cIixcbiAgXCI0M1wiOiBcIlBsZWFzZSBwYXNzIGEgbnVtYmVyIG9yIG9uZSBvZiB0aGUgcHJlZGVmaW5lZCBzY2FsZXMgdG8gdGhlIG1vZHVsYXJTY2FsZSBoZWxwZXIgYXMgdGhlIHJhdGlvLlxcblxcblwiLFxuICBcIjQ0XCI6IFwiSW52YWxpZCB2YWx1ZSBwYXNzZWQgYXMgYmFzZSB0byBtb2R1bGFyU2NhbGUsIGV4cGVjdGVkIG51bWJlciBvciBlbS9yZW0gc3RyaW5nIGJ1dCBnb3QgJXMuXFxuXFxuXCIsXG4gIFwiNDVcIjogXCJQYXNzZWQgaW52YWxpZCBhcmd1bWVudCB0byBoc2xUb0NvbG9yU3RyaW5nLCBwbGVhc2UgcGFzcyBhIEhzbENvbG9yIG9yIEhzbGFDb2xvciBvYmplY3QuXFxuXFxuXCIsXG4gIFwiNDZcIjogXCJQYXNzZWQgaW52YWxpZCBhcmd1bWVudCB0byByZ2JUb0NvbG9yU3RyaW5nLCBwbGVhc2UgcGFzcyBhIFJnYkNvbG9yIG9yIFJnYmFDb2xvciBvYmplY3QuXFxuXFxuXCIsXG4gIFwiNDdcIjogXCJtaW5TY3JlZW4gYW5kIG1heFNjcmVlbiBtdXN0IGJlIHByb3ZpZGVkIGFzIHN0cmluZ2lmaWVkIG51bWJlcnMgd2l0aCB0aGUgc2FtZSB1bml0cy5cXG5cXG5cIixcbiAgXCI0OFwiOiBcImZyb21TaXplIGFuZCB0b1NpemUgbXVzdCBiZSBwcm92aWRlZCBhcyBzdHJpbmdpZmllZCBudW1iZXJzIHdpdGggdGhlIHNhbWUgdW5pdHMuXFxuXFxuXCIsXG4gIFwiNDlcIjogXCJFeHBlY3RzIGVpdGhlciBhbiBhcnJheSBvZiBvYmplY3RzIG9yIGEgc2luZ2xlIG9iamVjdCB3aXRoIHRoZSBwcm9wZXJ0aWVzIHByb3AsIGZyb21TaXplLCBhbmQgdG9TaXplLlxcblxcblwiLFxuICBcIjUwXCI6IFwiRXhwZWN0cyB0aGUgb2JqZWN0cyBpbiB0aGUgZmlyc3QgYXJndW1lbnQgYXJyYXkgdG8gaGF2ZSB0aGUgcHJvcGVydGllcyBwcm9wLCBmcm9tU2l6ZSwgYW5kIHRvU2l6ZS5cXG5cXG5cIixcbiAgXCI1MVwiOiBcIkV4cGVjdHMgdGhlIGZpcnN0IGFyZ3VtZW50IG9iamVjdCB0byBoYXZlIHRoZSBwcm9wZXJ0aWVzIHByb3AsIGZyb21TaXplLCBhbmQgdG9TaXplLlxcblxcblwiLFxuICBcIjUyXCI6IFwiZm9udEZhY2UgZXhwZWN0cyBlaXRoZXIgdGhlIHBhdGggdG8gdGhlIGZvbnQgZmlsZShzKSBvciBhIG5hbWUgb2YgYSBsb2NhbCBjb3B5LlxcblxcblwiLFxuICBcIjUzXCI6IFwiZm9udEZhY2UgZXhwZWN0cyBsb2NhbEZvbnRzIHRvIGJlIGFuIGFycmF5LlxcblxcblwiLFxuICBcIjU0XCI6IFwiZm9udEZhY2UgZXhwZWN0cyBmaWxlRm9ybWF0cyB0byBiZSBhbiBhcnJheS5cXG5cXG5cIixcbiAgXCI1NVwiOiBcImZvbnRGYWNlIGV4cGVjdHMgYSBuYW1lIG9mIGEgZm9udC1mYW1pbHkuXFxuXFxuXCIsXG4gIFwiNTZcIjogXCJsaW5lYXJHcmFkaWVudCByZXF1cmllcyBhdCBsZWFzdCAyIGNvbG9yLXN0b3BzIHRvIHByb3Blcmx5IHJlbmRlci5cXG5cXG5cIixcbiAgXCI1N1wiOiBcInJhZGlhbEdyYWRpZW50IHJlcXVyaWVzIGF0IGxlYXN0IDIgY29sb3Itc3RvcHMgdG8gcHJvcGVybHkgcmVuZGVyLlxcblxcblwiLFxuICBcIjU4XCI6IFwiUGxlYXNlIHN1cHBseSBhIGZpbGVuYW1lIHRvIHJldGluYUltYWdlKCkgYXMgdGhlIGZpcnN0IGFyZ3VtZW50LlxcblxcblwiLFxuICBcIjU5XCI6IFwiUGFzc2VkIGludmFsaWQgYXJndW1lbnQgdG8gdHJpYW5nbGUsIHBsZWFzZSBwYXNzIGNvcnJlY3QgcG9pbnRpbmdEaXJlY3Rpb24gZS5nLiAncmlnaHQnLlxcblxcblwiLFxuICBcIjYwXCI6IFwiUGFzc2VkIGFuIGludmFsaWQgdmFsdWUgdG8gYGhlaWdodGAgb3IgYHdpZHRoYC4gUGxlYXNlIHByb3ZpZGUgYSBwaXhlbCBiYXNlZCB1bml0LlxcblxcblwiLFxuICBcIjYxXCI6IFwiUHJvcGVydHkgbXVzdCBiZSBhIHN0cmluZyB2YWx1ZS5cXG5cXG5cIixcbiAgXCI2MlwiOiBcImJvcmRlclJhZGl1cyBleHBlY3RzIGEgcmFkaXVzIHZhbHVlIGFzIGEgc3RyaW5nIG9yIG51bWJlciBhcyB0aGUgc2Vjb25kIGFyZ3VtZW50LlxcblxcblwiLFxuICBcIjYzXCI6IFwiYm9yZGVyUmFkaXVzIGV4cGVjdHMgb25lIG9mIFxcXCJ0b3BcXFwiLCBcXFwiYm90dG9tXFxcIiwgXFxcImxlZnRcXFwiIG9yIFxcXCJyaWdodFxcXCIgYXMgdGhlIGZpcnN0IGFyZ3VtZW50LlxcblxcblwiLFxuICBcIjY0XCI6IFwiVGhlIGFuaW1hdGlvbiBzaG9ydGhhbmQgb25seSB0YWtlcyA4IGFyZ3VtZW50cy4gU2VlIHRoZSBzcGVjaWZpY2F0aW9uIGZvciBtb3JlIGluZm9ybWF0aW9uOiBodHRwOi8vbWRuLmlvL2FuaW1hdGlvbi5cXG5cXG5cIixcbiAgXCI2NVwiOiBcIlRvIHBhc3MgbXVsdGlwbGUgYW5pbWF0aW9ucyBwbGVhc2Ugc3VwcGx5IHRoZW0gaW4gYXJyYXlzLCBlLmcuIGFuaW1hdGlvbihbJ3JvdGF0ZScsICcycyddLCBbJ21vdmUnLCAnMXMnXSlcXFxcblRvIHBhc3MgYSBzaW5nbGUgYW5pbWF0aW9uIHBsZWFzZSBzdXBwbHkgdGhlbSBpbiBzaW1wbGUgdmFsdWVzLCBlLmcuIGFuaW1hdGlvbigncm90YXRlJywgJzJzJykuXFxuXFxuXCIsXG4gIFwiNjZcIjogXCJUaGUgYW5pbWF0aW9uIHNob3J0aGFuZCBhcnJheXMgY2FuIG9ubHkgaGF2ZSA4IGVsZW1lbnRzLiBTZWUgdGhlIHNwZWNpZmljYXRpb24gZm9yIG1vcmUgaW5mb3JtYXRpb246IGh0dHA6Ly9tZG4uaW8vYW5pbWF0aW9uLlxcblxcblwiLFxuICBcIjY3XCI6IFwiWW91IG11c3QgcHJvdmlkZSBhIHRlbXBsYXRlIHRvIHRoaXMgbWV0aG9kLlxcblxcblwiLFxuICBcIjY4XCI6IFwiWW91IHBhc3NlZCBhbiB1bnN1cHBvcnRlZCBzZWxlY3RvciBzdGF0ZSB0byB0aGlzIG1ldGhvZC5cXG5cXG5cIixcbiAgXCI2OVwiOiBcIkV4cGVjdGVkIGEgc3RyaW5nIGVuZGluZyBpbiBcXFwicHhcXFwiIG9yIGEgbnVtYmVyIHBhc3NlZCBhcyB0aGUgZmlyc3QgYXJndW1lbnQgdG8gJXMoKSwgZ290ICVzIGluc3RlYWQuXFxuXFxuXCIsXG4gIFwiNzBcIjogXCJFeHBlY3RlZCBhIHN0cmluZyBlbmRpbmcgaW4gXFxcInB4XFxcIiBvciBhIG51bWJlciBwYXNzZWQgYXMgdGhlIHNlY29uZCBhcmd1bWVudCB0byAlcygpLCBnb3QgJXMgaW5zdGVhZC5cXG5cXG5cIixcbiAgXCI3MVwiOiBcIlBhc3NlZCBpbnZhbGlkIHBpeGVsIHZhbHVlICVzIHRvICVzKCksIHBsZWFzZSBwYXNzIGEgdmFsdWUgbGlrZSBcXFwiMTJweFxcXCIgb3IgMTIuXFxuXFxuXCIsXG4gIFwiNzJcIjogXCJQYXNzZWQgaW52YWxpZCBiYXNlIHZhbHVlICVzIHRvICVzKCksIHBsZWFzZSBwYXNzIGEgdmFsdWUgbGlrZSBcXFwiMTJweFxcXCIgb3IgMTIuXFxuXCJcbn07XG4vKipcbiAqIHN1cGVyIGJhc2ljIHZlcnNpb24gb2Ygc3ByaW50ZlxuICogQHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBmb3JtYXQoKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICB2YXIgYSA9IGFyZ3NbMF07XG4gIHZhciBiID0gW107XG4gIHZhciBjO1xuXG4gIGZvciAoYyA9IDE7IGMgPCBhcmdzLmxlbmd0aDsgYyArPSAxKSB7XG4gICAgYi5wdXNoKGFyZ3NbY10pO1xuICB9XG5cbiAgYi5mb3JFYWNoKGZ1bmN0aW9uIChkKSB7XG4gICAgYSA9IGEucmVwbGFjZSgvJVthLXpdLywgZCk7XG4gIH0pO1xuICByZXR1cm4gYTtcbn1cbi8qKlxuICogQ3JlYXRlIGFuIGVycm9yIGZpbGUgb3V0IG9mIGVycm9ycy5tZCBmb3IgZGV2ZWxvcG1lbnQgYW5kIGEgc2ltcGxlIHdlYiBsaW5rIHRvIHRoZSBmdWxsIGVycm9yc1xuICogaW4gcHJvZHVjdGlvbiBtb2RlLlxuICogQHByaXZhdGVcbiAqL1xuXG5cbnZhciBQb2xpc2hlZEVycm9yID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uIChfRXJyb3IpIHtcbiAgX2luaGVyaXRzTG9vc2UoUG9saXNoZWRFcnJvciwgX0Vycm9yKTtcblxuICBmdW5jdGlvbiBQb2xpc2hlZEVycm9yKGNvZGUpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgX3RoaXMgPSBfRXJyb3IuY2FsbCh0aGlzLCBcIkFuIGVycm9yIG9jY3VycmVkLiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3N0eWxlZC1jb21wb25lbnRzL3BvbGlzaGVkL2Jsb2IvbWFzdGVyL3NyYy9lcnJvci9lcnJvcnMubWQjXCIgKyBjb2RlICsgXCIgZm9yIG1vcmUgaW5mb3JtYXRpb24uXCIpIHx8IHRoaXM7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuMiA+IDEgPyBfbGVuMiAtIDEgOiAwKSwgX2tleTIgPSAxOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICAgIGFyZ3NbX2tleTIgLSAxXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgICB9XG5cbiAgICAgIF90aGlzID0gX0Vycm9yLmNhbGwodGhpcywgZm9ybWF0LmFwcGx5KHZvaWQgMCwgW0VSUk9SU1tjb2RlXV0uY29uY2F0KGFyZ3MpKSkgfHwgdGhpcztcbiAgICB9XG5cbiAgICByZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyk7XG4gIH1cblxuICByZXR1cm4gUG9saXNoZWRFcnJvcjtcbn0oXG4vKiNfX1BVUkVfXyovXG5fd3JhcE5hdGl2ZVN1cGVyKEVycm9yKSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IFBvbGlzaGVkRXJyb3I7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIF9oc2xUb1JnYiA9XG4vKiNfX1BVUkVfXyovXG5faW50ZXJvcFJlcXVpcmVEZWZhdWx0KFxuLyojX19QVVJFX18qL1xucmVxdWlyZShcIi4uL2ludGVybmFsSGVscGVycy9faHNsVG9SZ2JcIikpO1xuXG52YXIgX25hbWVUb0hleCA9XG4vKiNfX1BVUkVfXyovXG5faW50ZXJvcFJlcXVpcmVEZWZhdWx0KFxuLyojX19QVVJFX18qL1xucmVxdWlyZShcIi4uL2ludGVybmFsSGVscGVycy9fbmFtZVRvSGV4XCIpKTtcblxudmFyIF9lcnJvcnMgPVxuLyojX19QVVJFX18qL1xuX2ludGVyb3BSZXF1aXJlRGVmYXVsdChcbi8qI19fUFVSRV9fKi9cbnJlcXVpcmUoXCIuLi9pbnRlcm5hbEhlbHBlcnMvX2Vycm9yc1wiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBoZXhSZWdleCA9IC9eI1thLWZBLUYwLTldezZ9JC87XG52YXIgaGV4UmdiYVJlZ2V4ID0gL14jW2EtZkEtRjAtOV17OH0kLztcbnZhciByZWR1Y2VkSGV4UmVnZXggPSAvXiNbYS1mQS1GMC05XXszfSQvO1xudmFyIHJlZHVjZWRSZ2JhSGV4UmVnZXggPSAvXiNbYS1mQS1GMC05XXs0fSQvO1xudmFyIHJnYlJlZ2V4ID0gL15yZ2JcXChcXHMqKFxcZHsxLDN9KVxccyosXFxzKihcXGR7MSwzfSlcXHMqLFxccyooXFxkezEsM30pXFxzKlxcKSQvO1xudmFyIHJnYmFSZWdleCA9IC9ecmdiYVxcKFxccyooXFxkezEsM30pXFxzKixcXHMqKFxcZHsxLDN9KVxccyosXFxzKihcXGR7MSwzfSlcXHMqLFxccyooWy0rXT9bMC05XSpbLl0/WzAtOV0rKVxccypcXCkkLztcbnZhciBoc2xSZWdleCA9IC9eaHNsXFwoXFxzKihcXGR7MCwzfVsuXT9bMC05XSspXFxzKixcXHMqKFxcZHsxLDN9KSVcXHMqLFxccyooXFxkezEsM30pJVxccypcXCkkLztcbnZhciBoc2xhUmVnZXggPSAvXmhzbGFcXChcXHMqKFxcZHswLDN9Wy5dP1swLTldKylcXHMqLFxccyooXFxkezEsM30pJVxccyosXFxzKihcXGR7MSwzfSklXFxzKixcXHMqKFstK10/WzAtOV0qWy5dP1swLTldKylcXHMqXFwpJC87XG4vKipcbiAqIFJldHVybnMgYW4gUmdiQ29sb3Igb3IgUmdiYUNvbG9yIG9iamVjdC4gVGhpcyB1dGlsaXR5IGZ1bmN0aW9uIGlzIG9ubHkgdXNlZnVsXG4gKiBpZiB3YW50IHRvIGV4dHJhY3QgYSBjb2xvciBjb21wb25lbnQuIFdpdGggdGhlIGNvbG9yIHV0aWwgYHRvQ29sb3JTdHJpbmdgIHlvdVxuICogY2FuIGNvbnZlcnQgYSBSZ2JDb2xvciBvciBSZ2JhQ29sb3Igb2JqZWN0IGJhY2sgdG8gYSBzdHJpbmcuXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFzc2lnbnMgYHsgcmVkOiAyNTUsIGdyZWVuOiAwLCBibHVlOiAwIH1gIHRvIGNvbG9yMVxuICogY29uc3QgY29sb3IxID0gcGFyc2VUb1JnYigncmdiKDI1NSwgMCwgMCknKTtcbiAqIC8vIEFzc2lnbnMgYHsgcmVkOiA5MiwgZ3JlZW46IDEwMiwgYmx1ZTogMTEyLCBhbHBoYTogMC43NSB9YCB0byBjb2xvcjJcbiAqIGNvbnN0IGNvbG9yMiA9IHBhcnNlVG9SZ2IoJ2hzbGEoMjEwLCAxMCUsIDQwJSwgMC43NSknKTtcbiAqL1xuXG5mdW5jdGlvbiBwYXJzZVRvUmdiKGNvbG9yKSB7XG4gIGlmICh0eXBlb2YgY29sb3IgIT09ICdzdHJpbmcnKSB7XG4gICAgdGhyb3cgbmV3IF9lcnJvcnMuZGVmYXVsdCgzKTtcbiAgfVxuXG4gIHZhciBub3JtYWxpemVkQ29sb3IgPSAoMCwgX25hbWVUb0hleC5kZWZhdWx0KShjb2xvcik7XG5cbiAgaWYgKG5vcm1hbGl6ZWRDb2xvci5tYXRjaChoZXhSZWdleCkpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcmVkOiBwYXJzZUludChcIlwiICsgbm9ybWFsaXplZENvbG9yWzFdICsgbm9ybWFsaXplZENvbG9yWzJdLCAxNiksXG4gICAgICBncmVlbjogcGFyc2VJbnQoXCJcIiArIG5vcm1hbGl6ZWRDb2xvclszXSArIG5vcm1hbGl6ZWRDb2xvcls0XSwgMTYpLFxuICAgICAgYmx1ZTogcGFyc2VJbnQoXCJcIiArIG5vcm1hbGl6ZWRDb2xvcls1XSArIG5vcm1hbGl6ZWRDb2xvcls2XSwgMTYpXG4gICAgfTtcbiAgfVxuXG4gIGlmIChub3JtYWxpemVkQ29sb3IubWF0Y2goaGV4UmdiYVJlZ2V4KSkge1xuICAgIHZhciBhbHBoYSA9IHBhcnNlRmxvYXQoKHBhcnNlSW50KFwiXCIgKyBub3JtYWxpemVkQ29sb3JbN10gKyBub3JtYWxpemVkQ29sb3JbOF0sIDE2KSAvIDI1NSkudG9GaXhlZCgyKSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJlZDogcGFyc2VJbnQoXCJcIiArIG5vcm1hbGl6ZWRDb2xvclsxXSArIG5vcm1hbGl6ZWRDb2xvclsyXSwgMTYpLFxuICAgICAgZ3JlZW46IHBhcnNlSW50KFwiXCIgKyBub3JtYWxpemVkQ29sb3JbM10gKyBub3JtYWxpemVkQ29sb3JbNF0sIDE2KSxcbiAgICAgIGJsdWU6IHBhcnNlSW50KFwiXCIgKyBub3JtYWxpemVkQ29sb3JbNV0gKyBub3JtYWxpemVkQ29sb3JbNl0sIDE2KSxcbiAgICAgIGFscGhhOiBhbHBoYVxuICAgIH07XG4gIH1cblxuICBpZiAobm9ybWFsaXplZENvbG9yLm1hdGNoKHJlZHVjZWRIZXhSZWdleCkpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcmVkOiBwYXJzZUludChcIlwiICsgbm9ybWFsaXplZENvbG9yWzFdICsgbm9ybWFsaXplZENvbG9yWzFdLCAxNiksXG4gICAgICBncmVlbjogcGFyc2VJbnQoXCJcIiArIG5vcm1hbGl6ZWRDb2xvclsyXSArIG5vcm1hbGl6ZWRDb2xvclsyXSwgMTYpLFxuICAgICAgYmx1ZTogcGFyc2VJbnQoXCJcIiArIG5vcm1hbGl6ZWRDb2xvclszXSArIG5vcm1hbGl6ZWRDb2xvclszXSwgMTYpXG4gICAgfTtcbiAgfVxuXG4gIGlmIChub3JtYWxpemVkQ29sb3IubWF0Y2gocmVkdWNlZFJnYmFIZXhSZWdleCkpIHtcbiAgICB2YXIgX2FscGhhID0gcGFyc2VGbG9hdCgocGFyc2VJbnQoXCJcIiArIG5vcm1hbGl6ZWRDb2xvcls0XSArIG5vcm1hbGl6ZWRDb2xvcls0XSwgMTYpIC8gMjU1KS50b0ZpeGVkKDIpKTtcblxuICAgIHJldHVybiB7XG4gICAgICByZWQ6IHBhcnNlSW50KFwiXCIgKyBub3JtYWxpemVkQ29sb3JbMV0gKyBub3JtYWxpemVkQ29sb3JbMV0sIDE2KSxcbiAgICAgIGdyZWVuOiBwYXJzZUludChcIlwiICsgbm9ybWFsaXplZENvbG9yWzJdICsgbm9ybWFsaXplZENvbG9yWzJdLCAxNiksXG4gICAgICBibHVlOiBwYXJzZUludChcIlwiICsgbm9ybWFsaXplZENvbG9yWzNdICsgbm9ybWFsaXplZENvbG9yWzNdLCAxNiksXG4gICAgICBhbHBoYTogX2FscGhhXG4gICAgfTtcbiAgfVxuXG4gIHZhciByZ2JNYXRjaGVkID0gcmdiUmVnZXguZXhlYyhub3JtYWxpemVkQ29sb3IpO1xuXG4gIGlmIChyZ2JNYXRjaGVkKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJlZDogcGFyc2VJbnQoXCJcIiArIHJnYk1hdGNoZWRbMV0sIDEwKSxcbiAgICAgIGdyZWVuOiBwYXJzZUludChcIlwiICsgcmdiTWF0Y2hlZFsyXSwgMTApLFxuICAgICAgYmx1ZTogcGFyc2VJbnQoXCJcIiArIHJnYk1hdGNoZWRbM10sIDEwKVxuICAgIH07XG4gIH1cblxuICB2YXIgcmdiYU1hdGNoZWQgPSByZ2JhUmVnZXguZXhlYyhub3JtYWxpemVkQ29sb3IpO1xuXG4gIGlmIChyZ2JhTWF0Y2hlZCkge1xuICAgIHJldHVybiB7XG4gICAgICByZWQ6IHBhcnNlSW50KFwiXCIgKyByZ2JhTWF0Y2hlZFsxXSwgMTApLFxuICAgICAgZ3JlZW46IHBhcnNlSW50KFwiXCIgKyByZ2JhTWF0Y2hlZFsyXSwgMTApLFxuICAgICAgYmx1ZTogcGFyc2VJbnQoXCJcIiArIHJnYmFNYXRjaGVkWzNdLCAxMCksXG4gICAgICBhbHBoYTogcGFyc2VGbG9hdChcIlwiICsgcmdiYU1hdGNoZWRbNF0pXG4gICAgfTtcbiAgfVxuXG4gIHZhciBoc2xNYXRjaGVkID0gaHNsUmVnZXguZXhlYyhub3JtYWxpemVkQ29sb3IpO1xuXG4gIGlmIChoc2xNYXRjaGVkKSB7XG4gICAgdmFyIGh1ZSA9IHBhcnNlSW50KFwiXCIgKyBoc2xNYXRjaGVkWzFdLCAxMCk7XG4gICAgdmFyIHNhdHVyYXRpb24gPSBwYXJzZUludChcIlwiICsgaHNsTWF0Y2hlZFsyXSwgMTApIC8gMTAwO1xuICAgIHZhciBsaWdodG5lc3MgPSBwYXJzZUludChcIlwiICsgaHNsTWF0Y2hlZFszXSwgMTApIC8gMTAwO1xuICAgIHZhciByZ2JDb2xvclN0cmluZyA9IFwicmdiKFwiICsgKDAsIF9oc2xUb1JnYi5kZWZhdWx0KShodWUsIHNhdHVyYXRpb24sIGxpZ2h0bmVzcykgKyBcIilcIjtcbiAgICB2YXIgaHNsUmdiTWF0Y2hlZCA9IHJnYlJlZ2V4LmV4ZWMocmdiQ29sb3JTdHJpbmcpO1xuXG4gICAgaWYgKCFoc2xSZ2JNYXRjaGVkKSB7XG4gICAgICB0aHJvdyBuZXcgX2Vycm9ycy5kZWZhdWx0KDQsIG5vcm1hbGl6ZWRDb2xvciwgcmdiQ29sb3JTdHJpbmcpO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICByZWQ6IHBhcnNlSW50KFwiXCIgKyBoc2xSZ2JNYXRjaGVkWzFdLCAxMCksXG4gICAgICBncmVlbjogcGFyc2VJbnQoXCJcIiArIGhzbFJnYk1hdGNoZWRbMl0sIDEwKSxcbiAgICAgIGJsdWU6IHBhcnNlSW50KFwiXCIgKyBoc2xSZ2JNYXRjaGVkWzNdLCAxMClcbiAgICB9O1xuICB9XG5cbiAgdmFyIGhzbGFNYXRjaGVkID0gaHNsYVJlZ2V4LmV4ZWMobm9ybWFsaXplZENvbG9yKTtcblxuICBpZiAoaHNsYU1hdGNoZWQpIHtcbiAgICB2YXIgX2h1ZSA9IHBhcnNlSW50KFwiXCIgKyBoc2xhTWF0Y2hlZFsxXSwgMTApO1xuXG4gICAgdmFyIF9zYXR1cmF0aW9uID0gcGFyc2VJbnQoXCJcIiArIGhzbGFNYXRjaGVkWzJdLCAxMCkgLyAxMDA7XG5cbiAgICB2YXIgX2xpZ2h0bmVzcyA9IHBhcnNlSW50KFwiXCIgKyBoc2xhTWF0Y2hlZFszXSwgMTApIC8gMTAwO1xuXG4gICAgdmFyIF9yZ2JDb2xvclN0cmluZyA9IFwicmdiKFwiICsgKDAsIF9oc2xUb1JnYi5kZWZhdWx0KShfaHVlLCBfc2F0dXJhdGlvbiwgX2xpZ2h0bmVzcykgKyBcIilcIjtcblxuICAgIHZhciBfaHNsUmdiTWF0Y2hlZCA9IHJnYlJlZ2V4LmV4ZWMoX3JnYkNvbG9yU3RyaW5nKTtcblxuICAgIGlmICghX2hzbFJnYk1hdGNoZWQpIHtcbiAgICAgIHRocm93IG5ldyBfZXJyb3JzLmRlZmF1bHQoNCwgbm9ybWFsaXplZENvbG9yLCBfcmdiQ29sb3JTdHJpbmcpO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICByZWQ6IHBhcnNlSW50KFwiXCIgKyBfaHNsUmdiTWF0Y2hlZFsxXSwgMTApLFxuICAgICAgZ3JlZW46IHBhcnNlSW50KFwiXCIgKyBfaHNsUmdiTWF0Y2hlZFsyXSwgMTApLFxuICAgICAgYmx1ZTogcGFyc2VJbnQoXCJcIiArIF9oc2xSZ2JNYXRjaGVkWzNdLCAxMCksXG4gICAgICBhbHBoYTogcGFyc2VGbG9hdChcIlwiICsgaHNsYU1hdGNoZWRbNF0pXG4gICAgfTtcbiAgfVxuXG4gIHRocm93IG5ldyBfZXJyb3JzLmRlZmF1bHQoNSk7XG59XG5cbnZhciBfZGVmYXVsdCA9IHBhcnNlVG9SZ2I7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG5mdW5jdGlvbiByZ2JUb0hzbChjb2xvcikge1xuICAvLyBtYWtlIHN1cmUgcmdiIGFyZSBjb250YWluZWQgaW4gYSBzZXQgb2YgWzAsIDI1NV1cbiAgdmFyIHJlZCA9IGNvbG9yLnJlZCAvIDI1NTtcbiAgdmFyIGdyZWVuID0gY29sb3IuZ3JlZW4gLyAyNTU7XG4gIHZhciBibHVlID0gY29sb3IuYmx1ZSAvIDI1NTtcbiAgdmFyIG1heCA9IE1hdGgubWF4KHJlZCwgZ3JlZW4sIGJsdWUpO1xuICB2YXIgbWluID0gTWF0aC5taW4ocmVkLCBncmVlbiwgYmx1ZSk7XG4gIHZhciBsaWdodG5lc3MgPSAobWF4ICsgbWluKSAvIDI7XG5cbiAgaWYgKG1heCA9PT0gbWluKSB7XG4gICAgLy8gYWNocm9tYXRpY1xuICAgIGlmIChjb2xvci5hbHBoYSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBodWU6IDAsXG4gICAgICAgIHNhdHVyYXRpb246IDAsXG4gICAgICAgIGxpZ2h0bmVzczogbGlnaHRuZXNzLFxuICAgICAgICBhbHBoYTogY29sb3IuYWxwaGFcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGh1ZTogMCxcbiAgICAgICAgc2F0dXJhdGlvbjogMCxcbiAgICAgICAgbGlnaHRuZXNzOiBsaWdodG5lc3NcbiAgICAgIH07XG4gICAgfVxuICB9XG5cbiAgdmFyIGh1ZTtcbiAgdmFyIGRlbHRhID0gbWF4IC0gbWluO1xuICB2YXIgc2F0dXJhdGlvbiA9IGxpZ2h0bmVzcyA+IDAuNSA/IGRlbHRhIC8gKDIgLSBtYXggLSBtaW4pIDogZGVsdGEgLyAobWF4ICsgbWluKTtcblxuICBzd2l0Y2ggKG1heCkge1xuICAgIGNhc2UgcmVkOlxuICAgICAgaHVlID0gKGdyZWVuIC0gYmx1ZSkgLyBkZWx0YSArIChncmVlbiA8IGJsdWUgPyA2IDogMCk7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgZ3JlZW46XG4gICAgICBodWUgPSAoYmx1ZSAtIHJlZCkgLyBkZWx0YSArIDI7XG4gICAgICBicmVhaztcblxuICAgIGRlZmF1bHQ6XG4gICAgICAvLyBibHVlIGNhc2VcbiAgICAgIGh1ZSA9IChyZWQgLSBncmVlbikgLyBkZWx0YSArIDQ7XG4gICAgICBicmVhaztcbiAgfVxuXG4gIGh1ZSAqPSA2MDtcblxuICBpZiAoY29sb3IuYWxwaGEgIT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiB7XG4gICAgICBodWU6IGh1ZSxcbiAgICAgIHNhdHVyYXRpb246IHNhdHVyYXRpb24sXG4gICAgICBsaWdodG5lc3M6IGxpZ2h0bmVzcyxcbiAgICAgIGFscGhhOiBjb2xvci5hbHBoYVxuICAgIH07XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGh1ZTogaHVlLFxuICAgIHNhdHVyYXRpb246IHNhdHVyYXRpb24sXG4gICAgbGlnaHRuZXNzOiBsaWdodG5lc3NcbiAgfTtcbn1cblxudmFyIF9kZWZhdWx0ID0gcmdiVG9Ic2w7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX3BhcnNlVG9SZ2IgPVxuLyojX19QVVJFX18qL1xuX2ludGVyb3BSZXF1aXJlRGVmYXVsdChcbi8qI19fUFVSRV9fKi9cbnJlcXVpcmUoXCIuL3BhcnNlVG9SZ2JcIikpO1xuXG52YXIgX3JnYlRvSHNsID1cbi8qI19fUFVSRV9fKi9cbl9pbnRlcm9wUmVxdWlyZURlZmF1bHQoXG4vKiNfX1BVUkVfXyovXG5yZXF1aXJlKFwiLi4vaW50ZXJuYWxIZWxwZXJzL19yZ2JUb0hzbFwiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbi8qKlxuICogUmV0dXJucyBhbiBIc2xDb2xvciBvciBIc2xhQ29sb3Igb2JqZWN0LiBUaGlzIHV0aWxpdHkgZnVuY3Rpb24gaXMgb25seSB1c2VmdWxcbiAqIGlmIHdhbnQgdG8gZXh0cmFjdCBhIGNvbG9yIGNvbXBvbmVudC4gV2l0aCB0aGUgY29sb3IgdXRpbCBgdG9Db2xvclN0cmluZ2AgeW91XG4gKiBjYW4gY29udmVydCBhIEhzbENvbG9yIG9yIEhzbGFDb2xvciBvYmplY3QgYmFjayB0byBhIHN0cmluZy5cbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQXNzaWducyBgeyBodWU6IDAsIHNhdHVyYXRpb246IDEsIGxpZ2h0bmVzczogMC41IH1gIHRvIGNvbG9yMVxuICogY29uc3QgY29sb3IxID0gcGFyc2VUb0hzbCgncmdiKDI1NSwgMCwgMCknKTtcbiAqIC8vIEFzc2lnbnMgYHsgaHVlOiAxMjgsIHNhdHVyYXRpb246IDEsIGxpZ2h0bmVzczogMC41LCBhbHBoYTogMC43NSB9YCB0byBjb2xvcjJcbiAqIGNvbnN0IGNvbG9yMiA9IHBhcnNlVG9Ic2woJ2hzbGEoMTI4LCAxMDAlLCA1MCUsIDAuNzUpJyk7XG4gKi9cbmZ1bmN0aW9uIHBhcnNlVG9Ic2woY29sb3IpIHtcbiAgLy8gTm90ZTogQXQgYSBsYXRlciBzdGFnZSB3ZSBjYW4gb3B0aW1pemUgdGhpcyBmdW5jdGlvbiBhcyByaWdodCBub3cgYSBoc2xcbiAgLy8gY29sb3Igd291bGQgYmUgcGFyc2VkIGNvbnZlcnRlZCB0byByZ2IgdmFsdWVzIGFuZCBjb252ZXJ0ZWQgYmFjayB0byBoc2wuXG4gIHJldHVybiAoMCwgX3JnYlRvSHNsLmRlZmF1bHQpKCgwLCBfcGFyc2VUb1JnYi5kZWZhdWx0KShjb2xvcikpO1xufVxuXG52YXIgX2RlZmF1bHQgPSBwYXJzZVRvSHNsO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxuLyoqXG4gKiBSZWR1Y2VzIGhleCB2YWx1ZXMgaWYgcG9zc2libGUgZS5nLiAjZmY4ODY2IHRvICNmODZcbiAqIEBwcml2YXRlXG4gKi9cbnZhciByZWR1Y2VIZXhWYWx1ZSA9IGZ1bmN0aW9uIHJlZHVjZUhleFZhbHVlKHZhbHVlKSB7XG4gIGlmICh2YWx1ZS5sZW5ndGggPT09IDcgJiYgdmFsdWVbMV0gPT09IHZhbHVlWzJdICYmIHZhbHVlWzNdID09PSB2YWx1ZVs0XSAmJiB2YWx1ZVs1XSA9PT0gdmFsdWVbNl0pIHtcbiAgICByZXR1cm4gXCIjXCIgKyB2YWx1ZVsxXSArIHZhbHVlWzNdICsgdmFsdWVbNV07XG4gIH1cblxuICByZXR1cm4gdmFsdWU7XG59O1xuXG52YXIgX2RlZmF1bHQgPSByZWR1Y2VIZXhWYWx1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbmZ1bmN0aW9uIG51bWJlclRvSGV4KHZhbHVlKSB7XG4gIHZhciBoZXggPSB2YWx1ZS50b1N0cmluZygxNik7XG4gIHJldHVybiBoZXgubGVuZ3RoID09PSAxID8gXCIwXCIgKyBoZXggOiBoZXg7XG59XG5cbnZhciBfZGVmYXVsdCA9IG51bWJlclRvSGV4O1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIF9oc2xUb1JnYiA9XG4vKiNfX1BVUkVfXyovXG5faW50ZXJvcFJlcXVpcmVEZWZhdWx0KFxuLyojX19QVVJFX18qL1xucmVxdWlyZShcIi4vX2hzbFRvUmdiXCIpKTtcblxudmFyIF9yZWR1Y2VIZXhWYWx1ZSA9XG4vKiNfX1BVUkVfXyovXG5faW50ZXJvcFJlcXVpcmVEZWZhdWx0KFxuLyojX19QVVJFX18qL1xucmVxdWlyZShcIi4vX3JlZHVjZUhleFZhbHVlXCIpKTtcblxudmFyIF9udW1iZXJUb0hleCA9XG4vKiNfX1BVUkVfXyovXG5faW50ZXJvcFJlcXVpcmVEZWZhdWx0KFxuLyojX19QVVJFX18qL1xucmVxdWlyZShcIi4vX251bWJlclRvSGV4XCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gY29sb3JUb0hleChjb2xvcikge1xuICByZXR1cm4gKDAsIF9udW1iZXJUb0hleC5kZWZhdWx0KShNYXRoLnJvdW5kKGNvbG9yICogMjU1KSk7XG59XG5cbmZ1bmN0aW9uIGNvbnZlcnRUb0hleChyZWQsIGdyZWVuLCBibHVlKSB7XG4gIHJldHVybiAoMCwgX3JlZHVjZUhleFZhbHVlLmRlZmF1bHQpKFwiI1wiICsgY29sb3JUb0hleChyZWQpICsgY29sb3JUb0hleChncmVlbikgKyBjb2xvclRvSGV4KGJsdWUpKTtcbn1cblxuZnVuY3Rpb24gaHNsVG9IZXgoaHVlLCBzYXR1cmF0aW9uLCBsaWdodG5lc3MpIHtcbiAgcmV0dXJuICgwLCBfaHNsVG9SZ2IuZGVmYXVsdCkoaHVlLCBzYXR1cmF0aW9uLCBsaWdodG5lc3MsIGNvbnZlcnRUb0hleCk7XG59XG5cbnZhciBfZGVmYXVsdCA9IGhzbFRvSGV4O1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIF9oc2xUb0hleCA9XG4vKiNfX1BVUkVfXyovXG5faW50ZXJvcFJlcXVpcmVEZWZhdWx0KFxuLyojX19QVVJFX18qL1xucmVxdWlyZShcIi4uL2ludGVybmFsSGVscGVycy9faHNsVG9IZXhcIikpO1xuXG52YXIgX2Vycm9ycyA9XG4vKiNfX1BVUkVfXyovXG5faW50ZXJvcFJlcXVpcmVEZWZhdWx0KFxuLyojX19QVVJFX18qL1xucmVxdWlyZShcIi4uL2ludGVybmFsSGVscGVycy9fZXJyb3JzXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuLyoqXG4gKiBSZXR1cm5zIGEgc3RyaW5nIHZhbHVlIGZvciB0aGUgY29sb3IuIFRoZSByZXR1cm5lZCByZXN1bHQgaXMgdGhlIHNtYWxsZXN0IHBvc3NpYmxlIGhleCBub3RhdGlvbi5cbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gU3R5bGVzIGFzIG9iamVjdCB1c2FnZVxuICogY29uc3Qgc3R5bGVzID0ge1xuICogICBiYWNrZ3JvdW5kOiBoc2woMzU5LCAwLjc1LCAwLjQpLFxuICogICBiYWNrZ3JvdW5kOiBoc2woeyBodWU6IDM2MCwgc2F0dXJhdGlvbjogMC43NSwgbGlnaHRuZXNzOiAwLjQgfSksXG4gKiB9XG4gKlxuICogLy8gc3R5bGVkLWNvbXBvbmVudHMgdXNhZ2VcbiAqIGNvbnN0IGRpdiA9IHN0eWxlZC5kaXZgXG4gKiAgIGJhY2tncm91bmQ6ICR7aHNsKDM1OSwgMC43NSwgMC40KX07XG4gKiAgIGJhY2tncm91bmQ6ICR7aHNsKHsgaHVlOiAzNjAsIHNhdHVyYXRpb246IDAuNzUsIGxpZ2h0bmVzczogMC40IH0pfTtcbiAqIGBcbiAqXG4gKiAvLyBDU1MgaW4gSlMgT3V0cHV0XG4gKlxuICogZWxlbWVudCB7XG4gKiAgIGJhY2tncm91bmQ6IFwiI2IzMTkxY1wiO1xuICogICBiYWNrZ3JvdW5kOiBcIiNiMzE5MWNcIjtcbiAqIH1cbiAqL1xuZnVuY3Rpb24gaHNsKHZhbHVlLCBzYXR1cmF0aW9uLCBsaWdodG5lc3MpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicgJiYgdHlwZW9mIHNhdHVyYXRpb24gPT09ICdudW1iZXInICYmIHR5cGVvZiBsaWdodG5lc3MgPT09ICdudW1iZXInKSB7XG4gICAgcmV0dXJuICgwLCBfaHNsVG9IZXguZGVmYXVsdCkodmFsdWUsIHNhdHVyYXRpb24sIGxpZ2h0bmVzcyk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiBzYXR1cmF0aW9uID09PSB1bmRlZmluZWQgJiYgbGlnaHRuZXNzID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gKDAsIF9oc2xUb0hleC5kZWZhdWx0KSh2YWx1ZS5odWUsIHZhbHVlLnNhdHVyYXRpb24sIHZhbHVlLmxpZ2h0bmVzcyk7XG4gIH1cblxuICB0aHJvdyBuZXcgX2Vycm9ycy5kZWZhdWx0KDEpO1xufVxuXG52YXIgX2RlZmF1bHQgPSBoc2w7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX2hzbFRvSGV4ID1cbi8qI19fUFVSRV9fKi9cbl9pbnRlcm9wUmVxdWlyZURlZmF1bHQoXG4vKiNfX1BVUkVfXyovXG5yZXF1aXJlKFwiLi4vaW50ZXJuYWxIZWxwZXJzL19oc2xUb0hleFwiKSk7XG5cbnZhciBfaHNsVG9SZ2IgPVxuLyojX19QVVJFX18qL1xuX2ludGVyb3BSZXF1aXJlRGVmYXVsdChcbi8qI19fUFVSRV9fKi9cbnJlcXVpcmUoXCIuLi9pbnRlcm5hbEhlbHBlcnMvX2hzbFRvUmdiXCIpKTtcblxudmFyIF9lcnJvcnMgPVxuLyojX19QVVJFX18qL1xuX2ludGVyb3BSZXF1aXJlRGVmYXVsdChcbi8qI19fUFVSRV9fKi9cbnJlcXVpcmUoXCIuLi9pbnRlcm5hbEhlbHBlcnMvX2Vycm9yc1wiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbi8qKlxuICogUmV0dXJucyBhIHN0cmluZyB2YWx1ZSBmb3IgdGhlIGNvbG9yLiBUaGUgcmV0dXJuZWQgcmVzdWx0IGlzIHRoZSBzbWFsbGVzdCBwb3NzaWJsZSByZ2JhIG9yIGhleCBub3RhdGlvbi5cbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gU3R5bGVzIGFzIG9iamVjdCB1c2FnZVxuICogY29uc3Qgc3R5bGVzID0ge1xuICogICBiYWNrZ3JvdW5kOiBoc2xhKDM1OSwgMC43NSwgMC40LCAwLjcpLFxuICogICBiYWNrZ3JvdW5kOiBoc2xhKHsgaHVlOiAzNjAsIHNhdHVyYXRpb246IDAuNzUsIGxpZ2h0bmVzczogMC40LCBhbHBoYTogMCw3IH0pLFxuICogICBiYWNrZ3JvdW5kOiBoc2xhKDM1OSwgMC43NSwgMC40LCAxKSxcbiAqIH1cbiAqXG4gKiAvLyBzdHlsZWQtY29tcG9uZW50cyB1c2FnZVxuICogY29uc3QgZGl2ID0gc3R5bGVkLmRpdmBcbiAqICAgYmFja2dyb3VuZDogJHtoc2xhKDM1OSwgMC43NSwgMC40LCAwLjcpfTtcbiAqICAgYmFja2dyb3VuZDogJHtoc2xhKHsgaHVlOiAzNjAsIHNhdHVyYXRpb246IDAuNzUsIGxpZ2h0bmVzczogMC40LCBhbHBoYTogMCw3IH0pfTtcbiAqICAgYmFja2dyb3VuZDogJHtoc2xhKDM1OSwgMC43NSwgMC40LCAxKX07XG4gKiBgXG4gKlxuICogLy8gQ1NTIGluIEpTIE91dHB1dFxuICpcbiAqIGVsZW1lbnQge1xuICogICBiYWNrZ3JvdW5kOiBcInJnYmEoMTc5LDI1LDI4LDAuNylcIjtcbiAqICAgYmFja2dyb3VuZDogXCJyZ2JhKDE3OSwyNSwyOCwwLjcpXCI7XG4gKiAgIGJhY2tncm91bmQ6IFwiI2IzMTkxY1wiO1xuICogfVxuICovXG5mdW5jdGlvbiBoc2xhKHZhbHVlLCBzYXR1cmF0aW9uLCBsaWdodG5lc3MsIGFscGhhKSB7XG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInICYmIHR5cGVvZiBzYXR1cmF0aW9uID09PSAnbnVtYmVyJyAmJiB0eXBlb2YgbGlnaHRuZXNzID09PSAnbnVtYmVyJyAmJiB0eXBlb2YgYWxwaGEgPT09ICdudW1iZXInKSB7XG4gICAgcmV0dXJuIGFscGhhID49IDEgPyAoMCwgX2hzbFRvSGV4LmRlZmF1bHQpKHZhbHVlLCBzYXR1cmF0aW9uLCBsaWdodG5lc3MpIDogXCJyZ2JhKFwiICsgKDAsIF9oc2xUb1JnYi5kZWZhdWx0KSh2YWx1ZSwgc2F0dXJhdGlvbiwgbGlnaHRuZXNzKSArIFwiLFwiICsgYWxwaGEgKyBcIilcIjtcbiAgfSBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHNhdHVyYXRpb24gPT09IHVuZGVmaW5lZCAmJiBsaWdodG5lc3MgPT09IHVuZGVmaW5lZCAmJiBhbHBoYSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIHZhbHVlLmFscGhhID49IDEgPyAoMCwgX2hzbFRvSGV4LmRlZmF1bHQpKHZhbHVlLmh1ZSwgdmFsdWUuc2F0dXJhdGlvbiwgdmFsdWUubGlnaHRuZXNzKSA6IFwicmdiYShcIiArICgwLCBfaHNsVG9SZ2IuZGVmYXVsdCkodmFsdWUuaHVlLCB2YWx1ZS5zYXR1cmF0aW9uLCB2YWx1ZS5saWdodG5lc3MpICsgXCIsXCIgKyB2YWx1ZS5hbHBoYSArIFwiKVwiO1xuICB9XG5cbiAgdGhyb3cgbmV3IF9lcnJvcnMuZGVmYXVsdCgyKTtcbn1cblxudmFyIF9kZWZhdWx0ID0gaHNsYTtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBfcmVkdWNlSGV4VmFsdWUgPVxuLyojX19QVVJFX18qL1xuX2ludGVyb3BSZXF1aXJlRGVmYXVsdChcbi8qI19fUFVSRV9fKi9cbnJlcXVpcmUoXCIuLi9pbnRlcm5hbEhlbHBlcnMvX3JlZHVjZUhleFZhbHVlXCIpKTtcblxudmFyIF9udW1iZXJUb0hleCA9XG4vKiNfX1BVUkVfXyovXG5faW50ZXJvcFJlcXVpcmVEZWZhdWx0KFxuLyojX19QVVJFX18qL1xucmVxdWlyZShcIi4uL2ludGVybmFsSGVscGVycy9fbnVtYmVyVG9IZXhcIikpO1xuXG52YXIgX2Vycm9ycyA9XG4vKiNfX1BVUkVfXyovXG5faW50ZXJvcFJlcXVpcmVEZWZhdWx0KFxuLyojX19QVVJFX18qL1xucmVxdWlyZShcIi4uL2ludGVybmFsSGVscGVycy9fZXJyb3JzXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuLyoqXG4gKiBSZXR1cm5zIGEgc3RyaW5nIHZhbHVlIGZvciB0aGUgY29sb3IuIFRoZSByZXR1cm5lZCByZXN1bHQgaXMgdGhlIHNtYWxsZXN0IHBvc3NpYmxlIGhleCBub3RhdGlvbi5cbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gU3R5bGVzIGFzIG9iamVjdCB1c2FnZVxuICogY29uc3Qgc3R5bGVzID0ge1xuICogICBiYWNrZ3JvdW5kOiByZ2IoMjU1LCAyMDUsIDEwMCksXG4gKiAgIGJhY2tncm91bmQ6IHJnYih7IHJlZDogMjU1LCBncmVlbjogMjA1LCBibHVlOiAxMDAgfSksXG4gKiB9XG4gKlxuICogLy8gc3R5bGVkLWNvbXBvbmVudHMgdXNhZ2VcbiAqIGNvbnN0IGRpdiA9IHN0eWxlZC5kaXZgXG4gKiAgIGJhY2tncm91bmQ6ICR7cmdiKDI1NSwgMjA1LCAxMDApfTtcbiAqICAgYmFja2dyb3VuZDogJHtyZ2IoeyByZWQ6IDI1NSwgZ3JlZW46IDIwNSwgYmx1ZTogMTAwIH0pfTtcbiAqIGBcbiAqXG4gKiAvLyBDU1MgaW4gSlMgT3V0cHV0XG4gKlxuICogZWxlbWVudCB7XG4gKiAgIGJhY2tncm91bmQ6IFwiI2ZmY2Q2NFwiO1xuICogICBiYWNrZ3JvdW5kOiBcIiNmZmNkNjRcIjtcbiAqIH1cbiAqL1xuZnVuY3Rpb24gcmdiKHZhbHVlLCBncmVlbiwgYmx1ZSkge1xuICBpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJyAmJiB0eXBlb2YgZ3JlZW4gPT09ICdudW1iZXInICYmIHR5cGVvZiBibHVlID09PSAnbnVtYmVyJykge1xuICAgIHJldHVybiAoMCwgX3JlZHVjZUhleFZhbHVlLmRlZmF1bHQpKFwiI1wiICsgKDAsIF9udW1iZXJUb0hleC5kZWZhdWx0KSh2YWx1ZSkgKyAoMCwgX251bWJlclRvSGV4LmRlZmF1bHQpKGdyZWVuKSArICgwLCBfbnVtYmVyVG9IZXguZGVmYXVsdCkoYmx1ZSkpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgZ3JlZW4gPT09IHVuZGVmaW5lZCAmJiBibHVlID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gKDAsIF9yZWR1Y2VIZXhWYWx1ZS5kZWZhdWx0KShcIiNcIiArICgwLCBfbnVtYmVyVG9IZXguZGVmYXVsdCkodmFsdWUucmVkKSArICgwLCBfbnVtYmVyVG9IZXguZGVmYXVsdCkodmFsdWUuZ3JlZW4pICsgKDAsIF9udW1iZXJUb0hleC5kZWZhdWx0KSh2YWx1ZS5ibHVlKSk7XG4gIH1cblxuICB0aHJvdyBuZXcgX2Vycm9ycy5kZWZhdWx0KDYpO1xufVxuXG52YXIgX2RlZmF1bHQgPSByZ2I7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX3BhcnNlVG9SZ2IgPVxuLyojX19QVVJFX18qL1xuX2ludGVyb3BSZXF1aXJlRGVmYXVsdChcbi8qI19fUFVSRV9fKi9cbnJlcXVpcmUoXCIuL3BhcnNlVG9SZ2JcIikpO1xuXG52YXIgX3JnYiA9XG4vKiNfX1BVUkVfXyovXG5faW50ZXJvcFJlcXVpcmVEZWZhdWx0KFxuLyojX19QVVJFX18qL1xucmVxdWlyZShcIi4vcmdiXCIpKTtcblxudmFyIF9lcnJvcnMgPVxuLyojX19QVVJFX18qL1xuX2ludGVyb3BSZXF1aXJlRGVmYXVsdChcbi8qI19fUFVSRV9fKi9cbnJlcXVpcmUoXCIuLi9pbnRlcm5hbEhlbHBlcnMvX2Vycm9yc1wiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbi8qKlxuICogUmV0dXJucyBhIHN0cmluZyB2YWx1ZSBmb3IgdGhlIGNvbG9yLiBUaGUgcmV0dXJuZWQgcmVzdWx0IGlzIHRoZSBzbWFsbGVzdCBwb3NzaWJsZSByZ2JhIG9yIGhleCBub3RhdGlvbi5cbiAqXG4gKiBDYW4gYWxzbyBiZSB1c2VkIHRvIGZhZGUgYSBjb2xvciBieSBwYXNzaW5nIGEgaGV4IHZhbHVlIG9yIG5hbWVkIENTUyBjb2xvciBhbG9uZyB3aXRoIGFuIGFscGhhIHZhbHVlLlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBTdHlsZXMgYXMgb2JqZWN0IHVzYWdlXG4gKiBjb25zdCBzdHlsZXMgPSB7XG4gKiAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyMDUsIDEwMCwgMC43KSxcbiAqICAgYmFja2dyb3VuZDogcmdiYSh7IHJlZDogMjU1LCBncmVlbjogMjA1LCBibHVlOiAxMDAsIGFscGhhOiAwLjcgfSksXG4gKiAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyMDUsIDEwMCwgMSksXG4gKiAgIGJhY2tncm91bmQ6IHJnYmEoJyNmZmZmZmYnLCAwLjQpLFxuICogICBiYWNrZ3JvdW5kOiByZ2JhKCdibGFjaycsIDAuNyksXG4gKiB9XG4gKlxuICogLy8gc3R5bGVkLWNvbXBvbmVudHMgdXNhZ2VcbiAqIGNvbnN0IGRpdiA9IHN0eWxlZC5kaXZgXG4gKiAgIGJhY2tncm91bmQ6ICR7cmdiYSgyNTUsIDIwNSwgMTAwLCAwLjcpfTtcbiAqICAgYmFja2dyb3VuZDogJHtyZ2JhKHsgcmVkOiAyNTUsIGdyZWVuOiAyMDUsIGJsdWU6IDEwMCwgYWxwaGE6IDAuNyB9KX07XG4gKiAgIGJhY2tncm91bmQ6ICR7cmdiYSgyNTUsIDIwNSwgMTAwLCAxKX07XG4gKiAgIGJhY2tncm91bmQ6ICR7cmdiYSgnI2ZmZmZmZicsIDAuNCl9O1xuICogICBiYWNrZ3JvdW5kOiAke3JnYmEoJ2JsYWNrJywgMC43KX07XG4gKiBgXG4gKlxuICogLy8gQ1NTIGluIEpTIE91dHB1dFxuICpcbiAqIGVsZW1lbnQge1xuICogICBiYWNrZ3JvdW5kOiBcInJnYmEoMjU1LDIwNSwxMDAsMC43KVwiO1xuICogICBiYWNrZ3JvdW5kOiBcInJnYmEoMjU1LDIwNSwxMDAsMC43KVwiO1xuICogICBiYWNrZ3JvdW5kOiBcIiNmZmNkNjRcIjtcbiAqICAgYmFja2dyb3VuZDogXCJyZ2JhKDI1NSwyNTUsMjU1LDAuNClcIjtcbiAqICAgYmFja2dyb3VuZDogXCJyZ2JhKDAsMCwwLDAuNylcIjtcbiAqIH1cbiAqL1xuZnVuY3Rpb24gcmdiYShmaXJzdFZhbHVlLCBzZWNvbmRWYWx1ZSwgdGhpcmRWYWx1ZSwgZm91cnRoVmFsdWUpIHtcbiAgaWYgKHR5cGVvZiBmaXJzdFZhbHVlID09PSAnc3RyaW5nJyAmJiB0eXBlb2Ygc2Vjb25kVmFsdWUgPT09ICdudW1iZXInKSB7XG4gICAgdmFyIHJnYlZhbHVlID0gKDAsIF9wYXJzZVRvUmdiLmRlZmF1bHQpKGZpcnN0VmFsdWUpO1xuICAgIHJldHVybiBcInJnYmEoXCIgKyByZ2JWYWx1ZS5yZWQgKyBcIixcIiArIHJnYlZhbHVlLmdyZWVuICsgXCIsXCIgKyByZ2JWYWx1ZS5ibHVlICsgXCIsXCIgKyBzZWNvbmRWYWx1ZSArIFwiKVwiO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBmaXJzdFZhbHVlID09PSAnbnVtYmVyJyAmJiB0eXBlb2Ygc2Vjb25kVmFsdWUgPT09ICdudW1iZXInICYmIHR5cGVvZiB0aGlyZFZhbHVlID09PSAnbnVtYmVyJyAmJiB0eXBlb2YgZm91cnRoVmFsdWUgPT09ICdudW1iZXInKSB7XG4gICAgcmV0dXJuIGZvdXJ0aFZhbHVlID49IDEgPyAoMCwgX3JnYi5kZWZhdWx0KShmaXJzdFZhbHVlLCBzZWNvbmRWYWx1ZSwgdGhpcmRWYWx1ZSkgOiBcInJnYmEoXCIgKyBmaXJzdFZhbHVlICsgXCIsXCIgKyBzZWNvbmRWYWx1ZSArIFwiLFwiICsgdGhpcmRWYWx1ZSArIFwiLFwiICsgZm91cnRoVmFsdWUgKyBcIilcIjtcbiAgfSBlbHNlIGlmICh0eXBlb2YgZmlyc3RWYWx1ZSA9PT0gJ29iamVjdCcgJiYgc2Vjb25kVmFsdWUgPT09IHVuZGVmaW5lZCAmJiB0aGlyZFZhbHVlID09PSB1bmRlZmluZWQgJiYgZm91cnRoVmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBmaXJzdFZhbHVlLmFscGhhID49IDEgPyAoMCwgX3JnYi5kZWZhdWx0KShmaXJzdFZhbHVlLnJlZCwgZmlyc3RWYWx1ZS5ncmVlbiwgZmlyc3RWYWx1ZS5ibHVlKSA6IFwicmdiYShcIiArIGZpcnN0VmFsdWUucmVkICsgXCIsXCIgKyBmaXJzdFZhbHVlLmdyZWVuICsgXCIsXCIgKyBmaXJzdFZhbHVlLmJsdWUgKyBcIixcIiArIGZpcnN0VmFsdWUuYWxwaGEgKyBcIilcIjtcbiAgfVxuXG4gIHRocm93IG5ldyBfZXJyb3JzLmRlZmF1bHQoNyk7XG59XG5cbnZhciBfZGVmYXVsdCA9IHJnYmE7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX2hzbCA9XG4vKiNfX1BVUkVfXyovXG5faW50ZXJvcFJlcXVpcmVEZWZhdWx0KFxuLyojX19QVVJFX18qL1xucmVxdWlyZShcIi4vaHNsXCIpKTtcblxudmFyIF9oc2xhID1cbi8qI19fUFVSRV9fKi9cbl9pbnRlcm9wUmVxdWlyZURlZmF1bHQoXG4vKiNfX1BVUkVfXyovXG5yZXF1aXJlKFwiLi9oc2xhXCIpKTtcblxudmFyIF9yZ2IgPVxuLyojX19QVVJFX18qL1xuX2ludGVyb3BSZXF1aXJlRGVmYXVsdChcbi8qI19fUFVSRV9fKi9cbnJlcXVpcmUoXCIuL3JnYlwiKSk7XG5cbnZhciBfcmdiYSA9XG4vKiNfX1BVUkVfXyovXG5faW50ZXJvcFJlcXVpcmVEZWZhdWx0KFxuLyojX19QVVJFX18qL1xucmVxdWlyZShcIi4vcmdiYVwiKSk7XG5cbnZhciBfZXJyb3JzID1cbi8qI19fUFVSRV9fKi9cbl9pbnRlcm9wUmVxdWlyZURlZmF1bHQoXG4vKiNfX1BVUkVfXyovXG5yZXF1aXJlKFwiLi4vaW50ZXJuYWxIZWxwZXJzL19lcnJvcnNcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgaXNSZ2IgPSBmdW5jdGlvbiBpc1JnYihjb2xvcikge1xuICByZXR1cm4gdHlwZW9mIGNvbG9yLnJlZCA9PT0gJ251bWJlcicgJiYgdHlwZW9mIGNvbG9yLmdyZWVuID09PSAnbnVtYmVyJyAmJiB0eXBlb2YgY29sb3IuYmx1ZSA9PT0gJ251bWJlcicgJiYgKHR5cGVvZiBjb2xvci5hbHBoYSAhPT0gJ251bWJlcicgfHwgdHlwZW9mIGNvbG9yLmFscGhhID09PSAndW5kZWZpbmVkJyk7XG59O1xuXG52YXIgaXNSZ2JhID0gZnVuY3Rpb24gaXNSZ2JhKGNvbG9yKSB7XG4gIHJldHVybiB0eXBlb2YgY29sb3IucmVkID09PSAnbnVtYmVyJyAmJiB0eXBlb2YgY29sb3IuZ3JlZW4gPT09ICdudW1iZXInICYmIHR5cGVvZiBjb2xvci5ibHVlID09PSAnbnVtYmVyJyAmJiB0eXBlb2YgY29sb3IuYWxwaGEgPT09ICdudW1iZXInO1xufTtcblxudmFyIGlzSHNsID0gZnVuY3Rpb24gaXNIc2woY29sb3IpIHtcbiAgcmV0dXJuIHR5cGVvZiBjb2xvci5odWUgPT09ICdudW1iZXInICYmIHR5cGVvZiBjb2xvci5zYXR1cmF0aW9uID09PSAnbnVtYmVyJyAmJiB0eXBlb2YgY29sb3IubGlnaHRuZXNzID09PSAnbnVtYmVyJyAmJiAodHlwZW9mIGNvbG9yLmFscGhhICE9PSAnbnVtYmVyJyB8fCB0eXBlb2YgY29sb3IuYWxwaGEgPT09ICd1bmRlZmluZWQnKTtcbn07XG5cbnZhciBpc0hzbGEgPSBmdW5jdGlvbiBpc0hzbGEoY29sb3IpIHtcbiAgcmV0dXJuIHR5cGVvZiBjb2xvci5odWUgPT09ICdudW1iZXInICYmIHR5cGVvZiBjb2xvci5zYXR1cmF0aW9uID09PSAnbnVtYmVyJyAmJiB0eXBlb2YgY29sb3IubGlnaHRuZXNzID09PSAnbnVtYmVyJyAmJiB0eXBlb2YgY29sb3IuYWxwaGEgPT09ICdudW1iZXInO1xufTtcbi8qKlxuICogQ29udmVydHMgYSBSZ2JDb2xvciwgUmdiYUNvbG9yLCBIc2xDb2xvciBvciBIc2xhQ29sb3Igb2JqZWN0IHRvIGEgY29sb3Igc3RyaW5nLlxuICogVGhpcyB1dGlsIGlzIHVzZWZ1bCBpbiBjYXNlIHlvdSBvbmx5IGtub3cgb24gcnVudGltZSB3aGljaCBjb2xvciBvYmplY3QgaXNcbiAqIHVzZWQuIE90aGVyd2lzZSB3ZSByZWNvbW1lbmQgdG8gcmVseSBvbiBgcmdiYCwgYHJnYmFgLCBgaHNsYCBvciBgaHNsYWAuXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFN0eWxlcyBhcyBvYmplY3QgdXNhZ2VcbiAqIGNvbnN0IHN0eWxlcyA9IHtcbiAqICAgYmFja2dyb3VuZDogdG9Db2xvclN0cmluZyh7IHJlZDogMjU1LCBncmVlbjogMjA1LCBibHVlOiAxMDAgfSksXG4gKiAgIGJhY2tncm91bmQ6IHRvQ29sb3JTdHJpbmcoeyByZWQ6IDI1NSwgZ3JlZW46IDIwNSwgYmx1ZTogMTAwLCBhbHBoYTogMC43MiB9KSxcbiAqICAgYmFja2dyb3VuZDogdG9Db2xvclN0cmluZyh7IGh1ZTogMjQwLCBzYXR1cmF0aW9uOiAxLCBsaWdodG5lc3M6IDAuNSB9KSxcbiAqICAgYmFja2dyb3VuZDogdG9Db2xvclN0cmluZyh7IGh1ZTogMzYwLCBzYXR1cmF0aW9uOiAwLjc1LCBsaWdodG5lc3M6IDAuNCwgYWxwaGE6IDAuNzIgfSksXG4gKiB9XG4gKlxuICogLy8gc3R5bGVkLWNvbXBvbmVudHMgdXNhZ2VcbiAqIGNvbnN0IGRpdiA9IHN0eWxlZC5kaXZgXG4gKiAgIGJhY2tncm91bmQ6ICR7dG9Db2xvclN0cmluZyh7IHJlZDogMjU1LCBncmVlbjogMjA1LCBibHVlOiAxMDAgfSl9O1xuICogICBiYWNrZ3JvdW5kOiAke3RvQ29sb3JTdHJpbmcoeyByZWQ6IDI1NSwgZ3JlZW46IDIwNSwgYmx1ZTogMTAwLCBhbHBoYTogMC43MiB9KX07XG4gKiAgIGJhY2tncm91bmQ6ICR7dG9Db2xvclN0cmluZyh7IGh1ZTogMjQwLCBzYXR1cmF0aW9uOiAxLCBsaWdodG5lc3M6IDAuNSB9KX07XG4gKiAgIGJhY2tncm91bmQ6ICR7dG9Db2xvclN0cmluZyh7IGh1ZTogMzYwLCBzYXR1cmF0aW9uOiAwLjc1LCBsaWdodG5lc3M6IDAuNCwgYWxwaGE6IDAuNzIgfSl9O1xuICogYFxuICpcbiAqIC8vIENTUyBpbiBKUyBPdXRwdXRcbiAqIGVsZW1lbnQge1xuICogICBiYWNrZ3JvdW5kOiBcIiNmZmNkNjRcIjtcbiAqICAgYmFja2dyb3VuZDogXCJyZ2JhKDI1NSwyMDUsMTAwLDAuNzIpXCI7XG4gKiAgIGJhY2tncm91bmQ6IFwiIzAwZlwiO1xuICogICBiYWNrZ3JvdW5kOiBcInJnYmEoMTc5LDI1LDI1LDAuNzIpXCI7XG4gKiB9XG4gKi9cblxuXG5mdW5jdGlvbiB0b0NvbG9yU3RyaW5nKGNvbG9yKSB7XG4gIGlmICh0eXBlb2YgY29sb3IgIT09ICdvYmplY3QnKSB0aHJvdyBuZXcgX2Vycm9ycy5kZWZhdWx0KDgpO1xuICBpZiAoaXNSZ2JhKGNvbG9yKSkgcmV0dXJuICgwLCBfcmdiYS5kZWZhdWx0KShjb2xvcik7XG4gIGlmIChpc1JnYihjb2xvcikpIHJldHVybiAoMCwgX3JnYi5kZWZhdWx0KShjb2xvcik7XG4gIGlmIChpc0hzbGEoY29sb3IpKSByZXR1cm4gKDAsIF9oc2xhLmRlZmF1bHQpKGNvbG9yKTtcbiAgaWYgKGlzSHNsKGNvbG9yKSkgcmV0dXJuICgwLCBfaHNsLmRlZmF1bHQpKGNvbG9yKTtcbiAgdGhyb3cgbmV3IF9lcnJvcnMuZGVmYXVsdCg4KTtcbn1cblxudmFyIF9kZWZhdWx0ID0gdG9Db2xvclN0cmluZztcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBfY3VycnkgPVxuLyojX19QVVJFX18qL1xuX2ludGVyb3BSZXF1aXJlRGVmYXVsdChcbi8qI19fUFVSRV9fKi9cbnJlcXVpcmUoXCIuLi9pbnRlcm5hbEhlbHBlcnMvX2N1cnJ5XCIpKTtcblxudmFyIF9ndWFyZCA9XG4vKiNfX1BVUkVfXyovXG5faW50ZXJvcFJlcXVpcmVEZWZhdWx0KFxuLyojX19QVVJFX18qL1xucmVxdWlyZShcIi4uL2ludGVybmFsSGVscGVycy9fZ3VhcmRcIikpO1xuXG52YXIgX3BhcnNlVG9Ic2wgPVxuLyojX19QVVJFX18qL1xuX2ludGVyb3BSZXF1aXJlRGVmYXVsdChcbi8qI19fUFVSRV9fKi9cbnJlcXVpcmUoXCIuL3BhcnNlVG9Ic2xcIikpO1xuXG52YXIgX3RvQ29sb3JTdHJpbmcgPVxuLyojX19QVVJFX18qL1xuX2ludGVyb3BSZXF1aXJlRGVmYXVsdChcbi8qI19fUFVSRV9fKi9cbnJlcXVpcmUoXCIuL3RvQ29sb3JTdHJpbmdcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfZXh0ZW5kcygpIHsgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9OyByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfVxuXG4vKipcbiAqIFJldHVybnMgYSBzdHJpbmcgdmFsdWUgZm9yIHRoZSBkYXJrZW5lZCBjb2xvci5cbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gU3R5bGVzIGFzIG9iamVjdCB1c2FnZVxuICogY29uc3Qgc3R5bGVzID0ge1xuICogICBiYWNrZ3JvdW5kOiBkYXJrZW4oMC4yLCAnI0ZGQ0Q2NCcpLFxuICogICBiYWNrZ3JvdW5kOiBkYXJrZW4oJzAuMicsICdyZ2JhKDI1NSwyMDUsMTAwLDAuNyknKSxcbiAqIH1cbiAqXG4gKiAvLyBzdHlsZWQtY29tcG9uZW50cyB1c2FnZVxuICogY29uc3QgZGl2ID0gc3R5bGVkLmRpdmBcbiAqICAgYmFja2dyb3VuZDogJHtkYXJrZW4oMC4yLCAnI0ZGQ0Q2NCcpfTtcbiAqICAgYmFja2dyb3VuZDogJHtkYXJrZW4oJzAuMicsICdyZ2JhKDI1NSwyMDUsMTAwLDAuNyknKX07XG4gKiBgXG4gKlxuICogLy8gQ1NTIGluIEpTIE91dHB1dFxuICpcbiAqIGVsZW1lbnQge1xuICogICBiYWNrZ3JvdW5kOiBcIiNmZmJkMzFcIjtcbiAqICAgYmFja2dyb3VuZDogXCJyZ2JhKDI1NSwxODksNDksMC43KVwiO1xuICogfVxuICovXG5mdW5jdGlvbiBkYXJrZW4oYW1vdW50LCBjb2xvcikge1xuICBpZiAoY29sb3IgPT09ICd0cmFuc3BhcmVudCcpIHJldHVybiBjb2xvcjtcbiAgdmFyIGhzbENvbG9yID0gKDAsIF9wYXJzZVRvSHNsLmRlZmF1bHQpKGNvbG9yKTtcbiAgcmV0dXJuICgwLCBfdG9Db2xvclN0cmluZy5kZWZhdWx0KShfZXh0ZW5kcyh7fSwgaHNsQ29sb3IsIHtcbiAgICBsaWdodG5lc3M6ICgwLCBfZ3VhcmQuZGVmYXVsdCkoMCwgMSwgaHNsQ29sb3IubGlnaHRuZXNzIC0gcGFyc2VGbG9hdChhbW91bnQpKVxuICB9KSk7XG59IC8vIHByZXR0aWVyLWlnbm9yZVxuXG5cbnZhciBjdXJyaWVkRGFya2VuID1cbi8qI19fUFVSRV9fKi9cbigwLCBfY3VycnkuZGVmYXVsdFxuLyogOjo8bnVtYmVyIHwgc3RyaW5nLCBzdHJpbmcsIHN0cmluZz4gKi9cbikoZGFya2VuKTtcbnZhciBfZGVmYXVsdCA9IGN1cnJpZWREYXJrZW47XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX3BhcnNlVG9SZ2IgPVxuLyojX19QVVJFX18qL1xuX2ludGVyb3BSZXF1aXJlRGVmYXVsdChcbi8qI19fUFVSRV9fKi9cbnJlcXVpcmUoXCIuL3BhcnNlVG9SZ2JcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG4vKipcbiAqIFJldHVybnMgYSBudW1iZXIgKGZsb2F0KSByZXByZXNlbnRpbmcgdGhlIGx1bWluYW5jZSBvZiBhIGNvbG9yLlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBTdHlsZXMgYXMgb2JqZWN0IHVzYWdlXG4gKiBjb25zdCBzdHlsZXMgPSB7XG4gKiAgIGJhY2tncm91bmQ6IGdldEx1bWluYW5jZSgnI0NDQ0Q2NCcpID49IGdldEx1bWluYW5jZSgnIzAwMDBmZicpID8gJyNDQ0NENjQnIDogJyMwMDAwZmYnLFxuICogICBiYWNrZ3JvdW5kOiBnZXRMdW1pbmFuY2UoJ3JnYmEoNTgsIDEzMywgMjU1LCAxKScpID49IGdldEx1bWluYW5jZSgncmdiYSgyNTUsIDU3LCAxNDksIDEpJykgP1xuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICdyZ2JhKDU4LCAxMzMsIDI1NSwgMSknIDpcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAncmdiYSgyNTUsIDU3LCAxNDksIDEpJyxcbiAqIH1cbiAqXG4gKiAvLyBzdHlsZWQtY29tcG9uZW50cyB1c2FnZVxuICogY29uc3QgZGl2ID0gc3R5bGVkLmRpdmBcbiAqICAgYmFja2dyb3VuZDogJHtnZXRMdW1pbmFuY2UoJyNDQ0NENjQnKSA+PSBnZXRMdW1pbmFuY2UoJyMwMDAwZmYnKSA/ICcjQ0NDRDY0JyA6ICcjMDAwMGZmJ307XG4gKiAgIGJhY2tncm91bmQ6ICR7Z2V0THVtaW5hbmNlKCdyZ2JhKDU4LCAxMzMsIDI1NSwgMSknKSA+PSBnZXRMdW1pbmFuY2UoJ3JnYmEoMjU1LCA1NywgMTQ5LCAxKScpID9cbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAncmdiYSg1OCwgMTMzLCAyNTUsIDEpJyA6XG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3JnYmEoMjU1LCA1NywgMTQ5LCAxKSd9O1xuICpcbiAqIC8vIENTUyBpbiBKUyBPdXRwdXRcbiAqXG4gKiBkaXYge1xuICogICBiYWNrZ3JvdW5kOiBcIiNDQ0NENjRcIjtcbiAqICAgYmFja2dyb3VuZDogXCJyZ2JhKDU4LCAxMzMsIDI1NSwgMSlcIjtcbiAqIH1cbiAqL1xuZnVuY3Rpb24gZ2V0THVtaW5hbmNlKGNvbG9yKSB7XG4gIGlmIChjb2xvciA9PT0gJ3RyYW5zcGFyZW50JykgcmV0dXJuIDA7XG4gIHZhciByZ2JDb2xvciA9ICgwLCBfcGFyc2VUb1JnYi5kZWZhdWx0KShjb2xvcik7XG5cbiAgdmFyIF9PYmplY3Qka2V5cyRtYXAgPSBPYmplY3Qua2V5cyhyZ2JDb2xvcikubWFwKGZ1bmN0aW9uIChrZXkpIHtcbiAgICB2YXIgY2hhbm5lbCA9IHJnYkNvbG9yW2tleV0gLyAyNTU7XG4gICAgcmV0dXJuIGNoYW5uZWwgPD0gMC4wMzkyOCA/IGNoYW5uZWwgLyAxMi45MiA6IE1hdGgucG93KChjaGFubmVsICsgMC4wNTUpIC8gMS4wNTUsIDIuNCk7XG4gIH0pLFxuICAgICAgciA9IF9PYmplY3Qka2V5cyRtYXBbMF0sXG4gICAgICBnID0gX09iamVjdCRrZXlzJG1hcFsxXSxcbiAgICAgIGIgPSBfT2JqZWN0JGtleXMkbWFwWzJdO1xuXG4gIHJldHVybiBwYXJzZUZsb2F0KCgwLjIxMjYgKiByICsgMC43MTUyICogZyArIDAuMDcyMiAqIGIpLnRvRml4ZWQoMykpO1xufVxuXG52YXIgX2RlZmF1bHQgPSBnZXRMdW1pbmFuY2U7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0OyIsImltcG9ydCBnZXRMdW1pbmFuY2UgZnJvbSAncG9saXNoZWQvbGliL2NvbG9yL2dldEx1bWluYW5jZSc7XG5pbXBvcnQgeyBUaGVtZVR5cGUgfSBmcm9tICcuLi90eXBlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZpbmRDb2xvckludmVydCh7IGJsYWNrLCB3aGl0ZSB9OiBUaGVtZVR5cGUsIGNvbG9yOiBzdHJpbmcpIHtcbiAgaWYgKCFjb2xvciB8fCBnZXRMdW1pbmFuY2UoY29sb3IpID4gMC41NSkge1xuICAgIHJldHVybiBibGFjaztcbiAgfVxuICByZXR1cm4gd2hpdGU7XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIF9jdXJyeSA9XG4vKiNfX1BVUkVfXyovXG5faW50ZXJvcFJlcXVpcmVEZWZhdWx0KFxuLyojX19QVVJFX18qL1xucmVxdWlyZShcIi4uL2ludGVybmFsSGVscGVycy9fY3VycnlcIikpO1xuXG52YXIgX2d1YXJkID1cbi8qI19fUFVSRV9fKi9cbl9pbnRlcm9wUmVxdWlyZURlZmF1bHQoXG4vKiNfX1BVUkVfXyovXG5yZXF1aXJlKFwiLi4vaW50ZXJuYWxIZWxwZXJzL19ndWFyZFwiKSk7XG5cbnZhciBfcmdiYSA9XG4vKiNfX1BVUkVfXyovXG5faW50ZXJvcFJlcXVpcmVEZWZhdWx0KFxuLyojX19QVVJFX18qL1xucmVxdWlyZShcIi4vcmdiYVwiKSk7XG5cbnZhciBfcGFyc2VUb1JnYiA9XG4vKiNfX1BVUkVfXyovXG5faW50ZXJvcFJlcXVpcmVEZWZhdWx0KFxuLyojX19QVVJFX18qL1xucmVxdWlyZShcIi4vcGFyc2VUb1JnYlwiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9leHRlbmRzKCkgeyBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07IHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9XG5cbi8qKlxuICogRGVjcmVhc2VzIHRoZSBvcGFjaXR5IG9mIGEgY29sb3IuIEl0cyByYW5nZSBmb3IgdGhlIGFtb3VudCBpcyBiZXR3ZWVuIDAgdG8gMS5cbiAqXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFN0eWxlcyBhcyBvYmplY3QgdXNhZ2VcbiAqIGNvbnN0IHN0eWxlcyA9IHtcbiAqICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnRpemUoMC4xLCAnI2ZmZicpO1xuICogICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudGl6ZSgwLjIsICdoc2woMCwgMCUsIDEwMCUpJyksXG4gKiAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50aXplKCcwLjUnLCAncmdiYSgyNTUsIDAsIDAsIDAuOCknKSxcbiAqIH1cbiAqXG4gKiAvLyBzdHlsZWQtY29tcG9uZW50cyB1c2FnZVxuICogY29uc3QgZGl2ID0gc3R5bGVkLmRpdmBcbiAqICAgYmFja2dyb3VuZDogJHt0cmFuc3BhcmVudGl6ZSgwLjEsICcjZmZmJyl9O1xuICogICBiYWNrZ3JvdW5kOiAke3RyYW5zcGFyZW50aXplKDAuMiwgJ2hzbCgwLCAwJSwgMTAwJSknKX0sXG4gKiAgIGJhY2tncm91bmQ6ICR7dHJhbnNwYXJlbnRpemUoJzAuNScsICdyZ2JhKDI1NSwgMCwgMCwgMC44KScpfSxcbiAqIGBcbiAqXG4gKiAvLyBDU1MgaW4gSlMgT3V0cHV0XG4gKlxuICogZWxlbWVudCB7XG4gKiAgIGJhY2tncm91bmQ6IFwicmdiYSgyNTUsMjU1LDI1NSwwLjkpXCI7XG4gKiAgIGJhY2tncm91bmQ6IFwicmdiYSgyNTUsMjU1LDI1NSwwLjgpXCI7XG4gKiAgIGJhY2tncm91bmQ6IFwicmdiYSgyNTUsMCwwLDAuMylcIjtcbiAqIH1cbiAqL1xuZnVuY3Rpb24gdHJhbnNwYXJlbnRpemUoYW1vdW50LCBjb2xvcikge1xuICBpZiAoY29sb3IgPT09ICd0cmFuc3BhcmVudCcpIHJldHVybiBjb2xvcjtcbiAgdmFyIHBhcnNlZENvbG9yID0gKDAsIF9wYXJzZVRvUmdiLmRlZmF1bHQpKGNvbG9yKTtcbiAgdmFyIGFscGhhID0gdHlwZW9mIHBhcnNlZENvbG9yLmFscGhhID09PSAnbnVtYmVyJyA/IHBhcnNlZENvbG9yLmFscGhhIDogMTtcblxuICB2YXIgY29sb3JXaXRoQWxwaGEgPSBfZXh0ZW5kcyh7fSwgcGFyc2VkQ29sb3IsIHtcbiAgICBhbHBoYTogKDAsIF9ndWFyZC5kZWZhdWx0KSgwLCAxLCAoYWxwaGEgKiAxMDAgLSBwYXJzZUZsb2F0KGFtb3VudCkgKiAxMDApIC8gMTAwKVxuICB9KTtcblxuICByZXR1cm4gKDAsIF9yZ2JhLmRlZmF1bHQpKGNvbG9yV2l0aEFscGhhKTtcbn0gLy8gcHJldHRpZXItaWdub3JlXG5cblxudmFyIGN1cnJpZWRUcmFuc3BhcmVudGl6ZSA9XG4vKiNfX1BVUkVfXyovXG4oMCwgX2N1cnJ5LmRlZmF1bHRcbi8qIDo6PG51bWJlciB8IHN0cmluZywgc3RyaW5nLCBzdHJpbmc+ICovXG4pKHRyYW5zcGFyZW50aXplKTtcbnZhciBfZGVmYXVsdCA9IGN1cnJpZWRUcmFuc3BhcmVudGl6ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7IiwiaW1wb3J0IHsgY3NzIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHRyYW5zcGFyZW50aXplIGZyb20gJ3BvbGlzaGVkL2xpYi9jb2xvci90cmFuc3BhcmVudGl6ZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJveFNoYWRvdyhzaXplOiBzdHJpbmcsIGNvbG9yOiBzdHJpbmcsIGFtb3VudD86IG51bWJlcikge1xuICBjb25zdCBzaGFkb3dDb2xvciA9IGFtb3VudCA/IHRyYW5zcGFyZW50aXplKGFtb3VudCwgY29sb3IpIDogY29sb3I7XG4gIHJldHVybiBjc3NgYm94LXNoYWRvdzogMCAwIDAgJHtzaXplfSAke3NoYWRvd0NvbG9yfTtgO1xufVxuIiwiaW1wb3J0IHsgU2l6ZVR5cGUgfSBmcm9tICcuLi90eXBlcyc7XG5cbnR5cGUgU2l6ZVByb3BzTmFtZVR5cGUgPSAnZm9udC1zaXplJyB8ICdoZWlnaHQnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzZXRTaXplKG5hbWU6IFNpemVQcm9wc05hbWVUeXBlLCBzaXplPzogU2l6ZVR5cGUpIHtcbiAgc3dpdGNoIChzaXplKSB7XG4gICAgY2FzZSAnc21hbGwnOlxuICAgICAgcmV0dXJuIGAke25hbWV9OiAwLjc1cmVtO2A7XG4gICAgY2FzZSAnbWVkaXVtJzpcbiAgICAgIHJldHVybiBgJHtuYW1lfTogMS4yNXJlbTtgO1xuICAgIGNhc2UgJ2xhcmdlJzpcbiAgICAgIHJldHVybiBgJHtuYW1lfTogMS41cmVtO2A7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBgJHtuYW1lfTogMXJlbTtgO1xuICB9XG59XG4iLCJpbXBvcnQgeyBjc3MgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgdHJhbnNwYXJlbnRpemUgZnJvbSAncG9saXNoZWQvbGliL2NvbG9yL3RyYW5zcGFyZW50aXplJztcbmltcG9ydCB7IFRoZW1lVHlwZSwgQ1NTVHlwZSB9IGZyb20gJy4uL3R5cGVzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGlzYWJsZWRDb2xvcih0aGVtZTogVGhlbWVUeXBlKTogQ1NTVHlwZSB7XG4gIGNvbnN0IHRleHRDb2xvciA9IHRyYW5zcGFyZW50aXplKDAuMTUsIHRoZW1lLnRleHREYXJrKTtcbiAgY29uc3QgYmFja0NvbG9yID0gdHJhbnNwYXJlbnRpemUoMC41NSwgdGhlbWUuYm9yZGVyKTtcbiAgcmV0dXJuIGNzc2BcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICAgIGNvbG9yOiAke3RleHRDb2xvcn07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHtiYWNrQ29sb3J9O1xuICBgO1xufVxuIiwiaW1wb3J0IHN0eWxlZCwgeyBjc3MgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgeyBIVE1MQXR0cmlidXRlcyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBkYXJrZW4gZnJvbSAncG9saXNoZWQvbGliL2NvbG9yL2Rhcmtlbic7XG5pbXBvcnQgZmluZENvbG9ySW52ZXJ0IGZyb20gJy4uLy4uL3V0aWxzL2ZpbmRDb2xvckludmVydCc7XG5pbXBvcnQgYm94U2hhZG93IGZyb20gJy4uLy4uL3V0aWxzL2JveFNoYWRvdyc7XG5pbXBvcnQgc2V0U2l6ZSBmcm9tICcuLi8uLi91dGlscy9zZXRTaXplJztcbmltcG9ydCBkaXNhYmxlZENvbG9yIGZyb20gJy4uLy4uL3V0aWxzL2Rpc2FibGVkQ29sb3InO1xuaW1wb3J0IHsgQ29sb3JUeXBlLCBUaGVtZVR5cGUsIFNpemVUeXBlIH0gZnJvbSAnLi4vLi4vdHlwZXMnO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICB0aGVtZTogVGhlbWVUeXBlO1xuICBjb2xvcj86IENvbG9yVHlwZTtcbiAgb3V0bGluZT86IGJvb2xlYW47XG4gIGRpc2FibGVkPzogYm9vbGVhbjtcbn1cblxuZnVuY3Rpb24gc2V0Q29sb3IoeyB0aGVtZSwgY29sb3IsIG91dGxpbmUsIGRpc2FibGVkIH06IFByb3BzKSB7XG4gIGlmIChkaXNhYmxlZCkge1xuICAgIHJldHVybiBkaXNhYmxlZENvbG9yKHRoZW1lKTtcbiAgfVxuICBpZiAoIWNvbG9yKSB7XG4gICAgcmV0dXJuIGNzc2BcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7dGhlbWUud2hpdGV9O1xuICAgICAgYm9yZGVyLWNvbG9yOiAke3RoZW1lLmJvcmRlcn07XG4gICAgICBjb2xvcjogJHt0aGVtZS50ZXh0fTtcblxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGJvcmRlci1jb2xvcjogJHt0aGVtZS5ib3JkZXJIb3Zlcn07XG4gICAgICB9XG5cbiAgICAgICY6YWN0aXZlIHtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAke3RoZW1lLmJvcmRlckFjdGl2ZX07XG4gICAgICB9XG4gICAgYDtcbiAgfVxuICBpZiAoY29sb3IgPT09ICd0ZXh0Jykge1xuICAgIHJldHVybiBjc3NgXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICBjb2xvcjogJHt0aGVtZS50ZXh0fTtcblxuICAgICAgJjpob3ZlcntcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICB9XG4gICAgYDtcbiAgfVxuXG4gIGNvbnN0IHRhcmdldCA9IHRoZW1lW2NvbG9yXSB8fCBjb2xvcjtcbiAgY29uc3QgaW52ZXJ0Q29sb3IgPSBmaW5kQ29sb3JJbnZlcnQodGhlbWUsIHRhcmdldCk7XG4gIGlmIChvdXRsaW5lKSB7XG4gICAgcmV0dXJuIGNzc2BcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgYm9yZGVyLWNvbG9yOiAke3RhcmdldH07XG4gICAgICBjb2xvcjogJHt0YXJnZXR9O1xuXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHt0YXJnZXR9O1xuICAgICAgICBjb2xvcjogJHtpbnZlcnRDb2xvcn07XG4gICAgICB9XG5cbiAgICAgICY6Zm9jdXMge1xuICAgICAgICAke2JveFNoYWRvdygnMC4ycmVtJywgdGFyZ2V0LCAwLjIpfVxuICAgICAgfVxuICAgIGA7XG4gIH1cblxuICByZXR1cm4gY3NzYFxuICAgIGJhY2tncm91bmQtY29sb3I6ICR7dGFyZ2V0fTtcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGNvbG9yOiAke2ludmVydENvbG9yfTtcbiAgICBib3gtc2hhZG93OiBub25lO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICBjb2xvcjogJHtpbnZlcnRDb2xvcn07XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke2RhcmtlbigwLjAyNSwgdGFyZ2V0KX07XG4gICAgfVxuXG4gICAgJjphY3RpdmUge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtkYXJrZW4oMC4wNSwgdGFyZ2V0KX07XG4gICAgfVxuXG4gICAgJjpmb2N1cyB7XG4gICAgICAke2JveFNoYWRvdygnMC4ycmVtJywgdGFyZ2V0LCAwLjIpfVxuICAgIH1cbiAgYDtcbn1cblxuaW50ZXJmYWNlIEJ1dHRvblByb3BzIGV4dGVuZHMgSFRNTEF0dHJpYnV0ZXM8SFRNTEJ1dHRvbkVsZW1lbnQ+IHtcbiAgLyoqIOODnOOCv+ODs+OBruiJsiAqL1xuICBjb2xvcj86IENvbG9yVHlwZTtcbiAgLyoqIOODnOOCv+ODs+OBruOCteOCpOOCuiAqL1xuICBzaXplPzogU2l6ZVR5cGU7XG4gIC8qKiDog4zmma/jgYzpgI/mmI7jgarjg5zjgr/jg7PjgafjgZnjgosgKi9cbiAgb3V0bGluZT86IGJvb2xlYW47XG4gIC8qKiDlhajkvZPluYXjga7jg5zjgr/jg7PjgafoqK3lrpogKi9cbiAgZnVsbD86IGJvb2xlYW47XG59XG5cbmNvbnN0IEJ1dHRvbiA9IHN0eWxlZC5idXR0b248QnV0dG9uUHJvcHM+YFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGFwcGVhcmFuY2U6IG5vbmU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgcGFkZGluZzogMC4zNzVlbSAwLjc1ZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG5cbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYmFja2dyb3VuZC1jb2xvciwgY29sb3IsIGJveC1zaGFkb3c7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDE1MG1zO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XG5cbiAgJHtzZXRDb2xvcn1cbiAgJHsoeyBzaXplIH0pID0+IHNldFNpemUoJ2ZvbnQtc2l6ZScsIHNpemUpfVxuICAkeyh7IGZ1bGwgfSkgPT4gZnVsbCA/ICd3aWR0aDogMTAwJTsnIDogJyd9XG5gO1xuQnV0dG9uLmRpc3BsYXlOYW1lID0gJ0J1dHRvbic7XG5cbmV4cG9ydCBkZWZhdWx0IEJ1dHRvbjtcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuJztcblxuY29uc3QgQnV0dG9uR3JvdXAgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cbiAgJjpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcbiAgfVxuXG4gICR7QnV0dG9ufSB7XG4gICAgbWFyZ2luOiAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG5cbiAgICAmOmZpcnN0LWNoaWxkIHtcbiAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDRweDtcbiAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDRweDtcbiAgICB9XG5cbiAgICAmOm5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgICAgIG1hcmdpbi1sZWZ0OiAtMXB4O1xuICAgIH1cblxuICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNHB4O1xuICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDRweDtcbiAgICB9XG4gIH1cbmA7XG5CdXR0b25Hcm91cC5kaXNwbGF5TmFtZSA9ICdCdXR0b25Hcm91cCc7XG5cbmV4cG9ydCBkZWZhdWx0IEJ1dHRvbkdyb3VwO1xuIiwiaW1wb3J0IHN0eWxlZCwgeyBjc3MgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgeyBTaXplVHlwZSB9IGZyb20gJy4uLy4uL3R5cGVzJztcblxuY29uc3Qgc3RyaXBlZFN0eWxlID0gY3NzYFxuICB0Ym9keSA+IHRyOm50aC1jaGlsZChvZGQpIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMDIpO1xuICB9XG5gO1xuXG5jb25zdCBob3ZlclN0eWxlID0gY3NzYFxuICB0Ym9keSA+IHRyOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMDQpO1xuICB9XG5gO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBzaXplPzogU2l6ZVR5cGU7XG4gIGZ1bGw/OiBib29sZWFuO1xuICBoZWFkZXJTdHlsZT86IGFueTtcbiAgYm9yZGVyZWQ/OiBib29sZWFuO1xuICBib3JkZXJsZXNzPzogYm9vbGVhbjtcbiAgc3RyaXBlZD86IGJvb2xlYW47XG4gIGhvdmVyPzogYm9vbGVhbjtcbn1cblxuY29uc3QgVGFibGUgPSBzdHlsZWQudGFibGU8UHJvcHM+YFxuICBkaXNwbGF5OiBibG9jaztcbiAgJHsoeyBmdWxsIH0pID0+IGZ1bGwgPyBjc3Ngd2lkdGg6IDEwMCU7YCA6ICcnfVxuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuXG4gIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcbiAgLW1zLW92ZXJmbG93LXN0eWxlOiAtbXMtYXV0b2hpZGluZy1zY3JvbGxiYXI7XG5cbiAgdGQsIHRoIHtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgIHBhZGRpbmc6IDAuNzVyZW07XG4gICAgJHsoeyB0aGVtZSwgYm9yZGVyZWQgfSkgPT4gYm9yZGVyZWQgPyBjc3NgXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAke3RoZW1lLmJvcmRlcn07XG4gICAgYCA6ICcnfVxuICAgIGJvcmRlci13aWR0aDogMCAwIDFweDtcbiAgfVxuXG4gIHRoIHsgd2hpdGUtc3BhY2U6IG5vd3JhcDsgfVxuXG4gICR7KHsgc3RyaXBlZCB9KSA9PiBzdHJpcGVkID8gc3RyaXBlZFN0eWxlIDogJyd9XG4gICR7KHsgaG92ZXIgfSkgPT4gaG92ZXIgPyBob3ZlclN0eWxlIDogJyd9XG5cbiAgJHsoeyBoZWFkZXJTdHlsZSB9KSA9PiBoZWFkZXJTdHlsZSA/IGNzc2BcbiAgICB0aCB7XG4gICAgICAke2hlYWRlclN0eWxlfVxuICAgIH1cbiAgYCA6ICcnfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgVGFibGU7XG4iLCJpbXBvcnQgeyBIVE1MQXR0cmlidXRlcyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQsIHsgY3NzIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IGZpbmRDb2xvckludmVydCBmcm9tICcuLi8uLi91dGlscy9maW5kQ29sb3JJbnZlcnQnO1xuaW1wb3J0IHsgQ29sb3JUeXBlIH0gZnJvbSAnLi4vLi4vdHlwZXMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFByb3BzIGV4dGVuZHMgSFRNTEF0dHJpYnV0ZXM8SFRNTERpdkVsZW1lbnQ+IHtcbiAgLyoqIOiJsuaMh+WumiAqL1xuICBjb2xvcj86IENvbG9yVHlwZTtcbiAgLyoqIGJvcmRlcuOCkumdnuihqOekuuOBmeOCiyAqL1xuICBib3JkZXJsZXNzPzogYm9vbGVhbjtcbiAgc3R5bGU/OiBhbnk7XG59XG5cbmZ1bmN0aW9uIHNldENvbG9yKHsgY29sb3IsIHRoZW1lIH06IGFueSkge1xuICBpZiAoIWNvbG9yKSByZXR1cm4ge307XG5cbiAgY29uc3QgdGFyZ2V0ID0gdGhlbWVbY29sb3JdIHx8IGNvbG9yO1xuICBjb25zdCBpbnZlcnRDb2xvciA9IGZpbmRDb2xvckludmVydCh0aGVtZSwgdGFyZ2V0KTtcbiAgcmV0dXJuIGNzc2BiYWNrZ3JvdW5kLWNvbG9yOiAke3RhcmdldH07IGNvbG9yOiAke2ludmVydENvbG9yfTtgO1xufVxuXG5jb25zdCBCb3ggPSBzdHlsZWQuZGl2PFByb3BzPmBcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAkeyh7IGJvcmRlcmxlc3MsIHRoZW1lIH0pID0+IGJvcmRlcmxlc3MgPyBgYCA6IGBib3JkZXI6IDFweCBzb2xpZCAke3RoZW1lLmJvcmRlcn07YH1cbiAgYm94LXNoYWRvdzogMCAxcHggMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjA1KTtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICB3aWR0aDogMTAwJTtcblxuICBtaW4td2lkdGg6IDA7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcblxuICAke3NldENvbG9yfVxuYDtcbkJveC5kaXNwbGF5TmFtZSA9ICdCb3gnO1xuXG5leHBvcnQgZGVmYXVsdCBCb3g7XG4iLCJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCwgSFRNTEF0dHJpYnV0ZXMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBzZXRTaXplIGZyb20gJy4uLy4uL3V0aWxzL3NldFNpemUnO1xuaW1wb3J0IHsgQ29sb3JUeXBlLCBTaXplVHlwZSwgQ1NTVHlwZSB9IGZyb20gJy4uLy4uL3R5cGVzJztcblxuaW50ZXJmYWNlIFByb2dyZXNzUHJvcHMgZXh0ZW5kcyBIVE1MQXR0cmlidXRlczxIVE1MRGl2RWxlbWVudD57XG4gIC8qKiDnj77nirbjga7pgLLmjZcgKi9cbiAgdmFsdWU6IG51bWJlcjtcbiAgLyoqIOmAsuaNl+OBruacgOWkp+WApCAqL1xuICBtYXg6IG51bWJlcjtcbiAgLyoqIOODkOODvOOBruOCteOCpOOCuiAqL1xuICBzaXplPzogU2l6ZVR5cGU7XG4gIC8qKiBzaXpl44KS5L2/44KP44Gq44GE44Go44GN44Gu57im5bmF44KS5oyH5a6a44GZ44KLICovXG4gIGhlaWdodD86IHN0cmluZztcbiAgLyoqIOODkOODvOOBruiJsiAqL1xuICBjb2xvcj86IENvbG9yVHlwZTtcbiAgLyoqIOOCq+OCueOCv+ODoENTU+Wumue+qSAqL1xuICBjc3M/OiBDU1NUeXBlO1xufVxuXG5jb25zdCBXcmFwcGVyID0gc3R5bGVkLmRpdjxQcm9ncmVzc1Byb3BzPmBcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5iYWNrZ3JvdW5kfTtcblxuICAkeyh7IHNpemUgfSkgPT4gc2V0U2l6ZSgnaGVpZ2h0Jywgc2l6ZSl9XG4gICR7KHsgc2l6ZSwgaGVpZ2h0IH0pID0+ICFzaXplICYmIGhlaWdodCA/IGBoZWlnaHQ6ICR7aGVpZ2h0fTtgIDogJyd9XG5cbiAgJiA+IGRpdltyb2xlPVwicHJvZ3Jlc3NiYXJcIl0ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICR7KHsgdmFsdWUsIG1heCB9KSA9PiAodmFsdWUgPT09IG1heCkgPyAnJyA6ICdib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDsgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7J31cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyh7IGNvbG9yLCB0aGVtZSB9KSA9PiAodGhlbWVbY29sb3IhXSB8fCBjb2xvcil9O1xuXG4gICAgd2lsbC1jaGFuZ2U6IHdpZHRoO1xuXG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogd2lkdGg7XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMzUwbXM7XG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKTtcbiAgICB6LWluZGV4OiAxO1xuICB9XG4gICR7KHsgY3NzIH0pID0+IChjc3MgfHwgJycpfVxuYDtcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9ncmVzcyBleHRlbmRzIFB1cmVDb21wb25lbnQ8UHJvZ3Jlc3NQcm9wcz4ge1xuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGNvbG9yOiAncHJpbWFyeScsXG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIGNvbnN0IHsgdmFsdWUsIG1heCB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBwZXJjZW50ID0gTWF0aC5yb3VuZCgodmFsdWUvbWF4KSAqIDEwMCk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxXcmFwcGVyIHsuLi50aGlzLnByb3BzfT5cbiAgICAgICAgPGRpdiByb2xlPVwicHJvZ3Jlc3NiYXJcIiBzdHlsZT17eyB3aWR0aDogYCR7cGVyY2VudCA+IDEwMCA/IDEwMCA6IHBlcmNlbnR9JWAgfX0gPjwvZGl2PlxuICAgICAgPC9XcmFwcGVyPlxuICAgICk7XG4gIH1cbn07XG4iLCJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCwgUmVhY3ROb2RlLCBIVE1MQXR0cmlidXRlcyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQsIHsgY3NzIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgQ1NTVHlwZSB9IGZyb20gJy4uLy4uL3R5cGVzJztcblxuY29uc3QgV3JhcHBlciA9IHN0eWxlZC5kaXY8eyByZXF1aXJlZD86IGJvb2xlYW4sIGNzcz86IENTU1R5cGUgfT5gXG4gIGRpc3BsYXk6IGJsb2NrO1xuICAmOm5vdCg6bGFzdC1jaGlsZCkge1xuICAgIG1hcmdpbi1ib3R0b206IDAuNzVyZW07XG4gIH1cbiAgJHsoeyByZXF1aXJlZCwgdGhlbWUgfSkgPT4gcmVxdWlyZWQgPyBjc3NgXG4gICAgbGFiZWw6OmFmdGVyIHtcbiAgICAgIGNvbnRlbnQ6ICcqJztcbiAgICAgIGNvbG9yOiAke3RoZW1lLnByaW1hcnl9O1xuICAgICAgbWFyZ2luLWxlZnQ6IDAuMzI1cmVtO1xuICAgIH1cbiAgYCA6IHt9fVxuXG4gICR7KHsgY3NzIH0pID0+IGNzcyB8fCB7fX1cbmA7XG5cbmNvbnN0IExhYmVsID0gc3R5bGVkLmxhYmVsYFxuICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS50ZXh0U3Ryb25nfTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMC4zMjVyZW07XG5gO1xuXG5pbnRlcmZhY2UgUHJvcHMgZXh0ZW5kcyBIVE1MQXR0cmlidXRlczxIVE1MRGl2RWxlbWVudD4ge1xuICBsYWJlbD86IHN0cmluZztcbiAgY2hpbGRyZW46IFJlYWN0Tm9kZTtcbiAgcmVxdWlyZWQ/OiBib29sZWFuO1xuICBjc3M/OiBDU1NUeXBlO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGaWVsZCBleHRlbmRzIFB1cmVDb21wb25lbnQ8UHJvcHM+IHtcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgbGFiZWwsIGNoaWxkcmVuLCAuLi5yZXN0IH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8V3JhcHBlciB7Li4ucmVzdH0+XG4gICAgICAgIHtsYWJlbCAmJiAoPExhYmVsPntsYWJlbH08L0xhYmVsPil9XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvV3JhcHBlcj5cbiAgICApO1xuICB9XG59XG4iLCJpbXBvcnQgeyBjc3MgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgeyBDU1NUeXBlIH0gZnJvbSAnLi4vdHlwZXMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW1idXJnZXIoc2l6ZTogc3RyaW5nKTogQ1NTVHlwZSB7XG4gIHJldHVybiBjc3NgXG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGhlaWdodDogJHtzaXplfTtcbiAgICB3aWR0aDogJHtzaXplfTtcblxuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBzcGFuIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGN1cnJlbnRDb2xvcjtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgaGVpZ2h0OiAxcHg7XG4gICAgICBsZWZ0OiBjYWxjKDUwJSAtIDhweCk7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XG4gICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAxMDBtcztcbiAgICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IGJhY2tncm91bmQtY29sb3IsIG9wYWNpdHksIHRyYW5zZm9ybTtcbiAgICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcbiAgICAgIHdpZHRoOiAxNnB4O1xuXG4gICAgICAmOm50aC1jaGlsZCgxKSB7XG4gICAgICAgIHRvcDogY2FsYyg1MCUgLSA2cHgpO1xuICAgICAgfVxuICAgICAgJjpudGgtY2hpbGQoMikge1xuICAgICAgICB0b3A6IGNhbGMoNTAlIC0gMXB4KTtcbiAgICAgIH1cbiAgICAgICY6bnRoLWNoaWxkKDMpIHtcbiAgICAgICAgdG9wOiBjYWxjKDUwJSArIDRweCk7XG4gICAgICB9XG5cbiAgICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKGJsYWNrLCAwLjA1KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmLmFjdGl2ZSBzcGFuIHtcbiAgICAgICY6bnRoLWNoaWxkKDEpIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDVweCkgcm90YXRlKDQ1ZGVnKTtcbiAgICAgIH1cbiAgICAgICY6bnRoLWNoaWxkKDIpIHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgIH1cbiAgICAgICY6bnRoLWNoaWxkKDMpIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01cHgpIHJvdGF0ZSgtNDVkZWcpO1xuICAgICAgfVxuICAgIH1cbiAgYDtcbn1cbiIsImltcG9ydCB7IGNzcyB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7IENTU1R5cGUgfSBmcm9tICcuLi90eXBlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFycm93KGNvbG9yOiBzdHJpbmcsIGRpcmVjdGlvbj86IHN0cmluZyk6IENTU1R5cGUge1xuICByZXR1cm4gY3NzYFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3JkZXI6IDNweCBzb2xpZCAke2NvbG9yfTtcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgYm9yZGVyLXJpZ2h0OiAwO1xuICAgIGJvcmRlci10b3A6IDA7XG4gICAgY29udGVudDogXCIgXCI7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgaGVpZ2h0OiAwLjYyNWVtO1xuICAgIG1hcmdpbi10b3A6IC0wLjYyNWVtO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIHRvcDogNTAlO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xuICAgIHdpZHRoOiAwLjYyNWVtO1xuICBgO1xufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5pbnRlcmZhY2UgTXNnUHJvcHMge1xuICBlcnJvcj86IGJvb2xlYW47XG59XG5cbmNvbnN0IE1lc3NhZ2UgPSBzdHlsZWQuc3BhbjxNc2dQcm9wcz5gXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xuICBjb2xvcjogJHsoeyBlcnJvciwgdGhlbWUgfSkgPT4gZXJyb3IgPyB0aGVtZS5kYW5nZXIgOiB0aGVtZS50ZXh0TGlnaHR9O1xuYDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGVscE1lc3NhZ2UoaGVscD86IHN0cmluZywgZXJyb3I/OiBzdHJpbmcpIHtcbiAgaWYgKGVycm9yKSB7XG4gICAgcmV0dXJuICg8TWVzc2FnZSBlcnJvcj57ZXJyb3J9PC9NZXNzYWdlPik7XG4gIH1cbiAgaWYgKGhlbHApIHtcbiAgICByZXR1cm4gKDxNZXNzYWdlPntoZWxwfTwvTWVzc2FnZT4pO1xuICB9XG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCwgSW5wdXRIVE1MQXR0cmlidXRlcyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQsIHsgY3NzIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgc2V0U2l6ZSB9IGZyb20gJy4uLy4uL3V0aWxzJztcbmltcG9ydCBkaXNhYmxlZENvbG9yIGZyb20gJy4uLy4uL3V0aWxzL2Rpc2FibGVkQ29sb3InO1xuaW1wb3J0IEhlbHBNZXNzYWdlIGZyb20gJy4vSGVscE1lc3NhZ2UnO1xuaW1wb3J0IHsgQ1NTVHlwZSB9IGZyb20gJy4uLy4uL3R5cGVzJztcblxuaW50ZXJmYWNlIFdyYXBwZXJQcm9wcyB7XG4gIG91dGxpbmU/OiBib29sZWFuO1xuICBlcnJvcj86IGFueTtcbiAgY3NzPzogQ1NTVHlwZTtcbn1cblxuaW50ZXJmYWNlIEljb25Qcm9wcyB7XG4gIHJpZ2h0PzogYm9vbGVhbjtcbn1cblxuY29uc3QgcmlnaHRJY29uID0gY3NzYFxuICByaWdodDogMC4zNzVlbTtcbiAgJiB+IGlucHV0IHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxLjU1NWVtICFpbXBvcnRhbnQ7XG4gIH1cbmA7XG5cbmNvbnN0IGxlZnRJY29uID0gY3NzYFxuICBsZWZ0OiAwLjM3NWVtO1xuICAmIH4gaW5wdXQge1xuICAgIHBhZGRpbmctbGVmdDogMS41NWVtICFpbXBvcnRhbnQ7XG4gIH1cbmA7XG5cbmNvbnN0IEljb24gPSBzdHlsZWQuc3BhbjxJY29uUHJvcHM+YFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMC4zNzVlbTtcbiAgYm90dG9tOiAwO1xuICB6LWluZGV4OiAxO1xuICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5ib3JkZXJ9O1xuICAkeyh7IHJpZ2h0IH0pID0+IHJpZ2h0ID8gcmlnaHRJY29uIDogbGVmdEljb259XG5cbiAgc3ZnLCBpbWcge1xuICAgIGhlaWdodDogMWVtO1xuICAgIHdpZHRoOiAxZW07XG4gIH1cbmA7XG5cbmNvbnN0IFdyYXBwZXIgPSBzdHlsZWQuc3BhbjxXcmFwcGVyUHJvcHM+YFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuXG4gIGlucHV0IHtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgYXBwZWFyYW5jZTogbm9uZTtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGNvbG9yOiBpbmhlcml0O1xuXG4gICAgcGFkZGluZzogMC4zNzVlbSAwLjYyNWVtO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICAkeyh7IG91dGxpbmUsIHRoZW1lLCBlcnJvciB9KSA9PiBvdXRsaW5lID9cbiAgICAgIGBib3JkZXI6IDFweCBzb2xpZCAke2Vycm9yID8gdGhlbWUuZGFuZ2VyIDogdGhlbWUuYm9yZGVyfTsgYm9yZGVyLXJhZGl1czogNHB4O2AgOlxuICAgICAgYGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAke2Vycm9yID8gdGhlbWUuZGFuZ2VyIDogdGhlbWUuYm9yZGVyfTsgYm9yZGVyLXJhZGl1czogMDtgXG4gICAgfVxuICAgICR7c2V0U2l6ZSgnZm9udC1zaXplJyl9XG5cbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBib3gtc2hhZG93O1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDE1MG1zO1xuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcblxuICAgICY6Zm9jdXMge1xuICAgICAgYm9yZGVyLWNvbG9yOiAkeyh7IGVycm9yLCB0aGVtZSB9KSA9PiAoZXJyb3IgPyB0aGVtZS5kYW5nZXIgOiB0aGVtZS5wcmltYXJ5KX07XG4gICAgICAkeyh7IHRoZW1lLCBvdXRsaW5lLCBlcnJvciB9KSA9PiBvdXRsaW5lID9cbiAgICAgICAgYGJveC1zaGFkb3c6IDAgMCAwIDAuMWVtICR7ZXJyb3IgPyB0aGVtZS5kYW5nZXIgOiB0aGVtZS5wcmltYXJ5fTtgIDpcbiAgICAgICAgYGJveC1zaGFkb3c6IDAgMC4xZW0gJHtlcnJvciA/IHRoZW1lLmRhbmdlciA6IHRoZW1lLnByaW1hcnl9O2BcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmOmRpc2FibGVkLCBbZGlzYWJsZWRdLCAmOnJlYWRvbmx5IHtcbiAgICAgICR7KHsgdGhlbWUgfSkgPT4gZGlzYWJsZWRDb2xvcih0aGVtZSl9XG4gICAgfVxuXG4gICAgJjpkaXNhYmxlZCwgW2Rpc2FibGVkXSB7XG4gICAgICByZXNpemU6IG5vbmU7XG4gICAgfVxuXG4gICAgJjo6cGxhY2Vob2xkZXIge1xuICAgICAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUucGxhY2Vob2xkZXJ9O1xuICAgIH1cbiAgfVxuXG4gICY6aG92ZXIge1xuICAgIGlucHV0Om5vdCg6ZGlzYWJsZWQpOm5vdCg6Zm9jdXMpOm5vdCg6YWN0aXZlKSB7XG4gICAgICBib3JkZXItY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuYm9yZGVySG92ZXJ9O1xuICAgIH1cbiAgICAke0ljb259IHtcbiAgICAgIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmJvcmRlckhvdmVyfTtcbiAgICB9XG4gIH1cbiAgJHsoeyBjc3MgfSkgPT4gY3NzIHx8ICcnfVxuYDtcblxuaW50ZXJmYWNlIFByb3BzIGV4dGVuZHMgSW5wdXRIVE1MQXR0cmlidXRlczxIVE1MSW5wdXRFbGVtZW50PiB7XG4gIHBsYWNlaG9sZGVyPzogc3RyaW5nO1xuICAvKiogJ3RleHQnIHwgJ251bWJlcicgfCAncGFzc3dvcmQnIHwgJ2VtYWlsJyB8ICd0ZWwnIHwgJ3NlYXJjaCcgKi9cbiAgdHlwZTogJ3RleHQnIHwgJ251bWJlcicgfCAncGFzc3dvcmQnIHwgJ2VtYWlsJyB8ICd0ZWwnIHwgJ3NlYXJjaCc7XG4gIC8qKiDjgqjjg6njg7zjga7nmbrnlJ/mmYLjga7ooajnpLrjg4bjgq3jgrnjg4ggKi9cbiAgZXJyb3I/OiBzdHJpbmcgfCBhbnk7XG4gIC8qKiDmjZXmjYnjg4bjgq3jgrnjg4ggKi9cbiAgaGVscD86IHN0cmluZyB8IGFueTtcbiAgLyoqIOODnOODg+OCr+OCueezu+OBruODh+OCtuOCpOODs+OBp+OBmeOCiyAqL1xuICBvdXRsaW5lPzogYm9vbGVhbjtcbiAgLyoqIOW3puWBtOOBruOCouOCpOOCs+ODsyAqL1xuICBsZWZ0SWNvbj86IGFueTtcbiAgLyoqIOWPs+WBtOOBruOCouOCpOOCs+ODsyAqL1xuICByaWdodEljb24/OiBhbnk7XG4gIC8qKiDjgqvjgrnjgr/jg6BDU1PlrprnvqkgKi9cbiAgY3NzPzogQ1NTVHlwZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGV4dElucHV0IGV4dGVuZHMgUHVyZUNvbXBvbmVudDxQcm9wcz4ge1xuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIHR5cGU6ICd0ZXh0JyxcbiAgICB2YWx1ZTogJycsXG4gICAgbWF4TGVuZ3RoOiAyNTUsXG4gICAgb25DaGFuZ2U6ICgpID0+IHt9LFxuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBjbGFzc05hbWUsIG91dGxpbmUsIGVycm9yLCBoZWxwLCBsZWZ0SWNvbiwgcmlnaHRJY29uLCBzdHlsZSwgY3NzLCAuLi5yZXN0XG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxXcmFwcGVyIGNsYXNzTmFtZT17Y2xhc3NOYW1lfSBvdXRsaW5lPXtvdXRsaW5lfSBlcnJvcj17ZXJyb3J9IHN0eWxlPXtzdHlsZX0gY3NzPXtjc3N9PlxuICAgICAgICB7bGVmdEljb24gJiYgKDxJY29uPntsZWZ0SWNvbn08L0ljb24+KX1cbiAgICAgICAge3JpZ2h0SWNvbiAmJiAoPEljb24gcmlnaHQ+e3JpZ2h0SWNvbn08L0ljb24+KX1cbiAgICAgICAgPGlucHV0IHsuLi5yZXN0fSAvPlxuICAgICAgICB7SGVscE1lc3NhZ2UoaGVscCwgZXJyb3IpfVxuICAgICAgPC9XcmFwcGVyPlxuICAgICk7XG4gIH1cbn1cbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIFRleHRhcmVhSFRNTEF0dHJpYnV0ZXMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBib3hTaGFkb3cgZnJvbSAnLi4vLi4vdXRpbHMvYm94U2hhZG93JztcbmltcG9ydCBzZXRTaXplIGZyb20gJy4uLy4uL3V0aWxzL3NldFNpemUnO1xuaW1wb3J0IGRpc2FibGVkQ29sb3IgZnJvbSAnLi4vLi4vdXRpbHMvZGlzYWJsZWRDb2xvcic7XG5pbXBvcnQgSGVscE1lc3NhZ2UgZnJvbSAnLi9IZWxwTWVzc2FnZSc7XG5pbXBvcnQgeyBDU1NUeXBlIH0gZnJvbSAnLi4vLi4vdHlwZXMnO1xuXG5pbnRlcmZhY2UgV3JhcHBlclByb3BzIHtcbiAgZXJyb3I/OiBzdHJpbmc7XG4gIGNzcz86IENTU1R5cGU7XG59XG5cbmNvbnN0IFdyYXBwZXIgPSBzdHlsZWQuc3BhbjxXcmFwcGVyUHJvcHM+YFxuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gIHRleHRhcmVhIHtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHBhZGRpbmc6IDAuNjI1ZW07XG4gICAgcmVzaXplOiB2ZXJ0aWNhbDtcbiAgICBhcHBlYXJhbmNlOiBub25lO1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBjb2xvcjogaW5oZXJpdDtcblxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAkeyh7IHRoZW1lLCBlcnJvciB9KSA9PiBlcnJvciA/IHRoZW1lLmRhbmdlciA6IHRoZW1lLmJvcmRlcn07XG5cbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBib3gtc2hhZG93O1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMTVzO1xuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcblxuICAgICR7c2V0U2l6ZSgnZm9udC1zaXplJyl9XG5cbiAgICAmOmZvY3VzIHtcbiAgICAgIGJvcmRlci1jb2xvcjogJHsoeyB0aGVtZSwgZXJyb3IgfSkgPT4gZXJyb3IgPyB0aGVtZS5kYW5nZXIgOiB0aGVtZS5wcmltYXJ5fTtcbiAgICAgICR7KHsgdGhlbWUsIGVycm9yIH0pID0+IGJveFNoYWRvdygnMC4xZW0nLCBlcnJvciA/IHRoZW1lLmRhbmdlciA6IHRoZW1lLnByaW1hcnkpfVxuICAgIH1cblxuICAgICY6ZGlzYWJsZWQsIFtkaXNhYmxlZF0sICY6cmVhZG9ubHkge1xuICAgICAgJHsoeyB0aGVtZSB9KSA9PiBkaXNhYmxlZENvbG9yKHRoZW1lKX1cbiAgICB9XG5cbiAgICAmOmRpc2FibGVkLCBbZGlzYWJsZWRdIHtcbiAgICAgIHJlc2l6ZTogbm9uZTtcbiAgICB9XG5cbiAgICAmOjpwbGFjZWhvbGRlciB7XG4gICAgICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5wbGFjZWhvbGRlcn07XG4gICAgfVxuICB9XG5cbiAgJjpob3ZlciB7XG4gICAgdGV4dGFyZWE6bm90KDpkaXNhYmxlZCk6bm90KDpmb2N1cykge1xuICAgICAgYm9yZGVyLWNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmJvcmRlckhvdmVyfTtcbiAgICB9XG4gIH1cbiAgJHsoeyBjc3MgfSkgPT4gY3NzIHx8IHt9fVxuYDtcblxuaW50ZXJmYWNlIFByb3BzIGV4dGVuZHMgVGV4dGFyZWFIVE1MQXR0cmlidXRlczxIVE1MVGV4dEFyZWFFbGVtZW50PiB7XG4gIC8qKiDjgqjjg6njg7zjga7nmbrnlJ/mmYLjga7ooajnpLrjg4bjgq3jgrnjg4ggKi9cbiAgZXJyb3I/OiBzdHJpbmcgfCBhbnk7XG4gIC8qKiDmjZXmjYnjg4bjgq3jgrnjg4ggKi9cbiAgaGVscD86IHN0cmluZyB8IGFueTtcbiAgLyoqIOOCq+OCueOCv+ODoENTU+Wumue+qSAqL1xuICBjc3M/OiBDU1NUeXBlO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXh0YXJlYSBleHRlbmRzIENvbXBvbmVudDxQcm9wcz4ge1xuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIHZhbHVlOiAnJyxcbiAgICBjb2w6IDIsXG4gICAgcm93OiA1LFxuICAgIG9uQ2hhbmdlOiAoKSA9PiB7fSxcbiAgfTtcblxuICBzaG91bGRDb21wb25lbnRVcGRhdGUocHJvcHM6IFByb3BzKSB7XG4gICAgcmV0dXJuIHByb3BzLnZhbHVlICE9PSB0aGlzLnByb3BzLnZhbHVlIHx8XG4gICAgICBwcm9wcy5oZWxwICE9PSB0aGlzLnByb3BzLmhlbHAgfHxcbiAgICAgIHByb3BzLmVycm9yICE9PSB0aGlzLnByb3BzLmVycm9yIHx8XG4gICAgICBwcm9wcy5kaXNhYmxlZCAhPT0gdGhpcy5wcm9wcy5kaXNhYmxlZCB8fFxuICAgICAgcHJvcHMucmVhZE9ubHkgIT09IHRoaXMucHJvcHMucmVhZE9ubHk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjbGFzc05hbWUsIGhlbHAsIGVycm9yLCBzdHlsZSwgY3NzLCAuLi5yZXN0IH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8V3JhcHBlciBjbGFzc05hbWU9e2NsYXNzTmFtZX0gZXJyb3I9e2Vycm9yfSBzdHlsZT17c3R5bGV9IGNzcz17Y3NzfT5cbiAgICAgICAgPHRleHRhcmVhIHsuLi5yZXN0fSAvPlxuICAgICAgICB7SGVscE1lc3NhZ2UoaGVscCwgZXJyb3IpfVxuICAgICAgPC9XcmFwcGVyPlxuICAgICk7XG4gIH1cbn1cbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIElucHV0SFRNTEF0dHJpYnV0ZXMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdHJhbnNwYXJlbnRpemUgZnJvbSAncG9saXNoZWQvbGliL2NvbG9yL3RyYW5zcGFyZW50aXplJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5jb25zdCBXcmFwcGVyID0gc3R5bGVkLnNwYW5gXG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiBhdXRvO1xuXG4gIGxhYmVsIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgcGFkZGluZy1sZWZ0OiAwLjYyNWVtO1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBsaW5lLWhlaWdodDogMS4yNTtcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNjI1cmVtO1xuXG4gICAgJjpiZWZvcmUsICY6YWZ0ZXIge1xuICAgICAgY29udGVudDogXCJcIjtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB9XG5cbiAgICAmOmFmdGVyIHtcbiAgICAgIHRvcDogMC4yNWVtO1xuICAgICAgbGVmdDogMC4yZW07XG4gICAgICB3aWR0aDogMC44NWVtO1xuICAgICAgaGVpZ2h0OiAwLjVlbTtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG4gICAgICBib3JkZXI6IDAuMWVtIHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgYm9yZGVyLXRvcC1zdHlsZTogbm9uZTtcbiAgICAgIGJvcmRlci1yaWdodC1zdHlsZTogbm9uZTtcbiAgICB9XG5cbiAgICAmOmJlZm9yZSB7XG4gICAgICB3aWR0aDogMS4yNWVtO1xuICAgICAgaGVpZ2h0OiAxLjI1ZW07XG4gICAgICBsZWZ0OjA7XG4gICAgICB0b3A6IDA7XG4gICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuYm9yZGVyfTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgICAgd2lsbC1jaGFuZ2U6IGJhY2tncm91bmQ7XG4gICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDE1MG1zIGVhc2Utb3V0O1xuICAgIH1cbiAgfVxuXG4gIGlucHV0IHtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG5cbiAgICAmOmNoZWNrZWQgKyBsYWJlbCB7XG4gICAgICAmOmJlZm9yZXtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnByaW1hcnl9O1xuICAgICAgICBiYWNrZ3JvdW5kOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnByaW1hcnl9O1xuICAgICAgfVxuICAgICAgJjphZnRlciB7XG4gICAgICAgIGJvcmRlci1jb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS53aGl0ZX07XG4gICAgICB9XG4gICAgfVxuXG4gICAgJjppbmRldGVybWluYXRlICsgbGFiZWwge1xuICAgICAgJjpiZWZvcmUge1xuICAgICAgICBib3JkZXItY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUucHJpbWFyeX07XG4gICAgICAgIGJhY2tncm91bmQ6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUucHJpbWFyeX07XG4gICAgICB9XG4gICAgICAmOmFmdGVyIHtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLndoaXRlfTtcbiAgICAgICAgYm9yZGVyLWxlZnQtc3R5bGU6IG5vbmU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgJjpkaXNhYmxlZCB7XG4gICAgICArIGxhYmVsIHtcbiAgICAgICAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdHJhbnNwYXJlbnRpemUoMC4yNSwgdGhlbWUudGV4dERhcmspfTtcbiAgICAgICAgJjpiZWZvcmUge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICR7KHsgdGhlbWUgfSkgPT4gdHJhbnNwYXJlbnRpemUoMC41NSwgdGhlbWUuYm9yZGVyKX07XG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmJvcmRlcn07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgICY6Y2hlY2tlZCArIGxhYmVsOmFmdGVyIHtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRyYW5zcGFyZW50aXplKDAuMTUsIHRoZW1lLnRleHREYXJrKX07XG4gICAgICB9XG4gICAgfVxuICB9XG5gO1xuXG5pbnRlcmZhY2UgUHJvcHMgZXh0ZW5kcyBJbnB1dEhUTUxBdHRyaWJ1dGVzPEhUTUxJbnB1dEVsZW1lbnQ+IHtcbiAgY2hpbGRyZW4/OiBhbnk7XG4gIGNoZWNrZWQ/OiBib29sZWFuO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaGVja2JveCBleHRlbmRzIENvbXBvbmVudDxQcm9wcz4ge1xuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIG5hbWU6IG51bGwsXG4gICAgY2hpbGRyZW46IG51bGwsXG4gICAgY2hlY2tlZDogZmFsc2UsXG4gICAgb25DaGFuZ2U6ICgpID0+IHt9LFxuICB9O1xuXG4gIGlkID0gYGNoZWNrYm94XyR7dGhpcy5wcm9wcy5uYW1lfWA7XG5cbiAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKHByb3BzOiBQcm9wcykge1xuICAgIHJldHVybiBwcm9wcy5jaGVja2VkICE9PSB0aGlzLnByb3BzLmNoZWNrZWQgfHxcbiAgICAgIHByb3BzLmNoaWxkcmVuICE9PSB0aGlzLnByb3BzLmNoaWxkcmVuO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY2xhc3NOYW1lLCBjaGlsZHJlbiwgLi4ucmVzdCB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPFdyYXBwZXIgY2xhc3NOYW1lPXtjbGFzc05hbWV9ID5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGlkPXt0aGlzLmlkfSB7Li4ucmVzdH0gLz5cbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9e3RoaXMuaWR9PntjaGlsZHJlbn08L2xhYmVsPlxuICAgICAgPC9XcmFwcGVyPlxuICAgICk7XG4gIH1cbn1cbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIFNlbGVjdEhUTUxBdHRyaWJ1dGVzIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVkLCB7IGNzcyB9IGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IGFycm93IGZyb20gXCIuLi8uLi91dGlscy9hcnJvd1wiO1xuaW1wb3J0IHNldFNpemUgZnJvbSBcIi4uLy4uL3V0aWxzL3NldFNpemVcIjtcbmltcG9ydCBIZWxwTWVzc2FnZSBmcm9tIFwiLi9IZWxwTWVzc2FnZVwiO1xuaW1wb3J0IHsgU2l6ZVR5cGUsIENTU1R5cGUgfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcbmltcG9ydCBkaXNhYmxlZENvbG9yIGZyb20gXCIuLi8uLi91dGlscy9kaXNhYmxlZENvbG9yXCI7XG5cbmludGVyZmFjZSBXcmFwcGVyUHJvcHMge1xuICBzaXplPzogU2l6ZVR5cGU7XG4gIG91dGxpbmU/OiBib29sZWFuO1xuICBlcnJvcj86IHN0cmluZztcbiAgZGlzYWJsZWQ/OiBib29sZWFuO1xuICBjc3M/OiBDU1NUeXBlO1xufVxuXG5jb25zdCBJbnB1dFdyYXBwZXIgPSBzdHlsZWQuc3BhbjxXcmFwcGVyUHJvcHM+YFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuXG4gIHNlbGVjdCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGFwcGVhcmFuY2U6IG5vbmU7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIHBhZGRpbmc6IDAuMzc1ZW0gMC42MjVlbTtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGNvbG9yOiBpbmhlcml0O1xuXG4gICAgJHsoeyBzaXplIH0pID0+IHNldFNpemUoXCJmb250LXNpemVcIiwgc2l6ZSl9XG5cbiAgICBib3JkZXI6IG5vbmU7XG4gICAgJHsoeyBvdXRsaW5lLCB0aGVtZSwgZXJyb3IgfSkgPT5cbiAgICAgIG91dGxpbmUgPyBjc3NgXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICR7ZXJyb3IgPyB0aGVtZS5kYW5nZXIgOiB0aGVtZS5ib3JkZXJ9O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICBgIDogY3NzYFxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJHtlcnJvciA/IHRoZW1lLmRhbmdlciA6IHRoZW1lLmJvcmRlcn07XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgICBgfVxuXG4gICAgd2lsbC1jaGFuZ2U6IGJveC1zaGFkb3c7XG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYm94LXNoYWRvdztcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAxNTBtcztcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XG5cbiAgICAmOmZvY3VzIHtcbiAgICAgIGJvcmRlci1jb2xvcjogJHsoeyBlcnJvciwgdGhlbWUgfSkgPT4gZXJyb3IgPyB0aGVtZS5kYW5nZXIgOiB0aGVtZS5wcmltYXJ5fTtcbiAgICAgIGJveC1zaGFkb3c6ICR7XG4gICAgICAgICh7IHRoZW1lLCBvdXRsaW5lLCBlcnJvciB9KSA9PiBvdXRsaW5lID9cbiAgICAgICAgICAoZXJyb3IgPyB0aGVtZS5kYW5nZXIgOiB0aGVtZS5wcmltYXJ5KSA6XG4gICAgICAgICAgKGVycm9yID8gdGhlbWUuZGFuZ2VyIDogdGhlbWUucHJpbWFyeSlcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAmOjotbXMtZXhwYW5kIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICAgICY6LW1vei1mb2N1c3Jpbmcge1xuICAgICAgY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgdGV4dC1zaGFkb3c6IDAgMCAwICMwMDA7XG4gICAgfVxuXG4gICAgJjpkaXNhYmxlZCwgW2Rpc2FibGVkXSwgJjpyZWFkb25seSB7XG4gICAgICAkeyh7IHRoZW1lIH0pID0+IGRpc2FibGVkQ29sb3IodGhlbWUpfVxuICAgIH1cblxuICAgICY6aW52YWxpZCB7XG4gICAgICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5wbGFjZWhvbGRlcn07XG4gICAgfVxuICB9XG5cbiAgJjo6YWZ0ZXIge1xuICAgICR7KHsgdGhlbWUgfSkgPT4gYXJyb3codGhlbWUuYm9yZGVyKX1cbiAgICB0b3A6IDEuMjVlbTtcbiAgICByaWdodDogMC42MjVlbTtcbiAgICB6LWluZGV4OiA0O1xuICB9XG5cbiAgJHsoeyB0aGVtZSwgZGlzYWJsZWQgfSkgPT5cbiAgICBkaXNhYmxlZFxuICAgICAgPyB7fVxuICAgICAgOiBjc3NgXG4gICAgJjpob3ZlciB7XG4gICAgICBzZWxlY3Q6bm90KDpkaXNhYmxlZCk6bm90KDpmb2N1cykge1xuICAgICAgICBib3JkZXItY29sb3I6ICR7dGhlbWUuYm9yZGVySG92ZXJ9O1xuICAgICAgfVxuXG4gICAgICAmOjphZnRlciB7XG4gICAgICAgIGJvcmRlci1jb2xvcjogJHt0aGVtZS5ib3JkZXJIb3Zlcn07XG4gICAgICB9XG4gICAgfVxuICBgfVxuXG4gICR7KHsgY3NzIH0pID0+IGNzcyB8fCB7fX1cbmA7XG5cbnR5cGUgSXRlbVR5cGUgPVxuICB8IHsgaWQ6IHN0cmluZyB8IG51bWJlcjsgbmFtZTogc3RyaW5nOyBba2V5OiBzdHJpbmddOiBhbnkgfVxuICB8IHN0cmluZztcblxuaW50ZXJmYWNlIFByb3BzIGV4dGVuZHMgU2VsZWN0SFRNTEF0dHJpYnV0ZXM8SFRNTFNlbGVjdEVsZW1lbnQ+IHtcbiAgcGxhY2Vob2xkZXI/OiBzdHJpbmc7XG4gIG9wdGlvbnM6IEl0ZW1UeXBlW107XG4gIG91dGxpbmU/OiBib29sZWFuO1xuICBlcnJvcj86IHN0cmluZyB8IGFueTtcbiAgaGVscD86IHN0cmluZyB8IGFueTtcbiAgaW5wdXRTaXplPzogU2l6ZVR5cGU7XG4gIHJlbmRlcj86IChsYWJlbDogc3RyaW5nKSA9PiBhbnk7XG4gIGRpc2FibGVkPzogYm9vbGVhbjtcbiAgY3NzPzogQ1NTVHlwZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VsZWN0IGV4dGVuZHMgQ29tcG9uZW50PFByb3BzPiB7XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgbmFtZTogbnVsbCxcbiAgICB2YWx1ZTogJycsXG4gICAgb25DaGFuZ2U6ICgpID0+IHt9LFxuICAgIG9wdGlvbnM6IFtdLFxuICB9O1xuXG4gIHNob3VsZENvbXBvbmVudFVwZGF0ZShwcm9wczogUHJvcHMpIHtcbiAgICByZXR1cm4gKFxuICAgICAgcHJvcHMub3B0aW9ucy5sZW5ndGggIT09IHRoaXMucHJvcHMub3B0aW9ucy5sZW5ndGggfHxcbiAgICAgIHByb3BzLnZhbHVlICE9PSB0aGlzLnByb3BzLnZhbHVlIHx8XG4gICAgICBwcm9wcy5kaXNhYmxlZCAhPT0gdGhpcy5wcm9wcy5kaXNhYmxlZCB8fFxuICAgICAgcHJvcHMuaGVscCAhPT0gdGhpcy5wcm9wcy5oZWxwIHx8XG4gICAgICBwcm9wcy5lcnJvciAhPT0gdGhpcy5wcm9wcy5lcnJvclxuICAgICk7XG4gIH1cblxuICByZW5kZXJMYWJlbCA9IChsYWJlbDogc3RyaW5nKSA9PiB7XG4gICAgaWYgKHRoaXMucHJvcHMucmVuZGVyKSB7XG4gICAgICByZXR1cm4gdGhpcy5wcm9wcy5yZW5kZXIobGFiZWwpO1xuICAgIH1cbiAgICByZXR1cm4gbGFiZWw7XG4gIH1cblxuICByZW5kZXJJdGVtID0gKCkgPT4ge1xuICAgIHJldHVybiB0aGlzLnByb3BzLm9wdGlvbnMubWFwKChpdGVtLCBpZHgpID0+IHtcbiAgICAgIGlmICh0eXBlb2YgaXRlbSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8b3B0aW9uIGtleT17aXRlbX0gdmFsdWU9e2l0ZW19PlxuICAgICAgICAgICAge3RoaXMucmVuZGVyTGFiZWwoaXRlbSl9XG4gICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICBjb25zdCB7IGlkLCBuYW1lIH0gPSBpdGVtO1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPG9wdGlvbiBrZXk9e2Ake2lkfV8ke2lkeH1gfSB2YWx1ZT17aWR9PlxuICAgICAgICAgIHt0aGlzLnJlbmRlckxhYmVsKG5hbWUpfVxuICAgICAgICA8L29wdGlvbj5cbiAgICAgICk7XG4gICAgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgY3NzLFxuICAgICAgY2xhc3NOYW1lLFxuICAgICAgaW5wdXRTaXplLFxuICAgICAgb3V0bGluZSxcbiAgICAgIG9wdGlvbnMsXG4gICAgICBlcnJvcixcbiAgICAgIGhlbHAsXG4gICAgICBwbGFjZWhvbGRlcixcbiAgICAgIGRpc2FibGVkLFxuICAgICAgLi4ucmVzdFxuICAgIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxJbnB1dFdyYXBwZXJcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XG4gICAgICAgIHNpemU9e2lucHV0U2l6ZX1cbiAgICAgICAgb3V0bGluZT17b3V0bGluZX1cbiAgICAgICAgZXJyb3I9e2Vycm9yfVxuICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICAgIGNzcz17Y3NzfVxuICAgICAgPlxuICAgICAgICA8c2VsZWN0IHsuLi5yZXN0fSBkaXNhYmxlZD17ZGlzYWJsZWR9IHJlcXVpcmVkPXtCb29sZWFuKHBsYWNlaG9sZGVyKX0+XG4gICAgICAgICAge3BsYWNlaG9sZGVyICYmIChcbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj5cbiAgICAgICAgICAgICAge3BsYWNlaG9sZGVyfVxuICAgICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICAgKX1cbiAgICAgICAgICB7dGhpcy5yZW5kZXJJdGVtKCl9XG4gICAgICAgIDwvc2VsZWN0PlxuICAgICAgICB7SGVscE1lc3NhZ2UoaGVscCwgZXJyb3IpfVxuICAgICAgPC9JbnB1dFdyYXBwZXI+XG4gICAgKTtcbiAgfVxufVxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgSW5wdXRIVE1MQXR0cmlidXRlcyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB0cmFuc3BhcmVudGl6ZSBmcm9tICdwb2xpc2hlZC9saWIvY29sb3IvdHJhbnNwYXJlbnRpemUnO1xuaW1wb3J0IHN0eWxlZCwgeyBjc3MgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgeyBDb2xvclR5cGUgfSBmcm9tICcuLi8uLi90eXBlcyc7XG5cbmNvbnN0IFJhZGlvTGFiZWwgPSBjc3NgXG4gIGxhYmVsIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgcGFkZGluZy1sZWZ0OiAxLjYyNWVtO1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBsaW5lLWhlaWdodDogMS4yNTtcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNjI1cmVtO1xuXG4gICAgJjpiZWZvcmUsICY6YWZ0ZXIge1xuICAgICAgY29udGVudDogXCJcIjtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB9XG5cbiAgICAmOmFmdGVyIHtcbiAgICAgIHRvcDogMC4zNzVlbTtcbiAgICAgIGxlZnQ6IDAuMzc1ZW07XG4gICAgICB3aWR0aDogMC41ZW07XG4gICAgICBoZWlnaHQ6IDAuNWVtO1xuICAgICAgYmFja2dyb3VuZDogJHsoeyB0aGVtZSB9OiBhbnkpID0+IHRoZW1lLnByaW1hcnl9O1xuICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcblxuICAgICAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybTtcbiAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxNTBtcyBlYXNlLW91dDtcbiAgICB9XG5cbiAgICAmOmJlZm9yZSB7XG4gICAgICB3aWR0aDogMS4yNWVtO1xuICAgICAgaGVpZ2h0OiAxLjI1ZW07XG4gICAgICBsZWZ0OjA7XG4gICAgICB0b3A6IDA7XG4gICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgIGJvcmRlcjogMC4xZW0gc29saWQgJHsoeyB0aGVtZSB9OiBhbnkpID0+IHRoZW1lLmJvcmRlcn07XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG5cbiAgICAgIHdpbGwtY2hhbmdlOiBiYWNrZ3JvdW5kO1xuICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAxNTBtcyBlYXNlLW91dDtcbiAgICB9XG4gIH1cblxuICBpbnB1dCB7XG4gICAgZGlzcGxheTogbm9uZTtcblxuICAgICY6Y2hlY2tlZCB7XG4gICAgICArIGxhYmVsOmJlZm9yZSB7XG4gICAgICAgIGJvcmRlci1jb2xvcjogJHsoeyB0aGVtZSB9OiBhbnkpID0+IHRoZW1lLnByaW1hcnl9O1xuICAgICAgfVxuICAgICAgKyBsYWJlbDphZnRlcntcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmOmRpc2FibGVkIHtcbiAgICAgICsgbGFiZWwge1xuICAgICAgICBjb2xvcjogJHsoeyB0aGVtZSB9OiBhbnkpID0+IHRyYW5zcGFyZW50aXplKDAuMjUsIHRoZW1lLnRleHREYXJrKX07XG4gICAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAkeyh7IHRoZW1lIH06IGFueSkgPT4gdHJhbnNwYXJlbnRpemUoMC41NSwgdGhlbWUuYm9yZGVyKX07XG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiAkeyh7IHRoZW1lIH06IGFueSkgPT4gdGhlbWUuYm9yZGVyfTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgJjpjaGVja2VkICsgbGFiZWw6YWZ0ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiAkeyh7IHRoZW1lIH06IGFueSkgPT4gdHJhbnNwYXJlbnRpemUoMC4xNSwgdGhlbWUudGV4dERhcmspfTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbmA7XG5cbmNvbnN0IEJ1dHRvbkxhYmVsID0gY3NzYFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcblxuICBsYWJlbCB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHBhZGRpbmc6IDAuMzc1ZW0gMC43NWVtO1xuICAgIGhlaWdodDogMi4yNWVtO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICR7KHsgdGhlbWUgfTogYW55KSA9PiB0aGVtZS5ib3JkZXJ9O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcblxuICAgICY6aG92ZXIge1xuICAgICAgYm9yZGVyLWNvbG9yOiAkeyh7IHRoZW1lIH06IGFueSkgPT4gdGhlbWUuYm9yZGVySG92ZXJ9O1xuICAgIH1cbiAgfVxuXG4gIGlucHV0IHtcbiAgICBkaXNwbGF5OiBub25lO1xuXG4gICAgJjpjaGVja2VkICsgbGFiZWwge1xuICAgICAgei1pbmRleDogMTtcbiAgICAgIGJvcmRlci1jb2xvcjogJHsoeyB0aGVtZSB9OiBhbnkpID0+IHRoZW1lLnByaW1hcnl9O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHsoeyB0aGVtZSB9OiBhbnkpID0+IHRyYW5zcGFyZW50aXplKDAuNTUsIHRoZW1lLnByaW1hcnkpfTtcbiAgICB9XG5cbiAgICAmOmRpc2FibGVkIHtcbiAgICAgICsgbGFiZWwge1xuICAgICAgICBjdXJzb3I6IGRlZmF1bHQ7XG4gICAgICAgIGNvbG9yOiAkeyh7IHRoZW1lIH06IGFueSkgPT4gdHJhbnNwYXJlbnRpemUoMC4yNSwgdGhlbWUudGV4dERhcmspfTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHsoeyB0aGVtZSB9OiBhbnkpID0+IHRyYW5zcGFyZW50aXplKDAuNTUsIHRoZW1lLmJvcmRlcil9O1xuICAgICAgICBib3JkZXItY29sb3I6ICR7KHsgdGhlbWUgfTogYW55KSA9PiB0aGVtZS5ib3JkZXJ9O1xuICAgICAgfVxuXG4gICAgICAmOmNoZWNrZWQgKyBsYWJlbCB7XG4gICAgICAgIGJvcmRlci1jb2xvcjogJHsoeyB0aGVtZSB9OiBhbnkpID0+IHRoZW1lLnRleHREYXJrfTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHsoeyB0aGVtZSB9OiBhbnkpID0+IHRyYW5zcGFyZW50aXplKDAuNjUsIHRoZW1lLnRleHREYXJrKX07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgJiArICYge1xuICAgIG1hcmdpbi1sZWZ0OiAtMXB4O1xuICB9XG5cbiAgJjpmaXJzdC1jaGlsZCBsYWJlbCB7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNHB4O1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDRweDtcbiAgfVxuXG4gICY6bGFzdC1jaGlsZCBsYWJlbCB7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDRweDtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNHB4O1xuICB9XG5gO1xuXG5cbmNvbnN0IFdyYXBwZXIgPSBzdHlsZWQuc3Bhbjx7IGJ1dHRvbjogYm9vbGVhbiwgY29sb3I/OiBDb2xvclR5cGUgfT5gXG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiBhdXRvO1xuXG4gICR7KHsgYnV0dG9uIH0pID0+IGJ1dHRvbiA/IEJ1dHRvbkxhYmVsIDogUmFkaW9MYWJlbH1cbmA7XG5cbmludGVyZmFjZSBQcm9wcyBleHRlbmRzIElucHV0SFRNTEF0dHJpYnV0ZXM8SFRNTElucHV0RWxlbWVudD4ge1xuICB2YWx1ZTogc3RyaW5nIHwgbnVtYmVyO1xuICBjaGlsZHJlbj86IGFueTtcbiAgY2hlY2tlZD86IGJvb2xlYW47XG4gIGJ1dHRvbj86IGJvb2xlYW47XG4gIGNvbG9yPzogQ29sb3JUeXBlO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSYWRpbyBleHRlbmRzIENvbXBvbmVudDxQcm9wcz4ge1xuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIG5hbWU6IG51bGwsXG4gICAgY2hpbGRyZW46IG51bGwsXG4gICAgY2hlY2tlZDogZmFsc2UsXG4gICAgYnV0dG9uOiBmYWxzZSxcbiAgICBvbkNoYW5nZTogKCkgPT4ge30sXG4gIH07XG5cbiAgaWQgPSBgcmFkaW9fJHt0aGlzLnByb3BzLm5hbWV9OiR7dGhpcy5wcm9wcy52YWx1ZX1gO1xuXG4gIHNob3VsZENvbXBvbmVudFVwZGF0ZShwcm9wczogUHJvcHMpIHtcbiAgICByZXR1cm4gcHJvcHMuY2hlY2tlZCAhPT0gdGhpcy5wcm9wcy5jaGVja2VkO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY2xhc3NOYW1lLCBjaGlsZHJlbiwgYnV0dG9uLCBjb2xvciwgc3R5bGUsIC4uLnJlc3QgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxXcmFwcGVyIGNsYXNzTmFtZT17Y2xhc3NOYW1lfSBidXR0b249e2J1dHRvbiF9IGNvbG9yPXtjb2xvcn0gc3R5bGU9e3N0eWxlfT5cbiAgICAgICAgPGlucHV0IGlkPXt0aGlzLmlkfSB0eXBlPVwicmFkaW9cIiB7Li4ucmVzdH0gLz5cbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9e3RoaXMuaWR9PntjaGlsZHJlbn08L2xhYmVsPlxuICAgICAgPC9XcmFwcGVyPlxuICAgICk7XG4gIH1cbn1cbiIsIlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2V0QWxpZ24oeyBhbGlnbiB9OiB7IGFsaWduPzogJ2xlZnQnIHwgJ3JpZ2h0JyB8ICdjZW50ZXInIH0pIHtcbiAgc3dpdGNoIChhbGlnbikge1xuICAgIGNhc2UgJ2xlZnQnOlxuICAgICAgcmV0dXJuICdmbGV4LXN0YXJ0JztcbiAgICBjYXNlICdyaWdodCc6XG4gICAgICByZXR1cm4gJ2ZsZXgtZW5kJztcbiAgICBjYXNlICdjZW50ZXInOlxuICAgICAgcmV0dXJuICdjZW50ZXInO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gJ3NwYWNlLWV2ZW5seSc7XG4gIH1cbn1cbiIsImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50LCBIVE1MQXR0cmlidXRlcyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB0cmFuc3BhcmVudGl6ZSBmcm9tICdwb2xpc2hlZC9saWIvY29sb3IvdHJhbnNwYXJlbnRpemUnO1xuaW1wb3J0IHN0eWxlZCwgeyBjc3MgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgZmluZENvbG9ySW52ZXJ0IGZyb20gJy4uLy4uL3V0aWxzL2ZpbmRDb2xvckludmVydCc7XG5pbXBvcnQgaGFtYnVnZXIgZnJvbSAnLi4vLi4vdXRpbHMvaGFtYnVnZXInO1xuaW1wb3J0IHNldEFsaWduIGZyb20gJy4uLy4uL3V0aWxzL3NldEFsaWduJztcbmltcG9ydCB7IG1lZGlhVGFibGV0LCBtZWRpYVVudGlsRnVsbEhELCBtZWRpYU1vYmlsZSB9IGZyb20gJy4uLy4uL3V0aWxzL21lZGlhJztcbmltcG9ydCB7IENvbG9yVHlwZSwgQWxpZ25UeXBlLCBDU1NUeXBlLCBUaGVtZVR5cGUgfSBmcm9tICcuLi8uLi90eXBlcyc7XG5cbmZ1bmN0aW9uIHNldENvbG9yKFxuICB7IGNvbG9yLCB0aGVtZSwgYmFja2Ryb3AgfTogeyBjb2xvcj86IENvbG9yVHlwZSwgdGhlbWU6IFRoZW1lVHlwZSwgYmFja2Ryb3A/OiBib29sZWFuIH0sXG4pIHtcbiAgY29uc3QgYmFja2dyb3VuZENvbG9yID0gY29sb3IgPyB0aGVtZVtjb2xvcl0gOiAndHJhbnNwYXJlbnQnO1xuICBjb25zdCB0ZXh0Q29sb3IgPVxuICAgIGZpbmRDb2xvckludmVydCh0aGVtZSwgYmFja2dyb3VuZENvbG9yID09PSAndHJhbnNwYXJlbnQnID8gdGhlbWUuYmFja2dyb3VuZCA6IGJhY2tncm91bmRDb2xvcik7XG5cbiAgaWYgKGJhY2tkcm9wKSB7XG4gICAgY29uc3QgYmFja0NvbG9yID1cbiAgICAgIHRyYW5zcGFyZW50aXplKDAuMiwgKGJhY2tncm91bmRDb2xvciA9PT0gJ3RyYW5zcGFyZW50JyA/IHRoZW1lLndoaXRlIDogYmFja2dyb3VuZENvbG9yKSk7XG4gICAgY29uc3QgdWEgPSBuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCk7XG4gICAgaWYgKHVhLmluZGV4T2YoJ3NhZmFyaScpID4gLTEgJiYgdWEuaW5kZXhPZignY2hyb21lJykgPT09IC0xKSB7XG4gICAgICByZXR1cm4gY3NzYGJhY2tncm91bmQtY29sb3I6ICR7YmFja0NvbG9yfTsgY29sb3I6ICR7dGV4dENvbG9yfTsgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDhweCk7YDtcbiAgICB9XG5cbiAgICByZXR1cm4gY3NzYFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtiYWNrQ29sb3J9O1xuICAgICAgY29sb3I6ICR7dGV4dENvbG9yfTtcbiAgICBgO1xuICB9XG5cbiAgcmV0dXJuIGNzc2BiYWNrZ3JvdW5kLWNvbG9yOiAke2JhY2tncm91bmRDb2xvcn07IGNvbG9yOiAke3RleHRDb2xvcn07YDtcbn1cblxuaW50ZXJmYWNlIE5hdlByb3BzIHtcbiAgY29sb3I/OiBDb2xvclR5cGU7XG4gIGJhY2tkcm9wPzogYm9vbGVhbjtcbiAgZml4ZWQ/OiBib29sZWFuO1xuICBzdGlja3k/OiBib29sZWFuO1xuICBmbHVpZD86IGJvb2xlYW47XG4gIHNob3c/OiBib29sZWFuO1xuICBzdHlsZT86IGFueTtcbiAgYWxpZ24/OiBBbGlnblR5cGU7XG4gIHJvbGU6IHN0cmluZztcbiAgY3NzPzogQ1NTVHlwZTtcbn1cblxuY29uc3QgTmF2QmFyID0gc3R5bGVkLmhlYWRlcjxOYXZQcm9wcz5gXG4gIHBvc2l0aW9uOiAke1xuICAgICh7IGZpeGVkLCBzdGlja3kgfSkgPT4gKCEoc3RpY2t5IHx8IGZpeGVkKSA/ICdyZWxhdGl2ZScgOiAoZml4ZWQgPyAnZml4ZWQnIDogJ3N0aWNreScpKVxuICB9O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3RyZXRjaDtcbiAgdG9wOiAtMXB4O1xuXG4gIG1pbi1oZWlnaHQ6IDMuMjVyZW07XG4gIHdpZHRoOiAxMDAlO1xuICB6LWluZGV4OiAzMDtcblxuICAke3NldENvbG9yfVxuXG4gIGEgeyBjb2xvcjogaW5oZXJpdDsgfVxuXG4gICR7bWVkaWFUYWJsZXR9IHtcbiAgICBwYWRkaW5nOiAkeyh7IGZsdWlkIH06IE5hdlByb3BzKSA9PiBmbHVpZCA/ICcwIDAuNXJlbScgOiAnMCAzJSd9O1xuICB9XG4gICR7bWVkaWFVbnRpbEZ1bGxIRH0ge1xuICAgIHBhZGRpbmc6ICR7KHsgZmx1aWQgfTogTmF2UHJvcHMpID0+IGZsdWlkID8gJzAgMC43NXJlbScgOiAnMCA1JSd9O1xuICB9XG4gICR7KHsgY3NzIH0pID0+IGNzcyB8fCB7fX1cbmA7XG5cbmNvbnN0IEJ1cmdlciA9IHN0eWxlZC5idXR0b25gXG4gICR7aGFtYnVnZXIoJzMuMjVyZW0nKX1cbiAgZGlzcGxheTogbm9uZTtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiBpbmhlcml0O1xuXG4gIG91dGxpbmU6IG5vbmU7XG5cbiAgJjpob3ZlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIC4wNSk7XG4gIH1cblxuICAke21lZGlhTW9iaWxlfSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbmA7XG5cbmludGVyZmFjZSBDb250ZW50UHJvcHMge1xuICBjb2xvcj86IENvbG9yVHlwZTtcbiAgc2hvdz86IGJvb2xlYW47XG4gIGFsaWduPzogJ2xlZnQnIHwgJ3JpZ2h0Jztcbn1cblxuY29uc3QgTmF2Q29udGVudCA9IHN0eWxlZC5kaXY8Q29udGVudFByb3BzPmBcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LWJhc2lzOiBhdXRvO1xuICBmbGV4LWdyb3c6IDE7XG5cbiAgJiA+IHVsIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICBmbGV4LWdyb3c6IDE7XG4gICAganVzdGlmeS1jb250ZW50OiAke3NldEFsaWdufTtcblxuICAgIGxpIHtcbiAgICAgIHBhZGRpbmc6IDAgMC43NXJlbTtcbiAgICB9XG4gIH1cblxuICAmID4gZGl2LCAmID4gc3BhbiwgJiA+IGZvcm0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgJHsoeyBjb2xvciB9KSA9PiAoY29sb3IgPyBgY29sb3I6ICR7Y29sb3J9O2AgOiAnJyl9XG4gIH1cblxuICAke21lZGlhTW9iaWxlfSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcblxuICAgIHBhZGRpbmctYm90dG9tOiAwLjVyZW07XG5cbiAgICBidXR0b246bm90KC5hY3RpdmUpKyYge1xuICAgICAgZGlzcGxheTpub25lO1xuICAgIH1cblxuICAgICYgPiB1bCB7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBsaSB7XG4gICAgICAgIHBhZGRpbmc6IC41cmVtIDA7XG4gICAgICB9XG4gICAgfVxuXG4gICAgJiA+IGRpdiwgJiA+IHNwYW4sICYgPiBmb3JtIHtcbiAgICAgIHBhZGRpbmc6IC41cmVtIDA7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG4gIH1cbmA7XG5cblxuaW50ZXJmYWNlIFByb3BzIGV4dGVuZHMgSFRNTEF0dHJpYnV0ZXM8SFRNTERpdkVsZW1lbnQ+IHtcbiAgLyoqIGJhY2tncm91bmToibIgKi9cbiAgY29sb3I/OiBDb2xvclR5cGU7XG4gIC8qKiDjg63jgrTjga7jgqTjg6Hjg7zjgrjjgIHjg5fjg63jgrjjgqfjgq/jg4jlkI3jgarjgakgKi9cbiAgYnJhbmQ/OiBSZWFjdC5SZWFjdEVsZW1lbnQ8YW55PiB8IHN0cmluZztcbiAgLyoqIOWumue+qeOBleOCjOOBn+S9jee9ruOCkuWbuuWumuOBq+OBmeOCiyAqL1xuICBmaXhlZD86IGJvb2xlYW47XG4gIC8qKiAoSUUxMeS4jeWPrynnlLvpnaLjgYzjgrnjgq/jg63jg7zjg6vjgZXjgozjgabjgoLkuIrjgafosrzjgorku5jjgZHjgYTjgovjgojjgYbjgavjgZnjgosgKi9cbiAgc3RpY2t5PzogYm9vbGVhbjtcbiAgLyoqIOS4reWkruS4puOBs+OBi+OCieiHquWLleW5heOBp+ihqOekuuOBl+OBvuOBmSAqL1xuICBmbHVpZD86IGJvb2xlYW47XG4gIC8qKiDog4zmma/jgYxibHVy44GV44KM44G+44GZ77yIc2FmYXJp5bCC55So44CB5LuW44Gv6YCP5piO5bqm77yJICovXG4gIGJhY2tkcm9wPzogYm9vbGVhbjtcbiAgLyoqIGNoaWxkcmVu44Gr5a6a576p44GZ44KLRWxlbWVudOOBruS4puOBs+mghuOCkuaMh+WumuOBl+OBvuOBmeOAguacquWumue+qeOBr+iHquWLleS4puOBsyAqL1xuICBhbGlnbj86ICdsZWZ0JyB8ICdyaWdodCc7XG4gIC8qKiDjgqvjgrnjgr/jg6BDU1PlrprnvqkgKi9cbiAgY3NzPzogQ1NTVHlwZTtcbn1cblxudHlwZSBTdGF0ZSA9IHtcbiAgc2hvdzogYm9vbGVhbixcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcEJhciBleHRlbmRzIFB1cmVDb21wb25lbnQ8UHJvcHMsIFN0YXRlPiB7XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgY29sb3I6IG51bGwsXG4gICAgYnJhbmQ6IG51bGwsXG4gICAgZml4ZWQ6IGZhbHNlLFxuICAgIHN0aWNreTogZmFsc2UsXG4gICAgZmx1aWQ6IGZhbHNlLFxuICAgIGJhY2tkcm9wOiBmYWxzZSxcbiAgfTtcblxuICBzdGF0ZSA9IHsgc2hvdzogZmFsc2UgfTtcblxuICB0b2dnbGVNZW51ID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93OiAhdGhpcy5zdGF0ZS5zaG93IH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY2hpbGRyZW4sIGFsaWduLCBicmFuZCwgLi4ucmVzdCB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IHNob3cgfSA9IHRoaXMuc3RhdGU7XG4gICAgcmV0dXJuIChcbiAgICAgIDxOYXZCYXJcbiAgICAgICAgcm9sZT1cIm5hdmlnYXRpb25cIlxuICAgICAgICB7Li4ucmVzdH1cbiAgICAgID5cbiAgICAgICAge2JyYW5kfVxuICAgICAgICA8QnVyZ2VyIGNsYXNzTmFtZT17c2hvdyA/ICdhY3RpdmUnIDogJyd9IG9uQ2xpY2s9e3RoaXMudG9nZ2xlTWVudX0+XG4gICAgICAgICAgPHNwYW4gLz5cbiAgICAgICAgICA8c3BhbiAvPlxuICAgICAgICAgIDxzcGFuIC8+XG4gICAgICAgIDwvQnVyZ2VyPlxuICAgICAgICA8TmF2Q29udGVudCBhbGlnbj17YWxpZ259PlxuICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC9OYXZDb250ZW50PlxuICAgICAgPC9OYXZCYXI+XG4gICAgKTtcbiAgfVxufVxuIiwiaW1wb3J0IFJlYWN0LCB7IEhUTUxBdHRyaWJ1dGVzLCBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCwgeyBjc3MgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgZGFya2VuIGZyb20gJ3BvbGlzaGVkL2xpYi9jb2xvci9kYXJrZW4nO1xuaW1wb3J0IGZpbmRDb2xvckludmVydCBmcm9tICcuLi8uLi91dGlscy9maW5kQ29sb3JJbnZlcnQnO1xuaW1wb3J0IHsgQ29sb3JUeXBlLCBUaGVtZVR5cGUsIENTU1R5cGUgfSBmcm9tICcuLi8uLi90eXBlcyc7XG5cbmludGVyZmFjZSBXcmFwcGVyUHJvcHMge1xuICBjb2xvcj86IENvbG9yVHlwZTtcbiAgYWRkb25Db2xvcj86IENvbG9yVHlwZTtcbiAgY2xvc2U6IGJvb2xlYW47XG4gIGNzcz86IENTU1R5cGU7XG59XG5cbmZ1bmN0aW9uIGdldENvbG9yKHRoZW1lOiBUaGVtZVR5cGUsIGNvbG9yPzogQ29sb3JUeXBlKSB7XG4gIHJldHVybiAoIWNvbG9yIHx8IGNvbG9yID09PSAnbGlnaHQnKSA/IHRoZW1lLmJhY2tncm91bmQgOiB0aGVtZVtjb2xvcl07XG59XG5cbmZ1bmN0aW9uIHNldENvbG9yKHsgdGhlbWUsIGNvbG9yLCBhZGRvbkNvbG9yIH06XG4gICAgeyB0aGVtZTogVGhlbWVUeXBlLCBjb2xvcj86IENvbG9yVHlwZSwgYWRkb25Db2xvcj86IENvbG9yVHlwZSB9KSB7XG4gIGNvbnN0IHRhcmdldCA9IGdldENvbG9yKHRoZW1lLCBjb2xvcik7XG4gIGNvbnN0IGludmVydENvbG9yID0gZmluZENvbG9ySW52ZXJ0KHRoZW1lLCB0YXJnZXQpO1xuXG4gIGNvbnN0IHN1YkNvbG9yID0gYWRkb25Db2xvciA/IGdldENvbG9yKHRoZW1lLCBhZGRvbkNvbG9yKSA6IGRhcmtlbigwLjA1LCB0YXJnZXQpO1xuXG4gIHJldHVybiBjc3NgXG4gICAgY29sb3I6ICR7aW52ZXJ0Q29sb3J9O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR7dGFyZ2V0fTtcblxuICAgIGEsIHNwYW4ge1xuICAgICAgY29sb3I6ICR7aW52ZXJ0Q29sb3J9O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtzdWJDb2xvcn07XG4gICAgfVxuXG4gICAgYTpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke2RhcmtlbigwLjA1LCBzdWJDb2xvcil9O1xuICAgIH1cbiAgYDtcbn1cblxuY29uc3QgV3JhcHBlciA9IHN0eWxlZC5kaXY8V3JhcHBlclByb3BzPmBcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgY3Vyc29yOiBkZWZhdWx0O1xuICBwYWRkaW5nOiAwIC41cmVtO1xuICBoZWlnaHQ6IDJlbTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG5cbiAgJHtzZXRDb2xvcn1cblxuICAmOm5vdCg6bGFzdC1jaGlsZCkge1xuICAgIG1hcmdpbi1yaWdodDogMC41cmVtO1xuICB9XG5cbiAgYSwgc3BhbiB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIGZsZXgtZ3JvdzogMDtcbiAgICBmbGV4LXNocmluazogMDtcbiAgICBtaW4td2lkdGg6IDEuNXJlbTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbWFyZ2luLXJpZ2h0OiAtMC41cmVtO1xuICAgIG1hcmdpbi1sZWZ0OiAwLjVyZW07XG4gICAgcGFkZGluZzogMCAuNXJlbTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAzcHg7XG4gICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogM3B4O1xuICAgIH1cblxuICAgICY6Zm9jdXMge1xuICAgICAgb3V0bGluZTogbm9uZTtcbiAgICB9XG5cbiAgICAke3Byb3BzID0+IChwcm9wcy5jbG9zZSA/IGNzc2BcbiAgICAgICY6YmVmb3JlLCAmOmFmdGVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogY3VycmVudENvbG9yO1xuICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogNTAlO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtNTAlKSByb3RhdGUoNDVkZWcpO1xuICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgY2VudGVyO1xuICAgICAgfVxuXG4gICAgICAmOmJlZm9yZSB7XG4gICAgICAgIGhlaWdodDogMXB4O1xuICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgfVxuXG4gICAgICAmOmFmdGVyIHtcbiAgICAgICAgaGVpZ2h0OiA1MCU7XG4gICAgICAgIHdpZHRoOiAxcHg7XG4gICAgICB9XG5cbiAgICAgICY6aG92ZXIge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgfVxuICAgIGAgOiAnJyl9XG4gIH1cblxuICAkeyh7IGNzcyB9KSA9PiBjc3MgfHwgJyd9XG5gO1xuXG5pbnRlcmZhY2UgUHJvcHMgZXh0ZW5kcyBIVE1MQXR0cmlidXRlczxIVE1MRGl2RWxlbWVudD4ge1xuICAvKiog44K/44Kw44Gu5YaF5a65ICovXG4gIGNoaWxkcmVuOiBhbnk7XG4gIC8qKiBY44Oc44K/44Oz44Gu6L+95Yqg77yL44Kv44Oq44OD44Kv5pmC44Gu44Kk44OZ44Oz44OI44OP44Oz44OJ44Op44O8ICovXG4gIG9uQ2xvc2U/OiAoKSA9PiB2b2lkO1xuICAvKiog44Kv44Oq44OD44Kv5pmC44Gu44Kk44OZ44Oz44OI44OP44Oz44OJ44Op44O8ICovXG4gIG9uQ2xpY2s/OiAoKSA9PiB2b2lkO1xuICAvKiog6Imy44Gu5oyH5a6aICovXG4gIGNvbG9yPzogQ29sb3JUeXBlO1xuICAvKiog44Kr44K544K/44OgQ1NT5a6a576pICovXG4gIGNzcz86IENTU1R5cGU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhZyBleHRlbmRzIFB1cmVDb21wb25lbnQ8UHJvcHM+IHtcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBjaGlsZHJlbjogbnVsbCxcbiAgICBvbkNsb3NlOiBudWxsLFxuICAgIG9uQ2xpY2s6IG51bGwsXG4gICAgY29sb3I6IG51bGwsXG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY2hpbGRyZW4sIG9uQ2xvc2UsIC4uLnJlc3QgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxXcmFwcGVyIGNsb3NlPXtvbkNsb3NlICE9PSBudWxsfSB7Li4ucmVzdH0+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAge29uQ2xvc2UgJiYgKDxhIHRhYkluZGV4PXswfSByb2xlPVwibGlua1wiIG9uQ2xpY2s9e29uQ2xvc2V9PiZuYnNwOzwvYT4pfVxuICAgICAgPC9XcmFwcGVyPlxuICAgICk7XG4gIH1cbn1cbiIsImltcG9ydCBSZWFjdCwgeyBIVE1MQXR0cmlidXRlcyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQsIHsgY3NzIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IENvbnRhaW5lciBmcm9tICcuLi9HcmlkL0NvbnRhaW5lcic7XG5pbXBvcnQgZmluZENvbG9ySW52ZXJ0IGZyb20gJy4uLy4uL3V0aWxzL2ZpbmRDb2xvckludmVydCc7XG5pbXBvcnQgeyBtZWRpYURlc2t0b3AgfSBmcm9tICcuLi8uLi91dGlscy9tZWRpYSc7XG5pbXBvcnQgeyBDb2xvclR5cGUsIFRoZW1lVHlwZSwgU2l6ZVR5cGUgfSBmcm9tICcuLi8uLi90eXBlcyc7XG5cbmludGVyZmFjZSBQcm9wcyBleHRlbmRzIEhUTUxBdHRyaWJ1dGVzPEhUTUxEaXZFbGVtZW50PiB7XG4gIC8qKiDog4zmma/jga7oibIgKi9cbiAgY29sb3I/OiBDb2xvclR5cGU7XG4gIC8qKiBzbWFsbCB8IG1lZGl1bSB8IGxhcmdlIHwgZnVsbCAqL1xuICBzaXplPzogU2l6ZVR5cGUgfCAnZnVsbCc7XG4gIC8qKiAgKi9cbiAgY2hpbGRyZW4/OiBSZWFjdC5SZWFjdENoaWxkO1xuICAvKiogY2hpbGRyZW7jga7kuK3lpK7mj4PjgYggKi9cbiAgY2VudGVyPzogYm9vbGVhbjtcbiAgLyoqIOOCq+OCueOCv+ODoOODmOODg+ODgOODvCAqL1xuICBoZWFkZXI/OiBSZWFjdC5SZWFjdEVsZW1lbnQ8YW55Pjtcbn1cblxuZnVuY3Rpb24gc2V0Q29sb3IoeyBjb2xvciwgdGhlbWUgfTogeyBjb2xvcj86IENvbG9yVHlwZSwgdGhlbWU6IFRoZW1lVHlwZSB9KSB7XG4gIGlmICghY29sb3IpIHJldHVybiAnJztcblxuICBjb25zdCB0YXJnZXQgPSB0aGVtZVtjb2xvcl0gfHwgY29sb3I7XG4gIGNvbnN0IGludmVydENvbG9yID0gZmluZENvbG9ySW52ZXJ0KHRoZW1lLCB0YXJnZXQpO1xuICByZXR1cm4gY3NzYGJhY2tncm91bmQtY29sb3I6ICR7dGFyZ2V0fTsgY29sb3I6ICR7aW52ZXJ0Q29sb3J9O2A7XG59XG5cbmZ1bmN0aW9uIHNldFNpemUoeyBzaXplLCB0aGVtZSB9OiB7IHNpemU/OiBTaXplVHlwZSB8ICdmdWxsJywgdGhlbWU6IFRoZW1lVHlwZSB9KSB7XG4gIGlmICghc2l6ZSB8fCBzaXplID09PSAnc21hbGwnKSByZXR1cm4gJyc7XG5cbiAgc3dpdGNoIChzaXplKSB7XG4gICAgY2FzZSAnbWVkaXVtJyA6XG4gICAgICByZXR1cm4gY3NzYHBhZGRpbmctYm90dG9tOiA5cmVtOyBwYWRkaW5nLXRvcDogOXJlbTtgO1xuICAgIGNhc2UgJ2xhcmdlJyA6XG4gICAgICByZXR1cm4gY3NzYHBhZGRpbmctYm90dG9tOiAxOHJlbTsgcGFkZGluZy10b3A6IDE4cmVtO2A7XG4gICAgY2FzZSAnZnVsbCcgOlxuICAgICAgcmV0dXJuIGNzc2BcbiAgICAgICAgbWluLWhlaWdodDogMTAwdmg7XG5cbiAgICAgICAgJHtCb2R5fSB7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICB9XG4gICAgICBgO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gJyc7XG4gIH1cbn1cblxuaW50ZXJmYWNlIEJvZHlQcm9wcyB7XG4gIGNlbnRlcj86IGJvb2xlYW47XG59XG5cbmNvbnN0IEJvZHkgPSBzdHlsZWQuZGl2PEJvZHlQcm9wcz5gXG4gIGZsZXgtZ3JvdzogMTtcbiAgZmxleC1zaHJpbms6IDA7XG4gIHBhZGRpbmc6IDNyZW0gMS41cmVtO1xuXG4gICR7KHsgY2VudGVyIH0pID0+IGNlbnRlciA/ICd0ZXh0LWFsaWduOiBjZW50ZXI7JyA6ICcnfVxuXG4gIGgxIHtcbiAgICBmb250LXNpemU6IDJyZW07XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBsaW5lLWhlaWdodDogMS4xMjU7XG5cbiAgICAmOm5vdCg6bGFzdC1jaGlsZCkge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xuICAgIH1cbiAgfVxuXG4gIGgyIHtcbiAgICBmb250LXNpemU6IDEuMjVyZW07XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBsaW5lLWhlaWdodDogMS4yNTtcbiAgfVxuXG4gIGgxK2gyIHtcbiAgICBtYXJnaW4tdG9wOiAtMS4yNXJlbTtcbiAgfVxuYDtcblxuaW50ZXJmYWNlIFdyYXBwZXJQcm9wcyB7XG4gIGNvbG9yPzogQ29sb3JUeXBlO1xuICBzaXplPzogU2l6ZVR5cGUgfCAnZnVsbCc7XG59XG5cbmNvbnN0IFdyYXBwZXIgPSBzdHlsZWQuZGl2PFdyYXBwZXJQcm9wcz5gXG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICR7c2V0Q29sb3J9XG4gICR7c2V0U2l6ZX1cblxuICBoZWFkZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XG4gICAgY29sb3I6IGluaGVyaXQ7XG4gIH1cblxuICBoZWFkZXIrJHtCb2R5fSB7XG4gICAgbWFyZ2luLXRvcDogMy4yNXJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAzLjI1cmVtO1xuICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIZXJvKHsgY2hpbGRyZW4sIGNvbG9yLCBzaXplLCBjZW50ZXIsIGhlYWRlciwgLi4ucmVzdCB9OiBQcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxXcmFwcGVyIGNvbG9yPXtjb2xvcn0gc2l6ZT17c2l6ZX0gey4uLnJlc3R9PlxuICAgICAge2hlYWRlcn1cbiAgICAgIDxCb2R5IGNlbnRlcj17Y2VudGVyfT5cbiAgICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgPC9Cb2R5PlxuICAgIDwvV3JhcHBlcj5cbiAgKTtcbn1cbiIsIi8qKiBAbGljZW5zZSBSZWFjdCB2MTYuOC4xXG4gKiByZWFjdC1pcy5wcm9kdWN0aW9uLm1pbi5qc1xuICpcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cyxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTtcbnZhciBiPVwiZnVuY3Rpb25cIj09PXR5cGVvZiBTeW1ib2wmJlN5bWJvbC5mb3IsYz1iP1N5bWJvbC5mb3IoXCJyZWFjdC5lbGVtZW50XCIpOjYwMTAzLGQ9Yj9TeW1ib2wuZm9yKFwicmVhY3QucG9ydGFsXCIpOjYwMTA2LGU9Yj9TeW1ib2wuZm9yKFwicmVhY3QuZnJhZ21lbnRcIik6NjAxMDcsZj1iP1N5bWJvbC5mb3IoXCJyZWFjdC5zdHJpY3RfbW9kZVwiKTo2MDEwOCxnPWI/U3ltYm9sLmZvcihcInJlYWN0LnByb2ZpbGVyXCIpOjYwMTE0LGg9Yj9TeW1ib2wuZm9yKFwicmVhY3QucHJvdmlkZXJcIik6NjAxMDksaz1iP1N5bWJvbC5mb3IoXCJyZWFjdC5jb250ZXh0XCIpOjYwMTEwLGw9Yj9TeW1ib2wuZm9yKFwicmVhY3QuYXN5bmNfbW9kZVwiKTo2MDExMSxtPWI/U3ltYm9sLmZvcihcInJlYWN0LmNvbmN1cnJlbnRfbW9kZVwiKTo2MDExMSxuPWI/U3ltYm9sLmZvcihcInJlYWN0LmZvcndhcmRfcmVmXCIpOjYwMTEyLHA9Yj9TeW1ib2wuZm9yKFwicmVhY3Quc3VzcGVuc2VcIik6NjAxMTMscT1iP1N5bWJvbC5mb3IoXCJyZWFjdC5tZW1vXCIpOlxuNjAxMTUscj1iP1N5bWJvbC5mb3IoXCJyZWFjdC5sYXp5XCIpOjYwMTE2O2Z1bmN0aW9uIHQoYSl7aWYoXCJvYmplY3RcIj09PXR5cGVvZiBhJiZudWxsIT09YSl7dmFyIHU9YS4kJHR5cGVvZjtzd2l0Y2godSl7Y2FzZSBjOnN3aXRjaChhPWEudHlwZSxhKXtjYXNlIGw6Y2FzZSBtOmNhc2UgZTpjYXNlIGc6Y2FzZSBmOmNhc2UgcDpyZXR1cm4gYTtkZWZhdWx0OnN3aXRjaChhPWEmJmEuJCR0eXBlb2YsYSl7Y2FzZSBrOmNhc2UgbjpjYXNlIGg6cmV0dXJuIGE7ZGVmYXVsdDpyZXR1cm4gdX19Y2FzZSByOmNhc2UgcTpjYXNlIGQ6cmV0dXJuIHV9fX1mdW5jdGlvbiB2KGEpe3JldHVybiB0KGEpPT09bX1leHBvcnRzLnR5cGVPZj10O2V4cG9ydHMuQXN5bmNNb2RlPWw7ZXhwb3J0cy5Db25jdXJyZW50TW9kZT1tO2V4cG9ydHMuQ29udGV4dENvbnN1bWVyPWs7ZXhwb3J0cy5Db250ZXh0UHJvdmlkZXI9aDtleHBvcnRzLkVsZW1lbnQ9YztleHBvcnRzLkZvcndhcmRSZWY9bjtcbmV4cG9ydHMuRnJhZ21lbnQ9ZTtleHBvcnRzLkxhenk9cjtleHBvcnRzLk1lbW89cTtleHBvcnRzLlBvcnRhbD1kO2V4cG9ydHMuUHJvZmlsZXI9ZztleHBvcnRzLlN0cmljdE1vZGU9ZjtleHBvcnRzLlN1c3BlbnNlPXA7ZXhwb3J0cy5pc1ZhbGlkRWxlbWVudFR5cGU9ZnVuY3Rpb24oYSl7cmV0dXJuXCJzdHJpbmdcIj09PXR5cGVvZiBhfHxcImZ1bmN0aW9uXCI9PT10eXBlb2YgYXx8YT09PWV8fGE9PT1tfHxhPT09Z3x8YT09PWZ8fGE9PT1wfHxcIm9iamVjdFwiPT09dHlwZW9mIGEmJm51bGwhPT1hJiYoYS4kJHR5cGVvZj09PXJ8fGEuJCR0eXBlb2Y9PT1xfHxhLiQkdHlwZW9mPT09aHx8YS4kJHR5cGVvZj09PWt8fGEuJCR0eXBlb2Y9PT1uKX07ZXhwb3J0cy5pc0FzeW5jTW9kZT1mdW5jdGlvbihhKXtyZXR1cm4gdihhKXx8dChhKT09PWx9O2V4cG9ydHMuaXNDb25jdXJyZW50TW9kZT12O2V4cG9ydHMuaXNDb250ZXh0Q29uc3VtZXI9ZnVuY3Rpb24oYSl7cmV0dXJuIHQoYSk9PT1rfTtcbmV4cG9ydHMuaXNDb250ZXh0UHJvdmlkZXI9ZnVuY3Rpb24oYSl7cmV0dXJuIHQoYSk9PT1ofTtleHBvcnRzLmlzRWxlbWVudD1mdW5jdGlvbihhKXtyZXR1cm5cIm9iamVjdFwiPT09dHlwZW9mIGEmJm51bGwhPT1hJiZhLiQkdHlwZW9mPT09Y307ZXhwb3J0cy5pc0ZvcndhcmRSZWY9ZnVuY3Rpb24oYSl7cmV0dXJuIHQoYSk9PT1ufTtleHBvcnRzLmlzRnJhZ21lbnQ9ZnVuY3Rpb24oYSl7cmV0dXJuIHQoYSk9PT1lfTtleHBvcnRzLmlzTGF6eT1mdW5jdGlvbihhKXtyZXR1cm4gdChhKT09PXJ9O2V4cG9ydHMuaXNNZW1vPWZ1bmN0aW9uKGEpe3JldHVybiB0KGEpPT09cX07ZXhwb3J0cy5pc1BvcnRhbD1mdW5jdGlvbihhKXtyZXR1cm4gdChhKT09PWR9O2V4cG9ydHMuaXNQcm9maWxlcj1mdW5jdGlvbihhKXtyZXR1cm4gdChhKT09PWd9O2V4cG9ydHMuaXNTdHJpY3RNb2RlPWZ1bmN0aW9uKGEpe3JldHVybiB0KGEpPT09Zn07XG5leHBvcnRzLmlzU3VzcGVuc2U9ZnVuY3Rpb24oYSl7cmV0dXJuIHQoYSk9PT1wfTtcbiIsIi8qKiBAbGljZW5zZSBSZWFjdCB2MTYuOC4xXG4gKiByZWFjdC1pcy5kZXZlbG9wbWVudC5qc1xuICpcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuXG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgKGZ1bmN0aW9uKCkge1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG4vLyBUaGUgU3ltYm9sIHVzZWQgdG8gdGFnIHRoZSBSZWFjdEVsZW1lbnQtbGlrZSB0eXBlcy4gSWYgdGhlcmUgaXMgbm8gbmF0aXZlIFN5bWJvbFxuLy8gbm9yIHBvbHlmaWxsLCB0aGVuIGEgcGxhaW4gbnVtYmVyIGlzIHVzZWQgZm9yIHBlcmZvcm1hbmNlLlxudmFyIGhhc1N5bWJvbCA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLmZvcjtcblxudmFyIFJFQUNUX0VMRU1FTlRfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmVsZW1lbnQnKSA6IDB4ZWFjNztcbnZhciBSRUFDVF9QT1JUQUxfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnBvcnRhbCcpIDogMHhlYWNhO1xudmFyIFJFQUNUX0ZSQUdNRU5UX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5mcmFnbWVudCcpIDogMHhlYWNiO1xudmFyIFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5zdHJpY3RfbW9kZScpIDogMHhlYWNjO1xudmFyIFJFQUNUX1BST0ZJTEVSX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5wcm9maWxlcicpIDogMHhlYWQyO1xudmFyIFJFQUNUX1BST1ZJREVSX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5wcm92aWRlcicpIDogMHhlYWNkO1xudmFyIFJFQUNUX0NPTlRFWFRfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmNvbnRleHQnKSA6IDB4ZWFjZTtcbnZhciBSRUFDVF9BU1lOQ19NT0RFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5hc3luY19tb2RlJykgOiAweGVhY2Y7XG52YXIgUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5jb25jdXJyZW50X21vZGUnKSA6IDB4ZWFjZjtcbnZhciBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuZm9yd2FyZF9yZWYnKSA6IDB4ZWFkMDtcbnZhciBSRUFDVF9TVVNQRU5TRV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3Quc3VzcGVuc2UnKSA6IDB4ZWFkMTtcbnZhciBSRUFDVF9NRU1PX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5tZW1vJykgOiAweGVhZDM7XG52YXIgUkVBQ1RfTEFaWV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QubGF6eScpIDogMHhlYWQ0O1xuXG5mdW5jdGlvbiBpc1ZhbGlkRWxlbWVudFR5cGUodHlwZSkge1xuICByZXR1cm4gdHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nIHx8XG4gIC8vIE5vdGU6IGl0cyB0eXBlb2YgbWlnaHQgYmUgb3RoZXIgdGhhbiAnc3ltYm9sJyBvciAnbnVtYmVyJyBpZiBpdCdzIGEgcG9seWZpbGwuXG4gIHR5cGUgPT09IFJFQUNUX0ZSQUdNRU5UX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfUFJPRklMRVJfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NVU1BFTlNFX1RZUEUgfHwgdHlwZW9mIHR5cGUgPT09ICdvYmplY3QnICYmIHR5cGUgIT09IG51bGwgJiYgKHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0xBWllfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9NRU1PX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfUFJPVklERVJfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9DT05URVhUX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSk7XG59XG5cbi8qKlxuICogRm9ya2VkIGZyb20gZmJqcy93YXJuaW5nOlxuICogaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL2ZianMvYmxvYi9lNjZiYTIwYWQ1YmU0MzNlYjU0NDIzZjJiMDk3ZDgyOTMyNGQ5ZGU2L3BhY2thZ2VzL2ZianMvc3JjL19fZm9ya3NfXy93YXJuaW5nLmpzXG4gKlxuICogT25seSBjaGFuZ2UgaXMgd2UgdXNlIGNvbnNvbGUud2FybiBpbnN0ZWFkIG9mIGNvbnNvbGUuZXJyb3IsXG4gKiBhbmQgZG8gbm90aGluZyB3aGVuICdjb25zb2xlJyBpcyBub3Qgc3VwcG9ydGVkLlxuICogVGhpcyByZWFsbHkgc2ltcGxpZmllcyB0aGUgY29kZS5cbiAqIC0tLVxuICogU2ltaWxhciB0byBpbnZhcmlhbnQgYnV0IG9ubHkgbG9ncyBhIHdhcm5pbmcgaWYgdGhlIGNvbmRpdGlvbiBpcyBub3QgbWV0LlxuICogVGhpcyBjYW4gYmUgdXNlZCB0byBsb2cgaXNzdWVzIGluIGRldmVsb3BtZW50IGVudmlyb25tZW50cyBpbiBjcml0aWNhbFxuICogcGF0aHMuIFJlbW92aW5nIHRoZSBsb2dnaW5nIGNvZGUgZm9yIHByb2R1Y3Rpb24gZW52aXJvbm1lbnRzIHdpbGwga2VlcCB0aGVcbiAqIHNhbWUgbG9naWMgYW5kIGZvbGxvdyB0aGUgc2FtZSBjb2RlIHBhdGhzLlxuICovXG5cbnZhciBsb3dQcmlvcml0eVdhcm5pbmcgPSBmdW5jdGlvbiAoKSB7fTtcblxue1xuICB2YXIgcHJpbnRXYXJuaW5nID0gZnVuY3Rpb24gKGZvcm1hdCkge1xuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgdmFyIGFyZ0luZGV4ID0gMDtcbiAgICB2YXIgbWVzc2FnZSA9ICdXYXJuaW5nOiAnICsgZm9ybWF0LnJlcGxhY2UoLyVzL2csIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBhcmdzW2FyZ0luZGV4KytdO1xuICAgIH0pO1xuICAgIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbnNvbGUud2FybihtZXNzYWdlKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIC8vIC0tLSBXZWxjb21lIHRvIGRlYnVnZ2luZyBSZWFjdCAtLS1cbiAgICAgIC8vIFRoaXMgZXJyb3Igd2FzIHRocm93biBhcyBhIGNvbnZlbmllbmNlIHNvIHRoYXQgeW91IGNhbiB1c2UgdGhpcyBzdGFja1xuICAgICAgLy8gdG8gZmluZCB0aGUgY2FsbHNpdGUgdGhhdCBjYXVzZWQgdGhpcyB3YXJuaW5nIHRvIGZpcmUuXG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgfSBjYXRjaCAoeCkge31cbiAgfTtcblxuICBsb3dQcmlvcml0eVdhcm5pbmcgPSBmdW5jdGlvbiAoY29uZGl0aW9uLCBmb3JtYXQpIHtcbiAgICBpZiAoZm9ybWF0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignYGxvd1ByaW9yaXR5V2FybmluZyhjb25kaXRpb24sIGZvcm1hdCwgLi4uYXJncylgIHJlcXVpcmVzIGEgd2FybmluZyAnICsgJ21lc3NhZ2UgYXJndW1lbnQnKTtcbiAgICB9XG4gICAgaWYgKCFjb25kaXRpb24pIHtcbiAgICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4yID4gMiA/IF9sZW4yIC0gMiA6IDApLCBfa2V5MiA9IDI7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgICAgYXJnc1tfa2V5MiAtIDJdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICAgIH1cblxuICAgICAgcHJpbnRXYXJuaW5nLmFwcGx5KHVuZGVmaW5lZCwgW2Zvcm1hdF0uY29uY2F0KGFyZ3MpKTtcbiAgICB9XG4gIH07XG59XG5cbnZhciBsb3dQcmlvcml0eVdhcm5pbmckMSA9IGxvd1ByaW9yaXR5V2FybmluZztcblxuZnVuY3Rpb24gdHlwZU9mKG9iamVjdCkge1xuICBpZiAodHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgJiYgb2JqZWN0ICE9PSBudWxsKSB7XG4gICAgdmFyICQkdHlwZW9mID0gb2JqZWN0LiQkdHlwZW9mO1xuICAgIHN3aXRjaCAoJCR0eXBlb2YpIHtcbiAgICAgIGNhc2UgUkVBQ1RfRUxFTUVOVF9UWVBFOlxuICAgICAgICB2YXIgdHlwZSA9IG9iamVjdC50eXBlO1xuXG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgIGNhc2UgUkVBQ1RfQVNZTkNfTU9ERV9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9GUkFHTUVOVF9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfUFJPRklMRVJfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1NUUklDVF9NT0RFX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9UWVBFOlxuICAgICAgICAgICAgcmV0dXJuIHR5cGU7XG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHZhciAkJHR5cGVvZlR5cGUgPSB0eXBlICYmIHR5cGUuJCR0eXBlb2Y7XG5cbiAgICAgICAgICAgIHN3aXRjaCAoJCR0eXBlb2ZUeXBlKSB7XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfQ09OVEVYVF9UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfUFJPVklERVJfVFlQRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gJCR0eXBlb2ZUeXBlO1xuICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiAkJHR5cGVvZjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgY2FzZSBSRUFDVF9MQVpZX1RZUEU6XG4gICAgICBjYXNlIFJFQUNUX01FTU9fVFlQRTpcbiAgICAgIGNhc2UgUkVBQ1RfUE9SVEFMX1RZUEU6XG4gICAgICAgIHJldHVybiAkJHR5cGVvZjtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdW5kZWZpbmVkO1xufVxuXG4vLyBBc3luY01vZGUgaXMgZGVwcmVjYXRlZCBhbG9uZyB3aXRoIGlzQXN5bmNNb2RlXG52YXIgQXN5bmNNb2RlID0gUkVBQ1RfQVNZTkNfTU9ERV9UWVBFO1xudmFyIENvbmN1cnJlbnRNb2RlID0gUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEU7XG52YXIgQ29udGV4dENvbnN1bWVyID0gUkVBQ1RfQ09OVEVYVF9UWVBFO1xudmFyIENvbnRleHRQcm92aWRlciA9IFJFQUNUX1BST1ZJREVSX1RZUEU7XG52YXIgRWxlbWVudCA9IFJFQUNUX0VMRU1FTlRfVFlQRTtcbnZhciBGb3J3YXJkUmVmID0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTtcbnZhciBGcmFnbWVudCA9IFJFQUNUX0ZSQUdNRU5UX1RZUEU7XG52YXIgTGF6eSA9IFJFQUNUX0xBWllfVFlQRTtcbnZhciBNZW1vID0gUkVBQ1RfTUVNT19UWVBFO1xudmFyIFBvcnRhbCA9IFJFQUNUX1BPUlRBTF9UWVBFO1xudmFyIFByb2ZpbGVyID0gUkVBQ1RfUFJPRklMRVJfVFlQRTtcbnZhciBTdHJpY3RNb2RlID0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRTtcbnZhciBTdXNwZW5zZSA9IFJFQUNUX1NVU1BFTlNFX1RZUEU7XG5cbnZhciBoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0FzeW5jTW9kZSA9IGZhbHNlO1xuXG4vLyBBc3luY01vZGUgc2hvdWxkIGJlIGRlcHJlY2F0ZWRcbmZ1bmN0aW9uIGlzQXN5bmNNb2RlKG9iamVjdCkge1xuICB7XG4gICAgaWYgKCFoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0FzeW5jTW9kZSkge1xuICAgICAgaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNBc3luY01vZGUgPSB0cnVlO1xuICAgICAgbG93UHJpb3JpdHlXYXJuaW5nJDEoZmFsc2UsICdUaGUgUmVhY3RJcy5pc0FzeW5jTW9kZSgpIGFsaWFzIGhhcyBiZWVuIGRlcHJlY2F0ZWQsICcgKyAnYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiBSZWFjdCAxNysuIFVwZGF0ZSB5b3VyIGNvZGUgdG8gdXNlICcgKyAnUmVhY3RJcy5pc0NvbmN1cnJlbnRNb2RlKCkgaW5zdGVhZC4gSXQgaGFzIHRoZSBleGFjdCBzYW1lIEFQSS4nKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGlzQ29uY3VycmVudE1vZGUob2JqZWN0KSB8fCB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfQVNZTkNfTU9ERV9UWVBFO1xufVxuZnVuY3Rpb24gaXNDb25jdXJyZW50TW9kZShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzQ29udGV4dENvbnN1bWVyKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0NPTlRFWFRfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzQ29udGV4dFByb3ZpZGVyKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1BST1ZJREVSX1RZUEU7XG59XG5mdW5jdGlvbiBpc0VsZW1lbnQob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0JyAmJiBvYmplY3QgIT09IG51bGwgJiYgb2JqZWN0LiQkdHlwZW9mID09PSBSRUFDVF9FTEVNRU5UX1RZUEU7XG59XG5mdW5jdGlvbiBpc0ZvcndhcmRSZWYob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzRnJhZ21lbnQob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfRlJBR01FTlRfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzTGF6eShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9MQVpZX1RZUEU7XG59XG5mdW5jdGlvbiBpc01lbW8ob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfTUVNT19UWVBFO1xufVxuZnVuY3Rpb24gaXNQb3J0YWwob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfUE9SVEFMX1RZUEU7XG59XG5mdW5jdGlvbiBpc1Byb2ZpbGVyKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1BST0ZJTEVSX1RZUEU7XG59XG5mdW5jdGlvbiBpc1N0cmljdE1vZGUob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzU3VzcGVuc2Uob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfU1VTUEVOU0VfVFlQRTtcbn1cblxuZXhwb3J0cy50eXBlT2YgPSB0eXBlT2Y7XG5leHBvcnRzLkFzeW5jTW9kZSA9IEFzeW5jTW9kZTtcbmV4cG9ydHMuQ29uY3VycmVudE1vZGUgPSBDb25jdXJyZW50TW9kZTtcbmV4cG9ydHMuQ29udGV4dENvbnN1bWVyID0gQ29udGV4dENvbnN1bWVyO1xuZXhwb3J0cy5Db250ZXh0UHJvdmlkZXIgPSBDb250ZXh0UHJvdmlkZXI7XG5leHBvcnRzLkVsZW1lbnQgPSBFbGVtZW50O1xuZXhwb3J0cy5Gb3J3YXJkUmVmID0gRm9yd2FyZFJlZjtcbmV4cG9ydHMuRnJhZ21lbnQgPSBGcmFnbWVudDtcbmV4cG9ydHMuTGF6eSA9IExhenk7XG5leHBvcnRzLk1lbW8gPSBNZW1vO1xuZXhwb3J0cy5Qb3J0YWwgPSBQb3J0YWw7XG5leHBvcnRzLlByb2ZpbGVyID0gUHJvZmlsZXI7XG5leHBvcnRzLlN0cmljdE1vZGUgPSBTdHJpY3RNb2RlO1xuZXhwb3J0cy5TdXNwZW5zZSA9IFN1c3BlbnNlO1xuZXhwb3J0cy5pc1ZhbGlkRWxlbWVudFR5cGUgPSBpc1ZhbGlkRWxlbWVudFR5cGU7XG5leHBvcnRzLmlzQXN5bmNNb2RlID0gaXNBc3luY01vZGU7XG5leHBvcnRzLmlzQ29uY3VycmVudE1vZGUgPSBpc0NvbmN1cnJlbnRNb2RlO1xuZXhwb3J0cy5pc0NvbnRleHRDb25zdW1lciA9IGlzQ29udGV4dENvbnN1bWVyO1xuZXhwb3J0cy5pc0NvbnRleHRQcm92aWRlciA9IGlzQ29udGV4dFByb3ZpZGVyO1xuZXhwb3J0cy5pc0VsZW1lbnQgPSBpc0VsZW1lbnQ7XG5leHBvcnRzLmlzRm9yd2FyZFJlZiA9IGlzRm9yd2FyZFJlZjtcbmV4cG9ydHMuaXNGcmFnbWVudCA9IGlzRnJhZ21lbnQ7XG5leHBvcnRzLmlzTGF6eSA9IGlzTGF6eTtcbmV4cG9ydHMuaXNNZW1vID0gaXNNZW1vO1xuZXhwb3J0cy5pc1BvcnRhbCA9IGlzUG9ydGFsO1xuZXhwb3J0cy5pc1Byb2ZpbGVyID0gaXNQcm9maWxlcjtcbmV4cG9ydHMuaXNTdHJpY3RNb2RlID0gaXNTdHJpY3RNb2RlO1xuZXhwb3J0cy5pc1N1c3BlbnNlID0gaXNTdXNwZW5zZTtcbiAgfSkoKTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC1pcy5wcm9kdWN0aW9uLm1pbi5qcycpO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC1pcy5kZXZlbG9wbWVudC5qcycpO1xufVxuIiwiLypcbm9iamVjdC1hc3NpZ25cbihjKSBTaW5kcmUgU29yaHVzXG5AbGljZW5zZSBNSVRcbiovXG5cbid1c2Ugc3RyaWN0Jztcbi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG52YXIgZ2V0T3duUHJvcGVydHlTeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcbnZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG52YXIgcHJvcElzRW51bWVyYWJsZSA9IE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGU7XG5cbmZ1bmN0aW9uIHRvT2JqZWN0KHZhbCkge1xuXHRpZiAodmFsID09PSBudWxsIHx8IHZhbCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignT2JqZWN0LmFzc2lnbiBjYW5ub3QgYmUgY2FsbGVkIHdpdGggbnVsbCBvciB1bmRlZmluZWQnKTtcblx0fVxuXG5cdHJldHVybiBPYmplY3QodmFsKTtcbn1cblxuZnVuY3Rpb24gc2hvdWxkVXNlTmF0aXZlKCkge1xuXHR0cnkge1xuXHRcdGlmICghT2JqZWN0LmFzc2lnbikge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIERldGVjdCBidWdneSBwcm9wZXJ0eSBlbnVtZXJhdGlvbiBvcmRlciBpbiBvbGRlciBWOCB2ZXJzaW9ucy5cblxuXHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTQxMThcblx0XHR2YXIgdGVzdDEgPSBuZXcgU3RyaW5nKCdhYmMnKTsgIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tbmV3LXdyYXBwZXJzXG5cdFx0dGVzdDFbNV0gPSAnZGUnO1xuXHRcdGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0ZXN0MSlbMF0gPT09ICc1Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTMwNTZcblx0XHR2YXIgdGVzdDIgPSB7fTtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IDEwOyBpKyspIHtcblx0XHRcdHRlc3QyWydfJyArIFN0cmluZy5mcm9tQ2hhckNvZGUoaSldID0gaTtcblx0XHR9XG5cdFx0dmFyIG9yZGVyMiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRlc3QyKS5tYXAoZnVuY3Rpb24gKG4pIHtcblx0XHRcdHJldHVybiB0ZXN0MltuXTtcblx0XHR9KTtcblx0XHRpZiAob3JkZXIyLmpvaW4oJycpICE9PSAnMDEyMzQ1Njc4OScpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0zMDU2XG5cdFx0dmFyIHRlc3QzID0ge307XG5cdFx0J2FiY2RlZmdoaWprbG1ub3BxcnN0Jy5zcGxpdCgnJykuZm9yRWFjaChmdW5jdGlvbiAobGV0dGVyKSB7XG5cdFx0XHR0ZXN0M1tsZXR0ZXJdID0gbGV0dGVyO1xuXHRcdH0pO1xuXHRcdGlmIChPYmplY3Qua2V5cyhPYmplY3QuYXNzaWduKHt9LCB0ZXN0MykpLmpvaW4oJycpICE9PVxuXHRcdFx0XHQnYWJjZGVmZ2hpamtsbW5vcHFyc3QnKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRydWU7XG5cdH0gY2F0Y2ggKGVycikge1xuXHRcdC8vIFdlIGRvbid0IGV4cGVjdCBhbnkgb2YgdGhlIGFib3ZlIHRvIHRocm93LCBidXQgYmV0dGVyIHRvIGJlIHNhZmUuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2hvdWxkVXNlTmF0aXZlKCkgPyBPYmplY3QuYXNzaWduIDogZnVuY3Rpb24gKHRhcmdldCwgc291cmNlKSB7XG5cdHZhciBmcm9tO1xuXHR2YXIgdG8gPSB0b09iamVjdCh0YXJnZXQpO1xuXHR2YXIgc3ltYm9scztcblxuXHRmb3IgKHZhciBzID0gMTsgcyA8IGFyZ3VtZW50cy5sZW5ndGg7IHMrKykge1xuXHRcdGZyb20gPSBPYmplY3QoYXJndW1lbnRzW3NdKTtcblxuXHRcdGZvciAodmFyIGtleSBpbiBmcm9tKSB7XG5cdFx0XHRpZiAoaGFzT3duUHJvcGVydHkuY2FsbChmcm9tLCBrZXkpKSB7XG5cdFx0XHRcdHRvW2tleV0gPSBmcm9tW2tleV07XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKGdldE93blByb3BlcnR5U3ltYm9scykge1xuXHRcdFx0c3ltYm9scyA9IGdldE93blByb3BlcnR5U3ltYm9scyhmcm9tKTtcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3ltYm9scy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRpZiAocHJvcElzRW51bWVyYWJsZS5jYWxsKGZyb20sIHN5bWJvbHNbaV0pKSB7XG5cdFx0XHRcdFx0dG9bc3ltYm9sc1tpXV0gPSBmcm9tW3N5bWJvbHNbaV1dO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHRvO1xufTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgUmVhY3RQcm9wVHlwZXNTZWNyZXQgPSAnU0VDUkVUX0RPX05PVF9QQVNTX1RISVNfT1JfWU9VX1dJTExfQkVfRklSRUQnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0UHJvcFR5cGVzU2VjcmV0O1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBwcmludFdhcm5pbmcgPSBmdW5jdGlvbigpIHt9O1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICB2YXIgUmVhY3RQcm9wVHlwZXNTZWNyZXQgPSByZXF1aXJlKCcuL2xpYi9SZWFjdFByb3BUeXBlc1NlY3JldCcpO1xuICB2YXIgbG9nZ2VkVHlwZUZhaWx1cmVzID0ge307XG4gIHZhciBoYXMgPSBGdW5jdGlvbi5jYWxsLmJpbmQoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSk7XG5cbiAgcHJpbnRXYXJuaW5nID0gZnVuY3Rpb24odGV4dCkge1xuICAgIHZhciBtZXNzYWdlID0gJ1dhcm5pbmc6ICcgKyB0ZXh0O1xuICAgIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IobWVzc2FnZSk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAvLyAtLS0gV2VsY29tZSB0byBkZWJ1Z2dpbmcgUmVhY3QgLS0tXG4gICAgICAvLyBUaGlzIGVycm9yIHdhcyB0aHJvd24gYXMgYSBjb252ZW5pZW5jZSBzbyB0aGF0IHlvdSBjYW4gdXNlIHRoaXMgc3RhY2tcbiAgICAgIC8vIHRvIGZpbmQgdGhlIGNhbGxzaXRlIHRoYXQgY2F1c2VkIHRoaXMgd2FybmluZyB0byBmaXJlLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgIH0gY2F0Y2ggKHgpIHt9XG4gIH07XG59XG5cbi8qKlxuICogQXNzZXJ0IHRoYXQgdGhlIHZhbHVlcyBtYXRjaCB3aXRoIHRoZSB0eXBlIHNwZWNzLlxuICogRXJyb3IgbWVzc2FnZXMgYXJlIG1lbW9yaXplZCBhbmQgd2lsbCBvbmx5IGJlIHNob3duIG9uY2UuXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IHR5cGVTcGVjcyBNYXAgb2YgbmFtZSB0byBhIFJlYWN0UHJvcFR5cGVcbiAqIEBwYXJhbSB7b2JqZWN0fSB2YWx1ZXMgUnVudGltZSB2YWx1ZXMgdGhhdCBuZWVkIHRvIGJlIHR5cGUtY2hlY2tlZFxuICogQHBhcmFtIHtzdHJpbmd9IGxvY2F0aW9uIGUuZy4gXCJwcm9wXCIsIFwiY29udGV4dFwiLCBcImNoaWxkIGNvbnRleHRcIlxuICogQHBhcmFtIHtzdHJpbmd9IGNvbXBvbmVudE5hbWUgTmFtZSBvZiB0aGUgY29tcG9uZW50IGZvciBlcnJvciBtZXNzYWdlcy5cbiAqIEBwYXJhbSB7P0Z1bmN0aW9ufSBnZXRTdGFjayBSZXR1cm5zIHRoZSBjb21wb25lbnQgc3RhY2suXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBjaGVja1Byb3BUeXBlcyh0eXBlU3BlY3MsIHZhbHVlcywgbG9jYXRpb24sIGNvbXBvbmVudE5hbWUsIGdldFN0YWNrKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgZm9yICh2YXIgdHlwZVNwZWNOYW1lIGluIHR5cGVTcGVjcykge1xuICAgICAgaWYgKGhhcyh0eXBlU3BlY3MsIHR5cGVTcGVjTmFtZSkpIHtcbiAgICAgICAgdmFyIGVycm9yO1xuICAgICAgICAvLyBQcm9wIHR5cGUgdmFsaWRhdGlvbiBtYXkgdGhyb3cuIEluIGNhc2UgdGhleSBkbywgd2UgZG9uJ3Qgd2FudCB0b1xuICAgICAgICAvLyBmYWlsIHRoZSByZW5kZXIgcGhhc2Ugd2hlcmUgaXQgZGlkbid0IGZhaWwgYmVmb3JlLiBTbyB3ZSBsb2cgaXQuXG4gICAgICAgIC8vIEFmdGVyIHRoZXNlIGhhdmUgYmVlbiBjbGVhbmVkIHVwLCB3ZSdsbCBsZXQgdGhlbSB0aHJvdy5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIGlzIGludGVudGlvbmFsbHkgYW4gaW52YXJpYW50IHRoYXQgZ2V0cyBjYXVnaHQuIEl0J3MgdGhlIHNhbWVcbiAgICAgICAgICAvLyBiZWhhdmlvciBhcyB3aXRob3V0IHRoaXMgc3RhdGVtZW50IGV4Y2VwdCB3aXRoIGEgYmV0dGVyIG1lc3NhZ2UuXG4gICAgICAgICAgaWYgKHR5cGVvZiB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgdmFyIGVyciA9IEVycm9yKFxuICAgICAgICAgICAgICAoY29tcG9uZW50TmFtZSB8fCAnUmVhY3QgY2xhc3MnKSArICc6ICcgKyBsb2NhdGlvbiArICcgdHlwZSBgJyArIHR5cGVTcGVjTmFtZSArICdgIGlzIGludmFsaWQ7ICcgK1xuICAgICAgICAgICAgICAnaXQgbXVzdCBiZSBhIGZ1bmN0aW9uLCB1c3VhbGx5IGZyb20gdGhlIGBwcm9wLXR5cGVzYCBwYWNrYWdlLCBidXQgcmVjZWl2ZWQgYCcgKyB0eXBlb2YgdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0gKyAnYC4nXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgZXJyLm5hbWUgPSAnSW52YXJpYW50IFZpb2xhdGlvbic7XG4gICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVycm9yID0gdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0odmFsdWVzLCB0eXBlU3BlY05hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBudWxsLCBSZWFjdFByb3BUeXBlc1NlY3JldCk7XG4gICAgICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICAgICAgZXJyb3IgPSBleDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZXJyb3IgJiYgIShlcnJvciBpbnN0YW5jZW9mIEVycm9yKSkge1xuICAgICAgICAgIHByaW50V2FybmluZyhcbiAgICAgICAgICAgIChjb21wb25lbnROYW1lIHx8ICdSZWFjdCBjbGFzcycpICsgJzogdHlwZSBzcGVjaWZpY2F0aW9uIG9mICcgK1xuICAgICAgICAgICAgbG9jYXRpb24gKyAnIGAnICsgdHlwZVNwZWNOYW1lICsgJ2AgaXMgaW52YWxpZDsgdGhlIHR5cGUgY2hlY2tlciAnICtcbiAgICAgICAgICAgICdmdW5jdGlvbiBtdXN0IHJldHVybiBgbnVsbGAgb3IgYW4gYEVycm9yYCBidXQgcmV0dXJuZWQgYSAnICsgdHlwZW9mIGVycm9yICsgJy4gJyArXG4gICAgICAgICAgICAnWW91IG1heSBoYXZlIGZvcmdvdHRlbiB0byBwYXNzIGFuIGFyZ3VtZW50IHRvIHRoZSB0eXBlIGNoZWNrZXIgJyArXG4gICAgICAgICAgICAnY3JlYXRvciAoYXJyYXlPZiwgaW5zdGFuY2VPZiwgb2JqZWN0T2YsIG9uZU9mLCBvbmVPZlR5cGUsIGFuZCAnICtcbiAgICAgICAgICAgICdzaGFwZSBhbGwgcmVxdWlyZSBhbiBhcmd1bWVudCkuJ1xuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IgJiYgIShlcnJvci5tZXNzYWdlIGluIGxvZ2dlZFR5cGVGYWlsdXJlcykpIHtcbiAgICAgICAgICAvLyBPbmx5IG1vbml0b3IgdGhpcyBmYWlsdXJlIG9uY2UgYmVjYXVzZSB0aGVyZSB0ZW5kcyB0byBiZSBhIGxvdCBvZiB0aGVcbiAgICAgICAgICAvLyBzYW1lIGVycm9yLlxuICAgICAgICAgIGxvZ2dlZFR5cGVGYWlsdXJlc1tlcnJvci5tZXNzYWdlXSA9IHRydWU7XG5cbiAgICAgICAgICB2YXIgc3RhY2sgPSBnZXRTdGFjayA/IGdldFN0YWNrKCkgOiAnJztcblxuICAgICAgICAgIHByaW50V2FybmluZyhcbiAgICAgICAgICAgICdGYWlsZWQgJyArIGxvY2F0aW9uICsgJyB0eXBlOiAnICsgZXJyb3IubWVzc2FnZSArIChzdGFjayAhPSBudWxsID8gc3RhY2sgOiAnJylcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogUmVzZXRzIHdhcm5pbmcgY2FjaGUgd2hlbiB0ZXN0aW5nLlxuICpcbiAqIEBwcml2YXRlXG4gKi9cbmNoZWNrUHJvcFR5cGVzLnJlc2V0V2FybmluZ0NhY2hlID0gZnVuY3Rpb24oKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgbG9nZ2VkVHlwZUZhaWx1cmVzID0ge307XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjaGVja1Byb3BUeXBlcztcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgUmVhY3RJcyA9IHJlcXVpcmUoJ3JlYWN0LWlzJyk7XG52YXIgYXNzaWduID0gcmVxdWlyZSgnb2JqZWN0LWFzc2lnbicpO1xuXG52YXIgUmVhY3RQcm9wVHlwZXNTZWNyZXQgPSByZXF1aXJlKCcuL2xpYi9SZWFjdFByb3BUeXBlc1NlY3JldCcpO1xudmFyIGNoZWNrUHJvcFR5cGVzID0gcmVxdWlyZSgnLi9jaGVja1Byb3BUeXBlcycpO1xuXG52YXIgaGFzID0gRnVuY3Rpb24uY2FsbC5iaW5kKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkpO1xudmFyIHByaW50V2FybmluZyA9IGZ1bmN0aW9uKCkge307XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHByaW50V2FybmluZyA9IGZ1bmN0aW9uKHRleHQpIHtcbiAgICB2YXIgbWVzc2FnZSA9ICdXYXJuaW5nOiAnICsgdGV4dDtcbiAgICBpZiAodHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25zb2xlLmVycm9yKG1lc3NhZ2UpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgLy8gLS0tIFdlbGNvbWUgdG8gZGVidWdnaW5nIFJlYWN0IC0tLVxuICAgICAgLy8gVGhpcyBlcnJvciB3YXMgdGhyb3duIGFzIGEgY29udmVuaWVuY2Ugc28gdGhhdCB5b3UgY2FuIHVzZSB0aGlzIHN0YWNrXG4gICAgICAvLyB0byBmaW5kIHRoZSBjYWxsc2l0ZSB0aGF0IGNhdXNlZCB0aGlzIHdhcm5pbmcgdG8gZmlyZS5cbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICB9IGNhdGNoICh4KSB7fVxuICB9O1xufVxuXG5mdW5jdGlvbiBlbXB0eUZ1bmN0aW9uVGhhdFJldHVybnNOdWxsKCkge1xuICByZXR1cm4gbnVsbDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpc1ZhbGlkRWxlbWVudCwgdGhyb3dPbkRpcmVjdEFjY2Vzcykge1xuICAvKiBnbG9iYWwgU3ltYm9sICovXG4gIHZhciBJVEVSQVRPUl9TWU1CT0wgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC5pdGVyYXRvcjtcbiAgdmFyIEZBVVhfSVRFUkFUT1JfU1lNQk9MID0gJ0BAaXRlcmF0b3InOyAvLyBCZWZvcmUgU3ltYm9sIHNwZWMuXG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGl0ZXJhdG9yIG1ldGhvZCBmdW5jdGlvbiBjb250YWluZWQgb24gdGhlIGl0ZXJhYmxlIG9iamVjdC5cbiAgICpcbiAgICogQmUgc3VyZSB0byBpbnZva2UgdGhlIGZ1bmN0aW9uIHdpdGggdGhlIGl0ZXJhYmxlIGFzIGNvbnRleHQ6XG4gICAqXG4gICAqICAgICB2YXIgaXRlcmF0b3JGbiA9IGdldEl0ZXJhdG9yRm4obXlJdGVyYWJsZSk7XG4gICAqICAgICBpZiAoaXRlcmF0b3JGbikge1xuICAgKiAgICAgICB2YXIgaXRlcmF0b3IgPSBpdGVyYXRvckZuLmNhbGwobXlJdGVyYWJsZSk7XG4gICAqICAgICAgIC4uLlxuICAgKiAgICAgfVxuICAgKlxuICAgKiBAcGFyYW0gez9vYmplY3R9IG1heWJlSXRlcmFibGVcbiAgICogQHJldHVybiB7P2Z1bmN0aW9ufVxuICAgKi9cbiAgZnVuY3Rpb24gZ2V0SXRlcmF0b3JGbihtYXliZUl0ZXJhYmxlKSB7XG4gICAgdmFyIGl0ZXJhdG9yRm4gPSBtYXliZUl0ZXJhYmxlICYmIChJVEVSQVRPUl9TWU1CT0wgJiYgbWF5YmVJdGVyYWJsZVtJVEVSQVRPUl9TWU1CT0xdIHx8IG1heWJlSXRlcmFibGVbRkFVWF9JVEVSQVRPUl9TWU1CT0xdKTtcbiAgICBpZiAodHlwZW9mIGl0ZXJhdG9yRm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiBpdGVyYXRvckZuO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDb2xsZWN0aW9uIG9mIG1ldGhvZHMgdGhhdCBhbGxvdyBkZWNsYXJhdGlvbiBhbmQgdmFsaWRhdGlvbiBvZiBwcm9wcyB0aGF0IGFyZVxuICAgKiBzdXBwbGllZCB0byBSZWFjdCBjb21wb25lbnRzLiBFeGFtcGxlIHVzYWdlOlxuICAgKlxuICAgKiAgIHZhciBQcm9wcyA9IHJlcXVpcmUoJ1JlYWN0UHJvcFR5cGVzJyk7XG4gICAqICAgdmFyIE15QXJ0aWNsZSA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgICogICAgIHByb3BUeXBlczoge1xuICAgKiAgICAgICAvLyBBbiBvcHRpb25hbCBzdHJpbmcgcHJvcCBuYW1lZCBcImRlc2NyaXB0aW9uXCIuXG4gICAqICAgICAgIGRlc2NyaXB0aW9uOiBQcm9wcy5zdHJpbmcsXG4gICAqXG4gICAqICAgICAgIC8vIEEgcmVxdWlyZWQgZW51bSBwcm9wIG5hbWVkIFwiY2F0ZWdvcnlcIi5cbiAgICogICAgICAgY2F0ZWdvcnk6IFByb3BzLm9uZU9mKFsnTmV3cycsJ1Bob3RvcyddKS5pc1JlcXVpcmVkLFxuICAgKlxuICAgKiAgICAgICAvLyBBIHByb3AgbmFtZWQgXCJkaWFsb2dcIiB0aGF0IHJlcXVpcmVzIGFuIGluc3RhbmNlIG9mIERpYWxvZy5cbiAgICogICAgICAgZGlhbG9nOiBQcm9wcy5pbnN0YW5jZU9mKERpYWxvZykuaXNSZXF1aXJlZFxuICAgKiAgICAgfSxcbiAgICogICAgIHJlbmRlcjogZnVuY3Rpb24oKSB7IC4uLiB9XG4gICAqICAgfSk7XG4gICAqXG4gICAqIEEgbW9yZSBmb3JtYWwgc3BlY2lmaWNhdGlvbiBvZiBob3cgdGhlc2UgbWV0aG9kcyBhcmUgdXNlZDpcbiAgICpcbiAgICogICB0eXBlIDo9IGFycmF5fGJvb2x8ZnVuY3xvYmplY3R8bnVtYmVyfHN0cmluZ3xvbmVPZihbLi4uXSl8aW5zdGFuY2VPZiguLi4pXG4gICAqICAgZGVjbCA6PSBSZWFjdFByb3BUeXBlcy57dHlwZX0oLmlzUmVxdWlyZWQpP1xuICAgKlxuICAgKiBFYWNoIGFuZCBldmVyeSBkZWNsYXJhdGlvbiBwcm9kdWNlcyBhIGZ1bmN0aW9uIHdpdGggdGhlIHNhbWUgc2lnbmF0dXJlLiBUaGlzXG4gICAqIGFsbG93cyB0aGUgY3JlYXRpb24gb2YgY3VzdG9tIHZhbGlkYXRpb24gZnVuY3Rpb25zLiBGb3IgZXhhbXBsZTpcbiAgICpcbiAgICogIHZhciBNeUxpbmsgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gICAqICAgIHByb3BUeXBlczoge1xuICAgKiAgICAgIC8vIEFuIG9wdGlvbmFsIHN0cmluZyBvciBVUkkgcHJvcCBuYW1lZCBcImhyZWZcIi5cbiAgICogICAgICBocmVmOiBmdW5jdGlvbihwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUpIHtcbiAgICogICAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAqICAgICAgICBpZiAocHJvcFZhbHVlICE9IG51bGwgJiYgdHlwZW9mIHByb3BWYWx1ZSAhPT0gJ3N0cmluZycgJiZcbiAgICogICAgICAgICAgICAhKHByb3BWYWx1ZSBpbnN0YW5jZW9mIFVSSSkpIHtcbiAgICogICAgICAgICAgcmV0dXJuIG5ldyBFcnJvcihcbiAgICogICAgICAgICAgICAnRXhwZWN0ZWQgYSBzdHJpbmcgb3IgYW4gVVJJIGZvciAnICsgcHJvcE5hbWUgKyAnIGluICcgK1xuICAgKiAgICAgICAgICAgIGNvbXBvbmVudE5hbWVcbiAgICogICAgICAgICAgKTtcbiAgICogICAgICAgIH1cbiAgICogICAgICB9XG4gICAqICAgIH0sXG4gICAqICAgIHJlbmRlcjogZnVuY3Rpb24oKSB7Li4ufVxuICAgKiAgfSk7XG4gICAqXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cblxuICB2YXIgQU5PTllNT1VTID0gJzw8YW5vbnltb3VzPj4nO1xuXG4gIC8vIEltcG9ydGFudCFcbiAgLy8gS2VlcCB0aGlzIGxpc3QgaW4gc3luYyB3aXRoIHByb2R1Y3Rpb24gdmVyc2lvbiBpbiBgLi9mYWN0b3J5V2l0aFRocm93aW5nU2hpbXMuanNgLlxuICB2YXIgUmVhY3RQcm9wVHlwZXMgPSB7XG4gICAgYXJyYXk6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdhcnJheScpLFxuICAgIGJvb2w6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdib29sZWFuJyksXG4gICAgZnVuYzogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ2Z1bmN0aW9uJyksXG4gICAgbnVtYmVyOiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignbnVtYmVyJyksXG4gICAgb2JqZWN0OiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignb2JqZWN0JyksXG4gICAgc3RyaW5nOiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignc3RyaW5nJyksXG4gICAgc3ltYm9sOiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignc3ltYm9sJyksXG5cbiAgICBhbnk6IGNyZWF0ZUFueVR5cGVDaGVja2VyKCksXG4gICAgYXJyYXlPZjogY3JlYXRlQXJyYXlPZlR5cGVDaGVja2VyLFxuICAgIGVsZW1lbnQ6IGNyZWF0ZUVsZW1lbnRUeXBlQ2hlY2tlcigpLFxuICAgIGVsZW1lbnRUeXBlOiBjcmVhdGVFbGVtZW50VHlwZVR5cGVDaGVja2VyKCksXG4gICAgaW5zdGFuY2VPZjogY3JlYXRlSW5zdGFuY2VUeXBlQ2hlY2tlcixcbiAgICBub2RlOiBjcmVhdGVOb2RlQ2hlY2tlcigpLFxuICAgIG9iamVjdE9mOiBjcmVhdGVPYmplY3RPZlR5cGVDaGVja2VyLFxuICAgIG9uZU9mOiBjcmVhdGVFbnVtVHlwZUNoZWNrZXIsXG4gICAgb25lT2ZUeXBlOiBjcmVhdGVVbmlvblR5cGVDaGVja2VyLFxuICAgIHNoYXBlOiBjcmVhdGVTaGFwZVR5cGVDaGVja2VyLFxuICAgIGV4YWN0OiBjcmVhdGVTdHJpY3RTaGFwZVR5cGVDaGVja2VyLFxuICB9O1xuXG4gIC8qKlxuICAgKiBpbmxpbmVkIE9iamVjdC5pcyBwb2x5ZmlsbCB0byBhdm9pZCByZXF1aXJpbmcgY29uc3VtZXJzIHNoaXAgdGhlaXIgb3duXG4gICAqIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL09iamVjdC9pc1xuICAgKi9cbiAgLyplc2xpbnQtZGlzYWJsZSBuby1zZWxmLWNvbXBhcmUqL1xuICBmdW5jdGlvbiBpcyh4LCB5KSB7XG4gICAgLy8gU2FtZVZhbHVlIGFsZ29yaXRobVxuICAgIGlmICh4ID09PSB5KSB7XG4gICAgICAvLyBTdGVwcyAxLTUsIDctMTBcbiAgICAgIC8vIFN0ZXBzIDYuYi02LmU6ICswICE9IC0wXG4gICAgICByZXR1cm4geCAhPT0gMCB8fCAxIC8geCA9PT0gMSAvIHk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFN0ZXAgNi5hOiBOYU4gPT0gTmFOXG4gICAgICByZXR1cm4geCAhPT0geCAmJiB5ICE9PSB5O1xuICAgIH1cbiAgfVxuICAvKmVzbGludC1lbmFibGUgbm8tc2VsZi1jb21wYXJlKi9cblxuICAvKipcbiAgICogV2UgdXNlIGFuIEVycm9yLWxpa2Ugb2JqZWN0IGZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5IGFzIHBlb3BsZSBtYXkgY2FsbFxuICAgKiBQcm9wVHlwZXMgZGlyZWN0bHkgYW5kIGluc3BlY3QgdGhlaXIgb3V0cHV0LiBIb3dldmVyLCB3ZSBkb24ndCB1c2UgcmVhbFxuICAgKiBFcnJvcnMgYW55bW9yZS4gV2UgZG9uJ3QgaW5zcGVjdCB0aGVpciBzdGFjayBhbnl3YXksIGFuZCBjcmVhdGluZyB0aGVtXG4gICAqIGlzIHByb2hpYml0aXZlbHkgZXhwZW5zaXZlIGlmIHRoZXkgYXJlIGNyZWF0ZWQgdG9vIG9mdGVuLCBzdWNoIGFzIHdoYXRcbiAgICogaGFwcGVucyBpbiBvbmVPZlR5cGUoKSBmb3IgYW55IHR5cGUgYmVmb3JlIHRoZSBvbmUgdGhhdCBtYXRjaGVkLlxuICAgKi9cbiAgZnVuY3Rpb24gUHJvcFR5cGVFcnJvcihtZXNzYWdlKSB7XG4gICAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcbiAgICB0aGlzLnN0YWNrID0gJyc7XG4gIH1cbiAgLy8gTWFrZSBgaW5zdGFuY2VvZiBFcnJvcmAgc3RpbGwgd29yayBmb3IgcmV0dXJuZWQgZXJyb3JzLlxuICBQcm9wVHlwZUVycm9yLnByb3RvdHlwZSA9IEVycm9yLnByb3RvdHlwZTtcblxuICBmdW5jdGlvbiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSkge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICB2YXIgbWFudWFsUHJvcFR5cGVDYWxsQ2FjaGUgPSB7fTtcbiAgICAgIHZhciBtYW51YWxQcm9wVHlwZVdhcm5pbmdDb3VudCA9IDA7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNoZWNrVHlwZShpc1JlcXVpcmVkLCBwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUsIHNlY3JldCkge1xuICAgICAgY29tcG9uZW50TmFtZSA9IGNvbXBvbmVudE5hbWUgfHwgQU5PTllNT1VTO1xuICAgICAgcHJvcEZ1bGxOYW1lID0gcHJvcEZ1bGxOYW1lIHx8IHByb3BOYW1lO1xuXG4gICAgICBpZiAoc2VjcmV0ICE9PSBSZWFjdFByb3BUeXBlc1NlY3JldCkge1xuICAgICAgICBpZiAodGhyb3dPbkRpcmVjdEFjY2Vzcykge1xuICAgICAgICAgIC8vIE5ldyBiZWhhdmlvciBvbmx5IGZvciB1c2VycyBvZiBgcHJvcC10eXBlc2AgcGFja2FnZVxuICAgICAgICAgIHZhciBlcnIgPSBuZXcgRXJyb3IoXG4gICAgICAgICAgICAnQ2FsbGluZyBQcm9wVHlwZXMgdmFsaWRhdG9ycyBkaXJlY3RseSBpcyBub3Qgc3VwcG9ydGVkIGJ5IHRoZSBgcHJvcC10eXBlc2AgcGFja2FnZS4gJyArXG4gICAgICAgICAgICAnVXNlIGBQcm9wVHlwZXMuY2hlY2tQcm9wVHlwZXMoKWAgdG8gY2FsbCB0aGVtLiAnICtcbiAgICAgICAgICAgICdSZWFkIG1vcmUgYXQgaHR0cDovL2ZiLm1lL3VzZS1jaGVjay1wcm9wLXR5cGVzJ1xuICAgICAgICAgICk7XG4gICAgICAgICAgZXJyLm5hbWUgPSAnSW52YXJpYW50IFZpb2xhdGlvbic7XG4gICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICB9IGVsc2UgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgdHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgLy8gT2xkIGJlaGF2aW9yIGZvciBwZW9wbGUgdXNpbmcgUmVhY3QuUHJvcFR5cGVzXG4gICAgICAgICAgdmFyIGNhY2hlS2V5ID0gY29tcG9uZW50TmFtZSArICc6JyArIHByb3BOYW1lO1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICFtYW51YWxQcm9wVHlwZUNhbGxDYWNoZVtjYWNoZUtleV0gJiZcbiAgICAgICAgICAgIC8vIEF2b2lkIHNwYW1taW5nIHRoZSBjb25zb2xlIGJlY2F1c2UgdGhleSBhcmUgb2Z0ZW4gbm90IGFjdGlvbmFibGUgZXhjZXB0IGZvciBsaWIgYXV0aG9yc1xuICAgICAgICAgICAgbWFudWFsUHJvcFR5cGVXYXJuaW5nQ291bnQgPCAzXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICBwcmludFdhcm5pbmcoXG4gICAgICAgICAgICAgICdZb3UgYXJlIG1hbnVhbGx5IGNhbGxpbmcgYSBSZWFjdC5Qcm9wVHlwZXMgdmFsaWRhdGlvbiAnICtcbiAgICAgICAgICAgICAgJ2Z1bmN0aW9uIGZvciB0aGUgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBwcm9wIG9uIGAnICsgY29tcG9uZW50TmFtZSAgKyAnYC4gVGhpcyBpcyBkZXByZWNhdGVkICcgK1xuICAgICAgICAgICAgICAnYW5kIHdpbGwgdGhyb3cgaW4gdGhlIHN0YW5kYWxvbmUgYHByb3AtdHlwZXNgIHBhY2thZ2UuICcgK1xuICAgICAgICAgICAgICAnWW91IG1heSBiZSBzZWVpbmcgdGhpcyB3YXJuaW5nIGR1ZSB0byBhIHRoaXJkLXBhcnR5IFByb3BUeXBlcyAnICtcbiAgICAgICAgICAgICAgJ2xpYnJhcnkuIFNlZSBodHRwczovL2ZiLm1lL3JlYWN0LXdhcm5pbmctZG9udC1jYWxsLXByb3B0eXBlcyAnICsgJ2ZvciBkZXRhaWxzLidcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBtYW51YWxQcm9wVHlwZUNhbGxDYWNoZVtjYWNoZUtleV0gPSB0cnVlO1xuICAgICAgICAgICAgbWFudWFsUHJvcFR5cGVXYXJuaW5nQ291bnQrKztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChwcm9wc1twcm9wTmFtZV0gPT0gbnVsbCkge1xuICAgICAgICBpZiAoaXNSZXF1aXJlZCkge1xuICAgICAgICAgIGlmIChwcm9wc1twcm9wTmFtZV0gPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignVGhlICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBpcyBtYXJrZWQgYXMgcmVxdWlyZWQgJyArICgnaW4gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGJ1dCBpdHMgdmFsdWUgaXMgYG51bGxgLicpKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdUaGUgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIGlzIG1hcmtlZCBhcyByZXF1aXJlZCBpbiAnICsgKCdgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgYnV0IGl0cyB2YWx1ZSBpcyBgdW5kZWZpbmVkYC4nKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgY2hhaW5lZENoZWNrVHlwZSA9IGNoZWNrVHlwZS5iaW5kKG51bGwsIGZhbHNlKTtcbiAgICBjaGFpbmVkQ2hlY2tUeXBlLmlzUmVxdWlyZWQgPSBjaGVja1R5cGUuYmluZChudWxsLCB0cnVlKTtcblxuICAgIHJldHVybiBjaGFpbmVkQ2hlY2tUeXBlO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoZXhwZWN0ZWRUeXBlKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lLCBzZWNyZXQpIHtcbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgaWYgKHByb3BUeXBlICE9PSBleHBlY3RlZFR5cGUpIHtcbiAgICAgICAgLy8gYHByb3BWYWx1ZWAgYmVpbmcgaW5zdGFuY2Ugb2YsIHNheSwgZGF0ZS9yZWdleHAsIHBhc3MgdGhlICdvYmplY3QnXG4gICAgICAgIC8vIGNoZWNrLCBidXQgd2UgY2FuIG9mZmVyIGEgbW9yZSBwcmVjaXNlIGVycm9yIG1lc3NhZ2UgaGVyZSByYXRoZXIgdGhhblxuICAgICAgICAvLyAnb2YgdHlwZSBgb2JqZWN0YCcuXG4gICAgICAgIHZhciBwcmVjaXNlVHlwZSA9IGdldFByZWNpc2VUeXBlKHByb3BWYWx1ZSk7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgcHJlY2lzZVR5cGUgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgJykgKyAoJ2AnICsgZXhwZWN0ZWRUeXBlICsgJ2AuJykpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVBbnlUeXBlQ2hlY2tlcigpIHtcbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIoZW1wdHlGdW5jdGlvblRoYXRSZXR1cm5zTnVsbCk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVBcnJheU9mVHlwZUNoZWNrZXIodHlwZUNoZWNrZXIpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIGlmICh0eXBlb2YgdHlwZUNoZWNrZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdQcm9wZXJ0eSBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIGNvbXBvbmVudCBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCBoYXMgaW52YWxpZCBQcm9wVHlwZSBub3RhdGlvbiBpbnNpZGUgYXJyYXlPZi4nKTtcbiAgICAgIH1cbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICBpZiAoIUFycmF5LmlzQXJyYXkocHJvcFZhbHVlKSkge1xuICAgICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBwcm9wVHlwZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBhbiBhcnJheS4nKSk7XG4gICAgICB9XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BWYWx1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgZXJyb3IgPSB0eXBlQ2hlY2tlcihwcm9wVmFsdWUsIGksIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUgKyAnWycgKyBpICsgJ10nLCBSZWFjdFByb3BUeXBlc1NlY3JldCk7XG4gICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnRUeXBlQ2hlY2tlcigpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICBpZiAoIWlzVmFsaWRFbGVtZW50KHByb3BWYWx1ZSkpIHtcbiAgICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgcHJvcFR5cGUgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYSBzaW5nbGUgUmVhY3RFbGVtZW50LicpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlRWxlbWVudFR5cGVUeXBlQ2hlY2tlcigpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICBpZiAoIVJlYWN0SXMuaXNWYWxpZEVsZW1lbnRUeXBlKHByb3BWYWx1ZSkpIHtcbiAgICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgcHJvcFR5cGUgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYSBzaW5nbGUgUmVhY3RFbGVtZW50IHR5cGUuJykpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVJbnN0YW5jZVR5cGVDaGVja2VyKGV4cGVjdGVkQ2xhc3MpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIGlmICghKHByb3BzW3Byb3BOYW1lXSBpbnN0YW5jZW9mIGV4cGVjdGVkQ2xhc3MpKSB7XG4gICAgICAgIHZhciBleHBlY3RlZENsYXNzTmFtZSA9IGV4cGVjdGVkQ2xhc3MubmFtZSB8fCBBTk9OWU1PVVM7XG4gICAgICAgIHZhciBhY3R1YWxDbGFzc05hbWUgPSBnZXRDbGFzc05hbWUocHJvcHNbcHJvcE5hbWVdKTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgYWN0dWFsQ2xhc3NOYW1lICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkICcpICsgKCdpbnN0YW5jZSBvZiBgJyArIGV4cGVjdGVkQ2xhc3NOYW1lICsgJ2AuJykpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVFbnVtVHlwZUNoZWNrZXIoZXhwZWN0ZWRWYWx1ZXMpIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoZXhwZWN0ZWRWYWx1ZXMpKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICBwcmludFdhcm5pbmcoXG4gICAgICAgICAgICAnSW52YWxpZCBhcmd1bWVudHMgc3VwcGxpZWQgdG8gb25lT2YsIGV4cGVjdGVkIGFuIGFycmF5LCBnb3QgJyArIGFyZ3VtZW50cy5sZW5ndGggKyAnIGFyZ3VtZW50cy4gJyArXG4gICAgICAgICAgICAnQSBjb21tb24gbWlzdGFrZSBpcyB0byB3cml0ZSBvbmVPZih4LCB5LCB6KSBpbnN0ZWFkIG9mIG9uZU9mKFt4LCB5LCB6XSkuJ1xuICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcHJpbnRXYXJuaW5nKCdJbnZhbGlkIGFyZ3VtZW50IHN1cHBsaWVkIHRvIG9uZU9mLCBleHBlY3RlZCBhbiBhcnJheS4nKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGVtcHR5RnVuY3Rpb25UaGF0UmV0dXJuc051bGw7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBleHBlY3RlZFZhbHVlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoaXMocHJvcFZhbHVlLCBleHBlY3RlZFZhbHVlc1tpXSkpIHtcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB2YXIgdmFsdWVzU3RyaW5nID0gSlNPTi5zdHJpbmdpZnkoZXhwZWN0ZWRWYWx1ZXMsIGZ1bmN0aW9uIHJlcGxhY2VyKGtleSwgdmFsdWUpIHtcbiAgICAgICAgaWYgKGdldFByb3BUeXBlKHZhbHVlKSA9PT0gJ3N5bWJvbCcpIHtcbiAgICAgICAgICByZXR1cm4gU3RyaW5nKHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdmFsdWUgYCcgKyBTdHJpbmcocHJvcFZhbHVlKSArICdgICcgKyAoJ3N1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBvbmUgb2YgJyArIHZhbHVlc1N0cmluZyArICcuJykpO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlT2JqZWN0T2ZUeXBlQ2hlY2tlcih0eXBlQ2hlY2tlcikge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgaWYgKHR5cGVvZiB0eXBlQ2hlY2tlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ1Byb3BlcnR5IGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgY29tcG9uZW50IGAnICsgY29tcG9uZW50TmFtZSArICdgIGhhcyBpbnZhbGlkIFByb3BUeXBlIG5vdGF0aW9uIGluc2lkZSBvYmplY3RPZi4nKTtcbiAgICAgIH1cbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgaWYgKHByb3BUeXBlICE9PSAnb2JqZWN0Jykge1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBwcm9wVHlwZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBhbiBvYmplY3QuJykpO1xuICAgICAgfVxuICAgICAgZm9yICh2YXIga2V5IGluIHByb3BWYWx1ZSkge1xuICAgICAgICBpZiAoaGFzKHByb3BWYWx1ZSwga2V5KSkge1xuICAgICAgICAgIHZhciBlcnJvciA9IHR5cGVDaGVja2VyKHByb3BWYWx1ZSwga2V5LCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lICsgJy4nICsga2V5LCBSZWFjdFByb3BUeXBlc1NlY3JldCk7XG4gICAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgICAgIHJldHVybiBlcnJvcjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlVW5pb25UeXBlQ2hlY2tlcihhcnJheU9mVHlwZUNoZWNrZXJzKSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGFycmF5T2ZUeXBlQ2hlY2tlcnMpKSB7XG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gcHJpbnRXYXJuaW5nKCdJbnZhbGlkIGFyZ3VtZW50IHN1cHBsaWVkIHRvIG9uZU9mVHlwZSwgZXhwZWN0ZWQgYW4gaW5zdGFuY2Ugb2YgYXJyYXkuJykgOiB2b2lkIDA7XG4gICAgICByZXR1cm4gZW1wdHlGdW5jdGlvblRoYXRSZXR1cm5zTnVsbDtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFycmF5T2ZUeXBlQ2hlY2tlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBjaGVja2VyID0gYXJyYXlPZlR5cGVDaGVja2Vyc1tpXTtcbiAgICAgIGlmICh0eXBlb2YgY2hlY2tlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBwcmludFdhcm5pbmcoXG4gICAgICAgICAgJ0ludmFsaWQgYXJndW1lbnQgc3VwcGxpZWQgdG8gb25lT2ZUeXBlLiBFeHBlY3RlZCBhbiBhcnJheSBvZiBjaGVjayBmdW5jdGlvbnMsIGJ1dCAnICtcbiAgICAgICAgICAncmVjZWl2ZWQgJyArIGdldFBvc3RmaXhGb3JUeXBlV2FybmluZyhjaGVja2VyKSArICcgYXQgaW5kZXggJyArIGkgKyAnLidcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIGVtcHR5RnVuY3Rpb25UaGF0UmV0dXJuc051bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFycmF5T2ZUeXBlQ2hlY2tlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGNoZWNrZXIgPSBhcnJheU9mVHlwZUNoZWNrZXJzW2ldO1xuICAgICAgICBpZiAoY2hlY2tlcihwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUsIFJlYWN0UHJvcFR5cGVzU2VjcmV0KSA9PSBudWxsKSB7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBzdXBwbGllZCB0byAnICsgKCdgJyArIGNvbXBvbmVudE5hbWUgKyAnYC4nKSk7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVOb2RlQ2hlY2tlcigpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIGlmICghaXNOb2RlKHByb3BzW3Byb3BOYW1lXSkpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBzdXBwbGllZCB0byAnICsgKCdgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYSBSZWFjdE5vZGUuJykpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVTaGFwZVR5cGVDaGVja2VyKHNoYXBlVHlwZXMpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgaWYgKHByb3BUeXBlICE9PSAnb2JqZWN0Jykge1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgYCcgKyBwcm9wVHlwZSArICdgICcgKyAoJ3N1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBgb2JqZWN0YC4nKSk7XG4gICAgICB9XG4gICAgICBmb3IgKHZhciBrZXkgaW4gc2hhcGVUeXBlcykge1xuICAgICAgICB2YXIgY2hlY2tlciA9IHNoYXBlVHlwZXNba2V5XTtcbiAgICAgICAgaWYgKCFjaGVja2VyKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGVycm9yID0gY2hlY2tlcihwcm9wVmFsdWUsIGtleSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSArICcuJyArIGtleSwgUmVhY3RQcm9wVHlwZXNTZWNyZXQpO1xuICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlU3RyaWN0U2hhcGVUeXBlQ2hlY2tlcihzaGFwZVR5cGVzKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgIGlmIChwcm9wVHlwZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlIGAnICsgcHJvcFR5cGUgKyAnYCAnICsgKCdzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYG9iamVjdGAuJykpO1xuICAgICAgfVxuICAgICAgLy8gV2UgbmVlZCB0byBjaGVjayBhbGwga2V5cyBpbiBjYXNlIHNvbWUgYXJlIHJlcXVpcmVkIGJ1dCBtaXNzaW5nIGZyb21cbiAgICAgIC8vIHByb3BzLlxuICAgICAgdmFyIGFsbEtleXMgPSBhc3NpZ24oe30sIHByb3BzW3Byb3BOYW1lXSwgc2hhcGVUeXBlcyk7XG4gICAgICBmb3IgKHZhciBrZXkgaW4gYWxsS2V5cykge1xuICAgICAgICB2YXIgY2hlY2tlciA9IHNoYXBlVHlwZXNba2V5XTtcbiAgICAgICAgaWYgKCFjaGVja2VyKSB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKFxuICAgICAgICAgICAgJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIGtleSBgJyArIGtleSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLicgK1xuICAgICAgICAgICAgJ1xcbkJhZCBvYmplY3Q6ICcgKyBKU09OLnN0cmluZ2lmeShwcm9wc1twcm9wTmFtZV0sIG51bGwsICcgICcpICtcbiAgICAgICAgICAgICdcXG5WYWxpZCBrZXlzOiAnICsgIEpTT04uc3RyaW5naWZ5KE9iamVjdC5rZXlzKHNoYXBlVHlwZXMpLCBudWxsLCAnICAnKVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGVycm9yID0gY2hlY2tlcihwcm9wVmFsdWUsIGtleSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSArICcuJyArIGtleSwgUmVhY3RQcm9wVHlwZXNTZWNyZXQpO1xuICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBpc05vZGUocHJvcFZhbHVlKSB7XG4gICAgc3dpdGNoICh0eXBlb2YgcHJvcFZhbHVlKSB7XG4gICAgICBjYXNlICdudW1iZXInOlxuICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgIGNhc2UgJ3VuZGVmaW5lZCc6XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgY2FzZSAnYm9vbGVhbic6XG4gICAgICAgIHJldHVybiAhcHJvcFZhbHVlO1xuICAgICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkocHJvcFZhbHVlKSkge1xuICAgICAgICAgIHJldHVybiBwcm9wVmFsdWUuZXZlcnkoaXNOb2RlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocHJvcFZhbHVlID09PSBudWxsIHx8IGlzVmFsaWRFbGVtZW50KHByb3BWYWx1ZSkpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBpdGVyYXRvckZuID0gZ2V0SXRlcmF0b3JGbihwcm9wVmFsdWUpO1xuICAgICAgICBpZiAoaXRlcmF0b3JGbikge1xuICAgICAgICAgIHZhciBpdGVyYXRvciA9IGl0ZXJhdG9yRm4uY2FsbChwcm9wVmFsdWUpO1xuICAgICAgICAgIHZhciBzdGVwO1xuICAgICAgICAgIGlmIChpdGVyYXRvckZuICE9PSBwcm9wVmFsdWUuZW50cmllcykge1xuICAgICAgICAgICAgd2hpbGUgKCEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZSkge1xuICAgICAgICAgICAgICBpZiAoIWlzTm9kZShzdGVwLnZhbHVlKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBJdGVyYXRvciB3aWxsIHByb3ZpZGUgZW50cnkgW2ssdl0gdHVwbGVzIHJhdGhlciB0aGFuIHZhbHVlcy5cbiAgICAgICAgICAgIHdoaWxlICghKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmUpIHtcbiAgICAgICAgICAgICAgdmFyIGVudHJ5ID0gc3RlcC52YWx1ZTtcbiAgICAgICAgICAgICAgaWYgKGVudHJ5KSB7XG4gICAgICAgICAgICAgICAgaWYgKCFpc05vZGUoZW50cnlbMV0pKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGlzU3ltYm9sKHByb3BUeXBlLCBwcm9wVmFsdWUpIHtcbiAgICAvLyBOYXRpdmUgU3ltYm9sLlxuICAgIGlmIChwcm9wVHlwZSA9PT0gJ3N5bWJvbCcpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIC8vIDE5LjQuMy41IFN5bWJvbC5wcm90b3R5cGVbQEB0b1N0cmluZ1RhZ10gPT09ICdTeW1ib2wnXG4gICAgaWYgKHByb3BWYWx1ZVsnQEB0b1N0cmluZ1RhZyddID09PSAnU3ltYm9sJykge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgLy8gRmFsbGJhY2sgZm9yIG5vbi1zcGVjIGNvbXBsaWFudCBTeW1ib2xzIHdoaWNoIGFyZSBwb2x5ZmlsbGVkLlxuICAgIGlmICh0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIHByb3BWYWx1ZSBpbnN0YW5jZW9mIFN5bWJvbCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLy8gRXF1aXZhbGVudCBvZiBgdHlwZW9mYCBidXQgd2l0aCBzcGVjaWFsIGhhbmRsaW5nIGZvciBhcnJheSBhbmQgcmVnZXhwLlxuICBmdW5jdGlvbiBnZXRQcm9wVHlwZShwcm9wVmFsdWUpIHtcbiAgICB2YXIgcHJvcFR5cGUgPSB0eXBlb2YgcHJvcFZhbHVlO1xuICAgIGlmIChBcnJheS5pc0FycmF5KHByb3BWYWx1ZSkpIHtcbiAgICAgIHJldHVybiAnYXJyYXknO1xuICAgIH1cbiAgICBpZiAocHJvcFZhbHVlIGluc3RhbmNlb2YgUmVnRXhwKSB7XG4gICAgICAvLyBPbGQgd2Via2l0cyAoYXQgbGVhc3QgdW50aWwgQW5kcm9pZCA0LjApIHJldHVybiAnZnVuY3Rpb24nIHJhdGhlciB0aGFuXG4gICAgICAvLyAnb2JqZWN0JyBmb3IgdHlwZW9mIGEgUmVnRXhwLiBXZSdsbCBub3JtYWxpemUgdGhpcyBoZXJlIHNvIHRoYXQgL2JsYS9cbiAgICAgIC8vIHBhc3NlcyBQcm9wVHlwZXMub2JqZWN0LlxuICAgICAgcmV0dXJuICdvYmplY3QnO1xuICAgIH1cbiAgICBpZiAoaXNTeW1ib2wocHJvcFR5cGUsIHByb3BWYWx1ZSkpIHtcbiAgICAgIHJldHVybiAnc3ltYm9sJztcbiAgICB9XG4gICAgcmV0dXJuIHByb3BUeXBlO1xuICB9XG5cbiAgLy8gVGhpcyBoYW5kbGVzIG1vcmUgdHlwZXMgdGhhbiBgZ2V0UHJvcFR5cGVgLiBPbmx5IHVzZWQgZm9yIGVycm9yIG1lc3NhZ2VzLlxuICAvLyBTZWUgYGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyYC5cbiAgZnVuY3Rpb24gZ2V0UHJlY2lzZVR5cGUocHJvcFZhbHVlKSB7XG4gICAgaWYgKHR5cGVvZiBwcm9wVmFsdWUgPT09ICd1bmRlZmluZWQnIHx8IHByb3BWYWx1ZSA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuICcnICsgcHJvcFZhbHVlO1xuICAgIH1cbiAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgIGlmIChwcm9wVHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGlmIChwcm9wVmFsdWUgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICAgIHJldHVybiAnZGF0ZSc7XG4gICAgICB9IGVsc2UgaWYgKHByb3BWYWx1ZSBpbnN0YW5jZW9mIFJlZ0V4cCkge1xuICAgICAgICByZXR1cm4gJ3JlZ2V4cCc7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBwcm9wVHlwZTtcbiAgfVxuXG4gIC8vIFJldHVybnMgYSBzdHJpbmcgdGhhdCBpcyBwb3N0Zml4ZWQgdG8gYSB3YXJuaW5nIGFib3V0IGFuIGludmFsaWQgdHlwZS5cbiAgLy8gRm9yIGV4YW1wbGUsIFwidW5kZWZpbmVkXCIgb3IgXCJvZiB0eXBlIGFycmF5XCJcbiAgZnVuY3Rpb24gZ2V0UG9zdGZpeEZvclR5cGVXYXJuaW5nKHZhbHVlKSB7XG4gICAgdmFyIHR5cGUgPSBnZXRQcmVjaXNlVHlwZSh2YWx1ZSk7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlICdhcnJheSc6XG4gICAgICBjYXNlICdvYmplY3QnOlxuICAgICAgICByZXR1cm4gJ2FuICcgKyB0eXBlO1xuICAgICAgY2FzZSAnYm9vbGVhbic6XG4gICAgICBjYXNlICdkYXRlJzpcbiAgICAgIGNhc2UgJ3JlZ2V4cCc6XG4gICAgICAgIHJldHVybiAnYSAnICsgdHlwZTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiB0eXBlO1xuICAgIH1cbiAgfVxuXG4gIC8vIFJldHVybnMgY2xhc3MgbmFtZSBvZiB0aGUgb2JqZWN0LCBpZiBhbnkuXG4gIGZ1bmN0aW9uIGdldENsYXNzTmFtZShwcm9wVmFsdWUpIHtcbiAgICBpZiAoIXByb3BWYWx1ZS5jb25zdHJ1Y3RvciB8fCAhcHJvcFZhbHVlLmNvbnN0cnVjdG9yLm5hbWUpIHtcbiAgICAgIHJldHVybiBBTk9OWU1PVVM7XG4gICAgfVxuICAgIHJldHVybiBwcm9wVmFsdWUuY29uc3RydWN0b3IubmFtZTtcbiAgfVxuXG4gIFJlYWN0UHJvcFR5cGVzLmNoZWNrUHJvcFR5cGVzID0gY2hlY2tQcm9wVHlwZXM7XG4gIFJlYWN0UHJvcFR5cGVzLnJlc2V0V2FybmluZ0NhY2hlID0gY2hlY2tQcm9wVHlwZXMucmVzZXRXYXJuaW5nQ2FjaGU7XG4gIFJlYWN0UHJvcFR5cGVzLlByb3BUeXBlcyA9IFJlYWN0UHJvcFR5cGVzO1xuXG4gIHJldHVybiBSZWFjdFByb3BUeXBlcztcbn07XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIFJlYWN0UHJvcFR5cGVzU2VjcmV0ID0gcmVxdWlyZSgnLi9saWIvUmVhY3RQcm9wVHlwZXNTZWNyZXQnKTtcblxuZnVuY3Rpb24gZW1wdHlGdW5jdGlvbigpIHt9XG5mdW5jdGlvbiBlbXB0eUZ1bmN0aW9uV2l0aFJlc2V0KCkge31cbmVtcHR5RnVuY3Rpb25XaXRoUmVzZXQucmVzZXRXYXJuaW5nQ2FjaGUgPSBlbXB0eUZ1bmN0aW9uO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiBzaGltKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSwgc2VjcmV0KSB7XG4gICAgaWYgKHNlY3JldCA9PT0gUmVhY3RQcm9wVHlwZXNTZWNyZXQpIHtcbiAgICAgIC8vIEl0IGlzIHN0aWxsIHNhZmUgd2hlbiBjYWxsZWQgZnJvbSBSZWFjdC5cbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIGVyciA9IG5ldyBFcnJvcihcbiAgICAgICdDYWxsaW5nIFByb3BUeXBlcyB2YWxpZGF0b3JzIGRpcmVjdGx5IGlzIG5vdCBzdXBwb3J0ZWQgYnkgdGhlIGBwcm9wLXR5cGVzYCBwYWNrYWdlLiAnICtcbiAgICAgICdVc2UgUHJvcFR5cGVzLmNoZWNrUHJvcFR5cGVzKCkgdG8gY2FsbCB0aGVtLiAnICtcbiAgICAgICdSZWFkIG1vcmUgYXQgaHR0cDovL2ZiLm1lL3VzZS1jaGVjay1wcm9wLXR5cGVzJ1xuICAgICk7XG4gICAgZXJyLm5hbWUgPSAnSW52YXJpYW50IFZpb2xhdGlvbic7XG4gICAgdGhyb3cgZXJyO1xuICB9O1xuICBzaGltLmlzUmVxdWlyZWQgPSBzaGltO1xuICBmdW5jdGlvbiBnZXRTaGltKCkge1xuICAgIHJldHVybiBzaGltO1xuICB9O1xuICAvLyBJbXBvcnRhbnQhXG4gIC8vIEtlZXAgdGhpcyBsaXN0IGluIHN5bmMgd2l0aCBwcm9kdWN0aW9uIHZlcnNpb24gaW4gYC4vZmFjdG9yeVdpdGhUeXBlQ2hlY2tlcnMuanNgLlxuICB2YXIgUmVhY3RQcm9wVHlwZXMgPSB7XG4gICAgYXJyYXk6IHNoaW0sXG4gICAgYm9vbDogc2hpbSxcbiAgICBmdW5jOiBzaGltLFxuICAgIG51bWJlcjogc2hpbSxcbiAgICBvYmplY3Q6IHNoaW0sXG4gICAgc3RyaW5nOiBzaGltLFxuICAgIHN5bWJvbDogc2hpbSxcblxuICAgIGFueTogc2hpbSxcbiAgICBhcnJheU9mOiBnZXRTaGltLFxuICAgIGVsZW1lbnQ6IHNoaW0sXG4gICAgZWxlbWVudFR5cGU6IHNoaW0sXG4gICAgaW5zdGFuY2VPZjogZ2V0U2hpbSxcbiAgICBub2RlOiBzaGltLFxuICAgIG9iamVjdE9mOiBnZXRTaGltLFxuICAgIG9uZU9mOiBnZXRTaGltLFxuICAgIG9uZU9mVHlwZTogZ2V0U2hpbSxcbiAgICBzaGFwZTogZ2V0U2hpbSxcbiAgICBleGFjdDogZ2V0U2hpbSxcblxuICAgIGNoZWNrUHJvcFR5cGVzOiBlbXB0eUZ1bmN0aW9uV2l0aFJlc2V0LFxuICAgIHJlc2V0V2FybmluZ0NhY2hlOiBlbXB0eUZ1bmN0aW9uXG4gIH07XG5cbiAgUmVhY3RQcm9wVHlwZXMuUHJvcFR5cGVzID0gUmVhY3RQcm9wVHlwZXM7XG5cbiAgcmV0dXJuIFJlYWN0UHJvcFR5cGVzO1xufTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgdmFyIFJlYWN0SXMgPSByZXF1aXJlKCdyZWFjdC1pcycpO1xuXG4gIC8vIEJ5IGV4cGxpY2l0bHkgdXNpbmcgYHByb3AtdHlwZXNgIHlvdSBhcmUgb3B0aW5nIGludG8gbmV3IGRldmVsb3BtZW50IGJlaGF2aW9yLlxuICAvLyBodHRwOi8vZmIubWUvcHJvcC10eXBlcy1pbi1wcm9kXG4gIHZhciB0aHJvd09uRGlyZWN0QWNjZXNzID0gdHJ1ZTtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2ZhY3RvcnlXaXRoVHlwZUNoZWNrZXJzJykoUmVhY3RJcy5pc0VsZW1lbnQsIHRocm93T25EaXJlY3RBY2Nlc3MpO1xufSBlbHNlIHtcbiAgLy8gQnkgZXhwbGljaXRseSB1c2luZyBgcHJvcC10eXBlc2AgeW91IGFyZSBvcHRpbmcgaW50byBuZXcgcHJvZHVjdGlvbiBiZWhhdmlvci5cbiAgLy8gaHR0cDovL2ZiLm1lL3Byb3AtdHlwZXMtaW4tcHJvZFxuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZmFjdG9yeVdpdGhUaHJvd2luZ1NoaW1zJykoKTtcbn1cbiIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgZGVmYXVsdDogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IGhhc0NsYXNzO1xuXG5mdW5jdGlvbiBoYXNDbGFzcyhlbGVtZW50LCBjbGFzc05hbWUpIHtcbiAgaWYgKGVsZW1lbnQuY2xhc3NMaXN0KSByZXR1cm4gISFjbGFzc05hbWUgJiYgZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoY2xhc3NOYW1lKTtlbHNlIHJldHVybiAoXCIgXCIgKyAoZWxlbWVudC5jbGFzc05hbWUuYmFzZVZhbCB8fCBlbGVtZW50LmNsYXNzTmFtZSkgKyBcIiBcIikuaW5kZXhPZihcIiBcIiArIGNsYXNzTmFtZSArIFwiIFwiKSAhPT0gLTE7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1tcImRlZmF1bHRcIl07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gYWRkQ2xhc3M7XG5cbnZhciBfaGFzQ2xhc3MgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2hhc0NsYXNzXCIpKTtcblxuZnVuY3Rpb24gYWRkQ2xhc3MoZWxlbWVudCwgY2xhc3NOYW1lKSB7XG4gIGlmIChlbGVtZW50LmNsYXNzTGlzdCkgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7ZWxzZSBpZiAoISgwLCBfaGFzQ2xhc3MuZGVmYXVsdCkoZWxlbWVudCwgY2xhc3NOYW1lKSkgaWYgKHR5cGVvZiBlbGVtZW50LmNsYXNzTmFtZSA9PT0gJ3N0cmluZycpIGVsZW1lbnQuY2xhc3NOYW1lID0gZWxlbWVudC5jbGFzc05hbWUgKyAnICcgKyBjbGFzc05hbWU7ZWxzZSBlbGVtZW50LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAoZWxlbWVudC5jbGFzc05hbWUgJiYgZWxlbWVudC5jbGFzc05hbWUuYmFzZVZhbCB8fCAnJykgKyAnICcgKyBjbGFzc05hbWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdOyIsIid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gcmVwbGFjZUNsYXNzTmFtZShvcmlnQ2xhc3MsIGNsYXNzVG9SZW1vdmUpIHtcbiAgcmV0dXJuIG9yaWdDbGFzcy5yZXBsYWNlKG5ldyBSZWdFeHAoJyhefFxcXFxzKScgKyBjbGFzc1RvUmVtb3ZlICsgJyg/OlxcXFxzfCQpJywgJ2cnKSwgJyQxJykucmVwbGFjZSgvXFxzKy9nLCAnICcpLnJlcGxhY2UoL15cXHMqfFxccyokL2csICcnKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiByZW1vdmVDbGFzcyhlbGVtZW50LCBjbGFzc05hbWUpIHtcbiAgaWYgKGVsZW1lbnQuY2xhc3NMaXN0KSBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTtlbHNlIGlmICh0eXBlb2YgZWxlbWVudC5jbGFzc05hbWUgPT09ICdzdHJpbmcnKSBlbGVtZW50LmNsYXNzTmFtZSA9IHJlcGxhY2VDbGFzc05hbWUoZWxlbWVudC5jbGFzc05hbWUsIGNsYXNzTmFtZSk7ZWxzZSBlbGVtZW50LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCByZXBsYWNlQ2xhc3NOYW1lKGVsZW1lbnQuY2xhc3NOYW1lICYmIGVsZW1lbnQuY2xhc3NOYW1lLmJhc2VWYWwgfHwgJycsIGNsYXNzTmFtZSkpO1xufTsiLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbmZ1bmN0aW9uIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgLy8gQ2FsbCB0aGlzLmNvbnN0cnVjdG9yLmdEU0ZQIHRvIHN1cHBvcnQgc3ViLWNsYXNzZXMuXG4gIHZhciBzdGF0ZSA9IHRoaXMuY29uc3RydWN0b3IuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzKHRoaXMucHJvcHMsIHRoaXMuc3RhdGUpO1xuICBpZiAoc3RhdGUgIT09IG51bGwgJiYgc3RhdGUgIT09IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuc2V0U3RhdGUoc3RhdGUpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gIC8vIENhbGwgdGhpcy5jb25zdHJ1Y3Rvci5nRFNGUCB0byBzdXBwb3J0IHN1Yi1jbGFzc2VzLlxuICAvLyBVc2UgdGhlIHNldFN0YXRlKCkgdXBkYXRlciB0byBlbnN1cmUgc3RhdGUgaXNuJ3Qgc3RhbGUgaW4gY2VydGFpbiBlZGdlIGNhc2VzLlxuICBmdW5jdGlvbiB1cGRhdGVyKHByZXZTdGF0ZSkge1xuICAgIHZhciBzdGF0ZSA9IHRoaXMuY29uc3RydWN0b3IuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzKG5leHRQcm9wcywgcHJldlN0YXRlKTtcbiAgICByZXR1cm4gc3RhdGUgIT09IG51bGwgJiYgc3RhdGUgIT09IHVuZGVmaW5lZCA/IHN0YXRlIDogbnVsbDtcbiAgfVxuICAvLyBCaW5kaW5nIFwidGhpc1wiIGlzIGltcG9ydGFudCBmb3Igc2hhbGxvdyByZW5kZXJlciBzdXBwb3J0LlxuICB0aGlzLnNldFN0YXRlKHVwZGF0ZXIuYmluZCh0aGlzKSk7XG59XG5cbmZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVcGRhdGUobmV4dFByb3BzLCBuZXh0U3RhdGUpIHtcbiAgdHJ5IHtcbiAgICB2YXIgcHJldlByb3BzID0gdGhpcy5wcm9wcztcbiAgICB2YXIgcHJldlN0YXRlID0gdGhpcy5zdGF0ZTtcbiAgICB0aGlzLnByb3BzID0gbmV4dFByb3BzO1xuICAgIHRoaXMuc3RhdGUgPSBuZXh0U3RhdGU7XG4gICAgdGhpcy5fX3JlYWN0SW50ZXJuYWxTbmFwc2hvdEZsYWcgPSB0cnVlO1xuICAgIHRoaXMuX19yZWFjdEludGVybmFsU25hcHNob3QgPSB0aGlzLmdldFNuYXBzaG90QmVmb3JlVXBkYXRlKFxuICAgICAgcHJldlByb3BzLFxuICAgICAgcHJldlN0YXRlXG4gICAgKTtcbiAgfSBmaW5hbGx5IHtcbiAgICB0aGlzLnByb3BzID0gcHJldlByb3BzO1xuICAgIHRoaXMuc3RhdGUgPSBwcmV2U3RhdGU7XG4gIH1cbn1cblxuLy8gUmVhY3QgbWF5IHdhcm4gYWJvdXQgY1dNL2NXUlAvY1dVIG1ldGhvZHMgYmVpbmcgZGVwcmVjYXRlZC5cbi8vIEFkZCBhIGZsYWcgdG8gc3VwcHJlc3MgdGhlc2Ugd2FybmluZ3MgZm9yIHRoaXMgc3BlY2lhbCBjYXNlLlxuY29tcG9uZW50V2lsbE1vdW50Ll9fc3VwcHJlc3NEZXByZWNhdGlvbldhcm5pbmcgPSB0cnVlO1xuY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcy5fX3N1cHByZXNzRGVwcmVjYXRpb25XYXJuaW5nID0gdHJ1ZTtcbmNvbXBvbmVudFdpbGxVcGRhdGUuX19zdXBwcmVzc0RlcHJlY2F0aW9uV2FybmluZyA9IHRydWU7XG5cbmZ1bmN0aW9uIHBvbHlmaWxsKENvbXBvbmVudCkge1xuICB2YXIgcHJvdG90eXBlID0gQ29tcG9uZW50LnByb3RvdHlwZTtcblxuICBpZiAoIXByb3RvdHlwZSB8fCAhcHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0NhbiBvbmx5IHBvbHlmaWxsIGNsYXNzIGNvbXBvbmVudHMnKTtcbiAgfVxuXG4gIGlmIChcbiAgICB0eXBlb2YgQ29tcG9uZW50LmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyAhPT0gJ2Z1bmN0aW9uJyAmJlxuICAgIHR5cGVvZiBwcm90b3R5cGUuZ2V0U25hcHNob3RCZWZvcmVVcGRhdGUgIT09ICdmdW5jdGlvbidcbiAgKSB7XG4gICAgcmV0dXJuIENvbXBvbmVudDtcbiAgfVxuXG4gIC8vIElmIG5ldyBjb21wb25lbnQgQVBJcyBhcmUgZGVmaW5lZCwgXCJ1bnNhZmVcIiBsaWZlY3ljbGVzIHdvbid0IGJlIGNhbGxlZC5cbiAgLy8gRXJyb3IgaWYgYW55IG9mIHRoZXNlIGxpZmVjeWNsZXMgYXJlIHByZXNlbnQsXG4gIC8vIEJlY2F1c2UgdGhleSB3b3VsZCB3b3JrIGRpZmZlcmVudGx5IGJldHdlZW4gb2xkZXIgYW5kIG5ld2VyICgxNi4zKykgdmVyc2lvbnMgb2YgUmVhY3QuXG4gIHZhciBmb3VuZFdpbGxNb3VudE5hbWUgPSBudWxsO1xuICB2YXIgZm91bmRXaWxsUmVjZWl2ZVByb3BzTmFtZSA9IG51bGw7XG4gIHZhciBmb3VuZFdpbGxVcGRhdGVOYW1lID0gbnVsbDtcbiAgaWYgKHR5cGVvZiBwcm90b3R5cGUuY29tcG9uZW50V2lsbE1vdW50ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgZm91bmRXaWxsTW91bnROYW1lID0gJ2NvbXBvbmVudFdpbGxNb3VudCc7XG4gIH0gZWxzZSBpZiAodHlwZW9mIHByb3RvdHlwZS5VTlNBRkVfY29tcG9uZW50V2lsbE1vdW50ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgZm91bmRXaWxsTW91bnROYW1lID0gJ1VOU0FGRV9jb21wb25lbnRXaWxsTW91bnQnO1xuICB9XG4gIGlmICh0eXBlb2YgcHJvdG90eXBlLmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMgPT09ICdmdW5jdGlvbicpIHtcbiAgICBmb3VuZFdpbGxSZWNlaXZlUHJvcHNOYW1lID0gJ2NvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMnO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBwcm90b3R5cGUuVU5TQUZFX2NvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMgPT09ICdmdW5jdGlvbicpIHtcbiAgICBmb3VuZFdpbGxSZWNlaXZlUHJvcHNOYW1lID0gJ1VOU0FGRV9jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzJztcbiAgfVxuICBpZiAodHlwZW9mIHByb3RvdHlwZS5jb21wb25lbnRXaWxsVXBkYXRlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgZm91bmRXaWxsVXBkYXRlTmFtZSA9ICdjb21wb25lbnRXaWxsVXBkYXRlJztcbiAgfSBlbHNlIGlmICh0eXBlb2YgcHJvdG90eXBlLlVOU0FGRV9jb21wb25lbnRXaWxsVXBkYXRlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgZm91bmRXaWxsVXBkYXRlTmFtZSA9ICdVTlNBRkVfY29tcG9uZW50V2lsbFVwZGF0ZSc7XG4gIH1cbiAgaWYgKFxuICAgIGZvdW5kV2lsbE1vdW50TmFtZSAhPT0gbnVsbCB8fFxuICAgIGZvdW5kV2lsbFJlY2VpdmVQcm9wc05hbWUgIT09IG51bGwgfHxcbiAgICBmb3VuZFdpbGxVcGRhdGVOYW1lICE9PSBudWxsXG4gICkge1xuICAgIHZhciBjb21wb25lbnROYW1lID0gQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvbmVudC5uYW1lO1xuICAgIHZhciBuZXdBcGlOYW1lID1cbiAgICAgIHR5cGVvZiBDb21wb25lbnQuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzID09PSAnZnVuY3Rpb24nXG4gICAgICAgID8gJ2dldERlcml2ZWRTdGF0ZUZyb21Qcm9wcygpJ1xuICAgICAgICA6ICdnZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZSgpJztcblxuICAgIHRocm93IEVycm9yKFxuICAgICAgJ1Vuc2FmZSBsZWdhY3kgbGlmZWN5Y2xlcyB3aWxsIG5vdCBiZSBjYWxsZWQgZm9yIGNvbXBvbmVudHMgdXNpbmcgbmV3IGNvbXBvbmVudCBBUElzLlxcblxcbicgK1xuICAgICAgICBjb21wb25lbnROYW1lICtcbiAgICAgICAgJyB1c2VzICcgK1xuICAgICAgICBuZXdBcGlOYW1lICtcbiAgICAgICAgJyBidXQgYWxzbyBjb250YWlucyB0aGUgZm9sbG93aW5nIGxlZ2FjeSBsaWZlY3ljbGVzOicgK1xuICAgICAgICAoZm91bmRXaWxsTW91bnROYW1lICE9PSBudWxsID8gJ1xcbiAgJyArIGZvdW5kV2lsbE1vdW50TmFtZSA6ICcnKSArXG4gICAgICAgIChmb3VuZFdpbGxSZWNlaXZlUHJvcHNOYW1lICE9PSBudWxsXG4gICAgICAgICAgPyAnXFxuICAnICsgZm91bmRXaWxsUmVjZWl2ZVByb3BzTmFtZVxuICAgICAgICAgIDogJycpICtcbiAgICAgICAgKGZvdW5kV2lsbFVwZGF0ZU5hbWUgIT09IG51bGwgPyAnXFxuICAnICsgZm91bmRXaWxsVXBkYXRlTmFtZSA6ICcnKSArXG4gICAgICAgICdcXG5cXG5UaGUgYWJvdmUgbGlmZWN5Y2xlcyBzaG91bGQgYmUgcmVtb3ZlZC4gTGVhcm4gbW9yZSBhYm91dCB0aGlzIHdhcm5pbmcgaGVyZTpcXG4nICtcbiAgICAgICAgJ2h0dHBzOi8vZmIubWUvcmVhY3QtYXN5bmMtY29tcG9uZW50LWxpZmVjeWNsZS1ob29rcydcbiAgICApO1xuICB9XG5cbiAgLy8gUmVhY3QgPD0gMTYuMiBkb2VzIG5vdCBzdXBwb3J0IHN0YXRpYyBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMuXG4gIC8vIEFzIGEgd29ya2Fyb3VuZCwgdXNlIGNXTSBhbmQgY1dSUCB0byBpbnZva2UgdGhlIG5ldyBzdGF0aWMgbGlmZWN5Y2xlLlxuICAvLyBOZXdlciB2ZXJzaW9ucyBvZiBSZWFjdCB3aWxsIGlnbm9yZSB0aGVzZSBsaWZlY3ljbGVzIGlmIGdEU0ZQIGV4aXN0cy5cbiAgaWYgKHR5cGVvZiBDb21wb25lbnQuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcHJvdG90eXBlLmNvbXBvbmVudFdpbGxNb3VudCA9IGNvbXBvbmVudFdpbGxNb3VudDtcbiAgICBwcm90b3R5cGUuY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyA9IGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHM7XG4gIH1cblxuICAvLyBSZWFjdCA8PSAxNi4yIGRvZXMgbm90IHN1cHBvcnQgZ2V0U25hcHNob3RCZWZvcmVVcGRhdGUuXG4gIC8vIEFzIGEgd29ya2Fyb3VuZCwgdXNlIGNXVSB0byBpbnZva2UgdGhlIG5ldyBsaWZlY3ljbGUuXG4gIC8vIE5ld2VyIHZlcnNpb25zIG9mIFJlYWN0IHdpbGwgaWdub3JlIHRoYXQgbGlmZWN5Y2xlIGlmIGdTQlUgZXhpc3RzLlxuICBpZiAodHlwZW9mIHByb3RvdHlwZS5nZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGlmICh0eXBlb2YgcHJvdG90eXBlLmNvbXBvbmVudERpZFVwZGF0ZSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAnQ2Fubm90IHBvbHlmaWxsIGdldFNuYXBzaG90QmVmb3JlVXBkYXRlKCkgZm9yIGNvbXBvbmVudHMgdGhhdCBkbyBub3QgZGVmaW5lIGNvbXBvbmVudERpZFVwZGF0ZSgpIG9uIHRoZSBwcm90b3R5cGUnXG4gICAgICApO1xuICAgIH1cblxuICAgIHByb3RvdHlwZS5jb21wb25lbnRXaWxsVXBkYXRlID0gY29tcG9uZW50V2lsbFVwZGF0ZTtcblxuICAgIHZhciBjb21wb25lbnREaWRVcGRhdGUgPSBwcm90b3R5cGUuY29tcG9uZW50RGlkVXBkYXRlO1xuXG4gICAgcHJvdG90eXBlLmNvbXBvbmVudERpZFVwZGF0ZSA9IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZVBvbHlmaWxsKFxuICAgICAgcHJldlByb3BzLFxuICAgICAgcHJldlN0YXRlLFxuICAgICAgbWF5YmVTbmFwc2hvdFxuICAgICkge1xuICAgICAgLy8gMTYuMysgd2lsbCBub3QgZXhlY3V0ZSBvdXIgd2lsbC11cGRhdGUgbWV0aG9kO1xuICAgICAgLy8gSXQgd2lsbCBwYXNzIGEgc25hcHNob3QgdmFsdWUgdG8gZGlkLXVwZGF0ZSB0aG91Z2guXG4gICAgICAvLyBPbGRlciB2ZXJzaW9ucyB3aWxsIHJlcXVpcmUgb3VyIHBvbHlmaWxsZWQgd2lsbC11cGRhdGUgdmFsdWUuXG4gICAgICAvLyBXZSBuZWVkIHRvIGhhbmRsZSBib3RoIGNhc2VzLCBidXQgY2FuJ3QganVzdCBjaGVjayBmb3IgdGhlIHByZXNlbmNlIG9mIFwibWF5YmVTbmFwc2hvdFwiLFxuICAgICAgLy8gQmVjYXVzZSBmb3IgPD0gMTUueCB2ZXJzaW9ucyB0aGlzIG1pZ2h0IGJlIGEgXCJwcmV2Q29udGV4dFwiIG9iamVjdC5cbiAgICAgIC8vIFdlIGFsc28gY2FuJ3QganVzdCBjaGVjayBcIl9fcmVhY3RJbnRlcm5hbFNuYXBzaG90XCIsXG4gICAgICAvLyBCZWNhdXNlIGdldC1zbmFwc2hvdCBtaWdodCByZXR1cm4gYSBmYWxzeSB2YWx1ZS5cbiAgICAgIC8vIFNvIGNoZWNrIGZvciB0aGUgZXhwbGljaXQgX19yZWFjdEludGVybmFsU25hcHNob3RGbGFnIGZsYWcgdG8gZGV0ZXJtaW5lIGJlaGF2aW9yLlxuICAgICAgdmFyIHNuYXBzaG90ID0gdGhpcy5fX3JlYWN0SW50ZXJuYWxTbmFwc2hvdEZsYWdcbiAgICAgICAgPyB0aGlzLl9fcmVhY3RJbnRlcm5hbFNuYXBzaG90XG4gICAgICAgIDogbWF5YmVTbmFwc2hvdDtcblxuICAgICAgY29tcG9uZW50RGlkVXBkYXRlLmNhbGwodGhpcywgcHJldlByb3BzLCBwcmV2U3RhdGUsIHNuYXBzaG90KTtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIENvbXBvbmVudDtcbn1cblxuZXhwb3J0IHsgcG9seWZpbGwgfTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5jbGFzc05hbWVzU2hhcGUgPSBleHBvcnRzLnRpbWVvdXRzU2hhcGUgPSB2b2lkIDA7XG5cbnZhciBfcHJvcFR5cGVzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicHJvcC10eXBlc1wiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciB0aW1lb3V0c1NoYXBlID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IF9wcm9wVHlwZXMuZGVmYXVsdC5vbmVPZlR5cGUoW19wcm9wVHlwZXMuZGVmYXVsdC5udW1iZXIsIF9wcm9wVHlwZXMuZGVmYXVsdC5zaGFwZSh7XG4gIGVudGVyOiBfcHJvcFR5cGVzLmRlZmF1bHQubnVtYmVyLFxuICBleGl0OiBfcHJvcFR5cGVzLmRlZmF1bHQubnVtYmVyXG59KS5pc1JlcXVpcmVkXSkgOiBudWxsO1xuZXhwb3J0cy50aW1lb3V0c1NoYXBlID0gdGltZW91dHNTaGFwZTtcbnZhciBjbGFzc05hbWVzU2hhcGUgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gX3Byb3BUeXBlcy5kZWZhdWx0Lm9uZU9mVHlwZShbX3Byb3BUeXBlcy5kZWZhdWx0LnN0cmluZywgX3Byb3BUeXBlcy5kZWZhdWx0LnNoYXBlKHtcbiAgZW50ZXI6IF9wcm9wVHlwZXMuZGVmYXVsdC5zdHJpbmcsXG4gIGV4aXQ6IF9wcm9wVHlwZXMuZGVmYXVsdC5zdHJpbmcsXG4gIGFjdGl2ZTogX3Byb3BUeXBlcy5kZWZhdWx0LnN0cmluZ1xufSksIF9wcm9wVHlwZXMuZGVmYXVsdC5zaGFwZSh7XG4gIGVudGVyOiBfcHJvcFR5cGVzLmRlZmF1bHQuc3RyaW5nLFxuICBlbnRlckRvbmU6IF9wcm9wVHlwZXMuZGVmYXVsdC5zdHJpbmcsXG4gIGVudGVyQWN0aXZlOiBfcHJvcFR5cGVzLmRlZmF1bHQuc3RyaW5nLFxuICBleGl0OiBfcHJvcFR5cGVzLmRlZmF1bHQuc3RyaW5nLFxuICBleGl0RG9uZTogX3Byb3BUeXBlcy5kZWZhdWx0LnN0cmluZyxcbiAgZXhpdEFjdGl2ZTogX3Byb3BUeXBlcy5kZWZhdWx0LnN0cmluZ1xufSldKSA6IG51bGw7XG5leHBvcnRzLmNsYXNzTmFtZXNTaGFwZSA9IGNsYXNzTmFtZXNTaGFwZTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IGV4cG9ydHMuRVhJVElORyA9IGV4cG9ydHMuRU5URVJFRCA9IGV4cG9ydHMuRU5URVJJTkcgPSBleHBvcnRzLkVYSVRFRCA9IGV4cG9ydHMuVU5NT1VOVEVEID0gdm9pZCAwO1xuXG52YXIgUHJvcFR5cGVzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInByb3AtdHlwZXNcIikpO1xuXG52YXIgX3JlYWN0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgX3JlYWN0RG9tID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3QtZG9tXCIpKTtcblxudmFyIF9yZWFjdExpZmVjeWNsZXNDb21wYXQgPSByZXF1aXJlKFwicmVhY3QtbGlmZWN5Y2xlcy1jb21wYXRcIik7XG5cbnZhciBfUHJvcFR5cGVzID0gcmVxdWlyZShcIi4vdXRpbHMvUHJvcFR5cGVzXCIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHsgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkgeyByZXR1cm4gb2JqOyB9IGVsc2UgeyB2YXIgbmV3T2JqID0ge307IGlmIChvYmogIT0gbnVsbCkgeyBmb3IgKHZhciBrZXkgaW4gb2JqKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7IHZhciBkZXNjID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IHt9OyBpZiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTsgfSBlbHNlIHsgbmV3T2JqW2tleV0gPSBvYmpba2V5XTsgfSB9IH0gfSBuZXdPYmouZGVmYXVsdCA9IG9iajsgcmV0dXJuIG5ld09iajsgfSB9XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpIHsgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307IHZhciB0YXJnZXQgPSB7fTsgdmFyIHNvdXJjZUtleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpOyB2YXIga2V5LCBpOyBmb3IgKGkgPSAwOyBpIDwgc291cmNlS2V5cy5sZW5ndGg7IGkrKykgeyBrZXkgPSBzb3VyY2VLZXlzW2ldOyBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlOyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzTG9vc2Uoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzLnByb3RvdHlwZSk7IHN1YkNsYXNzLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IHN1YkNsYXNzOyBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBVTk1PVU5URUQgPSAndW5tb3VudGVkJztcbmV4cG9ydHMuVU5NT1VOVEVEID0gVU5NT1VOVEVEO1xudmFyIEVYSVRFRCA9ICdleGl0ZWQnO1xuZXhwb3J0cy5FWElURUQgPSBFWElURUQ7XG52YXIgRU5URVJJTkcgPSAnZW50ZXJpbmcnO1xuZXhwb3J0cy5FTlRFUklORyA9IEVOVEVSSU5HO1xudmFyIEVOVEVSRUQgPSAnZW50ZXJlZCc7XG5leHBvcnRzLkVOVEVSRUQgPSBFTlRFUkVEO1xudmFyIEVYSVRJTkcgPSAnZXhpdGluZyc7XG4vKipcbiAqIFRoZSBUcmFuc2l0aW9uIGNvbXBvbmVudCBsZXRzIHlvdSBkZXNjcmliZSBhIHRyYW5zaXRpb24gZnJvbSBvbmUgY29tcG9uZW50XG4gKiBzdGF0ZSB0byBhbm90aGVyIF9vdmVyIHRpbWVfIHdpdGggYSBzaW1wbGUgZGVjbGFyYXRpdmUgQVBJLiBNb3N0IGNvbW1vbmx5XG4gKiBpdCdzIHVzZWQgdG8gYW5pbWF0ZSB0aGUgbW91bnRpbmcgYW5kIHVubW91bnRpbmcgb2YgYSBjb21wb25lbnQsIGJ1dCBjYW4gYWxzb1xuICogYmUgdXNlZCB0byBkZXNjcmliZSBpbi1wbGFjZSB0cmFuc2l0aW9uIHN0YXRlcyBhcyB3ZWxsLlxuICpcbiAqIEJ5IGRlZmF1bHQgdGhlIGBUcmFuc2l0aW9uYCBjb21wb25lbnQgZG9lcyBub3QgYWx0ZXIgdGhlIGJlaGF2aW9yIG9mIHRoZVxuICogY29tcG9uZW50IGl0IHJlbmRlcnMsIGl0IG9ubHkgdHJhY2tzIFwiZW50ZXJcIiBhbmQgXCJleGl0XCIgc3RhdGVzIGZvciB0aGUgY29tcG9uZW50cy5cbiAqIEl0J3MgdXAgdG8geW91IHRvIGdpdmUgbWVhbmluZyBhbmQgZWZmZWN0IHRvIHRob3NlIHN0YXRlcy4gRm9yIGV4YW1wbGUgd2UgY2FuXG4gKiBhZGQgc3R5bGVzIHRvIGEgY29tcG9uZW50IHdoZW4gaXQgZW50ZXJzIG9yIGV4aXRzOlxuICpcbiAqIGBgYGpzeFxuICogaW1wb3J0IFRyYW5zaXRpb24gZnJvbSAncmVhY3QtdHJhbnNpdGlvbi1ncm91cC9UcmFuc2l0aW9uJztcbiAqXG4gKiBjb25zdCBkdXJhdGlvbiA9IDMwMDtcbiAqXG4gKiBjb25zdCBkZWZhdWx0U3R5bGUgPSB7XG4gKiAgIHRyYW5zaXRpb246IGBvcGFjaXR5ICR7ZHVyYXRpb259bXMgZWFzZS1pbi1vdXRgLFxuICogICBvcGFjaXR5OiAwLFxuICogfVxuICpcbiAqIGNvbnN0IHRyYW5zaXRpb25TdHlsZXMgPSB7XG4gKiAgIGVudGVyaW5nOiB7IG9wYWNpdHk6IDAgfSxcbiAqICAgZW50ZXJlZDogIHsgb3BhY2l0eTogMSB9LFxuICogfTtcbiAqXG4gKiBjb25zdCBGYWRlID0gKHsgaW46IGluUHJvcCB9KSA9PiAoXG4gKiAgIDxUcmFuc2l0aW9uIGluPXtpblByb3B9IHRpbWVvdXQ9e2R1cmF0aW9ufT5cbiAqICAgICB7KHN0YXRlKSA9PiAoXG4gKiAgICAgICA8ZGl2IHN0eWxlPXt7XG4gKiAgICAgICAgIC4uLmRlZmF1bHRTdHlsZSxcbiAqICAgICAgICAgLi4udHJhbnNpdGlvblN0eWxlc1tzdGF0ZV1cbiAqICAgICAgIH19PlxuICogICAgICAgICBJJ20gYSBmYWRlIFRyYW5zaXRpb24hXG4gKiAgICAgICA8L2Rpdj5cbiAqICAgICApfVxuICogICA8L1RyYW5zaXRpb24+XG4gKiApO1xuICogYGBgXG4gKlxuICogQXMgbm90ZWQgdGhlIGBUcmFuc2l0aW9uYCBjb21wb25lbnQgZG9lc24ndCBfZG9fIGFueXRoaW5nIGJ5IGl0c2VsZiB0byBpdHMgY2hpbGQgY29tcG9uZW50LlxuICogV2hhdCBpdCBkb2VzIGRvIGlzIHRyYWNrIHRyYW5zaXRpb24gc3RhdGVzIG92ZXIgdGltZSBzbyB5b3UgY2FuIHVwZGF0ZSB0aGVcbiAqIGNvbXBvbmVudCAoc3VjaCBhcyBieSBhZGRpbmcgc3R5bGVzIG9yIGNsYXNzZXMpIHdoZW4gaXQgY2hhbmdlcyBzdGF0ZXMuXG4gKlxuICogVGhlcmUgYXJlIDQgbWFpbiBzdGF0ZXMgYSBUcmFuc2l0aW9uIGNhbiBiZSBpbjpcbiAqICAtIGAnZW50ZXJpbmcnYFxuICogIC0gYCdlbnRlcmVkJ2BcbiAqICAtIGAnZXhpdGluZydgXG4gKiAgLSBgJ2V4aXRlZCdgXG4gKlxuICogVHJhbnNpdGlvbiBzdGF0ZSBpcyB0b2dnbGVkIHZpYSB0aGUgYGluYCBwcm9wLiBXaGVuIGB0cnVlYCB0aGUgY29tcG9uZW50IGJlZ2lucyB0aGVcbiAqIFwiRW50ZXJcIiBzdGFnZS4gRHVyaW5nIHRoaXMgc3RhZ2UsIHRoZSBjb21wb25lbnQgd2lsbCBzaGlmdCBmcm9tIGl0cyBjdXJyZW50IHRyYW5zaXRpb24gc3RhdGUsXG4gKiB0byBgJ2VudGVyaW5nJ2AgZm9yIHRoZSBkdXJhdGlvbiBvZiB0aGUgdHJhbnNpdGlvbiBhbmQgdGhlbiB0byB0aGUgYCdlbnRlcmVkJ2Agc3RhZ2Ugb25jZVxuICogaXQncyBjb21wbGV0ZS4gTGV0J3MgdGFrZSB0aGUgZm9sbG93aW5nIGV4YW1wbGU6XG4gKlxuICogYGBganN4XG4gKiBzdGF0ZSA9IHsgaW46IGZhbHNlIH07XG4gKlxuICogdG9nZ2xlRW50ZXJTdGF0ZSA9ICgpID0+IHtcbiAqICAgdGhpcy5zZXRTdGF0ZSh7IGluOiB0cnVlIH0pO1xuICogfVxuICpcbiAqIHJlbmRlcigpIHtcbiAqICAgcmV0dXJuIChcbiAqICAgICA8ZGl2PlxuICogICAgICAgPFRyYW5zaXRpb24gaW49e3RoaXMuc3RhdGUuaW59IHRpbWVvdXQ9ezUwMH0gLz5cbiAqICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy50b2dnbGVFbnRlclN0YXRlfT5DbGljayB0byBFbnRlcjwvYnV0dG9uPlxuICogICAgIDwvZGl2PlxuICogICApO1xuICogfVxuICogYGBgXG4gKlxuICogV2hlbiB0aGUgYnV0dG9uIGlzIGNsaWNrZWQgdGhlIGNvbXBvbmVudCB3aWxsIHNoaWZ0IHRvIHRoZSBgJ2VudGVyaW5nJ2Agc3RhdGUgYW5kXG4gKiBzdGF5IHRoZXJlIGZvciA1MDBtcyAodGhlIHZhbHVlIG9mIGB0aW1lb3V0YCkgYmVmb3JlIGl0IGZpbmFsbHkgc3dpdGNoZXMgdG8gYCdlbnRlcmVkJ2AuXG4gKlxuICogV2hlbiBgaW5gIGlzIGBmYWxzZWAgdGhlIHNhbWUgdGhpbmcgaGFwcGVucyBleGNlcHQgdGhlIHN0YXRlIG1vdmVzIGZyb20gYCdleGl0aW5nJ2AgdG8gYCdleGl0ZWQnYC5cbiAqXG4gKiAjIyBUaW1pbmdcbiAqXG4gKiBUaW1pbmcgaXMgb2Z0ZW4gdGhlIHRyaWNraWVzdCBwYXJ0IG9mIGFuaW1hdGlvbiwgbWlzdGFrZXMgY2FuIHJlc3VsdCBpbiBzbGlnaHQgZGVsYXlzXG4gKiB0aGF0IGFyZSBoYXJkIHRvIHBpbiBkb3duLiBBIGNvbW1vbiBleGFtcGxlIGlzIHdoZW4geW91IHdhbnQgdG8gYWRkIGFuIGV4aXQgdHJhbnNpdGlvbixcbiAqIHlvdSBzaG91bGQgc2V0IHRoZSBkZXNpcmVkIGZpbmFsIHN0eWxlcyB3aGVuIHRoZSBzdGF0ZSBpcyBgJ2V4aXRpbmcnYC4gVGhhdCdzIHdoZW4gdGhlXG4gKiB0cmFuc2l0aW9uIHRvIHRob3NlIHN0eWxlcyB3aWxsIHN0YXJ0IGFuZCwgaWYgeW91IG1hdGNoZWQgdGhlIGB0aW1lb3V0YCBwcm9wIHdpdGggdGhlXG4gKiBDU1MgVHJhbnNpdGlvbiBkdXJhdGlvbiwgaXQgd2lsbCBlbmQgZXhhY3RseSB3aGVuIHRoZSBzdGF0ZSBjaGFuZ2VzIHRvIGAnZXhpdGVkJ2AuXG4gKlxuICogPiAqKk5vdGUqKjogRm9yIHNpbXBsZXIgdHJhbnNpdGlvbnMgdGhlIGBUcmFuc2l0aW9uYCBjb21wb25lbnQgbWlnaHQgYmUgZW5vdWdoLCBidXRcbiAqID4gdGFrZSBpbnRvIGFjY291bnQgdGhhdCBpdCdzIHBsYXRmb3JtLWFnbm9zdGljLCB3aGlsZSB0aGUgYENTU1RyYW5zaXRpb25gIGNvbXBvbmVudFxuICogPiBbZm9yY2VzIHJlZmxvd3NdKGh0dHBzOi8vZ2l0aHViLmNvbS9yZWFjdGpzL3JlYWN0LXRyYW5zaXRpb24tZ3JvdXAvYmxvYi81MDA3MzAzZTcyOWE3NGJlNjZhMjFjM2UyMjA1ZTQ5MTY4MjE1MjRiL3NyYy9DU1NUcmFuc2l0aW9uLmpzI0wyMDgtTDIxNSlcbiAqID4gaW4gb3JkZXIgdG8gbWFrZSBtb3JlIGNvbXBsZXggdHJhbnNpdGlvbnMgbW9yZSBwcmVkaWN0YWJsZS4gRm9yIGV4YW1wbGUsIGV2ZW4gdGhvdWdoXG4gKiA+IGNsYXNzZXMgYGV4YW1wbGUtZW50ZXJgIGFuZCBgZXhhbXBsZS1lbnRlci1hY3RpdmVgIGFyZSBhcHBsaWVkIGltbWVkaWF0ZWx5IG9uZSBhZnRlclxuICogPiBhbm90aGVyLCB5b3UgY2FuIHN0aWxsIHRyYW5zaXRpb24gZnJvbSBvbmUgdG8gdGhlIG90aGVyIGJlY2F1c2Ugb2YgdGhlIGZvcmNlZCByZWZsb3dcbiAqID4gKHJlYWQgW3RoaXMgaXNzdWVdKGh0dHBzOi8vZ2l0aHViLmNvbS9yZWFjdGpzL3JlYWN0LXRyYW5zaXRpb24tZ3JvdXAvaXNzdWVzLzE1OSNpc3N1ZWNvbW1lbnQtMzIyNzYxMTcxKVxuICogPiBmb3IgbW9yZSBpbmZvKS4gVGFrZSB0aGlzIGludG8gYWNjb3VudCB3aGVuIGNob29zaW5nIGJldHdlZW4gYFRyYW5zaXRpb25gIGFuZFxuICogPiBgQ1NTVHJhbnNpdGlvbmAuXG4gKi9cblxuZXhwb3J0cy5FWElUSU5HID0gRVhJVElORztcblxudmFyIFRyYW5zaXRpb24gPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzTG9vc2UoVHJhbnNpdGlvbiwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gVHJhbnNpdGlvbihwcm9wcywgY29udGV4dCkge1xuICAgIHZhciBfdGhpcztcblxuICAgIF90aGlzID0gX1JlYWN0JENvbXBvbmVudC5jYWxsKHRoaXMsIHByb3BzLCBjb250ZXh0KSB8fCB0aGlzO1xuICAgIHZhciBwYXJlbnRHcm91cCA9IGNvbnRleHQudHJhbnNpdGlvbkdyb3VwOyAvLyBJbiB0aGUgY29udGV4dCBvZiBhIFRyYW5zaXRpb25Hcm91cCBhbGwgZW50ZXJzIGFyZSByZWFsbHkgYXBwZWFyc1xuXG4gICAgdmFyIGFwcGVhciA9IHBhcmVudEdyb3VwICYmICFwYXJlbnRHcm91cC5pc01vdW50aW5nID8gcHJvcHMuZW50ZXIgOiBwcm9wcy5hcHBlYXI7XG4gICAgdmFyIGluaXRpYWxTdGF0dXM7XG4gICAgX3RoaXMuYXBwZWFyU3RhdHVzID0gbnVsbDtcblxuICAgIGlmIChwcm9wcy5pbikge1xuICAgICAgaWYgKGFwcGVhcikge1xuICAgICAgICBpbml0aWFsU3RhdHVzID0gRVhJVEVEO1xuICAgICAgICBfdGhpcy5hcHBlYXJTdGF0dXMgPSBFTlRFUklORztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGluaXRpYWxTdGF0dXMgPSBFTlRFUkVEO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAocHJvcHMudW5tb3VudE9uRXhpdCB8fCBwcm9wcy5tb3VudE9uRW50ZXIpIHtcbiAgICAgICAgaW5pdGlhbFN0YXR1cyA9IFVOTU9VTlRFRDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGluaXRpYWxTdGF0dXMgPSBFWElURUQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgX3RoaXMuc3RhdGUgPSB7XG4gICAgICBzdGF0dXM6IGluaXRpYWxTdGF0dXNcbiAgICB9O1xuICAgIF90aGlzLm5leHRDYWxsYmFjayA9IG51bGw7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IFRyYW5zaXRpb24ucHJvdG90eXBlO1xuXG4gIF9wcm90by5nZXRDaGlsZENvbnRleHQgPSBmdW5jdGlvbiBnZXRDaGlsZENvbnRleHQoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRyYW5zaXRpb25Hcm91cDogbnVsbCAvLyBhbGxvd3MgZm9yIG5lc3RlZCBUcmFuc2l0aW9uc1xuXG4gICAgfTtcbiAgfTtcblxuICBUcmFuc2l0aW9uLmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyA9IGZ1bmN0aW9uIGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyhfcmVmLCBwcmV2U3RhdGUpIHtcbiAgICB2YXIgbmV4dEluID0gX3JlZi5pbjtcblxuICAgIGlmIChuZXh0SW4gJiYgcHJldlN0YXRlLnN0YXR1cyA9PT0gVU5NT1VOVEVEKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdGF0dXM6IEVYSVRFRFxuICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfTsgLy8gZ2V0U25hcHNob3RCZWZvcmVVcGRhdGUocHJldlByb3BzKSB7XG4gIC8vICAgbGV0IG5leHRTdGF0dXMgPSBudWxsXG4gIC8vICAgaWYgKHByZXZQcm9wcyAhPT0gdGhpcy5wcm9wcykge1xuICAvLyAgICAgY29uc3QgeyBzdGF0dXMgfSA9IHRoaXMuc3RhdGVcbiAgLy8gICAgIGlmICh0aGlzLnByb3BzLmluKSB7XG4gIC8vICAgICAgIGlmIChzdGF0dXMgIT09IEVOVEVSSU5HICYmIHN0YXR1cyAhPT0gRU5URVJFRCkge1xuICAvLyAgICAgICAgIG5leHRTdGF0dXMgPSBFTlRFUklOR1xuICAvLyAgICAgICB9XG4gIC8vICAgICB9IGVsc2Uge1xuICAvLyAgICAgICBpZiAoc3RhdHVzID09PSBFTlRFUklORyB8fCBzdGF0dXMgPT09IEVOVEVSRUQpIHtcbiAgLy8gICAgICAgICBuZXh0U3RhdHVzID0gRVhJVElOR1xuICAvLyAgICAgICB9XG4gIC8vICAgICB9XG4gIC8vICAgfVxuICAvLyAgIHJldHVybiB7IG5leHRTdGF0dXMgfVxuICAvLyB9XG5cblxuICBfcHJvdG8uY29tcG9uZW50RGlkTW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLnVwZGF0ZVN0YXR1cyh0cnVlLCB0aGlzLmFwcGVhclN0YXR1cyk7XG4gIH07XG5cbiAgX3Byb3RvLmNvbXBvbmVudERpZFVwZGF0ZSA9IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcbiAgICB2YXIgbmV4dFN0YXR1cyA9IG51bGw7XG5cbiAgICBpZiAocHJldlByb3BzICE9PSB0aGlzLnByb3BzKSB7XG4gICAgICB2YXIgc3RhdHVzID0gdGhpcy5zdGF0ZS5zdGF0dXM7XG5cbiAgICAgIGlmICh0aGlzLnByb3BzLmluKSB7XG4gICAgICAgIGlmIChzdGF0dXMgIT09IEVOVEVSSU5HICYmIHN0YXR1cyAhPT0gRU5URVJFRCkge1xuICAgICAgICAgIG5leHRTdGF0dXMgPSBFTlRFUklORztcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHN0YXR1cyA9PT0gRU5URVJJTkcgfHwgc3RhdHVzID09PSBFTlRFUkVEKSB7XG4gICAgICAgICAgbmV4dFN0YXR1cyA9IEVYSVRJTkc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLnVwZGF0ZVN0YXR1cyhmYWxzZSwgbmV4dFN0YXR1cyk7XG4gIH07XG5cbiAgX3Byb3RvLmNvbXBvbmVudFdpbGxVbm1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5jYW5jZWxOZXh0Q2FsbGJhY2soKTtcbiAgfTtcblxuICBfcHJvdG8uZ2V0VGltZW91dHMgPSBmdW5jdGlvbiBnZXRUaW1lb3V0cygpIHtcbiAgICB2YXIgdGltZW91dCA9IHRoaXMucHJvcHMudGltZW91dDtcbiAgICB2YXIgZXhpdCwgZW50ZXIsIGFwcGVhcjtcbiAgICBleGl0ID0gZW50ZXIgPSBhcHBlYXIgPSB0aW1lb3V0O1xuXG4gICAgaWYgKHRpbWVvdXQgIT0gbnVsbCAmJiB0eXBlb2YgdGltZW91dCAhPT0gJ251bWJlcicpIHtcbiAgICAgIGV4aXQgPSB0aW1lb3V0LmV4aXQ7XG4gICAgICBlbnRlciA9IHRpbWVvdXQuZW50ZXI7XG4gICAgICBhcHBlYXIgPSB0aW1lb3V0LmFwcGVhcjtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgZXhpdDogZXhpdCxcbiAgICAgIGVudGVyOiBlbnRlcixcbiAgICAgIGFwcGVhcjogYXBwZWFyXG4gICAgfTtcbiAgfTtcblxuICBfcHJvdG8udXBkYXRlU3RhdHVzID0gZnVuY3Rpb24gdXBkYXRlU3RhdHVzKG1vdW50aW5nLCBuZXh0U3RhdHVzKSB7XG4gICAgaWYgKG1vdW50aW5nID09PSB2b2lkIDApIHtcbiAgICAgIG1vdW50aW5nID0gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKG5leHRTdGF0dXMgIT09IG51bGwpIHtcbiAgICAgIC8vIG5leHRTdGF0dXMgd2lsbCBhbHdheXMgYmUgRU5URVJJTkcgb3IgRVhJVElORy5cbiAgICAgIHRoaXMuY2FuY2VsTmV4dENhbGxiYWNrKCk7XG5cbiAgICAgIHZhciBub2RlID0gX3JlYWN0RG9tLmRlZmF1bHQuZmluZERPTU5vZGUodGhpcyk7XG5cbiAgICAgIGlmIChuZXh0U3RhdHVzID09PSBFTlRFUklORykge1xuICAgICAgICB0aGlzLnBlcmZvcm1FbnRlcihub2RlLCBtb3VudGluZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnBlcmZvcm1FeGl0KG5vZGUpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodGhpcy5wcm9wcy51bm1vdW50T25FeGl0ICYmIHRoaXMuc3RhdGUuc3RhdHVzID09PSBFWElURUQpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBzdGF0dXM6IFVOTU9VTlRFRFxuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5wZXJmb3JtRW50ZXIgPSBmdW5jdGlvbiBwZXJmb3JtRW50ZXIobm9kZSwgbW91bnRpbmcpIHtcbiAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgIHZhciBlbnRlciA9IHRoaXMucHJvcHMuZW50ZXI7XG4gICAgdmFyIGFwcGVhcmluZyA9IHRoaXMuY29udGV4dC50cmFuc2l0aW9uR3JvdXAgPyB0aGlzLmNvbnRleHQudHJhbnNpdGlvbkdyb3VwLmlzTW91bnRpbmcgOiBtb3VudGluZztcbiAgICB2YXIgdGltZW91dHMgPSB0aGlzLmdldFRpbWVvdXRzKCk7IC8vIG5vIGVudGVyIGFuaW1hdGlvbiBza2lwIHJpZ2h0IHRvIEVOVEVSRURcbiAgICAvLyBpZiB3ZSBhcmUgbW91bnRpbmcgYW5kIHJ1bm5pbmcgdGhpcyBpdCBtZWFucyBhcHBlYXIgX211c3RfIGJlIHNldFxuXG4gICAgaWYgKCFtb3VudGluZyAmJiAhZW50ZXIpIHtcbiAgICAgIHRoaXMuc2FmZVNldFN0YXRlKHtcbiAgICAgICAgc3RhdHVzOiBFTlRFUkVEXG4gICAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIF90aGlzMi5wcm9wcy5vbkVudGVyZWQobm9kZSk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnByb3BzLm9uRW50ZXIobm9kZSwgYXBwZWFyaW5nKTtcbiAgICB0aGlzLnNhZmVTZXRTdGF0ZSh7XG4gICAgICBzdGF0dXM6IEVOVEVSSU5HXG4gICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgX3RoaXMyLnByb3BzLm9uRW50ZXJpbmcobm9kZSwgYXBwZWFyaW5nKTsgLy8gRklYTUU6IGFwcGVhciB0aW1lb3V0P1xuXG5cbiAgICAgIF90aGlzMi5vblRyYW5zaXRpb25FbmQobm9kZSwgdGltZW91dHMuZW50ZXIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgX3RoaXMyLnNhZmVTZXRTdGF0ZSh7XG4gICAgICAgICAgc3RhdHVzOiBFTlRFUkVEXG4gICAgICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBfdGhpczIucHJvcHMub25FbnRlcmVkKG5vZGUsIGFwcGVhcmluZyk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgX3Byb3RvLnBlcmZvcm1FeGl0ID0gZnVuY3Rpb24gcGVyZm9ybUV4aXQobm9kZSkge1xuICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgdmFyIGV4aXQgPSB0aGlzLnByb3BzLmV4aXQ7XG4gICAgdmFyIHRpbWVvdXRzID0gdGhpcy5nZXRUaW1lb3V0cygpOyAvLyBubyBleGl0IGFuaW1hdGlvbiBza2lwIHJpZ2h0IHRvIEVYSVRFRFxuXG4gICAgaWYgKCFleGl0KSB7XG4gICAgICB0aGlzLnNhZmVTZXRTdGF0ZSh7XG4gICAgICAgIHN0YXR1czogRVhJVEVEXG4gICAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIF90aGlzMy5wcm9wcy5vbkV4aXRlZChub2RlKTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMucHJvcHMub25FeGl0KG5vZGUpO1xuICAgIHRoaXMuc2FmZVNldFN0YXRlKHtcbiAgICAgIHN0YXR1czogRVhJVElOR1xuICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgIF90aGlzMy5wcm9wcy5vbkV4aXRpbmcobm9kZSk7XG5cbiAgICAgIF90aGlzMy5vblRyYW5zaXRpb25FbmQobm9kZSwgdGltZW91dHMuZXhpdCwgZnVuY3Rpb24gKCkge1xuICAgICAgICBfdGhpczMuc2FmZVNldFN0YXRlKHtcbiAgICAgICAgICBzdGF0dXM6IEVYSVRFRFxuICAgICAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgX3RoaXMzLnByb3BzLm9uRXhpdGVkKG5vZGUpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIF9wcm90by5jYW5jZWxOZXh0Q2FsbGJhY2sgPSBmdW5jdGlvbiBjYW5jZWxOZXh0Q2FsbGJhY2soKSB7XG4gICAgaWYgKHRoaXMubmV4dENhbGxiYWNrICE9PSBudWxsKSB7XG4gICAgICB0aGlzLm5leHRDYWxsYmFjay5jYW5jZWwoKTtcbiAgICAgIHRoaXMubmV4dENhbGxiYWNrID0gbnVsbDtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLnNhZmVTZXRTdGF0ZSA9IGZ1bmN0aW9uIHNhZmVTZXRTdGF0ZShuZXh0U3RhdGUsIGNhbGxiYWNrKSB7XG4gICAgLy8gVGhpcyBzaG91bGRuJ3QgYmUgbmVjZXNzYXJ5LCBidXQgdGhlcmUgYXJlIHdlaXJkIHJhY2UgY29uZGl0aW9ucyB3aXRoXG4gICAgLy8gc2V0U3RhdGUgY2FsbGJhY2tzIGFuZCB1bm1vdW50aW5nIGluIHRlc3RpbmcsIHNvIGFsd2F5cyBtYWtlIHN1cmUgdGhhdFxuICAgIC8vIHdlIGNhbiBjYW5jZWwgYW55IHBlbmRpbmcgc2V0U3RhdGUgY2FsbGJhY2tzIGFmdGVyIHdlIHVubW91bnQuXG4gICAgY2FsbGJhY2sgPSB0aGlzLnNldE5leHRDYWxsYmFjayhjYWxsYmFjayk7XG4gICAgdGhpcy5zZXRTdGF0ZShuZXh0U3RhdGUsIGNhbGxiYWNrKTtcbiAgfTtcblxuICBfcHJvdG8uc2V0TmV4dENhbGxiYWNrID0gZnVuY3Rpb24gc2V0TmV4dENhbGxiYWNrKGNhbGxiYWNrKSB7XG4gICAgdmFyIF90aGlzNCA9IHRoaXM7XG5cbiAgICB2YXIgYWN0aXZlID0gdHJ1ZTtcblxuICAgIHRoaXMubmV4dENhbGxiYWNrID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBpZiAoYWN0aXZlKSB7XG4gICAgICAgIGFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICBfdGhpczQubmV4dENhbGxiYWNrID0gbnVsbDtcbiAgICAgICAgY2FsbGJhY2soZXZlbnQpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB0aGlzLm5leHRDYWxsYmFjay5jYW5jZWwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBhY3RpdmUgPSBmYWxzZTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHRoaXMubmV4dENhbGxiYWNrO1xuICB9O1xuXG4gIF9wcm90by5vblRyYW5zaXRpb25FbmQgPSBmdW5jdGlvbiBvblRyYW5zaXRpb25FbmQobm9kZSwgdGltZW91dCwgaGFuZGxlcikge1xuICAgIHRoaXMuc2V0TmV4dENhbGxiYWNrKGhhbmRsZXIpO1xuXG4gICAgaWYgKG5vZGUpIHtcbiAgICAgIGlmICh0aGlzLnByb3BzLmFkZEVuZExpc3RlbmVyKSB7XG4gICAgICAgIHRoaXMucHJvcHMuYWRkRW5kTGlzdGVuZXIobm9kZSwgdGhpcy5uZXh0Q2FsbGJhY2spO1xuICAgICAgfVxuXG4gICAgICBpZiAodGltZW91dCAhPSBudWxsKSB7XG4gICAgICAgIHNldFRpbWVvdXQodGhpcy5uZXh0Q2FsbGJhY2ssIHRpbWVvdXQpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBzZXRUaW1lb3V0KHRoaXMubmV4dENhbGxiYWNrLCAwKTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgc3RhdHVzID0gdGhpcy5zdGF0ZS5zdGF0dXM7XG5cbiAgICBpZiAoc3RhdHVzID09PSBVTk1PVU5URUQpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHZhciBfdGhpcyRwcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgIGNoaWxkcmVuID0gX3RoaXMkcHJvcHMuY2hpbGRyZW4sXG4gICAgICAgIGNoaWxkUHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShfdGhpcyRwcm9wcywgW1wiY2hpbGRyZW5cIl0pOyAvLyBmaWx0ZXIgcHJvcHMgZm9yIFRyYW5zdGl0aW9uXG5cblxuICAgIGRlbGV0ZSBjaGlsZFByb3BzLmluO1xuICAgIGRlbGV0ZSBjaGlsZFByb3BzLm1vdW50T25FbnRlcjtcbiAgICBkZWxldGUgY2hpbGRQcm9wcy51bm1vdW50T25FeGl0O1xuICAgIGRlbGV0ZSBjaGlsZFByb3BzLmFwcGVhcjtcbiAgICBkZWxldGUgY2hpbGRQcm9wcy5lbnRlcjtcbiAgICBkZWxldGUgY2hpbGRQcm9wcy5leGl0O1xuICAgIGRlbGV0ZSBjaGlsZFByb3BzLnRpbWVvdXQ7XG4gICAgZGVsZXRlIGNoaWxkUHJvcHMuYWRkRW5kTGlzdGVuZXI7XG4gICAgZGVsZXRlIGNoaWxkUHJvcHMub25FbnRlcjtcbiAgICBkZWxldGUgY2hpbGRQcm9wcy5vbkVudGVyaW5nO1xuICAgIGRlbGV0ZSBjaGlsZFByb3BzLm9uRW50ZXJlZDtcbiAgICBkZWxldGUgY2hpbGRQcm9wcy5vbkV4aXQ7XG4gICAgZGVsZXRlIGNoaWxkUHJvcHMub25FeGl0aW5nO1xuICAgIGRlbGV0ZSBjaGlsZFByb3BzLm9uRXhpdGVkO1xuXG4gICAgaWYgKHR5cGVvZiBjaGlsZHJlbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIGNoaWxkcmVuKHN0YXR1cywgY2hpbGRQcm9wcyk7XG4gICAgfVxuXG4gICAgdmFyIGNoaWxkID0gX3JlYWN0LmRlZmF1bHQuQ2hpbGRyZW4ub25seShjaGlsZHJlbik7XG5cbiAgICByZXR1cm4gX3JlYWN0LmRlZmF1bHQuY2xvbmVFbGVtZW50KGNoaWxkLCBjaGlsZFByb3BzKTtcbiAgfTtcblxuICByZXR1cm4gVHJhbnNpdGlvbjtcbn0oX3JlYWN0LmRlZmF1bHQuQ29tcG9uZW50KTtcblxuVHJhbnNpdGlvbi5jb250ZXh0VHlwZXMgPSB7XG4gIHRyYW5zaXRpb25Hcm91cDogUHJvcFR5cGVzLm9iamVjdFxufTtcblRyYW5zaXRpb24uY2hpbGRDb250ZXh0VHlwZXMgPSB7XG4gIHRyYW5zaXRpb25Hcm91cDogZnVuY3Rpb24gdHJhbnNpdGlvbkdyb3VwKCkge31cbn07XG5UcmFuc2l0aW9uLnByb3BUeXBlcyA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IHtcbiAgLyoqXG4gICAqIEEgYGZ1bmN0aW9uYCBjaGlsZCBjYW4gYmUgdXNlZCBpbnN0ZWFkIG9mIGEgUmVhY3QgZWxlbWVudC5cbiAgICogVGhpcyBmdW5jdGlvbiBpcyBjYWxsZWQgd2l0aCB0aGUgY3VycmVudCB0cmFuc2l0aW9uIHN0YXR1c1xuICAgKiAoJ2VudGVyaW5nJywgJ2VudGVyZWQnLCAnZXhpdGluZycsICdleGl0ZWQnLCAndW5tb3VudGVkJyksIHdoaWNoIGNhbiBiZSB1c2VkXG4gICAqIHRvIGFwcGx5IGNvbnRleHQgc3BlY2lmaWMgcHJvcHMgdG8gYSBjb21wb25lbnQuXG4gICAqXG4gICAqIGBgYGpzeFxuICAgKiA8VHJhbnNpdGlvbiB0aW1lb3V0PXsxNTB9PlxuICAgKiAgIHsoc3RhdHVzKSA9PiAoXG4gICAqICAgICA8TXlDb21wb25lbnQgY2xhc3NOYW1lPXtgZmFkZSBmYWRlLSR7c3RhdHVzfWB9IC8+XG4gICAqICAgKX1cbiAgICogPC9UcmFuc2l0aW9uPlxuICAgKiBgYGBcbiAgICovXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLCBQcm9wVHlwZXMuZWxlbWVudC5pc1JlcXVpcmVkXSkuaXNSZXF1aXJlZCxcblxuICAvKipcbiAgICogU2hvdyB0aGUgY29tcG9uZW50OyB0cmlnZ2VycyB0aGUgZW50ZXIgb3IgZXhpdCBzdGF0ZXNcbiAgICovXG4gIGluOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogQnkgZGVmYXVsdCB0aGUgY2hpbGQgY29tcG9uZW50IGlzIG1vdW50ZWQgaW1tZWRpYXRlbHkgYWxvbmcgd2l0aFxuICAgKiB0aGUgcGFyZW50IGBUcmFuc2l0aW9uYCBjb21wb25lbnQuIElmIHlvdSB3YW50IHRvIFwibGF6eSBtb3VudFwiIHRoZSBjb21wb25lbnQgb24gdGhlXG4gICAqIGZpcnN0IGBpbj17dHJ1ZX1gIHlvdSBjYW4gc2V0IGBtb3VudE9uRW50ZXJgLiBBZnRlciB0aGUgZmlyc3QgZW50ZXIgdHJhbnNpdGlvbiB0aGUgY29tcG9uZW50IHdpbGwgc3RheVxuICAgKiBtb3VudGVkLCBldmVuIG9uIFwiZXhpdGVkXCIsIHVubGVzcyB5b3UgYWxzbyBzcGVjaWZ5IGB1bm1vdW50T25FeGl0YC5cbiAgICovXG4gIG1vdW50T25FbnRlcjogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIEJ5IGRlZmF1bHQgdGhlIGNoaWxkIGNvbXBvbmVudCBzdGF5cyBtb3VudGVkIGFmdGVyIGl0IHJlYWNoZXMgdGhlIGAnZXhpdGVkJ2Agc3RhdGUuXG4gICAqIFNldCBgdW5tb3VudE9uRXhpdGAgaWYgeW91J2QgcHJlZmVyIHRvIHVubW91bnQgdGhlIGNvbXBvbmVudCBhZnRlciBpdCBmaW5pc2hlcyBleGl0aW5nLlxuICAgKi9cbiAgdW5tb3VudE9uRXhpdDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIE5vcm1hbGx5IGEgY29tcG9uZW50IGlzIG5vdCB0cmFuc2l0aW9uZWQgaWYgaXQgaXMgc2hvd24gd2hlbiB0aGUgYDxUcmFuc2l0aW9uPmAgY29tcG9uZW50IG1vdW50cy5cbiAgICogSWYgeW91IHdhbnQgdG8gdHJhbnNpdGlvbiBvbiB0aGUgZmlyc3QgbW91bnQgc2V0IGBhcHBlYXJgIHRvIGB0cnVlYCwgYW5kIHRoZVxuICAgKiBjb21wb25lbnQgd2lsbCB0cmFuc2l0aW9uIGluIGFzIHNvb24gYXMgdGhlIGA8VHJhbnNpdGlvbj5gIG1vdW50cy5cbiAgICpcbiAgICogPiBOb3RlOiB0aGVyZSBhcmUgbm8gc3BlY2lmaWMgXCJhcHBlYXJcIiBzdGF0ZXMuIGBhcHBlYXJgIG9ubHkgYWRkcyBhbiBhZGRpdGlvbmFsIGBlbnRlcmAgdHJhbnNpdGlvbi5cbiAgICovXG4gIGFwcGVhcjogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIEVuYWJsZSBvciBkaXNhYmxlIGVudGVyIHRyYW5zaXRpb25zLlxuICAgKi9cbiAgZW50ZXI6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBFbmFibGUgb3IgZGlzYWJsZSBleGl0IHRyYW5zaXRpb25zLlxuICAgKi9cbiAgZXhpdDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIFRoZSBkdXJhdGlvbiBvZiB0aGUgdHJhbnNpdGlvbiwgaW4gbWlsbGlzZWNvbmRzLlxuICAgKiBSZXF1aXJlZCB1bmxlc3MgYGFkZEVuZExpc3RlbmVyYCBpcyBwcm92aWRlZFxuICAgKlxuICAgKiBZb3UgbWF5IHNwZWNpZnkgYSBzaW5nbGUgdGltZW91dCBmb3IgYWxsIHRyYW5zaXRpb25zIGxpa2U6IGB0aW1lb3V0PXs1MDB9YCxcbiAgICogb3IgaW5kaXZpZHVhbGx5IGxpa2U6XG4gICAqXG4gICAqIGBgYGpzeFxuICAgKiB0aW1lb3V0PXt7XG4gICAqICBlbnRlcjogMzAwLFxuICAgKiAgZXhpdDogNTAwLFxuICAgKiB9fVxuICAgKiBgYGBcbiAgICpcbiAgICogQHR5cGUge251bWJlciB8IHsgZW50ZXI/OiBudW1iZXIsIGV4aXQ/OiBudW1iZXIgfX1cbiAgICovXG4gIHRpbWVvdXQ6IGZ1bmN0aW9uIHRpbWVvdXQocHJvcHMpIHtcbiAgICB2YXIgcHQgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBfUHJvcFR5cGVzLnRpbWVvdXRzU2hhcGUgOiB7fTs7XG4gICAgaWYgKCFwcm9wcy5hZGRFbmRMaXN0ZW5lcikgcHQgPSBwdC5pc1JlcXVpcmVkO1xuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgcmV0dXJuIHB0LmFwcGx5KHZvaWQgMCwgW3Byb3BzXS5jb25jYXQoYXJncykpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBBZGQgYSBjdXN0b20gdHJhbnNpdGlvbiBlbmQgdHJpZ2dlci4gQ2FsbGVkIHdpdGggdGhlIHRyYW5zaXRpb25pbmdcbiAgICogRE9NIG5vZGUgYW5kIGEgYGRvbmVgIGNhbGxiYWNrLiBBbGxvd3MgZm9yIG1vcmUgZmluZSBncmFpbmVkIHRyYW5zaXRpb24gZW5kXG4gICAqIGxvZ2ljLiAqKk5vdGU6KiogVGltZW91dHMgYXJlIHN0aWxsIHVzZWQgYXMgYSBmYWxsYmFjayBpZiBwcm92aWRlZC5cbiAgICpcbiAgICogYGBganN4XG4gICAqIGFkZEVuZExpc3RlbmVyPXsobm9kZSwgZG9uZSkgPT4ge1xuICAgKiAgIC8vIHVzZSB0aGUgY3NzIHRyYW5zaXRpb25lbmQgZXZlbnQgdG8gbWFyayB0aGUgZmluaXNoIG9mIGEgdHJhbnNpdGlvblxuICAgKiAgIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIGRvbmUsIGZhbHNlKTtcbiAgICogfX1cbiAgICogYGBgXG4gICAqL1xuICBhZGRFbmRMaXN0ZW5lcjogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIGZpcmVkIGJlZm9yZSB0aGUgXCJlbnRlcmluZ1wiIHN0YXR1cyBpcyBhcHBsaWVkLiBBbiBleHRyYSBwYXJhbWV0ZXJcbiAgICogYGlzQXBwZWFyaW5nYCBpcyBzdXBwbGllZCB0byBpbmRpY2F0ZSBpZiB0aGUgZW50ZXIgc3RhZ2UgaXMgb2NjdXJyaW5nIG9uIHRoZSBpbml0aWFsIG1vdW50XG4gICAqXG4gICAqIEB0eXBlIEZ1bmN0aW9uKG5vZGU6IEh0bWxFbGVtZW50LCBpc0FwcGVhcmluZzogYm9vbCkgLT4gdm9pZFxuICAgKi9cbiAgb25FbnRlcjogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIGZpcmVkIGFmdGVyIHRoZSBcImVudGVyaW5nXCIgc3RhdHVzIGlzIGFwcGxpZWQuIEFuIGV4dHJhIHBhcmFtZXRlclxuICAgKiBgaXNBcHBlYXJpbmdgIGlzIHN1cHBsaWVkIHRvIGluZGljYXRlIGlmIHRoZSBlbnRlciBzdGFnZSBpcyBvY2N1cnJpbmcgb24gdGhlIGluaXRpYWwgbW91bnRcbiAgICpcbiAgICogQHR5cGUgRnVuY3Rpb24obm9kZTogSHRtbEVsZW1lbnQsIGlzQXBwZWFyaW5nOiBib29sKVxuICAgKi9cbiAgb25FbnRlcmluZzogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIGZpcmVkIGFmdGVyIHRoZSBcImVudGVyZWRcIiBzdGF0dXMgaXMgYXBwbGllZC4gQW4gZXh0cmEgcGFyYW1ldGVyXG4gICAqIGBpc0FwcGVhcmluZ2AgaXMgc3VwcGxpZWQgdG8gaW5kaWNhdGUgaWYgdGhlIGVudGVyIHN0YWdlIGlzIG9jY3VycmluZyBvbiB0aGUgaW5pdGlhbCBtb3VudFxuICAgKlxuICAgKiBAdHlwZSBGdW5jdGlvbihub2RlOiBIdG1sRWxlbWVudCwgaXNBcHBlYXJpbmc6IGJvb2wpIC0+IHZvaWRcbiAgICovXG4gIG9uRW50ZXJlZDogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIGZpcmVkIGJlZm9yZSB0aGUgXCJleGl0aW5nXCIgc3RhdHVzIGlzIGFwcGxpZWQuXG4gICAqXG4gICAqIEB0eXBlIEZ1bmN0aW9uKG5vZGU6IEh0bWxFbGVtZW50KSAtPiB2b2lkXG4gICAqL1xuICBvbkV4aXQ6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmaXJlZCBhZnRlciB0aGUgXCJleGl0aW5nXCIgc3RhdHVzIGlzIGFwcGxpZWQuXG4gICAqXG4gICAqIEB0eXBlIEZ1bmN0aW9uKG5vZGU6IEh0bWxFbGVtZW50KSAtPiB2b2lkXG4gICAqL1xuICBvbkV4aXRpbmc6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmaXJlZCBhZnRlciB0aGUgXCJleGl0ZWRcIiBzdGF0dXMgaXMgYXBwbGllZC5cbiAgICpcbiAgICogQHR5cGUgRnVuY3Rpb24obm9kZTogSHRtbEVsZW1lbnQpIC0+IHZvaWRcbiAgICovXG4gIG9uRXhpdGVkOiBQcm9wVHlwZXMuZnVuYyAvLyBOYW1lIHRoZSBmdW5jdGlvbiBzbyBpdCBpcyBjbGVhcmVyIGluIHRoZSBkb2N1bWVudGF0aW9uXG5cbn0gOiB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cblRyYW5zaXRpb24uZGVmYXVsdFByb3BzID0ge1xuICBpbjogZmFsc2UsXG4gIG1vdW50T25FbnRlcjogZmFsc2UsXG4gIHVubW91bnRPbkV4aXQ6IGZhbHNlLFxuICBhcHBlYXI6IGZhbHNlLFxuICBlbnRlcjogdHJ1ZSxcbiAgZXhpdDogdHJ1ZSxcbiAgb25FbnRlcjogbm9vcCxcbiAgb25FbnRlcmluZzogbm9vcCxcbiAgb25FbnRlcmVkOiBub29wLFxuICBvbkV4aXQ6IG5vb3AsXG4gIG9uRXhpdGluZzogbm9vcCxcbiAgb25FeGl0ZWQ6IG5vb3Bcbn07XG5UcmFuc2l0aW9uLlVOTU9VTlRFRCA9IDA7XG5UcmFuc2l0aW9uLkVYSVRFRCA9IDE7XG5UcmFuc2l0aW9uLkVOVEVSSU5HID0gMjtcblRyYW5zaXRpb24uRU5URVJFRCA9IDM7XG5UcmFuc2l0aW9uLkVYSVRJTkcgPSA0O1xuXG52YXIgX2RlZmF1bHQgPSAoMCwgX3JlYWN0TGlmZWN5Y2xlc0NvbXBhdC5wb2x5ZmlsbCkoVHJhbnNpdGlvbik7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgUHJvcFR5cGVzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInByb3AtdHlwZXNcIikpO1xuXG52YXIgX2FkZENsYXNzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiZG9tLWhlbHBlcnMvY2xhc3MvYWRkQ2xhc3NcIikpO1xuXG52YXIgX3JlbW92ZUNsYXNzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiZG9tLWhlbHBlcnMvY2xhc3MvcmVtb3ZlQ2xhc3NcIikpO1xuXG52YXIgX3JlYWN0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgX1RyYW5zaXRpb24gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL1RyYW5zaXRpb25cIikpO1xuXG52YXIgX1Byb3BUeXBlcyA9IHJlcXVpcmUoXCIuL3V0aWxzL1Byb3BUeXBlc1wiKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7IGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHsgcmV0dXJuIG9iajsgfSBlbHNlIHsgdmFyIG5ld09iaiA9IHt9OyBpZiAob2JqICE9IG51bGwpIHsgZm9yICh2YXIga2V5IGluIG9iaikgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkgeyB2YXIgZGVzYyA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiB7fTsgaWYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7IH0gZWxzZSB7IG5ld09ialtrZXldID0gb2JqW2tleV07IH0gfSB9IH0gbmV3T2JqLmRlZmF1bHQgPSBvYmo7IHJldHVybiBuZXdPYmo7IH0gfVxuXG5mdW5jdGlvbiBfZXh0ZW5kcygpIHsgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9OyByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHNMb29zZShzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MucHJvdG90eXBlKTsgc3ViQ2xhc3MucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gc3ViQ2xhc3M7IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIGFkZENsYXNzID0gZnVuY3Rpb24gYWRkQ2xhc3Mobm9kZSwgY2xhc3Nlcykge1xuICByZXR1cm4gbm9kZSAmJiBjbGFzc2VzICYmIGNsYXNzZXMuc3BsaXQoJyAnKS5mb3JFYWNoKGZ1bmN0aW9uIChjKSB7XG4gICAgcmV0dXJuICgwLCBfYWRkQ2xhc3MuZGVmYXVsdCkobm9kZSwgYyk7XG4gIH0pO1xufTtcblxudmFyIHJlbW92ZUNsYXNzID0gZnVuY3Rpb24gcmVtb3ZlQ2xhc3Mobm9kZSwgY2xhc3Nlcykge1xuICByZXR1cm4gbm9kZSAmJiBjbGFzc2VzICYmIGNsYXNzZXMuc3BsaXQoJyAnKS5mb3JFYWNoKGZ1bmN0aW9uIChjKSB7XG4gICAgcmV0dXJuICgwLCBfcmVtb3ZlQ2xhc3MuZGVmYXVsdCkobm9kZSwgYyk7XG4gIH0pO1xufTtcbi8qKlxuICogQSBgVHJhbnNpdGlvbmAgY29tcG9uZW50IHVzaW5nIENTUyB0cmFuc2l0aW9ucyBhbmQgYW5pbWF0aW9ucy5cbiAqIEl0J3MgaW5zcGlyZWQgYnkgdGhlIGV4Y2VsbGVudCBbbmctYW5pbWF0ZV0oaHR0cDovL3d3dy5uZ2FuaW1hdGUub3JnLykgbGlicmFyeS5cbiAqXG4gKiBgQ1NTVHJhbnNpdGlvbmAgYXBwbGllcyBhIHBhaXIgb2YgY2xhc3MgbmFtZXMgZHVyaW5nIHRoZSBgYXBwZWFyYCwgYGVudGVyYCxcbiAqIGFuZCBgZXhpdGAgc3RhZ2VzIG9mIHRoZSB0cmFuc2l0aW9uLiBUaGUgZmlyc3QgY2xhc3MgaXMgYXBwbGllZCBhbmQgdGhlbiBhXG4gKiBzZWNvbmQgXCJhY3RpdmVcIiBjbGFzcyBpbiBvcmRlciB0byBhY3RpdmF0ZSB0aGUgY3NzIGFuaW1hdGlvbi4gQWZ0ZXIgdGhlIGFuaW1hdGlvbixcbiAqIG1hdGNoaW5nIGBkb25lYCBjbGFzcyBuYW1lcyBhcmUgYXBwbGllZCB0byBwZXJzaXN0IHRoZSBhbmltYXRpb24gc3RhdGUuXG4gKlxuICogV2hlbiB0aGUgYGluYCBwcm9wIGlzIHRvZ2dsZWQgdG8gYHRydWVgIHRoZSBDb21wb25lbnQgd2lsbCBnZXRcbiAqIHRoZSBgZXhhbXBsZS1lbnRlcmAgQ1NTIGNsYXNzIGFuZCB0aGUgYGV4YW1wbGUtZW50ZXItYWN0aXZlYCBDU1MgY2xhc3NcbiAqIGFkZGVkIGluIHRoZSBuZXh0IHRpY2suIFRoaXMgaXMgYSBjb252ZW50aW9uIGJhc2VkIG9uIHRoZSBgY2xhc3NOYW1lc2AgcHJvcC5cbiAqL1xuXG5cbnZhciBDU1NUcmFuc2l0aW9uID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0c0xvb3NlKENTU1RyYW5zaXRpb24sIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIENTU1RyYW5zaXRpb24oKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIF90aGlzID0gX1JlYWN0JENvbXBvbmVudC5jYWxsLmFwcGx5KF9SZWFjdCRDb21wb25lbnQsIFt0aGlzXS5jb25jYXQoYXJncykpIHx8IHRoaXM7XG5cbiAgICBfdGhpcy5vbkVudGVyID0gZnVuY3Rpb24gKG5vZGUsIGFwcGVhcmluZykge1xuICAgICAgdmFyIF90aGlzJGdldENsYXNzTmFtZXMgPSBfdGhpcy5nZXRDbGFzc05hbWVzKGFwcGVhcmluZyA/ICdhcHBlYXInIDogJ2VudGVyJyksXG4gICAgICAgICAgY2xhc3NOYW1lID0gX3RoaXMkZ2V0Q2xhc3NOYW1lcy5jbGFzc05hbWU7XG5cbiAgICAgIF90aGlzLnJlbW92ZUNsYXNzZXMobm9kZSwgJ2V4aXQnKTtcblxuICAgICAgYWRkQ2xhc3Mobm9kZSwgY2xhc3NOYW1lKTtcblxuICAgICAgaWYgKF90aGlzLnByb3BzLm9uRW50ZXIpIHtcbiAgICAgICAgX3RoaXMucHJvcHMub25FbnRlcihub2RlLCBhcHBlYXJpbmcpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfdGhpcy5vbkVudGVyaW5nID0gZnVuY3Rpb24gKG5vZGUsIGFwcGVhcmluZykge1xuICAgICAgdmFyIF90aGlzJGdldENsYXNzTmFtZXMyID0gX3RoaXMuZ2V0Q2xhc3NOYW1lcyhhcHBlYXJpbmcgPyAnYXBwZWFyJyA6ICdlbnRlcicpLFxuICAgICAgICAgIGFjdGl2ZUNsYXNzTmFtZSA9IF90aGlzJGdldENsYXNzTmFtZXMyLmFjdGl2ZUNsYXNzTmFtZTtcblxuICAgICAgX3RoaXMucmVmbG93QW5kQWRkQ2xhc3Mobm9kZSwgYWN0aXZlQ2xhc3NOYW1lKTtcblxuICAgICAgaWYgKF90aGlzLnByb3BzLm9uRW50ZXJpbmcpIHtcbiAgICAgICAgX3RoaXMucHJvcHMub25FbnRlcmluZyhub2RlLCBhcHBlYXJpbmcpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfdGhpcy5vbkVudGVyZWQgPSBmdW5jdGlvbiAobm9kZSwgYXBwZWFyaW5nKSB7XG4gICAgICB2YXIgX3RoaXMkZ2V0Q2xhc3NOYW1lczMgPSBfdGhpcy5nZXRDbGFzc05hbWVzKCdlbnRlcicpLFxuICAgICAgICAgIGRvbmVDbGFzc05hbWUgPSBfdGhpcyRnZXRDbGFzc05hbWVzMy5kb25lQ2xhc3NOYW1lO1xuXG4gICAgICBfdGhpcy5yZW1vdmVDbGFzc2VzKG5vZGUsIGFwcGVhcmluZyA/ICdhcHBlYXInIDogJ2VudGVyJyk7XG5cbiAgICAgIGFkZENsYXNzKG5vZGUsIGRvbmVDbGFzc05hbWUpO1xuXG4gICAgICBpZiAoX3RoaXMucHJvcHMub25FbnRlcmVkKSB7XG4gICAgICAgIF90aGlzLnByb3BzLm9uRW50ZXJlZChub2RlLCBhcHBlYXJpbmcpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfdGhpcy5vbkV4aXQgPSBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgdmFyIF90aGlzJGdldENsYXNzTmFtZXM0ID0gX3RoaXMuZ2V0Q2xhc3NOYW1lcygnZXhpdCcpLFxuICAgICAgICAgIGNsYXNzTmFtZSA9IF90aGlzJGdldENsYXNzTmFtZXM0LmNsYXNzTmFtZTtcblxuICAgICAgX3RoaXMucmVtb3ZlQ2xhc3Nlcyhub2RlLCAnYXBwZWFyJyk7XG5cbiAgICAgIF90aGlzLnJlbW92ZUNsYXNzZXMobm9kZSwgJ2VudGVyJyk7XG5cbiAgICAgIGFkZENsYXNzKG5vZGUsIGNsYXNzTmFtZSk7XG5cbiAgICAgIGlmIChfdGhpcy5wcm9wcy5vbkV4aXQpIHtcbiAgICAgICAgX3RoaXMucHJvcHMub25FeGl0KG5vZGUpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfdGhpcy5vbkV4aXRpbmcgPSBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgdmFyIF90aGlzJGdldENsYXNzTmFtZXM1ID0gX3RoaXMuZ2V0Q2xhc3NOYW1lcygnZXhpdCcpLFxuICAgICAgICAgIGFjdGl2ZUNsYXNzTmFtZSA9IF90aGlzJGdldENsYXNzTmFtZXM1LmFjdGl2ZUNsYXNzTmFtZTtcblxuICAgICAgX3RoaXMucmVmbG93QW5kQWRkQ2xhc3Mobm9kZSwgYWN0aXZlQ2xhc3NOYW1lKTtcblxuICAgICAgaWYgKF90aGlzLnByb3BzLm9uRXhpdGluZykge1xuICAgICAgICBfdGhpcy5wcm9wcy5vbkV4aXRpbmcobm9kZSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF90aGlzLm9uRXhpdGVkID0gZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgIHZhciBfdGhpcyRnZXRDbGFzc05hbWVzNiA9IF90aGlzLmdldENsYXNzTmFtZXMoJ2V4aXQnKSxcbiAgICAgICAgICBkb25lQ2xhc3NOYW1lID0gX3RoaXMkZ2V0Q2xhc3NOYW1lczYuZG9uZUNsYXNzTmFtZTtcblxuICAgICAgX3RoaXMucmVtb3ZlQ2xhc3Nlcyhub2RlLCAnZXhpdCcpO1xuXG4gICAgICBhZGRDbGFzcyhub2RlLCBkb25lQ2xhc3NOYW1lKTtcblxuICAgICAgaWYgKF90aGlzLnByb3BzLm9uRXhpdGVkKSB7XG4gICAgICAgIF90aGlzLnByb3BzLm9uRXhpdGVkKG5vZGUpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfdGhpcy5nZXRDbGFzc05hbWVzID0gZnVuY3Rpb24gKHR5cGUpIHtcbiAgICAgIHZhciBjbGFzc05hbWVzID0gX3RoaXMucHJvcHMuY2xhc3NOYW1lcztcbiAgICAgIHZhciBjbGFzc05hbWUgPSB0eXBlb2YgY2xhc3NOYW1lcyAhPT0gJ3N0cmluZycgPyBjbGFzc05hbWVzW3R5cGVdIDogY2xhc3NOYW1lcyArICctJyArIHR5cGU7XG4gICAgICB2YXIgYWN0aXZlQ2xhc3NOYW1lID0gdHlwZW9mIGNsYXNzTmFtZXMgIT09ICdzdHJpbmcnID8gY2xhc3NOYW1lc1t0eXBlICsgJ0FjdGl2ZSddIDogY2xhc3NOYW1lICsgJy1hY3RpdmUnO1xuICAgICAgdmFyIGRvbmVDbGFzc05hbWUgPSB0eXBlb2YgY2xhc3NOYW1lcyAhPT0gJ3N0cmluZycgPyBjbGFzc05hbWVzW3R5cGUgKyAnRG9uZSddIDogY2xhc3NOYW1lICsgJy1kb25lJztcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lLFxuICAgICAgICBhY3RpdmVDbGFzc05hbWU6IGFjdGl2ZUNsYXNzTmFtZSxcbiAgICAgICAgZG9uZUNsYXNzTmFtZTogZG9uZUNsYXNzTmFtZVxuICAgICAgfTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IENTU1RyYW5zaXRpb24ucHJvdG90eXBlO1xuXG4gIF9wcm90by5yZW1vdmVDbGFzc2VzID0gZnVuY3Rpb24gcmVtb3ZlQ2xhc3Nlcyhub2RlLCB0eXBlKSB7XG4gICAgdmFyIF90aGlzJGdldENsYXNzTmFtZXM3ID0gdGhpcy5nZXRDbGFzc05hbWVzKHR5cGUpLFxuICAgICAgICBjbGFzc05hbWUgPSBfdGhpcyRnZXRDbGFzc05hbWVzNy5jbGFzc05hbWUsXG4gICAgICAgIGFjdGl2ZUNsYXNzTmFtZSA9IF90aGlzJGdldENsYXNzTmFtZXM3LmFjdGl2ZUNsYXNzTmFtZSxcbiAgICAgICAgZG9uZUNsYXNzTmFtZSA9IF90aGlzJGdldENsYXNzTmFtZXM3LmRvbmVDbGFzc05hbWU7XG5cbiAgICBjbGFzc05hbWUgJiYgcmVtb3ZlQ2xhc3Mobm9kZSwgY2xhc3NOYW1lKTtcbiAgICBhY3RpdmVDbGFzc05hbWUgJiYgcmVtb3ZlQ2xhc3Mobm9kZSwgYWN0aXZlQ2xhc3NOYW1lKTtcbiAgICBkb25lQ2xhc3NOYW1lICYmIHJlbW92ZUNsYXNzKG5vZGUsIGRvbmVDbGFzc05hbWUpO1xuICB9O1xuXG4gIF9wcm90by5yZWZsb3dBbmRBZGRDbGFzcyA9IGZ1bmN0aW9uIHJlZmxvd0FuZEFkZENsYXNzKG5vZGUsIGNsYXNzTmFtZSkge1xuICAgIC8vIFRoaXMgaXMgZm9yIHRvIGZvcmNlIGEgcmVwYWludCxcbiAgICAvLyB3aGljaCBpcyBuZWNlc3NhcnkgaW4gb3JkZXIgdG8gdHJhbnNpdGlvbiBzdHlsZXMgd2hlbiBhZGRpbmcgYSBjbGFzcyBuYW1lLlxuICAgIGlmIChjbGFzc05hbWUpIHtcbiAgICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC1leHByZXNzaW9ucyAqL1xuICAgICAgbm9kZSAmJiBub2RlLnNjcm9sbFRvcDtcbiAgICAgIC8qIGVzbGludC1lbmFibGUgbm8tdW51c2VkLWV4cHJlc3Npb25zICovXG5cbiAgICAgIGFkZENsYXNzKG5vZGUsIGNsYXNzTmFtZSk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIHByb3BzID0gX2V4dGVuZHMoe30sIHRoaXMucHJvcHMpO1xuXG4gICAgZGVsZXRlIHByb3BzLmNsYXNzTmFtZXM7XG4gICAgcmV0dXJuIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX1RyYW5zaXRpb24uZGVmYXVsdCwgX2V4dGVuZHMoe30sIHByb3BzLCB7XG4gICAgICBvbkVudGVyOiB0aGlzLm9uRW50ZXIsXG4gICAgICBvbkVudGVyZWQ6IHRoaXMub25FbnRlcmVkLFxuICAgICAgb25FbnRlcmluZzogdGhpcy5vbkVudGVyaW5nLFxuICAgICAgb25FeGl0OiB0aGlzLm9uRXhpdCxcbiAgICAgIG9uRXhpdGluZzogdGhpcy5vbkV4aXRpbmcsXG4gICAgICBvbkV4aXRlZDogdGhpcy5vbkV4aXRlZFxuICAgIH0pKTtcbiAgfTtcblxuICByZXR1cm4gQ1NTVHJhbnNpdGlvbjtcbn0oX3JlYWN0LmRlZmF1bHQuQ29tcG9uZW50KTtcblxuQ1NTVHJhbnNpdGlvbi5wcm9wVHlwZXMgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBfZXh0ZW5kcyh7fSwgX1RyYW5zaXRpb24uZGVmYXVsdC5wcm9wVHlwZXMsIHtcbiAgLyoqXG4gICAqIFRoZSBhbmltYXRpb24gY2xhc3NOYW1lcyBhcHBsaWVkIHRvIHRoZSBjb21wb25lbnQgYXMgaXQgZW50ZXJzLCBleGl0cyBvciBoYXMgZmluaXNoZWQgdGhlIHRyYW5zaXRpb24uXG4gICAqIEEgc2luZ2xlIG5hbWUgY2FuIGJlIHByb3ZpZGVkIGFuZCBpdCB3aWxsIGJlIHN1ZmZpeGVkIGZvciBlYWNoIHN0YWdlOiBlLmcuXG4gICAqXG4gICAqIGBjbGFzc05hbWVzPVwiZmFkZVwiYCBhcHBsaWVzIGBmYWRlLWVudGVyYCwgYGZhZGUtZW50ZXItYWN0aXZlYCwgYGZhZGUtZW50ZXItZG9uZWAsXG4gICAqIGBmYWRlLWV4aXRgLCBgZmFkZS1leGl0LWFjdGl2ZWAsIGBmYWRlLWV4aXQtZG9uZWAsIGBmYWRlLWFwcGVhcmAsIGFuZCBgZmFkZS1hcHBlYXItYWN0aXZlYC5cbiAgICogRWFjaCBpbmRpdmlkdWFsIGNsYXNzTmFtZXMgY2FuIGFsc28gYmUgc3BlY2lmaWVkIGluZGVwZW5kZW50bHkgbGlrZTpcbiAgICpcbiAgICogYGBganNcbiAgICogY2xhc3NOYW1lcz17e1xuICAgKiAgYXBwZWFyOiAnbXktYXBwZWFyJyxcbiAgICogIGFwcGVhckFjdGl2ZTogJ215LWFjdGl2ZS1hcHBlYXInLFxuICAgKiAgZW50ZXI6ICdteS1lbnRlcicsXG4gICAqICBlbnRlckFjdGl2ZTogJ215LWFjdGl2ZS1lbnRlcicsXG4gICAqICBlbnRlckRvbmU6ICdteS1kb25lLWVudGVyJyxcbiAgICogIGV4aXQ6ICdteS1leGl0JyxcbiAgICogIGV4aXRBY3RpdmU6ICdteS1hY3RpdmUtZXhpdCcsXG4gICAqICBleGl0RG9uZTogJ215LWRvbmUtZXhpdCcsXG4gICAqIH19XG4gICAqIGBgYFxuICAgKlxuICAgKiBJZiB5b3Ugd2FudCB0byBzZXQgdGhlc2UgY2xhc3NlcyB1c2luZyBDU1MgTW9kdWxlczpcbiAgICpcbiAgICogYGBganNcbiAgICogaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcy5jc3MnO1xuICAgKiBgYGBcbiAgICpcbiAgICogeW91IG1pZ2h0IHdhbnQgdG8gdXNlIGNhbWVsQ2FzZSBpbiB5b3VyIENTUyBmaWxlLCB0aGF0IHdheSBjb3VsZCBzaW1wbHkgc3ByZWFkXG4gICAqIHRoZW0gaW5zdGVhZCBvZiBsaXN0aW5nIHRoZW0gb25lIGJ5IG9uZTpcbiAgICpcbiAgICogYGBganNcbiAgICogY2xhc3NOYW1lcz17eyAuLi5zdHlsZXMgfX1cbiAgICogYGBgXG4gICAqXG4gICAqIEB0eXBlIHtzdHJpbmcgfCB7XG4gICAqICBhcHBlYXI/OiBzdHJpbmcsXG4gICAqICBhcHBlYXJBY3RpdmU/OiBzdHJpbmcsXG4gICAqICBlbnRlcj86IHN0cmluZyxcbiAgICogIGVudGVyQWN0aXZlPzogc3RyaW5nLFxuICAgKiAgZW50ZXJEb25lPzogc3RyaW5nLFxuICAgKiAgZXhpdD86IHN0cmluZyxcbiAgICogIGV4aXRBY3RpdmU/OiBzdHJpbmcsXG4gICAqICBleGl0RG9uZT86IHN0cmluZyxcbiAgICogfX1cbiAgICovXG4gIGNsYXNzTmFtZXM6IF9Qcm9wVHlwZXMuY2xhc3NOYW1lc1NoYXBlLFxuXG4gIC8qKlxuICAgKiBBIGA8VHJhbnNpdGlvbj5gIGNhbGxiYWNrIGZpcmVkIGltbWVkaWF0ZWx5IGFmdGVyIHRoZSAnZW50ZXInIG9yICdhcHBlYXInIGNsYXNzIGlzXG4gICAqIGFwcGxpZWQuXG4gICAqXG4gICAqIEB0eXBlIEZ1bmN0aW9uKG5vZGU6IEh0bWxFbGVtZW50LCBpc0FwcGVhcmluZzogYm9vbClcbiAgICovXG4gIG9uRW50ZXI6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBBIGA8VHJhbnNpdGlvbj5gIGNhbGxiYWNrIGZpcmVkIGltbWVkaWF0ZWx5IGFmdGVyIHRoZSAnZW50ZXItYWN0aXZlJyBvclxuICAgKiAnYXBwZWFyLWFjdGl2ZScgY2xhc3MgaXMgYXBwbGllZC5cbiAgICpcbiAgICogQHR5cGUgRnVuY3Rpb24obm9kZTogSHRtbEVsZW1lbnQsIGlzQXBwZWFyaW5nOiBib29sKVxuICAgKi9cbiAgb25FbnRlcmluZzogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIEEgYDxUcmFuc2l0aW9uPmAgY2FsbGJhY2sgZmlyZWQgaW1tZWRpYXRlbHkgYWZ0ZXIgdGhlICdlbnRlcicgb3JcbiAgICogJ2FwcGVhcicgY2xhc3NlcyBhcmUgKipyZW1vdmVkKiogYW5kIHRoZSBgZG9uZWAgY2xhc3MgaXMgYWRkZWQgdG8gdGhlIERPTSBub2RlLlxuICAgKlxuICAgKiBAdHlwZSBGdW5jdGlvbihub2RlOiBIdG1sRWxlbWVudCwgaXNBcHBlYXJpbmc6IGJvb2wpXG4gICAqL1xuICBvbkVudGVyZWQ6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBBIGA8VHJhbnNpdGlvbj5gIGNhbGxiYWNrIGZpcmVkIGltbWVkaWF0ZWx5IGFmdGVyIHRoZSAnZXhpdCcgY2xhc3MgaXNcbiAgICogYXBwbGllZC5cbiAgICpcbiAgICogQHR5cGUgRnVuY3Rpb24obm9kZTogSHRtbEVsZW1lbnQpXG4gICAqL1xuICBvbkV4aXQ6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBBIGA8VHJhbnNpdGlvbj5gIGNhbGxiYWNrIGZpcmVkIGltbWVkaWF0ZWx5IGFmdGVyIHRoZSAnZXhpdC1hY3RpdmUnIGlzIGFwcGxpZWQuXG4gICAqXG4gICAqIEB0eXBlIEZ1bmN0aW9uKG5vZGU6IEh0bWxFbGVtZW50KVxuICAgKi9cbiAgb25FeGl0aW5nOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQSBgPFRyYW5zaXRpb24+YCBjYWxsYmFjayBmaXJlZCBpbW1lZGlhdGVseSBhZnRlciB0aGUgJ2V4aXQnIGNsYXNzZXNcbiAgICogYXJlICoqcmVtb3ZlZCoqIGFuZCB0aGUgYGV4aXQtZG9uZWAgY2xhc3MgaXMgYWRkZWQgdG8gdGhlIERPTSBub2RlLlxuICAgKlxuICAgKiBAdHlwZSBGdW5jdGlvbihub2RlOiBIdG1sRWxlbWVudClcbiAgICovXG4gIG9uRXhpdGVkOiBQcm9wVHlwZXMuZnVuY1xufSkgOiB7fTtcbnZhciBfZGVmYXVsdCA9IENTU1RyYW5zaXRpb247XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1tcImRlZmF1bHRcIl07IiwiaW1wb3J0IFJlYWN0LCB7IGNyZWF0ZVJlZiwgUmVmT2JqZWN0LCBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IENTU1RyYW5zaXRpb24gZnJvbSAncmVhY3QtdHJhbnNpdGlvbi1ncm91cC9DU1NUcmFuc2l0aW9uJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgQ29sb3JUeXBlLCBDU1NUeXBlIH0gZnJvbSAnLi4vLi4vdHlwZXMnO1xuXG5jb25zdCBXcmFwcGVyID0gc3R5bGVkLmRpdjx7IGNzcz86IENTU1R5cGUgfT5gXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXG4gIGRpdltyb2xlPVwidG9vbHRpcFwiXSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGNsZWFyOiBib3RoO1xuICAgIGJveC1zaGFkb3c6IDAgMXB4IDJweCAwIHJnYmEoMCwgMCwgMCwgMC4wNSk7XG4gICAgei1pbmRleDogOTk5OTtcbiAgICBwYWRkaW5nOiAwLjM3NXJlbSAwLjYyNXJlbTtcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgd2hpdGUtc3BhY2U6IHByZTtcbiAgICBmb250LXNpemU6IDAuODVyZW07XG5cbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOCk7XG4gICAgb3BhY2l0eTogMDtcblxuICAgIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm0sIG9wYWNpdHk7XG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtLCBvcGFjaXR5O1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDEwMG1zO1xuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSk7XG5cbiAgICAmLnN0YXJ0IHtcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgIH1cblxuICAgICYuZW5kIHtcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC44KTtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuICB9XG4gICR7KHsgY3NzIH0pID0+IGNzcyB8fCAnJ31cbmA7XG5cbmludGVyZmFjZSBUb29sdGlwUHJvcHMge1xuICAvKiog5ZC544GN5Ye644GX44Go44GX44Gm6KGo56S644GX44Gf44GE5YaF5a65ICovXG4gIGxhYmVsOiBhbnk7XG4gIC8qKiDjg57jgqbjgrnjgqrjg7zjg5Djg7zjga7lr77osaHjgavjgarjgotlbGVtZW50ICovXG4gIGNoaWxkcmVuOiBhbnk7XG4gIC8qKiDlkLnjgY3lh7rjgZfjga7og4zmma/oibLjga7mjIflrpogKi9cbiAgY29sb3I/OiBDb2xvclR5cGU7XG4gIC8qKiDooajnpLrjgZXjgozjgovloLTmiYAgKi9cbiAgcG9zaXRpb24/OiAndG9wJyB8ICdsZWZ0JyB8ICdyaWdodCcgfCAnYm90dG9tJztcbiAgLyoqIOOCq+OCueOCv+ODoENTU+Wumue+qSAqL1xuICBjc3M/OiBDU1NUeXBlO1xufVxuXG5pbnRlcmZhY2UgU3RhdGUge1xuICBzaG93OiBib29sZWFuO1xuICBzdHlsZTogYW55O1xufVxuXG5mdW5jdGlvbiBnZXRQb3NpdGlvbihoZWlnaHQ6IG51bWJlciwgd2lkdGg6IG51bWJlciwgcG9zaXRpb24/OiBhbnkpIHtcbiAgc3dpdGNoIChwb3NpdGlvbikge1xuICAgIGNhc2UgJ3RvcCc6IHtcbiAgICAgIHJldHVybiB7IGJvdHRvbTogYCR7aGVpZ2h0fXB4YCwgbGVmdDogJzUwJScsIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoLTUwJSknIH07XG4gICAgfVxuICAgIGNhc2UgJ2xlZnQnOiB7XG4gICAgICByZXR1cm4geyByaWdodDogYCR7d2lkdGh9cHhgLCB0b3A6ICc1MCUnLCB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKC01MCUpJyB9O1xuICAgIH1cbiAgICBjYXNlICdyaWdodCc6IHtcbiAgICAgIHJldHVybiB7IGxlZnQ6IGAke3dpZHRofXB4YCwgdG9wOiAnNTAlJywgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgtNTAlKScgfTtcbiAgICB9XG4gICAgZGVmYXVsdDoge1xuICAgICAgcmV0dXJuIHsgdG9wOiBgJHtoZWlnaHR9cHhgLCBsZWZ0OiAnNTAlJywgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgtNTAlKScgIH07XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvb2x0aXAgZXh0ZW5kcyBQdXJlQ29tcG9uZW50PFRvb2x0aXBQcm9wcywgU3RhdGU+IHtcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBwb3NpdGlvbjogJ2JvdHRvbScsXG4gICAgY29sb3I6ICdkYXJrJyxcbiAgfTtcblxuICBzdGF0ZSA9IHtcbiAgICBzaG93OiBmYWxzZSxcbiAgICBzdHlsZToge30sXG4gIH07XG5cbiAgb3BlblRvb2x0aXAgPSAoKSA9PiB7XG4gICAgaWYgKHRoaXMuc3RhdGUuc2hvdyB8fCAhdGhpcy5lbGVtZW50LmN1cnJlbnQpIHJldHVybjtcblxuICAgIGNvbnN0IHdpZHRoID0gdGhpcy5lbGVtZW50LmN1cnJlbnQub2Zmc2V0V2lkdGggKyA4O1xuICAgIGNvbnN0IGhlaWdodCA9IHRoaXMuZWxlbWVudC5jdXJyZW50Lm9mZnNldEhlaWdodCArIDg7XG4gICAgY29uc3Qgc3R5bGUgPSBnZXRQb3NpdGlvbihoZWlnaHQsIHdpZHRoLCB0aGlzLnByb3BzLnBvc2l0aW9uKTtcbiAgICB0aGlzLnNldFN0YXRlKHsgc3R5bGUsIHNob3c6IHRydWUgfSk7XG4gIH1cblxuICBjbG9zZVRvb2x0aXAgPSAoKSA9PiB7XG4gICAgaWYgKHRoaXMuc3RhdGUuc2hvdyAmJiB0aGlzLmVsZW1lbnQuY3VycmVudCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNob3c6IGZhbHNlIH0pO1xuICAgIH1cbiAgfVxuXG4gIGVsZW1lbnQ6IFJlZk9iamVjdDxIVE1MRGl2RWxlbWVudD4gPSBjcmVhdGVSZWYoKTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBsYWJlbCwgY2hpbGRyZW4sIC4uLnJlc3QgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBzaG93LCBzdHlsZSB9ID0gdGhpcy5zdGF0ZTtcbiAgICByZXR1cm4gKFxuICAgICAgPFdyYXBwZXJcbiAgICAgICAgcmVmPXt0aGlzLmVsZW1lbnR9XG4gICAgICAgIG9uTW91c2VPdmVyPXt0aGlzLm9wZW5Ub29sdGlwfVxuICAgICAgICBvbk1vdXNlT3V0PXt0aGlzLmNsb3NlVG9vbHRpcH1cbiAgICAgICAgey4uLnJlc3R9XG4gICAgICA+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPENTU1RyYW5zaXRpb25cbiAgICAgICAgICBjbGFzc05hbWVzPXt7XG4gICAgICAgICAgICBhcHBlYXI6ICdzdGFydCcsXG4gICAgICAgICAgICBlbnRlckRvbmU6ICdzdGFydCcsXG4gICAgICAgICAgICBleGl0OiAnZW5kJyxcbiAgICAgICAgICB9fVxuICAgICAgICAgIGluPXtzaG93fVxuICAgICAgICAgIHRpbWVvdXQ9ezE1MH1cbiAgICAgICAgICB1bm1vdW50T25FeGl0XG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2IHJvbGU9XCJ0b29sdGlwXCI+XG4gICAgICAgICAgICB7bGFiZWx9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvQ1NTVHJhbnNpdGlvbj5cbiAgICAgIDwvV3JhcHBlcj5cbiAgICApO1xuICB9XG59XG5cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuZXhwb3J0IGNvbnN0IFNpZGVNZW51ID0gc3R5bGVkLmFzaWRlYFxuICBmb250LXNpemU6IDFyZW07XG5gO1xuU2lkZU1lbnUuZGlzcGxheU5hbWUgPSAnU2lkZU1lbnUnO1xuXG5leHBvcnQgY29uc3QgTWVudUxpc3QgPSBzdHlsZWQudWxgXG4gIGxpbmUtaGVpZ2h0OiAxLjI1O1xuXG4gIGEge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBhZGRpbmc6IDAuNWVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS50ZXh0fTtcbiAgICAmOmhvdmVyIHtcbiAgICAgIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnByaW1hcnl9O1xuICAgIH1cbiAgICAmLmFjdGl2ZSB7XG4gICAgICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5wcmltYXJ5fTtcbiAgICB9XG4gIH1cblxuICBsaSB7XG4gICAgdWwge1xuICAgICAgbWFyZ2luOiAwLjc1ZW07XG4gICAgICBwYWRkaW5nLWxlZnQ6IDAuNzVlbTtcbiAgICB9XG4gIH1cbmA7XG5NZW51TGlzdC5kaXNwbGF5TmFtZSA9ICdNZW51TGlzdCc7XG5cbmV4cG9ydCBjb25zdCBNZW51TGFiZWwgPSBzdHlsZWQucGBcbiAgZm9udC1zaXplOiAwLjc1ZW07XG4gIGxldHRlci1zcGFjaW5nOiAwLjFlbTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcblxuICAmOm5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgICBtYXJnaW4tdG9wOiAxZW07XG4gIH1cbiAgJjpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XG4gIH1cbmA7XG5NZW51TGFiZWwuZGlzcGxheU5hbWUgPSAnTWVudUxhYmVsJztcblxuIiwiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQsIENTU1Byb3BlcnRpZXMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkLCB7IGNzcyB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBCb3ggZnJvbSAnLi4vQm94JztcbmltcG9ydCB7IENvbG9yVHlwZSB9IGZyb20gJy4uLy4uL3R5cGVzJztcblxuY29uc3QgQ2FyZEJvZHkgPSBzdHlsZWQuZGl2YFxuICBwYWRkaW5nOiAxLjI1cmVtO1xuICBtYXJnaW46IDA7XG5gO1xuXG5jb25zdCBDYXJkSGVhZGVyID0gc3R5bGVkLmhlYWRlcmBcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZzogMC41cmVtIDEuNXJlbTtcbiAgbWluLWhlaWdodDogMy41cmVtO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5ib3JkZXJ9O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5gO1xuXG5jb25zdCBDYXJkRm9vdGVyID0gc3R5bGVkLmZvb3RlcmBcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZzogMC41cmVtIDEuNXJlbTtcbiAgbWluLWhlaWdodDogMy41cmVtO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5ib3JkZXJ9O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5gO1xuXG5jb25zdCBDYXJkSW1hZ2UgPSBzdHlsZWQuYWBcbiAgd2lkdGg6IDEwMCU7XG5cbiAgaW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMDtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAzcHg7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDNweDtcbiAgfVxuYDtcblxuaW50ZXJmYWNlIEltYWdlUHJvcHMge1xuICB1cmw/OiBzdHJpbmc7XG59XG5cbmNvbnN0IENhcmRJbWFnZUhvcml6b250YWwgPSBzdHlsZWQuYTxJbWFnZVByb3BzPmBcbiAgZmxleDogMCAwIDMwJTtcbiAgbWluLXdpZHRoOiA1cmVtO1xuICB3aWR0aDogMzAlO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAzcHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDNweDtcblxuICBiYWNrZ3JvdW5kOiBuby1yZXBlYXQgY2VudGVyL2NvdmVyO1xuICAkeyh7IHVybCB9KSA9PiB1cmwgPyBjc3NgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7dXJsfSk7YCA6IHt9fVxuYDtcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgLyoqIOODrOOCueODneODs+OCt+ODluOBquOCpOODoeODvOOCuOOCkui/veWKoOOBmeOCiyAqL1xuICBpbWFnZT86IHN0cmluZztcbiAgLyoqIOOCv+OCpOODiOODqyAqL1xuICB0aXRsZT86IHN0cmluZztcbiAgLyoqIOODmOODg+ODgOODvOOBruWPs+WBtOOBq+i/veWKoOOBmeOCiyAqL1xuICBoZWFkZXJPcHRpb25zPzogYW55O1xuICAvKiogaGVhZGVy6YOo5YiG77yI44Kk44Oh44O844K477yJ44KS5qiq5Lim44Gz44Gr44GZ44KLICovXG4gIGhvcml6b250YWw/OiBib29sZWFuO1xuICAvKiogZm9vdGVyICovXG4gIGZvb3Rlcj86IGFueTtcbiAgLyoqIOiJsuOBruaMh+WumiAqL1xuICBjb2xvcj86IENvbG9yVHlwZTtcbiAgLyoqIOODmOODg+ODgOOCkiAqL1xuICBoZWFkZXJPblRvcD86IGJvb2xlYW47XG4gIC8qKiDjgqvjgrnjgr9pbmxpbmUgc3R5bGUgKi9cbiAgc3R5bGU/OiBhbnk7XG59XG5cbmNvbnN0IGhvcml6b250YWxTdHlsZTogQ1NTUHJvcGVydGllcyA9IHsgZmxleERpcmVjdGlvbjogJ3JvdycgfTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FyZCBleHRlbmRzIFB1cmVDb21wb25lbnQ8UHJvcHM+IHtcbiAgcmVuZGVySGVhZGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgaW1hZ2UsIHRpdGxlLCBob3Jpem9udGFsIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgaWYgKGltYWdlICYmICFob3Jpem9udGFsKSByZXR1cm4gKDxDYXJkSW1hZ2U+PGltZyBzcmM9e2ltYWdlfSAvPjwvQ2FyZEltYWdlPik7XG4gICAgaWYgKGltYWdlICYmIGhvcml6b250YWwpIHJldHVybiAoPENhcmRJbWFnZUhvcml6b250YWwgdXJsPXtpbWFnZX0gLz4pO1xuICAgIGlmICh0aXRsZSAmJiAhaG9yaXpvbnRhbCkgcmV0dXJuICg8Q2FyZEhlYWRlcj48aDM+e3RpdGxlfTwvaDM+PC9DYXJkSGVhZGVyPik7XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNoaWxkcmVuLCBob3Jpem9udGFsLCBmb290ZXIsIGNvbG9yIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgY29uc3QgaGVhZGVyID0gdGhpcy5yZW5kZXJIZWFkZXIoKTtcbiAgICBjb25zdCB3cmFwcGVyU3R5bGUgPSBob3Jpem9udGFsID8gaG9yaXpvbnRhbFN0eWxlIDogdW5kZWZpbmVkO1xuICAgIHJldHVybiAoXG4gICAgICA8Qm94IHN0eWxlPXt3cmFwcGVyU3R5bGV9IGNvbG9yPXtjb2xvcn0+XG4gICAgICAgIHtoZWFkZXJ9XG4gICAgICAgIDxDYXJkQm9keT5cbiAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvQ2FyZEJvZHk+XG4gICAgICAgIHtmb290ZXIgJiYgKDxDYXJkRm9vdGVyPntSZWFjdC5DaGlsZHJlbi5vbmx5KGZvb3Rlcil9PC9DYXJkRm9vdGVyPil9XG4gICAgICA8L0JveD5cbiAgICApO1xuICB9XG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgQ1NTVHJhbnNpdGlvbiBmcm9tICdyZWFjdC10cmFuc2l0aW9uLWdyb3VwL0NTU1RyYW5zaXRpb24nO1xuaW1wb3J0IEJveCwgeyBQcm9wcyBhcyBCb3hQcm9wcyB9IGZyb20gJy4uL0JveCc7XG5pbXBvcnQgeyBDU1NUeXBlIH0gZnJvbSAnLi4vLi4vdHlwZXMnO1xuXG5jb25zdCBXcmFwcGVyID0gc3R5bGVkLmRpdjx7IGNzcz86IENTU1R5cGUgfT5gXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgb3V0bGluZTogbm9uZTtcbiAgY29sb3I6IGluaGVyaXQ7XG5cbiAgJjpob3ZlciB7XG4gICAgY29sb3I6IGluaGVyaXQ7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB9XG5cbiAgJHsoeyBjc3MgfSkgPT4gY3NzIHx8ICcnfVxuYDtcblxuY29uc3QgVG9vbHRpcCA9IHN0eWxlZChCb3gpYFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGNsZWFyOiBib3RoO1xuICBib3gtc2hhZG93OiAwIDFweCAycHggMCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuICB6LWluZGV4OiA5OTk5O1xuICBwYWRkaW5nOiAwLjVyZW0gMDtcbiAgd2lkdGg6IGF1dG87XG4gIGhlaWdodDogYXV0bztcbiAgY3Vyc29yOiBhdXRvO1xuXG4gIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm0sIG9wYWNpdHk7XG4gIHRyYW5zZm9ybTogc2NhbGUoMC44KTtcbiAgb3BhY2l0eTogMDtcblxuICB0cmFuc2l0aW9uLXByb3BlcnR5OiB0cmFuc2Zvcm0sIG9wYWNpdHk7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDEwMG1zO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpO1xuXG4gICYuc3RhcnQge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuXG4gICYuZW5kIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOCk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuYDtcblxuaW50ZXJmYWNlIFByb3BzIGV4dGVuZHMgQm94UHJvcHMge1xuICAvKiog44Oc44K/44Oz44Gu5YaF5a65ICovXG4gIGxhYmVsOiBSZWFjdC5SZWFjdE5vZGU7XG4gIC8qKiDlhoXlrrnjga7jg6rjgrnjg4ggKi9cbiAgY2hpbGRyZW4/OiBSZWFjdC5SZWFjdE5vZGUgfCBSZWFjdC5SZWFjdE5vZGU7XG4gIC8qKiDlj7Pjga7ln7rmupbjgafjg6rjgrnjg4jjgpLooajnpLrjgZnjgosgKi9cbiAgcmlnaHQ/OiBib29sZWFuO1xuICAvKiog5ZC544GN5Ye644GX44GM6KGo56S644GV44KM44KL5aC05omAICovXG4gIHBvc2l0aW9uPzogJ3RvcC1sZWZ0JyB8ICd0b3AnIHwgJ3RvcC1yaWdodCcgfCAnYm90dG9tLWxlZnQnIHwgJ2JvdHRvbScgfCAnYm90dG9tLXJpZ2h0JztcbiAgLyoqIOOCq+OCueOCv+ODoENTU+Wumue+qSAqL1xuICBjc3M/OiBDU1NUeXBlO1xufVxuXG5pbnRlcmZhY2UgU3RhdGUge1xuICBzaG93OiBib29sZWFuO1xuICBzdHlsZTogYW55O1xufVxuXG5mdW5jdGlvbiBnZXRQb3NpdGlvbihwb3NpdGlvbj86IGFueSkge1xuICBzd2l0Y2ggKHBvc2l0aW9uKSB7XG4gICAgY2FzZSAndG9wLWxlZnQnOiB7XG4gICAgICByZXR1cm4geyB0b3A6IDAsIGxlZnQ6IDAsIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoLTEwMCUpJyB9O1xuICAgIH1cbiAgICBjYXNlICd0b3AtcmlnaHQnOiB7XG4gICAgICByZXR1cm4geyB0b3A6IDAsIHJpZ2h0OiAwLCB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKC0xMDAlKScgfTtcbiAgICB9XG4gICAgY2FzZSAndG9wJzoge1xuICAgICAgcmV0dXJuIHsgdG9wOiAgMCwgbGVmdDogJzUwJScsIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZSgtNTAlLCAtMTAwJSknIH07XG4gICAgfVxuICAgIGNhc2UgJ2JvdHRvbS1sZWZ0Jzoge1xuICAgICAgcmV0dXJuIHsgYm90dG9tOiAwLCBsZWZ0OiAwLCB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKDEwMCUpJyB9O1xuICAgIH1cbiAgICBjYXNlICdib3R0b20tcmlnaHQnOiB7XG4gICAgICByZXR1cm4geyBib3R0b206IDAsIHJpZ2h0OiAwLCB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKDEwMCUpJyB9O1xuICAgIH1cbiAgICBjYXNlICdib3R0b20nOiB7XG4gICAgICByZXR1cm4geyBib3R0b206IDAsIGxlZnQ6ICc1MCUnLCB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoLTUwJSwgMTAwJSknIH07XG4gICAgfVxuICAgIGRlZmF1bHQ6IHtcbiAgICAgIHJldHVybiB7IHRvcDogMCwgbGVmdDogMCwgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgxMDAlKScgfTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9wb3ZlciBleHRlbmRzIENvbXBvbmVudDxQcm9wcywgU3RhdGU+IHtcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBwb3NpdGlvbjogJ2JvdHRvbS1sZWZ0JyxcbiAgICBjb2xvcjogJ3doaXRlJyxcbiAgICBzdHlsZToge30sXG4gIH07XG5cbiAgc3RhdGUgPSB7IHNob3c6IGZhbHNlLCBzdHlsZToge30gfTtcblxuICBzaG91bGRDb21wb25lbnRVcGRhdGUocHJvcHM6IFByb3BzLCBzdGF0ZTogU3RhdGUpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZS5zaG93ICE9PSBzdGF0ZS5zaG93IHx8IHRoaXMucHJvcHMubGFiZWwgIT09IHByb3BzLmxhYmVsO1xuICB9XG5cbiAgb3BlbkRyb3Bkb3duID0gKCkgPT4ge1xuICAgIGlmICh0aGlzLnN0YXRlLnNob3cpIHJldHVybjtcblxuICAgIGNvbnN0IHN0eWxlID0gZ2V0UG9zaXRpb24odGhpcy5wcm9wcy5wb3NpdGlvbik7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHN0eWxlLCBzaG93OiB0cnVlIH0pO1xuICB9XG5cbiAgY2xvc2VEcm9wZG93biA9ICgpID0+IHtcbiAgICBpZiAodGhpcy5zdGF0ZS5zaG93KSB0aGlzLnNldFN0YXRlKHsgc2hvdzogZmFsc2UgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBsYWJlbCwgY2hpbGRyZW4sIHN0eWxlLCBjc3MsIC4uLnJlc3QgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBzaG93IH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHRvb2x0aXBTdHlsZSA9IHsgLi4uc3R5bGUsIC4uLnRoaXMuc3RhdGUuc3R5bGUgfTtcbiAgICByZXR1cm4gKFxuICAgICAgPFdyYXBwZXJcbiAgICAgICAgdGFiSW5kZXg9ezB9XG4gICAgICAgIHJvbGU9XCJidXR0b25cIlxuICAgICAgICBvbkZvY3VzPXt0aGlzLm9wZW5Ecm9wZG93bn1cbiAgICAgICAgb25CbHVyPXt0aGlzLmNsb3NlRHJvcGRvd259XG4gICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6ICdibG9jaycsIHBvc2l0aW9uOiAncmVsYXRpdmUnIH19XG4gICAgICAgIGNzcz17Y3NzfVxuICAgICAgPlxuICAgICAgICB7bGFiZWx9XG4gICAgICAgIDxDU1NUcmFuc2l0aW9uXG4gICAgICAgICAgY2xhc3NOYW1lcz17e1xuICAgICAgICAgICAgYXBwZWFyOiAnc3RhcnQnLFxuICAgICAgICAgICAgZW50ZXJEb25lOiAnc3RhcnQnLFxuICAgICAgICAgICAgZXhpdDogJ2VuZCcsXG4gICAgICAgICAgfX1cbiAgICAgICAgICBpbj17c2hvd31cbiAgICAgICAgICB0aW1lb3V0PXsxNTB9XG4gICAgICAgICAgdW5tb3VudE9uRXhpdFxuICAgICAgICA+XG4gICAgICAgICAgPFRvb2x0aXAgcm9sZT1cInRvb2x0aXBcIiBzdHlsZT17dG9vbHRpcFN0eWxlfSB7Li4ucmVzdH0+XG4gICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgICAgPC9Ub29sdGlwPlxuICAgICAgICA8L0NTU1RyYW5zaXRpb24+XG4gICAgICA8L1dyYXBwZXI+XG4gICAgKTtcbiAgfVxufVxuIiwiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQsIEhUTUxBdHRyaWJ1dGVzLCBGcmFnbWVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNyZWF0ZVBvcnRhbCB9IGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgQ1NTVHJhbnNpdGlvbiBmcm9tICdyZWFjdC10cmFuc2l0aW9uLWdyb3VwL0NTU1RyYW5zaXRpb24nO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgQm94IGZyb20gJy4uL0JveCc7XG5pbXBvcnQgQ29sIGZyb20gJy4uL0dyaWQvQ29sJztcbmltcG9ydCB7IENvbG9yVHlwZSwgQ29sU2l6ZVR5cGUsIENTU1R5cGUgfSBmcm9tICcuLi8uLi90eXBlcyc7XG5cbmNvbnN0IEVTQ19LRVkgPSAyNztcblxuY29uc3QgV3JhcHBlciA9IHN0eWxlZC5kaXY8eyBjc3M/OiBDU1NUeXBlLCBzaGFkb3dDb2xvcj86IHN0cmluZyB9PmBcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIHotaW5kZXg6IDk5OTc7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwYWRkaW5nOiAwLjc1cmVtO1xuXG4gIC52LW1vZGFsLWJvZHkge1xuICAgIHotaW5kZXg6IDk5OTk7XG4gICAgbWFyZ2luOiAwO1xuICAgIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm0sIG9wYWNpdHk7XG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtLCBvcGFjaXR5O1xuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSk7XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMjAwbXM7XG4gIH1cblxuICAmLmZhZGUtZW50ZXIgPiAudi1tb2RhbC1ib2R5IHtcbiAgICBvcGFjaXR5OiAwLjAxO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC44KTtcbiAgfVxuICAmLmZhZGUtZW50ZXItYWN0aXZlID4gLnYtbW9kYWwtYm9keSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB9XG4gICYuZmFkZS1leGl0ID4gLnYtbW9kYWwtYm9keSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB9XG4gICYuZmFkZS1leGl0LWFjdGl2ZSA+IC52LW1vZGFsLWJvZHkge1xuICAgIG9wYWNpdHk6IDAuMDE7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjgpO1xuICB9XG5cbiAgLnYtbW9kYWwtc2hhZG93IHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgdG9wOiAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR7KHsgc2hhZG93Q29sb3IgfSkgPT4gc2hhZG93Q29sb3IgfHwgJ3RyYW5zcGFyZW50J307XG4gIH1cblxuICAkeyh7IGNzcyB9KSA9PiBjc3MgfHwge319XG5gO1xuXG5pbnRlcmZhY2UgUHJvcHMgZXh0ZW5kcyBIVE1MQXR0cmlidXRlczxIVE1MRGl2RWxlbWVudD4ge1xuICAvKiog44OY44OD44OA44O844Gu44K/44Kk44OI44Or5paH6KiAICovXG4gIHRpdGxlPzogYW55O1xuICAvKiogMX4xMuOBruODouODvOODgOODq+OCteOCpOOCuiAqL1xuICBzaXplPzogQ29sU2l6ZVR5cGU7XG4gIC8qKiB0cnVl44Gu5aC05ZCI44CB44Oi44O844OA44Or44KS6KGo56S644GX44G+44GZ44CCICovXG4gIHNob3c/OiBib29sZWFuO1xuICAvKiog44Oi44O844OA44Or44GuYm9keeOBq+WFpeOCjOOCi+WGheWuuSAqL1xuICBjaGlsZHJlbj86IGFueTtcbiAgLyoqIOODouODvOODgOODq+OBrmZvb3RlcuOBq+WFpeOCjOOCi+WGheWuuSAqL1xuICBmb290ZXI/OiBhbnk7XG4gIC8qKiDjg6Ljg7zjg4Djg6vjga7oibIgKi9cbiAgY29sb3I/OiBDb2xvclR5cGU7XG4gIC8qKiDjg6Ljg7zjg4Djg6vjgpLplonjgZjjgovlh6bnkIYgKi9cbiAgY2xvc2VNb2RhbDogKCkgPT4gdm9pZDtcbiAgLyoqIOOCquODvOODkOODvOODrOOCpOOBruOCr+ODquODg+OCr+OBp+ODouODvOODgOODq+OCr+ODreODvOOCuiAqL1xuICBjbG9zZU9uT3ZlcmxheT86IGJvb2xlYW47XG4gIC8qKiBlc2Pjg5zjgr/jg7Pjgafjgq/jg63jg7zjgrogKi9cbiAgY2xvc2VPbkVzYz86IGJvb2xlYW47XG4gIC8qKiBvdmVybGF544Gu6IOM5pmv44Gu6Kit5a6aICovXG4gIHNoYWRvd0NvbG9yPzogc3RyaW5nO1xuICAvKiog44Oi44O844OA44Or5aSW44Gr6KGo56S644GZ44KLRWxlbWVudHMgKi9cbiAgZXh0ZXJuYWw/OiBhbnk7XG4gIC8qKiDjgqvjgrnjgr/jg6BDU1PlrprnvqkgKi9cbiAgY3NzPzogQ1NTVHlwZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW9kYWwgZXh0ZW5kcyBQdXJlQ29tcG9uZW50PFByb3BzPiB7XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgc2hvdzogZmFsc2UsXG4gICAgY29sb3I6ICd3aGl0ZScsXG4gICAgc2l6ZTogNixcbiAgICBzaGFkb3dDb2xvcjogJ3JnYmEoMTAsMTAsMTAsLjg2KScsXG4gIH07XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgaWYgKHRoaXMuZWxlbWVudCkge1xuICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZCh0aGlzLmVsZW1lbnQpO1xuICAgIH1cbiAgfVxuXG4gIG9uS2V5RG93biA9IChlOiBhbnkpID0+IHtcbiAgICBpZiAodGhpcy5wcm9wcy5jbG9zZU9uRXNjICYmIGUua2V5Q29kZSA9PT0gRVNDX0tFWSAmJiB0aGlzLnByb3BzLmNsb3NlTW9kYWwpIHtcbiAgICAgIHRoaXMucHJvcHMuY2xvc2VNb2RhbCgpO1xuICAgIH1cbiAgfVxuXG4gIG9uQ2xpY2tPdmVybGF5ID0gKCkgPT4ge1xuICAgIGlmICh0aGlzLnByb3BzLmNsb3NlT25PdmVybGF5ICYmIHRoaXMucHJvcHMuY2xvc2VNb2RhbCkge1xuICAgICAgdGhpcy5wcm9wcy5jbG9zZU1vZGFsKCk7XG4gICAgfVxuICB9XG5cbiAgZWxlbWVudD86IEhUTUxEaXZFbGVtZW50O1xuICBzaG91bGRDbG9zZTogYm9vbGVhbiB8IG51bGwgPSBudWxsO1xuXG4gIHJlbmRlcigpOiBSZWFjdC5SZWFjdFBvcnRhbCB8IG51bGwge1xuICAgIGlmICh0eXBlb2YgZG9jdW1lbnQgIT09IFwidW5kZWZpbmVkXCIgJiYgIXRoaXMuZWxlbWVudCkge1xuICAgICAgdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuZWxlbWVudCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuZWxlbWVudCkge1xuICAgICAgY29uc3Qge1xuICAgICAgICBzaG93LCBzaXplLCB0aXRsZSwgY2hpbGRyZW4sIGZvb3RlciwgY29sb3IsIG9uQ2xpY2ssIC4uLnJlc3RcbiAgICAgIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgICByZXR1cm4gY3JlYXRlUG9ydGFsKChcbiAgICAgICAgPENTU1RyYW5zaXRpb25cbiAgICAgICAgICBjbGFzc05hbWVzPVwiZmFkZVwiXG4gICAgICAgICAgdGltZW91dD17MjAwfVxuICAgICAgICAgIGluPXtzaG93fVxuICAgICAgICAgIHVubW91bnRPbkV4aXRcbiAgICAgICAgPlxuICAgICAgICAgIDxXcmFwcGVyIHJvbGU9XCJkb2N1bWVudFwiIHsuLi5yZXN0fT5cbiAgICAgICAgICAgIDxDb2wgY2xhc3NOYW1lPVwidi1tb2RhbC1ib2R5XCIgc2l6ZT17c2l6ZX0gYXV0byByb2xlPVwiZGlhbG9nXCI+XG4gICAgICAgICAgICAgIDxCb3ggY29sb3I9e2NvbG9yfT5cbiAgICAgICAgICAgICAgICB7dGl0bGUgPyB0aXRsZSA6IG51bGx9XG4gICAgICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICAgICAgICAgIHtmb290ZXIgPyBmb290ZXIgOiBudWxsfVxuICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAge3RoaXMucHJvcHMuZXh0ZXJuYWx9XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInYtbW9kYWwtc2hhZG93XCIgb25DbGljaz17dGhpcy5vbkNsaWNrT3ZlcmxheX0gLz5cbiAgICAgICAgICA8L1dyYXBwZXI+XG4gICAgICAgIDwvQ1NTVHJhbnNpdGlvbj5cbiAgICAgICksIHRoaXMuZWxlbWVudCk7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZ2V0Q2hpbGRNYXBwaW5nID0gZ2V0Q2hpbGRNYXBwaW5nO1xuZXhwb3J0cy5tZXJnZUNoaWxkTWFwcGluZ3MgPSBtZXJnZUNoaWxkTWFwcGluZ3M7XG5leHBvcnRzLmdldEluaXRpYWxDaGlsZE1hcHBpbmcgPSBnZXRJbml0aWFsQ2hpbGRNYXBwaW5nO1xuZXhwb3J0cy5nZXROZXh0Q2hpbGRNYXBwaW5nID0gZ2V0TmV4dENoaWxkTWFwcGluZztcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcblxuLyoqXG4gKiBHaXZlbiBgdGhpcy5wcm9wcy5jaGlsZHJlbmAsIHJldHVybiBhbiBvYmplY3QgbWFwcGluZyBrZXkgdG8gY2hpbGQuXG4gKlxuICogQHBhcmFtIHsqfSBjaGlsZHJlbiBgdGhpcy5wcm9wcy5jaGlsZHJlbmBcbiAqIEByZXR1cm4ge29iamVjdH0gTWFwcGluZyBvZiBrZXkgdG8gY2hpbGRcbiAqL1xuZnVuY3Rpb24gZ2V0Q2hpbGRNYXBwaW5nKGNoaWxkcmVuLCBtYXBGbikge1xuICB2YXIgbWFwcGVyID0gZnVuY3Rpb24gbWFwcGVyKGNoaWxkKSB7XG4gICAgcmV0dXJuIG1hcEZuICYmICgwLCBfcmVhY3QuaXNWYWxpZEVsZW1lbnQpKGNoaWxkKSA/IG1hcEZuKGNoaWxkKSA6IGNoaWxkO1xuICB9O1xuXG4gIHZhciByZXN1bHQgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICBpZiAoY2hpbGRyZW4pIF9yZWFjdC5DaGlsZHJlbi5tYXAoY2hpbGRyZW4sIGZ1bmN0aW9uIChjKSB7XG4gICAgcmV0dXJuIGM7XG4gIH0pLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgLy8gcnVuIHRoZSBtYXAgZnVuY3Rpb24gaGVyZSBpbnN0ZWFkIHNvIHRoYXQgdGhlIGtleSBpcyB0aGUgY29tcHV0ZWQgb25lXG4gICAgcmVzdWx0W2NoaWxkLmtleV0gPSBtYXBwZXIoY2hpbGQpO1xuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cbi8qKlxuICogV2hlbiB5b3UncmUgYWRkaW5nIG9yIHJlbW92aW5nIGNoaWxkcmVuIHNvbWUgbWF5IGJlIGFkZGVkIG9yIHJlbW92ZWQgaW4gdGhlXG4gKiBzYW1lIHJlbmRlciBwYXNzLiBXZSB3YW50IHRvIHNob3cgKmJvdGgqIHNpbmNlIHdlIHdhbnQgdG8gc2ltdWx0YW5lb3VzbHlcbiAqIGFuaW1hdGUgZWxlbWVudHMgaW4gYW5kIG91dC4gVGhpcyBmdW5jdGlvbiB0YWtlcyBhIHByZXZpb3VzIHNldCBvZiBrZXlzXG4gKiBhbmQgYSBuZXcgc2V0IG9mIGtleXMgYW5kIG1lcmdlcyB0aGVtIHdpdGggaXRzIGJlc3QgZ3Vlc3Mgb2YgdGhlIGNvcnJlY3RcbiAqIG9yZGVyaW5nLiBJbiB0aGUgZnV0dXJlIHdlIG1heSBleHBvc2Ugc29tZSBvZiB0aGUgdXRpbGl0aWVzIGluXG4gKiBSZWFjdE11bHRpQ2hpbGQgdG8gbWFrZSB0aGlzIGVhc3ksIGJ1dCBmb3Igbm93IFJlYWN0IGl0c2VsZiBkb2VzIG5vdFxuICogZGlyZWN0bHkgaGF2ZSB0aGlzIGNvbmNlcHQgb2YgdGhlIHVuaW9uIG9mIHByZXZDaGlsZHJlbiBhbmQgbmV4dENoaWxkcmVuXG4gKiBzbyB3ZSBpbXBsZW1lbnQgaXQgaGVyZS5cbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gcHJldiBwcmV2IGNoaWxkcmVuIGFzIHJldHVybmVkIGZyb21cbiAqIGBSZWFjdFRyYW5zaXRpb25DaGlsZE1hcHBpbmcuZ2V0Q2hpbGRNYXBwaW5nKClgLlxuICogQHBhcmFtIHtvYmplY3R9IG5leHQgbmV4dCBjaGlsZHJlbiBhcyByZXR1cm5lZCBmcm9tXG4gKiBgUmVhY3RUcmFuc2l0aW9uQ2hpbGRNYXBwaW5nLmdldENoaWxkTWFwcGluZygpYC5cbiAqIEByZXR1cm4ge29iamVjdH0gYSBrZXkgc2V0IHRoYXQgY29udGFpbnMgYWxsIGtleXMgaW4gYHByZXZgIGFuZCBhbGwga2V5c1xuICogaW4gYG5leHRgIGluIGEgcmVhc29uYWJsZSBvcmRlci5cbiAqL1xuXG5cbmZ1bmN0aW9uIG1lcmdlQ2hpbGRNYXBwaW5ncyhwcmV2LCBuZXh0KSB7XG4gIHByZXYgPSBwcmV2IHx8IHt9O1xuICBuZXh0ID0gbmV4dCB8fCB7fTtcblxuICBmdW5jdGlvbiBnZXRWYWx1ZUZvcktleShrZXkpIHtcbiAgICByZXR1cm4ga2V5IGluIG5leHQgPyBuZXh0W2tleV0gOiBwcmV2W2tleV07XG4gIH0gLy8gRm9yIGVhY2gga2V5IG9mIGBuZXh0YCwgdGhlIGxpc3Qgb2Yga2V5cyB0byBpbnNlcnQgYmVmb3JlIHRoYXQga2V5IGluXG4gIC8vIHRoZSBjb21iaW5lZCBsaXN0XG5cblxuICB2YXIgbmV4dEtleXNQZW5kaW5nID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgdmFyIHBlbmRpbmdLZXlzID0gW107XG5cbiAgZm9yICh2YXIgcHJldktleSBpbiBwcmV2KSB7XG4gICAgaWYgKHByZXZLZXkgaW4gbmV4dCkge1xuICAgICAgaWYgKHBlbmRpbmdLZXlzLmxlbmd0aCkge1xuICAgICAgICBuZXh0S2V5c1BlbmRpbmdbcHJldktleV0gPSBwZW5kaW5nS2V5cztcbiAgICAgICAgcGVuZGluZ0tleXMgPSBbXTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcGVuZGluZ0tleXMucHVzaChwcmV2S2V5KTtcbiAgICB9XG4gIH1cblxuICB2YXIgaTtcbiAgdmFyIGNoaWxkTWFwcGluZyA9IHt9O1xuXG4gIGZvciAodmFyIG5leHRLZXkgaW4gbmV4dCkge1xuICAgIGlmIChuZXh0S2V5c1BlbmRpbmdbbmV4dEtleV0pIHtcbiAgICAgIGZvciAoaSA9IDA7IGkgPCBuZXh0S2V5c1BlbmRpbmdbbmV4dEtleV0ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIHBlbmRpbmdOZXh0S2V5ID0gbmV4dEtleXNQZW5kaW5nW25leHRLZXldW2ldO1xuICAgICAgICBjaGlsZE1hcHBpbmdbbmV4dEtleXNQZW5kaW5nW25leHRLZXldW2ldXSA9IGdldFZhbHVlRm9yS2V5KHBlbmRpbmdOZXh0S2V5KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjaGlsZE1hcHBpbmdbbmV4dEtleV0gPSBnZXRWYWx1ZUZvcktleShuZXh0S2V5KTtcbiAgfSAvLyBGaW5hbGx5LCBhZGQgdGhlIGtleXMgd2hpY2ggZGlkbid0IGFwcGVhciBiZWZvcmUgYW55IGtleSBpbiBgbmV4dGBcblxuXG4gIGZvciAoaSA9IDA7IGkgPCBwZW5kaW5nS2V5cy5sZW5ndGg7IGkrKykge1xuICAgIGNoaWxkTWFwcGluZ1twZW5kaW5nS2V5c1tpXV0gPSBnZXRWYWx1ZUZvcktleShwZW5kaW5nS2V5c1tpXSk7XG4gIH1cblxuICByZXR1cm4gY2hpbGRNYXBwaW5nO1xufVxuXG5mdW5jdGlvbiBnZXRQcm9wKGNoaWxkLCBwcm9wLCBwcm9wcykge1xuICByZXR1cm4gcHJvcHNbcHJvcF0gIT0gbnVsbCA/IHByb3BzW3Byb3BdIDogY2hpbGQucHJvcHNbcHJvcF07XG59XG5cbmZ1bmN0aW9uIGdldEluaXRpYWxDaGlsZE1hcHBpbmcocHJvcHMsIG9uRXhpdGVkKSB7XG4gIHJldHVybiBnZXRDaGlsZE1hcHBpbmcocHJvcHMuY2hpbGRyZW4sIGZ1bmN0aW9uIChjaGlsZCkge1xuICAgIHJldHVybiAoMCwgX3JlYWN0LmNsb25lRWxlbWVudCkoY2hpbGQsIHtcbiAgICAgIG9uRXhpdGVkOiBvbkV4aXRlZC5iaW5kKG51bGwsIGNoaWxkKSxcbiAgICAgIGluOiB0cnVlLFxuICAgICAgYXBwZWFyOiBnZXRQcm9wKGNoaWxkLCAnYXBwZWFyJywgcHJvcHMpLFxuICAgICAgZW50ZXI6IGdldFByb3AoY2hpbGQsICdlbnRlcicsIHByb3BzKSxcbiAgICAgIGV4aXQ6IGdldFByb3AoY2hpbGQsICdleGl0JywgcHJvcHMpXG4gICAgfSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBnZXROZXh0Q2hpbGRNYXBwaW5nKG5leHRQcm9wcywgcHJldkNoaWxkTWFwcGluZywgb25FeGl0ZWQpIHtcbiAgdmFyIG5leHRDaGlsZE1hcHBpbmcgPSBnZXRDaGlsZE1hcHBpbmcobmV4dFByb3BzLmNoaWxkcmVuKTtcbiAgdmFyIGNoaWxkcmVuID0gbWVyZ2VDaGlsZE1hcHBpbmdzKHByZXZDaGlsZE1hcHBpbmcsIG5leHRDaGlsZE1hcHBpbmcpO1xuICBPYmplY3Qua2V5cyhjaGlsZHJlbikuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgdmFyIGNoaWxkID0gY2hpbGRyZW5ba2V5XTtcbiAgICBpZiAoISgwLCBfcmVhY3QuaXNWYWxpZEVsZW1lbnQpKGNoaWxkKSkgcmV0dXJuO1xuICAgIHZhciBoYXNQcmV2ID0ga2V5IGluIHByZXZDaGlsZE1hcHBpbmc7XG4gICAgdmFyIGhhc05leHQgPSBrZXkgaW4gbmV4dENoaWxkTWFwcGluZztcbiAgICB2YXIgcHJldkNoaWxkID0gcHJldkNoaWxkTWFwcGluZ1trZXldO1xuICAgIHZhciBpc0xlYXZpbmcgPSAoMCwgX3JlYWN0LmlzVmFsaWRFbGVtZW50KShwcmV2Q2hpbGQpICYmICFwcmV2Q2hpbGQucHJvcHMuaW47IC8vIGl0ZW0gaXMgbmV3IChlbnRlcmluZylcblxuICAgIGlmIChoYXNOZXh0ICYmICghaGFzUHJldiB8fCBpc0xlYXZpbmcpKSB7XG4gICAgICAvLyBjb25zb2xlLmxvZygnZW50ZXJpbmcnLCBrZXkpXG4gICAgICBjaGlsZHJlbltrZXldID0gKDAsIF9yZWFjdC5jbG9uZUVsZW1lbnQpKGNoaWxkLCB7XG4gICAgICAgIG9uRXhpdGVkOiBvbkV4aXRlZC5iaW5kKG51bGwsIGNoaWxkKSxcbiAgICAgICAgaW46IHRydWUsXG4gICAgICAgIGV4aXQ6IGdldFByb3AoY2hpbGQsICdleGl0JywgbmV4dFByb3BzKSxcbiAgICAgICAgZW50ZXI6IGdldFByb3AoY2hpbGQsICdlbnRlcicsIG5leHRQcm9wcylcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAoIWhhc05leHQgJiYgaGFzUHJldiAmJiAhaXNMZWF2aW5nKSB7XG4gICAgICAvLyBpdGVtIGlzIG9sZCAoZXhpdGluZylcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdsZWF2aW5nJywga2V5KVxuICAgICAgY2hpbGRyZW5ba2V5XSA9ICgwLCBfcmVhY3QuY2xvbmVFbGVtZW50KShjaGlsZCwge1xuICAgICAgICBpbjogZmFsc2VcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAoaGFzTmV4dCAmJiBoYXNQcmV2ICYmICgwLCBfcmVhY3QuaXNWYWxpZEVsZW1lbnQpKHByZXZDaGlsZCkpIHtcbiAgICAgIC8vIGl0ZW0gaGFzbid0IGNoYW5nZWQgdHJhbnNpdGlvbiBzdGF0ZXNcbiAgICAgIC8vIGNvcHkgb3ZlciB0aGUgbGFzdCB0cmFuc2l0aW9uIHByb3BzO1xuICAgICAgLy8gY29uc29sZS5sb2coJ3VuY2hhbmdlZCcsIGtleSlcbiAgICAgIGNoaWxkcmVuW2tleV0gPSAoMCwgX3JlYWN0LmNsb25lRWxlbWVudCkoY2hpbGQsIHtcbiAgICAgICAgb25FeGl0ZWQ6IG9uRXhpdGVkLmJpbmQobnVsbCwgY2hpbGQpLFxuICAgICAgICBpbjogcHJldkNoaWxkLnByb3BzLmluLFxuICAgICAgICBleGl0OiBnZXRQcm9wKGNoaWxkLCAnZXhpdCcsIG5leHRQcm9wcyksXG4gICAgICAgIGVudGVyOiBnZXRQcm9wKGNoaWxkLCAnZW50ZXInLCBuZXh0UHJvcHMpXG4gICAgICB9KTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gY2hpbGRyZW47XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBfcHJvcFR5cGVzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicHJvcC10eXBlc1wiKSk7XG5cbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbnZhciBfcmVhY3RMaWZlY3ljbGVzQ29tcGF0ID0gcmVxdWlyZShcInJlYWN0LWxpZmVjeWNsZXMtY29tcGF0XCIpO1xuXG52YXIgX0NoaWxkTWFwcGluZyA9IHJlcXVpcmUoXCIuL3V0aWxzL0NoaWxkTWFwcGluZ1wiKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCkgeyBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTsgdmFyIHRhcmdldCA9IHt9OyB2YXIgc291cmNlS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7IHZhciBrZXksIGk7IGZvciAoaSA9IDA7IGkgPCBzb3VyY2VLZXlzLmxlbmd0aDsgaSsrKSB7IGtleSA9IHNvdXJjZUtleXNbaV07IGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBfZXh0ZW5kcygpIHsgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9OyByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHNMb29zZShzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MucHJvdG90eXBlKTsgc3ViQ2xhc3MucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gc3ViQ2xhc3M7IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7IGlmIChzZWxmID09PSB2b2lkIDApIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBzZWxmOyB9XG5cbnZhciB2YWx1ZXMgPSBPYmplY3QudmFsdWVzIHx8IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIE9iamVjdC5rZXlzKG9iaikubWFwKGZ1bmN0aW9uIChrKSB7XG4gICAgcmV0dXJuIG9ialtrXTtcbiAgfSk7XG59O1xuXG52YXIgZGVmYXVsdFByb3BzID0ge1xuICBjb21wb25lbnQ6ICdkaXYnLFxuICBjaGlsZEZhY3Rvcnk6IGZ1bmN0aW9uIGNoaWxkRmFjdG9yeShjaGlsZCkge1xuICAgIHJldHVybiBjaGlsZDtcbiAgfVxuICAvKipcbiAgICogVGhlIGA8VHJhbnNpdGlvbkdyb3VwPmAgY29tcG9uZW50IG1hbmFnZXMgYSBzZXQgb2YgdHJhbnNpdGlvbiBjb21wb25lbnRzXG4gICAqIChgPFRyYW5zaXRpb24+YCBhbmQgYDxDU1NUcmFuc2l0aW9uPmApIGluIGEgbGlzdC4gTGlrZSB3aXRoIHRoZSB0cmFuc2l0aW9uXG4gICAqIGNvbXBvbmVudHMsIGA8VHJhbnNpdGlvbkdyb3VwPmAgaXMgYSBzdGF0ZSBtYWNoaW5lIGZvciBtYW5hZ2luZyB0aGUgbW91bnRpbmdcbiAgICogYW5kIHVubW91bnRpbmcgb2YgY29tcG9uZW50cyBvdmVyIHRpbWUuXG4gICAqXG4gICAqIENvbnNpZGVyIHRoZSBleGFtcGxlIGJlbG93LiBBcyBpdGVtcyBhcmUgcmVtb3ZlZCBvciBhZGRlZCB0byB0aGUgVG9kb0xpc3QgdGhlXG4gICAqIGBpbmAgcHJvcCBpcyB0b2dnbGVkIGF1dG9tYXRpY2FsbHkgYnkgdGhlIGA8VHJhbnNpdGlvbkdyb3VwPmAuXG4gICAqXG4gICAqIE5vdGUgdGhhdCBgPFRyYW5zaXRpb25Hcm91cD5gICBkb2VzIG5vdCBkZWZpbmUgYW55IGFuaW1hdGlvbiBiZWhhdmlvciFcbiAgICogRXhhY3RseSBfaG93XyBhIGxpc3QgaXRlbSBhbmltYXRlcyBpcyB1cCB0byB0aGUgaW5kaXZpZHVhbCB0cmFuc2l0aW9uXG4gICAqIGNvbXBvbmVudC4gVGhpcyBtZWFucyB5b3UgY2FuIG1peCBhbmQgbWF0Y2ggYW5pbWF0aW9ucyBhY3Jvc3MgZGlmZmVyZW50IGxpc3RcbiAgICogaXRlbXMuXG4gICAqL1xuXG59O1xuXG52YXIgVHJhbnNpdGlvbkdyb3VwID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0c0xvb3NlKFRyYW5zaXRpb25Hcm91cCwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gVHJhbnNpdGlvbkdyb3VwKHByb3BzLCBjb250ZXh0KSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX3RoaXMgPSBfUmVhY3QkQ29tcG9uZW50LmNhbGwodGhpcywgcHJvcHMsIGNvbnRleHQpIHx8IHRoaXM7XG5cbiAgICB2YXIgaGFuZGxlRXhpdGVkID0gX3RoaXMuaGFuZGxlRXhpdGVkLmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSkpOyAvLyBJbml0aWFsIGNoaWxkcmVuIHNob3VsZCBhbGwgYmUgZW50ZXJpbmcsIGRlcGVuZGVudCBvbiBhcHBlYXJcblxuXG4gICAgX3RoaXMuc3RhdGUgPSB7XG4gICAgICBoYW5kbGVFeGl0ZWQ6IGhhbmRsZUV4aXRlZCxcbiAgICAgIGZpcnN0UmVuZGVyOiB0cnVlXG4gICAgfTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gVHJhbnNpdGlvbkdyb3VwLnByb3RvdHlwZTtcblxuICBfcHJvdG8uZ2V0Q2hpbGRDb250ZXh0ID0gZnVuY3Rpb24gZ2V0Q2hpbGRDb250ZXh0KCkge1xuICAgIHJldHVybiB7XG4gICAgICB0cmFuc2l0aW9uR3JvdXA6IHtcbiAgICAgICAgaXNNb3VudGluZzogIXRoaXMuYXBwZWFyZWRcbiAgICAgIH1cbiAgICB9O1xuICB9O1xuXG4gIF9wcm90by5jb21wb25lbnREaWRNb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMuYXBwZWFyZWQgPSB0cnVlO1xuICAgIHRoaXMubW91bnRlZCA9IHRydWU7XG4gIH07XG5cbiAgX3Byb3RvLmNvbXBvbmVudFdpbGxVbm1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5tb3VudGVkID0gZmFsc2U7XG4gIH07XG5cbiAgVHJhbnNpdGlvbkdyb3VwLmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyA9IGZ1bmN0aW9uIGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyhuZXh0UHJvcHMsIF9yZWYpIHtcbiAgICB2YXIgcHJldkNoaWxkTWFwcGluZyA9IF9yZWYuY2hpbGRyZW4sXG4gICAgICAgIGhhbmRsZUV4aXRlZCA9IF9yZWYuaGFuZGxlRXhpdGVkLFxuICAgICAgICBmaXJzdFJlbmRlciA9IF9yZWYuZmlyc3RSZW5kZXI7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNoaWxkcmVuOiBmaXJzdFJlbmRlciA/ICgwLCBfQ2hpbGRNYXBwaW5nLmdldEluaXRpYWxDaGlsZE1hcHBpbmcpKG5leHRQcm9wcywgaGFuZGxlRXhpdGVkKSA6ICgwLCBfQ2hpbGRNYXBwaW5nLmdldE5leHRDaGlsZE1hcHBpbmcpKG5leHRQcm9wcywgcHJldkNoaWxkTWFwcGluZywgaGFuZGxlRXhpdGVkKSxcbiAgICAgIGZpcnN0UmVuZGVyOiBmYWxzZVxuICAgIH07XG4gIH07XG5cbiAgX3Byb3RvLmhhbmRsZUV4aXRlZCA9IGZ1bmN0aW9uIGhhbmRsZUV4aXRlZChjaGlsZCwgbm9kZSkge1xuICAgIHZhciBjdXJyZW50Q2hpbGRNYXBwaW5nID0gKDAsIF9DaGlsZE1hcHBpbmcuZ2V0Q2hpbGRNYXBwaW5nKSh0aGlzLnByb3BzLmNoaWxkcmVuKTtcbiAgICBpZiAoY2hpbGQua2V5IGluIGN1cnJlbnRDaGlsZE1hcHBpbmcpIHJldHVybjtcblxuICAgIGlmIChjaGlsZC5wcm9wcy5vbkV4aXRlZCkge1xuICAgICAgY2hpbGQucHJvcHMub25FeGl0ZWQobm9kZSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMubW91bnRlZCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZShmdW5jdGlvbiAoc3RhdGUpIHtcbiAgICAgICAgdmFyIGNoaWxkcmVuID0gX2V4dGVuZHMoe30sIHN0YXRlLmNoaWxkcmVuKTtcblxuICAgICAgICBkZWxldGUgY2hpbGRyZW5bY2hpbGQua2V5XTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBjaGlsZHJlbjogY2hpbGRyZW5cbiAgICAgICAgfTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8ucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBfdGhpcyRwcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgIENvbXBvbmVudCA9IF90aGlzJHByb3BzLmNvbXBvbmVudCxcbiAgICAgICAgY2hpbGRGYWN0b3J5ID0gX3RoaXMkcHJvcHMuY2hpbGRGYWN0b3J5LFxuICAgICAgICBwcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKF90aGlzJHByb3BzLCBbXCJjb21wb25lbnRcIiwgXCJjaGlsZEZhY3RvcnlcIl0pO1xuXG4gICAgdmFyIGNoaWxkcmVuID0gdmFsdWVzKHRoaXMuc3RhdGUuY2hpbGRyZW4pLm1hcChjaGlsZEZhY3RvcnkpO1xuICAgIGRlbGV0ZSBwcm9wcy5hcHBlYXI7XG4gICAgZGVsZXRlIHByb3BzLmVudGVyO1xuICAgIGRlbGV0ZSBwcm9wcy5leGl0O1xuXG4gICAgaWYgKENvbXBvbmVudCA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIGNoaWxkcmVuO1xuICAgIH1cblxuICAgIHJldHVybiBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KENvbXBvbmVudCwgcHJvcHMsIGNoaWxkcmVuKTtcbiAgfTtcblxuICByZXR1cm4gVHJhbnNpdGlvbkdyb3VwO1xufShfcmVhY3QuZGVmYXVsdC5Db21wb25lbnQpO1xuXG5UcmFuc2l0aW9uR3JvdXAuY2hpbGRDb250ZXh0VHlwZXMgPSB7XG4gIHRyYW5zaXRpb25Hcm91cDogX3Byb3BUeXBlcy5kZWZhdWx0Lm9iamVjdC5pc1JlcXVpcmVkXG59O1xuVHJhbnNpdGlvbkdyb3VwLnByb3BUeXBlcyA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IHtcbiAgLyoqXG4gICAqIGA8VHJhbnNpdGlvbkdyb3VwPmAgcmVuZGVycyBhIGA8ZGl2PmAgYnkgZGVmYXVsdC4gWW91IGNhbiBjaGFuZ2UgdGhpc1xuICAgKiBiZWhhdmlvciBieSBwcm92aWRpbmcgYSBgY29tcG9uZW50YCBwcm9wLlxuICAgKiBJZiB5b3UgdXNlIFJlYWN0IHYxNisgYW5kIHdvdWxkIGxpa2UgdG8gYXZvaWQgYSB3cmFwcGluZyBgPGRpdj5gIGVsZW1lbnRcbiAgICogeW91IGNhbiBwYXNzIGluIGBjb21wb25lbnQ9e251bGx9YC4gVGhpcyBpcyB1c2VmdWwgaWYgdGhlIHdyYXBwaW5nIGRpdlxuICAgKiBib3JrcyB5b3VyIGNzcyBzdHlsZXMuXG4gICAqL1xuICBjb21wb25lbnQ6IF9wcm9wVHlwZXMuZGVmYXVsdC5hbnksXG5cbiAgLyoqXG4gICAqIEEgc2V0IG9mIGA8VHJhbnNpdGlvbj5gIGNvbXBvbmVudHMsIHRoYXQgYXJlIHRvZ2dsZWQgYGluYCBhbmQgb3V0IGFzIHRoZXlcbiAgICogbGVhdmUuIHRoZSBgPFRyYW5zaXRpb25Hcm91cD5gIHdpbGwgaW5qZWN0IHNwZWNpZmljIHRyYW5zaXRpb24gcHJvcHMsIHNvXG4gICAqIHJlbWVtYmVyIHRvIHNwcmVhZCB0aGVtIHRocm91Z2ggaWYgeW91IGFyZSB3cmFwcGluZyB0aGUgYDxUcmFuc2l0aW9uPmAgYXNcbiAgICogd2l0aCBvdXIgYDxGYWRlPmAgZXhhbXBsZS5cbiAgICovXG4gIGNoaWxkcmVuOiBfcHJvcFR5cGVzLmRlZmF1bHQubm9kZSxcblxuICAvKipcbiAgICogQSBjb252ZW5pZW5jZSBwcm9wIHRoYXQgZW5hYmxlcyBvciBkaXNhYmxlcyBhcHBlYXIgYW5pbWF0aW9uc1xuICAgKiBmb3IgYWxsIGNoaWxkcmVuLiBOb3RlIHRoYXQgc3BlY2lmeWluZyB0aGlzIHdpbGwgb3ZlcnJpZGUgYW55IGRlZmF1bHRzIHNldFxuICAgKiBvbiBpbmRpdmlkdWFsIGNoaWxkcmVuIFRyYW5zaXRpb25zLlxuICAgKi9cbiAgYXBwZWFyOiBfcHJvcFR5cGVzLmRlZmF1bHQuYm9vbCxcblxuICAvKipcbiAgICogQSBjb252ZW5pZW5jZSBwcm9wIHRoYXQgZW5hYmxlcyBvciBkaXNhYmxlcyBlbnRlciBhbmltYXRpb25zXG4gICAqIGZvciBhbGwgY2hpbGRyZW4uIE5vdGUgdGhhdCBzcGVjaWZ5aW5nIHRoaXMgd2lsbCBvdmVycmlkZSBhbnkgZGVmYXVsdHMgc2V0XG4gICAqIG9uIGluZGl2aWR1YWwgY2hpbGRyZW4gVHJhbnNpdGlvbnMuXG4gICAqL1xuICBlbnRlcjogX3Byb3BUeXBlcy5kZWZhdWx0LmJvb2wsXG5cbiAgLyoqXG4gICAqIEEgY29udmVuaWVuY2UgcHJvcCB0aGF0IGVuYWJsZXMgb3IgZGlzYWJsZXMgZXhpdCBhbmltYXRpb25zXG4gICAqIGZvciBhbGwgY2hpbGRyZW4uIE5vdGUgdGhhdCBzcGVjaWZ5aW5nIHRoaXMgd2lsbCBvdmVycmlkZSBhbnkgZGVmYXVsdHMgc2V0XG4gICAqIG9uIGluZGl2aWR1YWwgY2hpbGRyZW4gVHJhbnNpdGlvbnMuXG4gICAqL1xuICBleGl0OiBfcHJvcFR5cGVzLmRlZmF1bHQuYm9vbCxcblxuICAvKipcbiAgICogWW91IG1heSBuZWVkIHRvIGFwcGx5IHJlYWN0aXZlIHVwZGF0ZXMgdG8gYSBjaGlsZCBhcyBpdCBpcyBleGl0aW5nLlxuICAgKiBUaGlzIGlzIGdlbmVyYWxseSBkb25lIGJ5IHVzaW5nIGBjbG9uZUVsZW1lbnRgIGhvd2V2ZXIgaW4gdGhlIGNhc2Ugb2YgYW4gZXhpdGluZ1xuICAgKiBjaGlsZCB0aGUgZWxlbWVudCBoYXMgYWxyZWFkeSBiZWVuIHJlbW92ZWQgYW5kIG5vdCBhY2Nlc3NpYmxlIHRvIHRoZSBjb25zdW1lci5cbiAgICpcbiAgICogSWYgeW91IGRvIG5lZWQgdG8gdXBkYXRlIGEgY2hpbGQgYXMgaXQgbGVhdmVzIHlvdSBjYW4gcHJvdmlkZSBhIGBjaGlsZEZhY3RvcnlgXG4gICAqIHRvIHdyYXAgZXZlcnkgY2hpbGQsIGV2ZW4gdGhlIG9uZXMgdGhhdCBhcmUgbGVhdmluZy5cbiAgICpcbiAgICogQHR5cGUgRnVuY3Rpb24oY2hpbGQ6IFJlYWN0RWxlbWVudCkgLT4gUmVhY3RFbGVtZW50XG4gICAqL1xuICBjaGlsZEZhY3Rvcnk6IF9wcm9wVHlwZXMuZGVmYXVsdC5mdW5jXG59IDoge307XG5UcmFuc2l0aW9uR3JvdXAuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzO1xuXG52YXIgX2RlZmF1bHQgPSAoMCwgX3JlYWN0TGlmZWN5Y2xlc0NvbXBhdC5wb2x5ZmlsbCkoVHJhbnNpdGlvbkdyb3VwKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdOyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjcmVhdGVQb3J0YWwgfSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IENTU1RyYW5zaXRpb24gZnJvbSAncmVhY3QtdHJhbnNpdGlvbi1ncm91cC9DU1NUcmFuc2l0aW9uJztcbmltcG9ydCBUcmFuc2l0aW9uR3JvdXAgZnJvbSAncmVhY3QtdHJhbnNpdGlvbi1ncm91cC9UcmFuc2l0aW9uR3JvdXAnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmltcG9ydCBCb3ggZnJvbSAnLi4vQm94JztcbmltcG9ydCB7IENvbG9yVHlwZSB9IGZyb20gJy4uLy4uL3R5cGVzJztcblxudHlwZSBQb3NpdGlvblR5cGUgPSAndG9wJyB8ICd0b3AtbGVmdCcgfCAndG9wLXJpZ2h0JyB8ICdib3R0b20nIHwgJ2JvdHRvbS1sZWZ0JyB8ICdib3R0b20tcmlnaHQnO1xuXG5pbnRlcmZhY2UgVG9hc3RUeXBlIHtcbiAgLyoqIOiqjeitmElEICovXG4gIGlkOiBzdHJpbmc7XG4gIC8qKiDooajnpLrjgZnjgovlhoXlrrkgKi9cbiAgbWVzc2FnZT86IFJlYWN0LlJlYWN0Tm9kZTtcbiAgLyoqIOiDjOaZr+OBruiJsiAqL1xuICBjb2xvcj86IENvbG9yVHlwZTtcbiAgLyoqIOihqOekuuOBleOCjOOCi+aZgumWkyBudWxs44Gu5aC05ZCI44Gv6Ieq5YuV44Gn6ZaJ44GY44KJ44KM44G+44Gb44KTICovXG4gIGR1cmF0aW9uPzogbnVtYmVyIHwgbnVsbDtcbn1cblxuaW50ZXJmYWNlIFRvYXN0UHJvcHMgZXh0ZW5kcyBUb2FzdFR5cGUge1xuICBjbGVhcjogKCkgPT4gdm9pZDtcbn1cblxuY29uc3QgV3JhcHBlciA9IHN0eWxlZChCb3gpYFxuICBwYWRkaW5nOiAwLjM3NWVtIDAuNzVlbTtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICB6LWluZGV4OiA5OTk5O1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG5cbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtLCBvcGFjaXR5O1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAyNTBtcztcblxuICAmLm1vdmUtZW50ZXIge1xuICAgIG9wYWNpdHk6IDAuMDE7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjgpO1xuICB9XG4gICYubW92ZS1lbnRlci1hY3RpdmUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgfVxuICAmLm1vdmUtZXhpdCB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB9XG4gICYubW92ZS1leGl0LWFjdGl2ZSB7XG4gICAgb3BhY2l0eTogMC4wMTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOCk7XG4gIH1cbmA7XG5cbmV4cG9ydCBjbGFzcyBUb2FzdEl0ZW0gZXh0ZW5kcyBQdXJlQ29tcG9uZW50PFRvYXN0UHJvcHM+IHtcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBkdXJhdGlvbjogNTAwMCxcbiAgfTtcblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5kdXJhdGlvbiAhPT0gbnVsbCkge1xuICAgICAgc2V0VGltZW91dCh0aGlzLnByb3BzLmNsZWFyLCB0aGlzLnByb3BzLmR1cmF0aW9uKTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBtZXNzYWdlLCBjb2xvciB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPFdyYXBwZXIgYm9yZGVybGVzcyBjb2xvcj17Y29sb3J9PlxuICAgICAgICB7bWVzc2FnZX1cbiAgICAgIDwvV3JhcHBlcj5cbiAgICApO1xuICB9XG59XG5cbmZ1bmN0aW9uIHNldFBvc2l0aW9uKHBvc2l0aW9uOiBzdHJpbmcsIGlzRml4ZWQ/OiBib29sZWFuKSB7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICBjb25zdCBiYXNlID0gYHBvc2l0aW9uOiAke2lzRml4ZWQgPyAnZml4ZWQnIDogJ2Fic29sdXRlJ307IHotaW5kZXg6IDk5OTk7IGRpc3BsYXk6IGZsZXg7IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IGA7XG4gIHN3aXRjaCAocG9zaXRpb24pIHtcbiAgICBjYXNlICdib3R0b20nOiB7XG4gICAgICByZXR1cm4gYCR7YmFzZX0gYm90dG9tOiAxcmVtOyBsZWZ0OiA1MCU7IGFsaWduLWl0ZW06IGNlbnRlcjsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO2A7XG4gICAgfVxuICAgIGNhc2UgJ2JvdHRvbS1sZWZ0Jzoge1xuICAgICAgcmV0dXJuIGAke2Jhc2V9IGJvdHRvbTogMXJlbTsgbGVmdDogMXJlbTsgYWxpZ24taXRlbTogZmxleC1zdGFydDtgO1xuICAgIH1cbiAgICBjYXNlICdib3R0b20tcmlnaHQnOiB7XG4gICAgICByZXR1cm4gYCR7YmFzZX0gYm90dG9tOiAxcmVtOyByaWdodDogMXJlbTsgYWxpZ24taXRlbTogZmxleC1lbmQ7YDtcbiAgICB9XG4gICAgY2FzZSAndG9wJzoge1xuICAgICAgcmV0dXJuIGAke2Jhc2V9IHRvcDogMXJlbTsgbGVmdDogNTAlOyBhbGlnbi1pdGVtOiBjZW50ZXI7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtgO1xuICAgIH1cbiAgICBjYXNlICd0b3AtbGVmdCc6IHtcbiAgICAgIHJldHVybiBgJHtiYXNlfSB0b3A6IDFyZW07IGxlZnQ6IDFyZW07IGFsaWduLWl0ZW06IGZsZXgtc3RhcnQ7YDtcbiAgICB9XG4gICAgY2FzZSAndG9wLXJpZ2h0JzpcbiAgICBkZWZhdWx0OiB7XG4gICAgICByZXR1cm4gYCR7YmFzZX0gdG9wOiAxcmVtOyByaWdodDogMXJlbTsgYWxpZ24taXRlbTogZmxleC1lbmQ7YDtcbiAgICB9XG4gIH1cbn1cblxuaW50ZXJmYWNlIENvbnRhaW5lclByb3BzIHtcbiAgLyoqIOihqOekuuOBmeOCi1RvYXN044Gu44Oq44K544OIICovXG4gIHRvYXN0czogVG9hc3RUeXBlW107XG4gIC8qKiB0b2FzdOOCkua2iOOBmeOCv+OCpOODn+ODs+OCsOOBruOCs+ODvOODq+ODkOODg+OCryAqL1xuICBjbGVhcjogKGlkOiBzdHJpbmcpID0+IHZvaWQ7XG4gIC8qKiB0b3AsIHRvcC1yaWdodCwgdG9wLWxlZnQsIGJvdHRvbSwgYm90dG9tLXJpZ2h0LCBib3R0b20tbGVmdCAqL1xuICBwb3NpdGlvbj86IFBvc2l0aW9uVHlwZTtcbiAgLyoqIOOCueOCr+ODreODvOODq+OBl+OBpuOCguWbuuWumuOBqOOBl+OBpuihqOekuuOBmeOCiyAqL1xuICBmaXhlZD86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvYXN0Q29udGFpbmVyIGV4dGVuZHMgQ29tcG9uZW50PENvbnRhaW5lclByb3BzPiB7XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgdG9hc3RzOiBbXSxcbiAgICBwb3NpdGlvbjogJ3RvcC1yaWdodCcsXG4gICAgZml4ZWQ6IGZhbHNlLFxuICB9O1xuXG4gIHNob3VsZENvbXBvbmVudFVwZGF0ZShwcm9wczogQ29udGFpbmVyUHJvcHMpIHtcbiAgICByZXR1cm4gcHJvcHMudG9hc3RzLmxlbmd0aCAhPT0gdGhpcy5wcm9wcy50b2FzdHMubGVuZ3RoIHx8XG4gICAgICBwcm9wcy5wb3NpdGlvbiAhPT0gdGhpcy5wcm9wcy5wb3NpdGlvbjtcbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcm9wczogQ29udGFpbmVyUHJvcHMpIHtcbiAgICBpZiAoXG4gICAgICB0aGlzLmVsZW1lbnQgJiZcbiAgICAgIChwcm9wcy5wb3NpdGlvbiAhPT0gdGhpcy5wcm9wcy5wb3NpdGlvbiB8fCBwcm9wcy5maXhlZCAhPT0gdGhpcy5wcm9wcy5maXhlZClcbiAgICApIHtcbiAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5jc3NUZXh0ID0gc2V0UG9zaXRpb24odGhpcy5wcm9wcy5wb3NpdGlvbiEsIHRoaXMucHJvcHMuZml4ZWQpO1xuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIGlmICh0aGlzLmVsZW1lbnQpIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQodGhpcy5lbGVtZW50KTtcbiAgfVxuXG4gIGNsZWFyID0gKGlkOiBzdHJpbmcpID0+ICgpID0+IHtcbiAgICB0aGlzLnByb3BzLmNsZWFyKGlkKTtcbiAgfVxuXG4gIHJlbmRlclRvYXN0ID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgdG9hc3RzIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8VHJhbnNpdGlvbkdyb3VwIGNvbXBvbmVudD17bnVsbH0+XG4gICAgICAgIHt0b2FzdHMubWFwKHByb3BzID0+IChcbiAgICAgICAgICA8Q1NTVHJhbnNpdGlvblxuICAgICAgICAgICAga2V5PXtwcm9wcy5pZH1cbiAgICAgICAgICAgIHRpbWVvdXQ9ezI1MH1cbiAgICAgICAgICAgIGNsYXNzTmFtZXM9XCJtb3ZlXCJcbiAgICAgICAgICAgIHVubW91bnRPbkV4aXRcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8VG9hc3RJdGVtXG4gICAgICAgICAgICAgIGtleT17cHJvcHMuaWR9XG4gICAgICAgICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgICAgICAgY2xlYXI9e3RoaXMuY2xlYXIocHJvcHMuaWQpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0NTU1RyYW5zaXRpb24+XG4gICAgICAgICkpfVxuICAgICAgPC9UcmFuc2l0aW9uR3JvdXA+XG4gICAgKTtcbiAgfVxuXG4gIGVsZW1lbnQ/OiBIVE1MRGl2RWxlbWVudDtcblxuICByZW5kZXIoKTogUmVhY3QuUmVhY3RQb3J0YWwgfCBudWxsIHtcbiAgICBpZiAodHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJyAmJiAhdGhpcy5lbGVtZW50KSB7XG4gICAgICB0aGlzLmVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5jc3NUZXh0ID0gc2V0UG9zaXRpb24odGhpcy5wcm9wcy5wb3NpdGlvbiEsIHRoaXMucHJvcHMuZml4ZWQpO1xuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLmVsZW1lbnQpO1xuICAgIH1cblxuXG4gICAgaWYgKHRoaXMuZWxlbWVudCkge1xuICAgICAgcmV0dXJuIGNyZWF0ZVBvcnRhbCh0aGlzLnJlbmRlclRvYXN0KCksIHRoaXMuZWxlbWVudCk7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIENoaWxkcmVuLCBDU1NQcm9wZXJ0aWVzIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgc2V0QWxpZ24gZnJvbSAnLi4vLi4vdXRpbHMvc2V0QWxpZ24nO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi9CdXR0b24nO1xuaW1wb3J0IHsgQ29sb3JUeXBlLCBUaGVtZVR5cGUsIEFsaWduVHlwZSB9IGZyb20gJy4uLy4uL3R5cGVzJztcblxuY29uc3QgV3JhcHBlciA9IHN0eWxlZC5uYXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogJHtzZXRBbGlnbn07XG5cbiAgLnRhYi1jb250ZW50IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICAkeyh7IGFsaWduIH0pID0+IGFsaWduID8gJycgOiAnZmxleC1ncm93OiAxOyd9XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICB9XG5gO1xuXG5pbnRlcmZhY2UgSXRlbVByb3BzIHtcbiAgYWxpZ24/OiBhbnk7XG4gIGFjdGl2ZTogYm9vbGVhbjtcbn1cblxuY29uc3QgVGFiSXRlbSA9IHN0eWxlZC5kaXY8SXRlbVByb3BzPmBcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZsZXgtZ3JvdzogMTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuXG4gIGEge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUudGV4dH07XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgIHBhZGRpbmc6IDAuMzc1ZW0gMC43NWVtO1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcblxuICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IGJhY2tncm91bmQtY29sb3I7XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMTUwbXM7XG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xuXG4gICAgJjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMDMpO1xuICAgIH1cbiAgfVxuYDtcblxuZnVuY3Rpb24gc2V0Q29sb3IoeyB0aGVtZSwgY29sb3IgfTogeyB0aGVtZTogVGhlbWVUeXBlLCBjb2xvcj86IENvbG9yVHlwZSB9KSB7XG4gIHJldHVybiAhY29sb3IgPyB0aGVtZS5iYWNrZ3JvdW5kIDogdGhlbWVbY29sb3JdO1xufVxuXG5pbnRlcmZhY2UgSW5kaWNhdG9yUHJvcHMge1xuICBjb2xvcj86IENvbG9yVHlwZTtcbiAgc3R5bGU/OiBDU1NQcm9wZXJ0aWVzO1xufVxuXG5jb25zdCBJbmRpY2F0b3IgPSBzdHlsZWQuZGl2PEluZGljYXRvclByb3BzPmBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICR7c2V0Q29sb3J9O1xuICBoZWlnaHQ6IDJweDtcblxuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQ7XG5cbiAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybTtcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAyMDBtcztcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKTtcbmA7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIC8qKiDoibLmjIflrpogKi9cbiAgY29sb3I/OiBDb2xvclR5cGU7XG4gIC8qKiBsZWZ0IHwgcmlnaHQgfCBjZW50ZXIgKi9cbiAgYWxpZ24/OiBBbGlnblR5cGU7XG4gIC8qKiDkuIDmsJfjgavooajnpLrjgZnjgovmnIDlpKfjga7mlbDjga7mjIflrpogKi9cbiAgbWF4SXRlbXM/OiBudW1iZXI7XG5cbiAgY2hpbGRyZW46IGFueTtcbn1cblxuaW50ZXJmYWNlIFN0YXRlIHtcbiAgc3RhcnQ6IG51bWJlcjtcbiAgY3VycmVudD86IG51bWJlcjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFicyBleHRlbmRzIENvbXBvbmVudDxQcm9wcz4ge1xuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIG1heEl0ZW1zOiA1LFxuICB9XG5cbiAgc3RhdGljIGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyhwcm9wczogUHJvcHMsIHN0YXRlOiBTdGF0ZSkge1xuICAgIGxldCBhY3RpdmVJbmRleDtcbiAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gcHJvcHMuY2hpbGRyZW4ubGVuZ3RoOyBpIDwgbGVuOyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IGNoaWxkID0gcHJvcHMuY2hpbGRyZW5baV07XG4gICAgICBpZiAoY2hpbGQucHJvcHMuYWN0aXZlKSB7XG4gICAgICAgIGFjdGl2ZUluZGV4ID0gaTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLnN0YXRlLFxuICAgICAgY3VycmVudDogYWN0aXZlSW5kZXgsXG4gICAgfTtcbiAgfVxuXG4gIHN0YXRpYyBJdGVtID0gVGFiSXRlbTtcblxuICBzdGF0ZSA9IHsgc3RhcnQ6IDAsIGN1cnJlbnQ6IG51bGwgfTtcblxuICBzaG91bGRDb21wb25lbnRVcGRhdGUocHJvcHM6IFByb3BzLCBzdGF0ZTogU3RhdGUpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZS5zdGFydCAhPT0gc3RhdGUuc3RhcnQgfHxcbiAgICAgIHRoaXMuc3RhdGUuY3VycmVudCAhPT0gc3RhdGUuY3VycmVudDtcbiAgfVxuXG4gIG9uTmV4dCA9ICgpID0+IHtcbiAgICBjb25zdCB0aHJlc2hvbGQgPSB0aGlzLnByb3BzLm1heEl0ZW1zITtcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuc3RhdGUuc3RhcnQgKyB0aHJlc2hvbGQ7XG4gICAgY29uc3QgY291bnQgPSBDaGlsZHJlbi5jb3VudCh0aGlzLnByb3BzLmNoaWxkcmVuKVxuICAgIGlmICh2YWx1ZSA8IGNvdW50KSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgc3RhcnQ6IHZhbHVlIH0pO1xuICAgIH1cbiAgfVxuXG4gIG9uUHJldiA9ICgpID0+IHtcbiAgICBpZiAodGhpcy5zdGF0ZS5zdGFydCA9PT0gMCkgcmV0dXJuO1xuXG4gICAgY29uc3QgdGhyZXNob2xkID0gdGhpcy5wcm9wcy5tYXhJdGVtcyE7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLnN0YXRlLnN0YXJ0IC0gdGhyZXNob2xkO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBzdGFydDogdmFsdWUgPCAwID8gMCA6IHZhbHVlIH0pO1xuICB9XG5cbiAgZ2V0SW5kaWNhdG9yUG9zaXRpb24gPSAoKTogQ1NTUHJvcGVydGllcyB8IHVuZGVmaW5lZCA9PiB7XG4gICAgY29uc3QgeyBjdXJyZW50IH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHsgY2hpbGRyZW4sIG1heEl0ZW1zIH0gPSB0aGlzLnByb3BzO1xuICAgIGlmIChjdXJyZW50ID09PSBudWxsIHx8IGN1cnJlbnQgPT09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICBpZiAoIWNoaWxkcmVuIHx8ICFjaGlsZHJlbi5sZW5ndGgpIHJldHVybiB1bmRlZmluZWQ7XG5cbiAgICBjb25zdCB0b3RhbCA9IGNoaWxkcmVuLmxlbmd0aCA+IG1heEl0ZW1zISA/IG1heEl0ZW1zIDogY2hpbGRyZW4ubGVuZ3RoO1xuICAgIGNvbnN0IHZhbHVlID0gKGN1cnJlbnQgKiAxMDApICsgJyUnO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHZpc2liaWxpdHk6ICd2aXNpYmxlJyxcbiAgICAgIHdpZHRoOiBgJHtNYXRoLnJvdW5kKCgxMDAgLyB0b3RhbCkpfSVgLFxuICAgICAgdHJhbnNmb3JtOiBgdHJhbnNsYXRlWCgke3ZhbHVlfSlgXG4gICAgfTtcbiAgfVxuXG4gIC8vIFRPRE86IG1ha2UgdGFiIHNjcm9sbGFibGUgdmlhIGFycm93IGljb25zXG4gIHJlbmRlckNoaWxkcmVuID0gKGNoaWxkOiBSZWFjdC5SZWFjdENoaWxkLCBpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgaWYgKHRoaXMuc3RhdGUuc3RhcnQgPiBpbmRleCkgcmV0dXJuIG51bGw7XG4gICAgaWYgKHRoaXMuc3RhdGUuc3RhcnQgKyBpbmRleCA+PSB0aGlzLnByb3BzLm1heEl0ZW1zISkgcmV0dXJuIG51bGw7XG4gICAgaWYgKHR5cGVvZiBjaGlsZCA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIGNoaWxkID09PSAnbnVtYmVyJykgcmV0dXJuIG51bGw7XG5cbiAgICByZXR1cm4gPFRhYkl0ZW0gey4uLmNoaWxkLnByb3BzfSBhbGlnbj17dGhpcy5wcm9wcy5hbGlnbn0gLz47XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjaGlsZHJlbiwgYWxpZ24sIGNvbG9yLCBtYXhJdGVtcyB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IHN0YXJ0IH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHRvdGFsID0gY2hpbGRyZW4gPyBjaGlsZHJlbi5sZW5ndGggOiAwO1xuICAgIGNvbnN0IHN0eWxlID0gdGhpcy5nZXRJbmRpY2F0b3JQb3NpdGlvbigpO1xuICAgIHJldHVybiAoXG4gICAgICA8V3JhcHBlciBhbGlnbj17YWxpZ259PlxuICAgICAgICB7c3RhcnQgPiBtYXhJdGVtcyEgJiYgKDxCdXR0b24gY29sb3I9XCJ0ZXh0XCI+eyc8J308L0J1dHRvbj4pfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYi1jb250ZW50XCI+XG4gICAgICAgICAge0NoaWxkcmVuLm1hcChjaGlsZHJlbiwgdGhpcy5yZW5kZXJDaGlsZHJlbil9XG4gICAgICAgICAgPEluZGljYXRvciBjb2xvcj17Y29sb3J9IHN0eWxlPXtzdHlsZX0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHt0b3RhbCA+IG1heEl0ZW1zISAmJiBzdGFydCA+IG1heEl0ZW1zISAmJiAoPEJ1dHRvbiBjb2xvcj1cInRleHRcIj57Jz4nfTwvQnV0dG9uPil9XG4gICAgICA8L1dyYXBwZXI+XG4gICAgKTtcbiAgfVxufTtcbiIsImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50LCBIVE1MQXR0cmlidXRlcyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IENTU1RyYW5zaXRpb24gZnJvbSAncmVhY3QtdHJhbnNpdGlvbi1ncm91cC9DU1NUcmFuc2l0aW9uJztcbmltcG9ydCB7IENvbG9yVHlwZSwgQ1NTVHlwZSB9IGZyb20gJy4uLy4uL3R5cGVzJztcblxuaW50ZXJmYWNlIExvYWRpbmdQcm9wcyBleHRlbmRzIEhUTUxBdHRyaWJ1dGVzPEhUTUxEaXZFbGVtZW50PiB7XG4gIC8qKiB0cnVl44Gu5aC05ZCI6ZaL5aeL44GX44G+44GZICovXG4gIGxvYWRpbmc6IGJvb2xlYW47XG4gIC8qKiDjg5Djg7zjga7oibLjga7mjIflrpogKi9cbiAgY29sb3I/OiBDb2xvclR5cGU7XG4gIC8qKiDjg5Djg7zjga5DU1MgcG9zaXRpb27jga7mjIflrpogKi9cbiAgcG9zaXRpb24/OiAnYWJzb2x1dGUnIHwgJ2ZpeGVkJyB8ICdzdGlja3knO1xuICAvKiog44OQ44O844Gu6IOM5pmv44Gu6Imy44Gu6Ieq55Sx5oyH5a6aICovXG4gIGJhY2tncm91bmQ/OiBzdHJpbmc7XG4gIC8qKiDjg5Djg7zjga7nuKbluYXjga7lrprnvqkgKi9cbiAgc2l6ZT86IHN0cmluZztcbiAgLyoqIOODkOODvOOBruOCouODi+ODoeODvOOCt+ODp+ODs+OBrmR1cmF0aW9u5oyH5a6aICjljZjkvY3vvJptcykgKi9cbiAgZHVyYXRpb24/OiBudW1iZXI7XG4gIGNzcz86IENTU1R5cGU7XG59XG5cbmNvbnN0IFdyYXBwZXIgPSBzdHlsZWQuZGl2PExvYWRpbmdQcm9wcz5gXG4gIHBvc2l0aW9uOiAkeyh7IHBvc2l0aW9uIH0pID0+IHBvc2l0aW9ufTtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHsoeyBiYWNrZ3JvdW5kIH0pID0+IGJhY2tncm91bmR9O1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuXG4gIC5sb2FkaW5nLWJhciB7XG4gICAgaGVpZ2h0OiAkeyh7IHNpemUgfSkgPT4gc2l6ZX07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHsoeyBjb2xvciwgdGhlbWUgfSkgPT4gdGhlbWVbY29sb3IhXX07XG5cbiAgICB3aWxsLWNoYW5nZTogd2lkdGgsIG9wYWNpdHk7XG4gICAgei1pbmRleDogMTAwMDAwMDtcblxuICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IHdpZHRoLCBvcGFjaXR5O1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246ICR7KHsgZHVyYXRpb24gfSkgPT4gZHVyYXRpb259bXM7XG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcblxuICAgICYubG9hZC1lbnRlciB7XG4gICAgICB3aWR0aDogMDtcbiAgICB9XG5cbiAgICAmLmxvYWQtZW50ZXItZG9uZSB7XG4gICAgICB3aWR0aDogODUlO1xuICAgIH1cblxuICAgICYubG9hZC1leGl0IHtcbiAgICAgIHdpZHRoOiA4NSU7XG4gICAgfVxuXG4gICAgJi5sb2FkLWV4aXQtYWN0aXZlIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG4gIH1cblxuICAkeyh7IGNzcyB9KSA9PiBjc3MgfHwge319XG5gO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvYWRpbmdCYXIgZXh0ZW5kcyBQdXJlQ29tcG9uZW50PExvYWRpbmdQcm9wcz4ge1xuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgIGNvbG9yOiAncHJpbWFyeScsXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgYmFja2dyb3VuZDogJ3RyYW5zcGFyZW50JyxcbiAgICBzaXplOiAnM3B4JyxcbiAgICBkdXJhdGlvbjogMTUwLFxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8V3JhcHBlciB7Li4udGhpcy5wcm9wc30+XG4gICAgICAgIDxDU1NUcmFuc2l0aW9uXG4gICAgICAgICAgY2xhc3NOYW1lcz1cImxvYWRcIlxuICAgICAgICAgIHRpbWVvdXQ9e3RoaXMucHJvcHMuZHVyYXRpb24hfVxuICAgICAgICAgIGluPXt0aGlzLnByb3BzLmxvYWRpbmd9XG4gICAgICAgICAgdW5tb3VudE9uRXhpdFxuICAgICAgICA+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2FkaW5nLWJhclwiIC8+XG4gICAgICAgIDwvQ1NTVHJhbnNpdGlvbj5cbiAgICAgIDwvV3JhcHBlcj5cbiAgICApO1xuICB9XG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgSFRNTEF0dHJpYnV0ZXMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkLCB7IGNzcywga2V5ZnJhbWVzIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgQ29sb3JUeXBlLCBUaGVtZVR5cGUgfSBmcm9tICcuLi8uLi90eXBlcyc7XG5cbmludGVyZmFjZSBQcm9wcyBleHRlbmRzIEhUTUxBdHRyaWJ1dGVzPEhUTUxEaXZFbGVtZW50PntcbiAgLyoqIOiJsuOBruaMh+WumiAqL1xuICBjb2xvcj86IENvbG9yVHlwZTtcbiAgLyoqIOaoquW5hSAqL1xuICB3aWR0aD86IHN0cmluZztcbiAgLyoqIOe4puW5hSAqL1xuICBoZWlnaHQ/OiBzdHJpbmc7XG4gIC8qKiBzcGlubmVy44Gu5aSq44GVICovXG4gIGJvcmRlclNpemU/OiBzdHJpbmc7XG59XG5cbmZ1bmN0aW9uIGdldENvbG9yKHsgdGhlbWUsIGNvbG9yIH06IHsgdGhlbWU6IFRoZW1lVHlwZSwgY29sb3I/OiBDb2xvclR5cGUgfSkge1xuICBjb25zdCB2YWx1ZSA9ICghY29sb3IgfHwgY29sb3IgPT09ICdsaWdodCcpID8gdGhlbWUuYmFja2dyb3VuZCA6IHRoZW1lW2NvbG9yXTtcblxuICByZXR1cm4gY3NzYFxuICAgIGJvcmRlci1jb2xvcjogJHt2YWx1ZX07XG4gICAgYm9yZGVyLXJpZ2h0LWNvbG9yOiAke3RoZW1lLmJvcmRlcn07XG4gICAgYm9yZGVyLXRvcC1jb2xvcjogJHt0aGVtZS5ib3JkZXJ9O1xuICBgO1xufVxuXG5jb25zdCBzcGluID0ga2V5ZnJhbWVzYFxuICBmcm9tIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxuICB0byB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzU5ZGVnKTtcbiAgfVxuYDtcblxuY29uc3QgU3Bpbm5lciA9IHN0eWxlZC5kaXY8UHJvcHM+YFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAkeyh7IHdpZHRoIH0pID0+IHdpZHRoID8gd2lkdGggOiAnMTAwJSd9O1xuICBoZWlnaHQ6ICR7KHsgaGVpZ2h0IH0pID0+IGhlaWdodCA/IGhlaWdodCA6ICcxMDAlJ307XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICY6YWZ0ZXIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIGFuaW1hdGlvbjogJHtzcGlufSA3NTBtcyBpbmZpbml0ZSBsaW5lYXI7XG4gICAgYm9yZGVyOiAkeyh7IGJvcmRlclNpemUgfSkgPT4gYm9yZGVyU2l6ZX0gc29saWQ7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICAke2dldENvbG9yfVxuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgfVxuYDtcblNwaW5uZXIuZGlzcGxheU5hbWUgPSAnU3Bpbm5lcic7XG5TcGlubmVyLmRlZmF1bHRQcm9wcyA9IHtcbiAgYm9yZGVyU2l6ZTogJzJweCcsXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNwaW5uZXI7XG4iLCIvLyBncmlkICYgbGF5b3V0XG5leHBvcnQgeyBkZWZhdWx0IGFzIEJyZWFrIH0gZnJvbSAnLi9HcmlkL0JyZWFrJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQ29udGFpbmVyIH0gZnJvbSAnLi9HcmlkL0NvbnRhaW5lcic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFJvdyB9IGZyb20gJy4vR3JpZC9Sb3cnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBDb2wgfSBmcm9tICcuL0dyaWQvQ29sJztcblxuXG4vLyBjb21tb25cbmV4cG9ydCB7IGRlZmF1bHQgYXMgQ29udGVudCB9IGZyb20gJy4vQ29udGVudCc7XG5leHBvcnQgKiBmcm9tICcuL0NvbnRlbnQnO1xuXG5leHBvcnQgeyBkZWZhdWx0IGFzIEJ1dHRvbiB9IGZyb20gJy4vQnV0dG9uJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQnV0dG9uR3JvdXAgfSBmcm9tICcuL0J1dHRvbi9CdXR0b25Hcm91cCc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFRhYmxlIH0gZnJvbSAnLi9UYWJsZSc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEJveCB9IGZyb20gJy4vQm94JztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgUHJvZ3Jlc3MgfSBmcm9tICcuL1Byb2dyZXNzJztcblxuLy8gZm9ybVxuZXhwb3J0ICogZnJvbSAnLi9Gb3JtJztcblxuLy8gY29tcG9uZW50c1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBBcHBCYXIgfSBmcm9tICcuL0FwcEJhcic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFRhZyB9IGZyb20gJy4vVGFnJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgSGVybyB9IGZyb20gJy4vSGVybyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFRvb2x0aXAgfSBmcm9tICcuL1Rvb2x0aXAnO1xuZXhwb3J0ICogZnJvbSAnLi9TaWRlTWVudSc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIENhcmQgfSBmcm9tICcuL0NhcmQnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBQb3BvdmVyIH0gZnJvbSAnLi9Qb3BvdmVyJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTW9kYWwgfSBmcm9tICcuL01vZGFsJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgVG9hc3QgfSBmcm9tICcuL1RvYXN0JztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgVGFicyB9IGZyb20gJy4vVGFicyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIExvYWRpbmdCYXIgfSBmcm9tICcuL0xvYWRpbmcvQmFyJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgU3Bpbm5lciB9IGZyb20gJy4vTG9hZGluZy9TcGlubmVyJztcbiIsImltcG9ydCB7IFRoZW1lVHlwZSB9IGZyb20gXCIuLi90eXBlc1wiO1xuXG5jb25zdCB0aGVtZTogVGhlbWVUeXBlID0ge1xuICBmb250RmFtaWx5OiAn44OS44Op44Ku44OO6KeS44K044K344OD44KvLFwi44OS44Op44Ku44OO6KeS44K0IFByb04gVzNcIizjg6HjgqTjg6rjgqosTWVpcnlvLFwi77yt77yzIO+8sOOCtOOCt+ODg+OCr1wiLFwiTVMgUEdvdGhpY1wiLHNhbnMtc2VyaWYnLFxuICBmb250U2l6ZTogJzE2cHgnLFxuXG4gIHJlc3BvbnNpdmU6IHRydWUsXG4gIGd1dHRlcjogMjQsXG4gIHNtYWxsR3V0dGVyOiAxNixcbiAgYm94U2hhZG93OiAnMCAxcHggMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjA1KScsXG5cbiAgbW9iaWxlOiA1NzYsXG4gIHRhYmxldDogNzY5LFxuICBkZXNrdG9wOiA5NjAsXG4gIGZ1bGxoZDogMTM0NCxcblxuICByYWRpdXM6IDQsXG5cbiAgcHJpbWFyeTogJyMzN0IxNTEnLFxuICBsaW5rOiAnIzU3OGJhOScsXG4gIGluZm86ICcjMjA5Y2VlJyxcbiAgc3VjY2VzczogJyMwZmE4ODYnLFxuICB3YXJuaW5nOiAnI2YyYjU0MScsXG4gIGRhbmdlcjogJyNmMzU3NWEnLFxuICBkYXJrOiAnIzM2MzYzNicsXG4gIGxpZ2h0OiAnIzliOWI5YicsXG5cbiAgYmxhY2s6ICcjMGEwYTBhJyxcbiAgYmxhY2tCaXM6ICcjMTIxMjEyJyxcbiAgYmxhY2tUZXI6ICcjMjQyNDI0JyxcblxuICB3aGl0ZTogJyNmZmZmZmYnLFxuICB3aGl0ZUJpczogJyNmYWZhZmEnLFxuICB3aGl0ZVRlcjogJyNmNWY1ZjUnLFxuXG4gIGdyZXk6ICcjN2E3YTdhJyxcbiAgZ3JleUxpZ2h0OiAnIzliOWI5YicsXG4gIGdyZXlMaWdodGVyOiAnI2RiZGJkYicsXG5cbiAgdGV4dDogJyM0YTRhNGEnLFxuICB0ZXh0RGFyazogJyM0YTRhNGEnLFxuICB0ZXh0TGlnaHQ6ICcjN2E3YTdhJyxcbiAgdGV4dFN0cm9uZzogJyM0YTRhNGEnLFxuXG4gIGJhY2tncm91bmQ6ICcjZjVmNWY1JyxcblxuICBib3JkZXI6ICcjZGJkYmRiJyxcbiAgYm9yZGVySG92ZXI6ICcjOWI5YjliJyxcbiAgYm9yZGVyQWN0aXZlOiAnIzRhNGE0YScsXG5cbiAgcGxhY2Vob2xkZXI6ICcjN2E3YTdhJyxcbn07XG5cblxuZXhwb3J0IGRlZmF1bHQgdGhlbWU7XG4iLCJpbXBvcnQgeyBjc3MgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbi8qISBiYXNlZCBvbiBub3JtYWxpemUuY3NzIHY4LjAuMCB8IE1JVCBMaWNlbnNlIHwgZ2l0aHViLmNvbS9uZWNvbGFzL25vcm1hbGl6ZS5jc3MgKi9cbmNvbnN0IG5vcm1hbGl6ZWQ6IGFueSA9IGNzc2BcbiAgKiwgOjphZnRlciwgOjpiZWZvcmUge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIH1cblxuICBodG1sIHtcbiAgICBsaW5lLWhlaWdodDogMS4xNTtcbiAgICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XG4gICAgLW1zLW92ZXJmbG93LXN0eWxlOiBzY3JvbGxiYXI7XG4gIH1cblxuICBib2R5IHtcbiAgICBtYXJnaW46IDA7XG4gICAgZm9udC1mYW1pbHk6ICR7KHsgdGhlbWUgfTogYW55KSA9PiB0aGVtZSA/IHRoZW1lLmZvbnRGYW1pbHkgOiAnXCJIaXJhZ2lubyBTYW5zXCIsIOODkuODqeOCruODjuinkuOCtOOCt+ODg+OCrywgXCJIaXJhZ2lubyBLYWt1IEdvdGhpYyBQcm9OXCIsIFwi44OS44Op44Ku44OO6KeS44K0IFByb04gVzNcIiwg5ri444K044K344OD44Kv5L2TLCBcIll1IEdvdGhpY1wiLCBZdUdvdGhpYywgXCLjg5Ljg6njgq7jg47op5LjgrTjgrfjg4Pjgq8gUHJvXCIsIEhpcmFLYWt1UHJvLVczLCBcIkhpcmFnaW5vIEtha3UgR290aGljIFByb1wiLCBRdWlja3NhbmQsIOODoeOCpOODquOCqiwgTWVpcnlvLCBPc2FrYSwgXCLvvK3vvLMg77yw44K044K344OD44KvXCIsIFwiTVMgUEdvdGhpY1wiLCBzYW5zLXNlcmlmJ307O1xuICAgIGZvbnQtc2l6ZTogJHsoeyB0aGVtZSB9OiBhbnkpID0+IHRoZW1lID8gdGhlbWUuZm9udFNpemUgOiAnMTZweCd9O1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gIH1cblxuICBoMSB7XG4gICAgZm9udC1zaXplOiAyZW07XG4gICAgbWFyZ2luOiAuNjdlbSAwO1xuICB9XG5cbiAgaHIge1xuICAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xuICAgIGhlaWdodDogMDtcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgfVxuXG4gIHByZSB7XG4gICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSxtb25vc3BhY2U7XG4gICAgZm9udC1zaXplOiAxZW07XG4gIH1cblxuICBhIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBjb2xvcjogJHsoeyB0aGVtZSB9OiBhbnkpID0+IHRoZW1lLmxpbmt9O1xuICB9XG5cbiAgYWJiclt0aXRsZV0ge1xuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgZG90dGVkO1xuICB9XG5cbiAgYixzdHJvbmcge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gIH1cblxuICBjb2RlLGtiZCxzYW1wIHtcbiAgICBmb250LWZhbWlseTogbW9ub3NwYWNlLG1vbm9zcGFjZTtcbiAgICBmb250LXNpemU6IDFlbTtcbiAgfVxuXG4gIHNtYWxsIHtcbiAgICBmb250LXNpemU6IDgwJTtcbiAgfVxuXG4gIHN1YixzdXAge1xuICAgIGZvbnQtc2l6ZTogNzUlO1xuICAgIGxpbmUtaGVpZ2h0OiAwO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG4gIH1cblxuICBzdWIge1xuICAgIGJvdHRvbTogLS4yNWVtO1xuICB9XG5cbiAgc3VwIHtcbiAgICB0b3A6IC0uNWVtO1xuICB9XG5cbiAgaW1nIHtcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XG4gIH1cblxuICBidXR0b24saW5wdXQsb3B0Z3JvdXAsc2VsZWN0LHRleHRhcmVhIHtcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgICBmb250LXNpemU6IDEwMCU7XG4gICAgbGluZS1oZWlnaHQ6IDEuMTU7XG4gICAgbWFyZ2luOiAwO1xuICB9XG5cbiAgYnV0dG9uLGlucHV0IHtcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgfVxuXG4gIGJ1dHRvbixzZWxlY3Qge1xuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICB9XG5cbiAgW3R5cGU9YnV0dG9uXSxbdHlwZT1yZXNldF0sW3R5cGU9c3VibWl0XSxidXR0b24ge1xuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uO1xuICB9XG5cbiAgW3R5cGU9YnV0dG9uXTo6LW1vei1mb2N1cy1pbm5lcixbdHlwZT1yZXNldF06Oi1tb3otZm9jdXMtaW5uZXIsW3R5cGU9c3VibWl0XTo6LW1vei1mb2N1cy1pbm5lcixidXR0b246Oi1tb3otZm9jdXMtaW5uZXIge1xuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG5cbiAgW3R5cGU9YnV0dG9uXTotbW96LWZvY3VzcmluZyxbdHlwZT1yZXNldF06LW1vei1mb2N1c3JpbmcsW3R5cGU9c3VibWl0XTotbW96LWZvY3VzcmluZyxidXR0b246LW1vei1mb2N1c3Jpbmcge1xuICAgIG91dGxpbmU6IDFweCBkb3R0ZWQgQnV0dG9uVGV4dDtcbiAgfVxuXG4gIGlucHV0W3R5cGU9ZGF0ZV0sXG4gIGlucHV0W3R5cGU9dGltZV0sXG4gIGlucHV0W3R5cGU9ZGF0ZXRpbWUtbG9jYWxdLFxuICBpbnB1dFt0eXBlPW1vbnRoXSB7XG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBsaXN0Ym94O1xuICB9XG5cbiAgZmllbGRzZXQge1xuICAgIHBhZGRpbmc6IC4zNWVtIC43NWVtIC42MjVlbTtcbiAgfVxuXG4gIGxlZ2VuZCB7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBjb2xvcjogaW5oZXJpdDtcbiAgICBkaXNwbGF5OiB0YWJsZTtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMDtcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICB9XG5cbiAgcHJvZ3Jlc3Mge1xuICAgIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbiAgICByZXNpemU6IHZlcnRpY2FsO1xuICB9XG5cbiAgdGV4dGFyZWEge1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICB9XG5cbiAgW3R5cGU9Y2hlY2tib3hdLFt0eXBlPXJhZGlvXSB7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG5cbiAgW3R5cGU9bnVtYmVyXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixbdHlwZT1udW1iZXJdOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcbiAgICBoZWlnaHQ6IGF1dG87XG4gIH1cblxuICBbdHlwZT1zZWFyY2hdIHtcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IHRleHRmaWVsZDtcbiAgICBvdXRsaW5lLW9mZnNldDogLTJweDtcbiAgfVxuXG4gIFt0eXBlPXNlYXJjaF06Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24ge1xuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgfVxuXG4gIDo6LXdlYmtpdC1maWxlLXVwbG9hZC1idXR0b24ge1xuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uO1xuICAgIGZvbnQ6IGluaGVyaXQ7XG4gIH1cblxuICBkZXRhaWxzIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuXG4gIHN1bW1hcnkge1xuICAgIGRpc3BsYXk6IGxpc3QtaXRlbTtcbiAgfVxuXG4gIHRlbXBsYXRlIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgW2hpZGRlbl0ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICBibG9ja3F1b3RlLCBib2R5LCBkZCwgZGwsIGR0LCBmaWVsZHNldCwgZmlndXJlLCBoMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBociwgaHRtbCwgaWZyYW1lLCBsZWdlbmQsIGxpLCBvbCwgcCwgcHJlLCB0ZXh0YXJlYSwgdWwge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG5cbiAgYnV0dG9uIHtcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XG4gIH1cblxuICBhcnRpY2xlLCBhc2lkZSwgZmlndXJlLFxuICBmb290ZXIsIGhlYWRlciwgaGdyb3VwLCBzZWN0aW9uIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuXG4gIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXSwgaW5wdXRbdHlwZT1cInJhZGlvXCJdIHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cblxuICBhIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOiAjMzI3M2RjO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICBjb2xvcjogY3VycmVudENvbG9yO1xuICAgIH1cbiAgfVxuXG4gIGltZyB7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XG4gIH1cblxuICBzdmcge1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgfVxuXG4gIHNtYWxsIHtcbiAgICBmb250LXNpemU6IC44NzVlbTtcbiAgfVxuXG4gIHNwYW4ge1xuICAgIGZvbnQtc3R5bGU6IGluaGVyaXQ7XG4gICAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XG4gIH1cblxuICBzdHJvbmcge1xuICAgIGNvbG9yOiAjMzYzNjM2O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIH1cblxuICB0YWJsZSB7XG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgICBib3JkZXItc3BhY2luZzogMDtcbiAgfVxuXG4gIHRoIHtcbiAgICB0ZXh0LWFsaWduOiBpbmhlcml0O1xuICB9XG5cbiAgdWwge1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgbm9ybWFsaXplZDtcbiJdLCJuYW1lcyI6WyJCcmVhayIsIlJlYWN0Iiwid2lkdGgiLCJoZWlnaHQiLCJtZWRpYU1vYmlsZSIsInRoZW1lIiwicmVzcG9uc2l2ZSIsIm1vYmlsZSIsIm1lZGlhVGFibGV0IiwidGFibGV0IiwibWVkaWFEZXNrdG9wIiwiZGVza3RvcCIsIm1lZGlhRnVsbEhEIiwiZnVsbGhkIiwibWVkaWFVbnRpbEZ1bGxIRCIsInNldFJlc3BvbnNpdmUiLCJmbHVpZCIsImNzcyIsInNtYWxsR3V0dGVyIiwiZ3V0dGVyIiwiQ29udGFpbmVyIiwic3R5bGVkIiwiZGl2IiwiZGlzcGxheU5hbWUiLCJkZWZhdWx0UHJvcHMiLCJwYXJjZW50YWdlIiwidmFsdWUiLCJNYXRoIiwiY2VpbCIsInJlbmRlclNpemUiLCJzaXplIiwibmFycm93IiwiYXV0byIsIm9mZnNldCIsIm9mZlZhbCIsImF1dG9TaXplIiwiQ29sIiwicmVuZGVyR3V0dGVyIiwibm9HdXR0ZXIiLCJSb3ciLCJ2Y2VudGVyIiwiY2VudGVyIiwiUHJlIiwicHJlIiwiQ29kZSIsImNvZGUiLCJiYWNrZ3JvdW5kIiwiZGFuZ2VyIiwiSDEiLCJoMSIsImJvcmRlciIsIkNvbnRlbnQiLCJ0ZXh0IiwiZXhwb3J0cyIsImN1cnJ5IiwiY3VycmllZCIsImYiLCJsZW5ndGgiLCJhY2MiLCJmbiIsImNvbWJpbmVkIiwiY29uY2F0IiwiQXJyYXkiLCJwcm90b3R5cGUiLCJzbGljZSIsImNhbGwiLCJhcmd1bWVudHMiLCJhcHBseSIsIm1vZHVsZSIsImRlZmF1bHQiLCJndWFyZCIsImxvd2VyQm91bmRhcnkiLCJ1cHBlckJvdW5kYXJ5IiwibWF4IiwibWluIiwiX2RlZmF1bHQiLCJjb2xvclRvSW50IiwiY29sb3IiLCJyb3VuZCIsImNvbnZlcnRUb0ludCIsInJlZCIsImdyZWVuIiwiYmx1ZSIsImhzbFRvUmdiIiwiaHVlIiwic2F0dXJhdGlvbiIsImxpZ2h0bmVzcyIsImNvbnZlcnQiLCJodWVQcmltZSIsImNocm9tYSIsImFicyIsInNlY29uZENvbXBvbmVudCIsImxpZ2h0bmVzc01vZGlmaWNhdGlvbiIsImZpbmFsUmVkIiwiZmluYWxHcmVlbiIsImZpbmFsQmx1ZSIsIm5hbWVkQ29sb3JNYXAiLCJhbGljZWJsdWUiLCJhbnRpcXVld2hpdGUiLCJhcXVhIiwiYXF1YW1hcmluZSIsImF6dXJlIiwiYmVpZ2UiLCJiaXNxdWUiLCJibGFjayIsImJsYW5jaGVkYWxtb25kIiwiYmx1ZXZpb2xldCIsImJyb3duIiwiYnVybHl3b29kIiwiY2FkZXRibHVlIiwiY2hhcnRyZXVzZSIsImNob2NvbGF0ZSIsImNvcmFsIiwiY29ybmZsb3dlcmJsdWUiLCJjb3Juc2lsayIsImNyaW1zb24iLCJjeWFuIiwiZGFya2JsdWUiLCJkYXJrY3lhbiIsImRhcmtnb2xkZW5yb2QiLCJkYXJrZ3JheSIsImRhcmtncmVlbiIsImRhcmtncmV5IiwiZGFya2toYWtpIiwiZGFya21hZ2VudGEiLCJkYXJrb2xpdmVncmVlbiIsImRhcmtvcmFuZ2UiLCJkYXJrb3JjaGlkIiwiZGFya3JlZCIsImRhcmtzYWxtb24iLCJkYXJrc2VhZ3JlZW4iLCJkYXJrc2xhdGVibHVlIiwiZGFya3NsYXRlZ3JheSIsImRhcmtzbGF0ZWdyZXkiLCJkYXJrdHVycXVvaXNlIiwiZGFya3Zpb2xldCIsImRlZXBwaW5rIiwiZGVlcHNreWJsdWUiLCJkaW1ncmF5IiwiZGltZ3JleSIsImRvZGdlcmJsdWUiLCJmaXJlYnJpY2siLCJmbG9yYWx3aGl0ZSIsImZvcmVzdGdyZWVuIiwiZnVjaHNpYSIsImdhaW5zYm9ybyIsImdob3N0d2hpdGUiLCJnb2xkIiwiZ29sZGVucm9kIiwiZ3JheSIsImdyZWVueWVsbG93IiwiZ3JleSIsImhvbmV5ZGV3IiwiaG90cGluayIsImluZGlhbnJlZCIsImluZGlnbyIsIml2b3J5Iiwia2hha2kiLCJsYXZlbmRlciIsImxhdmVuZGVyYmx1c2giLCJsYXduZ3JlZW4iLCJsZW1vbmNoaWZmb24iLCJsaWdodGJsdWUiLCJsaWdodGNvcmFsIiwibGlnaHRjeWFuIiwibGlnaHRnb2xkZW5yb2R5ZWxsb3ciLCJsaWdodGdyYXkiLCJsaWdodGdyZWVuIiwibGlnaHRncmV5IiwibGlnaHRwaW5rIiwibGlnaHRzYWxtb24iLCJsaWdodHNlYWdyZWVuIiwibGlnaHRza3libHVlIiwibGlnaHRzbGF0ZWdyYXkiLCJsaWdodHNsYXRlZ3JleSIsImxpZ2h0c3RlZWxibHVlIiwibGlnaHR5ZWxsb3ciLCJsaW1lIiwibGltZWdyZWVuIiwibGluZW4iLCJtYWdlbnRhIiwibWFyb29uIiwibWVkaXVtYXF1YW1hcmluZSIsIm1lZGl1bWJsdWUiLCJtZWRpdW1vcmNoaWQiLCJtZWRpdW1wdXJwbGUiLCJtZWRpdW1zZWFncmVlbiIsIm1lZGl1bXNsYXRlYmx1ZSIsIm1lZGl1bXNwcmluZ2dyZWVuIiwibWVkaXVtdHVycXVvaXNlIiwibWVkaXVtdmlvbGV0cmVkIiwibWlkbmlnaHRibHVlIiwibWludGNyZWFtIiwibWlzdHlyb3NlIiwibW9jY2FzaW4iLCJuYXZham93aGl0ZSIsIm5hdnkiLCJvbGRsYWNlIiwib2xpdmUiLCJvbGl2ZWRyYWIiLCJvcmFuZ2UiLCJvcmFuZ2VyZWQiLCJvcmNoaWQiLCJwYWxlZ29sZGVucm9kIiwicGFsZWdyZWVuIiwicGFsZXR1cnF1b2lzZSIsInBhbGV2aW9sZXRyZWQiLCJwYXBheWF3aGlwIiwicGVhY2hwdWZmIiwicGVydSIsInBpbmsiLCJwbHVtIiwicG93ZGVyYmx1ZSIsInB1cnBsZSIsInJlYmVjY2FwdXJwbGUiLCJyb3N5YnJvd24iLCJyb3lhbGJsdWUiLCJzYWRkbGVicm93biIsInNhbG1vbiIsInNhbmR5YnJvd24iLCJzZWFncmVlbiIsInNlYXNoZWxsIiwic2llbm5hIiwic2lsdmVyIiwic2t5Ymx1ZSIsInNsYXRlYmx1ZSIsInNsYXRlZ3JheSIsInNsYXRlZ3JleSIsInNub3ciLCJzcHJpbmdncmVlbiIsInN0ZWVsYmx1ZSIsInRhbiIsInRlYWwiLCJ0aGlzdGxlIiwidG9tYXRvIiwidHVycXVvaXNlIiwidmlvbGV0Iiwid2hlYXQiLCJ3aGl0ZSIsIndoaXRlc21va2UiLCJ5ZWxsb3ciLCJ5ZWxsb3dncmVlbiIsIm5hbWVUb0hleCIsIm5vcm1hbGl6ZWRDb2xvck5hbWUiLCJ0b0xvd2VyQ2FzZSIsIl9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQiLCJzZWxmIiwiUmVmZXJlbmNlRXJyb3IiLCJfaW5oZXJpdHNMb29zZSIsInN1YkNsYXNzIiwic3VwZXJDbGFzcyIsIk9iamVjdCIsImNyZWF0ZSIsImNvbnN0cnVjdG9yIiwiX19wcm90b19fIiwiX3dyYXBOYXRpdmVTdXBlciIsIkNsYXNzIiwiX2NhY2hlIiwiTWFwIiwidW5kZWZpbmVkIiwiX2lzTmF0aXZlRnVuY3Rpb24iLCJUeXBlRXJyb3IiLCJoYXMiLCJnZXQiLCJzZXQiLCJXcmFwcGVyIiwiX2NvbnN0cnVjdCIsIl9nZXRQcm90b3R5cGVPZiIsImVudW1lcmFibGUiLCJ3cml0YWJsZSIsImNvbmZpZ3VyYWJsZSIsIl9zZXRQcm90b3R5cGVPZiIsImlzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCIsIlJlZmxlY3QiLCJjb25zdHJ1Y3QiLCJzaGFtIiwiUHJveHkiLCJEYXRlIiwidG9TdHJpbmciLCJlIiwiUGFyZW50IiwiYXJncyIsImEiLCJwdXNoIiwiQ29uc3RydWN0b3IiLCJGdW5jdGlvbiIsImJpbmQiLCJpbnN0YW5jZSIsImluZGV4T2YiLCJvIiwicCIsInNldFByb3RvdHlwZU9mIiwiZ2V0UHJvdG90eXBlT2YiLCJFUlJPUlMiLCJmb3JtYXQiLCJfbGVuIiwiX2tleSIsImIiLCJjIiwiZm9yRWFjaCIsImQiLCJyZXBsYWNlIiwiUG9saXNoZWRFcnJvciIsIl9FcnJvciIsIl90aGlzIiwicHJvY2VzcyIsImVudiIsIk5PREVfRU5WIiwiX2xlbjIiLCJfa2V5MiIsIkVycm9yIiwiX2hzbFRvUmdiIiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsInJlcXVpcmUkJDAiLCJfbmFtZVRvSGV4IiwicmVxdWlyZSQkMSIsIl9lcnJvcnMiLCJyZXF1aXJlJCQyIiwib2JqIiwiX19lc01vZHVsZSIsImhleFJlZ2V4IiwiaGV4UmdiYVJlZ2V4IiwicmVkdWNlZEhleFJlZ2V4IiwicmVkdWNlZFJnYmFIZXhSZWdleCIsInJnYlJlZ2V4IiwicmdiYVJlZ2V4IiwiaHNsUmVnZXgiLCJoc2xhUmVnZXgiLCJwYXJzZVRvUmdiIiwibm9ybWFsaXplZENvbG9yIiwibWF0Y2giLCJwYXJzZUludCIsImFscGhhIiwicGFyc2VGbG9hdCIsInRvRml4ZWQiLCJfYWxwaGEiLCJyZ2JNYXRjaGVkIiwiZXhlYyIsInJnYmFNYXRjaGVkIiwiaHNsTWF0Y2hlZCIsInJnYkNvbG9yU3RyaW5nIiwiaHNsUmdiTWF0Y2hlZCIsImhzbGFNYXRjaGVkIiwiX2h1ZSIsIl9zYXR1cmF0aW9uIiwiX2xpZ2h0bmVzcyIsIl9yZ2JDb2xvclN0cmluZyIsIl9oc2xSZ2JNYXRjaGVkIiwicmdiVG9Ic2wiLCJkZWx0YSIsIl9wYXJzZVRvUmdiIiwiX3JnYlRvSHNsIiwicGFyc2VUb0hzbCIsInJlZHVjZUhleFZhbHVlIiwibnVtYmVyVG9IZXgiLCJoZXgiLCJfcmVkdWNlSGV4VmFsdWUiLCJfbnVtYmVyVG9IZXgiLCJjb2xvclRvSGV4IiwiY29udmVydFRvSGV4IiwiaHNsVG9IZXgiLCJfaHNsVG9IZXgiLCJoc2wiLCJoc2xhIiwicmdiIiwiX3JnYiIsInJnYmEiLCJmaXJzdFZhbHVlIiwic2Vjb25kVmFsdWUiLCJ0aGlyZFZhbHVlIiwiZm91cnRoVmFsdWUiLCJyZ2JWYWx1ZSIsIl9oc2wiLCJfaHNsYSIsIl9yZ2JhIiwicmVxdWlyZSQkMyIsInJlcXVpcmUkJDQiLCJpc1JnYiIsImlzUmdiYSIsImlzSHNsIiwiaXNIc2xhIiwidG9Db2xvclN0cmluZyIsIl9jdXJyeSIsIl9ndWFyZCIsIl9wYXJzZVRvSHNsIiwiX3RvQ29sb3JTdHJpbmciLCJfZXh0ZW5kcyIsImFzc2lnbiIsInRhcmdldCIsImkiLCJzb3VyY2UiLCJrZXkiLCJoYXNPd25Qcm9wZXJ0eSIsImRhcmtlbiIsImFtb3VudCIsImhzbENvbG9yIiwiY3VycmllZERhcmtlbiIsImdldEx1bWluYW5jZSIsInJnYkNvbG9yIiwiX09iamVjdCRrZXlzJG1hcCIsImtleXMiLCJtYXAiLCJjaGFubmVsIiwicG93IiwiciIsImciLCJmaW5kQ29sb3JJbnZlcnQiLCJ0cmFuc3BhcmVudGl6ZSIsInBhcnNlZENvbG9yIiwiY29sb3JXaXRoQWxwaGEiLCJjdXJyaWVkVHJhbnNwYXJlbnRpemUiLCJib3hTaGFkb3ciLCJzaGFkb3dDb2xvciIsInNldFNpemUiLCJuYW1lIiwiZGlzYWJsZWRDb2xvciIsInRleHRDb2xvciIsInRleHREYXJrIiwiYmFja0NvbG9yIiwic2V0Q29sb3IiLCJvdXRsaW5lIiwiZGlzYWJsZWQiLCJib3JkZXJIb3ZlciIsImJvcmRlckFjdGl2ZSIsImludmVydENvbG9yIiwiQnV0dG9uIiwiYnV0dG9uIiwiZnVsbCIsIkJ1dHRvbkdyb3VwIiwic3RyaXBlZFN0eWxlIiwiaG92ZXJTdHlsZSIsIlRhYmxlIiwidGFibGUiLCJib3JkZXJlZCIsInN0cmlwZWQiLCJob3ZlciIsImhlYWRlclN0eWxlIiwiQm94IiwiYm9yZGVybGVzcyIsIlByb2dyZXNzIiwicHJvcHMiLCJwZXJjZW50IiwiUHVyZUNvbXBvbmVudCIsInJlcXVpcmVkIiwicHJpbWFyeSIsIkxhYmVsIiwibGFiZWwiLCJ0ZXh0U3Ryb25nIiwiRmllbGQiLCJjaGlsZHJlbiIsInJlc3QiLCJoYW1idXJnZXIiLCJBcnJvdyIsImRpcmVjdGlvbiIsIk1lc3NhZ2UiLCJzcGFuIiwiZXJyb3IiLCJ0ZXh0TGlnaHQiLCJIZWxwTWVzc2FnZSIsImhlbHAiLCJyaWdodEljb24iLCJsZWZ0SWNvbiIsIkljb24iLCJyaWdodCIsInBsYWNlaG9sZGVyIiwiVGV4dElucHV0IiwiY2xhc3NOYW1lIiwic3R5bGUiLCJ0eXBlIiwibWF4TGVuZ3RoIiwib25DaGFuZ2UiLCJUZXh0YXJlYSIsInJlYWRPbmx5IiwiQ29tcG9uZW50IiwiY29sIiwicm93IiwiQ2hlY2tib3giLCJjaGVja2VkIiwiaWQiLCJJbnB1dFdyYXBwZXIiLCJhcnJvdyIsIlNlbGVjdCIsInJlbmRlciIsIm9wdGlvbnMiLCJpdGVtIiwiaWR4IiwicmVuZGVyTGFiZWwiLCJpbnB1dFNpemUiLCJCb29sZWFuIiwicmVuZGVySXRlbSIsIlJhZGlvTGFiZWwiLCJCdXR0b25MYWJlbCIsIlJhZGlvIiwic2V0QWxpZ24iLCJhbGlnbiIsImJhY2tkcm9wIiwiYmFja2dyb3VuZENvbG9yIiwidWEiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJOYXZCYXIiLCJoZWFkZXIiLCJmaXhlZCIsInN0aWNreSIsIkJ1cmdlciIsImhhbWJ1Z2VyIiwiTmF2Q29udGVudCIsIkFwcEJhciIsInNob3ciLCJzZXRTdGF0ZSIsInN0YXRlIiwiYnJhbmQiLCJ0b2dnbGVNZW51IiwiZ2V0Q29sb3IiLCJhZGRvbkNvbG9yIiwic3ViQ29sb3IiLCJjbG9zZSIsIlRhZyIsIm9uQ2xvc2UiLCJvbkNsaWNrIiwiQm9keSIsIkhlcm8iLCJkZWZpbmVQcm9wZXJ0eSIsIlN5bWJvbCIsImZvciIsImgiLCJrIiwibCIsIm0iLCJuIiwicSIsInQiLCJ1IiwiJCR0eXBlb2YiLCJ2IiwiaGFzU3ltYm9sIiwiUkVBQ1RfRUxFTUVOVF9UWVBFIiwiUkVBQ1RfUE9SVEFMX1RZUEUiLCJSRUFDVF9GUkFHTUVOVF9UWVBFIiwiUkVBQ1RfU1RSSUNUX01PREVfVFlQRSIsIlJFQUNUX1BST0ZJTEVSX1RZUEUiLCJSRUFDVF9QUk9WSURFUl9UWVBFIiwiUkVBQ1RfQ09OVEVYVF9UWVBFIiwiUkVBQ1RfQVNZTkNfTU9ERV9UWVBFIiwiUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEUiLCJSRUFDVF9GT1JXQVJEX1JFRl9UWVBFIiwiUkVBQ1RfU1VTUEVOU0VfVFlQRSIsIlJFQUNUX01FTU9fVFlQRSIsIlJFQUNUX0xBWllfVFlQRSIsImlzVmFsaWRFbGVtZW50VHlwZSIsImxvd1ByaW9yaXR5V2FybmluZyIsInByaW50V2FybmluZyIsImFyZ0luZGV4IiwibWVzc2FnZSIsImNvbnNvbGUiLCJ3YXJuIiwieCIsImNvbmRpdGlvbiIsImxvd1ByaW9yaXR5V2FybmluZyQxIiwidHlwZU9mIiwib2JqZWN0IiwiJCR0eXBlb2ZUeXBlIiwiQXN5bmNNb2RlIiwiQ29uY3VycmVudE1vZGUiLCJDb250ZXh0Q29uc3VtZXIiLCJDb250ZXh0UHJvdmlkZXIiLCJFbGVtZW50IiwiRm9yd2FyZFJlZiIsIkZyYWdtZW50IiwiTGF6eSIsIk1lbW8iLCJQb3J0YWwiLCJQcm9maWxlciIsIlN0cmljdE1vZGUiLCJTdXNwZW5zZSIsImhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQXN5bmNNb2RlIiwiaXNBc3luY01vZGUiLCJpc0NvbmN1cnJlbnRNb2RlIiwiaXNDb250ZXh0Q29uc3VtZXIiLCJpc0NvbnRleHRQcm92aWRlciIsImlzRWxlbWVudCIsImlzRm9yd2FyZFJlZiIsImlzRnJhZ21lbnQiLCJpc0xhenkiLCJpc01lbW8iLCJpc1BvcnRhbCIsImlzUHJvZmlsZXIiLCJpc1N0cmljdE1vZGUiLCJpc1N1c3BlbnNlIiwiZ2V0T3duUHJvcGVydHlTeW1ib2xzIiwicHJvcElzRW51bWVyYWJsZSIsInByb3BlcnR5SXNFbnVtZXJhYmxlIiwidG9PYmplY3QiLCJ2YWwiLCJzaG91bGRVc2VOYXRpdmUiLCJ0ZXN0MSIsIlN0cmluZyIsImdldE93blByb3BlcnR5TmFtZXMiLCJ0ZXN0MiIsImZyb21DaGFyQ29kZSIsIm9yZGVyMiIsImpvaW4iLCJ0ZXN0MyIsInNwbGl0IiwibGV0dGVyIiwiZXJyIiwiZnJvbSIsInRvIiwic3ltYm9scyIsInMiLCJSZWFjdFByb3BUeXBlc1NlY3JldCIsImxvZ2dlZFR5cGVGYWlsdXJlcyIsImNoZWNrUHJvcFR5cGVzIiwidHlwZVNwZWNzIiwidmFsdWVzIiwibG9jYXRpb24iLCJjb21wb25lbnROYW1lIiwiZ2V0U3RhY2siLCJ0eXBlU3BlY05hbWUiLCJleCIsInN0YWNrIiwicmVzZXRXYXJuaW5nQ2FjaGUiLCJlbXB0eUZ1bmN0aW9uVGhhdFJldHVybnNOdWxsIiwiaXNWYWxpZEVsZW1lbnQiLCJ0aHJvd09uRGlyZWN0QWNjZXNzIiwiSVRFUkFUT1JfU1lNQk9MIiwiaXRlcmF0b3IiLCJGQVVYX0lURVJBVE9SX1NZTUJPTCIsImdldEl0ZXJhdG9yRm4iLCJtYXliZUl0ZXJhYmxlIiwiaXRlcmF0b3JGbiIsIkFOT05ZTU9VUyIsIlJlYWN0UHJvcFR5cGVzIiwiYXJyYXkiLCJjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlciIsImJvb2wiLCJmdW5jIiwibnVtYmVyIiwic3RyaW5nIiwic3ltYm9sIiwiYW55IiwiY3JlYXRlQW55VHlwZUNoZWNrZXIiLCJhcnJheU9mIiwiY3JlYXRlQXJyYXlPZlR5cGVDaGVja2VyIiwiZWxlbWVudCIsImNyZWF0ZUVsZW1lbnRUeXBlQ2hlY2tlciIsImVsZW1lbnRUeXBlIiwiY3JlYXRlRWxlbWVudFR5cGVUeXBlQ2hlY2tlciIsImluc3RhbmNlT2YiLCJjcmVhdGVJbnN0YW5jZVR5cGVDaGVja2VyIiwibm9kZSIsImNyZWF0ZU5vZGVDaGVja2VyIiwib2JqZWN0T2YiLCJjcmVhdGVPYmplY3RPZlR5cGVDaGVja2VyIiwib25lT2YiLCJjcmVhdGVFbnVtVHlwZUNoZWNrZXIiLCJvbmVPZlR5cGUiLCJjcmVhdGVVbmlvblR5cGVDaGVja2VyIiwic2hhcGUiLCJjcmVhdGVTaGFwZVR5cGVDaGVja2VyIiwiZXhhY3QiLCJjcmVhdGVTdHJpY3RTaGFwZVR5cGVDaGVja2VyIiwiaXMiLCJ5IiwiUHJvcFR5cGVFcnJvciIsImNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyIiwidmFsaWRhdGUiLCJtYW51YWxQcm9wVHlwZUNhbGxDYWNoZSIsIm1hbnVhbFByb3BUeXBlV2FybmluZ0NvdW50IiwiY2hlY2tUeXBlIiwiaXNSZXF1aXJlZCIsInByb3BOYW1lIiwicHJvcEZ1bGxOYW1lIiwic2VjcmV0IiwiY2FjaGVLZXkiLCJjaGFpbmVkQ2hlY2tUeXBlIiwiZXhwZWN0ZWRUeXBlIiwicHJvcFZhbHVlIiwicHJvcFR5cGUiLCJnZXRQcm9wVHlwZSIsInByZWNpc2VUeXBlIiwiZ2V0UHJlY2lzZVR5cGUiLCJ0eXBlQ2hlY2tlciIsImlzQXJyYXkiLCJSZWFjdElzIiwiZXhwZWN0ZWRDbGFzcyIsImV4cGVjdGVkQ2xhc3NOYW1lIiwiYWN0dWFsQ2xhc3NOYW1lIiwiZ2V0Q2xhc3NOYW1lIiwiZXhwZWN0ZWRWYWx1ZXMiLCJ2YWx1ZXNTdHJpbmciLCJKU09OIiwic3RyaW5naWZ5IiwicmVwbGFjZXIiLCJhcnJheU9mVHlwZUNoZWNrZXJzIiwiY2hlY2tlciIsImdldFBvc3RmaXhGb3JUeXBlV2FybmluZyIsImlzTm9kZSIsInNoYXBlVHlwZXMiLCJhbGxLZXlzIiwiZXZlcnkiLCJzdGVwIiwiZW50cmllcyIsIm5leHQiLCJkb25lIiwiZW50cnkiLCJpc1N5bWJvbCIsIlJlZ0V4cCIsIlByb3BUeXBlcyIsImVtcHR5RnVuY3Rpb24iLCJlbXB0eUZ1bmN0aW9uV2l0aFJlc2V0Iiwic2hpbSIsImdldFNoaW0iLCJoYXNDbGFzcyIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwiYmFzZVZhbCIsImFkZENsYXNzIiwiX2hhc0NsYXNzIiwiYWRkIiwic2V0QXR0cmlidXRlIiwicmVwbGFjZUNsYXNzTmFtZSIsIm9yaWdDbGFzcyIsImNsYXNzVG9SZW1vdmUiLCJyZW1vdmVDbGFzcyIsInJlbW92ZSIsImNvbXBvbmVudFdpbGxNb3VudCIsImdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyIsImNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMiLCJuZXh0UHJvcHMiLCJ1cGRhdGVyIiwicHJldlN0YXRlIiwiY29tcG9uZW50V2lsbFVwZGF0ZSIsIm5leHRTdGF0ZSIsInByZXZQcm9wcyIsIl9fcmVhY3RJbnRlcm5hbFNuYXBzaG90RmxhZyIsIl9fcmVhY3RJbnRlcm5hbFNuYXBzaG90IiwiZ2V0U25hcHNob3RCZWZvcmVVcGRhdGUiLCJfX3N1cHByZXNzRGVwcmVjYXRpb25XYXJuaW5nIiwicG9seWZpbGwiLCJpc1JlYWN0Q29tcG9uZW50IiwiZm91bmRXaWxsTW91bnROYW1lIiwiZm91bmRXaWxsUmVjZWl2ZVByb3BzTmFtZSIsImZvdW5kV2lsbFVwZGF0ZU5hbWUiLCJVTlNBRkVfY29tcG9uZW50V2lsbE1vdW50IiwiVU5TQUZFX2NvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMiLCJVTlNBRkVfY29tcG9uZW50V2lsbFVwZGF0ZSIsIm5ld0FwaU5hbWUiLCJjb21wb25lbnREaWRVcGRhdGUiLCJjb21wb25lbnREaWRVcGRhdGVQb2x5ZmlsbCIsIm1heWJlU25hcHNob3QiLCJzbmFwc2hvdCIsIl9wcm9wVHlwZXMiLCJ0aW1lb3V0c1NoYXBlIiwiZW50ZXIiLCJleGl0IiwiY2xhc3NOYW1lc1NoYXBlIiwiYWN0aXZlIiwiZW50ZXJEb25lIiwiZW50ZXJBY3RpdmUiLCJleGl0RG9uZSIsImV4aXRBY3RpdmUiLCJfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCIsIl9yZWFjdCIsIl9yZWFjdERvbSIsIm5ld09iaiIsImRlc2MiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZSIsImV4Y2x1ZGVkIiwic291cmNlS2V5cyIsIlVOTU9VTlRFRCIsIkVYSVRFRCIsIkVOVEVSSU5HIiwiRU5URVJFRCIsIkVYSVRJTkciLCJUcmFuc2l0aW9uIiwiX1JlYWN0JENvbXBvbmVudCIsImNvbnRleHQiLCJwYXJlbnRHcm91cCIsInRyYW5zaXRpb25Hcm91cCIsImFwcGVhciIsImlzTW91bnRpbmciLCJpbml0aWFsU3RhdHVzIiwiYXBwZWFyU3RhdHVzIiwiaW4iLCJ1bm1vdW50T25FeGl0IiwibW91bnRPbkVudGVyIiwic3RhdHVzIiwibmV4dENhbGxiYWNrIiwiX3Byb3RvIiwiZ2V0Q2hpbGRDb250ZXh0IiwiX3JlZiIsIm5leHRJbiIsImNvbXBvbmVudERpZE1vdW50IiwidXBkYXRlU3RhdHVzIiwibmV4dFN0YXR1cyIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwiY2FuY2VsTmV4dENhbGxiYWNrIiwiZ2V0VGltZW91dHMiLCJ0aW1lb3V0IiwibW91bnRpbmciLCJmaW5kRE9NTm9kZSIsInBlcmZvcm1FbnRlciIsInBlcmZvcm1FeGl0IiwiX3RoaXMyIiwiYXBwZWFyaW5nIiwidGltZW91dHMiLCJzYWZlU2V0U3RhdGUiLCJvbkVudGVyZWQiLCJvbkVudGVyIiwib25FbnRlcmluZyIsIm9uVHJhbnNpdGlvbkVuZCIsIl90aGlzMyIsIm9uRXhpdGVkIiwib25FeGl0Iiwib25FeGl0aW5nIiwiY2FuY2VsIiwiY2FsbGJhY2siLCJzZXROZXh0Q2FsbGJhY2siLCJfdGhpczQiLCJldmVudCIsImhhbmRsZXIiLCJhZGRFbmRMaXN0ZW5lciIsInNldFRpbWVvdXQiLCJfdGhpcyRwcm9wcyIsImNoaWxkUHJvcHMiLCJjaGlsZCIsIkNoaWxkcmVuIiwib25seSIsImNsb25lRWxlbWVudCIsImNvbnRleHRUeXBlcyIsImNoaWxkQ29udGV4dFR5cGVzIiwicHJvcFR5cGVzIiwicHQiLCJfUHJvcFR5cGVzIiwibm9vcCIsIl9yZWFjdExpZmVjeWNsZXNDb21wYXQiLCJfYWRkQ2xhc3MiLCJfcmVtb3ZlQ2xhc3MiLCJfVHJhbnNpdGlvbiIsImNsYXNzZXMiLCJDU1NUcmFuc2l0aW9uIiwiX3RoaXMkZ2V0Q2xhc3NOYW1lcyIsImdldENsYXNzTmFtZXMiLCJyZW1vdmVDbGFzc2VzIiwiX3RoaXMkZ2V0Q2xhc3NOYW1lczIiLCJhY3RpdmVDbGFzc05hbWUiLCJyZWZsb3dBbmRBZGRDbGFzcyIsIl90aGlzJGdldENsYXNzTmFtZXMzIiwiZG9uZUNsYXNzTmFtZSIsIl90aGlzJGdldENsYXNzTmFtZXM0IiwiX3RoaXMkZ2V0Q2xhc3NOYW1lczUiLCJfdGhpcyRnZXRDbGFzc05hbWVzNiIsImNsYXNzTmFtZXMiLCJfdGhpcyRnZXRDbGFzc05hbWVzNyIsInNjcm9sbFRvcCIsImNyZWF0ZUVsZW1lbnQiLCJnZXRQb3NpdGlvbiIsInBvc2l0aW9uIiwiYm90dG9tIiwibGVmdCIsInRyYW5zZm9ybSIsInRvcCIsIlRvb2x0aXAiLCJjdXJyZW50Iiwib2Zmc2V0V2lkdGgiLCJvZmZzZXRIZWlnaHQiLCJjcmVhdGVSZWYiLCJvcGVuVG9vbHRpcCIsImNsb3NlVG9vbHRpcCIsIlNpZGVNZW51IiwiYXNpZGUiLCJNZW51TGlzdCIsInVsIiwiTWVudUxhYmVsIiwiQ2FyZEJvZHkiLCJDYXJkSGVhZGVyIiwiQ2FyZEZvb3RlciIsImZvb3RlciIsIkNhcmRJbWFnZSIsIkNhcmRJbWFnZUhvcml6b250YWwiLCJ1cmwiLCJob3Jpem9udGFsU3R5bGUiLCJmbGV4RGlyZWN0aW9uIiwiQ2FyZCIsImltYWdlIiwidGl0bGUiLCJob3Jpem9udGFsIiwicmVuZGVySGVhZGVyIiwid3JhcHBlclN0eWxlIiwiUG9wb3ZlciIsInRvb2x0aXBTdHlsZSIsIm9wZW5Ecm9wZG93biIsImNsb3NlRHJvcGRvd24iLCJkaXNwbGF5IiwiRVNDX0tFWSIsIk1vZGFsIiwiY2xvc2VPbkVzYyIsImtleUNvZGUiLCJjbG9zZU1vZGFsIiwiY2xvc2VPbk92ZXJsYXkiLCJkb2N1bWVudCIsImJvZHkiLCJyZW1vdmVDaGlsZCIsImFwcGVuZENoaWxkIiwiY3JlYXRlUG9ydGFsIiwiZXh0ZXJuYWwiLCJvbkNsaWNrT3ZlcmxheSIsImdldENoaWxkTWFwcGluZyIsIm1lcmdlQ2hpbGRNYXBwaW5ncyIsImdldEluaXRpYWxDaGlsZE1hcHBpbmciLCJnZXROZXh0Q2hpbGRNYXBwaW5nIiwibWFwRm4iLCJtYXBwZXIiLCJyZXN1bHQiLCJwcmV2IiwiZ2V0VmFsdWVGb3JLZXkiLCJuZXh0S2V5c1BlbmRpbmciLCJwZW5kaW5nS2V5cyIsInByZXZLZXkiLCJjaGlsZE1hcHBpbmciLCJuZXh0S2V5IiwicGVuZGluZ05leHRLZXkiLCJnZXRQcm9wIiwicHJvcCIsInByZXZDaGlsZE1hcHBpbmciLCJuZXh0Q2hpbGRNYXBwaW5nIiwiaGFzUHJldiIsImhhc05leHQiLCJwcmV2Q2hpbGQiLCJpc0xlYXZpbmciLCJjb21wb25lbnQiLCJjaGlsZEZhY3RvcnkiLCJUcmFuc2l0aW9uR3JvdXAiLCJoYW5kbGVFeGl0ZWQiLCJmaXJzdFJlbmRlciIsImFwcGVhcmVkIiwibW91bnRlZCIsIl9DaGlsZE1hcHBpbmciLCJjdXJyZW50Q2hpbGRNYXBwaW5nIiwiVG9hc3RJdGVtIiwiZHVyYXRpb24iLCJjbGVhciIsInNldFBvc2l0aW9uIiwiaXNGaXhlZCIsImJhc2UiLCJUb2FzdENvbnRhaW5lciIsInRvYXN0cyIsImNzc1RleHQiLCJyZW5kZXJUb2FzdCIsIm5hdiIsIlRhYkl0ZW0iLCJJbmRpY2F0b3IiLCJUYWJzIiwic3RhcnQiLCJ0aHJlc2hvbGQiLCJtYXhJdGVtcyIsImNvdW50IiwidG90YWwiLCJ2aXNpYmlsaXR5IiwiaW5kZXgiLCJnZXRJbmRpY2F0b3JQb3NpdGlvbiIsInJlbmRlckNoaWxkcmVuIiwiYWN0aXZlSW5kZXgiLCJsZW4iLCJMb2FkaW5nQmFyIiwibG9hZGluZyIsInNwaW4iLCJrZXlmcmFtZXMiLCJTcGlubmVyIiwiYm9yZGVyU2l6ZSIsImZvbnRGYW1pbHkiLCJmb250U2l6ZSIsInJhZGl1cyIsImxpbmsiLCJpbmZvIiwic3VjY2VzcyIsIndhcm5pbmciLCJkYXJrIiwibGlnaHQiLCJibGFja0JpcyIsImJsYWNrVGVyIiwid2hpdGVCaXMiLCJ3aGl0ZVRlciIsImdyZXlMaWdodCIsImdyZXlMaWdodGVyIiwibm9ybWFsaXplZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUVlLFNBQVNBLEtBQVQsR0FBaUI7U0FDdkJDO0lBQUssS0FBSyxFQUFFO01BQUVDLEtBQUssRUFBRSxNQUFUO01BQWlCQyxNQUFNLEVBQUU7O0lBQTVDOzs7QUNHSyxTQUFTQyxXQUFULE9BQXVDO01BQWhCQyxLQUFnQixRQUFoQkEsS0FBZ0I7aURBQ0pBLEtBQUssQ0FBQ0MsVUFBTixHQUFtQkQsS0FBSyxDQUFDRSxNQUF6QixHQUFrQyxDQUExRTs7QUFHRixBQUFPLFNBQVNDLFdBQVQsUUFBdUM7TUFBaEJILEtBQWdCLFNBQWhCQSxLQUFnQjtpREFDSkEsS0FBSyxDQUFDQyxVQUFOLEdBQW1CRCxLQUFLLENBQUNJLE1BQXpCLEdBQWtDLENBQTFFOztBQUdGLEFBQU8sU0FBU0MsWUFBVCxRQUF3QztNQUFoQkwsS0FBZ0IsU0FBaEJBLEtBQWdCO2lEQUNMQSxLQUFLLENBQUNDLFVBQU4sR0FBbUJELEtBQUssQ0FBQ00sT0FBekIsR0FBbUMsQ0FBM0U7O0FBR0YsQUFBTyxTQUFTQyxXQUFULFFBQXVDO01BQWhCUCxLQUFnQixTQUFoQkEsS0FBZ0I7aURBQ0pBLEtBQUssQ0FBQ0MsVUFBTixHQUFtQkQsS0FBSyxDQUFDUSxNQUF6QixHQUFrQyxDQUExRTs7QUFHRixBQUFPLFNBQVNDLGdCQUFULFFBQTRDO01BQWhCVCxLQUFnQixTQUFoQkEsS0FBZ0I7aURBQ1RBLEtBQUssQ0FBQ0MsVUFBTixHQUFtQkQsS0FBSyxDQUFDUSxNQUF6QixHQUFrQyxDQUExRTs7O0FDZkYsU0FBU0UsYUFBVCxPQUE4QztNQUFyQkMsS0FBcUIsUUFBckJBLEtBQXFC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
