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
  }, props), React__default.createElement("g", {
    opacity: "0.6"
  }, React__default.createElement("g", null, React__default.createElement("path", {
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
    transform: "translate(479.999 716)",
    fill: "currentColor"
  })));
}

function Close(props) {
  return React__default.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "26.998",
    height: "26.998",
    viewBox: "0 0 26.998 26.998",
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
exports.IconApproved = Approved;
exports.IconChevronLeftRound = ChevronLeftRound;
exports.IconChevronRightRound = ChevronRightRound;
exports.IconFileRound = FileRound;
exports.IconPencil = Pencil;
exports.IconUser = User;
exports.IconClose = Close;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlzaXRzLmNqcy5qcyIsInNvdXJjZXMiOlsiLi4vc3JjL2NvbXBvbmVudHMvR3JpZC9CcmVhay50c3giLCIuLi9zcmMvdXRpbHMvbWVkaWEudHMiLCIuLi9zcmMvY29tcG9uZW50cy9HcmlkL0NvbnRhaW5lci50cyIsIi4uL3NyYy9jb21wb25lbnRzL0dyaWQvQ29sLnRzIiwiLi4vc3JjL2NvbXBvbmVudHMvR3JpZC9Sb3cudHMiLCIuLi9zcmMvY29tcG9uZW50cy9Db250ZW50L1ByZS50cyIsIi4uL3NyYy9jb21wb25lbnRzL0NvbnRlbnQvQ29kZS50cyIsIi4uL3NyYy9jb21wb25lbnRzL0NvbnRlbnQvSDEudHMiLCIuLi9zcmMvY29tcG9uZW50cy9Db250ZW50L2luZGV4LnRzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3BvbGlzaGVkL2xpYi9pbnRlcm5hbEhlbHBlcnMvX2N1cnJ5LmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3BvbGlzaGVkL2xpYi9pbnRlcm5hbEhlbHBlcnMvX2d1YXJkLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3BvbGlzaGVkL2xpYi9pbnRlcm5hbEhlbHBlcnMvX2hzbFRvUmdiLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3BvbGlzaGVkL2xpYi9pbnRlcm5hbEhlbHBlcnMvX25hbWVUb0hleC5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb2xpc2hlZC9saWIvaW50ZXJuYWxIZWxwZXJzL19lcnJvcnMuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9saXNoZWQvbGliL2NvbG9yL3BhcnNlVG9SZ2IuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9saXNoZWQvbGliL2ludGVybmFsSGVscGVycy9fcmdiVG9Ic2wuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9saXNoZWQvbGliL2NvbG9yL3BhcnNlVG9Ic2wuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9saXNoZWQvbGliL2ludGVybmFsSGVscGVycy9fcmVkdWNlSGV4VmFsdWUuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9saXNoZWQvbGliL2ludGVybmFsSGVscGVycy9fbnVtYmVyVG9IZXguanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9saXNoZWQvbGliL2ludGVybmFsSGVscGVycy9faHNsVG9IZXguanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9saXNoZWQvbGliL2NvbG9yL2hzbC5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb2xpc2hlZC9saWIvY29sb3IvaHNsYS5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb2xpc2hlZC9saWIvY29sb3IvcmdiLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3BvbGlzaGVkL2xpYi9jb2xvci9yZ2JhLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3BvbGlzaGVkL2xpYi9jb2xvci90b0NvbG9yU3RyaW5nLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3BvbGlzaGVkL2xpYi9jb2xvci9kYXJrZW4uanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9saXNoZWQvbGliL2NvbG9yL2dldEx1bWluYW5jZS5qcyIsIi4uL3NyYy91dGlscy9maW5kQ29sb3JJbnZlcnQudHMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9saXNoZWQvbGliL2NvbG9yL3RyYW5zcGFyZW50aXplLmpzIiwiLi4vc3JjL3V0aWxzL2JveFNoYWRvdy50cyIsIi4uL3NyYy91dGlscy9zZXRTaXplLnRzIiwiLi4vc3JjL3V0aWxzL2Rpc2FibGVkQ29sb3IudHMiLCIuLi9zcmMvY29tcG9uZW50cy9CdXR0b24vaW5kZXgudHMiLCIuLi9zcmMvY29tcG9uZW50cy9CdXR0b24vQnV0dG9uR3JvdXAudHMiLCIuLi9zcmMvY29tcG9uZW50cy9UYWJsZS9pbmRleC50cyIsIi4uL3NyYy9jb21wb25lbnRzL0JveC9pbmRleC50c3giLCIuLi9zcmMvY29tcG9uZW50cy9Qcm9ncmVzcy9pbmRleC50c3giLCIuLi9zcmMvY29tcG9uZW50cy9Gb3JtL0ZpZWxkLnRzeCIsIi4uL3NyYy91dGlscy9oYW1idWdlci50cyIsIi4uL3NyYy91dGlscy9hcnJvdy50cyIsIi4uL3NyYy9jb21wb25lbnRzL0Zvcm0vSGVscE1lc3NhZ2UudHN4IiwiLi4vc3JjL2NvbXBvbmVudHMvRm9ybS9UZXh0SW5wdXQudHN4IiwiLi4vc3JjL2NvbXBvbmVudHMvRm9ybS9UZXh0YXJlYS50c3giLCIuLi9zcmMvY29tcG9uZW50cy9Gb3JtL0NoZWNrYm94LnRzeCIsIi4uL3NyYy9jb21wb25lbnRzL0Zvcm0vU2VsZWN0LnRzeCIsIi4uL3NyYy9jb21wb25lbnRzL0Zvcm0vUmFkaW8udHN4IiwiLi4vc3JjL2NvbXBvbmVudHMvSWNvbnMvQXBwcm92ZWQudHN4IiwiLi4vc3JjL2NvbXBvbmVudHMvSWNvbnMvQ2hldnJvbkxlZnRSb3VuZC50c3giLCIuLi9zcmMvY29tcG9uZW50cy9JY29ucy9DaGV2cm9uUmlnaHRSb3VuZC50c3giLCIuLi9zcmMvY29tcG9uZW50cy9JY29ucy9GaWxlUm91bmQudHN4IiwiLi4vc3JjL2NvbXBvbmVudHMvSWNvbnMvUGVuY2lsLnRzeCIsIi4uL3NyYy9jb21wb25lbnRzL0ljb25zL1VzZXIudHN4IiwiLi4vc3JjL2NvbXBvbmVudHMvSWNvbnMvQ2xvc2UudHN4IiwiLi4vc3JjL3V0aWxzL3NldEFsaWduLnRzIiwiLi4vc3JjL2NvbXBvbmVudHMvQXBwQmFyL2luZGV4LnRzeCIsIi4uL3NyYy9jb21wb25lbnRzL1RhZy9pbmRleC50c3giLCIuLi9zcmMvY29tcG9uZW50cy9IZXJvL2luZGV4LnRzeCIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZWFjdC1pcy9janMvcmVhY3QtaXMucHJvZHVjdGlvbi5taW4uanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVhY3QtaXMvY2pzL3JlYWN0LWlzLmRldmVsb3BtZW50LmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3JlYWN0LWlzL2luZGV4LmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL29iamVjdC1hc3NpZ24vaW5kZXguanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9saWIvUmVhY3RQcm9wVHlwZXNTZWNyZXQuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9jaGVja1Byb3BUeXBlcy5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2ZhY3RvcnlXaXRoVHlwZUNoZWNrZXJzLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvZmFjdG9yeVdpdGhUaHJvd2luZ1NoaW1zLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvaW5kZXguanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvZG9tLWhlbHBlcnMvY2xhc3MvaGFzQ2xhc3MuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvZG9tLWhlbHBlcnMvY2xhc3MvYWRkQ2xhc3MuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvZG9tLWhlbHBlcnMvY2xhc3MvcmVtb3ZlQ2xhc3MuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVhY3QtbGlmZWN5Y2xlcy1jb21wYXQvcmVhY3QtbGlmZWN5Y2xlcy1jb21wYXQuZXMuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVhY3QtdHJhbnNpdGlvbi1ncm91cC91dGlscy9Qcm9wVHlwZXMuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVhY3QtdHJhbnNpdGlvbi1ncm91cC9UcmFuc2l0aW9uLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3JlYWN0LXRyYW5zaXRpb24tZ3JvdXAvQ1NTVHJhbnNpdGlvbi5qcyIsIi4uL3NyYy9jb21wb25lbnRzL1Rvb2x0aXAvaW5kZXgudHN4IiwiLi4vc3JjL2NvbXBvbmVudHMvU2lkZU1lbnUvaW5kZXgudHN4IiwiLi4vc3JjL2NvbXBvbmVudHMvQ2FyZC9pbmRleC50c3giLCIuLi9zcmMvY29tcG9uZW50cy9Qb3BvdmVyL2luZGV4LnRzeCIsIi4uL3NyYy9jb21wb25lbnRzL01vZGFsL2luZGV4LnRzeCIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZWFjdC10cmFuc2l0aW9uLWdyb3VwL3V0aWxzL0NoaWxkTWFwcGluZy5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZWFjdC10cmFuc2l0aW9uLWdyb3VwL1RyYW5zaXRpb25Hcm91cC5qcyIsIi4uL3NyYy9jb21wb25lbnRzL1RvYXN0L2luZGV4LnRzeCIsIi4uL3NyYy9jb21wb25lbnRzL1RhYnMvaW5kZXgudHN4IiwiLi4vc3JjL2NvbXBvbmVudHMvTG9hZGluZy9CYXIudHN4IiwiLi4vc3JjL2NvbXBvbmVudHMvTG9hZGluZy9TcGlubmVyLnRzeCIsIi4uL3NyYy9jb21wb25lbnRzL2luZGV4LnRzIiwiLi4vc3JjL3RoZW1lL2RlZmF1bHQudHMiLCIuLi9zcmMvc3R5bGVzL25vcm1hbGl6ZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCcmVhaygpIHtcbiAgcmV0dXJuIDxkaXYgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJywgaGVpZ2h0OiAwIH19IC8+O1xufTtcbiIsImltcG9ydCB7IFRoZW1lVHlwZSB9IGZyb20gJy4uL3R5cGVzJztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgdGhlbWU6IFRoZW1lVHlwZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1lZGlhTW9iaWxlKHsgdGhlbWUgfTogUHJvcHMpIHtcbiAgcmV0dXJuIGBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAke3RoZW1lLnJlc3BvbnNpdmUgPyB0aGVtZS5tb2JpbGUgOiAwfXB4KWA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZWRpYVRhYmxldCh7IHRoZW1lIH06IFByb3BzKSB7XG4gIHJldHVybiBgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJHt0aGVtZS5yZXNwb25zaXZlID8gdGhlbWUudGFibGV0IDogMH1weClgO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWVkaWFEZXNrdG9wKHsgdGhlbWUgfTogUHJvcHMpIHtcbiAgcmV0dXJuIGBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAke3RoZW1lLnJlc3BvbnNpdmUgPyB0aGVtZS5kZXNrdG9wIDogMH1weClgO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWVkaWFGdWxsSEQoeyB0aGVtZSB9OiBQcm9wcykge1xuICByZXR1cm4gYEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICR7dGhlbWUucmVzcG9uc2l2ZSA/IHRoZW1lLmZ1bGxoZCA6IDB9cHgpYDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1lZGlhVW50aWxGdWxsSEQoeyB0aGVtZSB9OiBQcm9wcykge1xuICByZXR1cm4gYEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICR7dGhlbWUucmVzcG9uc2l2ZSA/IHRoZW1lLmZ1bGxoZCA6IDB9cHgpYDtcbn1cbiIsImltcG9ydCBzdHlsZWQsIHsgY3NzIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgbWVkaWFGdWxsSEQsIG1lZGlhVGFibGV0LCBtZWRpYURlc2t0b3AsIG1lZGlhTW9iaWxlIH0gZnJvbSAnLi4vLi4vdXRpbHMvbWVkaWEnO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICAvKiogICovXG4gIGZsdWlkPzogYm9vbGVhbjtcbn1cblxuZnVuY3Rpb24gc2V0UmVzcG9uc2l2ZSh7IGZsdWlkIH06IFByb3BzKTogYW55IHtcbiAgaWYgKGZsdWlkKSB7XG4gICAgcmV0dXJuIGNzc2BcbiAgICAgICR7bWVkaWFNb2JpbGV9IHtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMC41cmVtO1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDAuNXJlbTtcbiAgICAgIH1cbiAgICAgICR7bWVkaWFEZXNrdG9wfSB7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDAuNzVyZW07XG4gICAgICAgIHBhZGRpbmctbGVmdDogMC43NXJlbTtcbiAgICAgIH1cbiAgICAgICR7bWVkaWFGdWxsSER9IHtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMC43NXJlbTtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwLjc1cmVtO1xuICAgICAgfVxuICAgIGA7XG4gIH1cblxuICByZXR1cm4gY3NzYFxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAke21lZGlhTW9iaWxlfSB7XG4gICAgICBtYXgtd2lkdGg6ICR7KHsgdGhlbWUgfTogYW55KSA9PiB0aGVtZS5tb2JpbGUgLSAoMiAqIHRoZW1lLnNtYWxsR3V0dGVyKX1weDtcbiAgICB9XG4gICAgJHttZWRpYVRhYmxldH0ge1xuICAgICAgbWF4LXdpZHRoOiAkeyh7IHRoZW1lIH06IGFueSkgPT4gdGhlbWUudGFibGV0IC0gKDIgKiB0aGVtZS5zbWFsbEd1dHRlcil9cHg7XG4gICAgfVxuICAgICR7bWVkaWFEZXNrdG9wfSB7XG4gICAgICBtYXgtd2lkdGg6ICR7KHsgdGhlbWUgfTogYW55KSA9PiB0aGVtZS5kZXNrdG9wIC0gKDIgKiB0aGVtZS5ndXR0ZXIpfXB4O1xuICAgIH1cbiAgICAke21lZGlhRnVsbEhEfSB7XG4gICAgICBtYXgtd2lkdGg6ICR7KHsgdGhlbWUgfTogYW55KSA9PiB0aGVtZS5mdWxsaGQgLSAoMiAqIHRoZW1lLmd1dHRlcil9cHg7XG4gICAgfVxuICBgO1xufVxuXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2PFByb3BzPmBcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcblxuICAke3NldFJlc3BvbnNpdmV9XG5gO1xuQ29udGFpbmVyLmRpc3BsYXlOYW1lID0gJ0NvbnRhaW5lcic7XG5Db250YWluZXIuZGVmYXVsdFByb3BzID0ge1xuICBmbHVpZDogZmFsc2UsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb250YWluZXI7XG4iLCJpbXBvcnQgc3R5bGVkLCB7IGNzcyB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7IG1lZGlhTW9iaWxlLCBtZWRpYVRhYmxldCB9IGZyb20gJy4uLy4uL3V0aWxzL21lZGlhJztcbmltcG9ydCB7IENvbFNpemVUeXBlIH0gZnJvbSAnLi4vLi4vdHlwZXMnO1xuXG5pbnRlcmZhY2UgQ29sUHJvcHMge1xuICAvKiog5Zu65a6a44Gu5bmF44KS5oyH5a6a44GZ44KL5aC05ZCIICovXG4gIG5hcnJvdz86IGJvb2xlYW47XG4gIC8qKiAxLTEy44Gu44K144Kk44K6ICovXG4gIHNpemU/OiBDb2xTaXplVHlwZTtcbiAgLyoqIDEtMTLjga7lt6bjga5vZmZzZXQgKi9cbiAgb2Zmc2V0PzogQ29sU2l6ZVR5cGU7XG4gIC8qKiAxLTEy5Z+65rqW44Gu44K144Kk44K644KS55S76Z2i44K144Kk44K644Gu44KI44Gj44Gm5Y+v5aSJ44Gr44GZ44KLICovXG4gIGF1dG8/OiBib29sZWFuO1xufVxuXG5mdW5jdGlvbiBwYXJjZW50YWdlKHZhbHVlPzogQ29sU2l6ZVR5cGUpIHtcbiAgaWYgKCF2YWx1ZSkgcmV0dXJuIDA7XG4gIGlmICh2YWx1ZSA+PSAxMikgcmV0dXJuIDEwMDtcbiAgcmV0dXJuIE1hdGguY2VpbCgodmFsdWUgLyAxMikgKiAxMDAgKiAxMDAwMDApIC8gMTAwMDAwO1xufVxuXG5mdW5jdGlvbiByZW5kZXJTaXplKHsgc2l6ZSwgbmFycm93LCBhdXRvLCBvZmZzZXQgfTogQ29sUHJvcHMpIHtcbiAgaWYgKG5hcnJvdykgcmV0dXJuIG51bGw7XG4gIGlmICghc2l6ZSB8fCBzaXplIDwgMSB8fCBzaXplID4gMTIpIHtcbiAgICByZXR1cm4gY3NzYFxuICAgICAgd2lkdGg6IGF1dG87XG4gICAgICBtYXgtd2lkdGg6IG5vbmU7XG4gICAgYDtcbiAgfVxuXG4gIGNvbnN0IHZhbHVlID0gcGFyY2VudGFnZShzaXplKTtcbiAgY29uc3Qgb2ZmVmFsID0gb2Zmc2V0ID8gcGFyY2VudGFnZShvZmZzZXQpIDogMDtcbiAgY29uc3QgYXV0b1NpemUgPSB2YWx1ZSA+IDMzID8gMTAwIDogdmFsdWUgKiAzO1xuICByZXR1cm4gY3NzYFxuICAgIHdpZHRoOiAke3ZhbHVlfSU7XG4gICAgbWF4LXdpZHRoOiAke3ZhbHVlfSU7XG4gICAgJHtvZmZzZXQgPyBgbWFyZ2luLWxlZnQ6ICR7b2ZmVmFsfSU7YCA6IHt9fVxuXG4gICAgJHttZWRpYU1vYmlsZX0ge1xuICAgICAgd2lkdGg6ICR7YXV0b1NpemV9JTtcbiAgICAgIG1heC13aWR0aDogJHthdXRvU2l6ZX0lO1xuICAgICAgJHtvZmZzZXQgPyBgbWFyZ2luLWxlZnQ6IDA7YCA6IHt9fVxuICAgIH1cbiAgYDtcbn1cblxuY29uc3QgQ29sID0gc3R5bGVkLmRpdjxDb2xQcm9wcz5gXG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtaW4taGVpZ2h0OiAxcHg7XG5cbiAgJHsoeyBuYXJyb3cgfSkgPT4gbmFycm93ID8gJ2ZsZXg6IG5vbmU7JyA6IHt9fVxuICAkeyh7IG9mZnNldCB9KSA9PiBvZmZzZXQgPyBgbWFyZ2luLWxlZnQ6ICR7cGFyY2VudGFnZShvZmZzZXQpfSU7YCA6IHt9fVxuXG4gICR7cmVuZGVyU2l6ZX1cblxuICBwYWRkaW5nOiAwLjc1cmVtO1xuXG4gICR7bWVkaWFUYWJsZXR9IHtcbiAgICBwYWRkaW5nOiAwLjVyZW07XG4gIH1cbmA7XG5cbkNvbC5kaXNwbGF5TmFtZSA9ICdDb2wnO1xuXG5leHBvcnQgZGVmYXVsdCBDb2w7XG4iLCJpbXBvcnQgc3R5bGVkLCB7IGNzcyB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBDb2wgZnJvbSAnLi9Db2wnO1xuaW1wb3J0IHsgbWVkaWFGdWxsSEQsIG1lZGlhVGFibGV0IH0gZnJvbSAnLi4vLi4vdXRpbHMvbWVkaWEnO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICAvKiog5Zu65a6a5bmFICovXG4gIHdpZHRoPzogc3RyaW5nO1xuICAvKiog5ZCR44GP5pWw44Gu6KGM44Gn5a++5b+c44Gn44GN44KL44KI44GG44Gr44GZ44KLICovXG4gIG11bHRpbGluZT86IGJvb2xlYW47XG4gIC8qKiDnuKbjga7kuK3lpK7mj4PjgYjjgavjgZnjgosgKi9cbiAgdmNlbnRlcj86IGJvb2xlYW47XG4gIC8qKiDmqKrluYXjga7kuK3lpK7mj4PjgYjjgavjgZnjgosgKi9cbiAgY2VudGVyPzogYm9vbGVhbjtcbiAgLyoqIENvbOOBrumWk+malOOCkuOBquOBj+OBmSAqL1xuICBub0d1dHRlcj86IGJvb2xlYW47XG59XG5cbmZ1bmN0aW9uIHJlbmRlckd1dHRlcih7IG5vR3V0dGVyIH06IFByb3BzKSB7XG4gIGlmIChub0d1dHRlcikge1xuICAgIHJldHVybiBjc3NgXG4gICAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgICBtYXJnaW4tbGVmdDogMDtcblxuICAgICAgPiAke0NvbH0ge1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwO1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgICB9XG4gICAgYDtcbiAgfVxuICByZXR1cm4gY3NzYFxuICAgICR7bWVkaWFUYWJsZXR9IHtcbiAgICAgIG1hcmdpbi1sZWZ0OiAtMC41cmVtO1xuICAgICAgbWFyZ2luLXJpZ2h0OiAtMC41cmVtO1xuICAgICAgbWFyZ2luLXRvcDogLTAuNXJlbTtcblxuICAgICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogLTAuNXJlbTtcbiAgICAgIH1cblxuICAgICAgJjpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xuICAgICAgfVxuICAgIH1cblxuICAgICR7bWVkaWFGdWxsSER9IHtcbiAgICAgIG1hcmdpbi1sZWZ0OiAtMC43NXJlbTtcbiAgICAgIG1hcmdpbi1yaWdodDogLTAuNzVyZW07XG4gICAgICBtYXJnaW4tdG9wOiAtMC43NXJlbTtcblxuICAgICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogLTAuNzVyZW07XG4gICAgICB9XG5cbiAgICAgICY6bm90KDpsYXN0LWNoaWxkKSB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDAuNzVyZW07XG4gICAgICB9XG4gICAgfVxuICBgO1xufVxuXG5jb25zdCBSb3cgPSBzdHlsZWQuZGl2PFByb3BzPmBcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIGZsZXgtd3JhcDogd3JhcDtcblxuICAkeyh7IHZjZW50ZXIgfSkgPT4gdmNlbnRlciA/ICdhbGlnbi1pdGVtczogY2VudGVyOycgOiAnJ31cbiAgJHsoeyBjZW50ZXIgfSkgPT4gY2VudGVyID8gJ2p1c3RpZnktY29udGVudDogY2VudGVyOycgOiAnJ31cblxuICAke3JlbmRlckd1dHRlcn1cbmA7XG5cblJvdy5kaXNwbGF5TmFtZSA9ICdSb3cnO1xuXG5leHBvcnQgZGVmYXVsdCBSb3c7XG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuY29uc3QgUHJlID0gc3R5bGVkLnByZWBcbiAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xuICBvdmVyZmxvdy14OiBhdXRvO1xuICBwYWRkaW5nOiAxLjI1ZW0gMS41ZW07XG4gIHdoaXRlLXNwYWNlOiBwcmU7XG4gIHdvcmQtd3JhcDogbm9ybWFsO1xuXG4gICY6bm90KDpsYXN0LWNoaWxkKSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMWVtO1xuICB9XG5gO1xuUHJlLmRpc3BsYXlOYW1lID0gJ1ByZSc7XG5cbmV4cG9ydCBkZWZhdWx0IFByZTtcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5jb25zdCBDb2RlID0gc3R5bGVkLmNvZGVgXG4gIGJhY2tncm91bmQtY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuYmFja2dyb3VuZH07XG4gIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmRhbmdlcn07XG4gIGZvbnQtc2l6ZTogLjg3NWVtO1xuICBmb250LXdlaWdodDogNDAwO1xuICBwYWRkaW5nOiAuMjVlbSAuNWVtIC4yNWVtO1xuYDtcblxuQ29kZS5kaXNwbGF5TmFtZSA9ICdDb2RlJztcblxuZXhwb3J0IGRlZmF1bHQgQ29kZTtcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5jb25zdCBIMSA9IHN0eWxlZC5oMWBcbiAgZm9udC1zaXplOiAyZW07XG4gIG1hcmdpbi1ib3R0b206IDAuNWVtO1xuICBwYWRkaW5nLWxlZnQ6IDFyZW07XG5cbiAgYm9yZGVyLWxlZnQ6IDFyZW0gc29saWQ7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZDtcbiAgYm9yZGVyLWNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmJvcmRlcn07XG5gO1xuSDEuZGlzcGxheU5hbWUgPSAnSDEnO1xuXG5leHBvcnQgZGVmYXVsdCBIMTtcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5jb25zdCBDb250ZW50ID0gc3R5bGVkLmRpdmBcbiAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUudGV4dH07XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG5cbiAgbGkgKyBsaSB7XG4gICAgbWFyZ2luLXRvcDogMC4yNWVtO1xuICB9XG5cbiAgcCxcbiAgZGwsXG4gIG9sLFxuICB1bCxcbiAgYmxvY2txdW90ZSxcbiAgcHJlLFxuICB0YWJsZSB7XG4gICAgJjpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDFlbTtcbiAgICB9XG4gIH1cblxuICBoMSxcbiAgaDIsXG4gIGgzLFxuICBoNCxcbiAgaDUsXG4gIGg2IHtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjEyNTtcbiAgfVxuXG4gIGgxIHtcbiAgICBmb250LXNpemU6IDJyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMC41ZW07XG4gIH1cblxuICBoMiB7XG4gICAgZm9udC1zaXplOiAxLjc1ZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMC41NzE0ZW07XG5cbiAgICAmOm5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgICAgIG1hcmdpbi10b3A6IDEuMTQyOGVtO1xuICAgIH1cbiAgfVxuXG4gIGgzIHtcbiAgICBmb250LXNpemU6IDEuNWVtO1xuICAgIG1hcmdpbi1ib3R0b206IDAuNjY2NmVtO1xuXG4gICAgJjpub3QoOmZpcnN0LWNoaWxkKSB7XG4gICAgICBtYXJnaW4tdG9wOiAxLjMzMzNlbTtcbiAgICB9XG4gIH1cblxuICBoNCB7XG4gICAgZm9udC1zaXplOiAxLjI1ZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMC44ZW07XG4gIH1cblxuICBoNSB7XG4gICAgZm9udC1zaXplOiAxLjEyNWVtO1xuICAgIG1hcmdpbi1ib3R0b206IDAuODg4OGVtO1xuICB9XG5cbiAgaDYge1xuICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgIG1hcmdpbi1ib3R0b206IDFlbTtcbiAgfVxuXG4gIG9sIHtcbiAgICBsaXN0LXN0eWxlOiBkZWNpbWFsIG91dHNpZGU7XG4gICAgbWFyZ2luLWxlZnQ6IDJlbTtcbiAgICBtYXJnaW4tdG9wOiAxZW07XG4gIH1cblxuICB1bCB7XG4gICAgbGlzdC1zdHlsZTogZGlzYyBvdXRzaWRlO1xuICAgIG1hcmdpbi1sZWZ0OiAyZW07XG4gICAgbWFyZ2luLXRvcDogMWVtO1xuICAgIHVsIHtcbiAgICAgIGxpc3Qtc3R5bGUtdHlwZTogY2lyY2xlO1xuICAgICAgbWFyZ2luLXRvcDogMC41ZW07XG4gICAgICB1bCB7XG4gICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogc3F1YXJlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGRkIHtcbiAgICBtYXJnaW4tbGVmdDogMmVtO1xuICB9XG5cbiAgdGFibGUge1xuICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgdGQsIHRoIHtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuYm9yZGVyfTtcbiAgICAgIGJvcmRlci13aWR0aDogMCAwIDFweDtcbiAgICAgIHBhZGRpbmc6IDAuNWVtIDAuNzVlbTtcbiAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgfVxuXG4gICAgdGgge1xuICAgICAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUudGV4dH07XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIH1cblxuICAgIHRoZWFkIHtcbiAgICAgIHRkLCB0aCB7XG4gICAgICAgIGJvcmRlci13aWR0aDogMCAwIDJweDtcbiAgICAgICAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUudGV4dH07XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGZvb3Qge1xuICAgICAgdGQsIHRoIHtcbiAgICAgICAgYm9yZGVyLXdpZHRoOiAycHggMCAwO1xuICAgICAgICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS50ZXh0fTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0Ym9keSA+IHRyOmxhc3QtY2hpbGR7XG4gICAgICB0ZCwgdGgge1xuICAgICAgICBib3JkZXItYm90dG9tLXdpZHRoOiAwO1xuICAgICAgfVxuICAgIH1cbiAgfVxuYDtcbkNvbnRlbnQuZGlzcGxheU5hbWUgPSAnQ29udGVudCc7XG5cbmV4cG9ydCB7IGRlZmF1bHQgYXMgUHJlIH0gZnJvbSAnLi9QcmUnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBDb2RlIH0gZnJvbSAnLi9Db2RlJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgSDEgfSBmcm9tICcuL0gxJztcblxuZXhwb3J0IGRlZmF1bHQgQ29udGVudDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gY3Vycnk7XG5cbi8vIFR5cGUgZGVmaW5pdGlvbnMgdGFrZW4gZnJvbSBodHRwczovL2dpdGh1Yi5jb20vZ2NhbnRpL2Zsb3ctc3RhdGljLWxhbmQvYmxvYi9tYXN0ZXIvc3JjL0Z1bi5qc1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZWRlY2xhcmVcbmZ1bmN0aW9uIGN1cnJpZWQoZiwgbGVuZ3RoLCBhY2MpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIGZuKCkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItcmVzdC1wYXJhbXNcbiAgICB2YXIgY29tYmluZWQgPSBhY2MuY29uY2F0KEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cykpO1xuICAgIHJldHVybiBjb21iaW5lZC5sZW5ndGggPj0gbGVuZ3RoID8gZi5hcHBseSh0aGlzLCBjb21iaW5lZCkgOiBjdXJyaWVkKGYsIGxlbmd0aCwgY29tYmluZWQpO1xuICB9O1xufSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVkZWNsYXJlXG5cblxuZnVuY3Rpb24gY3VycnkoZikge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXJlZGVjbGFyZVxuICByZXR1cm4gY3VycmllZChmLCBmLmxlbmd0aCwgW10pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxuZnVuY3Rpb24gZ3VhcmQobG93ZXJCb3VuZGFyeSwgdXBwZXJCb3VuZGFyeSwgdmFsdWUpIHtcbiAgcmV0dXJuIE1hdGgubWF4KGxvd2VyQm91bmRhcnksIE1hdGgubWluKHVwcGVyQm91bmRhcnksIHZhbHVlKSk7XG59XG5cbnZhciBfZGVmYXVsdCA9IGd1YXJkO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxuZnVuY3Rpb24gY29sb3JUb0ludChjb2xvcikge1xuICByZXR1cm4gTWF0aC5yb3VuZChjb2xvciAqIDI1NSk7XG59XG5cbmZ1bmN0aW9uIGNvbnZlcnRUb0ludChyZWQsIGdyZWVuLCBibHVlKSB7XG4gIHJldHVybiBjb2xvclRvSW50KHJlZCkgKyBcIixcIiArIGNvbG9yVG9JbnQoZ3JlZW4pICsgXCIsXCIgKyBjb2xvclRvSW50KGJsdWUpO1xufVxuXG5mdW5jdGlvbiBoc2xUb1JnYihodWUsIHNhdHVyYXRpb24sIGxpZ2h0bmVzcywgY29udmVydCkge1xuICBpZiAoY29udmVydCA9PT0gdm9pZCAwKSB7XG4gICAgY29udmVydCA9IGNvbnZlcnRUb0ludDtcbiAgfVxuXG4gIGlmIChzYXR1cmF0aW9uID09PSAwKSB7XG4gICAgLy8gYWNocm9tYXRpY1xuICAgIHJldHVybiBjb252ZXJ0KGxpZ2h0bmVzcywgbGlnaHRuZXNzLCBsaWdodG5lc3MpO1xuICB9IC8vIGZvcm11bGFyIGZyb20gaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSFNMX2FuZF9IU1ZcblxuXG4gIHZhciBodWVQcmltZSA9IGh1ZSAlIDM2MCAvIDYwO1xuICB2YXIgY2hyb21hID0gKDEgLSBNYXRoLmFicygyICogbGlnaHRuZXNzIC0gMSkpICogc2F0dXJhdGlvbjtcbiAgdmFyIHNlY29uZENvbXBvbmVudCA9IGNocm9tYSAqICgxIC0gTWF0aC5hYnMoaHVlUHJpbWUgJSAyIC0gMSkpO1xuICB2YXIgcmVkID0gMDtcbiAgdmFyIGdyZWVuID0gMDtcbiAgdmFyIGJsdWUgPSAwO1xuXG4gIGlmIChodWVQcmltZSA+PSAwICYmIGh1ZVByaW1lIDwgMSkge1xuICAgIHJlZCA9IGNocm9tYTtcbiAgICBncmVlbiA9IHNlY29uZENvbXBvbmVudDtcbiAgfSBlbHNlIGlmIChodWVQcmltZSA+PSAxICYmIGh1ZVByaW1lIDwgMikge1xuICAgIHJlZCA9IHNlY29uZENvbXBvbmVudDtcbiAgICBncmVlbiA9IGNocm9tYTtcbiAgfSBlbHNlIGlmIChodWVQcmltZSA+PSAyICYmIGh1ZVByaW1lIDwgMykge1xuICAgIGdyZWVuID0gY2hyb21hO1xuICAgIGJsdWUgPSBzZWNvbmRDb21wb25lbnQ7XG4gIH0gZWxzZSBpZiAoaHVlUHJpbWUgPj0gMyAmJiBodWVQcmltZSA8IDQpIHtcbiAgICBncmVlbiA9IHNlY29uZENvbXBvbmVudDtcbiAgICBibHVlID0gY2hyb21hO1xuICB9IGVsc2UgaWYgKGh1ZVByaW1lID49IDQgJiYgaHVlUHJpbWUgPCA1KSB7XG4gICAgcmVkID0gc2Vjb25kQ29tcG9uZW50O1xuICAgIGJsdWUgPSBjaHJvbWE7XG4gIH0gZWxzZSBpZiAoaHVlUHJpbWUgPj0gNSAmJiBodWVQcmltZSA8IDYpIHtcbiAgICByZWQgPSBjaHJvbWE7XG4gICAgYmx1ZSA9IHNlY29uZENvbXBvbmVudDtcbiAgfVxuXG4gIHZhciBsaWdodG5lc3NNb2RpZmljYXRpb24gPSBsaWdodG5lc3MgLSBjaHJvbWEgLyAyO1xuICB2YXIgZmluYWxSZWQgPSByZWQgKyBsaWdodG5lc3NNb2RpZmljYXRpb247XG4gIHZhciBmaW5hbEdyZWVuID0gZ3JlZW4gKyBsaWdodG5lc3NNb2RpZmljYXRpb247XG4gIHZhciBmaW5hbEJsdWUgPSBibHVlICsgbGlnaHRuZXNzTW9kaWZpY2F0aW9uO1xuICByZXR1cm4gY29udmVydChmaW5hbFJlZCwgZmluYWxHcmVlbiwgZmluYWxCbHVlKTtcbn1cblxudmFyIF9kZWZhdWx0ID0gaHNsVG9SZ2I7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xudmFyIG5hbWVkQ29sb3JNYXAgPSB7XG4gIGFsaWNlYmx1ZTogJ2YwZjhmZicsXG4gIGFudGlxdWV3aGl0ZTogJ2ZhZWJkNycsXG4gIGFxdWE6ICcwMGZmZmYnLFxuICBhcXVhbWFyaW5lOiAnN2ZmZmQ0JyxcbiAgYXp1cmU6ICdmMGZmZmYnLFxuICBiZWlnZTogJ2Y1ZjVkYycsXG4gIGJpc3F1ZTogJ2ZmZTRjNCcsXG4gIGJsYWNrOiAnMDAwJyxcbiAgYmxhbmNoZWRhbG1vbmQ6ICdmZmViY2QnLFxuICBibHVlOiAnMDAwMGZmJyxcbiAgYmx1ZXZpb2xldDogJzhhMmJlMicsXG4gIGJyb3duOiAnYTUyYTJhJyxcbiAgYnVybHl3b29kOiAnZGViODg3JyxcbiAgY2FkZXRibHVlOiAnNWY5ZWEwJyxcbiAgY2hhcnRyZXVzZTogJzdmZmYwMCcsXG4gIGNob2NvbGF0ZTogJ2QyNjkxZScsXG4gIGNvcmFsOiAnZmY3ZjUwJyxcbiAgY29ybmZsb3dlcmJsdWU6ICc2NDk1ZWQnLFxuICBjb3Juc2lsazogJ2ZmZjhkYycsXG4gIGNyaW1zb246ICdkYzE0M2MnLFxuICBjeWFuOiAnMDBmZmZmJyxcbiAgZGFya2JsdWU6ICcwMDAwOGInLFxuICBkYXJrY3lhbjogJzAwOGI4YicsXG4gIGRhcmtnb2xkZW5yb2Q6ICdiODg2MGInLFxuICBkYXJrZ3JheTogJ2E5YTlhOScsXG4gIGRhcmtncmVlbjogJzAwNjQwMCcsXG4gIGRhcmtncmV5OiAnYTlhOWE5JyxcbiAgZGFya2toYWtpOiAnYmRiNzZiJyxcbiAgZGFya21hZ2VudGE6ICc4YjAwOGInLFxuICBkYXJrb2xpdmVncmVlbjogJzU1NmIyZicsXG4gIGRhcmtvcmFuZ2U6ICdmZjhjMDAnLFxuICBkYXJrb3JjaGlkOiAnOTkzMmNjJyxcbiAgZGFya3JlZDogJzhiMDAwMCcsXG4gIGRhcmtzYWxtb246ICdlOTk2N2EnLFxuICBkYXJrc2VhZ3JlZW46ICc4ZmJjOGYnLFxuICBkYXJrc2xhdGVibHVlOiAnNDgzZDhiJyxcbiAgZGFya3NsYXRlZ3JheTogJzJmNGY0ZicsXG4gIGRhcmtzbGF0ZWdyZXk6ICcyZjRmNGYnLFxuICBkYXJrdHVycXVvaXNlOiAnMDBjZWQxJyxcbiAgZGFya3Zpb2xldDogJzk0MDBkMycsXG4gIGRlZXBwaW5rOiAnZmYxNDkzJyxcbiAgZGVlcHNreWJsdWU6ICcwMGJmZmYnLFxuICBkaW1ncmF5OiAnNjk2OTY5JyxcbiAgZGltZ3JleTogJzY5Njk2OScsXG4gIGRvZGdlcmJsdWU6ICcxZTkwZmYnLFxuICBmaXJlYnJpY2s6ICdiMjIyMjInLFxuICBmbG9yYWx3aGl0ZTogJ2ZmZmFmMCcsXG4gIGZvcmVzdGdyZWVuOiAnMjI4YjIyJyxcbiAgZnVjaHNpYTogJ2ZmMDBmZicsXG4gIGdhaW5zYm9ybzogJ2RjZGNkYycsXG4gIGdob3N0d2hpdGU6ICdmOGY4ZmYnLFxuICBnb2xkOiAnZmZkNzAwJyxcbiAgZ29sZGVucm9kOiAnZGFhNTIwJyxcbiAgZ3JheTogJzgwODA4MCcsXG4gIGdyZWVuOiAnMDA4MDAwJyxcbiAgZ3JlZW55ZWxsb3c6ICdhZGZmMmYnLFxuICBncmV5OiAnODA4MDgwJyxcbiAgaG9uZXlkZXc6ICdmMGZmZjAnLFxuICBob3RwaW5rOiAnZmY2OWI0JyxcbiAgaW5kaWFucmVkOiAnY2Q1YzVjJyxcbiAgaW5kaWdvOiAnNGIwMDgyJyxcbiAgaXZvcnk6ICdmZmZmZjAnLFxuICBraGFraTogJ2YwZTY4YycsXG4gIGxhdmVuZGVyOiAnZTZlNmZhJyxcbiAgbGF2ZW5kZXJibHVzaDogJ2ZmZjBmNScsXG4gIGxhd25ncmVlbjogJzdjZmMwMCcsXG4gIGxlbW9uY2hpZmZvbjogJ2ZmZmFjZCcsXG4gIGxpZ2h0Ymx1ZTogJ2FkZDhlNicsXG4gIGxpZ2h0Y29yYWw6ICdmMDgwODAnLFxuICBsaWdodGN5YW46ICdlMGZmZmYnLFxuICBsaWdodGdvbGRlbnJvZHllbGxvdzogJ2ZhZmFkMicsXG4gIGxpZ2h0Z3JheTogJ2QzZDNkMycsXG4gIGxpZ2h0Z3JlZW46ICc5MGVlOTAnLFxuICBsaWdodGdyZXk6ICdkM2QzZDMnLFxuICBsaWdodHBpbms6ICdmZmI2YzEnLFxuICBsaWdodHNhbG1vbjogJ2ZmYTA3YScsXG4gIGxpZ2h0c2VhZ3JlZW46ICcyMGIyYWEnLFxuICBsaWdodHNreWJsdWU6ICc4N2NlZmEnLFxuICBsaWdodHNsYXRlZ3JheTogJzc4OScsXG4gIGxpZ2h0c2xhdGVncmV5OiAnNzg5JyxcbiAgbGlnaHRzdGVlbGJsdWU6ICdiMGM0ZGUnLFxuICBsaWdodHllbGxvdzogJ2ZmZmZlMCcsXG4gIGxpbWU6ICcwZjAnLFxuICBsaW1lZ3JlZW46ICczMmNkMzInLFxuICBsaW5lbjogJ2ZhZjBlNicsXG4gIG1hZ2VudGE6ICdmMGYnLFxuICBtYXJvb246ICc4MDAwMDAnLFxuICBtZWRpdW1hcXVhbWFyaW5lOiAnNjZjZGFhJyxcbiAgbWVkaXVtYmx1ZTogJzAwMDBjZCcsXG4gIG1lZGl1bW9yY2hpZDogJ2JhNTVkMycsXG4gIG1lZGl1bXB1cnBsZTogJzkzNzBkYicsXG4gIG1lZGl1bXNlYWdyZWVuOiAnM2NiMzcxJyxcbiAgbWVkaXVtc2xhdGVibHVlOiAnN2I2OGVlJyxcbiAgbWVkaXVtc3ByaW5nZ3JlZW46ICcwMGZhOWEnLFxuICBtZWRpdW10dXJxdW9pc2U6ICc0OGQxY2MnLFxuICBtZWRpdW12aW9sZXRyZWQ6ICdjNzE1ODUnLFxuICBtaWRuaWdodGJsdWU6ICcxOTE5NzAnLFxuICBtaW50Y3JlYW06ICdmNWZmZmEnLFxuICBtaXN0eXJvc2U6ICdmZmU0ZTEnLFxuICBtb2NjYXNpbjogJ2ZmZTRiNScsXG4gIG5hdmFqb3doaXRlOiAnZmZkZWFkJyxcbiAgbmF2eTogJzAwMDA4MCcsXG4gIG9sZGxhY2U6ICdmZGY1ZTYnLFxuICBvbGl2ZTogJzgwODAwMCcsXG4gIG9saXZlZHJhYjogJzZiOGUyMycsXG4gIG9yYW5nZTogJ2ZmYTUwMCcsXG4gIG9yYW5nZXJlZDogJ2ZmNDUwMCcsXG4gIG9yY2hpZDogJ2RhNzBkNicsXG4gIHBhbGVnb2xkZW5yb2Q6ICdlZWU4YWEnLFxuICBwYWxlZ3JlZW46ICc5OGZiOTgnLFxuICBwYWxldHVycXVvaXNlOiAnYWZlZWVlJyxcbiAgcGFsZXZpb2xldHJlZDogJ2RiNzA5MycsXG4gIHBhcGF5YXdoaXA6ICdmZmVmZDUnLFxuICBwZWFjaHB1ZmY6ICdmZmRhYjknLFxuICBwZXJ1OiAnY2Q4NTNmJyxcbiAgcGluazogJ2ZmYzBjYicsXG4gIHBsdW06ICdkZGEwZGQnLFxuICBwb3dkZXJibHVlOiAnYjBlMGU2JyxcbiAgcHVycGxlOiAnODAwMDgwJyxcbiAgcmViZWNjYXB1cnBsZTogJzYzOScsXG4gIHJlZDogJ2YwMCcsXG4gIHJvc3licm93bjogJ2JjOGY4ZicsXG4gIHJveWFsYmx1ZTogJzQxNjllMScsXG4gIHNhZGRsZWJyb3duOiAnOGI0NTEzJyxcbiAgc2FsbW9uOiAnZmE4MDcyJyxcbiAgc2FuZHlicm93bjogJ2Y0YTQ2MCcsXG4gIHNlYWdyZWVuOiAnMmU4YjU3JyxcbiAgc2Vhc2hlbGw6ICdmZmY1ZWUnLFxuICBzaWVubmE6ICdhMDUyMmQnLFxuICBzaWx2ZXI6ICdjMGMwYzAnLFxuICBza3libHVlOiAnODdjZWViJyxcbiAgc2xhdGVibHVlOiAnNmE1YWNkJyxcbiAgc2xhdGVncmF5OiAnNzA4MDkwJyxcbiAgc2xhdGVncmV5OiAnNzA4MDkwJyxcbiAgc25vdzogJ2ZmZmFmYScsXG4gIHNwcmluZ2dyZWVuOiAnMDBmZjdmJyxcbiAgc3RlZWxibHVlOiAnNDY4MmI0JyxcbiAgdGFuOiAnZDJiNDhjJyxcbiAgdGVhbDogJzAwODA4MCcsXG4gIHRoaXN0bGU6ICdkOGJmZDgnLFxuICB0b21hdG86ICdmZjYzNDcnLFxuICB0dXJxdW9pc2U6ICc0MGUwZDAnLFxuICB2aW9sZXQ6ICdlZTgyZWUnLFxuICB3aGVhdDogJ2Y1ZGViMycsXG4gIHdoaXRlOiAnZmZmJyxcbiAgd2hpdGVzbW9rZTogJ2Y1ZjVmNScsXG4gIHllbGxvdzogJ2ZmMCcsXG4gIHllbGxvd2dyZWVuOiAnOWFjZDMyJ1xuICAvKipcbiAgICogQ2hlY2tzIGlmIGEgc3RyaW5nIGlzIGEgQ1NTIG5hbWVkIGNvbG9yIGFuZCByZXR1cm5zIGl0cyBlcXVpdmFsZW50IGhleCB2YWx1ZSwgb3RoZXJ3aXNlIHJldHVybnMgdGhlIG9yaWdpbmFsIGNvbG9yLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cblxufTtcblxuZnVuY3Rpb24gbmFtZVRvSGV4KGNvbG9yKSB7XG4gIGlmICh0eXBlb2YgY29sb3IgIT09ICdzdHJpbmcnKSByZXR1cm4gY29sb3I7XG4gIHZhciBub3JtYWxpemVkQ29sb3JOYW1lID0gY29sb3IudG9Mb3dlckNhc2UoKTtcbiAgcmV0dXJuIG5hbWVkQ29sb3JNYXBbbm9ybWFsaXplZENvbG9yTmFtZV0gPyBcIiNcIiArIG5hbWVkQ29sb3JNYXBbbm9ybWFsaXplZENvbG9yTmFtZV0gOiBjb2xvcjtcbn1cblxudmFyIF9kZWZhdWx0ID0gbmFtZVRvSGV4O1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7IGlmIChzZWxmID09PSB2b2lkIDApIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0c0xvb3NlKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcy5wcm90b3R5cGUpOyBzdWJDbGFzcy5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBzdWJDbGFzczsgc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG5mdW5jdGlvbiBfd3JhcE5hdGl2ZVN1cGVyKENsYXNzKSB7IHZhciBfY2FjaGUgPSB0eXBlb2YgTWFwID09PSBcImZ1bmN0aW9uXCIgPyBuZXcgTWFwKCkgOiB1bmRlZmluZWQ7IF93cmFwTmF0aXZlU3VwZXIgPSBmdW5jdGlvbiBfd3JhcE5hdGl2ZVN1cGVyKENsYXNzKSB7IGlmIChDbGFzcyA9PT0gbnVsbCB8fCAhX2lzTmF0aXZlRnVuY3Rpb24oQ2xhc3MpKSByZXR1cm4gQ2xhc3M7IGlmICh0eXBlb2YgQ2xhc3MgIT09IFwiZnVuY3Rpb25cIikgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7IH0gaWYgKHR5cGVvZiBfY2FjaGUgIT09IFwidW5kZWZpbmVkXCIpIHsgaWYgKF9jYWNoZS5oYXMoQ2xhc3MpKSByZXR1cm4gX2NhY2hlLmdldChDbGFzcyk7IF9jYWNoZS5zZXQoQ2xhc3MsIFdyYXBwZXIpOyB9IGZ1bmN0aW9uIFdyYXBwZXIoKSB7IHJldHVybiBfY29uc3RydWN0KENsYXNzLCBhcmd1bWVudHMsIF9nZXRQcm90b3R5cGVPZih0aGlzKS5jb25zdHJ1Y3Rvcik7IH0gV3JhcHBlci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKENsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogV3JhcHBlciwgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihXcmFwcGVyLCBDbGFzcyk7IH07IHJldHVybiBfd3JhcE5hdGl2ZVN1cGVyKENsYXNzKTsgfVxuXG5mdW5jdGlvbiBpc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7IGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhUmVmbGVjdC5jb25zdHJ1Y3QpIHJldHVybiBmYWxzZTsgaWYgKFJlZmxlY3QuY29uc3RydWN0LnNoYW0pIHJldHVybiBmYWxzZTsgaWYgKHR5cGVvZiBQcm94eSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gdHJ1ZTsgdHJ5IHsgRGF0ZS5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChEYXRlLCBbXSwgZnVuY3Rpb24gKCkge30pKTsgcmV0dXJuIHRydWU7IH0gY2F0Y2ggKGUpIHsgcmV0dXJuIGZhbHNlOyB9IH1cblxuZnVuY3Rpb24gX2NvbnN0cnVjdChQYXJlbnQsIGFyZ3MsIENsYXNzKSB7IGlmIChpc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSkgeyBfY29uc3RydWN0ID0gUmVmbGVjdC5jb25zdHJ1Y3Q7IH0gZWxzZSB7IF9jb25zdHJ1Y3QgPSBmdW5jdGlvbiBfY29uc3RydWN0KFBhcmVudCwgYXJncywgQ2xhc3MpIHsgdmFyIGEgPSBbbnVsbF07IGEucHVzaC5hcHBseShhLCBhcmdzKTsgdmFyIENvbnN0cnVjdG9yID0gRnVuY3Rpb24uYmluZC5hcHBseShQYXJlbnQsIGEpOyB2YXIgaW5zdGFuY2UgPSBuZXcgQ29uc3RydWN0b3IoKTsgaWYgKENsYXNzKSBfc2V0UHJvdG90eXBlT2YoaW5zdGFuY2UsIENsYXNzLnByb3RvdHlwZSk7IHJldHVybiBpbnN0YW5jZTsgfTsgfSByZXR1cm4gX2NvbnN0cnVjdC5hcHBseShudWxsLCBhcmd1bWVudHMpOyB9XG5cbmZ1bmN0aW9uIF9pc05hdGl2ZUZ1bmN0aW9uKGZuKSB7IHJldHVybiBGdW5jdGlvbi50b1N0cmluZy5jYWxsKGZuKS5pbmRleE9mKFwiW25hdGl2ZSBjb2RlXVwiKSAhPT0gLTE7IH1cblxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IG8uX19wcm90b19fID0gcDsgcmV0dXJuIG87IH07IHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7IH1cblxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTsgfTsgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTsgfVxuXG4vLyBiYXNlZCBvbiBodHRwczovL2dpdGh1Yi5jb20vc3R5bGVkLWNvbXBvbmVudHMvc3R5bGVkLWNvbXBvbmVudHMvYmxvYi9mY2Y2ZjM4MDRjNTdhMTRkZDc5ODRkZmFiN2JjMDZlZTJlZGNhMDQ0L3NyYy91dGlscy9lcnJvci5qc1xuXG4vKipcbiAqIFBhcnNlIGVycm9ycy5tZCBhbmQgdHVybiBpdCBpbnRvIGEgc2ltcGxlIGhhc2ggb2YgY29kZTogbWVzc2FnZVxuICogQHByaXZhdGVcbiAqL1xudmFyIEVSUk9SUyA9IHtcbiAgXCIxXCI6IFwiUGFzc2VkIGludmFsaWQgYXJndW1lbnRzIHRvIGhzbCwgcGxlYXNlIHBhc3MgbXVsdGlwbGUgbnVtYmVycyBlLmcuIGhzbCgzNjAsIDAuNzUsIDAuNCkgb3IgYW4gb2JqZWN0IGUuZy4gcmdiKHsgaHVlOiAyNTUsIHNhdHVyYXRpb246IDAuNCwgbGlnaHRuZXNzOiAwLjc1IH0pLlxcblxcblwiLFxuICBcIjJcIjogXCJQYXNzZWQgaW52YWxpZCBhcmd1bWVudHMgdG8gaHNsYSwgcGxlYXNlIHBhc3MgbXVsdGlwbGUgbnVtYmVycyBlLmcuIGhzbGEoMzYwLCAwLjc1LCAwLjQsIDAuNykgb3IgYW4gb2JqZWN0IGUuZy4gcmdiKHsgaHVlOiAyNTUsIHNhdHVyYXRpb246IDAuNCwgbGlnaHRuZXNzOiAwLjc1LCBhbHBoYTogMC43IH0pLlxcblxcblwiLFxuICBcIjNcIjogXCJQYXNzZWQgYW4gaW5jb3JyZWN0IGFyZ3VtZW50IHRvIGEgY29sb3IgZnVuY3Rpb24sIHBsZWFzZSBwYXNzIGEgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIGEgY29sb3IuXFxuXFxuXCIsXG4gIFwiNFwiOiBcIkNvdWxkbid0IGdlbmVyYXRlIHZhbGlkIHJnYiBzdHJpbmcgZnJvbSAlcywgaXQgcmV0dXJuZWQgJXMuXFxuXFxuXCIsXG4gIFwiNVwiOiBcIkNvdWxkbid0IHBhcnNlIHRoZSBjb2xvciBzdHJpbmcuIFBsZWFzZSBwcm92aWRlIHRoZSBjb2xvciBhcyBhIHN0cmluZyBpbiBoZXgsIHJnYiwgcmdiYSwgaHNsIG9yIGhzbGEgbm90YXRpb24uXFxuXFxuXCIsXG4gIFwiNlwiOiBcIlBhc3NlZCBpbnZhbGlkIGFyZ3VtZW50cyB0byByZ2IsIHBsZWFzZSBwYXNzIG11bHRpcGxlIG51bWJlcnMgZS5nLiByZ2IoMjU1LCAyMDUsIDEwMCkgb3IgYW4gb2JqZWN0IGUuZy4gcmdiKHsgcmVkOiAyNTUsIGdyZWVuOiAyMDUsIGJsdWU6IDEwMCB9KS5cXG5cXG5cIixcbiAgXCI3XCI6IFwiUGFzc2VkIGludmFsaWQgYXJndW1lbnRzIHRvIHJnYmEsIHBsZWFzZSBwYXNzIG11bHRpcGxlIG51bWJlcnMgZS5nLiByZ2IoMjU1LCAyMDUsIDEwMCwgMC43NSkgb3IgYW4gb2JqZWN0IGUuZy4gcmdiKHsgcmVkOiAyNTUsIGdyZWVuOiAyMDUsIGJsdWU6IDEwMCwgYWxwaGE6IDAuNzUgfSkuXFxuXFxuXCIsXG4gIFwiOFwiOiBcIlBhc3NlZCBpbnZhbGlkIGFyZ3VtZW50IHRvIHRvQ29sb3JTdHJpbmcsIHBsZWFzZSBwYXNzIGEgUmdiQ29sb3IsIFJnYmFDb2xvciwgSHNsQ29sb3Igb3IgSHNsYUNvbG9yIG9iamVjdC5cXG5cXG5cIixcbiAgXCI5XCI6IFwiUGxlYXNlIHByb3ZpZGUgYSBudW1iZXIgb2Ygc3RlcHMgdG8gdGhlIG1vZHVsYXJTY2FsZSBoZWxwZXIuXFxuXFxuXCIsXG4gIFwiMTBcIjogXCJQbGVhc2UgcGFzcyBhIG51bWJlciBvciBvbmUgb2YgdGhlIHByZWRlZmluZWQgc2NhbGVzIHRvIHRoZSBtb2R1bGFyU2NhbGUgaGVscGVyIGFzIHRoZSByYXRpby5cXG5cXG5cIixcbiAgXCIxMVwiOiBcIkludmFsaWQgdmFsdWUgcGFzc2VkIGFzIGJhc2UgdG8gbW9kdWxhclNjYWxlLCBleHBlY3RlZCBudW1iZXIgb3IgZW0gc3RyaW5nIGJ1dCBnb3QgXFxcIiVzXFxcIlxcblxcblwiLFxuICBcIjEyXCI6IFwiRXhwZWN0ZWQgYSBzdHJpbmcgZW5kaW5nIGluIFxcXCJweFxcXCIgb3IgYSBudW1iZXIgcGFzc2VkIGFzIHRoZSBmaXJzdCBhcmd1bWVudCB0byAlcygpLCBnb3QgXFxcIiVzXFxcIiBpbnN0ZWFkLlxcblxcblwiLFxuICBcIjEzXCI6IFwiRXhwZWN0ZWQgYSBzdHJpbmcgZW5kaW5nIGluIFxcXCJweFxcXCIgb3IgYSBudW1iZXIgcGFzc2VkIGFzIHRoZSBzZWNvbmQgYXJndW1lbnQgdG8gJXMoKSwgZ290IFxcXCIlc1xcXCIgaW5zdGVhZC5cXG5cXG5cIixcbiAgXCIxNFwiOiBcIlBhc3NlZCBpbnZhbGlkIHBpeGVsIHZhbHVlIChcXFwiJXNcXFwiKSB0byAlcygpLCBwbGVhc2UgcGFzcyBhIHZhbHVlIGxpa2UgXFxcIjEycHhcXFwiIG9yIDEyLlxcblxcblwiLFxuICBcIjE1XCI6IFwiUGFzc2VkIGludmFsaWQgYmFzZSB2YWx1ZSAoXFxcIiVzXFxcIikgdG8gJXMoKSwgcGxlYXNlIHBhc3MgYSB2YWx1ZSBsaWtlIFxcXCIxMnB4XFxcIiBvciAxMi5cXG5cXG5cIixcbiAgXCIxNlwiOiBcIllvdSBtdXN0IHByb3ZpZGUgYSB0ZW1wbGF0ZSB0byB0aGlzIG1ldGhvZC5cXG5cXG5cIixcbiAgXCIxN1wiOiBcIllvdSBwYXNzZWQgYW4gdW5zdXBwb3J0ZWQgc2VsZWN0b3Igc3RhdGUgdG8gdGhpcyBtZXRob2QuXFxuXFxuXCIsXG4gIFwiMThcIjogXCJtaW5TY3JlZW4gYW5kIG1heFNjcmVlbiBtdXN0IGJlIHByb3ZpZGVkIGFzIHN0cmluZ2lmaWVkIG51bWJlcnMgd2l0aCB0aGUgc2FtZSB1bml0cy5cXG5cXG5cIixcbiAgXCIxOVwiOiBcImZyb21TaXplIGFuZCB0b1NpemUgbXVzdCBiZSBwcm92aWRlZCBhcyBzdHJpbmdpZmllZCBudW1iZXJzIHdpdGggdGhlIHNhbWUgdW5pdHMuXFxuXFxuXCIsXG4gIFwiMjBcIjogXCJleHBlY3RzIGVpdGhlciBhbiBhcnJheSBvZiBvYmplY3RzIG9yIGEgc2luZ2xlIG9iamVjdCB3aXRoIHRoZSBwcm9wZXJ0aWVzIHByb3AsIGZyb21TaXplLCBhbmQgdG9TaXplLlxcblxcblwiLFxuICBcIjIxXCI6IFwiZXhwZWN0cyB0aGUgb2JqZWN0cyBpbiB0aGUgZmlyc3QgYXJndW1lbnQgYXJyYXkgdG8gaGF2ZSB0aGUgcHJvcGVydGllcyBgcHJvcGAsIGBmcm9tU2l6ZWAsIGFuZCBgdG9TaXplYC5cXG5cXG5cIixcbiAgXCIyMlwiOiBcImV4cGVjdHMgdGhlIGZpcnN0IGFyZ3VtZW50IG9iamVjdCB0byBoYXZlIHRoZSBwcm9wZXJ0aWVzIGBwcm9wYCwgYGZyb21TaXplYCwgYW5kIGB0b1NpemVgLlxcblxcblwiLFxuICBcIjIzXCI6IFwiZm9udEZhY2UgZXhwZWN0cyBhIG5hbWUgb2YgYSBmb250LWZhbWlseS5cXG5cXG5cIixcbiAgXCIyNFwiOiBcImZvbnRGYWNlIGV4cGVjdHMgZWl0aGVyIHRoZSBwYXRoIHRvIHRoZSBmb250IGZpbGUocykgb3IgYSBuYW1lIG9mIGEgbG9jYWwgY29weS5cXG5cXG5cIixcbiAgXCIyNVwiOiBcImZvbnRGYWNlIGV4cGVjdHMgbG9jYWxGb250cyB0byBiZSBhbiBhcnJheS5cXG5cXG5cIixcbiAgXCIyNlwiOiBcImZvbnRGYWNlIGV4cGVjdHMgZmlsZUZvcm1hdHMgdG8gYmUgYW4gYXJyYXkuXFxuXFxuXCIsXG4gIFwiMjdcIjogXCJyYWRpYWxHcmFkaWVudCByZXF1cmllcyBhdCBsZWFzdCAyIGNvbG9yLXN0b3BzIHRvIHByb3Blcmx5IHJlbmRlci5cXG5cXG5cIixcbiAgXCIyOFwiOiBcIlBsZWFzZSBzdXBwbHkgYSBmaWxlbmFtZSB0byByZXRpbmFJbWFnZSgpIGFzIHRoZSBmaXJzdCBhcmd1bWVudC5cXG5cXG5cIixcbiAgXCIyOVwiOiBcIlBhc3NlZCBpbnZhbGlkIGFyZ3VtZW50IHRvIHRyaWFuZ2xlLCBwbGVhc2UgcGFzcyBjb3JyZWN0IHBvaW50aW5nRGlyZWN0aW9uIGUuZy4gJ3JpZ2h0Jy5cXG5cXG5cIixcbiAgXCIzMFwiOiBcIlBhc3NlZCBhbiBpbnZhbGlkIHZhbHVlIHRvIGBoZWlnaHRgIG9yIGB3aWR0aGAuIFBsZWFzZSBwcm92aWRlIGEgcGl4ZWwgYmFzZWQgdW5pdC5cXG5cXG5cIixcbiAgXCIzMVwiOiBcIlRoZSBhbmltYXRpb24gc2hvcnRoYW5kIG9ubHkgdGFrZXMgOCBhcmd1bWVudHMuIFNlZSB0aGUgc3BlY2lmaWNhdGlvbiBmb3IgbW9yZSBpbmZvcm1hdGlvbjogaHR0cDovL21kbi5pby9hbmltYXRpb25cXG5cXG5cIixcbiAgXCIzMlwiOiBcIlRvIHBhc3MgbXVsdGlwbGUgYW5pbWF0aW9ucyBwbGVhc2Ugc3VwcGx5IHRoZW0gaW4gYXJyYXlzLCBlLmcuIGFuaW1hdGlvbihbJ3JvdGF0ZScsICcycyddLCBbJ21vdmUnLCAnMXMnXSlcXG5UbyBwYXNzIGEgc2luZ2xlIGFuaW1hdGlvbiBwbGVhc2Ugc3VwcGx5IHRoZW0gaW4gc2ltcGxlIHZhbHVlcywgZS5nLiBhbmltYXRpb24oJ3JvdGF0ZScsICcycycpXFxuXFxuXCIsXG4gIFwiMzNcIjogXCJUaGUgYW5pbWF0aW9uIHNob3J0aGFuZCBhcnJheXMgY2FuIG9ubHkgaGF2ZSA4IGVsZW1lbnRzLiBTZWUgdGhlIHNwZWNpZmljYXRpb24gZm9yIG1vcmUgaW5mb3JtYXRpb246IGh0dHA6Ly9tZG4uaW8vYW5pbWF0aW9uXFxuXFxuXCIsXG4gIFwiMzRcIjogXCJib3JkZXJSYWRpdXMgZXhwZWN0cyBhIHJhZGl1cyB2YWx1ZSBhcyBhIHN0cmluZyBvciBudW1iZXIgYXMgdGhlIHNlY29uZCBhcmd1bWVudC5cXG5cXG5cIixcbiAgXCIzNVwiOiBcImJvcmRlclJhZGl1cyBleHBlY3RzIG9uZSBvZiBcXFwidG9wXFxcIiwgXFxcImJvdHRvbVxcXCIsIFxcXCJsZWZ0XFxcIiBvciBcXFwicmlnaHRcXFwiIGFzIHRoZSBmaXJzdCBhcmd1bWVudC5cXG5cXG5cIixcbiAgXCIzNlwiOiBcIlByb3BlcnR5IG11c3QgYmUgYSBzdHJpbmcgdmFsdWUuXFxuXFxuXCIsXG4gIFwiMzdcIjogXCJTeW50YXggRXJyb3IgYXQgJXMuXFxuXFxuXCIsXG4gIFwiMzhcIjogXCJGb3JtdWxhIGNvbnRhaW5zIGEgZnVuY3Rpb24gdGhhdCBuZWVkcyBwYXJlbnRoZXNlcyBhdCAlcy5cXG5cXG5cIixcbiAgXCIzOVwiOiBcIkZvcm11bGEgaXMgbWlzc2luZyBjbG9zaW5nIHBhcmVudGhlc2lzIGF0ICVzLlxcblxcblwiLFxuICBcIjQwXCI6IFwiRm9ybXVsYSBoYXMgdG9vIG1hbnkgY2xvc2luZyBwYXJlbnRoZXNlcyBhdCAlcy5cXG5cXG5cIixcbiAgXCI0MVwiOiBcIkFsbCB2YWx1ZXMgaW4gYSBmb3JtdWxhIG11c3QgaGF2ZSB0aGUgc2FtZSB1bml0IG9yIGJlIHVuaXRsZXNzLlxcblxcblwiLFxuICBcIjQyXCI6IFwiUGxlYXNlIHByb3ZpZGUgYSBudW1iZXIgb2Ygc3RlcHMgdG8gdGhlIG1vZHVsYXJTY2FsZSBoZWxwZXIuXFxuXFxuXCIsXG4gIFwiNDNcIjogXCJQbGVhc2UgcGFzcyBhIG51bWJlciBvciBvbmUgb2YgdGhlIHByZWRlZmluZWQgc2NhbGVzIHRvIHRoZSBtb2R1bGFyU2NhbGUgaGVscGVyIGFzIHRoZSByYXRpby5cXG5cXG5cIixcbiAgXCI0NFwiOiBcIkludmFsaWQgdmFsdWUgcGFzc2VkIGFzIGJhc2UgdG8gbW9kdWxhclNjYWxlLCBleHBlY3RlZCBudW1iZXIgb3IgZW0vcmVtIHN0cmluZyBidXQgZ290ICVzLlxcblxcblwiLFxuICBcIjQ1XCI6IFwiUGFzc2VkIGludmFsaWQgYXJndW1lbnQgdG8gaHNsVG9Db2xvclN0cmluZywgcGxlYXNlIHBhc3MgYSBIc2xDb2xvciBvciBIc2xhQ29sb3Igb2JqZWN0LlxcblxcblwiLFxuICBcIjQ2XCI6IFwiUGFzc2VkIGludmFsaWQgYXJndW1lbnQgdG8gcmdiVG9Db2xvclN0cmluZywgcGxlYXNlIHBhc3MgYSBSZ2JDb2xvciBvciBSZ2JhQ29sb3Igb2JqZWN0LlxcblxcblwiLFxuICBcIjQ3XCI6IFwibWluU2NyZWVuIGFuZCBtYXhTY3JlZW4gbXVzdCBiZSBwcm92aWRlZCBhcyBzdHJpbmdpZmllZCBudW1iZXJzIHdpdGggdGhlIHNhbWUgdW5pdHMuXFxuXFxuXCIsXG4gIFwiNDhcIjogXCJmcm9tU2l6ZSBhbmQgdG9TaXplIG11c3QgYmUgcHJvdmlkZWQgYXMgc3RyaW5naWZpZWQgbnVtYmVycyB3aXRoIHRoZSBzYW1lIHVuaXRzLlxcblxcblwiLFxuICBcIjQ5XCI6IFwiRXhwZWN0cyBlaXRoZXIgYW4gYXJyYXkgb2Ygb2JqZWN0cyBvciBhIHNpbmdsZSBvYmplY3Qgd2l0aCB0aGUgcHJvcGVydGllcyBwcm9wLCBmcm9tU2l6ZSwgYW5kIHRvU2l6ZS5cXG5cXG5cIixcbiAgXCI1MFwiOiBcIkV4cGVjdHMgdGhlIG9iamVjdHMgaW4gdGhlIGZpcnN0IGFyZ3VtZW50IGFycmF5IHRvIGhhdmUgdGhlIHByb3BlcnRpZXMgcHJvcCwgZnJvbVNpemUsIGFuZCB0b1NpemUuXFxuXFxuXCIsXG4gIFwiNTFcIjogXCJFeHBlY3RzIHRoZSBmaXJzdCBhcmd1bWVudCBvYmplY3QgdG8gaGF2ZSB0aGUgcHJvcGVydGllcyBwcm9wLCBmcm9tU2l6ZSwgYW5kIHRvU2l6ZS5cXG5cXG5cIixcbiAgXCI1MlwiOiBcImZvbnRGYWNlIGV4cGVjdHMgZWl0aGVyIHRoZSBwYXRoIHRvIHRoZSBmb250IGZpbGUocykgb3IgYSBuYW1lIG9mIGEgbG9jYWwgY29weS5cXG5cXG5cIixcbiAgXCI1M1wiOiBcImZvbnRGYWNlIGV4cGVjdHMgbG9jYWxGb250cyB0byBiZSBhbiBhcnJheS5cXG5cXG5cIixcbiAgXCI1NFwiOiBcImZvbnRGYWNlIGV4cGVjdHMgZmlsZUZvcm1hdHMgdG8gYmUgYW4gYXJyYXkuXFxuXFxuXCIsXG4gIFwiNTVcIjogXCJmb250RmFjZSBleHBlY3RzIGEgbmFtZSBvZiBhIGZvbnQtZmFtaWx5LlxcblxcblwiLFxuICBcIjU2XCI6IFwibGluZWFyR3JhZGllbnQgcmVxdXJpZXMgYXQgbGVhc3QgMiBjb2xvci1zdG9wcyB0byBwcm9wZXJseSByZW5kZXIuXFxuXFxuXCIsXG4gIFwiNTdcIjogXCJyYWRpYWxHcmFkaWVudCByZXF1cmllcyBhdCBsZWFzdCAyIGNvbG9yLXN0b3BzIHRvIHByb3Blcmx5IHJlbmRlci5cXG5cXG5cIixcbiAgXCI1OFwiOiBcIlBsZWFzZSBzdXBwbHkgYSBmaWxlbmFtZSB0byByZXRpbmFJbWFnZSgpIGFzIHRoZSBmaXJzdCBhcmd1bWVudC5cXG5cXG5cIixcbiAgXCI1OVwiOiBcIlBhc3NlZCBpbnZhbGlkIGFyZ3VtZW50IHRvIHRyaWFuZ2xlLCBwbGVhc2UgcGFzcyBjb3JyZWN0IHBvaW50aW5nRGlyZWN0aW9uIGUuZy4gJ3JpZ2h0Jy5cXG5cXG5cIixcbiAgXCI2MFwiOiBcIlBhc3NlZCBhbiBpbnZhbGlkIHZhbHVlIHRvIGBoZWlnaHRgIG9yIGB3aWR0aGAuIFBsZWFzZSBwcm92aWRlIGEgcGl4ZWwgYmFzZWQgdW5pdC5cXG5cXG5cIixcbiAgXCI2MVwiOiBcIlByb3BlcnR5IG11c3QgYmUgYSBzdHJpbmcgdmFsdWUuXFxuXFxuXCIsXG4gIFwiNjJcIjogXCJib3JkZXJSYWRpdXMgZXhwZWN0cyBhIHJhZGl1cyB2YWx1ZSBhcyBhIHN0cmluZyBvciBudW1iZXIgYXMgdGhlIHNlY29uZCBhcmd1bWVudC5cXG5cXG5cIixcbiAgXCI2M1wiOiBcImJvcmRlclJhZGl1cyBleHBlY3RzIG9uZSBvZiBcXFwidG9wXFxcIiwgXFxcImJvdHRvbVxcXCIsIFxcXCJsZWZ0XFxcIiBvciBcXFwicmlnaHRcXFwiIGFzIHRoZSBmaXJzdCBhcmd1bWVudC5cXG5cXG5cIixcbiAgXCI2NFwiOiBcIlRoZSBhbmltYXRpb24gc2hvcnRoYW5kIG9ubHkgdGFrZXMgOCBhcmd1bWVudHMuIFNlZSB0aGUgc3BlY2lmaWNhdGlvbiBmb3IgbW9yZSBpbmZvcm1hdGlvbjogaHR0cDovL21kbi5pby9hbmltYXRpb24uXFxuXFxuXCIsXG4gIFwiNjVcIjogXCJUbyBwYXNzIG11bHRpcGxlIGFuaW1hdGlvbnMgcGxlYXNlIHN1cHBseSB0aGVtIGluIGFycmF5cywgZS5nLiBhbmltYXRpb24oWydyb3RhdGUnLCAnMnMnXSwgWydtb3ZlJywgJzFzJ10pXFxcXG5UbyBwYXNzIGEgc2luZ2xlIGFuaW1hdGlvbiBwbGVhc2Ugc3VwcGx5IHRoZW0gaW4gc2ltcGxlIHZhbHVlcywgZS5nLiBhbmltYXRpb24oJ3JvdGF0ZScsICcycycpLlxcblxcblwiLFxuICBcIjY2XCI6IFwiVGhlIGFuaW1hdGlvbiBzaG9ydGhhbmQgYXJyYXlzIGNhbiBvbmx5IGhhdmUgOCBlbGVtZW50cy4gU2VlIHRoZSBzcGVjaWZpY2F0aW9uIGZvciBtb3JlIGluZm9ybWF0aW9uOiBodHRwOi8vbWRuLmlvL2FuaW1hdGlvbi5cXG5cXG5cIixcbiAgXCI2N1wiOiBcIllvdSBtdXN0IHByb3ZpZGUgYSB0ZW1wbGF0ZSB0byB0aGlzIG1ldGhvZC5cXG5cXG5cIixcbiAgXCI2OFwiOiBcIllvdSBwYXNzZWQgYW4gdW5zdXBwb3J0ZWQgc2VsZWN0b3Igc3RhdGUgdG8gdGhpcyBtZXRob2QuXFxuXFxuXCIsXG4gIFwiNjlcIjogXCJFeHBlY3RlZCBhIHN0cmluZyBlbmRpbmcgaW4gXFxcInB4XFxcIiBvciBhIG51bWJlciBwYXNzZWQgYXMgdGhlIGZpcnN0IGFyZ3VtZW50IHRvICVzKCksIGdvdCAlcyBpbnN0ZWFkLlxcblxcblwiLFxuICBcIjcwXCI6IFwiRXhwZWN0ZWQgYSBzdHJpbmcgZW5kaW5nIGluIFxcXCJweFxcXCIgb3IgYSBudW1iZXIgcGFzc2VkIGFzIHRoZSBzZWNvbmQgYXJndW1lbnQgdG8gJXMoKSwgZ290ICVzIGluc3RlYWQuXFxuXFxuXCIsXG4gIFwiNzFcIjogXCJQYXNzZWQgaW52YWxpZCBwaXhlbCB2YWx1ZSAlcyB0byAlcygpLCBwbGVhc2UgcGFzcyBhIHZhbHVlIGxpa2UgXFxcIjEycHhcXFwiIG9yIDEyLlxcblxcblwiLFxuICBcIjcyXCI6IFwiUGFzc2VkIGludmFsaWQgYmFzZSB2YWx1ZSAlcyB0byAlcygpLCBwbGVhc2UgcGFzcyBhIHZhbHVlIGxpa2UgXFxcIjEycHhcXFwiIG9yIDEyLlxcblwiXG59O1xuLyoqXG4gKiBzdXBlciBiYXNpYyB2ZXJzaW9uIG9mIHNwcmludGZcbiAqIEBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gZm9ybWF0KCkge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgdmFyIGEgPSBhcmdzWzBdO1xuICB2YXIgYiA9IFtdO1xuICB2YXIgYztcblxuICBmb3IgKGMgPSAxOyBjIDwgYXJncy5sZW5ndGg7IGMgKz0gMSkge1xuICAgIGIucHVzaChhcmdzW2NdKTtcbiAgfVxuXG4gIGIuZm9yRWFjaChmdW5jdGlvbiAoZCkge1xuICAgIGEgPSBhLnJlcGxhY2UoLyVbYS16XS8sIGQpO1xuICB9KTtcbiAgcmV0dXJuIGE7XG59XG4vKipcbiAqIENyZWF0ZSBhbiBlcnJvciBmaWxlIG91dCBvZiBlcnJvcnMubWQgZm9yIGRldmVsb3BtZW50IGFuZCBhIHNpbXBsZSB3ZWIgbGluayB0byB0aGUgZnVsbCBlcnJvcnNcbiAqIGluIHByb2R1Y3Rpb24gbW9kZS5cbiAqIEBwcml2YXRlXG4gKi9cblxuXG52YXIgUG9saXNoZWRFcnJvciA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoX0Vycm9yKSB7XG4gIF9pbmhlcml0c0xvb3NlKFBvbGlzaGVkRXJyb3IsIF9FcnJvcik7XG5cbiAgZnVuY3Rpb24gUG9saXNoZWRFcnJvcihjb2RlKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIF90aGlzID0gX0Vycm9yLmNhbGwodGhpcywgXCJBbiBlcnJvciBvY2N1cnJlZC4gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9zdHlsZWQtY29tcG9uZW50cy9wb2xpc2hlZC9ibG9iL21hc3Rlci9zcmMvZXJyb3IvZXJyb3JzLm1kI1wiICsgY29kZSArIFwiIGZvciBtb3JlIGluZm9ybWF0aW9uLlwiKSB8fCB0aGlzO1xuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbjIgPiAxID8gX2xlbjIgLSAxIDogMCksIF9rZXkyID0gMTsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgICBhcmdzW19rZXkyIC0gMV0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgICAgfVxuXG4gICAgICBfdGhpcyA9IF9FcnJvci5jYWxsKHRoaXMsIGZvcm1hdC5hcHBseSh2b2lkIDAsIFtFUlJPUlNbY29kZV1dLmNvbmNhdChhcmdzKSkpIHx8IHRoaXM7XG4gICAgfVxuXG4gICAgcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpO1xuICB9XG5cbiAgcmV0dXJuIFBvbGlzaGVkRXJyb3I7XG59KFxuLyojX19QVVJFX18qL1xuX3dyYXBOYXRpdmVTdXBlcihFcnJvcikpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBQb2xpc2hlZEVycm9yO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBfaHNsVG9SZ2IgPVxuLyojX19QVVJFX18qL1xuX2ludGVyb3BSZXF1aXJlRGVmYXVsdChcbi8qI19fUFVSRV9fKi9cbnJlcXVpcmUoXCIuLi9pbnRlcm5hbEhlbHBlcnMvX2hzbFRvUmdiXCIpKTtcblxudmFyIF9uYW1lVG9IZXggPVxuLyojX19QVVJFX18qL1xuX2ludGVyb3BSZXF1aXJlRGVmYXVsdChcbi8qI19fUFVSRV9fKi9cbnJlcXVpcmUoXCIuLi9pbnRlcm5hbEhlbHBlcnMvX25hbWVUb0hleFwiKSk7XG5cbnZhciBfZXJyb3JzID1cbi8qI19fUFVSRV9fKi9cbl9pbnRlcm9wUmVxdWlyZURlZmF1bHQoXG4vKiNfX1BVUkVfXyovXG5yZXF1aXJlKFwiLi4vaW50ZXJuYWxIZWxwZXJzL19lcnJvcnNcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgaGV4UmVnZXggPSAvXiNbYS1mQS1GMC05XXs2fSQvO1xudmFyIGhleFJnYmFSZWdleCA9IC9eI1thLWZBLUYwLTldezh9JC87XG52YXIgcmVkdWNlZEhleFJlZ2V4ID0gL14jW2EtZkEtRjAtOV17M30kLztcbnZhciByZWR1Y2VkUmdiYUhleFJlZ2V4ID0gL14jW2EtZkEtRjAtOV17NH0kLztcbnZhciByZ2JSZWdleCA9IC9ecmdiXFwoXFxzKihcXGR7MSwzfSlcXHMqLFxccyooXFxkezEsM30pXFxzKixcXHMqKFxcZHsxLDN9KVxccypcXCkkLztcbnZhciByZ2JhUmVnZXggPSAvXnJnYmFcXChcXHMqKFxcZHsxLDN9KVxccyosXFxzKihcXGR7MSwzfSlcXHMqLFxccyooXFxkezEsM30pXFxzKixcXHMqKFstK10/WzAtOV0qWy5dP1swLTldKylcXHMqXFwpJC87XG52YXIgaHNsUmVnZXggPSAvXmhzbFxcKFxccyooXFxkezAsM31bLl0/WzAtOV0rKVxccyosXFxzKihcXGR7MSwzfSklXFxzKixcXHMqKFxcZHsxLDN9KSVcXHMqXFwpJC87XG52YXIgaHNsYVJlZ2V4ID0gL15oc2xhXFwoXFxzKihcXGR7MCwzfVsuXT9bMC05XSspXFxzKixcXHMqKFxcZHsxLDN9KSVcXHMqLFxccyooXFxkezEsM30pJVxccyosXFxzKihbLStdP1swLTldKlsuXT9bMC05XSspXFxzKlxcKSQvO1xuLyoqXG4gKiBSZXR1cm5zIGFuIFJnYkNvbG9yIG9yIFJnYmFDb2xvciBvYmplY3QuIFRoaXMgdXRpbGl0eSBmdW5jdGlvbiBpcyBvbmx5IHVzZWZ1bFxuICogaWYgd2FudCB0byBleHRyYWN0IGEgY29sb3IgY29tcG9uZW50LiBXaXRoIHRoZSBjb2xvciB1dGlsIGB0b0NvbG9yU3RyaW5nYCB5b3VcbiAqIGNhbiBjb252ZXJ0IGEgUmdiQ29sb3Igb3IgUmdiYUNvbG9yIG9iamVjdCBiYWNrIHRvIGEgc3RyaW5nLlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBc3NpZ25zIGB7IHJlZDogMjU1LCBncmVlbjogMCwgYmx1ZTogMCB9YCB0byBjb2xvcjFcbiAqIGNvbnN0IGNvbG9yMSA9IHBhcnNlVG9SZ2IoJ3JnYigyNTUsIDAsIDApJyk7XG4gKiAvLyBBc3NpZ25zIGB7IHJlZDogOTIsIGdyZWVuOiAxMDIsIGJsdWU6IDExMiwgYWxwaGE6IDAuNzUgfWAgdG8gY29sb3IyXG4gKiBjb25zdCBjb2xvcjIgPSBwYXJzZVRvUmdiKCdoc2xhKDIxMCwgMTAlLCA0MCUsIDAuNzUpJyk7XG4gKi9cblxuZnVuY3Rpb24gcGFyc2VUb1JnYihjb2xvcikge1xuICBpZiAodHlwZW9mIGNvbG9yICE9PSAnc3RyaW5nJykge1xuICAgIHRocm93IG5ldyBfZXJyb3JzLmRlZmF1bHQoMyk7XG4gIH1cblxuICB2YXIgbm9ybWFsaXplZENvbG9yID0gKDAsIF9uYW1lVG9IZXguZGVmYXVsdCkoY29sb3IpO1xuXG4gIGlmIChub3JtYWxpemVkQ29sb3IubWF0Y2goaGV4UmVnZXgpKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJlZDogcGFyc2VJbnQoXCJcIiArIG5vcm1hbGl6ZWRDb2xvclsxXSArIG5vcm1hbGl6ZWRDb2xvclsyXSwgMTYpLFxuICAgICAgZ3JlZW46IHBhcnNlSW50KFwiXCIgKyBub3JtYWxpemVkQ29sb3JbM10gKyBub3JtYWxpemVkQ29sb3JbNF0sIDE2KSxcbiAgICAgIGJsdWU6IHBhcnNlSW50KFwiXCIgKyBub3JtYWxpemVkQ29sb3JbNV0gKyBub3JtYWxpemVkQ29sb3JbNl0sIDE2KVxuICAgIH07XG4gIH1cblxuICBpZiAobm9ybWFsaXplZENvbG9yLm1hdGNoKGhleFJnYmFSZWdleCkpIHtcbiAgICB2YXIgYWxwaGEgPSBwYXJzZUZsb2F0KChwYXJzZUludChcIlwiICsgbm9ybWFsaXplZENvbG9yWzddICsgbm9ybWFsaXplZENvbG9yWzhdLCAxNikgLyAyNTUpLnRvRml4ZWQoMikpO1xuICAgIHJldHVybiB7XG4gICAgICByZWQ6IHBhcnNlSW50KFwiXCIgKyBub3JtYWxpemVkQ29sb3JbMV0gKyBub3JtYWxpemVkQ29sb3JbMl0sIDE2KSxcbiAgICAgIGdyZWVuOiBwYXJzZUludChcIlwiICsgbm9ybWFsaXplZENvbG9yWzNdICsgbm9ybWFsaXplZENvbG9yWzRdLCAxNiksXG4gICAgICBibHVlOiBwYXJzZUludChcIlwiICsgbm9ybWFsaXplZENvbG9yWzVdICsgbm9ybWFsaXplZENvbG9yWzZdLCAxNiksXG4gICAgICBhbHBoYTogYWxwaGFcbiAgICB9O1xuICB9XG5cbiAgaWYgKG5vcm1hbGl6ZWRDb2xvci5tYXRjaChyZWR1Y2VkSGV4UmVnZXgpKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJlZDogcGFyc2VJbnQoXCJcIiArIG5vcm1hbGl6ZWRDb2xvclsxXSArIG5vcm1hbGl6ZWRDb2xvclsxXSwgMTYpLFxuICAgICAgZ3JlZW46IHBhcnNlSW50KFwiXCIgKyBub3JtYWxpemVkQ29sb3JbMl0gKyBub3JtYWxpemVkQ29sb3JbMl0sIDE2KSxcbiAgICAgIGJsdWU6IHBhcnNlSW50KFwiXCIgKyBub3JtYWxpemVkQ29sb3JbM10gKyBub3JtYWxpemVkQ29sb3JbM10sIDE2KVxuICAgIH07XG4gIH1cblxuICBpZiAobm9ybWFsaXplZENvbG9yLm1hdGNoKHJlZHVjZWRSZ2JhSGV4UmVnZXgpKSB7XG4gICAgdmFyIF9hbHBoYSA9IHBhcnNlRmxvYXQoKHBhcnNlSW50KFwiXCIgKyBub3JtYWxpemVkQ29sb3JbNF0gKyBub3JtYWxpemVkQ29sb3JbNF0sIDE2KSAvIDI1NSkudG9GaXhlZCgyKSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgcmVkOiBwYXJzZUludChcIlwiICsgbm9ybWFsaXplZENvbG9yWzFdICsgbm9ybWFsaXplZENvbG9yWzFdLCAxNiksXG4gICAgICBncmVlbjogcGFyc2VJbnQoXCJcIiArIG5vcm1hbGl6ZWRDb2xvclsyXSArIG5vcm1hbGl6ZWRDb2xvclsyXSwgMTYpLFxuICAgICAgYmx1ZTogcGFyc2VJbnQoXCJcIiArIG5vcm1hbGl6ZWRDb2xvclszXSArIG5vcm1hbGl6ZWRDb2xvclszXSwgMTYpLFxuICAgICAgYWxwaGE6IF9hbHBoYVxuICAgIH07XG4gIH1cblxuICB2YXIgcmdiTWF0Y2hlZCA9IHJnYlJlZ2V4LmV4ZWMobm9ybWFsaXplZENvbG9yKTtcblxuICBpZiAocmdiTWF0Y2hlZCkge1xuICAgIHJldHVybiB7XG4gICAgICByZWQ6IHBhcnNlSW50KFwiXCIgKyByZ2JNYXRjaGVkWzFdLCAxMCksXG4gICAgICBncmVlbjogcGFyc2VJbnQoXCJcIiArIHJnYk1hdGNoZWRbMl0sIDEwKSxcbiAgICAgIGJsdWU6IHBhcnNlSW50KFwiXCIgKyByZ2JNYXRjaGVkWzNdLCAxMClcbiAgICB9O1xuICB9XG5cbiAgdmFyIHJnYmFNYXRjaGVkID0gcmdiYVJlZ2V4LmV4ZWMobm9ybWFsaXplZENvbG9yKTtcblxuICBpZiAocmdiYU1hdGNoZWQpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcmVkOiBwYXJzZUludChcIlwiICsgcmdiYU1hdGNoZWRbMV0sIDEwKSxcbiAgICAgIGdyZWVuOiBwYXJzZUludChcIlwiICsgcmdiYU1hdGNoZWRbMl0sIDEwKSxcbiAgICAgIGJsdWU6IHBhcnNlSW50KFwiXCIgKyByZ2JhTWF0Y2hlZFszXSwgMTApLFxuICAgICAgYWxwaGE6IHBhcnNlRmxvYXQoXCJcIiArIHJnYmFNYXRjaGVkWzRdKVxuICAgIH07XG4gIH1cblxuICB2YXIgaHNsTWF0Y2hlZCA9IGhzbFJlZ2V4LmV4ZWMobm9ybWFsaXplZENvbG9yKTtcblxuICBpZiAoaHNsTWF0Y2hlZCkge1xuICAgIHZhciBodWUgPSBwYXJzZUludChcIlwiICsgaHNsTWF0Y2hlZFsxXSwgMTApO1xuICAgIHZhciBzYXR1cmF0aW9uID0gcGFyc2VJbnQoXCJcIiArIGhzbE1hdGNoZWRbMl0sIDEwKSAvIDEwMDtcbiAgICB2YXIgbGlnaHRuZXNzID0gcGFyc2VJbnQoXCJcIiArIGhzbE1hdGNoZWRbM10sIDEwKSAvIDEwMDtcbiAgICB2YXIgcmdiQ29sb3JTdHJpbmcgPSBcInJnYihcIiArICgwLCBfaHNsVG9SZ2IuZGVmYXVsdCkoaHVlLCBzYXR1cmF0aW9uLCBsaWdodG5lc3MpICsgXCIpXCI7XG4gICAgdmFyIGhzbFJnYk1hdGNoZWQgPSByZ2JSZWdleC5leGVjKHJnYkNvbG9yU3RyaW5nKTtcblxuICAgIGlmICghaHNsUmdiTWF0Y2hlZCkge1xuICAgICAgdGhyb3cgbmV3IF9lcnJvcnMuZGVmYXVsdCg0LCBub3JtYWxpemVkQ29sb3IsIHJnYkNvbG9yU3RyaW5nKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgcmVkOiBwYXJzZUludChcIlwiICsgaHNsUmdiTWF0Y2hlZFsxXSwgMTApLFxuICAgICAgZ3JlZW46IHBhcnNlSW50KFwiXCIgKyBoc2xSZ2JNYXRjaGVkWzJdLCAxMCksXG4gICAgICBibHVlOiBwYXJzZUludChcIlwiICsgaHNsUmdiTWF0Y2hlZFszXSwgMTApXG4gICAgfTtcbiAgfVxuXG4gIHZhciBoc2xhTWF0Y2hlZCA9IGhzbGFSZWdleC5leGVjKG5vcm1hbGl6ZWRDb2xvcik7XG5cbiAgaWYgKGhzbGFNYXRjaGVkKSB7XG4gICAgdmFyIF9odWUgPSBwYXJzZUludChcIlwiICsgaHNsYU1hdGNoZWRbMV0sIDEwKTtcblxuICAgIHZhciBfc2F0dXJhdGlvbiA9IHBhcnNlSW50KFwiXCIgKyBoc2xhTWF0Y2hlZFsyXSwgMTApIC8gMTAwO1xuXG4gICAgdmFyIF9saWdodG5lc3MgPSBwYXJzZUludChcIlwiICsgaHNsYU1hdGNoZWRbM10sIDEwKSAvIDEwMDtcblxuICAgIHZhciBfcmdiQ29sb3JTdHJpbmcgPSBcInJnYihcIiArICgwLCBfaHNsVG9SZ2IuZGVmYXVsdCkoX2h1ZSwgX3NhdHVyYXRpb24sIF9saWdodG5lc3MpICsgXCIpXCI7XG5cbiAgICB2YXIgX2hzbFJnYk1hdGNoZWQgPSByZ2JSZWdleC5leGVjKF9yZ2JDb2xvclN0cmluZyk7XG5cbiAgICBpZiAoIV9oc2xSZ2JNYXRjaGVkKSB7XG4gICAgICB0aHJvdyBuZXcgX2Vycm9ycy5kZWZhdWx0KDQsIG5vcm1hbGl6ZWRDb2xvciwgX3JnYkNvbG9yU3RyaW5nKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgcmVkOiBwYXJzZUludChcIlwiICsgX2hzbFJnYk1hdGNoZWRbMV0sIDEwKSxcbiAgICAgIGdyZWVuOiBwYXJzZUludChcIlwiICsgX2hzbFJnYk1hdGNoZWRbMl0sIDEwKSxcbiAgICAgIGJsdWU6IHBhcnNlSW50KFwiXCIgKyBfaHNsUmdiTWF0Y2hlZFszXSwgMTApLFxuICAgICAgYWxwaGE6IHBhcnNlRmxvYXQoXCJcIiArIGhzbGFNYXRjaGVkWzRdKVxuICAgIH07XG4gIH1cblxuICB0aHJvdyBuZXcgX2Vycm9ycy5kZWZhdWx0KDUpO1xufVxuXG52YXIgX2RlZmF1bHQgPSBwYXJzZVRvUmdiO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxuZnVuY3Rpb24gcmdiVG9Ic2woY29sb3IpIHtcbiAgLy8gbWFrZSBzdXJlIHJnYiBhcmUgY29udGFpbmVkIGluIGEgc2V0IG9mIFswLCAyNTVdXG4gIHZhciByZWQgPSBjb2xvci5yZWQgLyAyNTU7XG4gIHZhciBncmVlbiA9IGNvbG9yLmdyZWVuIC8gMjU1O1xuICB2YXIgYmx1ZSA9IGNvbG9yLmJsdWUgLyAyNTU7XG4gIHZhciBtYXggPSBNYXRoLm1heChyZWQsIGdyZWVuLCBibHVlKTtcbiAgdmFyIG1pbiA9IE1hdGgubWluKHJlZCwgZ3JlZW4sIGJsdWUpO1xuICB2YXIgbGlnaHRuZXNzID0gKG1heCArIG1pbikgLyAyO1xuXG4gIGlmIChtYXggPT09IG1pbikge1xuICAgIC8vIGFjaHJvbWF0aWNcbiAgICBpZiAoY29sb3IuYWxwaGEgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaHVlOiAwLFxuICAgICAgICBzYXR1cmF0aW9uOiAwLFxuICAgICAgICBsaWdodG5lc3M6IGxpZ2h0bmVzcyxcbiAgICAgICAgYWxwaGE6IGNvbG9yLmFscGhhXG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBodWU6IDAsXG4gICAgICAgIHNhdHVyYXRpb246IDAsXG4gICAgICAgIGxpZ2h0bmVzczogbGlnaHRuZXNzXG4gICAgICB9O1xuICAgIH1cbiAgfVxuXG4gIHZhciBodWU7XG4gIHZhciBkZWx0YSA9IG1heCAtIG1pbjtcbiAgdmFyIHNhdHVyYXRpb24gPSBsaWdodG5lc3MgPiAwLjUgPyBkZWx0YSAvICgyIC0gbWF4IC0gbWluKSA6IGRlbHRhIC8gKG1heCArIG1pbik7XG5cbiAgc3dpdGNoIChtYXgpIHtcbiAgICBjYXNlIHJlZDpcbiAgICAgIGh1ZSA9IChncmVlbiAtIGJsdWUpIC8gZGVsdGEgKyAoZ3JlZW4gPCBibHVlID8gNiA6IDApO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIGdyZWVuOlxuICAgICAgaHVlID0gKGJsdWUgLSByZWQpIC8gZGVsdGEgKyAyO1xuICAgICAgYnJlYWs7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgLy8gYmx1ZSBjYXNlXG4gICAgICBodWUgPSAocmVkIC0gZ3JlZW4pIC8gZGVsdGEgKyA0O1xuICAgICAgYnJlYWs7XG4gIH1cblxuICBodWUgKj0gNjA7XG5cbiAgaWYgKGNvbG9yLmFscGhhICE9PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaHVlOiBodWUsXG4gICAgICBzYXR1cmF0aW9uOiBzYXR1cmF0aW9uLFxuICAgICAgbGlnaHRuZXNzOiBsaWdodG5lc3MsXG4gICAgICBhbHBoYTogY29sb3IuYWxwaGFcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBodWU6IGh1ZSxcbiAgICBzYXR1cmF0aW9uOiBzYXR1cmF0aW9uLFxuICAgIGxpZ2h0bmVzczogbGlnaHRuZXNzXG4gIH07XG59XG5cbnZhciBfZGVmYXVsdCA9IHJnYlRvSHNsO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIF9wYXJzZVRvUmdiID1cbi8qI19fUFVSRV9fKi9cbl9pbnRlcm9wUmVxdWlyZURlZmF1bHQoXG4vKiNfX1BVUkVfXyovXG5yZXF1aXJlKFwiLi9wYXJzZVRvUmdiXCIpKTtcblxudmFyIF9yZ2JUb0hzbCA9XG4vKiNfX1BVUkVfXyovXG5faW50ZXJvcFJlcXVpcmVEZWZhdWx0KFxuLyojX19QVVJFX18qL1xucmVxdWlyZShcIi4uL2ludGVybmFsSGVscGVycy9fcmdiVG9Ic2xcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG4vKipcbiAqIFJldHVybnMgYW4gSHNsQ29sb3Igb3IgSHNsYUNvbG9yIG9iamVjdC4gVGhpcyB1dGlsaXR5IGZ1bmN0aW9uIGlzIG9ubHkgdXNlZnVsXG4gKiBpZiB3YW50IHRvIGV4dHJhY3QgYSBjb2xvciBjb21wb25lbnQuIFdpdGggdGhlIGNvbG9yIHV0aWwgYHRvQ29sb3JTdHJpbmdgIHlvdVxuICogY2FuIGNvbnZlcnQgYSBIc2xDb2xvciBvciBIc2xhQ29sb3Igb2JqZWN0IGJhY2sgdG8gYSBzdHJpbmcuXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFzc2lnbnMgYHsgaHVlOiAwLCBzYXR1cmF0aW9uOiAxLCBsaWdodG5lc3M6IDAuNSB9YCB0byBjb2xvcjFcbiAqIGNvbnN0IGNvbG9yMSA9IHBhcnNlVG9Ic2woJ3JnYigyNTUsIDAsIDApJyk7XG4gKiAvLyBBc3NpZ25zIGB7IGh1ZTogMTI4LCBzYXR1cmF0aW9uOiAxLCBsaWdodG5lc3M6IDAuNSwgYWxwaGE6IDAuNzUgfWAgdG8gY29sb3IyXG4gKiBjb25zdCBjb2xvcjIgPSBwYXJzZVRvSHNsKCdoc2xhKDEyOCwgMTAwJSwgNTAlLCAwLjc1KScpO1xuICovXG5mdW5jdGlvbiBwYXJzZVRvSHNsKGNvbG9yKSB7XG4gIC8vIE5vdGU6IEF0IGEgbGF0ZXIgc3RhZ2Ugd2UgY2FuIG9wdGltaXplIHRoaXMgZnVuY3Rpb24gYXMgcmlnaHQgbm93IGEgaHNsXG4gIC8vIGNvbG9yIHdvdWxkIGJlIHBhcnNlZCBjb252ZXJ0ZWQgdG8gcmdiIHZhbHVlcyBhbmQgY29udmVydGVkIGJhY2sgdG8gaHNsLlxuICByZXR1cm4gKDAsIF9yZ2JUb0hzbC5kZWZhdWx0KSgoMCwgX3BhcnNlVG9SZ2IuZGVmYXVsdCkoY29sb3IpKTtcbn1cblxudmFyIF9kZWZhdWx0ID0gcGFyc2VUb0hzbDtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbi8qKlxuICogUmVkdWNlcyBoZXggdmFsdWVzIGlmIHBvc3NpYmxlIGUuZy4gI2ZmODg2NiB0byAjZjg2XG4gKiBAcHJpdmF0ZVxuICovXG52YXIgcmVkdWNlSGV4VmFsdWUgPSBmdW5jdGlvbiByZWR1Y2VIZXhWYWx1ZSh2YWx1ZSkge1xuICBpZiAodmFsdWUubGVuZ3RoID09PSA3ICYmIHZhbHVlWzFdID09PSB2YWx1ZVsyXSAmJiB2YWx1ZVszXSA9PT0gdmFsdWVbNF0gJiYgdmFsdWVbNV0gPT09IHZhbHVlWzZdKSB7XG4gICAgcmV0dXJuIFwiI1wiICsgdmFsdWVbMV0gKyB2YWx1ZVszXSArIHZhbHVlWzVdO1xuICB9XG5cbiAgcmV0dXJuIHZhbHVlO1xufTtcblxudmFyIF9kZWZhdWx0ID0gcmVkdWNlSGV4VmFsdWU7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG5mdW5jdGlvbiBudW1iZXJUb0hleCh2YWx1ZSkge1xuICB2YXIgaGV4ID0gdmFsdWUudG9TdHJpbmcoMTYpO1xuICByZXR1cm4gaGV4Lmxlbmd0aCA9PT0gMSA/IFwiMFwiICsgaGV4IDogaGV4O1xufVxuXG52YXIgX2RlZmF1bHQgPSBudW1iZXJUb0hleDtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBfaHNsVG9SZ2IgPVxuLyojX19QVVJFX18qL1xuX2ludGVyb3BSZXF1aXJlRGVmYXVsdChcbi8qI19fUFVSRV9fKi9cbnJlcXVpcmUoXCIuL19oc2xUb1JnYlwiKSk7XG5cbnZhciBfcmVkdWNlSGV4VmFsdWUgPVxuLyojX19QVVJFX18qL1xuX2ludGVyb3BSZXF1aXJlRGVmYXVsdChcbi8qI19fUFVSRV9fKi9cbnJlcXVpcmUoXCIuL19yZWR1Y2VIZXhWYWx1ZVwiKSk7XG5cbnZhciBfbnVtYmVyVG9IZXggPVxuLyojX19QVVJFX18qL1xuX2ludGVyb3BSZXF1aXJlRGVmYXVsdChcbi8qI19fUFVSRV9fKi9cbnJlcXVpcmUoXCIuL19udW1iZXJUb0hleFwiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIGNvbG9yVG9IZXgoY29sb3IpIHtcbiAgcmV0dXJuICgwLCBfbnVtYmVyVG9IZXguZGVmYXVsdCkoTWF0aC5yb3VuZChjb2xvciAqIDI1NSkpO1xufVxuXG5mdW5jdGlvbiBjb252ZXJ0VG9IZXgocmVkLCBncmVlbiwgYmx1ZSkge1xuICByZXR1cm4gKDAsIF9yZWR1Y2VIZXhWYWx1ZS5kZWZhdWx0KShcIiNcIiArIGNvbG9yVG9IZXgocmVkKSArIGNvbG9yVG9IZXgoZ3JlZW4pICsgY29sb3JUb0hleChibHVlKSk7XG59XG5cbmZ1bmN0aW9uIGhzbFRvSGV4KGh1ZSwgc2F0dXJhdGlvbiwgbGlnaHRuZXNzKSB7XG4gIHJldHVybiAoMCwgX2hzbFRvUmdiLmRlZmF1bHQpKGh1ZSwgc2F0dXJhdGlvbiwgbGlnaHRuZXNzLCBjb252ZXJ0VG9IZXgpO1xufVxuXG52YXIgX2RlZmF1bHQgPSBoc2xUb0hleDtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBfaHNsVG9IZXggPVxuLyojX19QVVJFX18qL1xuX2ludGVyb3BSZXF1aXJlRGVmYXVsdChcbi8qI19fUFVSRV9fKi9cbnJlcXVpcmUoXCIuLi9pbnRlcm5hbEhlbHBlcnMvX2hzbFRvSGV4XCIpKTtcblxudmFyIF9lcnJvcnMgPVxuLyojX19QVVJFX18qL1xuX2ludGVyb3BSZXF1aXJlRGVmYXVsdChcbi8qI19fUFVSRV9fKi9cbnJlcXVpcmUoXCIuLi9pbnRlcm5hbEhlbHBlcnMvX2Vycm9yc1wiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbi8qKlxuICogUmV0dXJucyBhIHN0cmluZyB2YWx1ZSBmb3IgdGhlIGNvbG9yLiBUaGUgcmV0dXJuZWQgcmVzdWx0IGlzIHRoZSBzbWFsbGVzdCBwb3NzaWJsZSBoZXggbm90YXRpb24uXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFN0eWxlcyBhcyBvYmplY3QgdXNhZ2VcbiAqIGNvbnN0IHN0eWxlcyA9IHtcbiAqICAgYmFja2dyb3VuZDogaHNsKDM1OSwgMC43NSwgMC40KSxcbiAqICAgYmFja2dyb3VuZDogaHNsKHsgaHVlOiAzNjAsIHNhdHVyYXRpb246IDAuNzUsIGxpZ2h0bmVzczogMC40IH0pLFxuICogfVxuICpcbiAqIC8vIHN0eWxlZC1jb21wb25lbnRzIHVzYWdlXG4gKiBjb25zdCBkaXYgPSBzdHlsZWQuZGl2YFxuICogICBiYWNrZ3JvdW5kOiAke2hzbCgzNTksIDAuNzUsIDAuNCl9O1xuICogICBiYWNrZ3JvdW5kOiAke2hzbCh7IGh1ZTogMzYwLCBzYXR1cmF0aW9uOiAwLjc1LCBsaWdodG5lc3M6IDAuNCB9KX07XG4gKiBgXG4gKlxuICogLy8gQ1NTIGluIEpTIE91dHB1dFxuICpcbiAqIGVsZW1lbnQge1xuICogICBiYWNrZ3JvdW5kOiBcIiNiMzE5MWNcIjtcbiAqICAgYmFja2dyb3VuZDogXCIjYjMxOTFjXCI7XG4gKiB9XG4gKi9cbmZ1bmN0aW9uIGhzbCh2YWx1ZSwgc2F0dXJhdGlvbiwgbGlnaHRuZXNzKSB7XG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInICYmIHR5cGVvZiBzYXR1cmF0aW9uID09PSAnbnVtYmVyJyAmJiB0eXBlb2YgbGlnaHRuZXNzID09PSAnbnVtYmVyJykge1xuICAgIHJldHVybiAoMCwgX2hzbFRvSGV4LmRlZmF1bHQpKHZhbHVlLCBzYXR1cmF0aW9uLCBsaWdodG5lc3MpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgc2F0dXJhdGlvbiA9PT0gdW5kZWZpbmVkICYmIGxpZ2h0bmVzcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuICgwLCBfaHNsVG9IZXguZGVmYXVsdCkodmFsdWUuaHVlLCB2YWx1ZS5zYXR1cmF0aW9uLCB2YWx1ZS5saWdodG5lc3MpO1xuICB9XG5cbiAgdGhyb3cgbmV3IF9lcnJvcnMuZGVmYXVsdCgxKTtcbn1cblxudmFyIF9kZWZhdWx0ID0gaHNsO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIF9oc2xUb0hleCA9XG4vKiNfX1BVUkVfXyovXG5faW50ZXJvcFJlcXVpcmVEZWZhdWx0KFxuLyojX19QVVJFX18qL1xucmVxdWlyZShcIi4uL2ludGVybmFsSGVscGVycy9faHNsVG9IZXhcIikpO1xuXG52YXIgX2hzbFRvUmdiID1cbi8qI19fUFVSRV9fKi9cbl9pbnRlcm9wUmVxdWlyZURlZmF1bHQoXG4vKiNfX1BVUkVfXyovXG5yZXF1aXJlKFwiLi4vaW50ZXJuYWxIZWxwZXJzL19oc2xUb1JnYlwiKSk7XG5cbnZhciBfZXJyb3JzID1cbi8qI19fUFVSRV9fKi9cbl9pbnRlcm9wUmVxdWlyZURlZmF1bHQoXG4vKiNfX1BVUkVfXyovXG5yZXF1aXJlKFwiLi4vaW50ZXJuYWxIZWxwZXJzL19lcnJvcnNcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG4vKipcbiAqIFJldHVybnMgYSBzdHJpbmcgdmFsdWUgZm9yIHRoZSBjb2xvci4gVGhlIHJldHVybmVkIHJlc3VsdCBpcyB0aGUgc21hbGxlc3QgcG9zc2libGUgcmdiYSBvciBoZXggbm90YXRpb24uXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFN0eWxlcyBhcyBvYmplY3QgdXNhZ2VcbiAqIGNvbnN0IHN0eWxlcyA9IHtcbiAqICAgYmFja2dyb3VuZDogaHNsYSgzNTksIDAuNzUsIDAuNCwgMC43KSxcbiAqICAgYmFja2dyb3VuZDogaHNsYSh7IGh1ZTogMzYwLCBzYXR1cmF0aW9uOiAwLjc1LCBsaWdodG5lc3M6IDAuNCwgYWxwaGE6IDAsNyB9KSxcbiAqICAgYmFja2dyb3VuZDogaHNsYSgzNTksIDAuNzUsIDAuNCwgMSksXG4gKiB9XG4gKlxuICogLy8gc3R5bGVkLWNvbXBvbmVudHMgdXNhZ2VcbiAqIGNvbnN0IGRpdiA9IHN0eWxlZC5kaXZgXG4gKiAgIGJhY2tncm91bmQ6ICR7aHNsYSgzNTksIDAuNzUsIDAuNCwgMC43KX07XG4gKiAgIGJhY2tncm91bmQ6ICR7aHNsYSh7IGh1ZTogMzYwLCBzYXR1cmF0aW9uOiAwLjc1LCBsaWdodG5lc3M6IDAuNCwgYWxwaGE6IDAsNyB9KX07XG4gKiAgIGJhY2tncm91bmQ6ICR7aHNsYSgzNTksIDAuNzUsIDAuNCwgMSl9O1xuICogYFxuICpcbiAqIC8vIENTUyBpbiBKUyBPdXRwdXRcbiAqXG4gKiBlbGVtZW50IHtcbiAqICAgYmFja2dyb3VuZDogXCJyZ2JhKDE3OSwyNSwyOCwwLjcpXCI7XG4gKiAgIGJhY2tncm91bmQ6IFwicmdiYSgxNzksMjUsMjgsMC43KVwiO1xuICogICBiYWNrZ3JvdW5kOiBcIiNiMzE5MWNcIjtcbiAqIH1cbiAqL1xuZnVuY3Rpb24gaHNsYSh2YWx1ZSwgc2F0dXJhdGlvbiwgbGlnaHRuZXNzLCBhbHBoYSkge1xuICBpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJyAmJiB0eXBlb2Ygc2F0dXJhdGlvbiA9PT0gJ251bWJlcicgJiYgdHlwZW9mIGxpZ2h0bmVzcyA9PT0gJ251bWJlcicgJiYgdHlwZW9mIGFscGhhID09PSAnbnVtYmVyJykge1xuICAgIHJldHVybiBhbHBoYSA+PSAxID8gKDAsIF9oc2xUb0hleC5kZWZhdWx0KSh2YWx1ZSwgc2F0dXJhdGlvbiwgbGlnaHRuZXNzKSA6IFwicmdiYShcIiArICgwLCBfaHNsVG9SZ2IuZGVmYXVsdCkodmFsdWUsIHNhdHVyYXRpb24sIGxpZ2h0bmVzcykgKyBcIixcIiArIGFscGhhICsgXCIpXCI7XG4gIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiBzYXR1cmF0aW9uID09PSB1bmRlZmluZWQgJiYgbGlnaHRuZXNzID09PSB1bmRlZmluZWQgJiYgYWxwaGEgPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiB2YWx1ZS5hbHBoYSA+PSAxID8gKDAsIF9oc2xUb0hleC5kZWZhdWx0KSh2YWx1ZS5odWUsIHZhbHVlLnNhdHVyYXRpb24sIHZhbHVlLmxpZ2h0bmVzcykgOiBcInJnYmEoXCIgKyAoMCwgX2hzbFRvUmdiLmRlZmF1bHQpKHZhbHVlLmh1ZSwgdmFsdWUuc2F0dXJhdGlvbiwgdmFsdWUubGlnaHRuZXNzKSArIFwiLFwiICsgdmFsdWUuYWxwaGEgKyBcIilcIjtcbiAgfVxuXG4gIHRocm93IG5ldyBfZXJyb3JzLmRlZmF1bHQoMik7XG59XG5cbnZhciBfZGVmYXVsdCA9IGhzbGE7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX3JlZHVjZUhleFZhbHVlID1cbi8qI19fUFVSRV9fKi9cbl9pbnRlcm9wUmVxdWlyZURlZmF1bHQoXG4vKiNfX1BVUkVfXyovXG5yZXF1aXJlKFwiLi4vaW50ZXJuYWxIZWxwZXJzL19yZWR1Y2VIZXhWYWx1ZVwiKSk7XG5cbnZhciBfbnVtYmVyVG9IZXggPVxuLyojX19QVVJFX18qL1xuX2ludGVyb3BSZXF1aXJlRGVmYXVsdChcbi8qI19fUFVSRV9fKi9cbnJlcXVpcmUoXCIuLi9pbnRlcm5hbEhlbHBlcnMvX251bWJlclRvSGV4XCIpKTtcblxudmFyIF9lcnJvcnMgPVxuLyojX19QVVJFX18qL1xuX2ludGVyb3BSZXF1aXJlRGVmYXVsdChcbi8qI19fUFVSRV9fKi9cbnJlcXVpcmUoXCIuLi9pbnRlcm5hbEhlbHBlcnMvX2Vycm9yc1wiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbi8qKlxuICogUmV0dXJucyBhIHN0cmluZyB2YWx1ZSBmb3IgdGhlIGNvbG9yLiBUaGUgcmV0dXJuZWQgcmVzdWx0IGlzIHRoZSBzbWFsbGVzdCBwb3NzaWJsZSBoZXggbm90YXRpb24uXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFN0eWxlcyBhcyBvYmplY3QgdXNhZ2VcbiAqIGNvbnN0IHN0eWxlcyA9IHtcbiAqICAgYmFja2dyb3VuZDogcmdiKDI1NSwgMjA1LCAxMDApLFxuICogICBiYWNrZ3JvdW5kOiByZ2IoeyByZWQ6IDI1NSwgZ3JlZW46IDIwNSwgYmx1ZTogMTAwIH0pLFxuICogfVxuICpcbiAqIC8vIHN0eWxlZC1jb21wb25lbnRzIHVzYWdlXG4gKiBjb25zdCBkaXYgPSBzdHlsZWQuZGl2YFxuICogICBiYWNrZ3JvdW5kOiAke3JnYigyNTUsIDIwNSwgMTAwKX07XG4gKiAgIGJhY2tncm91bmQ6ICR7cmdiKHsgcmVkOiAyNTUsIGdyZWVuOiAyMDUsIGJsdWU6IDEwMCB9KX07XG4gKiBgXG4gKlxuICogLy8gQ1NTIGluIEpTIE91dHB1dFxuICpcbiAqIGVsZW1lbnQge1xuICogICBiYWNrZ3JvdW5kOiBcIiNmZmNkNjRcIjtcbiAqICAgYmFja2dyb3VuZDogXCIjZmZjZDY0XCI7XG4gKiB9XG4gKi9cbmZ1bmN0aW9uIHJnYih2YWx1ZSwgZ3JlZW4sIGJsdWUpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicgJiYgdHlwZW9mIGdyZWVuID09PSAnbnVtYmVyJyAmJiB0eXBlb2YgYmx1ZSA9PT0gJ251bWJlcicpIHtcbiAgICByZXR1cm4gKDAsIF9yZWR1Y2VIZXhWYWx1ZS5kZWZhdWx0KShcIiNcIiArICgwLCBfbnVtYmVyVG9IZXguZGVmYXVsdCkodmFsdWUpICsgKDAsIF9udW1iZXJUb0hleC5kZWZhdWx0KShncmVlbikgKyAoMCwgX251bWJlclRvSGV4LmRlZmF1bHQpKGJsdWUpKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIGdyZWVuID09PSB1bmRlZmluZWQgJiYgYmx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuICgwLCBfcmVkdWNlSGV4VmFsdWUuZGVmYXVsdCkoXCIjXCIgKyAoMCwgX251bWJlclRvSGV4LmRlZmF1bHQpKHZhbHVlLnJlZCkgKyAoMCwgX251bWJlclRvSGV4LmRlZmF1bHQpKHZhbHVlLmdyZWVuKSArICgwLCBfbnVtYmVyVG9IZXguZGVmYXVsdCkodmFsdWUuYmx1ZSkpO1xuICB9XG5cbiAgdGhyb3cgbmV3IF9lcnJvcnMuZGVmYXVsdCg2KTtcbn1cblxudmFyIF9kZWZhdWx0ID0gcmdiO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIF9wYXJzZVRvUmdiID1cbi8qI19fUFVSRV9fKi9cbl9pbnRlcm9wUmVxdWlyZURlZmF1bHQoXG4vKiNfX1BVUkVfXyovXG5yZXF1aXJlKFwiLi9wYXJzZVRvUmdiXCIpKTtcblxudmFyIF9yZ2IgPVxuLyojX19QVVJFX18qL1xuX2ludGVyb3BSZXF1aXJlRGVmYXVsdChcbi8qI19fUFVSRV9fKi9cbnJlcXVpcmUoXCIuL3JnYlwiKSk7XG5cbnZhciBfZXJyb3JzID1cbi8qI19fUFVSRV9fKi9cbl9pbnRlcm9wUmVxdWlyZURlZmF1bHQoXG4vKiNfX1BVUkVfXyovXG5yZXF1aXJlKFwiLi4vaW50ZXJuYWxIZWxwZXJzL19lcnJvcnNcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG4vKipcbiAqIFJldHVybnMgYSBzdHJpbmcgdmFsdWUgZm9yIHRoZSBjb2xvci4gVGhlIHJldHVybmVkIHJlc3VsdCBpcyB0aGUgc21hbGxlc3QgcG9zc2libGUgcmdiYSBvciBoZXggbm90YXRpb24uXG4gKlxuICogQ2FuIGFsc28gYmUgdXNlZCB0byBmYWRlIGEgY29sb3IgYnkgcGFzc2luZyBhIGhleCB2YWx1ZSBvciBuYW1lZCBDU1MgY29sb3IgYWxvbmcgd2l0aCBhbiBhbHBoYSB2YWx1ZS5cbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gU3R5bGVzIGFzIG9iamVjdCB1c2FnZVxuICogY29uc3Qgc3R5bGVzID0ge1xuICogICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjA1LCAxMDAsIDAuNyksXG4gKiAgIGJhY2tncm91bmQ6IHJnYmEoeyByZWQ6IDI1NSwgZ3JlZW46IDIwNSwgYmx1ZTogMTAwLCBhbHBoYTogMC43IH0pLFxuICogICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjA1LCAxMDAsIDEpLFxuICogICBiYWNrZ3JvdW5kOiByZ2JhKCcjZmZmZmZmJywgMC40KSxcbiAqICAgYmFja2dyb3VuZDogcmdiYSgnYmxhY2snLCAwLjcpLFxuICogfVxuICpcbiAqIC8vIHN0eWxlZC1jb21wb25lbnRzIHVzYWdlXG4gKiBjb25zdCBkaXYgPSBzdHlsZWQuZGl2YFxuICogICBiYWNrZ3JvdW5kOiAke3JnYmEoMjU1LCAyMDUsIDEwMCwgMC43KX07XG4gKiAgIGJhY2tncm91bmQ6ICR7cmdiYSh7IHJlZDogMjU1LCBncmVlbjogMjA1LCBibHVlOiAxMDAsIGFscGhhOiAwLjcgfSl9O1xuICogICBiYWNrZ3JvdW5kOiAke3JnYmEoMjU1LCAyMDUsIDEwMCwgMSl9O1xuICogICBiYWNrZ3JvdW5kOiAke3JnYmEoJyNmZmZmZmYnLCAwLjQpfTtcbiAqICAgYmFja2dyb3VuZDogJHtyZ2JhKCdibGFjaycsIDAuNyl9O1xuICogYFxuICpcbiAqIC8vIENTUyBpbiBKUyBPdXRwdXRcbiAqXG4gKiBlbGVtZW50IHtcbiAqICAgYmFja2dyb3VuZDogXCJyZ2JhKDI1NSwyMDUsMTAwLDAuNylcIjtcbiAqICAgYmFja2dyb3VuZDogXCJyZ2JhKDI1NSwyMDUsMTAwLDAuNylcIjtcbiAqICAgYmFja2dyb3VuZDogXCIjZmZjZDY0XCI7XG4gKiAgIGJhY2tncm91bmQ6IFwicmdiYSgyNTUsMjU1LDI1NSwwLjQpXCI7XG4gKiAgIGJhY2tncm91bmQ6IFwicmdiYSgwLDAsMCwwLjcpXCI7XG4gKiB9XG4gKi9cbmZ1bmN0aW9uIHJnYmEoZmlyc3RWYWx1ZSwgc2Vjb25kVmFsdWUsIHRoaXJkVmFsdWUsIGZvdXJ0aFZhbHVlKSB7XG4gIGlmICh0eXBlb2YgZmlyc3RWYWx1ZSA9PT0gJ3N0cmluZycgJiYgdHlwZW9mIHNlY29uZFZhbHVlID09PSAnbnVtYmVyJykge1xuICAgIHZhciByZ2JWYWx1ZSA9ICgwLCBfcGFyc2VUb1JnYi5kZWZhdWx0KShmaXJzdFZhbHVlKTtcbiAgICByZXR1cm4gXCJyZ2JhKFwiICsgcmdiVmFsdWUucmVkICsgXCIsXCIgKyByZ2JWYWx1ZS5ncmVlbiArIFwiLFwiICsgcmdiVmFsdWUuYmx1ZSArIFwiLFwiICsgc2Vjb25kVmFsdWUgKyBcIilcIjtcbiAgfSBlbHNlIGlmICh0eXBlb2YgZmlyc3RWYWx1ZSA9PT0gJ251bWJlcicgJiYgdHlwZW9mIHNlY29uZFZhbHVlID09PSAnbnVtYmVyJyAmJiB0eXBlb2YgdGhpcmRWYWx1ZSA9PT0gJ251bWJlcicgJiYgdHlwZW9mIGZvdXJ0aFZhbHVlID09PSAnbnVtYmVyJykge1xuICAgIHJldHVybiBmb3VydGhWYWx1ZSA+PSAxID8gKDAsIF9yZ2IuZGVmYXVsdCkoZmlyc3RWYWx1ZSwgc2Vjb25kVmFsdWUsIHRoaXJkVmFsdWUpIDogXCJyZ2JhKFwiICsgZmlyc3RWYWx1ZSArIFwiLFwiICsgc2Vjb25kVmFsdWUgKyBcIixcIiArIHRoaXJkVmFsdWUgKyBcIixcIiArIGZvdXJ0aFZhbHVlICsgXCIpXCI7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGZpcnN0VmFsdWUgPT09ICdvYmplY3QnICYmIHNlY29uZFZhbHVlID09PSB1bmRlZmluZWQgJiYgdGhpcmRWYWx1ZSA9PT0gdW5kZWZpbmVkICYmIGZvdXJ0aFZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gZmlyc3RWYWx1ZS5hbHBoYSA+PSAxID8gKDAsIF9yZ2IuZGVmYXVsdCkoZmlyc3RWYWx1ZS5yZWQsIGZpcnN0VmFsdWUuZ3JlZW4sIGZpcnN0VmFsdWUuYmx1ZSkgOiBcInJnYmEoXCIgKyBmaXJzdFZhbHVlLnJlZCArIFwiLFwiICsgZmlyc3RWYWx1ZS5ncmVlbiArIFwiLFwiICsgZmlyc3RWYWx1ZS5ibHVlICsgXCIsXCIgKyBmaXJzdFZhbHVlLmFscGhhICsgXCIpXCI7XG4gIH1cblxuICB0aHJvdyBuZXcgX2Vycm9ycy5kZWZhdWx0KDcpO1xufVxuXG52YXIgX2RlZmF1bHQgPSByZ2JhO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIF9oc2wgPVxuLyojX19QVVJFX18qL1xuX2ludGVyb3BSZXF1aXJlRGVmYXVsdChcbi8qI19fUFVSRV9fKi9cbnJlcXVpcmUoXCIuL2hzbFwiKSk7XG5cbnZhciBfaHNsYSA9XG4vKiNfX1BVUkVfXyovXG5faW50ZXJvcFJlcXVpcmVEZWZhdWx0KFxuLyojX19QVVJFX18qL1xucmVxdWlyZShcIi4vaHNsYVwiKSk7XG5cbnZhciBfcmdiID1cbi8qI19fUFVSRV9fKi9cbl9pbnRlcm9wUmVxdWlyZURlZmF1bHQoXG4vKiNfX1BVUkVfXyovXG5yZXF1aXJlKFwiLi9yZ2JcIikpO1xuXG52YXIgX3JnYmEgPVxuLyojX19QVVJFX18qL1xuX2ludGVyb3BSZXF1aXJlRGVmYXVsdChcbi8qI19fUFVSRV9fKi9cbnJlcXVpcmUoXCIuL3JnYmFcIikpO1xuXG52YXIgX2Vycm9ycyA9XG4vKiNfX1BVUkVfXyovXG5faW50ZXJvcFJlcXVpcmVEZWZhdWx0KFxuLyojX19QVVJFX18qL1xucmVxdWlyZShcIi4uL2ludGVybmFsSGVscGVycy9fZXJyb3JzXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIGlzUmdiID0gZnVuY3Rpb24gaXNSZ2IoY29sb3IpIHtcbiAgcmV0dXJuIHR5cGVvZiBjb2xvci5yZWQgPT09ICdudW1iZXInICYmIHR5cGVvZiBjb2xvci5ncmVlbiA9PT0gJ251bWJlcicgJiYgdHlwZW9mIGNvbG9yLmJsdWUgPT09ICdudW1iZXInICYmICh0eXBlb2YgY29sb3IuYWxwaGEgIT09ICdudW1iZXInIHx8IHR5cGVvZiBjb2xvci5hbHBoYSA9PT0gJ3VuZGVmaW5lZCcpO1xufTtcblxudmFyIGlzUmdiYSA9IGZ1bmN0aW9uIGlzUmdiYShjb2xvcikge1xuICByZXR1cm4gdHlwZW9mIGNvbG9yLnJlZCA9PT0gJ251bWJlcicgJiYgdHlwZW9mIGNvbG9yLmdyZWVuID09PSAnbnVtYmVyJyAmJiB0eXBlb2YgY29sb3IuYmx1ZSA9PT0gJ251bWJlcicgJiYgdHlwZW9mIGNvbG9yLmFscGhhID09PSAnbnVtYmVyJztcbn07XG5cbnZhciBpc0hzbCA9IGZ1bmN0aW9uIGlzSHNsKGNvbG9yKSB7XG4gIHJldHVybiB0eXBlb2YgY29sb3IuaHVlID09PSAnbnVtYmVyJyAmJiB0eXBlb2YgY29sb3Iuc2F0dXJhdGlvbiA9PT0gJ251bWJlcicgJiYgdHlwZW9mIGNvbG9yLmxpZ2h0bmVzcyA9PT0gJ251bWJlcicgJiYgKHR5cGVvZiBjb2xvci5hbHBoYSAhPT0gJ251bWJlcicgfHwgdHlwZW9mIGNvbG9yLmFscGhhID09PSAndW5kZWZpbmVkJyk7XG59O1xuXG52YXIgaXNIc2xhID0gZnVuY3Rpb24gaXNIc2xhKGNvbG9yKSB7XG4gIHJldHVybiB0eXBlb2YgY29sb3IuaHVlID09PSAnbnVtYmVyJyAmJiB0eXBlb2YgY29sb3Iuc2F0dXJhdGlvbiA9PT0gJ251bWJlcicgJiYgdHlwZW9mIGNvbG9yLmxpZ2h0bmVzcyA9PT0gJ251bWJlcicgJiYgdHlwZW9mIGNvbG9yLmFscGhhID09PSAnbnVtYmVyJztcbn07XG4vKipcbiAqIENvbnZlcnRzIGEgUmdiQ29sb3IsIFJnYmFDb2xvciwgSHNsQ29sb3Igb3IgSHNsYUNvbG9yIG9iamVjdCB0byBhIGNvbG9yIHN0cmluZy5cbiAqIFRoaXMgdXRpbCBpcyB1c2VmdWwgaW4gY2FzZSB5b3Ugb25seSBrbm93IG9uIHJ1bnRpbWUgd2hpY2ggY29sb3Igb2JqZWN0IGlzXG4gKiB1c2VkLiBPdGhlcndpc2Ugd2UgcmVjb21tZW5kIHRvIHJlbHkgb24gYHJnYmAsIGByZ2JhYCwgYGhzbGAgb3IgYGhzbGFgLlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBTdHlsZXMgYXMgb2JqZWN0IHVzYWdlXG4gKiBjb25zdCBzdHlsZXMgPSB7XG4gKiAgIGJhY2tncm91bmQ6IHRvQ29sb3JTdHJpbmcoeyByZWQ6IDI1NSwgZ3JlZW46IDIwNSwgYmx1ZTogMTAwIH0pLFxuICogICBiYWNrZ3JvdW5kOiB0b0NvbG9yU3RyaW5nKHsgcmVkOiAyNTUsIGdyZWVuOiAyMDUsIGJsdWU6IDEwMCwgYWxwaGE6IDAuNzIgfSksXG4gKiAgIGJhY2tncm91bmQ6IHRvQ29sb3JTdHJpbmcoeyBodWU6IDI0MCwgc2F0dXJhdGlvbjogMSwgbGlnaHRuZXNzOiAwLjUgfSksXG4gKiAgIGJhY2tncm91bmQ6IHRvQ29sb3JTdHJpbmcoeyBodWU6IDM2MCwgc2F0dXJhdGlvbjogMC43NSwgbGlnaHRuZXNzOiAwLjQsIGFscGhhOiAwLjcyIH0pLFxuICogfVxuICpcbiAqIC8vIHN0eWxlZC1jb21wb25lbnRzIHVzYWdlXG4gKiBjb25zdCBkaXYgPSBzdHlsZWQuZGl2YFxuICogICBiYWNrZ3JvdW5kOiAke3RvQ29sb3JTdHJpbmcoeyByZWQ6IDI1NSwgZ3JlZW46IDIwNSwgYmx1ZTogMTAwIH0pfTtcbiAqICAgYmFja2dyb3VuZDogJHt0b0NvbG9yU3RyaW5nKHsgcmVkOiAyNTUsIGdyZWVuOiAyMDUsIGJsdWU6IDEwMCwgYWxwaGE6IDAuNzIgfSl9O1xuICogICBiYWNrZ3JvdW5kOiAke3RvQ29sb3JTdHJpbmcoeyBodWU6IDI0MCwgc2F0dXJhdGlvbjogMSwgbGlnaHRuZXNzOiAwLjUgfSl9O1xuICogICBiYWNrZ3JvdW5kOiAke3RvQ29sb3JTdHJpbmcoeyBodWU6IDM2MCwgc2F0dXJhdGlvbjogMC43NSwgbGlnaHRuZXNzOiAwLjQsIGFscGhhOiAwLjcyIH0pfTtcbiAqIGBcbiAqXG4gKiAvLyBDU1MgaW4gSlMgT3V0cHV0XG4gKiBlbGVtZW50IHtcbiAqICAgYmFja2dyb3VuZDogXCIjZmZjZDY0XCI7XG4gKiAgIGJhY2tncm91bmQ6IFwicmdiYSgyNTUsMjA1LDEwMCwwLjcyKVwiO1xuICogICBiYWNrZ3JvdW5kOiBcIiMwMGZcIjtcbiAqICAgYmFja2dyb3VuZDogXCJyZ2JhKDE3OSwyNSwyNSwwLjcyKVwiO1xuICogfVxuICovXG5cblxuZnVuY3Rpb24gdG9Db2xvclN0cmluZyhjb2xvcikge1xuICBpZiAodHlwZW9mIGNvbG9yICE9PSAnb2JqZWN0JykgdGhyb3cgbmV3IF9lcnJvcnMuZGVmYXVsdCg4KTtcbiAgaWYgKGlzUmdiYShjb2xvcikpIHJldHVybiAoMCwgX3JnYmEuZGVmYXVsdCkoY29sb3IpO1xuICBpZiAoaXNSZ2IoY29sb3IpKSByZXR1cm4gKDAsIF9yZ2IuZGVmYXVsdCkoY29sb3IpO1xuICBpZiAoaXNIc2xhKGNvbG9yKSkgcmV0dXJuICgwLCBfaHNsYS5kZWZhdWx0KShjb2xvcik7XG4gIGlmIChpc0hzbChjb2xvcikpIHJldHVybiAoMCwgX2hzbC5kZWZhdWx0KShjb2xvcik7XG4gIHRocm93IG5ldyBfZXJyb3JzLmRlZmF1bHQoOCk7XG59XG5cbnZhciBfZGVmYXVsdCA9IHRvQ29sb3JTdHJpbmc7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX2N1cnJ5ID1cbi8qI19fUFVSRV9fKi9cbl9pbnRlcm9wUmVxdWlyZURlZmF1bHQoXG4vKiNfX1BVUkVfXyovXG5yZXF1aXJlKFwiLi4vaW50ZXJuYWxIZWxwZXJzL19jdXJyeVwiKSk7XG5cbnZhciBfZ3VhcmQgPVxuLyojX19QVVJFX18qL1xuX2ludGVyb3BSZXF1aXJlRGVmYXVsdChcbi8qI19fUFVSRV9fKi9cbnJlcXVpcmUoXCIuLi9pbnRlcm5hbEhlbHBlcnMvX2d1YXJkXCIpKTtcblxudmFyIF9wYXJzZVRvSHNsID1cbi8qI19fUFVSRV9fKi9cbl9pbnRlcm9wUmVxdWlyZURlZmF1bHQoXG4vKiNfX1BVUkVfXyovXG5yZXF1aXJlKFwiLi9wYXJzZVRvSHNsXCIpKTtcblxudmFyIF90b0NvbG9yU3RyaW5nID1cbi8qI19fUFVSRV9fKi9cbl9pbnRlcm9wUmVxdWlyZURlZmF1bHQoXG4vKiNfX1BVUkVfXyovXG5yZXF1aXJlKFwiLi90b0NvbG9yU3RyaW5nXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2V4dGVuZHMoKSB7IF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTsgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH1cblxuLyoqXG4gKiBSZXR1cm5zIGEgc3RyaW5nIHZhbHVlIGZvciB0aGUgZGFya2VuZWQgY29sb3IuXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFN0eWxlcyBhcyBvYmplY3QgdXNhZ2VcbiAqIGNvbnN0IHN0eWxlcyA9IHtcbiAqICAgYmFja2dyb3VuZDogZGFya2VuKDAuMiwgJyNGRkNENjQnKSxcbiAqICAgYmFja2dyb3VuZDogZGFya2VuKCcwLjInLCAncmdiYSgyNTUsMjA1LDEwMCwwLjcpJyksXG4gKiB9XG4gKlxuICogLy8gc3R5bGVkLWNvbXBvbmVudHMgdXNhZ2VcbiAqIGNvbnN0IGRpdiA9IHN0eWxlZC5kaXZgXG4gKiAgIGJhY2tncm91bmQ6ICR7ZGFya2VuKDAuMiwgJyNGRkNENjQnKX07XG4gKiAgIGJhY2tncm91bmQ6ICR7ZGFya2VuKCcwLjInLCAncmdiYSgyNTUsMjA1LDEwMCwwLjcpJyl9O1xuICogYFxuICpcbiAqIC8vIENTUyBpbiBKUyBPdXRwdXRcbiAqXG4gKiBlbGVtZW50IHtcbiAqICAgYmFja2dyb3VuZDogXCIjZmZiZDMxXCI7XG4gKiAgIGJhY2tncm91bmQ6IFwicmdiYSgyNTUsMTg5LDQ5LDAuNylcIjtcbiAqIH1cbiAqL1xuZnVuY3Rpb24gZGFya2VuKGFtb3VudCwgY29sb3IpIHtcbiAgaWYgKGNvbG9yID09PSAndHJhbnNwYXJlbnQnKSByZXR1cm4gY29sb3I7XG4gIHZhciBoc2xDb2xvciA9ICgwLCBfcGFyc2VUb0hzbC5kZWZhdWx0KShjb2xvcik7XG4gIHJldHVybiAoMCwgX3RvQ29sb3JTdHJpbmcuZGVmYXVsdCkoX2V4dGVuZHMoe30sIGhzbENvbG9yLCB7XG4gICAgbGlnaHRuZXNzOiAoMCwgX2d1YXJkLmRlZmF1bHQpKDAsIDEsIGhzbENvbG9yLmxpZ2h0bmVzcyAtIHBhcnNlRmxvYXQoYW1vdW50KSlcbiAgfSkpO1xufSAvLyBwcmV0dGllci1pZ25vcmVcblxuXG52YXIgY3VycmllZERhcmtlbiA9XG4vKiNfX1BVUkVfXyovXG4oMCwgX2N1cnJ5LmRlZmF1bHRcbi8qIDo6PG51bWJlciB8IHN0cmluZywgc3RyaW5nLCBzdHJpbmc+ICovXG4pKGRhcmtlbik7XG52YXIgX2RlZmF1bHQgPSBjdXJyaWVkRGFya2VuO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIF9wYXJzZVRvUmdiID1cbi8qI19fUFVSRV9fKi9cbl9pbnRlcm9wUmVxdWlyZURlZmF1bHQoXG4vKiNfX1BVUkVfXyovXG5yZXF1aXJlKFwiLi9wYXJzZVRvUmdiXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuLyoqXG4gKiBSZXR1cm5zIGEgbnVtYmVyIChmbG9hdCkgcmVwcmVzZW50aW5nIHRoZSBsdW1pbmFuY2Ugb2YgYSBjb2xvci5cbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gU3R5bGVzIGFzIG9iamVjdCB1c2FnZVxuICogY29uc3Qgc3R5bGVzID0ge1xuICogICBiYWNrZ3JvdW5kOiBnZXRMdW1pbmFuY2UoJyNDQ0NENjQnKSA+PSBnZXRMdW1pbmFuY2UoJyMwMDAwZmYnKSA/ICcjQ0NDRDY0JyA6ICcjMDAwMGZmJyxcbiAqICAgYmFja2dyb3VuZDogZ2V0THVtaW5hbmNlKCdyZ2JhKDU4LCAxMzMsIDI1NSwgMSknKSA+PSBnZXRMdW1pbmFuY2UoJ3JnYmEoMjU1LCA1NywgMTQ5LCAxKScpID9cbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAncmdiYSg1OCwgMTMzLCAyNTUsIDEpJyA6XG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3JnYmEoMjU1LCA1NywgMTQ5LCAxKScsXG4gKiB9XG4gKlxuICogLy8gc3R5bGVkLWNvbXBvbmVudHMgdXNhZ2VcbiAqIGNvbnN0IGRpdiA9IHN0eWxlZC5kaXZgXG4gKiAgIGJhY2tncm91bmQ6ICR7Z2V0THVtaW5hbmNlKCcjQ0NDRDY0JykgPj0gZ2V0THVtaW5hbmNlKCcjMDAwMGZmJykgPyAnI0NDQ0Q2NCcgOiAnIzAwMDBmZid9O1xuICogICBiYWNrZ3JvdW5kOiAke2dldEx1bWluYW5jZSgncmdiYSg1OCwgMTMzLCAyNTUsIDEpJykgPj0gZ2V0THVtaW5hbmNlKCdyZ2JhKDI1NSwgNTcsIDE0OSwgMSknKSA/XG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3JnYmEoNTgsIDEzMywgMjU1LCAxKScgOlxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICdyZ2JhKDI1NSwgNTcsIDE0OSwgMSknfTtcbiAqXG4gKiAvLyBDU1MgaW4gSlMgT3V0cHV0XG4gKlxuICogZGl2IHtcbiAqICAgYmFja2dyb3VuZDogXCIjQ0NDRDY0XCI7XG4gKiAgIGJhY2tncm91bmQ6IFwicmdiYSg1OCwgMTMzLCAyNTUsIDEpXCI7XG4gKiB9XG4gKi9cbmZ1bmN0aW9uIGdldEx1bWluYW5jZShjb2xvcikge1xuICBpZiAoY29sb3IgPT09ICd0cmFuc3BhcmVudCcpIHJldHVybiAwO1xuICB2YXIgcmdiQ29sb3IgPSAoMCwgX3BhcnNlVG9SZ2IuZGVmYXVsdCkoY29sb3IpO1xuXG4gIHZhciBfT2JqZWN0JGtleXMkbWFwID0gT2JqZWN0LmtleXMocmdiQ29sb3IpLm1hcChmdW5jdGlvbiAoa2V5KSB7XG4gICAgdmFyIGNoYW5uZWwgPSByZ2JDb2xvcltrZXldIC8gMjU1O1xuICAgIHJldHVybiBjaGFubmVsIDw9IDAuMDM5MjggPyBjaGFubmVsIC8gMTIuOTIgOiBNYXRoLnBvdygoY2hhbm5lbCArIDAuMDU1KSAvIDEuMDU1LCAyLjQpO1xuICB9KSxcbiAgICAgIHIgPSBfT2JqZWN0JGtleXMkbWFwWzBdLFxuICAgICAgZyA9IF9PYmplY3Qka2V5cyRtYXBbMV0sXG4gICAgICBiID0gX09iamVjdCRrZXlzJG1hcFsyXTtcblxuICByZXR1cm4gcGFyc2VGbG9hdCgoMC4yMTI2ICogciArIDAuNzE1MiAqIGcgKyAwLjA3MjIgKiBiKS50b0ZpeGVkKDMpKTtcbn1cblxudmFyIF9kZWZhdWx0ID0gZ2V0THVtaW5hbmNlO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDsiLCJpbXBvcnQgZ2V0THVtaW5hbmNlIGZyb20gJ3BvbGlzaGVkL2xpYi9jb2xvci9nZXRMdW1pbmFuY2UnO1xuaW1wb3J0IHsgVGhlbWVUeXBlIH0gZnJvbSAnLi4vdHlwZXMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmaW5kQ29sb3JJbnZlcnQoeyBibGFjaywgd2hpdGUgfTogVGhlbWVUeXBlLCBjb2xvcjogc3RyaW5nKSB7XG4gIGlmICghY29sb3IgfHwgZ2V0THVtaW5hbmNlKGNvbG9yKSA+IDAuNTUpIHtcbiAgICByZXR1cm4gYmxhY2s7XG4gIH1cbiAgcmV0dXJuIHdoaXRlO1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBfY3VycnkgPVxuLyojX19QVVJFX18qL1xuX2ludGVyb3BSZXF1aXJlRGVmYXVsdChcbi8qI19fUFVSRV9fKi9cbnJlcXVpcmUoXCIuLi9pbnRlcm5hbEhlbHBlcnMvX2N1cnJ5XCIpKTtcblxudmFyIF9ndWFyZCA9XG4vKiNfX1BVUkVfXyovXG5faW50ZXJvcFJlcXVpcmVEZWZhdWx0KFxuLyojX19QVVJFX18qL1xucmVxdWlyZShcIi4uL2ludGVybmFsSGVscGVycy9fZ3VhcmRcIikpO1xuXG52YXIgX3JnYmEgPVxuLyojX19QVVJFX18qL1xuX2ludGVyb3BSZXF1aXJlRGVmYXVsdChcbi8qI19fUFVSRV9fKi9cbnJlcXVpcmUoXCIuL3JnYmFcIikpO1xuXG52YXIgX3BhcnNlVG9SZ2IgPVxuLyojX19QVVJFX18qL1xuX2ludGVyb3BSZXF1aXJlRGVmYXVsdChcbi8qI19fUFVSRV9fKi9cbnJlcXVpcmUoXCIuL3BhcnNlVG9SZ2JcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfZXh0ZW5kcygpIHsgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9OyByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfVxuXG4vKipcbiAqIERlY3JlYXNlcyB0aGUgb3BhY2l0eSBvZiBhIGNvbG9yLiBJdHMgcmFuZ2UgZm9yIHRoZSBhbW91bnQgaXMgYmV0d2VlbiAwIHRvIDEuXG4gKlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBTdHlsZXMgYXMgb2JqZWN0IHVzYWdlXG4gKiBjb25zdCBzdHlsZXMgPSB7XG4gKiAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50aXplKDAuMSwgJyNmZmYnKTtcbiAqICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnRpemUoMC4yLCAnaHNsKDAsIDAlLCAxMDAlKScpLFxuICogICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudGl6ZSgnMC41JywgJ3JnYmEoMjU1LCAwLCAwLCAwLjgpJyksXG4gKiB9XG4gKlxuICogLy8gc3R5bGVkLWNvbXBvbmVudHMgdXNhZ2VcbiAqIGNvbnN0IGRpdiA9IHN0eWxlZC5kaXZgXG4gKiAgIGJhY2tncm91bmQ6ICR7dHJhbnNwYXJlbnRpemUoMC4xLCAnI2ZmZicpfTtcbiAqICAgYmFja2dyb3VuZDogJHt0cmFuc3BhcmVudGl6ZSgwLjIsICdoc2woMCwgMCUsIDEwMCUpJyl9LFxuICogICBiYWNrZ3JvdW5kOiAke3RyYW5zcGFyZW50aXplKCcwLjUnLCAncmdiYSgyNTUsIDAsIDAsIDAuOCknKX0sXG4gKiBgXG4gKlxuICogLy8gQ1NTIGluIEpTIE91dHB1dFxuICpcbiAqIGVsZW1lbnQge1xuICogICBiYWNrZ3JvdW5kOiBcInJnYmEoMjU1LDI1NSwyNTUsMC45KVwiO1xuICogICBiYWNrZ3JvdW5kOiBcInJnYmEoMjU1LDI1NSwyNTUsMC44KVwiO1xuICogICBiYWNrZ3JvdW5kOiBcInJnYmEoMjU1LDAsMCwwLjMpXCI7XG4gKiB9XG4gKi9cbmZ1bmN0aW9uIHRyYW5zcGFyZW50aXplKGFtb3VudCwgY29sb3IpIHtcbiAgaWYgKGNvbG9yID09PSAndHJhbnNwYXJlbnQnKSByZXR1cm4gY29sb3I7XG4gIHZhciBwYXJzZWRDb2xvciA9ICgwLCBfcGFyc2VUb1JnYi5kZWZhdWx0KShjb2xvcik7XG4gIHZhciBhbHBoYSA9IHR5cGVvZiBwYXJzZWRDb2xvci5hbHBoYSA9PT0gJ251bWJlcicgPyBwYXJzZWRDb2xvci5hbHBoYSA6IDE7XG5cbiAgdmFyIGNvbG9yV2l0aEFscGhhID0gX2V4dGVuZHMoe30sIHBhcnNlZENvbG9yLCB7XG4gICAgYWxwaGE6ICgwLCBfZ3VhcmQuZGVmYXVsdCkoMCwgMSwgKGFscGhhICogMTAwIC0gcGFyc2VGbG9hdChhbW91bnQpICogMTAwKSAvIDEwMClcbiAgfSk7XG5cbiAgcmV0dXJuICgwLCBfcmdiYS5kZWZhdWx0KShjb2xvcldpdGhBbHBoYSk7XG59IC8vIHByZXR0aWVyLWlnbm9yZVxuXG5cbnZhciBjdXJyaWVkVHJhbnNwYXJlbnRpemUgPVxuLyojX19QVVJFX18qL1xuKDAsIF9jdXJyeS5kZWZhdWx0XG4vKiA6OjxudW1iZXIgfCBzdHJpbmcsIHN0cmluZywgc3RyaW5nPiAqL1xuKSh0cmFuc3BhcmVudGl6ZSk7XG52YXIgX2RlZmF1bHQgPSBjdXJyaWVkVHJhbnNwYXJlbnRpemU7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0OyIsImltcG9ydCB7IGNzcyB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB0cmFuc3BhcmVudGl6ZSBmcm9tICdwb2xpc2hlZC9saWIvY29sb3IvdHJhbnNwYXJlbnRpemUnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBib3hTaGFkb3coc2l6ZTogc3RyaW5nLCBjb2xvcjogc3RyaW5nLCBhbW91bnQ/OiBudW1iZXIpIHtcbiAgY29uc3Qgc2hhZG93Q29sb3IgPSBhbW91bnQgPyB0cmFuc3BhcmVudGl6ZShhbW91bnQsIGNvbG9yKSA6IGNvbG9yO1xuICByZXR1cm4gY3NzYGJveC1zaGFkb3c6IDAgMCAwICR7c2l6ZX0gJHtzaGFkb3dDb2xvcn07YDtcbn1cbiIsImltcG9ydCB7IFNpemVUeXBlIH0gZnJvbSAnLi4vdHlwZXMnO1xuXG50eXBlIFNpemVQcm9wc05hbWVUeXBlID0gJ2ZvbnQtc2l6ZScgfCAnaGVpZ2h0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2V0U2l6ZShuYW1lOiBTaXplUHJvcHNOYW1lVHlwZSwgc2l6ZT86IFNpemVUeXBlKSB7XG4gIHN3aXRjaCAoc2l6ZSkge1xuICAgIGNhc2UgJ3NtYWxsJzpcbiAgICAgIHJldHVybiBgJHtuYW1lfTogMC43NXJlbTtgO1xuICAgIGNhc2UgJ21lZGl1bSc6XG4gICAgICByZXR1cm4gYCR7bmFtZX06IDEuMjVyZW07YDtcbiAgICBjYXNlICdsYXJnZSc6XG4gICAgICByZXR1cm4gYCR7bmFtZX06IDEuNXJlbTtgO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gYCR7bmFtZX06IDFyZW07YDtcbiAgfVxufVxuIiwiaW1wb3J0IHsgY3NzIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHRyYW5zcGFyZW50aXplIGZyb20gJ3BvbGlzaGVkL2xpYi9jb2xvci90cmFuc3BhcmVudGl6ZSc7XG5pbXBvcnQgeyBUaGVtZVR5cGUsIENTU1R5cGUgfSBmcm9tICcuLi90eXBlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRpc2FibGVkQ29sb3IodGhlbWU6IFRoZW1lVHlwZSk6IENTU1R5cGUge1xuICBjb25zdCB0ZXh0Q29sb3IgPSB0cmFuc3BhcmVudGl6ZSgwLjE1LCB0aGVtZS50ZXh0RGFyayk7XG4gIGNvbnN0IGJhY2tDb2xvciA9IHRyYW5zcGFyZW50aXplKDAuNTUsIHRoZW1lLmJvcmRlcik7XG4gIHJldHVybiBjc3NgXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICBjb2xvcjogJHt0ZXh0Q29sb3J9O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR7YmFja0NvbG9yfTtcbiAgYDtcbn1cbiIsImltcG9ydCBzdHlsZWQsIHsgY3NzIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgSFRNTEF0dHJpYnV0ZXMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgZGFya2VuIGZyb20gJ3BvbGlzaGVkL2xpYi9jb2xvci9kYXJrZW4nO1xuaW1wb3J0IGZpbmRDb2xvckludmVydCBmcm9tICcuLi8uLi91dGlscy9maW5kQ29sb3JJbnZlcnQnO1xuaW1wb3J0IGJveFNoYWRvdyBmcm9tICcuLi8uLi91dGlscy9ib3hTaGFkb3cnO1xuaW1wb3J0IHNldFNpemUgZnJvbSAnLi4vLi4vdXRpbHMvc2V0U2l6ZSc7XG5pbXBvcnQgZGlzYWJsZWRDb2xvciBmcm9tICcuLi8uLi91dGlscy9kaXNhYmxlZENvbG9yJztcbmltcG9ydCB7IENvbG9yVHlwZSwgVGhlbWVUeXBlLCBTaXplVHlwZSB9IGZyb20gJy4uLy4uL3R5cGVzJztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgdGhlbWU6IFRoZW1lVHlwZTtcbiAgY29sb3I/OiBDb2xvclR5cGU7XG4gIG91dGxpbmU/OiBib29sZWFuO1xuICBkaXNhYmxlZD86IGJvb2xlYW47XG59XG5cbmZ1bmN0aW9uIHNldENvbG9yKHsgdGhlbWUsIGNvbG9yLCBvdXRsaW5lLCBkaXNhYmxlZCB9OiBQcm9wcykge1xuICBpZiAoZGlzYWJsZWQpIHtcbiAgICByZXR1cm4gZGlzYWJsZWRDb2xvcih0aGVtZSk7XG4gIH1cbiAgaWYgKCFjb2xvcikge1xuICAgIHJldHVybiBjc3NgXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lLndoaXRlfTtcbiAgICAgIGJvcmRlci1jb2xvcjogJHt0aGVtZS5ib3JkZXJ9O1xuICAgICAgY29sb3I6ICR7dGhlbWUudGV4dH07XG5cbiAgICAgICY6aG92ZXIge1xuICAgICAgICBib3JkZXItY29sb3I6ICR7dGhlbWUuYm9yZGVySG92ZXJ9O1xuICAgICAgfVxuXG4gICAgICAmOmFjdGl2ZSB7XG4gICAgICAgIGJvcmRlci1jb2xvcjogJHt0aGVtZS5ib3JkZXJBY3RpdmV9O1xuICAgICAgfVxuICAgIGA7XG4gIH1cbiAgaWYgKGNvbG9yID09PSAndGV4dCcpIHtcbiAgICByZXR1cm4gY3NzYFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgY29sb3I6ICR7dGhlbWUudGV4dH07XG5cbiAgICAgICY6aG92ZXJ7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgfVxuICAgIGA7XG4gIH1cblxuICBjb25zdCB0YXJnZXQgPSB0aGVtZVtjb2xvcl0gfHwgY29sb3I7XG4gIGNvbnN0IGludmVydENvbG9yID0gZmluZENvbG9ySW52ZXJ0KHRoZW1lLCB0YXJnZXQpO1xuICBpZiAob3V0bGluZSkge1xuICAgIHJldHVybiBjc3NgXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgIGJvcmRlci1jb2xvcjogJHt0YXJnZXR9O1xuICAgICAgY29sb3I6ICR7dGFyZ2V0fTtcblxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7dGFyZ2V0fTtcbiAgICAgICAgY29sb3I6ICR7aW52ZXJ0Q29sb3J9O1xuICAgICAgfVxuXG4gICAgICAmOmZvY3VzIHtcbiAgICAgICAgJHtib3hTaGFkb3coJzAuMnJlbScsIHRhcmdldCwgMC4yKX1cbiAgICAgIH1cbiAgICBgO1xuICB9XG5cbiAgcmV0dXJuIGNzc2BcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RhcmdldH07XG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBjb2xvcjogJHtpbnZlcnRDb2xvcn07XG4gICAgYm94LXNoYWRvdzogbm9uZTtcblxuICAgICY6aG92ZXIge1xuICAgICAgY29sb3I6ICR7aW52ZXJ0Q29sb3J9O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtkYXJrZW4oMC4wMjUsIHRhcmdldCl9O1xuICAgIH1cblxuICAgICY6YWN0aXZlIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7ZGFya2VuKDAuMDUsIHRhcmdldCl9O1xuICAgIH1cblxuICAgICY6Zm9jdXMge1xuICAgICAgJHtib3hTaGFkb3coJzAuMnJlbScsIHRhcmdldCwgMC4yKX1cbiAgICB9XG4gIGA7XG59XG5cbmludGVyZmFjZSBCdXR0b25Qcm9wcyBleHRlbmRzIEhUTUxBdHRyaWJ1dGVzPEhUTUxCdXR0b25FbGVtZW50PiB7XG4gIC8qKiDjg5zjgr/jg7Pjga7oibIgKi9cbiAgY29sb3I/OiBDb2xvclR5cGU7XG4gIC8qKiDjg5zjgr/jg7Pjga7jgrXjgqTjgrogKi9cbiAgc2l6ZT86IFNpemVUeXBlO1xuICAvKiog6IOM5pmv44GM6YCP5piO44Gq44Oc44K/44Oz44Gn44GZ44KLICovXG4gIG91dGxpbmU/OiBib29sZWFuO1xuICAvKiog5YWo5L2T5bmF44Gu44Oc44K/44Oz44Gn6Kit5a6aICovXG4gIGZ1bGw/OiBib29sZWFuO1xufVxuXG5jb25zdCBCdXR0b24gPSBzdHlsZWQuYnV0dG9uPEJ1dHRvblByb3BzPmBcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdXRsaW5lOiBub25lO1xuICBhcHBlYXJhbmNlOiBub25lO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIHBhZGRpbmc6IDAuMzc1ZW0gMC43NWVtO1xuICBsaW5lLWhlaWdodDogMS41O1xuXG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IGJhY2tncm91bmQtY29sb3IsIGNvbG9yLCBib3gtc2hhZG93O1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAxNTBtcztcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xuXG4gICR7c2V0Q29sb3J9XG4gICR7KHsgc2l6ZSB9KSA9PiBzZXRTaXplKCdmb250LXNpemUnLCBzaXplKX1cbiAgJHsoeyBmdWxsIH0pID0+IGZ1bGwgPyAnd2lkdGg6IDEwMCU7JyA6ICcnfVxuYDtcbkJ1dHRvbi5kaXNwbGF5TmFtZSA9ICdCdXR0b24nO1xuXG5leHBvcnQgZGVmYXVsdCBCdXR0b247XG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBCdXR0b24gZnJvbSAnLic7XG5cbmNvbnN0IEJ1dHRvbkdyb3VwID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXG4gICY6bm90KDpsYXN0LWNoaWxkKSB7XG4gICAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XG4gIH1cblxuICAke0J1dHRvbn0ge1xuICAgIG1hcmdpbjogMDtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuXG4gICAgJjpmaXJzdC1jaGlsZCB7XG4gICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA0cHg7XG4gICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA0cHg7XG4gICAgfVxuXG4gICAgJjpub3QoOmZpcnN0LWNoaWxkKSB7XG4gICAgICBtYXJnaW4tbGVmdDogLTFweDtcbiAgICB9XG5cbiAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDRweDtcbiAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA0cHg7XG4gICAgfVxuICB9XG5gO1xuQnV0dG9uR3JvdXAuZGlzcGxheU5hbWUgPSAnQnV0dG9uR3JvdXAnO1xuXG5leHBvcnQgZGVmYXVsdCBCdXR0b25Hcm91cDtcbiIsImltcG9ydCBzdHlsZWQsIHsgY3NzIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgU2l6ZVR5cGUgfSBmcm9tICcuLi8uLi90eXBlcyc7XG5cbmNvbnN0IHN0cmlwZWRTdHlsZSA9IGNzc2BcbiAgdGJvZHkgPiB0cjpudGgtY2hpbGQob2RkKSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjAyKTtcbiAgfVxuYDtcblxuY29uc3QgaG92ZXJTdHlsZSA9IGNzc2BcbiAgdGJvZHkgPiB0cjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjA0KTtcbiAgfVxuYDtcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgc2l6ZT86IFNpemVUeXBlO1xuICBmdWxsPzogYm9vbGVhbjtcbiAgaGVhZGVyU3R5bGU/OiBhbnk7XG4gIGJvcmRlcmVkPzogYm9vbGVhbjtcbiAgYm9yZGVybGVzcz86IGJvb2xlYW47XG4gIHN0cmlwZWQ/OiBib29sZWFuO1xuICBob3Zlcj86IGJvb2xlYW47XG59XG5cbmNvbnN0IFRhYmxlID0gc3R5bGVkLnRhYmxlPFByb3BzPmBcbiAgZGlzcGxheTogYmxvY2s7XG4gICR7KHsgZnVsbCB9KSA9PiBmdWxsID8gY3NzYHdpZHRoOiAxMDAlO2AgOiAnJ31cbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcblxuICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XG4gIC1tcy1vdmVyZmxvdy1zdHlsZTogLW1zLWF1dG9oaWRpbmctc2Nyb2xsYmFyO1xuXG4gIHRkLCB0aCB7XG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICBwYWRkaW5nOiAwLjc1cmVtO1xuICAgICR7KHsgdGhlbWUsIGJvcmRlcmVkIH0pID0+IGJvcmRlcmVkID8gY3NzYFxuICAgICAgYm9yZGVyOiAxcHggc29saWQgJHt0aGVtZS5ib3JkZXJ9O1xuICAgIGAgOiAnJ31cbiAgICBib3JkZXItd2lkdGg6IDAgMCAxcHg7XG4gIH1cblxuICB0aCB7IHdoaXRlLXNwYWNlOiBub3dyYXA7IH1cblxuICAkeyh7IHN0cmlwZWQgfSkgPT4gc3RyaXBlZCA/IHN0cmlwZWRTdHlsZSA6ICcnfVxuICAkeyh7IGhvdmVyIH0pID0+IGhvdmVyID8gaG92ZXJTdHlsZSA6ICcnfVxuXG4gICR7KHsgaGVhZGVyU3R5bGUgfSkgPT4gaGVhZGVyU3R5bGUgPyBjc3NgXG4gICAgdGgge1xuICAgICAgJHtoZWFkZXJTdHlsZX1cbiAgICB9XG4gIGAgOiAnJ31cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IFRhYmxlO1xuIiwiaW1wb3J0IHsgSFRNTEF0dHJpYnV0ZXMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkLCB7IGNzcyB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBmaW5kQ29sb3JJbnZlcnQgZnJvbSAnLi4vLi4vdXRpbHMvZmluZENvbG9ySW52ZXJ0JztcbmltcG9ydCB7IENvbG9yVHlwZSB9IGZyb20gJy4uLy4uL3R5cGVzJztcblxuZXhwb3J0IGludGVyZmFjZSBQcm9wcyBleHRlbmRzIEhUTUxBdHRyaWJ1dGVzPEhUTUxEaXZFbGVtZW50PiB7XG4gIC8qKiDoibLmjIflrpogKi9cbiAgY29sb3I/OiBDb2xvclR5cGU7XG4gIC8qKiBib3JkZXLjgpLpnZ7ooajnpLrjgZnjgosgKi9cbiAgYm9yZGVybGVzcz86IGJvb2xlYW47XG4gIHN0eWxlPzogYW55O1xufVxuXG5mdW5jdGlvbiBzZXRDb2xvcih7IGNvbG9yLCB0aGVtZSB9OiBhbnkpIHtcbiAgaWYgKCFjb2xvcikgcmV0dXJuIHt9O1xuXG4gIGNvbnN0IHRhcmdldCA9IHRoZW1lW2NvbG9yXSB8fCBjb2xvcjtcbiAgY29uc3QgaW52ZXJ0Q29sb3IgPSBmaW5kQ29sb3JJbnZlcnQodGhlbWUsIHRhcmdldCk7XG4gIHJldHVybiBjc3NgYmFja2dyb3VuZC1jb2xvcjogJHt0YXJnZXR9OyBjb2xvcjogJHtpbnZlcnRDb2xvcn07YDtcbn1cblxuY29uc3QgQm94ID0gc3R5bGVkLmRpdjxQcm9wcz5gXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgJHsoeyBib3JkZXJsZXNzLCB0aGVtZSB9KSA9PiBib3JkZXJsZXNzID8gYGAgOiBgYm9yZGVyOiAxcHggc29saWQgJHt0aGVtZS5ib3JkZXJ9O2B9XG4gIGJveC1zaGFkb3c6IDAgMXB4IDJweCAwIHJnYmEoMCwgMCwgMCwgMC4wNSk7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgd2lkdGg6IDEwMCU7XG5cbiAgbWluLXdpZHRoOiAwO1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG5cbiAgJHtzZXRDb2xvcn1cbmA7XG5Cb3guZGlzcGxheU5hbWUgPSAnQm94JztcblxuZXhwb3J0IGRlZmF1bHQgQm94O1xuIiwiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQsIEhUTUxBdHRyaWJ1dGVzIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgc2V0U2l6ZSBmcm9tICcuLi8uLi91dGlscy9zZXRTaXplJztcbmltcG9ydCB7IENvbG9yVHlwZSwgU2l6ZVR5cGUsIENTU1R5cGUgfSBmcm9tICcuLi8uLi90eXBlcyc7XG5cbmludGVyZmFjZSBQcm9ncmVzc1Byb3BzIGV4dGVuZHMgSFRNTEF0dHJpYnV0ZXM8SFRNTERpdkVsZW1lbnQ+e1xuICAvKiog54++54q244Gu6YCy5o2XICovXG4gIHZhbHVlOiBudW1iZXI7XG4gIC8qKiDpgLLmjZfjga7mnIDlpKflgKQgKi9cbiAgbWF4OiBudW1iZXI7XG4gIC8qKiDjg5Djg7zjga7jgrXjgqTjgrogKi9cbiAgc2l6ZT86IFNpemVUeXBlO1xuICAvKiogc2l6ZeOCkuS9v+OCj+OBquOBhOOBqOOBjeOBrue4puW5heOCkuaMh+WumuOBmeOCiyAqL1xuICBoZWlnaHQ/OiBzdHJpbmc7XG4gIC8qKiDjg5Djg7zjga7oibIgKi9cbiAgY29sb3I/OiBDb2xvclR5cGU7XG4gIC8qKiDjgqvjgrnjgr/jg6BDU1PlrprnvqkgKi9cbiAgY3NzPzogQ1NTVHlwZTtcbn1cblxuY29uc3QgV3JhcHBlciA9IHN0eWxlZC5kaXY8UHJvZ3Jlc3NQcm9wcz5gXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuYmFja2dyb3VuZH07XG5cbiAgJHsoeyBzaXplIH0pID0+IHNldFNpemUoJ2hlaWdodCcsIHNpemUpfVxuICAkeyh7IHNpemUsIGhlaWdodCB9KSA9PiAhc2l6ZSAmJiBoZWlnaHQgPyBgaGVpZ2h0OiAke2hlaWdodH07YCA6ICcnfVxuXG4gICYgPiBkaXZbcm9sZT1cInByb2dyZXNzYmFyXCJdIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAkeyh7IHZhbHVlLCBtYXggfSkgPT4gKHZhbHVlID09PSBtYXgpID8gJycgOiAnYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7IGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwOyd9XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHsoeyBjb2xvciwgdGhlbWUgfSkgPT4gKHRoZW1lW2NvbG9yIV0gfHwgY29sb3IpfTtcblxuICAgIHdpbGwtY2hhbmdlOiB3aWR0aDtcblxuICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IHdpZHRoO1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDM1MG1zO1xuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSk7XG4gICAgei1pbmRleDogMTtcbiAgfVxuICAkeyh7IGNzcyB9KSA9PiAoY3NzIHx8ICcnKX1cbmA7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvZ3Jlc3MgZXh0ZW5kcyBQdXJlQ29tcG9uZW50PFByb2dyZXNzUHJvcHM+IHtcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBjb2xvcjogJ3ByaW1hcnknLFxuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICBjb25zdCB7IHZhbHVlLCBtYXggfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgcGVyY2VudCA9IE1hdGgucm91bmQoKHZhbHVlL21heCkgKiAxMDApO1xuICAgIHJldHVybiAoXG4gICAgICA8V3JhcHBlciB7Li4udGhpcy5wcm9wc30+XG4gICAgICAgIDxkaXYgcm9sZT1cInByb2dyZXNzYmFyXCIgc3R5bGU9e3sgd2lkdGg6IGAke3BlcmNlbnQgPiAxMDAgPyAxMDAgOiBwZXJjZW50fSVgIH19ID48L2Rpdj5cbiAgICAgIDwvV3JhcHBlcj5cbiAgICApO1xuICB9XG59O1xuIiwiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQsIFJlYWN0Tm9kZSwgSFRNTEF0dHJpYnV0ZXMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkLCB7IGNzcyB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7IENTU1R5cGUgfSBmcm9tICcuLi8uLi90eXBlcyc7XG5cbmNvbnN0IFdyYXBwZXIgPSBzdHlsZWQuZGl2PHsgcmVxdWlyZWQ/OiBib29sZWFuLCBjc3M/OiBDU1NUeXBlIH0+YFxuICBkaXNwbGF5OiBibG9jaztcbiAgJjpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjc1cmVtO1xuICB9XG4gICR7KHsgcmVxdWlyZWQsIHRoZW1lIH0pID0+IHJlcXVpcmVkID8gY3NzYFxuICAgIGxhYmVsOjphZnRlciB7XG4gICAgICBjb250ZW50OiAnKic7XG4gICAgICBjb2xvcjogJHt0aGVtZS5wcmltYXJ5fTtcbiAgICAgIG1hcmdpbi1sZWZ0OiAwLjMyNXJlbTtcbiAgICB9XG4gIGAgOiB7fX1cblxuICAkeyh7IGNzcyB9KSA9PiBjc3MgfHwge319XG5gO1xuXG5jb25zdCBMYWJlbCA9IHN0eWxlZC5sYWJlbGBcbiAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUudGV4dFN0cm9uZ307XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDFyZW07XG4gIG1hcmdpbi1ib3R0b206IDAuMzI1cmVtO1xuYDtcblxuaW50ZXJmYWNlIFByb3BzIGV4dGVuZHMgSFRNTEF0dHJpYnV0ZXM8SFRNTERpdkVsZW1lbnQ+IHtcbiAgbGFiZWw/OiBzdHJpbmc7XG4gIGNoaWxkcmVuOiBSZWFjdE5vZGU7XG4gIHJlcXVpcmVkPzogYm9vbGVhbjtcbiAgY3NzPzogQ1NTVHlwZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmllbGQgZXh0ZW5kcyBQdXJlQ29tcG9uZW50PFByb3BzPiB7XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGxhYmVsLCBjaGlsZHJlbiwgLi4ucmVzdCB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPFdyYXBwZXIgey4uLnJlc3R9PlxuICAgICAgICB7bGFiZWwgJiYgKDxMYWJlbD57bGFiZWx9PC9MYWJlbD4pfVxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L1dyYXBwZXI+XG4gICAgKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgY3NzIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgQ1NTVHlwZSB9IGZyb20gJy4uL3R5cGVzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFtYnVyZ2VyKHNpemU6IHN0cmluZyk6IENTU1R5cGUge1xuICByZXR1cm4gY3NzYFxuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBoZWlnaHQ6ICR7c2l6ZX07XG4gICAgd2lkdGg6ICR7c2l6ZX07XG5cbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgc3BhbiB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjdXJyZW50Q29sb3I7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIGhlaWdodDogMXB4O1xuICAgICAgbGVmdDogY2FsYyg1MCUgLSA4cHgpO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xuICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMTAwbXM7XG4gICAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBiYWNrZ3JvdW5kLWNvbG9yLCBvcGFjaXR5LCB0cmFuc2Zvcm07XG4gICAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XG4gICAgICB3aWR0aDogMTZweDtcblxuICAgICAgJjpudGgtY2hpbGQoMSkge1xuICAgICAgICB0b3A6IGNhbGMoNTAlIC0gNnB4KTtcbiAgICAgIH1cbiAgICAgICY6bnRoLWNoaWxkKDIpIHtcbiAgICAgICAgdG9wOiBjYWxjKDUwJSAtIDFweCk7XG4gICAgICB9XG4gICAgICAmOm50aC1jaGlsZCgzKSB7XG4gICAgICAgIHRvcDogY2FsYyg1MCUgKyA0cHgpO1xuICAgICAgfVxuXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYShibGFjaywgMC4wNSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgJi5hY3RpdmUgc3BhbiB7XG4gICAgICAmOm50aC1jaGlsZCgxKSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg1cHgpIHJvdGF0ZSg0NWRlZyk7XG4gICAgICB9XG4gICAgICAmOm50aC1jaGlsZCgyKSB7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICB9XG4gICAgICAmOm50aC1jaGlsZCgzKSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNXB4KSByb3RhdGUoLTQ1ZGVnKTtcbiAgICAgIH1cbiAgICB9XG4gIGA7XG59XG4iLCJpbXBvcnQgeyBjc3MgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgeyBDU1NUeXBlIH0gZnJvbSAnLi4vdHlwZXMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcnJvdyhjb2xvcjogc3RyaW5nLCBkaXJlY3Rpb24/OiBzdHJpbmcpOiBDU1NUeXBlIHtcbiAgcmV0dXJuIGNzc2BcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm9yZGVyOiAzcHggc29saWQgJHtjb2xvcn07XG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgIGJvcmRlci1yaWdodDogMDtcbiAgICBib3JkZXItdG9wOiAwO1xuICAgIGNvbnRlbnQ6IFwiIFwiO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGhlaWdodDogMC42MjVlbTtcbiAgICBtYXJnaW4tdG9wOiAtMC42MjVlbTtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICB0b3A6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcbiAgICB3aWR0aDogMC42MjVlbTtcbiAgYDtcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuaW50ZXJmYWNlIE1zZ1Byb3BzIHtcbiAgZXJyb3I/OiBib29sZWFuO1xufVxuXG5jb25zdCBNZXNzYWdlID0gc3R5bGVkLnNwYW48TXNnUHJvcHM+YFxuICBmb250LXNpemU6IDAuOHJlbTtcbiAgY29sb3I6ICR7KHsgZXJyb3IsIHRoZW1lIH0pID0+IGVycm9yID8gdGhlbWUuZGFuZ2VyIDogdGhlbWUudGV4dExpZ2h0fTtcbmA7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlbHBNZXNzYWdlKGhlbHA/OiBzdHJpbmcsIGVycm9yPzogc3RyaW5nKSB7XG4gIGlmIChlcnJvcikge1xuICAgIHJldHVybiAoPE1lc3NhZ2UgZXJyb3I+e2Vycm9yfTwvTWVzc2FnZT4pO1xuICB9XG4gIGlmIChoZWxwKSB7XG4gICAgcmV0dXJuICg8TWVzc2FnZT57aGVscH08L01lc3NhZ2U+KTtcbiAgfVxufVxuIiwiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQsIElucHV0SFRNTEF0dHJpYnV0ZXMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkLCB7IGNzcyB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7IHNldFNpemUgfSBmcm9tICcuLi8uLi91dGlscyc7XG5pbXBvcnQgZGlzYWJsZWRDb2xvciBmcm9tICcuLi8uLi91dGlscy9kaXNhYmxlZENvbG9yJztcbmltcG9ydCBIZWxwTWVzc2FnZSBmcm9tICcuL0hlbHBNZXNzYWdlJztcbmltcG9ydCB7IENTU1R5cGUgfSBmcm9tICcuLi8uLi90eXBlcyc7XG5cbmludGVyZmFjZSBXcmFwcGVyUHJvcHMge1xuICBvdXRsaW5lPzogYm9vbGVhbjtcbiAgZXJyb3I/OiBhbnk7XG4gIGNzcz86IENTU1R5cGU7XG59XG5cbmludGVyZmFjZSBJY29uUHJvcHMge1xuICByaWdodD86IGJvb2xlYW47XG59XG5cbmNvbnN0IHJpZ2h0SWNvbiA9IGNzc2BcbiAgcmlnaHQ6IDAuMzc1ZW07XG4gICYgfiBpbnB1dCB7XG4gICAgcGFkZGluZy1yaWdodDogMS41NTVlbSAhaW1wb3J0YW50O1xuICB9XG5gO1xuXG5jb25zdCBsZWZ0SWNvbiA9IGNzc2BcbiAgbGVmdDogMC4zNzVlbTtcbiAgJiB+IGlucHV0IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDEuNTVlbSAhaW1wb3J0YW50O1xuICB9XG5gO1xuXG5jb25zdCBJY29uID0gc3R5bGVkLnNwYW48SWNvblByb3BzPmBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDAuMzc1ZW07XG4gIGJvdHRvbTogMDtcbiAgei1pbmRleDogMTtcbiAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuYm9yZGVyfTtcbiAgJHsoeyByaWdodCB9KSA9PiByaWdodCA/IHJpZ2h0SWNvbiA6IGxlZnRJY29ufVxuXG4gIHN2ZywgaW1nIHtcbiAgICBoZWlnaHQ6IDFlbTtcbiAgICB3aWR0aDogMWVtO1xuICB9XG5gO1xuXG5jb25zdCBXcmFwcGVyID0gc3R5bGVkLnNwYW48V3JhcHBlclByb3BzPmBcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBibG9jaztcblxuICBpbnB1dCB7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICAgIGFwcGVhcmFuY2U6IG5vbmU7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBjb2xvcjogaW5oZXJpdDtcblxuICAgIHBhZGRpbmc6IDAuMzc1ZW0gMC42MjVlbTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgJHsoeyBvdXRsaW5lLCB0aGVtZSwgZXJyb3IgfSkgPT4gb3V0bGluZSA/XG4gICAgICBgYm9yZGVyOiAxcHggc29saWQgJHtlcnJvciA/IHRoZW1lLmRhbmdlciA6IHRoZW1lLmJvcmRlcn07IGJvcmRlci1yYWRpdXM6IDRweDtgIDpcbiAgICAgIGBib3JkZXItYm90dG9tOiAxcHggc29saWQgJHtlcnJvciA/IHRoZW1lLmRhbmdlciA6IHRoZW1lLmJvcmRlcn07IGJvcmRlci1yYWRpdXM6IDA7YFxuICAgIH1cbiAgICAke3NldFNpemUoJ2ZvbnQtc2l6ZScpfVxuXG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYm94LXNoYWRvdztcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAxNTBtcztcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XG5cbiAgICAmOmZvY3VzIHtcbiAgICAgIGJvcmRlci1jb2xvcjogJHsoeyBlcnJvciwgdGhlbWUgfSkgPT4gKGVycm9yID8gdGhlbWUuZGFuZ2VyIDogdGhlbWUucHJpbWFyeSl9O1xuICAgICAgJHsoeyB0aGVtZSwgb3V0bGluZSwgZXJyb3IgfSkgPT4gb3V0bGluZSA/XG4gICAgICAgIGBib3gtc2hhZG93OiAwIDAgMCAwLjFlbSAke2Vycm9yID8gdGhlbWUuZGFuZ2VyIDogdGhlbWUucHJpbWFyeX07YCA6XG4gICAgICAgIGBib3gtc2hhZG93OiAwIDAuMWVtICR7ZXJyb3IgPyB0aGVtZS5kYW5nZXIgOiB0aGVtZS5wcmltYXJ5fTtgXG4gICAgICB9XG4gICAgfVxuXG4gICAgJjpkaXNhYmxlZCwgW2Rpc2FibGVkXSwgJjpyZWFkb25seSB7XG4gICAgICAkeyh7IHRoZW1lIH0pID0+IGRpc2FibGVkQ29sb3IodGhlbWUpfVxuICAgIH1cblxuICAgICY6ZGlzYWJsZWQsIFtkaXNhYmxlZF0ge1xuICAgICAgcmVzaXplOiBub25lO1xuICAgIH1cblxuICAgICY6OnBsYWNlaG9sZGVyIHtcbiAgICAgIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnBsYWNlaG9sZGVyfTtcbiAgICB9XG4gIH1cblxuICAmOmhvdmVyIHtcbiAgICBpbnB1dDpub3QoOmRpc2FibGVkKTpub3QoOmZvY3VzKTpub3QoOmFjdGl2ZSkge1xuICAgICAgYm9yZGVyLWNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmJvcmRlckhvdmVyfTtcbiAgICB9XG4gICAgJHtJY29ufSB7XG4gICAgICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5ib3JkZXJIb3Zlcn07XG4gICAgfVxuICB9XG4gICR7KHsgY3NzIH0pID0+IGNzcyB8fCAnJ31cbmA7XG5cbmludGVyZmFjZSBQcm9wcyBleHRlbmRzIElucHV0SFRNTEF0dHJpYnV0ZXM8SFRNTElucHV0RWxlbWVudD4ge1xuICBwbGFjZWhvbGRlcj86IHN0cmluZztcbiAgLyoqICd0ZXh0JyB8ICdudW1iZXInIHwgJ3Bhc3N3b3JkJyB8ICdlbWFpbCcgfCAndGVsJyB8ICdzZWFyY2gnICovXG4gIHR5cGU6ICd0ZXh0JyB8ICdudW1iZXInIHwgJ3Bhc3N3b3JkJyB8ICdlbWFpbCcgfCAndGVsJyB8ICdzZWFyY2gnO1xuICAvKiog44Ko44Op44O844Gu55m655Sf5pmC44Gu6KGo56S644OG44Kt44K544OIICovXG4gIGVycm9yPzogc3RyaW5nIHwgYW55O1xuICAvKiog5o2V5o2J44OG44Kt44K544OIICovXG4gIGhlbHA/OiBzdHJpbmcgfCBhbnk7XG4gIC8qKiDjg5zjg4Pjgq/jgrnns7vjga7jg4fjgrbjgqTjg7PjgafjgZnjgosgKi9cbiAgb3V0bGluZT86IGJvb2xlYW47XG4gIC8qKiDlt6blgbTjga7jgqLjgqTjgrPjg7MgKi9cbiAgbGVmdEljb24/OiBhbnk7XG4gIC8qKiDlj7PlgbTjga7jgqLjgqTjgrPjg7MgKi9cbiAgcmlnaHRJY29uPzogYW55O1xuICAvKiog44Kr44K544K/44OgQ1NT5a6a576pICovXG4gIGNzcz86IENTU1R5cGU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRleHRJbnB1dCBleHRlbmRzIFB1cmVDb21wb25lbnQ8UHJvcHM+IHtcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICB0eXBlOiAndGV4dCcsXG4gICAgdmFsdWU6ICcnLFxuICAgIG1heExlbmd0aDogMjU1LFxuICAgIG9uQ2hhbmdlOiAoKSA9PiB7fSxcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgY2xhc3NOYW1lLCBvdXRsaW5lLCBlcnJvciwgaGVscCwgbGVmdEljb24sIHJpZ2h0SWNvbiwgc3R5bGUsIGNzcywgLi4ucmVzdFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8V3JhcHBlciBjbGFzc05hbWU9e2NsYXNzTmFtZX0gb3V0bGluZT17b3V0bGluZX0gZXJyb3I9e2Vycm9yfSBzdHlsZT17c3R5bGV9IGNzcz17Y3NzfT5cbiAgICAgICAge2xlZnRJY29uICYmICg8SWNvbj57bGVmdEljb259PC9JY29uPil9XG4gICAgICAgIHtyaWdodEljb24gJiYgKDxJY29uIHJpZ2h0PntyaWdodEljb259PC9JY29uPil9XG4gICAgICAgIDxpbnB1dCB7Li4ucmVzdH0gLz5cbiAgICAgICAge0hlbHBNZXNzYWdlKGhlbHAsIGVycm9yKX1cbiAgICAgIDwvV3JhcHBlcj5cbiAgICApO1xuICB9XG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBUZXh0YXJlYUhUTUxBdHRyaWJ1dGVzIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgYm94U2hhZG93IGZyb20gJy4uLy4uL3V0aWxzL2JveFNoYWRvdyc7XG5pbXBvcnQgc2V0U2l6ZSBmcm9tICcuLi8uLi91dGlscy9zZXRTaXplJztcbmltcG9ydCBkaXNhYmxlZENvbG9yIGZyb20gJy4uLy4uL3V0aWxzL2Rpc2FibGVkQ29sb3InO1xuaW1wb3J0IEhlbHBNZXNzYWdlIGZyb20gJy4vSGVscE1lc3NhZ2UnO1xuaW1wb3J0IHsgQ1NTVHlwZSB9IGZyb20gJy4uLy4uL3R5cGVzJztcblxuaW50ZXJmYWNlIFdyYXBwZXJQcm9wcyB7XG4gIGVycm9yPzogc3RyaW5nO1xuICBjc3M/OiBDU1NUeXBlO1xufVxuXG5jb25zdCBXcmFwcGVyID0gc3R5bGVkLnNwYW48V3JhcHBlclByb3BzPmBcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICB0ZXh0YXJlYSB7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBwYWRkaW5nOiAwLjYyNWVtO1xuICAgIHJlc2l6ZTogdmVydGljYWw7XG4gICAgYXBwZWFyYW5jZTogbm9uZTtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgY29sb3I6IGluaGVyaXQ7XG5cbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgJHsoeyB0aGVtZSwgZXJyb3IgfSkgPT4gZXJyb3IgPyB0aGVtZS5kYW5nZXIgOiB0aGVtZS5ib3JkZXJ9O1xuXG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYm94LXNoYWRvdztcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjE1cztcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XG5cbiAgICAke3NldFNpemUoJ2ZvbnQtc2l6ZScpfVxuXG4gICAgJjpmb2N1cyB7XG4gICAgICBib3JkZXItY29sb3I6ICR7KHsgdGhlbWUsIGVycm9yIH0pID0+IGVycm9yID8gdGhlbWUuZGFuZ2VyIDogdGhlbWUucHJpbWFyeX07XG4gICAgICAkeyh7IHRoZW1lLCBlcnJvciB9KSA9PiBib3hTaGFkb3coJzAuMWVtJywgZXJyb3IgPyB0aGVtZS5kYW5nZXIgOiB0aGVtZS5wcmltYXJ5KX1cbiAgICB9XG5cbiAgICAmOmRpc2FibGVkLCBbZGlzYWJsZWRdLCAmOnJlYWRvbmx5IHtcbiAgICAgICR7KHsgdGhlbWUgfSkgPT4gZGlzYWJsZWRDb2xvcih0aGVtZSl9XG4gICAgfVxuXG4gICAgJjpkaXNhYmxlZCwgW2Rpc2FibGVkXSB7XG4gICAgICByZXNpemU6IG5vbmU7XG4gICAgfVxuXG4gICAgJjo6cGxhY2Vob2xkZXIge1xuICAgICAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUucGxhY2Vob2xkZXJ9O1xuICAgIH1cbiAgfVxuXG4gICY6aG92ZXIge1xuICAgIHRleHRhcmVhOm5vdCg6ZGlzYWJsZWQpOm5vdCg6Zm9jdXMpIHtcbiAgICAgIGJvcmRlci1jb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5ib3JkZXJIb3Zlcn07XG4gICAgfVxuICB9XG4gICR7KHsgY3NzIH0pID0+IGNzcyB8fCB7fX1cbmA7XG5cbmludGVyZmFjZSBQcm9wcyBleHRlbmRzIFRleHRhcmVhSFRNTEF0dHJpYnV0ZXM8SFRNTFRleHRBcmVhRWxlbWVudD4ge1xuICAvKiog44Ko44Op44O844Gu55m655Sf5pmC44Gu6KGo56S644OG44Kt44K544OIICovXG4gIGVycm9yPzogc3RyaW5nIHwgYW55O1xuICAvKiog5o2V5o2J44OG44Kt44K544OIICovXG4gIGhlbHA/OiBzdHJpbmcgfCBhbnk7XG4gIC8qKiDjgqvjgrnjgr/jg6BDU1PlrprnvqkgKi9cbiAgY3NzPzogQ1NTVHlwZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGV4dGFyZWEgZXh0ZW5kcyBDb21wb25lbnQ8UHJvcHM+IHtcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICB2YWx1ZTogJycsXG4gICAgY29sOiAyLFxuICAgIHJvdzogNSxcbiAgICBvbkNoYW5nZTogKCkgPT4ge30sXG4gIH07XG5cbiAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKHByb3BzOiBQcm9wcykge1xuICAgIHJldHVybiBwcm9wcy52YWx1ZSAhPT0gdGhpcy5wcm9wcy52YWx1ZSB8fFxuICAgICAgcHJvcHMuaGVscCAhPT0gdGhpcy5wcm9wcy5oZWxwIHx8XG4gICAgICBwcm9wcy5lcnJvciAhPT0gdGhpcy5wcm9wcy5lcnJvciB8fFxuICAgICAgcHJvcHMuZGlzYWJsZWQgIT09IHRoaXMucHJvcHMuZGlzYWJsZWQgfHxcbiAgICAgIHByb3BzLnJlYWRPbmx5ICE9PSB0aGlzLnByb3BzLnJlYWRPbmx5O1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY2xhc3NOYW1lLCBoZWxwLCBlcnJvciwgc3R5bGUsIGNzcywgLi4ucmVzdCB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPFdyYXBwZXIgY2xhc3NOYW1lPXtjbGFzc05hbWV9IGVycm9yPXtlcnJvcn0gc3R5bGU9e3N0eWxlfSBjc3M9e2Nzc30+XG4gICAgICAgIDx0ZXh0YXJlYSB7Li4ucmVzdH0gLz5cbiAgICAgICAge0hlbHBNZXNzYWdlKGhlbHAsIGVycm9yKX1cbiAgICAgIDwvV3JhcHBlcj5cbiAgICApO1xuICB9XG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBJbnB1dEhUTUxBdHRyaWJ1dGVzIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHRyYW5zcGFyZW50aXplIGZyb20gJ3BvbGlzaGVkL2xpYi9jb2xvci90cmFuc3BhcmVudGl6ZSc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuY29uc3QgV3JhcHBlciA9IHN0eWxlZC5zcGFuYFxuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogYXV0bztcblxuICBsYWJlbCB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHBhZGRpbmctbGVmdDogMC42MjVlbTtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbGluZS1oZWlnaHQ6IDEuMjU7XG4gICAgbWFyZ2luLXJpZ2h0OiAwLjYyNXJlbTtcblxuICAgICY6YmVmb3JlLCAmOmFmdGVyIHtcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgfVxuXG4gICAgJjphZnRlciB7XG4gICAgICB0b3A6IDAuMjVlbTtcbiAgICAgIGxlZnQ6IDAuMmVtO1xuICAgICAgd2lkdGg6IDAuODVlbTtcbiAgICAgIGhlaWdodDogMC41ZW07XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICAgICAgYm9yZGVyOiAwLjFlbSBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgIGJvcmRlci10b3Atc3R5bGU6IG5vbmU7XG4gICAgICBib3JkZXItcmlnaHQtc3R5bGU6IG5vbmU7XG4gICAgfVxuXG4gICAgJjpiZWZvcmUge1xuICAgICAgd2lkdGg6IDEuMjVlbTtcbiAgICAgIGhlaWdodDogMS4yNWVtO1xuICAgICAgbGVmdDowO1xuICAgICAgdG9wOiAwO1xuICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmJvcmRlcn07XG4gICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICAgIHdpbGwtY2hhbmdlOiBiYWNrZ3JvdW5kO1xuICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAxNTBtcyBlYXNlLW91dDtcbiAgICB9XG4gIH1cblxuICBpbnB1dCB7XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuXG4gICAgJjpjaGVja2VkICsgbGFiZWwge1xuICAgICAgJjpiZWZvcmV7XG4gICAgICAgIGJvcmRlci1jb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5wcmltYXJ5fTtcbiAgICAgICAgYmFja2dyb3VuZDogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5wcmltYXJ5fTtcbiAgICAgIH1cbiAgICAgICY6YWZ0ZXIge1xuICAgICAgICBib3JkZXItY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUud2hpdGV9O1xuICAgICAgfVxuICAgIH1cblxuICAgICY6aW5kZXRlcm1pbmF0ZSArIGxhYmVsIHtcbiAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnByaW1hcnl9O1xuICAgICAgICBiYWNrZ3JvdW5kOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnByaW1hcnl9O1xuICAgICAgfVxuICAgICAgJjphZnRlciB7XG4gICAgICAgIGJvcmRlci1jb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS53aGl0ZX07XG4gICAgICAgIGJvcmRlci1sZWZ0LXN0eWxlOiBub25lO1xuICAgICAgfVxuICAgIH1cblxuICAgICY6ZGlzYWJsZWQge1xuICAgICAgKyBsYWJlbCB7XG4gICAgICAgIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRyYW5zcGFyZW50aXplKDAuMjUsIHRoZW1lLnRleHREYXJrKX07XG4gICAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAkeyh7IHRoZW1lIH0pID0+IHRyYW5zcGFyZW50aXplKDAuNTUsIHRoZW1lLmJvcmRlcil9O1xuICAgICAgICAgIGJvcmRlci1jb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5ib3JkZXJ9O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAmOmNoZWNrZWQgKyBsYWJlbDphZnRlciB7XG4gICAgICAgIGJvcmRlci1jb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0cmFuc3BhcmVudGl6ZSgwLjE1LCB0aGVtZS50ZXh0RGFyayl9O1xuICAgICAgfVxuICAgIH1cbiAgfVxuYDtcblxuaW50ZXJmYWNlIFByb3BzIGV4dGVuZHMgSW5wdXRIVE1MQXR0cmlidXRlczxIVE1MSW5wdXRFbGVtZW50PiB7XG4gIGNoaWxkcmVuPzogYW55O1xuICBjaGVja2VkPzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hlY2tib3ggZXh0ZW5kcyBDb21wb25lbnQ8UHJvcHM+IHtcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBuYW1lOiBudWxsLFxuICAgIGNoaWxkcmVuOiBudWxsLFxuICAgIGNoZWNrZWQ6IGZhbHNlLFxuICAgIG9uQ2hhbmdlOiAoKSA9PiB7fSxcbiAgfTtcblxuICBpZCA9IGBjaGVja2JveF8ke3RoaXMucHJvcHMubmFtZX1gO1xuXG4gIHNob3VsZENvbXBvbmVudFVwZGF0ZShwcm9wczogUHJvcHMpIHtcbiAgICByZXR1cm4gcHJvcHMuY2hlY2tlZCAhPT0gdGhpcy5wcm9wcy5jaGVja2VkIHx8XG4gICAgICBwcm9wcy5jaGlsZHJlbiAhPT0gdGhpcy5wcm9wcy5jaGlsZHJlbjtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNsYXNzTmFtZSwgY2hpbGRyZW4sIC4uLnJlc3QgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxXcmFwcGVyIGNsYXNzTmFtZT17Y2xhc3NOYW1lfSA+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBpZD17dGhpcy5pZH0gey4uLnJlc3R9IC8+XG4gICAgICAgIDxsYWJlbCBodG1sRm9yPXt0aGlzLmlkfT57Y2hpbGRyZW59PC9sYWJlbD5cbiAgICAgIDwvV3JhcHBlcj5cbiAgICApO1xuICB9XG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBTZWxlY3RIVE1MQXR0cmlidXRlcyB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCwgeyBjc3MgfSBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCBhcnJvdyBmcm9tIFwiLi4vLi4vdXRpbHMvYXJyb3dcIjtcbmltcG9ydCBzZXRTaXplIGZyb20gXCIuLi8uLi91dGlscy9zZXRTaXplXCI7XG5pbXBvcnQgSGVscE1lc3NhZ2UgZnJvbSBcIi4vSGVscE1lc3NhZ2VcIjtcbmltcG9ydCB7IFNpemVUeXBlLCBDU1NUeXBlIH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgZGlzYWJsZWRDb2xvciBmcm9tIFwiLi4vLi4vdXRpbHMvZGlzYWJsZWRDb2xvclwiO1xuXG5pbnRlcmZhY2UgV3JhcHBlclByb3BzIHtcbiAgc2l6ZT86IFNpemVUeXBlO1xuICBvdXRsaW5lPzogYm9vbGVhbjtcbiAgZXJyb3I/OiBzdHJpbmc7XG4gIGRpc2FibGVkPzogYm9vbGVhbjtcbiAgY3NzPzogQ1NTVHlwZTtcbn1cblxuY29uc3QgSW5wdXRXcmFwcGVyID0gc3R5bGVkLnNwYW48V3JhcHBlclByb3BzPmBcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBibG9jaztcblxuICBzZWxlY3Qge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBhcHBlYXJhbmNlOiBub25lO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBwYWRkaW5nOiAwLjM3NWVtIDAuNjI1ZW07XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBjb2xvcjogaW5oZXJpdDtcblxuICAgICR7KHsgc2l6ZSB9KSA9PiBzZXRTaXplKFwiZm9udC1zaXplXCIsIHNpemUpfVxuXG4gICAgYm9yZGVyOiBub25lO1xuICAgICR7KHsgb3V0bGluZSwgdGhlbWUsIGVycm9yIH0pID0+XG4gICAgICBvdXRsaW5lID8gY3NzYFxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAke2Vycm9yID8gdGhlbWUuZGFuZ2VyIDogdGhlbWUuYm9yZGVyfTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgYCA6IGNzc2BcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICR7ZXJyb3IgPyB0aGVtZS5kYW5nZXIgOiB0aGVtZS5ib3JkZXJ9O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgICAgYH1cblxuICAgIHdpbGwtY2hhbmdlOiBib3gtc2hhZG93O1xuICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IGJveC1zaGFkb3c7XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMTUwbXM7XG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xuXG4gICAgJjpmb2N1cyB7XG4gICAgICBib3JkZXItY29sb3I6ICR7KHsgZXJyb3IsIHRoZW1lIH0pID0+IGVycm9yID8gdGhlbWUuZGFuZ2VyIDogdGhlbWUucHJpbWFyeX07XG4gICAgICBib3gtc2hhZG93OiAke1xuICAgICAgICAoeyB0aGVtZSwgb3V0bGluZSwgZXJyb3IgfSkgPT4gb3V0bGluZSA/XG4gICAgICAgICAgKGVycm9yID8gdGhlbWUuZGFuZ2VyIDogdGhlbWUucHJpbWFyeSkgOlxuICAgICAgICAgIChlcnJvciA/IHRoZW1lLmRhbmdlciA6IHRoZW1lLnByaW1hcnkpXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgJjo6LW1zLWV4cGFuZCB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgICAmOi1tb3otZm9jdXNyaW5nIHtcbiAgICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgIHRleHQtc2hhZG93OiAwIDAgMCAjMDAwO1xuICAgIH1cblxuICAgICY6ZGlzYWJsZWQsIFtkaXNhYmxlZF0sICY6cmVhZG9ubHkge1xuICAgICAgJHsoeyB0aGVtZSB9KSA9PiBkaXNhYmxlZENvbG9yKHRoZW1lKX1cbiAgICB9XG5cbiAgICAmOmludmFsaWQge1xuICAgICAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUucGxhY2Vob2xkZXJ9O1xuICAgIH1cbiAgfVxuXG4gICY6OmFmdGVyIHtcbiAgICAkeyh7IHRoZW1lIH0pID0+IGFycm93KHRoZW1lLmJvcmRlcil9XG4gICAgdG9wOiAxLjI1ZW07XG4gICAgcmlnaHQ6IDAuNjI1ZW07XG4gICAgei1pbmRleDogNDtcbiAgfVxuXG4gICR7KHsgdGhlbWUsIGRpc2FibGVkIH0pID0+XG4gICAgZGlzYWJsZWRcbiAgICAgID8ge31cbiAgICAgIDogY3NzYFxuICAgICY6aG92ZXIge1xuICAgICAgc2VsZWN0Om5vdCg6ZGlzYWJsZWQpOm5vdCg6Zm9jdXMpIHtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAke3RoZW1lLmJvcmRlckhvdmVyfTtcbiAgICAgIH1cblxuICAgICAgJjo6YWZ0ZXIge1xuICAgICAgICBib3JkZXItY29sb3I6ICR7dGhlbWUuYm9yZGVySG92ZXJ9O1xuICAgICAgfVxuICAgIH1cbiAgYH1cblxuICAkeyh7IGNzcyB9KSA9PiBjc3MgfHwge319XG5gO1xuXG50eXBlIEl0ZW1UeXBlID1cbiAgfCB7IGlkOiBzdHJpbmcgfCBudW1iZXI7IG5hbWU6IHN0cmluZzsgW2tleTogc3RyaW5nXTogYW55IH1cbiAgfCBzdHJpbmc7XG5cbmludGVyZmFjZSBQcm9wcyBleHRlbmRzIFNlbGVjdEhUTUxBdHRyaWJ1dGVzPEhUTUxTZWxlY3RFbGVtZW50PiB7XG4gIHBsYWNlaG9sZGVyPzogc3RyaW5nO1xuICBvcHRpb25zOiBJdGVtVHlwZVtdO1xuICBvdXRsaW5lPzogYm9vbGVhbjtcbiAgZXJyb3I/OiBzdHJpbmcgfCBhbnk7XG4gIGhlbHA/OiBzdHJpbmcgfCBhbnk7XG4gIGlucHV0U2l6ZT86IFNpemVUeXBlO1xuICByZW5kZXI/OiAobGFiZWw6IHN0cmluZykgPT4gYW55O1xuICBkaXNhYmxlZD86IGJvb2xlYW47XG4gIGNzcz86IENTU1R5cGU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlbGVjdCBleHRlbmRzIENvbXBvbmVudDxQcm9wcz4ge1xuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIG5hbWU6IG51bGwsXG4gICAgdmFsdWU6ICcnLFxuICAgIG9uQ2hhbmdlOiAoKSA9PiB7fSxcbiAgICBvcHRpb25zOiBbXSxcbiAgfTtcblxuICBzaG91bGRDb21wb25lbnRVcGRhdGUocHJvcHM6IFByb3BzKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIHByb3BzLm9wdGlvbnMubGVuZ3RoICE9PSB0aGlzLnByb3BzLm9wdGlvbnMubGVuZ3RoIHx8XG4gICAgICBwcm9wcy52YWx1ZSAhPT0gdGhpcy5wcm9wcy52YWx1ZSB8fFxuICAgICAgcHJvcHMuZGlzYWJsZWQgIT09IHRoaXMucHJvcHMuZGlzYWJsZWQgfHxcbiAgICAgIHByb3BzLmhlbHAgIT09IHRoaXMucHJvcHMuaGVscCB8fFxuICAgICAgcHJvcHMuZXJyb3IgIT09IHRoaXMucHJvcHMuZXJyb3JcbiAgICApO1xuICB9XG5cbiAgcmVuZGVyTGFiZWwgPSAobGFiZWw6IHN0cmluZykgPT4ge1xuICAgIGlmICh0aGlzLnByb3BzLnJlbmRlcikge1xuICAgICAgcmV0dXJuIHRoaXMucHJvcHMucmVuZGVyKGxhYmVsKTtcbiAgICB9XG4gICAgcmV0dXJuIGxhYmVsO1xuICB9XG5cbiAgcmVuZGVySXRlbSA9ICgpID0+IHtcbiAgICByZXR1cm4gdGhpcy5wcm9wcy5vcHRpb25zLm1hcCgoaXRlbSwgaWR4KSA9PiB7XG4gICAgICBpZiAodHlwZW9mIGl0ZW0gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPG9wdGlvbiBrZXk9e2l0ZW19IHZhbHVlPXtpdGVtfT5cbiAgICAgICAgICAgIHt0aGlzLnJlbmRlckxhYmVsKGl0ZW0pfVxuICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgY29uc3QgeyBpZCwgbmFtZSB9ID0gaXRlbTtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxvcHRpb24ga2V5PXtgJHtpZH1fJHtpZHh9YH0gdmFsdWU9e2lkfT5cbiAgICAgICAgICB7dGhpcy5yZW5kZXJMYWJlbChuYW1lKX1cbiAgICAgICAgPC9vcHRpb24+XG4gICAgICApO1xuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGNzcyxcbiAgICAgIGNsYXNzTmFtZSxcbiAgICAgIGlucHV0U2l6ZSxcbiAgICAgIG91dGxpbmUsXG4gICAgICBvcHRpb25zLFxuICAgICAgZXJyb3IsXG4gICAgICBoZWxwLFxuICAgICAgcGxhY2Vob2xkZXIsXG4gICAgICBkaXNhYmxlZCxcbiAgICAgIC4uLnJlc3RcbiAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgIHJldHVybiAoXG4gICAgICA8SW5wdXRXcmFwcGVyXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxuICAgICAgICBzaXplPXtpbnB1dFNpemV9XG4gICAgICAgIG91dGxpbmU9e291dGxpbmV9XG4gICAgICAgIGVycm9yPXtlcnJvcn1cbiAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgICBjc3M9e2Nzc31cbiAgICAgID5cbiAgICAgICAgPHNlbGVjdCB7Li4ucmVzdH0gZGlzYWJsZWQ9e2Rpc2FibGVkfSByZXF1aXJlZD17Qm9vbGVhbihwbGFjZWhvbGRlcil9PlxuICAgICAgICAgIHtwbGFjZWhvbGRlciAmJiAoXG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+XG4gICAgICAgICAgICAgIHtwbGFjZWhvbGRlcn1cbiAgICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICAgICl9XG4gICAgICAgICAge3RoaXMucmVuZGVySXRlbSgpfVxuICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAge0hlbHBNZXNzYWdlKGhlbHAsIGVycm9yKX1cbiAgICAgIDwvSW5wdXRXcmFwcGVyPlxuICAgICk7XG4gIH1cbn1cbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIElucHV0SFRNTEF0dHJpYnV0ZXMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdHJhbnNwYXJlbnRpemUgZnJvbSAncG9saXNoZWQvbGliL2NvbG9yL3RyYW5zcGFyZW50aXplJztcbmltcG9ydCBzdHlsZWQsIHsgY3NzIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgQ29sb3JUeXBlIH0gZnJvbSAnLi4vLi4vdHlwZXMnO1xuXG5jb25zdCBSYWRpb0xhYmVsID0gY3NzYFxuICBsYWJlbCB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHBhZGRpbmctbGVmdDogMS42MjVlbTtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbGluZS1oZWlnaHQ6IDEuMjU7XG4gICAgbWFyZ2luLXJpZ2h0OiAwLjYyNXJlbTtcblxuICAgICY6YmVmb3JlLCAmOmFmdGVyIHtcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgfVxuXG4gICAgJjphZnRlciB7XG4gICAgICB0b3A6IDAuMzc1ZW07XG4gICAgICBsZWZ0OiAwLjM3NWVtO1xuICAgICAgd2lkdGg6IDAuNWVtO1xuICAgICAgaGVpZ2h0OiAwLjVlbTtcbiAgICAgIGJhY2tncm91bmQ6ICR7KHsgdGhlbWUgfTogYW55KSA9PiB0aGVtZS5wcmltYXJ5fTtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG5cbiAgICAgIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm07XG4gICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMTUwbXMgZWFzZS1vdXQ7XG4gICAgfVxuXG4gICAgJjpiZWZvcmUge1xuICAgICAgd2lkdGg6IDEuMjVlbTtcbiAgICAgIGhlaWdodDogMS4yNWVtO1xuICAgICAgbGVmdDowO1xuICAgICAgdG9wOiAwO1xuICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICBib3JkZXI6IDAuMWVtIHNvbGlkICR7KHsgdGhlbWUgfTogYW55KSA9PiB0aGVtZS5ib3JkZXJ9O1xuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuXG4gICAgICB3aWxsLWNoYW5nZTogYmFja2dyb3VuZDtcbiAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgMTUwbXMgZWFzZS1vdXQ7XG4gICAgfVxuICB9XG5cbiAgaW5wdXQge1xuICAgIGRpc3BsYXk6IG5vbmU7XG5cbiAgICAmOmNoZWNrZWQge1xuICAgICAgKyBsYWJlbDpiZWZvcmUge1xuICAgICAgICBib3JkZXItY29sb3I6ICR7KHsgdGhlbWUgfTogYW55KSA9PiB0aGVtZS5wcmltYXJ5fTtcbiAgICAgIH1cbiAgICAgICsgbGFiZWw6YWZ0ZXJ7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgJjpkaXNhYmxlZCB7XG4gICAgICArIGxhYmVsIHtcbiAgICAgICAgY29sb3I6ICR7KHsgdGhlbWUgfTogYW55KSA9PiB0cmFuc3BhcmVudGl6ZSgwLjI1LCB0aGVtZS50ZXh0RGFyayl9O1xuICAgICAgICAmOmJlZm9yZSB7XG4gICAgICAgICAgYmFja2dyb3VuZDogJHsoeyB0aGVtZSB9OiBhbnkpID0+IHRyYW5zcGFyZW50aXplKDAuNTUsIHRoZW1lLmJvcmRlcil9O1xuICAgICAgICAgIGJvcmRlci1jb2xvcjogJHsoeyB0aGVtZSB9OiBhbnkpID0+IHRoZW1lLmJvcmRlcn07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgICY6Y2hlY2tlZCArIGxhYmVsOmFmdGVyIHtcbiAgICAgICAgYmFja2dyb3VuZDogJHsoeyB0aGVtZSB9OiBhbnkpID0+IHRyYW5zcGFyZW50aXplKDAuMTUsIHRoZW1lLnRleHREYXJrKX07XG4gICAgICB9XG4gICAgfVxuICB9XG5gO1xuXG5jb25zdCBCdXR0b25MYWJlbCA9IGNzc2BcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG5cbiAgbGFiZWwge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBwYWRkaW5nOiAwLjM3NWVtIDAuNzVlbTtcbiAgICBoZWlnaHQ6IDIuMjVlbTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAkeyh7IHRoZW1lIH06IGFueSkgPT4gdGhlbWUuYm9yZGVyfTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIGJvcmRlci1jb2xvcjogJHsoeyB0aGVtZSB9OiBhbnkpID0+IHRoZW1lLmJvcmRlckhvdmVyfTtcbiAgICB9XG4gIH1cblxuICBpbnB1dCB7XG4gICAgZGlzcGxheTogbm9uZTtcblxuICAgICY6Y2hlY2tlZCArIGxhYmVsIHtcbiAgICAgIHotaW5kZXg6IDE7XG4gICAgICBib3JkZXItY29sb3I6ICR7KHsgdGhlbWUgfTogYW55KSA9PiB0aGVtZS5wcmltYXJ5fTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7KHsgdGhlbWUgfTogYW55KSA9PiB0cmFuc3BhcmVudGl6ZSgwLjU1LCB0aGVtZS5wcmltYXJ5KX07XG4gICAgfVxuXG4gICAgJjpkaXNhYmxlZCB7XG4gICAgICArIGxhYmVsIHtcbiAgICAgICAgY3Vyc29yOiBkZWZhdWx0O1xuICAgICAgICBjb2xvcjogJHsoeyB0aGVtZSB9OiBhbnkpID0+IHRyYW5zcGFyZW50aXplKDAuMjUsIHRoZW1lLnRleHREYXJrKX07XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7KHsgdGhlbWUgfTogYW55KSA9PiB0cmFuc3BhcmVudGl6ZSgwLjU1LCB0aGVtZS5ib3JkZXIpfTtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkeyh7IHRoZW1lIH06IGFueSkgPT4gdGhlbWUuYm9yZGVyfTtcbiAgICAgIH1cblxuICAgICAgJjpjaGVja2VkICsgbGFiZWwge1xuICAgICAgICBib3JkZXItY29sb3I6ICR7KHsgdGhlbWUgfTogYW55KSA9PiB0aGVtZS50ZXh0RGFya307XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7KHsgdGhlbWUgfTogYW55KSA9PiB0cmFuc3BhcmVudGl6ZSgwLjY1LCB0aGVtZS50ZXh0RGFyayl9O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gICYgKyAmIHtcbiAgICBtYXJnaW4tbGVmdDogLTFweDtcbiAgfVxuXG4gICY6Zmlyc3QtY2hpbGQgbGFiZWwge1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDRweDtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA0cHg7XG4gIH1cblxuICAmOmxhc3QtY2hpbGQgbGFiZWwge1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA0cHg7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDRweDtcbiAgfVxuYDtcblxuXG5jb25zdCBXcmFwcGVyID0gc3R5bGVkLnNwYW48eyBidXR0b246IGJvb2xlYW4sIGNvbG9yPzogQ29sb3JUeXBlIH0+YFxuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogYXV0bztcblxuICAkeyh7IGJ1dHRvbiB9KSA9PiBidXR0b24gPyBCdXR0b25MYWJlbCA6IFJhZGlvTGFiZWx9XG5gO1xuXG5pbnRlcmZhY2UgUHJvcHMgZXh0ZW5kcyBJbnB1dEhUTUxBdHRyaWJ1dGVzPEhUTUxJbnB1dEVsZW1lbnQ+IHtcbiAgdmFsdWU6IHN0cmluZyB8IG51bWJlcjtcbiAgY2hpbGRyZW4/OiBhbnk7XG4gIGNoZWNrZWQ/OiBib29sZWFuO1xuICBidXR0b24/OiBib29sZWFuO1xuICBjb2xvcj86IENvbG9yVHlwZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmFkaW8gZXh0ZW5kcyBDb21wb25lbnQ8UHJvcHM+IHtcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBuYW1lOiBudWxsLFxuICAgIGNoaWxkcmVuOiBudWxsLFxuICAgIGNoZWNrZWQ6IGZhbHNlLFxuICAgIGJ1dHRvbjogZmFsc2UsXG4gICAgb25DaGFuZ2U6ICgpID0+IHt9LFxuICB9O1xuXG4gIGlkID0gYHJhZGlvXyR7dGhpcy5wcm9wcy5uYW1lfToke3RoaXMucHJvcHMudmFsdWV9YDtcblxuICBzaG91bGRDb21wb25lbnRVcGRhdGUocHJvcHM6IFByb3BzKSB7XG4gICAgcmV0dXJuIHByb3BzLmNoZWNrZWQgIT09IHRoaXMucHJvcHMuY2hlY2tlZDtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNsYXNzTmFtZSwgY2hpbGRyZW4sIGJ1dHRvbiwgY29sb3IsIHN0eWxlLCAuLi5yZXN0IH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8V3JhcHBlciBjbGFzc05hbWU9e2NsYXNzTmFtZX0gYnV0dG9uPXtidXR0b24hfSBjb2xvcj17Y29sb3J9IHN0eWxlPXtzdHlsZX0+XG4gICAgICAgIDxpbnB1dCBpZD17dGhpcy5pZH0gdHlwZT1cInJhZGlvXCIgey4uLnJlc3R9IC8+XG4gICAgICAgIDxsYWJlbCBodG1sRm9yPXt0aGlzLmlkfT57Y2hpbGRyZW59PC9sYWJlbD5cbiAgICAgIDwvV3JhcHBlcj5cbiAgICApO1xuICB9XG59XG4iLCIvKiB0c2xpbnQ6ZGlzYWJsZSBtYXgtbGluZS1sZW5ndGggKi9cbmltcG9ydCBSZWFjdCwgeyBTVkdBdHRyaWJ1dGVzIH0gZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHByb3ZlZChwcm9wczogU1ZHQXR0cmlidXRlczxTVkdTVkdFbGVtZW50Pikge1xuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgd2lkdGg9XCIzMFwiXG4gICAgICBoZWlnaHQ9XCIzMFwiXG4gICAgICB2aWV3Qm94PVwiMCAwIDMwIDMwXCJcbiAgICAgIHsuLi5wcm9wc31cbiAgICA+XG4gICAgICA8ZyB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTgwIC0yMTUpXCI+XG4gICAgICAgIDxnIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgxNyAzOSlcIj5cbiAgICAgICAgICA8ZyB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoNjMgMTc2KVwiIGZpbGw9XCJub25lXCI+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICBkPVwiTSAxNSAyOSBDIDExLjI2MDQ3MDM5MDMxOTgyIDI5IDcuNzQ0NzYwMDM2NDY4NTA2IDI3LjU0Mzc1MDc2MjkzOTQ1IDUuMTAwNTEwMTIwMzkxODQ2IDI0Ljg5OTQ5MDM1NjQ0NTMxIEMgMi40NTYyNDk5NTIzMTYyODQgMjIuMjU1MjM5NDg2Njk0MzQgMSAxOC43Mzk1MzA1NjMzNTQ0OSAxIDE1IEMgMSAxMS4yNjA0NzAzOTAzMTk4MiAyLjQ1NjI0OTk1MjMxNjI4NCA3Ljc0NDc2MDAzNjQ2ODUwNiA1LjEwMDUxMDEyMDM5MTg0NiA1LjEwMDUxMDEyMDM5MTg0NiBDIDcuNzQ0NzYwMDM2NDY4NTA2IDIuNDU2MjQ5OTUyMzE2Mjg0IDExLjI2MDQ3MDM5MDMxOTgyIDEgMTUgMSBDIDE4LjczOTUzMDU2MzM1NDQ5IDEgMjIuMjU1MjM5NDg2Njk0MzQgMi40NTYyNDk5NTIzMTYyODQgMjQuODk5NDkwMzU2NDQ1MzEgNS4xMDA1MTAxMjAzOTE4NDYgQyAyNy41NDM3NTA3NjI5Mzk0NSA3Ljc0NDc2MDAzNjQ2ODUwNiAyOSAxMS4yNjA0NzAzOTAzMTk4MiAyOSAxNSBDIDI5IDE4LjczOTUzMDU2MzM1NDQ5IDI3LjU0Mzc1MDc2MjkzOTQ1IDIyLjI1NTIzOTQ4NjY5NDM0IDI0Ljg5OTQ5MDM1NjQ0NTMxIDI0Ljg5OTQ5MDM1NjQ0NTMxIEMgMjIuMjU1MjM5NDg2Njk0MzQgMjcuNTQzNzUwNzYyOTM5NDUgMTguNzM5NTMwNTYzMzU0NDkgMjkgMTUgMjkgWlwiXG4gICAgICAgICAgICAgIHN0cm9rZT1cIm5vbmVcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgIGQ9XCJNIDE1IDIgQyAxMS41Mjc1NzA3MjQ0ODczIDIgOC4yNjI5OTA5NTE1MzgwODYgMy4zNTIyMzk2MDg3NjQ2NDggNS44MDc2MDk1NTgxMDU0NjkgNS44MDc2MDk1NTgxMDU0NjkgQyAzLjM1MjIzOTYwODc2NDY0OCA4LjI2Mjk5MDk1MTUzODA4NiAyIDExLjUyNzU3MDcyNDQ4NzMgMiAxNSBDIDIgMTguNDcyNDMxMTgyODYxMzMgMy4zNTIyMzk2MDg3NjQ2NDggMjEuNzM3MDEwOTU1ODEwNTUgNS44MDc2MDk1NTgxMDU0NjkgMjQuMTkyMzkwNDQxODk0NTMgQyA4LjI2Mjk5MDk1MTUzODA4NiAyNi42NDc3NjAzOTEyMzUzNSAxMS41Mjc1NzA3MjQ0ODczIDI4IDE1IDI4IEMgMTguNDcyNDMxMTgyODYxMzMgMjggMjEuNzM3MDEwOTU1ODEwNTUgMjYuNjQ3NzYwMzkxMjM1MzUgMjQuMTkyMzkwNDQxODk0NTMgMjQuMTkyMzkwNDQxODk0NTMgQyAyNi42NDc3NjAzOTEyMzUzNSAyMS43MzcwMTA5NTU4MTA1NSAyOCAxOC40NzI0MzExODI4NjEzMyAyOCAxNSBDIDI4IDExLjUyNzU3MDcyNDQ4NzMgMjYuNjQ3NzYwMzkxMjM1MzUgOC4yNjI5OTA5NTE1MzgwODYgMjQuMTkyMzkwNDQxODk0NTMgNS44MDc2MDk1NTgxMDU0NjkgQyAyMS43MzcwMTA5NTU4MTA1NSAzLjM1MjIzOTYwODc2NDY0OCAxOC40NzI0MzExODI4NjEzMyAyIDE1IDIgTSAxNSAwIEMgMjMuMjg0MjY5MzMyODg1NzQgMCAzMCA2LjcxNTczMDY2NzExNDI1OCAzMCAxNSBDIDMwIDIzLjI4NDI2OTMzMjg4NTc0IDIzLjI4NDI2OTMzMjg4NTc0IDMwIDE1IDMwIEMgNi43MTU3MzA2NjcxMTQyNTggMzAgMCAyMy4yODQyNjkzMzI4ODU3NCAwIDE1IEMgMCA2LjcxNTczMDY2NzExNDI1OCA2LjcxNTczMDY2NzExNDI1OCAwIDE1IDAgWlwiXG4gICAgICAgICAgICAgIHN0cm9rZT1cIm5vbmVcIlxuICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9nPlxuICAgICAgICA8L2c+XG4gICAgICAgIDxwYXRoXG4gICAgICAgICAgZD1cIk04LjkyNSwxNS44NzEsNS4wNDcsMTEuODg2LDMuNDEsMTMuNDEsOSwxOSwyMC41NjIsNy40NjdsLTEuNy0xLjU5NVpcIlxuICAgICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSg4Mi41OSAyMTcuNTk1KVwiXG4gICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgIC8+XG4gICAgICA8L2c+XG4gICAgPC9zdmc+XG4gICk7XG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgU1ZHQXR0cmlidXRlcyB9IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2hldnJvbkxlZnRSb3VuZChwcm9wczogU1ZHQXR0cmlidXRlczxTVkdTVkdFbGVtZW50Pikge1xuICByZXR1cm4gKFxuICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMzBcIiBoZWlnaHQ9XCIzMFwiIHZpZXdCb3g9XCIwIDAgMzAgMzBcIiB7Li4ucHJvcHN9PlxuICAgICAgPGcgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC0zNiAtMzYpXCI+XG4gICAgICAgIDxnIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgzNiAzNilcIiBmaWxsPVwibm9uZVwiPlxuICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICBkPVwiTSAxNSAyOSBDIDExLjI2MDQ3MDM5MDMxOTgyIDI5IDcuNzQ0NzYwMDM2NDY4NTA2IDI3LjU0Mzc1MDc2MjkzOTQ1IDUuMTAwNTEwMTIwMzkxODQ2IDI0Ljg5OTQ5MDM1NjQ0NTMxIEMgMi40NTYyNDk5NTIzMTYyODQgMjIuMjU1MjM5NDg2Njk0MzQgMSAxOC43Mzk1MzA1NjMzNTQ0OSAxIDE1IEMgMSAxMS4yNjA0NzAzOTAzMTk4MiAyLjQ1NjI0OTk1MjMxNjI4NCA3Ljc0NDc2MDAzNjQ2ODUwNiA1LjEwMDUxMDEyMDM5MTg0NiA1LjEwMDUxMDEyMDM5MTg0NiBDIDcuNzQ0NzYwMDM2NDY4NTA2IDIuNDU2MjQ5OTUyMzE2Mjg0IDExLjI2MDQ3MDM5MDMxOTgyIDEgMTUgMSBDIDE4LjczOTUzMDU2MzM1NDQ5IDEgMjIuMjU1MjM5NDg2Njk0MzQgMi40NTYyNDk5NTIzMTYyODQgMjQuODk5NDkwMzU2NDQ1MzEgNS4xMDA1MTAxMjAzOTE4NDYgQyAyNy41NDM3NTA3NjI5Mzk0NSA3Ljc0NDc2MDAzNjQ2ODUwNiAyOSAxMS4yNjA0NzAzOTAzMTk4MiAyOSAxNSBDIDI5IDE4LjczOTUzMDU2MzM1NDQ5IDI3LjU0Mzc1MDc2MjkzOTQ1IDIyLjI1NTIzOTQ4NjY5NDM0IDI0Ljg5OTQ5MDM1NjQ0NTMxIDI0Ljg5OTQ5MDM1NjQ0NTMxIEMgMjIuMjU1MjM5NDg2Njk0MzQgMjcuNTQzNzUwNzYyOTM5NDUgMTguNzM5NTMwNTYzMzU0NDkgMjkgMTUgMjkgWlwiXG4gICAgICAgICAgICBzdHJva2U9XCJub25lXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICBkPVwiTSAxNSAyIEMgMTEuNTI3NTcwNzI0NDg3MyAyIDguMjYyOTkwOTUxNTM4MDg2IDMuMzUyMjM5NjA4NzY0NjQ4IDUuODA3NjA5NTU4MTA1NDY5IDUuODA3NjA5NTU4MTA1NDY5IEMgMy4zNTIyMzk2MDg3NjQ2NDggOC4yNjI5OTA5NTE1MzgwODYgMiAxMS41Mjc1NzA3MjQ0ODczIDIgMTUgQyAyIDE4LjQ3MjQzMTE4Mjg2MTMzIDMuMzUyMjM5NjA4NzY0NjQ4IDIxLjczNzAxMDk1NTgxMDU1IDUuODA3NjA5NTU4MTA1NDY5IDI0LjE5MjM5MDQ0MTg5NDUzIEMgOC4yNjI5OTA5NTE1MzgwODYgMjYuNjQ3NzYwMzkxMjM1MzUgMTEuNTI3NTcwNzI0NDg3MyAyOCAxNSAyOCBDIDE4LjQ3MjQzMTE4Mjg2MTMzIDI4IDIxLjczNzAxMDk1NTgxMDU1IDI2LjY0Nzc2MDM5MTIzNTM1IDI0LjE5MjM5MDQ0MTg5NDUzIDI0LjE5MjM5MDQ0MTg5NDUzIEMgMjYuNjQ3NzYwMzkxMjM1MzUgMjEuNzM3MDEwOTU1ODEwNTUgMjggMTguNDcyNDMxMTgyODYxMzMgMjggMTUgQyAyOCAxMS41Mjc1NzA3MjQ0ODczIDI2LjY0Nzc2MDM5MTIzNTM1IDguMjYyOTkwOTUxNTM4MDg2IDI0LjE5MjM5MDQ0MTg5NDUzIDUuODA3NjA5NTU4MTA1NDY5IEMgMjEuNzM3MDEwOTU1ODEwNTUgMy4zNTIyMzk2MDg3NjQ2NDggMTguNDcyNDMxMTgyODYxMzMgMiAxNSAyIE0gMTUgMCBDIDIzLjI4NDI2OTMzMjg4NTc0IDAgMzAgNi43MTU3MzA2NjcxMTQyNTggMzAgMTUgQyAzMCAyMy4yODQyNjkzMzI4ODU3NCAyMy4yODQyNjkzMzI4ODU3NCAzMCAxNSAzMCBDIDYuNzE1NzMwNjY3MTE0MjU4IDMwIDAgMjMuMjg0MjY5MzMyODg1NzQgMCAxNSBDIDAgNi43MTU3MzA2NjcxMTQyNTggNi43MTU3MzA2NjcxMTQyNTggMCAxNSAwIFpcIlxuICAgICAgICAgICAgc3Ryb2tlPVwibm9uZVwiXG4gICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L2c+XG4gICAgICAgIDxnIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgtMjA3IC0yMTM2KVwiPlxuICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICBkPVwiTTE4MTEuMTgyLDQzNjIuMzQybC03LjU2Nyw2LjczMSw3LjU2Nyw2LjJcIlxuICAgICAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC0xNTUwLjExNiAtMjE4MS44NDIpXCJcbiAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICBzdHJva2VXaWR0aD1cIjJcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZz5cbiAgICAgIDwvZz5cbiAgICA8L3N2Zz5cbiAgKTtcbn1cbiIsIi8qIHRzbGludDpkaXNhYmxlIG1heC1saW5lLWxlbmd0aCAqL1xuaW1wb3J0IFJlYWN0LCB7IFNWR0F0dHJpYnV0ZXMgfSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENoZXZyb25SaWdodFJvdW5kKHByb3BzOiBTVkdBdHRyaWJ1dGVzPFNWR1NWR0VsZW1lbnQ+KSB7XG4gIHJldHVybiAoXG4gICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIzMFwiIGhlaWdodD1cIjMwXCIgdmlld0JveD1cIjAgMCAzMCAzMFwiIHsuLi5wcm9wc30+XG4gICAgICA8ZyB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoOTMgMjA2KSByb3RhdGUoMTgwKVwiPlxuICAgICAgICA8ZyB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoNjMgMTc2KVwiIGZpbGw9XCJub25lXCI+XG4gICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgIGQ9XCJNIDE1IDI5IEMgMTEuMjYwNDcwMzkwMzE5ODIgMjkgNy43NDQ3NjAwMzY0Njg1MDYgMjcuNTQzNzUwNzYyOTM5NDUgNS4xMDA1MTAxMjAzOTE4NDYgMjQuODk5NDkwMzU2NDQ1MzEgQyAyLjQ1NjI0OTk1MjMxNjI4NCAyMi4yNTUyMzk0ODY2OTQzNCAxIDE4LjczOTUzMDU2MzM1NDQ5IDEgMTUgQyAxIDExLjI2MDQ3MDM5MDMxOTgyIDIuNDU2MjQ5OTUyMzE2Mjg0IDcuNzQ0NzYwMDM2NDY4NTA2IDUuMTAwNTEwMTIwMzkxODQ2IDUuMTAwNTEwMTIwMzkxODQ2IEMgNy43NDQ3NjAwMzY0Njg1MDYgMi40NTYyNDk5NTIzMTYyODQgMTEuMjYwNDcwMzkwMzE5ODIgMSAxNSAxIEMgMTguNzM5NTMwNTYzMzU0NDkgMSAyMi4yNTUyMzk0ODY2OTQzNCAyLjQ1NjI0OTk1MjMxNjI4NCAyNC44OTk0OTAzNTY0NDUzMSA1LjEwMDUxMDEyMDM5MTg0NiBDIDI3LjU0Mzc1MDc2MjkzOTQ1IDcuNzQ0NzYwMDM2NDY4NTA2IDI5IDExLjI2MDQ3MDM5MDMxOTgyIDI5IDE1IEMgMjkgMTguNzM5NTMwNTYzMzU0NDkgMjcuNTQzNzUwNzYyOTM5NDUgMjIuMjU1MjM5NDg2Njk0MzQgMjQuODk5NDkwMzU2NDQ1MzEgMjQuODk5NDkwMzU2NDQ1MzEgQyAyMi4yNTUyMzk0ODY2OTQzNCAyNy41NDM3NTA3NjI5Mzk0NSAxOC43Mzk1MzA1NjMzNTQ0OSAyOSAxNSAyOSBaXCJcbiAgICAgICAgICAgIHN0cm9rZT1cIm5vbmVcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgIGQ9XCJNIDE1IDIgQyAxMS41Mjc1NzA3MjQ0ODczIDIgOC4yNjI5OTA5NTE1MzgwODYgMy4zNTIyMzk2MDg3NjQ2NDggNS44MDc2MDk1NTgxMDU0NjkgNS44MDc2MDk1NTgxMDU0NjkgQyAzLjM1MjIzOTYwODc2NDY0OCA4LjI2Mjk5MDk1MTUzODA4NiAyIDExLjUyNzU3MDcyNDQ4NzMgMiAxNSBDIDIgMTguNDcyNDMxMTgyODYxMzMgMy4zNTIyMzk2MDg3NjQ2NDggMjEuNzM3MDEwOTU1ODEwNTUgNS44MDc2MDk1NTgxMDU0NjkgMjQuMTkyMzkwNDQxODk0NTMgQyA4LjI2Mjk5MDk1MTUzODA4NiAyNi42NDc3NjAzOTEyMzUzNSAxMS41Mjc1NzA3MjQ0ODczIDI4IDE1IDI4IEMgMTguNDcyNDMxMTgyODYxMzMgMjggMjEuNzM3MDEwOTU1ODEwNTUgMjYuNjQ3NzYwMzkxMjM1MzUgMjQuMTkyMzkwNDQxODk0NTMgMjQuMTkyMzkwNDQxODk0NTMgQyAyNi42NDc3NjAzOTEyMzUzNSAyMS43MzcwMTA5NTU4MTA1NSAyOCAxOC40NzI0MzExODI4NjEzMyAyOCAxNSBDIDI4IDExLjUyNzU3MDcyNDQ4NzMgMjYuNjQ3NzYwMzkxMjM1MzUgOC4yNjI5OTA5NTE1MzgwODYgMjQuMTkyMzkwNDQxODk0NTMgNS44MDc2MDk1NTgxMDU0NjkgQyAyMS43MzcwMTA5NTU4MTA1NSAzLjM1MjIzOTYwODc2NDY0OCAxOC40NzI0MzExODI4NjEzMyAyIDE1IDIgTSAxNSAwIEMgMjMuMjg0MjY5MzMyODg1NzQgMCAzMCA2LjcxNTczMDY2NzExNDI1OCAzMCAxNSBDIDMwIDIzLjI4NDI2OTMzMjg4NTc0IDIzLjI4NDI2OTMzMjg4NTc0IDMwIDE1IDMwIEMgNi43MTU3MzA2NjcxMTQyNTggMzAgMCAyMy4yODQyNjkzMzI4ODU3NCAwIDE1IEMgMCA2LjcxNTczMDY2NzExNDI1OCA2LjcxNTczMDY2NzExNDI1OCAwIDE1IDAgWlwiXG4gICAgICAgICAgICBzdHJva2U9XCJub25lXCJcbiAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZz5cbiAgICAgICAgPGcgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC0xODAgLTE5OTYpXCI+XG4gICAgICAgICAgPHBhdGggZD1cIk0xODExLjE4Miw0MzYyLjM0MmwtNy41NjcsNi43MzEsNy41NjcsNi4yXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC0xNTUwLjExNiAtMjE4MS44NDIpXCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2VXaWR0aD1cIjJcIi8+XG4gICAgICAgIDwvZz5cbiAgICAgIDwvZz5cbiAgICA8L3N2Zz5cbiAgKTtcbn1cbiIsImltcG9ydCBSZWFjdCwgeyBTVkdBdHRyaWJ1dGVzIH0gZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGaWxlUm91bmQocHJvcHM6IFNWR0F0dHJpYnV0ZXM8U1ZHU1ZHRWxlbWVudD4pIHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjMwXCIgaGVpZ2h0PVwiMzBcIiB2aWV3Qm94PVwiMCAwIDMwIDMwXCIgey4uLnByb3BzfT5cbiAgICAgIDxnIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgtNDY4IC0zODMpXCI+XG4gICAgICAgIDxnIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSg0MDUgMjA3KVwiPlxuICAgICAgICAgIDxnIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSg2MyAxNzYpXCIgZmlsbD1cIm5vbmVcIj5cbiAgICAgICAgICAgIDxwYXRoIGQ9XCJNIDE1IDI5IEMgMTEuMjYwNDcwMzkwMzE5ODIgMjkgNy43NDQ3NjAwMzY0Njg1MDYgMjcuNTQzNzUwNzYyOTM5NDUgNS4xMDA1MTAxMjAzOTE4NDYgMjQuODk5NDkwMzU2NDQ1MzEgQyAyLjQ1NjI0OTk1MjMxNjI4NCAyMi4yNTUyMzk0ODY2OTQzNCAxIDE4LjczOTUzMDU2MzM1NDQ5IDEgMTUgQyAxIDExLjI2MDQ3MDM5MDMxOTgyIDIuNDU2MjQ5OTUyMzE2Mjg0IDcuNzQ0NzYwMDM2NDY4NTA2IDUuMTAwNTEwMTIwMzkxODQ2IDUuMTAwNTEwMTIwMzkxODQ2IEMgNy43NDQ3NjAwMzY0Njg1MDYgMi40NTYyNDk5NTIzMTYyODQgMTEuMjYwNDcwMzkwMzE5ODIgMSAxNSAxIEMgMTguNzM5NTMwNTYzMzU0NDkgMSAyMi4yNTUyMzk0ODY2OTQzNCAyLjQ1NjI0OTk1MjMxNjI4NCAyNC44OTk0OTAzNTY0NDUzMSA1LjEwMDUxMDEyMDM5MTg0NiBDIDI3LjU0Mzc1MDc2MjkzOTQ1IDcuNzQ0NzYwMDM2NDY4NTA2IDI5IDExLjI2MDQ3MDM5MDMxOTgyIDI5IDE1IEMgMjkgMTguNzM5NTMwNTYzMzU0NDkgMjcuNTQzNzUwNzYyOTM5NDUgMjIuMjU1MjM5NDg2Njk0MzQgMjQuODk5NDkwMzU2NDQ1MzEgMjQuODk5NDkwMzU2NDQ1MzEgQyAyMi4yNTUyMzk0ODY2OTQzNCAyNy41NDM3NTA3NjI5Mzk0NSAxOC43Mzk1MzA1NjMzNTQ0OSAyOSAxNSAyOSBaXCIgc3Ryb2tlPVwibm9uZVwiLz5cbiAgICAgICAgICAgIDxwYXRoIGQ9XCJNIDE1IDIgQyAxMS41Mjc1NzA3MjQ0ODczIDIgOC4yNjI5OTA5NTE1MzgwODYgMy4zNTIyMzk2MDg3NjQ2NDggNS44MDc2MDk1NTgxMDU0NjkgNS44MDc2MDk1NTgxMDU0NjkgQyAzLjM1MjIzOTYwODc2NDY0OCA4LjI2Mjk5MDk1MTUzODA4NiAyIDExLjUyNzU3MDcyNDQ4NzMgMiAxNSBDIDIgMTguNDcyNDMxMTgyODYxMzMgMy4zNTIyMzk2MDg3NjQ2NDggMjEuNzM3MDEwOTU1ODEwNTUgNS44MDc2MDk1NTgxMDU0NjkgMjQuMTkyMzkwNDQxODk0NTMgQyA4LjI2Mjk5MDk1MTUzODA4NiAyNi42NDc3NjAzOTEyMzUzNSAxMS41Mjc1NzA3MjQ0ODczIDI4IDE1IDI4IEMgMTguNDcyNDMxMTgyODYxMzMgMjggMjEuNzM3MDEwOTU1ODEwNTUgMjYuNjQ3NzYwMzkxMjM1MzUgMjQuMTkyMzkwNDQxODk0NTMgMjQuMTkyMzkwNDQxODk0NTMgQyAyNi42NDc3NjAzOTEyMzUzNSAyMS43MzcwMTA5NTU4MTA1NSAyOCAxOC40NzI0MzExODI4NjEzMyAyOCAxNSBDIDI4IDExLjUyNzU3MDcyNDQ4NzMgMjYuNjQ3NzYwMzkxMjM1MzUgOC4yNjI5OTA5NTE1MzgwODYgMjQuMTkyMzkwNDQxODk0NTMgNS44MDc2MDk1NTgxMDU0NjkgQyAyMS43MzcwMTA5NTU4MTA1NSAzLjM1MjIzOTYwODc2NDY0OCAxOC40NzI0MzExODI4NjEzMyAyIDE1IDIgTSAxNSAwIEMgMjMuMjg0MjY5MzMyODg1NzQgMCAzMCA2LjcxNTczMDY2NzExNDI1OCAzMCAxNSBDIDMwIDIzLjI4NDI2OTMzMjg4NTc0IDIzLjI4NDI2OTMzMjg4NTc0IDMwIDE1IDMwIEMgNi43MTU3MzA2NjcxMTQyNTggMzAgMCAyMy4yODQyNjkzMzI4ODU3NCAwIDE1IEMgMCA2LjcxNTczMDY2NzExNDI1OCA2LjcxNTczMDY2NzExNDI1OCAwIDE1IDAgWlwiIHN0cm9rZT1cIm5vbmVcIiBmaWxsPVwiY3VycmVudENvbG9yXCIvPlxuICAgICAgICAgIDwvZz5cbiAgICAgICAgPC9nPlxuICAgICAgICA8ZyB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMzg0IDIwOClcIj5cbiAgICAgICAgICA8ZyB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoOTMgMTgyKVwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlV2lkdGg9XCIyXCI+XG4gICAgICAgICAgICA8cmVjdCB3aWR0aD1cIjEyXCIgaGVpZ2h0PVwiMTZcIiByeD1cIjFcIiBzdHJva2U9XCJub25lXCIvPlxuICAgICAgICAgICAgPHJlY3QgeD1cIjFcIiB5PVwiMVwiIHdpZHRoPVwiMTBcIiBoZWlnaHQ9XCIxNFwiIGZpbGw9XCJub25lXCIvPlxuICAgICAgICAgIDwvZz5cbiAgICAgICAgICA8cmVjdCB3aWR0aD1cIjRcIiBoZWlnaHQ9XCIxLjNcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoOTcgMTg2KVwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIi8+XG4gICAgICAgICAgPHJlY3Qgd2lkdGg9XCI0XCIgaGVpZ2h0PVwiMS4zXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDk3IDE4OSlcIiBmaWxsPVwiY3VycmVudENvbG9yXCIvPlxuICAgICAgICAgIDxyZWN0IHdpZHRoPVwiNFwiIGhlaWdodD1cIjEuM1wiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSg5NyAxOTIpXCIgZmlsbD1cImN1cnJlbnRDb2xvclwiLz5cbiAgICAgICAgPC9nPlxuICAgICAgPC9nPlxuICAgIDwvc3ZnPlxuICApO1xufVxuIiwiaW1wb3J0IFJlYWN0LCB7IFNWR0F0dHJpYnV0ZXMgfSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBlbmNpbChwcm9wczogU1ZHQXR0cmlidXRlczxTVkdTVkdFbGVtZW50Pikge1xuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgd2lkdGg9XCIxNy43OTZcIlxuICAgICAgaGVpZ2h0PVwiMTcuOTA4XCJcbiAgICAgIHZpZXdCb3g9XCIwIDAgMTcuNzk2IDE3LjkwOFwiXG4gICAgICB7Li4ucHJvcHN9XG4gICAgPlxuICAgICAgPGcgb3BhY2l0eT1cIjAuNlwiPlxuICAgICAgICA8Zz5cbiAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgZD1cIk0xLjI1NCwxMi42NzQuNSwxNy40MDhsNC43MjYtLjhMMTcuMyw0LjQ3MiwxMy4yODEuNVpcIlxuICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXG4gICAgICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcbiAgICAgICAgICAgIHN0cm9rZVdpZHRoPVwiMVwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9nPlxuICAgICAgICA8bGluZVxuICAgICAgICAgIHgyPVwiMy44NTFcIlxuICAgICAgICAgIHkyPVwiMy44MzhcIlxuICAgICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgxLjM3NSAxMi43NjYpXCJcbiAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxuICAgICAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxuICAgICAgICAgIHN0cm9rZVdpZHRoPVwiMVwiXG4gICAgICAgIC8+XG4gICAgICAgIDxsaW5lXG4gICAgICAgICAgeDI9XCIzLjgzNlwiXG4gICAgICAgICAgeTI9XCIzLjgwMVwiXG4gICAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDEwLjk0OSAyLjk1OSlcIlxuICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXG4gICAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXG4gICAgICAgICAgc3Ryb2tlV2lkdGg9XCIxXCJcbiAgICAgICAgLz5cbiAgICAgIDwvZz5cbiAgICA8L3N2Zz5cbiAgKTtcbn1cbiIsIi8qIHRzbGludDpkaXNhYmxlIG1heC1saW5lLWxlbmd0aCAqL1xuaW1wb3J0IFJlYWN0LCB7IFNWR0F0dHJpYnV0ZXMgfSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFVzZXIocHJvcHM6IFNWR0F0dHJpYnV0ZXM8U1ZHU1ZHRWxlbWVudD4pIHtcbiAgcmV0dXJuKFxuICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMzBcIiBoZWlnaHQ9XCIzMFwiIHZpZXdCb3g9XCIwIDAgMzAgMzBcIiB7Li4ucHJvcHN9PlxuICAgIDxnIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgtNDY4IC0zODMpXCI+XG4gICAgICA8ZyB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoNDY4IDM4MylcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZVdpZHRoPVwiMlwiPlxuICAgICAgICA8Y2lyY2xlIGN4PVwiMTVcIiBjeT1cIjE1XCIgcj1cIjE1XCIgc3Ryb2tlPVwibm9uZVwiLz5cbiAgICAgICAgPGNpcmNsZSBjeD1cIjE1XCIgY3k9XCIxNVwiIHI9XCIxNFwiIGZpbGw9XCJub25lXCIvPlxuICAgICAgPC9nPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD1cIk0tNC0zMTBhNi4wMTgsNi4wMTgsMCwwLDEsNi02SDRhNi4wMTgsNi4wMTgsMCwwLDEsNiw2Wm0yLjYtMkg3LjVBNC4wMzMsNC4wMzMsMCwwLDAsNC0zMTRIMi4xQTQuMDM1LDQuMDM1LDAsMCwwLTEuNC0zMTJabS40LTl2LTFhNC4wMTIsNC4wMTIsMCwwLDEsNC00LDQuMDEyLDQuMDEyLDAsMCwxLDQsNHYxYTQuMDEyLDQuMDEyLDAsMCwxLTQsNEE0LjAxMiw0LjAxMiwwLDAsMS0xLTMyMVptMi0xdjFhMi4wMDYsMi4wMDYsMCwwLDAsMiwyLDIuMDA2LDIuMDA2LDAsMCwwLDItMnYtMWEyLjAwNiwyLjAwNiwwLDAsMC0yLTJBMi4wMDYsMi4wMDYsMCwwLDAsMS0zMjJaXCJcbiAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDQ3OS45OTkgNzE2KVwiXG4gICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgLz5cbiAgICA8L2c+XG4gIDwvc3ZnPlxuICApO1xufVxuIiwiaW1wb3J0IFJlYWN0LCB7IFNWR0F0dHJpYnV0ZXMgfSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENsb3NlKHByb3BzOiBTVkdBdHRyaWJ1dGVzPFNWR1NWR0VsZW1lbnQ+KSB7XG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICB3aWR0aD1cIjI2Ljk5OFwiXG4gICAgICBoZWlnaHQ9XCIyNi45OThcIlxuICAgICAgdmlld0JveD1cIjAgMCAyNi45OTggMjYuOTk4XCJcbiAgICAgIHBvaW50ZXJFdmVudHM9XCJib3VuZGluZy1ib3hcIlxuICAgICAgey4uLnByb3BzfVxuICAgID5cbiAgICAgIDxnIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgtMTMxIC01NzEpXCI+XG4gICAgICAgIDxnIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgxMzIgNTcyKVwiPlxuICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICBkPVwiTTI4LjUsMjYsMTYsMTMuNSwyOC41LDFcIlxuICAgICAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC0zLjUwMSAtMSlcIlxuICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXG4gICAgICAgICAgICBzdHJva2VNaXRlcmxpbWl0PVwiMTBcIlxuICAgICAgICAgICAgc3Ryb2tlV2lkdGg9XCIyXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICBkPVwiTTEsMjYsMTMuNSwxMy41LDEsMVwiXG4gICAgICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTEgLTEpXCJcbiAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxuICAgICAgICAgICAgc3Ryb2tlTWl0ZXJsaW1pdD1cIjEwXCJcbiAgICAgICAgICAgIHN0cm9rZVdpZHRoPVwiMlwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9nPlxuICAgICAgPC9nPlxuICAgIDwvc3ZnPlxuICApO1xufVxuIiwiXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzZXRBbGlnbih7IGFsaWduIH06IHsgYWxpZ24/OiAnbGVmdCcgfCAncmlnaHQnIHwgJ2NlbnRlcicgfSkge1xuICBzd2l0Y2ggKGFsaWduKSB7XG4gICAgY2FzZSAnbGVmdCc6XG4gICAgICByZXR1cm4gJ2ZsZXgtc3RhcnQnO1xuICAgIGNhc2UgJ3JpZ2h0JzpcbiAgICAgIHJldHVybiAnZmxleC1lbmQnO1xuICAgIGNhc2UgJ2NlbnRlcic6XG4gICAgICByZXR1cm4gJ2NlbnRlcic7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiAnc3BhY2UtZXZlbmx5JztcbiAgfVxufVxuIiwiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQsIEhUTUxBdHRyaWJ1dGVzIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHRyYW5zcGFyZW50aXplIGZyb20gJ3BvbGlzaGVkL2xpYi9jb2xvci90cmFuc3BhcmVudGl6ZSc7XG5pbXBvcnQgc3R5bGVkLCB7IGNzcyB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBmaW5kQ29sb3JJbnZlcnQgZnJvbSAnLi4vLi4vdXRpbHMvZmluZENvbG9ySW52ZXJ0JztcbmltcG9ydCBoYW1idWdlciBmcm9tICcuLi8uLi91dGlscy9oYW1idWdlcic7XG5pbXBvcnQgc2V0QWxpZ24gZnJvbSAnLi4vLi4vdXRpbHMvc2V0QWxpZ24nO1xuaW1wb3J0IHsgbWVkaWFUYWJsZXQsIG1lZGlhVW50aWxGdWxsSEQsIG1lZGlhTW9iaWxlIH0gZnJvbSAnLi4vLi4vdXRpbHMvbWVkaWEnO1xuaW1wb3J0IHsgQ29sb3JUeXBlLCBBbGlnblR5cGUsIENTU1R5cGUsIFRoZW1lVHlwZSB9IGZyb20gJy4uLy4uL3R5cGVzJztcblxuZnVuY3Rpb24gc2V0Q29sb3IoXG4gIHsgY29sb3IsIHRoZW1lLCBiYWNrZHJvcCB9OiB7IGNvbG9yPzogQ29sb3JUeXBlLCB0aGVtZTogVGhlbWVUeXBlLCBiYWNrZHJvcD86IGJvb2xlYW4gfSxcbikge1xuICBjb25zdCBiYWNrZ3JvdW5kQ29sb3IgPSBjb2xvciA/IHRoZW1lW2NvbG9yXSA6ICd0cmFuc3BhcmVudCc7XG4gIGNvbnN0IHRleHRDb2xvciA9XG4gICAgZmluZENvbG9ySW52ZXJ0KHRoZW1lLCBiYWNrZ3JvdW5kQ29sb3IgPT09ICd0cmFuc3BhcmVudCcgPyB0aGVtZS5iYWNrZ3JvdW5kIDogYmFja2dyb3VuZENvbG9yKTtcblxuICBpZiAoYmFja2Ryb3ApIHtcbiAgICBjb25zdCBiYWNrQ29sb3IgPVxuICAgICAgdHJhbnNwYXJlbnRpemUoMC4yLCAoYmFja2dyb3VuZENvbG9yID09PSAndHJhbnNwYXJlbnQnID8gdGhlbWUud2hpdGUgOiBiYWNrZ3JvdW5kQ29sb3IpKTtcbiAgICBjb25zdCB1YSA9IG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKTtcbiAgICBpZiAodWEuaW5kZXhPZignc2FmYXJpJykgPiAtMSAmJiB1YS5pbmRleE9mKCdjaHJvbWUnKSA9PT0gLTEpIHtcbiAgICAgIHJldHVybiBjc3NgYmFja2dyb3VuZC1jb2xvcjogJHtiYWNrQ29sb3J9OyBjb2xvcjogJHt0ZXh0Q29sb3J9OyBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoOHB4KTtgO1xuICAgIH1cblxuICAgIHJldHVybiBjc3NgXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke2JhY2tDb2xvcn07XG4gICAgICBjb2xvcjogJHt0ZXh0Q29sb3J9O1xuICAgIGA7XG4gIH1cblxuICByZXR1cm4gY3NzYGJhY2tncm91bmQtY29sb3I6ICR7YmFja2dyb3VuZENvbG9yfTsgY29sb3I6ICR7dGV4dENvbG9yfTtgO1xufVxuXG5pbnRlcmZhY2UgTmF2UHJvcHMge1xuICBjb2xvcj86IENvbG9yVHlwZTtcbiAgYmFja2Ryb3A/OiBib29sZWFuO1xuICBmaXhlZD86IGJvb2xlYW47XG4gIHN0aWNreT86IGJvb2xlYW47XG4gIGZsdWlkPzogYm9vbGVhbjtcbiAgc2hvdz86IGJvb2xlYW47XG4gIHN0eWxlPzogYW55O1xuICBhbGlnbj86IEFsaWduVHlwZTtcbiAgcm9sZTogc3RyaW5nO1xuICBjc3M/OiBDU1NUeXBlO1xufVxuXG5jb25zdCBOYXZCYXIgPSBzdHlsZWQuaGVhZGVyPE5hdlByb3BzPmBcbiAgcG9zaXRpb246ICR7XG4gICAgKHsgZml4ZWQsIHN0aWNreSB9KSA9PiAoIShzdGlja3kgfHwgZml4ZWQpID8gJ3JlbGF0aXZlJyA6IChmaXhlZCA/ICdmaXhlZCcgOiAnc3RpY2t5JykpXG4gIH07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzdHJldGNoO1xuICB0b3A6IC0xcHg7XG5cbiAgbWluLWhlaWdodDogMy4yNXJlbTtcbiAgd2lkdGg6IDEwMCU7XG4gIHotaW5kZXg6IDMwO1xuXG4gICR7c2V0Q29sb3J9XG5cbiAgYSB7IGNvbG9yOiBpbmhlcml0OyB9XG5cbiAgJHttZWRpYVRhYmxldH0ge1xuICAgIHBhZGRpbmc6ICR7KHsgZmx1aWQgfTogTmF2UHJvcHMpID0+IGZsdWlkID8gJzAgMC41cmVtJyA6ICcwIDMlJ307XG4gIH1cbiAgJHttZWRpYVVudGlsRnVsbEhEfSB7XG4gICAgcGFkZGluZzogJHsoeyBmbHVpZCB9OiBOYXZQcm9wcykgPT4gZmx1aWQgPyAnMCAwLjc1cmVtJyA6ICcwIDUlJ307XG4gIH1cbiAgJHsoeyBjc3MgfSkgPT4gY3NzIHx8IHt9fVxuYDtcblxuY29uc3QgQnVyZ2VyID0gc3R5bGVkLmJ1dHRvbmBcbiAgJHtoYW1idWdlcignMy4yNXJlbScpfVxuICBkaXNwbGF5OiBub25lO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6IGluaGVyaXQ7XG5cbiAgb3V0bGluZTogbm9uZTtcblxuICAmOmhvdmVye1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgLjA1KTtcbiAgfVxuXG4gICR7bWVkaWFNb2JpbGV9IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuYDtcblxuaW50ZXJmYWNlIENvbnRlbnRQcm9wcyB7XG4gIGNvbG9yPzogQ29sb3JUeXBlO1xuICBzaG93PzogYm9vbGVhbjtcbiAgYWxpZ24/OiAnbGVmdCcgfCAncmlnaHQnO1xufVxuXG5jb25zdCBOYXZDb250ZW50ID0gc3R5bGVkLmRpdjxDb250ZW50UHJvcHM+YFxuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtYmFzaXM6IGF1dG87XG4gIGZsZXgtZ3JvdzogMTtcblxuICAmID4gdWwge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIGZsZXgtZ3JvdzogMTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6ICR7c2V0QWxpZ259O1xuXG4gICAgbGkge1xuICAgICAgcGFkZGluZzogMCAwLjc1cmVtO1xuICAgIH1cbiAgfVxuXG4gICYgPiBkaXYsICYgPiBzcGFuLCAmID4gZm9ybSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICAkeyh7IGNvbG9yIH0pID0+IChjb2xvciA/IGBjb2xvcjogJHtjb2xvcn07YCA6ICcnKX1cbiAgfVxuXG4gICR7bWVkaWFNb2JpbGV9IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuXG4gICAgcGFkZGluZy1ib3R0b206IDAuNXJlbTtcblxuICAgIGJ1dHRvbjpub3QoLmFjdGl2ZSkrJiB7XG4gICAgICBkaXNwbGF5Om5vbmU7XG4gICAgfVxuXG4gICAgJiA+IHVsIHtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGxpIHtcbiAgICAgICAgcGFkZGluZzogLjVyZW0gMDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmID4gZGl2LCAmID4gc3BhbiwgJiA+IGZvcm0ge1xuICAgICAgcGFkZGluZzogLjVyZW0gMDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgfVxuYDtcblxuXG5pbnRlcmZhY2UgUHJvcHMgZXh0ZW5kcyBIVE1MQXR0cmlidXRlczxIVE1MRGl2RWxlbWVudD4ge1xuICAvKiogYmFja2dyb3VuZOiJsiAqL1xuICBjb2xvcj86IENvbG9yVHlwZTtcbiAgLyoqIOODreOCtOOBruOCpOODoeODvOOCuOOAgeODl+ODreOCuOOCp+OCr+ODiOWQjeOBquOBqSAqL1xuICBicmFuZD86IFJlYWN0LlJlYWN0RWxlbWVudDxhbnk+IHwgc3RyaW5nO1xuICAvKiog5a6a576p44GV44KM44Gf5L2N572u44KS5Zu65a6a44Gr44GZ44KLICovXG4gIGZpeGVkPzogYm9vbGVhbjtcbiAgLyoqIChJRTEx5LiN5Y+vKeeUu+mdouOBjOOCueOCr+ODreODvOODq+OBleOCjOOBpuOCguS4iuOBp+iyvOOCiuS7mOOBkeOBhOOCi+OCiOOBhuOBq+OBmeOCiyAqL1xuICBzdGlja3k/OiBib29sZWFuO1xuICAvKiog5Lit5aSu5Lim44Gz44GL44KJ6Ieq5YuV5bmF44Gn6KGo56S644GX44G+44GZICovXG4gIGZsdWlkPzogYm9vbGVhbjtcbiAgLyoqIOiDjOaZr+OBjGJsdXLjgZXjgozjgb7jgZnvvIhzYWZhcmnlsILnlKjjgIHku5bjga/pgI/mmI7luqbvvIkgKi9cbiAgYmFja2Ryb3A/OiBib29sZWFuO1xuICAvKiogY2hpbGRyZW7jgavlrprnvqnjgZnjgotFbGVtZW5044Gu5Lim44Gz6aCG44KS5oyH5a6a44GX44G+44GZ44CC5pyq5a6a576p44Gv6Ieq5YuV5Lim44GzICovXG4gIGFsaWduPzogJ2xlZnQnIHwgJ3JpZ2h0JztcbiAgLyoqIOOCq+OCueOCv+ODoENTU+Wumue+qSAqL1xuICBjc3M/OiBDU1NUeXBlO1xufVxuXG50eXBlIFN0YXRlID0ge1xuICBzaG93OiBib29sZWFuLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBwQmFyIGV4dGVuZHMgUHVyZUNvbXBvbmVudDxQcm9wcywgU3RhdGU+IHtcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBjb2xvcjogbnVsbCxcbiAgICBicmFuZDogbnVsbCxcbiAgICBmaXhlZDogZmFsc2UsXG4gICAgc3RpY2t5OiBmYWxzZSxcbiAgICBmbHVpZDogZmFsc2UsXG4gICAgYmFja2Ryb3A6IGZhbHNlLFxuICB9O1xuXG4gIHN0YXRlID0geyBzaG93OiBmYWxzZSB9O1xuXG4gIHRvZ2dsZU1lbnUgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNob3c6ICF0aGlzLnN0YXRlLnNob3cgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjaGlsZHJlbiwgYWxpZ24sIGJyYW5kLCAuLi5yZXN0IH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgc2hvdyB9ID0gdGhpcy5zdGF0ZTtcbiAgICByZXR1cm4gKFxuICAgICAgPE5hdkJhclxuICAgICAgICByb2xlPVwibmF2aWdhdGlvblwiXG4gICAgICAgIHsuLi5yZXN0fVxuICAgICAgPlxuICAgICAgICB7YnJhbmR9XG4gICAgICAgIDxCdXJnZXIgY2xhc3NOYW1lPXtzaG93ID8gJ2FjdGl2ZScgOiAnJ30gb25DbGljaz17dGhpcy50b2dnbGVNZW51fT5cbiAgICAgICAgICA8c3BhbiAvPlxuICAgICAgICAgIDxzcGFuIC8+XG4gICAgICAgICAgPHNwYW4gLz5cbiAgICAgICAgPC9CdXJnZXI+XG4gICAgICAgIDxOYXZDb250ZW50IGFsaWduPXthbGlnbn0+XG4gICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L05hdkNvbnRlbnQ+XG4gICAgICA8L05hdkJhcj5cbiAgICApO1xuICB9XG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgSFRNTEF0dHJpYnV0ZXMsIFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkLCB7IGNzcyB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBkYXJrZW4gZnJvbSAncG9saXNoZWQvbGliL2NvbG9yL2Rhcmtlbic7XG5pbXBvcnQgZmluZENvbG9ySW52ZXJ0IGZyb20gJy4uLy4uL3V0aWxzL2ZpbmRDb2xvckludmVydCc7XG5pbXBvcnQgeyBDb2xvclR5cGUsIFRoZW1lVHlwZSwgQ1NTVHlwZSB9IGZyb20gJy4uLy4uL3R5cGVzJztcblxuaW50ZXJmYWNlIFdyYXBwZXJQcm9wcyB7XG4gIGNvbG9yPzogQ29sb3JUeXBlO1xuICBhZGRvbkNvbG9yPzogQ29sb3JUeXBlO1xuICBjbG9zZTogYm9vbGVhbjtcbiAgY3NzPzogQ1NTVHlwZTtcbn1cblxuZnVuY3Rpb24gZ2V0Q29sb3IodGhlbWU6IFRoZW1lVHlwZSwgY29sb3I/OiBDb2xvclR5cGUpIHtcbiAgcmV0dXJuICghY29sb3IgfHwgY29sb3IgPT09ICdsaWdodCcpID8gdGhlbWUuYmFja2dyb3VuZCA6IHRoZW1lW2NvbG9yXTtcbn1cblxuZnVuY3Rpb24gc2V0Q29sb3IoeyB0aGVtZSwgY29sb3IsIGFkZG9uQ29sb3IgfTpcbiAgICB7IHRoZW1lOiBUaGVtZVR5cGUsIGNvbG9yPzogQ29sb3JUeXBlLCBhZGRvbkNvbG9yPzogQ29sb3JUeXBlIH0pIHtcbiAgY29uc3QgdGFyZ2V0ID0gZ2V0Q29sb3IodGhlbWUsIGNvbG9yKTtcbiAgY29uc3QgaW52ZXJ0Q29sb3IgPSBmaW5kQ29sb3JJbnZlcnQodGhlbWUsIHRhcmdldCk7XG5cbiAgY29uc3Qgc3ViQ29sb3IgPSBhZGRvbkNvbG9yID8gZ2V0Q29sb3IodGhlbWUsIGFkZG9uQ29sb3IpIDogZGFya2VuKDAuMDUsIHRhcmdldCk7XG5cbiAgcmV0dXJuIGNzc2BcbiAgICBjb2xvcjogJHtpbnZlcnRDb2xvcn07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHt0YXJnZXR9O1xuXG4gICAgYSwgc3BhbiB7XG4gICAgICBjb2xvcjogJHtpbnZlcnRDb2xvcn07XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3N1YkNvbG9yfTtcbiAgICB9XG5cbiAgICBhOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7ZGFya2VuKDAuMDUsIHN1YkNvbG9yKX07XG4gICAgfVxuICBgO1xufVxuXG5jb25zdCBXcmFwcGVyID0gc3R5bGVkLmRpdjxXcmFwcGVyUHJvcHM+YFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xuICBjdXJzb3I6IGRlZmF1bHQ7XG4gIHBhZGRpbmc6IDAgLjVyZW07XG4gIGhlaWdodDogMmVtO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcblxuICAke3NldENvbG9yfVxuXG4gICY6bm90KDpsYXN0LWNoaWxkKSB7XG4gICAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XG4gIH1cblxuICBhLCBzcGFuIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgZmxleC1ncm93OiAwO1xuICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgIG1pbi13aWR0aDogMS41cmVtO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBtYXJnaW4tcmlnaHQ6IC0wLjVyZW07XG4gICAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcbiAgICBwYWRkaW5nOiAwIC41cmVtO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDNweDtcbiAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAzcHg7XG4gICAgfVxuXG4gICAgJjpmb2N1cyB7XG4gICAgICBvdXRsaW5lOiBub25lO1xuICAgIH1cblxuICAgICR7cHJvcHMgPT4gKHByb3BzLmNsb3NlID8gY3NzYFxuICAgICAgJjpiZWZvcmUsICY6YWZ0ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjdXJyZW50Q29sb3I7XG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKC01MCUpIHJvdGF0ZSg0NWRlZyk7XG4gICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciBjZW50ZXI7XG4gICAgICB9XG5cbiAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgaGVpZ2h0OiAxcHg7XG4gICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICB9XG5cbiAgICAgICY6YWZ0ZXIge1xuICAgICAgICBoZWlnaHQ6IDUwJTtcbiAgICAgICAgd2lkdGg6IDFweDtcbiAgICAgIH1cblxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICB9XG4gICAgYCA6ICcnKX1cbiAgfVxuXG4gICR7KHsgY3NzIH0pID0+IGNzcyB8fCAnJ31cbmA7XG5cbmludGVyZmFjZSBQcm9wcyBleHRlbmRzIEhUTUxBdHRyaWJ1dGVzPEhUTUxEaXZFbGVtZW50PiB7XG4gIC8qKiDjgr/jgrDjga7lhoXlrrkgKi9cbiAgY2hpbGRyZW46IGFueTtcbiAgLyoqIFjjg5zjgr/jg7Pjga7ov73liqDvvIvjgq/jg6rjg4Pjgq/mmYLjga7jgqTjg5njg7Pjg4jjg4/jg7Pjg4njg6njg7wgKi9cbiAgb25DbG9zZT86ICgpID0+IHZvaWQ7XG4gIC8qKiDjgq/jg6rjg4Pjgq/mmYLjga7jgqTjg5njg7Pjg4jjg4/jg7Pjg4njg6njg7wgKi9cbiAgb25DbGljaz86ICgpID0+IHZvaWQ7XG4gIC8qKiDoibLjga7mjIflrpogKi9cbiAgY29sb3I/OiBDb2xvclR5cGU7XG4gIC8qKiDjgqvjgrnjgr/jg6BDU1PlrprnvqkgKi9cbiAgY3NzPzogQ1NTVHlwZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFnIGV4dGVuZHMgUHVyZUNvbXBvbmVudDxQcm9wcz4ge1xuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGNoaWxkcmVuOiBudWxsLFxuICAgIG9uQ2xvc2U6IG51bGwsXG4gICAgb25DbGljazogbnVsbCxcbiAgICBjb2xvcjogbnVsbCxcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjaGlsZHJlbiwgb25DbG9zZSwgLi4ucmVzdCB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPFdyYXBwZXIgY2xvc2U9e29uQ2xvc2UgIT09IG51bGx9IHsuLi5yZXN0fT5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgICB7b25DbG9zZSAmJiAoPGEgdGFiSW5kZXg9ezB9IHJvbGU9XCJsaW5rXCIgb25DbGljaz17b25DbG9zZX0+Jm5ic3A7PC9hPil9XG4gICAgICA8L1dyYXBwZXI+XG4gICAgKTtcbiAgfVxufVxuIiwiaW1wb3J0IFJlYWN0LCB7IEhUTUxBdHRyaWJ1dGVzIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCwgeyBjc3MgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJy4uL0dyaWQvQ29udGFpbmVyJztcbmltcG9ydCBmaW5kQ29sb3JJbnZlcnQgZnJvbSAnLi4vLi4vdXRpbHMvZmluZENvbG9ySW52ZXJ0JztcbmltcG9ydCB7IG1lZGlhRGVza3RvcCB9IGZyb20gJy4uLy4uL3V0aWxzL21lZGlhJztcbmltcG9ydCB7IENvbG9yVHlwZSwgVGhlbWVUeXBlLCBTaXplVHlwZSB9IGZyb20gJy4uLy4uL3R5cGVzJztcblxuaW50ZXJmYWNlIFByb3BzIGV4dGVuZHMgSFRNTEF0dHJpYnV0ZXM8SFRNTERpdkVsZW1lbnQ+IHtcbiAgLyoqIOiDjOaZr+OBruiJsiAqL1xuICBjb2xvcj86IENvbG9yVHlwZTtcbiAgLyoqIHNtYWxsIHwgbWVkaXVtIHwgbGFyZ2UgfCBmdWxsICovXG4gIHNpemU/OiBTaXplVHlwZSB8ICdmdWxsJztcbiAgLyoqICAqL1xuICBjaGlsZHJlbj86IFJlYWN0LlJlYWN0Q2hpbGQ7XG4gIC8qKiBjaGlsZHJlbuOBruS4reWkruaPg+OBiCAqL1xuICBjZW50ZXI/OiBib29sZWFuO1xuICAvKiog44Kr44K544K/44Og44OY44OD44OA44O8ICovXG4gIGhlYWRlcj86IFJlYWN0LlJlYWN0RWxlbWVudDxhbnk+O1xufVxuXG5mdW5jdGlvbiBzZXRDb2xvcih7IGNvbG9yLCB0aGVtZSB9OiB7IGNvbG9yPzogQ29sb3JUeXBlLCB0aGVtZTogVGhlbWVUeXBlIH0pIHtcbiAgaWYgKCFjb2xvcikgcmV0dXJuICcnO1xuXG4gIGNvbnN0IHRhcmdldCA9IHRoZW1lW2NvbG9yXSB8fCBjb2xvcjtcbiAgY29uc3QgaW52ZXJ0Q29sb3IgPSBmaW5kQ29sb3JJbnZlcnQodGhlbWUsIHRhcmdldCk7XG4gIHJldHVybiBjc3NgYmFja2dyb3VuZC1jb2xvcjogJHt0YXJnZXR9OyBjb2xvcjogJHtpbnZlcnRDb2xvcn07YDtcbn1cblxuZnVuY3Rpb24gc2V0U2l6ZSh7IHNpemUsIHRoZW1lIH06IHsgc2l6ZT86IFNpemVUeXBlIHwgJ2Z1bGwnLCB0aGVtZTogVGhlbWVUeXBlIH0pIHtcbiAgaWYgKCFzaXplIHx8IHNpemUgPT09ICdzbWFsbCcpIHJldHVybiAnJztcblxuICBzd2l0Y2ggKHNpemUpIHtcbiAgICBjYXNlICdtZWRpdW0nIDpcbiAgICAgIHJldHVybiBjc3NgcGFkZGluZy1ib3R0b206IDlyZW07IHBhZGRpbmctdG9wOiA5cmVtO2A7XG4gICAgY2FzZSAnbGFyZ2UnIDpcbiAgICAgIHJldHVybiBjc3NgcGFkZGluZy1ib3R0b206IDE4cmVtOyBwYWRkaW5nLXRvcDogMThyZW07YDtcbiAgICBjYXNlICdmdWxsJyA6XG4gICAgICByZXR1cm4gY3NzYFxuICAgICAgICBtaW4taGVpZ2h0OiAxMDB2aDtcblxuICAgICAgICAke0JvZHl9IHtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIH1cbiAgICAgIGA7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiAnJztcbiAgfVxufVxuXG5pbnRlcmZhY2UgQm9keVByb3BzIHtcbiAgY2VudGVyPzogYm9vbGVhbjtcbn1cblxuY29uc3QgQm9keSA9IHN0eWxlZC5kaXY8Qm9keVByb3BzPmBcbiAgZmxleC1ncm93OiAxO1xuICBmbGV4LXNocmluazogMDtcbiAgcGFkZGluZzogM3JlbSAxLjVyZW07XG5cbiAgJHsoeyBjZW50ZXIgfSkgPT4gY2VudGVyID8gJ3RleHQtYWxpZ246IGNlbnRlcjsnIDogJyd9XG5cbiAgaDEge1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjEyNTtcblxuICAgICY6bm90KDpsYXN0LWNoaWxkKSB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG4gICAgfVxuICB9XG5cbiAgaDIge1xuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjI1O1xuICB9XG5cbiAgaDEraDIge1xuICAgIG1hcmdpbi10b3A6IC0xLjI1cmVtO1xuICB9XG5gO1xuXG5pbnRlcmZhY2UgV3JhcHBlclByb3BzIHtcbiAgY29sb3I/OiBDb2xvclR5cGU7XG4gIHNpemU/OiBTaXplVHlwZSB8ICdmdWxsJztcbn1cblxuY29uc3QgV3JhcHBlciA9IHN0eWxlZC5kaXY8V3JhcHBlclByb3BzPmBcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgJHtzZXRDb2xvcn1cbiAgJHtzZXRTaXplfVxuXG4gIGhlYWRlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcbiAgICBjb2xvcjogaW5oZXJpdDtcbiAgfVxuXG4gIGhlYWRlciske0JvZHl9IHtcbiAgICBtYXJnaW4tdG9wOiAzLjI1cmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDMuMjVyZW07XG4gIH1cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlcm8oeyBjaGlsZHJlbiwgY29sb3IsIHNpemUsIGNlbnRlciwgaGVhZGVyLCAuLi5yZXN0IH06IFByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPFdyYXBwZXIgY29sb3I9e2NvbG9yfSBzaXplPXtzaXplfSB7Li4ucmVzdH0+XG4gICAgICB7aGVhZGVyfVxuICAgICAgPEJvZHkgY2VudGVyPXtjZW50ZXJ9PlxuICAgICAgICA8Q29udGFpbmVyPlxuICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC9Db250YWluZXI+XG4gICAgICA8L0JvZHk+XG4gICAgPC9XcmFwcGVyPlxuICApO1xufVxuIiwiLyoqIEBsaWNlbnNlIFJlYWN0IHYxNi44LjFcbiAqIHJlYWN0LWlzLnByb2R1Y3Rpb24ubWluLmpzXG4gKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO09iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO1xudmFyIGI9XCJmdW5jdGlvblwiPT09dHlwZW9mIFN5bWJvbCYmU3ltYm9sLmZvcixjPWI/U3ltYm9sLmZvcihcInJlYWN0LmVsZW1lbnRcIik6NjAxMDMsZD1iP1N5bWJvbC5mb3IoXCJyZWFjdC5wb3J0YWxcIik6NjAxMDYsZT1iP1N5bWJvbC5mb3IoXCJyZWFjdC5mcmFnbWVudFwiKTo2MDEwNyxmPWI/U3ltYm9sLmZvcihcInJlYWN0LnN0cmljdF9tb2RlXCIpOjYwMTA4LGc9Yj9TeW1ib2wuZm9yKFwicmVhY3QucHJvZmlsZXJcIik6NjAxMTQsaD1iP1N5bWJvbC5mb3IoXCJyZWFjdC5wcm92aWRlclwiKTo2MDEwOSxrPWI/U3ltYm9sLmZvcihcInJlYWN0LmNvbnRleHRcIik6NjAxMTAsbD1iP1N5bWJvbC5mb3IoXCJyZWFjdC5hc3luY19tb2RlXCIpOjYwMTExLG09Yj9TeW1ib2wuZm9yKFwicmVhY3QuY29uY3VycmVudF9tb2RlXCIpOjYwMTExLG49Yj9TeW1ib2wuZm9yKFwicmVhY3QuZm9yd2FyZF9yZWZcIik6NjAxMTIscD1iP1N5bWJvbC5mb3IoXCJyZWFjdC5zdXNwZW5zZVwiKTo2MDExMyxxPWI/U3ltYm9sLmZvcihcInJlYWN0Lm1lbW9cIik6XG42MDExNSxyPWI/U3ltYm9sLmZvcihcInJlYWN0LmxhenlcIik6NjAxMTY7ZnVuY3Rpb24gdChhKXtpZihcIm9iamVjdFwiPT09dHlwZW9mIGEmJm51bGwhPT1hKXt2YXIgdT1hLiQkdHlwZW9mO3N3aXRjaCh1KXtjYXNlIGM6c3dpdGNoKGE9YS50eXBlLGEpe2Nhc2UgbDpjYXNlIG06Y2FzZSBlOmNhc2UgZzpjYXNlIGY6Y2FzZSBwOnJldHVybiBhO2RlZmF1bHQ6c3dpdGNoKGE9YSYmYS4kJHR5cGVvZixhKXtjYXNlIGs6Y2FzZSBuOmNhc2UgaDpyZXR1cm4gYTtkZWZhdWx0OnJldHVybiB1fX1jYXNlIHI6Y2FzZSBxOmNhc2UgZDpyZXR1cm4gdX19fWZ1bmN0aW9uIHYoYSl7cmV0dXJuIHQoYSk9PT1tfWV4cG9ydHMudHlwZU9mPXQ7ZXhwb3J0cy5Bc3luY01vZGU9bDtleHBvcnRzLkNvbmN1cnJlbnRNb2RlPW07ZXhwb3J0cy5Db250ZXh0Q29uc3VtZXI9aztleHBvcnRzLkNvbnRleHRQcm92aWRlcj1oO2V4cG9ydHMuRWxlbWVudD1jO2V4cG9ydHMuRm9yd2FyZFJlZj1uO1xuZXhwb3J0cy5GcmFnbWVudD1lO2V4cG9ydHMuTGF6eT1yO2V4cG9ydHMuTWVtbz1xO2V4cG9ydHMuUG9ydGFsPWQ7ZXhwb3J0cy5Qcm9maWxlcj1nO2V4cG9ydHMuU3RyaWN0TW9kZT1mO2V4cG9ydHMuU3VzcGVuc2U9cDtleHBvcnRzLmlzVmFsaWRFbGVtZW50VHlwZT1mdW5jdGlvbihhKXtyZXR1cm5cInN0cmluZ1wiPT09dHlwZW9mIGF8fFwiZnVuY3Rpb25cIj09PXR5cGVvZiBhfHxhPT09ZXx8YT09PW18fGE9PT1nfHxhPT09Znx8YT09PXB8fFwib2JqZWN0XCI9PT10eXBlb2YgYSYmbnVsbCE9PWEmJihhLiQkdHlwZW9mPT09cnx8YS4kJHR5cGVvZj09PXF8fGEuJCR0eXBlb2Y9PT1ofHxhLiQkdHlwZW9mPT09a3x8YS4kJHR5cGVvZj09PW4pfTtleHBvcnRzLmlzQXN5bmNNb2RlPWZ1bmN0aW9uKGEpe3JldHVybiB2KGEpfHx0KGEpPT09bH07ZXhwb3J0cy5pc0NvbmN1cnJlbnRNb2RlPXY7ZXhwb3J0cy5pc0NvbnRleHRDb25zdW1lcj1mdW5jdGlvbihhKXtyZXR1cm4gdChhKT09PWt9O1xuZXhwb3J0cy5pc0NvbnRleHRQcm92aWRlcj1mdW5jdGlvbihhKXtyZXR1cm4gdChhKT09PWh9O2V4cG9ydHMuaXNFbGVtZW50PWZ1bmN0aW9uKGEpe3JldHVyblwib2JqZWN0XCI9PT10eXBlb2YgYSYmbnVsbCE9PWEmJmEuJCR0eXBlb2Y9PT1jfTtleHBvcnRzLmlzRm9yd2FyZFJlZj1mdW5jdGlvbihhKXtyZXR1cm4gdChhKT09PW59O2V4cG9ydHMuaXNGcmFnbWVudD1mdW5jdGlvbihhKXtyZXR1cm4gdChhKT09PWV9O2V4cG9ydHMuaXNMYXp5PWZ1bmN0aW9uKGEpe3JldHVybiB0KGEpPT09cn07ZXhwb3J0cy5pc01lbW89ZnVuY3Rpb24oYSl7cmV0dXJuIHQoYSk9PT1xfTtleHBvcnRzLmlzUG9ydGFsPWZ1bmN0aW9uKGEpe3JldHVybiB0KGEpPT09ZH07ZXhwb3J0cy5pc1Byb2ZpbGVyPWZ1bmN0aW9uKGEpe3JldHVybiB0KGEpPT09Z307ZXhwb3J0cy5pc1N0cmljdE1vZGU9ZnVuY3Rpb24oYSl7cmV0dXJuIHQoYSk9PT1mfTtcbmV4cG9ydHMuaXNTdXNwZW5zZT1mdW5jdGlvbihhKXtyZXR1cm4gdChhKT09PXB9O1xuIiwiLyoqIEBsaWNlbnNlIFJlYWN0IHYxNi44LjFcbiAqIHJlYWN0LWlzLmRldmVsb3BtZW50LmpzXG4gKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAoZnVuY3Rpb24oKSB7XG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbi8vIFRoZSBTeW1ib2wgdXNlZCB0byB0YWcgdGhlIFJlYWN0RWxlbWVudC1saWtlIHR5cGVzLiBJZiB0aGVyZSBpcyBubyBuYXRpdmUgU3ltYm9sXG4vLyBub3IgcG9seWZpbGwsIHRoZW4gYSBwbGFpbiBudW1iZXIgaXMgdXNlZCBmb3IgcGVyZm9ybWFuY2UuXG52YXIgaGFzU3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wuZm9yO1xuXG52YXIgUkVBQ1RfRUxFTUVOVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuZWxlbWVudCcpIDogMHhlYWM3O1xudmFyIFJFQUNUX1BPUlRBTF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QucG9ydGFsJykgOiAweGVhY2E7XG52YXIgUkVBQ1RfRlJBR01FTlRfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmZyYWdtZW50JykgOiAweGVhY2I7XG52YXIgUkVBQ1RfU1RSSUNUX01PREVfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnN0cmljdF9tb2RlJykgOiAweGVhY2M7XG52YXIgUkVBQ1RfUFJPRklMRVJfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnByb2ZpbGVyJykgOiAweGVhZDI7XG52YXIgUkVBQ1RfUFJPVklERVJfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnByb3ZpZGVyJykgOiAweGVhY2Q7XG52YXIgUkVBQ1RfQ09OVEVYVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuY29udGV4dCcpIDogMHhlYWNlO1xudmFyIFJFQUNUX0FTWU5DX01PREVfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmFzeW5jX21vZGUnKSA6IDB4ZWFjZjtcbnZhciBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmNvbmN1cnJlbnRfbW9kZScpIDogMHhlYWNmO1xudmFyIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5mb3J3YXJkX3JlZicpIDogMHhlYWQwO1xudmFyIFJFQUNUX1NVU1BFTlNFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5zdXNwZW5zZScpIDogMHhlYWQxO1xudmFyIFJFQUNUX01FTU9fVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0Lm1lbW8nKSA6IDB4ZWFkMztcbnZhciBSRUFDVF9MQVpZX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5sYXp5JykgOiAweGVhZDQ7XG5cbmZ1bmN0aW9uIGlzVmFsaWRFbGVtZW50VHlwZSh0eXBlKSB7XG4gIHJldHVybiB0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicgfHxcbiAgLy8gTm90ZTogaXRzIHR5cGVvZiBtaWdodCBiZSBvdGhlciB0aGFuICdzeW1ib2wnIG9yICdudW1iZXInIGlmIGl0J3MgYSBwb2x5ZmlsbC5cbiAgdHlwZSA9PT0gUkVBQ1RfRlJBR01FTlRfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9QUk9GSUxFUl9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1VTUEVOU0VfVFlQRSB8fCB0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgdHlwZSAhPT0gbnVsbCAmJiAodHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTEFaWV9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX01FTU9fVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9QUk9WSURFUl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0NPTlRFWFRfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFKTtcbn1cblxuLyoqXG4gKiBGb3JrZWQgZnJvbSBmYmpzL3dhcm5pbmc6XG4gKiBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svZmJqcy9ibG9iL2U2NmJhMjBhZDViZTQzM2ViNTQ0MjNmMmIwOTdkODI5MzI0ZDlkZTYvcGFja2FnZXMvZmJqcy9zcmMvX19mb3Jrc19fL3dhcm5pbmcuanNcbiAqXG4gKiBPbmx5IGNoYW5nZSBpcyB3ZSB1c2UgY29uc29sZS53YXJuIGluc3RlYWQgb2YgY29uc29sZS5lcnJvcixcbiAqIGFuZCBkbyBub3RoaW5nIHdoZW4gJ2NvbnNvbGUnIGlzIG5vdCBzdXBwb3J0ZWQuXG4gKiBUaGlzIHJlYWxseSBzaW1wbGlmaWVzIHRoZSBjb2RlLlxuICogLS0tXG4gKiBTaW1pbGFyIHRvIGludmFyaWFudCBidXQgb25seSBsb2dzIGEgd2FybmluZyBpZiB0aGUgY29uZGl0aW9uIGlzIG5vdCBtZXQuXG4gKiBUaGlzIGNhbiBiZSB1c2VkIHRvIGxvZyBpc3N1ZXMgaW4gZGV2ZWxvcG1lbnQgZW52aXJvbm1lbnRzIGluIGNyaXRpY2FsXG4gKiBwYXRocy4gUmVtb3ZpbmcgdGhlIGxvZ2dpbmcgY29kZSBmb3IgcHJvZHVjdGlvbiBlbnZpcm9ubWVudHMgd2lsbCBrZWVwIHRoZVxuICogc2FtZSBsb2dpYyBhbmQgZm9sbG93IHRoZSBzYW1lIGNvZGUgcGF0aHMuXG4gKi9cblxudmFyIGxvd1ByaW9yaXR5V2FybmluZyA9IGZ1bmN0aW9uICgpIHt9O1xuXG57XG4gIHZhciBwcmludFdhcm5pbmcgPSBmdW5jdGlvbiAoZm9ybWF0KSB7XG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICB2YXIgYXJnSW5kZXggPSAwO1xuICAgIHZhciBtZXNzYWdlID0gJ1dhcm5pbmc6ICcgKyBmb3JtYXQucmVwbGFjZSgvJXMvZywgZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGFyZ3NbYXJnSW5kZXgrK107XG4gICAgfSk7XG4gICAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uc29sZS53YXJuKG1lc3NhZ2UpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgLy8gLS0tIFdlbGNvbWUgdG8gZGVidWdnaW5nIFJlYWN0IC0tLVxuICAgICAgLy8gVGhpcyBlcnJvciB3YXMgdGhyb3duIGFzIGEgY29udmVuaWVuY2Ugc28gdGhhdCB5b3UgY2FuIHVzZSB0aGlzIHN0YWNrXG4gICAgICAvLyB0byBmaW5kIHRoZSBjYWxsc2l0ZSB0aGF0IGNhdXNlZCB0aGlzIHdhcm5pbmcgdG8gZmlyZS5cbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICB9IGNhdGNoICh4KSB7fVxuICB9O1xuXG4gIGxvd1ByaW9yaXR5V2FybmluZyA9IGZ1bmN0aW9uIChjb25kaXRpb24sIGZvcm1hdCkge1xuICAgIGlmIChmb3JtYXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdgbG93UHJpb3JpdHlXYXJuaW5nKGNvbmRpdGlvbiwgZm9ybWF0LCAuLi5hcmdzKWAgcmVxdWlyZXMgYSB3YXJuaW5nICcgKyAnbWVzc2FnZSBhcmd1bWVudCcpO1xuICAgIH1cbiAgICBpZiAoIWNvbmRpdGlvbikge1xuICAgICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbjIgPiAyID8gX2xlbjIgLSAyIDogMCksIF9rZXkyID0gMjsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgICBhcmdzW19rZXkyIC0gMl0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgICAgfVxuXG4gICAgICBwcmludFdhcm5pbmcuYXBwbHkodW5kZWZpbmVkLCBbZm9ybWF0XS5jb25jYXQoYXJncykpO1xuICAgIH1cbiAgfTtcbn1cblxudmFyIGxvd1ByaW9yaXR5V2FybmluZyQxID0gbG93UHJpb3JpdHlXYXJuaW5nO1xuXG5mdW5jdGlvbiB0eXBlT2Yob2JqZWN0KSB7XG4gIGlmICh0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0JyAmJiBvYmplY3QgIT09IG51bGwpIHtcbiAgICB2YXIgJCR0eXBlb2YgPSBvYmplY3QuJCR0eXBlb2Y7XG4gICAgc3dpdGNoICgkJHR5cGVvZikge1xuICAgICAgY2FzZSBSRUFDVF9FTEVNRU5UX1RZUEU6XG4gICAgICAgIHZhciB0eXBlID0gb2JqZWN0LnR5cGU7XG5cbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgY2FzZSBSRUFDVF9BU1lOQ19NT0RFX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX0ZSQUdNRU5UX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9QUk9GSUxFUl9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfU1RSSUNUX01PREVfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX1RZUEU6XG4gICAgICAgICAgICByZXR1cm4gdHlwZTtcbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgdmFyICQkdHlwZW9mVHlwZSA9IHR5cGUgJiYgdHlwZS4kJHR5cGVvZjtcblxuICAgICAgICAgICAgc3dpdGNoICgkJHR5cGVvZlR5cGUpIHtcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9DT05URVhUX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9QUk9WSURFUl9UWVBFOlxuICAgICAgICAgICAgICAgIHJldHVybiAkJHR5cGVvZlR5cGU7XG4gICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuICQkdHlwZW9mO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBjYXNlIFJFQUNUX0xBWllfVFlQRTpcbiAgICAgIGNhc2UgUkVBQ1RfTUVNT19UWVBFOlxuICAgICAgY2FzZSBSRUFDVF9QT1JUQUxfVFlQRTpcbiAgICAgICAgcmV0dXJuICQkdHlwZW9mO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWQ7XG59XG5cbi8vIEFzeW5jTW9kZSBpcyBkZXByZWNhdGVkIGFsb25nIHdpdGggaXNBc3luY01vZGVcbnZhciBBc3luY01vZGUgPSBSRUFDVF9BU1lOQ19NT0RFX1RZUEU7XG52YXIgQ29uY3VycmVudE1vZGUgPSBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRTtcbnZhciBDb250ZXh0Q29uc3VtZXIgPSBSRUFDVF9DT05URVhUX1RZUEU7XG52YXIgQ29udGV4dFByb3ZpZGVyID0gUkVBQ1RfUFJPVklERVJfVFlQRTtcbnZhciBFbGVtZW50ID0gUkVBQ1RfRUxFTUVOVF9UWVBFO1xudmFyIEZvcndhcmRSZWYgPSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFO1xudmFyIEZyYWdtZW50ID0gUkVBQ1RfRlJBR01FTlRfVFlQRTtcbnZhciBMYXp5ID0gUkVBQ1RfTEFaWV9UWVBFO1xudmFyIE1lbW8gPSBSRUFDVF9NRU1PX1RZUEU7XG52YXIgUG9ydGFsID0gUkVBQ1RfUE9SVEFMX1RZUEU7XG52YXIgUHJvZmlsZXIgPSBSRUFDVF9QUk9GSUxFUl9UWVBFO1xudmFyIFN0cmljdE1vZGUgPSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFO1xudmFyIFN1c3BlbnNlID0gUkVBQ1RfU1VTUEVOU0VfVFlQRTtcblxudmFyIGhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQXN5bmNNb2RlID0gZmFsc2U7XG5cbi8vIEFzeW5jTW9kZSBzaG91bGQgYmUgZGVwcmVjYXRlZFxuZnVuY3Rpb24gaXNBc3luY01vZGUob2JqZWN0KSB7XG4gIHtcbiAgICBpZiAoIWhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQXN5bmNNb2RlKSB7XG4gICAgICBoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0FzeW5jTW9kZSA9IHRydWU7XG4gICAgICBsb3dQcmlvcml0eVdhcm5pbmckMShmYWxzZSwgJ1RoZSBSZWFjdElzLmlzQXN5bmNNb2RlKCkgYWxpYXMgaGFzIGJlZW4gZGVwcmVjYXRlZCwgJyArICdhbmQgd2lsbCBiZSByZW1vdmVkIGluIFJlYWN0IDE3Ky4gVXBkYXRlIHlvdXIgY29kZSB0byB1c2UgJyArICdSZWFjdElzLmlzQ29uY3VycmVudE1vZGUoKSBpbnN0ZWFkLiBJdCBoYXMgdGhlIGV4YWN0IHNhbWUgQVBJLicpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gaXNDb25jdXJyZW50TW9kZShvYmplY3QpIHx8IHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9BU1lOQ19NT0RFX1RZUEU7XG59XG5mdW5jdGlvbiBpc0NvbmN1cnJlbnRNb2RlKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFO1xufVxuZnVuY3Rpb24gaXNDb250ZXh0Q29uc3VtZXIob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfQ09OVEVYVF9UWVBFO1xufVxuZnVuY3Rpb24gaXNDb250ZXh0UHJvdmlkZXIob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfUFJPVklERVJfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzRWxlbWVudChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmIG9iamVjdCAhPT0gbnVsbCAmJiBvYmplY3QuJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzRm9yd2FyZFJlZihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFO1xufVxuZnVuY3Rpb24gaXNGcmFnbWVudChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9GUkFHTUVOVF9UWVBFO1xufVxuZnVuY3Rpb24gaXNMYXp5KG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0xBWllfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzTWVtbyhvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9NRU1PX1RZUEU7XG59XG5mdW5jdGlvbiBpc1BvcnRhbChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9QT1JUQUxfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzUHJvZmlsZXIob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfUFJPRklMRVJfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzU3RyaWN0TW9kZShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFO1xufVxuZnVuY3Rpb24gaXNTdXNwZW5zZShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9TVVNQRU5TRV9UWVBFO1xufVxuXG5leHBvcnRzLnR5cGVPZiA9IHR5cGVPZjtcbmV4cG9ydHMuQXN5bmNNb2RlID0gQXN5bmNNb2RlO1xuZXhwb3J0cy5Db25jdXJyZW50TW9kZSA9IENvbmN1cnJlbnRNb2RlO1xuZXhwb3J0cy5Db250ZXh0Q29uc3VtZXIgPSBDb250ZXh0Q29uc3VtZXI7XG5leHBvcnRzLkNvbnRleHRQcm92aWRlciA9IENvbnRleHRQcm92aWRlcjtcbmV4cG9ydHMuRWxlbWVudCA9IEVsZW1lbnQ7XG5leHBvcnRzLkZvcndhcmRSZWYgPSBGb3J3YXJkUmVmO1xuZXhwb3J0cy5GcmFnbWVudCA9IEZyYWdtZW50O1xuZXhwb3J0cy5MYXp5ID0gTGF6eTtcbmV4cG9ydHMuTWVtbyA9IE1lbW87XG5leHBvcnRzLlBvcnRhbCA9IFBvcnRhbDtcbmV4cG9ydHMuUHJvZmlsZXIgPSBQcm9maWxlcjtcbmV4cG9ydHMuU3RyaWN0TW9kZSA9IFN0cmljdE1vZGU7XG5leHBvcnRzLlN1c3BlbnNlID0gU3VzcGVuc2U7XG5leHBvcnRzLmlzVmFsaWRFbGVtZW50VHlwZSA9IGlzVmFsaWRFbGVtZW50VHlwZTtcbmV4cG9ydHMuaXNBc3luY01vZGUgPSBpc0FzeW5jTW9kZTtcbmV4cG9ydHMuaXNDb25jdXJyZW50TW9kZSA9IGlzQ29uY3VycmVudE1vZGU7XG5leHBvcnRzLmlzQ29udGV4dENvbnN1bWVyID0gaXNDb250ZXh0Q29uc3VtZXI7XG5leHBvcnRzLmlzQ29udGV4dFByb3ZpZGVyID0gaXNDb250ZXh0UHJvdmlkZXI7XG5leHBvcnRzLmlzRWxlbWVudCA9IGlzRWxlbWVudDtcbmV4cG9ydHMuaXNGb3J3YXJkUmVmID0gaXNGb3J3YXJkUmVmO1xuZXhwb3J0cy5pc0ZyYWdtZW50ID0gaXNGcmFnbWVudDtcbmV4cG9ydHMuaXNMYXp5ID0gaXNMYXp5O1xuZXhwb3J0cy5pc01lbW8gPSBpc01lbW87XG5leHBvcnRzLmlzUG9ydGFsID0gaXNQb3J0YWw7XG5leHBvcnRzLmlzUHJvZmlsZXIgPSBpc1Byb2ZpbGVyO1xuZXhwb3J0cy5pc1N0cmljdE1vZGUgPSBpc1N0cmljdE1vZGU7XG5leHBvcnRzLmlzU3VzcGVuc2UgPSBpc1N1c3BlbnNlO1xuICB9KSgpO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LWlzLnByb2R1Y3Rpb24ubWluLmpzJyk7XG59IGVsc2Uge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LWlzLmRldmVsb3BtZW50LmpzJyk7XG59XG4iLCIvKlxub2JqZWN0LWFzc2lnblxuKGMpIFNpbmRyZSBTb3JodXNcbkBsaWNlbnNlIE1JVFxuKi9cblxuJ3VzZSBzdHJpY3QnO1xuLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cbnZhciBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xudmFyIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbnZhciBwcm9wSXNFbnVtZXJhYmxlID0gT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcblxuZnVuY3Rpb24gdG9PYmplY3QodmFsKSB7XG5cdGlmICh2YWwgPT09IG51bGwgfHwgdmFsID09PSB1bmRlZmluZWQpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdPYmplY3QuYXNzaWduIGNhbm5vdCBiZSBjYWxsZWQgd2l0aCBudWxsIG9yIHVuZGVmaW5lZCcpO1xuXHR9XG5cblx0cmV0dXJuIE9iamVjdCh2YWwpO1xufVxuXG5mdW5jdGlvbiBzaG91bGRVc2VOYXRpdmUoKSB7XG5cdHRyeSB7XG5cdFx0aWYgKCFPYmplY3QuYXNzaWduKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gRGV0ZWN0IGJ1Z2d5IHByb3BlcnR5IGVudW1lcmF0aW9uIG9yZGVyIGluIG9sZGVyIFY4IHZlcnNpb25zLlxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9NDExOFxuXHRcdHZhciB0ZXN0MSA9IG5ldyBTdHJpbmcoJ2FiYycpOyAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1uZXctd3JhcHBlcnNcblx0XHR0ZXN0MVs1XSA9ICdkZSc7XG5cdFx0aWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRlc3QxKVswXSA9PT0gJzUnKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzA1NlxuXHRcdHZhciB0ZXN0MiA9IHt9O1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgMTA7IGkrKykge1xuXHRcdFx0dGVzdDJbJ18nICsgU3RyaW5nLmZyb21DaGFyQ29kZShpKV0gPSBpO1xuXHRcdH1cblx0XHR2YXIgb3JkZXIyID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGVzdDIpLm1hcChmdW5jdGlvbiAobikge1xuXHRcdFx0cmV0dXJuIHRlc3QyW25dO1xuXHRcdH0pO1xuXHRcdGlmIChvcmRlcjIuam9pbignJykgIT09ICcwMTIzNDU2Nzg5Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTMwNTZcblx0XHR2YXIgdGVzdDMgPSB7fTtcblx0XHQnYWJjZGVmZ2hpamtsbW5vcHFyc3QnLnNwbGl0KCcnKS5mb3JFYWNoKGZ1bmN0aW9uIChsZXR0ZXIpIHtcblx0XHRcdHRlc3QzW2xldHRlcl0gPSBsZXR0ZXI7XG5cdFx0fSk7XG5cdFx0aWYgKE9iamVjdC5rZXlzKE9iamVjdC5hc3NpZ24oe30sIHRlc3QzKSkuam9pbignJykgIT09XG5cdFx0XHRcdCdhYmNkZWZnaGlqa2xtbm9wcXJzdCcpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdHJ1ZTtcblx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0Ly8gV2UgZG9uJ3QgZXhwZWN0IGFueSBvZiB0aGUgYWJvdmUgdG8gdGhyb3csIGJ1dCBiZXR0ZXIgdG8gYmUgc2FmZS5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzaG91bGRVc2VOYXRpdmUoKSA/IE9iamVjdC5hc3NpZ24gOiBmdW5jdGlvbiAodGFyZ2V0LCBzb3VyY2UpIHtcblx0dmFyIGZyb207XG5cdHZhciB0byA9IHRvT2JqZWN0KHRhcmdldCk7XG5cdHZhciBzeW1ib2xzO1xuXG5cdGZvciAodmFyIHMgPSAxOyBzIDwgYXJndW1lbnRzLmxlbmd0aDsgcysrKSB7XG5cdFx0ZnJvbSA9IE9iamVjdChhcmd1bWVudHNbc10pO1xuXG5cdFx0Zm9yICh2YXIga2V5IGluIGZyb20pIHtcblx0XHRcdGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGZyb20sIGtleSkpIHtcblx0XHRcdFx0dG9ba2V5XSA9IGZyb21ba2V5XTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG5cdFx0XHRzeW1ib2xzID0gZ2V0T3duUHJvcGVydHlTeW1ib2xzKGZyb20pO1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzeW1ib2xzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGlmIChwcm9wSXNFbnVtZXJhYmxlLmNhbGwoZnJvbSwgc3ltYm9sc1tpXSkpIHtcblx0XHRcdFx0XHR0b1tzeW1ib2xzW2ldXSA9IGZyb21bc3ltYm9sc1tpXV07XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gdG87XG59O1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBSZWFjdFByb3BUeXBlc1NlY3JldCA9ICdTRUNSRVRfRE9fTk9UX1BBU1NfVEhJU19PUl9ZT1VfV0lMTF9CRV9GSVJFRCc7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3RQcm9wVHlwZXNTZWNyZXQ7XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIHByaW50V2FybmluZyA9IGZ1bmN0aW9uKCkge307XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHZhciBSZWFjdFByb3BUeXBlc1NlY3JldCA9IHJlcXVpcmUoJy4vbGliL1JlYWN0UHJvcFR5cGVzU2VjcmV0Jyk7XG4gIHZhciBsb2dnZWRUeXBlRmFpbHVyZXMgPSB7fTtcbiAgdmFyIGhhcyA9IEZ1bmN0aW9uLmNhbGwuYmluZChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5KTtcblxuICBwcmludFdhcm5pbmcgPSBmdW5jdGlvbih0ZXh0KSB7XG4gICAgdmFyIG1lc3NhZ2UgPSAnV2FybmluZzogJyArIHRleHQ7XG4gICAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uc29sZS5lcnJvcihtZXNzYWdlKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIC8vIC0tLSBXZWxjb21lIHRvIGRlYnVnZ2luZyBSZWFjdCAtLS1cbiAgICAgIC8vIFRoaXMgZXJyb3Igd2FzIHRocm93biBhcyBhIGNvbnZlbmllbmNlIHNvIHRoYXQgeW91IGNhbiB1c2UgdGhpcyBzdGFja1xuICAgICAgLy8gdG8gZmluZCB0aGUgY2FsbHNpdGUgdGhhdCBjYXVzZWQgdGhpcyB3YXJuaW5nIHRvIGZpcmUuXG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgfSBjYXRjaCAoeCkge31cbiAgfTtcbn1cblxuLyoqXG4gKiBBc3NlcnQgdGhhdCB0aGUgdmFsdWVzIG1hdGNoIHdpdGggdGhlIHR5cGUgc3BlY3MuXG4gKiBFcnJvciBtZXNzYWdlcyBhcmUgbWVtb3JpemVkIGFuZCB3aWxsIG9ubHkgYmUgc2hvd24gb25jZS5cbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gdHlwZVNwZWNzIE1hcCBvZiBuYW1lIHRvIGEgUmVhY3RQcm9wVHlwZVxuICogQHBhcmFtIHtvYmplY3R9IHZhbHVlcyBSdW50aW1lIHZhbHVlcyB0aGF0IG5lZWQgdG8gYmUgdHlwZS1jaGVja2VkXG4gKiBAcGFyYW0ge3N0cmluZ30gbG9jYXRpb24gZS5nLiBcInByb3BcIiwgXCJjb250ZXh0XCIsIFwiY2hpbGQgY29udGV4dFwiXG4gKiBAcGFyYW0ge3N0cmluZ30gY29tcG9uZW50TmFtZSBOYW1lIG9mIHRoZSBjb21wb25lbnQgZm9yIGVycm9yIG1lc3NhZ2VzLlxuICogQHBhcmFtIHs/RnVuY3Rpb259IGdldFN0YWNrIFJldHVybnMgdGhlIGNvbXBvbmVudCBzdGFjay5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGNoZWNrUHJvcFR5cGVzKHR5cGVTcGVjcywgdmFsdWVzLCBsb2NhdGlvbiwgY29tcG9uZW50TmFtZSwgZ2V0U3RhY2spIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBmb3IgKHZhciB0eXBlU3BlY05hbWUgaW4gdHlwZVNwZWNzKSB7XG4gICAgICBpZiAoaGFzKHR5cGVTcGVjcywgdHlwZVNwZWNOYW1lKSkge1xuICAgICAgICB2YXIgZXJyb3I7XG4gICAgICAgIC8vIFByb3AgdHlwZSB2YWxpZGF0aW9uIG1heSB0aHJvdy4gSW4gY2FzZSB0aGV5IGRvLCB3ZSBkb24ndCB3YW50IHRvXG4gICAgICAgIC8vIGZhaWwgdGhlIHJlbmRlciBwaGFzZSB3aGVyZSBpdCBkaWRuJ3QgZmFpbCBiZWZvcmUuIFNvIHdlIGxvZyBpdC5cbiAgICAgICAgLy8gQWZ0ZXIgdGhlc2UgaGF2ZSBiZWVuIGNsZWFuZWQgdXAsIHdlJ2xsIGxldCB0aGVtIHRocm93LlxuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgaXMgaW50ZW50aW9uYWxseSBhbiBpbnZhcmlhbnQgdGhhdCBnZXRzIGNhdWdodC4gSXQncyB0aGUgc2FtZVxuICAgICAgICAgIC8vIGJlaGF2aW9yIGFzIHdpdGhvdXQgdGhpcyBzdGF0ZW1lbnQgZXhjZXB0IHdpdGggYSBiZXR0ZXIgbWVzc2FnZS5cbiAgICAgICAgICBpZiAodHlwZW9mIHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB2YXIgZXJyID0gRXJyb3IoXG4gICAgICAgICAgICAgIChjb21wb25lbnROYW1lIHx8ICdSZWFjdCBjbGFzcycpICsgJzogJyArIGxvY2F0aW9uICsgJyB0eXBlIGAnICsgdHlwZVNwZWNOYW1lICsgJ2AgaXMgaW52YWxpZDsgJyArXG4gICAgICAgICAgICAgICdpdCBtdXN0IGJlIGEgZnVuY3Rpb24sIHVzdWFsbHkgZnJvbSB0aGUgYHByb3AtdHlwZXNgIHBhY2thZ2UsIGJ1dCByZWNlaXZlZCBgJyArIHR5cGVvZiB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSArICdgLidcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBlcnIubmFtZSA9ICdJbnZhcmlhbnQgVmlvbGF0aW9uJztcbiAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICB9XG4gICAgICAgICAgZXJyb3IgPSB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSh2YWx1ZXMsIHR5cGVTcGVjTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIG51bGwsIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgfSBjYXRjaCAoZXgpIHtcbiAgICAgICAgICBlcnJvciA9IGV4O1xuICAgICAgICB9XG4gICAgICAgIGlmIChlcnJvciAmJiAhKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpKSB7XG4gICAgICAgICAgcHJpbnRXYXJuaW5nKFxuICAgICAgICAgICAgKGNvbXBvbmVudE5hbWUgfHwgJ1JlYWN0IGNsYXNzJykgKyAnOiB0eXBlIHNwZWNpZmljYXRpb24gb2YgJyArXG4gICAgICAgICAgICBsb2NhdGlvbiArICcgYCcgKyB0eXBlU3BlY05hbWUgKyAnYCBpcyBpbnZhbGlkOyB0aGUgdHlwZSBjaGVja2VyICcgK1xuICAgICAgICAgICAgJ2Z1bmN0aW9uIG11c3QgcmV0dXJuIGBudWxsYCBvciBhbiBgRXJyb3JgIGJ1dCByZXR1cm5lZCBhICcgKyB0eXBlb2YgZXJyb3IgKyAnLiAnICtcbiAgICAgICAgICAgICdZb3UgbWF5IGhhdmUgZm9yZ290dGVuIHRvIHBhc3MgYW4gYXJndW1lbnQgdG8gdGhlIHR5cGUgY2hlY2tlciAnICtcbiAgICAgICAgICAgICdjcmVhdG9yIChhcnJheU9mLCBpbnN0YW5jZU9mLCBvYmplY3RPZiwgb25lT2YsIG9uZU9mVHlwZSwgYW5kICcgK1xuICAgICAgICAgICAgJ3NoYXBlIGFsbCByZXF1aXJlIGFuIGFyZ3VtZW50KS4nXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvciAmJiAhKGVycm9yLm1lc3NhZ2UgaW4gbG9nZ2VkVHlwZUZhaWx1cmVzKSkge1xuICAgICAgICAgIC8vIE9ubHkgbW9uaXRvciB0aGlzIGZhaWx1cmUgb25jZSBiZWNhdXNlIHRoZXJlIHRlbmRzIHRvIGJlIGEgbG90IG9mIHRoZVxuICAgICAgICAgIC8vIHNhbWUgZXJyb3IuXG4gICAgICAgICAgbG9nZ2VkVHlwZUZhaWx1cmVzW2Vycm9yLm1lc3NhZ2VdID0gdHJ1ZTtcblxuICAgICAgICAgIHZhciBzdGFjayA9IGdldFN0YWNrID8gZ2V0U3RhY2soKSA6ICcnO1xuXG4gICAgICAgICAgcHJpbnRXYXJuaW5nKFxuICAgICAgICAgICAgJ0ZhaWxlZCAnICsgbG9jYXRpb24gKyAnIHR5cGU6ICcgKyBlcnJvci5tZXNzYWdlICsgKHN0YWNrICE9IG51bGwgPyBzdGFjayA6ICcnKVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBSZXNldHMgd2FybmluZyBjYWNoZSB3aGVuIHRlc3RpbmcuXG4gKlxuICogQHByaXZhdGVcbiAqL1xuY2hlY2tQcm9wVHlwZXMucmVzZXRXYXJuaW5nQ2FjaGUgPSBmdW5jdGlvbigpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBsb2dnZWRUeXBlRmFpbHVyZXMgPSB7fTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNoZWNrUHJvcFR5cGVzO1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBSZWFjdElzID0gcmVxdWlyZSgncmVhY3QtaXMnKTtcbnZhciBhc3NpZ24gPSByZXF1aXJlKCdvYmplY3QtYXNzaWduJyk7XG5cbnZhciBSZWFjdFByb3BUeXBlc1NlY3JldCA9IHJlcXVpcmUoJy4vbGliL1JlYWN0UHJvcFR5cGVzU2VjcmV0Jyk7XG52YXIgY2hlY2tQcm9wVHlwZXMgPSByZXF1aXJlKCcuL2NoZWNrUHJvcFR5cGVzJyk7XG5cbnZhciBoYXMgPSBGdW5jdGlvbi5jYWxsLmJpbmQoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSk7XG52YXIgcHJpbnRXYXJuaW5nID0gZnVuY3Rpb24oKSB7fTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgcHJpbnRXYXJuaW5nID0gZnVuY3Rpb24odGV4dCkge1xuICAgIHZhciBtZXNzYWdlID0gJ1dhcm5pbmc6ICcgKyB0ZXh0O1xuICAgIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IobWVzc2FnZSk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAvLyAtLS0gV2VsY29tZSB0byBkZWJ1Z2dpbmcgUmVhY3QgLS0tXG4gICAgICAvLyBUaGlzIGVycm9yIHdhcyB0aHJvd24gYXMgYSBjb252ZW5pZW5jZSBzbyB0aGF0IHlvdSBjYW4gdXNlIHRoaXMgc3RhY2tcbiAgICAgIC8vIHRvIGZpbmQgdGhlIGNhbGxzaXRlIHRoYXQgY2F1c2VkIHRoaXMgd2FybmluZyB0byBmaXJlLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgIH0gY2F0Y2ggKHgpIHt9XG4gIH07XG59XG5cbmZ1bmN0aW9uIGVtcHR5RnVuY3Rpb25UaGF0UmV0dXJuc051bGwoKSB7XG4gIHJldHVybiBudWxsO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGlzVmFsaWRFbGVtZW50LCB0aHJvd09uRGlyZWN0QWNjZXNzKSB7XG4gIC8qIGdsb2JhbCBTeW1ib2wgKi9cbiAgdmFyIElURVJBVE9SX1NZTUJPTCA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLml0ZXJhdG9yO1xuICB2YXIgRkFVWF9JVEVSQVRPUl9TWU1CT0wgPSAnQEBpdGVyYXRvcic7IC8vIEJlZm9yZSBTeW1ib2wgc3BlYy5cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgaXRlcmF0b3IgbWV0aG9kIGZ1bmN0aW9uIGNvbnRhaW5lZCBvbiB0aGUgaXRlcmFibGUgb2JqZWN0LlxuICAgKlxuICAgKiBCZSBzdXJlIHRvIGludm9rZSB0aGUgZnVuY3Rpb24gd2l0aCB0aGUgaXRlcmFibGUgYXMgY29udGV4dDpcbiAgICpcbiAgICogICAgIHZhciBpdGVyYXRvckZuID0gZ2V0SXRlcmF0b3JGbihteUl0ZXJhYmxlKTtcbiAgICogICAgIGlmIChpdGVyYXRvckZuKSB7XG4gICAqICAgICAgIHZhciBpdGVyYXRvciA9IGl0ZXJhdG9yRm4uY2FsbChteUl0ZXJhYmxlKTtcbiAgICogICAgICAgLi4uXG4gICAqICAgICB9XG4gICAqXG4gICAqIEBwYXJhbSB7P29iamVjdH0gbWF5YmVJdGVyYWJsZVxuICAgKiBAcmV0dXJuIHs/ZnVuY3Rpb259XG4gICAqL1xuICBmdW5jdGlvbiBnZXRJdGVyYXRvckZuKG1heWJlSXRlcmFibGUpIHtcbiAgICB2YXIgaXRlcmF0b3JGbiA9IG1heWJlSXRlcmFibGUgJiYgKElURVJBVE9SX1NZTUJPTCAmJiBtYXliZUl0ZXJhYmxlW0lURVJBVE9SX1NZTUJPTF0gfHwgbWF5YmVJdGVyYWJsZVtGQVVYX0lURVJBVE9SX1NZTUJPTF0pO1xuICAgIGlmICh0eXBlb2YgaXRlcmF0b3JGbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIGl0ZXJhdG9yRm47XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENvbGxlY3Rpb24gb2YgbWV0aG9kcyB0aGF0IGFsbG93IGRlY2xhcmF0aW9uIGFuZCB2YWxpZGF0aW9uIG9mIHByb3BzIHRoYXQgYXJlXG4gICAqIHN1cHBsaWVkIHRvIFJlYWN0IGNvbXBvbmVudHMuIEV4YW1wbGUgdXNhZ2U6XG4gICAqXG4gICAqICAgdmFyIFByb3BzID0gcmVxdWlyZSgnUmVhY3RQcm9wVHlwZXMnKTtcbiAgICogICB2YXIgTXlBcnRpY2xlID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICAgKiAgICAgcHJvcFR5cGVzOiB7XG4gICAqICAgICAgIC8vIEFuIG9wdGlvbmFsIHN0cmluZyBwcm9wIG5hbWVkIFwiZGVzY3JpcHRpb25cIi5cbiAgICogICAgICAgZGVzY3JpcHRpb246IFByb3BzLnN0cmluZyxcbiAgICpcbiAgICogICAgICAgLy8gQSByZXF1aXJlZCBlbnVtIHByb3AgbmFtZWQgXCJjYXRlZ29yeVwiLlxuICAgKiAgICAgICBjYXRlZ29yeTogUHJvcHMub25lT2YoWydOZXdzJywnUGhvdG9zJ10pLmlzUmVxdWlyZWQsXG4gICAqXG4gICAqICAgICAgIC8vIEEgcHJvcCBuYW1lZCBcImRpYWxvZ1wiIHRoYXQgcmVxdWlyZXMgYW4gaW5zdGFuY2Ugb2YgRGlhbG9nLlxuICAgKiAgICAgICBkaWFsb2c6IFByb3BzLmluc3RhbmNlT2YoRGlhbG9nKS5pc1JlcXVpcmVkXG4gICAqICAgICB9LFxuICAgKiAgICAgcmVuZGVyOiBmdW5jdGlvbigpIHsgLi4uIH1cbiAgICogICB9KTtcbiAgICpcbiAgICogQSBtb3JlIGZvcm1hbCBzcGVjaWZpY2F0aW9uIG9mIGhvdyB0aGVzZSBtZXRob2RzIGFyZSB1c2VkOlxuICAgKlxuICAgKiAgIHR5cGUgOj0gYXJyYXl8Ym9vbHxmdW5jfG9iamVjdHxudW1iZXJ8c3RyaW5nfG9uZU9mKFsuLi5dKXxpbnN0YW5jZU9mKC4uLilcbiAgICogICBkZWNsIDo9IFJlYWN0UHJvcFR5cGVzLnt0eXBlfSguaXNSZXF1aXJlZCk/XG4gICAqXG4gICAqIEVhY2ggYW5kIGV2ZXJ5IGRlY2xhcmF0aW9uIHByb2R1Y2VzIGEgZnVuY3Rpb24gd2l0aCB0aGUgc2FtZSBzaWduYXR1cmUuIFRoaXNcbiAgICogYWxsb3dzIHRoZSBjcmVhdGlvbiBvZiBjdXN0b20gdmFsaWRhdGlvbiBmdW5jdGlvbnMuIEZvciBleGFtcGxlOlxuICAgKlxuICAgKiAgdmFyIE15TGluayA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgICogICAgcHJvcFR5cGVzOiB7XG4gICAqICAgICAgLy8gQW4gb3B0aW9uYWwgc3RyaW5nIG9yIFVSSSBwcm9wIG5hbWVkIFwiaHJlZlwiLlxuICAgKiAgICAgIGhyZWY6IGZ1bmN0aW9uKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSkge1xuICAgKiAgICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICogICAgICAgIGlmIChwcm9wVmFsdWUgIT0gbnVsbCAmJiB0eXBlb2YgcHJvcFZhbHVlICE9PSAnc3RyaW5nJyAmJlxuICAgKiAgICAgICAgICAgICEocHJvcFZhbHVlIGluc3RhbmNlb2YgVVJJKSkge1xuICAgKiAgICAgICAgICByZXR1cm4gbmV3IEVycm9yKFxuICAgKiAgICAgICAgICAgICdFeHBlY3RlZCBhIHN0cmluZyBvciBhbiBVUkkgZm9yICcgKyBwcm9wTmFtZSArICcgaW4gJyArXG4gICAqICAgICAgICAgICAgY29tcG9uZW50TmFtZVxuICAgKiAgICAgICAgICApO1xuICAgKiAgICAgICAgfVxuICAgKiAgICAgIH1cbiAgICogICAgfSxcbiAgICogICAgcmVuZGVyOiBmdW5jdGlvbigpIHsuLi59XG4gICAqICB9KTtcbiAgICpcbiAgICogQGludGVybmFsXG4gICAqL1xuXG4gIHZhciBBTk9OWU1PVVMgPSAnPDxhbm9ueW1vdXM+Pic7XG5cbiAgLy8gSW1wb3J0YW50IVxuICAvLyBLZWVwIHRoaXMgbGlzdCBpbiBzeW5jIHdpdGggcHJvZHVjdGlvbiB2ZXJzaW9uIGluIGAuL2ZhY3RvcnlXaXRoVGhyb3dpbmdTaGltcy5qc2AuXG4gIHZhciBSZWFjdFByb3BUeXBlcyA9IHtcbiAgICBhcnJheTogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ2FycmF5JyksXG4gICAgYm9vbDogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ2Jvb2xlYW4nKSxcbiAgICBmdW5jOiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignZnVuY3Rpb24nKSxcbiAgICBudW1iZXI6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdudW1iZXInKSxcbiAgICBvYmplY3Q6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdvYmplY3QnKSxcbiAgICBzdHJpbmc6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdzdHJpbmcnKSxcbiAgICBzeW1ib2w6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdzeW1ib2wnKSxcblxuICAgIGFueTogY3JlYXRlQW55VHlwZUNoZWNrZXIoKSxcbiAgICBhcnJheU9mOiBjcmVhdGVBcnJheU9mVHlwZUNoZWNrZXIsXG4gICAgZWxlbWVudDogY3JlYXRlRWxlbWVudFR5cGVDaGVja2VyKCksXG4gICAgZWxlbWVudFR5cGU6IGNyZWF0ZUVsZW1lbnRUeXBlVHlwZUNoZWNrZXIoKSxcbiAgICBpbnN0YW5jZU9mOiBjcmVhdGVJbnN0YW5jZVR5cGVDaGVja2VyLFxuICAgIG5vZGU6IGNyZWF0ZU5vZGVDaGVja2VyKCksXG4gICAgb2JqZWN0T2Y6IGNyZWF0ZU9iamVjdE9mVHlwZUNoZWNrZXIsXG4gICAgb25lT2Y6IGNyZWF0ZUVudW1UeXBlQ2hlY2tlcixcbiAgICBvbmVPZlR5cGU6IGNyZWF0ZVVuaW9uVHlwZUNoZWNrZXIsXG4gICAgc2hhcGU6IGNyZWF0ZVNoYXBlVHlwZUNoZWNrZXIsXG4gICAgZXhhY3Q6IGNyZWF0ZVN0cmljdFNoYXBlVHlwZUNoZWNrZXIsXG4gIH07XG5cbiAgLyoqXG4gICAqIGlubGluZWQgT2JqZWN0LmlzIHBvbHlmaWxsIHRvIGF2b2lkIHJlcXVpcmluZyBjb25zdW1lcnMgc2hpcCB0aGVpciBvd25cbiAgICogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvT2JqZWN0L2lzXG4gICAqL1xuICAvKmVzbGludC1kaXNhYmxlIG5vLXNlbGYtY29tcGFyZSovXG4gIGZ1bmN0aW9uIGlzKHgsIHkpIHtcbiAgICAvLyBTYW1lVmFsdWUgYWxnb3JpdGhtXG4gICAgaWYgKHggPT09IHkpIHtcbiAgICAgIC8vIFN0ZXBzIDEtNSwgNy0xMFxuICAgICAgLy8gU3RlcHMgNi5iLTYuZTogKzAgIT0gLTBcbiAgICAgIHJldHVybiB4ICE9PSAwIHx8IDEgLyB4ID09PSAxIC8geTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gU3RlcCA2LmE6IE5hTiA9PSBOYU5cbiAgICAgIHJldHVybiB4ICE9PSB4ICYmIHkgIT09IHk7XG4gICAgfVxuICB9XG4gIC8qZXNsaW50LWVuYWJsZSBuby1zZWxmLWNvbXBhcmUqL1xuXG4gIC8qKlxuICAgKiBXZSB1c2UgYW4gRXJyb3ItbGlrZSBvYmplY3QgZm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHkgYXMgcGVvcGxlIG1heSBjYWxsXG4gICAqIFByb3BUeXBlcyBkaXJlY3RseSBhbmQgaW5zcGVjdCB0aGVpciBvdXRwdXQuIEhvd2V2ZXIsIHdlIGRvbid0IHVzZSByZWFsXG4gICAqIEVycm9ycyBhbnltb3JlLiBXZSBkb24ndCBpbnNwZWN0IHRoZWlyIHN0YWNrIGFueXdheSwgYW5kIGNyZWF0aW5nIHRoZW1cbiAgICogaXMgcHJvaGliaXRpdmVseSBleHBlbnNpdmUgaWYgdGhleSBhcmUgY3JlYXRlZCB0b28gb2Z0ZW4sIHN1Y2ggYXMgd2hhdFxuICAgKiBoYXBwZW5zIGluIG9uZU9mVHlwZSgpIGZvciBhbnkgdHlwZSBiZWZvcmUgdGhlIG9uZSB0aGF0IG1hdGNoZWQuXG4gICAqL1xuICBmdW5jdGlvbiBQcm9wVHlwZUVycm9yKG1lc3NhZ2UpIHtcbiAgICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xuICAgIHRoaXMuc3RhY2sgPSAnJztcbiAgfVxuICAvLyBNYWtlIGBpbnN0YW5jZW9mIEVycm9yYCBzdGlsbCB3b3JrIGZvciByZXR1cm5lZCBlcnJvcnMuXG4gIFByb3BUeXBlRXJyb3IucHJvdG90eXBlID0gRXJyb3IucHJvdG90eXBlO1xuXG4gIGZ1bmN0aW9uIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHZhciBtYW51YWxQcm9wVHlwZUNhbGxDYWNoZSA9IHt9O1xuICAgICAgdmFyIG1hbnVhbFByb3BUeXBlV2FybmluZ0NvdW50ID0gMDtcbiAgICB9XG4gICAgZnVuY3Rpb24gY2hlY2tUeXBlKGlzUmVxdWlyZWQsIHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSwgc2VjcmV0KSB7XG4gICAgICBjb21wb25lbnROYW1lID0gY29tcG9uZW50TmFtZSB8fCBBTk9OWU1PVVM7XG4gICAgICBwcm9wRnVsbE5hbWUgPSBwcm9wRnVsbE5hbWUgfHwgcHJvcE5hbWU7XG5cbiAgICAgIGlmIChzZWNyZXQgIT09IFJlYWN0UHJvcFR5cGVzU2VjcmV0KSB7XG4gICAgICAgIGlmICh0aHJvd09uRGlyZWN0QWNjZXNzKSB7XG4gICAgICAgICAgLy8gTmV3IGJlaGF2aW9yIG9ubHkgZm9yIHVzZXJzIG9mIGBwcm9wLXR5cGVzYCBwYWNrYWdlXG4gICAgICAgICAgdmFyIGVyciA9IG5ldyBFcnJvcihcbiAgICAgICAgICAgICdDYWxsaW5nIFByb3BUeXBlcyB2YWxpZGF0b3JzIGRpcmVjdGx5IGlzIG5vdCBzdXBwb3J0ZWQgYnkgdGhlIGBwcm9wLXR5cGVzYCBwYWNrYWdlLiAnICtcbiAgICAgICAgICAgICdVc2UgYFByb3BUeXBlcy5jaGVja1Byb3BUeXBlcygpYCB0byBjYWxsIHRoZW0uICcgK1xuICAgICAgICAgICAgJ1JlYWQgbW9yZSBhdCBodHRwOi8vZmIubWUvdXNlLWNoZWNrLXByb3AtdHlwZXMnXG4gICAgICAgICAgKTtcbiAgICAgICAgICBlcnIubmFtZSA9ICdJbnZhcmlhbnQgVmlvbGF0aW9uJztcbiAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgIH0gZWxzZSBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAvLyBPbGQgYmVoYXZpb3IgZm9yIHBlb3BsZSB1c2luZyBSZWFjdC5Qcm9wVHlwZXNcbiAgICAgICAgICB2YXIgY2FjaGVLZXkgPSBjb21wb25lbnROYW1lICsgJzonICsgcHJvcE5hbWU7XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgIW1hbnVhbFByb3BUeXBlQ2FsbENhY2hlW2NhY2hlS2V5XSAmJlxuICAgICAgICAgICAgLy8gQXZvaWQgc3BhbW1pbmcgdGhlIGNvbnNvbGUgYmVjYXVzZSB0aGV5IGFyZSBvZnRlbiBub3QgYWN0aW9uYWJsZSBleGNlcHQgZm9yIGxpYiBhdXRob3JzXG4gICAgICAgICAgICBtYW51YWxQcm9wVHlwZVdhcm5pbmdDb3VudCA8IDNcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIHByaW50V2FybmluZyhcbiAgICAgICAgICAgICAgJ1lvdSBhcmUgbWFudWFsbHkgY2FsbGluZyBhIFJlYWN0LlByb3BUeXBlcyB2YWxpZGF0aW9uICcgK1xuICAgICAgICAgICAgICAnZnVuY3Rpb24gZm9yIHRoZSBgJyArIHByb3BGdWxsTmFtZSArICdgIHByb3Agb24gYCcgKyBjb21wb25lbnROYW1lICArICdgLiBUaGlzIGlzIGRlcHJlY2F0ZWQgJyArXG4gICAgICAgICAgICAgICdhbmQgd2lsbCB0aHJvdyBpbiB0aGUgc3RhbmRhbG9uZSBgcHJvcC10eXBlc2AgcGFja2FnZS4gJyArXG4gICAgICAgICAgICAgICdZb3UgbWF5IGJlIHNlZWluZyB0aGlzIHdhcm5pbmcgZHVlIHRvIGEgdGhpcmQtcGFydHkgUHJvcFR5cGVzICcgK1xuICAgICAgICAgICAgICAnbGlicmFyeS4gU2VlIGh0dHBzOi8vZmIubWUvcmVhY3Qtd2FybmluZy1kb250LWNhbGwtcHJvcHR5cGVzICcgKyAnZm9yIGRldGFpbHMuJ1xuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIG1hbnVhbFByb3BUeXBlQ2FsbENhY2hlW2NhY2hlS2V5XSA9IHRydWU7XG4gICAgICAgICAgICBtYW51YWxQcm9wVHlwZVdhcm5pbmdDb3VudCsrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHByb3BzW3Byb3BOYW1lXSA9PSBudWxsKSB7XG4gICAgICAgIGlmIChpc1JlcXVpcmVkKSB7XG4gICAgICAgICAgaWYgKHByb3BzW3Byb3BOYW1lXSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdUaGUgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIGlzIG1hcmtlZCBhcyByZXF1aXJlZCAnICsgKCdpbiBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgYnV0IGl0cyB2YWx1ZSBpcyBgbnVsbGAuJykpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ1RoZSAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2AgaXMgbWFya2VkIGFzIHJlcXVpcmVkIGluICcgKyAoJ2AnICsgY29tcG9uZW50TmFtZSArICdgLCBidXQgaXRzIHZhbHVlIGlzIGB1bmRlZmluZWRgLicpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBjaGFpbmVkQ2hlY2tUeXBlID0gY2hlY2tUeXBlLmJpbmQobnVsbCwgZmFsc2UpO1xuICAgIGNoYWluZWRDaGVja1R5cGUuaXNSZXF1aXJlZCA9IGNoZWNrVHlwZS5iaW5kKG51bGwsIHRydWUpO1xuXG4gICAgcmV0dXJuIGNoYWluZWRDaGVja1R5cGU7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcihleHBlY3RlZFR5cGUpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUsIHNlY3JldCkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICBpZiAocHJvcFR5cGUgIT09IGV4cGVjdGVkVHlwZSkge1xuICAgICAgICAvLyBgcHJvcFZhbHVlYCBiZWluZyBpbnN0YW5jZSBvZiwgc2F5LCBkYXRlL3JlZ2V4cCwgcGFzcyB0aGUgJ29iamVjdCdcbiAgICAgICAgLy8gY2hlY2ssIGJ1dCB3ZSBjYW4gb2ZmZXIgYSBtb3JlIHByZWNpc2UgZXJyb3IgbWVzc2FnZSBoZXJlIHJhdGhlciB0aGFuXG4gICAgICAgIC8vICdvZiB0eXBlIGBvYmplY3RgJy5cbiAgICAgICAgdmFyIHByZWNpc2VUeXBlID0gZ2V0UHJlY2lzZVR5cGUocHJvcFZhbHVlKTtcblxuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBwcmVjaXNlVHlwZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCAnKSArICgnYCcgKyBleHBlY3RlZFR5cGUgKyAnYC4nKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUFueVR5cGVDaGVja2VyKCkge1xuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcihlbXB0eUZ1bmN0aW9uVGhhdFJldHVybnNOdWxsKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUFycmF5T2ZUeXBlQ2hlY2tlcih0eXBlQ2hlY2tlcikge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgaWYgKHR5cGVvZiB0eXBlQ2hlY2tlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ1Byb3BlcnR5IGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgY29tcG9uZW50IGAnICsgY29tcG9uZW50TmFtZSArICdgIGhhcyBpbnZhbGlkIFByb3BUeXBlIG5vdGF0aW9uIGluc2lkZSBhcnJheU9mLicpO1xuICAgICAgfVxuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIGlmICghQXJyYXkuaXNBcnJheShwcm9wVmFsdWUpKSB7XG4gICAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIHByb3BUeXBlICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGFuIGFycmF5LicpKTtcbiAgICAgIH1cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcFZhbHVlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBlcnJvciA9IHR5cGVDaGVja2VyKHByb3BWYWx1ZSwgaSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSArICdbJyArIGkgKyAnXScsIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlRWxlbWVudFR5cGVDaGVja2VyKCkge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIGlmICghaXNWYWxpZEVsZW1lbnQocHJvcFZhbHVlKSkge1xuICAgICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBwcm9wVHlwZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBhIHNpbmdsZSBSZWFjdEVsZW1lbnQuJykpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVFbGVtZW50VHlwZVR5cGVDaGVja2VyKCkge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIGlmICghUmVhY3RJcy5pc1ZhbGlkRWxlbWVudFR5cGUocHJvcFZhbHVlKSkge1xuICAgICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBwcm9wVHlwZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBhIHNpbmdsZSBSZWFjdEVsZW1lbnQgdHlwZS4nKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUluc3RhbmNlVHlwZUNoZWNrZXIoZXhwZWN0ZWRDbGFzcykge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgaWYgKCEocHJvcHNbcHJvcE5hbWVdIGluc3RhbmNlb2YgZXhwZWN0ZWRDbGFzcykpIHtcbiAgICAgICAgdmFyIGV4cGVjdGVkQ2xhc3NOYW1lID0gZXhwZWN0ZWRDbGFzcy5uYW1lIHx8IEFOT05ZTU9VUztcbiAgICAgICAgdmFyIGFjdHVhbENsYXNzTmFtZSA9IGdldENsYXNzTmFtZShwcm9wc1twcm9wTmFtZV0pO1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBhY3R1YWxDbGFzc05hbWUgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgJykgKyAoJ2luc3RhbmNlIG9mIGAnICsgZXhwZWN0ZWRDbGFzc05hbWUgKyAnYC4nKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUVudW1UeXBlQ2hlY2tlcihleHBlY3RlZFZhbHVlcykge1xuICAgIGlmICghQXJyYXkuaXNBcnJheShleHBlY3RlZFZhbHVlcykpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICAgIHByaW50V2FybmluZyhcbiAgICAgICAgICAgICdJbnZhbGlkIGFyZ3VtZW50cyBzdXBwbGllZCB0byBvbmVPZiwgZXhwZWN0ZWQgYW4gYXJyYXksIGdvdCAnICsgYXJndW1lbnRzLmxlbmd0aCArICcgYXJndW1lbnRzLiAnICtcbiAgICAgICAgICAgICdBIGNvbW1vbiBtaXN0YWtlIGlzIHRvIHdyaXRlIG9uZU9mKHgsIHksIHopIGluc3RlYWQgb2Ygb25lT2YoW3gsIHksIHpdKS4nXG4gICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwcmludFdhcm5pbmcoJ0ludmFsaWQgYXJndW1lbnQgc3VwcGxpZWQgdG8gb25lT2YsIGV4cGVjdGVkIGFuIGFycmF5LicpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gZW1wdHlGdW5jdGlvblRoYXRSZXR1cm5zTnVsbDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGV4cGVjdGVkVmFsdWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChpcyhwcm9wVmFsdWUsIGV4cGVjdGVkVmFsdWVzW2ldKSkge1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHZhciB2YWx1ZXNTdHJpbmcgPSBKU09OLnN0cmluZ2lmeShleHBlY3RlZFZhbHVlcywgZnVuY3Rpb24gcmVwbGFjZXIoa2V5LCB2YWx1ZSkge1xuICAgICAgICBpZiAoZ2V0UHJvcFR5cGUodmFsdWUpID09PSAnc3ltYm9sJykge1xuICAgICAgICAgIHJldHVybiBTdHJpbmcodmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB2YWx1ZSBgJyArIFN0cmluZyhwcm9wVmFsdWUpICsgJ2AgJyArICgnc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIG9uZSBvZiAnICsgdmFsdWVzU3RyaW5nICsgJy4nKSk7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVPYmplY3RPZlR5cGVDaGVja2VyKHR5cGVDaGVja2VyKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICBpZiAodHlwZW9mIHR5cGVDaGVja2VyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignUHJvcGVydHkgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiBjb21wb25lbnQgYCcgKyBjb21wb25lbnROYW1lICsgJ2AgaGFzIGludmFsaWQgUHJvcFR5cGUgbm90YXRpb24gaW5zaWRlIG9iamVjdE9mLicpO1xuICAgICAgfVxuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICBpZiAocHJvcFR5cGUgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIHByb3BUeXBlICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGFuIG9iamVjdC4nKSk7XG4gICAgICB9XG4gICAgICBmb3IgKHZhciBrZXkgaW4gcHJvcFZhbHVlKSB7XG4gICAgICAgIGlmIChoYXMocHJvcFZhbHVlLCBrZXkpKSB7XG4gICAgICAgICAgdmFyIGVycm9yID0gdHlwZUNoZWNrZXIocHJvcFZhbHVlLCBrZXksIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUgKyAnLicgKyBrZXksIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVVbmlvblR5cGVDaGVja2VyKGFycmF5T2ZUeXBlQ2hlY2tlcnMpIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoYXJyYXlPZlR5cGVDaGVja2VycykpIHtcbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyBwcmludFdhcm5pbmcoJ0ludmFsaWQgYXJndW1lbnQgc3VwcGxpZWQgdG8gb25lT2ZUeXBlLCBleHBlY3RlZCBhbiBpbnN0YW5jZSBvZiBhcnJheS4nKSA6IHZvaWQgMDtcbiAgICAgIHJldHVybiBlbXB0eUZ1bmN0aW9uVGhhdFJldHVybnNOdWxsO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyYXlPZlR5cGVDaGVja2Vycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGNoZWNrZXIgPSBhcnJheU9mVHlwZUNoZWNrZXJzW2ldO1xuICAgICAgaWYgKHR5cGVvZiBjaGVja2VyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHByaW50V2FybmluZyhcbiAgICAgICAgICAnSW52YWxpZCBhcmd1bWVudCBzdXBwbGllZCB0byBvbmVPZlR5cGUuIEV4cGVjdGVkIGFuIGFycmF5IG9mIGNoZWNrIGZ1bmN0aW9ucywgYnV0ICcgK1xuICAgICAgICAgICdyZWNlaXZlZCAnICsgZ2V0UG9zdGZpeEZvclR5cGVXYXJuaW5nKGNoZWNrZXIpICsgJyBhdCBpbmRleCAnICsgaSArICcuJ1xuICAgICAgICApO1xuICAgICAgICByZXR1cm4gZW1wdHlGdW5jdGlvblRoYXRSZXR1cm5zTnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyYXlPZlR5cGVDaGVja2Vycy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgY2hlY2tlciA9IGFycmF5T2ZUeXBlQ2hlY2tlcnNbaV07XG4gICAgICAgIGlmIChjaGVja2VyKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSwgUmVhY3RQcm9wVHlwZXNTZWNyZXQpID09IG51bGwpIHtcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIHN1cHBsaWVkIHRvICcgKyAoJ2AnICsgY29tcG9uZW50TmFtZSArICdgLicpKTtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZU5vZGVDaGVja2VyKCkge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgaWYgKCFpc05vZGUocHJvcHNbcHJvcE5hbWVdKSkge1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIHN1cHBsaWVkIHRvICcgKyAoJ2AnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBhIFJlYWN0Tm9kZS4nKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVNoYXBlVHlwZUNoZWNrZXIoc2hhcGVUeXBlcykge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICBpZiAocHJvcFR5cGUgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSBgJyArIHByb3BUeXBlICsgJ2AgJyArICgnc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGBvYmplY3RgLicpKTtcbiAgICAgIH1cbiAgICAgIGZvciAodmFyIGtleSBpbiBzaGFwZVR5cGVzKSB7XG4gICAgICAgIHZhciBjaGVja2VyID0gc2hhcGVUeXBlc1trZXldO1xuICAgICAgICBpZiAoIWNoZWNrZXIpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgZXJyb3IgPSBjaGVja2VyKHByb3BWYWx1ZSwga2V5LCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lICsgJy4nICsga2V5LCBSZWFjdFByb3BUeXBlc1NlY3JldCk7XG4gICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgIHJldHVybiBlcnJvcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVTdHJpY3RTaGFwZVR5cGVDaGVja2VyKHNoYXBlVHlwZXMpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgaWYgKHByb3BUeXBlICE9PSAnb2JqZWN0Jykge1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgYCcgKyBwcm9wVHlwZSArICdgICcgKyAoJ3N1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBgb2JqZWN0YC4nKSk7XG4gICAgICB9XG4gICAgICAvLyBXZSBuZWVkIHRvIGNoZWNrIGFsbCBrZXlzIGluIGNhc2Ugc29tZSBhcmUgcmVxdWlyZWQgYnV0IG1pc3NpbmcgZnJvbVxuICAgICAgLy8gcHJvcHMuXG4gICAgICB2YXIgYWxsS2V5cyA9IGFzc2lnbih7fSwgcHJvcHNbcHJvcE5hbWVdLCBzaGFwZVR5cGVzKTtcbiAgICAgIGZvciAodmFyIGtleSBpbiBhbGxLZXlzKSB7XG4gICAgICAgIHZhciBjaGVja2VyID0gc2hhcGVUeXBlc1trZXldO1xuICAgICAgICBpZiAoIWNoZWNrZXIpIHtcbiAgICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoXG4gICAgICAgICAgICAnSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Aga2V5IGAnICsga2V5ICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AuJyArXG4gICAgICAgICAgICAnXFxuQmFkIG9iamVjdDogJyArIEpTT04uc3RyaW5naWZ5KHByb3BzW3Byb3BOYW1lXSwgbnVsbCwgJyAgJykgK1xuICAgICAgICAgICAgJ1xcblZhbGlkIGtleXM6ICcgKyAgSlNPTi5zdHJpbmdpZnkoT2JqZWN0LmtleXMoc2hhcGVUeXBlcyksIG51bGwsICcgICcpXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgZXJyb3IgPSBjaGVja2VyKHByb3BWYWx1ZSwga2V5LCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lICsgJy4nICsga2V5LCBSZWFjdFByb3BUeXBlc1NlY3JldCk7XG4gICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgIHJldHVybiBlcnJvcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzTm9kZShwcm9wVmFsdWUpIHtcbiAgICBzd2l0Y2ggKHR5cGVvZiBwcm9wVmFsdWUpIHtcbiAgICAgIGNhc2UgJ251bWJlcic6XG4gICAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgY2FzZSAndW5kZWZpbmVkJzpcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICBjYXNlICdib29sZWFuJzpcbiAgICAgICAgcmV0dXJuICFwcm9wVmFsdWU7XG4gICAgICBjYXNlICdvYmplY3QnOlxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShwcm9wVmFsdWUpKSB7XG4gICAgICAgICAgcmV0dXJuIHByb3BWYWx1ZS5ldmVyeShpc05vZGUpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwcm9wVmFsdWUgPT09IG51bGwgfHwgaXNWYWxpZEVsZW1lbnQocHJvcFZhbHVlKSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGl0ZXJhdG9yRm4gPSBnZXRJdGVyYXRvckZuKHByb3BWYWx1ZSk7XG4gICAgICAgIGlmIChpdGVyYXRvckZuKSB7XG4gICAgICAgICAgdmFyIGl0ZXJhdG9yID0gaXRlcmF0b3JGbi5jYWxsKHByb3BWYWx1ZSk7XG4gICAgICAgICAgdmFyIHN0ZXA7XG4gICAgICAgICAgaWYgKGl0ZXJhdG9yRm4gIT09IHByb3BWYWx1ZS5lbnRyaWVzKSB7XG4gICAgICAgICAgICB3aGlsZSAoIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lKSB7XG4gICAgICAgICAgICAgIGlmICghaXNOb2RlKHN0ZXAudmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIEl0ZXJhdG9yIHdpbGwgcHJvdmlkZSBlbnRyeSBbayx2XSB0dXBsZXMgcmF0aGVyIHRoYW4gdmFsdWVzLlxuICAgICAgICAgICAgd2hpbGUgKCEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZSkge1xuICAgICAgICAgICAgICB2YXIgZW50cnkgPSBzdGVwLnZhbHVlO1xuICAgICAgICAgICAgICBpZiAoZW50cnkpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWlzTm9kZShlbnRyeVsxXSkpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaXNTeW1ib2wocHJvcFR5cGUsIHByb3BWYWx1ZSkge1xuICAgIC8vIE5hdGl2ZSBTeW1ib2wuXG4gICAgaWYgKHByb3BUeXBlID09PSAnc3ltYm9sJykge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgLy8gMTkuNC4zLjUgU3ltYm9sLnByb3RvdHlwZVtAQHRvU3RyaW5nVGFnXSA9PT0gJ1N5bWJvbCdcbiAgICBpZiAocHJvcFZhbHVlWydAQHRvU3RyaW5nVGFnJ10gPT09ICdTeW1ib2wnKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBGYWxsYmFjayBmb3Igbm9uLXNwZWMgY29tcGxpYW50IFN5bWJvbHMgd2hpY2ggYXJlIHBvbHlmaWxsZWQuXG4gICAgaWYgKHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgcHJvcFZhbHVlIGluc3RhbmNlb2YgU3ltYm9sKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvLyBFcXVpdmFsZW50IG9mIGB0eXBlb2ZgIGJ1dCB3aXRoIHNwZWNpYWwgaGFuZGxpbmcgZm9yIGFycmF5IGFuZCByZWdleHAuXG4gIGZ1bmN0aW9uIGdldFByb3BUeXBlKHByb3BWYWx1ZSkge1xuICAgIHZhciBwcm9wVHlwZSA9IHR5cGVvZiBwcm9wVmFsdWU7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkocHJvcFZhbHVlKSkge1xuICAgICAgcmV0dXJuICdhcnJheSc7XG4gICAgfVxuICAgIGlmIChwcm9wVmFsdWUgaW5zdGFuY2VvZiBSZWdFeHApIHtcbiAgICAgIC8vIE9sZCB3ZWJraXRzIChhdCBsZWFzdCB1bnRpbCBBbmRyb2lkIDQuMCkgcmV0dXJuICdmdW5jdGlvbicgcmF0aGVyIHRoYW5cbiAgICAgIC8vICdvYmplY3QnIGZvciB0eXBlb2YgYSBSZWdFeHAuIFdlJ2xsIG5vcm1hbGl6ZSB0aGlzIGhlcmUgc28gdGhhdCAvYmxhL1xuICAgICAgLy8gcGFzc2VzIFByb3BUeXBlcy5vYmplY3QuXG4gICAgICByZXR1cm4gJ29iamVjdCc7XG4gICAgfVxuICAgIGlmIChpc1N5bWJvbChwcm9wVHlwZSwgcHJvcFZhbHVlKSkge1xuICAgICAgcmV0dXJuICdzeW1ib2wnO1xuICAgIH1cbiAgICByZXR1cm4gcHJvcFR5cGU7XG4gIH1cblxuICAvLyBUaGlzIGhhbmRsZXMgbW9yZSB0eXBlcyB0aGFuIGBnZXRQcm9wVHlwZWAuIE9ubHkgdXNlZCBmb3IgZXJyb3IgbWVzc2FnZXMuXG4gIC8vIFNlZSBgY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXJgLlxuICBmdW5jdGlvbiBnZXRQcmVjaXNlVHlwZShwcm9wVmFsdWUpIHtcbiAgICBpZiAodHlwZW9mIHByb3BWYWx1ZSA9PT0gJ3VuZGVmaW5lZCcgfHwgcHJvcFZhbHVlID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gJycgKyBwcm9wVmFsdWU7XG4gICAgfVxuICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgaWYgKHByb3BUeXBlID09PSAnb2JqZWN0Jykge1xuICAgICAgaWYgKHByb3BWYWx1ZSBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgICAgcmV0dXJuICdkYXRlJztcbiAgICAgIH0gZWxzZSBpZiAocHJvcFZhbHVlIGluc3RhbmNlb2YgUmVnRXhwKSB7XG4gICAgICAgIHJldHVybiAncmVnZXhwJztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHByb3BUeXBlO1xuICB9XG5cbiAgLy8gUmV0dXJucyBhIHN0cmluZyB0aGF0IGlzIHBvc3RmaXhlZCB0byBhIHdhcm5pbmcgYWJvdXQgYW4gaW52YWxpZCB0eXBlLlxuICAvLyBGb3IgZXhhbXBsZSwgXCJ1bmRlZmluZWRcIiBvciBcIm9mIHR5cGUgYXJyYXlcIlxuICBmdW5jdGlvbiBnZXRQb3N0Zml4Rm9yVHlwZVdhcm5pbmcodmFsdWUpIHtcbiAgICB2YXIgdHlwZSA9IGdldFByZWNpc2VUeXBlKHZhbHVlKTtcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgJ2FycmF5JzpcbiAgICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICAgIHJldHVybiAnYW4gJyArIHR5cGU7XG4gICAgICBjYXNlICdib29sZWFuJzpcbiAgICAgIGNhc2UgJ2RhdGUnOlxuICAgICAgY2FzZSAncmVnZXhwJzpcbiAgICAgICAgcmV0dXJuICdhICcgKyB0eXBlO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHR5cGU7XG4gICAgfVxuICB9XG5cbiAgLy8gUmV0dXJucyBjbGFzcyBuYW1lIG9mIHRoZSBvYmplY3QsIGlmIGFueS5cbiAgZnVuY3Rpb24gZ2V0Q2xhc3NOYW1lKHByb3BWYWx1ZSkge1xuICAgIGlmICghcHJvcFZhbHVlLmNvbnN0cnVjdG9yIHx8ICFwcm9wVmFsdWUuY29uc3RydWN0b3IubmFtZSkge1xuICAgICAgcmV0dXJuIEFOT05ZTU9VUztcbiAgICB9XG4gICAgcmV0dXJuIHByb3BWYWx1ZS5jb25zdHJ1Y3Rvci5uYW1lO1xuICB9XG5cbiAgUmVhY3RQcm9wVHlwZXMuY2hlY2tQcm9wVHlwZXMgPSBjaGVja1Byb3BUeXBlcztcbiAgUmVhY3RQcm9wVHlwZXMucmVzZXRXYXJuaW5nQ2FjaGUgPSBjaGVja1Byb3BUeXBlcy5yZXNldFdhcm5pbmdDYWNoZTtcbiAgUmVhY3RQcm9wVHlwZXMuUHJvcFR5cGVzID0gUmVhY3RQcm9wVHlwZXM7XG5cbiAgcmV0dXJuIFJlYWN0UHJvcFR5cGVzO1xufTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgUmVhY3RQcm9wVHlwZXNTZWNyZXQgPSByZXF1aXJlKCcuL2xpYi9SZWFjdFByb3BUeXBlc1NlY3JldCcpO1xuXG5mdW5jdGlvbiBlbXB0eUZ1bmN0aW9uKCkge31cbmZ1bmN0aW9uIGVtcHR5RnVuY3Rpb25XaXRoUmVzZXQoKSB7fVxuZW1wdHlGdW5jdGlvbldpdGhSZXNldC5yZXNldFdhcm5pbmdDYWNoZSA9IGVtcHR5RnVuY3Rpb247XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIHNoaW0ocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lLCBzZWNyZXQpIHtcbiAgICBpZiAoc2VjcmV0ID09PSBSZWFjdFByb3BUeXBlc1NlY3JldCkge1xuICAgICAgLy8gSXQgaXMgc3RpbGwgc2FmZSB3aGVuIGNhbGxlZCBmcm9tIFJlYWN0LlxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgZXJyID0gbmV3IEVycm9yKFxuICAgICAgJ0NhbGxpbmcgUHJvcFR5cGVzIHZhbGlkYXRvcnMgZGlyZWN0bHkgaXMgbm90IHN1cHBvcnRlZCBieSB0aGUgYHByb3AtdHlwZXNgIHBhY2thZ2UuICcgK1xuICAgICAgJ1VzZSBQcm9wVHlwZXMuY2hlY2tQcm9wVHlwZXMoKSB0byBjYWxsIHRoZW0uICcgK1xuICAgICAgJ1JlYWQgbW9yZSBhdCBodHRwOi8vZmIubWUvdXNlLWNoZWNrLXByb3AtdHlwZXMnXG4gICAgKTtcbiAgICBlcnIubmFtZSA9ICdJbnZhcmlhbnQgVmlvbGF0aW9uJztcbiAgICB0aHJvdyBlcnI7XG4gIH07XG4gIHNoaW0uaXNSZXF1aXJlZCA9IHNoaW07XG4gIGZ1bmN0aW9uIGdldFNoaW0oKSB7XG4gICAgcmV0dXJuIHNoaW07XG4gIH07XG4gIC8vIEltcG9ydGFudCFcbiAgLy8gS2VlcCB0aGlzIGxpc3QgaW4gc3luYyB3aXRoIHByb2R1Y3Rpb24gdmVyc2lvbiBpbiBgLi9mYWN0b3J5V2l0aFR5cGVDaGVja2Vycy5qc2AuXG4gIHZhciBSZWFjdFByb3BUeXBlcyA9IHtcbiAgICBhcnJheTogc2hpbSxcbiAgICBib29sOiBzaGltLFxuICAgIGZ1bmM6IHNoaW0sXG4gICAgbnVtYmVyOiBzaGltLFxuICAgIG9iamVjdDogc2hpbSxcbiAgICBzdHJpbmc6IHNoaW0sXG4gICAgc3ltYm9sOiBzaGltLFxuXG4gICAgYW55OiBzaGltLFxuICAgIGFycmF5T2Y6IGdldFNoaW0sXG4gICAgZWxlbWVudDogc2hpbSxcbiAgICBlbGVtZW50VHlwZTogc2hpbSxcbiAgICBpbnN0YW5jZU9mOiBnZXRTaGltLFxuICAgIG5vZGU6IHNoaW0sXG4gICAgb2JqZWN0T2Y6IGdldFNoaW0sXG4gICAgb25lT2Y6IGdldFNoaW0sXG4gICAgb25lT2ZUeXBlOiBnZXRTaGltLFxuICAgIHNoYXBlOiBnZXRTaGltLFxuICAgIGV4YWN0OiBnZXRTaGltLFxuXG4gICAgY2hlY2tQcm9wVHlwZXM6IGVtcHR5RnVuY3Rpb25XaXRoUmVzZXQsXG4gICAgcmVzZXRXYXJuaW5nQ2FjaGU6IGVtcHR5RnVuY3Rpb25cbiAgfTtcblxuICBSZWFjdFByb3BUeXBlcy5Qcm9wVHlwZXMgPSBSZWFjdFByb3BUeXBlcztcblxuICByZXR1cm4gUmVhY3RQcm9wVHlwZXM7XG59O1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICB2YXIgUmVhY3RJcyA9IHJlcXVpcmUoJ3JlYWN0LWlzJyk7XG5cbiAgLy8gQnkgZXhwbGljaXRseSB1c2luZyBgcHJvcC10eXBlc2AgeW91IGFyZSBvcHRpbmcgaW50byBuZXcgZGV2ZWxvcG1lbnQgYmVoYXZpb3IuXG4gIC8vIGh0dHA6Ly9mYi5tZS9wcm9wLXR5cGVzLWluLXByb2RcbiAgdmFyIHRocm93T25EaXJlY3RBY2Nlc3MgPSB0cnVlO1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZmFjdG9yeVdpdGhUeXBlQ2hlY2tlcnMnKShSZWFjdElzLmlzRWxlbWVudCwgdGhyb3dPbkRpcmVjdEFjY2Vzcyk7XG59IGVsc2Uge1xuICAvLyBCeSBleHBsaWNpdGx5IHVzaW5nIGBwcm9wLXR5cGVzYCB5b3UgYXJlIG9wdGluZyBpbnRvIG5ldyBwcm9kdWN0aW9uIGJlaGF2aW9yLlxuICAvLyBodHRwOi8vZmIubWUvcHJvcC10eXBlcy1pbi1wcm9kXG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9mYWN0b3J5V2l0aFRocm93aW5nU2hpbXMnKSgpO1xufVxuIiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBkZWZhdWx0OiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gaGFzQ2xhc3M7XG5cbmZ1bmN0aW9uIGhhc0NsYXNzKGVsZW1lbnQsIGNsYXNzTmFtZSkge1xuICBpZiAoZWxlbWVudC5jbGFzc0xpc3QpIHJldHVybiAhIWNsYXNzTmFtZSAmJiBlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhjbGFzc05hbWUpO2Vsc2UgcmV0dXJuIChcIiBcIiArIChlbGVtZW50LmNsYXNzTmFtZS5iYXNlVmFsIHx8IGVsZW1lbnQuY2xhc3NOYW1lKSArIFwiIFwiKS5pbmRleE9mKFwiIFwiICsgY2xhc3NOYW1lICsgXCIgXCIpICE9PSAtMTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzW1wiZGVmYXVsdFwiXTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSBhZGRDbGFzcztcblxudmFyIF9oYXNDbGFzcyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vaGFzQ2xhc3NcIikpO1xuXG5mdW5jdGlvbiBhZGRDbGFzcyhlbGVtZW50LCBjbGFzc05hbWUpIHtcbiAgaWYgKGVsZW1lbnQuY2xhc3NMaXN0KSBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtlbHNlIGlmICghKDAsIF9oYXNDbGFzcy5kZWZhdWx0KShlbGVtZW50LCBjbGFzc05hbWUpKSBpZiAodHlwZW9mIGVsZW1lbnQuY2xhc3NOYW1lID09PSAnc3RyaW5nJykgZWxlbWVudC5jbGFzc05hbWUgPSBlbGVtZW50LmNsYXNzTmFtZSArICcgJyArIGNsYXNzTmFtZTtlbHNlIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdjbGFzcycsIChlbGVtZW50LmNsYXNzTmFtZSAmJiBlbGVtZW50LmNsYXNzTmFtZS5iYXNlVmFsIHx8ICcnKSArICcgJyArIGNsYXNzTmFtZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1tcImRlZmF1bHRcIl07IiwiJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiByZXBsYWNlQ2xhc3NOYW1lKG9yaWdDbGFzcywgY2xhc3NUb1JlbW92ZSkge1xuICByZXR1cm4gb3JpZ0NsYXNzLnJlcGxhY2UobmV3IFJlZ0V4cCgnKF58XFxcXHMpJyArIGNsYXNzVG9SZW1vdmUgKyAnKD86XFxcXHN8JCknLCAnZycpLCAnJDEnKS5yZXBsYWNlKC9cXHMrL2csICcgJykucmVwbGFjZSgvXlxccyp8XFxzKiQvZywgJycpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHJlbW92ZUNsYXNzKGVsZW1lbnQsIGNsYXNzTmFtZSkge1xuICBpZiAoZWxlbWVudC5jbGFzc0xpc3QpIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpO2Vsc2UgaWYgKHR5cGVvZiBlbGVtZW50LmNsYXNzTmFtZSA9PT0gJ3N0cmluZycpIGVsZW1lbnQuY2xhc3NOYW1lID0gcmVwbGFjZUNsYXNzTmFtZShlbGVtZW50LmNsYXNzTmFtZSwgY2xhc3NOYW1lKTtlbHNlIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdjbGFzcycsIHJlcGxhY2VDbGFzc05hbWUoZWxlbWVudC5jbGFzc05hbWUgJiYgZWxlbWVudC5jbGFzc05hbWUuYmFzZVZhbCB8fCAnJywgY2xhc3NOYW1lKSk7XG59OyIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuZnVuY3Rpb24gY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAvLyBDYWxsIHRoaXMuY29uc3RydWN0b3IuZ0RTRlAgdG8gc3VwcG9ydCBzdWItY2xhc3Nlcy5cbiAgdmFyIHN0YXRlID0gdGhpcy5jb25zdHJ1Y3Rvci5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHModGhpcy5wcm9wcywgdGhpcy5zdGF0ZSk7XG4gIGlmIChzdGF0ZSAhPT0gbnVsbCAmJiBzdGF0ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5zZXRTdGF0ZShzdGF0ZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgLy8gQ2FsbCB0aGlzLmNvbnN0cnVjdG9yLmdEU0ZQIHRvIHN1cHBvcnQgc3ViLWNsYXNzZXMuXG4gIC8vIFVzZSB0aGUgc2V0U3RhdGUoKSB1cGRhdGVyIHRvIGVuc3VyZSBzdGF0ZSBpc24ndCBzdGFsZSBpbiBjZXJ0YWluIGVkZ2UgY2FzZXMuXG4gIGZ1bmN0aW9uIHVwZGF0ZXIocHJldlN0YXRlKSB7XG4gICAgdmFyIHN0YXRlID0gdGhpcy5jb25zdHJ1Y3Rvci5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMobmV4dFByb3BzLCBwcmV2U3RhdGUpO1xuICAgIHJldHVybiBzdGF0ZSAhPT0gbnVsbCAmJiBzdGF0ZSAhPT0gdW5kZWZpbmVkID8gc3RhdGUgOiBudWxsO1xuICB9XG4gIC8vIEJpbmRpbmcgXCJ0aGlzXCIgaXMgaW1wb3J0YW50IGZvciBzaGFsbG93IHJlbmRlcmVyIHN1cHBvcnQuXG4gIHRoaXMuc2V0U3RhdGUodXBkYXRlci5iaW5kKHRoaXMpKTtcbn1cblxuZnVuY3Rpb24gY29tcG9uZW50V2lsbFVwZGF0ZShuZXh0UHJvcHMsIG5leHRTdGF0ZSkge1xuICB0cnkge1xuICAgIHZhciBwcmV2UHJvcHMgPSB0aGlzLnByb3BzO1xuICAgIHZhciBwcmV2U3RhdGUgPSB0aGlzLnN0YXRlO1xuICAgIHRoaXMucHJvcHMgPSBuZXh0UHJvcHM7XG4gICAgdGhpcy5zdGF0ZSA9IG5leHRTdGF0ZTtcbiAgICB0aGlzLl9fcmVhY3RJbnRlcm5hbFNuYXBzaG90RmxhZyA9IHRydWU7XG4gICAgdGhpcy5fX3JlYWN0SW50ZXJuYWxTbmFwc2hvdCA9IHRoaXMuZ2V0U25hcHNob3RCZWZvcmVVcGRhdGUoXG4gICAgICBwcmV2UHJvcHMsXG4gICAgICBwcmV2U3RhdGVcbiAgICApO1xuICB9IGZpbmFsbHkge1xuICAgIHRoaXMucHJvcHMgPSBwcmV2UHJvcHM7XG4gICAgdGhpcy5zdGF0ZSA9IHByZXZTdGF0ZTtcbiAgfVxufVxuXG4vLyBSZWFjdCBtYXkgd2FybiBhYm91dCBjV00vY1dSUC9jV1UgbWV0aG9kcyBiZWluZyBkZXByZWNhdGVkLlxuLy8gQWRkIGEgZmxhZyB0byBzdXBwcmVzcyB0aGVzZSB3YXJuaW5ncyBmb3IgdGhpcyBzcGVjaWFsIGNhc2UuXG5jb21wb25lbnRXaWxsTW91bnQuX19zdXBwcmVzc0RlcHJlY2F0aW9uV2FybmluZyA9IHRydWU7XG5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzLl9fc3VwcHJlc3NEZXByZWNhdGlvbldhcm5pbmcgPSB0cnVlO1xuY29tcG9uZW50V2lsbFVwZGF0ZS5fX3N1cHByZXNzRGVwcmVjYXRpb25XYXJuaW5nID0gdHJ1ZTtcblxuZnVuY3Rpb24gcG9seWZpbGwoQ29tcG9uZW50KSB7XG4gIHZhciBwcm90b3R5cGUgPSBDb21wb25lbnQucHJvdG90eXBlO1xuXG4gIGlmICghcHJvdG90eXBlIHx8ICFwcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudCkge1xuICAgIHRocm93IG5ldyBFcnJvcignQ2FuIG9ubHkgcG9seWZpbGwgY2xhc3MgY29tcG9uZW50cycpO1xuICB9XG5cbiAgaWYgKFxuICAgIHR5cGVvZiBDb21wb25lbnQuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzICE9PSAnZnVuY3Rpb24nICYmXG4gICAgdHlwZW9mIHByb3RvdHlwZS5nZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZSAhPT0gJ2Z1bmN0aW9uJ1xuICApIHtcbiAgICByZXR1cm4gQ29tcG9uZW50O1xuICB9XG5cbiAgLy8gSWYgbmV3IGNvbXBvbmVudCBBUElzIGFyZSBkZWZpbmVkLCBcInVuc2FmZVwiIGxpZmVjeWNsZXMgd29uJ3QgYmUgY2FsbGVkLlxuICAvLyBFcnJvciBpZiBhbnkgb2YgdGhlc2UgbGlmZWN5Y2xlcyBhcmUgcHJlc2VudCxcbiAgLy8gQmVjYXVzZSB0aGV5IHdvdWxkIHdvcmsgZGlmZmVyZW50bHkgYmV0d2VlbiBvbGRlciBhbmQgbmV3ZXIgKDE2LjMrKSB2ZXJzaW9ucyBvZiBSZWFjdC5cbiAgdmFyIGZvdW5kV2lsbE1vdW50TmFtZSA9IG51bGw7XG4gIHZhciBmb3VuZFdpbGxSZWNlaXZlUHJvcHNOYW1lID0gbnVsbDtcbiAgdmFyIGZvdW5kV2lsbFVwZGF0ZU5hbWUgPSBudWxsO1xuICBpZiAodHlwZW9mIHByb3RvdHlwZS5jb21wb25lbnRXaWxsTW91bnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBmb3VuZFdpbGxNb3VudE5hbWUgPSAnY29tcG9uZW50V2lsbE1vdW50JztcbiAgfSBlbHNlIGlmICh0eXBlb2YgcHJvdG90eXBlLlVOU0FGRV9jb21wb25lbnRXaWxsTW91bnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBmb3VuZFdpbGxNb3VudE5hbWUgPSAnVU5TQUZFX2NvbXBvbmVudFdpbGxNb3VudCc7XG4gIH1cbiAgaWYgKHR5cGVvZiBwcm90b3R5cGUuY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGZvdW5kV2lsbFJlY2VpdmVQcm9wc05hbWUgPSAnY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyc7XG4gIH0gZWxzZSBpZiAodHlwZW9mIHByb3RvdHlwZS5VTlNBRkVfY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGZvdW5kV2lsbFJlY2VpdmVQcm9wc05hbWUgPSAnVU5TQUZFX2NvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMnO1xuICB9XG4gIGlmICh0eXBlb2YgcHJvdG90eXBlLmNvbXBvbmVudFdpbGxVcGRhdGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICBmb3VuZFdpbGxVcGRhdGVOYW1lID0gJ2NvbXBvbmVudFdpbGxVcGRhdGUnO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBwcm90b3R5cGUuVU5TQUZFX2NvbXBvbmVudFdpbGxVcGRhdGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICBmb3VuZFdpbGxVcGRhdGVOYW1lID0gJ1VOU0FGRV9jb21wb25lbnRXaWxsVXBkYXRlJztcbiAgfVxuICBpZiAoXG4gICAgZm91bmRXaWxsTW91bnROYW1lICE9PSBudWxsIHx8XG4gICAgZm91bmRXaWxsUmVjZWl2ZVByb3BzTmFtZSAhPT0gbnVsbCB8fFxuICAgIGZvdW5kV2lsbFVwZGF0ZU5hbWUgIT09IG51bGxcbiAgKSB7XG4gICAgdmFyIGNvbXBvbmVudE5hbWUgPSBDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9uZW50Lm5hbWU7XG4gICAgdmFyIG5ld0FwaU5hbWUgPVxuICAgICAgdHlwZW9mIENvbXBvbmVudC5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMgPT09ICdmdW5jdGlvbidcbiAgICAgICAgPyAnZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzKCknXG4gICAgICAgIDogJ2dldFNuYXBzaG90QmVmb3JlVXBkYXRlKCknO1xuXG4gICAgdGhyb3cgRXJyb3IoXG4gICAgICAnVW5zYWZlIGxlZ2FjeSBsaWZlY3ljbGVzIHdpbGwgbm90IGJlIGNhbGxlZCBmb3IgY29tcG9uZW50cyB1c2luZyBuZXcgY29tcG9uZW50IEFQSXMuXFxuXFxuJyArXG4gICAgICAgIGNvbXBvbmVudE5hbWUgK1xuICAgICAgICAnIHVzZXMgJyArXG4gICAgICAgIG5ld0FwaU5hbWUgK1xuICAgICAgICAnIGJ1dCBhbHNvIGNvbnRhaW5zIHRoZSBmb2xsb3dpbmcgbGVnYWN5IGxpZmVjeWNsZXM6JyArXG4gICAgICAgIChmb3VuZFdpbGxNb3VudE5hbWUgIT09IG51bGwgPyAnXFxuICAnICsgZm91bmRXaWxsTW91bnROYW1lIDogJycpICtcbiAgICAgICAgKGZvdW5kV2lsbFJlY2VpdmVQcm9wc05hbWUgIT09IG51bGxcbiAgICAgICAgICA/ICdcXG4gICcgKyBmb3VuZFdpbGxSZWNlaXZlUHJvcHNOYW1lXG4gICAgICAgICAgOiAnJykgK1xuICAgICAgICAoZm91bmRXaWxsVXBkYXRlTmFtZSAhPT0gbnVsbCA/ICdcXG4gICcgKyBmb3VuZFdpbGxVcGRhdGVOYW1lIDogJycpICtcbiAgICAgICAgJ1xcblxcblRoZSBhYm92ZSBsaWZlY3ljbGVzIHNob3VsZCBiZSByZW1vdmVkLiBMZWFybiBtb3JlIGFib3V0IHRoaXMgd2FybmluZyBoZXJlOlxcbicgK1xuICAgICAgICAnaHR0cHM6Ly9mYi5tZS9yZWFjdC1hc3luYy1jb21wb25lbnQtbGlmZWN5Y2xlLWhvb2tzJ1xuICAgICk7XG4gIH1cblxuICAvLyBSZWFjdCA8PSAxNi4yIGRvZXMgbm90IHN1cHBvcnQgc3RhdGljIGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcy5cbiAgLy8gQXMgYSB3b3JrYXJvdW5kLCB1c2UgY1dNIGFuZCBjV1JQIHRvIGludm9rZSB0aGUgbmV3IHN0YXRpYyBsaWZlY3ljbGUuXG4gIC8vIE5ld2VyIHZlcnNpb25zIG9mIFJlYWN0IHdpbGwgaWdub3JlIHRoZXNlIGxpZmVjeWNsZXMgaWYgZ0RTRlAgZXhpc3RzLlxuICBpZiAodHlwZW9mIENvbXBvbmVudC5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMgPT09ICdmdW5jdGlvbicpIHtcbiAgICBwcm90b3R5cGUuY29tcG9uZW50V2lsbE1vdW50ID0gY29tcG9uZW50V2lsbE1vdW50O1xuICAgIHByb3RvdHlwZS5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzID0gY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcztcbiAgfVxuXG4gIC8vIFJlYWN0IDw9IDE2LjIgZG9lcyBub3Qgc3VwcG9ydCBnZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZS5cbiAgLy8gQXMgYSB3b3JrYXJvdW5kLCB1c2UgY1dVIHRvIGludm9rZSB0aGUgbmV3IGxpZmVjeWNsZS5cbiAgLy8gTmV3ZXIgdmVyc2lvbnMgb2YgUmVhY3Qgd2lsbCBpZ25vcmUgdGhhdCBsaWZlY3ljbGUgaWYgZ1NCVSBleGlzdHMuXG4gIGlmICh0eXBlb2YgcHJvdG90eXBlLmdldFNuYXBzaG90QmVmb3JlVXBkYXRlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgaWYgKHR5cGVvZiBwcm90b3R5cGUuY29tcG9uZW50RGlkVXBkYXRlICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICdDYW5ub3QgcG9seWZpbGwgZ2V0U25hcHNob3RCZWZvcmVVcGRhdGUoKSBmb3IgY29tcG9uZW50cyB0aGF0IGRvIG5vdCBkZWZpbmUgY29tcG9uZW50RGlkVXBkYXRlKCkgb24gdGhlIHByb3RvdHlwZSdcbiAgICAgICk7XG4gICAgfVxuXG4gICAgcHJvdG90eXBlLmNvbXBvbmVudFdpbGxVcGRhdGUgPSBjb21wb25lbnRXaWxsVXBkYXRlO1xuXG4gICAgdmFyIGNvbXBvbmVudERpZFVwZGF0ZSA9IHByb3RvdHlwZS5jb21wb25lbnREaWRVcGRhdGU7XG5cbiAgICBwcm90b3R5cGUuY29tcG9uZW50RGlkVXBkYXRlID0gZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlUG9seWZpbGwoXG4gICAgICBwcmV2UHJvcHMsXG4gICAgICBwcmV2U3RhdGUsXG4gICAgICBtYXliZVNuYXBzaG90XG4gICAgKSB7XG4gICAgICAvLyAxNi4zKyB3aWxsIG5vdCBleGVjdXRlIG91ciB3aWxsLXVwZGF0ZSBtZXRob2Q7XG4gICAgICAvLyBJdCB3aWxsIHBhc3MgYSBzbmFwc2hvdCB2YWx1ZSB0byBkaWQtdXBkYXRlIHRob3VnaC5cbiAgICAgIC8vIE9sZGVyIHZlcnNpb25zIHdpbGwgcmVxdWlyZSBvdXIgcG9seWZpbGxlZCB3aWxsLXVwZGF0ZSB2YWx1ZS5cbiAgICAgIC8vIFdlIG5lZWQgdG8gaGFuZGxlIGJvdGggY2FzZXMsIGJ1dCBjYW4ndCBqdXN0IGNoZWNrIGZvciB0aGUgcHJlc2VuY2Ugb2YgXCJtYXliZVNuYXBzaG90XCIsXG4gICAgICAvLyBCZWNhdXNlIGZvciA8PSAxNS54IHZlcnNpb25zIHRoaXMgbWlnaHQgYmUgYSBcInByZXZDb250ZXh0XCIgb2JqZWN0LlxuICAgICAgLy8gV2UgYWxzbyBjYW4ndCBqdXN0IGNoZWNrIFwiX19yZWFjdEludGVybmFsU25hcHNob3RcIixcbiAgICAgIC8vIEJlY2F1c2UgZ2V0LXNuYXBzaG90IG1pZ2h0IHJldHVybiBhIGZhbHN5IHZhbHVlLlxuICAgICAgLy8gU28gY2hlY2sgZm9yIHRoZSBleHBsaWNpdCBfX3JlYWN0SW50ZXJuYWxTbmFwc2hvdEZsYWcgZmxhZyB0byBkZXRlcm1pbmUgYmVoYXZpb3IuXG4gICAgICB2YXIgc25hcHNob3QgPSB0aGlzLl9fcmVhY3RJbnRlcm5hbFNuYXBzaG90RmxhZ1xuICAgICAgICA/IHRoaXMuX19yZWFjdEludGVybmFsU25hcHNob3RcbiAgICAgICAgOiBtYXliZVNuYXBzaG90O1xuXG4gICAgICBjb21wb25lbnREaWRVcGRhdGUuY2FsbCh0aGlzLCBwcmV2UHJvcHMsIHByZXZTdGF0ZSwgc25hcHNob3QpO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gQ29tcG9uZW50O1xufVxuXG5leHBvcnQgeyBwb2x5ZmlsbCB9O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmNsYXNzTmFtZXNTaGFwZSA9IGV4cG9ydHMudGltZW91dHNTaGFwZSA9IHZvaWQgMDtcblxudmFyIF9wcm9wVHlwZXMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIHRpbWVvdXRzU2hhcGUgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gX3Byb3BUeXBlcy5kZWZhdWx0Lm9uZU9mVHlwZShbX3Byb3BUeXBlcy5kZWZhdWx0Lm51bWJlciwgX3Byb3BUeXBlcy5kZWZhdWx0LnNoYXBlKHtcbiAgZW50ZXI6IF9wcm9wVHlwZXMuZGVmYXVsdC5udW1iZXIsXG4gIGV4aXQ6IF9wcm9wVHlwZXMuZGVmYXVsdC5udW1iZXJcbn0pLmlzUmVxdWlyZWRdKSA6IG51bGw7XG5leHBvcnRzLnRpbWVvdXRzU2hhcGUgPSB0aW1lb3V0c1NoYXBlO1xudmFyIGNsYXNzTmFtZXNTaGFwZSA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyBfcHJvcFR5cGVzLmRlZmF1bHQub25lT2ZUeXBlKFtfcHJvcFR5cGVzLmRlZmF1bHQuc3RyaW5nLCBfcHJvcFR5cGVzLmRlZmF1bHQuc2hhcGUoe1xuICBlbnRlcjogX3Byb3BUeXBlcy5kZWZhdWx0LnN0cmluZyxcbiAgZXhpdDogX3Byb3BUeXBlcy5kZWZhdWx0LnN0cmluZyxcbiAgYWN0aXZlOiBfcHJvcFR5cGVzLmRlZmF1bHQuc3RyaW5nXG59KSwgX3Byb3BUeXBlcy5kZWZhdWx0LnNoYXBlKHtcbiAgZW50ZXI6IF9wcm9wVHlwZXMuZGVmYXVsdC5zdHJpbmcsXG4gIGVudGVyRG9uZTogX3Byb3BUeXBlcy5kZWZhdWx0LnN0cmluZyxcbiAgZW50ZXJBY3RpdmU6IF9wcm9wVHlwZXMuZGVmYXVsdC5zdHJpbmcsXG4gIGV4aXQ6IF9wcm9wVHlwZXMuZGVmYXVsdC5zdHJpbmcsXG4gIGV4aXREb25lOiBfcHJvcFR5cGVzLmRlZmF1bHQuc3RyaW5nLFxuICBleGl0QWN0aXZlOiBfcHJvcFR5cGVzLmRlZmF1bHQuc3RyaW5nXG59KV0pIDogbnVsbDtcbmV4cG9ydHMuY2xhc3NOYW1lc1NoYXBlID0gY2xhc3NOYW1lc1NoYXBlOyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gZXhwb3J0cy5FWElUSU5HID0gZXhwb3J0cy5FTlRFUkVEID0gZXhwb3J0cy5FTlRFUklORyA9IGV4cG9ydHMuRVhJVEVEID0gZXhwb3J0cy5VTk1PVU5URUQgPSB2b2lkIDA7XG5cbnZhciBQcm9wVHlwZXMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicHJvcC10eXBlc1wiKSk7XG5cbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbnZhciBfcmVhY3REb20gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdC1kb21cIikpO1xuXG52YXIgX3JlYWN0TGlmZWN5Y2xlc0NvbXBhdCA9IHJlcXVpcmUoXCJyZWFjdC1saWZlY3ljbGVzLWNvbXBhdFwiKTtcblxudmFyIF9Qcm9wVHlwZXMgPSByZXF1aXJlKFwiLi91dGlscy9Qcm9wVHlwZXNcIik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikgeyBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7IHJldHVybiBvYmo7IH0gZWxzZSB7IHZhciBuZXdPYmogPSB7fTsgaWYgKG9iaiAhPSBudWxsKSB7IGZvciAodmFyIGtleSBpbiBvYmopIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHsgdmFyIGRlc2MgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDoge307IGlmIChkZXNjLmdldCB8fCBkZXNjLnNldCkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpOyB9IGVsc2UgeyBuZXdPYmpba2V5XSA9IG9ialtrZXldOyB9IH0gfSB9IG5ld09iai5kZWZhdWx0ID0gb2JqOyByZXR1cm4gbmV3T2JqOyB9IH1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCkgeyBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTsgdmFyIHRhcmdldCA9IHt9OyB2YXIgc291cmNlS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7IHZhciBrZXksIGk7IGZvciAoaSA9IDA7IGkgPCBzb3VyY2VLZXlzLmxlbmd0aDsgaSsrKSB7IGtleSA9IHNvdXJjZUtleXNbaV07IGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHNMb29zZShzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MucHJvdG90eXBlKTsgc3ViQ2xhc3MucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gc3ViQ2xhc3M7IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIFVOTU9VTlRFRCA9ICd1bm1vdW50ZWQnO1xuZXhwb3J0cy5VTk1PVU5URUQgPSBVTk1PVU5URUQ7XG52YXIgRVhJVEVEID0gJ2V4aXRlZCc7XG5leHBvcnRzLkVYSVRFRCA9IEVYSVRFRDtcbnZhciBFTlRFUklORyA9ICdlbnRlcmluZyc7XG5leHBvcnRzLkVOVEVSSU5HID0gRU5URVJJTkc7XG52YXIgRU5URVJFRCA9ICdlbnRlcmVkJztcbmV4cG9ydHMuRU5URVJFRCA9IEVOVEVSRUQ7XG52YXIgRVhJVElORyA9ICdleGl0aW5nJztcbi8qKlxuICogVGhlIFRyYW5zaXRpb24gY29tcG9uZW50IGxldHMgeW91IGRlc2NyaWJlIGEgdHJhbnNpdGlvbiBmcm9tIG9uZSBjb21wb25lbnRcbiAqIHN0YXRlIHRvIGFub3RoZXIgX292ZXIgdGltZV8gd2l0aCBhIHNpbXBsZSBkZWNsYXJhdGl2ZSBBUEkuIE1vc3QgY29tbW9ubHlcbiAqIGl0J3MgdXNlZCB0byBhbmltYXRlIHRoZSBtb3VudGluZyBhbmQgdW5tb3VudGluZyBvZiBhIGNvbXBvbmVudCwgYnV0IGNhbiBhbHNvXG4gKiBiZSB1c2VkIHRvIGRlc2NyaWJlIGluLXBsYWNlIHRyYW5zaXRpb24gc3RhdGVzIGFzIHdlbGwuXG4gKlxuICogQnkgZGVmYXVsdCB0aGUgYFRyYW5zaXRpb25gIGNvbXBvbmVudCBkb2VzIG5vdCBhbHRlciB0aGUgYmVoYXZpb3Igb2YgdGhlXG4gKiBjb21wb25lbnQgaXQgcmVuZGVycywgaXQgb25seSB0cmFja3MgXCJlbnRlclwiIGFuZCBcImV4aXRcIiBzdGF0ZXMgZm9yIHRoZSBjb21wb25lbnRzLlxuICogSXQncyB1cCB0byB5b3UgdG8gZ2l2ZSBtZWFuaW5nIGFuZCBlZmZlY3QgdG8gdGhvc2Ugc3RhdGVzLiBGb3IgZXhhbXBsZSB3ZSBjYW5cbiAqIGFkZCBzdHlsZXMgdG8gYSBjb21wb25lbnQgd2hlbiBpdCBlbnRlcnMgb3IgZXhpdHM6XG4gKlxuICogYGBganN4XG4gKiBpbXBvcnQgVHJhbnNpdGlvbiBmcm9tICdyZWFjdC10cmFuc2l0aW9uLWdyb3VwL1RyYW5zaXRpb24nO1xuICpcbiAqIGNvbnN0IGR1cmF0aW9uID0gMzAwO1xuICpcbiAqIGNvbnN0IGRlZmF1bHRTdHlsZSA9IHtcbiAqICAgdHJhbnNpdGlvbjogYG9wYWNpdHkgJHtkdXJhdGlvbn1tcyBlYXNlLWluLW91dGAsXG4gKiAgIG9wYWNpdHk6IDAsXG4gKiB9XG4gKlxuICogY29uc3QgdHJhbnNpdGlvblN0eWxlcyA9IHtcbiAqICAgZW50ZXJpbmc6IHsgb3BhY2l0eTogMCB9LFxuICogICBlbnRlcmVkOiAgeyBvcGFjaXR5OiAxIH0sXG4gKiB9O1xuICpcbiAqIGNvbnN0IEZhZGUgPSAoeyBpbjogaW5Qcm9wIH0pID0+IChcbiAqICAgPFRyYW5zaXRpb24gaW49e2luUHJvcH0gdGltZW91dD17ZHVyYXRpb259PlxuICogICAgIHsoc3RhdGUpID0+IChcbiAqICAgICAgIDxkaXYgc3R5bGU9e3tcbiAqICAgICAgICAgLi4uZGVmYXVsdFN0eWxlLFxuICogICAgICAgICAuLi50cmFuc2l0aW9uU3R5bGVzW3N0YXRlXVxuICogICAgICAgfX0+XG4gKiAgICAgICAgIEknbSBhIGZhZGUgVHJhbnNpdGlvbiFcbiAqICAgICAgIDwvZGl2PlxuICogICAgICl9XG4gKiAgIDwvVHJhbnNpdGlvbj5cbiAqICk7XG4gKiBgYGBcbiAqXG4gKiBBcyBub3RlZCB0aGUgYFRyYW5zaXRpb25gIGNvbXBvbmVudCBkb2Vzbid0IF9kb18gYW55dGhpbmcgYnkgaXRzZWxmIHRvIGl0cyBjaGlsZCBjb21wb25lbnQuXG4gKiBXaGF0IGl0IGRvZXMgZG8gaXMgdHJhY2sgdHJhbnNpdGlvbiBzdGF0ZXMgb3ZlciB0aW1lIHNvIHlvdSBjYW4gdXBkYXRlIHRoZVxuICogY29tcG9uZW50IChzdWNoIGFzIGJ5IGFkZGluZyBzdHlsZXMgb3IgY2xhc3Nlcykgd2hlbiBpdCBjaGFuZ2VzIHN0YXRlcy5cbiAqXG4gKiBUaGVyZSBhcmUgNCBtYWluIHN0YXRlcyBhIFRyYW5zaXRpb24gY2FuIGJlIGluOlxuICogIC0gYCdlbnRlcmluZydgXG4gKiAgLSBgJ2VudGVyZWQnYFxuICogIC0gYCdleGl0aW5nJ2BcbiAqICAtIGAnZXhpdGVkJ2BcbiAqXG4gKiBUcmFuc2l0aW9uIHN0YXRlIGlzIHRvZ2dsZWQgdmlhIHRoZSBgaW5gIHByb3AuIFdoZW4gYHRydWVgIHRoZSBjb21wb25lbnQgYmVnaW5zIHRoZVxuICogXCJFbnRlclwiIHN0YWdlLiBEdXJpbmcgdGhpcyBzdGFnZSwgdGhlIGNvbXBvbmVudCB3aWxsIHNoaWZ0IGZyb20gaXRzIGN1cnJlbnQgdHJhbnNpdGlvbiBzdGF0ZSxcbiAqIHRvIGAnZW50ZXJpbmcnYCBmb3IgdGhlIGR1cmF0aW9uIG9mIHRoZSB0cmFuc2l0aW9uIGFuZCB0aGVuIHRvIHRoZSBgJ2VudGVyZWQnYCBzdGFnZSBvbmNlXG4gKiBpdCdzIGNvbXBsZXRlLiBMZXQncyB0YWtlIHRoZSBmb2xsb3dpbmcgZXhhbXBsZTpcbiAqXG4gKiBgYGBqc3hcbiAqIHN0YXRlID0geyBpbjogZmFsc2UgfTtcbiAqXG4gKiB0b2dnbGVFbnRlclN0YXRlID0gKCkgPT4ge1xuICogICB0aGlzLnNldFN0YXRlKHsgaW46IHRydWUgfSk7XG4gKiB9XG4gKlxuICogcmVuZGVyKCkge1xuICogICByZXR1cm4gKFxuICogICAgIDxkaXY+XG4gKiAgICAgICA8VHJhbnNpdGlvbiBpbj17dGhpcy5zdGF0ZS5pbn0gdGltZW91dD17NTAwfSAvPlxuICogICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLnRvZ2dsZUVudGVyU3RhdGV9PkNsaWNrIHRvIEVudGVyPC9idXR0b24+XG4gKiAgICAgPC9kaXY+XG4gKiAgICk7XG4gKiB9XG4gKiBgYGBcbiAqXG4gKiBXaGVuIHRoZSBidXR0b24gaXMgY2xpY2tlZCB0aGUgY29tcG9uZW50IHdpbGwgc2hpZnQgdG8gdGhlIGAnZW50ZXJpbmcnYCBzdGF0ZSBhbmRcbiAqIHN0YXkgdGhlcmUgZm9yIDUwMG1zICh0aGUgdmFsdWUgb2YgYHRpbWVvdXRgKSBiZWZvcmUgaXQgZmluYWxseSBzd2l0Y2hlcyB0byBgJ2VudGVyZWQnYC5cbiAqXG4gKiBXaGVuIGBpbmAgaXMgYGZhbHNlYCB0aGUgc2FtZSB0aGluZyBoYXBwZW5zIGV4Y2VwdCB0aGUgc3RhdGUgbW92ZXMgZnJvbSBgJ2V4aXRpbmcnYCB0byBgJ2V4aXRlZCdgLlxuICpcbiAqICMjIFRpbWluZ1xuICpcbiAqIFRpbWluZyBpcyBvZnRlbiB0aGUgdHJpY2tpZXN0IHBhcnQgb2YgYW5pbWF0aW9uLCBtaXN0YWtlcyBjYW4gcmVzdWx0IGluIHNsaWdodCBkZWxheXNcbiAqIHRoYXQgYXJlIGhhcmQgdG8gcGluIGRvd24uIEEgY29tbW9uIGV4YW1wbGUgaXMgd2hlbiB5b3Ugd2FudCB0byBhZGQgYW4gZXhpdCB0cmFuc2l0aW9uLFxuICogeW91IHNob3VsZCBzZXQgdGhlIGRlc2lyZWQgZmluYWwgc3R5bGVzIHdoZW4gdGhlIHN0YXRlIGlzIGAnZXhpdGluZydgLiBUaGF0J3Mgd2hlbiB0aGVcbiAqIHRyYW5zaXRpb24gdG8gdGhvc2Ugc3R5bGVzIHdpbGwgc3RhcnQgYW5kLCBpZiB5b3UgbWF0Y2hlZCB0aGUgYHRpbWVvdXRgIHByb3Agd2l0aCB0aGVcbiAqIENTUyBUcmFuc2l0aW9uIGR1cmF0aW9uLCBpdCB3aWxsIGVuZCBleGFjdGx5IHdoZW4gdGhlIHN0YXRlIGNoYW5nZXMgdG8gYCdleGl0ZWQnYC5cbiAqXG4gKiA+ICoqTm90ZSoqOiBGb3Igc2ltcGxlciB0cmFuc2l0aW9ucyB0aGUgYFRyYW5zaXRpb25gIGNvbXBvbmVudCBtaWdodCBiZSBlbm91Z2gsIGJ1dFxuICogPiB0YWtlIGludG8gYWNjb3VudCB0aGF0IGl0J3MgcGxhdGZvcm0tYWdub3N0aWMsIHdoaWxlIHRoZSBgQ1NTVHJhbnNpdGlvbmAgY29tcG9uZW50XG4gKiA+IFtmb3JjZXMgcmVmbG93c10oaHR0cHM6Ly9naXRodWIuY29tL3JlYWN0anMvcmVhY3QtdHJhbnNpdGlvbi1ncm91cC9ibG9iLzUwMDczMDNlNzI5YTc0YmU2NmEyMWMzZTIyMDVlNDkxNjgyMTUyNGIvc3JjL0NTU1RyYW5zaXRpb24uanMjTDIwOC1MMjE1KVxuICogPiBpbiBvcmRlciB0byBtYWtlIG1vcmUgY29tcGxleCB0cmFuc2l0aW9ucyBtb3JlIHByZWRpY3RhYmxlLiBGb3IgZXhhbXBsZSwgZXZlbiB0aG91Z2hcbiAqID4gY2xhc3NlcyBgZXhhbXBsZS1lbnRlcmAgYW5kIGBleGFtcGxlLWVudGVyLWFjdGl2ZWAgYXJlIGFwcGxpZWQgaW1tZWRpYXRlbHkgb25lIGFmdGVyXG4gKiA+IGFub3RoZXIsIHlvdSBjYW4gc3RpbGwgdHJhbnNpdGlvbiBmcm9tIG9uZSB0byB0aGUgb3RoZXIgYmVjYXVzZSBvZiB0aGUgZm9yY2VkIHJlZmxvd1xuICogPiAocmVhZCBbdGhpcyBpc3N1ZV0oaHR0cHM6Ly9naXRodWIuY29tL3JlYWN0anMvcmVhY3QtdHJhbnNpdGlvbi1ncm91cC9pc3N1ZXMvMTU5I2lzc3VlY29tbWVudC0zMjI3NjExNzEpXG4gKiA+IGZvciBtb3JlIGluZm8pLiBUYWtlIHRoaXMgaW50byBhY2NvdW50IHdoZW4gY2hvb3NpbmcgYmV0d2VlbiBgVHJhbnNpdGlvbmAgYW5kXG4gKiA+IGBDU1NUcmFuc2l0aW9uYC5cbiAqL1xuXG5leHBvcnRzLkVYSVRJTkcgPSBFWElUSU5HO1xuXG52YXIgVHJhbnNpdGlvbiA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHNMb29zZShUcmFuc2l0aW9uLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBUcmFuc2l0aW9uKHByb3BzLCBjb250ZXh0KSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX3RoaXMgPSBfUmVhY3QkQ29tcG9uZW50LmNhbGwodGhpcywgcHJvcHMsIGNvbnRleHQpIHx8IHRoaXM7XG4gICAgdmFyIHBhcmVudEdyb3VwID0gY29udGV4dC50cmFuc2l0aW9uR3JvdXA7IC8vIEluIHRoZSBjb250ZXh0IG9mIGEgVHJhbnNpdGlvbkdyb3VwIGFsbCBlbnRlcnMgYXJlIHJlYWxseSBhcHBlYXJzXG5cbiAgICB2YXIgYXBwZWFyID0gcGFyZW50R3JvdXAgJiYgIXBhcmVudEdyb3VwLmlzTW91bnRpbmcgPyBwcm9wcy5lbnRlciA6IHByb3BzLmFwcGVhcjtcbiAgICB2YXIgaW5pdGlhbFN0YXR1cztcbiAgICBfdGhpcy5hcHBlYXJTdGF0dXMgPSBudWxsO1xuXG4gICAgaWYgKHByb3BzLmluKSB7XG4gICAgICBpZiAoYXBwZWFyKSB7XG4gICAgICAgIGluaXRpYWxTdGF0dXMgPSBFWElURUQ7XG4gICAgICAgIF90aGlzLmFwcGVhclN0YXR1cyA9IEVOVEVSSU5HO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaW5pdGlhbFN0YXR1cyA9IEVOVEVSRUQ7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChwcm9wcy51bm1vdW50T25FeGl0IHx8IHByb3BzLm1vdW50T25FbnRlcikge1xuICAgICAgICBpbml0aWFsU3RhdHVzID0gVU5NT1VOVEVEO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaW5pdGlhbFN0YXR1cyA9IEVYSVRFRDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHN0YXR1czogaW5pdGlhbFN0YXR1c1xuICAgIH07XG4gICAgX3RoaXMubmV4dENhbGxiYWNrID0gbnVsbDtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gVHJhbnNpdGlvbi5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLmdldENoaWxkQ29udGV4dCA9IGZ1bmN0aW9uIGdldENoaWxkQ29udGV4dCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdHJhbnNpdGlvbkdyb3VwOiBudWxsIC8vIGFsbG93cyBmb3IgbmVzdGVkIFRyYW5zaXRpb25zXG5cbiAgICB9O1xuICB9O1xuXG4gIFRyYW5zaXRpb24uZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzID0gZnVuY3Rpb24gZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzKF9yZWYsIHByZXZTdGF0ZSkge1xuICAgIHZhciBuZXh0SW4gPSBfcmVmLmluO1xuXG4gICAgaWYgKG5leHRJbiAmJiBwcmV2U3RhdGUuc3RhdHVzID09PSBVTk1PVU5URUQpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN0YXR1czogRVhJVEVEXG4gICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9OyAvLyBnZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZShwcmV2UHJvcHMpIHtcbiAgLy8gICBsZXQgbmV4dFN0YXR1cyA9IG51bGxcbiAgLy8gICBpZiAocHJldlByb3BzICE9PSB0aGlzLnByb3BzKSB7XG4gIC8vICAgICBjb25zdCB7IHN0YXR1cyB9ID0gdGhpcy5zdGF0ZVxuICAvLyAgICAgaWYgKHRoaXMucHJvcHMuaW4pIHtcbiAgLy8gICAgICAgaWYgKHN0YXR1cyAhPT0gRU5URVJJTkcgJiYgc3RhdHVzICE9PSBFTlRFUkVEKSB7XG4gIC8vICAgICAgICAgbmV4dFN0YXR1cyA9IEVOVEVSSU5HXG4gIC8vICAgICAgIH1cbiAgLy8gICAgIH0gZWxzZSB7XG4gIC8vICAgICAgIGlmIChzdGF0dXMgPT09IEVOVEVSSU5HIHx8IHN0YXR1cyA9PT0gRU5URVJFRCkge1xuICAvLyAgICAgICAgIG5leHRTdGF0dXMgPSBFWElUSU5HXG4gIC8vICAgICAgIH1cbiAgLy8gICAgIH1cbiAgLy8gICB9XG4gIC8vICAgcmV0dXJuIHsgbmV4dFN0YXR1cyB9XG4gIC8vIH1cblxuXG4gIF9wcm90by5jb21wb25lbnREaWRNb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMudXBkYXRlU3RhdHVzKHRydWUsIHRoaXMuYXBwZWFyU3RhdHVzKTtcbiAgfTtcblxuICBfcHJvdG8uY29tcG9uZW50RGlkVXBkYXRlID0gZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcykge1xuICAgIHZhciBuZXh0U3RhdHVzID0gbnVsbDtcblxuICAgIGlmIChwcmV2UHJvcHMgIT09IHRoaXMucHJvcHMpIHtcbiAgICAgIHZhciBzdGF0dXMgPSB0aGlzLnN0YXRlLnN0YXR1cztcblxuICAgICAgaWYgKHRoaXMucHJvcHMuaW4pIHtcbiAgICAgICAgaWYgKHN0YXR1cyAhPT0gRU5URVJJTkcgJiYgc3RhdHVzICE9PSBFTlRFUkVEKSB7XG4gICAgICAgICAgbmV4dFN0YXR1cyA9IEVOVEVSSU5HO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoc3RhdHVzID09PSBFTlRFUklORyB8fCBzdGF0dXMgPT09IEVOVEVSRUQpIHtcbiAgICAgICAgICBuZXh0U3RhdHVzID0gRVhJVElORztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMudXBkYXRlU3RhdHVzKGZhbHNlLCBuZXh0U3RhdHVzKTtcbiAgfTtcblxuICBfcHJvdG8uY29tcG9uZW50V2lsbFVubW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLmNhbmNlbE5leHRDYWxsYmFjaygpO1xuICB9O1xuXG4gIF9wcm90by5nZXRUaW1lb3V0cyA9IGZ1bmN0aW9uIGdldFRpbWVvdXRzKCkge1xuICAgIHZhciB0aW1lb3V0ID0gdGhpcy5wcm9wcy50aW1lb3V0O1xuICAgIHZhciBleGl0LCBlbnRlciwgYXBwZWFyO1xuICAgIGV4aXQgPSBlbnRlciA9IGFwcGVhciA9IHRpbWVvdXQ7XG5cbiAgICBpZiAodGltZW91dCAhPSBudWxsICYmIHR5cGVvZiB0aW1lb3V0ICE9PSAnbnVtYmVyJykge1xuICAgICAgZXhpdCA9IHRpbWVvdXQuZXhpdDtcbiAgICAgIGVudGVyID0gdGltZW91dC5lbnRlcjtcbiAgICAgIGFwcGVhciA9IHRpbWVvdXQuYXBwZWFyO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBleGl0OiBleGl0LFxuICAgICAgZW50ZXI6IGVudGVyLFxuICAgICAgYXBwZWFyOiBhcHBlYXJcbiAgICB9O1xuICB9O1xuXG4gIF9wcm90by51cGRhdGVTdGF0dXMgPSBmdW5jdGlvbiB1cGRhdGVTdGF0dXMobW91bnRpbmcsIG5leHRTdGF0dXMpIHtcbiAgICBpZiAobW91bnRpbmcgPT09IHZvaWQgMCkge1xuICAgICAgbW91bnRpbmcgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAobmV4dFN0YXR1cyAhPT0gbnVsbCkge1xuICAgICAgLy8gbmV4dFN0YXR1cyB3aWxsIGFsd2F5cyBiZSBFTlRFUklORyBvciBFWElUSU5HLlxuICAgICAgdGhpcy5jYW5jZWxOZXh0Q2FsbGJhY2soKTtcblxuICAgICAgdmFyIG5vZGUgPSBfcmVhY3REb20uZGVmYXVsdC5maW5kRE9NTm9kZSh0aGlzKTtcblxuICAgICAgaWYgKG5leHRTdGF0dXMgPT09IEVOVEVSSU5HKSB7XG4gICAgICAgIHRoaXMucGVyZm9ybUVudGVyKG5vZGUsIG1vdW50aW5nKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucGVyZm9ybUV4aXQobm9kZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0aGlzLnByb3BzLnVubW91bnRPbkV4aXQgJiYgdGhpcy5zdGF0ZS5zdGF0dXMgPT09IEVYSVRFRCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHN0YXR1czogVU5NT1VOVEVEXG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLnBlcmZvcm1FbnRlciA9IGZ1bmN0aW9uIHBlcmZvcm1FbnRlcihub2RlLCBtb3VudGluZykge1xuICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgdmFyIGVudGVyID0gdGhpcy5wcm9wcy5lbnRlcjtcbiAgICB2YXIgYXBwZWFyaW5nID0gdGhpcy5jb250ZXh0LnRyYW5zaXRpb25Hcm91cCA/IHRoaXMuY29udGV4dC50cmFuc2l0aW9uR3JvdXAuaXNNb3VudGluZyA6IG1vdW50aW5nO1xuICAgIHZhciB0aW1lb3V0cyA9IHRoaXMuZ2V0VGltZW91dHMoKTsgLy8gbm8gZW50ZXIgYW5pbWF0aW9uIHNraXAgcmlnaHQgdG8gRU5URVJFRFxuICAgIC8vIGlmIHdlIGFyZSBtb3VudGluZyBhbmQgcnVubmluZyB0aGlzIGl0IG1lYW5zIGFwcGVhciBfbXVzdF8gYmUgc2V0XG5cbiAgICBpZiAoIW1vdW50aW5nICYmICFlbnRlcikge1xuICAgICAgdGhpcy5zYWZlU2V0U3RhdGUoe1xuICAgICAgICBzdGF0dXM6IEVOVEVSRURcbiAgICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgX3RoaXMyLnByb3BzLm9uRW50ZXJlZChub2RlKTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMucHJvcHMub25FbnRlcihub2RlLCBhcHBlYXJpbmcpO1xuICAgIHRoaXMuc2FmZVNldFN0YXRlKHtcbiAgICAgIHN0YXR1czogRU5URVJJTkdcbiAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICBfdGhpczIucHJvcHMub25FbnRlcmluZyhub2RlLCBhcHBlYXJpbmcpOyAvLyBGSVhNRTogYXBwZWFyIHRpbWVvdXQ/XG5cblxuICAgICAgX3RoaXMyLm9uVHJhbnNpdGlvbkVuZChub2RlLCB0aW1lb3V0cy5lbnRlciwgZnVuY3Rpb24gKCkge1xuICAgICAgICBfdGhpczIuc2FmZVNldFN0YXRlKHtcbiAgICAgICAgICBzdGF0dXM6IEVOVEVSRURcbiAgICAgICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIF90aGlzMi5wcm9wcy5vbkVudGVyZWQobm9kZSwgYXBwZWFyaW5nKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICBfcHJvdG8ucGVyZm9ybUV4aXQgPSBmdW5jdGlvbiBwZXJmb3JtRXhpdChub2RlKSB7XG4gICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICB2YXIgZXhpdCA9IHRoaXMucHJvcHMuZXhpdDtcbiAgICB2YXIgdGltZW91dHMgPSB0aGlzLmdldFRpbWVvdXRzKCk7IC8vIG5vIGV4aXQgYW5pbWF0aW9uIHNraXAgcmlnaHQgdG8gRVhJVEVEXG5cbiAgICBpZiAoIWV4aXQpIHtcbiAgICAgIHRoaXMuc2FmZVNldFN0YXRlKHtcbiAgICAgICAgc3RhdHVzOiBFWElURURcbiAgICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgX3RoaXMzLnByb3BzLm9uRXhpdGVkKG5vZGUpO1xuICAgICAgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5wcm9wcy5vbkV4aXQobm9kZSk7XG4gICAgdGhpcy5zYWZlU2V0U3RhdGUoe1xuICAgICAgc3RhdHVzOiBFWElUSU5HXG4gICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgX3RoaXMzLnByb3BzLm9uRXhpdGluZyhub2RlKTtcblxuICAgICAgX3RoaXMzLm9uVHJhbnNpdGlvbkVuZChub2RlLCB0aW1lb3V0cy5leGl0LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIF90aGlzMy5zYWZlU2V0U3RhdGUoe1xuICAgICAgICAgIHN0YXR1czogRVhJVEVEXG4gICAgICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBfdGhpczMucHJvcHMub25FeGl0ZWQobm9kZSk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgX3Byb3RvLmNhbmNlbE5leHRDYWxsYmFjayA9IGZ1bmN0aW9uIGNhbmNlbE5leHRDYWxsYmFjaygpIHtcbiAgICBpZiAodGhpcy5uZXh0Q2FsbGJhY2sgIT09IG51bGwpIHtcbiAgICAgIHRoaXMubmV4dENhbGxiYWNrLmNhbmNlbCgpO1xuICAgICAgdGhpcy5uZXh0Q2FsbGJhY2sgPSBudWxsO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8uc2FmZVNldFN0YXRlID0gZnVuY3Rpb24gc2FmZVNldFN0YXRlKG5leHRTdGF0ZSwgY2FsbGJhY2spIHtcbiAgICAvLyBUaGlzIHNob3VsZG4ndCBiZSBuZWNlc3NhcnksIGJ1dCB0aGVyZSBhcmUgd2VpcmQgcmFjZSBjb25kaXRpb25zIHdpdGhcbiAgICAvLyBzZXRTdGF0ZSBjYWxsYmFja3MgYW5kIHVubW91bnRpbmcgaW4gdGVzdGluZywgc28gYWx3YXlzIG1ha2Ugc3VyZSB0aGF0XG4gICAgLy8gd2UgY2FuIGNhbmNlbCBhbnkgcGVuZGluZyBzZXRTdGF0ZSBjYWxsYmFja3MgYWZ0ZXIgd2UgdW5tb3VudC5cbiAgICBjYWxsYmFjayA9IHRoaXMuc2V0TmV4dENhbGxiYWNrKGNhbGxiYWNrKTtcbiAgICB0aGlzLnNldFN0YXRlKG5leHRTdGF0ZSwgY2FsbGJhY2spO1xuICB9O1xuXG4gIF9wcm90by5zZXROZXh0Q2FsbGJhY2sgPSBmdW5jdGlvbiBzZXROZXh0Q2FsbGJhY2soY2FsbGJhY2spIHtcbiAgICB2YXIgX3RoaXM0ID0gdGhpcztcblxuICAgIHZhciBhY3RpdmUgPSB0cnVlO1xuXG4gICAgdGhpcy5uZXh0Q2FsbGJhY2sgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGlmIChhY3RpdmUpIHtcbiAgICAgICAgYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIF90aGlzNC5uZXh0Q2FsbGJhY2sgPSBudWxsO1xuICAgICAgICBjYWxsYmFjayhldmVudCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHRoaXMubmV4dENhbGxiYWNrLmNhbmNlbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGFjdGl2ZSA9IGZhbHNlO1xuICAgIH07XG5cbiAgICByZXR1cm4gdGhpcy5uZXh0Q2FsbGJhY2s7XG4gIH07XG5cbiAgX3Byb3RvLm9uVHJhbnNpdGlvbkVuZCA9IGZ1bmN0aW9uIG9uVHJhbnNpdGlvbkVuZChub2RlLCB0aW1lb3V0LCBoYW5kbGVyKSB7XG4gICAgdGhpcy5zZXROZXh0Q2FsbGJhY2soaGFuZGxlcik7XG5cbiAgICBpZiAobm9kZSkge1xuICAgICAgaWYgKHRoaXMucHJvcHMuYWRkRW5kTGlzdGVuZXIpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5hZGRFbmRMaXN0ZW5lcihub2RlLCB0aGlzLm5leHRDYWxsYmFjayk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aW1lb3V0ICE9IG51bGwpIHtcbiAgICAgICAgc2V0VGltZW91dCh0aGlzLm5leHRDYWxsYmFjaywgdGltZW91dCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldFRpbWVvdXQodGhpcy5uZXh0Q2FsbGJhY2ssIDApO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8ucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBzdGF0dXMgPSB0aGlzLnN0YXRlLnN0YXR1cztcblxuICAgIGlmIChzdGF0dXMgPT09IFVOTU9VTlRFRCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgdmFyIF90aGlzJHByb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgY2hpbGRyZW4gPSBfdGhpcyRwcm9wcy5jaGlsZHJlbixcbiAgICAgICAgY2hpbGRQcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKF90aGlzJHByb3BzLCBbXCJjaGlsZHJlblwiXSk7IC8vIGZpbHRlciBwcm9wcyBmb3IgVHJhbnN0aXRpb25cblxuXG4gICAgZGVsZXRlIGNoaWxkUHJvcHMuaW47XG4gICAgZGVsZXRlIGNoaWxkUHJvcHMubW91bnRPbkVudGVyO1xuICAgIGRlbGV0ZSBjaGlsZFByb3BzLnVubW91bnRPbkV4aXQ7XG4gICAgZGVsZXRlIGNoaWxkUHJvcHMuYXBwZWFyO1xuICAgIGRlbGV0ZSBjaGlsZFByb3BzLmVudGVyO1xuICAgIGRlbGV0ZSBjaGlsZFByb3BzLmV4aXQ7XG4gICAgZGVsZXRlIGNoaWxkUHJvcHMudGltZW91dDtcbiAgICBkZWxldGUgY2hpbGRQcm9wcy5hZGRFbmRMaXN0ZW5lcjtcbiAgICBkZWxldGUgY2hpbGRQcm9wcy5vbkVudGVyO1xuICAgIGRlbGV0ZSBjaGlsZFByb3BzLm9uRW50ZXJpbmc7XG4gICAgZGVsZXRlIGNoaWxkUHJvcHMub25FbnRlcmVkO1xuICAgIGRlbGV0ZSBjaGlsZFByb3BzLm9uRXhpdDtcbiAgICBkZWxldGUgY2hpbGRQcm9wcy5vbkV4aXRpbmc7XG4gICAgZGVsZXRlIGNoaWxkUHJvcHMub25FeGl0ZWQ7XG5cbiAgICBpZiAodHlwZW9mIGNoaWxkcmVuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gY2hpbGRyZW4oc3RhdHVzLCBjaGlsZFByb3BzKTtcbiAgICB9XG5cbiAgICB2YXIgY2hpbGQgPSBfcmVhY3QuZGVmYXVsdC5DaGlsZHJlbi5vbmx5KGNoaWxkcmVuKTtcblxuICAgIHJldHVybiBfcmVhY3QuZGVmYXVsdC5jbG9uZUVsZW1lbnQoY2hpbGQsIGNoaWxkUHJvcHMpO1xuICB9O1xuXG4gIHJldHVybiBUcmFuc2l0aW9uO1xufShfcmVhY3QuZGVmYXVsdC5Db21wb25lbnQpO1xuXG5UcmFuc2l0aW9uLmNvbnRleHRUeXBlcyA9IHtcbiAgdHJhbnNpdGlvbkdyb3VwOiBQcm9wVHlwZXMub2JqZWN0XG59O1xuVHJhbnNpdGlvbi5jaGlsZENvbnRleHRUeXBlcyA9IHtcbiAgdHJhbnNpdGlvbkdyb3VwOiBmdW5jdGlvbiB0cmFuc2l0aW9uR3JvdXAoKSB7fVxufTtcblRyYW5zaXRpb24ucHJvcFR5cGVzID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8ge1xuICAvKipcbiAgICogQSBgZnVuY3Rpb25gIGNoaWxkIGNhbiBiZSB1c2VkIGluc3RlYWQgb2YgYSBSZWFjdCBlbGVtZW50LlxuICAgKiBUaGlzIGZ1bmN0aW9uIGlzIGNhbGxlZCB3aXRoIHRoZSBjdXJyZW50IHRyYW5zaXRpb24gc3RhdHVzXG4gICAqICgnZW50ZXJpbmcnLCAnZW50ZXJlZCcsICdleGl0aW5nJywgJ2V4aXRlZCcsICd1bm1vdW50ZWQnKSwgd2hpY2ggY2FuIGJlIHVzZWRcbiAgICogdG8gYXBwbHkgY29udGV4dCBzcGVjaWZpYyBwcm9wcyB0byBhIGNvbXBvbmVudC5cbiAgICpcbiAgICogYGBganN4XG4gICAqIDxUcmFuc2l0aW9uIHRpbWVvdXQ9ezE1MH0+XG4gICAqICAgeyhzdGF0dXMpID0+IChcbiAgICogICAgIDxNeUNvbXBvbmVudCBjbGFzc05hbWU9e2BmYWRlIGZhZGUtJHtzdGF0dXN9YH0gLz5cbiAgICogICApfVxuICAgKiA8L1RyYW5zaXRpb24+XG4gICAqIGBgYFxuICAgKi9cbiAgY2hpbGRyZW46IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsIFByb3BUeXBlcy5lbGVtZW50LmlzUmVxdWlyZWRdKS5pc1JlcXVpcmVkLFxuXG4gIC8qKlxuICAgKiBTaG93IHRoZSBjb21wb25lbnQ7IHRyaWdnZXJzIHRoZSBlbnRlciBvciBleGl0IHN0YXRlc1xuICAgKi9cbiAgaW46IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBCeSBkZWZhdWx0IHRoZSBjaGlsZCBjb21wb25lbnQgaXMgbW91bnRlZCBpbW1lZGlhdGVseSBhbG9uZyB3aXRoXG4gICAqIHRoZSBwYXJlbnQgYFRyYW5zaXRpb25gIGNvbXBvbmVudC4gSWYgeW91IHdhbnQgdG8gXCJsYXp5IG1vdW50XCIgdGhlIGNvbXBvbmVudCBvbiB0aGVcbiAgICogZmlyc3QgYGluPXt0cnVlfWAgeW91IGNhbiBzZXQgYG1vdW50T25FbnRlcmAuIEFmdGVyIHRoZSBmaXJzdCBlbnRlciB0cmFuc2l0aW9uIHRoZSBjb21wb25lbnQgd2lsbCBzdGF5XG4gICAqIG1vdW50ZWQsIGV2ZW4gb24gXCJleGl0ZWRcIiwgdW5sZXNzIHlvdSBhbHNvIHNwZWNpZnkgYHVubW91bnRPbkV4aXRgLlxuICAgKi9cbiAgbW91bnRPbkVudGVyOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogQnkgZGVmYXVsdCB0aGUgY2hpbGQgY29tcG9uZW50IHN0YXlzIG1vdW50ZWQgYWZ0ZXIgaXQgcmVhY2hlcyB0aGUgYCdleGl0ZWQnYCBzdGF0ZS5cbiAgICogU2V0IGB1bm1vdW50T25FeGl0YCBpZiB5b3UnZCBwcmVmZXIgdG8gdW5tb3VudCB0aGUgY29tcG9uZW50IGFmdGVyIGl0IGZpbmlzaGVzIGV4aXRpbmcuXG4gICAqL1xuICB1bm1vdW50T25FeGl0OiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogTm9ybWFsbHkgYSBjb21wb25lbnQgaXMgbm90IHRyYW5zaXRpb25lZCBpZiBpdCBpcyBzaG93biB3aGVuIHRoZSBgPFRyYW5zaXRpb24+YCBjb21wb25lbnQgbW91bnRzLlxuICAgKiBJZiB5b3Ugd2FudCB0byB0cmFuc2l0aW9uIG9uIHRoZSBmaXJzdCBtb3VudCBzZXQgYGFwcGVhcmAgdG8gYHRydWVgLCBhbmQgdGhlXG4gICAqIGNvbXBvbmVudCB3aWxsIHRyYW5zaXRpb24gaW4gYXMgc29vbiBhcyB0aGUgYDxUcmFuc2l0aW9uPmAgbW91bnRzLlxuICAgKlxuICAgKiA+IE5vdGU6IHRoZXJlIGFyZSBubyBzcGVjaWZpYyBcImFwcGVhclwiIHN0YXRlcy4gYGFwcGVhcmAgb25seSBhZGRzIGFuIGFkZGl0aW9uYWwgYGVudGVyYCB0cmFuc2l0aW9uLlxuICAgKi9cbiAgYXBwZWFyOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogRW5hYmxlIG9yIGRpc2FibGUgZW50ZXIgdHJhbnNpdGlvbnMuXG4gICAqL1xuICBlbnRlcjogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIEVuYWJsZSBvciBkaXNhYmxlIGV4aXQgdHJhbnNpdGlvbnMuXG4gICAqL1xuICBleGl0OiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogVGhlIGR1cmF0aW9uIG9mIHRoZSB0cmFuc2l0aW9uLCBpbiBtaWxsaXNlY29uZHMuXG4gICAqIFJlcXVpcmVkIHVubGVzcyBgYWRkRW5kTGlzdGVuZXJgIGlzIHByb3ZpZGVkXG4gICAqXG4gICAqIFlvdSBtYXkgc3BlY2lmeSBhIHNpbmdsZSB0aW1lb3V0IGZvciBhbGwgdHJhbnNpdGlvbnMgbGlrZTogYHRpbWVvdXQ9ezUwMH1gLFxuICAgKiBvciBpbmRpdmlkdWFsbHkgbGlrZTpcbiAgICpcbiAgICogYGBganN4XG4gICAqIHRpbWVvdXQ9e3tcbiAgICogIGVudGVyOiAzMDAsXG4gICAqICBleGl0OiA1MDAsXG4gICAqIH19XG4gICAqIGBgYFxuICAgKlxuICAgKiBAdHlwZSB7bnVtYmVyIHwgeyBlbnRlcj86IG51bWJlciwgZXhpdD86IG51bWJlciB9fVxuICAgKi9cbiAgdGltZW91dDogZnVuY3Rpb24gdGltZW91dChwcm9wcykge1xuICAgIHZhciBwdCA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IF9Qcm9wVHlwZXMudGltZW91dHNTaGFwZSA6IHt9OztcbiAgICBpZiAoIXByb3BzLmFkZEVuZExpc3RlbmVyKSBwdCA9IHB0LmlzUmVxdWlyZWQ7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICByZXR1cm4gcHQuYXBwbHkodm9pZCAwLCBbcHJvcHNdLmNvbmNhdChhcmdzKSk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEFkZCBhIGN1c3RvbSB0cmFuc2l0aW9uIGVuZCB0cmlnZ2VyLiBDYWxsZWQgd2l0aCB0aGUgdHJhbnNpdGlvbmluZ1xuICAgKiBET00gbm9kZSBhbmQgYSBgZG9uZWAgY2FsbGJhY2suIEFsbG93cyBmb3IgbW9yZSBmaW5lIGdyYWluZWQgdHJhbnNpdGlvbiBlbmRcbiAgICogbG9naWMuICoqTm90ZToqKiBUaW1lb3V0cyBhcmUgc3RpbGwgdXNlZCBhcyBhIGZhbGxiYWNrIGlmIHByb3ZpZGVkLlxuICAgKlxuICAgKiBgYGBqc3hcbiAgICogYWRkRW5kTGlzdGVuZXI9eyhub2RlLCBkb25lKSA9PiB7XG4gICAqICAgLy8gdXNlIHRoZSBjc3MgdHJhbnNpdGlvbmVuZCBldmVudCB0byBtYXJrIHRoZSBmaW5pc2ggb2YgYSB0cmFuc2l0aW9uXG4gICAqICAgbm9kZS5hZGRFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgZG9uZSwgZmFsc2UpO1xuICAgKiB9fVxuICAgKiBgYGBcbiAgICovXG4gIGFkZEVuZExpc3RlbmVyOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQ2FsbGJhY2sgZmlyZWQgYmVmb3JlIHRoZSBcImVudGVyaW5nXCIgc3RhdHVzIGlzIGFwcGxpZWQuIEFuIGV4dHJhIHBhcmFtZXRlclxuICAgKiBgaXNBcHBlYXJpbmdgIGlzIHN1cHBsaWVkIHRvIGluZGljYXRlIGlmIHRoZSBlbnRlciBzdGFnZSBpcyBvY2N1cnJpbmcgb24gdGhlIGluaXRpYWwgbW91bnRcbiAgICpcbiAgICogQHR5cGUgRnVuY3Rpb24obm9kZTogSHRtbEVsZW1lbnQsIGlzQXBwZWFyaW5nOiBib29sKSAtPiB2b2lkXG4gICAqL1xuICBvbkVudGVyOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQ2FsbGJhY2sgZmlyZWQgYWZ0ZXIgdGhlIFwiZW50ZXJpbmdcIiBzdGF0dXMgaXMgYXBwbGllZC4gQW4gZXh0cmEgcGFyYW1ldGVyXG4gICAqIGBpc0FwcGVhcmluZ2AgaXMgc3VwcGxpZWQgdG8gaW5kaWNhdGUgaWYgdGhlIGVudGVyIHN0YWdlIGlzIG9jY3VycmluZyBvbiB0aGUgaW5pdGlhbCBtb3VudFxuICAgKlxuICAgKiBAdHlwZSBGdW5jdGlvbihub2RlOiBIdG1sRWxlbWVudCwgaXNBcHBlYXJpbmc6IGJvb2wpXG4gICAqL1xuICBvbkVudGVyaW5nOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQ2FsbGJhY2sgZmlyZWQgYWZ0ZXIgdGhlIFwiZW50ZXJlZFwiIHN0YXR1cyBpcyBhcHBsaWVkLiBBbiBleHRyYSBwYXJhbWV0ZXJcbiAgICogYGlzQXBwZWFyaW5nYCBpcyBzdXBwbGllZCB0byBpbmRpY2F0ZSBpZiB0aGUgZW50ZXIgc3RhZ2UgaXMgb2NjdXJyaW5nIG9uIHRoZSBpbml0aWFsIG1vdW50XG4gICAqXG4gICAqIEB0eXBlIEZ1bmN0aW9uKG5vZGU6IEh0bWxFbGVtZW50LCBpc0FwcGVhcmluZzogYm9vbCkgLT4gdm9pZFxuICAgKi9cbiAgb25FbnRlcmVkOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQ2FsbGJhY2sgZmlyZWQgYmVmb3JlIHRoZSBcImV4aXRpbmdcIiBzdGF0dXMgaXMgYXBwbGllZC5cbiAgICpcbiAgICogQHR5cGUgRnVuY3Rpb24obm9kZTogSHRtbEVsZW1lbnQpIC0+IHZvaWRcbiAgICovXG4gIG9uRXhpdDogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIGZpcmVkIGFmdGVyIHRoZSBcImV4aXRpbmdcIiBzdGF0dXMgaXMgYXBwbGllZC5cbiAgICpcbiAgICogQHR5cGUgRnVuY3Rpb24obm9kZTogSHRtbEVsZW1lbnQpIC0+IHZvaWRcbiAgICovXG4gIG9uRXhpdGluZzogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIGZpcmVkIGFmdGVyIHRoZSBcImV4aXRlZFwiIHN0YXR1cyBpcyBhcHBsaWVkLlxuICAgKlxuICAgKiBAdHlwZSBGdW5jdGlvbihub2RlOiBIdG1sRWxlbWVudCkgLT4gdm9pZFxuICAgKi9cbiAgb25FeGl0ZWQ6IFByb3BUeXBlcy5mdW5jIC8vIE5hbWUgdGhlIGZ1bmN0aW9uIHNvIGl0IGlzIGNsZWFyZXIgaW4gdGhlIGRvY3VtZW50YXRpb25cblxufSA6IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxuVHJhbnNpdGlvbi5kZWZhdWx0UHJvcHMgPSB7XG4gIGluOiBmYWxzZSxcbiAgbW91bnRPbkVudGVyOiBmYWxzZSxcbiAgdW5tb3VudE9uRXhpdDogZmFsc2UsXG4gIGFwcGVhcjogZmFsc2UsXG4gIGVudGVyOiB0cnVlLFxuICBleGl0OiB0cnVlLFxuICBvbkVudGVyOiBub29wLFxuICBvbkVudGVyaW5nOiBub29wLFxuICBvbkVudGVyZWQ6IG5vb3AsXG4gIG9uRXhpdDogbm9vcCxcbiAgb25FeGl0aW5nOiBub29wLFxuICBvbkV4aXRlZDogbm9vcFxufTtcblRyYW5zaXRpb24uVU5NT1VOVEVEID0gMDtcblRyYW5zaXRpb24uRVhJVEVEID0gMTtcblRyYW5zaXRpb24uRU5URVJJTkcgPSAyO1xuVHJhbnNpdGlvbi5FTlRFUkVEID0gMztcblRyYW5zaXRpb24uRVhJVElORyA9IDQ7XG5cbnZhciBfZGVmYXVsdCA9ICgwLCBfcmVhY3RMaWZlY3ljbGVzQ29tcGF0LnBvbHlmaWxsKShUcmFuc2l0aW9uKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBQcm9wVHlwZXMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicHJvcC10eXBlc1wiKSk7XG5cbnZhciBfYWRkQ2xhc3MgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJkb20taGVscGVycy9jbGFzcy9hZGRDbGFzc1wiKSk7XG5cbnZhciBfcmVtb3ZlQ2xhc3MgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJkb20taGVscGVycy9jbGFzcy9yZW1vdmVDbGFzc1wiKSk7XG5cbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbnZhciBfVHJhbnNpdGlvbiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vVHJhbnNpdGlvblwiKSk7XG5cbnZhciBfUHJvcFR5cGVzID0gcmVxdWlyZShcIi4vdXRpbHMvUHJvcFR5cGVzXCIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHsgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkgeyByZXR1cm4gb2JqOyB9IGVsc2UgeyB2YXIgbmV3T2JqID0ge307IGlmIChvYmogIT0gbnVsbCkgeyBmb3IgKHZhciBrZXkgaW4gb2JqKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7IHZhciBkZXNjID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IHt9OyBpZiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTsgfSBlbHNlIHsgbmV3T2JqW2tleV0gPSBvYmpba2V5XTsgfSB9IH0gfSBuZXdPYmouZGVmYXVsdCA9IG9iajsgcmV0dXJuIG5ld09iajsgfSB9XG5cbmZ1bmN0aW9uIF9leHRlbmRzKCkgeyBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07IHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0c0xvb3NlKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcy5wcm90b3R5cGUpOyBzdWJDbGFzcy5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBzdWJDbGFzczsgc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgYWRkQ2xhc3MgPSBmdW5jdGlvbiBhZGRDbGFzcyhub2RlLCBjbGFzc2VzKSB7XG4gIHJldHVybiBub2RlICYmIGNsYXNzZXMgJiYgY2xhc3Nlcy5zcGxpdCgnICcpLmZvckVhY2goZnVuY3Rpb24gKGMpIHtcbiAgICByZXR1cm4gKDAsIF9hZGRDbGFzcy5kZWZhdWx0KShub2RlLCBjKTtcbiAgfSk7XG59O1xuXG52YXIgcmVtb3ZlQ2xhc3MgPSBmdW5jdGlvbiByZW1vdmVDbGFzcyhub2RlLCBjbGFzc2VzKSB7XG4gIHJldHVybiBub2RlICYmIGNsYXNzZXMgJiYgY2xhc3Nlcy5zcGxpdCgnICcpLmZvckVhY2goZnVuY3Rpb24gKGMpIHtcbiAgICByZXR1cm4gKDAsIF9yZW1vdmVDbGFzcy5kZWZhdWx0KShub2RlLCBjKTtcbiAgfSk7XG59O1xuLyoqXG4gKiBBIGBUcmFuc2l0aW9uYCBjb21wb25lbnQgdXNpbmcgQ1NTIHRyYW5zaXRpb25zIGFuZCBhbmltYXRpb25zLlxuICogSXQncyBpbnNwaXJlZCBieSB0aGUgZXhjZWxsZW50IFtuZy1hbmltYXRlXShodHRwOi8vd3d3Lm5nYW5pbWF0ZS5vcmcvKSBsaWJyYXJ5LlxuICpcbiAqIGBDU1NUcmFuc2l0aW9uYCBhcHBsaWVzIGEgcGFpciBvZiBjbGFzcyBuYW1lcyBkdXJpbmcgdGhlIGBhcHBlYXJgLCBgZW50ZXJgLFxuICogYW5kIGBleGl0YCBzdGFnZXMgb2YgdGhlIHRyYW5zaXRpb24uIFRoZSBmaXJzdCBjbGFzcyBpcyBhcHBsaWVkIGFuZCB0aGVuIGFcbiAqIHNlY29uZCBcImFjdGl2ZVwiIGNsYXNzIGluIG9yZGVyIHRvIGFjdGl2YXRlIHRoZSBjc3MgYW5pbWF0aW9uLiBBZnRlciB0aGUgYW5pbWF0aW9uLFxuICogbWF0Y2hpbmcgYGRvbmVgIGNsYXNzIG5hbWVzIGFyZSBhcHBsaWVkIHRvIHBlcnNpc3QgdGhlIGFuaW1hdGlvbiBzdGF0ZS5cbiAqXG4gKiBXaGVuIHRoZSBgaW5gIHByb3AgaXMgdG9nZ2xlZCB0byBgdHJ1ZWAgdGhlIENvbXBvbmVudCB3aWxsIGdldFxuICogdGhlIGBleGFtcGxlLWVudGVyYCBDU1MgY2xhc3MgYW5kIHRoZSBgZXhhbXBsZS1lbnRlci1hY3RpdmVgIENTUyBjbGFzc1xuICogYWRkZWQgaW4gdGhlIG5leHQgdGljay4gVGhpcyBpcyBhIGNvbnZlbnRpb24gYmFzZWQgb24gdGhlIGBjbGFzc05hbWVzYCBwcm9wLlxuICovXG5cblxudmFyIENTU1RyYW5zaXRpb24gPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzTG9vc2UoQ1NTVHJhbnNpdGlvbiwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gQ1NTVHJhbnNpdGlvbigpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgX3RoaXMgPSBfUmVhY3QkQ29tcG9uZW50LmNhbGwuYXBwbHkoX1JlYWN0JENvbXBvbmVudCwgW3RoaXNdLmNvbmNhdChhcmdzKSkgfHwgdGhpcztcblxuICAgIF90aGlzLm9uRW50ZXIgPSBmdW5jdGlvbiAobm9kZSwgYXBwZWFyaW5nKSB7XG4gICAgICB2YXIgX3RoaXMkZ2V0Q2xhc3NOYW1lcyA9IF90aGlzLmdldENsYXNzTmFtZXMoYXBwZWFyaW5nID8gJ2FwcGVhcicgOiAnZW50ZXInKSxcbiAgICAgICAgICBjbGFzc05hbWUgPSBfdGhpcyRnZXRDbGFzc05hbWVzLmNsYXNzTmFtZTtcblxuICAgICAgX3RoaXMucmVtb3ZlQ2xhc3Nlcyhub2RlLCAnZXhpdCcpO1xuXG4gICAgICBhZGRDbGFzcyhub2RlLCBjbGFzc05hbWUpO1xuXG4gICAgICBpZiAoX3RoaXMucHJvcHMub25FbnRlcikge1xuICAgICAgICBfdGhpcy5wcm9wcy5vbkVudGVyKG5vZGUsIGFwcGVhcmluZyk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF90aGlzLm9uRW50ZXJpbmcgPSBmdW5jdGlvbiAobm9kZSwgYXBwZWFyaW5nKSB7XG4gICAgICB2YXIgX3RoaXMkZ2V0Q2xhc3NOYW1lczIgPSBfdGhpcy5nZXRDbGFzc05hbWVzKGFwcGVhcmluZyA/ICdhcHBlYXInIDogJ2VudGVyJyksXG4gICAgICAgICAgYWN0aXZlQ2xhc3NOYW1lID0gX3RoaXMkZ2V0Q2xhc3NOYW1lczIuYWN0aXZlQ2xhc3NOYW1lO1xuXG4gICAgICBfdGhpcy5yZWZsb3dBbmRBZGRDbGFzcyhub2RlLCBhY3RpdmVDbGFzc05hbWUpO1xuXG4gICAgICBpZiAoX3RoaXMucHJvcHMub25FbnRlcmluZykge1xuICAgICAgICBfdGhpcy5wcm9wcy5vbkVudGVyaW5nKG5vZGUsIGFwcGVhcmluZyk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF90aGlzLm9uRW50ZXJlZCA9IGZ1bmN0aW9uIChub2RlLCBhcHBlYXJpbmcpIHtcbiAgICAgIHZhciBfdGhpcyRnZXRDbGFzc05hbWVzMyA9IF90aGlzLmdldENsYXNzTmFtZXMoJ2VudGVyJyksXG4gICAgICAgICAgZG9uZUNsYXNzTmFtZSA9IF90aGlzJGdldENsYXNzTmFtZXMzLmRvbmVDbGFzc05hbWU7XG5cbiAgICAgIF90aGlzLnJlbW92ZUNsYXNzZXMobm9kZSwgYXBwZWFyaW5nID8gJ2FwcGVhcicgOiAnZW50ZXInKTtcblxuICAgICAgYWRkQ2xhc3Mobm9kZSwgZG9uZUNsYXNzTmFtZSk7XG5cbiAgICAgIGlmIChfdGhpcy5wcm9wcy5vbkVudGVyZWQpIHtcbiAgICAgICAgX3RoaXMucHJvcHMub25FbnRlcmVkKG5vZGUsIGFwcGVhcmluZyk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF90aGlzLm9uRXhpdCA9IGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICB2YXIgX3RoaXMkZ2V0Q2xhc3NOYW1lczQgPSBfdGhpcy5nZXRDbGFzc05hbWVzKCdleGl0JyksXG4gICAgICAgICAgY2xhc3NOYW1lID0gX3RoaXMkZ2V0Q2xhc3NOYW1lczQuY2xhc3NOYW1lO1xuXG4gICAgICBfdGhpcy5yZW1vdmVDbGFzc2VzKG5vZGUsICdhcHBlYXInKTtcblxuICAgICAgX3RoaXMucmVtb3ZlQ2xhc3Nlcyhub2RlLCAnZW50ZXInKTtcblxuICAgICAgYWRkQ2xhc3Mobm9kZSwgY2xhc3NOYW1lKTtcblxuICAgICAgaWYgKF90aGlzLnByb3BzLm9uRXhpdCkge1xuICAgICAgICBfdGhpcy5wcm9wcy5vbkV4aXQobm9kZSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF90aGlzLm9uRXhpdGluZyA9IGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICB2YXIgX3RoaXMkZ2V0Q2xhc3NOYW1lczUgPSBfdGhpcy5nZXRDbGFzc05hbWVzKCdleGl0JyksXG4gICAgICAgICAgYWN0aXZlQ2xhc3NOYW1lID0gX3RoaXMkZ2V0Q2xhc3NOYW1lczUuYWN0aXZlQ2xhc3NOYW1lO1xuXG4gICAgICBfdGhpcy5yZWZsb3dBbmRBZGRDbGFzcyhub2RlLCBhY3RpdmVDbGFzc05hbWUpO1xuXG4gICAgICBpZiAoX3RoaXMucHJvcHMub25FeGl0aW5nKSB7XG4gICAgICAgIF90aGlzLnByb3BzLm9uRXhpdGluZyhub2RlKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3RoaXMub25FeGl0ZWQgPSBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgdmFyIF90aGlzJGdldENsYXNzTmFtZXM2ID0gX3RoaXMuZ2V0Q2xhc3NOYW1lcygnZXhpdCcpLFxuICAgICAgICAgIGRvbmVDbGFzc05hbWUgPSBfdGhpcyRnZXRDbGFzc05hbWVzNi5kb25lQ2xhc3NOYW1lO1xuXG4gICAgICBfdGhpcy5yZW1vdmVDbGFzc2VzKG5vZGUsICdleGl0Jyk7XG5cbiAgICAgIGFkZENsYXNzKG5vZGUsIGRvbmVDbGFzc05hbWUpO1xuXG4gICAgICBpZiAoX3RoaXMucHJvcHMub25FeGl0ZWQpIHtcbiAgICAgICAgX3RoaXMucHJvcHMub25FeGl0ZWQobm9kZSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF90aGlzLmdldENsYXNzTmFtZXMgPSBmdW5jdGlvbiAodHlwZSkge1xuICAgICAgdmFyIGNsYXNzTmFtZXMgPSBfdGhpcy5wcm9wcy5jbGFzc05hbWVzO1xuICAgICAgdmFyIGNsYXNzTmFtZSA9IHR5cGVvZiBjbGFzc05hbWVzICE9PSAnc3RyaW5nJyA/IGNsYXNzTmFtZXNbdHlwZV0gOiBjbGFzc05hbWVzICsgJy0nICsgdHlwZTtcbiAgICAgIHZhciBhY3RpdmVDbGFzc05hbWUgPSB0eXBlb2YgY2xhc3NOYW1lcyAhPT0gJ3N0cmluZycgPyBjbGFzc05hbWVzW3R5cGUgKyAnQWN0aXZlJ10gOiBjbGFzc05hbWUgKyAnLWFjdGl2ZSc7XG4gICAgICB2YXIgZG9uZUNsYXNzTmFtZSA9IHR5cGVvZiBjbGFzc05hbWVzICE9PSAnc3RyaW5nJyA/IGNsYXNzTmFtZXNbdHlwZSArICdEb25lJ10gOiBjbGFzc05hbWUgKyAnLWRvbmUnO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgY2xhc3NOYW1lOiBjbGFzc05hbWUsXG4gICAgICAgIGFjdGl2ZUNsYXNzTmFtZTogYWN0aXZlQ2xhc3NOYW1lLFxuICAgICAgICBkb25lQ2xhc3NOYW1lOiBkb25lQ2xhc3NOYW1lXG4gICAgICB9O1xuICAgIH07XG5cbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gQ1NTVHJhbnNpdGlvbi5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLnJlbW92ZUNsYXNzZXMgPSBmdW5jdGlvbiByZW1vdmVDbGFzc2VzKG5vZGUsIHR5cGUpIHtcbiAgICB2YXIgX3RoaXMkZ2V0Q2xhc3NOYW1lczcgPSB0aGlzLmdldENsYXNzTmFtZXModHlwZSksXG4gICAgICAgIGNsYXNzTmFtZSA9IF90aGlzJGdldENsYXNzTmFtZXM3LmNsYXNzTmFtZSxcbiAgICAgICAgYWN0aXZlQ2xhc3NOYW1lID0gX3RoaXMkZ2V0Q2xhc3NOYW1lczcuYWN0aXZlQ2xhc3NOYW1lLFxuICAgICAgICBkb25lQ2xhc3NOYW1lID0gX3RoaXMkZ2V0Q2xhc3NOYW1lczcuZG9uZUNsYXNzTmFtZTtcblxuICAgIGNsYXNzTmFtZSAmJiByZW1vdmVDbGFzcyhub2RlLCBjbGFzc05hbWUpO1xuICAgIGFjdGl2ZUNsYXNzTmFtZSAmJiByZW1vdmVDbGFzcyhub2RlLCBhY3RpdmVDbGFzc05hbWUpO1xuICAgIGRvbmVDbGFzc05hbWUgJiYgcmVtb3ZlQ2xhc3Mobm9kZSwgZG9uZUNsYXNzTmFtZSk7XG4gIH07XG5cbiAgX3Byb3RvLnJlZmxvd0FuZEFkZENsYXNzID0gZnVuY3Rpb24gcmVmbG93QW5kQWRkQ2xhc3Mobm9kZSwgY2xhc3NOYW1lKSB7XG4gICAgLy8gVGhpcyBpcyBmb3IgdG8gZm9yY2UgYSByZXBhaW50LFxuICAgIC8vIHdoaWNoIGlzIG5lY2Vzc2FyeSBpbiBvcmRlciB0byB0cmFuc2l0aW9uIHN0eWxlcyB3aGVuIGFkZGluZyBhIGNsYXNzIG5hbWUuXG4gICAgaWYgKGNsYXNzTmFtZSkge1xuICAgICAgLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLWV4cHJlc3Npb25zICovXG4gICAgICBub2RlICYmIG5vZGUuc2Nyb2xsVG9wO1xuICAgICAgLyogZXNsaW50LWVuYWJsZSBuby11bnVzZWQtZXhwcmVzc2lvbnMgKi9cblxuICAgICAgYWRkQ2xhc3Mobm9kZSwgY2xhc3NOYW1lKTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgcHJvcHMgPSBfZXh0ZW5kcyh7fSwgdGhpcy5wcm9wcyk7XG5cbiAgICBkZWxldGUgcHJvcHMuY2xhc3NOYW1lcztcbiAgICByZXR1cm4gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChfVHJhbnNpdGlvbi5kZWZhdWx0LCBfZXh0ZW5kcyh7fSwgcHJvcHMsIHtcbiAgICAgIG9uRW50ZXI6IHRoaXMub25FbnRlcixcbiAgICAgIG9uRW50ZXJlZDogdGhpcy5vbkVudGVyZWQsXG4gICAgICBvbkVudGVyaW5nOiB0aGlzLm9uRW50ZXJpbmcsXG4gICAgICBvbkV4aXQ6IHRoaXMub25FeGl0LFxuICAgICAgb25FeGl0aW5nOiB0aGlzLm9uRXhpdGluZyxcbiAgICAgIG9uRXhpdGVkOiB0aGlzLm9uRXhpdGVkXG4gICAgfSkpO1xuICB9O1xuXG4gIHJldHVybiBDU1NUcmFuc2l0aW9uO1xufShfcmVhY3QuZGVmYXVsdC5Db21wb25lbnQpO1xuXG5DU1NUcmFuc2l0aW9uLnByb3BUeXBlcyA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IF9leHRlbmRzKHt9LCBfVHJhbnNpdGlvbi5kZWZhdWx0LnByb3BUeXBlcywge1xuICAvKipcbiAgICogVGhlIGFuaW1hdGlvbiBjbGFzc05hbWVzIGFwcGxpZWQgdG8gdGhlIGNvbXBvbmVudCBhcyBpdCBlbnRlcnMsIGV4aXRzIG9yIGhhcyBmaW5pc2hlZCB0aGUgdHJhbnNpdGlvbi5cbiAgICogQSBzaW5nbGUgbmFtZSBjYW4gYmUgcHJvdmlkZWQgYW5kIGl0IHdpbGwgYmUgc3VmZml4ZWQgZm9yIGVhY2ggc3RhZ2U6IGUuZy5cbiAgICpcbiAgICogYGNsYXNzTmFtZXM9XCJmYWRlXCJgIGFwcGxpZXMgYGZhZGUtZW50ZXJgLCBgZmFkZS1lbnRlci1hY3RpdmVgLCBgZmFkZS1lbnRlci1kb25lYCxcbiAgICogYGZhZGUtZXhpdGAsIGBmYWRlLWV4aXQtYWN0aXZlYCwgYGZhZGUtZXhpdC1kb25lYCwgYGZhZGUtYXBwZWFyYCwgYW5kIGBmYWRlLWFwcGVhci1hY3RpdmVgLlxuICAgKiBFYWNoIGluZGl2aWR1YWwgY2xhc3NOYW1lcyBjYW4gYWxzbyBiZSBzcGVjaWZpZWQgaW5kZXBlbmRlbnRseSBsaWtlOlxuICAgKlxuICAgKiBgYGBqc1xuICAgKiBjbGFzc05hbWVzPXt7XG4gICAqICBhcHBlYXI6ICdteS1hcHBlYXInLFxuICAgKiAgYXBwZWFyQWN0aXZlOiAnbXktYWN0aXZlLWFwcGVhcicsXG4gICAqICBlbnRlcjogJ215LWVudGVyJyxcbiAgICogIGVudGVyQWN0aXZlOiAnbXktYWN0aXZlLWVudGVyJyxcbiAgICogIGVudGVyRG9uZTogJ215LWRvbmUtZW50ZXInLFxuICAgKiAgZXhpdDogJ215LWV4aXQnLFxuICAgKiAgZXhpdEFjdGl2ZTogJ215LWFjdGl2ZS1leGl0JyxcbiAgICogIGV4aXREb25lOiAnbXktZG9uZS1leGl0JyxcbiAgICogfX1cbiAgICogYGBgXG4gICAqXG4gICAqIElmIHlvdSB3YW50IHRvIHNldCB0aGVzZSBjbGFzc2VzIHVzaW5nIENTUyBNb2R1bGVzOlxuICAgKlxuICAgKiBgYGBqc1xuICAgKiBpbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzLmNzcyc7XG4gICAqIGBgYFxuICAgKlxuICAgKiB5b3UgbWlnaHQgd2FudCB0byB1c2UgY2FtZWxDYXNlIGluIHlvdXIgQ1NTIGZpbGUsIHRoYXQgd2F5IGNvdWxkIHNpbXBseSBzcHJlYWRcbiAgICogdGhlbSBpbnN0ZWFkIG9mIGxpc3RpbmcgdGhlbSBvbmUgYnkgb25lOlxuICAgKlxuICAgKiBgYGBqc1xuICAgKiBjbGFzc05hbWVzPXt7IC4uLnN0eWxlcyB9fVxuICAgKiBgYGBcbiAgICpcbiAgICogQHR5cGUge3N0cmluZyB8IHtcbiAgICogIGFwcGVhcj86IHN0cmluZyxcbiAgICogIGFwcGVhckFjdGl2ZT86IHN0cmluZyxcbiAgICogIGVudGVyPzogc3RyaW5nLFxuICAgKiAgZW50ZXJBY3RpdmU/OiBzdHJpbmcsXG4gICAqICBlbnRlckRvbmU/OiBzdHJpbmcsXG4gICAqICBleGl0Pzogc3RyaW5nLFxuICAgKiAgZXhpdEFjdGl2ZT86IHN0cmluZyxcbiAgICogIGV4aXREb25lPzogc3RyaW5nLFxuICAgKiB9fVxuICAgKi9cbiAgY2xhc3NOYW1lczogX1Byb3BUeXBlcy5jbGFzc05hbWVzU2hhcGUsXG5cbiAgLyoqXG4gICAqIEEgYDxUcmFuc2l0aW9uPmAgY2FsbGJhY2sgZmlyZWQgaW1tZWRpYXRlbHkgYWZ0ZXIgdGhlICdlbnRlcicgb3IgJ2FwcGVhcicgY2xhc3MgaXNcbiAgICogYXBwbGllZC5cbiAgICpcbiAgICogQHR5cGUgRnVuY3Rpb24obm9kZTogSHRtbEVsZW1lbnQsIGlzQXBwZWFyaW5nOiBib29sKVxuICAgKi9cbiAgb25FbnRlcjogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIEEgYDxUcmFuc2l0aW9uPmAgY2FsbGJhY2sgZmlyZWQgaW1tZWRpYXRlbHkgYWZ0ZXIgdGhlICdlbnRlci1hY3RpdmUnIG9yXG4gICAqICdhcHBlYXItYWN0aXZlJyBjbGFzcyBpcyBhcHBsaWVkLlxuICAgKlxuICAgKiBAdHlwZSBGdW5jdGlvbihub2RlOiBIdG1sRWxlbWVudCwgaXNBcHBlYXJpbmc6IGJvb2wpXG4gICAqL1xuICBvbkVudGVyaW5nOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQSBgPFRyYW5zaXRpb24+YCBjYWxsYmFjayBmaXJlZCBpbW1lZGlhdGVseSBhZnRlciB0aGUgJ2VudGVyJyBvclxuICAgKiAnYXBwZWFyJyBjbGFzc2VzIGFyZSAqKnJlbW92ZWQqKiBhbmQgdGhlIGBkb25lYCBjbGFzcyBpcyBhZGRlZCB0byB0aGUgRE9NIG5vZGUuXG4gICAqXG4gICAqIEB0eXBlIEZ1bmN0aW9uKG5vZGU6IEh0bWxFbGVtZW50LCBpc0FwcGVhcmluZzogYm9vbClcbiAgICovXG4gIG9uRW50ZXJlZDogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIEEgYDxUcmFuc2l0aW9uPmAgY2FsbGJhY2sgZmlyZWQgaW1tZWRpYXRlbHkgYWZ0ZXIgdGhlICdleGl0JyBjbGFzcyBpc1xuICAgKiBhcHBsaWVkLlxuICAgKlxuICAgKiBAdHlwZSBGdW5jdGlvbihub2RlOiBIdG1sRWxlbWVudClcbiAgICovXG4gIG9uRXhpdDogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIEEgYDxUcmFuc2l0aW9uPmAgY2FsbGJhY2sgZmlyZWQgaW1tZWRpYXRlbHkgYWZ0ZXIgdGhlICdleGl0LWFjdGl2ZScgaXMgYXBwbGllZC5cbiAgICpcbiAgICogQHR5cGUgRnVuY3Rpb24obm9kZTogSHRtbEVsZW1lbnQpXG4gICAqL1xuICBvbkV4aXRpbmc6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBBIGA8VHJhbnNpdGlvbj5gIGNhbGxiYWNrIGZpcmVkIGltbWVkaWF0ZWx5IGFmdGVyIHRoZSAnZXhpdCcgY2xhc3Nlc1xuICAgKiBhcmUgKipyZW1vdmVkKiogYW5kIHRoZSBgZXhpdC1kb25lYCBjbGFzcyBpcyBhZGRlZCB0byB0aGUgRE9NIG5vZGUuXG4gICAqXG4gICAqIEB0eXBlIEZ1bmN0aW9uKG5vZGU6IEh0bWxFbGVtZW50KVxuICAgKi9cbiAgb25FeGl0ZWQ6IFByb3BUeXBlcy5mdW5jXG59KSA6IHt9O1xudmFyIF9kZWZhdWx0ID0gQ1NTVHJhbnNpdGlvbjtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzW1wiZGVmYXVsdFwiXTsiLCJpbXBvcnQgUmVhY3QsIHsgY3JlYXRlUmVmLCBSZWZPYmplY3QsIFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQ1NTVHJhbnNpdGlvbiBmcm9tICdyZWFjdC10cmFuc2l0aW9uLWdyb3VwL0NTU1RyYW5zaXRpb24nO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgeyBDb2xvclR5cGUsIENTU1R5cGUgfSBmcm9tICcuLi8uLi90eXBlcyc7XG5cbmNvbnN0IFdyYXBwZXIgPSBzdHlsZWQuZGl2PHsgY3NzPzogQ1NTVHlwZSB9PmBcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cbiAgZGl2W3JvbGU9XCJ0b29sdGlwXCJdIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgY2xlYXI6IGJvdGg7XG4gICAgYm94LXNoYWRvdzogMCAxcHggMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjA1KTtcbiAgICB6LWluZGV4OiA5OTk5O1xuICAgIHBhZGRpbmc6IDAuMzc1cmVtIDAuNjI1cmVtO1xuICAgIGN1cnNvcjogZGVmYXVsdDtcbiAgICB3aWR0aDogYXV0bztcbiAgICB3aGl0ZS1zcGFjZTogcHJlO1xuICAgIGZvbnQtc2l6ZTogMC44NXJlbTtcblxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC44KTtcbiAgICBvcGFjaXR5OiAwO1xuXG4gICAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybSwgb3BhY2l0eTtcbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiB0cmFuc2Zvcm0sIG9wYWNpdHk7XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMTAwbXM7XG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKTtcblxuICAgICYuc3RhcnQge1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuXG4gICAgJi5lbmQge1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjgpO1xuICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG4gIH1cbiAgJHsoeyBjc3MgfSkgPT4gY3NzIHx8ICcnfVxuYDtcblxuaW50ZXJmYWNlIFRvb2x0aXBQcm9wcyB7XG4gIC8qKiDlkLnjgY3lh7rjgZfjgajjgZfjgabooajnpLrjgZfjgZ/jgYTlhoXlrrkgKi9cbiAgbGFiZWw6IGFueTtcbiAgLyoqIOODnuOCpuOCueOCquODvOODkOODvOOBruWvvuixoeOBq+OBquOCi2VsZW1lbnQgKi9cbiAgY2hpbGRyZW46IGFueTtcbiAgLyoqIOWQueOBjeWHuuOBl+OBruiDjOaZr+iJsuOBruaMh+WumiAqL1xuICBjb2xvcj86IENvbG9yVHlwZTtcbiAgLyoqIOihqOekuuOBleOCjOOCi+WgtOaJgCAqL1xuICBwb3NpdGlvbj86ICd0b3AnIHwgJ2xlZnQnIHwgJ3JpZ2h0JyB8ICdib3R0b20nO1xuICAvKiog44Kr44K544K/44OgQ1NT5a6a576pICovXG4gIGNzcz86IENTU1R5cGU7XG59XG5cbmludGVyZmFjZSBTdGF0ZSB7XG4gIHNob3c6IGJvb2xlYW47XG4gIHN0eWxlOiBhbnk7XG59XG5cbmZ1bmN0aW9uIGdldFBvc2l0aW9uKGhlaWdodDogbnVtYmVyLCB3aWR0aDogbnVtYmVyLCBwb3NpdGlvbj86IGFueSkge1xuICBzd2l0Y2ggKHBvc2l0aW9uKSB7XG4gICAgY2FzZSAndG9wJzoge1xuICAgICAgcmV0dXJuIHsgYm90dG9tOiBgJHtoZWlnaHR9cHhgLCBsZWZ0OiAnNTAlJywgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgtNTAlKScgfTtcbiAgICB9XG4gICAgY2FzZSAnbGVmdCc6IHtcbiAgICAgIHJldHVybiB7IHJpZ2h0OiBgJHt3aWR0aH1weGAsIHRvcDogJzUwJScsIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoLTUwJSknIH07XG4gICAgfVxuICAgIGNhc2UgJ3JpZ2h0Jzoge1xuICAgICAgcmV0dXJuIHsgbGVmdDogYCR7d2lkdGh9cHhgLCB0b3A6ICc1MCUnLCB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKC01MCUpJyB9O1xuICAgIH1cbiAgICBkZWZhdWx0OiB7XG4gICAgICByZXR1cm4geyB0b3A6IGAke2hlaWdodH1weGAsIGxlZnQ6ICc1MCUnLCB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKC01MCUpJyAgfTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9vbHRpcCBleHRlbmRzIFB1cmVDb21wb25lbnQ8VG9vbHRpcFByb3BzLCBTdGF0ZT4ge1xuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIHBvc2l0aW9uOiAnYm90dG9tJyxcbiAgICBjb2xvcjogJ2RhcmsnLFxuICB9O1xuXG4gIHN0YXRlID0ge1xuICAgIHNob3c6IGZhbHNlLFxuICAgIHN0eWxlOiB7fSxcbiAgfTtcblxuICBvcGVuVG9vbHRpcCA9ICgpID0+IHtcbiAgICBpZiAodGhpcy5zdGF0ZS5zaG93IHx8ICF0aGlzLmVsZW1lbnQuY3VycmVudCkgcmV0dXJuO1xuXG4gICAgY29uc3Qgd2lkdGggPSB0aGlzLmVsZW1lbnQuY3VycmVudC5vZmZzZXRXaWR0aCArIDg7XG4gICAgY29uc3QgaGVpZ2h0ID0gdGhpcy5lbGVtZW50LmN1cnJlbnQub2Zmc2V0SGVpZ2h0ICsgODtcbiAgICBjb25zdCBzdHlsZSA9IGdldFBvc2l0aW9uKGhlaWdodCwgd2lkdGgsIHRoaXMucHJvcHMucG9zaXRpb24pO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBzdHlsZSwgc2hvdzogdHJ1ZSB9KTtcbiAgfVxuXG4gIGNsb3NlVG9vbHRpcCA9ICgpID0+IHtcbiAgICBpZiAodGhpcy5zdGF0ZS5zaG93ICYmIHRoaXMuZWxlbWVudC5jdXJyZW50KSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgc2hvdzogZmFsc2UgfSk7XG4gICAgfVxuICB9XG5cbiAgZWxlbWVudDogUmVmT2JqZWN0PEhUTUxEaXZFbGVtZW50PiA9IGNyZWF0ZVJlZigpO1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGxhYmVsLCBjaGlsZHJlbiwgLi4ucmVzdCB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IHNob3csIHN0eWxlIH0gPSB0aGlzLnN0YXRlO1xuICAgIHJldHVybiAoXG4gICAgICA8V3JhcHBlclxuICAgICAgICByZWY9e3RoaXMuZWxlbWVudH1cbiAgICAgICAgb25Nb3VzZU92ZXI9e3RoaXMub3BlblRvb2x0aXB9XG4gICAgICAgIG9uTW91c2VPdXQ9e3RoaXMuY2xvc2VUb29sdGlwfVxuICAgICAgICB7Li4ucmVzdH1cbiAgICAgID5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8Q1NTVHJhbnNpdGlvblxuICAgICAgICAgIGNsYXNzTmFtZXM9e3tcbiAgICAgICAgICAgIGFwcGVhcjogJ3N0YXJ0JyxcbiAgICAgICAgICAgIGVudGVyRG9uZTogJ3N0YXJ0JyxcbiAgICAgICAgICAgIGV4aXQ6ICdlbmQnLFxuICAgICAgICAgIH19XG4gICAgICAgICAgaW49e3Nob3d9XG4gICAgICAgICAgdGltZW91dD17MTUwfVxuICAgICAgICAgIHVubW91bnRPbkV4aXRcbiAgICAgICAgPlxuICAgICAgICAgIDxkaXYgcm9sZT1cInRvb2x0aXBcIj5cbiAgICAgICAgICAgIHtsYWJlbH1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9DU1NUcmFuc2l0aW9uPlxuICAgICAgPC9XcmFwcGVyPlxuICAgICk7XG4gIH1cbn1cblxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5leHBvcnQgY29uc3QgU2lkZU1lbnUgPSBzdHlsZWQuYXNpZGVgXG4gIGZvbnQtc2l6ZTogMXJlbTtcbmA7XG5TaWRlTWVudS5kaXNwbGF5TmFtZSA9ICdTaWRlTWVudSc7XG5cbmV4cG9ydCBjb25zdCBNZW51TGlzdCA9IHN0eWxlZC51bGBcbiAgbGluZS1oZWlnaHQ6IDEuMjU7XG5cbiAgYSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcGFkZGluZzogMC41ZW07XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnRleHR9O1xuICAgICY6aG92ZXIge1xuICAgICAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUucHJpbWFyeX07XG4gICAgfVxuICAgICYuYWN0aXZlIHtcbiAgICAgIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnByaW1hcnl9O1xuICAgIH1cbiAgfVxuXG4gIGxpIHtcbiAgICB1bCB7XG4gICAgICBtYXJnaW46IDAuNzVlbTtcbiAgICAgIHBhZGRpbmctbGVmdDogMC43NWVtO1xuICAgIH1cbiAgfVxuYDtcbk1lbnVMaXN0LmRpc3BsYXlOYW1lID0gJ01lbnVMaXN0JztcblxuZXhwb3J0IGNvbnN0IE1lbnVMYWJlbCA9IHN0eWxlZC5wYFxuICBmb250LXNpemU6IDAuNzVlbTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMWVtO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuXG4gICY6bm90KDpmaXJzdC1jaGlsZCkge1xuICAgIG1hcmdpbi10b3A6IDFlbTtcbiAgfVxuICAmOm5vdCg6bGFzdC1jaGlsZCkge1xuICAgIG1hcmdpbi1ib3R0b206IDFlbTtcbiAgfVxuYDtcbk1lbnVMYWJlbC5kaXNwbGF5TmFtZSA9ICdNZW51TGFiZWwnO1xuXG4iLCJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCwgQ1NTUHJvcGVydGllcyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQsIHsgY3NzIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IEJveCBmcm9tICcuLi9Cb3gnO1xuaW1wb3J0IHsgQ29sb3JUeXBlIH0gZnJvbSAnLi4vLi4vdHlwZXMnO1xuXG5jb25zdCBDYXJkQm9keSA9IHN0eWxlZC5kaXZgXG4gIHBhZGRpbmc6IDEuMjVyZW07XG4gIG1hcmdpbjogMDtcbmA7XG5cbmNvbnN0IENhcmRIZWFkZXIgPSBzdHlsZWQuaGVhZGVyYFxuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nOiAwLjVyZW0gMS41cmVtO1xuICBtaW4taGVpZ2h0OiAzLjVyZW07XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmJvcmRlcn07XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbmA7XG5cbmNvbnN0IENhcmRGb290ZXIgPSBzdHlsZWQuZm9vdGVyYFxuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nOiAwLjVyZW0gMS41cmVtO1xuICBtaW4taGVpZ2h0OiAzLjVyZW07XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmJvcmRlcn07XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbmA7XG5cbmNvbnN0IENhcmRJbWFnZSA9IHN0eWxlZC5hYFxuICB3aWR0aDogMTAwJTtcblxuICBpbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDNweDtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogM3B4O1xuICB9XG5gO1xuXG5pbnRlcmZhY2UgSW1hZ2VQcm9wcyB7XG4gIHVybD86IHN0cmluZztcbn1cblxuY29uc3QgQ2FyZEltYWdlSG9yaXpvbnRhbCA9IHN0eWxlZC5hPEltYWdlUHJvcHM+YFxuICBmbGV4OiAwIDAgMzAlO1xuICBtaW4td2lkdGg6IDVyZW07XG4gIHdpZHRoOiAzMCU7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDNweDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogM3B4O1xuXG4gIGJhY2tncm91bmQ6IG5vLXJlcGVhdCBjZW50ZXIvY292ZXI7XG4gICR7KHsgdXJsIH0pID0+IHVybCA/IGNzc2BiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHt1cmx9KTtgIDoge319XG5gO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICAvKiog44Os44K544Od44Oz44K344OW44Gq44Kk44Oh44O844K444KS6L+95Yqg44GZ44KLICovXG4gIGltYWdlPzogc3RyaW5nO1xuICAvKiog44K/44Kk44OI44OrICovXG4gIHRpdGxlPzogc3RyaW5nO1xuICAvKiog44OY44OD44OA44O844Gu5Y+z5YG044Gr6L+95Yqg44GZ44KLICovXG4gIGhlYWRlck9wdGlvbnM/OiBhbnk7XG4gIC8qKiBoZWFkZXLpg6jliIbvvIjjgqTjg6Hjg7zjgrjvvInjgpLmqKrkuKbjgbPjgavjgZnjgosgKi9cbiAgaG9yaXpvbnRhbD86IGJvb2xlYW47XG4gIC8qKiBmb290ZXIgKi9cbiAgZm9vdGVyPzogYW55O1xuICAvKiog6Imy44Gu5oyH5a6aICovXG4gIGNvbG9yPzogQ29sb3JUeXBlO1xuICAvKiog44OY44OD44OA44KSICovXG4gIGhlYWRlck9uVG9wPzogYm9vbGVhbjtcbiAgLyoqIOOCq+OCueOCv2lubGluZSBzdHlsZSAqL1xuICBzdHlsZT86IGFueTtcbn1cblxuY29uc3QgaG9yaXpvbnRhbFN0eWxlOiBDU1NQcm9wZXJ0aWVzID0geyBmbGV4RGlyZWN0aW9uOiAncm93JyB9O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYXJkIGV4dGVuZHMgUHVyZUNvbXBvbmVudDxQcm9wcz4ge1xuICByZW5kZXJIZWFkZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBpbWFnZSwgdGl0bGUsIGhvcml6b250YWwgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBpZiAoaW1hZ2UgJiYgIWhvcml6b250YWwpIHJldHVybiAoPENhcmRJbWFnZT48aW1nIHNyYz17aW1hZ2V9IC8+PC9DYXJkSW1hZ2U+KTtcbiAgICBpZiAoaW1hZ2UgJiYgaG9yaXpvbnRhbCkgcmV0dXJuICg8Q2FyZEltYWdlSG9yaXpvbnRhbCB1cmw9e2ltYWdlfSAvPik7XG4gICAgaWYgKHRpdGxlICYmICFob3Jpem9udGFsKSByZXR1cm4gKDxDYXJkSGVhZGVyPjxoMz57dGl0bGV9PC9oMz48L0NhcmRIZWFkZXI+KTtcblxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY2hpbGRyZW4sIGhvcml6b250YWwsIGZvb3RlciwgY29sb3IgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBjb25zdCBoZWFkZXIgPSB0aGlzLnJlbmRlckhlYWRlcigpO1xuICAgIGNvbnN0IHdyYXBwZXJTdHlsZSA9IGhvcml6b250YWwgPyBob3Jpem9udGFsU3R5bGUgOiB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIChcbiAgICAgIDxCb3ggc3R5bGU9e3dyYXBwZXJTdHlsZX0gY29sb3I9e2NvbG9yfT5cbiAgICAgICAge2hlYWRlcn1cbiAgICAgICAgPENhcmRCb2R5PlxuICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC9DYXJkQm9keT5cbiAgICAgICAge2Zvb3RlciAmJiAoPENhcmRGb290ZXI+e1JlYWN0LkNoaWxkcmVuLm9ubHkoZm9vdGVyKX08L0NhcmRGb290ZXI+KX1cbiAgICAgIDwvQm94PlxuICAgICk7XG4gIH1cbn1cbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBDU1NUcmFuc2l0aW9uIGZyb20gJ3JlYWN0LXRyYW5zaXRpb24tZ3JvdXAvQ1NTVHJhbnNpdGlvbic7XG5pbXBvcnQgQm94LCB7IFByb3BzIGFzIEJveFByb3BzIH0gZnJvbSAnLi4vQm94JztcbmltcG9ydCB7IENTU1R5cGUgfSBmcm9tICcuLi8uLi90eXBlcyc7XG5cbmNvbnN0IFdyYXBwZXIgPSBzdHlsZWQuZGl2PHsgY3NzPzogQ1NTVHlwZSB9PmBcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBvdXRsaW5lOiBub25lO1xuICBjb2xvcjogaW5oZXJpdDtcblxuICAmOmhvdmVyIHtcbiAgICBjb2xvcjogaW5oZXJpdDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIH1cblxuICAkeyh7IGNzcyB9KSA9PiBjc3MgfHwgJyd9XG5gO1xuXG5jb25zdCBUb29sdGlwID0gc3R5bGVkKEJveClgXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgY2xlYXI6IGJvdGg7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDJweCAwIHJnYmEoMCwgMCwgMCwgMC4wNSk7XG4gIHotaW5kZXg6IDk5OTk7XG4gIHBhZGRpbmc6IDAuNXJlbSAwO1xuICB3aWR0aDogYXV0bztcbiAgaGVpZ2h0OiBhdXRvO1xuICBjdXJzb3I6IGF1dG87XG5cbiAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybSwgb3BhY2l0eTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjgpO1xuICBvcGFjaXR5OiAwO1xuXG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybSwgb3BhY2l0eTtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMTAwbXM7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSk7XG5cbiAgJi5zdGFydCB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG5cbiAgJi5lbmQge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC44KTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG5gO1xuXG5pbnRlcmZhY2UgUHJvcHMgZXh0ZW5kcyBCb3hQcm9wcyB7XG4gIC8qKiDjg5zjgr/jg7Pjga7lhoXlrrkgKi9cbiAgbGFiZWw6IFJlYWN0LlJlYWN0Tm9kZTtcbiAgLyoqIOWGheWuueOBruODquOCueODiCAqL1xuICBjaGlsZHJlbj86IFJlYWN0LlJlYWN0Tm9kZSB8IFJlYWN0LlJlYWN0Tm9kZTtcbiAgLyoqIOWPs+OBruWfuua6luOBp+ODquOCueODiOOCkuihqOekuuOBmeOCiyAqL1xuICByaWdodD86IGJvb2xlYW47XG4gIC8qKiDlkLnjgY3lh7rjgZfjgYzooajnpLrjgZXjgozjgovloLTmiYAgKi9cbiAgcG9zaXRpb24/OiAndG9wLWxlZnQnIHwgJ3RvcCcgfCAndG9wLXJpZ2h0JyB8ICdib3R0b20tbGVmdCcgfCAnYm90dG9tJyB8ICdib3R0b20tcmlnaHQnO1xuICAvKiog44Kr44K544K/44OgQ1NT5a6a576pICovXG4gIGNzcz86IENTU1R5cGU7XG59XG5cbmludGVyZmFjZSBTdGF0ZSB7XG4gIHNob3c6IGJvb2xlYW47XG4gIHN0eWxlOiBhbnk7XG59XG5cbmZ1bmN0aW9uIGdldFBvc2l0aW9uKHBvc2l0aW9uPzogYW55KSB7XG4gIHN3aXRjaCAocG9zaXRpb24pIHtcbiAgICBjYXNlICd0b3AtbGVmdCc6IHtcbiAgICAgIHJldHVybiB7IHRvcDogMCwgbGVmdDogMCwgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgtMTAwJSknIH07XG4gICAgfVxuICAgIGNhc2UgJ3RvcC1yaWdodCc6IHtcbiAgICAgIHJldHVybiB7IHRvcDogMCwgcmlnaHQ6IDAsIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoLTEwMCUpJyB9O1xuICAgIH1cbiAgICBjYXNlICd0b3AnOiB7XG4gICAgICByZXR1cm4geyB0b3A6ICAwLCBsZWZ0OiAnNTAlJywgdHJhbnNmb3JtOiAndHJhbnNsYXRlKC01MCUsIC0xMDAlKScgfTtcbiAgICB9XG4gICAgY2FzZSAnYm90dG9tLWxlZnQnOiB7XG4gICAgICByZXR1cm4geyBib3R0b206IDAsIGxlZnQ6IDAsIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoMTAwJSknIH07XG4gICAgfVxuICAgIGNhc2UgJ2JvdHRvbS1yaWdodCc6IHtcbiAgICAgIHJldHVybiB7IGJvdHRvbTogMCwgcmlnaHQ6IDAsIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoMTAwJSknIH07XG4gICAgfVxuICAgIGNhc2UgJ2JvdHRvbSc6IHtcbiAgICAgIHJldHVybiB7IGJvdHRvbTogMCwgbGVmdDogJzUwJScsIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZSgtNTAlLCAxMDAlKScgfTtcbiAgICB9XG4gICAgZGVmYXVsdDoge1xuICAgICAgcmV0dXJuIHsgdG9wOiAwLCBsZWZ0OiAwLCB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKDEwMCUpJyB9O1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb3BvdmVyIGV4dGVuZHMgQ29tcG9uZW50PFByb3BzLCBTdGF0ZT4ge1xuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIHBvc2l0aW9uOiAnYm90dG9tLWxlZnQnLFxuICAgIGNvbG9yOiAnd2hpdGUnLFxuICAgIHN0eWxlOiB7fSxcbiAgfTtcblxuICBzdGF0ZSA9IHsgc2hvdzogZmFsc2UsIHN0eWxlOiB7fSB9O1xuXG4gIHNob3VsZENvbXBvbmVudFVwZGF0ZShwcm9wczogUHJvcHMsIHN0YXRlOiBTdGF0ZSkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlLnNob3cgIT09IHN0YXRlLnNob3cgfHwgdGhpcy5wcm9wcy5sYWJlbCAhPT0gcHJvcHMubGFiZWw7XG4gIH1cblxuICBvcGVuRHJvcGRvd24gPSAoKSA9PiB7XG4gICAgaWYgKHRoaXMuc3RhdGUuc2hvdykgcmV0dXJuO1xuXG4gICAgY29uc3Qgc3R5bGUgPSBnZXRQb3NpdGlvbih0aGlzLnByb3BzLnBvc2l0aW9uKTtcbiAgICB0aGlzLnNldFN0YXRlKHsgc3R5bGUsIHNob3c6IHRydWUgfSk7XG4gIH1cblxuICBjbG9zZURyb3Bkb3duID0gKCkgPT4ge1xuICAgIGlmICh0aGlzLnN0YXRlLnNob3cpIHRoaXMuc2V0U3RhdGUoeyBzaG93OiBmYWxzZSB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGxhYmVsLCBjaGlsZHJlbiwgc3R5bGUsIGNzcywgLi4ucmVzdCB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IHNob3cgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgdG9vbHRpcFN0eWxlID0geyAuLi5zdHlsZSwgLi4udGhpcy5zdGF0ZS5zdHlsZSB9O1xuICAgIHJldHVybiAoXG4gICAgICA8V3JhcHBlclxuICAgICAgICB0YWJJbmRleD17MH1cbiAgICAgICAgcm9sZT1cImJ1dHRvblwiXG4gICAgICAgIG9uRm9jdXM9e3RoaXMub3BlbkRyb3Bkb3dufVxuICAgICAgICBvbkJsdXI9e3RoaXMuY2xvc2VEcm9wZG93bn1cbiAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogJ2Jsb2NrJywgcG9zaXRpb246ICdyZWxhdGl2ZScgfX1cbiAgICAgICAgY3NzPXtjc3N9XG4gICAgICA+XG4gICAgICAgIHtsYWJlbH1cbiAgICAgICAgPENTU1RyYW5zaXRpb25cbiAgICAgICAgICBjbGFzc05hbWVzPXt7XG4gICAgICAgICAgICBhcHBlYXI6ICdzdGFydCcsXG4gICAgICAgICAgICBlbnRlckRvbmU6ICdzdGFydCcsXG4gICAgICAgICAgICBleGl0OiAnZW5kJyxcbiAgICAgICAgICB9fVxuICAgICAgICAgIGluPXtzaG93fVxuICAgICAgICAgIHRpbWVvdXQ9ezE1MH1cbiAgICAgICAgICB1bm1vdW50T25FeGl0XG4gICAgICAgID5cbiAgICAgICAgICA8VG9vbHRpcCByb2xlPVwidG9vbHRpcFwiIHN0eWxlPXt0b29sdGlwU3R5bGV9IHsuLi5yZXN0fT5cbiAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgICA8L1Rvb2x0aXA+XG4gICAgICAgIDwvQ1NTVHJhbnNpdGlvbj5cbiAgICAgIDwvV3JhcHBlcj5cbiAgICApO1xuICB9XG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCwgSFRNTEF0dHJpYnV0ZXMsIEZyYWdtZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY3JlYXRlUG9ydGFsIH0gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBDU1NUcmFuc2l0aW9uIGZyb20gJ3JlYWN0LXRyYW5zaXRpb24tZ3JvdXAvQ1NTVHJhbnNpdGlvbic7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBCb3ggZnJvbSAnLi4vQm94JztcbmltcG9ydCBDb2wgZnJvbSAnLi4vR3JpZC9Db2wnO1xuaW1wb3J0IHsgQ29sb3JUeXBlLCBDb2xTaXplVHlwZSwgQ1NTVHlwZSB9IGZyb20gJy4uLy4uL3R5cGVzJztcblxuY29uc3QgRVNDX0tFWSA9IDI3O1xuXG5jb25zdCBXcmFwcGVyID0gc3R5bGVkLmRpdjx7IGNzcz86IENTU1R5cGUsIHNoYWRvd0NvbG9yPzogc3RyaW5nIH0+YFxuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgei1pbmRleDogOTk5NztcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBhZGRpbmc6IDAuNzVyZW07XG5cbiAgLnYtbW9kYWwtYm9keSB7XG4gICAgei1pbmRleDogOTk5OTtcbiAgICBtYXJnaW46IDA7XG4gICAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybSwgb3BhY2l0eTtcbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiB0cmFuc2Zvcm0sIG9wYWNpdHk7XG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKTtcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAyMDBtcztcbiAgfVxuXG4gICYuZmFkZS1lbnRlciA+IC52LW1vZGFsLWJvZHkge1xuICAgIG9wYWNpdHk6IDAuMDE7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjgpO1xuICB9XG4gICYuZmFkZS1lbnRlci1hY3RpdmUgPiAudi1tb2RhbC1ib2R5IHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIH1cbiAgJi5mYWRlLWV4aXQgPiAudi1tb2RhbC1ib2R5IHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIH1cbiAgJi5mYWRlLWV4aXQtYWN0aXZlID4gLnYtbW9kYWwtYm9keSB7XG4gICAgb3BhY2l0eTogMC4wMTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOCk7XG4gIH1cblxuICAudi1tb2RhbC1zaGFkb3cge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICB0b3A6IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHsoeyBzaGFkb3dDb2xvciB9KSA9PiBzaGFkb3dDb2xvciB8fCAndHJhbnNwYXJlbnQnfTtcbiAgfVxuXG4gICR7KHsgY3NzIH0pID0+IGNzcyB8fCB7fX1cbmA7XG5cbmludGVyZmFjZSBQcm9wcyBleHRlbmRzIEhUTUxBdHRyaWJ1dGVzPEhUTUxEaXZFbGVtZW50PiB7XG4gIC8qKiDjg5jjg4Pjg4Djg7zjga7jgr/jgqTjg4jjg6vmlofoqIAgKi9cbiAgdGl0bGU/OiBhbnk7XG4gIC8qKiAxfjEy44Gu44Oi44O844OA44Or44K144Kk44K6ICovXG4gIHNpemU/OiBDb2xTaXplVHlwZTtcbiAgLyoqIHRydWXjga7loLTlkIjjgIHjg6Ljg7zjg4Djg6vjgpLooajnpLrjgZfjgb7jgZnjgIIgKi9cbiAgc2hvdz86IGJvb2xlYW47XG4gIC8qKiDjg6Ljg7zjg4Djg6vjga5ib2R544Gr5YWl44KM44KL5YaF5a65ICovXG4gIGNoaWxkcmVuPzogYW55O1xuICAvKiog44Oi44O844OA44Or44GuZm9vdGVy44Gr5YWl44KM44KL5YaF5a65ICovXG4gIGZvb3Rlcj86IGFueTtcbiAgLyoqIOODouODvOODgOODq+OBruiJsiAqL1xuICBjb2xvcj86IENvbG9yVHlwZTtcbiAgLyoqIOODouODvOODgOODq+OCkumWieOBmOOCi+WHpueQhiAqL1xuICBjbG9zZU1vZGFsOiAoKSA9PiB2b2lkO1xuICAvKiog44Kq44O844OQ44O844Os44Kk44Gu44Kv44Oq44OD44Kv44Gn44Oi44O844OA44Or44Kv44Ot44O844K6ICovXG4gIGNsb3NlT25PdmVybGF5PzogYm9vbGVhbjtcbiAgLyoqIGVzY+ODnOOCv+ODs+OBp+OCr+ODreODvOOCuiAqL1xuICBjbG9zZU9uRXNjPzogYm9vbGVhbjtcbiAgLyoqIG92ZXJsYXnjga7og4zmma/jga7oqK3lrpogKi9cbiAgc2hhZG93Q29sb3I/OiBzdHJpbmc7XG4gIC8qKiDjg6Ljg7zjg4Djg6vlpJbjgavooajnpLrjgZnjgotFbGVtZW50cyAqL1xuICBleHRlcm5hbD86IGFueTtcbiAgLyoqIOOCq+OCueOCv+ODoENTU+Wumue+qSAqL1xuICBjc3M/OiBDU1NUeXBlO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb2RhbCBleHRlbmRzIFB1cmVDb21wb25lbnQ8UHJvcHM+IHtcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBzaG93OiBmYWxzZSxcbiAgICBjb2xvcjogJ3doaXRlJyxcbiAgICBzaXplOiA2LFxuICAgIHNoYWRvd0NvbG9yOiAncmdiYSgxMCwxMCwxMCwuODYpJyxcbiAgfTtcblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICBpZiAodGhpcy5lbGVtZW50KSB7XG4gICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHRoaXMuZWxlbWVudCk7XG4gICAgfVxuICB9XG5cbiAgb25LZXlEb3duID0gKGU6IGFueSkgPT4ge1xuICAgIGlmICh0aGlzLnByb3BzLmNsb3NlT25Fc2MgJiYgZS5rZXlDb2RlID09PSBFU0NfS0VZICYmIHRoaXMucHJvcHMuY2xvc2VNb2RhbCkge1xuICAgICAgdGhpcy5wcm9wcy5jbG9zZU1vZGFsKCk7XG4gICAgfVxuICB9XG5cbiAgb25DbGlja092ZXJsYXkgPSAoKSA9PiB7XG4gICAgaWYgKHRoaXMucHJvcHMuY2xvc2VPbk92ZXJsYXkgJiYgdGhpcy5wcm9wcy5jbG9zZU1vZGFsKSB7XG4gICAgICB0aGlzLnByb3BzLmNsb3NlTW9kYWwoKTtcbiAgICB9XG4gIH1cblxuICBlbGVtZW50PzogSFRNTERpdkVsZW1lbnQ7XG4gIHNob3VsZENsb3NlOiBib29sZWFuIHwgbnVsbCA9IG51bGw7XG5cbiAgcmVuZGVyKCk6IFJlYWN0LlJlYWN0UG9ydGFsIHwgbnVsbCB7XG4gICAgaWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJ1bmRlZmluZWRcIiAmJiAhdGhpcy5lbGVtZW50KSB7XG4gICAgICB0aGlzLmVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5lbGVtZW50KTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5lbGVtZW50KSB7XG4gICAgICBjb25zdCB7XG4gICAgICAgIHNob3csIHNpemUsIHRpdGxlLCBjaGlsZHJlbiwgZm9vdGVyLCBjb2xvciwgb25DbGljaywgLi4ucmVzdFxuICAgICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgIHJldHVybiBjcmVhdGVQb3J0YWwoKFxuICAgICAgICA8Q1NTVHJhbnNpdGlvblxuICAgICAgICAgIGNsYXNzTmFtZXM9XCJmYWRlXCJcbiAgICAgICAgICB0aW1lb3V0PXsyMDB9XG4gICAgICAgICAgaW49e3Nob3d9XG4gICAgICAgICAgdW5tb3VudE9uRXhpdFxuICAgICAgICA+XG4gICAgICAgICAgPFdyYXBwZXIgcm9sZT1cImRvY3VtZW50XCIgey4uLnJlc3R9PlxuICAgICAgICAgICAgPENvbCBjbGFzc05hbWU9XCJ2LW1vZGFsLWJvZHlcIiBzaXplPXtzaXplfSBhdXRvIHJvbGU9XCJkaWFsb2dcIj5cbiAgICAgICAgICAgICAgPEJveCBjb2xvcj17Y29sb3J9PlxuICAgICAgICAgICAgICAgIHt0aXRsZSA/IHRpdGxlIDogbnVsbH1cbiAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgICAgICAgICAge2Zvb3RlciA/IGZvb3RlciA6IG51bGx9XG4gICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICB7dGhpcy5wcm9wcy5leHRlcm5hbH1cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidi1tb2RhbC1zaGFkb3dcIiBvbkNsaWNrPXt0aGlzLm9uQ2xpY2tPdmVybGF5fSAvPlxuICAgICAgICAgIDwvV3JhcHBlcj5cbiAgICAgICAgPC9DU1NUcmFuc2l0aW9uPlxuICAgICAgKSwgdGhpcy5lbGVtZW50KTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5nZXRDaGlsZE1hcHBpbmcgPSBnZXRDaGlsZE1hcHBpbmc7XG5leHBvcnRzLm1lcmdlQ2hpbGRNYXBwaW5ncyA9IG1lcmdlQ2hpbGRNYXBwaW5ncztcbmV4cG9ydHMuZ2V0SW5pdGlhbENoaWxkTWFwcGluZyA9IGdldEluaXRpYWxDaGlsZE1hcHBpbmc7XG5leHBvcnRzLmdldE5leHRDaGlsZE1hcHBpbmcgPSBnZXROZXh0Q2hpbGRNYXBwaW5nO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZShcInJlYWN0XCIpO1xuXG4vKipcbiAqIEdpdmVuIGB0aGlzLnByb3BzLmNoaWxkcmVuYCwgcmV0dXJuIGFuIG9iamVjdCBtYXBwaW5nIGtleSB0byBjaGlsZC5cbiAqXG4gKiBAcGFyYW0geyp9IGNoaWxkcmVuIGB0aGlzLnByb3BzLmNoaWxkcmVuYFxuICogQHJldHVybiB7b2JqZWN0fSBNYXBwaW5nIG9mIGtleSB0byBjaGlsZFxuICovXG5mdW5jdGlvbiBnZXRDaGlsZE1hcHBpbmcoY2hpbGRyZW4sIG1hcEZuKSB7XG4gIHZhciBtYXBwZXIgPSBmdW5jdGlvbiBtYXBwZXIoY2hpbGQpIHtcbiAgICByZXR1cm4gbWFwRm4gJiYgKDAsIF9yZWFjdC5pc1ZhbGlkRWxlbWVudCkoY2hpbGQpID8gbWFwRm4oY2hpbGQpIDogY2hpbGQ7XG4gIH07XG5cbiAgdmFyIHJlc3VsdCA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gIGlmIChjaGlsZHJlbikgX3JlYWN0LkNoaWxkcmVuLm1hcChjaGlsZHJlbiwgZnVuY3Rpb24gKGMpIHtcbiAgICByZXR1cm4gYztcbiAgfSkuZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAvLyBydW4gdGhlIG1hcCBmdW5jdGlvbiBoZXJlIGluc3RlYWQgc28gdGhhdCB0aGUga2V5IGlzIHRoZSBjb21wdXRlZCBvbmVcbiAgICByZXN1bHRbY2hpbGQua2V5XSA9IG1hcHBlcihjaGlsZCk7XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufVxuLyoqXG4gKiBXaGVuIHlvdSdyZSBhZGRpbmcgb3IgcmVtb3ZpbmcgY2hpbGRyZW4gc29tZSBtYXkgYmUgYWRkZWQgb3IgcmVtb3ZlZCBpbiB0aGVcbiAqIHNhbWUgcmVuZGVyIHBhc3MuIFdlIHdhbnQgdG8gc2hvdyAqYm90aCogc2luY2Ugd2Ugd2FudCB0byBzaW11bHRhbmVvdXNseVxuICogYW5pbWF0ZSBlbGVtZW50cyBpbiBhbmQgb3V0LiBUaGlzIGZ1bmN0aW9uIHRha2VzIGEgcHJldmlvdXMgc2V0IG9mIGtleXNcbiAqIGFuZCBhIG5ldyBzZXQgb2Yga2V5cyBhbmQgbWVyZ2VzIHRoZW0gd2l0aCBpdHMgYmVzdCBndWVzcyBvZiB0aGUgY29ycmVjdFxuICogb3JkZXJpbmcuIEluIHRoZSBmdXR1cmUgd2UgbWF5IGV4cG9zZSBzb21lIG9mIHRoZSB1dGlsaXRpZXMgaW5cbiAqIFJlYWN0TXVsdGlDaGlsZCB0byBtYWtlIHRoaXMgZWFzeSwgYnV0IGZvciBub3cgUmVhY3QgaXRzZWxmIGRvZXMgbm90XG4gKiBkaXJlY3RseSBoYXZlIHRoaXMgY29uY2VwdCBvZiB0aGUgdW5pb24gb2YgcHJldkNoaWxkcmVuIGFuZCBuZXh0Q2hpbGRyZW5cbiAqIHNvIHdlIGltcGxlbWVudCBpdCBoZXJlLlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBwcmV2IHByZXYgY2hpbGRyZW4gYXMgcmV0dXJuZWQgZnJvbVxuICogYFJlYWN0VHJhbnNpdGlvbkNoaWxkTWFwcGluZy5nZXRDaGlsZE1hcHBpbmcoKWAuXG4gKiBAcGFyYW0ge29iamVjdH0gbmV4dCBuZXh0IGNoaWxkcmVuIGFzIHJldHVybmVkIGZyb21cbiAqIGBSZWFjdFRyYW5zaXRpb25DaGlsZE1hcHBpbmcuZ2V0Q2hpbGRNYXBwaW5nKClgLlxuICogQHJldHVybiB7b2JqZWN0fSBhIGtleSBzZXQgdGhhdCBjb250YWlucyBhbGwga2V5cyBpbiBgcHJldmAgYW5kIGFsbCBrZXlzXG4gKiBpbiBgbmV4dGAgaW4gYSByZWFzb25hYmxlIG9yZGVyLlxuICovXG5cblxuZnVuY3Rpb24gbWVyZ2VDaGlsZE1hcHBpbmdzKHByZXYsIG5leHQpIHtcbiAgcHJldiA9IHByZXYgfHwge307XG4gIG5leHQgPSBuZXh0IHx8IHt9O1xuXG4gIGZ1bmN0aW9uIGdldFZhbHVlRm9yS2V5KGtleSkge1xuICAgIHJldHVybiBrZXkgaW4gbmV4dCA/IG5leHRba2V5XSA6IHByZXZba2V5XTtcbiAgfSAvLyBGb3IgZWFjaCBrZXkgb2YgYG5leHRgLCB0aGUgbGlzdCBvZiBrZXlzIHRvIGluc2VydCBiZWZvcmUgdGhhdCBrZXkgaW5cbiAgLy8gdGhlIGNvbWJpbmVkIGxpc3RcblxuXG4gIHZhciBuZXh0S2V5c1BlbmRpbmcgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICB2YXIgcGVuZGluZ0tleXMgPSBbXTtcblxuICBmb3IgKHZhciBwcmV2S2V5IGluIHByZXYpIHtcbiAgICBpZiAocHJldktleSBpbiBuZXh0KSB7XG4gICAgICBpZiAocGVuZGluZ0tleXMubGVuZ3RoKSB7XG4gICAgICAgIG5leHRLZXlzUGVuZGluZ1twcmV2S2V5XSA9IHBlbmRpbmdLZXlzO1xuICAgICAgICBwZW5kaW5nS2V5cyA9IFtdO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBwZW5kaW5nS2V5cy5wdXNoKHByZXZLZXkpO1xuICAgIH1cbiAgfVxuXG4gIHZhciBpO1xuICB2YXIgY2hpbGRNYXBwaW5nID0ge307XG5cbiAgZm9yICh2YXIgbmV4dEtleSBpbiBuZXh0KSB7XG4gICAgaWYgKG5leHRLZXlzUGVuZGluZ1tuZXh0S2V5XSkge1xuICAgICAgZm9yIChpID0gMDsgaSA8IG5leHRLZXlzUGVuZGluZ1tuZXh0S2V5XS5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgcGVuZGluZ05leHRLZXkgPSBuZXh0S2V5c1BlbmRpbmdbbmV4dEtleV1baV07XG4gICAgICAgIGNoaWxkTWFwcGluZ1tuZXh0S2V5c1BlbmRpbmdbbmV4dEtleV1baV1dID0gZ2V0VmFsdWVGb3JLZXkocGVuZGluZ05leHRLZXkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNoaWxkTWFwcGluZ1tuZXh0S2V5XSA9IGdldFZhbHVlRm9yS2V5KG5leHRLZXkpO1xuICB9IC8vIEZpbmFsbHksIGFkZCB0aGUga2V5cyB3aGljaCBkaWRuJ3QgYXBwZWFyIGJlZm9yZSBhbnkga2V5IGluIGBuZXh0YFxuXG5cbiAgZm9yIChpID0gMDsgaSA8IHBlbmRpbmdLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgY2hpbGRNYXBwaW5nW3BlbmRpbmdLZXlzW2ldXSA9IGdldFZhbHVlRm9yS2V5KHBlbmRpbmdLZXlzW2ldKTtcbiAgfVxuXG4gIHJldHVybiBjaGlsZE1hcHBpbmc7XG59XG5cbmZ1bmN0aW9uIGdldFByb3AoY2hpbGQsIHByb3AsIHByb3BzKSB7XG4gIHJldHVybiBwcm9wc1twcm9wXSAhPSBudWxsID8gcHJvcHNbcHJvcF0gOiBjaGlsZC5wcm9wc1twcm9wXTtcbn1cblxuZnVuY3Rpb24gZ2V0SW5pdGlhbENoaWxkTWFwcGluZyhwcm9wcywgb25FeGl0ZWQpIHtcbiAgcmV0dXJuIGdldENoaWxkTWFwcGluZyhwcm9wcy5jaGlsZHJlbiwgZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgcmV0dXJuICgwLCBfcmVhY3QuY2xvbmVFbGVtZW50KShjaGlsZCwge1xuICAgICAgb25FeGl0ZWQ6IG9uRXhpdGVkLmJpbmQobnVsbCwgY2hpbGQpLFxuICAgICAgaW46IHRydWUsXG4gICAgICBhcHBlYXI6IGdldFByb3AoY2hpbGQsICdhcHBlYXInLCBwcm9wcyksXG4gICAgICBlbnRlcjogZ2V0UHJvcChjaGlsZCwgJ2VudGVyJywgcHJvcHMpLFxuICAgICAgZXhpdDogZ2V0UHJvcChjaGlsZCwgJ2V4aXQnLCBwcm9wcylcbiAgICB9KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGdldE5leHRDaGlsZE1hcHBpbmcobmV4dFByb3BzLCBwcmV2Q2hpbGRNYXBwaW5nLCBvbkV4aXRlZCkge1xuICB2YXIgbmV4dENoaWxkTWFwcGluZyA9IGdldENoaWxkTWFwcGluZyhuZXh0UHJvcHMuY2hpbGRyZW4pO1xuICB2YXIgY2hpbGRyZW4gPSBtZXJnZUNoaWxkTWFwcGluZ3MocHJldkNoaWxkTWFwcGluZywgbmV4dENoaWxkTWFwcGluZyk7XG4gIE9iamVjdC5rZXlzKGNoaWxkcmVuKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICB2YXIgY2hpbGQgPSBjaGlsZHJlbltrZXldO1xuICAgIGlmICghKDAsIF9yZWFjdC5pc1ZhbGlkRWxlbWVudCkoY2hpbGQpKSByZXR1cm47XG4gICAgdmFyIGhhc1ByZXYgPSBrZXkgaW4gcHJldkNoaWxkTWFwcGluZztcbiAgICB2YXIgaGFzTmV4dCA9IGtleSBpbiBuZXh0Q2hpbGRNYXBwaW5nO1xuICAgIHZhciBwcmV2Q2hpbGQgPSBwcmV2Q2hpbGRNYXBwaW5nW2tleV07XG4gICAgdmFyIGlzTGVhdmluZyA9ICgwLCBfcmVhY3QuaXNWYWxpZEVsZW1lbnQpKHByZXZDaGlsZCkgJiYgIXByZXZDaGlsZC5wcm9wcy5pbjsgLy8gaXRlbSBpcyBuZXcgKGVudGVyaW5nKVxuXG4gICAgaWYgKGhhc05leHQgJiYgKCFoYXNQcmV2IHx8IGlzTGVhdmluZykpIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdlbnRlcmluZycsIGtleSlcbiAgICAgIGNoaWxkcmVuW2tleV0gPSAoMCwgX3JlYWN0LmNsb25lRWxlbWVudCkoY2hpbGQsIHtcbiAgICAgICAgb25FeGl0ZWQ6IG9uRXhpdGVkLmJpbmQobnVsbCwgY2hpbGQpLFxuICAgICAgICBpbjogdHJ1ZSxcbiAgICAgICAgZXhpdDogZ2V0UHJvcChjaGlsZCwgJ2V4aXQnLCBuZXh0UHJvcHMpLFxuICAgICAgICBlbnRlcjogZ2V0UHJvcChjaGlsZCwgJ2VudGVyJywgbmV4dFByb3BzKVxuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmICghaGFzTmV4dCAmJiBoYXNQcmV2ICYmICFpc0xlYXZpbmcpIHtcbiAgICAgIC8vIGl0ZW0gaXMgb2xkIChleGl0aW5nKVxuICAgICAgLy8gY29uc29sZS5sb2coJ2xlYXZpbmcnLCBrZXkpXG4gICAgICBjaGlsZHJlbltrZXldID0gKDAsIF9yZWFjdC5jbG9uZUVsZW1lbnQpKGNoaWxkLCB7XG4gICAgICAgIGluOiBmYWxzZVxuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChoYXNOZXh0ICYmIGhhc1ByZXYgJiYgKDAsIF9yZWFjdC5pc1ZhbGlkRWxlbWVudCkocHJldkNoaWxkKSkge1xuICAgICAgLy8gaXRlbSBoYXNuJ3QgY2hhbmdlZCB0cmFuc2l0aW9uIHN0YXRlc1xuICAgICAgLy8gY29weSBvdmVyIHRoZSBsYXN0IHRyYW5zaXRpb24gcHJvcHM7XG4gICAgICAvLyBjb25zb2xlLmxvZygndW5jaGFuZ2VkJywga2V5KVxuICAgICAgY2hpbGRyZW5ba2V5XSA9ICgwLCBfcmVhY3QuY2xvbmVFbGVtZW50KShjaGlsZCwge1xuICAgICAgICBvbkV4aXRlZDogb25FeGl0ZWQuYmluZChudWxsLCBjaGlsZCksXG4gICAgICAgIGluOiBwcmV2Q2hpbGQucHJvcHMuaW4sXG4gICAgICAgIGV4aXQ6IGdldFByb3AoY2hpbGQsICdleGl0JywgbmV4dFByb3BzKSxcbiAgICAgICAgZW50ZXI6IGdldFByb3AoY2hpbGQsICdlbnRlcicsIG5leHRQcm9wcylcbiAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBjaGlsZHJlbjtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIF9wcm9wVHlwZXMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpKTtcblxudmFyIF9yZWFjdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcblxudmFyIF9yZWFjdExpZmVjeWNsZXNDb21wYXQgPSByZXF1aXJlKFwicmVhY3QtbGlmZWN5Y2xlcy1jb21wYXRcIik7XG5cbnZhciBfQ2hpbGRNYXBwaW5nID0gcmVxdWlyZShcIi4vdXRpbHMvQ2hpbGRNYXBwaW5nXCIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKSB7IGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9OyB2YXIgdGFyZ2V0ID0ge307IHZhciBzb3VyY2VLZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTsgdmFyIGtleSwgaTsgZm9yIChpID0gMDsgaSA8IHNvdXJjZUtleXMubGVuZ3RoOyBpKyspIHsga2V5ID0gc291cmNlS2V5c1tpXTsgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIF9leHRlbmRzKCkgeyBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07IHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0c0xvb3NlKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcy5wcm90b3R5cGUpOyBzdWJDbGFzcy5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBzdWJDbGFzczsgc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHsgaWYgKHNlbGYgPT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIHNlbGY7IH1cblxudmFyIHZhbHVlcyA9IE9iamVjdC52YWx1ZXMgfHwgZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4gT2JqZWN0LmtleXMob2JqKS5tYXAoZnVuY3Rpb24gKGspIHtcbiAgICByZXR1cm4gb2JqW2tdO1xuICB9KTtcbn07XG5cbnZhciBkZWZhdWx0UHJvcHMgPSB7XG4gIGNvbXBvbmVudDogJ2RpdicsXG4gIGNoaWxkRmFjdG9yeTogZnVuY3Rpb24gY2hpbGRGYWN0b3J5KGNoaWxkKSB7XG4gICAgcmV0dXJuIGNoaWxkO1xuICB9XG4gIC8qKlxuICAgKiBUaGUgYDxUcmFuc2l0aW9uR3JvdXA+YCBjb21wb25lbnQgbWFuYWdlcyBhIHNldCBvZiB0cmFuc2l0aW9uIGNvbXBvbmVudHNcbiAgICogKGA8VHJhbnNpdGlvbj5gIGFuZCBgPENTU1RyYW5zaXRpb24+YCkgaW4gYSBsaXN0LiBMaWtlIHdpdGggdGhlIHRyYW5zaXRpb25cbiAgICogY29tcG9uZW50cywgYDxUcmFuc2l0aW9uR3JvdXA+YCBpcyBhIHN0YXRlIG1hY2hpbmUgZm9yIG1hbmFnaW5nIHRoZSBtb3VudGluZ1xuICAgKiBhbmQgdW5tb3VudGluZyBvZiBjb21wb25lbnRzIG92ZXIgdGltZS5cbiAgICpcbiAgICogQ29uc2lkZXIgdGhlIGV4YW1wbGUgYmVsb3cuIEFzIGl0ZW1zIGFyZSByZW1vdmVkIG9yIGFkZGVkIHRvIHRoZSBUb2RvTGlzdCB0aGVcbiAgICogYGluYCBwcm9wIGlzIHRvZ2dsZWQgYXV0b21hdGljYWxseSBieSB0aGUgYDxUcmFuc2l0aW9uR3JvdXA+YC5cbiAgICpcbiAgICogTm90ZSB0aGF0IGA8VHJhbnNpdGlvbkdyb3VwPmAgIGRvZXMgbm90IGRlZmluZSBhbnkgYW5pbWF0aW9uIGJlaGF2aW9yIVxuICAgKiBFeGFjdGx5IF9ob3dfIGEgbGlzdCBpdGVtIGFuaW1hdGVzIGlzIHVwIHRvIHRoZSBpbmRpdmlkdWFsIHRyYW5zaXRpb25cbiAgICogY29tcG9uZW50LiBUaGlzIG1lYW5zIHlvdSBjYW4gbWl4IGFuZCBtYXRjaCBhbmltYXRpb25zIGFjcm9zcyBkaWZmZXJlbnQgbGlzdFxuICAgKiBpdGVtcy5cbiAgICovXG5cbn07XG5cbnZhciBUcmFuc2l0aW9uR3JvdXAgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzTG9vc2UoVHJhbnNpdGlvbkdyb3VwLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBUcmFuc2l0aW9uR3JvdXAocHJvcHMsIGNvbnRleHQpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfdGhpcyA9IF9SZWFjdCRDb21wb25lbnQuY2FsbCh0aGlzLCBwcm9wcywgY29udGV4dCkgfHwgdGhpcztcblxuICAgIHZhciBoYW5kbGVFeGl0ZWQgPSBfdGhpcy5oYW5kbGVFeGl0ZWQuYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKSk7IC8vIEluaXRpYWwgY2hpbGRyZW4gc2hvdWxkIGFsbCBiZSBlbnRlcmluZywgZGVwZW5kZW50IG9uIGFwcGVhclxuXG5cbiAgICBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGhhbmRsZUV4aXRlZDogaGFuZGxlRXhpdGVkLFxuICAgICAgZmlyc3RSZW5kZXI6IHRydWVcbiAgICB9O1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBUcmFuc2l0aW9uR3JvdXAucHJvdG90eXBlO1xuXG4gIF9wcm90by5nZXRDaGlsZENvbnRleHQgPSBmdW5jdGlvbiBnZXRDaGlsZENvbnRleHQoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRyYW5zaXRpb25Hcm91cDoge1xuICAgICAgICBpc01vdW50aW5nOiAhdGhpcy5hcHBlYXJlZFxuICAgICAgfVxuICAgIH07XG4gIH07XG5cbiAgX3Byb3RvLmNvbXBvbmVudERpZE1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5hcHBlYXJlZCA9IHRydWU7XG4gICAgdGhpcy5tb3VudGVkID0gdHJ1ZTtcbiAgfTtcblxuICBfcHJvdG8uY29tcG9uZW50V2lsbFVubW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLm1vdW50ZWQgPSBmYWxzZTtcbiAgfTtcblxuICBUcmFuc2l0aW9uR3JvdXAuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzID0gZnVuY3Rpb24gZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzKG5leHRQcm9wcywgX3JlZikge1xuICAgIHZhciBwcmV2Q2hpbGRNYXBwaW5nID0gX3JlZi5jaGlsZHJlbixcbiAgICAgICAgaGFuZGxlRXhpdGVkID0gX3JlZi5oYW5kbGVFeGl0ZWQsXG4gICAgICAgIGZpcnN0UmVuZGVyID0gX3JlZi5maXJzdFJlbmRlcjtcbiAgICByZXR1cm4ge1xuICAgICAgY2hpbGRyZW46IGZpcnN0UmVuZGVyID8gKDAsIF9DaGlsZE1hcHBpbmcuZ2V0SW5pdGlhbENoaWxkTWFwcGluZykobmV4dFByb3BzLCBoYW5kbGVFeGl0ZWQpIDogKDAsIF9DaGlsZE1hcHBpbmcuZ2V0TmV4dENoaWxkTWFwcGluZykobmV4dFByb3BzLCBwcmV2Q2hpbGRNYXBwaW5nLCBoYW5kbGVFeGl0ZWQpLFxuICAgICAgZmlyc3RSZW5kZXI6IGZhbHNlXG4gICAgfTtcbiAgfTtcblxuICBfcHJvdG8uaGFuZGxlRXhpdGVkID0gZnVuY3Rpb24gaGFuZGxlRXhpdGVkKGNoaWxkLCBub2RlKSB7XG4gICAgdmFyIGN1cnJlbnRDaGlsZE1hcHBpbmcgPSAoMCwgX0NoaWxkTWFwcGluZy5nZXRDaGlsZE1hcHBpbmcpKHRoaXMucHJvcHMuY2hpbGRyZW4pO1xuICAgIGlmIChjaGlsZC5rZXkgaW4gY3VycmVudENoaWxkTWFwcGluZykgcmV0dXJuO1xuXG4gICAgaWYgKGNoaWxkLnByb3BzLm9uRXhpdGVkKSB7XG4gICAgICBjaGlsZC5wcm9wcy5vbkV4aXRlZChub2RlKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5tb3VudGVkKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKGZ1bmN0aW9uIChzdGF0ZSkge1xuICAgICAgICB2YXIgY2hpbGRyZW4gPSBfZXh0ZW5kcyh7fSwgc3RhdGUuY2hpbGRyZW4pO1xuXG4gICAgICAgIGRlbGV0ZSBjaGlsZHJlbltjaGlsZC5rZXldO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGNoaWxkcmVuOiBjaGlsZHJlblxuICAgICAgICB9O1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIF90aGlzJHByb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgQ29tcG9uZW50ID0gX3RoaXMkcHJvcHMuY29tcG9uZW50LFxuICAgICAgICBjaGlsZEZhY3RvcnkgPSBfdGhpcyRwcm9wcy5jaGlsZEZhY3RvcnksXG4gICAgICAgIHByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UoX3RoaXMkcHJvcHMsIFtcImNvbXBvbmVudFwiLCBcImNoaWxkRmFjdG9yeVwiXSk7XG5cbiAgICB2YXIgY2hpbGRyZW4gPSB2YWx1ZXModGhpcy5zdGF0ZS5jaGlsZHJlbikubWFwKGNoaWxkRmFjdG9yeSk7XG4gICAgZGVsZXRlIHByb3BzLmFwcGVhcjtcbiAgICBkZWxldGUgcHJvcHMuZW50ZXI7XG4gICAgZGVsZXRlIHByb3BzLmV4aXQ7XG5cbiAgICBpZiAoQ29tcG9uZW50ID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gY2hpbGRyZW47XG4gICAgfVxuXG4gICAgcmV0dXJuIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoQ29tcG9uZW50LCBwcm9wcywgY2hpbGRyZW4pO1xuICB9O1xuXG4gIHJldHVybiBUcmFuc2l0aW9uR3JvdXA7XG59KF9yZWFjdC5kZWZhdWx0LkNvbXBvbmVudCk7XG5cblRyYW5zaXRpb25Hcm91cC5jaGlsZENvbnRleHRUeXBlcyA9IHtcbiAgdHJhbnNpdGlvbkdyb3VwOiBfcHJvcFR5cGVzLmRlZmF1bHQub2JqZWN0LmlzUmVxdWlyZWRcbn07XG5UcmFuc2l0aW9uR3JvdXAucHJvcFR5cGVzID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8ge1xuICAvKipcbiAgICogYDxUcmFuc2l0aW9uR3JvdXA+YCByZW5kZXJzIGEgYDxkaXY+YCBieSBkZWZhdWx0LiBZb3UgY2FuIGNoYW5nZSB0aGlzXG4gICAqIGJlaGF2aW9yIGJ5IHByb3ZpZGluZyBhIGBjb21wb25lbnRgIHByb3AuXG4gICAqIElmIHlvdSB1c2UgUmVhY3QgdjE2KyBhbmQgd291bGQgbGlrZSB0byBhdm9pZCBhIHdyYXBwaW5nIGA8ZGl2PmAgZWxlbWVudFxuICAgKiB5b3UgY2FuIHBhc3MgaW4gYGNvbXBvbmVudD17bnVsbH1gLiBUaGlzIGlzIHVzZWZ1bCBpZiB0aGUgd3JhcHBpbmcgZGl2XG4gICAqIGJvcmtzIHlvdXIgY3NzIHN0eWxlcy5cbiAgICovXG4gIGNvbXBvbmVudDogX3Byb3BUeXBlcy5kZWZhdWx0LmFueSxcblxuICAvKipcbiAgICogQSBzZXQgb2YgYDxUcmFuc2l0aW9uPmAgY29tcG9uZW50cywgdGhhdCBhcmUgdG9nZ2xlZCBgaW5gIGFuZCBvdXQgYXMgdGhleVxuICAgKiBsZWF2ZS4gdGhlIGA8VHJhbnNpdGlvbkdyb3VwPmAgd2lsbCBpbmplY3Qgc3BlY2lmaWMgdHJhbnNpdGlvbiBwcm9wcywgc29cbiAgICogcmVtZW1iZXIgdG8gc3ByZWFkIHRoZW0gdGhyb3VnaCBpZiB5b3UgYXJlIHdyYXBwaW5nIHRoZSBgPFRyYW5zaXRpb24+YCBhc1xuICAgKiB3aXRoIG91ciBgPEZhZGU+YCBleGFtcGxlLlxuICAgKi9cbiAgY2hpbGRyZW46IF9wcm9wVHlwZXMuZGVmYXVsdC5ub2RlLFxuXG4gIC8qKlxuICAgKiBBIGNvbnZlbmllbmNlIHByb3AgdGhhdCBlbmFibGVzIG9yIGRpc2FibGVzIGFwcGVhciBhbmltYXRpb25zXG4gICAqIGZvciBhbGwgY2hpbGRyZW4uIE5vdGUgdGhhdCBzcGVjaWZ5aW5nIHRoaXMgd2lsbCBvdmVycmlkZSBhbnkgZGVmYXVsdHMgc2V0XG4gICAqIG9uIGluZGl2aWR1YWwgY2hpbGRyZW4gVHJhbnNpdGlvbnMuXG4gICAqL1xuICBhcHBlYXI6IF9wcm9wVHlwZXMuZGVmYXVsdC5ib29sLFxuXG4gIC8qKlxuICAgKiBBIGNvbnZlbmllbmNlIHByb3AgdGhhdCBlbmFibGVzIG9yIGRpc2FibGVzIGVudGVyIGFuaW1hdGlvbnNcbiAgICogZm9yIGFsbCBjaGlsZHJlbi4gTm90ZSB0aGF0IHNwZWNpZnlpbmcgdGhpcyB3aWxsIG92ZXJyaWRlIGFueSBkZWZhdWx0cyBzZXRcbiAgICogb24gaW5kaXZpZHVhbCBjaGlsZHJlbiBUcmFuc2l0aW9ucy5cbiAgICovXG4gIGVudGVyOiBfcHJvcFR5cGVzLmRlZmF1bHQuYm9vbCxcblxuICAvKipcbiAgICogQSBjb252ZW5pZW5jZSBwcm9wIHRoYXQgZW5hYmxlcyBvciBkaXNhYmxlcyBleGl0IGFuaW1hdGlvbnNcbiAgICogZm9yIGFsbCBjaGlsZHJlbi4gTm90ZSB0aGF0IHNwZWNpZnlpbmcgdGhpcyB3aWxsIG92ZXJyaWRlIGFueSBkZWZhdWx0cyBzZXRcbiAgICogb24gaW5kaXZpZHVhbCBjaGlsZHJlbiBUcmFuc2l0aW9ucy5cbiAgICovXG4gIGV4aXQ6IF9wcm9wVHlwZXMuZGVmYXVsdC5ib29sLFxuXG4gIC8qKlxuICAgKiBZb3UgbWF5IG5lZWQgdG8gYXBwbHkgcmVhY3RpdmUgdXBkYXRlcyB0byBhIGNoaWxkIGFzIGl0IGlzIGV4aXRpbmcuXG4gICAqIFRoaXMgaXMgZ2VuZXJhbGx5IGRvbmUgYnkgdXNpbmcgYGNsb25lRWxlbWVudGAgaG93ZXZlciBpbiB0aGUgY2FzZSBvZiBhbiBleGl0aW5nXG4gICAqIGNoaWxkIHRoZSBlbGVtZW50IGhhcyBhbHJlYWR5IGJlZW4gcmVtb3ZlZCBhbmQgbm90IGFjY2Vzc2libGUgdG8gdGhlIGNvbnN1bWVyLlxuICAgKlxuICAgKiBJZiB5b3UgZG8gbmVlZCB0byB1cGRhdGUgYSBjaGlsZCBhcyBpdCBsZWF2ZXMgeW91IGNhbiBwcm92aWRlIGEgYGNoaWxkRmFjdG9yeWBcbiAgICogdG8gd3JhcCBldmVyeSBjaGlsZCwgZXZlbiB0aGUgb25lcyB0aGF0IGFyZSBsZWF2aW5nLlxuICAgKlxuICAgKiBAdHlwZSBGdW5jdGlvbihjaGlsZDogUmVhY3RFbGVtZW50KSAtPiBSZWFjdEVsZW1lbnRcbiAgICovXG4gIGNoaWxkRmFjdG9yeTogX3Byb3BUeXBlcy5kZWZhdWx0LmZ1bmNcbn0gOiB7fTtcblRyYW5zaXRpb25Hcm91cC5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHM7XG5cbnZhciBfZGVmYXVsdCA9ICgwLCBfcmVhY3RMaWZlY3ljbGVzQ29tcGF0LnBvbHlmaWxsKShUcmFuc2l0aW9uR3JvdXApO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1tcImRlZmF1bHRcIl07IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNyZWF0ZVBvcnRhbCB9IGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgQ1NTVHJhbnNpdGlvbiBmcm9tICdyZWFjdC10cmFuc2l0aW9uLWdyb3VwL0NTU1RyYW5zaXRpb24nO1xuaW1wb3J0IFRyYW5zaXRpb25Hcm91cCBmcm9tICdyZWFjdC10cmFuc2l0aW9uLWdyb3VwL1RyYW5zaXRpb25Hcm91cCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuaW1wb3J0IEJveCBmcm9tICcuLi9Cb3gnO1xuaW1wb3J0IHsgQ29sb3JUeXBlIH0gZnJvbSAnLi4vLi4vdHlwZXMnO1xuXG50eXBlIFBvc2l0aW9uVHlwZSA9ICd0b3AnIHwgJ3RvcC1sZWZ0JyB8ICd0b3AtcmlnaHQnIHwgJ2JvdHRvbScgfCAnYm90dG9tLWxlZnQnIHwgJ2JvdHRvbS1yaWdodCc7XG5cbmludGVyZmFjZSBUb2FzdFR5cGUge1xuICAvKiog6KqN6K2YSUQgKi9cbiAgaWQ6IHN0cmluZztcbiAgLyoqIOihqOekuuOBmeOCi+WGheWuuSAqL1xuICBtZXNzYWdlPzogUmVhY3QuUmVhY3ROb2RlO1xuICAvKiog6IOM5pmv44Gu6ImyICovXG4gIGNvbG9yPzogQ29sb3JUeXBlO1xuICAvKiog6KGo56S644GV44KM44KL5pmC6ZaTIG51bGzjga7loLTlkIjjga/oh6rli5XjgafplonjgZjjgonjgozjgb7jgZvjgpMgKi9cbiAgZHVyYXRpb24/OiBudW1iZXIgfCBudWxsO1xufVxuXG5pbnRlcmZhY2UgVG9hc3RQcm9wcyBleHRlbmRzIFRvYXN0VHlwZSB7XG4gIGNsZWFyOiAoKSA9PiB2b2lkO1xufVxuXG5jb25zdCBXcmFwcGVyID0gc3R5bGVkKEJveClgXG4gIHBhZGRpbmc6IDAuMzc1ZW0gMC43NWVtO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIHotaW5kZXg6IDk5OTk7XG4gIHdpZHRoOiBmaXQtY29udGVudDtcblxuICB0cmFuc2l0aW9uLXByb3BlcnR5OiB0cmFuc2Zvcm0sIG9wYWNpdHk7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSk7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDI1MG1zO1xuXG4gICYubW92ZS1lbnRlciB7XG4gICAgb3BhY2l0eTogMC4wMTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOCk7XG4gIH1cbiAgJi5tb3ZlLWVudGVyLWFjdGl2ZSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB9XG4gICYubW92ZS1leGl0IHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIH1cbiAgJi5tb3ZlLWV4aXQtYWN0aXZlIHtcbiAgICBvcGFjaXR5OiAwLjAxO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC44KTtcbiAgfVxuYDtcblxuZXhwb3J0IGNsYXNzIFRvYXN0SXRlbSBleHRlbmRzIFB1cmVDb21wb25lbnQ8VG9hc3RQcm9wcz4ge1xuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGR1cmF0aW9uOiA1MDAwLFxuICB9O1xuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGlmICh0aGlzLnByb3BzLmR1cmF0aW9uICE9PSBudWxsKSB7XG4gICAgICBzZXRUaW1lb3V0KHRoaXMucHJvcHMuY2xlYXIsIHRoaXMucHJvcHMuZHVyYXRpb24pO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IG1lc3NhZ2UsIGNvbG9yIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8V3JhcHBlciBib3JkZXJsZXNzIGNvbG9yPXtjb2xvcn0+XG4gICAgICAgIHttZXNzYWdlfVxuICAgICAgPC9XcmFwcGVyPlxuICAgICk7XG4gIH1cbn1cblxuZnVuY3Rpb24gc2V0UG9zaXRpb24ocG9zaXRpb246IHN0cmluZywgaXNGaXhlZD86IGJvb2xlYW4pIHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gIGNvbnN0IGJhc2UgPSBgcG9zaXRpb246ICR7aXNGaXhlZCA/ICdmaXhlZCcgOiAnYWJzb2x1dGUnfTsgei1pbmRleDogOTk5OTsgZGlzcGxheTogZmxleDsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgYDtcbiAgc3dpdGNoIChwb3NpdGlvbikge1xuICAgIGNhc2UgJ2JvdHRvbSc6IHtcbiAgICAgIHJldHVybiBgJHtiYXNlfSBib3R0b206IDFyZW07IGxlZnQ6IDUwJTsgYWxpZ24taXRlbTogY2VudGVyOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7YDtcbiAgICB9XG4gICAgY2FzZSAnYm90dG9tLWxlZnQnOiB7XG4gICAgICByZXR1cm4gYCR7YmFzZX0gYm90dG9tOiAxcmVtOyBsZWZ0OiAxcmVtOyBhbGlnbi1pdGVtOiBmbGV4LXN0YXJ0O2A7XG4gICAgfVxuICAgIGNhc2UgJ2JvdHRvbS1yaWdodCc6IHtcbiAgICAgIHJldHVybiBgJHtiYXNlfSBib3R0b206IDFyZW07IHJpZ2h0OiAxcmVtOyBhbGlnbi1pdGVtOiBmbGV4LWVuZDtgO1xuICAgIH1cbiAgICBjYXNlICd0b3AnOiB7XG4gICAgICByZXR1cm4gYCR7YmFzZX0gdG9wOiAxcmVtOyBsZWZ0OiA1MCU7IGFsaWduLWl0ZW06IGNlbnRlcjsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO2A7XG4gICAgfVxuICAgIGNhc2UgJ3RvcC1sZWZ0Jzoge1xuICAgICAgcmV0dXJuIGAke2Jhc2V9IHRvcDogMXJlbTsgbGVmdDogMXJlbTsgYWxpZ24taXRlbTogZmxleC1zdGFydDtgO1xuICAgIH1cbiAgICBjYXNlICd0b3AtcmlnaHQnOlxuICAgIGRlZmF1bHQ6IHtcbiAgICAgIHJldHVybiBgJHtiYXNlfSB0b3A6IDFyZW07IHJpZ2h0OiAxcmVtOyBhbGlnbi1pdGVtOiBmbGV4LWVuZDtgO1xuICAgIH1cbiAgfVxufVxuXG5pbnRlcmZhY2UgQ29udGFpbmVyUHJvcHMge1xuICAvKiog6KGo56S644GZ44KLVG9hc3Tjga7jg6rjgrnjg4ggKi9cbiAgdG9hc3RzOiBUb2FzdFR5cGVbXTtcbiAgLyoqIHRvYXN044KS5raI44GZ44K/44Kk44Of44Oz44Kw44Gu44Kz44O844Or44OQ44OD44KvICovXG4gIGNsZWFyOiAoaWQ6IHN0cmluZykgPT4gdm9pZDtcbiAgLyoqIHRvcCwgdG9wLXJpZ2h0LCB0b3AtbGVmdCwgYm90dG9tLCBib3R0b20tcmlnaHQsIGJvdHRvbS1sZWZ0ICovXG4gIHBvc2l0aW9uPzogUG9zaXRpb25UeXBlO1xuICAvKiog44K544Kv44Ot44O844Or44GX44Gm44KC5Zu65a6a44Go44GX44Gm6KGo56S644GZ44KLICovXG4gIGZpeGVkPzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9hc3RDb250YWluZXIgZXh0ZW5kcyBDb21wb25lbnQ8Q29udGFpbmVyUHJvcHM+IHtcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICB0b2FzdHM6IFtdLFxuICAgIHBvc2l0aW9uOiAndG9wLXJpZ2h0JyxcbiAgICBmaXhlZDogZmFsc2UsXG4gIH07XG5cbiAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKHByb3BzOiBDb250YWluZXJQcm9wcykge1xuICAgIHJldHVybiBwcm9wcy50b2FzdHMubGVuZ3RoICE9PSB0aGlzLnByb3BzLnRvYXN0cy5sZW5ndGggfHxcbiAgICAgIHByb3BzLnBvc2l0aW9uICE9PSB0aGlzLnByb3BzLnBvc2l0aW9uO1xuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKHByb3BzOiBDb250YWluZXJQcm9wcykge1xuICAgIGlmIChcbiAgICAgIHRoaXMuZWxlbWVudCAmJlxuICAgICAgKHByb3BzLnBvc2l0aW9uICE9PSB0aGlzLnByb3BzLnBvc2l0aW9uIHx8IHByb3BzLmZpeGVkICE9PSB0aGlzLnByb3BzLmZpeGVkKVxuICAgICkge1xuICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLmNzc1RleHQgPSBzZXRQb3NpdGlvbih0aGlzLnByb3BzLnBvc2l0aW9uISwgdGhpcy5wcm9wcy5maXhlZCk7XG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgaWYgKHRoaXMuZWxlbWVudCkgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZCh0aGlzLmVsZW1lbnQpO1xuICB9XG5cbiAgY2xlYXIgPSAoaWQ6IHN0cmluZykgPT4gKCkgPT4ge1xuICAgIHRoaXMucHJvcHMuY2xlYXIoaWQpO1xuICB9XG5cbiAgcmVuZGVyVG9hc3QgPSAoKSA9PiB7XG4gICAgY29uc3QgeyB0b2FzdHMgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxUcmFuc2l0aW9uR3JvdXAgY29tcG9uZW50PXtudWxsfT5cbiAgICAgICAge3RvYXN0cy5tYXAocHJvcHMgPT4gKFxuICAgICAgICAgIDxDU1NUcmFuc2l0aW9uXG4gICAgICAgICAgICBrZXk9e3Byb3BzLmlkfVxuICAgICAgICAgICAgdGltZW91dD17MjUwfVxuICAgICAgICAgICAgY2xhc3NOYW1lcz1cIm1vdmVcIlxuICAgICAgICAgICAgdW5tb3VudE9uRXhpdFxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxUb2FzdEl0ZW1cbiAgICAgICAgICAgICAga2V5PXtwcm9wcy5pZH1cbiAgICAgICAgICAgICAgey4uLnByb3BzfVxuICAgICAgICAgICAgICBjbGVhcj17dGhpcy5jbGVhcihwcm9wcy5pZCl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvQ1NTVHJhbnNpdGlvbj5cbiAgICAgICAgKSl9XG4gICAgICA8L1RyYW5zaXRpb25Hcm91cD5cbiAgICApO1xuICB9XG5cbiAgZWxlbWVudD86IEhUTUxEaXZFbGVtZW50O1xuXG4gIHJlbmRlcigpOiBSZWFjdC5SZWFjdFBvcnRhbCB8IG51bGwge1xuICAgIGlmICh0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnICYmICF0aGlzLmVsZW1lbnQpIHtcbiAgICAgIHRoaXMuZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLmNzc1RleHQgPSBzZXRQb3NpdGlvbih0aGlzLnByb3BzLnBvc2l0aW9uISwgdGhpcy5wcm9wcy5maXhlZCk7XG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuZWxlbWVudCk7XG4gICAgfVxuXG5cbiAgICBpZiAodGhpcy5lbGVtZW50KSB7XG4gICAgICByZXR1cm4gY3JlYXRlUG9ydGFsKHRoaXMucmVuZGVyVG9hc3QoKSwgdGhpcy5lbGVtZW50KTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgQ2hpbGRyZW4sIENTU1Byb3BlcnRpZXMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBzZXRBbGlnbiBmcm9tICcuLi8uLi91dGlscy9zZXRBbGlnbic7XG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uL0J1dHRvbic7XG5pbXBvcnQgeyBDb2xvclR5cGUsIFRoZW1lVHlwZSwgQWxpZ25UeXBlIH0gZnJvbSAnLi4vLi4vdHlwZXMnO1xuXG5jb25zdCBXcmFwcGVyID0gc3R5bGVkLm5hdmBcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiAke3NldEFsaWdufTtcblxuICAudGFiLWNvbnRlbnQge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgICR7KHsgYWxpZ24gfSkgPT4gYWxpZ24gPyAnJyA6ICdmbGV4LWdyb3c6IDE7J31cbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cbmA7XG5cbmludGVyZmFjZSBJdGVtUHJvcHMge1xuICBhbGlnbj86IGFueTtcbiAgYWN0aXZlOiBib29sZWFuO1xufVxuXG5jb25zdCBUYWJJdGVtID0gc3R5bGVkLmRpdjxJdGVtUHJvcHM+YFxuICBkaXNwbGF5OiBibG9jaztcbiAgZmxleC1ncm93OiAxO1xuICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgYSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS50ZXh0fTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgcGFkZGluZzogMC4zNzVlbSAwLjc1ZW07XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xuXG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYmFja2dyb3VuZC1jb2xvcjtcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAxNTBtcztcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4wMyk7XG4gICAgfVxuICB9XG5gO1xuXG5mdW5jdGlvbiBzZXRDb2xvcih7IHRoZW1lLCBjb2xvciB9OiB7IHRoZW1lOiBUaGVtZVR5cGUsIGNvbG9yPzogQ29sb3JUeXBlIH0pIHtcbiAgcmV0dXJuICFjb2xvciA/IHRoZW1lLmJhY2tncm91bmQgOiB0aGVtZVtjb2xvcl07XG59XG5cbmludGVyZmFjZSBJbmRpY2F0b3JQcm9wcyB7XG4gIGNvbG9yPzogQ29sb3JUeXBlO1xuICBzdHlsZT86IENTU1Byb3BlcnRpZXM7XG59XG5cbmNvbnN0IEluZGljYXRvciA9IHN0eWxlZC5kaXY8SW5kaWNhdG9yUHJvcHM+YFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHtzZXRDb2xvcn07XG4gIGhlaWdodDogMnB4O1xuXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdDtcblxuICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtO1xuICB0cmFuc2l0aW9uLXByb3BlcnR5OiB0cmFuc2Zvcm07XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDIwMG1zO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpO1xuYDtcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgLyoqIOiJsuaMh+WumiAqL1xuICBjb2xvcj86IENvbG9yVHlwZTtcbiAgLyoqIGxlZnQgfCByaWdodCB8IGNlbnRlciAqL1xuICBhbGlnbj86IEFsaWduVHlwZTtcbiAgLyoqIOS4gOawl+OBq+ihqOekuuOBmeOCi+acgOWkp+OBruaVsOOBruaMh+WumiAqL1xuICBtYXhJdGVtcz86IG51bWJlcjtcblxuICBjaGlsZHJlbjogYW55O1xufVxuXG5pbnRlcmZhY2UgU3RhdGUge1xuICBzdGFydDogbnVtYmVyO1xuICBjdXJyZW50PzogbnVtYmVyO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUYWJzIGV4dGVuZHMgQ29tcG9uZW50PFByb3BzPiB7XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgbWF4SXRlbXM6IDUsXG4gIH1cblxuICBzdGF0aWMgZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzKHByb3BzOiBQcm9wcywgc3RhdGU6IFN0YXRlKSB7XG4gICAgbGV0IGFjdGl2ZUluZGV4O1xuICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSBwcm9wcy5jaGlsZHJlbi5sZW5ndGg7IGkgPCBsZW47IGkgKz0gMSkge1xuICAgICAgY29uc3QgY2hpbGQgPSBwcm9wcy5jaGlsZHJlbltpXTtcbiAgICAgIGlmIChjaGlsZC5wcm9wcy5hY3RpdmUpIHtcbiAgICAgICAgYWN0aXZlSW5kZXggPSBpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgLi4uc3RhdGUsXG4gICAgICBjdXJyZW50OiBhY3RpdmVJbmRleCxcbiAgICB9O1xuICB9XG5cbiAgc3RhdGljIEl0ZW0gPSBUYWJJdGVtO1xuXG4gIHN0YXRlID0geyBzdGFydDogMCwgY3VycmVudDogbnVsbCB9O1xuXG4gIHNob3VsZENvbXBvbmVudFVwZGF0ZShwcm9wczogUHJvcHMsIHN0YXRlOiBTdGF0ZSkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlLnN0YXJ0ICE9PSBzdGF0ZS5zdGFydCB8fFxuICAgICAgdGhpcy5zdGF0ZS5jdXJyZW50ICE9PSBzdGF0ZS5jdXJyZW50O1xuICB9XG5cbiAgb25OZXh0ID0gKCkgPT4ge1xuICAgIGNvbnN0IHRocmVzaG9sZCA9IHRoaXMucHJvcHMubWF4SXRlbXMhO1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5zdGF0ZS5zdGFydCArIHRocmVzaG9sZDtcbiAgICBjb25zdCBjb3VudCA9IENoaWxkcmVuLmNvdW50KHRoaXMucHJvcHMuY2hpbGRyZW4pXG4gICAgaWYgKHZhbHVlIDwgY291bnQpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBzdGFydDogdmFsdWUgfSk7XG4gICAgfVxuICB9XG5cbiAgb25QcmV2ID0gKCkgPT4ge1xuICAgIGlmICh0aGlzLnN0YXRlLnN0YXJ0ID09PSAwKSByZXR1cm47XG5cbiAgICBjb25zdCB0aHJlc2hvbGQgPSB0aGlzLnByb3BzLm1heEl0ZW1zITtcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuc3RhdGUuc3RhcnQgLSB0aHJlc2hvbGQ7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHN0YXJ0OiB2YWx1ZSA8IDAgPyAwIDogdmFsdWUgfSk7XG4gIH1cblxuICBnZXRJbmRpY2F0b3JQb3NpdGlvbiA9ICgpOiBDU1NQcm9wZXJ0aWVzIHwgdW5kZWZpbmVkID0+IHtcbiAgICBjb25zdCB7IGN1cnJlbnQgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgeyBjaGlsZHJlbiwgbWF4SXRlbXMgfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKGN1cnJlbnQgPT09IG51bGwgfHwgY3VycmVudCA9PT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkO1xuICAgIGlmICghY2hpbGRyZW4gfHwgIWNoaWxkcmVuLmxlbmd0aCkgcmV0dXJuIHVuZGVmaW5lZDtcblxuICAgIGNvbnN0IHRvdGFsID0gY2hpbGRyZW4ubGVuZ3RoID4gbWF4SXRlbXMhID8gbWF4SXRlbXMgOiBjaGlsZHJlbi5sZW5ndGg7XG4gICAgY29uc3QgdmFsdWUgPSAoY3VycmVudCAqIDEwMCkgKyAnJSc7XG5cbiAgICByZXR1cm4ge1xuICAgICAgdmlzaWJpbGl0eTogJ3Zpc2libGUnLFxuICAgICAgd2lkdGg6IGAke01hdGgucm91bmQoKDEwMCAvIHRvdGFsKSl9JWAsXG4gICAgICB0cmFuc2Zvcm06IGB0cmFuc2xhdGVYKCR7dmFsdWV9KWBcbiAgICB9O1xuICB9XG5cbiAgLy8gVE9ETzogbWFrZSB0YWIgc2Nyb2xsYWJsZSB2aWEgYXJyb3cgaWNvbnNcbiAgcmVuZGVyQ2hpbGRyZW4gPSAoY2hpbGQ6IFJlYWN0LlJlYWN0Q2hpbGQsIGluZGV4OiBudW1iZXIpID0+IHtcbiAgICBpZiAodGhpcy5zdGF0ZS5zdGFydCA+IGluZGV4KSByZXR1cm4gbnVsbDtcbiAgICBpZiAodGhpcy5zdGF0ZS5zdGFydCArIGluZGV4ID49IHRoaXMucHJvcHMubWF4SXRlbXMhKSByZXR1cm4gbnVsbDtcbiAgICBpZiAodHlwZW9mIGNoaWxkID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgY2hpbGQgPT09ICdudW1iZXInKSByZXR1cm4gbnVsbDtcblxuICAgIHJldHVybiA8VGFiSXRlbSB7Li4uY2hpbGQucHJvcHN9IGFsaWduPXt0aGlzLnByb3BzLmFsaWdufSAvPjtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNoaWxkcmVuLCBhbGlnbiwgY29sb3IsIG1heEl0ZW1zIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgc3RhcnQgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgdG90YWwgPSBjaGlsZHJlbiA/IGNoaWxkcmVuLmxlbmd0aCA6IDA7XG4gICAgY29uc3Qgc3R5bGUgPSB0aGlzLmdldEluZGljYXRvclBvc2l0aW9uKCk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxXcmFwcGVyIGFsaWduPXthbGlnbn0+XG4gICAgICAgIHtzdGFydCA+IG1heEl0ZW1zISAmJiAoPEJ1dHRvbiBjb2xvcj1cInRleHRcIj57JzwnfTwvQnV0dG9uPil9XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFiLWNvbnRlbnRcIj5cbiAgICAgICAgICB7Q2hpbGRyZW4ubWFwKGNoaWxkcmVuLCB0aGlzLnJlbmRlckNoaWxkcmVuKX1cbiAgICAgICAgICA8SW5kaWNhdG9yIGNvbG9yPXtjb2xvcn0gc3R5bGU9e3N0eWxlfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAge3RvdGFsID4gbWF4SXRlbXMhICYmIHN0YXJ0ID4gbWF4SXRlbXMhICYmICg8QnV0dG9uIGNvbG9yPVwidGV4dFwiPnsnPid9PC9CdXR0b24+KX1cbiAgICAgIDwvV3JhcHBlcj5cbiAgICApO1xuICB9XG59O1xuIiwiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQsIEhUTUxBdHRyaWJ1dGVzIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgQ1NTVHJhbnNpdGlvbiBmcm9tICdyZWFjdC10cmFuc2l0aW9uLWdyb3VwL0NTU1RyYW5zaXRpb24nO1xuaW1wb3J0IHsgQ29sb3JUeXBlLCBDU1NUeXBlIH0gZnJvbSAnLi4vLi4vdHlwZXMnO1xuXG5pbnRlcmZhY2UgTG9hZGluZ1Byb3BzIGV4dGVuZHMgSFRNTEF0dHJpYnV0ZXM8SFRNTERpdkVsZW1lbnQ+IHtcbiAgLyoqIHRydWXjga7loLTlkIjplovlp4vjgZfjgb7jgZkgKi9cbiAgbG9hZGluZzogYm9vbGVhbjtcbiAgLyoqIOODkOODvOOBruiJsuOBruaMh+WumiAqL1xuICBjb2xvcj86IENvbG9yVHlwZTtcbiAgLyoqIOODkOODvOOBrkNTUyBwb3NpdGlvbuOBruaMh+WumiAqL1xuICBwb3NpdGlvbj86ICdhYnNvbHV0ZScgfCAnZml4ZWQnIHwgJ3N0aWNreSc7XG4gIC8qKiDjg5Djg7zjga7og4zmma/jga7oibLjga7oh6rnlLHmjIflrpogKi9cbiAgYmFja2dyb3VuZD86IHN0cmluZztcbiAgLyoqIOODkOODvOOBrue4puW5heOBruWumue+qSAqL1xuICBzaXplPzogc3RyaW5nO1xuICAvKiog44OQ44O844Gu44Ki44OL44Oh44O844K344On44Oz44GuZHVyYXRpb27mjIflrpogKOWNmOS9je+8mm1zKSAqL1xuICBkdXJhdGlvbj86IG51bWJlcjtcbiAgY3NzPzogQ1NTVHlwZTtcbn1cblxuY29uc3QgV3JhcHBlciA9IHN0eWxlZC5kaXY8TG9hZGluZ1Byb3BzPmBcbiAgcG9zaXRpb246ICR7KHsgcG9zaXRpb24gfSkgPT4gcG9zaXRpb259O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyh7IGJhY2tncm91bmQgfSkgPT4gYmFja2dyb3VuZH07XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG5cbiAgLmxvYWRpbmctYmFyIHtcbiAgICBoZWlnaHQ6ICR7KHsgc2l6ZSB9KSA9PiBzaXplfTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyh7IGNvbG9yLCB0aGVtZSB9KSA9PiB0aGVtZVtjb2xvciFdfTtcblxuICAgIHdpbGwtY2hhbmdlOiB3aWR0aCwgb3BhY2l0eTtcbiAgICB6LWluZGV4OiAxMDAwMDAwO1xuXG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogd2lkdGgsIG9wYWNpdHk7XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogJHsoeyBkdXJhdGlvbiB9KSA9PiBkdXJhdGlvbn1tcztcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xuXG4gICAgJi5sb2FkLWVudGVyIHtcbiAgICAgIHdpZHRoOiAwO1xuICAgIH1cblxuICAgICYubG9hZC1lbnRlci1kb25lIHtcbiAgICAgIHdpZHRoOiA4NSU7XG4gICAgfVxuXG4gICAgJi5sb2FkLWV4aXQge1xuICAgICAgd2lkdGg6IDg1JTtcbiAgICB9XG5cbiAgICAmLmxvYWQtZXhpdC1hY3RpdmUge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbiAgfVxuXG4gICR7KHsgY3NzIH0pID0+IGNzcyB8fCB7fX1cbmA7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9hZGluZ0JhciBleHRlbmRzIFB1cmVDb21wb25lbnQ8TG9hZGluZ1Byb3BzPiB7XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgbG9hZGluZzogZmFsc2UsXG4gICAgY29sb3I6ICdwcmltYXJ5JyxcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICBiYWNrZ3JvdW5kOiAndHJhbnNwYXJlbnQnLFxuICAgIHNpemU6ICczcHgnLFxuICAgIGR1cmF0aW9uOiAxNTAsXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxXcmFwcGVyIHsuLi50aGlzLnByb3BzfT5cbiAgICAgICAgPENTU1RyYW5zaXRpb25cbiAgICAgICAgICBjbGFzc05hbWVzPVwibG9hZFwiXG4gICAgICAgICAgdGltZW91dD17dGhpcy5wcm9wcy5kdXJhdGlvbiF9XG4gICAgICAgICAgaW49e3RoaXMucHJvcHMubG9hZGluZ31cbiAgICAgICAgICB1bm1vdW50T25FeGl0XG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvYWRpbmctYmFyXCIgLz5cbiAgICAgICAgPC9DU1NUcmFuc2l0aW9uPlxuICAgICAgPC9XcmFwcGVyPlxuICAgICk7XG4gIH1cbn1cbiIsImltcG9ydCBSZWFjdCwgeyBIVE1MQXR0cmlidXRlcyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQsIHsgY3NzLCBrZXlmcmFtZXMgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgeyBDb2xvclR5cGUsIFRoZW1lVHlwZSB9IGZyb20gJy4uLy4uL3R5cGVzJztcblxuaW50ZXJmYWNlIFByb3BzIGV4dGVuZHMgSFRNTEF0dHJpYnV0ZXM8SFRNTERpdkVsZW1lbnQ+e1xuICAvKiog6Imy44Gu5oyH5a6aICovXG4gIGNvbG9yPzogQ29sb3JUeXBlO1xuICAvKiog5qiq5bmFICovXG4gIHdpZHRoPzogc3RyaW5nO1xuICAvKiog57im5bmFICovXG4gIGhlaWdodD86IHN0cmluZztcbiAgLyoqIHNwaW5uZXLjga7lpKrjgZUgKi9cbiAgYm9yZGVyU2l6ZT86IHN0cmluZztcbn1cblxuZnVuY3Rpb24gZ2V0Q29sb3IoeyB0aGVtZSwgY29sb3IgfTogeyB0aGVtZTogVGhlbWVUeXBlLCBjb2xvcj86IENvbG9yVHlwZSB9KSB7XG4gIGNvbnN0IHZhbHVlID0gKCFjb2xvciB8fCBjb2xvciA9PT0gJ2xpZ2h0JykgPyB0aGVtZS5iYWNrZ3JvdW5kIDogdGhlbWVbY29sb3JdO1xuXG4gIHJldHVybiBjc3NgXG4gICAgYm9yZGVyLWNvbG9yOiAke3ZhbHVlfTtcbiAgICBib3JkZXItcmlnaHQtY29sb3I6ICR7dGhlbWUuYm9yZGVyfTtcbiAgICBib3JkZXItdG9wLWNvbG9yOiAke3RoZW1lLmJvcmRlcn07XG4gIGA7XG59XG5cbmNvbnN0IHNwaW4gPSBrZXlmcmFtZXNgXG4gIGZyb20ge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICB9XG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNTlkZWcpO1xuICB9XG5gO1xuXG5jb25zdCBTcGlubmVyID0gc3R5bGVkLmRpdjxQcm9wcz5gXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6ICR7KHsgd2lkdGggfSkgPT4gd2lkdGggPyB3aWR0aCA6ICcxMDAlJ307XG4gIGhlaWdodDogJHsoeyBoZWlnaHQgfSkgPT4gaGVpZ2h0ID8gaGVpZ2h0IDogJzEwMCUnfTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgJjphZnRlciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgYW5pbWF0aW9uOiAke3NwaW59IDc1MG1zIGluZmluaXRlIGxpbmVhcjtcbiAgICBib3JkZXI6ICR7KHsgYm9yZGVyU2l6ZSB9KSA9PiBib3JkZXJTaXplfSBzb2xpZDtcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgICR7Z2V0Q29sb3J9XG4gICAgY29udGVudDogXCJcIjtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICB9XG5gO1xuU3Bpbm5lci5kaXNwbGF5TmFtZSA9ICdTcGlubmVyJztcblNwaW5uZXIuZGVmYXVsdFByb3BzID0ge1xuICBib3JkZXJTaXplOiAnMnB4Jyxcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3Bpbm5lcjtcbiIsIi8vIGdyaWQgJiBsYXlvdXRcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQnJlYWsgfSBmcm9tICcuL0dyaWQvQnJlYWsnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBDb250YWluZXIgfSBmcm9tICcuL0dyaWQvQ29udGFpbmVyJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgUm93IH0gZnJvbSAnLi9HcmlkL1Jvdyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIENvbCB9IGZyb20gJy4vR3JpZC9Db2wnO1xuXG5cbi8vIGNvbW1vblxuZXhwb3J0IHsgZGVmYXVsdCBhcyBDb250ZW50IH0gZnJvbSAnLi9Db250ZW50JztcbmV4cG9ydCAqIGZyb20gJy4vQ29udGVudCc7XG5cbmV4cG9ydCB7IGRlZmF1bHQgYXMgQnV0dG9uIH0gZnJvbSAnLi9CdXR0b24nO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBCdXR0b25Hcm91cCB9IGZyb20gJy4vQnV0dG9uL0J1dHRvbkdyb3VwJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgVGFibGUgfSBmcm9tICcuL1RhYmxlJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQm94IH0gZnJvbSAnLi9Cb3gnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBQcm9ncmVzcyB9IGZyb20gJy4vUHJvZ3Jlc3MnO1xuXG4vLyBmb3JtXG5leHBvcnQgKiBmcm9tICcuL0Zvcm0nO1xuXG4vLyBpY29uc1xuZXhwb3J0ICogZnJvbSAnLi9JY29ucyc7XG5cbi8vIGNvbXBvbmVudHNcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQXBwQmFyIH0gZnJvbSAnLi9BcHBCYXInO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBUYWcgfSBmcm9tICcuL1RhZyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEhlcm8gfSBmcm9tICcuL0hlcm8nO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBUb29sdGlwIH0gZnJvbSAnLi9Ub29sdGlwJztcbmV4cG9ydCAqIGZyb20gJy4vU2lkZU1lbnUnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBDYXJkIH0gZnJvbSAnLi9DYXJkJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgUG9wb3ZlciB9IGZyb20gJy4vUG9wb3Zlcic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIE1vZGFsIH0gZnJvbSAnLi9Nb2RhbCc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFRvYXN0IH0gZnJvbSAnLi9Ub2FzdCc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFRhYnMgfSBmcm9tICcuL1RhYnMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBMb2FkaW5nQmFyIH0gZnJvbSAnLi9Mb2FkaW5nL0Jhcic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFNwaW5uZXIgfSBmcm9tICcuL0xvYWRpbmcvU3Bpbm5lcic7XG4iLCJpbXBvcnQgeyBUaGVtZVR5cGUgfSBmcm9tIFwiLi4vdHlwZXNcIjtcblxuY29uc3QgdGhlbWU6IFRoZW1lVHlwZSA9IHtcbiAgZm9udEZhbWlseTogJ+ODkuODqeOCruODjuinkuOCtOOCt+ODg+OCryxcIuODkuODqeOCruODjuinkuOCtCBQcm9OIFczXCIs44Oh44Kk44Oq44KqLE1laXJ5byxcIu+8re+8syDvvLDjgrTjgrfjg4Pjgq9cIixcIk1TIFBHb3RoaWNcIixzYW5zLXNlcmlmJyxcbiAgZm9udFNpemU6ICcxNnB4JyxcblxuICByZXNwb25zaXZlOiB0cnVlLFxuICBndXR0ZXI6IDI0LFxuICBzbWFsbEd1dHRlcjogMTYsXG4gIGJveFNoYWRvdzogJzAgMXB4IDJweCAwIHJnYmEoMCwgMCwgMCwgMC4wNSknLFxuXG4gIG1vYmlsZTogNTc2LFxuICB0YWJsZXQ6IDc2OSxcbiAgZGVza3RvcDogOTYwLFxuICBmdWxsaGQ6IDEzNDQsXG5cbiAgcmFkaXVzOiA0LFxuXG4gIHByaW1hcnk6ICcjMzdCMTUxJyxcbiAgbGluazogJyM1NzhiYTknLFxuICBpbmZvOiAnIzIwOWNlZScsXG4gIHN1Y2Nlc3M6ICcjMGZhODg2JyxcbiAgd2FybmluZzogJyNmMmI1NDEnLFxuICBkYW5nZXI6ICcjZjM1NzVhJyxcbiAgZGFyazogJyMzNjM2MzYnLFxuICBsaWdodDogJyM5YjliOWInLFxuXG4gIGJsYWNrOiAnIzBhMGEwYScsXG4gIGJsYWNrQmlzOiAnIzEyMTIxMicsXG4gIGJsYWNrVGVyOiAnIzI0MjQyNCcsXG5cbiAgd2hpdGU6ICcjZmZmZmZmJyxcbiAgd2hpdGVCaXM6ICcjZmFmYWZhJyxcbiAgd2hpdGVUZXI6ICcjZjVmNWY1JyxcblxuICBncmV5OiAnIzdhN2E3YScsXG4gIGdyZXlMaWdodDogJyM5YjliOWInLFxuICBncmV5TGlnaHRlcjogJyNkYmRiZGInLFxuXG4gIHRleHQ6ICcjNGE0YTRhJyxcbiAgdGV4dERhcms6ICcjNGE0YTRhJyxcbiAgdGV4dExpZ2h0OiAnIzdhN2E3YScsXG4gIHRleHRTdHJvbmc6ICcjNGE0YTRhJyxcblxuICBiYWNrZ3JvdW5kOiAnI2Y1ZjVmNScsXG5cbiAgYm9yZGVyOiAnI2RiZGJkYicsXG4gIGJvcmRlckhvdmVyOiAnIzliOWI5YicsXG4gIGJvcmRlckFjdGl2ZTogJyM0YTRhNGEnLFxuXG4gIHBsYWNlaG9sZGVyOiAnIzdhN2E3YScsXG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IHRoZW1lO1xuIiwiaW1wb3J0IHsgY3NzIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG4vKiEgYmFzZWQgb24gbm9ybWFsaXplLmNzcyB2OC4wLjAgfCBNSVQgTGljZW5zZSB8IGdpdGh1Yi5jb20vbmVjb2xhcy9ub3JtYWxpemUuY3NzICovXG5jb25zdCBub3JtYWxpemVkOiBhbnkgPSBjc3NgXG4gICosIDo6YWZ0ZXIsIDo6YmVmb3JlIHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB9XG5cbiAgaHRtbCB7XG4gICAgbGluZS1oZWlnaHQ6IDEuMTU7XG4gICAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO1xuICAgIC1tcy1vdmVyZmxvdy1zdHlsZTogc2Nyb2xsYmFyO1xuICB9XG5cbiAgYm9keSB7XG4gICAgbWFyZ2luOiAwO1xuICAgIGZvbnQtZmFtaWx5OiAkeyh7IHRoZW1lIH06IGFueSkgPT4gdGhlbWUgPyB0aGVtZS5mb250RmFtaWx5IDogJ1wiSGlyYWdpbm8gU2Fuc1wiLCDjg5Ljg6njgq7jg47op5LjgrTjgrfjg4Pjgq8sIFwiSGlyYWdpbm8gS2FrdSBHb3RoaWMgUHJvTlwiLCBcIuODkuODqeOCruODjuinkuOCtCBQcm9OIFczXCIsIOa4uOOCtOOCt+ODg+OCr+S9kywgXCJZdSBHb3RoaWNcIiwgWXVHb3RoaWMsIFwi44OS44Op44Ku44OO6KeS44K044K344OD44KvIFByb1wiLCBIaXJhS2FrdVByby1XMywgXCJIaXJhZ2lubyBLYWt1IEdvdGhpYyBQcm9cIiwgUXVpY2tzYW5kLCDjg6HjgqTjg6rjgqosIE1laXJ5bywgT3Nha2EsIFwi77yt77yzIO+8sOOCtOOCt+ODg+OCr1wiLCBcIk1TIFBHb3RoaWNcIiwgc2Fucy1zZXJpZid9OztcbiAgICBmb250LXNpemU6ICR7KHsgdGhlbWUgfTogYW55KSA9PiB0aGVtZSA/IHRoZW1lLmZvbnRTaXplIDogJzE2cHgnfTtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB9XG5cbiAgaDEge1xuICAgIGZvbnQtc2l6ZTogMmVtO1xuICAgIG1hcmdpbjogLjY3ZW0gMDtcbiAgfVxuXG4gIGhyIHtcbiAgICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcbiAgICBoZWlnaHQ6IDA7XG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XG4gIH1cblxuICBwcmUge1xuICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsbW9ub3NwYWNlO1xuICAgIGZvbnQtc2l6ZTogMWVtO1xuICB9XG5cbiAgYSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgY29sb3I6ICR7KHsgdGhlbWUgfTogYW55KSA9PiB0aGVtZS5saW5rfTtcbiAgfVxuXG4gIGFiYnJbdGl0bGVdIHtcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGRvdHRlZDtcbiAgfVxuXG4gIGIsc3Ryb25nIHtcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xuICB9XG5cbiAgY29kZSxrYmQsc2FtcCB7XG4gICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSxtb25vc3BhY2U7XG4gICAgZm9udC1zaXplOiAxZW07XG4gIH1cblxuICBzbWFsbCB7XG4gICAgZm9udC1zaXplOiA4MCU7XG4gIH1cblxuICBzdWIsc3VwIHtcbiAgICBmb250LXNpemU6IDc1JTtcbiAgICBsaW5lLWhlaWdodDogMDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xuICB9XG5cbiAgc3ViIHtcbiAgICBib3R0b206IC0uMjVlbTtcbiAgfVxuXG4gIHN1cCB7XG4gICAgdG9wOiAtLjVlbTtcbiAgfVxuXG4gIGltZyB7XG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xuICB9XG5cbiAgYnV0dG9uLGlucHV0LG9wdGdyb3VwLHNlbGVjdCx0ZXh0YXJlYSB7XG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gICAgZm9udC1zaXplOiAxMDAlO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjE1O1xuICAgIG1hcmdpbjogMDtcbiAgfVxuXG4gIGJ1dHRvbixpbnB1dCB7XG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XG4gIH1cblxuICBidXR0b24sc2VsZWN0IHtcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgfVxuXG4gIFt0eXBlPWJ1dHRvbl0sW3R5cGU9cmVzZXRdLFt0eXBlPXN1Ym1pdF0sYnV0dG9uIHtcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjtcbiAgfVxuXG4gIFt0eXBlPWJ1dHRvbl06Oi1tb3otZm9jdXMtaW5uZXIsW3R5cGU9cmVzZXRdOjotbW96LWZvY3VzLWlubmVyLFt0eXBlPXN1Ym1pdF06Oi1tb3otZm9jdXMtaW5uZXIsYnV0dG9uOjotbW96LWZvY3VzLWlubmVyIHtcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XG4gICAgcGFkZGluZzogMDtcbiAgfVxuXG4gIFt0eXBlPWJ1dHRvbl06LW1vei1mb2N1c3JpbmcsW3R5cGU9cmVzZXRdOi1tb3otZm9jdXNyaW5nLFt0eXBlPXN1Ym1pdF06LW1vei1mb2N1c3JpbmcsYnV0dG9uOi1tb3otZm9jdXNyaW5nIHtcbiAgICBvdXRsaW5lOiAxcHggZG90dGVkIEJ1dHRvblRleHQ7XG4gIH1cblxuICBpbnB1dFt0eXBlPWRhdGVdLFxuICBpbnB1dFt0eXBlPXRpbWVdLFxuICBpbnB1dFt0eXBlPWRhdGV0aW1lLWxvY2FsXSxcbiAgaW5wdXRbdHlwZT1tb250aF0ge1xuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbGlzdGJveDtcbiAgfVxuXG4gIGZpZWxkc2V0IHtcbiAgICBwYWRkaW5nOiAuMzVlbSAuNzVlbSAuNjI1ZW07XG4gIH1cblxuICBsZWdlbmQge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgY29sb3I6IGluaGVyaXQ7XG4gICAgZGlzcGxheTogdGFibGU7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgfVxuXG4gIHByb2dyZXNzIHtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG4gICAgcmVzaXplOiB2ZXJ0aWNhbDtcbiAgfVxuXG4gIHRleHRhcmVhIHtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgfVxuXG4gIFt0eXBlPWNoZWNrYm94XSxbdHlwZT1yYWRpb10ge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgcGFkZGluZzogMDtcbiAgfVxuXG4gIFt0eXBlPW51bWJlcl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sW3R5cGU9bnVtYmVyXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICB9XG5cbiAgW3R5cGU9c2VhcmNoXSB7XG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7XG4gICAgb3V0bGluZS1vZmZzZXQ6IC0ycHg7XG4gIH1cblxuICBbdHlwZT1zZWFyY2hdOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uIHtcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIH1cblxuICA6Oi13ZWJraXQtZmlsZS11cGxvYWQtYnV0dG9uIHtcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjtcbiAgICBmb250OiBpbmhlcml0O1xuICB9XG5cbiAgZGV0YWlscyB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cblxuICBzdW1tYXJ5IHtcbiAgICBkaXNwbGF5OiBsaXN0LWl0ZW07XG4gIH1cblxuICB0ZW1wbGF0ZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIFtoaWRkZW5dIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgYmxvY2txdW90ZSwgYm9keSwgZGQsIGRsLCBkdCwgZmllbGRzZXQsIGZpZ3VyZSwgaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgaHIsIGh0bWwsIGlmcmFtZSwgbGVnZW5kLCBsaSwgb2wsIHAsIHByZSwgdGV4dGFyZWEsIHVsIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgfVxuXG4gIGJ1dHRvbiB7XG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xuICB9XG5cbiAgYXJ0aWNsZSwgYXNpZGUsIGZpZ3VyZSxcbiAgZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgc2VjdGlvbiB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cblxuICBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0sIGlucHV0W3R5cGU9XCJyYWRpb1wiXSB7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG5cbiAgYSB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjb2xvcjogIzMyNzNkYztcblxuICAgICY6aG92ZXIge1xuICAgICAgY29sb3I6IGN1cnJlbnRDb2xvcjtcbiAgICB9XG4gIH1cblxuICBpbWcge1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xuICB9XG5cbiAgc3ZnIHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIH1cblxuICBzbWFsbCB7XG4gICAgZm9udC1zaXplOiAuODc1ZW07XG4gIH1cblxuICBzcGFuIHtcbiAgICBmb250LXN0eWxlOiBpbmhlcml0O1xuICAgIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xuICB9XG5cbiAgc3Ryb25nIHtcbiAgICBjb2xvcjogIzM2MzYzNjtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICB9XG5cbiAgdGFibGUge1xuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gICAgYm9yZGVyLXNwYWNpbmc6IDA7XG4gIH1cblxuICB0aCB7XG4gICAgdGV4dC1hbGlnbjogaW5oZXJpdDtcbiAgfVxuXG4gIHVsIHtcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIH1cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IG5vcm1hbGl6ZWQ7XG4iXSwibmFtZXMiOlsiQnJlYWsiLCJSZWFjdCIsIndpZHRoIiwiaGVpZ2h0IiwibWVkaWFNb2JpbGUiLCJ0aGVtZSIsInJlc3BvbnNpdmUiLCJtb2JpbGUiLCJtZWRpYVRhYmxldCIsInRhYmxldCIsIm1lZGlhRGVza3RvcCIsImRlc2t0b3AiLCJtZWRpYUZ1bGxIRCIsImZ1bGxoZCIsIm1lZGlhVW50aWxGdWxsSEQiLCJzZXRSZXNwb25zaXZlIiwiZmx1aWQiLCJjc3MiLCJzbWFsbEd1dHRlciIsImd1dHRlciIsIkNvbnRhaW5lciIsInN0eWxlZCIsImRpdiIsImRpc3BsYXlOYW1lIiwiZGVmYXVsdFByb3BzIiwicGFyY2VudGFnZSIsInZhbHVlIiwiTWF0aCIsImNlaWwiLCJyZW5kZXJTaXplIiwic2l6ZSIsIm5hcnJvdyIsImF1dG8iLCJvZmZzZXQiLCJvZmZWYWwiLCJhdXRvU2l6ZSIsIkNvbCIsInJlbmRlckd1dHRlciIsIm5vR3V0dGVyIiwiUm93IiwidmNlbnRlciIsImNlbnRlciIsIlByZSIsInByZSIsIkNvZGUiLCJjb2RlIiwiYmFja2dyb3VuZCIsImRhbmdlciIsIkgxIiwiaDEiLCJib3JkZXIiLCJDb250ZW50IiwidGV4dCIsImV4cG9ydHMiLCJjdXJyeSIsImN1cnJpZWQiLCJmIiwibGVuZ3RoIiwiYWNjIiwiZm4iLCJjb21iaW5lZCIsImNvbmNhdCIsIkFycmF5IiwicHJvdG90eXBlIiwic2xpY2UiLCJjYWxsIiwiYXJndW1lbnRzIiwiYXBwbHkiLCJtb2R1bGUiLCJkZWZhdWx0IiwiZ3VhcmQiLCJsb3dlckJvdW5kYXJ5IiwidXBwZXJCb3VuZGFyeSIsIm1heCIsIm1pbiIsIl9kZWZhdWx0IiwiY29sb3JUb0ludCIsImNvbG9yIiwicm91bmQiLCJjb252ZXJ0VG9JbnQiLCJyZWQiLCJncmVlbiIsImJsdWUiLCJoc2xUb1JnYiIsImh1ZSIsInNhdHVyYXRpb24iLCJsaWdodG5lc3MiLCJjb252ZXJ0IiwiaHVlUHJpbWUiLCJjaHJvbWEiLCJhYnMiLCJzZWNvbmRDb21wb25lbnQiLCJsaWdodG5lc3NNb2RpZmljYXRpb24iLCJmaW5hbFJlZCIsImZpbmFsR3JlZW4iLCJmaW5hbEJsdWUiLCJuYW1lZENvbG9yTWFwIiwiYWxpY2VibHVlIiwiYW50aXF1ZXdoaXRlIiwiYXF1YSIsImFxdWFtYXJpbmUiLCJhenVyZSIsImJlaWdlIiwiYmlzcXVlIiwiYmxhY2siLCJibGFuY2hlZGFsbW9uZCIsImJsdWV2aW9sZXQiLCJicm93biIsImJ1cmx5d29vZCIsImNhZGV0Ymx1ZSIsImNoYXJ0cmV1c2UiLCJjaG9jb2xhdGUiLCJjb3JhbCIsImNvcm5mbG93ZXJibHVlIiwiY29ybnNpbGsiLCJjcmltc29uIiwiY3lhbiIsImRhcmtibHVlIiwiZGFya2N5YW4iLCJkYXJrZ29sZGVucm9kIiwiZGFya2dyYXkiLCJkYXJrZ3JlZW4iLCJkYXJrZ3JleSIsImRhcmtraGFraSIsImRhcmttYWdlbnRhIiwiZGFya29saXZlZ3JlZW4iLCJkYXJrb3JhbmdlIiwiZGFya29yY2hpZCIsImRhcmtyZWQiLCJkYXJrc2FsbW9uIiwiZGFya3NlYWdyZWVuIiwiZGFya3NsYXRlYmx1ZSIsImRhcmtzbGF0ZWdyYXkiLCJkYXJrc2xhdGVncmV5IiwiZGFya3R1cnF1b2lzZSIsImRhcmt2aW9sZXQiLCJkZWVwcGluayIsImRlZXBza3libHVlIiwiZGltZ3JheSIsImRpbWdyZXkiLCJkb2RnZXJibHVlIiwiZmlyZWJyaWNrIiwiZmxvcmFsd2hpdGUiLCJmb3Jlc3RncmVlbiIsImZ1Y2hzaWEiLCJnYWluc2Jvcm8iLCJnaG9zdHdoaXRlIiwiZ29sZCIsImdvbGRlbnJvZCIsImdyYXkiLCJncmVlbnllbGxvdyIsImdyZXkiLCJob25leWRldyIsImhvdHBpbmsiLCJpbmRpYW5yZWQiLCJpbmRpZ28iLCJpdm9yeSIsImtoYWtpIiwibGF2ZW5kZXIiLCJsYXZlbmRlcmJsdXNoIiwibGF3bmdyZWVuIiwibGVtb25jaGlmZm9uIiwibGlnaHRibHVlIiwibGlnaHRjb3JhbCIsImxpZ2h0Y3lhbiIsImxpZ2h0Z29sZGVucm9keWVsbG93IiwibGlnaHRncmF5IiwibGlnaHRncmVlbiIsImxpZ2h0Z3JleSIsImxpZ2h0cGluayIsImxpZ2h0c2FsbW9uIiwibGlnaHRzZWFncmVlbiIsImxpZ2h0c2t5Ymx1ZSIsImxpZ2h0c2xhdGVncmF5IiwibGlnaHRzbGF0ZWdyZXkiLCJsaWdodHN0ZWVsYmx1ZSIsImxpZ2h0eWVsbG93IiwibGltZSIsImxpbWVncmVlbiIsImxpbmVuIiwibWFnZW50YSIsIm1hcm9vbiIsIm1lZGl1bWFxdWFtYXJpbmUiLCJtZWRpdW1ibHVlIiwibWVkaXVtb3JjaGlkIiwibWVkaXVtcHVycGxlIiwibWVkaXVtc2VhZ3JlZW4iLCJtZWRpdW1zbGF0ZWJsdWUiLCJtZWRpdW1zcHJpbmdncmVlbiIsIm1lZGl1bXR1cnF1b2lzZSIsIm1lZGl1bXZpb2xldHJlZCIsIm1pZG5pZ2h0Ymx1ZSIsIm1pbnRjcmVhbSIsIm1pc3R5cm9zZSIsIm1vY2Nhc2luIiwibmF2YWpvd2hpdGUiLCJuYXZ5Iiwib2xkbGFjZSIsIm9saXZlIiwib2xpdmVkcmFiIiwib3JhbmdlIiwib3JhbmdlcmVkIiwib3JjaGlkIiwicGFsZWdvbGRlbnJvZCIsInBhbGVncmVlbiIsInBhbGV0dXJxdW9pc2UiLCJwYWxldmlvbGV0cmVkIiwicGFwYXlhd2hpcCIsInBlYWNocHVmZiIsInBlcnUiLCJwaW5rIiwicGx1bSIsInBvd2RlcmJsdWUiLCJwdXJwbGUiLCJyZWJlY2NhcHVycGxlIiwicm9zeWJyb3duIiwicm95YWxibHVlIiwic2FkZGxlYnJvd24iLCJzYWxtb24iLCJzYW5keWJyb3duIiwic2VhZ3JlZW4iLCJzZWFzaGVsbCIsInNpZW5uYSIsInNpbHZlciIsInNreWJsdWUiLCJzbGF0ZWJsdWUiLCJzbGF0ZWdyYXkiLCJzbGF0ZWdyZXkiLCJzbm93Iiwic3ByaW5nZ3JlZW4iLCJzdGVlbGJsdWUiLCJ0YW4iLCJ0ZWFsIiwidGhpc3RsZSIsInRvbWF0byIsInR1cnF1b2lzZSIsInZpb2xldCIsIndoZWF0Iiwid2hpdGUiLCJ3aGl0ZXNtb2tlIiwieWVsbG93IiwieWVsbG93Z3JlZW4iLCJuYW1lVG9IZXgiLCJub3JtYWxpemVkQ29sb3JOYW1lIiwidG9Mb3dlckNhc2UiLCJfYXNzZXJ0VGhpc0luaXRpYWxpemVkIiwic2VsZiIsIlJlZmVyZW5jZUVycm9yIiwiX2luaGVyaXRzTG9vc2UiLCJzdWJDbGFzcyIsInN1cGVyQ2xhc3MiLCJPYmplY3QiLCJjcmVhdGUiLCJjb25zdHJ1Y3RvciIsIl9fcHJvdG9fXyIsIl93cmFwTmF0aXZlU3VwZXIiLCJDbGFzcyIsIl9jYWNoZSIsIk1hcCIsInVuZGVmaW5lZCIsIl9pc05hdGl2ZUZ1bmN0aW9uIiwiVHlwZUVycm9yIiwiaGFzIiwiZ2V0Iiwic2V0IiwiV3JhcHBlciIsIl9jb25zdHJ1Y3QiLCJfZ2V0UHJvdG90eXBlT2YiLCJlbnVtZXJhYmxlIiwid3JpdGFibGUiLCJjb25maWd1cmFibGUiLCJfc2V0UHJvdG90eXBlT2YiLCJpc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QiLCJSZWZsZWN0IiwiY29uc3RydWN0Iiwic2hhbSIsIlByb3h5IiwiRGF0ZSIsInRvU3RyaW5nIiwiZSIsIlBhcmVudCIsImFyZ3MiLCJhIiwicHVzaCIsIkNvbnN0cnVjdG9yIiwiRnVuY3Rpb24iLCJiaW5kIiwiaW5zdGFuY2UiLCJpbmRleE9mIiwibyIsInAiLCJzZXRQcm90b3R5cGVPZiIsImdldFByb3RvdHlwZU9mIiwiRVJST1JTIiwiZm9ybWF0IiwiX2xlbiIsIl9rZXkiLCJiIiwiYyIsImZvckVhY2giLCJkIiwicmVwbGFjZSIsIlBvbGlzaGVkRXJyb3IiLCJfRXJyb3IiLCJfdGhpcyIsInByb2Nlc3MiLCJlbnYiLCJOT0RFX0VOViIsIl9sZW4yIiwiX2tleTIiLCJFcnJvciIsIl9oc2xUb1JnYiIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJyZXF1aXJlJCQwIiwiX25hbWVUb0hleCIsInJlcXVpcmUkJDEiLCJfZXJyb3JzIiwicmVxdWlyZSQkMiIsIm9iaiIsIl9fZXNNb2R1bGUiLCJoZXhSZWdleCIsImhleFJnYmFSZWdleCIsInJlZHVjZWRIZXhSZWdleCIsInJlZHVjZWRSZ2JhSGV4UmVnZXgiLCJyZ2JSZWdleCIsInJnYmFSZWdleCIsImhzbFJlZ2V4IiwiaHNsYVJlZ2V4IiwicGFyc2VUb1JnYiIsIm5vcm1hbGl6ZWRDb2xvciIsIm1hdGNoIiwicGFyc2VJbnQiLCJhbHBoYSIsInBhcnNlRmxvYXQiLCJ0b0ZpeGVkIiwiX2FscGhhIiwicmdiTWF0Y2hlZCIsImV4ZWMiLCJyZ2JhTWF0Y2hlZCIsImhzbE1hdGNoZWQiLCJyZ2JDb2xvclN0cmluZyIsImhzbFJnYk1hdGNoZWQiLCJoc2xhTWF0Y2hlZCIsIl9odWUiLCJfc2F0dXJhdGlvbiIsIl9saWdodG5lc3MiLCJfcmdiQ29sb3JTdHJpbmciLCJfaHNsUmdiTWF0Y2hlZCIsInJnYlRvSHNsIiwiZGVsdGEiLCJfcGFyc2VUb1JnYiIsIl9yZ2JUb0hzbCIsInBhcnNlVG9Ic2wiLCJyZWR1Y2VIZXhWYWx1ZSIsIm51bWJlclRvSGV4IiwiaGV4IiwiX3JlZHVjZUhleFZhbHVlIiwiX251bWJlclRvSGV4IiwiY29sb3JUb0hleCIsImNvbnZlcnRUb0hleCIsImhzbFRvSGV4IiwiX2hzbFRvSGV4IiwiaHNsIiwiaHNsYSIsInJnYiIsIl9yZ2IiLCJyZ2JhIiwiZmlyc3RWYWx1ZSIsInNlY29uZFZhbHVlIiwidGhpcmRWYWx1ZSIsImZvdXJ0aFZhbHVlIiwicmdiVmFsdWUiLCJfaHNsIiwiX2hzbGEiLCJfcmdiYSIsInJlcXVpcmUkJDMiLCJyZXF1aXJlJCQ0IiwiaXNSZ2IiLCJpc1JnYmEiLCJpc0hzbCIsImlzSHNsYSIsInRvQ29sb3JTdHJpbmciLCJfY3VycnkiLCJfZ3VhcmQiLCJfcGFyc2VUb0hzbCIsIl90b0NvbG9yU3RyaW5nIiwiX2V4dGVuZHMiLCJhc3NpZ24iLCJ0YXJnZXQiLCJpIiwic291cmNlIiwia2V5IiwiaGFzT3duUHJvcGVydHkiLCJkYXJrZW4iLCJhbW91bnQiLCJoc2xDb2xvciIsImN1cnJpZWREYXJrZW4iLCJnZXRMdW1pbmFuY2UiLCJyZ2JDb2xvciIsIl9PYmplY3Qka2V5cyRtYXAiLCJrZXlzIiwibWFwIiwiY2hhbm5lbCIsInBvdyIsInIiLCJnIiwiZmluZENvbG9ySW52ZXJ0IiwidHJhbnNwYXJlbnRpemUiLCJwYXJzZWRDb2xvciIsImNvbG9yV2l0aEFscGhhIiwiY3VycmllZFRyYW5zcGFyZW50aXplIiwiYm94U2hhZG93Iiwic2hhZG93Q29sb3IiLCJzZXRTaXplIiwibmFtZSIsImRpc2FibGVkQ29sb3IiLCJ0ZXh0Q29sb3IiLCJ0ZXh0RGFyayIsImJhY2tDb2xvciIsInNldENvbG9yIiwib3V0bGluZSIsImRpc2FibGVkIiwiYm9yZGVySG92ZXIiLCJib3JkZXJBY3RpdmUiLCJpbnZlcnRDb2xvciIsIkJ1dHRvbiIsImJ1dHRvbiIsImZ1bGwiLCJCdXR0b25Hcm91cCIsInN0cmlwZWRTdHlsZSIsImhvdmVyU3R5bGUiLCJUYWJsZSIsInRhYmxlIiwiYm9yZGVyZWQiLCJzdHJpcGVkIiwiaG92ZXIiLCJoZWFkZXJTdHlsZSIsIkJveCIsImJvcmRlcmxlc3MiLCJQcm9ncmVzcyIsInByb3BzIiwicGVyY2VudCIsIlB1cmVDb21wb25lbnQiLCJyZXF1aXJlZCIsInByaW1hcnkiLCJMYWJlbCIsImxhYmVsIiwidGV4dFN0cm9uZyIsIkZpZWxkIiwiY2hpbGRyZW4iLCJyZXN0IiwiaGFtYnVyZ2VyIiwiQXJyb3ciLCJkaXJlY3Rpb24iLCJNZXNzYWdlIiwic3BhbiIsImVycm9yIiwidGV4dExpZ2h0IiwiSGVscE1lc3NhZ2UiLCJoZWxwIiwicmlnaHRJY29uIiwibGVmdEljb24iLCJJY29uIiwicmlnaHQiLCJwbGFjZWhvbGRlciIsIlRleHRJbnB1dCIsImNsYXNzTmFtZSIsInN0eWxlIiwidHlwZSIsIm1heExlbmd0aCIsIm9uQ2hhbmdlIiwiVGV4dGFyZWEiLCJyZWFkT25seSIsIkNvbXBvbmVudCIsImNvbCIsInJvdyIsIkNoZWNrYm94IiwiY2hlY2tlZCIsImlkIiwiSW5wdXRXcmFwcGVyIiwiYXJyb3ciLCJTZWxlY3QiLCJyZW5kZXIiLCJvcHRpb25zIiwiaXRlbSIsImlkeCIsInJlbmRlckxhYmVsIiwiaW5wdXRTaXplIiwiQm9vbGVhbiIsInJlbmRlckl0ZW0iLCJSYWRpb0xhYmVsIiwiQnV0dG9uTGFiZWwiLCJSYWRpbyIsIkFwcHJvdmVkIiwiQ2hldnJvbkxlZnRSb3VuZCIsIkNoZXZyb25SaWdodFJvdW5kIiwiRmlsZVJvdW5kIiwiUGVuY2lsIiwiVXNlciIsIkNsb3NlIiwic2V0QWxpZ24iLCJhbGlnbiIsImJhY2tkcm9wIiwiYmFja2dyb3VuZENvbG9yIiwidWEiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJOYXZCYXIiLCJoZWFkZXIiLCJmaXhlZCIsInN0aWNreSIsIkJ1cmdlciIsImhhbWJ1Z2VyIiwiTmF2Q29udGVudCIsIkFwcEJhciIsInNob3ciLCJzZXRTdGF0ZSIsInN0YXRlIiwiYnJhbmQiLCJ0b2dnbGVNZW51IiwiZ2V0Q29sb3IiLCJhZGRvbkNvbG9yIiwic3ViQ29sb3IiLCJjbG9zZSIsIlRhZyIsIm9uQ2xvc2UiLCJvbkNsaWNrIiwiQm9keSIsIkhlcm8iLCJkZWZpbmVQcm9wZXJ0eSIsIlN5bWJvbCIsImZvciIsImgiLCJrIiwibCIsIm0iLCJuIiwicSIsInQiLCJ1IiwiJCR0eXBlb2YiLCJ2IiwiaGFzU3ltYm9sIiwiUkVBQ1RfRUxFTUVOVF9UWVBFIiwiUkVBQ1RfUE9SVEFMX1RZUEUiLCJSRUFDVF9GUkFHTUVOVF9UWVBFIiwiUkVBQ1RfU1RSSUNUX01PREVfVFlQRSIsIlJFQUNUX1BST0ZJTEVSX1RZUEUiLCJSRUFDVF9QUk9WSURFUl9UWVBFIiwiUkVBQ1RfQ09OVEVYVF9UWVBFIiwiUkVBQ1RfQVNZTkNfTU9ERV9UWVBFIiwiUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEUiLCJSRUFDVF9GT1JXQVJEX1JFRl9UWVBFIiwiUkVBQ1RfU1VTUEVOU0VfVFlQRSIsIlJFQUNUX01FTU9fVFlQRSIsIlJFQUNUX0xBWllfVFlQRSIsImlzVmFsaWRFbGVtZW50VHlwZSIsImxvd1ByaW9yaXR5V2FybmluZyIsInByaW50V2FybmluZyIsImFyZ0luZGV4IiwibWVzc2FnZSIsImNvbnNvbGUiLCJ3YXJuIiwieCIsImNvbmRpdGlvbiIsImxvd1ByaW9yaXR5V2FybmluZyQxIiwidHlwZU9mIiwib2JqZWN0IiwiJCR0eXBlb2ZUeXBlIiwiQXN5bmNNb2RlIiwiQ29uY3VycmVudE1vZGUiLCJDb250ZXh0Q29uc3VtZXIiLCJDb250ZXh0UHJvdmlkZXIiLCJFbGVtZW50IiwiRm9yd2FyZFJlZiIsIkZyYWdtZW50IiwiTGF6eSIsIk1lbW8iLCJQb3J0YWwiLCJQcm9maWxlciIsIlN0cmljdE1vZGUiLCJTdXNwZW5zZSIsImhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQXN5bmNNb2RlIiwiaXNBc3luY01vZGUiLCJpc0NvbmN1cnJlbnRNb2RlIiwiaXNDb250ZXh0Q29uc3VtZXIiLCJpc0NvbnRleHRQcm92aWRlciIsImlzRWxlbWVudCIsImlzRm9yd2FyZFJlZiIsImlzRnJhZ21lbnQiLCJpc0xhenkiLCJpc01lbW8iLCJpc1BvcnRhbCIsImlzUHJvZmlsZXIiLCJpc1N0cmljdE1vZGUiLCJpc1N1c3BlbnNlIiwiZ2V0T3duUHJvcGVydHlTeW1ib2xzIiwicHJvcElzRW51bWVyYWJsZSIsInByb3BlcnR5SXNFbnVtZXJhYmxlIiwidG9PYmplY3QiLCJ2YWwiLCJzaG91bGRVc2VOYXRpdmUiLCJ0ZXN0MSIsIlN0cmluZyIsImdldE93blByb3BlcnR5TmFtZXMiLCJ0ZXN0MiIsImZyb21DaGFyQ29kZSIsIm9yZGVyMiIsImpvaW4iLCJ0ZXN0MyIsInNwbGl0IiwibGV0dGVyIiwiZXJyIiwiZnJvbSIsInRvIiwic3ltYm9scyIsInMiLCJSZWFjdFByb3BUeXBlc1NlY3JldCIsImxvZ2dlZFR5cGVGYWlsdXJlcyIsImNoZWNrUHJvcFR5cGVzIiwidHlwZVNwZWNzIiwidmFsdWVzIiwibG9jYXRpb24iLCJjb21wb25lbnROYW1lIiwiZ2V0U3RhY2siLCJ0eXBlU3BlY05hbWUiLCJleCIsInN0YWNrIiwicmVzZXRXYXJuaW5nQ2FjaGUiLCJlbXB0eUZ1bmN0aW9uVGhhdFJldHVybnNOdWxsIiwiaXNWYWxpZEVsZW1lbnQiLCJ0aHJvd09uRGlyZWN0QWNjZXNzIiwiSVRFUkFUT1JfU1lNQk9MIiwiaXRlcmF0b3IiLCJGQVVYX0lURVJBVE9SX1NZTUJPTCIsImdldEl0ZXJhdG9yRm4iLCJtYXliZUl0ZXJhYmxlIiwiaXRlcmF0b3JGbiIsIkFOT05ZTU9VUyIsIlJlYWN0UHJvcFR5cGVzIiwiYXJyYXkiLCJjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlciIsImJvb2wiLCJmdW5jIiwibnVtYmVyIiwic3RyaW5nIiwic3ltYm9sIiwiYW55IiwiY3JlYXRlQW55VHlwZUNoZWNrZXIiLCJhcnJheU9mIiwiY3JlYXRlQXJyYXlPZlR5cGVDaGVja2VyIiwiZWxlbWVudCIsImNyZWF0ZUVsZW1lbnRUeXBlQ2hlY2tlciIsImVsZW1lbnRUeXBlIiwiY3JlYXRlRWxlbWVudFR5cGVUeXBlQ2hlY2tlciIsImluc3RhbmNlT2YiLCJjcmVhdGVJbnN0YW5jZVR5cGVDaGVja2VyIiwibm9kZSIsImNyZWF0ZU5vZGVDaGVja2VyIiwib2JqZWN0T2YiLCJjcmVhdGVPYmplY3RPZlR5cGVDaGVja2VyIiwib25lT2YiLCJjcmVhdGVFbnVtVHlwZUNoZWNrZXIiLCJvbmVPZlR5cGUiLCJjcmVhdGVVbmlvblR5cGVDaGVja2VyIiwic2hhcGUiLCJjcmVhdGVTaGFwZVR5cGVDaGVja2VyIiwiZXhhY3QiLCJjcmVhdGVTdHJpY3RTaGFwZVR5cGVDaGVja2VyIiwiaXMiLCJ5IiwiUHJvcFR5cGVFcnJvciIsImNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyIiwidmFsaWRhdGUiLCJtYW51YWxQcm9wVHlwZUNhbGxDYWNoZSIsIm1hbnVhbFByb3BUeXBlV2FybmluZ0NvdW50IiwiY2hlY2tUeXBlIiwiaXNSZXF1aXJlZCIsInByb3BOYW1lIiwicHJvcEZ1bGxOYW1lIiwic2VjcmV0IiwiY2FjaGVLZXkiLCJjaGFpbmVkQ2hlY2tUeXBlIiwiZXhwZWN0ZWRUeXBlIiwicHJvcFZhbHVlIiwicHJvcFR5cGUiLCJnZXRQcm9wVHlwZSIsInByZWNpc2VUeXBlIiwiZ2V0UHJlY2lzZVR5cGUiLCJ0eXBlQ2hlY2tlciIsImlzQXJyYXkiLCJSZWFjdElzIiwiZXhwZWN0ZWRDbGFzcyIsImV4cGVjdGVkQ2xhc3NOYW1lIiwiYWN0dWFsQ2xhc3NOYW1lIiwiZ2V0Q2xhc3NOYW1lIiwiZXhwZWN0ZWRWYWx1ZXMiLCJ2YWx1ZXNTdHJpbmciLCJKU09OIiwic3RyaW5naWZ5IiwicmVwbGFjZXIiLCJhcnJheU9mVHlwZUNoZWNrZXJzIiwiY2hlY2tlciIsImdldFBvc3RmaXhGb3JUeXBlV2FybmluZyIsImlzTm9kZSIsInNoYXBlVHlwZXMiLCJhbGxLZXlzIiwiZXZlcnkiLCJzdGVwIiwiZW50cmllcyIsIm5leHQiLCJkb25lIiwiZW50cnkiLCJpc1N5bWJvbCIsIlJlZ0V4cCIsIlByb3BUeXBlcyIsImVtcHR5RnVuY3Rpb24iLCJlbXB0eUZ1bmN0aW9uV2l0aFJlc2V0Iiwic2hpbSIsImdldFNoaW0iLCJoYXNDbGFzcyIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwiYmFzZVZhbCIsImFkZENsYXNzIiwiX2hhc0NsYXNzIiwiYWRkIiwic2V0QXR0cmlidXRlIiwicmVwbGFjZUNsYXNzTmFtZSIsIm9yaWdDbGFzcyIsImNsYXNzVG9SZW1vdmUiLCJyZW1vdmVDbGFzcyIsInJlbW92ZSIsImNvbXBvbmVudFdpbGxNb3VudCIsImdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyIsImNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMiLCJuZXh0UHJvcHMiLCJ1cGRhdGVyIiwicHJldlN0YXRlIiwiY29tcG9uZW50V2lsbFVwZGF0ZSIsIm5leHRTdGF0ZSIsInByZXZQcm9wcyIsIl9fcmVhY3RJbnRlcm5hbFNuYXBzaG90RmxhZyIsIl9fcmVhY3RJbnRlcm5hbFNuYXBzaG90IiwiZ2V0U25hcHNob3RCZWZvcmVVcGRhdGUiLCJfX3N1cHByZXNzRGVwcmVjYXRpb25XYXJuaW5nIiwicG9seWZpbGwiLCJpc1JlYWN0Q29tcG9uZW50IiwiZm91bmRXaWxsTW91bnROYW1lIiwiZm91bmRXaWxsUmVjZWl2ZVByb3BzTmFtZSIsImZvdW5kV2lsbFVwZGF0ZU5hbWUiLCJVTlNBRkVfY29tcG9uZW50V2lsbE1vdW50IiwiVU5TQUZFX2NvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMiLCJVTlNBRkVfY29tcG9uZW50V2lsbFVwZGF0ZSIsIm5ld0FwaU5hbWUiLCJjb21wb25lbnREaWRVcGRhdGUiLCJjb21wb25lbnREaWRVcGRhdGVQb2x5ZmlsbCIsIm1heWJlU25hcHNob3QiLCJzbmFwc2hvdCIsIl9wcm9wVHlwZXMiLCJ0aW1lb3V0c1NoYXBlIiwiZW50ZXIiLCJleGl0IiwiY2xhc3NOYW1lc1NoYXBlIiwiYWN0aXZlIiwiZW50ZXJEb25lIiwiZW50ZXJBY3RpdmUiLCJleGl0RG9uZSIsImV4aXRBY3RpdmUiLCJfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCIsIl9yZWFjdCIsIl9yZWFjdERvbSIsIm5ld09iaiIsImRlc2MiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZSIsImV4Y2x1ZGVkIiwic291cmNlS2V5cyIsIlVOTU9VTlRFRCIsIkVYSVRFRCIsIkVOVEVSSU5HIiwiRU5URVJFRCIsIkVYSVRJTkciLCJUcmFuc2l0aW9uIiwiX1JlYWN0JENvbXBvbmVudCIsImNvbnRleHQiLCJwYXJlbnRHcm91cCIsInRyYW5zaXRpb25Hcm91cCIsImFwcGVhciIsImlzTW91bnRpbmciLCJpbml0aWFsU3RhdHVzIiwiYXBwZWFyU3RhdHVzIiwiaW4iLCJ1bm1vdW50T25FeGl0IiwibW91bnRPbkVudGVyIiwic3RhdHVzIiwibmV4dENhbGxiYWNrIiwiX3Byb3RvIiwiZ2V0Q2hpbGRDb250ZXh0IiwiX3JlZiIsIm5leHRJbiIsImNvbXBvbmVudERpZE1vdW50IiwidXBkYXRlU3RhdHVzIiwibmV4dFN0YXR1cyIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwiY2FuY2VsTmV4dENhbGxiYWNrIiwiZ2V0VGltZW91dHMiLCJ0aW1lb3V0IiwibW91bnRpbmciLCJmaW5kRE9NTm9kZSIsInBlcmZvcm1FbnRlciIsInBlcmZvcm1FeGl0IiwiX3RoaXMyIiwiYXBwZWFyaW5nIiwidGltZW91dHMiLCJzYWZlU2V0U3RhdGUiLCJvbkVudGVyZWQiLCJvbkVudGVyIiwib25FbnRlcmluZyIsIm9uVHJhbnNpdGlvbkVuZCIsIl90aGlzMyIsIm9uRXhpdGVkIiwib25FeGl0Iiwib25FeGl0aW5nIiwiY2FuY2VsIiwiY2FsbGJhY2siLCJzZXROZXh0Q2FsbGJhY2siLCJfdGhpczQiLCJldmVudCIsImhhbmRsZXIiLCJhZGRFbmRMaXN0ZW5lciIsInNldFRpbWVvdXQiLCJfdGhpcyRwcm9wcyIsImNoaWxkUHJvcHMiLCJjaGlsZCIsIkNoaWxkcmVuIiwib25seSIsImNsb25lRWxlbWVudCIsImNvbnRleHRUeXBlcyIsImNoaWxkQ29udGV4dFR5cGVzIiwicHJvcFR5cGVzIiwicHQiLCJfUHJvcFR5cGVzIiwibm9vcCIsIl9yZWFjdExpZmVjeWNsZXNDb21wYXQiLCJfYWRkQ2xhc3MiLCJfcmVtb3ZlQ2xhc3MiLCJfVHJhbnNpdGlvbiIsImNsYXNzZXMiLCJDU1NUcmFuc2l0aW9uIiwiX3RoaXMkZ2V0Q2xhc3NOYW1lcyIsImdldENsYXNzTmFtZXMiLCJyZW1vdmVDbGFzc2VzIiwiX3RoaXMkZ2V0Q2xhc3NOYW1lczIiLCJhY3RpdmVDbGFzc05hbWUiLCJyZWZsb3dBbmRBZGRDbGFzcyIsIl90aGlzJGdldENsYXNzTmFtZXMzIiwiZG9uZUNsYXNzTmFtZSIsIl90aGlzJGdldENsYXNzTmFtZXM0IiwiX3RoaXMkZ2V0Q2xhc3NOYW1lczUiLCJfdGhpcyRnZXRDbGFzc05hbWVzNiIsImNsYXNzTmFtZXMiLCJfdGhpcyRnZXRDbGFzc05hbWVzNyIsInNjcm9sbFRvcCIsImNyZWF0ZUVsZW1lbnQiLCJnZXRQb3NpdGlvbiIsInBvc2l0aW9uIiwiYm90dG9tIiwibGVmdCIsInRyYW5zZm9ybSIsInRvcCIsIlRvb2x0aXAiLCJjdXJyZW50Iiwib2Zmc2V0V2lkdGgiLCJvZmZzZXRIZWlnaHQiLCJjcmVhdGVSZWYiLCJvcGVuVG9vbHRpcCIsImNsb3NlVG9vbHRpcCIsIlNpZGVNZW51IiwiYXNpZGUiLCJNZW51TGlzdCIsInVsIiwiTWVudUxhYmVsIiwiQ2FyZEJvZHkiLCJDYXJkSGVhZGVyIiwiQ2FyZEZvb3RlciIsImZvb3RlciIsIkNhcmRJbWFnZSIsIkNhcmRJbWFnZUhvcml6b250YWwiLCJ1cmwiLCJob3Jpem9udGFsU3R5bGUiLCJmbGV4RGlyZWN0aW9uIiwiQ2FyZCIsImltYWdlIiwidGl0bGUiLCJob3Jpem9udGFsIiwicmVuZGVySGVhZGVyIiwid3JhcHBlclN0eWxlIiwiUG9wb3ZlciIsInRvb2x0aXBTdHlsZSIsIm9wZW5Ecm9wZG93biIsImNsb3NlRHJvcGRvd24iLCJkaXNwbGF5IiwiRVNDX0tFWSIsIk1vZGFsIiwiY2xvc2VPbkVzYyIsImtleUNvZGUiLCJjbG9zZU1vZGFsIiwiY2xvc2VPbk92ZXJsYXkiLCJkb2N1bWVudCIsImJvZHkiLCJyZW1vdmVDaGlsZCIsImFwcGVuZENoaWxkIiwiY3JlYXRlUG9ydGFsIiwiZXh0ZXJuYWwiLCJvbkNsaWNrT3ZlcmxheSIsImdldENoaWxkTWFwcGluZyIsIm1lcmdlQ2hpbGRNYXBwaW5ncyIsImdldEluaXRpYWxDaGlsZE1hcHBpbmciLCJnZXROZXh0Q2hpbGRNYXBwaW5nIiwibWFwRm4iLCJtYXBwZXIiLCJyZXN1bHQiLCJwcmV2IiwiZ2V0VmFsdWVGb3JLZXkiLCJuZXh0S2V5c1BlbmRpbmciLCJwZW5kaW5nS2V5cyIsInByZXZLZXkiLCJjaGlsZE1hcHBpbmciLCJuZXh0S2V5IiwicGVuZGluZ05leHRLZXkiLCJnZXRQcm9wIiwicHJvcCIsInByZXZDaGlsZE1hcHBpbmciLCJuZXh0Q2hpbGRNYXBwaW5nIiwiaGFzUHJldiIsImhhc05leHQiLCJwcmV2Q2hpbGQiLCJpc0xlYXZpbmciLCJjb21wb25lbnQiLCJjaGlsZEZhY3RvcnkiLCJUcmFuc2l0aW9uR3JvdXAiLCJoYW5kbGVFeGl0ZWQiLCJmaXJzdFJlbmRlciIsImFwcGVhcmVkIiwibW91bnRlZCIsIl9DaGlsZE1hcHBpbmciLCJjdXJyZW50Q2hpbGRNYXBwaW5nIiwiVG9hc3RJdGVtIiwiZHVyYXRpb24iLCJjbGVhciIsInNldFBvc2l0aW9uIiwiaXNGaXhlZCIsImJhc2UiLCJUb2FzdENvbnRhaW5lciIsInRvYXN0cyIsImNzc1RleHQiLCJyZW5kZXJUb2FzdCIsIm5hdiIsIlRhYkl0ZW0iLCJJbmRpY2F0b3IiLCJUYWJzIiwic3RhcnQiLCJ0aHJlc2hvbGQiLCJtYXhJdGVtcyIsImNvdW50IiwidG90YWwiLCJ2aXNpYmlsaXR5IiwiaW5kZXgiLCJnZXRJbmRpY2F0b3JQb3NpdGlvbiIsInJlbmRlckNoaWxkcmVuIiwiYWN0aXZlSW5kZXgiLCJsZW4iLCJMb2FkaW5nQmFyIiwibG9hZGluZyIsInNwaW4iLCJrZXlmcmFtZXMiLCJTcGlubmVyIiwiYm9yZGVyU2l6ZSIsImZvbnRGYW1pbHkiLCJmb250U2l6ZSIsInJhZGl1cyIsImxpbmsiLCJpbmZvIiwic3VjY2VzcyIsIndhcm5pbmciLCJkYXJrIiwibGlnaHQiLCJibGFja0JpcyIsImJsYWNrVGVyIiwid2hpdGVCaXMiLCJ3aGl0ZVRlciIsImdyZXlMaWdodCIsImdyZXlMaWdodGVyIiwibm9ybWFsaXplZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUVlLFNBQVNBLEtBQVQsR0FBaUI7U0FDdkJDO0lBQUssS0FBSyxFQUFFO01BQUVDLEtBQUssRUFBRSxNQUFUO01BQWlCQyxNQUFNLEVBQUU7O0lBQTVDOzs7QUNHSyxTQUFTQyxXQUFULE9BQXVDO01BQWhCQyxLQUFnQixRQUFoQkEsS0FBZ0I7aURBQ0pBLEtBQUssQ0FBQ0MsVUFBTixHQUFtQkQsS0FBSyxDQUFDRSxNQUF6QixHQUFrQyxDQUExRTs7QUFHRixBQUFPLFNBQVNDLFdBQVQsUUFBdUM7TUFBaEJILEtBQWdCLFNBQWhCQSxLQUFnQjtpREFDSkEsS0FBSyxDQUFDQyxVQUFOLEdBQW1CRCxLQUFLLENBQUNJLE1BQXpCLEdBQWtDLENBQTFFOztBQUdGLEFBQU8sU0FBU0MsWUFBVCxRQUF3QztNQUFoQkwsS0FBZ0IsU0FBaEJBLEtBQWdCO2lEQUNMQSxLQUFLLENBQUNDLFVBQU4sR0FBbUJELEtBQUssQ0FBQ00sT0FBekIsR0FBbUMsQ0FBM0U7O0FBR0YsQUFBTyxTQUFTQyxXQUFULFFBQXVDO01BQWhCUCxLQUFnQixTQUFoQkEsS0FBZ0I7aURBQ0pBLEtBQUssQ0FBQ0MsVUFBTixHQUFtQkQsS0FBSyxDQUFDUSxNQUF6QixHQUFrQyxDQUExRTs7QUFHRixBQUFPLFNBQVNDLGdCQUFULFFBQTRDO01BQWhCVCxLQUFnQixTQUFoQkEsS0FBZ0I7aURBQ1RBLEtBQUssQ0FBQ0MsVUFBTixHQUFtQkQsS0FBSyxDQUFDUSxNQUF6QixHQUFrQyxDQUExRTs7O0FDZkYsU0FBU0UsYUFBVCxPQUE4QztNQUFyQkMsS0FBcUIsUUFBckJBLEtBQXFCOztNQUN4Q0EsS0FBSixFQUFXO1dBQ0ZDLFVBQVAsd0pBQ0liLFdBREosRUFLSU0sWUFMSixFQVNJRSxXQVRKOzs7U0FnQktLLFVBQVAsc0lBR0liLFdBSEosRUFJaUI7UUFBR0MsS0FBSCxTQUFHQSxLQUFIO1dBQW9CQSxLQUFLLENBQUNFLE1BQU4sR0FBZ0IsSUFBSUYsS0FBSyxDQUFDYSxXQUE5QztHQUpqQixFQU1JVixXQU5KLEVBT2lCO1FBQUdILEtBQUgsU0FBR0EsS0FBSDtXQUFvQkEsS0FBSyxDQUFDSSxNQUFOLEdBQWdCLElBQUlKLEtBQUssQ0FBQ2EsV0FBOUM7R0FQakIsRUFTSVIsWUFUSixFQVVpQjtRQUFHTCxLQUFILFNBQUdBLEtBQUg7V0FBb0JBLEtBQUssQ0FBQ00sT0FBTixHQUFpQixJQUFJTixLQUFLLENBQUNjLE1BQS9DO0dBVmpCLEVBWUlQLFdBWkosRUFhaUI7UUFBR1AsS0FBSCxTQUFHQSxLQUFIO1dBQW9CQSxLQUFLLENBQUNRLE1BQU4sR0FBZ0IsSUFBSVIsS0FBSyxDQUFDYyxNQUE5QztHQWJqQjs7O0FBa0JGLElBQU1DLFNBQVM7O0FBQUdDLGVBQU0sQ0FBQ0MsR0FBVjs7OzBDQUlYUCxhQUpXLENBQWY7QUFNQUssU0FBUyxDQUFDRyxXQUFWLEdBQXdCLFdBQXhCO0FBQ0FILFNBQVMsQ0FBQ0ksWUFBVixHQUF5QjtFQUN2QlIsS0FBSyxFQUFFO0NBRFQ7O0FDcENBLFNBQVNTLFVBQVQsQ0FBb0JDLEtBQXBCLEVBQXlDO01BQ25DLENBQUNBLEtBQUwsRUFBWSxPQUFPLENBQVA7TUFDUkEsS0FBSyxJQUFJLEVBQWIsRUFBaUIsT0FBTyxHQUFQO1NBQ1ZDLElBQUksQ0FBQ0MsSUFBTCxDQUFXRixLQUFLLEdBQUcsRUFBVCxHQUFlLEdBQWYsR0FBcUIsTUFBL0IsSUFBeUMsTUFBaEQ7OztBQUdGLFNBQVNHLFVBQVQsT0FBOEQ7TUFBeENDLElBQXdDLFFBQXhDQSxJQUF3QztNQUFsQ0MsTUFBa0MsUUFBbENBLE1BQWtDO01BQTFCQyxJQUEwQixRQUExQkEsSUFBMEI7TUFBcEJDLE1BQW9CLFFBQXBCQSxNQUFvQjtNQUN4REYsTUFBSixFQUFZLE9BQU8sSUFBUDs7TUFDUixDQUFDRCxJQUFELElBQVNBLElBQUksR0FBRyxDQUFoQixJQUFxQkEsSUFBSSxHQUFHLEVBQWhDLEVBQW9DO1dBQzNCYixVQUFQOzs7TUFNSVMsS0FBSyxHQUFHRCxVQUFVLENBQUNLLElBQUQsQ0FBeEI7TUFDTUksTUFBTSxHQUFHRCxNQUFNLEdBQUdSLFVBQVUsQ0FBQ1EsTUFBRCxDQUFiLEdBQXdCLENBQTdDO01BQ01FLFFBQVEsR0FBR1QsS0FBSyxHQUFHLEVBQVIsR0FBYSxHQUFiLEdBQW1CQSxLQUFLLEdBQUcsQ0FBNUM7U0FDT1QsVUFBUCw4RUFDV1MsS0FEWCxFQUVlQSxLQUZmLEVBR0lPLE1BQU0sMEJBQW1CQyxNQUFuQixVQUFnQyxFQUgxQyxFQUtJOUIsV0FMSixFQU1hK0IsUUFOYixFQU9pQkEsUUFQakIsRUFRTUYsTUFBTSx1QkFBdUIsRUFSbkM7OztBQWFGLElBQU1HLEdBQUc7O0FBQUdmLGVBQU0sQ0FBQ0MsR0FBVjs7OzBGQUlMO01BQUdTLE1BQUgsU0FBR0EsTUFBSDtTQUFnQkEsTUFBTSxHQUFHLGFBQUgsR0FBbUIsRUFBekM7Q0FKSyxFQUtMO01BQUdFLE1BQUgsU0FBR0EsTUFBSDtTQUFnQkEsTUFBTSwwQkFBbUJSLFVBQVUsQ0FBQ1EsTUFBRCxDQUE3QixVQUE0QyxFQUFsRTtDQUxLLEVBT0xKLFVBUEssRUFXTHJCLFdBWEssQ0FBVDtBQWdCQTRCLEdBQUcsQ0FBQ2IsV0FBSixHQUFrQixLQUFsQjs7QUM3Q0EsU0FBU2MsWUFBVCxPQUEyQztNQUFuQkMsUUFBbUIsUUFBbkJBLFFBQW1COztNQUNyQ0EsUUFBSixFQUFjO1dBQ0xyQixVQUFQLDJFQUlNbUIsR0FKTjs7O1NBVUtuQixVQUFQLDBTQUNJVCxXQURKLEVBZUlJLFdBZko7OztBQStCRixJQUFNMkIsR0FBRzs7QUFBR2xCLGVBQU0sQ0FBQ0MsR0FBVjs7OzhEQUtMO01BQUdrQixPQUFILFNBQUdBLE9BQUg7U0FBaUJBLE9BQU8sR0FBRyxzQkFBSCxHQUE0QixFQUFwRDtDQUxLLEVBTUw7TUFBR0MsTUFBSCxTQUFHQSxNQUFIO1NBQWdCQSxNQUFNLEdBQUcsMEJBQUgsR0FBZ0MsRUFBdEQ7Q0FOSyxFQVFMSixZQVJLLENBQVQ7QUFXQUUsR0FBRyxDQUFDaEIsV0FBSixHQUFrQixLQUFsQjs7QUNyRUEsSUFBTW1CLEdBQUc7O0FBQUdyQixlQUFNLENBQUNzQixHQUFWOzs7cUpBQVQ7QUFXQUQsR0FBRyxDQUFDbkIsV0FBSixHQUFrQixLQUFsQjs7QUNYQSxJQUFNcUIsSUFBSTs7QUFBR3ZCLGVBQU0sQ0FBQ3dCLElBQVY7OztvR0FDWTtNQUFHeEMsS0FBSCxRQUFHQSxLQUFIO1NBQWVBLEtBQUssQ0FBQ3lDLFVBQXJCO0NBRFosRUFFQztNQUFHekMsS0FBSCxTQUFHQSxLQUFIO1NBQWVBLEtBQUssQ0FBQzBDLE1BQXJCO0NBRkQsQ0FBVjtBQVFBSCxJQUFJLENBQUNyQixXQUFMLEdBQW1CLE1BQW5COztBQ1JBLElBQU15QixFQUFFOztBQUFHM0IsZUFBTSxDQUFDNEIsRUFBVjs7OzhIQU9VO01BQUc1QyxLQUFILFFBQUdBLEtBQUg7U0FBZUEsS0FBSyxDQUFDNkMsTUFBckI7Q0FQVixDQUFSO0FBU0FGLEVBQUUsQ0FBQ3pCLFdBQUgsR0FBaUIsSUFBakI7O0FDVEEsSUFBTTRCLE9BQU87O0FBQUc5QixlQUFNLENBQUNDLEdBQVY7OztvL0JBQ0Y7TUFBR2pCLEtBQUgsUUFBR0EsS0FBSDtTQUFlQSxLQUFLLENBQUMrQyxJQUFyQjtDQURFLEVBK0ZhO01BQUcvQyxLQUFILFNBQUdBLEtBQUg7U0FBZUEsS0FBSyxDQUFDNkMsTUFBckI7Q0EvRmIsRUFzR0U7TUFBRzdDLEtBQUgsU0FBR0EsS0FBSDtTQUFlQSxLQUFLLENBQUMrQyxJQUFyQjtDQXRHRixFQTZHSTtNQUFHL0MsS0FBSCxTQUFHQSxLQUFIO1NBQWVBLEtBQUssQ0FBQytDLElBQXJCO0NBN0dKLEVBb0hJO01BQUcvQyxLQUFILFNBQUdBLEtBQUg7U0FBZUEsS0FBSyxDQUFDK0MsSUFBckI7Q0FwSEosQ0FBYjtBQStIQUQsT0FBTyxDQUFDNUIsV0FBUixHQUFzQixTQUF0Qjs7Ozs7Ozs7Ozs7QUNqSUE7RUFFQThCLGtCQUFBLEdBQXFCLElBQXJCO0VBQ0FBLGVBQUEsR0FBa0JDLEtBQWxCOzs7OztXQU1TQyxPQUFULENBQWlCQyxDQUFqQixFQUFvQkMsTUFBcEIsRUFBNEJDLEdBQTVCLEVBQWlDO1dBQ3hCLFNBQVNDLEVBQVQsR0FBYzs7VUFFZkMsUUFBUSxHQUFHRixHQUFHLENBQUNHLE1BQUosQ0FBV0MsS0FBSyxDQUFDQyxTQUFOLENBQWdCQyxLQUFoQixDQUFzQkMsSUFBdEIsQ0FBMkJDLFNBQTNCLENBQVgsQ0FBZjthQUNPTixRQUFRLENBQUNILE1BQVQsSUFBbUJBLE1BQW5CLEdBQTRCRCxDQUFDLENBQUNXLEtBQUYsQ0FBUSxJQUFSLEVBQWNQLFFBQWQsQ0FBNUIsR0FBc0RMLE9BQU8sQ0FBQ0MsQ0FBRCxFQUFJQyxNQUFKLEVBQVlHLFFBQVosQ0FBcEU7S0FIRjs7OztXQVFPTixLQUFULENBQWVFLENBQWYsRUFBa0I7O1dBRVRELE9BQU8sQ0FBQ0MsQ0FBRCxFQUFJQSxDQUFDLENBQUNDLE1BQU4sRUFBYyxFQUFkLENBQWQ7OztFQUdGVyxjQUFBLEdBQWlCZixPQUFPLENBQUNnQixPQUF6Qjs7Ozs7O0FDdkJBO0VBRUFoQixrQkFBQSxHQUFxQixJQUFyQjtFQUNBQSxlQUFBLEdBQWtCLEtBQUssQ0FBdkI7O1dBRVNpQixLQUFULENBQWVDLGFBQWYsRUFBOEJDLGFBQTlCLEVBQTZDOUMsS0FBN0MsRUFBb0Q7V0FDM0NDLElBQUksQ0FBQzhDLEdBQUwsQ0FBU0YsYUFBVCxFQUF3QjVDLElBQUksQ0FBQytDLEdBQUwsQ0FBU0YsYUFBVCxFQUF3QjlDLEtBQXhCLENBQXhCLENBQVA7OztNQUdFaUQsUUFBUSxHQUFHTCxLQUFmO0VBQ0FqQixlQUFBLEdBQWtCc0IsUUFBbEI7RUFDQVAsY0FBQSxHQUFpQmYsT0FBTyxDQUFDZ0IsT0FBekI7Ozs7OztBQ1hBO0VBRUFoQixrQkFBQSxHQUFxQixJQUFyQjtFQUNBQSxlQUFBLEdBQWtCLEtBQUssQ0FBdkI7O1dBRVN1QixVQUFULENBQW9CQyxLQUFwQixFQUEyQjtXQUNsQmxELElBQUksQ0FBQ21ELEtBQUwsQ0FBV0QsS0FBSyxHQUFHLEdBQW5CLENBQVA7OztXQUdPRSxZQUFULENBQXNCQyxHQUF0QixFQUEyQkMsS0FBM0IsRUFBa0NDLElBQWxDLEVBQXdDO1dBQy9CTixVQUFVLENBQUNJLEdBQUQsQ0FBVixHQUFrQixHQUFsQixHQUF3QkosVUFBVSxDQUFDSyxLQUFELENBQWxDLEdBQTRDLEdBQTVDLEdBQWtETCxVQUFVLENBQUNNLElBQUQsQ0FBbkU7OztXQUdPQyxRQUFULENBQWtCQyxHQUFsQixFQUF1QkMsVUFBdkIsRUFBbUNDLFNBQW5DLEVBQThDQyxPQUE5QyxFQUF1RDtRQUNqREEsT0FBTyxLQUFLLEtBQUssQ0FBckIsRUFBd0I7TUFDdEJBLE9BQU8sR0FBR1IsWUFBVjs7O1FBR0VNLFVBQVUsS0FBSyxDQUFuQixFQUFzQjs7YUFFYkUsT0FBTyxDQUFDRCxTQUFELEVBQVlBLFNBQVosRUFBdUJBLFNBQXZCLENBQWQ7S0FQbUQ7OztRQVdqREUsUUFBUSxHQUFHSixHQUFHLEdBQUcsR0FBTixHQUFZLEVBQTNCO1FBQ0lLLE1BQU0sR0FBRyxDQUFDLElBQUk5RCxJQUFJLENBQUMrRCxHQUFMLENBQVMsSUFBSUosU0FBSixHQUFnQixDQUF6QixDQUFMLElBQW9DRCxVQUFqRDtRQUNJTSxlQUFlLEdBQUdGLE1BQU0sSUFBSSxJQUFJOUQsSUFBSSxDQUFDK0QsR0FBTCxDQUFTRixRQUFRLEdBQUcsQ0FBWCxHQUFlLENBQXhCLENBQVIsQ0FBNUI7UUFDSVIsR0FBRyxHQUFHLENBQVY7UUFDSUMsS0FBSyxHQUFHLENBQVo7UUFDSUMsSUFBSSxHQUFHLENBQVg7O1FBRUlNLFFBQVEsSUFBSSxDQUFaLElBQWlCQSxRQUFRLEdBQUcsQ0FBaEMsRUFBbUM7TUFDakNSLEdBQUcsR0FBR1MsTUFBTjtNQUNBUixLQUFLLEdBQUdVLGVBQVI7S0FGRixNQUdPLElBQUlILFFBQVEsSUFBSSxDQUFaLElBQWlCQSxRQUFRLEdBQUcsQ0FBaEMsRUFBbUM7TUFDeENSLEdBQUcsR0FBR1csZUFBTjtNQUNBVixLQUFLLEdBQUdRLE1BQVI7S0FGSyxNQUdBLElBQUlELFFBQVEsSUFBSSxDQUFaLElBQWlCQSxRQUFRLEdBQUcsQ0FBaEMsRUFBbUM7TUFDeENQLEtBQUssR0FBR1EsTUFBUjtNQUNBUCxJQUFJLEdBQUdTLGVBQVA7S0FGSyxNQUdBLElBQUlILFFBQVEsSUFBSSxDQUFaLElBQWlCQSxRQUFRLEdBQUcsQ0FBaEMsRUFBbUM7TUFDeENQLEtBQUssR0FBR1UsZUFBUjtNQUNBVCxJQUFJLEdBQUdPLE1BQVA7S0FGSyxNQUdBLElBQUlELFFBQVEsSUFBSSxDQUFaLElBQWlCQSxRQUFRLEdBQUcsQ0FBaEMsRUFBbUM7TUFDeENSLEdBQUcsR0FBR1csZUFBTjtNQUNBVCxJQUFJLEdBQUdPLE1BQVA7S0FGSyxNQUdBLElBQUlELFFBQVEsSUFBSSxDQUFaLElBQWlCQSxRQUFRLEdBQUcsQ0FBaEMsRUFBbUM7TUFDeENSLEdBQUcsR0FBR1MsTUFBTjtNQUNBUCxJQUFJLEdBQUdTLGVBQVA7OztRQUdFQyxxQkFBcUIsR0FBR04sU0FBUyxHQUFHRyxNQUFNLEdBQUcsQ0FBakQ7UUFDSUksUUFBUSxHQUFHYixHQUFHLEdBQUdZLHFCQUFyQjtRQUNJRSxVQUFVLEdBQUdiLEtBQUssR0FBR1cscUJBQXpCO1FBQ0lHLFNBQVMsR0FBR2IsSUFBSSxHQUFHVSxxQkFBdkI7V0FDT0wsT0FBTyxDQUFDTSxRQUFELEVBQVdDLFVBQVgsRUFBdUJDLFNBQXZCLENBQWQ7OztNQUdFcEIsUUFBUSxHQUFHUSxRQUFmO0VBQ0E5QixlQUFBLEdBQWtCc0IsUUFBbEI7RUFDQVAsY0FBQSxHQUFpQmYsT0FBTyxDQUFDZ0IsT0FBekI7Ozs7OztBQzVEQTtFQUVBaEIsa0JBQUEsR0FBcUIsSUFBckI7RUFDQUEsZUFBQSxHQUFrQixLQUFLLENBQXZCO01BQ0kyQyxhQUFhLEdBQUc7SUFDbEJDLFNBQVMsRUFBRSxRQURPO0lBRWxCQyxZQUFZLEVBQUUsUUFGSTtJQUdsQkMsSUFBSSxFQUFFLFFBSFk7SUFJbEJDLFVBQVUsRUFBRSxRQUpNO0lBS2xCQyxLQUFLLEVBQUUsUUFMVztJQU1sQkMsS0FBSyxFQUFFLFFBTlc7SUFPbEJDLE1BQU0sRUFBRSxRQVBVO0lBUWxCQyxLQUFLLEVBQUUsS0FSVztJQVNsQkMsY0FBYyxFQUFFLFFBVEU7SUFVbEJ2QixJQUFJLEVBQUUsUUFWWTtJQVdsQndCLFVBQVUsRUFBRSxRQVhNO0lBWWxCQyxLQUFLLEVBQUUsUUFaVztJQWFsQkMsU0FBUyxFQUFFLFFBYk87SUFjbEJDLFNBQVMsRUFBRSxRQWRPO0lBZWxCQyxVQUFVLEVBQUUsUUFmTTtJQWdCbEJDLFNBQVMsRUFBRSxRQWhCTztJQWlCbEJDLEtBQUssRUFBRSxRQWpCVztJQWtCbEJDLGNBQWMsRUFBRSxRQWxCRTtJQW1CbEJDLFFBQVEsRUFBRSxRQW5CUTtJQW9CbEJDLE9BQU8sRUFBRSxRQXBCUztJQXFCbEJDLElBQUksRUFBRSxRQXJCWTtJQXNCbEJDLFFBQVEsRUFBRSxRQXRCUTtJQXVCbEJDLFFBQVEsRUFBRSxRQXZCUTtJQXdCbEJDLGFBQWEsRUFBRSxRQXhCRztJQXlCbEJDLFFBQVEsRUFBRSxRQXpCUTtJQTBCbEJDLFNBQVMsRUFBRSxRQTFCTztJQTJCbEJDLFFBQVEsRUFBRSxRQTNCUTtJQTRCbEJDLFNBQVMsRUFBRSxRQTVCTztJQTZCbEJDLFdBQVcsRUFBRSxRQTdCSztJQThCbEJDLGNBQWMsRUFBRSxRQTlCRTtJQStCbEJDLFVBQVUsRUFBRSxRQS9CTTtJQWdDbEJDLFVBQVUsRUFBRSxRQWhDTTtJQWlDbEJDLE9BQU8sRUFBRSxRQWpDUztJQWtDbEJDLFVBQVUsRUFBRSxRQWxDTTtJQW1DbEJDLFlBQVksRUFBRSxRQW5DSTtJQW9DbEJDLGFBQWEsRUFBRSxRQXBDRztJQXFDbEJDLGFBQWEsRUFBRSxRQXJDRztJQXNDbEJDLGFBQWEsRUFBRSxRQXRDRztJQXVDbEJDLGFBQWEsRUFBRSxRQXZDRztJQXdDbEJDLFVBQVUsRUFBRSxRQXhDTTtJQXlDbEJDLFFBQVEsRUFBRSxRQXpDUTtJQTBDbEJDLFdBQVcsRUFBRSxRQTFDSztJQTJDbEJDLE9BQU8sRUFBRSxRQTNDUztJQTRDbEJDLE9BQU8sRUFBRSxRQTVDUztJQTZDbEJDLFVBQVUsRUFBRSxRQTdDTTtJQThDbEJDLFNBQVMsRUFBRSxRQTlDTztJQStDbEJDLFdBQVcsRUFBRSxRQS9DSztJQWdEbEJDLFdBQVcsRUFBRSxRQWhESztJQWlEbEJDLE9BQU8sRUFBRSxRQWpEUztJQWtEbEJDLFNBQVMsRUFBRSxRQWxETztJQW1EbEJDLFVBQVUsRUFBRSxRQW5ETTtJQW9EbEJDLElBQUksRUFBRSxRQXBEWTtJQXFEbEJDLFNBQVMsRUFBRSxRQXJETztJQXNEbEJDLElBQUksRUFBRSxRQXREWTtJQXVEbEJwRSxLQUFLLEVBQUUsUUF2RFc7SUF3RGxCcUUsV0FBVyxFQUFFLFFBeERLO0lBeURsQkMsSUFBSSxFQUFFLFFBekRZO0lBMERsQkMsUUFBUSxFQUFFLFFBMURRO0lBMkRsQkMsT0FBTyxFQUFFLFFBM0RTO0lBNERsQkMsU0FBUyxFQUFFLFFBNURPO0lBNkRsQkMsTUFBTSxFQUFFLFFBN0RVO0lBOERsQkMsS0FBSyxFQUFFLFFBOURXO0lBK0RsQkMsS0FBSyxFQUFFLFFBL0RXO0lBZ0VsQkMsUUFBUSxFQUFFLFFBaEVRO0lBaUVsQkMsYUFBYSxFQUFFLFFBakVHO0lBa0VsQkMsU0FBUyxFQUFFLFFBbEVPO0lBbUVsQkMsWUFBWSxFQUFFLFFBbkVJO0lBb0VsQkMsU0FBUyxFQUFFLFFBcEVPO0lBcUVsQkMsVUFBVSxFQUFFLFFBckVNO0lBc0VsQkMsU0FBUyxFQUFFLFFBdEVPO0lBdUVsQkMsb0JBQW9CLEVBQUUsUUF2RUo7SUF3RWxCQyxTQUFTLEVBQUUsUUF4RU87SUF5RWxCQyxVQUFVLEVBQUUsUUF6RU07SUEwRWxCQyxTQUFTLEVBQUUsUUExRU87SUEyRWxCQyxTQUFTLEVBQUUsUUEzRU87SUE0RWxCQyxXQUFXLEVBQUUsUUE1RUs7SUE2RWxCQyxhQUFhLEVBQUUsUUE3RUc7SUE4RWxCQyxZQUFZLEVBQUUsUUE5RUk7SUErRWxCQyxjQUFjLEVBQUUsS0EvRUU7SUFnRmxCQyxjQUFjLEVBQUUsS0FoRkU7SUFpRmxCQyxjQUFjLEVBQUUsUUFqRkU7SUFrRmxCQyxXQUFXLEVBQUUsUUFsRks7SUFtRmxCQyxJQUFJLEVBQUUsS0FuRlk7SUFvRmxCQyxTQUFTLEVBQUUsUUFwRk87SUFxRmxCQyxLQUFLLEVBQUUsUUFyRlc7SUFzRmxCQyxPQUFPLEVBQUUsS0F0RlM7SUF1RmxCQyxNQUFNLEVBQUUsUUF2RlU7SUF3RmxCQyxnQkFBZ0IsRUFBRSxRQXhGQTtJQXlGbEJDLFVBQVUsRUFBRSxRQXpGTTtJQTBGbEJDLFlBQVksRUFBRSxRQTFGSTtJQTJGbEJDLFlBQVksRUFBRSxRQTNGSTtJQTRGbEJDLGNBQWMsRUFBRSxRQTVGRTtJQTZGbEJDLGVBQWUsRUFBRSxRQTdGQztJQThGbEJDLGlCQUFpQixFQUFFLFFBOUZEO0lBK0ZsQkMsZUFBZSxFQUFFLFFBL0ZDO0lBZ0dsQkMsZUFBZSxFQUFFLFFBaEdDO0lBaUdsQkMsWUFBWSxFQUFFLFFBakdJO0lBa0dsQkMsU0FBUyxFQUFFLFFBbEdPO0lBbUdsQkMsU0FBUyxFQUFFLFFBbkdPO0lBb0dsQkMsUUFBUSxFQUFFLFFBcEdRO0lBcUdsQkMsV0FBVyxFQUFFLFFBckdLO0lBc0dsQkMsSUFBSSxFQUFFLFFBdEdZO0lBdUdsQkMsT0FBTyxFQUFFLFFBdkdTO0lBd0dsQkMsS0FBSyxFQUFFLFFBeEdXO0lBeUdsQkMsU0FBUyxFQUFFLFFBekdPO0lBMEdsQkMsTUFBTSxFQUFFLFFBMUdVO0lBMkdsQkMsU0FBUyxFQUFFLFFBM0dPO0lBNEdsQkMsTUFBTSxFQUFFLFFBNUdVO0lBNkdsQkMsYUFBYSxFQUFFLFFBN0dHO0lBOEdsQkMsU0FBUyxFQUFFLFFBOUdPO0lBK0dsQkMsYUFBYSxFQUFFLFFBL0dHO0lBZ0hsQkMsYUFBYSxFQUFFLFFBaEhHO0lBaUhsQkMsVUFBVSxFQUFFLFFBakhNO0lBa0hsQkMsU0FBUyxFQUFFLFFBbEhPO0lBbUhsQkMsSUFBSSxFQUFFLFFBbkhZO0lBb0hsQkMsSUFBSSxFQUFFLFFBcEhZO0lBcUhsQkMsSUFBSSxFQUFFLFFBckhZO0lBc0hsQkMsVUFBVSxFQUFFLFFBdEhNO0lBdUhsQkMsTUFBTSxFQUFFLFFBdkhVO0lBd0hsQkMsYUFBYSxFQUFFLEtBeEhHO0lBeUhsQnRJLEdBQUcsRUFBRSxLQXpIYTtJQTBIbEJ1SSxTQUFTLEVBQUUsUUExSE87SUEySGxCQyxTQUFTLEVBQUUsUUEzSE87SUE0SGxCQyxXQUFXLEVBQUUsUUE1SEs7SUE2SGxCQyxNQUFNLEVBQUUsUUE3SFU7SUE4SGxCQyxVQUFVLEVBQUUsUUE5SE07SUErSGxCQyxRQUFRLEVBQUUsUUEvSFE7SUFnSWxCQyxRQUFRLEVBQUUsUUFoSVE7SUFpSWxCQyxNQUFNLEVBQUUsUUFqSVU7SUFrSWxCQyxNQUFNLEVBQUUsUUFsSVU7SUFtSWxCQyxPQUFPLEVBQUUsUUFuSVM7SUFvSWxCQyxTQUFTLEVBQUUsUUFwSU87SUFxSWxCQyxTQUFTLEVBQUUsUUFySU87SUFzSWxCQyxTQUFTLEVBQUUsUUF0SU87SUF1SWxCQyxJQUFJLEVBQUUsUUF2SVk7SUF3SWxCQyxXQUFXLEVBQUUsUUF4SUs7SUF5SWxCQyxTQUFTLEVBQUUsUUF6SU87SUEwSWxCQyxHQUFHLEVBQUUsUUExSWE7SUEySWxCQyxJQUFJLEVBQUUsUUEzSVk7SUE0SWxCQyxPQUFPLEVBQUUsUUE1SVM7SUE2SWxCQyxNQUFNLEVBQUUsUUE3SVU7SUE4SWxCQyxTQUFTLEVBQUUsUUE5SU87SUErSWxCQyxNQUFNLEVBQUUsUUEvSVU7SUFnSmxCQyxLQUFLLEVBQUUsUUFoSlc7SUFpSmxCQyxLQUFLLEVBQUUsS0FqSlc7SUFrSmxCQyxVQUFVLEVBQUUsUUFsSk07SUFtSmxCQyxNQUFNLEVBQUUsS0FuSlU7SUFvSmxCQyxXQUFXLEVBQUU7Ozs7OztHQXBKZjs7V0E0SlNDLFNBQVQsQ0FBbUJySyxLQUFuQixFQUEwQjtRQUNwQixPQUFPQSxLQUFQLEtBQWlCLFFBQXJCLEVBQStCLE9BQU9BLEtBQVA7UUFDM0JzSyxtQkFBbUIsR0FBR3RLLEtBQUssQ0FBQ3VLLFdBQU4sRUFBMUI7V0FDT3BKLGFBQWEsQ0FBQ21KLG1CQUFELENBQWIsR0FBcUMsTUFBTW5KLGFBQWEsQ0FBQ21KLG1CQUFELENBQXhELEdBQWdGdEssS0FBdkY7OztNQUdFRixRQUFRLEdBQUd1SyxTQUFmO0VBQ0E3TCxlQUFBLEdBQWtCc0IsUUFBbEI7RUFDQVAsY0FBQSxHQUFpQmYsT0FBTyxDQUFDZ0IsT0FBekI7Ozs7OztBQ3hLQTtFQUVBaEIsa0JBQUEsR0FBcUIsSUFBckI7RUFDQUEsZUFBQSxHQUFrQixLQUFLLENBQXZCOztXQUVTZ00sc0JBQVQsQ0FBZ0NDLElBQWhDLEVBQXNDO1FBQU1BLElBQUksS0FBSyxLQUFLLENBQWxCLEVBQXFCO1lBQVEsSUFBSUMsY0FBSixDQUFtQiwyREFBbkIsQ0FBTjs7O1dBQWdHRCxJQUFQOzs7V0FFL0lFLGNBQVQsQ0FBd0JDLFFBQXhCLEVBQWtDQyxVQUFsQyxFQUE4QztJQUFFRCxRQUFRLENBQUMxTCxTQUFULEdBQXFCNEwsTUFBTSxDQUFDQyxNQUFQLENBQWNGLFVBQVUsQ0FBQzNMLFNBQXpCLENBQXJCO0lBQTBEMEwsUUFBUSxDQUFDMUwsU0FBVCxDQUFtQjhMLFdBQW5CLEdBQWlDSixRQUFqQztJQUEyQ0EsUUFBUSxDQUFDSyxTQUFULEdBQXFCSixVQUFyQjs7O1dBRTVJSyxnQkFBVCxDQUEwQkMsS0FBMUIsRUFBaUM7UUFBTUMsTUFBTSxHQUFHLE9BQU9DLEdBQVAsS0FBZSxVQUFmLEdBQTRCLElBQUlBLEdBQUosRUFBNUIsR0FBd0NDLFNBQXJEOztJQUFnRUosZ0JBQWdCLEdBQUcsU0FBU0EsZ0JBQVQsQ0FBMEJDLEtBQTFCLEVBQWlDO1VBQU1BLEtBQUssS0FBSyxJQUFWLElBQWtCLENBQUNJLGlCQUFpQixDQUFDSixLQUFELENBQXhDLEVBQWlELE9BQU9BLEtBQVA7O1VBQWtCLE9BQU9BLEtBQVAsS0FBaUIsVUFBckIsRUFBaUM7Y0FBUSxJQUFJSyxTQUFKLENBQWMsb0RBQWQsQ0FBTjs7O1VBQWlGLE9BQU9KLE1BQVAsS0FBa0IsV0FBdEIsRUFBbUM7WUFBTUEsTUFBTSxDQUFDSyxHQUFQLENBQVdOLEtBQVgsQ0FBSixFQUF1QixPQUFPQyxNQUFNLENBQUNNLEdBQVAsQ0FBV1AsS0FBWCxDQUFQOztRQUEwQkMsTUFBTSxDQUFDTyxHQUFQLENBQVdSLEtBQVgsRUFBa0JTLE9BQWxCOzs7ZUFBdUNBLE9BQVQsR0FBbUI7ZUFBU0MsVUFBVSxDQUFDVixLQUFELEVBQVE5TCxTQUFSLEVBQW1CeU0sZUFBZSxDQUFDLElBQUQsQ0FBZixDQUFzQmQsV0FBekMsQ0FBakI7OztNQUEwRVksT0FBTyxDQUFDMU0sU0FBUixHQUFvQjRMLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjSSxLQUFLLENBQUNqTSxTQUFwQixFQUErQjtRQUFFOEwsV0FBVyxFQUFFO1VBQUVuTyxLQUFLLEVBQUUrTyxPQUFUO1VBQWtCRyxVQUFVLEVBQUUsS0FBOUI7VUFBcUNDLFFBQVEsRUFBRSxJQUEvQztVQUFxREMsWUFBWSxFQUFFOztPQUFqSCxDQUFwQjthQUF1SkMsZUFBZSxDQUFDTixPQUFELEVBQVVULEtBQVYsQ0FBdEI7S0FBeGtCOztXQUEwbkJELGdCQUFnQixDQUFDQyxLQUFELENBQXZCOzs7V0FFN3NCZ0Isd0JBQVQsR0FBb0M7UUFBTSxPQUFPQyxPQUFQLEtBQW1CLFdBQW5CLElBQWtDLENBQUNBLE9BQU8sQ0FBQ0MsU0FBL0MsRUFBMEQsT0FBTyxLQUFQO1FBQWtCRCxPQUFPLENBQUNDLFNBQVIsQ0FBa0JDLElBQXRCLEVBQTRCLE9BQU8sS0FBUDtRQUFrQixPQUFPQyxLQUFQLEtBQWlCLFVBQXJCLEVBQWlDLE9BQU8sSUFBUDs7UUFBaUI7TUFBRUMsSUFBSSxDQUFDdE4sU0FBTCxDQUFldU4sUUFBZixDQUF3QnJOLElBQXhCLENBQTZCZ04sT0FBTyxDQUFDQyxTQUFSLENBQWtCRyxJQUFsQixFQUF3QixFQUF4QixFQUE0QixZQUFZLEVBQXhDLENBQTdCO2FBQWtGLElBQVA7S0FBakYsQ0FBZ0csT0FBT0UsQ0FBUCxFQUFVO2FBQVMsS0FBUDs7OztXQUV6U2IsVUFBVCxDQUFvQmMsTUFBcEIsRUFBNEJDLElBQTVCLEVBQWtDekIsS0FBbEMsRUFBeUM7UUFBTWdCLHdCQUF3QixFQUE1QixFQUFnQztNQUFFTixVQUFVLEdBQUdPLE9BQU8sQ0FBQ0MsU0FBckI7S0FBbEMsTUFBeUU7TUFBRVIsVUFBVSxHQUFHLFNBQVNBLFVBQVQsQ0FBb0JjLE1BQXBCLEVBQTRCQyxJQUE1QixFQUFrQ3pCLEtBQWxDLEVBQXlDO1lBQU0wQixDQUFDLEdBQUcsQ0FBQyxJQUFELENBQVI7UUFBZ0JBLENBQUMsQ0FBQ0MsSUFBRixDQUFPeE4sS0FBUCxDQUFhdU4sQ0FBYixFQUFnQkQsSUFBaEI7WUFBMkJHLFdBQVcsR0FBR0MsUUFBUSxDQUFDQyxJQUFULENBQWMzTixLQUFkLENBQW9CcU4sTUFBcEIsRUFBNEJFLENBQTVCLENBQWxCO1lBQXNESyxRQUFRLEdBQUcsSUFBSUgsV0FBSixFQUFmO1lBQXNDNUIsS0FBSixFQUFXZSxlQUFlLENBQUNnQixRQUFELEVBQVcvQixLQUFLLENBQUNqTSxTQUFqQixDQUFmO2VBQW1EZ08sUUFBUDtPQUExTzs7O1dBQXVRckIsVUFBVSxDQUFDdk0sS0FBWCxDQUFpQixJQUFqQixFQUF1QkQsU0FBdkIsQ0FBUDs7O1dBRTdXa00saUJBQVQsQ0FBMkJ6TSxFQUEzQixFQUErQjtXQUFTa08sUUFBUSxDQUFDUCxRQUFULENBQWtCck4sSUFBbEIsQ0FBdUJOLEVBQXZCLEVBQTJCcU8sT0FBM0IsQ0FBbUMsZUFBbkMsTUFBd0QsQ0FBQyxDQUFoRTs7O1dBRXhCakIsZUFBVCxDQUF5QmtCLENBQXpCLEVBQTRCQyxDQUE1QixFQUErQjtJQUFFbkIsZUFBZSxHQUFHcEIsTUFBTSxDQUFDd0MsY0FBUCxJQUF5QixTQUFTcEIsZUFBVCxDQUF5QmtCLENBQXpCLEVBQTRCQyxDQUE1QixFQUErQjtNQUFFRCxDQUFDLENBQUNuQyxTQUFGLEdBQWNvQyxDQUFkO2FBQXdCRCxDQUFQO0tBQTdGOztXQUFpSGxCLGVBQWUsQ0FBQ2tCLENBQUQsRUFBSUMsQ0FBSixDQUF0Qjs7O1dBRWxJdkIsZUFBVCxDQUF5QnNCLENBQXpCLEVBQTRCO0lBQUV0QixlQUFlLEdBQUdoQixNQUFNLENBQUN3QyxjQUFQLEdBQXdCeEMsTUFBTSxDQUFDeUMsY0FBL0IsR0FBZ0QsU0FBU3pCLGVBQVQsQ0FBeUJzQixDQUF6QixFQUE0QjthQUFTQSxDQUFDLENBQUNuQyxTQUFGLElBQWVILE1BQU0sQ0FBQ3lDLGNBQVAsQ0FBc0JILENBQXRCLENBQXRCO0tBQWhHO1dBQTBKdEIsZUFBZSxDQUFDc0IsQ0FBRCxDQUF0Qjs7Ozs7Ozs7O01BUTdLSSxNQUFNLEdBQUc7U0FDTixtS0FETTtTQUVOLHNMQUZNO1NBR04sdUdBSE07U0FJTixpRUFKTTtTQUtOLG9IQUxNO1NBTU4sdUpBTk07U0FPTiwyS0FQTTtTQVFOLGdIQVJNO1NBU04sa0VBVE07VUFVTCxtR0FWSztVQVdMLCtGQVhLO1VBWUwsOEdBWks7VUFhTCwrR0FiSztVQWNMLDJGQWRLO1VBZUwsMEZBZks7VUFnQkwsaURBaEJLO1VBaUJMLDhEQWpCSztVQWtCTCwwRkFsQks7VUFtQkwsc0ZBbkJLO1VBb0JMLDJHQXBCSztVQXFCTCw4R0FyQks7VUFzQkwsZ0dBdEJLO1VBdUJMLCtDQXZCSztVQXdCTCxxRkF4Qks7VUF5QkwsaURBekJLO1VBMEJMLGtEQTFCSztVQTJCTCx3RUEzQks7VUE0Qkwsc0VBNUJLO1VBNkJMLDhGQTdCSztVQThCTCx3RkE5Qks7VUErQkwseUhBL0JLO1VBZ0NMLGdOQWhDSztVQWlDTCxrSUFqQ0s7VUFrQ0wsdUZBbENLO1VBbUNMLG1HQW5DSztVQW9DTCxzQ0FwQ0s7VUFxQ0wseUJBckNLO1VBc0NMLCtEQXRDSztVQXVDTCxtREF2Q0s7VUF3Q0wscURBeENLO1VBeUNMLHFFQXpDSztVQTBDTCxrRUExQ0s7VUEyQ0wsbUdBM0NLO1VBNENMLGdHQTVDSztVQTZDTCw4RkE3Q0s7VUE4Q0wsOEZBOUNLO1VBK0NMLDBGQS9DSztVQWdETCxzRkFoREs7VUFpREwsMkdBakRLO1VBa0RMLHdHQWxESztVQW1ETCwwRkFuREs7VUFvREwscUZBcERLO1VBcURMLGlEQXJESztVQXNETCxrREF0REs7VUF1REwsK0NBdkRLO1VBd0RMLHdFQXhESztVQXlETCx3RUF6REs7VUEwREwsc0VBMURLO1VBMkRMLDhGQTNESztVQTRETCx3RkE1REs7VUE2REwsc0NBN0RLO1VBOERMLHVGQTlESztVQStETCxtR0EvREs7VUFnRUwsMEhBaEVLO1VBaUVMLGtOQWpFSztVQWtFTCxtSUFsRUs7VUFtRUwsaURBbkVLO1VBb0VMLDhEQXBFSztVQXFFTCwwR0FyRUs7VUFzRUwsMkdBdEVLO1VBdUVMLHFGQXZFSztVQXdFTDtHQXhFUjs7Ozs7O1dBK0VTQyxNQUFULEdBQWtCO1NBQ1gsSUFBSUMsSUFBSSxHQUFHck8sU0FBUyxDQUFDVCxNQUFyQixFQUE2QmdPLElBQUksR0FBRyxJQUFJM04sS0FBSixDQUFVeU8sSUFBVixDQUFwQyxFQUFxREMsSUFBSSxHQUFHLENBQWpFLEVBQW9FQSxJQUFJLEdBQUdELElBQTNFLEVBQWlGQyxJQUFJLEVBQXJGLEVBQXlGO01BQ3ZGZixJQUFJLENBQUNlLElBQUQsQ0FBSixHQUFhdE8sU0FBUyxDQUFDc08sSUFBRCxDQUF0Qjs7O1FBR0VkLENBQUMsR0FBR0QsSUFBSSxDQUFDLENBQUQsQ0FBWjtRQUNJZ0IsQ0FBQyxHQUFHLEVBQVI7UUFDSUMsQ0FBSjs7U0FFS0EsQ0FBQyxHQUFHLENBQVQsRUFBWUEsQ0FBQyxHQUFHakIsSUFBSSxDQUFDaE8sTUFBckIsRUFBNkJpUCxDQUFDLElBQUksQ0FBbEMsRUFBcUM7TUFDbkNELENBQUMsQ0FBQ2QsSUFBRixDQUFPRixJQUFJLENBQUNpQixDQUFELENBQVg7OztJQUdGRCxDQUFDLENBQUNFLE9BQUYsQ0FBVSxVQUFVQyxDQUFWLEVBQWE7TUFDckJsQixDQUFDLEdBQUdBLENBQUMsQ0FBQ21CLE9BQUYsQ0FBVSxRQUFWLEVBQW9CRCxDQUFwQixDQUFKO0tBREY7V0FHT2xCLENBQVA7Ozs7Ozs7OztNQVNFb0IsYUFBYTs7WUFFUEMsTUFBVixFQUFrQjtJQUNoQnZELGNBQWMsQ0FBQ3NELGFBQUQsRUFBZ0JDLE1BQWhCLENBQWQ7O2FBRVNELGFBQVQsQ0FBdUJqUSxJQUF2QixFQUE2QjtVQUN2Qm1RLEtBQUo7O1VBRUlDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxRQUFaLEtBQXlCLFlBQTdCLEVBQTJDO1FBQ3pDSCxLQUFLLEdBQUdELE1BQU0sQ0FBQzlPLElBQVAsQ0FBWSxJQUFaLEVBQWtCLDBHQUEwR3BCLElBQTFHLEdBQWlILHdCQUFuSSxLQUFnSyxJQUF4SztPQURGLE1BRU87YUFDQSxJQUFJdVEsS0FBSyxHQUFHbFAsU0FBUyxDQUFDVCxNQUF0QixFQUE4QmdPLElBQUksR0FBRyxJQUFJM04sS0FBSixDQUFVc1AsS0FBSyxHQUFHLENBQVIsR0FBWUEsS0FBSyxHQUFHLENBQXBCLEdBQXdCLENBQWxDLENBQXJDLEVBQTJFQyxLQUFLLEdBQUcsQ0FBeEYsRUFBMkZBLEtBQUssR0FBR0QsS0FBbkcsRUFBMEdDLEtBQUssRUFBL0csRUFBbUg7VUFDakg1QixJQUFJLENBQUM0QixLQUFLLEdBQUcsQ0FBVCxDQUFKLEdBQWtCblAsU0FBUyxDQUFDbVAsS0FBRCxDQUEzQjs7O1FBR0ZMLEtBQUssR0FBR0QsTUFBTSxDQUFDOU8sSUFBUCxDQUFZLElBQVosRUFBa0JxTyxNQUFNLENBQUNuTyxLQUFQLENBQWEsS0FBSyxDQUFsQixFQUFxQixDQUFDa08sTUFBTSxDQUFDeFAsSUFBRCxDQUFQLEVBQWVnQixNQUFmLENBQXNCNE4sSUFBdEIsQ0FBckIsQ0FBbEIsS0FBd0UsSUFBaEY7OzthQUdLcEMsc0JBQXNCLENBQUMyRCxLQUFELENBQTdCOzs7V0FHS0YsYUFBUDtHQW5CRjs7RUFzQkEvQyxnQkFBZ0IsQ0FBQ3VELEtBQUQsQ0F0QmhCLENBRkE7O0VBMEJBalEsZUFBQSxHQUFrQnlQLGFBQWxCO0VBQ0ExTyxjQUFBLEdBQWlCZixPQUFPLENBQUNnQixPQUF6Qjs7Ozs7O0FDOUpBO0VBRUFoQixrQkFBQSxHQUFxQixJQUFyQjtFQUNBQSxlQUFBLEdBQWtCLEtBQUssQ0FBdkI7O01BRUlrUSxXQUFTOztFQUViQyxzQkFBc0I7O0VBRXRCQyxTQUZzQixDQUZ0Qjs7TUFNSUMsWUFBVTs7RUFFZEYsc0JBQXNCOztFQUV0QkcsVUFGc0IsQ0FGdEI7O01BTUlDLFNBQU87O0VBRVhKLHNCQUFzQjs7RUFFdEJLLE9BRnNCLENBRnRCOztXQU1TTCxzQkFBVCxDQUFnQ00sR0FBaEMsRUFBcUM7V0FBU0EsR0FBRyxJQUFJQSxHQUFHLENBQUNDLFVBQVgsR0FBd0JELEdBQXhCLEdBQThCO01BQUV6UCxPQUFPLEVBQUV5UDtLQUFoRDs7O01BRW5DRSxRQUFRLEdBQUcsbUJBQWY7TUFDSUMsWUFBWSxHQUFHLG1CQUFuQjtNQUNJQyxlQUFlLEdBQUcsbUJBQXRCO01BQ0lDLG1CQUFtQixHQUFHLG1CQUExQjtNQUNJQyxRQUFRLEdBQUcsMERBQWY7TUFDSUMsU0FBUyxHQUFHLHlGQUFoQjtNQUNJQyxRQUFRLEdBQUcsc0VBQWY7TUFDSUMsU0FBUyxHQUFHLHFHQUFoQjs7Ozs7Ozs7Ozs7OztXQWFTQyxVQUFULENBQW9CM1AsS0FBcEIsRUFBMkI7UUFDckIsT0FBT0EsS0FBUCxLQUFpQixRQUFyQixFQUErQjtZQUN2QixJQUFJK08sU0FBTyxDQUFDdlAsT0FBWixDQUFvQixDQUFwQixDQUFOOzs7UUFHRW9RLGVBQWUsR0FBRyxDQUFDLEdBQUdmLFlBQVUsQ0FBQ3JQLE9BQWYsRUFBd0JRLEtBQXhCLENBQXRCOztRQUVJNFAsZUFBZSxDQUFDQyxLQUFoQixDQUFzQlYsUUFBdEIsQ0FBSixFQUFxQzthQUM1QjtRQUNMaFAsR0FBRyxFQUFFMlAsUUFBUSxDQUFDLEtBQUtGLGVBQWUsQ0FBQyxDQUFELENBQXBCLEdBQTBCQSxlQUFlLENBQUMsQ0FBRCxDQUExQyxFQUErQyxFQUEvQyxDQURSO1FBRUx4UCxLQUFLLEVBQUUwUCxRQUFRLENBQUMsS0FBS0YsZUFBZSxDQUFDLENBQUQsQ0FBcEIsR0FBMEJBLGVBQWUsQ0FBQyxDQUFELENBQTFDLEVBQStDLEVBQS9DLENBRlY7UUFHTHZQLElBQUksRUFBRXlQLFFBQVEsQ0FBQyxLQUFLRixlQUFlLENBQUMsQ0FBRCxDQUFwQixHQUEwQkEsZUFBZSxDQUFDLENBQUQsQ0FBMUMsRUFBK0MsRUFBL0M7T0FIaEI7OztRQU9FQSxlQUFlLENBQUNDLEtBQWhCLENBQXNCVCxZQUF0QixDQUFKLEVBQXlDO1VBQ25DVyxLQUFLLEdBQUdDLFVBQVUsQ0FBQyxDQUFDRixRQUFRLENBQUMsS0FBS0YsZUFBZSxDQUFDLENBQUQsQ0FBcEIsR0FBMEJBLGVBQWUsQ0FBQyxDQUFELENBQTFDLEVBQStDLEVBQS9DLENBQVIsR0FBNkQsR0FBOUQsRUFBbUVLLE9BQW5FLENBQTJFLENBQTNFLENBQUQsQ0FBdEI7YUFDTztRQUNMOVAsR0FBRyxFQUFFMlAsUUFBUSxDQUFDLEtBQUtGLGVBQWUsQ0FBQyxDQUFELENBQXBCLEdBQTBCQSxlQUFlLENBQUMsQ0FBRCxDQUExQyxFQUErQyxFQUEvQyxDQURSO1FBRUx4UCxLQUFLLEVBQUUwUCxRQUFRLENBQUMsS0FBS0YsZUFBZSxDQUFDLENBQUQsQ0FBcEIsR0FBMEJBLGVBQWUsQ0FBQyxDQUFELENBQTFDLEVBQStDLEVBQS9DLENBRlY7UUFHTHZQLElBQUksRUFBRXlQLFFBQVEsQ0FBQyxLQUFLRixlQUFlLENBQUMsQ0FBRCxDQUFwQixHQUEwQkEsZUFBZSxDQUFDLENBQUQsQ0FBMUMsRUFBK0MsRUFBL0MsQ0FIVDtRQUlMRyxLQUFLLEVBQUVBO09BSlQ7OztRQVFFSCxlQUFlLENBQUNDLEtBQWhCLENBQXNCUixlQUF0QixDQUFKLEVBQTRDO2FBQ25DO1FBQ0xsUCxHQUFHLEVBQUUyUCxRQUFRLENBQUMsS0FBS0YsZUFBZSxDQUFDLENBQUQsQ0FBcEIsR0FBMEJBLGVBQWUsQ0FBQyxDQUFELENBQTFDLEVBQStDLEVBQS9DLENBRFI7UUFFTHhQLEtBQUssRUFBRTBQLFFBQVEsQ0FBQyxLQUFLRixlQUFlLENBQUMsQ0FBRCxDQUFwQixHQUEwQkEsZUFBZSxDQUFDLENBQUQsQ0FBMUMsRUFBK0MsRUFBL0MsQ0FGVjtRQUdMdlAsSUFBSSxFQUFFeVAsUUFBUSxDQUFDLEtBQUtGLGVBQWUsQ0FBQyxDQUFELENBQXBCLEdBQTBCQSxlQUFlLENBQUMsQ0FBRCxDQUExQyxFQUErQyxFQUEvQztPQUhoQjs7O1FBT0VBLGVBQWUsQ0FBQ0MsS0FBaEIsQ0FBc0JQLG1CQUF0QixDQUFKLEVBQWdEO1VBQzFDWSxNQUFNLEdBQUdGLFVBQVUsQ0FBQyxDQUFDRixRQUFRLENBQUMsS0FBS0YsZUFBZSxDQUFDLENBQUQsQ0FBcEIsR0FBMEJBLGVBQWUsQ0FBQyxDQUFELENBQTFDLEVBQStDLEVBQS9DLENBQVIsR0FBNkQsR0FBOUQsRUFBbUVLLE9BQW5FLENBQTJFLENBQTNFLENBQUQsQ0FBdkI7O2FBRU87UUFDTDlQLEdBQUcsRUFBRTJQLFFBQVEsQ0FBQyxLQUFLRixlQUFlLENBQUMsQ0FBRCxDQUFwQixHQUEwQkEsZUFBZSxDQUFDLENBQUQsQ0FBMUMsRUFBK0MsRUFBL0MsQ0FEUjtRQUVMeFAsS0FBSyxFQUFFMFAsUUFBUSxDQUFDLEtBQUtGLGVBQWUsQ0FBQyxDQUFELENBQXBCLEdBQTBCQSxlQUFlLENBQUMsQ0FBRCxDQUExQyxFQUErQyxFQUEvQyxDQUZWO1FBR0x2UCxJQUFJLEVBQUV5UCxRQUFRLENBQUMsS0FBS0YsZUFBZSxDQUFDLENBQUQsQ0FBcEIsR0FBMEJBLGVBQWUsQ0FBQyxDQUFELENBQTFDLEVBQStDLEVBQS9DLENBSFQ7UUFJTEcsS0FBSyxFQUFFRztPQUpUOzs7UUFRRUMsVUFBVSxHQUFHWixRQUFRLENBQUNhLElBQVQsQ0FBY1IsZUFBZCxDQUFqQjs7UUFFSU8sVUFBSixFQUFnQjthQUNQO1FBQ0xoUSxHQUFHLEVBQUUyUCxRQUFRLENBQUMsS0FBS0ssVUFBVSxDQUFDLENBQUQsQ0FBaEIsRUFBcUIsRUFBckIsQ0FEUjtRQUVML1AsS0FBSyxFQUFFMFAsUUFBUSxDQUFDLEtBQUtLLFVBQVUsQ0FBQyxDQUFELENBQWhCLEVBQXFCLEVBQXJCLENBRlY7UUFHTDlQLElBQUksRUFBRXlQLFFBQVEsQ0FBQyxLQUFLSyxVQUFVLENBQUMsQ0FBRCxDQUFoQixFQUFxQixFQUFyQjtPQUhoQjs7O1FBT0VFLFdBQVcsR0FBR2IsU0FBUyxDQUFDWSxJQUFWLENBQWVSLGVBQWYsQ0FBbEI7O1FBRUlTLFdBQUosRUFBaUI7YUFDUjtRQUNMbFEsR0FBRyxFQUFFMlAsUUFBUSxDQUFDLEtBQUtPLFdBQVcsQ0FBQyxDQUFELENBQWpCLEVBQXNCLEVBQXRCLENBRFI7UUFFTGpRLEtBQUssRUFBRTBQLFFBQVEsQ0FBQyxLQUFLTyxXQUFXLENBQUMsQ0FBRCxDQUFqQixFQUFzQixFQUF0QixDQUZWO1FBR0xoUSxJQUFJLEVBQUV5UCxRQUFRLENBQUMsS0FBS08sV0FBVyxDQUFDLENBQUQsQ0FBakIsRUFBc0IsRUFBdEIsQ0FIVDtRQUlMTixLQUFLLEVBQUVDLFVBQVUsQ0FBQyxLQUFLSyxXQUFXLENBQUMsQ0FBRCxDQUFqQjtPQUpuQjs7O1FBUUVDLFVBQVUsR0FBR2IsUUFBUSxDQUFDVyxJQUFULENBQWNSLGVBQWQsQ0FBakI7O1FBRUlVLFVBQUosRUFBZ0I7VUFDVi9QLEdBQUcsR0FBR3VQLFFBQVEsQ0FBQyxLQUFLUSxVQUFVLENBQUMsQ0FBRCxDQUFoQixFQUFxQixFQUFyQixDQUFsQjtVQUNJOVAsVUFBVSxHQUFHc1AsUUFBUSxDQUFDLEtBQUtRLFVBQVUsQ0FBQyxDQUFELENBQWhCLEVBQXFCLEVBQXJCLENBQVIsR0FBbUMsR0FBcEQ7VUFDSTdQLFNBQVMsR0FBR3FQLFFBQVEsQ0FBQyxLQUFLUSxVQUFVLENBQUMsQ0FBRCxDQUFoQixFQUFxQixFQUFyQixDQUFSLEdBQW1DLEdBQW5EO1VBQ0lDLGNBQWMsR0FBRyxTQUFTLENBQUMsR0FBRzdCLFdBQVMsQ0FBQ2xQLE9BQWQsRUFBdUJlLEdBQXZCLEVBQTRCQyxVQUE1QixFQUF3Q0MsU0FBeEMsQ0FBVCxHQUE4RCxHQUFuRjtVQUNJK1AsYUFBYSxHQUFHakIsUUFBUSxDQUFDYSxJQUFULENBQWNHLGNBQWQsQ0FBcEI7O1VBRUksQ0FBQ0MsYUFBTCxFQUFvQjtjQUNaLElBQUl6QixTQUFPLENBQUN2UCxPQUFaLENBQW9CLENBQXBCLEVBQXVCb1EsZUFBdkIsRUFBd0NXLGNBQXhDLENBQU47OzthQUdLO1FBQ0xwUSxHQUFHLEVBQUUyUCxRQUFRLENBQUMsS0FBS1UsYUFBYSxDQUFDLENBQUQsQ0FBbkIsRUFBd0IsRUFBeEIsQ0FEUjtRQUVMcFEsS0FBSyxFQUFFMFAsUUFBUSxDQUFDLEtBQUtVLGFBQWEsQ0FBQyxDQUFELENBQW5CLEVBQXdCLEVBQXhCLENBRlY7UUFHTG5RLElBQUksRUFBRXlQLFFBQVEsQ0FBQyxLQUFLVSxhQUFhLENBQUMsQ0FBRCxDQUFuQixFQUF3QixFQUF4QjtPQUhoQjs7O1FBT0VDLFdBQVcsR0FBR2YsU0FBUyxDQUFDVSxJQUFWLENBQWVSLGVBQWYsQ0FBbEI7O1FBRUlhLFdBQUosRUFBaUI7VUFDWEMsSUFBSSxHQUFHWixRQUFRLENBQUMsS0FBS1csV0FBVyxDQUFDLENBQUQsQ0FBakIsRUFBc0IsRUFBdEIsQ0FBbkI7O1VBRUlFLFdBQVcsR0FBR2IsUUFBUSxDQUFDLEtBQUtXLFdBQVcsQ0FBQyxDQUFELENBQWpCLEVBQXNCLEVBQXRCLENBQVIsR0FBb0MsR0FBdEQ7O1VBRUlHLFVBQVUsR0FBR2QsUUFBUSxDQUFDLEtBQUtXLFdBQVcsQ0FBQyxDQUFELENBQWpCLEVBQXNCLEVBQXRCLENBQVIsR0FBb0MsR0FBckQ7O1VBRUlJLGVBQWUsR0FBRyxTQUFTLENBQUMsR0FBR25DLFdBQVMsQ0FBQ2xQLE9BQWQsRUFBdUJrUixJQUF2QixFQUE2QkMsV0FBN0IsRUFBMENDLFVBQTFDLENBQVQsR0FBaUUsR0FBdkY7O1VBRUlFLGNBQWMsR0FBR3ZCLFFBQVEsQ0FBQ2EsSUFBVCxDQUFjUyxlQUFkLENBQXJCOztVQUVJLENBQUNDLGNBQUwsRUFBcUI7Y0FDYixJQUFJL0IsU0FBTyxDQUFDdlAsT0FBWixDQUFvQixDQUFwQixFQUF1Qm9RLGVBQXZCLEVBQXdDaUIsZUFBeEMsQ0FBTjs7O2FBR0s7UUFDTDFRLEdBQUcsRUFBRTJQLFFBQVEsQ0FBQyxLQUFLZ0IsY0FBYyxDQUFDLENBQUQsQ0FBcEIsRUFBeUIsRUFBekIsQ0FEUjtRQUVMMVEsS0FBSyxFQUFFMFAsUUFBUSxDQUFDLEtBQUtnQixjQUFjLENBQUMsQ0FBRCxDQUFwQixFQUF5QixFQUF6QixDQUZWO1FBR0x6USxJQUFJLEVBQUV5UCxRQUFRLENBQUMsS0FBS2dCLGNBQWMsQ0FBQyxDQUFELENBQXBCLEVBQXlCLEVBQXpCLENBSFQ7UUFJTGYsS0FBSyxFQUFFQyxVQUFVLENBQUMsS0FBS1MsV0FBVyxDQUFDLENBQUQsQ0FBakI7T0FKbkI7OztVQVFJLElBQUkxQixTQUFPLENBQUN2UCxPQUFaLENBQW9CLENBQXBCLENBQU47OztNQUdFTSxRQUFRLEdBQUc2UCxVQUFmO0VBQ0FuUixlQUFBLEdBQWtCc0IsUUFBbEI7RUFDQVAsY0FBQSxHQUFpQmYsT0FBTyxDQUFDZ0IsT0FBekI7Ozs7O0FDaEtBO0VBRUFoQixrQkFBQSxHQUFxQixJQUFyQjtFQUNBQSxlQUFBLEdBQWtCLEtBQUssQ0FBdkI7O1dBRVN1UyxRQUFULENBQWtCL1EsS0FBbEIsRUFBeUI7O1FBRW5CRyxHQUFHLEdBQUdILEtBQUssQ0FBQ0csR0FBTixHQUFZLEdBQXRCO1FBQ0lDLEtBQUssR0FBR0osS0FBSyxDQUFDSSxLQUFOLEdBQWMsR0FBMUI7UUFDSUMsSUFBSSxHQUFHTCxLQUFLLENBQUNLLElBQU4sR0FBYSxHQUF4QjtRQUNJVCxHQUFHLEdBQUc5QyxJQUFJLENBQUM4QyxHQUFMLENBQVNPLEdBQVQsRUFBY0MsS0FBZCxFQUFxQkMsSUFBckIsQ0FBVjtRQUNJUixHQUFHLEdBQUcvQyxJQUFJLENBQUMrQyxHQUFMLENBQVNNLEdBQVQsRUFBY0MsS0FBZCxFQUFxQkMsSUFBckIsQ0FBVjtRQUNJSSxTQUFTLEdBQUcsQ0FBQ2IsR0FBRyxHQUFHQyxHQUFQLElBQWMsQ0FBOUI7O1FBRUlELEdBQUcsS0FBS0MsR0FBWixFQUFpQjs7VUFFWEcsS0FBSyxDQUFDK1AsS0FBTixLQUFnQnpFLFNBQXBCLEVBQStCO2VBQ3RCO1VBQ0wvSyxHQUFHLEVBQUUsQ0FEQTtVQUVMQyxVQUFVLEVBQUUsQ0FGUDtVQUdMQyxTQUFTLEVBQUVBLFNBSE47VUFJTHNQLEtBQUssRUFBRS9QLEtBQUssQ0FBQytQO1NBSmY7T0FERixNQU9PO2VBQ0U7VUFDTHhQLEdBQUcsRUFBRSxDQURBO1VBRUxDLFVBQVUsRUFBRSxDQUZQO1VBR0xDLFNBQVMsRUFBRUE7U0FIYjs7OztRQVFBRixHQUFKO1FBQ0l5USxLQUFLLEdBQUdwUixHQUFHLEdBQUdDLEdBQWxCO1FBQ0lXLFVBQVUsR0FBR0MsU0FBUyxHQUFHLEdBQVosR0FBa0J1USxLQUFLLElBQUksSUFBSXBSLEdBQUosR0FBVUMsR0FBZCxDQUF2QixHQUE0Q21SLEtBQUssSUFBSXBSLEdBQUcsR0FBR0MsR0FBVixDQUFsRTs7WUFFUUQsR0FBUjtXQUNPTyxHQUFMO1FBQ0VJLEdBQUcsR0FBRyxDQUFDSCxLQUFLLEdBQUdDLElBQVQsSUFBaUIyUSxLQUFqQixJQUEwQjVRLEtBQUssR0FBR0MsSUFBUixHQUFlLENBQWYsR0FBbUIsQ0FBN0MsQ0FBTjs7O1dBR0dELEtBQUw7UUFDRUcsR0FBRyxHQUFHLENBQUNGLElBQUksR0FBR0YsR0FBUixJQUFlNlEsS0FBZixHQUF1QixDQUE3Qjs7Ozs7UUFLQXpRLEdBQUcsR0FBRyxDQUFDSixHQUFHLEdBQUdDLEtBQVAsSUFBZ0I0USxLQUFoQixHQUF3QixDQUE5Qjs7OztJQUlKelEsR0FBRyxJQUFJLEVBQVA7O1FBRUlQLEtBQUssQ0FBQytQLEtBQU4sS0FBZ0J6RSxTQUFwQixFQUErQjthQUN0QjtRQUNML0ssR0FBRyxFQUFFQSxHQURBO1FBRUxDLFVBQVUsRUFBRUEsVUFGUDtRQUdMQyxTQUFTLEVBQUVBLFNBSE47UUFJTHNQLEtBQUssRUFBRS9QLEtBQUssQ0FBQytQO09BSmY7OztXQVFLO01BQ0x4UCxHQUFHLEVBQUVBLEdBREE7TUFFTEMsVUFBVSxFQUFFQSxVQUZQO01BR0xDLFNBQVMsRUFBRUE7S0FIYjs7O01BT0VYLFFBQVEsR0FBR2lSLFFBQWY7RUFDQXZTLGVBQUEsR0FBa0JzQixRQUFsQjtFQUNBUCxjQUFBLEdBQWlCZixPQUFPLENBQUNnQixPQUF6Qjs7Ozs7O0FDdkVBO0VBRUFoQixrQkFBQSxHQUFxQixJQUFyQjtFQUNBQSxlQUFBLEdBQWtCLEtBQUssQ0FBdkI7O01BRUl5UyxXQUFXOztFQUVmdEMsc0JBQXNCOztFQUV0QkMsWUFGc0IsQ0FGdEI7O01BTUlzQyxXQUFTOztFQUVidkMsc0JBQXNCOztFQUV0QkcsU0FGc0IsQ0FGdEI7O1dBTVNILHNCQUFULENBQWdDTSxHQUFoQyxFQUFxQztXQUFTQSxHQUFHLElBQUlBLEdBQUcsQ0FBQ0MsVUFBWCxHQUF3QkQsR0FBeEIsR0FBOEI7TUFBRXpQLE9BQU8sRUFBRXlQO0tBQWhEOzs7Ozs7Ozs7Ozs7Ozs7V0FhOUJrQyxVQUFULENBQW9CblIsS0FBcEIsRUFBMkI7OztXQUdsQixDQUFDLEdBQUdrUixXQUFTLENBQUMxUixPQUFkLEVBQXVCLENBQUMsR0FBR3lSLFdBQVcsQ0FBQ3pSLE9BQWhCLEVBQXlCUSxLQUF6QixDQUF2QixDQUFQOzs7TUFHRUYsUUFBUSxHQUFHcVIsVUFBZjtFQUNBM1MsZUFBQSxHQUFrQnNCLFFBQWxCO0VBQ0FQLGNBQUEsR0FBaUJmLE9BQU8sQ0FBQ2dCLE9BQXpCOzs7OztBQ3RDQTtFQUVBaEIsa0JBQUEsR0FBcUIsSUFBckI7RUFDQUEsZUFBQSxHQUFrQixLQUFLLENBQXZCOzs7Ozs7TUFNSTRTLGNBQWMsR0FBRyxTQUFTQSxjQUFULENBQXdCdlUsS0FBeEIsRUFBK0I7UUFDOUNBLEtBQUssQ0FBQytCLE1BQU4sS0FBaUIsQ0FBakIsSUFBc0IvQixLQUFLLENBQUMsQ0FBRCxDQUFMLEtBQWFBLEtBQUssQ0FBQyxDQUFELENBQXhDLElBQStDQSxLQUFLLENBQUMsQ0FBRCxDQUFMLEtBQWFBLEtBQUssQ0FBQyxDQUFELENBQWpFLElBQXdFQSxLQUFLLENBQUMsQ0FBRCxDQUFMLEtBQWFBLEtBQUssQ0FBQyxDQUFELENBQTlGLEVBQW1HO2FBQzFGLE1BQU1BLEtBQUssQ0FBQyxDQUFELENBQVgsR0FBaUJBLEtBQUssQ0FBQyxDQUFELENBQXRCLEdBQTRCQSxLQUFLLENBQUMsQ0FBRCxDQUF4Qzs7O1dBR0tBLEtBQVA7R0FMRjs7TUFRSWlELFFBQVEsR0FBR3NSLGNBQWY7RUFDQTVTLGVBQUEsR0FBa0JzQixRQUFsQjtFQUNBUCxjQUFBLEdBQWlCZixPQUFPLENBQUNnQixPQUF6Qjs7Ozs7O0FDbkJBO0VBRUFoQixrQkFBQSxHQUFxQixJQUFyQjtFQUNBQSxlQUFBLEdBQWtCLEtBQUssQ0FBdkI7O1dBRVM2UyxXQUFULENBQXFCeFUsS0FBckIsRUFBNEI7UUFDdEJ5VSxHQUFHLEdBQUd6VSxLQUFLLENBQUM0UCxRQUFOLENBQWUsRUFBZixDQUFWO1dBQ082RSxHQUFHLENBQUMxUyxNQUFKLEtBQWUsQ0FBZixHQUFtQixNQUFNMFMsR0FBekIsR0FBK0JBLEdBQXRDOzs7TUFHRXhSLFFBQVEsR0FBR3VSLFdBQWY7RUFDQTdTLGVBQUEsR0FBa0JzQixRQUFsQjtFQUNBUCxjQUFBLEdBQWlCZixPQUFPLENBQUNnQixPQUF6Qjs7Ozs7O0FDWkE7RUFFQWhCLGtCQUFBLEdBQXFCLElBQXJCO0VBQ0FBLGVBQUEsR0FBa0IsS0FBSyxDQUF2Qjs7TUFFSWtRLFdBQVM7O0VBRWJDLHNCQUFzQjs7RUFFdEJDLFNBRnNCLENBRnRCOztNQU1JMkMsaUJBQWU7O0VBRW5CNUMsc0JBQXNCOztFQUV0QkcsZUFGc0IsQ0FGdEI7O01BTUkwQyxjQUFZOztFQUVoQjdDLHNCQUFzQjs7RUFFdEJLLFlBRnNCLENBRnRCOztXQU1TTCxzQkFBVCxDQUFnQ00sR0FBaEMsRUFBcUM7V0FBU0EsR0FBRyxJQUFJQSxHQUFHLENBQUNDLFVBQVgsR0FBd0JELEdBQXhCLEdBQThCO01BQUV6UCxPQUFPLEVBQUV5UDtLQUFoRDs7O1dBRTlCd0MsVUFBVCxDQUFvQnpSLEtBQXBCLEVBQTJCO1dBQ2xCLENBQUMsR0FBR3dSLGNBQVksQ0FBQ2hTLE9BQWpCLEVBQTBCMUMsSUFBSSxDQUFDbUQsS0FBTCxDQUFXRCxLQUFLLEdBQUcsR0FBbkIsQ0FBMUIsQ0FBUDs7O1dBR08wUixZQUFULENBQXNCdlIsR0FBdEIsRUFBMkJDLEtBQTNCLEVBQWtDQyxJQUFsQyxFQUF3QztXQUMvQixDQUFDLEdBQUdrUixpQkFBZSxDQUFDL1IsT0FBcEIsRUFBNkIsTUFBTWlTLFVBQVUsQ0FBQ3RSLEdBQUQsQ0FBaEIsR0FBd0JzUixVQUFVLENBQUNyUixLQUFELENBQWxDLEdBQTRDcVIsVUFBVSxDQUFDcFIsSUFBRCxDQUFuRixDQUFQOzs7V0FHT3NSLFFBQVQsQ0FBa0JwUixHQUFsQixFQUF1QkMsVUFBdkIsRUFBbUNDLFNBQW5DLEVBQThDO1dBQ3JDLENBQUMsR0FBR2lPLFdBQVMsQ0FBQ2xQLE9BQWQsRUFBdUJlLEdBQXZCLEVBQTRCQyxVQUE1QixFQUF3Q0MsU0FBeEMsRUFBbURpUixZQUFuRCxDQUFQOzs7TUFHRTVSLFFBQVEsR0FBRzZSLFFBQWY7RUFDQW5ULGVBQUEsR0FBa0JzQixRQUFsQjtFQUNBUCxjQUFBLEdBQWlCZixPQUFPLENBQUNnQixPQUF6Qjs7Ozs7O0FDdkNBO0VBRUFoQixrQkFBQSxHQUFxQixJQUFyQjtFQUNBQSxlQUFBLEdBQWtCLEtBQUssQ0FBdkI7O01BRUlvVCxXQUFTOztFQUViakQsc0JBQXNCOztFQUV0QkMsU0FGc0IsQ0FGdEI7O01BTUlHLFNBQU87O0VBRVhKLHNCQUFzQjs7RUFFdEJHLE9BRnNCLENBRnRCOztXQU1TSCxzQkFBVCxDQUFnQ00sR0FBaEMsRUFBcUM7V0FBU0EsR0FBRyxJQUFJQSxHQUFHLENBQUNDLFVBQVgsR0FBd0JELEdBQXhCLEdBQThCO01BQUV6UCxPQUFPLEVBQUV5UDtLQUFoRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1dBeUI5QjRDLEdBQVQsQ0FBYWhWLEtBQWIsRUFBb0IyRCxVQUFwQixFQUFnQ0MsU0FBaEMsRUFBMkM7UUFDckMsT0FBTzVELEtBQVAsS0FBaUIsUUFBakIsSUFBNkIsT0FBTzJELFVBQVAsS0FBc0IsUUFBbkQsSUFBK0QsT0FBT0MsU0FBUCxLQUFxQixRQUF4RixFQUFrRzthQUN6RixDQUFDLEdBQUdtUixXQUFTLENBQUNwUyxPQUFkLEVBQXVCM0MsS0FBdkIsRUFBOEIyRCxVQUE5QixFQUEwQ0MsU0FBMUMsQ0FBUDtLQURGLE1BRU8sSUFBSSxPQUFPNUQsS0FBUCxLQUFpQixRQUFqQixJQUE2QjJELFVBQVUsS0FBSzhLLFNBQTVDLElBQXlEN0ssU0FBUyxLQUFLNkssU0FBM0UsRUFBc0Y7YUFDcEYsQ0FBQyxHQUFHc0csV0FBUyxDQUFDcFMsT0FBZCxFQUF1QjNDLEtBQUssQ0FBQzBELEdBQTdCLEVBQWtDMUQsS0FBSyxDQUFDMkQsVUFBeEMsRUFBb0QzRCxLQUFLLENBQUM0RCxTQUExRCxDQUFQOzs7VUFHSSxJQUFJc08sU0FBTyxDQUFDdlAsT0FBWixDQUFvQixDQUFwQixDQUFOOzs7TUFHRU0sUUFBUSxHQUFHK1IsR0FBZjtFQUNBclQsZUFBQSxHQUFrQnNCLFFBQWxCO0VBQ0FQLGNBQUEsR0FBaUJmLE9BQU8sQ0FBQ2dCLE9BQXpCOzs7OztBQ3REQTtFQUVBaEIsa0JBQUEsR0FBcUIsSUFBckI7RUFDQUEsZUFBQSxHQUFrQixLQUFLLENBQXZCOztNQUVJb1QsV0FBUzs7RUFFYmpELHNCQUFzQjs7RUFFdEJDLFNBRnNCLENBRnRCOztNQU1JRixXQUFTOztFQUViQyxzQkFBc0I7O0VBRXRCRyxTQUZzQixDQUZ0Qjs7TUFNSUMsU0FBTzs7RUFFWEosc0JBQXNCOztFQUV0QkssT0FGc0IsQ0FGdEI7O1dBTVNMLHNCQUFULENBQWdDTSxHQUFoQyxFQUFxQztXQUFTQSxHQUFHLElBQUlBLEdBQUcsQ0FBQ0MsVUFBWCxHQUF3QkQsR0FBeEIsR0FBOEI7TUFBRXpQLE9BQU8sRUFBRXlQO0tBQWhEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7V0E0QjlCNkMsSUFBVCxDQUFjalYsS0FBZCxFQUFxQjJELFVBQXJCLEVBQWlDQyxTQUFqQyxFQUE0Q3NQLEtBQTVDLEVBQW1EO1FBQzdDLE9BQU9sVCxLQUFQLEtBQWlCLFFBQWpCLElBQTZCLE9BQU8yRCxVQUFQLEtBQXNCLFFBQW5ELElBQStELE9BQU9DLFNBQVAsS0FBcUIsUUFBcEYsSUFBZ0csT0FBT3NQLEtBQVAsS0FBaUIsUUFBckgsRUFBK0g7YUFDdEhBLEtBQUssSUFBSSxDQUFULEdBQWEsQ0FBQyxHQUFHNkIsV0FBUyxDQUFDcFMsT0FBZCxFQUF1QjNDLEtBQXZCLEVBQThCMkQsVUFBOUIsRUFBMENDLFNBQTFDLENBQWIsR0FBb0UsVUFBVSxDQUFDLEdBQUdpTyxXQUFTLENBQUNsUCxPQUFkLEVBQXVCM0MsS0FBdkIsRUFBOEIyRCxVQUE5QixFQUEwQ0MsU0FBMUMsQ0FBVixHQUFpRSxHQUFqRSxHQUF1RXNQLEtBQXZFLEdBQStFLEdBQTFKO0tBREYsTUFFTyxJQUFJLE9BQU9sVCxLQUFQLEtBQWlCLFFBQWpCLElBQTZCMkQsVUFBVSxLQUFLOEssU0FBNUMsSUFBeUQ3SyxTQUFTLEtBQUs2SyxTQUF2RSxJQUFvRnlFLEtBQUssS0FBS3pFLFNBQWxHLEVBQTZHO2FBQzNHek8sS0FBSyxDQUFDa1QsS0FBTixJQUFlLENBQWYsR0FBbUIsQ0FBQyxHQUFHNkIsV0FBUyxDQUFDcFMsT0FBZCxFQUF1QjNDLEtBQUssQ0FBQzBELEdBQTdCLEVBQWtDMUQsS0FBSyxDQUFDMkQsVUFBeEMsRUFBb0QzRCxLQUFLLENBQUM0RCxTQUExRCxDQUFuQixHQUEwRixVQUFVLENBQUMsR0FBR2lPLFdBQVMsQ0FBQ2xQLE9BQWQsRUFBdUIzQyxLQUFLLENBQUMwRCxHQUE3QixFQUFrQzFELEtBQUssQ0FBQzJELFVBQXhDLEVBQW9EM0QsS0FBSyxDQUFDNEQsU0FBMUQsQ0FBVixHQUFpRixHQUFqRixHQUF1RjVELEtBQUssQ0FBQ2tULEtBQTdGLEdBQXFHLEdBQXRNOzs7VUFHSSxJQUFJaEIsU0FBTyxDQUFDdlAsT0FBWixDQUFvQixDQUFwQixDQUFOOzs7TUFHRU0sUUFBUSxHQUFHZ1MsSUFBZjtFQUNBdFQsZUFBQSxHQUFrQnNCLFFBQWxCO0VBQ0FQLGNBQUEsR0FBaUJmLE9BQU8sQ0FBQ2dCLE9BQXpCOzs7OztBQy9EQTtFQUVBaEIsa0JBQUEsR0FBcUIsSUFBckI7RUFDQUEsZUFBQSxHQUFrQixLQUFLLENBQXZCOztNQUVJK1MsaUJBQWU7O0VBRW5CNUMsc0JBQXNCOztFQUV0QkMsZUFGc0IsQ0FGdEI7O01BTUk0QyxjQUFZOztFQUVoQjdDLHNCQUFzQjs7RUFFdEJHLFlBRnNCLENBRnRCOztNQU1JQyxTQUFPOztFQUVYSixzQkFBc0I7O0VBRXRCSyxPQUZzQixDQUZ0Qjs7V0FNU0wsc0JBQVQsQ0FBZ0NNLEdBQWhDLEVBQXFDO1dBQVNBLEdBQUcsSUFBSUEsR0FBRyxDQUFDQyxVQUFYLEdBQXdCRCxHQUF4QixHQUE4QjtNQUFFelAsT0FBTyxFQUFFeVA7S0FBaEQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztXQXlCOUI4QyxHQUFULENBQWFsVixLQUFiLEVBQW9CdUQsS0FBcEIsRUFBMkJDLElBQTNCLEVBQWlDO1FBQzNCLE9BQU94RCxLQUFQLEtBQWlCLFFBQWpCLElBQTZCLE9BQU91RCxLQUFQLEtBQWlCLFFBQTlDLElBQTBELE9BQU9DLElBQVAsS0FBZ0IsUUFBOUUsRUFBd0Y7YUFDL0UsQ0FBQyxHQUFHa1IsaUJBQWUsQ0FBQy9SLE9BQXBCLEVBQTZCLE1BQU0sQ0FBQyxHQUFHZ1MsY0FBWSxDQUFDaFMsT0FBakIsRUFBMEIzQyxLQUExQixDQUFOLEdBQXlDLENBQUMsR0FBRzJVLGNBQVksQ0FBQ2hTLE9BQWpCLEVBQTBCWSxLQUExQixDQUF6QyxHQUE0RSxDQUFDLEdBQUdvUixjQUFZLENBQUNoUyxPQUFqQixFQUEwQmEsSUFBMUIsQ0FBekcsQ0FBUDtLQURGLE1BRU8sSUFBSSxPQUFPeEQsS0FBUCxLQUFpQixRQUFqQixJQUE2QnVELEtBQUssS0FBS2tMLFNBQXZDLElBQW9EakwsSUFBSSxLQUFLaUwsU0FBakUsRUFBNEU7YUFDMUUsQ0FBQyxHQUFHaUcsaUJBQWUsQ0FBQy9SLE9BQXBCLEVBQTZCLE1BQU0sQ0FBQyxHQUFHZ1MsY0FBWSxDQUFDaFMsT0FBakIsRUFBMEIzQyxLQUFLLENBQUNzRCxHQUFoQyxDQUFOLEdBQTZDLENBQUMsR0FBR3FSLGNBQVksQ0FBQ2hTLE9BQWpCLEVBQTBCM0MsS0FBSyxDQUFDdUQsS0FBaEMsQ0FBN0MsR0FBc0YsQ0FBQyxHQUFHb1IsY0FBWSxDQUFDaFMsT0FBakIsRUFBMEIzQyxLQUFLLENBQUN3RCxJQUFoQyxDQUFuSCxDQUFQOzs7VUFHSSxJQUFJME8sU0FBTyxDQUFDdlAsT0FBWixDQUFvQixDQUFwQixDQUFOOzs7TUFHRU0sUUFBUSxHQUFHaVMsR0FBZjtFQUNBdlQsZUFBQSxHQUFrQnNCLFFBQWxCO0VBQ0FQLGNBQUEsR0FBaUJmLE9BQU8sQ0FBQ2dCLE9BQXpCOzs7OztBQzVEQTtFQUVBaEIsa0JBQUEsR0FBcUIsSUFBckI7RUFDQUEsZUFBQSxHQUFrQixLQUFLLENBQXZCOztNQUVJeVMsV0FBVzs7RUFFZnRDLHNCQUFzQjs7RUFFdEJDLFlBRnNCLENBRnRCOztNQU1Jb0QsSUFBSTs7RUFFUnJELHNCQUFzQjs7RUFFdEJHLEtBRnNCLENBRnRCOztNQU1JQyxTQUFPOztFQUVYSixzQkFBc0I7O0VBRXRCSyxPQUZzQixDQUZ0Qjs7V0FNU0wsc0JBQVQsQ0FBZ0NNLEdBQWhDLEVBQXFDO1dBQVNBLEdBQUcsSUFBSUEsR0FBRyxDQUFDQyxVQUFYLEdBQXdCRCxHQUF4QixHQUE4QjtNQUFFelAsT0FBTyxFQUFFeVA7S0FBaEQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1dBb0M5QmdELElBQVQsQ0FBY0MsVUFBZCxFQUEwQkMsV0FBMUIsRUFBdUNDLFVBQXZDLEVBQW1EQyxXQUFuRCxFQUFnRTtRQUMxRCxPQUFPSCxVQUFQLEtBQXNCLFFBQXRCLElBQWtDLE9BQU9DLFdBQVAsS0FBdUIsUUFBN0QsRUFBdUU7VUFDakVHLFFBQVEsR0FBRyxDQUFDLEdBQUdyQixXQUFXLENBQUN6UixPQUFoQixFQUF5QjBTLFVBQXpCLENBQWY7YUFDTyxVQUFVSSxRQUFRLENBQUNuUyxHQUFuQixHQUF5QixHQUF6QixHQUErQm1TLFFBQVEsQ0FBQ2xTLEtBQXhDLEdBQWdELEdBQWhELEdBQXNEa1MsUUFBUSxDQUFDalMsSUFBL0QsR0FBc0UsR0FBdEUsR0FBNEU4UixXQUE1RSxHQUEwRixHQUFqRztLQUZGLE1BR08sSUFBSSxPQUFPRCxVQUFQLEtBQXNCLFFBQXRCLElBQWtDLE9BQU9DLFdBQVAsS0FBdUIsUUFBekQsSUFBcUUsT0FBT0MsVUFBUCxLQUFzQixRQUEzRixJQUF1RyxPQUFPQyxXQUFQLEtBQXVCLFFBQWxJLEVBQTRJO2FBQzFJQSxXQUFXLElBQUksQ0FBZixHQUFtQixDQUFDLEdBQUdMLElBQUksQ0FBQ3hTLE9BQVQsRUFBa0IwUyxVQUFsQixFQUE4QkMsV0FBOUIsRUFBMkNDLFVBQTNDLENBQW5CLEdBQTRFLFVBQVVGLFVBQVYsR0FBdUIsR0FBdkIsR0FBNkJDLFdBQTdCLEdBQTJDLEdBQTNDLEdBQWlEQyxVQUFqRCxHQUE4RCxHQUE5RCxHQUFvRUMsV0FBcEUsR0FBa0YsR0FBcks7S0FESyxNQUVBLElBQUksT0FBT0gsVUFBUCxLQUFzQixRQUF0QixJQUFrQ0MsV0FBVyxLQUFLN0csU0FBbEQsSUFBK0Q4RyxVQUFVLEtBQUs5RyxTQUE5RSxJQUEyRitHLFdBQVcsS0FBSy9HLFNBQS9HLEVBQTBIO2FBQ3hINEcsVUFBVSxDQUFDbkMsS0FBWCxJQUFvQixDQUFwQixHQUF3QixDQUFDLEdBQUdpQyxJQUFJLENBQUN4UyxPQUFULEVBQWtCMFMsVUFBVSxDQUFDL1IsR0FBN0IsRUFBa0MrUixVQUFVLENBQUM5UixLQUE3QyxFQUFvRDhSLFVBQVUsQ0FBQzdSLElBQS9ELENBQXhCLEdBQStGLFVBQVU2UixVQUFVLENBQUMvUixHQUFyQixHQUEyQixHQUEzQixHQUFpQytSLFVBQVUsQ0FBQzlSLEtBQTVDLEdBQW9ELEdBQXBELEdBQTBEOFIsVUFBVSxDQUFDN1IsSUFBckUsR0FBNEUsR0FBNUUsR0FBa0Y2UixVQUFVLENBQUNuQyxLQUE3RixHQUFxRyxHQUEzTTs7O1VBR0ksSUFBSWhCLFNBQU8sQ0FBQ3ZQLE9BQVosQ0FBb0IsQ0FBcEIsQ0FBTjs7O01BR0VNLFFBQVEsR0FBR21TLElBQWY7RUFDQXpULGVBQUEsR0FBa0JzQixRQUFsQjtFQUNBUCxjQUFBLEdBQWlCZixPQUFPLENBQUNnQixPQUF6Qjs7Ozs7QUMxRUE7RUFFQWhCLGtCQUFBLEdBQXFCLElBQXJCO0VBQ0FBLGVBQUEsR0FBa0IsS0FBSyxDQUF2Qjs7TUFFSStULElBQUk7O0VBRVI1RCxzQkFBc0I7O0VBRXRCQyxLQUZzQixDQUZ0Qjs7TUFNSTRELEtBQUs7O0VBRVQ3RCxzQkFBc0I7O0VBRXRCRyxNQUZzQixDQUZ0Qjs7TUFNSWtELElBQUk7O0VBRVJyRCxzQkFBc0I7O0VBRXRCSyxLQUZzQixDQUZ0Qjs7TUFNSXlELEtBQUs7O0VBRVQ5RCxzQkFBc0I7O0VBRXRCK0QsTUFGc0IsQ0FGdEI7O01BTUkzRCxTQUFPOztFQUVYSixzQkFBc0I7O0VBRXRCZ0UsT0FGc0IsQ0FGdEI7O1dBTVNoRSxzQkFBVCxDQUFnQ00sR0FBaEMsRUFBcUM7V0FBU0EsR0FBRyxJQUFJQSxHQUFHLENBQUNDLFVBQVgsR0FBd0JELEdBQXhCLEdBQThCO01BQUV6UCxPQUFPLEVBQUV5UDtLQUFoRDs7O01BRW5DMkQsS0FBSyxHQUFHLFNBQVNBLEtBQVQsQ0FBZTVTLEtBQWYsRUFBc0I7V0FDekIsT0FBT0EsS0FBSyxDQUFDRyxHQUFiLEtBQXFCLFFBQXJCLElBQWlDLE9BQU9ILEtBQUssQ0FBQ0ksS0FBYixLQUF1QixRQUF4RCxJQUFvRSxPQUFPSixLQUFLLENBQUNLLElBQWIsS0FBc0IsUUFBMUYsS0FBdUcsT0FBT0wsS0FBSyxDQUFDK1AsS0FBYixLQUF1QixRQUF2QixJQUFtQyxPQUFPL1AsS0FBSyxDQUFDK1AsS0FBYixLQUF1QixXQUFqSyxDQUFQO0dBREY7O01BSUk4QyxNQUFNLEdBQUcsU0FBU0EsTUFBVCxDQUFnQjdTLEtBQWhCLEVBQXVCO1dBQzNCLE9BQU9BLEtBQUssQ0FBQ0csR0FBYixLQUFxQixRQUFyQixJQUFpQyxPQUFPSCxLQUFLLENBQUNJLEtBQWIsS0FBdUIsUUFBeEQsSUFBb0UsT0FBT0osS0FBSyxDQUFDSyxJQUFiLEtBQXNCLFFBQTFGLElBQXNHLE9BQU9MLEtBQUssQ0FBQytQLEtBQWIsS0FBdUIsUUFBcEk7R0FERjs7TUFJSStDLEtBQUssR0FBRyxTQUFTQSxLQUFULENBQWU5UyxLQUFmLEVBQXNCO1dBQ3pCLE9BQU9BLEtBQUssQ0FBQ08sR0FBYixLQUFxQixRQUFyQixJQUFpQyxPQUFPUCxLQUFLLENBQUNRLFVBQWIsS0FBNEIsUUFBN0QsSUFBeUUsT0FBT1IsS0FBSyxDQUFDUyxTQUFiLEtBQTJCLFFBQXBHLEtBQWlILE9BQU9ULEtBQUssQ0FBQytQLEtBQWIsS0FBdUIsUUFBdkIsSUFBbUMsT0FBTy9QLEtBQUssQ0FBQytQLEtBQWIsS0FBdUIsV0FBM0ssQ0FBUDtHQURGOztNQUlJZ0QsTUFBTSxHQUFHLFNBQVNBLE1BQVQsQ0FBZ0IvUyxLQUFoQixFQUF1QjtXQUMzQixPQUFPQSxLQUFLLENBQUNPLEdBQWIsS0FBcUIsUUFBckIsSUFBaUMsT0FBT1AsS0FBSyxDQUFDUSxVQUFiLEtBQTRCLFFBQTdELElBQXlFLE9BQU9SLEtBQUssQ0FBQ1MsU0FBYixLQUEyQixRQUFwRyxJQUFnSCxPQUFPVCxLQUFLLENBQUMrUCxLQUFiLEtBQXVCLFFBQTlJO0dBREY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztXQW1DU2lELGFBQVQsQ0FBdUJoVCxLQUF2QixFQUE4QjtRQUN4QixPQUFPQSxLQUFQLEtBQWlCLFFBQXJCLEVBQStCLE1BQU0sSUFBSStPLFNBQU8sQ0FBQ3ZQLE9BQVosQ0FBb0IsQ0FBcEIsQ0FBTjtRQUMzQnFULE1BQU0sQ0FBQzdTLEtBQUQsQ0FBVixFQUFtQixPQUFPLENBQUMsR0FBR3lTLEtBQUssQ0FBQ2pULE9BQVYsRUFBbUJRLEtBQW5CLENBQVA7UUFDZjRTLEtBQUssQ0FBQzVTLEtBQUQsQ0FBVCxFQUFrQixPQUFPLENBQUMsR0FBR2dTLElBQUksQ0FBQ3hTLE9BQVQsRUFBa0JRLEtBQWxCLENBQVA7UUFDZCtTLE1BQU0sQ0FBQy9TLEtBQUQsQ0FBVixFQUFtQixPQUFPLENBQUMsR0FBR3dTLEtBQUssQ0FBQ2hULE9BQVYsRUFBbUJRLEtBQW5CLENBQVA7UUFDZjhTLEtBQUssQ0FBQzlTLEtBQUQsQ0FBVCxFQUFrQixPQUFPLENBQUMsR0FBR3VTLElBQUksQ0FBQy9TLE9BQVQsRUFBa0JRLEtBQWxCLENBQVA7VUFDWixJQUFJK08sU0FBTyxDQUFDdlAsT0FBWixDQUFvQixDQUFwQixDQUFOOzs7TUFHRU0sUUFBUSxHQUFHa1QsYUFBZjtFQUNBeFUsZUFBQSxHQUFrQnNCLFFBQWxCO0VBQ0FQLGNBQUEsR0FBaUJmLE9BQU8sQ0FBQ2dCLE9BQXpCOzs7OztBQy9GQTtFQUVBaEIsa0JBQUEsR0FBcUIsSUFBckI7RUFDQUEsZUFBQSxHQUFrQixLQUFLLENBQXZCOztNQUVJeVUsUUFBTTs7RUFFVnRFLHNCQUFzQjs7RUFFdEJDLE1BRnNCLENBRnRCOztNQU1Jc0UsUUFBTTs7RUFFVnZFLHNCQUFzQjs7RUFFdEJHLE1BRnNCLENBRnRCOztNQU1JcUUsV0FBVzs7RUFFZnhFLHNCQUFzQjs7RUFFdEJLLFlBRnNCLENBRnRCOztNQU1Jb0UsY0FBYzs7RUFFbEJ6RSxzQkFBc0I7O0VBRXRCK0QsZUFGc0IsQ0FGdEI7O1dBTVMvRCxzQkFBVCxDQUFnQ00sR0FBaEMsRUFBcUM7V0FBU0EsR0FBRyxJQUFJQSxHQUFHLENBQUNDLFVBQVgsR0FBd0JELEdBQXhCLEdBQThCO01BQUV6UCxPQUFPLEVBQUV5UDtLQUFoRDs7O1dBRTlCb0UsUUFBVCxHQUFvQjtJQUFFQSxRQUFRLEdBQUd2SSxNQUFNLENBQUN3SSxNQUFQLElBQWlCLFVBQVVDLE1BQVYsRUFBa0I7V0FBTyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHblUsU0FBUyxDQUFDVCxNQUE5QixFQUFzQzRVLENBQUMsRUFBdkMsRUFBMkM7WUFBTUMsTUFBTSxHQUFHcFUsU0FBUyxDQUFDbVUsQ0FBRCxDQUF0Qjs7YUFBZ0MsSUFBSUUsR0FBVCxJQUFnQkQsTUFBaEIsRUFBd0I7Y0FBTTNJLE1BQU0sQ0FBQzVMLFNBQVAsQ0FBaUJ5VSxjQUFqQixDQUFnQ3ZVLElBQWhDLENBQXFDcVUsTUFBckMsRUFBNkNDLEdBQTdDLENBQUosRUFBdUQ7WUFBRUgsTUFBTSxDQUFDRyxHQUFELENBQU4sR0FBY0QsTUFBTSxDQUFDQyxHQUFELENBQXBCOzs7OzthQUF3Q0gsTUFBUDtLQUE1Tzs7V0FBcVFGLFFBQVEsQ0FBQy9ULEtBQVQsQ0FBZSxJQUFmLEVBQXFCRCxTQUFyQixDQUFQOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7V0F5QjNRdVUsTUFBVCxDQUFnQkMsTUFBaEIsRUFBd0I3VCxLQUF4QixFQUErQjtRQUN6QkEsS0FBSyxLQUFLLGFBQWQsRUFBNkIsT0FBT0EsS0FBUDtRQUN6QjhULFFBQVEsR0FBRyxDQUFDLEdBQUdYLFdBQVcsQ0FBQzNULE9BQWhCLEVBQXlCUSxLQUF6QixDQUFmO1dBQ08sQ0FBQyxHQUFHb1QsY0FBYyxDQUFDNVQsT0FBbkIsRUFBNEI2VCxRQUFRLENBQUMsRUFBRCxFQUFLUyxRQUFMLEVBQWU7TUFDeERyVCxTQUFTLEVBQUUsQ0FBQyxHQUFHeVMsUUFBTSxDQUFDMVQsT0FBWCxFQUFvQixDQUFwQixFQUF1QixDQUF2QixFQUEwQnNVLFFBQVEsQ0FBQ3JULFNBQVQsR0FBcUJ1UCxVQUFVLENBQUM2RCxNQUFELENBQXpEO0tBRDhCLENBQXBDLENBQVA7Ozs7TUFNRUUsYUFBYTs7R0FFaEIsR0FBR2QsUUFBTSxDQUFDelQ7O0lBRVRvVSxNQUZGLENBRkE7TUFLSTlULFFBQVEsR0FBR2lVLGFBQWY7RUFDQXZWLGVBQUEsR0FBa0JzQixRQUFsQjtFQUNBUCxjQUFBLEdBQWlCZixPQUFPLENBQUNnQixPQUF6Qjs7Ozs7QUN4RUE7RUFFQWhCLGtCQUFBLEdBQXFCLElBQXJCO0VBQ0FBLGVBQUEsR0FBa0IsS0FBSyxDQUF2Qjs7TUFFSXlTLFdBQVc7O0VBRWZ0QyxzQkFBc0I7O0VBRXRCQyxZQUZzQixDQUZ0Qjs7V0FNU0Qsc0JBQVQsQ0FBZ0NNLEdBQWhDLEVBQXFDO1dBQVNBLEdBQUcsSUFBSUEsR0FBRyxDQUFDQyxVQUFYLEdBQXdCRCxHQUF4QixHQUE4QjtNQUFFelAsT0FBTyxFQUFFeVA7S0FBaEQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztXQTRCOUIrRSxZQUFULENBQXNCaFUsS0FBdEIsRUFBNkI7UUFDdkJBLEtBQUssS0FBSyxhQUFkLEVBQTZCLE9BQU8sQ0FBUDtRQUN6QmlVLFFBQVEsR0FBRyxDQUFDLEdBQUdoRCxXQUFXLENBQUN6UixPQUFoQixFQUF5QlEsS0FBekIsQ0FBZjs7UUFFSWtVLGdCQUFnQixHQUFHcEosTUFBTSxDQUFDcUosSUFBUCxDQUFZRixRQUFaLEVBQXNCRyxHQUF0QixDQUEwQixVQUFVVixHQUFWLEVBQWU7VUFDMURXLE9BQU8sR0FBR0osUUFBUSxDQUFDUCxHQUFELENBQVIsR0FBZ0IsR0FBOUI7YUFDT1csT0FBTyxJQUFJLE9BQVgsR0FBcUJBLE9BQU8sR0FBRyxLQUEvQixHQUF1Q3ZYLElBQUksQ0FBQ3dYLEdBQUwsQ0FBUyxDQUFDRCxPQUFPLEdBQUcsS0FBWCxJQUFvQixLQUE3QixFQUFvQyxHQUFwQyxDQUE5QztLQUZxQixDQUF2QjtRQUlJRSxDQUFDLEdBQUdMLGdCQUFnQixDQUFDLENBQUQsQ0FKeEI7UUFLSU0sQ0FBQyxHQUFHTixnQkFBZ0IsQ0FBQyxDQUFELENBTHhCO1FBTUl0RyxDQUFDLEdBQUdzRyxnQkFBZ0IsQ0FBQyxDQUFELENBTnhCOztXQVFPbEUsVUFBVSxDQUFDLENBQUMsU0FBU3VFLENBQVQsR0FBYSxTQUFTQyxDQUF0QixHQUEwQixTQUFTNUcsQ0FBcEMsRUFBdUNxQyxPQUF2QyxDQUErQyxDQUEvQyxDQUFELENBQWpCOzs7TUFHRW5RLFFBQVEsR0FBR2tVLFlBQWY7RUFDQXhWLGVBQUEsR0FBa0JzQixRQUFsQjtFQUNBUCxjQUFBLEdBQWlCZixPQUFPLENBQUNnQixPQUF6Qjs7OztBQ3JEZSxTQUFTaVYsZUFBVCxPQUFzRHpVLEtBQXRELEVBQXFFO01BQTFDMkIsS0FBMEMsUUFBMUNBLEtBQTBDO01BQW5Dc0ksS0FBbUMsUUFBbkNBLEtBQW1DOztNQUM5RSxDQUFDakssS0FBRCxJQUFVZ1UsWUFBWSxDQUFDaFUsS0FBRCxDQUFaLEdBQXNCLElBQXBDLEVBQTBDO1dBQ2pDMkIsS0FBUDs7O1NBRUtzSSxLQUFQOzs7O0FDUEY7RUFFQXpMLGtCQUFBLEdBQXFCLElBQXJCO0VBQ0FBLGVBQUEsR0FBa0IsS0FBSyxDQUF2Qjs7TUFFSXlVLFFBQU07O0VBRVZ0RSxzQkFBc0I7O0VBRXRCQyxNQUZzQixDQUZ0Qjs7TUFNSXNFLFFBQU07O0VBRVZ2RSxzQkFBc0I7O0VBRXRCRyxNQUZzQixDQUZ0Qjs7TUFNSTJELEtBQUs7O0VBRVQ5RCxzQkFBc0I7O0VBRXRCSyxNQUZzQixDQUZ0Qjs7TUFNSWlDLFdBQVc7O0VBRWZ0QyxzQkFBc0I7O0VBRXRCK0QsWUFGc0IsQ0FGdEI7O1dBTVMvRCxzQkFBVCxDQUFnQ00sR0FBaEMsRUFBcUM7V0FBU0EsR0FBRyxJQUFJQSxHQUFHLENBQUNDLFVBQVgsR0FBd0JELEdBQXhCLEdBQThCO01BQUV6UCxPQUFPLEVBQUV5UDtLQUFoRDs7O1dBRTlCb0UsUUFBVCxHQUFvQjtJQUFFQSxRQUFRLEdBQUd2SSxNQUFNLENBQUN3SSxNQUFQLElBQWlCLFVBQVVDLE1BQVYsRUFBa0I7V0FBTyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHblUsU0FBUyxDQUFDVCxNQUE5QixFQUFzQzRVLENBQUMsRUFBdkMsRUFBMkM7WUFBTUMsTUFBTSxHQUFHcFUsU0FBUyxDQUFDbVUsQ0FBRCxDQUF0Qjs7YUFBZ0MsSUFBSUUsR0FBVCxJQUFnQkQsTUFBaEIsRUFBd0I7Y0FBTTNJLE1BQU0sQ0FBQzVMLFNBQVAsQ0FBaUJ5VSxjQUFqQixDQUFnQ3ZVLElBQWhDLENBQXFDcVUsTUFBckMsRUFBNkNDLEdBQTdDLENBQUosRUFBdUQ7WUFBRUgsTUFBTSxDQUFDRyxHQUFELENBQU4sR0FBY0QsTUFBTSxDQUFDQyxHQUFELENBQXBCOzs7OzthQUF3Q0gsTUFBUDtLQUE1Tzs7V0FBcVFGLFFBQVEsQ0FBQy9ULEtBQVQsQ0FBZSxJQUFmLEVBQXFCRCxTQUFyQixDQUFQOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1dBNkIzUXFWLGNBQVQsQ0FBd0JiLE1BQXhCLEVBQWdDN1QsS0FBaEMsRUFBdUM7UUFDakNBLEtBQUssS0FBSyxhQUFkLEVBQTZCLE9BQU9BLEtBQVA7UUFDekIyVSxXQUFXLEdBQUcsQ0FBQyxHQUFHMUQsV0FBVyxDQUFDelIsT0FBaEIsRUFBeUJRLEtBQXpCLENBQWxCO1FBQ0krUCxLQUFLLEdBQUcsT0FBTzRFLFdBQVcsQ0FBQzVFLEtBQW5CLEtBQTZCLFFBQTdCLEdBQXdDNEUsV0FBVyxDQUFDNUUsS0FBcEQsR0FBNEQsQ0FBeEU7O1FBRUk2RSxjQUFjLEdBQUd2QixRQUFRLENBQUMsRUFBRCxFQUFLc0IsV0FBTCxFQUFrQjtNQUM3QzVFLEtBQUssRUFBRSxDQUFDLEdBQUdtRCxRQUFNLENBQUMxVCxPQUFYLEVBQW9CLENBQXBCLEVBQXVCLENBQXZCLEVBQTBCLENBQUN1USxLQUFLLEdBQUcsR0FBUixHQUFjQyxVQUFVLENBQUM2RCxNQUFELENBQVYsR0FBcUIsR0FBcEMsSUFBMkMsR0FBckU7S0FEb0IsQ0FBN0I7O1dBSU8sQ0FBQyxHQUFHcEIsS0FBSyxDQUFDalQsT0FBVixFQUFtQm9WLGNBQW5CLENBQVA7Ozs7TUFJRUMscUJBQXFCOztHQUV4QixHQUFHNUIsUUFBTSxDQUFDelQ7O0lBRVRrVixjQUZGLENBRkE7TUFLSTVVLFFBQVEsR0FBRytVLHFCQUFmO0VBQ0FyVyxlQUFBLEdBQWtCc0IsUUFBbEI7RUFDQVAsY0FBQSxHQUFpQmYsT0FBTyxDQUFDZ0IsT0FBekI7Ozs7QUM3RWUsU0FBU3NWLFNBQVQsQ0FBbUI3WCxJQUFuQixFQUFpQytDLEtBQWpDLEVBQWdENlQsTUFBaEQsRUFBaUU7TUFDeEVrQixXQUFXLEdBQUdsQixNQUFNLEdBQUdhLGNBQWMsQ0FBQ2IsTUFBRCxFQUFTN1QsS0FBVCxDQUFqQixHQUFtQ0EsS0FBN0Q7U0FDTzVELFVBQVAsa0NBQStCYSxJQUEvQixFQUF1QzhYLFdBQXZDOzs7QUNEYSxTQUFTQyxPQUFULENBQWlCQyxJQUFqQixFQUEwQ2hZLElBQTFDLEVBQTJEO1VBQ2hFQSxJQUFSO1NBQ08sT0FBTDt1QkFDWWdZLElBQVY7O1NBQ0csUUFBTDt1QkFDWUEsSUFBVjs7U0FDRyxPQUFMO3VCQUNZQSxJQUFWOzs7dUJBRVVBLElBQVY7Ozs7QUNUUyxTQUFTQyxhQUFULENBQXVCMVosS0FBdkIsRUFBa0Q7TUFDekQyWixTQUFTLEdBQUdULGNBQWMsQ0FBQyxJQUFELEVBQU9sWixLQUFLLENBQUM0WixRQUFiLENBQWhDO01BQ01DLFNBQVMsR0FBR1gsY0FBYyxDQUFDLElBQUQsRUFBT2xaLEtBQUssQ0FBQzZDLE1BQWIsQ0FBaEM7U0FDT2pDLFVBQVAsNEVBR1crWSxTQUhYLEVBSXNCRSxTQUp0Qjs7O0FDU0YsU0FBU0MsUUFBVCxPQUE4RDtNQUExQzlaLEtBQTBDLFFBQTFDQSxLQUEwQztNQUFuQ3dFLEtBQW1DLFFBQW5DQSxLQUFtQztNQUE1QnVWLE9BQTRCLFFBQTVCQSxPQUE0QjtNQUFuQkMsUUFBbUIsUUFBbkJBLFFBQW1COztNQUN4REEsUUFBSixFQUFjO1dBQ0xOLGFBQWEsQ0FBQzFaLEtBQUQsQ0FBcEI7OztNQUVFLENBQUN3RSxLQUFMLEVBQVk7V0FDSDVELFVBQVAsaUhBQ3NCWixLQUFLLENBQUN5TyxLQUQ1QixFQUVrQnpPLEtBQUssQ0FBQzZDLE1BRnhCLEVBR1c3QyxLQUFLLENBQUMrQyxJQUhqQixFQU1vQi9DLEtBQUssQ0FBQ2lhLFdBTjFCLEVBVW9CamEsS0FBSyxDQUFDa2EsWUFWMUI7OztNQWNFMVYsS0FBSyxLQUFLLE1BQWQsRUFBc0I7V0FDYjVELFVBQVAsMkdBR1daLEtBQUssQ0FBQytDLElBSGpCOzs7TUFXSWdWLE1BQU0sR0FBRy9YLEtBQUssQ0FBQ3dFLEtBQUQsQ0FBTCxJQUFnQkEsS0FBL0I7TUFDTTJWLFdBQVcsR0FBR2xCLGVBQWUsQ0FBQ2paLEtBQUQsRUFBUStYLE1BQVIsQ0FBbkM7O01BQ0lnQyxPQUFKLEVBQWE7V0FDSm5aLFVBQVAsd0hBRWtCbVgsTUFGbEIsRUFHV0EsTUFIWCxFQU13QkEsTUFOeEIsRUFPYW9DLFdBUGIsRUFXTWIsU0FBUyxDQUFDLFFBQUQsRUFBV3ZCLE1BQVgsRUFBbUIsR0FBbkIsQ0FYZjs7O1NBZ0JLblgsVUFBUCx3S0FDc0JtWCxNQUR0QixFQUdXb0MsV0FIWCxFQU9hQSxXQVBiLEVBUXdCL0IsTUFBTSxDQUFDLEtBQUQsRUFBUUwsTUFBUixDQVI5QixFQVl3QkssTUFBTSxDQUFDLElBQUQsRUFBT0wsTUFBUCxDQVo5QixFQWdCTXVCLFNBQVMsQ0FBQyxRQUFELEVBQVd2QixNQUFYLEVBQW1CLEdBQW5CLENBaEJmOzs7QUFnQ0YsSUFBTXFDLE1BQU07O0FBQUdwWixlQUFNLENBQUNxWixNQUFWOzs7Z2JBcUJSUCxRQXJCUSxFQXNCUjtNQUFHclksSUFBSCxTQUFHQSxJQUFIO1NBQWMrWCxPQUFPLENBQUMsV0FBRCxFQUFjL1gsSUFBZCxDQUFyQjtDQXRCUSxFQXVCUjtNQUFHNlksSUFBSCxTQUFHQSxJQUFIO1NBQWNBLElBQUksR0FBRyxjQUFILEdBQW9CLEVBQXRDO0NBdkJRLENBQVo7QUF5QkFGLE1BQU0sQ0FBQ2xaLFdBQVAsR0FBcUIsUUFBckI7O0FDeEhBLElBQU1xWixXQUFXOztBQUFHdlosZUFBTSxDQUFDQyxHQUFWOzs7NFJBT2JtWixNQVBhLENBQWpCO0FBMEJBRyxXQUFXLENBQUNyWixXQUFaLEdBQTBCLGFBQTFCOztBQzFCQSxJQUFNc1osWUFBWTs7QUFBRzVaLFVBQUgsbUVBQWxCO0FBTUEsSUFBTTZaLFVBQVU7O0FBQUc3WixVQUFILDBEQUFoQjtBQWdCQSxJQUFNOFosS0FBSzs7QUFBRzFaLGVBQU0sQ0FBQzJaLEtBQVY7OztpUkFFUDtNQUFHTCxJQUFILFFBQUdBLElBQUg7U0FBY0EsSUFBSSxHQUFHMVosVUFBSCxvQkFBdUIsRUFBekM7Q0FGTyxFQWFMO01BQUdaLEtBQUgsU0FBR0EsS0FBSDtNQUFVNGEsUUFBVixTQUFVQSxRQUFWO1NBQXlCQSxRQUFRLEdBQUdoYSxVQUFILDZCQUNiWixLQUFLLENBQUM2QyxNQURPLElBRS9CLEVBRkY7Q0FiSyxFQXFCUDtNQUFHZ1ksT0FBSCxTQUFHQSxPQUFIO1NBQWlCQSxPQUFPLEdBQUdMLFlBQUgsR0FBa0IsRUFBMUM7Q0FyQk8sRUFzQlA7TUFBR00sS0FBSCxTQUFHQSxLQUFIO1NBQWVBLEtBQUssR0FBR0wsVUFBSCxHQUFnQixFQUFwQztDQXRCTyxFQXdCUDtNQUFHTSxXQUFILFNBQUdBLFdBQUg7U0FBcUJBLFdBQVcsR0FBR25hLFVBQUgsZUFFNUJtYSxXQUY0QixJQUk5QixFQUpGO0NBeEJPLENBQVg7O0FDWkEsU0FBU2pCLFVBQVQsT0FBeUM7TUFBckJ0VixLQUFxQixRQUFyQkEsS0FBcUI7TUFBZHhFLEtBQWMsUUFBZEEsS0FBYztNQUNuQyxDQUFDd0UsS0FBTCxFQUFZLE9BQU8sRUFBUDtNQUVOdVQsTUFBTSxHQUFHL1gsS0FBSyxDQUFDd0UsS0FBRCxDQUFMLElBQWdCQSxLQUEvQjtNQUNNMlYsV0FBVyxHQUFHbEIsZUFBZSxDQUFDalosS0FBRCxFQUFRK1gsTUFBUixDQUFuQztTQUNPblgsVUFBUCx3Q0FBK0JtWCxNQUEvQixFQUFpRG9DLFdBQWpEOzs7QUFHRixJQUFNYSxHQUFHOztBQUFHaGEsZUFBTSxDQUFDQyxHQUFWOzs7NktBSUw7TUFBR2dhLFVBQUgsU0FBR0EsVUFBSDtNQUFlamIsS0FBZixTQUFlQSxLQUFmO1NBQTJCaWIsVUFBVSxvQ0FBNkJqYixLQUFLLENBQUM2QyxNQUFuQyxNQUFyQztDQUpLLEVBWUxpWCxVQVpLLENBQVQ7QUFjQWtCLEdBQUcsQ0FBQzlaLFdBQUosR0FBa0IsS0FBbEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZBLElBQU1rUCxPQUFPOztBQUFHcFAsZUFBTSxDQUFDQyxHQUFWOzs7aVdBS1M7TUFBR2pCLEtBQUgsUUFBR0EsS0FBSDtTQUFlQSxLQUFLLENBQUN5QyxVQUFyQjtDQUxULEVBT1Q7TUFBR2hCLElBQUgsU0FBR0EsSUFBSDtTQUFjK1gsT0FBTyxDQUFDLFFBQUQsRUFBVy9YLElBQVgsQ0FBckI7Q0FQUyxFQVFUO01BQUdBLElBQUgsU0FBR0EsSUFBSDtNQUFTM0IsTUFBVCxTQUFTQSxNQUFUO1NBQXNCLENBQUMyQixJQUFELElBQVMzQixNQUFULHFCQUE2QkEsTUFBN0IsU0FBeUMsRUFBL0Q7Q0FSUyxFQWNQO01BQUd1QixLQUFILFNBQUdBLEtBQUg7TUFBVStDLEdBQVYsU0FBVUEsR0FBVjtTQUFxQi9DLEtBQUssS0FBSytDLEdBQVgsR0FBa0IsRUFBbEIsR0FBdUIsNERBQTNDO0NBZE8sRUFlVztNQUFHSSxLQUFILFNBQUdBLEtBQUg7TUFBVXhFLEtBQVYsU0FBVUEsS0FBVjtTQUF1QkEsS0FBSyxDQUFDd0UsS0FBRCxDQUFMLElBQWlCQSxLQUF4QztDQWZYLEVBd0JUO01BQUc1RCxHQUFILFNBQUdBLEdBQUg7U0FBY0EsR0FBRyxJQUFJLEVBQXJCO0NBeEJTLENBQWI7O0lBNEJxQnNhOzs7Ozs7Ozs7Ozs7OzZCQUtUO3dCQUNlLEtBQUtDLEtBRHBCO1VBQ0E5WixLQURBLGVBQ0FBLEtBREE7VUFDTytDLEdBRFAsZUFDT0EsR0FEUDtVQUVGZ1gsT0FBTyxHQUFHOVosSUFBSSxDQUFDbUQsS0FBTCxDQUFZcEQsS0FBSyxHQUFDK0MsR0FBUCxHQUFjLEdBQXpCLENBQWhCO2FBRUV4RSw2QkFBQyxPQUFELEVBQWEsS0FBS3ViLEtBQWxCLEVBQ0V2YjtRQUFLLElBQUksRUFBQyxhQUFWO1FBQXdCLEtBQUssRUFBRTtVQUFFQyxLQUFLLFlBQUt1YixPQUFPLEdBQUcsR0FBVixHQUFnQixHQUFoQixHQUFzQkEsT0FBM0I7O1FBRHhDLENBREY7Ozs7O0VBUmtDQzs7Z0JBQWpCSCwwQkFDRztFQUNwQjFXLEtBQUssRUFBRTs7O0FDOUNYLElBQU00TCxTQUFPOztBQUFHcFAsZUFBTSxDQUFDQyxHQUFWOzs7MEVBS1Q7TUFBR3FhLFFBQUgsUUFBR0EsUUFBSDtNQUFhdGIsS0FBYixRQUFhQSxLQUFiO1NBQXlCc2IsUUFBUSxHQUFHMWEsVUFBSCxpRUFHdEJaLEtBQUssQ0FBQ3ViLE9BSGdCLElBTS9CLEVBTkY7Q0FMUyxFQWFUO01BQUczYSxHQUFILFNBQUdBLEdBQUg7U0FBYUEsR0FBRyxJQUFJLEVBQXBCO0NBYlMsQ0FBYjtBQWdCQSxJQUFNNGEsS0FBSzs7QUFBR3hhLGVBQU0sQ0FBQ3lhLEtBQVY7Ozt3RUFDQTtNQUFHemIsS0FBSCxTQUFHQSxLQUFIO1NBQWVBLEtBQUssQ0FBQzBiLFVBQXJCO0NBREEsQ0FBWDs7SUFjcUJDOzs7Ozs7Ozs7Ozs7OzZCQUNWO3dCQUM4QixLQUFLUixLQURuQztVQUNDTSxLQURELGVBQ0NBLEtBREQ7VUFDUUcsUUFEUixlQUNRQSxRQURSO1VBQ3FCQyxJQURyQjs7YUFHTGpjLDZCQUFDd1EsU0FBRCxFQUFheUwsSUFBYixFQUNHSixLQUFLLElBQUs3Yiw2QkFBQyxLQUFELFFBQVE2YixLQUFSLENBRGIsRUFFR0csUUFGSCxDQURGOzs7OztFQUgrQlA7O0FDL0JwQixTQUFTUyxTQUFULENBQW1CcmEsSUFBbkIsRUFBMEM7U0FDaERiLFVBQVAsMm5CQUdZYSxJQUhaLEVBSVdBLElBSlg7OztBQ0RhLFNBQVNzYSxLQUFULENBQWV2WCxLQUFmLEVBQThCd1gsU0FBOUIsRUFBMkQ7U0FDakVwYixVQUFQLHVQQUVzQjRELEtBRnRCOzs7QUNHRixJQUFNeVgsT0FBTzs7QUFBR2piLGVBQU0sQ0FBQ2tiLElBQVY7OztxQ0FFRjtNQUFHQyxLQUFILFFBQUdBLEtBQUg7TUFBVW5jLEtBQVYsUUFBVUEsS0FBVjtTQUFzQm1jLEtBQUssR0FBR25jLEtBQUssQ0FBQzBDLE1BQVQsR0FBa0IxQyxLQUFLLENBQUNvYyxTQUFuRDtDQUZFLENBQWI7QUFLQSxBQUFlLFNBQVNDLFdBQVQsQ0FBcUJDLElBQXJCLEVBQW9DSCxLQUFwQyxFQUFvRDtNQUM3REEsS0FBSixFQUFXO1dBQ0R2Yyw2QkFBQyxPQUFEO01BQVMsS0FBSztPQUFFdWMsS0FBaEIsQ0FBUjs7O01BRUVHLElBQUosRUFBVTtXQUNBMWMsNkJBQUMsT0FBRCxRQUFVMGMsSUFBVixDQUFSOzs7Ozs7Ozs7Ozs7O0FDQUosSUFBTUMsU0FBUzs7QUFBRzNiLFVBQUgsZ0VBQWY7QUFPQSxJQUFNNGIsUUFBUTs7QUFBRzViLFVBQUgsNkRBQWQ7QUFPQSxJQUFNNmIsSUFBSTs7QUFBR3piLGVBQU0sQ0FBQ2tiLElBQVY7Ozt3R0FLQztNQUFHbGMsS0FBSCxRQUFHQSxLQUFIO1NBQWVBLEtBQUssQ0FBQzZDLE1BQXJCO0NBTEQsRUFNTjtNQUFHNlosS0FBSCxTQUFHQSxLQUFIO1NBQWVBLEtBQUssR0FBR0gsU0FBSCxHQUFlQyxRQUFuQztDQU5NLENBQVY7QUFjQSxJQUFNcE0sU0FBTzs7QUFBR3BQLGVBQU0sQ0FBQ2tiLElBQVY7OztpakJBa0JQO01BQUduQyxPQUFILFNBQUdBLE9BQUg7TUFBWS9aLEtBQVosU0FBWUEsS0FBWjtNQUFtQm1jLEtBQW5CLFNBQW1CQSxLQUFuQjtTQUErQnBDLE9BQU8sK0JBQ2pCb0MsS0FBSyxHQUFHbmMsS0FBSyxDQUFDMEMsTUFBVCxHQUFrQjFDLEtBQUssQ0FBQzZDLE1BRFosZ0VBRVZzWixLQUFLLEdBQUduYyxLQUFLLENBQUMwQyxNQUFULEdBQWtCMUMsS0FBSyxDQUFDNkMsTUFGbkIsd0JBQXRDO0NBbEJPLEVBc0JQMlcsT0FBTyxDQUFDLFdBQUQsQ0F0QkEsRUE2QlM7TUFBRzJDLEtBQUgsU0FBR0EsS0FBSDtNQUFVbmMsS0FBVixTQUFVQSxLQUFWO1NBQXVCbWMsS0FBSyxHQUFHbmMsS0FBSyxDQUFDMEMsTUFBVCxHQUFrQjFDLEtBQUssQ0FBQ3ViLE9BQXBEO0NBN0JULEVBOEJMO01BQUd2YixLQUFILFNBQUdBLEtBQUg7TUFBVStaLE9BQVYsU0FBVUEsT0FBVjtNQUFtQm9DLEtBQW5CLFNBQW1CQSxLQUFuQjtTQUErQnBDLE9BQU8scUNBQ1hvQyxLQUFLLEdBQUduYyxLQUFLLENBQUMwQyxNQUFULEdBQWtCMUMsS0FBSyxDQUFDdWIsT0FEbEIsdUNBRWZZLEtBQUssR0FBR25jLEtBQUssQ0FBQzBDLE1BQVQsR0FBa0IxQyxLQUFLLENBQUN1YixPQUZkLE1BQXRDO0NBOUJLLEVBcUNMO01BQUd2YixLQUFILFNBQUdBLEtBQUg7U0FBZTBaLGFBQWEsQ0FBQzFaLEtBQUQsQ0FBNUI7Q0FyQ0ssRUE2Q0U7TUFBR0EsS0FBSCxTQUFHQSxLQUFIO1NBQWVBLEtBQUssQ0FBQzJjLFdBQXJCO0NBN0NGLEVBbURTO01BQUczYyxLQUFILFNBQUdBLEtBQUg7U0FBZUEsS0FBSyxDQUFDaWEsV0FBckI7Q0FuRFQsRUFxRFB3QyxJQXJETyxFQXNERTtNQUFHemMsS0FBSCxTQUFHQSxLQUFIO1NBQWVBLEtBQUssQ0FBQ2lhLFdBQXJCO0NBdERGLEVBeURUO01BQUdyWixHQUFILFVBQUdBLEdBQUg7U0FBYUEsR0FBRyxJQUFJLEVBQXBCO0NBekRTLENBQWI7O0lBOEVxQmdjOzs7Ozs7Ozs7Ozs7OzZCQVFWO3dCQUdILEtBQUt6QixLQUhGO1VBRUwwQixTQUZLLGVBRUxBLFNBRks7VUFFTTlDLE9BRk4sZUFFTUEsT0FGTjtVQUVlb0MsS0FGZixlQUVlQSxLQUZmO1VBRXNCRyxJQUZ0QixlQUVzQkEsSUFGdEI7VUFFNEJFLFFBRjVCLGVBRTRCQSxRQUY1QjtVQUVzQ0QsU0FGdEMsZUFFc0NBLFNBRnRDO1VBRWlETyxLQUZqRCxlQUVpREEsS0FGakQ7VUFFd0RsYyxHQUZ4RCxlQUV3REEsR0FGeEQ7VUFFZ0VpYixJQUZoRTs7YUFLTGpjO1FBQVMsU0FBUyxFQUFFaWQsU0FBcEI7UUFBK0IsT0FBTyxFQUFFOUMsT0FBeEM7UUFBaUQsS0FBSyxFQUFFb0MsS0FBeEQ7UUFBK0QsS0FBSyxFQUFFVyxLQUF0RTtjQUFrRmxjO1NBQy9FNGIsUUFBUSxJQUFLNWMsNkJBQUMsSUFBRCxRQUFPNGMsUUFBUCxDQURoQixFQUVHRCxTQUFTLElBQUszYyw2QkFBQyxJQUFEO1FBQU0sS0FBSztTQUFFMmMsU0FBYixDQUZqQixFQUdFM2Msc0NBQVdpYyxJQUFYLENBSEYsRUFJR1EsV0FBVyxDQUFDQyxJQUFELEVBQU9ILEtBQVAsQ0FKZCxDQURGOzs7OztFQVptQ2Q7O2dCQUFsQnVCLDJCQUNHO0VBQ3BCRyxJQUFJLEVBQUUsTUFEYztFQUVwQjFiLEtBQUssRUFBRSxFQUZhO0VBR3BCMmIsU0FBUyxFQUFFLEdBSFM7RUFJcEJDLFFBQVEsRUFBRSxvQkFBTTs7Ozs7Ozs7Ozs7Ozs7OztBQ25IcEIsSUFBTTdNLFNBQU87O0FBQUdwUCxlQUFNLENBQUNrYixJQUFWOzs7c2hCQWlCVztNQUFHbGMsS0FBSCxRQUFHQSxLQUFIO01BQVVtYyxLQUFWLFFBQVVBLEtBQVY7U0FBc0JBLEtBQUssR0FBR25jLEtBQUssQ0FBQzBDLE1BQVQsR0FBa0IxQyxLQUFLLENBQUM2QyxNQUFuRDtDQWpCWCxFQXVCUDJXLE9BQU8sQ0FBQyxXQUFELENBdkJBLEVBMEJTO01BQUd4WixLQUFILFNBQUdBLEtBQUg7TUFBVW1jLEtBQVYsU0FBVUEsS0FBVjtTQUFzQkEsS0FBSyxHQUFHbmMsS0FBSyxDQUFDMEMsTUFBVCxHQUFrQjFDLEtBQUssQ0FBQ3ViLE9BQW5EO0NBMUJULEVBMkJMO01BQUd2YixLQUFILFNBQUdBLEtBQUg7TUFBVW1jLEtBQVYsU0FBVUEsS0FBVjtTQUFzQjdDLFNBQVMsQ0FBQyxPQUFELEVBQVU2QyxLQUFLLEdBQUduYyxLQUFLLENBQUMwQyxNQUFULEdBQWtCMUMsS0FBSyxDQUFDdWIsT0FBdkMsQ0FBL0I7Q0EzQkssRUErQkw7TUFBR3ZiLEtBQUgsU0FBR0EsS0FBSDtTQUFlMFosYUFBYSxDQUFDMVosS0FBRCxDQUE1QjtDQS9CSyxFQXVDRTtNQUFHQSxLQUFILFNBQUdBLEtBQUg7U0FBZUEsS0FBSyxDQUFDMmMsV0FBckI7Q0F2Q0YsRUE2Q1M7TUFBRzNjLEtBQUgsU0FBR0EsS0FBSDtTQUFlQSxLQUFLLENBQUNpYSxXQUFyQjtDQTdDVCxFQWdEVDtNQUFHclosR0FBSCxTQUFHQSxHQUFIO1NBQWFBLEdBQUcsSUFBSSxFQUFwQjtDQWhEUyxDQUFiOztJQTREcUJzYzs7Ozs7Ozs7Ozs7OzswQ0FRRy9CLE9BQWM7YUFDM0JBLEtBQUssQ0FBQzlaLEtBQU4sS0FBZ0IsS0FBSzhaLEtBQUwsQ0FBVzlaLEtBQTNCLElBQ0w4WixLQUFLLENBQUNtQixJQUFOLEtBQWUsS0FBS25CLEtBQUwsQ0FBV21CLElBRHJCLElBRUxuQixLQUFLLENBQUNnQixLQUFOLEtBQWdCLEtBQUtoQixLQUFMLENBQVdnQixLQUZ0QixJQUdMaEIsS0FBSyxDQUFDbkIsUUFBTixLQUFtQixLQUFLbUIsS0FBTCxDQUFXbkIsUUFIekIsSUFJTG1CLEtBQUssQ0FBQ2dDLFFBQU4sS0FBbUIsS0FBS2hDLEtBQUwsQ0FBV2dDLFFBSmhDOzs7OzZCQU9PO3dCQUNpRCxLQUFLaEMsS0FEdEQ7VUFDQzBCLFNBREQsZUFDQ0EsU0FERDtVQUNZUCxJQURaLGVBQ1lBLElBRFo7VUFDa0JILEtBRGxCLGVBQ2tCQSxLQURsQjtVQUN5QlcsS0FEekIsZUFDeUJBLEtBRHpCO1VBQ2dDbGMsR0FEaEMsZUFDZ0NBLEdBRGhDO1VBQ3dDaWIsSUFEeEM7O2FBR0xqYztRQUFTLFNBQVMsRUFBRWlkLFNBQXBCO1FBQStCLEtBQUssRUFBRVYsS0FBdEM7UUFBNkMsS0FBSyxFQUFFVyxLQUFwRDtjQUFnRWxjO1NBQzlEaEIseUNBQWNpYyxJQUFkLENBREYsRUFFR1EsV0FBVyxDQUFDQyxJQUFELEVBQU9ILEtBQVAsQ0FGZCxDQURGOzs7OztFQWxCa0NpQjs7Z0JBQWpCRiwwQkFDRztFQUNwQjdiLEtBQUssRUFBRSxFQURhO0VBRXBCZ2MsR0FBRyxFQUFFLENBRmU7RUFHcEJDLEdBQUcsRUFBRSxDQUhlO0VBSXBCTCxRQUFRLEVBQUUsb0JBQU07Ozs7Ozs7QUMxRXBCLElBQU03TSxTQUFPOztBQUFHcFAsZUFBTSxDQUFDa2IsSUFBVjs7OzY0QkFtQ2E7TUFBR2xjLEtBQUgsUUFBR0EsS0FBSDtTQUFlQSxLQUFLLENBQUM2QyxNQUFyQjtDQW5DYixFQWlEVztNQUFHN0MsS0FBSCxTQUFHQSxLQUFIO1NBQWVBLEtBQUssQ0FBQ3ViLE9BQXJCO0NBakRYLEVBa0RTO01BQUd2YixLQUFILFNBQUdBLEtBQUg7U0FBZUEsS0FBSyxDQUFDdWIsT0FBckI7Q0FsRFQsRUFxRFc7TUFBR3ZiLEtBQUgsU0FBR0EsS0FBSDtTQUFlQSxLQUFLLENBQUN5TyxLQUFyQjtDQXJEWCxFQTJEVztNQUFHek8sS0FBSCxTQUFHQSxLQUFIO1NBQWVBLEtBQUssQ0FBQ3ViLE9BQXJCO0NBM0RYLEVBNERTO01BQUd2YixLQUFILFNBQUdBLEtBQUg7U0FBZUEsS0FBSyxDQUFDdWIsT0FBckI7Q0E1RFQsRUErRFc7TUFBR3ZiLEtBQUgsU0FBR0EsS0FBSDtTQUFlQSxLQUFLLENBQUN5TyxLQUFyQjtDQS9EWCxFQXNFSTtNQUFHek8sS0FBSCxTQUFHQSxLQUFIO1NBQWVrWixjQUFjLENBQUMsSUFBRCxFQUFPbFosS0FBSyxDQUFDNFosUUFBYixDQUE3QjtDQXRFSixFQXdFVztNQUFHNVosS0FBSCxTQUFHQSxLQUFIO1NBQWVrWixjQUFjLENBQUMsSUFBRCxFQUFPbFosS0FBSyxDQUFDNkMsTUFBYixDQUE3QjtDQXhFWCxFQXlFYTtNQUFHN0MsS0FBSCxVQUFHQSxLQUFIO1NBQWVBLEtBQUssQ0FBQzZDLE1BQXJCO0NBekViLEVBNkVXO01BQUc3QyxLQUFILFVBQUdBLEtBQUg7U0FBZWtaLGNBQWMsQ0FBQyxJQUFELEVBQU9sWixLQUFLLENBQUM0WixRQUFiLENBQTdCO0NBN0VYLENBQWI7O0lBd0ZxQjJEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7b0dBUUYsTUFBS3BDLEtBQUwsQ0FBVzFCOzs7Ozs7OzBDQUVOMEIsT0FBYzthQUMzQkEsS0FBSyxDQUFDcUMsT0FBTixLQUFrQixLQUFLckMsS0FBTCxDQUFXcUMsT0FBN0IsSUFDTHJDLEtBQUssQ0FBQ1MsUUFBTixLQUFtQixLQUFLVCxLQUFMLENBQVdTLFFBRGhDOzs7OzZCQUlPO3dCQUNrQyxLQUFLVCxLQUR2QztVQUNDMEIsU0FERCxlQUNDQSxTQUREO1VBQ1lqQixRQURaLGVBQ1lBLFFBRFo7VUFDeUJDLElBRHpCOzthQUdMamMsNkJBQUN3USxTQUFEO1FBQVMsU0FBUyxFQUFFeU07U0FDbEJqZDtRQUFPLElBQUksRUFBQyxVQUFaO1FBQXVCLEVBQUUsRUFBRSxLQUFLNmQ7U0FBUTVCLElBQXhDLEVBREYsRUFFRWpjO1FBQU8sT0FBTyxFQUFFLEtBQUs2ZDtTQUFLN0IsUUFBMUIsQ0FGRixDQURGOzs7OztFQWpCa0N3Qjs7Z0JBQWpCRywwQkFDRztFQUNwQjlELElBQUksRUFBRSxJQURjO0VBRXBCbUMsUUFBUSxFQUFFLElBRlU7RUFHcEI0QixPQUFPLEVBQUUsS0FIVztFQUlwQlAsUUFBUSxFQUFFLG9CQUFNOzs7Ozs7Ozs7Ozs7QUNqRnBCLElBQU1TLFlBQVk7O0FBQUcxYyxlQUFNLENBQUNrYixJQUFWOzs7MG1CQWlCWjtNQUFHemEsSUFBSCxRQUFHQSxJQUFIO1NBQWMrWCxPQUFPLENBQUMsV0FBRCxFQUFjL1gsSUFBZCxDQUFyQjtDQWpCWSxFQW9CWjtNQUFHc1ksT0FBSCxTQUFHQSxPQUFIO01BQVkvWixLQUFaLFNBQVlBLEtBQVo7TUFBbUJtYyxLQUFuQixTQUFtQkEsS0FBbkI7U0FDQXBDLE9BQU8sR0FBR25aLFVBQUgsK0NBQ2V1YixLQUFLLEdBQUduYyxLQUFLLENBQUMwQyxNQUFULEdBQWtCMUMsS0FBSyxDQUFDNkMsTUFENUMsSUFHSGpDLFVBSEcsb0RBSXNCdWIsS0FBSyxHQUFHbmMsS0FBSyxDQUFDMEMsTUFBVCxHQUFrQjFDLEtBQUssQ0FBQzZDLE1BSm5ELENBRFA7Q0FwQlksRUFtQ0k7TUFBR3NaLEtBQUgsU0FBR0EsS0FBSDtNQUFVbmMsS0FBVixTQUFVQSxLQUFWO1NBQXNCbWMsS0FBSyxHQUFHbmMsS0FBSyxDQUFDMEMsTUFBVCxHQUFrQjFDLEtBQUssQ0FBQ3ViLE9BQW5EO0NBbkNKLEVBcUNWO01BQUd2YixLQUFILFNBQUdBLEtBQUg7TUFBVStaLE9BQVYsU0FBVUEsT0FBVjtNQUFtQm9DLEtBQW5CLFNBQW1CQSxLQUFuQjtTQUErQnBDLE9BQU8sR0FDbkNvQyxLQUFLLEdBQUduYyxLQUFLLENBQUMwQyxNQUFULEdBQWtCMUMsS0FBSyxDQUFDdWIsT0FETSxHQUVuQ1ksS0FBSyxHQUFHbmMsS0FBSyxDQUFDMEMsTUFBVCxHQUFrQjFDLEtBQUssQ0FBQ3ViLE9BRmhDO0NBckNVLEVBb0RWO01BQUd2YixLQUFILFNBQUdBLEtBQUg7U0FBZTBaLGFBQWEsQ0FBQzFaLEtBQUQsQ0FBNUI7Q0FwRFUsRUF3REg7TUFBR0EsS0FBSCxTQUFHQSxLQUFIO1NBQWVBLEtBQUssQ0FBQzJjLFdBQXJCO0NBeERHLEVBNkRaO01BQUczYyxLQUFILFNBQUdBLEtBQUg7U0FBZTJkLEtBQUssQ0FBQzNkLEtBQUssQ0FBQzZDLE1BQVAsQ0FBcEI7Q0E3RFksRUFtRWQ7TUFBRzdDLEtBQUgsU0FBR0EsS0FBSDtNQUFVZ2EsUUFBVixTQUFVQSxRQUFWO1NBQ0FBLFFBQVEsR0FDSixFQURJLEdBRUpwWixVQUZJLGlHQUtZWixLQUFLLENBQUNpYSxXQUxsQixFQVNZamEsS0FBSyxDQUFDaWEsV0FUbEIsQ0FEUjtDQW5FYyxFQWtGZDtNQUFHclosR0FBSCxTQUFHQSxHQUFIO1NBQWFBLEdBQUcsSUFBSSxFQUFwQjtDQWxGYyxDQUFsQjs7SUFxR3FCZ2Q7Ozs7Ozs7Ozs7Ozs7Ozs7OzswRkFrQkwsVUFBQ25DLEtBQUQsRUFBbUI7VUFDM0IsTUFBS04sS0FBTCxDQUFXMEMsTUFBZixFQUF1QjtlQUNkLE1BQUsxQyxLQUFMLENBQVcwQyxNQUFYLENBQWtCcEMsS0FBbEIsQ0FBUDs7O2FBRUtBLEtBQVA7Ozt5RkFHVyxZQUFNO2FBQ1YsTUFBS04sS0FBTCxDQUFXMkMsT0FBWCxDQUFtQmxGLEdBQW5CLENBQXVCLFVBQUNtRixJQUFELEVBQU9DLEdBQVAsRUFBZTtZQUN2QyxPQUFPRCxJQUFQLEtBQWdCLFFBQXBCLEVBQThCO2lCQUUxQm5lO1lBQVEsR0FBRyxFQUFFbWUsSUFBYjtZQUFtQixLQUFLLEVBQUVBO2FBQ3ZCLE1BQUtFLFdBQUwsQ0FBaUJGLElBQWpCLENBREgsQ0FERjs7O1lBTU1OLEVBUm1DLEdBUXRCTSxJQVJzQixDQVFuQ04sRUFSbUM7WUFRL0JoRSxJQVIrQixHQVF0QnNFLElBUnNCLENBUS9CdEUsSUFSK0I7ZUFVekM3WjtVQUFRLEdBQUcsWUFBSzZkLEVBQUwsY0FBV08sR0FBWCxDQUFYO1VBQTZCLEtBQUssRUFBRVA7V0FDakMsTUFBS1EsV0FBTCxDQUFpQnhFLElBQWpCLENBREgsQ0FERjtPQVRLLENBQVA7Ozs7Ozs7OzBDQWxCb0IwQixPQUFjO2FBRWhDQSxLQUFLLENBQUMyQyxPQUFOLENBQWMxYSxNQUFkLEtBQXlCLEtBQUsrWCxLQUFMLENBQVcyQyxPQUFYLENBQW1CMWEsTUFBNUMsSUFDQStYLEtBQUssQ0FBQzlaLEtBQU4sS0FBZ0IsS0FBSzhaLEtBQUwsQ0FBVzlaLEtBRDNCLElBRUE4WixLQUFLLENBQUNuQixRQUFOLEtBQW1CLEtBQUttQixLQUFMLENBQVduQixRQUY5QixJQUdBbUIsS0FBSyxDQUFDbUIsSUFBTixLQUFlLEtBQUtuQixLQUFMLENBQVdtQixJQUgxQixJQUlBbkIsS0FBSyxDQUFDZ0IsS0FBTixLQUFnQixLQUFLaEIsS0FBTCxDQUFXZ0IsS0FMN0I7Ozs7NkJBa0NPO3dCQVlILEtBQUtoQixLQVpGO1VBRUx2YSxHQUZLLGVBRUxBLEdBRks7VUFHTGljLFNBSEssZUFHTEEsU0FISztVQUlMcUIsU0FKSyxlQUlMQSxTQUpLO1VBS0xuRSxPQUxLLGVBS0xBLE9BTEs7VUFNTCtELE9BTkssZUFNTEEsT0FOSztVQU9MM0IsS0FQSyxlQU9MQSxLQVBLO1VBUUxHLElBUkssZUFRTEEsSUFSSztVQVNMSyxXQVRLLGVBU0xBLFdBVEs7VUFVTDNDLFFBVkssZUFVTEEsUUFWSztVQVdGNkIsSUFYRTs7YUFlTGpjO1FBQ0UsU0FBUyxFQUFFaWQsU0FEYjtRQUVFLElBQUksRUFBRXFCLFNBRlI7UUFHRSxPQUFPLEVBQUVuRSxPQUhYO1FBSUUsS0FBSyxFQUFFb0MsS0FKVDtRQUtFLFFBQVEsRUFBRW5DLFFBTFo7Y0FNT3BaO1NBRUxoQixvREFBWWljLElBQVo7UUFBa0IsUUFBUSxFQUFFN0IsUUFBNUI7UUFBc0MsUUFBUSxFQUFFbUUsT0FBTyxDQUFDeEIsV0FBRDtVQUNwREEsV0FBVyxJQUNWL2M7UUFBUSxLQUFLLEVBQUM7U0FDWCtjLFdBREgsQ0FGSixFQU1HLEtBQUt5QixVQUFMLEVBTkgsQ0FSRixFQWdCRy9CLFdBQVcsQ0FBQ0MsSUFBRCxFQUFPSCxLQUFQLENBaEJkLENBREY7Ozs7O0VBekRnQ2lCOztnQkFBZlEsd0JBQ0c7RUFDcEJuRSxJQUFJLEVBQUUsSUFEYztFQUVwQnBZLEtBQUssRUFBRSxFQUZhO0VBR3BCNGIsUUFBUSxFQUFFLG9CQUFNLEVBSEk7RUFJcEJhLE9BQU8sRUFBRTs7Ozs7OztBQ3JIYixJQUFNTyxVQUFVOztBQUFHemQsVUFBSCxpdUJBbUJJO01BQUdaLEtBQUgsUUFBR0EsS0FBSDtTQUFvQkEsS0FBSyxDQUFDdWIsT0FBMUI7Q0FuQkosRUFrQ1k7TUFBR3ZiLEtBQUgsU0FBR0EsS0FBSDtTQUFvQkEsS0FBSyxDQUFDNkMsTUFBMUI7Q0FsQ1osRUErQ1E7TUFBRzdDLEtBQUgsU0FBR0EsS0FBSDtTQUFvQkEsS0FBSyxDQUFDdWIsT0FBMUI7Q0EvQ1IsRUF3REM7TUFBR3ZiLEtBQUgsU0FBR0EsS0FBSDtTQUFvQmtaLGNBQWMsQ0FBQyxJQUFELEVBQU9sWixLQUFLLENBQUM0WixRQUFiLENBQWxDO0NBeERELEVBMERRO01BQUc1WixLQUFILFNBQUdBLEtBQUg7U0FBb0JrWixjQUFjLENBQUMsSUFBRCxFQUFPbFosS0FBSyxDQUFDNkMsTUFBYixDQUFsQztDQTFEUixFQTJEVTtNQUFHN0MsS0FBSCxTQUFHQSxLQUFIO1NBQW9CQSxLQUFLLENBQUM2QyxNQUExQjtDQTNEVixFQStETTtNQUFHN0MsS0FBSCxTQUFHQSxLQUFIO1NBQW9Ca1osY0FBYyxDQUFDLElBQUQsRUFBT2xaLEtBQUssQ0FBQzRaLFFBQWIsQ0FBbEM7Q0EvRE4sQ0FBaEI7QUFxRUEsSUFBTTBFLFdBQVc7O0FBQUcxZCxVQUFILG9rQkFPTztNQUFHWixLQUFILFNBQUdBLEtBQUg7U0FBb0JBLEtBQUssQ0FBQzZDLE1BQTFCO0NBUFAsRUFZSztNQUFHN0MsS0FBSCxTQUFHQSxLQUFIO1NBQW9CQSxLQUFLLENBQUNpYSxXQUExQjtDQVpMLEVBcUJLO01BQUdqYSxLQUFILFVBQUdBLEtBQUg7U0FBb0JBLEtBQUssQ0FBQ3ViLE9BQTFCO0NBckJMLEVBc0JTO01BQUd2YixLQUFILFVBQUdBLEtBQUg7U0FBb0JrWixjQUFjLENBQUMsSUFBRCxFQUFPbFosS0FBSyxDQUFDdWIsT0FBYixDQUFsQztDQXRCVCxFQTRCQTtNQUFHdmIsS0FBSCxVQUFHQSxLQUFIO1NBQW9Ca1osY0FBYyxDQUFDLElBQUQsRUFBT2xaLEtBQUssQ0FBQzRaLFFBQWIsQ0FBbEM7Q0E1QkEsRUE2Qlc7TUFBRzVaLEtBQUgsVUFBR0EsS0FBSDtTQUFvQmtaLGNBQWMsQ0FBQyxJQUFELEVBQU9sWixLQUFLLENBQUM2QyxNQUFiLENBQWxDO0NBN0JYLEVBOEJPO01BQUc3QyxLQUFILFVBQUdBLEtBQUg7U0FBb0JBLEtBQUssQ0FBQzZDLE1BQTFCO0NBOUJQLEVBa0NPO01BQUc3QyxLQUFILFVBQUdBLEtBQUg7U0FBb0JBLEtBQUssQ0FBQzRaLFFBQTFCO0NBbENQLEVBbUNXO01BQUc1WixLQUFILFVBQUdBLEtBQUg7U0FBb0JrWixjQUFjLENBQUMsSUFBRCxFQUFPbFosS0FBSyxDQUFDNFosUUFBYixDQUFsQztDQW5DWCxDQUFqQjtBQXdEQSxJQUFNeEosU0FBTzs7QUFBR3BQLGVBQU0sQ0FBQ2tiLElBQVY7Ozt3REFLVDtNQUFHN0IsTUFBSCxVQUFHQSxNQUFIO1NBQWdCQSxNQUFNLEdBQUdpRSxXQUFILEdBQWlCRCxVQUF2QztDQUxTLENBQWI7O0lBZ0JxQkU7Ozs7Ozs7Ozs7Ozs7Ozs7OztpR0FTTCxNQUFLcEQsS0FBTCxDQUFXMUIsa0JBQVEsTUFBSzBCLEtBQUwsQ0FBVzlaOzs7Ozs7OzBDQUV0QjhaLE9BQWM7YUFDM0JBLEtBQUssQ0FBQ3FDLE9BQU4sS0FBa0IsS0FBS3JDLEtBQUwsQ0FBV3FDLE9BQXBDOzs7OzZCQUdPO3dCQUN3RCxLQUFLckMsS0FEN0Q7VUFDQzBCLFNBREQsZUFDQ0EsU0FERDtVQUNZakIsUUFEWixlQUNZQSxRQURaO1VBQ3NCdkIsTUFEdEIsZUFDc0JBLE1BRHRCO1VBQzhCN1YsS0FEOUIsZUFDOEJBLEtBRDlCO1VBQ3FDc1ksS0FEckMsZUFDcUNBLEtBRHJDO1VBQytDakIsSUFEL0M7O2FBR0xqYyw2QkFBQ3dRLFNBQUQ7UUFBUyxTQUFTLEVBQUV5TSxTQUFwQjtRQUErQixNQUFNLEVBQUV4QyxNQUF2QztRQUFnRCxLQUFLLEVBQUU3VixLQUF2RDtRQUE4RCxLQUFLLEVBQUVzWTtTQUNuRWxkO1FBQU8sRUFBRSxFQUFFLEtBQUs2ZCxFQUFoQjtRQUFvQixJQUFJLEVBQUM7U0FBWTVCLElBQXJDLEVBREYsRUFFRWpjO1FBQU8sT0FBTyxFQUFFLEtBQUs2ZDtTQUFLN0IsUUFBMUIsQ0FGRixDQURGOzs7OztFQWpCK0J3Qjs7Z0JBQWRtQix1QkFDRztFQUNwQjlFLElBQUksRUFBRSxJQURjO0VBRXBCbUMsUUFBUSxFQUFFLElBRlU7RUFHcEI0QixPQUFPLEVBQUUsS0FIVztFQUlwQm5ELE1BQU0sRUFBRSxLQUpZO0VBS3BCNEMsUUFBUSxFQUFFLG9CQUFNOzs7QUNySkwsU0FBU3VCLFFBQVQsQ0FBa0JyRCxLQUFsQixFQUF1RDtTQUVsRXZiO0lBQ0UsS0FBSyxFQUFDLDRCQURSO0lBRUUsS0FBSyxFQUFDLElBRlI7SUFHRSxNQUFNLEVBQUMsSUFIVDtJQUlFLE9BQU8sRUFBQztLQUNKdWIsS0FMTixHQU9FdmI7SUFBRyxTQUFTLEVBQUM7S0FDWEE7SUFBRyxTQUFTLEVBQUM7S0FDWEE7SUFBRyxTQUFTLEVBQUMsbUJBQWI7SUFBaUMsSUFBSSxFQUFDO0tBQ3BDQTtJQUNFLENBQUMsRUFBQyxxb0JBREo7SUFFRSxNQUFNLEVBQUM7SUFIWCxFQUtFQTtJQUNFLENBQUMsRUFBQyx5MEJBREo7SUFFRSxNQUFNLEVBQUMsTUFGVDtJQUdFLElBQUksRUFBQztJQVJULENBREYsQ0FERixFQWNFQTtJQUNFLENBQUMsRUFBQyxxRUFESjtJQUVFLFNBQVMsRUFBQywwQkFGWjtJQUdFLElBQUksRUFBQztJQWpCVCxDQVBGLENBREY7OztBQ0ZhLFNBQVM2ZSxnQkFBVCxDQUEwQnRELEtBQTFCLEVBQStEO1NBRTFFdmI7SUFBSyxLQUFLLEVBQUMsNEJBQVg7SUFBd0MsS0FBSyxFQUFDLElBQTlDO0lBQW1ELE1BQU0sRUFBQyxJQUExRDtJQUErRCxPQUFPLEVBQUM7S0FBZ0J1YixLQUF2RixHQUNFdmI7SUFBRyxTQUFTLEVBQUM7S0FDWEE7SUFBRyxTQUFTLEVBQUMsa0JBQWI7SUFBZ0MsSUFBSSxFQUFDO0tBQ25DQTtJQUNFLENBQUMsRUFBQyxxb0JBREo7SUFFRSxNQUFNLEVBQUM7SUFIWCxFQUtFQTtJQUNFLENBQUMsRUFBQyx5MEJBREo7SUFFRSxNQUFNLEVBQUMsTUFGVDtJQUdFLElBQUksRUFBQztJQVJULENBREYsRUFZRUE7SUFBRyxTQUFTLEVBQUM7S0FDWEE7SUFDRSxDQUFDLEVBQUMsMkNBREo7SUFFRSxTQUFTLEVBQUMsZ0NBRlo7SUFHRSxJQUFJLEVBQUMsTUFIUDtJQUlFLE1BQU0sRUFBQyxjQUpUO0lBS0UsV0FBVyxFQUFDO0lBTmhCLENBWkYsQ0FERixDQURGOzs7QUNBYSxTQUFTOGUsaUJBQVQsQ0FBMkJ2RCxLQUEzQixFQUFnRTtTQUUzRXZiO0lBQUssS0FBSyxFQUFDLDRCQUFYO0lBQXdDLEtBQUssRUFBQyxJQUE5QztJQUFtRCxNQUFNLEVBQUMsSUFBMUQ7SUFBK0QsT0FBTyxFQUFDO0tBQWdCdWIsS0FBdkYsR0FDRXZiO0lBQUcsU0FBUyxFQUFDO0tBQ1hBO0lBQUcsU0FBUyxFQUFDLG1CQUFiO0lBQWlDLElBQUksRUFBQztLQUNwQ0E7SUFDRSxDQUFDLEVBQUMscW9CQURKO0lBRUUsTUFBTSxFQUFDO0lBSFgsRUFLRUE7SUFDRSxDQUFDLEVBQUMseTBCQURKO0lBRUUsTUFBTSxFQUFDLE1BRlQ7SUFHRSxJQUFJLEVBQUM7SUFSVCxDQURGLEVBWUVBO0lBQUcsU0FBUyxFQUFDO0tBQ1hBO0lBQU0sQ0FBQyxFQUFDLDJDQUFSO0lBQW9ELFNBQVMsRUFBQyxnQ0FBOUQ7SUFBK0YsSUFBSSxFQUFDLE1BQXBHO0lBQTJHLE1BQU0sRUFBQyxjQUFsSDtJQUFpSSxXQUFXLEVBQUM7SUFEL0ksQ0FaRixDQURGLENBREY7OztBQ0ZhLFNBQVMrZSxTQUFULENBQW1CeEQsS0FBbkIsRUFBd0Q7U0FFbkV2YjtJQUFLLEtBQUssRUFBQyw0QkFBWDtJQUF3QyxLQUFLLEVBQUMsSUFBOUM7SUFBbUQsTUFBTSxFQUFDLElBQTFEO0lBQStELE9BQU8sRUFBQztLQUFnQnViLEtBQXZGLEdBQ0V2YjtJQUFHLFNBQVMsRUFBQztLQUNYQTtJQUFHLFNBQVMsRUFBQztLQUNYQTtJQUFHLFNBQVMsRUFBQyxtQkFBYjtJQUFpQyxJQUFJLEVBQUM7S0FDcENBO0lBQU0sQ0FBQyxFQUFDLHFvQkFBUjtJQUE4b0IsTUFBTSxFQUFDO0lBRHZwQixFQUVFQTtJQUFNLENBQUMsRUFBQyx5MEJBQVI7SUFBazFCLE1BQU0sRUFBQyxNQUF6MUI7SUFBZzJCLElBQUksRUFBQztJQUZ2MkIsQ0FERixDQURGLEVBT0VBO0lBQUcsU0FBUyxFQUFDO0tBQ1hBO0lBQUcsU0FBUyxFQUFDLG1CQUFiO0lBQWlDLElBQUksRUFBQyxNQUF0QztJQUE2QyxNQUFNLEVBQUMsY0FBcEQ7SUFBbUUsV0FBVyxFQUFDO0tBQzdFQTtJQUFNLEtBQUssRUFBQyxJQUFaO0lBQWlCLE1BQU0sRUFBQyxJQUF4QjtJQUE2QixFQUFFLEVBQUMsR0FBaEM7SUFBb0MsTUFBTSxFQUFDO0lBRDdDLEVBRUVBO0lBQU0sQ0FBQyxFQUFDLEdBQVI7SUFBWSxDQUFDLEVBQUMsR0FBZDtJQUFrQixLQUFLLEVBQUMsSUFBeEI7SUFBNkIsTUFBTSxFQUFDLElBQXBDO0lBQXlDLElBQUksRUFBQztJQUZoRCxDQURGLEVBS0VBO0lBQU0sS0FBSyxFQUFDLEdBQVo7SUFBZ0IsTUFBTSxFQUFDLEtBQXZCO0lBQTZCLFNBQVMsRUFBQyxtQkFBdkM7SUFBMkQsSUFBSSxFQUFDO0lBTGxFLEVBTUVBO0lBQU0sS0FBSyxFQUFDLEdBQVo7SUFBZ0IsTUFBTSxFQUFDLEtBQXZCO0lBQTZCLFNBQVMsRUFBQyxtQkFBdkM7SUFBMkQsSUFBSSxFQUFDO0lBTmxFLEVBT0VBO0lBQU0sS0FBSyxFQUFDLEdBQVo7SUFBZ0IsTUFBTSxFQUFDLEtBQXZCO0lBQTZCLFNBQVMsRUFBQyxtQkFBdkM7SUFBMkQsSUFBSSxFQUFDO0lBUGxFLENBUEYsQ0FERixDQURGOzs7QUNEYSxTQUFTZ2YsTUFBVCxDQUFnQnpELEtBQWhCLEVBQXFEO1NBRWhFdmI7SUFDRSxLQUFLLEVBQUMsNEJBRFI7SUFFRSxLQUFLLEVBQUMsUUFGUjtJQUdFLE1BQU0sRUFBQyxRQUhUO0lBSUUsT0FBTyxFQUFDO0tBQ0p1YixLQUxOLEdBT0V2YjtJQUFHLE9BQU8sRUFBQztLQUNUQSx3Q0FDRUE7SUFDRSxDQUFDLEVBQUMsc0RBREo7SUFFRSxJQUFJLEVBQUMsTUFGUDtJQUdFLE1BQU0sRUFBQyxjQUhUO0lBSUUsYUFBYSxFQUFDLE9BSmhCO0lBS0UsY0FBYyxFQUFDLE9BTGpCO0lBTUUsV0FBVyxFQUFDO0lBUGhCLENBREYsRUFXRUE7SUFDRSxFQUFFLEVBQUMsT0FETDtJQUVFLEVBQUUsRUFBQyxPQUZMO0lBR0UsU0FBUyxFQUFDLHlCQUhaO0lBSUUsSUFBSSxFQUFDLE1BSlA7SUFLRSxNQUFNLEVBQUMsY0FMVDtJQU1FLGFBQWEsRUFBQyxPQU5oQjtJQU9FLGNBQWMsRUFBQyxPQVBqQjtJQVFFLFdBQVcsRUFBQztJQW5CaEIsRUFxQkVBO0lBQ0UsRUFBRSxFQUFDLE9BREw7SUFFRSxFQUFFLEVBQUMsT0FGTDtJQUdFLFNBQVMsRUFBQyx5QkFIWjtJQUlFLElBQUksRUFBQyxNQUpQO0lBS0UsTUFBTSxFQUFDLGNBTFQ7SUFNRSxhQUFhLEVBQUMsT0FOaEI7SUFPRSxjQUFjLEVBQUMsT0FQakI7SUFRRSxXQUFXLEVBQUM7SUE3QmhCLENBUEYsQ0FERjs7O0FDQWEsU0FBU2lmLElBQVQsQ0FBYzFELEtBQWQsRUFBbUQ7U0FFOUR2YjtJQUFLLEtBQUssRUFBQyw0QkFBWDtJQUF3QyxLQUFLLEVBQUMsSUFBOUM7SUFBbUQsTUFBTSxFQUFDLElBQTFEO0lBQStELE9BQU8sRUFBQztLQUFnQnViLEtBQXZGLEdBQ0F2YjtJQUFHLFNBQVMsRUFBQztLQUNYQTtJQUFHLFNBQVMsRUFBQyxvQkFBYjtJQUFrQyxJQUFJLEVBQUMsTUFBdkM7SUFBOEMsTUFBTSxFQUFDLGNBQXJEO0lBQW9FLFdBQVcsRUFBQztLQUM5RUE7SUFBUSxFQUFFLEVBQUMsSUFBWDtJQUFnQixFQUFFLEVBQUMsSUFBbkI7SUFBd0IsQ0FBQyxFQUFDLElBQTFCO0lBQStCLE1BQU0sRUFBQztJQUR4QyxFQUVFQTtJQUFRLEVBQUUsRUFBQyxJQUFYO0lBQWdCLEVBQUUsRUFBQyxJQUFuQjtJQUF3QixDQUFDLEVBQUMsSUFBMUI7SUFBK0IsSUFBSSxFQUFDO0lBRnRDLENBREYsRUFLRUE7SUFDRSxDQUFDLEVBQUMsa1VBREo7SUFFRSxTQUFTLEVBQUMsd0JBRlo7SUFHRSxJQUFJLEVBQUM7SUFSVCxDQURBLENBREY7OztBQ0ZhLFNBQVNrZixLQUFULENBQWUzRCxLQUFmLEVBQW9EO1NBRS9EdmI7SUFDRSxLQUFLLEVBQUMsNEJBRFI7SUFFRSxLQUFLLEVBQUMsUUFGUjtJQUdFLE1BQU0sRUFBQyxRQUhUO0lBSUUsT0FBTyxFQUFDLG1CQUpWO0lBS0UsYUFBYSxFQUFDO0tBQ1Z1YixLQU5OLEdBUUV2YjtJQUFHLFNBQVMsRUFBQztLQUNYQTtJQUFHLFNBQVMsRUFBQztLQUNYQTtJQUNFLENBQUMsRUFBQyx5QkFESjtJQUVFLFNBQVMsRUFBQyxzQkFGWjtJQUdFLElBQUksRUFBQyxNQUhQO0lBSUUsTUFBTSxFQUFDLGNBSlQ7SUFLRSxhQUFhLEVBQUMsT0FMaEI7SUFNRSxnQkFBZ0IsRUFBQyxJQU5uQjtJQU9FLFdBQVcsRUFBQztJQVJoQixFQVVFQTtJQUNFLENBQUMsRUFBQyxxQkFESjtJQUVFLFNBQVMsRUFBQyxrQkFGWjtJQUdFLElBQUksRUFBQyxNQUhQO0lBSUUsTUFBTSxFQUFDLGNBSlQ7SUFLRSxhQUFhLEVBQUMsT0FMaEI7SUFNRSxnQkFBZ0IsRUFBQyxJQU5uQjtJQU9FLFdBQVcsRUFBQztJQWpCaEIsQ0FERixDQVJGLENBREY7OztBQ0ZhLFNBQVNtZixRQUFULE9BQXNFO01BQWxEQyxLQUFrRCxRQUFsREEsS0FBa0Q7O1VBQzNFQSxLQUFSO1NBQ08sTUFBTDthQUNTLFlBQVA7O1NBQ0csT0FBTDthQUNTLFVBQVA7O1NBQ0csUUFBTDthQUNTLFFBQVA7OzthQUVPLGNBQVA7Ozs7QUNETixTQUFTbEYsVUFBVCxPQUVFO01BREV0VixLQUNGLFFBREVBLEtBQ0Y7TUFEU3hFLEtBQ1QsUUFEU0EsS0FDVDtNQURnQmlmLFFBQ2hCLFFBRGdCQSxRQUNoQjtNQUNNQyxlQUFlLEdBQUcxYSxLQUFLLEdBQUd4RSxLQUFLLENBQUN3RSxLQUFELENBQVIsR0FBa0IsYUFBL0M7TUFDTW1WLFNBQVMsR0FDYlYsZUFBZSxDQUFDalosS0FBRCxFQUFRa2YsZUFBZSxLQUFLLGFBQXBCLEdBQW9DbGYsS0FBSyxDQUFDeUMsVUFBMUMsR0FBdUR5YyxlQUEvRCxDQURqQjs7TUFHSUQsUUFBSixFQUFjO1FBQ05wRixTQUFTLEdBQ2JYLGNBQWMsQ0FBQyxHQUFELEVBQU9nRyxlQUFlLEtBQUssYUFBcEIsR0FBb0NsZixLQUFLLENBQUN5TyxLQUExQyxHQUFrRHlRLGVBQXpELENBRGhCO1FBRU1DLEVBQUUsR0FBR0MsU0FBUyxDQUFDQyxTQUFWLENBQW9CdFEsV0FBcEIsRUFBWDs7UUFDSW9RLEVBQUUsQ0FBQ3hOLE9BQUgsQ0FBVyxRQUFYLElBQXVCLENBQUMsQ0FBeEIsSUFBNkJ3TixFQUFFLENBQUN4TixPQUFILENBQVcsUUFBWCxNQUF5QixDQUFDLENBQTNELEVBQThEO2FBQ3JEL1EsVUFBUCxrRUFBK0JpWixTQUEvQixFQUFvREYsU0FBcEQ7OztXQUdLL1ksVUFBUCx3Q0FDc0JpWixTQUR0QixFQUVXRixTQUZYOzs7U0FNSy9ZLFVBQVAsd0NBQStCc2UsZUFBL0IsRUFBMER2RixTQUExRDs7O0FBZ0JGLElBQU0yRixNQUFNOztBQUFHdGUsZUFBTSxDQUFDdWUsTUFBVjs7O2dOQUVSO01BQUdDLEtBQUgsU0FBR0EsS0FBSDtNQUFVQyxNQUFWLFNBQVVBLE1BQVY7U0FBd0IsRUFBRUEsTUFBTSxJQUFJRCxLQUFaLElBQXFCLFVBQXJCLEdBQW1DQSxLQUFLLEdBQUcsT0FBSCxHQUFhLFFBQTdFO0NBRlEsRUFjUjFGLFVBZFEsRUFrQlIzWixXQWxCUSxFQW1CRztNQUFHUSxLQUFILFNBQUdBLEtBQUg7U0FBeUJBLEtBQUssR0FBRyxVQUFILEdBQWdCLE1BQTlDO0NBbkJILEVBcUJSRixnQkFyQlEsRUFzQkc7TUFBR0UsS0FBSCxTQUFHQSxLQUFIO1NBQXlCQSxLQUFLLEdBQUcsV0FBSCxHQUFpQixNQUEvQztDQXRCSCxFQXdCUjtNQUFHQyxHQUFILFNBQUdBLEdBQUg7U0FBYUEsR0FBRyxJQUFJLEVBQXBCO0NBeEJRLENBQVo7QUEyQkEsSUFBTThlLE1BQU07O0FBQUcxZSxlQUFNLENBQUNxWixNQUFWOzs7OEtBQ1JzRixTQUFRLENBQUMsU0FBRCxDQURBLEVBY1I1ZixXQWRRLENBQVo7QUF5QkEsSUFBTTZmLFVBQVU7O0FBQUc1ZSxlQUFNLENBQUNDLEdBQVY7Ozt5ZUFZTzhkLFFBWlAsRUFxQlY7TUFBR3ZhLEtBQUgsU0FBR0EsS0FBSDtTQUFnQkEsS0FBSyxvQkFBYUEsS0FBYixTQUF3QixFQUE3QztDQXJCVSxFQXdCWnpFLFdBeEJZLENBQWhCOztJQTBFcUI4Zjs7Ozs7Ozs7Ozs7Ozs7Ozs7O29GQVVYO01BQUVDLElBQUksRUFBRTs7O3lGQUVILFlBQU07WUFDWkMsUUFBTCxDQUFjO1FBQUVELElBQUksRUFBRSxDQUFDLE1BQUtFLEtBQUwsQ0FBV0Y7T0FBbEM7Ozs7Ozs7OzZCQUdPO3dCQUNxQyxLQUFLM0UsS0FEMUM7VUFDQ1MsUUFERCxlQUNDQSxRQUREO1VBQ1dvRCxLQURYLGVBQ1dBLEtBRFg7VUFDa0JpQixLQURsQixlQUNrQkEsS0FEbEI7VUFDNEJwRSxJQUQ1Qjs7VUFFQ2lFLElBRkQsR0FFVSxLQUFLRSxLQUZmLENBRUNGLElBRkQ7YUFJTGxnQiw2QkFBQyxNQUFEO1FBQ0UsSUFBSSxFQUFDO1NBQ0RpYyxJQUZOLEdBSUdvRSxLQUpILEVBS0VyZ0IsNkJBQUMsTUFBRDtRQUFRLFNBQVMsRUFBRWtnQixJQUFJLEdBQUcsUUFBSCxHQUFjLEVBQXJDO1FBQXlDLE9BQU8sRUFBRSxLQUFLSTtTQUNyRHRnQiwwQ0FERixFQUVFQSwwQ0FGRixFQUdFQSwwQ0FIRixDQUxGLEVBVUVBLDZCQUFDLFVBQUQ7UUFBWSxLQUFLLEVBQUVvZjtTQUNoQnBELFFBREgsQ0FWRixDQURGOzs7OztFQW5CZ0NQOztnQkFBZndFLHdCQUNHO0VBQ3BCcmIsS0FBSyxFQUFFLElBRGE7RUFFcEJ5YixLQUFLLEVBQUUsSUFGYTtFQUdwQlQsS0FBSyxFQUFFLEtBSGE7RUFJcEJDLE1BQU0sRUFBRSxLQUpZO0VBS3BCOWUsS0FBSyxFQUFFLEtBTGE7RUFNcEJzZSxRQUFRLEVBQUU7OztBQ3RLZCxTQUFTa0IsUUFBVCxDQUFrQm5nQixLQUFsQixFQUFvQ3dFLEtBQXBDLEVBQXVEO1NBQzdDLENBQUNBLEtBQUQsSUFBVUEsS0FBSyxLQUFLLE9BQXJCLEdBQWdDeEUsS0FBSyxDQUFDeUMsVUFBdEMsR0FBbUR6QyxLQUFLLENBQUN3RSxLQUFELENBQS9EOzs7QUFHRixTQUFTc1YsVUFBVCxPQUNxRTtNQURqRDlaLEtBQ2lELFFBRGpEQSxLQUNpRDtNQUQxQ3dFLEtBQzBDLFFBRDFDQSxLQUMwQztNQURuQzRiLFVBQ21DLFFBRG5DQSxVQUNtQztNQUM3RHJJLE1BQU0sR0FBR29JLFFBQVEsQ0FBQ25nQixLQUFELEVBQVF3RSxLQUFSLENBQXZCO01BQ00yVixXQUFXLEdBQUdsQixlQUFlLENBQUNqWixLQUFELEVBQVErWCxNQUFSLENBQW5DO01BRU1zSSxRQUFRLEdBQUdELFVBQVUsR0FBR0QsUUFBUSxDQUFDbmdCLEtBQUQsRUFBUW9nQixVQUFSLENBQVgsR0FBaUNoSSxNQUFNLENBQUMsSUFBRCxFQUFPTCxNQUFQLENBQWxFO1NBRU9uWCxVQUFQLGdIQUNXdVosV0FEWCxFQUVzQnBDLE1BRnRCLEVBS2FvQyxXQUxiLEVBTXdCa0csUUFOeEIsRUFVd0JqSSxNQUFNLENBQUMsSUFBRCxFQUFPaUksUUFBUCxDQVY5Qjs7O0FBZUYsSUFBTWpRLFNBQU87O0FBQUdwUCxlQUFNLENBQUNDLEdBQVY7OztvaUJBYVQ2WSxVQWJTLEVBeUNQLFVBQUFxQixLQUFLO1NBQUtBLEtBQUssQ0FBQ21GLEtBQU4sR0FBYzFmLFVBQWQsZ1NBeUJSLEVBekJHO0NBekNFLEVBcUVUO01BQUdBLEdBQUgsU0FBR0EsR0FBSDtTQUFhQSxHQUFHLElBQUksRUFBcEI7Q0FyRVMsQ0FBYjs7SUFxRnFCMmY7Ozs7Ozs7Ozs7Ozs7NkJBUVY7d0JBQ2dDLEtBQUtwRixLQURyQztVQUNDUyxRQURELGVBQ0NBLFFBREQ7VUFDVzRFLE9BRFgsZUFDV0EsT0FEWDtVQUN1QjNFLElBRHZCOzthQUdMamMsNkJBQUN3USxTQUFEO1FBQVMsS0FBSyxFQUFFb1EsT0FBTyxLQUFLO1NBQVUzRSxJQUF0QyxHQUNHRCxRQURILEVBRUc0RSxPQUFPLElBQUs1Z0I7UUFBRyxRQUFRLEVBQUUsQ0FBYjtRQUFnQixJQUFJLEVBQUMsTUFBckI7UUFBNEIsT0FBTyxFQUFFNGdCO2dCQUZwRCxDQURGOzs7OztFQVY2Qm5GOztnQkFBWmtGLHFCQUNHO0VBQ3BCM0UsUUFBUSxFQUFFLElBRFU7RUFFcEI0RSxPQUFPLEVBQUUsSUFGVztFQUdwQkMsT0FBTyxFQUFFLElBSFc7RUFJcEJqYyxLQUFLLEVBQUU7OztBQzdHWCxTQUFTc1YsVUFBVCxPQUE2RTtNQUF6RHRWLEtBQXlELFFBQXpEQSxLQUF5RDtNQUFsRHhFLEtBQWtELFFBQWxEQSxLQUFrRDtNQUN2RSxDQUFDd0UsS0FBTCxFQUFZLE9BQU8sRUFBUDtNQUVOdVQsTUFBTSxHQUFHL1gsS0FBSyxDQUFDd0UsS0FBRCxDQUFMLElBQWdCQSxLQUEvQjtNQUNNMlYsV0FBVyxHQUFHbEIsZUFBZSxDQUFDalosS0FBRCxFQUFRK1gsTUFBUixDQUFuQztTQUNPblgsVUFBUCx3Q0FBK0JtWCxNQUEvQixFQUFpRG9DLFdBQWpEOzs7QUFHRixTQUFTWCxTQUFULFFBQWtGO01BQS9EL1gsSUFBK0QsU0FBL0RBLElBQStEO01BQXpEekIsS0FBeUQsU0FBekRBLEtBQXlEO01BQzVFLENBQUN5QixJQUFELElBQVNBLElBQUksS0FBSyxPQUF0QixFQUErQixPQUFPLEVBQVA7O1VBRXZCQSxJQUFSO1NBQ08sUUFBTDthQUNTYixVQUFQOztTQUNHLE9BQUw7YUFDU0EsVUFBUDs7U0FDRyxNQUFMO2FBQ1NBLFVBQVAsOERBR0k4ZixJQUhKOzs7YUFTTyxFQUFQOzs7O0FBUU4sSUFBTUEsSUFBSTs7QUFBRzFmLGVBQU0sQ0FBQ0MsR0FBVjs7OzRPQUtOO01BQUdtQixNQUFILFNBQUdBLE1BQUg7U0FBZ0JBLE1BQU0sR0FBRyxxQkFBSCxHQUEyQixFQUFqRDtDQUxNLENBQVY7QUFpQ0EsSUFBTWdPLFNBQU87O0FBQUdwUCxlQUFNLENBQUNDLEdBQVY7Ozs2TUFLVDZZLFVBTFMsRUFNVE4sU0FOUyxFQWFGa0gsSUFiRSxDQUFiO0FBbUJBLEFBQWUsU0FBU0MsSUFBVCxRQUF5RTtNQUF6RC9FLFFBQXlELFNBQXpEQSxRQUF5RDtNQUEvQ3BYLEtBQStDLFNBQS9DQSxLQUErQztNQUF4Qy9DLElBQXdDLFNBQXhDQSxJQUF3QztNQUFsQ1csTUFBa0MsU0FBbENBLE1BQWtDO01BQTFCbWQsTUFBMEIsU0FBMUJBLE1BQTBCO01BQWYxRCxJQUFlOztTQUVwRmpjLDZCQUFDd1EsU0FBRDtJQUFTLEtBQUssRUFBRTVMLEtBQWhCO0lBQXVCLElBQUksRUFBRS9DO0tBQVVvYSxJQUF2QyxHQUNHMEQsTUFESCxFQUVFM2YsNkJBQUMsSUFBRDtJQUFNLE1BQU0sRUFBRXdDO0tBQ1p4Qyw2QkFBQyxTQUFELFFBQ0dnYyxRQURILENBREYsQ0FGRixDQURGOzs7O0FDM0dGO0VBU2F0TSxNQUFNLENBQUNzUixjQUFQLENBQXNCNWQsT0FBdEIsRUFBOEIsWUFBOUIsRUFBMkM7SUFBQzNCLEtBQUssRUFBQyxDQUFDO0dBQW5EO01BQ1QrUSxDQUFDLEdBQUMsZUFBYSxPQUFPeU8sTUFBcEIsSUFBNEJBLE1BQU0sQ0FBQ0MsR0FBekM7TUFBNkN6TyxDQUFDLEdBQUNELENBQUMsR0FBQ3lPLE1BQU0sQ0FBQ0MsR0FBUCxDQUFXLGVBQVgsQ0FBRCxHQUE2QixLQUE3RTtNQUFtRnZPLENBQUMsR0FBQ0gsQ0FBQyxHQUFDeU8sTUFBTSxDQUFDQyxHQUFQLENBQVcsY0FBWCxDQUFELEdBQTRCLEtBQWxIO01BQXdINVAsQ0FBQyxHQUFDa0IsQ0FBQyxHQUFDeU8sTUFBTSxDQUFDQyxHQUFQLENBQVcsZ0JBQVgsQ0FBRCxHQUE4QixLQUF6SjtNQUErSjNkLENBQUMsR0FBQ2lQLENBQUMsR0FBQ3lPLE1BQU0sQ0FBQ0MsR0FBUCxDQUFXLG1CQUFYLENBQUQsR0FBaUMsS0FBbk07TUFBeU05SCxDQUFDLEdBQUM1RyxDQUFDLEdBQUN5TyxNQUFNLENBQUNDLEdBQVAsQ0FBVyxnQkFBWCxDQUFELEdBQThCLEtBQTFPO01BQWdQQyxDQUFDLEdBQUMzTyxDQUFDLEdBQUN5TyxNQUFNLENBQUNDLEdBQVAsQ0FBVyxnQkFBWCxDQUFELEdBQThCLEtBQWpSO01BQXVSRSxDQUFDLEdBQUM1TyxDQUFDLEdBQUN5TyxNQUFNLENBQUNDLEdBQVAsQ0FBVyxlQUFYLENBQUQsR0FBNkIsS0FBdlQ7TUFBNlRHLENBQUMsR0FBQzdPLENBQUMsR0FBQ3lPLE1BQU0sQ0FBQ0MsR0FBUCxDQUFXLGtCQUFYLENBQUQsR0FBZ0MsS0FBaFc7TUFBc1dJLENBQUMsR0FBQzlPLENBQUMsR0FBQ3lPLE1BQU0sQ0FBQ0MsR0FBUCxDQUFXLHVCQUFYLENBQUQsR0FBcUMsS0FBOVk7TUFBb1pLLENBQUMsR0FBQy9PLENBQUMsR0FBQ3lPLE1BQU0sQ0FBQ0MsR0FBUCxDQUFXLG1CQUFYLENBQUQsR0FBaUMsS0FBeGI7TUFBOGJqUCxDQUFDLEdBQUNPLENBQUMsR0FBQ3lPLE1BQU0sQ0FBQ0MsR0FBUCxDQUFXLGdCQUFYLENBQUQsR0FBOEIsS0FBL2Q7TUFBcWVNLENBQUMsR0FBQ2hQLENBQUMsR0FBQ3lPLE1BQU0sQ0FBQ0MsR0FBUCxDQUFXLFlBQVgsQ0FBRCxHQUN4ZSxLQURBO01BQ00vSCxDQUFDLEdBQUMzRyxDQUFDLEdBQUN5TyxNQUFNLENBQUNDLEdBQVAsQ0FBVyxZQUFYLENBQUQsR0FBMEIsS0FEbkM7O1dBQ2tETyxDQUFULENBQVdoUSxDQUFYLEVBQWE7UUFBSSxhQUFXLE9BQU9BLENBQWxCLElBQXFCLFNBQU9BLENBQS9CLEVBQWlDO1VBQUtpUSxDQUFDLEdBQUNqUSxDQUFDLENBQUNrUSxRQUFSOztjQUF3QkQsQ0FBUDthQUFlalAsQ0FBTDtrQkFBY2hCLENBQUMsR0FBQ0EsQ0FBQyxDQUFDMEwsSUFBSixFQUFTMUwsQ0FBaEI7aUJBQXdCNFAsQ0FBTDtpQkFBWUMsQ0FBTDtpQkFBWWhRLENBQUw7aUJBQVk4SCxDQUFMO2lCQUFZN1YsQ0FBTDtpQkFBWTBPLENBQUw7cUJBQWNSLENBQVA7OztzQkFBd0JBLENBQUMsR0FBQ0EsQ0FBQyxJQUFFQSxDQUFDLENBQUNrUSxRQUFQLEVBQWdCbFEsQ0FBdkI7cUJBQStCMlAsQ0FBTDtxQkFBWUcsQ0FBTDtxQkFBWUosQ0FBTDt5QkFBYzFQLENBQVA7Ozt5QkFBd0JpUSxDQUFQOzs7OzthQUFldkksQ0FBTDthQUFZcUksQ0FBTDthQUFZN08sQ0FBTDtpQkFBYytPLENBQVA7Ozs7O1dBQW9CRSxDQUFULENBQVduUSxDQUFYLEVBQWE7V0FBUWdRLENBQUMsQ0FBQ2hRLENBQUQsQ0FBRCxLQUFPNlAsQ0FBZDs7O0VBQWdCbGUsY0FBQSxHQUFlcWUsQ0FBZjtFQUFpQnJlLGlCQUFBLEdBQWtCaWUsQ0FBbEI7RUFBb0JqZSxzQkFBQSxHQUF1QmtlLENBQXZCO0VBQXlCbGUsdUJBQUEsR0FBd0JnZSxDQUF4QjtFQUEwQmhlLHVCQUFBLEdBQXdCK2QsQ0FBeEI7RUFBMEIvZCxlQUFBLEdBQWdCcVAsQ0FBaEI7RUFBa0JyUCxrQkFBQSxHQUFtQm1lLENBQW5CO0VBQ3JkbmUsZ0JBQUEsR0FBaUJrTyxDQUFqQjtFQUFtQmxPLFlBQUEsR0FBYStWLENBQWI7RUFBZS9WLFlBQUEsR0FBYW9lLENBQWI7RUFBZXBlLGNBQUEsR0FBZXVQLENBQWY7RUFBaUJ2UCxnQkFBQSxHQUFpQmdXLENBQWpCO0VBQW1CaFcsa0JBQUEsR0FBbUJHLENBQW5CO0VBQXFCSCxnQkFBQSxHQUFpQjZPLENBQWpCOztFQUFtQjdPLDBCQUFBLEdBQTJCLFVBQVNxTyxDQUFULEVBQVc7V0FBTyxhQUFXLE9BQU9BLENBQWxCLElBQXFCLGVBQWEsT0FBT0EsQ0FBekMsSUFBNENBLENBQUMsS0FBR0gsQ0FBaEQsSUFBbURHLENBQUMsS0FBRzZQLENBQXZELElBQTBEN1AsQ0FBQyxLQUFHMkgsQ0FBOUQsSUFBaUUzSCxDQUFDLEtBQUdsTyxDQUFyRSxJQUF3RWtPLENBQUMsS0FBR1EsQ0FBNUUsSUFBK0UsYUFBVyxPQUFPUixDQUFsQixJQUFxQixTQUFPQSxDQUE1QixLQUFnQ0EsQ0FBQyxDQUFDa1EsUUFBRixLQUFheEksQ0FBYixJQUFnQjFILENBQUMsQ0FBQ2tRLFFBQUYsS0FBYUgsQ0FBN0IsSUFBZ0MvUCxDQUFDLENBQUNrUSxRQUFGLEtBQWFSLENBQTdDLElBQWdEMVAsQ0FBQyxDQUFDa1EsUUFBRixLQUFhUCxDQUE3RCxJQUFnRTNQLENBQUMsQ0FBQ2tRLFFBQUYsS0FBYUosQ0FBN0csQ0FBckY7R0FBdkM7O0VBQTZPbmUsbUJBQUEsR0FBb0IsVUFBU3FPLENBQVQsRUFBVztXQUFRbVEsQ0FBQyxDQUFDblEsQ0FBRCxDQUFELElBQU1nUSxDQUFDLENBQUNoUSxDQUFELENBQUQsS0FBTzRQLENBQXBCO0dBQWhDOztFQUF1RGplLHdCQUFBLEdBQXlCd2UsQ0FBekI7O0VBQTJCeGUseUJBQUEsR0FBMEIsVUFBU3FPLENBQVQsRUFBVztXQUFRZ1EsQ0FBQyxDQUFDaFEsQ0FBRCxDQUFELEtBQU8yUCxDQUFkO0dBQXRDOztFQUM1YmhlLHlCQUFBLEdBQTBCLFVBQVNxTyxDQUFULEVBQVc7V0FBUWdRLENBQUMsQ0FBQ2hRLENBQUQsQ0FBRCxLQUFPMFAsQ0FBZDtHQUF0Qzs7RUFBdUQvZCxpQkFBQSxHQUFrQixVQUFTcU8sQ0FBVCxFQUFXO1dBQU8sYUFBVyxPQUFPQSxDQUFsQixJQUFxQixTQUFPQSxDQUE1QixJQUErQkEsQ0FBQyxDQUFDa1EsUUFBRixLQUFhbFAsQ0FBbEQ7R0FBOUI7O0VBQW1GclAsb0JBQUEsR0FBcUIsVUFBU3FPLENBQVQsRUFBVztXQUFRZ1EsQ0FBQyxDQUFDaFEsQ0FBRCxDQUFELEtBQU84UCxDQUFkO0dBQWpDOztFQUFrRG5lLGtCQUFBLEdBQW1CLFVBQVNxTyxDQUFULEVBQVc7V0FBUWdRLENBQUMsQ0FBQ2hRLENBQUQsQ0FBRCxLQUFPSCxDQUFkO0dBQS9COztFQUFnRGxPLGNBQUEsR0FBZSxVQUFTcU8sQ0FBVCxFQUFXO1dBQVFnUSxDQUFDLENBQUNoUSxDQUFELENBQUQsS0FBTzBILENBQWQ7R0FBM0I7O0VBQTRDL1YsY0FBQSxHQUFlLFVBQVNxTyxDQUFULEVBQVc7V0FBUWdRLENBQUMsQ0FBQ2hRLENBQUQsQ0FBRCxLQUFPK1AsQ0FBZDtHQUEzQjs7RUFBNENwZSxnQkFBQSxHQUFpQixVQUFTcU8sQ0FBVCxFQUFXO1dBQVFnUSxDQUFDLENBQUNoUSxDQUFELENBQUQsS0FBT2tCLENBQWQ7R0FBN0I7O0VBQThDdlAsa0JBQUEsR0FBbUIsVUFBU3FPLENBQVQsRUFBVztXQUFRZ1EsQ0FBQyxDQUFDaFEsQ0FBRCxDQUFELEtBQU8ySCxDQUFkO0dBQS9COztFQUFnRGhXLG9CQUFBLEdBQXFCLFVBQVNxTyxDQUFULEVBQVc7V0FBUWdRLENBQUMsQ0FBQ2hRLENBQUQsQ0FBRCxLQUFPbE8sQ0FBZDtHQUFqQzs7RUFDbGFILGtCQUFBLEdBQW1CLFVBQVNxTyxDQUFULEVBQVc7V0FBUWdRLENBQUMsQ0FBQ2hRLENBQUQsQ0FBRCxLQUFPUSxDQUFkO0dBQS9COzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkQTtNQWFJZSxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsUUFBWixLQUF5QixZQUE3QixFQUEyQztLQUN4QyxZQUFXO0FBQ2Q7TUFFQXhELE1BQU0sQ0FBQ3NSLGNBQVAsQ0FBc0I1ZCxPQUF0QixFQUErQixZQUEvQixFQUE2QztRQUFFM0IsS0FBSyxFQUFFO09BQXRELEVBSGM7OztVQU9Wb2dCLFNBQVMsR0FBRyxPQUFPWixNQUFQLEtBQWtCLFVBQWxCLElBQWdDQSxNQUFNLENBQUNDLEdBQXZEO1VBRUlZLGtCQUFrQixHQUFHRCxTQUFTLEdBQUdaLE1BQU0sQ0FBQ0MsR0FBUCxDQUFXLGVBQVgsQ0FBSCxHQUFpQyxNQUFuRTtVQUNJYSxpQkFBaUIsR0FBR0YsU0FBUyxHQUFHWixNQUFNLENBQUNDLEdBQVAsQ0FBVyxjQUFYLENBQUgsR0FBZ0MsTUFBakU7VUFDSWMsbUJBQW1CLEdBQUdILFNBQVMsR0FBR1osTUFBTSxDQUFDQyxHQUFQLENBQVcsZ0JBQVgsQ0FBSCxHQUFrQyxNQUFyRTtVQUNJZSxzQkFBc0IsR0FBR0osU0FBUyxHQUFHWixNQUFNLENBQUNDLEdBQVAsQ0FBVyxtQkFBWCxDQUFILEdBQXFDLE1BQTNFO1VBQ0lnQixtQkFBbUIsR0FBR0wsU0FBUyxHQUFHWixNQUFNLENBQUNDLEdBQVAsQ0FBVyxnQkFBWCxDQUFILEdBQWtDLE1BQXJFO1VBQ0lpQixtQkFBbUIsR0FBR04sU0FBUyxHQUFHWixNQUFNLENBQUNDLEdBQVAsQ0FBVyxnQkFBWCxDQUFILEdBQWtDLE1BQXJFO1VBQ0lrQixrQkFBa0IsR0FBR1AsU0FBUyxHQUFHWixNQUFNLENBQUNDLEdBQVAsQ0FBVyxlQUFYLENBQUgsR0FBaUMsTUFBbkU7VUFDSW1CLHFCQUFxQixHQUFHUixTQUFTLEdBQUdaLE1BQU0sQ0FBQ0MsR0FBUCxDQUFXLGtCQUFYLENBQUgsR0FBb0MsTUFBekU7VUFDSW9CLDBCQUEwQixHQUFHVCxTQUFTLEdBQUdaLE1BQU0sQ0FBQ0MsR0FBUCxDQUFXLHVCQUFYLENBQUgsR0FBeUMsTUFBbkY7VUFDSXFCLHNCQUFzQixHQUFHVixTQUFTLEdBQUdaLE1BQU0sQ0FBQ0MsR0FBUCxDQUFXLG1CQUFYLENBQUgsR0FBcUMsTUFBM0U7VUFDSXNCLG1CQUFtQixHQUFHWCxTQUFTLEdBQUdaLE1BQU0sQ0FBQ0MsR0FBUCxDQUFXLGdCQUFYLENBQUgsR0FBa0MsTUFBckU7VUFDSXVCLGVBQWUsR0FBR1osU0FBUyxHQUFHWixNQUFNLENBQUNDLEdBQVAsQ0FBVyxZQUFYLENBQUgsR0FBOEIsTUFBN0Q7VUFDSXdCLGVBQWUsR0FBR2IsU0FBUyxHQUFHWixNQUFNLENBQUNDLEdBQVAsQ0FBVyxZQUFYLENBQUgsR0FBOEIsTUFBN0Q7O2VBRVN5QixrQkFBVCxDQUE0QnhGLElBQTVCLEVBQWtDO2VBQ3pCLE9BQU9BLElBQVAsS0FBZ0IsUUFBaEIsSUFBNEIsT0FBT0EsSUFBUCxLQUFnQixVQUE1QztRQUVQQSxJQUFJLEtBQUs2RSxtQkFGRixJQUV5QjdFLElBQUksS0FBS21GLDBCQUZsQyxJQUVnRW5GLElBQUksS0FBSytFLG1CQUZ6RSxJQUVnRy9FLElBQUksS0FBSzhFLHNCQUZ6RyxJQUVtSTlFLElBQUksS0FBS3FGLG1CQUY1SSxJQUVtSyxPQUFPckYsSUFBUCxLQUFnQixRQUFoQixJQUE0QkEsSUFBSSxLQUFLLElBQXJDLEtBQThDQSxJQUFJLENBQUN3RSxRQUFMLEtBQWtCZSxlQUFsQixJQUFxQ3ZGLElBQUksQ0FBQ3dFLFFBQUwsS0FBa0JjLGVBQXZELElBQTBFdEYsSUFBSSxDQUFDd0UsUUFBTCxLQUFrQlEsbUJBQTVGLElBQW1IaEYsSUFBSSxDQUFDd0UsUUFBTCxLQUFrQlMsa0JBQXJJLElBQTJKakYsSUFBSSxDQUFDd0UsUUFBTCxLQUFrQlksc0JBQTNOLENBRjFLOzs7Ozs7Ozs7Ozs7Ozs7OztVQW1CRUssa0JBQWtCLEdBQUcsWUFBWSxFQUFyQzs7O1lBR01DLFlBQVksR0FBRyxVQUFVeFEsTUFBVixFQUFrQjtlQUM5QixJQUFJQyxJQUFJLEdBQUdyTyxTQUFTLENBQUNULE1BQXJCLEVBQTZCZ08sSUFBSSxHQUFHM04sS0FBSyxDQUFDeU8sSUFBSSxHQUFHLENBQVAsR0FBV0EsSUFBSSxHQUFHLENBQWxCLEdBQXNCLENBQXZCLENBQXpDLEVBQW9FQyxJQUFJLEdBQUcsQ0FBaEYsRUFBbUZBLElBQUksR0FBR0QsSUFBMUYsRUFBZ0dDLElBQUksRUFBcEcsRUFBd0c7WUFDdEdmLElBQUksQ0FBQ2UsSUFBSSxHQUFHLENBQVIsQ0FBSixHQUFpQnRPLFNBQVMsQ0FBQ3NPLElBQUQsQ0FBMUI7OztjQUdFdVEsUUFBUSxHQUFHLENBQWY7Y0FDSUMsT0FBTyxHQUFHLGNBQWMxUSxNQUFNLENBQUNPLE9BQVAsQ0FBZSxLQUFmLEVBQXNCLFlBQVk7bUJBQ3JEcEIsSUFBSSxDQUFDc1IsUUFBUSxFQUFULENBQVg7V0FEMEIsQ0FBNUI7O2NBR0ksT0FBT0UsT0FBUCxLQUFtQixXQUF2QixFQUFvQztZQUNsQ0EsT0FBTyxDQUFDQyxJQUFSLENBQWFGLE9BQWI7OztjQUVFOzs7O2tCQUlJLElBQUkxUCxLQUFKLENBQVUwUCxPQUFWLENBQU47V0FKRixDQUtFLE9BQU9HLENBQVAsRUFBVTtTQWpCZDs7UUFvQkFOLGtCQUFrQixHQUFHLFVBQVVPLFNBQVYsRUFBcUI5USxNQUFyQixFQUE2QjtjQUM1Q0EsTUFBTSxLQUFLbkMsU0FBZixFQUEwQjtrQkFDbEIsSUFBSW1ELEtBQUosQ0FBVSx5RUFBeUUsa0JBQW5GLENBQU47OztjQUVFLENBQUM4UCxTQUFMLEVBQWdCO2lCQUNULElBQUloUSxLQUFLLEdBQUdsUCxTQUFTLENBQUNULE1BQXRCLEVBQThCZ08sSUFBSSxHQUFHM04sS0FBSyxDQUFDc1AsS0FBSyxHQUFHLENBQVIsR0FBWUEsS0FBSyxHQUFHLENBQXBCLEdBQXdCLENBQXpCLENBQTFDLEVBQXVFQyxLQUFLLEdBQUcsQ0FBcEYsRUFBdUZBLEtBQUssR0FBR0QsS0FBL0YsRUFBc0dDLEtBQUssRUFBM0csRUFBK0c7Y0FDN0c1QixJQUFJLENBQUM0QixLQUFLLEdBQUcsQ0FBVCxDQUFKLEdBQWtCblAsU0FBUyxDQUFDbVAsS0FBRCxDQUEzQjs7O1lBR0Z5UCxZQUFZLENBQUMzZSxLQUFiLENBQW1CZ00sU0FBbkIsRUFBOEIsQ0FBQ21DLE1BQUQsRUFBU3pPLE1BQVQsQ0FBZ0I0TixJQUFoQixDQUE5Qjs7U0FUSjs7VUFjRTRSLG9CQUFvQixHQUFHUixrQkFBM0I7O2VBRVNTLE1BQVQsQ0FBZ0JDLE1BQWhCLEVBQXdCO1lBQ2xCLE9BQU9BLE1BQVAsS0FBa0IsUUFBbEIsSUFBOEJBLE1BQU0sS0FBSyxJQUE3QyxFQUFtRDtjQUM3QzNCLFFBQVEsR0FBRzJCLE1BQU0sQ0FBQzNCLFFBQXRCOztrQkFDUUEsUUFBUjtpQkFDT0csa0JBQUw7a0JBQ00zRSxJQUFJLEdBQUdtRyxNQUFNLENBQUNuRyxJQUFsQjs7c0JBRVFBLElBQVI7cUJBQ09rRixxQkFBTDtxQkFDS0MsMEJBQUw7cUJBQ0tOLG1CQUFMO3FCQUNLRSxtQkFBTDtxQkFDS0Qsc0JBQUw7cUJBQ0tPLG1CQUFMO3lCQUNTckYsSUFBUDs7O3NCQUVJb0csWUFBWSxHQUFHcEcsSUFBSSxJQUFJQSxJQUFJLENBQUN3RSxRQUFoQzs7MEJBRVE0QixZQUFSO3lCQUNPbkIsa0JBQUw7eUJBQ0tHLHNCQUFMO3lCQUNLSixtQkFBTDs2QkFDU29CLFlBQVA7Ozs2QkFFTzVCLFFBQVA7Ozs7O2lCQUdMZSxlQUFMO2lCQUNLRCxlQUFMO2lCQUNLVixpQkFBTDtxQkFDU0osUUFBUDs7OztlQUlDelIsU0FBUDtPQXBIWTs7O1VBd0hWc1QsU0FBUyxHQUFHbkIscUJBQWhCO1VBQ0lvQixjQUFjLEdBQUduQiwwQkFBckI7VUFDSW9CLGVBQWUsR0FBR3RCLGtCQUF0QjtVQUNJdUIsZUFBZSxHQUFHeEIsbUJBQXRCO1VBQ0l5QixPQUFPLEdBQUc5QixrQkFBZDtVQUNJK0IsVUFBVSxHQUFHdEIsc0JBQWpCO1VBQ0l1QixRQUFRLEdBQUc5QixtQkFBZjtVQUNJK0IsSUFBSSxHQUFHckIsZUFBWDtVQUNJc0IsSUFBSSxHQUFHdkIsZUFBWDtVQUNJd0IsTUFBTSxHQUFHbEMsaUJBQWI7VUFDSW1DLFFBQVEsR0FBR2hDLG1CQUFmO1VBQ0lpQyxVQUFVLEdBQUdsQyxzQkFBakI7VUFDSW1DLFFBQVEsR0FBRzVCLG1CQUFmO1VBRUk2QixtQ0FBbUMsR0FBRyxLQUExQyxDQXRJYzs7ZUF5SUxDLFdBQVQsQ0FBcUJoQixNQUFyQixFQUE2Qjs7Y0FFckIsQ0FBQ2UsbUNBQUwsRUFBMEM7WUFDeENBLG1DQUFtQyxHQUFHLElBQXRDO1lBQ0FqQixvQkFBb0IsQ0FBQyxLQUFELEVBQVEsMERBQTBELDREQUExRCxHQUF5SCxnRUFBakksQ0FBcEI7OztlQUdHbUIsZ0JBQWdCLENBQUNqQixNQUFELENBQWhCLElBQTRCRCxNQUFNLENBQUNDLE1BQUQsQ0FBTixLQUFtQmpCLHFCQUF0RDs7O2VBRU9rQyxnQkFBVCxDQUEwQmpCLE1BQTFCLEVBQWtDO2VBQ3pCRCxNQUFNLENBQUNDLE1BQUQsQ0FBTixLQUFtQmhCLDBCQUExQjs7O2VBRU9rQyxpQkFBVCxDQUEyQmxCLE1BQTNCLEVBQW1DO2VBQzFCRCxNQUFNLENBQUNDLE1BQUQsQ0FBTixLQUFtQmxCLGtCQUExQjs7O2VBRU9xQyxpQkFBVCxDQUEyQm5CLE1BQTNCLEVBQW1DO2VBQzFCRCxNQUFNLENBQUNDLE1BQUQsQ0FBTixLQUFtQm5CLG1CQUExQjs7O2VBRU91QyxTQUFULENBQW1CcEIsTUFBbkIsRUFBMkI7ZUFDbEIsT0FBT0EsTUFBUCxLQUFrQixRQUFsQixJQUE4QkEsTUFBTSxLQUFLLElBQXpDLElBQWlEQSxNQUFNLENBQUMzQixRQUFQLEtBQW9CRyxrQkFBNUU7OztlQUVPNkMsWUFBVCxDQUFzQnJCLE1BQXRCLEVBQThCO2VBQ3JCRCxNQUFNLENBQUNDLE1BQUQsQ0FBTixLQUFtQmYsc0JBQTFCOzs7ZUFFT3FDLFVBQVQsQ0FBb0J0QixNQUFwQixFQUE0QjtlQUNuQkQsTUFBTSxDQUFDQyxNQUFELENBQU4sS0FBbUJ0QixtQkFBMUI7OztlQUVPNkMsTUFBVCxDQUFnQnZCLE1BQWhCLEVBQXdCO2VBQ2ZELE1BQU0sQ0FBQ0MsTUFBRCxDQUFOLEtBQW1CWixlQUExQjs7O2VBRU9vQyxNQUFULENBQWdCeEIsTUFBaEIsRUFBd0I7ZUFDZkQsTUFBTSxDQUFDQyxNQUFELENBQU4sS0FBbUJiLGVBQTFCOzs7ZUFFT3NDLFFBQVQsQ0FBa0J6QixNQUFsQixFQUEwQjtlQUNqQkQsTUFBTSxDQUFDQyxNQUFELENBQU4sS0FBbUJ2QixpQkFBMUI7OztlQUVPaUQsVUFBVCxDQUFvQjFCLE1BQXBCLEVBQTRCO2VBQ25CRCxNQUFNLENBQUNDLE1BQUQsQ0FBTixLQUFtQnBCLG1CQUExQjs7O2VBRU8rQyxZQUFULENBQXNCM0IsTUFBdEIsRUFBOEI7ZUFDckJELE1BQU0sQ0FBQ0MsTUFBRCxDQUFOLEtBQW1CckIsc0JBQTFCOzs7ZUFFT2lELFVBQVQsQ0FBb0I1QixNQUFwQixFQUE0QjtlQUNuQkQsTUFBTSxDQUFDQyxNQUFELENBQU4sS0FBbUJkLG1CQUExQjs7O01BR0ZwZixjQUFBLEdBQWlCaWdCLE1BQWpCO01BQ0FqZ0IsaUJBQUEsR0FBb0JvZ0IsU0FBcEI7TUFDQXBnQixzQkFBQSxHQUF5QnFnQixjQUF6QjtNQUNBcmdCLHVCQUFBLEdBQTBCc2dCLGVBQTFCO01BQ0F0Z0IsdUJBQUEsR0FBMEJ1Z0IsZUFBMUI7TUFDQXZnQixlQUFBLEdBQWtCd2dCLE9BQWxCO01BQ0F4Z0Isa0JBQUEsR0FBcUJ5Z0IsVUFBckI7TUFDQXpnQixnQkFBQSxHQUFtQjBnQixRQUFuQjtNQUNBMWdCLFlBQUEsR0FBZTJnQixJQUFmO01BQ0EzZ0IsWUFBQSxHQUFlNGdCLElBQWY7TUFDQTVnQixjQUFBLEdBQWlCNmdCLE1BQWpCO01BQ0E3Z0IsZ0JBQUEsR0FBbUI4Z0IsUUFBbkI7TUFDQTlnQixrQkFBQSxHQUFxQitnQixVQUFyQjtNQUNBL2dCLGdCQUFBLEdBQW1CZ2hCLFFBQW5CO01BQ0FoaEIsMEJBQUEsR0FBNkJ1ZixrQkFBN0I7TUFDQXZmLG1CQUFBLEdBQXNCa2hCLFdBQXRCO01BQ0FsaEIsd0JBQUEsR0FBMkJtaEIsZ0JBQTNCO01BQ0FuaEIseUJBQUEsR0FBNEJvaEIsaUJBQTVCO01BQ0FwaEIseUJBQUEsR0FBNEJxaEIsaUJBQTVCO01BQ0FyaEIsaUJBQUEsR0FBb0JzaEIsU0FBcEI7TUFDQXRoQixvQkFBQSxHQUF1QnVoQixZQUF2QjtNQUNBdmhCLGtCQUFBLEdBQXFCd2hCLFVBQXJCO01BQ0F4aEIsY0FBQSxHQUFpQnloQixNQUFqQjtNQUNBemhCLGNBQUEsR0FBaUIwaEIsTUFBakI7TUFDQTFoQixnQkFBQSxHQUFtQjJoQixRQUFuQjtNQUNBM2hCLGtCQUFBLEdBQXFCNGhCLFVBQXJCO01BQ0E1aEIsb0JBQUEsR0FBdUI2aEIsWUFBdkI7TUFDQTdoQixrQkFBQSxHQUFxQjhoQixVQUFyQjtLQWxORTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RGO01BRUlsUyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsUUFBWixLQUF5QixZQUE3QixFQUEyQztJQUN6Qy9PLGNBQUEsR0FBaUJxUCxzQkFBakI7R0FERixNQUVPO0lBQ0xyUCxjQUFBLEdBQWlCdVAsbUJBQWpCOzs7O0FDTEY7Ozs7O0FBTUE7O0FBRUEsSUFBSXlSLHFCQUFxQixHQUFHelYsTUFBTSxDQUFDeVYscUJBQW5DO0FBQ0EsSUFBSTVNLGNBQWMsR0FBRzdJLE1BQU0sQ0FBQzVMLFNBQVAsQ0FBaUJ5VSxjQUF0QztBQUNBLElBQUk2TSxnQkFBZ0IsR0FBRzFWLE1BQU0sQ0FBQzVMLFNBQVAsQ0FBaUJ1aEIsb0JBQXhDOztBQUVBLFNBQVNDLFFBQVQsQ0FBa0JDLEdBQWxCLEVBQXVCO01BQ2xCQSxHQUFHLEtBQUssSUFBUixJQUFnQkEsR0FBRyxLQUFLclYsU0FBNUIsRUFBdUM7VUFDaEMsSUFBSUUsU0FBSixDQUFjLHVEQUFkLENBQU47OztTQUdNVixNQUFNLENBQUM2VixHQUFELENBQWI7OztBQUdELFNBQVNDLGVBQVQsR0FBMkI7TUFDdEI7UUFDQyxDQUFDOVYsTUFBTSxDQUFDd0ksTUFBWixFQUFvQjthQUNaLEtBQVA7S0FGRTs7OztRQVFDdU4sS0FBSyxHQUFHLElBQUlDLE1BQUosQ0FBVyxLQUFYLENBQVosQ0FSRzs7SUFTSEQsS0FBSyxDQUFDLENBQUQsQ0FBTCxHQUFXLElBQVg7O1FBQ0kvVixNQUFNLENBQUNpVyxtQkFBUCxDQUEyQkYsS0FBM0IsRUFBa0MsQ0FBbEMsTUFBeUMsR0FBN0MsRUFBa0Q7YUFDMUMsS0FBUDtLQVhFOzs7UUFlQ0csS0FBSyxHQUFHLEVBQVo7O1NBQ0ssSUFBSXhOLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsRUFBcEIsRUFBd0JBLENBQUMsRUFBekIsRUFBNkI7TUFDNUJ3TixLQUFLLENBQUMsTUFBTUYsTUFBTSxDQUFDRyxZQUFQLENBQW9Cek4sQ0FBcEIsQ0FBUCxDQUFMLEdBQXNDQSxDQUF0Qzs7O1FBRUcwTixNQUFNLEdBQUdwVyxNQUFNLENBQUNpVyxtQkFBUCxDQUEyQkMsS0FBM0IsRUFBa0M1TSxHQUFsQyxDQUFzQyxVQUFVdUksQ0FBVixFQUFhO2FBQ3hEcUUsS0FBSyxDQUFDckUsQ0FBRCxDQUFaO0tBRFksQ0FBYjs7UUFHSXVFLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZLEVBQVosTUFBb0IsWUFBeEIsRUFBc0M7YUFDOUIsS0FBUDtLQXZCRTs7O1FBMkJDQyxLQUFLLEdBQUcsRUFBWjsyQkFDdUJDLEtBQXZCLENBQTZCLEVBQTdCLEVBQWlDdlQsT0FBakMsQ0FBeUMsVUFBVXdULE1BQVYsRUFBa0I7TUFDMURGLEtBQUssQ0FBQ0UsTUFBRCxDQUFMLEdBQWdCQSxNQUFoQjtLQUREOztRQUdJeFcsTUFBTSxDQUFDcUosSUFBUCxDQUFZckosTUFBTSxDQUFDd0ksTUFBUCxDQUFjLEVBQWQsRUFBa0I4TixLQUFsQixDQUFaLEVBQXNDRCxJQUF0QyxDQUEyQyxFQUEzQyxNQUNGLHNCQURGLEVBQzBCO2FBQ2xCLEtBQVA7OztXQUdNLElBQVA7R0FwQ0QsQ0FxQ0UsT0FBT0ksR0FBUCxFQUFZOztXQUVOLEtBQVA7Ozs7QUFJRixnQkFBYyxHQUFHWCxlQUFlLEtBQUs5VixNQUFNLENBQUN3SSxNQUFaLEdBQXFCLFVBQVVDLE1BQVYsRUFBa0JFLE1BQWxCLEVBQTBCO01BQzFFK04sSUFBSjtNQUNJQyxFQUFFLEdBQUdmLFFBQVEsQ0FBQ25OLE1BQUQsQ0FBakI7TUFDSW1PLE9BQUo7O09BRUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR3RpQixTQUFTLENBQUNULE1BQTlCLEVBQXNDK2lCLENBQUMsRUFBdkMsRUFBMkM7SUFDMUNILElBQUksR0FBRzFXLE1BQU0sQ0FBQ3pMLFNBQVMsQ0FBQ3NpQixDQUFELENBQVYsQ0FBYjs7U0FFSyxJQUFJak8sR0FBVCxJQUFnQjhOLElBQWhCLEVBQXNCO1VBQ2pCN04sY0FBYyxDQUFDdlUsSUFBZixDQUFvQm9pQixJQUFwQixFQUEwQjlOLEdBQTFCLENBQUosRUFBb0M7UUFDbkMrTixFQUFFLENBQUMvTixHQUFELENBQUYsR0FBVThOLElBQUksQ0FBQzlOLEdBQUQsQ0FBZDs7OztRQUlFNk0scUJBQUosRUFBMkI7TUFDMUJtQixPQUFPLEdBQUduQixxQkFBcUIsQ0FBQ2lCLElBQUQsQ0FBL0I7O1dBQ0ssSUFBSWhPLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdrTyxPQUFPLENBQUM5aUIsTUFBNUIsRUFBb0M0VSxDQUFDLEVBQXJDLEVBQXlDO1lBQ3BDZ04sZ0JBQWdCLENBQUNwaEIsSUFBakIsQ0FBc0JvaUIsSUFBdEIsRUFBNEJFLE9BQU8sQ0FBQ2xPLENBQUQsQ0FBbkMsQ0FBSixFQUE2QztVQUM1Q2lPLEVBQUUsQ0FBQ0MsT0FBTyxDQUFDbE8sQ0FBRCxDQUFSLENBQUYsR0FBaUJnTyxJQUFJLENBQUNFLE9BQU8sQ0FBQ2xPLENBQUQsQ0FBUixDQUFyQjs7Ozs7O1NBTUdpTyxFQUFQO0NBeEJEOztBQ2hFQTs7Ozs7O0FBT0E7QUFFQSxJQUFJRyxvQkFBb0IsR0FBRyw4Q0FBM0I7QUFFQSwwQkFBYyxHQUFHQSxvQkFBakI7O0FDRkEsSUFBSTNELFlBQVksR0FBRyxZQUFXLEVBQTlCOztBQUVBLElBQUk3UCxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsUUFBWixLQUF5QixZQUE3QixFQUEyQztNQUNyQ3NULHNCQUFvQixHQUFHaFQsc0JBQTNCO01BQ0lpVCxrQkFBa0IsR0FBRyxFQUF6QjtNQUNJcFcsR0FBRyxHQUFHdUIsUUFBUSxDQUFDNU4sSUFBVCxDQUFjNk4sSUFBZCxDQUFtQm5DLE1BQU0sQ0FBQzVMLFNBQVAsQ0FBaUJ5VSxjQUFwQyxDQUFWOztFQUVBc0ssWUFBWSxHQUFHLFVBQVMxZixJQUFULEVBQWU7UUFDeEI0ZixPQUFPLEdBQUcsY0FBYzVmLElBQTVCOztRQUNJLE9BQU82ZixPQUFQLEtBQW1CLFdBQXZCLEVBQW9DO01BQ2xDQSxPQUFPLENBQUN6RyxLQUFSLENBQWN3RyxPQUFkOzs7UUFFRTs7OztZQUlJLElBQUkxUCxLQUFKLENBQVUwUCxPQUFWLENBQU47S0FKRixDQUtFLE9BQU9HLENBQVAsRUFBVTtHQVZkOzs7Ozs7Ozs7Ozs7Ozs7QUF5QkYsU0FBU3dELGNBQVQsQ0FBd0JDLFNBQXhCLEVBQW1DQyxNQUFuQyxFQUEyQ0MsUUFBM0MsRUFBcURDLGFBQXJELEVBQW9FQyxRQUFwRSxFQUE4RTtNQUN4RS9ULE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxRQUFaLEtBQXlCLFlBQTdCLEVBQTJDO1NBQ3BDLElBQUk4VCxZQUFULElBQXlCTCxTQUF6QixFQUFvQztVQUM5QnRXLEdBQUcsQ0FBQ3NXLFNBQUQsRUFBWUssWUFBWixDQUFQLEVBQWtDO1lBQzVCekssS0FBSixDQURnQzs7OztZQUs1Qjs7O2NBR0UsT0FBT29LLFNBQVMsQ0FBQ0ssWUFBRCxDQUFoQixLQUFtQyxVQUF2QyxFQUFtRDtnQkFDN0NiLEdBQUcsR0FBRzlTLEtBQUssQ0FDYixDQUFDeVQsYUFBYSxJQUFJLGFBQWxCLElBQW1DLElBQW5DLEdBQTBDRCxRQUExQyxHQUFxRCxTQUFyRCxHQUFpRUcsWUFBakUsR0FBZ0YsZ0JBQWhGLEdBQ0EsOEVBREEsR0FDaUYsT0FBT0wsU0FBUyxDQUFDSyxZQUFELENBRGpHLEdBQ2tILElBRnJHLENBQWY7WUFJQWIsR0FBRyxDQUFDdE0sSUFBSixHQUFXLHFCQUFYO2tCQUNNc00sR0FBTjs7O1VBRUY1SixLQUFLLEdBQUdvSyxTQUFTLENBQUNLLFlBQUQsQ0FBVCxDQUF3QkosTUFBeEIsRUFBZ0NJLFlBQWhDLEVBQThDRixhQUE5QyxFQUE2REQsUUFBN0QsRUFBdUUsSUFBdkUsRUFBNkVMLHNCQUE3RSxDQUFSO1NBWEYsQ0FZRSxPQUFPUyxFQUFQLEVBQVc7VUFDWDFLLEtBQUssR0FBRzBLLEVBQVI7OztZQUVFMUssS0FBSyxJQUFJLEVBQUVBLEtBQUssWUFBWWxKLEtBQW5CLENBQWIsRUFBd0M7VUFDdEN3UCxZQUFZLENBQ1YsQ0FBQ2lFLGFBQWEsSUFBSSxhQUFsQixJQUFtQywwQkFBbkMsR0FDQUQsUUFEQSxHQUNXLElBRFgsR0FDa0JHLFlBRGxCLEdBQ2lDLGlDQURqQyxHQUVBLDJEQUZBLEdBRThELE9BQU96SyxLQUZyRSxHQUU2RSxJQUY3RSxHQUdBLGlFQUhBLEdBSUEsZ0VBSkEsR0FLQSxpQ0FOVSxDQUFaOzs7WUFTRUEsS0FBSyxZQUFZbEosS0FBakIsSUFBMEIsRUFBRWtKLEtBQUssQ0FBQ3dHLE9BQU4sSUFBaUIwRCxrQkFBbkIsQ0FBOUIsRUFBc0U7OztVQUdwRUEsa0JBQWtCLENBQUNsSyxLQUFLLENBQUN3RyxPQUFQLENBQWxCLEdBQW9DLElBQXBDO2NBRUltRSxLQUFLLEdBQUdILFFBQVEsR0FBR0EsUUFBUSxFQUFYLEdBQWdCLEVBQXBDO1VBRUFsRSxZQUFZLENBQ1YsWUFBWWdFLFFBQVosR0FBdUIsU0FBdkIsR0FBbUN0SyxLQUFLLENBQUN3RyxPQUF6QyxJQUFvRG1FLEtBQUssSUFBSSxJQUFULEdBQWdCQSxLQUFoQixHQUF3QixFQUE1RSxDQURVLENBQVo7Ozs7Ozs7Ozs7Ozs7QUFjVlIsY0FBYyxDQUFDUyxpQkFBZixHQUFtQyxZQUFXO01BQ3hDblUsT0FBTyxDQUFDQyxHQUFSLENBQVlDLFFBQVosS0FBeUIsWUFBN0IsRUFBMkM7SUFDekN1VCxrQkFBa0IsR0FBRyxFQUFyQjs7Q0FGSjs7QUFNQSxvQkFBYyxHQUFHQyxjQUFqQjs7QUN0RkEsSUFBSXJXLEtBQUcsR0FBR3VCLFFBQVEsQ0FBQzVOLElBQVQsQ0FBYzZOLElBQWQsQ0FBbUJuQyxNQUFNLENBQUM1TCxTQUFQLENBQWlCeVUsY0FBcEMsQ0FBVjs7QUFDQSxJQUFJc0ssY0FBWSxHQUFHLFlBQVcsRUFBOUI7O0FBRUEsSUFBSTdQLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxRQUFaLEtBQXlCLFlBQTdCLEVBQTJDO0VBQ3pDMlAsY0FBWSxHQUFHLFVBQVMxZixJQUFULEVBQWU7UUFDeEI0ZixPQUFPLEdBQUcsY0FBYzVmLElBQTVCOztRQUNJLE9BQU82ZixPQUFQLEtBQW1CLFdBQXZCLEVBQW9DO01BQ2xDQSxPQUFPLENBQUN6RyxLQUFSLENBQWN3RyxPQUFkOzs7UUFFRTs7OztZQUlJLElBQUkxUCxLQUFKLENBQVUwUCxPQUFWLENBQU47S0FKRixDQUtFLE9BQU9HLENBQVAsRUFBVTtHQVZkOzs7QUFjRixTQUFTa0UsNEJBQVQsR0FBd0M7U0FDL0IsSUFBUDs7O0FBR0YsMkJBQWMsR0FBRyxVQUFTQyxjQUFULEVBQXlCQyxtQkFBekIsRUFBOEM7O01BRXpEQyxlQUFlLEdBQUcsT0FBT3RHLE1BQVAsS0FBa0IsVUFBbEIsSUFBZ0NBLE1BQU0sQ0FBQ3VHLFFBQTdEO01BQ0lDLG9CQUFvQixHQUFHLFlBQTNCLENBSDZEOzs7Ozs7Ozs7Ozs7Ozs7OztXQW1CcERDLGFBQVQsQ0FBdUJDLGFBQXZCLEVBQXNDO1FBQ2hDQyxVQUFVLEdBQUdELGFBQWEsS0FBS0osZUFBZSxJQUFJSSxhQUFhLENBQUNKLGVBQUQsQ0FBaEMsSUFBcURJLGFBQWEsQ0FBQ0Ysb0JBQUQsQ0FBdkUsQ0FBOUI7O1FBQ0ksT0FBT0csVUFBUCxLQUFzQixVQUExQixFQUFzQzthQUM3QkEsVUFBUDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O01BbURBQyxTQUFTLEdBQUcsZUFBaEIsQ0F6RTZEOzs7TUE2RXpEQyxjQUFjLEdBQUc7SUFDbkJDLEtBQUssRUFBRUMsMEJBQTBCLENBQUMsT0FBRCxDQURkO0lBRW5CQyxJQUFJLEVBQUVELDBCQUEwQixDQUFDLFNBQUQsQ0FGYjtJQUduQkUsSUFBSSxFQUFFRiwwQkFBMEIsQ0FBQyxVQUFELENBSGI7SUFJbkJHLE1BQU0sRUFBRUgsMEJBQTBCLENBQUMsUUFBRCxDQUpmO0lBS25CMUUsTUFBTSxFQUFFMEUsMEJBQTBCLENBQUMsUUFBRCxDQUxmO0lBTW5CSSxNQUFNLEVBQUVKLDBCQUEwQixDQUFDLFFBQUQsQ0FOZjtJQU9uQkssTUFBTSxFQUFFTCwwQkFBMEIsQ0FBQyxRQUFELENBUGY7SUFTbkJNLEdBQUcsRUFBRUMsb0JBQW9CLEVBVE47SUFVbkJDLE9BQU8sRUFBRUMsd0JBVlU7SUFXbkJDLE9BQU8sRUFBRUMsd0JBQXdCLEVBWGQ7SUFZbkJDLFdBQVcsRUFBRUMsNEJBQTRCLEVBWnRCO0lBYW5CQyxVQUFVLEVBQUVDLHlCQWJPO0lBY25CQyxJQUFJLEVBQUVDLGlCQUFpQixFQWRKO0lBZW5CQyxRQUFRLEVBQUVDLHlCQWZTO0lBZ0JuQkMsS0FBSyxFQUFFQyxxQkFoQlk7SUFpQm5CQyxTQUFTLEVBQUVDLHNCQWpCUTtJQWtCbkJDLEtBQUssRUFBRUMsc0JBbEJZO0lBbUJuQkMsS0FBSyxFQUFFQztHQW5CVDs7Ozs7Ozs7V0EyQlNDLEVBQVQsQ0FBWTFHLENBQVosRUFBZTJHLENBQWYsRUFBa0I7O1FBRVozRyxDQUFDLEtBQUsyRyxDQUFWLEVBQWE7OzthQUdKM0csQ0FBQyxLQUFLLENBQU4sSUFBVyxJQUFJQSxDQUFKLEtBQVUsSUFBSTJHLENBQWhDO0tBSEYsTUFJTzs7YUFFRTNHLENBQUMsS0FBS0EsQ0FBTixJQUFXMkcsQ0FBQyxLQUFLQSxDQUF4Qjs7Ozs7Ozs7Ozs7Ozs7V0FZS0MsYUFBVCxDQUF1Qi9HLE9BQXZCLEVBQWdDO1NBQ3pCQSxPQUFMLEdBQWVBLE9BQWY7U0FDS21FLEtBQUwsR0FBYSxFQUFiO0dBOUgyRDs7O0VBaUk3RDRDLGFBQWEsQ0FBQ2htQixTQUFkLEdBQTBCdVAsS0FBSyxDQUFDdlAsU0FBaEM7O1dBRVNpbUIsMEJBQVQsQ0FBb0NDLFFBQXBDLEVBQThDO1FBQ3hDaFgsT0FBTyxDQUFDQyxHQUFSLENBQVlDLFFBQVosS0FBeUIsWUFBN0IsRUFBMkM7VUFDckMrVyx1QkFBdUIsR0FBRyxFQUE5QjtVQUNJQywwQkFBMEIsR0FBRyxDQUFqQzs7O2FBRU9DLFNBQVQsQ0FBbUJDLFVBQW5CLEVBQStCN08sS0FBL0IsRUFBc0M4TyxRQUF0QyxFQUFnRHZELGFBQWhELEVBQStERCxRQUEvRCxFQUF5RXlELFlBQXpFLEVBQXVGQyxNQUF2RixFQUErRjtNQUM3RnpELGFBQWEsR0FBR0EsYUFBYSxJQUFJZSxTQUFqQztNQUNBeUMsWUFBWSxHQUFHQSxZQUFZLElBQUlELFFBQS9COztVQUVJRSxNQUFNLEtBQUsvRCxzQkFBZixFQUFxQztZQUMvQmMsbUJBQUosRUFBeUI7O2NBRW5CbkIsR0FBRyxHQUFHLElBQUk5UyxLQUFKLENBQ1IseUZBQ0EsaURBREEsR0FFQSxnREFIUSxDQUFWO1VBS0E4UyxHQUFHLENBQUN0TSxJQUFKLEdBQVcscUJBQVg7Z0JBQ01zTSxHQUFOO1NBUkYsTUFTTyxJQUFJblQsT0FBTyxDQUFDQyxHQUFSLENBQVlDLFFBQVosS0FBeUIsWUFBekIsSUFBeUMsT0FBTzhQLE9BQVAsS0FBbUIsV0FBaEUsRUFBNkU7O2NBRTlFd0gsUUFBUSxHQUFHMUQsYUFBYSxHQUFHLEdBQWhCLEdBQXNCdUQsUUFBckM7O2NBRUUsQ0FBQ0osdUJBQXVCLENBQUNPLFFBQUQsQ0FBeEI7VUFFQU4sMEJBQTBCLEdBQUcsQ0FIL0IsRUFJRTtZQUNBckgsY0FBWSxDQUNWLDJEQUNBLG9CQURBLEdBQ3VCeUgsWUFEdkIsR0FDc0MsYUFEdEMsR0FDc0R4RCxhQUR0RCxHQUN1RSx3QkFEdkUsR0FFQSx5REFGQSxHQUdBLGdFQUhBLEdBSUEsK0RBSkEsR0FJa0UsY0FMeEQsQ0FBWjtZQU9BbUQsdUJBQXVCLENBQUNPLFFBQUQsQ0FBdkIsR0FBb0MsSUFBcEM7WUFDQU4sMEJBQTBCOzs7OztVQUk1QjNPLEtBQUssQ0FBQzhPLFFBQUQsQ0FBTCxJQUFtQixJQUF2QixFQUE2QjtZQUN2QkQsVUFBSixFQUFnQjtjQUNWN08sS0FBSyxDQUFDOE8sUUFBRCxDQUFMLEtBQW9CLElBQXhCLEVBQThCO21CQUNyQixJQUFJUCxhQUFKLENBQWtCLFNBQVNqRCxRQUFULEdBQW9CLElBQXBCLEdBQTJCeUQsWUFBM0IsR0FBMEMsMEJBQTFDLElBQXdFLFNBQVN4RCxhQUFULEdBQXlCLDZCQUFqRyxDQUFsQixDQUFQOzs7aUJBRUssSUFBSWdELGFBQUosQ0FBa0IsU0FBU2pELFFBQVQsR0FBb0IsSUFBcEIsR0FBMkJ5RCxZQUEzQixHQUEwQyw2QkFBMUMsSUFBMkUsTUFBTXhELGFBQU4sR0FBc0Isa0NBQWpHLENBQWxCLENBQVA7OztlQUVLLElBQVA7T0FQRixNQVFPO2VBQ0VrRCxRQUFRLENBQUN6TyxLQUFELEVBQVE4TyxRQUFSLEVBQWtCdkQsYUFBbEIsRUFBaUNELFFBQWpDLEVBQTJDeUQsWUFBM0MsQ0FBZjs7OztRQUlBRyxnQkFBZ0IsR0FBR04sU0FBUyxDQUFDdFksSUFBVixDQUFlLElBQWYsRUFBcUIsS0FBckIsQ0FBdkI7SUFDQTRZLGdCQUFnQixDQUFDTCxVQUFqQixHQUE4QkQsU0FBUyxDQUFDdFksSUFBVixDQUFlLElBQWYsRUFBcUIsSUFBckIsQ0FBOUI7V0FFTzRZLGdCQUFQOzs7V0FHT3pDLDBCQUFULENBQW9DMEMsWUFBcEMsRUFBa0Q7YUFDdkNWLFFBQVQsQ0FBa0J6TyxLQUFsQixFQUF5QjhPLFFBQXpCLEVBQW1DdkQsYUFBbkMsRUFBa0RELFFBQWxELEVBQTREeUQsWUFBNUQsRUFBMEVDLE1BQTFFLEVBQWtGO1VBQzVFSSxTQUFTLEdBQUdwUCxLQUFLLENBQUM4TyxRQUFELENBQXJCO1VBQ0lPLFFBQVEsR0FBR0MsV0FBVyxDQUFDRixTQUFELENBQTFCOztVQUNJQyxRQUFRLEtBQUtGLFlBQWpCLEVBQStCOzs7O1lBSXpCSSxXQUFXLEdBQUdDLGNBQWMsQ0FBQ0osU0FBRCxDQUFoQztlQUVPLElBQUliLGFBQUosQ0FBa0IsYUFBYWpELFFBQWIsR0FBd0IsSUFBeEIsR0FBK0J5RCxZQUEvQixHQUE4QyxZQUE5QyxJQUE4RCxNQUFNUSxXQUFOLEdBQW9CLGlCQUFwQixHQUF3Q2hFLGFBQXhDLEdBQXdELGNBQXRILEtBQXlJLE1BQU00RCxZQUFOLEdBQXFCLElBQTlKLENBQWxCLENBQVA7OzthQUVLLElBQVA7OztXQUVLWCwwQkFBMEIsQ0FBQ0MsUUFBRCxDQUFqQzs7O1dBR096QixvQkFBVCxHQUFnQztXQUN2QndCLDBCQUEwQixDQUFDM0MsNEJBQUQsQ0FBakM7OztXQUdPcUIsd0JBQVQsQ0FBa0N1QyxXQUFsQyxFQUErQzthQUNwQ2hCLFFBQVQsQ0FBa0J6TyxLQUFsQixFQUF5QjhPLFFBQXpCLEVBQW1DdkQsYUFBbkMsRUFBa0RELFFBQWxELEVBQTREeUQsWUFBNUQsRUFBMEU7VUFDcEUsT0FBT1UsV0FBUCxLQUF1QixVQUEzQixFQUF1QztlQUM5QixJQUFJbEIsYUFBSixDQUFrQixlQUFlUSxZQUFmLEdBQThCLGtCQUE5QixHQUFtRHhELGFBQW5ELEdBQW1FLGlEQUFyRixDQUFQOzs7VUFFRTZELFNBQVMsR0FBR3BQLEtBQUssQ0FBQzhPLFFBQUQsQ0FBckI7O1VBQ0ksQ0FBQ3htQixLQUFLLENBQUNvbkIsT0FBTixDQUFjTixTQUFkLENBQUwsRUFBK0I7WUFDekJDLFFBQVEsR0FBR0MsV0FBVyxDQUFDRixTQUFELENBQTFCO2VBQ08sSUFBSWIsYUFBSixDQUFrQixhQUFhakQsUUFBYixHQUF3QixJQUF4QixHQUErQnlELFlBQS9CLEdBQThDLFlBQTlDLElBQThELE1BQU1NLFFBQU4sR0FBaUIsaUJBQWpCLEdBQXFDOUQsYUFBckMsR0FBcUQsdUJBQW5ILENBQWxCLENBQVA7OztXQUVHLElBQUkxTyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHdVMsU0FBUyxDQUFDbm5CLE1BQTlCLEVBQXNDNFUsQ0FBQyxFQUF2QyxFQUEyQztZQUNyQ21FLEtBQUssR0FBR3lPLFdBQVcsQ0FBQ0wsU0FBRCxFQUFZdlMsQ0FBWixFQUFlME8sYUFBZixFQUE4QkQsUUFBOUIsRUFBd0N5RCxZQUFZLEdBQUcsR0FBZixHQUFxQmxTLENBQXJCLEdBQXlCLEdBQWpFLEVBQXNFb08sc0JBQXRFLENBQXZCOztZQUNJakssS0FBSyxZQUFZbEosS0FBckIsRUFBNEI7aUJBQ25Ca0osS0FBUDs7OzthQUdHLElBQVA7OztXQUVLd04sMEJBQTBCLENBQUNDLFFBQUQsQ0FBakM7OztXQUdPckIsd0JBQVQsR0FBb0M7YUFDekJxQixRQUFULENBQWtCek8sS0FBbEIsRUFBeUI4TyxRQUF6QixFQUFtQ3ZELGFBQW5DLEVBQWtERCxRQUFsRCxFQUE0RHlELFlBQTVELEVBQTBFO1VBQ3BFSyxTQUFTLEdBQUdwUCxLQUFLLENBQUM4TyxRQUFELENBQXJCOztVQUNJLENBQUNoRCxjQUFjLENBQUNzRCxTQUFELENBQW5CLEVBQWdDO1lBQzFCQyxRQUFRLEdBQUdDLFdBQVcsQ0FBQ0YsU0FBRCxDQUExQjtlQUNPLElBQUliLGFBQUosQ0FBa0IsYUFBYWpELFFBQWIsR0FBd0IsSUFBeEIsR0FBK0J5RCxZQUEvQixHQUE4QyxZQUE5QyxJQUE4RCxNQUFNTSxRQUFOLEdBQWlCLGlCQUFqQixHQUFxQzlELGFBQXJDLEdBQXFELG9DQUFuSCxDQUFsQixDQUFQOzs7YUFFSyxJQUFQOzs7V0FFS2lELDBCQUEwQixDQUFDQyxRQUFELENBQWpDOzs7V0FHT25CLDRCQUFULEdBQXdDO2FBQzdCbUIsUUFBVCxDQUFrQnpPLEtBQWxCLEVBQXlCOE8sUUFBekIsRUFBbUN2RCxhQUFuQyxFQUFrREQsUUFBbEQsRUFBNER5RCxZQUE1RCxFQUEwRTtVQUNwRUssU0FBUyxHQUFHcFAsS0FBSyxDQUFDOE8sUUFBRCxDQUFyQjs7VUFDSSxDQUFDYSxPQUFPLENBQUN2SSxrQkFBUixDQUEyQmdJLFNBQTNCLENBQUwsRUFBNEM7WUFDdENDLFFBQVEsR0FBR0MsV0FBVyxDQUFDRixTQUFELENBQTFCO2VBQ08sSUFBSWIsYUFBSixDQUFrQixhQUFhakQsUUFBYixHQUF3QixJQUF4QixHQUErQnlELFlBQS9CLEdBQThDLFlBQTlDLElBQThELE1BQU1NLFFBQU4sR0FBaUIsaUJBQWpCLEdBQXFDOUQsYUFBckMsR0FBcUQseUNBQW5ILENBQWxCLENBQVA7OzthQUVLLElBQVA7OztXQUVLaUQsMEJBQTBCLENBQUNDLFFBQUQsQ0FBakM7OztXQUdPakIseUJBQVQsQ0FBbUNvQyxhQUFuQyxFQUFrRDthQUN2Q25CLFFBQVQsQ0FBa0J6TyxLQUFsQixFQUF5QjhPLFFBQXpCLEVBQW1DdkQsYUFBbkMsRUFBa0RELFFBQWxELEVBQTREeUQsWUFBNUQsRUFBMEU7VUFDcEUsRUFBRS9PLEtBQUssQ0FBQzhPLFFBQUQsQ0FBTCxZQUEyQmMsYUFBN0IsQ0FBSixFQUFpRDtZQUMzQ0MsaUJBQWlCLEdBQUdELGFBQWEsQ0FBQ3RSLElBQWQsSUFBc0JnTyxTQUE5QztZQUNJd0QsZUFBZSxHQUFHQyxZQUFZLENBQUMvUCxLQUFLLENBQUM4TyxRQUFELENBQU4sQ0FBbEM7ZUFDTyxJQUFJUCxhQUFKLENBQWtCLGFBQWFqRCxRQUFiLEdBQXdCLElBQXhCLEdBQStCeUQsWUFBL0IsR0FBOEMsWUFBOUMsSUFBOEQsTUFBTWUsZUFBTixHQUF3QixpQkFBeEIsR0FBNEN2RSxhQUE1QyxHQUE0RCxjQUExSCxLQUE2SSxrQkFBa0JzRSxpQkFBbEIsR0FBc0MsSUFBbkwsQ0FBbEIsQ0FBUDs7O2FBRUssSUFBUDs7O1dBRUtyQiwwQkFBMEIsQ0FBQ0MsUUFBRCxDQUFqQzs7O1dBR09YLHFCQUFULENBQStCa0MsY0FBL0IsRUFBK0M7UUFDekMsQ0FBQzFuQixLQUFLLENBQUNvbkIsT0FBTixDQUFjTSxjQUFkLENBQUwsRUFBb0M7VUFDOUJ2WSxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsUUFBWixLQUF5QixZQUE3QixFQUEyQztZQUNyQ2pQLFNBQVMsQ0FBQ1QsTUFBVixHQUFtQixDQUF2QixFQUEwQjtVQUN4QnFmLGNBQVksQ0FDVixpRUFBaUU1ZSxTQUFTLENBQUNULE1BQTNFLEdBQW9GLGNBQXBGLEdBQ0EsMEVBRlUsQ0FBWjtTQURGLE1BS087VUFDTHFmLGNBQVksQ0FBQyx3REFBRCxDQUFaOzs7O2FBR0d1RSw0QkFBUDs7O2FBR080QyxRQUFULENBQWtCek8sS0FBbEIsRUFBeUI4TyxRQUF6QixFQUFtQ3ZELGFBQW5DLEVBQWtERCxRQUFsRCxFQUE0RHlELFlBQTVELEVBQTBFO1VBQ3BFSyxTQUFTLEdBQUdwUCxLQUFLLENBQUM4TyxRQUFELENBQXJCOztXQUNLLElBQUlqUyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHbVQsY0FBYyxDQUFDL25CLE1BQW5DLEVBQTJDNFUsQ0FBQyxFQUE1QyxFQUFnRDtZQUMxQ3dSLEVBQUUsQ0FBQ2UsU0FBRCxFQUFZWSxjQUFjLENBQUNuVCxDQUFELENBQTFCLENBQU4sRUFBc0M7aUJBQzdCLElBQVA7Ozs7VUFJQW9ULFlBQVksR0FBR0MsSUFBSSxDQUFDQyxTQUFMLENBQWVILGNBQWYsRUFBK0IsU0FBU0ksUUFBVCxDQUFrQnJULEdBQWxCLEVBQXVCN1csS0FBdkIsRUFBOEI7WUFDMUVvcEIsV0FBVyxDQUFDcHBCLEtBQUQsQ0FBWCxLQUF1QixRQUEzQixFQUFxQztpQkFDNUJpa0IsTUFBTSxDQUFDamtCLEtBQUQsQ0FBYjs7O2VBRUtBLEtBQVA7T0FKaUIsQ0FBbkI7YUFNTyxJQUFJcW9CLGFBQUosQ0FBa0IsYUFBYWpELFFBQWIsR0FBd0IsSUFBeEIsR0FBK0J5RCxZQUEvQixHQUE4QyxjQUE5QyxHQUErRDVFLE1BQU0sQ0FBQ2lGLFNBQUQsQ0FBckUsR0FBbUYsSUFBbkYsSUFBMkYsa0JBQWtCN0QsYUFBbEIsR0FBa0MscUJBQWxDLEdBQTBEMEUsWUFBMUQsR0FBeUUsR0FBcEssQ0FBbEIsQ0FBUDs7O1dBRUt6QiwwQkFBMEIsQ0FBQ0MsUUFBRCxDQUFqQzs7O1dBR09iLHlCQUFULENBQW1DNkIsV0FBbkMsRUFBZ0Q7YUFDckNoQixRQUFULENBQWtCek8sS0FBbEIsRUFBeUI4TyxRQUF6QixFQUFtQ3ZELGFBQW5DLEVBQWtERCxRQUFsRCxFQUE0RHlELFlBQTVELEVBQTBFO1VBQ3BFLE9BQU9VLFdBQVAsS0FBdUIsVUFBM0IsRUFBdUM7ZUFDOUIsSUFBSWxCLGFBQUosQ0FBa0IsZUFBZVEsWUFBZixHQUE4QixrQkFBOUIsR0FBbUR4RCxhQUFuRCxHQUFtRSxrREFBckYsQ0FBUDs7O1VBRUU2RCxTQUFTLEdBQUdwUCxLQUFLLENBQUM4TyxRQUFELENBQXJCO1VBQ0lPLFFBQVEsR0FBR0MsV0FBVyxDQUFDRixTQUFELENBQTFCOztVQUNJQyxRQUFRLEtBQUssUUFBakIsRUFBMkI7ZUFDbEIsSUFBSWQsYUFBSixDQUFrQixhQUFhakQsUUFBYixHQUF3QixJQUF4QixHQUErQnlELFlBQS9CLEdBQThDLFlBQTlDLElBQThELE1BQU1NLFFBQU4sR0FBaUIsaUJBQWpCLEdBQXFDOUQsYUFBckMsR0FBcUQsd0JBQW5ILENBQWxCLENBQVA7OztXQUVHLElBQUl4TyxHQUFULElBQWdCcVMsU0FBaEIsRUFBMkI7WUFDckJ0YSxLQUFHLENBQUNzYSxTQUFELEVBQVlyUyxHQUFaLENBQVAsRUFBeUI7Y0FDbkJpRSxLQUFLLEdBQUd5TyxXQUFXLENBQUNMLFNBQUQsRUFBWXJTLEdBQVosRUFBaUJ3TyxhQUFqQixFQUFnQ0QsUUFBaEMsRUFBMEN5RCxZQUFZLEdBQUcsR0FBZixHQUFxQmhTLEdBQS9ELEVBQW9Fa08sc0JBQXBFLENBQXZCOztjQUNJakssS0FBSyxZQUFZbEosS0FBckIsRUFBNEI7bUJBQ25Ca0osS0FBUDs7Ozs7YUFJQyxJQUFQOzs7V0FFS3dOLDBCQUEwQixDQUFDQyxRQUFELENBQWpDOzs7V0FHT1Qsc0JBQVQsQ0FBZ0NxQyxtQkFBaEMsRUFBcUQ7UUFDL0MsQ0FBQy9uQixLQUFLLENBQUNvbkIsT0FBTixDQUFjVyxtQkFBZCxDQUFMLEVBQXlDO01BQ3ZDNVksT0FBTyxDQUFDQyxHQUFSLENBQVlDLFFBQVosS0FBeUIsWUFBekIsR0FBd0MyUCxjQUFZLENBQUMsd0VBQUQsQ0FBcEQsR0FBaUksS0FBSyxDQUF0STthQUNPdUUsNEJBQVA7OztTQUdHLElBQUloUCxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHd1QsbUJBQW1CLENBQUNwb0IsTUFBeEMsRUFBZ0Q0VSxDQUFDLEVBQWpELEVBQXFEO1VBQy9DeVQsT0FBTyxHQUFHRCxtQkFBbUIsQ0FBQ3hULENBQUQsQ0FBakM7O1VBQ0ksT0FBT3lULE9BQVAsS0FBbUIsVUFBdkIsRUFBbUM7UUFDakNoSixjQUFZLENBQ1YsdUZBQ0EsV0FEQSxHQUNjaUosd0JBQXdCLENBQUNELE9BQUQsQ0FEdEMsR0FDa0QsWUFEbEQsR0FDaUV6VCxDQURqRSxHQUNxRSxHQUYzRCxDQUFaO2VBSU9nUCw0QkFBUDs7OzthQUlLNEMsUUFBVCxDQUFrQnpPLEtBQWxCLEVBQXlCOE8sUUFBekIsRUFBbUN2RCxhQUFuQyxFQUFrREQsUUFBbEQsRUFBNER5RCxZQUE1RCxFQUEwRTtXQUNuRSxJQUFJbFMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR3dULG1CQUFtQixDQUFDcG9CLE1BQXhDLEVBQWdENFUsQ0FBQyxFQUFqRCxFQUFxRDtZQUMvQ3lULE9BQU8sR0FBR0QsbUJBQW1CLENBQUN4VCxDQUFELENBQWpDOztZQUNJeVQsT0FBTyxDQUFDdFEsS0FBRCxFQUFROE8sUUFBUixFQUFrQnZELGFBQWxCLEVBQWlDRCxRQUFqQyxFQUEyQ3lELFlBQTNDLEVBQXlEOUQsc0JBQXpELENBQVAsSUFBeUYsSUFBN0YsRUFBbUc7aUJBQzFGLElBQVA7Ozs7YUFJRyxJQUFJc0QsYUFBSixDQUFrQixhQUFhakQsUUFBYixHQUF3QixJQUF4QixHQUErQnlELFlBQS9CLEdBQThDLGdCQUE5QyxJQUFrRSxNQUFNeEQsYUFBTixHQUFzQixJQUF4RixDQUFsQixDQUFQOzs7V0FFS2lELDBCQUEwQixDQUFDQyxRQUFELENBQWpDOzs7V0FHT2YsaUJBQVQsR0FBNkI7YUFDbEJlLFFBQVQsQ0FBa0J6TyxLQUFsQixFQUF5QjhPLFFBQXpCLEVBQW1DdkQsYUFBbkMsRUFBa0RELFFBQWxELEVBQTREeUQsWUFBNUQsRUFBMEU7VUFDcEUsQ0FBQ3lCLE1BQU0sQ0FBQ3hRLEtBQUssQ0FBQzhPLFFBQUQsQ0FBTixDQUFYLEVBQThCO2VBQ3JCLElBQUlQLGFBQUosQ0FBa0IsYUFBYWpELFFBQWIsR0FBd0IsSUFBeEIsR0FBK0J5RCxZQUEvQixHQUE4QyxnQkFBOUMsSUFBa0UsTUFBTXhELGFBQU4sR0FBc0IsMEJBQXhGLENBQWxCLENBQVA7OzthQUVLLElBQVA7OztXQUVLaUQsMEJBQTBCLENBQUNDLFFBQUQsQ0FBakM7OztXQUdPUCxzQkFBVCxDQUFnQ3VDLFVBQWhDLEVBQTRDO2FBQ2pDaEMsUUFBVCxDQUFrQnpPLEtBQWxCLEVBQXlCOE8sUUFBekIsRUFBbUN2RCxhQUFuQyxFQUFrREQsUUFBbEQsRUFBNER5RCxZQUE1RCxFQUEwRTtVQUNwRUssU0FBUyxHQUFHcFAsS0FBSyxDQUFDOE8sUUFBRCxDQUFyQjtVQUNJTyxRQUFRLEdBQUdDLFdBQVcsQ0FBQ0YsU0FBRCxDQUExQjs7VUFDSUMsUUFBUSxLQUFLLFFBQWpCLEVBQTJCO2VBQ2xCLElBQUlkLGFBQUosQ0FBa0IsYUFBYWpELFFBQWIsR0FBd0IsSUFBeEIsR0FBK0J5RCxZQUEvQixHQUE4QyxhQUE5QyxHQUE4RE0sUUFBOUQsR0FBeUUsSUFBekUsSUFBaUYsa0JBQWtCOUQsYUFBbEIsR0FBa0MsdUJBQW5ILENBQWxCLENBQVA7OztXQUVHLElBQUl4TyxHQUFULElBQWdCMFQsVUFBaEIsRUFBNEI7WUFDdEJILE9BQU8sR0FBR0csVUFBVSxDQUFDMVQsR0FBRCxDQUF4Qjs7WUFDSSxDQUFDdVQsT0FBTCxFQUFjOzs7O1lBR1Z0UCxLQUFLLEdBQUdzUCxPQUFPLENBQUNsQixTQUFELEVBQVlyUyxHQUFaLEVBQWlCd08sYUFBakIsRUFBZ0NELFFBQWhDLEVBQTBDeUQsWUFBWSxHQUFHLEdBQWYsR0FBcUJoUyxHQUEvRCxFQUFvRWtPLHNCQUFwRSxDQUFuQjs7WUFDSWpLLEtBQUosRUFBVztpQkFDRkEsS0FBUDs7OzthQUdHLElBQVA7OztXQUVLd04sMEJBQTBCLENBQUNDLFFBQUQsQ0FBakM7OztXQUdPTCw0QkFBVCxDQUFzQ3FDLFVBQXRDLEVBQWtEO2FBQ3ZDaEMsUUFBVCxDQUFrQnpPLEtBQWxCLEVBQXlCOE8sUUFBekIsRUFBbUN2RCxhQUFuQyxFQUFrREQsUUFBbEQsRUFBNER5RCxZQUE1RCxFQUEwRTtVQUNwRUssU0FBUyxHQUFHcFAsS0FBSyxDQUFDOE8sUUFBRCxDQUFyQjtVQUNJTyxRQUFRLEdBQUdDLFdBQVcsQ0FBQ0YsU0FBRCxDQUExQjs7VUFDSUMsUUFBUSxLQUFLLFFBQWpCLEVBQTJCO2VBQ2xCLElBQUlkLGFBQUosQ0FBa0IsYUFBYWpELFFBQWIsR0FBd0IsSUFBeEIsR0FBK0J5RCxZQUEvQixHQUE4QyxhQUE5QyxHQUE4RE0sUUFBOUQsR0FBeUUsSUFBekUsSUFBaUYsa0JBQWtCOUQsYUFBbEIsR0FBa0MsdUJBQW5ILENBQWxCLENBQVA7T0FKc0U7Ozs7VUFRcEVtRixPQUFPLEdBQUcvVCxZQUFNLENBQUMsRUFBRCxFQUFLcUQsS0FBSyxDQUFDOE8sUUFBRCxDQUFWLEVBQXNCMkIsVUFBdEIsQ0FBcEI7O1dBQ0ssSUFBSTFULEdBQVQsSUFBZ0IyVCxPQUFoQixFQUF5QjtZQUNuQkosT0FBTyxHQUFHRyxVQUFVLENBQUMxVCxHQUFELENBQXhCOztZQUNJLENBQUN1VCxPQUFMLEVBQWM7aUJBQ0wsSUFBSS9CLGFBQUosQ0FDTCxhQUFhakQsUUFBYixHQUF3QixJQUF4QixHQUErQnlELFlBQS9CLEdBQThDLFNBQTlDLEdBQTBEaFMsR0FBMUQsR0FBZ0UsaUJBQWhFLEdBQW9Gd08sYUFBcEYsR0FBb0csSUFBcEcsR0FDQSxnQkFEQSxHQUNtQjJFLElBQUksQ0FBQ0MsU0FBTCxDQUFlblEsS0FBSyxDQUFDOE8sUUFBRCxDQUFwQixFQUFnQyxJQUFoQyxFQUFzQyxJQUF0QyxDQURuQixHQUVBLGdCQUZBLEdBRW9Cb0IsSUFBSSxDQUFDQyxTQUFMLENBQWVoYyxNQUFNLENBQUNxSixJQUFQLENBQVlpVCxVQUFaLENBQWYsRUFBd0MsSUFBeEMsRUFBOEMsSUFBOUMsQ0FIZixDQUFQOzs7WUFNRXpQLEtBQUssR0FBR3NQLE9BQU8sQ0FBQ2xCLFNBQUQsRUFBWXJTLEdBQVosRUFBaUJ3TyxhQUFqQixFQUFnQ0QsUUFBaEMsRUFBMEN5RCxZQUFZLEdBQUcsR0FBZixHQUFxQmhTLEdBQS9ELEVBQW9Fa08sc0JBQXBFLENBQW5COztZQUNJakssS0FBSixFQUFXO2lCQUNGQSxLQUFQOzs7O2FBR0csSUFBUDs7O1dBR0t3TiwwQkFBMEIsQ0FBQ0MsUUFBRCxDQUFqQzs7O1dBR08rQixNQUFULENBQWdCcEIsU0FBaEIsRUFBMkI7WUFDakIsT0FBT0EsU0FBZjtXQUNPLFFBQUw7V0FDSyxRQUFMO1dBQ0ssV0FBTDtlQUNTLElBQVA7O1dBQ0csU0FBTDtlQUNTLENBQUNBLFNBQVI7O1dBQ0csUUFBTDtZQUNNOW1CLEtBQUssQ0FBQ29uQixPQUFOLENBQWNOLFNBQWQsQ0FBSixFQUE4QjtpQkFDckJBLFNBQVMsQ0FBQ3VCLEtBQVYsQ0FBZ0JILE1BQWhCLENBQVA7OztZQUVFcEIsU0FBUyxLQUFLLElBQWQsSUFBc0J0RCxjQUFjLENBQUNzRCxTQUFELENBQXhDLEVBQXFEO2lCQUM1QyxJQUFQOzs7WUFHRS9DLFVBQVUsR0FBR0YsYUFBYSxDQUFDaUQsU0FBRCxDQUE5Qjs7WUFDSS9DLFVBQUosRUFBZ0I7Y0FDVkosUUFBUSxHQUFHSSxVQUFVLENBQUM1akIsSUFBWCxDQUFnQjJtQixTQUFoQixDQUFmO2NBQ0l3QixJQUFKOztjQUNJdkUsVUFBVSxLQUFLK0MsU0FBUyxDQUFDeUIsT0FBN0IsRUFBc0M7bUJBQzdCLENBQUMsQ0FBQ0QsSUFBSSxHQUFHM0UsUUFBUSxDQUFDNkUsSUFBVCxFQUFSLEVBQXlCQyxJQUFqQyxFQUF1QztrQkFDakMsQ0FBQ1AsTUFBTSxDQUFDSSxJQUFJLENBQUMxcUIsS0FBTixDQUFYLEVBQXlCO3VCQUNoQixLQUFQOzs7V0FITixNQU1POzttQkFFRSxDQUFDLENBQUMwcUIsSUFBSSxHQUFHM0UsUUFBUSxDQUFDNkUsSUFBVCxFQUFSLEVBQXlCQyxJQUFqQyxFQUF1QztrQkFDakNDLEtBQUssR0FBR0osSUFBSSxDQUFDMXFCLEtBQWpCOztrQkFDSThxQixLQUFKLEVBQVc7b0JBQ0wsQ0FBQ1IsTUFBTSxDQUFDUSxLQUFLLENBQUMsQ0FBRCxDQUFOLENBQVgsRUFBdUI7eUJBQ2QsS0FBUDs7Ozs7U0FmVixNQW9CTztpQkFDRSxLQUFQOzs7ZUFHSyxJQUFQOzs7ZUFFTyxLQUFQOzs7O1dBSUdDLFFBQVQsQ0FBa0I1QixRQUFsQixFQUE0QkQsU0FBNUIsRUFBdUM7O1FBRWpDQyxRQUFRLEtBQUssUUFBakIsRUFBMkI7YUFDbEIsSUFBUDtLQUhtQzs7O1FBT2pDRCxTQUFTLENBQUMsZUFBRCxDQUFULEtBQStCLFFBQW5DLEVBQTZDO2FBQ3BDLElBQVA7S0FSbUM7OztRQVlqQyxPQUFPMUosTUFBUCxLQUFrQixVQUFsQixJQUFnQzBKLFNBQVMsWUFBWTFKLE1BQXpELEVBQWlFO2FBQ3hELElBQVA7OztXQUdLLEtBQVA7R0EvZDJEOzs7V0FtZXBENEosV0FBVCxDQUFxQkYsU0FBckIsRUFBZ0M7UUFDMUJDLFFBQVEsR0FBRyxPQUFPRCxTQUF0Qjs7UUFDSTltQixLQUFLLENBQUNvbkIsT0FBTixDQUFjTixTQUFkLENBQUosRUFBOEI7YUFDckIsT0FBUDs7O1FBRUVBLFNBQVMsWUFBWThCLE1BQXpCLEVBQWlDOzs7O2FBSXhCLFFBQVA7OztRQUVFRCxRQUFRLENBQUM1QixRQUFELEVBQVdELFNBQVgsQ0FBWixFQUFtQzthQUMxQixRQUFQOzs7V0FFS0MsUUFBUDtHQWpmMkQ7Ozs7V0FzZnBERyxjQUFULENBQXdCSixTQUF4QixFQUFtQztRQUM3QixPQUFPQSxTQUFQLEtBQXFCLFdBQXJCLElBQW9DQSxTQUFTLEtBQUssSUFBdEQsRUFBNEQ7YUFDbkQsS0FBS0EsU0FBWjs7O1FBRUVDLFFBQVEsR0FBR0MsV0FBVyxDQUFDRixTQUFELENBQTFCOztRQUNJQyxRQUFRLEtBQUssUUFBakIsRUFBMkI7VUFDckJELFNBQVMsWUFBWXZaLElBQXpCLEVBQStCO2VBQ3RCLE1BQVA7T0FERixNQUVPLElBQUl1WixTQUFTLFlBQVk4QixNQUF6QixFQUFpQztlQUMvQixRQUFQOzs7O1dBR0c3QixRQUFQO0dBbGdCMkQ7Ozs7V0F1Z0JwRGtCLHdCQUFULENBQWtDcnFCLEtBQWxDLEVBQXlDO1FBQ25DMGIsSUFBSSxHQUFHNE4sY0FBYyxDQUFDdHBCLEtBQUQsQ0FBekI7O1lBQ1EwYixJQUFSO1dBQ08sT0FBTDtXQUNLLFFBQUw7ZUFDUyxRQUFRQSxJQUFmOztXQUNHLFNBQUw7V0FDSyxNQUFMO1dBQ0ssUUFBTDtlQUNTLE9BQU9BLElBQWQ7OztlQUVPQSxJQUFQOztHQWxoQnVEOzs7V0F1aEJwRG1PLFlBQVQsQ0FBc0JYLFNBQXRCLEVBQWlDO1FBQzNCLENBQUNBLFNBQVMsQ0FBQy9hLFdBQVgsSUFBMEIsQ0FBQythLFNBQVMsQ0FBQy9hLFdBQVYsQ0FBc0JpSyxJQUFyRCxFQUEyRDthQUNsRGdPLFNBQVA7OztXQUVLOEMsU0FBUyxDQUFDL2EsV0FBVixDQUFzQmlLLElBQTdCOzs7RUFHRmlPLGNBQWMsQ0FBQ3BCLGNBQWYsR0FBZ0NBLGdCQUFoQztFQUNBb0IsY0FBYyxDQUFDWCxpQkFBZixHQUFtQ1QsZ0JBQWMsQ0FBQ1MsaUJBQWxEO0VBQ0FXLGNBQWMsQ0FBQzRFLFNBQWYsR0FBMkI1RSxjQUEzQjtTQUVPQSxjQUFQO0NBbGlCRjs7QUMxQkEsU0FBUzZFLGFBQVQsR0FBeUI7O0FBQ3pCLFNBQVNDLHNCQUFULEdBQWtDOztBQUNsQ0Esc0JBQXNCLENBQUN6RixpQkFBdkIsR0FBMkN3RixhQUEzQzs7QUFFQSw0QkFBYyxHQUFHLFlBQVc7V0FDakJFLElBQVQsQ0FBY3RSLEtBQWQsRUFBcUI4TyxRQUFyQixFQUErQnZELGFBQS9CLEVBQThDRCxRQUE5QyxFQUF3RHlELFlBQXhELEVBQXNFQyxNQUF0RSxFQUE4RTtRQUN4RUEsTUFBTSxLQUFLL0Qsc0JBQWYsRUFBcUM7Ozs7O1FBSWpDTCxHQUFHLEdBQUcsSUFBSTlTLEtBQUosQ0FDUix5RkFDQSwrQ0FEQSxHQUVBLGdEQUhRLENBQVY7SUFLQThTLEdBQUcsQ0FBQ3RNLElBQUosR0FBVyxxQkFBWDtVQUNNc00sR0FBTjs7QUFFRjBHLEVBQUFBLElBQUksQ0FBQ3pDLFVBQUwsR0FBa0J5QyxJQUFsQjs7V0FDU0MsT0FBVCxHQUFtQjtXQUNWRCxJQUFQOzs7O01BSUUvRSxjQUFjLEdBQUc7SUFDbkJDLEtBQUssRUFBRThFLElBRFk7SUFFbkI1RSxJQUFJLEVBQUU0RSxJQUZhO0lBR25CM0UsSUFBSSxFQUFFMkUsSUFIYTtJQUluQjFFLE1BQU0sRUFBRTBFLElBSlc7SUFLbkJ2SixNQUFNLEVBQUV1SixJQUxXO0lBTW5CekUsTUFBTSxFQUFFeUUsSUFOVztJQU9uQnhFLE1BQU0sRUFBRXdFLElBUFc7SUFTbkJ2RSxHQUFHLEVBQUV1RSxJQVRjO0lBVW5CckUsT0FBTyxFQUFFc0UsT0FWVTtJQVduQnBFLE9BQU8sRUFBRW1FLElBWFU7SUFZbkJqRSxXQUFXLEVBQUVpRSxJQVpNO0lBYW5CL0QsVUFBVSxFQUFFZ0UsT0FiTztJQWNuQjlELElBQUksRUFBRTZELElBZGE7SUFlbkIzRCxRQUFRLEVBQUU0RCxPQWZTO0lBZ0JuQjFELEtBQUssRUFBRTBELE9BaEJZO0lBaUJuQnhELFNBQVMsRUFBRXdELE9BakJRO0lBa0JuQnRELEtBQUssRUFBRXNELE9BbEJZO0lBbUJuQnBELEtBQUssRUFBRW9ELE9BbkJZO0lBcUJuQnBHLGNBQWMsRUFBRWtHLHNCQXJCRztJQXNCbkJ6RixpQkFBaUIsRUFBRXdGO0dBdEJyQjtFQXlCQTdFLGNBQWMsQ0FBQzRFLFNBQWYsR0FBMkI1RSxjQUEzQjtTQUVPQSxjQUFQO0NBL0NGOzs7Ozs7Ozs7TUNSSTlVLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxRQUFaLEtBQXlCLFlBQTdCLEVBQTJDO1FBQ3JDZ1ksT0FBTyxHQUFHMVgsT0FBZCxDQUR5Qzs7O1FBS3JDOFQsbUJBQW1CLEdBQUcsSUFBMUI7SUFDQW5qQixjQUFBLEdBQWlCdVAsdUJBQW9DLENBQUN3WCxPQUFPLENBQUN4RyxTQUFULEVBQW9CNEMsbUJBQXBCLENBQXJEO0dBTkYsTUFPTzs7O0lBR0xuakIsY0FBQSxHQUFpQnlQLHdCQUFxQyxFQUF0RDs7Ozs7V0NqQk9MLHNCQUFULENBQWdDTSxHQUFoQyxFQUFxQztXQUM1QkEsR0FBRyxJQUFJQSxHQUFHLENBQUNDLFVBQVgsR0FBd0JELEdBQXhCLEdBQThCO01BQ25DelAsT0FBTyxFQUFFeVA7S0FEWDs7O0VBS0YxUCxjQUFBLEdBQWlCb1Asc0JBQWpCOzs7OztBQ05BO0VBRUFuUSxrQkFBQSxHQUFxQixJQUFyQjtFQUNBQSxlQUFBLEdBQWtCMnBCLFFBQWxCOztXQUVTQSxRQUFULENBQWtCckUsT0FBbEIsRUFBMkJ6TCxTQUEzQixFQUFzQztRQUNoQ3lMLE9BQU8sQ0FBQ3NFLFNBQVosRUFBdUIsT0FBTyxDQUFDLENBQUMvUCxTQUFGLElBQWV5TCxPQUFPLENBQUNzRSxTQUFSLENBQWtCQyxRQUFsQixDQUEyQmhRLFNBQTNCLENBQXRCLENBQXZCLEtBQXdGLE9BQU8sQ0FBQyxPQUFPeUwsT0FBTyxDQUFDekwsU0FBUixDQUFrQmlRLE9BQWxCLElBQTZCeEUsT0FBTyxDQUFDekwsU0FBNUMsSUFBeUQsR0FBMUQsRUFBK0RsTCxPQUEvRCxDQUF1RSxNQUFNa0wsU0FBTixHQUFrQixHQUF6RixNQUFrRyxDQUFDLENBQTFHOzs7RUFHMUY5WSxjQUFBLEdBQWlCZixPQUFPLENBQUMsU0FBRCxDQUF4Qjs7Ozs7QUNUQTtFQUlBQSxrQkFBQSxHQUFxQixJQUFyQjtFQUNBQSxlQUFBLEdBQWtCK3BCLFFBQWxCOztNQUVJQyxTQUFTLEdBQUc3WixxQkFBc0IsQ0FBQ0MsVUFBRCxDQUF0Qzs7V0FFUzJaLFFBQVQsQ0FBa0J6RSxPQUFsQixFQUEyQnpMLFNBQTNCLEVBQXNDO1FBQ2hDeUwsT0FBTyxDQUFDc0UsU0FBWixFQUF1QnRFLE9BQU8sQ0FBQ3NFLFNBQVIsQ0FBa0JLLEdBQWxCLENBQXNCcFEsU0FBdEIsRUFBdkIsS0FBNkQsSUFBSSxDQUFDLENBQUMsR0FBR21RLFNBQVMsQ0FBQ2hwQixPQUFkLEVBQXVCc2tCLE9BQXZCLEVBQWdDekwsU0FBaEMsQ0FBTCxFQUFpRCxJQUFJLE9BQU95TCxPQUFPLENBQUN6TCxTQUFmLEtBQTZCLFFBQWpDLEVBQTJDeUwsT0FBTyxDQUFDekwsU0FBUixHQUFvQnlMLE9BQU8sQ0FBQ3pMLFNBQVIsR0FBb0IsR0FBcEIsR0FBMEJBLFNBQTlDLENBQTNDLEtBQXdHeUwsT0FBTyxDQUFDNEUsWUFBUixDQUFxQixPQUFyQixFQUE4QixDQUFDNUUsT0FBTyxDQUFDekwsU0FBUixJQUFxQnlMLE9BQU8sQ0FBQ3pMLFNBQVIsQ0FBa0JpUSxPQUF2QyxJQUFrRCxFQUFuRCxJQUF5RCxHQUF6RCxHQUErRGpRLFNBQTdGOzs7RUFHeE45WSxjQUFBLEdBQWlCZixPQUFPLENBQUMsU0FBRCxDQUF4Qjs7OztBQ1hBLFNBQVNtcUIsZ0JBQVQsQ0FBMEJDLFNBQTFCLEVBQXFDQyxhQUFyQyxFQUFvRDtTQUMzQ0QsU0FBUyxDQUFDNWEsT0FBVixDQUFrQixJQUFJNlosTUFBSixDQUFXLFlBQVlnQixhQUFaLEdBQTRCLFdBQXZDLEVBQW9ELEdBQXBELENBQWxCLEVBQTRFLElBQTVFLEVBQWtGN2EsT0FBbEYsQ0FBMEYsTUFBMUYsRUFBa0csR0FBbEcsRUFBdUdBLE9BQXZHLENBQStHLFlBQS9HLEVBQTZILEVBQTdILENBQVA7OztBQUdGLGVBQWMsR0FBRyxTQUFTOGEsV0FBVCxDQUFxQmhGLE9BQXJCLEVBQThCekwsU0FBOUIsRUFBeUM7TUFDcER5TCxPQUFPLENBQUNzRSxTQUFaLEVBQXVCdEUsT0FBTyxDQUFDc0UsU0FBUixDQUFrQlcsTUFBbEIsQ0FBeUIxUSxTQUF6QixFQUF2QixLQUFnRSxJQUFJLE9BQU95TCxPQUFPLENBQUN6TCxTQUFmLEtBQTZCLFFBQWpDLEVBQTJDeUwsT0FBTyxDQUFDekwsU0FBUixHQUFvQnNRLGdCQUFnQixDQUFDN0UsT0FBTyxDQUFDekwsU0FBVCxFQUFvQkEsU0FBcEIsQ0FBcEMsQ0FBM0MsS0FBbUh5TCxPQUFPLENBQUM0RSxZQUFSLENBQXFCLE9BQXJCLEVBQThCQyxnQkFBZ0IsQ0FBQzdFLE9BQU8sQ0FBQ3pMLFNBQVIsSUFBcUJ5TCxPQUFPLENBQUN6TCxTQUFSLENBQWtCaVEsT0FBdkMsSUFBa0QsRUFBbkQsRUFBdURqUSxTQUF2RCxDQUE5QztDQURyTDs7QUNOQTs7Ozs7O0FBT0EsU0FBUzJRLGtCQUFULEdBQThCOztNQUV4QnhOLEtBQUssR0FBRyxLQUFLeFEsV0FBTCxDQUFpQmllLHdCQUFqQixDQUEwQyxLQUFLdFMsS0FBL0MsRUFBc0QsS0FBSzZFLEtBQTNELENBQVo7O01BQ0lBLEtBQUssS0FBSyxJQUFWLElBQWtCQSxLQUFLLEtBQUtsUSxTQUFoQyxFQUEyQztTQUNwQ2lRLFFBQUwsQ0FBY0MsS0FBZDs7OztBQUlKLFNBQVMwTix5QkFBVCxDQUFtQ0MsU0FBbkMsRUFBOEM7OztXQUduQ0MsT0FBVCxDQUFpQkMsU0FBakIsRUFBNEI7UUFDdEI3TixLQUFLLEdBQUcsS0FBS3hRLFdBQUwsQ0FBaUJpZSx3QkFBakIsQ0FBMENFLFNBQTFDLEVBQXFERSxTQUFyRCxDQUFaO1dBQ083TixLQUFLLEtBQUssSUFBVixJQUFrQkEsS0FBSyxLQUFLbFEsU0FBNUIsR0FBd0NrUSxLQUF4QyxHQUFnRCxJQUF2RDtHQUwwQzs7O09BUXZDRCxRQUFMLENBQWM2TixPQUFPLENBQUNuYyxJQUFSLENBQWEsSUFBYixDQUFkOzs7QUFHRixTQUFTcWMsbUJBQVQsQ0FBNkJILFNBQTdCLEVBQXdDSSxTQUF4QyxFQUFtRDtNQUM3QztRQUNFQyxTQUFTLEdBQUcsS0FBSzdTLEtBQXJCO1FBQ0kwUyxTQUFTLEdBQUcsS0FBSzdOLEtBQXJCO1NBQ0s3RSxLQUFMLEdBQWF3UyxTQUFiO1NBQ0szTixLQUFMLEdBQWErTixTQUFiO1NBQ0tFLDJCQUFMLEdBQW1DLElBQW5DO1NBQ0tDLHVCQUFMLEdBQStCLEtBQUtDLHVCQUFMLENBQzdCSCxTQUQ2QixFQUU3QkgsU0FGNkIsQ0FBL0I7R0FORixTQVVVO1NBQ0gxUyxLQUFMLEdBQWE2UyxTQUFiO1NBQ0toTyxLQUFMLEdBQWE2TixTQUFiOzs7Ozs7QUFNSkwsa0JBQWtCLENBQUNZLDRCQUFuQixHQUFrRCxJQUFsRDtBQUNBVix5QkFBeUIsQ0FBQ1UsNEJBQTFCLEdBQXlELElBQXpEO0FBQ0FOLG1CQUFtQixDQUFDTSw0QkFBcEIsR0FBbUQsSUFBbkQ7O0FBRUEsU0FBU0MsUUFBVCxDQUFrQmpSLFNBQWxCLEVBQTZCO01BQ3ZCMVosU0FBUyxHQUFHMFosU0FBUyxDQUFDMVosU0FBMUI7O01BRUksQ0FBQ0EsU0FBRCxJQUFjLENBQUNBLFNBQVMsQ0FBQzRxQixnQkFBN0IsRUFBK0M7VUFDdkMsSUFBSXJiLEtBQUosQ0FBVSxvQ0FBVixDQUFOOzs7TUFJQSxPQUFPbUssU0FBUyxDQUFDcVEsd0JBQWpCLEtBQThDLFVBQTlDLElBQ0EsT0FBTy9wQixTQUFTLENBQUN5cUIsdUJBQWpCLEtBQTZDLFVBRi9DLEVBR0U7V0FDTy9RLFNBQVA7R0FYeUI7Ozs7O01BaUJ2Qm1SLGtCQUFrQixHQUFHLElBQXpCO01BQ0lDLHlCQUF5QixHQUFHLElBQWhDO01BQ0lDLG1CQUFtQixHQUFHLElBQTFCOztNQUNJLE9BQU8vcUIsU0FBUyxDQUFDOHBCLGtCQUFqQixLQUF3QyxVQUE1QyxFQUF3RDtJQUN0RGUsa0JBQWtCLEdBQUcsb0JBQXJCO0dBREYsTUFFTyxJQUFJLE9BQU83cUIsU0FBUyxDQUFDZ3JCLHlCQUFqQixLQUErQyxVQUFuRCxFQUErRDtJQUNwRUgsa0JBQWtCLEdBQUcsMkJBQXJCOzs7TUFFRSxPQUFPN3FCLFNBQVMsQ0FBQ2dxQix5QkFBakIsS0FBK0MsVUFBbkQsRUFBK0Q7SUFDN0RjLHlCQUF5QixHQUFHLDJCQUE1QjtHQURGLE1BRU8sSUFBSSxPQUFPOXFCLFNBQVMsQ0FBQ2lyQixnQ0FBakIsS0FBc0QsVUFBMUQsRUFBc0U7SUFDM0VILHlCQUF5QixHQUFHLGtDQUE1Qjs7O01BRUUsT0FBTzlxQixTQUFTLENBQUNvcUIsbUJBQWpCLEtBQXlDLFVBQTdDLEVBQXlEO0lBQ3ZEVyxtQkFBbUIsR0FBRyxxQkFBdEI7R0FERixNQUVPLElBQUksT0FBTy9xQixTQUFTLENBQUNrckIsMEJBQWpCLEtBQWdELFVBQXBELEVBQWdFO0lBQ3JFSCxtQkFBbUIsR0FBRyw0QkFBdEI7OztNQUdBRixrQkFBa0IsS0FBSyxJQUF2QixJQUNBQyx5QkFBeUIsS0FBSyxJQUQ5QixJQUVBQyxtQkFBbUIsS0FBSyxJQUgxQixFQUlFO1FBQ0kvSCxhQUFhLEdBQUd0SixTQUFTLENBQUNsYyxXQUFWLElBQXlCa2MsU0FBUyxDQUFDM0QsSUFBdkQ7UUFDSW9WLFVBQVUsR0FDWixPQUFPelIsU0FBUyxDQUFDcVEsd0JBQWpCLEtBQThDLFVBQTlDLEdBQ0ksNEJBREosR0FFSSwyQkFITjtVQUtNeGEsS0FBSyxDQUNULDZGQUNFeVQsYUFERixHQUVFLFFBRkYsR0FHRW1JLFVBSEYsR0FJRSxxREFKRixJQUtHTixrQkFBa0IsS0FBSyxJQUF2QixHQUE4QixTQUFTQSxrQkFBdkMsR0FBNEQsRUFML0QsS0FNR0MseUJBQXlCLEtBQUssSUFBOUIsR0FDRyxTQUFTQSx5QkFEWixHQUVHLEVBUk4sS0FTR0MsbUJBQW1CLEtBQUssSUFBeEIsR0FBK0IsU0FBU0EsbUJBQXhDLEdBQThELEVBVGpFLElBVUUsbUZBVkYsR0FXRSxxREFaTyxDQUFYO0dBOUN5Qjs7Ozs7TUFpRXZCLE9BQU9yUixTQUFTLENBQUNxUSx3QkFBakIsS0FBOEMsVUFBbEQsRUFBOEQ7SUFDNUQvcEIsU0FBUyxDQUFDOHBCLGtCQUFWLEdBQStCQSxrQkFBL0I7SUFDQTlwQixTQUFTLENBQUNncUIseUJBQVYsR0FBc0NBLHlCQUF0QztHQW5FeUI7Ozs7O01BeUV2QixPQUFPaHFCLFNBQVMsQ0FBQ3lxQix1QkFBakIsS0FBNkMsVUFBakQsRUFBNkQ7UUFDdkQsT0FBT3pxQixTQUFTLENBQUNvckIsa0JBQWpCLEtBQXdDLFVBQTVDLEVBQXdEO1lBQ2hELElBQUk3YixLQUFKLENBQ0osbUhBREksQ0FBTjs7O0lBS0Z2UCxTQUFTLENBQUNvcUIsbUJBQVYsR0FBZ0NBLG1CQUFoQztRQUVJZ0Isa0JBQWtCLEdBQUdwckIsU0FBUyxDQUFDb3JCLGtCQUFuQzs7SUFFQXByQixTQUFTLENBQUNvckIsa0JBQVYsR0FBK0IsU0FBU0MsMEJBQVQsQ0FDN0JmLFNBRDZCLEVBRTdCSCxTQUY2QixFQUc3Qm1CLGFBSDZCLEVBSTdCOzs7Ozs7Ozs7VUFTSUMsUUFBUSxHQUFHLEtBQUtoQiwyQkFBTCxHQUNYLEtBQUtDLHVCQURNLEdBRVhjLGFBRko7TUFJQUYsa0JBQWtCLENBQUNsckIsSUFBbkIsQ0FBd0IsSUFBeEIsRUFBOEJvcUIsU0FBOUIsRUFBeUNILFNBQXpDLEVBQW9Eb0IsUUFBcEQ7S0FqQkY7OztTQXFCSzdSLFNBQVA7Ozs7Ozs7O0FDMUpGO0VBRUFwYSxrQkFBQSxHQUFxQixJQUFyQjtFQUNBQSx1QkFBQSxHQUEwQkEscUJBQUEsR0FBd0IsS0FBSyxDQUF2RDs7TUFFSWtzQixVQUFVLEdBQUcvYixzQkFBc0IsQ0FBQ0MsU0FBRCxDQUF2Qzs7V0FFU0Qsc0JBQVQsQ0FBZ0NNLEdBQWhDLEVBQXFDO1dBQVNBLEdBQUcsSUFBSUEsR0FBRyxDQUFDQyxVQUFYLEdBQXdCRCxHQUF4QixHQUE4QjtNQUFFelAsT0FBTyxFQUFFeVA7S0FBaEQ7OztNQUVuQzBiLGFBQWEsR0FBR3ZjLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxRQUFaLEtBQXlCLFlBQXpCLEdBQXdDb2MsVUFBVSxDQUFDbHJCLE9BQVgsQ0FBbUJrbEIsU0FBbkIsQ0FBNkIsQ0FBQ2dHLFVBQVUsQ0FBQ2xyQixPQUFYLENBQW1CK2pCLE1BQXBCLEVBQTRCbUgsVUFBVSxDQUFDbHJCLE9BQVgsQ0FBbUJvbEIsS0FBbkIsQ0FBeUI7SUFDNUlnRyxLQUFLLEVBQUVGLFVBQVUsQ0FBQ2xyQixPQUFYLENBQW1CK2pCLE1BRGtIO0lBRTVJc0gsSUFBSSxFQUFFSCxVQUFVLENBQUNsckIsT0FBWCxDQUFtQitqQjtHQUYwRixFQUdsSGlDLFVBSHNGLENBQTdCLENBQXhDLEdBR0YsSUFIbEI7RUFJQWhuQixxQkFBQSxHQUF3Qm1zQixhQUF4QjtNQUNJRyxlQUFlLEdBQUcxYyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsUUFBWixLQUF5QixZQUF6QixHQUF3Q29jLFVBQVUsQ0FBQ2xyQixPQUFYLENBQW1Ca2xCLFNBQW5CLENBQTZCLENBQUNnRyxVQUFVLENBQUNsckIsT0FBWCxDQUFtQmdrQixNQUFwQixFQUE0QmtILFVBQVUsQ0FBQ2xyQixPQUFYLENBQW1Cb2xCLEtBQW5CLENBQXlCO0lBQzlJZ0csS0FBSyxFQUFFRixVQUFVLENBQUNsckIsT0FBWCxDQUFtQmdrQixNQURvSDtJQUU5SXFILElBQUksRUFBRUgsVUFBVSxDQUFDbHJCLE9BQVgsQ0FBbUJna0IsTUFGcUg7SUFHOUl1SCxNQUFNLEVBQUVMLFVBQVUsQ0FBQ2xyQixPQUFYLENBQW1CZ2tCO0dBSDBGLENBQTVCLEVBSXZGa0gsVUFBVSxDQUFDbHJCLE9BQVgsQ0FBbUJvbEIsS0FBbkIsQ0FBeUI7SUFDM0JnRyxLQUFLLEVBQUVGLFVBQVUsQ0FBQ2xyQixPQUFYLENBQW1CZ2tCLE1BREM7SUFFM0J3SCxTQUFTLEVBQUVOLFVBQVUsQ0FBQ2xyQixPQUFYLENBQW1CZ2tCLE1BRkg7SUFHM0J5SCxXQUFXLEVBQUVQLFVBQVUsQ0FBQ2xyQixPQUFYLENBQW1CZ2tCLE1BSEw7SUFJM0JxSCxJQUFJLEVBQUVILFVBQVUsQ0FBQ2xyQixPQUFYLENBQW1CZ2tCLE1BSkU7SUFLM0IwSCxRQUFRLEVBQUVSLFVBQVUsQ0FBQ2xyQixPQUFYLENBQW1CZ2tCLE1BTEY7SUFNM0IySCxVQUFVLEVBQUVULFVBQVUsQ0FBQ2xyQixPQUFYLENBQW1CZ2tCO0dBTjdCLENBSnVGLENBQTdCLENBQXhDLEdBV2YsSUFYUDtFQVlBaGxCLHVCQUFBLEdBQTBCc3NCLGVBQTFCOzs7Ozs7O0FDMUJBO0VBRUF0c0Isa0JBQUEsR0FBcUIsSUFBckI7RUFDQUEsZUFBQSxHQUFrQkEsZUFBQSxHQUFrQkEsZUFBQSxHQUFrQkEsZ0JBQUEsR0FBbUJBLGNBQUEsR0FBaUJBLGlCQUFBLEdBQW9CLEtBQUssQ0FBbkg7O01BRUlzcEIsV0FBUyxHQUFHc0QsdUJBQXVCLENBQUN4YyxTQUFELENBQXZDOztNQUVJeWMsTUFBTSxHQUFHMWMsc0JBQXNCLENBQUNHLGNBQUQsQ0FBbkM7O01BRUl3YyxTQUFTLEdBQUczYyxzQkFBc0IsQ0FBQ0ssaUJBQUQsQ0FBdEM7O1dBTVNMLHNCQUFULENBQWdDTSxHQUFoQyxFQUFxQztXQUFTQSxHQUFHLElBQUlBLEdBQUcsQ0FBQ0MsVUFBWCxHQUF3QkQsR0FBeEIsR0FBOEI7TUFBRXpQLE9BQU8sRUFBRXlQO0tBQWhEOzs7V0FFOUJtYyx1QkFBVCxDQUFpQ25jLEdBQWpDLEVBQXNDO1FBQU1BLEdBQUcsSUFBSUEsR0FBRyxDQUFDQyxVQUFmLEVBQTJCO2FBQVNELEdBQVA7S0FBN0IsTUFBZ0Q7VUFBTXNjLE1BQU0sR0FBRyxFQUFiOztVQUFxQnRjLEdBQUcsSUFBSSxJQUFYLEVBQWlCO2FBQU8sSUFBSXlFLEdBQVQsSUFBZ0J6RSxHQUFoQixFQUFxQjtjQUFNbkUsTUFBTSxDQUFDNUwsU0FBUCxDQUFpQnlVLGNBQWpCLENBQWdDdlUsSUFBaEMsQ0FBcUM2UCxHQUFyQyxFQUEwQ3lFLEdBQTFDLENBQUosRUFBb0Q7Z0JBQU04WCxJQUFJLEdBQUcxZ0IsTUFBTSxDQUFDc1IsY0FBUCxJQUF5QnRSLE1BQU0sQ0FBQzJnQix3QkFBaEMsR0FBMkQzZ0IsTUFBTSxDQUFDMmdCLHdCQUFQLENBQWdDeGMsR0FBaEMsRUFBcUN5RSxHQUFyQyxDQUEzRCxHQUF1RyxFQUFsSDs7Z0JBQTBIOFgsSUFBSSxDQUFDOWYsR0FBTCxJQUFZOGYsSUFBSSxDQUFDN2YsR0FBckIsRUFBMEI7Y0FBRWIsTUFBTSxDQUFDc1IsY0FBUCxDQUFzQm1QLE1BQXRCLEVBQThCN1gsR0FBOUIsRUFBbUM4WCxJQUFuQzthQUE1QixNQUE2RTtjQUFFRCxNQUFNLENBQUM3WCxHQUFELENBQU4sR0FBY3pFLEdBQUcsQ0FBQ3lFLEdBQUQsQ0FBakI7Ozs7OztNQUFnQzZYLE1BQU0sQ0FBQy9yQixPQUFQLEdBQWlCeVAsR0FBakI7YUFBNkJzYyxNQUFQOzs7O1dBRTdiRyw2QkFBVCxDQUF1Q2pZLE1BQXZDLEVBQStDa1ksUUFBL0MsRUFBeUQ7UUFBTWxZLE1BQU0sSUFBSSxJQUFkLEVBQW9CLE9BQU8sRUFBUDtRQUFlRixNQUFNLEdBQUcsRUFBYjtRQUFxQnFZLFVBQVUsR0FBRzlnQixNQUFNLENBQUNxSixJQUFQLENBQVlWLE1BQVosQ0FBakI7UUFBMENDLEdBQUosRUFBU0YsQ0FBVDs7U0FBaUJBLENBQUMsR0FBRyxDQUFULEVBQVlBLENBQUMsR0FBR29ZLFVBQVUsQ0FBQ2h0QixNQUEzQixFQUFtQzRVLENBQUMsRUFBcEMsRUFBd0M7TUFBRUUsR0FBRyxHQUFHa1ksVUFBVSxDQUFDcFksQ0FBRCxDQUFoQjtVQUF5Qm1ZLFFBQVEsQ0FBQ3hlLE9BQVQsQ0FBaUJ1RyxHQUFqQixLQUF5QixDQUE3QixFQUFnQztNQUFVSCxNQUFNLENBQUNHLEdBQUQsQ0FBTixHQUFjRCxNQUFNLENBQUNDLEdBQUQsQ0FBcEI7OztXQUFvQ0gsTUFBUDs7O1dBRTFSNUksY0FBVCxDQUF3QkMsUUFBeEIsRUFBa0NDLFVBQWxDLEVBQThDO0lBQUVELFFBQVEsQ0FBQzFMLFNBQVQsR0FBcUI0TCxNQUFNLENBQUNDLE1BQVAsQ0FBY0YsVUFBVSxDQUFDM0wsU0FBekIsQ0FBckI7SUFBMEQwTCxRQUFRLENBQUMxTCxTQUFULENBQW1COEwsV0FBbkIsR0FBaUNKLFFBQWpDO0lBQTJDQSxRQUFRLENBQUNLLFNBQVQsR0FBcUJKLFVBQXJCOzs7TUFFakpnaEIsU0FBUyxHQUFHLFdBQWhCO0VBQ0FydEIsaUJBQUEsR0FBb0JxdEIsU0FBcEI7TUFDSUMsTUFBTSxHQUFHLFFBQWI7RUFDQXR0QixjQUFBLEdBQWlCc3RCLE1BQWpCO01BQ0lDLFFBQVEsR0FBRyxVQUFmO0VBQ0F2dEIsZ0JBQUEsR0FBbUJ1dEIsUUFBbkI7TUFDSUMsT0FBTyxHQUFHLFNBQWQ7RUFDQXh0QixlQUFBLEdBQWtCd3RCLE9BQWxCO01BQ0lDLE9BQU8sR0FBRyxTQUFkOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBaUdBenRCLGVBQUEsR0FBa0J5dEIsT0FBbEI7O01BRUlDLFVBQVU7O1lBRUpDLGdCQUFWLEVBQTRCO0lBQzFCeGhCLGNBQWMsQ0FBQ3VoQixVQUFELEVBQWFDLGdCQUFiLENBQWQ7O2FBRVNELFVBQVQsQ0FBb0J2VixLQUFwQixFQUEyQnlWLE9BQTNCLEVBQW9DO1VBQzlCamUsS0FBSjs7TUFFQUEsS0FBSyxHQUFHZ2UsZ0JBQWdCLENBQUMvc0IsSUFBakIsQ0FBc0IsSUFBdEIsRUFBNEJ1WCxLQUE1QixFQUFtQ3lWLE9BQW5DLEtBQStDLElBQXZEO1VBQ0lDLFdBQVcsR0FBR0QsT0FBTyxDQUFDRSxlQUExQixDQUprQzs7VUFNOUJDLE1BQU0sR0FBR0YsV0FBVyxJQUFJLENBQUNBLFdBQVcsQ0FBQ0csVUFBNUIsR0FBeUM3VixLQUFLLENBQUNpVSxLQUEvQyxHQUF1RGpVLEtBQUssQ0FBQzRWLE1BQTFFO1VBQ0lFLGFBQUo7TUFDQXRlLEtBQUssQ0FBQ3VlLFlBQU4sR0FBcUIsSUFBckI7O1VBRUkvVixLQUFLLENBQUNnVyxFQUFWLEVBQWM7WUFDUkosTUFBSixFQUFZO1VBQ1ZFLGFBQWEsR0FBR1gsTUFBaEI7VUFDQTNkLEtBQUssQ0FBQ3VlLFlBQU4sR0FBcUJYLFFBQXJCO1NBRkYsTUFHTztVQUNMVSxhQUFhLEdBQUdULE9BQWhCOztPQUxKLE1BT087WUFDRHJWLEtBQUssQ0FBQ2lXLGFBQU4sSUFBdUJqVyxLQUFLLENBQUNrVyxZQUFqQyxFQUErQztVQUM3Q0osYUFBYSxHQUFHWixTQUFoQjtTQURGLE1BRU87VUFDTFksYUFBYSxHQUFHWCxNQUFoQjs7OztNQUlKM2QsS0FBSyxDQUFDcU4sS0FBTixHQUFjO1FBQ1pzUixNQUFNLEVBQUVMO09BRFY7TUFHQXRlLEtBQUssQ0FBQzRlLFlBQU4sR0FBcUIsSUFBckI7YUFDTzVlLEtBQVA7OztRQUdFNmUsTUFBTSxHQUFHZCxVQUFVLENBQUNodEIsU0FBeEI7O0lBRUE4dEIsTUFBTSxDQUFDQyxlQUFQLEdBQXlCLFNBQVNBLGVBQVQsR0FBMkI7YUFDM0M7UUFDTFgsZUFBZSxFQUFFLElBRFo7O09BQVA7S0FERjs7SUFPQUosVUFBVSxDQUFDakQsd0JBQVgsR0FBc0MsU0FBU0Esd0JBQVQsQ0FBa0NpRSxJQUFsQyxFQUF3QzdELFNBQXhDLEVBQW1EO1VBQ25GOEQsTUFBTSxHQUFHRCxJQUFJLENBQUNQLEVBQWxCOztVQUVJUSxNQUFNLElBQUk5RCxTQUFTLENBQUN5RCxNQUFWLEtBQXFCakIsU0FBbkMsRUFBOEM7ZUFDckM7VUFDTGlCLE1BQU0sRUFBRWhCO1NBRFY7OzthQUtLLElBQVA7S0FURixDQTVDMEI7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQXdFMUJrQixNQUFNLENBQUNJLGlCQUFQLEdBQTJCLFNBQVNBLGlCQUFULEdBQTZCO1dBQ2pEQyxZQUFMLENBQWtCLElBQWxCLEVBQXdCLEtBQUtYLFlBQTdCO0tBREY7O0lBSUFNLE1BQU0sQ0FBQzFDLGtCQUFQLEdBQTRCLFNBQVNBLGtCQUFULENBQTRCZCxTQUE1QixFQUF1QztVQUM3RDhELFVBQVUsR0FBRyxJQUFqQjs7VUFFSTlELFNBQVMsS0FBSyxLQUFLN1MsS0FBdkIsRUFBOEI7WUFDeEJtVyxNQUFNLEdBQUcsS0FBS3RSLEtBQUwsQ0FBV3NSLE1BQXhCOztZQUVJLEtBQUtuVyxLQUFMLENBQVdnVyxFQUFmLEVBQW1CO2NBQ2JHLE1BQU0sS0FBS2YsUUFBWCxJQUF1QmUsTUFBTSxLQUFLZCxPQUF0QyxFQUErQztZQUM3Q3NCLFVBQVUsR0FBR3ZCLFFBQWI7O1NBRkosTUFJTztjQUNEZSxNQUFNLEtBQUtmLFFBQVgsSUFBdUJlLE1BQU0sS0FBS2QsT0FBdEMsRUFBK0M7WUFDN0NzQixVQUFVLEdBQUdyQixPQUFiOzs7OztXQUtEb0IsWUFBTCxDQUFrQixLQUFsQixFQUF5QkMsVUFBekI7S0FqQkY7O0lBb0JBTixNQUFNLENBQUNPLG9CQUFQLEdBQThCLFNBQVNBLG9CQUFULEdBQWdDO1dBQ3ZEQyxrQkFBTDtLQURGOztJQUlBUixNQUFNLENBQUNTLFdBQVAsR0FBcUIsU0FBU0EsV0FBVCxHQUF1QjtVQUN0Q0MsT0FBTyxHQUFHLEtBQUsvVyxLQUFMLENBQVcrVyxPQUF6QjtVQUNJN0MsSUFBSixFQUFVRCxLQUFWLEVBQWlCMkIsTUFBakI7TUFDQTFCLElBQUksR0FBR0QsS0FBSyxHQUFHMkIsTUFBTSxHQUFHbUIsT0FBeEI7O1VBRUlBLE9BQU8sSUFBSSxJQUFYLElBQW1CLE9BQU9BLE9BQVAsS0FBbUIsUUFBMUMsRUFBb0Q7UUFDbEQ3QyxJQUFJLEdBQUc2QyxPQUFPLENBQUM3QyxJQUFmO1FBQ0FELEtBQUssR0FBRzhDLE9BQU8sQ0FBQzlDLEtBQWhCO1FBQ0EyQixNQUFNLEdBQUdtQixPQUFPLENBQUNuQixNQUFqQjs7O2FBR0s7UUFDTDFCLElBQUksRUFBRUEsSUFERDtRQUVMRCxLQUFLLEVBQUVBLEtBRkY7UUFHTDJCLE1BQU0sRUFBRUE7T0FIVjtLQVhGOztJQWtCQVMsTUFBTSxDQUFDSyxZQUFQLEdBQXNCLFNBQVNBLFlBQVQsQ0FBc0JNLFFBQXRCLEVBQWdDTCxVQUFoQyxFQUE0QztVQUM1REssUUFBUSxLQUFLLEtBQUssQ0FBdEIsRUFBeUI7UUFDdkJBLFFBQVEsR0FBRyxLQUFYOzs7VUFHRUwsVUFBVSxLQUFLLElBQW5CLEVBQXlCOzthQUVsQkUsa0JBQUw7O1lBRUlwSixJQUFJLEdBQUdrSCxTQUFTLENBQUM5ckIsT0FBVixDQUFrQm91QixXQUFsQixDQUE4QixJQUE5QixDQUFYOztZQUVJTixVQUFVLEtBQUt2QixRQUFuQixFQUE2QjtlQUN0QjhCLFlBQUwsQ0FBa0J6SixJQUFsQixFQUF3QnVKLFFBQXhCO1NBREYsTUFFTztlQUNBRyxXQUFMLENBQWlCMUosSUFBakI7O09BVEosTUFXTyxJQUFJLEtBQUt6TixLQUFMLENBQVdpVyxhQUFYLElBQTRCLEtBQUtwUixLQUFMLENBQVdzUixNQUFYLEtBQXNCaEIsTUFBdEQsRUFBOEQ7YUFDOUR2USxRQUFMLENBQWM7VUFDWnVSLE1BQU0sRUFBRWpCO1NBRFY7O0tBakJKOztJQXVCQW1CLE1BQU0sQ0FBQ2EsWUFBUCxHQUFzQixTQUFTQSxZQUFULENBQXNCekosSUFBdEIsRUFBNEJ1SixRQUE1QixFQUFzQztVQUN0REksTUFBTSxHQUFHLElBQWI7O1VBRUluRCxLQUFLLEdBQUcsS0FBS2pVLEtBQUwsQ0FBV2lVLEtBQXZCO1VBQ0lvRCxTQUFTLEdBQUcsS0FBSzVCLE9BQUwsQ0FBYUUsZUFBYixHQUErQixLQUFLRixPQUFMLENBQWFFLGVBQWIsQ0FBNkJFLFVBQTVELEdBQXlFbUIsUUFBekY7VUFDSU0sUUFBUSxHQUFHLEtBQUtSLFdBQUwsRUFBZixDQUwwRDs7O1VBUXRELENBQUNFLFFBQUQsSUFBYSxDQUFDL0MsS0FBbEIsRUFBeUI7YUFDbEJzRCxZQUFMLENBQWtCO1VBQ2hCcEIsTUFBTSxFQUFFZDtTQURWLEVBRUcsWUFBWTtVQUNiK0IsTUFBTSxDQUFDcFgsS0FBUCxDQUFhd1gsU0FBYixDQUF1Qi9KLElBQXZCO1NBSEY7Ozs7V0FRR3pOLEtBQUwsQ0FBV3lYLE9BQVgsQ0FBbUJoSyxJQUFuQixFQUF5QjRKLFNBQXpCO1dBQ0tFLFlBQUwsQ0FBa0I7UUFDaEJwQixNQUFNLEVBQUVmO09BRFYsRUFFRyxZQUFZO1FBQ2JnQyxNQUFNLENBQUNwWCxLQUFQLENBQWEwWCxVQUFiLENBQXdCakssSUFBeEIsRUFBOEI0SixTQUE5QixFQURhOzs7UUFJYkQsTUFBTSxDQUFDTyxlQUFQLENBQXVCbEssSUFBdkIsRUFBNkI2SixRQUFRLENBQUNyRCxLQUF0QyxFQUE2QyxZQUFZO1VBQ3ZEbUQsTUFBTSxDQUFDRyxZQUFQLENBQW9CO1lBQ2xCcEIsTUFBTSxFQUFFZDtXQURWLEVBRUcsWUFBWTtZQUNiK0IsTUFBTSxDQUFDcFgsS0FBUCxDQUFhd1gsU0FBYixDQUF1Qi9KLElBQXZCLEVBQTZCNEosU0FBN0I7V0FIRjtTQURGO09BTkY7S0FsQkY7O0lBa0NBaEIsTUFBTSxDQUFDYyxXQUFQLEdBQXFCLFNBQVNBLFdBQVQsQ0FBcUIxSixJQUFyQixFQUEyQjtVQUMxQ21LLE1BQU0sR0FBRyxJQUFiOztVQUVJMUQsSUFBSSxHQUFHLEtBQUtsVSxLQUFMLENBQVdrVSxJQUF0QjtVQUNJb0QsUUFBUSxHQUFHLEtBQUtSLFdBQUwsRUFBZixDQUo4Qzs7VUFNMUMsQ0FBQzVDLElBQUwsRUFBVzthQUNKcUQsWUFBTCxDQUFrQjtVQUNoQnBCLE1BQU0sRUFBRWhCO1NBRFYsRUFFRyxZQUFZO1VBQ2J5QyxNQUFNLENBQUM1WCxLQUFQLENBQWE2WCxRQUFiLENBQXNCcEssSUFBdEI7U0FIRjs7OztXQVFHek4sS0FBTCxDQUFXOFgsTUFBWCxDQUFrQnJLLElBQWxCO1dBQ0s4SixZQUFMLENBQWtCO1FBQ2hCcEIsTUFBTSxFQUFFYjtPQURWLEVBRUcsWUFBWTtRQUNic0MsTUFBTSxDQUFDNVgsS0FBUCxDQUFhK1gsU0FBYixDQUF1QnRLLElBQXZCOztRQUVBbUssTUFBTSxDQUFDRCxlQUFQLENBQXVCbEssSUFBdkIsRUFBNkI2SixRQUFRLENBQUNwRCxJQUF0QyxFQUE0QyxZQUFZO1VBQ3REMEQsTUFBTSxDQUFDTCxZQUFQLENBQW9CO1lBQ2xCcEIsTUFBTSxFQUFFaEI7V0FEVixFQUVHLFlBQVk7WUFDYnlDLE1BQU0sQ0FBQzVYLEtBQVAsQ0FBYTZYLFFBQWIsQ0FBc0JwSyxJQUF0QjtXQUhGO1NBREY7T0FMRjtLQWhCRjs7SUErQkE0SSxNQUFNLENBQUNRLGtCQUFQLEdBQTRCLFNBQVNBLGtCQUFULEdBQThCO1VBQ3BELEtBQUtULFlBQUwsS0FBc0IsSUFBMUIsRUFBZ0M7YUFDekJBLFlBQUwsQ0FBa0I0QixNQUFsQjthQUNLNUIsWUFBTCxHQUFvQixJQUFwQjs7S0FISjs7SUFPQUMsTUFBTSxDQUFDa0IsWUFBUCxHQUFzQixTQUFTQSxZQUFULENBQXNCM0UsU0FBdEIsRUFBaUNxRixRQUFqQyxFQUEyQzs7OztNQUkvREEsUUFBUSxHQUFHLEtBQUtDLGVBQUwsQ0FBcUJELFFBQXJCLENBQVg7V0FDS3JULFFBQUwsQ0FBY2dPLFNBQWQsRUFBeUJxRixRQUF6QjtLQUxGOztJQVFBNUIsTUFBTSxDQUFDNkIsZUFBUCxHQUF5QixTQUFTQSxlQUFULENBQXlCRCxRQUF6QixFQUFtQztVQUN0REUsTUFBTSxHQUFHLElBQWI7O1VBRUkvRCxNQUFNLEdBQUcsSUFBYjs7V0FFS2dDLFlBQUwsR0FBb0IsVUFBVWdDLEtBQVYsRUFBaUI7WUFDL0JoRSxNQUFKLEVBQVk7VUFDVkEsTUFBTSxHQUFHLEtBQVQ7VUFDQStELE1BQU0sQ0FBQy9CLFlBQVAsR0FBc0IsSUFBdEI7VUFDQTZCLFFBQVEsQ0FBQ0csS0FBRCxDQUFSOztPQUpKOztXQVFLaEMsWUFBTCxDQUFrQjRCLE1BQWxCLEdBQTJCLFlBQVk7UUFDckM1RCxNQUFNLEdBQUcsS0FBVDtPQURGOzthQUlPLEtBQUtnQyxZQUFaO0tBakJGOztJQW9CQUMsTUFBTSxDQUFDc0IsZUFBUCxHQUF5QixTQUFTQSxlQUFULENBQXlCbEssSUFBekIsRUFBK0JzSixPQUEvQixFQUF3Q3NCLE9BQXhDLEVBQWlEO1dBQ25FSCxlQUFMLENBQXFCRyxPQUFyQjs7VUFFSTVLLElBQUosRUFBVTtZQUNKLEtBQUt6TixLQUFMLENBQVdzWSxjQUFmLEVBQStCO2VBQ3hCdFksS0FBTCxDQUFXc1ksY0FBWCxDQUEwQjdLLElBQTFCLEVBQWdDLEtBQUsySSxZQUFyQzs7O1lBR0VXLE9BQU8sSUFBSSxJQUFmLEVBQXFCO1VBQ25Cd0IsVUFBVSxDQUFDLEtBQUtuQyxZQUFOLEVBQW9CVyxPQUFwQixDQUFWOztPQU5KLE1BUU87UUFDTHdCLFVBQVUsQ0FBQyxLQUFLbkMsWUFBTixFQUFvQixDQUFwQixDQUFWOztLQVpKOztJQWdCQUMsTUFBTSxDQUFDM1QsTUFBUCxHQUFnQixTQUFTQSxNQUFULEdBQWtCO1VBQzVCeVQsTUFBTSxHQUFHLEtBQUt0UixLQUFMLENBQVdzUixNQUF4Qjs7VUFFSUEsTUFBTSxLQUFLakIsU0FBZixFQUEwQjtlQUNqQixJQUFQOzs7VUFHRXNELFdBQVcsR0FBRyxLQUFLeFksS0FBdkI7VUFDSVMsUUFBUSxHQUFHK1gsV0FBVyxDQUFDL1gsUUFEM0I7VUFFSWdZLFVBQVUsR0FBRzFELDZCQUE2QixDQUFDeUQsV0FBRCxFQUFjLENBQUMsVUFBRCxDQUFkLENBRjlDLENBUGdDOzs7YUFZekJDLFVBQVUsQ0FBQ3pDLEVBQWxCO2FBQ095QyxVQUFVLENBQUN2QyxZQUFsQjthQUNPdUMsVUFBVSxDQUFDeEMsYUFBbEI7YUFDT3dDLFVBQVUsQ0FBQzdDLE1BQWxCO2FBQ082QyxVQUFVLENBQUN4RSxLQUFsQjthQUNPd0UsVUFBVSxDQUFDdkUsSUFBbEI7YUFDT3VFLFVBQVUsQ0FBQzFCLE9BQWxCO2FBQ08wQixVQUFVLENBQUNILGNBQWxCO2FBQ09HLFVBQVUsQ0FBQ2hCLE9BQWxCO2FBQ09nQixVQUFVLENBQUNmLFVBQWxCO2FBQ09lLFVBQVUsQ0FBQ2pCLFNBQWxCO2FBQ09pQixVQUFVLENBQUNYLE1BQWxCO2FBQ09XLFVBQVUsQ0FBQ1YsU0FBbEI7YUFDT1UsVUFBVSxDQUFDWixRQUFsQjs7VUFFSSxPQUFPcFgsUUFBUCxLQUFvQixVQUF4QixFQUFvQztlQUMzQkEsUUFBUSxDQUFDMFYsTUFBRCxFQUFTc0MsVUFBVCxDQUFmOzs7VUFHRUMsS0FBSyxHQUFHaEUsTUFBTSxDQUFDN3JCLE9BQVAsQ0FBZTh2QixRQUFmLENBQXdCQyxJQUF4QixDQUE2Qm5ZLFFBQTdCLENBQVo7O2FBRU9pVSxNQUFNLENBQUM3ckIsT0FBUCxDQUFlZ3dCLFlBQWYsQ0FBNEJILEtBQTVCLEVBQW1DRCxVQUFuQyxDQUFQO0tBakNGOztXQW9DT2xELFVBQVA7R0FyU0YsQ0FzU0ViLE1BQU0sQ0FBQzdyQixPQUFQLENBQWVvWixTQXRTakIsQ0FGQTs7RUEwU0FzVCxVQUFVLENBQUN1RCxZQUFYLEdBQTBCO0lBQ3hCbkQsZUFBZSxFQUFFeEUsV0FBUyxDQUFDcEo7R0FEN0I7RUFHQXdOLFVBQVUsQ0FBQ3dELGlCQUFYLEdBQStCO0lBQzdCcEQsZUFBZSxFQUFFLFNBQVNBLGVBQVQsR0FBMkI7R0FEOUM7RUFHQUosVUFBVSxDQUFDeUQsU0FBWCxHQUF1QnZoQixPQUFPLENBQUNDLEdBQVIsQ0FBWUMsUUFBWixLQUF5QixZQUF6QixHQUF3Qzs7Ozs7Ozs7Ozs7Ozs7O0lBZTdEOEksUUFBUSxFQUFFMFEsV0FBUyxDQUFDcEQsU0FBVixDQUFvQixDQUFDb0QsV0FBUyxDQUFDeEUsSUFBVixDQUFla0MsVUFBaEIsRUFBNEJzQyxXQUFTLENBQUNoRSxPQUFWLENBQWtCMEIsVUFBOUMsQ0FBcEIsRUFBK0VBLFVBZjVCOzs7OztJQW9CN0RtSCxFQUFFLEVBQUU3RSxXQUFTLENBQUN6RSxJQXBCK0M7Ozs7Ozs7O0lBNEI3RHdKLFlBQVksRUFBRS9FLFdBQVMsQ0FBQ3pFLElBNUJxQzs7Ozs7O0lBa0M3RHVKLGFBQWEsRUFBRTlFLFdBQVMsQ0FBQ3pFLElBbENvQzs7Ozs7Ozs7O0lBMkM3RGtKLE1BQU0sRUFBRXpFLFdBQVMsQ0FBQ3pFLElBM0MyQzs7Ozs7SUFnRDdEdUgsS0FBSyxFQUFFOUMsV0FBUyxDQUFDekUsSUFoRDRDOzs7OztJQXFEN0R3SCxJQUFJLEVBQUUvQyxXQUFTLENBQUN6RSxJQXJENkM7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQXVFN0RxSyxPQUFPLEVBQUUsU0FBU0EsT0FBVCxDQUFpQi9XLEtBQWpCLEVBQXdCO1VBQzNCaVosRUFBRSxHQUFHeGhCLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxRQUFaLEtBQXlCLFlBQXpCLEdBQXdDdWhCLFNBQVUsQ0FBQ2xGLGFBQW5ELEdBQW1FLEVBQTVFO0FBQStFLEFBQy9FLFVBQUksQ0FBQ2hVLEtBQUssQ0FBQ3NZLGNBQVgsRUFBMkJXLEVBQUUsR0FBR0EsRUFBRSxDQUFDcEssVUFBUjs7V0FFdEIsSUFBSTlYLElBQUksR0FBR3JPLFNBQVMsQ0FBQ1QsTUFBckIsRUFBNkJnTyxJQUFJLEdBQUcsSUFBSTNOLEtBQUosQ0FBVXlPLElBQUksR0FBRyxDQUFQLEdBQVdBLElBQUksR0FBRyxDQUFsQixHQUFzQixDQUFoQyxDQUFwQyxFQUF3RUMsSUFBSSxHQUFHLENBQXBGLEVBQXVGQSxJQUFJLEdBQUdELElBQTlGLEVBQW9HQyxJQUFJLEVBQXhHLEVBQTRHO1FBQzFHZixJQUFJLENBQUNlLElBQUksR0FBRyxDQUFSLENBQUosR0FBaUJ0TyxTQUFTLENBQUNzTyxJQUFELENBQTFCOzs7YUFHS2lpQixFQUFFLENBQUN0d0IsS0FBSCxDQUFTLEtBQUssQ0FBZCxFQUFpQixDQUFDcVgsS0FBRCxFQUFRM1gsTUFBUixDQUFlNE4sSUFBZixDQUFqQixDQUFQO0tBL0UyRDs7Ozs7Ozs7Ozs7Ozs7SUE4RjdEcWlCLGNBQWMsRUFBRW5ILFdBQVMsQ0FBQ3hFLElBOUZtQzs7Ozs7Ozs7SUFzRzdEOEssT0FBTyxFQUFFdEcsV0FBUyxDQUFDeEUsSUF0RzBDOzs7Ozs7OztJQThHN0QrSyxVQUFVLEVBQUV2RyxXQUFTLENBQUN4RSxJQTlHdUM7Ozs7Ozs7O0lBc0g3RDZLLFNBQVMsRUFBRXJHLFdBQVMsQ0FBQ3hFLElBdEh3Qzs7Ozs7OztJQTZIN0RtTCxNQUFNLEVBQUUzRyxXQUFTLENBQUN4RSxJQTdIMkM7Ozs7Ozs7SUFvSTdEb0wsU0FBUyxFQUFFNUcsV0FBUyxDQUFDeEUsSUFwSXdDOzs7Ozs7O0lBMkk3RGtMLFFBQVEsRUFBRTFHLFdBQVMsQ0FBQ3hFLElBM0l5Qzs7R0FBeEMsR0E2SW5CLEVBN0lKOztXQStJU3dNLElBQVQsR0FBZ0I7O0VBRWhCNUQsVUFBVSxDQUFDdnZCLFlBQVgsR0FBMEI7SUFDeEJnd0IsRUFBRSxFQUFFLEtBRG9CO0lBRXhCRSxZQUFZLEVBQUUsS0FGVTtJQUd4QkQsYUFBYSxFQUFFLEtBSFM7SUFJeEJMLE1BQU0sRUFBRSxLQUpnQjtJQUt4QjNCLEtBQUssRUFBRSxJQUxpQjtJQU14QkMsSUFBSSxFQUFFLElBTmtCO0lBT3hCdUQsT0FBTyxFQUFFMEIsSUFQZTtJQVF4QnpCLFVBQVUsRUFBRXlCLElBUlk7SUFTeEIzQixTQUFTLEVBQUUyQixJQVRhO0lBVXhCckIsTUFBTSxFQUFFcUIsSUFWZ0I7SUFXeEJwQixTQUFTLEVBQUVvQixJQVhhO0lBWXhCdEIsUUFBUSxFQUFFc0I7R0FaWjtFQWNBNUQsVUFBVSxDQUFDTCxTQUFYLEdBQXVCLENBQXZCO0VBQ0FLLFVBQVUsQ0FBQ0osTUFBWCxHQUFvQixDQUFwQjtFQUNBSSxVQUFVLENBQUNILFFBQVgsR0FBc0IsQ0FBdEI7RUFDQUcsVUFBVSxDQUFDRixPQUFYLEdBQXFCLENBQXJCO0VBQ0FFLFVBQVUsQ0FBQ0QsT0FBWCxHQUFxQixDQUFyQjs7TUFFSW5zQixRQUFRLEdBQUcsQ0FBQyxHQUFHaXdCLHdCQUFzQixDQUFDbEcsUUFBM0IsRUFBcUNxQyxVQUFyQyxDQUFmOztFQUVBMXRCLGVBQUEsR0FBa0JzQixRQUFsQjs7Ozs7Ozs7OztBQ3psQkE7RUFFQXRCLGtCQUFBLEdBQXFCLElBQXJCO0VBQ0FBLGVBQUEsR0FBa0IsS0FBSyxDQUF2Qjs7TUFFSXNwQixXQUFTLEdBQUdzRCx1QkFBdUIsQ0FBQ3hjLFNBQUQsQ0FBdkM7O01BRUlvaEIsU0FBUyxHQUFHcmhCLHNCQUFzQixDQUFDRyxVQUFELENBQXRDOztNQUVJbWhCLFlBQVksR0FBR3RoQixzQkFBc0IsQ0FBQ0ssV0FBRCxDQUF6Qzs7TUFFSXFjLE1BQU0sR0FBRzFjLHNCQUFzQixDQUFDK0QsY0FBRCxDQUFuQzs7TUFFSXdkLFdBQVcsR0FBR3ZoQixzQkFBc0IsQ0FBQ2dFLFlBQUQsQ0FBeEM7O1dBSVNoRSxzQkFBVCxDQUFnQ00sR0FBaEMsRUFBcUM7V0FBU0EsR0FBRyxJQUFJQSxHQUFHLENBQUNDLFVBQVgsR0FBd0JELEdBQXhCLEdBQThCO01BQUV6UCxPQUFPLEVBQUV5UDtLQUFoRDs7O1dBRTlCbWMsdUJBQVQsQ0FBaUNuYyxHQUFqQyxFQUFzQztRQUFNQSxHQUFHLElBQUlBLEdBQUcsQ0FBQ0MsVUFBZixFQUEyQjthQUFTRCxHQUFQO0tBQTdCLE1BQWdEO1VBQU1zYyxNQUFNLEdBQUcsRUFBYjs7VUFBcUJ0YyxHQUFHLElBQUksSUFBWCxFQUFpQjthQUFPLElBQUl5RSxHQUFULElBQWdCekUsR0FBaEIsRUFBcUI7Y0FBTW5FLE1BQU0sQ0FBQzVMLFNBQVAsQ0FBaUJ5VSxjQUFqQixDQUFnQ3ZVLElBQWhDLENBQXFDNlAsR0FBckMsRUFBMEN5RSxHQUExQyxDQUFKLEVBQW9EO2dCQUFNOFgsSUFBSSxHQUFHMWdCLE1BQU0sQ0FBQ3NSLGNBQVAsSUFBeUJ0UixNQUFNLENBQUMyZ0Isd0JBQWhDLEdBQTJEM2dCLE1BQU0sQ0FBQzJnQix3QkFBUCxDQUFnQ3hjLEdBQWhDLEVBQXFDeUUsR0FBckMsQ0FBM0QsR0FBdUcsRUFBbEg7O2dCQUEwSDhYLElBQUksQ0FBQzlmLEdBQUwsSUFBWThmLElBQUksQ0FBQzdmLEdBQXJCLEVBQTBCO2NBQUViLE1BQU0sQ0FBQ3NSLGNBQVAsQ0FBc0JtUCxNQUF0QixFQUE4QjdYLEdBQTlCLEVBQW1DOFgsSUFBbkM7YUFBNUIsTUFBNkU7Y0FBRUQsTUFBTSxDQUFDN1gsR0FBRCxDQUFOLEdBQWN6RSxHQUFHLENBQUN5RSxHQUFELENBQWpCOzs7Ozs7TUFBZ0M2WCxNQUFNLENBQUMvckIsT0FBUCxHQUFpQnlQLEdBQWpCO2FBQTZCc2MsTUFBUDs7OztXQUU3YmxZLFFBQVQsR0FBb0I7SUFBRUEsUUFBUSxHQUFHdkksTUFBTSxDQUFDd0ksTUFBUCxJQUFpQixVQUFVQyxNQUFWLEVBQWtCO1dBQU8sSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR25VLFNBQVMsQ0FBQ1QsTUFBOUIsRUFBc0M0VSxDQUFDLEVBQXZDLEVBQTJDO1lBQU1DLE1BQU0sR0FBR3BVLFNBQVMsQ0FBQ21VLENBQUQsQ0FBdEI7O2FBQWdDLElBQUlFLEdBQVQsSUFBZ0JELE1BQWhCLEVBQXdCO2NBQU0zSSxNQUFNLENBQUM1TCxTQUFQLENBQWlCeVUsY0FBakIsQ0FBZ0N2VSxJQUFoQyxDQUFxQ3FVLE1BQXJDLEVBQTZDQyxHQUE3QyxDQUFKLEVBQXVEO1lBQUVILE1BQU0sQ0FBQ0csR0FBRCxDQUFOLEdBQWNELE1BQU0sQ0FBQ0MsR0FBRCxDQUFwQjs7Ozs7YUFBd0NILE1BQVA7S0FBNU87O1dBQXFRRixRQUFRLENBQUMvVCxLQUFULENBQWUsSUFBZixFQUFxQkQsU0FBckIsQ0FBUDs7O1dBRTNRc0wsY0FBVCxDQUF3QkMsUUFBeEIsRUFBa0NDLFVBQWxDLEVBQThDO0lBQUVELFFBQVEsQ0FBQzFMLFNBQVQsR0FBcUI0TCxNQUFNLENBQUNDLE1BQVAsQ0FBY0YsVUFBVSxDQUFDM0wsU0FBekIsQ0FBckI7SUFBMEQwTCxRQUFRLENBQUMxTCxTQUFULENBQW1COEwsV0FBbkIsR0FBaUNKLFFBQWpDO0lBQTJDQSxRQUFRLENBQUNLLFNBQVQsR0FBcUJKLFVBQXJCOzs7TUFFakowZCxRQUFRLEdBQUcsU0FBU0EsUUFBVCxDQUFrQm5FLElBQWxCLEVBQXdCK0wsT0FBeEIsRUFBaUM7V0FDdkMvTCxJQUFJLElBQUkrTCxPQUFSLElBQW1CQSxPQUFPLENBQUM5TyxLQUFSLENBQWMsR0FBZCxFQUFtQnZULE9BQW5CLENBQTJCLFVBQVVELENBQVYsRUFBYTthQUN6RCxDQUFDLEdBQUdtaUIsU0FBUyxDQUFDeHdCLE9BQWQsRUFBdUI0a0IsSUFBdkIsRUFBNkJ2VyxDQUE3QixDQUFQO0tBRHdCLENBQTFCO0dBREY7O01BTUlpYixhQUFXLEdBQUcsU0FBU0EsV0FBVCxDQUFxQjFFLElBQXJCLEVBQTJCK0wsT0FBM0IsRUFBb0M7V0FDN0MvTCxJQUFJLElBQUkrTCxPQUFSLElBQW1CQSxPQUFPLENBQUM5TyxLQUFSLENBQWMsR0FBZCxFQUFtQnZULE9BQW5CLENBQTJCLFVBQVVELENBQVYsRUFBYTthQUN6RCxDQUFDLEdBQUdvaUIsWUFBWSxDQUFDendCLE9BQWpCLEVBQTBCNGtCLElBQTFCLEVBQWdDdlcsQ0FBaEMsQ0FBUDtLQUR3QixDQUExQjtHQURGOzs7Ozs7Ozs7Ozs7Ozs7O01Bb0JJdWlCLGFBQWE7O1lBRVBqRSxnQkFBVixFQUE0QjtJQUMxQnhoQixjQUFjLENBQUN5bEIsYUFBRCxFQUFnQmpFLGdCQUFoQixDQUFkOzthQUVTaUUsYUFBVCxHQUF5QjtVQUNuQmppQixLQUFKOztXQUVLLElBQUlULElBQUksR0FBR3JPLFNBQVMsQ0FBQ1QsTUFBckIsRUFBNkJnTyxJQUFJLEdBQUcsSUFBSTNOLEtBQUosQ0FBVXlPLElBQVYsQ0FBcEMsRUFBcURDLElBQUksR0FBRyxDQUFqRSxFQUFvRUEsSUFBSSxHQUFHRCxJQUEzRSxFQUFpRkMsSUFBSSxFQUFyRixFQUF5RjtRQUN2RmYsSUFBSSxDQUFDZSxJQUFELENBQUosR0FBYXRPLFNBQVMsQ0FBQ3NPLElBQUQsQ0FBdEI7OztNQUdGUSxLQUFLLEdBQUdnZSxnQkFBZ0IsQ0FBQy9zQixJQUFqQixDQUFzQkUsS0FBdEIsQ0FBNEI2c0IsZ0JBQTVCLEVBQThDLENBQUMsSUFBRCxFQUFPbnRCLE1BQVAsQ0FBYzROLElBQWQsQ0FBOUMsS0FBc0UsSUFBOUU7O01BRUF1QixLQUFLLENBQUNpZ0IsT0FBTixHQUFnQixVQUFVaEssSUFBVixFQUFnQjRKLFNBQWhCLEVBQTJCO1lBQ3JDcUMsbUJBQW1CLEdBQUdsaUIsS0FBSyxDQUFDbWlCLGFBQU4sQ0FBb0J0QyxTQUFTLEdBQUcsUUFBSCxHQUFjLE9BQTNDLENBQTFCO1lBQ0kzVixTQUFTLEdBQUdnWSxtQkFBbUIsQ0FBQ2hZLFNBRHBDOztRQUdBbEssS0FBSyxDQUFDb2lCLGFBQU4sQ0FBb0JuTSxJQUFwQixFQUEwQixNQUExQjs7UUFFQW1FLFFBQVEsQ0FBQ25FLElBQUQsRUFBTy9MLFNBQVAsQ0FBUjs7WUFFSWxLLEtBQUssQ0FBQ3dJLEtBQU4sQ0FBWXlYLE9BQWhCLEVBQXlCO1VBQ3ZCamdCLEtBQUssQ0FBQ3dJLEtBQU4sQ0FBWXlYLE9BQVosQ0FBb0JoSyxJQUFwQixFQUEwQjRKLFNBQTFCOztPQVRKOztNQWFBN2YsS0FBSyxDQUFDa2dCLFVBQU4sR0FBbUIsVUFBVWpLLElBQVYsRUFBZ0I0SixTQUFoQixFQUEyQjtZQUN4Q3dDLG9CQUFvQixHQUFHcmlCLEtBQUssQ0FBQ21pQixhQUFOLENBQW9CdEMsU0FBUyxHQUFHLFFBQUgsR0FBYyxPQUEzQyxDQUEzQjtZQUNJeUMsZUFBZSxHQUFHRCxvQkFBb0IsQ0FBQ0MsZUFEM0M7O1FBR0F0aUIsS0FBSyxDQUFDdWlCLGlCQUFOLENBQXdCdE0sSUFBeEIsRUFBOEJxTSxlQUE5Qjs7WUFFSXRpQixLQUFLLENBQUN3SSxLQUFOLENBQVkwWCxVQUFoQixFQUE0QjtVQUMxQmxnQixLQUFLLENBQUN3SSxLQUFOLENBQVkwWCxVQUFaLENBQXVCakssSUFBdkIsRUFBNkI0SixTQUE3Qjs7T0FQSjs7TUFXQTdmLEtBQUssQ0FBQ2dnQixTQUFOLEdBQWtCLFVBQVUvSixJQUFWLEVBQWdCNEosU0FBaEIsRUFBMkI7WUFDdkMyQyxvQkFBb0IsR0FBR3hpQixLQUFLLENBQUNtaUIsYUFBTixDQUFvQixPQUFwQixDQUEzQjtZQUNJTSxhQUFhLEdBQUdELG9CQUFvQixDQUFDQyxhQUR6Qzs7UUFHQXppQixLQUFLLENBQUNvaUIsYUFBTixDQUFvQm5NLElBQXBCLEVBQTBCNEosU0FBUyxHQUFHLFFBQUgsR0FBYyxPQUFqRDs7UUFFQXpGLFFBQVEsQ0FBQ25FLElBQUQsRUFBT3dNLGFBQVAsQ0FBUjs7WUFFSXppQixLQUFLLENBQUN3SSxLQUFOLENBQVl3WCxTQUFoQixFQUEyQjtVQUN6QmhnQixLQUFLLENBQUN3SSxLQUFOLENBQVl3WCxTQUFaLENBQXNCL0osSUFBdEIsRUFBNEI0SixTQUE1Qjs7T0FUSjs7TUFhQTdmLEtBQUssQ0FBQ3NnQixNQUFOLEdBQWUsVUFBVXJLLElBQVYsRUFBZ0I7WUFDekJ5TSxvQkFBb0IsR0FBRzFpQixLQUFLLENBQUNtaUIsYUFBTixDQUFvQixNQUFwQixDQUEzQjtZQUNJalksU0FBUyxHQUFHd1ksb0JBQW9CLENBQUN4WSxTQURyQzs7UUFHQWxLLEtBQUssQ0FBQ29pQixhQUFOLENBQW9Cbk0sSUFBcEIsRUFBMEIsUUFBMUI7O1FBRUFqVyxLQUFLLENBQUNvaUIsYUFBTixDQUFvQm5NLElBQXBCLEVBQTBCLE9BQTFCOztRQUVBbUUsUUFBUSxDQUFDbkUsSUFBRCxFQUFPL0wsU0FBUCxDQUFSOztZQUVJbEssS0FBSyxDQUFDd0ksS0FBTixDQUFZOFgsTUFBaEIsRUFBd0I7VUFDdEJ0Z0IsS0FBSyxDQUFDd0ksS0FBTixDQUFZOFgsTUFBWixDQUFtQnJLLElBQW5COztPQVhKOztNQWVBalcsS0FBSyxDQUFDdWdCLFNBQU4sR0FBa0IsVUFBVXRLLElBQVYsRUFBZ0I7WUFDNUIwTSxvQkFBb0IsR0FBRzNpQixLQUFLLENBQUNtaUIsYUFBTixDQUFvQixNQUFwQixDQUEzQjtZQUNJRyxlQUFlLEdBQUdLLG9CQUFvQixDQUFDTCxlQUQzQzs7UUFHQXRpQixLQUFLLENBQUN1aUIsaUJBQU4sQ0FBd0J0TSxJQUF4QixFQUE4QnFNLGVBQTlCOztZQUVJdGlCLEtBQUssQ0FBQ3dJLEtBQU4sQ0FBWStYLFNBQWhCLEVBQTJCO1VBQ3pCdmdCLEtBQUssQ0FBQ3dJLEtBQU4sQ0FBWStYLFNBQVosQ0FBc0J0SyxJQUF0Qjs7T0FQSjs7TUFXQWpXLEtBQUssQ0FBQ3FnQixRQUFOLEdBQWlCLFVBQVVwSyxJQUFWLEVBQWdCO1lBQzNCMk0sb0JBQW9CLEdBQUc1aUIsS0FBSyxDQUFDbWlCLGFBQU4sQ0FBb0IsTUFBcEIsQ0FBM0I7WUFDSU0sYUFBYSxHQUFHRyxvQkFBb0IsQ0FBQ0gsYUFEekM7O1FBR0F6aUIsS0FBSyxDQUFDb2lCLGFBQU4sQ0FBb0JuTSxJQUFwQixFQUEwQixNQUExQjs7UUFFQW1FLFFBQVEsQ0FBQ25FLElBQUQsRUFBT3dNLGFBQVAsQ0FBUjs7WUFFSXppQixLQUFLLENBQUN3SSxLQUFOLENBQVk2WCxRQUFoQixFQUEwQjtVQUN4QnJnQixLQUFLLENBQUN3SSxLQUFOLENBQVk2WCxRQUFaLENBQXFCcEssSUFBckI7O09BVEo7O01BYUFqVyxLQUFLLENBQUNtaUIsYUFBTixHQUFzQixVQUFVL1gsSUFBVixFQUFnQjtZQUNoQ3lZLFVBQVUsR0FBRzdpQixLQUFLLENBQUN3SSxLQUFOLENBQVlxYSxVQUE3QjtZQUNJM1ksU0FBUyxHQUFHLE9BQU8yWSxVQUFQLEtBQXNCLFFBQXRCLEdBQWlDQSxVQUFVLENBQUN6WSxJQUFELENBQTNDLEdBQW9EeVksVUFBVSxHQUFHLEdBQWIsR0FBbUJ6WSxJQUF2RjtZQUNJa1ksZUFBZSxHQUFHLE9BQU9PLFVBQVAsS0FBc0IsUUFBdEIsR0FBaUNBLFVBQVUsQ0FBQ3pZLElBQUksR0FBRyxRQUFSLENBQTNDLEdBQStERixTQUFTLEdBQUcsU0FBakc7WUFDSXVZLGFBQWEsR0FBRyxPQUFPSSxVQUFQLEtBQXNCLFFBQXRCLEdBQWlDQSxVQUFVLENBQUN6WSxJQUFJLEdBQUcsTUFBUixDQUEzQyxHQUE2REYsU0FBUyxHQUFHLE9BQTdGO2VBQ087VUFDTEEsU0FBUyxFQUFFQSxTQUROO1VBRUxvWSxlQUFlLEVBQUVBLGVBRlo7VUFHTEcsYUFBYSxFQUFFQTtTQUhqQjtPQUxGOzthQVlPemlCLEtBQVA7OztRQUdFNmUsTUFBTSxHQUFHb0QsYUFBYSxDQUFDbHhCLFNBQTNCOztJQUVBOHRCLE1BQU0sQ0FBQ3VELGFBQVAsR0FBdUIsU0FBU0EsYUFBVCxDQUF1Qm5NLElBQXZCLEVBQTZCN0wsSUFBN0IsRUFBbUM7VUFDcEQwWSxvQkFBb0IsR0FBRyxLQUFLWCxhQUFMLENBQW1CL1gsSUFBbkIsQ0FBM0I7VUFDSUYsU0FBUyxHQUFHNFksb0JBQW9CLENBQUM1WSxTQURyQztVQUVJb1ksZUFBZSxHQUFHUSxvQkFBb0IsQ0FBQ1IsZUFGM0M7VUFHSUcsYUFBYSxHQUFHSyxvQkFBb0IsQ0FBQ0wsYUFIekM7O01BS0F2WSxTQUFTLElBQUl5USxhQUFXLENBQUMxRSxJQUFELEVBQU8vTCxTQUFQLENBQXhCO01BQ0FvWSxlQUFlLElBQUkzSCxhQUFXLENBQUMxRSxJQUFELEVBQU9xTSxlQUFQLENBQTlCO01BQ0FHLGFBQWEsSUFBSTlILGFBQVcsQ0FBQzFFLElBQUQsRUFBT3dNLGFBQVAsQ0FBNUI7S0FSRjs7SUFXQTVELE1BQU0sQ0FBQzBELGlCQUFQLEdBQTJCLFNBQVNBLGlCQUFULENBQTJCdE0sSUFBM0IsRUFBaUMvTCxTQUFqQyxFQUE0Qzs7O1VBR2pFQSxTQUFKLEVBQWU7O1FBRWIrTCxJQUFJLElBQUlBLElBQUksQ0FBQzhNLFNBQWI7OztRQUdBM0ksUUFBUSxDQUFDbkUsSUFBRCxFQUFPL0wsU0FBUCxDQUFSOztLQVJKOztJQVlBMlUsTUFBTSxDQUFDM1QsTUFBUCxHQUFnQixTQUFTQSxNQUFULEdBQWtCO1VBQzVCMUMsS0FBSyxHQUFHdEQsUUFBUSxDQUFDLEVBQUQsRUFBSyxLQUFLc0QsS0FBVixDQUFwQjs7YUFFT0EsS0FBSyxDQUFDcWEsVUFBYjthQUNPM0YsTUFBTSxDQUFDN3JCLE9BQVAsQ0FBZTJ4QixhQUFmLENBQTZCakIsV0FBVyxDQUFDMXdCLE9BQXpDLEVBQWtENlQsUUFBUSxDQUFDLEVBQUQsRUFBS3NELEtBQUwsRUFBWTtRQUMzRXlYLE9BQU8sRUFBRSxLQUFLQSxPQUQ2RDtRQUUzRUQsU0FBUyxFQUFFLEtBQUtBLFNBRjJEO1FBRzNFRSxVQUFVLEVBQUUsS0FBS0EsVUFIMEQ7UUFJM0VJLE1BQU0sRUFBRSxLQUFLQSxNQUo4RDtRQUszRUMsU0FBUyxFQUFFLEtBQUtBLFNBTDJEO1FBTTNFRixRQUFRLEVBQUUsS0FBS0E7T0FOZ0QsQ0FBMUQsQ0FBUDtLQUpGOztXQWNPNEIsYUFBUDtHQTlJRixDQStJRS9FLE1BQU0sQ0FBQzdyQixPQUFQLENBQWVvWixTQS9JakIsQ0FGQTs7RUFtSkF3WCxhQUFhLENBQUNULFNBQWQsR0FBMEJ2aEIsT0FBTyxDQUFDQyxHQUFSLENBQVlDLFFBQVosS0FBeUIsWUFBekIsR0FBd0MrRSxRQUFRLENBQUMsRUFBRCxFQUFLNmMsV0FBVyxDQUFDMXdCLE9BQVosQ0FBb0Jtd0IsU0FBekIsRUFBb0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUE4QzVHcUIsVUFBVSxFQUFFbkIsU0FBVSxDQUFDL0UsZUE5Q3FGOzs7Ozs7OztJQXNENUdzRCxPQUFPLEVBQUV0RyxXQUFTLENBQUN4RSxJQXREeUY7Ozs7Ozs7O0lBOEQ1RytLLFVBQVUsRUFBRXZHLFdBQVMsQ0FBQ3hFLElBOURzRjs7Ozs7Ozs7SUFzRTVHNkssU0FBUyxFQUFFckcsV0FBUyxDQUFDeEUsSUF0RXVGOzs7Ozs7OztJQThFNUdtTCxNQUFNLEVBQUUzRyxXQUFTLENBQUN4RSxJQTlFMEY7Ozs7Ozs7SUFxRjVHb0wsU0FBUyxFQUFFNUcsV0FBUyxDQUFDeEUsSUFyRnVGOzs7Ozs7OztJQTZGNUdrTCxRQUFRLEVBQUUxRyxXQUFTLENBQUN4RTtHQTdGb0QsQ0FBaEQsR0E4RnJCLEVBOUZMO01BK0ZJeGpCLFFBQVEsR0FBR3N3QixhQUFmO0VBQ0E1eEIsZUFBQSxHQUFrQnNCLFFBQWxCO0VBQ0FQLGNBQUEsR0FBaUJmLE9BQU8sQ0FBQyxTQUFELENBQXhCOzs7O0FDbFNBLElBQU1vTixTQUFPOztBQUFHcFAsZUFBTSxDQUFDQyxHQUFWOzs7eWZBaUNUO01BQUdMLEdBQUgsUUFBR0EsR0FBSDtTQUFhQSxHQUFHLElBQUksRUFBcEI7Q0FqQ1MsQ0FBYjs7QUFzREEsU0FBU2cxQixXQUFULENBQXFCOTFCLE1BQXJCLEVBQXFDRCxLQUFyQyxFQUFvRGcyQixRQUFwRCxFQUFvRTtVQUMxREEsUUFBUjtTQUNPLEtBQUw7O2VBQ1M7VUFBRUMsTUFBTSxZQUFLaDJCLE1BQUwsT0FBUjtVQUF5QmkyQixJQUFJLEVBQUUsS0FBL0I7VUFBc0NDLFNBQVMsRUFBRTtTQUF4RDs7O1NBRUcsTUFBTDs7ZUFDUztVQUFFdFosS0FBSyxZQUFLN2MsS0FBTCxPQUFQO1VBQXVCbzJCLEdBQUcsRUFBRSxLQUE1QjtVQUFtQ0QsU0FBUyxFQUFFO1NBQXJEOzs7U0FFRyxPQUFMOztlQUNTO1VBQUVELElBQUksWUFBS2wyQixLQUFMLE9BQU47VUFBc0JvMkIsR0FBRyxFQUFFLEtBQTNCO1VBQWtDRCxTQUFTLEVBQUU7U0FBcEQ7Ozs7O2VBR087VUFBRUMsR0FBRyxZQUFLbjJCLE1BQUwsT0FBTDtVQUFzQmkyQixJQUFJLEVBQUUsS0FBNUI7VUFBbUNDLFNBQVMsRUFBRTtTQUFyRDs7Ozs7SUFLZUU7Ozs7Ozs7Ozs7Ozs7Ozs7OztvRkFNWDtNQUNOcFcsSUFBSSxFQUFFLEtBREE7TUFFTmhELEtBQUssRUFBRTs7OzBGQUdLLFlBQU07VUFDZCxNQUFLa0QsS0FBTCxDQUFXRixJQUFYLElBQW1CLENBQUMsTUFBS3dJLE9BQUwsQ0FBYTZOLE9BQXJDLEVBQThDO1VBRXhDdDJCLEtBQUssR0FBRyxNQUFLeW9CLE9BQUwsQ0FBYTZOLE9BQWIsQ0FBcUJDLFdBQXJCLEdBQW1DLENBQWpEO1VBQ010MkIsTUFBTSxHQUFHLE1BQUt3b0IsT0FBTCxDQUFhNk4sT0FBYixDQUFxQkUsWUFBckIsR0FBb0MsQ0FBbkQ7VUFDTXZaLEtBQUssR0FBRzhZLFdBQVcsQ0FBQzkxQixNQUFELEVBQVNELEtBQVQsRUFBZ0IsTUFBS3NiLEtBQUwsQ0FBVzBhLFFBQTNCLENBQXpCOztZQUNLOVYsUUFBTCxDQUFjO1FBQUVqRCxLQUFLLEVBQUxBLEtBQUY7UUFBU2dELElBQUksRUFBRTtPQUE3Qjs7OzJGQUdhLFlBQU07VUFDZixNQUFLRSxLQUFMLENBQVdGLElBQVgsSUFBbUIsTUFBS3dJLE9BQUwsQ0FBYTZOLE9BQXBDLEVBQTZDO2NBQ3RDcFcsUUFBTCxDQUFjO1VBQUVELElBQUksRUFBRTtTQUF0Qjs7OztzRkFJaUN3VyxlQUFTOzs7Ozs7OzZCQUVyQzt3QkFDOEIsS0FBS25iLEtBRG5DO1VBQ0NNLEtBREQsZUFDQ0EsS0FERDtVQUNRRyxRQURSLGVBQ1FBLFFBRFI7VUFDcUJDLElBRHJCOzt3QkFFaUIsS0FBS21FLEtBRnRCO1VBRUNGLElBRkQsZUFFQ0EsSUFGRDtVQUVPaEQsS0FGUCxlQUVPQSxLQUZQO2FBSUxsZCw2QkFBQ3dRLFNBQUQ7UUFDRSxHQUFHLEVBQUUsS0FBS2tZLE9BRFo7UUFFRSxXQUFXLEVBQUUsS0FBS2lPLFdBRnBCO1FBR0UsVUFBVSxFQUFFLEtBQUtDO1NBQ2IzYSxJQUpOLEdBTUdELFFBTkgsRUFPRWhjLDZCQUFDLGFBQUQ7UUFDRSxVQUFVLEVBQUU7VUFDVm14QixNQUFNLEVBQUUsT0FERTtVQUVWdkIsU0FBUyxFQUFFLE9BRkQ7VUFHVkgsSUFBSSxFQUFFO1NBSlY7UUFNRSxFQUFFLEVBQUV2UCxJQU5OO1FBT0UsT0FBTyxFQUFFLEdBUFg7UUFRRSxhQUFhO1NBRWJsZ0I7UUFBSyxJQUFJLEVBQUM7U0FDUDZiLEtBREgsQ0FWRixDQVBGLENBREY7Ozs7O0VBL0JpQ0o7O2dCQUFoQjZhLHlCQUNHO0VBQ3BCTCxRQUFRLEVBQUUsUUFEVTtFQUVwQnJ4QixLQUFLLEVBQUU7OztJQzVFRWl5QixRQUFROztBQUFHejFCLGVBQU0sQ0FBQzAxQixLQUFWOzs7dUJBQWQ7QUFHUEQsUUFBUSxDQUFDdjFCLFdBQVQsR0FBdUIsVUFBdkI7QUFFQSxJQUFheTFCLFFBQVE7O0FBQUczMUIsZUFBTSxDQUFDNDFCLEVBQVY7Ozt5S0FPUjtNQUFHNTJCLEtBQUgsUUFBR0EsS0FBSDtTQUFlQSxLQUFLLENBQUMrQyxJQUFyQjtDQVBRLEVBU047TUFBRy9DLEtBQUgsU0FBR0EsS0FBSDtTQUFlQSxLQUFLLENBQUN1YixPQUFyQjtDQVRNLEVBWU47TUFBR3ZiLEtBQUgsU0FBR0EsS0FBSDtTQUFlQSxLQUFLLENBQUN1YixPQUFyQjtDQVpNLENBQWQ7QUF1QlBvYixRQUFRLENBQUN6MUIsV0FBVCxHQUF1QixVQUF2QjtBQUVBLElBQWEyMUIsU0FBUzs7QUFBRzcxQixlQUFNLENBQUM2USxDQUFWOzs7aUpBQWY7QUFZUGdsQixTQUFTLENBQUMzMUIsV0FBVixHQUF3QixXQUF4Qjs7QUN4Q0EsSUFBTTQxQixRQUFROztBQUFHOTFCLGVBQU0sQ0FBQ0MsR0FBVjs7O2lDQUFkO0FBS0EsSUFBTTgxQixVQUFVOztBQUFHLzFCLGVBQU0sQ0FBQ3VlLE1BQVY7Ozs0SUFJYTtNQUFHdmYsS0FBSCxRQUFHQSxLQUFIO1NBQWVBLEtBQUssQ0FBQzZDLE1BQXJCO0NBSmIsQ0FBaEI7QUFTQSxJQUFNbTBCLFVBQVU7O0FBQUdoMkIsZUFBTSxDQUFDaTJCLE1BQVY7Ozt5SUFJVTtNQUFHajNCLEtBQUgsU0FBR0EsS0FBSDtTQUFlQSxLQUFLLENBQUM2QyxNQUFyQjtDQUpWLENBQWhCO0FBU0EsSUFBTXEwQixTQUFTOztBQUFHbDJCLGVBQU0sQ0FBQ3FRLENBQVY7Ozs2R0FBZjtBQWdCQSxJQUFNOGxCLG1CQUFtQjs7QUFBR24yQixlQUFNLENBQUNxUSxDQUFWOzs7OElBUXJCO01BQUcrbEIsR0FBSCxTQUFHQSxHQUFIO1NBQWFBLEdBQUcsR0FBR3gyQixVQUFILGtDQUErQncyQixHQUEvQixJQUF5QyxFQUF6RDtDQVJxQixDQUF6QjtBQThCQSxJQUFNQyxlQUE4QixHQUFHO0VBQUVDLGFBQWEsRUFBRTtDQUF4RDs7SUFFcUJDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7MkZBQ0osWUFBTTt3QkFDa0IsTUFBS3BjLEtBRHZCO1VBQ1hxYyxLQURXLGVBQ1hBLEtBRFc7VUFDSkMsS0FESSxlQUNKQSxLQURJO1VBQ0dDLFVBREgsZUFDR0EsVUFESDtVQUdmRixLQUFLLElBQUksQ0FBQ0UsVUFBZCxFQUEwQixPQUFROTNCLDZCQUFDLFNBQUQsUUFBV0E7UUFBSyxHQUFHLEVBQUU0M0I7UUFBckIsQ0FBUjtVQUN0QkEsS0FBSyxJQUFJRSxVQUFiLEVBQXlCLE9BQVE5M0IsNkJBQUMsbUJBQUQ7UUFBcUIsR0FBRyxFQUFFNDNCO1FBQWxDO1VBQ3JCQyxLQUFLLElBQUksQ0FBQ0MsVUFBZCxFQUEwQixPQUFROTNCLDZCQUFDLFVBQUQsUUFBWUEseUNBQUs2M0IsS0FBTCxDQUFaLENBQVI7YUFFbkIsSUFBUDs7Ozs7Ozs7NkJBR087eUJBQ3lDLEtBQUt0YyxLQUQ5QztVQUNDUyxRQURELGdCQUNDQSxRQUREO1VBQ1c4YixVQURYLGdCQUNXQSxVQURYO1VBQ3VCVCxNQUR2QixnQkFDdUJBLE1BRHZCO1VBQytCenlCLEtBRC9CLGdCQUMrQkEsS0FEL0I7VUFHRCthLE1BQU0sR0FBRyxLQUFLb1ksWUFBTCxFQUFmO1VBQ01DLFlBQVksR0FBR0YsVUFBVSxHQUFHTCxlQUFILEdBQXFCdm5CLFNBQXBEO2FBRUVsUSw2QkFBQyxHQUFEO1FBQUssS0FBSyxFQUFFZzRCLFlBQVo7UUFBMEIsS0FBSyxFQUFFcHpCO1NBQzlCK2EsTUFESCxFQUVFM2YsNkJBQUMsUUFBRCxRQUNHZ2MsUUFESCxDQUZGLEVBS0dxYixNQUFNLElBQUtyM0IsNkJBQUMsVUFBRCxRQUFhQSxjQUFLLENBQUNrMEIsUUFBTixDQUFlQyxJQUFmLENBQW9Ca0QsTUFBcEIsQ0FBYixDQUxkLENBREY7Ozs7O0VBaEI4QjViOzs7Ozs7Ozs7OztBQ3RFbEMsSUFBTWpMLFNBQU87O0FBQUdwUCxlQUFNLENBQUNDLEdBQVY7Ozt5R0FVVDtNQUFHTCxHQUFILFFBQUdBLEdBQUg7U0FBYUEsR0FBRyxJQUFJLEVBQXBCO0NBVlMsQ0FBYjtBQWFBLElBQU1zMUIsU0FBTzs7QUFBR2wxQixlQUFNLENBQUNnYSxHQUFELENBQVQ7OztpYUFBYjs7QUFnREEsU0FBUzRhLGFBQVQsQ0FBcUJDLFFBQXJCLEVBQXFDO1VBQzNCQSxRQUFSO1NBQ08sVUFBTDs7ZUFDUztVQUFFSSxHQUFHLEVBQUUsQ0FBUDtVQUFVRixJQUFJLEVBQUUsQ0FBaEI7VUFBbUJDLFNBQVMsRUFBRTtTQUFyQzs7O1NBRUcsV0FBTDs7ZUFDUztVQUFFQyxHQUFHLEVBQUUsQ0FBUDtVQUFVdlosS0FBSyxFQUFFLENBQWpCO1VBQW9Cc1osU0FBUyxFQUFFO1NBQXRDOzs7U0FFRyxLQUFMOztlQUNTO1VBQUVDLEdBQUcsRUFBRyxDQUFSO1VBQVdGLElBQUksRUFBRSxLQUFqQjtVQUF3QkMsU0FBUyxFQUFFO1NBQTFDOzs7U0FFRyxhQUFMOztlQUNTO1VBQUVGLE1BQU0sRUFBRSxDQUFWO1VBQWFDLElBQUksRUFBRSxDQUFuQjtVQUFzQkMsU0FBUyxFQUFFO1NBQXhDOzs7U0FFRyxjQUFMOztlQUNTO1VBQUVGLE1BQU0sRUFBRSxDQUFWO1VBQWFwWixLQUFLLEVBQUUsQ0FBcEI7VUFBdUJzWixTQUFTLEVBQUU7U0FBekM7OztTQUVHLFFBQUw7O2VBQ1M7VUFBRUYsTUFBTSxFQUFFLENBQVY7VUFBYUMsSUFBSSxFQUFFLEtBQW5CO1VBQTBCQyxTQUFTLEVBQUU7U0FBNUM7Ozs7O2VBR087VUFBRUMsR0FBRyxFQUFFLENBQVA7VUFBVUYsSUFBSSxFQUFFLENBQWhCO1VBQW1CQyxTQUFTLEVBQUU7U0FBckM7Ozs7O0lBS2U2Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7O29GQU9YO01BQUUvWCxJQUFJLEVBQUUsS0FBUjtNQUFlaEQsS0FBSyxFQUFFOzs7MkZBTWYsWUFBTTtVQUNmLE1BQUtrRCxLQUFMLENBQVdGLElBQWYsRUFBcUI7VUFFZmhELEtBQUssR0FBRzhZLGFBQVcsQ0FBQyxNQUFLemEsS0FBTCxDQUFXMGEsUUFBWixDQUF6Qjs7WUFDSzlWLFFBQUwsQ0FBYztRQUFFakQsS0FBSyxFQUFMQSxLQUFGO1FBQVNnRCxJQUFJLEVBQUU7T0FBN0I7Ozs0RkFHYyxZQUFNO1VBQ2hCLE1BQUtFLEtBQUwsQ0FBV0YsSUFBZixFQUFxQixNQUFLQyxRQUFMLENBQWM7UUFBRUQsSUFBSSxFQUFFO09BQXRCOzs7Ozs7OzswQ0FaRDNFLE9BQWM2RSxPQUFjO2FBQ3pDLEtBQUtBLEtBQUwsQ0FBV0YsSUFBWCxLQUFvQkUsS0FBSyxDQUFDRixJQUExQixJQUFrQyxLQUFLM0UsS0FBTCxDQUFXTSxLQUFYLEtBQXFCTixLQUFLLENBQUNNLEtBQXBFOzs7OzZCQWNPO3dCQUMwQyxLQUFLTixLQUQvQztVQUNDTSxLQURELGVBQ0NBLEtBREQ7VUFDUUcsUUFEUixlQUNRQSxRQURSO1VBQ2tCa0IsS0FEbEIsZUFDa0JBLEtBRGxCO1VBQ3lCbGMsR0FEekIsZUFDeUJBLEdBRHpCO1VBQ2lDaWIsSUFEakM7O1VBRUNpRSxJQUZELEdBRVUsS0FBS0UsS0FGZixDQUVDRixJQUZEOztVQUdEZ1ksWUFBWSxxQkFBUWhiLEtBQVIsRUFBa0IsS0FBS2tELEtBQUwsQ0FBV2xELEtBQTdCLENBQWxCOzthQUVFbGQ7UUFDRSxRQUFRLEVBQUUsQ0FEWjtRQUVFLElBQUksRUFBQyxRQUZQO1FBR0UsT0FBTyxFQUFFLEtBQUttNEIsWUFIaEI7UUFJRSxNQUFNLEVBQUUsS0FBS0MsYUFKZjtRQUtFLEtBQUssRUFBRTtVQUFFQyxPQUFPLEVBQUUsT0FBWDtVQUFvQnBDLFFBQVEsRUFBRTtTQUx2QztjQU1PajFCO1NBRUo2YSxLQVJILEVBU0U3Yiw2QkFBQyxhQUFEO1FBQ0UsVUFBVSxFQUFFO1VBQ1ZteEIsTUFBTSxFQUFFLE9BREU7VUFFVnZCLFNBQVMsRUFBRSxPQUZEO1VBR1ZILElBQUksRUFBRTtTQUpWO1FBTUUsRUFBRSxFQUFFdlAsSUFOTjtRQU9FLE9BQU8sRUFBRSxHQVBYO1FBUUUsYUFBYTtTQUVibGdCLDZCQUFDczJCLFNBQUQ7UUFBUyxJQUFJLEVBQUMsU0FBZDtRQUF3QixLQUFLLEVBQUU0QjtTQUFrQmpjLElBQWpELEdBQ0dELFFBREgsQ0FWRixDQVRGLENBREY7Ozs7O0VBNUJpQ3dCOztnQkFBaEJ5YSx5QkFDRztFQUNwQmhDLFFBQVEsRUFBRSxhQURVO0VBRXBCcnhCLEtBQUssRUFBRSxPQUZhO0VBR3BCc1ksS0FBSyxFQUFFOzs7Ozs7O0FDekZYLElBQU1vYixPQUFPLEdBQUcsRUFBaEI7QUFFQSxJQUFNOW5CLFNBQU87O0FBQUdwUCxlQUFNLENBQUNDLEdBQVY7Ozswc0JBOENXO01BQUdzWSxXQUFILFFBQUdBLFdBQUg7U0FBcUJBLFdBQVcsSUFBSSxhQUFwQztDQTlDWCxFQWlEVDtNQUFHM1ksR0FBSCxTQUFHQSxHQUFIO1NBQWFBLEdBQUcsSUFBSSxFQUFwQjtDQWpEUyxDQUFiOztJQStFcUJ1M0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt3RkFjUCxVQUFDam5CLENBQUQsRUFBWTtVQUNsQixNQUFLaUssS0FBTCxDQUFXaWQsVUFBWCxJQUF5QmxuQixDQUFDLENBQUNtbkIsT0FBRixLQUFjSCxPQUF2QyxJQUFrRCxNQUFLL2MsS0FBTCxDQUFXbWQsVUFBakUsRUFBNkU7Y0FDdEVuZCxLQUFMLENBQVdtZCxVQUFYOzs7OzZGQUlhLFlBQU07VUFDakIsTUFBS25kLEtBQUwsQ0FBV29kLGNBQVgsSUFBNkIsTUFBS3BkLEtBQUwsQ0FBV21kLFVBQTVDLEVBQXdEO2NBQ2pEbmQsS0FBTCxDQUFXbWQsVUFBWDs7Ozs7OzBGQUswQjs7Ozs7OzsyQ0FuQlA7VUFDakIsS0FBS2hRLE9BQVQsRUFBa0I7UUFDaEJrUSxRQUFRLENBQUNDLElBQVQsQ0FBY0MsV0FBZCxDQUEwQixLQUFLcFEsT0FBL0I7Ozs7OzZCQW1CK0I7VUFDN0IsT0FBT2tRLFFBQVAsS0FBb0IsV0FBcEIsSUFBbUMsQ0FBQyxLQUFLbFEsT0FBN0MsRUFBc0Q7YUFDL0NBLE9BQUwsR0FBZWtRLFFBQVEsQ0FBQzdDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBZjtRQUNBNkMsUUFBUSxDQUFDQyxJQUFULENBQWNFLFdBQWQsQ0FBMEIsS0FBS3JRLE9BQS9COzs7VUFHRSxLQUFLQSxPQUFULEVBQWtCOzBCQUdaLEtBQUtuTixLQUhPO1lBRWQyRSxLQUZjLGVBRWRBLElBRmM7WUFFUnJlLEtBRlEsZUFFUkEsSUFGUTtZQUVGZzJCLE1BRkUsZUFFRkEsS0FGRTtZQUVLN2IsU0FGTCxlQUVLQSxRQUZMO1lBRWVxYixPQUZmLGVBRWVBLE1BRmY7WUFFdUJ6eUIsTUFGdkIsZUFFdUJBLEtBRnZCO1lBRThCaWMsT0FGOUIsZUFFOEJBLE9BRjlCO1lBRTBDNUUsSUFGMUM7O2VBS1QrYyxxQkFBWSxDQUNqQmg1Qiw2QkFBQyxhQUFEO1VBQ0UsVUFBVSxFQUFDLE1BRGI7VUFFRSxPQUFPLEVBQUUsR0FGWDtVQUdFLEVBQUUsRUFBRWtnQixLQUhOO1VBSUUsYUFBYTtXQUVibGdCLDZCQUFDd1EsU0FBRDtVQUFTLElBQUksRUFBQztXQUFleUwsSUFBN0IsR0FDRWpjLDZCQUFDLEdBQUQ7VUFBSyxTQUFTLEVBQUMsY0FBZjtVQUE4QixJQUFJLEVBQUU2QixLQUFwQztVQUEwQyxJQUFJLE1BQTlDO1VBQStDLElBQUksRUFBQztXQUNsRDdCLDZCQUFDLEdBQUQ7VUFBSyxLQUFLLEVBQUU0RTtXQUNUaXpCLE1BQUssR0FBR0EsTUFBSCxHQUFXLElBRG5CLEVBRUc3YixTQUZILEVBR0dxYixPQUFNLEdBQUdBLE9BQUgsR0FBWSxJQUhyQixDQURGLENBREYsRUFRRyxLQUFLOWIsS0FBTCxDQUFXMGQsUUFSZCxFQVNFajVCO1VBQUssU0FBUyxFQUFDLGdCQUFmO1VBQWdDLE9BQU8sRUFBRSxLQUFLazVCO1VBVGhELENBTkYsQ0FEaUIsRUFtQmhCLEtBQUt4USxPQW5CVyxDQUFuQjs7O2FBcUJLLElBQVA7Ozs7O0VBN0QrQmpOOztnQkFBZDhjLHVCQUNHO0VBQ3BCclksSUFBSSxFQUFFLEtBRGM7RUFFcEJ0YixLQUFLLEVBQUUsT0FGYTtFQUdwQi9DLElBQUksRUFBRSxDQUhjO0VBSXBCOFgsV0FBVyxFQUFFOzs7O0FDOUZqQjtFQUVBdlcsa0JBQUEsR0FBcUIsSUFBckI7RUFDQUEsdUJBQUEsR0FBMEIrMUIsZUFBMUI7RUFDQS8xQiwwQkFBQSxHQUE2QmcyQixrQkFBN0I7RUFDQWgyQiw4QkFBQSxHQUFpQ2kyQixzQkFBakM7RUFDQWoyQiwyQkFBQSxHQUE4QmsyQixtQkFBOUI7Ozs7Ozs7O1dBVVNILGVBQVQsQ0FBeUJuZCxRQUF6QixFQUFtQ3VkLEtBQW5DLEVBQTBDO1FBQ3BDQyxNQUFNLEdBQUcsU0FBU0EsTUFBVCxDQUFnQnZGLEtBQWhCLEVBQXVCO2FBQzNCc0YsS0FBSyxJQUFJLENBQUMsR0FBR3RKLGNBQU0sQ0FBQzVJLGNBQVgsRUFBMkI0TSxLQUEzQixDQUFULEdBQTZDc0YsS0FBSyxDQUFDdEYsS0FBRCxDQUFsRCxHQUE0REEsS0FBbkU7S0FERjs7UUFJSXdGLE1BQU0sR0FBRy9wQixNQUFNLENBQUNDLE1BQVAsQ0FBYyxJQUFkLENBQWI7UUFDSXFNLFFBQUosRUFBY2lVLGNBQU0sQ0FBQ2lFLFFBQVAsQ0FBZ0JsYixHQUFoQixDQUFvQmdELFFBQXBCLEVBQThCLFVBQVV2SixDQUFWLEVBQWE7YUFDaERBLENBQVA7S0FEWSxFQUVYQyxPQUZXLENBRUgsVUFBVXVoQixLQUFWLEVBQWlCOztNQUUxQndGLE1BQU0sQ0FBQ3hGLEtBQUssQ0FBQzNiLEdBQVAsQ0FBTixHQUFvQmtoQixNQUFNLENBQUN2RixLQUFELENBQTFCO0tBSlk7V0FNUHdGLE1BQVA7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztXQXFCT0wsa0JBQVQsQ0FBNEJNLElBQTVCLEVBQWtDck4sSUFBbEMsRUFBd0M7SUFDdENxTixJQUFJLEdBQUdBLElBQUksSUFBSSxFQUFmO0lBQ0FyTixJQUFJLEdBQUdBLElBQUksSUFBSSxFQUFmOzthQUVTc04sY0FBVCxDQUF3QnJoQixHQUF4QixFQUE2QjthQUNwQkEsR0FBRyxJQUFJK1QsSUFBUCxHQUFjQSxJQUFJLENBQUMvVCxHQUFELENBQWxCLEdBQTBCb2hCLElBQUksQ0FBQ3BoQixHQUFELENBQXJDO0tBTG9DOzs7O1FBVWxDc2hCLGVBQWUsR0FBR2xxQixNQUFNLENBQUNDLE1BQVAsQ0FBYyxJQUFkLENBQXRCO1FBQ0lrcUIsV0FBVyxHQUFHLEVBQWxCOztTQUVLLElBQUlDLE9BQVQsSUFBb0JKLElBQXBCLEVBQTBCO1VBQ3BCSSxPQUFPLElBQUl6TixJQUFmLEVBQXFCO1lBQ2Z3TixXQUFXLENBQUNyMkIsTUFBaEIsRUFBd0I7VUFDdEJvMkIsZUFBZSxDQUFDRSxPQUFELENBQWYsR0FBMkJELFdBQTNCO1VBQ0FBLFdBQVcsR0FBRyxFQUFkOztPQUhKLE1BS087UUFDTEEsV0FBVyxDQUFDbm9CLElBQVosQ0FBaUJvb0IsT0FBakI7Ozs7UUFJQTFoQixDQUFKO1FBQ0kyaEIsWUFBWSxHQUFHLEVBQW5COztTQUVLLElBQUlDLE9BQVQsSUFBb0IzTixJQUFwQixFQUEwQjtVQUNwQnVOLGVBQWUsQ0FBQ0ksT0FBRCxDQUFuQixFQUE4QjthQUN2QjVoQixDQUFDLEdBQUcsQ0FBVCxFQUFZQSxDQUFDLEdBQUd3aEIsZUFBZSxDQUFDSSxPQUFELENBQWYsQ0FBeUJ4MkIsTUFBekMsRUFBaUQ0VSxDQUFDLEVBQWxELEVBQXNEO2NBQ2hENmhCLGNBQWMsR0FBR0wsZUFBZSxDQUFDSSxPQUFELENBQWYsQ0FBeUI1aEIsQ0FBekIsQ0FBckI7VUFDQTJoQixZQUFZLENBQUNILGVBQWUsQ0FBQ0ksT0FBRCxDQUFmLENBQXlCNWhCLENBQXpCLENBQUQsQ0FBWixHQUE0Q3VoQixjQUFjLENBQUNNLGNBQUQsQ0FBMUQ7Ozs7TUFJSkYsWUFBWSxDQUFDQyxPQUFELENBQVosR0FBd0JMLGNBQWMsQ0FBQ0ssT0FBRCxDQUF0QztLQW5Db0M7OztTQXVDakM1aEIsQ0FBQyxHQUFHLENBQVQsRUFBWUEsQ0FBQyxHQUFHeWhCLFdBQVcsQ0FBQ3IyQixNQUE1QixFQUFvQzRVLENBQUMsRUFBckMsRUFBeUM7TUFDdkMyaEIsWUFBWSxDQUFDRixXQUFXLENBQUN6aEIsQ0FBRCxDQUFaLENBQVosR0FBK0J1aEIsY0FBYyxDQUFDRSxXQUFXLENBQUN6aEIsQ0FBRCxDQUFaLENBQTdDOzs7V0FHSzJoQixZQUFQOzs7V0FHT0csT0FBVCxDQUFpQmpHLEtBQWpCLEVBQXdCa0csSUFBeEIsRUFBOEI1ZSxLQUE5QixFQUFxQztXQUM1QkEsS0FBSyxDQUFDNGUsSUFBRCxDQUFMLElBQWUsSUFBZixHQUFzQjVlLEtBQUssQ0FBQzRlLElBQUQsQ0FBM0IsR0FBb0NsRyxLQUFLLENBQUMxWSxLQUFOLENBQVk0ZSxJQUFaLENBQTNDOzs7V0FHT2Qsc0JBQVQsQ0FBZ0M5ZCxLQUFoQyxFQUF1QzZYLFFBQXZDLEVBQWlEO1dBQ3hDK0YsZUFBZSxDQUFDNWQsS0FBSyxDQUFDUyxRQUFQLEVBQWlCLFVBQVVpWSxLQUFWLEVBQWlCO2FBQy9DLENBQUMsR0FBR2hFLGNBQU0sQ0FBQ21FLFlBQVgsRUFBeUJILEtBQXpCLEVBQWdDO1FBQ3JDYixRQUFRLEVBQUVBLFFBQVEsQ0FBQ3ZoQixJQUFULENBQWMsSUFBZCxFQUFvQm9pQixLQUFwQixDQUQyQjtRQUVyQzFDLEVBQUUsRUFBRSxJQUZpQztRQUdyQ0osTUFBTSxFQUFFK0ksT0FBTyxDQUFDakcsS0FBRCxFQUFRLFFBQVIsRUFBa0IxWSxLQUFsQixDQUhzQjtRQUlyQ2lVLEtBQUssRUFBRTBLLE9BQU8sQ0FBQ2pHLEtBQUQsRUFBUSxPQUFSLEVBQWlCMVksS0FBakIsQ0FKdUI7UUFLckNrVSxJQUFJLEVBQUV5SyxPQUFPLENBQUNqRyxLQUFELEVBQVEsTUFBUixFQUFnQjFZLEtBQWhCO09BTFIsQ0FBUDtLQURvQixDQUF0Qjs7O1dBV08rZCxtQkFBVCxDQUE2QnZMLFNBQTdCLEVBQXdDcU0sZ0JBQXhDLEVBQTBEaEgsUUFBMUQsRUFBb0U7UUFDOURpSCxnQkFBZ0IsR0FBR2xCLGVBQWUsQ0FBQ3BMLFNBQVMsQ0FBQy9SLFFBQVgsQ0FBdEM7UUFDSUEsUUFBUSxHQUFHb2Qsa0JBQWtCLENBQUNnQixnQkFBRCxFQUFtQkMsZ0JBQW5CLENBQWpDO0lBQ0EzcUIsTUFBTSxDQUFDcUosSUFBUCxDQUFZaUQsUUFBWixFQUFzQnRKLE9BQXRCLENBQThCLFVBQVU0RixHQUFWLEVBQWU7VUFDdkMyYixLQUFLLEdBQUdqWSxRQUFRLENBQUMxRCxHQUFELENBQXBCO1VBQ0ksQ0FBQyxDQUFDLEdBQUcyWCxjQUFNLENBQUM1SSxjQUFYLEVBQTJCNE0sS0FBM0IsQ0FBTCxFQUF3QztVQUNwQ3FHLE9BQU8sR0FBR2hpQixHQUFHLElBQUk4aEIsZ0JBQXJCO1VBQ0lHLE9BQU8sR0FBR2ppQixHQUFHLElBQUkraEIsZ0JBQXJCO1VBQ0lHLFNBQVMsR0FBR0osZ0JBQWdCLENBQUM5aEIsR0FBRCxDQUFoQztVQUNJbWlCLFNBQVMsR0FBRyxDQUFDLEdBQUd4SyxjQUFNLENBQUM1SSxjQUFYLEVBQTJCbVQsU0FBM0IsS0FBeUMsQ0FBQ0EsU0FBUyxDQUFDamYsS0FBVixDQUFnQmdXLEVBQTFFLENBTjJDOztVQVF2Q2dKLE9BQU8sS0FBSyxDQUFDRCxPQUFELElBQVlHLFNBQWpCLENBQVgsRUFBd0M7O1FBRXRDemUsUUFBUSxDQUFDMUQsR0FBRCxDQUFSLEdBQWdCLENBQUMsR0FBRzJYLGNBQU0sQ0FBQ21FLFlBQVgsRUFBeUJILEtBQXpCLEVBQWdDO1VBQzlDYixRQUFRLEVBQUVBLFFBQVEsQ0FBQ3ZoQixJQUFULENBQWMsSUFBZCxFQUFvQm9pQixLQUFwQixDQURvQztVQUU5QzFDLEVBQUUsRUFBRSxJQUYwQztVQUc5QzlCLElBQUksRUFBRXlLLE9BQU8sQ0FBQ2pHLEtBQUQsRUFBUSxNQUFSLEVBQWdCbEcsU0FBaEIsQ0FIaUM7VUFJOUN5QixLQUFLLEVBQUUwSyxPQUFPLENBQUNqRyxLQUFELEVBQVEsT0FBUixFQUFpQmxHLFNBQWpCO1NBSkEsQ0FBaEI7T0FGRixNQVFPLElBQUksQ0FBQ3dNLE9BQUQsSUFBWUQsT0FBWixJQUF1QixDQUFDRyxTQUE1QixFQUF1Qzs7O1FBRzVDemUsUUFBUSxDQUFDMUQsR0FBRCxDQUFSLEdBQWdCLENBQUMsR0FBRzJYLGNBQU0sQ0FBQ21FLFlBQVgsRUFBeUJILEtBQXpCLEVBQWdDO1VBQzlDMUMsRUFBRSxFQUFFO1NBRFUsQ0FBaEI7T0FISyxNQU1BLElBQUlnSixPQUFPLElBQUlELE9BQVgsSUFBc0IsQ0FBQyxHQUFHckssY0FBTSxDQUFDNUksY0FBWCxFQUEyQm1ULFNBQTNCLENBQTFCLEVBQWlFOzs7O1FBSXRFeGUsUUFBUSxDQUFDMUQsR0FBRCxDQUFSLEdBQWdCLENBQUMsR0FBRzJYLGNBQU0sQ0FBQ21FLFlBQVgsRUFBeUJILEtBQXpCLEVBQWdDO1VBQzlDYixRQUFRLEVBQUVBLFFBQVEsQ0FBQ3ZoQixJQUFULENBQWMsSUFBZCxFQUFvQm9pQixLQUFwQixDQURvQztVQUU5QzFDLEVBQUUsRUFBRWlKLFNBQVMsQ0FBQ2pmLEtBQVYsQ0FBZ0JnVyxFQUYwQjtVQUc5QzlCLElBQUksRUFBRXlLLE9BQU8sQ0FBQ2pHLEtBQUQsRUFBUSxNQUFSLEVBQWdCbEcsU0FBaEIsQ0FIaUM7VUFJOUN5QixLQUFLLEVBQUUwSyxPQUFPLENBQUNqRyxLQUFELEVBQVEsT0FBUixFQUFpQmxHLFNBQWpCO1NBSkEsQ0FBaEI7O0tBMUJKO1dBa0NPL1IsUUFBUDs7Ozs7Ozs7OztBQ3BKRjtFQUVBNVksa0JBQUEsR0FBcUIsSUFBckI7RUFDQUEsZUFBQSxHQUFrQixLQUFLLENBQXZCOztNQUVJa3NCLFVBQVUsR0FBRy9iLHNCQUFzQixDQUFDQyxTQUFELENBQXZDOztNQUVJeWMsTUFBTSxHQUFHMWMsc0JBQXNCLENBQUNHLGNBQUQsQ0FBbkM7O1dBTVNILHNCQUFULENBQWdDTSxHQUFoQyxFQUFxQztXQUFTQSxHQUFHLElBQUlBLEdBQUcsQ0FBQ0MsVUFBWCxHQUF3QkQsR0FBeEIsR0FBOEI7TUFBRXpQLE9BQU8sRUFBRXlQO0tBQWhEOzs7V0FFOUJ5Yyw2QkFBVCxDQUF1Q2pZLE1BQXZDLEVBQStDa1ksUUFBL0MsRUFBeUQ7UUFBTWxZLE1BQU0sSUFBSSxJQUFkLEVBQW9CLE9BQU8sRUFBUDtRQUFlRixNQUFNLEdBQUcsRUFBYjtRQUFxQnFZLFVBQVUsR0FBRzlnQixNQUFNLENBQUNxSixJQUFQLENBQVlWLE1BQVosQ0FBakI7UUFBMENDLEdBQUosRUFBU0YsQ0FBVDs7U0FBaUJBLENBQUMsR0FBRyxDQUFULEVBQVlBLENBQUMsR0FBR29ZLFVBQVUsQ0FBQ2h0QixNQUEzQixFQUFtQzRVLENBQUMsRUFBcEMsRUFBd0M7TUFBRUUsR0FBRyxHQUFHa1ksVUFBVSxDQUFDcFksQ0FBRCxDQUFoQjtVQUF5Qm1ZLFFBQVEsQ0FBQ3hlLE9BQVQsQ0FBaUJ1RyxHQUFqQixLQUF5QixDQUE3QixFQUFnQztNQUFVSCxNQUFNLENBQUNHLEdBQUQsQ0FBTixHQUFjRCxNQUFNLENBQUNDLEdBQUQsQ0FBcEI7OztXQUFvQ0gsTUFBUDs7O1dBRTFSRixRQUFULEdBQW9CO0lBQUVBLFFBQVEsR0FBR3ZJLE1BQU0sQ0FBQ3dJLE1BQVAsSUFBaUIsVUFBVUMsTUFBVixFQUFrQjtXQUFPLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUduVSxTQUFTLENBQUNULE1BQTlCLEVBQXNDNFUsQ0FBQyxFQUF2QyxFQUEyQztZQUFNQyxNQUFNLEdBQUdwVSxTQUFTLENBQUNtVSxDQUFELENBQXRCOzthQUFnQyxJQUFJRSxHQUFULElBQWdCRCxNQUFoQixFQUF3QjtjQUFNM0ksTUFBTSxDQUFDNUwsU0FBUCxDQUFpQnlVLGNBQWpCLENBQWdDdlUsSUFBaEMsQ0FBcUNxVSxNQUFyQyxFQUE2Q0MsR0FBN0MsQ0FBSixFQUF1RDtZQUFFSCxNQUFNLENBQUNHLEdBQUQsQ0FBTixHQUFjRCxNQUFNLENBQUNDLEdBQUQsQ0FBcEI7Ozs7O2FBQXdDSCxNQUFQO0tBQTVPOztXQUFxUUYsUUFBUSxDQUFDL1QsS0FBVCxDQUFlLElBQWYsRUFBcUJELFNBQXJCLENBQVA7OztXQUUzUXNMLGNBQVQsQ0FBd0JDLFFBQXhCLEVBQWtDQyxVQUFsQyxFQUE4QztJQUFFRCxRQUFRLENBQUMxTCxTQUFULEdBQXFCNEwsTUFBTSxDQUFDQyxNQUFQLENBQWNGLFVBQVUsQ0FBQzNMLFNBQXpCLENBQXJCO0lBQTBEMEwsUUFBUSxDQUFDMUwsU0FBVCxDQUFtQjhMLFdBQW5CLEdBQWlDSixRQUFqQztJQUEyQ0EsUUFBUSxDQUFDSyxTQUFULEdBQXFCSixVQUFyQjs7O1dBRTVJTCxzQkFBVCxDQUFnQ0MsSUFBaEMsRUFBc0M7UUFBTUEsSUFBSSxLQUFLLEtBQUssQ0FBbEIsRUFBcUI7WUFBUSxJQUFJQyxjQUFKLENBQW1CLDJEQUFuQixDQUFOOzs7V0FBZ0dELElBQVA7OztNQUVwSnVYLE1BQU0sR0FBR2xYLE1BQU0sQ0FBQ2tYLE1BQVAsSUFBaUIsVUFBVS9TLEdBQVYsRUFBZTtXQUNwQ25FLE1BQU0sQ0FBQ3FKLElBQVAsQ0FBWWxGLEdBQVosRUFBaUJtRixHQUFqQixDQUFxQixVQUFVb0ksQ0FBVixFQUFhO2FBQ2hDdk4sR0FBRyxDQUFDdU4sQ0FBRCxDQUFWO0tBREssQ0FBUDtHQURGOztNQU1JN2YsWUFBWSxHQUFHO0lBQ2pCbTVCLFNBQVMsRUFBRSxLQURNO0lBRWpCQyxZQUFZLEVBQUUsU0FBU0EsWUFBVCxDQUFzQjFHLEtBQXRCLEVBQTZCO2FBQ2xDQSxLQUFQOzs7Ozs7Ozs7Ozs7Ozs7OztHQUhKOztNQXNCSTJHLGVBQWU7O1lBRVQ3SixnQkFBVixFQUE0QjtJQUMxQnhoQixjQUFjLENBQUNxckIsZUFBRCxFQUFrQjdKLGdCQUFsQixDQUFkOzthQUVTNkosZUFBVCxDQUF5QnJmLEtBQXpCLEVBQWdDeVYsT0FBaEMsRUFBeUM7VUFDbkNqZSxLQUFKOztNQUVBQSxLQUFLLEdBQUdnZSxnQkFBZ0IsQ0FBQy9zQixJQUFqQixDQUFzQixJQUF0QixFQUE0QnVYLEtBQTVCLEVBQW1DeVYsT0FBbkMsS0FBK0MsSUFBdkQ7O1VBRUk2SixZQUFZLEdBQUc5bkIsS0FBSyxDQUFDOG5CLFlBQU4sQ0FBbUJocEIsSUFBbkIsQ0FBd0J6QyxzQkFBc0IsQ0FBQ0Esc0JBQXNCLENBQUMyRCxLQUFELENBQXZCLENBQTlDLENBQW5CLENBTHVDOzs7TUFRdkNBLEtBQUssQ0FBQ3FOLEtBQU4sR0FBYztRQUNaeWEsWUFBWSxFQUFFQSxZQURGO1FBRVpDLFdBQVcsRUFBRTtPQUZmO2FBSU8vbkIsS0FBUDs7O1FBR0U2ZSxNQUFNLEdBQUdnSixlQUFlLENBQUM5MkIsU0FBN0I7O0lBRUE4dEIsTUFBTSxDQUFDQyxlQUFQLEdBQXlCLFNBQVNBLGVBQVQsR0FBMkI7YUFDM0M7UUFDTFgsZUFBZSxFQUFFO1VBQ2ZFLFVBQVUsRUFBRSxDQUFDLEtBQUsySjs7T0FGdEI7S0FERjs7SUFRQW5KLE1BQU0sQ0FBQ0ksaUJBQVAsR0FBMkIsU0FBU0EsaUJBQVQsR0FBNkI7V0FDakQrSSxRQUFMLEdBQWdCLElBQWhCO1dBQ0tDLE9BQUwsR0FBZSxJQUFmO0tBRkY7O0lBS0FwSixNQUFNLENBQUNPLG9CQUFQLEdBQThCLFNBQVNBLG9CQUFULEdBQWdDO1dBQ3ZENkksT0FBTCxHQUFlLEtBQWY7S0FERjs7SUFJQUosZUFBZSxDQUFDL00sd0JBQWhCLEdBQTJDLFNBQVNBLHdCQUFULENBQWtDRSxTQUFsQyxFQUE2QytELElBQTdDLEVBQW1EO1VBQ3hGc0ksZ0JBQWdCLEdBQUd0SSxJQUFJLENBQUM5VixRQUE1QjtVQUNJNmUsWUFBWSxHQUFHL0ksSUFBSSxDQUFDK0ksWUFEeEI7VUFFSUMsV0FBVyxHQUFHaEosSUFBSSxDQUFDZ0osV0FGdkI7YUFHTztRQUNMOWUsUUFBUSxFQUFFOGUsV0FBVyxHQUFHLENBQUMsR0FBR0csWUFBYSxDQUFDNUIsc0JBQWxCLEVBQTBDdEwsU0FBMUMsRUFBcUQ4TSxZQUFyRCxDQUFILEdBQXdFLENBQUMsR0FBR0ksWUFBYSxDQUFDM0IsbUJBQWxCLEVBQXVDdkwsU0FBdkMsRUFBa0RxTSxnQkFBbEQsRUFBb0VTLFlBQXBFLENBRHhGO1FBRUxDLFdBQVcsRUFBRTtPQUZmO0tBSkY7O0lBVUFsSixNQUFNLENBQUNpSixZQUFQLEdBQXNCLFNBQVNBLFlBQVQsQ0FBc0I1RyxLQUF0QixFQUE2QmpMLElBQTdCLEVBQW1DO1VBQ25Ea1MsbUJBQW1CLEdBQUcsQ0FBQyxHQUFHRCxZQUFhLENBQUM5QixlQUFsQixFQUFtQyxLQUFLNWQsS0FBTCxDQUFXUyxRQUE5QyxDQUExQjtVQUNJaVksS0FBSyxDQUFDM2IsR0FBTixJQUFhNGlCLG1CQUFqQixFQUFzQzs7VUFFbENqSCxLQUFLLENBQUMxWSxLQUFOLENBQVk2WCxRQUFoQixFQUEwQjtRQUN4QmEsS0FBSyxDQUFDMVksS0FBTixDQUFZNlgsUUFBWixDQUFxQnBLLElBQXJCOzs7VUFHRSxLQUFLZ1MsT0FBVCxFQUFrQjthQUNYN2EsUUFBTCxDQUFjLFVBQVVDLEtBQVYsRUFBaUI7Y0FDekJwRSxRQUFRLEdBQUcvRCxRQUFRLENBQUMsRUFBRCxFQUFLbUksS0FBSyxDQUFDcEUsUUFBWCxDQUF2Qjs7aUJBRU9BLFFBQVEsQ0FBQ2lZLEtBQUssQ0FBQzNiLEdBQVAsQ0FBZjtpQkFDTztZQUNMMEQsUUFBUSxFQUFFQTtXQURaO1NBSkY7O0tBVEo7O0lBb0JBNFYsTUFBTSxDQUFDM1QsTUFBUCxHQUFnQixTQUFTQSxNQUFULEdBQWtCO1VBQzVCOFYsV0FBVyxHQUFHLEtBQUt4WSxLQUF2QjtVQUNJaUMsU0FBUyxHQUFHdVcsV0FBVyxDQUFDMkcsU0FENUI7VUFFSUMsWUFBWSxHQUFHNUcsV0FBVyxDQUFDNEcsWUFGL0I7VUFHSXBmLEtBQUssR0FBRytVLDZCQUE2QixDQUFDeUQsV0FBRCxFQUFjLENBQUMsV0FBRCxFQUFjLGNBQWQsQ0FBZCxDQUh6Qzs7VUFLSS9YLFFBQVEsR0FBRzRLLE1BQU0sQ0FBQyxLQUFLeEcsS0FBTCxDQUFXcEUsUUFBWixDQUFOLENBQTRCaEQsR0FBNUIsQ0FBZ0MyaEIsWUFBaEMsQ0FBZjthQUNPcGYsS0FBSyxDQUFDNFYsTUFBYjthQUNPNVYsS0FBSyxDQUFDaVUsS0FBYjthQUNPalUsS0FBSyxDQUFDa1UsSUFBYjs7VUFFSWpTLFNBQVMsS0FBSyxJQUFsQixFQUF3QjtlQUNmeEIsUUFBUDs7O2FBR0tpVSxNQUFNLENBQUM3ckIsT0FBUCxDQUFlMnhCLGFBQWYsQ0FBNkJ2WSxTQUE3QixFQUF3Q2pDLEtBQXhDLEVBQStDUyxRQUEvQyxDQUFQO0tBZkY7O1dBa0JPNGUsZUFBUDtHQXJGRixDQXNGRTNLLE1BQU0sQ0FBQzdyQixPQUFQLENBQWVvWixTQXRGakIsQ0FGQTs7RUEwRkFvZCxlQUFlLENBQUN0RyxpQkFBaEIsR0FBb0M7SUFDbENwRCxlQUFlLEVBQUU1QixVQUFVLENBQUNsckIsT0FBWCxDQUFtQmtmLE1BQW5CLENBQTBCOEc7R0FEN0M7RUFHQXdRLGVBQWUsQ0FBQ3JHLFNBQWhCLEdBQTRCdmhCLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxRQUFaLEtBQXlCLFlBQXpCLEdBQXdDOzs7Ozs7OztJQVFsRXduQixTQUFTLEVBQUVwTCxVQUFVLENBQUNsckIsT0FBWCxDQUFtQmtrQixHQVJvQzs7Ozs7Ozs7SUFnQmxFdE0sUUFBUSxFQUFFc1QsVUFBVSxDQUFDbHJCLE9BQVgsQ0FBbUI0a0IsSUFoQnFDOzs7Ozs7O0lBdUJsRW1JLE1BQU0sRUFBRTdCLFVBQVUsQ0FBQ2xyQixPQUFYLENBQW1CNmpCLElBdkJ1Qzs7Ozs7OztJQThCbEV1SCxLQUFLLEVBQUVGLFVBQVUsQ0FBQ2xyQixPQUFYLENBQW1CNmpCLElBOUJ3Qzs7Ozs7OztJQXFDbEV3SCxJQUFJLEVBQUVILFVBQVUsQ0FBQ2xyQixPQUFYLENBQW1CNmpCLElBckN5Qzs7Ozs7Ozs7Ozs7O0lBaURsRTBTLFlBQVksRUFBRXJMLFVBQVUsQ0FBQ2xyQixPQUFYLENBQW1COGpCO0dBakRQLEdBa0R4QixFQWxESjtFQW1EQTBTLGVBQWUsQ0FBQ3I1QixZQUFoQixHQUErQkEsWUFBL0I7O01BRUltRCxRQUFRLEdBQUcsQ0FBQyxHQUFHaXdCLHdCQUFzQixDQUFDbEcsUUFBM0IsRUFBcUNtTSxlQUFyQyxDQUFmOztFQUVBeDNCLGVBQUEsR0FBa0JzQixRQUFsQjtFQUNBUCxjQUFBLEdBQWlCZixPQUFPLENBQUMsU0FBRCxDQUF4Qjs7OztBQzlLQSxJQUFNb04sU0FBTzs7QUFBR3BQLGVBQU0sQ0FBQ2dhLEdBQUQsQ0FBVDs7OytaQUFiO0FBNkJBLElBQWErZixTQUFiOztBQUFBOzs7Ozs7Ozs7Ozt3Q0FLc0I7VUFDZCxLQUFLNWYsS0FBTCxDQUFXNmYsUUFBWCxLQUF3QixJQUE1QixFQUFrQztRQUNoQ3RILFVBQVUsQ0FBQyxLQUFLdlksS0FBTCxDQUFXOGYsS0FBWixFQUFtQixLQUFLOWYsS0FBTCxDQUFXNmYsUUFBOUIsQ0FBVjs7Ozs7NkJBSUs7d0JBQ29CLEtBQUs3ZixLQUR6QjtVQUNDd0gsT0FERCxlQUNDQSxPQUREO1VBQ1VuZSxLQURWLGVBQ1VBLEtBRFY7YUFHTDVFLDZCQUFDd1EsU0FBRDtRQUFTLFVBQVUsTUFBbkI7UUFBb0IsS0FBSyxFQUFFNUw7U0FDeEJtZSxPQURILENBREY7Ozs7O0VBYjJCdEgsbUJBQS9COztnQkFBYTBmLDJCQUNXO0VBQ3BCQyxRQUFRLEVBQUU7OztBQW1CZCxTQUFTRSxXQUFULENBQXFCckYsUUFBckIsRUFBdUNzRixPQUF2QyxFQUEwRDs7TUFFbERDLElBQUksdUJBQWdCRCxPQUFPLEdBQUcsT0FBSCxHQUFhLFVBQXBDLDZEQUFWOztVQUNRdEYsUUFBUjtTQUNPLFFBQUw7O3lCQUNZdUYsSUFBVjs7O1NBRUcsYUFBTDs7eUJBQ1lBLElBQVY7OztTQUVHLGNBQUw7O3lCQUNZQSxJQUFWOzs7U0FFRyxLQUFMOzt5QkFDWUEsSUFBVjs7O1NBRUcsVUFBTDs7eUJBQ1lBLElBQVY7OztTQUVHLFdBQUw7Ozt5QkFFWUEsSUFBVjs7Ozs7SUFnQmVDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7b0ZBeUJYLFVBQUM1ZCxFQUFEO2FBQWdCLFlBQU07Y0FDdkJ0QyxLQUFMLENBQVc4ZixLQUFYLENBQWlCeGQsRUFBakI7T0FETTs7OzBGQUlNLFlBQU07VUFDVjZkLE1BRFUsR0FDQyxNQUFLbmdCLEtBRE4sQ0FDVm1nQixNQURVO2FBR2hCMTdCLDZCQUFDLGVBQUQ7UUFBaUIsU0FBUyxFQUFFO1NBQ3pCMDdCLE1BQU0sQ0FBQzFpQixHQUFQLENBQVcsVUFBQXVDLEtBQUs7ZUFDZnZiLDZCQUFDLGFBQUQ7VUFDRSxHQUFHLEVBQUV1YixLQUFLLENBQUNzQyxFQURiO1VBRUUsT0FBTyxFQUFFLEdBRlg7VUFHRSxVQUFVLEVBQUMsTUFIYjtVQUlFLGFBQWE7V0FFYjdkLDZCQUFDLFNBQUQ7VUFDRSxHQUFHLEVBQUV1YixLQUFLLENBQUNzQztXQUNQdEMsS0FGTjtVQUdFLEtBQUssRUFBRSxNQUFLOGYsS0FBTCxDQUFXOWYsS0FBSyxDQUFDc0MsRUFBakI7V0FUWCxDQURlO09BQWhCLENBREgsQ0FERjs7Ozs7Ozs7OzswQ0F4Qm9CdEMsT0FBdUI7YUFDcENBLEtBQUssQ0FBQ21nQixNQUFOLENBQWFsNEIsTUFBYixLQUF3QixLQUFLK1gsS0FBTCxDQUFXbWdCLE1BQVgsQ0FBa0JsNEIsTUFBMUMsSUFDTCtYLEtBQUssQ0FBQzBhLFFBQU4sS0FBbUIsS0FBSzFhLEtBQUwsQ0FBVzBhLFFBRGhDOzs7O3VDQUlpQjFhLE9BQXVCO1VBRXRDLEtBQUttTixPQUFMLEtBQ0NuTixLQUFLLENBQUMwYSxRQUFOLEtBQW1CLEtBQUsxYSxLQUFMLENBQVcwYSxRQUE5QixJQUEwQzFhLEtBQUssQ0FBQ3FFLEtBQU4sS0FBZ0IsS0FBS3JFLEtBQUwsQ0FBV3FFLEtBRHRFLENBREYsRUFHRTthQUNLOEksT0FBTCxDQUFheEwsS0FBYixDQUFtQnllLE9BQW5CLEdBQTZCTCxXQUFXLENBQUMsS0FBSy9mLEtBQUwsQ0FBVzBhLFFBQVosRUFBdUIsS0FBSzFhLEtBQUwsQ0FBV3FFLEtBQWxDLENBQXhDOzs7OzsyQ0FJbUI7VUFDakIsS0FBSzhJLE9BQVQsRUFBa0JrUSxRQUFRLENBQUNDLElBQVQsQ0FBY0MsV0FBZCxDQUEwQixLQUFLcFEsT0FBL0I7Ozs7NkJBK0JlO1VBQzdCLE9BQU9rUSxRQUFQLEtBQW9CLFdBQXBCLElBQW1DLENBQUMsS0FBS2xRLE9BQTdDLEVBQXNEO2FBQy9DQSxPQUFMLEdBQWVrUSxRQUFRLENBQUM3QyxhQUFULENBQXVCLEtBQXZCLENBQWY7YUFDS3JOLE9BQUwsQ0FBYXhMLEtBQWIsQ0FBbUJ5ZSxPQUFuQixHQUE2QkwsV0FBVyxDQUFDLEtBQUsvZixLQUFMLENBQVcwYSxRQUFaLEVBQXVCLEtBQUsxYSxLQUFMLENBQVdxRSxLQUFsQyxDQUF4QztRQUNBZ1osUUFBUSxDQUFDQyxJQUFULENBQWNFLFdBQWQsQ0FBMEIsS0FBS3JRLE9BQS9COzs7VUFJRSxLQUFLQSxPQUFULEVBQWtCO2VBQ1RzUSxxQkFBWSxDQUFDLEtBQUs0QyxXQUFMLEVBQUQsRUFBcUIsS0FBS2xULE9BQTFCLENBQW5COzs7YUFFSyxJQUFQOzs7OztFQWhFd0NsTDs7Z0JBQXZCaWUsZ0NBQ0c7RUFDcEJDLE1BQU0sRUFBRSxFQURZO0VBRXBCekYsUUFBUSxFQUFFLFdBRlU7RUFHcEJyVyxLQUFLLEVBQUU7OztBQy9HWCxJQUFNcFAsU0FBTzs7QUFBR3BQLGVBQU0sQ0FBQ3k2QixHQUFWOzs7dUpBRVExYyxRQUZSLEVBT1A7TUFBR0MsS0FBSCxRQUFHQSxLQUFIO1NBQWVBLEtBQUssR0FBRyxFQUFILEdBQVEsZUFBNUI7Q0FQTyxDQUFiO0FBbUJBLElBQU0wYyxPQUFPOztBQUFHMTZCLGVBQU0sQ0FBQ0MsR0FBVjs7O3NWQU9BO01BQUdqQixLQUFILFNBQUdBLEtBQUg7U0FBZUEsS0FBSyxDQUFDK0MsSUFBckI7Q0FQQSxDQUFiOztBQXdCQSxTQUFTK1csVUFBVCxRQUE2RTtNQUF6RDlaLEtBQXlELFNBQXpEQSxLQUF5RDtNQUFsRHdFLEtBQWtELFNBQWxEQSxLQUFrRDtTQUNwRSxDQUFDQSxLQUFELEdBQVN4RSxLQUFLLENBQUN5QyxVQUFmLEdBQTRCekMsS0FBSyxDQUFDd0UsS0FBRCxDQUF4Qzs7O0FBUUYsSUFBTW0zQixTQUFTOztBQUFHMzZCLGVBQU0sQ0FBQ0MsR0FBVjs7OytQQUlPNlksVUFKUCxDQUFmOztJQWdDcUI4aEI7Ozs7Ozs7Ozs7Ozs7Ozs7OztvRkF1Qlg7TUFBRUMsS0FBSyxFQUFFLENBQVQ7TUFBWTFGLE9BQU8sRUFBRTs7O3FGQU9wQixZQUFNO1VBQ1AyRixTQUFTLEdBQUcsTUFBSzNnQixLQUFMLENBQVc0Z0IsUUFBN0I7VUFDTTE2QixLQUFLLEdBQUcsTUFBSzJlLEtBQUwsQ0FBVzZiLEtBQVgsR0FBbUJDLFNBQWpDO1VBQ01FLEtBQUssR0FBR2xJLGNBQVEsQ0FBQ2tJLEtBQVQsQ0FBZSxNQUFLN2dCLEtBQUwsQ0FBV1MsUUFBMUIsQ0FBZDs7VUFDSXZhLEtBQUssR0FBRzI2QixLQUFaLEVBQW1CO2NBQ1pqYyxRQUFMLENBQWM7VUFBRThiLEtBQUssRUFBRXg2QjtTQUF2Qjs7OztxRkFJSyxZQUFNO1VBQ1QsTUFBSzJlLEtBQUwsQ0FBVzZiLEtBQVgsS0FBcUIsQ0FBekIsRUFBNEI7VUFFdEJDLFNBQVMsR0FBRyxNQUFLM2dCLEtBQUwsQ0FBVzRnQixRQUE3QjtVQUNNMTZCLEtBQUssR0FBRyxNQUFLMmUsS0FBTCxDQUFXNmIsS0FBWCxHQUFtQkMsU0FBakM7O1lBQ0svYixRQUFMLENBQWM7UUFBRThiLEtBQUssRUFBRXg2QixLQUFLLEdBQUcsQ0FBUixHQUFZLENBQVosR0FBZ0JBO09BQXZDOzs7bUdBR3FCLFlBQWlDO1VBQzlDODBCLE9BRDhDLEdBQ2xDLE1BQUtuVyxLQUQ2QixDQUM5Q21XLE9BRDhDO3dCQUV2QixNQUFLaGIsS0FGa0I7VUFFOUNTLFFBRjhDLGVBRTlDQSxRQUY4QztVQUVwQ21nQixRQUZvQyxlQUVwQ0EsUUFGb0M7VUFHbEQ1RixPQUFPLEtBQUssSUFBWixJQUFvQkEsT0FBTyxLQUFLcm1CLFNBQXBDLEVBQStDLE9BQU9BLFNBQVA7VUFDM0MsQ0FBQzhMLFFBQUQsSUFBYSxDQUFDQSxRQUFRLENBQUN4WSxNQUEzQixFQUFtQyxPQUFPME0sU0FBUDtVQUU3Qm1zQixLQUFLLEdBQUdyZ0IsUUFBUSxDQUFDeFksTUFBVCxHQUFrQjI0QixRQUFsQixHQUE4QkEsUUFBOUIsR0FBeUNuZ0IsUUFBUSxDQUFDeFksTUFBaEU7VUFDTS9CLEtBQUssR0FBSTgwQixPQUFPLEdBQUcsR0FBWCxHQUFrQixHQUFoQzthQUVPO1FBQ0wrRixVQUFVLEVBQUUsU0FEUDtRQUVMcjhCLEtBQUssWUFBS3lCLElBQUksQ0FBQ21ELEtBQUwsQ0FBWSxNQUFNdzNCLEtBQWxCLENBQUwsTUFGQTtRQUdMakcsU0FBUyx1QkFBZ0IzMEIsS0FBaEI7T0FIWDs7OzZGQVFlLFVBQUN3eUIsS0FBRCxFQUEwQnNJLEtBQTFCLEVBQTRDO1VBQ3ZELE1BQUtuYyxLQUFMLENBQVc2YixLQUFYLEdBQW1CTSxLQUF2QixFQUE4QixPQUFPLElBQVA7VUFDMUIsTUFBS25jLEtBQUwsQ0FBVzZiLEtBQVgsR0FBbUJNLEtBQW5CLElBQTRCLE1BQUtoaEIsS0FBTCxDQUFXNGdCLFFBQTNDLEVBQXNELE9BQU8sSUFBUDtVQUNsRCxPQUFPbEksS0FBUCxLQUFpQixRQUFqQixJQUE2QixPQUFPQSxLQUFQLEtBQWlCLFFBQWxELEVBQTRELE9BQU8sSUFBUDthQUVyRGowQiw2QkFBQyxPQUFELGVBQWFpMEIsS0FBSyxDQUFDMVksS0FBbkI7UUFBMEIsS0FBSyxFQUFFLE1BQUtBLEtBQUwsQ0FBVzZEO1NBQW5EOzs7Ozs7OzswQ0E1Q29CN0QsT0FBYzZFLE9BQWM7YUFDekMsS0FBS0EsS0FBTCxDQUFXNmIsS0FBWCxLQUFxQjdiLEtBQUssQ0FBQzZiLEtBQTNCLElBQ0wsS0FBSzdiLEtBQUwsQ0FBV21XLE9BQVgsS0FBdUJuVyxLQUFLLENBQUNtVyxPQUQvQjs7Ozs2QkE4Q087eUJBQ3NDLEtBQUtoYixLQUQzQztVQUNDUyxRQURELGdCQUNDQSxRQUREO1VBQ1dvRCxLQURYLGdCQUNXQSxLQURYO1VBQ2tCeGEsS0FEbEIsZ0JBQ2tCQSxLQURsQjtVQUN5QnUzQixRQUR6QixnQkFDeUJBLFFBRHpCO1VBRUNGLEtBRkQsR0FFVyxLQUFLN2IsS0FGaEIsQ0FFQzZiLEtBRkQ7VUFHREksS0FBSyxHQUFHcmdCLFFBQVEsR0FBR0EsUUFBUSxDQUFDeFksTUFBWixHQUFxQixDQUEzQztVQUNNMFosS0FBSyxHQUFHLEtBQUtzZixvQkFBTCxFQUFkO2FBRUV4OEIsNkJBQUN3USxTQUFEO1FBQVMsS0FBSyxFQUFFNE87U0FDYjZjLEtBQUssR0FBR0UsUUFBUixJQUFzQm44Qiw2QkFBQyxNQUFEO1FBQVEsS0FBSyxFQUFDO1NBQVEsR0FBdEIsQ0FEekIsRUFFRUE7UUFBSyxTQUFTLEVBQUM7U0FDWmswQixjQUFRLENBQUNsYixHQUFULENBQWFnRCxRQUFiLEVBQXVCLEtBQUt5Z0IsY0FBNUIsQ0FESCxFQUVFejhCLDZCQUFDLFNBQUQ7UUFBVyxLQUFLLEVBQUU0RSxLQUFsQjtRQUF5QixLQUFLLEVBQUVzWTtRQUZsQyxDQUZGLEVBTUdtZixLQUFLLEdBQUdGLFFBQVIsSUFBcUJGLEtBQUssR0FBR0UsUUFBN0IsSUFBMkNuOEIsNkJBQUMsTUFBRDtRQUFRLEtBQUssRUFBQztTQUFRLEdBQXRCLENBTjlDLENBREY7Ozs7NkNBeEU4QnViLE9BQWM2RSxPQUFjO1VBQ3REc2MsV0FBSjs7V0FDSyxJQUFJdGtCLENBQUMsR0FBRyxDQUFSLEVBQVd1a0IsR0FBRyxHQUFHcGhCLEtBQUssQ0FBQ1MsUUFBTixDQUFleFksTUFBckMsRUFBNkM0VSxDQUFDLEdBQUd1a0IsR0FBakQsRUFBc0R2a0IsQ0FBQyxJQUFJLENBQTNELEVBQThEO1lBQ3RENmIsS0FBSyxHQUFHMVksS0FBSyxDQUFDUyxRQUFOLENBQWU1RCxDQUFmLENBQWQ7O1lBQ0k2YixLQUFLLENBQUMxWSxLQUFOLENBQVlvVSxNQUFoQixFQUF3QjtVQUN0QitNLFdBQVcsR0FBR3RrQixDQUFkOzs7OzsrQkFNQ2dJLEtBREw7UUFFRW1XLE9BQU8sRUFBRW1HOzs7Ozs7RUFqQm1CbGY7O2dCQUFid2Usc0JBQ0c7RUFDcEJHLFFBQVEsRUFBRTs7O2dCQUZPSCxjQXFCTEY7O0FDMUZoQixJQUFNdHJCLFNBQU87O0FBQUdwUCxlQUFNLENBQUNDLEdBQVY7OztxWEFDQztNQUFHNDBCLFFBQUgsUUFBR0EsUUFBSDtTQUFrQkEsUUFBbEI7Q0FERCxFQUVTO01BQUdwekIsVUFBSCxTQUFHQSxVQUFIO1NBQW9CQSxVQUFwQjtDQUZULEVBUUM7TUFBR2hCLElBQUgsU0FBR0EsSUFBSDtTQUFjQSxJQUFkO0NBUkQsRUFTVztNQUFHK0MsS0FBSCxTQUFHQSxLQUFIO01BQVV4RSxLQUFWLFNBQVVBLEtBQVY7U0FBc0JBLEtBQUssQ0FBQ3dFLEtBQUQsQ0FBM0I7Q0FUWCxFQWVjO01BQUd3MkIsUUFBSCxTQUFHQSxRQUFIO1NBQWtCQSxRQUFsQjtDQWZkLEVBb0NUO01BQUdwNkIsR0FBSCxTQUFHQSxHQUFIO1NBQWFBLEdBQUcsSUFBSSxFQUFwQjtDQXBDUyxDQUFiOztJQXdDcUI0N0I7Ozs7Ozs7Ozs7Ozs7NkJBVVY7YUFFTDU4Qiw2QkFBQ3dRLFNBQUQsRUFBYSxLQUFLK0ssS0FBbEIsRUFDRXZiLDZCQUFDLGFBQUQ7UUFDRSxVQUFVLEVBQUMsTUFEYjtRQUVFLE9BQU8sRUFBRSxLQUFLdWIsS0FBTCxDQUFXNmYsUUFGdEI7UUFHRSxFQUFFLEVBQUUsS0FBSzdmLEtBQUwsQ0FBV3NoQixPQUhqQjtRQUlFLGFBQWE7U0FFYjc4QjtRQUFLLFNBQVMsRUFBQztRQU5qQixDQURGLENBREY7Ozs7O0VBWG9DeWI7O2dCQUFuQm1oQiw0QkFDRztFQUNwQkMsT0FBTyxFQUFFLEtBRFc7RUFFcEJqNEIsS0FBSyxFQUFFLFNBRmE7RUFHcEJxeEIsUUFBUSxFQUFFLFVBSFU7RUFJcEJwekIsVUFBVSxFQUFFLGFBSlE7RUFLcEJoQixJQUFJLEVBQUUsS0FMYztFQU1wQnU1QixRQUFRLEVBQUU7OztBQ3JEZCxTQUFTN2EsVUFBVCxPQUE2RTtNQUF6RG5nQixLQUF5RCxRQUF6REEsS0FBeUQ7TUFBbER3RSxLQUFrRCxRQUFsREEsS0FBa0Q7TUFDckVuRCxLQUFLLEdBQUksQ0FBQ21ELEtBQUQsSUFBVUEsS0FBSyxLQUFLLE9BQXJCLEdBQWdDeEUsS0FBSyxDQUFDeUMsVUFBdEMsR0FBbUR6QyxLQUFLLENBQUN3RSxLQUFELENBQXRFO1NBRU81RCxVQUFQLHVFQUNrQlMsS0FEbEIsRUFFd0JyQixLQUFLLENBQUM2QyxNQUY5QixFQUdzQjdDLEtBQUssQ0FBQzZDLE1BSDVCOzs7QUFPRixJQUFNNjVCLElBQUk7O0FBQUdDLGdCQUFILGdFQUFWO0FBU0EsSUFBTUMsT0FBTzs7QUFBRzU3QixlQUFNLENBQUNDLEdBQVY7OzttUUFFRjtNQUFHcEIsS0FBSCxTQUFHQSxLQUFIO1NBQWVBLEtBQUssR0FBR0EsS0FBSCxHQUFXLE1BQS9CO0NBRkUsRUFHRDtNQUFHQyxNQUFILFNBQUdBLE1BQUg7U0FBZ0JBLE1BQU0sR0FBR0EsTUFBSCxHQUFZLE1BQWxDO0NBSEMsRUFZSTQ4QixJQVpKLEVBYUM7TUFBR0csVUFBSCxTQUFHQSxVQUFIO1NBQW9CQSxVQUFwQjtDQWJELEVBZVAxYyxVQWZPLENBQWI7QUFzQkF5YyxPQUFPLENBQUMxN0IsV0FBUixHQUFzQixTQUF0QjtBQUNBMDdCLE9BQU8sQ0FBQ3o3QixZQUFSLEdBQXVCO0VBQ3JCMDdCLFVBQVUsRUFBRTtDQURkOztBQ3pEQTs7QUNFQSxJQUFNNzhCLEtBQWdCLEdBQUc7RUFDdkI4OEIsVUFBVSxFQUFFLDJFQURXO0VBRXZCQyxRQUFRLEVBQUUsTUFGYTtFQUl2Qjk4QixVQUFVLEVBQUUsSUFKVztFQUt2QmEsTUFBTSxFQUFFLEVBTGU7RUFNdkJELFdBQVcsRUFBRSxFQU5VO0VBT3ZCeVksU0FBUyxFQUFFLGlDQVBZO0VBU3ZCcFosTUFBTSxFQUFFLEdBVGU7RUFVdkJFLE1BQU0sRUFBRSxHQVZlO0VBV3ZCRSxPQUFPLEVBQUUsR0FYYztFQVl2QkUsTUFBTSxFQUFFLElBWmU7RUFjdkJ3OEIsTUFBTSxFQUFFLENBZGU7RUFnQnZCemhCLE9BQU8sRUFBRSxTQWhCYztFQWlCdkIwaEIsSUFBSSxFQUFFLFNBakJpQjtFQWtCdkJDLElBQUksRUFBRSxTQWxCaUI7RUFtQnZCQyxPQUFPLEVBQUUsU0FuQmM7RUFvQnZCQyxPQUFPLEVBQUUsU0FwQmM7RUFxQnZCMTZCLE1BQU0sRUFBRSxTQXJCZTtFQXNCdkIyNkIsSUFBSSxFQUFFLFNBdEJpQjtFQXVCdkJDLEtBQUssRUFBRSxTQXZCZ0I7RUF5QnZCbjNCLEtBQUssRUFBRSxTQXpCZ0I7RUEwQnZCbzNCLFFBQVEsRUFBRSxTQTFCYTtFQTJCdkJDLFFBQVEsRUFBRSxTQTNCYTtFQTZCdkIvdUIsS0FBSyxFQUFFLFNBN0JnQjtFQThCdkJndkIsUUFBUSxFQUFFLFNBOUJhO0VBK0J2QkMsUUFBUSxFQUFFLFNBL0JhO0VBaUN2QngwQixJQUFJLEVBQUUsU0FqQ2lCO0VBa0N2QnkwQixTQUFTLEVBQUUsU0FsQ1k7RUFtQ3ZCQyxXQUFXLEVBQUUsU0FuQ1U7RUFxQ3ZCNzZCLElBQUksRUFBRSxTQXJDaUI7RUFzQ3ZCNlcsUUFBUSxFQUFFLFNBdENhO0VBdUN2QndDLFNBQVMsRUFBRSxTQXZDWTtFQXdDdkJWLFVBQVUsRUFBRSxTQXhDVztFQTBDdkJqWixVQUFVLEVBQUUsU0ExQ1c7RUE0Q3ZCSSxNQUFNLEVBQUUsU0E1Q2U7RUE2Q3ZCb1gsV0FBVyxFQUFFLFNBN0NVO0VBOEN2QkMsWUFBWSxFQUFFLFNBOUNTO0VBZ0R2QnlDLFdBQVcsRUFBRTtDQWhEZjs7QUNBQTs7QUFDQSxJQUFNa2hCLFVBQWU7O0FBQUdqOUIsVUFBSCwybkZBYUY7TUFBR1osS0FBSCxRQUFHQSxLQUFIO1NBQW9CQSxLQUFLLEdBQUdBLEtBQUssQ0FBQzg4QixVQUFULEdBQXNCLDZPQUEvQztDQWJFLEVBY0o7TUFBRzk4QixLQUFILFNBQUdBLEtBQUg7U0FBb0JBLEtBQUssR0FBR0EsS0FBSyxDQUFDKzhCLFFBQVQsR0FBb0IsTUFBN0M7Q0FkSSxFQW9DUjtNQUFHLzhCLEtBQUgsU0FBR0EsS0FBSDtTQUFvQkEsS0FBSyxDQUFDaTlCLElBQTFCO0NBcENRLENBQXJCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
