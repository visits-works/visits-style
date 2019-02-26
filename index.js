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
    return css(["", "{padding-right:0.5rem;padding-left:0.5rem;}", "{padding-right:0.75rem;padding-left:0.75rem;}", "{padding-right:0.75rem;padding-left:0.75rem;}"], mediaMobile, mediaDesktop, mediaFullHD);
  }

  return css(["margin-right:auto;margin-left:auto;", "{max-width:", "px;}", "{max-width:", "px;}", "{max-width:", "px;}", "{max-width:", "px;}"], mediaMobile, function (_ref2) {
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
    return css(["width:auto;max-width:none;"]);
  }

  var value = parcentage(size);
  var offVal = offset ? parcentage(offset) : 0;
  var autoSize = value > 33 ? 100 : value * 3;
  return css(["width:", "%;max-width:", "%;", " ", "{width:", "%;max-width:", "%;", "}"], value, value, offset ? "margin-left: ".concat(offVal, "%;") : {}, mediaMobile, autoSize, autoSize, offset ? "margin-left: 0;" : {});
}

var Col =
/*#__PURE__*/
styled.div.withConfig({
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
    return css(["margin-right:0;margin-left:0;> ", "{padding-right:0;padding-left:0;}"], Col);
  }

  return css(["", "{margin-left:-0.5rem;margin-right:-0.5rem;margin-top:-0.5rem;&:last-child{margin-bottom:-0.5rem;}&:not(:last-child){margin-bottom:0.5rem;}}", "{margin-left:-0.75rem;margin-right:-0.75rem;margin-top:-0.75rem;&:last-child{margin-bottom:-0.75rem;}&:not(:last-child){margin-bottom:0.75rem;}}"], mediaTablet, mediaFullHD);
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
          rest = _objectWithoutProperties(_this$props, ["label", "children"]);

      return React.createElement(Wrapper$1, rest, label && React.createElement(Label, null, label), children);
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
})(["position:relative;display:block;select{display:block;cursor:pointer;appearance:none;outline:none;max-width:100%;width:100%;height:100%;background-color:transparent;padding:0.375em 0.625em;text-align:left;color:inherit;", " border:none;", " will-change:box-shadow;transition-property:box-shadow;transition-duration:150ms;transition-timing-function:ease-in-out;&:focus{border-color:", ";box-shadow:", ";}&::-ms-expand{display:none;}&:-moz-focusring{color:transparent;text-shadow:0 0 0 #000;}&:disabled,[disabled],&:readonly{", "}&:invalid{color:", ";}}&::after{", " top:1.25em;right:0.625em;z-index:4;}", " ", ""], function (_ref) {
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
styled.button.withConfig({
  displayName: "AppBar__Burger",
  componentId: "t8gqca-1"
})(["", " display:none;margin-left:auto;border:none;background-color:transparent;color:inherit;outline:none;&:hover{background-color:rgba(0,0,0,.05);}", "{display:block;}"], hamburger('3.25rem'), mediaMobile);
var NavContent =
/*#__PURE__*/
styled.div.withConfig({
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
      return React.createElement(NavBar, _extends({
        role: "navigation"
      }, rest), brand, React.createElement(Burger, {
        className: show ? 'active' : '',
        onClick: this.toggleMenu
      }, React.createElement("span", null), React.createElement("span", null), React.createElement("span", null)), React.createElement(NavContent, {
        align: align
      }, children));
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

var Wrapper$6 =
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

      return React.createElement(Wrapper$6, _extends({
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
var Wrapper$7 =
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

  return React.createElement(Wrapper$7, _extends({
    color: color,
    size: size
  }, rest), header, React.createElement(Body, {
    center: center
  }, React.createElement(Container, null, children)));
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

  var _react = _interopRequireDefault(React);

  var _reactDom = _interopRequireDefault(reactDom);

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

  var _react = _interopRequireDefault(React);

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
styled.div.withConfig({
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

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "element", createRef());

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
      return React.createElement(Wrapper$8, _extends({
        ref: this.element,
        onMouseOver: this.openTooltip,
        onMouseOut: this.closeTooltip
      }, rest), children, React.createElement(CSSTransition, {
        classNames: {
          appear: 'start',
          enterDone: 'start',
          exit: 'end'
        },
        in: show,
        timeout: 150,
        unmountOnExit: true
      }, React.createElement("div", {
        role: "tooltip"
      }, label)));
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
var Wrapper$9 =
/*#__PURE__*/
styled.div.withConfig({
  displayName: "Popover__Wrapper",
  componentId: "sc-1huajr8-0"
})(["display:inline-block;outline:none;color:inherit;&:hover{color:inherit;text-decoration:none;}", ""], function (_ref) {
  var css = _ref.css;
  return css || '';
});
var Tooltip$1 =
/*#__PURE__*/
styled(Box).withConfig({
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

      return React.createElement(_StyledWrapper$2, {
        tabIndex: 0,
        role: "button",
        onFocus: this.openDropdown,
        onBlur: this.closeDropdown,
        style: {
          display: 'block',
          position: 'relative'
        },
        _css: css
      }, label, React.createElement(CSSTransition, {
        classNames: {
          appear: 'start',
          enterDone: 'start',
          exit: 'end'
        },
        in: show,
        timeout: 150,
        unmountOnExit: true
      }, React.createElement(Tooltip$1, _extends({
        role: "tooltip",
        style: tooltipStyle
      }, rest), children)));
    }
  }]);

  return Popover;
}(Component);

_defineProperty(Popover, "defaultProps", {
  position: 'bottom-left',
  color: 'white',
  style: {}
});

var _StyledWrapper$2 = styled(Wrapper$9)(_templateObject$3(), function (p) {
  return p._css;
});

var ESC_KEY = 27;
var Wrapper$a =
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
        }, React.createElement(Wrapper$a, _extends({
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
      return React.createElement(Wrapper$b, {
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

var Wrapper$c =
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
      return React.createElement(Wrapper$c, {
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

var Wrapper$d =
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
      return React.createElement(Wrapper$d, this.props, React.createElement(CSSTransition, {
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

export { theme as defaultTheme, normalized as normalizeStyle, Break, Container, Row, Col, Content, Button, ButtonGroup, Table, Box, Progress, AppBar, Tag, Hero, Tooltip, Card, Popover, Modal, ToastContainer as Toast, Tabs, LoadingBar, Spinner, Pre, Code, H1, Field, TextInput, Textarea, Checkbox, Select, Radio, SideMenu, MenuList, MenuLabel, findColorInvert, hamburger as hambuger, boxShadow, Arrow as arrow, setSize, mediaMobile, mediaTablet, mediaDesktop, mediaFullHD, mediaUntilFullHD };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uL3NyYy9jb21wb25lbnRzL0dyaWQvQnJlYWsudHN4IiwiLi4vc3JjL3V0aWxzL21lZGlhLnRzIiwiLi4vc3JjL2NvbXBvbmVudHMvR3JpZC9Db250YWluZXIudHMiLCIuLi9zcmMvY29tcG9uZW50cy9HcmlkL0NvbC50cyIsIi4uL3NyYy9jb21wb25lbnRzL0dyaWQvUm93LnRzIiwiLi4vc3JjL2NvbXBvbmVudHMvQ29udGVudC9QcmUudHMiLCIuLi9zcmMvY29tcG9uZW50cy9Db250ZW50L0NvZGUudHMiLCIuLi9zcmMvY29tcG9uZW50cy9Db250ZW50L0gxLnRzIiwiLi4vc3JjL2NvbXBvbmVudHMvQ29udGVudC9pbmRleC50cyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb2xpc2hlZC9saWIvaW50ZXJuYWxIZWxwZXJzL19jdXJyeS5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb2xpc2hlZC9saWIvaW50ZXJuYWxIZWxwZXJzL19ndWFyZC5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb2xpc2hlZC9saWIvaW50ZXJuYWxIZWxwZXJzL19oc2xUb1JnYi5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb2xpc2hlZC9saWIvaW50ZXJuYWxIZWxwZXJzL19uYW1lVG9IZXguanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9saXNoZWQvbGliL2ludGVybmFsSGVscGVycy9fZXJyb3JzLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3BvbGlzaGVkL2xpYi9jb2xvci9wYXJzZVRvUmdiLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3BvbGlzaGVkL2xpYi9pbnRlcm5hbEhlbHBlcnMvX3JnYlRvSHNsLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3BvbGlzaGVkL2xpYi9jb2xvci9wYXJzZVRvSHNsLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3BvbGlzaGVkL2xpYi9pbnRlcm5hbEhlbHBlcnMvX3JlZHVjZUhleFZhbHVlLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3BvbGlzaGVkL2xpYi9pbnRlcm5hbEhlbHBlcnMvX251bWJlclRvSGV4LmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3BvbGlzaGVkL2xpYi9pbnRlcm5hbEhlbHBlcnMvX2hzbFRvSGV4LmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3BvbGlzaGVkL2xpYi9jb2xvci9oc2wuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9saXNoZWQvbGliL2NvbG9yL2hzbGEuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9saXNoZWQvbGliL2NvbG9yL3JnYi5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb2xpc2hlZC9saWIvY29sb3IvcmdiYS5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb2xpc2hlZC9saWIvY29sb3IvdG9Db2xvclN0cmluZy5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb2xpc2hlZC9saWIvY29sb3IvZGFya2VuLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3BvbGlzaGVkL2xpYi9jb2xvci9nZXRMdW1pbmFuY2UuanMiLCIuLi9zcmMvdXRpbHMvZmluZENvbG9ySW52ZXJ0LnRzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3BvbGlzaGVkL2xpYi9jb2xvci90cmFuc3BhcmVudGl6ZS5qcyIsIi4uL3NyYy91dGlscy9ib3hTaGFkb3cudHMiLCIuLi9zcmMvdXRpbHMvc2V0U2l6ZS50cyIsIi4uL3NyYy91dGlscy9kaXNhYmxlZENvbG9yLnRzIiwiLi4vc3JjL2NvbXBvbmVudHMvQnV0dG9uL2luZGV4LnRzIiwiLi4vc3JjL2NvbXBvbmVudHMvQnV0dG9uL0J1dHRvbkdyb3VwLnRzIiwiLi4vc3JjL2NvbXBvbmVudHMvVGFibGUvaW5kZXgudHMiLCIuLi9zcmMvY29tcG9uZW50cy9Cb3gvaW5kZXgudHN4IiwiLi4vc3JjL2NvbXBvbmVudHMvUHJvZ3Jlc3MvaW5kZXgudHN4IiwiLi4vc3JjL2NvbXBvbmVudHMvRm9ybS9GaWVsZC50c3giLCIuLi9zcmMvdXRpbHMvaGFtYnVnZXIudHMiLCIuLi9zcmMvdXRpbHMvYXJyb3cudHMiLCIuLi9zcmMvY29tcG9uZW50cy9Gb3JtL0hlbHBNZXNzYWdlLnRzeCIsIi4uL3NyYy9jb21wb25lbnRzL0Zvcm0vVGV4dElucHV0LnRzeCIsIi4uL3NyYy9jb21wb25lbnRzL0Zvcm0vVGV4dGFyZWEudHN4IiwiLi4vc3JjL2NvbXBvbmVudHMvRm9ybS9DaGVja2JveC50c3giLCIuLi9zcmMvY29tcG9uZW50cy9Gb3JtL1NlbGVjdC50c3giLCIuLi9zcmMvY29tcG9uZW50cy9Gb3JtL1JhZGlvLnRzeCIsIi4uL3NyYy91dGlscy9zZXRBbGlnbi50cyIsIi4uL3NyYy9jb21wb25lbnRzL0FwcEJhci9pbmRleC50c3giLCIuLi9zcmMvY29tcG9uZW50cy9UYWcvaW5kZXgudHN4IiwiLi4vc3JjL2NvbXBvbmVudHMvSGVyby9pbmRleC50c3giLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVhY3QtaXMvY2pzL3JlYWN0LWlzLnByb2R1Y3Rpb24ubWluLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3JlYWN0LWlzL2Nqcy9yZWFjdC1pcy5kZXZlbG9wbWVudC5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZWFjdC1pcy9pbmRleC5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9vYmplY3QtYXNzaWduL2luZGV4LmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvbGliL1JlYWN0UHJvcFR5cGVzU2VjcmV0LmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvY2hlY2tQcm9wVHlwZXMuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9mYWN0b3J5V2l0aFR5cGVDaGVja2Vycy5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2ZhY3RvcnlXaXRoVGhyb3dpbmdTaGltcy5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2luZGV4LmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2RvbS1oZWxwZXJzL2NsYXNzL2hhc0NsYXNzLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2RvbS1oZWxwZXJzL2NsYXNzL2FkZENsYXNzLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2RvbS1oZWxwZXJzL2NsYXNzL3JlbW92ZUNsYXNzLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3JlYWN0LWxpZmVjeWNsZXMtY29tcGF0L3JlYWN0LWxpZmVjeWNsZXMtY29tcGF0LmVzLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3JlYWN0LXRyYW5zaXRpb24tZ3JvdXAvdXRpbHMvUHJvcFR5cGVzLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3JlYWN0LXRyYW5zaXRpb24tZ3JvdXAvVHJhbnNpdGlvbi5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZWFjdC10cmFuc2l0aW9uLWdyb3VwL0NTU1RyYW5zaXRpb24uanMiLCIuLi9zcmMvY29tcG9uZW50cy9Ub29sdGlwL2luZGV4LnRzeCIsIi4uL3NyYy9jb21wb25lbnRzL1NpZGVNZW51L2luZGV4LnRzeCIsIi4uL3NyYy9jb21wb25lbnRzL0NhcmQvaW5kZXgudHN4IiwiLi4vc3JjL2NvbXBvbmVudHMvUG9wb3Zlci9pbmRleC50c3giLCIuLi9zcmMvY29tcG9uZW50cy9Nb2RhbC9pbmRleC50c3giLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVhY3QtdHJhbnNpdGlvbi1ncm91cC91dGlscy9DaGlsZE1hcHBpbmcuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVhY3QtdHJhbnNpdGlvbi1ncm91cC9UcmFuc2l0aW9uR3JvdXAuanMiLCIuLi9zcmMvY29tcG9uZW50cy9Ub2FzdC9pbmRleC50c3giLCIuLi9zcmMvY29tcG9uZW50cy9UYWJzL2luZGV4LnRzeCIsIi4uL3NyYy9jb21wb25lbnRzL0xvYWRpbmcvQmFyLnRzeCIsIi4uL3NyYy9jb21wb25lbnRzL0xvYWRpbmcvU3Bpbm5lci50c3giLCIuLi9zcmMvY29tcG9uZW50cy9pbmRleC50cyIsIi4uL3NyYy90aGVtZS9kZWZhdWx0LnRzIiwiLi4vc3JjL3N0eWxlcy9ub3JtYWxpemUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQnJlYWsoKSB7XG4gIHJldHVybiA8ZGl2IHN0eWxlPXt7IHdpZHRoOiAnMTAwJScsIGhlaWdodDogMCB9fSAvPjtcbn07XG4iLCJpbXBvcnQgeyBUaGVtZVR5cGUgfSBmcm9tICcuLi90eXBlcyc7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIHRoZW1lOiBUaGVtZVR5cGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZWRpYU1vYmlsZSh7IHRoZW1lIH06IFByb3BzKSB7XG4gIHJldHVybiBgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogJHt0aGVtZS5yZXNwb25zaXZlID8gdGhlbWUubW9iaWxlIDogMH1weClgO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWVkaWFUYWJsZXQoeyB0aGVtZSB9OiBQcm9wcykge1xuICByZXR1cm4gYEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICR7dGhlbWUucmVzcG9uc2l2ZSA/IHRoZW1lLnRhYmxldCA6IDB9cHgpYDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1lZGlhRGVza3RvcCh7IHRoZW1lIH06IFByb3BzKSB7XG4gIHJldHVybiBgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJHt0aGVtZS5yZXNwb25zaXZlID8gdGhlbWUuZGVza3RvcCA6IDB9cHgpYDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1lZGlhRnVsbEhEKHsgdGhlbWUgfTogUHJvcHMpIHtcbiAgcmV0dXJuIGBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAke3RoZW1lLnJlc3BvbnNpdmUgPyB0aGVtZS5mdWxsaGQgOiAwfXB4KWA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZWRpYVVudGlsRnVsbEhEKHsgdGhlbWUgfTogUHJvcHMpIHtcbiAgcmV0dXJuIGBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAke3RoZW1lLnJlc3BvbnNpdmUgPyB0aGVtZS5mdWxsaGQgOiAwfXB4KWA7XG59XG4iLCJpbXBvcnQgc3R5bGVkLCB7IGNzcyB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7IG1lZGlhRnVsbEhELCBtZWRpYVRhYmxldCwgbWVkaWFEZXNrdG9wLCBtZWRpYU1vYmlsZSB9IGZyb20gJy4uLy4uL3V0aWxzL21lZGlhJztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgLyoqICAqL1xuICBmbHVpZD86IGJvb2xlYW47XG59XG5cbmZ1bmN0aW9uIHNldFJlc3BvbnNpdmUoeyBmbHVpZCB9OiBQcm9wcyk6IGFueSB7XG4gIGlmIChmbHVpZCkge1xuICAgIHJldHVybiBjc3NgXG4gICAgICAke21lZGlhTW9iaWxlfSB7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDAuNXJlbTtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwLjVyZW07XG4gICAgICB9XG4gICAgICAke21lZGlhRGVza3RvcH0ge1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwLjc1cmVtO1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDAuNzVyZW07XG4gICAgICB9XG4gICAgICAke21lZGlhRnVsbEhEfSB7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDAuNzVyZW07XG4gICAgICAgIHBhZGRpbmctbGVmdDogMC43NXJlbTtcbiAgICAgIH1cbiAgICBgO1xuICB9XG5cbiAgcmV0dXJuIGNzc2BcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgJHttZWRpYU1vYmlsZX0ge1xuICAgICAgbWF4LXdpZHRoOiAkeyh7IHRoZW1lIH06IGFueSkgPT4gdGhlbWUubW9iaWxlIC0gKDIgKiB0aGVtZS5zbWFsbEd1dHRlcil9cHg7XG4gICAgfVxuICAgICR7bWVkaWFUYWJsZXR9IHtcbiAgICAgIG1heC13aWR0aDogJHsoeyB0aGVtZSB9OiBhbnkpID0+IHRoZW1lLnRhYmxldCAtICgyICogdGhlbWUuc21hbGxHdXR0ZXIpfXB4O1xuICAgIH1cbiAgICAke21lZGlhRGVza3RvcH0ge1xuICAgICAgbWF4LXdpZHRoOiAkeyh7IHRoZW1lIH06IGFueSkgPT4gdGhlbWUuZGVza3RvcCAtICgyICogdGhlbWUuZ3V0dGVyKX1weDtcbiAgICB9XG4gICAgJHttZWRpYUZ1bGxIRH0ge1xuICAgICAgbWF4LXdpZHRoOiAkeyh7IHRoZW1lIH06IGFueSkgPT4gdGhlbWUuZnVsbGhkIC0gKDIgKiB0aGVtZS5ndXR0ZXIpfXB4O1xuICAgIH1cbiAgYDtcbn1cblxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdjxQcm9wcz5gXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG5cbiAgJHtzZXRSZXNwb25zaXZlfVxuYDtcbkNvbnRhaW5lci5kaXNwbGF5TmFtZSA9ICdDb250YWluZXInO1xuQ29udGFpbmVyLmRlZmF1bHRQcm9wcyA9IHtcbiAgZmx1aWQ6IGZhbHNlLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29udGFpbmVyO1xuIiwiaW1wb3J0IHN0eWxlZCwgeyBjc3MgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgeyBtZWRpYU1vYmlsZSwgbWVkaWFUYWJsZXQgfSBmcm9tICcuLi8uLi91dGlscy9tZWRpYSc7XG5pbXBvcnQgeyBDb2xTaXplVHlwZSB9IGZyb20gJy4uLy4uL3R5cGVzJztcblxuaW50ZXJmYWNlIENvbFByb3BzIHtcbiAgLyoqIOWbuuWumuOBruW5heOCkuaMh+WumuOBmeOCi+WgtOWQiCAqL1xuICBuYXJyb3c/OiBib29sZWFuO1xuICAvKiogMS0xMuOBruOCteOCpOOCuiAqL1xuICBzaXplPzogQ29sU2l6ZVR5cGU7XG4gIC8qKiAxLTEy44Gu5bem44Gub2Zmc2V0ICovXG4gIG9mZnNldD86IENvbFNpemVUeXBlO1xuICAvKiogMS0xMuWfuua6luOBruOCteOCpOOCuuOCkueUu+mdouOCteOCpOOCuuOBruOCiOOBo+OBpuWPr+WkieOBq+OBmeOCiyAqL1xuICBhdXRvPzogYm9vbGVhbjtcbn1cblxuZnVuY3Rpb24gcGFyY2VudGFnZSh2YWx1ZT86IENvbFNpemVUeXBlKSB7XG4gIGlmICghdmFsdWUpIHJldHVybiAwO1xuICBpZiAodmFsdWUgPj0gMTIpIHJldHVybiAxMDA7XG4gIHJldHVybiBNYXRoLmNlaWwoKHZhbHVlIC8gMTIpICogMTAwICogMTAwMDAwKSAvIDEwMDAwMDtcbn1cblxuZnVuY3Rpb24gcmVuZGVyU2l6ZSh7IHNpemUsIG5hcnJvdywgYXV0bywgb2Zmc2V0IH06IENvbFByb3BzKSB7XG4gIGlmIChuYXJyb3cpIHJldHVybiBudWxsO1xuICBpZiAoIXNpemUgfHwgc2l6ZSA8IDEgfHwgc2l6ZSA+IDEyKSB7XG4gICAgcmV0dXJuIGNzc2BcbiAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgbWF4LXdpZHRoOiBub25lO1xuICAgIGA7XG4gIH1cblxuICBjb25zdCB2YWx1ZSA9IHBhcmNlbnRhZ2Uoc2l6ZSk7XG4gIGNvbnN0IG9mZlZhbCA9IG9mZnNldCA/IHBhcmNlbnRhZ2Uob2Zmc2V0KSA6IDA7XG4gIGNvbnN0IGF1dG9TaXplID0gdmFsdWUgPiAzMyA/IDEwMCA6IHZhbHVlICogMztcbiAgcmV0dXJuIGNzc2BcbiAgICB3aWR0aDogJHt2YWx1ZX0lO1xuICAgIG1heC13aWR0aDogJHt2YWx1ZX0lO1xuICAgICR7b2Zmc2V0ID8gYG1hcmdpbi1sZWZ0OiAke29mZlZhbH0lO2AgOiB7fX1cblxuICAgICR7bWVkaWFNb2JpbGV9IHtcbiAgICAgIHdpZHRoOiAke2F1dG9TaXplfSU7XG4gICAgICBtYXgtd2lkdGg6ICR7YXV0b1NpemV9JTtcbiAgICAgICR7b2Zmc2V0ID8gYG1hcmdpbi1sZWZ0OiAwO2AgOiB7fX1cbiAgICB9XG4gIGA7XG59XG5cbmNvbnN0IENvbCA9IHN0eWxlZC5kaXY8Q29sUHJvcHM+YFxuICBkaXNwbGF5OiBibG9jaztcbiAgbWluLWhlaWdodDogMXB4O1xuXG4gICR7KHsgbmFycm93IH0pID0+IG5hcnJvdyA/ICdmbGV4OiBub25lOycgOiB7fX1cbiAgJHsoeyBvZmZzZXQgfSkgPT4gb2Zmc2V0ID8gYG1hcmdpbi1sZWZ0OiAke3BhcmNlbnRhZ2Uob2Zmc2V0KX0lO2AgOiB7fX1cblxuICAke3JlbmRlclNpemV9XG5cbiAgcGFkZGluZzogMC43NXJlbTtcblxuICAke21lZGlhVGFibGV0fSB7XG4gICAgcGFkZGluZzogMC41cmVtO1xuICB9XG5gO1xuXG5Db2wuZGlzcGxheU5hbWUgPSAnQ29sJztcblxuZXhwb3J0IGRlZmF1bHQgQ29sO1xuIiwiaW1wb3J0IHN0eWxlZCwgeyBjc3MgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgQ29sIGZyb20gJy4vQ29sJztcbmltcG9ydCB7IG1lZGlhRnVsbEhELCBtZWRpYVRhYmxldCB9IGZyb20gJy4uLy4uL3V0aWxzL21lZGlhJztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgLyoqIOWbuuWumuW5hSAqL1xuICB3aWR0aD86IHN0cmluZztcbiAgLyoqIOWQkeOBj+aVsOOBruihjOOBp+WvvuW/nOOBp+OBjeOCi+OCiOOBhuOBq+OBmeOCiyAqL1xuICBtdWx0aWxpbmU/OiBib29sZWFuO1xuICAvKiog57im44Gu5Lit5aSu5o+D44GI44Gr44GZ44KLICovXG4gIHZjZW50ZXI/OiBib29sZWFuO1xuICAvKiog5qiq5bmF44Gu5Lit5aSu5o+D44GI44Gr44GZ44KLICovXG4gIGNlbnRlcj86IGJvb2xlYW47XG4gIC8qKiBDb2zjga7plpPpmpTjgpLjgarjgY/jgZkgKi9cbiAgbm9HdXR0ZXI/OiBib29sZWFuO1xufVxuXG5mdW5jdGlvbiByZW5kZXJHdXR0ZXIoeyBub0d1dHRlciB9OiBQcm9wcykge1xuICBpZiAobm9HdXR0ZXIpIHtcbiAgICByZXR1cm4gY3NzYFxuICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgICAgbWFyZ2luLWxlZnQ6IDA7XG5cbiAgICAgID4gJHtDb2x9IHtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMDtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgICAgfVxuICAgIGA7XG4gIH1cbiAgcmV0dXJuIGNzc2BcbiAgICAke21lZGlhVGFibGV0fSB7XG4gICAgICBtYXJnaW4tbGVmdDogLTAuNXJlbTtcbiAgICAgIG1hcmdpbi1yaWdodDogLTAuNXJlbTtcbiAgICAgIG1hcmdpbi10b3A6IC0wLjVyZW07XG5cbiAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IC0wLjVyZW07XG4gICAgICB9XG5cbiAgICAgICY6bm90KDpsYXN0LWNoaWxkKSB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAke21lZGlhRnVsbEhEfSB7XG4gICAgICBtYXJnaW4tbGVmdDogLTAuNzVyZW07XG4gICAgICBtYXJnaW4tcmlnaHQ6IC0wLjc1cmVtO1xuICAgICAgbWFyZ2luLXRvcDogLTAuNzVyZW07XG5cbiAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IC0wLjc1cmVtO1xuICAgICAgfVxuXG4gICAgICAmOm5vdCg6bGFzdC1jaGlsZCkge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjc1cmVtO1xuICAgICAgfVxuICAgIH1cbiAgYDtcbn1cblxuY29uc3QgUm93ID0gc3R5bGVkLmRpdjxQcm9wcz5gXG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICBmbGV4LXdyYXA6IHdyYXA7XG5cbiAgJHsoeyB2Y2VudGVyIH0pID0+IHZjZW50ZXIgPyAnYWxpZ24taXRlbXM6IGNlbnRlcjsnIDogJyd9XG4gICR7KHsgY2VudGVyIH0pID0+IGNlbnRlciA/ICdqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsnIDogJyd9XG5cbiAgJHtyZW5kZXJHdXR0ZXJ9XG5gO1xuXG5Sb3cuZGlzcGxheU5hbWUgPSAnUm93JztcblxuZXhwb3J0IGRlZmF1bHQgUm93O1xuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmNvbnN0IFByZSA9IHN0eWxlZC5wcmVgXG4gIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcbiAgb3ZlcmZsb3cteDogYXV0bztcbiAgcGFkZGluZzogMS4yNWVtIDEuNWVtO1xuICB3aGl0ZS1zcGFjZTogcHJlO1xuICB3b3JkLXdyYXA6IG5vcm1hbDtcblxuICAmOm5vdCg6bGFzdC1jaGlsZCkge1xuICAgIG1hcmdpbi1ib3R0b206IDFlbTtcbiAgfVxuYDtcblByZS5kaXNwbGF5TmFtZSA9ICdQcmUnO1xuXG5leHBvcnQgZGVmYXVsdCBQcmU7XG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuY29uc3QgQ29kZSA9IHN0eWxlZC5jb2RlYFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmJhY2tncm91bmR9O1xuICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5kYW5nZXJ9O1xuICBmb250LXNpemU6IC44NzVlbTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgcGFkZGluZzogLjI1ZW0gLjVlbSAuMjVlbTtcbmA7XG5cbkNvZGUuZGlzcGxheU5hbWUgPSAnQ29kZSc7XG5cbmV4cG9ydCBkZWZhdWx0IENvZGU7XG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuY29uc3QgSDEgPSBzdHlsZWQuaDFgXG4gIGZvbnQtc2l6ZTogMmVtO1xuICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcbiAgcGFkZGluZy1sZWZ0OiAxcmVtO1xuXG4gIGJvcmRlci1sZWZ0OiAxcmVtIHNvbGlkO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQ7XG4gIGJvcmRlci1jb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5ib3JkZXJ9O1xuYDtcbkgxLmRpc3BsYXlOYW1lID0gJ0gxJztcblxuZXhwb3J0IGRlZmF1bHQgSDE7XG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuY29uc3QgQ29udGVudCA9IHN0eWxlZC5kaXZgXG4gIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnRleHR9O1xuICBsaW5lLWhlaWdodDogMS41O1xuXG4gIGxpICsgbGkge1xuICAgIG1hcmdpbi10b3A6IDAuMjVlbTtcbiAgfVxuXG4gIHAsXG4gIGRsLFxuICBvbCxcbiAgdWwsXG4gIGJsb2NrcXVvdGUsXG4gIHByZSxcbiAgdGFibGUge1xuICAgICY6bm90KDpsYXN0LWNoaWxkKSB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxZW07XG4gICAgfVxuICB9XG5cbiAgaDEsXG4gIGgyLFxuICBoMyxcbiAgaDQsXG4gIGg1LFxuICBoNiB7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBsaW5lLWhlaWdodDogMS4xMjU7XG4gIH1cblxuICBoMSB7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDAuNWVtO1xuICB9XG5cbiAgaDIge1xuICAgIGZvbnQtc2l6ZTogMS43NWVtO1xuICAgIG1hcmdpbi1ib3R0b206IDAuNTcxNGVtO1xuXG4gICAgJjpub3QoOmZpcnN0LWNoaWxkKSB7XG4gICAgICBtYXJnaW4tdG9wOiAxLjE0MjhlbTtcbiAgICB9XG4gIH1cblxuICBoMyB7XG4gICAgZm9udC1zaXplOiAxLjVlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjY2NjZlbTtcblxuICAgICY6bm90KDpmaXJzdC1jaGlsZCkge1xuICAgICAgbWFyZ2luLXRvcDogMS4zMzMzZW07XG4gICAgfVxuICB9XG5cbiAgaDQge1xuICAgIGZvbnQtc2l6ZTogMS4yNWVtO1xuICAgIG1hcmdpbi1ib3R0b206IDAuOGVtO1xuICB9XG5cbiAgaDUge1xuICAgIGZvbnQtc2l6ZTogMS4xMjVlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjg4ODhlbTtcbiAgfVxuXG4gIGg2IHtcbiAgICBmb250LXNpemU6IDFlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XG4gIH1cblxuICBvbCB7XG4gICAgbGlzdC1zdHlsZTogZGVjaW1hbCBvdXRzaWRlO1xuICAgIG1hcmdpbi1sZWZ0OiAyZW07XG4gICAgbWFyZ2luLXRvcDogMWVtO1xuICB9XG5cbiAgdWwge1xuICAgIGxpc3Qtc3R5bGU6IGRpc2Mgb3V0c2lkZTtcbiAgICBtYXJnaW4tbGVmdDogMmVtO1xuICAgIG1hcmdpbi10b3A6IDFlbTtcbiAgICB1bCB7XG4gICAgICBsaXN0LXN0eWxlLXR5cGU6IGNpcmNsZTtcbiAgICAgIG1hcmdpbi10b3A6IDAuNWVtO1xuICAgICAgdWwge1xuICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IHNxdWFyZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBkZCB7XG4gICAgbWFyZ2luLWxlZnQ6IDJlbTtcbiAgfVxuXG4gIHRhYmxlIHtcbiAgICB3aWR0aDogMTAwJTtcblxuICAgIHRkLCB0aCB7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmJvcmRlcn07XG4gICAgICBib3JkZXItd2lkdGg6IDAgMCAxcHg7XG4gICAgICBwYWRkaW5nOiAwLjVlbSAwLjc1ZW07XG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgIH1cblxuICAgIHRoIHtcbiAgICAgIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnRleHR9O1xuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICB9XG5cbiAgICB0aGVhZCB7XG4gICAgICB0ZCwgdGgge1xuICAgICAgICBib3JkZXItd2lkdGg6IDAgMCAycHg7XG4gICAgICAgIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnRleHR9O1xuICAgICAgfVxuICAgIH1cblxuICAgIHRmb290IHtcbiAgICAgIHRkLCB0aCB7XG4gICAgICAgIGJvcmRlci13aWR0aDogMnB4IDAgMDtcbiAgICAgICAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUudGV4dH07XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGJvZHkgPiB0cjpsYXN0LWNoaWxke1xuICAgICAgdGQsIHRoIHtcbiAgICAgICAgYm9yZGVyLWJvdHRvbS13aWR0aDogMDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbmA7XG5Db250ZW50LmRpc3BsYXlOYW1lID0gJ0NvbnRlbnQnO1xuXG5leHBvcnQgeyBkZWZhdWx0IGFzIFByZSB9IGZyb20gJy4vUHJlJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQ29kZSB9IGZyb20gJy4vQ29kZSc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEgxIH0gZnJvbSAnLi9IMSc7XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRlbnQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IGN1cnJ5O1xuXG4vLyBUeXBlIGRlZmluaXRpb25zIHRha2VuIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL2djYW50aS9mbG93LXN0YXRpYy1sYW5kL2Jsb2IvbWFzdGVyL3NyYy9GdW4uanNcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVkZWNsYXJlXG5mdW5jdGlvbiBjdXJyaWVkKGYsIGxlbmd0aCwgYWNjKSB7XG4gIHJldHVybiBmdW5jdGlvbiBmbigpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLXJlc3QtcGFyYW1zXG4gICAgdmFyIGNvbWJpbmVkID0gYWNjLmNvbmNhdChBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpKTtcbiAgICByZXR1cm4gY29tYmluZWQubGVuZ3RoID49IGxlbmd0aCA/IGYuYXBwbHkodGhpcywgY29tYmluZWQpIDogY3VycmllZChmLCBsZW5ndGgsIGNvbWJpbmVkKTtcbiAgfTtcbn0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlZGVjbGFyZVxuXG5cbmZ1bmN0aW9uIGN1cnJ5KGYpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1yZWRlY2xhcmVcbiAgcmV0dXJuIGN1cnJpZWQoZiwgZi5sZW5ndGgsIFtdKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbmZ1bmN0aW9uIGd1YXJkKGxvd2VyQm91bmRhcnksIHVwcGVyQm91bmRhcnksIHZhbHVlKSB7XG4gIHJldHVybiBNYXRoLm1heChsb3dlckJvdW5kYXJ5LCBNYXRoLm1pbih1cHBlckJvdW5kYXJ5LCB2YWx1ZSkpO1xufVxuXG52YXIgX2RlZmF1bHQgPSBndWFyZDtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbmZ1bmN0aW9uIGNvbG9yVG9JbnQoY29sb3IpIHtcbiAgcmV0dXJuIE1hdGgucm91bmQoY29sb3IgKiAyNTUpO1xufVxuXG5mdW5jdGlvbiBjb252ZXJ0VG9JbnQocmVkLCBncmVlbiwgYmx1ZSkge1xuICByZXR1cm4gY29sb3JUb0ludChyZWQpICsgXCIsXCIgKyBjb2xvclRvSW50KGdyZWVuKSArIFwiLFwiICsgY29sb3JUb0ludChibHVlKTtcbn1cblxuZnVuY3Rpb24gaHNsVG9SZ2IoaHVlLCBzYXR1cmF0aW9uLCBsaWdodG5lc3MsIGNvbnZlcnQpIHtcbiAgaWYgKGNvbnZlcnQgPT09IHZvaWQgMCkge1xuICAgIGNvbnZlcnQgPSBjb252ZXJ0VG9JbnQ7XG4gIH1cblxuICBpZiAoc2F0dXJhdGlvbiA9PT0gMCkge1xuICAgIC8vIGFjaHJvbWF0aWNcbiAgICByZXR1cm4gY29udmVydChsaWdodG5lc3MsIGxpZ2h0bmVzcywgbGlnaHRuZXNzKTtcbiAgfSAvLyBmb3JtdWxhciBmcm9tIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0hTTF9hbmRfSFNWXG5cblxuICB2YXIgaHVlUHJpbWUgPSBodWUgJSAzNjAgLyA2MDtcbiAgdmFyIGNocm9tYSA9ICgxIC0gTWF0aC5hYnMoMiAqIGxpZ2h0bmVzcyAtIDEpKSAqIHNhdHVyYXRpb247XG4gIHZhciBzZWNvbmRDb21wb25lbnQgPSBjaHJvbWEgKiAoMSAtIE1hdGguYWJzKGh1ZVByaW1lICUgMiAtIDEpKTtcbiAgdmFyIHJlZCA9IDA7XG4gIHZhciBncmVlbiA9IDA7XG4gIHZhciBibHVlID0gMDtcblxuICBpZiAoaHVlUHJpbWUgPj0gMCAmJiBodWVQcmltZSA8IDEpIHtcbiAgICByZWQgPSBjaHJvbWE7XG4gICAgZ3JlZW4gPSBzZWNvbmRDb21wb25lbnQ7XG4gIH0gZWxzZSBpZiAoaHVlUHJpbWUgPj0gMSAmJiBodWVQcmltZSA8IDIpIHtcbiAgICByZWQgPSBzZWNvbmRDb21wb25lbnQ7XG4gICAgZ3JlZW4gPSBjaHJvbWE7XG4gIH0gZWxzZSBpZiAoaHVlUHJpbWUgPj0gMiAmJiBodWVQcmltZSA8IDMpIHtcbiAgICBncmVlbiA9IGNocm9tYTtcbiAgICBibHVlID0gc2Vjb25kQ29tcG9uZW50O1xuICB9IGVsc2UgaWYgKGh1ZVByaW1lID49IDMgJiYgaHVlUHJpbWUgPCA0KSB7XG4gICAgZ3JlZW4gPSBzZWNvbmRDb21wb25lbnQ7XG4gICAgYmx1ZSA9IGNocm9tYTtcbiAgfSBlbHNlIGlmIChodWVQcmltZSA+PSA0ICYmIGh1ZVByaW1lIDwgNSkge1xuICAgIHJlZCA9IHNlY29uZENvbXBvbmVudDtcbiAgICBibHVlID0gY2hyb21hO1xuICB9IGVsc2UgaWYgKGh1ZVByaW1lID49IDUgJiYgaHVlUHJpbWUgPCA2KSB7XG4gICAgcmVkID0gY2hyb21hO1xuICAgIGJsdWUgPSBzZWNvbmRDb21wb25lbnQ7XG4gIH1cblxuICB2YXIgbGlnaHRuZXNzTW9kaWZpY2F0aW9uID0gbGlnaHRuZXNzIC0gY2hyb21hIC8gMjtcbiAgdmFyIGZpbmFsUmVkID0gcmVkICsgbGlnaHRuZXNzTW9kaWZpY2F0aW9uO1xuICB2YXIgZmluYWxHcmVlbiA9IGdyZWVuICsgbGlnaHRuZXNzTW9kaWZpY2F0aW9uO1xuICB2YXIgZmluYWxCbHVlID0gYmx1ZSArIGxpZ2h0bmVzc01vZGlmaWNhdGlvbjtcbiAgcmV0dXJuIGNvbnZlcnQoZmluYWxSZWQsIGZpbmFsR3JlZW4sIGZpbmFsQmx1ZSk7XG59XG5cbnZhciBfZGVmYXVsdCA9IGhzbFRvUmdiO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBuYW1lZENvbG9yTWFwID0ge1xuICBhbGljZWJsdWU6ICdmMGY4ZmYnLFxuICBhbnRpcXVld2hpdGU6ICdmYWViZDcnLFxuICBhcXVhOiAnMDBmZmZmJyxcbiAgYXF1YW1hcmluZTogJzdmZmZkNCcsXG4gIGF6dXJlOiAnZjBmZmZmJyxcbiAgYmVpZ2U6ICdmNWY1ZGMnLFxuICBiaXNxdWU6ICdmZmU0YzQnLFxuICBibGFjazogJzAwMCcsXG4gIGJsYW5jaGVkYWxtb25kOiAnZmZlYmNkJyxcbiAgYmx1ZTogJzAwMDBmZicsXG4gIGJsdWV2aW9sZXQ6ICc4YTJiZTInLFxuICBicm93bjogJ2E1MmEyYScsXG4gIGJ1cmx5d29vZDogJ2RlYjg4NycsXG4gIGNhZGV0Ymx1ZTogJzVmOWVhMCcsXG4gIGNoYXJ0cmV1c2U6ICc3ZmZmMDAnLFxuICBjaG9jb2xhdGU6ICdkMjY5MWUnLFxuICBjb3JhbDogJ2ZmN2Y1MCcsXG4gIGNvcm5mbG93ZXJibHVlOiAnNjQ5NWVkJyxcbiAgY29ybnNpbGs6ICdmZmY4ZGMnLFxuICBjcmltc29uOiAnZGMxNDNjJyxcbiAgY3lhbjogJzAwZmZmZicsXG4gIGRhcmtibHVlOiAnMDAwMDhiJyxcbiAgZGFya2N5YW46ICcwMDhiOGInLFxuICBkYXJrZ29sZGVucm9kOiAnYjg4NjBiJyxcbiAgZGFya2dyYXk6ICdhOWE5YTknLFxuICBkYXJrZ3JlZW46ICcwMDY0MDAnLFxuICBkYXJrZ3JleTogJ2E5YTlhOScsXG4gIGRhcmtraGFraTogJ2JkYjc2YicsXG4gIGRhcmttYWdlbnRhOiAnOGIwMDhiJyxcbiAgZGFya29saXZlZ3JlZW46ICc1NTZiMmYnLFxuICBkYXJrb3JhbmdlOiAnZmY4YzAwJyxcbiAgZGFya29yY2hpZDogJzk5MzJjYycsXG4gIGRhcmtyZWQ6ICc4YjAwMDAnLFxuICBkYXJrc2FsbW9uOiAnZTk5NjdhJyxcbiAgZGFya3NlYWdyZWVuOiAnOGZiYzhmJyxcbiAgZGFya3NsYXRlYmx1ZTogJzQ4M2Q4YicsXG4gIGRhcmtzbGF0ZWdyYXk6ICcyZjRmNGYnLFxuICBkYXJrc2xhdGVncmV5OiAnMmY0ZjRmJyxcbiAgZGFya3R1cnF1b2lzZTogJzAwY2VkMScsXG4gIGRhcmt2aW9sZXQ6ICc5NDAwZDMnLFxuICBkZWVwcGluazogJ2ZmMTQ5MycsXG4gIGRlZXBza3libHVlOiAnMDBiZmZmJyxcbiAgZGltZ3JheTogJzY5Njk2OScsXG4gIGRpbWdyZXk6ICc2OTY5NjknLFxuICBkb2RnZXJibHVlOiAnMWU5MGZmJyxcbiAgZmlyZWJyaWNrOiAnYjIyMjIyJyxcbiAgZmxvcmFsd2hpdGU6ICdmZmZhZjAnLFxuICBmb3Jlc3RncmVlbjogJzIyOGIyMicsXG4gIGZ1Y2hzaWE6ICdmZjAwZmYnLFxuICBnYWluc2Jvcm86ICdkY2RjZGMnLFxuICBnaG9zdHdoaXRlOiAnZjhmOGZmJyxcbiAgZ29sZDogJ2ZmZDcwMCcsXG4gIGdvbGRlbnJvZDogJ2RhYTUyMCcsXG4gIGdyYXk6ICc4MDgwODAnLFxuICBncmVlbjogJzAwODAwMCcsXG4gIGdyZWVueWVsbG93OiAnYWRmZjJmJyxcbiAgZ3JleTogJzgwODA4MCcsXG4gIGhvbmV5ZGV3OiAnZjBmZmYwJyxcbiAgaG90cGluazogJ2ZmNjliNCcsXG4gIGluZGlhbnJlZDogJ2NkNWM1YycsXG4gIGluZGlnbzogJzRiMDA4MicsXG4gIGl2b3J5OiAnZmZmZmYwJyxcbiAga2hha2k6ICdmMGU2OGMnLFxuICBsYXZlbmRlcjogJ2U2ZTZmYScsXG4gIGxhdmVuZGVyYmx1c2g6ICdmZmYwZjUnLFxuICBsYXduZ3JlZW46ICc3Y2ZjMDAnLFxuICBsZW1vbmNoaWZmb246ICdmZmZhY2QnLFxuICBsaWdodGJsdWU6ICdhZGQ4ZTYnLFxuICBsaWdodGNvcmFsOiAnZjA4MDgwJyxcbiAgbGlnaHRjeWFuOiAnZTBmZmZmJyxcbiAgbGlnaHRnb2xkZW5yb2R5ZWxsb3c6ICdmYWZhZDInLFxuICBsaWdodGdyYXk6ICdkM2QzZDMnLFxuICBsaWdodGdyZWVuOiAnOTBlZTkwJyxcbiAgbGlnaHRncmV5OiAnZDNkM2QzJyxcbiAgbGlnaHRwaW5rOiAnZmZiNmMxJyxcbiAgbGlnaHRzYWxtb246ICdmZmEwN2EnLFxuICBsaWdodHNlYWdyZWVuOiAnMjBiMmFhJyxcbiAgbGlnaHRza3libHVlOiAnODdjZWZhJyxcbiAgbGlnaHRzbGF0ZWdyYXk6ICc3ODknLFxuICBsaWdodHNsYXRlZ3JleTogJzc4OScsXG4gIGxpZ2h0c3RlZWxibHVlOiAnYjBjNGRlJyxcbiAgbGlnaHR5ZWxsb3c6ICdmZmZmZTAnLFxuICBsaW1lOiAnMGYwJyxcbiAgbGltZWdyZWVuOiAnMzJjZDMyJyxcbiAgbGluZW46ICdmYWYwZTYnLFxuICBtYWdlbnRhOiAnZjBmJyxcbiAgbWFyb29uOiAnODAwMDAwJyxcbiAgbWVkaXVtYXF1YW1hcmluZTogJzY2Y2RhYScsXG4gIG1lZGl1bWJsdWU6ICcwMDAwY2QnLFxuICBtZWRpdW1vcmNoaWQ6ICdiYTU1ZDMnLFxuICBtZWRpdW1wdXJwbGU6ICc5MzcwZGInLFxuICBtZWRpdW1zZWFncmVlbjogJzNjYjM3MScsXG4gIG1lZGl1bXNsYXRlYmx1ZTogJzdiNjhlZScsXG4gIG1lZGl1bXNwcmluZ2dyZWVuOiAnMDBmYTlhJyxcbiAgbWVkaXVtdHVycXVvaXNlOiAnNDhkMWNjJyxcbiAgbWVkaXVtdmlvbGV0cmVkOiAnYzcxNTg1JyxcbiAgbWlkbmlnaHRibHVlOiAnMTkxOTcwJyxcbiAgbWludGNyZWFtOiAnZjVmZmZhJyxcbiAgbWlzdHlyb3NlOiAnZmZlNGUxJyxcbiAgbW9jY2FzaW46ICdmZmU0YjUnLFxuICBuYXZham93aGl0ZTogJ2ZmZGVhZCcsXG4gIG5hdnk6ICcwMDAwODAnLFxuICBvbGRsYWNlOiAnZmRmNWU2JyxcbiAgb2xpdmU6ICc4MDgwMDAnLFxuICBvbGl2ZWRyYWI6ICc2YjhlMjMnLFxuICBvcmFuZ2U6ICdmZmE1MDAnLFxuICBvcmFuZ2VyZWQ6ICdmZjQ1MDAnLFxuICBvcmNoaWQ6ICdkYTcwZDYnLFxuICBwYWxlZ29sZGVucm9kOiAnZWVlOGFhJyxcbiAgcGFsZWdyZWVuOiAnOThmYjk4JyxcbiAgcGFsZXR1cnF1b2lzZTogJ2FmZWVlZScsXG4gIHBhbGV2aW9sZXRyZWQ6ICdkYjcwOTMnLFxuICBwYXBheWF3aGlwOiAnZmZlZmQ1JyxcbiAgcGVhY2hwdWZmOiAnZmZkYWI5JyxcbiAgcGVydTogJ2NkODUzZicsXG4gIHBpbms6ICdmZmMwY2InLFxuICBwbHVtOiAnZGRhMGRkJyxcbiAgcG93ZGVyYmx1ZTogJ2IwZTBlNicsXG4gIHB1cnBsZTogJzgwMDA4MCcsXG4gIHJlYmVjY2FwdXJwbGU6ICc2MzknLFxuICByZWQ6ICdmMDAnLFxuICByb3N5YnJvd246ICdiYzhmOGYnLFxuICByb3lhbGJsdWU6ICc0MTY5ZTEnLFxuICBzYWRkbGVicm93bjogJzhiNDUxMycsXG4gIHNhbG1vbjogJ2ZhODA3MicsXG4gIHNhbmR5YnJvd246ICdmNGE0NjAnLFxuICBzZWFncmVlbjogJzJlOGI1NycsXG4gIHNlYXNoZWxsOiAnZmZmNWVlJyxcbiAgc2llbm5hOiAnYTA1MjJkJyxcbiAgc2lsdmVyOiAnYzBjMGMwJyxcbiAgc2t5Ymx1ZTogJzg3Y2VlYicsXG4gIHNsYXRlYmx1ZTogJzZhNWFjZCcsXG4gIHNsYXRlZ3JheTogJzcwODA5MCcsXG4gIHNsYXRlZ3JleTogJzcwODA5MCcsXG4gIHNub3c6ICdmZmZhZmEnLFxuICBzcHJpbmdncmVlbjogJzAwZmY3ZicsXG4gIHN0ZWVsYmx1ZTogJzQ2ODJiNCcsXG4gIHRhbjogJ2QyYjQ4YycsXG4gIHRlYWw6ICcwMDgwODAnLFxuICB0aGlzdGxlOiAnZDhiZmQ4JyxcbiAgdG9tYXRvOiAnZmY2MzQ3JyxcbiAgdHVycXVvaXNlOiAnNDBlMGQwJyxcbiAgdmlvbGV0OiAnZWU4MmVlJyxcbiAgd2hlYXQ6ICdmNWRlYjMnLFxuICB3aGl0ZTogJ2ZmZicsXG4gIHdoaXRlc21va2U6ICdmNWY1ZjUnLFxuICB5ZWxsb3c6ICdmZjAnLFxuICB5ZWxsb3dncmVlbjogJzlhY2QzMidcbiAgLyoqXG4gICAqIENoZWNrcyBpZiBhIHN0cmluZyBpcyBhIENTUyBuYW1lZCBjb2xvciBhbmQgcmV0dXJucyBpdHMgZXF1aXZhbGVudCBoZXggdmFsdWUsIG90aGVyd2lzZSByZXR1cm5zIHRoZSBvcmlnaW5hbCBjb2xvci5cbiAgICogQHByaXZhdGVcbiAgICovXG5cbn07XG5cbmZ1bmN0aW9uIG5hbWVUb0hleChjb2xvcikge1xuICBpZiAodHlwZW9mIGNvbG9yICE9PSAnc3RyaW5nJykgcmV0dXJuIGNvbG9yO1xuICB2YXIgbm9ybWFsaXplZENvbG9yTmFtZSA9IGNvbG9yLnRvTG93ZXJDYXNlKCk7XG4gIHJldHVybiBuYW1lZENvbG9yTWFwW25vcm1hbGl6ZWRDb2xvck5hbWVdID8gXCIjXCIgKyBuYW1lZENvbG9yTWFwW25vcm1hbGl6ZWRDb2xvck5hbWVdIDogY29sb3I7XG59XG5cbnZhciBfZGVmYXVsdCA9IG5hbWVUb0hleDtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHNMb29zZShzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MucHJvdG90eXBlKTsgc3ViQ2xhc3MucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gc3ViQ2xhc3M7IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxuZnVuY3Rpb24gX3dyYXBOYXRpdmVTdXBlcihDbGFzcykgeyB2YXIgX2NhY2hlID0gdHlwZW9mIE1hcCA9PT0gXCJmdW5jdGlvblwiID8gbmV3IE1hcCgpIDogdW5kZWZpbmVkOyBfd3JhcE5hdGl2ZVN1cGVyID0gZnVuY3Rpb24gX3dyYXBOYXRpdmVTdXBlcihDbGFzcykgeyBpZiAoQ2xhc3MgPT09IG51bGwgfHwgIV9pc05hdGl2ZUZ1bmN0aW9uKENsYXNzKSkgcmV0dXJuIENsYXNzOyBpZiAodHlwZW9mIENsYXNzICE9PSBcImZ1bmN0aW9uXCIpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpOyB9IGlmICh0eXBlb2YgX2NhY2hlICE9PSBcInVuZGVmaW5lZFwiKSB7IGlmIChfY2FjaGUuaGFzKENsYXNzKSkgcmV0dXJuIF9jYWNoZS5nZXQoQ2xhc3MpOyBfY2FjaGUuc2V0KENsYXNzLCBXcmFwcGVyKTsgfSBmdW5jdGlvbiBXcmFwcGVyKCkgeyByZXR1cm4gX2NvbnN0cnVjdChDbGFzcywgYXJndW1lbnRzLCBfZ2V0UHJvdG90eXBlT2YodGhpcykuY29uc3RydWN0b3IpOyB9IFdyYXBwZXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IFdyYXBwZXIsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IHJldHVybiBfc2V0UHJvdG90eXBlT2YoV3JhcHBlciwgQ2xhc3MpOyB9OyByZXR1cm4gX3dyYXBOYXRpdmVTdXBlcihDbGFzcyk7IH1cblxuZnVuY3Rpb24gaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkgeyBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwidW5kZWZpbmVkXCIgfHwgIVJlZmxlY3QuY29uc3RydWN0KSByZXR1cm4gZmFsc2U7IGlmIChSZWZsZWN0LmNvbnN0cnVjdC5zaGFtKSByZXR1cm4gZmFsc2U7IGlmICh0eXBlb2YgUHJveHkgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHRydWU7IHRyeSB7IERhdGUucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoRGF0ZSwgW10sIGZ1bmN0aW9uICgpIHt9KSk7IHJldHVybiB0cnVlOyB9IGNhdGNoIChlKSB7IHJldHVybiBmYWxzZTsgfSB9XG5cbmZ1bmN0aW9uIF9jb25zdHJ1Y3QoUGFyZW50LCBhcmdzLCBDbGFzcykgeyBpZiAoaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkpIHsgX2NvbnN0cnVjdCA9IFJlZmxlY3QuY29uc3RydWN0OyB9IGVsc2UgeyBfY29uc3RydWN0ID0gZnVuY3Rpb24gX2NvbnN0cnVjdChQYXJlbnQsIGFyZ3MsIENsYXNzKSB7IHZhciBhID0gW251bGxdOyBhLnB1c2guYXBwbHkoYSwgYXJncyk7IHZhciBDb25zdHJ1Y3RvciA9IEZ1bmN0aW9uLmJpbmQuYXBwbHkoUGFyZW50LCBhKTsgdmFyIGluc3RhbmNlID0gbmV3IENvbnN0cnVjdG9yKCk7IGlmIChDbGFzcykgX3NldFByb3RvdHlwZU9mKGluc3RhbmNlLCBDbGFzcy5wcm90b3R5cGUpOyByZXR1cm4gaW5zdGFuY2U7IH07IH0gcmV0dXJuIF9jb25zdHJ1Y3QuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsgfVxuXG5mdW5jdGlvbiBfaXNOYXRpdmVGdW5jdGlvbihmbikgeyByZXR1cm4gRnVuY3Rpb24udG9TdHJpbmcuY2FsbChmbikuaW5kZXhPZihcIltuYXRpdmUgY29kZV1cIikgIT09IC0xOyB9XG5cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBvLl9fcHJvdG9fXyA9IHA7IHJldHVybiBvOyB9OyByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApOyB9XG5cbmZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7IH07IHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7IH1cblxuLy8gYmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL3N0eWxlZC1jb21wb25lbnRzL3N0eWxlZC1jb21wb25lbnRzL2Jsb2IvZmNmNmYzODA0YzU3YTE0ZGQ3OTg0ZGZhYjdiYzA2ZWUyZWRjYTA0NC9zcmMvdXRpbHMvZXJyb3IuanNcblxuLyoqXG4gKiBQYXJzZSBlcnJvcnMubWQgYW5kIHR1cm4gaXQgaW50byBhIHNpbXBsZSBoYXNoIG9mIGNvZGU6IG1lc3NhZ2VcbiAqIEBwcml2YXRlXG4gKi9cbnZhciBFUlJPUlMgPSB7XG4gIFwiMVwiOiBcIlBhc3NlZCBpbnZhbGlkIGFyZ3VtZW50cyB0byBoc2wsIHBsZWFzZSBwYXNzIG11bHRpcGxlIG51bWJlcnMgZS5nLiBoc2woMzYwLCAwLjc1LCAwLjQpIG9yIGFuIG9iamVjdCBlLmcuIHJnYih7IGh1ZTogMjU1LCBzYXR1cmF0aW9uOiAwLjQsIGxpZ2h0bmVzczogMC43NSB9KS5cXG5cXG5cIixcbiAgXCIyXCI6IFwiUGFzc2VkIGludmFsaWQgYXJndW1lbnRzIHRvIGhzbGEsIHBsZWFzZSBwYXNzIG11bHRpcGxlIG51bWJlcnMgZS5nLiBoc2xhKDM2MCwgMC43NSwgMC40LCAwLjcpIG9yIGFuIG9iamVjdCBlLmcuIHJnYih7IGh1ZTogMjU1LCBzYXR1cmF0aW9uOiAwLjQsIGxpZ2h0bmVzczogMC43NSwgYWxwaGE6IDAuNyB9KS5cXG5cXG5cIixcbiAgXCIzXCI6IFwiUGFzc2VkIGFuIGluY29ycmVjdCBhcmd1bWVudCB0byBhIGNvbG9yIGZ1bmN0aW9uLCBwbGVhc2UgcGFzcyBhIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiBhIGNvbG9yLlxcblxcblwiLFxuICBcIjRcIjogXCJDb3VsZG4ndCBnZW5lcmF0ZSB2YWxpZCByZ2Igc3RyaW5nIGZyb20gJXMsIGl0IHJldHVybmVkICVzLlxcblxcblwiLFxuICBcIjVcIjogXCJDb3VsZG4ndCBwYXJzZSB0aGUgY29sb3Igc3RyaW5nLiBQbGVhc2UgcHJvdmlkZSB0aGUgY29sb3IgYXMgYSBzdHJpbmcgaW4gaGV4LCByZ2IsIHJnYmEsIGhzbCBvciBoc2xhIG5vdGF0aW9uLlxcblxcblwiLFxuICBcIjZcIjogXCJQYXNzZWQgaW52YWxpZCBhcmd1bWVudHMgdG8gcmdiLCBwbGVhc2UgcGFzcyBtdWx0aXBsZSBudW1iZXJzIGUuZy4gcmdiKDI1NSwgMjA1LCAxMDApIG9yIGFuIG9iamVjdCBlLmcuIHJnYih7IHJlZDogMjU1LCBncmVlbjogMjA1LCBibHVlOiAxMDAgfSkuXFxuXFxuXCIsXG4gIFwiN1wiOiBcIlBhc3NlZCBpbnZhbGlkIGFyZ3VtZW50cyB0byByZ2JhLCBwbGVhc2UgcGFzcyBtdWx0aXBsZSBudW1iZXJzIGUuZy4gcmdiKDI1NSwgMjA1LCAxMDAsIDAuNzUpIG9yIGFuIG9iamVjdCBlLmcuIHJnYih7IHJlZDogMjU1LCBncmVlbjogMjA1LCBibHVlOiAxMDAsIGFscGhhOiAwLjc1IH0pLlxcblxcblwiLFxuICBcIjhcIjogXCJQYXNzZWQgaW52YWxpZCBhcmd1bWVudCB0byB0b0NvbG9yU3RyaW5nLCBwbGVhc2UgcGFzcyBhIFJnYkNvbG9yLCBSZ2JhQ29sb3IsIEhzbENvbG9yIG9yIEhzbGFDb2xvciBvYmplY3QuXFxuXFxuXCIsXG4gIFwiOVwiOiBcIlBsZWFzZSBwcm92aWRlIGEgbnVtYmVyIG9mIHN0ZXBzIHRvIHRoZSBtb2R1bGFyU2NhbGUgaGVscGVyLlxcblxcblwiLFxuICBcIjEwXCI6IFwiUGxlYXNlIHBhc3MgYSBudW1iZXIgb3Igb25lIG9mIHRoZSBwcmVkZWZpbmVkIHNjYWxlcyB0byB0aGUgbW9kdWxhclNjYWxlIGhlbHBlciBhcyB0aGUgcmF0aW8uXFxuXFxuXCIsXG4gIFwiMTFcIjogXCJJbnZhbGlkIHZhbHVlIHBhc3NlZCBhcyBiYXNlIHRvIG1vZHVsYXJTY2FsZSwgZXhwZWN0ZWQgbnVtYmVyIG9yIGVtIHN0cmluZyBidXQgZ290IFxcXCIlc1xcXCJcXG5cXG5cIixcbiAgXCIxMlwiOiBcIkV4cGVjdGVkIGEgc3RyaW5nIGVuZGluZyBpbiBcXFwicHhcXFwiIG9yIGEgbnVtYmVyIHBhc3NlZCBhcyB0aGUgZmlyc3QgYXJndW1lbnQgdG8gJXMoKSwgZ290IFxcXCIlc1xcXCIgaW5zdGVhZC5cXG5cXG5cIixcbiAgXCIxM1wiOiBcIkV4cGVjdGVkIGEgc3RyaW5nIGVuZGluZyBpbiBcXFwicHhcXFwiIG9yIGEgbnVtYmVyIHBhc3NlZCBhcyB0aGUgc2Vjb25kIGFyZ3VtZW50IHRvICVzKCksIGdvdCBcXFwiJXNcXFwiIGluc3RlYWQuXFxuXFxuXCIsXG4gIFwiMTRcIjogXCJQYXNzZWQgaW52YWxpZCBwaXhlbCB2YWx1ZSAoXFxcIiVzXFxcIikgdG8gJXMoKSwgcGxlYXNlIHBhc3MgYSB2YWx1ZSBsaWtlIFxcXCIxMnB4XFxcIiBvciAxMi5cXG5cXG5cIixcbiAgXCIxNVwiOiBcIlBhc3NlZCBpbnZhbGlkIGJhc2UgdmFsdWUgKFxcXCIlc1xcXCIpIHRvICVzKCksIHBsZWFzZSBwYXNzIGEgdmFsdWUgbGlrZSBcXFwiMTJweFxcXCIgb3IgMTIuXFxuXFxuXCIsXG4gIFwiMTZcIjogXCJZb3UgbXVzdCBwcm92aWRlIGEgdGVtcGxhdGUgdG8gdGhpcyBtZXRob2QuXFxuXFxuXCIsXG4gIFwiMTdcIjogXCJZb3UgcGFzc2VkIGFuIHVuc3VwcG9ydGVkIHNlbGVjdG9yIHN0YXRlIHRvIHRoaXMgbWV0aG9kLlxcblxcblwiLFxuICBcIjE4XCI6IFwibWluU2NyZWVuIGFuZCBtYXhTY3JlZW4gbXVzdCBiZSBwcm92aWRlZCBhcyBzdHJpbmdpZmllZCBudW1iZXJzIHdpdGggdGhlIHNhbWUgdW5pdHMuXFxuXFxuXCIsXG4gIFwiMTlcIjogXCJmcm9tU2l6ZSBhbmQgdG9TaXplIG11c3QgYmUgcHJvdmlkZWQgYXMgc3RyaW5naWZpZWQgbnVtYmVycyB3aXRoIHRoZSBzYW1lIHVuaXRzLlxcblxcblwiLFxuICBcIjIwXCI6IFwiZXhwZWN0cyBlaXRoZXIgYW4gYXJyYXkgb2Ygb2JqZWN0cyBvciBhIHNpbmdsZSBvYmplY3Qgd2l0aCB0aGUgcHJvcGVydGllcyBwcm9wLCBmcm9tU2l6ZSwgYW5kIHRvU2l6ZS5cXG5cXG5cIixcbiAgXCIyMVwiOiBcImV4cGVjdHMgdGhlIG9iamVjdHMgaW4gdGhlIGZpcnN0IGFyZ3VtZW50IGFycmF5IHRvIGhhdmUgdGhlIHByb3BlcnRpZXMgYHByb3BgLCBgZnJvbVNpemVgLCBhbmQgYHRvU2l6ZWAuXFxuXFxuXCIsXG4gIFwiMjJcIjogXCJleHBlY3RzIHRoZSBmaXJzdCBhcmd1bWVudCBvYmplY3QgdG8gaGF2ZSB0aGUgcHJvcGVydGllcyBgcHJvcGAsIGBmcm9tU2l6ZWAsIGFuZCBgdG9TaXplYC5cXG5cXG5cIixcbiAgXCIyM1wiOiBcImZvbnRGYWNlIGV4cGVjdHMgYSBuYW1lIG9mIGEgZm9udC1mYW1pbHkuXFxuXFxuXCIsXG4gIFwiMjRcIjogXCJmb250RmFjZSBleHBlY3RzIGVpdGhlciB0aGUgcGF0aCB0byB0aGUgZm9udCBmaWxlKHMpIG9yIGEgbmFtZSBvZiBhIGxvY2FsIGNvcHkuXFxuXFxuXCIsXG4gIFwiMjVcIjogXCJmb250RmFjZSBleHBlY3RzIGxvY2FsRm9udHMgdG8gYmUgYW4gYXJyYXkuXFxuXFxuXCIsXG4gIFwiMjZcIjogXCJmb250RmFjZSBleHBlY3RzIGZpbGVGb3JtYXRzIHRvIGJlIGFuIGFycmF5LlxcblxcblwiLFxuICBcIjI3XCI6IFwicmFkaWFsR3JhZGllbnQgcmVxdXJpZXMgYXQgbGVhc3QgMiBjb2xvci1zdG9wcyB0byBwcm9wZXJseSByZW5kZXIuXFxuXFxuXCIsXG4gIFwiMjhcIjogXCJQbGVhc2Ugc3VwcGx5IGEgZmlsZW5hbWUgdG8gcmV0aW5hSW1hZ2UoKSBhcyB0aGUgZmlyc3QgYXJndW1lbnQuXFxuXFxuXCIsXG4gIFwiMjlcIjogXCJQYXNzZWQgaW52YWxpZCBhcmd1bWVudCB0byB0cmlhbmdsZSwgcGxlYXNlIHBhc3MgY29ycmVjdCBwb2ludGluZ0RpcmVjdGlvbiBlLmcuICdyaWdodCcuXFxuXFxuXCIsXG4gIFwiMzBcIjogXCJQYXNzZWQgYW4gaW52YWxpZCB2YWx1ZSB0byBgaGVpZ2h0YCBvciBgd2lkdGhgLiBQbGVhc2UgcHJvdmlkZSBhIHBpeGVsIGJhc2VkIHVuaXQuXFxuXFxuXCIsXG4gIFwiMzFcIjogXCJUaGUgYW5pbWF0aW9uIHNob3J0aGFuZCBvbmx5IHRha2VzIDggYXJndW1lbnRzLiBTZWUgdGhlIHNwZWNpZmljYXRpb24gZm9yIG1vcmUgaW5mb3JtYXRpb246IGh0dHA6Ly9tZG4uaW8vYW5pbWF0aW9uXFxuXFxuXCIsXG4gIFwiMzJcIjogXCJUbyBwYXNzIG11bHRpcGxlIGFuaW1hdGlvbnMgcGxlYXNlIHN1cHBseSB0aGVtIGluIGFycmF5cywgZS5nLiBhbmltYXRpb24oWydyb3RhdGUnLCAnMnMnXSwgWydtb3ZlJywgJzFzJ10pXFxuVG8gcGFzcyBhIHNpbmdsZSBhbmltYXRpb24gcGxlYXNlIHN1cHBseSB0aGVtIGluIHNpbXBsZSB2YWx1ZXMsIGUuZy4gYW5pbWF0aW9uKCdyb3RhdGUnLCAnMnMnKVxcblxcblwiLFxuICBcIjMzXCI6IFwiVGhlIGFuaW1hdGlvbiBzaG9ydGhhbmQgYXJyYXlzIGNhbiBvbmx5IGhhdmUgOCBlbGVtZW50cy4gU2VlIHRoZSBzcGVjaWZpY2F0aW9uIGZvciBtb3JlIGluZm9ybWF0aW9uOiBodHRwOi8vbWRuLmlvL2FuaW1hdGlvblxcblxcblwiLFxuICBcIjM0XCI6IFwiYm9yZGVyUmFkaXVzIGV4cGVjdHMgYSByYWRpdXMgdmFsdWUgYXMgYSBzdHJpbmcgb3IgbnVtYmVyIGFzIHRoZSBzZWNvbmQgYXJndW1lbnQuXFxuXFxuXCIsXG4gIFwiMzVcIjogXCJib3JkZXJSYWRpdXMgZXhwZWN0cyBvbmUgb2YgXFxcInRvcFxcXCIsIFxcXCJib3R0b21cXFwiLCBcXFwibGVmdFxcXCIgb3IgXFxcInJpZ2h0XFxcIiBhcyB0aGUgZmlyc3QgYXJndW1lbnQuXFxuXFxuXCIsXG4gIFwiMzZcIjogXCJQcm9wZXJ0eSBtdXN0IGJlIGEgc3RyaW5nIHZhbHVlLlxcblxcblwiLFxuICBcIjM3XCI6IFwiU3ludGF4IEVycm9yIGF0ICVzLlxcblxcblwiLFxuICBcIjM4XCI6IFwiRm9ybXVsYSBjb250YWlucyBhIGZ1bmN0aW9uIHRoYXQgbmVlZHMgcGFyZW50aGVzZXMgYXQgJXMuXFxuXFxuXCIsXG4gIFwiMzlcIjogXCJGb3JtdWxhIGlzIG1pc3NpbmcgY2xvc2luZyBwYXJlbnRoZXNpcyBhdCAlcy5cXG5cXG5cIixcbiAgXCI0MFwiOiBcIkZvcm11bGEgaGFzIHRvbyBtYW55IGNsb3NpbmcgcGFyZW50aGVzZXMgYXQgJXMuXFxuXFxuXCIsXG4gIFwiNDFcIjogXCJBbGwgdmFsdWVzIGluIGEgZm9ybXVsYSBtdXN0IGhhdmUgdGhlIHNhbWUgdW5pdCBvciBiZSB1bml0bGVzcy5cXG5cXG5cIixcbiAgXCI0MlwiOiBcIlBsZWFzZSBwcm92aWRlIGEgbnVtYmVyIG9mIHN0ZXBzIHRvIHRoZSBtb2R1bGFyU2NhbGUgaGVscGVyLlxcblxcblwiLFxuICBcIjQzXCI6IFwiUGxlYXNlIHBhc3MgYSBudW1iZXIgb3Igb25lIG9mIHRoZSBwcmVkZWZpbmVkIHNjYWxlcyB0byB0aGUgbW9kdWxhclNjYWxlIGhlbHBlciBhcyB0aGUgcmF0aW8uXFxuXFxuXCIsXG4gIFwiNDRcIjogXCJJbnZhbGlkIHZhbHVlIHBhc3NlZCBhcyBiYXNlIHRvIG1vZHVsYXJTY2FsZSwgZXhwZWN0ZWQgbnVtYmVyIG9yIGVtL3JlbSBzdHJpbmcgYnV0IGdvdCAlcy5cXG5cXG5cIixcbiAgXCI0NVwiOiBcIlBhc3NlZCBpbnZhbGlkIGFyZ3VtZW50IHRvIGhzbFRvQ29sb3JTdHJpbmcsIHBsZWFzZSBwYXNzIGEgSHNsQ29sb3Igb3IgSHNsYUNvbG9yIG9iamVjdC5cXG5cXG5cIixcbiAgXCI0NlwiOiBcIlBhc3NlZCBpbnZhbGlkIGFyZ3VtZW50IHRvIHJnYlRvQ29sb3JTdHJpbmcsIHBsZWFzZSBwYXNzIGEgUmdiQ29sb3Igb3IgUmdiYUNvbG9yIG9iamVjdC5cXG5cXG5cIixcbiAgXCI0N1wiOiBcIm1pblNjcmVlbiBhbmQgbWF4U2NyZWVuIG11c3QgYmUgcHJvdmlkZWQgYXMgc3RyaW5naWZpZWQgbnVtYmVycyB3aXRoIHRoZSBzYW1lIHVuaXRzLlxcblxcblwiLFxuICBcIjQ4XCI6IFwiZnJvbVNpemUgYW5kIHRvU2l6ZSBtdXN0IGJlIHByb3ZpZGVkIGFzIHN0cmluZ2lmaWVkIG51bWJlcnMgd2l0aCB0aGUgc2FtZSB1bml0cy5cXG5cXG5cIixcbiAgXCI0OVwiOiBcIkV4cGVjdHMgZWl0aGVyIGFuIGFycmF5IG9mIG9iamVjdHMgb3IgYSBzaW5nbGUgb2JqZWN0IHdpdGggdGhlIHByb3BlcnRpZXMgcHJvcCwgZnJvbVNpemUsIGFuZCB0b1NpemUuXFxuXFxuXCIsXG4gIFwiNTBcIjogXCJFeHBlY3RzIHRoZSBvYmplY3RzIGluIHRoZSBmaXJzdCBhcmd1bWVudCBhcnJheSB0byBoYXZlIHRoZSBwcm9wZXJ0aWVzIHByb3AsIGZyb21TaXplLCBhbmQgdG9TaXplLlxcblxcblwiLFxuICBcIjUxXCI6IFwiRXhwZWN0cyB0aGUgZmlyc3QgYXJndW1lbnQgb2JqZWN0IHRvIGhhdmUgdGhlIHByb3BlcnRpZXMgcHJvcCwgZnJvbVNpemUsIGFuZCB0b1NpemUuXFxuXFxuXCIsXG4gIFwiNTJcIjogXCJmb250RmFjZSBleHBlY3RzIGVpdGhlciB0aGUgcGF0aCB0byB0aGUgZm9udCBmaWxlKHMpIG9yIGEgbmFtZSBvZiBhIGxvY2FsIGNvcHkuXFxuXFxuXCIsXG4gIFwiNTNcIjogXCJmb250RmFjZSBleHBlY3RzIGxvY2FsRm9udHMgdG8gYmUgYW4gYXJyYXkuXFxuXFxuXCIsXG4gIFwiNTRcIjogXCJmb250RmFjZSBleHBlY3RzIGZpbGVGb3JtYXRzIHRvIGJlIGFuIGFycmF5LlxcblxcblwiLFxuICBcIjU1XCI6IFwiZm9udEZhY2UgZXhwZWN0cyBhIG5hbWUgb2YgYSBmb250LWZhbWlseS5cXG5cXG5cIixcbiAgXCI1NlwiOiBcImxpbmVhckdyYWRpZW50IHJlcXVyaWVzIGF0IGxlYXN0IDIgY29sb3Itc3RvcHMgdG8gcHJvcGVybHkgcmVuZGVyLlxcblxcblwiLFxuICBcIjU3XCI6IFwicmFkaWFsR3JhZGllbnQgcmVxdXJpZXMgYXQgbGVhc3QgMiBjb2xvci1zdG9wcyB0byBwcm9wZXJseSByZW5kZXIuXFxuXFxuXCIsXG4gIFwiNThcIjogXCJQbGVhc2Ugc3VwcGx5IGEgZmlsZW5hbWUgdG8gcmV0aW5hSW1hZ2UoKSBhcyB0aGUgZmlyc3QgYXJndW1lbnQuXFxuXFxuXCIsXG4gIFwiNTlcIjogXCJQYXNzZWQgaW52YWxpZCBhcmd1bWVudCB0byB0cmlhbmdsZSwgcGxlYXNlIHBhc3MgY29ycmVjdCBwb2ludGluZ0RpcmVjdGlvbiBlLmcuICdyaWdodCcuXFxuXFxuXCIsXG4gIFwiNjBcIjogXCJQYXNzZWQgYW4gaW52YWxpZCB2YWx1ZSB0byBgaGVpZ2h0YCBvciBgd2lkdGhgLiBQbGVhc2UgcHJvdmlkZSBhIHBpeGVsIGJhc2VkIHVuaXQuXFxuXFxuXCIsXG4gIFwiNjFcIjogXCJQcm9wZXJ0eSBtdXN0IGJlIGEgc3RyaW5nIHZhbHVlLlxcblxcblwiLFxuICBcIjYyXCI6IFwiYm9yZGVyUmFkaXVzIGV4cGVjdHMgYSByYWRpdXMgdmFsdWUgYXMgYSBzdHJpbmcgb3IgbnVtYmVyIGFzIHRoZSBzZWNvbmQgYXJndW1lbnQuXFxuXFxuXCIsXG4gIFwiNjNcIjogXCJib3JkZXJSYWRpdXMgZXhwZWN0cyBvbmUgb2YgXFxcInRvcFxcXCIsIFxcXCJib3R0b21cXFwiLCBcXFwibGVmdFxcXCIgb3IgXFxcInJpZ2h0XFxcIiBhcyB0aGUgZmlyc3QgYXJndW1lbnQuXFxuXFxuXCIsXG4gIFwiNjRcIjogXCJUaGUgYW5pbWF0aW9uIHNob3J0aGFuZCBvbmx5IHRha2VzIDggYXJndW1lbnRzLiBTZWUgdGhlIHNwZWNpZmljYXRpb24gZm9yIG1vcmUgaW5mb3JtYXRpb246IGh0dHA6Ly9tZG4uaW8vYW5pbWF0aW9uLlxcblxcblwiLFxuICBcIjY1XCI6IFwiVG8gcGFzcyBtdWx0aXBsZSBhbmltYXRpb25zIHBsZWFzZSBzdXBwbHkgdGhlbSBpbiBhcnJheXMsIGUuZy4gYW5pbWF0aW9uKFsncm90YXRlJywgJzJzJ10sIFsnbW92ZScsICcxcyddKVxcXFxuVG8gcGFzcyBhIHNpbmdsZSBhbmltYXRpb24gcGxlYXNlIHN1cHBseSB0aGVtIGluIHNpbXBsZSB2YWx1ZXMsIGUuZy4gYW5pbWF0aW9uKCdyb3RhdGUnLCAnMnMnKS5cXG5cXG5cIixcbiAgXCI2NlwiOiBcIlRoZSBhbmltYXRpb24gc2hvcnRoYW5kIGFycmF5cyBjYW4gb25seSBoYXZlIDggZWxlbWVudHMuIFNlZSB0aGUgc3BlY2lmaWNhdGlvbiBmb3IgbW9yZSBpbmZvcm1hdGlvbjogaHR0cDovL21kbi5pby9hbmltYXRpb24uXFxuXFxuXCIsXG4gIFwiNjdcIjogXCJZb3UgbXVzdCBwcm92aWRlIGEgdGVtcGxhdGUgdG8gdGhpcyBtZXRob2QuXFxuXFxuXCIsXG4gIFwiNjhcIjogXCJZb3UgcGFzc2VkIGFuIHVuc3VwcG9ydGVkIHNlbGVjdG9yIHN0YXRlIHRvIHRoaXMgbWV0aG9kLlxcblxcblwiLFxuICBcIjY5XCI6IFwiRXhwZWN0ZWQgYSBzdHJpbmcgZW5kaW5nIGluIFxcXCJweFxcXCIgb3IgYSBudW1iZXIgcGFzc2VkIGFzIHRoZSBmaXJzdCBhcmd1bWVudCB0byAlcygpLCBnb3QgJXMgaW5zdGVhZC5cXG5cXG5cIixcbiAgXCI3MFwiOiBcIkV4cGVjdGVkIGEgc3RyaW5nIGVuZGluZyBpbiBcXFwicHhcXFwiIG9yIGEgbnVtYmVyIHBhc3NlZCBhcyB0aGUgc2Vjb25kIGFyZ3VtZW50IHRvICVzKCksIGdvdCAlcyBpbnN0ZWFkLlxcblxcblwiLFxuICBcIjcxXCI6IFwiUGFzc2VkIGludmFsaWQgcGl4ZWwgdmFsdWUgJXMgdG8gJXMoKSwgcGxlYXNlIHBhc3MgYSB2YWx1ZSBsaWtlIFxcXCIxMnB4XFxcIiBvciAxMi5cXG5cXG5cIixcbiAgXCI3MlwiOiBcIlBhc3NlZCBpbnZhbGlkIGJhc2UgdmFsdWUgJXMgdG8gJXMoKSwgcGxlYXNlIHBhc3MgYSB2YWx1ZSBsaWtlIFxcXCIxMnB4XFxcIiBvciAxMi5cXG5cIlxufTtcbi8qKlxuICogc3VwZXIgYmFzaWMgdmVyc2lvbiBvZiBzcHJpbnRmXG4gKiBAcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIGZvcm1hdCgpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIHZhciBhID0gYXJnc1swXTtcbiAgdmFyIGIgPSBbXTtcbiAgdmFyIGM7XG5cbiAgZm9yIChjID0gMTsgYyA8IGFyZ3MubGVuZ3RoOyBjICs9IDEpIHtcbiAgICBiLnB1c2goYXJnc1tjXSk7XG4gIH1cblxuICBiLmZvckVhY2goZnVuY3Rpb24gKGQpIHtcbiAgICBhID0gYS5yZXBsYWNlKC8lW2Etel0vLCBkKTtcbiAgfSk7XG4gIHJldHVybiBhO1xufVxuLyoqXG4gKiBDcmVhdGUgYW4gZXJyb3IgZmlsZSBvdXQgb2YgZXJyb3JzLm1kIGZvciBkZXZlbG9wbWVudCBhbmQgYSBzaW1wbGUgd2ViIGxpbmsgdG8gdGhlIGZ1bGwgZXJyb3JzXG4gKiBpbiBwcm9kdWN0aW9uIG1vZGUuXG4gKiBAcHJpdmF0ZVxuICovXG5cblxudmFyIFBvbGlzaGVkRXJyb3IgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKF9FcnJvcikge1xuICBfaW5oZXJpdHNMb29zZShQb2xpc2hlZEVycm9yLCBfRXJyb3IpO1xuXG4gIGZ1bmN0aW9uIFBvbGlzaGVkRXJyb3IoY29kZSkge1xuICAgIHZhciBfdGhpcztcblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBfdGhpcyA9IF9FcnJvci5jYWxsKHRoaXMsIFwiQW4gZXJyb3Igb2NjdXJyZWQuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vc3R5bGVkLWNvbXBvbmVudHMvcG9saXNoZWQvYmxvYi9tYXN0ZXIvc3JjL2Vycm9yL2Vycm9ycy5tZCNcIiArIGNvZGUgKyBcIiBmb3IgbW9yZSBpbmZvcm1hdGlvbi5cIikgfHwgdGhpcztcbiAgICB9IGVsc2Uge1xuICAgICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4yID4gMSA/IF9sZW4yIC0gMSA6IDApLCBfa2V5MiA9IDE7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgICAgYXJnc1tfa2V5MiAtIDFdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICAgIH1cblxuICAgICAgX3RoaXMgPSBfRXJyb3IuY2FsbCh0aGlzLCBmb3JtYXQuYXBwbHkodm9pZCAwLCBbRVJST1JTW2NvZGVdXS5jb25jYXQoYXJncykpKSB8fCB0aGlzO1xuICAgIH1cblxuICAgIHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKTtcbiAgfVxuXG4gIHJldHVybiBQb2xpc2hlZEVycm9yO1xufShcbi8qI19fUFVSRV9fKi9cbl93cmFwTmF0aXZlU3VwZXIoRXJyb3IpKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gUG9saXNoZWRFcnJvcjtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX2hzbFRvUmdiID1cbi8qI19fUFVSRV9fKi9cbl9pbnRlcm9wUmVxdWlyZURlZmF1bHQoXG4vKiNfX1BVUkVfXyovXG5yZXF1aXJlKFwiLi4vaW50ZXJuYWxIZWxwZXJzL19oc2xUb1JnYlwiKSk7XG5cbnZhciBfbmFtZVRvSGV4ID1cbi8qI19fUFVSRV9fKi9cbl9pbnRlcm9wUmVxdWlyZURlZmF1bHQoXG4vKiNfX1BVUkVfXyovXG5yZXF1aXJlKFwiLi4vaW50ZXJuYWxIZWxwZXJzL19uYW1lVG9IZXhcIikpO1xuXG52YXIgX2Vycm9ycyA9XG4vKiNfX1BVUkVfXyovXG5faW50ZXJvcFJlcXVpcmVEZWZhdWx0KFxuLyojX19QVVJFX18qL1xucmVxdWlyZShcIi4uL2ludGVybmFsSGVscGVycy9fZXJyb3JzXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIGhleFJlZ2V4ID0gL14jW2EtZkEtRjAtOV17Nn0kLztcbnZhciBoZXhSZ2JhUmVnZXggPSAvXiNbYS1mQS1GMC05XXs4fSQvO1xudmFyIHJlZHVjZWRIZXhSZWdleCA9IC9eI1thLWZBLUYwLTldezN9JC87XG52YXIgcmVkdWNlZFJnYmFIZXhSZWdleCA9IC9eI1thLWZBLUYwLTldezR9JC87XG52YXIgcmdiUmVnZXggPSAvXnJnYlxcKFxccyooXFxkezEsM30pXFxzKixcXHMqKFxcZHsxLDN9KVxccyosXFxzKihcXGR7MSwzfSlcXHMqXFwpJC87XG52YXIgcmdiYVJlZ2V4ID0gL15yZ2JhXFwoXFxzKihcXGR7MSwzfSlcXHMqLFxccyooXFxkezEsM30pXFxzKixcXHMqKFxcZHsxLDN9KVxccyosXFxzKihbLStdP1swLTldKlsuXT9bMC05XSspXFxzKlxcKSQvO1xudmFyIGhzbFJlZ2V4ID0gL15oc2xcXChcXHMqKFxcZHswLDN9Wy5dP1swLTldKylcXHMqLFxccyooXFxkezEsM30pJVxccyosXFxzKihcXGR7MSwzfSklXFxzKlxcKSQvO1xudmFyIGhzbGFSZWdleCA9IC9eaHNsYVxcKFxccyooXFxkezAsM31bLl0/WzAtOV0rKVxccyosXFxzKihcXGR7MSwzfSklXFxzKixcXHMqKFxcZHsxLDN9KSVcXHMqLFxccyooWy0rXT9bMC05XSpbLl0/WzAtOV0rKVxccypcXCkkLztcbi8qKlxuICogUmV0dXJucyBhbiBSZ2JDb2xvciBvciBSZ2JhQ29sb3Igb2JqZWN0LiBUaGlzIHV0aWxpdHkgZnVuY3Rpb24gaXMgb25seSB1c2VmdWxcbiAqIGlmIHdhbnQgdG8gZXh0cmFjdCBhIGNvbG9yIGNvbXBvbmVudC4gV2l0aCB0aGUgY29sb3IgdXRpbCBgdG9Db2xvclN0cmluZ2AgeW91XG4gKiBjYW4gY29udmVydCBhIFJnYkNvbG9yIG9yIFJnYmFDb2xvciBvYmplY3QgYmFjayB0byBhIHN0cmluZy5cbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQXNzaWducyBgeyByZWQ6IDI1NSwgZ3JlZW46IDAsIGJsdWU6IDAgfWAgdG8gY29sb3IxXG4gKiBjb25zdCBjb2xvcjEgPSBwYXJzZVRvUmdiKCdyZ2IoMjU1LCAwLCAwKScpO1xuICogLy8gQXNzaWducyBgeyByZWQ6IDkyLCBncmVlbjogMTAyLCBibHVlOiAxMTIsIGFscGhhOiAwLjc1IH1gIHRvIGNvbG9yMlxuICogY29uc3QgY29sb3IyID0gcGFyc2VUb1JnYignaHNsYSgyMTAsIDEwJSwgNDAlLCAwLjc1KScpO1xuICovXG5cbmZ1bmN0aW9uIHBhcnNlVG9SZ2IoY29sb3IpIHtcbiAgaWYgKHR5cGVvZiBjb2xvciAhPT0gJ3N0cmluZycpIHtcbiAgICB0aHJvdyBuZXcgX2Vycm9ycy5kZWZhdWx0KDMpO1xuICB9XG5cbiAgdmFyIG5vcm1hbGl6ZWRDb2xvciA9ICgwLCBfbmFtZVRvSGV4LmRlZmF1bHQpKGNvbG9yKTtcblxuICBpZiAobm9ybWFsaXplZENvbG9yLm1hdGNoKGhleFJlZ2V4KSkge1xuICAgIHJldHVybiB7XG4gICAgICByZWQ6IHBhcnNlSW50KFwiXCIgKyBub3JtYWxpemVkQ29sb3JbMV0gKyBub3JtYWxpemVkQ29sb3JbMl0sIDE2KSxcbiAgICAgIGdyZWVuOiBwYXJzZUludChcIlwiICsgbm9ybWFsaXplZENvbG9yWzNdICsgbm9ybWFsaXplZENvbG9yWzRdLCAxNiksXG4gICAgICBibHVlOiBwYXJzZUludChcIlwiICsgbm9ybWFsaXplZENvbG9yWzVdICsgbm9ybWFsaXplZENvbG9yWzZdLCAxNilcbiAgICB9O1xuICB9XG5cbiAgaWYgKG5vcm1hbGl6ZWRDb2xvci5tYXRjaChoZXhSZ2JhUmVnZXgpKSB7XG4gICAgdmFyIGFscGhhID0gcGFyc2VGbG9hdCgocGFyc2VJbnQoXCJcIiArIG5vcm1hbGl6ZWRDb2xvcls3XSArIG5vcm1hbGl6ZWRDb2xvcls4XSwgMTYpIC8gMjU1KS50b0ZpeGVkKDIpKTtcbiAgICByZXR1cm4ge1xuICAgICAgcmVkOiBwYXJzZUludChcIlwiICsgbm9ybWFsaXplZENvbG9yWzFdICsgbm9ybWFsaXplZENvbG9yWzJdLCAxNiksXG4gICAgICBncmVlbjogcGFyc2VJbnQoXCJcIiArIG5vcm1hbGl6ZWRDb2xvclszXSArIG5vcm1hbGl6ZWRDb2xvcls0XSwgMTYpLFxuICAgICAgYmx1ZTogcGFyc2VJbnQoXCJcIiArIG5vcm1hbGl6ZWRDb2xvcls1XSArIG5vcm1hbGl6ZWRDb2xvcls2XSwgMTYpLFxuICAgICAgYWxwaGE6IGFscGhhXG4gICAgfTtcbiAgfVxuXG4gIGlmIChub3JtYWxpemVkQ29sb3IubWF0Y2gocmVkdWNlZEhleFJlZ2V4KSkge1xuICAgIHJldHVybiB7XG4gICAgICByZWQ6IHBhcnNlSW50KFwiXCIgKyBub3JtYWxpemVkQ29sb3JbMV0gKyBub3JtYWxpemVkQ29sb3JbMV0sIDE2KSxcbiAgICAgIGdyZWVuOiBwYXJzZUludChcIlwiICsgbm9ybWFsaXplZENvbG9yWzJdICsgbm9ybWFsaXplZENvbG9yWzJdLCAxNiksXG4gICAgICBibHVlOiBwYXJzZUludChcIlwiICsgbm9ybWFsaXplZENvbG9yWzNdICsgbm9ybWFsaXplZENvbG9yWzNdLCAxNilcbiAgICB9O1xuICB9XG5cbiAgaWYgKG5vcm1hbGl6ZWRDb2xvci5tYXRjaChyZWR1Y2VkUmdiYUhleFJlZ2V4KSkge1xuICAgIHZhciBfYWxwaGEgPSBwYXJzZUZsb2F0KChwYXJzZUludChcIlwiICsgbm9ybWFsaXplZENvbG9yWzRdICsgbm9ybWFsaXplZENvbG9yWzRdLCAxNikgLyAyNTUpLnRvRml4ZWQoMikpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHJlZDogcGFyc2VJbnQoXCJcIiArIG5vcm1hbGl6ZWRDb2xvclsxXSArIG5vcm1hbGl6ZWRDb2xvclsxXSwgMTYpLFxuICAgICAgZ3JlZW46IHBhcnNlSW50KFwiXCIgKyBub3JtYWxpemVkQ29sb3JbMl0gKyBub3JtYWxpemVkQ29sb3JbMl0sIDE2KSxcbiAgICAgIGJsdWU6IHBhcnNlSW50KFwiXCIgKyBub3JtYWxpemVkQ29sb3JbM10gKyBub3JtYWxpemVkQ29sb3JbM10sIDE2KSxcbiAgICAgIGFscGhhOiBfYWxwaGFcbiAgICB9O1xuICB9XG5cbiAgdmFyIHJnYk1hdGNoZWQgPSByZ2JSZWdleC5leGVjKG5vcm1hbGl6ZWRDb2xvcik7XG5cbiAgaWYgKHJnYk1hdGNoZWQpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcmVkOiBwYXJzZUludChcIlwiICsgcmdiTWF0Y2hlZFsxXSwgMTApLFxuICAgICAgZ3JlZW46IHBhcnNlSW50KFwiXCIgKyByZ2JNYXRjaGVkWzJdLCAxMCksXG4gICAgICBibHVlOiBwYXJzZUludChcIlwiICsgcmdiTWF0Y2hlZFszXSwgMTApXG4gICAgfTtcbiAgfVxuXG4gIHZhciByZ2JhTWF0Y2hlZCA9IHJnYmFSZWdleC5leGVjKG5vcm1hbGl6ZWRDb2xvcik7XG5cbiAgaWYgKHJnYmFNYXRjaGVkKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJlZDogcGFyc2VJbnQoXCJcIiArIHJnYmFNYXRjaGVkWzFdLCAxMCksXG4gICAgICBncmVlbjogcGFyc2VJbnQoXCJcIiArIHJnYmFNYXRjaGVkWzJdLCAxMCksXG4gICAgICBibHVlOiBwYXJzZUludChcIlwiICsgcmdiYU1hdGNoZWRbM10sIDEwKSxcbiAgICAgIGFscGhhOiBwYXJzZUZsb2F0KFwiXCIgKyByZ2JhTWF0Y2hlZFs0XSlcbiAgICB9O1xuICB9XG5cbiAgdmFyIGhzbE1hdGNoZWQgPSBoc2xSZWdleC5leGVjKG5vcm1hbGl6ZWRDb2xvcik7XG5cbiAgaWYgKGhzbE1hdGNoZWQpIHtcbiAgICB2YXIgaHVlID0gcGFyc2VJbnQoXCJcIiArIGhzbE1hdGNoZWRbMV0sIDEwKTtcbiAgICB2YXIgc2F0dXJhdGlvbiA9IHBhcnNlSW50KFwiXCIgKyBoc2xNYXRjaGVkWzJdLCAxMCkgLyAxMDA7XG4gICAgdmFyIGxpZ2h0bmVzcyA9IHBhcnNlSW50KFwiXCIgKyBoc2xNYXRjaGVkWzNdLCAxMCkgLyAxMDA7XG4gICAgdmFyIHJnYkNvbG9yU3RyaW5nID0gXCJyZ2IoXCIgKyAoMCwgX2hzbFRvUmdiLmRlZmF1bHQpKGh1ZSwgc2F0dXJhdGlvbiwgbGlnaHRuZXNzKSArIFwiKVwiO1xuICAgIHZhciBoc2xSZ2JNYXRjaGVkID0gcmdiUmVnZXguZXhlYyhyZ2JDb2xvclN0cmluZyk7XG5cbiAgICBpZiAoIWhzbFJnYk1hdGNoZWQpIHtcbiAgICAgIHRocm93IG5ldyBfZXJyb3JzLmRlZmF1bHQoNCwgbm9ybWFsaXplZENvbG9yLCByZ2JDb2xvclN0cmluZyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHJlZDogcGFyc2VJbnQoXCJcIiArIGhzbFJnYk1hdGNoZWRbMV0sIDEwKSxcbiAgICAgIGdyZWVuOiBwYXJzZUludChcIlwiICsgaHNsUmdiTWF0Y2hlZFsyXSwgMTApLFxuICAgICAgYmx1ZTogcGFyc2VJbnQoXCJcIiArIGhzbFJnYk1hdGNoZWRbM10sIDEwKVxuICAgIH07XG4gIH1cblxuICB2YXIgaHNsYU1hdGNoZWQgPSBoc2xhUmVnZXguZXhlYyhub3JtYWxpemVkQ29sb3IpO1xuXG4gIGlmIChoc2xhTWF0Y2hlZCkge1xuICAgIHZhciBfaHVlID0gcGFyc2VJbnQoXCJcIiArIGhzbGFNYXRjaGVkWzFdLCAxMCk7XG5cbiAgICB2YXIgX3NhdHVyYXRpb24gPSBwYXJzZUludChcIlwiICsgaHNsYU1hdGNoZWRbMl0sIDEwKSAvIDEwMDtcblxuICAgIHZhciBfbGlnaHRuZXNzID0gcGFyc2VJbnQoXCJcIiArIGhzbGFNYXRjaGVkWzNdLCAxMCkgLyAxMDA7XG5cbiAgICB2YXIgX3JnYkNvbG9yU3RyaW5nID0gXCJyZ2IoXCIgKyAoMCwgX2hzbFRvUmdiLmRlZmF1bHQpKF9odWUsIF9zYXR1cmF0aW9uLCBfbGlnaHRuZXNzKSArIFwiKVwiO1xuXG4gICAgdmFyIF9oc2xSZ2JNYXRjaGVkID0gcmdiUmVnZXguZXhlYyhfcmdiQ29sb3JTdHJpbmcpO1xuXG4gICAgaWYgKCFfaHNsUmdiTWF0Y2hlZCkge1xuICAgICAgdGhyb3cgbmV3IF9lcnJvcnMuZGVmYXVsdCg0LCBub3JtYWxpemVkQ29sb3IsIF9yZ2JDb2xvclN0cmluZyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHJlZDogcGFyc2VJbnQoXCJcIiArIF9oc2xSZ2JNYXRjaGVkWzFdLCAxMCksXG4gICAgICBncmVlbjogcGFyc2VJbnQoXCJcIiArIF9oc2xSZ2JNYXRjaGVkWzJdLCAxMCksXG4gICAgICBibHVlOiBwYXJzZUludChcIlwiICsgX2hzbFJnYk1hdGNoZWRbM10sIDEwKSxcbiAgICAgIGFscGhhOiBwYXJzZUZsb2F0KFwiXCIgKyBoc2xhTWF0Y2hlZFs0XSlcbiAgICB9O1xuICB9XG5cbiAgdGhyb3cgbmV3IF9lcnJvcnMuZGVmYXVsdCg1KTtcbn1cblxudmFyIF9kZWZhdWx0ID0gcGFyc2VUb1JnYjtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbmZ1bmN0aW9uIHJnYlRvSHNsKGNvbG9yKSB7XG4gIC8vIG1ha2Ugc3VyZSByZ2IgYXJlIGNvbnRhaW5lZCBpbiBhIHNldCBvZiBbMCwgMjU1XVxuICB2YXIgcmVkID0gY29sb3IucmVkIC8gMjU1O1xuICB2YXIgZ3JlZW4gPSBjb2xvci5ncmVlbiAvIDI1NTtcbiAgdmFyIGJsdWUgPSBjb2xvci5ibHVlIC8gMjU1O1xuICB2YXIgbWF4ID0gTWF0aC5tYXgocmVkLCBncmVlbiwgYmx1ZSk7XG4gIHZhciBtaW4gPSBNYXRoLm1pbihyZWQsIGdyZWVuLCBibHVlKTtcbiAgdmFyIGxpZ2h0bmVzcyA9IChtYXggKyBtaW4pIC8gMjtcblxuICBpZiAobWF4ID09PSBtaW4pIHtcbiAgICAvLyBhY2hyb21hdGljXG4gICAgaWYgKGNvbG9yLmFscGhhICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGh1ZTogMCxcbiAgICAgICAgc2F0dXJhdGlvbjogMCxcbiAgICAgICAgbGlnaHRuZXNzOiBsaWdodG5lc3MsXG4gICAgICAgIGFscGhhOiBjb2xvci5hbHBoYVxuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaHVlOiAwLFxuICAgICAgICBzYXR1cmF0aW9uOiAwLFxuICAgICAgICBsaWdodG5lc3M6IGxpZ2h0bmVzc1xuICAgICAgfTtcbiAgICB9XG4gIH1cblxuICB2YXIgaHVlO1xuICB2YXIgZGVsdGEgPSBtYXggLSBtaW47XG4gIHZhciBzYXR1cmF0aW9uID0gbGlnaHRuZXNzID4gMC41ID8gZGVsdGEgLyAoMiAtIG1heCAtIG1pbikgOiBkZWx0YSAvIChtYXggKyBtaW4pO1xuXG4gIHN3aXRjaCAobWF4KSB7XG4gICAgY2FzZSByZWQ6XG4gICAgICBodWUgPSAoZ3JlZW4gLSBibHVlKSAvIGRlbHRhICsgKGdyZWVuIDwgYmx1ZSA/IDYgOiAwKTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBncmVlbjpcbiAgICAgIGh1ZSA9IChibHVlIC0gcmVkKSAvIGRlbHRhICsgMjtcbiAgICAgIGJyZWFrO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIC8vIGJsdWUgY2FzZVxuICAgICAgaHVlID0gKHJlZCAtIGdyZWVuKSAvIGRlbHRhICsgNDtcbiAgICAgIGJyZWFrO1xuICB9XG5cbiAgaHVlICo9IDYwO1xuXG4gIGlmIChjb2xvci5hbHBoYSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGh1ZTogaHVlLFxuICAgICAgc2F0dXJhdGlvbjogc2F0dXJhdGlvbixcbiAgICAgIGxpZ2h0bmVzczogbGlnaHRuZXNzLFxuICAgICAgYWxwaGE6IGNvbG9yLmFscGhhXG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgaHVlOiBodWUsXG4gICAgc2F0dXJhdGlvbjogc2F0dXJhdGlvbixcbiAgICBsaWdodG5lc3M6IGxpZ2h0bmVzc1xuICB9O1xufVxuXG52YXIgX2RlZmF1bHQgPSByZ2JUb0hzbDtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBfcGFyc2VUb1JnYiA9XG4vKiNfX1BVUkVfXyovXG5faW50ZXJvcFJlcXVpcmVEZWZhdWx0KFxuLyojX19QVVJFX18qL1xucmVxdWlyZShcIi4vcGFyc2VUb1JnYlwiKSk7XG5cbnZhciBfcmdiVG9Ic2wgPVxuLyojX19QVVJFX18qL1xuX2ludGVyb3BSZXF1aXJlRGVmYXVsdChcbi8qI19fUFVSRV9fKi9cbnJlcXVpcmUoXCIuLi9pbnRlcm5hbEhlbHBlcnMvX3JnYlRvSHNsXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuLyoqXG4gKiBSZXR1cm5zIGFuIEhzbENvbG9yIG9yIEhzbGFDb2xvciBvYmplY3QuIFRoaXMgdXRpbGl0eSBmdW5jdGlvbiBpcyBvbmx5IHVzZWZ1bFxuICogaWYgd2FudCB0byBleHRyYWN0IGEgY29sb3IgY29tcG9uZW50LiBXaXRoIHRoZSBjb2xvciB1dGlsIGB0b0NvbG9yU3RyaW5nYCB5b3VcbiAqIGNhbiBjb252ZXJ0IGEgSHNsQ29sb3Igb3IgSHNsYUNvbG9yIG9iamVjdCBiYWNrIHRvIGEgc3RyaW5nLlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBc3NpZ25zIGB7IGh1ZTogMCwgc2F0dXJhdGlvbjogMSwgbGlnaHRuZXNzOiAwLjUgfWAgdG8gY29sb3IxXG4gKiBjb25zdCBjb2xvcjEgPSBwYXJzZVRvSHNsKCdyZ2IoMjU1LCAwLCAwKScpO1xuICogLy8gQXNzaWducyBgeyBodWU6IDEyOCwgc2F0dXJhdGlvbjogMSwgbGlnaHRuZXNzOiAwLjUsIGFscGhhOiAwLjc1IH1gIHRvIGNvbG9yMlxuICogY29uc3QgY29sb3IyID0gcGFyc2VUb0hzbCgnaHNsYSgxMjgsIDEwMCUsIDUwJSwgMC43NSknKTtcbiAqL1xuZnVuY3Rpb24gcGFyc2VUb0hzbChjb2xvcikge1xuICAvLyBOb3RlOiBBdCBhIGxhdGVyIHN0YWdlIHdlIGNhbiBvcHRpbWl6ZSB0aGlzIGZ1bmN0aW9uIGFzIHJpZ2h0IG5vdyBhIGhzbFxuICAvLyBjb2xvciB3b3VsZCBiZSBwYXJzZWQgY29udmVydGVkIHRvIHJnYiB2YWx1ZXMgYW5kIGNvbnZlcnRlZCBiYWNrIHRvIGhzbC5cbiAgcmV0dXJuICgwLCBfcmdiVG9Ic2wuZGVmYXVsdCkoKDAsIF9wYXJzZVRvUmdiLmRlZmF1bHQpKGNvbG9yKSk7XG59XG5cbnZhciBfZGVmYXVsdCA9IHBhcnNlVG9Ic2w7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG4vKipcbiAqIFJlZHVjZXMgaGV4IHZhbHVlcyBpZiBwb3NzaWJsZSBlLmcuICNmZjg4NjYgdG8gI2Y4NlxuICogQHByaXZhdGVcbiAqL1xudmFyIHJlZHVjZUhleFZhbHVlID0gZnVuY3Rpb24gcmVkdWNlSGV4VmFsdWUodmFsdWUpIHtcbiAgaWYgKHZhbHVlLmxlbmd0aCA9PT0gNyAmJiB2YWx1ZVsxXSA9PT0gdmFsdWVbMl0gJiYgdmFsdWVbM10gPT09IHZhbHVlWzRdICYmIHZhbHVlWzVdID09PSB2YWx1ZVs2XSkge1xuICAgIHJldHVybiBcIiNcIiArIHZhbHVlWzFdICsgdmFsdWVbM10gKyB2YWx1ZVs1XTtcbiAgfVxuXG4gIHJldHVybiB2YWx1ZTtcbn07XG5cbnZhciBfZGVmYXVsdCA9IHJlZHVjZUhleFZhbHVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxuZnVuY3Rpb24gbnVtYmVyVG9IZXgodmFsdWUpIHtcbiAgdmFyIGhleCA9IHZhbHVlLnRvU3RyaW5nKDE2KTtcbiAgcmV0dXJuIGhleC5sZW5ndGggPT09IDEgPyBcIjBcIiArIGhleCA6IGhleDtcbn1cblxudmFyIF9kZWZhdWx0ID0gbnVtYmVyVG9IZXg7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX2hzbFRvUmdiID1cbi8qI19fUFVSRV9fKi9cbl9pbnRlcm9wUmVxdWlyZURlZmF1bHQoXG4vKiNfX1BVUkVfXyovXG5yZXF1aXJlKFwiLi9faHNsVG9SZ2JcIikpO1xuXG52YXIgX3JlZHVjZUhleFZhbHVlID1cbi8qI19fUFVSRV9fKi9cbl9pbnRlcm9wUmVxdWlyZURlZmF1bHQoXG4vKiNfX1BVUkVfXyovXG5yZXF1aXJlKFwiLi9fcmVkdWNlSGV4VmFsdWVcIikpO1xuXG52YXIgX251bWJlclRvSGV4ID1cbi8qI19fUFVSRV9fKi9cbl9pbnRlcm9wUmVxdWlyZURlZmF1bHQoXG4vKiNfX1BVUkVfXyovXG5yZXF1aXJlKFwiLi9fbnVtYmVyVG9IZXhcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBjb2xvclRvSGV4KGNvbG9yKSB7XG4gIHJldHVybiAoMCwgX251bWJlclRvSGV4LmRlZmF1bHQpKE1hdGgucm91bmQoY29sb3IgKiAyNTUpKTtcbn1cblxuZnVuY3Rpb24gY29udmVydFRvSGV4KHJlZCwgZ3JlZW4sIGJsdWUpIHtcbiAgcmV0dXJuICgwLCBfcmVkdWNlSGV4VmFsdWUuZGVmYXVsdCkoXCIjXCIgKyBjb2xvclRvSGV4KHJlZCkgKyBjb2xvclRvSGV4KGdyZWVuKSArIGNvbG9yVG9IZXgoYmx1ZSkpO1xufVxuXG5mdW5jdGlvbiBoc2xUb0hleChodWUsIHNhdHVyYXRpb24sIGxpZ2h0bmVzcykge1xuICByZXR1cm4gKDAsIF9oc2xUb1JnYi5kZWZhdWx0KShodWUsIHNhdHVyYXRpb24sIGxpZ2h0bmVzcywgY29udmVydFRvSGV4KTtcbn1cblxudmFyIF9kZWZhdWx0ID0gaHNsVG9IZXg7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX2hzbFRvSGV4ID1cbi8qI19fUFVSRV9fKi9cbl9pbnRlcm9wUmVxdWlyZURlZmF1bHQoXG4vKiNfX1BVUkVfXyovXG5yZXF1aXJlKFwiLi4vaW50ZXJuYWxIZWxwZXJzL19oc2xUb0hleFwiKSk7XG5cbnZhciBfZXJyb3JzID1cbi8qI19fUFVSRV9fKi9cbl9pbnRlcm9wUmVxdWlyZURlZmF1bHQoXG4vKiNfX1BVUkVfXyovXG5yZXF1aXJlKFwiLi4vaW50ZXJuYWxIZWxwZXJzL19lcnJvcnNcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG4vKipcbiAqIFJldHVybnMgYSBzdHJpbmcgdmFsdWUgZm9yIHRoZSBjb2xvci4gVGhlIHJldHVybmVkIHJlc3VsdCBpcyB0aGUgc21hbGxlc3QgcG9zc2libGUgaGV4IG5vdGF0aW9uLlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBTdHlsZXMgYXMgb2JqZWN0IHVzYWdlXG4gKiBjb25zdCBzdHlsZXMgPSB7XG4gKiAgIGJhY2tncm91bmQ6IGhzbCgzNTksIDAuNzUsIDAuNCksXG4gKiAgIGJhY2tncm91bmQ6IGhzbCh7IGh1ZTogMzYwLCBzYXR1cmF0aW9uOiAwLjc1LCBsaWdodG5lc3M6IDAuNCB9KSxcbiAqIH1cbiAqXG4gKiAvLyBzdHlsZWQtY29tcG9uZW50cyB1c2FnZVxuICogY29uc3QgZGl2ID0gc3R5bGVkLmRpdmBcbiAqICAgYmFja2dyb3VuZDogJHtoc2woMzU5LCAwLjc1LCAwLjQpfTtcbiAqICAgYmFja2dyb3VuZDogJHtoc2woeyBodWU6IDM2MCwgc2F0dXJhdGlvbjogMC43NSwgbGlnaHRuZXNzOiAwLjQgfSl9O1xuICogYFxuICpcbiAqIC8vIENTUyBpbiBKUyBPdXRwdXRcbiAqXG4gKiBlbGVtZW50IHtcbiAqICAgYmFja2dyb3VuZDogXCIjYjMxOTFjXCI7XG4gKiAgIGJhY2tncm91bmQ6IFwiI2IzMTkxY1wiO1xuICogfVxuICovXG5mdW5jdGlvbiBoc2wodmFsdWUsIHNhdHVyYXRpb24sIGxpZ2h0bmVzcykge1xuICBpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJyAmJiB0eXBlb2Ygc2F0dXJhdGlvbiA9PT0gJ251bWJlcicgJiYgdHlwZW9mIGxpZ2h0bmVzcyA9PT0gJ251bWJlcicpIHtcbiAgICByZXR1cm4gKDAsIF9oc2xUb0hleC5kZWZhdWx0KSh2YWx1ZSwgc2F0dXJhdGlvbiwgbGlnaHRuZXNzKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHNhdHVyYXRpb24gPT09IHVuZGVmaW5lZCAmJiBsaWdodG5lc3MgPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiAoMCwgX2hzbFRvSGV4LmRlZmF1bHQpKHZhbHVlLmh1ZSwgdmFsdWUuc2F0dXJhdGlvbiwgdmFsdWUubGlnaHRuZXNzKTtcbiAgfVxuXG4gIHRocm93IG5ldyBfZXJyb3JzLmRlZmF1bHQoMSk7XG59XG5cbnZhciBfZGVmYXVsdCA9IGhzbDtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBfaHNsVG9IZXggPVxuLyojX19QVVJFX18qL1xuX2ludGVyb3BSZXF1aXJlRGVmYXVsdChcbi8qI19fUFVSRV9fKi9cbnJlcXVpcmUoXCIuLi9pbnRlcm5hbEhlbHBlcnMvX2hzbFRvSGV4XCIpKTtcblxudmFyIF9oc2xUb1JnYiA9XG4vKiNfX1BVUkVfXyovXG5faW50ZXJvcFJlcXVpcmVEZWZhdWx0KFxuLyojX19QVVJFX18qL1xucmVxdWlyZShcIi4uL2ludGVybmFsSGVscGVycy9faHNsVG9SZ2JcIikpO1xuXG52YXIgX2Vycm9ycyA9XG4vKiNfX1BVUkVfXyovXG5faW50ZXJvcFJlcXVpcmVEZWZhdWx0KFxuLyojX19QVVJFX18qL1xucmVxdWlyZShcIi4uL2ludGVybmFsSGVscGVycy9fZXJyb3JzXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuLyoqXG4gKiBSZXR1cm5zIGEgc3RyaW5nIHZhbHVlIGZvciB0aGUgY29sb3IuIFRoZSByZXR1cm5lZCByZXN1bHQgaXMgdGhlIHNtYWxsZXN0IHBvc3NpYmxlIHJnYmEgb3IgaGV4IG5vdGF0aW9uLlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBTdHlsZXMgYXMgb2JqZWN0IHVzYWdlXG4gKiBjb25zdCBzdHlsZXMgPSB7XG4gKiAgIGJhY2tncm91bmQ6IGhzbGEoMzU5LCAwLjc1LCAwLjQsIDAuNyksXG4gKiAgIGJhY2tncm91bmQ6IGhzbGEoeyBodWU6IDM2MCwgc2F0dXJhdGlvbjogMC43NSwgbGlnaHRuZXNzOiAwLjQsIGFscGhhOiAwLDcgfSksXG4gKiAgIGJhY2tncm91bmQ6IGhzbGEoMzU5LCAwLjc1LCAwLjQsIDEpLFxuICogfVxuICpcbiAqIC8vIHN0eWxlZC1jb21wb25lbnRzIHVzYWdlXG4gKiBjb25zdCBkaXYgPSBzdHlsZWQuZGl2YFxuICogICBiYWNrZ3JvdW5kOiAke2hzbGEoMzU5LCAwLjc1LCAwLjQsIDAuNyl9O1xuICogICBiYWNrZ3JvdW5kOiAke2hzbGEoeyBodWU6IDM2MCwgc2F0dXJhdGlvbjogMC43NSwgbGlnaHRuZXNzOiAwLjQsIGFscGhhOiAwLDcgfSl9O1xuICogICBiYWNrZ3JvdW5kOiAke2hzbGEoMzU5LCAwLjc1LCAwLjQsIDEpfTtcbiAqIGBcbiAqXG4gKiAvLyBDU1MgaW4gSlMgT3V0cHV0XG4gKlxuICogZWxlbWVudCB7XG4gKiAgIGJhY2tncm91bmQ6IFwicmdiYSgxNzksMjUsMjgsMC43KVwiO1xuICogICBiYWNrZ3JvdW5kOiBcInJnYmEoMTc5LDI1LDI4LDAuNylcIjtcbiAqICAgYmFja2dyb3VuZDogXCIjYjMxOTFjXCI7XG4gKiB9XG4gKi9cbmZ1bmN0aW9uIGhzbGEodmFsdWUsIHNhdHVyYXRpb24sIGxpZ2h0bmVzcywgYWxwaGEpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicgJiYgdHlwZW9mIHNhdHVyYXRpb24gPT09ICdudW1iZXInICYmIHR5cGVvZiBsaWdodG5lc3MgPT09ICdudW1iZXInICYmIHR5cGVvZiBhbHBoYSA9PT0gJ251bWJlcicpIHtcbiAgICByZXR1cm4gYWxwaGEgPj0gMSA/ICgwLCBfaHNsVG9IZXguZGVmYXVsdCkodmFsdWUsIHNhdHVyYXRpb24sIGxpZ2h0bmVzcykgOiBcInJnYmEoXCIgKyAoMCwgX2hzbFRvUmdiLmRlZmF1bHQpKHZhbHVlLCBzYXR1cmF0aW9uLCBsaWdodG5lc3MpICsgXCIsXCIgKyBhbHBoYSArIFwiKVwiO1xuICB9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgc2F0dXJhdGlvbiA9PT0gdW5kZWZpbmVkICYmIGxpZ2h0bmVzcyA9PT0gdW5kZWZpbmVkICYmIGFscGhhID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gdmFsdWUuYWxwaGEgPj0gMSA/ICgwLCBfaHNsVG9IZXguZGVmYXVsdCkodmFsdWUuaHVlLCB2YWx1ZS5zYXR1cmF0aW9uLCB2YWx1ZS5saWdodG5lc3MpIDogXCJyZ2JhKFwiICsgKDAsIF9oc2xUb1JnYi5kZWZhdWx0KSh2YWx1ZS5odWUsIHZhbHVlLnNhdHVyYXRpb24sIHZhbHVlLmxpZ2h0bmVzcykgKyBcIixcIiArIHZhbHVlLmFscGhhICsgXCIpXCI7XG4gIH1cblxuICB0aHJvdyBuZXcgX2Vycm9ycy5kZWZhdWx0KDIpO1xufVxuXG52YXIgX2RlZmF1bHQgPSBoc2xhO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIF9yZWR1Y2VIZXhWYWx1ZSA9XG4vKiNfX1BVUkVfXyovXG5faW50ZXJvcFJlcXVpcmVEZWZhdWx0KFxuLyojX19QVVJFX18qL1xucmVxdWlyZShcIi4uL2ludGVybmFsSGVscGVycy9fcmVkdWNlSGV4VmFsdWVcIikpO1xuXG52YXIgX251bWJlclRvSGV4ID1cbi8qI19fUFVSRV9fKi9cbl9pbnRlcm9wUmVxdWlyZURlZmF1bHQoXG4vKiNfX1BVUkVfXyovXG5yZXF1aXJlKFwiLi4vaW50ZXJuYWxIZWxwZXJzL19udW1iZXJUb0hleFwiKSk7XG5cbnZhciBfZXJyb3JzID1cbi8qI19fUFVSRV9fKi9cbl9pbnRlcm9wUmVxdWlyZURlZmF1bHQoXG4vKiNfX1BVUkVfXyovXG5yZXF1aXJlKFwiLi4vaW50ZXJuYWxIZWxwZXJzL19lcnJvcnNcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG4vKipcbiAqIFJldHVybnMgYSBzdHJpbmcgdmFsdWUgZm9yIHRoZSBjb2xvci4gVGhlIHJldHVybmVkIHJlc3VsdCBpcyB0aGUgc21hbGxlc3QgcG9zc2libGUgaGV4IG5vdGF0aW9uLlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBTdHlsZXMgYXMgb2JqZWN0IHVzYWdlXG4gKiBjb25zdCBzdHlsZXMgPSB7XG4gKiAgIGJhY2tncm91bmQ6IHJnYigyNTUsIDIwNSwgMTAwKSxcbiAqICAgYmFja2dyb3VuZDogcmdiKHsgcmVkOiAyNTUsIGdyZWVuOiAyMDUsIGJsdWU6IDEwMCB9KSxcbiAqIH1cbiAqXG4gKiAvLyBzdHlsZWQtY29tcG9uZW50cyB1c2FnZVxuICogY29uc3QgZGl2ID0gc3R5bGVkLmRpdmBcbiAqICAgYmFja2dyb3VuZDogJHtyZ2IoMjU1LCAyMDUsIDEwMCl9O1xuICogICBiYWNrZ3JvdW5kOiAke3JnYih7IHJlZDogMjU1LCBncmVlbjogMjA1LCBibHVlOiAxMDAgfSl9O1xuICogYFxuICpcbiAqIC8vIENTUyBpbiBKUyBPdXRwdXRcbiAqXG4gKiBlbGVtZW50IHtcbiAqICAgYmFja2dyb3VuZDogXCIjZmZjZDY0XCI7XG4gKiAgIGJhY2tncm91bmQ6IFwiI2ZmY2Q2NFwiO1xuICogfVxuICovXG5mdW5jdGlvbiByZ2IodmFsdWUsIGdyZWVuLCBibHVlKSB7XG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInICYmIHR5cGVvZiBncmVlbiA9PT0gJ251bWJlcicgJiYgdHlwZW9mIGJsdWUgPT09ICdudW1iZXInKSB7XG4gICAgcmV0dXJuICgwLCBfcmVkdWNlSGV4VmFsdWUuZGVmYXVsdCkoXCIjXCIgKyAoMCwgX251bWJlclRvSGV4LmRlZmF1bHQpKHZhbHVlKSArICgwLCBfbnVtYmVyVG9IZXguZGVmYXVsdCkoZ3JlZW4pICsgKDAsIF9udW1iZXJUb0hleC5kZWZhdWx0KShibHVlKSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiBncmVlbiA9PT0gdW5kZWZpbmVkICYmIGJsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiAoMCwgX3JlZHVjZUhleFZhbHVlLmRlZmF1bHQpKFwiI1wiICsgKDAsIF9udW1iZXJUb0hleC5kZWZhdWx0KSh2YWx1ZS5yZWQpICsgKDAsIF9udW1iZXJUb0hleC5kZWZhdWx0KSh2YWx1ZS5ncmVlbikgKyAoMCwgX251bWJlclRvSGV4LmRlZmF1bHQpKHZhbHVlLmJsdWUpKTtcbiAgfVxuXG4gIHRocm93IG5ldyBfZXJyb3JzLmRlZmF1bHQoNik7XG59XG5cbnZhciBfZGVmYXVsdCA9IHJnYjtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBfcGFyc2VUb1JnYiA9XG4vKiNfX1BVUkVfXyovXG5faW50ZXJvcFJlcXVpcmVEZWZhdWx0KFxuLyojX19QVVJFX18qL1xucmVxdWlyZShcIi4vcGFyc2VUb1JnYlwiKSk7XG5cbnZhciBfcmdiID1cbi8qI19fUFVSRV9fKi9cbl9pbnRlcm9wUmVxdWlyZURlZmF1bHQoXG4vKiNfX1BVUkVfXyovXG5yZXF1aXJlKFwiLi9yZ2JcIikpO1xuXG52YXIgX2Vycm9ycyA9XG4vKiNfX1BVUkVfXyovXG5faW50ZXJvcFJlcXVpcmVEZWZhdWx0KFxuLyojX19QVVJFX18qL1xucmVxdWlyZShcIi4uL2ludGVybmFsSGVscGVycy9fZXJyb3JzXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuLyoqXG4gKiBSZXR1cm5zIGEgc3RyaW5nIHZhbHVlIGZvciB0aGUgY29sb3IuIFRoZSByZXR1cm5lZCByZXN1bHQgaXMgdGhlIHNtYWxsZXN0IHBvc3NpYmxlIHJnYmEgb3IgaGV4IG5vdGF0aW9uLlxuICpcbiAqIENhbiBhbHNvIGJlIHVzZWQgdG8gZmFkZSBhIGNvbG9yIGJ5IHBhc3NpbmcgYSBoZXggdmFsdWUgb3IgbmFtZWQgQ1NTIGNvbG9yIGFsb25nIHdpdGggYW4gYWxwaGEgdmFsdWUuXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFN0eWxlcyBhcyBvYmplY3QgdXNhZ2VcbiAqIGNvbnN0IHN0eWxlcyA9IHtcbiAqICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDIwNSwgMTAwLCAwLjcpLFxuICogICBiYWNrZ3JvdW5kOiByZ2JhKHsgcmVkOiAyNTUsIGdyZWVuOiAyMDUsIGJsdWU6IDEwMCwgYWxwaGE6IDAuNyB9KSxcbiAqICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDIwNSwgMTAwLCAxKSxcbiAqICAgYmFja2dyb3VuZDogcmdiYSgnI2ZmZmZmZicsIDAuNCksXG4gKiAgIGJhY2tncm91bmQ6IHJnYmEoJ2JsYWNrJywgMC43KSxcbiAqIH1cbiAqXG4gKiAvLyBzdHlsZWQtY29tcG9uZW50cyB1c2FnZVxuICogY29uc3QgZGl2ID0gc3R5bGVkLmRpdmBcbiAqICAgYmFja2dyb3VuZDogJHtyZ2JhKDI1NSwgMjA1LCAxMDAsIDAuNyl9O1xuICogICBiYWNrZ3JvdW5kOiAke3JnYmEoeyByZWQ6IDI1NSwgZ3JlZW46IDIwNSwgYmx1ZTogMTAwLCBhbHBoYTogMC43IH0pfTtcbiAqICAgYmFja2dyb3VuZDogJHtyZ2JhKDI1NSwgMjA1LCAxMDAsIDEpfTtcbiAqICAgYmFja2dyb3VuZDogJHtyZ2JhKCcjZmZmZmZmJywgMC40KX07XG4gKiAgIGJhY2tncm91bmQ6ICR7cmdiYSgnYmxhY2snLCAwLjcpfTtcbiAqIGBcbiAqXG4gKiAvLyBDU1MgaW4gSlMgT3V0cHV0XG4gKlxuICogZWxlbWVudCB7XG4gKiAgIGJhY2tncm91bmQ6IFwicmdiYSgyNTUsMjA1LDEwMCwwLjcpXCI7XG4gKiAgIGJhY2tncm91bmQ6IFwicmdiYSgyNTUsMjA1LDEwMCwwLjcpXCI7XG4gKiAgIGJhY2tncm91bmQ6IFwiI2ZmY2Q2NFwiO1xuICogICBiYWNrZ3JvdW5kOiBcInJnYmEoMjU1LDI1NSwyNTUsMC40KVwiO1xuICogICBiYWNrZ3JvdW5kOiBcInJnYmEoMCwwLDAsMC43KVwiO1xuICogfVxuICovXG5mdW5jdGlvbiByZ2JhKGZpcnN0VmFsdWUsIHNlY29uZFZhbHVlLCB0aGlyZFZhbHVlLCBmb3VydGhWYWx1ZSkge1xuICBpZiAodHlwZW9mIGZpcnN0VmFsdWUgPT09ICdzdHJpbmcnICYmIHR5cGVvZiBzZWNvbmRWYWx1ZSA9PT0gJ251bWJlcicpIHtcbiAgICB2YXIgcmdiVmFsdWUgPSAoMCwgX3BhcnNlVG9SZ2IuZGVmYXVsdCkoZmlyc3RWYWx1ZSk7XG4gICAgcmV0dXJuIFwicmdiYShcIiArIHJnYlZhbHVlLnJlZCArIFwiLFwiICsgcmdiVmFsdWUuZ3JlZW4gKyBcIixcIiArIHJnYlZhbHVlLmJsdWUgKyBcIixcIiArIHNlY29uZFZhbHVlICsgXCIpXCI7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGZpcnN0VmFsdWUgPT09ICdudW1iZXInICYmIHR5cGVvZiBzZWNvbmRWYWx1ZSA9PT0gJ251bWJlcicgJiYgdHlwZW9mIHRoaXJkVmFsdWUgPT09ICdudW1iZXInICYmIHR5cGVvZiBmb3VydGhWYWx1ZSA9PT0gJ251bWJlcicpIHtcbiAgICByZXR1cm4gZm91cnRoVmFsdWUgPj0gMSA/ICgwLCBfcmdiLmRlZmF1bHQpKGZpcnN0VmFsdWUsIHNlY29uZFZhbHVlLCB0aGlyZFZhbHVlKSA6IFwicmdiYShcIiArIGZpcnN0VmFsdWUgKyBcIixcIiArIHNlY29uZFZhbHVlICsgXCIsXCIgKyB0aGlyZFZhbHVlICsgXCIsXCIgKyBmb3VydGhWYWx1ZSArIFwiKVwiO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBmaXJzdFZhbHVlID09PSAnb2JqZWN0JyAmJiBzZWNvbmRWYWx1ZSA9PT0gdW5kZWZpbmVkICYmIHRoaXJkVmFsdWUgPT09IHVuZGVmaW5lZCAmJiBmb3VydGhWYWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIGZpcnN0VmFsdWUuYWxwaGEgPj0gMSA/ICgwLCBfcmdiLmRlZmF1bHQpKGZpcnN0VmFsdWUucmVkLCBmaXJzdFZhbHVlLmdyZWVuLCBmaXJzdFZhbHVlLmJsdWUpIDogXCJyZ2JhKFwiICsgZmlyc3RWYWx1ZS5yZWQgKyBcIixcIiArIGZpcnN0VmFsdWUuZ3JlZW4gKyBcIixcIiArIGZpcnN0VmFsdWUuYmx1ZSArIFwiLFwiICsgZmlyc3RWYWx1ZS5hbHBoYSArIFwiKVwiO1xuICB9XG5cbiAgdGhyb3cgbmV3IF9lcnJvcnMuZGVmYXVsdCg3KTtcbn1cblxudmFyIF9kZWZhdWx0ID0gcmdiYTtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBfaHNsID1cbi8qI19fUFVSRV9fKi9cbl9pbnRlcm9wUmVxdWlyZURlZmF1bHQoXG4vKiNfX1BVUkVfXyovXG5yZXF1aXJlKFwiLi9oc2xcIikpO1xuXG52YXIgX2hzbGEgPVxuLyojX19QVVJFX18qL1xuX2ludGVyb3BSZXF1aXJlRGVmYXVsdChcbi8qI19fUFVSRV9fKi9cbnJlcXVpcmUoXCIuL2hzbGFcIikpO1xuXG52YXIgX3JnYiA9XG4vKiNfX1BVUkVfXyovXG5faW50ZXJvcFJlcXVpcmVEZWZhdWx0KFxuLyojX19QVVJFX18qL1xucmVxdWlyZShcIi4vcmdiXCIpKTtcblxudmFyIF9yZ2JhID1cbi8qI19fUFVSRV9fKi9cbl9pbnRlcm9wUmVxdWlyZURlZmF1bHQoXG4vKiNfX1BVUkVfXyovXG5yZXF1aXJlKFwiLi9yZ2JhXCIpKTtcblxudmFyIF9lcnJvcnMgPVxuLyojX19QVVJFX18qL1xuX2ludGVyb3BSZXF1aXJlRGVmYXVsdChcbi8qI19fUFVSRV9fKi9cbnJlcXVpcmUoXCIuLi9pbnRlcm5hbEhlbHBlcnMvX2Vycm9yc1wiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBpc1JnYiA9IGZ1bmN0aW9uIGlzUmdiKGNvbG9yKSB7XG4gIHJldHVybiB0eXBlb2YgY29sb3IucmVkID09PSAnbnVtYmVyJyAmJiB0eXBlb2YgY29sb3IuZ3JlZW4gPT09ICdudW1iZXInICYmIHR5cGVvZiBjb2xvci5ibHVlID09PSAnbnVtYmVyJyAmJiAodHlwZW9mIGNvbG9yLmFscGhhICE9PSAnbnVtYmVyJyB8fCB0eXBlb2YgY29sb3IuYWxwaGEgPT09ICd1bmRlZmluZWQnKTtcbn07XG5cbnZhciBpc1JnYmEgPSBmdW5jdGlvbiBpc1JnYmEoY29sb3IpIHtcbiAgcmV0dXJuIHR5cGVvZiBjb2xvci5yZWQgPT09ICdudW1iZXInICYmIHR5cGVvZiBjb2xvci5ncmVlbiA9PT0gJ251bWJlcicgJiYgdHlwZW9mIGNvbG9yLmJsdWUgPT09ICdudW1iZXInICYmIHR5cGVvZiBjb2xvci5hbHBoYSA9PT0gJ251bWJlcic7XG59O1xuXG52YXIgaXNIc2wgPSBmdW5jdGlvbiBpc0hzbChjb2xvcikge1xuICByZXR1cm4gdHlwZW9mIGNvbG9yLmh1ZSA9PT0gJ251bWJlcicgJiYgdHlwZW9mIGNvbG9yLnNhdHVyYXRpb24gPT09ICdudW1iZXInICYmIHR5cGVvZiBjb2xvci5saWdodG5lc3MgPT09ICdudW1iZXInICYmICh0eXBlb2YgY29sb3IuYWxwaGEgIT09ICdudW1iZXInIHx8IHR5cGVvZiBjb2xvci5hbHBoYSA9PT0gJ3VuZGVmaW5lZCcpO1xufTtcblxudmFyIGlzSHNsYSA9IGZ1bmN0aW9uIGlzSHNsYShjb2xvcikge1xuICByZXR1cm4gdHlwZW9mIGNvbG9yLmh1ZSA9PT0gJ251bWJlcicgJiYgdHlwZW9mIGNvbG9yLnNhdHVyYXRpb24gPT09ICdudW1iZXInICYmIHR5cGVvZiBjb2xvci5saWdodG5lc3MgPT09ICdudW1iZXInICYmIHR5cGVvZiBjb2xvci5hbHBoYSA9PT0gJ251bWJlcic7XG59O1xuLyoqXG4gKiBDb252ZXJ0cyBhIFJnYkNvbG9yLCBSZ2JhQ29sb3IsIEhzbENvbG9yIG9yIEhzbGFDb2xvciBvYmplY3QgdG8gYSBjb2xvciBzdHJpbmcuXG4gKiBUaGlzIHV0aWwgaXMgdXNlZnVsIGluIGNhc2UgeW91IG9ubHkga25vdyBvbiBydW50aW1lIHdoaWNoIGNvbG9yIG9iamVjdCBpc1xuICogdXNlZC4gT3RoZXJ3aXNlIHdlIHJlY29tbWVuZCB0byByZWx5IG9uIGByZ2JgLCBgcmdiYWAsIGBoc2xgIG9yIGBoc2xhYC5cbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gU3R5bGVzIGFzIG9iamVjdCB1c2FnZVxuICogY29uc3Qgc3R5bGVzID0ge1xuICogICBiYWNrZ3JvdW5kOiB0b0NvbG9yU3RyaW5nKHsgcmVkOiAyNTUsIGdyZWVuOiAyMDUsIGJsdWU6IDEwMCB9KSxcbiAqICAgYmFja2dyb3VuZDogdG9Db2xvclN0cmluZyh7IHJlZDogMjU1LCBncmVlbjogMjA1LCBibHVlOiAxMDAsIGFscGhhOiAwLjcyIH0pLFxuICogICBiYWNrZ3JvdW5kOiB0b0NvbG9yU3RyaW5nKHsgaHVlOiAyNDAsIHNhdHVyYXRpb246IDEsIGxpZ2h0bmVzczogMC41IH0pLFxuICogICBiYWNrZ3JvdW5kOiB0b0NvbG9yU3RyaW5nKHsgaHVlOiAzNjAsIHNhdHVyYXRpb246IDAuNzUsIGxpZ2h0bmVzczogMC40LCBhbHBoYTogMC43MiB9KSxcbiAqIH1cbiAqXG4gKiAvLyBzdHlsZWQtY29tcG9uZW50cyB1c2FnZVxuICogY29uc3QgZGl2ID0gc3R5bGVkLmRpdmBcbiAqICAgYmFja2dyb3VuZDogJHt0b0NvbG9yU3RyaW5nKHsgcmVkOiAyNTUsIGdyZWVuOiAyMDUsIGJsdWU6IDEwMCB9KX07XG4gKiAgIGJhY2tncm91bmQ6ICR7dG9Db2xvclN0cmluZyh7IHJlZDogMjU1LCBncmVlbjogMjA1LCBibHVlOiAxMDAsIGFscGhhOiAwLjcyIH0pfTtcbiAqICAgYmFja2dyb3VuZDogJHt0b0NvbG9yU3RyaW5nKHsgaHVlOiAyNDAsIHNhdHVyYXRpb246IDEsIGxpZ2h0bmVzczogMC41IH0pfTtcbiAqICAgYmFja2dyb3VuZDogJHt0b0NvbG9yU3RyaW5nKHsgaHVlOiAzNjAsIHNhdHVyYXRpb246IDAuNzUsIGxpZ2h0bmVzczogMC40LCBhbHBoYTogMC43MiB9KX07XG4gKiBgXG4gKlxuICogLy8gQ1NTIGluIEpTIE91dHB1dFxuICogZWxlbWVudCB7XG4gKiAgIGJhY2tncm91bmQ6IFwiI2ZmY2Q2NFwiO1xuICogICBiYWNrZ3JvdW5kOiBcInJnYmEoMjU1LDIwNSwxMDAsMC43MilcIjtcbiAqICAgYmFja2dyb3VuZDogXCIjMDBmXCI7XG4gKiAgIGJhY2tncm91bmQ6IFwicmdiYSgxNzksMjUsMjUsMC43MilcIjtcbiAqIH1cbiAqL1xuXG5cbmZ1bmN0aW9uIHRvQ29sb3JTdHJpbmcoY29sb3IpIHtcbiAgaWYgKHR5cGVvZiBjb2xvciAhPT0gJ29iamVjdCcpIHRocm93IG5ldyBfZXJyb3JzLmRlZmF1bHQoOCk7XG4gIGlmIChpc1JnYmEoY29sb3IpKSByZXR1cm4gKDAsIF9yZ2JhLmRlZmF1bHQpKGNvbG9yKTtcbiAgaWYgKGlzUmdiKGNvbG9yKSkgcmV0dXJuICgwLCBfcmdiLmRlZmF1bHQpKGNvbG9yKTtcbiAgaWYgKGlzSHNsYShjb2xvcikpIHJldHVybiAoMCwgX2hzbGEuZGVmYXVsdCkoY29sb3IpO1xuICBpZiAoaXNIc2woY29sb3IpKSByZXR1cm4gKDAsIF9oc2wuZGVmYXVsdCkoY29sb3IpO1xuICB0aHJvdyBuZXcgX2Vycm9ycy5kZWZhdWx0KDgpO1xufVxuXG52YXIgX2RlZmF1bHQgPSB0b0NvbG9yU3RyaW5nO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIF9jdXJyeSA9XG4vKiNfX1BVUkVfXyovXG5faW50ZXJvcFJlcXVpcmVEZWZhdWx0KFxuLyojX19QVVJFX18qL1xucmVxdWlyZShcIi4uL2ludGVybmFsSGVscGVycy9fY3VycnlcIikpO1xuXG52YXIgX2d1YXJkID1cbi8qI19fUFVSRV9fKi9cbl9pbnRlcm9wUmVxdWlyZURlZmF1bHQoXG4vKiNfX1BVUkVfXyovXG5yZXF1aXJlKFwiLi4vaW50ZXJuYWxIZWxwZXJzL19ndWFyZFwiKSk7XG5cbnZhciBfcGFyc2VUb0hzbCA9XG4vKiNfX1BVUkVfXyovXG5faW50ZXJvcFJlcXVpcmVEZWZhdWx0KFxuLyojX19QVVJFX18qL1xucmVxdWlyZShcIi4vcGFyc2VUb0hzbFwiKSk7XG5cbnZhciBfdG9Db2xvclN0cmluZyA9XG4vKiNfX1BVUkVfXyovXG5faW50ZXJvcFJlcXVpcmVEZWZhdWx0KFxuLyojX19QVVJFX18qL1xucmVxdWlyZShcIi4vdG9Db2xvclN0cmluZ1wiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9leHRlbmRzKCkgeyBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07IHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9XG5cbi8qKlxuICogUmV0dXJucyBhIHN0cmluZyB2YWx1ZSBmb3IgdGhlIGRhcmtlbmVkIGNvbG9yLlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBTdHlsZXMgYXMgb2JqZWN0IHVzYWdlXG4gKiBjb25zdCBzdHlsZXMgPSB7XG4gKiAgIGJhY2tncm91bmQ6IGRhcmtlbigwLjIsICcjRkZDRDY0JyksXG4gKiAgIGJhY2tncm91bmQ6IGRhcmtlbignMC4yJywgJ3JnYmEoMjU1LDIwNSwxMDAsMC43KScpLFxuICogfVxuICpcbiAqIC8vIHN0eWxlZC1jb21wb25lbnRzIHVzYWdlXG4gKiBjb25zdCBkaXYgPSBzdHlsZWQuZGl2YFxuICogICBiYWNrZ3JvdW5kOiAke2RhcmtlbigwLjIsICcjRkZDRDY0Jyl9O1xuICogICBiYWNrZ3JvdW5kOiAke2RhcmtlbignMC4yJywgJ3JnYmEoMjU1LDIwNSwxMDAsMC43KScpfTtcbiAqIGBcbiAqXG4gKiAvLyBDU1MgaW4gSlMgT3V0cHV0XG4gKlxuICogZWxlbWVudCB7XG4gKiAgIGJhY2tncm91bmQ6IFwiI2ZmYmQzMVwiO1xuICogICBiYWNrZ3JvdW5kOiBcInJnYmEoMjU1LDE4OSw0OSwwLjcpXCI7XG4gKiB9XG4gKi9cbmZ1bmN0aW9uIGRhcmtlbihhbW91bnQsIGNvbG9yKSB7XG4gIGlmIChjb2xvciA9PT0gJ3RyYW5zcGFyZW50JykgcmV0dXJuIGNvbG9yO1xuICB2YXIgaHNsQ29sb3IgPSAoMCwgX3BhcnNlVG9Ic2wuZGVmYXVsdCkoY29sb3IpO1xuICByZXR1cm4gKDAsIF90b0NvbG9yU3RyaW5nLmRlZmF1bHQpKF9leHRlbmRzKHt9LCBoc2xDb2xvciwge1xuICAgIGxpZ2h0bmVzczogKDAsIF9ndWFyZC5kZWZhdWx0KSgwLCAxLCBoc2xDb2xvci5saWdodG5lc3MgLSBwYXJzZUZsb2F0KGFtb3VudCkpXG4gIH0pKTtcbn0gLy8gcHJldHRpZXItaWdub3JlXG5cblxudmFyIGN1cnJpZWREYXJrZW4gPVxuLyojX19QVVJFX18qL1xuKDAsIF9jdXJyeS5kZWZhdWx0XG4vKiA6OjxudW1iZXIgfCBzdHJpbmcsIHN0cmluZywgc3RyaW5nPiAqL1xuKShkYXJrZW4pO1xudmFyIF9kZWZhdWx0ID0gY3VycmllZERhcmtlbjtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBfcGFyc2VUb1JnYiA9XG4vKiNfX1BVUkVfXyovXG5faW50ZXJvcFJlcXVpcmVEZWZhdWx0KFxuLyojX19QVVJFX18qL1xucmVxdWlyZShcIi4vcGFyc2VUb1JnYlwiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbi8qKlxuICogUmV0dXJucyBhIG51bWJlciAoZmxvYXQpIHJlcHJlc2VudGluZyB0aGUgbHVtaW5hbmNlIG9mIGEgY29sb3IuXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFN0eWxlcyBhcyBvYmplY3QgdXNhZ2VcbiAqIGNvbnN0IHN0eWxlcyA9IHtcbiAqICAgYmFja2dyb3VuZDogZ2V0THVtaW5hbmNlKCcjQ0NDRDY0JykgPj0gZ2V0THVtaW5hbmNlKCcjMDAwMGZmJykgPyAnI0NDQ0Q2NCcgOiAnIzAwMDBmZicsXG4gKiAgIGJhY2tncm91bmQ6IGdldEx1bWluYW5jZSgncmdiYSg1OCwgMTMzLCAyNTUsIDEpJykgPj0gZ2V0THVtaW5hbmNlKCdyZ2JhKDI1NSwgNTcsIDE0OSwgMSknKSA/XG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3JnYmEoNTgsIDEzMywgMjU1LCAxKScgOlxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICdyZ2JhKDI1NSwgNTcsIDE0OSwgMSknLFxuICogfVxuICpcbiAqIC8vIHN0eWxlZC1jb21wb25lbnRzIHVzYWdlXG4gKiBjb25zdCBkaXYgPSBzdHlsZWQuZGl2YFxuICogICBiYWNrZ3JvdW5kOiAke2dldEx1bWluYW5jZSgnI0NDQ0Q2NCcpID49IGdldEx1bWluYW5jZSgnIzAwMDBmZicpID8gJyNDQ0NENjQnIDogJyMwMDAwZmYnfTtcbiAqICAgYmFja2dyb3VuZDogJHtnZXRMdW1pbmFuY2UoJ3JnYmEoNTgsIDEzMywgMjU1LCAxKScpID49IGdldEx1bWluYW5jZSgncmdiYSgyNTUsIDU3LCAxNDksIDEpJykgP1xuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICdyZ2JhKDU4LCAxMzMsIDI1NSwgMSknIDpcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAncmdiYSgyNTUsIDU3LCAxNDksIDEpJ307XG4gKlxuICogLy8gQ1NTIGluIEpTIE91dHB1dFxuICpcbiAqIGRpdiB7XG4gKiAgIGJhY2tncm91bmQ6IFwiI0NDQ0Q2NFwiO1xuICogICBiYWNrZ3JvdW5kOiBcInJnYmEoNTgsIDEzMywgMjU1LCAxKVwiO1xuICogfVxuICovXG5mdW5jdGlvbiBnZXRMdW1pbmFuY2UoY29sb3IpIHtcbiAgaWYgKGNvbG9yID09PSAndHJhbnNwYXJlbnQnKSByZXR1cm4gMDtcbiAgdmFyIHJnYkNvbG9yID0gKDAsIF9wYXJzZVRvUmdiLmRlZmF1bHQpKGNvbG9yKTtcblxuICB2YXIgX09iamVjdCRrZXlzJG1hcCA9IE9iamVjdC5rZXlzKHJnYkNvbG9yKS5tYXAoZnVuY3Rpb24gKGtleSkge1xuICAgIHZhciBjaGFubmVsID0gcmdiQ29sb3Jba2V5XSAvIDI1NTtcbiAgICByZXR1cm4gY2hhbm5lbCA8PSAwLjAzOTI4ID8gY2hhbm5lbCAvIDEyLjkyIDogTWF0aC5wb3coKGNoYW5uZWwgKyAwLjA1NSkgLyAxLjA1NSwgMi40KTtcbiAgfSksXG4gICAgICByID0gX09iamVjdCRrZXlzJG1hcFswXSxcbiAgICAgIGcgPSBfT2JqZWN0JGtleXMkbWFwWzFdLFxuICAgICAgYiA9IF9PYmplY3Qka2V5cyRtYXBbMl07XG5cbiAgcmV0dXJuIHBhcnNlRmxvYXQoKDAuMjEyNiAqIHIgKyAwLjcxNTIgKiBnICsgMC4wNzIyICogYikudG9GaXhlZCgzKSk7XG59XG5cbnZhciBfZGVmYXVsdCA9IGdldEx1bWluYW5jZTtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7IiwiaW1wb3J0IGdldEx1bWluYW5jZSBmcm9tICdwb2xpc2hlZC9saWIvY29sb3IvZ2V0THVtaW5hbmNlJztcbmltcG9ydCB7IFRoZW1lVHlwZSB9IGZyb20gJy4uL3R5cGVzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZmluZENvbG9ySW52ZXJ0KHsgYmxhY2ssIHdoaXRlIH06IFRoZW1lVHlwZSwgY29sb3I6IHN0cmluZykge1xuICBpZiAoIWNvbG9yIHx8IGdldEx1bWluYW5jZShjb2xvcikgPiAwLjU1KSB7XG4gICAgcmV0dXJuIGJsYWNrO1xuICB9XG4gIHJldHVybiB3aGl0ZTtcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX2N1cnJ5ID1cbi8qI19fUFVSRV9fKi9cbl9pbnRlcm9wUmVxdWlyZURlZmF1bHQoXG4vKiNfX1BVUkVfXyovXG5yZXF1aXJlKFwiLi4vaW50ZXJuYWxIZWxwZXJzL19jdXJyeVwiKSk7XG5cbnZhciBfZ3VhcmQgPVxuLyojX19QVVJFX18qL1xuX2ludGVyb3BSZXF1aXJlRGVmYXVsdChcbi8qI19fUFVSRV9fKi9cbnJlcXVpcmUoXCIuLi9pbnRlcm5hbEhlbHBlcnMvX2d1YXJkXCIpKTtcblxudmFyIF9yZ2JhID1cbi8qI19fUFVSRV9fKi9cbl9pbnRlcm9wUmVxdWlyZURlZmF1bHQoXG4vKiNfX1BVUkVfXyovXG5yZXF1aXJlKFwiLi9yZ2JhXCIpKTtcblxudmFyIF9wYXJzZVRvUmdiID1cbi8qI19fUFVSRV9fKi9cbl9pbnRlcm9wUmVxdWlyZURlZmF1bHQoXG4vKiNfX1BVUkVfXyovXG5yZXF1aXJlKFwiLi9wYXJzZVRvUmdiXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2V4dGVuZHMoKSB7IF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTsgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH1cblxuLyoqXG4gKiBEZWNyZWFzZXMgdGhlIG9wYWNpdHkgb2YgYSBjb2xvci4gSXRzIHJhbmdlIGZvciB0aGUgYW1vdW50IGlzIGJldHdlZW4gMCB0byAxLlxuICpcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gU3R5bGVzIGFzIG9iamVjdCB1c2FnZVxuICogY29uc3Qgc3R5bGVzID0ge1xuICogICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudGl6ZSgwLjEsICcjZmZmJyk7XG4gKiAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50aXplKDAuMiwgJ2hzbCgwLCAwJSwgMTAwJSknKSxcbiAqICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnRpemUoJzAuNScsICdyZ2JhKDI1NSwgMCwgMCwgMC44KScpLFxuICogfVxuICpcbiAqIC8vIHN0eWxlZC1jb21wb25lbnRzIHVzYWdlXG4gKiBjb25zdCBkaXYgPSBzdHlsZWQuZGl2YFxuICogICBiYWNrZ3JvdW5kOiAke3RyYW5zcGFyZW50aXplKDAuMSwgJyNmZmYnKX07XG4gKiAgIGJhY2tncm91bmQ6ICR7dHJhbnNwYXJlbnRpemUoMC4yLCAnaHNsKDAsIDAlLCAxMDAlKScpfSxcbiAqICAgYmFja2dyb3VuZDogJHt0cmFuc3BhcmVudGl6ZSgnMC41JywgJ3JnYmEoMjU1LCAwLCAwLCAwLjgpJyl9LFxuICogYFxuICpcbiAqIC8vIENTUyBpbiBKUyBPdXRwdXRcbiAqXG4gKiBlbGVtZW50IHtcbiAqICAgYmFja2dyb3VuZDogXCJyZ2JhKDI1NSwyNTUsMjU1LDAuOSlcIjtcbiAqICAgYmFja2dyb3VuZDogXCJyZ2JhKDI1NSwyNTUsMjU1LDAuOClcIjtcbiAqICAgYmFja2dyb3VuZDogXCJyZ2JhKDI1NSwwLDAsMC4zKVwiO1xuICogfVxuICovXG5mdW5jdGlvbiB0cmFuc3BhcmVudGl6ZShhbW91bnQsIGNvbG9yKSB7XG4gIGlmIChjb2xvciA9PT0gJ3RyYW5zcGFyZW50JykgcmV0dXJuIGNvbG9yO1xuICB2YXIgcGFyc2VkQ29sb3IgPSAoMCwgX3BhcnNlVG9SZ2IuZGVmYXVsdCkoY29sb3IpO1xuICB2YXIgYWxwaGEgPSB0eXBlb2YgcGFyc2VkQ29sb3IuYWxwaGEgPT09ICdudW1iZXInID8gcGFyc2VkQ29sb3IuYWxwaGEgOiAxO1xuXG4gIHZhciBjb2xvcldpdGhBbHBoYSA9IF9leHRlbmRzKHt9LCBwYXJzZWRDb2xvciwge1xuICAgIGFscGhhOiAoMCwgX2d1YXJkLmRlZmF1bHQpKDAsIDEsIChhbHBoYSAqIDEwMCAtIHBhcnNlRmxvYXQoYW1vdW50KSAqIDEwMCkgLyAxMDApXG4gIH0pO1xuXG4gIHJldHVybiAoMCwgX3JnYmEuZGVmYXVsdCkoY29sb3JXaXRoQWxwaGEpO1xufSAvLyBwcmV0dGllci1pZ25vcmVcblxuXG52YXIgY3VycmllZFRyYW5zcGFyZW50aXplID1cbi8qI19fUFVSRV9fKi9cbigwLCBfY3VycnkuZGVmYXVsdFxuLyogOjo8bnVtYmVyIHwgc3RyaW5nLCBzdHJpbmcsIHN0cmluZz4gKi9cbikodHJhbnNwYXJlbnRpemUpO1xudmFyIF9kZWZhdWx0ID0gY3VycmllZFRyYW5zcGFyZW50aXplO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDsiLCJpbXBvcnQgeyBjc3MgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgdHJhbnNwYXJlbnRpemUgZnJvbSAncG9saXNoZWQvbGliL2NvbG9yL3RyYW5zcGFyZW50aXplJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYm94U2hhZG93KHNpemU6IHN0cmluZywgY29sb3I6IHN0cmluZywgYW1vdW50PzogbnVtYmVyKSB7XG4gIGNvbnN0IHNoYWRvd0NvbG9yID0gYW1vdW50ID8gdHJhbnNwYXJlbnRpemUoYW1vdW50LCBjb2xvcikgOiBjb2xvcjtcbiAgcmV0dXJuIGNzc2Bib3gtc2hhZG93OiAwIDAgMCAke3NpemV9ICR7c2hhZG93Q29sb3J9O2A7XG59XG4iLCJpbXBvcnQgeyBTaXplVHlwZSB9IGZyb20gJy4uL3R5cGVzJztcblxudHlwZSBTaXplUHJvcHNOYW1lVHlwZSA9ICdmb250LXNpemUnIHwgJ2hlaWdodCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNldFNpemUobmFtZTogU2l6ZVByb3BzTmFtZVR5cGUsIHNpemU/OiBTaXplVHlwZSkge1xuICBzd2l0Y2ggKHNpemUpIHtcbiAgICBjYXNlICdzbWFsbCc6XG4gICAgICByZXR1cm4gYCR7bmFtZX06IDAuNzVyZW07YDtcbiAgICBjYXNlICdtZWRpdW0nOlxuICAgICAgcmV0dXJuIGAke25hbWV9OiAxLjI1cmVtO2A7XG4gICAgY2FzZSAnbGFyZ2UnOlxuICAgICAgcmV0dXJuIGAke25hbWV9OiAxLjVyZW07YDtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGAke25hbWV9OiAxcmVtO2A7XG4gIH1cbn1cbiIsImltcG9ydCB7IGNzcyB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB0cmFuc3BhcmVudGl6ZSBmcm9tICdwb2xpc2hlZC9saWIvY29sb3IvdHJhbnNwYXJlbnRpemUnO1xuaW1wb3J0IHsgVGhlbWVUeXBlLCBDU1NUeXBlIH0gZnJvbSAnLi4vdHlwZXMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkaXNhYmxlZENvbG9yKHRoZW1lOiBUaGVtZVR5cGUpOiBDU1NUeXBlIHtcbiAgY29uc3QgdGV4dENvbG9yID0gdHJhbnNwYXJlbnRpemUoMC4xNSwgdGhlbWUudGV4dERhcmspO1xuICBjb25zdCBiYWNrQ29sb3IgPSB0cmFuc3BhcmVudGl6ZSgwLjU1LCB0aGVtZS5ib3JkZXIpO1xuICByZXR1cm4gY3NzYFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgY29sb3I6ICR7dGV4dENvbG9yfTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke2JhY2tDb2xvcn07XG4gIGA7XG59XG4iLCJpbXBvcnQgc3R5bGVkLCB7IGNzcyB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7IEhUTUxBdHRyaWJ1dGVzIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGRhcmtlbiBmcm9tICdwb2xpc2hlZC9saWIvY29sb3IvZGFya2VuJztcbmltcG9ydCBmaW5kQ29sb3JJbnZlcnQgZnJvbSAnLi4vLi4vdXRpbHMvZmluZENvbG9ySW52ZXJ0JztcbmltcG9ydCBib3hTaGFkb3cgZnJvbSAnLi4vLi4vdXRpbHMvYm94U2hhZG93JztcbmltcG9ydCBzZXRTaXplIGZyb20gJy4uLy4uL3V0aWxzL3NldFNpemUnO1xuaW1wb3J0IGRpc2FibGVkQ29sb3IgZnJvbSAnLi4vLi4vdXRpbHMvZGlzYWJsZWRDb2xvcic7XG5pbXBvcnQgeyBDb2xvclR5cGUsIFRoZW1lVHlwZSwgU2l6ZVR5cGUgfSBmcm9tICcuLi8uLi90eXBlcyc7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIHRoZW1lOiBUaGVtZVR5cGU7XG4gIGNvbG9yPzogQ29sb3JUeXBlO1xuICBvdXRsaW5lPzogYm9vbGVhbjtcbiAgZGlzYWJsZWQ/OiBib29sZWFuO1xufVxuXG5mdW5jdGlvbiBzZXRDb2xvcih7IHRoZW1lLCBjb2xvciwgb3V0bGluZSwgZGlzYWJsZWQgfTogUHJvcHMpIHtcbiAgaWYgKGRpc2FibGVkKSB7XG4gICAgcmV0dXJuIGRpc2FibGVkQ29sb3IodGhlbWUpO1xuICB9XG4gIGlmICghY29sb3IpIHtcbiAgICByZXR1cm4gY3NzYFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZS53aGl0ZX07XG4gICAgICBib3JkZXItY29sb3I6ICR7dGhlbWUuYm9yZGVyfTtcbiAgICAgIGNvbG9yOiAke3RoZW1lLnRleHR9O1xuXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAke3RoZW1lLmJvcmRlckhvdmVyfTtcbiAgICAgIH1cblxuICAgICAgJjphY3RpdmUge1xuICAgICAgICBib3JkZXItY29sb3I6ICR7dGhlbWUuYm9yZGVyQWN0aXZlfTtcbiAgICAgIH1cbiAgICBgO1xuICB9XG4gIGlmIChjb2xvciA9PT0gJ3RleHQnKSB7XG4gICAgcmV0dXJuIGNzc2BcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgIGNvbG9yOiAke3RoZW1lLnRleHR9O1xuXG4gICAgICAmOmhvdmVye1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgIH1cbiAgICBgO1xuICB9XG5cbiAgY29uc3QgdGFyZ2V0ID0gdGhlbWVbY29sb3JdIHx8IGNvbG9yO1xuICBjb25zdCBpbnZlcnRDb2xvciA9IGZpbmRDb2xvckludmVydCh0aGVtZSwgdGFyZ2V0KTtcbiAgaWYgKG91dGxpbmUpIHtcbiAgICByZXR1cm4gY3NzYFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICBib3JkZXItY29sb3I6ICR7dGFyZ2V0fTtcbiAgICAgIGNvbG9yOiAke3RhcmdldH07XG5cbiAgICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RhcmdldH07XG4gICAgICAgIGNvbG9yOiAke2ludmVydENvbG9yfTtcbiAgICAgIH1cblxuICAgICAgJjpmb2N1cyB7XG4gICAgICAgICR7Ym94U2hhZG93KCcwLjJyZW0nLCB0YXJnZXQsIDAuMil9XG4gICAgICB9XG4gICAgYDtcbiAgfVxuXG4gIHJldHVybiBjc3NgXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHt0YXJnZXR9O1xuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgY29sb3I6ICR7aW52ZXJ0Q29sb3J9O1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIGNvbG9yOiAke2ludmVydENvbG9yfTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7ZGFya2VuKDAuMDI1LCB0YXJnZXQpfTtcbiAgICB9XG5cbiAgICAmOmFjdGl2ZSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke2RhcmtlbigwLjA1LCB0YXJnZXQpfTtcbiAgICB9XG5cbiAgICAmOmZvY3VzIHtcbiAgICAgICR7Ym94U2hhZG93KCcwLjJyZW0nLCB0YXJnZXQsIDAuMil9XG4gICAgfVxuICBgO1xufVxuXG5pbnRlcmZhY2UgQnV0dG9uUHJvcHMgZXh0ZW5kcyBIVE1MQXR0cmlidXRlczxIVE1MQnV0dG9uRWxlbWVudD4ge1xuICAvKiog44Oc44K/44Oz44Gu6ImyICovXG4gIGNvbG9yPzogQ29sb3JUeXBlO1xuICAvKiog44Oc44K/44Oz44Gu44K144Kk44K6ICovXG4gIHNpemU/OiBTaXplVHlwZTtcbiAgLyoqIOiDjOaZr+OBjOmAj+aYjuOBquODnOOCv+ODs+OBp+OBmeOCiyAqL1xuICBvdXRsaW5lPzogYm9vbGVhbjtcbiAgLyoqIOWFqOS9k+W5heOBruODnOOCv+ODs+OBp+ioreWumiAqL1xuICBmdWxsPzogYm9vbGVhbjtcbn1cblxuY29uc3QgQnV0dG9uID0gc3R5bGVkLmJ1dHRvbjxCdXR0b25Qcm9wcz5gXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgYXBwZWFyYW5jZTogbm9uZTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBwYWRkaW5nOiAwLjM3NWVtIDAuNzVlbTtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcblxuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBiYWNrZ3JvdW5kLWNvbG9yLCBjb2xvciwgYm94LXNoYWRvdztcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMTUwbXM7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcblxuICAke3NldENvbG9yfVxuICAkeyh7IHNpemUgfSkgPT4gc2V0U2l6ZSgnZm9udC1zaXplJywgc2l6ZSl9XG4gICR7KHsgZnVsbCB9KSA9PiBmdWxsID8gJ3dpZHRoOiAxMDAlOycgOiAnJ31cbmA7XG5CdXR0b24uZGlzcGxheU5hbWUgPSAnQnV0dG9uJztcblxuZXhwb3J0IGRlZmF1bHQgQnV0dG9uO1xuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJy4nO1xuXG5jb25zdCBCdXR0b25Hcm91cCA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcblxuICAmOm5vdCg6bGFzdC1jaGlsZCkge1xuICAgIG1hcmdpbi1yaWdodDogMC41cmVtO1xuICB9XG5cbiAgJHtCdXR0b259IHtcbiAgICBtYXJnaW46IDA7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcblxuICAgICY6Zmlyc3QtY2hpbGQge1xuICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNHB4O1xuICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNHB4O1xuICAgIH1cblxuICAgICY6bm90KDpmaXJzdC1jaGlsZCkge1xuICAgICAgbWFyZ2luLWxlZnQ6IC0xcHg7XG4gICAgfVxuXG4gICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA0cHg7XG4gICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNHB4O1xuICAgIH1cbiAgfVxuYDtcbkJ1dHRvbkdyb3VwLmRpc3BsYXlOYW1lID0gJ0J1dHRvbkdyb3VwJztcblxuZXhwb3J0IGRlZmF1bHQgQnV0dG9uR3JvdXA7XG4iLCJpbXBvcnQgc3R5bGVkLCB7IGNzcyB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7IFNpemVUeXBlIH0gZnJvbSAnLi4vLi4vdHlwZXMnO1xuXG5jb25zdCBzdHJpcGVkU3R5bGUgPSBjc3NgXG4gIHRib2R5ID4gdHI6bnRoLWNoaWxkKG9kZCkge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4wMik7XG4gIH1cbmA7XG5cbmNvbnN0IGhvdmVyU3R5bGUgPSBjc3NgXG4gIHRib2R5ID4gdHI6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4wNCk7XG4gIH1cbmA7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIHNpemU/OiBTaXplVHlwZTtcbiAgZnVsbD86IGJvb2xlYW47XG4gIGhlYWRlclN0eWxlPzogYW55O1xuICBib3JkZXJlZD86IGJvb2xlYW47XG4gIGJvcmRlcmxlc3M/OiBib29sZWFuO1xuICBzdHJpcGVkPzogYm9vbGVhbjtcbiAgaG92ZXI/OiBib29sZWFuO1xufVxuXG5jb25zdCBUYWJsZSA9IHN0eWxlZC50YWJsZTxQcm9wcz5gXG4gIGRpc3BsYXk6IGJsb2NrO1xuICAkeyh7IGZ1bGwgfSkgPT4gZnVsbCA/IGNzc2B3aWR0aDogMTAwJTtgIDogJyd9XG4gIG1heC13aWR0aDogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG5cbiAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xuICAtbXMtb3ZlcmZsb3ctc3R5bGU6IC1tcy1hdXRvaGlkaW5nLXNjcm9sbGJhcjtcblxuICB0ZCwgdGgge1xuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgcGFkZGluZzogMC43NXJlbTtcbiAgICAkeyh7IHRoZW1lLCBib3JkZXJlZCB9KSA9PiBib3JkZXJlZCA/IGNzc2BcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICR7dGhlbWUuYm9yZGVyfTtcbiAgICBgIDogJyd9XG4gICAgYm9yZGVyLXdpZHRoOiAwIDAgMXB4O1xuICB9XG5cbiAgdGggeyB3aGl0ZS1zcGFjZTogbm93cmFwOyB9XG5cbiAgJHsoeyBzdHJpcGVkIH0pID0+IHN0cmlwZWQgPyBzdHJpcGVkU3R5bGUgOiAnJ31cbiAgJHsoeyBob3ZlciB9KSA9PiBob3ZlciA/IGhvdmVyU3R5bGUgOiAnJ31cblxuICAkeyh7IGhlYWRlclN0eWxlIH0pID0+IGhlYWRlclN0eWxlID8gY3NzYFxuICAgIHRoIHtcbiAgICAgICR7aGVhZGVyU3R5bGV9XG4gICAgfVxuICBgIDogJyd9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBUYWJsZTtcbiIsImltcG9ydCB7IEhUTUxBdHRyaWJ1dGVzIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCwgeyBjc3MgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgZmluZENvbG9ySW52ZXJ0IGZyb20gJy4uLy4uL3V0aWxzL2ZpbmRDb2xvckludmVydCc7XG5pbXBvcnQgeyBDb2xvclR5cGUgfSBmcm9tICcuLi8uLi90eXBlcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJvcHMgZXh0ZW5kcyBIVE1MQXR0cmlidXRlczxIVE1MRGl2RWxlbWVudD4ge1xuICAvKiog6Imy5oyH5a6aICovXG4gIGNvbG9yPzogQ29sb3JUeXBlO1xuICAvKiogYm9yZGVy44KS6Z2e6KGo56S644GZ44KLICovXG4gIGJvcmRlcmxlc3M/OiBib29sZWFuO1xuICBzdHlsZT86IGFueTtcbn1cblxuZnVuY3Rpb24gc2V0Q29sb3IoeyBjb2xvciwgdGhlbWUgfTogYW55KSB7XG4gIGlmICghY29sb3IpIHJldHVybiB7fTtcblxuICBjb25zdCB0YXJnZXQgPSB0aGVtZVtjb2xvcl0gfHwgY29sb3I7XG4gIGNvbnN0IGludmVydENvbG9yID0gZmluZENvbG9ySW52ZXJ0KHRoZW1lLCB0YXJnZXQpO1xuICByZXR1cm4gY3NzYGJhY2tncm91bmQtY29sb3I6ICR7dGFyZ2V0fTsgY29sb3I6ICR7aW52ZXJ0Q29sb3J9O2A7XG59XG5cbmNvbnN0IEJveCA9IHN0eWxlZC5kaXY8UHJvcHM+YFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICR7KHsgYm9yZGVybGVzcywgdGhlbWUgfSkgPT4gYm9yZGVybGVzcyA/IGBgIDogYGJvcmRlcjogMXB4IHNvbGlkICR7dGhlbWUuYm9yZGVyfTtgfVxuICBib3gtc2hhZG93OiAwIDFweCAycHggMCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIHdpZHRoOiAxMDAlO1xuXG4gIG1pbi13aWR0aDogMDtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xuXG4gICR7c2V0Q29sb3J9XG5gO1xuQm94LmRpc3BsYXlOYW1lID0gJ0JveCc7XG5cbmV4cG9ydCBkZWZhdWx0IEJveDtcbiIsImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50LCBIVE1MQXR0cmlidXRlcyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHNldFNpemUgZnJvbSAnLi4vLi4vdXRpbHMvc2V0U2l6ZSc7XG5pbXBvcnQgeyBDb2xvclR5cGUsIFNpemVUeXBlLCBDU1NUeXBlIH0gZnJvbSAnLi4vLi4vdHlwZXMnO1xuXG5pbnRlcmZhY2UgUHJvZ3Jlc3NQcm9wcyBleHRlbmRzIEhUTUxBdHRyaWJ1dGVzPEhUTUxEaXZFbGVtZW50PntcbiAgLyoqIOePvueKtuOBrumAsuaNlyAqL1xuICB2YWx1ZTogbnVtYmVyO1xuICAvKiog6YCy5o2X44Gu5pyA5aSn5YCkICovXG4gIG1heDogbnVtYmVyO1xuICAvKiog44OQ44O844Gu44K144Kk44K6ICovXG4gIHNpemU/OiBTaXplVHlwZTtcbiAgLyoqIHNpemXjgpLkvb/jgo/jgarjgYTjgajjgY3jga7nuKbluYXjgpLmjIflrprjgZnjgosgKi9cbiAgaGVpZ2h0Pzogc3RyaW5nO1xuICAvKiog44OQ44O844Gu6ImyICovXG4gIGNvbG9yPzogQ29sb3JUeXBlO1xuICAvKiog44Kr44K544K/44OgQ1NT5a6a576pICovXG4gIGNzcz86IENTU1R5cGU7XG59XG5cbmNvbnN0IFdyYXBwZXIgPSBzdHlsZWQuZGl2PFByb2dyZXNzUHJvcHM+YFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmJhY2tncm91bmR9O1xuXG4gICR7KHsgc2l6ZSB9KSA9PiBzZXRTaXplKCdoZWlnaHQnLCBzaXplKX1cbiAgJHsoeyBzaXplLCBoZWlnaHQgfSkgPT4gIXNpemUgJiYgaGVpZ2h0ID8gYGhlaWdodDogJHtoZWlnaHR9O2AgOiAnJ31cblxuICAmID4gZGl2W3JvbGU9XCJwcm9ncmVzc2JhclwiXSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgJHsoeyB2YWx1ZSwgbWF4IH0pID0+ICh2YWx1ZSA9PT0gbWF4KSA/ICcnIDogJ2JvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwOyBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDsnfVxuICAgIGJhY2tncm91bmQtY29sb3I6ICR7KHsgY29sb3IsIHRoZW1lIH0pID0+ICh0aGVtZVtjb2xvciFdIHx8IGNvbG9yKX07XG5cbiAgICB3aWxsLWNoYW5nZTogd2lkdGg7XG5cbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiB3aWR0aDtcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAzNTBtcztcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpO1xuICAgIHotaW5kZXg6IDE7XG4gIH1cbiAgJHsoeyBjc3MgfSkgPT4gKGNzcyB8fCAnJyl9XG5gO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2dyZXNzIGV4dGVuZHMgUHVyZUNvbXBvbmVudDxQcm9ncmVzc1Byb3BzPiB7XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgY29sb3I6ICdwcmltYXJ5JyxcbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgY29uc3QgeyB2YWx1ZSwgbWF4IH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHBlcmNlbnQgPSBNYXRoLnJvdW5kKCh2YWx1ZS9tYXgpICogMTAwKTtcbiAgICByZXR1cm4gKFxuICAgICAgPFdyYXBwZXIgey4uLnRoaXMucHJvcHN9PlxuICAgICAgICA8ZGl2IHJvbGU9XCJwcm9ncmVzc2JhclwiIHN0eWxlPXt7IHdpZHRoOiBgJHtwZXJjZW50ID4gMTAwID8gMTAwIDogcGVyY2VudH0lYCB9fSA+PC9kaXY+XG4gICAgICA8L1dyYXBwZXI+XG4gICAgKTtcbiAgfVxufTtcbiIsImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50LCBSZWFjdE5vZGUsIEhUTUxBdHRyaWJ1dGVzIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCwgeyBjc3MgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgeyBDU1NUeXBlIH0gZnJvbSAnLi4vLi4vdHlwZXMnO1xuXG5jb25zdCBXcmFwcGVyID0gc3R5bGVkLmRpdjx7IHJlcXVpcmVkPzogYm9vbGVhbiwgY3NzPzogQ1NTVHlwZSB9PmBcbiAgZGlzcGxheTogYmxvY2s7XG4gICY6bm90KDpsYXN0LWNoaWxkKSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMC43NXJlbTtcbiAgfVxuICAkeyh7IHJlcXVpcmVkLCB0aGVtZSB9KSA9PiByZXF1aXJlZCA/IGNzc2BcbiAgICBsYWJlbDo6YWZ0ZXIge1xuICAgICAgY29udGVudDogJyonO1xuICAgICAgY29sb3I6ICR7dGhlbWUucHJpbWFyeX07XG4gICAgICBtYXJnaW4tbGVmdDogMC4zMjVyZW07XG4gICAgfVxuICBgIDoge319XG5cbiAgJHsoeyBjc3MgfSkgPT4gY3NzIHx8IHt9fVxuYDtcblxuY29uc3QgTGFiZWwgPSBzdHlsZWQubGFiZWxgXG4gIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnRleHRTdHJvbmd9O1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAxcmVtO1xuICBtYXJnaW4tYm90dG9tOiAwLjMyNXJlbTtcbmA7XG5cbmludGVyZmFjZSBQcm9wcyBleHRlbmRzIEhUTUxBdHRyaWJ1dGVzPEhUTUxEaXZFbGVtZW50PiB7XG4gIGxhYmVsPzogc3RyaW5nO1xuICBjaGlsZHJlbjogUmVhY3ROb2RlO1xuICByZXF1aXJlZD86IGJvb2xlYW47XG4gIGNzcz86IENTU1R5cGU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZpZWxkIGV4dGVuZHMgUHVyZUNvbXBvbmVudDxQcm9wcz4ge1xuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBsYWJlbCwgY2hpbGRyZW4sIC4uLnJlc3QgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxXcmFwcGVyIHsuLi5yZXN0fT5cbiAgICAgICAge2xhYmVsICYmICg8TGFiZWw+e2xhYmVsfTwvTGFiZWw+KX1cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9XcmFwcGVyPlxuICAgICk7XG4gIH1cbn1cbiIsImltcG9ydCB7IGNzcyB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7IENTU1R5cGUgfSBmcm9tICcuLi90eXBlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbWJ1cmdlcihzaXplOiBzdHJpbmcpOiBDU1NUeXBlIHtcbiAgcmV0dXJuIGNzc2BcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgaGVpZ2h0OiAke3NpemV9O1xuICAgIHdpZHRoOiAke3NpemV9O1xuXG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHNwYW4ge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogY3VycmVudENvbG9yO1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBoZWlnaHQ6IDFweDtcbiAgICAgIGxlZnQ6IGNhbGMoNTAlIC0gOHB4KTtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcbiAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDEwMG1zO1xuICAgICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYmFja2dyb3VuZC1jb2xvciwgb3BhY2l0eSwgdHJhbnNmb3JtO1xuICAgICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xuICAgICAgd2lkdGg6IDE2cHg7XG5cbiAgICAgICY6bnRoLWNoaWxkKDEpIHtcbiAgICAgICAgdG9wOiBjYWxjKDUwJSAtIDZweCk7XG4gICAgICB9XG4gICAgICAmOm50aC1jaGlsZCgyKSB7XG4gICAgICAgIHRvcDogY2FsYyg1MCUgLSAxcHgpO1xuICAgICAgfVxuICAgICAgJjpudGgtY2hpbGQoMykge1xuICAgICAgICB0b3A6IGNhbGMoNTAlICsgNHB4KTtcbiAgICAgIH1cblxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoYmxhY2ssIDAuMDUpO1xuICAgICAgfVxuICAgIH1cblxuICAgICYuYWN0aXZlIHNwYW4ge1xuICAgICAgJjpudGgtY2hpbGQoMSkge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNXB4KSByb3RhdGUoNDVkZWcpO1xuICAgICAgfVxuICAgICAgJjpudGgtY2hpbGQoMikge1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgfVxuICAgICAgJjpudGgtY2hpbGQoMykge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTVweCkgcm90YXRlKC00NWRlZyk7XG4gICAgICB9XG4gICAgfVxuICBgO1xufVxuIiwiaW1wb3J0IHsgY3NzIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgQ1NTVHlwZSB9IGZyb20gJy4uL3R5cGVzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXJyb3coY29sb3I6IHN0cmluZywgZGlyZWN0aW9uPzogc3RyaW5nKTogQ1NTVHlwZSB7XG4gIHJldHVybiBjc3NgXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvcmRlcjogM3B4IHNvbGlkICR7Y29sb3J9O1xuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICBib3JkZXItcmlnaHQ6IDA7XG4gICAgYm9yZGVyLXRvcDogMDtcbiAgICBjb250ZW50OiBcIiBcIjtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBoZWlnaHQ6IDAuNjI1ZW07XG4gICAgbWFyZ2luLXRvcDogLTAuNjI1ZW07XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgdG9wOiA1MCU7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XG4gICAgd2lkdGg6IDAuNjI1ZW07XG4gIGA7XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmludGVyZmFjZSBNc2dQcm9wcyB7XG4gIGVycm9yPzogYm9vbGVhbjtcbn1cblxuY29uc3QgTWVzc2FnZSA9IHN0eWxlZC5zcGFuPE1zZ1Byb3BzPmBcbiAgZm9udC1zaXplOiAwLjhyZW07XG4gIGNvbG9yOiAkeyh7IGVycm9yLCB0aGVtZSB9KSA9PiBlcnJvciA/IHRoZW1lLmRhbmdlciA6IHRoZW1lLnRleHRMaWdodH07XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIZWxwTWVzc2FnZShoZWxwPzogc3RyaW5nLCBlcnJvcj86IHN0cmluZykge1xuICBpZiAoZXJyb3IpIHtcbiAgICByZXR1cm4gKDxNZXNzYWdlIGVycm9yPntlcnJvcn08L01lc3NhZ2U+KTtcbiAgfVxuICBpZiAoaGVscCkge1xuICAgIHJldHVybiAoPE1lc3NhZ2U+e2hlbHB9PC9NZXNzYWdlPik7XG4gIH1cbn1cbiIsImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50LCBJbnB1dEhUTUxBdHRyaWJ1dGVzIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCwgeyBjc3MgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgeyBzZXRTaXplIH0gZnJvbSAnLi4vLi4vdXRpbHMnO1xuaW1wb3J0IGRpc2FibGVkQ29sb3IgZnJvbSAnLi4vLi4vdXRpbHMvZGlzYWJsZWRDb2xvcic7XG5pbXBvcnQgSGVscE1lc3NhZ2UgZnJvbSAnLi9IZWxwTWVzc2FnZSc7XG5pbXBvcnQgeyBDU1NUeXBlIH0gZnJvbSAnLi4vLi4vdHlwZXMnO1xuXG5pbnRlcmZhY2UgV3JhcHBlclByb3BzIHtcbiAgb3V0bGluZT86IGJvb2xlYW47XG4gIGVycm9yPzogYW55O1xuICBjc3M/OiBDU1NUeXBlO1xufVxuXG5pbnRlcmZhY2UgSWNvblByb3BzIHtcbiAgcmlnaHQ/OiBib29sZWFuO1xufVxuXG5jb25zdCByaWdodEljb24gPSBjc3NgXG4gIHJpZ2h0OiAwLjM3NWVtO1xuICAmIH4gaW5wdXQge1xuICAgIHBhZGRpbmctcmlnaHQ6IDEuNTU1ZW0gIWltcG9ydGFudDtcbiAgfVxuYDtcblxuY29uc3QgbGVmdEljb24gPSBjc3NgXG4gIGxlZnQ6IDAuMzc1ZW07XG4gICYgfiBpbnB1dCB7XG4gICAgcGFkZGluZy1sZWZ0OiAxLjU1ZW0gIWltcG9ydGFudDtcbiAgfVxuYDtcblxuY29uc3QgSWNvbiA9IHN0eWxlZC5zcGFuPEljb25Qcm9wcz5gXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwLjM3NWVtO1xuICBib3R0b206IDA7XG4gIHotaW5kZXg6IDE7XG4gIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmJvcmRlcn07XG4gICR7KHsgcmlnaHQgfSkgPT4gcmlnaHQgPyByaWdodEljb24gOiBsZWZ0SWNvbn1cblxuICBzdmcsIGltZyB7XG4gICAgaGVpZ2h0OiAxZW07XG4gICAgd2lkdGg6IDFlbTtcbiAgfVxuYDtcblxuY29uc3QgV3JhcHBlciA9IHN0eWxlZC5zcGFuPFdyYXBwZXJQcm9wcz5gXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogYmxvY2s7XG5cbiAgaW5wdXQge1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICBhcHBlYXJhbmNlOiBub25lO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgY29sb3I6IGluaGVyaXQ7XG5cbiAgICBwYWRkaW5nOiAwLjM3NWVtIDAuNjI1ZW07XG4gICAgYm9yZGVyOiBub25lO1xuICAgICR7KHsgb3V0bGluZSwgdGhlbWUsIGVycm9yIH0pID0+IG91dGxpbmUgP1xuICAgICAgYGJvcmRlcjogMXB4IHNvbGlkICR7ZXJyb3IgPyB0aGVtZS5kYW5nZXIgOiB0aGVtZS5ib3JkZXJ9OyBib3JkZXItcmFkaXVzOiA0cHg7YCA6XG4gICAgICBgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICR7ZXJyb3IgPyB0aGVtZS5kYW5nZXIgOiB0aGVtZS5ib3JkZXJ9OyBib3JkZXItcmFkaXVzOiAwO2BcbiAgICB9XG4gICAgJHtzZXRTaXplKCdmb250LXNpemUnKX1cblxuICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IGJveC1zaGFkb3c7XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMTUwbXM7XG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xuXG4gICAgJjpmb2N1cyB7XG4gICAgICBib3JkZXItY29sb3I6ICR7KHsgZXJyb3IsIHRoZW1lIH0pID0+IChlcnJvciA/IHRoZW1lLmRhbmdlciA6IHRoZW1lLnByaW1hcnkpfTtcbiAgICAgICR7KHsgdGhlbWUsIG91dGxpbmUsIGVycm9yIH0pID0+IG91dGxpbmUgP1xuICAgICAgICBgYm94LXNoYWRvdzogMCAwIDAgMC4xZW0gJHtlcnJvciA/IHRoZW1lLmRhbmdlciA6IHRoZW1lLnByaW1hcnl9O2AgOlxuICAgICAgICBgYm94LXNoYWRvdzogMCAwLjFlbSAke2Vycm9yID8gdGhlbWUuZGFuZ2VyIDogdGhlbWUucHJpbWFyeX07YFxuICAgICAgfVxuICAgIH1cblxuICAgICY6ZGlzYWJsZWQsIFtkaXNhYmxlZF0sICY6cmVhZG9ubHkge1xuICAgICAgJHsoeyB0aGVtZSB9KSA9PiBkaXNhYmxlZENvbG9yKHRoZW1lKX1cbiAgICB9XG5cbiAgICAmOmRpc2FibGVkLCBbZGlzYWJsZWRdIHtcbiAgICAgIHJlc2l6ZTogbm9uZTtcbiAgICB9XG5cbiAgICAmOjpwbGFjZWhvbGRlciB7XG4gICAgICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5wbGFjZWhvbGRlcn07XG4gICAgfVxuICB9XG5cbiAgJjpob3ZlciB7XG4gICAgaW5wdXQ6bm90KDpkaXNhYmxlZCk6bm90KDpmb2N1cyk6bm90KDphY3RpdmUpIHtcbiAgICAgIGJvcmRlci1jb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5ib3JkZXJIb3Zlcn07XG4gICAgfVxuICAgICR7SWNvbn0ge1xuICAgICAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuYm9yZGVySG92ZXJ9O1xuICAgIH1cbiAgfVxuICAkeyh7IGNzcyB9KSA9PiBjc3MgfHwgJyd9XG5gO1xuXG5pbnRlcmZhY2UgUHJvcHMgZXh0ZW5kcyBJbnB1dEhUTUxBdHRyaWJ1dGVzPEhUTUxJbnB1dEVsZW1lbnQ+IHtcbiAgcGxhY2Vob2xkZXI/OiBzdHJpbmc7XG4gIC8qKiAndGV4dCcgfCAnbnVtYmVyJyB8ICdwYXNzd29yZCcgfCAnZW1haWwnIHwgJ3RlbCcgfCAnc2VhcmNoJyAqL1xuICB0eXBlOiAndGV4dCcgfCAnbnVtYmVyJyB8ICdwYXNzd29yZCcgfCAnZW1haWwnIHwgJ3RlbCcgfCAnc2VhcmNoJztcbiAgLyoqIOOCqOODqeODvOOBrueZuueUn+aZguOBruihqOekuuODhuOCreOCueODiCAqL1xuICBlcnJvcj86IHN0cmluZyB8IGFueTtcbiAgLyoqIOaNleaNieODhuOCreOCueODiCAqL1xuICBoZWxwPzogc3RyaW5nIHwgYW55O1xuICAvKiog44Oc44OD44Kv44K557O744Gu44OH44K244Kk44Oz44Gn44GZ44KLICovXG4gIG91dGxpbmU/OiBib29sZWFuO1xuICAvKiog5bem5YG044Gu44Ki44Kk44Kz44OzICovXG4gIGxlZnRJY29uPzogYW55O1xuICAvKiog5Y+z5YG044Gu44Ki44Kk44Kz44OzICovXG4gIHJpZ2h0SWNvbj86IGFueTtcbiAgLyoqIOOCq+OCueOCv+ODoENTU+Wumue+qSAqL1xuICBjc3M/OiBDU1NUeXBlO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXh0SW5wdXQgZXh0ZW5kcyBQdXJlQ29tcG9uZW50PFByb3BzPiB7XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgdHlwZTogJ3RleHQnLFxuICAgIHZhbHVlOiAnJyxcbiAgICBtYXhMZW5ndGg6IDI1NSxcbiAgICBvbkNoYW5nZTogKCkgPT4ge30sXG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGNsYXNzTmFtZSwgb3V0bGluZSwgZXJyb3IsIGhlbHAsIGxlZnRJY29uLCByaWdodEljb24sIHN0eWxlLCBjc3MsIC4uLnJlc3RcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPFdyYXBwZXIgY2xhc3NOYW1lPXtjbGFzc05hbWV9IG91dGxpbmU9e291dGxpbmV9IGVycm9yPXtlcnJvcn0gc3R5bGU9e3N0eWxlfSBjc3M9e2Nzc30+XG4gICAgICAgIHtsZWZ0SWNvbiAmJiAoPEljb24+e2xlZnRJY29ufTwvSWNvbj4pfVxuICAgICAgICB7cmlnaHRJY29uICYmICg8SWNvbiByaWdodD57cmlnaHRJY29ufTwvSWNvbj4pfVxuICAgICAgICA8aW5wdXQgey4uLnJlc3R9IC8+XG4gICAgICAgIHtIZWxwTWVzc2FnZShoZWxwLCBlcnJvcil9XG4gICAgICA8L1dyYXBwZXI+XG4gICAgKTtcbiAgfVxufVxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgVGV4dGFyZWFIVE1MQXR0cmlidXRlcyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IGJveFNoYWRvdyBmcm9tICcuLi8uLi91dGlscy9ib3hTaGFkb3cnO1xuaW1wb3J0IHNldFNpemUgZnJvbSAnLi4vLi4vdXRpbHMvc2V0U2l6ZSc7XG5pbXBvcnQgZGlzYWJsZWRDb2xvciBmcm9tICcuLi8uLi91dGlscy9kaXNhYmxlZENvbG9yJztcbmltcG9ydCBIZWxwTWVzc2FnZSBmcm9tICcuL0hlbHBNZXNzYWdlJztcbmltcG9ydCB7IENTU1R5cGUgfSBmcm9tICcuLi8uLi90eXBlcyc7XG5cbmludGVyZmFjZSBXcmFwcGVyUHJvcHMge1xuICBlcnJvcj86IHN0cmluZztcbiAgY3NzPzogQ1NTVHlwZTtcbn1cblxuY29uc3QgV3JhcHBlciA9IHN0eWxlZC5zcGFuPFdyYXBwZXJQcm9wcz5gXG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgdGV4dGFyZWEge1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgcGFkZGluZzogMC42MjVlbTtcbiAgICByZXNpemU6IHZlcnRpY2FsO1xuICAgIGFwcGVhcmFuY2U6IG5vbmU7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGNvbG9yOiBpbmhlcml0O1xuXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICR7KHsgdGhlbWUsIGVycm9yIH0pID0+IGVycm9yID8gdGhlbWUuZGFuZ2VyIDogdGhlbWUuYm9yZGVyfTtcblxuICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IGJveC1zaGFkb3c7XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4xNXM7XG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xuXG4gICAgJHtzZXRTaXplKCdmb250LXNpemUnKX1cblxuICAgICY6Zm9jdXMge1xuICAgICAgYm9yZGVyLWNvbG9yOiAkeyh7IHRoZW1lLCBlcnJvciB9KSA9PiBlcnJvciA/IHRoZW1lLmRhbmdlciA6IHRoZW1lLnByaW1hcnl9O1xuICAgICAgJHsoeyB0aGVtZSwgZXJyb3IgfSkgPT4gYm94U2hhZG93KCcwLjFlbScsIGVycm9yID8gdGhlbWUuZGFuZ2VyIDogdGhlbWUucHJpbWFyeSl9XG4gICAgfVxuXG4gICAgJjpkaXNhYmxlZCwgW2Rpc2FibGVkXSwgJjpyZWFkb25seSB7XG4gICAgICAkeyh7IHRoZW1lIH0pID0+IGRpc2FibGVkQ29sb3IodGhlbWUpfVxuICAgIH1cblxuICAgICY6ZGlzYWJsZWQsIFtkaXNhYmxlZF0ge1xuICAgICAgcmVzaXplOiBub25lO1xuICAgIH1cblxuICAgICY6OnBsYWNlaG9sZGVyIHtcbiAgICAgIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnBsYWNlaG9sZGVyfTtcbiAgICB9XG4gIH1cblxuICAmOmhvdmVyIHtcbiAgICB0ZXh0YXJlYTpub3QoOmRpc2FibGVkKTpub3QoOmZvY3VzKSB7XG4gICAgICBib3JkZXItY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuYm9yZGVySG92ZXJ9O1xuICAgIH1cbiAgfVxuICAkeyh7IGNzcyB9KSA9PiBjc3MgfHwge319XG5gO1xuXG5pbnRlcmZhY2UgUHJvcHMgZXh0ZW5kcyBUZXh0YXJlYUhUTUxBdHRyaWJ1dGVzPEhUTUxUZXh0QXJlYUVsZW1lbnQ+IHtcbiAgLyoqIOOCqOODqeODvOOBrueZuueUn+aZguOBruihqOekuuODhuOCreOCueODiCAqL1xuICBlcnJvcj86IHN0cmluZyB8IGFueTtcbiAgLyoqIOaNleaNieODhuOCreOCueODiCAqL1xuICBoZWxwPzogc3RyaW5nIHwgYW55O1xuICAvKiog44Kr44K544K/44OgQ1NT5a6a576pICovXG4gIGNzcz86IENTU1R5cGU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRleHRhcmVhIGV4dGVuZHMgQ29tcG9uZW50PFByb3BzPiB7XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgdmFsdWU6ICcnLFxuICAgIGNvbDogMixcbiAgICByb3c6IDUsXG4gICAgb25DaGFuZ2U6ICgpID0+IHt9LFxuICB9O1xuXG4gIHNob3VsZENvbXBvbmVudFVwZGF0ZShwcm9wczogUHJvcHMpIHtcbiAgICByZXR1cm4gcHJvcHMudmFsdWUgIT09IHRoaXMucHJvcHMudmFsdWUgfHxcbiAgICAgIHByb3BzLmhlbHAgIT09IHRoaXMucHJvcHMuaGVscCB8fFxuICAgICAgcHJvcHMuZXJyb3IgIT09IHRoaXMucHJvcHMuZXJyb3IgfHxcbiAgICAgIHByb3BzLmRpc2FibGVkICE9PSB0aGlzLnByb3BzLmRpc2FibGVkIHx8XG4gICAgICBwcm9wcy5yZWFkT25seSAhPT0gdGhpcy5wcm9wcy5yZWFkT25seTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNsYXNzTmFtZSwgaGVscCwgZXJyb3IsIHN0eWxlLCBjc3MsIC4uLnJlc3QgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxXcmFwcGVyIGNsYXNzTmFtZT17Y2xhc3NOYW1lfSBlcnJvcj17ZXJyb3J9IHN0eWxlPXtzdHlsZX0gY3NzPXtjc3N9PlxuICAgICAgICA8dGV4dGFyZWEgey4uLnJlc3R9IC8+XG4gICAgICAgIHtIZWxwTWVzc2FnZShoZWxwLCBlcnJvcil9XG4gICAgICA8L1dyYXBwZXI+XG4gICAgKTtcbiAgfVxufVxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgSW5wdXRIVE1MQXR0cmlidXRlcyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB0cmFuc3BhcmVudGl6ZSBmcm9tICdwb2xpc2hlZC9saWIvY29sb3IvdHJhbnNwYXJlbnRpemUnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmNvbnN0IFdyYXBwZXIgPSBzdHlsZWQuc3BhbmBcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IGF1dG87XG5cbiAgbGFiZWwge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBwYWRkaW5nLWxlZnQ6IDAuNjI1ZW07XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjI1O1xuICAgIG1hcmdpbi1yaWdodDogMC42MjVyZW07XG5cbiAgICAmOmJlZm9yZSwgJjphZnRlciB7XG4gICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIH1cblxuICAgICY6YWZ0ZXIge1xuICAgICAgdG9wOiAwLjI1ZW07XG4gICAgICBsZWZ0OiAwLjJlbTtcbiAgICAgIHdpZHRoOiAwLjg1ZW07XG4gICAgICBoZWlnaHQ6IDAuNWVtO1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgICAgIGJvcmRlcjogMC4xZW0gc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICBib3JkZXItdG9wLXN0eWxlOiBub25lO1xuICAgICAgYm9yZGVyLXJpZ2h0LXN0eWxlOiBub25lO1xuICAgIH1cblxuICAgICY6YmVmb3JlIHtcbiAgICAgIHdpZHRoOiAxLjI1ZW07XG4gICAgICBoZWlnaHQ6IDEuMjVlbTtcbiAgICAgIGxlZnQ6MDtcbiAgICAgIHRvcDogMDtcbiAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5ib3JkZXJ9O1xuICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgICB3aWxsLWNoYW5nZTogYmFja2dyb3VuZDtcbiAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgMTUwbXMgZWFzZS1vdXQ7XG4gICAgfVxuICB9XG5cbiAgaW5wdXQge1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcblxuICAgICY6Y2hlY2tlZCArIGxhYmVsIHtcbiAgICAgICY6YmVmb3Jle1xuICAgICAgICBib3JkZXItY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUucHJpbWFyeX07XG4gICAgICAgIGJhY2tncm91bmQ6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUucHJpbWFyeX07XG4gICAgICB9XG4gICAgICAmOmFmdGVyIHtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLndoaXRlfTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmOmluZGV0ZXJtaW5hdGUgKyBsYWJlbCB7XG4gICAgICAmOmJlZm9yZSB7XG4gICAgICAgIGJvcmRlci1jb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5wcmltYXJ5fTtcbiAgICAgICAgYmFja2dyb3VuZDogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5wcmltYXJ5fTtcbiAgICAgIH1cbiAgICAgICY6YWZ0ZXIge1xuICAgICAgICBib3JkZXItY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUud2hpdGV9O1xuICAgICAgICBib3JkZXItbGVmdC1zdHlsZTogbm9uZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmOmRpc2FibGVkIHtcbiAgICAgICsgbGFiZWwge1xuICAgICAgICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0cmFuc3BhcmVudGl6ZSgwLjI1LCB0aGVtZS50ZXh0RGFyayl9O1xuICAgICAgICAmOmJlZm9yZSB7XG4gICAgICAgICAgYmFja2dyb3VuZDogJHsoeyB0aGVtZSB9KSA9PiB0cmFuc3BhcmVudGl6ZSgwLjU1LCB0aGVtZS5ib3JkZXIpfTtcbiAgICAgICAgICBib3JkZXItY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuYm9yZGVyfTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgJjpjaGVja2VkICsgbGFiZWw6YWZ0ZXIge1xuICAgICAgICBib3JkZXItY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdHJhbnNwYXJlbnRpemUoMC4xNSwgdGhlbWUudGV4dERhcmspfTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbmA7XG5cbmludGVyZmFjZSBQcm9wcyBleHRlbmRzIElucHV0SFRNTEF0dHJpYnV0ZXM8SFRNTElucHV0RWxlbWVudD4ge1xuICBjaGlsZHJlbj86IGFueTtcbiAgY2hlY2tlZD86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENoZWNrYm94IGV4dGVuZHMgQ29tcG9uZW50PFByb3BzPiB7XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgbmFtZTogbnVsbCxcbiAgICBjaGlsZHJlbjogbnVsbCxcbiAgICBjaGVja2VkOiBmYWxzZSxcbiAgICBvbkNoYW5nZTogKCkgPT4ge30sXG4gIH07XG5cbiAgaWQgPSBgY2hlY2tib3hfJHt0aGlzLnByb3BzLm5hbWV9YDtcblxuICBzaG91bGRDb21wb25lbnRVcGRhdGUocHJvcHM6IFByb3BzKSB7XG4gICAgcmV0dXJuIHByb3BzLmNoZWNrZWQgIT09IHRoaXMucHJvcHMuY2hlY2tlZCB8fFxuICAgICAgcHJvcHMuY2hpbGRyZW4gIT09IHRoaXMucHJvcHMuY2hpbGRyZW47XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjbGFzc05hbWUsIGNoaWxkcmVuLCAuLi5yZXN0IH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8V3JhcHBlciBjbGFzc05hbWU9e2NsYXNzTmFtZX0gPlxuICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgaWQ9e3RoaXMuaWR9IHsuLi5yZXN0fSAvPlxuICAgICAgICA8bGFiZWwgaHRtbEZvcj17dGhpcy5pZH0+e2NoaWxkcmVufTwvbGFiZWw+XG4gICAgICA8L1dyYXBwZXI+XG4gICAgKTtcbiAgfVxufVxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgU2VsZWN0SFRNTEF0dHJpYnV0ZXMgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZWQsIHsgY3NzIH0gZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgYXJyb3cgZnJvbSBcIi4uLy4uL3V0aWxzL2Fycm93XCI7XG5pbXBvcnQgc2V0U2l6ZSBmcm9tIFwiLi4vLi4vdXRpbHMvc2V0U2l6ZVwiO1xuaW1wb3J0IEhlbHBNZXNzYWdlIGZyb20gXCIuL0hlbHBNZXNzYWdlXCI7XG5pbXBvcnQgeyBTaXplVHlwZSwgQ1NTVHlwZSB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuaW1wb3J0IGRpc2FibGVkQ29sb3IgZnJvbSBcIi4uLy4uL3V0aWxzL2Rpc2FibGVkQ29sb3JcIjtcblxuaW50ZXJmYWNlIFdyYXBwZXJQcm9wcyB7XG4gIHNpemU/OiBTaXplVHlwZTtcbiAgb3V0bGluZT86IGJvb2xlYW47XG4gIGVycm9yPzogc3RyaW5nO1xuICBkaXNhYmxlZD86IGJvb2xlYW47XG4gIGNzcz86IENTU1R5cGU7XG59XG5cbmNvbnN0IElucHV0V3JhcHBlciA9IHN0eWxlZC5zcGFuPFdyYXBwZXJQcm9wcz5gXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogYmxvY2s7XG5cbiAgc2VsZWN0IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYXBwZWFyYW5jZTogbm9uZTtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgcGFkZGluZzogMC4zNzVlbSAwLjYyNWVtO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgY29sb3I6IGluaGVyaXQ7XG5cbiAgICAkeyh7IHNpemUgfSkgPT4gc2V0U2l6ZShcImZvbnQtc2l6ZVwiLCBzaXplKX1cblxuICAgIGJvcmRlcjogbm9uZTtcbiAgICAkeyh7IG91dGxpbmUsIHRoZW1lLCBlcnJvciB9KSA9PlxuICAgICAgb3V0bGluZSA/IGNzc2BcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJHtlcnJvciA/IHRoZW1lLmRhbmdlciA6IHRoZW1lLmJvcmRlcn07XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgIGAgOiBjc3NgXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAke2Vycm9yID8gdGhlbWUuZGFuZ2VyIDogdGhlbWUuYm9yZGVyfTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICAgIGB9XG5cbiAgICB3aWxsLWNoYW5nZTogYm94LXNoYWRvdztcbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBib3gtc2hhZG93O1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDE1MG1zO1xuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcblxuICAgICY6Zm9jdXMge1xuICAgICAgYm9yZGVyLWNvbG9yOiAkeyh7IGVycm9yLCB0aGVtZSB9KSA9PiBlcnJvciA/IHRoZW1lLmRhbmdlciA6IHRoZW1lLnByaW1hcnl9O1xuICAgICAgYm94LXNoYWRvdzogJHtcbiAgICAgICAgKHsgdGhlbWUsIG91dGxpbmUsIGVycm9yIH0pID0+IG91dGxpbmUgP1xuICAgICAgICAgIChlcnJvciA/IHRoZW1lLmRhbmdlciA6IHRoZW1lLnByaW1hcnkpIDpcbiAgICAgICAgICAoZXJyb3IgPyB0aGVtZS5kYW5nZXIgOiB0aGVtZS5wcmltYXJ5KVxuICAgICAgICB9O1xuICAgIH1cblxuICAgICY6Oi1tcy1leHBhbmQge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gICAgJjotbW96LWZvY3VzcmluZyB7XG4gICAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICB0ZXh0LXNoYWRvdzogMCAwIDAgIzAwMDtcbiAgICB9XG5cbiAgICAmOmRpc2FibGVkLCBbZGlzYWJsZWRdLCAmOnJlYWRvbmx5IHtcbiAgICAgICR7KHsgdGhlbWUgfSkgPT4gZGlzYWJsZWRDb2xvcih0aGVtZSl9XG4gICAgfVxuXG4gICAgJjppbnZhbGlkIHtcbiAgICAgIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnBsYWNlaG9sZGVyfTtcbiAgICB9XG4gIH1cblxuICAmOjphZnRlciB7XG4gICAgJHsoeyB0aGVtZSB9KSA9PiBhcnJvdyh0aGVtZS5ib3JkZXIpfVxuICAgIHRvcDogMS4yNWVtO1xuICAgIHJpZ2h0OiAwLjYyNWVtO1xuICAgIHotaW5kZXg6IDQ7XG4gIH1cblxuICAkeyh7IHRoZW1lLCBkaXNhYmxlZCB9KSA9PlxuICAgIGRpc2FibGVkXG4gICAgICA/IHt9XG4gICAgICA6IGNzc2BcbiAgICAmOmhvdmVyIHtcbiAgICAgIHNlbGVjdDpub3QoOmRpc2FibGVkKTpub3QoOmZvY3VzKSB7XG4gICAgICAgIGJvcmRlci1jb2xvcjogJHt0aGVtZS5ib3JkZXJIb3Zlcn07XG4gICAgICB9XG5cbiAgICAgICY6OmFmdGVyIHtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAke3RoZW1lLmJvcmRlckhvdmVyfTtcbiAgICAgIH1cbiAgICB9XG4gIGB9XG5cbiAgJHsoeyBjc3MgfSkgPT4gY3NzIHx8IHt9fVxuYDtcblxudHlwZSBJdGVtVHlwZSA9XG4gIHwgeyBpZDogc3RyaW5nIHwgbnVtYmVyOyBuYW1lOiBzdHJpbmc7IFtrZXk6IHN0cmluZ106IGFueSB9XG4gIHwgc3RyaW5nO1xuXG5pbnRlcmZhY2UgUHJvcHMgZXh0ZW5kcyBTZWxlY3RIVE1MQXR0cmlidXRlczxIVE1MU2VsZWN0RWxlbWVudD4ge1xuICBwbGFjZWhvbGRlcj86IHN0cmluZztcbiAgb3B0aW9uczogSXRlbVR5cGVbXTtcbiAgb3V0bGluZT86IGJvb2xlYW47XG4gIGVycm9yPzogc3RyaW5nIHwgYW55O1xuICBoZWxwPzogc3RyaW5nIHwgYW55O1xuICBpbnB1dFNpemU/OiBTaXplVHlwZTtcbiAgcmVuZGVyPzogKGxhYmVsOiBzdHJpbmcpID0+IGFueTtcbiAgZGlzYWJsZWQ/OiBib29sZWFuO1xuICBjc3M/OiBDU1NUeXBlO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWxlY3QgZXh0ZW5kcyBDb21wb25lbnQ8UHJvcHM+IHtcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBuYW1lOiBudWxsLFxuICAgIHZhbHVlOiAnJyxcbiAgICBvbkNoYW5nZTogKCkgPT4ge30sXG4gICAgb3B0aW9uczogW10sXG4gIH07XG5cbiAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKHByb3BzOiBQcm9wcykge1xuICAgIHJldHVybiAoXG4gICAgICBwcm9wcy5vcHRpb25zLmxlbmd0aCAhPT0gdGhpcy5wcm9wcy5vcHRpb25zLmxlbmd0aCB8fFxuICAgICAgcHJvcHMudmFsdWUgIT09IHRoaXMucHJvcHMudmFsdWUgfHxcbiAgICAgIHByb3BzLmRpc2FibGVkICE9PSB0aGlzLnByb3BzLmRpc2FibGVkIHx8XG4gICAgICBwcm9wcy5oZWxwICE9PSB0aGlzLnByb3BzLmhlbHAgfHxcbiAgICAgIHByb3BzLmVycm9yICE9PSB0aGlzLnByb3BzLmVycm9yXG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlckxhYmVsID0gKGxhYmVsOiBzdHJpbmcpID0+IHtcbiAgICBpZiAodGhpcy5wcm9wcy5yZW5kZXIpIHtcbiAgICAgIHJldHVybiB0aGlzLnByb3BzLnJlbmRlcihsYWJlbCk7XG4gICAgfVxuICAgIHJldHVybiBsYWJlbDtcbiAgfVxuXG4gIHJlbmRlckl0ZW0gPSAoKSA9PiB7XG4gICAgcmV0dXJuIHRoaXMucHJvcHMub3B0aW9ucy5tYXAoKGl0ZW0sIGlkeCkgPT4ge1xuICAgICAgaWYgKHR5cGVvZiBpdGVtID09PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxvcHRpb24ga2V5PXtpdGVtfSB2YWx1ZT17aXRlbX0+XG4gICAgICAgICAgICB7dGhpcy5yZW5kZXJMYWJlbChpdGVtKX1cbiAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHsgaWQsIG5hbWUgfSA9IGl0ZW07XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8b3B0aW9uIGtleT17YCR7aWR9XyR7aWR4fWB9IHZhbHVlPXtpZH0+XG4gICAgICAgICAge3RoaXMucmVuZGVyTGFiZWwobmFtZSl9XG4gICAgICAgIDwvb3B0aW9uPlxuICAgICAgKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBjc3MsXG4gICAgICBjbGFzc05hbWUsXG4gICAgICBpbnB1dFNpemUsXG4gICAgICBvdXRsaW5lLFxuICAgICAgb3B0aW9ucyxcbiAgICAgIGVycm9yLFxuICAgICAgaGVscCxcbiAgICAgIHBsYWNlaG9sZGVyLFxuICAgICAgZGlzYWJsZWQsXG4gICAgICAuLi5yZXN0XG4gICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPElucHV0V3JhcHBlclxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZX1cbiAgICAgICAgc2l6ZT17aW5wdXRTaXplfVxuICAgICAgICBvdXRsaW5lPXtvdXRsaW5lfVxuICAgICAgICBlcnJvcj17ZXJyb3J9XG4gICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICAgICAgY3NzPXtjc3N9XG4gICAgICA+XG4gICAgICAgIDxzZWxlY3Qgey4uLnJlc3R9IGRpc2FibGVkPXtkaXNhYmxlZH0gcmVxdWlyZWQ9e0Jvb2xlYW4ocGxhY2Vob2xkZXIpfT5cbiAgICAgICAgICB7cGxhY2Vob2xkZXIgJiYgKFxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPlxuICAgICAgICAgICAgICB7cGxhY2Vob2xkZXJ9XG4gICAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgICApfVxuICAgICAgICAgIHt0aGlzLnJlbmRlckl0ZW0oKX1cbiAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgIHtIZWxwTWVzc2FnZShoZWxwLCBlcnJvcil9XG4gICAgICA8L0lucHV0V3JhcHBlcj5cbiAgICApO1xuICB9XG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBJbnB1dEhUTUxBdHRyaWJ1dGVzIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHRyYW5zcGFyZW50aXplIGZyb20gJ3BvbGlzaGVkL2xpYi9jb2xvci90cmFuc3BhcmVudGl6ZSc7XG5pbXBvcnQgc3R5bGVkLCB7IGNzcyB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7IENvbG9yVHlwZSB9IGZyb20gJy4uLy4uL3R5cGVzJztcblxuY29uc3QgUmFkaW9MYWJlbCA9IGNzc2BcbiAgbGFiZWwge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBwYWRkaW5nLWxlZnQ6IDEuNjI1ZW07XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjI1O1xuICAgIG1hcmdpbi1yaWdodDogMC42MjVyZW07XG5cbiAgICAmOmJlZm9yZSwgJjphZnRlciB7XG4gICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIH1cblxuICAgICY6YWZ0ZXIge1xuICAgICAgdG9wOiAwLjM3NWVtO1xuICAgICAgbGVmdDogMC4zNzVlbTtcbiAgICAgIHdpZHRoOiAwLjVlbTtcbiAgICAgIGhlaWdodDogMC41ZW07XG4gICAgICBiYWNrZ3JvdW5kOiAkeyh7IHRoZW1lIH06IGFueSkgPT4gdGhlbWUucHJpbWFyeX07XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuXG4gICAgICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtO1xuICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDE1MG1zIGVhc2Utb3V0O1xuICAgIH1cblxuICAgICY6YmVmb3JlIHtcbiAgICAgIHdpZHRoOiAxLjI1ZW07XG4gICAgICBoZWlnaHQ6IDEuMjVlbTtcbiAgICAgIGxlZnQ6MDtcbiAgICAgIHRvcDogMDtcbiAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgYm9yZGVyOiAwLjFlbSBzb2xpZCAkeyh7IHRoZW1lIH06IGFueSkgPT4gdGhlbWUuYm9yZGVyfTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcblxuICAgICAgd2lsbC1jaGFuZ2U6IGJhY2tncm91bmQ7XG4gICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDE1MG1zIGVhc2Utb3V0O1xuICAgIH1cbiAgfVxuXG4gIGlucHV0IHtcbiAgICBkaXNwbGF5OiBub25lO1xuXG4gICAgJjpjaGVja2VkIHtcbiAgICAgICsgbGFiZWw6YmVmb3JlIHtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkeyh7IHRoZW1lIH06IGFueSkgPT4gdGhlbWUucHJpbWFyeX07XG4gICAgICB9XG4gICAgICArIGxhYmVsOmFmdGVye1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgICY6ZGlzYWJsZWQge1xuICAgICAgKyBsYWJlbCB7XG4gICAgICAgIGNvbG9yOiAkeyh7IHRoZW1lIH06IGFueSkgPT4gdHJhbnNwYXJlbnRpemUoMC4yNSwgdGhlbWUudGV4dERhcmspfTtcbiAgICAgICAgJjpiZWZvcmUge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICR7KHsgdGhlbWUgfTogYW55KSA9PiB0cmFuc3BhcmVudGl6ZSgwLjU1LCB0aGVtZS5ib3JkZXIpfTtcbiAgICAgICAgICBib3JkZXItY29sb3I6ICR7KHsgdGhlbWUgfTogYW55KSA9PiB0aGVtZS5ib3JkZXJ9O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAmOmNoZWNrZWQgKyBsYWJlbDphZnRlciB7XG4gICAgICAgIGJhY2tncm91bmQ6ICR7KHsgdGhlbWUgfTogYW55KSA9PiB0cmFuc3BhcmVudGl6ZSgwLjE1LCB0aGVtZS50ZXh0RGFyayl9O1xuICAgICAgfVxuICAgIH1cbiAgfVxuYDtcblxuY29uc3QgQnV0dG9uTGFiZWwgPSBjc3NgXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuXG4gIGxhYmVsIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgcGFkZGluZzogMC4zNzVlbSAwLjc1ZW07XG4gICAgaGVpZ2h0OiAyLjI1ZW07XG4gICAgYm9yZGVyOiAxcHggc29saWQgJHsoeyB0aGVtZSB9OiBhbnkpID0+IHRoZW1lLmJvcmRlcn07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICBib3JkZXItY29sb3I6ICR7KHsgdGhlbWUgfTogYW55KSA9PiB0aGVtZS5ib3JkZXJIb3Zlcn07XG4gICAgfVxuICB9XG5cbiAgaW5wdXQge1xuICAgIGRpc3BsYXk6IG5vbmU7XG5cbiAgICAmOmNoZWNrZWQgKyBsYWJlbCB7XG4gICAgICB6LWluZGV4OiAxO1xuICAgICAgYm9yZGVyLWNvbG9yOiAkeyh7IHRoZW1lIH06IGFueSkgPT4gdGhlbWUucHJpbWFyeX07XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyh7IHRoZW1lIH06IGFueSkgPT4gdHJhbnNwYXJlbnRpemUoMC41NSwgdGhlbWUucHJpbWFyeSl9O1xuICAgIH1cblxuICAgICY6ZGlzYWJsZWQge1xuICAgICAgKyBsYWJlbCB7XG4gICAgICAgIGN1cnNvcjogZGVmYXVsdDtcbiAgICAgICAgY29sb3I6ICR7KHsgdGhlbWUgfTogYW55KSA9PiB0cmFuc3BhcmVudGl6ZSgwLjI1LCB0aGVtZS50ZXh0RGFyayl9O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyh7IHRoZW1lIH06IGFueSkgPT4gdHJhbnNwYXJlbnRpemUoMC41NSwgdGhlbWUuYm9yZGVyKX07XG4gICAgICAgIGJvcmRlci1jb2xvcjogJHsoeyB0aGVtZSB9OiBhbnkpID0+IHRoZW1lLmJvcmRlcn07XG4gICAgICB9XG5cbiAgICAgICY6Y2hlY2tlZCArIGxhYmVsIHtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkeyh7IHRoZW1lIH06IGFueSkgPT4gdGhlbWUudGV4dERhcmt9O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyh7IHRoZW1lIH06IGFueSkgPT4gdHJhbnNwYXJlbnRpemUoMC42NSwgdGhlbWUudGV4dERhcmspfTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAmICsgJiB7XG4gICAgbWFyZ2luLWxlZnQ6IC0xcHg7XG4gIH1cblxuICAmOmZpcnN0LWNoaWxkIGxhYmVsIHtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA0cHg7XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNHB4O1xuICB9XG5cbiAgJjpsYXN0LWNoaWxkIGxhYmVsIHtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNHB4O1xuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA0cHg7XG4gIH1cbmA7XG5cblxuY29uc3QgV3JhcHBlciA9IHN0eWxlZC5zcGFuPHsgYnV0dG9uOiBib29sZWFuLCBjb2xvcj86IENvbG9yVHlwZSB9PmBcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IGF1dG87XG5cbiAgJHsoeyBidXR0b24gfSkgPT4gYnV0dG9uID8gQnV0dG9uTGFiZWwgOiBSYWRpb0xhYmVsfVxuYDtcblxuaW50ZXJmYWNlIFByb3BzIGV4dGVuZHMgSW5wdXRIVE1MQXR0cmlidXRlczxIVE1MSW5wdXRFbGVtZW50PiB7XG4gIHZhbHVlOiBzdHJpbmcgfCBudW1iZXI7XG4gIGNoaWxkcmVuPzogYW55O1xuICBjaGVja2VkPzogYm9vbGVhbjtcbiAgYnV0dG9uPzogYm9vbGVhbjtcbiAgY29sb3I/OiBDb2xvclR5cGU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJhZGlvIGV4dGVuZHMgQ29tcG9uZW50PFByb3BzPiB7XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgbmFtZTogbnVsbCxcbiAgICBjaGlsZHJlbjogbnVsbCxcbiAgICBjaGVja2VkOiBmYWxzZSxcbiAgICBidXR0b246IGZhbHNlLFxuICAgIG9uQ2hhbmdlOiAoKSA9PiB7fSxcbiAgfTtcblxuICBpZCA9IGByYWRpb18ke3RoaXMucHJvcHMubmFtZX06JHt0aGlzLnByb3BzLnZhbHVlfWA7XG5cbiAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKHByb3BzOiBQcm9wcykge1xuICAgIHJldHVybiBwcm9wcy5jaGVja2VkICE9PSB0aGlzLnByb3BzLmNoZWNrZWQ7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjbGFzc05hbWUsIGNoaWxkcmVuLCBidXR0b24sIGNvbG9yLCBzdHlsZSwgLi4ucmVzdCB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPFdyYXBwZXIgY2xhc3NOYW1lPXtjbGFzc05hbWV9IGJ1dHRvbj17YnV0dG9uIX0gY29sb3I9e2NvbG9yfSBzdHlsZT17c3R5bGV9PlxuICAgICAgICA8aW5wdXQgaWQ9e3RoaXMuaWR9IHR5cGU9XCJyYWRpb1wiIHsuLi5yZXN0fSAvPlxuICAgICAgICA8bGFiZWwgaHRtbEZvcj17dGhpcy5pZH0+e2NoaWxkcmVufTwvbGFiZWw+XG4gICAgICA8L1dyYXBwZXI+XG4gICAgKTtcbiAgfVxufVxuIiwiXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzZXRBbGlnbih7IGFsaWduIH06IHsgYWxpZ24/OiAnbGVmdCcgfCAncmlnaHQnIHwgJ2NlbnRlcicgfSkge1xuICBzd2l0Y2ggKGFsaWduKSB7XG4gICAgY2FzZSAnbGVmdCc6XG4gICAgICByZXR1cm4gJ2ZsZXgtc3RhcnQnO1xuICAgIGNhc2UgJ3JpZ2h0JzpcbiAgICAgIHJldHVybiAnZmxleC1lbmQnO1xuICAgIGNhc2UgJ2NlbnRlcic6XG4gICAgICByZXR1cm4gJ2NlbnRlcic7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiAnc3BhY2UtZXZlbmx5JztcbiAgfVxufVxuIiwiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQsIEhUTUxBdHRyaWJ1dGVzIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHRyYW5zcGFyZW50aXplIGZyb20gJ3BvbGlzaGVkL2xpYi9jb2xvci90cmFuc3BhcmVudGl6ZSc7XG5pbXBvcnQgc3R5bGVkLCB7IGNzcyB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBmaW5kQ29sb3JJbnZlcnQgZnJvbSAnLi4vLi4vdXRpbHMvZmluZENvbG9ySW52ZXJ0JztcbmltcG9ydCBoYW1idWdlciBmcm9tICcuLi8uLi91dGlscy9oYW1idWdlcic7XG5pbXBvcnQgc2V0QWxpZ24gZnJvbSAnLi4vLi4vdXRpbHMvc2V0QWxpZ24nO1xuaW1wb3J0IHsgbWVkaWFUYWJsZXQsIG1lZGlhVW50aWxGdWxsSEQsIG1lZGlhTW9iaWxlIH0gZnJvbSAnLi4vLi4vdXRpbHMvbWVkaWEnO1xuaW1wb3J0IHsgQ29sb3JUeXBlLCBBbGlnblR5cGUsIENTU1R5cGUsIFRoZW1lVHlwZSB9IGZyb20gJy4uLy4uL3R5cGVzJztcblxuZnVuY3Rpb24gc2V0Q29sb3IoXG4gIHsgY29sb3IsIHRoZW1lLCBiYWNrZHJvcCB9OiB7IGNvbG9yPzogQ29sb3JUeXBlLCB0aGVtZTogVGhlbWVUeXBlLCBiYWNrZHJvcD86IGJvb2xlYW4gfSxcbikge1xuICBjb25zdCBiYWNrZ3JvdW5kQ29sb3IgPSBjb2xvciA/IHRoZW1lW2NvbG9yXSA6ICd0cmFuc3BhcmVudCc7XG4gIGNvbnN0IHRleHRDb2xvciA9XG4gICAgZmluZENvbG9ySW52ZXJ0KHRoZW1lLCBiYWNrZ3JvdW5kQ29sb3IgPT09ICd0cmFuc3BhcmVudCcgPyB0aGVtZS5iYWNrZ3JvdW5kIDogYmFja2dyb3VuZENvbG9yKTtcblxuICBpZiAoYmFja2Ryb3ApIHtcbiAgICBjb25zdCBiYWNrQ29sb3IgPVxuICAgICAgdHJhbnNwYXJlbnRpemUoMC4yLCAoYmFja2dyb3VuZENvbG9yID09PSAndHJhbnNwYXJlbnQnID8gdGhlbWUud2hpdGUgOiBiYWNrZ3JvdW5kQ29sb3IpKTtcbiAgICBjb25zdCB1YSA9IG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKTtcbiAgICBpZiAodWEuaW5kZXhPZignc2FmYXJpJykgPiAtMSAmJiB1YS5pbmRleE9mKCdjaHJvbWUnKSA9PT0gLTEpIHtcbiAgICAgIHJldHVybiBjc3NgYmFja2dyb3VuZC1jb2xvcjogJHtiYWNrQ29sb3J9OyBjb2xvcjogJHt0ZXh0Q29sb3J9OyBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoOHB4KTtgO1xuICAgIH1cblxuICAgIHJldHVybiBjc3NgXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke2JhY2tDb2xvcn07XG4gICAgICBjb2xvcjogJHt0ZXh0Q29sb3J9O1xuICAgIGA7XG4gIH1cblxuICByZXR1cm4gY3NzYGJhY2tncm91bmQtY29sb3I6ICR7YmFja2dyb3VuZENvbG9yfTsgY29sb3I6ICR7dGV4dENvbG9yfTtgO1xufVxuXG5pbnRlcmZhY2UgTmF2UHJvcHMge1xuICBjb2xvcj86IENvbG9yVHlwZTtcbiAgYmFja2Ryb3A/OiBib29sZWFuO1xuICBmaXhlZD86IGJvb2xlYW47XG4gIHN0aWNreT86IGJvb2xlYW47XG4gIGZsdWlkPzogYm9vbGVhbjtcbiAgc2hvdz86IGJvb2xlYW47XG4gIHN0eWxlPzogYW55O1xuICBhbGlnbj86IEFsaWduVHlwZTtcbiAgcm9sZTogc3RyaW5nO1xuICBjc3M/OiBDU1NUeXBlO1xufVxuXG5jb25zdCBOYXZCYXIgPSBzdHlsZWQuaGVhZGVyPE5hdlByb3BzPmBcbiAgcG9zaXRpb246ICR7XG4gICAgKHsgZml4ZWQsIHN0aWNreSB9KSA9PiAoIShzdGlja3kgfHwgZml4ZWQpID8gJ3JlbGF0aXZlJyA6IChmaXhlZCA/ICdmaXhlZCcgOiAnc3RpY2t5JykpXG4gIH07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzdHJldGNoO1xuICB0b3A6IC0xcHg7XG5cbiAgbWluLWhlaWdodDogMy4yNXJlbTtcbiAgd2lkdGg6IDEwMCU7XG4gIHotaW5kZXg6IDMwO1xuXG4gICR7c2V0Q29sb3J9XG5cbiAgYSB7IGNvbG9yOiBpbmhlcml0OyB9XG5cbiAgJHttZWRpYVRhYmxldH0ge1xuICAgIHBhZGRpbmc6ICR7KHsgZmx1aWQgfTogTmF2UHJvcHMpID0+IGZsdWlkID8gJzAgMC41cmVtJyA6ICcwIDMlJ307XG4gIH1cbiAgJHttZWRpYVVudGlsRnVsbEhEfSB7XG4gICAgcGFkZGluZzogJHsoeyBmbHVpZCB9OiBOYXZQcm9wcykgPT4gZmx1aWQgPyAnMCAwLjc1cmVtJyA6ICcwIDUlJ307XG4gIH1cbiAgJHsoeyBjc3MgfSkgPT4gY3NzIHx8IHt9fVxuYDtcblxuY29uc3QgQnVyZ2VyID0gc3R5bGVkLmJ1dHRvbmBcbiAgJHtoYW1idWdlcignMy4yNXJlbScpfVxuICBkaXNwbGF5OiBub25lO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6IGluaGVyaXQ7XG5cbiAgb3V0bGluZTogbm9uZTtcblxuICAmOmhvdmVye1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgLjA1KTtcbiAgfVxuXG4gICR7bWVkaWFNb2JpbGV9IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuYDtcblxuaW50ZXJmYWNlIENvbnRlbnRQcm9wcyB7XG4gIGNvbG9yPzogQ29sb3JUeXBlO1xuICBzaG93PzogYm9vbGVhbjtcbiAgYWxpZ24/OiAnbGVmdCcgfCAncmlnaHQnO1xufVxuXG5jb25zdCBOYXZDb250ZW50ID0gc3R5bGVkLmRpdjxDb250ZW50UHJvcHM+YFxuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtYmFzaXM6IGF1dG87XG4gIGZsZXgtZ3JvdzogMTtcblxuICAmID4gdWwge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIGZsZXgtZ3JvdzogMTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6ICR7c2V0QWxpZ259O1xuXG4gICAgbGkge1xuICAgICAgcGFkZGluZzogMCAwLjc1cmVtO1xuICAgIH1cbiAgfVxuXG4gICYgPiBkaXYsICYgPiBzcGFuLCAmID4gZm9ybSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICAkeyh7IGNvbG9yIH0pID0+IChjb2xvciA/IGBjb2xvcjogJHtjb2xvcn07YCA6ICcnKX1cbiAgfVxuXG4gICR7bWVkaWFNb2JpbGV9IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuXG4gICAgcGFkZGluZy1ib3R0b206IDAuNXJlbTtcblxuICAgIGJ1dHRvbjpub3QoLmFjdGl2ZSkrJiB7XG4gICAgICBkaXNwbGF5Om5vbmU7XG4gICAgfVxuXG4gICAgJiA+IHVsIHtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGxpIHtcbiAgICAgICAgcGFkZGluZzogLjVyZW0gMDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmID4gZGl2LCAmID4gc3BhbiwgJiA+IGZvcm0ge1xuICAgICAgcGFkZGluZzogLjVyZW0gMDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgfVxuYDtcblxuXG5pbnRlcmZhY2UgUHJvcHMgZXh0ZW5kcyBIVE1MQXR0cmlidXRlczxIVE1MRGl2RWxlbWVudD4ge1xuICAvKiogYmFja2dyb3VuZOiJsiAqL1xuICBjb2xvcj86IENvbG9yVHlwZTtcbiAgLyoqIOODreOCtOOBruOCpOODoeODvOOCuOOAgeODl+ODreOCuOOCp+OCr+ODiOWQjeOBquOBqSAqL1xuICBicmFuZD86IFJlYWN0LlJlYWN0RWxlbWVudDxhbnk+IHwgc3RyaW5nO1xuICAvKiog5a6a576p44GV44KM44Gf5L2N572u44KS5Zu65a6a44Gr44GZ44KLICovXG4gIGZpeGVkPzogYm9vbGVhbjtcbiAgLyoqIChJRTEx5LiN5Y+vKeeUu+mdouOBjOOCueOCr+ODreODvOODq+OBleOCjOOBpuOCguS4iuOBp+iyvOOCiuS7mOOBkeOBhOOCi+OCiOOBhuOBq+OBmeOCiyAqL1xuICBzdGlja3k/OiBib29sZWFuO1xuICAvKiog5Lit5aSu5Lim44Gz44GL44KJ6Ieq5YuV5bmF44Gn6KGo56S644GX44G+44GZICovXG4gIGZsdWlkPzogYm9vbGVhbjtcbiAgLyoqIOiDjOaZr+OBjGJsdXLjgZXjgozjgb7jgZnvvIhzYWZhcmnlsILnlKjjgIHku5bjga/pgI/mmI7luqbvvIkgKi9cbiAgYmFja2Ryb3A/OiBib29sZWFuO1xuICAvKiogY2hpbGRyZW7jgavlrprnvqnjgZnjgotFbGVtZW5044Gu5Lim44Gz6aCG44KS5oyH5a6a44GX44G+44GZ44CC5pyq5a6a576p44Gv6Ieq5YuV5Lim44GzICovXG4gIGFsaWduPzogJ2xlZnQnIHwgJ3JpZ2h0JztcbiAgLyoqIOOCq+OCueOCv+ODoENTU+Wumue+qSAqL1xuICBjc3M/OiBDU1NUeXBlO1xufVxuXG50eXBlIFN0YXRlID0ge1xuICBzaG93OiBib29sZWFuLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBwQmFyIGV4dGVuZHMgUHVyZUNvbXBvbmVudDxQcm9wcywgU3RhdGU+IHtcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBjb2xvcjogbnVsbCxcbiAgICBicmFuZDogbnVsbCxcbiAgICBmaXhlZDogZmFsc2UsXG4gICAgc3RpY2t5OiBmYWxzZSxcbiAgICBmbHVpZDogZmFsc2UsXG4gICAgYmFja2Ryb3A6IGZhbHNlLFxuICB9O1xuXG4gIHN0YXRlID0geyBzaG93OiBmYWxzZSB9O1xuXG4gIHRvZ2dsZU1lbnUgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNob3c6ICF0aGlzLnN0YXRlLnNob3cgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjaGlsZHJlbiwgYWxpZ24sIGJyYW5kLCAuLi5yZXN0IH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgc2hvdyB9ID0gdGhpcy5zdGF0ZTtcbiAgICByZXR1cm4gKFxuICAgICAgPE5hdkJhclxuICAgICAgICByb2xlPVwibmF2aWdhdGlvblwiXG4gICAgICAgIHsuLi5yZXN0fVxuICAgICAgPlxuICAgICAgICB7YnJhbmR9XG4gICAgICAgIDxCdXJnZXIgY2xhc3NOYW1lPXtzaG93ID8gJ2FjdGl2ZScgOiAnJ30gb25DbGljaz17dGhpcy50b2dnbGVNZW51fT5cbiAgICAgICAgICA8c3BhbiAvPlxuICAgICAgICAgIDxzcGFuIC8+XG4gICAgICAgICAgPHNwYW4gLz5cbiAgICAgICAgPC9CdXJnZXI+XG4gICAgICAgIDxOYXZDb250ZW50IGFsaWduPXthbGlnbn0+XG4gICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L05hdkNvbnRlbnQ+XG4gICAgICA8L05hdkJhcj5cbiAgICApO1xuICB9XG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgSFRNTEF0dHJpYnV0ZXMsIFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkLCB7IGNzcyB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBkYXJrZW4gZnJvbSAncG9saXNoZWQvbGliL2NvbG9yL2Rhcmtlbic7XG5pbXBvcnQgZmluZENvbG9ySW52ZXJ0IGZyb20gJy4uLy4uL3V0aWxzL2ZpbmRDb2xvckludmVydCc7XG5pbXBvcnQgeyBDb2xvclR5cGUsIFRoZW1lVHlwZSwgQ1NTVHlwZSB9IGZyb20gJy4uLy4uL3R5cGVzJztcblxuaW50ZXJmYWNlIFdyYXBwZXJQcm9wcyB7XG4gIGNvbG9yPzogQ29sb3JUeXBlO1xuICBhZGRvbkNvbG9yPzogQ29sb3JUeXBlO1xuICBjbG9zZTogYm9vbGVhbjtcbiAgY3NzPzogQ1NTVHlwZTtcbn1cblxuZnVuY3Rpb24gZ2V0Q29sb3IodGhlbWU6IFRoZW1lVHlwZSwgY29sb3I/OiBDb2xvclR5cGUpIHtcbiAgcmV0dXJuICghY29sb3IgfHwgY29sb3IgPT09ICdsaWdodCcpID8gdGhlbWUuYmFja2dyb3VuZCA6IHRoZW1lW2NvbG9yXTtcbn1cblxuZnVuY3Rpb24gc2V0Q29sb3IoeyB0aGVtZSwgY29sb3IsIGFkZG9uQ29sb3IgfTpcbiAgICB7IHRoZW1lOiBUaGVtZVR5cGUsIGNvbG9yPzogQ29sb3JUeXBlLCBhZGRvbkNvbG9yPzogQ29sb3JUeXBlIH0pIHtcbiAgY29uc3QgdGFyZ2V0ID0gZ2V0Q29sb3IodGhlbWUsIGNvbG9yKTtcbiAgY29uc3QgaW52ZXJ0Q29sb3IgPSBmaW5kQ29sb3JJbnZlcnQodGhlbWUsIHRhcmdldCk7XG5cbiAgY29uc3Qgc3ViQ29sb3IgPSBhZGRvbkNvbG9yID8gZ2V0Q29sb3IodGhlbWUsIGFkZG9uQ29sb3IpIDogZGFya2VuKDAuMDUsIHRhcmdldCk7XG5cbiAgcmV0dXJuIGNzc2BcbiAgICBjb2xvcjogJHtpbnZlcnRDb2xvcn07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHt0YXJnZXR9O1xuXG4gICAgYSwgc3BhbiB7XG4gICAgICBjb2xvcjogJHtpbnZlcnRDb2xvcn07XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3N1YkNvbG9yfTtcbiAgICB9XG5cbiAgICBhOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7ZGFya2VuKDAuMDUsIHN1YkNvbG9yKX07XG4gICAgfVxuICBgO1xufVxuXG5jb25zdCBXcmFwcGVyID0gc3R5bGVkLmRpdjxXcmFwcGVyUHJvcHM+YFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xuICBjdXJzb3I6IGRlZmF1bHQ7XG4gIHBhZGRpbmc6IDAgLjVyZW07XG4gIGhlaWdodDogMmVtO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcblxuICAke3NldENvbG9yfVxuXG4gICY6bm90KDpsYXN0LWNoaWxkKSB7XG4gICAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XG4gIH1cblxuICBhLCBzcGFuIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgZmxleC1ncm93OiAwO1xuICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgIG1pbi13aWR0aDogMS41cmVtO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBtYXJnaW4tcmlnaHQ6IC0wLjVyZW07XG4gICAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcbiAgICBwYWRkaW5nOiAwIC41cmVtO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDNweDtcbiAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAzcHg7XG4gICAgfVxuXG4gICAgJjpmb2N1cyB7XG4gICAgICBvdXRsaW5lOiBub25lO1xuICAgIH1cblxuICAgICR7cHJvcHMgPT4gKHByb3BzLmNsb3NlID8gY3NzYFxuICAgICAgJjpiZWZvcmUsICY6YWZ0ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjdXJyZW50Q29sb3I7XG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKC01MCUpIHJvdGF0ZSg0NWRlZyk7XG4gICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciBjZW50ZXI7XG4gICAgICB9XG5cbiAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgaGVpZ2h0OiAxcHg7XG4gICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICB9XG5cbiAgICAgICY6YWZ0ZXIge1xuICAgICAgICBoZWlnaHQ6IDUwJTtcbiAgICAgICAgd2lkdGg6IDFweDtcbiAgICAgIH1cblxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICB9XG4gICAgYCA6ICcnKX1cbiAgfVxuXG4gICR7KHsgY3NzIH0pID0+IGNzcyB8fCAnJ31cbmA7XG5cbmludGVyZmFjZSBQcm9wcyBleHRlbmRzIEhUTUxBdHRyaWJ1dGVzPEhUTUxEaXZFbGVtZW50PiB7XG4gIC8qKiDjgr/jgrDjga7lhoXlrrkgKi9cbiAgY2hpbGRyZW46IGFueTtcbiAgLyoqIFjjg5zjgr/jg7Pjga7ov73liqDvvIvjgq/jg6rjg4Pjgq/mmYLjga7jgqTjg5njg7Pjg4jjg4/jg7Pjg4njg6njg7wgKi9cbiAgb25DbG9zZT86ICgpID0+IHZvaWQ7XG4gIC8qKiDjgq/jg6rjg4Pjgq/mmYLjga7jgqTjg5njg7Pjg4jjg4/jg7Pjg4njg6njg7wgKi9cbiAgb25DbGljaz86ICgpID0+IHZvaWQ7XG4gIC8qKiDoibLjga7mjIflrpogKi9cbiAgY29sb3I/OiBDb2xvclR5cGU7XG4gIC8qKiDjgqvjgrnjgr/jg6BDU1PlrprnvqkgKi9cbiAgY3NzPzogQ1NTVHlwZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFnIGV4dGVuZHMgUHVyZUNvbXBvbmVudDxQcm9wcz4ge1xuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGNoaWxkcmVuOiBudWxsLFxuICAgIG9uQ2xvc2U6IG51bGwsXG4gICAgb25DbGljazogbnVsbCxcbiAgICBjb2xvcjogbnVsbCxcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjaGlsZHJlbiwgb25DbG9zZSwgLi4ucmVzdCB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPFdyYXBwZXIgY2xvc2U9e29uQ2xvc2UgIT09IG51bGx9IHsuLi5yZXN0fT5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgICB7b25DbG9zZSAmJiAoPGEgdGFiSW5kZXg9ezB9IHJvbGU9XCJsaW5rXCIgb25DbGljaz17b25DbG9zZX0+Jm5ic3A7PC9hPil9XG4gICAgICA8L1dyYXBwZXI+XG4gICAgKTtcbiAgfVxufVxuIiwiaW1wb3J0IFJlYWN0LCB7IEhUTUxBdHRyaWJ1dGVzIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCwgeyBjc3MgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJy4uL0dyaWQvQ29udGFpbmVyJztcbmltcG9ydCBmaW5kQ29sb3JJbnZlcnQgZnJvbSAnLi4vLi4vdXRpbHMvZmluZENvbG9ySW52ZXJ0JztcbmltcG9ydCB7IG1lZGlhRGVza3RvcCB9IGZyb20gJy4uLy4uL3V0aWxzL21lZGlhJztcbmltcG9ydCB7IENvbG9yVHlwZSwgVGhlbWVUeXBlLCBTaXplVHlwZSB9IGZyb20gJy4uLy4uL3R5cGVzJztcblxuaW50ZXJmYWNlIFByb3BzIGV4dGVuZHMgSFRNTEF0dHJpYnV0ZXM8SFRNTERpdkVsZW1lbnQ+IHtcbiAgLyoqIOiDjOaZr+OBruiJsiAqL1xuICBjb2xvcj86IENvbG9yVHlwZTtcbiAgLyoqIHNtYWxsIHwgbWVkaXVtIHwgbGFyZ2UgfCBmdWxsICovXG4gIHNpemU/OiBTaXplVHlwZSB8ICdmdWxsJztcbiAgLyoqICAqL1xuICBjaGlsZHJlbj86IFJlYWN0LlJlYWN0Q2hpbGQ7XG4gIC8qKiBjaGlsZHJlbuOBruS4reWkruaPg+OBiCAqL1xuICBjZW50ZXI/OiBib29sZWFuO1xuICAvKiog44Kr44K544K/44Og44OY44OD44OA44O8ICovXG4gIGhlYWRlcj86IFJlYWN0LlJlYWN0RWxlbWVudDxhbnk+O1xufVxuXG5mdW5jdGlvbiBzZXRDb2xvcih7IGNvbG9yLCB0aGVtZSB9OiB7IGNvbG9yPzogQ29sb3JUeXBlLCB0aGVtZTogVGhlbWVUeXBlIH0pIHtcbiAgaWYgKCFjb2xvcikgcmV0dXJuICcnO1xuXG4gIGNvbnN0IHRhcmdldCA9IHRoZW1lW2NvbG9yXSB8fCBjb2xvcjtcbiAgY29uc3QgaW52ZXJ0Q29sb3IgPSBmaW5kQ29sb3JJbnZlcnQodGhlbWUsIHRhcmdldCk7XG4gIHJldHVybiBjc3NgYmFja2dyb3VuZC1jb2xvcjogJHt0YXJnZXR9OyBjb2xvcjogJHtpbnZlcnRDb2xvcn07YDtcbn1cblxuZnVuY3Rpb24gc2V0U2l6ZSh7IHNpemUsIHRoZW1lIH06IHsgc2l6ZT86IFNpemVUeXBlIHwgJ2Z1bGwnLCB0aGVtZTogVGhlbWVUeXBlIH0pIHtcbiAgaWYgKCFzaXplIHx8IHNpemUgPT09ICdzbWFsbCcpIHJldHVybiAnJztcblxuICBzd2l0Y2ggKHNpemUpIHtcbiAgICBjYXNlICdtZWRpdW0nIDpcbiAgICAgIHJldHVybiBjc3NgcGFkZGluZy1ib3R0b206IDlyZW07IHBhZGRpbmctdG9wOiA5cmVtO2A7XG4gICAgY2FzZSAnbGFyZ2UnIDpcbiAgICAgIHJldHVybiBjc3NgcGFkZGluZy1ib3R0b206IDE4cmVtOyBwYWRkaW5nLXRvcDogMThyZW07YDtcbiAgICBjYXNlICdmdWxsJyA6XG4gICAgICByZXR1cm4gY3NzYFxuICAgICAgICBtaW4taGVpZ2h0OiAxMDB2aDtcblxuICAgICAgICAke0JvZHl9IHtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIH1cbiAgICAgIGA7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiAnJztcbiAgfVxufVxuXG5pbnRlcmZhY2UgQm9keVByb3BzIHtcbiAgY2VudGVyPzogYm9vbGVhbjtcbn1cblxuY29uc3QgQm9keSA9IHN0eWxlZC5kaXY8Qm9keVByb3BzPmBcbiAgZmxleC1ncm93OiAxO1xuICBmbGV4LXNocmluazogMDtcbiAgcGFkZGluZzogM3JlbSAxLjVyZW07XG5cbiAgJHsoeyBjZW50ZXIgfSkgPT4gY2VudGVyID8gJ3RleHQtYWxpZ246IGNlbnRlcjsnIDogJyd9XG5cbiAgaDEge1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjEyNTtcblxuICAgICY6bm90KDpsYXN0LWNoaWxkKSB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG4gICAgfVxuICB9XG5cbiAgaDIge1xuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjI1O1xuICB9XG5cbiAgaDEraDIge1xuICAgIG1hcmdpbi10b3A6IC0xLjI1cmVtO1xuICB9XG5gO1xuXG5pbnRlcmZhY2UgV3JhcHBlclByb3BzIHtcbiAgY29sb3I/OiBDb2xvclR5cGU7XG4gIHNpemU/OiBTaXplVHlwZSB8ICdmdWxsJztcbn1cblxuY29uc3QgV3JhcHBlciA9IHN0eWxlZC5kaXY8V3JhcHBlclByb3BzPmBcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgJHtzZXRDb2xvcn1cbiAgJHtzZXRTaXplfVxuXG4gIGhlYWRlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcbiAgICBjb2xvcjogaW5oZXJpdDtcbiAgfVxuXG4gIGhlYWRlciske0JvZHl9IHtcbiAgICBtYXJnaW4tdG9wOiAzLjI1cmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDMuMjVyZW07XG4gIH1cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlcm8oeyBjaGlsZHJlbiwgY29sb3IsIHNpemUsIGNlbnRlciwgaGVhZGVyLCAuLi5yZXN0IH06IFByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPFdyYXBwZXIgY29sb3I9e2NvbG9yfSBzaXplPXtzaXplfSB7Li4ucmVzdH0+XG4gICAgICB7aGVhZGVyfVxuICAgICAgPEJvZHkgY2VudGVyPXtjZW50ZXJ9PlxuICAgICAgICA8Q29udGFpbmVyPlxuICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC9Db250YWluZXI+XG4gICAgICA8L0JvZHk+XG4gICAgPC9XcmFwcGVyPlxuICApO1xufVxuIiwiLyoqIEBsaWNlbnNlIFJlYWN0IHYxNi44LjFcbiAqIHJlYWN0LWlzLnByb2R1Y3Rpb24ubWluLmpzXG4gKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO09iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO1xudmFyIGI9XCJmdW5jdGlvblwiPT09dHlwZW9mIFN5bWJvbCYmU3ltYm9sLmZvcixjPWI/U3ltYm9sLmZvcihcInJlYWN0LmVsZW1lbnRcIik6NjAxMDMsZD1iP1N5bWJvbC5mb3IoXCJyZWFjdC5wb3J0YWxcIik6NjAxMDYsZT1iP1N5bWJvbC5mb3IoXCJyZWFjdC5mcmFnbWVudFwiKTo2MDEwNyxmPWI/U3ltYm9sLmZvcihcInJlYWN0LnN0cmljdF9tb2RlXCIpOjYwMTA4LGc9Yj9TeW1ib2wuZm9yKFwicmVhY3QucHJvZmlsZXJcIik6NjAxMTQsaD1iP1N5bWJvbC5mb3IoXCJyZWFjdC5wcm92aWRlclwiKTo2MDEwOSxrPWI/U3ltYm9sLmZvcihcInJlYWN0LmNvbnRleHRcIik6NjAxMTAsbD1iP1N5bWJvbC5mb3IoXCJyZWFjdC5hc3luY19tb2RlXCIpOjYwMTExLG09Yj9TeW1ib2wuZm9yKFwicmVhY3QuY29uY3VycmVudF9tb2RlXCIpOjYwMTExLG49Yj9TeW1ib2wuZm9yKFwicmVhY3QuZm9yd2FyZF9yZWZcIik6NjAxMTIscD1iP1N5bWJvbC5mb3IoXCJyZWFjdC5zdXNwZW5zZVwiKTo2MDExMyxxPWI/U3ltYm9sLmZvcihcInJlYWN0Lm1lbW9cIik6XG42MDExNSxyPWI/U3ltYm9sLmZvcihcInJlYWN0LmxhenlcIik6NjAxMTY7ZnVuY3Rpb24gdChhKXtpZihcIm9iamVjdFwiPT09dHlwZW9mIGEmJm51bGwhPT1hKXt2YXIgdT1hLiQkdHlwZW9mO3N3aXRjaCh1KXtjYXNlIGM6c3dpdGNoKGE9YS50eXBlLGEpe2Nhc2UgbDpjYXNlIG06Y2FzZSBlOmNhc2UgZzpjYXNlIGY6Y2FzZSBwOnJldHVybiBhO2RlZmF1bHQ6c3dpdGNoKGE9YSYmYS4kJHR5cGVvZixhKXtjYXNlIGs6Y2FzZSBuOmNhc2UgaDpyZXR1cm4gYTtkZWZhdWx0OnJldHVybiB1fX1jYXNlIHI6Y2FzZSBxOmNhc2UgZDpyZXR1cm4gdX19fWZ1bmN0aW9uIHYoYSl7cmV0dXJuIHQoYSk9PT1tfWV4cG9ydHMudHlwZU9mPXQ7ZXhwb3J0cy5Bc3luY01vZGU9bDtleHBvcnRzLkNvbmN1cnJlbnRNb2RlPW07ZXhwb3J0cy5Db250ZXh0Q29uc3VtZXI9aztleHBvcnRzLkNvbnRleHRQcm92aWRlcj1oO2V4cG9ydHMuRWxlbWVudD1jO2V4cG9ydHMuRm9yd2FyZFJlZj1uO1xuZXhwb3J0cy5GcmFnbWVudD1lO2V4cG9ydHMuTGF6eT1yO2V4cG9ydHMuTWVtbz1xO2V4cG9ydHMuUG9ydGFsPWQ7ZXhwb3J0cy5Qcm9maWxlcj1nO2V4cG9ydHMuU3RyaWN0TW9kZT1mO2V4cG9ydHMuU3VzcGVuc2U9cDtleHBvcnRzLmlzVmFsaWRFbGVtZW50VHlwZT1mdW5jdGlvbihhKXtyZXR1cm5cInN0cmluZ1wiPT09dHlwZW9mIGF8fFwiZnVuY3Rpb25cIj09PXR5cGVvZiBhfHxhPT09ZXx8YT09PW18fGE9PT1nfHxhPT09Znx8YT09PXB8fFwib2JqZWN0XCI9PT10eXBlb2YgYSYmbnVsbCE9PWEmJihhLiQkdHlwZW9mPT09cnx8YS4kJHR5cGVvZj09PXF8fGEuJCR0eXBlb2Y9PT1ofHxhLiQkdHlwZW9mPT09a3x8YS4kJHR5cGVvZj09PW4pfTtleHBvcnRzLmlzQXN5bmNNb2RlPWZ1bmN0aW9uKGEpe3JldHVybiB2KGEpfHx0KGEpPT09bH07ZXhwb3J0cy5pc0NvbmN1cnJlbnRNb2RlPXY7ZXhwb3J0cy5pc0NvbnRleHRDb25zdW1lcj1mdW5jdGlvbihhKXtyZXR1cm4gdChhKT09PWt9O1xuZXhwb3J0cy5pc0NvbnRleHRQcm92aWRlcj1mdW5jdGlvbihhKXtyZXR1cm4gdChhKT09PWh9O2V4cG9ydHMuaXNFbGVtZW50PWZ1bmN0aW9uKGEpe3JldHVyblwib2JqZWN0XCI9PT10eXBlb2YgYSYmbnVsbCE9PWEmJmEuJCR0eXBlb2Y9PT1jfTtleHBvcnRzLmlzRm9yd2FyZFJlZj1mdW5jdGlvbihhKXtyZXR1cm4gdChhKT09PW59O2V4cG9ydHMuaXNGcmFnbWVudD1mdW5jdGlvbihhKXtyZXR1cm4gdChhKT09PWV9O2V4cG9ydHMuaXNMYXp5PWZ1bmN0aW9uKGEpe3JldHVybiB0KGEpPT09cn07ZXhwb3J0cy5pc01lbW89ZnVuY3Rpb24oYSl7cmV0dXJuIHQoYSk9PT1xfTtleHBvcnRzLmlzUG9ydGFsPWZ1bmN0aW9uKGEpe3JldHVybiB0KGEpPT09ZH07ZXhwb3J0cy5pc1Byb2ZpbGVyPWZ1bmN0aW9uKGEpe3JldHVybiB0KGEpPT09Z307ZXhwb3J0cy5pc1N0cmljdE1vZGU9ZnVuY3Rpb24oYSl7cmV0dXJuIHQoYSk9PT1mfTtcbmV4cG9ydHMuaXNTdXNwZW5zZT1mdW5jdGlvbihhKXtyZXR1cm4gdChhKT09PXB9O1xuIiwiLyoqIEBsaWNlbnNlIFJlYWN0IHYxNi44LjFcbiAqIHJlYWN0LWlzLmRldmVsb3BtZW50LmpzXG4gKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAoZnVuY3Rpb24oKSB7XG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbi8vIFRoZSBTeW1ib2wgdXNlZCB0byB0YWcgdGhlIFJlYWN0RWxlbWVudC1saWtlIHR5cGVzLiBJZiB0aGVyZSBpcyBubyBuYXRpdmUgU3ltYm9sXG4vLyBub3IgcG9seWZpbGwsIHRoZW4gYSBwbGFpbiBudW1iZXIgaXMgdXNlZCBmb3IgcGVyZm9ybWFuY2UuXG52YXIgaGFzU3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wuZm9yO1xuXG52YXIgUkVBQ1RfRUxFTUVOVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuZWxlbWVudCcpIDogMHhlYWM3O1xudmFyIFJFQUNUX1BPUlRBTF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QucG9ydGFsJykgOiAweGVhY2E7XG52YXIgUkVBQ1RfRlJBR01FTlRfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmZyYWdtZW50JykgOiAweGVhY2I7XG52YXIgUkVBQ1RfU1RSSUNUX01PREVfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnN0cmljdF9tb2RlJykgOiAweGVhY2M7XG52YXIgUkVBQ1RfUFJPRklMRVJfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnByb2ZpbGVyJykgOiAweGVhZDI7XG52YXIgUkVBQ1RfUFJPVklERVJfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnByb3ZpZGVyJykgOiAweGVhY2Q7XG52YXIgUkVBQ1RfQ09OVEVYVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuY29udGV4dCcpIDogMHhlYWNlO1xudmFyIFJFQUNUX0FTWU5DX01PREVfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmFzeW5jX21vZGUnKSA6IDB4ZWFjZjtcbnZhciBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmNvbmN1cnJlbnRfbW9kZScpIDogMHhlYWNmO1xudmFyIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5mb3J3YXJkX3JlZicpIDogMHhlYWQwO1xudmFyIFJFQUNUX1NVU1BFTlNFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5zdXNwZW5zZScpIDogMHhlYWQxO1xudmFyIFJFQUNUX01FTU9fVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0Lm1lbW8nKSA6IDB4ZWFkMztcbnZhciBSRUFDVF9MQVpZX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5sYXp5JykgOiAweGVhZDQ7XG5cbmZ1bmN0aW9uIGlzVmFsaWRFbGVtZW50VHlwZSh0eXBlKSB7XG4gIHJldHVybiB0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicgfHxcbiAgLy8gTm90ZTogaXRzIHR5cGVvZiBtaWdodCBiZSBvdGhlciB0aGFuICdzeW1ib2wnIG9yICdudW1iZXInIGlmIGl0J3MgYSBwb2x5ZmlsbC5cbiAgdHlwZSA9PT0gUkVBQ1RfRlJBR01FTlRfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9QUk9GSUxFUl9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1VTUEVOU0VfVFlQRSB8fCB0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgdHlwZSAhPT0gbnVsbCAmJiAodHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTEFaWV9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX01FTU9fVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9QUk9WSURFUl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0NPTlRFWFRfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFKTtcbn1cblxuLyoqXG4gKiBGb3JrZWQgZnJvbSBmYmpzL3dhcm5pbmc6XG4gKiBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svZmJqcy9ibG9iL2U2NmJhMjBhZDViZTQzM2ViNTQ0MjNmMmIwOTdkODI5MzI0ZDlkZTYvcGFja2FnZXMvZmJqcy9zcmMvX19mb3Jrc19fL3dhcm5pbmcuanNcbiAqXG4gKiBPbmx5IGNoYW5nZSBpcyB3ZSB1c2UgY29uc29sZS53YXJuIGluc3RlYWQgb2YgY29uc29sZS5lcnJvcixcbiAqIGFuZCBkbyBub3RoaW5nIHdoZW4gJ2NvbnNvbGUnIGlzIG5vdCBzdXBwb3J0ZWQuXG4gKiBUaGlzIHJlYWxseSBzaW1wbGlmaWVzIHRoZSBjb2RlLlxuICogLS0tXG4gKiBTaW1pbGFyIHRvIGludmFyaWFudCBidXQgb25seSBsb2dzIGEgd2FybmluZyBpZiB0aGUgY29uZGl0aW9uIGlzIG5vdCBtZXQuXG4gKiBUaGlzIGNhbiBiZSB1c2VkIHRvIGxvZyBpc3N1ZXMgaW4gZGV2ZWxvcG1lbnQgZW52aXJvbm1lbnRzIGluIGNyaXRpY2FsXG4gKiBwYXRocy4gUmVtb3ZpbmcgdGhlIGxvZ2dpbmcgY29kZSBmb3IgcHJvZHVjdGlvbiBlbnZpcm9ubWVudHMgd2lsbCBrZWVwIHRoZVxuICogc2FtZSBsb2dpYyBhbmQgZm9sbG93IHRoZSBzYW1lIGNvZGUgcGF0aHMuXG4gKi9cblxudmFyIGxvd1ByaW9yaXR5V2FybmluZyA9IGZ1bmN0aW9uICgpIHt9O1xuXG57XG4gIHZhciBwcmludFdhcm5pbmcgPSBmdW5jdGlvbiAoZm9ybWF0KSB7XG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICB2YXIgYXJnSW5kZXggPSAwO1xuICAgIHZhciBtZXNzYWdlID0gJ1dhcm5pbmc6ICcgKyBmb3JtYXQucmVwbGFjZSgvJXMvZywgZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGFyZ3NbYXJnSW5kZXgrK107XG4gICAgfSk7XG4gICAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uc29sZS53YXJuKG1lc3NhZ2UpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgLy8gLS0tIFdlbGNvbWUgdG8gZGVidWdnaW5nIFJlYWN0IC0tLVxuICAgICAgLy8gVGhpcyBlcnJvciB3YXMgdGhyb3duIGFzIGEgY29udmVuaWVuY2Ugc28gdGhhdCB5b3UgY2FuIHVzZSB0aGlzIHN0YWNrXG4gICAgICAvLyB0byBmaW5kIHRoZSBjYWxsc2l0ZSB0aGF0IGNhdXNlZCB0aGlzIHdhcm5pbmcgdG8gZmlyZS5cbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICB9IGNhdGNoICh4KSB7fVxuICB9O1xuXG4gIGxvd1ByaW9yaXR5V2FybmluZyA9IGZ1bmN0aW9uIChjb25kaXRpb24sIGZvcm1hdCkge1xuICAgIGlmIChmb3JtYXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdgbG93UHJpb3JpdHlXYXJuaW5nKGNvbmRpdGlvbiwgZm9ybWF0LCAuLi5hcmdzKWAgcmVxdWlyZXMgYSB3YXJuaW5nICcgKyAnbWVzc2FnZSBhcmd1bWVudCcpO1xuICAgIH1cbiAgICBpZiAoIWNvbmRpdGlvbikge1xuICAgICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbjIgPiAyID8gX2xlbjIgLSAyIDogMCksIF9rZXkyID0gMjsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgICBhcmdzW19rZXkyIC0gMl0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgICAgfVxuXG4gICAgICBwcmludFdhcm5pbmcuYXBwbHkodW5kZWZpbmVkLCBbZm9ybWF0XS5jb25jYXQoYXJncykpO1xuICAgIH1cbiAgfTtcbn1cblxudmFyIGxvd1ByaW9yaXR5V2FybmluZyQxID0gbG93UHJpb3JpdHlXYXJuaW5nO1xuXG5mdW5jdGlvbiB0eXBlT2Yob2JqZWN0KSB7XG4gIGlmICh0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0JyAmJiBvYmplY3QgIT09IG51bGwpIHtcbiAgICB2YXIgJCR0eXBlb2YgPSBvYmplY3QuJCR0eXBlb2Y7XG4gICAgc3dpdGNoICgkJHR5cGVvZikge1xuICAgICAgY2FzZSBSRUFDVF9FTEVNRU5UX1RZUEU6XG4gICAgICAgIHZhciB0eXBlID0gb2JqZWN0LnR5cGU7XG5cbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgY2FzZSBSRUFDVF9BU1lOQ19NT0RFX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX0ZSQUdNRU5UX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9QUk9GSUxFUl9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfU1RSSUNUX01PREVfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX1RZUEU6XG4gICAgICAgICAgICByZXR1cm4gdHlwZTtcbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgdmFyICQkdHlwZW9mVHlwZSA9IHR5cGUgJiYgdHlwZS4kJHR5cGVvZjtcblxuICAgICAgICAgICAgc3dpdGNoICgkJHR5cGVvZlR5cGUpIHtcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9DT05URVhUX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9QUk9WSURFUl9UWVBFOlxuICAgICAgICAgICAgICAgIHJldHVybiAkJHR5cGVvZlR5cGU7XG4gICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuICQkdHlwZW9mO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBjYXNlIFJFQUNUX0xBWllfVFlQRTpcbiAgICAgIGNhc2UgUkVBQ1RfTUVNT19UWVBFOlxuICAgICAgY2FzZSBSRUFDVF9QT1JUQUxfVFlQRTpcbiAgICAgICAgcmV0dXJuICQkdHlwZW9mO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWQ7XG59XG5cbi8vIEFzeW5jTW9kZSBpcyBkZXByZWNhdGVkIGFsb25nIHdpdGggaXNBc3luY01vZGVcbnZhciBBc3luY01vZGUgPSBSRUFDVF9BU1lOQ19NT0RFX1RZUEU7XG52YXIgQ29uY3VycmVudE1vZGUgPSBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRTtcbnZhciBDb250ZXh0Q29uc3VtZXIgPSBSRUFDVF9DT05URVhUX1RZUEU7XG52YXIgQ29udGV4dFByb3ZpZGVyID0gUkVBQ1RfUFJPVklERVJfVFlQRTtcbnZhciBFbGVtZW50ID0gUkVBQ1RfRUxFTUVOVF9UWVBFO1xudmFyIEZvcndhcmRSZWYgPSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFO1xudmFyIEZyYWdtZW50ID0gUkVBQ1RfRlJBR01FTlRfVFlQRTtcbnZhciBMYXp5ID0gUkVBQ1RfTEFaWV9UWVBFO1xudmFyIE1lbW8gPSBSRUFDVF9NRU1PX1RZUEU7XG52YXIgUG9ydGFsID0gUkVBQ1RfUE9SVEFMX1RZUEU7XG52YXIgUHJvZmlsZXIgPSBSRUFDVF9QUk9GSUxFUl9UWVBFO1xudmFyIFN0cmljdE1vZGUgPSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFO1xudmFyIFN1c3BlbnNlID0gUkVBQ1RfU1VTUEVOU0VfVFlQRTtcblxudmFyIGhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQXN5bmNNb2RlID0gZmFsc2U7XG5cbi8vIEFzeW5jTW9kZSBzaG91bGQgYmUgZGVwcmVjYXRlZFxuZnVuY3Rpb24gaXNBc3luY01vZGUob2JqZWN0KSB7XG4gIHtcbiAgICBpZiAoIWhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQXN5bmNNb2RlKSB7XG4gICAgICBoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0FzeW5jTW9kZSA9IHRydWU7XG4gICAgICBsb3dQcmlvcml0eVdhcm5pbmckMShmYWxzZSwgJ1RoZSBSZWFjdElzLmlzQXN5bmNNb2RlKCkgYWxpYXMgaGFzIGJlZW4gZGVwcmVjYXRlZCwgJyArICdhbmQgd2lsbCBiZSByZW1vdmVkIGluIFJlYWN0IDE3Ky4gVXBkYXRlIHlvdXIgY29kZSB0byB1c2UgJyArICdSZWFjdElzLmlzQ29uY3VycmVudE1vZGUoKSBpbnN0ZWFkLiBJdCBoYXMgdGhlIGV4YWN0IHNhbWUgQVBJLicpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gaXNDb25jdXJyZW50TW9kZShvYmplY3QpIHx8IHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9BU1lOQ19NT0RFX1RZUEU7XG59XG5mdW5jdGlvbiBpc0NvbmN1cnJlbnRNb2RlKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFO1xufVxuZnVuY3Rpb24gaXNDb250ZXh0Q29uc3VtZXIob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfQ09OVEVYVF9UWVBFO1xufVxuZnVuY3Rpb24gaXNDb250ZXh0UHJvdmlkZXIob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfUFJPVklERVJfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzRWxlbWVudChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmIG9iamVjdCAhPT0gbnVsbCAmJiBvYmplY3QuJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzRm9yd2FyZFJlZihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFO1xufVxuZnVuY3Rpb24gaXNGcmFnbWVudChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9GUkFHTUVOVF9UWVBFO1xufVxuZnVuY3Rpb24gaXNMYXp5KG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0xBWllfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzTWVtbyhvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9NRU1PX1RZUEU7XG59XG5mdW5jdGlvbiBpc1BvcnRhbChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9QT1JUQUxfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzUHJvZmlsZXIob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfUFJPRklMRVJfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzU3RyaWN0TW9kZShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFO1xufVxuZnVuY3Rpb24gaXNTdXNwZW5zZShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9TVVNQRU5TRV9UWVBFO1xufVxuXG5leHBvcnRzLnR5cGVPZiA9IHR5cGVPZjtcbmV4cG9ydHMuQXN5bmNNb2RlID0gQXN5bmNNb2RlO1xuZXhwb3J0cy5Db25jdXJyZW50TW9kZSA9IENvbmN1cnJlbnRNb2RlO1xuZXhwb3J0cy5Db250ZXh0Q29uc3VtZXIgPSBDb250ZXh0Q29uc3VtZXI7XG5leHBvcnRzLkNvbnRleHRQcm92aWRlciA9IENvbnRleHRQcm92aWRlcjtcbmV4cG9ydHMuRWxlbWVudCA9IEVsZW1lbnQ7XG5leHBvcnRzLkZvcndhcmRSZWYgPSBGb3J3YXJkUmVmO1xuZXhwb3J0cy5GcmFnbWVudCA9IEZyYWdtZW50O1xuZXhwb3J0cy5MYXp5ID0gTGF6eTtcbmV4cG9ydHMuTWVtbyA9IE1lbW87XG5leHBvcnRzLlBvcnRhbCA9IFBvcnRhbDtcbmV4cG9ydHMuUHJvZmlsZXIgPSBQcm9maWxlcjtcbmV4cG9ydHMuU3RyaWN0TW9kZSA9IFN0cmljdE1vZGU7XG5leHBvcnRzLlN1c3BlbnNlID0gU3VzcGVuc2U7XG5leHBvcnRzLmlzVmFsaWRFbGVtZW50VHlwZSA9IGlzVmFsaWRFbGVtZW50VHlwZTtcbmV4cG9ydHMuaXNBc3luY01vZGUgPSBpc0FzeW5jTW9kZTtcbmV4cG9ydHMuaXNDb25jdXJyZW50TW9kZSA9IGlzQ29uY3VycmVudE1vZGU7XG5leHBvcnRzLmlzQ29udGV4dENvbnN1bWVyID0gaXNDb250ZXh0Q29uc3VtZXI7XG5leHBvcnRzLmlzQ29udGV4dFByb3ZpZGVyID0gaXNDb250ZXh0UHJvdmlkZXI7XG5leHBvcnRzLmlzRWxlbWVudCA9IGlzRWxlbWVudDtcbmV4cG9ydHMuaXNGb3J3YXJkUmVmID0gaXNGb3J3YXJkUmVmO1xuZXhwb3J0cy5pc0ZyYWdtZW50ID0gaXNGcmFnbWVudDtcbmV4cG9ydHMuaXNMYXp5ID0gaXNMYXp5O1xuZXhwb3J0cy5pc01lbW8gPSBpc01lbW87XG5leHBvcnRzLmlzUG9ydGFsID0gaXNQb3J0YWw7XG5leHBvcnRzLmlzUHJvZmlsZXIgPSBpc1Byb2ZpbGVyO1xuZXhwb3J0cy5pc1N0cmljdE1vZGUgPSBpc1N0cmljdE1vZGU7XG5leHBvcnRzLmlzU3VzcGVuc2UgPSBpc1N1c3BlbnNlO1xuICB9KSgpO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LWlzLnByb2R1Y3Rpb24ubWluLmpzJyk7XG59IGVsc2Uge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LWlzLmRldmVsb3BtZW50LmpzJyk7XG59XG4iLCIvKlxub2JqZWN0LWFzc2lnblxuKGMpIFNpbmRyZSBTb3JodXNcbkBsaWNlbnNlIE1JVFxuKi9cblxuJ3VzZSBzdHJpY3QnO1xuLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cbnZhciBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xudmFyIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbnZhciBwcm9wSXNFbnVtZXJhYmxlID0gT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcblxuZnVuY3Rpb24gdG9PYmplY3QodmFsKSB7XG5cdGlmICh2YWwgPT09IG51bGwgfHwgdmFsID09PSB1bmRlZmluZWQpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdPYmplY3QuYXNzaWduIGNhbm5vdCBiZSBjYWxsZWQgd2l0aCBudWxsIG9yIHVuZGVmaW5lZCcpO1xuXHR9XG5cblx0cmV0dXJuIE9iamVjdCh2YWwpO1xufVxuXG5mdW5jdGlvbiBzaG91bGRVc2VOYXRpdmUoKSB7XG5cdHRyeSB7XG5cdFx0aWYgKCFPYmplY3QuYXNzaWduKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gRGV0ZWN0IGJ1Z2d5IHByb3BlcnR5IGVudW1lcmF0aW9uIG9yZGVyIGluIG9sZGVyIFY4IHZlcnNpb25zLlxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9NDExOFxuXHRcdHZhciB0ZXN0MSA9IG5ldyBTdHJpbmcoJ2FiYycpOyAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1uZXctd3JhcHBlcnNcblx0XHR0ZXN0MVs1XSA9ICdkZSc7XG5cdFx0aWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRlc3QxKVswXSA9PT0gJzUnKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzA1NlxuXHRcdHZhciB0ZXN0MiA9IHt9O1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgMTA7IGkrKykge1xuXHRcdFx0dGVzdDJbJ18nICsgU3RyaW5nLmZyb21DaGFyQ29kZShpKV0gPSBpO1xuXHRcdH1cblx0XHR2YXIgb3JkZXIyID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGVzdDIpLm1hcChmdW5jdGlvbiAobikge1xuXHRcdFx0cmV0dXJuIHRlc3QyW25dO1xuXHRcdH0pO1xuXHRcdGlmIChvcmRlcjIuam9pbignJykgIT09ICcwMTIzNDU2Nzg5Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTMwNTZcblx0XHR2YXIgdGVzdDMgPSB7fTtcblx0XHQnYWJjZGVmZ2hpamtsbW5vcHFyc3QnLnNwbGl0KCcnKS5mb3JFYWNoKGZ1bmN0aW9uIChsZXR0ZXIpIHtcblx0XHRcdHRlc3QzW2xldHRlcl0gPSBsZXR0ZXI7XG5cdFx0fSk7XG5cdFx0aWYgKE9iamVjdC5rZXlzKE9iamVjdC5hc3NpZ24oe30sIHRlc3QzKSkuam9pbignJykgIT09XG5cdFx0XHRcdCdhYmNkZWZnaGlqa2xtbm9wcXJzdCcpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdHJ1ZTtcblx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0Ly8gV2UgZG9uJ3QgZXhwZWN0IGFueSBvZiB0aGUgYWJvdmUgdG8gdGhyb3csIGJ1dCBiZXR0ZXIgdG8gYmUgc2FmZS5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzaG91bGRVc2VOYXRpdmUoKSA/IE9iamVjdC5hc3NpZ24gOiBmdW5jdGlvbiAodGFyZ2V0LCBzb3VyY2UpIHtcblx0dmFyIGZyb207XG5cdHZhciB0byA9IHRvT2JqZWN0KHRhcmdldCk7XG5cdHZhciBzeW1ib2xzO1xuXG5cdGZvciAodmFyIHMgPSAxOyBzIDwgYXJndW1lbnRzLmxlbmd0aDsgcysrKSB7XG5cdFx0ZnJvbSA9IE9iamVjdChhcmd1bWVudHNbc10pO1xuXG5cdFx0Zm9yICh2YXIga2V5IGluIGZyb20pIHtcblx0XHRcdGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGZyb20sIGtleSkpIHtcblx0XHRcdFx0dG9ba2V5XSA9IGZyb21ba2V5XTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG5cdFx0XHRzeW1ib2xzID0gZ2V0T3duUHJvcGVydHlTeW1ib2xzKGZyb20pO1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzeW1ib2xzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGlmIChwcm9wSXNFbnVtZXJhYmxlLmNhbGwoZnJvbSwgc3ltYm9sc1tpXSkpIHtcblx0XHRcdFx0XHR0b1tzeW1ib2xzW2ldXSA9IGZyb21bc3ltYm9sc1tpXV07XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gdG87XG59O1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBSZWFjdFByb3BUeXBlc1NlY3JldCA9ICdTRUNSRVRfRE9fTk9UX1BBU1NfVEhJU19PUl9ZT1VfV0lMTF9CRV9GSVJFRCc7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3RQcm9wVHlwZXNTZWNyZXQ7XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIHByaW50V2FybmluZyA9IGZ1bmN0aW9uKCkge307XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHZhciBSZWFjdFByb3BUeXBlc1NlY3JldCA9IHJlcXVpcmUoJy4vbGliL1JlYWN0UHJvcFR5cGVzU2VjcmV0Jyk7XG4gIHZhciBsb2dnZWRUeXBlRmFpbHVyZXMgPSB7fTtcbiAgdmFyIGhhcyA9IEZ1bmN0aW9uLmNhbGwuYmluZChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5KTtcblxuICBwcmludFdhcm5pbmcgPSBmdW5jdGlvbih0ZXh0KSB7XG4gICAgdmFyIG1lc3NhZ2UgPSAnV2FybmluZzogJyArIHRleHQ7XG4gICAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uc29sZS5lcnJvcihtZXNzYWdlKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIC8vIC0tLSBXZWxjb21lIHRvIGRlYnVnZ2luZyBSZWFjdCAtLS1cbiAgICAgIC8vIFRoaXMgZXJyb3Igd2FzIHRocm93biBhcyBhIGNvbnZlbmllbmNlIHNvIHRoYXQgeW91IGNhbiB1c2UgdGhpcyBzdGFja1xuICAgICAgLy8gdG8gZmluZCB0aGUgY2FsbHNpdGUgdGhhdCBjYXVzZWQgdGhpcyB3YXJuaW5nIHRvIGZpcmUuXG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgfSBjYXRjaCAoeCkge31cbiAgfTtcbn1cblxuLyoqXG4gKiBBc3NlcnQgdGhhdCB0aGUgdmFsdWVzIG1hdGNoIHdpdGggdGhlIHR5cGUgc3BlY3MuXG4gKiBFcnJvciBtZXNzYWdlcyBhcmUgbWVtb3JpemVkIGFuZCB3aWxsIG9ubHkgYmUgc2hvd24gb25jZS5cbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gdHlwZVNwZWNzIE1hcCBvZiBuYW1lIHRvIGEgUmVhY3RQcm9wVHlwZVxuICogQHBhcmFtIHtvYmplY3R9IHZhbHVlcyBSdW50aW1lIHZhbHVlcyB0aGF0IG5lZWQgdG8gYmUgdHlwZS1jaGVja2VkXG4gKiBAcGFyYW0ge3N0cmluZ30gbG9jYXRpb24gZS5nLiBcInByb3BcIiwgXCJjb250ZXh0XCIsIFwiY2hpbGQgY29udGV4dFwiXG4gKiBAcGFyYW0ge3N0cmluZ30gY29tcG9uZW50TmFtZSBOYW1lIG9mIHRoZSBjb21wb25lbnQgZm9yIGVycm9yIG1lc3NhZ2VzLlxuICogQHBhcmFtIHs/RnVuY3Rpb259IGdldFN0YWNrIFJldHVybnMgdGhlIGNvbXBvbmVudCBzdGFjay5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGNoZWNrUHJvcFR5cGVzKHR5cGVTcGVjcywgdmFsdWVzLCBsb2NhdGlvbiwgY29tcG9uZW50TmFtZSwgZ2V0U3RhY2spIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBmb3IgKHZhciB0eXBlU3BlY05hbWUgaW4gdHlwZVNwZWNzKSB7XG4gICAgICBpZiAoaGFzKHR5cGVTcGVjcywgdHlwZVNwZWNOYW1lKSkge1xuICAgICAgICB2YXIgZXJyb3I7XG4gICAgICAgIC8vIFByb3AgdHlwZSB2YWxpZGF0aW9uIG1heSB0aHJvdy4gSW4gY2FzZSB0aGV5IGRvLCB3ZSBkb24ndCB3YW50IHRvXG4gICAgICAgIC8vIGZhaWwgdGhlIHJlbmRlciBwaGFzZSB3aGVyZSBpdCBkaWRuJ3QgZmFpbCBiZWZvcmUuIFNvIHdlIGxvZyBpdC5cbiAgICAgICAgLy8gQWZ0ZXIgdGhlc2UgaGF2ZSBiZWVuIGNsZWFuZWQgdXAsIHdlJ2xsIGxldCB0aGVtIHRocm93LlxuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgaXMgaW50ZW50aW9uYWxseSBhbiBpbnZhcmlhbnQgdGhhdCBnZXRzIGNhdWdodC4gSXQncyB0aGUgc2FtZVxuICAgICAgICAgIC8vIGJlaGF2aW9yIGFzIHdpdGhvdXQgdGhpcyBzdGF0ZW1lbnQgZXhjZXB0IHdpdGggYSBiZXR0ZXIgbWVzc2FnZS5cbiAgICAgICAgICBpZiAodHlwZW9mIHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB2YXIgZXJyID0gRXJyb3IoXG4gICAgICAgICAgICAgIChjb21wb25lbnROYW1lIHx8ICdSZWFjdCBjbGFzcycpICsgJzogJyArIGxvY2F0aW9uICsgJyB0eXBlIGAnICsgdHlwZVNwZWNOYW1lICsgJ2AgaXMgaW52YWxpZDsgJyArXG4gICAgICAgICAgICAgICdpdCBtdXN0IGJlIGEgZnVuY3Rpb24sIHVzdWFsbHkgZnJvbSB0aGUgYHByb3AtdHlwZXNgIHBhY2thZ2UsIGJ1dCByZWNlaXZlZCBgJyArIHR5cGVvZiB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSArICdgLidcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBlcnIubmFtZSA9ICdJbnZhcmlhbnQgVmlvbGF0aW9uJztcbiAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICB9XG4gICAgICAgICAgZXJyb3IgPSB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSh2YWx1ZXMsIHR5cGVTcGVjTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIG51bGwsIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgfSBjYXRjaCAoZXgpIHtcbiAgICAgICAgICBlcnJvciA9IGV4O1xuICAgICAgICB9XG4gICAgICAgIGlmIChlcnJvciAmJiAhKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpKSB7XG4gICAgICAgICAgcHJpbnRXYXJuaW5nKFxuICAgICAgICAgICAgKGNvbXBvbmVudE5hbWUgfHwgJ1JlYWN0IGNsYXNzJykgKyAnOiB0eXBlIHNwZWNpZmljYXRpb24gb2YgJyArXG4gICAgICAgICAgICBsb2NhdGlvbiArICcgYCcgKyB0eXBlU3BlY05hbWUgKyAnYCBpcyBpbnZhbGlkOyB0aGUgdHlwZSBjaGVja2VyICcgK1xuICAgICAgICAgICAgJ2Z1bmN0aW9uIG11c3QgcmV0dXJuIGBudWxsYCBvciBhbiBgRXJyb3JgIGJ1dCByZXR1cm5lZCBhICcgKyB0eXBlb2YgZXJyb3IgKyAnLiAnICtcbiAgICAgICAgICAgICdZb3UgbWF5IGhhdmUgZm9yZ290dGVuIHRvIHBhc3MgYW4gYXJndW1lbnQgdG8gdGhlIHR5cGUgY2hlY2tlciAnICtcbiAgICAgICAgICAgICdjcmVhdG9yIChhcnJheU9mLCBpbnN0YW5jZU9mLCBvYmplY3RPZiwgb25lT2YsIG9uZU9mVHlwZSwgYW5kICcgK1xuICAgICAgICAgICAgJ3NoYXBlIGFsbCByZXF1aXJlIGFuIGFyZ3VtZW50KS4nXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvciAmJiAhKGVycm9yLm1lc3NhZ2UgaW4gbG9nZ2VkVHlwZUZhaWx1cmVzKSkge1xuICAgICAgICAgIC8vIE9ubHkgbW9uaXRvciB0aGlzIGZhaWx1cmUgb25jZSBiZWNhdXNlIHRoZXJlIHRlbmRzIHRvIGJlIGEgbG90IG9mIHRoZVxuICAgICAgICAgIC8vIHNhbWUgZXJyb3IuXG4gICAgICAgICAgbG9nZ2VkVHlwZUZhaWx1cmVzW2Vycm9yLm1lc3NhZ2VdID0gdHJ1ZTtcblxuICAgICAgICAgIHZhciBzdGFjayA9IGdldFN0YWNrID8gZ2V0U3RhY2soKSA6ICcnO1xuXG4gICAgICAgICAgcHJpbnRXYXJuaW5nKFxuICAgICAgICAgICAgJ0ZhaWxlZCAnICsgbG9jYXRpb24gKyAnIHR5cGU6ICcgKyBlcnJvci5tZXNzYWdlICsgKHN0YWNrICE9IG51bGwgPyBzdGFjayA6ICcnKVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBSZXNldHMgd2FybmluZyBjYWNoZSB3aGVuIHRlc3RpbmcuXG4gKlxuICogQHByaXZhdGVcbiAqL1xuY2hlY2tQcm9wVHlwZXMucmVzZXRXYXJuaW5nQ2FjaGUgPSBmdW5jdGlvbigpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBsb2dnZWRUeXBlRmFpbHVyZXMgPSB7fTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNoZWNrUHJvcFR5cGVzO1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBSZWFjdElzID0gcmVxdWlyZSgncmVhY3QtaXMnKTtcbnZhciBhc3NpZ24gPSByZXF1aXJlKCdvYmplY3QtYXNzaWduJyk7XG5cbnZhciBSZWFjdFByb3BUeXBlc1NlY3JldCA9IHJlcXVpcmUoJy4vbGliL1JlYWN0UHJvcFR5cGVzU2VjcmV0Jyk7XG52YXIgY2hlY2tQcm9wVHlwZXMgPSByZXF1aXJlKCcuL2NoZWNrUHJvcFR5cGVzJyk7XG5cbnZhciBoYXMgPSBGdW5jdGlvbi5jYWxsLmJpbmQoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSk7XG52YXIgcHJpbnRXYXJuaW5nID0gZnVuY3Rpb24oKSB7fTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgcHJpbnRXYXJuaW5nID0gZnVuY3Rpb24odGV4dCkge1xuICAgIHZhciBtZXNzYWdlID0gJ1dhcm5pbmc6ICcgKyB0ZXh0O1xuICAgIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IobWVzc2FnZSk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAvLyAtLS0gV2VsY29tZSB0byBkZWJ1Z2dpbmcgUmVhY3QgLS0tXG4gICAgICAvLyBUaGlzIGVycm9yIHdhcyB0aHJvd24gYXMgYSBjb252ZW5pZW5jZSBzbyB0aGF0IHlvdSBjYW4gdXNlIHRoaXMgc3RhY2tcbiAgICAgIC8vIHRvIGZpbmQgdGhlIGNhbGxzaXRlIHRoYXQgY2F1c2VkIHRoaXMgd2FybmluZyB0byBmaXJlLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgIH0gY2F0Y2ggKHgpIHt9XG4gIH07XG59XG5cbmZ1bmN0aW9uIGVtcHR5RnVuY3Rpb25UaGF0UmV0dXJuc051bGwoKSB7XG4gIHJldHVybiBudWxsO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGlzVmFsaWRFbGVtZW50LCB0aHJvd09uRGlyZWN0QWNjZXNzKSB7XG4gIC8qIGdsb2JhbCBTeW1ib2wgKi9cbiAgdmFyIElURVJBVE9SX1NZTUJPTCA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLml0ZXJhdG9yO1xuICB2YXIgRkFVWF9JVEVSQVRPUl9TWU1CT0wgPSAnQEBpdGVyYXRvcic7IC8vIEJlZm9yZSBTeW1ib2wgc3BlYy5cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgaXRlcmF0b3IgbWV0aG9kIGZ1bmN0aW9uIGNvbnRhaW5lZCBvbiB0aGUgaXRlcmFibGUgb2JqZWN0LlxuICAgKlxuICAgKiBCZSBzdXJlIHRvIGludm9rZSB0aGUgZnVuY3Rpb24gd2l0aCB0aGUgaXRlcmFibGUgYXMgY29udGV4dDpcbiAgICpcbiAgICogICAgIHZhciBpdGVyYXRvckZuID0gZ2V0SXRlcmF0b3JGbihteUl0ZXJhYmxlKTtcbiAgICogICAgIGlmIChpdGVyYXRvckZuKSB7XG4gICAqICAgICAgIHZhciBpdGVyYXRvciA9IGl0ZXJhdG9yRm4uY2FsbChteUl0ZXJhYmxlKTtcbiAgICogICAgICAgLi4uXG4gICAqICAgICB9XG4gICAqXG4gICAqIEBwYXJhbSB7P29iamVjdH0gbWF5YmVJdGVyYWJsZVxuICAgKiBAcmV0dXJuIHs/ZnVuY3Rpb259XG4gICAqL1xuICBmdW5jdGlvbiBnZXRJdGVyYXRvckZuKG1heWJlSXRlcmFibGUpIHtcbiAgICB2YXIgaXRlcmF0b3JGbiA9IG1heWJlSXRlcmFibGUgJiYgKElURVJBVE9SX1NZTUJPTCAmJiBtYXliZUl0ZXJhYmxlW0lURVJBVE9SX1NZTUJPTF0gfHwgbWF5YmVJdGVyYWJsZVtGQVVYX0lURVJBVE9SX1NZTUJPTF0pO1xuICAgIGlmICh0eXBlb2YgaXRlcmF0b3JGbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIGl0ZXJhdG9yRm47XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENvbGxlY3Rpb24gb2YgbWV0aG9kcyB0aGF0IGFsbG93IGRlY2xhcmF0aW9uIGFuZCB2YWxpZGF0aW9uIG9mIHByb3BzIHRoYXQgYXJlXG4gICAqIHN1cHBsaWVkIHRvIFJlYWN0IGNvbXBvbmVudHMuIEV4YW1wbGUgdXNhZ2U6XG4gICAqXG4gICAqICAgdmFyIFByb3BzID0gcmVxdWlyZSgnUmVhY3RQcm9wVHlwZXMnKTtcbiAgICogICB2YXIgTXlBcnRpY2xlID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICAgKiAgICAgcHJvcFR5cGVzOiB7XG4gICAqICAgICAgIC8vIEFuIG9wdGlvbmFsIHN0cmluZyBwcm9wIG5hbWVkIFwiZGVzY3JpcHRpb25cIi5cbiAgICogICAgICAgZGVzY3JpcHRpb246IFByb3BzLnN0cmluZyxcbiAgICpcbiAgICogICAgICAgLy8gQSByZXF1aXJlZCBlbnVtIHByb3AgbmFtZWQgXCJjYXRlZ29yeVwiLlxuICAgKiAgICAgICBjYXRlZ29yeTogUHJvcHMub25lT2YoWydOZXdzJywnUGhvdG9zJ10pLmlzUmVxdWlyZWQsXG4gICAqXG4gICAqICAgICAgIC8vIEEgcHJvcCBuYW1lZCBcImRpYWxvZ1wiIHRoYXQgcmVxdWlyZXMgYW4gaW5zdGFuY2Ugb2YgRGlhbG9nLlxuICAgKiAgICAgICBkaWFsb2c6IFByb3BzLmluc3RhbmNlT2YoRGlhbG9nKS5pc1JlcXVpcmVkXG4gICAqICAgICB9LFxuICAgKiAgICAgcmVuZGVyOiBmdW5jdGlvbigpIHsgLi4uIH1cbiAgICogICB9KTtcbiAgICpcbiAgICogQSBtb3JlIGZvcm1hbCBzcGVjaWZpY2F0aW9uIG9mIGhvdyB0aGVzZSBtZXRob2RzIGFyZSB1c2VkOlxuICAgKlxuICAgKiAgIHR5cGUgOj0gYXJyYXl8Ym9vbHxmdW5jfG9iamVjdHxudW1iZXJ8c3RyaW5nfG9uZU9mKFsuLi5dKXxpbnN0YW5jZU9mKC4uLilcbiAgICogICBkZWNsIDo9IFJlYWN0UHJvcFR5cGVzLnt0eXBlfSguaXNSZXF1aXJlZCk/XG4gICAqXG4gICAqIEVhY2ggYW5kIGV2ZXJ5IGRlY2xhcmF0aW9uIHByb2R1Y2VzIGEgZnVuY3Rpb24gd2l0aCB0aGUgc2FtZSBzaWduYXR1cmUuIFRoaXNcbiAgICogYWxsb3dzIHRoZSBjcmVhdGlvbiBvZiBjdXN0b20gdmFsaWRhdGlvbiBmdW5jdGlvbnMuIEZvciBleGFtcGxlOlxuICAgKlxuICAgKiAgdmFyIE15TGluayA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgICogICAgcHJvcFR5cGVzOiB7XG4gICAqICAgICAgLy8gQW4gb3B0aW9uYWwgc3RyaW5nIG9yIFVSSSBwcm9wIG5hbWVkIFwiaHJlZlwiLlxuICAgKiAgICAgIGhyZWY6IGZ1bmN0aW9uKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSkge1xuICAgKiAgICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICogICAgICAgIGlmIChwcm9wVmFsdWUgIT0gbnVsbCAmJiB0eXBlb2YgcHJvcFZhbHVlICE9PSAnc3RyaW5nJyAmJlxuICAgKiAgICAgICAgICAgICEocHJvcFZhbHVlIGluc3RhbmNlb2YgVVJJKSkge1xuICAgKiAgICAgICAgICByZXR1cm4gbmV3IEVycm9yKFxuICAgKiAgICAgICAgICAgICdFeHBlY3RlZCBhIHN0cmluZyBvciBhbiBVUkkgZm9yICcgKyBwcm9wTmFtZSArICcgaW4gJyArXG4gICAqICAgICAgICAgICAgY29tcG9uZW50TmFtZVxuICAgKiAgICAgICAgICApO1xuICAgKiAgICAgICAgfVxuICAgKiAgICAgIH1cbiAgICogICAgfSxcbiAgICogICAgcmVuZGVyOiBmdW5jdGlvbigpIHsuLi59XG4gICAqICB9KTtcbiAgICpcbiAgICogQGludGVybmFsXG4gICAqL1xuXG4gIHZhciBBTk9OWU1PVVMgPSAnPDxhbm9ueW1vdXM+Pic7XG5cbiAgLy8gSW1wb3J0YW50IVxuICAvLyBLZWVwIHRoaXMgbGlzdCBpbiBzeW5jIHdpdGggcHJvZHVjdGlvbiB2ZXJzaW9uIGluIGAuL2ZhY3RvcnlXaXRoVGhyb3dpbmdTaGltcy5qc2AuXG4gIHZhciBSZWFjdFByb3BUeXBlcyA9IHtcbiAgICBhcnJheTogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ2FycmF5JyksXG4gICAgYm9vbDogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ2Jvb2xlYW4nKSxcbiAgICBmdW5jOiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignZnVuY3Rpb24nKSxcbiAgICBudW1iZXI6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdudW1iZXInKSxcbiAgICBvYmplY3Q6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdvYmplY3QnKSxcbiAgICBzdHJpbmc6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdzdHJpbmcnKSxcbiAgICBzeW1ib2w6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdzeW1ib2wnKSxcblxuICAgIGFueTogY3JlYXRlQW55VHlwZUNoZWNrZXIoKSxcbiAgICBhcnJheU9mOiBjcmVhdGVBcnJheU9mVHlwZUNoZWNrZXIsXG4gICAgZWxlbWVudDogY3JlYXRlRWxlbWVudFR5cGVDaGVja2VyKCksXG4gICAgZWxlbWVudFR5cGU6IGNyZWF0ZUVsZW1lbnRUeXBlVHlwZUNoZWNrZXIoKSxcbiAgICBpbnN0YW5jZU9mOiBjcmVhdGVJbnN0YW5jZVR5cGVDaGVja2VyLFxuICAgIG5vZGU6IGNyZWF0ZU5vZGVDaGVja2VyKCksXG4gICAgb2JqZWN0T2Y6IGNyZWF0ZU9iamVjdE9mVHlwZUNoZWNrZXIsXG4gICAgb25lT2Y6IGNyZWF0ZUVudW1UeXBlQ2hlY2tlcixcbiAgICBvbmVPZlR5cGU6IGNyZWF0ZVVuaW9uVHlwZUNoZWNrZXIsXG4gICAgc2hhcGU6IGNyZWF0ZVNoYXBlVHlwZUNoZWNrZXIsXG4gICAgZXhhY3Q6IGNyZWF0ZVN0cmljdFNoYXBlVHlwZUNoZWNrZXIsXG4gIH07XG5cbiAgLyoqXG4gICAqIGlubGluZWQgT2JqZWN0LmlzIHBvbHlmaWxsIHRvIGF2b2lkIHJlcXVpcmluZyBjb25zdW1lcnMgc2hpcCB0aGVpciBvd25cbiAgICogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvT2JqZWN0L2lzXG4gICAqL1xuICAvKmVzbGludC1kaXNhYmxlIG5vLXNlbGYtY29tcGFyZSovXG4gIGZ1bmN0aW9uIGlzKHgsIHkpIHtcbiAgICAvLyBTYW1lVmFsdWUgYWxnb3JpdGhtXG4gICAgaWYgKHggPT09IHkpIHtcbiAgICAgIC8vIFN0ZXBzIDEtNSwgNy0xMFxuICAgICAgLy8gU3RlcHMgNi5iLTYuZTogKzAgIT0gLTBcbiAgICAgIHJldHVybiB4ICE9PSAwIHx8IDEgLyB4ID09PSAxIC8geTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gU3RlcCA2LmE6IE5hTiA9PSBOYU5cbiAgICAgIHJldHVybiB4ICE9PSB4ICYmIHkgIT09IHk7XG4gICAgfVxuICB9XG4gIC8qZXNsaW50LWVuYWJsZSBuby1zZWxmLWNvbXBhcmUqL1xuXG4gIC8qKlxuICAgKiBXZSB1c2UgYW4gRXJyb3ItbGlrZSBvYmplY3QgZm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHkgYXMgcGVvcGxlIG1heSBjYWxsXG4gICAqIFByb3BUeXBlcyBkaXJlY3RseSBhbmQgaW5zcGVjdCB0aGVpciBvdXRwdXQuIEhvd2V2ZXIsIHdlIGRvbid0IHVzZSByZWFsXG4gICAqIEVycm9ycyBhbnltb3JlLiBXZSBkb24ndCBpbnNwZWN0IHRoZWlyIHN0YWNrIGFueXdheSwgYW5kIGNyZWF0aW5nIHRoZW1cbiAgICogaXMgcHJvaGliaXRpdmVseSBleHBlbnNpdmUgaWYgdGhleSBhcmUgY3JlYXRlZCB0b28gb2Z0ZW4sIHN1Y2ggYXMgd2hhdFxuICAgKiBoYXBwZW5zIGluIG9uZU9mVHlwZSgpIGZvciBhbnkgdHlwZSBiZWZvcmUgdGhlIG9uZSB0aGF0IG1hdGNoZWQuXG4gICAqL1xuICBmdW5jdGlvbiBQcm9wVHlwZUVycm9yKG1lc3NhZ2UpIHtcbiAgICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xuICAgIHRoaXMuc3RhY2sgPSAnJztcbiAgfVxuICAvLyBNYWtlIGBpbnN0YW5jZW9mIEVycm9yYCBzdGlsbCB3b3JrIGZvciByZXR1cm5lZCBlcnJvcnMuXG4gIFByb3BUeXBlRXJyb3IucHJvdG90eXBlID0gRXJyb3IucHJvdG90eXBlO1xuXG4gIGZ1bmN0aW9uIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHZhciBtYW51YWxQcm9wVHlwZUNhbGxDYWNoZSA9IHt9O1xuICAgICAgdmFyIG1hbnVhbFByb3BUeXBlV2FybmluZ0NvdW50ID0gMDtcbiAgICB9XG4gICAgZnVuY3Rpb24gY2hlY2tUeXBlKGlzUmVxdWlyZWQsIHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSwgc2VjcmV0KSB7XG4gICAgICBjb21wb25lbnROYW1lID0gY29tcG9uZW50TmFtZSB8fCBBTk9OWU1PVVM7XG4gICAgICBwcm9wRnVsbE5hbWUgPSBwcm9wRnVsbE5hbWUgfHwgcHJvcE5hbWU7XG5cbiAgICAgIGlmIChzZWNyZXQgIT09IFJlYWN0UHJvcFR5cGVzU2VjcmV0KSB7XG4gICAgICAgIGlmICh0aHJvd09uRGlyZWN0QWNjZXNzKSB7XG4gICAgICAgICAgLy8gTmV3IGJlaGF2aW9yIG9ubHkgZm9yIHVzZXJzIG9mIGBwcm9wLXR5cGVzYCBwYWNrYWdlXG4gICAgICAgICAgdmFyIGVyciA9IG5ldyBFcnJvcihcbiAgICAgICAgICAgICdDYWxsaW5nIFByb3BUeXBlcyB2YWxpZGF0b3JzIGRpcmVjdGx5IGlzIG5vdCBzdXBwb3J0ZWQgYnkgdGhlIGBwcm9wLXR5cGVzYCBwYWNrYWdlLiAnICtcbiAgICAgICAgICAgICdVc2UgYFByb3BUeXBlcy5jaGVja1Byb3BUeXBlcygpYCB0byBjYWxsIHRoZW0uICcgK1xuICAgICAgICAgICAgJ1JlYWQgbW9yZSBhdCBodHRwOi8vZmIubWUvdXNlLWNoZWNrLXByb3AtdHlwZXMnXG4gICAgICAgICAgKTtcbiAgICAgICAgICBlcnIubmFtZSA9ICdJbnZhcmlhbnQgVmlvbGF0aW9uJztcbiAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgIH0gZWxzZSBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAvLyBPbGQgYmVoYXZpb3IgZm9yIHBlb3BsZSB1c2luZyBSZWFjdC5Qcm9wVHlwZXNcbiAgICAgICAgICB2YXIgY2FjaGVLZXkgPSBjb21wb25lbnROYW1lICsgJzonICsgcHJvcE5hbWU7XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgIW1hbnVhbFByb3BUeXBlQ2FsbENhY2hlW2NhY2hlS2V5XSAmJlxuICAgICAgICAgICAgLy8gQXZvaWQgc3BhbW1pbmcgdGhlIGNvbnNvbGUgYmVjYXVzZSB0aGV5IGFyZSBvZnRlbiBub3QgYWN0aW9uYWJsZSBleGNlcHQgZm9yIGxpYiBhdXRob3JzXG4gICAgICAgICAgICBtYW51YWxQcm9wVHlwZVdhcm5pbmdDb3VudCA8IDNcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIHByaW50V2FybmluZyhcbiAgICAgICAgICAgICAgJ1lvdSBhcmUgbWFudWFsbHkgY2FsbGluZyBhIFJlYWN0LlByb3BUeXBlcyB2YWxpZGF0aW9uICcgK1xuICAgICAgICAgICAgICAnZnVuY3Rpb24gZm9yIHRoZSBgJyArIHByb3BGdWxsTmFtZSArICdgIHByb3Agb24gYCcgKyBjb21wb25lbnROYW1lICArICdgLiBUaGlzIGlzIGRlcHJlY2F0ZWQgJyArXG4gICAgICAgICAgICAgICdhbmQgd2lsbCB0aHJvdyBpbiB0aGUgc3RhbmRhbG9uZSBgcHJvcC10eXBlc2AgcGFja2FnZS4gJyArXG4gICAgICAgICAgICAgICdZb3UgbWF5IGJlIHNlZWluZyB0aGlzIHdhcm5pbmcgZHVlIHRvIGEgdGhpcmQtcGFydHkgUHJvcFR5cGVzICcgK1xuICAgICAgICAgICAgICAnbGlicmFyeS4gU2VlIGh0dHBzOi8vZmIubWUvcmVhY3Qtd2FybmluZy1kb250LWNhbGwtcHJvcHR5cGVzICcgKyAnZm9yIGRldGFpbHMuJ1xuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIG1hbnVhbFByb3BUeXBlQ2FsbENhY2hlW2NhY2hlS2V5XSA9IHRydWU7XG4gICAgICAgICAgICBtYW51YWxQcm9wVHlwZVdhcm5pbmdDb3VudCsrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHByb3BzW3Byb3BOYW1lXSA9PSBudWxsKSB7XG4gICAgICAgIGlmIChpc1JlcXVpcmVkKSB7XG4gICAgICAgICAgaWYgKHByb3BzW3Byb3BOYW1lXSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdUaGUgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIGlzIG1hcmtlZCBhcyByZXF1aXJlZCAnICsgKCdpbiBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgYnV0IGl0cyB2YWx1ZSBpcyBgbnVsbGAuJykpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ1RoZSAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2AgaXMgbWFya2VkIGFzIHJlcXVpcmVkIGluICcgKyAoJ2AnICsgY29tcG9uZW50TmFtZSArICdgLCBidXQgaXRzIHZhbHVlIGlzIGB1bmRlZmluZWRgLicpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBjaGFpbmVkQ2hlY2tUeXBlID0gY2hlY2tUeXBlLmJpbmQobnVsbCwgZmFsc2UpO1xuICAgIGNoYWluZWRDaGVja1R5cGUuaXNSZXF1aXJlZCA9IGNoZWNrVHlwZS5iaW5kKG51bGwsIHRydWUpO1xuXG4gICAgcmV0dXJuIGNoYWluZWRDaGVja1R5cGU7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcihleHBlY3RlZFR5cGUpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUsIHNlY3JldCkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICBpZiAocHJvcFR5cGUgIT09IGV4cGVjdGVkVHlwZSkge1xuICAgICAgICAvLyBgcHJvcFZhbHVlYCBiZWluZyBpbnN0YW5jZSBvZiwgc2F5LCBkYXRlL3JlZ2V4cCwgcGFzcyB0aGUgJ29iamVjdCdcbiAgICAgICAgLy8gY2hlY2ssIGJ1dCB3ZSBjYW4gb2ZmZXIgYSBtb3JlIHByZWNpc2UgZXJyb3IgbWVzc2FnZSBoZXJlIHJhdGhlciB0aGFuXG4gICAgICAgIC8vICdvZiB0eXBlIGBvYmplY3RgJy5cbiAgICAgICAgdmFyIHByZWNpc2VUeXBlID0gZ2V0UHJlY2lzZVR5cGUocHJvcFZhbHVlKTtcblxuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBwcmVjaXNlVHlwZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCAnKSArICgnYCcgKyBleHBlY3RlZFR5cGUgKyAnYC4nKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUFueVR5cGVDaGVja2VyKCkge1xuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcihlbXB0eUZ1bmN0aW9uVGhhdFJldHVybnNOdWxsKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUFycmF5T2ZUeXBlQ2hlY2tlcih0eXBlQ2hlY2tlcikge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgaWYgKHR5cGVvZiB0eXBlQ2hlY2tlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ1Byb3BlcnR5IGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgY29tcG9uZW50IGAnICsgY29tcG9uZW50TmFtZSArICdgIGhhcyBpbnZhbGlkIFByb3BUeXBlIG5vdGF0aW9uIGluc2lkZSBhcnJheU9mLicpO1xuICAgICAgfVxuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIGlmICghQXJyYXkuaXNBcnJheShwcm9wVmFsdWUpKSB7XG4gICAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIHByb3BUeXBlICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGFuIGFycmF5LicpKTtcbiAgICAgIH1cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcFZhbHVlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBlcnJvciA9IHR5cGVDaGVja2VyKHByb3BWYWx1ZSwgaSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSArICdbJyArIGkgKyAnXScsIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlRWxlbWVudFR5cGVDaGVja2VyKCkge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIGlmICghaXNWYWxpZEVsZW1lbnQocHJvcFZhbHVlKSkge1xuICAgICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBwcm9wVHlwZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBhIHNpbmdsZSBSZWFjdEVsZW1lbnQuJykpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVFbGVtZW50VHlwZVR5cGVDaGVja2VyKCkge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIGlmICghUmVhY3RJcy5pc1ZhbGlkRWxlbWVudFR5cGUocHJvcFZhbHVlKSkge1xuICAgICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBwcm9wVHlwZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBhIHNpbmdsZSBSZWFjdEVsZW1lbnQgdHlwZS4nKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUluc3RhbmNlVHlwZUNoZWNrZXIoZXhwZWN0ZWRDbGFzcykge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgaWYgKCEocHJvcHNbcHJvcE5hbWVdIGluc3RhbmNlb2YgZXhwZWN0ZWRDbGFzcykpIHtcbiAgICAgICAgdmFyIGV4cGVjdGVkQ2xhc3NOYW1lID0gZXhwZWN0ZWRDbGFzcy5uYW1lIHx8IEFOT05ZTU9VUztcbiAgICAgICAgdmFyIGFjdHVhbENsYXNzTmFtZSA9IGdldENsYXNzTmFtZShwcm9wc1twcm9wTmFtZV0pO1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBhY3R1YWxDbGFzc05hbWUgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgJykgKyAoJ2luc3RhbmNlIG9mIGAnICsgZXhwZWN0ZWRDbGFzc05hbWUgKyAnYC4nKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUVudW1UeXBlQ2hlY2tlcihleHBlY3RlZFZhbHVlcykge1xuICAgIGlmICghQXJyYXkuaXNBcnJheShleHBlY3RlZFZhbHVlcykpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICAgIHByaW50V2FybmluZyhcbiAgICAgICAgICAgICdJbnZhbGlkIGFyZ3VtZW50cyBzdXBwbGllZCB0byBvbmVPZiwgZXhwZWN0ZWQgYW4gYXJyYXksIGdvdCAnICsgYXJndW1lbnRzLmxlbmd0aCArICcgYXJndW1lbnRzLiAnICtcbiAgICAgICAgICAgICdBIGNvbW1vbiBtaXN0YWtlIGlzIHRvIHdyaXRlIG9uZU9mKHgsIHksIHopIGluc3RlYWQgb2Ygb25lT2YoW3gsIHksIHpdKS4nXG4gICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwcmludFdhcm5pbmcoJ0ludmFsaWQgYXJndW1lbnQgc3VwcGxpZWQgdG8gb25lT2YsIGV4cGVjdGVkIGFuIGFycmF5LicpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gZW1wdHlGdW5jdGlvblRoYXRSZXR1cm5zTnVsbDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGV4cGVjdGVkVmFsdWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChpcyhwcm9wVmFsdWUsIGV4cGVjdGVkVmFsdWVzW2ldKSkge1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHZhciB2YWx1ZXNTdHJpbmcgPSBKU09OLnN0cmluZ2lmeShleHBlY3RlZFZhbHVlcywgZnVuY3Rpb24gcmVwbGFjZXIoa2V5LCB2YWx1ZSkge1xuICAgICAgICBpZiAoZ2V0UHJvcFR5cGUodmFsdWUpID09PSAnc3ltYm9sJykge1xuICAgICAgICAgIHJldHVybiBTdHJpbmcodmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB2YWx1ZSBgJyArIFN0cmluZyhwcm9wVmFsdWUpICsgJ2AgJyArICgnc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIG9uZSBvZiAnICsgdmFsdWVzU3RyaW5nICsgJy4nKSk7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVPYmplY3RPZlR5cGVDaGVja2VyKHR5cGVDaGVja2VyKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICBpZiAodHlwZW9mIHR5cGVDaGVja2VyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignUHJvcGVydHkgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiBjb21wb25lbnQgYCcgKyBjb21wb25lbnROYW1lICsgJ2AgaGFzIGludmFsaWQgUHJvcFR5cGUgbm90YXRpb24gaW5zaWRlIG9iamVjdE9mLicpO1xuICAgICAgfVxuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICBpZiAocHJvcFR5cGUgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIHByb3BUeXBlICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGFuIG9iamVjdC4nKSk7XG4gICAgICB9XG4gICAgICBmb3IgKHZhciBrZXkgaW4gcHJvcFZhbHVlKSB7XG4gICAgICAgIGlmIChoYXMocHJvcFZhbHVlLCBrZXkpKSB7XG4gICAgICAgICAgdmFyIGVycm9yID0gdHlwZUNoZWNrZXIocHJvcFZhbHVlLCBrZXksIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUgKyAnLicgKyBrZXksIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVVbmlvblR5cGVDaGVja2VyKGFycmF5T2ZUeXBlQ2hlY2tlcnMpIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoYXJyYXlPZlR5cGVDaGVja2VycykpIHtcbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyBwcmludFdhcm5pbmcoJ0ludmFsaWQgYXJndW1lbnQgc3VwcGxpZWQgdG8gb25lT2ZUeXBlLCBleHBlY3RlZCBhbiBpbnN0YW5jZSBvZiBhcnJheS4nKSA6IHZvaWQgMDtcbiAgICAgIHJldHVybiBlbXB0eUZ1bmN0aW9uVGhhdFJldHVybnNOdWxsO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyYXlPZlR5cGVDaGVja2Vycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGNoZWNrZXIgPSBhcnJheU9mVHlwZUNoZWNrZXJzW2ldO1xuICAgICAgaWYgKHR5cGVvZiBjaGVja2VyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHByaW50V2FybmluZyhcbiAgICAgICAgICAnSW52YWxpZCBhcmd1bWVudCBzdXBwbGllZCB0byBvbmVPZlR5cGUuIEV4cGVjdGVkIGFuIGFycmF5IG9mIGNoZWNrIGZ1bmN0aW9ucywgYnV0ICcgK1xuICAgICAgICAgICdyZWNlaXZlZCAnICsgZ2V0UG9zdGZpeEZvclR5cGVXYXJuaW5nKGNoZWNrZXIpICsgJyBhdCBpbmRleCAnICsgaSArICcuJ1xuICAgICAgICApO1xuICAgICAgICByZXR1cm4gZW1wdHlGdW5jdGlvblRoYXRSZXR1cm5zTnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyYXlPZlR5cGVDaGVja2Vycy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgY2hlY2tlciA9IGFycmF5T2ZUeXBlQ2hlY2tlcnNbaV07XG4gICAgICAgIGlmIChjaGVja2VyKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSwgUmVhY3RQcm9wVHlwZXNTZWNyZXQpID09IG51bGwpIHtcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIHN1cHBsaWVkIHRvICcgKyAoJ2AnICsgY29tcG9uZW50TmFtZSArICdgLicpKTtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZU5vZGVDaGVja2VyKCkge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgaWYgKCFpc05vZGUocHJvcHNbcHJvcE5hbWVdKSkge1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIHN1cHBsaWVkIHRvICcgKyAoJ2AnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBhIFJlYWN0Tm9kZS4nKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVNoYXBlVHlwZUNoZWNrZXIoc2hhcGVUeXBlcykge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICBpZiAocHJvcFR5cGUgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSBgJyArIHByb3BUeXBlICsgJ2AgJyArICgnc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGBvYmplY3RgLicpKTtcbiAgICAgIH1cbiAgICAgIGZvciAodmFyIGtleSBpbiBzaGFwZVR5cGVzKSB7XG4gICAgICAgIHZhciBjaGVja2VyID0gc2hhcGVUeXBlc1trZXldO1xuICAgICAgICBpZiAoIWNoZWNrZXIpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgZXJyb3IgPSBjaGVja2VyKHByb3BWYWx1ZSwga2V5LCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lICsgJy4nICsga2V5LCBSZWFjdFByb3BUeXBlc1NlY3JldCk7XG4gICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgIHJldHVybiBlcnJvcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVTdHJpY3RTaGFwZVR5cGVDaGVja2VyKHNoYXBlVHlwZXMpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgaWYgKHByb3BUeXBlICE9PSAnb2JqZWN0Jykge1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgYCcgKyBwcm9wVHlwZSArICdgICcgKyAoJ3N1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBgb2JqZWN0YC4nKSk7XG4gICAgICB9XG4gICAgICAvLyBXZSBuZWVkIHRvIGNoZWNrIGFsbCBrZXlzIGluIGNhc2Ugc29tZSBhcmUgcmVxdWlyZWQgYnV0IG1pc3NpbmcgZnJvbVxuICAgICAgLy8gcHJvcHMuXG4gICAgICB2YXIgYWxsS2V5cyA9IGFzc2lnbih7fSwgcHJvcHNbcHJvcE5hbWVdLCBzaGFwZVR5cGVzKTtcbiAgICAgIGZvciAodmFyIGtleSBpbiBhbGxLZXlzKSB7XG4gICAgICAgIHZhciBjaGVja2VyID0gc2hhcGVUeXBlc1trZXldO1xuICAgICAgICBpZiAoIWNoZWNrZXIpIHtcbiAgICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoXG4gICAgICAgICAgICAnSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Aga2V5IGAnICsga2V5ICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AuJyArXG4gICAgICAgICAgICAnXFxuQmFkIG9iamVjdDogJyArIEpTT04uc3RyaW5naWZ5KHByb3BzW3Byb3BOYW1lXSwgbnVsbCwgJyAgJykgK1xuICAgICAgICAgICAgJ1xcblZhbGlkIGtleXM6ICcgKyAgSlNPTi5zdHJpbmdpZnkoT2JqZWN0LmtleXMoc2hhcGVUeXBlcyksIG51bGwsICcgICcpXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgZXJyb3IgPSBjaGVja2VyKHByb3BWYWx1ZSwga2V5LCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lICsgJy4nICsga2V5LCBSZWFjdFByb3BUeXBlc1NlY3JldCk7XG4gICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgIHJldHVybiBlcnJvcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzTm9kZShwcm9wVmFsdWUpIHtcbiAgICBzd2l0Y2ggKHR5cGVvZiBwcm9wVmFsdWUpIHtcbiAgICAgIGNhc2UgJ251bWJlcic6XG4gICAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgY2FzZSAndW5kZWZpbmVkJzpcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICBjYXNlICdib29sZWFuJzpcbiAgICAgICAgcmV0dXJuICFwcm9wVmFsdWU7XG4gICAgICBjYXNlICdvYmplY3QnOlxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShwcm9wVmFsdWUpKSB7XG4gICAgICAgICAgcmV0dXJuIHByb3BWYWx1ZS5ldmVyeShpc05vZGUpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwcm9wVmFsdWUgPT09IG51bGwgfHwgaXNWYWxpZEVsZW1lbnQocHJvcFZhbHVlKSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGl0ZXJhdG9yRm4gPSBnZXRJdGVyYXRvckZuKHByb3BWYWx1ZSk7XG4gICAgICAgIGlmIChpdGVyYXRvckZuKSB7XG4gICAgICAgICAgdmFyIGl0ZXJhdG9yID0gaXRlcmF0b3JGbi5jYWxsKHByb3BWYWx1ZSk7XG4gICAgICAgICAgdmFyIHN0ZXA7XG4gICAgICAgICAgaWYgKGl0ZXJhdG9yRm4gIT09IHByb3BWYWx1ZS5lbnRyaWVzKSB7XG4gICAgICAgICAgICB3aGlsZSAoIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lKSB7XG4gICAgICAgICAgICAgIGlmICghaXNOb2RlKHN0ZXAudmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIEl0ZXJhdG9yIHdpbGwgcHJvdmlkZSBlbnRyeSBbayx2XSB0dXBsZXMgcmF0aGVyIHRoYW4gdmFsdWVzLlxuICAgICAgICAgICAgd2hpbGUgKCEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZSkge1xuICAgICAgICAgICAgICB2YXIgZW50cnkgPSBzdGVwLnZhbHVlO1xuICAgICAgICAgICAgICBpZiAoZW50cnkpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWlzTm9kZShlbnRyeVsxXSkpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaXNTeW1ib2wocHJvcFR5cGUsIHByb3BWYWx1ZSkge1xuICAgIC8vIE5hdGl2ZSBTeW1ib2wuXG4gICAgaWYgKHByb3BUeXBlID09PSAnc3ltYm9sJykge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgLy8gMTkuNC4zLjUgU3ltYm9sLnByb3RvdHlwZVtAQHRvU3RyaW5nVGFnXSA9PT0gJ1N5bWJvbCdcbiAgICBpZiAocHJvcFZhbHVlWydAQHRvU3RyaW5nVGFnJ10gPT09ICdTeW1ib2wnKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBGYWxsYmFjayBmb3Igbm9uLXNwZWMgY29tcGxpYW50IFN5bWJvbHMgd2hpY2ggYXJlIHBvbHlmaWxsZWQuXG4gICAgaWYgKHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgcHJvcFZhbHVlIGluc3RhbmNlb2YgU3ltYm9sKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvLyBFcXVpdmFsZW50IG9mIGB0eXBlb2ZgIGJ1dCB3aXRoIHNwZWNpYWwgaGFuZGxpbmcgZm9yIGFycmF5IGFuZCByZWdleHAuXG4gIGZ1bmN0aW9uIGdldFByb3BUeXBlKHByb3BWYWx1ZSkge1xuICAgIHZhciBwcm9wVHlwZSA9IHR5cGVvZiBwcm9wVmFsdWU7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkocHJvcFZhbHVlKSkge1xuICAgICAgcmV0dXJuICdhcnJheSc7XG4gICAgfVxuICAgIGlmIChwcm9wVmFsdWUgaW5zdGFuY2VvZiBSZWdFeHApIHtcbiAgICAgIC8vIE9sZCB3ZWJraXRzIChhdCBsZWFzdCB1bnRpbCBBbmRyb2lkIDQuMCkgcmV0dXJuICdmdW5jdGlvbicgcmF0aGVyIHRoYW5cbiAgICAgIC8vICdvYmplY3QnIGZvciB0eXBlb2YgYSBSZWdFeHAuIFdlJ2xsIG5vcm1hbGl6ZSB0aGlzIGhlcmUgc28gdGhhdCAvYmxhL1xuICAgICAgLy8gcGFzc2VzIFByb3BUeXBlcy5vYmplY3QuXG4gICAgICByZXR1cm4gJ29iamVjdCc7XG4gICAgfVxuICAgIGlmIChpc1N5bWJvbChwcm9wVHlwZSwgcHJvcFZhbHVlKSkge1xuICAgICAgcmV0dXJuICdzeW1ib2wnO1xuICAgIH1cbiAgICByZXR1cm4gcHJvcFR5cGU7XG4gIH1cblxuICAvLyBUaGlzIGhhbmRsZXMgbW9yZSB0eXBlcyB0aGFuIGBnZXRQcm9wVHlwZWAuIE9ubHkgdXNlZCBmb3IgZXJyb3IgbWVzc2FnZXMuXG4gIC8vIFNlZSBgY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXJgLlxuICBmdW5jdGlvbiBnZXRQcmVjaXNlVHlwZShwcm9wVmFsdWUpIHtcbiAgICBpZiAodHlwZW9mIHByb3BWYWx1ZSA9PT0gJ3VuZGVmaW5lZCcgfHwgcHJvcFZhbHVlID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gJycgKyBwcm9wVmFsdWU7XG4gICAgfVxuICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgaWYgKHByb3BUeXBlID09PSAnb2JqZWN0Jykge1xuICAgICAgaWYgKHByb3BWYWx1ZSBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgICAgcmV0dXJuICdkYXRlJztcbiAgICAgIH0gZWxzZSBpZiAocHJvcFZhbHVlIGluc3RhbmNlb2YgUmVnRXhwKSB7XG4gICAgICAgIHJldHVybiAncmVnZXhwJztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHByb3BUeXBlO1xuICB9XG5cbiAgLy8gUmV0dXJucyBhIHN0cmluZyB0aGF0IGlzIHBvc3RmaXhlZCB0byBhIHdhcm5pbmcgYWJvdXQgYW4gaW52YWxpZCB0eXBlLlxuICAvLyBGb3IgZXhhbXBsZSwgXCJ1bmRlZmluZWRcIiBvciBcIm9mIHR5cGUgYXJyYXlcIlxuICBmdW5jdGlvbiBnZXRQb3N0Zml4Rm9yVHlwZVdhcm5pbmcodmFsdWUpIHtcbiAgICB2YXIgdHlwZSA9IGdldFByZWNpc2VUeXBlKHZhbHVlKTtcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgJ2FycmF5JzpcbiAgICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICAgIHJldHVybiAnYW4gJyArIHR5cGU7XG4gICAgICBjYXNlICdib29sZWFuJzpcbiAgICAgIGNhc2UgJ2RhdGUnOlxuICAgICAgY2FzZSAncmVnZXhwJzpcbiAgICAgICAgcmV0dXJuICdhICcgKyB0eXBlO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHR5cGU7XG4gICAgfVxuICB9XG5cbiAgLy8gUmV0dXJucyBjbGFzcyBuYW1lIG9mIHRoZSBvYmplY3QsIGlmIGFueS5cbiAgZnVuY3Rpb24gZ2V0Q2xhc3NOYW1lKHByb3BWYWx1ZSkge1xuICAgIGlmICghcHJvcFZhbHVlLmNvbnN0cnVjdG9yIHx8ICFwcm9wVmFsdWUuY29uc3RydWN0b3IubmFtZSkge1xuICAgICAgcmV0dXJuIEFOT05ZTU9VUztcbiAgICB9XG4gICAgcmV0dXJuIHByb3BWYWx1ZS5jb25zdHJ1Y3Rvci5uYW1lO1xuICB9XG5cbiAgUmVhY3RQcm9wVHlwZXMuY2hlY2tQcm9wVHlwZXMgPSBjaGVja1Byb3BUeXBlcztcbiAgUmVhY3RQcm9wVHlwZXMucmVzZXRXYXJuaW5nQ2FjaGUgPSBjaGVja1Byb3BUeXBlcy5yZXNldFdhcm5pbmdDYWNoZTtcbiAgUmVhY3RQcm9wVHlwZXMuUHJvcFR5cGVzID0gUmVhY3RQcm9wVHlwZXM7XG5cbiAgcmV0dXJuIFJlYWN0UHJvcFR5cGVzO1xufTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgUmVhY3RQcm9wVHlwZXNTZWNyZXQgPSByZXF1aXJlKCcuL2xpYi9SZWFjdFByb3BUeXBlc1NlY3JldCcpO1xuXG5mdW5jdGlvbiBlbXB0eUZ1bmN0aW9uKCkge31cbmZ1bmN0aW9uIGVtcHR5RnVuY3Rpb25XaXRoUmVzZXQoKSB7fVxuZW1wdHlGdW5jdGlvbldpdGhSZXNldC5yZXNldFdhcm5pbmdDYWNoZSA9IGVtcHR5RnVuY3Rpb247XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIHNoaW0ocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lLCBzZWNyZXQpIHtcbiAgICBpZiAoc2VjcmV0ID09PSBSZWFjdFByb3BUeXBlc1NlY3JldCkge1xuICAgICAgLy8gSXQgaXMgc3RpbGwgc2FmZSB3aGVuIGNhbGxlZCBmcm9tIFJlYWN0LlxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgZXJyID0gbmV3IEVycm9yKFxuICAgICAgJ0NhbGxpbmcgUHJvcFR5cGVzIHZhbGlkYXRvcnMgZGlyZWN0bHkgaXMgbm90IHN1cHBvcnRlZCBieSB0aGUgYHByb3AtdHlwZXNgIHBhY2thZ2UuICcgK1xuICAgICAgJ1VzZSBQcm9wVHlwZXMuY2hlY2tQcm9wVHlwZXMoKSB0byBjYWxsIHRoZW0uICcgK1xuICAgICAgJ1JlYWQgbW9yZSBhdCBodHRwOi8vZmIubWUvdXNlLWNoZWNrLXByb3AtdHlwZXMnXG4gICAgKTtcbiAgICBlcnIubmFtZSA9ICdJbnZhcmlhbnQgVmlvbGF0aW9uJztcbiAgICB0aHJvdyBlcnI7XG4gIH07XG4gIHNoaW0uaXNSZXF1aXJlZCA9IHNoaW07XG4gIGZ1bmN0aW9uIGdldFNoaW0oKSB7XG4gICAgcmV0dXJuIHNoaW07XG4gIH07XG4gIC8vIEltcG9ydGFudCFcbiAgLy8gS2VlcCB0aGlzIGxpc3QgaW4gc3luYyB3aXRoIHByb2R1Y3Rpb24gdmVyc2lvbiBpbiBgLi9mYWN0b3J5V2l0aFR5cGVDaGVja2Vycy5qc2AuXG4gIHZhciBSZWFjdFByb3BUeXBlcyA9IHtcbiAgICBhcnJheTogc2hpbSxcbiAgICBib29sOiBzaGltLFxuICAgIGZ1bmM6IHNoaW0sXG4gICAgbnVtYmVyOiBzaGltLFxuICAgIG9iamVjdDogc2hpbSxcbiAgICBzdHJpbmc6IHNoaW0sXG4gICAgc3ltYm9sOiBzaGltLFxuXG4gICAgYW55OiBzaGltLFxuICAgIGFycmF5T2Y6IGdldFNoaW0sXG4gICAgZWxlbWVudDogc2hpbSxcbiAgICBlbGVtZW50VHlwZTogc2hpbSxcbiAgICBpbnN0YW5jZU9mOiBnZXRTaGltLFxuICAgIG5vZGU6IHNoaW0sXG4gICAgb2JqZWN0T2Y6IGdldFNoaW0sXG4gICAgb25lT2Y6IGdldFNoaW0sXG4gICAgb25lT2ZUeXBlOiBnZXRTaGltLFxuICAgIHNoYXBlOiBnZXRTaGltLFxuICAgIGV4YWN0OiBnZXRTaGltLFxuXG4gICAgY2hlY2tQcm9wVHlwZXM6IGVtcHR5RnVuY3Rpb25XaXRoUmVzZXQsXG4gICAgcmVzZXRXYXJuaW5nQ2FjaGU6IGVtcHR5RnVuY3Rpb25cbiAgfTtcblxuICBSZWFjdFByb3BUeXBlcy5Qcm9wVHlwZXMgPSBSZWFjdFByb3BUeXBlcztcblxuICByZXR1cm4gUmVhY3RQcm9wVHlwZXM7XG59O1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICB2YXIgUmVhY3RJcyA9IHJlcXVpcmUoJ3JlYWN0LWlzJyk7XG5cbiAgLy8gQnkgZXhwbGljaXRseSB1c2luZyBgcHJvcC10eXBlc2AgeW91IGFyZSBvcHRpbmcgaW50byBuZXcgZGV2ZWxvcG1lbnQgYmVoYXZpb3IuXG4gIC8vIGh0dHA6Ly9mYi5tZS9wcm9wLXR5cGVzLWluLXByb2RcbiAgdmFyIHRocm93T25EaXJlY3RBY2Nlc3MgPSB0cnVlO1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZmFjdG9yeVdpdGhUeXBlQ2hlY2tlcnMnKShSZWFjdElzLmlzRWxlbWVudCwgdGhyb3dPbkRpcmVjdEFjY2Vzcyk7XG59IGVsc2Uge1xuICAvLyBCeSBleHBsaWNpdGx5IHVzaW5nIGBwcm9wLXR5cGVzYCB5b3UgYXJlIG9wdGluZyBpbnRvIG5ldyBwcm9kdWN0aW9uIGJlaGF2aW9yLlxuICAvLyBodHRwOi8vZmIubWUvcHJvcC10eXBlcy1pbi1wcm9kXG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9mYWN0b3J5V2l0aFRocm93aW5nU2hpbXMnKSgpO1xufVxuIiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBkZWZhdWx0OiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gaGFzQ2xhc3M7XG5cbmZ1bmN0aW9uIGhhc0NsYXNzKGVsZW1lbnQsIGNsYXNzTmFtZSkge1xuICBpZiAoZWxlbWVudC5jbGFzc0xpc3QpIHJldHVybiAhIWNsYXNzTmFtZSAmJiBlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhjbGFzc05hbWUpO2Vsc2UgcmV0dXJuIChcIiBcIiArIChlbGVtZW50LmNsYXNzTmFtZS5iYXNlVmFsIHx8IGVsZW1lbnQuY2xhc3NOYW1lKSArIFwiIFwiKS5pbmRleE9mKFwiIFwiICsgY2xhc3NOYW1lICsgXCIgXCIpICE9PSAtMTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzW1wiZGVmYXVsdFwiXTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSBhZGRDbGFzcztcblxudmFyIF9oYXNDbGFzcyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vaGFzQ2xhc3NcIikpO1xuXG5mdW5jdGlvbiBhZGRDbGFzcyhlbGVtZW50LCBjbGFzc05hbWUpIHtcbiAgaWYgKGVsZW1lbnQuY2xhc3NMaXN0KSBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtlbHNlIGlmICghKDAsIF9oYXNDbGFzcy5kZWZhdWx0KShlbGVtZW50LCBjbGFzc05hbWUpKSBpZiAodHlwZW9mIGVsZW1lbnQuY2xhc3NOYW1lID09PSAnc3RyaW5nJykgZWxlbWVudC5jbGFzc05hbWUgPSBlbGVtZW50LmNsYXNzTmFtZSArICcgJyArIGNsYXNzTmFtZTtlbHNlIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdjbGFzcycsIChlbGVtZW50LmNsYXNzTmFtZSAmJiBlbGVtZW50LmNsYXNzTmFtZS5iYXNlVmFsIHx8ICcnKSArICcgJyArIGNsYXNzTmFtZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1tcImRlZmF1bHRcIl07IiwiJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiByZXBsYWNlQ2xhc3NOYW1lKG9yaWdDbGFzcywgY2xhc3NUb1JlbW92ZSkge1xuICByZXR1cm4gb3JpZ0NsYXNzLnJlcGxhY2UobmV3IFJlZ0V4cCgnKF58XFxcXHMpJyArIGNsYXNzVG9SZW1vdmUgKyAnKD86XFxcXHN8JCknLCAnZycpLCAnJDEnKS5yZXBsYWNlKC9cXHMrL2csICcgJykucmVwbGFjZSgvXlxccyp8XFxzKiQvZywgJycpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHJlbW92ZUNsYXNzKGVsZW1lbnQsIGNsYXNzTmFtZSkge1xuICBpZiAoZWxlbWVudC5jbGFzc0xpc3QpIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpO2Vsc2UgaWYgKHR5cGVvZiBlbGVtZW50LmNsYXNzTmFtZSA9PT0gJ3N0cmluZycpIGVsZW1lbnQuY2xhc3NOYW1lID0gcmVwbGFjZUNsYXNzTmFtZShlbGVtZW50LmNsYXNzTmFtZSwgY2xhc3NOYW1lKTtlbHNlIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdjbGFzcycsIHJlcGxhY2VDbGFzc05hbWUoZWxlbWVudC5jbGFzc05hbWUgJiYgZWxlbWVudC5jbGFzc05hbWUuYmFzZVZhbCB8fCAnJywgY2xhc3NOYW1lKSk7XG59OyIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuZnVuY3Rpb24gY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAvLyBDYWxsIHRoaXMuY29uc3RydWN0b3IuZ0RTRlAgdG8gc3VwcG9ydCBzdWItY2xhc3Nlcy5cbiAgdmFyIHN0YXRlID0gdGhpcy5jb25zdHJ1Y3Rvci5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHModGhpcy5wcm9wcywgdGhpcy5zdGF0ZSk7XG4gIGlmIChzdGF0ZSAhPT0gbnVsbCAmJiBzdGF0ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5zZXRTdGF0ZShzdGF0ZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgLy8gQ2FsbCB0aGlzLmNvbnN0cnVjdG9yLmdEU0ZQIHRvIHN1cHBvcnQgc3ViLWNsYXNzZXMuXG4gIC8vIFVzZSB0aGUgc2V0U3RhdGUoKSB1cGRhdGVyIHRvIGVuc3VyZSBzdGF0ZSBpc24ndCBzdGFsZSBpbiBjZXJ0YWluIGVkZ2UgY2FzZXMuXG4gIGZ1bmN0aW9uIHVwZGF0ZXIocHJldlN0YXRlKSB7XG4gICAgdmFyIHN0YXRlID0gdGhpcy5jb25zdHJ1Y3Rvci5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMobmV4dFByb3BzLCBwcmV2U3RhdGUpO1xuICAgIHJldHVybiBzdGF0ZSAhPT0gbnVsbCAmJiBzdGF0ZSAhPT0gdW5kZWZpbmVkID8gc3RhdGUgOiBudWxsO1xuICB9XG4gIC8vIEJpbmRpbmcgXCJ0aGlzXCIgaXMgaW1wb3J0YW50IGZvciBzaGFsbG93IHJlbmRlcmVyIHN1cHBvcnQuXG4gIHRoaXMuc2V0U3RhdGUodXBkYXRlci5iaW5kKHRoaXMpKTtcbn1cblxuZnVuY3Rpb24gY29tcG9uZW50V2lsbFVwZGF0ZShuZXh0UHJvcHMsIG5leHRTdGF0ZSkge1xuICB0cnkge1xuICAgIHZhciBwcmV2UHJvcHMgPSB0aGlzLnByb3BzO1xuICAgIHZhciBwcmV2U3RhdGUgPSB0aGlzLnN0YXRlO1xuICAgIHRoaXMucHJvcHMgPSBuZXh0UHJvcHM7XG4gICAgdGhpcy5zdGF0ZSA9IG5leHRTdGF0ZTtcbiAgICB0aGlzLl9fcmVhY3RJbnRlcm5hbFNuYXBzaG90RmxhZyA9IHRydWU7XG4gICAgdGhpcy5fX3JlYWN0SW50ZXJuYWxTbmFwc2hvdCA9IHRoaXMuZ2V0U25hcHNob3RCZWZvcmVVcGRhdGUoXG4gICAgICBwcmV2UHJvcHMsXG4gICAgICBwcmV2U3RhdGVcbiAgICApO1xuICB9IGZpbmFsbHkge1xuICAgIHRoaXMucHJvcHMgPSBwcmV2UHJvcHM7XG4gICAgdGhpcy5zdGF0ZSA9IHByZXZTdGF0ZTtcbiAgfVxufVxuXG4vLyBSZWFjdCBtYXkgd2FybiBhYm91dCBjV00vY1dSUC9jV1UgbWV0aG9kcyBiZWluZyBkZXByZWNhdGVkLlxuLy8gQWRkIGEgZmxhZyB0byBzdXBwcmVzcyB0aGVzZSB3YXJuaW5ncyBmb3IgdGhpcyBzcGVjaWFsIGNhc2UuXG5jb21wb25lbnRXaWxsTW91bnQuX19zdXBwcmVzc0RlcHJlY2F0aW9uV2FybmluZyA9IHRydWU7XG5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzLl9fc3VwcHJlc3NEZXByZWNhdGlvbldhcm5pbmcgPSB0cnVlO1xuY29tcG9uZW50V2lsbFVwZGF0ZS5fX3N1cHByZXNzRGVwcmVjYXRpb25XYXJuaW5nID0gdHJ1ZTtcblxuZnVuY3Rpb24gcG9seWZpbGwoQ29tcG9uZW50KSB7XG4gIHZhciBwcm90b3R5cGUgPSBDb21wb25lbnQucHJvdG90eXBlO1xuXG4gIGlmICghcHJvdG90eXBlIHx8ICFwcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudCkge1xuICAgIHRocm93IG5ldyBFcnJvcignQ2FuIG9ubHkgcG9seWZpbGwgY2xhc3MgY29tcG9uZW50cycpO1xuICB9XG5cbiAgaWYgKFxuICAgIHR5cGVvZiBDb21wb25lbnQuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzICE9PSAnZnVuY3Rpb24nICYmXG4gICAgdHlwZW9mIHByb3RvdHlwZS5nZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZSAhPT0gJ2Z1bmN0aW9uJ1xuICApIHtcbiAgICByZXR1cm4gQ29tcG9uZW50O1xuICB9XG5cbiAgLy8gSWYgbmV3IGNvbXBvbmVudCBBUElzIGFyZSBkZWZpbmVkLCBcInVuc2FmZVwiIGxpZmVjeWNsZXMgd29uJ3QgYmUgY2FsbGVkLlxuICAvLyBFcnJvciBpZiBhbnkgb2YgdGhlc2UgbGlmZWN5Y2xlcyBhcmUgcHJlc2VudCxcbiAgLy8gQmVjYXVzZSB0aGV5IHdvdWxkIHdvcmsgZGlmZmVyZW50bHkgYmV0d2VlbiBvbGRlciBhbmQgbmV3ZXIgKDE2LjMrKSB2ZXJzaW9ucyBvZiBSZWFjdC5cbiAgdmFyIGZvdW5kV2lsbE1vdW50TmFtZSA9IG51bGw7XG4gIHZhciBmb3VuZFdpbGxSZWNlaXZlUHJvcHNOYW1lID0gbnVsbDtcbiAgdmFyIGZvdW5kV2lsbFVwZGF0ZU5hbWUgPSBudWxsO1xuICBpZiAodHlwZW9mIHByb3RvdHlwZS5jb21wb25lbnRXaWxsTW91bnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBmb3VuZFdpbGxNb3VudE5hbWUgPSAnY29tcG9uZW50V2lsbE1vdW50JztcbiAgfSBlbHNlIGlmICh0eXBlb2YgcHJvdG90eXBlLlVOU0FGRV9jb21wb25lbnRXaWxsTW91bnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBmb3VuZFdpbGxNb3VudE5hbWUgPSAnVU5TQUZFX2NvbXBvbmVudFdpbGxNb3VudCc7XG4gIH1cbiAgaWYgKHR5cGVvZiBwcm90b3R5cGUuY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGZvdW5kV2lsbFJlY2VpdmVQcm9wc05hbWUgPSAnY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyc7XG4gIH0gZWxzZSBpZiAodHlwZW9mIHByb3RvdHlwZS5VTlNBRkVfY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGZvdW5kV2lsbFJlY2VpdmVQcm9wc05hbWUgPSAnVU5TQUZFX2NvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMnO1xuICB9XG4gIGlmICh0eXBlb2YgcHJvdG90eXBlLmNvbXBvbmVudFdpbGxVcGRhdGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICBmb3VuZFdpbGxVcGRhdGVOYW1lID0gJ2NvbXBvbmVudFdpbGxVcGRhdGUnO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBwcm90b3R5cGUuVU5TQUZFX2NvbXBvbmVudFdpbGxVcGRhdGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICBmb3VuZFdpbGxVcGRhdGVOYW1lID0gJ1VOU0FGRV9jb21wb25lbnRXaWxsVXBkYXRlJztcbiAgfVxuICBpZiAoXG4gICAgZm91bmRXaWxsTW91bnROYW1lICE9PSBudWxsIHx8XG4gICAgZm91bmRXaWxsUmVjZWl2ZVByb3BzTmFtZSAhPT0gbnVsbCB8fFxuICAgIGZvdW5kV2lsbFVwZGF0ZU5hbWUgIT09IG51bGxcbiAgKSB7XG4gICAgdmFyIGNvbXBvbmVudE5hbWUgPSBDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9uZW50Lm5hbWU7XG4gICAgdmFyIG5ld0FwaU5hbWUgPVxuICAgICAgdHlwZW9mIENvbXBvbmVudC5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMgPT09ICdmdW5jdGlvbidcbiAgICAgICAgPyAnZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzKCknXG4gICAgICAgIDogJ2dldFNuYXBzaG90QmVmb3JlVXBkYXRlKCknO1xuXG4gICAgdGhyb3cgRXJyb3IoXG4gICAgICAnVW5zYWZlIGxlZ2FjeSBsaWZlY3ljbGVzIHdpbGwgbm90IGJlIGNhbGxlZCBmb3IgY29tcG9uZW50cyB1c2luZyBuZXcgY29tcG9uZW50IEFQSXMuXFxuXFxuJyArXG4gICAgICAgIGNvbXBvbmVudE5hbWUgK1xuICAgICAgICAnIHVzZXMgJyArXG4gICAgICAgIG5ld0FwaU5hbWUgK1xuICAgICAgICAnIGJ1dCBhbHNvIGNvbnRhaW5zIHRoZSBmb2xsb3dpbmcgbGVnYWN5IGxpZmVjeWNsZXM6JyArXG4gICAgICAgIChmb3VuZFdpbGxNb3VudE5hbWUgIT09IG51bGwgPyAnXFxuICAnICsgZm91bmRXaWxsTW91bnROYW1lIDogJycpICtcbiAgICAgICAgKGZvdW5kV2lsbFJlY2VpdmVQcm9wc05hbWUgIT09IG51bGxcbiAgICAgICAgICA/ICdcXG4gICcgKyBmb3VuZFdpbGxSZWNlaXZlUHJvcHNOYW1lXG4gICAgICAgICAgOiAnJykgK1xuICAgICAgICAoZm91bmRXaWxsVXBkYXRlTmFtZSAhPT0gbnVsbCA/ICdcXG4gICcgKyBmb3VuZFdpbGxVcGRhdGVOYW1lIDogJycpICtcbiAgICAgICAgJ1xcblxcblRoZSBhYm92ZSBsaWZlY3ljbGVzIHNob3VsZCBiZSByZW1vdmVkLiBMZWFybiBtb3JlIGFib3V0IHRoaXMgd2FybmluZyBoZXJlOlxcbicgK1xuICAgICAgICAnaHR0cHM6Ly9mYi5tZS9yZWFjdC1hc3luYy1jb21wb25lbnQtbGlmZWN5Y2xlLWhvb2tzJ1xuICAgICk7XG4gIH1cblxuICAvLyBSZWFjdCA8PSAxNi4yIGRvZXMgbm90IHN1cHBvcnQgc3RhdGljIGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcy5cbiAgLy8gQXMgYSB3b3JrYXJvdW5kLCB1c2UgY1dNIGFuZCBjV1JQIHRvIGludm9rZSB0aGUgbmV3IHN0YXRpYyBsaWZlY3ljbGUuXG4gIC8vIE5ld2VyIHZlcnNpb25zIG9mIFJlYWN0IHdpbGwgaWdub3JlIHRoZXNlIGxpZmVjeWNsZXMgaWYgZ0RTRlAgZXhpc3RzLlxuICBpZiAodHlwZW9mIENvbXBvbmVudC5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMgPT09ICdmdW5jdGlvbicpIHtcbiAgICBwcm90b3R5cGUuY29tcG9uZW50V2lsbE1vdW50ID0gY29tcG9uZW50V2lsbE1vdW50O1xuICAgIHByb3RvdHlwZS5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzID0gY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcztcbiAgfVxuXG4gIC8vIFJlYWN0IDw9IDE2LjIgZG9lcyBub3Qgc3VwcG9ydCBnZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZS5cbiAgLy8gQXMgYSB3b3JrYXJvdW5kLCB1c2UgY1dVIHRvIGludm9rZSB0aGUgbmV3IGxpZmVjeWNsZS5cbiAgLy8gTmV3ZXIgdmVyc2lvbnMgb2YgUmVhY3Qgd2lsbCBpZ25vcmUgdGhhdCBsaWZlY3ljbGUgaWYgZ1NCVSBleGlzdHMuXG4gIGlmICh0eXBlb2YgcHJvdG90eXBlLmdldFNuYXBzaG90QmVmb3JlVXBkYXRlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgaWYgKHR5cGVvZiBwcm90b3R5cGUuY29tcG9uZW50RGlkVXBkYXRlICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICdDYW5ub3QgcG9seWZpbGwgZ2V0U25hcHNob3RCZWZvcmVVcGRhdGUoKSBmb3IgY29tcG9uZW50cyB0aGF0IGRvIG5vdCBkZWZpbmUgY29tcG9uZW50RGlkVXBkYXRlKCkgb24gdGhlIHByb3RvdHlwZSdcbiAgICAgICk7XG4gICAgfVxuXG4gICAgcHJvdG90eXBlLmNvbXBvbmVudFdpbGxVcGRhdGUgPSBjb21wb25lbnRXaWxsVXBkYXRlO1xuXG4gICAgdmFyIGNvbXBvbmVudERpZFVwZGF0ZSA9IHByb3RvdHlwZS5jb21wb25lbnREaWRVcGRhdGU7XG5cbiAgICBwcm90b3R5cGUuY29tcG9uZW50RGlkVXBkYXRlID0gZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlUG9seWZpbGwoXG4gICAgICBwcmV2UHJvcHMsXG4gICAgICBwcmV2U3RhdGUsXG4gICAgICBtYXliZVNuYXBzaG90XG4gICAgKSB7XG4gICAgICAvLyAxNi4zKyB3aWxsIG5vdCBleGVjdXRlIG91ciB3aWxsLXVwZGF0ZSBtZXRob2Q7XG4gICAgICAvLyBJdCB3aWxsIHBhc3MgYSBzbmFwc2hvdCB2YWx1ZSB0byBkaWQtdXBkYXRlIHRob3VnaC5cbiAgICAgIC8vIE9sZGVyIHZlcnNpb25zIHdpbGwgcmVxdWlyZSBvdXIgcG9seWZpbGxlZCB3aWxsLXVwZGF0ZSB2YWx1ZS5cbiAgICAgIC8vIFdlIG5lZWQgdG8gaGFuZGxlIGJvdGggY2FzZXMsIGJ1dCBjYW4ndCBqdXN0IGNoZWNrIGZvciB0aGUgcHJlc2VuY2Ugb2YgXCJtYXliZVNuYXBzaG90XCIsXG4gICAgICAvLyBCZWNhdXNlIGZvciA8PSAxNS54IHZlcnNpb25zIHRoaXMgbWlnaHQgYmUgYSBcInByZXZDb250ZXh0XCIgb2JqZWN0LlxuICAgICAgLy8gV2UgYWxzbyBjYW4ndCBqdXN0IGNoZWNrIFwiX19yZWFjdEludGVybmFsU25hcHNob3RcIixcbiAgICAgIC8vIEJlY2F1c2UgZ2V0LXNuYXBzaG90IG1pZ2h0IHJldHVybiBhIGZhbHN5IHZhbHVlLlxuICAgICAgLy8gU28gY2hlY2sgZm9yIHRoZSBleHBsaWNpdCBfX3JlYWN0SW50ZXJuYWxTbmFwc2hvdEZsYWcgZmxhZyB0byBkZXRlcm1pbmUgYmVoYXZpb3IuXG4gICAgICB2YXIgc25hcHNob3QgPSB0aGlzLl9fcmVhY3RJbnRlcm5hbFNuYXBzaG90RmxhZ1xuICAgICAgICA/IHRoaXMuX19yZWFjdEludGVybmFsU25hcHNob3RcbiAgICAgICAgOiBtYXliZVNuYXBzaG90O1xuXG4gICAgICBjb21wb25lbnREaWRVcGRhdGUuY2FsbCh0aGlzLCBwcmV2UHJvcHMsIHByZXZTdGF0ZSwgc25hcHNob3QpO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gQ29tcG9uZW50O1xufVxuXG5leHBvcnQgeyBwb2x5ZmlsbCB9O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmNsYXNzTmFtZXNTaGFwZSA9IGV4cG9ydHMudGltZW91dHNTaGFwZSA9IHZvaWQgMDtcblxudmFyIF9wcm9wVHlwZXMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIHRpbWVvdXRzU2hhcGUgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gX3Byb3BUeXBlcy5kZWZhdWx0Lm9uZU9mVHlwZShbX3Byb3BUeXBlcy5kZWZhdWx0Lm51bWJlciwgX3Byb3BUeXBlcy5kZWZhdWx0LnNoYXBlKHtcbiAgZW50ZXI6IF9wcm9wVHlwZXMuZGVmYXVsdC5udW1iZXIsXG4gIGV4aXQ6IF9wcm9wVHlwZXMuZGVmYXVsdC5udW1iZXJcbn0pLmlzUmVxdWlyZWRdKSA6IG51bGw7XG5leHBvcnRzLnRpbWVvdXRzU2hhcGUgPSB0aW1lb3V0c1NoYXBlO1xudmFyIGNsYXNzTmFtZXNTaGFwZSA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyBfcHJvcFR5cGVzLmRlZmF1bHQub25lT2ZUeXBlKFtfcHJvcFR5cGVzLmRlZmF1bHQuc3RyaW5nLCBfcHJvcFR5cGVzLmRlZmF1bHQuc2hhcGUoe1xuICBlbnRlcjogX3Byb3BUeXBlcy5kZWZhdWx0LnN0cmluZyxcbiAgZXhpdDogX3Byb3BUeXBlcy5kZWZhdWx0LnN0cmluZyxcbiAgYWN0aXZlOiBfcHJvcFR5cGVzLmRlZmF1bHQuc3RyaW5nXG59KSwgX3Byb3BUeXBlcy5kZWZhdWx0LnNoYXBlKHtcbiAgZW50ZXI6IF9wcm9wVHlwZXMuZGVmYXVsdC5zdHJpbmcsXG4gIGVudGVyRG9uZTogX3Byb3BUeXBlcy5kZWZhdWx0LnN0cmluZyxcbiAgZW50ZXJBY3RpdmU6IF9wcm9wVHlwZXMuZGVmYXVsdC5zdHJpbmcsXG4gIGV4aXQ6IF9wcm9wVHlwZXMuZGVmYXVsdC5zdHJpbmcsXG4gIGV4aXREb25lOiBfcHJvcFR5cGVzLmRlZmF1bHQuc3RyaW5nLFxuICBleGl0QWN0aXZlOiBfcHJvcFR5cGVzLmRlZmF1bHQuc3RyaW5nXG59KV0pIDogbnVsbDtcbmV4cG9ydHMuY2xhc3NOYW1lc1NoYXBlID0gY2xhc3NOYW1lc1NoYXBlOyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gZXhwb3J0cy5FWElUSU5HID0gZXhwb3J0cy5FTlRFUkVEID0gZXhwb3J0cy5FTlRFUklORyA9IGV4cG9ydHMuRVhJVEVEID0gZXhwb3J0cy5VTk1PVU5URUQgPSB2b2lkIDA7XG5cbnZhciBQcm9wVHlwZXMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicHJvcC10eXBlc1wiKSk7XG5cbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbnZhciBfcmVhY3REb20gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdC1kb21cIikpO1xuXG52YXIgX3JlYWN0TGlmZWN5Y2xlc0NvbXBhdCA9IHJlcXVpcmUoXCJyZWFjdC1saWZlY3ljbGVzLWNvbXBhdFwiKTtcblxudmFyIF9Qcm9wVHlwZXMgPSByZXF1aXJlKFwiLi91dGlscy9Qcm9wVHlwZXNcIik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikgeyBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7IHJldHVybiBvYmo7IH0gZWxzZSB7IHZhciBuZXdPYmogPSB7fTsgaWYgKG9iaiAhPSBudWxsKSB7IGZvciAodmFyIGtleSBpbiBvYmopIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHsgdmFyIGRlc2MgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDoge307IGlmIChkZXNjLmdldCB8fCBkZXNjLnNldCkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpOyB9IGVsc2UgeyBuZXdPYmpba2V5XSA9IG9ialtrZXldOyB9IH0gfSB9IG5ld09iai5kZWZhdWx0ID0gb2JqOyByZXR1cm4gbmV3T2JqOyB9IH1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCkgeyBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTsgdmFyIHRhcmdldCA9IHt9OyB2YXIgc291cmNlS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7IHZhciBrZXksIGk7IGZvciAoaSA9IDA7IGkgPCBzb3VyY2VLZXlzLmxlbmd0aDsgaSsrKSB7IGtleSA9IHNvdXJjZUtleXNbaV07IGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHNMb29zZShzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MucHJvdG90eXBlKTsgc3ViQ2xhc3MucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gc3ViQ2xhc3M7IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIFVOTU9VTlRFRCA9ICd1bm1vdW50ZWQnO1xuZXhwb3J0cy5VTk1PVU5URUQgPSBVTk1PVU5URUQ7XG52YXIgRVhJVEVEID0gJ2V4aXRlZCc7XG5leHBvcnRzLkVYSVRFRCA9IEVYSVRFRDtcbnZhciBFTlRFUklORyA9ICdlbnRlcmluZyc7XG5leHBvcnRzLkVOVEVSSU5HID0gRU5URVJJTkc7XG52YXIgRU5URVJFRCA9ICdlbnRlcmVkJztcbmV4cG9ydHMuRU5URVJFRCA9IEVOVEVSRUQ7XG52YXIgRVhJVElORyA9ICdleGl0aW5nJztcbi8qKlxuICogVGhlIFRyYW5zaXRpb24gY29tcG9uZW50IGxldHMgeW91IGRlc2NyaWJlIGEgdHJhbnNpdGlvbiBmcm9tIG9uZSBjb21wb25lbnRcbiAqIHN0YXRlIHRvIGFub3RoZXIgX292ZXIgdGltZV8gd2l0aCBhIHNpbXBsZSBkZWNsYXJhdGl2ZSBBUEkuIE1vc3QgY29tbW9ubHlcbiAqIGl0J3MgdXNlZCB0byBhbmltYXRlIHRoZSBtb3VudGluZyBhbmQgdW5tb3VudGluZyBvZiBhIGNvbXBvbmVudCwgYnV0IGNhbiBhbHNvXG4gKiBiZSB1c2VkIHRvIGRlc2NyaWJlIGluLXBsYWNlIHRyYW5zaXRpb24gc3RhdGVzIGFzIHdlbGwuXG4gKlxuICogQnkgZGVmYXVsdCB0aGUgYFRyYW5zaXRpb25gIGNvbXBvbmVudCBkb2VzIG5vdCBhbHRlciB0aGUgYmVoYXZpb3Igb2YgdGhlXG4gKiBjb21wb25lbnQgaXQgcmVuZGVycywgaXQgb25seSB0cmFja3MgXCJlbnRlclwiIGFuZCBcImV4aXRcIiBzdGF0ZXMgZm9yIHRoZSBjb21wb25lbnRzLlxuICogSXQncyB1cCB0byB5b3UgdG8gZ2l2ZSBtZWFuaW5nIGFuZCBlZmZlY3QgdG8gdGhvc2Ugc3RhdGVzLiBGb3IgZXhhbXBsZSB3ZSBjYW5cbiAqIGFkZCBzdHlsZXMgdG8gYSBjb21wb25lbnQgd2hlbiBpdCBlbnRlcnMgb3IgZXhpdHM6XG4gKlxuICogYGBganN4XG4gKiBpbXBvcnQgVHJhbnNpdGlvbiBmcm9tICdyZWFjdC10cmFuc2l0aW9uLWdyb3VwL1RyYW5zaXRpb24nO1xuICpcbiAqIGNvbnN0IGR1cmF0aW9uID0gMzAwO1xuICpcbiAqIGNvbnN0IGRlZmF1bHRTdHlsZSA9IHtcbiAqICAgdHJhbnNpdGlvbjogYG9wYWNpdHkgJHtkdXJhdGlvbn1tcyBlYXNlLWluLW91dGAsXG4gKiAgIG9wYWNpdHk6IDAsXG4gKiB9XG4gKlxuICogY29uc3QgdHJhbnNpdGlvblN0eWxlcyA9IHtcbiAqICAgZW50ZXJpbmc6IHsgb3BhY2l0eTogMCB9LFxuICogICBlbnRlcmVkOiAgeyBvcGFjaXR5OiAxIH0sXG4gKiB9O1xuICpcbiAqIGNvbnN0IEZhZGUgPSAoeyBpbjogaW5Qcm9wIH0pID0+IChcbiAqICAgPFRyYW5zaXRpb24gaW49e2luUHJvcH0gdGltZW91dD17ZHVyYXRpb259PlxuICogICAgIHsoc3RhdGUpID0+IChcbiAqICAgICAgIDxkaXYgc3R5bGU9e3tcbiAqICAgICAgICAgLi4uZGVmYXVsdFN0eWxlLFxuICogICAgICAgICAuLi50cmFuc2l0aW9uU3R5bGVzW3N0YXRlXVxuICogICAgICAgfX0+XG4gKiAgICAgICAgIEknbSBhIGZhZGUgVHJhbnNpdGlvbiFcbiAqICAgICAgIDwvZGl2PlxuICogICAgICl9XG4gKiAgIDwvVHJhbnNpdGlvbj5cbiAqICk7XG4gKiBgYGBcbiAqXG4gKiBBcyBub3RlZCB0aGUgYFRyYW5zaXRpb25gIGNvbXBvbmVudCBkb2Vzbid0IF9kb18gYW55dGhpbmcgYnkgaXRzZWxmIHRvIGl0cyBjaGlsZCBjb21wb25lbnQuXG4gKiBXaGF0IGl0IGRvZXMgZG8gaXMgdHJhY2sgdHJhbnNpdGlvbiBzdGF0ZXMgb3ZlciB0aW1lIHNvIHlvdSBjYW4gdXBkYXRlIHRoZVxuICogY29tcG9uZW50IChzdWNoIGFzIGJ5IGFkZGluZyBzdHlsZXMgb3IgY2xhc3Nlcykgd2hlbiBpdCBjaGFuZ2VzIHN0YXRlcy5cbiAqXG4gKiBUaGVyZSBhcmUgNCBtYWluIHN0YXRlcyBhIFRyYW5zaXRpb24gY2FuIGJlIGluOlxuICogIC0gYCdlbnRlcmluZydgXG4gKiAgLSBgJ2VudGVyZWQnYFxuICogIC0gYCdleGl0aW5nJ2BcbiAqICAtIGAnZXhpdGVkJ2BcbiAqXG4gKiBUcmFuc2l0aW9uIHN0YXRlIGlzIHRvZ2dsZWQgdmlhIHRoZSBgaW5gIHByb3AuIFdoZW4gYHRydWVgIHRoZSBjb21wb25lbnQgYmVnaW5zIHRoZVxuICogXCJFbnRlclwiIHN0YWdlLiBEdXJpbmcgdGhpcyBzdGFnZSwgdGhlIGNvbXBvbmVudCB3aWxsIHNoaWZ0IGZyb20gaXRzIGN1cnJlbnQgdHJhbnNpdGlvbiBzdGF0ZSxcbiAqIHRvIGAnZW50ZXJpbmcnYCBmb3IgdGhlIGR1cmF0aW9uIG9mIHRoZSB0cmFuc2l0aW9uIGFuZCB0aGVuIHRvIHRoZSBgJ2VudGVyZWQnYCBzdGFnZSBvbmNlXG4gKiBpdCdzIGNvbXBsZXRlLiBMZXQncyB0YWtlIHRoZSBmb2xsb3dpbmcgZXhhbXBsZTpcbiAqXG4gKiBgYGBqc3hcbiAqIHN0YXRlID0geyBpbjogZmFsc2UgfTtcbiAqXG4gKiB0b2dnbGVFbnRlclN0YXRlID0gKCkgPT4ge1xuICogICB0aGlzLnNldFN0YXRlKHsgaW46IHRydWUgfSk7XG4gKiB9XG4gKlxuICogcmVuZGVyKCkge1xuICogICByZXR1cm4gKFxuICogICAgIDxkaXY+XG4gKiAgICAgICA8VHJhbnNpdGlvbiBpbj17dGhpcy5zdGF0ZS5pbn0gdGltZW91dD17NTAwfSAvPlxuICogICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLnRvZ2dsZUVudGVyU3RhdGV9PkNsaWNrIHRvIEVudGVyPC9idXR0b24+XG4gKiAgICAgPC9kaXY+XG4gKiAgICk7XG4gKiB9XG4gKiBgYGBcbiAqXG4gKiBXaGVuIHRoZSBidXR0b24gaXMgY2xpY2tlZCB0aGUgY29tcG9uZW50IHdpbGwgc2hpZnQgdG8gdGhlIGAnZW50ZXJpbmcnYCBzdGF0ZSBhbmRcbiAqIHN0YXkgdGhlcmUgZm9yIDUwMG1zICh0aGUgdmFsdWUgb2YgYHRpbWVvdXRgKSBiZWZvcmUgaXQgZmluYWxseSBzd2l0Y2hlcyB0byBgJ2VudGVyZWQnYC5cbiAqXG4gKiBXaGVuIGBpbmAgaXMgYGZhbHNlYCB0aGUgc2FtZSB0aGluZyBoYXBwZW5zIGV4Y2VwdCB0aGUgc3RhdGUgbW92ZXMgZnJvbSBgJ2V4aXRpbmcnYCB0byBgJ2V4aXRlZCdgLlxuICpcbiAqICMjIFRpbWluZ1xuICpcbiAqIFRpbWluZyBpcyBvZnRlbiB0aGUgdHJpY2tpZXN0IHBhcnQgb2YgYW5pbWF0aW9uLCBtaXN0YWtlcyBjYW4gcmVzdWx0IGluIHNsaWdodCBkZWxheXNcbiAqIHRoYXQgYXJlIGhhcmQgdG8gcGluIGRvd24uIEEgY29tbW9uIGV4YW1wbGUgaXMgd2hlbiB5b3Ugd2FudCB0byBhZGQgYW4gZXhpdCB0cmFuc2l0aW9uLFxuICogeW91IHNob3VsZCBzZXQgdGhlIGRlc2lyZWQgZmluYWwgc3R5bGVzIHdoZW4gdGhlIHN0YXRlIGlzIGAnZXhpdGluZydgLiBUaGF0J3Mgd2hlbiB0aGVcbiAqIHRyYW5zaXRpb24gdG8gdGhvc2Ugc3R5bGVzIHdpbGwgc3RhcnQgYW5kLCBpZiB5b3UgbWF0Y2hlZCB0aGUgYHRpbWVvdXRgIHByb3Agd2l0aCB0aGVcbiAqIENTUyBUcmFuc2l0aW9uIGR1cmF0aW9uLCBpdCB3aWxsIGVuZCBleGFjdGx5IHdoZW4gdGhlIHN0YXRlIGNoYW5nZXMgdG8gYCdleGl0ZWQnYC5cbiAqXG4gKiA+ICoqTm90ZSoqOiBGb3Igc2ltcGxlciB0cmFuc2l0aW9ucyB0aGUgYFRyYW5zaXRpb25gIGNvbXBvbmVudCBtaWdodCBiZSBlbm91Z2gsIGJ1dFxuICogPiB0YWtlIGludG8gYWNjb3VudCB0aGF0IGl0J3MgcGxhdGZvcm0tYWdub3N0aWMsIHdoaWxlIHRoZSBgQ1NTVHJhbnNpdGlvbmAgY29tcG9uZW50XG4gKiA+IFtmb3JjZXMgcmVmbG93c10oaHR0cHM6Ly9naXRodWIuY29tL3JlYWN0anMvcmVhY3QtdHJhbnNpdGlvbi1ncm91cC9ibG9iLzUwMDczMDNlNzI5YTc0YmU2NmEyMWMzZTIyMDVlNDkxNjgyMTUyNGIvc3JjL0NTU1RyYW5zaXRpb24uanMjTDIwOC1MMjE1KVxuICogPiBpbiBvcmRlciB0byBtYWtlIG1vcmUgY29tcGxleCB0cmFuc2l0aW9ucyBtb3JlIHByZWRpY3RhYmxlLiBGb3IgZXhhbXBsZSwgZXZlbiB0aG91Z2hcbiAqID4gY2xhc3NlcyBgZXhhbXBsZS1lbnRlcmAgYW5kIGBleGFtcGxlLWVudGVyLWFjdGl2ZWAgYXJlIGFwcGxpZWQgaW1tZWRpYXRlbHkgb25lIGFmdGVyXG4gKiA+IGFub3RoZXIsIHlvdSBjYW4gc3RpbGwgdHJhbnNpdGlvbiBmcm9tIG9uZSB0byB0aGUgb3RoZXIgYmVjYXVzZSBvZiB0aGUgZm9yY2VkIHJlZmxvd1xuICogPiAocmVhZCBbdGhpcyBpc3N1ZV0oaHR0cHM6Ly9naXRodWIuY29tL3JlYWN0anMvcmVhY3QtdHJhbnNpdGlvbi1ncm91cC9pc3N1ZXMvMTU5I2lzc3VlY29tbWVudC0zMjI3NjExNzEpXG4gKiA+IGZvciBtb3JlIGluZm8pLiBUYWtlIHRoaXMgaW50byBhY2NvdW50IHdoZW4gY2hvb3NpbmcgYmV0d2VlbiBgVHJhbnNpdGlvbmAgYW5kXG4gKiA+IGBDU1NUcmFuc2l0aW9uYC5cbiAqL1xuXG5leHBvcnRzLkVYSVRJTkcgPSBFWElUSU5HO1xuXG52YXIgVHJhbnNpdGlvbiA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHNMb29zZShUcmFuc2l0aW9uLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBUcmFuc2l0aW9uKHByb3BzLCBjb250ZXh0KSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX3RoaXMgPSBfUmVhY3QkQ29tcG9uZW50LmNhbGwodGhpcywgcHJvcHMsIGNvbnRleHQpIHx8IHRoaXM7XG4gICAgdmFyIHBhcmVudEdyb3VwID0gY29udGV4dC50cmFuc2l0aW9uR3JvdXA7IC8vIEluIHRoZSBjb250ZXh0IG9mIGEgVHJhbnNpdGlvbkdyb3VwIGFsbCBlbnRlcnMgYXJlIHJlYWxseSBhcHBlYXJzXG5cbiAgICB2YXIgYXBwZWFyID0gcGFyZW50R3JvdXAgJiYgIXBhcmVudEdyb3VwLmlzTW91bnRpbmcgPyBwcm9wcy5lbnRlciA6IHByb3BzLmFwcGVhcjtcbiAgICB2YXIgaW5pdGlhbFN0YXR1cztcbiAgICBfdGhpcy5hcHBlYXJTdGF0dXMgPSBudWxsO1xuXG4gICAgaWYgKHByb3BzLmluKSB7XG4gICAgICBpZiAoYXBwZWFyKSB7XG4gICAgICAgIGluaXRpYWxTdGF0dXMgPSBFWElURUQ7XG4gICAgICAgIF90aGlzLmFwcGVhclN0YXR1cyA9IEVOVEVSSU5HO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaW5pdGlhbFN0YXR1cyA9IEVOVEVSRUQ7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChwcm9wcy51bm1vdW50T25FeGl0IHx8IHByb3BzLm1vdW50T25FbnRlcikge1xuICAgICAgICBpbml0aWFsU3RhdHVzID0gVU5NT1VOVEVEO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaW5pdGlhbFN0YXR1cyA9IEVYSVRFRDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHN0YXR1czogaW5pdGlhbFN0YXR1c1xuICAgIH07XG4gICAgX3RoaXMubmV4dENhbGxiYWNrID0gbnVsbDtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gVHJhbnNpdGlvbi5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLmdldENoaWxkQ29udGV4dCA9IGZ1bmN0aW9uIGdldENoaWxkQ29udGV4dCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdHJhbnNpdGlvbkdyb3VwOiBudWxsIC8vIGFsbG93cyBmb3IgbmVzdGVkIFRyYW5zaXRpb25zXG5cbiAgICB9O1xuICB9O1xuXG4gIFRyYW5zaXRpb24uZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzID0gZnVuY3Rpb24gZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzKF9yZWYsIHByZXZTdGF0ZSkge1xuICAgIHZhciBuZXh0SW4gPSBfcmVmLmluO1xuXG4gICAgaWYgKG5leHRJbiAmJiBwcmV2U3RhdGUuc3RhdHVzID09PSBVTk1PVU5URUQpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN0YXR1czogRVhJVEVEXG4gICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9OyAvLyBnZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZShwcmV2UHJvcHMpIHtcbiAgLy8gICBsZXQgbmV4dFN0YXR1cyA9IG51bGxcbiAgLy8gICBpZiAocHJldlByb3BzICE9PSB0aGlzLnByb3BzKSB7XG4gIC8vICAgICBjb25zdCB7IHN0YXR1cyB9ID0gdGhpcy5zdGF0ZVxuICAvLyAgICAgaWYgKHRoaXMucHJvcHMuaW4pIHtcbiAgLy8gICAgICAgaWYgKHN0YXR1cyAhPT0gRU5URVJJTkcgJiYgc3RhdHVzICE9PSBFTlRFUkVEKSB7XG4gIC8vICAgICAgICAgbmV4dFN0YXR1cyA9IEVOVEVSSU5HXG4gIC8vICAgICAgIH1cbiAgLy8gICAgIH0gZWxzZSB7XG4gIC8vICAgICAgIGlmIChzdGF0dXMgPT09IEVOVEVSSU5HIHx8IHN0YXR1cyA9PT0gRU5URVJFRCkge1xuICAvLyAgICAgICAgIG5leHRTdGF0dXMgPSBFWElUSU5HXG4gIC8vICAgICAgIH1cbiAgLy8gICAgIH1cbiAgLy8gICB9XG4gIC8vICAgcmV0dXJuIHsgbmV4dFN0YXR1cyB9XG4gIC8vIH1cblxuXG4gIF9wcm90by5jb21wb25lbnREaWRNb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMudXBkYXRlU3RhdHVzKHRydWUsIHRoaXMuYXBwZWFyU3RhdHVzKTtcbiAgfTtcblxuICBfcHJvdG8uY29tcG9uZW50RGlkVXBkYXRlID0gZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcykge1xuICAgIHZhciBuZXh0U3RhdHVzID0gbnVsbDtcblxuICAgIGlmIChwcmV2UHJvcHMgIT09IHRoaXMucHJvcHMpIHtcbiAgICAgIHZhciBzdGF0dXMgPSB0aGlzLnN0YXRlLnN0YXR1cztcblxuICAgICAgaWYgKHRoaXMucHJvcHMuaW4pIHtcbiAgICAgICAgaWYgKHN0YXR1cyAhPT0gRU5URVJJTkcgJiYgc3RhdHVzICE9PSBFTlRFUkVEKSB7XG4gICAgICAgICAgbmV4dFN0YXR1cyA9IEVOVEVSSU5HO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoc3RhdHVzID09PSBFTlRFUklORyB8fCBzdGF0dXMgPT09IEVOVEVSRUQpIHtcbiAgICAgICAgICBuZXh0U3RhdHVzID0gRVhJVElORztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMudXBkYXRlU3RhdHVzKGZhbHNlLCBuZXh0U3RhdHVzKTtcbiAgfTtcblxuICBfcHJvdG8uY29tcG9uZW50V2lsbFVubW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLmNhbmNlbE5leHRDYWxsYmFjaygpO1xuICB9O1xuXG4gIF9wcm90by5nZXRUaW1lb3V0cyA9IGZ1bmN0aW9uIGdldFRpbWVvdXRzKCkge1xuICAgIHZhciB0aW1lb3V0ID0gdGhpcy5wcm9wcy50aW1lb3V0O1xuICAgIHZhciBleGl0LCBlbnRlciwgYXBwZWFyO1xuICAgIGV4aXQgPSBlbnRlciA9IGFwcGVhciA9IHRpbWVvdXQ7XG5cbiAgICBpZiAodGltZW91dCAhPSBudWxsICYmIHR5cGVvZiB0aW1lb3V0ICE9PSAnbnVtYmVyJykge1xuICAgICAgZXhpdCA9IHRpbWVvdXQuZXhpdDtcbiAgICAgIGVudGVyID0gdGltZW91dC5lbnRlcjtcbiAgICAgIGFwcGVhciA9IHRpbWVvdXQuYXBwZWFyO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBleGl0OiBleGl0LFxuICAgICAgZW50ZXI6IGVudGVyLFxuICAgICAgYXBwZWFyOiBhcHBlYXJcbiAgICB9O1xuICB9O1xuXG4gIF9wcm90by51cGRhdGVTdGF0dXMgPSBmdW5jdGlvbiB1cGRhdGVTdGF0dXMobW91bnRpbmcsIG5leHRTdGF0dXMpIHtcbiAgICBpZiAobW91bnRpbmcgPT09IHZvaWQgMCkge1xuICAgICAgbW91bnRpbmcgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAobmV4dFN0YXR1cyAhPT0gbnVsbCkge1xuICAgICAgLy8gbmV4dFN0YXR1cyB3aWxsIGFsd2F5cyBiZSBFTlRFUklORyBvciBFWElUSU5HLlxuICAgICAgdGhpcy5jYW5jZWxOZXh0Q2FsbGJhY2soKTtcblxuICAgICAgdmFyIG5vZGUgPSBfcmVhY3REb20uZGVmYXVsdC5maW5kRE9NTm9kZSh0aGlzKTtcblxuICAgICAgaWYgKG5leHRTdGF0dXMgPT09IEVOVEVSSU5HKSB7XG4gICAgICAgIHRoaXMucGVyZm9ybUVudGVyKG5vZGUsIG1vdW50aW5nKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucGVyZm9ybUV4aXQobm9kZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0aGlzLnByb3BzLnVubW91bnRPbkV4aXQgJiYgdGhpcy5zdGF0ZS5zdGF0dXMgPT09IEVYSVRFRCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHN0YXR1czogVU5NT1VOVEVEXG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLnBlcmZvcm1FbnRlciA9IGZ1bmN0aW9uIHBlcmZvcm1FbnRlcihub2RlLCBtb3VudGluZykge1xuICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgdmFyIGVudGVyID0gdGhpcy5wcm9wcy5lbnRlcjtcbiAgICB2YXIgYXBwZWFyaW5nID0gdGhpcy5jb250ZXh0LnRyYW5zaXRpb25Hcm91cCA/IHRoaXMuY29udGV4dC50cmFuc2l0aW9uR3JvdXAuaXNNb3VudGluZyA6IG1vdW50aW5nO1xuICAgIHZhciB0aW1lb3V0cyA9IHRoaXMuZ2V0VGltZW91dHMoKTsgLy8gbm8gZW50ZXIgYW5pbWF0aW9uIHNraXAgcmlnaHQgdG8gRU5URVJFRFxuICAgIC8vIGlmIHdlIGFyZSBtb3VudGluZyBhbmQgcnVubmluZyB0aGlzIGl0IG1lYW5zIGFwcGVhciBfbXVzdF8gYmUgc2V0XG5cbiAgICBpZiAoIW1vdW50aW5nICYmICFlbnRlcikge1xuICAgICAgdGhpcy5zYWZlU2V0U3RhdGUoe1xuICAgICAgICBzdGF0dXM6IEVOVEVSRURcbiAgICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgX3RoaXMyLnByb3BzLm9uRW50ZXJlZChub2RlKTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMucHJvcHMub25FbnRlcihub2RlLCBhcHBlYXJpbmcpO1xuICAgIHRoaXMuc2FmZVNldFN0YXRlKHtcbiAgICAgIHN0YXR1czogRU5URVJJTkdcbiAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICBfdGhpczIucHJvcHMub25FbnRlcmluZyhub2RlLCBhcHBlYXJpbmcpOyAvLyBGSVhNRTogYXBwZWFyIHRpbWVvdXQ/XG5cblxuICAgICAgX3RoaXMyLm9uVHJhbnNpdGlvbkVuZChub2RlLCB0aW1lb3V0cy5lbnRlciwgZnVuY3Rpb24gKCkge1xuICAgICAgICBfdGhpczIuc2FmZVNldFN0YXRlKHtcbiAgICAgICAgICBzdGF0dXM6IEVOVEVSRURcbiAgICAgICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIF90aGlzMi5wcm9wcy5vbkVudGVyZWQobm9kZSwgYXBwZWFyaW5nKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICBfcHJvdG8ucGVyZm9ybUV4aXQgPSBmdW5jdGlvbiBwZXJmb3JtRXhpdChub2RlKSB7XG4gICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICB2YXIgZXhpdCA9IHRoaXMucHJvcHMuZXhpdDtcbiAgICB2YXIgdGltZW91dHMgPSB0aGlzLmdldFRpbWVvdXRzKCk7IC8vIG5vIGV4aXQgYW5pbWF0aW9uIHNraXAgcmlnaHQgdG8gRVhJVEVEXG5cbiAgICBpZiAoIWV4aXQpIHtcbiAgICAgIHRoaXMuc2FmZVNldFN0YXRlKHtcbiAgICAgICAgc3RhdHVzOiBFWElURURcbiAgICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgX3RoaXMzLnByb3BzLm9uRXhpdGVkKG5vZGUpO1xuICAgICAgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5wcm9wcy5vbkV4aXQobm9kZSk7XG4gICAgdGhpcy5zYWZlU2V0U3RhdGUoe1xuICAgICAgc3RhdHVzOiBFWElUSU5HXG4gICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgX3RoaXMzLnByb3BzLm9uRXhpdGluZyhub2RlKTtcblxuICAgICAgX3RoaXMzLm9uVHJhbnNpdGlvbkVuZChub2RlLCB0aW1lb3V0cy5leGl0LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIF90aGlzMy5zYWZlU2V0U3RhdGUoe1xuICAgICAgICAgIHN0YXR1czogRVhJVEVEXG4gICAgICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBfdGhpczMucHJvcHMub25FeGl0ZWQobm9kZSk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgX3Byb3RvLmNhbmNlbE5leHRDYWxsYmFjayA9IGZ1bmN0aW9uIGNhbmNlbE5leHRDYWxsYmFjaygpIHtcbiAgICBpZiAodGhpcy5uZXh0Q2FsbGJhY2sgIT09IG51bGwpIHtcbiAgICAgIHRoaXMubmV4dENhbGxiYWNrLmNhbmNlbCgpO1xuICAgICAgdGhpcy5uZXh0Q2FsbGJhY2sgPSBudWxsO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8uc2FmZVNldFN0YXRlID0gZnVuY3Rpb24gc2FmZVNldFN0YXRlKG5leHRTdGF0ZSwgY2FsbGJhY2spIHtcbiAgICAvLyBUaGlzIHNob3VsZG4ndCBiZSBuZWNlc3NhcnksIGJ1dCB0aGVyZSBhcmUgd2VpcmQgcmFjZSBjb25kaXRpb25zIHdpdGhcbiAgICAvLyBzZXRTdGF0ZSBjYWxsYmFja3MgYW5kIHVubW91bnRpbmcgaW4gdGVzdGluZywgc28gYWx3YXlzIG1ha2Ugc3VyZSB0aGF0XG4gICAgLy8gd2UgY2FuIGNhbmNlbCBhbnkgcGVuZGluZyBzZXRTdGF0ZSBjYWxsYmFja3MgYWZ0ZXIgd2UgdW5tb3VudC5cbiAgICBjYWxsYmFjayA9IHRoaXMuc2V0TmV4dENhbGxiYWNrKGNhbGxiYWNrKTtcbiAgICB0aGlzLnNldFN0YXRlKG5leHRTdGF0ZSwgY2FsbGJhY2spO1xuICB9O1xuXG4gIF9wcm90by5zZXROZXh0Q2FsbGJhY2sgPSBmdW5jdGlvbiBzZXROZXh0Q2FsbGJhY2soY2FsbGJhY2spIHtcbiAgICB2YXIgX3RoaXM0ID0gdGhpcztcblxuICAgIHZhciBhY3RpdmUgPSB0cnVlO1xuXG4gICAgdGhpcy5uZXh0Q2FsbGJhY2sgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGlmIChhY3RpdmUpIHtcbiAgICAgICAgYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIF90aGlzNC5uZXh0Q2FsbGJhY2sgPSBudWxsO1xuICAgICAgICBjYWxsYmFjayhldmVudCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHRoaXMubmV4dENhbGxiYWNrLmNhbmNlbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGFjdGl2ZSA9IGZhbHNlO1xuICAgIH07XG5cbiAgICByZXR1cm4gdGhpcy5uZXh0Q2FsbGJhY2s7XG4gIH07XG5cbiAgX3Byb3RvLm9uVHJhbnNpdGlvbkVuZCA9IGZ1bmN0aW9uIG9uVHJhbnNpdGlvbkVuZChub2RlLCB0aW1lb3V0LCBoYW5kbGVyKSB7XG4gICAgdGhpcy5zZXROZXh0Q2FsbGJhY2soaGFuZGxlcik7XG5cbiAgICBpZiAobm9kZSkge1xuICAgICAgaWYgKHRoaXMucHJvcHMuYWRkRW5kTGlzdGVuZXIpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5hZGRFbmRMaXN0ZW5lcihub2RlLCB0aGlzLm5leHRDYWxsYmFjayk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aW1lb3V0ICE9IG51bGwpIHtcbiAgICAgICAgc2V0VGltZW91dCh0aGlzLm5leHRDYWxsYmFjaywgdGltZW91dCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldFRpbWVvdXQodGhpcy5uZXh0Q2FsbGJhY2ssIDApO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8ucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBzdGF0dXMgPSB0aGlzLnN0YXRlLnN0YXR1cztcblxuICAgIGlmIChzdGF0dXMgPT09IFVOTU9VTlRFRCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgdmFyIF90aGlzJHByb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgY2hpbGRyZW4gPSBfdGhpcyRwcm9wcy5jaGlsZHJlbixcbiAgICAgICAgY2hpbGRQcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKF90aGlzJHByb3BzLCBbXCJjaGlsZHJlblwiXSk7IC8vIGZpbHRlciBwcm9wcyBmb3IgVHJhbnN0aXRpb25cblxuXG4gICAgZGVsZXRlIGNoaWxkUHJvcHMuaW47XG4gICAgZGVsZXRlIGNoaWxkUHJvcHMubW91bnRPbkVudGVyO1xuICAgIGRlbGV0ZSBjaGlsZFByb3BzLnVubW91bnRPbkV4aXQ7XG4gICAgZGVsZXRlIGNoaWxkUHJvcHMuYXBwZWFyO1xuICAgIGRlbGV0ZSBjaGlsZFByb3BzLmVudGVyO1xuICAgIGRlbGV0ZSBjaGlsZFByb3BzLmV4aXQ7XG4gICAgZGVsZXRlIGNoaWxkUHJvcHMudGltZW91dDtcbiAgICBkZWxldGUgY2hpbGRQcm9wcy5hZGRFbmRMaXN0ZW5lcjtcbiAgICBkZWxldGUgY2hpbGRQcm9wcy5vbkVudGVyO1xuICAgIGRlbGV0ZSBjaGlsZFByb3BzLm9uRW50ZXJpbmc7XG4gICAgZGVsZXRlIGNoaWxkUHJvcHMub25FbnRlcmVkO1xuICAgIGRlbGV0ZSBjaGlsZFByb3BzLm9uRXhpdDtcbiAgICBkZWxldGUgY2hpbGRQcm9wcy5vbkV4aXRpbmc7XG4gICAgZGVsZXRlIGNoaWxkUHJvcHMub25FeGl0ZWQ7XG5cbiAgICBpZiAodHlwZW9mIGNoaWxkcmVuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gY2hpbGRyZW4oc3RhdHVzLCBjaGlsZFByb3BzKTtcbiAgICB9XG5cbiAgICB2YXIgY2hpbGQgPSBfcmVhY3QuZGVmYXVsdC5DaGlsZHJlbi5vbmx5KGNoaWxkcmVuKTtcblxuICAgIHJldHVybiBfcmVhY3QuZGVmYXVsdC5jbG9uZUVsZW1lbnQoY2hpbGQsIGNoaWxkUHJvcHMpO1xuICB9O1xuXG4gIHJldHVybiBUcmFuc2l0aW9uO1xufShfcmVhY3QuZGVmYXVsdC5Db21wb25lbnQpO1xuXG5UcmFuc2l0aW9uLmNvbnRleHRUeXBlcyA9IHtcbiAgdHJhbnNpdGlvbkdyb3VwOiBQcm9wVHlwZXMub2JqZWN0XG59O1xuVHJhbnNpdGlvbi5jaGlsZENvbnRleHRUeXBlcyA9IHtcbiAgdHJhbnNpdGlvbkdyb3VwOiBmdW5jdGlvbiB0cmFuc2l0aW9uR3JvdXAoKSB7fVxufTtcblRyYW5zaXRpb24ucHJvcFR5cGVzID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8ge1xuICAvKipcbiAgICogQSBgZnVuY3Rpb25gIGNoaWxkIGNhbiBiZSB1c2VkIGluc3RlYWQgb2YgYSBSZWFjdCBlbGVtZW50LlxuICAgKiBUaGlzIGZ1bmN0aW9uIGlzIGNhbGxlZCB3aXRoIHRoZSBjdXJyZW50IHRyYW5zaXRpb24gc3RhdHVzXG4gICAqICgnZW50ZXJpbmcnLCAnZW50ZXJlZCcsICdleGl0aW5nJywgJ2V4aXRlZCcsICd1bm1vdW50ZWQnKSwgd2hpY2ggY2FuIGJlIHVzZWRcbiAgICogdG8gYXBwbHkgY29udGV4dCBzcGVjaWZpYyBwcm9wcyB0byBhIGNvbXBvbmVudC5cbiAgICpcbiAgICogYGBganN4XG4gICAqIDxUcmFuc2l0aW9uIHRpbWVvdXQ9ezE1MH0+XG4gICAqICAgeyhzdGF0dXMpID0+IChcbiAgICogICAgIDxNeUNvbXBvbmVudCBjbGFzc05hbWU9e2BmYWRlIGZhZGUtJHtzdGF0dXN9YH0gLz5cbiAgICogICApfVxuICAgKiA8L1RyYW5zaXRpb24+XG4gICAqIGBgYFxuICAgKi9cbiAgY2hpbGRyZW46IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsIFByb3BUeXBlcy5lbGVtZW50LmlzUmVxdWlyZWRdKS5pc1JlcXVpcmVkLFxuXG4gIC8qKlxuICAgKiBTaG93IHRoZSBjb21wb25lbnQ7IHRyaWdnZXJzIHRoZSBlbnRlciBvciBleGl0IHN0YXRlc1xuICAgKi9cbiAgaW46IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBCeSBkZWZhdWx0IHRoZSBjaGlsZCBjb21wb25lbnQgaXMgbW91bnRlZCBpbW1lZGlhdGVseSBhbG9uZyB3aXRoXG4gICAqIHRoZSBwYXJlbnQgYFRyYW5zaXRpb25gIGNvbXBvbmVudC4gSWYgeW91IHdhbnQgdG8gXCJsYXp5IG1vdW50XCIgdGhlIGNvbXBvbmVudCBvbiB0aGVcbiAgICogZmlyc3QgYGluPXt0cnVlfWAgeW91IGNhbiBzZXQgYG1vdW50T25FbnRlcmAuIEFmdGVyIHRoZSBmaXJzdCBlbnRlciB0cmFuc2l0aW9uIHRoZSBjb21wb25lbnQgd2lsbCBzdGF5XG4gICAqIG1vdW50ZWQsIGV2ZW4gb24gXCJleGl0ZWRcIiwgdW5sZXNzIHlvdSBhbHNvIHNwZWNpZnkgYHVubW91bnRPbkV4aXRgLlxuICAgKi9cbiAgbW91bnRPbkVudGVyOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogQnkgZGVmYXVsdCB0aGUgY2hpbGQgY29tcG9uZW50IHN0YXlzIG1vdW50ZWQgYWZ0ZXIgaXQgcmVhY2hlcyB0aGUgYCdleGl0ZWQnYCBzdGF0ZS5cbiAgICogU2V0IGB1bm1vdW50T25FeGl0YCBpZiB5b3UnZCBwcmVmZXIgdG8gdW5tb3VudCB0aGUgY29tcG9uZW50IGFmdGVyIGl0IGZpbmlzaGVzIGV4aXRpbmcuXG4gICAqL1xuICB1bm1vdW50T25FeGl0OiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogTm9ybWFsbHkgYSBjb21wb25lbnQgaXMgbm90IHRyYW5zaXRpb25lZCBpZiBpdCBpcyBzaG93biB3aGVuIHRoZSBgPFRyYW5zaXRpb24+YCBjb21wb25lbnQgbW91bnRzLlxuICAgKiBJZiB5b3Ugd2FudCB0byB0cmFuc2l0aW9uIG9uIHRoZSBmaXJzdCBtb3VudCBzZXQgYGFwcGVhcmAgdG8gYHRydWVgLCBhbmQgdGhlXG4gICAqIGNvbXBvbmVudCB3aWxsIHRyYW5zaXRpb24gaW4gYXMgc29vbiBhcyB0aGUgYDxUcmFuc2l0aW9uPmAgbW91bnRzLlxuICAgKlxuICAgKiA+IE5vdGU6IHRoZXJlIGFyZSBubyBzcGVjaWZpYyBcImFwcGVhclwiIHN0YXRlcy4gYGFwcGVhcmAgb25seSBhZGRzIGFuIGFkZGl0aW9uYWwgYGVudGVyYCB0cmFuc2l0aW9uLlxuICAgKi9cbiAgYXBwZWFyOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogRW5hYmxlIG9yIGRpc2FibGUgZW50ZXIgdHJhbnNpdGlvbnMuXG4gICAqL1xuICBlbnRlcjogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIEVuYWJsZSBvciBkaXNhYmxlIGV4aXQgdHJhbnNpdGlvbnMuXG4gICAqL1xuICBleGl0OiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogVGhlIGR1cmF0aW9uIG9mIHRoZSB0cmFuc2l0aW9uLCBpbiBtaWxsaXNlY29uZHMuXG4gICAqIFJlcXVpcmVkIHVubGVzcyBgYWRkRW5kTGlzdGVuZXJgIGlzIHByb3ZpZGVkXG4gICAqXG4gICAqIFlvdSBtYXkgc3BlY2lmeSBhIHNpbmdsZSB0aW1lb3V0IGZvciBhbGwgdHJhbnNpdGlvbnMgbGlrZTogYHRpbWVvdXQ9ezUwMH1gLFxuICAgKiBvciBpbmRpdmlkdWFsbHkgbGlrZTpcbiAgICpcbiAgICogYGBganN4XG4gICAqIHRpbWVvdXQ9e3tcbiAgICogIGVudGVyOiAzMDAsXG4gICAqICBleGl0OiA1MDAsXG4gICAqIH19XG4gICAqIGBgYFxuICAgKlxuICAgKiBAdHlwZSB7bnVtYmVyIHwgeyBlbnRlcj86IG51bWJlciwgZXhpdD86IG51bWJlciB9fVxuICAgKi9cbiAgdGltZW91dDogZnVuY3Rpb24gdGltZW91dChwcm9wcykge1xuICAgIHZhciBwdCA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IF9Qcm9wVHlwZXMudGltZW91dHNTaGFwZSA6IHt9OztcbiAgICBpZiAoIXByb3BzLmFkZEVuZExpc3RlbmVyKSBwdCA9IHB0LmlzUmVxdWlyZWQ7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICByZXR1cm4gcHQuYXBwbHkodm9pZCAwLCBbcHJvcHNdLmNvbmNhdChhcmdzKSk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEFkZCBhIGN1c3RvbSB0cmFuc2l0aW9uIGVuZCB0cmlnZ2VyLiBDYWxsZWQgd2l0aCB0aGUgdHJhbnNpdGlvbmluZ1xuICAgKiBET00gbm9kZSBhbmQgYSBgZG9uZWAgY2FsbGJhY2suIEFsbG93cyBmb3IgbW9yZSBmaW5lIGdyYWluZWQgdHJhbnNpdGlvbiBlbmRcbiAgICogbG9naWMuICoqTm90ZToqKiBUaW1lb3V0cyBhcmUgc3RpbGwgdXNlZCBhcyBhIGZhbGxiYWNrIGlmIHByb3ZpZGVkLlxuICAgKlxuICAgKiBgYGBqc3hcbiAgICogYWRkRW5kTGlzdGVuZXI9eyhub2RlLCBkb25lKSA9PiB7XG4gICAqICAgLy8gdXNlIHRoZSBjc3MgdHJhbnNpdGlvbmVuZCBldmVudCB0byBtYXJrIHRoZSBmaW5pc2ggb2YgYSB0cmFuc2l0aW9uXG4gICAqICAgbm9kZS5hZGRFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgZG9uZSwgZmFsc2UpO1xuICAgKiB9fVxuICAgKiBgYGBcbiAgICovXG4gIGFkZEVuZExpc3RlbmVyOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQ2FsbGJhY2sgZmlyZWQgYmVmb3JlIHRoZSBcImVudGVyaW5nXCIgc3RhdHVzIGlzIGFwcGxpZWQuIEFuIGV4dHJhIHBhcmFtZXRlclxuICAgKiBgaXNBcHBlYXJpbmdgIGlzIHN1cHBsaWVkIHRvIGluZGljYXRlIGlmIHRoZSBlbnRlciBzdGFnZSBpcyBvY2N1cnJpbmcgb24gdGhlIGluaXRpYWwgbW91bnRcbiAgICpcbiAgICogQHR5cGUgRnVuY3Rpb24obm9kZTogSHRtbEVsZW1lbnQsIGlzQXBwZWFyaW5nOiBib29sKSAtPiB2b2lkXG4gICAqL1xuICBvbkVudGVyOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQ2FsbGJhY2sgZmlyZWQgYWZ0ZXIgdGhlIFwiZW50ZXJpbmdcIiBzdGF0dXMgaXMgYXBwbGllZC4gQW4gZXh0cmEgcGFyYW1ldGVyXG4gICAqIGBpc0FwcGVhcmluZ2AgaXMgc3VwcGxpZWQgdG8gaW5kaWNhdGUgaWYgdGhlIGVudGVyIHN0YWdlIGlzIG9jY3VycmluZyBvbiB0aGUgaW5pdGlhbCBtb3VudFxuICAgKlxuICAgKiBAdHlwZSBGdW5jdGlvbihub2RlOiBIdG1sRWxlbWVudCwgaXNBcHBlYXJpbmc6IGJvb2wpXG4gICAqL1xuICBvbkVudGVyaW5nOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQ2FsbGJhY2sgZmlyZWQgYWZ0ZXIgdGhlIFwiZW50ZXJlZFwiIHN0YXR1cyBpcyBhcHBsaWVkLiBBbiBleHRyYSBwYXJhbWV0ZXJcbiAgICogYGlzQXBwZWFyaW5nYCBpcyBzdXBwbGllZCB0byBpbmRpY2F0ZSBpZiB0aGUgZW50ZXIgc3RhZ2UgaXMgb2NjdXJyaW5nIG9uIHRoZSBpbml0aWFsIG1vdW50XG4gICAqXG4gICAqIEB0eXBlIEZ1bmN0aW9uKG5vZGU6IEh0bWxFbGVtZW50LCBpc0FwcGVhcmluZzogYm9vbCkgLT4gdm9pZFxuICAgKi9cbiAgb25FbnRlcmVkOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQ2FsbGJhY2sgZmlyZWQgYmVmb3JlIHRoZSBcImV4aXRpbmdcIiBzdGF0dXMgaXMgYXBwbGllZC5cbiAgICpcbiAgICogQHR5cGUgRnVuY3Rpb24obm9kZTogSHRtbEVsZW1lbnQpIC0+IHZvaWRcbiAgICovXG4gIG9uRXhpdDogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIGZpcmVkIGFmdGVyIHRoZSBcImV4aXRpbmdcIiBzdGF0dXMgaXMgYXBwbGllZC5cbiAgICpcbiAgICogQHR5cGUgRnVuY3Rpb24obm9kZTogSHRtbEVsZW1lbnQpIC0+IHZvaWRcbiAgICovXG4gIG9uRXhpdGluZzogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIGZpcmVkIGFmdGVyIHRoZSBcImV4aXRlZFwiIHN0YXR1cyBpcyBhcHBsaWVkLlxuICAgKlxuICAgKiBAdHlwZSBGdW5jdGlvbihub2RlOiBIdG1sRWxlbWVudCkgLT4gdm9pZFxuICAgKi9cbiAgb25FeGl0ZWQ6IFByb3BUeXBlcy5mdW5jIC8vIE5hbWUgdGhlIGZ1bmN0aW9uIHNvIGl0IGlzIGNsZWFyZXIgaW4gdGhlIGRvY3VtZW50YXRpb25cblxufSA6IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxuVHJhbnNpdGlvbi5kZWZhdWx0UHJvcHMgPSB7XG4gIGluOiBmYWxzZSxcbiAgbW91bnRPbkVudGVyOiBmYWxzZSxcbiAgdW5tb3VudE9uRXhpdDogZmFsc2UsXG4gIGFwcGVhcjogZmFsc2UsXG4gIGVudGVyOiB0cnVlLFxuICBleGl0OiB0cnVlLFxuICBvbkVudGVyOiBub29wLFxuICBvbkVudGVyaW5nOiBub29wLFxuICBvbkVudGVyZWQ6IG5vb3AsXG4gIG9uRXhpdDogbm9vcCxcbiAgb25FeGl0aW5nOiBub29wLFxuICBvbkV4aXRlZDogbm9vcFxufTtcblRyYW5zaXRpb24uVU5NT1VOVEVEID0gMDtcblRyYW5zaXRpb24uRVhJVEVEID0gMTtcblRyYW5zaXRpb24uRU5URVJJTkcgPSAyO1xuVHJhbnNpdGlvbi5FTlRFUkVEID0gMztcblRyYW5zaXRpb24uRVhJVElORyA9IDQ7XG5cbnZhciBfZGVmYXVsdCA9ICgwLCBfcmVhY3RMaWZlY3ljbGVzQ29tcGF0LnBvbHlmaWxsKShUcmFuc2l0aW9uKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBQcm9wVHlwZXMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicHJvcC10eXBlc1wiKSk7XG5cbnZhciBfYWRkQ2xhc3MgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJkb20taGVscGVycy9jbGFzcy9hZGRDbGFzc1wiKSk7XG5cbnZhciBfcmVtb3ZlQ2xhc3MgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJkb20taGVscGVycy9jbGFzcy9yZW1vdmVDbGFzc1wiKSk7XG5cbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbnZhciBfVHJhbnNpdGlvbiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vVHJhbnNpdGlvblwiKSk7XG5cbnZhciBfUHJvcFR5cGVzID0gcmVxdWlyZShcIi4vdXRpbHMvUHJvcFR5cGVzXCIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHsgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkgeyByZXR1cm4gb2JqOyB9IGVsc2UgeyB2YXIgbmV3T2JqID0ge307IGlmIChvYmogIT0gbnVsbCkgeyBmb3IgKHZhciBrZXkgaW4gb2JqKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7IHZhciBkZXNjID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IHt9OyBpZiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTsgfSBlbHNlIHsgbmV3T2JqW2tleV0gPSBvYmpba2V5XTsgfSB9IH0gfSBuZXdPYmouZGVmYXVsdCA9IG9iajsgcmV0dXJuIG5ld09iajsgfSB9XG5cbmZ1bmN0aW9uIF9leHRlbmRzKCkgeyBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07IHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0c0xvb3NlKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcy5wcm90b3R5cGUpOyBzdWJDbGFzcy5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBzdWJDbGFzczsgc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgYWRkQ2xhc3MgPSBmdW5jdGlvbiBhZGRDbGFzcyhub2RlLCBjbGFzc2VzKSB7XG4gIHJldHVybiBub2RlICYmIGNsYXNzZXMgJiYgY2xhc3Nlcy5zcGxpdCgnICcpLmZvckVhY2goZnVuY3Rpb24gKGMpIHtcbiAgICByZXR1cm4gKDAsIF9hZGRDbGFzcy5kZWZhdWx0KShub2RlLCBjKTtcbiAgfSk7XG59O1xuXG52YXIgcmVtb3ZlQ2xhc3MgPSBmdW5jdGlvbiByZW1vdmVDbGFzcyhub2RlLCBjbGFzc2VzKSB7XG4gIHJldHVybiBub2RlICYmIGNsYXNzZXMgJiYgY2xhc3Nlcy5zcGxpdCgnICcpLmZvckVhY2goZnVuY3Rpb24gKGMpIHtcbiAgICByZXR1cm4gKDAsIF9yZW1vdmVDbGFzcy5kZWZhdWx0KShub2RlLCBjKTtcbiAgfSk7XG59O1xuLyoqXG4gKiBBIGBUcmFuc2l0aW9uYCBjb21wb25lbnQgdXNpbmcgQ1NTIHRyYW5zaXRpb25zIGFuZCBhbmltYXRpb25zLlxuICogSXQncyBpbnNwaXJlZCBieSB0aGUgZXhjZWxsZW50IFtuZy1hbmltYXRlXShodHRwOi8vd3d3Lm5nYW5pbWF0ZS5vcmcvKSBsaWJyYXJ5LlxuICpcbiAqIGBDU1NUcmFuc2l0aW9uYCBhcHBsaWVzIGEgcGFpciBvZiBjbGFzcyBuYW1lcyBkdXJpbmcgdGhlIGBhcHBlYXJgLCBgZW50ZXJgLFxuICogYW5kIGBleGl0YCBzdGFnZXMgb2YgdGhlIHRyYW5zaXRpb24uIFRoZSBmaXJzdCBjbGFzcyBpcyBhcHBsaWVkIGFuZCB0aGVuIGFcbiAqIHNlY29uZCBcImFjdGl2ZVwiIGNsYXNzIGluIG9yZGVyIHRvIGFjdGl2YXRlIHRoZSBjc3MgYW5pbWF0aW9uLiBBZnRlciB0aGUgYW5pbWF0aW9uLFxuICogbWF0Y2hpbmcgYGRvbmVgIGNsYXNzIG5hbWVzIGFyZSBhcHBsaWVkIHRvIHBlcnNpc3QgdGhlIGFuaW1hdGlvbiBzdGF0ZS5cbiAqXG4gKiBXaGVuIHRoZSBgaW5gIHByb3AgaXMgdG9nZ2xlZCB0byBgdHJ1ZWAgdGhlIENvbXBvbmVudCB3aWxsIGdldFxuICogdGhlIGBleGFtcGxlLWVudGVyYCBDU1MgY2xhc3MgYW5kIHRoZSBgZXhhbXBsZS1lbnRlci1hY3RpdmVgIENTUyBjbGFzc1xuICogYWRkZWQgaW4gdGhlIG5leHQgdGljay4gVGhpcyBpcyBhIGNvbnZlbnRpb24gYmFzZWQgb24gdGhlIGBjbGFzc05hbWVzYCBwcm9wLlxuICovXG5cblxudmFyIENTU1RyYW5zaXRpb24gPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzTG9vc2UoQ1NTVHJhbnNpdGlvbiwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gQ1NTVHJhbnNpdGlvbigpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgX3RoaXMgPSBfUmVhY3QkQ29tcG9uZW50LmNhbGwuYXBwbHkoX1JlYWN0JENvbXBvbmVudCwgW3RoaXNdLmNvbmNhdChhcmdzKSkgfHwgdGhpcztcblxuICAgIF90aGlzLm9uRW50ZXIgPSBmdW5jdGlvbiAobm9kZSwgYXBwZWFyaW5nKSB7XG4gICAgICB2YXIgX3RoaXMkZ2V0Q2xhc3NOYW1lcyA9IF90aGlzLmdldENsYXNzTmFtZXMoYXBwZWFyaW5nID8gJ2FwcGVhcicgOiAnZW50ZXInKSxcbiAgICAgICAgICBjbGFzc05hbWUgPSBfdGhpcyRnZXRDbGFzc05hbWVzLmNsYXNzTmFtZTtcblxuICAgICAgX3RoaXMucmVtb3ZlQ2xhc3Nlcyhub2RlLCAnZXhpdCcpO1xuXG4gICAgICBhZGRDbGFzcyhub2RlLCBjbGFzc05hbWUpO1xuXG4gICAgICBpZiAoX3RoaXMucHJvcHMub25FbnRlcikge1xuICAgICAgICBfdGhpcy5wcm9wcy5vbkVudGVyKG5vZGUsIGFwcGVhcmluZyk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF90aGlzLm9uRW50ZXJpbmcgPSBmdW5jdGlvbiAobm9kZSwgYXBwZWFyaW5nKSB7XG4gICAgICB2YXIgX3RoaXMkZ2V0Q2xhc3NOYW1lczIgPSBfdGhpcy5nZXRDbGFzc05hbWVzKGFwcGVhcmluZyA/ICdhcHBlYXInIDogJ2VudGVyJyksXG4gICAgICAgICAgYWN0aXZlQ2xhc3NOYW1lID0gX3RoaXMkZ2V0Q2xhc3NOYW1lczIuYWN0aXZlQ2xhc3NOYW1lO1xuXG4gICAgICBfdGhpcy5yZWZsb3dBbmRBZGRDbGFzcyhub2RlLCBhY3RpdmVDbGFzc05hbWUpO1xuXG4gICAgICBpZiAoX3RoaXMucHJvcHMub25FbnRlcmluZykge1xuICAgICAgICBfdGhpcy5wcm9wcy5vbkVudGVyaW5nKG5vZGUsIGFwcGVhcmluZyk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF90aGlzLm9uRW50ZXJlZCA9IGZ1bmN0aW9uIChub2RlLCBhcHBlYXJpbmcpIHtcbiAgICAgIHZhciBfdGhpcyRnZXRDbGFzc05hbWVzMyA9IF90aGlzLmdldENsYXNzTmFtZXMoJ2VudGVyJyksXG4gICAgICAgICAgZG9uZUNsYXNzTmFtZSA9IF90aGlzJGdldENsYXNzTmFtZXMzLmRvbmVDbGFzc05hbWU7XG5cbiAgICAgIF90aGlzLnJlbW92ZUNsYXNzZXMobm9kZSwgYXBwZWFyaW5nID8gJ2FwcGVhcicgOiAnZW50ZXInKTtcblxuICAgICAgYWRkQ2xhc3Mobm9kZSwgZG9uZUNsYXNzTmFtZSk7XG5cbiAgICAgIGlmIChfdGhpcy5wcm9wcy5vbkVudGVyZWQpIHtcbiAgICAgICAgX3RoaXMucHJvcHMub25FbnRlcmVkKG5vZGUsIGFwcGVhcmluZyk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF90aGlzLm9uRXhpdCA9IGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICB2YXIgX3RoaXMkZ2V0Q2xhc3NOYW1lczQgPSBfdGhpcy5nZXRDbGFzc05hbWVzKCdleGl0JyksXG4gICAgICAgICAgY2xhc3NOYW1lID0gX3RoaXMkZ2V0Q2xhc3NOYW1lczQuY2xhc3NOYW1lO1xuXG4gICAgICBfdGhpcy5yZW1vdmVDbGFzc2VzKG5vZGUsICdhcHBlYXInKTtcblxuICAgICAgX3RoaXMucmVtb3ZlQ2xhc3Nlcyhub2RlLCAnZW50ZXInKTtcblxuICAgICAgYWRkQ2xhc3Mobm9kZSwgY2xhc3NOYW1lKTtcblxuICAgICAgaWYgKF90aGlzLnByb3BzLm9uRXhpdCkge1xuICAgICAgICBfdGhpcy5wcm9wcy5vbkV4aXQobm9kZSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF90aGlzLm9uRXhpdGluZyA9IGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICB2YXIgX3RoaXMkZ2V0Q2xhc3NOYW1lczUgPSBfdGhpcy5nZXRDbGFzc05hbWVzKCdleGl0JyksXG4gICAgICAgICAgYWN0aXZlQ2xhc3NOYW1lID0gX3RoaXMkZ2V0Q2xhc3NOYW1lczUuYWN0aXZlQ2xhc3NOYW1lO1xuXG4gICAgICBfdGhpcy5yZWZsb3dBbmRBZGRDbGFzcyhub2RlLCBhY3RpdmVDbGFzc05hbWUpO1xuXG4gICAgICBpZiAoX3RoaXMucHJvcHMub25FeGl0aW5nKSB7XG4gICAgICAgIF90aGlzLnByb3BzLm9uRXhpdGluZyhub2RlKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3RoaXMub25FeGl0ZWQgPSBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgdmFyIF90aGlzJGdldENsYXNzTmFtZXM2ID0gX3RoaXMuZ2V0Q2xhc3NOYW1lcygnZXhpdCcpLFxuICAgICAgICAgIGRvbmVDbGFzc05hbWUgPSBfdGhpcyRnZXRDbGFzc05hbWVzNi5kb25lQ2xhc3NOYW1lO1xuXG4gICAgICBfdGhpcy5yZW1vdmVDbGFzc2VzKG5vZGUsICdleGl0Jyk7XG5cbiAgICAgIGFkZENsYXNzKG5vZGUsIGRvbmVDbGFzc05hbWUpO1xuXG4gICAgICBpZiAoX3RoaXMucHJvcHMub25FeGl0ZWQpIHtcbiAgICAgICAgX3RoaXMucHJvcHMub25FeGl0ZWQobm9kZSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF90aGlzLmdldENsYXNzTmFtZXMgPSBmdW5jdGlvbiAodHlwZSkge1xuICAgICAgdmFyIGNsYXNzTmFtZXMgPSBfdGhpcy5wcm9wcy5jbGFzc05hbWVzO1xuICAgICAgdmFyIGNsYXNzTmFtZSA9IHR5cGVvZiBjbGFzc05hbWVzICE9PSAnc3RyaW5nJyA/IGNsYXNzTmFtZXNbdHlwZV0gOiBjbGFzc05hbWVzICsgJy0nICsgdHlwZTtcbiAgICAgIHZhciBhY3RpdmVDbGFzc05hbWUgPSB0eXBlb2YgY2xhc3NOYW1lcyAhPT0gJ3N0cmluZycgPyBjbGFzc05hbWVzW3R5cGUgKyAnQWN0aXZlJ10gOiBjbGFzc05hbWUgKyAnLWFjdGl2ZSc7XG4gICAgICB2YXIgZG9uZUNsYXNzTmFtZSA9IHR5cGVvZiBjbGFzc05hbWVzICE9PSAnc3RyaW5nJyA/IGNsYXNzTmFtZXNbdHlwZSArICdEb25lJ10gOiBjbGFzc05hbWUgKyAnLWRvbmUnO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgY2xhc3NOYW1lOiBjbGFzc05hbWUsXG4gICAgICAgIGFjdGl2ZUNsYXNzTmFtZTogYWN0aXZlQ2xhc3NOYW1lLFxuICAgICAgICBkb25lQ2xhc3NOYW1lOiBkb25lQ2xhc3NOYW1lXG4gICAgICB9O1xuICAgIH07XG5cbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gQ1NTVHJhbnNpdGlvbi5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLnJlbW92ZUNsYXNzZXMgPSBmdW5jdGlvbiByZW1vdmVDbGFzc2VzKG5vZGUsIHR5cGUpIHtcbiAgICB2YXIgX3RoaXMkZ2V0Q2xhc3NOYW1lczcgPSB0aGlzLmdldENsYXNzTmFtZXModHlwZSksXG4gICAgICAgIGNsYXNzTmFtZSA9IF90aGlzJGdldENsYXNzTmFtZXM3LmNsYXNzTmFtZSxcbiAgICAgICAgYWN0aXZlQ2xhc3NOYW1lID0gX3RoaXMkZ2V0Q2xhc3NOYW1lczcuYWN0aXZlQ2xhc3NOYW1lLFxuICAgICAgICBkb25lQ2xhc3NOYW1lID0gX3RoaXMkZ2V0Q2xhc3NOYW1lczcuZG9uZUNsYXNzTmFtZTtcblxuICAgIGNsYXNzTmFtZSAmJiByZW1vdmVDbGFzcyhub2RlLCBjbGFzc05hbWUpO1xuICAgIGFjdGl2ZUNsYXNzTmFtZSAmJiByZW1vdmVDbGFzcyhub2RlLCBhY3RpdmVDbGFzc05hbWUpO1xuICAgIGRvbmVDbGFzc05hbWUgJiYgcmVtb3ZlQ2xhc3Mobm9kZSwgZG9uZUNsYXNzTmFtZSk7XG4gIH07XG5cbiAgX3Byb3RvLnJlZmxvd0FuZEFkZENsYXNzID0gZnVuY3Rpb24gcmVmbG93QW5kQWRkQ2xhc3Mobm9kZSwgY2xhc3NOYW1lKSB7XG4gICAgLy8gVGhpcyBpcyBmb3IgdG8gZm9yY2UgYSByZXBhaW50LFxuICAgIC8vIHdoaWNoIGlzIG5lY2Vzc2FyeSBpbiBvcmRlciB0byB0cmFuc2l0aW9uIHN0eWxlcyB3aGVuIGFkZGluZyBhIGNsYXNzIG5hbWUuXG4gICAgaWYgKGNsYXNzTmFtZSkge1xuICAgICAgLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLWV4cHJlc3Npb25zICovXG4gICAgICBub2RlICYmIG5vZGUuc2Nyb2xsVG9wO1xuICAgICAgLyogZXNsaW50LWVuYWJsZSBuby11bnVzZWQtZXhwcmVzc2lvbnMgKi9cblxuICAgICAgYWRkQ2xhc3Mobm9kZSwgY2xhc3NOYW1lKTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgcHJvcHMgPSBfZXh0ZW5kcyh7fSwgdGhpcy5wcm9wcyk7XG5cbiAgICBkZWxldGUgcHJvcHMuY2xhc3NOYW1lcztcbiAgICByZXR1cm4gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChfVHJhbnNpdGlvbi5kZWZhdWx0LCBfZXh0ZW5kcyh7fSwgcHJvcHMsIHtcbiAgICAgIG9uRW50ZXI6IHRoaXMub25FbnRlcixcbiAgICAgIG9uRW50ZXJlZDogdGhpcy5vbkVudGVyZWQsXG4gICAgICBvbkVudGVyaW5nOiB0aGlzLm9uRW50ZXJpbmcsXG4gICAgICBvbkV4aXQ6IHRoaXMub25FeGl0LFxuICAgICAgb25FeGl0aW5nOiB0aGlzLm9uRXhpdGluZyxcbiAgICAgIG9uRXhpdGVkOiB0aGlzLm9uRXhpdGVkXG4gICAgfSkpO1xuICB9O1xuXG4gIHJldHVybiBDU1NUcmFuc2l0aW9uO1xufShfcmVhY3QuZGVmYXVsdC5Db21wb25lbnQpO1xuXG5DU1NUcmFuc2l0aW9uLnByb3BUeXBlcyA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IF9leHRlbmRzKHt9LCBfVHJhbnNpdGlvbi5kZWZhdWx0LnByb3BUeXBlcywge1xuICAvKipcbiAgICogVGhlIGFuaW1hdGlvbiBjbGFzc05hbWVzIGFwcGxpZWQgdG8gdGhlIGNvbXBvbmVudCBhcyBpdCBlbnRlcnMsIGV4aXRzIG9yIGhhcyBmaW5pc2hlZCB0aGUgdHJhbnNpdGlvbi5cbiAgICogQSBzaW5nbGUgbmFtZSBjYW4gYmUgcHJvdmlkZWQgYW5kIGl0IHdpbGwgYmUgc3VmZml4ZWQgZm9yIGVhY2ggc3RhZ2U6IGUuZy5cbiAgICpcbiAgICogYGNsYXNzTmFtZXM9XCJmYWRlXCJgIGFwcGxpZXMgYGZhZGUtZW50ZXJgLCBgZmFkZS1lbnRlci1hY3RpdmVgLCBgZmFkZS1lbnRlci1kb25lYCxcbiAgICogYGZhZGUtZXhpdGAsIGBmYWRlLWV4aXQtYWN0aXZlYCwgYGZhZGUtZXhpdC1kb25lYCwgYGZhZGUtYXBwZWFyYCwgYW5kIGBmYWRlLWFwcGVhci1hY3RpdmVgLlxuICAgKiBFYWNoIGluZGl2aWR1YWwgY2xhc3NOYW1lcyBjYW4gYWxzbyBiZSBzcGVjaWZpZWQgaW5kZXBlbmRlbnRseSBsaWtlOlxuICAgKlxuICAgKiBgYGBqc1xuICAgKiBjbGFzc05hbWVzPXt7XG4gICAqICBhcHBlYXI6ICdteS1hcHBlYXInLFxuICAgKiAgYXBwZWFyQWN0aXZlOiAnbXktYWN0aXZlLWFwcGVhcicsXG4gICAqICBlbnRlcjogJ215LWVudGVyJyxcbiAgICogIGVudGVyQWN0aXZlOiAnbXktYWN0aXZlLWVudGVyJyxcbiAgICogIGVudGVyRG9uZTogJ215LWRvbmUtZW50ZXInLFxuICAgKiAgZXhpdDogJ215LWV4aXQnLFxuICAgKiAgZXhpdEFjdGl2ZTogJ215LWFjdGl2ZS1leGl0JyxcbiAgICogIGV4aXREb25lOiAnbXktZG9uZS1leGl0JyxcbiAgICogfX1cbiAgICogYGBgXG4gICAqXG4gICAqIElmIHlvdSB3YW50IHRvIHNldCB0aGVzZSBjbGFzc2VzIHVzaW5nIENTUyBNb2R1bGVzOlxuICAgKlxuICAgKiBgYGBqc1xuICAgKiBpbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzLmNzcyc7XG4gICAqIGBgYFxuICAgKlxuICAgKiB5b3UgbWlnaHQgd2FudCB0byB1c2UgY2FtZWxDYXNlIGluIHlvdXIgQ1NTIGZpbGUsIHRoYXQgd2F5IGNvdWxkIHNpbXBseSBzcHJlYWRcbiAgICogdGhlbSBpbnN0ZWFkIG9mIGxpc3RpbmcgdGhlbSBvbmUgYnkgb25lOlxuICAgKlxuICAgKiBgYGBqc1xuICAgKiBjbGFzc05hbWVzPXt7IC4uLnN0eWxlcyB9fVxuICAgKiBgYGBcbiAgICpcbiAgICogQHR5cGUge3N0cmluZyB8IHtcbiAgICogIGFwcGVhcj86IHN0cmluZyxcbiAgICogIGFwcGVhckFjdGl2ZT86IHN0cmluZyxcbiAgICogIGVudGVyPzogc3RyaW5nLFxuICAgKiAgZW50ZXJBY3RpdmU/OiBzdHJpbmcsXG4gICAqICBlbnRlckRvbmU/OiBzdHJpbmcsXG4gICAqICBleGl0Pzogc3RyaW5nLFxuICAgKiAgZXhpdEFjdGl2ZT86IHN0cmluZyxcbiAgICogIGV4aXREb25lPzogc3RyaW5nLFxuICAgKiB9fVxuICAgKi9cbiAgY2xhc3NOYW1lczogX1Byb3BUeXBlcy5jbGFzc05hbWVzU2hhcGUsXG5cbiAgLyoqXG4gICAqIEEgYDxUcmFuc2l0aW9uPmAgY2FsbGJhY2sgZmlyZWQgaW1tZWRpYXRlbHkgYWZ0ZXIgdGhlICdlbnRlcicgb3IgJ2FwcGVhcicgY2xhc3MgaXNcbiAgICogYXBwbGllZC5cbiAgICpcbiAgICogQHR5cGUgRnVuY3Rpb24obm9kZTogSHRtbEVsZW1lbnQsIGlzQXBwZWFyaW5nOiBib29sKVxuICAgKi9cbiAgb25FbnRlcjogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIEEgYDxUcmFuc2l0aW9uPmAgY2FsbGJhY2sgZmlyZWQgaW1tZWRpYXRlbHkgYWZ0ZXIgdGhlICdlbnRlci1hY3RpdmUnIG9yXG4gICAqICdhcHBlYXItYWN0aXZlJyBjbGFzcyBpcyBhcHBsaWVkLlxuICAgKlxuICAgKiBAdHlwZSBGdW5jdGlvbihub2RlOiBIdG1sRWxlbWVudCwgaXNBcHBlYXJpbmc6IGJvb2wpXG4gICAqL1xuICBvbkVudGVyaW5nOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQSBgPFRyYW5zaXRpb24+YCBjYWxsYmFjayBmaXJlZCBpbW1lZGlhdGVseSBhZnRlciB0aGUgJ2VudGVyJyBvclxuICAgKiAnYXBwZWFyJyBjbGFzc2VzIGFyZSAqKnJlbW92ZWQqKiBhbmQgdGhlIGBkb25lYCBjbGFzcyBpcyBhZGRlZCB0byB0aGUgRE9NIG5vZGUuXG4gICAqXG4gICAqIEB0eXBlIEZ1bmN0aW9uKG5vZGU6IEh0bWxFbGVtZW50LCBpc0FwcGVhcmluZzogYm9vbClcbiAgICovXG4gIG9uRW50ZXJlZDogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIEEgYDxUcmFuc2l0aW9uPmAgY2FsbGJhY2sgZmlyZWQgaW1tZWRpYXRlbHkgYWZ0ZXIgdGhlICdleGl0JyBjbGFzcyBpc1xuICAgKiBhcHBsaWVkLlxuICAgKlxuICAgKiBAdHlwZSBGdW5jdGlvbihub2RlOiBIdG1sRWxlbWVudClcbiAgICovXG4gIG9uRXhpdDogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIEEgYDxUcmFuc2l0aW9uPmAgY2FsbGJhY2sgZmlyZWQgaW1tZWRpYXRlbHkgYWZ0ZXIgdGhlICdleGl0LWFjdGl2ZScgaXMgYXBwbGllZC5cbiAgICpcbiAgICogQHR5cGUgRnVuY3Rpb24obm9kZTogSHRtbEVsZW1lbnQpXG4gICAqL1xuICBvbkV4aXRpbmc6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBBIGA8VHJhbnNpdGlvbj5gIGNhbGxiYWNrIGZpcmVkIGltbWVkaWF0ZWx5IGFmdGVyIHRoZSAnZXhpdCcgY2xhc3Nlc1xuICAgKiBhcmUgKipyZW1vdmVkKiogYW5kIHRoZSBgZXhpdC1kb25lYCBjbGFzcyBpcyBhZGRlZCB0byB0aGUgRE9NIG5vZGUuXG4gICAqXG4gICAqIEB0eXBlIEZ1bmN0aW9uKG5vZGU6IEh0bWxFbGVtZW50KVxuICAgKi9cbiAgb25FeGl0ZWQ6IFByb3BUeXBlcy5mdW5jXG59KSA6IHt9O1xudmFyIF9kZWZhdWx0ID0gQ1NTVHJhbnNpdGlvbjtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzW1wiZGVmYXVsdFwiXTsiLCJpbXBvcnQgUmVhY3QsIHsgY3JlYXRlUmVmLCBSZWZPYmplY3QsIFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQ1NTVHJhbnNpdGlvbiBmcm9tICdyZWFjdC10cmFuc2l0aW9uLWdyb3VwL0NTU1RyYW5zaXRpb24nO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgeyBDb2xvclR5cGUsIENTU1R5cGUgfSBmcm9tICcuLi8uLi90eXBlcyc7XG5cbmNvbnN0IFdyYXBwZXIgPSBzdHlsZWQuZGl2PHsgY3NzPzogQ1NTVHlwZSB9PmBcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cbiAgZGl2W3JvbGU9XCJ0b29sdGlwXCJdIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgY2xlYXI6IGJvdGg7XG4gICAgYm94LXNoYWRvdzogMCAxcHggMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjA1KTtcbiAgICB6LWluZGV4OiA5OTk5O1xuICAgIHBhZGRpbmc6IDAuMzc1cmVtIDAuNjI1cmVtO1xuICAgIGN1cnNvcjogZGVmYXVsdDtcbiAgICB3aWR0aDogYXV0bztcbiAgICB3aGl0ZS1zcGFjZTogcHJlO1xuICAgIGZvbnQtc2l6ZTogMC44NXJlbTtcblxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC44KTtcbiAgICBvcGFjaXR5OiAwO1xuXG4gICAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybSwgb3BhY2l0eTtcbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiB0cmFuc2Zvcm0sIG9wYWNpdHk7XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMTAwbXM7XG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKTtcblxuICAgICYuc3RhcnQge1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuXG4gICAgJi5lbmQge1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjgpO1xuICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG4gIH1cbiAgJHsoeyBjc3MgfSkgPT4gY3NzIHx8ICcnfVxuYDtcblxuaW50ZXJmYWNlIFRvb2x0aXBQcm9wcyB7XG4gIC8qKiDlkLnjgY3lh7rjgZfjgajjgZfjgabooajnpLrjgZfjgZ/jgYTlhoXlrrkgKi9cbiAgbGFiZWw6IGFueTtcbiAgLyoqIOODnuOCpuOCueOCquODvOODkOODvOOBruWvvuixoeOBq+OBquOCi2VsZW1lbnQgKi9cbiAgY2hpbGRyZW46IGFueTtcbiAgLyoqIOWQueOBjeWHuuOBl+OBruiDjOaZr+iJsuOBruaMh+WumiAqL1xuICBjb2xvcj86IENvbG9yVHlwZTtcbiAgLyoqIOihqOekuuOBleOCjOOCi+WgtOaJgCAqL1xuICBwb3NpdGlvbj86ICd0b3AnIHwgJ2xlZnQnIHwgJ3JpZ2h0JyB8ICdib3R0b20nO1xuICAvKiog44Kr44K544K/44OgQ1NT5a6a576pICovXG4gIGNzcz86IENTU1R5cGU7XG59XG5cbmludGVyZmFjZSBTdGF0ZSB7XG4gIHNob3c6IGJvb2xlYW47XG4gIHN0eWxlOiBhbnk7XG59XG5cbmZ1bmN0aW9uIGdldFBvc2l0aW9uKGhlaWdodDogbnVtYmVyLCB3aWR0aDogbnVtYmVyLCBwb3NpdGlvbj86IGFueSkge1xuICBzd2l0Y2ggKHBvc2l0aW9uKSB7XG4gICAgY2FzZSAndG9wJzoge1xuICAgICAgcmV0dXJuIHsgYm90dG9tOiBgJHtoZWlnaHR9cHhgLCBsZWZ0OiAnNTAlJywgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgtNTAlKScgfTtcbiAgICB9XG4gICAgY2FzZSAnbGVmdCc6IHtcbiAgICAgIHJldHVybiB7IHJpZ2h0OiBgJHt3aWR0aH1weGAsIHRvcDogJzUwJScsIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoLTUwJSknIH07XG4gICAgfVxuICAgIGNhc2UgJ3JpZ2h0Jzoge1xuICAgICAgcmV0dXJuIHsgbGVmdDogYCR7d2lkdGh9cHhgLCB0b3A6ICc1MCUnLCB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKC01MCUpJyB9O1xuICAgIH1cbiAgICBkZWZhdWx0OiB7XG4gICAgICByZXR1cm4geyB0b3A6IGAke2hlaWdodH1weGAsIGxlZnQ6ICc1MCUnLCB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKC01MCUpJyAgfTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9vbHRpcCBleHRlbmRzIFB1cmVDb21wb25lbnQ8VG9vbHRpcFByb3BzLCBTdGF0ZT4ge1xuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIHBvc2l0aW9uOiAnYm90dG9tJyxcbiAgICBjb2xvcjogJ2RhcmsnLFxuICB9O1xuXG4gIHN0YXRlID0ge1xuICAgIHNob3c6IGZhbHNlLFxuICAgIHN0eWxlOiB7fSxcbiAgfTtcblxuICBvcGVuVG9vbHRpcCA9ICgpID0+IHtcbiAgICBpZiAodGhpcy5zdGF0ZS5zaG93IHx8ICF0aGlzLmVsZW1lbnQuY3VycmVudCkgcmV0dXJuO1xuXG4gICAgY29uc3Qgd2lkdGggPSB0aGlzLmVsZW1lbnQuY3VycmVudC5vZmZzZXRXaWR0aCArIDg7XG4gICAgY29uc3QgaGVpZ2h0ID0gdGhpcy5lbGVtZW50LmN1cnJlbnQub2Zmc2V0SGVpZ2h0ICsgODtcbiAgICBjb25zdCBzdHlsZSA9IGdldFBvc2l0aW9uKGhlaWdodCwgd2lkdGgsIHRoaXMucHJvcHMucG9zaXRpb24pO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBzdHlsZSwgc2hvdzogdHJ1ZSB9KTtcbiAgfVxuXG4gIGNsb3NlVG9vbHRpcCA9ICgpID0+IHtcbiAgICBpZiAodGhpcy5zdGF0ZS5zaG93ICYmIHRoaXMuZWxlbWVudC5jdXJyZW50KSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgc2hvdzogZmFsc2UgfSk7XG4gICAgfVxuICB9XG5cbiAgZWxlbWVudDogUmVmT2JqZWN0PEhUTUxEaXZFbGVtZW50PiA9IGNyZWF0ZVJlZigpO1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGxhYmVsLCBjaGlsZHJlbiwgLi4ucmVzdCB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IHNob3csIHN0eWxlIH0gPSB0aGlzLnN0YXRlO1xuICAgIHJldHVybiAoXG4gICAgICA8V3JhcHBlclxuICAgICAgICByZWY9e3RoaXMuZWxlbWVudH1cbiAgICAgICAgb25Nb3VzZU92ZXI9e3RoaXMub3BlblRvb2x0aXB9XG4gICAgICAgIG9uTW91c2VPdXQ9e3RoaXMuY2xvc2VUb29sdGlwfVxuICAgICAgICB7Li4ucmVzdH1cbiAgICAgID5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8Q1NTVHJhbnNpdGlvblxuICAgICAgICAgIGNsYXNzTmFtZXM9e3tcbiAgICAgICAgICAgIGFwcGVhcjogJ3N0YXJ0JyxcbiAgICAgICAgICAgIGVudGVyRG9uZTogJ3N0YXJ0JyxcbiAgICAgICAgICAgIGV4aXQ6ICdlbmQnLFxuICAgICAgICAgIH19XG4gICAgICAgICAgaW49e3Nob3d9XG4gICAgICAgICAgdGltZW91dD17MTUwfVxuICAgICAgICAgIHVubW91bnRPbkV4aXRcbiAgICAgICAgPlxuICAgICAgICAgIDxkaXYgcm9sZT1cInRvb2x0aXBcIj5cbiAgICAgICAgICAgIHtsYWJlbH1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9DU1NUcmFuc2l0aW9uPlxuICAgICAgPC9XcmFwcGVyPlxuICAgICk7XG4gIH1cbn1cblxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5leHBvcnQgY29uc3QgU2lkZU1lbnUgPSBzdHlsZWQuYXNpZGVgXG4gIGZvbnQtc2l6ZTogMXJlbTtcbmA7XG5TaWRlTWVudS5kaXNwbGF5TmFtZSA9ICdTaWRlTWVudSc7XG5cbmV4cG9ydCBjb25zdCBNZW51TGlzdCA9IHN0eWxlZC51bGBcbiAgbGluZS1oZWlnaHQ6IDEuMjU7XG5cbiAgYSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcGFkZGluZzogMC41ZW07XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnRleHR9O1xuICAgICY6aG92ZXIge1xuICAgICAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUucHJpbWFyeX07XG4gICAgfVxuICAgICYuYWN0aXZlIHtcbiAgICAgIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnByaW1hcnl9O1xuICAgIH1cbiAgfVxuXG4gIGxpIHtcbiAgICB1bCB7XG4gICAgICBtYXJnaW46IDAuNzVlbTtcbiAgICAgIHBhZGRpbmctbGVmdDogMC43NWVtO1xuICAgIH1cbiAgfVxuYDtcbk1lbnVMaXN0LmRpc3BsYXlOYW1lID0gJ01lbnVMaXN0JztcblxuZXhwb3J0IGNvbnN0IE1lbnVMYWJlbCA9IHN0eWxlZC5wYFxuICBmb250LXNpemU6IDAuNzVlbTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMWVtO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuXG4gICY6bm90KDpmaXJzdC1jaGlsZCkge1xuICAgIG1hcmdpbi10b3A6IDFlbTtcbiAgfVxuICAmOm5vdCg6bGFzdC1jaGlsZCkge1xuICAgIG1hcmdpbi1ib3R0b206IDFlbTtcbiAgfVxuYDtcbk1lbnVMYWJlbC5kaXNwbGF5TmFtZSA9ICdNZW51TGFiZWwnO1xuXG4iLCJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCwgQ1NTUHJvcGVydGllcyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQsIHsgY3NzIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IEJveCBmcm9tICcuLi9Cb3gnO1xuaW1wb3J0IHsgQ29sb3JUeXBlIH0gZnJvbSAnLi4vLi4vdHlwZXMnO1xuXG5jb25zdCBDYXJkQm9keSA9IHN0eWxlZC5kaXZgXG4gIHBhZGRpbmc6IDEuMjVyZW07XG4gIG1hcmdpbjogMDtcbmA7XG5cbmNvbnN0IENhcmRIZWFkZXIgPSBzdHlsZWQuaGVhZGVyYFxuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nOiAwLjVyZW0gMS41cmVtO1xuICBtaW4taGVpZ2h0OiAzLjVyZW07XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmJvcmRlcn07XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbmA7XG5cbmNvbnN0IENhcmRGb290ZXIgPSBzdHlsZWQuZm9vdGVyYFxuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nOiAwLjVyZW0gMS41cmVtO1xuICBtaW4taGVpZ2h0OiAzLjVyZW07XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmJvcmRlcn07XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbmA7XG5cbmNvbnN0IENhcmRJbWFnZSA9IHN0eWxlZC5hYFxuICB3aWR0aDogMTAwJTtcblxuICBpbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDNweDtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogM3B4O1xuICB9XG5gO1xuXG5pbnRlcmZhY2UgSW1hZ2VQcm9wcyB7XG4gIHVybD86IHN0cmluZztcbn1cblxuY29uc3QgQ2FyZEltYWdlSG9yaXpvbnRhbCA9IHN0eWxlZC5hPEltYWdlUHJvcHM+YFxuICBmbGV4OiAwIDAgMzAlO1xuICBtaW4td2lkdGg6IDVyZW07XG4gIHdpZHRoOiAzMCU7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDNweDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogM3B4O1xuXG4gIGJhY2tncm91bmQ6IG5vLXJlcGVhdCBjZW50ZXIvY292ZXI7XG4gICR7KHsgdXJsIH0pID0+IHVybCA/IGNzc2BiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHt1cmx9KTtgIDoge319XG5gO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICAvKiog44Os44K544Od44Oz44K344OW44Gq44Kk44Oh44O844K444KS6L+95Yqg44GZ44KLICovXG4gIGltYWdlPzogc3RyaW5nO1xuICAvKiog44K/44Kk44OI44OrICovXG4gIHRpdGxlPzogc3RyaW5nO1xuICAvKiog44OY44OD44OA44O844Gu5Y+z5YG044Gr6L+95Yqg44GZ44KLICovXG4gIGhlYWRlck9wdGlvbnM/OiBhbnk7XG4gIC8qKiBoZWFkZXLpg6jliIbvvIjjgqTjg6Hjg7zjgrjvvInjgpLmqKrkuKbjgbPjgavjgZnjgosgKi9cbiAgaG9yaXpvbnRhbD86IGJvb2xlYW47XG4gIC8qKiBmb290ZXIgKi9cbiAgZm9vdGVyPzogYW55O1xuICAvKiog6Imy44Gu5oyH5a6aICovXG4gIGNvbG9yPzogQ29sb3JUeXBlO1xuICAvKiog44OY44OD44OA44KSICovXG4gIGhlYWRlck9uVG9wPzogYm9vbGVhbjtcbiAgLyoqIOOCq+OCueOCv2lubGluZSBzdHlsZSAqL1xuICBzdHlsZT86IGFueTtcbn1cblxuY29uc3QgaG9yaXpvbnRhbFN0eWxlOiBDU1NQcm9wZXJ0aWVzID0geyBmbGV4RGlyZWN0aW9uOiAncm93JyB9O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYXJkIGV4dGVuZHMgUHVyZUNvbXBvbmVudDxQcm9wcz4ge1xuICByZW5kZXJIZWFkZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBpbWFnZSwgdGl0bGUsIGhvcml6b250YWwgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBpZiAoaW1hZ2UgJiYgIWhvcml6b250YWwpIHJldHVybiAoPENhcmRJbWFnZT48aW1nIHNyYz17aW1hZ2V9IC8+PC9DYXJkSW1hZ2U+KTtcbiAgICBpZiAoaW1hZ2UgJiYgaG9yaXpvbnRhbCkgcmV0dXJuICg8Q2FyZEltYWdlSG9yaXpvbnRhbCB1cmw9e2ltYWdlfSAvPik7XG4gICAgaWYgKHRpdGxlICYmICFob3Jpem9udGFsKSByZXR1cm4gKDxDYXJkSGVhZGVyPjxoMz57dGl0bGV9PC9oMz48L0NhcmRIZWFkZXI+KTtcblxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY2hpbGRyZW4sIGhvcml6b250YWwsIGZvb3RlciwgY29sb3IgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBjb25zdCBoZWFkZXIgPSB0aGlzLnJlbmRlckhlYWRlcigpO1xuICAgIGNvbnN0IHdyYXBwZXJTdHlsZSA9IGhvcml6b250YWwgPyBob3Jpem9udGFsU3R5bGUgOiB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIChcbiAgICAgIDxCb3ggc3R5bGU9e3dyYXBwZXJTdHlsZX0gY29sb3I9e2NvbG9yfT5cbiAgICAgICAge2hlYWRlcn1cbiAgICAgICAgPENhcmRCb2R5PlxuICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC9DYXJkQm9keT5cbiAgICAgICAge2Zvb3RlciAmJiAoPENhcmRGb290ZXI+e1JlYWN0LkNoaWxkcmVuLm9ubHkoZm9vdGVyKX08L0NhcmRGb290ZXI+KX1cbiAgICAgIDwvQm94PlxuICAgICk7XG4gIH1cbn1cbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBDU1NUcmFuc2l0aW9uIGZyb20gJ3JlYWN0LXRyYW5zaXRpb24tZ3JvdXAvQ1NTVHJhbnNpdGlvbic7XG5pbXBvcnQgQm94LCB7IFByb3BzIGFzIEJveFByb3BzIH0gZnJvbSAnLi4vQm94JztcbmltcG9ydCB7IENTU1R5cGUgfSBmcm9tICcuLi8uLi90eXBlcyc7XG5cbmNvbnN0IFdyYXBwZXIgPSBzdHlsZWQuZGl2PHsgY3NzPzogQ1NTVHlwZSB9PmBcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBvdXRsaW5lOiBub25lO1xuICBjb2xvcjogaW5oZXJpdDtcblxuICAmOmhvdmVyIHtcbiAgICBjb2xvcjogaW5oZXJpdDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIH1cblxuICAkeyh7IGNzcyB9KSA9PiBjc3MgfHwgJyd9XG5gO1xuXG5jb25zdCBUb29sdGlwID0gc3R5bGVkKEJveClgXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgY2xlYXI6IGJvdGg7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDJweCAwIHJnYmEoMCwgMCwgMCwgMC4wNSk7XG4gIHotaW5kZXg6IDk5OTk7XG4gIHBhZGRpbmc6IDAuNXJlbSAwO1xuICB3aWR0aDogYXV0bztcbiAgaGVpZ2h0OiBhdXRvO1xuICBjdXJzb3I6IGF1dG87XG5cbiAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybSwgb3BhY2l0eTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjgpO1xuICBvcGFjaXR5OiAwO1xuXG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybSwgb3BhY2l0eTtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMTAwbXM7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSk7XG5cbiAgJi5zdGFydCB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG5cbiAgJi5lbmQge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC44KTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG5gO1xuXG5pbnRlcmZhY2UgUHJvcHMgZXh0ZW5kcyBCb3hQcm9wcyB7XG4gIC8qKiDjg5zjgr/jg7Pjga7lhoXlrrkgKi9cbiAgbGFiZWw6IFJlYWN0LlJlYWN0Tm9kZTtcbiAgLyoqIOWGheWuueOBruODquOCueODiCAqL1xuICBjaGlsZHJlbj86IFJlYWN0LlJlYWN0Tm9kZSB8IFJlYWN0LlJlYWN0Tm9kZTtcbiAgLyoqIOWPs+OBruWfuua6luOBp+ODquOCueODiOOCkuihqOekuuOBmeOCiyAqL1xuICByaWdodD86IGJvb2xlYW47XG4gIC8qKiDlkLnjgY3lh7rjgZfjgYzooajnpLrjgZXjgozjgovloLTmiYAgKi9cbiAgcG9zaXRpb24/OiAndG9wLWxlZnQnIHwgJ3RvcCcgfCAndG9wLXJpZ2h0JyB8ICdib3R0b20tbGVmdCcgfCAnYm90dG9tJyB8ICdib3R0b20tcmlnaHQnO1xuICAvKiog44Kr44K544K/44OgQ1NT5a6a576pICovXG4gIGNzcz86IENTU1R5cGU7XG59XG5cbmludGVyZmFjZSBTdGF0ZSB7XG4gIHNob3c6IGJvb2xlYW47XG4gIHN0eWxlOiBhbnk7XG59XG5cbmZ1bmN0aW9uIGdldFBvc2l0aW9uKHBvc2l0aW9uPzogYW55KSB7XG4gIHN3aXRjaCAocG9zaXRpb24pIHtcbiAgICBjYXNlICd0b3AtbGVmdCc6IHtcbiAgICAgIHJldHVybiB7IHRvcDogMCwgbGVmdDogMCwgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgtMTAwJSknIH07XG4gICAgfVxuICAgIGNhc2UgJ3RvcC1yaWdodCc6IHtcbiAgICAgIHJldHVybiB7IHRvcDogMCwgcmlnaHQ6IDAsIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoLTEwMCUpJyB9O1xuICAgIH1cbiAgICBjYXNlICd0b3AnOiB7XG4gICAgICByZXR1cm4geyB0b3A6ICAwLCBsZWZ0OiAnNTAlJywgdHJhbnNmb3JtOiAndHJhbnNsYXRlKC01MCUsIC0xMDAlKScgfTtcbiAgICB9XG4gICAgY2FzZSAnYm90dG9tLWxlZnQnOiB7XG4gICAgICByZXR1cm4geyBib3R0b206IDAsIGxlZnQ6IDAsIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoMTAwJSknIH07XG4gICAgfVxuICAgIGNhc2UgJ2JvdHRvbS1yaWdodCc6IHtcbiAgICAgIHJldHVybiB7IGJvdHRvbTogMCwgcmlnaHQ6IDAsIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoMTAwJSknIH07XG4gICAgfVxuICAgIGNhc2UgJ2JvdHRvbSc6IHtcbiAgICAgIHJldHVybiB7IGJvdHRvbTogMCwgbGVmdDogJzUwJScsIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZSgtNTAlLCAxMDAlKScgfTtcbiAgICB9XG4gICAgZGVmYXVsdDoge1xuICAgICAgcmV0dXJuIHsgdG9wOiAwLCBsZWZ0OiAwLCB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKDEwMCUpJyB9O1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb3BvdmVyIGV4dGVuZHMgQ29tcG9uZW50PFByb3BzLCBTdGF0ZT4ge1xuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIHBvc2l0aW9uOiAnYm90dG9tLWxlZnQnLFxuICAgIGNvbG9yOiAnd2hpdGUnLFxuICAgIHN0eWxlOiB7fSxcbiAgfTtcblxuICBzdGF0ZSA9IHsgc2hvdzogZmFsc2UsIHN0eWxlOiB7fSB9O1xuXG4gIHNob3VsZENvbXBvbmVudFVwZGF0ZShwcm9wczogUHJvcHMsIHN0YXRlOiBTdGF0ZSkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlLnNob3cgIT09IHN0YXRlLnNob3cgfHwgdGhpcy5wcm9wcy5sYWJlbCAhPT0gcHJvcHMubGFiZWw7XG4gIH1cblxuICBvcGVuRHJvcGRvd24gPSAoKSA9PiB7XG4gICAgaWYgKHRoaXMuc3RhdGUuc2hvdykgcmV0dXJuO1xuXG4gICAgY29uc3Qgc3R5bGUgPSBnZXRQb3NpdGlvbih0aGlzLnByb3BzLnBvc2l0aW9uKTtcbiAgICB0aGlzLnNldFN0YXRlKHsgc3R5bGUsIHNob3c6IHRydWUgfSk7XG4gIH1cblxuICBjbG9zZURyb3Bkb3duID0gKCkgPT4ge1xuICAgIGlmICh0aGlzLnN0YXRlLnNob3cpIHRoaXMuc2V0U3RhdGUoeyBzaG93OiBmYWxzZSB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGxhYmVsLCBjaGlsZHJlbiwgc3R5bGUsIGNzcywgLi4ucmVzdCB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IHNob3cgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgdG9vbHRpcFN0eWxlID0geyAuLi5zdHlsZSwgLi4udGhpcy5zdGF0ZS5zdHlsZSB9O1xuICAgIHJldHVybiAoXG4gICAgICA8V3JhcHBlclxuICAgICAgICB0YWJJbmRleD17MH1cbiAgICAgICAgcm9sZT1cImJ1dHRvblwiXG4gICAgICAgIG9uRm9jdXM9e3RoaXMub3BlbkRyb3Bkb3dufVxuICAgICAgICBvbkJsdXI9e3RoaXMuY2xvc2VEcm9wZG93bn1cbiAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogJ2Jsb2NrJywgcG9zaXRpb246ICdyZWxhdGl2ZScgfX1cbiAgICAgICAgY3NzPXtjc3N9XG4gICAgICA+XG4gICAgICAgIHtsYWJlbH1cbiAgICAgICAgPENTU1RyYW5zaXRpb25cbiAgICAgICAgICBjbGFzc05hbWVzPXt7XG4gICAgICAgICAgICBhcHBlYXI6ICdzdGFydCcsXG4gICAgICAgICAgICBlbnRlckRvbmU6ICdzdGFydCcsXG4gICAgICAgICAgICBleGl0OiAnZW5kJyxcbiAgICAgICAgICB9fVxuICAgICAgICAgIGluPXtzaG93fVxuICAgICAgICAgIHRpbWVvdXQ9ezE1MH1cbiAgICAgICAgICB1bm1vdW50T25FeGl0XG4gICAgICAgID5cbiAgICAgICAgICA8VG9vbHRpcCByb2xlPVwidG9vbHRpcFwiIHN0eWxlPXt0b29sdGlwU3R5bGV9IHsuLi5yZXN0fT5cbiAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgICA8L1Rvb2x0aXA+XG4gICAgICAgIDwvQ1NTVHJhbnNpdGlvbj5cbiAgICAgIDwvV3JhcHBlcj5cbiAgICApO1xuICB9XG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCwgSFRNTEF0dHJpYnV0ZXMsIEZyYWdtZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY3JlYXRlUG9ydGFsIH0gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBDU1NUcmFuc2l0aW9uIGZyb20gJ3JlYWN0LXRyYW5zaXRpb24tZ3JvdXAvQ1NTVHJhbnNpdGlvbic7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBCb3ggZnJvbSAnLi4vQm94JztcbmltcG9ydCBDb2wgZnJvbSAnLi4vR3JpZC9Db2wnO1xuaW1wb3J0IHsgQ29sb3JUeXBlLCBDb2xTaXplVHlwZSwgQ1NTVHlwZSB9IGZyb20gJy4uLy4uL3R5cGVzJztcblxuY29uc3QgRVNDX0tFWSA9IDI3O1xuXG5jb25zdCBXcmFwcGVyID0gc3R5bGVkLmRpdjx7IGNzcz86IENTU1R5cGUsIHNoYWRvd0NvbG9yPzogc3RyaW5nIH0+YFxuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgei1pbmRleDogOTk5NztcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBhZGRpbmc6IDAuNzVyZW07XG5cbiAgLnYtbW9kYWwtYm9keSB7XG4gICAgei1pbmRleDogOTk5OTtcbiAgICBtYXJnaW46IDA7XG4gICAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybSwgb3BhY2l0eTtcbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiB0cmFuc2Zvcm0sIG9wYWNpdHk7XG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKTtcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAyMDBtcztcbiAgfVxuXG4gICYuZmFkZS1lbnRlciA+IC52LW1vZGFsLWJvZHkge1xuICAgIG9wYWNpdHk6IDAuMDE7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjgpO1xuICB9XG4gICYuZmFkZS1lbnRlci1hY3RpdmUgPiAudi1tb2RhbC1ib2R5IHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIH1cbiAgJi5mYWRlLWV4aXQgPiAudi1tb2RhbC1ib2R5IHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIH1cbiAgJi5mYWRlLWV4aXQtYWN0aXZlID4gLnYtbW9kYWwtYm9keSB7XG4gICAgb3BhY2l0eTogMC4wMTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOCk7XG4gIH1cblxuICAudi1tb2RhbC1zaGFkb3cge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICB0b3A6IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHsoeyBzaGFkb3dDb2xvciB9KSA9PiBzaGFkb3dDb2xvciB8fCAndHJhbnNwYXJlbnQnfTtcbiAgfVxuXG4gICR7KHsgY3NzIH0pID0+IGNzcyB8fCB7fX1cbmA7XG5cbmludGVyZmFjZSBQcm9wcyBleHRlbmRzIEhUTUxBdHRyaWJ1dGVzPEhUTUxEaXZFbGVtZW50PiB7XG4gIC8qKiDjg5jjg4Pjg4Djg7zjga7jgr/jgqTjg4jjg6vmlofoqIAgKi9cbiAgdGl0bGU/OiBhbnk7XG4gIC8qKiAxfjEy44Gu44Oi44O844OA44Or44K144Kk44K6ICovXG4gIHNpemU/OiBDb2xTaXplVHlwZTtcbiAgLyoqIHRydWXjga7loLTlkIjjgIHjg6Ljg7zjg4Djg6vjgpLooajnpLrjgZfjgb7jgZnjgIIgKi9cbiAgc2hvdz86IGJvb2xlYW47XG4gIC8qKiDjg6Ljg7zjg4Djg6vjga5ib2R544Gr5YWl44KM44KL5YaF5a65ICovXG4gIGNoaWxkcmVuPzogYW55O1xuICAvKiog44Oi44O844OA44Or44GuZm9vdGVy44Gr5YWl44KM44KL5YaF5a65ICovXG4gIGZvb3Rlcj86IGFueTtcbiAgLyoqIOODouODvOODgOODq+OBruiJsiAqL1xuICBjb2xvcj86IENvbG9yVHlwZTtcbiAgLyoqIOODouODvOODgOODq+OCkumWieOBmOOCi+WHpueQhiAqL1xuICBjbG9zZU1vZGFsOiAoKSA9PiB2b2lkO1xuICAvKiog44Kq44O844OQ44O844Os44Kk44Gu44Kv44Oq44OD44Kv44Gn44Oi44O844OA44Or44Kv44Ot44O844K6ICovXG4gIGNsb3NlT25PdmVybGF5PzogYm9vbGVhbjtcbiAgLyoqIGVzY+ODnOOCv+ODs+OBp+OCr+ODreODvOOCuiAqL1xuICBjbG9zZU9uRXNjPzogYm9vbGVhbjtcbiAgLyoqIG92ZXJsYXnjga7og4zmma/jga7oqK3lrpogKi9cbiAgc2hhZG93Q29sb3I/OiBzdHJpbmc7XG4gIC8qKiDjg6Ljg7zjg4Djg6vlpJbjgavooajnpLrjgZnjgotFbGVtZW50cyAqL1xuICBleHRlcm5hbD86IGFueTtcbiAgLyoqIOOCq+OCueOCv+ODoENTU+Wumue+qSAqL1xuICBjc3M/OiBDU1NUeXBlO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb2RhbCBleHRlbmRzIFB1cmVDb21wb25lbnQ8UHJvcHM+IHtcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBzaG93OiBmYWxzZSxcbiAgICBjb2xvcjogJ3doaXRlJyxcbiAgICBzaXplOiA2LFxuICAgIHNoYWRvd0NvbG9yOiAncmdiYSgxMCwxMCwxMCwuODYpJyxcbiAgfTtcblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICBpZiAodGhpcy5lbGVtZW50KSB7XG4gICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHRoaXMuZWxlbWVudCk7XG4gICAgfVxuICB9XG5cbiAgb25LZXlEb3duID0gKGU6IGFueSkgPT4ge1xuICAgIGlmICh0aGlzLnByb3BzLmNsb3NlT25Fc2MgJiYgZS5rZXlDb2RlID09PSBFU0NfS0VZICYmIHRoaXMucHJvcHMuY2xvc2VNb2RhbCkge1xuICAgICAgdGhpcy5wcm9wcy5jbG9zZU1vZGFsKCk7XG4gICAgfVxuICB9XG5cbiAgb25DbGlja092ZXJsYXkgPSAoKSA9PiB7XG4gICAgaWYgKHRoaXMucHJvcHMuY2xvc2VPbk92ZXJsYXkgJiYgdGhpcy5wcm9wcy5jbG9zZU1vZGFsKSB7XG4gICAgICB0aGlzLnByb3BzLmNsb3NlTW9kYWwoKTtcbiAgICB9XG4gIH1cblxuICBlbGVtZW50PzogSFRNTERpdkVsZW1lbnQ7XG4gIHNob3VsZENsb3NlOiBib29sZWFuIHwgbnVsbCA9IG51bGw7XG5cbiAgcmVuZGVyKCk6IFJlYWN0LlJlYWN0UG9ydGFsIHwgbnVsbCB7XG4gICAgaWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJ1bmRlZmluZWRcIiAmJiAhdGhpcy5lbGVtZW50KSB7XG4gICAgICB0aGlzLmVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5lbGVtZW50KTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5lbGVtZW50KSB7XG4gICAgICBjb25zdCB7XG4gICAgICAgIHNob3csIHNpemUsIHRpdGxlLCBjaGlsZHJlbiwgZm9vdGVyLCBjb2xvciwgb25DbGljaywgLi4ucmVzdFxuICAgICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgIHJldHVybiBjcmVhdGVQb3J0YWwoKFxuICAgICAgICA8Q1NTVHJhbnNpdGlvblxuICAgICAgICAgIGNsYXNzTmFtZXM9XCJmYWRlXCJcbiAgICAgICAgICB0aW1lb3V0PXsyMDB9XG4gICAgICAgICAgaW49e3Nob3d9XG4gICAgICAgICAgdW5tb3VudE9uRXhpdFxuICAgICAgICA+XG4gICAgICAgICAgPFdyYXBwZXIgcm9sZT1cImRvY3VtZW50XCIgey4uLnJlc3R9PlxuICAgICAgICAgICAgPENvbCBjbGFzc05hbWU9XCJ2LW1vZGFsLWJvZHlcIiBzaXplPXtzaXplfSBhdXRvIHJvbGU9XCJkaWFsb2dcIj5cbiAgICAgICAgICAgICAgPEJveCBjb2xvcj17Y29sb3J9PlxuICAgICAgICAgICAgICAgIHt0aXRsZSA/IHRpdGxlIDogbnVsbH1cbiAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgICAgICAgICAge2Zvb3RlciA/IGZvb3RlciA6IG51bGx9XG4gICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICB7dGhpcy5wcm9wcy5leHRlcm5hbH1cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidi1tb2RhbC1zaGFkb3dcIiBvbkNsaWNrPXt0aGlzLm9uQ2xpY2tPdmVybGF5fSAvPlxuICAgICAgICAgIDwvV3JhcHBlcj5cbiAgICAgICAgPC9DU1NUcmFuc2l0aW9uPlxuICAgICAgKSwgdGhpcy5lbGVtZW50KTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5nZXRDaGlsZE1hcHBpbmcgPSBnZXRDaGlsZE1hcHBpbmc7XG5leHBvcnRzLm1lcmdlQ2hpbGRNYXBwaW5ncyA9IG1lcmdlQ2hpbGRNYXBwaW5ncztcbmV4cG9ydHMuZ2V0SW5pdGlhbENoaWxkTWFwcGluZyA9IGdldEluaXRpYWxDaGlsZE1hcHBpbmc7XG5leHBvcnRzLmdldE5leHRDaGlsZE1hcHBpbmcgPSBnZXROZXh0Q2hpbGRNYXBwaW5nO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZShcInJlYWN0XCIpO1xuXG4vKipcbiAqIEdpdmVuIGB0aGlzLnByb3BzLmNoaWxkcmVuYCwgcmV0dXJuIGFuIG9iamVjdCBtYXBwaW5nIGtleSB0byBjaGlsZC5cbiAqXG4gKiBAcGFyYW0geyp9IGNoaWxkcmVuIGB0aGlzLnByb3BzLmNoaWxkcmVuYFxuICogQHJldHVybiB7b2JqZWN0fSBNYXBwaW5nIG9mIGtleSB0byBjaGlsZFxuICovXG5mdW5jdGlvbiBnZXRDaGlsZE1hcHBpbmcoY2hpbGRyZW4sIG1hcEZuKSB7XG4gIHZhciBtYXBwZXIgPSBmdW5jdGlvbiBtYXBwZXIoY2hpbGQpIHtcbiAgICByZXR1cm4gbWFwRm4gJiYgKDAsIF9yZWFjdC5pc1ZhbGlkRWxlbWVudCkoY2hpbGQpID8gbWFwRm4oY2hpbGQpIDogY2hpbGQ7XG4gIH07XG5cbiAgdmFyIHJlc3VsdCA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gIGlmIChjaGlsZHJlbikgX3JlYWN0LkNoaWxkcmVuLm1hcChjaGlsZHJlbiwgZnVuY3Rpb24gKGMpIHtcbiAgICByZXR1cm4gYztcbiAgfSkuZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAvLyBydW4gdGhlIG1hcCBmdW5jdGlvbiBoZXJlIGluc3RlYWQgc28gdGhhdCB0aGUga2V5IGlzIHRoZSBjb21wdXRlZCBvbmVcbiAgICByZXN1bHRbY2hpbGQua2V5XSA9IG1hcHBlcihjaGlsZCk7XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufVxuLyoqXG4gKiBXaGVuIHlvdSdyZSBhZGRpbmcgb3IgcmVtb3ZpbmcgY2hpbGRyZW4gc29tZSBtYXkgYmUgYWRkZWQgb3IgcmVtb3ZlZCBpbiB0aGVcbiAqIHNhbWUgcmVuZGVyIHBhc3MuIFdlIHdhbnQgdG8gc2hvdyAqYm90aCogc2luY2Ugd2Ugd2FudCB0byBzaW11bHRhbmVvdXNseVxuICogYW5pbWF0ZSBlbGVtZW50cyBpbiBhbmQgb3V0LiBUaGlzIGZ1bmN0aW9uIHRha2VzIGEgcHJldmlvdXMgc2V0IG9mIGtleXNcbiAqIGFuZCBhIG5ldyBzZXQgb2Yga2V5cyBhbmQgbWVyZ2VzIHRoZW0gd2l0aCBpdHMgYmVzdCBndWVzcyBvZiB0aGUgY29ycmVjdFxuICogb3JkZXJpbmcuIEluIHRoZSBmdXR1cmUgd2UgbWF5IGV4cG9zZSBzb21lIG9mIHRoZSB1dGlsaXRpZXMgaW5cbiAqIFJlYWN0TXVsdGlDaGlsZCB0byBtYWtlIHRoaXMgZWFzeSwgYnV0IGZvciBub3cgUmVhY3QgaXRzZWxmIGRvZXMgbm90XG4gKiBkaXJlY3RseSBoYXZlIHRoaXMgY29uY2VwdCBvZiB0aGUgdW5pb24gb2YgcHJldkNoaWxkcmVuIGFuZCBuZXh0Q2hpbGRyZW5cbiAqIHNvIHdlIGltcGxlbWVudCBpdCBoZXJlLlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBwcmV2IHByZXYgY2hpbGRyZW4gYXMgcmV0dXJuZWQgZnJvbVxuICogYFJlYWN0VHJhbnNpdGlvbkNoaWxkTWFwcGluZy5nZXRDaGlsZE1hcHBpbmcoKWAuXG4gKiBAcGFyYW0ge29iamVjdH0gbmV4dCBuZXh0IGNoaWxkcmVuIGFzIHJldHVybmVkIGZyb21cbiAqIGBSZWFjdFRyYW5zaXRpb25DaGlsZE1hcHBpbmcuZ2V0Q2hpbGRNYXBwaW5nKClgLlxuICogQHJldHVybiB7b2JqZWN0fSBhIGtleSBzZXQgdGhhdCBjb250YWlucyBhbGwga2V5cyBpbiBgcHJldmAgYW5kIGFsbCBrZXlzXG4gKiBpbiBgbmV4dGAgaW4gYSByZWFzb25hYmxlIG9yZGVyLlxuICovXG5cblxuZnVuY3Rpb24gbWVyZ2VDaGlsZE1hcHBpbmdzKHByZXYsIG5leHQpIHtcbiAgcHJldiA9IHByZXYgfHwge307XG4gIG5leHQgPSBuZXh0IHx8IHt9O1xuXG4gIGZ1bmN0aW9uIGdldFZhbHVlRm9yS2V5KGtleSkge1xuICAgIHJldHVybiBrZXkgaW4gbmV4dCA/IG5leHRba2V5XSA6IHByZXZba2V5XTtcbiAgfSAvLyBGb3IgZWFjaCBrZXkgb2YgYG5leHRgLCB0aGUgbGlzdCBvZiBrZXlzIHRvIGluc2VydCBiZWZvcmUgdGhhdCBrZXkgaW5cbiAgLy8gdGhlIGNvbWJpbmVkIGxpc3RcblxuXG4gIHZhciBuZXh0S2V5c1BlbmRpbmcgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICB2YXIgcGVuZGluZ0tleXMgPSBbXTtcblxuICBmb3IgKHZhciBwcmV2S2V5IGluIHByZXYpIHtcbiAgICBpZiAocHJldktleSBpbiBuZXh0KSB7XG4gICAgICBpZiAocGVuZGluZ0tleXMubGVuZ3RoKSB7XG4gICAgICAgIG5leHRLZXlzUGVuZGluZ1twcmV2S2V5XSA9IHBlbmRpbmdLZXlzO1xuICAgICAgICBwZW5kaW5nS2V5cyA9IFtdO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBwZW5kaW5nS2V5cy5wdXNoKHByZXZLZXkpO1xuICAgIH1cbiAgfVxuXG4gIHZhciBpO1xuICB2YXIgY2hpbGRNYXBwaW5nID0ge307XG5cbiAgZm9yICh2YXIgbmV4dEtleSBpbiBuZXh0KSB7XG4gICAgaWYgKG5leHRLZXlzUGVuZGluZ1tuZXh0S2V5XSkge1xuICAgICAgZm9yIChpID0gMDsgaSA8IG5leHRLZXlzUGVuZGluZ1tuZXh0S2V5XS5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgcGVuZGluZ05leHRLZXkgPSBuZXh0S2V5c1BlbmRpbmdbbmV4dEtleV1baV07XG4gICAgICAgIGNoaWxkTWFwcGluZ1tuZXh0S2V5c1BlbmRpbmdbbmV4dEtleV1baV1dID0gZ2V0VmFsdWVGb3JLZXkocGVuZGluZ05leHRLZXkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNoaWxkTWFwcGluZ1tuZXh0S2V5XSA9IGdldFZhbHVlRm9yS2V5KG5leHRLZXkpO1xuICB9IC8vIEZpbmFsbHksIGFkZCB0aGUga2V5cyB3aGljaCBkaWRuJ3QgYXBwZWFyIGJlZm9yZSBhbnkga2V5IGluIGBuZXh0YFxuXG5cbiAgZm9yIChpID0gMDsgaSA8IHBlbmRpbmdLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgY2hpbGRNYXBwaW5nW3BlbmRpbmdLZXlzW2ldXSA9IGdldFZhbHVlRm9yS2V5KHBlbmRpbmdLZXlzW2ldKTtcbiAgfVxuXG4gIHJldHVybiBjaGlsZE1hcHBpbmc7XG59XG5cbmZ1bmN0aW9uIGdldFByb3AoY2hpbGQsIHByb3AsIHByb3BzKSB7XG4gIHJldHVybiBwcm9wc1twcm9wXSAhPSBudWxsID8gcHJvcHNbcHJvcF0gOiBjaGlsZC5wcm9wc1twcm9wXTtcbn1cblxuZnVuY3Rpb24gZ2V0SW5pdGlhbENoaWxkTWFwcGluZyhwcm9wcywgb25FeGl0ZWQpIHtcbiAgcmV0dXJuIGdldENoaWxkTWFwcGluZyhwcm9wcy5jaGlsZHJlbiwgZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgcmV0dXJuICgwLCBfcmVhY3QuY2xvbmVFbGVtZW50KShjaGlsZCwge1xuICAgICAgb25FeGl0ZWQ6IG9uRXhpdGVkLmJpbmQobnVsbCwgY2hpbGQpLFxuICAgICAgaW46IHRydWUsXG4gICAgICBhcHBlYXI6IGdldFByb3AoY2hpbGQsICdhcHBlYXInLCBwcm9wcyksXG4gICAgICBlbnRlcjogZ2V0UHJvcChjaGlsZCwgJ2VudGVyJywgcHJvcHMpLFxuICAgICAgZXhpdDogZ2V0UHJvcChjaGlsZCwgJ2V4aXQnLCBwcm9wcylcbiAgICB9KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGdldE5leHRDaGlsZE1hcHBpbmcobmV4dFByb3BzLCBwcmV2Q2hpbGRNYXBwaW5nLCBvbkV4aXRlZCkge1xuICB2YXIgbmV4dENoaWxkTWFwcGluZyA9IGdldENoaWxkTWFwcGluZyhuZXh0UHJvcHMuY2hpbGRyZW4pO1xuICB2YXIgY2hpbGRyZW4gPSBtZXJnZUNoaWxkTWFwcGluZ3MocHJldkNoaWxkTWFwcGluZywgbmV4dENoaWxkTWFwcGluZyk7XG4gIE9iamVjdC5rZXlzKGNoaWxkcmVuKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICB2YXIgY2hpbGQgPSBjaGlsZHJlbltrZXldO1xuICAgIGlmICghKDAsIF9yZWFjdC5pc1ZhbGlkRWxlbWVudCkoY2hpbGQpKSByZXR1cm47XG4gICAgdmFyIGhhc1ByZXYgPSBrZXkgaW4gcHJldkNoaWxkTWFwcGluZztcbiAgICB2YXIgaGFzTmV4dCA9IGtleSBpbiBuZXh0Q2hpbGRNYXBwaW5nO1xuICAgIHZhciBwcmV2Q2hpbGQgPSBwcmV2Q2hpbGRNYXBwaW5nW2tleV07XG4gICAgdmFyIGlzTGVhdmluZyA9ICgwLCBfcmVhY3QuaXNWYWxpZEVsZW1lbnQpKHByZXZDaGlsZCkgJiYgIXByZXZDaGlsZC5wcm9wcy5pbjsgLy8gaXRlbSBpcyBuZXcgKGVudGVyaW5nKVxuXG4gICAgaWYgKGhhc05leHQgJiYgKCFoYXNQcmV2IHx8IGlzTGVhdmluZykpIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdlbnRlcmluZycsIGtleSlcbiAgICAgIGNoaWxkcmVuW2tleV0gPSAoMCwgX3JlYWN0LmNsb25lRWxlbWVudCkoY2hpbGQsIHtcbiAgICAgICAgb25FeGl0ZWQ6IG9uRXhpdGVkLmJpbmQobnVsbCwgY2hpbGQpLFxuICAgICAgICBpbjogdHJ1ZSxcbiAgICAgICAgZXhpdDogZ2V0UHJvcChjaGlsZCwgJ2V4aXQnLCBuZXh0UHJvcHMpLFxuICAgICAgICBlbnRlcjogZ2V0UHJvcChjaGlsZCwgJ2VudGVyJywgbmV4dFByb3BzKVxuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmICghaGFzTmV4dCAmJiBoYXNQcmV2ICYmICFpc0xlYXZpbmcpIHtcbiAgICAgIC8vIGl0ZW0gaXMgb2xkIChleGl0aW5nKVxuICAgICAgLy8gY29uc29sZS5sb2coJ2xlYXZpbmcnLCBrZXkpXG4gICAgICBjaGlsZHJlbltrZXldID0gKDAsIF9yZWFjdC5jbG9uZUVsZW1lbnQpKGNoaWxkLCB7XG4gICAgICAgIGluOiBmYWxzZVxuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChoYXNOZXh0ICYmIGhhc1ByZXYgJiYgKDAsIF9yZWFjdC5pc1ZhbGlkRWxlbWVudCkocHJldkNoaWxkKSkge1xuICAgICAgLy8gaXRlbSBoYXNuJ3QgY2hhbmdlZCB0cmFuc2l0aW9uIHN0YXRlc1xuICAgICAgLy8gY29weSBvdmVyIHRoZSBsYXN0IHRyYW5zaXRpb24gcHJvcHM7XG4gICAgICAvLyBjb25zb2xlLmxvZygndW5jaGFuZ2VkJywga2V5KVxuICAgICAgY2hpbGRyZW5ba2V5XSA9ICgwLCBfcmVhY3QuY2xvbmVFbGVtZW50KShjaGlsZCwge1xuICAgICAgICBvbkV4aXRlZDogb25FeGl0ZWQuYmluZChudWxsLCBjaGlsZCksXG4gICAgICAgIGluOiBwcmV2Q2hpbGQucHJvcHMuaW4sXG4gICAgICAgIGV4aXQ6IGdldFByb3AoY2hpbGQsICdleGl0JywgbmV4dFByb3BzKSxcbiAgICAgICAgZW50ZXI6IGdldFByb3AoY2hpbGQsICdlbnRlcicsIG5leHRQcm9wcylcbiAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBjaGlsZHJlbjtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIF9wcm9wVHlwZXMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpKTtcblxudmFyIF9yZWFjdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcblxudmFyIF9yZWFjdExpZmVjeWNsZXNDb21wYXQgPSByZXF1aXJlKFwicmVhY3QtbGlmZWN5Y2xlcy1jb21wYXRcIik7XG5cbnZhciBfQ2hpbGRNYXBwaW5nID0gcmVxdWlyZShcIi4vdXRpbHMvQ2hpbGRNYXBwaW5nXCIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKSB7IGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9OyB2YXIgdGFyZ2V0ID0ge307IHZhciBzb3VyY2VLZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTsgdmFyIGtleSwgaTsgZm9yIChpID0gMDsgaSA8IHNvdXJjZUtleXMubGVuZ3RoOyBpKyspIHsga2V5ID0gc291cmNlS2V5c1tpXTsgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIF9leHRlbmRzKCkgeyBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07IHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0c0xvb3NlKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcy5wcm90b3R5cGUpOyBzdWJDbGFzcy5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBzdWJDbGFzczsgc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHsgaWYgKHNlbGYgPT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIHNlbGY7IH1cblxudmFyIHZhbHVlcyA9IE9iamVjdC52YWx1ZXMgfHwgZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4gT2JqZWN0LmtleXMob2JqKS5tYXAoZnVuY3Rpb24gKGspIHtcbiAgICByZXR1cm4gb2JqW2tdO1xuICB9KTtcbn07XG5cbnZhciBkZWZhdWx0UHJvcHMgPSB7XG4gIGNvbXBvbmVudDogJ2RpdicsXG4gIGNoaWxkRmFjdG9yeTogZnVuY3Rpb24gY2hpbGRGYWN0b3J5KGNoaWxkKSB7XG4gICAgcmV0dXJuIGNoaWxkO1xuICB9XG4gIC8qKlxuICAgKiBUaGUgYDxUcmFuc2l0aW9uR3JvdXA+YCBjb21wb25lbnQgbWFuYWdlcyBhIHNldCBvZiB0cmFuc2l0aW9uIGNvbXBvbmVudHNcbiAgICogKGA8VHJhbnNpdGlvbj5gIGFuZCBgPENTU1RyYW5zaXRpb24+YCkgaW4gYSBsaXN0LiBMaWtlIHdpdGggdGhlIHRyYW5zaXRpb25cbiAgICogY29tcG9uZW50cywgYDxUcmFuc2l0aW9uR3JvdXA+YCBpcyBhIHN0YXRlIG1hY2hpbmUgZm9yIG1hbmFnaW5nIHRoZSBtb3VudGluZ1xuICAgKiBhbmQgdW5tb3VudGluZyBvZiBjb21wb25lbnRzIG92ZXIgdGltZS5cbiAgICpcbiAgICogQ29uc2lkZXIgdGhlIGV4YW1wbGUgYmVsb3cuIEFzIGl0ZW1zIGFyZSByZW1vdmVkIG9yIGFkZGVkIHRvIHRoZSBUb2RvTGlzdCB0aGVcbiAgICogYGluYCBwcm9wIGlzIHRvZ2dsZWQgYXV0b21hdGljYWxseSBieSB0aGUgYDxUcmFuc2l0aW9uR3JvdXA+YC5cbiAgICpcbiAgICogTm90ZSB0aGF0IGA8VHJhbnNpdGlvbkdyb3VwPmAgIGRvZXMgbm90IGRlZmluZSBhbnkgYW5pbWF0aW9uIGJlaGF2aW9yIVxuICAgKiBFeGFjdGx5IF9ob3dfIGEgbGlzdCBpdGVtIGFuaW1hdGVzIGlzIHVwIHRvIHRoZSBpbmRpdmlkdWFsIHRyYW5zaXRpb25cbiAgICogY29tcG9uZW50LiBUaGlzIG1lYW5zIHlvdSBjYW4gbWl4IGFuZCBtYXRjaCBhbmltYXRpb25zIGFjcm9zcyBkaWZmZXJlbnQgbGlzdFxuICAgKiBpdGVtcy5cbiAgICovXG5cbn07XG5cbnZhciBUcmFuc2l0aW9uR3JvdXAgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzTG9vc2UoVHJhbnNpdGlvbkdyb3VwLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBUcmFuc2l0aW9uR3JvdXAocHJvcHMsIGNvbnRleHQpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfdGhpcyA9IF9SZWFjdCRDb21wb25lbnQuY2FsbCh0aGlzLCBwcm9wcywgY29udGV4dCkgfHwgdGhpcztcblxuICAgIHZhciBoYW5kbGVFeGl0ZWQgPSBfdGhpcy5oYW5kbGVFeGl0ZWQuYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKSk7IC8vIEluaXRpYWwgY2hpbGRyZW4gc2hvdWxkIGFsbCBiZSBlbnRlcmluZywgZGVwZW5kZW50IG9uIGFwcGVhclxuXG5cbiAgICBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGhhbmRsZUV4aXRlZDogaGFuZGxlRXhpdGVkLFxuICAgICAgZmlyc3RSZW5kZXI6IHRydWVcbiAgICB9O1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBUcmFuc2l0aW9uR3JvdXAucHJvdG90eXBlO1xuXG4gIF9wcm90by5nZXRDaGlsZENvbnRleHQgPSBmdW5jdGlvbiBnZXRDaGlsZENvbnRleHQoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRyYW5zaXRpb25Hcm91cDoge1xuICAgICAgICBpc01vdW50aW5nOiAhdGhpcy5hcHBlYXJlZFxuICAgICAgfVxuICAgIH07XG4gIH07XG5cbiAgX3Byb3RvLmNvbXBvbmVudERpZE1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5hcHBlYXJlZCA9IHRydWU7XG4gICAgdGhpcy5tb3VudGVkID0gdHJ1ZTtcbiAgfTtcblxuICBfcHJvdG8uY29tcG9uZW50V2lsbFVubW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLm1vdW50ZWQgPSBmYWxzZTtcbiAgfTtcblxuICBUcmFuc2l0aW9uR3JvdXAuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzID0gZnVuY3Rpb24gZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzKG5leHRQcm9wcywgX3JlZikge1xuICAgIHZhciBwcmV2Q2hpbGRNYXBwaW5nID0gX3JlZi5jaGlsZHJlbixcbiAgICAgICAgaGFuZGxlRXhpdGVkID0gX3JlZi5oYW5kbGVFeGl0ZWQsXG4gICAgICAgIGZpcnN0UmVuZGVyID0gX3JlZi5maXJzdFJlbmRlcjtcbiAgICByZXR1cm4ge1xuICAgICAgY2hpbGRyZW46IGZpcnN0UmVuZGVyID8gKDAsIF9DaGlsZE1hcHBpbmcuZ2V0SW5pdGlhbENoaWxkTWFwcGluZykobmV4dFByb3BzLCBoYW5kbGVFeGl0ZWQpIDogKDAsIF9DaGlsZE1hcHBpbmcuZ2V0TmV4dENoaWxkTWFwcGluZykobmV4dFByb3BzLCBwcmV2Q2hpbGRNYXBwaW5nLCBoYW5kbGVFeGl0ZWQpLFxuICAgICAgZmlyc3RSZW5kZXI6IGZhbHNlXG4gICAgfTtcbiAgfTtcblxuICBfcHJvdG8uaGFuZGxlRXhpdGVkID0gZnVuY3Rpb24gaGFuZGxlRXhpdGVkKGNoaWxkLCBub2RlKSB7XG4gICAgdmFyIGN1cnJlbnRDaGlsZE1hcHBpbmcgPSAoMCwgX0NoaWxkTWFwcGluZy5nZXRDaGlsZE1hcHBpbmcpKHRoaXMucHJvcHMuY2hpbGRyZW4pO1xuICAgIGlmIChjaGlsZC5rZXkgaW4gY3VycmVudENoaWxkTWFwcGluZykgcmV0dXJuO1xuXG4gICAgaWYgKGNoaWxkLnByb3BzLm9uRXhpdGVkKSB7XG4gICAgICBjaGlsZC5wcm9wcy5vbkV4aXRlZChub2RlKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5tb3VudGVkKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKGZ1bmN0aW9uIChzdGF0ZSkge1xuICAgICAgICB2YXIgY2hpbGRyZW4gPSBfZXh0ZW5kcyh7fSwgc3RhdGUuY2hpbGRyZW4pO1xuXG4gICAgICAgIGRlbGV0ZSBjaGlsZHJlbltjaGlsZC5rZXldO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGNoaWxkcmVuOiBjaGlsZHJlblxuICAgICAgICB9O1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIF90aGlzJHByb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgQ29tcG9uZW50ID0gX3RoaXMkcHJvcHMuY29tcG9uZW50LFxuICAgICAgICBjaGlsZEZhY3RvcnkgPSBfdGhpcyRwcm9wcy5jaGlsZEZhY3RvcnksXG4gICAgICAgIHByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UoX3RoaXMkcHJvcHMsIFtcImNvbXBvbmVudFwiLCBcImNoaWxkRmFjdG9yeVwiXSk7XG5cbiAgICB2YXIgY2hpbGRyZW4gPSB2YWx1ZXModGhpcy5zdGF0ZS5jaGlsZHJlbikubWFwKGNoaWxkRmFjdG9yeSk7XG4gICAgZGVsZXRlIHByb3BzLmFwcGVhcjtcbiAgICBkZWxldGUgcHJvcHMuZW50ZXI7XG4gICAgZGVsZXRlIHByb3BzLmV4aXQ7XG5cbiAgICBpZiAoQ29tcG9uZW50ID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gY2hpbGRyZW47XG4gICAgfVxuXG4gICAgcmV0dXJuIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoQ29tcG9uZW50LCBwcm9wcywgY2hpbGRyZW4pO1xuICB9O1xuXG4gIHJldHVybiBUcmFuc2l0aW9uR3JvdXA7XG59KF9yZWFjdC5kZWZhdWx0LkNvbXBvbmVudCk7XG5cblRyYW5zaXRpb25Hcm91cC5jaGlsZENvbnRleHRUeXBlcyA9IHtcbiAgdHJhbnNpdGlvbkdyb3VwOiBfcHJvcFR5cGVzLmRlZmF1bHQub2JqZWN0LmlzUmVxdWlyZWRcbn07XG5UcmFuc2l0aW9uR3JvdXAucHJvcFR5cGVzID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8ge1xuICAvKipcbiAgICogYDxUcmFuc2l0aW9uR3JvdXA+YCByZW5kZXJzIGEgYDxkaXY+YCBieSBkZWZhdWx0LiBZb3UgY2FuIGNoYW5nZSB0aGlzXG4gICAqIGJlaGF2aW9yIGJ5IHByb3ZpZGluZyBhIGBjb21wb25lbnRgIHByb3AuXG4gICAqIElmIHlvdSB1c2UgUmVhY3QgdjE2KyBhbmQgd291bGQgbGlrZSB0byBhdm9pZCBhIHdyYXBwaW5nIGA8ZGl2PmAgZWxlbWVudFxuICAgKiB5b3UgY2FuIHBhc3MgaW4gYGNvbXBvbmVudD17bnVsbH1gLiBUaGlzIGlzIHVzZWZ1bCBpZiB0aGUgd3JhcHBpbmcgZGl2XG4gICAqIGJvcmtzIHlvdXIgY3NzIHN0eWxlcy5cbiAgICovXG4gIGNvbXBvbmVudDogX3Byb3BUeXBlcy5kZWZhdWx0LmFueSxcblxuICAvKipcbiAgICogQSBzZXQgb2YgYDxUcmFuc2l0aW9uPmAgY29tcG9uZW50cywgdGhhdCBhcmUgdG9nZ2xlZCBgaW5gIGFuZCBvdXQgYXMgdGhleVxuICAgKiBsZWF2ZS4gdGhlIGA8VHJhbnNpdGlvbkdyb3VwPmAgd2lsbCBpbmplY3Qgc3BlY2lmaWMgdHJhbnNpdGlvbiBwcm9wcywgc29cbiAgICogcmVtZW1iZXIgdG8gc3ByZWFkIHRoZW0gdGhyb3VnaCBpZiB5b3UgYXJlIHdyYXBwaW5nIHRoZSBgPFRyYW5zaXRpb24+YCBhc1xuICAgKiB3aXRoIG91ciBgPEZhZGU+YCBleGFtcGxlLlxuICAgKi9cbiAgY2hpbGRyZW46IF9wcm9wVHlwZXMuZGVmYXVsdC5ub2RlLFxuXG4gIC8qKlxuICAgKiBBIGNvbnZlbmllbmNlIHByb3AgdGhhdCBlbmFibGVzIG9yIGRpc2FibGVzIGFwcGVhciBhbmltYXRpb25zXG4gICAqIGZvciBhbGwgY2hpbGRyZW4uIE5vdGUgdGhhdCBzcGVjaWZ5aW5nIHRoaXMgd2lsbCBvdmVycmlkZSBhbnkgZGVmYXVsdHMgc2V0XG4gICAqIG9uIGluZGl2aWR1YWwgY2hpbGRyZW4gVHJhbnNpdGlvbnMuXG4gICAqL1xuICBhcHBlYXI6IF9wcm9wVHlwZXMuZGVmYXVsdC5ib29sLFxuXG4gIC8qKlxuICAgKiBBIGNvbnZlbmllbmNlIHByb3AgdGhhdCBlbmFibGVzIG9yIGRpc2FibGVzIGVudGVyIGFuaW1hdGlvbnNcbiAgICogZm9yIGFsbCBjaGlsZHJlbi4gTm90ZSB0aGF0IHNwZWNpZnlpbmcgdGhpcyB3aWxsIG92ZXJyaWRlIGFueSBkZWZhdWx0cyBzZXRcbiAgICogb24gaW5kaXZpZHVhbCBjaGlsZHJlbiBUcmFuc2l0aW9ucy5cbiAgICovXG4gIGVudGVyOiBfcHJvcFR5cGVzLmRlZmF1bHQuYm9vbCxcblxuICAvKipcbiAgICogQSBjb252ZW5pZW5jZSBwcm9wIHRoYXQgZW5hYmxlcyBvciBkaXNhYmxlcyBleGl0IGFuaW1hdGlvbnNcbiAgICogZm9yIGFsbCBjaGlsZHJlbi4gTm90ZSB0aGF0IHNwZWNpZnlpbmcgdGhpcyB3aWxsIG92ZXJyaWRlIGFueSBkZWZhdWx0cyBzZXRcbiAgICogb24gaW5kaXZpZHVhbCBjaGlsZHJlbiBUcmFuc2l0aW9ucy5cbiAgICovXG4gIGV4aXQ6IF9wcm9wVHlwZXMuZGVmYXVsdC5ib29sLFxuXG4gIC8qKlxuICAgKiBZb3UgbWF5IG5lZWQgdG8gYXBwbHkgcmVhY3RpdmUgdXBkYXRlcyB0byBhIGNoaWxkIGFzIGl0IGlzIGV4aXRpbmcuXG4gICAqIFRoaXMgaXMgZ2VuZXJhbGx5IGRvbmUgYnkgdXNpbmcgYGNsb25lRWxlbWVudGAgaG93ZXZlciBpbiB0aGUgY2FzZSBvZiBhbiBleGl0aW5nXG4gICAqIGNoaWxkIHRoZSBlbGVtZW50IGhhcyBhbHJlYWR5IGJlZW4gcmVtb3ZlZCBhbmQgbm90IGFjY2Vzc2libGUgdG8gdGhlIGNvbnN1bWVyLlxuICAgKlxuICAgKiBJZiB5b3UgZG8gbmVlZCB0byB1cGRhdGUgYSBjaGlsZCBhcyBpdCBsZWF2ZXMgeW91IGNhbiBwcm92aWRlIGEgYGNoaWxkRmFjdG9yeWBcbiAgICogdG8gd3JhcCBldmVyeSBjaGlsZCwgZXZlbiB0aGUgb25lcyB0aGF0IGFyZSBsZWF2aW5nLlxuICAgKlxuICAgKiBAdHlwZSBGdW5jdGlvbihjaGlsZDogUmVhY3RFbGVtZW50KSAtPiBSZWFjdEVsZW1lbnRcbiAgICovXG4gIGNoaWxkRmFjdG9yeTogX3Byb3BUeXBlcy5kZWZhdWx0LmZ1bmNcbn0gOiB7fTtcblRyYW5zaXRpb25Hcm91cC5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHM7XG5cbnZhciBfZGVmYXVsdCA9ICgwLCBfcmVhY3RMaWZlY3ljbGVzQ29tcGF0LnBvbHlmaWxsKShUcmFuc2l0aW9uR3JvdXApO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1tcImRlZmF1bHRcIl07IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNyZWF0ZVBvcnRhbCB9IGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgQ1NTVHJhbnNpdGlvbiBmcm9tICdyZWFjdC10cmFuc2l0aW9uLWdyb3VwL0NTU1RyYW5zaXRpb24nO1xuaW1wb3J0IFRyYW5zaXRpb25Hcm91cCBmcm9tICdyZWFjdC10cmFuc2l0aW9uLWdyb3VwL1RyYW5zaXRpb25Hcm91cCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuaW1wb3J0IEJveCBmcm9tICcuLi9Cb3gnO1xuaW1wb3J0IHsgQ29sb3JUeXBlIH0gZnJvbSAnLi4vLi4vdHlwZXMnO1xuXG50eXBlIFBvc2l0aW9uVHlwZSA9ICd0b3AnIHwgJ3RvcC1sZWZ0JyB8ICd0b3AtcmlnaHQnIHwgJ2JvdHRvbScgfCAnYm90dG9tLWxlZnQnIHwgJ2JvdHRvbS1yaWdodCc7XG5cbmludGVyZmFjZSBUb2FzdFR5cGUge1xuICAvKiog6KqN6K2YSUQgKi9cbiAgaWQ6IHN0cmluZztcbiAgLyoqIOihqOekuuOBmeOCi+WGheWuuSAqL1xuICBtZXNzYWdlPzogUmVhY3QuUmVhY3ROb2RlO1xuICAvKiog6IOM5pmv44Gu6ImyICovXG4gIGNvbG9yPzogQ29sb3JUeXBlO1xuICAvKiog6KGo56S644GV44KM44KL5pmC6ZaTIG51bGzjga7loLTlkIjjga/oh6rli5XjgafplonjgZjjgonjgozjgb7jgZvjgpMgKi9cbiAgZHVyYXRpb24/OiBudW1iZXIgfCBudWxsO1xufVxuXG5pbnRlcmZhY2UgVG9hc3RQcm9wcyBleHRlbmRzIFRvYXN0VHlwZSB7XG4gIGNsZWFyOiAoKSA9PiB2b2lkO1xufVxuXG5jb25zdCBXcmFwcGVyID0gc3R5bGVkKEJveClgXG4gIHBhZGRpbmc6IDAuMzc1ZW0gMC43NWVtO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIHotaW5kZXg6IDk5OTk7XG4gIHdpZHRoOiBmaXQtY29udGVudDtcblxuICB0cmFuc2l0aW9uLXByb3BlcnR5OiB0cmFuc2Zvcm0sIG9wYWNpdHk7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSk7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDI1MG1zO1xuXG4gICYubW92ZS1lbnRlciB7XG4gICAgb3BhY2l0eTogMC4wMTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOCk7XG4gIH1cbiAgJi5tb3ZlLWVudGVyLWFjdGl2ZSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB9XG4gICYubW92ZS1leGl0IHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIH1cbiAgJi5tb3ZlLWV4aXQtYWN0aXZlIHtcbiAgICBvcGFjaXR5OiAwLjAxO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC44KTtcbiAgfVxuYDtcblxuZXhwb3J0IGNsYXNzIFRvYXN0SXRlbSBleHRlbmRzIFB1cmVDb21wb25lbnQ8VG9hc3RQcm9wcz4ge1xuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGR1cmF0aW9uOiA1MDAwLFxuICB9O1xuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGlmICh0aGlzLnByb3BzLmR1cmF0aW9uICE9PSBudWxsKSB7XG4gICAgICBzZXRUaW1lb3V0KHRoaXMucHJvcHMuY2xlYXIsIHRoaXMucHJvcHMuZHVyYXRpb24pO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IG1lc3NhZ2UsIGNvbG9yIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8V3JhcHBlciBib3JkZXJsZXNzIGNvbG9yPXtjb2xvcn0+XG4gICAgICAgIHttZXNzYWdlfVxuICAgICAgPC9XcmFwcGVyPlxuICAgICk7XG4gIH1cbn1cblxuZnVuY3Rpb24gc2V0UG9zaXRpb24ocG9zaXRpb246IHN0cmluZywgaXNGaXhlZD86IGJvb2xlYW4pIHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gIGNvbnN0IGJhc2UgPSBgcG9zaXRpb246ICR7aXNGaXhlZCA/ICdmaXhlZCcgOiAnYWJzb2x1dGUnfTsgei1pbmRleDogOTk5OTsgZGlzcGxheTogZmxleDsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgYDtcbiAgc3dpdGNoIChwb3NpdGlvbikge1xuICAgIGNhc2UgJ2JvdHRvbSc6IHtcbiAgICAgIHJldHVybiBgJHtiYXNlfSBib3R0b206IDFyZW07IGxlZnQ6IDUwJTsgYWxpZ24taXRlbTogY2VudGVyOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7YDtcbiAgICB9XG4gICAgY2FzZSAnYm90dG9tLWxlZnQnOiB7XG4gICAgICByZXR1cm4gYCR7YmFzZX0gYm90dG9tOiAxcmVtOyBsZWZ0OiAxcmVtOyBhbGlnbi1pdGVtOiBmbGV4LXN0YXJ0O2A7XG4gICAgfVxuICAgIGNhc2UgJ2JvdHRvbS1yaWdodCc6IHtcbiAgICAgIHJldHVybiBgJHtiYXNlfSBib3R0b206IDFyZW07IHJpZ2h0OiAxcmVtOyBhbGlnbi1pdGVtOiBmbGV4LWVuZDtgO1xuICAgIH1cbiAgICBjYXNlICd0b3AnOiB7XG4gICAgICByZXR1cm4gYCR7YmFzZX0gdG9wOiAxcmVtOyBsZWZ0OiA1MCU7IGFsaWduLWl0ZW06IGNlbnRlcjsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO2A7XG4gICAgfVxuICAgIGNhc2UgJ3RvcC1sZWZ0Jzoge1xuICAgICAgcmV0dXJuIGAke2Jhc2V9IHRvcDogMXJlbTsgbGVmdDogMXJlbTsgYWxpZ24taXRlbTogZmxleC1zdGFydDtgO1xuICAgIH1cbiAgICBjYXNlICd0b3AtcmlnaHQnOlxuICAgIGRlZmF1bHQ6IHtcbiAgICAgIHJldHVybiBgJHtiYXNlfSB0b3A6IDFyZW07IHJpZ2h0OiAxcmVtOyBhbGlnbi1pdGVtOiBmbGV4LWVuZDtgO1xuICAgIH1cbiAgfVxufVxuXG5pbnRlcmZhY2UgQ29udGFpbmVyUHJvcHMge1xuICAvKiog6KGo56S644GZ44KLVG9hc3Tjga7jg6rjgrnjg4ggKi9cbiAgdG9hc3RzOiBUb2FzdFR5cGVbXTtcbiAgLyoqIHRvYXN044KS5raI44GZ44K/44Kk44Of44Oz44Kw44Gu44Kz44O844Or44OQ44OD44KvICovXG4gIGNsZWFyOiAoaWQ6IHN0cmluZykgPT4gdm9pZDtcbiAgLyoqIHRvcCwgdG9wLXJpZ2h0LCB0b3AtbGVmdCwgYm90dG9tLCBib3R0b20tcmlnaHQsIGJvdHRvbS1sZWZ0ICovXG4gIHBvc2l0aW9uPzogUG9zaXRpb25UeXBlO1xuICAvKiog44K544Kv44Ot44O844Or44GX44Gm44KC5Zu65a6a44Go44GX44Gm6KGo56S644GZ44KLICovXG4gIGZpeGVkPzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9hc3RDb250YWluZXIgZXh0ZW5kcyBDb21wb25lbnQ8Q29udGFpbmVyUHJvcHM+IHtcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICB0b2FzdHM6IFtdLFxuICAgIHBvc2l0aW9uOiAndG9wLXJpZ2h0JyxcbiAgICBmaXhlZDogZmFsc2UsXG4gIH07XG5cbiAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKHByb3BzOiBDb250YWluZXJQcm9wcykge1xuICAgIHJldHVybiBwcm9wcy50b2FzdHMubGVuZ3RoICE9PSB0aGlzLnByb3BzLnRvYXN0cy5sZW5ndGggfHxcbiAgICAgIHByb3BzLnBvc2l0aW9uICE9PSB0aGlzLnByb3BzLnBvc2l0aW9uO1xuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKHByb3BzOiBDb250YWluZXJQcm9wcykge1xuICAgIGlmIChcbiAgICAgIHRoaXMuZWxlbWVudCAmJlxuICAgICAgKHByb3BzLnBvc2l0aW9uICE9PSB0aGlzLnByb3BzLnBvc2l0aW9uIHx8IHByb3BzLmZpeGVkICE9PSB0aGlzLnByb3BzLmZpeGVkKVxuICAgICkge1xuICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLmNzc1RleHQgPSBzZXRQb3NpdGlvbih0aGlzLnByb3BzLnBvc2l0aW9uISwgdGhpcy5wcm9wcy5maXhlZCk7XG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgaWYgKHRoaXMuZWxlbWVudCkgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZCh0aGlzLmVsZW1lbnQpO1xuICB9XG5cbiAgY2xlYXIgPSAoaWQ6IHN0cmluZykgPT4gKCkgPT4ge1xuICAgIHRoaXMucHJvcHMuY2xlYXIoaWQpO1xuICB9XG5cbiAgcmVuZGVyVG9hc3QgPSAoKSA9PiB7XG4gICAgY29uc3QgeyB0b2FzdHMgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxUcmFuc2l0aW9uR3JvdXAgY29tcG9uZW50PXtudWxsfT5cbiAgICAgICAge3RvYXN0cy5tYXAocHJvcHMgPT4gKFxuICAgICAgICAgIDxDU1NUcmFuc2l0aW9uXG4gICAgICAgICAgICBrZXk9e3Byb3BzLmlkfVxuICAgICAgICAgICAgdGltZW91dD17MjUwfVxuICAgICAgICAgICAgY2xhc3NOYW1lcz1cIm1vdmVcIlxuICAgICAgICAgICAgdW5tb3VudE9uRXhpdFxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxUb2FzdEl0ZW1cbiAgICAgICAgICAgICAga2V5PXtwcm9wcy5pZH1cbiAgICAgICAgICAgICAgey4uLnByb3BzfVxuICAgICAgICAgICAgICBjbGVhcj17dGhpcy5jbGVhcihwcm9wcy5pZCl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvQ1NTVHJhbnNpdGlvbj5cbiAgICAgICAgKSl9XG4gICAgICA8L1RyYW5zaXRpb25Hcm91cD5cbiAgICApO1xuICB9XG5cbiAgZWxlbWVudD86IEhUTUxEaXZFbGVtZW50O1xuXG4gIHJlbmRlcigpOiBSZWFjdC5SZWFjdFBvcnRhbCB8IG51bGwge1xuICAgIGlmICh0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnICYmICF0aGlzLmVsZW1lbnQpIHtcbiAgICAgIHRoaXMuZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLmNzc1RleHQgPSBzZXRQb3NpdGlvbih0aGlzLnByb3BzLnBvc2l0aW9uISwgdGhpcy5wcm9wcy5maXhlZCk7XG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuZWxlbWVudCk7XG4gICAgfVxuXG5cbiAgICBpZiAodGhpcy5lbGVtZW50KSB7XG4gICAgICByZXR1cm4gY3JlYXRlUG9ydGFsKHRoaXMucmVuZGVyVG9hc3QoKSwgdGhpcy5lbGVtZW50KTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgQ2hpbGRyZW4sIENTU1Byb3BlcnRpZXMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBzZXRBbGlnbiBmcm9tICcuLi8uLi91dGlscy9zZXRBbGlnbic7XG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uL0J1dHRvbic7XG5pbXBvcnQgeyBDb2xvclR5cGUsIFRoZW1lVHlwZSwgQWxpZ25UeXBlIH0gZnJvbSAnLi4vLi4vdHlwZXMnO1xuXG5jb25zdCBXcmFwcGVyID0gc3R5bGVkLm5hdmBcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiAke3NldEFsaWdufTtcblxuICAudGFiLWNvbnRlbnQge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgICR7KHsgYWxpZ24gfSkgPT4gYWxpZ24gPyAnJyA6ICdmbGV4LWdyb3c6IDE7J31cbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cbmA7XG5cbmludGVyZmFjZSBJdGVtUHJvcHMge1xuICBhbGlnbj86IGFueTtcbiAgYWN0aXZlOiBib29sZWFuO1xufVxuXG5jb25zdCBUYWJJdGVtID0gc3R5bGVkLmRpdjxJdGVtUHJvcHM+YFxuICBkaXNwbGF5OiBibG9jaztcbiAgZmxleC1ncm93OiAxO1xuICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgYSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS50ZXh0fTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgcGFkZGluZzogMC4zNzVlbSAwLjc1ZW07XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xuXG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYmFja2dyb3VuZC1jb2xvcjtcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAxNTBtcztcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4wMyk7XG4gICAgfVxuICB9XG5gO1xuXG5mdW5jdGlvbiBzZXRDb2xvcih7IHRoZW1lLCBjb2xvciB9OiB7IHRoZW1lOiBUaGVtZVR5cGUsIGNvbG9yPzogQ29sb3JUeXBlIH0pIHtcbiAgcmV0dXJuICFjb2xvciA/IHRoZW1lLmJhY2tncm91bmQgOiB0aGVtZVtjb2xvcl07XG59XG5cbmludGVyZmFjZSBJbmRpY2F0b3JQcm9wcyB7XG4gIGNvbG9yPzogQ29sb3JUeXBlO1xuICBzdHlsZT86IENTU1Byb3BlcnRpZXM7XG59XG5cbmNvbnN0IEluZGljYXRvciA9IHN0eWxlZC5kaXY8SW5kaWNhdG9yUHJvcHM+YFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHtzZXRDb2xvcn07XG4gIGhlaWdodDogMnB4O1xuXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdDtcblxuICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtO1xuICB0cmFuc2l0aW9uLXByb3BlcnR5OiB0cmFuc2Zvcm07XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDIwMG1zO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpO1xuYDtcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgLyoqIOiJsuaMh+WumiAqL1xuICBjb2xvcj86IENvbG9yVHlwZTtcbiAgLyoqIGxlZnQgfCByaWdodCB8IGNlbnRlciAqL1xuICBhbGlnbj86IEFsaWduVHlwZTtcbiAgLyoqIOS4gOawl+OBq+ihqOekuuOBmeOCi+acgOWkp+OBruaVsOOBruaMh+WumiAqL1xuICBtYXhJdGVtcz86IG51bWJlcjtcblxuICBjaGlsZHJlbjogYW55O1xufVxuXG5pbnRlcmZhY2UgU3RhdGUge1xuICBzdGFydDogbnVtYmVyO1xuICBjdXJyZW50PzogbnVtYmVyO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUYWJzIGV4dGVuZHMgQ29tcG9uZW50PFByb3BzPiB7XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgbWF4SXRlbXM6IDUsXG4gIH1cblxuICBzdGF0aWMgZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzKHByb3BzOiBQcm9wcywgc3RhdGU6IFN0YXRlKSB7XG4gICAgbGV0IGFjdGl2ZUluZGV4O1xuICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSBwcm9wcy5jaGlsZHJlbi5sZW5ndGg7IGkgPCBsZW47IGkgKz0gMSkge1xuICAgICAgY29uc3QgY2hpbGQgPSBwcm9wcy5jaGlsZHJlbltpXTtcbiAgICAgIGlmIChjaGlsZC5wcm9wcy5hY3RpdmUpIHtcbiAgICAgICAgYWN0aXZlSW5kZXggPSBpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgLi4uc3RhdGUsXG4gICAgICBjdXJyZW50OiBhY3RpdmVJbmRleCxcbiAgICB9O1xuICB9XG5cbiAgc3RhdGljIEl0ZW0gPSBUYWJJdGVtO1xuXG4gIHN0YXRlID0geyBzdGFydDogMCwgY3VycmVudDogbnVsbCB9O1xuXG4gIHNob3VsZENvbXBvbmVudFVwZGF0ZShwcm9wczogUHJvcHMsIHN0YXRlOiBTdGF0ZSkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlLnN0YXJ0ICE9PSBzdGF0ZS5zdGFydCB8fFxuICAgICAgdGhpcy5zdGF0ZS5jdXJyZW50ICE9PSBzdGF0ZS5jdXJyZW50O1xuICB9XG5cbiAgb25OZXh0ID0gKCkgPT4ge1xuICAgIGNvbnN0IHRocmVzaG9sZCA9IHRoaXMucHJvcHMubWF4SXRlbXMhO1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5zdGF0ZS5zdGFydCArIHRocmVzaG9sZDtcbiAgICBjb25zdCBjb3VudCA9IENoaWxkcmVuLmNvdW50KHRoaXMucHJvcHMuY2hpbGRyZW4pXG4gICAgaWYgKHZhbHVlIDwgY291bnQpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBzdGFydDogdmFsdWUgfSk7XG4gICAgfVxuICB9XG5cbiAgb25QcmV2ID0gKCkgPT4ge1xuICAgIGlmICh0aGlzLnN0YXRlLnN0YXJ0ID09PSAwKSByZXR1cm47XG5cbiAgICBjb25zdCB0aHJlc2hvbGQgPSB0aGlzLnByb3BzLm1heEl0ZW1zITtcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuc3RhdGUuc3RhcnQgLSB0aHJlc2hvbGQ7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHN0YXJ0OiB2YWx1ZSA8IDAgPyAwIDogdmFsdWUgfSk7XG4gIH1cblxuICBnZXRJbmRpY2F0b3JQb3NpdGlvbiA9ICgpOiBDU1NQcm9wZXJ0aWVzIHwgdW5kZWZpbmVkID0+IHtcbiAgICBjb25zdCB7IGN1cnJlbnQgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgeyBjaGlsZHJlbiwgbWF4SXRlbXMgfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKGN1cnJlbnQgPT09IG51bGwgfHwgY3VycmVudCA9PT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkO1xuICAgIGlmICghY2hpbGRyZW4gfHwgIWNoaWxkcmVuLmxlbmd0aCkgcmV0dXJuIHVuZGVmaW5lZDtcblxuICAgIGNvbnN0IHRvdGFsID0gY2hpbGRyZW4ubGVuZ3RoID4gbWF4SXRlbXMhID8gbWF4SXRlbXMgOiBjaGlsZHJlbi5sZW5ndGg7XG4gICAgY29uc3QgdmFsdWUgPSAoY3VycmVudCAqIDEwMCkgKyAnJSc7XG5cbiAgICByZXR1cm4ge1xuICAgICAgdmlzaWJpbGl0eTogJ3Zpc2libGUnLFxuICAgICAgd2lkdGg6IGAke01hdGgucm91bmQoKDEwMCAvIHRvdGFsKSl9JWAsXG4gICAgICB0cmFuc2Zvcm06IGB0cmFuc2xhdGVYKCR7dmFsdWV9KWBcbiAgICB9O1xuICB9XG5cbiAgLy8gVE9ETzogbWFrZSB0YWIgc2Nyb2xsYWJsZSB2aWEgYXJyb3cgaWNvbnNcbiAgcmVuZGVyQ2hpbGRyZW4gPSAoY2hpbGQ6IFJlYWN0LlJlYWN0Q2hpbGQsIGluZGV4OiBudW1iZXIpID0+IHtcbiAgICBpZiAodGhpcy5zdGF0ZS5zdGFydCA+IGluZGV4KSByZXR1cm4gbnVsbDtcbiAgICBpZiAodGhpcy5zdGF0ZS5zdGFydCArIGluZGV4ID49IHRoaXMucHJvcHMubWF4SXRlbXMhKSByZXR1cm4gbnVsbDtcbiAgICBpZiAodHlwZW9mIGNoaWxkID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgY2hpbGQgPT09ICdudW1iZXInKSByZXR1cm4gbnVsbDtcblxuICAgIHJldHVybiA8VGFiSXRlbSB7Li4uY2hpbGQucHJvcHN9IGFsaWduPXt0aGlzLnByb3BzLmFsaWdufSAvPjtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNoaWxkcmVuLCBhbGlnbiwgY29sb3IsIG1heEl0ZW1zIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgc3RhcnQgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgdG90YWwgPSBjaGlsZHJlbiA/IGNoaWxkcmVuLmxlbmd0aCA6IDA7XG4gICAgY29uc3Qgc3R5bGUgPSB0aGlzLmdldEluZGljYXRvclBvc2l0aW9uKCk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxXcmFwcGVyIGFsaWduPXthbGlnbn0+XG4gICAgICAgIHtzdGFydCA+IG1heEl0ZW1zISAmJiAoPEJ1dHRvbiBjb2xvcj1cInRleHRcIj57JzwnfTwvQnV0dG9uPil9XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFiLWNvbnRlbnRcIj5cbiAgICAgICAgICB7Q2hpbGRyZW4ubWFwKGNoaWxkcmVuLCB0aGlzLnJlbmRlckNoaWxkcmVuKX1cbiAgICAgICAgICA8SW5kaWNhdG9yIGNvbG9yPXtjb2xvcn0gc3R5bGU9e3N0eWxlfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAge3RvdGFsID4gbWF4SXRlbXMhICYmIHN0YXJ0ID4gbWF4SXRlbXMhICYmICg8QnV0dG9uIGNvbG9yPVwidGV4dFwiPnsnPid9PC9CdXR0b24+KX1cbiAgICAgIDwvV3JhcHBlcj5cbiAgICApO1xuICB9XG59O1xuIiwiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQsIEhUTUxBdHRyaWJ1dGVzIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgQ1NTVHJhbnNpdGlvbiBmcm9tICdyZWFjdC10cmFuc2l0aW9uLWdyb3VwL0NTU1RyYW5zaXRpb24nO1xuaW1wb3J0IHsgQ29sb3JUeXBlLCBDU1NUeXBlIH0gZnJvbSAnLi4vLi4vdHlwZXMnO1xuXG5pbnRlcmZhY2UgTG9hZGluZ1Byb3BzIGV4dGVuZHMgSFRNTEF0dHJpYnV0ZXM8SFRNTERpdkVsZW1lbnQ+IHtcbiAgLyoqIHRydWXjga7loLTlkIjplovlp4vjgZfjgb7jgZkgKi9cbiAgbG9hZGluZzogYm9vbGVhbjtcbiAgLyoqIOODkOODvOOBruiJsuOBruaMh+WumiAqL1xuICBjb2xvcj86IENvbG9yVHlwZTtcbiAgLyoqIOODkOODvOOBrkNTUyBwb3NpdGlvbuOBruaMh+WumiAqL1xuICBwb3NpdGlvbj86ICdhYnNvbHV0ZScgfCAnZml4ZWQnIHwgJ3N0aWNreSc7XG4gIC8qKiDjg5Djg7zjga7og4zmma/jga7oibLjga7oh6rnlLHmjIflrpogKi9cbiAgYmFja2dyb3VuZD86IHN0cmluZztcbiAgLyoqIOODkOODvOOBrue4puW5heOBruWumue+qSAqL1xuICBzaXplPzogc3RyaW5nO1xuICAvKiog44OQ44O844Gu44Ki44OL44Oh44O844K344On44Oz44GuZHVyYXRpb27mjIflrpogKOWNmOS9je+8mm1zKSAqL1xuICBkdXJhdGlvbj86IG51bWJlcjtcbiAgY3NzPzogQ1NTVHlwZTtcbn1cblxuY29uc3QgV3JhcHBlciA9IHN0eWxlZC5kaXY8TG9hZGluZ1Byb3BzPmBcbiAgcG9zaXRpb246ICR7KHsgcG9zaXRpb24gfSkgPT4gcG9zaXRpb259O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyh7IGJhY2tncm91bmQgfSkgPT4gYmFja2dyb3VuZH07XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG5cbiAgLmxvYWRpbmctYmFyIHtcbiAgICBoZWlnaHQ6ICR7KHsgc2l6ZSB9KSA9PiBzaXplfTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyh7IGNvbG9yLCB0aGVtZSB9KSA9PiB0aGVtZVtjb2xvciFdfTtcblxuICAgIHdpbGwtY2hhbmdlOiB3aWR0aCwgb3BhY2l0eTtcbiAgICB6LWluZGV4OiAxMDAwMDAwO1xuXG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogd2lkdGgsIG9wYWNpdHk7XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogJHsoeyBkdXJhdGlvbiB9KSA9PiBkdXJhdGlvbn1tcztcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xuXG4gICAgJi5sb2FkLWVudGVyIHtcbiAgICAgIHdpZHRoOiAwO1xuICAgIH1cblxuICAgICYubG9hZC1lbnRlci1kb25lIHtcbiAgICAgIHdpZHRoOiA4NSU7XG4gICAgfVxuXG4gICAgJi5sb2FkLWV4aXQge1xuICAgICAgd2lkdGg6IDg1JTtcbiAgICB9XG5cbiAgICAmLmxvYWQtZXhpdC1hY3RpdmUge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbiAgfVxuXG4gICR7KHsgY3NzIH0pID0+IGNzcyB8fCB7fX1cbmA7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9hZGluZ0JhciBleHRlbmRzIFB1cmVDb21wb25lbnQ8TG9hZGluZ1Byb3BzPiB7XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgbG9hZGluZzogZmFsc2UsXG4gICAgY29sb3I6ICdwcmltYXJ5JyxcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICBiYWNrZ3JvdW5kOiAndHJhbnNwYXJlbnQnLFxuICAgIHNpemU6ICczcHgnLFxuICAgIGR1cmF0aW9uOiAxNTAsXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxXcmFwcGVyIHsuLi50aGlzLnByb3BzfT5cbiAgICAgICAgPENTU1RyYW5zaXRpb25cbiAgICAgICAgICBjbGFzc05hbWVzPVwibG9hZFwiXG4gICAgICAgICAgdGltZW91dD17dGhpcy5wcm9wcy5kdXJhdGlvbiF9XG4gICAgICAgICAgaW49e3RoaXMucHJvcHMubG9hZGluZ31cbiAgICAgICAgICB1bm1vdW50T25FeGl0XG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvYWRpbmctYmFyXCIgLz5cbiAgICAgICAgPC9DU1NUcmFuc2l0aW9uPlxuICAgICAgPC9XcmFwcGVyPlxuICAgICk7XG4gIH1cbn1cbiIsImltcG9ydCBSZWFjdCwgeyBIVE1MQXR0cmlidXRlcyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQsIHsgY3NzLCBrZXlmcmFtZXMgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgeyBDb2xvclR5cGUsIFRoZW1lVHlwZSB9IGZyb20gJy4uLy4uL3R5cGVzJztcblxuaW50ZXJmYWNlIFByb3BzIGV4dGVuZHMgSFRNTEF0dHJpYnV0ZXM8SFRNTERpdkVsZW1lbnQ+e1xuICAvKiog6Imy44Gu5oyH5a6aICovXG4gIGNvbG9yPzogQ29sb3JUeXBlO1xuICAvKiog5qiq5bmFICovXG4gIHdpZHRoPzogc3RyaW5nO1xuICAvKiog57im5bmFICovXG4gIGhlaWdodD86IHN0cmluZztcbiAgLyoqIHNwaW5uZXLjga7lpKrjgZUgKi9cbiAgYm9yZGVyU2l6ZT86IHN0cmluZztcbn1cblxuZnVuY3Rpb24gZ2V0Q29sb3IoeyB0aGVtZSwgY29sb3IgfTogeyB0aGVtZTogVGhlbWVUeXBlLCBjb2xvcj86IENvbG9yVHlwZSB9KSB7XG4gIGNvbnN0IHZhbHVlID0gKCFjb2xvciB8fCBjb2xvciA9PT0gJ2xpZ2h0JykgPyB0aGVtZS5iYWNrZ3JvdW5kIDogdGhlbWVbY29sb3JdO1xuXG4gIHJldHVybiBjc3NgXG4gICAgYm9yZGVyLWNvbG9yOiAke3ZhbHVlfTtcbiAgICBib3JkZXItcmlnaHQtY29sb3I6ICR7dGhlbWUuYm9yZGVyfTtcbiAgICBib3JkZXItdG9wLWNvbG9yOiAke3RoZW1lLmJvcmRlcn07XG4gIGA7XG59XG5cbmNvbnN0IHNwaW4gPSBrZXlmcmFtZXNgXG4gIGZyb20ge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICB9XG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNTlkZWcpO1xuICB9XG5gO1xuXG5jb25zdCBTcGlubmVyID0gc3R5bGVkLmRpdjxQcm9wcz5gXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6ICR7KHsgd2lkdGggfSkgPT4gd2lkdGggPyB3aWR0aCA6ICcxMDAlJ307XG4gIGhlaWdodDogJHsoeyBoZWlnaHQgfSkgPT4gaGVpZ2h0ID8gaGVpZ2h0IDogJzEwMCUnfTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgJjphZnRlciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgYW5pbWF0aW9uOiAke3NwaW59IDc1MG1zIGluZmluaXRlIGxpbmVhcjtcbiAgICBib3JkZXI6ICR7KHsgYm9yZGVyU2l6ZSB9KSA9PiBib3JkZXJTaXplfSBzb2xpZDtcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgICR7Z2V0Q29sb3J9XG4gICAgY29udGVudDogXCJcIjtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICB9XG5gO1xuU3Bpbm5lci5kaXNwbGF5TmFtZSA9ICdTcGlubmVyJztcblNwaW5uZXIuZGVmYXVsdFByb3BzID0ge1xuICBib3JkZXJTaXplOiAnMnB4Jyxcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3Bpbm5lcjtcbiIsIi8vIGdyaWQgJiBsYXlvdXRcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQnJlYWsgfSBmcm9tICcuL0dyaWQvQnJlYWsnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBDb250YWluZXIgfSBmcm9tICcuL0dyaWQvQ29udGFpbmVyJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgUm93IH0gZnJvbSAnLi9HcmlkL1Jvdyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIENvbCB9IGZyb20gJy4vR3JpZC9Db2wnO1xuXG5cbi8vIGNvbW1vblxuZXhwb3J0IHsgZGVmYXVsdCBhcyBDb250ZW50IH0gZnJvbSAnLi9Db250ZW50JztcbmV4cG9ydCAqIGZyb20gJy4vQ29udGVudCc7XG5cbmV4cG9ydCB7IGRlZmF1bHQgYXMgQnV0dG9uIH0gZnJvbSAnLi9CdXR0b24nO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBCdXR0b25Hcm91cCB9IGZyb20gJy4vQnV0dG9uL0J1dHRvbkdyb3VwJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgVGFibGUgfSBmcm9tICcuL1RhYmxlJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQm94IH0gZnJvbSAnLi9Cb3gnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBQcm9ncmVzcyB9IGZyb20gJy4vUHJvZ3Jlc3MnO1xuXG4vLyBmb3JtXG5leHBvcnQgKiBmcm9tICcuL0Zvcm0nO1xuXG4vLyBjb21wb25lbnRzXG5leHBvcnQgeyBkZWZhdWx0IGFzIEFwcEJhciB9IGZyb20gJy4vQXBwQmFyJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgVGFnIH0gZnJvbSAnLi9UYWcnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBIZXJvIH0gZnJvbSAnLi9IZXJvJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgVG9vbHRpcCB9IGZyb20gJy4vVG9vbHRpcCc7XG5leHBvcnQgKiBmcm9tICcuL1NpZGVNZW51JztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQ2FyZCB9IGZyb20gJy4vQ2FyZCc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFBvcG92ZXIgfSBmcm9tICcuL1BvcG92ZXInO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBNb2RhbCB9IGZyb20gJy4vTW9kYWwnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBUb2FzdCB9IGZyb20gJy4vVG9hc3QnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBUYWJzIH0gZnJvbSAnLi9UYWJzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTG9hZGluZ0JhciB9IGZyb20gJy4vTG9hZGluZy9CYXInO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBTcGlubmVyIH0gZnJvbSAnLi9Mb2FkaW5nL1NwaW5uZXInO1xuIiwiaW1wb3J0IHsgVGhlbWVUeXBlIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5cbmNvbnN0IHRoZW1lOiBUaGVtZVR5cGUgPSB7XG4gIGZvbnRGYW1pbHk6ICfjg5Ljg6njgq7jg47op5LjgrTjgrfjg4Pjgq8sXCLjg5Ljg6njgq7jg47op5LjgrQgUHJvTiBXM1wiLOODoeOCpOODquOCqixNZWlyeW8sXCLvvK3vvLMg77yw44K044K344OD44KvXCIsXCJNUyBQR290aGljXCIsc2Fucy1zZXJpZicsXG4gIGZvbnRTaXplOiAnMTZweCcsXG5cbiAgcmVzcG9uc2l2ZTogdHJ1ZSxcbiAgZ3V0dGVyOiAyNCxcbiAgc21hbGxHdXR0ZXI6IDE2LFxuICBib3hTaGFkb3c6ICcwIDFweCAycHggMCByZ2JhKDAsIDAsIDAsIDAuMDUpJyxcblxuICBtb2JpbGU6IDU3NixcbiAgdGFibGV0OiA3NjksXG4gIGRlc2t0b3A6IDk2MCxcbiAgZnVsbGhkOiAxMzQ0LFxuXG4gIHJhZGl1czogNCxcblxuICBwcmltYXJ5OiAnIzM3QjE1MScsXG4gIGxpbms6ICcjNTc4YmE5JyxcbiAgaW5mbzogJyMyMDljZWUnLFxuICBzdWNjZXNzOiAnIzBmYTg4NicsXG4gIHdhcm5pbmc6ICcjZjJiNTQxJyxcbiAgZGFuZ2VyOiAnI2YzNTc1YScsXG4gIGRhcms6ICcjMzYzNjM2JyxcbiAgbGlnaHQ6ICcjOWI5YjliJyxcblxuICBibGFjazogJyMwYTBhMGEnLFxuICBibGFja0JpczogJyMxMjEyMTInLFxuICBibGFja1RlcjogJyMyNDI0MjQnLFxuXG4gIHdoaXRlOiAnI2ZmZmZmZicsXG4gIHdoaXRlQmlzOiAnI2ZhZmFmYScsXG4gIHdoaXRlVGVyOiAnI2Y1ZjVmNScsXG5cbiAgZ3JleTogJyM3YTdhN2EnLFxuICBncmV5TGlnaHQ6ICcjOWI5YjliJyxcbiAgZ3JleUxpZ2h0ZXI6ICcjZGJkYmRiJyxcblxuICB0ZXh0OiAnIzRhNGE0YScsXG4gIHRleHREYXJrOiAnIzRhNGE0YScsXG4gIHRleHRMaWdodDogJyM3YTdhN2EnLFxuICB0ZXh0U3Ryb25nOiAnIzRhNGE0YScsXG5cbiAgYmFja2dyb3VuZDogJyNmNWY1ZjUnLFxuXG4gIGJvcmRlcjogJyNkYmRiZGInLFxuICBib3JkZXJIb3ZlcjogJyM5YjliOWInLFxuICBib3JkZXJBY3RpdmU6ICcjNGE0YTRhJyxcblxuICBwbGFjZWhvbGRlcjogJyM3YTdhN2EnLFxufTtcblxuXG5leHBvcnQgZGVmYXVsdCB0aGVtZTtcbiIsImltcG9ydCB7IGNzcyB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuLyohIGJhc2VkIG9uIG5vcm1hbGl6ZS5jc3MgdjguMC4wIHwgTUlUIExpY2Vuc2UgfCBnaXRodWIuY29tL25lY29sYXMvbm9ybWFsaXplLmNzcyAqL1xuY29uc3Qgbm9ybWFsaXplZDogYW55ID0gY3NzYFxuICAqLCA6OmFmdGVyLCA6OmJlZm9yZSB7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgfVxuXG4gIGh0bWwge1xuICAgIGxpbmUtaGVpZ2h0OiAxLjE1O1xuICAgIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTtcbiAgICAtbXMtb3ZlcmZsb3ctc3R5bGU6IHNjcm9sbGJhcjtcbiAgfVxuXG4gIGJvZHkge1xuICAgIG1hcmdpbjogMDtcbiAgICBmb250LWZhbWlseTogJHsoeyB0aGVtZSB9OiBhbnkpID0+IHRoZW1lID8gdGhlbWUuZm9udEZhbWlseSA6ICdcIkhpcmFnaW5vIFNhbnNcIiwg44OS44Op44Ku44OO6KeS44K044K344OD44KvLCBcIkhpcmFnaW5vIEtha3UgR290aGljIFByb05cIiwgXCLjg5Ljg6njgq7jg47op5LjgrQgUHJvTiBXM1wiLCDmuLjjgrTjgrfjg4Pjgq/kvZMsIFwiWXUgR290aGljXCIsIFl1R290aGljLCBcIuODkuODqeOCruODjuinkuOCtOOCt+ODg+OCryBQcm9cIiwgSGlyYUtha3VQcm8tVzMsIFwiSGlyYWdpbm8gS2FrdSBHb3RoaWMgUHJvXCIsIFF1aWNrc2FuZCwg44Oh44Kk44Oq44KqLCBNZWlyeW8sIE9zYWthLCBcIu+8re+8syDvvLDjgrTjgrfjg4Pjgq9cIiwgXCJNUyBQR290aGljXCIsIHNhbnMtc2VyaWYnfTs7XG4gICAgZm9udC1zaXplOiAkeyh7IHRoZW1lIH06IGFueSkgPT4gdGhlbWUgPyB0aGVtZS5mb250U2l6ZSA6ICcxNnB4J307XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgfVxuXG4gIGgxIHtcbiAgICBmb250LXNpemU6IDJlbTtcbiAgICBtYXJnaW46IC42N2VtIDA7XG4gIH1cblxuICBociB7XG4gICAgYm94LXNpemluZzogY29udGVudC1ib3g7XG4gICAgaGVpZ2h0OiAwO1xuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xuICB9XG5cbiAgcHJlIHtcbiAgICBmb250LWZhbWlseTogbW9ub3NwYWNlLG1vbm9zcGFjZTtcbiAgICBmb250LXNpemU6IDFlbTtcbiAgfVxuXG4gIGEge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGNvbG9yOiAkeyh7IHRoZW1lIH06IGFueSkgPT4gdGhlbWUubGlua307XG4gIH1cblxuICBhYmJyW3RpdGxlXSB7XG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSBkb3R0ZWQ7XG4gIH1cblxuICBiLHN0cm9uZyB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgfVxuXG4gIGNvZGUsa2JkLHNhbXAge1xuICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsbW9ub3NwYWNlO1xuICAgIGZvbnQtc2l6ZTogMWVtO1xuICB9XG5cbiAgc21hbGwge1xuICAgIGZvbnQtc2l6ZTogODAlO1xuICB9XG5cbiAgc3ViLHN1cCB7XG4gICAgZm9udC1zaXplOiA3NSU7XG4gICAgbGluZS1oZWlnaHQ6IDA7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbiAgfVxuXG4gIHN1YiB7XG4gICAgYm90dG9tOiAtLjI1ZW07XG4gIH1cblxuICBzdXAge1xuICAgIHRvcDogLS41ZW07XG4gIH1cblxuICBpbWcge1xuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcbiAgfVxuXG4gIGJ1dHRvbixpbnB1dCxvcHRncm91cCxzZWxlY3QsdGV4dGFyZWEge1xuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICAgIGZvbnQtc2l6ZTogMTAwJTtcbiAgICBsaW5lLWhlaWdodDogMS4xNTtcbiAgICBtYXJnaW46IDA7XG4gIH1cblxuICBidXR0b24saW5wdXQge1xuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xuICB9XG5cbiAgYnV0dG9uLHNlbGVjdCB7XG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIH1cblxuICBbdHlwZT1idXR0b25dLFt0eXBlPXJlc2V0XSxbdHlwZT1zdWJtaXRdLGJ1dHRvbiB7XG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247XG4gIH1cblxuICBbdHlwZT1idXR0b25dOjotbW96LWZvY3VzLWlubmVyLFt0eXBlPXJlc2V0XTo6LW1vei1mb2N1cy1pbm5lcixbdHlwZT1zdWJtaXRdOjotbW96LWZvY3VzLWlubmVyLGJ1dHRvbjo6LW1vei1mb2N1cy1pbm5lciB7XG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cblxuICBbdHlwZT1idXR0b25dOi1tb3otZm9jdXNyaW5nLFt0eXBlPXJlc2V0XTotbW96LWZvY3VzcmluZyxbdHlwZT1zdWJtaXRdOi1tb3otZm9jdXNyaW5nLGJ1dHRvbjotbW96LWZvY3VzcmluZyB7XG4gICAgb3V0bGluZTogMXB4IGRvdHRlZCBCdXR0b25UZXh0O1xuICB9XG5cbiAgaW5wdXRbdHlwZT1kYXRlXSxcbiAgaW5wdXRbdHlwZT10aW1lXSxcbiAgaW5wdXRbdHlwZT1kYXRldGltZS1sb2NhbF0sXG4gIGlucHV0W3R5cGU9bW9udGhdIHtcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IGxpc3Rib3g7XG4gIH1cblxuICBmaWVsZHNldCB7XG4gICAgcGFkZGluZzogLjM1ZW0gLjc1ZW0gLjYyNWVtO1xuICB9XG5cbiAgbGVnZW5kIHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGNvbG9yOiBpbmhlcml0O1xuICAgIGRpc3BsYXk6IHRhYmxlO1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAwO1xuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gIH1cblxuICBwcm9ncmVzcyB7XG4gICAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xuICAgIHJlc2l6ZTogdmVydGljYWw7XG4gIH1cblxuICB0ZXh0YXJlYSB7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gIH1cblxuICBbdHlwZT1jaGVja2JveF0sW3R5cGU9cmFkaW9dIHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cblxuICBbdHlwZT1udW1iZXJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFt0eXBlPW51bWJlcl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xuICAgIGhlaWdodDogYXV0bztcbiAgfVxuXG4gIFt0eXBlPXNlYXJjaF0ge1xuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogdGV4dGZpZWxkO1xuICAgIG91dGxpbmUtb2Zmc2V0OiAtMnB4O1xuICB9XG5cbiAgW3R5cGU9c2VhcmNoXTo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbiB7XG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICB9XG5cbiAgOjotd2Via2l0LWZpbGUtdXBsb2FkLWJ1dHRvbiB7XG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247XG4gICAgZm9udDogaW5oZXJpdDtcbiAgfVxuXG4gIGRldGFpbHMge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG5cbiAgc3VtbWFyeSB7XG4gICAgZGlzcGxheTogbGlzdC1pdGVtO1xuICB9XG5cbiAgdGVtcGxhdGUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICBbaGlkZGVuXSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIGJsb2NrcXVvdGUsIGJvZHksIGRkLCBkbCwgZHQsIGZpZWxkc2V0LCBmaWd1cmUsIGgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIGhyLCBodG1sLCBpZnJhbWUsIGxlZ2VuZCwgbGksIG9sLCBwLCBwcmUsIHRleHRhcmVhLCB1bCB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cblxuICBidXR0b24ge1xuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgfVxuXG4gIGFydGljbGUsIGFzaWRlLCBmaWd1cmUsXG4gIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIHNlY3Rpb24ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG5cbiAgaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdLCBpbnB1dFt0eXBlPVwicmFkaW9cIl0ge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgcGFkZGluZzogMDtcbiAgfVxuXG4gIGEge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY29sb3I6ICMzMjczZGM7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIGNvbG9yOiBjdXJyZW50Q29sb3I7XG4gICAgfVxuICB9XG5cbiAgaW1nIHtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcbiAgfVxuXG4gIHN2ZyB7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB9XG5cbiAgc21hbGwge1xuICAgIGZvbnQtc2l6ZTogLjg3NWVtO1xuICB9XG5cbiAgc3BhbiB7XG4gICAgZm9udC1zdHlsZTogaW5oZXJpdDtcbiAgICBmb250LXdlaWdodDogaW5oZXJpdDtcbiAgfVxuXG4gIHN0cm9uZyB7XG4gICAgY29sb3I6ICMzNjM2MzY7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgfVxuXG4gIHRhYmxlIHtcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICAgIGJvcmRlci1zcGFjaW5nOiAwO1xuICB9XG5cbiAgdGgge1xuICAgIHRleHQtYWxpZ246IGluaGVyaXQ7XG4gIH1cblxuICB1bCB7XG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBub3JtYWxpemVkO1xuIl0sIm5hbWVzIjpbIkJyZWFrIiwid2lkdGgiLCJoZWlnaHQiLCJtZWRpYU1vYmlsZSIsInRoZW1lIiwicmVzcG9uc2l2ZSIsIm1vYmlsZSIsIm1lZGlhVGFibGV0IiwidGFibGV0IiwibWVkaWFEZXNrdG9wIiwiZGVza3RvcCIsIm1lZGlhRnVsbEhEIiwiZnVsbGhkIiwibWVkaWFVbnRpbEZ1bGxIRCIsInNldFJlc3BvbnNpdmUiLCJmbHVpZCIsImNzcyIsInNtYWxsR3V0dGVyIiwiZ3V0dGVyIiwiQ29udGFpbmVyIiwic3R5bGVkIiwiZGl2IiwiZGlzcGxheU5hbWUiLCJkZWZhdWx0UHJvcHMiLCJwYXJjZW50YWdlIiwidmFsdWUiLCJNYXRoIiwiY2VpbCIsInJlbmRlclNpemUiLCJzaXplIiwibmFycm93IiwiYXV0byIsIm9mZnNldCIsIm9mZlZhbCIsImF1dG9TaXplIiwiQ29sIiwicmVuZGVyR3V0dGVyIiwibm9HdXR0ZXIiLCJSb3ciLCJ2Y2VudGVyIiwiY2VudGVyIiwiUHJlIiwicHJlIiwiQ29kZSIsImNvZGUiLCJiYWNrZ3JvdW5kIiwiZGFuZ2VyIiwiSDEiLCJoMSIsImJvcmRlciIsIkNvbnRlbnQiLCJ0ZXh0IiwiZXhwb3J0cyIsImN1cnJ5IiwiY3VycmllZCIsImYiLCJsZW5ndGgiLCJhY2MiLCJmbiIsImNvbWJpbmVkIiwiY29uY2F0IiwiQXJyYXkiLCJwcm90b3R5cGUiLCJzbGljZSIsImNhbGwiLCJhcmd1bWVudHMiLCJhcHBseSIsIm1vZHVsZSIsImRlZmF1bHQiLCJndWFyZCIsImxvd2VyQm91bmRhcnkiLCJ1cHBlckJvdW5kYXJ5IiwibWF4IiwibWluIiwiX2RlZmF1bHQiLCJjb2xvclRvSW50IiwiY29sb3IiLCJyb3VuZCIsImNvbnZlcnRUb0ludCIsInJlZCIsImdyZWVuIiwiYmx1ZSIsImhzbFRvUmdiIiwiaHVlIiwic2F0dXJhdGlvbiIsImxpZ2h0bmVzcyIsImNvbnZlcnQiLCJodWVQcmltZSIsImNocm9tYSIsImFicyIsInNlY29uZENvbXBvbmVudCIsImxpZ2h0bmVzc01vZGlmaWNhdGlvbiIsImZpbmFsUmVkIiwiZmluYWxHcmVlbiIsImZpbmFsQmx1ZSIsIm5hbWVkQ29sb3JNYXAiLCJhbGljZWJsdWUiLCJhbnRpcXVld2hpdGUiLCJhcXVhIiwiYXF1YW1hcmluZSIsImF6dXJlIiwiYmVpZ2UiLCJiaXNxdWUiLCJibGFjayIsImJsYW5jaGVkYWxtb25kIiwiYmx1ZXZpb2xldCIsImJyb3duIiwiYnVybHl3b29kIiwiY2FkZXRibHVlIiwiY2hhcnRyZXVzZSIsImNob2NvbGF0ZSIsImNvcmFsIiwiY29ybmZsb3dlcmJsdWUiLCJjb3Juc2lsayIsImNyaW1zb24iLCJjeWFuIiwiZGFya2JsdWUiLCJkYXJrY3lhbiIsImRhcmtnb2xkZW5yb2QiLCJkYXJrZ3JheSIsImRhcmtncmVlbiIsImRhcmtncmV5IiwiZGFya2toYWtpIiwiZGFya21hZ2VudGEiLCJkYXJrb2xpdmVncmVlbiIsImRhcmtvcmFuZ2UiLCJkYXJrb3JjaGlkIiwiZGFya3JlZCIsImRhcmtzYWxtb24iLCJkYXJrc2VhZ3JlZW4iLCJkYXJrc2xhdGVibHVlIiwiZGFya3NsYXRlZ3JheSIsImRhcmtzbGF0ZWdyZXkiLCJkYXJrdHVycXVvaXNlIiwiZGFya3Zpb2xldCIsImRlZXBwaW5rIiwiZGVlcHNreWJsdWUiLCJkaW1ncmF5IiwiZGltZ3JleSIsImRvZGdlcmJsdWUiLCJmaXJlYnJpY2siLCJmbG9yYWx3aGl0ZSIsImZvcmVzdGdyZWVuIiwiZnVjaHNpYSIsImdhaW5zYm9ybyIsImdob3N0d2hpdGUiLCJnb2xkIiwiZ29sZGVucm9kIiwiZ3JheSIsImdyZWVueWVsbG93IiwiZ3JleSIsImhvbmV5ZGV3IiwiaG90cGluayIsImluZGlhbnJlZCIsImluZGlnbyIsIml2b3J5Iiwia2hha2kiLCJsYXZlbmRlciIsImxhdmVuZGVyYmx1c2giLCJsYXduZ3JlZW4iLCJsZW1vbmNoaWZmb24iLCJsaWdodGJsdWUiLCJsaWdodGNvcmFsIiwibGlnaHRjeWFuIiwibGlnaHRnb2xkZW5yb2R5ZWxsb3ciLCJsaWdodGdyYXkiLCJsaWdodGdyZWVuIiwibGlnaHRncmV5IiwibGlnaHRwaW5rIiwibGlnaHRzYWxtb24iLCJsaWdodHNlYWdyZWVuIiwibGlnaHRza3libHVlIiwibGlnaHRzbGF0ZWdyYXkiLCJsaWdodHNsYXRlZ3JleSIsImxpZ2h0c3RlZWxibHVlIiwibGlnaHR5ZWxsb3ciLCJsaW1lIiwibGltZWdyZWVuIiwibGluZW4iLCJtYWdlbnRhIiwibWFyb29uIiwibWVkaXVtYXF1YW1hcmluZSIsIm1lZGl1bWJsdWUiLCJtZWRpdW1vcmNoaWQiLCJtZWRpdW1wdXJwbGUiLCJtZWRpdW1zZWFncmVlbiIsIm1lZGl1bXNsYXRlYmx1ZSIsIm1lZGl1bXNwcmluZ2dyZWVuIiwibWVkaXVtdHVycXVvaXNlIiwibWVkaXVtdmlvbGV0cmVkIiwibWlkbmlnaHRibHVlIiwibWludGNyZWFtIiwibWlzdHlyb3NlIiwibW9jY2FzaW4iLCJuYXZham93aGl0ZSIsIm5hdnkiLCJvbGRsYWNlIiwib2xpdmUiLCJvbGl2ZWRyYWIiLCJvcmFuZ2UiLCJvcmFuZ2VyZWQiLCJvcmNoaWQiLCJwYWxlZ29sZGVucm9kIiwicGFsZWdyZWVuIiwicGFsZXR1cnF1b2lzZSIsInBhbGV2aW9sZXRyZWQiLCJwYXBheWF3aGlwIiwicGVhY2hwdWZmIiwicGVydSIsInBpbmsiLCJwbHVtIiwicG93ZGVyYmx1ZSIsInB1cnBsZSIsInJlYmVjY2FwdXJwbGUiLCJyb3N5YnJvd24iLCJyb3lhbGJsdWUiLCJzYWRkbGVicm93biIsInNhbG1vbiIsInNhbmR5YnJvd24iLCJzZWFncmVlbiIsInNlYXNoZWxsIiwic2llbm5hIiwic2lsdmVyIiwic2t5Ymx1ZSIsInNsYXRlYmx1ZSIsInNsYXRlZ3JheSIsInNsYXRlZ3JleSIsInNub3ciLCJzcHJpbmdncmVlbiIsInN0ZWVsYmx1ZSIsInRhbiIsInRlYWwiLCJ0aGlzdGxlIiwidG9tYXRvIiwidHVycXVvaXNlIiwidmlvbGV0Iiwid2hlYXQiLCJ3aGl0ZSIsIndoaXRlc21va2UiLCJ5ZWxsb3ciLCJ5ZWxsb3dncmVlbiIsIm5hbWVUb0hleCIsIm5vcm1hbGl6ZWRDb2xvck5hbWUiLCJ0b0xvd2VyQ2FzZSIsIl9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQiLCJzZWxmIiwiUmVmZXJlbmNlRXJyb3IiLCJfaW5oZXJpdHNMb29zZSIsInN1YkNsYXNzIiwic3VwZXJDbGFzcyIsIk9iamVjdCIsImNyZWF0ZSIsImNvbnN0cnVjdG9yIiwiX19wcm90b19fIiwiX3dyYXBOYXRpdmVTdXBlciIsIkNsYXNzIiwiX2NhY2hlIiwiTWFwIiwidW5kZWZpbmVkIiwiX2lzTmF0aXZlRnVuY3Rpb24iLCJUeXBlRXJyb3IiLCJoYXMiLCJnZXQiLCJzZXQiLCJXcmFwcGVyIiwiX2NvbnN0cnVjdCIsIl9nZXRQcm90b3R5cGVPZiIsImVudW1lcmFibGUiLCJ3cml0YWJsZSIsImNvbmZpZ3VyYWJsZSIsIl9zZXRQcm90b3R5cGVPZiIsImlzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCIsIlJlZmxlY3QiLCJjb25zdHJ1Y3QiLCJzaGFtIiwiUHJveHkiLCJEYXRlIiwidG9TdHJpbmciLCJlIiwiUGFyZW50IiwiYXJncyIsImEiLCJwdXNoIiwiQ29uc3RydWN0b3IiLCJGdW5jdGlvbiIsImJpbmQiLCJpbnN0YW5jZSIsImluZGV4T2YiLCJvIiwicCIsInNldFByb3RvdHlwZU9mIiwiZ2V0UHJvdG90eXBlT2YiLCJFUlJPUlMiLCJmb3JtYXQiLCJfbGVuIiwiX2tleSIsImIiLCJjIiwiZm9yRWFjaCIsImQiLCJyZXBsYWNlIiwiUG9saXNoZWRFcnJvciIsIl9FcnJvciIsIl90aGlzIiwicHJvY2VzcyIsImVudiIsIk5PREVfRU5WIiwiX2xlbjIiLCJfa2V5MiIsIkVycm9yIiwiX2hzbFRvUmdiIiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsInJlcXVpcmUkJDAiLCJfbmFtZVRvSGV4IiwicmVxdWlyZSQkMSIsIl9lcnJvcnMiLCJyZXF1aXJlJCQyIiwib2JqIiwiX19lc01vZHVsZSIsImhleFJlZ2V4IiwiaGV4UmdiYVJlZ2V4IiwicmVkdWNlZEhleFJlZ2V4IiwicmVkdWNlZFJnYmFIZXhSZWdleCIsInJnYlJlZ2V4IiwicmdiYVJlZ2V4IiwiaHNsUmVnZXgiLCJoc2xhUmVnZXgiLCJwYXJzZVRvUmdiIiwibm9ybWFsaXplZENvbG9yIiwibWF0Y2giLCJwYXJzZUludCIsImFscGhhIiwicGFyc2VGbG9hdCIsInRvRml4ZWQiLCJfYWxwaGEiLCJyZ2JNYXRjaGVkIiwiZXhlYyIsInJnYmFNYXRjaGVkIiwiaHNsTWF0Y2hlZCIsInJnYkNvbG9yU3RyaW5nIiwiaHNsUmdiTWF0Y2hlZCIsImhzbGFNYXRjaGVkIiwiX2h1ZSIsIl9zYXR1cmF0aW9uIiwiX2xpZ2h0bmVzcyIsIl9yZ2JDb2xvclN0cmluZyIsIl9oc2xSZ2JNYXRjaGVkIiwicmdiVG9Ic2wiLCJkZWx0YSIsIl9wYXJzZVRvUmdiIiwiX3JnYlRvSHNsIiwicGFyc2VUb0hzbCIsInJlZHVjZUhleFZhbHVlIiwibnVtYmVyVG9IZXgiLCJoZXgiLCJfcmVkdWNlSGV4VmFsdWUiLCJfbnVtYmVyVG9IZXgiLCJjb2xvclRvSGV4IiwiY29udmVydFRvSGV4IiwiaHNsVG9IZXgiLCJfaHNsVG9IZXgiLCJoc2wiLCJoc2xhIiwicmdiIiwiX3JnYiIsInJnYmEiLCJmaXJzdFZhbHVlIiwic2Vjb25kVmFsdWUiLCJ0aGlyZFZhbHVlIiwiZm91cnRoVmFsdWUiLCJyZ2JWYWx1ZSIsIl9oc2wiLCJfaHNsYSIsIl9yZ2JhIiwicmVxdWlyZSQkMyIsInJlcXVpcmUkJDQiLCJpc1JnYiIsImlzUmdiYSIsImlzSHNsIiwiaXNIc2xhIiwidG9Db2xvclN0cmluZyIsIl9jdXJyeSIsIl9ndWFyZCIsIl9wYXJzZVRvSHNsIiwiX3RvQ29sb3JTdHJpbmciLCJfZXh0ZW5kcyIsImFzc2lnbiIsInRhcmdldCIsImkiLCJzb3VyY2UiLCJrZXkiLCJoYXNPd25Qcm9wZXJ0eSIsImRhcmtlbiIsImFtb3VudCIsImhzbENvbG9yIiwiY3VycmllZERhcmtlbiIsImdldEx1bWluYW5jZSIsInJnYkNvbG9yIiwiX09iamVjdCRrZXlzJG1hcCIsImtleXMiLCJtYXAiLCJjaGFubmVsIiwicG93IiwiciIsImciLCJmaW5kQ29sb3JJbnZlcnQiLCJ0cmFuc3BhcmVudGl6ZSIsInBhcnNlZENvbG9yIiwiY29sb3JXaXRoQWxwaGEiLCJjdXJyaWVkVHJhbnNwYXJlbnRpemUiLCJib3hTaGFkb3ciLCJzaGFkb3dDb2xvciIsInNldFNpemUiLCJuYW1lIiwiZGlzYWJsZWRDb2xvciIsInRleHRDb2xvciIsInRleHREYXJrIiwiYmFja0NvbG9yIiwic2V0Q29sb3IiLCJvdXRsaW5lIiwiZGlzYWJsZWQiLCJib3JkZXJIb3ZlciIsImJvcmRlckFjdGl2ZSIsImludmVydENvbG9yIiwiQnV0dG9uIiwiYnV0dG9uIiwiZnVsbCIsIkJ1dHRvbkdyb3VwIiwic3RyaXBlZFN0eWxlIiwiaG92ZXJTdHlsZSIsIlRhYmxlIiwidGFibGUiLCJib3JkZXJlZCIsInN0cmlwZWQiLCJob3ZlciIsImhlYWRlclN0eWxlIiwiQm94IiwiYm9yZGVybGVzcyIsIlByb2dyZXNzIiwicHJvcHMiLCJwZXJjZW50IiwiUHVyZUNvbXBvbmVudCIsInJlcXVpcmVkIiwicHJpbWFyeSIsIkxhYmVsIiwibGFiZWwiLCJ0ZXh0U3Ryb25nIiwiRmllbGQiLCJjaGlsZHJlbiIsInJlc3QiLCJoYW1idXJnZXIiLCJBcnJvdyIsImRpcmVjdGlvbiIsIk1lc3NhZ2UiLCJzcGFuIiwiZXJyb3IiLCJ0ZXh0TGlnaHQiLCJIZWxwTWVzc2FnZSIsImhlbHAiLCJyaWdodEljb24iLCJsZWZ0SWNvbiIsIkljb24iLCJyaWdodCIsInBsYWNlaG9sZGVyIiwiVGV4dElucHV0IiwiY2xhc3NOYW1lIiwic3R5bGUiLCJ0eXBlIiwibWF4TGVuZ3RoIiwib25DaGFuZ2UiLCJUZXh0YXJlYSIsInJlYWRPbmx5IiwiQ29tcG9uZW50IiwiY29sIiwicm93IiwiQ2hlY2tib3giLCJjaGVja2VkIiwiaWQiLCJJbnB1dFdyYXBwZXIiLCJhcnJvdyIsIlNlbGVjdCIsInJlbmRlciIsIm9wdGlvbnMiLCJpdGVtIiwiaWR4IiwicmVuZGVyTGFiZWwiLCJpbnB1dFNpemUiLCJCb29sZWFuIiwicmVuZGVySXRlbSIsIlJhZGlvTGFiZWwiLCJCdXR0b25MYWJlbCIsIlJhZGlvIiwic2V0QWxpZ24iLCJhbGlnbiIsImJhY2tkcm9wIiwiYmFja2dyb3VuZENvbG9yIiwidWEiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJOYXZCYXIiLCJoZWFkZXIiLCJmaXhlZCIsInN0aWNreSIsIkJ1cmdlciIsImhhbWJ1Z2VyIiwiTmF2Q29udGVudCIsIkFwcEJhciIsInNob3ciLCJzZXRTdGF0ZSIsInN0YXRlIiwiYnJhbmQiLCJ0b2dnbGVNZW51IiwiZ2V0Q29sb3IiLCJhZGRvbkNvbG9yIiwic3ViQ29sb3IiLCJjbG9zZSIsIlRhZyIsIm9uQ2xvc2UiLCJvbkNsaWNrIiwiQm9keSIsIkhlcm8iLCJkZWZpbmVQcm9wZXJ0eSIsIlN5bWJvbCIsImZvciIsImgiLCJrIiwibCIsIm0iLCJuIiwicSIsInQiLCJ1IiwiJCR0eXBlb2YiLCJ2IiwiaGFzU3ltYm9sIiwiUkVBQ1RfRUxFTUVOVF9UWVBFIiwiUkVBQ1RfUE9SVEFMX1RZUEUiLCJSRUFDVF9GUkFHTUVOVF9UWVBFIiwiUkVBQ1RfU1RSSUNUX01PREVfVFlQRSIsIlJFQUNUX1BST0ZJTEVSX1RZUEUiLCJSRUFDVF9QUk9WSURFUl9UWVBFIiwiUkVBQ1RfQ09OVEVYVF9UWVBFIiwiUkVBQ1RfQVNZTkNfTU9ERV9UWVBFIiwiUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEUiLCJSRUFDVF9GT1JXQVJEX1JFRl9UWVBFIiwiUkVBQ1RfU1VTUEVOU0VfVFlQRSIsIlJFQUNUX01FTU9fVFlQRSIsIlJFQUNUX0xBWllfVFlQRSIsImlzVmFsaWRFbGVtZW50VHlwZSIsImxvd1ByaW9yaXR5V2FybmluZyIsInByaW50V2FybmluZyIsImFyZ0luZGV4IiwibWVzc2FnZSIsImNvbnNvbGUiLCJ3YXJuIiwieCIsImNvbmRpdGlvbiIsImxvd1ByaW9yaXR5V2FybmluZyQxIiwidHlwZU9mIiwib2JqZWN0IiwiJCR0eXBlb2ZUeXBlIiwiQXN5bmNNb2RlIiwiQ29uY3VycmVudE1vZGUiLCJDb250ZXh0Q29uc3VtZXIiLCJDb250ZXh0UHJvdmlkZXIiLCJFbGVtZW50IiwiRm9yd2FyZFJlZiIsIkZyYWdtZW50IiwiTGF6eSIsIk1lbW8iLCJQb3J0YWwiLCJQcm9maWxlciIsIlN0cmljdE1vZGUiLCJTdXNwZW5zZSIsImhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQXN5bmNNb2RlIiwiaXNBc3luY01vZGUiLCJpc0NvbmN1cnJlbnRNb2RlIiwiaXNDb250ZXh0Q29uc3VtZXIiLCJpc0NvbnRleHRQcm92aWRlciIsImlzRWxlbWVudCIsImlzRm9yd2FyZFJlZiIsImlzRnJhZ21lbnQiLCJpc0xhenkiLCJpc01lbW8iLCJpc1BvcnRhbCIsImlzUHJvZmlsZXIiLCJpc1N0cmljdE1vZGUiLCJpc1N1c3BlbnNlIiwiZ2V0T3duUHJvcGVydHlTeW1ib2xzIiwicHJvcElzRW51bWVyYWJsZSIsInByb3BlcnR5SXNFbnVtZXJhYmxlIiwidG9PYmplY3QiLCJ2YWwiLCJzaG91bGRVc2VOYXRpdmUiLCJ0ZXN0MSIsIlN0cmluZyIsImdldE93blByb3BlcnR5TmFtZXMiLCJ0ZXN0MiIsImZyb21DaGFyQ29kZSIsIm9yZGVyMiIsImpvaW4iLCJ0ZXN0MyIsInNwbGl0IiwibGV0dGVyIiwiZXJyIiwiZnJvbSIsInRvIiwic3ltYm9scyIsInMiLCJSZWFjdFByb3BUeXBlc1NlY3JldCIsImxvZ2dlZFR5cGVGYWlsdXJlcyIsImNoZWNrUHJvcFR5cGVzIiwidHlwZVNwZWNzIiwidmFsdWVzIiwibG9jYXRpb24iLCJjb21wb25lbnROYW1lIiwiZ2V0U3RhY2siLCJ0eXBlU3BlY05hbWUiLCJleCIsInN0YWNrIiwicmVzZXRXYXJuaW5nQ2FjaGUiLCJlbXB0eUZ1bmN0aW9uVGhhdFJldHVybnNOdWxsIiwiaXNWYWxpZEVsZW1lbnQiLCJ0aHJvd09uRGlyZWN0QWNjZXNzIiwiSVRFUkFUT1JfU1lNQk9MIiwiaXRlcmF0b3IiLCJGQVVYX0lURVJBVE9SX1NZTUJPTCIsImdldEl0ZXJhdG9yRm4iLCJtYXliZUl0ZXJhYmxlIiwiaXRlcmF0b3JGbiIsIkFOT05ZTU9VUyIsIlJlYWN0UHJvcFR5cGVzIiwiYXJyYXkiLCJjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlciIsImJvb2wiLCJmdW5jIiwibnVtYmVyIiwic3RyaW5nIiwic3ltYm9sIiwiYW55IiwiY3JlYXRlQW55VHlwZUNoZWNrZXIiLCJhcnJheU9mIiwiY3JlYXRlQXJyYXlPZlR5cGVDaGVja2VyIiwiZWxlbWVudCIsImNyZWF0ZUVsZW1lbnRUeXBlQ2hlY2tlciIsImVsZW1lbnRUeXBlIiwiY3JlYXRlRWxlbWVudFR5cGVUeXBlQ2hlY2tlciIsImluc3RhbmNlT2YiLCJjcmVhdGVJbnN0YW5jZVR5cGVDaGVja2VyIiwibm9kZSIsImNyZWF0ZU5vZGVDaGVja2VyIiwib2JqZWN0T2YiLCJjcmVhdGVPYmplY3RPZlR5cGVDaGVja2VyIiwib25lT2YiLCJjcmVhdGVFbnVtVHlwZUNoZWNrZXIiLCJvbmVPZlR5cGUiLCJjcmVhdGVVbmlvblR5cGVDaGVja2VyIiwic2hhcGUiLCJjcmVhdGVTaGFwZVR5cGVDaGVja2VyIiwiZXhhY3QiLCJjcmVhdGVTdHJpY3RTaGFwZVR5cGVDaGVja2VyIiwiaXMiLCJ5IiwiUHJvcFR5cGVFcnJvciIsImNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyIiwidmFsaWRhdGUiLCJtYW51YWxQcm9wVHlwZUNhbGxDYWNoZSIsIm1hbnVhbFByb3BUeXBlV2FybmluZ0NvdW50IiwiY2hlY2tUeXBlIiwiaXNSZXF1aXJlZCIsInByb3BOYW1lIiwicHJvcEZ1bGxOYW1lIiwic2VjcmV0IiwiY2FjaGVLZXkiLCJjaGFpbmVkQ2hlY2tUeXBlIiwiZXhwZWN0ZWRUeXBlIiwicHJvcFZhbHVlIiwicHJvcFR5cGUiLCJnZXRQcm9wVHlwZSIsInByZWNpc2VUeXBlIiwiZ2V0UHJlY2lzZVR5cGUiLCJ0eXBlQ2hlY2tlciIsImlzQXJyYXkiLCJSZWFjdElzIiwiZXhwZWN0ZWRDbGFzcyIsImV4cGVjdGVkQ2xhc3NOYW1lIiwiYWN0dWFsQ2xhc3NOYW1lIiwiZ2V0Q2xhc3NOYW1lIiwiZXhwZWN0ZWRWYWx1ZXMiLCJ2YWx1ZXNTdHJpbmciLCJKU09OIiwic3RyaW5naWZ5IiwicmVwbGFjZXIiLCJhcnJheU9mVHlwZUNoZWNrZXJzIiwiY2hlY2tlciIsImdldFBvc3RmaXhGb3JUeXBlV2FybmluZyIsImlzTm9kZSIsInNoYXBlVHlwZXMiLCJhbGxLZXlzIiwiZXZlcnkiLCJzdGVwIiwiZW50cmllcyIsIm5leHQiLCJkb25lIiwiZW50cnkiLCJpc1N5bWJvbCIsIlJlZ0V4cCIsIlByb3BUeXBlcyIsImVtcHR5RnVuY3Rpb24iLCJlbXB0eUZ1bmN0aW9uV2l0aFJlc2V0Iiwic2hpbSIsImdldFNoaW0iLCJoYXNDbGFzcyIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwiYmFzZVZhbCIsImFkZENsYXNzIiwiX2hhc0NsYXNzIiwiYWRkIiwic2V0QXR0cmlidXRlIiwicmVwbGFjZUNsYXNzTmFtZSIsIm9yaWdDbGFzcyIsImNsYXNzVG9SZW1vdmUiLCJyZW1vdmVDbGFzcyIsInJlbW92ZSIsImNvbXBvbmVudFdpbGxNb3VudCIsImdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyIsImNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMiLCJuZXh0UHJvcHMiLCJ1cGRhdGVyIiwicHJldlN0YXRlIiwiY29tcG9uZW50V2lsbFVwZGF0ZSIsIm5leHRTdGF0ZSIsInByZXZQcm9wcyIsIl9fcmVhY3RJbnRlcm5hbFNuYXBzaG90RmxhZyIsIl9fcmVhY3RJbnRlcm5hbFNuYXBzaG90IiwiZ2V0U25hcHNob3RCZWZvcmVVcGRhdGUiLCJfX3N1cHByZXNzRGVwcmVjYXRpb25XYXJuaW5nIiwicG9seWZpbGwiLCJpc1JlYWN0Q29tcG9uZW50IiwiZm91bmRXaWxsTW91bnROYW1lIiwiZm91bmRXaWxsUmVjZWl2ZVByb3BzTmFtZSIsImZvdW5kV2lsbFVwZGF0ZU5hbWUiLCJVTlNBRkVfY29tcG9uZW50V2lsbE1vdW50IiwiVU5TQUZFX2NvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMiLCJVTlNBRkVfY29tcG9uZW50V2lsbFVwZGF0ZSIsIm5ld0FwaU5hbWUiLCJjb21wb25lbnREaWRVcGRhdGUiLCJjb21wb25lbnREaWRVcGRhdGVQb2x5ZmlsbCIsIm1heWJlU25hcHNob3QiLCJzbmFwc2hvdCIsIl9wcm9wVHlwZXMiLCJ0aW1lb3V0c1NoYXBlIiwiZW50ZXIiLCJleGl0IiwiY2xhc3NOYW1lc1NoYXBlIiwiYWN0aXZlIiwiZW50ZXJEb25lIiwiZW50ZXJBY3RpdmUiLCJleGl0RG9uZSIsImV4aXRBY3RpdmUiLCJfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCIsIl9yZWFjdCIsIl9yZWFjdERvbSIsIm5ld09iaiIsImRlc2MiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZSIsImV4Y2x1ZGVkIiwic291cmNlS2V5cyIsIlVOTU9VTlRFRCIsIkVYSVRFRCIsIkVOVEVSSU5HIiwiRU5URVJFRCIsIkVYSVRJTkciLCJUcmFuc2l0aW9uIiwiX1JlYWN0JENvbXBvbmVudCIsImNvbnRleHQiLCJwYXJlbnRHcm91cCIsInRyYW5zaXRpb25Hcm91cCIsImFwcGVhciIsImlzTW91bnRpbmciLCJpbml0aWFsU3RhdHVzIiwiYXBwZWFyU3RhdHVzIiwiaW4iLCJ1bm1vdW50T25FeGl0IiwibW91bnRPbkVudGVyIiwic3RhdHVzIiwibmV4dENhbGxiYWNrIiwiX3Byb3RvIiwiZ2V0Q2hpbGRDb250ZXh0IiwiX3JlZiIsIm5leHRJbiIsImNvbXBvbmVudERpZE1vdW50IiwidXBkYXRlU3RhdHVzIiwibmV4dFN0YXR1cyIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwiY2FuY2VsTmV4dENhbGxiYWNrIiwiZ2V0VGltZW91dHMiLCJ0aW1lb3V0IiwibW91bnRpbmciLCJmaW5kRE9NTm9kZSIsInBlcmZvcm1FbnRlciIsInBlcmZvcm1FeGl0IiwiX3RoaXMyIiwiYXBwZWFyaW5nIiwidGltZW91dHMiLCJzYWZlU2V0U3RhdGUiLCJvbkVudGVyZWQiLCJvbkVudGVyIiwib25FbnRlcmluZyIsIm9uVHJhbnNpdGlvbkVuZCIsIl90aGlzMyIsIm9uRXhpdGVkIiwib25FeGl0Iiwib25FeGl0aW5nIiwiY2FuY2VsIiwiY2FsbGJhY2siLCJzZXROZXh0Q2FsbGJhY2siLCJfdGhpczQiLCJldmVudCIsImhhbmRsZXIiLCJhZGRFbmRMaXN0ZW5lciIsInNldFRpbWVvdXQiLCJfdGhpcyRwcm9wcyIsImNoaWxkUHJvcHMiLCJjaGlsZCIsIkNoaWxkcmVuIiwib25seSIsImNsb25lRWxlbWVudCIsImNvbnRleHRUeXBlcyIsImNoaWxkQ29udGV4dFR5cGVzIiwicHJvcFR5cGVzIiwicHQiLCJfUHJvcFR5cGVzIiwibm9vcCIsIl9yZWFjdExpZmVjeWNsZXNDb21wYXQiLCJfYWRkQ2xhc3MiLCJfcmVtb3ZlQ2xhc3MiLCJfVHJhbnNpdGlvbiIsImNsYXNzZXMiLCJDU1NUcmFuc2l0aW9uIiwiX3RoaXMkZ2V0Q2xhc3NOYW1lcyIsImdldENsYXNzTmFtZXMiLCJyZW1vdmVDbGFzc2VzIiwiX3RoaXMkZ2V0Q2xhc3NOYW1lczIiLCJhY3RpdmVDbGFzc05hbWUiLCJyZWZsb3dBbmRBZGRDbGFzcyIsIl90aGlzJGdldENsYXNzTmFtZXMzIiwiZG9uZUNsYXNzTmFtZSIsIl90aGlzJGdldENsYXNzTmFtZXM0IiwiX3RoaXMkZ2V0Q2xhc3NOYW1lczUiLCJfdGhpcyRnZXRDbGFzc05hbWVzNiIsImNsYXNzTmFtZXMiLCJfdGhpcyRnZXRDbGFzc05hbWVzNyIsInNjcm9sbFRvcCIsImNyZWF0ZUVsZW1lbnQiLCJnZXRQb3NpdGlvbiIsInBvc2l0aW9uIiwiYm90dG9tIiwibGVmdCIsInRyYW5zZm9ybSIsInRvcCIsIlRvb2x0aXAiLCJjdXJyZW50Iiwib2Zmc2V0V2lkdGgiLCJvZmZzZXRIZWlnaHQiLCJjcmVhdGVSZWYiLCJvcGVuVG9vbHRpcCIsImNsb3NlVG9vbHRpcCIsIlNpZGVNZW51IiwiYXNpZGUiLCJNZW51TGlzdCIsInVsIiwiTWVudUxhYmVsIiwiQ2FyZEJvZHkiLCJDYXJkSGVhZGVyIiwiQ2FyZEZvb3RlciIsImZvb3RlciIsIkNhcmRJbWFnZSIsIkNhcmRJbWFnZUhvcml6b250YWwiLCJ1cmwiLCJob3Jpem9udGFsU3R5bGUiLCJmbGV4RGlyZWN0aW9uIiwiQ2FyZCIsImltYWdlIiwidGl0bGUiLCJob3Jpem9udGFsIiwicmVuZGVySGVhZGVyIiwid3JhcHBlclN0eWxlIiwiUmVhY3QiLCJQb3BvdmVyIiwidG9vbHRpcFN0eWxlIiwib3BlbkRyb3Bkb3duIiwiY2xvc2VEcm9wZG93biIsImRpc3BsYXkiLCJFU0NfS0VZIiwiTW9kYWwiLCJjbG9zZU9uRXNjIiwia2V5Q29kZSIsImNsb3NlTW9kYWwiLCJjbG9zZU9uT3ZlcmxheSIsImRvY3VtZW50IiwiYm9keSIsInJlbW92ZUNoaWxkIiwiYXBwZW5kQ2hpbGQiLCJjcmVhdGVQb3J0YWwiLCJleHRlcm5hbCIsIm9uQ2xpY2tPdmVybGF5IiwiZ2V0Q2hpbGRNYXBwaW5nIiwibWVyZ2VDaGlsZE1hcHBpbmdzIiwiZ2V0SW5pdGlhbENoaWxkTWFwcGluZyIsImdldE5leHRDaGlsZE1hcHBpbmciLCJtYXBGbiIsIm1hcHBlciIsInJlc3VsdCIsInByZXYiLCJnZXRWYWx1ZUZvcktleSIsIm5leHRLZXlzUGVuZGluZyIsInBlbmRpbmdLZXlzIiwicHJldktleSIsImNoaWxkTWFwcGluZyIsIm5leHRLZXkiLCJwZW5kaW5nTmV4dEtleSIsImdldFByb3AiLCJwcm9wIiwicHJldkNoaWxkTWFwcGluZyIsIm5leHRDaGlsZE1hcHBpbmciLCJoYXNQcmV2IiwiaGFzTmV4dCIsInByZXZDaGlsZCIsImlzTGVhdmluZyIsImNvbXBvbmVudCIsImNoaWxkRmFjdG9yeSIsIlRyYW5zaXRpb25Hcm91cCIsImhhbmRsZUV4aXRlZCIsImZpcnN0UmVuZGVyIiwiYXBwZWFyZWQiLCJtb3VudGVkIiwiX0NoaWxkTWFwcGluZyIsImN1cnJlbnRDaGlsZE1hcHBpbmciLCJUb2FzdEl0ZW0iLCJkdXJhdGlvbiIsImNsZWFyIiwic2V0UG9zaXRpb24iLCJpc0ZpeGVkIiwiYmFzZSIsIlRvYXN0Q29udGFpbmVyIiwidG9hc3RzIiwiY3NzVGV4dCIsInJlbmRlclRvYXN0IiwibmF2IiwiVGFiSXRlbSIsIkluZGljYXRvciIsIlRhYnMiLCJzdGFydCIsInRocmVzaG9sZCIsIm1heEl0ZW1zIiwiY291bnQiLCJ0b3RhbCIsInZpc2liaWxpdHkiLCJpbmRleCIsImdldEluZGljYXRvclBvc2l0aW9uIiwicmVuZGVyQ2hpbGRyZW4iLCJhY3RpdmVJbmRleCIsImxlbiIsIkxvYWRpbmdCYXIiLCJsb2FkaW5nIiwic3BpbiIsImtleWZyYW1lcyIsIlNwaW5uZXIiLCJib3JkZXJTaXplIiwiZm9udEZhbWlseSIsImZvbnRTaXplIiwicmFkaXVzIiwibGluayIsImluZm8iLCJzdWNjZXNzIiwid2FybmluZyIsImRhcmsiLCJsaWdodCIsImJsYWNrQmlzIiwiYmxhY2tUZXIiLCJ3aGl0ZUJpcyIsIndoaXRlVGVyIiwiZ3JleUxpZ2h0IiwiZ3JleUxpZ2h0ZXIiLCJub3JtYWxpemVkIl0sIm1hcHBpbmdzIjoiOzs7O0FBRWUsU0FBU0EsS0FBVCxHQUFpQjtTQUN2QjtJQUFLLEtBQUssRUFBRTtNQUFFQyxLQUFLLEVBQUUsTUFBVDtNQUFpQkMsTUFBTSxFQUFFOztJQUE1Qzs7O0FDR0ssU0FBU0MsV0FBVCxPQUF1QztNQUFoQkMsS0FBZ0IsUUFBaEJBLEtBQWdCO2lEQUNKQSxLQUFLLENBQUNDLFVBQU4sR0FBbUJELEtBQUssQ0FBQ0UsTUFBekIsR0FBa0MsQ0FBMUU7O0FBR0YsQUFBTyxTQUFTQyxXQUFULFFBQXVDO01BQWhCSCxLQUFnQixTQUFoQkEsS0FBZ0I7aURBQ0pBLEtBQUssQ0FBQ0MsVUFBTixHQUFtQkQsS0FBSyxDQUFDSSxNQUF6QixHQUFrQyxDQUExRTs7QUFHRixBQUFPLFNBQVNDLFlBQVQsUUFBd0M7TUFBaEJMLEtBQWdCLFNBQWhCQSxLQUFnQjtpREFDTEEsS0FBSyxDQUFDQyxVQUFOLEdBQW1CRCxLQUFLLENBQUNNLE9BQXpCLEdBQW1DLENBQTNFOztBQUdGLEFBQU8sU0FBU0MsV0FBVCxRQUF1QztNQUFoQlAsS0FBZ0IsU0FBaEJBLEtBQWdCO2lEQUNKQSxLQUFLLENBQUNDLFVBQU4sR0FBbUJELEtBQUssQ0FBQ1EsTUFBekIsR0FBa0MsQ0FBMUU7O0FBR0YsQUFBTyxTQUFTQyxnQkFBVCxRQUE0QztNQUFoQlQsS0FBZ0IsU0FBaEJBLEtBQWdCO2lEQUNUQSxLQUFLLENBQUNDLFVBQU4sR0FBbUJELEtBQUssQ0FBQ1EsTUFBekIsR0FBa0MsQ0FBMUU7OztBQ2ZGLFNBQVNFLGFBQVQsT0FBOEM7TUFBckJDLEtBQXFCLFFBQXJCQSxLQUFxQjs7TUFDeENBLEtBQUos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
