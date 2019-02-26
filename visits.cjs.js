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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlzaXRzLmNqcy5qcyIsInNvdXJjZXMiOlsiLi4vc3JjL2NvbXBvbmVudHMvR3JpZC9CcmVhay50c3giLCIuLi9zcmMvdXRpbHMvbWVkaWEudHMiLCIuLi9zcmMvY29tcG9uZW50cy9HcmlkL0NvbnRhaW5lci50cyIsIi4uL3NyYy9jb21wb25lbnRzL0dyaWQvQ29sLnRzIiwiLi4vc3JjL2NvbXBvbmVudHMvR3JpZC9Sb3cudHMiLCIuLi9zcmMvY29tcG9uZW50cy9Db250ZW50L1ByZS50cyIsIi4uL3NyYy9jb21wb25lbnRzL0NvbnRlbnQvQ29kZS50cyIsIi4uL3NyYy9jb21wb25lbnRzL0NvbnRlbnQvSDEudHMiLCIuLi9zcmMvY29tcG9uZW50cy9Db250ZW50L2luZGV4LnRzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3BvbGlzaGVkL2xpYi9pbnRlcm5hbEhlbHBlcnMvX2N1cnJ5LmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3BvbGlzaGVkL2xpYi9pbnRlcm5hbEhlbHBlcnMvX2d1YXJkLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3BvbGlzaGVkL2xpYi9pbnRlcm5hbEhlbHBlcnMvX2hzbFRvUmdiLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3BvbGlzaGVkL2xpYi9pbnRlcm5hbEhlbHBlcnMvX25hbWVUb0hleC5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb2xpc2hlZC9saWIvaW50ZXJuYWxIZWxwZXJzL19lcnJvcnMuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9saXNoZWQvbGliL2NvbG9yL3BhcnNlVG9SZ2IuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9saXNoZWQvbGliL2ludGVybmFsSGVscGVycy9fcmdiVG9Ic2wuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9saXNoZWQvbGliL2NvbG9yL3BhcnNlVG9Ic2wuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9saXNoZWQvbGliL2ludGVybmFsSGVscGVycy9fcmVkdWNlSGV4VmFsdWUuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9saXNoZWQvbGliL2ludGVybmFsSGVscGVycy9fbnVtYmVyVG9IZXguanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9saXNoZWQvbGliL2ludGVybmFsSGVscGVycy9faHNsVG9IZXguanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9saXNoZWQvbGliL2NvbG9yL2hzbC5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb2xpc2hlZC9saWIvY29sb3IvaHNsYS5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb2xpc2hlZC9saWIvY29sb3IvcmdiLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3BvbGlzaGVkL2xpYi9jb2xvci9yZ2JhLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3BvbGlzaGVkL2xpYi9jb2xvci90b0NvbG9yU3RyaW5nLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3BvbGlzaGVkL2xpYi9jb2xvci9kYXJrZW4uanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9saXNoZWQvbGliL2NvbG9yL2dldEx1bWluYW5jZS5qcyIsIi4uL3NyYy91dGlscy9maW5kQ29sb3JJbnZlcnQudHMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9saXNoZWQvbGliL2NvbG9yL3RyYW5zcGFyZW50aXplLmpzIiwiLi4vc3JjL3V0aWxzL2JveFNoYWRvdy50cyIsIi4uL3NyYy91dGlscy9zZXRTaXplLnRzIiwiLi4vc3JjL3V0aWxzL2Rpc2FibGVkQ29sb3IudHMiLCIuLi9zcmMvY29tcG9uZW50cy9CdXR0b24vaW5kZXgudHMiLCIuLi9zcmMvY29tcG9uZW50cy9CdXR0b24vQnV0dG9uR3JvdXAudHMiLCIuLi9zcmMvY29tcG9uZW50cy9UYWJsZS9pbmRleC50cyIsIi4uL3NyYy9jb21wb25lbnRzL0JveC9pbmRleC50c3giLCIuLi9zcmMvY29tcG9uZW50cy9Qcm9ncmVzcy9pbmRleC50c3giLCIuLi9zcmMvY29tcG9uZW50cy9Gb3JtL0ZpZWxkLnRzeCIsIi4uL3NyYy91dGlscy9oYW1idWdlci50cyIsIi4uL3NyYy91dGlscy9hcnJvdy50cyIsIi4uL3NyYy9jb21wb25lbnRzL0Zvcm0vSGVscE1lc3NhZ2UudHN4IiwiLi4vc3JjL2NvbXBvbmVudHMvRm9ybS9UZXh0SW5wdXQudHN4IiwiLi4vc3JjL2NvbXBvbmVudHMvRm9ybS9UZXh0YXJlYS50c3giLCIuLi9zcmMvY29tcG9uZW50cy9Gb3JtL0NoZWNrYm94LnRzeCIsIi4uL3NyYy9jb21wb25lbnRzL0Zvcm0vU2VsZWN0LnRzeCIsIi4uL3NyYy9jb21wb25lbnRzL0Zvcm0vUmFkaW8udHN4IiwiLi4vc3JjL3V0aWxzL3NldEFsaWduLnRzIiwiLi4vc3JjL2NvbXBvbmVudHMvQXBwQmFyL2luZGV4LnRzeCIsIi4uL3NyYy9jb21wb25lbnRzL1RhZy9pbmRleC50c3giLCIuLi9zcmMvY29tcG9uZW50cy9IZXJvL2luZGV4LnRzeCIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZWFjdC1pcy9janMvcmVhY3QtaXMucHJvZHVjdGlvbi5taW4uanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVhY3QtaXMvY2pzL3JlYWN0LWlzLmRldmVsb3BtZW50LmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3JlYWN0LWlzL2luZGV4LmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL29iamVjdC1hc3NpZ24vaW5kZXguanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9saWIvUmVhY3RQcm9wVHlwZXNTZWNyZXQuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9jaGVja1Byb3BUeXBlcy5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2ZhY3RvcnlXaXRoVHlwZUNoZWNrZXJzLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvZmFjdG9yeVdpdGhUaHJvd2luZ1NoaW1zLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvaW5kZXguanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvZG9tLWhlbHBlcnMvY2xhc3MvaGFzQ2xhc3MuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvZG9tLWhlbHBlcnMvY2xhc3MvYWRkQ2xhc3MuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvZG9tLWhlbHBlcnMvY2xhc3MvcmVtb3ZlQ2xhc3MuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVhY3QtbGlmZWN5Y2xlcy1jb21wYXQvcmVhY3QtbGlmZWN5Y2xlcy1jb21wYXQuZXMuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVhY3QtdHJhbnNpdGlvbi1ncm91cC91dGlscy9Qcm9wVHlwZXMuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVhY3QtdHJhbnNpdGlvbi1ncm91cC9UcmFuc2l0aW9uLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3JlYWN0LXRyYW5zaXRpb24tZ3JvdXAvQ1NTVHJhbnNpdGlvbi5qcyIsIi4uL3NyYy9jb21wb25lbnRzL1Rvb2x0aXAvaW5kZXgudHN4IiwiLi4vc3JjL2NvbXBvbmVudHMvU2lkZU1lbnUvaW5kZXgudHN4IiwiLi4vc3JjL2NvbXBvbmVudHMvQ2FyZC9pbmRleC50c3giLCIuLi9zcmMvY29tcG9uZW50cy9Qb3BvdmVyL2luZGV4LnRzeCIsIi4uL3NyYy9jb21wb25lbnRzL01vZGFsL2luZGV4LnRzeCIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZWFjdC10cmFuc2l0aW9uLWdyb3VwL3V0aWxzL0NoaWxkTWFwcGluZy5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZWFjdC10cmFuc2l0aW9uLWdyb3VwL1RyYW5zaXRpb25Hcm91cC5qcyIsIi4uL3NyYy9jb21wb25lbnRzL1RvYXN0L2luZGV4LnRzeCIsIi4uL3NyYy9jb21wb25lbnRzL1RhYnMvaW5kZXgudHN4IiwiLi4vc3JjL2NvbXBvbmVudHMvTG9hZGluZy9CYXIudHN4IiwiLi4vc3JjL2NvbXBvbmVudHMvTG9hZGluZy9TcGlubmVyLnRzeCIsIi4uL3NyYy9jb21wb25lbnRzL2luZGV4LnRzIiwiLi4vc3JjL3RoZW1lL2RlZmF1bHQudHMiLCIuLi9zcmMvc3R5bGVzL25vcm1hbGl6ZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCcmVhaygpIHtcbiAgcmV0dXJuIDxkaXYgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJywgaGVpZ2h0OiAwIH19IC8+O1xufTtcbiIsImltcG9ydCB7IFRoZW1lVHlwZSB9IGZyb20gJy4uL3R5cGVzJztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgdGhlbWU6IFRoZW1lVHlwZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1lZGlhTW9iaWxlKHsgdGhlbWUgfTogUHJvcHMpIHtcbiAgcmV0dXJuIGBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAke3RoZW1lLnJlc3BvbnNpdmUgPyB0aGVtZS5tb2JpbGUgOiAwfXB4KWA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZWRpYVRhYmxldCh7IHRoZW1lIH06IFByb3BzKSB7XG4gIHJldHVybiBgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJHt0aGVtZS5yZXNwb25zaXZlID8gdGhlbWUudGFibGV0IDogMH1weClgO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWVkaWFEZXNrdG9wKHsgdGhlbWUgfTogUHJvcHMpIHtcbiAgcmV0dXJuIGBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAke3RoZW1lLnJlc3BvbnNpdmUgPyB0aGVtZS5kZXNrdG9wIDogMH1weClgO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWVkaWFGdWxsSEQoeyB0aGVtZSB9OiBQcm9wcykge1xuICByZXR1cm4gYEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICR7dGhlbWUucmVzcG9uc2l2ZSA/IHRoZW1lLmZ1bGxoZCA6IDB9cHgpYDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1lZGlhVW50aWxGdWxsSEQoeyB0aGVtZSB9OiBQcm9wcykge1xuICByZXR1cm4gYEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICR7dGhlbWUucmVzcG9uc2l2ZSA/IHRoZW1lLmZ1bGxoZCA6IDB9cHgpYDtcbn1cbiIsImltcG9ydCBzdHlsZWQsIHsgY3NzIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgbWVkaWFGdWxsSEQsIG1lZGlhVGFibGV0LCBtZWRpYURlc2t0b3AsIG1lZGlhTW9iaWxlIH0gZnJvbSAnLi4vLi4vdXRpbHMvbWVkaWEnO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICAvKiogICovXG4gIGZsdWlkPzogYm9vbGVhbjtcbn1cblxuZnVuY3Rpb24gc2V0UmVzcG9uc2l2ZSh7IGZsdWlkIH06IFByb3BzKTogYW55IHtcbiAgaWYgKGZsdWlkKSB7XG4gICAgcmV0dXJuIGNzc2BcbiAgICAgICR7bWVkaWFNb2JpbGV9IHtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMC41cmVtO1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDAuNXJlbTtcbiAgICAgIH1cbiAgICAgICR7bWVkaWFEZXNrdG9wfSB7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDAuNzVyZW07XG4gICAgICAgIHBhZGRpbmctbGVmdDogMC43NXJlbTtcbiAgICAgIH1cbiAgICAgICR7bWVkaWFGdWxsSER9IHtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMC43NXJlbTtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwLjc1cmVtO1xuICAgICAgfVxuICAgIGA7XG4gIH1cblxuICByZXR1cm4gY3NzYFxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAke21lZGlhTW9iaWxlfSB7XG4gICAgICBtYXgtd2lkdGg6ICR7KHsgdGhlbWUgfTogYW55KSA9PiB0aGVtZS5tb2JpbGUgLSAoMiAqIHRoZW1lLnNtYWxsR3V0dGVyKX1weDtcbiAgICB9XG4gICAgJHttZWRpYVRhYmxldH0ge1xuICAgICAgbWF4LXdpZHRoOiAkeyh7IHRoZW1lIH06IGFueSkgPT4gdGhlbWUudGFibGV0IC0gKDIgKiB0aGVtZS5zbWFsbEd1dHRlcil9cHg7XG4gICAgfVxuICAgICR7bWVkaWFEZXNrdG9wfSB7XG4gICAgICBtYXgtd2lkdGg6ICR7KHsgdGhlbWUgfTogYW55KSA9PiB0aGVtZS5kZXNrdG9wIC0gKDIgKiB0aGVtZS5ndXR0ZXIpfXB4O1xuICAgIH1cbiAgICAke21lZGlhRnVsbEhEfSB7XG4gICAgICBtYXgtd2lkdGg6ICR7KHsgdGhlbWUgfTogYW55KSA9PiB0aGVtZS5mdWxsaGQgLSAoMiAqIHRoZW1lLmd1dHRlcil9cHg7XG4gICAgfVxuICBgO1xufVxuXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2PFByb3BzPmBcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcblxuICAke3NldFJlc3BvbnNpdmV9XG5gO1xuQ29udGFpbmVyLmRpc3BsYXlOYW1lID0gJ0NvbnRhaW5lcic7XG5Db250YWluZXIuZGVmYXVsdFByb3BzID0ge1xuICBmbHVpZDogZmFsc2UsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb250YWluZXI7XG4iLCJpbXBvcnQgc3R5bGVkLCB7IGNzcyB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7IG1lZGlhTW9iaWxlLCBtZWRpYVRhYmxldCB9IGZyb20gJy4uLy4uL3V0aWxzL21lZGlhJztcbmltcG9ydCB7IENvbFNpemVUeXBlIH0gZnJvbSAnLi4vLi4vdHlwZXMnO1xuXG5pbnRlcmZhY2UgQ29sUHJvcHMge1xuICAvKiog5Zu65a6a44Gu5bmF44KS5oyH5a6a44GZ44KL5aC05ZCIICovXG4gIG5hcnJvdz86IGJvb2xlYW47XG4gIC8qKiAxLTEy44Gu44K144Kk44K6ICovXG4gIHNpemU/OiBDb2xTaXplVHlwZTtcbiAgLyoqIDEtMTLjga7lt6bjga5vZmZzZXQgKi9cbiAgb2Zmc2V0PzogQ29sU2l6ZVR5cGU7XG4gIC8qKiAxLTEy5Z+65rqW44Gu44K144Kk44K644KS55S76Z2i44K144Kk44K644Gu44KI44Gj44Gm5Y+v5aSJ44Gr44GZ44KLICovXG4gIGF1dG8/OiBib29sZWFuO1xufVxuXG5mdW5jdGlvbiBwYXJjZW50YWdlKHZhbHVlPzogQ29sU2l6ZVR5cGUpIHtcbiAgaWYgKCF2YWx1ZSkgcmV0dXJuIDA7XG4gIGlmICh2YWx1ZSA+PSAxMikgcmV0dXJuIDEwMDtcbiAgcmV0dXJuIE1hdGguY2VpbCgodmFsdWUgLyAxMikgKiAxMDAgKiAxMDAwMDApIC8gMTAwMDAwO1xufVxuXG5mdW5jdGlvbiByZW5kZXJTaXplKHsgc2l6ZSwgbmFycm93LCBhdXRvLCBvZmZzZXQgfTogQ29sUHJvcHMpIHtcbiAgaWYgKG5hcnJvdykgcmV0dXJuIG51bGw7XG4gIGlmICghc2l6ZSB8fCBzaXplIDwgMSB8fCBzaXplID4gMTIpIHtcbiAgICByZXR1cm4gY3NzYFxuICAgICAgd2lkdGg6IGF1dG87XG4gICAgICBtYXgtd2lkdGg6IG5vbmU7XG4gICAgYDtcbiAgfVxuXG4gIGNvbnN0IHZhbHVlID0gcGFyY2VudGFnZShzaXplKTtcbiAgY29uc3Qgb2ZmVmFsID0gb2Zmc2V0ID8gcGFyY2VudGFnZShvZmZzZXQpIDogMDtcbiAgY29uc3QgYXV0b1NpemUgPSB2YWx1ZSA+IDMzID8gMTAwIDogdmFsdWUgKiAzO1xuICByZXR1cm4gY3NzYFxuICAgIHdpZHRoOiAke3ZhbHVlfSU7XG4gICAgbWF4LXdpZHRoOiAke3ZhbHVlfSU7XG4gICAgJHtvZmZzZXQgPyBgbWFyZ2luLWxlZnQ6ICR7b2ZmVmFsfSU7YCA6IHt9fVxuXG4gICAgJHttZWRpYU1vYmlsZX0ge1xuICAgICAgd2lkdGg6ICR7YXV0b1NpemV9JTtcbiAgICAgIG1heC13aWR0aDogJHthdXRvU2l6ZX0lO1xuICAgICAgJHtvZmZzZXQgPyBgbWFyZ2luLWxlZnQ6IDA7YCA6IHt9fVxuICAgIH1cbiAgYDtcbn1cblxuY29uc3QgQ29sID0gc3R5bGVkLmRpdjxDb2xQcm9wcz5gXG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtaW4taGVpZ2h0OiAxcHg7XG5cbiAgJHsoeyBuYXJyb3cgfSkgPT4gbmFycm93ID8gJ2ZsZXg6IG5vbmU7JyA6IHt9fVxuICAkeyh7IG9mZnNldCB9KSA9PiBvZmZzZXQgPyBgbWFyZ2luLWxlZnQ6ICR7cGFyY2VudGFnZShvZmZzZXQpfSU7YCA6IHt9fVxuXG4gICR7cmVuZGVyU2l6ZX1cblxuICBwYWRkaW5nOiAwLjc1cmVtO1xuXG4gICR7bWVkaWFUYWJsZXR9IHtcbiAgICBwYWRkaW5nOiAwLjVyZW07XG4gIH1cbmA7XG5cbkNvbC5kaXNwbGF5TmFtZSA9ICdDb2wnO1xuXG5leHBvcnQgZGVmYXVsdCBDb2w7XG4iLCJpbXBvcnQgc3R5bGVkLCB7IGNzcyB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBDb2wgZnJvbSAnLi9Db2wnO1xuaW1wb3J0IHsgbWVkaWFGdWxsSEQsIG1lZGlhVGFibGV0IH0gZnJvbSAnLi4vLi4vdXRpbHMvbWVkaWEnO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICAvKiog5Zu65a6a5bmFICovXG4gIHdpZHRoPzogc3RyaW5nO1xuICAvKiog5ZCR44GP5pWw44Gu6KGM44Gn5a++5b+c44Gn44GN44KL44KI44GG44Gr44GZ44KLICovXG4gIG11bHRpbGluZT86IGJvb2xlYW47XG4gIC8qKiDnuKbjga7kuK3lpK7mj4PjgYjjgavjgZnjgosgKi9cbiAgdmNlbnRlcj86IGJvb2xlYW47XG4gIC8qKiDmqKrluYXjga7kuK3lpK7mj4PjgYjjgavjgZnjgosgKi9cbiAgY2VudGVyPzogYm9vbGVhbjtcbiAgLyoqIENvbOOBrumWk+malOOCkuOBquOBj+OBmSAqL1xuICBub0d1dHRlcj86IGJvb2xlYW47XG59XG5cbmZ1bmN0aW9uIHJlbmRlckd1dHRlcih7IG5vR3V0dGVyIH06IFByb3BzKSB7XG4gIGlmIChub0d1dHRlcikge1xuICAgIHJldHVybiBjc3NgXG4gICAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgICBtYXJnaW4tbGVmdDogMDtcblxuICAgICAgPiAke0NvbH0ge1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwO1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgICB9XG4gICAgYDtcbiAgfVxuICByZXR1cm4gY3NzYFxuICAgICR7bWVkaWFUYWJsZXR9IHtcbiAgICAgIG1hcmdpbi1sZWZ0OiAtMC41cmVtO1xuICAgICAgbWFyZ2luLXJpZ2h0OiAtMC41cmVtO1xuICAgICAgbWFyZ2luLXRvcDogLTAuNXJlbTtcblxuICAgICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogLTAuNXJlbTtcbiAgICAgIH1cblxuICAgICAgJjpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xuICAgICAgfVxuICAgIH1cblxuICAgICR7bWVkaWFGdWxsSER9IHtcbiAgICAgIG1hcmdpbi1sZWZ0OiAtMC43NXJlbTtcbiAgICAgIG1hcmdpbi1yaWdodDogLTAuNzVyZW07XG4gICAgICBtYXJnaW4tdG9wOiAtMC43NXJlbTtcblxuICAgICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogLTAuNzVyZW07XG4gICAgICB9XG5cbiAgICAgICY6bm90KDpsYXN0LWNoaWxkKSB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDAuNzVyZW07XG4gICAgICB9XG4gICAgfVxuICBgO1xufVxuXG5jb25zdCBSb3cgPSBzdHlsZWQuZGl2PFByb3BzPmBcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIGZsZXgtd3JhcDogd3JhcDtcblxuICAkeyh7IHZjZW50ZXIgfSkgPT4gdmNlbnRlciA/ICdhbGlnbi1pdGVtczogY2VudGVyOycgOiAnJ31cbiAgJHsoeyBjZW50ZXIgfSkgPT4gY2VudGVyID8gJ2p1c3RpZnktY29udGVudDogY2VudGVyOycgOiAnJ31cblxuICAke3JlbmRlckd1dHRlcn1cbmA7XG5cblJvdy5kaXNwbGF5TmFtZSA9ICdSb3cnO1xuXG5leHBvcnQgZGVmYXVsdCBSb3c7XG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuY29uc3QgUHJlID0gc3R5bGVkLnByZWBcbiAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xuICBvdmVyZmxvdy14OiBhdXRvO1xuICBwYWRkaW5nOiAxLjI1ZW0gMS41ZW07XG4gIHdoaXRlLXNwYWNlOiBwcmU7XG4gIHdvcmQtd3JhcDogbm9ybWFsO1xuXG4gICY6bm90KDpsYXN0LWNoaWxkKSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMWVtO1xuICB9XG5gO1xuUHJlLmRpc3BsYXlOYW1lID0gJ1ByZSc7XG5cbmV4cG9ydCBkZWZhdWx0IFByZTtcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5jb25zdCBDb2RlID0gc3R5bGVkLmNvZGVgXG4gIGJhY2tncm91bmQtY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuYmFja2dyb3VuZH07XG4gIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmRhbmdlcn07XG4gIGZvbnQtc2l6ZTogLjg3NWVtO1xuICBmb250LXdlaWdodDogNDAwO1xuICBwYWRkaW5nOiAuMjVlbSAuNWVtIC4yNWVtO1xuYDtcblxuQ29kZS5kaXNwbGF5TmFtZSA9ICdDb2RlJztcblxuZXhwb3J0IGRlZmF1bHQgQ29kZTtcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5jb25zdCBIMSA9IHN0eWxlZC5oMWBcbiAgZm9udC1zaXplOiAyZW07XG4gIG1hcmdpbi1ib3R0b206IDAuNWVtO1xuICBwYWRkaW5nLWxlZnQ6IDFyZW07XG5cbiAgYm9yZGVyLWxlZnQ6IDFyZW0gc29saWQ7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZDtcbiAgYm9yZGVyLWNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmJvcmRlcn07XG5gO1xuSDEuZGlzcGxheU5hbWUgPSAnSDEnO1xuXG5leHBvcnQgZGVmYXVsdCBIMTtcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5jb25zdCBDb250ZW50ID0gc3R5bGVkLmRpdmBcbiAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUudGV4dH07XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG5cbiAgbGkgKyBsaSB7XG4gICAgbWFyZ2luLXRvcDogMC4yNWVtO1xuICB9XG5cbiAgcCxcbiAgZGwsXG4gIG9sLFxuICB1bCxcbiAgYmxvY2txdW90ZSxcbiAgcHJlLFxuICB0YWJsZSB7XG4gICAgJjpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDFlbTtcbiAgICB9XG4gIH1cblxuICBoMSxcbiAgaDIsXG4gIGgzLFxuICBoNCxcbiAgaDUsXG4gIGg2IHtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjEyNTtcbiAgfVxuXG4gIGgxIHtcbiAgICBmb250LXNpemU6IDJyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMC41ZW07XG4gIH1cblxuICBoMiB7XG4gICAgZm9udC1zaXplOiAxLjc1ZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMC41NzE0ZW07XG5cbiAgICAmOm5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgICAgIG1hcmdpbi10b3A6IDEuMTQyOGVtO1xuICAgIH1cbiAgfVxuXG4gIGgzIHtcbiAgICBmb250LXNpemU6IDEuNWVtO1xuICAgIG1hcmdpbi1ib3R0b206IDAuNjY2NmVtO1xuXG4gICAgJjpub3QoOmZpcnN0LWNoaWxkKSB7XG4gICAgICBtYXJnaW4tdG9wOiAxLjMzMzNlbTtcbiAgICB9XG4gIH1cblxuICBoNCB7XG4gICAgZm9udC1zaXplOiAxLjI1ZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMC44ZW07XG4gIH1cblxuICBoNSB7XG4gICAgZm9udC1zaXplOiAxLjEyNWVtO1xuICAgIG1hcmdpbi1ib3R0b206IDAuODg4OGVtO1xuICB9XG5cbiAgaDYge1xuICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgIG1hcmdpbi1ib3R0b206IDFlbTtcbiAgfVxuXG4gIG9sIHtcbiAgICBsaXN0LXN0eWxlOiBkZWNpbWFsIG91dHNpZGU7XG4gICAgbWFyZ2luLWxlZnQ6IDJlbTtcbiAgICBtYXJnaW4tdG9wOiAxZW07XG4gIH1cblxuICB1bCB7XG4gICAgbGlzdC1zdHlsZTogZGlzYyBvdXRzaWRlO1xuICAgIG1hcmdpbi1sZWZ0OiAyZW07XG4gICAgbWFyZ2luLXRvcDogMWVtO1xuICAgIHVsIHtcbiAgICAgIGxpc3Qtc3R5bGUtdHlwZTogY2lyY2xlO1xuICAgICAgbWFyZ2luLXRvcDogMC41ZW07XG4gICAgICB1bCB7XG4gICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogc3F1YXJlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGRkIHtcbiAgICBtYXJnaW4tbGVmdDogMmVtO1xuICB9XG5cbiAgdGFibGUge1xuICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgdGQsIHRoIHtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuYm9yZGVyfTtcbiAgICAgIGJvcmRlci13aWR0aDogMCAwIDFweDtcbiAgICAgIHBhZGRpbmc6IDAuNWVtIDAuNzVlbTtcbiAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgfVxuXG4gICAgdGgge1xuICAgICAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUudGV4dH07XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIH1cblxuICAgIHRoZWFkIHtcbiAgICAgIHRkLCB0aCB7XG4gICAgICAgIGJvcmRlci13aWR0aDogMCAwIDJweDtcbiAgICAgICAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUudGV4dH07XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGZvb3Qge1xuICAgICAgdGQsIHRoIHtcbiAgICAgICAgYm9yZGVyLXdpZHRoOiAycHggMCAwO1xuICAgICAgICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS50ZXh0fTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0Ym9keSA+IHRyOmxhc3QtY2hpbGR7XG4gICAgICB0ZCwgdGgge1xuICAgICAgICBib3JkZXItYm90dG9tLXdpZHRoOiAwO1xuICAgICAgfVxuICAgIH1cbiAgfVxuYDtcbkNvbnRlbnQuZGlzcGxheU5hbWUgPSAnQ29udGVudCc7XG5cbmV4cG9ydCB7IGRlZmF1bHQgYXMgUHJlIH0gZnJvbSAnLi9QcmUnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBDb2RlIH0gZnJvbSAnLi9Db2RlJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgSDEgfSBmcm9tICcuL0gxJztcblxuZXhwb3J0IGRlZmF1bHQgQ29udGVudDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gY3Vycnk7XG5cbi8vIFR5cGUgZGVmaW5pdGlvbnMgdGFrZW4gZnJvbSBodHRwczovL2dpdGh1Yi5jb20vZ2NhbnRpL2Zsb3ctc3RhdGljLWxhbmQvYmxvYi9tYXN0ZXIvc3JjL0Z1bi5qc1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZWRlY2xhcmVcbmZ1bmN0aW9uIGN1cnJpZWQoZiwgbGVuZ3RoLCBhY2MpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIGZuKCkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItcmVzdC1wYXJhbXNcbiAgICB2YXIgY29tYmluZWQgPSBhY2MuY29uY2F0KEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cykpO1xuICAgIHJldHVybiBjb21iaW5lZC5sZW5ndGggPj0gbGVuZ3RoID8gZi5hcHBseSh0aGlzLCBjb21iaW5lZCkgOiBjdXJyaWVkKGYsIGxlbmd0aCwgY29tYmluZWQpO1xuICB9O1xufSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVkZWNsYXJlXG5cblxuZnVuY3Rpb24gY3VycnkoZikge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXJlZGVjbGFyZVxuICByZXR1cm4gY3VycmllZChmLCBmLmxlbmd0aCwgW10pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxuZnVuY3Rpb24gZ3VhcmQobG93ZXJCb3VuZGFyeSwgdXBwZXJCb3VuZGFyeSwgdmFsdWUpIHtcbiAgcmV0dXJuIE1hdGgubWF4KGxvd2VyQm91bmRhcnksIE1hdGgubWluKHVwcGVyQm91bmRhcnksIHZhbHVlKSk7XG59XG5cbnZhciBfZGVmYXVsdCA9IGd1YXJkO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxuZnVuY3Rpb24gY29sb3JUb0ludChjb2xvcikge1xuICByZXR1cm4gTWF0aC5yb3VuZChjb2xvciAqIDI1NSk7XG59XG5cbmZ1bmN0aW9uIGNvbnZlcnRUb0ludChyZWQsIGdyZWVuLCBibHVlKSB7XG4gIHJldHVybiBjb2xvclRvSW50KHJlZCkgKyBcIixcIiArIGNvbG9yVG9JbnQoZ3JlZW4pICsgXCIsXCIgKyBjb2xvclRvSW50KGJsdWUpO1xufVxuXG5mdW5jdGlvbiBoc2xUb1JnYihodWUsIHNhdHVyYXRpb24sIGxpZ2h0bmVzcywgY29udmVydCkge1xuICBpZiAoY29udmVydCA9PT0gdm9pZCAwKSB7XG4gICAgY29udmVydCA9IGNvbnZlcnRUb0ludDtcbiAgfVxuXG4gIGlmIChzYXR1cmF0aW9uID09PSAwKSB7XG4gICAgLy8gYWNocm9tYXRpY1xuICAgIHJldHVybiBjb252ZXJ0KGxpZ2h0bmVzcywgbGlnaHRuZXNzLCBsaWdodG5lc3MpO1xuICB9IC8vIGZvcm11bGFyIGZyb20gaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSFNMX2FuZF9IU1ZcblxuXG4gIHZhciBodWVQcmltZSA9IGh1ZSAlIDM2MCAvIDYwO1xuICB2YXIgY2hyb21hID0gKDEgLSBNYXRoLmFicygyICogbGlnaHRuZXNzIC0gMSkpICogc2F0dXJhdGlvbjtcbiAgdmFyIHNlY29uZENvbXBvbmVudCA9IGNocm9tYSAqICgxIC0gTWF0aC5hYnMoaHVlUHJpbWUgJSAyIC0gMSkpO1xuICB2YXIgcmVkID0gMDtcbiAgdmFyIGdyZWVuID0gMDtcbiAgdmFyIGJsdWUgPSAwO1xuXG4gIGlmIChodWVQcmltZSA+PSAwICYmIGh1ZVByaW1lIDwgMSkge1xuICAgIHJlZCA9IGNocm9tYTtcbiAgICBncmVlbiA9IHNlY29uZENvbXBvbmVudDtcbiAgfSBlbHNlIGlmIChodWVQcmltZSA+PSAxICYmIGh1ZVByaW1lIDwgMikge1xuICAgIHJlZCA9IHNlY29uZENvbXBvbmVudDtcbiAgICBncmVlbiA9IGNocm9tYTtcbiAgfSBlbHNlIGlmIChodWVQcmltZSA+PSAyICYmIGh1ZVByaW1lIDwgMykge1xuICAgIGdyZWVuID0gY2hyb21hO1xuICAgIGJsdWUgPSBzZWNvbmRDb21wb25lbnQ7XG4gIH0gZWxzZSBpZiAoaHVlUHJpbWUgPj0gMyAmJiBodWVQcmltZSA8IDQpIHtcbiAgICBncmVlbiA9IHNlY29uZENvbXBvbmVudDtcbiAgICBibHVlID0gY2hyb21hO1xuICB9IGVsc2UgaWYgKGh1ZVByaW1lID49IDQgJiYgaHVlUHJpbWUgPCA1KSB7XG4gICAgcmVkID0gc2Vjb25kQ29tcG9uZW50O1xuICAgIGJsdWUgPSBjaHJvbWE7XG4gIH0gZWxzZSBpZiAoaHVlUHJpbWUgPj0gNSAmJiBodWVQcmltZSA8IDYpIHtcbiAgICByZWQgPSBjaHJvbWE7XG4gICAgYmx1ZSA9IHNlY29uZENvbXBvbmVudDtcbiAgfVxuXG4gIHZhciBsaWdodG5lc3NNb2RpZmljYXRpb24gPSBsaWdodG5lc3MgLSBjaHJvbWEgLyAyO1xuICB2YXIgZmluYWxSZWQgPSByZWQgKyBsaWdodG5lc3NNb2RpZmljYXRpb247XG4gIHZhciBmaW5hbEdyZWVuID0gZ3JlZW4gKyBsaWdodG5lc3NNb2RpZmljYXRpb247XG4gIHZhciBmaW5hbEJsdWUgPSBibHVlICsgbGlnaHRuZXNzTW9kaWZpY2F0aW9uO1xuICByZXR1cm4gY29udmVydChmaW5hbFJlZCwgZmluYWxHcmVlbiwgZmluYWxCbHVlKTtcbn1cblxudmFyIF9kZWZhdWx0ID0gaHNsVG9SZ2I7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xudmFyIG5hbWVkQ29sb3JNYXAgPSB7XG4gIGFsaWNlYmx1ZTogJ2YwZjhmZicsXG4gIGFudGlxdWV3aGl0ZTogJ2ZhZWJkNycsXG4gIGFxdWE6ICcwMGZmZmYnLFxuICBhcXVhbWFyaW5lOiAnN2ZmZmQ0JyxcbiAgYXp1cmU6ICdmMGZmZmYnLFxuICBiZWlnZTogJ2Y1ZjVkYycsXG4gIGJpc3F1ZTogJ2ZmZTRjNCcsXG4gIGJsYWNrOiAnMDAwJyxcbiAgYmxhbmNoZWRhbG1vbmQ6ICdmZmViY2QnLFxuICBibHVlOiAnMDAwMGZmJyxcbiAgYmx1ZXZpb2xldDogJzhhMmJlMicsXG4gIGJyb3duOiAnYTUyYTJhJyxcbiAgYnVybHl3b29kOiAnZGViODg3JyxcbiAgY2FkZXRibHVlOiAnNWY5ZWEwJyxcbiAgY2hhcnRyZXVzZTogJzdmZmYwMCcsXG4gIGNob2NvbGF0ZTogJ2QyNjkxZScsXG4gIGNvcmFsOiAnZmY3ZjUwJyxcbiAgY29ybmZsb3dlcmJsdWU6ICc2NDk1ZWQnLFxuICBjb3Juc2lsazogJ2ZmZjhkYycsXG4gIGNyaW1zb246ICdkYzE0M2MnLFxuICBjeWFuOiAnMDBmZmZmJyxcbiAgZGFya2JsdWU6ICcwMDAwOGInLFxuICBkYXJrY3lhbjogJzAwOGI4YicsXG4gIGRhcmtnb2xkZW5yb2Q6ICdiODg2MGInLFxuICBkYXJrZ3JheTogJ2E5YTlhOScsXG4gIGRhcmtncmVlbjogJzAwNjQwMCcsXG4gIGRhcmtncmV5OiAnYTlhOWE5JyxcbiAgZGFya2toYWtpOiAnYmRiNzZiJyxcbiAgZGFya21hZ2VudGE6ICc4YjAwOGInLFxuICBkYXJrb2xpdmVncmVlbjogJzU1NmIyZicsXG4gIGRhcmtvcmFuZ2U6ICdmZjhjMDAnLFxuICBkYXJrb3JjaGlkOiAnOTkzMmNjJyxcbiAgZGFya3JlZDogJzhiMDAwMCcsXG4gIGRhcmtzYWxtb246ICdlOTk2N2EnLFxuICBkYXJrc2VhZ3JlZW46ICc4ZmJjOGYnLFxuICBkYXJrc2xhdGVibHVlOiAnNDgzZDhiJyxcbiAgZGFya3NsYXRlZ3JheTogJzJmNGY0ZicsXG4gIGRhcmtzbGF0ZWdyZXk6ICcyZjRmNGYnLFxuICBkYXJrdHVycXVvaXNlOiAnMDBjZWQxJyxcbiAgZGFya3Zpb2xldDogJzk0MDBkMycsXG4gIGRlZXBwaW5rOiAnZmYxNDkzJyxcbiAgZGVlcHNreWJsdWU6ICcwMGJmZmYnLFxuICBkaW1ncmF5OiAnNjk2OTY5JyxcbiAgZGltZ3JleTogJzY5Njk2OScsXG4gIGRvZGdlcmJsdWU6ICcxZTkwZmYnLFxuICBmaXJlYnJpY2s6ICdiMjIyMjInLFxuICBmbG9yYWx3aGl0ZTogJ2ZmZmFmMCcsXG4gIGZvcmVzdGdyZWVuOiAnMjI4YjIyJyxcbiAgZnVjaHNpYTogJ2ZmMDBmZicsXG4gIGdhaW5zYm9ybzogJ2RjZGNkYycsXG4gIGdob3N0d2hpdGU6ICdmOGY4ZmYnLFxuICBnb2xkOiAnZmZkNzAwJyxcbiAgZ29sZGVucm9kOiAnZGFhNTIwJyxcbiAgZ3JheTogJzgwODA4MCcsXG4gIGdyZWVuOiAnMDA4MDAwJyxcbiAgZ3JlZW55ZWxsb3c6ICdhZGZmMmYnLFxuICBncmV5OiAnODA4MDgwJyxcbiAgaG9uZXlkZXc6ICdmMGZmZjAnLFxuICBob3RwaW5rOiAnZmY2OWI0JyxcbiAgaW5kaWFucmVkOiAnY2Q1YzVjJyxcbiAgaW5kaWdvOiAnNGIwMDgyJyxcbiAgaXZvcnk6ICdmZmZmZjAnLFxuICBraGFraTogJ2YwZTY4YycsXG4gIGxhdmVuZGVyOiAnZTZlNmZhJyxcbiAgbGF2ZW5kZXJibHVzaDogJ2ZmZjBmNScsXG4gIGxhd25ncmVlbjogJzdjZmMwMCcsXG4gIGxlbW9uY2hpZmZvbjogJ2ZmZmFjZCcsXG4gIGxpZ2h0Ymx1ZTogJ2FkZDhlNicsXG4gIGxpZ2h0Y29yYWw6ICdmMDgwODAnLFxuICBsaWdodGN5YW46ICdlMGZmZmYnLFxuICBsaWdodGdvbGRlbnJvZHllbGxvdzogJ2ZhZmFkMicsXG4gIGxpZ2h0Z3JheTogJ2QzZDNkMycsXG4gIGxpZ2h0Z3JlZW46ICc5MGVlOTAnLFxuICBsaWdodGdyZXk6ICdkM2QzZDMnLFxuICBsaWdodHBpbms6ICdmZmI2YzEnLFxuICBsaWdodHNhbG1vbjogJ2ZmYTA3YScsXG4gIGxpZ2h0c2VhZ3JlZW46ICcyMGIyYWEnLFxuICBsaWdodHNreWJsdWU6ICc4N2NlZmEnLFxuICBsaWdodHNsYXRlZ3JheTogJzc4OScsXG4gIGxpZ2h0c2xhdGVncmV5OiAnNzg5JyxcbiAgbGlnaHRzdGVlbGJsdWU6ICdiMGM0ZGUnLFxuICBsaWdodHllbGxvdzogJ2ZmZmZlMCcsXG4gIGxpbWU6ICcwZjAnLFxuICBsaW1lZ3JlZW46ICczMmNkMzInLFxuICBsaW5lbjogJ2ZhZjBlNicsXG4gIG1hZ2VudGE6ICdmMGYnLFxuICBtYXJvb246ICc4MDAwMDAnLFxuICBtZWRpdW1hcXVhbWFyaW5lOiAnNjZjZGFhJyxcbiAgbWVkaXVtYmx1ZTogJzAwMDBjZCcsXG4gIG1lZGl1bW9yY2hpZDogJ2JhNTVkMycsXG4gIG1lZGl1bXB1cnBsZTogJzkzNzBkYicsXG4gIG1lZGl1bXNlYWdyZWVuOiAnM2NiMzcxJyxcbiAgbWVkaXVtc2xhdGVibHVlOiAnN2I2OGVlJyxcbiAgbWVkaXVtc3ByaW5nZ3JlZW46ICcwMGZhOWEnLFxuICBtZWRpdW10dXJxdW9pc2U6ICc0OGQxY2MnLFxuICBtZWRpdW12aW9sZXRyZWQ6ICdjNzE1ODUnLFxuICBtaWRuaWdodGJsdWU6ICcxOTE5NzAnLFxuICBtaW50Y3JlYW06ICdmNWZmZmEnLFxuICBtaXN0eXJvc2U6ICdmZmU0ZTEnLFxuICBtb2NjYXNpbjogJ2ZmZTRiNScsXG4gIG5hdmFqb3doaXRlOiAnZmZkZWFkJyxcbiAgbmF2eTogJzAwMDA4MCcsXG4gIG9sZGxhY2U6ICdmZGY1ZTYnLFxuICBvbGl2ZTogJzgwODAwMCcsXG4gIG9saXZlZHJhYjogJzZiOGUyMycsXG4gIG9yYW5nZTogJ2ZmYTUwMCcsXG4gIG9yYW5nZXJlZDogJ2ZmNDUwMCcsXG4gIG9yY2hpZDogJ2RhNzBkNicsXG4gIHBhbGVnb2xkZW5yb2Q6ICdlZWU4YWEnLFxuICBwYWxlZ3JlZW46ICc5OGZiOTgnLFxuICBwYWxldHVycXVvaXNlOiAnYWZlZWVlJyxcbiAgcGFsZXZpb2xldHJlZDogJ2RiNzA5MycsXG4gIHBhcGF5YXdoaXA6ICdmZmVmZDUnLFxuICBwZWFjaHB1ZmY6ICdmZmRhYjknLFxuICBwZXJ1OiAnY2Q4NTNmJyxcbiAgcGluazogJ2ZmYzBjYicsXG4gIHBsdW06ICdkZGEwZGQnLFxuICBwb3dkZXJibHVlOiAnYjBlMGU2JyxcbiAgcHVycGxlOiAnODAwMDgwJyxcbiAgcmViZWNjYXB1cnBsZTogJzYzOScsXG4gIHJlZDogJ2YwMCcsXG4gIHJvc3licm93bjogJ2JjOGY4ZicsXG4gIHJveWFsYmx1ZTogJzQxNjllMScsXG4gIHNhZGRsZWJyb3duOiAnOGI0NTEzJyxcbiAgc2FsbW9uOiAnZmE4MDcyJyxcbiAgc2FuZHlicm93bjogJ2Y0YTQ2MCcsXG4gIHNlYWdyZWVuOiAnMmU4YjU3JyxcbiAgc2Vhc2hlbGw6ICdmZmY1ZWUnLFxuICBzaWVubmE6ICdhMDUyMmQnLFxuICBzaWx2ZXI6ICdjMGMwYzAnLFxuICBza3libHVlOiAnODdjZWViJyxcbiAgc2xhdGVibHVlOiAnNmE1YWNkJyxcbiAgc2xhdGVncmF5OiAnNzA4MDkwJyxcbiAgc2xhdGVncmV5OiAnNzA4MDkwJyxcbiAgc25vdzogJ2ZmZmFmYScsXG4gIHNwcmluZ2dyZWVuOiAnMDBmZjdmJyxcbiAgc3RlZWxibHVlOiAnNDY4MmI0JyxcbiAgdGFuOiAnZDJiNDhjJyxcbiAgdGVhbDogJzAwODA4MCcsXG4gIHRoaXN0bGU6ICdkOGJmZDgnLFxuICB0b21hdG86ICdmZjYzNDcnLFxuICB0dXJxdW9pc2U6ICc0MGUwZDAnLFxuICB2aW9sZXQ6ICdlZTgyZWUnLFxuICB3aGVhdDogJ2Y1ZGViMycsXG4gIHdoaXRlOiAnZmZmJyxcbiAgd2hpdGVzbW9rZTogJ2Y1ZjVmNScsXG4gIHllbGxvdzogJ2ZmMCcsXG4gIHllbGxvd2dyZWVuOiAnOWFjZDMyJ1xuICAvKipcbiAgICogQ2hlY2tzIGlmIGEgc3RyaW5nIGlzIGEgQ1NTIG5hbWVkIGNvbG9yIGFuZCByZXR1cm5zIGl0cyBlcXVpdmFsZW50IGhleCB2YWx1ZSwgb3RoZXJ3aXNlIHJldHVybnMgdGhlIG9yaWdpbmFsIGNvbG9yLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cblxufTtcblxuZnVuY3Rpb24gbmFtZVRvSGV4KGNvbG9yKSB7XG4gIGlmICh0eXBlb2YgY29sb3IgIT09ICdzdHJpbmcnKSByZXR1cm4gY29sb3I7XG4gIHZhciBub3JtYWxpemVkQ29sb3JOYW1lID0gY29sb3IudG9Mb3dlckNhc2UoKTtcbiAgcmV0dXJuIG5hbWVkQ29sb3JNYXBbbm9ybWFsaXplZENvbG9yTmFtZV0gPyBcIiNcIiArIG5hbWVkQ29sb3JNYXBbbm9ybWFsaXplZENvbG9yTmFtZV0gOiBjb2xvcjtcbn1cblxudmFyIF9kZWZhdWx0ID0gbmFtZVRvSGV4O1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7IGlmIChzZWxmID09PSB2b2lkIDApIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0c0xvb3NlKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcy5wcm90b3R5cGUpOyBzdWJDbGFzcy5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBzdWJDbGFzczsgc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG5mdW5jdGlvbiBfd3JhcE5hdGl2ZVN1cGVyKENsYXNzKSB7IHZhciBfY2FjaGUgPSB0eXBlb2YgTWFwID09PSBcImZ1bmN0aW9uXCIgPyBuZXcgTWFwKCkgOiB1bmRlZmluZWQ7IF93cmFwTmF0aXZlU3VwZXIgPSBmdW5jdGlvbiBfd3JhcE5hdGl2ZVN1cGVyKENsYXNzKSB7IGlmIChDbGFzcyA9PT0gbnVsbCB8fCAhX2lzTmF0aXZlRnVuY3Rpb24oQ2xhc3MpKSByZXR1cm4gQ2xhc3M7IGlmICh0eXBlb2YgQ2xhc3MgIT09IFwiZnVuY3Rpb25cIikgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7IH0gaWYgKHR5cGVvZiBfY2FjaGUgIT09IFwidW5kZWZpbmVkXCIpIHsgaWYgKF9jYWNoZS5oYXMoQ2xhc3MpKSByZXR1cm4gX2NhY2hlLmdldChDbGFzcyk7IF9jYWNoZS5zZXQoQ2xhc3MsIFdyYXBwZXIpOyB9IGZ1bmN0aW9uIFdyYXBwZXIoKSB7IHJldHVybiBfY29uc3RydWN0KENsYXNzLCBhcmd1bWVudHMsIF9nZXRQcm90b3R5cGVPZih0aGlzKS5jb25zdHJ1Y3Rvcik7IH0gV3JhcHBlci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKENsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogV3JhcHBlciwgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihXcmFwcGVyLCBDbGFzcyk7IH07IHJldHVybiBfd3JhcE5hdGl2ZVN1cGVyKENsYXNzKTsgfVxuXG5mdW5jdGlvbiBpc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7IGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhUmVmbGVjdC5jb25zdHJ1Y3QpIHJldHVybiBmYWxzZTsgaWYgKFJlZmxlY3QuY29uc3RydWN0LnNoYW0pIHJldHVybiBmYWxzZTsgaWYgKHR5cGVvZiBQcm94eSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gdHJ1ZTsgdHJ5IHsgRGF0ZS5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChEYXRlLCBbXSwgZnVuY3Rpb24gKCkge30pKTsgcmV0dXJuIHRydWU7IH0gY2F0Y2ggKGUpIHsgcmV0dXJuIGZhbHNlOyB9IH1cblxuZnVuY3Rpb24gX2NvbnN0cnVjdChQYXJlbnQsIGFyZ3MsIENsYXNzKSB7IGlmIChpc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSkgeyBfY29uc3RydWN0ID0gUmVmbGVjdC5jb25zdHJ1Y3Q7IH0gZWxzZSB7IF9jb25zdHJ1Y3QgPSBmdW5jdGlvbiBfY29uc3RydWN0KFBhcmVudCwgYXJncywgQ2xhc3MpIHsgdmFyIGEgPSBbbnVsbF07IGEucHVzaC5hcHBseShhLCBhcmdzKTsgdmFyIENvbnN0cnVjdG9yID0gRnVuY3Rpb24uYmluZC5hcHBseShQYXJlbnQsIGEpOyB2YXIgaW5zdGFuY2UgPSBuZXcgQ29uc3RydWN0b3IoKTsgaWYgKENsYXNzKSBfc2V0UHJvdG90eXBlT2YoaW5zdGFuY2UsIENsYXNzLnByb3RvdHlwZSk7IHJldHVybiBpbnN0YW5jZTsgfTsgfSByZXR1cm4gX2NvbnN0cnVjdC5hcHBseShudWxsLCBhcmd1bWVudHMpOyB9XG5cbmZ1bmN0aW9uIF9pc05hdGl2ZUZ1bmN0aW9uKGZuKSB7IHJldHVybiBGdW5jdGlvbi50b1N0cmluZy5jYWxsKGZuKS5pbmRleE9mKFwiW25hdGl2ZSBjb2RlXVwiKSAhPT0gLTE7IH1cblxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IG8uX19wcm90b19fID0gcDsgcmV0dXJuIG87IH07IHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7IH1cblxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTsgfTsgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTsgfVxuXG4vLyBiYXNlZCBvbiBodHRwczovL2dpdGh1Yi5jb20vc3R5bGVkLWNvbXBvbmVudHMvc3R5bGVkLWNvbXBvbmVudHMvYmxvYi9mY2Y2ZjM4MDRjNTdhMTRkZDc5ODRkZmFiN2JjMDZlZTJlZGNhMDQ0L3NyYy91dGlscy9lcnJvci5qc1xuXG4vKipcbiAqIFBhcnNlIGVycm9ycy5tZCBhbmQgdHVybiBpdCBpbnRvIGEgc2ltcGxlIGhhc2ggb2YgY29kZTogbWVzc2FnZVxuICogQHByaXZhdGVcbiAqL1xudmFyIEVSUk9SUyA9IHtcbiAgXCIxXCI6IFwiUGFzc2VkIGludmFsaWQgYXJndW1lbnRzIHRvIGhzbCwgcGxlYXNlIHBhc3MgbXVsdGlwbGUgbnVtYmVycyBlLmcuIGhzbCgzNjAsIDAuNzUsIDAuNCkgb3IgYW4gb2JqZWN0IGUuZy4gcmdiKHsgaHVlOiAyNTUsIHNhdHVyYXRpb246IDAuNCwgbGlnaHRuZXNzOiAwLjc1IH0pLlxcblxcblwiLFxuICBcIjJcIjogXCJQYXNzZWQgaW52YWxpZCBhcmd1bWVudHMgdG8gaHNsYSwgcGxlYXNlIHBhc3MgbXVsdGlwbGUgbnVtYmVycyBlLmcuIGhzbGEoMzYwLCAwLjc1LCAwLjQsIDAuNykgb3IgYW4gb2JqZWN0IGUuZy4gcmdiKHsgaHVlOiAyNTUsIHNhdHVyYXRpb246IDAuNCwgbGlnaHRuZXNzOiAwLjc1LCBhbHBoYTogMC43IH0pLlxcblxcblwiLFxuICBcIjNcIjogXCJQYXNzZWQgYW4gaW5jb3JyZWN0IGFyZ3VtZW50IHRvIGEgY29sb3IgZnVuY3Rpb24sIHBsZWFzZSBwYXNzIGEgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIGEgY29sb3IuXFxuXFxuXCIsXG4gIFwiNFwiOiBcIkNvdWxkbid0IGdlbmVyYXRlIHZhbGlkIHJnYiBzdHJpbmcgZnJvbSAlcywgaXQgcmV0dXJuZWQgJXMuXFxuXFxuXCIsXG4gIFwiNVwiOiBcIkNvdWxkbid0IHBhcnNlIHRoZSBjb2xvciBzdHJpbmcuIFBsZWFzZSBwcm92aWRlIHRoZSBjb2xvciBhcyBhIHN0cmluZyBpbiBoZXgsIHJnYiwgcmdiYSwgaHNsIG9yIGhzbGEgbm90YXRpb24uXFxuXFxuXCIsXG4gIFwiNlwiOiBcIlBhc3NlZCBpbnZhbGlkIGFyZ3VtZW50cyB0byByZ2IsIHBsZWFzZSBwYXNzIG11bHRpcGxlIG51bWJlcnMgZS5nLiByZ2IoMjU1LCAyMDUsIDEwMCkgb3IgYW4gb2JqZWN0IGUuZy4gcmdiKHsgcmVkOiAyNTUsIGdyZWVuOiAyMDUsIGJsdWU6IDEwMCB9KS5cXG5cXG5cIixcbiAgXCI3XCI6IFwiUGFzc2VkIGludmFsaWQgYXJndW1lbnRzIHRvIHJnYmEsIHBsZWFzZSBwYXNzIG11bHRpcGxlIG51bWJlcnMgZS5nLiByZ2IoMjU1LCAyMDUsIDEwMCwgMC43NSkgb3IgYW4gb2JqZWN0IGUuZy4gcmdiKHsgcmVkOiAyNTUsIGdyZWVuOiAyMDUsIGJsdWU6IDEwMCwgYWxwaGE6IDAuNzUgfSkuXFxuXFxuXCIsXG4gIFwiOFwiOiBcIlBhc3NlZCBpbnZhbGlkIGFyZ3VtZW50IHRvIHRvQ29sb3JTdHJpbmcsIHBsZWFzZSBwYXNzIGEgUmdiQ29sb3IsIFJnYmFDb2xvciwgSHNsQ29sb3Igb3IgSHNsYUNvbG9yIG9iamVjdC5cXG5cXG5cIixcbiAgXCI5XCI6IFwiUGxlYXNlIHByb3ZpZGUgYSBudW1iZXIgb2Ygc3RlcHMgdG8gdGhlIG1vZHVsYXJTY2FsZSBoZWxwZXIuXFxuXFxuXCIsXG4gIFwiMTBcIjogXCJQbGVhc2UgcGFzcyBhIG51bWJlciBvciBvbmUgb2YgdGhlIHByZWRlZmluZWQgc2NhbGVzIHRvIHRoZSBtb2R1bGFyU2NhbGUgaGVscGVyIGFzIHRoZSByYXRpby5cXG5cXG5cIixcbiAgXCIxMVwiOiBcIkludmFsaWQgdmFsdWUgcGFzc2VkIGFzIGJhc2UgdG8gbW9kdWxhclNjYWxlLCBleHBlY3RlZCBudW1iZXIgb3IgZW0gc3RyaW5nIGJ1dCBnb3QgXFxcIiVzXFxcIlxcblxcblwiLFxuICBcIjEyXCI6IFwiRXhwZWN0ZWQgYSBzdHJpbmcgZW5kaW5nIGluIFxcXCJweFxcXCIgb3IgYSBudW1iZXIgcGFzc2VkIGFzIHRoZSBmaXJzdCBhcmd1bWVudCB0byAlcygpLCBnb3QgXFxcIiVzXFxcIiBpbnN0ZWFkLlxcblxcblwiLFxuICBcIjEzXCI6IFwiRXhwZWN0ZWQgYSBzdHJpbmcgZW5kaW5nIGluIFxcXCJweFxcXCIgb3IgYSBudW1iZXIgcGFzc2VkIGFzIHRoZSBzZWNvbmQgYXJndW1lbnQgdG8gJXMoKSwgZ290IFxcXCIlc1xcXCIgaW5zdGVhZC5cXG5cXG5cIixcbiAgXCIxNFwiOiBcIlBhc3NlZCBpbnZhbGlkIHBpeGVsIHZhbHVlIChcXFwiJXNcXFwiKSB0byAlcygpLCBwbGVhc2UgcGFzcyBhIHZhbHVlIGxpa2UgXFxcIjEycHhcXFwiIG9yIDEyLlxcblxcblwiLFxuICBcIjE1XCI6IFwiUGFzc2VkIGludmFsaWQgYmFzZSB2YWx1ZSAoXFxcIiVzXFxcIikgdG8gJXMoKSwgcGxlYXNlIHBhc3MgYSB2YWx1ZSBsaWtlIFxcXCIxMnB4XFxcIiBvciAxMi5cXG5cXG5cIixcbiAgXCIxNlwiOiBcIllvdSBtdXN0IHByb3ZpZGUgYSB0ZW1wbGF0ZSB0byB0aGlzIG1ldGhvZC5cXG5cXG5cIixcbiAgXCIxN1wiOiBcIllvdSBwYXNzZWQgYW4gdW5zdXBwb3J0ZWQgc2VsZWN0b3Igc3RhdGUgdG8gdGhpcyBtZXRob2QuXFxuXFxuXCIsXG4gIFwiMThcIjogXCJtaW5TY3JlZW4gYW5kIG1heFNjcmVlbiBtdXN0IGJlIHByb3ZpZGVkIGFzIHN0cmluZ2lmaWVkIG51bWJlcnMgd2l0aCB0aGUgc2FtZSB1bml0cy5cXG5cXG5cIixcbiAgXCIxOVwiOiBcImZyb21TaXplIGFuZCB0b1NpemUgbXVzdCBiZSBwcm92aWRlZCBhcyBzdHJpbmdpZmllZCBudW1iZXJzIHdpdGggdGhlIHNhbWUgdW5pdHMuXFxuXFxuXCIsXG4gIFwiMjBcIjogXCJleHBlY3RzIGVpdGhlciBhbiBhcnJheSBvZiBvYmplY3RzIG9yIGEgc2luZ2xlIG9iamVjdCB3aXRoIHRoZSBwcm9wZXJ0aWVzIHByb3AsIGZyb21TaXplLCBhbmQgdG9TaXplLlxcblxcblwiLFxuICBcIjIxXCI6IFwiZXhwZWN0cyB0aGUgb2JqZWN0cyBpbiB0aGUgZmlyc3QgYXJndW1lbnQgYXJyYXkgdG8gaGF2ZSB0aGUgcHJvcGVydGllcyBgcHJvcGAsIGBmcm9tU2l6ZWAsIGFuZCBgdG9TaXplYC5cXG5cXG5cIixcbiAgXCIyMlwiOiBcImV4cGVjdHMgdGhlIGZpcnN0IGFyZ3VtZW50IG9iamVjdCB0byBoYXZlIHRoZSBwcm9wZXJ0aWVzIGBwcm9wYCwgYGZyb21TaXplYCwgYW5kIGB0b1NpemVgLlxcblxcblwiLFxuICBcIjIzXCI6IFwiZm9udEZhY2UgZXhwZWN0cyBhIG5hbWUgb2YgYSBmb250LWZhbWlseS5cXG5cXG5cIixcbiAgXCIyNFwiOiBcImZvbnRGYWNlIGV4cGVjdHMgZWl0aGVyIHRoZSBwYXRoIHRvIHRoZSBmb250IGZpbGUocykgb3IgYSBuYW1lIG9mIGEgbG9jYWwgY29weS5cXG5cXG5cIixcbiAgXCIyNVwiOiBcImZvbnRGYWNlIGV4cGVjdHMgbG9jYWxGb250cyB0byBiZSBhbiBhcnJheS5cXG5cXG5cIixcbiAgXCIyNlwiOiBcImZvbnRGYWNlIGV4cGVjdHMgZmlsZUZvcm1hdHMgdG8gYmUgYW4gYXJyYXkuXFxuXFxuXCIsXG4gIFwiMjdcIjogXCJyYWRpYWxHcmFkaWVudCByZXF1cmllcyBhdCBsZWFzdCAyIGNvbG9yLXN0b3BzIHRvIHByb3Blcmx5IHJlbmRlci5cXG5cXG5cIixcbiAgXCIyOFwiOiBcIlBsZWFzZSBzdXBwbHkgYSBmaWxlbmFtZSB0byByZXRpbmFJbWFnZSgpIGFzIHRoZSBmaXJzdCBhcmd1bWVudC5cXG5cXG5cIixcbiAgXCIyOVwiOiBcIlBhc3NlZCBpbnZhbGlkIGFyZ3VtZW50IHRvIHRyaWFuZ2xlLCBwbGVhc2UgcGFzcyBjb3JyZWN0IHBvaW50aW5nRGlyZWN0aW9uIGUuZy4gJ3JpZ2h0Jy5cXG5cXG5cIixcbiAgXCIzMFwiOiBcIlBhc3NlZCBhbiBpbnZhbGlkIHZhbHVlIHRvIGBoZWlnaHRgIG9yIGB3aWR0aGAuIFBsZWFzZSBwcm92aWRlIGEgcGl4ZWwgYmFzZWQgdW5pdC5cXG5cXG5cIixcbiAgXCIzMVwiOiBcIlRoZSBhbmltYXRpb24gc2hvcnRoYW5kIG9ubHkgdGFrZXMgOCBhcmd1bWVudHMuIFNlZSB0aGUgc3BlY2lmaWNhdGlvbiBmb3IgbW9yZSBpbmZvcm1hdGlvbjogaHR0cDovL21kbi5pby9hbmltYXRpb25cXG5cXG5cIixcbiAgXCIzMlwiOiBcIlRvIHBhc3MgbXVsdGlwbGUgYW5pbWF0aW9ucyBwbGVhc2Ugc3VwcGx5IHRoZW0gaW4gYXJyYXlzLCBlLmcuIGFuaW1hdGlvbihbJ3JvdGF0ZScsICcycyddLCBbJ21vdmUnLCAnMXMnXSlcXG5UbyBwYXNzIGEgc2luZ2xlIGFuaW1hdGlvbiBwbGVhc2Ugc3VwcGx5IHRoZW0gaW4gc2ltcGxlIHZhbHVlcywgZS5nLiBhbmltYXRpb24oJ3JvdGF0ZScsICcycycpXFxuXFxuXCIsXG4gIFwiMzNcIjogXCJUaGUgYW5pbWF0aW9uIHNob3J0aGFuZCBhcnJheXMgY2FuIG9ubHkgaGF2ZSA4IGVsZW1lbnRzLiBTZWUgdGhlIHNwZWNpZmljYXRpb24gZm9yIG1vcmUgaW5mb3JtYXRpb246IGh0dHA6Ly9tZG4uaW8vYW5pbWF0aW9uXFxuXFxuXCIsXG4gIFwiMzRcIjogXCJib3JkZXJSYWRpdXMgZXhwZWN0cyBhIHJhZGl1cyB2YWx1ZSBhcyBhIHN0cmluZyBvciBudW1iZXIgYXMgdGhlIHNlY29uZCBhcmd1bWVudC5cXG5cXG5cIixcbiAgXCIzNVwiOiBcImJvcmRlclJhZGl1cyBleHBlY3RzIG9uZSBvZiBcXFwidG9wXFxcIiwgXFxcImJvdHRvbVxcXCIsIFxcXCJsZWZ0XFxcIiBvciBcXFwicmlnaHRcXFwiIGFzIHRoZSBmaXJzdCBhcmd1bWVudC5cXG5cXG5cIixcbiAgXCIzNlwiOiBcIlByb3BlcnR5IG11c3QgYmUgYSBzdHJpbmcgdmFsdWUuXFxuXFxuXCIsXG4gIFwiMzdcIjogXCJTeW50YXggRXJyb3IgYXQgJXMuXFxuXFxuXCIsXG4gIFwiMzhcIjogXCJGb3JtdWxhIGNvbnRhaW5zIGEgZnVuY3Rpb24gdGhhdCBuZWVkcyBwYXJlbnRoZXNlcyBhdCAlcy5cXG5cXG5cIixcbiAgXCIzOVwiOiBcIkZvcm11bGEgaXMgbWlzc2luZyBjbG9zaW5nIHBhcmVudGhlc2lzIGF0ICVzLlxcblxcblwiLFxuICBcIjQwXCI6IFwiRm9ybXVsYSBoYXMgdG9vIG1hbnkgY2xvc2luZyBwYXJlbnRoZXNlcyBhdCAlcy5cXG5cXG5cIixcbiAgXCI0MVwiOiBcIkFsbCB2YWx1ZXMgaW4gYSBmb3JtdWxhIG11c3QgaGF2ZSB0aGUgc2FtZSB1bml0IG9yIGJlIHVuaXRsZXNzLlxcblxcblwiLFxuICBcIjQyXCI6IFwiUGxlYXNlIHByb3ZpZGUgYSBudW1iZXIgb2Ygc3RlcHMgdG8gdGhlIG1vZHVsYXJTY2FsZSBoZWxwZXIuXFxuXFxuXCIsXG4gIFwiNDNcIjogXCJQbGVhc2UgcGFzcyBhIG51bWJlciBvciBvbmUgb2YgdGhlIHByZWRlZmluZWQgc2NhbGVzIHRvIHRoZSBtb2R1bGFyU2NhbGUgaGVscGVyIGFzIHRoZSByYXRpby5cXG5cXG5cIixcbiAgXCI0NFwiOiBcIkludmFsaWQgdmFsdWUgcGFzc2VkIGFzIGJhc2UgdG8gbW9kdWxhclNjYWxlLCBleHBlY3RlZCBudW1iZXIgb3IgZW0vcmVtIHN0cmluZyBidXQgZ290ICVzLlxcblxcblwiLFxuICBcIjQ1XCI6IFwiUGFzc2VkIGludmFsaWQgYXJndW1lbnQgdG8gaHNsVG9Db2xvclN0cmluZywgcGxlYXNlIHBhc3MgYSBIc2xDb2xvciBvciBIc2xhQ29sb3Igb2JqZWN0LlxcblxcblwiLFxuICBcIjQ2XCI6IFwiUGFzc2VkIGludmFsaWQgYXJndW1lbnQgdG8gcmdiVG9Db2xvclN0cmluZywgcGxlYXNlIHBhc3MgYSBSZ2JDb2xvciBvciBSZ2JhQ29sb3Igb2JqZWN0LlxcblxcblwiLFxuICBcIjQ3XCI6IFwibWluU2NyZWVuIGFuZCBtYXhTY3JlZW4gbXVzdCBiZSBwcm92aWRlZCBhcyBzdHJpbmdpZmllZCBudW1iZXJzIHdpdGggdGhlIHNhbWUgdW5pdHMuXFxuXFxuXCIsXG4gIFwiNDhcIjogXCJmcm9tU2l6ZSBhbmQgdG9TaXplIG11c3QgYmUgcHJvdmlkZWQgYXMgc3RyaW5naWZpZWQgbnVtYmVycyB3aXRoIHRoZSBzYW1lIHVuaXRzLlxcblxcblwiLFxuICBcIjQ5XCI6IFwiRXhwZWN0cyBlaXRoZXIgYW4gYXJyYXkgb2Ygb2JqZWN0cyBvciBhIHNpbmdsZSBvYmplY3Qgd2l0aCB0aGUgcHJvcGVydGllcyBwcm9wLCBmcm9tU2l6ZSwgYW5kIHRvU2l6ZS5cXG5cXG5cIixcbiAgXCI1MFwiOiBcIkV4cGVjdHMgdGhlIG9iamVjdHMgaW4gdGhlIGZpcnN0IGFyZ3VtZW50IGFycmF5IHRvIGhhdmUgdGhlIHByb3BlcnRpZXMgcHJvcCwgZnJvbVNpemUsIGFuZCB0b1NpemUuXFxuXFxuXCIsXG4gIFwiNTFcIjogXCJFeHBlY3RzIHRoZSBmaXJzdCBhcmd1bWVudCBvYmplY3QgdG8gaGF2ZSB0aGUgcHJvcGVydGllcyBwcm9wLCBmcm9tU2l6ZSwgYW5kIHRvU2l6ZS5cXG5cXG5cIixcbiAgXCI1MlwiOiBcImZvbnRGYWNlIGV4cGVjdHMgZWl0aGVyIHRoZSBwYXRoIHRvIHRoZSBmb250IGZpbGUocykgb3IgYSBuYW1lIG9mIGEgbG9jYWwgY29weS5cXG5cXG5cIixcbiAgXCI1M1wiOiBcImZvbnRGYWNlIGV4cGVjdHMgbG9jYWxGb250cyB0byBiZSBhbiBhcnJheS5cXG5cXG5cIixcbiAgXCI1NFwiOiBcImZvbnRGYWNlIGV4cGVjdHMgZmlsZUZvcm1hdHMgdG8gYmUgYW4gYXJyYXkuXFxuXFxuXCIsXG4gIFwiNTVcIjogXCJmb250RmFjZSBleHBlY3RzIGEgbmFtZSBvZiBhIGZvbnQtZmFtaWx5LlxcblxcblwiLFxuICBcIjU2XCI6IFwibGluZWFyR3JhZGllbnQgcmVxdXJpZXMgYXQgbGVhc3QgMiBjb2xvci1zdG9wcyB0byBwcm9wZXJseSByZW5kZXIuXFxuXFxuXCIsXG4gIFwiNTdcIjogXCJyYWRpYWxHcmFkaWVudCByZXF1cmllcyBhdCBsZWFzdCAyIGNvbG9yLXN0b3BzIHRvIHByb3Blcmx5IHJlbmRlci5cXG5cXG5cIixcbiAgXCI1OFwiOiBcIlBsZWFzZSBzdXBwbHkgYSBmaWxlbmFtZSB0byByZXRpbmFJbWFnZSgpIGFzIHRoZSBmaXJzdCBhcmd1bWVudC5cXG5cXG5cIixcbiAgXCI1OVwiOiBcIlBhc3NlZCBpbnZhbGlkIGFyZ3VtZW50IHRvIHRyaWFuZ2xlLCBwbGVhc2UgcGFzcyBjb3JyZWN0IHBvaW50aW5nRGlyZWN0aW9uIGUuZy4gJ3JpZ2h0Jy5cXG5cXG5cIixcbiAgXCI2MFwiOiBcIlBhc3NlZCBhbiBpbnZhbGlkIHZhbHVlIHRvIGBoZWlnaHRgIG9yIGB3aWR0aGAuIFBsZWFzZSBwcm92aWRlIGEgcGl4ZWwgYmFzZWQgdW5pdC5cXG5cXG5cIixcbiAgXCI2MVwiOiBcIlByb3BlcnR5IG11c3QgYmUgYSBzdHJpbmcgdmFsdWUuXFxuXFxuXCIsXG4gIFwiNjJcIjogXCJib3JkZXJSYWRpdXMgZXhwZWN0cyBhIHJhZGl1cyB2YWx1ZSBhcyBhIHN0cmluZyBvciBudW1iZXIgYXMgdGhlIHNlY29uZCBhcmd1bWVudC5cXG5cXG5cIixcbiAgXCI2M1wiOiBcImJvcmRlclJhZGl1cyBleHBlY3RzIG9uZSBvZiBcXFwidG9wXFxcIiwgXFxcImJvdHRvbVxcXCIsIFxcXCJsZWZ0XFxcIiBvciBcXFwicmlnaHRcXFwiIGFzIHRoZSBmaXJzdCBhcmd1bWVudC5cXG5cXG5cIixcbiAgXCI2NFwiOiBcIlRoZSBhbmltYXRpb24gc2hvcnRoYW5kIG9ubHkgdGFrZXMgOCBhcmd1bWVudHMuIFNlZSB0aGUgc3BlY2lmaWNhdGlvbiBmb3IgbW9yZSBpbmZvcm1hdGlvbjogaHR0cDovL21kbi5pby9hbmltYXRpb24uXFxuXFxuXCIsXG4gIFwiNjVcIjogXCJUbyBwYXNzIG11bHRpcGxlIGFuaW1hdGlvbnMgcGxlYXNlIHN1cHBseSB0aGVtIGluIGFycmF5cywgZS5nLiBhbmltYXRpb24oWydyb3RhdGUnLCAnMnMnXSwgWydtb3ZlJywgJzFzJ10pXFxcXG5UbyBwYXNzIGEgc2luZ2xlIGFuaW1hdGlvbiBwbGVhc2Ugc3VwcGx5IHRoZW0gaW4gc2ltcGxlIHZhbHVlcywgZS5nLiBhbmltYXRpb24oJ3JvdGF0ZScsICcycycpLlxcblxcblwiLFxuICBcIjY2XCI6IFwiVGhlIGFuaW1hdGlvbiBzaG9ydGhhbmQgYXJyYXlzIGNhbiBvbmx5IGhhdmUgOCBlbGVtZW50cy4gU2VlIHRoZSBzcGVjaWZpY2F0aW9uIGZvciBtb3JlIGluZm9ybWF0aW9uOiBodHRwOi8vbWRuLmlvL2FuaW1hdGlvbi5cXG5cXG5cIixcbiAgXCI2N1wiOiBcIllvdSBtdXN0IHByb3ZpZGUgYSB0ZW1wbGF0ZSB0byB0aGlzIG1ldGhvZC5cXG5cXG5cIixcbiAgXCI2OFwiOiBcIllvdSBwYXNzZWQgYW4gdW5zdXBwb3J0ZWQgc2VsZWN0b3Igc3RhdGUgdG8gdGhpcyBtZXRob2QuXFxuXFxuXCIsXG4gIFwiNjlcIjogXCJFeHBlY3RlZCBhIHN0cmluZyBlbmRpbmcgaW4gXFxcInB4XFxcIiBvciBhIG51bWJlciBwYXNzZWQgYXMgdGhlIGZpcnN0IGFyZ3VtZW50IHRvICVzKCksIGdvdCAlcyBpbnN0ZWFkLlxcblxcblwiLFxuICBcIjcwXCI6IFwiRXhwZWN0ZWQgYSBzdHJpbmcgZW5kaW5nIGluIFxcXCJweFxcXCIgb3IgYSBudW1iZXIgcGFzc2VkIGFzIHRoZSBzZWNvbmQgYXJndW1lbnQgdG8gJXMoKSwgZ290ICVzIGluc3RlYWQuXFxuXFxuXCIsXG4gIFwiNzFcIjogXCJQYXNzZWQgaW52YWxpZCBwaXhlbCB2YWx1ZSAlcyB0byAlcygpLCBwbGVhc2UgcGFzcyBhIHZhbHVlIGxpa2UgXFxcIjEycHhcXFwiIG9yIDEyLlxcblxcblwiLFxuICBcIjcyXCI6IFwiUGFzc2VkIGludmFsaWQgYmFzZSB2YWx1ZSAlcyB0byAlcygpLCBwbGVhc2UgcGFzcyBhIHZhbHVlIGxpa2UgXFxcIjEycHhcXFwiIG9yIDEyLlxcblwiXG59O1xuLyoqXG4gKiBzdXBlciBiYXNpYyB2ZXJzaW9uIG9mIHNwcmludGZcbiAqIEBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gZm9ybWF0KCkge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgdmFyIGEgPSBhcmdzWzBdO1xuICB2YXIgYiA9IFtdO1xuICB2YXIgYztcblxuICBmb3IgKGMgPSAxOyBjIDwgYXJncy5sZW5ndGg7IGMgKz0gMSkge1xuICAgIGIucHVzaChhcmdzW2NdKTtcbiAgfVxuXG4gIGIuZm9yRWFjaChmdW5jdGlvbiAoZCkge1xuICAgIGEgPSBhLnJlcGxhY2UoLyVbYS16XS8sIGQpO1xuICB9KTtcbiAgcmV0dXJuIGE7XG59XG4vKipcbiAqIENyZWF0ZSBhbiBlcnJvciBmaWxlIG91dCBvZiBlcnJvcnMubWQgZm9yIGRldmVsb3BtZW50IGFuZCBhIHNpbXBsZSB3ZWIgbGluayB0byB0aGUgZnVsbCBlcnJvcnNcbiAqIGluIHByb2R1Y3Rpb24gbW9kZS5cbiAqIEBwcml2YXRlXG4gKi9cblxuXG52YXIgUG9saXNoZWRFcnJvciA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoX0Vycm9yKSB7XG4gIF9pbmhlcml0c0xvb3NlKFBvbGlzaGVkRXJyb3IsIF9FcnJvcik7XG5cbiAgZnVuY3Rpb24gUG9saXNoZWRFcnJvcihjb2RlKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIF90aGlzID0gX0Vycm9yLmNhbGwodGhpcywgXCJBbiBlcnJvciBvY2N1cnJlZC4gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9zdHlsZWQtY29tcG9uZW50cy9wb2xpc2hlZC9ibG9iL21hc3Rlci9zcmMvZXJyb3IvZXJyb3JzLm1kI1wiICsgY29kZSArIFwiIGZvciBtb3JlIGluZm9ybWF0aW9uLlwiKSB8fCB0aGlzO1xuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbjIgPiAxID8gX2xlbjIgLSAxIDogMCksIF9rZXkyID0gMTsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgICBhcmdzW19rZXkyIC0gMV0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgICAgfVxuXG4gICAgICBfdGhpcyA9IF9FcnJvci5jYWxsKHRoaXMsIGZvcm1hdC5hcHBseSh2b2lkIDAsIFtFUlJPUlNbY29kZV1dLmNvbmNhdChhcmdzKSkpIHx8IHRoaXM7XG4gICAgfVxuXG4gICAgcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpO1xuICB9XG5cbiAgcmV0dXJuIFBvbGlzaGVkRXJyb3I7XG59KFxuLyojX19QVVJFX18qL1xuX3dyYXBOYXRpdmVTdXBlcihFcnJvcikpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBQb2xpc2hlZEVycm9yO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBfaHNsVG9SZ2IgPVxuLyojX19QVVJFX18qL1xuX2ludGVyb3BSZXF1aXJlRGVmYXVsdChcbi8qI19fUFVSRV9fKi9cbnJlcXVpcmUoXCIuLi9pbnRlcm5hbEhlbHBlcnMvX2hzbFRvUmdiXCIpKTtcblxudmFyIF9uYW1lVG9IZXggPVxuLyojX19QVVJFX18qL1xuX2ludGVyb3BSZXF1aXJlRGVmYXVsdChcbi8qI19fUFVSRV9fKi9cbnJlcXVpcmUoXCIuLi9pbnRlcm5hbEhlbHBlcnMvX25hbWVUb0hleFwiKSk7XG5cbnZhciBfZXJyb3JzID1cbi8qI19fUFVSRV9fKi9cbl9pbnRlcm9wUmVxdWlyZURlZmF1bHQoXG4vKiNfX1BVUkVfXyovXG5yZXF1aXJlKFwiLi4vaW50ZXJuYWxIZWxwZXJzL19lcnJvcnNcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgaGV4UmVnZXggPSAvXiNbYS1mQS1GMC05XXs2fSQvO1xudmFyIGhleFJnYmFSZWdleCA9IC9eI1thLWZBLUYwLTldezh9JC87XG52YXIgcmVkdWNlZEhleFJlZ2V4ID0gL14jW2EtZkEtRjAtOV17M30kLztcbnZhciByZWR1Y2VkUmdiYUhleFJlZ2V4ID0gL14jW2EtZkEtRjAtOV17NH0kLztcbnZhciByZ2JSZWdleCA9IC9ecmdiXFwoXFxzKihcXGR7MSwzfSlcXHMqLFxccyooXFxkezEsM30pXFxzKixcXHMqKFxcZHsxLDN9KVxccypcXCkkLztcbnZhciByZ2JhUmVnZXggPSAvXnJnYmFcXChcXHMqKFxcZHsxLDN9KVxccyosXFxzKihcXGR7MSwzfSlcXHMqLFxccyooXFxkezEsM30pXFxzKixcXHMqKFstK10/WzAtOV0qWy5dP1swLTldKylcXHMqXFwpJC87XG52YXIgaHNsUmVnZXggPSAvXmhzbFxcKFxccyooXFxkezAsM31bLl0/WzAtOV0rKVxccyosXFxzKihcXGR7MSwzfSklXFxzKixcXHMqKFxcZHsxLDN9KSVcXHMqXFwpJC87XG52YXIgaHNsYVJlZ2V4ID0gL15oc2xhXFwoXFxzKihcXGR7MCwzfVsuXT9bMC05XSspXFxzKixcXHMqKFxcZHsxLDN9KSVcXHMqLFxccyooXFxkezEsM30pJVxccyosXFxzKihbLStdP1swLTldKlsuXT9bMC05XSspXFxzKlxcKSQvO1xuLyoqXG4gKiBSZXR1cm5zIGFuIFJnYkNvbG9yIG9yIFJnYmFDb2xvciBvYmplY3QuIFRoaXMgdXRpbGl0eSBmdW5jdGlvbiBpcyBvbmx5IHVzZWZ1bFxuICogaWYgd2FudCB0byBleHRyYWN0IGEgY29sb3IgY29tcG9uZW50LiBXaXRoIHRoZSBjb2xvciB1dGlsIGB0b0NvbG9yU3RyaW5nYCB5b3VcbiAqIGNhbiBjb252ZXJ0IGEgUmdiQ29sb3Igb3IgUmdiYUNvbG9yIG9iamVjdCBiYWNrIHRvIGEgc3RyaW5nLlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBc3NpZ25zIGB7IHJlZDogMjU1LCBncmVlbjogMCwgYmx1ZTogMCB9YCB0byBjb2xvcjFcbiAqIGNvbnN0IGNvbG9yMSA9IHBhcnNlVG9SZ2IoJ3JnYigyNTUsIDAsIDApJyk7XG4gKiAvLyBBc3NpZ25zIGB7IHJlZDogOTIsIGdyZWVuOiAxMDIsIGJsdWU6IDExMiwgYWxwaGE6IDAuNzUgfWAgdG8gY29sb3IyXG4gKiBjb25zdCBjb2xvcjIgPSBwYXJzZVRvUmdiKCdoc2xhKDIxMCwgMTAlLCA0MCUsIDAuNzUpJyk7XG4gKi9cblxuZnVuY3Rpb24gcGFyc2VUb1JnYihjb2xvcikge1xuICBpZiAodHlwZW9mIGNvbG9yICE9PSAnc3RyaW5nJykge1xuICAgIHRocm93IG5ldyBfZXJyb3JzLmRlZmF1bHQoMyk7XG4gIH1cblxuICB2YXIgbm9ybWFsaXplZENvbG9yID0gKDAsIF9uYW1lVG9IZXguZGVmYXVsdCkoY29sb3IpO1xuXG4gIGlmIChub3JtYWxpemVkQ29sb3IubWF0Y2goaGV4UmVnZXgpKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJlZDogcGFyc2VJbnQoXCJcIiArIG5vcm1hbGl6ZWRDb2xvclsxXSArIG5vcm1hbGl6ZWRDb2xvclsyXSwgMTYpLFxuICAgICAgZ3JlZW46IHBhcnNlSW50KFwiXCIgKyBub3JtYWxpemVkQ29sb3JbM10gKyBub3JtYWxpemVkQ29sb3JbNF0sIDE2KSxcbiAgICAgIGJsdWU6IHBhcnNlSW50KFwiXCIgKyBub3JtYWxpemVkQ29sb3JbNV0gKyBub3JtYWxpemVkQ29sb3JbNl0sIDE2KVxuICAgIH07XG4gIH1cblxuICBpZiAobm9ybWFsaXplZENvbG9yLm1hdGNoKGhleFJnYmFSZWdleCkpIHtcbiAgICB2YXIgYWxwaGEgPSBwYXJzZUZsb2F0KChwYXJzZUludChcIlwiICsgbm9ybWFsaXplZENvbG9yWzddICsgbm9ybWFsaXplZENvbG9yWzhdLCAxNikgLyAyNTUpLnRvRml4ZWQoMikpO1xuICAgIHJldHVybiB7XG4gICAgICByZWQ6IHBhcnNlSW50KFwiXCIgKyBub3JtYWxpemVkQ29sb3JbMV0gKyBub3JtYWxpemVkQ29sb3JbMl0sIDE2KSxcbiAgICAgIGdyZWVuOiBwYXJzZUludChcIlwiICsgbm9ybWFsaXplZENvbG9yWzNdICsgbm9ybWFsaXplZENvbG9yWzRdLCAxNiksXG4gICAgICBibHVlOiBwYXJzZUludChcIlwiICsgbm9ybWFsaXplZENvbG9yWzVdICsgbm9ybWFsaXplZENvbG9yWzZdLCAxNiksXG4gICAgICBhbHBoYTogYWxwaGFcbiAgICB9O1xuICB9XG5cbiAgaWYgKG5vcm1hbGl6ZWRDb2xvci5tYXRjaChyZWR1Y2VkSGV4UmVnZXgpKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJlZDogcGFyc2VJbnQoXCJcIiArIG5vcm1hbGl6ZWRDb2xvclsxXSArIG5vcm1hbGl6ZWRDb2xvclsxXSwgMTYpLFxuICAgICAgZ3JlZW46IHBhcnNlSW50KFwiXCIgKyBub3JtYWxpemVkQ29sb3JbMl0gKyBub3JtYWxpemVkQ29sb3JbMl0sIDE2KSxcbiAgICAgIGJsdWU6IHBhcnNlSW50KFwiXCIgKyBub3JtYWxpemVkQ29sb3JbM10gKyBub3JtYWxpemVkQ29sb3JbM10sIDE2KVxuICAgIH07XG4gIH1cblxuICBpZiAobm9ybWFsaXplZENvbG9yLm1hdGNoKHJlZHVjZWRSZ2JhSGV4UmVnZXgpKSB7XG4gICAgdmFyIF9hbHBoYSA9IHBhcnNlRmxvYXQoKHBhcnNlSW50KFwiXCIgKyBub3JtYWxpemVkQ29sb3JbNF0gKyBub3JtYWxpemVkQ29sb3JbNF0sIDE2KSAvIDI1NSkudG9GaXhlZCgyKSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgcmVkOiBwYXJzZUludChcIlwiICsgbm9ybWFsaXplZENvbG9yWzFdICsgbm9ybWFsaXplZENvbG9yWzFdLCAxNiksXG4gICAgICBncmVlbjogcGFyc2VJbnQoXCJcIiArIG5vcm1hbGl6ZWRDb2xvclsyXSArIG5vcm1hbGl6ZWRDb2xvclsyXSwgMTYpLFxuICAgICAgYmx1ZTogcGFyc2VJbnQoXCJcIiArIG5vcm1hbGl6ZWRDb2xvclszXSArIG5vcm1hbGl6ZWRDb2xvclszXSwgMTYpLFxuICAgICAgYWxwaGE6IF9hbHBoYVxuICAgIH07XG4gIH1cblxuICB2YXIgcmdiTWF0Y2hlZCA9IHJnYlJlZ2V4LmV4ZWMobm9ybWFsaXplZENvbG9yKTtcblxuICBpZiAocmdiTWF0Y2hlZCkge1xuICAgIHJldHVybiB7XG4gICAgICByZWQ6IHBhcnNlSW50KFwiXCIgKyByZ2JNYXRjaGVkWzFdLCAxMCksXG4gICAgICBncmVlbjogcGFyc2VJbnQoXCJcIiArIHJnYk1hdGNoZWRbMl0sIDEwKSxcbiAgICAgIGJsdWU6IHBhcnNlSW50KFwiXCIgKyByZ2JNYXRjaGVkWzNdLCAxMClcbiAgICB9O1xuICB9XG5cbiAgdmFyIHJnYmFNYXRjaGVkID0gcmdiYVJlZ2V4LmV4ZWMobm9ybWFsaXplZENvbG9yKTtcblxuICBpZiAocmdiYU1hdGNoZWQpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcmVkOiBwYXJzZUludChcIlwiICsgcmdiYU1hdGNoZWRbMV0sIDEwKSxcbiAgICAgIGdyZWVuOiBwYXJzZUludChcIlwiICsgcmdiYU1hdGNoZWRbMl0sIDEwKSxcbiAgICAgIGJsdWU6IHBhcnNlSW50KFwiXCIgKyByZ2JhTWF0Y2hlZFszXSwgMTApLFxuICAgICAgYWxwaGE6IHBhcnNlRmxvYXQoXCJcIiArIHJnYmFNYXRjaGVkWzRdKVxuICAgIH07XG4gIH1cblxuICB2YXIgaHNsTWF0Y2hlZCA9IGhzbFJlZ2V4LmV4ZWMobm9ybWFsaXplZENvbG9yKTtcblxuICBpZiAoaHNsTWF0Y2hlZCkge1xuICAgIHZhciBodWUgPSBwYXJzZUludChcIlwiICsgaHNsTWF0Y2hlZFsxXSwgMTApO1xuICAgIHZhciBzYXR1cmF0aW9uID0gcGFyc2VJbnQoXCJcIiArIGhzbE1hdGNoZWRbMl0sIDEwKSAvIDEwMDtcbiAgICB2YXIgbGlnaHRuZXNzID0gcGFyc2VJbnQoXCJcIiArIGhzbE1hdGNoZWRbM10sIDEwKSAvIDEwMDtcbiAgICB2YXIgcmdiQ29sb3JTdHJpbmcgPSBcInJnYihcIiArICgwLCBfaHNsVG9SZ2IuZGVmYXVsdCkoaHVlLCBzYXR1cmF0aW9uLCBsaWdodG5lc3MpICsgXCIpXCI7XG4gICAgdmFyIGhzbFJnYk1hdGNoZWQgPSByZ2JSZWdleC5leGVjKHJnYkNvbG9yU3RyaW5nKTtcblxuICAgIGlmICghaHNsUmdiTWF0Y2hlZCkge1xuICAgICAgdGhyb3cgbmV3IF9lcnJvcnMuZGVmYXVsdCg0LCBub3JtYWxpemVkQ29sb3IsIHJnYkNvbG9yU3RyaW5nKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgcmVkOiBwYXJzZUludChcIlwiICsgaHNsUmdiTWF0Y2hlZFsxXSwgMTApLFxuICAgICAgZ3JlZW46IHBhcnNlSW50KFwiXCIgKyBoc2xSZ2JNYXRjaGVkWzJdLCAxMCksXG4gICAgICBibHVlOiBwYXJzZUludChcIlwiICsgaHNsUmdiTWF0Y2hlZFszXSwgMTApXG4gICAgfTtcbiAgfVxuXG4gIHZhciBoc2xhTWF0Y2hlZCA9IGhzbGFSZWdleC5leGVjKG5vcm1hbGl6ZWRDb2xvcik7XG5cbiAgaWYgKGhzbGFNYXRjaGVkKSB7XG4gICAgdmFyIF9odWUgPSBwYXJzZUludChcIlwiICsgaHNsYU1hdGNoZWRbMV0sIDEwKTtcblxuICAgIHZhciBfc2F0dXJhdGlvbiA9IHBhcnNlSW50KFwiXCIgKyBoc2xhTWF0Y2hlZFsyXSwgMTApIC8gMTAwO1xuXG4gICAgdmFyIF9saWdodG5lc3MgPSBwYXJzZUludChcIlwiICsgaHNsYU1hdGNoZWRbM10sIDEwKSAvIDEwMDtcblxuICAgIHZhciBfcmdiQ29sb3JTdHJpbmcgPSBcInJnYihcIiArICgwLCBfaHNsVG9SZ2IuZGVmYXVsdCkoX2h1ZSwgX3NhdHVyYXRpb24sIF9saWdodG5lc3MpICsgXCIpXCI7XG5cbiAgICB2YXIgX2hzbFJnYk1hdGNoZWQgPSByZ2JSZWdleC5leGVjKF9yZ2JDb2xvclN0cmluZyk7XG5cbiAgICBpZiAoIV9oc2xSZ2JNYXRjaGVkKSB7XG4gICAgICB0aHJvdyBuZXcgX2Vycm9ycy5kZWZhdWx0KDQsIG5vcm1hbGl6ZWRDb2xvciwgX3JnYkNvbG9yU3RyaW5nKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgcmVkOiBwYXJzZUludChcIlwiICsgX2hzbFJnYk1hdGNoZWRbMV0sIDEwKSxcbiAgICAgIGdyZWVuOiBwYXJzZUludChcIlwiICsgX2hzbFJnYk1hdGNoZWRbMl0sIDEwKSxcbiAgICAgIGJsdWU6IHBhcnNlSW50KFwiXCIgKyBfaHNsUmdiTWF0Y2hlZFszXSwgMTApLFxuICAgICAgYWxwaGE6IHBhcnNlRmxvYXQoXCJcIiArIGhzbGFNYXRjaGVkWzRdKVxuICAgIH07XG4gIH1cblxuICB0aHJvdyBuZXcgX2Vycm9ycy5kZWZhdWx0KDUpO1xufVxuXG52YXIgX2RlZmF1bHQgPSBwYXJzZVRvUmdiO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxuZnVuY3Rpb24gcmdiVG9Ic2woY29sb3IpIHtcbiAgLy8gbWFrZSBzdXJlIHJnYiBhcmUgY29udGFpbmVkIGluIGEgc2V0IG9mIFswLCAyNTVdXG4gIHZhciByZWQgPSBjb2xvci5yZWQgLyAyNTU7XG4gIHZhciBncmVlbiA9IGNvbG9yLmdyZWVuIC8gMjU1O1xuICB2YXIgYmx1ZSA9IGNvbG9yLmJsdWUgLyAyNTU7XG4gIHZhciBtYXggPSBNYXRoLm1heChyZWQsIGdyZWVuLCBibHVlKTtcbiAgdmFyIG1pbiA9IE1hdGgubWluKHJlZCwgZ3JlZW4sIGJsdWUpO1xuICB2YXIgbGlnaHRuZXNzID0gKG1heCArIG1pbikgLyAyO1xuXG4gIGlmIChtYXggPT09IG1pbikge1xuICAgIC8vIGFjaHJvbWF0aWNcbiAgICBpZiAoY29sb3IuYWxwaGEgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaHVlOiAwLFxuICAgICAgICBzYXR1cmF0aW9uOiAwLFxuICAgICAgICBsaWdodG5lc3M6IGxpZ2h0bmVzcyxcbiAgICAgICAgYWxwaGE6IGNvbG9yLmFscGhhXG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBodWU6IDAsXG4gICAgICAgIHNhdHVyYXRpb246IDAsXG4gICAgICAgIGxpZ2h0bmVzczogbGlnaHRuZXNzXG4gICAgICB9O1xuICAgIH1cbiAgfVxuXG4gIHZhciBodWU7XG4gIHZhciBkZWx0YSA9IG1heCAtIG1pbjtcbiAgdmFyIHNhdHVyYXRpb24gPSBsaWdodG5lc3MgPiAwLjUgPyBkZWx0YSAvICgyIC0gbWF4IC0gbWluKSA6IGRlbHRhIC8gKG1heCArIG1pbik7XG5cbiAgc3dpdGNoIChtYXgpIHtcbiAgICBjYXNlIHJlZDpcbiAgICAgIGh1ZSA9IChncmVlbiAtIGJsdWUpIC8gZGVsdGEgKyAoZ3JlZW4gPCBibHVlID8gNiA6IDApO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIGdyZWVuOlxuICAgICAgaHVlID0gKGJsdWUgLSByZWQpIC8gZGVsdGEgKyAyO1xuICAgICAgYnJlYWs7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgLy8gYmx1ZSBjYXNlXG4gICAgICBodWUgPSAocmVkIC0gZ3JlZW4pIC8gZGVsdGEgKyA0O1xuICAgICAgYnJlYWs7XG4gIH1cblxuICBodWUgKj0gNjA7XG5cbiAgaWYgKGNvbG9yLmFscGhhICE9PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaHVlOiBodWUsXG4gICAgICBzYXR1cmF0aW9uOiBzYXR1cmF0aW9uLFxuICAgICAgbGlnaHRuZXNzOiBsaWdodG5lc3MsXG4gICAgICBhbHBoYTogY29sb3IuYWxwaGFcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBodWU6IGh1ZSxcbiAgICBzYXR1cmF0aW9uOiBzYXR1cmF0aW9uLFxuICAgIGxpZ2h0bmVzczogbGlnaHRuZXNzXG4gIH07XG59XG5cbnZhciBfZGVmYXVsdCA9IHJnYlRvSHNsO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIF9wYXJzZVRvUmdiID1cbi8qI19fUFVSRV9fKi9cbl9pbnRlcm9wUmVxdWlyZURlZmF1bHQoXG4vKiNfX1BVUkVfXyovXG5yZXF1aXJlKFwiLi9wYXJzZVRvUmdiXCIpKTtcblxudmFyIF9yZ2JUb0hzbCA9XG4vKiNfX1BVUkVfXyovXG5faW50ZXJvcFJlcXVpcmVEZWZhdWx0KFxuLyojX19QVVJFX18qL1xucmVxdWlyZShcIi4uL2ludGVybmFsSGVscGVycy9fcmdiVG9Ic2xcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG4vKipcbiAqIFJldHVybnMgYW4gSHNsQ29sb3Igb3IgSHNsYUNvbG9yIG9iamVjdC4gVGhpcyB1dGlsaXR5IGZ1bmN0aW9uIGlzIG9ubHkgdXNlZnVsXG4gKiBpZiB3YW50IHRvIGV4dHJhY3QgYSBjb2xvciBjb21wb25lbnQuIFdpdGggdGhlIGNvbG9yIHV0aWwgYHRvQ29sb3JTdHJpbmdgIHlvdVxuICogY2FuIGNvbnZlcnQgYSBIc2xDb2xvciBvciBIc2xhQ29sb3Igb2JqZWN0IGJhY2sgdG8gYSBzdHJpbmcuXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFzc2lnbnMgYHsgaHVlOiAwLCBzYXR1cmF0aW9uOiAxLCBsaWdodG5lc3M6IDAuNSB9YCB0byBjb2xvcjFcbiAqIGNvbnN0IGNvbG9yMSA9IHBhcnNlVG9Ic2woJ3JnYigyNTUsIDAsIDApJyk7XG4gKiAvLyBBc3NpZ25zIGB7IGh1ZTogMTI4LCBzYXR1cmF0aW9uOiAxLCBsaWdodG5lc3M6IDAuNSwgYWxwaGE6IDAuNzUgfWAgdG8gY29sb3IyXG4gKiBjb25zdCBjb2xvcjIgPSBwYXJzZVRvSHNsKCdoc2xhKDEyOCwgMTAwJSwgNTAlLCAwLjc1KScpO1xuICovXG5mdW5jdGlvbiBwYXJzZVRvSHNsKGNvbG9yKSB7XG4gIC8vIE5vdGU6IEF0IGEgbGF0ZXIgc3RhZ2Ugd2UgY2FuIG9wdGltaXplIHRoaXMgZnVuY3Rpb24gYXMgcmlnaHQgbm93IGEgaHNsXG4gIC8vIGNvbG9yIHdvdWxkIGJlIHBhcnNlZCBjb252ZXJ0ZWQgdG8gcmdiIHZhbHVlcyBhbmQgY29udmVydGVkIGJhY2sgdG8gaHNsLlxuICByZXR1cm4gKDAsIF9yZ2JUb0hzbC5kZWZhdWx0KSgoMCwgX3BhcnNlVG9SZ2IuZGVmYXVsdCkoY29sb3IpKTtcbn1cblxudmFyIF9kZWZhdWx0ID0gcGFyc2VUb0hzbDtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbi8qKlxuICogUmVkdWNlcyBoZXggdmFsdWVzIGlmIHBvc3NpYmxlIGUuZy4gI2ZmODg2NiB0byAjZjg2XG4gKiBAcHJpdmF0ZVxuICovXG52YXIgcmVkdWNlSGV4VmFsdWUgPSBmdW5jdGlvbiByZWR1Y2VIZXhWYWx1ZSh2YWx1ZSkge1xuICBpZiAodmFsdWUubGVuZ3RoID09PSA3ICYmIHZhbHVlWzFdID09PSB2YWx1ZVsyXSAmJiB2YWx1ZVszXSA9PT0gdmFsdWVbNF0gJiYgdmFsdWVbNV0gPT09IHZhbHVlWzZdKSB7XG4gICAgcmV0dXJuIFwiI1wiICsgdmFsdWVbMV0gKyB2YWx1ZVszXSArIHZhbHVlWzVdO1xuICB9XG5cbiAgcmV0dXJuIHZhbHVlO1xufTtcblxudmFyIF9kZWZhdWx0ID0gcmVkdWNlSGV4VmFsdWU7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG5mdW5jdGlvbiBudW1iZXJUb0hleCh2YWx1ZSkge1xuICB2YXIgaGV4ID0gdmFsdWUudG9TdHJpbmcoMTYpO1xuICByZXR1cm4gaGV4Lmxlbmd0aCA9PT0gMSA/IFwiMFwiICsgaGV4IDogaGV4O1xufVxuXG52YXIgX2RlZmF1bHQgPSBudW1iZXJUb0hleDtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBfaHNsVG9SZ2IgPVxuLyojX19QVVJFX18qL1xuX2ludGVyb3BSZXF1aXJlRGVmYXVsdChcbi8qI19fUFVSRV9fKi9cbnJlcXVpcmUoXCIuL19oc2xUb1JnYlwiKSk7XG5cbnZhciBfcmVkdWNlSGV4VmFsdWUgPVxuLyojX19QVVJFX18qL1xuX2ludGVyb3BSZXF1aXJlRGVmYXVsdChcbi8qI19fUFVSRV9fKi9cbnJlcXVpcmUoXCIuL19yZWR1Y2VIZXhWYWx1ZVwiKSk7XG5cbnZhciBfbnVtYmVyVG9IZXggPVxuLyojX19QVVJFX18qL1xuX2ludGVyb3BSZXF1aXJlRGVmYXVsdChcbi8qI19fUFVSRV9fKi9cbnJlcXVpcmUoXCIuL19udW1iZXJUb0hleFwiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIGNvbG9yVG9IZXgoY29sb3IpIHtcbiAgcmV0dXJuICgwLCBfbnVtYmVyVG9IZXguZGVmYXVsdCkoTWF0aC5yb3VuZChjb2xvciAqIDI1NSkpO1xufVxuXG5mdW5jdGlvbiBjb252ZXJ0VG9IZXgocmVkLCBncmVlbiwgYmx1ZSkge1xuICByZXR1cm4gKDAsIF9yZWR1Y2VIZXhWYWx1ZS5kZWZhdWx0KShcIiNcIiArIGNvbG9yVG9IZXgocmVkKSArIGNvbG9yVG9IZXgoZ3JlZW4pICsgY29sb3JUb0hleChibHVlKSk7XG59XG5cbmZ1bmN0aW9uIGhzbFRvSGV4KGh1ZSwgc2F0dXJhdGlvbiwgbGlnaHRuZXNzKSB7XG4gIHJldHVybiAoMCwgX2hzbFRvUmdiLmRlZmF1bHQpKGh1ZSwgc2F0dXJhdGlvbiwgbGlnaHRuZXNzLCBjb252ZXJ0VG9IZXgpO1xufVxuXG52YXIgX2RlZmF1bHQgPSBoc2xUb0hleDtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBfaHNsVG9IZXggPVxuLyojX19QVVJFX18qL1xuX2ludGVyb3BSZXF1aXJlRGVmYXVsdChcbi8qI19fUFVSRV9fKi9cbnJlcXVpcmUoXCIuLi9pbnRlcm5hbEhlbHBlcnMvX2hzbFRvSGV4XCIpKTtcblxudmFyIF9lcnJvcnMgPVxuLyojX19QVVJFX18qL1xuX2ludGVyb3BSZXF1aXJlRGVmYXVsdChcbi8qI19fUFVSRV9fKi9cbnJlcXVpcmUoXCIuLi9pbnRlcm5hbEhlbHBlcnMvX2Vycm9yc1wiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbi8qKlxuICogUmV0dXJucyBhIHN0cmluZyB2YWx1ZSBmb3IgdGhlIGNvbG9yLiBUaGUgcmV0dXJuZWQgcmVzdWx0IGlzIHRoZSBzbWFsbGVzdCBwb3NzaWJsZSBoZXggbm90YXRpb24uXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFN0eWxlcyBhcyBvYmplY3QgdXNhZ2VcbiAqIGNvbnN0IHN0eWxlcyA9IHtcbiAqICAgYmFja2dyb3VuZDogaHNsKDM1OSwgMC43NSwgMC40KSxcbiAqICAgYmFja2dyb3VuZDogaHNsKHsgaHVlOiAzNjAsIHNhdHVyYXRpb246IDAuNzUsIGxpZ2h0bmVzczogMC40IH0pLFxuICogfVxuICpcbiAqIC8vIHN0eWxlZC1jb21wb25lbnRzIHVzYWdlXG4gKiBjb25zdCBkaXYgPSBzdHlsZWQuZGl2YFxuICogICBiYWNrZ3JvdW5kOiAke2hzbCgzNTksIDAuNzUsIDAuNCl9O1xuICogICBiYWNrZ3JvdW5kOiAke2hzbCh7IGh1ZTogMzYwLCBzYXR1cmF0aW9uOiAwLjc1LCBsaWdodG5lc3M6IDAuNCB9KX07XG4gKiBgXG4gKlxuICogLy8gQ1NTIGluIEpTIE91dHB1dFxuICpcbiAqIGVsZW1lbnQge1xuICogICBiYWNrZ3JvdW5kOiBcIiNiMzE5MWNcIjtcbiAqICAgYmFja2dyb3VuZDogXCIjYjMxOTFjXCI7XG4gKiB9XG4gKi9cbmZ1bmN0aW9uIGhzbCh2YWx1ZSwgc2F0dXJhdGlvbiwgbGlnaHRuZXNzKSB7XG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInICYmIHR5cGVvZiBzYXR1cmF0aW9uID09PSAnbnVtYmVyJyAmJiB0eXBlb2YgbGlnaHRuZXNzID09PSAnbnVtYmVyJykge1xuICAgIHJldHVybiAoMCwgX2hzbFRvSGV4LmRlZmF1bHQpKHZhbHVlLCBzYXR1cmF0aW9uLCBsaWdodG5lc3MpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgc2F0dXJhdGlvbiA9PT0gdW5kZWZpbmVkICYmIGxpZ2h0bmVzcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuICgwLCBfaHNsVG9IZXguZGVmYXVsdCkodmFsdWUuaHVlLCB2YWx1ZS5zYXR1cmF0aW9uLCB2YWx1ZS5saWdodG5lc3MpO1xuICB9XG5cbiAgdGhyb3cgbmV3IF9lcnJvcnMuZGVmYXVsdCgxKTtcbn1cblxudmFyIF9kZWZhdWx0ID0gaHNsO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIF9oc2xUb0hleCA9XG4vKiNfX1BVUkVfXyovXG5faW50ZXJvcFJlcXVpcmVEZWZhdWx0KFxuLyojX19QVVJFX18qL1xucmVxdWlyZShcIi4uL2ludGVybmFsSGVscGVycy9faHNsVG9IZXhcIikpO1xuXG52YXIgX2hzbFRvUmdiID1cbi8qI19fUFVSRV9fKi9cbl9pbnRlcm9wUmVxdWlyZURlZmF1bHQoXG4vKiNfX1BVUkVfXyovXG5yZXF1aXJlKFwiLi4vaW50ZXJuYWxIZWxwZXJzL19oc2xUb1JnYlwiKSk7XG5cbnZhciBfZXJyb3JzID1cbi8qI19fUFVSRV9fKi9cbl9pbnRlcm9wUmVxdWlyZURlZmF1bHQoXG4vKiNfX1BVUkVfXyovXG5yZXF1aXJlKFwiLi4vaW50ZXJuYWxIZWxwZXJzL19lcnJvcnNcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG4vKipcbiAqIFJldHVybnMgYSBzdHJpbmcgdmFsdWUgZm9yIHRoZSBjb2xvci4gVGhlIHJldHVybmVkIHJlc3VsdCBpcyB0aGUgc21hbGxlc3QgcG9zc2libGUgcmdiYSBvciBoZXggbm90YXRpb24uXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFN0eWxlcyBhcyBvYmplY3QgdXNhZ2VcbiAqIGNvbnN0IHN0eWxlcyA9IHtcbiAqICAgYmFja2dyb3VuZDogaHNsYSgzNTksIDAuNzUsIDAuNCwgMC43KSxcbiAqICAgYmFja2dyb3VuZDogaHNsYSh7IGh1ZTogMzYwLCBzYXR1cmF0aW9uOiAwLjc1LCBsaWdodG5lc3M6IDAuNCwgYWxwaGE6IDAsNyB9KSxcbiAqICAgYmFja2dyb3VuZDogaHNsYSgzNTksIDAuNzUsIDAuNCwgMSksXG4gKiB9XG4gKlxuICogLy8gc3R5bGVkLWNvbXBvbmVudHMgdXNhZ2VcbiAqIGNvbnN0IGRpdiA9IHN0eWxlZC5kaXZgXG4gKiAgIGJhY2tncm91bmQ6ICR7aHNsYSgzNTksIDAuNzUsIDAuNCwgMC43KX07XG4gKiAgIGJhY2tncm91bmQ6ICR7aHNsYSh7IGh1ZTogMzYwLCBzYXR1cmF0aW9uOiAwLjc1LCBsaWdodG5lc3M6IDAuNCwgYWxwaGE6IDAsNyB9KX07XG4gKiAgIGJhY2tncm91bmQ6ICR7aHNsYSgzNTksIDAuNzUsIDAuNCwgMSl9O1xuICogYFxuICpcbiAqIC8vIENTUyBpbiBKUyBPdXRwdXRcbiAqXG4gKiBlbGVtZW50IHtcbiAqICAgYmFja2dyb3VuZDogXCJyZ2JhKDE3OSwyNSwyOCwwLjcpXCI7XG4gKiAgIGJhY2tncm91bmQ6IFwicmdiYSgxNzksMjUsMjgsMC43KVwiO1xuICogICBiYWNrZ3JvdW5kOiBcIiNiMzE5MWNcIjtcbiAqIH1cbiAqL1xuZnVuY3Rpb24gaHNsYSh2YWx1ZSwgc2F0dXJhdGlvbiwgbGlnaHRuZXNzLCBhbHBoYSkge1xuICBpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJyAmJiB0eXBlb2Ygc2F0dXJhdGlvbiA9PT0gJ251bWJlcicgJiYgdHlwZW9mIGxpZ2h0bmVzcyA9PT0gJ251bWJlcicgJiYgdHlwZW9mIGFscGhhID09PSAnbnVtYmVyJykge1xuICAgIHJldHVybiBhbHBoYSA+PSAxID8gKDAsIF9oc2xUb0hleC5kZWZhdWx0KSh2YWx1ZSwgc2F0dXJhdGlvbiwgbGlnaHRuZXNzKSA6IFwicmdiYShcIiArICgwLCBfaHNsVG9SZ2IuZGVmYXVsdCkodmFsdWUsIHNhdHVyYXRpb24sIGxpZ2h0bmVzcykgKyBcIixcIiArIGFscGhhICsgXCIpXCI7XG4gIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiBzYXR1cmF0aW9uID09PSB1bmRlZmluZWQgJiYgbGlnaHRuZXNzID09PSB1bmRlZmluZWQgJiYgYWxwaGEgPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiB2YWx1ZS5hbHBoYSA+PSAxID8gKDAsIF9oc2xUb0hleC5kZWZhdWx0KSh2YWx1ZS5odWUsIHZhbHVlLnNhdHVyYXRpb24sIHZhbHVlLmxpZ2h0bmVzcykgOiBcInJnYmEoXCIgKyAoMCwgX2hzbFRvUmdiLmRlZmF1bHQpKHZhbHVlLmh1ZSwgdmFsdWUuc2F0dXJhdGlvbiwgdmFsdWUubGlnaHRuZXNzKSArIFwiLFwiICsgdmFsdWUuYWxwaGEgKyBcIilcIjtcbiAgfVxuXG4gIHRocm93IG5ldyBfZXJyb3JzLmRlZmF1bHQoMik7XG59XG5cbnZhciBfZGVmYXVsdCA9IGhzbGE7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX3JlZHVjZUhleFZhbHVlID1cbi8qI19fUFVSRV9fKi9cbl9pbnRlcm9wUmVxdWlyZURlZmF1bHQoXG4vKiNfX1BVUkVfXyovXG5yZXF1aXJlKFwiLi4vaW50ZXJuYWxIZWxwZXJzL19yZWR1Y2VIZXhWYWx1ZVwiKSk7XG5cbnZhciBfbnVtYmVyVG9IZXggPVxuLyojX19QVVJFX18qL1xuX2ludGVyb3BSZXF1aXJlRGVmYXVsdChcbi8qI19fUFVSRV9fKi9cbnJlcXVpcmUoXCIuLi9pbnRlcm5hbEhlbHBlcnMvX251bWJlclRvSGV4XCIpKTtcblxudmFyIF9lcnJvcnMgPVxuLyojX19QVVJFX18qL1xuX2ludGVyb3BSZXF1aXJlRGVmYXVsdChcbi8qI19fUFVSRV9fKi9cbnJlcXVpcmUoXCIuLi9pbnRlcm5hbEhlbHBlcnMvX2Vycm9yc1wiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbi8qKlxuICogUmV0dXJucyBhIHN0cmluZyB2YWx1ZSBmb3IgdGhlIGNvbG9yLiBUaGUgcmV0dXJuZWQgcmVzdWx0IGlzIHRoZSBzbWFsbGVzdCBwb3NzaWJsZSBoZXggbm90YXRpb24uXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFN0eWxlcyBhcyBvYmplY3QgdXNhZ2VcbiAqIGNvbnN0IHN0eWxlcyA9IHtcbiAqICAgYmFja2dyb3VuZDogcmdiKDI1NSwgMjA1LCAxMDApLFxuICogICBiYWNrZ3JvdW5kOiByZ2IoeyByZWQ6IDI1NSwgZ3JlZW46IDIwNSwgYmx1ZTogMTAwIH0pLFxuICogfVxuICpcbiAqIC8vIHN0eWxlZC1jb21wb25lbnRzIHVzYWdlXG4gKiBjb25zdCBkaXYgPSBzdHlsZWQuZGl2YFxuICogICBiYWNrZ3JvdW5kOiAke3JnYigyNTUsIDIwNSwgMTAwKX07XG4gKiAgIGJhY2tncm91bmQ6ICR7cmdiKHsgcmVkOiAyNTUsIGdyZWVuOiAyMDUsIGJsdWU6IDEwMCB9KX07XG4gKiBgXG4gKlxuICogLy8gQ1NTIGluIEpTIE91dHB1dFxuICpcbiAqIGVsZW1lbnQge1xuICogICBiYWNrZ3JvdW5kOiBcIiNmZmNkNjRcIjtcbiAqICAgYmFja2dyb3VuZDogXCIjZmZjZDY0XCI7XG4gKiB9XG4gKi9cbmZ1bmN0aW9uIHJnYih2YWx1ZSwgZ3JlZW4sIGJsdWUpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicgJiYgdHlwZW9mIGdyZWVuID09PSAnbnVtYmVyJyAmJiB0eXBlb2YgYmx1ZSA9PT0gJ251bWJlcicpIHtcbiAgICByZXR1cm4gKDAsIF9yZWR1Y2VIZXhWYWx1ZS5kZWZhdWx0KShcIiNcIiArICgwLCBfbnVtYmVyVG9IZXguZGVmYXVsdCkodmFsdWUpICsgKDAsIF9udW1iZXJUb0hleC5kZWZhdWx0KShncmVlbikgKyAoMCwgX251bWJlclRvSGV4LmRlZmF1bHQpKGJsdWUpKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIGdyZWVuID09PSB1bmRlZmluZWQgJiYgYmx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuICgwLCBfcmVkdWNlSGV4VmFsdWUuZGVmYXVsdCkoXCIjXCIgKyAoMCwgX251bWJlclRvSGV4LmRlZmF1bHQpKHZhbHVlLnJlZCkgKyAoMCwgX251bWJlclRvSGV4LmRlZmF1bHQpKHZhbHVlLmdyZWVuKSArICgwLCBfbnVtYmVyVG9IZXguZGVmYXVsdCkodmFsdWUuYmx1ZSkpO1xuICB9XG5cbiAgdGhyb3cgbmV3IF9lcnJvcnMuZGVmYXVsdCg2KTtcbn1cblxudmFyIF9kZWZhdWx0ID0gcmdiO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIF9wYXJzZVRvUmdiID1cbi8qI19fUFVSRV9fKi9cbl9pbnRlcm9wUmVxdWlyZURlZmF1bHQoXG4vKiNfX1BVUkVfXyovXG5yZXF1aXJlKFwiLi9wYXJzZVRvUmdiXCIpKTtcblxudmFyIF9yZ2IgPVxuLyojX19QVVJFX18qL1xuX2ludGVyb3BSZXF1aXJlRGVmYXVsdChcbi8qI19fUFVSRV9fKi9cbnJlcXVpcmUoXCIuL3JnYlwiKSk7XG5cbnZhciBfZXJyb3JzID1cbi8qI19fUFVSRV9fKi9cbl9pbnRlcm9wUmVxdWlyZURlZmF1bHQoXG4vKiNfX1BVUkVfXyovXG5yZXF1aXJlKFwiLi4vaW50ZXJuYWxIZWxwZXJzL19lcnJvcnNcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG4vKipcbiAqIFJldHVybnMgYSBzdHJpbmcgdmFsdWUgZm9yIHRoZSBjb2xvci4gVGhlIHJldHVybmVkIHJlc3VsdCBpcyB0aGUgc21hbGxlc3QgcG9zc2libGUgcmdiYSBvciBoZXggbm90YXRpb24uXG4gKlxuICogQ2FuIGFsc28gYmUgdXNlZCB0byBmYWRlIGEgY29sb3IgYnkgcGFzc2luZyBhIGhleCB2YWx1ZSBvciBuYW1lZCBDU1MgY29sb3IgYWxvbmcgd2l0aCBhbiBhbHBoYSB2YWx1ZS5cbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gU3R5bGVzIGFzIG9iamVjdCB1c2FnZVxuICogY29uc3Qgc3R5bGVzID0ge1xuICogICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjA1LCAxMDAsIDAuNyksXG4gKiAgIGJhY2tncm91bmQ6IHJnYmEoeyByZWQ6IDI1NSwgZ3JlZW46IDIwNSwgYmx1ZTogMTAwLCBhbHBoYTogMC43IH0pLFxuICogICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjA1LCAxMDAsIDEpLFxuICogICBiYWNrZ3JvdW5kOiByZ2JhKCcjZmZmZmZmJywgMC40KSxcbiAqICAgYmFja2dyb3VuZDogcmdiYSgnYmxhY2snLCAwLjcpLFxuICogfVxuICpcbiAqIC8vIHN0eWxlZC1jb21wb25lbnRzIHVzYWdlXG4gKiBjb25zdCBkaXYgPSBzdHlsZWQuZGl2YFxuICogICBiYWNrZ3JvdW5kOiAke3JnYmEoMjU1LCAyMDUsIDEwMCwgMC43KX07XG4gKiAgIGJhY2tncm91bmQ6ICR7cmdiYSh7IHJlZDogMjU1LCBncmVlbjogMjA1LCBibHVlOiAxMDAsIGFscGhhOiAwLjcgfSl9O1xuICogICBiYWNrZ3JvdW5kOiAke3JnYmEoMjU1LCAyMDUsIDEwMCwgMSl9O1xuICogICBiYWNrZ3JvdW5kOiAke3JnYmEoJyNmZmZmZmYnLCAwLjQpfTtcbiAqICAgYmFja2dyb3VuZDogJHtyZ2JhKCdibGFjaycsIDAuNyl9O1xuICogYFxuICpcbiAqIC8vIENTUyBpbiBKUyBPdXRwdXRcbiAqXG4gKiBlbGVtZW50IHtcbiAqICAgYmFja2dyb3VuZDogXCJyZ2JhKDI1NSwyMDUsMTAwLDAuNylcIjtcbiAqICAgYmFja2dyb3VuZDogXCJyZ2JhKDI1NSwyMDUsMTAwLDAuNylcIjtcbiAqICAgYmFja2dyb3VuZDogXCIjZmZjZDY0XCI7XG4gKiAgIGJhY2tncm91bmQ6IFwicmdiYSgyNTUsMjU1LDI1NSwwLjQpXCI7XG4gKiAgIGJhY2tncm91bmQ6IFwicmdiYSgwLDAsMCwwLjcpXCI7XG4gKiB9XG4gKi9cbmZ1bmN0aW9uIHJnYmEoZmlyc3RWYWx1ZSwgc2Vjb25kVmFsdWUsIHRoaXJkVmFsdWUsIGZvdXJ0aFZhbHVlKSB7XG4gIGlmICh0eXBlb2YgZmlyc3RWYWx1ZSA9PT0gJ3N0cmluZycgJiYgdHlwZW9mIHNlY29uZFZhbHVlID09PSAnbnVtYmVyJykge1xuICAgIHZhciByZ2JWYWx1ZSA9ICgwLCBfcGFyc2VUb1JnYi5kZWZhdWx0KShmaXJzdFZhbHVlKTtcbiAgICByZXR1cm4gXCJyZ2JhKFwiICsgcmdiVmFsdWUucmVkICsgXCIsXCIgKyByZ2JWYWx1ZS5ncmVlbiArIFwiLFwiICsgcmdiVmFsdWUuYmx1ZSArIFwiLFwiICsgc2Vjb25kVmFsdWUgKyBcIilcIjtcbiAgfSBlbHNlIGlmICh0eXBlb2YgZmlyc3RWYWx1ZSA9PT0gJ251bWJlcicgJiYgdHlwZW9mIHNlY29uZFZhbHVlID09PSAnbnVtYmVyJyAmJiB0eXBlb2YgdGhpcmRWYWx1ZSA9PT0gJ251bWJlcicgJiYgdHlwZW9mIGZvdXJ0aFZhbHVlID09PSAnbnVtYmVyJykge1xuICAgIHJldHVybiBmb3VydGhWYWx1ZSA+PSAxID8gKDAsIF9yZ2IuZGVmYXVsdCkoZmlyc3RWYWx1ZSwgc2Vjb25kVmFsdWUsIHRoaXJkVmFsdWUpIDogXCJyZ2JhKFwiICsgZmlyc3RWYWx1ZSArIFwiLFwiICsgc2Vjb25kVmFsdWUgKyBcIixcIiArIHRoaXJkVmFsdWUgKyBcIixcIiArIGZvdXJ0aFZhbHVlICsgXCIpXCI7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGZpcnN0VmFsdWUgPT09ICdvYmplY3QnICYmIHNlY29uZFZhbHVlID09PSB1bmRlZmluZWQgJiYgdGhpcmRWYWx1ZSA9PT0gdW5kZWZpbmVkICYmIGZvdXJ0aFZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gZmlyc3RWYWx1ZS5hbHBoYSA+PSAxID8gKDAsIF9yZ2IuZGVmYXVsdCkoZmlyc3RWYWx1ZS5yZWQsIGZpcnN0VmFsdWUuZ3JlZW4sIGZpcnN0VmFsdWUuYmx1ZSkgOiBcInJnYmEoXCIgKyBmaXJzdFZhbHVlLnJlZCArIFwiLFwiICsgZmlyc3RWYWx1ZS5ncmVlbiArIFwiLFwiICsgZmlyc3RWYWx1ZS5ibHVlICsgXCIsXCIgKyBmaXJzdFZhbHVlLmFscGhhICsgXCIpXCI7XG4gIH1cblxuICB0aHJvdyBuZXcgX2Vycm9ycy5kZWZhdWx0KDcpO1xufVxuXG52YXIgX2RlZmF1bHQgPSByZ2JhO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIF9oc2wgPVxuLyojX19QVVJFX18qL1xuX2ludGVyb3BSZXF1aXJlRGVmYXVsdChcbi8qI19fUFVSRV9fKi9cbnJlcXVpcmUoXCIuL2hzbFwiKSk7XG5cbnZhciBfaHNsYSA9XG4vKiNfX1BVUkVfXyovXG5faW50ZXJvcFJlcXVpcmVEZWZhdWx0KFxuLyojX19QVVJFX18qL1xucmVxdWlyZShcIi4vaHNsYVwiKSk7XG5cbnZhciBfcmdiID1cbi8qI19fUFVSRV9fKi9cbl9pbnRlcm9wUmVxdWlyZURlZmF1bHQoXG4vKiNfX1BVUkVfXyovXG5yZXF1aXJlKFwiLi9yZ2JcIikpO1xuXG52YXIgX3JnYmEgPVxuLyojX19QVVJFX18qL1xuX2ludGVyb3BSZXF1aXJlRGVmYXVsdChcbi8qI19fUFVSRV9fKi9cbnJlcXVpcmUoXCIuL3JnYmFcIikpO1xuXG52YXIgX2Vycm9ycyA9XG4vKiNfX1BVUkVfXyovXG5faW50ZXJvcFJlcXVpcmVEZWZhdWx0KFxuLyojX19QVVJFX18qL1xucmVxdWlyZShcIi4uL2ludGVybmFsSGVscGVycy9fZXJyb3JzXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIGlzUmdiID0gZnVuY3Rpb24gaXNSZ2IoY29sb3IpIHtcbiAgcmV0dXJuIHR5cGVvZiBjb2xvci5yZWQgPT09ICdudW1iZXInICYmIHR5cGVvZiBjb2xvci5ncmVlbiA9PT0gJ251bWJlcicgJiYgdHlwZW9mIGNvbG9yLmJsdWUgPT09ICdudW1iZXInICYmICh0eXBlb2YgY29sb3IuYWxwaGEgIT09ICdudW1iZXInIHx8IHR5cGVvZiBjb2xvci5hbHBoYSA9PT0gJ3VuZGVmaW5lZCcpO1xufTtcblxudmFyIGlzUmdiYSA9IGZ1bmN0aW9uIGlzUmdiYShjb2xvcikge1xuICByZXR1cm4gdHlwZW9mIGNvbG9yLnJlZCA9PT0gJ251bWJlcicgJiYgdHlwZW9mIGNvbG9yLmdyZWVuID09PSAnbnVtYmVyJyAmJiB0eXBlb2YgY29sb3IuYmx1ZSA9PT0gJ251bWJlcicgJiYgdHlwZW9mIGNvbG9yLmFscGhhID09PSAnbnVtYmVyJztcbn07XG5cbnZhciBpc0hzbCA9IGZ1bmN0aW9uIGlzSHNsKGNvbG9yKSB7XG4gIHJldHVybiB0eXBlb2YgY29sb3IuaHVlID09PSAnbnVtYmVyJyAmJiB0eXBlb2YgY29sb3Iuc2F0dXJhdGlvbiA9PT0gJ251bWJlcicgJiYgdHlwZW9mIGNvbG9yLmxpZ2h0bmVzcyA9PT0gJ251bWJlcicgJiYgKHR5cGVvZiBjb2xvci5hbHBoYSAhPT0gJ251bWJlcicgfHwgdHlwZW9mIGNvbG9yLmFscGhhID09PSAndW5kZWZpbmVkJyk7XG59O1xuXG52YXIgaXNIc2xhID0gZnVuY3Rpb24gaXNIc2xhKGNvbG9yKSB7XG4gIHJldHVybiB0eXBlb2YgY29sb3IuaHVlID09PSAnbnVtYmVyJyAmJiB0eXBlb2YgY29sb3Iuc2F0dXJhdGlvbiA9PT0gJ251bWJlcicgJiYgdHlwZW9mIGNvbG9yLmxpZ2h0bmVzcyA9PT0gJ251bWJlcicgJiYgdHlwZW9mIGNvbG9yLmFscGhhID09PSAnbnVtYmVyJztcbn07XG4vKipcbiAqIENvbnZlcnRzIGEgUmdiQ29sb3IsIFJnYmFDb2xvciwgSHNsQ29sb3Igb3IgSHNsYUNvbG9yIG9iamVjdCB0byBhIGNvbG9yIHN0cmluZy5cbiAqIFRoaXMgdXRpbCBpcyB1c2VmdWwgaW4gY2FzZSB5b3Ugb25seSBrbm93IG9uIHJ1bnRpbWUgd2hpY2ggY29sb3Igb2JqZWN0IGlzXG4gKiB1c2VkLiBPdGhlcndpc2Ugd2UgcmVjb21tZW5kIHRvIHJlbHkgb24gYHJnYmAsIGByZ2JhYCwgYGhzbGAgb3IgYGhzbGFgLlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBTdHlsZXMgYXMgb2JqZWN0IHVzYWdlXG4gKiBjb25zdCBzdHlsZXMgPSB7XG4gKiAgIGJhY2tncm91bmQ6IHRvQ29sb3JTdHJpbmcoeyByZWQ6IDI1NSwgZ3JlZW46IDIwNSwgYmx1ZTogMTAwIH0pLFxuICogICBiYWNrZ3JvdW5kOiB0b0NvbG9yU3RyaW5nKHsgcmVkOiAyNTUsIGdyZWVuOiAyMDUsIGJsdWU6IDEwMCwgYWxwaGE6IDAuNzIgfSksXG4gKiAgIGJhY2tncm91bmQ6IHRvQ29sb3JTdHJpbmcoeyBodWU6IDI0MCwgc2F0dXJhdGlvbjogMSwgbGlnaHRuZXNzOiAwLjUgfSksXG4gKiAgIGJhY2tncm91bmQ6IHRvQ29sb3JTdHJpbmcoeyBodWU6IDM2MCwgc2F0dXJhdGlvbjogMC43NSwgbGlnaHRuZXNzOiAwLjQsIGFscGhhOiAwLjcyIH0pLFxuICogfVxuICpcbiAqIC8vIHN0eWxlZC1jb21wb25lbnRzIHVzYWdlXG4gKiBjb25zdCBkaXYgPSBzdHlsZWQuZGl2YFxuICogICBiYWNrZ3JvdW5kOiAke3RvQ29sb3JTdHJpbmcoeyByZWQ6IDI1NSwgZ3JlZW46IDIwNSwgYmx1ZTogMTAwIH0pfTtcbiAqICAgYmFja2dyb3VuZDogJHt0b0NvbG9yU3RyaW5nKHsgcmVkOiAyNTUsIGdyZWVuOiAyMDUsIGJsdWU6IDEwMCwgYWxwaGE6IDAuNzIgfSl9O1xuICogICBiYWNrZ3JvdW5kOiAke3RvQ29sb3JTdHJpbmcoeyBodWU6IDI0MCwgc2F0dXJhdGlvbjogMSwgbGlnaHRuZXNzOiAwLjUgfSl9O1xuICogICBiYWNrZ3JvdW5kOiAke3RvQ29sb3JTdHJpbmcoeyBodWU6IDM2MCwgc2F0dXJhdGlvbjogMC43NSwgbGlnaHRuZXNzOiAwLjQsIGFscGhhOiAwLjcyIH0pfTtcbiAqIGBcbiAqXG4gKiAvLyBDU1MgaW4gSlMgT3V0cHV0XG4gKiBlbGVtZW50IHtcbiAqICAgYmFja2dyb3VuZDogXCIjZmZjZDY0XCI7XG4gKiAgIGJhY2tncm91bmQ6IFwicmdiYSgyNTUsMjA1LDEwMCwwLjcyKVwiO1xuICogICBiYWNrZ3JvdW5kOiBcIiMwMGZcIjtcbiAqICAgYmFja2dyb3VuZDogXCJyZ2JhKDE3OSwyNSwyNSwwLjcyKVwiO1xuICogfVxuICovXG5cblxuZnVuY3Rpb24gdG9Db2xvclN0cmluZyhjb2xvcikge1xuICBpZiAodHlwZW9mIGNvbG9yICE9PSAnb2JqZWN0JykgdGhyb3cgbmV3IF9lcnJvcnMuZGVmYXVsdCg4KTtcbiAgaWYgKGlzUmdiYShjb2xvcikpIHJldHVybiAoMCwgX3JnYmEuZGVmYXVsdCkoY29sb3IpO1xuICBpZiAoaXNSZ2IoY29sb3IpKSByZXR1cm4gKDAsIF9yZ2IuZGVmYXVsdCkoY29sb3IpO1xuICBpZiAoaXNIc2xhKGNvbG9yKSkgcmV0dXJuICgwLCBfaHNsYS5kZWZhdWx0KShjb2xvcik7XG4gIGlmIChpc0hzbChjb2xvcikpIHJldHVybiAoMCwgX2hzbC5kZWZhdWx0KShjb2xvcik7XG4gIHRocm93IG5ldyBfZXJyb3JzLmRlZmF1bHQoOCk7XG59XG5cbnZhciBfZGVmYXVsdCA9IHRvQ29sb3JTdHJpbmc7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX2N1cnJ5ID1cbi8qI19fUFVSRV9fKi9cbl9pbnRlcm9wUmVxdWlyZURlZmF1bHQoXG4vKiNfX1BVUkVfXyovXG5yZXF1aXJlKFwiLi4vaW50ZXJuYWxIZWxwZXJzL19jdXJyeVwiKSk7XG5cbnZhciBfZ3VhcmQgPVxuLyojX19QVVJFX18qL1xuX2ludGVyb3BSZXF1aXJlRGVmYXVsdChcbi8qI19fUFVSRV9fKi9cbnJlcXVpcmUoXCIuLi9pbnRlcm5hbEhlbHBlcnMvX2d1YXJkXCIpKTtcblxudmFyIF9wYXJzZVRvSHNsID1cbi8qI19fUFVSRV9fKi9cbl9pbnRlcm9wUmVxdWlyZURlZmF1bHQoXG4vKiNfX1BVUkVfXyovXG5yZXF1aXJlKFwiLi9wYXJzZVRvSHNsXCIpKTtcblxudmFyIF90b0NvbG9yU3RyaW5nID1cbi8qI19fUFVSRV9fKi9cbl9pbnRlcm9wUmVxdWlyZURlZmF1bHQoXG4vKiNfX1BVUkVfXyovXG5yZXF1aXJlKFwiLi90b0NvbG9yU3RyaW5nXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2V4dGVuZHMoKSB7IF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTsgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH1cblxuLyoqXG4gKiBSZXR1cm5zIGEgc3RyaW5nIHZhbHVlIGZvciB0aGUgZGFya2VuZWQgY29sb3IuXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFN0eWxlcyBhcyBvYmplY3QgdXNhZ2VcbiAqIGNvbnN0IHN0eWxlcyA9IHtcbiAqICAgYmFja2dyb3VuZDogZGFya2VuKDAuMiwgJyNGRkNENjQnKSxcbiAqICAgYmFja2dyb3VuZDogZGFya2VuKCcwLjInLCAncmdiYSgyNTUsMjA1LDEwMCwwLjcpJyksXG4gKiB9XG4gKlxuICogLy8gc3R5bGVkLWNvbXBvbmVudHMgdXNhZ2VcbiAqIGNvbnN0IGRpdiA9IHN0eWxlZC5kaXZgXG4gKiAgIGJhY2tncm91bmQ6ICR7ZGFya2VuKDAuMiwgJyNGRkNENjQnKX07XG4gKiAgIGJhY2tncm91bmQ6ICR7ZGFya2VuKCcwLjInLCAncmdiYSgyNTUsMjA1LDEwMCwwLjcpJyl9O1xuICogYFxuICpcbiAqIC8vIENTUyBpbiBKUyBPdXRwdXRcbiAqXG4gKiBlbGVtZW50IHtcbiAqICAgYmFja2dyb3VuZDogXCIjZmZiZDMxXCI7XG4gKiAgIGJhY2tncm91bmQ6IFwicmdiYSgyNTUsMTg5LDQ5LDAuNylcIjtcbiAqIH1cbiAqL1xuZnVuY3Rpb24gZGFya2VuKGFtb3VudCwgY29sb3IpIHtcbiAgaWYgKGNvbG9yID09PSAndHJhbnNwYXJlbnQnKSByZXR1cm4gY29sb3I7XG4gIHZhciBoc2xDb2xvciA9ICgwLCBfcGFyc2VUb0hzbC5kZWZhdWx0KShjb2xvcik7XG4gIHJldHVybiAoMCwgX3RvQ29sb3JTdHJpbmcuZGVmYXVsdCkoX2V4dGVuZHMoe30sIGhzbENvbG9yLCB7XG4gICAgbGlnaHRuZXNzOiAoMCwgX2d1YXJkLmRlZmF1bHQpKDAsIDEsIGhzbENvbG9yLmxpZ2h0bmVzcyAtIHBhcnNlRmxvYXQoYW1vdW50KSlcbiAgfSkpO1xufSAvLyBwcmV0dGllci1pZ25vcmVcblxuXG52YXIgY3VycmllZERhcmtlbiA9XG4vKiNfX1BVUkVfXyovXG4oMCwgX2N1cnJ5LmRlZmF1bHRcbi8qIDo6PG51bWJlciB8IHN0cmluZywgc3RyaW5nLCBzdHJpbmc+ICovXG4pKGRhcmtlbik7XG52YXIgX2RlZmF1bHQgPSBjdXJyaWVkRGFya2VuO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIF9wYXJzZVRvUmdiID1cbi8qI19fUFVSRV9fKi9cbl9pbnRlcm9wUmVxdWlyZURlZmF1bHQoXG4vKiNfX1BVUkVfXyovXG5yZXF1aXJlKFwiLi9wYXJzZVRvUmdiXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuLyoqXG4gKiBSZXR1cm5zIGEgbnVtYmVyIChmbG9hdCkgcmVwcmVzZW50aW5nIHRoZSBsdW1pbmFuY2Ugb2YgYSBjb2xvci5cbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gU3R5bGVzIGFzIG9iamVjdCB1c2FnZVxuICogY29uc3Qgc3R5bGVzID0ge1xuICogICBiYWNrZ3JvdW5kOiBnZXRMdW1pbmFuY2UoJyNDQ0NENjQnKSA+PSBnZXRMdW1pbmFuY2UoJyMwMDAwZmYnKSA/ICcjQ0NDRDY0JyA6ICcjMDAwMGZmJyxcbiAqICAgYmFja2dyb3VuZDogZ2V0THVtaW5hbmNlKCdyZ2JhKDU4LCAxMzMsIDI1NSwgMSknKSA+PSBnZXRMdW1pbmFuY2UoJ3JnYmEoMjU1LCA1NywgMTQ5LCAxKScpID9cbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAncmdiYSg1OCwgMTMzLCAyNTUsIDEpJyA6XG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3JnYmEoMjU1LCA1NywgMTQ5LCAxKScsXG4gKiB9XG4gKlxuICogLy8gc3R5bGVkLWNvbXBvbmVudHMgdXNhZ2VcbiAqIGNvbnN0IGRpdiA9IHN0eWxlZC5kaXZgXG4gKiAgIGJhY2tncm91bmQ6ICR7Z2V0THVtaW5hbmNlKCcjQ0NDRDY0JykgPj0gZ2V0THVtaW5hbmNlKCcjMDAwMGZmJykgPyAnI0NDQ0Q2NCcgOiAnIzAwMDBmZid9O1xuICogICBiYWNrZ3JvdW5kOiAke2dldEx1bWluYW5jZSgncmdiYSg1OCwgMTMzLCAyNTUsIDEpJykgPj0gZ2V0THVtaW5hbmNlKCdyZ2JhKDI1NSwgNTcsIDE0OSwgMSknKSA/XG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3JnYmEoNTgsIDEzMywgMjU1LCAxKScgOlxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICdyZ2JhKDI1NSwgNTcsIDE0OSwgMSknfTtcbiAqXG4gKiAvLyBDU1MgaW4gSlMgT3V0cHV0XG4gKlxuICogZGl2IHtcbiAqICAgYmFja2dyb3VuZDogXCIjQ0NDRDY0XCI7XG4gKiAgIGJhY2tncm91bmQ6IFwicmdiYSg1OCwgMTMzLCAyNTUsIDEpXCI7XG4gKiB9XG4gKi9cbmZ1bmN0aW9uIGdldEx1bWluYW5jZShjb2xvcikge1xuICBpZiAoY29sb3IgPT09ICd0cmFuc3BhcmVudCcpIHJldHVybiAwO1xuICB2YXIgcmdiQ29sb3IgPSAoMCwgX3BhcnNlVG9SZ2IuZGVmYXVsdCkoY29sb3IpO1xuXG4gIHZhciBfT2JqZWN0JGtleXMkbWFwID0gT2JqZWN0LmtleXMocmdiQ29sb3IpLm1hcChmdW5jdGlvbiAoa2V5KSB7XG4gICAgdmFyIGNoYW5uZWwgPSByZ2JDb2xvcltrZXldIC8gMjU1O1xuICAgIHJldHVybiBjaGFubmVsIDw9IDAuMDM5MjggPyBjaGFubmVsIC8gMTIuOTIgOiBNYXRoLnBvdygoY2hhbm5lbCArIDAuMDU1KSAvIDEuMDU1LCAyLjQpO1xuICB9KSxcbiAgICAgIHIgPSBfT2JqZWN0JGtleXMkbWFwWzBdLFxuICAgICAgZyA9IF9PYmplY3Qka2V5cyRtYXBbMV0sXG4gICAgICBiID0gX09iamVjdCRrZXlzJG1hcFsyXTtcblxuICByZXR1cm4gcGFyc2VGbG9hdCgoMC4yMTI2ICogciArIDAuNzE1MiAqIGcgKyAwLjA3MjIgKiBiKS50b0ZpeGVkKDMpKTtcbn1cblxudmFyIF9kZWZhdWx0ID0gZ2V0THVtaW5hbmNlO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDsiLCJpbXBvcnQgZ2V0THVtaW5hbmNlIGZyb20gJ3BvbGlzaGVkL2xpYi9jb2xvci9nZXRMdW1pbmFuY2UnO1xuaW1wb3J0IHsgVGhlbWVUeXBlIH0gZnJvbSAnLi4vdHlwZXMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmaW5kQ29sb3JJbnZlcnQoeyBibGFjaywgd2hpdGUgfTogVGhlbWVUeXBlLCBjb2xvcjogc3RyaW5nKSB7XG4gIGlmICghY29sb3IgfHwgZ2V0THVtaW5hbmNlKGNvbG9yKSA+IDAuNTUpIHtcbiAgICByZXR1cm4gYmxhY2s7XG4gIH1cbiAgcmV0dXJuIHdoaXRlO1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBfY3VycnkgPVxuLyojX19QVVJFX18qL1xuX2ludGVyb3BSZXF1aXJlRGVmYXVsdChcbi8qI19fUFVSRV9fKi9cbnJlcXVpcmUoXCIuLi9pbnRlcm5hbEhlbHBlcnMvX2N1cnJ5XCIpKTtcblxudmFyIF9ndWFyZCA9XG4vKiNfX1BVUkVfXyovXG5faW50ZXJvcFJlcXVpcmVEZWZhdWx0KFxuLyojX19QVVJFX18qL1xucmVxdWlyZShcIi4uL2ludGVybmFsSGVscGVycy9fZ3VhcmRcIikpO1xuXG52YXIgX3JnYmEgPVxuLyojX19QVVJFX18qL1xuX2ludGVyb3BSZXF1aXJlRGVmYXVsdChcbi8qI19fUFVSRV9fKi9cbnJlcXVpcmUoXCIuL3JnYmFcIikpO1xuXG52YXIgX3BhcnNlVG9SZ2IgPVxuLyojX19QVVJFX18qL1xuX2ludGVyb3BSZXF1aXJlRGVmYXVsdChcbi8qI19fUFVSRV9fKi9cbnJlcXVpcmUoXCIuL3BhcnNlVG9SZ2JcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfZXh0ZW5kcygpIHsgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9OyByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfVxuXG4vKipcbiAqIERlY3JlYXNlcyB0aGUgb3BhY2l0eSBvZiBhIGNvbG9yLiBJdHMgcmFuZ2UgZm9yIHRoZSBhbW91bnQgaXMgYmV0d2VlbiAwIHRvIDEuXG4gKlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBTdHlsZXMgYXMgb2JqZWN0IHVzYWdlXG4gKiBjb25zdCBzdHlsZXMgPSB7XG4gKiAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50aXplKDAuMSwgJyNmZmYnKTtcbiAqICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnRpemUoMC4yLCAnaHNsKDAsIDAlLCAxMDAlKScpLFxuICogICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudGl6ZSgnMC41JywgJ3JnYmEoMjU1LCAwLCAwLCAwLjgpJyksXG4gKiB9XG4gKlxuICogLy8gc3R5bGVkLWNvbXBvbmVudHMgdXNhZ2VcbiAqIGNvbnN0IGRpdiA9IHN0eWxlZC5kaXZgXG4gKiAgIGJhY2tncm91bmQ6ICR7dHJhbnNwYXJlbnRpemUoMC4xLCAnI2ZmZicpfTtcbiAqICAgYmFja2dyb3VuZDogJHt0cmFuc3BhcmVudGl6ZSgwLjIsICdoc2woMCwgMCUsIDEwMCUpJyl9LFxuICogICBiYWNrZ3JvdW5kOiAke3RyYW5zcGFyZW50aXplKCcwLjUnLCAncmdiYSgyNTUsIDAsIDAsIDAuOCknKX0sXG4gKiBgXG4gKlxuICogLy8gQ1NTIGluIEpTIE91dHB1dFxuICpcbiAqIGVsZW1lbnQge1xuICogICBiYWNrZ3JvdW5kOiBcInJnYmEoMjU1LDI1NSwyNTUsMC45KVwiO1xuICogICBiYWNrZ3JvdW5kOiBcInJnYmEoMjU1LDI1NSwyNTUsMC44KVwiO1xuICogICBiYWNrZ3JvdW5kOiBcInJnYmEoMjU1LDAsMCwwLjMpXCI7XG4gKiB9XG4gKi9cbmZ1bmN0aW9uIHRyYW5zcGFyZW50aXplKGFtb3VudCwgY29sb3IpIHtcbiAgaWYgKGNvbG9yID09PSAndHJhbnNwYXJlbnQnKSByZXR1cm4gY29sb3I7XG4gIHZhciBwYXJzZWRDb2xvciA9ICgwLCBfcGFyc2VUb1JnYi5kZWZhdWx0KShjb2xvcik7XG4gIHZhciBhbHBoYSA9IHR5cGVvZiBwYXJzZWRDb2xvci5hbHBoYSA9PT0gJ251bWJlcicgPyBwYXJzZWRDb2xvci5hbHBoYSA6IDE7XG5cbiAgdmFyIGNvbG9yV2l0aEFscGhhID0gX2V4dGVuZHMoe30sIHBhcnNlZENvbG9yLCB7XG4gICAgYWxwaGE6ICgwLCBfZ3VhcmQuZGVmYXVsdCkoMCwgMSwgKGFscGhhICogMTAwIC0gcGFyc2VGbG9hdChhbW91bnQpICogMTAwKSAvIDEwMClcbiAgfSk7XG5cbiAgcmV0dXJuICgwLCBfcmdiYS5kZWZhdWx0KShjb2xvcldpdGhBbHBoYSk7XG59IC8vIHByZXR0aWVyLWlnbm9yZVxuXG5cbnZhciBjdXJyaWVkVHJhbnNwYXJlbnRpemUgPVxuLyojX19QVVJFX18qL1xuKDAsIF9jdXJyeS5kZWZhdWx0XG4vKiA6OjxudW1iZXIgfCBzdHJpbmcsIHN0cmluZywgc3RyaW5nPiAqL1xuKSh0cmFuc3BhcmVudGl6ZSk7XG52YXIgX2RlZmF1bHQgPSBjdXJyaWVkVHJhbnNwYXJlbnRpemU7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0OyIsImltcG9ydCB7IGNzcyB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB0cmFuc3BhcmVudGl6ZSBmcm9tICdwb2xpc2hlZC9saWIvY29sb3IvdHJhbnNwYXJlbnRpemUnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBib3hTaGFkb3coc2l6ZTogc3RyaW5nLCBjb2xvcjogc3RyaW5nLCBhbW91bnQ/OiBudW1iZXIpIHtcbiAgY29uc3Qgc2hhZG93Q29sb3IgPSBhbW91bnQgPyB0cmFuc3BhcmVudGl6ZShhbW91bnQsIGNvbG9yKSA6IGNvbG9yO1xuICByZXR1cm4gY3NzYGJveC1zaGFkb3c6IDAgMCAwICR7c2l6ZX0gJHtzaGFkb3dDb2xvcn07YDtcbn1cbiIsImltcG9ydCB7IFNpemVUeXBlIH0gZnJvbSAnLi4vdHlwZXMnO1xuXG50eXBlIFNpemVQcm9wc05hbWVUeXBlID0gJ2ZvbnQtc2l6ZScgfCAnaGVpZ2h0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2V0U2l6ZShuYW1lOiBTaXplUHJvcHNOYW1lVHlwZSwgc2l6ZT86IFNpemVUeXBlKSB7XG4gIHN3aXRjaCAoc2l6ZSkge1xuICAgIGNhc2UgJ3NtYWxsJzpcbiAgICAgIHJldHVybiBgJHtuYW1lfTogMC43NXJlbTtgO1xuICAgIGNhc2UgJ21lZGl1bSc6XG4gICAgICByZXR1cm4gYCR7bmFtZX06IDEuMjVyZW07YDtcbiAgICBjYXNlICdsYXJnZSc6XG4gICAgICByZXR1cm4gYCR7bmFtZX06IDEuNXJlbTtgO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gYCR7bmFtZX06IDFyZW07YDtcbiAgfVxufVxuIiwiaW1wb3J0IHsgY3NzIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHRyYW5zcGFyZW50aXplIGZyb20gJ3BvbGlzaGVkL2xpYi9jb2xvci90cmFuc3BhcmVudGl6ZSc7XG5pbXBvcnQgeyBUaGVtZVR5cGUsIENTU1R5cGUgfSBmcm9tICcuLi90eXBlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRpc2FibGVkQ29sb3IodGhlbWU6IFRoZW1lVHlwZSk6IENTU1R5cGUge1xuICBjb25zdCB0ZXh0Q29sb3IgPSB0cmFuc3BhcmVudGl6ZSgwLjE1LCB0aGVtZS50ZXh0RGFyayk7XG4gIGNvbnN0IGJhY2tDb2xvciA9IHRyYW5zcGFyZW50aXplKDAuNTUsIHRoZW1lLmJvcmRlcik7XG4gIHJldHVybiBjc3NgXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICBjb2xvcjogJHt0ZXh0Q29sb3J9O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR7YmFja0NvbG9yfTtcbiAgYDtcbn1cbiIsImltcG9ydCBzdHlsZWQsIHsgY3NzIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgSFRNTEF0dHJpYnV0ZXMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgZGFya2VuIGZyb20gJ3BvbGlzaGVkL2xpYi9jb2xvci9kYXJrZW4nO1xuaW1wb3J0IGZpbmRDb2xvckludmVydCBmcm9tICcuLi8uLi91dGlscy9maW5kQ29sb3JJbnZlcnQnO1xuaW1wb3J0IGJveFNoYWRvdyBmcm9tICcuLi8uLi91dGlscy9ib3hTaGFkb3cnO1xuaW1wb3J0IHNldFNpemUgZnJvbSAnLi4vLi4vdXRpbHMvc2V0U2l6ZSc7XG5pbXBvcnQgZGlzYWJsZWRDb2xvciBmcm9tICcuLi8uLi91dGlscy9kaXNhYmxlZENvbG9yJztcbmltcG9ydCB7IENvbG9yVHlwZSwgVGhlbWVUeXBlLCBTaXplVHlwZSB9IGZyb20gJy4uLy4uL3R5cGVzJztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgdGhlbWU6IFRoZW1lVHlwZTtcbiAgY29sb3I/OiBDb2xvclR5cGU7XG4gIG91dGxpbmU/OiBib29sZWFuO1xuICBkaXNhYmxlZD86IGJvb2xlYW47XG59XG5cbmZ1bmN0aW9uIHNldENvbG9yKHsgdGhlbWUsIGNvbG9yLCBvdXRsaW5lLCBkaXNhYmxlZCB9OiBQcm9wcykge1xuICBpZiAoZGlzYWJsZWQpIHtcbiAgICByZXR1cm4gZGlzYWJsZWRDb2xvcih0aGVtZSk7XG4gIH1cbiAgaWYgKCFjb2xvcikge1xuICAgIHJldHVybiBjc3NgXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lLndoaXRlfTtcbiAgICAgIGJvcmRlci1jb2xvcjogJHt0aGVtZS5ib3JkZXJ9O1xuICAgICAgY29sb3I6ICR7dGhlbWUudGV4dH07XG5cbiAgICAgICY6aG92ZXIge1xuICAgICAgICBib3JkZXItY29sb3I6ICR7dGhlbWUuYm9yZGVySG92ZXJ9O1xuICAgICAgfVxuXG4gICAgICAmOmFjdGl2ZSB7XG4gICAgICAgIGJvcmRlci1jb2xvcjogJHt0aGVtZS5ib3JkZXJBY3RpdmV9O1xuICAgICAgfVxuICAgIGA7XG4gIH1cbiAgaWYgKGNvbG9yID09PSAndGV4dCcpIHtcbiAgICByZXR1cm4gY3NzYFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgY29sb3I6ICR7dGhlbWUudGV4dH07XG5cbiAgICAgICY6aG92ZXJ7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgfVxuICAgIGA7XG4gIH1cblxuICBjb25zdCB0YXJnZXQgPSB0aGVtZVtjb2xvcl0gfHwgY29sb3I7XG4gIGNvbnN0IGludmVydENvbG9yID0gZmluZENvbG9ySW52ZXJ0KHRoZW1lLCB0YXJnZXQpO1xuICBpZiAob3V0bGluZSkge1xuICAgIHJldHVybiBjc3NgXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgIGJvcmRlci1jb2xvcjogJHt0YXJnZXR9O1xuICAgICAgY29sb3I6ICR7dGFyZ2V0fTtcblxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7dGFyZ2V0fTtcbiAgICAgICAgY29sb3I6ICR7aW52ZXJ0Q29sb3J9O1xuICAgICAgfVxuXG4gICAgICAmOmZvY3VzIHtcbiAgICAgICAgJHtib3hTaGFkb3coJzAuMnJlbScsIHRhcmdldCwgMC4yKX1cbiAgICAgIH1cbiAgICBgO1xuICB9XG5cbiAgcmV0dXJuIGNzc2BcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RhcmdldH07XG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBjb2xvcjogJHtpbnZlcnRDb2xvcn07XG4gICAgYm94LXNoYWRvdzogbm9uZTtcblxuICAgICY6aG92ZXIge1xuICAgICAgY29sb3I6ICR7aW52ZXJ0Q29sb3J9O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtkYXJrZW4oMC4wMjUsIHRhcmdldCl9O1xuICAgIH1cblxuICAgICY6YWN0aXZlIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7ZGFya2VuKDAuMDUsIHRhcmdldCl9O1xuICAgIH1cblxuICAgICY6Zm9jdXMge1xuICAgICAgJHtib3hTaGFkb3coJzAuMnJlbScsIHRhcmdldCwgMC4yKX1cbiAgICB9XG4gIGA7XG59XG5cbmludGVyZmFjZSBCdXR0b25Qcm9wcyBleHRlbmRzIEhUTUxBdHRyaWJ1dGVzPEhUTUxCdXR0b25FbGVtZW50PiB7XG4gIC8qKiDjg5zjgr/jg7Pjga7oibIgKi9cbiAgY29sb3I/OiBDb2xvclR5cGU7XG4gIC8qKiDjg5zjgr/jg7Pjga7jgrXjgqTjgrogKi9cbiAgc2l6ZT86IFNpemVUeXBlO1xuICAvKiog6IOM5pmv44GM6YCP5piO44Gq44Oc44K/44Oz44Gn44GZ44KLICovXG4gIG91dGxpbmU/OiBib29sZWFuO1xuICAvKiog5YWo5L2T5bmF44Gu44Oc44K/44Oz44Gn6Kit5a6aICovXG4gIGZ1bGw/OiBib29sZWFuO1xufVxuXG5jb25zdCBCdXR0b24gPSBzdHlsZWQuYnV0dG9uPEJ1dHRvblByb3BzPmBcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdXRsaW5lOiBub25lO1xuICBhcHBlYXJhbmNlOiBub25lO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIHBhZGRpbmc6IDAuMzc1ZW0gMC43NWVtO1xuICBsaW5lLWhlaWdodDogMS41O1xuXG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IGJhY2tncm91bmQtY29sb3IsIGNvbG9yLCBib3gtc2hhZG93O1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAxNTBtcztcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xuXG4gICR7c2V0Q29sb3J9XG4gICR7KHsgc2l6ZSB9KSA9PiBzZXRTaXplKCdmb250LXNpemUnLCBzaXplKX1cbiAgJHsoeyBmdWxsIH0pID0+IGZ1bGwgPyAnd2lkdGg6IDEwMCU7JyA6ICcnfVxuYDtcbkJ1dHRvbi5kaXNwbGF5TmFtZSA9ICdCdXR0b24nO1xuXG5leHBvcnQgZGVmYXVsdCBCdXR0b247XG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBCdXR0b24gZnJvbSAnLic7XG5cbmNvbnN0IEJ1dHRvbkdyb3VwID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXG4gICY6bm90KDpsYXN0LWNoaWxkKSB7XG4gICAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XG4gIH1cblxuICAke0J1dHRvbn0ge1xuICAgIG1hcmdpbjogMDtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuXG4gICAgJjpmaXJzdC1jaGlsZCB7XG4gICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA0cHg7XG4gICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA0cHg7XG4gICAgfVxuXG4gICAgJjpub3QoOmZpcnN0LWNoaWxkKSB7XG4gICAgICBtYXJnaW4tbGVmdDogLTFweDtcbiAgICB9XG5cbiAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDRweDtcbiAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA0cHg7XG4gICAgfVxuICB9XG5gO1xuQnV0dG9uR3JvdXAuZGlzcGxheU5hbWUgPSAnQnV0dG9uR3JvdXAnO1xuXG5leHBvcnQgZGVmYXVsdCBCdXR0b25Hcm91cDtcbiIsImltcG9ydCBzdHlsZWQsIHsgY3NzIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgU2l6ZVR5cGUgfSBmcm9tICcuLi8uLi90eXBlcyc7XG5cbmNvbnN0IHN0cmlwZWRTdHlsZSA9IGNzc2BcbiAgdGJvZHkgPiB0cjpudGgtY2hpbGQob2RkKSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjAyKTtcbiAgfVxuYDtcblxuY29uc3QgaG92ZXJTdHlsZSA9IGNzc2BcbiAgdGJvZHkgPiB0cjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjA0KTtcbiAgfVxuYDtcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgc2l6ZT86IFNpemVUeXBlO1xuICBmdWxsPzogYm9vbGVhbjtcbiAgaGVhZGVyU3R5bGU/OiBhbnk7XG4gIGJvcmRlcmVkPzogYm9vbGVhbjtcbiAgYm9yZGVybGVzcz86IGJvb2xlYW47XG4gIHN0cmlwZWQ/OiBib29sZWFuO1xuICBob3Zlcj86IGJvb2xlYW47XG59XG5cbmNvbnN0IFRhYmxlID0gc3R5bGVkLnRhYmxlPFByb3BzPmBcbiAgZGlzcGxheTogYmxvY2s7XG4gICR7KHsgZnVsbCB9KSA9PiBmdWxsID8gY3NzYHdpZHRoOiAxMDAlO2AgOiAnJ31cbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcblxuICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XG4gIC1tcy1vdmVyZmxvdy1zdHlsZTogLW1zLWF1dG9oaWRpbmctc2Nyb2xsYmFyO1xuXG4gIHRkLCB0aCB7XG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICBwYWRkaW5nOiAwLjc1cmVtO1xuICAgICR7KHsgdGhlbWUsIGJvcmRlcmVkIH0pID0+IGJvcmRlcmVkID8gY3NzYFxuICAgICAgYm9yZGVyOiAxcHggc29saWQgJHt0aGVtZS5ib3JkZXJ9O1xuICAgIGAgOiAnJ31cbiAgICBib3JkZXItd2lkdGg6IDAgMCAxcHg7XG4gIH1cblxuICB0aCB7IHdoaXRlLXNwYWNlOiBub3dyYXA7IH1cblxuICAkeyh7IHN0cmlwZWQgfSkgPT4gc3RyaXBlZCA/IHN0cmlwZWRTdHlsZSA6ICcnfVxuICAkeyh7IGhvdmVyIH0pID0+IGhvdmVyID8gaG92ZXJTdHlsZSA6ICcnfVxuXG4gICR7KHsgaGVhZGVyU3R5bGUgfSkgPT4gaGVhZGVyU3R5bGUgPyBjc3NgXG4gICAgdGgge1xuICAgICAgJHtoZWFkZXJTdHlsZX1cbiAgICB9XG4gIGAgOiAnJ31cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IFRhYmxlO1xuIiwiaW1wb3J0IHsgSFRNTEF0dHJpYnV0ZXMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkLCB7IGNzcyB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBmaW5kQ29sb3JJbnZlcnQgZnJvbSAnLi4vLi4vdXRpbHMvZmluZENvbG9ySW52ZXJ0JztcbmltcG9ydCB7IENvbG9yVHlwZSB9IGZyb20gJy4uLy4uL3R5cGVzJztcblxuZXhwb3J0IGludGVyZmFjZSBQcm9wcyBleHRlbmRzIEhUTUxBdHRyaWJ1dGVzPEhUTUxEaXZFbGVtZW50PiB7XG4gIC8qKiDoibLmjIflrpogKi9cbiAgY29sb3I/OiBDb2xvclR5cGU7XG4gIC8qKiBib3JkZXLjgpLpnZ7ooajnpLrjgZnjgosgKi9cbiAgYm9yZGVybGVzcz86IGJvb2xlYW47XG4gIHN0eWxlPzogYW55O1xufVxuXG5mdW5jdGlvbiBzZXRDb2xvcih7IGNvbG9yLCB0aGVtZSB9OiBhbnkpIHtcbiAgaWYgKCFjb2xvcikgcmV0dXJuIHt9O1xuXG4gIGNvbnN0IHRhcmdldCA9IHRoZW1lW2NvbG9yXSB8fCBjb2xvcjtcbiAgY29uc3QgaW52ZXJ0Q29sb3IgPSBmaW5kQ29sb3JJbnZlcnQodGhlbWUsIHRhcmdldCk7XG4gIHJldHVybiBjc3NgYmFja2dyb3VuZC1jb2xvcjogJHt0YXJnZXR9OyBjb2xvcjogJHtpbnZlcnRDb2xvcn07YDtcbn1cblxuY29uc3QgQm94ID0gc3R5bGVkLmRpdjxQcm9wcz5gXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgJHsoeyBib3JkZXJsZXNzLCB0aGVtZSB9KSA9PiBib3JkZXJsZXNzID8gYGAgOiBgYm9yZGVyOiAxcHggc29saWQgJHt0aGVtZS5ib3JkZXJ9O2B9XG4gIGJveC1zaGFkb3c6IDAgMXB4IDJweCAwIHJnYmEoMCwgMCwgMCwgMC4wNSk7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgd2lkdGg6IDEwMCU7XG5cbiAgbWluLXdpZHRoOiAwO1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG5cbiAgJHtzZXRDb2xvcn1cbmA7XG5Cb3guZGlzcGxheU5hbWUgPSAnQm94JztcblxuZXhwb3J0IGRlZmF1bHQgQm94O1xuIiwiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQsIEhUTUxBdHRyaWJ1dGVzIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgc2V0U2l6ZSBmcm9tICcuLi8uLi91dGlscy9zZXRTaXplJztcbmltcG9ydCB7IENvbG9yVHlwZSwgU2l6ZVR5cGUsIENTU1R5cGUgfSBmcm9tICcuLi8uLi90eXBlcyc7XG5cbmludGVyZmFjZSBQcm9ncmVzc1Byb3BzIGV4dGVuZHMgSFRNTEF0dHJpYnV0ZXM8SFRNTERpdkVsZW1lbnQ+e1xuICAvKiog54++54q244Gu6YCy5o2XICovXG4gIHZhbHVlOiBudW1iZXI7XG4gIC8qKiDpgLLmjZfjga7mnIDlpKflgKQgKi9cbiAgbWF4OiBudW1iZXI7XG4gIC8qKiDjg5Djg7zjga7jgrXjgqTjgrogKi9cbiAgc2l6ZT86IFNpemVUeXBlO1xuICAvKiogc2l6ZeOCkuS9v+OCj+OBquOBhOOBqOOBjeOBrue4puW5heOCkuaMh+WumuOBmeOCiyAqL1xuICBoZWlnaHQ/OiBzdHJpbmc7XG4gIC8qKiDjg5Djg7zjga7oibIgKi9cbiAgY29sb3I/OiBDb2xvclR5cGU7XG4gIC8qKiDjgqvjgrnjgr/jg6BDU1PlrprnvqkgKi9cbiAgY3NzPzogQ1NTVHlwZTtcbn1cblxuY29uc3QgV3JhcHBlciA9IHN0eWxlZC5kaXY8UHJvZ3Jlc3NQcm9wcz5gXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuYmFja2dyb3VuZH07XG5cbiAgJHsoeyBzaXplIH0pID0+IHNldFNpemUoJ2hlaWdodCcsIHNpemUpfVxuICAkeyh7IHNpemUsIGhlaWdodCB9KSA9PiAhc2l6ZSAmJiBoZWlnaHQgPyBgaGVpZ2h0OiAke2hlaWdodH07YCA6ICcnfVxuXG4gICYgPiBkaXZbcm9sZT1cInByb2dyZXNzYmFyXCJdIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAkeyh7IHZhbHVlLCBtYXggfSkgPT4gKHZhbHVlID09PSBtYXgpID8gJycgOiAnYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7IGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwOyd9XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHsoeyBjb2xvciwgdGhlbWUgfSkgPT4gKHRoZW1lW2NvbG9yIV0gfHwgY29sb3IpfTtcblxuICAgIHdpbGwtY2hhbmdlOiB3aWR0aDtcblxuICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IHdpZHRoO1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDM1MG1zO1xuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSk7XG4gICAgei1pbmRleDogMTtcbiAgfVxuICAkeyh7IGNzcyB9KSA9PiAoY3NzIHx8ICcnKX1cbmA7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvZ3Jlc3MgZXh0ZW5kcyBQdXJlQ29tcG9uZW50PFByb2dyZXNzUHJvcHM+IHtcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBjb2xvcjogJ3ByaW1hcnknLFxuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICBjb25zdCB7IHZhbHVlLCBtYXggfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgcGVyY2VudCA9IE1hdGgucm91bmQoKHZhbHVlL21heCkgKiAxMDApO1xuICAgIHJldHVybiAoXG4gICAgICA8V3JhcHBlciB7Li4udGhpcy5wcm9wc30+XG4gICAgICAgIDxkaXYgcm9sZT1cInByb2dyZXNzYmFyXCIgc3R5bGU9e3sgd2lkdGg6IGAke3BlcmNlbnQgPiAxMDAgPyAxMDAgOiBwZXJjZW50fSVgIH19ID48L2Rpdj5cbiAgICAgIDwvV3JhcHBlcj5cbiAgICApO1xuICB9XG59O1xuIiwiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQsIFJlYWN0Tm9kZSwgSFRNTEF0dHJpYnV0ZXMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkLCB7IGNzcyB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7IENTU1R5cGUgfSBmcm9tICcuLi8uLi90eXBlcyc7XG5cbmNvbnN0IFdyYXBwZXIgPSBzdHlsZWQuZGl2PHsgcmVxdWlyZWQ/OiBib29sZWFuLCBjc3M/OiBDU1NUeXBlIH0+YFxuICBkaXNwbGF5OiBibG9jaztcbiAgJjpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjc1cmVtO1xuICB9XG4gICR7KHsgcmVxdWlyZWQsIHRoZW1lIH0pID0+IHJlcXVpcmVkID8gY3NzYFxuICAgIGxhYmVsOjphZnRlciB7XG4gICAgICBjb250ZW50OiAnKic7XG4gICAgICBjb2xvcjogJHt0aGVtZS5wcmltYXJ5fTtcbiAgICAgIG1hcmdpbi1sZWZ0OiAwLjMyNXJlbTtcbiAgICB9XG4gIGAgOiB7fX1cblxuICAkeyh7IGNzcyB9KSA9PiBjc3MgfHwge319XG5gO1xuXG5jb25zdCBMYWJlbCA9IHN0eWxlZC5sYWJlbGBcbiAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUudGV4dFN0cm9uZ307XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDFyZW07XG4gIG1hcmdpbi1ib3R0b206IDAuMzI1cmVtO1xuYDtcblxuaW50ZXJmYWNlIFByb3BzIGV4dGVuZHMgSFRNTEF0dHJpYnV0ZXM8SFRNTERpdkVsZW1lbnQ+IHtcbiAgbGFiZWw/OiBzdHJpbmc7XG4gIGNoaWxkcmVuOiBSZWFjdE5vZGU7XG4gIHJlcXVpcmVkPzogYm9vbGVhbjtcbiAgY3NzPzogQ1NTVHlwZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmllbGQgZXh0ZW5kcyBQdXJlQ29tcG9uZW50PFByb3BzPiB7XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGxhYmVsLCBjaGlsZHJlbiwgLi4ucmVzdCB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPFdyYXBwZXIgey4uLnJlc3R9PlxuICAgICAgICB7bGFiZWwgJiYgKDxMYWJlbD57bGFiZWx9PC9MYWJlbD4pfVxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L1dyYXBwZXI+XG4gICAgKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgY3NzIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgQ1NTVHlwZSB9IGZyb20gJy4uL3R5cGVzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFtYnVyZ2VyKHNpemU6IHN0cmluZyk6IENTU1R5cGUge1xuICByZXR1cm4gY3NzYFxuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBoZWlnaHQ6ICR7c2l6ZX07XG4gICAgd2lkdGg6ICR7c2l6ZX07XG5cbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgc3BhbiB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjdXJyZW50Q29sb3I7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIGhlaWdodDogMXB4O1xuICAgICAgbGVmdDogY2FsYyg1MCUgLSA4cHgpO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xuICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMTAwbXM7XG4gICAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBiYWNrZ3JvdW5kLWNvbG9yLCBvcGFjaXR5LCB0cmFuc2Zvcm07XG4gICAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XG4gICAgICB3aWR0aDogMTZweDtcblxuICAgICAgJjpudGgtY2hpbGQoMSkge1xuICAgICAgICB0b3A6IGNhbGMoNTAlIC0gNnB4KTtcbiAgICAgIH1cbiAgICAgICY6bnRoLWNoaWxkKDIpIHtcbiAgICAgICAgdG9wOiBjYWxjKDUwJSAtIDFweCk7XG4gICAgICB9XG4gICAgICAmOm50aC1jaGlsZCgzKSB7XG4gICAgICAgIHRvcDogY2FsYyg1MCUgKyA0cHgpO1xuICAgICAgfVxuXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYShibGFjaywgMC4wNSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgJi5hY3RpdmUgc3BhbiB7XG4gICAgICAmOm50aC1jaGlsZCgxKSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg1cHgpIHJvdGF0ZSg0NWRlZyk7XG4gICAgICB9XG4gICAgICAmOm50aC1jaGlsZCgyKSB7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICB9XG4gICAgICAmOm50aC1jaGlsZCgzKSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNXB4KSByb3RhdGUoLTQ1ZGVnKTtcbiAgICAgIH1cbiAgICB9XG4gIGA7XG59XG4iLCJpbXBvcnQgeyBjc3MgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgeyBDU1NUeXBlIH0gZnJvbSAnLi4vdHlwZXMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcnJvdyhjb2xvcjogc3RyaW5nLCBkaXJlY3Rpb24/OiBzdHJpbmcpOiBDU1NUeXBlIHtcbiAgcmV0dXJuIGNzc2BcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm9yZGVyOiAzcHggc29saWQgJHtjb2xvcn07XG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgIGJvcmRlci1yaWdodDogMDtcbiAgICBib3JkZXItdG9wOiAwO1xuICAgIGNvbnRlbnQ6IFwiIFwiO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGhlaWdodDogMC42MjVlbTtcbiAgICBtYXJnaW4tdG9wOiAtMC42MjVlbTtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICB0b3A6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcbiAgICB3aWR0aDogMC42MjVlbTtcbiAgYDtcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuaW50ZXJmYWNlIE1zZ1Byb3BzIHtcbiAgZXJyb3I/OiBib29sZWFuO1xufVxuXG5jb25zdCBNZXNzYWdlID0gc3R5bGVkLnNwYW48TXNnUHJvcHM+YFxuICBmb250LXNpemU6IDAuOHJlbTtcbiAgY29sb3I6ICR7KHsgZXJyb3IsIHRoZW1lIH0pID0+IGVycm9yID8gdGhlbWUuZGFuZ2VyIDogdGhlbWUudGV4dExpZ2h0fTtcbmA7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlbHBNZXNzYWdlKGhlbHA/OiBzdHJpbmcsIGVycm9yPzogc3RyaW5nKSB7XG4gIGlmIChlcnJvcikge1xuICAgIHJldHVybiAoPE1lc3NhZ2UgZXJyb3I+e2Vycm9yfTwvTWVzc2FnZT4pO1xuICB9XG4gIGlmIChoZWxwKSB7XG4gICAgcmV0dXJuICg8TWVzc2FnZT57aGVscH08L01lc3NhZ2U+KTtcbiAgfVxufVxuIiwiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQsIElucHV0SFRNTEF0dHJpYnV0ZXMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkLCB7IGNzcyB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7IHNldFNpemUgfSBmcm9tICcuLi8uLi91dGlscyc7XG5pbXBvcnQgZGlzYWJsZWRDb2xvciBmcm9tICcuLi8uLi91dGlscy9kaXNhYmxlZENvbG9yJztcbmltcG9ydCBIZWxwTWVzc2FnZSBmcm9tICcuL0hlbHBNZXNzYWdlJztcbmltcG9ydCB7IENTU1R5cGUgfSBmcm9tICcuLi8uLi90eXBlcyc7XG5cbmludGVyZmFjZSBXcmFwcGVyUHJvcHMge1xuICBvdXRsaW5lPzogYm9vbGVhbjtcbiAgZXJyb3I/OiBhbnk7XG4gIGNzcz86IENTU1R5cGU7XG59XG5cbmludGVyZmFjZSBJY29uUHJvcHMge1xuICByaWdodD86IGJvb2xlYW47XG59XG5cbmNvbnN0IHJpZ2h0SWNvbiA9IGNzc2BcbiAgcmlnaHQ6IDAuMzc1ZW07XG4gICYgfiBpbnB1dCB7XG4gICAgcGFkZGluZy1yaWdodDogMS41NTVlbSAhaW1wb3J0YW50O1xuICB9XG5gO1xuXG5jb25zdCBsZWZ0SWNvbiA9IGNzc2BcbiAgbGVmdDogMC4zNzVlbTtcbiAgJiB+IGlucHV0IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDEuNTVlbSAhaW1wb3J0YW50O1xuICB9XG5gO1xuXG5jb25zdCBJY29uID0gc3R5bGVkLnNwYW48SWNvblByb3BzPmBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDAuMzc1ZW07XG4gIGJvdHRvbTogMDtcbiAgei1pbmRleDogMTtcbiAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuYm9yZGVyfTtcbiAgJHsoeyByaWdodCB9KSA9PiByaWdodCA/IHJpZ2h0SWNvbiA6IGxlZnRJY29ufVxuXG4gIHN2ZywgaW1nIHtcbiAgICBoZWlnaHQ6IDFlbTtcbiAgICB3aWR0aDogMWVtO1xuICB9XG5gO1xuXG5jb25zdCBXcmFwcGVyID0gc3R5bGVkLnNwYW48V3JhcHBlclByb3BzPmBcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBibG9jaztcblxuICBpbnB1dCB7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICAgIGFwcGVhcmFuY2U6IG5vbmU7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBjb2xvcjogaW5oZXJpdDtcblxuICAgIHBhZGRpbmc6IDAuMzc1ZW0gMC42MjVlbTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgJHsoeyBvdXRsaW5lLCB0aGVtZSwgZXJyb3IgfSkgPT4gb3V0bGluZSA/XG4gICAgICBgYm9yZGVyOiAxcHggc29saWQgJHtlcnJvciA/IHRoZW1lLmRhbmdlciA6IHRoZW1lLmJvcmRlcn07IGJvcmRlci1yYWRpdXM6IDRweDtgIDpcbiAgICAgIGBib3JkZXItYm90dG9tOiAxcHggc29saWQgJHtlcnJvciA/IHRoZW1lLmRhbmdlciA6IHRoZW1lLmJvcmRlcn07IGJvcmRlci1yYWRpdXM6IDA7YFxuICAgIH1cbiAgICAke3NldFNpemUoJ2ZvbnQtc2l6ZScpfVxuXG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYm94LXNoYWRvdztcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAxNTBtcztcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XG5cbiAgICAmOmZvY3VzIHtcbiAgICAgIGJvcmRlci1jb2xvcjogJHsoeyBlcnJvciwgdGhlbWUgfSkgPT4gKGVycm9yID8gdGhlbWUuZGFuZ2VyIDogdGhlbWUucHJpbWFyeSl9O1xuICAgICAgJHsoeyB0aGVtZSwgb3V0bGluZSwgZXJyb3IgfSkgPT4gb3V0bGluZSA/XG4gICAgICAgIGBib3gtc2hhZG93OiAwIDAgMCAwLjFlbSAke2Vycm9yID8gdGhlbWUuZGFuZ2VyIDogdGhlbWUucHJpbWFyeX07YCA6XG4gICAgICAgIGBib3gtc2hhZG93OiAwIDAuMWVtICR7ZXJyb3IgPyB0aGVtZS5kYW5nZXIgOiB0aGVtZS5wcmltYXJ5fTtgXG4gICAgICB9XG4gICAgfVxuXG4gICAgJjpkaXNhYmxlZCwgW2Rpc2FibGVkXSwgJjpyZWFkb25seSB7XG4gICAgICAkeyh7IHRoZW1lIH0pID0+IGRpc2FibGVkQ29sb3IodGhlbWUpfVxuICAgIH1cblxuICAgICY6ZGlzYWJsZWQsIFtkaXNhYmxlZF0ge1xuICAgICAgcmVzaXplOiBub25lO1xuICAgIH1cblxuICAgICY6OnBsYWNlaG9sZGVyIHtcbiAgICAgIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnBsYWNlaG9sZGVyfTtcbiAgICB9XG4gIH1cblxuICAmOmhvdmVyIHtcbiAgICBpbnB1dDpub3QoOmRpc2FibGVkKTpub3QoOmZvY3VzKTpub3QoOmFjdGl2ZSkge1xuICAgICAgYm9yZGVyLWNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmJvcmRlckhvdmVyfTtcbiAgICB9XG4gICAgJHtJY29ufSB7XG4gICAgICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5ib3JkZXJIb3Zlcn07XG4gICAgfVxuICB9XG4gICR7KHsgY3NzIH0pID0+IGNzcyB8fCAnJ31cbmA7XG5cbmludGVyZmFjZSBQcm9wcyBleHRlbmRzIElucHV0SFRNTEF0dHJpYnV0ZXM8SFRNTElucHV0RWxlbWVudD4ge1xuICBwbGFjZWhvbGRlcj86IHN0cmluZztcbiAgLyoqICd0ZXh0JyB8ICdudW1iZXInIHwgJ3Bhc3N3b3JkJyB8ICdlbWFpbCcgfCAndGVsJyB8ICdzZWFyY2gnICovXG4gIHR5cGU6ICd0ZXh0JyB8ICdudW1iZXInIHwgJ3Bhc3N3b3JkJyB8ICdlbWFpbCcgfCAndGVsJyB8ICdzZWFyY2gnO1xuICAvKiog44Ko44Op44O844Gu55m655Sf5pmC44Gu6KGo56S644OG44Kt44K544OIICovXG4gIGVycm9yPzogc3RyaW5nIHwgYW55O1xuICAvKiog5o2V5o2J44OG44Kt44K544OIICovXG4gIGhlbHA/OiBzdHJpbmcgfCBhbnk7XG4gIC8qKiDjg5zjg4Pjgq/jgrnns7vjga7jg4fjgrbjgqTjg7PjgafjgZnjgosgKi9cbiAgb3V0bGluZT86IGJvb2xlYW47XG4gIC8qKiDlt6blgbTjga7jgqLjgqTjgrPjg7MgKi9cbiAgbGVmdEljb24/OiBhbnk7XG4gIC8qKiDlj7PlgbTjga7jgqLjgqTjgrPjg7MgKi9cbiAgcmlnaHRJY29uPzogYW55O1xuICAvKiog44Kr44K544K/44OgQ1NT5a6a576pICovXG4gIGNzcz86IENTU1R5cGU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRleHRJbnB1dCBleHRlbmRzIFB1cmVDb21wb25lbnQ8UHJvcHM+IHtcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICB0eXBlOiAndGV4dCcsXG4gICAgdmFsdWU6ICcnLFxuICAgIG1heExlbmd0aDogMjU1LFxuICAgIG9uQ2hhbmdlOiAoKSA9PiB7fSxcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgY2xhc3NOYW1lLCBvdXRsaW5lLCBlcnJvciwgaGVscCwgbGVmdEljb24sIHJpZ2h0SWNvbiwgc3R5bGUsIGNzcywgLi4ucmVzdFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8V3JhcHBlciBjbGFzc05hbWU9e2NsYXNzTmFtZX0gb3V0bGluZT17b3V0bGluZX0gZXJyb3I9e2Vycm9yfSBzdHlsZT17c3R5bGV9IGNzcz17Y3NzfT5cbiAgICAgICAge2xlZnRJY29uICYmICg8SWNvbj57bGVmdEljb259PC9JY29uPil9XG4gICAgICAgIHtyaWdodEljb24gJiYgKDxJY29uIHJpZ2h0PntyaWdodEljb259PC9JY29uPil9XG4gICAgICAgIDxpbnB1dCB7Li4ucmVzdH0gLz5cbiAgICAgICAge0hlbHBNZXNzYWdlKGhlbHAsIGVycm9yKX1cbiAgICAgIDwvV3JhcHBlcj5cbiAgICApO1xuICB9XG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBUZXh0YXJlYUhUTUxBdHRyaWJ1dGVzIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgYm94U2hhZG93IGZyb20gJy4uLy4uL3V0aWxzL2JveFNoYWRvdyc7XG5pbXBvcnQgc2V0U2l6ZSBmcm9tICcuLi8uLi91dGlscy9zZXRTaXplJztcbmltcG9ydCBkaXNhYmxlZENvbG9yIGZyb20gJy4uLy4uL3V0aWxzL2Rpc2FibGVkQ29sb3InO1xuaW1wb3J0IEhlbHBNZXNzYWdlIGZyb20gJy4vSGVscE1lc3NhZ2UnO1xuaW1wb3J0IHsgQ1NTVHlwZSB9IGZyb20gJy4uLy4uL3R5cGVzJztcblxuaW50ZXJmYWNlIFdyYXBwZXJQcm9wcyB7XG4gIGVycm9yPzogc3RyaW5nO1xuICBjc3M/OiBDU1NUeXBlO1xufVxuXG5jb25zdCBXcmFwcGVyID0gc3R5bGVkLnNwYW48V3JhcHBlclByb3BzPmBcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICB0ZXh0YXJlYSB7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBwYWRkaW5nOiAwLjYyNWVtO1xuICAgIHJlc2l6ZTogdmVydGljYWw7XG4gICAgYXBwZWFyYW5jZTogbm9uZTtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgY29sb3I6IGluaGVyaXQ7XG5cbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgJHsoeyB0aGVtZSwgZXJyb3IgfSkgPT4gZXJyb3IgPyB0aGVtZS5kYW5nZXIgOiB0aGVtZS5ib3JkZXJ9O1xuXG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYm94LXNoYWRvdztcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjE1cztcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XG5cbiAgICAke3NldFNpemUoJ2ZvbnQtc2l6ZScpfVxuXG4gICAgJjpmb2N1cyB7XG4gICAgICBib3JkZXItY29sb3I6ICR7KHsgdGhlbWUsIGVycm9yIH0pID0+IGVycm9yID8gdGhlbWUuZGFuZ2VyIDogdGhlbWUucHJpbWFyeX07XG4gICAgICAkeyh7IHRoZW1lLCBlcnJvciB9KSA9PiBib3hTaGFkb3coJzAuMWVtJywgZXJyb3IgPyB0aGVtZS5kYW5nZXIgOiB0aGVtZS5wcmltYXJ5KX1cbiAgICB9XG5cbiAgICAmOmRpc2FibGVkLCBbZGlzYWJsZWRdLCAmOnJlYWRvbmx5IHtcbiAgICAgICR7KHsgdGhlbWUgfSkgPT4gZGlzYWJsZWRDb2xvcih0aGVtZSl9XG4gICAgfVxuXG4gICAgJjpkaXNhYmxlZCwgW2Rpc2FibGVkXSB7XG4gICAgICByZXNpemU6IG5vbmU7XG4gICAgfVxuXG4gICAgJjo6cGxhY2Vob2xkZXIge1xuICAgICAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUucGxhY2Vob2xkZXJ9O1xuICAgIH1cbiAgfVxuXG4gICY6aG92ZXIge1xuICAgIHRleHRhcmVhOm5vdCg6ZGlzYWJsZWQpOm5vdCg6Zm9jdXMpIHtcbiAgICAgIGJvcmRlci1jb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5ib3JkZXJIb3Zlcn07XG4gICAgfVxuICB9XG4gICR7KHsgY3NzIH0pID0+IGNzcyB8fCB7fX1cbmA7XG5cbmludGVyZmFjZSBQcm9wcyBleHRlbmRzIFRleHRhcmVhSFRNTEF0dHJpYnV0ZXM8SFRNTFRleHRBcmVhRWxlbWVudD4ge1xuICAvKiog44Ko44Op44O844Gu55m655Sf5pmC44Gu6KGo56S644OG44Kt44K544OIICovXG4gIGVycm9yPzogc3RyaW5nIHwgYW55O1xuICAvKiog5o2V5o2J44OG44Kt44K544OIICovXG4gIGhlbHA/OiBzdHJpbmcgfCBhbnk7XG4gIC8qKiDjgqvjgrnjgr/jg6BDU1PlrprnvqkgKi9cbiAgY3NzPzogQ1NTVHlwZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGV4dGFyZWEgZXh0ZW5kcyBDb21wb25lbnQ8UHJvcHM+IHtcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICB2YWx1ZTogJycsXG4gICAgY29sOiAyLFxuICAgIHJvdzogNSxcbiAgICBvbkNoYW5nZTogKCkgPT4ge30sXG4gIH07XG5cbiAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKHByb3BzOiBQcm9wcykge1xuICAgIHJldHVybiBwcm9wcy52YWx1ZSAhPT0gdGhpcy5wcm9wcy52YWx1ZSB8fFxuICAgICAgcHJvcHMuaGVscCAhPT0gdGhpcy5wcm9wcy5oZWxwIHx8XG4gICAgICBwcm9wcy5lcnJvciAhPT0gdGhpcy5wcm9wcy5lcnJvciB8fFxuICAgICAgcHJvcHMuZGlzYWJsZWQgIT09IHRoaXMucHJvcHMuZGlzYWJsZWQgfHxcbiAgICAgIHByb3BzLnJlYWRPbmx5ICE9PSB0aGlzLnByb3BzLnJlYWRPbmx5O1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY2xhc3NOYW1lLCBoZWxwLCBlcnJvciwgc3R5bGUsIGNzcywgLi4ucmVzdCB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPFdyYXBwZXIgY2xhc3NOYW1lPXtjbGFzc05hbWV9IGVycm9yPXtlcnJvcn0gc3R5bGU9e3N0eWxlfSBjc3M9e2Nzc30+XG4gICAgICAgIDx0ZXh0YXJlYSB7Li4ucmVzdH0gLz5cbiAgICAgICAge0hlbHBNZXNzYWdlKGhlbHAsIGVycm9yKX1cbiAgICAgIDwvV3JhcHBlcj5cbiAgICApO1xuICB9XG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBJbnB1dEhUTUxBdHRyaWJ1dGVzIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHRyYW5zcGFyZW50aXplIGZyb20gJ3BvbGlzaGVkL2xpYi9jb2xvci90cmFuc3BhcmVudGl6ZSc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuY29uc3QgV3JhcHBlciA9IHN0eWxlZC5zcGFuYFxuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogYXV0bztcblxuICBsYWJlbCB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHBhZGRpbmctbGVmdDogMC42MjVlbTtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbGluZS1oZWlnaHQ6IDEuMjU7XG4gICAgbWFyZ2luLXJpZ2h0OiAwLjYyNXJlbTtcblxuICAgICY6YmVmb3JlLCAmOmFmdGVyIHtcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgfVxuXG4gICAgJjphZnRlciB7XG4gICAgICB0b3A6IDAuMjVlbTtcbiAgICAgIGxlZnQ6IDAuMmVtO1xuICAgICAgd2lkdGg6IDAuODVlbTtcbiAgICAgIGhlaWdodDogMC41ZW07XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICAgICAgYm9yZGVyOiAwLjFlbSBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgIGJvcmRlci10b3Atc3R5bGU6IG5vbmU7XG4gICAgICBib3JkZXItcmlnaHQtc3R5bGU6IG5vbmU7XG4gICAgfVxuXG4gICAgJjpiZWZvcmUge1xuICAgICAgd2lkdGg6IDEuMjVlbTtcbiAgICAgIGhlaWdodDogMS4yNWVtO1xuICAgICAgbGVmdDowO1xuICAgICAgdG9wOiAwO1xuICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmJvcmRlcn07XG4gICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICAgIHdpbGwtY2hhbmdlOiBiYWNrZ3JvdW5kO1xuICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAxNTBtcyBlYXNlLW91dDtcbiAgICB9XG4gIH1cblxuICBpbnB1dCB7XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuXG4gICAgJjpjaGVja2VkICsgbGFiZWwge1xuICAgICAgJjpiZWZvcmV7XG4gICAgICAgIGJvcmRlci1jb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5wcmltYXJ5fTtcbiAgICAgICAgYmFja2dyb3VuZDogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5wcmltYXJ5fTtcbiAgICAgIH1cbiAgICAgICY6YWZ0ZXIge1xuICAgICAgICBib3JkZXItY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUud2hpdGV9O1xuICAgICAgfVxuICAgIH1cblxuICAgICY6aW5kZXRlcm1pbmF0ZSArIGxhYmVsIHtcbiAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnByaW1hcnl9O1xuICAgICAgICBiYWNrZ3JvdW5kOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnByaW1hcnl9O1xuICAgICAgfVxuICAgICAgJjphZnRlciB7XG4gICAgICAgIGJvcmRlci1jb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS53aGl0ZX07XG4gICAgICAgIGJvcmRlci1sZWZ0LXN0eWxlOiBub25lO1xuICAgICAgfVxuICAgIH1cblxuICAgICY6ZGlzYWJsZWQge1xuICAgICAgKyBsYWJlbCB7XG4gICAgICAgIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRyYW5zcGFyZW50aXplKDAuMjUsIHRoZW1lLnRleHREYXJrKX07XG4gICAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAkeyh7IHRoZW1lIH0pID0+IHRyYW5zcGFyZW50aXplKDAuNTUsIHRoZW1lLmJvcmRlcil9O1xuICAgICAgICAgIGJvcmRlci1jb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5ib3JkZXJ9O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAmOmNoZWNrZWQgKyBsYWJlbDphZnRlciB7XG4gICAgICAgIGJvcmRlci1jb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0cmFuc3BhcmVudGl6ZSgwLjE1LCB0aGVtZS50ZXh0RGFyayl9O1xuICAgICAgfVxuICAgIH1cbiAgfVxuYDtcblxuaW50ZXJmYWNlIFByb3BzIGV4dGVuZHMgSW5wdXRIVE1MQXR0cmlidXRlczxIVE1MSW5wdXRFbGVtZW50PiB7XG4gIGNoaWxkcmVuPzogYW55O1xuICBjaGVja2VkPzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hlY2tib3ggZXh0ZW5kcyBDb21wb25lbnQ8UHJvcHM+IHtcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBuYW1lOiBudWxsLFxuICAgIGNoaWxkcmVuOiBudWxsLFxuICAgIGNoZWNrZWQ6IGZhbHNlLFxuICAgIG9uQ2hhbmdlOiAoKSA9PiB7fSxcbiAgfTtcblxuICBpZCA9IGBjaGVja2JveF8ke3RoaXMucHJvcHMubmFtZX1gO1xuXG4gIHNob3VsZENvbXBvbmVudFVwZGF0ZShwcm9wczogUHJvcHMpIHtcbiAgICByZXR1cm4gcHJvcHMuY2hlY2tlZCAhPT0gdGhpcy5wcm9wcy5jaGVja2VkIHx8XG4gICAgICBwcm9wcy5jaGlsZHJlbiAhPT0gdGhpcy5wcm9wcy5jaGlsZHJlbjtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNsYXNzTmFtZSwgY2hpbGRyZW4sIC4uLnJlc3QgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxXcmFwcGVyIGNsYXNzTmFtZT17Y2xhc3NOYW1lfSA+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBpZD17dGhpcy5pZH0gey4uLnJlc3R9IC8+XG4gICAgICAgIDxsYWJlbCBodG1sRm9yPXt0aGlzLmlkfT57Y2hpbGRyZW59PC9sYWJlbD5cbiAgICAgIDwvV3JhcHBlcj5cbiAgICApO1xuICB9XG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBTZWxlY3RIVE1MQXR0cmlidXRlcyB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCwgeyBjc3MgfSBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCBhcnJvdyBmcm9tIFwiLi4vLi4vdXRpbHMvYXJyb3dcIjtcbmltcG9ydCBzZXRTaXplIGZyb20gXCIuLi8uLi91dGlscy9zZXRTaXplXCI7XG5pbXBvcnQgSGVscE1lc3NhZ2UgZnJvbSBcIi4vSGVscE1lc3NhZ2VcIjtcbmltcG9ydCB7IFNpemVUeXBlLCBDU1NUeXBlIH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgZGlzYWJsZWRDb2xvciBmcm9tIFwiLi4vLi4vdXRpbHMvZGlzYWJsZWRDb2xvclwiO1xuXG5pbnRlcmZhY2UgV3JhcHBlclByb3BzIHtcbiAgc2l6ZT86IFNpemVUeXBlO1xuICBvdXRsaW5lPzogYm9vbGVhbjtcbiAgZXJyb3I/OiBzdHJpbmc7XG4gIGRpc2FibGVkPzogYm9vbGVhbjtcbiAgY3NzPzogQ1NTVHlwZTtcbn1cblxuY29uc3QgSW5wdXRXcmFwcGVyID0gc3R5bGVkLnNwYW48V3JhcHBlclByb3BzPmBcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBibG9jaztcblxuICBzZWxlY3Qge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBhcHBlYXJhbmNlOiBub25lO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBwYWRkaW5nOiAwLjM3NWVtIDAuNjI1ZW07XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBjb2xvcjogaW5oZXJpdDtcblxuICAgICR7KHsgc2l6ZSB9KSA9PiBzZXRTaXplKFwiZm9udC1zaXplXCIsIHNpemUpfVxuXG4gICAgYm9yZGVyOiBub25lO1xuICAgICR7KHsgb3V0bGluZSwgdGhlbWUsIGVycm9yIH0pID0+XG4gICAgICBvdXRsaW5lID8gY3NzYFxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAke2Vycm9yID8gdGhlbWUuZGFuZ2VyIDogdGhlbWUuYm9yZGVyfTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgYCA6IGNzc2BcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICR7ZXJyb3IgPyB0aGVtZS5kYW5nZXIgOiB0aGVtZS5ib3JkZXJ9O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgICAgYH1cblxuICAgIHdpbGwtY2hhbmdlOiBib3gtc2hhZG93O1xuICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IGJveC1zaGFkb3c7XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMTUwbXM7XG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xuXG4gICAgJjpmb2N1cyB7XG4gICAgICBib3JkZXItY29sb3I6ICR7KHsgZXJyb3IsIHRoZW1lIH0pID0+IGVycm9yID8gdGhlbWUuZGFuZ2VyIDogdGhlbWUucHJpbWFyeX07XG4gICAgICBib3gtc2hhZG93OiAke1xuICAgICAgICAoeyB0aGVtZSwgb3V0bGluZSwgZXJyb3IgfSkgPT4gb3V0bGluZSA/XG4gICAgICAgICAgKGVycm9yID8gdGhlbWUuZGFuZ2VyIDogdGhlbWUucHJpbWFyeSkgOlxuICAgICAgICAgIChlcnJvciA/IHRoZW1lLmRhbmdlciA6IHRoZW1lLnByaW1hcnkpXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgJjo6LW1zLWV4cGFuZCB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgICAmOi1tb3otZm9jdXNyaW5nIHtcbiAgICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgIHRleHQtc2hhZG93OiAwIDAgMCAjMDAwO1xuICAgIH1cblxuICAgICY6ZGlzYWJsZWQsIFtkaXNhYmxlZF0sICY6cmVhZG9ubHkge1xuICAgICAgJHsoeyB0aGVtZSB9KSA9PiBkaXNhYmxlZENvbG9yKHRoZW1lKX1cbiAgICB9XG5cbiAgICAmOmludmFsaWQge1xuICAgICAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUucGxhY2Vob2xkZXJ9O1xuICAgIH1cbiAgfVxuXG4gICY6OmFmdGVyIHtcbiAgICAkeyh7IHRoZW1lIH0pID0+IGFycm93KHRoZW1lLmJvcmRlcil9XG4gICAgdG9wOiAxLjI1ZW07XG4gICAgcmlnaHQ6IDAuNjI1ZW07XG4gICAgei1pbmRleDogNDtcbiAgfVxuXG4gICR7KHsgdGhlbWUsIGRpc2FibGVkIH0pID0+XG4gICAgZGlzYWJsZWRcbiAgICAgID8ge31cbiAgICAgIDogY3NzYFxuICAgICY6aG92ZXIge1xuICAgICAgc2VsZWN0Om5vdCg6ZGlzYWJsZWQpOm5vdCg6Zm9jdXMpIHtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAke3RoZW1lLmJvcmRlckhvdmVyfTtcbiAgICAgIH1cblxuICAgICAgJjo6YWZ0ZXIge1xuICAgICAgICBib3JkZXItY29sb3I6ICR7dGhlbWUuYm9yZGVySG92ZXJ9O1xuICAgICAgfVxuICAgIH1cbiAgYH1cblxuICAkeyh7IGNzcyB9KSA9PiBjc3MgfHwge319XG5gO1xuXG50eXBlIEl0ZW1UeXBlID1cbiAgfCB7IGlkOiBzdHJpbmcgfCBudW1iZXI7IG5hbWU6IHN0cmluZzsgW2tleTogc3RyaW5nXTogYW55IH1cbiAgfCBzdHJpbmc7XG5cbmludGVyZmFjZSBQcm9wcyBleHRlbmRzIFNlbGVjdEhUTUxBdHRyaWJ1dGVzPEhUTUxTZWxlY3RFbGVtZW50PiB7XG4gIHBsYWNlaG9sZGVyPzogc3RyaW5nO1xuICBvcHRpb25zOiBJdGVtVHlwZVtdO1xuICBvdXRsaW5lPzogYm9vbGVhbjtcbiAgZXJyb3I/OiBzdHJpbmcgfCBhbnk7XG4gIGhlbHA/OiBzdHJpbmcgfCBhbnk7XG4gIGlucHV0U2l6ZT86IFNpemVUeXBlO1xuICByZW5kZXI/OiAobGFiZWw6IHN0cmluZykgPT4gYW55O1xuICBkaXNhYmxlZD86IGJvb2xlYW47XG4gIGNzcz86IENTU1R5cGU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlbGVjdCBleHRlbmRzIENvbXBvbmVudDxQcm9wcz4ge1xuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIG5hbWU6IG51bGwsXG4gICAgdmFsdWU6ICcnLFxuICAgIG9uQ2hhbmdlOiAoKSA9PiB7fSxcbiAgICBvcHRpb25zOiBbXSxcbiAgfTtcblxuICBzaG91bGRDb21wb25lbnRVcGRhdGUocHJvcHM6IFByb3BzKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIHByb3BzLm9wdGlvbnMubGVuZ3RoICE9PSB0aGlzLnByb3BzLm9wdGlvbnMubGVuZ3RoIHx8XG4gICAgICBwcm9wcy52YWx1ZSAhPT0gdGhpcy5wcm9wcy52YWx1ZSB8fFxuICAgICAgcHJvcHMuZGlzYWJsZWQgIT09IHRoaXMucHJvcHMuZGlzYWJsZWQgfHxcbiAgICAgIHByb3BzLmhlbHAgIT09IHRoaXMucHJvcHMuaGVscCB8fFxuICAgICAgcHJvcHMuZXJyb3IgIT09IHRoaXMucHJvcHMuZXJyb3JcbiAgICApO1xuICB9XG5cbiAgcmVuZGVyTGFiZWwgPSAobGFiZWw6IHN0cmluZykgPT4ge1xuICAgIGlmICh0aGlzLnByb3BzLnJlbmRlcikge1xuICAgICAgcmV0dXJuIHRoaXMucHJvcHMucmVuZGVyKGxhYmVsKTtcbiAgICB9XG4gICAgcmV0dXJuIGxhYmVsO1xuICB9XG5cbiAgcmVuZGVySXRlbSA9ICgpID0+IHtcbiAgICByZXR1cm4gdGhpcy5wcm9wcy5vcHRpb25zLm1hcCgoaXRlbSwgaWR4KSA9PiB7XG4gICAgICBpZiAodHlwZW9mIGl0ZW0gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPG9wdGlvbiBrZXk9e2l0ZW19IHZhbHVlPXtpdGVtfT5cbiAgICAgICAgICAgIHt0aGlzLnJlbmRlckxhYmVsKGl0ZW0pfVxuICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgY29uc3QgeyBpZCwgbmFtZSB9ID0gaXRlbTtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxvcHRpb24ga2V5PXtgJHtpZH1fJHtpZHh9YH0gdmFsdWU9e2lkfT5cbiAgICAgICAgICB7dGhpcy5yZW5kZXJMYWJlbChuYW1lKX1cbiAgICAgICAgPC9vcHRpb24+XG4gICAgICApO1xuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGNzcyxcbiAgICAgIGNsYXNzTmFtZSxcbiAgICAgIGlucHV0U2l6ZSxcbiAgICAgIG91dGxpbmUsXG4gICAgICBvcHRpb25zLFxuICAgICAgZXJyb3IsXG4gICAgICBoZWxwLFxuICAgICAgcGxhY2Vob2xkZXIsXG4gICAgICBkaXNhYmxlZCxcbiAgICAgIC4uLnJlc3RcbiAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgIHJldHVybiAoXG4gICAgICA8SW5wdXRXcmFwcGVyXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxuICAgICAgICBzaXplPXtpbnB1dFNpemV9XG4gICAgICAgIG91dGxpbmU9e291dGxpbmV9XG4gICAgICAgIGVycm9yPXtlcnJvcn1cbiAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgICBjc3M9e2Nzc31cbiAgICAgID5cbiAgICAgICAgPHNlbGVjdCB7Li4ucmVzdH0gZGlzYWJsZWQ9e2Rpc2FibGVkfSByZXF1aXJlZD17Qm9vbGVhbihwbGFjZWhvbGRlcil9PlxuICAgICAgICAgIHtwbGFjZWhvbGRlciAmJiAoXG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+XG4gICAgICAgICAgICAgIHtwbGFjZWhvbGRlcn1cbiAgICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICAgICl9XG4gICAgICAgICAge3RoaXMucmVuZGVySXRlbSgpfVxuICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAge0hlbHBNZXNzYWdlKGhlbHAsIGVycm9yKX1cbiAgICAgIDwvSW5wdXRXcmFwcGVyPlxuICAgICk7XG4gIH1cbn1cbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIElucHV0SFRNTEF0dHJpYnV0ZXMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdHJhbnNwYXJlbnRpemUgZnJvbSAncG9saXNoZWQvbGliL2NvbG9yL3RyYW5zcGFyZW50aXplJztcbmltcG9ydCBzdHlsZWQsIHsgY3NzIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgQ29sb3JUeXBlIH0gZnJvbSAnLi4vLi4vdHlwZXMnO1xuXG5jb25zdCBSYWRpb0xhYmVsID0gY3NzYFxuICBsYWJlbCB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHBhZGRpbmctbGVmdDogMS42MjVlbTtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbGluZS1oZWlnaHQ6IDEuMjU7XG4gICAgbWFyZ2luLXJpZ2h0OiAwLjYyNXJlbTtcblxuICAgICY6YmVmb3JlLCAmOmFmdGVyIHtcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgfVxuXG4gICAgJjphZnRlciB7XG4gICAgICB0b3A6IDAuMzc1ZW07XG4gICAgICBsZWZ0OiAwLjM3NWVtO1xuICAgICAgd2lkdGg6IDAuNWVtO1xuICAgICAgaGVpZ2h0OiAwLjVlbTtcbiAgICAgIGJhY2tncm91bmQ6ICR7KHsgdGhlbWUgfTogYW55KSA9PiB0aGVtZS5wcmltYXJ5fTtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG5cbiAgICAgIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm07XG4gICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMTUwbXMgZWFzZS1vdXQ7XG4gICAgfVxuXG4gICAgJjpiZWZvcmUge1xuICAgICAgd2lkdGg6IDEuMjVlbTtcbiAgICAgIGhlaWdodDogMS4yNWVtO1xuICAgICAgbGVmdDowO1xuICAgICAgdG9wOiAwO1xuICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICBib3JkZXI6IDAuMWVtIHNvbGlkICR7KHsgdGhlbWUgfTogYW55KSA9PiB0aGVtZS5ib3JkZXJ9O1xuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuXG4gICAgICB3aWxsLWNoYW5nZTogYmFja2dyb3VuZDtcbiAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgMTUwbXMgZWFzZS1vdXQ7XG4gICAgfVxuICB9XG5cbiAgaW5wdXQge1xuICAgIGRpc3BsYXk6IG5vbmU7XG5cbiAgICAmOmNoZWNrZWQge1xuICAgICAgKyBsYWJlbDpiZWZvcmUge1xuICAgICAgICBib3JkZXItY29sb3I6ICR7KHsgdGhlbWUgfTogYW55KSA9PiB0aGVtZS5wcmltYXJ5fTtcbiAgICAgIH1cbiAgICAgICsgbGFiZWw6YWZ0ZXJ7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgJjpkaXNhYmxlZCB7XG4gICAgICArIGxhYmVsIHtcbiAgICAgICAgY29sb3I6ICR7KHsgdGhlbWUgfTogYW55KSA9PiB0cmFuc3BhcmVudGl6ZSgwLjI1LCB0aGVtZS50ZXh0RGFyayl9O1xuICAgICAgICAmOmJlZm9yZSB7XG4gICAgICAgICAgYmFja2dyb3VuZDogJHsoeyB0aGVtZSB9OiBhbnkpID0+IHRyYW5zcGFyZW50aXplKDAuNTUsIHRoZW1lLmJvcmRlcil9O1xuICAgICAgICAgIGJvcmRlci1jb2xvcjogJHsoeyB0aGVtZSB9OiBhbnkpID0+IHRoZW1lLmJvcmRlcn07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgICY6Y2hlY2tlZCArIGxhYmVsOmFmdGVyIHtcbiAgICAgICAgYmFja2dyb3VuZDogJHsoeyB0aGVtZSB9OiBhbnkpID0+IHRyYW5zcGFyZW50aXplKDAuMTUsIHRoZW1lLnRleHREYXJrKX07XG4gICAgICB9XG4gICAgfVxuICB9XG5gO1xuXG5jb25zdCBCdXR0b25MYWJlbCA9IGNzc2BcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG5cbiAgbGFiZWwge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBwYWRkaW5nOiAwLjM3NWVtIDAuNzVlbTtcbiAgICBoZWlnaHQ6IDIuMjVlbTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAkeyh7IHRoZW1lIH06IGFueSkgPT4gdGhlbWUuYm9yZGVyfTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIGJvcmRlci1jb2xvcjogJHsoeyB0aGVtZSB9OiBhbnkpID0+IHRoZW1lLmJvcmRlckhvdmVyfTtcbiAgICB9XG4gIH1cblxuICBpbnB1dCB7XG4gICAgZGlzcGxheTogbm9uZTtcblxuICAgICY6Y2hlY2tlZCArIGxhYmVsIHtcbiAgICAgIHotaW5kZXg6IDE7XG4gICAgICBib3JkZXItY29sb3I6ICR7KHsgdGhlbWUgfTogYW55KSA9PiB0aGVtZS5wcmltYXJ5fTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7KHsgdGhlbWUgfTogYW55KSA9PiB0cmFuc3BhcmVudGl6ZSgwLjU1LCB0aGVtZS5wcmltYXJ5KX07XG4gICAgfVxuXG4gICAgJjpkaXNhYmxlZCB7XG4gICAgICArIGxhYmVsIHtcbiAgICAgICAgY3Vyc29yOiBkZWZhdWx0O1xuICAgICAgICBjb2xvcjogJHsoeyB0aGVtZSB9OiBhbnkpID0+IHRyYW5zcGFyZW50aXplKDAuMjUsIHRoZW1lLnRleHREYXJrKX07XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7KHsgdGhlbWUgfTogYW55KSA9PiB0cmFuc3BhcmVudGl6ZSgwLjU1LCB0aGVtZS5ib3JkZXIpfTtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkeyh7IHRoZW1lIH06IGFueSkgPT4gdGhlbWUuYm9yZGVyfTtcbiAgICAgIH1cblxuICAgICAgJjpjaGVja2VkICsgbGFiZWwge1xuICAgICAgICBib3JkZXItY29sb3I6ICR7KHsgdGhlbWUgfTogYW55KSA9PiB0aGVtZS50ZXh0RGFya307XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7KHsgdGhlbWUgfTogYW55KSA9PiB0cmFuc3BhcmVudGl6ZSgwLjY1LCB0aGVtZS50ZXh0RGFyayl9O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gICYgKyAmIHtcbiAgICBtYXJnaW4tbGVmdDogLTFweDtcbiAgfVxuXG4gICY6Zmlyc3QtY2hpbGQgbGFiZWwge1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDRweDtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA0cHg7XG4gIH1cblxuICAmOmxhc3QtY2hpbGQgbGFiZWwge1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA0cHg7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDRweDtcbiAgfVxuYDtcblxuXG5jb25zdCBXcmFwcGVyID0gc3R5bGVkLnNwYW48eyBidXR0b246IGJvb2xlYW4sIGNvbG9yPzogQ29sb3JUeXBlIH0+YFxuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogYXV0bztcblxuICAkeyh7IGJ1dHRvbiB9KSA9PiBidXR0b24gPyBCdXR0b25MYWJlbCA6IFJhZGlvTGFiZWx9XG5gO1xuXG5pbnRlcmZhY2UgUHJvcHMgZXh0ZW5kcyBJbnB1dEhUTUxBdHRyaWJ1dGVzPEhUTUxJbnB1dEVsZW1lbnQ+IHtcbiAgdmFsdWU6IHN0cmluZyB8IG51bWJlcjtcbiAgY2hpbGRyZW4/OiBhbnk7XG4gIGNoZWNrZWQ/OiBib29sZWFuO1xuICBidXR0b24/OiBib29sZWFuO1xuICBjb2xvcj86IENvbG9yVHlwZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmFkaW8gZXh0ZW5kcyBDb21wb25lbnQ8UHJvcHM+IHtcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBuYW1lOiBudWxsLFxuICAgIGNoaWxkcmVuOiBudWxsLFxuICAgIGNoZWNrZWQ6IGZhbHNlLFxuICAgIGJ1dHRvbjogZmFsc2UsXG4gICAgb25DaGFuZ2U6ICgpID0+IHt9LFxuICB9O1xuXG4gIGlkID0gYHJhZGlvXyR7dGhpcy5wcm9wcy5uYW1lfToke3RoaXMucHJvcHMudmFsdWV9YDtcblxuICBzaG91bGRDb21wb25lbnRVcGRhdGUocHJvcHM6IFByb3BzKSB7XG4gICAgcmV0dXJuIHByb3BzLmNoZWNrZWQgIT09IHRoaXMucHJvcHMuY2hlY2tlZDtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNsYXNzTmFtZSwgY2hpbGRyZW4sIGJ1dHRvbiwgY29sb3IsIHN0eWxlLCAuLi5yZXN0IH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8V3JhcHBlciBjbGFzc05hbWU9e2NsYXNzTmFtZX0gYnV0dG9uPXtidXR0b24hfSBjb2xvcj17Y29sb3J9IHN0eWxlPXtzdHlsZX0+XG4gICAgICAgIDxpbnB1dCBpZD17dGhpcy5pZH0gdHlwZT1cInJhZGlvXCIgey4uLnJlc3R9IC8+XG4gICAgICAgIDxsYWJlbCBodG1sRm9yPXt0aGlzLmlkfT57Y2hpbGRyZW59PC9sYWJlbD5cbiAgICAgIDwvV3JhcHBlcj5cbiAgICApO1xuICB9XG59XG4iLCJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNldEFsaWduKHsgYWxpZ24gfTogeyBhbGlnbj86ICdsZWZ0JyB8ICdyaWdodCcgfCAnY2VudGVyJyB9KSB7XG4gIHN3aXRjaCAoYWxpZ24pIHtcbiAgICBjYXNlICdsZWZ0JzpcbiAgICAgIHJldHVybiAnZmxleC1zdGFydCc7XG4gICAgY2FzZSAncmlnaHQnOlxuICAgICAgcmV0dXJuICdmbGV4LWVuZCc7XG4gICAgY2FzZSAnY2VudGVyJzpcbiAgICAgIHJldHVybiAnY2VudGVyJztcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuICdzcGFjZS1ldmVubHknO1xuICB9XG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCwgSFRNTEF0dHJpYnV0ZXMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdHJhbnNwYXJlbnRpemUgZnJvbSAncG9saXNoZWQvbGliL2NvbG9yL3RyYW5zcGFyZW50aXplJztcbmltcG9ydCBzdHlsZWQsIHsgY3NzIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IGZpbmRDb2xvckludmVydCBmcm9tICcuLi8uLi91dGlscy9maW5kQ29sb3JJbnZlcnQnO1xuaW1wb3J0IGhhbWJ1Z2VyIGZyb20gJy4uLy4uL3V0aWxzL2hhbWJ1Z2VyJztcbmltcG9ydCBzZXRBbGlnbiBmcm9tICcuLi8uLi91dGlscy9zZXRBbGlnbic7XG5pbXBvcnQgeyBtZWRpYVRhYmxldCwgbWVkaWFVbnRpbEZ1bGxIRCwgbWVkaWFNb2JpbGUgfSBmcm9tICcuLi8uLi91dGlscy9tZWRpYSc7XG5pbXBvcnQgeyBDb2xvclR5cGUsIEFsaWduVHlwZSwgQ1NTVHlwZSwgVGhlbWVUeXBlIH0gZnJvbSAnLi4vLi4vdHlwZXMnO1xuXG5mdW5jdGlvbiBzZXRDb2xvcihcbiAgeyBjb2xvciwgdGhlbWUsIGJhY2tkcm9wIH06IHsgY29sb3I/OiBDb2xvclR5cGUsIHRoZW1lOiBUaGVtZVR5cGUsIGJhY2tkcm9wPzogYm9vbGVhbiB9LFxuKSB7XG4gIGNvbnN0IGJhY2tncm91bmRDb2xvciA9IGNvbG9yID8gdGhlbWVbY29sb3JdIDogJ3RyYW5zcGFyZW50JztcbiAgY29uc3QgdGV4dENvbG9yID1cbiAgICBmaW5kQ29sb3JJbnZlcnQodGhlbWUsIGJhY2tncm91bmRDb2xvciA9PT0gJ3RyYW5zcGFyZW50JyA/IHRoZW1lLmJhY2tncm91bmQgOiBiYWNrZ3JvdW5kQ29sb3IpO1xuXG4gIGlmIChiYWNrZHJvcCkge1xuICAgIGNvbnN0IGJhY2tDb2xvciA9XG4gICAgICB0cmFuc3BhcmVudGl6ZSgwLjIsIChiYWNrZ3JvdW5kQ29sb3IgPT09ICd0cmFuc3BhcmVudCcgPyB0aGVtZS53aGl0ZSA6IGJhY2tncm91bmRDb2xvcikpO1xuICAgIGNvbnN0IHVhID0gbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpO1xuICAgIGlmICh1YS5pbmRleE9mKCdzYWZhcmknKSA+IC0xICYmIHVhLmluZGV4T2YoJ2Nocm9tZScpID09PSAtMSkge1xuICAgICAgcmV0dXJuIGNzc2BiYWNrZ3JvdW5kLWNvbG9yOiAke2JhY2tDb2xvcn07IGNvbG9yOiAke3RleHRDb2xvcn07IGJhY2tkcm9wLWZpbHRlcjogYmx1cig4cHgpO2A7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNzc2BcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7YmFja0NvbG9yfTtcbiAgICAgIGNvbG9yOiAke3RleHRDb2xvcn07XG4gICAgYDtcbiAgfVxuXG4gIHJldHVybiBjc3NgYmFja2dyb3VuZC1jb2xvcjogJHtiYWNrZ3JvdW5kQ29sb3J9OyBjb2xvcjogJHt0ZXh0Q29sb3J9O2A7XG59XG5cbmludGVyZmFjZSBOYXZQcm9wcyB7XG4gIGNvbG9yPzogQ29sb3JUeXBlO1xuICBiYWNrZHJvcD86IGJvb2xlYW47XG4gIGZpeGVkPzogYm9vbGVhbjtcbiAgc3RpY2t5PzogYm9vbGVhbjtcbiAgZmx1aWQ/OiBib29sZWFuO1xuICBzaG93PzogYm9vbGVhbjtcbiAgc3R5bGU/OiBhbnk7XG4gIGFsaWduPzogQWxpZ25UeXBlO1xuICByb2xlOiBzdHJpbmc7XG4gIGNzcz86IENTU1R5cGU7XG59XG5cbmNvbnN0IE5hdkJhciA9IHN0eWxlZC5oZWFkZXI8TmF2UHJvcHM+YFxuICBwb3NpdGlvbjogJHtcbiAgICAoeyBmaXhlZCwgc3RpY2t5IH0pID0+ICghKHN0aWNreSB8fCBmaXhlZCkgPyAncmVsYXRpdmUnIDogKGZpeGVkID8gJ2ZpeGVkJyA6ICdzdGlja3knKSlcbiAgfTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0cmV0Y2g7XG4gIHRvcDogLTFweDtcblxuICBtaW4taGVpZ2h0OiAzLjI1cmVtO1xuICB3aWR0aDogMTAwJTtcbiAgei1pbmRleDogMzA7XG5cbiAgJHtzZXRDb2xvcn1cblxuICBhIHsgY29sb3I6IGluaGVyaXQ7IH1cblxuICAke21lZGlhVGFibGV0fSB7XG4gICAgcGFkZGluZzogJHsoeyBmbHVpZCB9OiBOYXZQcm9wcykgPT4gZmx1aWQgPyAnMCAwLjVyZW0nIDogJzAgMyUnfTtcbiAgfVxuICAke21lZGlhVW50aWxGdWxsSER9IHtcbiAgICBwYWRkaW5nOiAkeyh7IGZsdWlkIH06IE5hdlByb3BzKSA9PiBmbHVpZCA/ICcwIDAuNzVyZW0nIDogJzAgNSUnfTtcbiAgfVxuICAkeyh7IGNzcyB9KSA9PiBjc3MgfHwge319XG5gO1xuXG5jb25zdCBCdXJnZXIgPSBzdHlsZWQuYnV0dG9uYFxuICAke2hhbWJ1Z2VyKCczLjI1cmVtJyl9XG4gIGRpc3BsYXk6IG5vbmU7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogaW5oZXJpdDtcblxuICBvdXRsaW5lOiBub25lO1xuXG4gICY6aG92ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAuMDUpO1xuICB9XG5cbiAgJHttZWRpYU1vYmlsZX0ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG5gO1xuXG5pbnRlcmZhY2UgQ29udGVudFByb3BzIHtcbiAgY29sb3I/OiBDb2xvclR5cGU7XG4gIHNob3c/OiBib29sZWFuO1xuICBhbGlnbj86ICdsZWZ0JyB8ICdyaWdodCc7XG59XG5cbmNvbnN0IE5hdkNvbnRlbnQgPSBzdHlsZWQuZGl2PENvbnRlbnRQcm9wcz5gXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1iYXNpczogYXV0bztcbiAgZmxleC1ncm93OiAxO1xuXG4gICYgPiB1bCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgZmxleC1ncm93OiAxO1xuICAgIGp1c3RpZnktY29udGVudDogJHtzZXRBbGlnbn07XG5cbiAgICBsaSB7XG4gICAgICBwYWRkaW5nOiAwIDAuNzVyZW07XG4gICAgfVxuICB9XG5cbiAgJiA+IGRpdiwgJiA+IHNwYW4sICYgPiBmb3JtIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgICR7KHsgY29sb3IgfSkgPT4gKGNvbG9yID8gYGNvbG9yOiAke2NvbG9yfTtgIDogJycpfVxuICB9XG5cbiAgJHttZWRpYU1vYmlsZX0ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG5cbiAgICBwYWRkaW5nLWJvdHRvbTogMC41cmVtO1xuXG4gICAgYnV0dG9uOm5vdCguYWN0aXZlKSsmIHtcbiAgICAgIGRpc3BsYXk6bm9uZTtcbiAgICB9XG5cbiAgICAmID4gdWwge1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgbGkge1xuICAgICAgICBwYWRkaW5nOiAuNXJlbSAwO1xuICAgICAgfVxuICAgIH1cblxuICAgICYgPiBkaXYsICYgPiBzcGFuLCAmID4gZm9ybSB7XG4gICAgICBwYWRkaW5nOiAuNXJlbSAwO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICB9XG5gO1xuXG5cbmludGVyZmFjZSBQcm9wcyBleHRlbmRzIEhUTUxBdHRyaWJ1dGVzPEhUTUxEaXZFbGVtZW50PiB7XG4gIC8qKiBiYWNrZ3JvdW5k6ImyICovXG4gIGNvbG9yPzogQ29sb3JUeXBlO1xuICAvKiog44Ot44K044Gu44Kk44Oh44O844K444CB44OX44Ot44K444Kn44Kv44OI5ZCN44Gq44GpICovXG4gIGJyYW5kPzogUmVhY3QuUmVhY3RFbGVtZW50PGFueT4gfCBzdHJpbmc7XG4gIC8qKiDlrprnvqnjgZXjgozjgZ/kvY3nva7jgpLlm7rlrprjgavjgZnjgosgKi9cbiAgZml4ZWQ/OiBib29sZWFuO1xuICAvKiogKElFMTHkuI3lj68p55S76Z2i44GM44K544Kv44Ot44O844Or44GV44KM44Gm44KC5LiK44Gn6LK844KK5LuY44GR44GE44KL44KI44GG44Gr44GZ44KLICovXG4gIHN0aWNreT86IGJvb2xlYW47XG4gIC8qKiDkuK3lpK7kuKbjgbPjgYvjgonoh6rli5XluYXjgafooajnpLrjgZfjgb7jgZkgKi9cbiAgZmx1aWQ/OiBib29sZWFuO1xuICAvKiog6IOM5pmv44GMYmx1cuOBleOCjOOBvuOBme+8iHNhZmFyaeWwgueUqOOAgeS7luOBr+mAj+aYjuW6pu+8iSAqL1xuICBiYWNrZHJvcD86IGJvb2xlYW47XG4gIC8qKiBjaGlsZHJlbuOBq+Wumue+qeOBmeOCi0VsZW1lbnTjga7kuKbjgbPpoIbjgpLmjIflrprjgZfjgb7jgZnjgILmnKrlrprnvqnjga/oh6rli5XkuKbjgbMgKi9cbiAgYWxpZ24/OiAnbGVmdCcgfCAncmlnaHQnO1xuICAvKiog44Kr44K544K/44OgQ1NT5a6a576pICovXG4gIGNzcz86IENTU1R5cGU7XG59XG5cbnR5cGUgU3RhdGUgPSB7XG4gIHNob3c6IGJvb2xlYW4sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcHBCYXIgZXh0ZW5kcyBQdXJlQ29tcG9uZW50PFByb3BzLCBTdGF0ZT4ge1xuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGNvbG9yOiBudWxsLFxuICAgIGJyYW5kOiBudWxsLFxuICAgIGZpeGVkOiBmYWxzZSxcbiAgICBzdGlja3k6IGZhbHNlLFxuICAgIGZsdWlkOiBmYWxzZSxcbiAgICBiYWNrZHJvcDogZmFsc2UsXG4gIH07XG5cbiAgc3RhdGUgPSB7IHNob3c6IGZhbHNlIH07XG5cbiAgdG9nZ2xlTWVudSA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgc2hvdzogIXRoaXMuc3RhdGUuc2hvdyB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNoaWxkcmVuLCBhbGlnbiwgYnJhbmQsIC4uLnJlc3QgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBzaG93IH0gPSB0aGlzLnN0YXRlO1xuICAgIHJldHVybiAoXG4gICAgICA8TmF2QmFyXG4gICAgICAgIHJvbGU9XCJuYXZpZ2F0aW9uXCJcbiAgICAgICAgey4uLnJlc3R9XG4gICAgICA+XG4gICAgICAgIHticmFuZH1cbiAgICAgICAgPEJ1cmdlciBjbGFzc05hbWU9e3Nob3cgPyAnYWN0aXZlJyA6ICcnfSBvbkNsaWNrPXt0aGlzLnRvZ2dsZU1lbnV9PlxuICAgICAgICAgIDxzcGFuIC8+XG4gICAgICAgICAgPHNwYW4gLz5cbiAgICAgICAgICA8c3BhbiAvPlxuICAgICAgICA8L0J1cmdlcj5cbiAgICAgICAgPE5hdkNvbnRlbnQgYWxpZ249e2FsaWdufT5cbiAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvTmF2Q29udGVudD5cbiAgICAgIDwvTmF2QmFyPlxuICAgICk7XG4gIH1cbn1cbiIsImltcG9ydCBSZWFjdCwgeyBIVE1MQXR0cmlidXRlcywgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQsIHsgY3NzIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IGRhcmtlbiBmcm9tICdwb2xpc2hlZC9saWIvY29sb3IvZGFya2VuJztcbmltcG9ydCBmaW5kQ29sb3JJbnZlcnQgZnJvbSAnLi4vLi4vdXRpbHMvZmluZENvbG9ySW52ZXJ0JztcbmltcG9ydCB7IENvbG9yVHlwZSwgVGhlbWVUeXBlLCBDU1NUeXBlIH0gZnJvbSAnLi4vLi4vdHlwZXMnO1xuXG5pbnRlcmZhY2UgV3JhcHBlclByb3BzIHtcbiAgY29sb3I/OiBDb2xvclR5cGU7XG4gIGFkZG9uQ29sb3I/OiBDb2xvclR5cGU7XG4gIGNsb3NlOiBib29sZWFuO1xuICBjc3M/OiBDU1NUeXBlO1xufVxuXG5mdW5jdGlvbiBnZXRDb2xvcih0aGVtZTogVGhlbWVUeXBlLCBjb2xvcj86IENvbG9yVHlwZSkge1xuICByZXR1cm4gKCFjb2xvciB8fCBjb2xvciA9PT0gJ2xpZ2h0JykgPyB0aGVtZS5iYWNrZ3JvdW5kIDogdGhlbWVbY29sb3JdO1xufVxuXG5mdW5jdGlvbiBzZXRDb2xvcih7IHRoZW1lLCBjb2xvciwgYWRkb25Db2xvciB9OlxuICAgIHsgdGhlbWU6IFRoZW1lVHlwZSwgY29sb3I/OiBDb2xvclR5cGUsIGFkZG9uQ29sb3I/OiBDb2xvclR5cGUgfSkge1xuICBjb25zdCB0YXJnZXQgPSBnZXRDb2xvcih0aGVtZSwgY29sb3IpO1xuICBjb25zdCBpbnZlcnRDb2xvciA9IGZpbmRDb2xvckludmVydCh0aGVtZSwgdGFyZ2V0KTtcblxuICBjb25zdCBzdWJDb2xvciA9IGFkZG9uQ29sb3IgPyBnZXRDb2xvcih0aGVtZSwgYWRkb25Db2xvcikgOiBkYXJrZW4oMC4wNSwgdGFyZ2V0KTtcblxuICByZXR1cm4gY3NzYFxuICAgIGNvbG9yOiAke2ludmVydENvbG9yfTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RhcmdldH07XG5cbiAgICBhLCBzcGFuIHtcbiAgICAgIGNvbG9yOiAke2ludmVydENvbG9yfTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7c3ViQ29sb3J9O1xuICAgIH1cblxuICAgIGE6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtkYXJrZW4oMC4wNSwgc3ViQ29sb3IpfTtcbiAgICB9XG4gIGA7XG59XG5cbmNvbnN0IFdyYXBwZXIgPSBzdHlsZWQuZGl2PFdyYXBwZXJQcm9wcz5gXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBmb250LXNpemU6IDAuNzVyZW07XG4gIGN1cnNvcjogZGVmYXVsdDtcbiAgcGFkZGluZzogMCAuNXJlbTtcbiAgaGVpZ2h0OiAyZW07XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBsaW5lLWhlaWdodDogMS41O1xuXG4gICR7c2V0Q29sb3J9XG5cbiAgJjpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcbiAgfVxuXG4gIGEsIHNwYW4ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICBmbGV4LWdyb3c6IDA7XG4gICAgZmxleC1zaHJpbms6IDA7XG4gICAgbWluLXdpZHRoOiAxLjVyZW07XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1hcmdpbi1yaWdodDogLTAuNXJlbTtcbiAgICBtYXJnaW4tbGVmdDogMC41cmVtO1xuICAgIHBhZGRpbmc6IDAgLjVyZW07XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogM3B4O1xuICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDNweDtcbiAgICB9XG5cbiAgICAmOmZvY3VzIHtcbiAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgfVxuXG4gICAgJHtwcm9wcyA9PiAocHJvcHMuY2xvc2UgPyBjc3NgXG4gICAgICAmOmJlZm9yZSwgJjphZnRlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGN1cnJlbnRDb2xvcjtcbiAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoLTUwJSkgcm90YXRlKDQ1ZGVnKTtcbiAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGNlbnRlcjtcbiAgICAgIH1cblxuICAgICAgJjpiZWZvcmUge1xuICAgICAgICBoZWlnaHQ6IDFweDtcbiAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgIH1cblxuICAgICAgJjphZnRlciB7XG4gICAgICAgIGhlaWdodDogNTAlO1xuICAgICAgICB3aWR0aDogMXB4O1xuICAgICAgfVxuXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgIH1cbiAgICBgIDogJycpfVxuICB9XG5cbiAgJHsoeyBjc3MgfSkgPT4gY3NzIHx8ICcnfVxuYDtcblxuaW50ZXJmYWNlIFByb3BzIGV4dGVuZHMgSFRNTEF0dHJpYnV0ZXM8SFRNTERpdkVsZW1lbnQ+IHtcbiAgLyoqIOOCv+OCsOOBruWGheWuuSAqL1xuICBjaGlsZHJlbjogYW55O1xuICAvKiogWOODnOOCv+ODs+OBrui/veWKoO+8i+OCr+ODquODg+OCr+aZguOBruOCpOODmeODs+ODiOODj+ODs+ODieODqeODvCAqL1xuICBvbkNsb3NlPzogKCkgPT4gdm9pZDtcbiAgLyoqIOOCr+ODquODg+OCr+aZguOBruOCpOODmeODs+ODiOODj+ODs+ODieODqeODvCAqL1xuICBvbkNsaWNrPzogKCkgPT4gdm9pZDtcbiAgLyoqIOiJsuOBruaMh+WumiAqL1xuICBjb2xvcj86IENvbG9yVHlwZTtcbiAgLyoqIOOCq+OCueOCv+ODoENTU+Wumue+qSAqL1xuICBjc3M/OiBDU1NUeXBlO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUYWcgZXh0ZW5kcyBQdXJlQ29tcG9uZW50PFByb3BzPiB7XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgY2hpbGRyZW46IG51bGwsXG4gICAgb25DbG9zZTogbnVsbCxcbiAgICBvbkNsaWNrOiBudWxsLFxuICAgIGNvbG9yOiBudWxsLFxuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNoaWxkcmVuLCBvbkNsb3NlLCAuLi5yZXN0IH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8V3JhcHBlciBjbG9zZT17b25DbG9zZSAhPT0gbnVsbH0gey4uLnJlc3R9PlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIHtvbkNsb3NlICYmICg8YSB0YWJJbmRleD17MH0gcm9sZT1cImxpbmtcIiBvbkNsaWNrPXtvbkNsb3NlfT4mbmJzcDs8L2E+KX1cbiAgICAgIDwvV3JhcHBlcj5cbiAgICApO1xuICB9XG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgSFRNTEF0dHJpYnV0ZXMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkLCB7IGNzcyB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBDb250YWluZXIgZnJvbSAnLi4vR3JpZC9Db250YWluZXInO1xuaW1wb3J0IGZpbmRDb2xvckludmVydCBmcm9tICcuLi8uLi91dGlscy9maW5kQ29sb3JJbnZlcnQnO1xuaW1wb3J0IHsgbWVkaWFEZXNrdG9wIH0gZnJvbSAnLi4vLi4vdXRpbHMvbWVkaWEnO1xuaW1wb3J0IHsgQ29sb3JUeXBlLCBUaGVtZVR5cGUsIFNpemVUeXBlIH0gZnJvbSAnLi4vLi4vdHlwZXMnO1xuXG5pbnRlcmZhY2UgUHJvcHMgZXh0ZW5kcyBIVE1MQXR0cmlidXRlczxIVE1MRGl2RWxlbWVudD4ge1xuICAvKiog6IOM5pmv44Gu6ImyICovXG4gIGNvbG9yPzogQ29sb3JUeXBlO1xuICAvKiogc21hbGwgfCBtZWRpdW0gfCBsYXJnZSB8IGZ1bGwgKi9cbiAgc2l6ZT86IFNpemVUeXBlIHwgJ2Z1bGwnO1xuICAvKiogICovXG4gIGNoaWxkcmVuPzogUmVhY3QuUmVhY3RDaGlsZDtcbiAgLyoqIGNoaWxkcmVu44Gu5Lit5aSu5o+D44GIICovXG4gIGNlbnRlcj86IGJvb2xlYW47XG4gIC8qKiDjgqvjgrnjgr/jg6Djg5jjg4Pjg4Djg7wgKi9cbiAgaGVhZGVyPzogUmVhY3QuUmVhY3RFbGVtZW50PGFueT47XG59XG5cbmZ1bmN0aW9uIHNldENvbG9yKHsgY29sb3IsIHRoZW1lIH06IHsgY29sb3I/OiBDb2xvclR5cGUsIHRoZW1lOiBUaGVtZVR5cGUgfSkge1xuICBpZiAoIWNvbG9yKSByZXR1cm4gJyc7XG5cbiAgY29uc3QgdGFyZ2V0ID0gdGhlbWVbY29sb3JdIHx8IGNvbG9yO1xuICBjb25zdCBpbnZlcnRDb2xvciA9IGZpbmRDb2xvckludmVydCh0aGVtZSwgdGFyZ2V0KTtcbiAgcmV0dXJuIGNzc2BiYWNrZ3JvdW5kLWNvbG9yOiAke3RhcmdldH07IGNvbG9yOiAke2ludmVydENvbG9yfTtgO1xufVxuXG5mdW5jdGlvbiBzZXRTaXplKHsgc2l6ZSwgdGhlbWUgfTogeyBzaXplPzogU2l6ZVR5cGUgfCAnZnVsbCcsIHRoZW1lOiBUaGVtZVR5cGUgfSkge1xuICBpZiAoIXNpemUgfHwgc2l6ZSA9PT0gJ3NtYWxsJykgcmV0dXJuICcnO1xuXG4gIHN3aXRjaCAoc2l6ZSkge1xuICAgIGNhc2UgJ21lZGl1bScgOlxuICAgICAgcmV0dXJuIGNzc2BwYWRkaW5nLWJvdHRvbTogOXJlbTsgcGFkZGluZy10b3A6IDlyZW07YDtcbiAgICBjYXNlICdsYXJnZScgOlxuICAgICAgcmV0dXJuIGNzc2BwYWRkaW5nLWJvdHRvbTogMThyZW07IHBhZGRpbmctdG9wOiAxOHJlbTtgO1xuICAgIGNhc2UgJ2Z1bGwnIDpcbiAgICAgIHJldHVybiBjc3NgXG4gICAgICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuXG4gICAgICAgICR7Qm9keX0ge1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgfVxuICAgICAgYDtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuICcnO1xuICB9XG59XG5cbmludGVyZmFjZSBCb2R5UHJvcHMge1xuICBjZW50ZXI/OiBib29sZWFuO1xufVxuXG5jb25zdCBCb2R5ID0gc3R5bGVkLmRpdjxCb2R5UHJvcHM+YFxuICBmbGV4LWdyb3c6IDE7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICBwYWRkaW5nOiAzcmVtIDEuNXJlbTtcblxuICAkeyh7IGNlbnRlciB9KSA9PiBjZW50ZXIgPyAndGV4dC1hbGlnbjogY2VudGVyOycgOiAnJ31cblxuICBoMSB7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgbGluZS1oZWlnaHQ6IDEuMTI1O1xuXG4gICAgJjpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcbiAgICB9XG4gIH1cblxuICBoMiB7XG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgbGluZS1oZWlnaHQ6IDEuMjU7XG4gIH1cblxuICBoMStoMiB7XG4gICAgbWFyZ2luLXRvcDogLTEuMjVyZW07XG4gIH1cbmA7XG5cbmludGVyZmFjZSBXcmFwcGVyUHJvcHMge1xuICBjb2xvcj86IENvbG9yVHlwZTtcbiAgc2l6ZT86IFNpemVUeXBlIHwgJ2Z1bGwnO1xufVxuXG5jb25zdCBXcmFwcGVyID0gc3R5bGVkLmRpdjxXcmFwcGVyUHJvcHM+YFxuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAke3NldENvbG9yfVxuICAke3NldFNpemV9XG5cbiAgaGVhZGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xuICAgIGNvbG9yOiBpbmhlcml0O1xuICB9XG5cbiAgaGVhZGVyKyR7Qm9keX0ge1xuICAgIG1hcmdpbi10b3A6IDMuMjVyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMy4yNXJlbTtcbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGVybyh7IGNoaWxkcmVuLCBjb2xvciwgc2l6ZSwgY2VudGVyLCBoZWFkZXIsIC4uLnJlc3QgfTogUHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8V3JhcHBlciBjb2xvcj17Y29sb3J9IHNpemU9e3NpemV9IHsuLi5yZXN0fT5cbiAgICAgIHtoZWFkZXJ9XG4gICAgICA8Qm9keSBjZW50ZXI9e2NlbnRlcn0+XG4gICAgICAgIDxDb250YWluZXI+XG4gICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgIDwvQm9keT5cbiAgICA8L1dyYXBwZXI+XG4gICk7XG59XG4iLCIvKiogQGxpY2Vuc2UgUmVhY3QgdjE2LjguMVxuICogcmVhY3QtaXMucHJvZHVjdGlvbi5taW4uanNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7XG52YXIgYj1cImZ1bmN0aW9uXCI9PT10eXBlb2YgU3ltYm9sJiZTeW1ib2wuZm9yLGM9Yj9TeW1ib2wuZm9yKFwicmVhY3QuZWxlbWVudFwiKTo2MDEwMyxkPWI/U3ltYm9sLmZvcihcInJlYWN0LnBvcnRhbFwiKTo2MDEwNixlPWI/U3ltYm9sLmZvcihcInJlYWN0LmZyYWdtZW50XCIpOjYwMTA3LGY9Yj9TeW1ib2wuZm9yKFwicmVhY3Quc3RyaWN0X21vZGVcIik6NjAxMDgsZz1iP1N5bWJvbC5mb3IoXCJyZWFjdC5wcm9maWxlclwiKTo2MDExNCxoPWI/U3ltYm9sLmZvcihcInJlYWN0LnByb3ZpZGVyXCIpOjYwMTA5LGs9Yj9TeW1ib2wuZm9yKFwicmVhY3QuY29udGV4dFwiKTo2MDExMCxsPWI/U3ltYm9sLmZvcihcInJlYWN0LmFzeW5jX21vZGVcIik6NjAxMTEsbT1iP1N5bWJvbC5mb3IoXCJyZWFjdC5jb25jdXJyZW50X21vZGVcIik6NjAxMTEsbj1iP1N5bWJvbC5mb3IoXCJyZWFjdC5mb3J3YXJkX3JlZlwiKTo2MDExMixwPWI/U3ltYm9sLmZvcihcInJlYWN0LnN1c3BlbnNlXCIpOjYwMTEzLHE9Yj9TeW1ib2wuZm9yKFwicmVhY3QubWVtb1wiKTpcbjYwMTE1LHI9Yj9TeW1ib2wuZm9yKFwicmVhY3QubGF6eVwiKTo2MDExNjtmdW5jdGlvbiB0KGEpe2lmKFwib2JqZWN0XCI9PT10eXBlb2YgYSYmbnVsbCE9PWEpe3ZhciB1PWEuJCR0eXBlb2Y7c3dpdGNoKHUpe2Nhc2UgYzpzd2l0Y2goYT1hLnR5cGUsYSl7Y2FzZSBsOmNhc2UgbTpjYXNlIGU6Y2FzZSBnOmNhc2UgZjpjYXNlIHA6cmV0dXJuIGE7ZGVmYXVsdDpzd2l0Y2goYT1hJiZhLiQkdHlwZW9mLGEpe2Nhc2UgazpjYXNlIG46Y2FzZSBoOnJldHVybiBhO2RlZmF1bHQ6cmV0dXJuIHV9fWNhc2UgcjpjYXNlIHE6Y2FzZSBkOnJldHVybiB1fX19ZnVuY3Rpb24gdihhKXtyZXR1cm4gdChhKT09PW19ZXhwb3J0cy50eXBlT2Y9dDtleHBvcnRzLkFzeW5jTW9kZT1sO2V4cG9ydHMuQ29uY3VycmVudE1vZGU9bTtleHBvcnRzLkNvbnRleHRDb25zdW1lcj1rO2V4cG9ydHMuQ29udGV4dFByb3ZpZGVyPWg7ZXhwb3J0cy5FbGVtZW50PWM7ZXhwb3J0cy5Gb3J3YXJkUmVmPW47XG5leHBvcnRzLkZyYWdtZW50PWU7ZXhwb3J0cy5MYXp5PXI7ZXhwb3J0cy5NZW1vPXE7ZXhwb3J0cy5Qb3J0YWw9ZDtleHBvcnRzLlByb2ZpbGVyPWc7ZXhwb3J0cy5TdHJpY3RNb2RlPWY7ZXhwb3J0cy5TdXNwZW5zZT1wO2V4cG9ydHMuaXNWYWxpZEVsZW1lbnRUeXBlPWZ1bmN0aW9uKGEpe3JldHVyblwic3RyaW5nXCI9PT10eXBlb2YgYXx8XCJmdW5jdGlvblwiPT09dHlwZW9mIGF8fGE9PT1lfHxhPT09bXx8YT09PWd8fGE9PT1mfHxhPT09cHx8XCJvYmplY3RcIj09PXR5cGVvZiBhJiZudWxsIT09YSYmKGEuJCR0eXBlb2Y9PT1yfHxhLiQkdHlwZW9mPT09cXx8YS4kJHR5cGVvZj09PWh8fGEuJCR0eXBlb2Y9PT1rfHxhLiQkdHlwZW9mPT09bil9O2V4cG9ydHMuaXNBc3luY01vZGU9ZnVuY3Rpb24oYSl7cmV0dXJuIHYoYSl8fHQoYSk9PT1sfTtleHBvcnRzLmlzQ29uY3VycmVudE1vZGU9djtleHBvcnRzLmlzQ29udGV4dENvbnN1bWVyPWZ1bmN0aW9uKGEpe3JldHVybiB0KGEpPT09a307XG5leHBvcnRzLmlzQ29udGV4dFByb3ZpZGVyPWZ1bmN0aW9uKGEpe3JldHVybiB0KGEpPT09aH07ZXhwb3J0cy5pc0VsZW1lbnQ9ZnVuY3Rpb24oYSl7cmV0dXJuXCJvYmplY3RcIj09PXR5cGVvZiBhJiZudWxsIT09YSYmYS4kJHR5cGVvZj09PWN9O2V4cG9ydHMuaXNGb3J3YXJkUmVmPWZ1bmN0aW9uKGEpe3JldHVybiB0KGEpPT09bn07ZXhwb3J0cy5pc0ZyYWdtZW50PWZ1bmN0aW9uKGEpe3JldHVybiB0KGEpPT09ZX07ZXhwb3J0cy5pc0xhenk9ZnVuY3Rpb24oYSl7cmV0dXJuIHQoYSk9PT1yfTtleHBvcnRzLmlzTWVtbz1mdW5jdGlvbihhKXtyZXR1cm4gdChhKT09PXF9O2V4cG9ydHMuaXNQb3J0YWw9ZnVuY3Rpb24oYSl7cmV0dXJuIHQoYSk9PT1kfTtleHBvcnRzLmlzUHJvZmlsZXI9ZnVuY3Rpb24oYSl7cmV0dXJuIHQoYSk9PT1nfTtleHBvcnRzLmlzU3RyaWN0TW9kZT1mdW5jdGlvbihhKXtyZXR1cm4gdChhKT09PWZ9O1xuZXhwb3J0cy5pc1N1c3BlbnNlPWZ1bmN0aW9uKGEpe3JldHVybiB0KGEpPT09cH07XG4iLCIvKiogQGxpY2Vuc2UgUmVhY3QgdjE2LjguMVxuICogcmVhY3QtaXMuZGV2ZWxvcG1lbnQuanNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cblxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIChmdW5jdGlvbigpIHtcbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxuLy8gVGhlIFN5bWJvbCB1c2VkIHRvIHRhZyB0aGUgUmVhY3RFbGVtZW50LWxpa2UgdHlwZXMuIElmIHRoZXJlIGlzIG5vIG5hdGl2ZSBTeW1ib2xcbi8vIG5vciBwb2x5ZmlsbCwgdGhlbiBhIHBsYWluIG51bWJlciBpcyB1c2VkIGZvciBwZXJmb3JtYW5jZS5cbnZhciBoYXNTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC5mb3I7XG5cbnZhciBSRUFDVF9FTEVNRU5UX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5lbGVtZW50JykgOiAweGVhYzc7XG52YXIgUkVBQ1RfUE9SVEFMX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5wb3J0YWwnKSA6IDB4ZWFjYTtcbnZhciBSRUFDVF9GUkFHTUVOVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuZnJhZ21lbnQnKSA6IDB4ZWFjYjtcbnZhciBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3Quc3RyaWN0X21vZGUnKSA6IDB4ZWFjYztcbnZhciBSRUFDVF9QUk9GSUxFUl9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QucHJvZmlsZXInKSA6IDB4ZWFkMjtcbnZhciBSRUFDVF9QUk9WSURFUl9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QucHJvdmlkZXInKSA6IDB4ZWFjZDtcbnZhciBSRUFDVF9DT05URVhUX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5jb250ZXh0JykgOiAweGVhY2U7XG52YXIgUkVBQ1RfQVNZTkNfTU9ERV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuYXN5bmNfbW9kZScpIDogMHhlYWNmO1xudmFyIFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuY29uY3VycmVudF9tb2RlJykgOiAweGVhY2Y7XG52YXIgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmZvcndhcmRfcmVmJykgOiAweGVhZDA7XG52YXIgUkVBQ1RfU1VTUEVOU0VfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnN1c3BlbnNlJykgOiAweGVhZDE7XG52YXIgUkVBQ1RfTUVNT19UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QubWVtbycpIDogMHhlYWQzO1xudmFyIFJFQUNUX0xBWllfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmxhenknKSA6IDB4ZWFkNDtcblxuZnVuY3Rpb24gaXNWYWxpZEVsZW1lbnRUeXBlKHR5cGUpIHtcbiAgcmV0dXJuIHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJyB8fFxuICAvLyBOb3RlOiBpdHMgdHlwZW9mIG1pZ2h0IGJlIG90aGVyIHRoYW4gJ3N5bWJvbCcgb3IgJ251bWJlcicgaWYgaXQncyBhIHBvbHlmaWxsLlxuICB0eXBlID09PSBSRUFDVF9GUkFHTUVOVF9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1BST0ZJTEVSX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVVNQRU5TRV9UWVBFIHx8IHR5cGVvZiB0eXBlID09PSAnb2JqZWN0JyAmJiB0eXBlICE9PSBudWxsICYmICh0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9MQVpZX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTUVNT19UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX1BST1ZJREVSX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfQ09OVEVYVF9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUpO1xufVxuXG4vKipcbiAqIEZvcmtlZCBmcm9tIGZianMvd2FybmluZzpcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9mYmpzL2Jsb2IvZTY2YmEyMGFkNWJlNDMzZWI1NDQyM2YyYjA5N2Q4MjkzMjRkOWRlNi9wYWNrYWdlcy9mYmpzL3NyYy9fX2ZvcmtzX18vd2FybmluZy5qc1xuICpcbiAqIE9ubHkgY2hhbmdlIGlzIHdlIHVzZSBjb25zb2xlLndhcm4gaW5zdGVhZCBvZiBjb25zb2xlLmVycm9yLFxuICogYW5kIGRvIG5vdGhpbmcgd2hlbiAnY29uc29sZScgaXMgbm90IHN1cHBvcnRlZC5cbiAqIFRoaXMgcmVhbGx5IHNpbXBsaWZpZXMgdGhlIGNvZGUuXG4gKiAtLS1cbiAqIFNpbWlsYXIgdG8gaW52YXJpYW50IGJ1dCBvbmx5IGxvZ3MgYSB3YXJuaW5nIGlmIHRoZSBjb25kaXRpb24gaXMgbm90IG1ldC5cbiAqIFRoaXMgY2FuIGJlIHVzZWQgdG8gbG9nIGlzc3VlcyBpbiBkZXZlbG9wbWVudCBlbnZpcm9ubWVudHMgaW4gY3JpdGljYWxcbiAqIHBhdGhzLiBSZW1vdmluZyB0aGUgbG9nZ2luZyBjb2RlIGZvciBwcm9kdWN0aW9uIGVudmlyb25tZW50cyB3aWxsIGtlZXAgdGhlXG4gKiBzYW1lIGxvZ2ljIGFuZCBmb2xsb3cgdGhlIHNhbWUgY29kZSBwYXRocy5cbiAqL1xuXG52YXIgbG93UHJpb3JpdHlXYXJuaW5nID0gZnVuY3Rpb24gKCkge307XG5cbntcbiAgdmFyIHByaW50V2FybmluZyA9IGZ1bmN0aW9uIChmb3JtYXQpIHtcbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHZhciBhcmdJbmRleCA9IDA7XG4gICAgdmFyIG1lc3NhZ2UgPSAnV2FybmluZzogJyArIGZvcm1hdC5yZXBsYWNlKC8lcy9nLCBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gYXJnc1thcmdJbmRleCsrXTtcbiAgICB9KTtcbiAgICBpZiAodHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25zb2xlLndhcm4obWVzc2FnZSk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAvLyAtLS0gV2VsY29tZSB0byBkZWJ1Z2dpbmcgUmVhY3QgLS0tXG4gICAgICAvLyBUaGlzIGVycm9yIHdhcyB0aHJvd24gYXMgYSBjb252ZW5pZW5jZSBzbyB0aGF0IHlvdSBjYW4gdXNlIHRoaXMgc3RhY2tcbiAgICAgIC8vIHRvIGZpbmQgdGhlIGNhbGxzaXRlIHRoYXQgY2F1c2VkIHRoaXMgd2FybmluZyB0byBmaXJlLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgIH0gY2F0Y2ggKHgpIHt9XG4gIH07XG5cbiAgbG93UHJpb3JpdHlXYXJuaW5nID0gZnVuY3Rpb24gKGNvbmRpdGlvbiwgZm9ybWF0KSB7XG4gICAgaWYgKGZvcm1hdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2Bsb3dQcmlvcml0eVdhcm5pbmcoY29uZGl0aW9uLCBmb3JtYXQsIC4uLmFyZ3MpYCByZXF1aXJlcyBhIHdhcm5pbmcgJyArICdtZXNzYWdlIGFyZ3VtZW50Jyk7XG4gICAgfVxuICAgIGlmICghY29uZGl0aW9uKSB7XG4gICAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuMiA+IDIgPyBfbGVuMiAtIDIgOiAwKSwgX2tleTIgPSAyOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICAgIGFyZ3NbX2tleTIgLSAyXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgICB9XG5cbiAgICAgIHByaW50V2FybmluZy5hcHBseSh1bmRlZmluZWQsIFtmb3JtYXRdLmNvbmNhdChhcmdzKSk7XG4gICAgfVxuICB9O1xufVxuXG52YXIgbG93UHJpb3JpdHlXYXJuaW5nJDEgPSBsb3dQcmlvcml0eVdhcm5pbmc7XG5cbmZ1bmN0aW9uIHR5cGVPZihvYmplY3QpIHtcbiAgaWYgKHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmIG9iamVjdCAhPT0gbnVsbCkge1xuICAgIHZhciAkJHR5cGVvZiA9IG9iamVjdC4kJHR5cGVvZjtcbiAgICBzd2l0Y2ggKCQkdHlwZW9mKSB7XG4gICAgICBjYXNlIFJFQUNUX0VMRU1FTlRfVFlQRTpcbiAgICAgICAgdmFyIHR5cGUgPSBvYmplY3QudHlwZTtcblxuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICBjYXNlIFJFQUNUX0FTWU5DX01PREVfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfRlJBR01FTlRfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1BST0ZJTEVSX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfVFlQRTpcbiAgICAgICAgICAgIHJldHVybiB0eXBlO1xuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICB2YXIgJCR0eXBlb2ZUeXBlID0gdHlwZSAmJiB0eXBlLiQkdHlwZW9mO1xuXG4gICAgICAgICAgICBzd2l0Y2ggKCQkdHlwZW9mVHlwZSkge1xuICAgICAgICAgICAgICBjYXNlIFJFQUNUX0NPTlRFWFRfVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX1BST1ZJREVSX1RZUEU6XG4gICAgICAgICAgICAgICAgcmV0dXJuICQkdHlwZW9mVHlwZTtcbiAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gJCR0eXBlb2Y7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIGNhc2UgUkVBQ1RfTEFaWV9UWVBFOlxuICAgICAgY2FzZSBSRUFDVF9NRU1PX1RZUEU6XG4gICAgICBjYXNlIFJFQUNUX1BPUlRBTF9UWVBFOlxuICAgICAgICByZXR1cm4gJCR0eXBlb2Y7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cblxuLy8gQXN5bmNNb2RlIGlzIGRlcHJlY2F0ZWQgYWxvbmcgd2l0aCBpc0FzeW5jTW9kZVxudmFyIEFzeW5jTW9kZSA9IFJFQUNUX0FTWU5DX01PREVfVFlQRTtcbnZhciBDb25jdXJyZW50TW9kZSA9IFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFO1xudmFyIENvbnRleHRDb25zdW1lciA9IFJFQUNUX0NPTlRFWFRfVFlQRTtcbnZhciBDb250ZXh0UHJvdmlkZXIgPSBSRUFDVF9QUk9WSURFUl9UWVBFO1xudmFyIEVsZW1lbnQgPSBSRUFDVF9FTEVNRU5UX1RZUEU7XG52YXIgRm9yd2FyZFJlZiA9IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU7XG52YXIgRnJhZ21lbnQgPSBSRUFDVF9GUkFHTUVOVF9UWVBFO1xudmFyIExhenkgPSBSRUFDVF9MQVpZX1RZUEU7XG52YXIgTWVtbyA9IFJFQUNUX01FTU9fVFlQRTtcbnZhciBQb3J0YWwgPSBSRUFDVF9QT1JUQUxfVFlQRTtcbnZhciBQcm9maWxlciA9IFJFQUNUX1BST0ZJTEVSX1RZUEU7XG52YXIgU3RyaWN0TW9kZSA9IFJFQUNUX1NUUklDVF9NT0RFX1RZUEU7XG52YXIgU3VzcGVuc2UgPSBSRUFDVF9TVVNQRU5TRV9UWVBFO1xuXG52YXIgaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNBc3luY01vZGUgPSBmYWxzZTtcblxuLy8gQXN5bmNNb2RlIHNob3VsZCBiZSBkZXByZWNhdGVkXG5mdW5jdGlvbiBpc0FzeW5jTW9kZShvYmplY3QpIHtcbiAge1xuICAgIGlmICghaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNBc3luY01vZGUpIHtcbiAgICAgIGhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQXN5bmNNb2RlID0gdHJ1ZTtcbiAgICAgIGxvd1ByaW9yaXR5V2FybmluZyQxKGZhbHNlLCAnVGhlIFJlYWN0SXMuaXNBc3luY01vZGUoKSBhbGlhcyBoYXMgYmVlbiBkZXByZWNhdGVkLCAnICsgJ2FuZCB3aWxsIGJlIHJlbW92ZWQgaW4gUmVhY3QgMTcrLiBVcGRhdGUgeW91ciBjb2RlIHRvIHVzZSAnICsgJ1JlYWN0SXMuaXNDb25jdXJyZW50TW9kZSgpIGluc3RlYWQuIEl0IGhhcyB0aGUgZXhhY3Qgc2FtZSBBUEkuJyk7XG4gICAgfVxuICB9XG4gIHJldHVybiBpc0NvbmN1cnJlbnRNb2RlKG9iamVjdCkgfHwgdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0FTWU5DX01PREVfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzQ29uY3VycmVudE1vZGUob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEU7XG59XG5mdW5jdGlvbiBpc0NvbnRleHRDb25zdW1lcihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9DT05URVhUX1RZUEU7XG59XG5mdW5jdGlvbiBpc0NvbnRleHRQcm92aWRlcihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9QUk9WSURFUl9UWVBFO1xufVxuZnVuY3Rpb24gaXNFbGVtZW50KG9iamVjdCkge1xuICByZXR1cm4gdHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgJiYgb2JqZWN0ICE9PSBudWxsICYmIG9iamVjdC4kJHR5cGVvZiA9PT0gUkVBQ1RfRUxFTUVOVF9UWVBFO1xufVxuZnVuY3Rpb24gaXNGb3J3YXJkUmVmKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU7XG59XG5mdW5jdGlvbiBpc0ZyYWdtZW50KG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0ZSQUdNRU5UX1RZUEU7XG59XG5mdW5jdGlvbiBpc0xhenkob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfTEFaWV9UWVBFO1xufVxuZnVuY3Rpb24gaXNNZW1vKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX01FTU9fVFlQRTtcbn1cbmZ1bmN0aW9uIGlzUG9ydGFsKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1BPUlRBTF9UWVBFO1xufVxuZnVuY3Rpb24gaXNQcm9maWxlcihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9QUk9GSUxFUl9UWVBFO1xufVxuZnVuY3Rpb24gaXNTdHJpY3RNb2RlKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1NUUklDVF9NT0RFX1RZUEU7XG59XG5mdW5jdGlvbiBpc1N1c3BlbnNlKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1NVU1BFTlNFX1RZUEU7XG59XG5cbmV4cG9ydHMudHlwZU9mID0gdHlwZU9mO1xuZXhwb3J0cy5Bc3luY01vZGUgPSBBc3luY01vZGU7XG5leHBvcnRzLkNvbmN1cnJlbnRNb2RlID0gQ29uY3VycmVudE1vZGU7XG5leHBvcnRzLkNvbnRleHRDb25zdW1lciA9IENvbnRleHRDb25zdW1lcjtcbmV4cG9ydHMuQ29udGV4dFByb3ZpZGVyID0gQ29udGV4dFByb3ZpZGVyO1xuZXhwb3J0cy5FbGVtZW50ID0gRWxlbWVudDtcbmV4cG9ydHMuRm9yd2FyZFJlZiA9IEZvcndhcmRSZWY7XG5leHBvcnRzLkZyYWdtZW50ID0gRnJhZ21lbnQ7XG5leHBvcnRzLkxhenkgPSBMYXp5O1xuZXhwb3J0cy5NZW1vID0gTWVtbztcbmV4cG9ydHMuUG9ydGFsID0gUG9ydGFsO1xuZXhwb3J0cy5Qcm9maWxlciA9IFByb2ZpbGVyO1xuZXhwb3J0cy5TdHJpY3RNb2RlID0gU3RyaWN0TW9kZTtcbmV4cG9ydHMuU3VzcGVuc2UgPSBTdXNwZW5zZTtcbmV4cG9ydHMuaXNWYWxpZEVsZW1lbnRUeXBlID0gaXNWYWxpZEVsZW1lbnRUeXBlO1xuZXhwb3J0cy5pc0FzeW5jTW9kZSA9IGlzQXN5bmNNb2RlO1xuZXhwb3J0cy5pc0NvbmN1cnJlbnRNb2RlID0gaXNDb25jdXJyZW50TW9kZTtcbmV4cG9ydHMuaXNDb250ZXh0Q29uc3VtZXIgPSBpc0NvbnRleHRDb25zdW1lcjtcbmV4cG9ydHMuaXNDb250ZXh0UHJvdmlkZXIgPSBpc0NvbnRleHRQcm92aWRlcjtcbmV4cG9ydHMuaXNFbGVtZW50ID0gaXNFbGVtZW50O1xuZXhwb3J0cy5pc0ZvcndhcmRSZWYgPSBpc0ZvcndhcmRSZWY7XG5leHBvcnRzLmlzRnJhZ21lbnQgPSBpc0ZyYWdtZW50O1xuZXhwb3J0cy5pc0xhenkgPSBpc0xhenk7XG5leHBvcnRzLmlzTWVtbyA9IGlzTWVtbztcbmV4cG9ydHMuaXNQb3J0YWwgPSBpc1BvcnRhbDtcbmV4cG9ydHMuaXNQcm9maWxlciA9IGlzUHJvZmlsZXI7XG5leHBvcnRzLmlzU3RyaWN0TW9kZSA9IGlzU3RyaWN0TW9kZTtcbmV4cG9ydHMuaXNTdXNwZW5zZSA9IGlzU3VzcGVuc2U7XG4gIH0pKCk7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QtaXMucHJvZHVjdGlvbi5taW4uanMnKTtcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QtaXMuZGV2ZWxvcG1lbnQuanMnKTtcbn1cbiIsIi8qXG5vYmplY3QtYXNzaWduXG4oYykgU2luZHJlIFNvcmh1c1xuQGxpY2Vuc2UgTUlUXG4qL1xuXG4ndXNlIHN0cmljdCc7XG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xudmFyIGdldE93blByb3BlcnR5U3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG52YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xudmFyIHByb3BJc0VudW1lcmFibGUgPSBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuXG5mdW5jdGlvbiB0b09iamVjdCh2YWwpIHtcblx0aWYgKHZhbCA9PT0gbnVsbCB8fCB2YWwgPT09IHVuZGVmaW5lZCkge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ09iamVjdC5hc3NpZ24gY2Fubm90IGJlIGNhbGxlZCB3aXRoIG51bGwgb3IgdW5kZWZpbmVkJyk7XG5cdH1cblxuXHRyZXR1cm4gT2JqZWN0KHZhbCk7XG59XG5cbmZ1bmN0aW9uIHNob3VsZFVzZU5hdGl2ZSgpIHtcblx0dHJ5IHtcblx0XHRpZiAoIU9iamVjdC5hc3NpZ24pIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBEZXRlY3QgYnVnZ3kgcHJvcGVydHkgZW51bWVyYXRpb24gb3JkZXIgaW4gb2xkZXIgVjggdmVyc2lvbnMuXG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD00MTE4XG5cdFx0dmFyIHRlc3QxID0gbmV3IFN0cmluZygnYWJjJyk7ICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLW5ldy13cmFwcGVyc1xuXHRcdHRlc3QxWzVdID0gJ2RlJztcblx0XHRpZiAoT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGVzdDEpWzBdID09PSAnNScpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0zMDU2XG5cdFx0dmFyIHRlc3QyID0ge307XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG5cdFx0XHR0ZXN0MlsnXycgKyBTdHJpbmcuZnJvbUNoYXJDb2RlKGkpXSA9IGk7XG5cdFx0fVxuXHRcdHZhciBvcmRlcjIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0ZXN0MikubWFwKGZ1bmN0aW9uIChuKSB7XG5cdFx0XHRyZXR1cm4gdGVzdDJbbl07XG5cdFx0fSk7XG5cdFx0aWYgKG9yZGVyMi5qb2luKCcnKSAhPT0gJzAxMjM0NTY3ODknKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzA1NlxuXHRcdHZhciB0ZXN0MyA9IHt9O1xuXHRcdCdhYmNkZWZnaGlqa2xtbm9wcXJzdCcuc3BsaXQoJycpLmZvckVhY2goZnVuY3Rpb24gKGxldHRlcikge1xuXHRcdFx0dGVzdDNbbGV0dGVyXSA9IGxldHRlcjtcblx0XHR9KTtcblx0XHRpZiAoT2JqZWN0LmtleXMoT2JqZWN0LmFzc2lnbih7fSwgdGVzdDMpKS5qb2luKCcnKSAhPT1cblx0XHRcdFx0J2FiY2RlZmdoaWprbG1ub3BxcnN0Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdHJldHVybiB0cnVlO1xuXHR9IGNhdGNoIChlcnIpIHtcblx0XHQvLyBXZSBkb24ndCBleHBlY3QgYW55IG9mIHRoZSBhYm92ZSB0byB0aHJvdywgYnV0IGJldHRlciB0byBiZSBzYWZlLlxuXHRcdHJldHVybiBmYWxzZTtcblx0fVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNob3VsZFVzZU5hdGl2ZSgpID8gT2JqZWN0LmFzc2lnbiA6IGZ1bmN0aW9uICh0YXJnZXQsIHNvdXJjZSkge1xuXHR2YXIgZnJvbTtcblx0dmFyIHRvID0gdG9PYmplY3QodGFyZ2V0KTtcblx0dmFyIHN5bWJvbHM7XG5cblx0Zm9yICh2YXIgcyA9IDE7IHMgPCBhcmd1bWVudHMubGVuZ3RoOyBzKyspIHtcblx0XHRmcm9tID0gT2JqZWN0KGFyZ3VtZW50c1tzXSk7XG5cblx0XHRmb3IgKHZhciBrZXkgaW4gZnJvbSkge1xuXHRcdFx0aWYgKGhhc093blByb3BlcnR5LmNhbGwoZnJvbSwga2V5KSkge1xuXHRcdFx0XHR0b1trZXldID0gZnJvbVtrZXldO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmIChnZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcblx0XHRcdHN5bWJvbHMgPSBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoZnJvbSk7XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHN5bWJvbHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0aWYgKHByb3BJc0VudW1lcmFibGUuY2FsbChmcm9tLCBzeW1ib2xzW2ldKSkge1xuXHRcdFx0XHRcdHRvW3N5bWJvbHNbaV1dID0gZnJvbVtzeW1ib2xzW2ldXTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiB0bztcbn07XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIFJlYWN0UHJvcFR5cGVzU2VjcmV0ID0gJ1NFQ1JFVF9ET19OT1RfUEFTU19USElTX09SX1lPVV9XSUxMX0JFX0ZJUkVEJztcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdFByb3BUeXBlc1NlY3JldDtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgcHJpbnRXYXJuaW5nID0gZnVuY3Rpb24oKSB7fTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgdmFyIFJlYWN0UHJvcFR5cGVzU2VjcmV0ID0gcmVxdWlyZSgnLi9saWIvUmVhY3RQcm9wVHlwZXNTZWNyZXQnKTtcbiAgdmFyIGxvZ2dlZFR5cGVGYWlsdXJlcyA9IHt9O1xuICB2YXIgaGFzID0gRnVuY3Rpb24uY2FsbC5iaW5kKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkpO1xuXG4gIHByaW50V2FybmluZyA9IGZ1bmN0aW9uKHRleHQpIHtcbiAgICB2YXIgbWVzc2FnZSA9ICdXYXJuaW5nOiAnICsgdGV4dDtcbiAgICBpZiAodHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25zb2xlLmVycm9yKG1lc3NhZ2UpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgLy8gLS0tIFdlbGNvbWUgdG8gZGVidWdnaW5nIFJlYWN0IC0tLVxuICAgICAgLy8gVGhpcyBlcnJvciB3YXMgdGhyb3duIGFzIGEgY29udmVuaWVuY2Ugc28gdGhhdCB5b3UgY2FuIHVzZSB0aGlzIHN0YWNrXG4gICAgICAvLyB0byBmaW5kIHRoZSBjYWxsc2l0ZSB0aGF0IGNhdXNlZCB0aGlzIHdhcm5pbmcgdG8gZmlyZS5cbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICB9IGNhdGNoICh4KSB7fVxuICB9O1xufVxuXG4vKipcbiAqIEFzc2VydCB0aGF0IHRoZSB2YWx1ZXMgbWF0Y2ggd2l0aCB0aGUgdHlwZSBzcGVjcy5cbiAqIEVycm9yIG1lc3NhZ2VzIGFyZSBtZW1vcml6ZWQgYW5kIHdpbGwgb25seSBiZSBzaG93biBvbmNlLlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSB0eXBlU3BlY3MgTWFwIG9mIG5hbWUgdG8gYSBSZWFjdFByb3BUeXBlXG4gKiBAcGFyYW0ge29iamVjdH0gdmFsdWVzIFJ1bnRpbWUgdmFsdWVzIHRoYXQgbmVlZCB0byBiZSB0eXBlLWNoZWNrZWRcbiAqIEBwYXJhbSB7c3RyaW5nfSBsb2NhdGlvbiBlLmcuIFwicHJvcFwiLCBcImNvbnRleHRcIiwgXCJjaGlsZCBjb250ZXh0XCJcbiAqIEBwYXJhbSB7c3RyaW5nfSBjb21wb25lbnROYW1lIE5hbWUgb2YgdGhlIGNvbXBvbmVudCBmb3IgZXJyb3IgbWVzc2FnZXMuXG4gKiBAcGFyYW0gez9GdW5jdGlvbn0gZ2V0U3RhY2sgUmV0dXJucyB0aGUgY29tcG9uZW50IHN0YWNrLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gY2hlY2tQcm9wVHlwZXModHlwZVNwZWNzLCB2YWx1ZXMsIGxvY2F0aW9uLCBjb21wb25lbnROYW1lLCBnZXRTdGFjaykge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGZvciAodmFyIHR5cGVTcGVjTmFtZSBpbiB0eXBlU3BlY3MpIHtcbiAgICAgIGlmIChoYXModHlwZVNwZWNzLCB0eXBlU3BlY05hbWUpKSB7XG4gICAgICAgIHZhciBlcnJvcjtcbiAgICAgICAgLy8gUHJvcCB0eXBlIHZhbGlkYXRpb24gbWF5IHRocm93LiBJbiBjYXNlIHRoZXkgZG8sIHdlIGRvbid0IHdhbnQgdG9cbiAgICAgICAgLy8gZmFpbCB0aGUgcmVuZGVyIHBoYXNlIHdoZXJlIGl0IGRpZG4ndCBmYWlsIGJlZm9yZS4gU28gd2UgbG9nIGl0LlxuICAgICAgICAvLyBBZnRlciB0aGVzZSBoYXZlIGJlZW4gY2xlYW5lZCB1cCwgd2UnbGwgbGV0IHRoZW0gdGhyb3cuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyBpcyBpbnRlbnRpb25hbGx5IGFuIGludmFyaWFudCB0aGF0IGdldHMgY2F1Z2h0LiBJdCdzIHRoZSBzYW1lXG4gICAgICAgICAgLy8gYmVoYXZpb3IgYXMgd2l0aG91dCB0aGlzIHN0YXRlbWVudCBleGNlcHQgd2l0aCBhIGJldHRlciBtZXNzYWdlLlxuICAgICAgICAgIGlmICh0eXBlb2YgdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHZhciBlcnIgPSBFcnJvcihcbiAgICAgICAgICAgICAgKGNvbXBvbmVudE5hbWUgfHwgJ1JlYWN0IGNsYXNzJykgKyAnOiAnICsgbG9jYXRpb24gKyAnIHR5cGUgYCcgKyB0eXBlU3BlY05hbWUgKyAnYCBpcyBpbnZhbGlkOyAnICtcbiAgICAgICAgICAgICAgJ2l0IG11c3QgYmUgYSBmdW5jdGlvbiwgdXN1YWxseSBmcm9tIHRoZSBgcHJvcC10eXBlc2AgcGFja2FnZSwgYnV0IHJlY2VpdmVkIGAnICsgdHlwZW9mIHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdICsgJ2AuJ1xuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGVyci5uYW1lID0gJ0ludmFyaWFudCBWaW9sYXRpb24nO1xuICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlcnJvciA9IHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdKHZhbHVlcywgdHlwZVNwZWNOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgbnVsbCwgUmVhY3RQcm9wVHlwZXNTZWNyZXQpO1xuICAgICAgICB9IGNhdGNoIChleCkge1xuICAgICAgICAgIGVycm9yID0gZXg7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVycm9yICYmICEoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikpIHtcbiAgICAgICAgICBwcmludFdhcm5pbmcoXG4gICAgICAgICAgICAoY29tcG9uZW50TmFtZSB8fCAnUmVhY3QgY2xhc3MnKSArICc6IHR5cGUgc3BlY2lmaWNhdGlvbiBvZiAnICtcbiAgICAgICAgICAgIGxvY2F0aW9uICsgJyBgJyArIHR5cGVTcGVjTmFtZSArICdgIGlzIGludmFsaWQ7IHRoZSB0eXBlIGNoZWNrZXIgJyArXG4gICAgICAgICAgICAnZnVuY3Rpb24gbXVzdCByZXR1cm4gYG51bGxgIG9yIGFuIGBFcnJvcmAgYnV0IHJldHVybmVkIGEgJyArIHR5cGVvZiBlcnJvciArICcuICcgK1xuICAgICAgICAgICAgJ1lvdSBtYXkgaGF2ZSBmb3Jnb3R0ZW4gdG8gcGFzcyBhbiBhcmd1bWVudCB0byB0aGUgdHlwZSBjaGVja2VyICcgK1xuICAgICAgICAgICAgJ2NyZWF0b3IgKGFycmF5T2YsIGluc3RhbmNlT2YsIG9iamVjdE9mLCBvbmVPZiwgb25lT2ZUeXBlLCBhbmQgJyArXG4gICAgICAgICAgICAnc2hhcGUgYWxsIHJlcXVpcmUgYW4gYXJndW1lbnQpLidcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yICYmICEoZXJyb3IubWVzc2FnZSBpbiBsb2dnZWRUeXBlRmFpbHVyZXMpKSB7XG4gICAgICAgICAgLy8gT25seSBtb25pdG9yIHRoaXMgZmFpbHVyZSBvbmNlIGJlY2F1c2UgdGhlcmUgdGVuZHMgdG8gYmUgYSBsb3Qgb2YgdGhlXG4gICAgICAgICAgLy8gc2FtZSBlcnJvci5cbiAgICAgICAgICBsb2dnZWRUeXBlRmFpbHVyZXNbZXJyb3IubWVzc2FnZV0gPSB0cnVlO1xuXG4gICAgICAgICAgdmFyIHN0YWNrID0gZ2V0U3RhY2sgPyBnZXRTdGFjaygpIDogJyc7XG5cbiAgICAgICAgICBwcmludFdhcm5pbmcoXG4gICAgICAgICAgICAnRmFpbGVkICcgKyBsb2NhdGlvbiArICcgdHlwZTogJyArIGVycm9yLm1lc3NhZ2UgKyAoc3RhY2sgIT0gbnVsbCA/IHN0YWNrIDogJycpXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIFJlc2V0cyB3YXJuaW5nIGNhY2hlIHdoZW4gdGVzdGluZy5cbiAqXG4gKiBAcHJpdmF0ZVxuICovXG5jaGVja1Byb3BUeXBlcy5yZXNldFdhcm5pbmdDYWNoZSA9IGZ1bmN0aW9uKCkge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGxvZ2dlZFR5cGVGYWlsdXJlcyA9IHt9O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2hlY2tQcm9wVHlwZXM7XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIFJlYWN0SXMgPSByZXF1aXJlKCdyZWFjdC1pcycpO1xudmFyIGFzc2lnbiA9IHJlcXVpcmUoJ29iamVjdC1hc3NpZ24nKTtcblxudmFyIFJlYWN0UHJvcFR5cGVzU2VjcmV0ID0gcmVxdWlyZSgnLi9saWIvUmVhY3RQcm9wVHlwZXNTZWNyZXQnKTtcbnZhciBjaGVja1Byb3BUeXBlcyA9IHJlcXVpcmUoJy4vY2hlY2tQcm9wVHlwZXMnKTtcblxudmFyIGhhcyA9IEZ1bmN0aW9uLmNhbGwuYmluZChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5KTtcbnZhciBwcmludFdhcm5pbmcgPSBmdW5jdGlvbigpIHt9O1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICBwcmludFdhcm5pbmcgPSBmdW5jdGlvbih0ZXh0KSB7XG4gICAgdmFyIG1lc3NhZ2UgPSAnV2FybmluZzogJyArIHRleHQ7XG4gICAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uc29sZS5lcnJvcihtZXNzYWdlKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIC8vIC0tLSBXZWxjb21lIHRvIGRlYnVnZ2luZyBSZWFjdCAtLS1cbiAgICAgIC8vIFRoaXMgZXJyb3Igd2FzIHRocm93biBhcyBhIGNvbnZlbmllbmNlIHNvIHRoYXQgeW91IGNhbiB1c2UgdGhpcyBzdGFja1xuICAgICAgLy8gdG8gZmluZCB0aGUgY2FsbHNpdGUgdGhhdCBjYXVzZWQgdGhpcyB3YXJuaW5nIHRvIGZpcmUuXG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgfSBjYXRjaCAoeCkge31cbiAgfTtcbn1cblxuZnVuY3Rpb24gZW1wdHlGdW5jdGlvblRoYXRSZXR1cm5zTnVsbCgpIHtcbiAgcmV0dXJuIG51bGw7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXNWYWxpZEVsZW1lbnQsIHRocm93T25EaXJlY3RBY2Nlc3MpIHtcbiAgLyogZ2xvYmFsIFN5bWJvbCAqL1xuICB2YXIgSVRFUkFUT1JfU1lNQk9MID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wuaXRlcmF0b3I7XG4gIHZhciBGQVVYX0lURVJBVE9SX1NZTUJPTCA9ICdAQGl0ZXJhdG9yJzsgLy8gQmVmb3JlIFN5bWJvbCBzcGVjLlxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBpdGVyYXRvciBtZXRob2QgZnVuY3Rpb24gY29udGFpbmVkIG9uIHRoZSBpdGVyYWJsZSBvYmplY3QuXG4gICAqXG4gICAqIEJlIHN1cmUgdG8gaW52b2tlIHRoZSBmdW5jdGlvbiB3aXRoIHRoZSBpdGVyYWJsZSBhcyBjb250ZXh0OlxuICAgKlxuICAgKiAgICAgdmFyIGl0ZXJhdG9yRm4gPSBnZXRJdGVyYXRvckZuKG15SXRlcmFibGUpO1xuICAgKiAgICAgaWYgKGl0ZXJhdG9yRm4pIHtcbiAgICogICAgICAgdmFyIGl0ZXJhdG9yID0gaXRlcmF0b3JGbi5jYWxsKG15SXRlcmFibGUpO1xuICAgKiAgICAgICAuLi5cbiAgICogICAgIH1cbiAgICpcbiAgICogQHBhcmFtIHs/b2JqZWN0fSBtYXliZUl0ZXJhYmxlXG4gICAqIEByZXR1cm4gez9mdW5jdGlvbn1cbiAgICovXG4gIGZ1bmN0aW9uIGdldEl0ZXJhdG9yRm4obWF5YmVJdGVyYWJsZSkge1xuICAgIHZhciBpdGVyYXRvckZuID0gbWF5YmVJdGVyYWJsZSAmJiAoSVRFUkFUT1JfU1lNQk9MICYmIG1heWJlSXRlcmFibGVbSVRFUkFUT1JfU1lNQk9MXSB8fCBtYXliZUl0ZXJhYmxlW0ZBVVhfSVRFUkFUT1JfU1lNQk9MXSk7XG4gICAgaWYgKHR5cGVvZiBpdGVyYXRvckZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gaXRlcmF0b3JGbjtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ29sbGVjdGlvbiBvZiBtZXRob2RzIHRoYXQgYWxsb3cgZGVjbGFyYXRpb24gYW5kIHZhbGlkYXRpb24gb2YgcHJvcHMgdGhhdCBhcmVcbiAgICogc3VwcGxpZWQgdG8gUmVhY3QgY29tcG9uZW50cy4gRXhhbXBsZSB1c2FnZTpcbiAgICpcbiAgICogICB2YXIgUHJvcHMgPSByZXF1aXJlKCdSZWFjdFByb3BUeXBlcycpO1xuICAgKiAgIHZhciBNeUFydGljbGUgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gICAqICAgICBwcm9wVHlwZXM6IHtcbiAgICogICAgICAgLy8gQW4gb3B0aW9uYWwgc3RyaW5nIHByb3AgbmFtZWQgXCJkZXNjcmlwdGlvblwiLlxuICAgKiAgICAgICBkZXNjcmlwdGlvbjogUHJvcHMuc3RyaW5nLFxuICAgKlxuICAgKiAgICAgICAvLyBBIHJlcXVpcmVkIGVudW0gcHJvcCBuYW1lZCBcImNhdGVnb3J5XCIuXG4gICAqICAgICAgIGNhdGVnb3J5OiBQcm9wcy5vbmVPZihbJ05ld3MnLCdQaG90b3MnXSkuaXNSZXF1aXJlZCxcbiAgICpcbiAgICogICAgICAgLy8gQSBwcm9wIG5hbWVkIFwiZGlhbG9nXCIgdGhhdCByZXF1aXJlcyBhbiBpbnN0YW5jZSBvZiBEaWFsb2cuXG4gICAqICAgICAgIGRpYWxvZzogUHJvcHMuaW5zdGFuY2VPZihEaWFsb2cpLmlzUmVxdWlyZWRcbiAgICogICAgIH0sXG4gICAqICAgICByZW5kZXI6IGZ1bmN0aW9uKCkgeyAuLi4gfVxuICAgKiAgIH0pO1xuICAgKlxuICAgKiBBIG1vcmUgZm9ybWFsIHNwZWNpZmljYXRpb24gb2YgaG93IHRoZXNlIG1ldGhvZHMgYXJlIHVzZWQ6XG4gICAqXG4gICAqICAgdHlwZSA6PSBhcnJheXxib29sfGZ1bmN8b2JqZWN0fG51bWJlcnxzdHJpbmd8b25lT2YoWy4uLl0pfGluc3RhbmNlT2YoLi4uKVxuICAgKiAgIGRlY2wgOj0gUmVhY3RQcm9wVHlwZXMue3R5cGV9KC5pc1JlcXVpcmVkKT9cbiAgICpcbiAgICogRWFjaCBhbmQgZXZlcnkgZGVjbGFyYXRpb24gcHJvZHVjZXMgYSBmdW5jdGlvbiB3aXRoIHRoZSBzYW1lIHNpZ25hdHVyZS4gVGhpc1xuICAgKiBhbGxvd3MgdGhlIGNyZWF0aW9uIG9mIGN1c3RvbSB2YWxpZGF0aW9uIGZ1bmN0aW9ucy4gRm9yIGV4YW1wbGU6XG4gICAqXG4gICAqICB2YXIgTXlMaW5rID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICAgKiAgICBwcm9wVHlwZXM6IHtcbiAgICogICAgICAvLyBBbiBvcHRpb25hbCBzdHJpbmcgb3IgVVJJIHByb3AgbmFtZWQgXCJocmVmXCIuXG4gICAqICAgICAgaHJlZjogZnVuY3Rpb24ocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lKSB7XG4gICAqICAgICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgKiAgICAgICAgaWYgKHByb3BWYWx1ZSAhPSBudWxsICYmIHR5cGVvZiBwcm9wVmFsdWUgIT09ICdzdHJpbmcnICYmXG4gICAqICAgICAgICAgICAgIShwcm9wVmFsdWUgaW5zdGFuY2VvZiBVUkkpKSB7XG4gICAqICAgICAgICAgIHJldHVybiBuZXcgRXJyb3IoXG4gICAqICAgICAgICAgICAgJ0V4cGVjdGVkIGEgc3RyaW5nIG9yIGFuIFVSSSBmb3IgJyArIHByb3BOYW1lICsgJyBpbiAnICtcbiAgICogICAgICAgICAgICBjb21wb25lbnROYW1lXG4gICAqICAgICAgICAgICk7XG4gICAqICAgICAgICB9XG4gICAqICAgICAgfVxuICAgKiAgICB9LFxuICAgKiAgICByZW5kZXI6IGZ1bmN0aW9uKCkgey4uLn1cbiAgICogIH0pO1xuICAgKlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG5cbiAgdmFyIEFOT05ZTU9VUyA9ICc8PGFub255bW91cz4+JztcblxuICAvLyBJbXBvcnRhbnQhXG4gIC8vIEtlZXAgdGhpcyBsaXN0IGluIHN5bmMgd2l0aCBwcm9kdWN0aW9uIHZlcnNpb24gaW4gYC4vZmFjdG9yeVdpdGhUaHJvd2luZ1NoaW1zLmpzYC5cbiAgdmFyIFJlYWN0UHJvcFR5cGVzID0ge1xuICAgIGFycmF5OiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignYXJyYXknKSxcbiAgICBib29sOiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignYm9vbGVhbicpLFxuICAgIGZ1bmM6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdmdW5jdGlvbicpLFxuICAgIG51bWJlcjogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ251bWJlcicpLFxuICAgIG9iamVjdDogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ29iamVjdCcpLFxuICAgIHN0cmluZzogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ3N0cmluZycpLFxuICAgIHN5bWJvbDogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ3N5bWJvbCcpLFxuXG4gICAgYW55OiBjcmVhdGVBbnlUeXBlQ2hlY2tlcigpLFxuICAgIGFycmF5T2Y6IGNyZWF0ZUFycmF5T2ZUeXBlQ2hlY2tlcixcbiAgICBlbGVtZW50OiBjcmVhdGVFbGVtZW50VHlwZUNoZWNrZXIoKSxcbiAgICBlbGVtZW50VHlwZTogY3JlYXRlRWxlbWVudFR5cGVUeXBlQ2hlY2tlcigpLFxuICAgIGluc3RhbmNlT2Y6IGNyZWF0ZUluc3RhbmNlVHlwZUNoZWNrZXIsXG4gICAgbm9kZTogY3JlYXRlTm9kZUNoZWNrZXIoKSxcbiAgICBvYmplY3RPZjogY3JlYXRlT2JqZWN0T2ZUeXBlQ2hlY2tlcixcbiAgICBvbmVPZjogY3JlYXRlRW51bVR5cGVDaGVja2VyLFxuICAgIG9uZU9mVHlwZTogY3JlYXRlVW5pb25UeXBlQ2hlY2tlcixcbiAgICBzaGFwZTogY3JlYXRlU2hhcGVUeXBlQ2hlY2tlcixcbiAgICBleGFjdDogY3JlYXRlU3RyaWN0U2hhcGVUeXBlQ2hlY2tlcixcbiAgfTtcblxuICAvKipcbiAgICogaW5saW5lZCBPYmplY3QuaXMgcG9seWZpbGwgdG8gYXZvaWQgcmVxdWlyaW5nIGNvbnN1bWVycyBzaGlwIHRoZWlyIG93blxuICAgKiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9PYmplY3QvaXNcbiAgICovXG4gIC8qZXNsaW50LWRpc2FibGUgbm8tc2VsZi1jb21wYXJlKi9cbiAgZnVuY3Rpb24gaXMoeCwgeSkge1xuICAgIC8vIFNhbWVWYWx1ZSBhbGdvcml0aG1cbiAgICBpZiAoeCA9PT0geSkge1xuICAgICAgLy8gU3RlcHMgMS01LCA3LTEwXG4gICAgICAvLyBTdGVwcyA2LmItNi5lOiArMCAhPSAtMFxuICAgICAgcmV0dXJuIHggIT09IDAgfHwgMSAvIHggPT09IDEgLyB5O1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBTdGVwIDYuYTogTmFOID09IE5hTlxuICAgICAgcmV0dXJuIHggIT09IHggJiYgeSAhPT0geTtcbiAgICB9XG4gIH1cbiAgLyplc2xpbnQtZW5hYmxlIG5vLXNlbGYtY29tcGFyZSovXG5cbiAgLyoqXG4gICAqIFdlIHVzZSBhbiBFcnJvci1saWtlIG9iamVjdCBmb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eSBhcyBwZW9wbGUgbWF5IGNhbGxcbiAgICogUHJvcFR5cGVzIGRpcmVjdGx5IGFuZCBpbnNwZWN0IHRoZWlyIG91dHB1dC4gSG93ZXZlciwgd2UgZG9uJ3QgdXNlIHJlYWxcbiAgICogRXJyb3JzIGFueW1vcmUuIFdlIGRvbid0IGluc3BlY3QgdGhlaXIgc3RhY2sgYW55d2F5LCBhbmQgY3JlYXRpbmcgdGhlbVxuICAgKiBpcyBwcm9oaWJpdGl2ZWx5IGV4cGVuc2l2ZSBpZiB0aGV5IGFyZSBjcmVhdGVkIHRvbyBvZnRlbiwgc3VjaCBhcyB3aGF0XG4gICAqIGhhcHBlbnMgaW4gb25lT2ZUeXBlKCkgZm9yIGFueSB0eXBlIGJlZm9yZSB0aGUgb25lIHRoYXQgbWF0Y2hlZC5cbiAgICovXG4gIGZ1bmN0aW9uIFByb3BUeXBlRXJyb3IobWVzc2FnZSkge1xuICAgIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XG4gICAgdGhpcy5zdGFjayA9ICcnO1xuICB9XG4gIC8vIE1ha2UgYGluc3RhbmNlb2YgRXJyb3JgIHN0aWxsIHdvcmsgZm9yIHJldHVybmVkIGVycm9ycy5cbiAgUHJvcFR5cGVFcnJvci5wcm90b3R5cGUgPSBFcnJvci5wcm90b3R5cGU7XG5cbiAgZnVuY3Rpb24gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgdmFyIG1hbnVhbFByb3BUeXBlQ2FsbENhY2hlID0ge307XG4gICAgICB2YXIgbWFudWFsUHJvcFR5cGVXYXJuaW5nQ291bnQgPSAwO1xuICAgIH1cbiAgICBmdW5jdGlvbiBjaGVja1R5cGUoaXNSZXF1aXJlZCwgcHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lLCBzZWNyZXQpIHtcbiAgICAgIGNvbXBvbmVudE5hbWUgPSBjb21wb25lbnROYW1lIHx8IEFOT05ZTU9VUztcbiAgICAgIHByb3BGdWxsTmFtZSA9IHByb3BGdWxsTmFtZSB8fCBwcm9wTmFtZTtcblxuICAgICAgaWYgKHNlY3JldCAhPT0gUmVhY3RQcm9wVHlwZXNTZWNyZXQpIHtcbiAgICAgICAgaWYgKHRocm93T25EaXJlY3RBY2Nlc3MpIHtcbiAgICAgICAgICAvLyBOZXcgYmVoYXZpb3Igb25seSBmb3IgdXNlcnMgb2YgYHByb3AtdHlwZXNgIHBhY2thZ2VcbiAgICAgICAgICB2YXIgZXJyID0gbmV3IEVycm9yKFxuICAgICAgICAgICAgJ0NhbGxpbmcgUHJvcFR5cGVzIHZhbGlkYXRvcnMgZGlyZWN0bHkgaXMgbm90IHN1cHBvcnRlZCBieSB0aGUgYHByb3AtdHlwZXNgIHBhY2thZ2UuICcgK1xuICAgICAgICAgICAgJ1VzZSBgUHJvcFR5cGVzLmNoZWNrUHJvcFR5cGVzKClgIHRvIGNhbGwgdGhlbS4gJyArXG4gICAgICAgICAgICAnUmVhZCBtb3JlIGF0IGh0dHA6Ly9mYi5tZS91c2UtY2hlY2stcHJvcC10eXBlcydcbiAgICAgICAgICApO1xuICAgICAgICAgIGVyci5uYW1lID0gJ0ludmFyaWFudCBWaW9sYXRpb24nO1xuICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgfSBlbHNlIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIC8vIE9sZCBiZWhhdmlvciBmb3IgcGVvcGxlIHVzaW5nIFJlYWN0LlByb3BUeXBlc1xuICAgICAgICAgIHZhciBjYWNoZUtleSA9IGNvbXBvbmVudE5hbWUgKyAnOicgKyBwcm9wTmFtZTtcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAhbWFudWFsUHJvcFR5cGVDYWxsQ2FjaGVbY2FjaGVLZXldICYmXG4gICAgICAgICAgICAvLyBBdm9pZCBzcGFtbWluZyB0aGUgY29uc29sZSBiZWNhdXNlIHRoZXkgYXJlIG9mdGVuIG5vdCBhY3Rpb25hYmxlIGV4Y2VwdCBmb3IgbGliIGF1dGhvcnNcbiAgICAgICAgICAgIG1hbnVhbFByb3BUeXBlV2FybmluZ0NvdW50IDwgM1xuICAgICAgICAgICkge1xuICAgICAgICAgICAgcHJpbnRXYXJuaW5nKFxuICAgICAgICAgICAgICAnWW91IGFyZSBtYW51YWxseSBjYWxsaW5nIGEgUmVhY3QuUHJvcFR5cGVzIHZhbGlkYXRpb24gJyArXG4gICAgICAgICAgICAgICdmdW5jdGlvbiBmb3IgdGhlIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2AgcHJvcCBvbiBgJyArIGNvbXBvbmVudE5hbWUgICsgJ2AuIFRoaXMgaXMgZGVwcmVjYXRlZCAnICtcbiAgICAgICAgICAgICAgJ2FuZCB3aWxsIHRocm93IGluIHRoZSBzdGFuZGFsb25lIGBwcm9wLXR5cGVzYCBwYWNrYWdlLiAnICtcbiAgICAgICAgICAgICAgJ1lvdSBtYXkgYmUgc2VlaW5nIHRoaXMgd2FybmluZyBkdWUgdG8gYSB0aGlyZC1wYXJ0eSBQcm9wVHlwZXMgJyArXG4gICAgICAgICAgICAgICdsaWJyYXJ5LiBTZWUgaHR0cHM6Ly9mYi5tZS9yZWFjdC13YXJuaW5nLWRvbnQtY2FsbC1wcm9wdHlwZXMgJyArICdmb3IgZGV0YWlscy4nXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgbWFudWFsUHJvcFR5cGVDYWxsQ2FjaGVbY2FjaGVLZXldID0gdHJ1ZTtcbiAgICAgICAgICAgIG1hbnVhbFByb3BUeXBlV2FybmluZ0NvdW50Kys7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAocHJvcHNbcHJvcE5hbWVdID09IG51bGwpIHtcbiAgICAgICAgaWYgKGlzUmVxdWlyZWQpIHtcbiAgICAgICAgICBpZiAocHJvcHNbcHJvcE5hbWVdID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ1RoZSAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2AgaXMgbWFya2VkIGFzIHJlcXVpcmVkICcgKyAoJ2luIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBidXQgaXRzIHZhbHVlIGlzIGBudWxsYC4nKSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignVGhlICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBpcyBtYXJrZWQgYXMgcmVxdWlyZWQgaW4gJyArICgnYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGJ1dCBpdHMgdmFsdWUgaXMgYHVuZGVmaW5lZGAuJykpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGNoYWluZWRDaGVja1R5cGUgPSBjaGVja1R5cGUuYmluZChudWxsLCBmYWxzZSk7XG4gICAgY2hhaW5lZENoZWNrVHlwZS5pc1JlcXVpcmVkID0gY2hlY2tUeXBlLmJpbmQobnVsbCwgdHJ1ZSk7XG5cbiAgICByZXR1cm4gY2hhaW5lZENoZWNrVHlwZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKGV4cGVjdGVkVHlwZSkge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSwgc2VjcmV0KSB7XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgIGlmIChwcm9wVHlwZSAhPT0gZXhwZWN0ZWRUeXBlKSB7XG4gICAgICAgIC8vIGBwcm9wVmFsdWVgIGJlaW5nIGluc3RhbmNlIG9mLCBzYXksIGRhdGUvcmVnZXhwLCBwYXNzIHRoZSAnb2JqZWN0J1xuICAgICAgICAvLyBjaGVjaywgYnV0IHdlIGNhbiBvZmZlciBhIG1vcmUgcHJlY2lzZSBlcnJvciBtZXNzYWdlIGhlcmUgcmF0aGVyIHRoYW5cbiAgICAgICAgLy8gJ29mIHR5cGUgYG9iamVjdGAnLlxuICAgICAgICB2YXIgcHJlY2lzZVR5cGUgPSBnZXRQcmVjaXNlVHlwZShwcm9wVmFsdWUpO1xuXG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIHByZWNpc2VUeXBlICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkICcpICsgKCdgJyArIGV4cGVjdGVkVHlwZSArICdgLicpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlQW55VHlwZUNoZWNrZXIoKSB7XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKGVtcHR5RnVuY3Rpb25UaGF0UmV0dXJuc051bGwpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlQXJyYXlPZlR5cGVDaGVja2VyKHR5cGVDaGVja2VyKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICBpZiAodHlwZW9mIHR5cGVDaGVja2VyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignUHJvcGVydHkgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiBjb21wb25lbnQgYCcgKyBjb21wb25lbnROYW1lICsgJ2AgaGFzIGludmFsaWQgUHJvcFR5cGUgbm90YXRpb24gaW5zaWRlIGFycmF5T2YuJyk7XG4gICAgICB9XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHByb3BWYWx1ZSkpIHtcbiAgICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgcHJvcFR5cGUgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYW4gYXJyYXkuJykpO1xuICAgICAgfVxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wVmFsdWUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGVycm9yID0gdHlwZUNoZWNrZXIocHJvcFZhbHVlLCBpLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lICsgJ1snICsgaSArICddJywgUmVhY3RQcm9wVHlwZXNTZWNyZXQpO1xuICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICAgIHJldHVybiBlcnJvcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVFbGVtZW50VHlwZUNoZWNrZXIoKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgaWYgKCFpc1ZhbGlkRWxlbWVudChwcm9wVmFsdWUpKSB7XG4gICAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIHByb3BUeXBlICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGEgc2luZ2xlIFJlYWN0RWxlbWVudC4nKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnRUeXBlVHlwZUNoZWNrZXIoKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgaWYgKCFSZWFjdElzLmlzVmFsaWRFbGVtZW50VHlwZShwcm9wVmFsdWUpKSB7XG4gICAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIHByb3BUeXBlICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGEgc2luZ2xlIFJlYWN0RWxlbWVudCB0eXBlLicpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlSW5zdGFuY2VUeXBlQ2hlY2tlcihleHBlY3RlZENsYXNzKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICBpZiAoIShwcm9wc1twcm9wTmFtZV0gaW5zdGFuY2VvZiBleHBlY3RlZENsYXNzKSkge1xuICAgICAgICB2YXIgZXhwZWN0ZWRDbGFzc05hbWUgPSBleHBlY3RlZENsYXNzLm5hbWUgfHwgQU5PTllNT1VTO1xuICAgICAgICB2YXIgYWN0dWFsQ2xhc3NOYW1lID0gZ2V0Q2xhc3NOYW1lKHByb3BzW3Byb3BOYW1lXSk7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIGFjdHVhbENsYXNzTmFtZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCAnKSArICgnaW5zdGFuY2Ugb2YgYCcgKyBleHBlY3RlZENsYXNzTmFtZSArICdgLicpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlRW51bVR5cGVDaGVja2VyKGV4cGVjdGVkVmFsdWVzKSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGV4cGVjdGVkVmFsdWVzKSkge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgcHJpbnRXYXJuaW5nKFxuICAgICAgICAgICAgJ0ludmFsaWQgYXJndW1lbnRzIHN1cHBsaWVkIHRvIG9uZU9mLCBleHBlY3RlZCBhbiBhcnJheSwgZ290ICcgKyBhcmd1bWVudHMubGVuZ3RoICsgJyBhcmd1bWVudHMuICcgK1xuICAgICAgICAgICAgJ0EgY29tbW9uIG1pc3Rha2UgaXMgdG8gd3JpdGUgb25lT2YoeCwgeSwgeikgaW5zdGVhZCBvZiBvbmVPZihbeCwgeSwgel0pLidcbiAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHByaW50V2FybmluZygnSW52YWxpZCBhcmd1bWVudCBzdXBwbGllZCB0byBvbmVPZiwgZXhwZWN0ZWQgYW4gYXJyYXkuJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBlbXB0eUZ1bmN0aW9uVGhhdFJldHVybnNOdWxsO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZXhwZWN0ZWRWYWx1ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGlzKHByb3BWYWx1ZSwgZXhwZWN0ZWRWYWx1ZXNbaV0pKSB7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdmFyIHZhbHVlc1N0cmluZyA9IEpTT04uc3RyaW5naWZ5KGV4cGVjdGVkVmFsdWVzLCBmdW5jdGlvbiByZXBsYWNlcihrZXksIHZhbHVlKSB7XG4gICAgICAgIGlmIChnZXRQcm9wVHlwZSh2YWx1ZSkgPT09ICdzeW1ib2wnKSB7XG4gICAgICAgICAgcmV0dXJuIFN0cmluZyh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHZhbHVlIGAnICsgU3RyaW5nKHByb3BWYWx1ZSkgKyAnYCAnICsgKCdzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgb25lIG9mICcgKyB2YWx1ZXNTdHJpbmcgKyAnLicpKTtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZU9iamVjdE9mVHlwZUNoZWNrZXIodHlwZUNoZWNrZXIpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIGlmICh0eXBlb2YgdHlwZUNoZWNrZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdQcm9wZXJ0eSBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIGNvbXBvbmVudCBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCBoYXMgaW52YWxpZCBQcm9wVHlwZSBub3RhdGlvbiBpbnNpZGUgb2JqZWN0T2YuJyk7XG4gICAgICB9XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgIGlmIChwcm9wVHlwZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgcHJvcFR5cGUgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYW4gb2JqZWN0LicpKTtcbiAgICAgIH1cbiAgICAgIGZvciAodmFyIGtleSBpbiBwcm9wVmFsdWUpIHtcbiAgICAgICAgaWYgKGhhcyhwcm9wVmFsdWUsIGtleSkpIHtcbiAgICAgICAgICB2YXIgZXJyb3IgPSB0eXBlQ2hlY2tlcihwcm9wVmFsdWUsIGtleSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSArICcuJyArIGtleSwgUmVhY3RQcm9wVHlwZXNTZWNyZXQpO1xuICAgICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVVuaW9uVHlwZUNoZWNrZXIoYXJyYXlPZlR5cGVDaGVja2Vycykge1xuICAgIGlmICghQXJyYXkuaXNBcnJheShhcnJheU9mVHlwZUNoZWNrZXJzKSkge1xuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IHByaW50V2FybmluZygnSW52YWxpZCBhcmd1bWVudCBzdXBwbGllZCB0byBvbmVPZlR5cGUsIGV4cGVjdGVkIGFuIGluc3RhbmNlIG9mIGFycmF5LicpIDogdm9pZCAwO1xuICAgICAgcmV0dXJuIGVtcHR5RnVuY3Rpb25UaGF0UmV0dXJuc051bGw7XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnJheU9mVHlwZUNoZWNrZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgY2hlY2tlciA9IGFycmF5T2ZUeXBlQ2hlY2tlcnNbaV07XG4gICAgICBpZiAodHlwZW9mIGNoZWNrZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcHJpbnRXYXJuaW5nKFxuICAgICAgICAgICdJbnZhbGlkIGFyZ3VtZW50IHN1cHBsaWVkIHRvIG9uZU9mVHlwZS4gRXhwZWN0ZWQgYW4gYXJyYXkgb2YgY2hlY2sgZnVuY3Rpb25zLCBidXQgJyArXG4gICAgICAgICAgJ3JlY2VpdmVkICcgKyBnZXRQb3N0Zml4Rm9yVHlwZVdhcm5pbmcoY2hlY2tlcikgKyAnIGF0IGluZGV4ICcgKyBpICsgJy4nXG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiBlbXB0eUZ1bmN0aW9uVGhhdFJldHVybnNOdWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnJheU9mVHlwZUNoZWNrZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBjaGVja2VyID0gYXJyYXlPZlR5cGVDaGVja2Vyc1tpXTtcbiAgICAgICAgaWYgKGNoZWNrZXIocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lLCBSZWFjdFByb3BUeXBlc1NlY3JldCkgPT0gbnVsbCkge1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agc3VwcGxpZWQgdG8gJyArICgnYCcgKyBjb21wb25lbnROYW1lICsgJ2AuJykpO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlTm9kZUNoZWNrZXIoKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICBpZiAoIWlzTm9kZShwcm9wc1twcm9wTmFtZV0pKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agc3VwcGxpZWQgdG8gJyArICgnYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGEgUmVhY3ROb2RlLicpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlU2hhcGVUeXBlQ2hlY2tlcihzaGFwZVR5cGVzKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgIGlmIChwcm9wVHlwZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlIGAnICsgcHJvcFR5cGUgKyAnYCAnICsgKCdzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYG9iamVjdGAuJykpO1xuICAgICAgfVxuICAgICAgZm9yICh2YXIga2V5IGluIHNoYXBlVHlwZXMpIHtcbiAgICAgICAgdmFyIGNoZWNrZXIgPSBzaGFwZVR5cGVzW2tleV07XG4gICAgICAgIGlmICghY2hlY2tlcikge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHZhciBlcnJvciA9IGNoZWNrZXIocHJvcFZhbHVlLCBrZXksIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUgKyAnLicgKyBrZXksIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVN0cmljdFNoYXBlVHlwZUNoZWNrZXIoc2hhcGVUeXBlcykge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICBpZiAocHJvcFR5cGUgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSBgJyArIHByb3BUeXBlICsgJ2AgJyArICgnc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGBvYmplY3RgLicpKTtcbiAgICAgIH1cbiAgICAgIC8vIFdlIG5lZWQgdG8gY2hlY2sgYWxsIGtleXMgaW4gY2FzZSBzb21lIGFyZSByZXF1aXJlZCBidXQgbWlzc2luZyBmcm9tXG4gICAgICAvLyBwcm9wcy5cbiAgICAgIHZhciBhbGxLZXlzID0gYXNzaWduKHt9LCBwcm9wc1twcm9wTmFtZV0sIHNoYXBlVHlwZXMpO1xuICAgICAgZm9yICh2YXIga2V5IGluIGFsbEtleXMpIHtcbiAgICAgICAgdmFyIGNoZWNrZXIgPSBzaGFwZVR5cGVzW2tleV07XG4gICAgICAgIGlmICghY2hlY2tlcikge1xuICAgICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcihcbiAgICAgICAgICAgICdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBrZXkgYCcgKyBrZXkgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYC4nICtcbiAgICAgICAgICAgICdcXG5CYWQgb2JqZWN0OiAnICsgSlNPTi5zdHJpbmdpZnkocHJvcHNbcHJvcE5hbWVdLCBudWxsLCAnICAnKSArXG4gICAgICAgICAgICAnXFxuVmFsaWQga2V5czogJyArICBKU09OLnN0cmluZ2lmeShPYmplY3Qua2V5cyhzaGFwZVR5cGVzKSwgbnVsbCwgJyAgJylcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIHZhciBlcnJvciA9IGNoZWNrZXIocHJvcFZhbHVlLCBrZXksIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUgKyAnLicgKyBrZXksIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gaXNOb2RlKHByb3BWYWx1ZSkge1xuICAgIHN3aXRjaCAodHlwZW9mIHByb3BWYWx1ZSkge1xuICAgICAgY2FzZSAnbnVtYmVyJzpcbiAgICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICBjYXNlICd1bmRlZmluZWQnOlxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIGNhc2UgJ2Jvb2xlYW4nOlxuICAgICAgICByZXR1cm4gIXByb3BWYWx1ZTtcbiAgICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHByb3BWYWx1ZSkpIHtcbiAgICAgICAgICByZXR1cm4gcHJvcFZhbHVlLmV2ZXJ5KGlzTm9kZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByb3BWYWx1ZSA9PT0gbnVsbCB8fCBpc1ZhbGlkRWxlbWVudChwcm9wVmFsdWUpKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgaXRlcmF0b3JGbiA9IGdldEl0ZXJhdG9yRm4ocHJvcFZhbHVlKTtcbiAgICAgICAgaWYgKGl0ZXJhdG9yRm4pIHtcbiAgICAgICAgICB2YXIgaXRlcmF0b3IgPSBpdGVyYXRvckZuLmNhbGwocHJvcFZhbHVlKTtcbiAgICAgICAgICB2YXIgc3RlcDtcbiAgICAgICAgICBpZiAoaXRlcmF0b3JGbiAhPT0gcHJvcFZhbHVlLmVudHJpZXMpIHtcbiAgICAgICAgICAgIHdoaWxlICghKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmUpIHtcbiAgICAgICAgICAgICAgaWYgKCFpc05vZGUoc3RlcC52YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gSXRlcmF0b3Igd2lsbCBwcm92aWRlIGVudHJ5IFtrLHZdIHR1cGxlcyByYXRoZXIgdGhhbiB2YWx1ZXMuXG4gICAgICAgICAgICB3aGlsZSAoIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lKSB7XG4gICAgICAgICAgICAgIHZhciBlbnRyeSA9IHN0ZXAudmFsdWU7XG4gICAgICAgICAgICAgIGlmIChlbnRyeSkge1xuICAgICAgICAgICAgICAgIGlmICghaXNOb2RlKGVudHJ5WzFdKSkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBpc1N5bWJvbChwcm9wVHlwZSwgcHJvcFZhbHVlKSB7XG4gICAgLy8gTmF0aXZlIFN5bWJvbC5cbiAgICBpZiAocHJvcFR5cGUgPT09ICdzeW1ib2wnKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyAxOS40LjMuNSBTeW1ib2wucHJvdG90eXBlW0BAdG9TdHJpbmdUYWddID09PSAnU3ltYm9sJ1xuICAgIGlmIChwcm9wVmFsdWVbJ0BAdG9TdHJpbmdUYWcnXSA9PT0gJ1N5bWJvbCcpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIC8vIEZhbGxiYWNrIGZvciBub24tc3BlYyBjb21wbGlhbnQgU3ltYm9scyB3aGljaCBhcmUgcG9seWZpbGxlZC5cbiAgICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBwcm9wVmFsdWUgaW5zdGFuY2VvZiBTeW1ib2wpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8vIEVxdWl2YWxlbnQgb2YgYHR5cGVvZmAgYnV0IHdpdGggc3BlY2lhbCBoYW5kbGluZyBmb3IgYXJyYXkgYW5kIHJlZ2V4cC5cbiAgZnVuY3Rpb24gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKSB7XG4gICAgdmFyIHByb3BUeXBlID0gdHlwZW9mIHByb3BWYWx1ZTtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShwcm9wVmFsdWUpKSB7XG4gICAgICByZXR1cm4gJ2FycmF5JztcbiAgICB9XG4gICAgaWYgKHByb3BWYWx1ZSBpbnN0YW5jZW9mIFJlZ0V4cCkge1xuICAgICAgLy8gT2xkIHdlYmtpdHMgKGF0IGxlYXN0IHVudGlsIEFuZHJvaWQgNC4wKSByZXR1cm4gJ2Z1bmN0aW9uJyByYXRoZXIgdGhhblxuICAgICAgLy8gJ29iamVjdCcgZm9yIHR5cGVvZiBhIFJlZ0V4cC4gV2UnbGwgbm9ybWFsaXplIHRoaXMgaGVyZSBzbyB0aGF0IC9ibGEvXG4gICAgICAvLyBwYXNzZXMgUHJvcFR5cGVzLm9iamVjdC5cbiAgICAgIHJldHVybiAnb2JqZWN0JztcbiAgICB9XG4gICAgaWYgKGlzU3ltYm9sKHByb3BUeXBlLCBwcm9wVmFsdWUpKSB7XG4gICAgICByZXR1cm4gJ3N5bWJvbCc7XG4gICAgfVxuICAgIHJldHVybiBwcm9wVHlwZTtcbiAgfVxuXG4gIC8vIFRoaXMgaGFuZGxlcyBtb3JlIHR5cGVzIHRoYW4gYGdldFByb3BUeXBlYC4gT25seSB1c2VkIGZvciBlcnJvciBtZXNzYWdlcy5cbiAgLy8gU2VlIGBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcmAuXG4gIGZ1bmN0aW9uIGdldFByZWNpc2VUeXBlKHByb3BWYWx1ZSkge1xuICAgIGlmICh0eXBlb2YgcHJvcFZhbHVlID09PSAndW5kZWZpbmVkJyB8fCBwcm9wVmFsdWUgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiAnJyArIHByb3BWYWx1ZTtcbiAgICB9XG4gICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICBpZiAocHJvcFR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgICBpZiAocHJvcFZhbHVlIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgICByZXR1cm4gJ2RhdGUnO1xuICAgICAgfSBlbHNlIGlmIChwcm9wVmFsdWUgaW5zdGFuY2VvZiBSZWdFeHApIHtcbiAgICAgICAgcmV0dXJuICdyZWdleHAnO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcHJvcFR5cGU7XG4gIH1cblxuICAvLyBSZXR1cm5zIGEgc3RyaW5nIHRoYXQgaXMgcG9zdGZpeGVkIHRvIGEgd2FybmluZyBhYm91dCBhbiBpbnZhbGlkIHR5cGUuXG4gIC8vIEZvciBleGFtcGxlLCBcInVuZGVmaW5lZFwiIG9yIFwib2YgdHlwZSBhcnJheVwiXG4gIGZ1bmN0aW9uIGdldFBvc3RmaXhGb3JUeXBlV2FybmluZyh2YWx1ZSkge1xuICAgIHZhciB0eXBlID0gZ2V0UHJlY2lzZVR5cGUodmFsdWUpO1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSAnYXJyYXknOlxuICAgICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgICAgcmV0dXJuICdhbiAnICsgdHlwZTtcbiAgICAgIGNhc2UgJ2Jvb2xlYW4nOlxuICAgICAgY2FzZSAnZGF0ZSc6XG4gICAgICBjYXNlICdyZWdleHAnOlxuICAgICAgICByZXR1cm4gJ2EgJyArIHR5cGU7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gdHlwZTtcbiAgICB9XG4gIH1cblxuICAvLyBSZXR1cm5zIGNsYXNzIG5hbWUgb2YgdGhlIG9iamVjdCwgaWYgYW55LlxuICBmdW5jdGlvbiBnZXRDbGFzc05hbWUocHJvcFZhbHVlKSB7XG4gICAgaWYgKCFwcm9wVmFsdWUuY29uc3RydWN0b3IgfHwgIXByb3BWYWx1ZS5jb25zdHJ1Y3Rvci5uYW1lKSB7XG4gICAgICByZXR1cm4gQU5PTllNT1VTO1xuICAgIH1cbiAgICByZXR1cm4gcHJvcFZhbHVlLmNvbnN0cnVjdG9yLm5hbWU7XG4gIH1cblxuICBSZWFjdFByb3BUeXBlcy5jaGVja1Byb3BUeXBlcyA9IGNoZWNrUHJvcFR5cGVzO1xuICBSZWFjdFByb3BUeXBlcy5yZXNldFdhcm5pbmdDYWNoZSA9IGNoZWNrUHJvcFR5cGVzLnJlc2V0V2FybmluZ0NhY2hlO1xuICBSZWFjdFByb3BUeXBlcy5Qcm9wVHlwZXMgPSBSZWFjdFByb3BUeXBlcztcblxuICByZXR1cm4gUmVhY3RQcm9wVHlwZXM7XG59O1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBSZWFjdFByb3BUeXBlc1NlY3JldCA9IHJlcXVpcmUoJy4vbGliL1JlYWN0UHJvcFR5cGVzU2VjcmV0Jyk7XG5cbmZ1bmN0aW9uIGVtcHR5RnVuY3Rpb24oKSB7fVxuZnVuY3Rpb24gZW1wdHlGdW5jdGlvbldpdGhSZXNldCgpIHt9XG5lbXB0eUZ1bmN0aW9uV2l0aFJlc2V0LnJlc2V0V2FybmluZ0NhY2hlID0gZW1wdHlGdW5jdGlvbjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gc2hpbShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUsIHNlY3JldCkge1xuICAgIGlmIChzZWNyZXQgPT09IFJlYWN0UHJvcFR5cGVzU2VjcmV0KSB7XG4gICAgICAvLyBJdCBpcyBzdGlsbCBzYWZlIHdoZW4gY2FsbGVkIGZyb20gUmVhY3QuXG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciBlcnIgPSBuZXcgRXJyb3IoXG4gICAgICAnQ2FsbGluZyBQcm9wVHlwZXMgdmFsaWRhdG9ycyBkaXJlY3RseSBpcyBub3Qgc3VwcG9ydGVkIGJ5IHRoZSBgcHJvcC10eXBlc2AgcGFja2FnZS4gJyArXG4gICAgICAnVXNlIFByb3BUeXBlcy5jaGVja1Byb3BUeXBlcygpIHRvIGNhbGwgdGhlbS4gJyArXG4gICAgICAnUmVhZCBtb3JlIGF0IGh0dHA6Ly9mYi5tZS91c2UtY2hlY2stcHJvcC10eXBlcydcbiAgICApO1xuICAgIGVyci5uYW1lID0gJ0ludmFyaWFudCBWaW9sYXRpb24nO1xuICAgIHRocm93IGVycjtcbiAgfTtcbiAgc2hpbS5pc1JlcXVpcmVkID0gc2hpbTtcbiAgZnVuY3Rpb24gZ2V0U2hpbSgpIHtcbiAgICByZXR1cm4gc2hpbTtcbiAgfTtcbiAgLy8gSW1wb3J0YW50IVxuICAvLyBLZWVwIHRoaXMgbGlzdCBpbiBzeW5jIHdpdGggcHJvZHVjdGlvbiB2ZXJzaW9uIGluIGAuL2ZhY3RvcnlXaXRoVHlwZUNoZWNrZXJzLmpzYC5cbiAgdmFyIFJlYWN0UHJvcFR5cGVzID0ge1xuICAgIGFycmF5OiBzaGltLFxuICAgIGJvb2w6IHNoaW0sXG4gICAgZnVuYzogc2hpbSxcbiAgICBudW1iZXI6IHNoaW0sXG4gICAgb2JqZWN0OiBzaGltLFxuICAgIHN0cmluZzogc2hpbSxcbiAgICBzeW1ib2w6IHNoaW0sXG5cbiAgICBhbnk6IHNoaW0sXG4gICAgYXJyYXlPZjogZ2V0U2hpbSxcbiAgICBlbGVtZW50OiBzaGltLFxuICAgIGVsZW1lbnRUeXBlOiBzaGltLFxuICAgIGluc3RhbmNlT2Y6IGdldFNoaW0sXG4gICAgbm9kZTogc2hpbSxcbiAgICBvYmplY3RPZjogZ2V0U2hpbSxcbiAgICBvbmVPZjogZ2V0U2hpbSxcbiAgICBvbmVPZlR5cGU6IGdldFNoaW0sXG4gICAgc2hhcGU6IGdldFNoaW0sXG4gICAgZXhhY3Q6IGdldFNoaW0sXG5cbiAgICBjaGVja1Byb3BUeXBlczogZW1wdHlGdW5jdGlvbldpdGhSZXNldCxcbiAgICByZXNldFdhcm5pbmdDYWNoZTogZW1wdHlGdW5jdGlvblxuICB9O1xuXG4gIFJlYWN0UHJvcFR5cGVzLlByb3BUeXBlcyA9IFJlYWN0UHJvcFR5cGVzO1xuXG4gIHJldHVybiBSZWFjdFByb3BUeXBlcztcbn07XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHZhciBSZWFjdElzID0gcmVxdWlyZSgncmVhY3QtaXMnKTtcblxuICAvLyBCeSBleHBsaWNpdGx5IHVzaW5nIGBwcm9wLXR5cGVzYCB5b3UgYXJlIG9wdGluZyBpbnRvIG5ldyBkZXZlbG9wbWVudCBiZWhhdmlvci5cbiAgLy8gaHR0cDovL2ZiLm1lL3Byb3AtdHlwZXMtaW4tcHJvZFxuICB2YXIgdGhyb3dPbkRpcmVjdEFjY2VzcyA9IHRydWU7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9mYWN0b3J5V2l0aFR5cGVDaGVja2VycycpKFJlYWN0SXMuaXNFbGVtZW50LCB0aHJvd09uRGlyZWN0QWNjZXNzKTtcbn0gZWxzZSB7XG4gIC8vIEJ5IGV4cGxpY2l0bHkgdXNpbmcgYHByb3AtdHlwZXNgIHlvdSBhcmUgb3B0aW5nIGludG8gbmV3IHByb2R1Y3Rpb24gYmVoYXZpb3IuXG4gIC8vIGh0dHA6Ly9mYi5tZS9wcm9wLXR5cGVzLWluLXByb2RcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2ZhY3RvcnlXaXRoVGhyb3dpbmdTaGltcycpKCk7XG59XG4iLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIGRlZmF1bHQ6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSBoYXNDbGFzcztcblxuZnVuY3Rpb24gaGFzQ2xhc3MoZWxlbWVudCwgY2xhc3NOYW1lKSB7XG4gIGlmIChlbGVtZW50LmNsYXNzTGlzdCkgcmV0dXJuICEhY2xhc3NOYW1lICYmIGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSk7ZWxzZSByZXR1cm4gKFwiIFwiICsgKGVsZW1lbnQuY2xhc3NOYW1lLmJhc2VWYWwgfHwgZWxlbWVudC5jbGFzc05hbWUpICsgXCIgXCIpLmluZGV4T2YoXCIgXCIgKyBjbGFzc05hbWUgKyBcIiBcIikgIT09IC0xO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdOyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IGFkZENsYXNzO1xuXG52YXIgX2hhc0NsYXNzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9oYXNDbGFzc1wiKSk7XG5cbmZ1bmN0aW9uIGFkZENsYXNzKGVsZW1lbnQsIGNsYXNzTmFtZSkge1xuICBpZiAoZWxlbWVudC5jbGFzc0xpc3QpIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO2Vsc2UgaWYgKCEoMCwgX2hhc0NsYXNzLmRlZmF1bHQpKGVsZW1lbnQsIGNsYXNzTmFtZSkpIGlmICh0eXBlb2YgZWxlbWVudC5jbGFzc05hbWUgPT09ICdzdHJpbmcnKSBlbGVtZW50LmNsYXNzTmFtZSA9IGVsZW1lbnQuY2xhc3NOYW1lICsgJyAnICsgY2xhc3NOYW1lO2Vsc2UgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgKGVsZW1lbnQuY2xhc3NOYW1lICYmIGVsZW1lbnQuY2xhc3NOYW1lLmJhc2VWYWwgfHwgJycpICsgJyAnICsgY2xhc3NOYW1lKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzW1wiZGVmYXVsdFwiXTsiLCIndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIHJlcGxhY2VDbGFzc05hbWUob3JpZ0NsYXNzLCBjbGFzc1RvUmVtb3ZlKSB7XG4gIHJldHVybiBvcmlnQ2xhc3MucmVwbGFjZShuZXcgUmVnRXhwKCcoXnxcXFxccyknICsgY2xhc3NUb1JlbW92ZSArICcoPzpcXFxcc3wkKScsICdnJyksICckMScpLnJlcGxhY2UoL1xccysvZywgJyAnKS5yZXBsYWNlKC9eXFxzKnxcXHMqJC9nLCAnJyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gcmVtb3ZlQ2xhc3MoZWxlbWVudCwgY2xhc3NOYW1lKSB7XG4gIGlmIChlbGVtZW50LmNsYXNzTGlzdCkgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7ZWxzZSBpZiAodHlwZW9mIGVsZW1lbnQuY2xhc3NOYW1lID09PSAnc3RyaW5nJykgZWxlbWVudC5jbGFzc05hbWUgPSByZXBsYWNlQ2xhc3NOYW1lKGVsZW1lbnQuY2xhc3NOYW1lLCBjbGFzc05hbWUpO2Vsc2UgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgcmVwbGFjZUNsYXNzTmFtZShlbGVtZW50LmNsYXNzTmFtZSAmJiBlbGVtZW50LmNsYXNzTmFtZS5iYXNlVmFsIHx8ICcnLCBjbGFzc05hbWUpKTtcbn07IiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG5mdW5jdGlvbiBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gIC8vIENhbGwgdGhpcy5jb25zdHJ1Y3Rvci5nRFNGUCB0byBzdXBwb3J0IHN1Yi1jbGFzc2VzLlxuICB2YXIgc3RhdGUgPSB0aGlzLmNvbnN0cnVjdG9yLmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyh0aGlzLnByb3BzLCB0aGlzLnN0YXRlKTtcbiAgaWYgKHN0YXRlICE9PSBudWxsICYmIHN0YXRlICE9PSB1bmRlZmluZWQpIHtcbiAgICB0aGlzLnNldFN0YXRlKHN0YXRlKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAvLyBDYWxsIHRoaXMuY29uc3RydWN0b3IuZ0RTRlAgdG8gc3VwcG9ydCBzdWItY2xhc3Nlcy5cbiAgLy8gVXNlIHRoZSBzZXRTdGF0ZSgpIHVwZGF0ZXIgdG8gZW5zdXJlIHN0YXRlIGlzbid0IHN0YWxlIGluIGNlcnRhaW4gZWRnZSBjYXNlcy5cbiAgZnVuY3Rpb24gdXBkYXRlcihwcmV2U3RhdGUpIHtcbiAgICB2YXIgc3RhdGUgPSB0aGlzLmNvbnN0cnVjdG9yLmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyhuZXh0UHJvcHMsIHByZXZTdGF0ZSk7XG4gICAgcmV0dXJuIHN0YXRlICE9PSBudWxsICYmIHN0YXRlICE9PSB1bmRlZmluZWQgPyBzdGF0ZSA6IG51bGw7XG4gIH1cbiAgLy8gQmluZGluZyBcInRoaXNcIiBpcyBpbXBvcnRhbnQgZm9yIHNoYWxsb3cgcmVuZGVyZXIgc3VwcG9ydC5cbiAgdGhpcy5zZXRTdGF0ZSh1cGRhdGVyLmJpbmQodGhpcykpO1xufVxuXG5mdW5jdGlvbiBjb21wb25lbnRXaWxsVXBkYXRlKG5leHRQcm9wcywgbmV4dFN0YXRlKSB7XG4gIHRyeSB7XG4gICAgdmFyIHByZXZQcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgdmFyIHByZXZTdGF0ZSA9IHRoaXMuc3RhdGU7XG4gICAgdGhpcy5wcm9wcyA9IG5leHRQcm9wcztcbiAgICB0aGlzLnN0YXRlID0gbmV4dFN0YXRlO1xuICAgIHRoaXMuX19yZWFjdEludGVybmFsU25hcHNob3RGbGFnID0gdHJ1ZTtcbiAgICB0aGlzLl9fcmVhY3RJbnRlcm5hbFNuYXBzaG90ID0gdGhpcy5nZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZShcbiAgICAgIHByZXZQcm9wcyxcbiAgICAgIHByZXZTdGF0ZVxuICAgICk7XG4gIH0gZmluYWxseSB7XG4gICAgdGhpcy5wcm9wcyA9IHByZXZQcm9wcztcbiAgICB0aGlzLnN0YXRlID0gcHJldlN0YXRlO1xuICB9XG59XG5cbi8vIFJlYWN0IG1heSB3YXJuIGFib3V0IGNXTS9jV1JQL2NXVSBtZXRob2RzIGJlaW5nIGRlcHJlY2F0ZWQuXG4vLyBBZGQgYSBmbGFnIHRvIHN1cHByZXNzIHRoZXNlIHdhcm5pbmdzIGZvciB0aGlzIHNwZWNpYWwgY2FzZS5cbmNvbXBvbmVudFdpbGxNb3VudC5fX3N1cHByZXNzRGVwcmVjYXRpb25XYXJuaW5nID0gdHJ1ZTtcbmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMuX19zdXBwcmVzc0RlcHJlY2F0aW9uV2FybmluZyA9IHRydWU7XG5jb21wb25lbnRXaWxsVXBkYXRlLl9fc3VwcHJlc3NEZXByZWNhdGlvbldhcm5pbmcgPSB0cnVlO1xuXG5mdW5jdGlvbiBwb2x5ZmlsbChDb21wb25lbnQpIHtcbiAgdmFyIHByb3RvdHlwZSA9IENvbXBvbmVudC5wcm90b3R5cGU7XG5cbiAgaWYgKCFwcm90b3R5cGUgfHwgIXByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdDYW4gb25seSBwb2x5ZmlsbCBjbGFzcyBjb21wb25lbnRzJyk7XG4gIH1cblxuICBpZiAoXG4gICAgdHlwZW9mIENvbXBvbmVudC5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMgIT09ICdmdW5jdGlvbicgJiZcbiAgICB0eXBlb2YgcHJvdG90eXBlLmdldFNuYXBzaG90QmVmb3JlVXBkYXRlICE9PSAnZnVuY3Rpb24nXG4gICkge1xuICAgIHJldHVybiBDb21wb25lbnQ7XG4gIH1cblxuICAvLyBJZiBuZXcgY29tcG9uZW50IEFQSXMgYXJlIGRlZmluZWQsIFwidW5zYWZlXCIgbGlmZWN5Y2xlcyB3b24ndCBiZSBjYWxsZWQuXG4gIC8vIEVycm9yIGlmIGFueSBvZiB0aGVzZSBsaWZlY3ljbGVzIGFyZSBwcmVzZW50LFxuICAvLyBCZWNhdXNlIHRoZXkgd291bGQgd29yayBkaWZmZXJlbnRseSBiZXR3ZWVuIG9sZGVyIGFuZCBuZXdlciAoMTYuMyspIHZlcnNpb25zIG9mIFJlYWN0LlxuICB2YXIgZm91bmRXaWxsTW91bnROYW1lID0gbnVsbDtcbiAgdmFyIGZvdW5kV2lsbFJlY2VpdmVQcm9wc05hbWUgPSBudWxsO1xuICB2YXIgZm91bmRXaWxsVXBkYXRlTmFtZSA9IG51bGw7XG4gIGlmICh0eXBlb2YgcHJvdG90eXBlLmNvbXBvbmVudFdpbGxNb3VudCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGZvdW5kV2lsbE1vdW50TmFtZSA9ICdjb21wb25lbnRXaWxsTW91bnQnO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBwcm90b3R5cGUuVU5TQUZFX2NvbXBvbmVudFdpbGxNb3VudCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGZvdW5kV2lsbE1vdW50TmFtZSA9ICdVTlNBRkVfY29tcG9uZW50V2lsbE1vdW50JztcbiAgfVxuICBpZiAodHlwZW9mIHByb3RvdHlwZS5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgZm91bmRXaWxsUmVjZWl2ZVByb3BzTmFtZSA9ICdjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzJztcbiAgfSBlbHNlIGlmICh0eXBlb2YgcHJvdG90eXBlLlVOU0FGRV9jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgZm91bmRXaWxsUmVjZWl2ZVByb3BzTmFtZSA9ICdVTlNBRkVfY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyc7XG4gIH1cbiAgaWYgKHR5cGVvZiBwcm90b3R5cGUuY29tcG9uZW50V2lsbFVwZGF0ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGZvdW5kV2lsbFVwZGF0ZU5hbWUgPSAnY29tcG9uZW50V2lsbFVwZGF0ZSc7XG4gIH0gZWxzZSBpZiAodHlwZW9mIHByb3RvdHlwZS5VTlNBRkVfY29tcG9uZW50V2lsbFVwZGF0ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGZvdW5kV2lsbFVwZGF0ZU5hbWUgPSAnVU5TQUZFX2NvbXBvbmVudFdpbGxVcGRhdGUnO1xuICB9XG4gIGlmIChcbiAgICBmb3VuZFdpbGxNb3VudE5hbWUgIT09IG51bGwgfHxcbiAgICBmb3VuZFdpbGxSZWNlaXZlUHJvcHNOYW1lICE9PSBudWxsIHx8XG4gICAgZm91bmRXaWxsVXBkYXRlTmFtZSAhPT0gbnVsbFxuICApIHtcbiAgICB2YXIgY29tcG9uZW50TmFtZSA9IENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb25lbnQubmFtZTtcbiAgICB2YXIgbmV3QXBpTmFtZSA9XG4gICAgICB0eXBlb2YgQ29tcG9uZW50LmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICA/ICdnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMoKSdcbiAgICAgICAgOiAnZ2V0U25hcHNob3RCZWZvcmVVcGRhdGUoKSc7XG5cbiAgICB0aHJvdyBFcnJvcihcbiAgICAgICdVbnNhZmUgbGVnYWN5IGxpZmVjeWNsZXMgd2lsbCBub3QgYmUgY2FsbGVkIGZvciBjb21wb25lbnRzIHVzaW5nIG5ldyBjb21wb25lbnQgQVBJcy5cXG5cXG4nICtcbiAgICAgICAgY29tcG9uZW50TmFtZSArXG4gICAgICAgICcgdXNlcyAnICtcbiAgICAgICAgbmV3QXBpTmFtZSArXG4gICAgICAgICcgYnV0IGFsc28gY29udGFpbnMgdGhlIGZvbGxvd2luZyBsZWdhY3kgbGlmZWN5Y2xlczonICtcbiAgICAgICAgKGZvdW5kV2lsbE1vdW50TmFtZSAhPT0gbnVsbCA/ICdcXG4gICcgKyBmb3VuZFdpbGxNb3VudE5hbWUgOiAnJykgK1xuICAgICAgICAoZm91bmRXaWxsUmVjZWl2ZVByb3BzTmFtZSAhPT0gbnVsbFxuICAgICAgICAgID8gJ1xcbiAgJyArIGZvdW5kV2lsbFJlY2VpdmVQcm9wc05hbWVcbiAgICAgICAgICA6ICcnKSArXG4gICAgICAgIChmb3VuZFdpbGxVcGRhdGVOYW1lICE9PSBudWxsID8gJ1xcbiAgJyArIGZvdW5kV2lsbFVwZGF0ZU5hbWUgOiAnJykgK1xuICAgICAgICAnXFxuXFxuVGhlIGFib3ZlIGxpZmVjeWNsZXMgc2hvdWxkIGJlIHJlbW92ZWQuIExlYXJuIG1vcmUgYWJvdXQgdGhpcyB3YXJuaW5nIGhlcmU6XFxuJyArXG4gICAgICAgICdodHRwczovL2ZiLm1lL3JlYWN0LWFzeW5jLWNvbXBvbmVudC1saWZlY3ljbGUtaG9va3MnXG4gICAgKTtcbiAgfVxuXG4gIC8vIFJlYWN0IDw9IDE2LjIgZG9lcyBub3Qgc3VwcG9ydCBzdGF0aWMgZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzLlxuICAvLyBBcyBhIHdvcmthcm91bmQsIHVzZSBjV00gYW5kIGNXUlAgdG8gaW52b2tlIHRoZSBuZXcgc3RhdGljIGxpZmVjeWNsZS5cbiAgLy8gTmV3ZXIgdmVyc2lvbnMgb2YgUmVhY3Qgd2lsbCBpZ25vcmUgdGhlc2UgbGlmZWN5Y2xlcyBpZiBnRFNGUCBleGlzdHMuXG4gIGlmICh0eXBlb2YgQ29tcG9uZW50LmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHByb3RvdHlwZS5jb21wb25lbnRXaWxsTW91bnQgPSBjb21wb25lbnRXaWxsTW91bnQ7XG4gICAgcHJvdG90eXBlLmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMgPSBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzO1xuICB9XG5cbiAgLy8gUmVhY3QgPD0gMTYuMiBkb2VzIG5vdCBzdXBwb3J0IGdldFNuYXBzaG90QmVmb3JlVXBkYXRlLlxuICAvLyBBcyBhIHdvcmthcm91bmQsIHVzZSBjV1UgdG8gaW52b2tlIHRoZSBuZXcgbGlmZWN5Y2xlLlxuICAvLyBOZXdlciB2ZXJzaW9ucyBvZiBSZWFjdCB3aWxsIGlnbm9yZSB0aGF0IGxpZmVjeWNsZSBpZiBnU0JVIGV4aXN0cy5cbiAgaWYgKHR5cGVvZiBwcm90b3R5cGUuZ2V0U25hcHNob3RCZWZvcmVVcGRhdGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICBpZiAodHlwZW9mIHByb3RvdHlwZS5jb21wb25lbnREaWRVcGRhdGUgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgJ0Nhbm5vdCBwb2x5ZmlsbCBnZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZSgpIGZvciBjb21wb25lbnRzIHRoYXQgZG8gbm90IGRlZmluZSBjb21wb25lbnREaWRVcGRhdGUoKSBvbiB0aGUgcHJvdG90eXBlJ1xuICAgICAgKTtcbiAgICB9XG5cbiAgICBwcm90b3R5cGUuY29tcG9uZW50V2lsbFVwZGF0ZSA9IGNvbXBvbmVudFdpbGxVcGRhdGU7XG5cbiAgICB2YXIgY29tcG9uZW50RGlkVXBkYXRlID0gcHJvdG90eXBlLmNvbXBvbmVudERpZFVwZGF0ZTtcblxuICAgIHByb3RvdHlwZS5jb21wb25lbnREaWRVcGRhdGUgPSBmdW5jdGlvbiBjb21wb25lbnREaWRVcGRhdGVQb2x5ZmlsbChcbiAgICAgIHByZXZQcm9wcyxcbiAgICAgIHByZXZTdGF0ZSxcbiAgICAgIG1heWJlU25hcHNob3RcbiAgICApIHtcbiAgICAgIC8vIDE2LjMrIHdpbGwgbm90IGV4ZWN1dGUgb3VyIHdpbGwtdXBkYXRlIG1ldGhvZDtcbiAgICAgIC8vIEl0IHdpbGwgcGFzcyBhIHNuYXBzaG90IHZhbHVlIHRvIGRpZC11cGRhdGUgdGhvdWdoLlxuICAgICAgLy8gT2xkZXIgdmVyc2lvbnMgd2lsbCByZXF1aXJlIG91ciBwb2x5ZmlsbGVkIHdpbGwtdXBkYXRlIHZhbHVlLlxuICAgICAgLy8gV2UgbmVlZCB0byBoYW5kbGUgYm90aCBjYXNlcywgYnV0IGNhbid0IGp1c3QgY2hlY2sgZm9yIHRoZSBwcmVzZW5jZSBvZiBcIm1heWJlU25hcHNob3RcIixcbiAgICAgIC8vIEJlY2F1c2UgZm9yIDw9IDE1LnggdmVyc2lvbnMgdGhpcyBtaWdodCBiZSBhIFwicHJldkNvbnRleHRcIiBvYmplY3QuXG4gICAgICAvLyBXZSBhbHNvIGNhbid0IGp1c3QgY2hlY2sgXCJfX3JlYWN0SW50ZXJuYWxTbmFwc2hvdFwiLFxuICAgICAgLy8gQmVjYXVzZSBnZXQtc25hcHNob3QgbWlnaHQgcmV0dXJuIGEgZmFsc3kgdmFsdWUuXG4gICAgICAvLyBTbyBjaGVjayBmb3IgdGhlIGV4cGxpY2l0IF9fcmVhY3RJbnRlcm5hbFNuYXBzaG90RmxhZyBmbGFnIHRvIGRldGVybWluZSBiZWhhdmlvci5cbiAgICAgIHZhciBzbmFwc2hvdCA9IHRoaXMuX19yZWFjdEludGVybmFsU25hcHNob3RGbGFnXG4gICAgICAgID8gdGhpcy5fX3JlYWN0SW50ZXJuYWxTbmFwc2hvdFxuICAgICAgICA6IG1heWJlU25hcHNob3Q7XG5cbiAgICAgIGNvbXBvbmVudERpZFVwZGF0ZS5jYWxsKHRoaXMsIHByZXZQcm9wcywgcHJldlN0YXRlLCBzbmFwc2hvdCk7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBDb21wb25lbnQ7XG59XG5cbmV4cG9ydCB7IHBvbHlmaWxsIH07XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuY2xhc3NOYW1lc1NoYXBlID0gZXhwb3J0cy50aW1lb3V0c1NoYXBlID0gdm9pZCAwO1xuXG52YXIgX3Byb3BUeXBlcyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInByb3AtdHlwZXNcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgdGltZW91dHNTaGFwZSA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyBfcHJvcFR5cGVzLmRlZmF1bHQub25lT2ZUeXBlKFtfcHJvcFR5cGVzLmRlZmF1bHQubnVtYmVyLCBfcHJvcFR5cGVzLmRlZmF1bHQuc2hhcGUoe1xuICBlbnRlcjogX3Byb3BUeXBlcy5kZWZhdWx0Lm51bWJlcixcbiAgZXhpdDogX3Byb3BUeXBlcy5kZWZhdWx0Lm51bWJlclxufSkuaXNSZXF1aXJlZF0pIDogbnVsbDtcbmV4cG9ydHMudGltZW91dHNTaGFwZSA9IHRpbWVvdXRzU2hhcGU7XG52YXIgY2xhc3NOYW1lc1NoYXBlID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IF9wcm9wVHlwZXMuZGVmYXVsdC5vbmVPZlR5cGUoW19wcm9wVHlwZXMuZGVmYXVsdC5zdHJpbmcsIF9wcm9wVHlwZXMuZGVmYXVsdC5zaGFwZSh7XG4gIGVudGVyOiBfcHJvcFR5cGVzLmRlZmF1bHQuc3RyaW5nLFxuICBleGl0OiBfcHJvcFR5cGVzLmRlZmF1bHQuc3RyaW5nLFxuICBhY3RpdmU6IF9wcm9wVHlwZXMuZGVmYXVsdC5zdHJpbmdcbn0pLCBfcHJvcFR5cGVzLmRlZmF1bHQuc2hhcGUoe1xuICBlbnRlcjogX3Byb3BUeXBlcy5kZWZhdWx0LnN0cmluZyxcbiAgZW50ZXJEb25lOiBfcHJvcFR5cGVzLmRlZmF1bHQuc3RyaW5nLFxuICBlbnRlckFjdGl2ZTogX3Byb3BUeXBlcy5kZWZhdWx0LnN0cmluZyxcbiAgZXhpdDogX3Byb3BUeXBlcy5kZWZhdWx0LnN0cmluZyxcbiAgZXhpdERvbmU6IF9wcm9wVHlwZXMuZGVmYXVsdC5zdHJpbmcsXG4gIGV4aXRBY3RpdmU6IF9wcm9wVHlwZXMuZGVmYXVsdC5zdHJpbmdcbn0pXSkgOiBudWxsO1xuZXhwb3J0cy5jbGFzc05hbWVzU2hhcGUgPSBjbGFzc05hbWVzU2hhcGU7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSBleHBvcnRzLkVYSVRJTkcgPSBleHBvcnRzLkVOVEVSRUQgPSBleHBvcnRzLkVOVEVSSU5HID0gZXhwb3J0cy5FWElURUQgPSBleHBvcnRzLlVOTU9VTlRFRCA9IHZvaWQgMDtcblxudmFyIFByb3BUeXBlcyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpKTtcblxudmFyIF9yZWFjdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcblxudmFyIF9yZWFjdERvbSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0LWRvbVwiKSk7XG5cbnZhciBfcmVhY3RMaWZlY3ljbGVzQ29tcGF0ID0gcmVxdWlyZShcInJlYWN0LWxpZmVjeWNsZXMtY29tcGF0XCIpO1xuXG52YXIgX1Byb3BUeXBlcyA9IHJlcXVpcmUoXCIuL3V0aWxzL1Byb3BUeXBlc1wiKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7IGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHsgcmV0dXJuIG9iajsgfSBlbHNlIHsgdmFyIG5ld09iaiA9IHt9OyBpZiAob2JqICE9IG51bGwpIHsgZm9yICh2YXIga2V5IGluIG9iaikgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkgeyB2YXIgZGVzYyA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiB7fTsgaWYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7IH0gZWxzZSB7IG5ld09ialtrZXldID0gb2JqW2tleV07IH0gfSB9IH0gbmV3T2JqLmRlZmF1bHQgPSBvYmo7IHJldHVybiBuZXdPYmo7IH0gfVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKSB7IGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9OyB2YXIgdGFyZ2V0ID0ge307IHZhciBzb3VyY2VLZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTsgdmFyIGtleSwgaTsgZm9yIChpID0gMDsgaSA8IHNvdXJjZUtleXMubGVuZ3RoOyBpKyspIHsga2V5ID0gc291cmNlS2V5c1tpXTsgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0c0xvb3NlKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcy5wcm90b3R5cGUpOyBzdWJDbGFzcy5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBzdWJDbGFzczsgc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgVU5NT1VOVEVEID0gJ3VubW91bnRlZCc7XG5leHBvcnRzLlVOTU9VTlRFRCA9IFVOTU9VTlRFRDtcbnZhciBFWElURUQgPSAnZXhpdGVkJztcbmV4cG9ydHMuRVhJVEVEID0gRVhJVEVEO1xudmFyIEVOVEVSSU5HID0gJ2VudGVyaW5nJztcbmV4cG9ydHMuRU5URVJJTkcgPSBFTlRFUklORztcbnZhciBFTlRFUkVEID0gJ2VudGVyZWQnO1xuZXhwb3J0cy5FTlRFUkVEID0gRU5URVJFRDtcbnZhciBFWElUSU5HID0gJ2V4aXRpbmcnO1xuLyoqXG4gKiBUaGUgVHJhbnNpdGlvbiBjb21wb25lbnQgbGV0cyB5b3UgZGVzY3JpYmUgYSB0cmFuc2l0aW9uIGZyb20gb25lIGNvbXBvbmVudFxuICogc3RhdGUgdG8gYW5vdGhlciBfb3ZlciB0aW1lXyB3aXRoIGEgc2ltcGxlIGRlY2xhcmF0aXZlIEFQSS4gTW9zdCBjb21tb25seVxuICogaXQncyB1c2VkIHRvIGFuaW1hdGUgdGhlIG1vdW50aW5nIGFuZCB1bm1vdW50aW5nIG9mIGEgY29tcG9uZW50LCBidXQgY2FuIGFsc29cbiAqIGJlIHVzZWQgdG8gZGVzY3JpYmUgaW4tcGxhY2UgdHJhbnNpdGlvbiBzdGF0ZXMgYXMgd2VsbC5cbiAqXG4gKiBCeSBkZWZhdWx0IHRoZSBgVHJhbnNpdGlvbmAgY29tcG9uZW50IGRvZXMgbm90IGFsdGVyIHRoZSBiZWhhdmlvciBvZiB0aGVcbiAqIGNvbXBvbmVudCBpdCByZW5kZXJzLCBpdCBvbmx5IHRyYWNrcyBcImVudGVyXCIgYW5kIFwiZXhpdFwiIHN0YXRlcyBmb3IgdGhlIGNvbXBvbmVudHMuXG4gKiBJdCdzIHVwIHRvIHlvdSB0byBnaXZlIG1lYW5pbmcgYW5kIGVmZmVjdCB0byB0aG9zZSBzdGF0ZXMuIEZvciBleGFtcGxlIHdlIGNhblxuICogYWRkIHN0eWxlcyB0byBhIGNvbXBvbmVudCB3aGVuIGl0IGVudGVycyBvciBleGl0czpcbiAqXG4gKiBgYGBqc3hcbiAqIGltcG9ydCBUcmFuc2l0aW9uIGZyb20gJ3JlYWN0LXRyYW5zaXRpb24tZ3JvdXAvVHJhbnNpdGlvbic7XG4gKlxuICogY29uc3QgZHVyYXRpb24gPSAzMDA7XG4gKlxuICogY29uc3QgZGVmYXVsdFN0eWxlID0ge1xuICogICB0cmFuc2l0aW9uOiBgb3BhY2l0eSAke2R1cmF0aW9ufW1zIGVhc2UtaW4tb3V0YCxcbiAqICAgb3BhY2l0eTogMCxcbiAqIH1cbiAqXG4gKiBjb25zdCB0cmFuc2l0aW9uU3R5bGVzID0ge1xuICogICBlbnRlcmluZzogeyBvcGFjaXR5OiAwIH0sXG4gKiAgIGVudGVyZWQ6ICB7IG9wYWNpdHk6IDEgfSxcbiAqIH07XG4gKlxuICogY29uc3QgRmFkZSA9ICh7IGluOiBpblByb3AgfSkgPT4gKFxuICogICA8VHJhbnNpdGlvbiBpbj17aW5Qcm9wfSB0aW1lb3V0PXtkdXJhdGlvbn0+XG4gKiAgICAgeyhzdGF0ZSkgPT4gKFxuICogICAgICAgPGRpdiBzdHlsZT17e1xuICogICAgICAgICAuLi5kZWZhdWx0U3R5bGUsXG4gKiAgICAgICAgIC4uLnRyYW5zaXRpb25TdHlsZXNbc3RhdGVdXG4gKiAgICAgICB9fT5cbiAqICAgICAgICAgSSdtIGEgZmFkZSBUcmFuc2l0aW9uIVxuICogICAgICAgPC9kaXY+XG4gKiAgICAgKX1cbiAqICAgPC9UcmFuc2l0aW9uPlxuICogKTtcbiAqIGBgYFxuICpcbiAqIEFzIG5vdGVkIHRoZSBgVHJhbnNpdGlvbmAgY29tcG9uZW50IGRvZXNuJ3QgX2RvXyBhbnl0aGluZyBieSBpdHNlbGYgdG8gaXRzIGNoaWxkIGNvbXBvbmVudC5cbiAqIFdoYXQgaXQgZG9lcyBkbyBpcyB0cmFjayB0cmFuc2l0aW9uIHN0YXRlcyBvdmVyIHRpbWUgc28geW91IGNhbiB1cGRhdGUgdGhlXG4gKiBjb21wb25lbnQgKHN1Y2ggYXMgYnkgYWRkaW5nIHN0eWxlcyBvciBjbGFzc2VzKSB3aGVuIGl0IGNoYW5nZXMgc3RhdGVzLlxuICpcbiAqIFRoZXJlIGFyZSA0IG1haW4gc3RhdGVzIGEgVHJhbnNpdGlvbiBjYW4gYmUgaW46XG4gKiAgLSBgJ2VudGVyaW5nJ2BcbiAqICAtIGAnZW50ZXJlZCdgXG4gKiAgLSBgJ2V4aXRpbmcnYFxuICogIC0gYCdleGl0ZWQnYFxuICpcbiAqIFRyYW5zaXRpb24gc3RhdGUgaXMgdG9nZ2xlZCB2aWEgdGhlIGBpbmAgcHJvcC4gV2hlbiBgdHJ1ZWAgdGhlIGNvbXBvbmVudCBiZWdpbnMgdGhlXG4gKiBcIkVudGVyXCIgc3RhZ2UuIER1cmluZyB0aGlzIHN0YWdlLCB0aGUgY29tcG9uZW50IHdpbGwgc2hpZnQgZnJvbSBpdHMgY3VycmVudCB0cmFuc2l0aW9uIHN0YXRlLFxuICogdG8gYCdlbnRlcmluZydgIGZvciB0aGUgZHVyYXRpb24gb2YgdGhlIHRyYW5zaXRpb24gYW5kIHRoZW4gdG8gdGhlIGAnZW50ZXJlZCdgIHN0YWdlIG9uY2VcbiAqIGl0J3MgY29tcGxldGUuIExldCdzIHRha2UgdGhlIGZvbGxvd2luZyBleGFtcGxlOlxuICpcbiAqIGBgYGpzeFxuICogc3RhdGUgPSB7IGluOiBmYWxzZSB9O1xuICpcbiAqIHRvZ2dsZUVudGVyU3RhdGUgPSAoKSA9PiB7XG4gKiAgIHRoaXMuc2V0U3RhdGUoeyBpbjogdHJ1ZSB9KTtcbiAqIH1cbiAqXG4gKiByZW5kZXIoKSB7XG4gKiAgIHJldHVybiAoXG4gKiAgICAgPGRpdj5cbiAqICAgICAgIDxUcmFuc2l0aW9uIGluPXt0aGlzLnN0YXRlLmlufSB0aW1lb3V0PXs1MDB9IC8+XG4gKiAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMudG9nZ2xlRW50ZXJTdGF0ZX0+Q2xpY2sgdG8gRW50ZXI8L2J1dHRvbj5cbiAqICAgICA8L2Rpdj5cbiAqICAgKTtcbiAqIH1cbiAqIGBgYFxuICpcbiAqIFdoZW4gdGhlIGJ1dHRvbiBpcyBjbGlja2VkIHRoZSBjb21wb25lbnQgd2lsbCBzaGlmdCB0byB0aGUgYCdlbnRlcmluZydgIHN0YXRlIGFuZFxuICogc3RheSB0aGVyZSBmb3IgNTAwbXMgKHRoZSB2YWx1ZSBvZiBgdGltZW91dGApIGJlZm9yZSBpdCBmaW5hbGx5IHN3aXRjaGVzIHRvIGAnZW50ZXJlZCdgLlxuICpcbiAqIFdoZW4gYGluYCBpcyBgZmFsc2VgIHRoZSBzYW1lIHRoaW5nIGhhcHBlbnMgZXhjZXB0IHRoZSBzdGF0ZSBtb3ZlcyBmcm9tIGAnZXhpdGluZydgIHRvIGAnZXhpdGVkJ2AuXG4gKlxuICogIyMgVGltaW5nXG4gKlxuICogVGltaW5nIGlzIG9mdGVuIHRoZSB0cmlja2llc3QgcGFydCBvZiBhbmltYXRpb24sIG1pc3Rha2VzIGNhbiByZXN1bHQgaW4gc2xpZ2h0IGRlbGF5c1xuICogdGhhdCBhcmUgaGFyZCB0byBwaW4gZG93bi4gQSBjb21tb24gZXhhbXBsZSBpcyB3aGVuIHlvdSB3YW50IHRvIGFkZCBhbiBleGl0IHRyYW5zaXRpb24sXG4gKiB5b3Ugc2hvdWxkIHNldCB0aGUgZGVzaXJlZCBmaW5hbCBzdHlsZXMgd2hlbiB0aGUgc3RhdGUgaXMgYCdleGl0aW5nJ2AuIFRoYXQncyB3aGVuIHRoZVxuICogdHJhbnNpdGlvbiB0byB0aG9zZSBzdHlsZXMgd2lsbCBzdGFydCBhbmQsIGlmIHlvdSBtYXRjaGVkIHRoZSBgdGltZW91dGAgcHJvcCB3aXRoIHRoZVxuICogQ1NTIFRyYW5zaXRpb24gZHVyYXRpb24sIGl0IHdpbGwgZW5kIGV4YWN0bHkgd2hlbiB0aGUgc3RhdGUgY2hhbmdlcyB0byBgJ2V4aXRlZCdgLlxuICpcbiAqID4gKipOb3RlKio6IEZvciBzaW1wbGVyIHRyYW5zaXRpb25zIHRoZSBgVHJhbnNpdGlvbmAgY29tcG9uZW50IG1pZ2h0IGJlIGVub3VnaCwgYnV0XG4gKiA+IHRha2UgaW50byBhY2NvdW50IHRoYXQgaXQncyBwbGF0Zm9ybS1hZ25vc3RpYywgd2hpbGUgdGhlIGBDU1NUcmFuc2l0aW9uYCBjb21wb25lbnRcbiAqID4gW2ZvcmNlcyByZWZsb3dzXShodHRwczovL2dpdGh1Yi5jb20vcmVhY3Rqcy9yZWFjdC10cmFuc2l0aW9uLWdyb3VwL2Jsb2IvNTAwNzMwM2U3MjlhNzRiZTY2YTIxYzNlMjIwNWU0OTE2ODIxNTI0Yi9zcmMvQ1NTVHJhbnNpdGlvbi5qcyNMMjA4LUwyMTUpXG4gKiA+IGluIG9yZGVyIHRvIG1ha2UgbW9yZSBjb21wbGV4IHRyYW5zaXRpb25zIG1vcmUgcHJlZGljdGFibGUuIEZvciBleGFtcGxlLCBldmVuIHRob3VnaFxuICogPiBjbGFzc2VzIGBleGFtcGxlLWVudGVyYCBhbmQgYGV4YW1wbGUtZW50ZXItYWN0aXZlYCBhcmUgYXBwbGllZCBpbW1lZGlhdGVseSBvbmUgYWZ0ZXJcbiAqID4gYW5vdGhlciwgeW91IGNhbiBzdGlsbCB0cmFuc2l0aW9uIGZyb20gb25lIHRvIHRoZSBvdGhlciBiZWNhdXNlIG9mIHRoZSBmb3JjZWQgcmVmbG93XG4gKiA+IChyZWFkIFt0aGlzIGlzc3VlXShodHRwczovL2dpdGh1Yi5jb20vcmVhY3Rqcy9yZWFjdC10cmFuc2l0aW9uLWdyb3VwL2lzc3Vlcy8xNTkjaXNzdWVjb21tZW50LTMyMjc2MTE3MSlcbiAqID4gZm9yIG1vcmUgaW5mbykuIFRha2UgdGhpcyBpbnRvIGFjY291bnQgd2hlbiBjaG9vc2luZyBiZXR3ZWVuIGBUcmFuc2l0aW9uYCBhbmRcbiAqID4gYENTU1RyYW5zaXRpb25gLlxuICovXG5cbmV4cG9ydHMuRVhJVElORyA9IEVYSVRJTkc7XG5cbnZhciBUcmFuc2l0aW9uID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0c0xvb3NlKFRyYW5zaXRpb24sIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIFRyYW5zaXRpb24ocHJvcHMsIGNvbnRleHQpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfdGhpcyA9IF9SZWFjdCRDb21wb25lbnQuY2FsbCh0aGlzLCBwcm9wcywgY29udGV4dCkgfHwgdGhpcztcbiAgICB2YXIgcGFyZW50R3JvdXAgPSBjb250ZXh0LnRyYW5zaXRpb25Hcm91cDsgLy8gSW4gdGhlIGNvbnRleHQgb2YgYSBUcmFuc2l0aW9uR3JvdXAgYWxsIGVudGVycyBhcmUgcmVhbGx5IGFwcGVhcnNcblxuICAgIHZhciBhcHBlYXIgPSBwYXJlbnRHcm91cCAmJiAhcGFyZW50R3JvdXAuaXNNb3VudGluZyA/IHByb3BzLmVudGVyIDogcHJvcHMuYXBwZWFyO1xuICAgIHZhciBpbml0aWFsU3RhdHVzO1xuICAgIF90aGlzLmFwcGVhclN0YXR1cyA9IG51bGw7XG5cbiAgICBpZiAocHJvcHMuaW4pIHtcbiAgICAgIGlmIChhcHBlYXIpIHtcbiAgICAgICAgaW5pdGlhbFN0YXR1cyA9IEVYSVRFRDtcbiAgICAgICAgX3RoaXMuYXBwZWFyU3RhdHVzID0gRU5URVJJTkc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpbml0aWFsU3RhdHVzID0gRU5URVJFRDtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHByb3BzLnVubW91bnRPbkV4aXQgfHwgcHJvcHMubW91bnRPbkVudGVyKSB7XG4gICAgICAgIGluaXRpYWxTdGF0dXMgPSBVTk1PVU5URUQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpbml0aWFsU3RhdHVzID0gRVhJVEVEO1xuICAgICAgfVxuICAgIH1cblxuICAgIF90aGlzLnN0YXRlID0ge1xuICAgICAgc3RhdHVzOiBpbml0aWFsU3RhdHVzXG4gICAgfTtcbiAgICBfdGhpcy5uZXh0Q2FsbGJhY2sgPSBudWxsO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBUcmFuc2l0aW9uLnByb3RvdHlwZTtcblxuICBfcHJvdG8uZ2V0Q2hpbGRDb250ZXh0ID0gZnVuY3Rpb24gZ2V0Q2hpbGRDb250ZXh0KCkge1xuICAgIHJldHVybiB7XG4gICAgICB0cmFuc2l0aW9uR3JvdXA6IG51bGwgLy8gYWxsb3dzIGZvciBuZXN0ZWQgVHJhbnNpdGlvbnNcblxuICAgIH07XG4gIH07XG5cbiAgVHJhbnNpdGlvbi5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMgPSBmdW5jdGlvbiBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMoX3JlZiwgcHJldlN0YXRlKSB7XG4gICAgdmFyIG5leHRJbiA9IF9yZWYuaW47XG5cbiAgICBpZiAobmV4dEluICYmIHByZXZTdGF0ZS5zdGF0dXMgPT09IFVOTU9VTlRFRCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc3RhdHVzOiBFWElURURcbiAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH07IC8vIGdldFNuYXBzaG90QmVmb3JlVXBkYXRlKHByZXZQcm9wcykge1xuICAvLyAgIGxldCBuZXh0U3RhdHVzID0gbnVsbFxuICAvLyAgIGlmIChwcmV2UHJvcHMgIT09IHRoaXMucHJvcHMpIHtcbiAgLy8gICAgIGNvbnN0IHsgc3RhdHVzIH0gPSB0aGlzLnN0YXRlXG4gIC8vICAgICBpZiAodGhpcy5wcm9wcy5pbikge1xuICAvLyAgICAgICBpZiAoc3RhdHVzICE9PSBFTlRFUklORyAmJiBzdGF0dXMgIT09IEVOVEVSRUQpIHtcbiAgLy8gICAgICAgICBuZXh0U3RhdHVzID0gRU5URVJJTkdcbiAgLy8gICAgICAgfVxuICAvLyAgICAgfSBlbHNlIHtcbiAgLy8gICAgICAgaWYgKHN0YXR1cyA9PT0gRU5URVJJTkcgfHwgc3RhdHVzID09PSBFTlRFUkVEKSB7XG4gIC8vICAgICAgICAgbmV4dFN0YXR1cyA9IEVYSVRJTkdcbiAgLy8gICAgICAgfVxuICAvLyAgICAgfVxuICAvLyAgIH1cbiAgLy8gICByZXR1cm4geyBuZXh0U3RhdHVzIH1cbiAgLy8gfVxuXG5cbiAgX3Byb3RvLmNvbXBvbmVudERpZE1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy51cGRhdGVTdGF0dXModHJ1ZSwgdGhpcy5hcHBlYXJTdGF0dXMpO1xuICB9O1xuXG4gIF9wcm90by5jb21wb25lbnREaWRVcGRhdGUgPSBmdW5jdGlvbiBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XG4gICAgdmFyIG5leHRTdGF0dXMgPSBudWxsO1xuXG4gICAgaWYgKHByZXZQcm9wcyAhPT0gdGhpcy5wcm9wcykge1xuICAgICAgdmFyIHN0YXR1cyA9IHRoaXMuc3RhdGUuc3RhdHVzO1xuXG4gICAgICBpZiAodGhpcy5wcm9wcy5pbikge1xuICAgICAgICBpZiAoc3RhdHVzICE9PSBFTlRFUklORyAmJiBzdGF0dXMgIT09IEVOVEVSRUQpIHtcbiAgICAgICAgICBuZXh0U3RhdHVzID0gRU5URVJJTkc7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChzdGF0dXMgPT09IEVOVEVSSU5HIHx8IHN0YXR1cyA9PT0gRU5URVJFRCkge1xuICAgICAgICAgIG5leHRTdGF0dXMgPSBFWElUSU5HO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy51cGRhdGVTdGF0dXMoZmFsc2UsIG5leHRTdGF0dXMpO1xuICB9O1xuXG4gIF9wcm90by5jb21wb25lbnRXaWxsVW5tb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMuY2FuY2VsTmV4dENhbGxiYWNrKCk7XG4gIH07XG5cbiAgX3Byb3RvLmdldFRpbWVvdXRzID0gZnVuY3Rpb24gZ2V0VGltZW91dHMoKSB7XG4gICAgdmFyIHRpbWVvdXQgPSB0aGlzLnByb3BzLnRpbWVvdXQ7XG4gICAgdmFyIGV4aXQsIGVudGVyLCBhcHBlYXI7XG4gICAgZXhpdCA9IGVudGVyID0gYXBwZWFyID0gdGltZW91dDtcblxuICAgIGlmICh0aW1lb3V0ICE9IG51bGwgJiYgdHlwZW9mIHRpbWVvdXQgIT09ICdudW1iZXInKSB7XG4gICAgICBleGl0ID0gdGltZW91dC5leGl0O1xuICAgICAgZW50ZXIgPSB0aW1lb3V0LmVudGVyO1xuICAgICAgYXBwZWFyID0gdGltZW91dC5hcHBlYXI7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIGV4aXQ6IGV4aXQsXG4gICAgICBlbnRlcjogZW50ZXIsXG4gICAgICBhcHBlYXI6IGFwcGVhclxuICAgIH07XG4gIH07XG5cbiAgX3Byb3RvLnVwZGF0ZVN0YXR1cyA9IGZ1bmN0aW9uIHVwZGF0ZVN0YXR1cyhtb3VudGluZywgbmV4dFN0YXR1cykge1xuICAgIGlmIChtb3VudGluZyA9PT0gdm9pZCAwKSB7XG4gICAgICBtb3VudGluZyA9IGZhbHNlO1xuICAgIH1cblxuICAgIGlmIChuZXh0U3RhdHVzICE9PSBudWxsKSB7XG4gICAgICAvLyBuZXh0U3RhdHVzIHdpbGwgYWx3YXlzIGJlIEVOVEVSSU5HIG9yIEVYSVRJTkcuXG4gICAgICB0aGlzLmNhbmNlbE5leHRDYWxsYmFjaygpO1xuXG4gICAgICB2YXIgbm9kZSA9IF9yZWFjdERvbS5kZWZhdWx0LmZpbmRET01Ob2RlKHRoaXMpO1xuXG4gICAgICBpZiAobmV4dFN0YXR1cyA9PT0gRU5URVJJTkcpIHtcbiAgICAgICAgdGhpcy5wZXJmb3JtRW50ZXIobm9kZSwgbW91bnRpbmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5wZXJmb3JtRXhpdChub2RlKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHRoaXMucHJvcHMudW5tb3VudE9uRXhpdCAmJiB0aGlzLnN0YXRlLnN0YXR1cyA9PT0gRVhJVEVEKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgc3RhdHVzOiBVTk1PVU5URURcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8ucGVyZm9ybUVudGVyID0gZnVuY3Rpb24gcGVyZm9ybUVudGVyKG5vZGUsIG1vdW50aW5nKSB7XG4gICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICB2YXIgZW50ZXIgPSB0aGlzLnByb3BzLmVudGVyO1xuICAgIHZhciBhcHBlYXJpbmcgPSB0aGlzLmNvbnRleHQudHJhbnNpdGlvbkdyb3VwID8gdGhpcy5jb250ZXh0LnRyYW5zaXRpb25Hcm91cC5pc01vdW50aW5nIDogbW91bnRpbmc7XG4gICAgdmFyIHRpbWVvdXRzID0gdGhpcy5nZXRUaW1lb3V0cygpOyAvLyBubyBlbnRlciBhbmltYXRpb24gc2tpcCByaWdodCB0byBFTlRFUkVEXG4gICAgLy8gaWYgd2UgYXJlIG1vdW50aW5nIGFuZCBydW5uaW5nIHRoaXMgaXQgbWVhbnMgYXBwZWFyIF9tdXN0XyBiZSBzZXRcblxuICAgIGlmICghbW91bnRpbmcgJiYgIWVudGVyKSB7XG4gICAgICB0aGlzLnNhZmVTZXRTdGF0ZSh7XG4gICAgICAgIHN0YXR1czogRU5URVJFRFxuICAgICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICBfdGhpczIucHJvcHMub25FbnRlcmVkKG5vZGUpO1xuICAgICAgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5wcm9wcy5vbkVudGVyKG5vZGUsIGFwcGVhcmluZyk7XG4gICAgdGhpcy5zYWZlU2V0U3RhdGUoe1xuICAgICAgc3RhdHVzOiBFTlRFUklOR1xuICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgIF90aGlzMi5wcm9wcy5vbkVudGVyaW5nKG5vZGUsIGFwcGVhcmluZyk7IC8vIEZJWE1FOiBhcHBlYXIgdGltZW91dD9cblxuXG4gICAgICBfdGhpczIub25UcmFuc2l0aW9uRW5kKG5vZGUsIHRpbWVvdXRzLmVudGVyLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIF90aGlzMi5zYWZlU2V0U3RhdGUoe1xuICAgICAgICAgIHN0YXR1czogRU5URVJFRFxuICAgICAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgX3RoaXMyLnByb3BzLm9uRW50ZXJlZChub2RlLCBhcHBlYXJpbmcpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIF9wcm90by5wZXJmb3JtRXhpdCA9IGZ1bmN0aW9uIHBlcmZvcm1FeGl0KG5vZGUpIHtcbiAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgIHZhciBleGl0ID0gdGhpcy5wcm9wcy5leGl0O1xuICAgIHZhciB0aW1lb3V0cyA9IHRoaXMuZ2V0VGltZW91dHMoKTsgLy8gbm8gZXhpdCBhbmltYXRpb24gc2tpcCByaWdodCB0byBFWElURURcblxuICAgIGlmICghZXhpdCkge1xuICAgICAgdGhpcy5zYWZlU2V0U3RhdGUoe1xuICAgICAgICBzdGF0dXM6IEVYSVRFRFxuICAgICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICBfdGhpczMucHJvcHMub25FeGl0ZWQobm9kZSk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnByb3BzLm9uRXhpdChub2RlKTtcbiAgICB0aGlzLnNhZmVTZXRTdGF0ZSh7XG4gICAgICBzdGF0dXM6IEVYSVRJTkdcbiAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICBfdGhpczMucHJvcHMub25FeGl0aW5nKG5vZGUpO1xuXG4gICAgICBfdGhpczMub25UcmFuc2l0aW9uRW5kKG5vZGUsIHRpbWVvdXRzLmV4aXQsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgX3RoaXMzLnNhZmVTZXRTdGF0ZSh7XG4gICAgICAgICAgc3RhdHVzOiBFWElURURcbiAgICAgICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIF90aGlzMy5wcm9wcy5vbkV4aXRlZChub2RlKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICBfcHJvdG8uY2FuY2VsTmV4dENhbGxiYWNrID0gZnVuY3Rpb24gY2FuY2VsTmV4dENhbGxiYWNrKCkge1xuICAgIGlmICh0aGlzLm5leHRDYWxsYmFjayAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5uZXh0Q2FsbGJhY2suY2FuY2VsKCk7XG4gICAgICB0aGlzLm5leHRDYWxsYmFjayA9IG51bGw7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5zYWZlU2V0U3RhdGUgPSBmdW5jdGlvbiBzYWZlU2V0U3RhdGUobmV4dFN0YXRlLCBjYWxsYmFjaykge1xuICAgIC8vIFRoaXMgc2hvdWxkbid0IGJlIG5lY2Vzc2FyeSwgYnV0IHRoZXJlIGFyZSB3ZWlyZCByYWNlIGNvbmRpdGlvbnMgd2l0aFxuICAgIC8vIHNldFN0YXRlIGNhbGxiYWNrcyBhbmQgdW5tb3VudGluZyBpbiB0ZXN0aW5nLCBzbyBhbHdheXMgbWFrZSBzdXJlIHRoYXRcbiAgICAvLyB3ZSBjYW4gY2FuY2VsIGFueSBwZW5kaW5nIHNldFN0YXRlIGNhbGxiYWNrcyBhZnRlciB3ZSB1bm1vdW50LlxuICAgIGNhbGxiYWNrID0gdGhpcy5zZXROZXh0Q2FsbGJhY2soY2FsbGJhY2spO1xuICAgIHRoaXMuc2V0U3RhdGUobmV4dFN0YXRlLCBjYWxsYmFjayk7XG4gIH07XG5cbiAgX3Byb3RvLnNldE5leHRDYWxsYmFjayA9IGZ1bmN0aW9uIHNldE5leHRDYWxsYmFjayhjYWxsYmFjaykge1xuICAgIHZhciBfdGhpczQgPSB0aGlzO1xuXG4gICAgdmFyIGFjdGl2ZSA9IHRydWU7XG5cbiAgICB0aGlzLm5leHRDYWxsYmFjayA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgaWYgKGFjdGl2ZSkge1xuICAgICAgICBhY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgX3RoaXM0Lm5leHRDYWxsYmFjayA9IG51bGw7XG4gICAgICAgIGNhbGxiYWNrKGV2ZW50KTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgdGhpcy5uZXh0Q2FsbGJhY2suY2FuY2VsID0gZnVuY3Rpb24gKCkge1xuICAgICAgYWN0aXZlID0gZmFsc2U7XG4gICAgfTtcblxuICAgIHJldHVybiB0aGlzLm5leHRDYWxsYmFjaztcbiAgfTtcblxuICBfcHJvdG8ub25UcmFuc2l0aW9uRW5kID0gZnVuY3Rpb24gb25UcmFuc2l0aW9uRW5kKG5vZGUsIHRpbWVvdXQsIGhhbmRsZXIpIHtcbiAgICB0aGlzLnNldE5leHRDYWxsYmFjayhoYW5kbGVyKTtcblxuICAgIGlmIChub2RlKSB7XG4gICAgICBpZiAodGhpcy5wcm9wcy5hZGRFbmRMaXN0ZW5lcikge1xuICAgICAgICB0aGlzLnByb3BzLmFkZEVuZExpc3RlbmVyKG5vZGUsIHRoaXMubmV4dENhbGxiYWNrKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRpbWVvdXQgIT0gbnVsbCkge1xuICAgICAgICBzZXRUaW1lb3V0KHRoaXMubmV4dENhbGxiYWNrLCB0aW1lb3V0KTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgc2V0VGltZW91dCh0aGlzLm5leHRDYWxsYmFjaywgMCk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIHN0YXR1cyA9IHRoaXMuc3RhdGUuc3RhdHVzO1xuXG4gICAgaWYgKHN0YXR1cyA9PT0gVU5NT1VOVEVEKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICB2YXIgX3RoaXMkcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICBjaGlsZHJlbiA9IF90aGlzJHByb3BzLmNoaWxkcmVuLFxuICAgICAgICBjaGlsZFByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UoX3RoaXMkcHJvcHMsIFtcImNoaWxkcmVuXCJdKTsgLy8gZmlsdGVyIHByb3BzIGZvciBUcmFuc3RpdGlvblxuXG5cbiAgICBkZWxldGUgY2hpbGRQcm9wcy5pbjtcbiAgICBkZWxldGUgY2hpbGRQcm9wcy5tb3VudE9uRW50ZXI7XG4gICAgZGVsZXRlIGNoaWxkUHJvcHMudW5tb3VudE9uRXhpdDtcbiAgICBkZWxldGUgY2hpbGRQcm9wcy5hcHBlYXI7XG4gICAgZGVsZXRlIGNoaWxkUHJvcHMuZW50ZXI7XG4gICAgZGVsZXRlIGNoaWxkUHJvcHMuZXhpdDtcbiAgICBkZWxldGUgY2hpbGRQcm9wcy50aW1lb3V0O1xuICAgIGRlbGV0ZSBjaGlsZFByb3BzLmFkZEVuZExpc3RlbmVyO1xuICAgIGRlbGV0ZSBjaGlsZFByb3BzLm9uRW50ZXI7XG4gICAgZGVsZXRlIGNoaWxkUHJvcHMub25FbnRlcmluZztcbiAgICBkZWxldGUgY2hpbGRQcm9wcy5vbkVudGVyZWQ7XG4gICAgZGVsZXRlIGNoaWxkUHJvcHMub25FeGl0O1xuICAgIGRlbGV0ZSBjaGlsZFByb3BzLm9uRXhpdGluZztcbiAgICBkZWxldGUgY2hpbGRQcm9wcy5vbkV4aXRlZDtcblxuICAgIGlmICh0eXBlb2YgY2hpbGRyZW4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiBjaGlsZHJlbihzdGF0dXMsIGNoaWxkUHJvcHMpO1xuICAgIH1cblxuICAgIHZhciBjaGlsZCA9IF9yZWFjdC5kZWZhdWx0LkNoaWxkcmVuLm9ubHkoY2hpbGRyZW4pO1xuXG4gICAgcmV0dXJuIF9yZWFjdC5kZWZhdWx0LmNsb25lRWxlbWVudChjaGlsZCwgY2hpbGRQcm9wcyk7XG4gIH07XG5cbiAgcmV0dXJuIFRyYW5zaXRpb247XG59KF9yZWFjdC5kZWZhdWx0LkNvbXBvbmVudCk7XG5cblRyYW5zaXRpb24uY29udGV4dFR5cGVzID0ge1xuICB0cmFuc2l0aW9uR3JvdXA6IFByb3BUeXBlcy5vYmplY3Rcbn07XG5UcmFuc2l0aW9uLmNoaWxkQ29udGV4dFR5cGVzID0ge1xuICB0cmFuc2l0aW9uR3JvdXA6IGZ1bmN0aW9uIHRyYW5zaXRpb25Hcm91cCgpIHt9XG59O1xuVHJhbnNpdGlvbi5wcm9wVHlwZXMgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyB7XG4gIC8qKlxuICAgKiBBIGBmdW5jdGlvbmAgY2hpbGQgY2FuIGJlIHVzZWQgaW5zdGVhZCBvZiBhIFJlYWN0IGVsZW1lbnQuXG4gICAqIFRoaXMgZnVuY3Rpb24gaXMgY2FsbGVkIHdpdGggdGhlIGN1cnJlbnQgdHJhbnNpdGlvbiBzdGF0dXNcbiAgICogKCdlbnRlcmluZycsICdlbnRlcmVkJywgJ2V4aXRpbmcnLCAnZXhpdGVkJywgJ3VubW91bnRlZCcpLCB3aGljaCBjYW4gYmUgdXNlZFxuICAgKiB0byBhcHBseSBjb250ZXh0IHNwZWNpZmljIHByb3BzIHRvIGEgY29tcG9uZW50LlxuICAgKlxuICAgKiBgYGBqc3hcbiAgICogPFRyYW5zaXRpb24gdGltZW91dD17MTUwfT5cbiAgICogICB7KHN0YXR1cykgPT4gKFxuICAgKiAgICAgPE15Q29tcG9uZW50IGNsYXNzTmFtZT17YGZhZGUgZmFkZS0ke3N0YXR1c31gfSAvPlxuICAgKiAgICl9XG4gICAqIDwvVHJhbnNpdGlvbj5cbiAgICogYGBgXG4gICAqL1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCwgUHJvcFR5cGVzLmVsZW1lbnQuaXNSZXF1aXJlZF0pLmlzUmVxdWlyZWQsXG5cbiAgLyoqXG4gICAqIFNob3cgdGhlIGNvbXBvbmVudDsgdHJpZ2dlcnMgdGhlIGVudGVyIG9yIGV4aXQgc3RhdGVzXG4gICAqL1xuICBpbjogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIEJ5IGRlZmF1bHQgdGhlIGNoaWxkIGNvbXBvbmVudCBpcyBtb3VudGVkIGltbWVkaWF0ZWx5IGFsb25nIHdpdGhcbiAgICogdGhlIHBhcmVudCBgVHJhbnNpdGlvbmAgY29tcG9uZW50LiBJZiB5b3Ugd2FudCB0byBcImxhenkgbW91bnRcIiB0aGUgY29tcG9uZW50IG9uIHRoZVxuICAgKiBmaXJzdCBgaW49e3RydWV9YCB5b3UgY2FuIHNldCBgbW91bnRPbkVudGVyYC4gQWZ0ZXIgdGhlIGZpcnN0IGVudGVyIHRyYW5zaXRpb24gdGhlIGNvbXBvbmVudCB3aWxsIHN0YXlcbiAgICogbW91bnRlZCwgZXZlbiBvbiBcImV4aXRlZFwiLCB1bmxlc3MgeW91IGFsc28gc3BlY2lmeSBgdW5tb3VudE9uRXhpdGAuXG4gICAqL1xuICBtb3VudE9uRW50ZXI6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBCeSBkZWZhdWx0IHRoZSBjaGlsZCBjb21wb25lbnQgc3RheXMgbW91bnRlZCBhZnRlciBpdCByZWFjaGVzIHRoZSBgJ2V4aXRlZCdgIHN0YXRlLlxuICAgKiBTZXQgYHVubW91bnRPbkV4aXRgIGlmIHlvdSdkIHByZWZlciB0byB1bm1vdW50IHRoZSBjb21wb25lbnQgYWZ0ZXIgaXQgZmluaXNoZXMgZXhpdGluZy5cbiAgICovXG4gIHVubW91bnRPbkV4aXQ6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBOb3JtYWxseSBhIGNvbXBvbmVudCBpcyBub3QgdHJhbnNpdGlvbmVkIGlmIGl0IGlzIHNob3duIHdoZW4gdGhlIGA8VHJhbnNpdGlvbj5gIGNvbXBvbmVudCBtb3VudHMuXG4gICAqIElmIHlvdSB3YW50IHRvIHRyYW5zaXRpb24gb24gdGhlIGZpcnN0IG1vdW50IHNldCBgYXBwZWFyYCB0byBgdHJ1ZWAsIGFuZCB0aGVcbiAgICogY29tcG9uZW50IHdpbGwgdHJhbnNpdGlvbiBpbiBhcyBzb29uIGFzIHRoZSBgPFRyYW5zaXRpb24+YCBtb3VudHMuXG4gICAqXG4gICAqID4gTm90ZTogdGhlcmUgYXJlIG5vIHNwZWNpZmljIFwiYXBwZWFyXCIgc3RhdGVzLiBgYXBwZWFyYCBvbmx5IGFkZHMgYW4gYWRkaXRpb25hbCBgZW50ZXJgIHRyYW5zaXRpb24uXG4gICAqL1xuICBhcHBlYXI6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBFbmFibGUgb3IgZGlzYWJsZSBlbnRlciB0cmFuc2l0aW9ucy5cbiAgICovXG4gIGVudGVyOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogRW5hYmxlIG9yIGRpc2FibGUgZXhpdCB0cmFuc2l0aW9ucy5cbiAgICovXG4gIGV4aXQ6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBUaGUgZHVyYXRpb24gb2YgdGhlIHRyYW5zaXRpb24sIGluIG1pbGxpc2Vjb25kcy5cbiAgICogUmVxdWlyZWQgdW5sZXNzIGBhZGRFbmRMaXN0ZW5lcmAgaXMgcHJvdmlkZWRcbiAgICpcbiAgICogWW91IG1heSBzcGVjaWZ5IGEgc2luZ2xlIHRpbWVvdXQgZm9yIGFsbCB0cmFuc2l0aW9ucyBsaWtlOiBgdGltZW91dD17NTAwfWAsXG4gICAqIG9yIGluZGl2aWR1YWxseSBsaWtlOlxuICAgKlxuICAgKiBgYGBqc3hcbiAgICogdGltZW91dD17e1xuICAgKiAgZW50ZXI6IDMwMCxcbiAgICogIGV4aXQ6IDUwMCxcbiAgICogfX1cbiAgICogYGBgXG4gICAqXG4gICAqIEB0eXBlIHtudW1iZXIgfCB7IGVudGVyPzogbnVtYmVyLCBleGl0PzogbnVtYmVyIH19XG4gICAqL1xuICB0aW1lb3V0OiBmdW5jdGlvbiB0aW1lb3V0KHByb3BzKSB7XG4gICAgdmFyIHB0ID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gX1Byb3BUeXBlcy50aW1lb3V0c1NoYXBlIDoge307O1xuICAgIGlmICghcHJvcHMuYWRkRW5kTGlzdGVuZXIpIHB0ID0gcHQuaXNSZXF1aXJlZDtcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHJldHVybiBwdC5hcHBseSh2b2lkIDAsIFtwcm9wc10uY29uY2F0KGFyZ3MpKTtcbiAgfSxcblxuICAvKipcbiAgICogQWRkIGEgY3VzdG9tIHRyYW5zaXRpb24gZW5kIHRyaWdnZXIuIENhbGxlZCB3aXRoIHRoZSB0cmFuc2l0aW9uaW5nXG4gICAqIERPTSBub2RlIGFuZCBhIGBkb25lYCBjYWxsYmFjay4gQWxsb3dzIGZvciBtb3JlIGZpbmUgZ3JhaW5lZCB0cmFuc2l0aW9uIGVuZFxuICAgKiBsb2dpYy4gKipOb3RlOioqIFRpbWVvdXRzIGFyZSBzdGlsbCB1c2VkIGFzIGEgZmFsbGJhY2sgaWYgcHJvdmlkZWQuXG4gICAqXG4gICAqIGBgYGpzeFxuICAgKiBhZGRFbmRMaXN0ZW5lcj17KG5vZGUsIGRvbmUpID0+IHtcbiAgICogICAvLyB1c2UgdGhlIGNzcyB0cmFuc2l0aW9uZW5kIGV2ZW50IHRvIG1hcmsgdGhlIGZpbmlzaCBvZiBhIHRyYW5zaXRpb25cbiAgICogICBub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCBkb25lLCBmYWxzZSk7XG4gICAqIH19XG4gICAqIGBgYFxuICAgKi9cbiAgYWRkRW5kTGlzdGVuZXI6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmaXJlZCBiZWZvcmUgdGhlIFwiZW50ZXJpbmdcIiBzdGF0dXMgaXMgYXBwbGllZC4gQW4gZXh0cmEgcGFyYW1ldGVyXG4gICAqIGBpc0FwcGVhcmluZ2AgaXMgc3VwcGxpZWQgdG8gaW5kaWNhdGUgaWYgdGhlIGVudGVyIHN0YWdlIGlzIG9jY3VycmluZyBvbiB0aGUgaW5pdGlhbCBtb3VudFxuICAgKlxuICAgKiBAdHlwZSBGdW5jdGlvbihub2RlOiBIdG1sRWxlbWVudCwgaXNBcHBlYXJpbmc6IGJvb2wpIC0+IHZvaWRcbiAgICovXG4gIG9uRW50ZXI6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmaXJlZCBhZnRlciB0aGUgXCJlbnRlcmluZ1wiIHN0YXR1cyBpcyBhcHBsaWVkLiBBbiBleHRyYSBwYXJhbWV0ZXJcbiAgICogYGlzQXBwZWFyaW5nYCBpcyBzdXBwbGllZCB0byBpbmRpY2F0ZSBpZiB0aGUgZW50ZXIgc3RhZ2UgaXMgb2NjdXJyaW5nIG9uIHRoZSBpbml0aWFsIG1vdW50XG4gICAqXG4gICAqIEB0eXBlIEZ1bmN0aW9uKG5vZGU6IEh0bWxFbGVtZW50LCBpc0FwcGVhcmluZzogYm9vbClcbiAgICovXG4gIG9uRW50ZXJpbmc6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmaXJlZCBhZnRlciB0aGUgXCJlbnRlcmVkXCIgc3RhdHVzIGlzIGFwcGxpZWQuIEFuIGV4dHJhIHBhcmFtZXRlclxuICAgKiBgaXNBcHBlYXJpbmdgIGlzIHN1cHBsaWVkIHRvIGluZGljYXRlIGlmIHRoZSBlbnRlciBzdGFnZSBpcyBvY2N1cnJpbmcgb24gdGhlIGluaXRpYWwgbW91bnRcbiAgICpcbiAgICogQHR5cGUgRnVuY3Rpb24obm9kZTogSHRtbEVsZW1lbnQsIGlzQXBwZWFyaW5nOiBib29sKSAtPiB2b2lkXG4gICAqL1xuICBvbkVudGVyZWQ6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmaXJlZCBiZWZvcmUgdGhlIFwiZXhpdGluZ1wiIHN0YXR1cyBpcyBhcHBsaWVkLlxuICAgKlxuICAgKiBAdHlwZSBGdW5jdGlvbihub2RlOiBIdG1sRWxlbWVudCkgLT4gdm9pZFxuICAgKi9cbiAgb25FeGl0OiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQ2FsbGJhY2sgZmlyZWQgYWZ0ZXIgdGhlIFwiZXhpdGluZ1wiIHN0YXR1cyBpcyBhcHBsaWVkLlxuICAgKlxuICAgKiBAdHlwZSBGdW5jdGlvbihub2RlOiBIdG1sRWxlbWVudCkgLT4gdm9pZFxuICAgKi9cbiAgb25FeGl0aW5nOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQ2FsbGJhY2sgZmlyZWQgYWZ0ZXIgdGhlIFwiZXhpdGVkXCIgc3RhdHVzIGlzIGFwcGxpZWQuXG4gICAqXG4gICAqIEB0eXBlIEZ1bmN0aW9uKG5vZGU6IEh0bWxFbGVtZW50KSAtPiB2b2lkXG4gICAqL1xuICBvbkV4aXRlZDogUHJvcFR5cGVzLmZ1bmMgLy8gTmFtZSB0aGUgZnVuY3Rpb24gc28gaXQgaXMgY2xlYXJlciBpbiB0aGUgZG9jdW1lbnRhdGlvblxuXG59IDoge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5UcmFuc2l0aW9uLmRlZmF1bHRQcm9wcyA9IHtcbiAgaW46IGZhbHNlLFxuICBtb3VudE9uRW50ZXI6IGZhbHNlLFxuICB1bm1vdW50T25FeGl0OiBmYWxzZSxcbiAgYXBwZWFyOiBmYWxzZSxcbiAgZW50ZXI6IHRydWUsXG4gIGV4aXQ6IHRydWUsXG4gIG9uRW50ZXI6IG5vb3AsXG4gIG9uRW50ZXJpbmc6IG5vb3AsXG4gIG9uRW50ZXJlZDogbm9vcCxcbiAgb25FeGl0OiBub29wLFxuICBvbkV4aXRpbmc6IG5vb3AsXG4gIG9uRXhpdGVkOiBub29wXG59O1xuVHJhbnNpdGlvbi5VTk1PVU5URUQgPSAwO1xuVHJhbnNpdGlvbi5FWElURUQgPSAxO1xuVHJhbnNpdGlvbi5FTlRFUklORyA9IDI7XG5UcmFuc2l0aW9uLkVOVEVSRUQgPSAzO1xuVHJhbnNpdGlvbi5FWElUSU5HID0gNDtcblxudmFyIF9kZWZhdWx0ID0gKDAsIF9yZWFjdExpZmVjeWNsZXNDb21wYXQucG9seWZpbGwpKFRyYW5zaXRpb24pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIFByb3BUeXBlcyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpKTtcblxudmFyIF9hZGRDbGFzcyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcImRvbS1oZWxwZXJzL2NsYXNzL2FkZENsYXNzXCIpKTtcblxudmFyIF9yZW1vdmVDbGFzcyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcImRvbS1oZWxwZXJzL2NsYXNzL3JlbW92ZUNsYXNzXCIpKTtcblxudmFyIF9yZWFjdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcblxudmFyIF9UcmFuc2l0aW9uID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9UcmFuc2l0aW9uXCIpKTtcblxudmFyIF9Qcm9wVHlwZXMgPSByZXF1aXJlKFwiLi91dGlscy9Qcm9wVHlwZXNcIik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikgeyBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7IHJldHVybiBvYmo7IH0gZWxzZSB7IHZhciBuZXdPYmogPSB7fTsgaWYgKG9iaiAhPSBudWxsKSB7IGZvciAodmFyIGtleSBpbiBvYmopIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHsgdmFyIGRlc2MgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDoge307IGlmIChkZXNjLmdldCB8fCBkZXNjLnNldCkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpOyB9IGVsc2UgeyBuZXdPYmpba2V5XSA9IG9ialtrZXldOyB9IH0gfSB9IG5ld09iai5kZWZhdWx0ID0gb2JqOyByZXR1cm4gbmV3T2JqOyB9IH1cblxuZnVuY3Rpb24gX2V4dGVuZHMoKSB7IF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTsgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzTG9vc2Uoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzLnByb3RvdHlwZSk7IHN1YkNsYXNzLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IHN1YkNsYXNzOyBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBhZGRDbGFzcyA9IGZ1bmN0aW9uIGFkZENsYXNzKG5vZGUsIGNsYXNzZXMpIHtcbiAgcmV0dXJuIG5vZGUgJiYgY2xhc3NlcyAmJiBjbGFzc2VzLnNwbGl0KCcgJykuZm9yRWFjaChmdW5jdGlvbiAoYykge1xuICAgIHJldHVybiAoMCwgX2FkZENsYXNzLmRlZmF1bHQpKG5vZGUsIGMpO1xuICB9KTtcbn07XG5cbnZhciByZW1vdmVDbGFzcyA9IGZ1bmN0aW9uIHJlbW92ZUNsYXNzKG5vZGUsIGNsYXNzZXMpIHtcbiAgcmV0dXJuIG5vZGUgJiYgY2xhc3NlcyAmJiBjbGFzc2VzLnNwbGl0KCcgJykuZm9yRWFjaChmdW5jdGlvbiAoYykge1xuICAgIHJldHVybiAoMCwgX3JlbW92ZUNsYXNzLmRlZmF1bHQpKG5vZGUsIGMpO1xuICB9KTtcbn07XG4vKipcbiAqIEEgYFRyYW5zaXRpb25gIGNvbXBvbmVudCB1c2luZyBDU1MgdHJhbnNpdGlvbnMgYW5kIGFuaW1hdGlvbnMuXG4gKiBJdCdzIGluc3BpcmVkIGJ5IHRoZSBleGNlbGxlbnQgW25nLWFuaW1hdGVdKGh0dHA6Ly93d3cubmdhbmltYXRlLm9yZy8pIGxpYnJhcnkuXG4gKlxuICogYENTU1RyYW5zaXRpb25gIGFwcGxpZXMgYSBwYWlyIG9mIGNsYXNzIG5hbWVzIGR1cmluZyB0aGUgYGFwcGVhcmAsIGBlbnRlcmAsXG4gKiBhbmQgYGV4aXRgIHN0YWdlcyBvZiB0aGUgdHJhbnNpdGlvbi4gVGhlIGZpcnN0IGNsYXNzIGlzIGFwcGxpZWQgYW5kIHRoZW4gYVxuICogc2Vjb25kIFwiYWN0aXZlXCIgY2xhc3MgaW4gb3JkZXIgdG8gYWN0aXZhdGUgdGhlIGNzcyBhbmltYXRpb24uIEFmdGVyIHRoZSBhbmltYXRpb24sXG4gKiBtYXRjaGluZyBgZG9uZWAgY2xhc3MgbmFtZXMgYXJlIGFwcGxpZWQgdG8gcGVyc2lzdCB0aGUgYW5pbWF0aW9uIHN0YXRlLlxuICpcbiAqIFdoZW4gdGhlIGBpbmAgcHJvcCBpcyB0b2dnbGVkIHRvIGB0cnVlYCB0aGUgQ29tcG9uZW50IHdpbGwgZ2V0XG4gKiB0aGUgYGV4YW1wbGUtZW50ZXJgIENTUyBjbGFzcyBhbmQgdGhlIGBleGFtcGxlLWVudGVyLWFjdGl2ZWAgQ1NTIGNsYXNzXG4gKiBhZGRlZCBpbiB0aGUgbmV4dCB0aWNrLiBUaGlzIGlzIGEgY29udmVudGlvbiBiYXNlZCBvbiB0aGUgYGNsYXNzTmFtZXNgIHByb3AuXG4gKi9cblxuXG52YXIgQ1NTVHJhbnNpdGlvbiA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHNMb29zZShDU1NUcmFuc2l0aW9uLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBDU1NUcmFuc2l0aW9uKCkge1xuICAgIHZhciBfdGhpcztcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICBfdGhpcyA9IF9SZWFjdCRDb21wb25lbnQuY2FsbC5hcHBseShfUmVhY3QkQ29tcG9uZW50LCBbdGhpc10uY29uY2F0KGFyZ3MpKSB8fCB0aGlzO1xuXG4gICAgX3RoaXMub25FbnRlciA9IGZ1bmN0aW9uIChub2RlLCBhcHBlYXJpbmcpIHtcbiAgICAgIHZhciBfdGhpcyRnZXRDbGFzc05hbWVzID0gX3RoaXMuZ2V0Q2xhc3NOYW1lcyhhcHBlYXJpbmcgPyAnYXBwZWFyJyA6ICdlbnRlcicpLFxuICAgICAgICAgIGNsYXNzTmFtZSA9IF90aGlzJGdldENsYXNzTmFtZXMuY2xhc3NOYW1lO1xuXG4gICAgICBfdGhpcy5yZW1vdmVDbGFzc2VzKG5vZGUsICdleGl0Jyk7XG5cbiAgICAgIGFkZENsYXNzKG5vZGUsIGNsYXNzTmFtZSk7XG5cbiAgICAgIGlmIChfdGhpcy5wcm9wcy5vbkVudGVyKSB7XG4gICAgICAgIF90aGlzLnByb3BzLm9uRW50ZXIobm9kZSwgYXBwZWFyaW5nKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3RoaXMub25FbnRlcmluZyA9IGZ1bmN0aW9uIChub2RlLCBhcHBlYXJpbmcpIHtcbiAgICAgIHZhciBfdGhpcyRnZXRDbGFzc05hbWVzMiA9IF90aGlzLmdldENsYXNzTmFtZXMoYXBwZWFyaW5nID8gJ2FwcGVhcicgOiAnZW50ZXInKSxcbiAgICAgICAgICBhY3RpdmVDbGFzc05hbWUgPSBfdGhpcyRnZXRDbGFzc05hbWVzMi5hY3RpdmVDbGFzc05hbWU7XG5cbiAgICAgIF90aGlzLnJlZmxvd0FuZEFkZENsYXNzKG5vZGUsIGFjdGl2ZUNsYXNzTmFtZSk7XG5cbiAgICAgIGlmIChfdGhpcy5wcm9wcy5vbkVudGVyaW5nKSB7XG4gICAgICAgIF90aGlzLnByb3BzLm9uRW50ZXJpbmcobm9kZSwgYXBwZWFyaW5nKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3RoaXMub25FbnRlcmVkID0gZnVuY3Rpb24gKG5vZGUsIGFwcGVhcmluZykge1xuICAgICAgdmFyIF90aGlzJGdldENsYXNzTmFtZXMzID0gX3RoaXMuZ2V0Q2xhc3NOYW1lcygnZW50ZXInKSxcbiAgICAgICAgICBkb25lQ2xhc3NOYW1lID0gX3RoaXMkZ2V0Q2xhc3NOYW1lczMuZG9uZUNsYXNzTmFtZTtcblxuICAgICAgX3RoaXMucmVtb3ZlQ2xhc3Nlcyhub2RlLCBhcHBlYXJpbmcgPyAnYXBwZWFyJyA6ICdlbnRlcicpO1xuXG4gICAgICBhZGRDbGFzcyhub2RlLCBkb25lQ2xhc3NOYW1lKTtcblxuICAgICAgaWYgKF90aGlzLnByb3BzLm9uRW50ZXJlZCkge1xuICAgICAgICBfdGhpcy5wcm9wcy5vbkVudGVyZWQobm9kZSwgYXBwZWFyaW5nKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3RoaXMub25FeGl0ID0gZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgIHZhciBfdGhpcyRnZXRDbGFzc05hbWVzNCA9IF90aGlzLmdldENsYXNzTmFtZXMoJ2V4aXQnKSxcbiAgICAgICAgICBjbGFzc05hbWUgPSBfdGhpcyRnZXRDbGFzc05hbWVzNC5jbGFzc05hbWU7XG5cbiAgICAgIF90aGlzLnJlbW92ZUNsYXNzZXMobm9kZSwgJ2FwcGVhcicpO1xuXG4gICAgICBfdGhpcy5yZW1vdmVDbGFzc2VzKG5vZGUsICdlbnRlcicpO1xuXG4gICAgICBhZGRDbGFzcyhub2RlLCBjbGFzc05hbWUpO1xuXG4gICAgICBpZiAoX3RoaXMucHJvcHMub25FeGl0KSB7XG4gICAgICAgIF90aGlzLnByb3BzLm9uRXhpdChub2RlKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3RoaXMub25FeGl0aW5nID0gZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgIHZhciBfdGhpcyRnZXRDbGFzc05hbWVzNSA9IF90aGlzLmdldENsYXNzTmFtZXMoJ2V4aXQnKSxcbiAgICAgICAgICBhY3RpdmVDbGFzc05hbWUgPSBfdGhpcyRnZXRDbGFzc05hbWVzNS5hY3RpdmVDbGFzc05hbWU7XG5cbiAgICAgIF90aGlzLnJlZmxvd0FuZEFkZENsYXNzKG5vZGUsIGFjdGl2ZUNsYXNzTmFtZSk7XG5cbiAgICAgIGlmIChfdGhpcy5wcm9wcy5vbkV4aXRpbmcpIHtcbiAgICAgICAgX3RoaXMucHJvcHMub25FeGl0aW5nKG5vZGUpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfdGhpcy5vbkV4aXRlZCA9IGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICB2YXIgX3RoaXMkZ2V0Q2xhc3NOYW1lczYgPSBfdGhpcy5nZXRDbGFzc05hbWVzKCdleGl0JyksXG4gICAgICAgICAgZG9uZUNsYXNzTmFtZSA9IF90aGlzJGdldENsYXNzTmFtZXM2LmRvbmVDbGFzc05hbWU7XG5cbiAgICAgIF90aGlzLnJlbW92ZUNsYXNzZXMobm9kZSwgJ2V4aXQnKTtcblxuICAgICAgYWRkQ2xhc3Mobm9kZSwgZG9uZUNsYXNzTmFtZSk7XG5cbiAgICAgIGlmIChfdGhpcy5wcm9wcy5vbkV4aXRlZCkge1xuICAgICAgICBfdGhpcy5wcm9wcy5vbkV4aXRlZChub2RlKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3RoaXMuZ2V0Q2xhc3NOYW1lcyA9IGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgICB2YXIgY2xhc3NOYW1lcyA9IF90aGlzLnByb3BzLmNsYXNzTmFtZXM7XG4gICAgICB2YXIgY2xhc3NOYW1lID0gdHlwZW9mIGNsYXNzTmFtZXMgIT09ICdzdHJpbmcnID8gY2xhc3NOYW1lc1t0eXBlXSA6IGNsYXNzTmFtZXMgKyAnLScgKyB0eXBlO1xuICAgICAgdmFyIGFjdGl2ZUNsYXNzTmFtZSA9IHR5cGVvZiBjbGFzc05hbWVzICE9PSAnc3RyaW5nJyA/IGNsYXNzTmFtZXNbdHlwZSArICdBY3RpdmUnXSA6IGNsYXNzTmFtZSArICctYWN0aXZlJztcbiAgICAgIHZhciBkb25lQ2xhc3NOYW1lID0gdHlwZW9mIGNsYXNzTmFtZXMgIT09ICdzdHJpbmcnID8gY2xhc3NOYW1lc1t0eXBlICsgJ0RvbmUnXSA6IGNsYXNzTmFtZSArICctZG9uZSc7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBjbGFzc05hbWU6IGNsYXNzTmFtZSxcbiAgICAgICAgYWN0aXZlQ2xhc3NOYW1lOiBhY3RpdmVDbGFzc05hbWUsXG4gICAgICAgIGRvbmVDbGFzc05hbWU6IGRvbmVDbGFzc05hbWVcbiAgICAgIH07XG4gICAgfTtcblxuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBDU1NUcmFuc2l0aW9uLnByb3RvdHlwZTtcblxuICBfcHJvdG8ucmVtb3ZlQ2xhc3NlcyA9IGZ1bmN0aW9uIHJlbW92ZUNsYXNzZXMobm9kZSwgdHlwZSkge1xuICAgIHZhciBfdGhpcyRnZXRDbGFzc05hbWVzNyA9IHRoaXMuZ2V0Q2xhc3NOYW1lcyh0eXBlKSxcbiAgICAgICAgY2xhc3NOYW1lID0gX3RoaXMkZ2V0Q2xhc3NOYW1lczcuY2xhc3NOYW1lLFxuICAgICAgICBhY3RpdmVDbGFzc05hbWUgPSBfdGhpcyRnZXRDbGFzc05hbWVzNy5hY3RpdmVDbGFzc05hbWUsXG4gICAgICAgIGRvbmVDbGFzc05hbWUgPSBfdGhpcyRnZXRDbGFzc05hbWVzNy5kb25lQ2xhc3NOYW1lO1xuXG4gICAgY2xhc3NOYW1lICYmIHJlbW92ZUNsYXNzKG5vZGUsIGNsYXNzTmFtZSk7XG4gICAgYWN0aXZlQ2xhc3NOYW1lICYmIHJlbW92ZUNsYXNzKG5vZGUsIGFjdGl2ZUNsYXNzTmFtZSk7XG4gICAgZG9uZUNsYXNzTmFtZSAmJiByZW1vdmVDbGFzcyhub2RlLCBkb25lQ2xhc3NOYW1lKTtcbiAgfTtcblxuICBfcHJvdG8ucmVmbG93QW5kQWRkQ2xhc3MgPSBmdW5jdGlvbiByZWZsb3dBbmRBZGRDbGFzcyhub2RlLCBjbGFzc05hbWUpIHtcbiAgICAvLyBUaGlzIGlzIGZvciB0byBmb3JjZSBhIHJlcGFpbnQsXG4gICAgLy8gd2hpY2ggaXMgbmVjZXNzYXJ5IGluIG9yZGVyIHRvIHRyYW5zaXRpb24gc3R5bGVzIHdoZW4gYWRkaW5nIGEgY2xhc3MgbmFtZS5cbiAgICBpZiAoY2xhc3NOYW1lKSB7XG4gICAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtZXhwcmVzc2lvbnMgKi9cbiAgICAgIG5vZGUgJiYgbm9kZS5zY3JvbGxUb3A7XG4gICAgICAvKiBlc2xpbnQtZW5hYmxlIG5vLXVudXNlZC1leHByZXNzaW9ucyAqL1xuXG4gICAgICBhZGRDbGFzcyhub2RlLCBjbGFzc05hbWUpO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8ucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBwcm9wcyA9IF9leHRlbmRzKHt9LCB0aGlzLnByb3BzKTtcblxuICAgIGRlbGV0ZSBwcm9wcy5jbGFzc05hbWVzO1xuICAgIHJldHVybiBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9UcmFuc2l0aW9uLmRlZmF1bHQsIF9leHRlbmRzKHt9LCBwcm9wcywge1xuICAgICAgb25FbnRlcjogdGhpcy5vbkVudGVyLFxuICAgICAgb25FbnRlcmVkOiB0aGlzLm9uRW50ZXJlZCxcbiAgICAgIG9uRW50ZXJpbmc6IHRoaXMub25FbnRlcmluZyxcbiAgICAgIG9uRXhpdDogdGhpcy5vbkV4aXQsXG4gICAgICBvbkV4aXRpbmc6IHRoaXMub25FeGl0aW5nLFxuICAgICAgb25FeGl0ZWQ6IHRoaXMub25FeGl0ZWRcbiAgICB9KSk7XG4gIH07XG5cbiAgcmV0dXJuIENTU1RyYW5zaXRpb247XG59KF9yZWFjdC5kZWZhdWx0LkNvbXBvbmVudCk7XG5cbkNTU1RyYW5zaXRpb24ucHJvcFR5cGVzID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gX2V4dGVuZHMoe30sIF9UcmFuc2l0aW9uLmRlZmF1bHQucHJvcFR5cGVzLCB7XG4gIC8qKlxuICAgKiBUaGUgYW5pbWF0aW9uIGNsYXNzTmFtZXMgYXBwbGllZCB0byB0aGUgY29tcG9uZW50IGFzIGl0IGVudGVycywgZXhpdHMgb3IgaGFzIGZpbmlzaGVkIHRoZSB0cmFuc2l0aW9uLlxuICAgKiBBIHNpbmdsZSBuYW1lIGNhbiBiZSBwcm92aWRlZCBhbmQgaXQgd2lsbCBiZSBzdWZmaXhlZCBmb3IgZWFjaCBzdGFnZTogZS5nLlxuICAgKlxuICAgKiBgY2xhc3NOYW1lcz1cImZhZGVcImAgYXBwbGllcyBgZmFkZS1lbnRlcmAsIGBmYWRlLWVudGVyLWFjdGl2ZWAsIGBmYWRlLWVudGVyLWRvbmVgLFxuICAgKiBgZmFkZS1leGl0YCwgYGZhZGUtZXhpdC1hY3RpdmVgLCBgZmFkZS1leGl0LWRvbmVgLCBgZmFkZS1hcHBlYXJgLCBhbmQgYGZhZGUtYXBwZWFyLWFjdGl2ZWAuXG4gICAqIEVhY2ggaW5kaXZpZHVhbCBjbGFzc05hbWVzIGNhbiBhbHNvIGJlIHNwZWNpZmllZCBpbmRlcGVuZGVudGx5IGxpa2U6XG4gICAqXG4gICAqIGBgYGpzXG4gICAqIGNsYXNzTmFtZXM9e3tcbiAgICogIGFwcGVhcjogJ215LWFwcGVhcicsXG4gICAqICBhcHBlYXJBY3RpdmU6ICdteS1hY3RpdmUtYXBwZWFyJyxcbiAgICogIGVudGVyOiAnbXktZW50ZXInLFxuICAgKiAgZW50ZXJBY3RpdmU6ICdteS1hY3RpdmUtZW50ZXInLFxuICAgKiAgZW50ZXJEb25lOiAnbXktZG9uZS1lbnRlcicsXG4gICAqICBleGl0OiAnbXktZXhpdCcsXG4gICAqICBleGl0QWN0aXZlOiAnbXktYWN0aXZlLWV4aXQnLFxuICAgKiAgZXhpdERvbmU6ICdteS1kb25lLWV4aXQnLFxuICAgKiB9fVxuICAgKiBgYGBcbiAgICpcbiAgICogSWYgeW91IHdhbnQgdG8gc2V0IHRoZXNlIGNsYXNzZXMgdXNpbmcgQ1NTIE1vZHVsZXM6XG4gICAqXG4gICAqIGBgYGpzXG4gICAqIGltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMuY3NzJztcbiAgICogYGBgXG4gICAqXG4gICAqIHlvdSBtaWdodCB3YW50IHRvIHVzZSBjYW1lbENhc2UgaW4geW91ciBDU1MgZmlsZSwgdGhhdCB3YXkgY291bGQgc2ltcGx5IHNwcmVhZFxuICAgKiB0aGVtIGluc3RlYWQgb2YgbGlzdGluZyB0aGVtIG9uZSBieSBvbmU6XG4gICAqXG4gICAqIGBgYGpzXG4gICAqIGNsYXNzTmFtZXM9e3sgLi4uc3R5bGVzIH19XG4gICAqIGBgYFxuICAgKlxuICAgKiBAdHlwZSB7c3RyaW5nIHwge1xuICAgKiAgYXBwZWFyPzogc3RyaW5nLFxuICAgKiAgYXBwZWFyQWN0aXZlPzogc3RyaW5nLFxuICAgKiAgZW50ZXI/OiBzdHJpbmcsXG4gICAqICBlbnRlckFjdGl2ZT86IHN0cmluZyxcbiAgICogIGVudGVyRG9uZT86IHN0cmluZyxcbiAgICogIGV4aXQ/OiBzdHJpbmcsXG4gICAqICBleGl0QWN0aXZlPzogc3RyaW5nLFxuICAgKiAgZXhpdERvbmU/OiBzdHJpbmcsXG4gICAqIH19XG4gICAqL1xuICBjbGFzc05hbWVzOiBfUHJvcFR5cGVzLmNsYXNzTmFtZXNTaGFwZSxcblxuICAvKipcbiAgICogQSBgPFRyYW5zaXRpb24+YCBjYWxsYmFjayBmaXJlZCBpbW1lZGlhdGVseSBhZnRlciB0aGUgJ2VudGVyJyBvciAnYXBwZWFyJyBjbGFzcyBpc1xuICAgKiBhcHBsaWVkLlxuICAgKlxuICAgKiBAdHlwZSBGdW5jdGlvbihub2RlOiBIdG1sRWxlbWVudCwgaXNBcHBlYXJpbmc6IGJvb2wpXG4gICAqL1xuICBvbkVudGVyOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQSBgPFRyYW5zaXRpb24+YCBjYWxsYmFjayBmaXJlZCBpbW1lZGlhdGVseSBhZnRlciB0aGUgJ2VudGVyLWFjdGl2ZScgb3JcbiAgICogJ2FwcGVhci1hY3RpdmUnIGNsYXNzIGlzIGFwcGxpZWQuXG4gICAqXG4gICAqIEB0eXBlIEZ1bmN0aW9uKG5vZGU6IEh0bWxFbGVtZW50LCBpc0FwcGVhcmluZzogYm9vbClcbiAgICovXG4gIG9uRW50ZXJpbmc6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBBIGA8VHJhbnNpdGlvbj5gIGNhbGxiYWNrIGZpcmVkIGltbWVkaWF0ZWx5IGFmdGVyIHRoZSAnZW50ZXInIG9yXG4gICAqICdhcHBlYXInIGNsYXNzZXMgYXJlICoqcmVtb3ZlZCoqIGFuZCB0aGUgYGRvbmVgIGNsYXNzIGlzIGFkZGVkIHRvIHRoZSBET00gbm9kZS5cbiAgICpcbiAgICogQHR5cGUgRnVuY3Rpb24obm9kZTogSHRtbEVsZW1lbnQsIGlzQXBwZWFyaW5nOiBib29sKVxuICAgKi9cbiAgb25FbnRlcmVkOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQSBgPFRyYW5zaXRpb24+YCBjYWxsYmFjayBmaXJlZCBpbW1lZGlhdGVseSBhZnRlciB0aGUgJ2V4aXQnIGNsYXNzIGlzXG4gICAqIGFwcGxpZWQuXG4gICAqXG4gICAqIEB0eXBlIEZ1bmN0aW9uKG5vZGU6IEh0bWxFbGVtZW50KVxuICAgKi9cbiAgb25FeGl0OiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQSBgPFRyYW5zaXRpb24+YCBjYWxsYmFjayBmaXJlZCBpbW1lZGlhdGVseSBhZnRlciB0aGUgJ2V4aXQtYWN0aXZlJyBpcyBhcHBsaWVkLlxuICAgKlxuICAgKiBAdHlwZSBGdW5jdGlvbihub2RlOiBIdG1sRWxlbWVudClcbiAgICovXG4gIG9uRXhpdGluZzogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIEEgYDxUcmFuc2l0aW9uPmAgY2FsbGJhY2sgZmlyZWQgaW1tZWRpYXRlbHkgYWZ0ZXIgdGhlICdleGl0JyBjbGFzc2VzXG4gICAqIGFyZSAqKnJlbW92ZWQqKiBhbmQgdGhlIGBleGl0LWRvbmVgIGNsYXNzIGlzIGFkZGVkIHRvIHRoZSBET00gbm9kZS5cbiAgICpcbiAgICogQHR5cGUgRnVuY3Rpb24obm9kZTogSHRtbEVsZW1lbnQpXG4gICAqL1xuICBvbkV4aXRlZDogUHJvcFR5cGVzLmZ1bmNcbn0pIDoge307XG52YXIgX2RlZmF1bHQgPSBDU1NUcmFuc2l0aW9uO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdOyIsImltcG9ydCBSZWFjdCwgeyBjcmVhdGVSZWYsIFJlZk9iamVjdCwgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBDU1NUcmFuc2l0aW9uIGZyb20gJ3JlYWN0LXRyYW5zaXRpb24tZ3JvdXAvQ1NTVHJhbnNpdGlvbic7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7IENvbG9yVHlwZSwgQ1NTVHlwZSB9IGZyb20gJy4uLy4uL3R5cGVzJztcblxuY29uc3QgV3JhcHBlciA9IHN0eWxlZC5kaXY8eyBjc3M/OiBDU1NUeXBlIH0+YFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcblxuICBkaXZbcm9sZT1cInRvb2x0aXBcIl0ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBjbGVhcjogYm90aDtcbiAgICBib3gtc2hhZG93OiAwIDFweCAycHggMCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuICAgIHotaW5kZXg6IDk5OTk7XG4gICAgcGFkZGluZzogMC4zNzVyZW0gMC42MjVyZW07XG4gICAgY3Vyc29yOiBkZWZhdWx0O1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIHdoaXRlLXNwYWNlOiBwcmU7XG4gICAgZm9udC1zaXplOiAwLjg1cmVtO1xuXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjgpO1xuICAgIG9wYWNpdHk6IDA7XG5cbiAgICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtLCBvcGFjaXR5O1xuICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybSwgb3BhY2l0eTtcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAxMDBtcztcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpO1xuXG4gICAgJi5zdGFydCB7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG5cbiAgICAmLmVuZCB7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOCk7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbiAgfVxuICAkeyh7IGNzcyB9KSA9PiBjc3MgfHwgJyd9XG5gO1xuXG5pbnRlcmZhY2UgVG9vbHRpcFByb3BzIHtcbiAgLyoqIOWQueOBjeWHuuOBl+OBqOOBl+OBpuihqOekuuOBl+OBn+OBhOWGheWuuSAqL1xuICBsYWJlbDogYW55O1xuICAvKiog44Oe44Km44K544Kq44O844OQ44O844Gu5a++6LGh44Gr44Gq44KLZWxlbWVudCAqL1xuICBjaGlsZHJlbjogYW55O1xuICAvKiog5ZC544GN5Ye644GX44Gu6IOM5pmv6Imy44Gu5oyH5a6aICovXG4gIGNvbG9yPzogQ29sb3JUeXBlO1xuICAvKiog6KGo56S644GV44KM44KL5aC05omAICovXG4gIHBvc2l0aW9uPzogJ3RvcCcgfCAnbGVmdCcgfCAncmlnaHQnIHwgJ2JvdHRvbSc7XG4gIC8qKiDjgqvjgrnjgr/jg6BDU1PlrprnvqkgKi9cbiAgY3NzPzogQ1NTVHlwZTtcbn1cblxuaW50ZXJmYWNlIFN0YXRlIHtcbiAgc2hvdzogYm9vbGVhbjtcbiAgc3R5bGU6IGFueTtcbn1cblxuZnVuY3Rpb24gZ2V0UG9zaXRpb24oaGVpZ2h0OiBudW1iZXIsIHdpZHRoOiBudW1iZXIsIHBvc2l0aW9uPzogYW55KSB7XG4gIHN3aXRjaCAocG9zaXRpb24pIHtcbiAgICBjYXNlICd0b3AnOiB7XG4gICAgICByZXR1cm4geyBib3R0b206IGAke2hlaWdodH1weGAsIGxlZnQ6ICc1MCUnLCB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKC01MCUpJyB9O1xuICAgIH1cbiAgICBjYXNlICdsZWZ0Jzoge1xuICAgICAgcmV0dXJuIHsgcmlnaHQ6IGAke3dpZHRofXB4YCwgdG9wOiAnNTAlJywgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgtNTAlKScgfTtcbiAgICB9XG4gICAgY2FzZSAncmlnaHQnOiB7XG4gICAgICByZXR1cm4geyBsZWZ0OiBgJHt3aWR0aH1weGAsIHRvcDogJzUwJScsIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoLTUwJSknIH07XG4gICAgfVxuICAgIGRlZmF1bHQ6IHtcbiAgICAgIHJldHVybiB7IHRvcDogYCR7aGVpZ2h0fXB4YCwgbGVmdDogJzUwJScsIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoLTUwJSknICB9O1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb29sdGlwIGV4dGVuZHMgUHVyZUNvbXBvbmVudDxUb29sdGlwUHJvcHMsIFN0YXRlPiB7XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgcG9zaXRpb246ICdib3R0b20nLFxuICAgIGNvbG9yOiAnZGFyaycsXG4gIH07XG5cbiAgc3RhdGUgPSB7XG4gICAgc2hvdzogZmFsc2UsXG4gICAgc3R5bGU6IHt9LFxuICB9O1xuXG4gIG9wZW5Ub29sdGlwID0gKCkgPT4ge1xuICAgIGlmICh0aGlzLnN0YXRlLnNob3cgfHwgIXRoaXMuZWxlbWVudC5jdXJyZW50KSByZXR1cm47XG5cbiAgICBjb25zdCB3aWR0aCA9IHRoaXMuZWxlbWVudC5jdXJyZW50Lm9mZnNldFdpZHRoICsgODtcbiAgICBjb25zdCBoZWlnaHQgPSB0aGlzLmVsZW1lbnQuY3VycmVudC5vZmZzZXRIZWlnaHQgKyA4O1xuICAgIGNvbnN0IHN0eWxlID0gZ2V0UG9zaXRpb24oaGVpZ2h0LCB3aWR0aCwgdGhpcy5wcm9wcy5wb3NpdGlvbik7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHN0eWxlLCBzaG93OiB0cnVlIH0pO1xuICB9XG5cbiAgY2xvc2VUb29sdGlwID0gKCkgPT4ge1xuICAgIGlmICh0aGlzLnN0YXRlLnNob3cgJiYgdGhpcy5lbGVtZW50LmN1cnJlbnQpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93OiBmYWxzZSB9KTtcbiAgICB9XG4gIH1cblxuICBlbGVtZW50OiBSZWZPYmplY3Q8SFRNTERpdkVsZW1lbnQ+ID0gY3JlYXRlUmVmKCk7XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgbGFiZWwsIGNoaWxkcmVuLCAuLi5yZXN0IH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgc2hvdywgc3R5bGUgfSA9IHRoaXMuc3RhdGU7XG4gICAgcmV0dXJuIChcbiAgICAgIDxXcmFwcGVyXG4gICAgICAgIHJlZj17dGhpcy5lbGVtZW50fVxuICAgICAgICBvbk1vdXNlT3Zlcj17dGhpcy5vcGVuVG9vbHRpcH1cbiAgICAgICAgb25Nb3VzZU91dD17dGhpcy5jbG9zZVRvb2x0aXB9XG4gICAgICAgIHsuLi5yZXN0fVxuICAgICAgPlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDxDU1NUcmFuc2l0aW9uXG4gICAgICAgICAgY2xhc3NOYW1lcz17e1xuICAgICAgICAgICAgYXBwZWFyOiAnc3RhcnQnLFxuICAgICAgICAgICAgZW50ZXJEb25lOiAnc3RhcnQnLFxuICAgICAgICAgICAgZXhpdDogJ2VuZCcsXG4gICAgICAgICAgfX1cbiAgICAgICAgICBpbj17c2hvd31cbiAgICAgICAgICB0aW1lb3V0PXsxNTB9XG4gICAgICAgICAgdW5tb3VudE9uRXhpdFxuICAgICAgICA+XG4gICAgICAgICAgPGRpdiByb2xlPVwidG9vbHRpcFwiPlxuICAgICAgICAgICAge2xhYmVsfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0NTU1RyYW5zaXRpb24+XG4gICAgICA8L1dyYXBwZXI+XG4gICAgKTtcbiAgfVxufVxuXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmV4cG9ydCBjb25zdCBTaWRlTWVudSA9IHN0eWxlZC5hc2lkZWBcbiAgZm9udC1zaXplOiAxcmVtO1xuYDtcblNpZGVNZW51LmRpc3BsYXlOYW1lID0gJ1NpZGVNZW51JztcblxuZXhwb3J0IGNvbnN0IE1lbnVMaXN0ID0gc3R5bGVkLnVsYFxuICBsaW5lLWhlaWdodDogMS4yNTtcblxuICBhIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwYWRkaW5nOiAwLjVlbTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUudGV4dH07XG4gICAgJjpob3ZlciB7XG4gICAgICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5wcmltYXJ5fTtcbiAgICB9XG4gICAgJi5hY3RpdmUge1xuICAgICAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUucHJpbWFyeX07XG4gICAgfVxuICB9XG5cbiAgbGkge1xuICAgIHVsIHtcbiAgICAgIG1hcmdpbjogMC43NWVtO1xuICAgICAgcGFkZGluZy1sZWZ0OiAwLjc1ZW07XG4gICAgfVxuICB9XG5gO1xuTWVudUxpc3QuZGlzcGxheU5hbWUgPSAnTWVudUxpc3QnO1xuXG5leHBvcnQgY29uc3QgTWVudUxhYmVsID0gc3R5bGVkLnBgXG4gIGZvbnQtc2l6ZTogMC43NWVtO1xuICBsZXR0ZXItc3BhY2luZzogMC4xZW07XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG5cbiAgJjpub3QoOmZpcnN0LWNoaWxkKSB7XG4gICAgbWFyZ2luLXRvcDogMWVtO1xuICB9XG4gICY6bm90KDpsYXN0LWNoaWxkKSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMWVtO1xuICB9XG5gO1xuTWVudUxhYmVsLmRpc3BsYXlOYW1lID0gJ01lbnVMYWJlbCc7XG5cbiIsImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50LCBDU1NQcm9wZXJ0aWVzIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCwgeyBjc3MgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgQm94IGZyb20gJy4uL0JveCc7XG5pbXBvcnQgeyBDb2xvclR5cGUgfSBmcm9tICcuLi8uLi90eXBlcyc7XG5cbmNvbnN0IENhcmRCb2R5ID0gc3R5bGVkLmRpdmBcbiAgcGFkZGluZzogMS4yNXJlbTtcbiAgbWFyZ2luOiAwO1xuYDtcblxuY29uc3QgQ2FyZEhlYWRlciA9IHN0eWxlZC5oZWFkZXJgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmc6IDAuNXJlbSAxLjVyZW07XG4gIG1pbi1oZWlnaHQ6IDMuNXJlbTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuYm9yZGVyfTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuYDtcblxuY29uc3QgQ2FyZEZvb3RlciA9IHN0eWxlZC5mb290ZXJgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmc6IDAuNXJlbSAxLjVyZW07XG4gIG1pbi1oZWlnaHQ6IDMuNXJlbTtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuYm9yZGVyfTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuYDtcblxuY29uc3QgQ2FyZEltYWdlID0gc3R5bGVkLmFgXG4gIHdpZHRoOiAxMDAlO1xuXG4gIGltZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IDA7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogM3B4O1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAzcHg7XG4gIH1cbmA7XG5cbmludGVyZmFjZSBJbWFnZVByb3BzIHtcbiAgdXJsPzogc3RyaW5nO1xufVxuXG5jb25zdCBDYXJkSW1hZ2VIb3Jpem9udGFsID0gc3R5bGVkLmE8SW1hZ2VQcm9wcz5gXG4gIGZsZXg6IDAgMCAzMCU7XG4gIG1pbi13aWR0aDogNXJlbTtcbiAgd2lkdGg6IDMwJTtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogM3B4O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAzcHg7XG5cbiAgYmFja2dyb3VuZDogbm8tcmVwZWF0IGNlbnRlci9jb3ZlcjtcbiAgJHsoeyB1cmwgfSkgPT4gdXJsID8gY3NzYGJhY2tncm91bmQtaW1hZ2U6IHVybCgke3VybH0pO2AgOiB7fX1cbmA7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIC8qKiDjg6zjgrnjg53jg7Pjgrfjg5bjgarjgqTjg6Hjg7zjgrjjgpLov73liqDjgZnjgosgKi9cbiAgaW1hZ2U/OiBzdHJpbmc7XG4gIC8qKiDjgr/jgqTjg4jjg6sgKi9cbiAgdGl0bGU/OiBzdHJpbmc7XG4gIC8qKiDjg5jjg4Pjg4Djg7zjga7lj7PlgbTjgavov73liqDjgZnjgosgKi9cbiAgaGVhZGVyT3B0aW9ucz86IGFueTtcbiAgLyoqIGhlYWRlcumDqOWIhu+8iOOCpOODoeODvOOCuO+8ieOCkuaoquS4puOBs+OBq+OBmeOCiyAqL1xuICBob3Jpem9udGFsPzogYm9vbGVhbjtcbiAgLyoqIGZvb3RlciAqL1xuICBmb290ZXI/OiBhbnk7XG4gIC8qKiDoibLjga7mjIflrpogKi9cbiAgY29sb3I/OiBDb2xvclR5cGU7XG4gIC8qKiDjg5jjg4Pjg4DjgpIgKi9cbiAgaGVhZGVyT25Ub3A/OiBib29sZWFuO1xuICAvKiog44Kr44K544K/aW5saW5lIHN0eWxlICovXG4gIHN0eWxlPzogYW55O1xufVxuXG5jb25zdCBob3Jpem9udGFsU3R5bGU6IENTU1Byb3BlcnRpZXMgPSB7IGZsZXhEaXJlY3Rpb246ICdyb3cnIH07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhcmQgZXh0ZW5kcyBQdXJlQ29tcG9uZW50PFByb3BzPiB7XG4gIHJlbmRlckhlYWRlciA9ICgpID0+IHtcbiAgICBjb25zdCB7IGltYWdlLCB0aXRsZSwgaG9yaXpvbnRhbCB9ID0gdGhpcy5wcm9wcztcblxuICAgIGlmIChpbWFnZSAmJiAhaG9yaXpvbnRhbCkgcmV0dXJuICg8Q2FyZEltYWdlPjxpbWcgc3JjPXtpbWFnZX0gLz48L0NhcmRJbWFnZT4pO1xuICAgIGlmIChpbWFnZSAmJiBob3Jpem9udGFsKSByZXR1cm4gKDxDYXJkSW1hZ2VIb3Jpem9udGFsIHVybD17aW1hZ2V9IC8+KTtcbiAgICBpZiAodGl0bGUgJiYgIWhvcml6b250YWwpIHJldHVybiAoPENhcmRIZWFkZXI+PGgzPnt0aXRsZX08L2gzPjwvQ2FyZEhlYWRlcj4pO1xuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjaGlsZHJlbiwgaG9yaXpvbnRhbCwgZm9vdGVyLCBjb2xvciB9ID0gdGhpcy5wcm9wcztcblxuICAgIGNvbnN0IGhlYWRlciA9IHRoaXMucmVuZGVySGVhZGVyKCk7XG4gICAgY29uc3Qgd3JhcHBlclN0eWxlID0gaG9yaXpvbnRhbCA/IGhvcml6b250YWxTdHlsZSA6IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gKFxuICAgICAgPEJveCBzdHlsZT17d3JhcHBlclN0eWxlfSBjb2xvcj17Y29sb3J9PlxuICAgICAgICB7aGVhZGVyfVxuICAgICAgICA8Q2FyZEJvZHk+XG4gICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L0NhcmRCb2R5PlxuICAgICAgICB7Zm9vdGVyICYmICg8Q2FyZEZvb3Rlcj57UmVhY3QuQ2hpbGRyZW4ub25seShmb290ZXIpfTwvQ2FyZEZvb3Rlcj4pfVxuICAgICAgPC9Cb3g+XG4gICAgKTtcbiAgfVxufVxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IENTU1RyYW5zaXRpb24gZnJvbSAncmVhY3QtdHJhbnNpdGlvbi1ncm91cC9DU1NUcmFuc2l0aW9uJztcbmltcG9ydCBCb3gsIHsgUHJvcHMgYXMgQm94UHJvcHMgfSBmcm9tICcuLi9Cb3gnO1xuaW1wb3J0IHsgQ1NTVHlwZSB9IGZyb20gJy4uLy4uL3R5cGVzJztcblxuY29uc3QgV3JhcHBlciA9IHN0eWxlZC5kaXY8eyBjc3M/OiBDU1NUeXBlIH0+YFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGNvbG9yOiBpbmhlcml0O1xuXG4gICY6aG92ZXIge1xuICAgIGNvbG9yOiBpbmhlcml0O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgfVxuXG4gICR7KHsgY3NzIH0pID0+IGNzcyB8fCAnJ31cbmA7XG5cbmNvbnN0IFRvb2x0aXAgPSBzdHlsZWQoQm94KWBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBjbGVhcjogYm90aDtcbiAgYm94LXNoYWRvdzogMCAxcHggMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjA1KTtcbiAgei1pbmRleDogOTk5OTtcbiAgcGFkZGluZzogMC41cmVtIDA7XG4gIHdpZHRoOiBhdXRvO1xuICBoZWlnaHQ6IGF1dG87XG4gIGN1cnNvcjogYXV0bztcblxuICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtLCBvcGFjaXR5O1xuICB0cmFuc2Zvcm06IHNjYWxlKDAuOCk7XG4gIG9wYWNpdHk6IDA7XG5cbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtLCBvcGFjaXR5O1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAxMDBtcztcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKTtcblxuICAmLnN0YXJ0IHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cblxuICAmLmVuZCB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjgpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbmA7XG5cbmludGVyZmFjZSBQcm9wcyBleHRlbmRzIEJveFByb3BzIHtcbiAgLyoqIOODnOOCv+ODs+OBruWGheWuuSAqL1xuICBsYWJlbDogUmVhY3QuUmVhY3ROb2RlO1xuICAvKiog5YaF5a6544Gu44Oq44K544OIICovXG4gIGNoaWxkcmVuPzogUmVhY3QuUmVhY3ROb2RlIHwgUmVhY3QuUmVhY3ROb2RlO1xuICAvKiog5Y+z44Gu5Z+65rqW44Gn44Oq44K544OI44KS6KGo56S644GZ44KLICovXG4gIHJpZ2h0PzogYm9vbGVhbjtcbiAgLyoqIOWQueOBjeWHuuOBl+OBjOihqOekuuOBleOCjOOCi+WgtOaJgCAqL1xuICBwb3NpdGlvbj86ICd0b3AtbGVmdCcgfCAndG9wJyB8ICd0b3AtcmlnaHQnIHwgJ2JvdHRvbS1sZWZ0JyB8ICdib3R0b20nIHwgJ2JvdHRvbS1yaWdodCc7XG4gIC8qKiDjgqvjgrnjgr/jg6BDU1PlrprnvqkgKi9cbiAgY3NzPzogQ1NTVHlwZTtcbn1cblxuaW50ZXJmYWNlIFN0YXRlIHtcbiAgc2hvdzogYm9vbGVhbjtcbiAgc3R5bGU6IGFueTtcbn1cblxuZnVuY3Rpb24gZ2V0UG9zaXRpb24ocG9zaXRpb24/OiBhbnkpIHtcbiAgc3dpdGNoIChwb3NpdGlvbikge1xuICAgIGNhc2UgJ3RvcC1sZWZ0Jzoge1xuICAgICAgcmV0dXJuIHsgdG9wOiAwLCBsZWZ0OiAwLCB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKC0xMDAlKScgfTtcbiAgICB9XG4gICAgY2FzZSAndG9wLXJpZ2h0Jzoge1xuICAgICAgcmV0dXJuIHsgdG9wOiAwLCByaWdodDogMCwgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgtMTAwJSknIH07XG4gICAgfVxuICAgIGNhc2UgJ3RvcCc6IHtcbiAgICAgIHJldHVybiB7IHRvcDogIDAsIGxlZnQ6ICc1MCUnLCB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoLTUwJSwgLTEwMCUpJyB9O1xuICAgIH1cbiAgICBjYXNlICdib3R0b20tbGVmdCc6IHtcbiAgICAgIHJldHVybiB7IGJvdHRvbTogMCwgbGVmdDogMCwgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgxMDAlKScgfTtcbiAgICB9XG4gICAgY2FzZSAnYm90dG9tLXJpZ2h0Jzoge1xuICAgICAgcmV0dXJuIHsgYm90dG9tOiAwLCByaWdodDogMCwgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgxMDAlKScgfTtcbiAgICB9XG4gICAgY2FzZSAnYm90dG9tJzoge1xuICAgICAgcmV0dXJuIHsgYm90dG9tOiAwLCBsZWZ0OiAnNTAlJywgdHJhbnNmb3JtOiAndHJhbnNsYXRlKC01MCUsIDEwMCUpJyB9O1xuICAgIH1cbiAgICBkZWZhdWx0OiB7XG4gICAgICByZXR1cm4geyB0b3A6IDAsIGxlZnQ6IDAsIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoMTAwJSknIH07XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvcG92ZXIgZXh0ZW5kcyBDb21wb25lbnQ8UHJvcHMsIFN0YXRlPiB7XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgcG9zaXRpb246ICdib3R0b20tbGVmdCcsXG4gICAgY29sb3I6ICd3aGl0ZScsXG4gICAgc3R5bGU6IHt9LFxuICB9O1xuXG4gIHN0YXRlID0geyBzaG93OiBmYWxzZSwgc3R5bGU6IHt9IH07XG5cbiAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKHByb3BzOiBQcm9wcywgc3RhdGU6IFN0YXRlKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGUuc2hvdyAhPT0gc3RhdGUuc2hvdyB8fCB0aGlzLnByb3BzLmxhYmVsICE9PSBwcm9wcy5sYWJlbDtcbiAgfVxuXG4gIG9wZW5Ecm9wZG93biA9ICgpID0+IHtcbiAgICBpZiAodGhpcy5zdGF0ZS5zaG93KSByZXR1cm47XG5cbiAgICBjb25zdCBzdHlsZSA9IGdldFBvc2l0aW9uKHRoaXMucHJvcHMucG9zaXRpb24pO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBzdHlsZSwgc2hvdzogdHJ1ZSB9KTtcbiAgfVxuXG4gIGNsb3NlRHJvcGRvd24gPSAoKSA9PiB7XG4gICAgaWYgKHRoaXMuc3RhdGUuc2hvdykgdGhpcy5zZXRTdGF0ZSh7IHNob3c6IGZhbHNlIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgbGFiZWwsIGNoaWxkcmVuLCBzdHlsZSwgY3NzLCAuLi5yZXN0IH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgc2hvdyB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCB0b29sdGlwU3R5bGUgPSB7IC4uLnN0eWxlLCAuLi50aGlzLnN0YXRlLnN0eWxlIH07XG4gICAgcmV0dXJuIChcbiAgICAgIDxXcmFwcGVyXG4gICAgICAgIHRhYkluZGV4PXswfVxuICAgICAgICByb2xlPVwiYnV0dG9uXCJcbiAgICAgICAgb25Gb2N1cz17dGhpcy5vcGVuRHJvcGRvd259XG4gICAgICAgIG9uQmx1cj17dGhpcy5jbG9zZURyb3Bkb3dufVxuICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiAnYmxvY2snLCBwb3NpdGlvbjogJ3JlbGF0aXZlJyB9fVxuICAgICAgICBjc3M9e2Nzc31cbiAgICAgID5cbiAgICAgICAge2xhYmVsfVxuICAgICAgICA8Q1NTVHJhbnNpdGlvblxuICAgICAgICAgIGNsYXNzTmFtZXM9e3tcbiAgICAgICAgICAgIGFwcGVhcjogJ3N0YXJ0JyxcbiAgICAgICAgICAgIGVudGVyRG9uZTogJ3N0YXJ0JyxcbiAgICAgICAgICAgIGV4aXQ6ICdlbmQnLFxuICAgICAgICAgIH19XG4gICAgICAgICAgaW49e3Nob3d9XG4gICAgICAgICAgdGltZW91dD17MTUwfVxuICAgICAgICAgIHVubW91bnRPbkV4aXRcbiAgICAgICAgPlxuICAgICAgICAgIDxUb29sdGlwIHJvbGU9XCJ0b29sdGlwXCIgc3R5bGU9e3Rvb2x0aXBTdHlsZX0gey4uLnJlc3R9PlxuICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICAgIDwvVG9vbHRpcD5cbiAgICAgICAgPC9DU1NUcmFuc2l0aW9uPlxuICAgICAgPC9XcmFwcGVyPlxuICAgICk7XG4gIH1cbn1cbiIsImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50LCBIVE1MQXR0cmlidXRlcywgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjcmVhdGVQb3J0YWwgfSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IENTU1RyYW5zaXRpb24gZnJvbSAncmVhY3QtdHJhbnNpdGlvbi1ncm91cC9DU1NUcmFuc2l0aW9uJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IEJveCBmcm9tICcuLi9Cb3gnO1xuaW1wb3J0IENvbCBmcm9tICcuLi9HcmlkL0NvbCc7XG5pbXBvcnQgeyBDb2xvclR5cGUsIENvbFNpemVUeXBlLCBDU1NUeXBlIH0gZnJvbSAnLi4vLi4vdHlwZXMnO1xuXG5jb25zdCBFU0NfS0VZID0gMjc7XG5cbmNvbnN0IFdyYXBwZXIgPSBzdHlsZWQuZGl2PHsgY3NzPzogQ1NTVHlwZSwgc2hhZG93Q29sb3I/OiBzdHJpbmcgfT5gXG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICB6LWluZGV4OiA5OTk3O1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcGFkZGluZzogMC43NXJlbTtcblxuICAudi1tb2RhbC1ib2R5IHtcbiAgICB6LWluZGV4OiA5OTk5O1xuICAgIG1hcmdpbjogMDtcbiAgICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtLCBvcGFjaXR5O1xuICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybSwgb3BhY2l0eTtcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpO1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDIwMG1zO1xuICB9XG5cbiAgJi5mYWRlLWVudGVyID4gLnYtbW9kYWwtYm9keSB7XG4gICAgb3BhY2l0eTogMC4wMTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOCk7XG4gIH1cbiAgJi5mYWRlLWVudGVyLWFjdGl2ZSA+IC52LW1vZGFsLWJvZHkge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgfVxuICAmLmZhZGUtZXhpdCA+IC52LW1vZGFsLWJvZHkge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgfVxuICAmLmZhZGUtZXhpdC1hY3RpdmUgPiAudi1tb2RhbC1ib2R5IHtcbiAgICBvcGFjaXR5OiAwLjAxO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC44KTtcbiAgfVxuXG4gIC52LW1vZGFsLXNoYWRvdyB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIHRvcDogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyh7IHNoYWRvd0NvbG9yIH0pID0+IHNoYWRvd0NvbG9yIHx8ICd0cmFuc3BhcmVudCd9O1xuICB9XG5cbiAgJHsoeyBjc3MgfSkgPT4gY3NzIHx8IHt9fVxuYDtcblxuaW50ZXJmYWNlIFByb3BzIGV4dGVuZHMgSFRNTEF0dHJpYnV0ZXM8SFRNTERpdkVsZW1lbnQ+IHtcbiAgLyoqIOODmOODg+ODgOODvOOBruOCv+OCpOODiOODq+aWh+iogCAqL1xuICB0aXRsZT86IGFueTtcbiAgLyoqIDF+MTLjga7jg6Ljg7zjg4Djg6vjgrXjgqTjgrogKi9cbiAgc2l6ZT86IENvbFNpemVUeXBlO1xuICAvKiogdHJ1ZeOBruWgtOWQiOOAgeODouODvOODgOODq+OCkuihqOekuuOBl+OBvuOBmeOAgiAqL1xuICBzaG93PzogYm9vbGVhbjtcbiAgLyoqIOODouODvOODgOODq+OBrmJvZHnjgavlhaXjgozjgovlhoXlrrkgKi9cbiAgY2hpbGRyZW4/OiBhbnk7XG4gIC8qKiDjg6Ljg7zjg4Djg6vjga5mb290ZXLjgavlhaXjgozjgovlhoXlrrkgKi9cbiAgZm9vdGVyPzogYW55O1xuICAvKiog44Oi44O844OA44Or44Gu6ImyICovXG4gIGNvbG9yPzogQ29sb3JUeXBlO1xuICAvKiog44Oi44O844OA44Or44KS6ZaJ44GY44KL5Yem55CGICovXG4gIGNsb3NlTW9kYWw6ICgpID0+IHZvaWQ7XG4gIC8qKiDjgqrjg7zjg5Djg7zjg6zjgqTjga7jgq/jg6rjg4Pjgq/jgafjg6Ljg7zjg4Djg6vjgq/jg63jg7zjgrogKi9cbiAgY2xvc2VPbk92ZXJsYXk/OiBib29sZWFuO1xuICAvKiogZXNj44Oc44K/44Oz44Gn44Kv44Ot44O844K6ICovXG4gIGNsb3NlT25Fc2M/OiBib29sZWFuO1xuICAvKiogb3ZlcmxheeOBruiDjOaZr+OBruioreWumiAqL1xuICBzaGFkb3dDb2xvcj86IHN0cmluZztcbiAgLyoqIOODouODvOODgOODq+WkluOBq+ihqOekuuOBmeOCi0VsZW1lbnRzICovXG4gIGV4dGVybmFsPzogYW55O1xuICAvKiog44Kr44K544K/44OgQ1NT5a6a576pICovXG4gIGNzcz86IENTU1R5cGU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vZGFsIGV4dGVuZHMgUHVyZUNvbXBvbmVudDxQcm9wcz4ge1xuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIHNob3c6IGZhbHNlLFxuICAgIGNvbG9yOiAnd2hpdGUnLFxuICAgIHNpemU6IDYsXG4gICAgc2hhZG93Q29sb3I6ICdyZ2JhKDEwLDEwLDEwLC44NiknLFxuICB9O1xuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIGlmICh0aGlzLmVsZW1lbnQpIHtcbiAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQodGhpcy5lbGVtZW50KTtcbiAgICB9XG4gIH1cblxuICBvbktleURvd24gPSAoZTogYW55KSA9PiB7XG4gICAgaWYgKHRoaXMucHJvcHMuY2xvc2VPbkVzYyAmJiBlLmtleUNvZGUgPT09IEVTQ19LRVkgJiYgdGhpcy5wcm9wcy5jbG9zZU1vZGFsKSB7XG4gICAgICB0aGlzLnByb3BzLmNsb3NlTW9kYWwoKTtcbiAgICB9XG4gIH1cblxuICBvbkNsaWNrT3ZlcmxheSA9ICgpID0+IHtcbiAgICBpZiAodGhpcy5wcm9wcy5jbG9zZU9uT3ZlcmxheSAmJiB0aGlzLnByb3BzLmNsb3NlTW9kYWwpIHtcbiAgICAgIHRoaXMucHJvcHMuY2xvc2VNb2RhbCgpO1xuICAgIH1cbiAgfVxuXG4gIGVsZW1lbnQ/OiBIVE1MRGl2RWxlbWVudDtcbiAgc2hvdWxkQ2xvc2U6IGJvb2xlYW4gfCBudWxsID0gbnVsbDtcblxuICByZW5kZXIoKTogUmVhY3QuUmVhY3RQb3J0YWwgfCBudWxsIHtcbiAgICBpZiAodHlwZW9mIGRvY3VtZW50ICE9PSBcInVuZGVmaW5lZFwiICYmICF0aGlzLmVsZW1lbnQpIHtcbiAgICAgIHRoaXMuZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLmVsZW1lbnQpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmVsZW1lbnQpIHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgc2hvdywgc2l6ZSwgdGl0bGUsIGNoaWxkcmVuLCBmb290ZXIsIGNvbG9yLCBvbkNsaWNrLCAuLi5yZXN0XG4gICAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgICAgcmV0dXJuIGNyZWF0ZVBvcnRhbCgoXG4gICAgICAgIDxDU1NUcmFuc2l0aW9uXG4gICAgICAgICAgY2xhc3NOYW1lcz1cImZhZGVcIlxuICAgICAgICAgIHRpbWVvdXQ9ezIwMH1cbiAgICAgICAgICBpbj17c2hvd31cbiAgICAgICAgICB1bm1vdW50T25FeGl0XG4gICAgICAgID5cbiAgICAgICAgICA8V3JhcHBlciByb2xlPVwiZG9jdW1lbnRcIiB7Li4ucmVzdH0+XG4gICAgICAgICAgICA8Q29sIGNsYXNzTmFtZT1cInYtbW9kYWwtYm9keVwiIHNpemU9e3NpemV9IGF1dG8gcm9sZT1cImRpYWxvZ1wiPlxuICAgICAgICAgICAgICA8Qm94IGNvbG9yPXtjb2xvcn0+XG4gICAgICAgICAgICAgICAge3RpdGxlID8gdGl0bGUgOiBudWxsfVxuICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgICAgICAgICB7Zm9vdGVyID8gZm9vdGVyIDogbnVsbH1cbiAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgIHt0aGlzLnByb3BzLmV4dGVybmFsfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2LW1vZGFsLXNoYWRvd1wiIG9uQ2xpY2s9e3RoaXMub25DbGlja092ZXJsYXl9IC8+XG4gICAgICAgICAgPC9XcmFwcGVyPlxuICAgICAgICA8L0NTU1RyYW5zaXRpb24+XG4gICAgICApLCB0aGlzLmVsZW1lbnQpO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmdldENoaWxkTWFwcGluZyA9IGdldENoaWxkTWFwcGluZztcbmV4cG9ydHMubWVyZ2VDaGlsZE1hcHBpbmdzID0gbWVyZ2VDaGlsZE1hcHBpbmdzO1xuZXhwb3J0cy5nZXRJbml0aWFsQ2hpbGRNYXBwaW5nID0gZ2V0SW5pdGlhbENoaWxkTWFwcGluZztcbmV4cG9ydHMuZ2V0TmV4dENoaWxkTWFwcGluZyA9IGdldE5leHRDaGlsZE1hcHBpbmc7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKFwicmVhY3RcIik7XG5cbi8qKlxuICogR2l2ZW4gYHRoaXMucHJvcHMuY2hpbGRyZW5gLCByZXR1cm4gYW4gb2JqZWN0IG1hcHBpbmcga2V5IHRvIGNoaWxkLlxuICpcbiAqIEBwYXJhbSB7Kn0gY2hpbGRyZW4gYHRoaXMucHJvcHMuY2hpbGRyZW5gXG4gKiBAcmV0dXJuIHtvYmplY3R9IE1hcHBpbmcgb2Yga2V5IHRvIGNoaWxkXG4gKi9cbmZ1bmN0aW9uIGdldENoaWxkTWFwcGluZyhjaGlsZHJlbiwgbWFwRm4pIHtcbiAgdmFyIG1hcHBlciA9IGZ1bmN0aW9uIG1hcHBlcihjaGlsZCkge1xuICAgIHJldHVybiBtYXBGbiAmJiAoMCwgX3JlYWN0LmlzVmFsaWRFbGVtZW50KShjaGlsZCkgPyBtYXBGbihjaGlsZCkgOiBjaGlsZDtcbiAgfTtcblxuICB2YXIgcmVzdWx0ID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgaWYgKGNoaWxkcmVuKSBfcmVhY3QuQ2hpbGRyZW4ubWFwKGNoaWxkcmVuLCBmdW5jdGlvbiAoYykge1xuICAgIHJldHVybiBjO1xuICB9KS5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xuICAgIC8vIHJ1biB0aGUgbWFwIGZ1bmN0aW9uIGhlcmUgaW5zdGVhZCBzbyB0aGF0IHRoZSBrZXkgaXMgdGhlIGNvbXB1dGVkIG9uZVxuICAgIHJlc3VsdFtjaGlsZC5rZXldID0gbWFwcGVyKGNoaWxkKTtcbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59XG4vKipcbiAqIFdoZW4geW91J3JlIGFkZGluZyBvciByZW1vdmluZyBjaGlsZHJlbiBzb21lIG1heSBiZSBhZGRlZCBvciByZW1vdmVkIGluIHRoZVxuICogc2FtZSByZW5kZXIgcGFzcy4gV2Ugd2FudCB0byBzaG93ICpib3RoKiBzaW5jZSB3ZSB3YW50IHRvIHNpbXVsdGFuZW91c2x5XG4gKiBhbmltYXRlIGVsZW1lbnRzIGluIGFuZCBvdXQuIFRoaXMgZnVuY3Rpb24gdGFrZXMgYSBwcmV2aW91cyBzZXQgb2Yga2V5c1xuICogYW5kIGEgbmV3IHNldCBvZiBrZXlzIGFuZCBtZXJnZXMgdGhlbSB3aXRoIGl0cyBiZXN0IGd1ZXNzIG9mIHRoZSBjb3JyZWN0XG4gKiBvcmRlcmluZy4gSW4gdGhlIGZ1dHVyZSB3ZSBtYXkgZXhwb3NlIHNvbWUgb2YgdGhlIHV0aWxpdGllcyBpblxuICogUmVhY3RNdWx0aUNoaWxkIHRvIG1ha2UgdGhpcyBlYXN5LCBidXQgZm9yIG5vdyBSZWFjdCBpdHNlbGYgZG9lcyBub3RcbiAqIGRpcmVjdGx5IGhhdmUgdGhpcyBjb25jZXB0IG9mIHRoZSB1bmlvbiBvZiBwcmV2Q2hpbGRyZW4gYW5kIG5leHRDaGlsZHJlblxuICogc28gd2UgaW1wbGVtZW50IGl0IGhlcmUuXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IHByZXYgcHJldiBjaGlsZHJlbiBhcyByZXR1cm5lZCBmcm9tXG4gKiBgUmVhY3RUcmFuc2l0aW9uQ2hpbGRNYXBwaW5nLmdldENoaWxkTWFwcGluZygpYC5cbiAqIEBwYXJhbSB7b2JqZWN0fSBuZXh0IG5leHQgY2hpbGRyZW4gYXMgcmV0dXJuZWQgZnJvbVxuICogYFJlYWN0VHJhbnNpdGlvbkNoaWxkTWFwcGluZy5nZXRDaGlsZE1hcHBpbmcoKWAuXG4gKiBAcmV0dXJuIHtvYmplY3R9IGEga2V5IHNldCB0aGF0IGNvbnRhaW5zIGFsbCBrZXlzIGluIGBwcmV2YCBhbmQgYWxsIGtleXNcbiAqIGluIGBuZXh0YCBpbiBhIHJlYXNvbmFibGUgb3JkZXIuXG4gKi9cblxuXG5mdW5jdGlvbiBtZXJnZUNoaWxkTWFwcGluZ3MocHJldiwgbmV4dCkge1xuICBwcmV2ID0gcHJldiB8fCB7fTtcbiAgbmV4dCA9IG5leHQgfHwge307XG5cbiAgZnVuY3Rpb24gZ2V0VmFsdWVGb3JLZXkoa2V5KSB7XG4gICAgcmV0dXJuIGtleSBpbiBuZXh0ID8gbmV4dFtrZXldIDogcHJldltrZXldO1xuICB9IC8vIEZvciBlYWNoIGtleSBvZiBgbmV4dGAsIHRoZSBsaXN0IG9mIGtleXMgdG8gaW5zZXJ0IGJlZm9yZSB0aGF0IGtleSBpblxuICAvLyB0aGUgY29tYmluZWQgbGlzdFxuXG5cbiAgdmFyIG5leHRLZXlzUGVuZGluZyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gIHZhciBwZW5kaW5nS2V5cyA9IFtdO1xuXG4gIGZvciAodmFyIHByZXZLZXkgaW4gcHJldikge1xuICAgIGlmIChwcmV2S2V5IGluIG5leHQpIHtcbiAgICAgIGlmIChwZW5kaW5nS2V5cy5sZW5ndGgpIHtcbiAgICAgICAgbmV4dEtleXNQZW5kaW5nW3ByZXZLZXldID0gcGVuZGluZ0tleXM7XG4gICAgICAgIHBlbmRpbmdLZXlzID0gW107XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHBlbmRpbmdLZXlzLnB1c2gocHJldktleSk7XG4gICAgfVxuICB9XG5cbiAgdmFyIGk7XG4gIHZhciBjaGlsZE1hcHBpbmcgPSB7fTtcblxuICBmb3IgKHZhciBuZXh0S2V5IGluIG5leHQpIHtcbiAgICBpZiAobmV4dEtleXNQZW5kaW5nW25leHRLZXldKSB7XG4gICAgICBmb3IgKGkgPSAwOyBpIDwgbmV4dEtleXNQZW5kaW5nW25leHRLZXldLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBwZW5kaW5nTmV4dEtleSA9IG5leHRLZXlzUGVuZGluZ1tuZXh0S2V5XVtpXTtcbiAgICAgICAgY2hpbGRNYXBwaW5nW25leHRLZXlzUGVuZGluZ1tuZXh0S2V5XVtpXV0gPSBnZXRWYWx1ZUZvcktleShwZW5kaW5nTmV4dEtleSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY2hpbGRNYXBwaW5nW25leHRLZXldID0gZ2V0VmFsdWVGb3JLZXkobmV4dEtleSk7XG4gIH0gLy8gRmluYWxseSwgYWRkIHRoZSBrZXlzIHdoaWNoIGRpZG4ndCBhcHBlYXIgYmVmb3JlIGFueSBrZXkgaW4gYG5leHRgXG5cblxuICBmb3IgKGkgPSAwOyBpIDwgcGVuZGluZ0tleXMubGVuZ3RoOyBpKyspIHtcbiAgICBjaGlsZE1hcHBpbmdbcGVuZGluZ0tleXNbaV1dID0gZ2V0VmFsdWVGb3JLZXkocGVuZGluZ0tleXNbaV0pO1xuICB9XG5cbiAgcmV0dXJuIGNoaWxkTWFwcGluZztcbn1cblxuZnVuY3Rpb24gZ2V0UHJvcChjaGlsZCwgcHJvcCwgcHJvcHMpIHtcbiAgcmV0dXJuIHByb3BzW3Byb3BdICE9IG51bGwgPyBwcm9wc1twcm9wXSA6IGNoaWxkLnByb3BzW3Byb3BdO1xufVxuXG5mdW5jdGlvbiBnZXRJbml0aWFsQ2hpbGRNYXBwaW5nKHByb3BzLCBvbkV4aXRlZCkge1xuICByZXR1cm4gZ2V0Q2hpbGRNYXBwaW5nKHByb3BzLmNoaWxkcmVuLCBmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICByZXR1cm4gKDAsIF9yZWFjdC5jbG9uZUVsZW1lbnQpKGNoaWxkLCB7XG4gICAgICBvbkV4aXRlZDogb25FeGl0ZWQuYmluZChudWxsLCBjaGlsZCksXG4gICAgICBpbjogdHJ1ZSxcbiAgICAgIGFwcGVhcjogZ2V0UHJvcChjaGlsZCwgJ2FwcGVhcicsIHByb3BzKSxcbiAgICAgIGVudGVyOiBnZXRQcm9wKGNoaWxkLCAnZW50ZXInLCBwcm9wcyksXG4gICAgICBleGl0OiBnZXRQcm9wKGNoaWxkLCAnZXhpdCcsIHByb3BzKVxuICAgIH0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gZ2V0TmV4dENoaWxkTWFwcGluZyhuZXh0UHJvcHMsIHByZXZDaGlsZE1hcHBpbmcsIG9uRXhpdGVkKSB7XG4gIHZhciBuZXh0Q2hpbGRNYXBwaW5nID0gZ2V0Q2hpbGRNYXBwaW5nKG5leHRQcm9wcy5jaGlsZHJlbik7XG4gIHZhciBjaGlsZHJlbiA9IG1lcmdlQ2hpbGRNYXBwaW5ncyhwcmV2Q2hpbGRNYXBwaW5nLCBuZXh0Q2hpbGRNYXBwaW5nKTtcbiAgT2JqZWN0LmtleXMoY2hpbGRyZW4pLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHZhciBjaGlsZCA9IGNoaWxkcmVuW2tleV07XG4gICAgaWYgKCEoMCwgX3JlYWN0LmlzVmFsaWRFbGVtZW50KShjaGlsZCkpIHJldHVybjtcbiAgICB2YXIgaGFzUHJldiA9IGtleSBpbiBwcmV2Q2hpbGRNYXBwaW5nO1xuICAgIHZhciBoYXNOZXh0ID0ga2V5IGluIG5leHRDaGlsZE1hcHBpbmc7XG4gICAgdmFyIHByZXZDaGlsZCA9IHByZXZDaGlsZE1hcHBpbmdba2V5XTtcbiAgICB2YXIgaXNMZWF2aW5nID0gKDAsIF9yZWFjdC5pc1ZhbGlkRWxlbWVudCkocHJldkNoaWxkKSAmJiAhcHJldkNoaWxkLnByb3BzLmluOyAvLyBpdGVtIGlzIG5ldyAoZW50ZXJpbmcpXG5cbiAgICBpZiAoaGFzTmV4dCAmJiAoIWhhc1ByZXYgfHwgaXNMZWF2aW5nKSkge1xuICAgICAgLy8gY29uc29sZS5sb2coJ2VudGVyaW5nJywga2V5KVxuICAgICAgY2hpbGRyZW5ba2V5XSA9ICgwLCBfcmVhY3QuY2xvbmVFbGVtZW50KShjaGlsZCwge1xuICAgICAgICBvbkV4aXRlZDogb25FeGl0ZWQuYmluZChudWxsLCBjaGlsZCksXG4gICAgICAgIGluOiB0cnVlLFxuICAgICAgICBleGl0OiBnZXRQcm9wKGNoaWxkLCAnZXhpdCcsIG5leHRQcm9wcyksXG4gICAgICAgIGVudGVyOiBnZXRQcm9wKGNoaWxkLCAnZW50ZXInLCBuZXh0UHJvcHMpXG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKCFoYXNOZXh0ICYmIGhhc1ByZXYgJiYgIWlzTGVhdmluZykge1xuICAgICAgLy8gaXRlbSBpcyBvbGQgKGV4aXRpbmcpXG4gICAgICAvLyBjb25zb2xlLmxvZygnbGVhdmluZycsIGtleSlcbiAgICAgIGNoaWxkcmVuW2tleV0gPSAoMCwgX3JlYWN0LmNsb25lRWxlbWVudCkoY2hpbGQsIHtcbiAgICAgICAgaW46IGZhbHNlXG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKGhhc05leHQgJiYgaGFzUHJldiAmJiAoMCwgX3JlYWN0LmlzVmFsaWRFbGVtZW50KShwcmV2Q2hpbGQpKSB7XG4gICAgICAvLyBpdGVtIGhhc24ndCBjaGFuZ2VkIHRyYW5zaXRpb24gc3RhdGVzXG4gICAgICAvLyBjb3B5IG92ZXIgdGhlIGxhc3QgdHJhbnNpdGlvbiBwcm9wcztcbiAgICAgIC8vIGNvbnNvbGUubG9nKCd1bmNoYW5nZWQnLCBrZXkpXG4gICAgICBjaGlsZHJlbltrZXldID0gKDAsIF9yZWFjdC5jbG9uZUVsZW1lbnQpKGNoaWxkLCB7XG4gICAgICAgIG9uRXhpdGVkOiBvbkV4aXRlZC5iaW5kKG51bGwsIGNoaWxkKSxcbiAgICAgICAgaW46IHByZXZDaGlsZC5wcm9wcy5pbixcbiAgICAgICAgZXhpdDogZ2V0UHJvcChjaGlsZCwgJ2V4aXQnLCBuZXh0UHJvcHMpLFxuICAgICAgICBlbnRlcjogZ2V0UHJvcChjaGlsZCwgJ2VudGVyJywgbmV4dFByb3BzKVxuICAgICAgfSk7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIGNoaWxkcmVuO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX3Byb3BUeXBlcyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInByb3AtdHlwZXNcIikpO1xuXG52YXIgX3JlYWN0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgX3JlYWN0TGlmZWN5Y2xlc0NvbXBhdCA9IHJlcXVpcmUoXCJyZWFjdC1saWZlY3ljbGVzLWNvbXBhdFwiKTtcblxudmFyIF9DaGlsZE1hcHBpbmcgPSByZXF1aXJlKFwiLi91dGlscy9DaGlsZE1hcHBpbmdcIik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpIHsgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307IHZhciB0YXJnZXQgPSB7fTsgdmFyIHNvdXJjZUtleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpOyB2YXIga2V5LCBpOyBmb3IgKGkgPSAwOyBpIDwgc291cmNlS2V5cy5sZW5ndGg7IGkrKykgeyBrZXkgPSBzb3VyY2VLZXlzW2ldOyBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlOyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX2V4dGVuZHMoKSB7IF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTsgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzTG9vc2Uoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzLnByb3RvdHlwZSk7IHN1YkNsYXNzLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IHN1YkNsYXNzOyBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuXG52YXIgdmFsdWVzID0gT2JqZWN0LnZhbHVlcyB8fCBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiBPYmplY3Qua2V5cyhvYmopLm1hcChmdW5jdGlvbiAoaykge1xuICAgIHJldHVybiBvYmpba107XG4gIH0pO1xufTtcblxudmFyIGRlZmF1bHRQcm9wcyA9IHtcbiAgY29tcG9uZW50OiAnZGl2JyxcbiAgY2hpbGRGYWN0b3J5OiBmdW5jdGlvbiBjaGlsZEZhY3RvcnkoY2hpbGQpIHtcbiAgICByZXR1cm4gY2hpbGQ7XG4gIH1cbiAgLyoqXG4gICAqIFRoZSBgPFRyYW5zaXRpb25Hcm91cD5gIGNvbXBvbmVudCBtYW5hZ2VzIGEgc2V0IG9mIHRyYW5zaXRpb24gY29tcG9uZW50c1xuICAgKiAoYDxUcmFuc2l0aW9uPmAgYW5kIGA8Q1NTVHJhbnNpdGlvbj5gKSBpbiBhIGxpc3QuIExpa2Ugd2l0aCB0aGUgdHJhbnNpdGlvblxuICAgKiBjb21wb25lbnRzLCBgPFRyYW5zaXRpb25Hcm91cD5gIGlzIGEgc3RhdGUgbWFjaGluZSBmb3IgbWFuYWdpbmcgdGhlIG1vdW50aW5nXG4gICAqIGFuZCB1bm1vdW50aW5nIG9mIGNvbXBvbmVudHMgb3ZlciB0aW1lLlxuICAgKlxuICAgKiBDb25zaWRlciB0aGUgZXhhbXBsZSBiZWxvdy4gQXMgaXRlbXMgYXJlIHJlbW92ZWQgb3IgYWRkZWQgdG8gdGhlIFRvZG9MaXN0IHRoZVxuICAgKiBgaW5gIHByb3AgaXMgdG9nZ2xlZCBhdXRvbWF0aWNhbGx5IGJ5IHRoZSBgPFRyYW5zaXRpb25Hcm91cD5gLlxuICAgKlxuICAgKiBOb3RlIHRoYXQgYDxUcmFuc2l0aW9uR3JvdXA+YCAgZG9lcyBub3QgZGVmaW5lIGFueSBhbmltYXRpb24gYmVoYXZpb3IhXG4gICAqIEV4YWN0bHkgX2hvd18gYSBsaXN0IGl0ZW0gYW5pbWF0ZXMgaXMgdXAgdG8gdGhlIGluZGl2aWR1YWwgdHJhbnNpdGlvblxuICAgKiBjb21wb25lbnQuIFRoaXMgbWVhbnMgeW91IGNhbiBtaXggYW5kIG1hdGNoIGFuaW1hdGlvbnMgYWNyb3NzIGRpZmZlcmVudCBsaXN0XG4gICAqIGl0ZW1zLlxuICAgKi9cblxufTtcblxudmFyIFRyYW5zaXRpb25Hcm91cCA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHNMb29zZShUcmFuc2l0aW9uR3JvdXAsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIFRyYW5zaXRpb25Hcm91cChwcm9wcywgY29udGV4dCkge1xuICAgIHZhciBfdGhpcztcblxuICAgIF90aGlzID0gX1JlYWN0JENvbXBvbmVudC5jYWxsKHRoaXMsIHByb3BzLCBjb250ZXh0KSB8fCB0aGlzO1xuXG4gICAgdmFyIGhhbmRsZUV4aXRlZCA9IF90aGlzLmhhbmRsZUV4aXRlZC5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpKTsgLy8gSW5pdGlhbCBjaGlsZHJlbiBzaG91bGQgYWxsIGJlIGVudGVyaW5nLCBkZXBlbmRlbnQgb24gYXBwZWFyXG5cblxuICAgIF90aGlzLnN0YXRlID0ge1xuICAgICAgaGFuZGxlRXhpdGVkOiBoYW5kbGVFeGl0ZWQsXG4gICAgICBmaXJzdFJlbmRlcjogdHJ1ZVxuICAgIH07XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IFRyYW5zaXRpb25Hcm91cC5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLmdldENoaWxkQ29udGV4dCA9IGZ1bmN0aW9uIGdldENoaWxkQ29udGV4dCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdHJhbnNpdGlvbkdyb3VwOiB7XG4gICAgICAgIGlzTW91bnRpbmc6ICF0aGlzLmFwcGVhcmVkXG4gICAgICB9XG4gICAgfTtcbiAgfTtcblxuICBfcHJvdG8uY29tcG9uZW50RGlkTW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLmFwcGVhcmVkID0gdHJ1ZTtcbiAgICB0aGlzLm1vdW50ZWQgPSB0cnVlO1xuICB9O1xuXG4gIF9wcm90by5jb21wb25lbnRXaWxsVW5tb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMubW91bnRlZCA9IGZhbHNlO1xuICB9O1xuXG4gIFRyYW5zaXRpb25Hcm91cC5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMgPSBmdW5jdGlvbiBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMobmV4dFByb3BzLCBfcmVmKSB7XG4gICAgdmFyIHByZXZDaGlsZE1hcHBpbmcgPSBfcmVmLmNoaWxkcmVuLFxuICAgICAgICBoYW5kbGVFeGl0ZWQgPSBfcmVmLmhhbmRsZUV4aXRlZCxcbiAgICAgICAgZmlyc3RSZW5kZXIgPSBfcmVmLmZpcnN0UmVuZGVyO1xuICAgIHJldHVybiB7XG4gICAgICBjaGlsZHJlbjogZmlyc3RSZW5kZXIgPyAoMCwgX0NoaWxkTWFwcGluZy5nZXRJbml0aWFsQ2hpbGRNYXBwaW5nKShuZXh0UHJvcHMsIGhhbmRsZUV4aXRlZCkgOiAoMCwgX0NoaWxkTWFwcGluZy5nZXROZXh0Q2hpbGRNYXBwaW5nKShuZXh0UHJvcHMsIHByZXZDaGlsZE1hcHBpbmcsIGhhbmRsZUV4aXRlZCksXG4gICAgICBmaXJzdFJlbmRlcjogZmFsc2VcbiAgICB9O1xuICB9O1xuXG4gIF9wcm90by5oYW5kbGVFeGl0ZWQgPSBmdW5jdGlvbiBoYW5kbGVFeGl0ZWQoY2hpbGQsIG5vZGUpIHtcbiAgICB2YXIgY3VycmVudENoaWxkTWFwcGluZyA9ICgwLCBfQ2hpbGRNYXBwaW5nLmdldENoaWxkTWFwcGluZykodGhpcy5wcm9wcy5jaGlsZHJlbik7XG4gICAgaWYgKGNoaWxkLmtleSBpbiBjdXJyZW50Q2hpbGRNYXBwaW5nKSByZXR1cm47XG5cbiAgICBpZiAoY2hpbGQucHJvcHMub25FeGl0ZWQpIHtcbiAgICAgIGNoaWxkLnByb3BzLm9uRXhpdGVkKG5vZGUpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLm1vdW50ZWQpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoZnVuY3Rpb24gKHN0YXRlKSB7XG4gICAgICAgIHZhciBjaGlsZHJlbiA9IF9leHRlbmRzKHt9LCBzdGF0ZS5jaGlsZHJlbik7XG5cbiAgICAgICAgZGVsZXRlIGNoaWxkcmVuW2NoaWxkLmtleV07XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgY2hpbGRyZW46IGNoaWxkcmVuXG4gICAgICAgIH07XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgX3RoaXMkcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICBDb21wb25lbnQgPSBfdGhpcyRwcm9wcy5jb21wb25lbnQsXG4gICAgICAgIGNoaWxkRmFjdG9yeSA9IF90aGlzJHByb3BzLmNoaWxkRmFjdG9yeSxcbiAgICAgICAgcHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShfdGhpcyRwcm9wcywgW1wiY29tcG9uZW50XCIsIFwiY2hpbGRGYWN0b3J5XCJdKTtcblxuICAgIHZhciBjaGlsZHJlbiA9IHZhbHVlcyh0aGlzLnN0YXRlLmNoaWxkcmVuKS5tYXAoY2hpbGRGYWN0b3J5KTtcbiAgICBkZWxldGUgcHJvcHMuYXBwZWFyO1xuICAgIGRlbGV0ZSBwcm9wcy5lbnRlcjtcbiAgICBkZWxldGUgcHJvcHMuZXhpdDtcblxuICAgIGlmIChDb21wb25lbnQgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiBjaGlsZHJlbjtcbiAgICB9XG5cbiAgICByZXR1cm4gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChDb21wb25lbnQsIHByb3BzLCBjaGlsZHJlbik7XG4gIH07XG5cbiAgcmV0dXJuIFRyYW5zaXRpb25Hcm91cDtcbn0oX3JlYWN0LmRlZmF1bHQuQ29tcG9uZW50KTtcblxuVHJhbnNpdGlvbkdyb3VwLmNoaWxkQ29udGV4dFR5cGVzID0ge1xuICB0cmFuc2l0aW9uR3JvdXA6IF9wcm9wVHlwZXMuZGVmYXVsdC5vYmplY3QuaXNSZXF1aXJlZFxufTtcblRyYW5zaXRpb25Hcm91cC5wcm9wVHlwZXMgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyB7XG4gIC8qKlxuICAgKiBgPFRyYW5zaXRpb25Hcm91cD5gIHJlbmRlcnMgYSBgPGRpdj5gIGJ5IGRlZmF1bHQuIFlvdSBjYW4gY2hhbmdlIHRoaXNcbiAgICogYmVoYXZpb3IgYnkgcHJvdmlkaW5nIGEgYGNvbXBvbmVudGAgcHJvcC5cbiAgICogSWYgeW91IHVzZSBSZWFjdCB2MTYrIGFuZCB3b3VsZCBsaWtlIHRvIGF2b2lkIGEgd3JhcHBpbmcgYDxkaXY+YCBlbGVtZW50XG4gICAqIHlvdSBjYW4gcGFzcyBpbiBgY29tcG9uZW50PXtudWxsfWAuIFRoaXMgaXMgdXNlZnVsIGlmIHRoZSB3cmFwcGluZyBkaXZcbiAgICogYm9ya3MgeW91ciBjc3Mgc3R5bGVzLlxuICAgKi9cbiAgY29tcG9uZW50OiBfcHJvcFR5cGVzLmRlZmF1bHQuYW55LFxuXG4gIC8qKlxuICAgKiBBIHNldCBvZiBgPFRyYW5zaXRpb24+YCBjb21wb25lbnRzLCB0aGF0IGFyZSB0b2dnbGVkIGBpbmAgYW5kIG91dCBhcyB0aGV5XG4gICAqIGxlYXZlLiB0aGUgYDxUcmFuc2l0aW9uR3JvdXA+YCB3aWxsIGluamVjdCBzcGVjaWZpYyB0cmFuc2l0aW9uIHByb3BzLCBzb1xuICAgKiByZW1lbWJlciB0byBzcHJlYWQgdGhlbSB0aHJvdWdoIGlmIHlvdSBhcmUgd3JhcHBpbmcgdGhlIGA8VHJhbnNpdGlvbj5gIGFzXG4gICAqIHdpdGggb3VyIGA8RmFkZT5gIGV4YW1wbGUuXG4gICAqL1xuICBjaGlsZHJlbjogX3Byb3BUeXBlcy5kZWZhdWx0Lm5vZGUsXG5cbiAgLyoqXG4gICAqIEEgY29udmVuaWVuY2UgcHJvcCB0aGF0IGVuYWJsZXMgb3IgZGlzYWJsZXMgYXBwZWFyIGFuaW1hdGlvbnNcbiAgICogZm9yIGFsbCBjaGlsZHJlbi4gTm90ZSB0aGF0IHNwZWNpZnlpbmcgdGhpcyB3aWxsIG92ZXJyaWRlIGFueSBkZWZhdWx0cyBzZXRcbiAgICogb24gaW5kaXZpZHVhbCBjaGlsZHJlbiBUcmFuc2l0aW9ucy5cbiAgICovXG4gIGFwcGVhcjogX3Byb3BUeXBlcy5kZWZhdWx0LmJvb2wsXG5cbiAgLyoqXG4gICAqIEEgY29udmVuaWVuY2UgcHJvcCB0aGF0IGVuYWJsZXMgb3IgZGlzYWJsZXMgZW50ZXIgYW5pbWF0aW9uc1xuICAgKiBmb3IgYWxsIGNoaWxkcmVuLiBOb3RlIHRoYXQgc3BlY2lmeWluZyB0aGlzIHdpbGwgb3ZlcnJpZGUgYW55IGRlZmF1bHRzIHNldFxuICAgKiBvbiBpbmRpdmlkdWFsIGNoaWxkcmVuIFRyYW5zaXRpb25zLlxuICAgKi9cbiAgZW50ZXI6IF9wcm9wVHlwZXMuZGVmYXVsdC5ib29sLFxuXG4gIC8qKlxuICAgKiBBIGNvbnZlbmllbmNlIHByb3AgdGhhdCBlbmFibGVzIG9yIGRpc2FibGVzIGV4aXQgYW5pbWF0aW9uc1xuICAgKiBmb3IgYWxsIGNoaWxkcmVuLiBOb3RlIHRoYXQgc3BlY2lmeWluZyB0aGlzIHdpbGwgb3ZlcnJpZGUgYW55IGRlZmF1bHRzIHNldFxuICAgKiBvbiBpbmRpdmlkdWFsIGNoaWxkcmVuIFRyYW5zaXRpb25zLlxuICAgKi9cbiAgZXhpdDogX3Byb3BUeXBlcy5kZWZhdWx0LmJvb2wsXG5cbiAgLyoqXG4gICAqIFlvdSBtYXkgbmVlZCB0byBhcHBseSByZWFjdGl2ZSB1cGRhdGVzIHRvIGEgY2hpbGQgYXMgaXQgaXMgZXhpdGluZy5cbiAgICogVGhpcyBpcyBnZW5lcmFsbHkgZG9uZSBieSB1c2luZyBgY2xvbmVFbGVtZW50YCBob3dldmVyIGluIHRoZSBjYXNlIG9mIGFuIGV4aXRpbmdcbiAgICogY2hpbGQgdGhlIGVsZW1lbnQgaGFzIGFscmVhZHkgYmVlbiByZW1vdmVkIGFuZCBub3QgYWNjZXNzaWJsZSB0byB0aGUgY29uc3VtZXIuXG4gICAqXG4gICAqIElmIHlvdSBkbyBuZWVkIHRvIHVwZGF0ZSBhIGNoaWxkIGFzIGl0IGxlYXZlcyB5b3UgY2FuIHByb3ZpZGUgYSBgY2hpbGRGYWN0b3J5YFxuICAgKiB0byB3cmFwIGV2ZXJ5IGNoaWxkLCBldmVuIHRoZSBvbmVzIHRoYXQgYXJlIGxlYXZpbmcuXG4gICAqXG4gICAqIEB0eXBlIEZ1bmN0aW9uKGNoaWxkOiBSZWFjdEVsZW1lbnQpIC0+IFJlYWN0RWxlbWVudFxuICAgKi9cbiAgY2hpbGRGYWN0b3J5OiBfcHJvcFR5cGVzLmRlZmF1bHQuZnVuY1xufSA6IHt9O1xuVHJhbnNpdGlvbkdyb3VwLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcztcblxudmFyIF9kZWZhdWx0ID0gKDAsIF9yZWFjdExpZmVjeWNsZXNDb21wYXQucG9seWZpbGwpKFRyYW5zaXRpb25Hcm91cCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzW1wiZGVmYXVsdFwiXTsiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY3JlYXRlUG9ydGFsIH0gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBDU1NUcmFuc2l0aW9uIGZyb20gJ3JlYWN0LXRyYW5zaXRpb24tZ3JvdXAvQ1NTVHJhbnNpdGlvbic7XG5pbXBvcnQgVHJhbnNpdGlvbkdyb3VwIGZyb20gJ3JlYWN0LXRyYW5zaXRpb24tZ3JvdXAvVHJhbnNpdGlvbkdyb3VwJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5pbXBvcnQgQm94IGZyb20gJy4uL0JveCc7XG5pbXBvcnQgeyBDb2xvclR5cGUgfSBmcm9tICcuLi8uLi90eXBlcyc7XG5cbnR5cGUgUG9zaXRpb25UeXBlID0gJ3RvcCcgfCAndG9wLWxlZnQnIHwgJ3RvcC1yaWdodCcgfCAnYm90dG9tJyB8ICdib3R0b20tbGVmdCcgfCAnYm90dG9tLXJpZ2h0JztcblxuaW50ZXJmYWNlIFRvYXN0VHlwZSB7XG4gIC8qKiDoqo3orZhJRCAqL1xuICBpZDogc3RyaW5nO1xuICAvKiog6KGo56S644GZ44KL5YaF5a65ICovXG4gIG1lc3NhZ2U/OiBSZWFjdC5SZWFjdE5vZGU7XG4gIC8qKiDog4zmma/jga7oibIgKi9cbiAgY29sb3I/OiBDb2xvclR5cGU7XG4gIC8qKiDooajnpLrjgZXjgozjgovmmYLplpMgbnVsbOOBruWgtOWQiOOBr+iHquWLleOBp+mWieOBmOOCieOCjOOBvuOBm+OCkyAqL1xuICBkdXJhdGlvbj86IG51bWJlciB8IG51bGw7XG59XG5cbmludGVyZmFjZSBUb2FzdFByb3BzIGV4dGVuZHMgVG9hc3RUeXBlIHtcbiAgY2xlYXI6ICgpID0+IHZvaWQ7XG59XG5cbmNvbnN0IFdyYXBwZXIgPSBzdHlsZWQoQm94KWBcbiAgcGFkZGluZzogMC4zNzVlbSAwLjc1ZW07XG4gIG1heC13aWR0aDogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgei1pbmRleDogOTk5OTtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xuXG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybSwgb3BhY2l0eTtcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKTtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMjUwbXM7XG5cbiAgJi5tb3ZlLWVudGVyIHtcbiAgICBvcGFjaXR5OiAwLjAxO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC44KTtcbiAgfVxuICAmLm1vdmUtZW50ZXItYWN0aXZlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIH1cbiAgJi5tb3ZlLWV4aXQge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgfVxuICAmLm1vdmUtZXhpdC1hY3RpdmUge1xuICAgIG9wYWNpdHk6IDAuMDE7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjgpO1xuICB9XG5gO1xuXG5leHBvcnQgY2xhc3MgVG9hc3RJdGVtIGV4dGVuZHMgUHVyZUNvbXBvbmVudDxUb2FzdFByb3BzPiB7XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgZHVyYXRpb246IDUwMDAsXG4gIH07XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgaWYgKHRoaXMucHJvcHMuZHVyYXRpb24gIT09IG51bGwpIHtcbiAgICAgIHNldFRpbWVvdXQodGhpcy5wcm9wcy5jbGVhciwgdGhpcy5wcm9wcy5kdXJhdGlvbik7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgbWVzc2FnZSwgY29sb3IgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxXcmFwcGVyIGJvcmRlcmxlc3MgY29sb3I9e2NvbG9yfT5cbiAgICAgICAge21lc3NhZ2V9XG4gICAgICA8L1dyYXBwZXI+XG4gICAgKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBzZXRQb3NpdGlvbihwb3NpdGlvbjogc3RyaW5nLCBpc0ZpeGVkPzogYm9vbGVhbikge1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgY29uc3QgYmFzZSA9IGBwb3NpdGlvbjogJHtpc0ZpeGVkID8gJ2ZpeGVkJyA6ICdhYnNvbHV0ZSd9OyB6LWluZGV4OiA5OTk5OyBkaXNwbGF5OiBmbGV4OyBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBgO1xuICBzd2l0Y2ggKHBvc2l0aW9uKSB7XG4gICAgY2FzZSAnYm90dG9tJzoge1xuICAgICAgcmV0dXJuIGAke2Jhc2V9IGJvdHRvbTogMXJlbTsgbGVmdDogNTAlOyBhbGlnbi1pdGVtOiBjZW50ZXI7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtgO1xuICAgIH1cbiAgICBjYXNlICdib3R0b20tbGVmdCc6IHtcbiAgICAgIHJldHVybiBgJHtiYXNlfSBib3R0b206IDFyZW07IGxlZnQ6IDFyZW07IGFsaWduLWl0ZW06IGZsZXgtc3RhcnQ7YDtcbiAgICB9XG4gICAgY2FzZSAnYm90dG9tLXJpZ2h0Jzoge1xuICAgICAgcmV0dXJuIGAke2Jhc2V9IGJvdHRvbTogMXJlbTsgcmlnaHQ6IDFyZW07IGFsaWduLWl0ZW06IGZsZXgtZW5kO2A7XG4gICAgfVxuICAgIGNhc2UgJ3RvcCc6IHtcbiAgICAgIHJldHVybiBgJHtiYXNlfSB0b3A6IDFyZW07IGxlZnQ6IDUwJTsgYWxpZ24taXRlbTogY2VudGVyOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7YDtcbiAgICB9XG4gICAgY2FzZSAndG9wLWxlZnQnOiB7XG4gICAgICByZXR1cm4gYCR7YmFzZX0gdG9wOiAxcmVtOyBsZWZ0OiAxcmVtOyBhbGlnbi1pdGVtOiBmbGV4LXN0YXJ0O2A7XG4gICAgfVxuICAgIGNhc2UgJ3RvcC1yaWdodCc6XG4gICAgZGVmYXVsdDoge1xuICAgICAgcmV0dXJuIGAke2Jhc2V9IHRvcDogMXJlbTsgcmlnaHQ6IDFyZW07IGFsaWduLWl0ZW06IGZsZXgtZW5kO2A7XG4gICAgfVxuICB9XG59XG5cbmludGVyZmFjZSBDb250YWluZXJQcm9wcyB7XG4gIC8qKiDooajnpLrjgZnjgotUb2FzdOOBruODquOCueODiCAqL1xuICB0b2FzdHM6IFRvYXN0VHlwZVtdO1xuICAvKiogdG9hc3TjgpLmtojjgZnjgr/jgqTjg5/jg7PjgrDjga7jgrPjg7zjg6vjg5Djg4Pjgq8gKi9cbiAgY2xlYXI6IChpZDogc3RyaW5nKSA9PiB2b2lkO1xuICAvKiogdG9wLCB0b3AtcmlnaHQsIHRvcC1sZWZ0LCBib3R0b20sIGJvdHRvbS1yaWdodCwgYm90dG9tLWxlZnQgKi9cbiAgcG9zaXRpb24/OiBQb3NpdGlvblR5cGU7XG4gIC8qKiDjgrnjgq/jg63jg7zjg6vjgZfjgabjgoLlm7rlrprjgajjgZfjgabooajnpLrjgZnjgosgKi9cbiAgZml4ZWQ/OiBib29sZWFuO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb2FzdENvbnRhaW5lciBleHRlbmRzIENvbXBvbmVudDxDb250YWluZXJQcm9wcz4ge1xuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIHRvYXN0czogW10sXG4gICAgcG9zaXRpb246ICd0b3AtcmlnaHQnLFxuICAgIGZpeGVkOiBmYWxzZSxcbiAgfTtcblxuICBzaG91bGRDb21wb25lbnRVcGRhdGUocHJvcHM6IENvbnRhaW5lclByb3BzKSB7XG4gICAgcmV0dXJuIHByb3BzLnRvYXN0cy5sZW5ndGggIT09IHRoaXMucHJvcHMudG9hc3RzLmxlbmd0aCB8fFxuICAgICAgcHJvcHMucG9zaXRpb24gIT09IHRoaXMucHJvcHMucG9zaXRpb247XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUocHJvcHM6IENvbnRhaW5lclByb3BzKSB7XG4gICAgaWYgKFxuICAgICAgdGhpcy5lbGVtZW50ICYmXG4gICAgICAocHJvcHMucG9zaXRpb24gIT09IHRoaXMucHJvcHMucG9zaXRpb24gfHwgcHJvcHMuZml4ZWQgIT09IHRoaXMucHJvcHMuZml4ZWQpXG4gICAgKSB7XG4gICAgICB0aGlzLmVsZW1lbnQuc3R5bGUuY3NzVGV4dCA9IHNldFBvc2l0aW9uKHRoaXMucHJvcHMucG9zaXRpb24hLCB0aGlzLnByb3BzLmZpeGVkKTtcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICBpZiAodGhpcy5lbGVtZW50KSBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHRoaXMuZWxlbWVudCk7XG4gIH1cblxuICBjbGVhciA9IChpZDogc3RyaW5nKSA9PiAoKSA9PiB7XG4gICAgdGhpcy5wcm9wcy5jbGVhcihpZCk7XG4gIH1cblxuICByZW5kZXJUb2FzdCA9ICgpID0+IHtcbiAgICBjb25zdCB7IHRvYXN0cyB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPFRyYW5zaXRpb25Hcm91cCBjb21wb25lbnQ9e251bGx9PlxuICAgICAgICB7dG9hc3RzLm1hcChwcm9wcyA9PiAoXG4gICAgICAgICAgPENTU1RyYW5zaXRpb25cbiAgICAgICAgICAgIGtleT17cHJvcHMuaWR9XG4gICAgICAgICAgICB0aW1lb3V0PXsyNTB9XG4gICAgICAgICAgICBjbGFzc05hbWVzPVwibW92ZVwiXG4gICAgICAgICAgICB1bm1vdW50T25FeGl0XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPFRvYXN0SXRlbVxuICAgICAgICAgICAgICBrZXk9e3Byb3BzLmlkfVxuICAgICAgICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAgICAgICAgIGNsZWFyPXt0aGlzLmNsZWFyKHByb3BzLmlkKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9DU1NUcmFuc2l0aW9uPlxuICAgICAgICApKX1cbiAgICAgIDwvVHJhbnNpdGlvbkdyb3VwPlxuICAgICk7XG4gIH1cblxuICBlbGVtZW50PzogSFRNTERpdkVsZW1lbnQ7XG5cbiAgcmVuZGVyKCk6IFJlYWN0LlJlYWN0UG9ydGFsIHwgbnVsbCB7XG4gICAgaWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcgJiYgIXRoaXMuZWxlbWVudCkge1xuICAgICAgdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICB0aGlzLmVsZW1lbnQuc3R5bGUuY3NzVGV4dCA9IHNldFBvc2l0aW9uKHRoaXMucHJvcHMucG9zaXRpb24hLCB0aGlzLnByb3BzLmZpeGVkKTtcbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5lbGVtZW50KTtcbiAgICB9XG5cblxuICAgIGlmICh0aGlzLmVsZW1lbnQpIHtcbiAgICAgIHJldHVybiBjcmVhdGVQb3J0YWwodGhpcy5yZW5kZXJUb2FzdCgpLCB0aGlzLmVsZW1lbnQpO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBDaGlsZHJlbiwgQ1NTUHJvcGVydGllcyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHNldEFsaWduIGZyb20gJy4uLy4uL3V0aWxzL3NldEFsaWduJztcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vQnV0dG9uJztcbmltcG9ydCB7IENvbG9yVHlwZSwgVGhlbWVUeXBlLCBBbGlnblR5cGUgfSBmcm9tICcuLi8uLi90eXBlcyc7XG5cbmNvbnN0IFdyYXBwZXIgPSBzdHlsZWQubmF2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6ICR7c2V0QWxpZ259O1xuXG4gIC50YWItY29udGVudCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgJHsoeyBhbGlnbiB9KSA9PiBhbGlnbiA/ICcnIDogJ2ZsZXgtZ3JvdzogMTsnfVxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgfVxuYDtcblxuaW50ZXJmYWNlIEl0ZW1Qcm9wcyB7XG4gIGFsaWduPzogYW55O1xuICBhY3RpdmU6IGJvb2xlYW47XG59XG5cbmNvbnN0IFRhYkl0ZW0gPSBzdHlsZWQuZGl2PEl0ZW1Qcm9wcz5gXG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmbGV4LWdyb3c6IDE7XG4gIGN1cnNvcjogcG9pbnRlcjtcblxuICBhIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnRleHR9O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICBwYWRkaW5nOiAwLjM3NWVtIDAuNzVlbTtcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XG5cbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBiYWNrZ3JvdW5kLWNvbG9yO1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDE1MG1zO1xuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcblxuICAgICY6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjAzKTtcbiAgICB9XG4gIH1cbmA7XG5cbmZ1bmN0aW9uIHNldENvbG9yKHsgdGhlbWUsIGNvbG9yIH06IHsgdGhlbWU6IFRoZW1lVHlwZSwgY29sb3I/OiBDb2xvclR5cGUgfSkge1xuICByZXR1cm4gIWNvbG9yID8gdGhlbWUuYmFja2dyb3VuZCA6IHRoZW1lW2NvbG9yXTtcbn1cblxuaW50ZXJmYWNlIEluZGljYXRvclByb3BzIHtcbiAgY29sb3I/OiBDb2xvclR5cGU7XG4gIHN0eWxlPzogQ1NTUHJvcGVydGllcztcbn1cblxuY29uc3QgSW5kaWNhdG9yID0gc3R5bGVkLmRpdjxJbmRpY2F0b3JQcm9wcz5gXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAke3NldENvbG9yfTtcbiAgaGVpZ2h0OiAycHg7XG5cbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0O1xuXG4gIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm07XG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybTtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMjAwbXM7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSk7XG5gO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICAvKiog6Imy5oyH5a6aICovXG4gIGNvbG9yPzogQ29sb3JUeXBlO1xuICAvKiogbGVmdCB8IHJpZ2h0IHwgY2VudGVyICovXG4gIGFsaWduPzogQWxpZ25UeXBlO1xuICAvKiog5LiA5rCX44Gr6KGo56S644GZ44KL5pyA5aSn44Gu5pWw44Gu5oyH5a6aICovXG4gIG1heEl0ZW1zPzogbnVtYmVyO1xuXG4gIGNoaWxkcmVuOiBhbnk7XG59XG5cbmludGVyZmFjZSBTdGF0ZSB7XG4gIHN0YXJ0OiBudW1iZXI7XG4gIGN1cnJlbnQ/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhYnMgZXh0ZW5kcyBDb21wb25lbnQ8UHJvcHM+IHtcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBtYXhJdGVtczogNSxcbiAgfVxuXG4gIHN0YXRpYyBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMocHJvcHM6IFByb3BzLCBzdGF0ZTogU3RhdGUpIHtcbiAgICBsZXQgYWN0aXZlSW5kZXg7XG4gICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHByb3BzLmNoaWxkcmVuLmxlbmd0aDsgaSA8IGxlbjsgaSArPSAxKSB7XG4gICAgICBjb25zdCBjaGlsZCA9IHByb3BzLmNoaWxkcmVuW2ldO1xuICAgICAgaWYgKGNoaWxkLnByb3BzLmFjdGl2ZSkge1xuICAgICAgICBhY3RpdmVJbmRleCA9IGk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAuLi5zdGF0ZSxcbiAgICAgIGN1cnJlbnQ6IGFjdGl2ZUluZGV4LFxuICAgIH07XG4gIH1cblxuICBzdGF0aWMgSXRlbSA9IFRhYkl0ZW07XG5cbiAgc3RhdGUgPSB7IHN0YXJ0OiAwLCBjdXJyZW50OiBudWxsIH07XG5cbiAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKHByb3BzOiBQcm9wcywgc3RhdGU6IFN0YXRlKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGUuc3RhcnQgIT09IHN0YXRlLnN0YXJ0IHx8XG4gICAgICB0aGlzLnN0YXRlLmN1cnJlbnQgIT09IHN0YXRlLmN1cnJlbnQ7XG4gIH1cblxuICBvbk5leHQgPSAoKSA9PiB7XG4gICAgY29uc3QgdGhyZXNob2xkID0gdGhpcy5wcm9wcy5tYXhJdGVtcyE7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLnN0YXRlLnN0YXJ0ICsgdGhyZXNob2xkO1xuICAgIGNvbnN0IGNvdW50ID0gQ2hpbGRyZW4uY291bnQodGhpcy5wcm9wcy5jaGlsZHJlbilcbiAgICBpZiAodmFsdWUgPCBjb3VudCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHN0YXJ0OiB2YWx1ZSB9KTtcbiAgICB9XG4gIH1cblxuICBvblByZXYgPSAoKSA9PiB7XG4gICAgaWYgKHRoaXMuc3RhdGUuc3RhcnQgPT09IDApIHJldHVybjtcblxuICAgIGNvbnN0IHRocmVzaG9sZCA9IHRoaXMucHJvcHMubWF4SXRlbXMhO1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5zdGF0ZS5zdGFydCAtIHRocmVzaG9sZDtcbiAgICB0aGlzLnNldFN0YXRlKHsgc3RhcnQ6IHZhbHVlIDwgMCA/IDAgOiB2YWx1ZSB9KTtcbiAgfVxuXG4gIGdldEluZGljYXRvclBvc2l0aW9uID0gKCk6IENTU1Byb3BlcnRpZXMgfCB1bmRlZmluZWQgPT4ge1xuICAgIGNvbnN0IHsgY3VycmVudCB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCB7IGNoaWxkcmVuLCBtYXhJdGVtcyB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAoY3VycmVudCA9PT0gbnVsbCB8fCBjdXJyZW50ID09PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWQ7XG4gICAgaWYgKCFjaGlsZHJlbiB8fCAhY2hpbGRyZW4ubGVuZ3RoKSByZXR1cm4gdW5kZWZpbmVkO1xuXG4gICAgY29uc3QgdG90YWwgPSBjaGlsZHJlbi5sZW5ndGggPiBtYXhJdGVtcyEgPyBtYXhJdGVtcyA6IGNoaWxkcmVuLmxlbmd0aDtcbiAgICBjb25zdCB2YWx1ZSA9IChjdXJyZW50ICogMTAwKSArICclJztcblxuICAgIHJldHVybiB7XG4gICAgICB2aXNpYmlsaXR5OiAndmlzaWJsZScsXG4gICAgICB3aWR0aDogYCR7TWF0aC5yb3VuZCgoMTAwIC8gdG90YWwpKX0lYCxcbiAgICAgIHRyYW5zZm9ybTogYHRyYW5zbGF0ZVgoJHt2YWx1ZX0pYFxuICAgIH07XG4gIH1cblxuICAvLyBUT0RPOiBtYWtlIHRhYiBzY3JvbGxhYmxlIHZpYSBhcnJvdyBpY29uc1xuICByZW5kZXJDaGlsZHJlbiA9IChjaGlsZDogUmVhY3QuUmVhY3RDaGlsZCwgaW5kZXg6IG51bWJlcikgPT4ge1xuICAgIGlmICh0aGlzLnN0YXRlLnN0YXJ0ID4gaW5kZXgpIHJldHVybiBudWxsO1xuICAgIGlmICh0aGlzLnN0YXRlLnN0YXJ0ICsgaW5kZXggPj0gdGhpcy5wcm9wcy5tYXhJdGVtcyEpIHJldHVybiBudWxsO1xuICAgIGlmICh0eXBlb2YgY2hpbGQgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiBjaGlsZCA9PT0gJ251bWJlcicpIHJldHVybiBudWxsO1xuXG4gICAgcmV0dXJuIDxUYWJJdGVtIHsuLi5jaGlsZC5wcm9wc30gYWxpZ249e3RoaXMucHJvcHMuYWxpZ259IC8+O1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY2hpbGRyZW4sIGFsaWduLCBjb2xvciwgbWF4SXRlbXMgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBzdGFydCB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCB0b3RhbCA9IGNoaWxkcmVuID8gY2hpbGRyZW4ubGVuZ3RoIDogMDtcbiAgICBjb25zdCBzdHlsZSA9IHRoaXMuZ2V0SW5kaWNhdG9yUG9zaXRpb24oKTtcbiAgICByZXR1cm4gKFxuICAgICAgPFdyYXBwZXIgYWxpZ249e2FsaWdufT5cbiAgICAgICAge3N0YXJ0ID4gbWF4SXRlbXMhICYmICg8QnV0dG9uIGNvbG9yPVwidGV4dFwiPnsnPCd9PC9CdXR0b24+KX1cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWItY29udGVudFwiPlxuICAgICAgICAgIHtDaGlsZHJlbi5tYXAoY2hpbGRyZW4sIHRoaXMucmVuZGVyQ2hpbGRyZW4pfVxuICAgICAgICAgIDxJbmRpY2F0b3IgY29sb3I9e2NvbG9yfSBzdHlsZT17c3R5bGV9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7dG90YWwgPiBtYXhJdGVtcyEgJiYgc3RhcnQgPiBtYXhJdGVtcyEgJiYgKDxCdXR0b24gY29sb3I9XCJ0ZXh0XCI+eyc+J308L0J1dHRvbj4pfVxuICAgICAgPC9XcmFwcGVyPlxuICAgICk7XG4gIH1cbn07XG4iLCJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCwgSFRNTEF0dHJpYnV0ZXMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBDU1NUcmFuc2l0aW9uIGZyb20gJ3JlYWN0LXRyYW5zaXRpb24tZ3JvdXAvQ1NTVHJhbnNpdGlvbic7XG5pbXBvcnQgeyBDb2xvclR5cGUsIENTU1R5cGUgfSBmcm9tICcuLi8uLi90eXBlcyc7XG5cbmludGVyZmFjZSBMb2FkaW5nUHJvcHMgZXh0ZW5kcyBIVE1MQXR0cmlidXRlczxIVE1MRGl2RWxlbWVudD4ge1xuICAvKiogdHJ1ZeOBruWgtOWQiOmWi+Wni+OBl+OBvuOBmSAqL1xuICBsb2FkaW5nOiBib29sZWFuO1xuICAvKiog44OQ44O844Gu6Imy44Gu5oyH5a6aICovXG4gIGNvbG9yPzogQ29sb3JUeXBlO1xuICAvKiog44OQ44O844GuQ1NTIHBvc2l0aW9u44Gu5oyH5a6aICovXG4gIHBvc2l0aW9uPzogJ2Fic29sdXRlJyB8ICdmaXhlZCcgfCAnc3RpY2t5JztcbiAgLyoqIOODkOODvOOBruiDjOaZr+OBruiJsuOBruiHqueUseaMh+WumiAqL1xuICBiYWNrZ3JvdW5kPzogc3RyaW5nO1xuICAvKiog44OQ44O844Gu57im5bmF44Gu5a6a576pICovXG4gIHNpemU/OiBzdHJpbmc7XG4gIC8qKiDjg5Djg7zjga7jgqLjg4vjg6Hjg7zjgrfjg6fjg7Pjga5kdXJhdGlvbuaMh+WumiAo5Y2Y5L2N77yabXMpICovXG4gIGR1cmF0aW9uPzogbnVtYmVyO1xuICBjc3M/OiBDU1NUeXBlO1xufVxuXG5jb25zdCBXcmFwcGVyID0gc3R5bGVkLmRpdjxMb2FkaW5nUHJvcHM+YFxuICBwb3NpdGlvbjogJHsoeyBwb3NpdGlvbiB9KSA9PiBwb3NpdGlvbn07XG4gIGJhY2tncm91bmQtY29sb3I6ICR7KHsgYmFja2dyb3VuZCB9KSA9PiBiYWNrZ3JvdW5kfTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcblxuICAubG9hZGluZy1iYXIge1xuICAgIGhlaWdodDogJHsoeyBzaXplIH0pID0+IHNpemV9O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR7KHsgY29sb3IsIHRoZW1lIH0pID0+IHRoZW1lW2NvbG9yIV19O1xuXG4gICAgd2lsbC1jaGFuZ2U6IHdpZHRoLCBvcGFjaXR5O1xuICAgIHotaW5kZXg6IDEwMDAwMDA7XG5cbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiB3aWR0aCwgb3BhY2l0eTtcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAkeyh7IGR1cmF0aW9uIH0pID0+IGR1cmF0aW9ufW1zO1xuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XG5cbiAgICAmLmxvYWQtZW50ZXIge1xuICAgICAgd2lkdGg6IDA7XG4gICAgfVxuXG4gICAgJi5sb2FkLWVudGVyLWRvbmUge1xuICAgICAgd2lkdGg6IDg1JTtcbiAgICB9XG5cbiAgICAmLmxvYWQtZXhpdCB7XG4gICAgICB3aWR0aDogODUlO1xuICAgIH1cblxuICAgICYubG9hZC1leGl0LWFjdGl2ZSB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuICB9XG5cbiAgJHsoeyBjc3MgfSkgPT4gY3NzIHx8IHt9fVxuYDtcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2FkaW5nQmFyIGV4dGVuZHMgUHVyZUNvbXBvbmVudDxMb2FkaW5nUHJvcHM+IHtcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICBjb2xvcjogJ3ByaW1hcnknLFxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIGJhY2tncm91bmQ6ICd0cmFuc3BhcmVudCcsXG4gICAgc2l6ZTogJzNweCcsXG4gICAgZHVyYXRpb246IDE1MCxcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPFdyYXBwZXIgey4uLnRoaXMucHJvcHN9PlxuICAgICAgICA8Q1NTVHJhbnNpdGlvblxuICAgICAgICAgIGNsYXNzTmFtZXM9XCJsb2FkXCJcbiAgICAgICAgICB0aW1lb3V0PXt0aGlzLnByb3BzLmR1cmF0aW9uIX1cbiAgICAgICAgICBpbj17dGhpcy5wcm9wcy5sb2FkaW5nfVxuICAgICAgICAgIHVubW91bnRPbkV4aXRcbiAgICAgICAgPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9hZGluZy1iYXJcIiAvPlxuICAgICAgICA8L0NTU1RyYW5zaXRpb24+XG4gICAgICA8L1dyYXBwZXI+XG4gICAgKTtcbiAgfVxufVxuIiwiaW1wb3J0IFJlYWN0LCB7IEhUTUxBdHRyaWJ1dGVzIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCwgeyBjc3MsIGtleWZyYW1lcyB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7IENvbG9yVHlwZSwgVGhlbWVUeXBlIH0gZnJvbSAnLi4vLi4vdHlwZXMnO1xuXG5pbnRlcmZhY2UgUHJvcHMgZXh0ZW5kcyBIVE1MQXR0cmlidXRlczxIVE1MRGl2RWxlbWVudD57XG4gIC8qKiDoibLjga7mjIflrpogKi9cbiAgY29sb3I/OiBDb2xvclR5cGU7XG4gIC8qKiDmqKrluYUgKi9cbiAgd2lkdGg/OiBzdHJpbmc7XG4gIC8qKiDnuKbluYUgKi9cbiAgaGVpZ2h0Pzogc3RyaW5nO1xuICAvKiogc3Bpbm5lcuOBruWkquOBlSAqL1xuICBib3JkZXJTaXplPzogc3RyaW5nO1xufVxuXG5mdW5jdGlvbiBnZXRDb2xvcih7IHRoZW1lLCBjb2xvciB9OiB7IHRoZW1lOiBUaGVtZVR5cGUsIGNvbG9yPzogQ29sb3JUeXBlIH0pIHtcbiAgY29uc3QgdmFsdWUgPSAoIWNvbG9yIHx8IGNvbG9yID09PSAnbGlnaHQnKSA/IHRoZW1lLmJhY2tncm91bmQgOiB0aGVtZVtjb2xvcl07XG5cbiAgcmV0dXJuIGNzc2BcbiAgICBib3JkZXItY29sb3I6ICR7dmFsdWV9O1xuICAgIGJvcmRlci1yaWdodC1jb2xvcjogJHt0aGVtZS5ib3JkZXJ9O1xuICAgIGJvcmRlci10b3AtY29sb3I6ICR7dGhlbWUuYm9yZGVyfTtcbiAgYDtcbn1cblxuY29uc3Qgc3BpbiA9IGtleWZyYW1lc2BcbiAgZnJvbSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIH1cbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM1OWRlZyk7XG4gIH1cbmA7XG5cbmNvbnN0IFNwaW5uZXIgPSBzdHlsZWQuZGl2PFByb3BzPmBcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogJHsoeyB3aWR0aCB9KSA9PiB3aWR0aCA/IHdpZHRoIDogJzEwMCUnfTtcbiAgaGVpZ2h0OiAkeyh7IGhlaWdodCB9KSA9PiBoZWlnaHQgPyBoZWlnaHQgOiAnMTAwJSd9O1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAmOmFmdGVyIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICBhbmltYXRpb246ICR7c3Bpbn0gNzUwbXMgaW5maW5pdGUgbGluZWFyO1xuICAgIGJvcmRlcjogJHsoeyBib3JkZXJTaXplIH0pID0+IGJvcmRlclNpemV9IHNvbGlkO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgJHtnZXRDb2xvcn1cbiAgICBjb250ZW50OiBcIlwiO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIH1cbmA7XG5TcGlubmVyLmRpc3BsYXlOYW1lID0gJ1NwaW5uZXInO1xuU3Bpbm5lci5kZWZhdWx0UHJvcHMgPSB7XG4gIGJvcmRlclNpemU6ICcycHgnLFxufVxuXG5leHBvcnQgZGVmYXVsdCBTcGlubmVyO1xuIiwiLy8gZ3JpZCAmIGxheW91dFxuZXhwb3J0IHsgZGVmYXVsdCBhcyBCcmVhayB9IGZyb20gJy4vR3JpZC9CcmVhayc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIENvbnRhaW5lciB9IGZyb20gJy4vR3JpZC9Db250YWluZXInO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBSb3cgfSBmcm9tICcuL0dyaWQvUm93JztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQ29sIH0gZnJvbSAnLi9HcmlkL0NvbCc7XG5cblxuLy8gY29tbW9uXG5leHBvcnQgeyBkZWZhdWx0IGFzIENvbnRlbnQgfSBmcm9tICcuL0NvbnRlbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9Db250ZW50JztcblxuZXhwb3J0IHsgZGVmYXVsdCBhcyBCdXR0b24gfSBmcm9tICcuL0J1dHRvbic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEJ1dHRvbkdyb3VwIH0gZnJvbSAnLi9CdXR0b24vQnV0dG9uR3JvdXAnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBUYWJsZSB9IGZyb20gJy4vVGFibGUnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBCb3ggfSBmcm9tICcuL0JveCc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFByb2dyZXNzIH0gZnJvbSAnLi9Qcm9ncmVzcyc7XG5cbi8vIGZvcm1cbmV4cG9ydCAqIGZyb20gJy4vRm9ybSc7XG5cbi8vIGNvbXBvbmVudHNcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQXBwQmFyIH0gZnJvbSAnLi9BcHBCYXInO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBUYWcgfSBmcm9tICcuL1RhZyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEhlcm8gfSBmcm9tICcuL0hlcm8nO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBUb29sdGlwIH0gZnJvbSAnLi9Ub29sdGlwJztcbmV4cG9ydCAqIGZyb20gJy4vU2lkZU1lbnUnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBDYXJkIH0gZnJvbSAnLi9DYXJkJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgUG9wb3ZlciB9IGZyb20gJy4vUG9wb3Zlcic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIE1vZGFsIH0gZnJvbSAnLi9Nb2RhbCc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFRvYXN0IH0gZnJvbSAnLi9Ub2FzdCc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFRhYnMgfSBmcm9tICcuL1RhYnMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBMb2FkaW5nQmFyIH0gZnJvbSAnLi9Mb2FkaW5nL0Jhcic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFNwaW5uZXIgfSBmcm9tICcuL0xvYWRpbmcvU3Bpbm5lcic7XG4iLCJpbXBvcnQgeyBUaGVtZVR5cGUgfSBmcm9tIFwiLi4vdHlwZXNcIjtcblxuY29uc3QgdGhlbWU6IFRoZW1lVHlwZSA9IHtcbiAgZm9udEZhbWlseTogJ+ODkuODqeOCruODjuinkuOCtOOCt+ODg+OCryxcIuODkuODqeOCruODjuinkuOCtCBQcm9OIFczXCIs44Oh44Kk44Oq44KqLE1laXJ5byxcIu+8re+8syDvvLDjgrTjgrfjg4Pjgq9cIixcIk1TIFBHb3RoaWNcIixzYW5zLXNlcmlmJyxcbiAgZm9udFNpemU6ICcxNnB4JyxcblxuICByZXNwb25zaXZlOiB0cnVlLFxuICBndXR0ZXI6IDI0LFxuICBzbWFsbEd1dHRlcjogMTYsXG4gIGJveFNoYWRvdzogJzAgMXB4IDJweCAwIHJnYmEoMCwgMCwgMCwgMC4wNSknLFxuXG4gIG1vYmlsZTogNTc2LFxuICB0YWJsZXQ6IDc2OSxcbiAgZGVza3RvcDogOTYwLFxuICBmdWxsaGQ6IDEzNDQsXG5cbiAgcmFkaXVzOiA0LFxuXG4gIHByaW1hcnk6ICcjMzdCMTUxJyxcbiAgbGluazogJyM1NzhiYTknLFxuICBpbmZvOiAnIzIwOWNlZScsXG4gIHN1Y2Nlc3M6ICcjMGZhODg2JyxcbiAgd2FybmluZzogJyNmMmI1NDEnLFxuICBkYW5nZXI6ICcjZjM1NzVhJyxcbiAgZGFyazogJyMzNjM2MzYnLFxuICBsaWdodDogJyM5YjliOWInLFxuXG4gIGJsYWNrOiAnIzBhMGEwYScsXG4gIGJsYWNrQmlzOiAnIzEyMTIxMicsXG4gIGJsYWNrVGVyOiAnIzI0MjQyNCcsXG5cbiAgd2hpdGU6ICcjZmZmZmZmJyxcbiAgd2hpdGVCaXM6ICcjZmFmYWZhJyxcbiAgd2hpdGVUZXI6ICcjZjVmNWY1JyxcblxuICBncmV5OiAnIzdhN2E3YScsXG4gIGdyZXlMaWdodDogJyM5YjliOWInLFxuICBncmV5TGlnaHRlcjogJyNkYmRiZGInLFxuXG4gIHRleHQ6ICcjNGE0YTRhJyxcbiAgdGV4dERhcms6ICcjNGE0YTRhJyxcbiAgdGV4dExpZ2h0OiAnIzdhN2E3YScsXG4gIHRleHRTdHJvbmc6ICcjNGE0YTRhJyxcblxuICBiYWNrZ3JvdW5kOiAnI2Y1ZjVmNScsXG5cbiAgYm9yZGVyOiAnI2RiZGJkYicsXG4gIGJvcmRlckhvdmVyOiAnIzliOWI5YicsXG4gIGJvcmRlckFjdGl2ZTogJyM0YTRhNGEnLFxuXG4gIHBsYWNlaG9sZGVyOiAnIzdhN2E3YScsXG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IHRoZW1lO1xuIiwiaW1wb3J0IHsgY3NzIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG4vKiEgYmFzZWQgb24gbm9ybWFsaXplLmNzcyB2OC4wLjAgfCBNSVQgTGljZW5zZSB8IGdpdGh1Yi5jb20vbmVjb2xhcy9ub3JtYWxpemUuY3NzICovXG5jb25zdCBub3JtYWxpemVkOiBhbnkgPSBjc3NgXG4gICosIDo6YWZ0ZXIsIDo6YmVmb3JlIHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB9XG5cbiAgaHRtbCB7XG4gICAgbGluZS1oZWlnaHQ6IDEuMTU7XG4gICAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO1xuICAgIC1tcy1vdmVyZmxvdy1zdHlsZTogc2Nyb2xsYmFyO1xuICB9XG5cbiAgYm9keSB7XG4gICAgbWFyZ2luOiAwO1xuICAgIGZvbnQtZmFtaWx5OiAkeyh7IHRoZW1lIH06IGFueSkgPT4gdGhlbWUgPyB0aGVtZS5mb250RmFtaWx5IDogJ1wiSGlyYWdpbm8gU2Fuc1wiLCDjg5Ljg6njgq7jg47op5LjgrTjgrfjg4Pjgq8sIFwiSGlyYWdpbm8gS2FrdSBHb3RoaWMgUHJvTlwiLCBcIuODkuODqeOCruODjuinkuOCtCBQcm9OIFczXCIsIOa4uOOCtOOCt+ODg+OCr+S9kywgXCJZdSBHb3RoaWNcIiwgWXVHb3RoaWMsIFwi44OS44Op44Ku44OO6KeS44K044K344OD44KvIFByb1wiLCBIaXJhS2FrdVByby1XMywgXCJIaXJhZ2lubyBLYWt1IEdvdGhpYyBQcm9cIiwgUXVpY2tzYW5kLCDjg6HjgqTjg6rjgqosIE1laXJ5bywgT3Nha2EsIFwi77yt77yzIO+8sOOCtOOCt+ODg+OCr1wiLCBcIk1TIFBHb3RoaWNcIiwgc2Fucy1zZXJpZid9OztcbiAgICBmb250LXNpemU6ICR7KHsgdGhlbWUgfTogYW55KSA9PiB0aGVtZSA/IHRoZW1lLmZvbnRTaXplIDogJzE2cHgnfTtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB9XG5cbiAgaDEge1xuICAgIGZvbnQtc2l6ZTogMmVtO1xuICAgIG1hcmdpbjogLjY3ZW0gMDtcbiAgfVxuXG4gIGhyIHtcbiAgICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcbiAgICBoZWlnaHQ6IDA7XG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XG4gIH1cblxuICBwcmUge1xuICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsbW9ub3NwYWNlO1xuICAgIGZvbnQtc2l6ZTogMWVtO1xuICB9XG5cbiAgYSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgY29sb3I6ICR7KHsgdGhlbWUgfTogYW55KSA9PiB0aGVtZS5saW5rfTtcbiAgfVxuXG4gIGFiYnJbdGl0bGVdIHtcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGRvdHRlZDtcbiAgfVxuXG4gIGIsc3Ryb25nIHtcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xuICB9XG5cbiAgY29kZSxrYmQsc2FtcCB7XG4gICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSxtb25vc3BhY2U7XG4gICAgZm9udC1zaXplOiAxZW07XG4gIH1cblxuICBzbWFsbCB7XG4gICAgZm9udC1zaXplOiA4MCU7XG4gIH1cblxuICBzdWIsc3VwIHtcbiAgICBmb250LXNpemU6IDc1JTtcbiAgICBsaW5lLWhlaWdodDogMDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xuICB9XG5cbiAgc3ViIHtcbiAgICBib3R0b206IC0uMjVlbTtcbiAgfVxuXG4gIHN1cCB7XG4gICAgdG9wOiAtLjVlbTtcbiAgfVxuXG4gIGltZyB7XG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xuICB9XG5cbiAgYnV0dG9uLGlucHV0LG9wdGdyb3VwLHNlbGVjdCx0ZXh0YXJlYSB7XG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gICAgZm9udC1zaXplOiAxMDAlO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjE1O1xuICAgIG1hcmdpbjogMDtcbiAgfVxuXG4gIGJ1dHRvbixpbnB1dCB7XG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XG4gIH1cblxuICBidXR0b24sc2VsZWN0IHtcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgfVxuXG4gIFt0eXBlPWJ1dHRvbl0sW3R5cGU9cmVzZXRdLFt0eXBlPXN1Ym1pdF0sYnV0dG9uIHtcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjtcbiAgfVxuXG4gIFt0eXBlPWJ1dHRvbl06Oi1tb3otZm9jdXMtaW5uZXIsW3R5cGU9cmVzZXRdOjotbW96LWZvY3VzLWlubmVyLFt0eXBlPXN1Ym1pdF06Oi1tb3otZm9jdXMtaW5uZXIsYnV0dG9uOjotbW96LWZvY3VzLWlubmVyIHtcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XG4gICAgcGFkZGluZzogMDtcbiAgfVxuXG4gIFt0eXBlPWJ1dHRvbl06LW1vei1mb2N1c3JpbmcsW3R5cGU9cmVzZXRdOi1tb3otZm9jdXNyaW5nLFt0eXBlPXN1Ym1pdF06LW1vei1mb2N1c3JpbmcsYnV0dG9uOi1tb3otZm9jdXNyaW5nIHtcbiAgICBvdXRsaW5lOiAxcHggZG90dGVkIEJ1dHRvblRleHQ7XG4gIH1cblxuICBpbnB1dFt0eXBlPWRhdGVdLFxuICBpbnB1dFt0eXBlPXRpbWVdLFxuICBpbnB1dFt0eXBlPWRhdGV0aW1lLWxvY2FsXSxcbiAgaW5wdXRbdHlwZT1tb250aF0ge1xuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbGlzdGJveDtcbiAgfVxuXG4gIGZpZWxkc2V0IHtcbiAgICBwYWRkaW5nOiAuMzVlbSAuNzVlbSAuNjI1ZW07XG4gIH1cblxuICBsZWdlbmQge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgY29sb3I6IGluaGVyaXQ7XG4gICAgZGlzcGxheTogdGFibGU7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgfVxuXG4gIHByb2dyZXNzIHtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG4gICAgcmVzaXplOiB2ZXJ0aWNhbDtcbiAgfVxuXG4gIHRleHRhcmVhIHtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgfVxuXG4gIFt0eXBlPWNoZWNrYm94XSxbdHlwZT1yYWRpb10ge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgcGFkZGluZzogMDtcbiAgfVxuXG4gIFt0eXBlPW51bWJlcl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sW3R5cGU9bnVtYmVyXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICB9XG5cbiAgW3R5cGU9c2VhcmNoXSB7XG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7XG4gICAgb3V0bGluZS1vZmZzZXQ6IC0ycHg7XG4gIH1cblxuICBbdHlwZT1zZWFyY2hdOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uIHtcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIH1cblxuICA6Oi13ZWJraXQtZmlsZS11cGxvYWQtYnV0dG9uIHtcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjtcbiAgICBmb250OiBpbmhlcml0O1xuICB9XG5cbiAgZGV0YWlscyB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cblxuICBzdW1tYXJ5IHtcbiAgICBkaXNwbGF5OiBsaXN0LWl0ZW07XG4gIH1cblxuICB0ZW1wbGF0ZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIFtoaWRkZW5dIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgYmxvY2txdW90ZSwgYm9keSwgZGQsIGRsLCBkdCwgZmllbGRzZXQsIGZpZ3VyZSwgaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgaHIsIGh0bWwsIGlmcmFtZSwgbGVnZW5kLCBsaSwgb2wsIHAsIHByZSwgdGV4dGFyZWEsIHVsIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgfVxuXG4gIGJ1dHRvbiB7XG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xuICB9XG5cbiAgYXJ0aWNsZSwgYXNpZGUsIGZpZ3VyZSxcbiAgZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgc2VjdGlvbiB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cblxuICBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0sIGlucHV0W3R5cGU9XCJyYWRpb1wiXSB7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG5cbiAgYSB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjb2xvcjogIzMyNzNkYztcblxuICAgICY6aG92ZXIge1xuICAgICAgY29sb3I6IGN1cnJlbnRDb2xvcjtcbiAgICB9XG4gIH1cblxuICBpbWcge1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xuICB9XG5cbiAgc3ZnIHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIH1cblxuICBzbWFsbCB7XG4gICAgZm9udC1zaXplOiAuODc1ZW07XG4gIH1cblxuICBzcGFuIHtcbiAgICBmb250LXN0eWxlOiBpbmhlcml0O1xuICAgIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xuICB9XG5cbiAgc3Ryb25nIHtcbiAgICBjb2xvcjogIzM2MzYzNjtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICB9XG5cbiAgdGFibGUge1xuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gICAgYm9yZGVyLXNwYWNpbmc6IDA7XG4gIH1cblxuICB0aCB7XG4gICAgdGV4dC1hbGlnbjogaW5oZXJpdDtcbiAgfVxuXG4gIHVsIHtcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIH1cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IG5vcm1hbGl6ZWQ7XG4iXSwibmFtZXMiOlsiQnJlYWsiLCJSZWFjdCIsIndpZHRoIiwiaGVpZ2h0IiwibWVkaWFNb2JpbGUiLCJ0aGVtZSIsInJlc3BvbnNpdmUiLCJtb2JpbGUiLCJtZWRpYVRhYmxldCIsInRhYmxldCIsIm1lZGlhRGVza3RvcCIsImRlc2t0b3AiLCJtZWRpYUZ1bGxIRCIsImZ1bGxoZCIsIm1lZGlhVW50aWxGdWxsSEQiLCJzZXRSZXNwb25zaXZlIiwiZmx1aWQiLCJjc3MiLCJzbWFsbEd1dHRlciIsImd1dHRlciIsIkNvbnRhaW5lciIsInN0eWxlZCIsImRpdiIsImRpc3BsYXlOYW1lIiwiZGVmYXVsdFByb3BzIiwicGFyY2VudGFnZSIsInZhbHVlIiwiTWF0aCIsImNlaWwiLCJyZW5kZXJTaXplIiwic2l6ZSIsIm5hcnJvdyIsImF1dG8iLCJvZmZzZXQiLCJvZmZWYWwiLCJhdXRvU2l6ZSIsIkNvbCIsInJlbmRlckd1dHRlciIsIm5vR3V0dGVyIiwiUm93IiwidmNlbnRlciIsImNlbnRlciIsIlByZSIsInByZSIsIkNvZGUiLCJjb2RlIiwiYmFja2dyb3VuZCIsImRhbmdlciIsIkgxIiwiaDEiLCJib3JkZXIiLCJDb250ZW50IiwidGV4dCIsImV4cG9ydHMiLCJjdXJyeSIsImN1cnJpZWQiLCJmIiwibGVuZ3RoIiwiYWNjIiwiZm4iLCJjb21iaW5lZCIsImNvbmNhdCIsIkFycmF5IiwicHJvdG90eXBlIiwic2xpY2UiLCJjYWxsIiwiYXJndW1lbnRzIiwiYXBwbHkiLCJtb2R1bGUiLCJkZWZhdWx0IiwiZ3VhcmQiLCJsb3dlckJvdW5kYXJ5IiwidXBwZXJCb3VuZGFyeSIsIm1heCIsIm1pbiIsIl9kZWZhdWx0IiwiY29sb3JUb0ludCIsImNvbG9yIiwicm91bmQiLCJjb252ZXJ0VG9JbnQiLCJyZWQiLCJncmVlbiIsImJsdWUiLCJoc2xUb1JnYiIsImh1ZSIsInNhdHVyYXRpb24iLCJsaWdodG5lc3MiLCJjb252ZXJ0IiwiaHVlUHJpbWUiLCJjaHJvbWEiLCJhYnMiLCJzZWNvbmRDb21wb25lbnQiLCJsaWdodG5lc3NNb2RpZmljYXRpb24iLCJmaW5hbFJlZCIsImZpbmFsR3JlZW4iLCJmaW5hbEJsdWUiLCJuYW1lZENvbG9yTWFwIiwiYWxpY2VibHVlIiwiYW50aXF1ZXdoaXRlIiwiYXF1YSIsImFxdWFtYXJpbmUiLCJhenVyZSIsImJlaWdlIiwiYmlzcXVlIiwiYmxhY2siLCJibGFuY2hlZGFsbW9uZCIsImJsdWV2aW9sZXQiLCJicm93biIsImJ1cmx5d29vZCIsImNhZGV0Ymx1ZSIsImNoYXJ0cmV1c2UiLCJjaG9jb2xhdGUiLCJjb3JhbCIsImNvcm5mbG93ZXJibHVlIiwiY29ybnNpbGsiLCJjcmltc29uIiwiY3lhbiIsImRhcmtibHVlIiwiZGFya2N5YW4iLCJkYXJrZ29sZGVucm9kIiwiZGFya2dyYXkiLCJkYXJrZ3JlZW4iLCJkYXJrZ3JleSIsImRhcmtraGFraSIsImRhcmttYWdlbnRhIiwiZGFya29saXZlZ3JlZW4iLCJkYXJrb3JhbmdlIiwiZGFya29yY2hpZCIsImRhcmtyZWQiLCJkYXJrc2FsbW9uIiwiZGFya3NlYWdyZWVuIiwiZGFya3NsYXRlYmx1ZSIsImRhcmtzbGF0ZWdyYXkiLCJkYXJrc2xhdGVncmV5IiwiZGFya3R1cnF1b2lzZSIsImRhcmt2aW9sZXQiLCJkZWVwcGluayIsImRlZXBza3libHVlIiwiZGltZ3JheSIsImRpbWdyZXkiLCJkb2RnZXJibHVlIiwiZmlyZWJyaWNrIiwiZmxvcmFsd2hpdGUiLCJmb3Jlc3RncmVlbiIsImZ1Y2hzaWEiLCJnYWluc2Jvcm8iLCJnaG9zdHdoaXRlIiwiZ29sZCIsImdvbGRlbnJvZCIsImdyYXkiLCJncmVlbnllbGxvdyIsImdyZXkiLCJob25leWRldyIsImhvdHBpbmsiLCJpbmRpYW5yZWQiLCJpbmRpZ28iLCJpdm9yeSIsImtoYWtpIiwibGF2ZW5kZXIiLCJsYXZlbmRlcmJsdXNoIiwibGF3bmdyZWVuIiwibGVtb25jaGlmZm9uIiwibGlnaHRibHVlIiwibGlnaHRjb3JhbCIsImxpZ2h0Y3lhbiIsImxpZ2h0Z29sZGVucm9keWVsbG93IiwibGlnaHRncmF5IiwibGlnaHRncmVlbiIsImxpZ2h0Z3JleSIsImxpZ2h0cGluayIsImxpZ2h0c2FsbW9uIiwibGlnaHRzZWFncmVlbiIsImxpZ2h0c2t5Ymx1ZSIsImxpZ2h0c2xhdGVncmF5IiwibGlnaHRzbGF0ZWdyZXkiLCJsaWdodHN0ZWVsYmx1ZSIsImxpZ2h0eWVsbG93IiwibGltZSIsImxpbWVncmVlbiIsImxpbmVuIiwibWFnZW50YSIsIm1hcm9vbiIsIm1lZGl1bWFxdWFtYXJpbmUiLCJtZWRpdW1ibHVlIiwibWVkaXVtb3JjaGlkIiwibWVkaXVtcHVycGxlIiwibWVkaXVtc2VhZ3JlZW4iLCJtZWRpdW1zbGF0ZWJsdWUiLCJtZWRpdW1zcHJpbmdncmVlbiIsIm1lZGl1bXR1cnF1b2lzZSIsIm1lZGl1bXZpb2xldHJlZCIsIm1pZG5pZ2h0Ymx1ZSIsIm1pbnRjcmVhbSIsIm1pc3R5cm9zZSIsIm1vY2Nhc2luIiwibmF2YWpvd2hpdGUiLCJuYXZ5Iiwib2xkbGFjZSIsIm9saXZlIiwib2xpdmVkcmFiIiwib3JhbmdlIiwib3JhbmdlcmVkIiwib3JjaGlkIiwicGFsZWdvbGRlbnJvZCIsInBhbGVncmVlbiIsInBhbGV0dXJxdW9pc2UiLCJwYWxldmlvbGV0cmVkIiwicGFwYXlhd2hpcCIsInBlYWNocHVmZiIsInBlcnUiLCJwaW5rIiwicGx1bSIsInBvd2RlcmJsdWUiLCJwdXJwbGUiLCJyZWJlY2NhcHVycGxlIiwicm9zeWJyb3duIiwicm95YWxibHVlIiwic2FkZGxlYnJvd24iLCJzYWxtb24iLCJzYW5keWJyb3duIiwic2VhZ3JlZW4iLCJzZWFzaGVsbCIsInNpZW5uYSIsInNpbHZlciIsInNreWJsdWUiLCJzbGF0ZWJsdWUiLCJzbGF0ZWdyYXkiLCJzbGF0ZWdyZXkiLCJzbm93Iiwic3ByaW5nZ3JlZW4iLCJzdGVlbGJsdWUiLCJ0YW4iLCJ0ZWFsIiwidGhpc3RsZSIsInRvbWF0byIsInR1cnF1b2lzZSIsInZpb2xldCIsIndoZWF0Iiwid2hpdGUiLCJ3aGl0ZXNtb2tlIiwieWVsbG93IiwieWVsbG93Z3JlZW4iLCJuYW1lVG9IZXgiLCJub3JtYWxpemVkQ29sb3JOYW1lIiwidG9Mb3dlckNhc2UiLCJfYXNzZXJ0VGhpc0luaXRpYWxpemVkIiwic2VsZiIsIlJlZmVyZW5jZUVycm9yIiwiX2luaGVyaXRzTG9vc2UiLCJzdWJDbGFzcyIsInN1cGVyQ2xhc3MiLCJPYmplY3QiLCJjcmVhdGUiLCJjb25zdHJ1Y3RvciIsIl9fcHJvdG9fXyIsIl93cmFwTmF0aXZlU3VwZXIiLCJDbGFzcyIsIl9jYWNoZSIsIk1hcCIsInVuZGVmaW5lZCIsIl9pc05hdGl2ZUZ1bmN0aW9uIiwiVHlwZUVycm9yIiwiaGFzIiwiZ2V0Iiwic2V0IiwiV3JhcHBlciIsIl9jb25zdHJ1Y3QiLCJfZ2V0UHJvdG90eXBlT2YiLCJlbnVtZXJhYmxlIiwid3JpdGFibGUiLCJjb25maWd1cmFibGUiLCJfc2V0UHJvdG90eXBlT2YiLCJpc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QiLCJSZWZsZWN0IiwiY29uc3RydWN0Iiwic2hhbSIsIlByb3h5IiwiRGF0ZSIsInRvU3RyaW5nIiwiZSIsIlBhcmVudCIsImFyZ3MiLCJhIiwicHVzaCIsIkNvbnN0cnVjdG9yIiwiRnVuY3Rpb24iLCJiaW5kIiwiaW5zdGFuY2UiLCJpbmRleE9mIiwibyIsInAiLCJzZXRQcm90b3R5cGVPZiIsImdldFByb3RvdHlwZU9mIiwiRVJST1JTIiwiZm9ybWF0IiwiX2xlbiIsIl9rZXkiLCJiIiwiYyIsImZvckVhY2giLCJkIiwicmVwbGFjZSIsIlBvbGlzaGVkRXJyb3IiLCJfRXJyb3IiLCJfdGhpcyIsInByb2Nlc3MiLCJlbnYiLCJOT0RFX0VOViIsIl9sZW4yIiwiX2tleTIiLCJFcnJvciIsIl9oc2xUb1JnYiIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJyZXF1aXJlJCQwIiwiX25hbWVUb0hleCIsInJlcXVpcmUkJDEiLCJfZXJyb3JzIiwicmVxdWlyZSQkMiIsIm9iaiIsIl9fZXNNb2R1bGUiLCJoZXhSZWdleCIsImhleFJnYmFSZWdleCIsInJlZHVjZWRIZXhSZWdleCIsInJlZHVjZWRSZ2JhSGV4UmVnZXgiLCJyZ2JSZWdleCIsInJnYmFSZWdleCIsImhzbFJlZ2V4IiwiaHNsYVJlZ2V4IiwicGFyc2VUb1JnYiIsIm5vcm1hbGl6ZWRDb2xvciIsIm1hdGNoIiwicGFyc2VJbnQiLCJhbHBoYSIsInBhcnNlRmxvYXQiLCJ0b0ZpeGVkIiwiX2FscGhhIiwicmdiTWF0Y2hlZCIsImV4ZWMiLCJyZ2JhTWF0Y2hlZCIsImhzbE1hdGNoZWQiLCJyZ2JDb2xvclN0cmluZyIsImhzbFJnYk1hdGNoZWQiLCJoc2xhTWF0Y2hlZCIsIl9odWUiLCJfc2F0dXJhdGlvbiIsIl9saWdodG5lc3MiLCJfcmdiQ29sb3JTdHJpbmciLCJfaHNsUmdiTWF0Y2hlZCIsInJnYlRvSHNsIiwiZGVsdGEiLCJfcGFyc2VUb1JnYiIsIl9yZ2JUb0hzbCIsInBhcnNlVG9Ic2wiLCJyZWR1Y2VIZXhWYWx1ZSIsIm51bWJlclRvSGV4IiwiaGV4IiwiX3JlZHVjZUhleFZhbHVlIiwiX251bWJlclRvSGV4IiwiY29sb3JUb0hleCIsImNvbnZlcnRUb0hleCIsImhzbFRvSGV4IiwiX2hzbFRvSGV4IiwiaHNsIiwiaHNsYSIsInJnYiIsIl9yZ2IiLCJyZ2JhIiwiZmlyc3RWYWx1ZSIsInNlY29uZFZhbHVlIiwidGhpcmRWYWx1ZSIsImZvdXJ0aFZhbHVlIiwicmdiVmFsdWUiLCJfaHNsIiwiX2hzbGEiLCJfcmdiYSIsInJlcXVpcmUkJDMiLCJyZXF1aXJlJCQ0IiwiaXNSZ2IiLCJpc1JnYmEiLCJpc0hzbCIsImlzSHNsYSIsInRvQ29sb3JTdHJpbmciLCJfY3VycnkiLCJfZ3VhcmQiLCJfcGFyc2VUb0hzbCIsIl90b0NvbG9yU3RyaW5nIiwiX2V4dGVuZHMiLCJhc3NpZ24iLCJ0YXJnZXQiLCJpIiwic291cmNlIiwia2V5IiwiaGFzT3duUHJvcGVydHkiLCJkYXJrZW4iLCJhbW91bnQiLCJoc2xDb2xvciIsImN1cnJpZWREYXJrZW4iLCJnZXRMdW1pbmFuY2UiLCJyZ2JDb2xvciIsIl9PYmplY3Qka2V5cyRtYXAiLCJrZXlzIiwibWFwIiwiY2hhbm5lbCIsInBvdyIsInIiLCJnIiwiZmluZENvbG9ySW52ZXJ0IiwidHJhbnNwYXJlbnRpemUiLCJwYXJzZWRDb2xvciIsImNvbG9yV2l0aEFscGhhIiwiY3VycmllZFRyYW5zcGFyZW50aXplIiwiYm94U2hhZG93Iiwic2hhZG93Q29sb3IiLCJzZXRTaXplIiwibmFtZSIsImRpc2FibGVkQ29sb3IiLCJ0ZXh0Q29sb3IiLCJ0ZXh0RGFyayIsImJhY2tDb2xvciIsInNldENvbG9yIiwib3V0bGluZSIsImRpc2FibGVkIiwiYm9yZGVySG92ZXIiLCJib3JkZXJBY3RpdmUiLCJpbnZlcnRDb2xvciIsIkJ1dHRvbiIsImJ1dHRvbiIsImZ1bGwiLCJCdXR0b25Hcm91cCIsInN0cmlwZWRTdHlsZSIsImhvdmVyU3R5bGUiLCJUYWJsZSIsInRhYmxlIiwiYm9yZGVyZWQiLCJzdHJpcGVkIiwiaG92ZXIiLCJoZWFkZXJTdHlsZSIsIkJveCIsImJvcmRlcmxlc3MiLCJQcm9ncmVzcyIsInByb3BzIiwicGVyY2VudCIsIlB1cmVDb21wb25lbnQiLCJyZXF1aXJlZCIsInByaW1hcnkiLCJMYWJlbCIsImxhYmVsIiwidGV4dFN0cm9uZyIsIkZpZWxkIiwiY2hpbGRyZW4iLCJyZXN0IiwiaGFtYnVyZ2VyIiwiQXJyb3ciLCJkaXJlY3Rpb24iLCJNZXNzYWdlIiwic3BhbiIsImVycm9yIiwidGV4dExpZ2h0IiwiSGVscE1lc3NhZ2UiLCJoZWxwIiwicmlnaHRJY29uIiwibGVmdEljb24iLCJJY29uIiwicmlnaHQiLCJwbGFjZWhvbGRlciIsIlRleHRJbnB1dCIsImNsYXNzTmFtZSIsInN0eWxlIiwidHlwZSIsIm1heExlbmd0aCIsIm9uQ2hhbmdlIiwiVGV4dGFyZWEiLCJyZWFkT25seSIsIkNvbXBvbmVudCIsImNvbCIsInJvdyIsIkNoZWNrYm94IiwiY2hlY2tlZCIsImlkIiwiSW5wdXRXcmFwcGVyIiwiYXJyb3ciLCJTZWxlY3QiLCJyZW5kZXIiLCJvcHRpb25zIiwiaXRlbSIsImlkeCIsInJlbmRlckxhYmVsIiwiaW5wdXRTaXplIiwiQm9vbGVhbiIsInJlbmRlckl0ZW0iLCJSYWRpb0xhYmVsIiwiQnV0dG9uTGFiZWwiLCJSYWRpbyIsInNldEFsaWduIiwiYWxpZ24iLCJiYWNrZHJvcCIsImJhY2tncm91bmRDb2xvciIsInVhIiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwiTmF2QmFyIiwiaGVhZGVyIiwiZml4ZWQiLCJzdGlja3kiLCJCdXJnZXIiLCJoYW1idWdlciIsIk5hdkNvbnRlbnQiLCJBcHBCYXIiLCJzaG93Iiwic2V0U3RhdGUiLCJzdGF0ZSIsImJyYW5kIiwidG9nZ2xlTWVudSIsImdldENvbG9yIiwiYWRkb25Db2xvciIsInN1YkNvbG9yIiwiY2xvc2UiLCJUYWciLCJvbkNsb3NlIiwib25DbGljayIsIkJvZHkiLCJIZXJvIiwiZGVmaW5lUHJvcGVydHkiLCJTeW1ib2wiLCJmb3IiLCJoIiwiayIsImwiLCJtIiwibiIsInEiLCJ0IiwidSIsIiQkdHlwZW9mIiwidiIsImhhc1N5bWJvbCIsIlJFQUNUX0VMRU1FTlRfVFlQRSIsIlJFQUNUX1BPUlRBTF9UWVBFIiwiUkVBQ1RfRlJBR01FTlRfVFlQRSIsIlJFQUNUX1NUUklDVF9NT0RFX1RZUEUiLCJSRUFDVF9QUk9GSUxFUl9UWVBFIiwiUkVBQ1RfUFJPVklERVJfVFlQRSIsIlJFQUNUX0NPTlRFWFRfVFlQRSIsIlJFQUNUX0FTWU5DX01PREVfVFlQRSIsIlJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFIiwiUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSIsIlJFQUNUX1NVU1BFTlNFX1RZUEUiLCJSRUFDVF9NRU1PX1RZUEUiLCJSRUFDVF9MQVpZX1RZUEUiLCJpc1ZhbGlkRWxlbWVudFR5cGUiLCJsb3dQcmlvcml0eVdhcm5pbmciLCJwcmludFdhcm5pbmciLCJhcmdJbmRleCIsIm1lc3NhZ2UiLCJjb25zb2xlIiwid2FybiIsIngiLCJjb25kaXRpb24iLCJsb3dQcmlvcml0eVdhcm5pbmckMSIsInR5cGVPZiIsIm9iamVjdCIsIiQkdHlwZW9mVHlwZSIsIkFzeW5jTW9kZSIsIkNvbmN1cnJlbnRNb2RlIiwiQ29udGV4dENvbnN1bWVyIiwiQ29udGV4dFByb3ZpZGVyIiwiRWxlbWVudCIsIkZvcndhcmRSZWYiLCJGcmFnbWVudCIsIkxhenkiLCJNZW1vIiwiUG9ydGFsIiwiUHJvZmlsZXIiLCJTdHJpY3RNb2RlIiwiU3VzcGVuc2UiLCJoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0FzeW5jTW9kZSIsImlzQXN5bmNNb2RlIiwiaXNDb25jdXJyZW50TW9kZSIsImlzQ29udGV4dENvbnN1bWVyIiwiaXNDb250ZXh0UHJvdmlkZXIiLCJpc0VsZW1lbnQiLCJpc0ZvcndhcmRSZWYiLCJpc0ZyYWdtZW50IiwiaXNMYXp5IiwiaXNNZW1vIiwiaXNQb3J0YWwiLCJpc1Byb2ZpbGVyIiwiaXNTdHJpY3RNb2RlIiwiaXNTdXNwZW5zZSIsImdldE93blByb3BlcnR5U3ltYm9scyIsInByb3BJc0VudW1lcmFibGUiLCJwcm9wZXJ0eUlzRW51bWVyYWJsZSIsInRvT2JqZWN0IiwidmFsIiwic2hvdWxkVXNlTmF0aXZlIiwidGVzdDEiLCJTdHJpbmciLCJnZXRPd25Qcm9wZXJ0eU5hbWVzIiwidGVzdDIiLCJmcm9tQ2hhckNvZGUiLCJvcmRlcjIiLCJqb2luIiwidGVzdDMiLCJzcGxpdCIsImxldHRlciIsImVyciIsImZyb20iLCJ0byIsInN5bWJvbHMiLCJzIiwiUmVhY3RQcm9wVHlwZXNTZWNyZXQiLCJsb2dnZWRUeXBlRmFpbHVyZXMiLCJjaGVja1Byb3BUeXBlcyIsInR5cGVTcGVjcyIsInZhbHVlcyIsImxvY2F0aW9uIiwiY29tcG9uZW50TmFtZSIsImdldFN0YWNrIiwidHlwZVNwZWNOYW1lIiwiZXgiLCJzdGFjayIsInJlc2V0V2FybmluZ0NhY2hlIiwiZW1wdHlGdW5jdGlvblRoYXRSZXR1cm5zTnVsbCIsImlzVmFsaWRFbGVtZW50IiwidGhyb3dPbkRpcmVjdEFjY2VzcyIsIklURVJBVE9SX1NZTUJPTCIsIml0ZXJhdG9yIiwiRkFVWF9JVEVSQVRPUl9TWU1CT0wiLCJnZXRJdGVyYXRvckZuIiwibWF5YmVJdGVyYWJsZSIsIml0ZXJhdG9yRm4iLCJBTk9OWU1PVVMiLCJSZWFjdFByb3BUeXBlcyIsImFycmF5IiwiY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIiLCJib29sIiwiZnVuYyIsIm51bWJlciIsInN0cmluZyIsInN5bWJvbCIsImFueSIsImNyZWF0ZUFueVR5cGVDaGVja2VyIiwiYXJyYXlPZiIsImNyZWF0ZUFycmF5T2ZUeXBlQ2hlY2tlciIsImVsZW1lbnQiLCJjcmVhdGVFbGVtZW50VHlwZUNoZWNrZXIiLCJlbGVtZW50VHlwZSIsImNyZWF0ZUVsZW1lbnRUeXBlVHlwZUNoZWNrZXIiLCJpbnN0YW5jZU9mIiwiY3JlYXRlSW5zdGFuY2VUeXBlQ2hlY2tlciIsIm5vZGUiLCJjcmVhdGVOb2RlQ2hlY2tlciIsIm9iamVjdE9mIiwiY3JlYXRlT2JqZWN0T2ZUeXBlQ2hlY2tlciIsIm9uZU9mIiwiY3JlYXRlRW51bVR5cGVDaGVja2VyIiwib25lT2ZUeXBlIiwiY3JlYXRlVW5pb25UeXBlQ2hlY2tlciIsInNoYXBlIiwiY3JlYXRlU2hhcGVUeXBlQ2hlY2tlciIsImV4YWN0IiwiY3JlYXRlU3RyaWN0U2hhcGVUeXBlQ2hlY2tlciIsImlzIiwieSIsIlByb3BUeXBlRXJyb3IiLCJjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlciIsInZhbGlkYXRlIiwibWFudWFsUHJvcFR5cGVDYWxsQ2FjaGUiLCJtYW51YWxQcm9wVHlwZVdhcm5pbmdDb3VudCIsImNoZWNrVHlwZSIsImlzUmVxdWlyZWQiLCJwcm9wTmFtZSIsInByb3BGdWxsTmFtZSIsInNlY3JldCIsImNhY2hlS2V5IiwiY2hhaW5lZENoZWNrVHlwZSIsImV4cGVjdGVkVHlwZSIsInByb3BWYWx1ZSIsInByb3BUeXBlIiwiZ2V0UHJvcFR5cGUiLCJwcmVjaXNlVHlwZSIsImdldFByZWNpc2VUeXBlIiwidHlwZUNoZWNrZXIiLCJpc0FycmF5IiwiUmVhY3RJcyIsImV4cGVjdGVkQ2xhc3MiLCJleHBlY3RlZENsYXNzTmFtZSIsImFjdHVhbENsYXNzTmFtZSIsImdldENsYXNzTmFtZSIsImV4cGVjdGVkVmFsdWVzIiwidmFsdWVzU3RyaW5nIiwiSlNPTiIsInN0cmluZ2lmeSIsInJlcGxhY2VyIiwiYXJyYXlPZlR5cGVDaGVja2VycyIsImNoZWNrZXIiLCJnZXRQb3N0Zml4Rm9yVHlwZVdhcm5pbmciLCJpc05vZGUiLCJzaGFwZVR5cGVzIiwiYWxsS2V5cyIsImV2ZXJ5Iiwic3RlcCIsImVudHJpZXMiLCJuZXh0IiwiZG9uZSIsImVudHJ5IiwiaXNTeW1ib2wiLCJSZWdFeHAiLCJQcm9wVHlwZXMiLCJlbXB0eUZ1bmN0aW9uIiwiZW1wdHlGdW5jdGlvbldpdGhSZXNldCIsInNoaW0iLCJnZXRTaGltIiwiaGFzQ2xhc3MiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsImJhc2VWYWwiLCJhZGRDbGFzcyIsIl9oYXNDbGFzcyIsImFkZCIsInNldEF0dHJpYnV0ZSIsInJlcGxhY2VDbGFzc05hbWUiLCJvcmlnQ2xhc3MiLCJjbGFzc1RvUmVtb3ZlIiwicmVtb3ZlQ2xhc3MiLCJyZW1vdmUiLCJjb21wb25lbnRXaWxsTW91bnQiLCJnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMiLCJjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzIiwibmV4dFByb3BzIiwidXBkYXRlciIsInByZXZTdGF0ZSIsImNvbXBvbmVudFdpbGxVcGRhdGUiLCJuZXh0U3RhdGUiLCJwcmV2UHJvcHMiLCJfX3JlYWN0SW50ZXJuYWxTbmFwc2hvdEZsYWciLCJfX3JlYWN0SW50ZXJuYWxTbmFwc2hvdCIsImdldFNuYXBzaG90QmVmb3JlVXBkYXRlIiwiX19zdXBwcmVzc0RlcHJlY2F0aW9uV2FybmluZyIsInBvbHlmaWxsIiwiaXNSZWFjdENvbXBvbmVudCIsImZvdW5kV2lsbE1vdW50TmFtZSIsImZvdW5kV2lsbFJlY2VpdmVQcm9wc05hbWUiLCJmb3VuZFdpbGxVcGRhdGVOYW1lIiwiVU5TQUZFX2NvbXBvbmVudFdpbGxNb3VudCIsIlVOU0FGRV9jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzIiwiVU5TQUZFX2NvbXBvbmVudFdpbGxVcGRhdGUiLCJuZXdBcGlOYW1lIiwiY29tcG9uZW50RGlkVXBkYXRlIiwiY29tcG9uZW50RGlkVXBkYXRlUG9seWZpbGwiLCJtYXliZVNuYXBzaG90Iiwic25hcHNob3QiLCJfcHJvcFR5cGVzIiwidGltZW91dHNTaGFwZSIsImVudGVyIiwiZXhpdCIsImNsYXNzTmFtZXNTaGFwZSIsImFjdGl2ZSIsImVudGVyRG9uZSIsImVudGVyQWN0aXZlIiwiZXhpdERvbmUiLCJleGl0QWN0aXZlIiwiX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQiLCJfcmVhY3QiLCJfcmVhY3REb20iLCJuZXdPYmoiLCJkZXNjIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwiX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UiLCJleGNsdWRlZCIsInNvdXJjZUtleXMiLCJVTk1PVU5URUQiLCJFWElURUQiLCJFTlRFUklORyIsIkVOVEVSRUQiLCJFWElUSU5HIiwiVHJhbnNpdGlvbiIsIl9SZWFjdCRDb21wb25lbnQiLCJjb250ZXh0IiwicGFyZW50R3JvdXAiLCJ0cmFuc2l0aW9uR3JvdXAiLCJhcHBlYXIiLCJpc01vdW50aW5nIiwiaW5pdGlhbFN0YXR1cyIsImFwcGVhclN0YXR1cyIsImluIiwidW5tb3VudE9uRXhpdCIsIm1vdW50T25FbnRlciIsInN0YXR1cyIsIm5leHRDYWxsYmFjayIsIl9wcm90byIsImdldENoaWxkQ29udGV4dCIsIl9yZWYiLCJuZXh0SW4iLCJjb21wb25lbnREaWRNb3VudCIsInVwZGF0ZVN0YXR1cyIsIm5leHRTdGF0dXMiLCJjb21wb25lbnRXaWxsVW5tb3VudCIsImNhbmNlbE5leHRDYWxsYmFjayIsImdldFRpbWVvdXRzIiwidGltZW91dCIsIm1vdW50aW5nIiwiZmluZERPTU5vZGUiLCJwZXJmb3JtRW50ZXIiLCJwZXJmb3JtRXhpdCIsIl90aGlzMiIsImFwcGVhcmluZyIsInRpbWVvdXRzIiwic2FmZVNldFN0YXRlIiwib25FbnRlcmVkIiwib25FbnRlciIsIm9uRW50ZXJpbmciLCJvblRyYW5zaXRpb25FbmQiLCJfdGhpczMiLCJvbkV4aXRlZCIsIm9uRXhpdCIsIm9uRXhpdGluZyIsImNhbmNlbCIsImNhbGxiYWNrIiwic2V0TmV4dENhbGxiYWNrIiwiX3RoaXM0IiwiZXZlbnQiLCJoYW5kbGVyIiwiYWRkRW5kTGlzdGVuZXIiLCJzZXRUaW1lb3V0IiwiX3RoaXMkcHJvcHMiLCJjaGlsZFByb3BzIiwiY2hpbGQiLCJDaGlsZHJlbiIsIm9ubHkiLCJjbG9uZUVsZW1lbnQiLCJjb250ZXh0VHlwZXMiLCJjaGlsZENvbnRleHRUeXBlcyIsInByb3BUeXBlcyIsInB0IiwiX1Byb3BUeXBlcyIsIm5vb3AiLCJfcmVhY3RMaWZlY3ljbGVzQ29tcGF0IiwiX2FkZENsYXNzIiwiX3JlbW92ZUNsYXNzIiwiX1RyYW5zaXRpb24iLCJjbGFzc2VzIiwiQ1NTVHJhbnNpdGlvbiIsIl90aGlzJGdldENsYXNzTmFtZXMiLCJnZXRDbGFzc05hbWVzIiwicmVtb3ZlQ2xhc3NlcyIsIl90aGlzJGdldENsYXNzTmFtZXMyIiwiYWN0aXZlQ2xhc3NOYW1lIiwicmVmbG93QW5kQWRkQ2xhc3MiLCJfdGhpcyRnZXRDbGFzc05hbWVzMyIsImRvbmVDbGFzc05hbWUiLCJfdGhpcyRnZXRDbGFzc05hbWVzNCIsIl90aGlzJGdldENsYXNzTmFtZXM1IiwiX3RoaXMkZ2V0Q2xhc3NOYW1lczYiLCJjbGFzc05hbWVzIiwiX3RoaXMkZ2V0Q2xhc3NOYW1lczciLCJzY3JvbGxUb3AiLCJjcmVhdGVFbGVtZW50IiwiZ2V0UG9zaXRpb24iLCJwb3NpdGlvbiIsImJvdHRvbSIsImxlZnQiLCJ0cmFuc2Zvcm0iLCJ0b3AiLCJUb29sdGlwIiwiY3VycmVudCIsIm9mZnNldFdpZHRoIiwib2Zmc2V0SGVpZ2h0IiwiY3JlYXRlUmVmIiwib3BlblRvb2x0aXAiLCJjbG9zZVRvb2x0aXAiLCJTaWRlTWVudSIsImFzaWRlIiwiTWVudUxpc3QiLCJ1bCIsIk1lbnVMYWJlbCIsIkNhcmRCb2R5IiwiQ2FyZEhlYWRlciIsIkNhcmRGb290ZXIiLCJmb290ZXIiLCJDYXJkSW1hZ2UiLCJDYXJkSW1hZ2VIb3Jpem9udGFsIiwidXJsIiwiaG9yaXpvbnRhbFN0eWxlIiwiZmxleERpcmVjdGlvbiIsIkNhcmQiLCJpbWFnZSIsInRpdGxlIiwiaG9yaXpvbnRhbCIsInJlbmRlckhlYWRlciIsIndyYXBwZXJTdHlsZSIsIlBvcG92ZXIiLCJ0b29sdGlwU3R5bGUiLCJvcGVuRHJvcGRvd24iLCJjbG9zZURyb3Bkb3duIiwiZGlzcGxheSIsIkVTQ19LRVkiLCJNb2RhbCIsImNsb3NlT25Fc2MiLCJrZXlDb2RlIiwiY2xvc2VNb2RhbCIsImNsb3NlT25PdmVybGF5IiwiZG9jdW1lbnQiLCJib2R5IiwicmVtb3ZlQ2hpbGQiLCJhcHBlbmRDaGlsZCIsImNyZWF0ZVBvcnRhbCIsImV4dGVybmFsIiwib25DbGlja092ZXJsYXkiLCJnZXRDaGlsZE1hcHBpbmciLCJtZXJnZUNoaWxkTWFwcGluZ3MiLCJnZXRJbml0aWFsQ2hpbGRNYXBwaW5nIiwiZ2V0TmV4dENoaWxkTWFwcGluZyIsIm1hcEZuIiwibWFwcGVyIiwicmVzdWx0IiwicHJldiIsImdldFZhbHVlRm9yS2V5IiwibmV4dEtleXNQZW5kaW5nIiwicGVuZGluZ0tleXMiLCJwcmV2S2V5IiwiY2hpbGRNYXBwaW5nIiwibmV4dEtleSIsInBlbmRpbmdOZXh0S2V5IiwiZ2V0UHJvcCIsInByb3AiLCJwcmV2Q2hpbGRNYXBwaW5nIiwibmV4dENoaWxkTWFwcGluZyIsImhhc1ByZXYiLCJoYXNOZXh0IiwicHJldkNoaWxkIiwiaXNMZWF2aW5nIiwiY29tcG9uZW50IiwiY2hpbGRGYWN0b3J5IiwiVHJhbnNpdGlvbkdyb3VwIiwiaGFuZGxlRXhpdGVkIiwiZmlyc3RSZW5kZXIiLCJhcHBlYXJlZCIsIm1vdW50ZWQiLCJfQ2hpbGRNYXBwaW5nIiwiY3VycmVudENoaWxkTWFwcGluZyIsIlRvYXN0SXRlbSIsImR1cmF0aW9uIiwiY2xlYXIiLCJzZXRQb3NpdGlvbiIsImlzRml4ZWQiLCJiYXNlIiwiVG9hc3RDb250YWluZXIiLCJ0b2FzdHMiLCJjc3NUZXh0IiwicmVuZGVyVG9hc3QiLCJuYXYiLCJUYWJJdGVtIiwiSW5kaWNhdG9yIiwiVGFicyIsInN0YXJ0IiwidGhyZXNob2xkIiwibWF4SXRlbXMiLCJjb3VudCIsInRvdGFsIiwidmlzaWJpbGl0eSIsImluZGV4IiwiZ2V0SW5kaWNhdG9yUG9zaXRpb24iLCJyZW5kZXJDaGlsZHJlbiIsImFjdGl2ZUluZGV4IiwibGVuIiwiTG9hZGluZ0JhciIsImxvYWRpbmciLCJzcGluIiwia2V5ZnJhbWVzIiwiU3Bpbm5lciIsImJvcmRlclNpemUiLCJmb250RmFtaWx5IiwiZm9udFNpemUiLCJyYWRpdXMiLCJsaW5rIiwiaW5mbyIsInN1Y2Nlc3MiLCJ3YXJuaW5nIiwiZGFyayIsImxpZ2h0IiwiYmxhY2tCaXMiLCJibGFja1RlciIsIndoaXRlQmlzIiwid2hpdGVUZXIiLCJncmV5TGlnaHQiLCJncmV5TGlnaHRlciIsIm5vcm1hbGl6ZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFFZSxTQUFTQSxLQUFULEdBQWlCO1NBQ3ZCQztJQUFLLEtBQUssRUFBRTtNQUFFQyxLQUFLLEVBQUUsTUFBVDtNQUFpQkMsTUFBTSxFQUFFOztJQUE1Qzs7O0FDR0ssU0FBU0MsV0FBVCxPQUF1QztNQUFoQkMsS0FBZ0IsUUFBaEJBLEtBQWdCO2lEQUNKQSxLQUFLLENBQUNDLFVBQU4sR0FBbUJELEtBQUssQ0FBQ0UsTUFBekIsR0FBa0MsQ0FBMUU7O0FBR0YsQUFBTyxTQUFTQyxXQUFULFFBQXVDO01BQWhCSCxLQUFnQixTQUFoQkEsS0FBZ0I7aURBQ0pBLEtBQUssQ0FBQ0MsVUFBTixHQUFtQkQsS0FBSyxDQUFDSSxNQUF6QixHQUFrQyxDQUExRTs7QUFHRixBQUFPLFNBQVNDLFlBQVQsUUFBd0M7TUFBaEJMLEtBQWdCLFNBQWhCQSxLQUFnQjtpREFDTEEsS0FBSyxDQUFDQyxVQUFOLEdBQW1CRCxLQUFLLENBQUNNLE9BQXpCLEdBQW1DLENBQTNFOztBQUdGLEFBQU8sU0FBU0MsV0FBVCxRQUF1QztNQUFoQlAsS0FBZ0IsU0FBaEJBLEtBQWdCO2lEQUNKQSxLQUFLLENBQUNDLFVBQU4sR0FBbUJELEtBQUssQ0FBQ1EsTUFBekIsR0FBa0MsQ0FBMUU7O0FBR0YsQUFBTyxTQUFTQyxnQkFBVCxRQUE0QztNQUFoQlQsS0FBZ0IsU0FBaEJBLEtBQWdCO2lEQUNUQSxLQUFLLENBQUNDLFVBQU4sR0FBbUJELEtBQUssQ0FBQ1EsTUFBekIsR0FBa0MsQ0FBMUU7OztBQ2ZGLFNBQVNFLGFBQVQsT0FBOEM7TUFBckJDLEtBQXFCLFFBQXJCQSxLQUFx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
