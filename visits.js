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

export { theme as defaultTheme, normalized as normalizeStyle, Break, Container, Row, Col, Content, Button, ButtonGroup, Table, Box, Progress, AppBar, Tag, Hero, Tooltip, Card, Popover, Modal, ToastContainer as Toast, Tabs, LoadingBar, Spinner, Pre, Code, H1, Field, TextInput, Textarea, Checkbox, Select, Radio, Approved as IconApproved, ChevronLeftRound as IconChevronLeftRound, ChevronRightRound as IconChevronRightRound, FileRound as IconFileRound, Pencil as IconPencil, User as IconUser, Close as IconClose, Refresh as IconRefresh, SideMenu, MenuList, MenuLabel, findColorInvert, hamburger as hambuger, boxShadow, Arrow as arrow, setSize, mediaMobile, mediaTablet, mediaDesktop, mediaFullHD, mediaUntilFullHD };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlzaXRzLmpzIiwic291cmNlcyI6WyIuLi9zcmMvY29tcG9uZW50cy9HcmlkL0JyZWFrLnRzeCIsIi4uL3NyYy91dGlscy9tZWRpYS50cyIsIi4uL3NyYy9jb21wb25lbnRzL0dyaWQvQ29udGFpbmVyLnRzIiwiLi4vc3JjL2NvbXBvbmVudHMvR3JpZC9Db2wudHMiLCIuLi9zcmMvY29tcG9uZW50cy9HcmlkL1Jvdy50cyIsIi4uL3NyYy9jb21wb25lbnRzL0NvbnRlbnQvUHJlLnRzIiwiLi4vc3JjL2NvbXBvbmVudHMvQ29udGVudC9Db2RlLnRzIiwiLi4vc3JjL2NvbXBvbmVudHMvQ29udGVudC9IMS50cyIsIi4uL3NyYy9jb21wb25lbnRzL0NvbnRlbnQvaW5kZXgudHMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9saXNoZWQvbGliL2ludGVybmFsSGVscGVycy9fY3VycnkuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9saXNoZWQvbGliL2ludGVybmFsSGVscGVycy9fZ3VhcmQuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9saXNoZWQvbGliL2ludGVybmFsSGVscGVycy9faHNsVG9SZ2IuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9saXNoZWQvbGliL2ludGVybmFsSGVscGVycy9fbmFtZVRvSGV4LmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3BvbGlzaGVkL2xpYi9pbnRlcm5hbEhlbHBlcnMvX2Vycm9ycy5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb2xpc2hlZC9saWIvY29sb3IvcGFyc2VUb1JnYi5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb2xpc2hlZC9saWIvaW50ZXJuYWxIZWxwZXJzL19yZ2JUb0hzbC5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb2xpc2hlZC9saWIvY29sb3IvcGFyc2VUb0hzbC5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb2xpc2hlZC9saWIvaW50ZXJuYWxIZWxwZXJzL19yZWR1Y2VIZXhWYWx1ZS5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb2xpc2hlZC9saWIvaW50ZXJuYWxIZWxwZXJzL19udW1iZXJUb0hleC5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb2xpc2hlZC9saWIvaW50ZXJuYWxIZWxwZXJzL19oc2xUb0hleC5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb2xpc2hlZC9saWIvY29sb3IvaHNsLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3BvbGlzaGVkL2xpYi9jb2xvci9oc2xhLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3BvbGlzaGVkL2xpYi9jb2xvci9yZ2IuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9saXNoZWQvbGliL2NvbG9yL3JnYmEuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9saXNoZWQvbGliL2NvbG9yL3RvQ29sb3JTdHJpbmcuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9saXNoZWQvbGliL2NvbG9yL2Rhcmtlbi5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb2xpc2hlZC9saWIvY29sb3IvZ2V0THVtaW5hbmNlLmpzIiwiLi4vc3JjL3V0aWxzL2ZpbmRDb2xvckludmVydC50cyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb2xpc2hlZC9saWIvY29sb3IvdHJhbnNwYXJlbnRpemUuanMiLCIuLi9zcmMvdXRpbHMvYm94U2hhZG93LnRzIiwiLi4vc3JjL3V0aWxzL3NldFNpemUudHMiLCIuLi9zcmMvdXRpbHMvZGlzYWJsZWRDb2xvci50cyIsIi4uL3NyYy9jb21wb25lbnRzL0J1dHRvbi9pbmRleC50cyIsIi4uL3NyYy9jb21wb25lbnRzL0J1dHRvbi9CdXR0b25Hcm91cC50cyIsIi4uL3NyYy9jb21wb25lbnRzL1RhYmxlL2luZGV4LnRzIiwiLi4vc3JjL2NvbXBvbmVudHMvQm94L2luZGV4LnRzeCIsIi4uL3NyYy9jb21wb25lbnRzL1Byb2dyZXNzL2luZGV4LnRzeCIsIi4uL3NyYy9jb21wb25lbnRzL0Zvcm0vRmllbGQudHN4IiwiLi4vc3JjL3V0aWxzL2hhbWJ1Z2VyLnRzIiwiLi4vc3JjL3V0aWxzL2Fycm93LnRzIiwiLi4vc3JjL2NvbXBvbmVudHMvRm9ybS9IZWxwTWVzc2FnZS50c3giLCIuLi9zcmMvY29tcG9uZW50cy9Gb3JtL1RleHRJbnB1dC50c3giLCIuLi9zcmMvY29tcG9uZW50cy9Gb3JtL1RleHRhcmVhLnRzeCIsIi4uL3NyYy9jb21wb25lbnRzL0Zvcm0vQ2hlY2tib3gudHN4IiwiLi4vc3JjL2NvbXBvbmVudHMvRm9ybS9TZWxlY3QudHN4IiwiLi4vc3JjL2NvbXBvbmVudHMvRm9ybS9SYWRpby50c3giLCIuLi9zcmMvY29tcG9uZW50cy9JY29ucy9BcHByb3ZlZC50c3giLCIuLi9zcmMvY29tcG9uZW50cy9JY29ucy9DaGV2cm9uTGVmdFJvdW5kLnRzeCIsIi4uL3NyYy9jb21wb25lbnRzL0ljb25zL0NoZXZyb25SaWdodFJvdW5kLnRzeCIsIi4uL3NyYy9jb21wb25lbnRzL0ljb25zL0ZpbGVSb3VuZC50c3giLCIuLi9zcmMvY29tcG9uZW50cy9JY29ucy9QZW5jaWwudHN4IiwiLi4vc3JjL2NvbXBvbmVudHMvSWNvbnMvVXNlci50c3giLCIuLi9zcmMvY29tcG9uZW50cy9JY29ucy9DbG9zZS50c3giLCIuLi9zcmMvY29tcG9uZW50cy9JY29ucy9SZWZyZXNoLnRzeCIsIi4uL3NyYy91dGlscy9zZXRBbGlnbi50cyIsIi4uL3NyYy9jb21wb25lbnRzL0FwcEJhci9pbmRleC50c3giLCIuLi9zcmMvY29tcG9uZW50cy9UYWcvaW5kZXgudHN4IiwiLi4vc3JjL2NvbXBvbmVudHMvSGVyby9pbmRleC50c3giLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVhY3QtaXMvY2pzL3JlYWN0LWlzLnByb2R1Y3Rpb24ubWluLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3JlYWN0LWlzL2Nqcy9yZWFjdC1pcy5kZXZlbG9wbWVudC5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZWFjdC1pcy9pbmRleC5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9vYmplY3QtYXNzaWduL2luZGV4LmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvbGliL1JlYWN0UHJvcFR5cGVzU2VjcmV0LmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvY2hlY2tQcm9wVHlwZXMuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9mYWN0b3J5V2l0aFR5cGVDaGVja2Vycy5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2ZhY3RvcnlXaXRoVGhyb3dpbmdTaGltcy5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2luZGV4LmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2RvbS1oZWxwZXJzL2NsYXNzL2hhc0NsYXNzLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2RvbS1oZWxwZXJzL2NsYXNzL2FkZENsYXNzLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2RvbS1oZWxwZXJzL2NsYXNzL3JlbW92ZUNsYXNzLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3JlYWN0LWxpZmVjeWNsZXMtY29tcGF0L3JlYWN0LWxpZmVjeWNsZXMtY29tcGF0LmVzLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3JlYWN0LXRyYW5zaXRpb24tZ3JvdXAvdXRpbHMvUHJvcFR5cGVzLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3JlYWN0LXRyYW5zaXRpb24tZ3JvdXAvVHJhbnNpdGlvbi5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZWFjdC10cmFuc2l0aW9uLWdyb3VwL0NTU1RyYW5zaXRpb24uanMiLCIuLi9zcmMvY29tcG9uZW50cy9Ub29sdGlwL2luZGV4LnRzeCIsIi4uL3NyYy9jb21wb25lbnRzL1NpZGVNZW51L2luZGV4LnRzeCIsIi4uL3NyYy9jb21wb25lbnRzL0NhcmQvaW5kZXgudHN4IiwiLi4vc3JjL2NvbXBvbmVudHMvUG9wb3Zlci9pbmRleC50c3giLCIuLi9zcmMvY29tcG9uZW50cy9Nb2RhbC9pbmRleC50c3giLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVhY3QtdHJhbnNpdGlvbi1ncm91cC91dGlscy9DaGlsZE1hcHBpbmcuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVhY3QtdHJhbnNpdGlvbi1ncm91cC9UcmFuc2l0aW9uR3JvdXAuanMiLCIuLi9zcmMvY29tcG9uZW50cy9Ub2FzdC9pbmRleC50c3giLCIuLi9zcmMvY29tcG9uZW50cy9UYWJzL2luZGV4LnRzeCIsIi4uL3NyYy9jb21wb25lbnRzL0xvYWRpbmcvQmFyLnRzeCIsIi4uL3NyYy9jb21wb25lbnRzL0xvYWRpbmcvU3Bpbm5lci50c3giLCIuLi9zcmMvY29tcG9uZW50cy9pbmRleC50cyIsIi4uL3NyYy90aGVtZS9kZWZhdWx0LnRzIiwiLi4vc3JjL3N0eWxlcy9ub3JtYWxpemUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQnJlYWsoKSB7XG4gIHJldHVybiA8ZGl2IHN0eWxlPXt7IHdpZHRoOiAnMTAwJScsIGhlaWdodDogMCB9fSAvPjtcbn07XG4iLCJpbXBvcnQgeyBUaGVtZVR5cGUgfSBmcm9tICcuLi90eXBlcyc7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIHRoZW1lOiBUaGVtZVR5cGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZWRpYU1vYmlsZSh7IHRoZW1lIH06IFByb3BzKSB7XG4gIHJldHVybiBgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogJHt0aGVtZS5yZXNwb25zaXZlID8gdGhlbWUubW9iaWxlIDogMH1weClgO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWVkaWFUYWJsZXQoeyB0aGVtZSB9OiBQcm9wcykge1xuICByZXR1cm4gYEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICR7dGhlbWUucmVzcG9uc2l2ZSA/IHRoZW1lLnRhYmxldCA6IDB9cHgpYDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1lZGlhRGVza3RvcCh7IHRoZW1lIH06IFByb3BzKSB7XG4gIHJldHVybiBgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJHt0aGVtZS5yZXNwb25zaXZlID8gdGhlbWUuZGVza3RvcCA6IDB9cHgpYDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1lZGlhRnVsbEhEKHsgdGhlbWUgfTogUHJvcHMpIHtcbiAgcmV0dXJuIGBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAke3RoZW1lLnJlc3BvbnNpdmUgPyB0aGVtZS5mdWxsaGQgOiAwfXB4KWA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZWRpYVVudGlsRnVsbEhEKHsgdGhlbWUgfTogUHJvcHMpIHtcbiAgcmV0dXJuIGBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAke3RoZW1lLnJlc3BvbnNpdmUgPyB0aGVtZS5mdWxsaGQgOiAwfXB4KWA7XG59XG4iLCJpbXBvcnQgc3R5bGVkLCB7IGNzcyB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7IG1lZGlhRnVsbEhELCBtZWRpYVRhYmxldCwgbWVkaWFEZXNrdG9wLCBtZWRpYU1vYmlsZSB9IGZyb20gJy4uLy4uL3V0aWxzL21lZGlhJztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgLyoqICAqL1xuICBmbHVpZD86IGJvb2xlYW47XG59XG5cbmZ1bmN0aW9uIHNldFJlc3BvbnNpdmUoeyBmbHVpZCB9OiBQcm9wcyk6IGFueSB7XG4gIGlmIChmbHVpZCkge1xuICAgIHJldHVybiBjc3NgXG4gICAgICAke21lZGlhTW9iaWxlfSB7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDAuNXJlbTtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwLjVyZW07XG4gICAgICB9XG4gICAgICAke21lZGlhRGVza3RvcH0ge1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwLjc1cmVtO1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDAuNzVyZW07XG4gICAgICB9XG4gICAgICAke21lZGlhRnVsbEhEfSB7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDAuNzVyZW07XG4gICAgICAgIHBhZGRpbmctbGVmdDogMC43NXJlbTtcbiAgICAgIH1cbiAgICBgO1xuICB9XG5cbiAgcmV0dXJuIGNzc2BcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgJHttZWRpYU1vYmlsZX0ge1xuICAgICAgbWF4LXdpZHRoOiAkeyh7IHRoZW1lIH06IGFueSkgPT4gdGhlbWUubW9iaWxlIC0gKDIgKiB0aGVtZS5zbWFsbEd1dHRlcil9cHg7XG4gICAgfVxuICAgICR7bWVkaWFUYWJsZXR9IHtcbiAgICAgIG1heC13aWR0aDogJHsoeyB0aGVtZSB9OiBhbnkpID0+IHRoZW1lLnRhYmxldCAtICgyICogdGhlbWUuc21hbGxHdXR0ZXIpfXB4O1xuICAgIH1cbiAgICAke21lZGlhRGVza3RvcH0ge1xuICAgICAgbWF4LXdpZHRoOiAkeyh7IHRoZW1lIH06IGFueSkgPT4gdGhlbWUuZGVza3RvcCAtICgyICogdGhlbWUuZ3V0dGVyKX1weDtcbiAgICB9XG4gICAgJHttZWRpYUZ1bGxIRH0ge1xuICAgICAgbWF4LXdpZHRoOiAkeyh7IHRoZW1lIH06IGFueSkgPT4gdGhlbWUuZnVsbGhkIC0gKDIgKiB0aGVtZS5ndXR0ZXIpfXB4O1xuICAgIH1cbiAgYDtcbn1cblxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdjxQcm9wcz5gXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG5cbiAgJHtzZXRSZXNwb25zaXZlfVxuYDtcbkNvbnRhaW5lci5kaXNwbGF5TmFtZSA9ICdDb250YWluZXInO1xuQ29udGFpbmVyLmRlZmF1bHRQcm9wcyA9IHtcbiAgZmx1aWQ6IGZhbHNlLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29udGFpbmVyO1xuIiwiaW1wb3J0IHN0eWxlZCwgeyBjc3MgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgeyBtZWRpYU1vYmlsZSwgbWVkaWFUYWJsZXQgfSBmcm9tICcuLi8uLi91dGlscy9tZWRpYSc7XG5pbXBvcnQgeyBDb2xTaXplVHlwZSB9IGZyb20gJy4uLy4uL3R5cGVzJztcblxuaW50ZXJmYWNlIENvbFByb3BzIHtcbiAgLyoqIOWbuuWumuOBruW5heOCkuaMh+WumuOBmeOCi+WgtOWQiCAqL1xuICBuYXJyb3c/OiBib29sZWFuO1xuICAvKiogMS0xMuOBruOCteOCpOOCuiAqL1xuICBzaXplPzogQ29sU2l6ZVR5cGU7XG4gIC8qKiAxLTEy44Gu5bem44Gub2Zmc2V0ICovXG4gIG9mZnNldD86IENvbFNpemVUeXBlO1xuICAvKiogMS0xMuWfuua6luOBruOCteOCpOOCuuOCkueUu+mdouOCteOCpOOCuuOBruOCiOOBo+OBpuWPr+WkieOBq+OBmeOCiyAqL1xuICBhdXRvPzogYm9vbGVhbjtcbn1cblxuZnVuY3Rpb24gcGFyY2VudGFnZSh2YWx1ZT86IENvbFNpemVUeXBlKSB7XG4gIGlmICghdmFsdWUpIHJldHVybiAwO1xuICBpZiAodmFsdWUgPj0gMTIpIHJldHVybiAxMDA7XG4gIHJldHVybiBNYXRoLmNlaWwoKHZhbHVlIC8gMTIpICogMTAwICogMTAwMDAwKSAvIDEwMDAwMDtcbn1cblxuZnVuY3Rpb24gcmVuZGVyU2l6ZSh7IHNpemUsIG5hcnJvdywgYXV0bywgb2Zmc2V0IH06IENvbFByb3BzKSB7XG4gIGlmIChuYXJyb3cpIHJldHVybiBudWxsO1xuICBpZiAoIXNpemUgfHwgc2l6ZSA8IDEgfHwgc2l6ZSA+IDEyKSB7XG4gICAgcmV0dXJuIGNzc2BcbiAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgbWF4LXdpZHRoOiBub25lO1xuICAgIGA7XG4gIH1cblxuICBjb25zdCB2YWx1ZSA9IHBhcmNlbnRhZ2Uoc2l6ZSk7XG4gIGNvbnN0IG9mZlZhbCA9IG9mZnNldCA/IHBhcmNlbnRhZ2Uob2Zmc2V0KSA6IDA7XG4gIGNvbnN0IGF1dG9TaXplID0gdmFsdWUgPiAzMyA/IDEwMCA6IHZhbHVlICogMztcbiAgcmV0dXJuIGNzc2BcbiAgICB3aWR0aDogJHt2YWx1ZX0lO1xuICAgIG1heC13aWR0aDogJHt2YWx1ZX0lO1xuICAgICR7b2Zmc2V0ID8gYG1hcmdpbi1sZWZ0OiAke29mZlZhbH0lO2AgOiB7fX1cblxuICAgICR7bWVkaWFNb2JpbGV9IHtcbiAgICAgIHdpZHRoOiAke2F1dG9TaXplfSU7XG4gICAgICBtYXgtd2lkdGg6ICR7YXV0b1NpemV9JTtcbiAgICAgICR7b2Zmc2V0ID8gYG1hcmdpbi1sZWZ0OiAwO2AgOiB7fX1cbiAgICB9XG4gIGA7XG59XG5cbmNvbnN0IENvbCA9IHN0eWxlZC5kaXY8Q29sUHJvcHM+YFxuICBkaXNwbGF5OiBibG9jaztcbiAgbWluLWhlaWdodDogMXB4O1xuXG4gICR7KHsgbmFycm93IH0pID0+IG5hcnJvdyA/ICdmbGV4OiBub25lOycgOiB7fX1cbiAgJHsoeyBvZmZzZXQgfSkgPT4gb2Zmc2V0ID8gYG1hcmdpbi1sZWZ0OiAke3BhcmNlbnRhZ2Uob2Zmc2V0KX0lO2AgOiB7fX1cblxuICAke3JlbmRlclNpemV9XG5cbiAgcGFkZGluZzogMC43NXJlbTtcblxuICAke21lZGlhVGFibGV0fSB7XG4gICAgcGFkZGluZzogMC41cmVtO1xuICB9XG5gO1xuXG5Db2wuZGlzcGxheU5hbWUgPSAnQ29sJztcblxuZXhwb3J0IGRlZmF1bHQgQ29sO1xuIiwiaW1wb3J0IHN0eWxlZCwgeyBjc3MgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgQ29sIGZyb20gJy4vQ29sJztcbmltcG9ydCB7IG1lZGlhRnVsbEhELCBtZWRpYVRhYmxldCB9IGZyb20gJy4uLy4uL3V0aWxzL21lZGlhJztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgLyoqIOWbuuWumuW5hSAqL1xuICB3aWR0aD86IHN0cmluZztcbiAgLyoqIOWQkeOBj+aVsOOBruihjOOBp+WvvuW/nOOBp+OBjeOCi+OCiOOBhuOBq+OBmeOCiyAqL1xuICBtdWx0aWxpbmU/OiBib29sZWFuO1xuICAvKiog57im44Gu5Lit5aSu5o+D44GI44Gr44GZ44KLICovXG4gIHZjZW50ZXI/OiBib29sZWFuO1xuICAvKiog5qiq5bmF44Gu5Lit5aSu5o+D44GI44Gr44GZ44KLICovXG4gIGNlbnRlcj86IGJvb2xlYW47XG4gIC8qKiBDb2zjga7plpPpmpTjgpLjgarjgY/jgZkgKi9cbiAgbm9HdXR0ZXI/OiBib29sZWFuO1xufVxuXG5mdW5jdGlvbiByZW5kZXJHdXR0ZXIoeyBub0d1dHRlciB9OiBQcm9wcykge1xuICBpZiAobm9HdXR0ZXIpIHtcbiAgICByZXR1cm4gY3NzYFxuICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgICAgbWFyZ2luLWxlZnQ6IDA7XG5cbiAgICAgID4gJHtDb2x9IHtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMDtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgICAgfVxuICAgIGA7XG4gIH1cbiAgcmV0dXJuIGNzc2BcbiAgICAke21lZGlhVGFibGV0fSB7XG4gICAgICBtYXJnaW4tbGVmdDogLTAuNXJlbTtcbiAgICAgIG1hcmdpbi1yaWdodDogLTAuNXJlbTtcbiAgICAgIG1hcmdpbi10b3A6IC0wLjVyZW07XG5cbiAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IC0wLjVyZW07XG4gICAgICB9XG5cbiAgICAgICY6bm90KDpsYXN0LWNoaWxkKSB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAke21lZGlhRnVsbEhEfSB7XG4gICAgICBtYXJnaW4tbGVmdDogLTAuNzVyZW07XG4gICAgICBtYXJnaW4tcmlnaHQ6IC0wLjc1cmVtO1xuICAgICAgbWFyZ2luLXRvcDogLTAuNzVyZW07XG5cbiAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IC0wLjc1cmVtO1xuICAgICAgfVxuXG4gICAgICAmOm5vdCg6bGFzdC1jaGlsZCkge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjc1cmVtO1xuICAgICAgfVxuICAgIH1cbiAgYDtcbn1cblxuY29uc3QgUm93ID0gc3R5bGVkLmRpdjxQcm9wcz5gXG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICBmbGV4LXdyYXA6IHdyYXA7XG5cbiAgJHsoeyB2Y2VudGVyIH0pID0+IHZjZW50ZXIgPyAnYWxpZ24taXRlbXM6IGNlbnRlcjsnIDogJyd9XG4gICR7KHsgY2VudGVyIH0pID0+IGNlbnRlciA/ICdqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsnIDogJyd9XG5cbiAgJHtyZW5kZXJHdXR0ZXJ9XG5gO1xuXG5Sb3cuZGlzcGxheU5hbWUgPSAnUm93JztcblxuZXhwb3J0IGRlZmF1bHQgUm93O1xuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmNvbnN0IFByZSA9IHN0eWxlZC5wcmVgXG4gIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcbiAgb3ZlcmZsb3cteDogYXV0bztcbiAgcGFkZGluZzogMS4yNWVtIDEuNWVtO1xuICB3aGl0ZS1zcGFjZTogcHJlO1xuICB3b3JkLXdyYXA6IG5vcm1hbDtcblxuICAmOm5vdCg6bGFzdC1jaGlsZCkge1xuICAgIG1hcmdpbi1ib3R0b206IDFlbTtcbiAgfVxuYDtcblByZS5kaXNwbGF5TmFtZSA9ICdQcmUnO1xuXG5leHBvcnQgZGVmYXVsdCBQcmU7XG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuY29uc3QgQ29kZSA9IHN0eWxlZC5jb2RlYFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmJhY2tncm91bmR9O1xuICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5kYW5nZXJ9O1xuICBmb250LXNpemU6IC44NzVlbTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgcGFkZGluZzogLjI1ZW0gLjVlbSAuMjVlbTtcbmA7XG5cbkNvZGUuZGlzcGxheU5hbWUgPSAnQ29kZSc7XG5cbmV4cG9ydCBkZWZhdWx0IENvZGU7XG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuY29uc3QgSDEgPSBzdHlsZWQuaDFgXG4gIGZvbnQtc2l6ZTogMmVtO1xuICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcbiAgcGFkZGluZy1sZWZ0OiAxcmVtO1xuXG4gIGJvcmRlci1sZWZ0OiAxcmVtIHNvbGlkO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQ7XG4gIGJvcmRlci1jb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5ib3JkZXJ9O1xuYDtcbkgxLmRpc3BsYXlOYW1lID0gJ0gxJztcblxuZXhwb3J0IGRlZmF1bHQgSDE7XG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuY29uc3QgQ29udGVudCA9IHN0eWxlZC5kaXZgXG4gIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnRleHR9O1xuICBsaW5lLWhlaWdodDogMS41O1xuXG4gIGxpICsgbGkge1xuICAgIG1hcmdpbi10b3A6IDAuMjVlbTtcbiAgfVxuXG4gIHAsXG4gIGRsLFxuICBvbCxcbiAgdWwsXG4gIGJsb2NrcXVvdGUsXG4gIHByZSxcbiAgdGFibGUge1xuICAgICY6bm90KDpsYXN0LWNoaWxkKSB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxZW07XG4gICAgfVxuICB9XG5cbiAgaDEsXG4gIGgyLFxuICBoMyxcbiAgaDQsXG4gIGg1LFxuICBoNiB7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBsaW5lLWhlaWdodDogMS4xMjU7XG4gIH1cblxuICBoMSB7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDAuNWVtO1xuICB9XG5cbiAgaDIge1xuICAgIGZvbnQtc2l6ZTogMS43NWVtO1xuICAgIG1hcmdpbi1ib3R0b206IDAuNTcxNGVtO1xuXG4gICAgJjpub3QoOmZpcnN0LWNoaWxkKSB7XG4gICAgICBtYXJnaW4tdG9wOiAxLjE0MjhlbTtcbiAgICB9XG4gIH1cblxuICBoMyB7XG4gICAgZm9udC1zaXplOiAxLjVlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjY2NjZlbTtcblxuICAgICY6bm90KDpmaXJzdC1jaGlsZCkge1xuICAgICAgbWFyZ2luLXRvcDogMS4zMzMzZW07XG4gICAgfVxuICB9XG5cbiAgaDQge1xuICAgIGZvbnQtc2l6ZTogMS4yNWVtO1xuICAgIG1hcmdpbi1ib3R0b206IDAuOGVtO1xuICB9XG5cbiAgaDUge1xuICAgIGZvbnQtc2l6ZTogMS4xMjVlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjg4ODhlbTtcbiAgfVxuXG4gIGg2IHtcbiAgICBmb250LXNpemU6IDFlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XG4gIH1cblxuICBvbCB7XG4gICAgbGlzdC1zdHlsZTogZGVjaW1hbCBvdXRzaWRlO1xuICAgIG1hcmdpbi1sZWZ0OiAyZW07XG4gICAgbWFyZ2luLXRvcDogMWVtO1xuICB9XG5cbiAgdWwge1xuICAgIGxpc3Qtc3R5bGU6IGRpc2Mgb3V0c2lkZTtcbiAgICBtYXJnaW4tbGVmdDogMmVtO1xuICAgIG1hcmdpbi10b3A6IDFlbTtcbiAgICB1bCB7XG4gICAgICBsaXN0LXN0eWxlLXR5cGU6IGNpcmNsZTtcbiAgICAgIG1hcmdpbi10b3A6IDAuNWVtO1xuICAgICAgdWwge1xuICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IHNxdWFyZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBkZCB7XG4gICAgbWFyZ2luLWxlZnQ6IDJlbTtcbiAgfVxuXG4gIHRhYmxlIHtcbiAgICB3aWR0aDogMTAwJTtcblxuICAgIHRkLCB0aCB7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmJvcmRlcn07XG4gICAgICBib3JkZXItd2lkdGg6IDAgMCAxcHg7XG4gICAgICBwYWRkaW5nOiAwLjVlbSAwLjc1ZW07XG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgIH1cblxuICAgIHRoIHtcbiAgICAgIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnRleHR9O1xuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICB9XG5cbiAgICB0aGVhZCB7XG4gICAgICB0ZCwgdGgge1xuICAgICAgICBib3JkZXItd2lkdGg6IDAgMCAycHg7XG4gICAgICAgIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnRleHR9O1xuICAgICAgfVxuICAgIH1cblxuICAgIHRmb290IHtcbiAgICAgIHRkLCB0aCB7XG4gICAgICAgIGJvcmRlci13aWR0aDogMnB4IDAgMDtcbiAgICAgICAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUudGV4dH07XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGJvZHkgPiB0cjpsYXN0LWNoaWxke1xuICAgICAgdGQsIHRoIHtcbiAgICAgICAgYm9yZGVyLWJvdHRvbS13aWR0aDogMDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbmA7XG5Db250ZW50LmRpc3BsYXlOYW1lID0gJ0NvbnRlbnQnO1xuXG5leHBvcnQgeyBkZWZhdWx0IGFzIFByZSB9IGZyb20gJy4vUHJlJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQ29kZSB9IGZyb20gJy4vQ29kZSc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEgxIH0gZnJvbSAnLi9IMSc7XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRlbnQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IGN1cnJ5O1xuXG4vLyBUeXBlIGRlZmluaXRpb25zIHRha2VuIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL2djYW50aS9mbG93LXN0YXRpYy1sYW5kL2Jsb2IvbWFzdGVyL3NyYy9GdW4uanNcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVkZWNsYXJlXG5mdW5jdGlvbiBjdXJyaWVkKGYsIGxlbmd0aCwgYWNjKSB7XG4gIHJldHVybiBmdW5jdGlvbiBmbigpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLXJlc3QtcGFyYW1zXG4gICAgdmFyIGNvbWJpbmVkID0gYWNjLmNvbmNhdChBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpKTtcbiAgICByZXR1cm4gY29tYmluZWQubGVuZ3RoID49IGxlbmd0aCA/IGYuYXBwbHkodGhpcywgY29tYmluZWQpIDogY3VycmllZChmLCBsZW5ndGgsIGNvbWJpbmVkKTtcbiAgfTtcbn0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlZGVjbGFyZVxuXG5cbmZ1bmN0aW9uIGN1cnJ5KGYpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1yZWRlY2xhcmVcbiAgcmV0dXJuIGN1cnJpZWQoZiwgZi5sZW5ndGgsIFtdKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbmZ1bmN0aW9uIGd1YXJkKGxvd2VyQm91bmRhcnksIHVwcGVyQm91bmRhcnksIHZhbHVlKSB7XG4gIHJldHVybiBNYXRoLm1heChsb3dlckJvdW5kYXJ5LCBNYXRoLm1pbih1cHBlckJvdW5kYXJ5LCB2YWx1ZSkpO1xufVxuXG52YXIgX2RlZmF1bHQgPSBndWFyZDtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbmZ1bmN0aW9uIGNvbG9yVG9JbnQoY29sb3IpIHtcbiAgcmV0dXJuIE1hdGgucm91bmQoY29sb3IgKiAyNTUpO1xufVxuXG5mdW5jdGlvbiBjb252ZXJ0VG9JbnQocmVkLCBncmVlbiwgYmx1ZSkge1xuICByZXR1cm4gY29sb3JUb0ludChyZWQpICsgXCIsXCIgKyBjb2xvclRvSW50KGdyZWVuKSArIFwiLFwiICsgY29sb3JUb0ludChibHVlKTtcbn1cblxuZnVuY3Rpb24gaHNsVG9SZ2IoaHVlLCBzYXR1cmF0aW9uLCBsaWdodG5lc3MsIGNvbnZlcnQpIHtcbiAgaWYgKGNvbnZlcnQgPT09IHZvaWQgMCkge1xuICAgIGNvbnZlcnQgPSBjb252ZXJ0VG9JbnQ7XG4gIH1cblxuICBpZiAoc2F0dXJhdGlvbiA9PT0gMCkge1xuICAgIC8vIGFjaHJvbWF0aWNcbiAgICByZXR1cm4gY29udmVydChsaWdodG5lc3MsIGxpZ2h0bmVzcywgbGlnaHRuZXNzKTtcbiAgfSAvLyBmb3JtdWxhciBmcm9tIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0hTTF9hbmRfSFNWXG5cblxuICB2YXIgaHVlUHJpbWUgPSBodWUgJSAzNjAgLyA2MDtcbiAgdmFyIGNocm9tYSA9ICgxIC0gTWF0aC5hYnMoMiAqIGxpZ2h0bmVzcyAtIDEpKSAqIHNhdHVyYXRpb247XG4gIHZhciBzZWNvbmRDb21wb25lbnQgPSBjaHJvbWEgKiAoMSAtIE1hdGguYWJzKGh1ZVByaW1lICUgMiAtIDEpKTtcbiAgdmFyIHJlZCA9IDA7XG4gIHZhciBncmVlbiA9IDA7XG4gIHZhciBibHVlID0gMDtcblxuICBpZiAoaHVlUHJpbWUgPj0gMCAmJiBodWVQcmltZSA8IDEpIHtcbiAgICByZWQgPSBjaHJvbWE7XG4gICAgZ3JlZW4gPSBzZWNvbmRDb21wb25lbnQ7XG4gIH0gZWxzZSBpZiAoaHVlUHJpbWUgPj0gMSAmJiBodWVQcmltZSA8IDIpIHtcbiAgICByZWQgPSBzZWNvbmRDb21wb25lbnQ7XG4gICAgZ3JlZW4gPSBjaHJvbWE7XG4gIH0gZWxzZSBpZiAoaHVlUHJpbWUgPj0gMiAmJiBodWVQcmltZSA8IDMpIHtcbiAgICBncmVlbiA9IGNocm9tYTtcbiAgICBibHVlID0gc2Vjb25kQ29tcG9uZW50O1xuICB9IGVsc2UgaWYgKGh1ZVByaW1lID49IDMgJiYgaHVlUHJpbWUgPCA0KSB7XG4gICAgZ3JlZW4gPSBzZWNvbmRDb21wb25lbnQ7XG4gICAgYmx1ZSA9IGNocm9tYTtcbiAgfSBlbHNlIGlmIChodWVQcmltZSA+PSA0ICYmIGh1ZVByaW1lIDwgNSkge1xuICAgIHJlZCA9IHNlY29uZENvbXBvbmVudDtcbiAgICBibHVlID0gY2hyb21hO1xuICB9IGVsc2UgaWYgKGh1ZVByaW1lID49IDUgJiYgaHVlUHJpbWUgPCA2KSB7XG4gICAgcmVkID0gY2hyb21hO1xuICAgIGJsdWUgPSBzZWNvbmRDb21wb25lbnQ7XG4gIH1cblxuICB2YXIgbGlnaHRuZXNzTW9kaWZpY2F0aW9uID0gbGlnaHRuZXNzIC0gY2hyb21hIC8gMjtcbiAgdmFyIGZpbmFsUmVkID0gcmVkICsgbGlnaHRuZXNzTW9kaWZpY2F0aW9uO1xuICB2YXIgZmluYWxHcmVlbiA9IGdyZWVuICsgbGlnaHRuZXNzTW9kaWZpY2F0aW9uO1xuICB2YXIgZmluYWxCbHVlID0gYmx1ZSArIGxpZ2h0bmVzc01vZGlmaWNhdGlvbjtcbiAgcmV0dXJuIGNvbnZlcnQoZmluYWxSZWQsIGZpbmFsR3JlZW4sIGZpbmFsQmx1ZSk7XG59XG5cbnZhciBfZGVmYXVsdCA9IGhzbFRvUmdiO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBuYW1lZENvbG9yTWFwID0ge1xuICBhbGljZWJsdWU6ICdmMGY4ZmYnLFxuICBhbnRpcXVld2hpdGU6ICdmYWViZDcnLFxuICBhcXVhOiAnMDBmZmZmJyxcbiAgYXF1YW1hcmluZTogJzdmZmZkNCcsXG4gIGF6dXJlOiAnZjBmZmZmJyxcbiAgYmVpZ2U6ICdmNWY1ZGMnLFxuICBiaXNxdWU6ICdmZmU0YzQnLFxuICBibGFjazogJzAwMCcsXG4gIGJsYW5jaGVkYWxtb25kOiAnZmZlYmNkJyxcbiAgYmx1ZTogJzAwMDBmZicsXG4gIGJsdWV2aW9sZXQ6ICc4YTJiZTInLFxuICBicm93bjogJ2E1MmEyYScsXG4gIGJ1cmx5d29vZDogJ2RlYjg4NycsXG4gIGNhZGV0Ymx1ZTogJzVmOWVhMCcsXG4gIGNoYXJ0cmV1c2U6ICc3ZmZmMDAnLFxuICBjaG9jb2xhdGU6ICdkMjY5MWUnLFxuICBjb3JhbDogJ2ZmN2Y1MCcsXG4gIGNvcm5mbG93ZXJibHVlOiAnNjQ5NWVkJyxcbiAgY29ybnNpbGs6ICdmZmY4ZGMnLFxuICBjcmltc29uOiAnZGMxNDNjJyxcbiAgY3lhbjogJzAwZmZmZicsXG4gIGRhcmtibHVlOiAnMDAwMDhiJyxcbiAgZGFya2N5YW46ICcwMDhiOGInLFxuICBkYXJrZ29sZGVucm9kOiAnYjg4NjBiJyxcbiAgZGFya2dyYXk6ICdhOWE5YTknLFxuICBkYXJrZ3JlZW46ICcwMDY0MDAnLFxuICBkYXJrZ3JleTogJ2E5YTlhOScsXG4gIGRhcmtraGFraTogJ2JkYjc2YicsXG4gIGRhcmttYWdlbnRhOiAnOGIwMDhiJyxcbiAgZGFya29saXZlZ3JlZW46ICc1NTZiMmYnLFxuICBkYXJrb3JhbmdlOiAnZmY4YzAwJyxcbiAgZGFya29yY2hpZDogJzk5MzJjYycsXG4gIGRhcmtyZWQ6ICc4YjAwMDAnLFxuICBkYXJrc2FsbW9uOiAnZTk5NjdhJyxcbiAgZGFya3NlYWdyZWVuOiAnOGZiYzhmJyxcbiAgZGFya3NsYXRlYmx1ZTogJzQ4M2Q4YicsXG4gIGRhcmtzbGF0ZWdyYXk6ICcyZjRmNGYnLFxuICBkYXJrc2xhdGVncmV5OiAnMmY0ZjRmJyxcbiAgZGFya3R1cnF1b2lzZTogJzAwY2VkMScsXG4gIGRhcmt2aW9sZXQ6ICc5NDAwZDMnLFxuICBkZWVwcGluazogJ2ZmMTQ5MycsXG4gIGRlZXBza3libHVlOiAnMDBiZmZmJyxcbiAgZGltZ3JheTogJzY5Njk2OScsXG4gIGRpbWdyZXk6ICc2OTY5NjknLFxuICBkb2RnZXJibHVlOiAnMWU5MGZmJyxcbiAgZmlyZWJyaWNrOiAnYjIyMjIyJyxcbiAgZmxvcmFsd2hpdGU6ICdmZmZhZjAnLFxuICBmb3Jlc3RncmVlbjogJzIyOGIyMicsXG4gIGZ1Y2hzaWE6ICdmZjAwZmYnLFxuICBnYWluc2Jvcm86ICdkY2RjZGMnLFxuICBnaG9zdHdoaXRlOiAnZjhmOGZmJyxcbiAgZ29sZDogJ2ZmZDcwMCcsXG4gIGdvbGRlbnJvZDogJ2RhYTUyMCcsXG4gIGdyYXk6ICc4MDgwODAnLFxuICBncmVlbjogJzAwODAwMCcsXG4gIGdyZWVueWVsbG93OiAnYWRmZjJmJyxcbiAgZ3JleTogJzgwODA4MCcsXG4gIGhvbmV5ZGV3OiAnZjBmZmYwJyxcbiAgaG90cGluazogJ2ZmNjliNCcsXG4gIGluZGlhbnJlZDogJ2NkNWM1YycsXG4gIGluZGlnbzogJzRiMDA4MicsXG4gIGl2b3J5OiAnZmZmZmYwJyxcbiAga2hha2k6ICdmMGU2OGMnLFxuICBsYXZlbmRlcjogJ2U2ZTZmYScsXG4gIGxhdmVuZGVyYmx1c2g6ICdmZmYwZjUnLFxuICBsYXduZ3JlZW46ICc3Y2ZjMDAnLFxuICBsZW1vbmNoaWZmb246ICdmZmZhY2QnLFxuICBsaWdodGJsdWU6ICdhZGQ4ZTYnLFxuICBsaWdodGNvcmFsOiAnZjA4MDgwJyxcbiAgbGlnaHRjeWFuOiAnZTBmZmZmJyxcbiAgbGlnaHRnb2xkZW5yb2R5ZWxsb3c6ICdmYWZhZDInLFxuICBsaWdodGdyYXk6ICdkM2QzZDMnLFxuICBsaWdodGdyZWVuOiAnOTBlZTkwJyxcbiAgbGlnaHRncmV5OiAnZDNkM2QzJyxcbiAgbGlnaHRwaW5rOiAnZmZiNmMxJyxcbiAgbGlnaHRzYWxtb246ICdmZmEwN2EnLFxuICBsaWdodHNlYWdyZWVuOiAnMjBiMmFhJyxcbiAgbGlnaHRza3libHVlOiAnODdjZWZhJyxcbiAgbGlnaHRzbGF0ZWdyYXk6ICc3ODknLFxuICBsaWdodHNsYXRlZ3JleTogJzc4OScsXG4gIGxpZ2h0c3RlZWxibHVlOiAnYjBjNGRlJyxcbiAgbGlnaHR5ZWxsb3c6ICdmZmZmZTAnLFxuICBsaW1lOiAnMGYwJyxcbiAgbGltZWdyZWVuOiAnMzJjZDMyJyxcbiAgbGluZW46ICdmYWYwZTYnLFxuICBtYWdlbnRhOiAnZjBmJyxcbiAgbWFyb29uOiAnODAwMDAwJyxcbiAgbWVkaXVtYXF1YW1hcmluZTogJzY2Y2RhYScsXG4gIG1lZGl1bWJsdWU6ICcwMDAwY2QnLFxuICBtZWRpdW1vcmNoaWQ6ICdiYTU1ZDMnLFxuICBtZWRpdW1wdXJwbGU6ICc5MzcwZGInLFxuICBtZWRpdW1zZWFncmVlbjogJzNjYjM3MScsXG4gIG1lZGl1bXNsYXRlYmx1ZTogJzdiNjhlZScsXG4gIG1lZGl1bXNwcmluZ2dyZWVuOiAnMDBmYTlhJyxcbiAgbWVkaXVtdHVycXVvaXNlOiAnNDhkMWNjJyxcbiAgbWVkaXVtdmlvbGV0cmVkOiAnYzcxNTg1JyxcbiAgbWlkbmlnaHRibHVlOiAnMTkxOTcwJyxcbiAgbWludGNyZWFtOiAnZjVmZmZhJyxcbiAgbWlzdHlyb3NlOiAnZmZlNGUxJyxcbiAgbW9jY2FzaW46ICdmZmU0YjUnLFxuICBuYXZham93aGl0ZTogJ2ZmZGVhZCcsXG4gIG5hdnk6ICcwMDAwODAnLFxuICBvbGRsYWNlOiAnZmRmNWU2JyxcbiAgb2xpdmU6ICc4MDgwMDAnLFxuICBvbGl2ZWRyYWI6ICc2YjhlMjMnLFxuICBvcmFuZ2U6ICdmZmE1MDAnLFxuICBvcmFuZ2VyZWQ6ICdmZjQ1MDAnLFxuICBvcmNoaWQ6ICdkYTcwZDYnLFxuICBwYWxlZ29sZGVucm9kOiAnZWVlOGFhJyxcbiAgcGFsZWdyZWVuOiAnOThmYjk4JyxcbiAgcGFsZXR1cnF1b2lzZTogJ2FmZWVlZScsXG4gIHBhbGV2aW9sZXRyZWQ6ICdkYjcwOTMnLFxuICBwYXBheWF3aGlwOiAnZmZlZmQ1JyxcbiAgcGVhY2hwdWZmOiAnZmZkYWI5JyxcbiAgcGVydTogJ2NkODUzZicsXG4gIHBpbms6ICdmZmMwY2InLFxuICBwbHVtOiAnZGRhMGRkJyxcbiAgcG93ZGVyYmx1ZTogJ2IwZTBlNicsXG4gIHB1cnBsZTogJzgwMDA4MCcsXG4gIHJlYmVjY2FwdXJwbGU6ICc2MzknLFxuICByZWQ6ICdmMDAnLFxuICByb3N5YnJvd246ICdiYzhmOGYnLFxuICByb3lhbGJsdWU6ICc0MTY5ZTEnLFxuICBzYWRkbGVicm93bjogJzhiNDUxMycsXG4gIHNhbG1vbjogJ2ZhODA3MicsXG4gIHNhbmR5YnJvd246ICdmNGE0NjAnLFxuICBzZWFncmVlbjogJzJlOGI1NycsXG4gIHNlYXNoZWxsOiAnZmZmNWVlJyxcbiAgc2llbm5hOiAnYTA1MjJkJyxcbiAgc2lsdmVyOiAnYzBjMGMwJyxcbiAgc2t5Ymx1ZTogJzg3Y2VlYicsXG4gIHNsYXRlYmx1ZTogJzZhNWFjZCcsXG4gIHNsYXRlZ3JheTogJzcwODA5MCcsXG4gIHNsYXRlZ3JleTogJzcwODA5MCcsXG4gIHNub3c6ICdmZmZhZmEnLFxuICBzcHJpbmdncmVlbjogJzAwZmY3ZicsXG4gIHN0ZWVsYmx1ZTogJzQ2ODJiNCcsXG4gIHRhbjogJ2QyYjQ4YycsXG4gIHRlYWw6ICcwMDgwODAnLFxuICB0aGlzdGxlOiAnZDhiZmQ4JyxcbiAgdG9tYXRvOiAnZmY2MzQ3JyxcbiAgdHVycXVvaXNlOiAnNDBlMGQwJyxcbiAgdmlvbGV0OiAnZWU4MmVlJyxcbiAgd2hlYXQ6ICdmNWRlYjMnLFxuICB3aGl0ZTogJ2ZmZicsXG4gIHdoaXRlc21va2U6ICdmNWY1ZjUnLFxuICB5ZWxsb3c6ICdmZjAnLFxuICB5ZWxsb3dncmVlbjogJzlhY2QzMidcbiAgLyoqXG4gICAqIENoZWNrcyBpZiBhIHN0cmluZyBpcyBhIENTUyBuYW1lZCBjb2xvciBhbmQgcmV0dXJucyBpdHMgZXF1aXZhbGVudCBoZXggdmFsdWUsIG90aGVyd2lzZSByZXR1cm5zIHRoZSBvcmlnaW5hbCBjb2xvci5cbiAgICogQHByaXZhdGVcbiAgICovXG5cbn07XG5cbmZ1bmN0aW9uIG5hbWVUb0hleChjb2xvcikge1xuICBpZiAodHlwZW9mIGNvbG9yICE9PSAnc3RyaW5nJykgcmV0dXJuIGNvbG9yO1xuICB2YXIgbm9ybWFsaXplZENvbG9yTmFtZSA9IGNvbG9yLnRvTG93ZXJDYXNlKCk7XG4gIHJldHVybiBuYW1lZENvbG9yTWFwW25vcm1hbGl6ZWRDb2xvck5hbWVdID8gXCIjXCIgKyBuYW1lZENvbG9yTWFwW25vcm1hbGl6ZWRDb2xvck5hbWVdIDogY29sb3I7XG59XG5cbnZhciBfZGVmYXVsdCA9IG5hbWVUb0hleDtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHNMb29zZShzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MucHJvdG90eXBlKTsgc3ViQ2xhc3MucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gc3ViQ2xhc3M7IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxuZnVuY3Rpb24gX3dyYXBOYXRpdmVTdXBlcihDbGFzcykgeyB2YXIgX2NhY2hlID0gdHlwZW9mIE1hcCA9PT0gXCJmdW5jdGlvblwiID8gbmV3IE1hcCgpIDogdW5kZWZpbmVkOyBfd3JhcE5hdGl2ZVN1cGVyID0gZnVuY3Rpb24gX3dyYXBOYXRpdmVTdXBlcihDbGFzcykgeyBpZiAoQ2xhc3MgPT09IG51bGwgfHwgIV9pc05hdGl2ZUZ1bmN0aW9uKENsYXNzKSkgcmV0dXJuIENsYXNzOyBpZiAodHlwZW9mIENsYXNzICE9PSBcImZ1bmN0aW9uXCIpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpOyB9IGlmICh0eXBlb2YgX2NhY2hlICE9PSBcInVuZGVmaW5lZFwiKSB7IGlmIChfY2FjaGUuaGFzKENsYXNzKSkgcmV0dXJuIF9jYWNoZS5nZXQoQ2xhc3MpOyBfY2FjaGUuc2V0KENsYXNzLCBXcmFwcGVyKTsgfSBmdW5jdGlvbiBXcmFwcGVyKCkgeyByZXR1cm4gX2NvbnN0cnVjdChDbGFzcywgYXJndW1lbnRzLCBfZ2V0UHJvdG90eXBlT2YodGhpcykuY29uc3RydWN0b3IpOyB9IFdyYXBwZXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IFdyYXBwZXIsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IHJldHVybiBfc2V0UHJvdG90eXBlT2YoV3JhcHBlciwgQ2xhc3MpOyB9OyByZXR1cm4gX3dyYXBOYXRpdmVTdXBlcihDbGFzcyk7IH1cblxuZnVuY3Rpb24gaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkgeyBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwidW5kZWZpbmVkXCIgfHwgIVJlZmxlY3QuY29uc3RydWN0KSByZXR1cm4gZmFsc2U7IGlmIChSZWZsZWN0LmNvbnN0cnVjdC5zaGFtKSByZXR1cm4gZmFsc2U7IGlmICh0eXBlb2YgUHJveHkgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHRydWU7IHRyeSB7IERhdGUucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoRGF0ZSwgW10sIGZ1bmN0aW9uICgpIHt9KSk7IHJldHVybiB0cnVlOyB9IGNhdGNoIChlKSB7IHJldHVybiBmYWxzZTsgfSB9XG5cbmZ1bmN0aW9uIF9jb25zdHJ1Y3QoUGFyZW50LCBhcmdzLCBDbGFzcykgeyBpZiAoaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkpIHsgX2NvbnN0cnVjdCA9IFJlZmxlY3QuY29uc3RydWN0OyB9IGVsc2UgeyBfY29uc3RydWN0ID0gZnVuY3Rpb24gX2NvbnN0cnVjdChQYXJlbnQsIGFyZ3MsIENsYXNzKSB7IHZhciBhID0gW251bGxdOyBhLnB1c2guYXBwbHkoYSwgYXJncyk7IHZhciBDb25zdHJ1Y3RvciA9IEZ1bmN0aW9uLmJpbmQuYXBwbHkoUGFyZW50LCBhKTsgdmFyIGluc3RhbmNlID0gbmV3IENvbnN0cnVjdG9yKCk7IGlmIChDbGFzcykgX3NldFByb3RvdHlwZU9mKGluc3RhbmNlLCBDbGFzcy5wcm90b3R5cGUpOyByZXR1cm4gaW5zdGFuY2U7IH07IH0gcmV0dXJuIF9jb25zdHJ1Y3QuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsgfVxuXG5mdW5jdGlvbiBfaXNOYXRpdmVGdW5jdGlvbihmbikgeyByZXR1cm4gRnVuY3Rpb24udG9TdHJpbmcuY2FsbChmbikuaW5kZXhPZihcIltuYXRpdmUgY29kZV1cIikgIT09IC0xOyB9XG5cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBvLl9fcHJvdG9fXyA9IHA7IHJldHVybiBvOyB9OyByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApOyB9XG5cbmZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7IH07IHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7IH1cblxuLy8gYmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL3N0eWxlZC1jb21wb25lbnRzL3N0eWxlZC1jb21wb25lbnRzL2Jsb2IvZmNmNmYzODA0YzU3YTE0ZGQ3OTg0ZGZhYjdiYzA2ZWUyZWRjYTA0NC9zcmMvdXRpbHMvZXJyb3IuanNcblxuLyoqXG4gKiBQYXJzZSBlcnJvcnMubWQgYW5kIHR1cm4gaXQgaW50byBhIHNpbXBsZSBoYXNoIG9mIGNvZGU6IG1lc3NhZ2VcbiAqIEBwcml2YXRlXG4gKi9cbnZhciBFUlJPUlMgPSB7XG4gIFwiMVwiOiBcIlBhc3NlZCBpbnZhbGlkIGFyZ3VtZW50cyB0byBoc2wsIHBsZWFzZSBwYXNzIG11bHRpcGxlIG51bWJlcnMgZS5nLiBoc2woMzYwLCAwLjc1LCAwLjQpIG9yIGFuIG9iamVjdCBlLmcuIHJnYih7IGh1ZTogMjU1LCBzYXR1cmF0aW9uOiAwLjQsIGxpZ2h0bmVzczogMC43NSB9KS5cXG5cXG5cIixcbiAgXCIyXCI6IFwiUGFzc2VkIGludmFsaWQgYXJndW1lbnRzIHRvIGhzbGEsIHBsZWFzZSBwYXNzIG11bHRpcGxlIG51bWJlcnMgZS5nLiBoc2xhKDM2MCwgMC43NSwgMC40LCAwLjcpIG9yIGFuIG9iamVjdCBlLmcuIHJnYih7IGh1ZTogMjU1LCBzYXR1cmF0aW9uOiAwLjQsIGxpZ2h0bmVzczogMC43NSwgYWxwaGE6IDAuNyB9KS5cXG5cXG5cIixcbiAgXCIzXCI6IFwiUGFzc2VkIGFuIGluY29ycmVjdCBhcmd1bWVudCB0byBhIGNvbG9yIGZ1bmN0aW9uLCBwbGVhc2UgcGFzcyBhIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiBhIGNvbG9yLlxcblxcblwiLFxuICBcIjRcIjogXCJDb3VsZG4ndCBnZW5lcmF0ZSB2YWxpZCByZ2Igc3RyaW5nIGZyb20gJXMsIGl0IHJldHVybmVkICVzLlxcblxcblwiLFxuICBcIjVcIjogXCJDb3VsZG4ndCBwYXJzZSB0aGUgY29sb3Igc3RyaW5nLiBQbGVhc2UgcHJvdmlkZSB0aGUgY29sb3IgYXMgYSBzdHJpbmcgaW4gaGV4LCByZ2IsIHJnYmEsIGhzbCBvciBoc2xhIG5vdGF0aW9uLlxcblxcblwiLFxuICBcIjZcIjogXCJQYXNzZWQgaW52YWxpZCBhcmd1bWVudHMgdG8gcmdiLCBwbGVhc2UgcGFzcyBtdWx0aXBsZSBudW1iZXJzIGUuZy4gcmdiKDI1NSwgMjA1LCAxMDApIG9yIGFuIG9iamVjdCBlLmcuIHJnYih7IHJlZDogMjU1LCBncmVlbjogMjA1LCBibHVlOiAxMDAgfSkuXFxuXFxuXCIsXG4gIFwiN1wiOiBcIlBhc3NlZCBpbnZhbGlkIGFyZ3VtZW50cyB0byByZ2JhLCBwbGVhc2UgcGFzcyBtdWx0aXBsZSBudW1iZXJzIGUuZy4gcmdiKDI1NSwgMjA1LCAxMDAsIDAuNzUpIG9yIGFuIG9iamVjdCBlLmcuIHJnYih7IHJlZDogMjU1LCBncmVlbjogMjA1LCBibHVlOiAxMDAsIGFscGhhOiAwLjc1IH0pLlxcblxcblwiLFxuICBcIjhcIjogXCJQYXNzZWQgaW52YWxpZCBhcmd1bWVudCB0byB0b0NvbG9yU3RyaW5nLCBwbGVhc2UgcGFzcyBhIFJnYkNvbG9yLCBSZ2JhQ29sb3IsIEhzbENvbG9yIG9yIEhzbGFDb2xvciBvYmplY3QuXFxuXFxuXCIsXG4gIFwiOVwiOiBcIlBsZWFzZSBwcm92aWRlIGEgbnVtYmVyIG9mIHN0ZXBzIHRvIHRoZSBtb2R1bGFyU2NhbGUgaGVscGVyLlxcblxcblwiLFxuICBcIjEwXCI6IFwiUGxlYXNlIHBhc3MgYSBudW1iZXIgb3Igb25lIG9mIHRoZSBwcmVkZWZpbmVkIHNjYWxlcyB0byB0aGUgbW9kdWxhclNjYWxlIGhlbHBlciBhcyB0aGUgcmF0aW8uXFxuXFxuXCIsXG4gIFwiMTFcIjogXCJJbnZhbGlkIHZhbHVlIHBhc3NlZCBhcyBiYXNlIHRvIG1vZHVsYXJTY2FsZSwgZXhwZWN0ZWQgbnVtYmVyIG9yIGVtIHN0cmluZyBidXQgZ290IFxcXCIlc1xcXCJcXG5cXG5cIixcbiAgXCIxMlwiOiBcIkV4cGVjdGVkIGEgc3RyaW5nIGVuZGluZyBpbiBcXFwicHhcXFwiIG9yIGEgbnVtYmVyIHBhc3NlZCBhcyB0aGUgZmlyc3QgYXJndW1lbnQgdG8gJXMoKSwgZ290IFxcXCIlc1xcXCIgaW5zdGVhZC5cXG5cXG5cIixcbiAgXCIxM1wiOiBcIkV4cGVjdGVkIGEgc3RyaW5nIGVuZGluZyBpbiBcXFwicHhcXFwiIG9yIGEgbnVtYmVyIHBhc3NlZCBhcyB0aGUgc2Vjb25kIGFyZ3VtZW50IHRvICVzKCksIGdvdCBcXFwiJXNcXFwiIGluc3RlYWQuXFxuXFxuXCIsXG4gIFwiMTRcIjogXCJQYXNzZWQgaW52YWxpZCBwaXhlbCB2YWx1ZSAoXFxcIiVzXFxcIikgdG8gJXMoKSwgcGxlYXNlIHBhc3MgYSB2YWx1ZSBsaWtlIFxcXCIxMnB4XFxcIiBvciAxMi5cXG5cXG5cIixcbiAgXCIxNVwiOiBcIlBhc3NlZCBpbnZhbGlkIGJhc2UgdmFsdWUgKFxcXCIlc1xcXCIpIHRvICVzKCksIHBsZWFzZSBwYXNzIGEgdmFsdWUgbGlrZSBcXFwiMTJweFxcXCIgb3IgMTIuXFxuXFxuXCIsXG4gIFwiMTZcIjogXCJZb3UgbXVzdCBwcm92aWRlIGEgdGVtcGxhdGUgdG8gdGhpcyBtZXRob2QuXFxuXFxuXCIsXG4gIFwiMTdcIjogXCJZb3UgcGFzc2VkIGFuIHVuc3VwcG9ydGVkIHNlbGVjdG9yIHN0YXRlIHRvIHRoaXMgbWV0aG9kLlxcblxcblwiLFxuICBcIjE4XCI6IFwibWluU2NyZWVuIGFuZCBtYXhTY3JlZW4gbXVzdCBiZSBwcm92aWRlZCBhcyBzdHJpbmdpZmllZCBudW1iZXJzIHdpdGggdGhlIHNhbWUgdW5pdHMuXFxuXFxuXCIsXG4gIFwiMTlcIjogXCJmcm9tU2l6ZSBhbmQgdG9TaXplIG11c3QgYmUgcHJvdmlkZWQgYXMgc3RyaW5naWZpZWQgbnVtYmVycyB3aXRoIHRoZSBzYW1lIHVuaXRzLlxcblxcblwiLFxuICBcIjIwXCI6IFwiZXhwZWN0cyBlaXRoZXIgYW4gYXJyYXkgb2Ygb2JqZWN0cyBvciBhIHNpbmdsZSBvYmplY3Qgd2l0aCB0aGUgcHJvcGVydGllcyBwcm9wLCBmcm9tU2l6ZSwgYW5kIHRvU2l6ZS5cXG5cXG5cIixcbiAgXCIyMVwiOiBcImV4cGVjdHMgdGhlIG9iamVjdHMgaW4gdGhlIGZpcnN0IGFyZ3VtZW50IGFycmF5IHRvIGhhdmUgdGhlIHByb3BlcnRpZXMgYHByb3BgLCBgZnJvbVNpemVgLCBhbmQgYHRvU2l6ZWAuXFxuXFxuXCIsXG4gIFwiMjJcIjogXCJleHBlY3RzIHRoZSBmaXJzdCBhcmd1bWVudCBvYmplY3QgdG8gaGF2ZSB0aGUgcHJvcGVydGllcyBgcHJvcGAsIGBmcm9tU2l6ZWAsIGFuZCBgdG9TaXplYC5cXG5cXG5cIixcbiAgXCIyM1wiOiBcImZvbnRGYWNlIGV4cGVjdHMgYSBuYW1lIG9mIGEgZm9udC1mYW1pbHkuXFxuXFxuXCIsXG4gIFwiMjRcIjogXCJmb250RmFjZSBleHBlY3RzIGVpdGhlciB0aGUgcGF0aCB0byB0aGUgZm9udCBmaWxlKHMpIG9yIGEgbmFtZSBvZiBhIGxvY2FsIGNvcHkuXFxuXFxuXCIsXG4gIFwiMjVcIjogXCJmb250RmFjZSBleHBlY3RzIGxvY2FsRm9udHMgdG8gYmUgYW4gYXJyYXkuXFxuXFxuXCIsXG4gIFwiMjZcIjogXCJmb250RmFjZSBleHBlY3RzIGZpbGVGb3JtYXRzIHRvIGJlIGFuIGFycmF5LlxcblxcblwiLFxuICBcIjI3XCI6IFwicmFkaWFsR3JhZGllbnQgcmVxdXJpZXMgYXQgbGVhc3QgMiBjb2xvci1zdG9wcyB0byBwcm9wZXJseSByZW5kZXIuXFxuXFxuXCIsXG4gIFwiMjhcIjogXCJQbGVhc2Ugc3VwcGx5IGEgZmlsZW5hbWUgdG8gcmV0aW5hSW1hZ2UoKSBhcyB0aGUgZmlyc3QgYXJndW1lbnQuXFxuXFxuXCIsXG4gIFwiMjlcIjogXCJQYXNzZWQgaW52YWxpZCBhcmd1bWVudCB0byB0cmlhbmdsZSwgcGxlYXNlIHBhc3MgY29ycmVjdCBwb2ludGluZ0RpcmVjdGlvbiBlLmcuICdyaWdodCcuXFxuXFxuXCIsXG4gIFwiMzBcIjogXCJQYXNzZWQgYW4gaW52YWxpZCB2YWx1ZSB0byBgaGVpZ2h0YCBvciBgd2lkdGhgLiBQbGVhc2UgcHJvdmlkZSBhIHBpeGVsIGJhc2VkIHVuaXQuXFxuXFxuXCIsXG4gIFwiMzFcIjogXCJUaGUgYW5pbWF0aW9uIHNob3J0aGFuZCBvbmx5IHRha2VzIDggYXJndW1lbnRzLiBTZWUgdGhlIHNwZWNpZmljYXRpb24gZm9yIG1vcmUgaW5mb3JtYXRpb246IGh0dHA6Ly9tZG4uaW8vYW5pbWF0aW9uXFxuXFxuXCIsXG4gIFwiMzJcIjogXCJUbyBwYXNzIG11bHRpcGxlIGFuaW1hdGlvbnMgcGxlYXNlIHN1cHBseSB0aGVtIGluIGFycmF5cywgZS5nLiBhbmltYXRpb24oWydyb3RhdGUnLCAnMnMnXSwgWydtb3ZlJywgJzFzJ10pXFxuVG8gcGFzcyBhIHNpbmdsZSBhbmltYXRpb24gcGxlYXNlIHN1cHBseSB0aGVtIGluIHNpbXBsZSB2YWx1ZXMsIGUuZy4gYW5pbWF0aW9uKCdyb3RhdGUnLCAnMnMnKVxcblxcblwiLFxuICBcIjMzXCI6IFwiVGhlIGFuaW1hdGlvbiBzaG9ydGhhbmQgYXJyYXlzIGNhbiBvbmx5IGhhdmUgOCBlbGVtZW50cy4gU2VlIHRoZSBzcGVjaWZpY2F0aW9uIGZvciBtb3JlIGluZm9ybWF0aW9uOiBodHRwOi8vbWRuLmlvL2FuaW1hdGlvblxcblxcblwiLFxuICBcIjM0XCI6IFwiYm9yZGVyUmFkaXVzIGV4cGVjdHMgYSByYWRpdXMgdmFsdWUgYXMgYSBzdHJpbmcgb3IgbnVtYmVyIGFzIHRoZSBzZWNvbmQgYXJndW1lbnQuXFxuXFxuXCIsXG4gIFwiMzVcIjogXCJib3JkZXJSYWRpdXMgZXhwZWN0cyBvbmUgb2YgXFxcInRvcFxcXCIsIFxcXCJib3R0b21cXFwiLCBcXFwibGVmdFxcXCIgb3IgXFxcInJpZ2h0XFxcIiBhcyB0aGUgZmlyc3QgYXJndW1lbnQuXFxuXFxuXCIsXG4gIFwiMzZcIjogXCJQcm9wZXJ0eSBtdXN0IGJlIGEgc3RyaW5nIHZhbHVlLlxcblxcblwiLFxuICBcIjM3XCI6IFwiU3ludGF4IEVycm9yIGF0ICVzLlxcblxcblwiLFxuICBcIjM4XCI6IFwiRm9ybXVsYSBjb250YWlucyBhIGZ1bmN0aW9uIHRoYXQgbmVlZHMgcGFyZW50aGVzZXMgYXQgJXMuXFxuXFxuXCIsXG4gIFwiMzlcIjogXCJGb3JtdWxhIGlzIG1pc3NpbmcgY2xvc2luZyBwYXJlbnRoZXNpcyBhdCAlcy5cXG5cXG5cIixcbiAgXCI0MFwiOiBcIkZvcm11bGEgaGFzIHRvbyBtYW55IGNsb3NpbmcgcGFyZW50aGVzZXMgYXQgJXMuXFxuXFxuXCIsXG4gIFwiNDFcIjogXCJBbGwgdmFsdWVzIGluIGEgZm9ybXVsYSBtdXN0IGhhdmUgdGhlIHNhbWUgdW5pdCBvciBiZSB1bml0bGVzcy5cXG5cXG5cIixcbiAgXCI0MlwiOiBcIlBsZWFzZSBwcm92aWRlIGEgbnVtYmVyIG9mIHN0ZXBzIHRvIHRoZSBtb2R1bGFyU2NhbGUgaGVscGVyLlxcblxcblwiLFxuICBcIjQzXCI6IFwiUGxlYXNlIHBhc3MgYSBudW1iZXIgb3Igb25lIG9mIHRoZSBwcmVkZWZpbmVkIHNjYWxlcyB0byB0aGUgbW9kdWxhclNjYWxlIGhlbHBlciBhcyB0aGUgcmF0aW8uXFxuXFxuXCIsXG4gIFwiNDRcIjogXCJJbnZhbGlkIHZhbHVlIHBhc3NlZCBhcyBiYXNlIHRvIG1vZHVsYXJTY2FsZSwgZXhwZWN0ZWQgbnVtYmVyIG9yIGVtL3JlbSBzdHJpbmcgYnV0IGdvdCAlcy5cXG5cXG5cIixcbiAgXCI0NVwiOiBcIlBhc3NlZCBpbnZhbGlkIGFyZ3VtZW50IHRvIGhzbFRvQ29sb3JTdHJpbmcsIHBsZWFzZSBwYXNzIGEgSHNsQ29sb3Igb3IgSHNsYUNvbG9yIG9iamVjdC5cXG5cXG5cIixcbiAgXCI0NlwiOiBcIlBhc3NlZCBpbnZhbGlkIGFyZ3VtZW50IHRvIHJnYlRvQ29sb3JTdHJpbmcsIHBsZWFzZSBwYXNzIGEgUmdiQ29sb3Igb3IgUmdiYUNvbG9yIG9iamVjdC5cXG5cXG5cIixcbiAgXCI0N1wiOiBcIm1pblNjcmVlbiBhbmQgbWF4U2NyZWVuIG11c3QgYmUgcHJvdmlkZWQgYXMgc3RyaW5naWZpZWQgbnVtYmVycyB3aXRoIHRoZSBzYW1lIHVuaXRzLlxcblxcblwiLFxuICBcIjQ4XCI6IFwiZnJvbVNpemUgYW5kIHRvU2l6ZSBtdXN0IGJlIHByb3ZpZGVkIGFzIHN0cmluZ2lmaWVkIG51bWJlcnMgd2l0aCB0aGUgc2FtZSB1bml0cy5cXG5cXG5cIixcbiAgXCI0OVwiOiBcIkV4cGVjdHMgZWl0aGVyIGFuIGFycmF5IG9mIG9iamVjdHMgb3IgYSBzaW5nbGUgb2JqZWN0IHdpdGggdGhlIHByb3BlcnRpZXMgcHJvcCwgZnJvbVNpemUsIGFuZCB0b1NpemUuXFxuXFxuXCIsXG4gIFwiNTBcIjogXCJFeHBlY3RzIHRoZSBvYmplY3RzIGluIHRoZSBmaXJzdCBhcmd1bWVudCBhcnJheSB0byBoYXZlIHRoZSBwcm9wZXJ0aWVzIHByb3AsIGZyb21TaXplLCBhbmQgdG9TaXplLlxcblxcblwiLFxuICBcIjUxXCI6IFwiRXhwZWN0cyB0aGUgZmlyc3QgYXJndW1lbnQgb2JqZWN0IHRvIGhhdmUgdGhlIHByb3BlcnRpZXMgcHJvcCwgZnJvbVNpemUsIGFuZCB0b1NpemUuXFxuXFxuXCIsXG4gIFwiNTJcIjogXCJmb250RmFjZSBleHBlY3RzIGVpdGhlciB0aGUgcGF0aCB0byB0aGUgZm9udCBmaWxlKHMpIG9yIGEgbmFtZSBvZiBhIGxvY2FsIGNvcHkuXFxuXFxuXCIsXG4gIFwiNTNcIjogXCJmb250RmFjZSBleHBlY3RzIGxvY2FsRm9udHMgdG8gYmUgYW4gYXJyYXkuXFxuXFxuXCIsXG4gIFwiNTRcIjogXCJmb250RmFjZSBleHBlY3RzIGZpbGVGb3JtYXRzIHRvIGJlIGFuIGFycmF5LlxcblxcblwiLFxuICBcIjU1XCI6IFwiZm9udEZhY2UgZXhwZWN0cyBhIG5hbWUgb2YgYSBmb250LWZhbWlseS5cXG5cXG5cIixcbiAgXCI1NlwiOiBcImxpbmVhckdyYWRpZW50IHJlcXVyaWVzIGF0IGxlYXN0IDIgY29sb3Itc3RvcHMgdG8gcHJvcGVybHkgcmVuZGVyLlxcblxcblwiLFxuICBcIjU3XCI6IFwicmFkaWFsR3JhZGllbnQgcmVxdXJpZXMgYXQgbGVhc3QgMiBjb2xvci1zdG9wcyB0byBwcm9wZXJseSByZW5kZXIuXFxuXFxuXCIsXG4gIFwiNThcIjogXCJQbGVhc2Ugc3VwcGx5IGEgZmlsZW5hbWUgdG8gcmV0aW5hSW1hZ2UoKSBhcyB0aGUgZmlyc3QgYXJndW1lbnQuXFxuXFxuXCIsXG4gIFwiNTlcIjogXCJQYXNzZWQgaW52YWxpZCBhcmd1bWVudCB0byB0cmlhbmdsZSwgcGxlYXNlIHBhc3MgY29ycmVjdCBwb2ludGluZ0RpcmVjdGlvbiBlLmcuICdyaWdodCcuXFxuXFxuXCIsXG4gIFwiNjBcIjogXCJQYXNzZWQgYW4gaW52YWxpZCB2YWx1ZSB0byBgaGVpZ2h0YCBvciBgd2lkdGhgLiBQbGVhc2UgcHJvdmlkZSBhIHBpeGVsIGJhc2VkIHVuaXQuXFxuXFxuXCIsXG4gIFwiNjFcIjogXCJQcm9wZXJ0eSBtdXN0IGJlIGEgc3RyaW5nIHZhbHVlLlxcblxcblwiLFxuICBcIjYyXCI6IFwiYm9yZGVyUmFkaXVzIGV4cGVjdHMgYSByYWRpdXMgdmFsdWUgYXMgYSBzdHJpbmcgb3IgbnVtYmVyIGFzIHRoZSBzZWNvbmQgYXJndW1lbnQuXFxuXFxuXCIsXG4gIFwiNjNcIjogXCJib3JkZXJSYWRpdXMgZXhwZWN0cyBvbmUgb2YgXFxcInRvcFxcXCIsIFxcXCJib3R0b21cXFwiLCBcXFwibGVmdFxcXCIgb3IgXFxcInJpZ2h0XFxcIiBhcyB0aGUgZmlyc3QgYXJndW1lbnQuXFxuXFxuXCIsXG4gIFwiNjRcIjogXCJUaGUgYW5pbWF0aW9uIHNob3J0aGFuZCBvbmx5IHRha2VzIDggYXJndW1lbnRzLiBTZWUgdGhlIHNwZWNpZmljYXRpb24gZm9yIG1vcmUgaW5mb3JtYXRpb246IGh0dHA6Ly9tZG4uaW8vYW5pbWF0aW9uLlxcblxcblwiLFxuICBcIjY1XCI6IFwiVG8gcGFzcyBtdWx0aXBsZSBhbmltYXRpb25zIHBsZWFzZSBzdXBwbHkgdGhlbSBpbiBhcnJheXMsIGUuZy4gYW5pbWF0aW9uKFsncm90YXRlJywgJzJzJ10sIFsnbW92ZScsICcxcyddKVxcXFxuVG8gcGFzcyBhIHNpbmdsZSBhbmltYXRpb24gcGxlYXNlIHN1cHBseSB0aGVtIGluIHNpbXBsZSB2YWx1ZXMsIGUuZy4gYW5pbWF0aW9uKCdyb3RhdGUnLCAnMnMnKS5cXG5cXG5cIixcbiAgXCI2NlwiOiBcIlRoZSBhbmltYXRpb24gc2hvcnRoYW5kIGFycmF5cyBjYW4gb25seSBoYXZlIDggZWxlbWVudHMuIFNlZSB0aGUgc3BlY2lmaWNhdGlvbiBmb3IgbW9yZSBpbmZvcm1hdGlvbjogaHR0cDovL21kbi5pby9hbmltYXRpb24uXFxuXFxuXCIsXG4gIFwiNjdcIjogXCJZb3UgbXVzdCBwcm92aWRlIGEgdGVtcGxhdGUgdG8gdGhpcyBtZXRob2QuXFxuXFxuXCIsXG4gIFwiNjhcIjogXCJZb3UgcGFzc2VkIGFuIHVuc3VwcG9ydGVkIHNlbGVjdG9yIHN0YXRlIHRvIHRoaXMgbWV0aG9kLlxcblxcblwiLFxuICBcIjY5XCI6IFwiRXhwZWN0ZWQgYSBzdHJpbmcgZW5kaW5nIGluIFxcXCJweFxcXCIgb3IgYSBudW1iZXIgcGFzc2VkIGFzIHRoZSBmaXJzdCBhcmd1bWVudCB0byAlcygpLCBnb3QgJXMgaW5zdGVhZC5cXG5cXG5cIixcbiAgXCI3MFwiOiBcIkV4cGVjdGVkIGEgc3RyaW5nIGVuZGluZyBpbiBcXFwicHhcXFwiIG9yIGEgbnVtYmVyIHBhc3NlZCBhcyB0aGUgc2Vjb25kIGFyZ3VtZW50IHRvICVzKCksIGdvdCAlcyBpbnN0ZWFkLlxcblxcblwiLFxuICBcIjcxXCI6IFwiUGFzc2VkIGludmFsaWQgcGl4ZWwgdmFsdWUgJXMgdG8gJXMoKSwgcGxlYXNlIHBhc3MgYSB2YWx1ZSBsaWtlIFxcXCIxMnB4XFxcIiBvciAxMi5cXG5cXG5cIixcbiAgXCI3MlwiOiBcIlBhc3NlZCBpbnZhbGlkIGJhc2UgdmFsdWUgJXMgdG8gJXMoKSwgcGxlYXNlIHBhc3MgYSB2YWx1ZSBsaWtlIFxcXCIxMnB4XFxcIiBvciAxMi5cXG5cIlxufTtcbi8qKlxuICogc3VwZXIgYmFzaWMgdmVyc2lvbiBvZiBzcHJpbnRmXG4gKiBAcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIGZvcm1hdCgpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIHZhciBhID0gYXJnc1swXTtcbiAgdmFyIGIgPSBbXTtcbiAgdmFyIGM7XG5cbiAgZm9yIChjID0gMTsgYyA8IGFyZ3MubGVuZ3RoOyBjICs9IDEpIHtcbiAgICBiLnB1c2goYXJnc1tjXSk7XG4gIH1cblxuICBiLmZvckVhY2goZnVuY3Rpb24gKGQpIHtcbiAgICBhID0gYS5yZXBsYWNlKC8lW2Etel0vLCBkKTtcbiAgfSk7XG4gIHJldHVybiBhO1xufVxuLyoqXG4gKiBDcmVhdGUgYW4gZXJyb3IgZmlsZSBvdXQgb2YgZXJyb3JzLm1kIGZvciBkZXZlbG9wbWVudCBhbmQgYSBzaW1wbGUgd2ViIGxpbmsgdG8gdGhlIGZ1bGwgZXJyb3JzXG4gKiBpbiBwcm9kdWN0aW9uIG1vZGUuXG4gKiBAcHJpdmF0ZVxuICovXG5cblxudmFyIFBvbGlzaGVkRXJyb3IgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKF9FcnJvcikge1xuICBfaW5oZXJpdHNMb29zZShQb2xpc2hlZEVycm9yLCBfRXJyb3IpO1xuXG4gIGZ1bmN0aW9uIFBvbGlzaGVkRXJyb3IoY29kZSkge1xuICAgIHZhciBfdGhpcztcblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBfdGhpcyA9IF9FcnJvci5jYWxsKHRoaXMsIFwiQW4gZXJyb3Igb2NjdXJyZWQuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vc3R5bGVkLWNvbXBvbmVudHMvcG9saXNoZWQvYmxvYi9tYXN0ZXIvc3JjL2Vycm9yL2Vycm9ycy5tZCNcIiArIGNvZGUgKyBcIiBmb3IgbW9yZSBpbmZvcm1hdGlvbi5cIikgfHwgdGhpcztcbiAgICB9IGVsc2Uge1xuICAgICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4yID4gMSA/IF9sZW4yIC0gMSA6IDApLCBfa2V5MiA9IDE7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgICAgYXJnc1tfa2V5MiAtIDFdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICAgIH1cblxuICAgICAgX3RoaXMgPSBfRXJyb3IuY2FsbCh0aGlzLCBmb3JtYXQuYXBwbHkodm9pZCAwLCBbRVJST1JTW2NvZGVdXS5jb25jYXQoYXJncykpKSB8fCB0aGlzO1xuICAgIH1cblxuICAgIHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKTtcbiAgfVxuXG4gIHJldHVybiBQb2xpc2hlZEVycm9yO1xufShcbi8qI19fUFVSRV9fKi9cbl93cmFwTmF0aXZlU3VwZXIoRXJyb3IpKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gUG9saXNoZWRFcnJvcjtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX2hzbFRvUmdiID1cbi8qI19fUFVSRV9fKi9cbl9pbnRlcm9wUmVxdWlyZURlZmF1bHQoXG4vKiNfX1BVUkVfXyovXG5yZXF1aXJlKFwiLi4vaW50ZXJuYWxIZWxwZXJzL19oc2xUb1JnYlwiKSk7XG5cbnZhciBfbmFtZVRvSGV4ID1cbi8qI19fUFVSRV9fKi9cbl9pbnRlcm9wUmVxdWlyZURlZmF1bHQoXG4vKiNfX1BVUkVfXyovXG5yZXF1aXJlKFwiLi4vaW50ZXJuYWxIZWxwZXJzL19uYW1lVG9IZXhcIikpO1xuXG52YXIgX2Vycm9ycyA9XG4vKiNfX1BVUkVfXyovXG5faW50ZXJvcFJlcXVpcmVEZWZhdWx0KFxuLyojX19QVVJFX18qL1xucmVxdWlyZShcIi4uL2ludGVybmFsSGVscGVycy9fZXJyb3JzXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIGhleFJlZ2V4ID0gL14jW2EtZkEtRjAtOV17Nn0kLztcbnZhciBoZXhSZ2JhUmVnZXggPSAvXiNbYS1mQS1GMC05XXs4fSQvO1xudmFyIHJlZHVjZWRIZXhSZWdleCA9IC9eI1thLWZBLUYwLTldezN9JC87XG52YXIgcmVkdWNlZFJnYmFIZXhSZWdleCA9IC9eI1thLWZBLUYwLTldezR9JC87XG52YXIgcmdiUmVnZXggPSAvXnJnYlxcKFxccyooXFxkezEsM30pXFxzKixcXHMqKFxcZHsxLDN9KVxccyosXFxzKihcXGR7MSwzfSlcXHMqXFwpJC87XG52YXIgcmdiYVJlZ2V4ID0gL15yZ2JhXFwoXFxzKihcXGR7MSwzfSlcXHMqLFxccyooXFxkezEsM30pXFxzKixcXHMqKFxcZHsxLDN9KVxccyosXFxzKihbLStdP1swLTldKlsuXT9bMC05XSspXFxzKlxcKSQvO1xudmFyIGhzbFJlZ2V4ID0gL15oc2xcXChcXHMqKFxcZHswLDN9Wy5dP1swLTldKylcXHMqLFxccyooXFxkezEsM30pJVxccyosXFxzKihcXGR7MSwzfSklXFxzKlxcKSQvO1xudmFyIGhzbGFSZWdleCA9IC9eaHNsYVxcKFxccyooXFxkezAsM31bLl0/WzAtOV0rKVxccyosXFxzKihcXGR7MSwzfSklXFxzKixcXHMqKFxcZHsxLDN9KSVcXHMqLFxccyooWy0rXT9bMC05XSpbLl0/WzAtOV0rKVxccypcXCkkLztcbi8qKlxuICogUmV0dXJucyBhbiBSZ2JDb2xvciBvciBSZ2JhQ29sb3Igb2JqZWN0LiBUaGlzIHV0aWxpdHkgZnVuY3Rpb24gaXMgb25seSB1c2VmdWxcbiAqIGlmIHdhbnQgdG8gZXh0cmFjdCBhIGNvbG9yIGNvbXBvbmVudC4gV2l0aCB0aGUgY29sb3IgdXRpbCBgdG9Db2xvclN0cmluZ2AgeW91XG4gKiBjYW4gY29udmVydCBhIFJnYkNvbG9yIG9yIFJnYmFDb2xvciBvYmplY3QgYmFjayB0byBhIHN0cmluZy5cbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQXNzaWducyBgeyByZWQ6IDI1NSwgZ3JlZW46IDAsIGJsdWU6IDAgfWAgdG8gY29sb3IxXG4gKiBjb25zdCBjb2xvcjEgPSBwYXJzZVRvUmdiKCdyZ2IoMjU1LCAwLCAwKScpO1xuICogLy8gQXNzaWducyBgeyByZWQ6IDkyLCBncmVlbjogMTAyLCBibHVlOiAxMTIsIGFscGhhOiAwLjc1IH1gIHRvIGNvbG9yMlxuICogY29uc3QgY29sb3IyID0gcGFyc2VUb1JnYignaHNsYSgyMTAsIDEwJSwgNDAlLCAwLjc1KScpO1xuICovXG5cbmZ1bmN0aW9uIHBhcnNlVG9SZ2IoY29sb3IpIHtcbiAgaWYgKHR5cGVvZiBjb2xvciAhPT0gJ3N0cmluZycpIHtcbiAgICB0aHJvdyBuZXcgX2Vycm9ycy5kZWZhdWx0KDMpO1xuICB9XG5cbiAgdmFyIG5vcm1hbGl6ZWRDb2xvciA9ICgwLCBfbmFtZVRvSGV4LmRlZmF1bHQpKGNvbG9yKTtcblxuICBpZiAobm9ybWFsaXplZENvbG9yLm1hdGNoKGhleFJlZ2V4KSkge1xuICAgIHJldHVybiB7XG4gICAgICByZWQ6IHBhcnNlSW50KFwiXCIgKyBub3JtYWxpemVkQ29sb3JbMV0gKyBub3JtYWxpemVkQ29sb3JbMl0sIDE2KSxcbiAgICAgIGdyZWVuOiBwYXJzZUludChcIlwiICsgbm9ybWFsaXplZENvbG9yWzNdICsgbm9ybWFsaXplZENvbG9yWzRdLCAxNiksXG4gICAgICBibHVlOiBwYXJzZUludChcIlwiICsgbm9ybWFsaXplZENvbG9yWzVdICsgbm9ybWFsaXplZENvbG9yWzZdLCAxNilcbiAgICB9O1xuICB9XG5cbiAgaWYgKG5vcm1hbGl6ZWRDb2xvci5tYXRjaChoZXhSZ2JhUmVnZXgpKSB7XG4gICAgdmFyIGFscGhhID0gcGFyc2VGbG9hdCgocGFyc2VJbnQoXCJcIiArIG5vcm1hbGl6ZWRDb2xvcls3XSArIG5vcm1hbGl6ZWRDb2xvcls4XSwgMTYpIC8gMjU1KS50b0ZpeGVkKDIpKTtcbiAgICByZXR1cm4ge1xuICAgICAgcmVkOiBwYXJzZUludChcIlwiICsgbm9ybWFsaXplZENvbG9yWzFdICsgbm9ybWFsaXplZENvbG9yWzJdLCAxNiksXG4gICAgICBncmVlbjogcGFyc2VJbnQoXCJcIiArIG5vcm1hbGl6ZWRDb2xvclszXSArIG5vcm1hbGl6ZWRDb2xvcls0XSwgMTYpLFxuICAgICAgYmx1ZTogcGFyc2VJbnQoXCJcIiArIG5vcm1hbGl6ZWRDb2xvcls1XSArIG5vcm1hbGl6ZWRDb2xvcls2XSwgMTYpLFxuICAgICAgYWxwaGE6IGFscGhhXG4gICAgfTtcbiAgfVxuXG4gIGlmIChub3JtYWxpemVkQ29sb3IubWF0Y2gocmVkdWNlZEhleFJlZ2V4KSkge1xuICAgIHJldHVybiB7XG4gICAgICByZWQ6IHBhcnNlSW50KFwiXCIgKyBub3JtYWxpemVkQ29sb3JbMV0gKyBub3JtYWxpemVkQ29sb3JbMV0sIDE2KSxcbiAgICAgIGdyZWVuOiBwYXJzZUludChcIlwiICsgbm9ybWFsaXplZENvbG9yWzJdICsgbm9ybWFsaXplZENvbG9yWzJdLCAxNiksXG4gICAgICBibHVlOiBwYXJzZUludChcIlwiICsgbm9ybWFsaXplZENvbG9yWzNdICsgbm9ybWFsaXplZENvbG9yWzNdLCAxNilcbiAgICB9O1xuICB9XG5cbiAgaWYgKG5vcm1hbGl6ZWRDb2xvci5tYXRjaChyZWR1Y2VkUmdiYUhleFJlZ2V4KSkge1xuICAgIHZhciBfYWxwaGEgPSBwYXJzZUZsb2F0KChwYXJzZUludChcIlwiICsgbm9ybWFsaXplZENvbG9yWzRdICsgbm9ybWFsaXplZENvbG9yWzRdLCAxNikgLyAyNTUpLnRvRml4ZWQoMikpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHJlZDogcGFyc2VJbnQoXCJcIiArIG5vcm1hbGl6ZWRDb2xvclsxXSArIG5vcm1hbGl6ZWRDb2xvclsxXSwgMTYpLFxuICAgICAgZ3JlZW46IHBhcnNlSW50KFwiXCIgKyBub3JtYWxpemVkQ29sb3JbMl0gKyBub3JtYWxpemVkQ29sb3JbMl0sIDE2KSxcbiAgICAgIGJsdWU6IHBhcnNlSW50KFwiXCIgKyBub3JtYWxpemVkQ29sb3JbM10gKyBub3JtYWxpemVkQ29sb3JbM10sIDE2KSxcbiAgICAgIGFscGhhOiBfYWxwaGFcbiAgICB9O1xuICB9XG5cbiAgdmFyIHJnYk1hdGNoZWQgPSByZ2JSZWdleC5leGVjKG5vcm1hbGl6ZWRDb2xvcik7XG5cbiAgaWYgKHJnYk1hdGNoZWQpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcmVkOiBwYXJzZUludChcIlwiICsgcmdiTWF0Y2hlZFsxXSwgMTApLFxuICAgICAgZ3JlZW46IHBhcnNlSW50KFwiXCIgKyByZ2JNYXRjaGVkWzJdLCAxMCksXG4gICAgICBibHVlOiBwYXJzZUludChcIlwiICsgcmdiTWF0Y2hlZFszXSwgMTApXG4gICAgfTtcbiAgfVxuXG4gIHZhciByZ2JhTWF0Y2hlZCA9IHJnYmFSZWdleC5leGVjKG5vcm1hbGl6ZWRDb2xvcik7XG5cbiAgaWYgKHJnYmFNYXRjaGVkKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJlZDogcGFyc2VJbnQoXCJcIiArIHJnYmFNYXRjaGVkWzFdLCAxMCksXG4gICAgICBncmVlbjogcGFyc2VJbnQoXCJcIiArIHJnYmFNYXRjaGVkWzJdLCAxMCksXG4gICAgICBibHVlOiBwYXJzZUludChcIlwiICsgcmdiYU1hdGNoZWRbM10sIDEwKSxcbiAgICAgIGFscGhhOiBwYXJzZUZsb2F0KFwiXCIgKyByZ2JhTWF0Y2hlZFs0XSlcbiAgICB9O1xuICB9XG5cbiAgdmFyIGhzbE1hdGNoZWQgPSBoc2xSZWdleC5leGVjKG5vcm1hbGl6ZWRDb2xvcik7XG5cbiAgaWYgKGhzbE1hdGNoZWQpIHtcbiAgICB2YXIgaHVlID0gcGFyc2VJbnQoXCJcIiArIGhzbE1hdGNoZWRbMV0sIDEwKTtcbiAgICB2YXIgc2F0dXJhdGlvbiA9IHBhcnNlSW50KFwiXCIgKyBoc2xNYXRjaGVkWzJdLCAxMCkgLyAxMDA7XG4gICAgdmFyIGxpZ2h0bmVzcyA9IHBhcnNlSW50KFwiXCIgKyBoc2xNYXRjaGVkWzNdLCAxMCkgLyAxMDA7XG4gICAgdmFyIHJnYkNvbG9yU3RyaW5nID0gXCJyZ2IoXCIgKyAoMCwgX2hzbFRvUmdiLmRlZmF1bHQpKGh1ZSwgc2F0dXJhdGlvbiwgbGlnaHRuZXNzKSArIFwiKVwiO1xuICAgIHZhciBoc2xSZ2JNYXRjaGVkID0gcmdiUmVnZXguZXhlYyhyZ2JDb2xvclN0cmluZyk7XG5cbiAgICBpZiAoIWhzbFJnYk1hdGNoZWQpIHtcbiAgICAgIHRocm93IG5ldyBfZXJyb3JzLmRlZmF1bHQoNCwgbm9ybWFsaXplZENvbG9yLCByZ2JDb2xvclN0cmluZyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHJlZDogcGFyc2VJbnQoXCJcIiArIGhzbFJnYk1hdGNoZWRbMV0sIDEwKSxcbiAgICAgIGdyZWVuOiBwYXJzZUludChcIlwiICsgaHNsUmdiTWF0Y2hlZFsyXSwgMTApLFxuICAgICAgYmx1ZTogcGFyc2VJbnQoXCJcIiArIGhzbFJnYk1hdGNoZWRbM10sIDEwKVxuICAgIH07XG4gIH1cblxuICB2YXIgaHNsYU1hdGNoZWQgPSBoc2xhUmVnZXguZXhlYyhub3JtYWxpemVkQ29sb3IpO1xuXG4gIGlmIChoc2xhTWF0Y2hlZCkge1xuICAgIHZhciBfaHVlID0gcGFyc2VJbnQoXCJcIiArIGhzbGFNYXRjaGVkWzFdLCAxMCk7XG5cbiAgICB2YXIgX3NhdHVyYXRpb24gPSBwYXJzZUludChcIlwiICsgaHNsYU1hdGNoZWRbMl0sIDEwKSAvIDEwMDtcblxuICAgIHZhciBfbGlnaHRuZXNzID0gcGFyc2VJbnQoXCJcIiArIGhzbGFNYXRjaGVkWzNdLCAxMCkgLyAxMDA7XG5cbiAgICB2YXIgX3JnYkNvbG9yU3RyaW5nID0gXCJyZ2IoXCIgKyAoMCwgX2hzbFRvUmdiLmRlZmF1bHQpKF9odWUsIF9zYXR1cmF0aW9uLCBfbGlnaHRuZXNzKSArIFwiKVwiO1xuXG4gICAgdmFyIF9oc2xSZ2JNYXRjaGVkID0gcmdiUmVnZXguZXhlYyhfcmdiQ29sb3JTdHJpbmcpO1xuXG4gICAgaWYgKCFfaHNsUmdiTWF0Y2hlZCkge1xuICAgICAgdGhyb3cgbmV3IF9lcnJvcnMuZGVmYXVsdCg0LCBub3JtYWxpemVkQ29sb3IsIF9yZ2JDb2xvclN0cmluZyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHJlZDogcGFyc2VJbnQoXCJcIiArIF9oc2xSZ2JNYXRjaGVkWzFdLCAxMCksXG4gICAgICBncmVlbjogcGFyc2VJbnQoXCJcIiArIF9oc2xSZ2JNYXRjaGVkWzJdLCAxMCksXG4gICAgICBibHVlOiBwYXJzZUludChcIlwiICsgX2hzbFJnYk1hdGNoZWRbM10sIDEwKSxcbiAgICAgIGFscGhhOiBwYXJzZUZsb2F0KFwiXCIgKyBoc2xhTWF0Y2hlZFs0XSlcbiAgICB9O1xuICB9XG5cbiAgdGhyb3cgbmV3IF9lcnJvcnMuZGVmYXVsdCg1KTtcbn1cblxudmFyIF9kZWZhdWx0ID0gcGFyc2VUb1JnYjtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbmZ1bmN0aW9uIHJnYlRvSHNsKGNvbG9yKSB7XG4gIC8vIG1ha2Ugc3VyZSByZ2IgYXJlIGNvbnRhaW5lZCBpbiBhIHNldCBvZiBbMCwgMjU1XVxuICB2YXIgcmVkID0gY29sb3IucmVkIC8gMjU1O1xuICB2YXIgZ3JlZW4gPSBjb2xvci5ncmVlbiAvIDI1NTtcbiAgdmFyIGJsdWUgPSBjb2xvci5ibHVlIC8gMjU1O1xuICB2YXIgbWF4ID0gTWF0aC5tYXgocmVkLCBncmVlbiwgYmx1ZSk7XG4gIHZhciBtaW4gPSBNYXRoLm1pbihyZWQsIGdyZWVuLCBibHVlKTtcbiAgdmFyIGxpZ2h0bmVzcyA9IChtYXggKyBtaW4pIC8gMjtcblxuICBpZiAobWF4ID09PSBtaW4pIHtcbiAgICAvLyBhY2hyb21hdGljXG4gICAgaWYgKGNvbG9yLmFscGhhICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGh1ZTogMCxcbiAgICAgICAgc2F0dXJhdGlvbjogMCxcbiAgICAgICAgbGlnaHRuZXNzOiBsaWdodG5lc3MsXG4gICAgICAgIGFscGhhOiBjb2xvci5hbHBoYVxuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaHVlOiAwLFxuICAgICAgICBzYXR1cmF0aW9uOiAwLFxuICAgICAgICBsaWdodG5lc3M6IGxpZ2h0bmVzc1xuICAgICAgfTtcbiAgICB9XG4gIH1cblxuICB2YXIgaHVlO1xuICB2YXIgZGVsdGEgPSBtYXggLSBtaW47XG4gIHZhciBzYXR1cmF0aW9uID0gbGlnaHRuZXNzID4gMC41ID8gZGVsdGEgLyAoMiAtIG1heCAtIG1pbikgOiBkZWx0YSAvIChtYXggKyBtaW4pO1xuXG4gIHN3aXRjaCAobWF4KSB7XG4gICAgY2FzZSByZWQ6XG4gICAgICBodWUgPSAoZ3JlZW4gLSBibHVlKSAvIGRlbHRhICsgKGdyZWVuIDwgYmx1ZSA/IDYgOiAwKTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBncmVlbjpcbiAgICAgIGh1ZSA9IChibHVlIC0gcmVkKSAvIGRlbHRhICsgMjtcbiAgICAgIGJyZWFrO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIC8vIGJsdWUgY2FzZVxuICAgICAgaHVlID0gKHJlZCAtIGdyZWVuKSAvIGRlbHRhICsgNDtcbiAgICAgIGJyZWFrO1xuICB9XG5cbiAgaHVlICo9IDYwO1xuXG4gIGlmIChjb2xvci5hbHBoYSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGh1ZTogaHVlLFxuICAgICAgc2F0dXJhdGlvbjogc2F0dXJhdGlvbixcbiAgICAgIGxpZ2h0bmVzczogbGlnaHRuZXNzLFxuICAgICAgYWxwaGE6IGNvbG9yLmFscGhhXG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgaHVlOiBodWUsXG4gICAgc2F0dXJhdGlvbjogc2F0dXJhdGlvbixcbiAgICBsaWdodG5lc3M6IGxpZ2h0bmVzc1xuICB9O1xufVxuXG52YXIgX2RlZmF1bHQgPSByZ2JUb0hzbDtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBfcGFyc2VUb1JnYiA9XG4vKiNfX1BVUkVfXyovXG5faW50ZXJvcFJlcXVpcmVEZWZhdWx0KFxuLyojX19QVVJFX18qL1xucmVxdWlyZShcIi4vcGFyc2VUb1JnYlwiKSk7XG5cbnZhciBfcmdiVG9Ic2wgPVxuLyojX19QVVJFX18qL1xuX2ludGVyb3BSZXF1aXJlRGVmYXVsdChcbi8qI19fUFVSRV9fKi9cbnJlcXVpcmUoXCIuLi9pbnRlcm5hbEhlbHBlcnMvX3JnYlRvSHNsXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuLyoqXG4gKiBSZXR1cm5zIGFuIEhzbENvbG9yIG9yIEhzbGFDb2xvciBvYmplY3QuIFRoaXMgdXRpbGl0eSBmdW5jdGlvbiBpcyBvbmx5IHVzZWZ1bFxuICogaWYgd2FudCB0byBleHRyYWN0IGEgY29sb3IgY29tcG9uZW50LiBXaXRoIHRoZSBjb2xvciB1dGlsIGB0b0NvbG9yU3RyaW5nYCB5b3VcbiAqIGNhbiBjb252ZXJ0IGEgSHNsQ29sb3Igb3IgSHNsYUNvbG9yIG9iamVjdCBiYWNrIHRvIGEgc3RyaW5nLlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBc3NpZ25zIGB7IGh1ZTogMCwgc2F0dXJhdGlvbjogMSwgbGlnaHRuZXNzOiAwLjUgfWAgdG8gY29sb3IxXG4gKiBjb25zdCBjb2xvcjEgPSBwYXJzZVRvSHNsKCdyZ2IoMjU1LCAwLCAwKScpO1xuICogLy8gQXNzaWducyBgeyBodWU6IDEyOCwgc2F0dXJhdGlvbjogMSwgbGlnaHRuZXNzOiAwLjUsIGFscGhhOiAwLjc1IH1gIHRvIGNvbG9yMlxuICogY29uc3QgY29sb3IyID0gcGFyc2VUb0hzbCgnaHNsYSgxMjgsIDEwMCUsIDUwJSwgMC43NSknKTtcbiAqL1xuZnVuY3Rpb24gcGFyc2VUb0hzbChjb2xvcikge1xuICAvLyBOb3RlOiBBdCBhIGxhdGVyIHN0YWdlIHdlIGNhbiBvcHRpbWl6ZSB0aGlzIGZ1bmN0aW9uIGFzIHJpZ2h0IG5vdyBhIGhzbFxuICAvLyBjb2xvciB3b3VsZCBiZSBwYXJzZWQgY29udmVydGVkIHRvIHJnYiB2YWx1ZXMgYW5kIGNvbnZlcnRlZCBiYWNrIHRvIGhzbC5cbiAgcmV0dXJuICgwLCBfcmdiVG9Ic2wuZGVmYXVsdCkoKDAsIF9wYXJzZVRvUmdiLmRlZmF1bHQpKGNvbG9yKSk7XG59XG5cbnZhciBfZGVmYXVsdCA9IHBhcnNlVG9Ic2w7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG4vKipcbiAqIFJlZHVjZXMgaGV4IHZhbHVlcyBpZiBwb3NzaWJsZSBlLmcuICNmZjg4NjYgdG8gI2Y4NlxuICogQHByaXZhdGVcbiAqL1xudmFyIHJlZHVjZUhleFZhbHVlID0gZnVuY3Rpb24gcmVkdWNlSGV4VmFsdWUodmFsdWUpIHtcbiAgaWYgKHZhbHVlLmxlbmd0aCA9PT0gNyAmJiB2YWx1ZVsxXSA9PT0gdmFsdWVbMl0gJiYgdmFsdWVbM10gPT09IHZhbHVlWzRdICYmIHZhbHVlWzVdID09PSB2YWx1ZVs2XSkge1xuICAgIHJldHVybiBcIiNcIiArIHZhbHVlWzFdICsgdmFsdWVbM10gKyB2YWx1ZVs1XTtcbiAgfVxuXG4gIHJldHVybiB2YWx1ZTtcbn07XG5cbnZhciBfZGVmYXVsdCA9IHJlZHVjZUhleFZhbHVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxuZnVuY3Rpb24gbnVtYmVyVG9IZXgodmFsdWUpIHtcbiAgdmFyIGhleCA9IHZhbHVlLnRvU3RyaW5nKDE2KTtcbiAgcmV0dXJuIGhleC5sZW5ndGggPT09IDEgPyBcIjBcIiArIGhleCA6IGhleDtcbn1cblxudmFyIF9kZWZhdWx0ID0gbnVtYmVyVG9IZXg7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX2hzbFRvUmdiID1cbi8qI19fUFVSRV9fKi9cbl9pbnRlcm9wUmVxdWlyZURlZmF1bHQoXG4vKiNfX1BVUkVfXyovXG5yZXF1aXJlKFwiLi9faHNsVG9SZ2JcIikpO1xuXG52YXIgX3JlZHVjZUhleFZhbHVlID1cbi8qI19fUFVSRV9fKi9cbl9pbnRlcm9wUmVxdWlyZURlZmF1bHQoXG4vKiNfX1BVUkVfXyovXG5yZXF1aXJlKFwiLi9fcmVkdWNlSGV4VmFsdWVcIikpO1xuXG52YXIgX251bWJlclRvSGV4ID1cbi8qI19fUFVSRV9fKi9cbl9pbnRlcm9wUmVxdWlyZURlZmF1bHQoXG4vKiNfX1BVUkVfXyovXG5yZXF1aXJlKFwiLi9fbnVtYmVyVG9IZXhcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBjb2xvclRvSGV4KGNvbG9yKSB7XG4gIHJldHVybiAoMCwgX251bWJlclRvSGV4LmRlZmF1bHQpKE1hdGgucm91bmQoY29sb3IgKiAyNTUpKTtcbn1cblxuZnVuY3Rpb24gY29udmVydFRvSGV4KHJlZCwgZ3JlZW4sIGJsdWUpIHtcbiAgcmV0dXJuICgwLCBfcmVkdWNlSGV4VmFsdWUuZGVmYXVsdCkoXCIjXCIgKyBjb2xvclRvSGV4KHJlZCkgKyBjb2xvclRvSGV4KGdyZWVuKSArIGNvbG9yVG9IZXgoYmx1ZSkpO1xufVxuXG5mdW5jdGlvbiBoc2xUb0hleChodWUsIHNhdHVyYXRpb24sIGxpZ2h0bmVzcykge1xuICByZXR1cm4gKDAsIF9oc2xUb1JnYi5kZWZhdWx0KShodWUsIHNhdHVyYXRpb24sIGxpZ2h0bmVzcywgY29udmVydFRvSGV4KTtcbn1cblxudmFyIF9kZWZhdWx0ID0gaHNsVG9IZXg7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX2hzbFRvSGV4ID1cbi8qI19fUFVSRV9fKi9cbl9pbnRlcm9wUmVxdWlyZURlZmF1bHQoXG4vKiNfX1BVUkVfXyovXG5yZXF1aXJlKFwiLi4vaW50ZXJuYWxIZWxwZXJzL19oc2xUb0hleFwiKSk7XG5cbnZhciBfZXJyb3JzID1cbi8qI19fUFVSRV9fKi9cbl9pbnRlcm9wUmVxdWlyZURlZmF1bHQoXG4vKiNfX1BVUkVfXyovXG5yZXF1aXJlKFwiLi4vaW50ZXJuYWxIZWxwZXJzL19lcnJvcnNcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG4vKipcbiAqIFJldHVybnMgYSBzdHJpbmcgdmFsdWUgZm9yIHRoZSBjb2xvci4gVGhlIHJldHVybmVkIHJlc3VsdCBpcyB0aGUgc21hbGxlc3QgcG9zc2libGUgaGV4IG5vdGF0aW9uLlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBTdHlsZXMgYXMgb2JqZWN0IHVzYWdlXG4gKiBjb25zdCBzdHlsZXMgPSB7XG4gKiAgIGJhY2tncm91bmQ6IGhzbCgzNTksIDAuNzUsIDAuNCksXG4gKiAgIGJhY2tncm91bmQ6IGhzbCh7IGh1ZTogMzYwLCBzYXR1cmF0aW9uOiAwLjc1LCBsaWdodG5lc3M6IDAuNCB9KSxcbiAqIH1cbiAqXG4gKiAvLyBzdHlsZWQtY29tcG9uZW50cyB1c2FnZVxuICogY29uc3QgZGl2ID0gc3R5bGVkLmRpdmBcbiAqICAgYmFja2dyb3VuZDogJHtoc2woMzU5LCAwLjc1LCAwLjQpfTtcbiAqICAgYmFja2dyb3VuZDogJHtoc2woeyBodWU6IDM2MCwgc2F0dXJhdGlvbjogMC43NSwgbGlnaHRuZXNzOiAwLjQgfSl9O1xuICogYFxuICpcbiAqIC8vIENTUyBpbiBKUyBPdXRwdXRcbiAqXG4gKiBlbGVtZW50IHtcbiAqICAgYmFja2dyb3VuZDogXCIjYjMxOTFjXCI7XG4gKiAgIGJhY2tncm91bmQ6IFwiI2IzMTkxY1wiO1xuICogfVxuICovXG5mdW5jdGlvbiBoc2wodmFsdWUsIHNhdHVyYXRpb24sIGxpZ2h0bmVzcykge1xuICBpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJyAmJiB0eXBlb2Ygc2F0dXJhdGlvbiA9PT0gJ251bWJlcicgJiYgdHlwZW9mIGxpZ2h0bmVzcyA9PT0gJ251bWJlcicpIHtcbiAgICByZXR1cm4gKDAsIF9oc2xUb0hleC5kZWZhdWx0KSh2YWx1ZSwgc2F0dXJhdGlvbiwgbGlnaHRuZXNzKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHNhdHVyYXRpb24gPT09IHVuZGVmaW5lZCAmJiBsaWdodG5lc3MgPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiAoMCwgX2hzbFRvSGV4LmRlZmF1bHQpKHZhbHVlLmh1ZSwgdmFsdWUuc2F0dXJhdGlvbiwgdmFsdWUubGlnaHRuZXNzKTtcbiAgfVxuXG4gIHRocm93IG5ldyBfZXJyb3JzLmRlZmF1bHQoMSk7XG59XG5cbnZhciBfZGVmYXVsdCA9IGhzbDtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBfaHNsVG9IZXggPVxuLyojX19QVVJFX18qL1xuX2ludGVyb3BSZXF1aXJlRGVmYXVsdChcbi8qI19fUFVSRV9fKi9cbnJlcXVpcmUoXCIuLi9pbnRlcm5hbEhlbHBlcnMvX2hzbFRvSGV4XCIpKTtcblxudmFyIF9oc2xUb1JnYiA9XG4vKiNfX1BVUkVfXyovXG5faW50ZXJvcFJlcXVpcmVEZWZhdWx0KFxuLyojX19QVVJFX18qL1xucmVxdWlyZShcIi4uL2ludGVybmFsSGVscGVycy9faHNsVG9SZ2JcIikpO1xuXG52YXIgX2Vycm9ycyA9XG4vKiNfX1BVUkVfXyovXG5faW50ZXJvcFJlcXVpcmVEZWZhdWx0KFxuLyojX19QVVJFX18qL1xucmVxdWlyZShcIi4uL2ludGVybmFsSGVscGVycy9fZXJyb3JzXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuLyoqXG4gKiBSZXR1cm5zIGEgc3RyaW5nIHZhbHVlIGZvciB0aGUgY29sb3IuIFRoZSByZXR1cm5lZCByZXN1bHQgaXMgdGhlIHNtYWxsZXN0IHBvc3NpYmxlIHJnYmEgb3IgaGV4IG5vdGF0aW9uLlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBTdHlsZXMgYXMgb2JqZWN0IHVzYWdlXG4gKiBjb25zdCBzdHlsZXMgPSB7XG4gKiAgIGJhY2tncm91bmQ6IGhzbGEoMzU5LCAwLjc1LCAwLjQsIDAuNyksXG4gKiAgIGJhY2tncm91bmQ6IGhzbGEoeyBodWU6IDM2MCwgc2F0dXJhdGlvbjogMC43NSwgbGlnaHRuZXNzOiAwLjQsIGFscGhhOiAwLDcgfSksXG4gKiAgIGJhY2tncm91bmQ6IGhzbGEoMzU5LCAwLjc1LCAwLjQsIDEpLFxuICogfVxuICpcbiAqIC8vIHN0eWxlZC1jb21wb25lbnRzIHVzYWdlXG4gKiBjb25zdCBkaXYgPSBzdHlsZWQuZGl2YFxuICogICBiYWNrZ3JvdW5kOiAke2hzbGEoMzU5LCAwLjc1LCAwLjQsIDAuNyl9O1xuICogICBiYWNrZ3JvdW5kOiAke2hzbGEoeyBodWU6IDM2MCwgc2F0dXJhdGlvbjogMC43NSwgbGlnaHRuZXNzOiAwLjQsIGFscGhhOiAwLDcgfSl9O1xuICogICBiYWNrZ3JvdW5kOiAke2hzbGEoMzU5LCAwLjc1LCAwLjQsIDEpfTtcbiAqIGBcbiAqXG4gKiAvLyBDU1MgaW4gSlMgT3V0cHV0XG4gKlxuICogZWxlbWVudCB7XG4gKiAgIGJhY2tncm91bmQ6IFwicmdiYSgxNzksMjUsMjgsMC43KVwiO1xuICogICBiYWNrZ3JvdW5kOiBcInJnYmEoMTc5LDI1LDI4LDAuNylcIjtcbiAqICAgYmFja2dyb3VuZDogXCIjYjMxOTFjXCI7XG4gKiB9XG4gKi9cbmZ1bmN0aW9uIGhzbGEodmFsdWUsIHNhdHVyYXRpb24sIGxpZ2h0bmVzcywgYWxwaGEpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicgJiYgdHlwZW9mIHNhdHVyYXRpb24gPT09ICdudW1iZXInICYmIHR5cGVvZiBsaWdodG5lc3MgPT09ICdudW1iZXInICYmIHR5cGVvZiBhbHBoYSA9PT0gJ251bWJlcicpIHtcbiAgICByZXR1cm4gYWxwaGEgPj0gMSA/ICgwLCBfaHNsVG9IZXguZGVmYXVsdCkodmFsdWUsIHNhdHVyYXRpb24sIGxpZ2h0bmVzcykgOiBcInJnYmEoXCIgKyAoMCwgX2hzbFRvUmdiLmRlZmF1bHQpKHZhbHVlLCBzYXR1cmF0aW9uLCBsaWdodG5lc3MpICsgXCIsXCIgKyBhbHBoYSArIFwiKVwiO1xuICB9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgc2F0dXJhdGlvbiA9PT0gdW5kZWZpbmVkICYmIGxpZ2h0bmVzcyA9PT0gdW5kZWZpbmVkICYmIGFscGhhID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gdmFsdWUuYWxwaGEgPj0gMSA/ICgwLCBfaHNsVG9IZXguZGVmYXVsdCkodmFsdWUuaHVlLCB2YWx1ZS5zYXR1cmF0aW9uLCB2YWx1ZS5saWdodG5lc3MpIDogXCJyZ2JhKFwiICsgKDAsIF9oc2xUb1JnYi5kZWZhdWx0KSh2YWx1ZS5odWUsIHZhbHVlLnNhdHVyYXRpb24sIHZhbHVlLmxpZ2h0bmVzcykgKyBcIixcIiArIHZhbHVlLmFscGhhICsgXCIpXCI7XG4gIH1cblxuICB0aHJvdyBuZXcgX2Vycm9ycy5kZWZhdWx0KDIpO1xufVxuXG52YXIgX2RlZmF1bHQgPSBoc2xhO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIF9yZWR1Y2VIZXhWYWx1ZSA9XG4vKiNfX1BVUkVfXyovXG5faW50ZXJvcFJlcXVpcmVEZWZhdWx0KFxuLyojX19QVVJFX18qL1xucmVxdWlyZShcIi4uL2ludGVybmFsSGVscGVycy9fcmVkdWNlSGV4VmFsdWVcIikpO1xuXG52YXIgX251bWJlclRvSGV4ID1cbi8qI19fUFVSRV9fKi9cbl9pbnRlcm9wUmVxdWlyZURlZmF1bHQoXG4vKiNfX1BVUkVfXyovXG5yZXF1aXJlKFwiLi4vaW50ZXJuYWxIZWxwZXJzL19udW1iZXJUb0hleFwiKSk7XG5cbnZhciBfZXJyb3JzID1cbi8qI19fUFVSRV9fKi9cbl9pbnRlcm9wUmVxdWlyZURlZmF1bHQoXG4vKiNfX1BVUkVfXyovXG5yZXF1aXJlKFwiLi4vaW50ZXJuYWxIZWxwZXJzL19lcnJvcnNcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG4vKipcbiAqIFJldHVybnMgYSBzdHJpbmcgdmFsdWUgZm9yIHRoZSBjb2xvci4gVGhlIHJldHVybmVkIHJlc3VsdCBpcyB0aGUgc21hbGxlc3QgcG9zc2libGUgaGV4IG5vdGF0aW9uLlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBTdHlsZXMgYXMgb2JqZWN0IHVzYWdlXG4gKiBjb25zdCBzdHlsZXMgPSB7XG4gKiAgIGJhY2tncm91bmQ6IHJnYigyNTUsIDIwNSwgMTAwKSxcbiAqICAgYmFja2dyb3VuZDogcmdiKHsgcmVkOiAyNTUsIGdyZWVuOiAyMDUsIGJsdWU6IDEwMCB9KSxcbiAqIH1cbiAqXG4gKiAvLyBzdHlsZWQtY29tcG9uZW50cyB1c2FnZVxuICogY29uc3QgZGl2ID0gc3R5bGVkLmRpdmBcbiAqICAgYmFja2dyb3VuZDogJHtyZ2IoMjU1LCAyMDUsIDEwMCl9O1xuICogICBiYWNrZ3JvdW5kOiAke3JnYih7IHJlZDogMjU1LCBncmVlbjogMjA1LCBibHVlOiAxMDAgfSl9O1xuICogYFxuICpcbiAqIC8vIENTUyBpbiBKUyBPdXRwdXRcbiAqXG4gKiBlbGVtZW50IHtcbiAqICAgYmFja2dyb3VuZDogXCIjZmZjZDY0XCI7XG4gKiAgIGJhY2tncm91bmQ6IFwiI2ZmY2Q2NFwiO1xuICogfVxuICovXG5mdW5jdGlvbiByZ2IodmFsdWUsIGdyZWVuLCBibHVlKSB7XG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInICYmIHR5cGVvZiBncmVlbiA9PT0gJ251bWJlcicgJiYgdHlwZW9mIGJsdWUgPT09ICdudW1iZXInKSB7XG4gICAgcmV0dXJuICgwLCBfcmVkdWNlSGV4VmFsdWUuZGVmYXVsdCkoXCIjXCIgKyAoMCwgX251bWJlclRvSGV4LmRlZmF1bHQpKHZhbHVlKSArICgwLCBfbnVtYmVyVG9IZXguZGVmYXVsdCkoZ3JlZW4pICsgKDAsIF9udW1iZXJUb0hleC5kZWZhdWx0KShibHVlKSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiBncmVlbiA9PT0gdW5kZWZpbmVkICYmIGJsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiAoMCwgX3JlZHVjZUhleFZhbHVlLmRlZmF1bHQpKFwiI1wiICsgKDAsIF9udW1iZXJUb0hleC5kZWZhdWx0KSh2YWx1ZS5yZWQpICsgKDAsIF9udW1iZXJUb0hleC5kZWZhdWx0KSh2YWx1ZS5ncmVlbikgKyAoMCwgX251bWJlclRvSGV4LmRlZmF1bHQpKHZhbHVlLmJsdWUpKTtcbiAgfVxuXG4gIHRocm93IG5ldyBfZXJyb3JzLmRlZmF1bHQoNik7XG59XG5cbnZhciBfZGVmYXVsdCA9IHJnYjtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBfcGFyc2VUb1JnYiA9XG4vKiNfX1BVUkVfXyovXG5faW50ZXJvcFJlcXVpcmVEZWZhdWx0KFxuLyojX19QVVJFX18qL1xucmVxdWlyZShcIi4vcGFyc2VUb1JnYlwiKSk7XG5cbnZhciBfcmdiID1cbi8qI19fUFVSRV9fKi9cbl9pbnRlcm9wUmVxdWlyZURlZmF1bHQoXG4vKiNfX1BVUkVfXyovXG5yZXF1aXJlKFwiLi9yZ2JcIikpO1xuXG52YXIgX2Vycm9ycyA9XG4vKiNfX1BVUkVfXyovXG5faW50ZXJvcFJlcXVpcmVEZWZhdWx0KFxuLyojX19QVVJFX18qL1xucmVxdWlyZShcIi4uL2ludGVybmFsSGVscGVycy9fZXJyb3JzXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuLyoqXG4gKiBSZXR1cm5zIGEgc3RyaW5nIHZhbHVlIGZvciB0aGUgY29sb3IuIFRoZSByZXR1cm5lZCByZXN1bHQgaXMgdGhlIHNtYWxsZXN0IHBvc3NpYmxlIHJnYmEgb3IgaGV4IG5vdGF0aW9uLlxuICpcbiAqIENhbiBhbHNvIGJlIHVzZWQgdG8gZmFkZSBhIGNvbG9yIGJ5IHBhc3NpbmcgYSBoZXggdmFsdWUgb3IgbmFtZWQgQ1NTIGNvbG9yIGFsb25nIHdpdGggYW4gYWxwaGEgdmFsdWUuXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFN0eWxlcyBhcyBvYmplY3QgdXNhZ2VcbiAqIGNvbnN0IHN0eWxlcyA9IHtcbiAqICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDIwNSwgMTAwLCAwLjcpLFxuICogICBiYWNrZ3JvdW5kOiByZ2JhKHsgcmVkOiAyNTUsIGdyZWVuOiAyMDUsIGJsdWU6IDEwMCwgYWxwaGE6IDAuNyB9KSxcbiAqICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDIwNSwgMTAwLCAxKSxcbiAqICAgYmFja2dyb3VuZDogcmdiYSgnI2ZmZmZmZicsIDAuNCksXG4gKiAgIGJhY2tncm91bmQ6IHJnYmEoJ2JsYWNrJywgMC43KSxcbiAqIH1cbiAqXG4gKiAvLyBzdHlsZWQtY29tcG9uZW50cyB1c2FnZVxuICogY29uc3QgZGl2ID0gc3R5bGVkLmRpdmBcbiAqICAgYmFja2dyb3VuZDogJHtyZ2JhKDI1NSwgMjA1LCAxMDAsIDAuNyl9O1xuICogICBiYWNrZ3JvdW5kOiAke3JnYmEoeyByZWQ6IDI1NSwgZ3JlZW46IDIwNSwgYmx1ZTogMTAwLCBhbHBoYTogMC43IH0pfTtcbiAqICAgYmFja2dyb3VuZDogJHtyZ2JhKDI1NSwgMjA1LCAxMDAsIDEpfTtcbiAqICAgYmFja2dyb3VuZDogJHtyZ2JhKCcjZmZmZmZmJywgMC40KX07XG4gKiAgIGJhY2tncm91bmQ6ICR7cmdiYSgnYmxhY2snLCAwLjcpfTtcbiAqIGBcbiAqXG4gKiAvLyBDU1MgaW4gSlMgT3V0cHV0XG4gKlxuICogZWxlbWVudCB7XG4gKiAgIGJhY2tncm91bmQ6IFwicmdiYSgyNTUsMjA1LDEwMCwwLjcpXCI7XG4gKiAgIGJhY2tncm91bmQ6IFwicmdiYSgyNTUsMjA1LDEwMCwwLjcpXCI7XG4gKiAgIGJhY2tncm91bmQ6IFwiI2ZmY2Q2NFwiO1xuICogICBiYWNrZ3JvdW5kOiBcInJnYmEoMjU1LDI1NSwyNTUsMC40KVwiO1xuICogICBiYWNrZ3JvdW5kOiBcInJnYmEoMCwwLDAsMC43KVwiO1xuICogfVxuICovXG5mdW5jdGlvbiByZ2JhKGZpcnN0VmFsdWUsIHNlY29uZFZhbHVlLCB0aGlyZFZhbHVlLCBmb3VydGhWYWx1ZSkge1xuICBpZiAodHlwZW9mIGZpcnN0VmFsdWUgPT09ICdzdHJpbmcnICYmIHR5cGVvZiBzZWNvbmRWYWx1ZSA9PT0gJ251bWJlcicpIHtcbiAgICB2YXIgcmdiVmFsdWUgPSAoMCwgX3BhcnNlVG9SZ2IuZGVmYXVsdCkoZmlyc3RWYWx1ZSk7XG4gICAgcmV0dXJuIFwicmdiYShcIiArIHJnYlZhbHVlLnJlZCArIFwiLFwiICsgcmdiVmFsdWUuZ3JlZW4gKyBcIixcIiArIHJnYlZhbHVlLmJsdWUgKyBcIixcIiArIHNlY29uZFZhbHVlICsgXCIpXCI7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGZpcnN0VmFsdWUgPT09ICdudW1iZXInICYmIHR5cGVvZiBzZWNvbmRWYWx1ZSA9PT0gJ251bWJlcicgJiYgdHlwZW9mIHRoaXJkVmFsdWUgPT09ICdudW1iZXInICYmIHR5cGVvZiBmb3VydGhWYWx1ZSA9PT0gJ251bWJlcicpIHtcbiAgICByZXR1cm4gZm91cnRoVmFsdWUgPj0gMSA/ICgwLCBfcmdiLmRlZmF1bHQpKGZpcnN0VmFsdWUsIHNlY29uZFZhbHVlLCB0aGlyZFZhbHVlKSA6IFwicmdiYShcIiArIGZpcnN0VmFsdWUgKyBcIixcIiArIHNlY29uZFZhbHVlICsgXCIsXCIgKyB0aGlyZFZhbHVlICsgXCIsXCIgKyBmb3VydGhWYWx1ZSArIFwiKVwiO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBmaXJzdFZhbHVlID09PSAnb2JqZWN0JyAmJiBzZWNvbmRWYWx1ZSA9PT0gdW5kZWZpbmVkICYmIHRoaXJkVmFsdWUgPT09IHVuZGVmaW5lZCAmJiBmb3VydGhWYWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIGZpcnN0VmFsdWUuYWxwaGEgPj0gMSA/ICgwLCBfcmdiLmRlZmF1bHQpKGZpcnN0VmFsdWUucmVkLCBmaXJzdFZhbHVlLmdyZWVuLCBmaXJzdFZhbHVlLmJsdWUpIDogXCJyZ2JhKFwiICsgZmlyc3RWYWx1ZS5yZWQgKyBcIixcIiArIGZpcnN0VmFsdWUuZ3JlZW4gKyBcIixcIiArIGZpcnN0VmFsdWUuYmx1ZSArIFwiLFwiICsgZmlyc3RWYWx1ZS5hbHBoYSArIFwiKVwiO1xuICB9XG5cbiAgdGhyb3cgbmV3IF9lcnJvcnMuZGVmYXVsdCg3KTtcbn1cblxudmFyIF9kZWZhdWx0ID0gcmdiYTtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBfaHNsID1cbi8qI19fUFVSRV9fKi9cbl9pbnRlcm9wUmVxdWlyZURlZmF1bHQoXG4vKiNfX1BVUkVfXyovXG5yZXF1aXJlKFwiLi9oc2xcIikpO1xuXG52YXIgX2hzbGEgPVxuLyojX19QVVJFX18qL1xuX2ludGVyb3BSZXF1aXJlRGVmYXVsdChcbi8qI19fUFVSRV9fKi9cbnJlcXVpcmUoXCIuL2hzbGFcIikpO1xuXG52YXIgX3JnYiA9XG4vKiNfX1BVUkVfXyovXG5faW50ZXJvcFJlcXVpcmVEZWZhdWx0KFxuLyojX19QVVJFX18qL1xucmVxdWlyZShcIi4vcmdiXCIpKTtcblxudmFyIF9yZ2JhID1cbi8qI19fUFVSRV9fKi9cbl9pbnRlcm9wUmVxdWlyZURlZmF1bHQoXG4vKiNfX1BVUkVfXyovXG5yZXF1aXJlKFwiLi9yZ2JhXCIpKTtcblxudmFyIF9lcnJvcnMgPVxuLyojX19QVVJFX18qL1xuX2ludGVyb3BSZXF1aXJlRGVmYXVsdChcbi8qI19fUFVSRV9fKi9cbnJlcXVpcmUoXCIuLi9pbnRlcm5hbEhlbHBlcnMvX2Vycm9yc1wiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBpc1JnYiA9IGZ1bmN0aW9uIGlzUmdiKGNvbG9yKSB7XG4gIHJldHVybiB0eXBlb2YgY29sb3IucmVkID09PSAnbnVtYmVyJyAmJiB0eXBlb2YgY29sb3IuZ3JlZW4gPT09ICdudW1iZXInICYmIHR5cGVvZiBjb2xvci5ibHVlID09PSAnbnVtYmVyJyAmJiAodHlwZW9mIGNvbG9yLmFscGhhICE9PSAnbnVtYmVyJyB8fCB0eXBlb2YgY29sb3IuYWxwaGEgPT09ICd1bmRlZmluZWQnKTtcbn07XG5cbnZhciBpc1JnYmEgPSBmdW5jdGlvbiBpc1JnYmEoY29sb3IpIHtcbiAgcmV0dXJuIHR5cGVvZiBjb2xvci5yZWQgPT09ICdudW1iZXInICYmIHR5cGVvZiBjb2xvci5ncmVlbiA9PT0gJ251bWJlcicgJiYgdHlwZW9mIGNvbG9yLmJsdWUgPT09ICdudW1iZXInICYmIHR5cGVvZiBjb2xvci5hbHBoYSA9PT0gJ251bWJlcic7XG59O1xuXG52YXIgaXNIc2wgPSBmdW5jdGlvbiBpc0hzbChjb2xvcikge1xuICByZXR1cm4gdHlwZW9mIGNvbG9yLmh1ZSA9PT0gJ251bWJlcicgJiYgdHlwZW9mIGNvbG9yLnNhdHVyYXRpb24gPT09ICdudW1iZXInICYmIHR5cGVvZiBjb2xvci5saWdodG5lc3MgPT09ICdudW1iZXInICYmICh0eXBlb2YgY29sb3IuYWxwaGEgIT09ICdudW1iZXInIHx8IHR5cGVvZiBjb2xvci5hbHBoYSA9PT0gJ3VuZGVmaW5lZCcpO1xufTtcblxudmFyIGlzSHNsYSA9IGZ1bmN0aW9uIGlzSHNsYShjb2xvcikge1xuICByZXR1cm4gdHlwZW9mIGNvbG9yLmh1ZSA9PT0gJ251bWJlcicgJiYgdHlwZW9mIGNvbG9yLnNhdHVyYXRpb24gPT09ICdudW1iZXInICYmIHR5cGVvZiBjb2xvci5saWdodG5lc3MgPT09ICdudW1iZXInICYmIHR5cGVvZiBjb2xvci5hbHBoYSA9PT0gJ251bWJlcic7XG59O1xuLyoqXG4gKiBDb252ZXJ0cyBhIFJnYkNvbG9yLCBSZ2JhQ29sb3IsIEhzbENvbG9yIG9yIEhzbGFDb2xvciBvYmplY3QgdG8gYSBjb2xvciBzdHJpbmcuXG4gKiBUaGlzIHV0aWwgaXMgdXNlZnVsIGluIGNhc2UgeW91IG9ubHkga25vdyBvbiBydW50aW1lIHdoaWNoIGNvbG9yIG9iamVjdCBpc1xuICogdXNlZC4gT3RoZXJ3aXNlIHdlIHJlY29tbWVuZCB0byByZWx5IG9uIGByZ2JgLCBgcmdiYWAsIGBoc2xgIG9yIGBoc2xhYC5cbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gU3R5bGVzIGFzIG9iamVjdCB1c2FnZVxuICogY29uc3Qgc3R5bGVzID0ge1xuICogICBiYWNrZ3JvdW5kOiB0b0NvbG9yU3RyaW5nKHsgcmVkOiAyNTUsIGdyZWVuOiAyMDUsIGJsdWU6IDEwMCB9KSxcbiAqICAgYmFja2dyb3VuZDogdG9Db2xvclN0cmluZyh7IHJlZDogMjU1LCBncmVlbjogMjA1LCBibHVlOiAxMDAsIGFscGhhOiAwLjcyIH0pLFxuICogICBiYWNrZ3JvdW5kOiB0b0NvbG9yU3RyaW5nKHsgaHVlOiAyNDAsIHNhdHVyYXRpb246IDEsIGxpZ2h0bmVzczogMC41IH0pLFxuICogICBiYWNrZ3JvdW5kOiB0b0NvbG9yU3RyaW5nKHsgaHVlOiAzNjAsIHNhdHVyYXRpb246IDAuNzUsIGxpZ2h0bmVzczogMC40LCBhbHBoYTogMC43MiB9KSxcbiAqIH1cbiAqXG4gKiAvLyBzdHlsZWQtY29tcG9uZW50cyB1c2FnZVxuICogY29uc3QgZGl2ID0gc3R5bGVkLmRpdmBcbiAqICAgYmFja2dyb3VuZDogJHt0b0NvbG9yU3RyaW5nKHsgcmVkOiAyNTUsIGdyZWVuOiAyMDUsIGJsdWU6IDEwMCB9KX07XG4gKiAgIGJhY2tncm91bmQ6ICR7dG9Db2xvclN0cmluZyh7IHJlZDogMjU1LCBncmVlbjogMjA1LCBibHVlOiAxMDAsIGFscGhhOiAwLjcyIH0pfTtcbiAqICAgYmFja2dyb3VuZDogJHt0b0NvbG9yU3RyaW5nKHsgaHVlOiAyNDAsIHNhdHVyYXRpb246IDEsIGxpZ2h0bmVzczogMC41IH0pfTtcbiAqICAgYmFja2dyb3VuZDogJHt0b0NvbG9yU3RyaW5nKHsgaHVlOiAzNjAsIHNhdHVyYXRpb246IDAuNzUsIGxpZ2h0bmVzczogMC40LCBhbHBoYTogMC43MiB9KX07XG4gKiBgXG4gKlxuICogLy8gQ1NTIGluIEpTIE91dHB1dFxuICogZWxlbWVudCB7XG4gKiAgIGJhY2tncm91bmQ6IFwiI2ZmY2Q2NFwiO1xuICogICBiYWNrZ3JvdW5kOiBcInJnYmEoMjU1LDIwNSwxMDAsMC43MilcIjtcbiAqICAgYmFja2dyb3VuZDogXCIjMDBmXCI7XG4gKiAgIGJhY2tncm91bmQ6IFwicmdiYSgxNzksMjUsMjUsMC43MilcIjtcbiAqIH1cbiAqL1xuXG5cbmZ1bmN0aW9uIHRvQ29sb3JTdHJpbmcoY29sb3IpIHtcbiAgaWYgKHR5cGVvZiBjb2xvciAhPT0gJ29iamVjdCcpIHRocm93IG5ldyBfZXJyb3JzLmRlZmF1bHQoOCk7XG4gIGlmIChpc1JnYmEoY29sb3IpKSByZXR1cm4gKDAsIF9yZ2JhLmRlZmF1bHQpKGNvbG9yKTtcbiAgaWYgKGlzUmdiKGNvbG9yKSkgcmV0dXJuICgwLCBfcmdiLmRlZmF1bHQpKGNvbG9yKTtcbiAgaWYgKGlzSHNsYShjb2xvcikpIHJldHVybiAoMCwgX2hzbGEuZGVmYXVsdCkoY29sb3IpO1xuICBpZiAoaXNIc2woY29sb3IpKSByZXR1cm4gKDAsIF9oc2wuZGVmYXVsdCkoY29sb3IpO1xuICB0aHJvdyBuZXcgX2Vycm9ycy5kZWZhdWx0KDgpO1xufVxuXG52YXIgX2RlZmF1bHQgPSB0b0NvbG9yU3RyaW5nO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIF9jdXJyeSA9XG4vKiNfX1BVUkVfXyovXG5faW50ZXJvcFJlcXVpcmVEZWZhdWx0KFxuLyojX19QVVJFX18qL1xucmVxdWlyZShcIi4uL2ludGVybmFsSGVscGVycy9fY3VycnlcIikpO1xuXG52YXIgX2d1YXJkID1cbi8qI19fUFVSRV9fKi9cbl9pbnRlcm9wUmVxdWlyZURlZmF1bHQoXG4vKiNfX1BVUkVfXyovXG5yZXF1aXJlKFwiLi4vaW50ZXJuYWxIZWxwZXJzL19ndWFyZFwiKSk7XG5cbnZhciBfcGFyc2VUb0hzbCA9XG4vKiNfX1BVUkVfXyovXG5faW50ZXJvcFJlcXVpcmVEZWZhdWx0KFxuLyojX19QVVJFX18qL1xucmVxdWlyZShcIi4vcGFyc2VUb0hzbFwiKSk7XG5cbnZhciBfdG9Db2xvclN0cmluZyA9XG4vKiNfX1BVUkVfXyovXG5faW50ZXJvcFJlcXVpcmVEZWZhdWx0KFxuLyojX19QVVJFX18qL1xucmVxdWlyZShcIi4vdG9Db2xvclN0cmluZ1wiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9leHRlbmRzKCkgeyBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07IHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9XG5cbi8qKlxuICogUmV0dXJucyBhIHN0cmluZyB2YWx1ZSBmb3IgdGhlIGRhcmtlbmVkIGNvbG9yLlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBTdHlsZXMgYXMgb2JqZWN0IHVzYWdlXG4gKiBjb25zdCBzdHlsZXMgPSB7XG4gKiAgIGJhY2tncm91bmQ6IGRhcmtlbigwLjIsICcjRkZDRDY0JyksXG4gKiAgIGJhY2tncm91bmQ6IGRhcmtlbignMC4yJywgJ3JnYmEoMjU1LDIwNSwxMDAsMC43KScpLFxuICogfVxuICpcbiAqIC8vIHN0eWxlZC1jb21wb25lbnRzIHVzYWdlXG4gKiBjb25zdCBkaXYgPSBzdHlsZWQuZGl2YFxuICogICBiYWNrZ3JvdW5kOiAke2RhcmtlbigwLjIsICcjRkZDRDY0Jyl9O1xuICogICBiYWNrZ3JvdW5kOiAke2RhcmtlbignMC4yJywgJ3JnYmEoMjU1LDIwNSwxMDAsMC43KScpfTtcbiAqIGBcbiAqXG4gKiAvLyBDU1MgaW4gSlMgT3V0cHV0XG4gKlxuICogZWxlbWVudCB7XG4gKiAgIGJhY2tncm91bmQ6IFwiI2ZmYmQzMVwiO1xuICogICBiYWNrZ3JvdW5kOiBcInJnYmEoMjU1LDE4OSw0OSwwLjcpXCI7XG4gKiB9XG4gKi9cbmZ1bmN0aW9uIGRhcmtlbihhbW91bnQsIGNvbG9yKSB7XG4gIGlmIChjb2xvciA9PT0gJ3RyYW5zcGFyZW50JykgcmV0dXJuIGNvbG9yO1xuICB2YXIgaHNsQ29sb3IgPSAoMCwgX3BhcnNlVG9Ic2wuZGVmYXVsdCkoY29sb3IpO1xuICByZXR1cm4gKDAsIF90b0NvbG9yU3RyaW5nLmRlZmF1bHQpKF9leHRlbmRzKHt9LCBoc2xDb2xvciwge1xuICAgIGxpZ2h0bmVzczogKDAsIF9ndWFyZC5kZWZhdWx0KSgwLCAxLCBoc2xDb2xvci5saWdodG5lc3MgLSBwYXJzZUZsb2F0KGFtb3VudCkpXG4gIH0pKTtcbn0gLy8gcHJldHRpZXItaWdub3JlXG5cblxudmFyIGN1cnJpZWREYXJrZW4gPVxuLyojX19QVVJFX18qL1xuKDAsIF9jdXJyeS5kZWZhdWx0XG4vKiA6OjxudW1iZXIgfCBzdHJpbmcsIHN0cmluZywgc3RyaW5nPiAqL1xuKShkYXJrZW4pO1xudmFyIF9kZWZhdWx0ID0gY3VycmllZERhcmtlbjtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBfcGFyc2VUb1JnYiA9XG4vKiNfX1BVUkVfXyovXG5faW50ZXJvcFJlcXVpcmVEZWZhdWx0KFxuLyojX19QVVJFX18qL1xucmVxdWlyZShcIi4vcGFyc2VUb1JnYlwiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbi8qKlxuICogUmV0dXJucyBhIG51bWJlciAoZmxvYXQpIHJlcHJlc2VudGluZyB0aGUgbHVtaW5hbmNlIG9mIGEgY29sb3IuXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFN0eWxlcyBhcyBvYmplY3QgdXNhZ2VcbiAqIGNvbnN0IHN0eWxlcyA9IHtcbiAqICAgYmFja2dyb3VuZDogZ2V0THVtaW5hbmNlKCcjQ0NDRDY0JykgPj0gZ2V0THVtaW5hbmNlKCcjMDAwMGZmJykgPyAnI0NDQ0Q2NCcgOiAnIzAwMDBmZicsXG4gKiAgIGJhY2tncm91bmQ6IGdldEx1bWluYW5jZSgncmdiYSg1OCwgMTMzLCAyNTUsIDEpJykgPj0gZ2V0THVtaW5hbmNlKCdyZ2JhKDI1NSwgNTcsIDE0OSwgMSknKSA/XG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3JnYmEoNTgsIDEzMywgMjU1LCAxKScgOlxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICdyZ2JhKDI1NSwgNTcsIDE0OSwgMSknLFxuICogfVxuICpcbiAqIC8vIHN0eWxlZC1jb21wb25lbnRzIHVzYWdlXG4gKiBjb25zdCBkaXYgPSBzdHlsZWQuZGl2YFxuICogICBiYWNrZ3JvdW5kOiAke2dldEx1bWluYW5jZSgnI0NDQ0Q2NCcpID49IGdldEx1bWluYW5jZSgnIzAwMDBmZicpID8gJyNDQ0NENjQnIDogJyMwMDAwZmYnfTtcbiAqICAgYmFja2dyb3VuZDogJHtnZXRMdW1pbmFuY2UoJ3JnYmEoNTgsIDEzMywgMjU1LCAxKScpID49IGdldEx1bWluYW5jZSgncmdiYSgyNTUsIDU3LCAxNDksIDEpJykgP1xuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICdyZ2JhKDU4LCAxMzMsIDI1NSwgMSknIDpcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAncmdiYSgyNTUsIDU3LCAxNDksIDEpJ307XG4gKlxuICogLy8gQ1NTIGluIEpTIE91dHB1dFxuICpcbiAqIGRpdiB7XG4gKiAgIGJhY2tncm91bmQ6IFwiI0NDQ0Q2NFwiO1xuICogICBiYWNrZ3JvdW5kOiBcInJnYmEoNTgsIDEzMywgMjU1LCAxKVwiO1xuICogfVxuICovXG5mdW5jdGlvbiBnZXRMdW1pbmFuY2UoY29sb3IpIHtcbiAgaWYgKGNvbG9yID09PSAndHJhbnNwYXJlbnQnKSByZXR1cm4gMDtcbiAgdmFyIHJnYkNvbG9yID0gKDAsIF9wYXJzZVRvUmdiLmRlZmF1bHQpKGNvbG9yKTtcblxuICB2YXIgX09iamVjdCRrZXlzJG1hcCA9IE9iamVjdC5rZXlzKHJnYkNvbG9yKS5tYXAoZnVuY3Rpb24gKGtleSkge1xuICAgIHZhciBjaGFubmVsID0gcmdiQ29sb3Jba2V5XSAvIDI1NTtcbiAgICByZXR1cm4gY2hhbm5lbCA8PSAwLjAzOTI4ID8gY2hhbm5lbCAvIDEyLjkyIDogTWF0aC5wb3coKGNoYW5uZWwgKyAwLjA1NSkgLyAxLjA1NSwgMi40KTtcbiAgfSksXG4gICAgICByID0gX09iamVjdCRrZXlzJG1hcFswXSxcbiAgICAgIGcgPSBfT2JqZWN0JGtleXMkbWFwWzFdLFxuICAgICAgYiA9IF9PYmplY3Qka2V5cyRtYXBbMl07XG5cbiAgcmV0dXJuIHBhcnNlRmxvYXQoKDAuMjEyNiAqIHIgKyAwLjcxNTIgKiBnICsgMC4wNzIyICogYikudG9GaXhlZCgzKSk7XG59XG5cbnZhciBfZGVmYXVsdCA9IGdldEx1bWluYW5jZTtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7IiwiaW1wb3J0IGdldEx1bWluYW5jZSBmcm9tICdwb2xpc2hlZC9saWIvY29sb3IvZ2V0THVtaW5hbmNlJztcbmltcG9ydCB7IFRoZW1lVHlwZSB9IGZyb20gJy4uL3R5cGVzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZmluZENvbG9ySW52ZXJ0KHsgYmxhY2ssIHdoaXRlIH06IFRoZW1lVHlwZSwgY29sb3I6IHN0cmluZykge1xuICBpZiAoIWNvbG9yIHx8IGdldEx1bWluYW5jZShjb2xvcikgPiAwLjU1KSB7XG4gICAgcmV0dXJuIGJsYWNrO1xuICB9XG4gIHJldHVybiB3aGl0ZTtcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX2N1cnJ5ID1cbi8qI19fUFVSRV9fKi9cbl9pbnRlcm9wUmVxdWlyZURlZmF1bHQoXG4vKiNfX1BVUkVfXyovXG5yZXF1aXJlKFwiLi4vaW50ZXJuYWxIZWxwZXJzL19jdXJyeVwiKSk7XG5cbnZhciBfZ3VhcmQgPVxuLyojX19QVVJFX18qL1xuX2ludGVyb3BSZXF1aXJlRGVmYXVsdChcbi8qI19fUFVSRV9fKi9cbnJlcXVpcmUoXCIuLi9pbnRlcm5hbEhlbHBlcnMvX2d1YXJkXCIpKTtcblxudmFyIF9yZ2JhID1cbi8qI19fUFVSRV9fKi9cbl9pbnRlcm9wUmVxdWlyZURlZmF1bHQoXG4vKiNfX1BVUkVfXyovXG5yZXF1aXJlKFwiLi9yZ2JhXCIpKTtcblxudmFyIF9wYXJzZVRvUmdiID1cbi8qI19fUFVSRV9fKi9cbl9pbnRlcm9wUmVxdWlyZURlZmF1bHQoXG4vKiNfX1BVUkVfXyovXG5yZXF1aXJlKFwiLi9wYXJzZVRvUmdiXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2V4dGVuZHMoKSB7IF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTsgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH1cblxuLyoqXG4gKiBEZWNyZWFzZXMgdGhlIG9wYWNpdHkgb2YgYSBjb2xvci4gSXRzIHJhbmdlIGZvciB0aGUgYW1vdW50IGlzIGJldHdlZW4gMCB0byAxLlxuICpcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gU3R5bGVzIGFzIG9iamVjdCB1c2FnZVxuICogY29uc3Qgc3R5bGVzID0ge1xuICogICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudGl6ZSgwLjEsICcjZmZmJyk7XG4gKiAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50aXplKDAuMiwgJ2hzbCgwLCAwJSwgMTAwJSknKSxcbiAqICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnRpemUoJzAuNScsICdyZ2JhKDI1NSwgMCwgMCwgMC44KScpLFxuICogfVxuICpcbiAqIC8vIHN0eWxlZC1jb21wb25lbnRzIHVzYWdlXG4gKiBjb25zdCBkaXYgPSBzdHlsZWQuZGl2YFxuICogICBiYWNrZ3JvdW5kOiAke3RyYW5zcGFyZW50aXplKDAuMSwgJyNmZmYnKX07XG4gKiAgIGJhY2tncm91bmQ6ICR7dHJhbnNwYXJlbnRpemUoMC4yLCAnaHNsKDAsIDAlLCAxMDAlKScpfSxcbiAqICAgYmFja2dyb3VuZDogJHt0cmFuc3BhcmVudGl6ZSgnMC41JywgJ3JnYmEoMjU1LCAwLCAwLCAwLjgpJyl9LFxuICogYFxuICpcbiAqIC8vIENTUyBpbiBKUyBPdXRwdXRcbiAqXG4gKiBlbGVtZW50IHtcbiAqICAgYmFja2dyb3VuZDogXCJyZ2JhKDI1NSwyNTUsMjU1LDAuOSlcIjtcbiAqICAgYmFja2dyb3VuZDogXCJyZ2JhKDI1NSwyNTUsMjU1LDAuOClcIjtcbiAqICAgYmFja2dyb3VuZDogXCJyZ2JhKDI1NSwwLDAsMC4zKVwiO1xuICogfVxuICovXG5mdW5jdGlvbiB0cmFuc3BhcmVudGl6ZShhbW91bnQsIGNvbG9yKSB7XG4gIGlmIChjb2xvciA9PT0gJ3RyYW5zcGFyZW50JykgcmV0dXJuIGNvbG9yO1xuICB2YXIgcGFyc2VkQ29sb3IgPSAoMCwgX3BhcnNlVG9SZ2IuZGVmYXVsdCkoY29sb3IpO1xuICB2YXIgYWxwaGEgPSB0eXBlb2YgcGFyc2VkQ29sb3IuYWxwaGEgPT09ICdudW1iZXInID8gcGFyc2VkQ29sb3IuYWxwaGEgOiAxO1xuXG4gIHZhciBjb2xvcldpdGhBbHBoYSA9IF9leHRlbmRzKHt9LCBwYXJzZWRDb2xvciwge1xuICAgIGFscGhhOiAoMCwgX2d1YXJkLmRlZmF1bHQpKDAsIDEsIChhbHBoYSAqIDEwMCAtIHBhcnNlRmxvYXQoYW1vdW50KSAqIDEwMCkgLyAxMDApXG4gIH0pO1xuXG4gIHJldHVybiAoMCwgX3JnYmEuZGVmYXVsdCkoY29sb3JXaXRoQWxwaGEpO1xufSAvLyBwcmV0dGllci1pZ25vcmVcblxuXG52YXIgY3VycmllZFRyYW5zcGFyZW50aXplID1cbi8qI19fUFVSRV9fKi9cbigwLCBfY3VycnkuZGVmYXVsdFxuLyogOjo8bnVtYmVyIHwgc3RyaW5nLCBzdHJpbmcsIHN0cmluZz4gKi9cbikodHJhbnNwYXJlbnRpemUpO1xudmFyIF9kZWZhdWx0ID0gY3VycmllZFRyYW5zcGFyZW50aXplO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDsiLCJpbXBvcnQgeyBjc3MgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgdHJhbnNwYXJlbnRpemUgZnJvbSAncG9saXNoZWQvbGliL2NvbG9yL3RyYW5zcGFyZW50aXplJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYm94U2hhZG93KHNpemU6IHN0cmluZywgY29sb3I6IHN0cmluZywgYW1vdW50PzogbnVtYmVyKSB7XG4gIGNvbnN0IHNoYWRvd0NvbG9yID0gYW1vdW50ID8gdHJhbnNwYXJlbnRpemUoYW1vdW50LCBjb2xvcikgOiBjb2xvcjtcbiAgcmV0dXJuIGNzc2Bib3gtc2hhZG93OiAwIDAgMCAke3NpemV9ICR7c2hhZG93Q29sb3J9O2A7XG59XG4iLCJpbXBvcnQgeyBTaXplVHlwZSB9IGZyb20gJy4uL3R5cGVzJztcblxudHlwZSBTaXplUHJvcHNOYW1lVHlwZSA9ICdmb250LXNpemUnIHwgJ2hlaWdodCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNldFNpemUobmFtZTogU2l6ZVByb3BzTmFtZVR5cGUsIHNpemU/OiBTaXplVHlwZSkge1xuICBzd2l0Y2ggKHNpemUpIHtcbiAgICBjYXNlICdzbWFsbCc6XG4gICAgICByZXR1cm4gYCR7bmFtZX06IDAuNzVyZW07YDtcbiAgICBjYXNlICdtZWRpdW0nOlxuICAgICAgcmV0dXJuIGAke25hbWV9OiAxLjI1cmVtO2A7XG4gICAgY2FzZSAnbGFyZ2UnOlxuICAgICAgcmV0dXJuIGAke25hbWV9OiAxLjVyZW07YDtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGAke25hbWV9OiAxcmVtO2A7XG4gIH1cbn1cbiIsImltcG9ydCB7IGNzcyB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB0cmFuc3BhcmVudGl6ZSBmcm9tICdwb2xpc2hlZC9saWIvY29sb3IvdHJhbnNwYXJlbnRpemUnO1xuaW1wb3J0IHsgVGhlbWVUeXBlLCBDU1NUeXBlIH0gZnJvbSAnLi4vdHlwZXMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkaXNhYmxlZENvbG9yKHRoZW1lOiBUaGVtZVR5cGUpOiBDU1NUeXBlIHtcbiAgY29uc3QgdGV4dENvbG9yID0gdHJhbnNwYXJlbnRpemUoMC4xNSwgdGhlbWUudGV4dERhcmspO1xuICBjb25zdCBiYWNrQ29sb3IgPSB0cmFuc3BhcmVudGl6ZSgwLjU1LCB0aGVtZS5ib3JkZXIpO1xuICByZXR1cm4gY3NzYFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgY29sb3I6ICR7dGV4dENvbG9yfTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke2JhY2tDb2xvcn07XG4gIGA7XG59XG4iLCJpbXBvcnQgc3R5bGVkLCB7IGNzcyB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7IEhUTUxBdHRyaWJ1dGVzIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGRhcmtlbiBmcm9tICdwb2xpc2hlZC9saWIvY29sb3IvZGFya2VuJztcbmltcG9ydCBmaW5kQ29sb3JJbnZlcnQgZnJvbSAnLi4vLi4vdXRpbHMvZmluZENvbG9ySW52ZXJ0JztcbmltcG9ydCBib3hTaGFkb3cgZnJvbSAnLi4vLi4vdXRpbHMvYm94U2hhZG93JztcbmltcG9ydCBzZXRTaXplIGZyb20gJy4uLy4uL3V0aWxzL3NldFNpemUnO1xuaW1wb3J0IGRpc2FibGVkQ29sb3IgZnJvbSAnLi4vLi4vdXRpbHMvZGlzYWJsZWRDb2xvcic7XG5pbXBvcnQgeyBDb2xvclR5cGUsIFRoZW1lVHlwZSwgU2l6ZVR5cGUgfSBmcm9tICcuLi8uLi90eXBlcyc7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIHRoZW1lOiBUaGVtZVR5cGU7XG4gIGNvbG9yPzogQ29sb3JUeXBlO1xuICBvdXRsaW5lPzogYm9vbGVhbjtcbiAgZGlzYWJsZWQ/OiBib29sZWFuO1xufVxuXG5mdW5jdGlvbiBzZXRDb2xvcih7IHRoZW1lLCBjb2xvciwgb3V0bGluZSwgZGlzYWJsZWQgfTogUHJvcHMpIHtcbiAgaWYgKGRpc2FibGVkKSB7XG4gICAgcmV0dXJuIGRpc2FibGVkQ29sb3IodGhlbWUpO1xuICB9XG4gIGlmICghY29sb3IpIHtcbiAgICByZXR1cm4gY3NzYFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZS53aGl0ZX07XG4gICAgICBib3JkZXItY29sb3I6ICR7dGhlbWUuYm9yZGVyfTtcbiAgICAgIGNvbG9yOiAke3RoZW1lLnRleHR9O1xuXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAke3RoZW1lLmJvcmRlckhvdmVyfTtcbiAgICAgIH1cblxuICAgICAgJjphY3RpdmUge1xuICAgICAgICBib3JkZXItY29sb3I6ICR7dGhlbWUuYm9yZGVyQWN0aXZlfTtcbiAgICAgIH1cbiAgICBgO1xuICB9XG4gIGlmIChjb2xvciA9PT0gJ3RleHQnKSB7XG4gICAgcmV0dXJuIGNzc2BcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgIGNvbG9yOiAke3RoZW1lLnRleHR9O1xuXG4gICAgICAmOmhvdmVye1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgIH1cbiAgICBgO1xuICB9XG5cbiAgY29uc3QgdGFyZ2V0ID0gdGhlbWVbY29sb3JdIHx8IGNvbG9yO1xuICBjb25zdCBpbnZlcnRDb2xvciA9IGZpbmRDb2xvckludmVydCh0aGVtZSwgdGFyZ2V0KTtcbiAgaWYgKG91dGxpbmUpIHtcbiAgICByZXR1cm4gY3NzYFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICBib3JkZXItY29sb3I6ICR7dGFyZ2V0fTtcbiAgICAgIGNvbG9yOiAke3RhcmdldH07XG5cbiAgICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RhcmdldH07XG4gICAgICAgIGNvbG9yOiAke2ludmVydENvbG9yfTtcbiAgICAgIH1cblxuICAgICAgJjpmb2N1cyB7XG4gICAgICAgICR7Ym94U2hhZG93KCcwLjJyZW0nLCB0YXJnZXQsIDAuMil9XG4gICAgICB9XG4gICAgYDtcbiAgfVxuXG4gIHJldHVybiBjc3NgXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHt0YXJnZXR9O1xuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgY29sb3I6ICR7aW52ZXJ0Q29sb3J9O1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIGNvbG9yOiAke2ludmVydENvbG9yfTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7ZGFya2VuKDAuMDI1LCB0YXJnZXQpfTtcbiAgICB9XG5cbiAgICAmOmFjdGl2ZSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke2RhcmtlbigwLjA1LCB0YXJnZXQpfTtcbiAgICB9XG5cbiAgICAmOmZvY3VzIHtcbiAgICAgICR7Ym94U2hhZG93KCcwLjJyZW0nLCB0YXJnZXQsIDAuMil9XG4gICAgfVxuICBgO1xufVxuXG5pbnRlcmZhY2UgQnV0dG9uUHJvcHMgZXh0ZW5kcyBIVE1MQXR0cmlidXRlczxIVE1MQnV0dG9uRWxlbWVudD4ge1xuICAvKiog44Oc44K/44Oz44Gu6ImyICovXG4gIGNvbG9yPzogQ29sb3JUeXBlO1xuICAvKiog44Oc44K/44Oz44Gu44K144Kk44K6ICovXG4gIHNpemU/OiBTaXplVHlwZTtcbiAgLyoqIOiDjOaZr+OBjOmAj+aYjuOBquODnOOCv+ODs+OBp+OBmeOCiyAqL1xuICBvdXRsaW5lPzogYm9vbGVhbjtcbiAgLyoqIOWFqOS9k+W5heOBruODnOOCv+ODs+OBp+ioreWumiAqL1xuICBmdWxsPzogYm9vbGVhbjtcbn1cblxuY29uc3QgQnV0dG9uID0gc3R5bGVkLmJ1dHRvbjxCdXR0b25Qcm9wcz5gXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgYXBwZWFyYW5jZTogbm9uZTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBwYWRkaW5nOiAwLjM3NWVtIDAuNzVlbTtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcblxuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBiYWNrZ3JvdW5kLWNvbG9yLCBjb2xvciwgYm94LXNoYWRvdztcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMTUwbXM7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcblxuICAke3NldENvbG9yfVxuICAkeyh7IHNpemUgfSkgPT4gc2V0U2l6ZSgnZm9udC1zaXplJywgc2l6ZSl9XG4gICR7KHsgZnVsbCB9KSA9PiBmdWxsID8gJ3dpZHRoOiAxMDAlOycgOiAnJ31cbmA7XG5CdXR0b24uZGlzcGxheU5hbWUgPSAnQnV0dG9uJztcblxuZXhwb3J0IGRlZmF1bHQgQnV0dG9uO1xuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJy4nO1xuXG5jb25zdCBCdXR0b25Hcm91cCA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcblxuICAmOm5vdCg6bGFzdC1jaGlsZCkge1xuICAgIG1hcmdpbi1yaWdodDogMC41cmVtO1xuICB9XG5cbiAgJHtCdXR0b259IHtcbiAgICBtYXJnaW46IDA7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcblxuICAgICY6Zmlyc3QtY2hpbGQge1xuICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNHB4O1xuICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNHB4O1xuICAgIH1cblxuICAgICY6bm90KDpmaXJzdC1jaGlsZCkge1xuICAgICAgbWFyZ2luLWxlZnQ6IC0xcHg7XG4gICAgfVxuXG4gICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA0cHg7XG4gICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNHB4O1xuICAgIH1cbiAgfVxuYDtcbkJ1dHRvbkdyb3VwLmRpc3BsYXlOYW1lID0gJ0J1dHRvbkdyb3VwJztcblxuZXhwb3J0IGRlZmF1bHQgQnV0dG9uR3JvdXA7XG4iLCJpbXBvcnQgc3R5bGVkLCB7IGNzcyB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7IFNpemVUeXBlIH0gZnJvbSAnLi4vLi4vdHlwZXMnO1xuXG5jb25zdCBzdHJpcGVkU3R5bGUgPSBjc3NgXG4gIHRib2R5ID4gdHI6bnRoLWNoaWxkKG9kZCkge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4wMik7XG4gIH1cbmA7XG5cbmNvbnN0IGhvdmVyU3R5bGUgPSBjc3NgXG4gIHRib2R5ID4gdHI6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4wNCk7XG4gIH1cbmA7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIHNpemU/OiBTaXplVHlwZTtcbiAgZnVsbD86IGJvb2xlYW47XG4gIGhlYWRlclN0eWxlPzogYW55O1xuICBib3JkZXJlZD86IGJvb2xlYW47XG4gIGJvcmRlcmxlc3M/OiBib29sZWFuO1xuICBzdHJpcGVkPzogYm9vbGVhbjtcbiAgaG92ZXI/OiBib29sZWFuO1xufVxuXG5jb25zdCBUYWJsZSA9IHN0eWxlZC50YWJsZTxQcm9wcz5gXG4gIGRpc3BsYXk6IGJsb2NrO1xuICAkeyh7IGZ1bGwgfSkgPT4gZnVsbCA/IGNzc2B3aWR0aDogMTAwJTtgIDogJyd9XG4gIG1heC13aWR0aDogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG5cbiAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xuICAtbXMtb3ZlcmZsb3ctc3R5bGU6IC1tcy1hdXRvaGlkaW5nLXNjcm9sbGJhcjtcblxuICB0ZCwgdGgge1xuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgcGFkZGluZzogMC43NXJlbTtcbiAgICAkeyh7IHRoZW1lLCBib3JkZXJlZCB9KSA9PiBib3JkZXJlZCA/IGNzc2BcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICR7dGhlbWUuYm9yZGVyfTtcbiAgICBgIDogJyd9XG4gICAgYm9yZGVyLXdpZHRoOiAwIDAgMXB4O1xuICB9XG5cbiAgdGggeyB3aGl0ZS1zcGFjZTogbm93cmFwOyB9XG5cbiAgJHsoeyBzdHJpcGVkIH0pID0+IHN0cmlwZWQgPyBzdHJpcGVkU3R5bGUgOiAnJ31cbiAgJHsoeyBob3ZlciB9KSA9PiBob3ZlciA/IGhvdmVyU3R5bGUgOiAnJ31cblxuICAkeyh7IGhlYWRlclN0eWxlIH0pID0+IGhlYWRlclN0eWxlID8gY3NzYFxuICAgIHRoIHtcbiAgICAgICR7aGVhZGVyU3R5bGV9XG4gICAgfVxuICBgIDogJyd9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBUYWJsZTtcbiIsImltcG9ydCB7IEhUTUxBdHRyaWJ1dGVzIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCwgeyBjc3MgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgZmluZENvbG9ySW52ZXJ0IGZyb20gJy4uLy4uL3V0aWxzL2ZpbmRDb2xvckludmVydCc7XG5pbXBvcnQgeyBDb2xvclR5cGUgfSBmcm9tICcuLi8uLi90eXBlcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJvcHMgZXh0ZW5kcyBIVE1MQXR0cmlidXRlczxIVE1MRGl2RWxlbWVudD4ge1xuICAvKiog6Imy5oyH5a6aICovXG4gIGNvbG9yPzogQ29sb3JUeXBlO1xuICAvKiogYm9yZGVy44KS6Z2e6KGo56S644GZ44KLICovXG4gIGJvcmRlcmxlc3M/OiBib29sZWFuO1xuICBzdHlsZT86IGFueTtcbn1cblxuZnVuY3Rpb24gc2V0Q29sb3IoeyBjb2xvciwgdGhlbWUgfTogYW55KSB7XG4gIGlmICghY29sb3IpIHJldHVybiB7fTtcblxuICBjb25zdCB0YXJnZXQgPSB0aGVtZVtjb2xvcl0gfHwgY29sb3I7XG4gIGNvbnN0IGludmVydENvbG9yID0gZmluZENvbG9ySW52ZXJ0KHRoZW1lLCB0YXJnZXQpO1xuICByZXR1cm4gY3NzYGJhY2tncm91bmQtY29sb3I6ICR7dGFyZ2V0fTsgY29sb3I6ICR7aW52ZXJ0Q29sb3J9O2A7XG59XG5cbmNvbnN0IEJveCA9IHN0eWxlZC5kaXY8UHJvcHM+YFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICR7KHsgYm9yZGVybGVzcywgdGhlbWUgfSkgPT4gYm9yZGVybGVzcyA/IGBgIDogYGJvcmRlcjogMXB4IHNvbGlkICR7dGhlbWUuYm9yZGVyfTtgfVxuICBib3gtc2hhZG93OiAwIDFweCAycHggMCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIHdpZHRoOiAxMDAlO1xuXG4gIG1pbi13aWR0aDogMDtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xuXG4gICR7c2V0Q29sb3J9XG5gO1xuQm94LmRpc3BsYXlOYW1lID0gJ0JveCc7XG5cbmV4cG9ydCBkZWZhdWx0IEJveDtcbiIsImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50LCBIVE1MQXR0cmlidXRlcyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHNldFNpemUgZnJvbSAnLi4vLi4vdXRpbHMvc2V0U2l6ZSc7XG5pbXBvcnQgeyBDb2xvclR5cGUsIFNpemVUeXBlLCBDU1NUeXBlIH0gZnJvbSAnLi4vLi4vdHlwZXMnO1xuXG5pbnRlcmZhY2UgUHJvZ3Jlc3NQcm9wcyBleHRlbmRzIEhUTUxBdHRyaWJ1dGVzPEhUTUxEaXZFbGVtZW50PntcbiAgLyoqIOePvueKtuOBrumAsuaNlyAqL1xuICB2YWx1ZTogbnVtYmVyO1xuICAvKiog6YCy5o2X44Gu5pyA5aSn5YCkICovXG4gIG1heDogbnVtYmVyO1xuICAvKiog44OQ44O844Gu44K144Kk44K6ICovXG4gIHNpemU/OiBTaXplVHlwZTtcbiAgLyoqIHNpemXjgpLkvb/jgo/jgarjgYTjgajjgY3jga7nuKbluYXjgpLmjIflrprjgZnjgosgKi9cbiAgaGVpZ2h0Pzogc3RyaW5nO1xuICAvKiog44OQ44O844Gu6ImyICovXG4gIGNvbG9yPzogQ29sb3JUeXBlO1xuICAvKiog44Kr44K544K/44OgQ1NT5a6a576pICovXG4gIGNzcz86IENTU1R5cGU7XG59XG5cbmNvbnN0IFdyYXBwZXIgPSBzdHlsZWQuZGl2PFByb2dyZXNzUHJvcHM+YFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmJhY2tncm91bmR9O1xuXG4gICR7KHsgc2l6ZSB9KSA9PiBzZXRTaXplKCdoZWlnaHQnLCBzaXplKX1cbiAgJHsoeyBzaXplLCBoZWlnaHQgfSkgPT4gIXNpemUgJiYgaGVpZ2h0ID8gYGhlaWdodDogJHtoZWlnaHR9O2AgOiAnJ31cblxuICAmID4gZGl2W3JvbGU9XCJwcm9ncmVzc2JhclwiXSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgJHsoeyB2YWx1ZSwgbWF4IH0pID0+ICh2YWx1ZSA9PT0gbWF4KSA/ICcnIDogJ2JvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwOyBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDsnfVxuICAgIGJhY2tncm91bmQtY29sb3I6ICR7KHsgY29sb3IsIHRoZW1lIH0pID0+ICh0aGVtZVtjb2xvciFdIHx8IGNvbG9yKX07XG5cbiAgICB3aWxsLWNoYW5nZTogd2lkdGg7XG5cbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiB3aWR0aDtcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAzNTBtcztcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpO1xuICAgIHotaW5kZXg6IDE7XG4gIH1cbiAgJHsoeyBjc3MgfSkgPT4gKGNzcyB8fCAnJyl9XG5gO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2dyZXNzIGV4dGVuZHMgUHVyZUNvbXBvbmVudDxQcm9ncmVzc1Byb3BzPiB7XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgY29sb3I6ICdwcmltYXJ5JyxcbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgY29uc3QgeyB2YWx1ZSwgbWF4IH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHBlcmNlbnQgPSBNYXRoLnJvdW5kKCh2YWx1ZS9tYXgpICogMTAwKTtcbiAgICByZXR1cm4gKFxuICAgICAgPFdyYXBwZXIgey4uLnRoaXMucHJvcHN9PlxuICAgICAgICA8ZGl2IHJvbGU9XCJwcm9ncmVzc2JhclwiIHN0eWxlPXt7IHdpZHRoOiBgJHtwZXJjZW50ID4gMTAwID8gMTAwIDogcGVyY2VudH0lYCB9fSA+PC9kaXY+XG4gICAgICA8L1dyYXBwZXI+XG4gICAgKTtcbiAgfVxufTtcbiIsImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50LCBSZWFjdE5vZGUsIEhUTUxBdHRyaWJ1dGVzIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCwgeyBjc3MgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgeyBDU1NUeXBlIH0gZnJvbSAnLi4vLi4vdHlwZXMnO1xuXG5jb25zdCBXcmFwcGVyID0gc3R5bGVkLmRpdjx7IHJlcXVpcmVkPzogYm9vbGVhbiwgY3NzPzogQ1NTVHlwZSB9PmBcbiAgZGlzcGxheTogYmxvY2s7XG4gICY6bm90KDpsYXN0LWNoaWxkKSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMC43NXJlbTtcbiAgfVxuICAkeyh7IHJlcXVpcmVkLCB0aGVtZSB9KSA9PiByZXF1aXJlZCA/IGNzc2BcbiAgICBsYWJlbDo6YWZ0ZXIge1xuICAgICAgY29udGVudDogJyonO1xuICAgICAgY29sb3I6ICR7dGhlbWUucHJpbWFyeX07XG4gICAgICBtYXJnaW4tbGVmdDogMC4zMjVyZW07XG4gICAgfVxuICBgIDoge319XG5cbiAgJHsoeyBjc3MgfSkgPT4gY3NzIHx8IHt9fVxuYDtcblxuY29uc3QgTGFiZWwgPSBzdHlsZWQubGFiZWxgXG4gIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnRleHRTdHJvbmd9O1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAxcmVtO1xuICBtYXJnaW4tYm90dG9tOiAwLjMyNXJlbTtcbmA7XG5cbmludGVyZmFjZSBQcm9wcyBleHRlbmRzIEhUTUxBdHRyaWJ1dGVzPEhUTUxEaXZFbGVtZW50PiB7XG4gIGxhYmVsPzogc3RyaW5nO1xuICBjaGlsZHJlbjogUmVhY3ROb2RlO1xuICByZXF1aXJlZD86IGJvb2xlYW47XG4gIGh0bWxGb3I/OiBzdHJpbmc7XG4gIGNzcz86IENTU1R5cGU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZpZWxkIGV4dGVuZHMgUHVyZUNvbXBvbmVudDxQcm9wcz4ge1xuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBsYWJlbCwgY2hpbGRyZW4sIGh0bWxGb3IsIC4uLnJlc3QgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxXcmFwcGVyIHsuLi5yZXN0fT5cbiAgICAgICAge2xhYmVsICYmICg8TGFiZWwgaHRtbEZvcj17aHRtbEZvcn0+e2xhYmVsfTwvTGFiZWw+KX1cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9XcmFwcGVyPlxuICAgICk7XG4gIH1cbn1cbiIsImltcG9ydCB7IGNzcyB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7IENTU1R5cGUgfSBmcm9tICcuLi90eXBlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbWJ1cmdlcihzaXplOiBzdHJpbmcpOiBDU1NUeXBlIHtcbiAgcmV0dXJuIGNzc2BcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgaGVpZ2h0OiAke3NpemV9O1xuICAgIHdpZHRoOiAke3NpemV9O1xuXG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHNwYW4ge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogY3VycmVudENvbG9yO1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBoZWlnaHQ6IDFweDtcbiAgICAgIGxlZnQ6IGNhbGMoNTAlIC0gOHB4KTtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcbiAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDEwMG1zO1xuICAgICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYmFja2dyb3VuZC1jb2xvciwgb3BhY2l0eSwgdHJhbnNmb3JtO1xuICAgICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xuICAgICAgd2lkdGg6IDE2cHg7XG5cbiAgICAgICY6bnRoLWNoaWxkKDEpIHtcbiAgICAgICAgdG9wOiBjYWxjKDUwJSAtIDZweCk7XG4gICAgICB9XG4gICAgICAmOm50aC1jaGlsZCgyKSB7XG4gICAgICAgIHRvcDogY2FsYyg1MCUgLSAxcHgpO1xuICAgICAgfVxuICAgICAgJjpudGgtY2hpbGQoMykge1xuICAgICAgICB0b3A6IGNhbGMoNTAlICsgNHB4KTtcbiAgICAgIH1cblxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoYmxhY2ssIDAuMDUpO1xuICAgICAgfVxuICAgIH1cblxuICAgICYuYWN0aXZlIHNwYW4ge1xuICAgICAgJjpudGgtY2hpbGQoMSkge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNXB4KSByb3RhdGUoNDVkZWcpO1xuICAgICAgfVxuICAgICAgJjpudGgtY2hpbGQoMikge1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgfVxuICAgICAgJjpudGgtY2hpbGQoMykge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTVweCkgcm90YXRlKC00NWRlZyk7XG4gICAgICB9XG4gICAgfVxuICBgO1xufVxuIiwiaW1wb3J0IHsgY3NzIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgQ1NTVHlwZSB9IGZyb20gJy4uL3R5cGVzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXJyb3coY29sb3I6IHN0cmluZywgZGlyZWN0aW9uPzogc3RyaW5nKTogQ1NTVHlwZSB7XG4gIHJldHVybiBjc3NgXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvcmRlcjogM3B4IHNvbGlkICR7Y29sb3J9O1xuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICBib3JkZXItcmlnaHQ6IDA7XG4gICAgYm9yZGVyLXRvcDogMDtcbiAgICBjb250ZW50OiBcIiBcIjtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBoZWlnaHQ6IDAuNjI1ZW07XG4gICAgbWFyZ2luLXRvcDogLTAuNjI1ZW07XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgdG9wOiA1MCU7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XG4gICAgd2lkdGg6IDAuNjI1ZW07XG4gIGA7XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmludGVyZmFjZSBNc2dQcm9wcyB7XG4gIGVycm9yPzogYm9vbGVhbjtcbn1cblxuY29uc3QgTWVzc2FnZSA9IHN0eWxlZC5zcGFuPE1zZ1Byb3BzPmBcbiAgZm9udC1zaXplOiAwLjhyZW07XG4gIGNvbG9yOiAkeyh7IGVycm9yLCB0aGVtZSB9KSA9PiBlcnJvciA/IHRoZW1lLmRhbmdlciA6IHRoZW1lLnRleHRMaWdodH07XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIZWxwTWVzc2FnZShoZWxwPzogc3RyaW5nLCBlcnJvcj86IHN0cmluZykge1xuICBpZiAoZXJyb3IpIHtcbiAgICByZXR1cm4gKDxNZXNzYWdlIGVycm9yPntlcnJvcn08L01lc3NhZ2U+KTtcbiAgfVxuICBpZiAoaGVscCkge1xuICAgIHJldHVybiAoPE1lc3NhZ2U+e2hlbHB9PC9NZXNzYWdlPik7XG4gIH1cbn1cbiIsImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50LCBJbnB1dEhUTUxBdHRyaWJ1dGVzIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCwgeyBjc3MgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgeyBzZXRTaXplIH0gZnJvbSAnLi4vLi4vdXRpbHMnO1xuaW1wb3J0IGRpc2FibGVkQ29sb3IgZnJvbSAnLi4vLi4vdXRpbHMvZGlzYWJsZWRDb2xvcic7XG5pbXBvcnQgSGVscE1lc3NhZ2UgZnJvbSAnLi9IZWxwTWVzc2FnZSc7XG5pbXBvcnQgeyBDU1NUeXBlIH0gZnJvbSAnLi4vLi4vdHlwZXMnO1xuXG5pbnRlcmZhY2UgV3JhcHBlclByb3BzIHtcbiAgb3V0bGluZT86IGJvb2xlYW47XG4gIGVycm9yPzogYW55O1xuICBjc3M/OiBDU1NUeXBlO1xufVxuXG5pbnRlcmZhY2UgSWNvblByb3BzIHtcbiAgcmlnaHQ/OiBib29sZWFuO1xufVxuXG5jb25zdCByaWdodEljb24gPSBjc3NgXG4gIHJpZ2h0OiAwLjM3NWVtO1xuICAmIH4gaW5wdXQge1xuICAgIHBhZGRpbmctcmlnaHQ6IDEuNTU1ZW0gIWltcG9ydGFudDtcbiAgfVxuYDtcblxuY29uc3QgbGVmdEljb24gPSBjc3NgXG4gIGxlZnQ6IDAuMzc1ZW07XG4gICYgfiBpbnB1dCB7XG4gICAgcGFkZGluZy1sZWZ0OiAxLjU1ZW0gIWltcG9ydGFudDtcbiAgfVxuYDtcblxuY29uc3QgSWNvbiA9IHN0eWxlZC5zcGFuPEljb25Qcm9wcz5gXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwLjM3NWVtO1xuICBib3R0b206IDA7XG4gIHotaW5kZXg6IDE7XG4gIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmJvcmRlcn07XG4gICR7KHsgcmlnaHQgfSkgPT4gcmlnaHQgPyByaWdodEljb24gOiBsZWZ0SWNvbn1cblxuICBzdmcsIGltZyB7XG4gICAgaGVpZ2h0OiAxZW07XG4gICAgd2lkdGg6IDFlbTtcbiAgfVxuYDtcblxuY29uc3QgV3JhcHBlciA9IHN0eWxlZC5zcGFuPFdyYXBwZXJQcm9wcz5gXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogYmxvY2s7XG5cbiAgaW5wdXQge1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICBhcHBlYXJhbmNlOiBub25lO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgY29sb3I6IGluaGVyaXQ7XG5cbiAgICBwYWRkaW5nOiAwLjM3NWVtIDAuNjI1ZW07XG4gICAgYm9yZGVyOiBub25lO1xuICAgICR7KHsgb3V0bGluZSwgdGhlbWUsIGVycm9yIH0pID0+IG91dGxpbmUgP1xuICAgICAgYGJvcmRlcjogMXB4IHNvbGlkICR7ZXJyb3IgPyB0aGVtZS5kYW5nZXIgOiB0aGVtZS5ib3JkZXJ9OyBib3JkZXItcmFkaXVzOiA0cHg7YCA6XG4gICAgICBgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICR7ZXJyb3IgPyB0aGVtZS5kYW5nZXIgOiB0aGVtZS5ib3JkZXJ9OyBib3JkZXItcmFkaXVzOiAwO2BcbiAgICB9XG4gICAgJHtzZXRTaXplKCdmb250LXNpemUnKX1cblxuICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IGJveC1zaGFkb3c7XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMTUwbXM7XG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xuXG4gICAgJjpmb2N1cyB7XG4gICAgICBib3JkZXItY29sb3I6ICR7KHsgZXJyb3IsIHRoZW1lIH0pID0+IChlcnJvciA/IHRoZW1lLmRhbmdlciA6IHRoZW1lLnByaW1hcnkpfTtcbiAgICAgICR7KHsgdGhlbWUsIG91dGxpbmUsIGVycm9yIH0pID0+IG91dGxpbmUgP1xuICAgICAgICBgYm94LXNoYWRvdzogMCAwIDAgMC4xZW0gJHtlcnJvciA/IHRoZW1lLmRhbmdlciA6IHRoZW1lLnByaW1hcnl9O2AgOlxuICAgICAgICBgYm94LXNoYWRvdzogMCAwLjFlbSAke2Vycm9yID8gdGhlbWUuZGFuZ2VyIDogdGhlbWUucHJpbWFyeX07YFxuICAgICAgfVxuICAgIH1cblxuICAgICY6ZGlzYWJsZWQsIFtkaXNhYmxlZF0sICY6cmVhZG9ubHkge1xuICAgICAgJHsoeyB0aGVtZSB9KSA9PiBkaXNhYmxlZENvbG9yKHRoZW1lKX1cbiAgICB9XG5cbiAgICAmOmRpc2FibGVkLCBbZGlzYWJsZWRdIHtcbiAgICAgIHJlc2l6ZTogbm9uZTtcbiAgICB9XG5cbiAgICAmOjpwbGFjZWhvbGRlciB7XG4gICAgICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5wbGFjZWhvbGRlcn07XG4gICAgfVxuICB9XG5cbiAgJjpob3ZlciB7XG4gICAgaW5wdXQ6bm90KDpkaXNhYmxlZCk6bm90KDpmb2N1cyk6bm90KDphY3RpdmUpIHtcbiAgICAgIGJvcmRlci1jb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5ib3JkZXJIb3Zlcn07XG4gICAgfVxuICAgICR7SWNvbn0ge1xuICAgICAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuYm9yZGVySG92ZXJ9O1xuICAgIH1cbiAgfVxuICAkeyh7IGNzcyB9KSA9PiBjc3MgfHwgJyd9XG5gO1xuXG5pbnRlcmZhY2UgUHJvcHMgZXh0ZW5kcyBJbnB1dEhUTUxBdHRyaWJ1dGVzPEhUTUxJbnB1dEVsZW1lbnQ+IHtcbiAgcGxhY2Vob2xkZXI/OiBzdHJpbmc7XG4gIC8qKiAndGV4dCcgfCAnbnVtYmVyJyB8ICdwYXNzd29yZCcgfCAnZW1haWwnIHwgJ3RlbCcgfCAnc2VhcmNoJyAqL1xuICB0eXBlOiAndGV4dCcgfCAnbnVtYmVyJyB8ICdwYXNzd29yZCcgfCAnZW1haWwnIHwgJ3RlbCcgfCAnc2VhcmNoJztcbiAgLyoqIOOCqOODqeODvOOBrueZuueUn+aZguOBruihqOekuuODhuOCreOCueODiCAqL1xuICBlcnJvcj86IHN0cmluZyB8IGFueTtcbiAgLyoqIOaNleaNieODhuOCreOCueODiCAqL1xuICBoZWxwPzogc3RyaW5nIHwgYW55O1xuICAvKiog44Oc44OD44Kv44K557O744Gu44OH44K244Kk44Oz44Gn44GZ44KLICovXG4gIG91dGxpbmU/OiBib29sZWFuO1xuICAvKiog5bem5YG044Gu44Ki44Kk44Kz44OzICovXG4gIGxlZnRJY29uPzogYW55O1xuICAvKiog5Y+z5YG044Gu44Ki44Kk44Kz44OzICovXG4gIHJpZ2h0SWNvbj86IGFueTtcbiAgLyoqIOOCq+OCueOCv+ODoENTU+Wumue+qSAqL1xuICBjc3M/OiBDU1NUeXBlO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXh0SW5wdXQgZXh0ZW5kcyBQdXJlQ29tcG9uZW50PFByb3BzPiB7XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgdHlwZTogJ3RleHQnLFxuICAgIHZhbHVlOiAnJyxcbiAgICBtYXhMZW5ndGg6IDI1NSxcbiAgICBvbkNoYW5nZTogKCkgPT4ge30sXG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGNsYXNzTmFtZSwgb3V0bGluZSwgZXJyb3IsIGhlbHAsIGxlZnRJY29uLCByaWdodEljb24sIHN0eWxlLCBjc3MsIC4uLnJlc3RcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPFdyYXBwZXIgY2xhc3NOYW1lPXtjbGFzc05hbWV9IG91dGxpbmU9e291dGxpbmV9IGVycm9yPXtlcnJvcn0gc3R5bGU9e3N0eWxlfSBjc3M9e2Nzc30+XG4gICAgICAgIHtsZWZ0SWNvbiAmJiAoPEljb24+e2xlZnRJY29ufTwvSWNvbj4pfVxuICAgICAgICB7cmlnaHRJY29uICYmICg8SWNvbiByaWdodD57cmlnaHRJY29ufTwvSWNvbj4pfVxuICAgICAgICA8aW5wdXQgey4uLnJlc3R9IC8+XG4gICAgICAgIHtIZWxwTWVzc2FnZShoZWxwLCBlcnJvcil9XG4gICAgICA8L1dyYXBwZXI+XG4gICAgKTtcbiAgfVxufVxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgVGV4dGFyZWFIVE1MQXR0cmlidXRlcyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IGJveFNoYWRvdyBmcm9tICcuLi8uLi91dGlscy9ib3hTaGFkb3cnO1xuaW1wb3J0IHNldFNpemUgZnJvbSAnLi4vLi4vdXRpbHMvc2V0U2l6ZSc7XG5pbXBvcnQgZGlzYWJsZWRDb2xvciBmcm9tICcuLi8uLi91dGlscy9kaXNhYmxlZENvbG9yJztcbmltcG9ydCBIZWxwTWVzc2FnZSBmcm9tICcuL0hlbHBNZXNzYWdlJztcbmltcG9ydCB7IENTU1R5cGUgfSBmcm9tICcuLi8uLi90eXBlcyc7XG5cbmludGVyZmFjZSBXcmFwcGVyUHJvcHMge1xuICBlcnJvcj86IHN0cmluZztcbiAgY3NzPzogQ1NTVHlwZTtcbn1cblxuY29uc3QgV3JhcHBlciA9IHN0eWxlZC5zcGFuPFdyYXBwZXJQcm9wcz5gXG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgdGV4dGFyZWEge1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgcGFkZGluZzogMC42MjVlbTtcbiAgICByZXNpemU6IHZlcnRpY2FsO1xuICAgIGFwcGVhcmFuY2U6IG5vbmU7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGNvbG9yOiBpbmhlcml0O1xuXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICR7KHsgdGhlbWUsIGVycm9yIH0pID0+IGVycm9yID8gdGhlbWUuZGFuZ2VyIDogdGhlbWUuYm9yZGVyfTtcblxuICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IGJveC1zaGFkb3c7XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4xNXM7XG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xuXG4gICAgJHtzZXRTaXplKCdmb250LXNpemUnKX1cblxuICAgICY6Zm9jdXMge1xuICAgICAgYm9yZGVyLWNvbG9yOiAkeyh7IHRoZW1lLCBlcnJvciB9KSA9PiBlcnJvciA/IHRoZW1lLmRhbmdlciA6IHRoZW1lLnByaW1hcnl9O1xuICAgICAgJHsoeyB0aGVtZSwgZXJyb3IgfSkgPT4gYm94U2hhZG93KCcwLjFlbScsIGVycm9yID8gdGhlbWUuZGFuZ2VyIDogdGhlbWUucHJpbWFyeSl9XG4gICAgfVxuXG4gICAgJjpkaXNhYmxlZCwgW2Rpc2FibGVkXSwgJjpyZWFkb25seSB7XG4gICAgICAkeyh7IHRoZW1lIH0pID0+IGRpc2FibGVkQ29sb3IodGhlbWUpfVxuICAgIH1cblxuICAgICY6ZGlzYWJsZWQsIFtkaXNhYmxlZF0ge1xuICAgICAgcmVzaXplOiBub25lO1xuICAgIH1cblxuICAgICY6OnBsYWNlaG9sZGVyIHtcbiAgICAgIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnBsYWNlaG9sZGVyfTtcbiAgICB9XG4gIH1cblxuICAmOmhvdmVyIHtcbiAgICB0ZXh0YXJlYTpub3QoOmRpc2FibGVkKTpub3QoOmZvY3VzKSB7XG4gICAgICBib3JkZXItY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuYm9yZGVySG92ZXJ9O1xuICAgIH1cbiAgfVxuICAkeyh7IGNzcyB9KSA9PiBjc3MgfHwge319XG5gO1xuXG5pbnRlcmZhY2UgUHJvcHMgZXh0ZW5kcyBUZXh0YXJlYUhUTUxBdHRyaWJ1dGVzPEhUTUxUZXh0QXJlYUVsZW1lbnQ+IHtcbiAgLyoqIOOCqOODqeODvOOBrueZuueUn+aZguOBruihqOekuuODhuOCreOCueODiCAqL1xuICBlcnJvcj86IHN0cmluZyB8IGFueTtcbiAgLyoqIOaNleaNieODhuOCreOCueODiCAqL1xuICBoZWxwPzogc3RyaW5nIHwgYW55O1xuICAvKiog44Kr44K544K/44OgQ1NT5a6a576pICovXG4gIGNzcz86IENTU1R5cGU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRleHRhcmVhIGV4dGVuZHMgQ29tcG9uZW50PFByb3BzPiB7XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgdmFsdWU6ICcnLFxuICAgIGNvbDogMixcbiAgICByb3c6IDUsXG4gICAgb25DaGFuZ2U6ICgpID0+IHt9LFxuICB9O1xuXG4gIHNob3VsZENvbXBvbmVudFVwZGF0ZShwcm9wczogUHJvcHMpIHtcbiAgICByZXR1cm4gcHJvcHMudmFsdWUgIT09IHRoaXMucHJvcHMudmFsdWUgfHxcbiAgICAgIHByb3BzLmhlbHAgIT09IHRoaXMucHJvcHMuaGVscCB8fFxuICAgICAgcHJvcHMuZXJyb3IgIT09IHRoaXMucHJvcHMuZXJyb3IgfHxcbiAgICAgIHByb3BzLmRpc2FibGVkICE9PSB0aGlzLnByb3BzLmRpc2FibGVkIHx8XG4gICAgICBwcm9wcy5yZWFkT25seSAhPT0gdGhpcy5wcm9wcy5yZWFkT25seTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNsYXNzTmFtZSwgaGVscCwgZXJyb3IsIHN0eWxlLCBjc3MsIC4uLnJlc3QgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxXcmFwcGVyIGNsYXNzTmFtZT17Y2xhc3NOYW1lfSBlcnJvcj17ZXJyb3J9IHN0eWxlPXtzdHlsZX0gY3NzPXtjc3N9PlxuICAgICAgICA8dGV4dGFyZWEgey4uLnJlc3R9IC8+XG4gICAgICAgIHtIZWxwTWVzc2FnZShoZWxwLCBlcnJvcil9XG4gICAgICA8L1dyYXBwZXI+XG4gICAgKTtcbiAgfVxufVxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgSW5wdXRIVE1MQXR0cmlidXRlcyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB0cmFuc3BhcmVudGl6ZSBmcm9tICdwb2xpc2hlZC9saWIvY29sb3IvdHJhbnNwYXJlbnRpemUnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmNvbnN0IFdyYXBwZXIgPSBzdHlsZWQuc3BhbmBcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IGF1dG87XG5cbiAgbGFiZWwge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBwYWRkaW5nLWxlZnQ6IDAuNjI1ZW07XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjI1O1xuICAgIG1hcmdpbi1yaWdodDogMC42MjVyZW07XG5cbiAgICAmOmJlZm9yZSwgJjphZnRlciB7XG4gICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIH1cblxuICAgICY6YWZ0ZXIge1xuICAgICAgdG9wOiAwLjI1ZW07XG4gICAgICBsZWZ0OiAwLjJlbTtcbiAgICAgIHdpZHRoOiAwLjg1ZW07XG4gICAgICBoZWlnaHQ6IDAuNWVtO1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgICAgIGJvcmRlcjogMC4xZW0gc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICBib3JkZXItdG9wLXN0eWxlOiBub25lO1xuICAgICAgYm9yZGVyLXJpZ2h0LXN0eWxlOiBub25lO1xuICAgIH1cblxuICAgICY6YmVmb3JlIHtcbiAgICAgIHdpZHRoOiAxLjI1ZW07XG4gICAgICBoZWlnaHQ6IDEuMjVlbTtcbiAgICAgIGxlZnQ6MDtcbiAgICAgIHRvcDogMDtcbiAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5ib3JkZXJ9O1xuICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgICB3aWxsLWNoYW5nZTogYmFja2dyb3VuZDtcbiAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgMTUwbXMgZWFzZS1vdXQ7XG4gICAgfVxuICB9XG5cbiAgaW5wdXQge1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcblxuICAgICY6Y2hlY2tlZCArIGxhYmVsIHtcbiAgICAgICY6YmVmb3Jle1xuICAgICAgICBib3JkZXItY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUucHJpbWFyeX07XG4gICAgICAgIGJhY2tncm91bmQ6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUucHJpbWFyeX07XG4gICAgICB9XG4gICAgICAmOmFmdGVyIHtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLndoaXRlfTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmOmluZGV0ZXJtaW5hdGUgKyBsYWJlbCB7XG4gICAgICAmOmJlZm9yZSB7XG4gICAgICAgIGJvcmRlci1jb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5wcmltYXJ5fTtcbiAgICAgICAgYmFja2dyb3VuZDogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5wcmltYXJ5fTtcbiAgICAgIH1cbiAgICAgICY6YWZ0ZXIge1xuICAgICAgICBib3JkZXItY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUud2hpdGV9O1xuICAgICAgICBib3JkZXItbGVmdC1zdHlsZTogbm9uZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmOmRpc2FibGVkIHtcbiAgICAgICsgbGFiZWwge1xuICAgICAgICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0cmFuc3BhcmVudGl6ZSgwLjI1LCB0aGVtZS50ZXh0RGFyayl9O1xuICAgICAgICAmOmJlZm9yZSB7XG4gICAgICAgICAgYmFja2dyb3VuZDogJHsoeyB0aGVtZSB9KSA9PiB0cmFuc3BhcmVudGl6ZSgwLjU1LCB0aGVtZS5ib3JkZXIpfTtcbiAgICAgICAgICBib3JkZXItY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuYm9yZGVyfTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgJjpjaGVja2VkICsgbGFiZWw6YWZ0ZXIge1xuICAgICAgICBib3JkZXItY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdHJhbnNwYXJlbnRpemUoMC4xNSwgdGhlbWUudGV4dERhcmspfTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbmA7XG5cbmludGVyZmFjZSBQcm9wcyBleHRlbmRzIElucHV0SFRNTEF0dHJpYnV0ZXM8SFRNTElucHV0RWxlbWVudD4ge1xuICBjaGlsZHJlbj86IGFueTtcbiAgY2hlY2tlZD86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENoZWNrYm94IGV4dGVuZHMgQ29tcG9uZW50PFByb3BzPiB7XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgbmFtZTogbnVsbCxcbiAgICBjaGlsZHJlbjogbnVsbCxcbiAgICBjaGVja2VkOiBmYWxzZSxcbiAgICBvbkNoYW5nZTogKCkgPT4ge30sXG4gIH07XG5cbiAgaWQgPSBgY2hlY2tib3hfJHt0aGlzLnByb3BzLm5hbWV9YDtcblxuICBzaG91bGRDb21wb25lbnRVcGRhdGUocHJvcHM6IFByb3BzKSB7XG4gICAgcmV0dXJuIHByb3BzLmNoZWNrZWQgIT09IHRoaXMucHJvcHMuY2hlY2tlZCB8fFxuICAgICAgcHJvcHMuY2hpbGRyZW4gIT09IHRoaXMucHJvcHMuY2hpbGRyZW47XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjbGFzc05hbWUsIGNoaWxkcmVuLCAuLi5yZXN0IH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8V3JhcHBlciBjbGFzc05hbWU9e2NsYXNzTmFtZX0gPlxuICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgaWQ9e3RoaXMuaWR9IHsuLi5yZXN0fSAvPlxuICAgICAgICA8bGFiZWwgaHRtbEZvcj17dGhpcy5pZH0+e2NoaWxkcmVufTwvbGFiZWw+XG4gICAgICA8L1dyYXBwZXI+XG4gICAgKTtcbiAgfVxufVxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgU2VsZWN0SFRNTEF0dHJpYnV0ZXMgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZWQsIHsgY3NzIH0gZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgYXJyb3cgZnJvbSBcIi4uLy4uL3V0aWxzL2Fycm93XCI7XG5pbXBvcnQgc2V0U2l6ZSBmcm9tIFwiLi4vLi4vdXRpbHMvc2V0U2l6ZVwiO1xuaW1wb3J0IEhlbHBNZXNzYWdlIGZyb20gXCIuL0hlbHBNZXNzYWdlXCI7XG5pbXBvcnQgeyBTaXplVHlwZSwgQ1NTVHlwZSB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuaW1wb3J0IGRpc2FibGVkQ29sb3IgZnJvbSBcIi4uLy4uL3V0aWxzL2Rpc2FibGVkQ29sb3JcIjtcblxuaW50ZXJmYWNlIFdyYXBwZXJQcm9wcyB7XG4gIHNpemU/OiBTaXplVHlwZTtcbiAgb3V0bGluZT86IGJvb2xlYW47XG4gIGVycm9yPzogc3RyaW5nO1xuICBkaXNhYmxlZD86IGJvb2xlYW47XG4gIGNzcz86IENTU1R5cGU7XG59XG5cbmNvbnN0IElucHV0V3JhcHBlciA9IHN0eWxlZC5zcGFuPFdyYXBwZXJQcm9wcz5gXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogYmxvY2s7XG5cbiAgc2VsZWN0IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYXBwZWFyYW5jZTogbm9uZTtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgcGFkZGluZzogMC4zNzVlbSAwLjYyNWVtO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgY29sb3I6IGluaGVyaXQ7XG5cbiAgICAkeyh7IHNpemUgfSkgPT4gc2V0U2l6ZShcImZvbnQtc2l6ZVwiLCBzaXplKX1cblxuICAgIGJvcmRlcjogbm9uZTtcbiAgICAkeyh7IG91dGxpbmUsIHRoZW1lLCBlcnJvciB9KSA9PlxuICAgICAgb3V0bGluZSA/IGNzc2BcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJHtlcnJvciA/IHRoZW1lLmRhbmdlciA6IHRoZW1lLmJvcmRlcn07XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgIGAgOiBjc3NgXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAke2Vycm9yID8gdGhlbWUuZGFuZ2VyIDogdGhlbWUuYm9yZGVyfTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICAgIGB9XG5cbiAgICB3aWxsLWNoYW5nZTogYm94LXNoYWRvdztcbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBib3gtc2hhZG93O1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDE1MG1zO1xuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcblxuICAgICY6Zm9jdXMge1xuICAgICAgYm9yZGVyLWNvbG9yOiAkeyh7IGVycm9yLCB0aGVtZSB9KSA9PiBlcnJvciA/IHRoZW1lLmRhbmdlciA6IHRoZW1lLnByaW1hcnl9O1xuICAgICAgYm94LXNoYWRvdzogJHtcbiAgICAgICAgKHsgdGhlbWUsIG91dGxpbmUsIGVycm9yIH0pID0+IG91dGxpbmUgP1xuICAgICAgICAgIChlcnJvciA/IHRoZW1lLmRhbmdlciA6IHRoZW1lLnByaW1hcnkpIDpcbiAgICAgICAgICAoZXJyb3IgPyB0aGVtZS5kYW5nZXIgOiB0aGVtZS5wcmltYXJ5KVxuICAgICAgICB9O1xuICAgIH1cblxuICAgICY6Oi1tcy1leHBhbmQge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gICAgJjotbW96LWZvY3VzcmluZyB7XG4gICAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICB0ZXh0LXNoYWRvdzogMCAwIDAgIzAwMDtcbiAgICB9XG5cbiAgICAmOmRpc2FibGVkLCBbZGlzYWJsZWRdLCAmOnJlYWRvbmx5IHtcbiAgICAgICR7KHsgdGhlbWUgfSkgPT4gZGlzYWJsZWRDb2xvcih0aGVtZSl9XG4gICAgfVxuXG4gICAgJjppbnZhbGlkIHtcbiAgICAgIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnBsYWNlaG9sZGVyfTtcbiAgICB9XG4gIH1cblxuICAmOjphZnRlciB7XG4gICAgJHsoeyB0aGVtZSB9KSA9PiBhcnJvdyh0aGVtZS5ib3JkZXIpfVxuICAgIHRvcDogMS4yNWVtO1xuICAgIHJpZ2h0OiAwLjYyNWVtO1xuICAgIHotaW5kZXg6IDQ7XG4gIH1cblxuICAkeyh7IHRoZW1lLCBkaXNhYmxlZCB9KSA9PlxuICAgIGRpc2FibGVkXG4gICAgICA/IHt9XG4gICAgICA6IGNzc2BcbiAgICAmOmhvdmVyIHtcbiAgICAgIHNlbGVjdDpub3QoOmRpc2FibGVkKTpub3QoOmZvY3VzKSB7XG4gICAgICAgIGJvcmRlci1jb2xvcjogJHt0aGVtZS5ib3JkZXJIb3Zlcn07XG4gICAgICB9XG5cbiAgICAgICY6OmFmdGVyIHtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAke3RoZW1lLmJvcmRlckhvdmVyfTtcbiAgICAgIH1cbiAgICB9XG4gIGB9XG5cbiAgJHsoeyBjc3MgfSkgPT4gY3NzIHx8IHt9fVxuYDtcblxudHlwZSBJdGVtVHlwZSA9XG4gIHwgeyBpZDogc3RyaW5nIHwgbnVtYmVyOyBuYW1lOiBzdHJpbmc7IFtrZXk6IHN0cmluZ106IGFueSB9XG4gIHwgc3RyaW5nO1xuXG5pbnRlcmZhY2UgUHJvcHMgZXh0ZW5kcyBTZWxlY3RIVE1MQXR0cmlidXRlczxIVE1MU2VsZWN0RWxlbWVudD4ge1xuICBwbGFjZWhvbGRlcj86IHN0cmluZztcbiAgb3B0aW9uczogSXRlbVR5cGVbXTtcbiAgb3V0bGluZT86IGJvb2xlYW47XG4gIGVycm9yPzogc3RyaW5nIHwgYW55O1xuICBoZWxwPzogc3RyaW5nIHwgYW55O1xuICBpbnB1dFNpemU/OiBTaXplVHlwZTtcbiAgcmVuZGVyPzogKGxhYmVsOiBzdHJpbmcpID0+IGFueTtcbiAgZGlzYWJsZWQ/OiBib29sZWFuO1xuICBjc3M/OiBDU1NUeXBlO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWxlY3QgZXh0ZW5kcyBDb21wb25lbnQ8UHJvcHM+IHtcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBuYW1lOiBudWxsLFxuICAgIHZhbHVlOiAnJyxcbiAgICBvbkNoYW5nZTogKCkgPT4ge30sXG4gICAgb3B0aW9uczogW10sXG4gIH07XG5cbiAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKHByb3BzOiBQcm9wcykge1xuICAgIHJldHVybiAoXG4gICAgICBwcm9wcy5vcHRpb25zLmxlbmd0aCAhPT0gdGhpcy5wcm9wcy5vcHRpb25zLmxlbmd0aCB8fFxuICAgICAgcHJvcHMudmFsdWUgIT09IHRoaXMucHJvcHMudmFsdWUgfHxcbiAgICAgIHByb3BzLmRpc2FibGVkICE9PSB0aGlzLnByb3BzLmRpc2FibGVkIHx8XG4gICAgICBwcm9wcy5oZWxwICE9PSB0aGlzLnByb3BzLmhlbHAgfHxcbiAgICAgIHByb3BzLmVycm9yICE9PSB0aGlzLnByb3BzLmVycm9yXG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlckxhYmVsID0gKGxhYmVsOiBzdHJpbmcpID0+IHtcbiAgICBpZiAodGhpcy5wcm9wcy5yZW5kZXIpIHtcbiAgICAgIHJldHVybiB0aGlzLnByb3BzLnJlbmRlcihsYWJlbCk7XG4gICAgfVxuICAgIHJldHVybiBsYWJlbDtcbiAgfVxuXG4gIHJlbmRlckl0ZW0gPSAoKSA9PiB7XG4gICAgcmV0dXJuIHRoaXMucHJvcHMub3B0aW9ucy5tYXAoKGl0ZW0sIGlkeCkgPT4ge1xuICAgICAgaWYgKHR5cGVvZiBpdGVtID09PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxvcHRpb24ga2V5PXtpdGVtfSB2YWx1ZT17aXRlbX0+XG4gICAgICAgICAgICB7dGhpcy5yZW5kZXJMYWJlbChpdGVtKX1cbiAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHsgaWQsIG5hbWUgfSA9IGl0ZW07XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8b3B0aW9uIGtleT17YCR7aWR9XyR7aWR4fWB9IHZhbHVlPXtpZH0+XG4gICAgICAgICAge3RoaXMucmVuZGVyTGFiZWwobmFtZSl9XG4gICAgICAgIDwvb3B0aW9uPlxuICAgICAgKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBjc3MsXG4gICAgICBjbGFzc05hbWUsXG4gICAgICBpbnB1dFNpemUsXG4gICAgICBvdXRsaW5lLFxuICAgICAgb3B0aW9ucyxcbiAgICAgIGVycm9yLFxuICAgICAgaGVscCxcbiAgICAgIHBsYWNlaG9sZGVyLFxuICAgICAgZGlzYWJsZWQsXG4gICAgICAuLi5yZXN0XG4gICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPElucHV0V3JhcHBlclxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZX1cbiAgICAgICAgc2l6ZT17aW5wdXRTaXplfVxuICAgICAgICBvdXRsaW5lPXtvdXRsaW5lfVxuICAgICAgICBlcnJvcj17ZXJyb3J9XG4gICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICAgICAgY3NzPXtjc3N9XG4gICAgICA+XG4gICAgICAgIDxzZWxlY3Qgey4uLnJlc3R9IGRpc2FibGVkPXtkaXNhYmxlZH0gcmVxdWlyZWQ9e0Jvb2xlYW4ocGxhY2Vob2xkZXIpfT5cbiAgICAgICAgICB7cGxhY2Vob2xkZXIgJiYgKFxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPlxuICAgICAgICAgICAgICB7cGxhY2Vob2xkZXJ9XG4gICAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgICApfVxuICAgICAgICAgIHt0aGlzLnJlbmRlckl0ZW0oKX1cbiAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgIHtIZWxwTWVzc2FnZShoZWxwLCBlcnJvcil9XG4gICAgICA8L0lucHV0V3JhcHBlcj5cbiAgICApO1xuICB9XG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBJbnB1dEhUTUxBdHRyaWJ1dGVzIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHRyYW5zcGFyZW50aXplIGZyb20gJ3BvbGlzaGVkL2xpYi9jb2xvci90cmFuc3BhcmVudGl6ZSc7XG5pbXBvcnQgc3R5bGVkLCB7IGNzcyB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7IENvbG9yVHlwZSB9IGZyb20gJy4uLy4uL3R5cGVzJztcblxuY29uc3QgUmFkaW9MYWJlbCA9IGNzc2BcbiAgbGFiZWwge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBwYWRkaW5nLWxlZnQ6IDEuNjI1ZW07XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjI1O1xuICAgIG1hcmdpbi1yaWdodDogMC42MjVyZW07XG5cbiAgICAmOmJlZm9yZSwgJjphZnRlciB7XG4gICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIH1cblxuICAgICY6YWZ0ZXIge1xuICAgICAgdG9wOiAwLjM3NWVtO1xuICAgICAgbGVmdDogMC4zNzVlbTtcbiAgICAgIHdpZHRoOiAwLjVlbTtcbiAgICAgIGhlaWdodDogMC41ZW07XG4gICAgICBiYWNrZ3JvdW5kOiAkeyh7IHRoZW1lIH06IGFueSkgPT4gdGhlbWUucHJpbWFyeX07XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuXG4gICAgICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtO1xuICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDE1MG1zIGVhc2Utb3V0O1xuICAgIH1cblxuICAgICY6YmVmb3JlIHtcbiAgICAgIHdpZHRoOiAxLjI1ZW07XG4gICAgICBoZWlnaHQ6IDEuMjVlbTtcbiAgICAgIGxlZnQ6MDtcbiAgICAgIHRvcDogMDtcbiAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgYm9yZGVyOiAwLjFlbSBzb2xpZCAkeyh7IHRoZW1lIH06IGFueSkgPT4gdGhlbWUuYm9yZGVyfTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcblxuICAgICAgd2lsbC1jaGFuZ2U6IGJhY2tncm91bmQ7XG4gICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDE1MG1zIGVhc2Utb3V0O1xuICAgIH1cbiAgfVxuXG4gIGlucHV0IHtcbiAgICBkaXNwbGF5OiBub25lO1xuXG4gICAgJjpjaGVja2VkIHtcbiAgICAgICsgbGFiZWw6YmVmb3JlIHtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkeyh7IHRoZW1lIH06IGFueSkgPT4gdGhlbWUucHJpbWFyeX07XG4gICAgICB9XG4gICAgICArIGxhYmVsOmFmdGVye1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgICY6ZGlzYWJsZWQge1xuICAgICAgKyBsYWJlbCB7XG4gICAgICAgIGNvbG9yOiAkeyh7IHRoZW1lIH06IGFueSkgPT4gdHJhbnNwYXJlbnRpemUoMC4yNSwgdGhlbWUudGV4dERhcmspfTtcbiAgICAgICAgJjpiZWZvcmUge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICR7KHsgdGhlbWUgfTogYW55KSA9PiB0cmFuc3BhcmVudGl6ZSgwLjU1LCB0aGVtZS5ib3JkZXIpfTtcbiAgICAgICAgICBib3JkZXItY29sb3I6ICR7KHsgdGhlbWUgfTogYW55KSA9PiB0aGVtZS5ib3JkZXJ9O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAmOmNoZWNrZWQgKyBsYWJlbDphZnRlciB7XG4gICAgICAgIGJhY2tncm91bmQ6ICR7KHsgdGhlbWUgfTogYW55KSA9PiB0cmFuc3BhcmVudGl6ZSgwLjE1LCB0aGVtZS50ZXh0RGFyayl9O1xuICAgICAgfVxuICAgIH1cbiAgfVxuYDtcblxuY29uc3QgQnV0dG9uTGFiZWwgPSBjc3NgXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuXG4gIGxhYmVsIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgcGFkZGluZzogMC4zNzVlbSAwLjc1ZW07XG4gICAgaGVpZ2h0OiAyLjI1ZW07XG4gICAgYm9yZGVyOiAxcHggc29saWQgJHsoeyB0aGVtZSB9OiBhbnkpID0+IHRoZW1lLmJvcmRlcn07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICBib3JkZXItY29sb3I6ICR7KHsgdGhlbWUgfTogYW55KSA9PiB0aGVtZS5ib3JkZXJIb3Zlcn07XG4gICAgfVxuICB9XG5cbiAgaW5wdXQge1xuICAgIGRpc3BsYXk6IG5vbmU7XG5cbiAgICAmOmNoZWNrZWQgKyBsYWJlbCB7XG4gICAgICB6LWluZGV4OiAxO1xuICAgICAgYm9yZGVyLWNvbG9yOiAkeyh7IHRoZW1lIH06IGFueSkgPT4gdGhlbWUucHJpbWFyeX07XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyh7IHRoZW1lIH06IGFueSkgPT4gdHJhbnNwYXJlbnRpemUoMC41NSwgdGhlbWUucHJpbWFyeSl9O1xuICAgIH1cblxuICAgICY6ZGlzYWJsZWQge1xuICAgICAgKyBsYWJlbCB7XG4gICAgICAgIGN1cnNvcjogZGVmYXVsdDtcbiAgICAgICAgY29sb3I6ICR7KHsgdGhlbWUgfTogYW55KSA9PiB0cmFuc3BhcmVudGl6ZSgwLjI1LCB0aGVtZS50ZXh0RGFyayl9O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyh7IHRoZW1lIH06IGFueSkgPT4gdHJhbnNwYXJlbnRpemUoMC41NSwgdGhlbWUuYm9yZGVyKX07XG4gICAgICAgIGJvcmRlci1jb2xvcjogJHsoeyB0aGVtZSB9OiBhbnkpID0+IHRoZW1lLmJvcmRlcn07XG4gICAgICB9XG5cbiAgICAgICY6Y2hlY2tlZCArIGxhYmVsIHtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkeyh7IHRoZW1lIH06IGFueSkgPT4gdGhlbWUudGV4dERhcmt9O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyh7IHRoZW1lIH06IGFueSkgPT4gdHJhbnNwYXJlbnRpemUoMC42NSwgdGhlbWUudGV4dERhcmspfTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAmICsgJiB7XG4gICAgbWFyZ2luLWxlZnQ6IC0xcHg7XG4gIH1cblxuICAmOmZpcnN0LWNoaWxkIGxhYmVsIHtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA0cHg7XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNHB4O1xuICB9XG5cbiAgJjpsYXN0LWNoaWxkIGxhYmVsIHtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNHB4O1xuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA0cHg7XG4gIH1cbmA7XG5cblxuY29uc3QgV3JhcHBlciA9IHN0eWxlZC5zcGFuPHsgYnV0dG9uOiBib29sZWFuLCBjb2xvcj86IENvbG9yVHlwZSB9PmBcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IGF1dG87XG5cbiAgJHsoeyBidXR0b24gfSkgPT4gYnV0dG9uID8gQnV0dG9uTGFiZWwgOiBSYWRpb0xhYmVsfVxuYDtcblxuaW50ZXJmYWNlIFByb3BzIGV4dGVuZHMgSW5wdXRIVE1MQXR0cmlidXRlczxIVE1MSW5wdXRFbGVtZW50PiB7XG4gIHZhbHVlOiBzdHJpbmcgfCBudW1iZXI7XG4gIGNoaWxkcmVuPzogYW55O1xuICBjaGVja2VkPzogYm9vbGVhbjtcbiAgYnV0dG9uPzogYm9vbGVhbjtcbiAgY29sb3I/OiBDb2xvclR5cGU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJhZGlvIGV4dGVuZHMgQ29tcG9uZW50PFByb3BzPiB7XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgbmFtZTogbnVsbCxcbiAgICBjaGlsZHJlbjogbnVsbCxcbiAgICBjaGVja2VkOiBmYWxzZSxcbiAgICBidXR0b246IGZhbHNlLFxuICAgIG9uQ2hhbmdlOiAoKSA9PiB7fSxcbiAgfTtcblxuICBpZCA9IGByYWRpb18ke3RoaXMucHJvcHMubmFtZX06JHt0aGlzLnByb3BzLnZhbHVlfWA7XG5cbiAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKHByb3BzOiBQcm9wcykge1xuICAgIHJldHVybiBwcm9wcy5jaGVja2VkICE9PSB0aGlzLnByb3BzLmNoZWNrZWQ7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjbGFzc05hbWUsIGNoaWxkcmVuLCBidXR0b24sIGNvbG9yLCBzdHlsZSwgLi4ucmVzdCB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPFdyYXBwZXIgY2xhc3NOYW1lPXtjbGFzc05hbWV9IGJ1dHRvbj17YnV0dG9uIX0gY29sb3I9e2NvbG9yfSBzdHlsZT17c3R5bGV9PlxuICAgICAgICA8aW5wdXQgaWQ9e3RoaXMuaWR9IHR5cGU9XCJyYWRpb1wiIHsuLi5yZXN0fSAvPlxuICAgICAgICA8bGFiZWwgaHRtbEZvcj17dGhpcy5pZH0+e2NoaWxkcmVufTwvbGFiZWw+XG4gICAgICA8L1dyYXBwZXI+XG4gICAgKTtcbiAgfVxufVxuIiwiLyogdHNsaW50OmRpc2FibGUgbWF4LWxpbmUtbGVuZ3RoICovXG5pbXBvcnQgUmVhY3QsIHsgU1ZHQXR0cmlidXRlcyB9IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwcm92ZWQocHJvcHM6IFNWR0F0dHJpYnV0ZXM8U1ZHU1ZHRWxlbWVudD4pIHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgIHdpZHRoPVwiMzBcIlxuICAgICAgaGVpZ2h0PVwiMzBcIlxuICAgICAgdmlld0JveD1cIjAgMCAzMCAzMFwiXG4gICAgICB7Li4ucHJvcHN9XG4gICAgPlxuICAgICAgPGcgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC04MCAtMjE1KVwiPlxuICAgICAgICA8ZyB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMTcgMzkpXCI+XG4gICAgICAgICAgPGcgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDYzIDE3NilcIiBmaWxsPVwibm9uZVwiPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgZD1cIk0gMTUgMjkgQyAxMS4yNjA0NzAzOTAzMTk4MiAyOSA3Ljc0NDc2MDAzNjQ2ODUwNiAyNy41NDM3NTA3NjI5Mzk0NSA1LjEwMDUxMDEyMDM5MTg0NiAyNC44OTk0OTAzNTY0NDUzMSBDIDIuNDU2MjQ5OTUyMzE2Mjg0IDIyLjI1NTIzOTQ4NjY5NDM0IDEgMTguNzM5NTMwNTYzMzU0NDkgMSAxNSBDIDEgMTEuMjYwNDcwMzkwMzE5ODIgMi40NTYyNDk5NTIzMTYyODQgNy43NDQ3NjAwMzY0Njg1MDYgNS4xMDA1MTAxMjAzOTE4NDYgNS4xMDA1MTAxMjAzOTE4NDYgQyA3Ljc0NDc2MDAzNjQ2ODUwNiAyLjQ1NjI0OTk1MjMxNjI4NCAxMS4yNjA0NzAzOTAzMTk4MiAxIDE1IDEgQyAxOC43Mzk1MzA1NjMzNTQ0OSAxIDIyLjI1NTIzOTQ4NjY5NDM0IDIuNDU2MjQ5OTUyMzE2Mjg0IDI0Ljg5OTQ5MDM1NjQ0NTMxIDUuMTAwNTEwMTIwMzkxODQ2IEMgMjcuNTQzNzUwNzYyOTM5NDUgNy43NDQ3NjAwMzY0Njg1MDYgMjkgMTEuMjYwNDcwMzkwMzE5ODIgMjkgMTUgQyAyOSAxOC43Mzk1MzA1NjMzNTQ0OSAyNy41NDM3NTA3NjI5Mzk0NSAyMi4yNTUyMzk0ODY2OTQzNCAyNC44OTk0OTAzNTY0NDUzMSAyNC44OTk0OTAzNTY0NDUzMSBDIDIyLjI1NTIzOTQ4NjY5NDM0IDI3LjU0Mzc1MDc2MjkzOTQ1IDE4LjczOTUzMDU2MzM1NDQ5IDI5IDE1IDI5IFpcIlxuICAgICAgICAgICAgICBzdHJva2U9XCJub25lXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICBkPVwiTSAxNSAyIEMgMTEuNTI3NTcwNzI0NDg3MyAyIDguMjYyOTkwOTUxNTM4MDg2IDMuMzUyMjM5NjA4NzY0NjQ4IDUuODA3NjA5NTU4MTA1NDY5IDUuODA3NjA5NTU4MTA1NDY5IEMgMy4zNTIyMzk2MDg3NjQ2NDggOC4yNjI5OTA5NTE1MzgwODYgMiAxMS41Mjc1NzA3MjQ0ODczIDIgMTUgQyAyIDE4LjQ3MjQzMTE4Mjg2MTMzIDMuMzUyMjM5NjA4NzY0NjQ4IDIxLjczNzAxMDk1NTgxMDU1IDUuODA3NjA5NTU4MTA1NDY5IDI0LjE5MjM5MDQ0MTg5NDUzIEMgOC4yNjI5OTA5NTE1MzgwODYgMjYuNjQ3NzYwMzkxMjM1MzUgMTEuNTI3NTcwNzI0NDg3MyAyOCAxNSAyOCBDIDE4LjQ3MjQzMTE4Mjg2MTMzIDI4IDIxLjczNzAxMDk1NTgxMDU1IDI2LjY0Nzc2MDM5MTIzNTM1IDI0LjE5MjM5MDQ0MTg5NDUzIDI0LjE5MjM5MDQ0MTg5NDUzIEMgMjYuNjQ3NzYwMzkxMjM1MzUgMjEuNzM3MDEwOTU1ODEwNTUgMjggMTguNDcyNDMxMTgyODYxMzMgMjggMTUgQyAyOCAxMS41Mjc1NzA3MjQ0ODczIDI2LjY0Nzc2MDM5MTIzNTM1IDguMjYyOTkwOTUxNTM4MDg2IDI0LjE5MjM5MDQ0MTg5NDUzIDUuODA3NjA5NTU4MTA1NDY5IEMgMjEuNzM3MDEwOTU1ODEwNTUgMy4zNTIyMzk2MDg3NjQ2NDggMTguNDcyNDMxMTgyODYxMzMgMiAxNSAyIE0gMTUgMCBDIDIzLjI4NDI2OTMzMjg4NTc0IDAgMzAgNi43MTU3MzA2NjcxMTQyNTggMzAgMTUgQyAzMCAyMy4yODQyNjkzMzI4ODU3NCAyMy4yODQyNjkzMzI4ODU3NCAzMCAxNSAzMCBDIDYuNzE1NzMwNjY3MTE0MjU4IDMwIDAgMjMuMjg0MjY5MzMyODg1NzQgMCAxNSBDIDAgNi43MTU3MzA2NjcxMTQyNTggNi43MTU3MzA2NjcxMTQyNTggMCAxNSAwIFpcIlxuICAgICAgICAgICAgICBzdHJva2U9XCJub25lXCJcbiAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZz5cbiAgICAgICAgPC9nPlxuICAgICAgICA8cGF0aFxuICAgICAgICAgIGQ9XCJNOC45MjUsMTUuODcxLDUuMDQ3LDExLjg4NiwzLjQxLDEzLjQxLDksMTksMjAuNTYyLDcuNDY3bC0xLjctMS41OTVaXCJcbiAgICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoODIuNTkgMjE3LjU5NSlcIlxuICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAvPlxuICAgICAgPC9nPlxuICAgIDwvc3ZnPlxuICApO1xufVxuIiwiLyogdHNsaW50OmRpc2FibGUgbWF4LWxpbmUtbGVuZ3RoICovXG5pbXBvcnQgUmVhY3QsIHsgU1ZHQXR0cmlidXRlcyB9IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2hldnJvbkxlZnRSb3VuZChwcm9wczogU1ZHQXR0cmlidXRlczxTVkdTVkdFbGVtZW50Pikge1xuICByZXR1cm4gKFxuICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMzBcIiBoZWlnaHQ9XCIzMFwiIHZpZXdCb3g9XCIwIDAgMzAgMzBcIiB7Li4ucHJvcHN9PlxuICAgICAgPGcgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC0zNiAtMzYpXCI+XG4gICAgICAgIDxnIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgzNiAzNilcIiBmaWxsPVwibm9uZVwiPlxuICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICBkPVwiTSAxNSAyOSBDIDExLjI2MDQ3MDM5MDMxOTgyIDI5IDcuNzQ0NzYwMDM2NDY4NTA2IDI3LjU0Mzc1MDc2MjkzOTQ1IDUuMTAwNTEwMTIwMzkxODQ2IDI0Ljg5OTQ5MDM1NjQ0NTMxIEMgMi40NTYyNDk5NTIzMTYyODQgMjIuMjU1MjM5NDg2Njk0MzQgMSAxOC43Mzk1MzA1NjMzNTQ0OSAxIDE1IEMgMSAxMS4yNjA0NzAzOTAzMTk4MiAyLjQ1NjI0OTk1MjMxNjI4NCA3Ljc0NDc2MDAzNjQ2ODUwNiA1LjEwMDUxMDEyMDM5MTg0NiA1LjEwMDUxMDEyMDM5MTg0NiBDIDcuNzQ0NzYwMDM2NDY4NTA2IDIuNDU2MjQ5OTUyMzE2Mjg0IDExLjI2MDQ3MDM5MDMxOTgyIDEgMTUgMSBDIDE4LjczOTUzMDU2MzM1NDQ5IDEgMjIuMjU1MjM5NDg2Njk0MzQgMi40NTYyNDk5NTIzMTYyODQgMjQuODk5NDkwMzU2NDQ1MzEgNS4xMDA1MTAxMjAzOTE4NDYgQyAyNy41NDM3NTA3NjI5Mzk0NSA3Ljc0NDc2MDAzNjQ2ODUwNiAyOSAxMS4yNjA0NzAzOTAzMTk4MiAyOSAxNSBDIDI5IDE4LjczOTUzMDU2MzM1NDQ5IDI3LjU0Mzc1MDc2MjkzOTQ1IDIyLjI1NTIzOTQ4NjY5NDM0IDI0Ljg5OTQ5MDM1NjQ0NTMxIDI0Ljg5OTQ5MDM1NjQ0NTMxIEMgMjIuMjU1MjM5NDg2Njk0MzQgMjcuNTQzNzUwNzYyOTM5NDUgMTguNzM5NTMwNTYzMzU0NDkgMjkgMTUgMjkgWlwiXG4gICAgICAgICAgICBzdHJva2U9XCJub25lXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICBkPVwiTSAxNSAyIEMgMTEuNTI3NTcwNzI0NDg3MyAyIDguMjYyOTkwOTUxNTM4MDg2IDMuMzUyMjM5NjA4NzY0NjQ4IDUuODA3NjA5NTU4MTA1NDY5IDUuODA3NjA5NTU4MTA1NDY5IEMgMy4zNTIyMzk2MDg3NjQ2NDggOC4yNjI5OTA5NTE1MzgwODYgMiAxMS41Mjc1NzA3MjQ0ODczIDIgMTUgQyAyIDE4LjQ3MjQzMTE4Mjg2MTMzIDMuMzUyMjM5NjA4NzY0NjQ4IDIxLjczNzAxMDk1NTgxMDU1IDUuODA3NjA5NTU4MTA1NDY5IDI0LjE5MjM5MDQ0MTg5NDUzIEMgOC4yNjI5OTA5NTE1MzgwODYgMjYuNjQ3NzYwMzkxMjM1MzUgMTEuNTI3NTcwNzI0NDg3MyAyOCAxNSAyOCBDIDE4LjQ3MjQzMTE4Mjg2MTMzIDI4IDIxLjczNzAxMDk1NTgxMDU1IDI2LjY0Nzc2MDM5MTIzNTM1IDI0LjE5MjM5MDQ0MTg5NDUzIDI0LjE5MjM5MDQ0MTg5NDUzIEMgMjYuNjQ3NzYwMzkxMjM1MzUgMjEuNzM3MDEwOTU1ODEwNTUgMjggMTguNDcyNDMxMTgyODYxMzMgMjggMTUgQyAyOCAxMS41Mjc1NzA3MjQ0ODczIDI2LjY0Nzc2MDM5MTIzNTM1IDguMjYyOTkwOTUxNTM4MDg2IDI0LjE5MjM5MDQ0MTg5NDUzIDUuODA3NjA5NTU4MTA1NDY5IEMgMjEuNzM3MDEwOTU1ODEwNTUgMy4zNTIyMzk2MDg3NjQ2NDggMTguNDcyNDMxMTgyODYxMzMgMiAxNSAyIE0gMTUgMCBDIDIzLjI4NDI2OTMzMjg4NTc0IDAgMzAgNi43MTU3MzA2NjcxMTQyNTggMzAgMTUgQyAzMCAyMy4yODQyNjkzMzI4ODU3NCAyMy4yODQyNjkzMzI4ODU3NCAzMCAxNSAzMCBDIDYuNzE1NzMwNjY3MTE0MjU4IDMwIDAgMjMuMjg0MjY5MzMyODg1NzQgMCAxNSBDIDAgNi43MTU3MzA2NjcxMTQyNTggNi43MTU3MzA2NjcxMTQyNTggMCAxNSAwIFpcIlxuICAgICAgICAgICAgc3Ryb2tlPVwibm9uZVwiXG4gICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L2c+XG4gICAgICAgIDxnIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgtMjA3IC0yMTM2KVwiPlxuICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICBkPVwiTTE4MTEuMTgyLDQzNjIuMzQybC03LjU2Nyw2LjczMSw3LjU2Nyw2LjJcIlxuICAgICAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC0xNTUwLjExNiAtMjE4MS44NDIpXCJcbiAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICBzdHJva2VXaWR0aD1cIjJcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZz5cbiAgICAgIDwvZz5cbiAgICA8L3N2Zz5cbiAgKTtcbn1cbiIsIi8qIHRzbGludDpkaXNhYmxlIG1heC1saW5lLWxlbmd0aCAqL1xuaW1wb3J0IFJlYWN0LCB7IFNWR0F0dHJpYnV0ZXMgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2hldnJvblJpZ2h0Um91bmQocHJvcHM6IFNWR0F0dHJpYnV0ZXM8U1ZHU1ZHRWxlbWVudD4pIHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgIHdpZHRoPVwiMzBcIlxuICAgICAgaGVpZ2h0PVwiMzBcIlxuICAgICAgdmlld0JveD1cIjAgMCAzMCAzMFwiXG4gICAgICB7Li4ucHJvcHN9XG4gICAgPlxuICAgICAgPGcgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDkzIDIwNikgcm90YXRlKDE4MClcIj5cbiAgICAgICAgPGcgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDYzIDE3NilcIiBmaWxsPVwibm9uZVwiPlxuICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICBkPVwiTSAxNSAyOSBDIDExLjI2MDQ3MDM5MDMxOTgyIDI5IDcuNzQ0NzYwMDM2NDY4NTA2IDI3LjU0Mzc1MDc2MjkzOTQ1IDUuMTAwNTEwMTIwMzkxODQ2IDI0Ljg5OTQ5MDM1NjQ0NTMxIEMgMi40NTYyNDk5NTIzMTYyODQgMjIuMjU1MjM5NDg2Njk0MzQgMSAxOC43Mzk1MzA1NjMzNTQ0OSAxIDE1IEMgMSAxMS4yNjA0NzAzOTAzMTk4MiAyLjQ1NjI0OTk1MjMxNjI4NCA3Ljc0NDc2MDAzNjQ2ODUwNiA1LjEwMDUxMDEyMDM5MTg0NiA1LjEwMDUxMDEyMDM5MTg0NiBDIDcuNzQ0NzYwMDM2NDY4NTA2IDIuNDU2MjQ5OTUyMzE2Mjg0IDExLjI2MDQ3MDM5MDMxOTgyIDEgMTUgMSBDIDE4LjczOTUzMDU2MzM1NDQ5IDEgMjIuMjU1MjM5NDg2Njk0MzQgMi40NTYyNDk5NTIzMTYyODQgMjQuODk5NDkwMzU2NDQ1MzEgNS4xMDA1MTAxMjAzOTE4NDYgQyAyNy41NDM3NTA3NjI5Mzk0NSA3Ljc0NDc2MDAzNjQ2ODUwNiAyOSAxMS4yNjA0NzAzOTAzMTk4MiAyOSAxNSBDIDI5IDE4LjczOTUzMDU2MzM1NDQ5IDI3LjU0Mzc1MDc2MjkzOTQ1IDIyLjI1NTIzOTQ4NjY5NDM0IDI0Ljg5OTQ5MDM1NjQ0NTMxIDI0Ljg5OTQ5MDM1NjQ0NTMxIEMgMjIuMjU1MjM5NDg2Njk0MzQgMjcuNTQzNzUwNzYyOTM5NDUgMTguNzM5NTMwNTYzMzU0NDkgMjkgMTUgMjkgWlwiXG4gICAgICAgICAgICBzdHJva2U9XCJub25lXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICBkPVwiTSAxNSAyIEMgMTEuNTI3NTcwNzI0NDg3MyAyIDguMjYyOTkwOTUxNTM4MDg2IDMuMzUyMjM5NjA4NzY0NjQ4IDUuODA3NjA5NTU4MTA1NDY5IDUuODA3NjA5NTU4MTA1NDY5IEMgMy4zNTIyMzk2MDg3NjQ2NDggOC4yNjI5OTA5NTE1MzgwODYgMiAxMS41Mjc1NzA3MjQ0ODczIDIgMTUgQyAyIDE4LjQ3MjQzMTE4Mjg2MTMzIDMuMzUyMjM5NjA4NzY0NjQ4IDIxLjczNzAxMDk1NTgxMDU1IDUuODA3NjA5NTU4MTA1NDY5IDI0LjE5MjM5MDQ0MTg5NDUzIEMgOC4yNjI5OTA5NTE1MzgwODYgMjYuNjQ3NzYwMzkxMjM1MzUgMTEuNTI3NTcwNzI0NDg3MyAyOCAxNSAyOCBDIDE4LjQ3MjQzMTE4Mjg2MTMzIDI4IDIxLjczNzAxMDk1NTgxMDU1IDI2LjY0Nzc2MDM5MTIzNTM1IDI0LjE5MjM5MDQ0MTg5NDUzIDI0LjE5MjM5MDQ0MTg5NDUzIEMgMjYuNjQ3NzYwMzkxMjM1MzUgMjEuNzM3MDEwOTU1ODEwNTUgMjggMTguNDcyNDMxMTgyODYxMzMgMjggMTUgQyAyOCAxMS41Mjc1NzA3MjQ0ODczIDI2LjY0Nzc2MDM5MTIzNTM1IDguMjYyOTkwOTUxNTM4MDg2IDI0LjE5MjM5MDQ0MTg5NDUzIDUuODA3NjA5NTU4MTA1NDY5IEMgMjEuNzM3MDEwOTU1ODEwNTUgMy4zNTIyMzk2MDg3NjQ2NDggMTguNDcyNDMxMTgyODYxMzMgMiAxNSAyIE0gMTUgMCBDIDIzLjI4NDI2OTMzMjg4NTc0IDAgMzAgNi43MTU3MzA2NjcxMTQyNTggMzAgMTUgQyAzMCAyMy4yODQyNjkzMzI4ODU3NCAyMy4yODQyNjkzMzI4ODU3NCAzMCAxNSAzMCBDIDYuNzE1NzMwNjY3MTE0MjU4IDMwIDAgMjMuMjg0MjY5MzMyODg1NzQgMCAxNSBDIDAgNi43MTU3MzA2NjcxMTQyNTggNi43MTU3MzA2NjcxMTQyNTggMCAxNSAwIFpcIlxuICAgICAgICAgICAgc3Ryb2tlPVwibm9uZVwiXG4gICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L2c+XG4gICAgICAgIDxnIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgtMTgwIC0xOTk2KVwiPlxuICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICBkPVwiTTE4MTEuMTgyLDQzNjIuMzQybC03LjU2Nyw2LjczMSw3LjU2Nyw2LjJcIlxuICAgICAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC0xNTUwLjExNiAtMjE4MS44NDIpXCJcbiAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICBzdHJva2VXaWR0aD1cIjJcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZz5cbiAgICAgIDwvZz5cbiAgICA8L3N2Zz5cbiAgKTtcbn1cbiIsIi8qIHRzbGludDpkaXNhYmxlIG1heC1saW5lLWxlbmd0aCAqL1xuaW1wb3J0IFJlYWN0LCB7IFNWR0F0dHJpYnV0ZXMgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRmlsZVJvdW5kKHByb3BzOiBTVkdBdHRyaWJ1dGVzPFNWR1NWR0VsZW1lbnQ+KSB7XG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICB3aWR0aD1cIjMwXCJcbiAgICAgIGhlaWdodD1cIjMwXCJcbiAgICAgIHZpZXdCb3g9XCIwIDAgMzAgMzBcIlxuICAgICAgey4uLnByb3BzfVxuICAgID5cbiAgICAgIDxnIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgtNDY4IC0zODMpXCI+XG4gICAgICAgIDxnIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSg0MDUgMjA3KVwiPlxuICAgICAgICAgIDxnIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSg2MyAxNzYpXCIgZmlsbD1cIm5vbmVcIj5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgIGQ9XCJNIDE1IDI5IEMgMTEuMjYwNDcwMzkwMzE5ODIgMjkgNy43NDQ3NjAwMzY0Njg1MDYgMjcuNTQzNzUwNzYyOTM5NDUgNS4xMDA1MTAxMjAzOTE4NDYgMjQuODk5NDkwMzU2NDQ1MzEgQyAyLjQ1NjI0OTk1MjMxNjI4NCAyMi4yNTUyMzk0ODY2OTQzNCAxIDE4LjczOTUzMDU2MzM1NDQ5IDEgMTUgQyAxIDExLjI2MDQ3MDM5MDMxOTgyIDIuNDU2MjQ5OTUyMzE2Mjg0IDcuNzQ0NzYwMDM2NDY4NTA2IDUuMTAwNTEwMTIwMzkxODQ2IDUuMTAwNTEwMTIwMzkxODQ2IEMgNy43NDQ3NjAwMzY0Njg1MDYgMi40NTYyNDk5NTIzMTYyODQgMTEuMjYwNDcwMzkwMzE5ODIgMSAxNSAxIEMgMTguNzM5NTMwNTYzMzU0NDkgMSAyMi4yNTUyMzk0ODY2OTQzNCAyLjQ1NjI0OTk1MjMxNjI4NCAyNC44OTk0OTAzNTY0NDUzMSA1LjEwMDUxMDEyMDM5MTg0NiBDIDI3LjU0Mzc1MDc2MjkzOTQ1IDcuNzQ0NzYwMDM2NDY4NTA2IDI5IDExLjI2MDQ3MDM5MDMxOTgyIDI5IDE1IEMgMjkgMTguNzM5NTMwNTYzMzU0NDkgMjcuNTQzNzUwNzYyOTM5NDUgMjIuMjU1MjM5NDg2Njk0MzQgMjQuODk5NDkwMzU2NDQ1MzEgMjQuODk5NDkwMzU2NDQ1MzEgQyAyMi4yNTUyMzk0ODY2OTQzNCAyNy41NDM3NTA3NjI5Mzk0NSAxOC43Mzk1MzA1NjMzNTQ0OSAyOSAxNSAyOSBaXCJcbiAgICAgICAgICAgICAgc3Ryb2tlPVwibm9uZVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgZD1cIk0gMTUgMiBDIDExLjUyNzU3MDcyNDQ4NzMgMiA4LjI2Mjk5MDk1MTUzODA4NiAzLjM1MjIzOTYwODc2NDY0OCA1LjgwNzYwOTU1ODEwNTQ2OSA1LjgwNzYwOTU1ODEwNTQ2OSBDIDMuMzUyMjM5NjA4NzY0NjQ4IDguMjYyOTkwOTUxNTM4MDg2IDIgMTEuNTI3NTcwNzI0NDg3MyAyIDE1IEMgMiAxOC40NzI0MzExODI4NjEzMyAzLjM1MjIzOTYwODc2NDY0OCAyMS43MzcwMTA5NTU4MTA1NSA1LjgwNzYwOTU1ODEwNTQ2OSAyNC4xOTIzOTA0NDE4OTQ1MyBDIDguMjYyOTkwOTUxNTM4MDg2IDI2LjY0Nzc2MDM5MTIzNTM1IDExLjUyNzU3MDcyNDQ4NzMgMjggMTUgMjggQyAxOC40NzI0MzExODI4NjEzMyAyOCAyMS43MzcwMTA5NTU4MTA1NSAyNi42NDc3NjAzOTEyMzUzNSAyNC4xOTIzOTA0NDE4OTQ1MyAyNC4xOTIzOTA0NDE4OTQ1MyBDIDI2LjY0Nzc2MDM5MTIzNTM1IDIxLjczNzAxMDk1NTgxMDU1IDI4IDE4LjQ3MjQzMTE4Mjg2MTMzIDI4IDE1IEMgMjggMTEuNTI3NTcwNzI0NDg3MyAyNi42NDc3NjAzOTEyMzUzNSA4LjI2Mjk5MDk1MTUzODA4NiAyNC4xOTIzOTA0NDE4OTQ1MyA1LjgwNzYwOTU1ODEwNTQ2OSBDIDIxLjczNzAxMDk1NTgxMDU1IDMuMzUyMjM5NjA4NzY0NjQ4IDE4LjQ3MjQzMTE4Mjg2MTMzIDIgMTUgMiBNIDE1IDAgQyAyMy4yODQyNjkzMzI4ODU3NCAwIDMwIDYuNzE1NzMwNjY3MTE0MjU4IDMwIDE1IEMgMzAgMjMuMjg0MjY5MzMyODg1NzQgMjMuMjg0MjY5MzMyODg1NzQgMzAgMTUgMzAgQyA2LjcxNTczMDY2NzExNDI1OCAzMCAwIDIzLjI4NDI2OTMzMjg4NTc0IDAgMTUgQyAwIDYuNzE1NzMwNjY3MTE0MjU4IDYuNzE1NzMwNjY3MTE0MjU4IDAgMTUgMCBaXCJcbiAgICAgICAgICAgICAgc3Ryb2tlPVwibm9uZVwiXG4gICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2c+XG4gICAgICAgIDwvZz5cbiAgICAgICAgPGcgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDM4NCAyMDgpXCI+XG4gICAgICAgICAgPGdcbiAgICAgICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSg5MyAxODIpXCJcbiAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICBzdHJva2VXaWR0aD1cIjJcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxyZWN0IHdpZHRoPVwiMTJcIiBoZWlnaHQ9XCIxNlwiIHJ4PVwiMVwiIHN0cm9rZT1cIm5vbmVcIiAvPlxuICAgICAgICAgICAgPHJlY3QgeD1cIjFcIiB5PVwiMVwiIHdpZHRoPVwiMTBcIiBoZWlnaHQ9XCIxNFwiIGZpbGw9XCJub25lXCIgLz5cbiAgICAgICAgICA8L2c+XG4gICAgICAgICAgPHJlY3RcbiAgICAgICAgICAgIHdpZHRoPVwiNFwiXG4gICAgICAgICAgICBoZWlnaHQ9XCIxLjNcIlxuICAgICAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDk3IDE4NilcIlxuICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8cmVjdFxuICAgICAgICAgICAgd2lkdGg9XCI0XCJcbiAgICAgICAgICAgIGhlaWdodD1cIjEuM1wiXG4gICAgICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoOTcgMTg5KVwiXG4gICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxyZWN0XG4gICAgICAgICAgICB3aWR0aD1cIjRcIlxuICAgICAgICAgICAgaGVpZ2h0PVwiMS4zXCJcbiAgICAgICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSg5NyAxOTIpXCJcbiAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZz5cbiAgICAgIDwvZz5cbiAgICA8L3N2Zz5cbiAgKTtcbn1cbiIsImltcG9ydCBSZWFjdCwgeyBTVkdBdHRyaWJ1dGVzIH0gZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQZW5jaWwocHJvcHM6IFNWR0F0dHJpYnV0ZXM8U1ZHU1ZHRWxlbWVudD4pIHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgIHdpZHRoPVwiMTcuNzk2XCJcbiAgICAgIGhlaWdodD1cIjE3LjkwOFwiXG4gICAgICB2aWV3Qm94PVwiMCAwIDE3Ljc5NiAxNy45MDhcIlxuICAgICAgey4uLnByb3BzfVxuICAgID5cbiAgICAgIDxnPlxuICAgICAgICA8Zz5cbiAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgZD1cIk0xLjI1NCwxMi42NzQuNSwxNy40MDhsNC43MjYtLjhMMTcuMyw0LjQ3MiwxMy4yODEuNVpcIlxuICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXG4gICAgICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcbiAgICAgICAgICAgIHN0cm9rZVdpZHRoPVwiMVwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9nPlxuICAgICAgICA8bGluZVxuICAgICAgICAgIHgyPVwiMy44NTFcIlxuICAgICAgICAgIHkyPVwiMy44MzhcIlxuICAgICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgxLjM3NSAxMi43NjYpXCJcbiAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxuICAgICAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxuICAgICAgICAgIHN0cm9rZVdpZHRoPVwiMVwiXG4gICAgICAgIC8+XG4gICAgICAgIDxsaW5lXG4gICAgICAgICAgeDI9XCIzLjgzNlwiXG4gICAgICAgICAgeTI9XCIzLjgwMVwiXG4gICAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDEwLjk0OSAyLjk1OSlcIlxuICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXG4gICAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXG4gICAgICAgICAgc3Ryb2tlV2lkdGg9XCIxXCJcbiAgICAgICAgLz5cbiAgICAgIDwvZz5cbiAgICA8L3N2Zz5cbiAgKTtcbn1cbiIsIi8qIHRzbGludDpkaXNhYmxlIG1heC1saW5lLWxlbmd0aCAqL1xuaW1wb3J0IFJlYWN0LCB7IFNWR0F0dHJpYnV0ZXMgfSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFVzZXIocHJvcHM6IFNWR0F0dHJpYnV0ZXM8U1ZHU1ZHRWxlbWVudD4pIHtcbiAgcmV0dXJuKFxuICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMzBcIiBoZWlnaHQ9XCIzMFwiIHZpZXdCb3g9XCIwIDAgMzAgMzBcIiB7Li4ucHJvcHN9PlxuICAgIDxnIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgtNDY4IC0zODMpXCI+XG4gICAgICA8ZyB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoNDY4IDM4MylcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZVdpZHRoPVwiMlwiPlxuICAgICAgICA8Y2lyY2xlIGN4PVwiMTVcIiBjeT1cIjE1XCIgcj1cIjE1XCIgc3Ryb2tlPVwibm9uZVwiLz5cbiAgICAgICAgPGNpcmNsZSBjeD1cIjE1XCIgY3k9XCIxNVwiIHI9XCIxNFwiIGZpbGw9XCJub25lXCIvPlxuICAgICAgPC9nPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD1cIk0tNC0zMTBhNi4wMTgsNi4wMTgsMCwwLDEsNi02SDRhNi4wMTgsNi4wMTgsMCwwLDEsNiw2Wm0yLjYtMkg3LjVBNC4wMzMsNC4wMzMsMCwwLDAsNC0zMTRIMi4xQTQuMDM1LDQuMDM1LDAsMCwwLTEuNC0zMTJabS40LTl2LTFhNC4wMTIsNC4wMTIsMCwwLDEsNC00LDQuMDEyLDQuMDEyLDAsMCwxLDQsNHYxYTQuMDEyLDQuMDEyLDAsMCwxLTQsNEE0LjAxMiw0LjAxMiwwLDAsMS0xLTMyMVptMi0xdjFhMi4wMDYsMi4wMDYsMCwwLDAsMiwyLDIuMDA2LDIuMDA2LDAsMCwwLDItMnYtMWEyLjAwNiwyLjAwNiwwLDAsMC0yLTJBMi4wMDYsMi4wMDYsMCwwLDAsMS0zMjJaXCJcbiAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDQ4MCA3MTYpXCJcbiAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICAvPlxuICAgIDwvZz5cbiAgPC9zdmc+XG4gICk7XG59XG4iLCIvKiB0c2xpbnQ6ZGlzYWJsZSBtYXgtbGluZS1sZW5ndGggKi9cbmltcG9ydCBSZWFjdCwgeyBTVkdBdHRyaWJ1dGVzIH0gZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDbG9zZShwcm9wczogU1ZHQXR0cmlidXRlczxTVkdTVkdFbGVtZW50Pikge1xuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgd2lkdGg9XCIzMFwiXG4gICAgICBoZWlnaHQ9XCIzMFwiXG4gICAgICB2aWV3Qm94PVwiMCAwIDMwIDMwXCJcbiAgICAgIHBvaW50ZXJFdmVudHM9XCJib3VuZGluZy1ib3hcIlxuICAgICAgey4uLnByb3BzfVxuICAgID5cbiAgICAgIDxnIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgtMTMxIC01NzEpXCI+XG4gICAgICAgIDxnIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgxMzIgNTcyKVwiPlxuICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICBkPVwiTTI4LjUsMjYsMTYsMTMuNSwyOC41LDFcIlxuICAgICAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC0zLjUwMSAtMSlcIlxuICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXG4gICAgICAgICAgICBzdHJva2VNaXRlcmxpbWl0PVwiMTBcIlxuICAgICAgICAgICAgc3Ryb2tlV2lkdGg9XCIyXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICBkPVwiTTEsMjYsMTMuNSwxMy41LDEsMVwiXG4gICAgICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTEgLTEpXCJcbiAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxuICAgICAgICAgICAgc3Ryb2tlTWl0ZXJsaW1pdD1cIjEwXCJcbiAgICAgICAgICAgIHN0cm9rZVdpZHRoPVwiMlwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9nPlxuICAgICAgPC9nPlxuICAgIDwvc3ZnPlxuICApO1xufVxuIiwiLyogdHNsaW50OmRpc2FibGUgbWF4LWxpbmUtbGVuZ3RoICovXG5pbXBvcnQgUmVhY3QsIHsgU1ZHQXR0cmlidXRlcyB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSZWZyZXNoKHByb3BzOiBTVkdBdHRyaWJ1dGVzPFNWR1NWR0VsZW1lbnQ+KSB7XG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICB3aWR0aD1cIjMwXCJcbiAgICAgIGhlaWdodD1cIjMwXCJcbiAgICAgIHZpZXdCb3g9XCIwIDAgMzAgMzBcIlxuICAgICAgey4uLnByb3BzfVxuICAgID5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9XCJNMjQuMDY1LDlBMTUuMDY5LDE1LjA2OSwwLDAsMCw5LjE0MiwyMi4xMDVhMS4yNTYsMS4yNTYsMCwxLDAsMi40NzguNDA2YzAtLjAyNy4wMDgtLjA1NS4wMS0uMDgyYTEyLjUyLDEyLjUyLDAsMCwxLDIxLjMtNy4yMjZsLTIuNTg0LDIuNTg0LDcuNTMyLDEuMjU1LTEuMjU1LTcuNTMyLTEuOTIsMS45MkExNSwxNSwwLDAsMCwyNC4wNjUsOVptMTMuNywxNS41ODlBMS4yNTUsMS4yNTUsMCwwLDAsMzYuNSwyNS43YTEyLjUxMiwxMi41MTIsMCwwLDEtMjEuODkzLDYuNTY5bDEuOTI3LTEuOTI3TDksMjkuMDg2bDEuMjU1LDcuNTMyLDIuNTcyLTIuNTcyYTE1LjAyLDE1LjAyLDAsMCwwLDI2LjE2LTguMDIzQTEuMjU2LDEuMjU2LDAsMCwwLDM3LjkyMywyNC42LDEuMjczLDEuMjczLDAsMCwwLDM3Ljc2MywyNC41ODlaXCJcbiAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC05IC05KVwiXG4gICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgLz5cbiAgICA8L3N2Zz5cbiAgKTtcbn1cbiIsIlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2V0QWxpZ24oeyBhbGlnbiB9OiB7IGFsaWduPzogJ2xlZnQnIHwgJ3JpZ2h0JyB8ICdjZW50ZXInIH0pIHtcbiAgc3dpdGNoIChhbGlnbikge1xuICAgIGNhc2UgJ2xlZnQnOlxuICAgICAgcmV0dXJuICdmbGV4LXN0YXJ0JztcbiAgICBjYXNlICdyaWdodCc6XG4gICAgICByZXR1cm4gJ2ZsZXgtZW5kJztcbiAgICBjYXNlICdjZW50ZXInOlxuICAgICAgcmV0dXJuICdjZW50ZXInO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gJ3NwYWNlLWV2ZW5seSc7XG4gIH1cbn1cbiIsImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50LCBIVE1MQXR0cmlidXRlcyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB0cmFuc3BhcmVudGl6ZSBmcm9tICdwb2xpc2hlZC9saWIvY29sb3IvdHJhbnNwYXJlbnRpemUnO1xuaW1wb3J0IHN0eWxlZCwgeyBjc3MgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgZmluZENvbG9ySW52ZXJ0IGZyb20gJy4uLy4uL3V0aWxzL2ZpbmRDb2xvckludmVydCc7XG5pbXBvcnQgaGFtYnVnZXIgZnJvbSAnLi4vLi4vdXRpbHMvaGFtYnVnZXInO1xuaW1wb3J0IHNldEFsaWduIGZyb20gJy4uLy4uL3V0aWxzL3NldEFsaWduJztcbmltcG9ydCB7IG1lZGlhVGFibGV0LCBtZWRpYVVudGlsRnVsbEhELCBtZWRpYU1vYmlsZSB9IGZyb20gJy4uLy4uL3V0aWxzL21lZGlhJztcbmltcG9ydCB7IENvbG9yVHlwZSwgQWxpZ25UeXBlLCBDU1NUeXBlLCBUaGVtZVR5cGUgfSBmcm9tICcuLi8uLi90eXBlcyc7XG5cbmZ1bmN0aW9uIHNldENvbG9yKFxuICB7IGNvbG9yLCB0aGVtZSwgYmFja2Ryb3AgfTogeyBjb2xvcj86IENvbG9yVHlwZSwgdGhlbWU6IFRoZW1lVHlwZSwgYmFja2Ryb3A/OiBib29sZWFuIH0sXG4pIHtcbiAgY29uc3QgYmFja2dyb3VuZENvbG9yID0gY29sb3IgPyB0aGVtZVtjb2xvcl0gOiAndHJhbnNwYXJlbnQnO1xuICBjb25zdCB0ZXh0Q29sb3IgPVxuICAgIGZpbmRDb2xvckludmVydCh0aGVtZSwgYmFja2dyb3VuZENvbG9yID09PSAndHJhbnNwYXJlbnQnID8gdGhlbWUuYmFja2dyb3VuZCA6IGJhY2tncm91bmRDb2xvcik7XG5cbiAgaWYgKGJhY2tkcm9wKSB7XG4gICAgY29uc3QgYmFja0NvbG9yID1cbiAgICAgIHRyYW5zcGFyZW50aXplKDAuMiwgKGJhY2tncm91bmRDb2xvciA9PT0gJ3RyYW5zcGFyZW50JyA/IHRoZW1lLndoaXRlIDogYmFja2dyb3VuZENvbG9yKSk7XG4gICAgY29uc3QgdWEgPSBuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCk7XG4gICAgaWYgKHVhLmluZGV4T2YoJ3NhZmFyaScpID4gLTEgJiYgdWEuaW5kZXhPZignY2hyb21lJykgPT09IC0xKSB7XG4gICAgICByZXR1cm4gY3NzYGJhY2tncm91bmQtY29sb3I6ICR7YmFja0NvbG9yfTsgY29sb3I6ICR7dGV4dENvbG9yfTsgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDhweCk7YDtcbiAgICB9XG5cbiAgICByZXR1cm4gY3NzYFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtiYWNrQ29sb3J9O1xuICAgICAgY29sb3I6ICR7dGV4dENvbG9yfTtcbiAgICBgO1xuICB9XG5cbiAgcmV0dXJuIGNzc2BiYWNrZ3JvdW5kLWNvbG9yOiAke2JhY2tncm91bmRDb2xvcn07IGNvbG9yOiAke3RleHRDb2xvcn07YDtcbn1cblxuaW50ZXJmYWNlIE5hdlByb3BzIHtcbiAgY29sb3I/OiBDb2xvclR5cGU7XG4gIGJhY2tkcm9wPzogYm9vbGVhbjtcbiAgZml4ZWQ/OiBib29sZWFuO1xuICBzdGlja3k/OiBib29sZWFuO1xuICBmbHVpZD86IGJvb2xlYW47XG4gIHNob3c/OiBib29sZWFuO1xuICBzdHlsZT86IGFueTtcbiAgYWxpZ24/OiBBbGlnblR5cGU7XG4gIHJvbGU6IHN0cmluZztcbiAgY3NzPzogQ1NTVHlwZTtcbn1cblxuY29uc3QgTmF2QmFyID0gc3R5bGVkLmhlYWRlcjxOYXZQcm9wcz5gXG4gIHBvc2l0aW9uOiAke1xuICAgICh7IGZpeGVkLCBzdGlja3kgfSkgPT4gKCEoc3RpY2t5IHx8IGZpeGVkKSA/ICdyZWxhdGl2ZScgOiAoZml4ZWQgPyAnZml4ZWQnIDogJ3N0aWNreScpKVxuICB9O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3RyZXRjaDtcbiAgdG9wOiAtMXB4O1xuXG4gIG1pbi1oZWlnaHQ6IDMuMjVyZW07XG4gIHdpZHRoOiAxMDAlO1xuICB6LWluZGV4OiAzMDtcblxuICAke3NldENvbG9yfVxuXG4gIGEgeyBjb2xvcjogaW5oZXJpdDsgfVxuXG4gICR7bWVkaWFUYWJsZXR9IHtcbiAgICBwYWRkaW5nOiAkeyh7IGZsdWlkIH06IE5hdlByb3BzKSA9PiBmbHVpZCA/ICcwIDAuNXJlbScgOiAnMCAzJSd9O1xuICB9XG4gICR7bWVkaWFVbnRpbEZ1bGxIRH0ge1xuICAgIHBhZGRpbmc6ICR7KHsgZmx1aWQgfTogTmF2UHJvcHMpID0+IGZsdWlkID8gJzAgMC43NXJlbScgOiAnMCA1JSd9O1xuICB9XG4gICR7KHsgY3NzIH0pID0+IGNzcyB8fCB7fX1cbmA7XG5cbmNvbnN0IEJ1cmdlciA9IHN0eWxlZC5idXR0b25gXG4gICR7aGFtYnVnZXIoJzMuMjVyZW0nKX1cbiAgZGlzcGxheTogbm9uZTtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiBpbmhlcml0O1xuXG4gIG91dGxpbmU6IG5vbmU7XG5cbiAgJjpob3ZlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIC4wNSk7XG4gIH1cblxuICAke21lZGlhTW9iaWxlfSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbmA7XG5cbmludGVyZmFjZSBDb250ZW50UHJvcHMge1xuICBjb2xvcj86IENvbG9yVHlwZTtcbiAgc2hvdz86IGJvb2xlYW47XG4gIGFsaWduPzogJ2xlZnQnIHwgJ3JpZ2h0Jztcbn1cblxuY29uc3QgTmF2Q29udGVudCA9IHN0eWxlZC5kaXY8Q29udGVudFByb3BzPmBcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LWJhc2lzOiBhdXRvO1xuICBmbGV4LWdyb3c6IDE7XG5cbiAgJiA+IHVsIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICBmbGV4LWdyb3c6IDE7XG4gICAganVzdGlmeS1jb250ZW50OiAke3NldEFsaWdufTtcblxuICAgIGxpIHtcbiAgICAgIHBhZGRpbmc6IDAgMC43NXJlbTtcbiAgICB9XG4gIH1cblxuICAmID4gZGl2LCAmID4gc3BhbiwgJiA+IGZvcm0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgJHsoeyBjb2xvciB9KSA9PiAoY29sb3IgPyBgY29sb3I6ICR7Y29sb3J9O2AgOiAnJyl9XG4gIH1cblxuICAke21lZGlhTW9iaWxlfSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcblxuICAgIHBhZGRpbmctYm90dG9tOiAwLjVyZW07XG5cbiAgICBidXR0b246bm90KC5hY3RpdmUpKyYge1xuICAgICAgZGlzcGxheTpub25lO1xuICAgIH1cblxuICAgICYgPiB1bCB7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBsaSB7XG4gICAgICAgIHBhZGRpbmc6IC41cmVtIDA7XG4gICAgICB9XG4gICAgfVxuXG4gICAgJiA+IGRpdiwgJiA+IHNwYW4sICYgPiBmb3JtIHtcbiAgICAgIHBhZGRpbmc6IC41cmVtIDA7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG4gIH1cbmA7XG5cblxuaW50ZXJmYWNlIFByb3BzIGV4dGVuZHMgSFRNTEF0dHJpYnV0ZXM8SFRNTERpdkVsZW1lbnQ+IHtcbiAgLyoqIGJhY2tncm91bmToibIgKi9cbiAgY29sb3I/OiBDb2xvclR5cGU7XG4gIC8qKiDjg63jgrTjga7jgqTjg6Hjg7zjgrjjgIHjg5fjg63jgrjjgqfjgq/jg4jlkI3jgarjgakgKi9cbiAgYnJhbmQ/OiBSZWFjdC5SZWFjdEVsZW1lbnQ8YW55PiB8IHN0cmluZztcbiAgLyoqIOWumue+qeOBleOCjOOBn+S9jee9ruOCkuWbuuWumuOBq+OBmeOCiyAqL1xuICBmaXhlZD86IGJvb2xlYW47XG4gIC8qKiAoSUUxMeS4jeWPrynnlLvpnaLjgYzjgrnjgq/jg63jg7zjg6vjgZXjgozjgabjgoLkuIrjgafosrzjgorku5jjgZHjgYTjgovjgojjgYbjgavjgZnjgosgKi9cbiAgc3RpY2t5PzogYm9vbGVhbjtcbiAgLyoqIOS4reWkruS4puOBs+OBi+OCieiHquWLleW5heOBp+ihqOekuuOBl+OBvuOBmSAqL1xuICBmbHVpZD86IGJvb2xlYW47XG4gIC8qKiDog4zmma/jgYxibHVy44GV44KM44G+44GZ77yIc2FmYXJp5bCC55So44CB5LuW44Gv6YCP5piO5bqm77yJICovXG4gIGJhY2tkcm9wPzogYm9vbGVhbjtcbiAgLyoqIGNoaWxkcmVu44Gr5a6a576p44GZ44KLRWxlbWVudOOBruS4puOBs+mghuOCkuaMh+WumuOBl+OBvuOBmeOAguacquWumue+qeOBr+iHquWLleS4puOBsyAqL1xuICBhbGlnbj86ICdsZWZ0JyB8ICdyaWdodCc7XG4gIC8qKiDjgqvjgrnjgr/jg6BDU1PlrprnvqkgKi9cbiAgY3NzPzogQ1NTVHlwZTtcbn1cblxudHlwZSBTdGF0ZSA9IHtcbiAgc2hvdzogYm9vbGVhbixcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcEJhciBleHRlbmRzIFB1cmVDb21wb25lbnQ8UHJvcHMsIFN0YXRlPiB7XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgY29sb3I6IG51bGwsXG4gICAgYnJhbmQ6IG51bGwsXG4gICAgZml4ZWQ6IGZhbHNlLFxuICAgIHN0aWNreTogZmFsc2UsXG4gICAgZmx1aWQ6IGZhbHNlLFxuICAgIGJhY2tkcm9wOiBmYWxzZSxcbiAgfTtcblxuICBzdGF0ZSA9IHsgc2hvdzogZmFsc2UgfTtcblxuICB0b2dnbGVNZW51ID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93OiAhdGhpcy5zdGF0ZS5zaG93IH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY2hpbGRyZW4sIGFsaWduLCBicmFuZCwgLi4ucmVzdCB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IHNob3cgfSA9IHRoaXMuc3RhdGU7XG4gICAgcmV0dXJuIChcbiAgICAgIDxOYXZCYXJcbiAgICAgICAgcm9sZT1cIm5hdmlnYXRpb25cIlxuICAgICAgICB7Li4ucmVzdH1cbiAgICAgID5cbiAgICAgICAge2JyYW5kfVxuICAgICAgICA8QnVyZ2VyIGNsYXNzTmFtZT17c2hvdyA/ICdhY3RpdmUnIDogJyd9IG9uQ2xpY2s9e3RoaXMudG9nZ2xlTWVudX0+XG4gICAgICAgICAgPHNwYW4gLz5cbiAgICAgICAgICA8c3BhbiAvPlxuICAgICAgICAgIDxzcGFuIC8+XG4gICAgICAgIDwvQnVyZ2VyPlxuICAgICAgICA8TmF2Q29udGVudCBhbGlnbj17YWxpZ259PlxuICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC9OYXZDb250ZW50PlxuICAgICAgPC9OYXZCYXI+XG4gICAgKTtcbiAgfVxufVxuIiwiaW1wb3J0IFJlYWN0LCB7IEhUTUxBdHRyaWJ1dGVzLCBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCwgeyBjc3MgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgZGFya2VuIGZyb20gJ3BvbGlzaGVkL2xpYi9jb2xvci9kYXJrZW4nO1xuaW1wb3J0IGZpbmRDb2xvckludmVydCBmcm9tICcuLi8uLi91dGlscy9maW5kQ29sb3JJbnZlcnQnO1xuaW1wb3J0IHsgQ29sb3JUeXBlLCBUaGVtZVR5cGUsIENTU1R5cGUgfSBmcm9tICcuLi8uLi90eXBlcyc7XG5cbmludGVyZmFjZSBXcmFwcGVyUHJvcHMge1xuICBjb2xvcj86IENvbG9yVHlwZTtcbiAgYWRkb25Db2xvcj86IENvbG9yVHlwZTtcbiAgY2xvc2U6IGJvb2xlYW47XG4gIGNzcz86IENTU1R5cGU7XG59XG5cbmZ1bmN0aW9uIGdldENvbG9yKHRoZW1lOiBUaGVtZVR5cGUsIGNvbG9yPzogQ29sb3JUeXBlKSB7XG4gIHJldHVybiAoIWNvbG9yIHx8IGNvbG9yID09PSAnbGlnaHQnKSA/IHRoZW1lLmJhY2tncm91bmQgOiB0aGVtZVtjb2xvcl07XG59XG5cbmZ1bmN0aW9uIHNldENvbG9yKHsgdGhlbWUsIGNvbG9yLCBhZGRvbkNvbG9yIH06XG4gICAgeyB0aGVtZTogVGhlbWVUeXBlLCBjb2xvcj86IENvbG9yVHlwZSwgYWRkb25Db2xvcj86IENvbG9yVHlwZSB9KSB7XG4gIGNvbnN0IHRhcmdldCA9IGdldENvbG9yKHRoZW1lLCBjb2xvcik7XG4gIGNvbnN0IGludmVydENvbG9yID0gZmluZENvbG9ySW52ZXJ0KHRoZW1lLCB0YXJnZXQpO1xuXG4gIGNvbnN0IHN1YkNvbG9yID0gYWRkb25Db2xvciA/IGdldENvbG9yKHRoZW1lLCBhZGRvbkNvbG9yKSA6IGRhcmtlbigwLjA1LCB0YXJnZXQpO1xuXG4gIHJldHVybiBjc3NgXG4gICAgY29sb3I6ICR7aW52ZXJ0Q29sb3J9O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR7dGFyZ2V0fTtcblxuICAgIGEsIHNwYW4ge1xuICAgICAgY29sb3I6ICR7aW52ZXJ0Q29sb3J9O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtzdWJDb2xvcn07XG4gICAgfVxuXG4gICAgYTpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke2RhcmtlbigwLjA1LCBzdWJDb2xvcil9O1xuICAgIH1cbiAgYDtcbn1cblxuY29uc3QgV3JhcHBlciA9IHN0eWxlZC5kaXY8V3JhcHBlclByb3BzPmBcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgY3Vyc29yOiBkZWZhdWx0O1xuICBwYWRkaW5nOiAwIC41cmVtO1xuICBoZWlnaHQ6IDJlbTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG5cbiAgJHtzZXRDb2xvcn1cblxuICAmOm5vdCg6bGFzdC1jaGlsZCkge1xuICAgIG1hcmdpbi1yaWdodDogMC41cmVtO1xuICB9XG5cbiAgYSwgc3BhbiB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIGZsZXgtZ3JvdzogMDtcbiAgICBmbGV4LXNocmluazogMDtcbiAgICBtaW4td2lkdGg6IDEuNXJlbTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbWFyZ2luLXJpZ2h0OiAtMC41cmVtO1xuICAgIG1hcmdpbi1sZWZ0OiAwLjVyZW07XG4gICAgcGFkZGluZzogMCAuNXJlbTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAzcHg7XG4gICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogM3B4O1xuICAgIH1cblxuICAgICY6Zm9jdXMge1xuICAgICAgb3V0bGluZTogbm9uZTtcbiAgICB9XG5cbiAgICAke3Byb3BzID0+IChwcm9wcy5jbG9zZSA/IGNzc2BcbiAgICAgICY6YmVmb3JlLCAmOmFmdGVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogY3VycmVudENvbG9yO1xuICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogNTAlO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtNTAlKSByb3RhdGUoNDVkZWcpO1xuICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgY2VudGVyO1xuICAgICAgfVxuXG4gICAgICAmOmJlZm9yZSB7XG4gICAgICAgIGhlaWdodDogMXB4O1xuICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgfVxuXG4gICAgICAmOmFmdGVyIHtcbiAgICAgICAgaGVpZ2h0OiA1MCU7XG4gICAgICAgIHdpZHRoOiAxcHg7XG4gICAgICB9XG5cbiAgICAgICY6aG92ZXIge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgfVxuICAgIGAgOiAnJyl9XG4gIH1cblxuICAkeyh7IGNzcyB9KSA9PiBjc3MgfHwgJyd9XG5gO1xuXG5pbnRlcmZhY2UgUHJvcHMgZXh0ZW5kcyBIVE1MQXR0cmlidXRlczxIVE1MRGl2RWxlbWVudD4ge1xuICAvKiog44K/44Kw44Gu5YaF5a65ICovXG4gIGNoaWxkcmVuOiBhbnk7XG4gIC8qKiBY44Oc44K/44Oz44Gu6L+95Yqg77yL44Kv44Oq44OD44Kv5pmC44Gu44Kk44OZ44Oz44OI44OP44Oz44OJ44Op44O8ICovXG4gIG9uQ2xvc2U/OiAoKSA9PiB2b2lkO1xuICAvKiog44Kv44Oq44OD44Kv5pmC44Gu44Kk44OZ44Oz44OI44OP44Oz44OJ44Op44O8ICovXG4gIG9uQ2xpY2s/OiAoKSA9PiB2b2lkO1xuICAvKiog6Imy44Gu5oyH5a6aICovXG4gIGNvbG9yPzogQ29sb3JUeXBlO1xuICAvKiog44Kr44K544K/44OgQ1NT5a6a576pICovXG4gIGNzcz86IENTU1R5cGU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhZyBleHRlbmRzIFB1cmVDb21wb25lbnQ8UHJvcHM+IHtcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBjaGlsZHJlbjogbnVsbCxcbiAgICBvbkNsb3NlOiBudWxsLFxuICAgIG9uQ2xpY2s6IG51bGwsXG4gICAgY29sb3I6IG51bGwsXG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY2hpbGRyZW4sIG9uQ2xvc2UsIC4uLnJlc3QgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxXcmFwcGVyIGNsb3NlPXtvbkNsb3NlICE9PSBudWxsfSB7Li4ucmVzdH0+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAge29uQ2xvc2UgJiYgKDxhIHRhYkluZGV4PXswfSByb2xlPVwibGlua1wiIG9uQ2xpY2s9e29uQ2xvc2V9PiZuYnNwOzwvYT4pfVxuICAgICAgPC9XcmFwcGVyPlxuICAgICk7XG4gIH1cbn1cbiIsImltcG9ydCBSZWFjdCwgeyBIVE1MQXR0cmlidXRlcyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQsIHsgY3NzIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IENvbnRhaW5lciBmcm9tICcuLi9HcmlkL0NvbnRhaW5lcic7XG5pbXBvcnQgZmluZENvbG9ySW52ZXJ0IGZyb20gJy4uLy4uL3V0aWxzL2ZpbmRDb2xvckludmVydCc7XG5pbXBvcnQgeyBtZWRpYURlc2t0b3AgfSBmcm9tICcuLi8uLi91dGlscy9tZWRpYSc7XG5pbXBvcnQgeyBDb2xvclR5cGUsIFRoZW1lVHlwZSwgU2l6ZVR5cGUgfSBmcm9tICcuLi8uLi90eXBlcyc7XG5cbmludGVyZmFjZSBQcm9wcyBleHRlbmRzIEhUTUxBdHRyaWJ1dGVzPEhUTUxEaXZFbGVtZW50PiB7XG4gIC8qKiDog4zmma/jga7oibIgKi9cbiAgY29sb3I/OiBDb2xvclR5cGU7XG4gIC8qKiBzbWFsbCB8IG1lZGl1bSB8IGxhcmdlIHwgZnVsbCAqL1xuICBzaXplPzogU2l6ZVR5cGUgfCAnZnVsbCc7XG4gIC8qKiAgKi9cbiAgY2hpbGRyZW4/OiBSZWFjdC5SZWFjdENoaWxkO1xuICAvKiogY2hpbGRyZW7jga7kuK3lpK7mj4PjgYggKi9cbiAgY2VudGVyPzogYm9vbGVhbjtcbiAgLyoqIOOCq+OCueOCv+ODoOODmOODg+ODgOODvCAqL1xuICBoZWFkZXI/OiBSZWFjdC5SZWFjdEVsZW1lbnQ8YW55Pjtcbn1cblxuZnVuY3Rpb24gc2V0Q29sb3IoeyBjb2xvciwgdGhlbWUgfTogeyBjb2xvcj86IENvbG9yVHlwZSwgdGhlbWU6IFRoZW1lVHlwZSB9KSB7XG4gIGlmICghY29sb3IpIHJldHVybiAnJztcblxuICBjb25zdCB0YXJnZXQgPSB0aGVtZVtjb2xvcl0gfHwgY29sb3I7XG4gIGNvbnN0IGludmVydENvbG9yID0gZmluZENvbG9ySW52ZXJ0KHRoZW1lLCB0YXJnZXQpO1xuICByZXR1cm4gY3NzYGJhY2tncm91bmQtY29sb3I6ICR7dGFyZ2V0fTsgY29sb3I6ICR7aW52ZXJ0Q29sb3J9O2A7XG59XG5cbmZ1bmN0aW9uIHNldFNpemUoeyBzaXplLCB0aGVtZSB9OiB7IHNpemU/OiBTaXplVHlwZSB8ICdmdWxsJywgdGhlbWU6IFRoZW1lVHlwZSB9KSB7XG4gIGlmICghc2l6ZSB8fCBzaXplID09PSAnc21hbGwnKSByZXR1cm4gJyc7XG5cbiAgc3dpdGNoIChzaXplKSB7XG4gICAgY2FzZSAnbWVkaXVtJyA6XG4gICAgICByZXR1cm4gY3NzYHBhZGRpbmctYm90dG9tOiA5cmVtOyBwYWRkaW5nLXRvcDogOXJlbTtgO1xuICAgIGNhc2UgJ2xhcmdlJyA6XG4gICAgICByZXR1cm4gY3NzYHBhZGRpbmctYm90dG9tOiAxOHJlbTsgcGFkZGluZy10b3A6IDE4cmVtO2A7XG4gICAgY2FzZSAnZnVsbCcgOlxuICAgICAgcmV0dXJuIGNzc2BcbiAgICAgICAgbWluLWhlaWdodDogMTAwdmg7XG5cbiAgICAgICAgJHtCb2R5fSB7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICB9XG4gICAgICBgO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gJyc7XG4gIH1cbn1cblxuaW50ZXJmYWNlIEJvZHlQcm9wcyB7XG4gIGNlbnRlcj86IGJvb2xlYW47XG59XG5cbmNvbnN0IEJvZHkgPSBzdHlsZWQuZGl2PEJvZHlQcm9wcz5gXG4gIGZsZXgtZ3JvdzogMTtcbiAgZmxleC1zaHJpbms6IDA7XG4gIHBhZGRpbmc6IDNyZW0gMS41cmVtO1xuXG4gICR7KHsgY2VudGVyIH0pID0+IGNlbnRlciA/ICd0ZXh0LWFsaWduOiBjZW50ZXI7JyA6ICcnfVxuXG4gIGgxIHtcbiAgICBmb250LXNpemU6IDJyZW07XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBsaW5lLWhlaWdodDogMS4xMjU7XG5cbiAgICAmOm5vdCg6bGFzdC1jaGlsZCkge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xuICAgIH1cbiAgfVxuXG4gIGgyIHtcbiAgICBmb250LXNpemU6IDEuMjVyZW07XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBsaW5lLWhlaWdodDogMS4yNTtcbiAgfVxuXG4gIGgxK2gyIHtcbiAgICBtYXJnaW4tdG9wOiAtMS4yNXJlbTtcbiAgfVxuYDtcblxuaW50ZXJmYWNlIFdyYXBwZXJQcm9wcyB7XG4gIGNvbG9yPzogQ29sb3JUeXBlO1xuICBzaXplPzogU2l6ZVR5cGUgfCAnZnVsbCc7XG59XG5cbmNvbnN0IFdyYXBwZXIgPSBzdHlsZWQuZGl2PFdyYXBwZXJQcm9wcz5gXG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICR7c2V0Q29sb3J9XG4gICR7c2V0U2l6ZX1cblxuICBoZWFkZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XG4gICAgY29sb3I6IGluaGVyaXQ7XG4gIH1cblxuICBoZWFkZXIrJHtCb2R5fSB7XG4gICAgbWFyZ2luLXRvcDogMy4yNXJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAzLjI1cmVtO1xuICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIZXJvKHsgY2hpbGRyZW4sIGNvbG9yLCBzaXplLCBjZW50ZXIsIGhlYWRlciwgLi4ucmVzdCB9OiBQcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxXcmFwcGVyIGNvbG9yPXtjb2xvcn0gc2l6ZT17c2l6ZX0gey4uLnJlc3R9PlxuICAgICAge2hlYWRlcn1cbiAgICAgIDxCb2R5IGNlbnRlcj17Y2VudGVyfT5cbiAgICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgPC9Cb2R5PlxuICAgIDwvV3JhcHBlcj5cbiAgKTtcbn1cbiIsIi8qKiBAbGljZW5zZSBSZWFjdCB2MTYuOC4xXG4gKiByZWFjdC1pcy5wcm9kdWN0aW9uLm1pbi5qc1xuICpcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cyxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTtcbnZhciBiPVwiZnVuY3Rpb25cIj09PXR5cGVvZiBTeW1ib2wmJlN5bWJvbC5mb3IsYz1iP1N5bWJvbC5mb3IoXCJyZWFjdC5lbGVtZW50XCIpOjYwMTAzLGQ9Yj9TeW1ib2wuZm9yKFwicmVhY3QucG9ydGFsXCIpOjYwMTA2LGU9Yj9TeW1ib2wuZm9yKFwicmVhY3QuZnJhZ21lbnRcIik6NjAxMDcsZj1iP1N5bWJvbC5mb3IoXCJyZWFjdC5zdHJpY3RfbW9kZVwiKTo2MDEwOCxnPWI/U3ltYm9sLmZvcihcInJlYWN0LnByb2ZpbGVyXCIpOjYwMTE0LGg9Yj9TeW1ib2wuZm9yKFwicmVhY3QucHJvdmlkZXJcIik6NjAxMDksaz1iP1N5bWJvbC5mb3IoXCJyZWFjdC5jb250ZXh0XCIpOjYwMTEwLGw9Yj9TeW1ib2wuZm9yKFwicmVhY3QuYXN5bmNfbW9kZVwiKTo2MDExMSxtPWI/U3ltYm9sLmZvcihcInJlYWN0LmNvbmN1cnJlbnRfbW9kZVwiKTo2MDExMSxuPWI/U3ltYm9sLmZvcihcInJlYWN0LmZvcndhcmRfcmVmXCIpOjYwMTEyLHA9Yj9TeW1ib2wuZm9yKFwicmVhY3Quc3VzcGVuc2VcIik6NjAxMTMscT1iP1N5bWJvbC5mb3IoXCJyZWFjdC5tZW1vXCIpOlxuNjAxMTUscj1iP1N5bWJvbC5mb3IoXCJyZWFjdC5sYXp5XCIpOjYwMTE2O2Z1bmN0aW9uIHQoYSl7aWYoXCJvYmplY3RcIj09PXR5cGVvZiBhJiZudWxsIT09YSl7dmFyIHU9YS4kJHR5cGVvZjtzd2l0Y2godSl7Y2FzZSBjOnN3aXRjaChhPWEudHlwZSxhKXtjYXNlIGw6Y2FzZSBtOmNhc2UgZTpjYXNlIGc6Y2FzZSBmOmNhc2UgcDpyZXR1cm4gYTtkZWZhdWx0OnN3aXRjaChhPWEmJmEuJCR0eXBlb2YsYSl7Y2FzZSBrOmNhc2UgbjpjYXNlIGg6cmV0dXJuIGE7ZGVmYXVsdDpyZXR1cm4gdX19Y2FzZSByOmNhc2UgcTpjYXNlIGQ6cmV0dXJuIHV9fX1mdW5jdGlvbiB2KGEpe3JldHVybiB0KGEpPT09bX1leHBvcnRzLnR5cGVPZj10O2V4cG9ydHMuQXN5bmNNb2RlPWw7ZXhwb3J0cy5Db25jdXJyZW50TW9kZT1tO2V4cG9ydHMuQ29udGV4dENvbnN1bWVyPWs7ZXhwb3J0cy5Db250ZXh0UHJvdmlkZXI9aDtleHBvcnRzLkVsZW1lbnQ9YztleHBvcnRzLkZvcndhcmRSZWY9bjtcbmV4cG9ydHMuRnJhZ21lbnQ9ZTtleHBvcnRzLkxhenk9cjtleHBvcnRzLk1lbW89cTtleHBvcnRzLlBvcnRhbD1kO2V4cG9ydHMuUHJvZmlsZXI9ZztleHBvcnRzLlN0cmljdE1vZGU9ZjtleHBvcnRzLlN1c3BlbnNlPXA7ZXhwb3J0cy5pc1ZhbGlkRWxlbWVudFR5cGU9ZnVuY3Rpb24oYSl7cmV0dXJuXCJzdHJpbmdcIj09PXR5cGVvZiBhfHxcImZ1bmN0aW9uXCI9PT10eXBlb2YgYXx8YT09PWV8fGE9PT1tfHxhPT09Z3x8YT09PWZ8fGE9PT1wfHxcIm9iamVjdFwiPT09dHlwZW9mIGEmJm51bGwhPT1hJiYoYS4kJHR5cGVvZj09PXJ8fGEuJCR0eXBlb2Y9PT1xfHxhLiQkdHlwZW9mPT09aHx8YS4kJHR5cGVvZj09PWt8fGEuJCR0eXBlb2Y9PT1uKX07ZXhwb3J0cy5pc0FzeW5jTW9kZT1mdW5jdGlvbihhKXtyZXR1cm4gdihhKXx8dChhKT09PWx9O2V4cG9ydHMuaXNDb25jdXJyZW50TW9kZT12O2V4cG9ydHMuaXNDb250ZXh0Q29uc3VtZXI9ZnVuY3Rpb24oYSl7cmV0dXJuIHQoYSk9PT1rfTtcbmV4cG9ydHMuaXNDb250ZXh0UHJvdmlkZXI9ZnVuY3Rpb24oYSl7cmV0dXJuIHQoYSk9PT1ofTtleHBvcnRzLmlzRWxlbWVudD1mdW5jdGlvbihhKXtyZXR1cm5cIm9iamVjdFwiPT09dHlwZW9mIGEmJm51bGwhPT1hJiZhLiQkdHlwZW9mPT09Y307ZXhwb3J0cy5pc0ZvcndhcmRSZWY9ZnVuY3Rpb24oYSl7cmV0dXJuIHQoYSk9PT1ufTtleHBvcnRzLmlzRnJhZ21lbnQ9ZnVuY3Rpb24oYSl7cmV0dXJuIHQoYSk9PT1lfTtleHBvcnRzLmlzTGF6eT1mdW5jdGlvbihhKXtyZXR1cm4gdChhKT09PXJ9O2V4cG9ydHMuaXNNZW1vPWZ1bmN0aW9uKGEpe3JldHVybiB0KGEpPT09cX07ZXhwb3J0cy5pc1BvcnRhbD1mdW5jdGlvbihhKXtyZXR1cm4gdChhKT09PWR9O2V4cG9ydHMuaXNQcm9maWxlcj1mdW5jdGlvbihhKXtyZXR1cm4gdChhKT09PWd9O2V4cG9ydHMuaXNTdHJpY3RNb2RlPWZ1bmN0aW9uKGEpe3JldHVybiB0KGEpPT09Zn07XG5leHBvcnRzLmlzU3VzcGVuc2U9ZnVuY3Rpb24oYSl7cmV0dXJuIHQoYSk9PT1wfTtcbiIsIi8qKiBAbGljZW5zZSBSZWFjdCB2MTYuOC4xXG4gKiByZWFjdC1pcy5kZXZlbG9wbWVudC5qc1xuICpcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuXG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgKGZ1bmN0aW9uKCkge1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG4vLyBUaGUgU3ltYm9sIHVzZWQgdG8gdGFnIHRoZSBSZWFjdEVsZW1lbnQtbGlrZSB0eXBlcy4gSWYgdGhlcmUgaXMgbm8gbmF0aXZlIFN5bWJvbFxuLy8gbm9yIHBvbHlmaWxsLCB0aGVuIGEgcGxhaW4gbnVtYmVyIGlzIHVzZWQgZm9yIHBlcmZvcm1hbmNlLlxudmFyIGhhc1N5bWJvbCA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLmZvcjtcblxudmFyIFJFQUNUX0VMRU1FTlRfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmVsZW1lbnQnKSA6IDB4ZWFjNztcbnZhciBSRUFDVF9QT1JUQUxfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnBvcnRhbCcpIDogMHhlYWNhO1xudmFyIFJFQUNUX0ZSQUdNRU5UX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5mcmFnbWVudCcpIDogMHhlYWNiO1xudmFyIFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5zdHJpY3RfbW9kZScpIDogMHhlYWNjO1xudmFyIFJFQUNUX1BST0ZJTEVSX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5wcm9maWxlcicpIDogMHhlYWQyO1xudmFyIFJFQUNUX1BST1ZJREVSX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5wcm92aWRlcicpIDogMHhlYWNkO1xudmFyIFJFQUNUX0NPTlRFWFRfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmNvbnRleHQnKSA6IDB4ZWFjZTtcbnZhciBSRUFDVF9BU1lOQ19NT0RFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5hc3luY19tb2RlJykgOiAweGVhY2Y7XG52YXIgUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5jb25jdXJyZW50X21vZGUnKSA6IDB4ZWFjZjtcbnZhciBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuZm9yd2FyZF9yZWYnKSA6IDB4ZWFkMDtcbnZhciBSRUFDVF9TVVNQRU5TRV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3Quc3VzcGVuc2UnKSA6IDB4ZWFkMTtcbnZhciBSRUFDVF9NRU1PX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5tZW1vJykgOiAweGVhZDM7XG52YXIgUkVBQ1RfTEFaWV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QubGF6eScpIDogMHhlYWQ0O1xuXG5mdW5jdGlvbiBpc1ZhbGlkRWxlbWVudFR5cGUodHlwZSkge1xuICByZXR1cm4gdHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nIHx8XG4gIC8vIE5vdGU6IGl0cyB0eXBlb2YgbWlnaHQgYmUgb3RoZXIgdGhhbiAnc3ltYm9sJyBvciAnbnVtYmVyJyBpZiBpdCdzIGEgcG9seWZpbGwuXG4gIHR5cGUgPT09IFJFQUNUX0ZSQUdNRU5UX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfUFJPRklMRVJfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NVU1BFTlNFX1RZUEUgfHwgdHlwZW9mIHR5cGUgPT09ICdvYmplY3QnICYmIHR5cGUgIT09IG51bGwgJiYgKHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0xBWllfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9NRU1PX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfUFJPVklERVJfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9DT05URVhUX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSk7XG59XG5cbi8qKlxuICogRm9ya2VkIGZyb20gZmJqcy93YXJuaW5nOlxuICogaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL2ZianMvYmxvYi9lNjZiYTIwYWQ1YmU0MzNlYjU0NDIzZjJiMDk3ZDgyOTMyNGQ5ZGU2L3BhY2thZ2VzL2ZianMvc3JjL19fZm9ya3NfXy93YXJuaW5nLmpzXG4gKlxuICogT25seSBjaGFuZ2UgaXMgd2UgdXNlIGNvbnNvbGUud2FybiBpbnN0ZWFkIG9mIGNvbnNvbGUuZXJyb3IsXG4gKiBhbmQgZG8gbm90aGluZyB3aGVuICdjb25zb2xlJyBpcyBub3Qgc3VwcG9ydGVkLlxuICogVGhpcyByZWFsbHkgc2ltcGxpZmllcyB0aGUgY29kZS5cbiAqIC0tLVxuICogU2ltaWxhciB0byBpbnZhcmlhbnQgYnV0IG9ubHkgbG9ncyBhIHdhcm5pbmcgaWYgdGhlIGNvbmRpdGlvbiBpcyBub3QgbWV0LlxuICogVGhpcyBjYW4gYmUgdXNlZCB0byBsb2cgaXNzdWVzIGluIGRldmVsb3BtZW50IGVudmlyb25tZW50cyBpbiBjcml0aWNhbFxuICogcGF0aHMuIFJlbW92aW5nIHRoZSBsb2dnaW5nIGNvZGUgZm9yIHByb2R1Y3Rpb24gZW52aXJvbm1lbnRzIHdpbGwga2VlcCB0aGVcbiAqIHNhbWUgbG9naWMgYW5kIGZvbGxvdyB0aGUgc2FtZSBjb2RlIHBhdGhzLlxuICovXG5cbnZhciBsb3dQcmlvcml0eVdhcm5pbmcgPSBmdW5jdGlvbiAoKSB7fTtcblxue1xuICB2YXIgcHJpbnRXYXJuaW5nID0gZnVuY3Rpb24gKGZvcm1hdCkge1xuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgdmFyIGFyZ0luZGV4ID0gMDtcbiAgICB2YXIgbWVzc2FnZSA9ICdXYXJuaW5nOiAnICsgZm9ybWF0LnJlcGxhY2UoLyVzL2csIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBhcmdzW2FyZ0luZGV4KytdO1xuICAgIH0pO1xuICAgIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbnNvbGUud2FybihtZXNzYWdlKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIC8vIC0tLSBXZWxjb21lIHRvIGRlYnVnZ2luZyBSZWFjdCAtLS1cbiAgICAgIC8vIFRoaXMgZXJyb3Igd2FzIHRocm93biBhcyBhIGNvbnZlbmllbmNlIHNvIHRoYXQgeW91IGNhbiB1c2UgdGhpcyBzdGFja1xuICAgICAgLy8gdG8gZmluZCB0aGUgY2FsbHNpdGUgdGhhdCBjYXVzZWQgdGhpcyB3YXJuaW5nIHRvIGZpcmUuXG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgfSBjYXRjaCAoeCkge31cbiAgfTtcblxuICBsb3dQcmlvcml0eVdhcm5pbmcgPSBmdW5jdGlvbiAoY29uZGl0aW9uLCBmb3JtYXQpIHtcbiAgICBpZiAoZm9ybWF0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignYGxvd1ByaW9yaXR5V2FybmluZyhjb25kaXRpb24sIGZvcm1hdCwgLi4uYXJncylgIHJlcXVpcmVzIGEgd2FybmluZyAnICsgJ21lc3NhZ2UgYXJndW1lbnQnKTtcbiAgICB9XG4gICAgaWYgKCFjb25kaXRpb24pIHtcbiAgICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4yID4gMiA/IF9sZW4yIC0gMiA6IDApLCBfa2V5MiA9IDI7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgICAgYXJnc1tfa2V5MiAtIDJdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICAgIH1cblxuICAgICAgcHJpbnRXYXJuaW5nLmFwcGx5KHVuZGVmaW5lZCwgW2Zvcm1hdF0uY29uY2F0KGFyZ3MpKTtcbiAgICB9XG4gIH07XG59XG5cbnZhciBsb3dQcmlvcml0eVdhcm5pbmckMSA9IGxvd1ByaW9yaXR5V2FybmluZztcblxuZnVuY3Rpb24gdHlwZU9mKG9iamVjdCkge1xuICBpZiAodHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgJiYgb2JqZWN0ICE9PSBudWxsKSB7XG4gICAgdmFyICQkdHlwZW9mID0gb2JqZWN0LiQkdHlwZW9mO1xuICAgIHN3aXRjaCAoJCR0eXBlb2YpIHtcbiAgICAgIGNhc2UgUkVBQ1RfRUxFTUVOVF9UWVBFOlxuICAgICAgICB2YXIgdHlwZSA9IG9iamVjdC50eXBlO1xuXG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgIGNhc2UgUkVBQ1RfQVNZTkNfTU9ERV9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9GUkFHTUVOVF9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfUFJPRklMRVJfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1NUUklDVF9NT0RFX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9UWVBFOlxuICAgICAgICAgICAgcmV0dXJuIHR5cGU7XG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHZhciAkJHR5cGVvZlR5cGUgPSB0eXBlICYmIHR5cGUuJCR0eXBlb2Y7XG5cbiAgICAgICAgICAgIHN3aXRjaCAoJCR0eXBlb2ZUeXBlKSB7XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfQ09OVEVYVF9UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfUFJPVklERVJfVFlQRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gJCR0eXBlb2ZUeXBlO1xuICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiAkJHR5cGVvZjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgY2FzZSBSRUFDVF9MQVpZX1RZUEU6XG4gICAgICBjYXNlIFJFQUNUX01FTU9fVFlQRTpcbiAgICAgIGNhc2UgUkVBQ1RfUE9SVEFMX1RZUEU6XG4gICAgICAgIHJldHVybiAkJHR5cGVvZjtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdW5kZWZpbmVkO1xufVxuXG4vLyBBc3luY01vZGUgaXMgZGVwcmVjYXRlZCBhbG9uZyB3aXRoIGlzQXN5bmNNb2RlXG52YXIgQXN5bmNNb2RlID0gUkVBQ1RfQVNZTkNfTU9ERV9UWVBFO1xudmFyIENvbmN1cnJlbnRNb2RlID0gUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEU7XG52YXIgQ29udGV4dENvbnN1bWVyID0gUkVBQ1RfQ09OVEVYVF9UWVBFO1xudmFyIENvbnRleHRQcm92aWRlciA9IFJFQUNUX1BST1ZJREVSX1RZUEU7XG52YXIgRWxlbWVudCA9IFJFQUNUX0VMRU1FTlRfVFlQRTtcbnZhciBGb3J3YXJkUmVmID0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTtcbnZhciBGcmFnbWVudCA9IFJFQUNUX0ZSQUdNRU5UX1RZUEU7XG52YXIgTGF6eSA9IFJFQUNUX0xBWllfVFlQRTtcbnZhciBNZW1vID0gUkVBQ1RfTUVNT19UWVBFO1xudmFyIFBvcnRhbCA9IFJFQUNUX1BPUlRBTF9UWVBFO1xudmFyIFByb2ZpbGVyID0gUkVBQ1RfUFJPRklMRVJfVFlQRTtcbnZhciBTdHJpY3RNb2RlID0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRTtcbnZhciBTdXNwZW5zZSA9IFJFQUNUX1NVU1BFTlNFX1RZUEU7XG5cbnZhciBoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0FzeW5jTW9kZSA9IGZhbHNlO1xuXG4vLyBBc3luY01vZGUgc2hvdWxkIGJlIGRlcHJlY2F0ZWRcbmZ1bmN0aW9uIGlzQXN5bmNNb2RlKG9iamVjdCkge1xuICB7XG4gICAgaWYgKCFoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0FzeW5jTW9kZSkge1xuICAgICAgaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNBc3luY01vZGUgPSB0cnVlO1xuICAgICAgbG93UHJpb3JpdHlXYXJuaW5nJDEoZmFsc2UsICdUaGUgUmVhY3RJcy5pc0FzeW5jTW9kZSgpIGFsaWFzIGhhcyBiZWVuIGRlcHJlY2F0ZWQsICcgKyAnYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiBSZWFjdCAxNysuIFVwZGF0ZSB5b3VyIGNvZGUgdG8gdXNlICcgKyAnUmVhY3RJcy5pc0NvbmN1cnJlbnRNb2RlKCkgaW5zdGVhZC4gSXQgaGFzIHRoZSBleGFjdCBzYW1lIEFQSS4nKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGlzQ29uY3VycmVudE1vZGUob2JqZWN0KSB8fCB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfQVNZTkNfTU9ERV9UWVBFO1xufVxuZnVuY3Rpb24gaXNDb25jdXJyZW50TW9kZShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzQ29udGV4dENvbnN1bWVyKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0NPTlRFWFRfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzQ29udGV4dFByb3ZpZGVyKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1BST1ZJREVSX1RZUEU7XG59XG5mdW5jdGlvbiBpc0VsZW1lbnQob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0JyAmJiBvYmplY3QgIT09IG51bGwgJiYgb2JqZWN0LiQkdHlwZW9mID09PSBSRUFDVF9FTEVNRU5UX1RZUEU7XG59XG5mdW5jdGlvbiBpc0ZvcndhcmRSZWYob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzRnJhZ21lbnQob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfRlJBR01FTlRfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzTGF6eShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9MQVpZX1RZUEU7XG59XG5mdW5jdGlvbiBpc01lbW8ob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfTUVNT19UWVBFO1xufVxuZnVuY3Rpb24gaXNQb3J0YWwob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfUE9SVEFMX1RZUEU7XG59XG5mdW5jdGlvbiBpc1Byb2ZpbGVyKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1BST0ZJTEVSX1RZUEU7XG59XG5mdW5jdGlvbiBpc1N0cmljdE1vZGUob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzU3VzcGVuc2Uob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfU1VTUEVOU0VfVFlQRTtcbn1cblxuZXhwb3J0cy50eXBlT2YgPSB0eXBlT2Y7XG5leHBvcnRzLkFzeW5jTW9kZSA9IEFzeW5jTW9kZTtcbmV4cG9ydHMuQ29uY3VycmVudE1vZGUgPSBDb25jdXJyZW50TW9kZTtcbmV4cG9ydHMuQ29udGV4dENvbnN1bWVyID0gQ29udGV4dENvbnN1bWVyO1xuZXhwb3J0cy5Db250ZXh0UHJvdmlkZXIgPSBDb250ZXh0UHJvdmlkZXI7XG5leHBvcnRzLkVsZW1lbnQgPSBFbGVtZW50O1xuZXhwb3J0cy5Gb3J3YXJkUmVmID0gRm9yd2FyZFJlZjtcbmV4cG9ydHMuRnJhZ21lbnQgPSBGcmFnbWVudDtcbmV4cG9ydHMuTGF6eSA9IExhenk7XG5leHBvcnRzLk1lbW8gPSBNZW1vO1xuZXhwb3J0cy5Qb3J0YWwgPSBQb3J0YWw7XG5leHBvcnRzLlByb2ZpbGVyID0gUHJvZmlsZXI7XG5leHBvcnRzLlN0cmljdE1vZGUgPSBTdHJpY3RNb2RlO1xuZXhwb3J0cy5TdXNwZW5zZSA9IFN1c3BlbnNlO1xuZXhwb3J0cy5pc1ZhbGlkRWxlbWVudFR5cGUgPSBpc1ZhbGlkRWxlbWVudFR5cGU7XG5leHBvcnRzLmlzQXN5bmNNb2RlID0gaXNBc3luY01vZGU7XG5leHBvcnRzLmlzQ29uY3VycmVudE1vZGUgPSBpc0NvbmN1cnJlbnRNb2RlO1xuZXhwb3J0cy5pc0NvbnRleHRDb25zdW1lciA9IGlzQ29udGV4dENvbnN1bWVyO1xuZXhwb3J0cy5pc0NvbnRleHRQcm92aWRlciA9IGlzQ29udGV4dFByb3ZpZGVyO1xuZXhwb3J0cy5pc0VsZW1lbnQgPSBpc0VsZW1lbnQ7XG5leHBvcnRzLmlzRm9yd2FyZFJlZiA9IGlzRm9yd2FyZFJlZjtcbmV4cG9ydHMuaXNGcmFnbWVudCA9IGlzRnJhZ21lbnQ7XG5leHBvcnRzLmlzTGF6eSA9IGlzTGF6eTtcbmV4cG9ydHMuaXNNZW1vID0gaXNNZW1vO1xuZXhwb3J0cy5pc1BvcnRhbCA9IGlzUG9ydGFsO1xuZXhwb3J0cy5pc1Byb2ZpbGVyID0gaXNQcm9maWxlcjtcbmV4cG9ydHMuaXNTdHJpY3RNb2RlID0gaXNTdHJpY3RNb2RlO1xuZXhwb3J0cy5pc1N1c3BlbnNlID0gaXNTdXNwZW5zZTtcbiAgfSkoKTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC1pcy5wcm9kdWN0aW9uLm1pbi5qcycpO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC1pcy5kZXZlbG9wbWVudC5qcycpO1xufVxuIiwiLypcbm9iamVjdC1hc3NpZ25cbihjKSBTaW5kcmUgU29yaHVzXG5AbGljZW5zZSBNSVRcbiovXG5cbid1c2Ugc3RyaWN0Jztcbi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG52YXIgZ2V0T3duUHJvcGVydHlTeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcbnZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG52YXIgcHJvcElzRW51bWVyYWJsZSA9IE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGU7XG5cbmZ1bmN0aW9uIHRvT2JqZWN0KHZhbCkge1xuXHRpZiAodmFsID09PSBudWxsIHx8IHZhbCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignT2JqZWN0LmFzc2lnbiBjYW5ub3QgYmUgY2FsbGVkIHdpdGggbnVsbCBvciB1bmRlZmluZWQnKTtcblx0fVxuXG5cdHJldHVybiBPYmplY3QodmFsKTtcbn1cblxuZnVuY3Rpb24gc2hvdWxkVXNlTmF0aXZlKCkge1xuXHR0cnkge1xuXHRcdGlmICghT2JqZWN0LmFzc2lnbikge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIERldGVjdCBidWdneSBwcm9wZXJ0eSBlbnVtZXJhdGlvbiBvcmRlciBpbiBvbGRlciBWOCB2ZXJzaW9ucy5cblxuXHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTQxMThcblx0XHR2YXIgdGVzdDEgPSBuZXcgU3RyaW5nKCdhYmMnKTsgIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tbmV3LXdyYXBwZXJzXG5cdFx0dGVzdDFbNV0gPSAnZGUnO1xuXHRcdGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0ZXN0MSlbMF0gPT09ICc1Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTMwNTZcblx0XHR2YXIgdGVzdDIgPSB7fTtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IDEwOyBpKyspIHtcblx0XHRcdHRlc3QyWydfJyArIFN0cmluZy5mcm9tQ2hhckNvZGUoaSldID0gaTtcblx0XHR9XG5cdFx0dmFyIG9yZGVyMiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRlc3QyKS5tYXAoZnVuY3Rpb24gKG4pIHtcblx0XHRcdHJldHVybiB0ZXN0MltuXTtcblx0XHR9KTtcblx0XHRpZiAob3JkZXIyLmpvaW4oJycpICE9PSAnMDEyMzQ1Njc4OScpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0zMDU2XG5cdFx0dmFyIHRlc3QzID0ge307XG5cdFx0J2FiY2RlZmdoaWprbG1ub3BxcnN0Jy5zcGxpdCgnJykuZm9yRWFjaChmdW5jdGlvbiAobGV0dGVyKSB7XG5cdFx0XHR0ZXN0M1tsZXR0ZXJdID0gbGV0dGVyO1xuXHRcdH0pO1xuXHRcdGlmIChPYmplY3Qua2V5cyhPYmplY3QuYXNzaWduKHt9LCB0ZXN0MykpLmpvaW4oJycpICE9PVxuXHRcdFx0XHQnYWJjZGVmZ2hpamtsbW5vcHFyc3QnKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRydWU7XG5cdH0gY2F0Y2ggKGVycikge1xuXHRcdC8vIFdlIGRvbid0IGV4cGVjdCBhbnkgb2YgdGhlIGFib3ZlIHRvIHRocm93LCBidXQgYmV0dGVyIHRvIGJlIHNhZmUuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2hvdWxkVXNlTmF0aXZlKCkgPyBPYmplY3QuYXNzaWduIDogZnVuY3Rpb24gKHRhcmdldCwgc291cmNlKSB7XG5cdHZhciBmcm9tO1xuXHR2YXIgdG8gPSB0b09iamVjdCh0YXJnZXQpO1xuXHR2YXIgc3ltYm9scztcblxuXHRmb3IgKHZhciBzID0gMTsgcyA8IGFyZ3VtZW50cy5sZW5ndGg7IHMrKykge1xuXHRcdGZyb20gPSBPYmplY3QoYXJndW1lbnRzW3NdKTtcblxuXHRcdGZvciAodmFyIGtleSBpbiBmcm9tKSB7XG5cdFx0XHRpZiAoaGFzT3duUHJvcGVydHkuY2FsbChmcm9tLCBrZXkpKSB7XG5cdFx0XHRcdHRvW2tleV0gPSBmcm9tW2tleV07XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKGdldE93blByb3BlcnR5U3ltYm9scykge1xuXHRcdFx0c3ltYm9scyA9IGdldE93blByb3BlcnR5U3ltYm9scyhmcm9tKTtcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3ltYm9scy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRpZiAocHJvcElzRW51bWVyYWJsZS5jYWxsKGZyb20sIHN5bWJvbHNbaV0pKSB7XG5cdFx0XHRcdFx0dG9bc3ltYm9sc1tpXV0gPSBmcm9tW3N5bWJvbHNbaV1dO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHRvO1xufTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgUmVhY3RQcm9wVHlwZXNTZWNyZXQgPSAnU0VDUkVUX0RPX05PVF9QQVNTX1RISVNfT1JfWU9VX1dJTExfQkVfRklSRUQnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0UHJvcFR5cGVzU2VjcmV0O1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBwcmludFdhcm5pbmcgPSBmdW5jdGlvbigpIHt9O1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICB2YXIgUmVhY3RQcm9wVHlwZXNTZWNyZXQgPSByZXF1aXJlKCcuL2xpYi9SZWFjdFByb3BUeXBlc1NlY3JldCcpO1xuICB2YXIgbG9nZ2VkVHlwZUZhaWx1cmVzID0ge307XG4gIHZhciBoYXMgPSBGdW5jdGlvbi5jYWxsLmJpbmQoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSk7XG5cbiAgcHJpbnRXYXJuaW5nID0gZnVuY3Rpb24odGV4dCkge1xuICAgIHZhciBtZXNzYWdlID0gJ1dhcm5pbmc6ICcgKyB0ZXh0O1xuICAgIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IobWVzc2FnZSk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAvLyAtLS0gV2VsY29tZSB0byBkZWJ1Z2dpbmcgUmVhY3QgLS0tXG4gICAgICAvLyBUaGlzIGVycm9yIHdhcyB0aHJvd24gYXMgYSBjb252ZW5pZW5jZSBzbyB0aGF0IHlvdSBjYW4gdXNlIHRoaXMgc3RhY2tcbiAgICAgIC8vIHRvIGZpbmQgdGhlIGNhbGxzaXRlIHRoYXQgY2F1c2VkIHRoaXMgd2FybmluZyB0byBmaXJlLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgIH0gY2F0Y2ggKHgpIHt9XG4gIH07XG59XG5cbi8qKlxuICogQXNzZXJ0IHRoYXQgdGhlIHZhbHVlcyBtYXRjaCB3aXRoIHRoZSB0eXBlIHNwZWNzLlxuICogRXJyb3IgbWVzc2FnZXMgYXJlIG1lbW9yaXplZCBhbmQgd2lsbCBvbmx5IGJlIHNob3duIG9uY2UuXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IHR5cGVTcGVjcyBNYXAgb2YgbmFtZSB0byBhIFJlYWN0UHJvcFR5cGVcbiAqIEBwYXJhbSB7b2JqZWN0fSB2YWx1ZXMgUnVudGltZSB2YWx1ZXMgdGhhdCBuZWVkIHRvIGJlIHR5cGUtY2hlY2tlZFxuICogQHBhcmFtIHtzdHJpbmd9IGxvY2F0aW9uIGUuZy4gXCJwcm9wXCIsIFwiY29udGV4dFwiLCBcImNoaWxkIGNvbnRleHRcIlxuICogQHBhcmFtIHtzdHJpbmd9IGNvbXBvbmVudE5hbWUgTmFtZSBvZiB0aGUgY29tcG9uZW50IGZvciBlcnJvciBtZXNzYWdlcy5cbiAqIEBwYXJhbSB7P0Z1bmN0aW9ufSBnZXRTdGFjayBSZXR1cm5zIHRoZSBjb21wb25lbnQgc3RhY2suXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBjaGVja1Byb3BUeXBlcyh0eXBlU3BlY3MsIHZhbHVlcywgbG9jYXRpb24sIGNvbXBvbmVudE5hbWUsIGdldFN0YWNrKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgZm9yICh2YXIgdHlwZVNwZWNOYW1lIGluIHR5cGVTcGVjcykge1xuICAgICAgaWYgKGhhcyh0eXBlU3BlY3MsIHR5cGVTcGVjTmFtZSkpIHtcbiAgICAgICAgdmFyIGVycm9yO1xuICAgICAgICAvLyBQcm9wIHR5cGUgdmFsaWRhdGlvbiBtYXkgdGhyb3cuIEluIGNhc2UgdGhleSBkbywgd2UgZG9uJ3Qgd2FudCB0b1xuICAgICAgICAvLyBmYWlsIHRoZSByZW5kZXIgcGhhc2Ugd2hlcmUgaXQgZGlkbid0IGZhaWwgYmVmb3JlLiBTbyB3ZSBsb2cgaXQuXG4gICAgICAgIC8vIEFmdGVyIHRoZXNlIGhhdmUgYmVlbiBjbGVhbmVkIHVwLCB3ZSdsbCBsZXQgdGhlbSB0aHJvdy5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIGlzIGludGVudGlvbmFsbHkgYW4gaW52YXJpYW50IHRoYXQgZ2V0cyBjYXVnaHQuIEl0J3MgdGhlIHNhbWVcbiAgICAgICAgICAvLyBiZWhhdmlvciBhcyB3aXRob3V0IHRoaXMgc3RhdGVtZW50IGV4Y2VwdCB3aXRoIGEgYmV0dGVyIG1lc3NhZ2UuXG4gICAgICAgICAgaWYgKHR5cGVvZiB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgdmFyIGVyciA9IEVycm9yKFxuICAgICAgICAgICAgICAoY29tcG9uZW50TmFtZSB8fCAnUmVhY3QgY2xhc3MnKSArICc6ICcgKyBsb2NhdGlvbiArICcgdHlwZSBgJyArIHR5cGVTcGVjTmFtZSArICdgIGlzIGludmFsaWQ7ICcgK1xuICAgICAgICAgICAgICAnaXQgbXVzdCBiZSBhIGZ1bmN0aW9uLCB1c3VhbGx5IGZyb20gdGhlIGBwcm9wLXR5cGVzYCBwYWNrYWdlLCBidXQgcmVjZWl2ZWQgYCcgKyB0eXBlb2YgdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0gKyAnYC4nXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgZXJyLm5hbWUgPSAnSW52YXJpYW50IFZpb2xhdGlvbic7XG4gICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVycm9yID0gdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0odmFsdWVzLCB0eXBlU3BlY05hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBudWxsLCBSZWFjdFByb3BUeXBlc1NlY3JldCk7XG4gICAgICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICAgICAgZXJyb3IgPSBleDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZXJyb3IgJiYgIShlcnJvciBpbnN0YW5jZW9mIEVycm9yKSkge1xuICAgICAgICAgIHByaW50V2FybmluZyhcbiAgICAgICAgICAgIChjb21wb25lbnROYW1lIHx8ICdSZWFjdCBjbGFzcycpICsgJzogdHlwZSBzcGVjaWZpY2F0aW9uIG9mICcgK1xuICAgICAgICAgICAgbG9jYXRpb24gKyAnIGAnICsgdHlwZVNwZWNOYW1lICsgJ2AgaXMgaW52YWxpZDsgdGhlIHR5cGUgY2hlY2tlciAnICtcbiAgICAgICAgICAgICdmdW5jdGlvbiBtdXN0IHJldHVybiBgbnVsbGAgb3IgYW4gYEVycm9yYCBidXQgcmV0dXJuZWQgYSAnICsgdHlwZW9mIGVycm9yICsgJy4gJyArXG4gICAgICAgICAgICAnWW91IG1heSBoYXZlIGZvcmdvdHRlbiB0byBwYXNzIGFuIGFyZ3VtZW50IHRvIHRoZSB0eXBlIGNoZWNrZXIgJyArXG4gICAgICAgICAgICAnY3JlYXRvciAoYXJyYXlPZiwgaW5zdGFuY2VPZiwgb2JqZWN0T2YsIG9uZU9mLCBvbmVPZlR5cGUsIGFuZCAnICtcbiAgICAgICAgICAgICdzaGFwZSBhbGwgcmVxdWlyZSBhbiBhcmd1bWVudCkuJ1xuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IgJiYgIShlcnJvci5tZXNzYWdlIGluIGxvZ2dlZFR5cGVGYWlsdXJlcykpIHtcbiAgICAgICAgICAvLyBPbmx5IG1vbml0b3IgdGhpcyBmYWlsdXJlIG9uY2UgYmVjYXVzZSB0aGVyZSB0ZW5kcyB0byBiZSBhIGxvdCBvZiB0aGVcbiAgICAgICAgICAvLyBzYW1lIGVycm9yLlxuICAgICAgICAgIGxvZ2dlZFR5cGVGYWlsdXJlc1tlcnJvci5tZXNzYWdlXSA9IHRydWU7XG5cbiAgICAgICAgICB2YXIgc3RhY2sgPSBnZXRTdGFjayA/IGdldFN0YWNrKCkgOiAnJztcblxuICAgICAgICAgIHByaW50V2FybmluZyhcbiAgICAgICAgICAgICdGYWlsZWQgJyArIGxvY2F0aW9uICsgJyB0eXBlOiAnICsgZXJyb3IubWVzc2FnZSArIChzdGFjayAhPSBudWxsID8gc3RhY2sgOiAnJylcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogUmVzZXRzIHdhcm5pbmcgY2FjaGUgd2hlbiB0ZXN0aW5nLlxuICpcbiAqIEBwcml2YXRlXG4gKi9cbmNoZWNrUHJvcFR5cGVzLnJlc2V0V2FybmluZ0NhY2hlID0gZnVuY3Rpb24oKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgbG9nZ2VkVHlwZUZhaWx1cmVzID0ge307XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjaGVja1Byb3BUeXBlcztcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgUmVhY3RJcyA9IHJlcXVpcmUoJ3JlYWN0LWlzJyk7XG52YXIgYXNzaWduID0gcmVxdWlyZSgnb2JqZWN0LWFzc2lnbicpO1xuXG52YXIgUmVhY3RQcm9wVHlwZXNTZWNyZXQgPSByZXF1aXJlKCcuL2xpYi9SZWFjdFByb3BUeXBlc1NlY3JldCcpO1xudmFyIGNoZWNrUHJvcFR5cGVzID0gcmVxdWlyZSgnLi9jaGVja1Byb3BUeXBlcycpO1xuXG52YXIgaGFzID0gRnVuY3Rpb24uY2FsbC5iaW5kKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkpO1xudmFyIHByaW50V2FybmluZyA9IGZ1bmN0aW9uKCkge307XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHByaW50V2FybmluZyA9IGZ1bmN0aW9uKHRleHQpIHtcbiAgICB2YXIgbWVzc2FnZSA9ICdXYXJuaW5nOiAnICsgdGV4dDtcbiAgICBpZiAodHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25zb2xlLmVycm9yKG1lc3NhZ2UpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgLy8gLS0tIFdlbGNvbWUgdG8gZGVidWdnaW5nIFJlYWN0IC0tLVxuICAgICAgLy8gVGhpcyBlcnJvciB3YXMgdGhyb3duIGFzIGEgY29udmVuaWVuY2Ugc28gdGhhdCB5b3UgY2FuIHVzZSB0aGlzIHN0YWNrXG4gICAgICAvLyB0byBmaW5kIHRoZSBjYWxsc2l0ZSB0aGF0IGNhdXNlZCB0aGlzIHdhcm5pbmcgdG8gZmlyZS5cbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICB9IGNhdGNoICh4KSB7fVxuICB9O1xufVxuXG5mdW5jdGlvbiBlbXB0eUZ1bmN0aW9uVGhhdFJldHVybnNOdWxsKCkge1xuICByZXR1cm4gbnVsbDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpc1ZhbGlkRWxlbWVudCwgdGhyb3dPbkRpcmVjdEFjY2Vzcykge1xuICAvKiBnbG9iYWwgU3ltYm9sICovXG4gIHZhciBJVEVSQVRPUl9TWU1CT0wgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC5pdGVyYXRvcjtcbiAgdmFyIEZBVVhfSVRFUkFUT1JfU1lNQk9MID0gJ0BAaXRlcmF0b3InOyAvLyBCZWZvcmUgU3ltYm9sIHNwZWMuXG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGl0ZXJhdG9yIG1ldGhvZCBmdW5jdGlvbiBjb250YWluZWQgb24gdGhlIGl0ZXJhYmxlIG9iamVjdC5cbiAgICpcbiAgICogQmUgc3VyZSB0byBpbnZva2UgdGhlIGZ1bmN0aW9uIHdpdGggdGhlIGl0ZXJhYmxlIGFzIGNvbnRleHQ6XG4gICAqXG4gICAqICAgICB2YXIgaXRlcmF0b3JGbiA9IGdldEl0ZXJhdG9yRm4obXlJdGVyYWJsZSk7XG4gICAqICAgICBpZiAoaXRlcmF0b3JGbikge1xuICAgKiAgICAgICB2YXIgaXRlcmF0b3IgPSBpdGVyYXRvckZuLmNhbGwobXlJdGVyYWJsZSk7XG4gICAqICAgICAgIC4uLlxuICAgKiAgICAgfVxuICAgKlxuICAgKiBAcGFyYW0gez9vYmplY3R9IG1heWJlSXRlcmFibGVcbiAgICogQHJldHVybiB7P2Z1bmN0aW9ufVxuICAgKi9cbiAgZnVuY3Rpb24gZ2V0SXRlcmF0b3JGbihtYXliZUl0ZXJhYmxlKSB7XG4gICAgdmFyIGl0ZXJhdG9yRm4gPSBtYXliZUl0ZXJhYmxlICYmIChJVEVSQVRPUl9TWU1CT0wgJiYgbWF5YmVJdGVyYWJsZVtJVEVSQVRPUl9TWU1CT0xdIHx8IG1heWJlSXRlcmFibGVbRkFVWF9JVEVSQVRPUl9TWU1CT0xdKTtcbiAgICBpZiAodHlwZW9mIGl0ZXJhdG9yRm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiBpdGVyYXRvckZuO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDb2xsZWN0aW9uIG9mIG1ldGhvZHMgdGhhdCBhbGxvdyBkZWNsYXJhdGlvbiBhbmQgdmFsaWRhdGlvbiBvZiBwcm9wcyB0aGF0IGFyZVxuICAgKiBzdXBwbGllZCB0byBSZWFjdCBjb21wb25lbnRzLiBFeGFtcGxlIHVzYWdlOlxuICAgKlxuICAgKiAgIHZhciBQcm9wcyA9IHJlcXVpcmUoJ1JlYWN0UHJvcFR5cGVzJyk7XG4gICAqICAgdmFyIE15QXJ0aWNsZSA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgICogICAgIHByb3BUeXBlczoge1xuICAgKiAgICAgICAvLyBBbiBvcHRpb25hbCBzdHJpbmcgcHJvcCBuYW1lZCBcImRlc2NyaXB0aW9uXCIuXG4gICAqICAgICAgIGRlc2NyaXB0aW9uOiBQcm9wcy5zdHJpbmcsXG4gICAqXG4gICAqICAgICAgIC8vIEEgcmVxdWlyZWQgZW51bSBwcm9wIG5hbWVkIFwiY2F0ZWdvcnlcIi5cbiAgICogICAgICAgY2F0ZWdvcnk6IFByb3BzLm9uZU9mKFsnTmV3cycsJ1Bob3RvcyddKS5pc1JlcXVpcmVkLFxuICAgKlxuICAgKiAgICAgICAvLyBBIHByb3AgbmFtZWQgXCJkaWFsb2dcIiB0aGF0IHJlcXVpcmVzIGFuIGluc3RhbmNlIG9mIERpYWxvZy5cbiAgICogICAgICAgZGlhbG9nOiBQcm9wcy5pbnN0YW5jZU9mKERpYWxvZykuaXNSZXF1aXJlZFxuICAgKiAgICAgfSxcbiAgICogICAgIHJlbmRlcjogZnVuY3Rpb24oKSB7IC4uLiB9XG4gICAqICAgfSk7XG4gICAqXG4gICAqIEEgbW9yZSBmb3JtYWwgc3BlY2lmaWNhdGlvbiBvZiBob3cgdGhlc2UgbWV0aG9kcyBhcmUgdXNlZDpcbiAgICpcbiAgICogICB0eXBlIDo9IGFycmF5fGJvb2x8ZnVuY3xvYmplY3R8bnVtYmVyfHN0cmluZ3xvbmVPZihbLi4uXSl8aW5zdGFuY2VPZiguLi4pXG4gICAqICAgZGVjbCA6PSBSZWFjdFByb3BUeXBlcy57dHlwZX0oLmlzUmVxdWlyZWQpP1xuICAgKlxuICAgKiBFYWNoIGFuZCBldmVyeSBkZWNsYXJhdGlvbiBwcm9kdWNlcyBhIGZ1bmN0aW9uIHdpdGggdGhlIHNhbWUgc2lnbmF0dXJlLiBUaGlzXG4gICAqIGFsbG93cyB0aGUgY3JlYXRpb24gb2YgY3VzdG9tIHZhbGlkYXRpb24gZnVuY3Rpb25zLiBGb3IgZXhhbXBsZTpcbiAgICpcbiAgICogIHZhciBNeUxpbmsgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gICAqICAgIHByb3BUeXBlczoge1xuICAgKiAgICAgIC8vIEFuIG9wdGlvbmFsIHN0cmluZyBvciBVUkkgcHJvcCBuYW1lZCBcImhyZWZcIi5cbiAgICogICAgICBocmVmOiBmdW5jdGlvbihwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUpIHtcbiAgICogICAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAqICAgICAgICBpZiAocHJvcFZhbHVlICE9IG51bGwgJiYgdHlwZW9mIHByb3BWYWx1ZSAhPT0gJ3N0cmluZycgJiZcbiAgICogICAgICAgICAgICAhKHByb3BWYWx1ZSBpbnN0YW5jZW9mIFVSSSkpIHtcbiAgICogICAgICAgICAgcmV0dXJuIG5ldyBFcnJvcihcbiAgICogICAgICAgICAgICAnRXhwZWN0ZWQgYSBzdHJpbmcgb3IgYW4gVVJJIGZvciAnICsgcHJvcE5hbWUgKyAnIGluICcgK1xuICAgKiAgICAgICAgICAgIGNvbXBvbmVudE5hbWVcbiAgICogICAgICAgICAgKTtcbiAgICogICAgICAgIH1cbiAgICogICAgICB9XG4gICAqICAgIH0sXG4gICAqICAgIHJlbmRlcjogZnVuY3Rpb24oKSB7Li4ufVxuICAgKiAgfSk7XG4gICAqXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cblxuICB2YXIgQU5PTllNT1VTID0gJzw8YW5vbnltb3VzPj4nO1xuXG4gIC8vIEltcG9ydGFudCFcbiAgLy8gS2VlcCB0aGlzIGxpc3QgaW4gc3luYyB3aXRoIHByb2R1Y3Rpb24gdmVyc2lvbiBpbiBgLi9mYWN0b3J5V2l0aFRocm93aW5nU2hpbXMuanNgLlxuICB2YXIgUmVhY3RQcm9wVHlwZXMgPSB7XG4gICAgYXJyYXk6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdhcnJheScpLFxuICAgIGJvb2w6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdib29sZWFuJyksXG4gICAgZnVuYzogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ2Z1bmN0aW9uJyksXG4gICAgbnVtYmVyOiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignbnVtYmVyJyksXG4gICAgb2JqZWN0OiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignb2JqZWN0JyksXG4gICAgc3RyaW5nOiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignc3RyaW5nJyksXG4gICAgc3ltYm9sOiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignc3ltYm9sJyksXG5cbiAgICBhbnk6IGNyZWF0ZUFueVR5cGVDaGVja2VyKCksXG4gICAgYXJyYXlPZjogY3JlYXRlQXJyYXlPZlR5cGVDaGVja2VyLFxuICAgIGVsZW1lbnQ6IGNyZWF0ZUVsZW1lbnRUeXBlQ2hlY2tlcigpLFxuICAgIGVsZW1lbnRUeXBlOiBjcmVhdGVFbGVtZW50VHlwZVR5cGVDaGVja2VyKCksXG4gICAgaW5zdGFuY2VPZjogY3JlYXRlSW5zdGFuY2VUeXBlQ2hlY2tlcixcbiAgICBub2RlOiBjcmVhdGVOb2RlQ2hlY2tlcigpLFxuICAgIG9iamVjdE9mOiBjcmVhdGVPYmplY3RPZlR5cGVDaGVja2VyLFxuICAgIG9uZU9mOiBjcmVhdGVFbnVtVHlwZUNoZWNrZXIsXG4gICAgb25lT2ZUeXBlOiBjcmVhdGVVbmlvblR5cGVDaGVja2VyLFxuICAgIHNoYXBlOiBjcmVhdGVTaGFwZVR5cGVDaGVja2VyLFxuICAgIGV4YWN0OiBjcmVhdGVTdHJpY3RTaGFwZVR5cGVDaGVja2VyLFxuICB9O1xuXG4gIC8qKlxuICAgKiBpbmxpbmVkIE9iamVjdC5pcyBwb2x5ZmlsbCB0byBhdm9pZCByZXF1aXJpbmcgY29uc3VtZXJzIHNoaXAgdGhlaXIgb3duXG4gICAqIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL09iamVjdC9pc1xuICAgKi9cbiAgLyplc2xpbnQtZGlzYWJsZSBuby1zZWxmLWNvbXBhcmUqL1xuICBmdW5jdGlvbiBpcyh4LCB5KSB7XG4gICAgLy8gU2FtZVZhbHVlIGFsZ29yaXRobVxuICAgIGlmICh4ID09PSB5KSB7XG4gICAgICAvLyBTdGVwcyAxLTUsIDctMTBcbiAgICAgIC8vIFN0ZXBzIDYuYi02LmU6ICswICE9IC0wXG4gICAgICByZXR1cm4geCAhPT0gMCB8fCAxIC8geCA9PT0gMSAvIHk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFN0ZXAgNi5hOiBOYU4gPT0gTmFOXG4gICAgICByZXR1cm4geCAhPT0geCAmJiB5ICE9PSB5O1xuICAgIH1cbiAgfVxuICAvKmVzbGludC1lbmFibGUgbm8tc2VsZi1jb21wYXJlKi9cblxuICAvKipcbiAgICogV2UgdXNlIGFuIEVycm9yLWxpa2Ugb2JqZWN0IGZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5IGFzIHBlb3BsZSBtYXkgY2FsbFxuICAgKiBQcm9wVHlwZXMgZGlyZWN0bHkgYW5kIGluc3BlY3QgdGhlaXIgb3V0cHV0LiBIb3dldmVyLCB3ZSBkb24ndCB1c2UgcmVhbFxuICAgKiBFcnJvcnMgYW55bW9yZS4gV2UgZG9uJ3QgaW5zcGVjdCB0aGVpciBzdGFjayBhbnl3YXksIGFuZCBjcmVhdGluZyB0aGVtXG4gICAqIGlzIHByb2hpYml0aXZlbHkgZXhwZW5zaXZlIGlmIHRoZXkgYXJlIGNyZWF0ZWQgdG9vIG9mdGVuLCBzdWNoIGFzIHdoYXRcbiAgICogaGFwcGVucyBpbiBvbmVPZlR5cGUoKSBmb3IgYW55IHR5cGUgYmVmb3JlIHRoZSBvbmUgdGhhdCBtYXRjaGVkLlxuICAgKi9cbiAgZnVuY3Rpb24gUHJvcFR5cGVFcnJvcihtZXNzYWdlKSB7XG4gICAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcbiAgICB0aGlzLnN0YWNrID0gJyc7XG4gIH1cbiAgLy8gTWFrZSBgaW5zdGFuY2VvZiBFcnJvcmAgc3RpbGwgd29yayBmb3IgcmV0dXJuZWQgZXJyb3JzLlxuICBQcm9wVHlwZUVycm9yLnByb3RvdHlwZSA9IEVycm9yLnByb3RvdHlwZTtcblxuICBmdW5jdGlvbiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSkge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICB2YXIgbWFudWFsUHJvcFR5cGVDYWxsQ2FjaGUgPSB7fTtcbiAgICAgIHZhciBtYW51YWxQcm9wVHlwZVdhcm5pbmdDb3VudCA9IDA7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNoZWNrVHlwZShpc1JlcXVpcmVkLCBwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUsIHNlY3JldCkge1xuICAgICAgY29tcG9uZW50TmFtZSA9IGNvbXBvbmVudE5hbWUgfHwgQU5PTllNT1VTO1xuICAgICAgcHJvcEZ1bGxOYW1lID0gcHJvcEZ1bGxOYW1lIHx8IHByb3BOYW1lO1xuXG4gICAgICBpZiAoc2VjcmV0ICE9PSBSZWFjdFByb3BUeXBlc1NlY3JldCkge1xuICAgICAgICBpZiAodGhyb3dPbkRpcmVjdEFjY2Vzcykge1xuICAgICAgICAgIC8vIE5ldyBiZWhhdmlvciBvbmx5IGZvciB1c2VycyBvZiBgcHJvcC10eXBlc2AgcGFja2FnZVxuICAgICAgICAgIHZhciBlcnIgPSBuZXcgRXJyb3IoXG4gICAgICAgICAgICAnQ2FsbGluZyBQcm9wVHlwZXMgdmFsaWRhdG9ycyBkaXJlY3RseSBpcyBub3Qgc3VwcG9ydGVkIGJ5IHRoZSBgcHJvcC10eXBlc2AgcGFja2FnZS4gJyArXG4gICAgICAgICAgICAnVXNlIGBQcm9wVHlwZXMuY2hlY2tQcm9wVHlwZXMoKWAgdG8gY2FsbCB0aGVtLiAnICtcbiAgICAgICAgICAgICdSZWFkIG1vcmUgYXQgaHR0cDovL2ZiLm1lL3VzZS1jaGVjay1wcm9wLXR5cGVzJ1xuICAgICAgICAgICk7XG4gICAgICAgICAgZXJyLm5hbWUgPSAnSW52YXJpYW50IFZpb2xhdGlvbic7XG4gICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICB9IGVsc2UgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgdHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgLy8gT2xkIGJlaGF2aW9yIGZvciBwZW9wbGUgdXNpbmcgUmVhY3QuUHJvcFR5cGVzXG4gICAgICAgICAgdmFyIGNhY2hlS2V5ID0gY29tcG9uZW50TmFtZSArICc6JyArIHByb3BOYW1lO1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICFtYW51YWxQcm9wVHlwZUNhbGxDYWNoZVtjYWNoZUtleV0gJiZcbiAgICAgICAgICAgIC8vIEF2b2lkIHNwYW1taW5nIHRoZSBjb25zb2xlIGJlY2F1c2UgdGhleSBhcmUgb2Z0ZW4gbm90IGFjdGlvbmFibGUgZXhjZXB0IGZvciBsaWIgYXV0aG9yc1xuICAgICAgICAgICAgbWFudWFsUHJvcFR5cGVXYXJuaW5nQ291bnQgPCAzXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICBwcmludFdhcm5pbmcoXG4gICAgICAgICAgICAgICdZb3UgYXJlIG1hbnVhbGx5IGNhbGxpbmcgYSBSZWFjdC5Qcm9wVHlwZXMgdmFsaWRhdGlvbiAnICtcbiAgICAgICAgICAgICAgJ2Z1bmN0aW9uIGZvciB0aGUgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBwcm9wIG9uIGAnICsgY29tcG9uZW50TmFtZSAgKyAnYC4gVGhpcyBpcyBkZXByZWNhdGVkICcgK1xuICAgICAgICAgICAgICAnYW5kIHdpbGwgdGhyb3cgaW4gdGhlIHN0YW5kYWxvbmUgYHByb3AtdHlwZXNgIHBhY2thZ2UuICcgK1xuICAgICAgICAgICAgICAnWW91IG1heSBiZSBzZWVpbmcgdGhpcyB3YXJuaW5nIGR1ZSB0byBhIHRoaXJkLXBhcnR5IFByb3BUeXBlcyAnICtcbiAgICAgICAgICAgICAgJ2xpYnJhcnkuIFNlZSBodHRwczovL2ZiLm1lL3JlYWN0LXdhcm5pbmctZG9udC1jYWxsLXByb3B0eXBlcyAnICsgJ2ZvciBkZXRhaWxzLidcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBtYW51YWxQcm9wVHlwZUNhbGxDYWNoZVtjYWNoZUtleV0gPSB0cnVlO1xuICAgICAgICAgICAgbWFudWFsUHJvcFR5cGVXYXJuaW5nQ291bnQrKztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChwcm9wc1twcm9wTmFtZV0gPT0gbnVsbCkge1xuICAgICAgICBpZiAoaXNSZXF1aXJlZCkge1xuICAgICAgICAgIGlmIChwcm9wc1twcm9wTmFtZV0gPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignVGhlICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBpcyBtYXJrZWQgYXMgcmVxdWlyZWQgJyArICgnaW4gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGJ1dCBpdHMgdmFsdWUgaXMgYG51bGxgLicpKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdUaGUgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIGlzIG1hcmtlZCBhcyByZXF1aXJlZCBpbiAnICsgKCdgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgYnV0IGl0cyB2YWx1ZSBpcyBgdW5kZWZpbmVkYC4nKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgY2hhaW5lZENoZWNrVHlwZSA9IGNoZWNrVHlwZS5iaW5kKG51bGwsIGZhbHNlKTtcbiAgICBjaGFpbmVkQ2hlY2tUeXBlLmlzUmVxdWlyZWQgPSBjaGVja1R5cGUuYmluZChudWxsLCB0cnVlKTtcblxuICAgIHJldHVybiBjaGFpbmVkQ2hlY2tUeXBlO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoZXhwZWN0ZWRUeXBlKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lLCBzZWNyZXQpIHtcbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgaWYgKHByb3BUeXBlICE9PSBleHBlY3RlZFR5cGUpIHtcbiAgICAgICAgLy8gYHByb3BWYWx1ZWAgYmVpbmcgaW5zdGFuY2Ugb2YsIHNheSwgZGF0ZS9yZWdleHAsIHBhc3MgdGhlICdvYmplY3QnXG4gICAgICAgIC8vIGNoZWNrLCBidXQgd2UgY2FuIG9mZmVyIGEgbW9yZSBwcmVjaXNlIGVycm9yIG1lc3NhZ2UgaGVyZSByYXRoZXIgdGhhblxuICAgICAgICAvLyAnb2YgdHlwZSBgb2JqZWN0YCcuXG4gICAgICAgIHZhciBwcmVjaXNlVHlwZSA9IGdldFByZWNpc2VUeXBlKHByb3BWYWx1ZSk7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgcHJlY2lzZVR5cGUgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgJykgKyAoJ2AnICsgZXhwZWN0ZWRUeXBlICsgJ2AuJykpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVBbnlUeXBlQ2hlY2tlcigpIHtcbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIoZW1wdHlGdW5jdGlvblRoYXRSZXR1cm5zTnVsbCk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVBcnJheU9mVHlwZUNoZWNrZXIodHlwZUNoZWNrZXIpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIGlmICh0eXBlb2YgdHlwZUNoZWNrZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdQcm9wZXJ0eSBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIGNvbXBvbmVudCBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCBoYXMgaW52YWxpZCBQcm9wVHlwZSBub3RhdGlvbiBpbnNpZGUgYXJyYXlPZi4nKTtcbiAgICAgIH1cbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICBpZiAoIUFycmF5LmlzQXJyYXkocHJvcFZhbHVlKSkge1xuICAgICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBwcm9wVHlwZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBhbiBhcnJheS4nKSk7XG4gICAgICB9XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BWYWx1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgZXJyb3IgPSB0eXBlQ2hlY2tlcihwcm9wVmFsdWUsIGksIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUgKyAnWycgKyBpICsgJ10nLCBSZWFjdFByb3BUeXBlc1NlY3JldCk7XG4gICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnRUeXBlQ2hlY2tlcigpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICBpZiAoIWlzVmFsaWRFbGVtZW50KHByb3BWYWx1ZSkpIHtcbiAgICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgcHJvcFR5cGUgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYSBzaW5nbGUgUmVhY3RFbGVtZW50LicpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlRWxlbWVudFR5cGVUeXBlQ2hlY2tlcigpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICBpZiAoIVJlYWN0SXMuaXNWYWxpZEVsZW1lbnRUeXBlKHByb3BWYWx1ZSkpIHtcbiAgICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgcHJvcFR5cGUgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYSBzaW5nbGUgUmVhY3RFbGVtZW50IHR5cGUuJykpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVJbnN0YW5jZVR5cGVDaGVja2VyKGV4cGVjdGVkQ2xhc3MpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIGlmICghKHByb3BzW3Byb3BOYW1lXSBpbnN0YW5jZW9mIGV4cGVjdGVkQ2xhc3MpKSB7XG4gICAgICAgIHZhciBleHBlY3RlZENsYXNzTmFtZSA9IGV4cGVjdGVkQ2xhc3MubmFtZSB8fCBBTk9OWU1PVVM7XG4gICAgICAgIHZhciBhY3R1YWxDbGFzc05hbWUgPSBnZXRDbGFzc05hbWUocHJvcHNbcHJvcE5hbWVdKTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgYWN0dWFsQ2xhc3NOYW1lICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkICcpICsgKCdpbnN0YW5jZSBvZiBgJyArIGV4cGVjdGVkQ2xhc3NOYW1lICsgJ2AuJykpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVFbnVtVHlwZUNoZWNrZXIoZXhwZWN0ZWRWYWx1ZXMpIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoZXhwZWN0ZWRWYWx1ZXMpKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICBwcmludFdhcm5pbmcoXG4gICAgICAgICAgICAnSW52YWxpZCBhcmd1bWVudHMgc3VwcGxpZWQgdG8gb25lT2YsIGV4cGVjdGVkIGFuIGFycmF5LCBnb3QgJyArIGFyZ3VtZW50cy5sZW5ndGggKyAnIGFyZ3VtZW50cy4gJyArXG4gICAgICAgICAgICAnQSBjb21tb24gbWlzdGFrZSBpcyB0byB3cml0ZSBvbmVPZih4LCB5LCB6KSBpbnN0ZWFkIG9mIG9uZU9mKFt4LCB5LCB6XSkuJ1xuICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcHJpbnRXYXJuaW5nKCdJbnZhbGlkIGFyZ3VtZW50IHN1cHBsaWVkIHRvIG9uZU9mLCBleHBlY3RlZCBhbiBhcnJheS4nKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGVtcHR5RnVuY3Rpb25UaGF0UmV0dXJuc051bGw7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBleHBlY3RlZFZhbHVlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoaXMocHJvcFZhbHVlLCBleHBlY3RlZFZhbHVlc1tpXSkpIHtcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB2YXIgdmFsdWVzU3RyaW5nID0gSlNPTi5zdHJpbmdpZnkoZXhwZWN0ZWRWYWx1ZXMsIGZ1bmN0aW9uIHJlcGxhY2VyKGtleSwgdmFsdWUpIHtcbiAgICAgICAgaWYgKGdldFByb3BUeXBlKHZhbHVlKSA9PT0gJ3N5bWJvbCcpIHtcbiAgICAgICAgICByZXR1cm4gU3RyaW5nKHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdmFsdWUgYCcgKyBTdHJpbmcocHJvcFZhbHVlKSArICdgICcgKyAoJ3N1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBvbmUgb2YgJyArIHZhbHVlc1N0cmluZyArICcuJykpO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlT2JqZWN0T2ZUeXBlQ2hlY2tlcih0eXBlQ2hlY2tlcikge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgaWYgKHR5cGVvZiB0eXBlQ2hlY2tlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ1Byb3BlcnR5IGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgY29tcG9uZW50IGAnICsgY29tcG9uZW50TmFtZSArICdgIGhhcyBpbnZhbGlkIFByb3BUeXBlIG5vdGF0aW9uIGluc2lkZSBvYmplY3RPZi4nKTtcbiAgICAgIH1cbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgaWYgKHByb3BUeXBlICE9PSAnb2JqZWN0Jykge1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBwcm9wVHlwZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBhbiBvYmplY3QuJykpO1xuICAgICAgfVxuICAgICAgZm9yICh2YXIga2V5IGluIHByb3BWYWx1ZSkge1xuICAgICAgICBpZiAoaGFzKHByb3BWYWx1ZSwga2V5KSkge1xuICAgICAgICAgIHZhciBlcnJvciA9IHR5cGVDaGVja2VyKHByb3BWYWx1ZSwga2V5LCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lICsgJy4nICsga2V5LCBSZWFjdFByb3BUeXBlc1NlY3JldCk7XG4gICAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgICAgIHJldHVybiBlcnJvcjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlVW5pb25UeXBlQ2hlY2tlcihhcnJheU9mVHlwZUNoZWNrZXJzKSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGFycmF5T2ZUeXBlQ2hlY2tlcnMpKSB7XG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gcHJpbnRXYXJuaW5nKCdJbnZhbGlkIGFyZ3VtZW50IHN1cHBsaWVkIHRvIG9uZU9mVHlwZSwgZXhwZWN0ZWQgYW4gaW5zdGFuY2Ugb2YgYXJyYXkuJykgOiB2b2lkIDA7XG4gICAgICByZXR1cm4gZW1wdHlGdW5jdGlvblRoYXRSZXR1cm5zTnVsbDtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFycmF5T2ZUeXBlQ2hlY2tlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBjaGVja2VyID0gYXJyYXlPZlR5cGVDaGVja2Vyc1tpXTtcbiAgICAgIGlmICh0eXBlb2YgY2hlY2tlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBwcmludFdhcm5pbmcoXG4gICAgICAgICAgJ0ludmFsaWQgYXJndW1lbnQgc3VwcGxpZWQgdG8gb25lT2ZUeXBlLiBFeHBlY3RlZCBhbiBhcnJheSBvZiBjaGVjayBmdW5jdGlvbnMsIGJ1dCAnICtcbiAgICAgICAgICAncmVjZWl2ZWQgJyArIGdldFBvc3RmaXhGb3JUeXBlV2FybmluZyhjaGVja2VyKSArICcgYXQgaW5kZXggJyArIGkgKyAnLidcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIGVtcHR5RnVuY3Rpb25UaGF0UmV0dXJuc051bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFycmF5T2ZUeXBlQ2hlY2tlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGNoZWNrZXIgPSBhcnJheU9mVHlwZUNoZWNrZXJzW2ldO1xuICAgICAgICBpZiAoY2hlY2tlcihwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUsIFJlYWN0UHJvcFR5cGVzU2VjcmV0KSA9PSBudWxsKSB7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBzdXBwbGllZCB0byAnICsgKCdgJyArIGNvbXBvbmVudE5hbWUgKyAnYC4nKSk7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVOb2RlQ2hlY2tlcigpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIGlmICghaXNOb2RlKHByb3BzW3Byb3BOYW1lXSkpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBzdXBwbGllZCB0byAnICsgKCdgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYSBSZWFjdE5vZGUuJykpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVTaGFwZVR5cGVDaGVja2VyKHNoYXBlVHlwZXMpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgaWYgKHByb3BUeXBlICE9PSAnb2JqZWN0Jykge1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgYCcgKyBwcm9wVHlwZSArICdgICcgKyAoJ3N1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBgb2JqZWN0YC4nKSk7XG4gICAgICB9XG4gICAgICBmb3IgKHZhciBrZXkgaW4gc2hhcGVUeXBlcykge1xuICAgICAgICB2YXIgY2hlY2tlciA9IHNoYXBlVHlwZXNba2V5XTtcbiAgICAgICAgaWYgKCFjaGVja2VyKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGVycm9yID0gY2hlY2tlcihwcm9wVmFsdWUsIGtleSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSArICcuJyArIGtleSwgUmVhY3RQcm9wVHlwZXNTZWNyZXQpO1xuICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlU3RyaWN0U2hhcGVUeXBlQ2hlY2tlcihzaGFwZVR5cGVzKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgIGlmIChwcm9wVHlwZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlIGAnICsgcHJvcFR5cGUgKyAnYCAnICsgKCdzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYG9iamVjdGAuJykpO1xuICAgICAgfVxuICAgICAgLy8gV2UgbmVlZCB0byBjaGVjayBhbGwga2V5cyBpbiBjYXNlIHNvbWUgYXJlIHJlcXVpcmVkIGJ1dCBtaXNzaW5nIGZyb21cbiAgICAgIC8vIHByb3BzLlxuICAgICAgdmFyIGFsbEtleXMgPSBhc3NpZ24oe30sIHByb3BzW3Byb3BOYW1lXSwgc2hhcGVUeXBlcyk7XG4gICAgICBmb3IgKHZhciBrZXkgaW4gYWxsS2V5cykge1xuICAgICAgICB2YXIgY2hlY2tlciA9IHNoYXBlVHlwZXNba2V5XTtcbiAgICAgICAgaWYgKCFjaGVja2VyKSB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKFxuICAgICAgICAgICAgJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIGtleSBgJyArIGtleSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLicgK1xuICAgICAgICAgICAgJ1xcbkJhZCBvYmplY3Q6ICcgKyBKU09OLnN0cmluZ2lmeShwcm9wc1twcm9wTmFtZV0sIG51bGwsICcgICcpICtcbiAgICAgICAgICAgICdcXG5WYWxpZCBrZXlzOiAnICsgIEpTT04uc3RyaW5naWZ5KE9iamVjdC5rZXlzKHNoYXBlVHlwZXMpLCBudWxsLCAnICAnKVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGVycm9yID0gY2hlY2tlcihwcm9wVmFsdWUsIGtleSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSArICcuJyArIGtleSwgUmVhY3RQcm9wVHlwZXNTZWNyZXQpO1xuICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBpc05vZGUocHJvcFZhbHVlKSB7XG4gICAgc3dpdGNoICh0eXBlb2YgcHJvcFZhbHVlKSB7XG4gICAgICBjYXNlICdudW1iZXInOlxuICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgIGNhc2UgJ3VuZGVmaW5lZCc6XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgY2FzZSAnYm9vbGVhbic6XG4gICAgICAgIHJldHVybiAhcHJvcFZhbHVlO1xuICAgICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkocHJvcFZhbHVlKSkge1xuICAgICAgICAgIHJldHVybiBwcm9wVmFsdWUuZXZlcnkoaXNOb2RlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocHJvcFZhbHVlID09PSBudWxsIHx8IGlzVmFsaWRFbGVtZW50KHByb3BWYWx1ZSkpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBpdGVyYXRvckZuID0gZ2V0SXRlcmF0b3JGbihwcm9wVmFsdWUpO1xuICAgICAgICBpZiAoaXRlcmF0b3JGbikge1xuICAgICAgICAgIHZhciBpdGVyYXRvciA9IGl0ZXJhdG9yRm4uY2FsbChwcm9wVmFsdWUpO1xuICAgICAgICAgIHZhciBzdGVwO1xuICAgICAgICAgIGlmIChpdGVyYXRvckZuICE9PSBwcm9wVmFsdWUuZW50cmllcykge1xuICAgICAgICAgICAgd2hpbGUgKCEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZSkge1xuICAgICAgICAgICAgICBpZiAoIWlzTm9kZShzdGVwLnZhbHVlKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBJdGVyYXRvciB3aWxsIHByb3ZpZGUgZW50cnkgW2ssdl0gdHVwbGVzIHJhdGhlciB0aGFuIHZhbHVlcy5cbiAgICAgICAgICAgIHdoaWxlICghKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmUpIHtcbiAgICAgICAgICAgICAgdmFyIGVudHJ5ID0gc3RlcC52YWx1ZTtcbiAgICAgICAgICAgICAgaWYgKGVudHJ5KSB7XG4gICAgICAgICAgICAgICAgaWYgKCFpc05vZGUoZW50cnlbMV0pKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGlzU3ltYm9sKHByb3BUeXBlLCBwcm9wVmFsdWUpIHtcbiAgICAvLyBOYXRpdmUgU3ltYm9sLlxuICAgIGlmIChwcm9wVHlwZSA9PT0gJ3N5bWJvbCcpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIC8vIDE5LjQuMy41IFN5bWJvbC5wcm90b3R5cGVbQEB0b1N0cmluZ1RhZ10gPT09ICdTeW1ib2wnXG4gICAgaWYgKHByb3BWYWx1ZVsnQEB0b1N0cmluZ1RhZyddID09PSAnU3ltYm9sJykge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgLy8gRmFsbGJhY2sgZm9yIG5vbi1zcGVjIGNvbXBsaWFudCBTeW1ib2xzIHdoaWNoIGFyZSBwb2x5ZmlsbGVkLlxuICAgIGlmICh0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIHByb3BWYWx1ZSBpbnN0YW5jZW9mIFN5bWJvbCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLy8gRXF1aXZhbGVudCBvZiBgdHlwZW9mYCBidXQgd2l0aCBzcGVjaWFsIGhhbmRsaW5nIGZvciBhcnJheSBhbmQgcmVnZXhwLlxuICBmdW5jdGlvbiBnZXRQcm9wVHlwZShwcm9wVmFsdWUpIHtcbiAgICB2YXIgcHJvcFR5cGUgPSB0eXBlb2YgcHJvcFZhbHVlO1xuICAgIGlmIChBcnJheS5pc0FycmF5KHByb3BWYWx1ZSkpIHtcbiAgICAgIHJldHVybiAnYXJyYXknO1xuICAgIH1cbiAgICBpZiAocHJvcFZhbHVlIGluc3RhbmNlb2YgUmVnRXhwKSB7XG4gICAgICAvLyBPbGQgd2Via2l0cyAoYXQgbGVhc3QgdW50aWwgQW5kcm9pZCA0LjApIHJldHVybiAnZnVuY3Rpb24nIHJhdGhlciB0aGFuXG4gICAgICAvLyAnb2JqZWN0JyBmb3IgdHlwZW9mIGEgUmVnRXhwLiBXZSdsbCBub3JtYWxpemUgdGhpcyBoZXJlIHNvIHRoYXQgL2JsYS9cbiAgICAgIC8vIHBhc3NlcyBQcm9wVHlwZXMub2JqZWN0LlxuICAgICAgcmV0dXJuICdvYmplY3QnO1xuICAgIH1cbiAgICBpZiAoaXNTeW1ib2wocHJvcFR5cGUsIHByb3BWYWx1ZSkpIHtcbiAgICAgIHJldHVybiAnc3ltYm9sJztcbiAgICB9XG4gICAgcmV0dXJuIHByb3BUeXBlO1xuICB9XG5cbiAgLy8gVGhpcyBoYW5kbGVzIG1vcmUgdHlwZXMgdGhhbiBgZ2V0UHJvcFR5cGVgLiBPbmx5IHVzZWQgZm9yIGVycm9yIG1lc3NhZ2VzLlxuICAvLyBTZWUgYGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyYC5cbiAgZnVuY3Rpb24gZ2V0UHJlY2lzZVR5cGUocHJvcFZhbHVlKSB7XG4gICAgaWYgKHR5cGVvZiBwcm9wVmFsdWUgPT09ICd1bmRlZmluZWQnIHx8IHByb3BWYWx1ZSA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuICcnICsgcHJvcFZhbHVlO1xuICAgIH1cbiAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgIGlmIChwcm9wVHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGlmIChwcm9wVmFsdWUgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICAgIHJldHVybiAnZGF0ZSc7XG4gICAgICB9IGVsc2UgaWYgKHByb3BWYWx1ZSBpbnN0YW5jZW9mIFJlZ0V4cCkge1xuICAgICAgICByZXR1cm4gJ3JlZ2V4cCc7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBwcm9wVHlwZTtcbiAgfVxuXG4gIC8vIFJldHVybnMgYSBzdHJpbmcgdGhhdCBpcyBwb3N0Zml4ZWQgdG8gYSB3YXJuaW5nIGFib3V0IGFuIGludmFsaWQgdHlwZS5cbiAgLy8gRm9yIGV4YW1wbGUsIFwidW5kZWZpbmVkXCIgb3IgXCJvZiB0eXBlIGFycmF5XCJcbiAgZnVuY3Rpb24gZ2V0UG9zdGZpeEZvclR5cGVXYXJuaW5nKHZhbHVlKSB7XG4gICAgdmFyIHR5cGUgPSBnZXRQcmVjaXNlVHlwZSh2YWx1ZSk7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlICdhcnJheSc6XG4gICAgICBjYXNlICdvYmplY3QnOlxuICAgICAgICByZXR1cm4gJ2FuICcgKyB0eXBlO1xuICAgICAgY2FzZSAnYm9vbGVhbic6XG4gICAgICBjYXNlICdkYXRlJzpcbiAgICAgIGNhc2UgJ3JlZ2V4cCc6XG4gICAgICAgIHJldHVybiAnYSAnICsgdHlwZTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiB0eXBlO1xuICAgIH1cbiAgfVxuXG4gIC8vIFJldHVybnMgY2xhc3MgbmFtZSBvZiB0aGUgb2JqZWN0LCBpZiBhbnkuXG4gIGZ1bmN0aW9uIGdldENsYXNzTmFtZShwcm9wVmFsdWUpIHtcbiAgICBpZiAoIXByb3BWYWx1ZS5jb25zdHJ1Y3RvciB8fCAhcHJvcFZhbHVlLmNvbnN0cnVjdG9yLm5hbWUpIHtcbiAgICAgIHJldHVybiBBTk9OWU1PVVM7XG4gICAgfVxuICAgIHJldHVybiBwcm9wVmFsdWUuY29uc3RydWN0b3IubmFtZTtcbiAgfVxuXG4gIFJlYWN0UHJvcFR5cGVzLmNoZWNrUHJvcFR5cGVzID0gY2hlY2tQcm9wVHlwZXM7XG4gIFJlYWN0UHJvcFR5cGVzLnJlc2V0V2FybmluZ0NhY2hlID0gY2hlY2tQcm9wVHlwZXMucmVzZXRXYXJuaW5nQ2FjaGU7XG4gIFJlYWN0UHJvcFR5cGVzLlByb3BUeXBlcyA9IFJlYWN0UHJvcFR5cGVzO1xuXG4gIHJldHVybiBSZWFjdFByb3BUeXBlcztcbn07XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIFJlYWN0UHJvcFR5cGVzU2VjcmV0ID0gcmVxdWlyZSgnLi9saWIvUmVhY3RQcm9wVHlwZXNTZWNyZXQnKTtcblxuZnVuY3Rpb24gZW1wdHlGdW5jdGlvbigpIHt9XG5mdW5jdGlvbiBlbXB0eUZ1bmN0aW9uV2l0aFJlc2V0KCkge31cbmVtcHR5RnVuY3Rpb25XaXRoUmVzZXQucmVzZXRXYXJuaW5nQ2FjaGUgPSBlbXB0eUZ1bmN0aW9uO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiBzaGltKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSwgc2VjcmV0KSB7XG4gICAgaWYgKHNlY3JldCA9PT0gUmVhY3RQcm9wVHlwZXNTZWNyZXQpIHtcbiAgICAgIC8vIEl0IGlzIHN0aWxsIHNhZmUgd2hlbiBjYWxsZWQgZnJvbSBSZWFjdC5cbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIGVyciA9IG5ldyBFcnJvcihcbiAgICAgICdDYWxsaW5nIFByb3BUeXBlcyB2YWxpZGF0b3JzIGRpcmVjdGx5IGlzIG5vdCBzdXBwb3J0ZWQgYnkgdGhlIGBwcm9wLXR5cGVzYCBwYWNrYWdlLiAnICtcbiAgICAgICdVc2UgUHJvcFR5cGVzLmNoZWNrUHJvcFR5cGVzKCkgdG8gY2FsbCB0aGVtLiAnICtcbiAgICAgICdSZWFkIG1vcmUgYXQgaHR0cDovL2ZiLm1lL3VzZS1jaGVjay1wcm9wLXR5cGVzJ1xuICAgICk7XG4gICAgZXJyLm5hbWUgPSAnSW52YXJpYW50IFZpb2xhdGlvbic7XG4gICAgdGhyb3cgZXJyO1xuICB9O1xuICBzaGltLmlzUmVxdWlyZWQgPSBzaGltO1xuICBmdW5jdGlvbiBnZXRTaGltKCkge1xuICAgIHJldHVybiBzaGltO1xuICB9O1xuICAvLyBJbXBvcnRhbnQhXG4gIC8vIEtlZXAgdGhpcyBsaXN0IGluIHN5bmMgd2l0aCBwcm9kdWN0aW9uIHZlcnNpb24gaW4gYC4vZmFjdG9yeVdpdGhUeXBlQ2hlY2tlcnMuanNgLlxuICB2YXIgUmVhY3RQcm9wVHlwZXMgPSB7XG4gICAgYXJyYXk6IHNoaW0sXG4gICAgYm9vbDogc2hpbSxcbiAgICBmdW5jOiBzaGltLFxuICAgIG51bWJlcjogc2hpbSxcbiAgICBvYmplY3Q6IHNoaW0sXG4gICAgc3RyaW5nOiBzaGltLFxuICAgIHN5bWJvbDogc2hpbSxcblxuICAgIGFueTogc2hpbSxcbiAgICBhcnJheU9mOiBnZXRTaGltLFxuICAgIGVsZW1lbnQ6IHNoaW0sXG4gICAgZWxlbWVudFR5cGU6IHNoaW0sXG4gICAgaW5zdGFuY2VPZjogZ2V0U2hpbSxcbiAgICBub2RlOiBzaGltLFxuICAgIG9iamVjdE9mOiBnZXRTaGltLFxuICAgIG9uZU9mOiBnZXRTaGltLFxuICAgIG9uZU9mVHlwZTogZ2V0U2hpbSxcbiAgICBzaGFwZTogZ2V0U2hpbSxcbiAgICBleGFjdDogZ2V0U2hpbSxcblxuICAgIGNoZWNrUHJvcFR5cGVzOiBlbXB0eUZ1bmN0aW9uV2l0aFJlc2V0LFxuICAgIHJlc2V0V2FybmluZ0NhY2hlOiBlbXB0eUZ1bmN0aW9uXG4gIH07XG5cbiAgUmVhY3RQcm9wVHlwZXMuUHJvcFR5cGVzID0gUmVhY3RQcm9wVHlwZXM7XG5cbiAgcmV0dXJuIFJlYWN0UHJvcFR5cGVzO1xufTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgdmFyIFJlYWN0SXMgPSByZXF1aXJlKCdyZWFjdC1pcycpO1xuXG4gIC8vIEJ5IGV4cGxpY2l0bHkgdXNpbmcgYHByb3AtdHlwZXNgIHlvdSBhcmUgb3B0aW5nIGludG8gbmV3IGRldmVsb3BtZW50IGJlaGF2aW9yLlxuICAvLyBodHRwOi8vZmIubWUvcHJvcC10eXBlcy1pbi1wcm9kXG4gIHZhciB0aHJvd09uRGlyZWN0QWNjZXNzID0gdHJ1ZTtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2ZhY3RvcnlXaXRoVHlwZUNoZWNrZXJzJykoUmVhY3RJcy5pc0VsZW1lbnQsIHRocm93T25EaXJlY3RBY2Nlc3MpO1xufSBlbHNlIHtcbiAgLy8gQnkgZXhwbGljaXRseSB1c2luZyBgcHJvcC10eXBlc2AgeW91IGFyZSBvcHRpbmcgaW50byBuZXcgcHJvZHVjdGlvbiBiZWhhdmlvci5cbiAgLy8gaHR0cDovL2ZiLm1lL3Byb3AtdHlwZXMtaW4tcHJvZFxuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZmFjdG9yeVdpdGhUaHJvd2luZ1NoaW1zJykoKTtcbn1cbiIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgZGVmYXVsdDogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IGhhc0NsYXNzO1xuXG5mdW5jdGlvbiBoYXNDbGFzcyhlbGVtZW50LCBjbGFzc05hbWUpIHtcbiAgaWYgKGVsZW1lbnQuY2xhc3NMaXN0KSByZXR1cm4gISFjbGFzc05hbWUgJiYgZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoY2xhc3NOYW1lKTtlbHNlIHJldHVybiAoXCIgXCIgKyAoZWxlbWVudC5jbGFzc05hbWUuYmFzZVZhbCB8fCBlbGVtZW50LmNsYXNzTmFtZSkgKyBcIiBcIikuaW5kZXhPZihcIiBcIiArIGNsYXNzTmFtZSArIFwiIFwiKSAhPT0gLTE7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1tcImRlZmF1bHRcIl07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gYWRkQ2xhc3M7XG5cbnZhciBfaGFzQ2xhc3MgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2hhc0NsYXNzXCIpKTtcblxuZnVuY3Rpb24gYWRkQ2xhc3MoZWxlbWVudCwgY2xhc3NOYW1lKSB7XG4gIGlmIChlbGVtZW50LmNsYXNzTGlzdCkgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7ZWxzZSBpZiAoISgwLCBfaGFzQ2xhc3MuZGVmYXVsdCkoZWxlbWVudCwgY2xhc3NOYW1lKSkgaWYgKHR5cGVvZiBlbGVtZW50LmNsYXNzTmFtZSA9PT0gJ3N0cmluZycpIGVsZW1lbnQuY2xhc3NOYW1lID0gZWxlbWVudC5jbGFzc05hbWUgKyAnICcgKyBjbGFzc05hbWU7ZWxzZSBlbGVtZW50LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAoZWxlbWVudC5jbGFzc05hbWUgJiYgZWxlbWVudC5jbGFzc05hbWUuYmFzZVZhbCB8fCAnJykgKyAnICcgKyBjbGFzc05hbWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdOyIsIid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gcmVwbGFjZUNsYXNzTmFtZShvcmlnQ2xhc3MsIGNsYXNzVG9SZW1vdmUpIHtcbiAgcmV0dXJuIG9yaWdDbGFzcy5yZXBsYWNlKG5ldyBSZWdFeHAoJyhefFxcXFxzKScgKyBjbGFzc1RvUmVtb3ZlICsgJyg/OlxcXFxzfCQpJywgJ2cnKSwgJyQxJykucmVwbGFjZSgvXFxzKy9nLCAnICcpLnJlcGxhY2UoL15cXHMqfFxccyokL2csICcnKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiByZW1vdmVDbGFzcyhlbGVtZW50LCBjbGFzc05hbWUpIHtcbiAgaWYgKGVsZW1lbnQuY2xhc3NMaXN0KSBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTtlbHNlIGlmICh0eXBlb2YgZWxlbWVudC5jbGFzc05hbWUgPT09ICdzdHJpbmcnKSBlbGVtZW50LmNsYXNzTmFtZSA9IHJlcGxhY2VDbGFzc05hbWUoZWxlbWVudC5jbGFzc05hbWUsIGNsYXNzTmFtZSk7ZWxzZSBlbGVtZW50LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCByZXBsYWNlQ2xhc3NOYW1lKGVsZW1lbnQuY2xhc3NOYW1lICYmIGVsZW1lbnQuY2xhc3NOYW1lLmJhc2VWYWwgfHwgJycsIGNsYXNzTmFtZSkpO1xufTsiLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbmZ1bmN0aW9uIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgLy8gQ2FsbCB0aGlzLmNvbnN0cnVjdG9yLmdEU0ZQIHRvIHN1cHBvcnQgc3ViLWNsYXNzZXMuXG4gIHZhciBzdGF0ZSA9IHRoaXMuY29uc3RydWN0b3IuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzKHRoaXMucHJvcHMsIHRoaXMuc3RhdGUpO1xuICBpZiAoc3RhdGUgIT09IG51bGwgJiYgc3RhdGUgIT09IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuc2V0U3RhdGUoc3RhdGUpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gIC8vIENhbGwgdGhpcy5jb25zdHJ1Y3Rvci5nRFNGUCB0byBzdXBwb3J0IHN1Yi1jbGFzc2VzLlxuICAvLyBVc2UgdGhlIHNldFN0YXRlKCkgdXBkYXRlciB0byBlbnN1cmUgc3RhdGUgaXNuJ3Qgc3RhbGUgaW4gY2VydGFpbiBlZGdlIGNhc2VzLlxuICBmdW5jdGlvbiB1cGRhdGVyKHByZXZTdGF0ZSkge1xuICAgIHZhciBzdGF0ZSA9IHRoaXMuY29uc3RydWN0b3IuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzKG5leHRQcm9wcywgcHJldlN0YXRlKTtcbiAgICByZXR1cm4gc3RhdGUgIT09IG51bGwgJiYgc3RhdGUgIT09IHVuZGVmaW5lZCA/IHN0YXRlIDogbnVsbDtcbiAgfVxuICAvLyBCaW5kaW5nIFwidGhpc1wiIGlzIGltcG9ydGFudCBmb3Igc2hhbGxvdyByZW5kZXJlciBzdXBwb3J0LlxuICB0aGlzLnNldFN0YXRlKHVwZGF0ZXIuYmluZCh0aGlzKSk7XG59XG5cbmZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVcGRhdGUobmV4dFByb3BzLCBuZXh0U3RhdGUpIHtcbiAgdHJ5IHtcbiAgICB2YXIgcHJldlByb3BzID0gdGhpcy5wcm9wcztcbiAgICB2YXIgcHJldlN0YXRlID0gdGhpcy5zdGF0ZTtcbiAgICB0aGlzLnByb3BzID0gbmV4dFByb3BzO1xuICAgIHRoaXMuc3RhdGUgPSBuZXh0U3RhdGU7XG4gICAgdGhpcy5fX3JlYWN0SW50ZXJuYWxTbmFwc2hvdEZsYWcgPSB0cnVlO1xuICAgIHRoaXMuX19yZWFjdEludGVybmFsU25hcHNob3QgPSB0aGlzLmdldFNuYXBzaG90QmVmb3JlVXBkYXRlKFxuICAgICAgcHJldlByb3BzLFxuICAgICAgcHJldlN0YXRlXG4gICAgKTtcbiAgfSBmaW5hbGx5IHtcbiAgICB0aGlzLnByb3BzID0gcHJldlByb3BzO1xuICAgIHRoaXMuc3RhdGUgPSBwcmV2U3RhdGU7XG4gIH1cbn1cblxuLy8gUmVhY3QgbWF5IHdhcm4gYWJvdXQgY1dNL2NXUlAvY1dVIG1ldGhvZHMgYmVpbmcgZGVwcmVjYXRlZC5cbi8vIEFkZCBhIGZsYWcgdG8gc3VwcHJlc3MgdGhlc2Ugd2FybmluZ3MgZm9yIHRoaXMgc3BlY2lhbCBjYXNlLlxuY29tcG9uZW50V2lsbE1vdW50Ll9fc3VwcHJlc3NEZXByZWNhdGlvbldhcm5pbmcgPSB0cnVlO1xuY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcy5fX3N1cHByZXNzRGVwcmVjYXRpb25XYXJuaW5nID0gdHJ1ZTtcbmNvbXBvbmVudFdpbGxVcGRhdGUuX19zdXBwcmVzc0RlcHJlY2F0aW9uV2FybmluZyA9IHRydWU7XG5cbmZ1bmN0aW9uIHBvbHlmaWxsKENvbXBvbmVudCkge1xuICB2YXIgcHJvdG90eXBlID0gQ29tcG9uZW50LnByb3RvdHlwZTtcblxuICBpZiAoIXByb3RvdHlwZSB8fCAhcHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0NhbiBvbmx5IHBvbHlmaWxsIGNsYXNzIGNvbXBvbmVudHMnKTtcbiAgfVxuXG4gIGlmIChcbiAgICB0eXBlb2YgQ29tcG9uZW50LmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyAhPT0gJ2Z1bmN0aW9uJyAmJlxuICAgIHR5cGVvZiBwcm90b3R5cGUuZ2V0U25hcHNob3RCZWZvcmVVcGRhdGUgIT09ICdmdW5jdGlvbidcbiAgKSB7XG4gICAgcmV0dXJuIENvbXBvbmVudDtcbiAgfVxuXG4gIC8vIElmIG5ldyBjb21wb25lbnQgQVBJcyBhcmUgZGVmaW5lZCwgXCJ1bnNhZmVcIiBsaWZlY3ljbGVzIHdvbid0IGJlIGNhbGxlZC5cbiAgLy8gRXJyb3IgaWYgYW55IG9mIHRoZXNlIGxpZmVjeWNsZXMgYXJlIHByZXNlbnQsXG4gIC8vIEJlY2F1c2UgdGhleSB3b3VsZCB3b3JrIGRpZmZlcmVudGx5IGJldHdlZW4gb2xkZXIgYW5kIG5ld2VyICgxNi4zKykgdmVyc2lvbnMgb2YgUmVhY3QuXG4gIHZhciBmb3VuZFdpbGxNb3VudE5hbWUgPSBudWxsO1xuICB2YXIgZm91bmRXaWxsUmVjZWl2ZVByb3BzTmFtZSA9IG51bGw7XG4gIHZhciBmb3VuZFdpbGxVcGRhdGVOYW1lID0gbnVsbDtcbiAgaWYgKHR5cGVvZiBwcm90b3R5cGUuY29tcG9uZW50V2lsbE1vdW50ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgZm91bmRXaWxsTW91bnROYW1lID0gJ2NvbXBvbmVudFdpbGxNb3VudCc7XG4gIH0gZWxzZSBpZiAodHlwZW9mIHByb3RvdHlwZS5VTlNBRkVfY29tcG9uZW50V2lsbE1vdW50ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgZm91bmRXaWxsTW91bnROYW1lID0gJ1VOU0FGRV9jb21wb25lbnRXaWxsTW91bnQnO1xuICB9XG4gIGlmICh0eXBlb2YgcHJvdG90eXBlLmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMgPT09ICdmdW5jdGlvbicpIHtcbiAgICBmb3VuZFdpbGxSZWNlaXZlUHJvcHNOYW1lID0gJ2NvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMnO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBwcm90b3R5cGUuVU5TQUZFX2NvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMgPT09ICdmdW5jdGlvbicpIHtcbiAgICBmb3VuZFdpbGxSZWNlaXZlUHJvcHNOYW1lID0gJ1VOU0FGRV9jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzJztcbiAgfVxuICBpZiAodHlwZW9mIHByb3RvdHlwZS5jb21wb25lbnRXaWxsVXBkYXRlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgZm91bmRXaWxsVXBkYXRlTmFtZSA9ICdjb21wb25lbnRXaWxsVXBkYXRlJztcbiAgfSBlbHNlIGlmICh0eXBlb2YgcHJvdG90eXBlLlVOU0FGRV9jb21wb25lbnRXaWxsVXBkYXRlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgZm91bmRXaWxsVXBkYXRlTmFtZSA9ICdVTlNBRkVfY29tcG9uZW50V2lsbFVwZGF0ZSc7XG4gIH1cbiAgaWYgKFxuICAgIGZvdW5kV2lsbE1vdW50TmFtZSAhPT0gbnVsbCB8fFxuICAgIGZvdW5kV2lsbFJlY2VpdmVQcm9wc05hbWUgIT09IG51bGwgfHxcbiAgICBmb3VuZFdpbGxVcGRhdGVOYW1lICE9PSBudWxsXG4gICkge1xuICAgIHZhciBjb21wb25lbnROYW1lID0gQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvbmVudC5uYW1lO1xuICAgIHZhciBuZXdBcGlOYW1lID1cbiAgICAgIHR5cGVvZiBDb21wb25lbnQuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzID09PSAnZnVuY3Rpb24nXG4gICAgICAgID8gJ2dldERlcml2ZWRTdGF0ZUZyb21Qcm9wcygpJ1xuICAgICAgICA6ICdnZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZSgpJztcblxuICAgIHRocm93IEVycm9yKFxuICAgICAgJ1Vuc2FmZSBsZWdhY3kgbGlmZWN5Y2xlcyB3aWxsIG5vdCBiZSBjYWxsZWQgZm9yIGNvbXBvbmVudHMgdXNpbmcgbmV3IGNvbXBvbmVudCBBUElzLlxcblxcbicgK1xuICAgICAgICBjb21wb25lbnROYW1lICtcbiAgICAgICAgJyB1c2VzICcgK1xuICAgICAgICBuZXdBcGlOYW1lICtcbiAgICAgICAgJyBidXQgYWxzbyBjb250YWlucyB0aGUgZm9sbG93aW5nIGxlZ2FjeSBsaWZlY3ljbGVzOicgK1xuICAgICAgICAoZm91bmRXaWxsTW91bnROYW1lICE9PSBudWxsID8gJ1xcbiAgJyArIGZvdW5kV2lsbE1vdW50TmFtZSA6ICcnKSArXG4gICAgICAgIChmb3VuZFdpbGxSZWNlaXZlUHJvcHNOYW1lICE9PSBudWxsXG4gICAgICAgICAgPyAnXFxuICAnICsgZm91bmRXaWxsUmVjZWl2ZVByb3BzTmFtZVxuICAgICAgICAgIDogJycpICtcbiAgICAgICAgKGZvdW5kV2lsbFVwZGF0ZU5hbWUgIT09IG51bGwgPyAnXFxuICAnICsgZm91bmRXaWxsVXBkYXRlTmFtZSA6ICcnKSArXG4gICAgICAgICdcXG5cXG5UaGUgYWJvdmUgbGlmZWN5Y2xlcyBzaG91bGQgYmUgcmVtb3ZlZC4gTGVhcm4gbW9yZSBhYm91dCB0aGlzIHdhcm5pbmcgaGVyZTpcXG4nICtcbiAgICAgICAgJ2h0dHBzOi8vZmIubWUvcmVhY3QtYXN5bmMtY29tcG9uZW50LWxpZmVjeWNsZS1ob29rcydcbiAgICApO1xuICB9XG5cbiAgLy8gUmVhY3QgPD0gMTYuMiBkb2VzIG5vdCBzdXBwb3J0IHN0YXRpYyBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMuXG4gIC8vIEFzIGEgd29ya2Fyb3VuZCwgdXNlIGNXTSBhbmQgY1dSUCB0byBpbnZva2UgdGhlIG5ldyBzdGF0aWMgbGlmZWN5Y2xlLlxuICAvLyBOZXdlciB2ZXJzaW9ucyBvZiBSZWFjdCB3aWxsIGlnbm9yZSB0aGVzZSBsaWZlY3ljbGVzIGlmIGdEU0ZQIGV4aXN0cy5cbiAgaWYgKHR5cGVvZiBDb21wb25lbnQuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcHJvdG90eXBlLmNvbXBvbmVudFdpbGxNb3VudCA9IGNvbXBvbmVudFdpbGxNb3VudDtcbiAgICBwcm90b3R5cGUuY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyA9IGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHM7XG4gIH1cblxuICAvLyBSZWFjdCA8PSAxNi4yIGRvZXMgbm90IHN1cHBvcnQgZ2V0U25hcHNob3RCZWZvcmVVcGRhdGUuXG4gIC8vIEFzIGEgd29ya2Fyb3VuZCwgdXNlIGNXVSB0byBpbnZva2UgdGhlIG5ldyBsaWZlY3ljbGUuXG4gIC8vIE5ld2VyIHZlcnNpb25zIG9mIFJlYWN0IHdpbGwgaWdub3JlIHRoYXQgbGlmZWN5Y2xlIGlmIGdTQlUgZXhpc3RzLlxuICBpZiAodHlwZW9mIHByb3RvdHlwZS5nZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGlmICh0eXBlb2YgcHJvdG90eXBlLmNvbXBvbmVudERpZFVwZGF0ZSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAnQ2Fubm90IHBvbHlmaWxsIGdldFNuYXBzaG90QmVmb3JlVXBkYXRlKCkgZm9yIGNvbXBvbmVudHMgdGhhdCBkbyBub3QgZGVmaW5lIGNvbXBvbmVudERpZFVwZGF0ZSgpIG9uIHRoZSBwcm90b3R5cGUnXG4gICAgICApO1xuICAgIH1cblxuICAgIHByb3RvdHlwZS5jb21wb25lbnRXaWxsVXBkYXRlID0gY29tcG9uZW50V2lsbFVwZGF0ZTtcblxuICAgIHZhciBjb21wb25lbnREaWRVcGRhdGUgPSBwcm90b3R5cGUuY29tcG9uZW50RGlkVXBkYXRlO1xuXG4gICAgcHJvdG90eXBlLmNvbXBvbmVudERpZFVwZGF0ZSA9IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZVBvbHlmaWxsKFxuICAgICAgcHJldlByb3BzLFxuICAgICAgcHJldlN0YXRlLFxuICAgICAgbWF5YmVTbmFwc2hvdFxuICAgICkge1xuICAgICAgLy8gMTYuMysgd2lsbCBub3QgZXhlY3V0ZSBvdXIgd2lsbC11cGRhdGUgbWV0aG9kO1xuICAgICAgLy8gSXQgd2lsbCBwYXNzIGEgc25hcHNob3QgdmFsdWUgdG8gZGlkLXVwZGF0ZSB0aG91Z2guXG4gICAgICAvLyBPbGRlciB2ZXJzaW9ucyB3aWxsIHJlcXVpcmUgb3VyIHBvbHlmaWxsZWQgd2lsbC11cGRhdGUgdmFsdWUuXG4gICAgICAvLyBXZSBuZWVkIHRvIGhhbmRsZSBib3RoIGNhc2VzLCBidXQgY2FuJ3QganVzdCBjaGVjayBmb3IgdGhlIHByZXNlbmNlIG9mIFwibWF5YmVTbmFwc2hvdFwiLFxuICAgICAgLy8gQmVjYXVzZSBmb3IgPD0gMTUueCB2ZXJzaW9ucyB0aGlzIG1pZ2h0IGJlIGEgXCJwcmV2Q29udGV4dFwiIG9iamVjdC5cbiAgICAgIC8vIFdlIGFsc28gY2FuJ3QganVzdCBjaGVjayBcIl9fcmVhY3RJbnRlcm5hbFNuYXBzaG90XCIsXG4gICAgICAvLyBCZWNhdXNlIGdldC1zbmFwc2hvdCBtaWdodCByZXR1cm4gYSBmYWxzeSB2YWx1ZS5cbiAgICAgIC8vIFNvIGNoZWNrIGZvciB0aGUgZXhwbGljaXQgX19yZWFjdEludGVybmFsU25hcHNob3RGbGFnIGZsYWcgdG8gZGV0ZXJtaW5lIGJlaGF2aW9yLlxuICAgICAgdmFyIHNuYXBzaG90ID0gdGhpcy5fX3JlYWN0SW50ZXJuYWxTbmFwc2hvdEZsYWdcbiAgICAgICAgPyB0aGlzLl9fcmVhY3RJbnRlcm5hbFNuYXBzaG90XG4gICAgICAgIDogbWF5YmVTbmFwc2hvdDtcblxuICAgICAgY29tcG9uZW50RGlkVXBkYXRlLmNhbGwodGhpcywgcHJldlByb3BzLCBwcmV2U3RhdGUsIHNuYXBzaG90KTtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIENvbXBvbmVudDtcbn1cblxuZXhwb3J0IHsgcG9seWZpbGwgfTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5jbGFzc05hbWVzU2hhcGUgPSBleHBvcnRzLnRpbWVvdXRzU2hhcGUgPSB2b2lkIDA7XG5cbnZhciBfcHJvcFR5cGVzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicHJvcC10eXBlc1wiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciB0aW1lb3V0c1NoYXBlID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IF9wcm9wVHlwZXMuZGVmYXVsdC5vbmVPZlR5cGUoW19wcm9wVHlwZXMuZGVmYXVsdC5udW1iZXIsIF9wcm9wVHlwZXMuZGVmYXVsdC5zaGFwZSh7XG4gIGVudGVyOiBfcHJvcFR5cGVzLmRlZmF1bHQubnVtYmVyLFxuICBleGl0OiBfcHJvcFR5cGVzLmRlZmF1bHQubnVtYmVyXG59KS5pc1JlcXVpcmVkXSkgOiBudWxsO1xuZXhwb3J0cy50aW1lb3V0c1NoYXBlID0gdGltZW91dHNTaGFwZTtcbnZhciBjbGFzc05hbWVzU2hhcGUgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gX3Byb3BUeXBlcy5kZWZhdWx0Lm9uZU9mVHlwZShbX3Byb3BUeXBlcy5kZWZhdWx0LnN0cmluZywgX3Byb3BUeXBlcy5kZWZhdWx0LnNoYXBlKHtcbiAgZW50ZXI6IF9wcm9wVHlwZXMuZGVmYXVsdC5zdHJpbmcsXG4gIGV4aXQ6IF9wcm9wVHlwZXMuZGVmYXVsdC5zdHJpbmcsXG4gIGFjdGl2ZTogX3Byb3BUeXBlcy5kZWZhdWx0LnN0cmluZ1xufSksIF9wcm9wVHlwZXMuZGVmYXVsdC5zaGFwZSh7XG4gIGVudGVyOiBfcHJvcFR5cGVzLmRlZmF1bHQuc3RyaW5nLFxuICBlbnRlckRvbmU6IF9wcm9wVHlwZXMuZGVmYXVsdC5zdHJpbmcsXG4gIGVudGVyQWN0aXZlOiBfcHJvcFR5cGVzLmRlZmF1bHQuc3RyaW5nLFxuICBleGl0OiBfcHJvcFR5cGVzLmRlZmF1bHQuc3RyaW5nLFxuICBleGl0RG9uZTogX3Byb3BUeXBlcy5kZWZhdWx0LnN0cmluZyxcbiAgZXhpdEFjdGl2ZTogX3Byb3BUeXBlcy5kZWZhdWx0LnN0cmluZ1xufSldKSA6IG51bGw7XG5leHBvcnRzLmNsYXNzTmFtZXNTaGFwZSA9IGNsYXNzTmFtZXNTaGFwZTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IGV4cG9ydHMuRVhJVElORyA9IGV4cG9ydHMuRU5URVJFRCA9IGV4cG9ydHMuRU5URVJJTkcgPSBleHBvcnRzLkVYSVRFRCA9IGV4cG9ydHMuVU5NT1VOVEVEID0gdm9pZCAwO1xuXG52YXIgUHJvcFR5cGVzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInByb3AtdHlwZXNcIikpO1xuXG52YXIgX3JlYWN0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgX3JlYWN0RG9tID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3QtZG9tXCIpKTtcblxudmFyIF9yZWFjdExpZmVjeWNsZXNDb21wYXQgPSByZXF1aXJlKFwicmVhY3QtbGlmZWN5Y2xlcy1jb21wYXRcIik7XG5cbnZhciBfUHJvcFR5cGVzID0gcmVxdWlyZShcIi4vdXRpbHMvUHJvcFR5cGVzXCIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHsgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkgeyByZXR1cm4gb2JqOyB9IGVsc2UgeyB2YXIgbmV3T2JqID0ge307IGlmIChvYmogIT0gbnVsbCkgeyBmb3IgKHZhciBrZXkgaW4gb2JqKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7IHZhciBkZXNjID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IHt9OyBpZiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTsgfSBlbHNlIHsgbmV3T2JqW2tleV0gPSBvYmpba2V5XTsgfSB9IH0gfSBuZXdPYmouZGVmYXVsdCA9IG9iajsgcmV0dXJuIG5ld09iajsgfSB9XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpIHsgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307IHZhciB0YXJnZXQgPSB7fTsgdmFyIHNvdXJjZUtleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpOyB2YXIga2V5LCBpOyBmb3IgKGkgPSAwOyBpIDwgc291cmNlS2V5cy5sZW5ndGg7IGkrKykgeyBrZXkgPSBzb3VyY2VLZXlzW2ldOyBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlOyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzTG9vc2Uoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzLnByb3RvdHlwZSk7IHN1YkNsYXNzLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IHN1YkNsYXNzOyBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBVTk1PVU5URUQgPSAndW5tb3VudGVkJztcbmV4cG9ydHMuVU5NT1VOVEVEID0gVU5NT1VOVEVEO1xudmFyIEVYSVRFRCA9ICdleGl0ZWQnO1xuZXhwb3J0cy5FWElURUQgPSBFWElURUQ7XG52YXIgRU5URVJJTkcgPSAnZW50ZXJpbmcnO1xuZXhwb3J0cy5FTlRFUklORyA9IEVOVEVSSU5HO1xudmFyIEVOVEVSRUQgPSAnZW50ZXJlZCc7XG5leHBvcnRzLkVOVEVSRUQgPSBFTlRFUkVEO1xudmFyIEVYSVRJTkcgPSAnZXhpdGluZyc7XG4vKipcbiAqIFRoZSBUcmFuc2l0aW9uIGNvbXBvbmVudCBsZXRzIHlvdSBkZXNjcmliZSBhIHRyYW5zaXRpb24gZnJvbSBvbmUgY29tcG9uZW50XG4gKiBzdGF0ZSB0byBhbm90aGVyIF9vdmVyIHRpbWVfIHdpdGggYSBzaW1wbGUgZGVjbGFyYXRpdmUgQVBJLiBNb3N0IGNvbW1vbmx5XG4gKiBpdCdzIHVzZWQgdG8gYW5pbWF0ZSB0aGUgbW91bnRpbmcgYW5kIHVubW91bnRpbmcgb2YgYSBjb21wb25lbnQsIGJ1dCBjYW4gYWxzb1xuICogYmUgdXNlZCB0byBkZXNjcmliZSBpbi1wbGFjZSB0cmFuc2l0aW9uIHN0YXRlcyBhcyB3ZWxsLlxuICpcbiAqIEJ5IGRlZmF1bHQgdGhlIGBUcmFuc2l0aW9uYCBjb21wb25lbnQgZG9lcyBub3QgYWx0ZXIgdGhlIGJlaGF2aW9yIG9mIHRoZVxuICogY29tcG9uZW50IGl0IHJlbmRlcnMsIGl0IG9ubHkgdHJhY2tzIFwiZW50ZXJcIiBhbmQgXCJleGl0XCIgc3RhdGVzIGZvciB0aGUgY29tcG9uZW50cy5cbiAqIEl0J3MgdXAgdG8geW91IHRvIGdpdmUgbWVhbmluZyBhbmQgZWZmZWN0IHRvIHRob3NlIHN0YXRlcy4gRm9yIGV4YW1wbGUgd2UgY2FuXG4gKiBhZGQgc3R5bGVzIHRvIGEgY29tcG9uZW50IHdoZW4gaXQgZW50ZXJzIG9yIGV4aXRzOlxuICpcbiAqIGBgYGpzeFxuICogaW1wb3J0IFRyYW5zaXRpb24gZnJvbSAncmVhY3QtdHJhbnNpdGlvbi1ncm91cC9UcmFuc2l0aW9uJztcbiAqXG4gKiBjb25zdCBkdXJhdGlvbiA9IDMwMDtcbiAqXG4gKiBjb25zdCBkZWZhdWx0U3R5bGUgPSB7XG4gKiAgIHRyYW5zaXRpb246IGBvcGFjaXR5ICR7ZHVyYXRpb259bXMgZWFzZS1pbi1vdXRgLFxuICogICBvcGFjaXR5OiAwLFxuICogfVxuICpcbiAqIGNvbnN0IHRyYW5zaXRpb25TdHlsZXMgPSB7XG4gKiAgIGVudGVyaW5nOiB7IG9wYWNpdHk6IDAgfSxcbiAqICAgZW50ZXJlZDogIHsgb3BhY2l0eTogMSB9LFxuICogfTtcbiAqXG4gKiBjb25zdCBGYWRlID0gKHsgaW46IGluUHJvcCB9KSA9PiAoXG4gKiAgIDxUcmFuc2l0aW9uIGluPXtpblByb3B9IHRpbWVvdXQ9e2R1cmF0aW9ufT5cbiAqICAgICB7KHN0YXRlKSA9PiAoXG4gKiAgICAgICA8ZGl2IHN0eWxlPXt7XG4gKiAgICAgICAgIC4uLmRlZmF1bHRTdHlsZSxcbiAqICAgICAgICAgLi4udHJhbnNpdGlvblN0eWxlc1tzdGF0ZV1cbiAqICAgICAgIH19PlxuICogICAgICAgICBJJ20gYSBmYWRlIFRyYW5zaXRpb24hXG4gKiAgICAgICA8L2Rpdj5cbiAqICAgICApfVxuICogICA8L1RyYW5zaXRpb24+XG4gKiApO1xuICogYGBgXG4gKlxuICogQXMgbm90ZWQgdGhlIGBUcmFuc2l0aW9uYCBjb21wb25lbnQgZG9lc24ndCBfZG9fIGFueXRoaW5nIGJ5IGl0c2VsZiB0byBpdHMgY2hpbGQgY29tcG9uZW50LlxuICogV2hhdCBpdCBkb2VzIGRvIGlzIHRyYWNrIHRyYW5zaXRpb24gc3RhdGVzIG92ZXIgdGltZSBzbyB5b3UgY2FuIHVwZGF0ZSB0aGVcbiAqIGNvbXBvbmVudCAoc3VjaCBhcyBieSBhZGRpbmcgc3R5bGVzIG9yIGNsYXNzZXMpIHdoZW4gaXQgY2hhbmdlcyBzdGF0ZXMuXG4gKlxuICogVGhlcmUgYXJlIDQgbWFpbiBzdGF0ZXMgYSBUcmFuc2l0aW9uIGNhbiBiZSBpbjpcbiAqICAtIGAnZW50ZXJpbmcnYFxuICogIC0gYCdlbnRlcmVkJ2BcbiAqICAtIGAnZXhpdGluZydgXG4gKiAgLSBgJ2V4aXRlZCdgXG4gKlxuICogVHJhbnNpdGlvbiBzdGF0ZSBpcyB0b2dnbGVkIHZpYSB0aGUgYGluYCBwcm9wLiBXaGVuIGB0cnVlYCB0aGUgY29tcG9uZW50IGJlZ2lucyB0aGVcbiAqIFwiRW50ZXJcIiBzdGFnZS4gRHVyaW5nIHRoaXMgc3RhZ2UsIHRoZSBjb21wb25lbnQgd2lsbCBzaGlmdCBmcm9tIGl0cyBjdXJyZW50IHRyYW5zaXRpb24gc3RhdGUsXG4gKiB0byBgJ2VudGVyaW5nJ2AgZm9yIHRoZSBkdXJhdGlvbiBvZiB0aGUgdHJhbnNpdGlvbiBhbmQgdGhlbiB0byB0aGUgYCdlbnRlcmVkJ2Agc3RhZ2Ugb25jZVxuICogaXQncyBjb21wbGV0ZS4gTGV0J3MgdGFrZSB0aGUgZm9sbG93aW5nIGV4YW1wbGU6XG4gKlxuICogYGBganN4XG4gKiBzdGF0ZSA9IHsgaW46IGZhbHNlIH07XG4gKlxuICogdG9nZ2xlRW50ZXJTdGF0ZSA9ICgpID0+IHtcbiAqICAgdGhpcy5zZXRTdGF0ZSh7IGluOiB0cnVlIH0pO1xuICogfVxuICpcbiAqIHJlbmRlcigpIHtcbiAqICAgcmV0dXJuIChcbiAqICAgICA8ZGl2PlxuICogICAgICAgPFRyYW5zaXRpb24gaW49e3RoaXMuc3RhdGUuaW59IHRpbWVvdXQ9ezUwMH0gLz5cbiAqICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy50b2dnbGVFbnRlclN0YXRlfT5DbGljayB0byBFbnRlcjwvYnV0dG9uPlxuICogICAgIDwvZGl2PlxuICogICApO1xuICogfVxuICogYGBgXG4gKlxuICogV2hlbiB0aGUgYnV0dG9uIGlzIGNsaWNrZWQgdGhlIGNvbXBvbmVudCB3aWxsIHNoaWZ0IHRvIHRoZSBgJ2VudGVyaW5nJ2Agc3RhdGUgYW5kXG4gKiBzdGF5IHRoZXJlIGZvciA1MDBtcyAodGhlIHZhbHVlIG9mIGB0aW1lb3V0YCkgYmVmb3JlIGl0IGZpbmFsbHkgc3dpdGNoZXMgdG8gYCdlbnRlcmVkJ2AuXG4gKlxuICogV2hlbiBgaW5gIGlzIGBmYWxzZWAgdGhlIHNhbWUgdGhpbmcgaGFwcGVucyBleGNlcHQgdGhlIHN0YXRlIG1vdmVzIGZyb20gYCdleGl0aW5nJ2AgdG8gYCdleGl0ZWQnYC5cbiAqXG4gKiAjIyBUaW1pbmdcbiAqXG4gKiBUaW1pbmcgaXMgb2Z0ZW4gdGhlIHRyaWNraWVzdCBwYXJ0IG9mIGFuaW1hdGlvbiwgbWlzdGFrZXMgY2FuIHJlc3VsdCBpbiBzbGlnaHQgZGVsYXlzXG4gKiB0aGF0IGFyZSBoYXJkIHRvIHBpbiBkb3duLiBBIGNvbW1vbiBleGFtcGxlIGlzIHdoZW4geW91IHdhbnQgdG8gYWRkIGFuIGV4aXQgdHJhbnNpdGlvbixcbiAqIHlvdSBzaG91bGQgc2V0IHRoZSBkZXNpcmVkIGZpbmFsIHN0eWxlcyB3aGVuIHRoZSBzdGF0ZSBpcyBgJ2V4aXRpbmcnYC4gVGhhdCdzIHdoZW4gdGhlXG4gKiB0cmFuc2l0aW9uIHRvIHRob3NlIHN0eWxlcyB3aWxsIHN0YXJ0IGFuZCwgaWYgeW91IG1hdGNoZWQgdGhlIGB0aW1lb3V0YCBwcm9wIHdpdGggdGhlXG4gKiBDU1MgVHJhbnNpdGlvbiBkdXJhdGlvbiwgaXQgd2lsbCBlbmQgZXhhY3RseSB3aGVuIHRoZSBzdGF0ZSBjaGFuZ2VzIHRvIGAnZXhpdGVkJ2AuXG4gKlxuICogPiAqKk5vdGUqKjogRm9yIHNpbXBsZXIgdHJhbnNpdGlvbnMgdGhlIGBUcmFuc2l0aW9uYCBjb21wb25lbnQgbWlnaHQgYmUgZW5vdWdoLCBidXRcbiAqID4gdGFrZSBpbnRvIGFjY291bnQgdGhhdCBpdCdzIHBsYXRmb3JtLWFnbm9zdGljLCB3aGlsZSB0aGUgYENTU1RyYW5zaXRpb25gIGNvbXBvbmVudFxuICogPiBbZm9yY2VzIHJlZmxvd3NdKGh0dHBzOi8vZ2l0aHViLmNvbS9yZWFjdGpzL3JlYWN0LXRyYW5zaXRpb24tZ3JvdXAvYmxvYi81MDA3MzAzZTcyOWE3NGJlNjZhMjFjM2UyMjA1ZTQ5MTY4MjE1MjRiL3NyYy9DU1NUcmFuc2l0aW9uLmpzI0wyMDgtTDIxNSlcbiAqID4gaW4gb3JkZXIgdG8gbWFrZSBtb3JlIGNvbXBsZXggdHJhbnNpdGlvbnMgbW9yZSBwcmVkaWN0YWJsZS4gRm9yIGV4YW1wbGUsIGV2ZW4gdGhvdWdoXG4gKiA+IGNsYXNzZXMgYGV4YW1wbGUtZW50ZXJgIGFuZCBgZXhhbXBsZS1lbnRlci1hY3RpdmVgIGFyZSBhcHBsaWVkIGltbWVkaWF0ZWx5IG9uZSBhZnRlclxuICogPiBhbm90aGVyLCB5b3UgY2FuIHN0aWxsIHRyYW5zaXRpb24gZnJvbSBvbmUgdG8gdGhlIG90aGVyIGJlY2F1c2Ugb2YgdGhlIGZvcmNlZCByZWZsb3dcbiAqID4gKHJlYWQgW3RoaXMgaXNzdWVdKGh0dHBzOi8vZ2l0aHViLmNvbS9yZWFjdGpzL3JlYWN0LXRyYW5zaXRpb24tZ3JvdXAvaXNzdWVzLzE1OSNpc3N1ZWNvbW1lbnQtMzIyNzYxMTcxKVxuICogPiBmb3IgbW9yZSBpbmZvKS4gVGFrZSB0aGlzIGludG8gYWNjb3VudCB3aGVuIGNob29zaW5nIGJldHdlZW4gYFRyYW5zaXRpb25gIGFuZFxuICogPiBgQ1NTVHJhbnNpdGlvbmAuXG4gKi9cblxuZXhwb3J0cy5FWElUSU5HID0gRVhJVElORztcblxudmFyIFRyYW5zaXRpb24gPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzTG9vc2UoVHJhbnNpdGlvbiwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gVHJhbnNpdGlvbihwcm9wcywgY29udGV4dCkge1xuICAgIHZhciBfdGhpcztcblxuICAgIF90aGlzID0gX1JlYWN0JENvbXBvbmVudC5jYWxsKHRoaXMsIHByb3BzLCBjb250ZXh0KSB8fCB0aGlzO1xuICAgIHZhciBwYXJlbnRHcm91cCA9IGNvbnRleHQudHJhbnNpdGlvbkdyb3VwOyAvLyBJbiB0aGUgY29udGV4dCBvZiBhIFRyYW5zaXRpb25Hcm91cCBhbGwgZW50ZXJzIGFyZSByZWFsbHkgYXBwZWFyc1xuXG4gICAgdmFyIGFwcGVhciA9IHBhcmVudEdyb3VwICYmICFwYXJlbnRHcm91cC5pc01vdW50aW5nID8gcHJvcHMuZW50ZXIgOiBwcm9wcy5hcHBlYXI7XG4gICAgdmFyIGluaXRpYWxTdGF0dXM7XG4gICAgX3RoaXMuYXBwZWFyU3RhdHVzID0gbnVsbDtcblxuICAgIGlmIChwcm9wcy5pbikge1xuICAgICAgaWYgKGFwcGVhcikge1xuICAgICAgICBpbml0aWFsU3RhdHVzID0gRVhJVEVEO1xuICAgICAgICBfdGhpcy5hcHBlYXJTdGF0dXMgPSBFTlRFUklORztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGluaXRpYWxTdGF0dXMgPSBFTlRFUkVEO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAocHJvcHMudW5tb3VudE9uRXhpdCB8fCBwcm9wcy5tb3VudE9uRW50ZXIpIHtcbiAgICAgICAgaW5pdGlhbFN0YXR1cyA9IFVOTU9VTlRFRDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGluaXRpYWxTdGF0dXMgPSBFWElURUQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgX3RoaXMuc3RhdGUgPSB7XG4gICAgICBzdGF0dXM6IGluaXRpYWxTdGF0dXNcbiAgICB9O1xuICAgIF90aGlzLm5leHRDYWxsYmFjayA9IG51bGw7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IFRyYW5zaXRpb24ucHJvdG90eXBlO1xuXG4gIF9wcm90by5nZXRDaGlsZENvbnRleHQgPSBmdW5jdGlvbiBnZXRDaGlsZENvbnRleHQoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRyYW5zaXRpb25Hcm91cDogbnVsbCAvLyBhbGxvd3MgZm9yIG5lc3RlZCBUcmFuc2l0aW9uc1xuXG4gICAgfTtcbiAgfTtcblxuICBUcmFuc2l0aW9uLmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyA9IGZ1bmN0aW9uIGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyhfcmVmLCBwcmV2U3RhdGUpIHtcbiAgICB2YXIgbmV4dEluID0gX3JlZi5pbjtcblxuICAgIGlmIChuZXh0SW4gJiYgcHJldlN0YXRlLnN0YXR1cyA9PT0gVU5NT1VOVEVEKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdGF0dXM6IEVYSVRFRFxuICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfTsgLy8gZ2V0U25hcHNob3RCZWZvcmVVcGRhdGUocHJldlByb3BzKSB7XG4gIC8vICAgbGV0IG5leHRTdGF0dXMgPSBudWxsXG4gIC8vICAgaWYgKHByZXZQcm9wcyAhPT0gdGhpcy5wcm9wcykge1xuICAvLyAgICAgY29uc3QgeyBzdGF0dXMgfSA9IHRoaXMuc3RhdGVcbiAgLy8gICAgIGlmICh0aGlzLnByb3BzLmluKSB7XG4gIC8vICAgICAgIGlmIChzdGF0dXMgIT09IEVOVEVSSU5HICYmIHN0YXR1cyAhPT0gRU5URVJFRCkge1xuICAvLyAgICAgICAgIG5leHRTdGF0dXMgPSBFTlRFUklOR1xuICAvLyAgICAgICB9XG4gIC8vICAgICB9IGVsc2Uge1xuICAvLyAgICAgICBpZiAoc3RhdHVzID09PSBFTlRFUklORyB8fCBzdGF0dXMgPT09IEVOVEVSRUQpIHtcbiAgLy8gICAgICAgICBuZXh0U3RhdHVzID0gRVhJVElOR1xuICAvLyAgICAgICB9XG4gIC8vICAgICB9XG4gIC8vICAgfVxuICAvLyAgIHJldHVybiB7IG5leHRTdGF0dXMgfVxuICAvLyB9XG5cblxuICBfcHJvdG8uY29tcG9uZW50RGlkTW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLnVwZGF0ZVN0YXR1cyh0cnVlLCB0aGlzLmFwcGVhclN0YXR1cyk7XG4gIH07XG5cbiAgX3Byb3RvLmNvbXBvbmVudERpZFVwZGF0ZSA9IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcbiAgICB2YXIgbmV4dFN0YXR1cyA9IG51bGw7XG5cbiAgICBpZiAocHJldlByb3BzICE9PSB0aGlzLnByb3BzKSB7XG4gICAgICB2YXIgc3RhdHVzID0gdGhpcy5zdGF0ZS5zdGF0dXM7XG5cbiAgICAgIGlmICh0aGlzLnByb3BzLmluKSB7XG4gICAgICAgIGlmIChzdGF0dXMgIT09IEVOVEVSSU5HICYmIHN0YXR1cyAhPT0gRU5URVJFRCkge1xuICAgICAgICAgIG5leHRTdGF0dXMgPSBFTlRFUklORztcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHN0YXR1cyA9PT0gRU5URVJJTkcgfHwgc3RhdHVzID09PSBFTlRFUkVEKSB7XG4gICAgICAgICAgbmV4dFN0YXR1cyA9IEVYSVRJTkc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLnVwZGF0ZVN0YXR1cyhmYWxzZSwgbmV4dFN0YXR1cyk7XG4gIH07XG5cbiAgX3Byb3RvLmNvbXBvbmVudFdpbGxVbm1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5jYW5jZWxOZXh0Q2FsbGJhY2soKTtcbiAgfTtcblxuICBfcHJvdG8uZ2V0VGltZW91dHMgPSBmdW5jdGlvbiBnZXRUaW1lb3V0cygpIHtcbiAgICB2YXIgdGltZW91dCA9IHRoaXMucHJvcHMudGltZW91dDtcbiAgICB2YXIgZXhpdCwgZW50ZXIsIGFwcGVhcjtcbiAgICBleGl0ID0gZW50ZXIgPSBhcHBlYXIgPSB0aW1lb3V0O1xuXG4gICAgaWYgKHRpbWVvdXQgIT0gbnVsbCAmJiB0eXBlb2YgdGltZW91dCAhPT0gJ251bWJlcicpIHtcbiAgICAgIGV4aXQgPSB0aW1lb3V0LmV4aXQ7XG4gICAgICBlbnRlciA9IHRpbWVvdXQuZW50ZXI7XG4gICAgICBhcHBlYXIgPSB0aW1lb3V0LmFwcGVhcjtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgZXhpdDogZXhpdCxcbiAgICAgIGVudGVyOiBlbnRlcixcbiAgICAgIGFwcGVhcjogYXBwZWFyXG4gICAgfTtcbiAgfTtcblxuICBfcHJvdG8udXBkYXRlU3RhdHVzID0gZnVuY3Rpb24gdXBkYXRlU3RhdHVzKG1vdW50aW5nLCBuZXh0U3RhdHVzKSB7XG4gICAgaWYgKG1vdW50aW5nID09PSB2b2lkIDApIHtcbiAgICAgIG1vdW50aW5nID0gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKG5leHRTdGF0dXMgIT09IG51bGwpIHtcbiAgICAgIC8vIG5leHRTdGF0dXMgd2lsbCBhbHdheXMgYmUgRU5URVJJTkcgb3IgRVhJVElORy5cbiAgICAgIHRoaXMuY2FuY2VsTmV4dENhbGxiYWNrKCk7XG5cbiAgICAgIHZhciBub2RlID0gX3JlYWN0RG9tLmRlZmF1bHQuZmluZERPTU5vZGUodGhpcyk7XG5cbiAgICAgIGlmIChuZXh0U3RhdHVzID09PSBFTlRFUklORykge1xuICAgICAgICB0aGlzLnBlcmZvcm1FbnRlcihub2RlLCBtb3VudGluZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnBlcmZvcm1FeGl0KG5vZGUpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodGhpcy5wcm9wcy51bm1vdW50T25FeGl0ICYmIHRoaXMuc3RhdGUuc3RhdHVzID09PSBFWElURUQpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBzdGF0dXM6IFVOTU9VTlRFRFxuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5wZXJmb3JtRW50ZXIgPSBmdW5jdGlvbiBwZXJmb3JtRW50ZXIobm9kZSwgbW91bnRpbmcpIHtcbiAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgIHZhciBlbnRlciA9IHRoaXMucHJvcHMuZW50ZXI7XG4gICAgdmFyIGFwcGVhcmluZyA9IHRoaXMuY29udGV4dC50cmFuc2l0aW9uR3JvdXAgPyB0aGlzLmNvbnRleHQudHJhbnNpdGlvbkdyb3VwLmlzTW91bnRpbmcgOiBtb3VudGluZztcbiAgICB2YXIgdGltZW91dHMgPSB0aGlzLmdldFRpbWVvdXRzKCk7IC8vIG5vIGVudGVyIGFuaW1hdGlvbiBza2lwIHJpZ2h0IHRvIEVOVEVSRURcbiAgICAvLyBpZiB3ZSBhcmUgbW91bnRpbmcgYW5kIHJ1bm5pbmcgdGhpcyBpdCBtZWFucyBhcHBlYXIgX211c3RfIGJlIHNldFxuXG4gICAgaWYgKCFtb3VudGluZyAmJiAhZW50ZXIpIHtcbiAgICAgIHRoaXMuc2FmZVNldFN0YXRlKHtcbiAgICAgICAgc3RhdHVzOiBFTlRFUkVEXG4gICAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIF90aGlzMi5wcm9wcy5vbkVudGVyZWQobm9kZSk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnByb3BzLm9uRW50ZXIobm9kZSwgYXBwZWFyaW5nKTtcbiAgICB0aGlzLnNhZmVTZXRTdGF0ZSh7XG4gICAgICBzdGF0dXM6IEVOVEVSSU5HXG4gICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgX3RoaXMyLnByb3BzLm9uRW50ZXJpbmcobm9kZSwgYXBwZWFyaW5nKTsgLy8gRklYTUU6IGFwcGVhciB0aW1lb3V0P1xuXG5cbiAgICAgIF90aGlzMi5vblRyYW5zaXRpb25FbmQobm9kZSwgdGltZW91dHMuZW50ZXIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgX3RoaXMyLnNhZmVTZXRTdGF0ZSh7XG4gICAgICAgICAgc3RhdHVzOiBFTlRFUkVEXG4gICAgICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBfdGhpczIucHJvcHMub25FbnRlcmVkKG5vZGUsIGFwcGVhcmluZyk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgX3Byb3RvLnBlcmZvcm1FeGl0ID0gZnVuY3Rpb24gcGVyZm9ybUV4aXQobm9kZSkge1xuICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgdmFyIGV4aXQgPSB0aGlzLnByb3BzLmV4aXQ7XG4gICAgdmFyIHRpbWVvdXRzID0gdGhpcy5nZXRUaW1lb3V0cygpOyAvLyBubyBleGl0IGFuaW1hdGlvbiBza2lwIHJpZ2h0IHRvIEVYSVRFRFxuXG4gICAgaWYgKCFleGl0KSB7XG4gICAgICB0aGlzLnNhZmVTZXRTdGF0ZSh7XG4gICAgICAgIHN0YXR1czogRVhJVEVEXG4gICAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIF90aGlzMy5wcm9wcy5vbkV4aXRlZChub2RlKTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMucHJvcHMub25FeGl0KG5vZGUpO1xuICAgIHRoaXMuc2FmZVNldFN0YXRlKHtcbiAgICAgIHN0YXR1czogRVhJVElOR1xuICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgIF90aGlzMy5wcm9wcy5vbkV4aXRpbmcobm9kZSk7XG5cbiAgICAgIF90aGlzMy5vblRyYW5zaXRpb25FbmQobm9kZSwgdGltZW91dHMuZXhpdCwgZnVuY3Rpb24gKCkge1xuICAgICAgICBfdGhpczMuc2FmZVNldFN0YXRlKHtcbiAgICAgICAgICBzdGF0dXM6IEVYSVRFRFxuICAgICAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgX3RoaXMzLnByb3BzLm9uRXhpdGVkKG5vZGUpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIF9wcm90by5jYW5jZWxOZXh0Q2FsbGJhY2sgPSBmdW5jdGlvbiBjYW5jZWxOZXh0Q2FsbGJhY2soKSB7XG4gICAgaWYgKHRoaXMubmV4dENhbGxiYWNrICE9PSBudWxsKSB7XG4gICAgICB0aGlzLm5leHRDYWxsYmFjay5jYW5jZWwoKTtcbiAgICAgIHRoaXMubmV4dENhbGxiYWNrID0gbnVsbDtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLnNhZmVTZXRTdGF0ZSA9IGZ1bmN0aW9uIHNhZmVTZXRTdGF0ZShuZXh0U3RhdGUsIGNhbGxiYWNrKSB7XG4gICAgLy8gVGhpcyBzaG91bGRuJ3QgYmUgbmVjZXNzYXJ5LCBidXQgdGhlcmUgYXJlIHdlaXJkIHJhY2UgY29uZGl0aW9ucyB3aXRoXG4gICAgLy8gc2V0U3RhdGUgY2FsbGJhY2tzIGFuZCB1bm1vdW50aW5nIGluIHRlc3RpbmcsIHNvIGFsd2F5cyBtYWtlIHN1cmUgdGhhdFxuICAgIC8vIHdlIGNhbiBjYW5jZWwgYW55IHBlbmRpbmcgc2V0U3RhdGUgY2FsbGJhY2tzIGFmdGVyIHdlIHVubW91bnQuXG4gICAgY2FsbGJhY2sgPSB0aGlzLnNldE5leHRDYWxsYmFjayhjYWxsYmFjayk7XG4gICAgdGhpcy5zZXRTdGF0ZShuZXh0U3RhdGUsIGNhbGxiYWNrKTtcbiAgfTtcblxuICBfcHJvdG8uc2V0TmV4dENhbGxiYWNrID0gZnVuY3Rpb24gc2V0TmV4dENhbGxiYWNrKGNhbGxiYWNrKSB7XG4gICAgdmFyIF90aGlzNCA9IHRoaXM7XG5cbiAgICB2YXIgYWN0aXZlID0gdHJ1ZTtcblxuICAgIHRoaXMubmV4dENhbGxiYWNrID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBpZiAoYWN0aXZlKSB7XG4gICAgICAgIGFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICBfdGhpczQubmV4dENhbGxiYWNrID0gbnVsbDtcbiAgICAgICAgY2FsbGJhY2soZXZlbnQpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB0aGlzLm5leHRDYWxsYmFjay5jYW5jZWwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBhY3RpdmUgPSBmYWxzZTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHRoaXMubmV4dENhbGxiYWNrO1xuICB9O1xuXG4gIF9wcm90by5vblRyYW5zaXRpb25FbmQgPSBmdW5jdGlvbiBvblRyYW5zaXRpb25FbmQobm9kZSwgdGltZW91dCwgaGFuZGxlcikge1xuICAgIHRoaXMuc2V0TmV4dENhbGxiYWNrKGhhbmRsZXIpO1xuXG4gICAgaWYgKG5vZGUpIHtcbiAgICAgIGlmICh0aGlzLnByb3BzLmFkZEVuZExpc3RlbmVyKSB7XG4gICAgICAgIHRoaXMucHJvcHMuYWRkRW5kTGlzdGVuZXIobm9kZSwgdGhpcy5uZXh0Q2FsbGJhY2spO1xuICAgICAgfVxuXG4gICAgICBpZiAodGltZW91dCAhPSBudWxsKSB7XG4gICAgICAgIHNldFRpbWVvdXQodGhpcy5uZXh0Q2FsbGJhY2ssIHRpbWVvdXQpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBzZXRUaW1lb3V0KHRoaXMubmV4dENhbGxiYWNrLCAwKTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgc3RhdHVzID0gdGhpcy5zdGF0ZS5zdGF0dXM7XG5cbiAgICBpZiAoc3RhdHVzID09PSBVTk1PVU5URUQpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHZhciBfdGhpcyRwcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgIGNoaWxkcmVuID0gX3RoaXMkcHJvcHMuY2hpbGRyZW4sXG4gICAgICAgIGNoaWxkUHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShfdGhpcyRwcm9wcywgW1wiY2hpbGRyZW5cIl0pOyAvLyBmaWx0ZXIgcHJvcHMgZm9yIFRyYW5zdGl0aW9uXG5cblxuICAgIGRlbGV0ZSBjaGlsZFByb3BzLmluO1xuICAgIGRlbGV0ZSBjaGlsZFByb3BzLm1vdW50T25FbnRlcjtcbiAgICBkZWxldGUgY2hpbGRQcm9wcy51bm1vdW50T25FeGl0O1xuICAgIGRlbGV0ZSBjaGlsZFByb3BzLmFwcGVhcjtcbiAgICBkZWxldGUgY2hpbGRQcm9wcy5lbnRlcjtcbiAgICBkZWxldGUgY2hpbGRQcm9wcy5leGl0O1xuICAgIGRlbGV0ZSBjaGlsZFByb3BzLnRpbWVvdXQ7XG4gICAgZGVsZXRlIGNoaWxkUHJvcHMuYWRkRW5kTGlzdGVuZXI7XG4gICAgZGVsZXRlIGNoaWxkUHJvcHMub25FbnRlcjtcbiAgICBkZWxldGUgY2hpbGRQcm9wcy5vbkVudGVyaW5nO1xuICAgIGRlbGV0ZSBjaGlsZFByb3BzLm9uRW50ZXJlZDtcbiAgICBkZWxldGUgY2hpbGRQcm9wcy5vbkV4aXQ7XG4gICAgZGVsZXRlIGNoaWxkUHJvcHMub25FeGl0aW5nO1xuICAgIGRlbGV0ZSBjaGlsZFByb3BzLm9uRXhpdGVkO1xuXG4gICAgaWYgKHR5cGVvZiBjaGlsZHJlbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIGNoaWxkcmVuKHN0YXR1cywgY2hpbGRQcm9wcyk7XG4gICAgfVxuXG4gICAgdmFyIGNoaWxkID0gX3JlYWN0LmRlZmF1bHQuQ2hpbGRyZW4ub25seShjaGlsZHJlbik7XG5cbiAgICByZXR1cm4gX3JlYWN0LmRlZmF1bHQuY2xvbmVFbGVtZW50KGNoaWxkLCBjaGlsZFByb3BzKTtcbiAgfTtcblxuICByZXR1cm4gVHJhbnNpdGlvbjtcbn0oX3JlYWN0LmRlZmF1bHQuQ29tcG9uZW50KTtcblxuVHJhbnNpdGlvbi5jb250ZXh0VHlwZXMgPSB7XG4gIHRyYW5zaXRpb25Hcm91cDogUHJvcFR5cGVzLm9iamVjdFxufTtcblRyYW5zaXRpb24uY2hpbGRDb250ZXh0VHlwZXMgPSB7XG4gIHRyYW5zaXRpb25Hcm91cDogZnVuY3Rpb24gdHJhbnNpdGlvbkdyb3VwKCkge31cbn07XG5UcmFuc2l0aW9uLnByb3BUeXBlcyA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IHtcbiAgLyoqXG4gICAqIEEgYGZ1bmN0aW9uYCBjaGlsZCBjYW4gYmUgdXNlZCBpbnN0ZWFkIG9mIGEgUmVhY3QgZWxlbWVudC5cbiAgICogVGhpcyBmdW5jdGlvbiBpcyBjYWxsZWQgd2l0aCB0aGUgY3VycmVudCB0cmFuc2l0aW9uIHN0YXR1c1xuICAgKiAoJ2VudGVyaW5nJywgJ2VudGVyZWQnLCAnZXhpdGluZycsICdleGl0ZWQnLCAndW5tb3VudGVkJyksIHdoaWNoIGNhbiBiZSB1c2VkXG4gICAqIHRvIGFwcGx5IGNvbnRleHQgc3BlY2lmaWMgcHJvcHMgdG8gYSBjb21wb25lbnQuXG4gICAqXG4gICAqIGBgYGpzeFxuICAgKiA8VHJhbnNpdGlvbiB0aW1lb3V0PXsxNTB9PlxuICAgKiAgIHsoc3RhdHVzKSA9PiAoXG4gICAqICAgICA8TXlDb21wb25lbnQgY2xhc3NOYW1lPXtgZmFkZSBmYWRlLSR7c3RhdHVzfWB9IC8+XG4gICAqICAgKX1cbiAgICogPC9UcmFuc2l0aW9uPlxuICAgKiBgYGBcbiAgICovXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLCBQcm9wVHlwZXMuZWxlbWVudC5pc1JlcXVpcmVkXSkuaXNSZXF1aXJlZCxcblxuICAvKipcbiAgICogU2hvdyB0aGUgY29tcG9uZW50OyB0cmlnZ2VycyB0aGUgZW50ZXIgb3IgZXhpdCBzdGF0ZXNcbiAgICovXG4gIGluOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogQnkgZGVmYXVsdCB0aGUgY2hpbGQgY29tcG9uZW50IGlzIG1vdW50ZWQgaW1tZWRpYXRlbHkgYWxvbmcgd2l0aFxuICAgKiB0aGUgcGFyZW50IGBUcmFuc2l0aW9uYCBjb21wb25lbnQuIElmIHlvdSB3YW50IHRvIFwibGF6eSBtb3VudFwiIHRoZSBjb21wb25lbnQgb24gdGhlXG4gICAqIGZpcnN0IGBpbj17dHJ1ZX1gIHlvdSBjYW4gc2V0IGBtb3VudE9uRW50ZXJgLiBBZnRlciB0aGUgZmlyc3QgZW50ZXIgdHJhbnNpdGlvbiB0aGUgY29tcG9uZW50IHdpbGwgc3RheVxuICAgKiBtb3VudGVkLCBldmVuIG9uIFwiZXhpdGVkXCIsIHVubGVzcyB5b3UgYWxzbyBzcGVjaWZ5IGB1bm1vdW50T25FeGl0YC5cbiAgICovXG4gIG1vdW50T25FbnRlcjogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIEJ5IGRlZmF1bHQgdGhlIGNoaWxkIGNvbXBvbmVudCBzdGF5cyBtb3VudGVkIGFmdGVyIGl0IHJlYWNoZXMgdGhlIGAnZXhpdGVkJ2Agc3RhdGUuXG4gICAqIFNldCBgdW5tb3VudE9uRXhpdGAgaWYgeW91J2QgcHJlZmVyIHRvIHVubW91bnQgdGhlIGNvbXBvbmVudCBhZnRlciBpdCBmaW5pc2hlcyBleGl0aW5nLlxuICAgKi9cbiAgdW5tb3VudE9uRXhpdDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIE5vcm1hbGx5IGEgY29tcG9uZW50IGlzIG5vdCB0cmFuc2l0aW9uZWQgaWYgaXQgaXMgc2hvd24gd2hlbiB0aGUgYDxUcmFuc2l0aW9uPmAgY29tcG9uZW50IG1vdW50cy5cbiAgICogSWYgeW91IHdhbnQgdG8gdHJhbnNpdGlvbiBvbiB0aGUgZmlyc3QgbW91bnQgc2V0IGBhcHBlYXJgIHRvIGB0cnVlYCwgYW5kIHRoZVxuICAgKiBjb21wb25lbnQgd2lsbCB0cmFuc2l0aW9uIGluIGFzIHNvb24gYXMgdGhlIGA8VHJhbnNpdGlvbj5gIG1vdW50cy5cbiAgICpcbiAgICogPiBOb3RlOiB0aGVyZSBhcmUgbm8gc3BlY2lmaWMgXCJhcHBlYXJcIiBzdGF0ZXMuIGBhcHBlYXJgIG9ubHkgYWRkcyBhbiBhZGRpdGlvbmFsIGBlbnRlcmAgdHJhbnNpdGlvbi5cbiAgICovXG4gIGFwcGVhcjogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIEVuYWJsZSBvciBkaXNhYmxlIGVudGVyIHRyYW5zaXRpb25zLlxuICAgKi9cbiAgZW50ZXI6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBFbmFibGUgb3IgZGlzYWJsZSBleGl0IHRyYW5zaXRpb25zLlxuICAgKi9cbiAgZXhpdDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIFRoZSBkdXJhdGlvbiBvZiB0aGUgdHJhbnNpdGlvbiwgaW4gbWlsbGlzZWNvbmRzLlxuICAgKiBSZXF1aXJlZCB1bmxlc3MgYGFkZEVuZExpc3RlbmVyYCBpcyBwcm92aWRlZFxuICAgKlxuICAgKiBZb3UgbWF5IHNwZWNpZnkgYSBzaW5nbGUgdGltZW91dCBmb3IgYWxsIHRyYW5zaXRpb25zIGxpa2U6IGB0aW1lb3V0PXs1MDB9YCxcbiAgICogb3IgaW5kaXZpZHVhbGx5IGxpa2U6XG4gICAqXG4gICAqIGBgYGpzeFxuICAgKiB0aW1lb3V0PXt7XG4gICAqICBlbnRlcjogMzAwLFxuICAgKiAgZXhpdDogNTAwLFxuICAgKiB9fVxuICAgKiBgYGBcbiAgICpcbiAgICogQHR5cGUge251bWJlciB8IHsgZW50ZXI/OiBudW1iZXIsIGV4aXQ/OiBudW1iZXIgfX1cbiAgICovXG4gIHRpbWVvdXQ6IGZ1bmN0aW9uIHRpbWVvdXQocHJvcHMpIHtcbiAgICB2YXIgcHQgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBfUHJvcFR5cGVzLnRpbWVvdXRzU2hhcGUgOiB7fTs7XG4gICAgaWYgKCFwcm9wcy5hZGRFbmRMaXN0ZW5lcikgcHQgPSBwdC5pc1JlcXVpcmVkO1xuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgcmV0dXJuIHB0LmFwcGx5KHZvaWQgMCwgW3Byb3BzXS5jb25jYXQoYXJncykpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBBZGQgYSBjdXN0b20gdHJhbnNpdGlvbiBlbmQgdHJpZ2dlci4gQ2FsbGVkIHdpdGggdGhlIHRyYW5zaXRpb25pbmdcbiAgICogRE9NIG5vZGUgYW5kIGEgYGRvbmVgIGNhbGxiYWNrLiBBbGxvd3MgZm9yIG1vcmUgZmluZSBncmFpbmVkIHRyYW5zaXRpb24gZW5kXG4gICAqIGxvZ2ljLiAqKk5vdGU6KiogVGltZW91dHMgYXJlIHN0aWxsIHVzZWQgYXMgYSBmYWxsYmFjayBpZiBwcm92aWRlZC5cbiAgICpcbiAgICogYGBganN4XG4gICAqIGFkZEVuZExpc3RlbmVyPXsobm9kZSwgZG9uZSkgPT4ge1xuICAgKiAgIC8vIHVzZSB0aGUgY3NzIHRyYW5zaXRpb25lbmQgZXZlbnQgdG8gbWFyayB0aGUgZmluaXNoIG9mIGEgdHJhbnNpdGlvblxuICAgKiAgIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIGRvbmUsIGZhbHNlKTtcbiAgICogfX1cbiAgICogYGBgXG4gICAqL1xuICBhZGRFbmRMaXN0ZW5lcjogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIGZpcmVkIGJlZm9yZSB0aGUgXCJlbnRlcmluZ1wiIHN0YXR1cyBpcyBhcHBsaWVkLiBBbiBleHRyYSBwYXJhbWV0ZXJcbiAgICogYGlzQXBwZWFyaW5nYCBpcyBzdXBwbGllZCB0byBpbmRpY2F0ZSBpZiB0aGUgZW50ZXIgc3RhZ2UgaXMgb2NjdXJyaW5nIG9uIHRoZSBpbml0aWFsIG1vdW50XG4gICAqXG4gICAqIEB0eXBlIEZ1bmN0aW9uKG5vZGU6IEh0bWxFbGVtZW50LCBpc0FwcGVhcmluZzogYm9vbCkgLT4gdm9pZFxuICAgKi9cbiAgb25FbnRlcjogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIGZpcmVkIGFmdGVyIHRoZSBcImVudGVyaW5nXCIgc3RhdHVzIGlzIGFwcGxpZWQuIEFuIGV4dHJhIHBhcmFtZXRlclxuICAgKiBgaXNBcHBlYXJpbmdgIGlzIHN1cHBsaWVkIHRvIGluZGljYXRlIGlmIHRoZSBlbnRlciBzdGFnZSBpcyBvY2N1cnJpbmcgb24gdGhlIGluaXRpYWwgbW91bnRcbiAgICpcbiAgICogQHR5cGUgRnVuY3Rpb24obm9kZTogSHRtbEVsZW1lbnQsIGlzQXBwZWFyaW5nOiBib29sKVxuICAgKi9cbiAgb25FbnRlcmluZzogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIGZpcmVkIGFmdGVyIHRoZSBcImVudGVyZWRcIiBzdGF0dXMgaXMgYXBwbGllZC4gQW4gZXh0cmEgcGFyYW1ldGVyXG4gICAqIGBpc0FwcGVhcmluZ2AgaXMgc3VwcGxpZWQgdG8gaW5kaWNhdGUgaWYgdGhlIGVudGVyIHN0YWdlIGlzIG9jY3VycmluZyBvbiB0aGUgaW5pdGlhbCBtb3VudFxuICAgKlxuICAgKiBAdHlwZSBGdW5jdGlvbihub2RlOiBIdG1sRWxlbWVudCwgaXNBcHBlYXJpbmc6IGJvb2wpIC0+IHZvaWRcbiAgICovXG4gIG9uRW50ZXJlZDogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIGZpcmVkIGJlZm9yZSB0aGUgXCJleGl0aW5nXCIgc3RhdHVzIGlzIGFwcGxpZWQuXG4gICAqXG4gICAqIEB0eXBlIEZ1bmN0aW9uKG5vZGU6IEh0bWxFbGVtZW50KSAtPiB2b2lkXG4gICAqL1xuICBvbkV4aXQ6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmaXJlZCBhZnRlciB0aGUgXCJleGl0aW5nXCIgc3RhdHVzIGlzIGFwcGxpZWQuXG4gICAqXG4gICAqIEB0eXBlIEZ1bmN0aW9uKG5vZGU6IEh0bWxFbGVtZW50KSAtPiB2b2lkXG4gICAqL1xuICBvbkV4aXRpbmc6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmaXJlZCBhZnRlciB0aGUgXCJleGl0ZWRcIiBzdGF0dXMgaXMgYXBwbGllZC5cbiAgICpcbiAgICogQHR5cGUgRnVuY3Rpb24obm9kZTogSHRtbEVsZW1lbnQpIC0+IHZvaWRcbiAgICovXG4gIG9uRXhpdGVkOiBQcm9wVHlwZXMuZnVuYyAvLyBOYW1lIHRoZSBmdW5jdGlvbiBzbyBpdCBpcyBjbGVhcmVyIGluIHRoZSBkb2N1bWVudGF0aW9uXG5cbn0gOiB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cblRyYW5zaXRpb24uZGVmYXVsdFByb3BzID0ge1xuICBpbjogZmFsc2UsXG4gIG1vdW50T25FbnRlcjogZmFsc2UsXG4gIHVubW91bnRPbkV4aXQ6IGZhbHNlLFxuICBhcHBlYXI6IGZhbHNlLFxuICBlbnRlcjogdHJ1ZSxcbiAgZXhpdDogdHJ1ZSxcbiAgb25FbnRlcjogbm9vcCxcbiAgb25FbnRlcmluZzogbm9vcCxcbiAgb25FbnRlcmVkOiBub29wLFxuICBvbkV4aXQ6IG5vb3AsXG4gIG9uRXhpdGluZzogbm9vcCxcbiAgb25FeGl0ZWQ6IG5vb3Bcbn07XG5UcmFuc2l0aW9uLlVOTU9VTlRFRCA9IDA7XG5UcmFuc2l0aW9uLkVYSVRFRCA9IDE7XG5UcmFuc2l0aW9uLkVOVEVSSU5HID0gMjtcblRyYW5zaXRpb24uRU5URVJFRCA9IDM7XG5UcmFuc2l0aW9uLkVYSVRJTkcgPSA0O1xuXG52YXIgX2RlZmF1bHQgPSAoMCwgX3JlYWN0TGlmZWN5Y2xlc0NvbXBhdC5wb2x5ZmlsbCkoVHJhbnNpdGlvbik7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgUHJvcFR5cGVzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInByb3AtdHlwZXNcIikpO1xuXG52YXIgX2FkZENsYXNzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiZG9tLWhlbHBlcnMvY2xhc3MvYWRkQ2xhc3NcIikpO1xuXG52YXIgX3JlbW92ZUNsYXNzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiZG9tLWhlbHBlcnMvY2xhc3MvcmVtb3ZlQ2xhc3NcIikpO1xuXG52YXIgX3JlYWN0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgX1RyYW5zaXRpb24gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL1RyYW5zaXRpb25cIikpO1xuXG52YXIgX1Byb3BUeXBlcyA9IHJlcXVpcmUoXCIuL3V0aWxzL1Byb3BUeXBlc1wiKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7IGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHsgcmV0dXJuIG9iajsgfSBlbHNlIHsgdmFyIG5ld09iaiA9IHt9OyBpZiAob2JqICE9IG51bGwpIHsgZm9yICh2YXIga2V5IGluIG9iaikgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkgeyB2YXIgZGVzYyA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiB7fTsgaWYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7IH0gZWxzZSB7IG5ld09ialtrZXldID0gb2JqW2tleV07IH0gfSB9IH0gbmV3T2JqLmRlZmF1bHQgPSBvYmo7IHJldHVybiBuZXdPYmo7IH0gfVxuXG5mdW5jdGlvbiBfZXh0ZW5kcygpIHsgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9OyByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHNMb29zZShzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MucHJvdG90eXBlKTsgc3ViQ2xhc3MucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gc3ViQ2xhc3M7IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIGFkZENsYXNzID0gZnVuY3Rpb24gYWRkQ2xhc3Mobm9kZSwgY2xhc3Nlcykge1xuICByZXR1cm4gbm9kZSAmJiBjbGFzc2VzICYmIGNsYXNzZXMuc3BsaXQoJyAnKS5mb3JFYWNoKGZ1bmN0aW9uIChjKSB7XG4gICAgcmV0dXJuICgwLCBfYWRkQ2xhc3MuZGVmYXVsdCkobm9kZSwgYyk7XG4gIH0pO1xufTtcblxudmFyIHJlbW92ZUNsYXNzID0gZnVuY3Rpb24gcmVtb3ZlQ2xhc3Mobm9kZSwgY2xhc3Nlcykge1xuICByZXR1cm4gbm9kZSAmJiBjbGFzc2VzICYmIGNsYXNzZXMuc3BsaXQoJyAnKS5mb3JFYWNoKGZ1bmN0aW9uIChjKSB7XG4gICAgcmV0dXJuICgwLCBfcmVtb3ZlQ2xhc3MuZGVmYXVsdCkobm9kZSwgYyk7XG4gIH0pO1xufTtcbi8qKlxuICogQSBgVHJhbnNpdGlvbmAgY29tcG9uZW50IHVzaW5nIENTUyB0cmFuc2l0aW9ucyBhbmQgYW5pbWF0aW9ucy5cbiAqIEl0J3MgaW5zcGlyZWQgYnkgdGhlIGV4Y2VsbGVudCBbbmctYW5pbWF0ZV0oaHR0cDovL3d3dy5uZ2FuaW1hdGUub3JnLykgbGlicmFyeS5cbiAqXG4gKiBgQ1NTVHJhbnNpdGlvbmAgYXBwbGllcyBhIHBhaXIgb2YgY2xhc3MgbmFtZXMgZHVyaW5nIHRoZSBgYXBwZWFyYCwgYGVudGVyYCxcbiAqIGFuZCBgZXhpdGAgc3RhZ2VzIG9mIHRoZSB0cmFuc2l0aW9uLiBUaGUgZmlyc3QgY2xhc3MgaXMgYXBwbGllZCBhbmQgdGhlbiBhXG4gKiBzZWNvbmQgXCJhY3RpdmVcIiBjbGFzcyBpbiBvcmRlciB0byBhY3RpdmF0ZSB0aGUgY3NzIGFuaW1hdGlvbi4gQWZ0ZXIgdGhlIGFuaW1hdGlvbixcbiAqIG1hdGNoaW5nIGBkb25lYCBjbGFzcyBuYW1lcyBhcmUgYXBwbGllZCB0byBwZXJzaXN0IHRoZSBhbmltYXRpb24gc3RhdGUuXG4gKlxuICogV2hlbiB0aGUgYGluYCBwcm9wIGlzIHRvZ2dsZWQgdG8gYHRydWVgIHRoZSBDb21wb25lbnQgd2lsbCBnZXRcbiAqIHRoZSBgZXhhbXBsZS1lbnRlcmAgQ1NTIGNsYXNzIGFuZCB0aGUgYGV4YW1wbGUtZW50ZXItYWN0aXZlYCBDU1MgY2xhc3NcbiAqIGFkZGVkIGluIHRoZSBuZXh0IHRpY2suIFRoaXMgaXMgYSBjb252ZW50aW9uIGJhc2VkIG9uIHRoZSBgY2xhc3NOYW1lc2AgcHJvcC5cbiAqL1xuXG5cbnZhciBDU1NUcmFuc2l0aW9uID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0c0xvb3NlKENTU1RyYW5zaXRpb24sIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIENTU1RyYW5zaXRpb24oKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIF90aGlzID0gX1JlYWN0JENvbXBvbmVudC5jYWxsLmFwcGx5KF9SZWFjdCRDb21wb25lbnQsIFt0aGlzXS5jb25jYXQoYXJncykpIHx8IHRoaXM7XG5cbiAgICBfdGhpcy5vbkVudGVyID0gZnVuY3Rpb24gKG5vZGUsIGFwcGVhcmluZykge1xuICAgICAgdmFyIF90aGlzJGdldENsYXNzTmFtZXMgPSBfdGhpcy5nZXRDbGFzc05hbWVzKGFwcGVhcmluZyA/ICdhcHBlYXInIDogJ2VudGVyJyksXG4gICAgICAgICAgY2xhc3NOYW1lID0gX3RoaXMkZ2V0Q2xhc3NOYW1lcy5jbGFzc05hbWU7XG5cbiAgICAgIF90aGlzLnJlbW92ZUNsYXNzZXMobm9kZSwgJ2V4aXQnKTtcblxuICAgICAgYWRkQ2xhc3Mobm9kZSwgY2xhc3NOYW1lKTtcblxuICAgICAgaWYgKF90aGlzLnByb3BzLm9uRW50ZXIpIHtcbiAgICAgICAgX3RoaXMucHJvcHMub25FbnRlcihub2RlLCBhcHBlYXJpbmcpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfdGhpcy5vbkVudGVyaW5nID0gZnVuY3Rpb24gKG5vZGUsIGFwcGVhcmluZykge1xuICAgICAgdmFyIF90aGlzJGdldENsYXNzTmFtZXMyID0gX3RoaXMuZ2V0Q2xhc3NOYW1lcyhhcHBlYXJpbmcgPyAnYXBwZWFyJyA6ICdlbnRlcicpLFxuICAgICAgICAgIGFjdGl2ZUNsYXNzTmFtZSA9IF90aGlzJGdldENsYXNzTmFtZXMyLmFjdGl2ZUNsYXNzTmFtZTtcblxuICAgICAgX3RoaXMucmVmbG93QW5kQWRkQ2xhc3Mobm9kZSwgYWN0aXZlQ2xhc3NOYW1lKTtcblxuICAgICAgaWYgKF90aGlzLnByb3BzLm9uRW50ZXJpbmcpIHtcbiAgICAgICAgX3RoaXMucHJvcHMub25FbnRlcmluZyhub2RlLCBhcHBlYXJpbmcpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfdGhpcy5vbkVudGVyZWQgPSBmdW5jdGlvbiAobm9kZSwgYXBwZWFyaW5nKSB7XG4gICAgICB2YXIgX3RoaXMkZ2V0Q2xhc3NOYW1lczMgPSBfdGhpcy5nZXRDbGFzc05hbWVzKCdlbnRlcicpLFxuICAgICAgICAgIGRvbmVDbGFzc05hbWUgPSBfdGhpcyRnZXRDbGFzc05hbWVzMy5kb25lQ2xhc3NOYW1lO1xuXG4gICAgICBfdGhpcy5yZW1vdmVDbGFzc2VzKG5vZGUsIGFwcGVhcmluZyA/ICdhcHBlYXInIDogJ2VudGVyJyk7XG5cbiAgICAgIGFkZENsYXNzKG5vZGUsIGRvbmVDbGFzc05hbWUpO1xuXG4gICAgICBpZiAoX3RoaXMucHJvcHMub25FbnRlcmVkKSB7XG4gICAgICAgIF90aGlzLnByb3BzLm9uRW50ZXJlZChub2RlLCBhcHBlYXJpbmcpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfdGhpcy5vbkV4aXQgPSBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgdmFyIF90aGlzJGdldENsYXNzTmFtZXM0ID0gX3RoaXMuZ2V0Q2xhc3NOYW1lcygnZXhpdCcpLFxuICAgICAgICAgIGNsYXNzTmFtZSA9IF90aGlzJGdldENsYXNzTmFtZXM0LmNsYXNzTmFtZTtcblxuICAgICAgX3RoaXMucmVtb3ZlQ2xhc3Nlcyhub2RlLCAnYXBwZWFyJyk7XG5cbiAgICAgIF90aGlzLnJlbW92ZUNsYXNzZXMobm9kZSwgJ2VudGVyJyk7XG5cbiAgICAgIGFkZENsYXNzKG5vZGUsIGNsYXNzTmFtZSk7XG5cbiAgICAgIGlmIChfdGhpcy5wcm9wcy5vbkV4aXQpIHtcbiAgICAgICAgX3RoaXMucHJvcHMub25FeGl0KG5vZGUpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfdGhpcy5vbkV4aXRpbmcgPSBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgdmFyIF90aGlzJGdldENsYXNzTmFtZXM1ID0gX3RoaXMuZ2V0Q2xhc3NOYW1lcygnZXhpdCcpLFxuICAgICAgICAgIGFjdGl2ZUNsYXNzTmFtZSA9IF90aGlzJGdldENsYXNzTmFtZXM1LmFjdGl2ZUNsYXNzTmFtZTtcblxuICAgICAgX3RoaXMucmVmbG93QW5kQWRkQ2xhc3Mobm9kZSwgYWN0aXZlQ2xhc3NOYW1lKTtcblxuICAgICAgaWYgKF90aGlzLnByb3BzLm9uRXhpdGluZykge1xuICAgICAgICBfdGhpcy5wcm9wcy5vbkV4aXRpbmcobm9kZSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF90aGlzLm9uRXhpdGVkID0gZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgIHZhciBfdGhpcyRnZXRDbGFzc05hbWVzNiA9IF90aGlzLmdldENsYXNzTmFtZXMoJ2V4aXQnKSxcbiAgICAgICAgICBkb25lQ2xhc3NOYW1lID0gX3RoaXMkZ2V0Q2xhc3NOYW1lczYuZG9uZUNsYXNzTmFtZTtcblxuICAgICAgX3RoaXMucmVtb3ZlQ2xhc3Nlcyhub2RlLCAnZXhpdCcpO1xuXG4gICAgICBhZGRDbGFzcyhub2RlLCBkb25lQ2xhc3NOYW1lKTtcblxuICAgICAgaWYgKF90aGlzLnByb3BzLm9uRXhpdGVkKSB7XG4gICAgICAgIF90aGlzLnByb3BzLm9uRXhpdGVkKG5vZGUpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfdGhpcy5nZXRDbGFzc05hbWVzID0gZnVuY3Rpb24gKHR5cGUpIHtcbiAgICAgIHZhciBjbGFzc05hbWVzID0gX3RoaXMucHJvcHMuY2xhc3NOYW1lcztcbiAgICAgIHZhciBjbGFzc05hbWUgPSB0eXBlb2YgY2xhc3NOYW1lcyAhPT0gJ3N0cmluZycgPyBjbGFzc05hbWVzW3R5cGVdIDogY2xhc3NOYW1lcyArICctJyArIHR5cGU7XG4gICAgICB2YXIgYWN0aXZlQ2xhc3NOYW1lID0gdHlwZW9mIGNsYXNzTmFtZXMgIT09ICdzdHJpbmcnID8gY2xhc3NOYW1lc1t0eXBlICsgJ0FjdGl2ZSddIDogY2xhc3NOYW1lICsgJy1hY3RpdmUnO1xuICAgICAgdmFyIGRvbmVDbGFzc05hbWUgPSB0eXBlb2YgY2xhc3NOYW1lcyAhPT0gJ3N0cmluZycgPyBjbGFzc05hbWVzW3R5cGUgKyAnRG9uZSddIDogY2xhc3NOYW1lICsgJy1kb25lJztcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lLFxuICAgICAgICBhY3RpdmVDbGFzc05hbWU6IGFjdGl2ZUNsYXNzTmFtZSxcbiAgICAgICAgZG9uZUNsYXNzTmFtZTogZG9uZUNsYXNzTmFtZVxuICAgICAgfTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IENTU1RyYW5zaXRpb24ucHJvdG90eXBlO1xuXG4gIF9wcm90by5yZW1vdmVDbGFzc2VzID0gZnVuY3Rpb24gcmVtb3ZlQ2xhc3Nlcyhub2RlLCB0eXBlKSB7XG4gICAgdmFyIF90aGlzJGdldENsYXNzTmFtZXM3ID0gdGhpcy5nZXRDbGFzc05hbWVzKHR5cGUpLFxuICAgICAgICBjbGFzc05hbWUgPSBfdGhpcyRnZXRDbGFzc05hbWVzNy5jbGFzc05hbWUsXG4gICAgICAgIGFjdGl2ZUNsYXNzTmFtZSA9IF90aGlzJGdldENsYXNzTmFtZXM3LmFjdGl2ZUNsYXNzTmFtZSxcbiAgICAgICAgZG9uZUNsYXNzTmFtZSA9IF90aGlzJGdldENsYXNzTmFtZXM3LmRvbmVDbGFzc05hbWU7XG5cbiAgICBjbGFzc05hbWUgJiYgcmVtb3ZlQ2xhc3Mobm9kZSwgY2xhc3NOYW1lKTtcbiAgICBhY3RpdmVDbGFzc05hbWUgJiYgcmVtb3ZlQ2xhc3Mobm9kZSwgYWN0aXZlQ2xhc3NOYW1lKTtcbiAgICBkb25lQ2xhc3NOYW1lICYmIHJlbW92ZUNsYXNzKG5vZGUsIGRvbmVDbGFzc05hbWUpO1xuICB9O1xuXG4gIF9wcm90by5yZWZsb3dBbmRBZGRDbGFzcyA9IGZ1bmN0aW9uIHJlZmxvd0FuZEFkZENsYXNzKG5vZGUsIGNsYXNzTmFtZSkge1xuICAgIC8vIFRoaXMgaXMgZm9yIHRvIGZvcmNlIGEgcmVwYWludCxcbiAgICAvLyB3aGljaCBpcyBuZWNlc3NhcnkgaW4gb3JkZXIgdG8gdHJhbnNpdGlvbiBzdHlsZXMgd2hlbiBhZGRpbmcgYSBjbGFzcyBuYW1lLlxuICAgIGlmIChjbGFzc05hbWUpIHtcbiAgICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC1leHByZXNzaW9ucyAqL1xuICAgICAgbm9kZSAmJiBub2RlLnNjcm9sbFRvcDtcbiAgICAgIC8qIGVzbGludC1lbmFibGUgbm8tdW51c2VkLWV4cHJlc3Npb25zICovXG5cbiAgICAgIGFkZENsYXNzKG5vZGUsIGNsYXNzTmFtZSk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIHByb3BzID0gX2V4dGVuZHMoe30sIHRoaXMucHJvcHMpO1xuXG4gICAgZGVsZXRlIHByb3BzLmNsYXNzTmFtZXM7XG4gICAgcmV0dXJuIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX1RyYW5zaXRpb24uZGVmYXVsdCwgX2V4dGVuZHMoe30sIHByb3BzLCB7XG4gICAgICBvbkVudGVyOiB0aGlzLm9uRW50ZXIsXG4gICAgICBvbkVudGVyZWQ6IHRoaXMub25FbnRlcmVkLFxuICAgICAgb25FbnRlcmluZzogdGhpcy5vbkVudGVyaW5nLFxuICAgICAgb25FeGl0OiB0aGlzLm9uRXhpdCxcbiAgICAgIG9uRXhpdGluZzogdGhpcy5vbkV4aXRpbmcsXG4gICAgICBvbkV4aXRlZDogdGhpcy5vbkV4aXRlZFxuICAgIH0pKTtcbiAgfTtcblxuICByZXR1cm4gQ1NTVHJhbnNpdGlvbjtcbn0oX3JlYWN0LmRlZmF1bHQuQ29tcG9uZW50KTtcblxuQ1NTVHJhbnNpdGlvbi5wcm9wVHlwZXMgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBfZXh0ZW5kcyh7fSwgX1RyYW5zaXRpb24uZGVmYXVsdC5wcm9wVHlwZXMsIHtcbiAgLyoqXG4gICAqIFRoZSBhbmltYXRpb24gY2xhc3NOYW1lcyBhcHBsaWVkIHRvIHRoZSBjb21wb25lbnQgYXMgaXQgZW50ZXJzLCBleGl0cyBvciBoYXMgZmluaXNoZWQgdGhlIHRyYW5zaXRpb24uXG4gICAqIEEgc2luZ2xlIG5hbWUgY2FuIGJlIHByb3ZpZGVkIGFuZCBpdCB3aWxsIGJlIHN1ZmZpeGVkIGZvciBlYWNoIHN0YWdlOiBlLmcuXG4gICAqXG4gICAqIGBjbGFzc05hbWVzPVwiZmFkZVwiYCBhcHBsaWVzIGBmYWRlLWVudGVyYCwgYGZhZGUtZW50ZXItYWN0aXZlYCwgYGZhZGUtZW50ZXItZG9uZWAsXG4gICAqIGBmYWRlLWV4aXRgLCBgZmFkZS1leGl0LWFjdGl2ZWAsIGBmYWRlLWV4aXQtZG9uZWAsIGBmYWRlLWFwcGVhcmAsIGFuZCBgZmFkZS1hcHBlYXItYWN0aXZlYC5cbiAgICogRWFjaCBpbmRpdmlkdWFsIGNsYXNzTmFtZXMgY2FuIGFsc28gYmUgc3BlY2lmaWVkIGluZGVwZW5kZW50bHkgbGlrZTpcbiAgICpcbiAgICogYGBganNcbiAgICogY2xhc3NOYW1lcz17e1xuICAgKiAgYXBwZWFyOiAnbXktYXBwZWFyJyxcbiAgICogIGFwcGVhckFjdGl2ZTogJ215LWFjdGl2ZS1hcHBlYXInLFxuICAgKiAgZW50ZXI6ICdteS1lbnRlcicsXG4gICAqICBlbnRlckFjdGl2ZTogJ215LWFjdGl2ZS1lbnRlcicsXG4gICAqICBlbnRlckRvbmU6ICdteS1kb25lLWVudGVyJyxcbiAgICogIGV4aXQ6ICdteS1leGl0JyxcbiAgICogIGV4aXRBY3RpdmU6ICdteS1hY3RpdmUtZXhpdCcsXG4gICAqICBleGl0RG9uZTogJ215LWRvbmUtZXhpdCcsXG4gICAqIH19XG4gICAqIGBgYFxuICAgKlxuICAgKiBJZiB5b3Ugd2FudCB0byBzZXQgdGhlc2UgY2xhc3NlcyB1c2luZyBDU1MgTW9kdWxlczpcbiAgICpcbiAgICogYGBganNcbiAgICogaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcy5jc3MnO1xuICAgKiBgYGBcbiAgICpcbiAgICogeW91IG1pZ2h0IHdhbnQgdG8gdXNlIGNhbWVsQ2FzZSBpbiB5b3VyIENTUyBmaWxlLCB0aGF0IHdheSBjb3VsZCBzaW1wbHkgc3ByZWFkXG4gICAqIHRoZW0gaW5zdGVhZCBvZiBsaXN0aW5nIHRoZW0gb25lIGJ5IG9uZTpcbiAgICpcbiAgICogYGBganNcbiAgICogY2xhc3NOYW1lcz17eyAuLi5zdHlsZXMgfX1cbiAgICogYGBgXG4gICAqXG4gICAqIEB0eXBlIHtzdHJpbmcgfCB7XG4gICAqICBhcHBlYXI/OiBzdHJpbmcsXG4gICAqICBhcHBlYXJBY3RpdmU/OiBzdHJpbmcsXG4gICAqICBlbnRlcj86IHN0cmluZyxcbiAgICogIGVudGVyQWN0aXZlPzogc3RyaW5nLFxuICAgKiAgZW50ZXJEb25lPzogc3RyaW5nLFxuICAgKiAgZXhpdD86IHN0cmluZyxcbiAgICogIGV4aXRBY3RpdmU/OiBzdHJpbmcsXG4gICAqICBleGl0RG9uZT86IHN0cmluZyxcbiAgICogfX1cbiAgICovXG4gIGNsYXNzTmFtZXM6IF9Qcm9wVHlwZXMuY2xhc3NOYW1lc1NoYXBlLFxuXG4gIC8qKlxuICAgKiBBIGA8VHJhbnNpdGlvbj5gIGNhbGxiYWNrIGZpcmVkIGltbWVkaWF0ZWx5IGFmdGVyIHRoZSAnZW50ZXInIG9yICdhcHBlYXInIGNsYXNzIGlzXG4gICAqIGFwcGxpZWQuXG4gICAqXG4gICAqIEB0eXBlIEZ1bmN0aW9uKG5vZGU6IEh0bWxFbGVtZW50LCBpc0FwcGVhcmluZzogYm9vbClcbiAgICovXG4gIG9uRW50ZXI6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBBIGA8VHJhbnNpdGlvbj5gIGNhbGxiYWNrIGZpcmVkIGltbWVkaWF0ZWx5IGFmdGVyIHRoZSAnZW50ZXItYWN0aXZlJyBvclxuICAgKiAnYXBwZWFyLWFjdGl2ZScgY2xhc3MgaXMgYXBwbGllZC5cbiAgICpcbiAgICogQHR5cGUgRnVuY3Rpb24obm9kZTogSHRtbEVsZW1lbnQsIGlzQXBwZWFyaW5nOiBib29sKVxuICAgKi9cbiAgb25FbnRlcmluZzogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIEEgYDxUcmFuc2l0aW9uPmAgY2FsbGJhY2sgZmlyZWQgaW1tZWRpYXRlbHkgYWZ0ZXIgdGhlICdlbnRlcicgb3JcbiAgICogJ2FwcGVhcicgY2xhc3NlcyBhcmUgKipyZW1vdmVkKiogYW5kIHRoZSBgZG9uZWAgY2xhc3MgaXMgYWRkZWQgdG8gdGhlIERPTSBub2RlLlxuICAgKlxuICAgKiBAdHlwZSBGdW5jdGlvbihub2RlOiBIdG1sRWxlbWVudCwgaXNBcHBlYXJpbmc6IGJvb2wpXG4gICAqL1xuICBvbkVudGVyZWQ6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBBIGA8VHJhbnNpdGlvbj5gIGNhbGxiYWNrIGZpcmVkIGltbWVkaWF0ZWx5IGFmdGVyIHRoZSAnZXhpdCcgY2xhc3MgaXNcbiAgICogYXBwbGllZC5cbiAgICpcbiAgICogQHR5cGUgRnVuY3Rpb24obm9kZTogSHRtbEVsZW1lbnQpXG4gICAqL1xuICBvbkV4aXQ6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBBIGA8VHJhbnNpdGlvbj5gIGNhbGxiYWNrIGZpcmVkIGltbWVkaWF0ZWx5IGFmdGVyIHRoZSAnZXhpdC1hY3RpdmUnIGlzIGFwcGxpZWQuXG4gICAqXG4gICAqIEB0eXBlIEZ1bmN0aW9uKG5vZGU6IEh0bWxFbGVtZW50KVxuICAgKi9cbiAgb25FeGl0aW5nOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQSBgPFRyYW5zaXRpb24+YCBjYWxsYmFjayBmaXJlZCBpbW1lZGlhdGVseSBhZnRlciB0aGUgJ2V4aXQnIGNsYXNzZXNcbiAgICogYXJlICoqcmVtb3ZlZCoqIGFuZCB0aGUgYGV4aXQtZG9uZWAgY2xhc3MgaXMgYWRkZWQgdG8gdGhlIERPTSBub2RlLlxuICAgKlxuICAgKiBAdHlwZSBGdW5jdGlvbihub2RlOiBIdG1sRWxlbWVudClcbiAgICovXG4gIG9uRXhpdGVkOiBQcm9wVHlwZXMuZnVuY1xufSkgOiB7fTtcbnZhciBfZGVmYXVsdCA9IENTU1RyYW5zaXRpb247XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1tcImRlZmF1bHRcIl07IiwiaW1wb3J0IFJlYWN0LCB7IGNyZWF0ZVJlZiwgUmVmT2JqZWN0LCBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IENTU1RyYW5zaXRpb24gZnJvbSAncmVhY3QtdHJhbnNpdGlvbi1ncm91cC9DU1NUcmFuc2l0aW9uJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgQ29sb3JUeXBlLCBDU1NUeXBlIH0gZnJvbSAnLi4vLi4vdHlwZXMnO1xuXG5jb25zdCBXcmFwcGVyID0gc3R5bGVkLmRpdjx7IGNzcz86IENTU1R5cGUgfT5gXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXG4gIGRpdltyb2xlPVwidG9vbHRpcFwiXSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGNsZWFyOiBib3RoO1xuICAgIGJveC1zaGFkb3c6IDAgMXB4IDJweCAwIHJnYmEoMCwgMCwgMCwgMC4wNSk7XG4gICAgei1pbmRleDogOTk5OTtcbiAgICBwYWRkaW5nOiAwLjM3NXJlbSAwLjYyNXJlbTtcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgd2hpdGUtc3BhY2U6IHByZTtcbiAgICBmb250LXNpemU6IDAuODVyZW07XG5cbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOCk7XG4gICAgb3BhY2l0eTogMDtcblxuICAgIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm0sIG9wYWNpdHk7XG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtLCBvcGFjaXR5O1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDEwMG1zO1xuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSk7XG5cbiAgICAmLnN0YXJ0IHtcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgIH1cblxuICAgICYuZW5kIHtcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC44KTtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuICB9XG4gICR7KHsgY3NzIH0pID0+IGNzcyB8fCAnJ31cbmA7XG5cbmludGVyZmFjZSBUb29sdGlwUHJvcHMge1xuICAvKiog5ZC544GN5Ye644GX44Go44GX44Gm6KGo56S644GX44Gf44GE5YaF5a65ICovXG4gIGxhYmVsOiBhbnk7XG4gIC8qKiDjg57jgqbjgrnjgqrjg7zjg5Djg7zjga7lr77osaHjgavjgarjgotlbGVtZW50ICovXG4gIGNoaWxkcmVuOiBhbnk7XG4gIC8qKiDlkLnjgY3lh7rjgZfjga7og4zmma/oibLjga7mjIflrpogKi9cbiAgY29sb3I/OiBDb2xvclR5cGU7XG4gIC8qKiDooajnpLrjgZXjgozjgovloLTmiYAgKi9cbiAgcG9zaXRpb24/OiAndG9wJyB8ICdsZWZ0JyB8ICdyaWdodCcgfCAnYm90dG9tJztcbiAgLyoqIOOCq+OCueOCv+ODoENTU+Wumue+qSAqL1xuICBjc3M/OiBDU1NUeXBlO1xufVxuXG5pbnRlcmZhY2UgU3RhdGUge1xuICBzaG93OiBib29sZWFuO1xuICBzdHlsZTogYW55O1xufVxuXG5mdW5jdGlvbiBnZXRQb3NpdGlvbihoZWlnaHQ6IG51bWJlciwgd2lkdGg6IG51bWJlciwgcG9zaXRpb24/OiBhbnkpIHtcbiAgc3dpdGNoIChwb3NpdGlvbikge1xuICAgIGNhc2UgJ3RvcCc6IHtcbiAgICAgIHJldHVybiB7IGJvdHRvbTogYCR7aGVpZ2h0fXB4YCwgbGVmdDogJzUwJScsIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoLTUwJSknIH07XG4gICAgfVxuICAgIGNhc2UgJ2xlZnQnOiB7XG4gICAgICByZXR1cm4geyByaWdodDogYCR7d2lkdGh9cHhgLCB0b3A6ICc1MCUnLCB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKC01MCUpJyB9O1xuICAgIH1cbiAgICBjYXNlICdyaWdodCc6IHtcbiAgICAgIHJldHVybiB7IGxlZnQ6IGAke3dpZHRofXB4YCwgdG9wOiAnNTAlJywgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgtNTAlKScgfTtcbiAgICB9XG4gICAgZGVmYXVsdDoge1xuICAgICAgcmV0dXJuIHsgdG9wOiBgJHtoZWlnaHR9cHhgLCBsZWZ0OiAnNTAlJywgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgtNTAlKScgIH07XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvb2x0aXAgZXh0ZW5kcyBQdXJlQ29tcG9uZW50PFRvb2x0aXBQcm9wcywgU3RhdGU+IHtcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBwb3NpdGlvbjogJ2JvdHRvbScsXG4gICAgY29sb3I6ICdkYXJrJyxcbiAgfTtcblxuICBzdGF0ZSA9IHtcbiAgICBzaG93OiBmYWxzZSxcbiAgICBzdHlsZToge30sXG4gIH07XG5cbiAgb3BlblRvb2x0aXAgPSAoKSA9PiB7XG4gICAgaWYgKHRoaXMuc3RhdGUuc2hvdyB8fCAhdGhpcy5lbGVtZW50LmN1cnJlbnQpIHJldHVybjtcblxuICAgIGNvbnN0IHdpZHRoID0gdGhpcy5lbGVtZW50LmN1cnJlbnQub2Zmc2V0V2lkdGggKyA4O1xuICAgIGNvbnN0IGhlaWdodCA9IHRoaXMuZWxlbWVudC5jdXJyZW50Lm9mZnNldEhlaWdodCArIDg7XG4gICAgY29uc3Qgc3R5bGUgPSBnZXRQb3NpdGlvbihoZWlnaHQsIHdpZHRoLCB0aGlzLnByb3BzLnBvc2l0aW9uKTtcbiAgICB0aGlzLnNldFN0YXRlKHsgc3R5bGUsIHNob3c6IHRydWUgfSk7XG4gIH1cblxuICBjbG9zZVRvb2x0aXAgPSAoKSA9PiB7XG4gICAgaWYgKHRoaXMuc3RhdGUuc2hvdyAmJiB0aGlzLmVsZW1lbnQuY3VycmVudCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNob3c6IGZhbHNlIH0pO1xuICAgIH1cbiAgfVxuXG4gIGVsZW1lbnQ6IFJlZk9iamVjdDxIVE1MRGl2RWxlbWVudD4gPSBjcmVhdGVSZWYoKTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBsYWJlbCwgY2hpbGRyZW4sIC4uLnJlc3QgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBzaG93LCBzdHlsZSB9ID0gdGhpcy5zdGF0ZTtcbiAgICByZXR1cm4gKFxuICAgICAgPFdyYXBwZXJcbiAgICAgICAgcmVmPXt0aGlzLmVsZW1lbnR9XG4gICAgICAgIG9uTW91c2VPdmVyPXt0aGlzLm9wZW5Ub29sdGlwfVxuICAgICAgICBvbk1vdXNlT3V0PXt0aGlzLmNsb3NlVG9vbHRpcH1cbiAgICAgICAgey4uLnJlc3R9XG4gICAgICA+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPENTU1RyYW5zaXRpb25cbiAgICAgICAgICBjbGFzc05hbWVzPXt7XG4gICAgICAgICAgICBhcHBlYXI6ICdzdGFydCcsXG4gICAgICAgICAgICBlbnRlckRvbmU6ICdzdGFydCcsXG4gICAgICAgICAgICBleGl0OiAnZW5kJyxcbiAgICAgICAgICB9fVxuICAgICAgICAgIGluPXtzaG93fVxuICAgICAgICAgIHRpbWVvdXQ9ezE1MH1cbiAgICAgICAgICB1bm1vdW50T25FeGl0XG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2IHJvbGU9XCJ0b29sdGlwXCI+XG4gICAgICAgICAgICB7bGFiZWx9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvQ1NTVHJhbnNpdGlvbj5cbiAgICAgIDwvV3JhcHBlcj5cbiAgICApO1xuICB9XG59XG5cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuZXhwb3J0IGNvbnN0IFNpZGVNZW51ID0gc3R5bGVkLmFzaWRlYFxuICBmb250LXNpemU6IDFyZW07XG5gO1xuU2lkZU1lbnUuZGlzcGxheU5hbWUgPSAnU2lkZU1lbnUnO1xuXG5leHBvcnQgY29uc3QgTWVudUxpc3QgPSBzdHlsZWQudWxgXG4gIGxpbmUtaGVpZ2h0OiAxLjI1O1xuXG4gIGEge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBhZGRpbmc6IDAuNWVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS50ZXh0fTtcbiAgICAmOmhvdmVyIHtcbiAgICAgIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnByaW1hcnl9O1xuICAgIH1cbiAgICAmLmFjdGl2ZSB7XG4gICAgICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5wcmltYXJ5fTtcbiAgICB9XG4gIH1cblxuICBsaSB7XG4gICAgdWwge1xuICAgICAgbWFyZ2luOiAwLjc1ZW07XG4gICAgICBwYWRkaW5nLWxlZnQ6IDAuNzVlbTtcbiAgICB9XG4gIH1cbmA7XG5NZW51TGlzdC5kaXNwbGF5TmFtZSA9ICdNZW51TGlzdCc7XG5cbmV4cG9ydCBjb25zdCBNZW51TGFiZWwgPSBzdHlsZWQucGBcbiAgZm9udC1zaXplOiAwLjc1ZW07XG4gIGxldHRlci1zcGFjaW5nOiAwLjFlbTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcblxuICAmOm5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgICBtYXJnaW4tdG9wOiAxZW07XG4gIH1cbiAgJjpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XG4gIH1cbmA7XG5NZW51TGFiZWwuZGlzcGxheU5hbWUgPSAnTWVudUxhYmVsJztcblxuIiwiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQsIENTU1Byb3BlcnRpZXMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkLCB7IGNzcyB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBCb3ggZnJvbSAnLi4vQm94JztcbmltcG9ydCB7IENvbG9yVHlwZSB9IGZyb20gJy4uLy4uL3R5cGVzJztcblxuY29uc3QgQ2FyZEJvZHkgPSBzdHlsZWQuZGl2YFxuICBwYWRkaW5nOiAxLjI1cmVtO1xuICBtYXJnaW46IDA7XG5gO1xuXG5jb25zdCBDYXJkSGVhZGVyID0gc3R5bGVkLmhlYWRlcmBcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZzogMC41cmVtIDEuNXJlbTtcbiAgbWluLWhlaWdodDogMy41cmVtO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5ib3JkZXJ9O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5gO1xuXG5jb25zdCBDYXJkRm9vdGVyID0gc3R5bGVkLmZvb3RlcmBcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZzogMC41cmVtIDEuNXJlbTtcbiAgbWluLWhlaWdodDogMy41cmVtO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5ib3JkZXJ9O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5gO1xuXG5jb25zdCBDYXJkSW1hZ2UgPSBzdHlsZWQuYWBcbiAgd2lkdGg6IDEwMCU7XG5cbiAgaW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMDtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAzcHg7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDNweDtcbiAgfVxuYDtcblxuaW50ZXJmYWNlIEltYWdlUHJvcHMge1xuICB1cmw/OiBzdHJpbmc7XG59XG5cbmNvbnN0IENhcmRJbWFnZUhvcml6b250YWwgPSBzdHlsZWQuYTxJbWFnZVByb3BzPmBcbiAgZmxleDogMCAwIDMwJTtcbiAgbWluLXdpZHRoOiA1cmVtO1xuICB3aWR0aDogMzAlO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAzcHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDNweDtcblxuICBiYWNrZ3JvdW5kOiBuby1yZXBlYXQgY2VudGVyL2NvdmVyO1xuICAkeyh7IHVybCB9KSA9PiB1cmwgPyBjc3NgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7dXJsfSk7YCA6IHt9fVxuYDtcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgLyoqIOODrOOCueODneODs+OCt+ODluOBquOCpOODoeODvOOCuOOCkui/veWKoOOBmeOCiyAqL1xuICBpbWFnZT86IHN0cmluZztcbiAgLyoqIOOCv+OCpOODiOODqyAqL1xuICB0aXRsZT86IHN0cmluZztcbiAgLyoqIOODmOODg+ODgOODvOOBruWPs+WBtOOBq+i/veWKoOOBmeOCiyAqL1xuICBoZWFkZXJPcHRpb25zPzogYW55O1xuICAvKiogaGVhZGVy6YOo5YiG77yI44Kk44Oh44O844K477yJ44KS5qiq5Lim44Gz44Gr44GZ44KLICovXG4gIGhvcml6b250YWw/OiBib29sZWFuO1xuICAvKiogZm9vdGVyICovXG4gIGZvb3Rlcj86IGFueTtcbiAgLyoqIOiJsuOBruaMh+WumiAqL1xuICBjb2xvcj86IENvbG9yVHlwZTtcbiAgLyoqIOODmOODg+ODgOOCkiAqL1xuICBoZWFkZXJPblRvcD86IGJvb2xlYW47XG4gIC8qKiDjgqvjgrnjgr9pbmxpbmUgc3R5bGUgKi9cbiAgc3R5bGU/OiBhbnk7XG59XG5cbmNvbnN0IGhvcml6b250YWxTdHlsZTogQ1NTUHJvcGVydGllcyA9IHsgZmxleERpcmVjdGlvbjogJ3JvdycgfTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FyZCBleHRlbmRzIFB1cmVDb21wb25lbnQ8UHJvcHM+IHtcbiAgcmVuZGVySGVhZGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgaW1hZ2UsIHRpdGxlLCBob3Jpem9udGFsIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgaWYgKGltYWdlICYmICFob3Jpem9udGFsKSByZXR1cm4gKDxDYXJkSW1hZ2U+PGltZyBzcmM9e2ltYWdlfSAvPjwvQ2FyZEltYWdlPik7XG4gICAgaWYgKGltYWdlICYmIGhvcml6b250YWwpIHJldHVybiAoPENhcmRJbWFnZUhvcml6b250YWwgdXJsPXtpbWFnZX0gLz4pO1xuICAgIGlmICh0aXRsZSAmJiAhaG9yaXpvbnRhbCkgcmV0dXJuICg8Q2FyZEhlYWRlcj48aDM+e3RpdGxlfTwvaDM+PC9DYXJkSGVhZGVyPik7XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNoaWxkcmVuLCBob3Jpem9udGFsLCBmb290ZXIsIGNvbG9yIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgY29uc3QgaGVhZGVyID0gdGhpcy5yZW5kZXJIZWFkZXIoKTtcbiAgICBjb25zdCB3cmFwcGVyU3R5bGUgPSBob3Jpem9udGFsID8gaG9yaXpvbnRhbFN0eWxlIDogdW5kZWZpbmVkO1xuICAgIHJldHVybiAoXG4gICAgICA8Qm94IHN0eWxlPXt3cmFwcGVyU3R5bGV9IGNvbG9yPXtjb2xvcn0+XG4gICAgICAgIHtoZWFkZXJ9XG4gICAgICAgIDxDYXJkQm9keT5cbiAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvQ2FyZEJvZHk+XG4gICAgICAgIHtmb290ZXIgJiYgKDxDYXJkRm9vdGVyPntSZWFjdC5DaGlsZHJlbi5vbmx5KGZvb3Rlcil9PC9DYXJkRm9vdGVyPil9XG4gICAgICA8L0JveD5cbiAgICApO1xuICB9XG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgQ1NTVHJhbnNpdGlvbiBmcm9tICdyZWFjdC10cmFuc2l0aW9uLWdyb3VwL0NTU1RyYW5zaXRpb24nO1xuaW1wb3J0IEJveCwgeyBQcm9wcyBhcyBCb3hQcm9wcyB9IGZyb20gJy4uL0JveCc7XG5pbXBvcnQgeyBDU1NUeXBlIH0gZnJvbSAnLi4vLi4vdHlwZXMnO1xuXG5jb25zdCBXcmFwcGVyID0gc3R5bGVkLmRpdjx7IGNzcz86IENTU1R5cGUgfT5gXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgb3V0bGluZTogbm9uZTtcbiAgY29sb3I6IGluaGVyaXQ7XG5cbiAgJjpob3ZlciB7XG4gICAgY29sb3I6IGluaGVyaXQ7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB9XG5cbiAgJHsoeyBjc3MgfSkgPT4gY3NzIHx8ICcnfVxuYDtcblxuY29uc3QgVG9vbHRpcCA9IHN0eWxlZChCb3gpYFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGNsZWFyOiBib3RoO1xuICBib3gtc2hhZG93OiAwIDFweCAycHggMCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuICB6LWluZGV4OiA5OTk5O1xuICBwYWRkaW5nOiAwLjVyZW0gMDtcbiAgd2lkdGg6IGF1dG87XG4gIGhlaWdodDogYXV0bztcbiAgY3Vyc29yOiBhdXRvO1xuXG4gIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm0sIG9wYWNpdHk7XG4gIHRyYW5zZm9ybTogc2NhbGUoMC44KTtcbiAgb3BhY2l0eTogMDtcblxuICB0cmFuc2l0aW9uLXByb3BlcnR5OiB0cmFuc2Zvcm0sIG9wYWNpdHk7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDEwMG1zO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpO1xuXG4gICYuc3RhcnQge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuXG4gICYuZW5kIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOCk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuYDtcblxuaW50ZXJmYWNlIFByb3BzIGV4dGVuZHMgQm94UHJvcHMge1xuICAvKiog44Oc44K/44Oz44Gu5YaF5a65ICovXG4gIGxhYmVsOiBSZWFjdC5SZWFjdE5vZGU7XG4gIC8qKiDlhoXlrrnjga7jg6rjgrnjg4ggKi9cbiAgY2hpbGRyZW4/OiBSZWFjdC5SZWFjdE5vZGUgfCBSZWFjdC5SZWFjdE5vZGU7XG4gIC8qKiDlj7Pjga7ln7rmupbjgafjg6rjgrnjg4jjgpLooajnpLrjgZnjgosgKi9cbiAgcmlnaHQ/OiBib29sZWFuO1xuICAvKiog5ZC544GN5Ye644GX44GM6KGo56S644GV44KM44KL5aC05omAICovXG4gIHBvc2l0aW9uPzogJ3RvcC1sZWZ0JyB8ICd0b3AnIHwgJ3RvcC1yaWdodCcgfCAnYm90dG9tLWxlZnQnIHwgJ2JvdHRvbScgfCAnYm90dG9tLXJpZ2h0JztcbiAgLyoqIOOCq+OCueOCv+ODoENTU+Wumue+qSAqL1xuICBjc3M/OiBDU1NUeXBlO1xufVxuXG5pbnRlcmZhY2UgU3RhdGUge1xuICBzaG93OiBib29sZWFuO1xuICBzdHlsZTogYW55O1xufVxuXG5mdW5jdGlvbiBnZXRQb3NpdGlvbihwb3NpdGlvbj86IGFueSkge1xuICBzd2l0Y2ggKHBvc2l0aW9uKSB7XG4gICAgY2FzZSAndG9wLWxlZnQnOiB7XG4gICAgICByZXR1cm4geyB0b3A6IDAsIGxlZnQ6IDAsIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoLTEwMCUpJyB9O1xuICAgIH1cbiAgICBjYXNlICd0b3AtcmlnaHQnOiB7XG4gICAgICByZXR1cm4geyB0b3A6IDAsIHJpZ2h0OiAwLCB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKC0xMDAlKScgfTtcbiAgICB9XG4gICAgY2FzZSAndG9wJzoge1xuICAgICAgcmV0dXJuIHsgdG9wOiAgMCwgbGVmdDogJzUwJScsIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZSgtNTAlLCAtMTAwJSknIH07XG4gICAgfVxuICAgIGNhc2UgJ2JvdHRvbS1sZWZ0Jzoge1xuICAgICAgcmV0dXJuIHsgYm90dG9tOiAwLCBsZWZ0OiAwLCB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKDEwMCUpJyB9O1xuICAgIH1cbiAgICBjYXNlICdib3R0b20tcmlnaHQnOiB7XG4gICAgICByZXR1cm4geyBib3R0b206IDAsIHJpZ2h0OiAwLCB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKDEwMCUpJyB9O1xuICAgIH1cbiAgICBjYXNlICdib3R0b20nOiB7XG4gICAgICByZXR1cm4geyBib3R0b206IDAsIGxlZnQ6ICc1MCUnLCB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoLTUwJSwgMTAwJSknIH07XG4gICAgfVxuICAgIGRlZmF1bHQ6IHtcbiAgICAgIHJldHVybiB7IHRvcDogMCwgbGVmdDogMCwgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgxMDAlKScgfTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9wb3ZlciBleHRlbmRzIENvbXBvbmVudDxQcm9wcywgU3RhdGU+IHtcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBwb3NpdGlvbjogJ2JvdHRvbS1sZWZ0JyxcbiAgICBjb2xvcjogJ3doaXRlJyxcbiAgICBzdHlsZToge30sXG4gIH07XG5cbiAgc3RhdGUgPSB7IHNob3c6IGZhbHNlLCBzdHlsZToge30gfTtcblxuICBzaG91bGRDb21wb25lbnRVcGRhdGUocHJvcHM6IFByb3BzLCBzdGF0ZTogU3RhdGUpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZS5zaG93ICE9PSBzdGF0ZS5zaG93IHx8IHRoaXMucHJvcHMubGFiZWwgIT09IHByb3BzLmxhYmVsO1xuICB9XG5cbiAgb3BlbkRyb3Bkb3duID0gKCkgPT4ge1xuICAgIGlmICh0aGlzLnN0YXRlLnNob3cpIHJldHVybjtcblxuICAgIGNvbnN0IHN0eWxlID0gZ2V0UG9zaXRpb24odGhpcy5wcm9wcy5wb3NpdGlvbik7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHN0eWxlLCBzaG93OiB0cnVlIH0pO1xuICB9XG5cbiAgY2xvc2VEcm9wZG93biA9ICgpID0+IHtcbiAgICBpZiAodGhpcy5zdGF0ZS5zaG93KSB0aGlzLnNldFN0YXRlKHsgc2hvdzogZmFsc2UgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBsYWJlbCwgY2hpbGRyZW4sIHN0eWxlLCBjc3MsIC4uLnJlc3QgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBzaG93IH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHRvb2x0aXBTdHlsZSA9IHsgLi4uc3R5bGUsIC4uLnRoaXMuc3RhdGUuc3R5bGUgfTtcbiAgICByZXR1cm4gKFxuICAgICAgPFdyYXBwZXJcbiAgICAgICAgdGFiSW5kZXg9ezB9XG4gICAgICAgIHJvbGU9XCJidXR0b25cIlxuICAgICAgICBvbkZvY3VzPXt0aGlzLm9wZW5Ecm9wZG93bn1cbiAgICAgICAgb25CbHVyPXt0aGlzLmNsb3NlRHJvcGRvd259XG4gICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6ICdibG9jaycsIHBvc2l0aW9uOiAncmVsYXRpdmUnIH19XG4gICAgICAgIGNzcz17Y3NzfVxuICAgICAgPlxuICAgICAgICB7bGFiZWx9XG4gICAgICAgIDxDU1NUcmFuc2l0aW9uXG4gICAgICAgICAgY2xhc3NOYW1lcz17e1xuICAgICAgICAgICAgYXBwZWFyOiAnc3RhcnQnLFxuICAgICAgICAgICAgZW50ZXJEb25lOiAnc3RhcnQnLFxuICAgICAgICAgICAgZXhpdDogJ2VuZCcsXG4gICAgICAgICAgfX1cbiAgICAgICAgICBpbj17c2hvd31cbiAgICAgICAgICB0aW1lb3V0PXsxNTB9XG4gICAgICAgICAgdW5tb3VudE9uRXhpdFxuICAgICAgICA+XG4gICAgICAgICAgPFRvb2x0aXAgcm9sZT1cInRvb2x0aXBcIiBzdHlsZT17dG9vbHRpcFN0eWxlfSB7Li4ucmVzdH0+XG4gICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgICAgPC9Ub29sdGlwPlxuICAgICAgICA8L0NTU1RyYW5zaXRpb24+XG4gICAgICA8L1dyYXBwZXI+XG4gICAgKTtcbiAgfVxufVxuIiwiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQsIEhUTUxBdHRyaWJ1dGVzLCBGcmFnbWVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNyZWF0ZVBvcnRhbCB9IGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgQ1NTVHJhbnNpdGlvbiBmcm9tICdyZWFjdC10cmFuc2l0aW9uLWdyb3VwL0NTU1RyYW5zaXRpb24nO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgQm94IGZyb20gJy4uL0JveCc7XG5pbXBvcnQgQ29sIGZyb20gJy4uL0dyaWQvQ29sJztcbmltcG9ydCB7IENvbG9yVHlwZSwgQ29sU2l6ZVR5cGUsIENTU1R5cGUgfSBmcm9tICcuLi8uLi90eXBlcyc7XG5cbmNvbnN0IEVTQ19LRVkgPSAyNztcblxuY29uc3QgV3JhcHBlciA9IHN0eWxlZC5kaXY8eyBjc3M/OiBDU1NUeXBlLCBzaGFkb3dDb2xvcj86IHN0cmluZyB9PmBcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIHotaW5kZXg6IDk5OTc7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwYWRkaW5nOiAwLjc1cmVtO1xuXG4gIC52LW1vZGFsLWJvZHkge1xuICAgIHotaW5kZXg6IDk5OTk7XG4gICAgbWFyZ2luOiAwO1xuICAgIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm0sIG9wYWNpdHk7XG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtLCBvcGFjaXR5O1xuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSk7XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMjAwbXM7XG4gIH1cblxuICAmLmZhZGUtZW50ZXIgPiAudi1tb2RhbC1ib2R5IHtcbiAgICBvcGFjaXR5OiAwLjAxO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC44KTtcbiAgfVxuICAmLmZhZGUtZW50ZXItYWN0aXZlID4gLnYtbW9kYWwtYm9keSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB9XG4gICYuZmFkZS1leGl0ID4gLnYtbW9kYWwtYm9keSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB9XG4gICYuZmFkZS1leGl0LWFjdGl2ZSA+IC52LW1vZGFsLWJvZHkge1xuICAgIG9wYWNpdHk6IDAuMDE7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjgpO1xuICB9XG5cbiAgLnYtbW9kYWwtc2hhZG93IHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgdG9wOiAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR7KHsgc2hhZG93Q29sb3IgfSkgPT4gc2hhZG93Q29sb3IgfHwgJ3RyYW5zcGFyZW50J307XG4gIH1cblxuICAkeyh7IGNzcyB9KSA9PiBjc3MgfHwge319XG5gO1xuXG5pbnRlcmZhY2UgUHJvcHMgZXh0ZW5kcyBIVE1MQXR0cmlidXRlczxIVE1MRGl2RWxlbWVudD4ge1xuICAvKiog44OY44OD44OA44O844Gu44K/44Kk44OI44Or5paH6KiAICovXG4gIHRpdGxlPzogYW55O1xuICAvKiogMX4xMuOBruODouODvOODgOODq+OCteOCpOOCuiAqL1xuICBzaXplPzogQ29sU2l6ZVR5cGU7XG4gIC8qKiB0cnVl44Gu5aC05ZCI44CB44Oi44O844OA44Or44KS6KGo56S644GX44G+44GZ44CCICovXG4gIHNob3c/OiBib29sZWFuO1xuICAvKiog44Oi44O844OA44Or44GuYm9keeOBq+WFpeOCjOOCi+WGheWuuSAqL1xuICBjaGlsZHJlbj86IGFueTtcbiAgLyoqIOODouODvOODgOODq+OBrmZvb3RlcuOBq+WFpeOCjOOCi+WGheWuuSAqL1xuICBmb290ZXI/OiBhbnk7XG4gIC8qKiDjg6Ljg7zjg4Djg6vjga7oibIgKi9cbiAgY29sb3I/OiBDb2xvclR5cGU7XG4gIC8qKiDjg6Ljg7zjg4Djg6vjgpLplonjgZjjgovlh6bnkIYgKi9cbiAgY2xvc2VNb2RhbDogKCkgPT4gdm9pZDtcbiAgLyoqIOOCquODvOODkOODvOODrOOCpOOBruOCr+ODquODg+OCr+OBp+ODouODvOODgOODq+OCr+ODreODvOOCuiAqL1xuICBjbG9zZU9uT3ZlcmxheT86IGJvb2xlYW47XG4gIC8qKiBlc2Pjg5zjgr/jg7Pjgafjgq/jg63jg7zjgrogKi9cbiAgY2xvc2VPbkVzYz86IGJvb2xlYW47XG4gIC8qKiBvdmVybGF544Gu6IOM5pmv44Gu6Kit5a6aICovXG4gIHNoYWRvd0NvbG9yPzogc3RyaW5nO1xuICAvKiog44Oi44O844OA44Or5aSW44Gr6KGo56S644GZ44KLRWxlbWVudHMgKi9cbiAgZXh0ZXJuYWw/OiBhbnk7XG4gIC8qKiDjgqvjgrnjgr/jg6BDU1PlrprnvqkgKi9cbiAgY3NzPzogQ1NTVHlwZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW9kYWwgZXh0ZW5kcyBQdXJlQ29tcG9uZW50PFByb3BzPiB7XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgc2hvdzogZmFsc2UsXG4gICAgY29sb3I6ICd3aGl0ZScsXG4gICAgc2l6ZTogNixcbiAgICBzaGFkb3dDb2xvcjogJ3JnYmEoMTAsMTAsMTAsLjg2KScsXG4gIH07XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgaWYgKHRoaXMuZWxlbWVudCkge1xuICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZCh0aGlzLmVsZW1lbnQpO1xuICAgIH1cbiAgfVxuXG4gIG9uS2V5RG93biA9IChlOiBhbnkpID0+IHtcbiAgICBpZiAodGhpcy5wcm9wcy5jbG9zZU9uRXNjICYmIGUua2V5Q29kZSA9PT0gRVNDX0tFWSAmJiB0aGlzLnByb3BzLmNsb3NlTW9kYWwpIHtcbiAgICAgIHRoaXMucHJvcHMuY2xvc2VNb2RhbCgpO1xuICAgIH1cbiAgfVxuXG4gIG9uQ2xpY2tPdmVybGF5ID0gKCkgPT4ge1xuICAgIGlmICh0aGlzLnByb3BzLmNsb3NlT25PdmVybGF5ICYmIHRoaXMucHJvcHMuY2xvc2VNb2RhbCkge1xuICAgICAgdGhpcy5wcm9wcy5jbG9zZU1vZGFsKCk7XG4gICAgfVxuICB9XG5cbiAgZWxlbWVudD86IEhUTUxEaXZFbGVtZW50O1xuICBzaG91bGRDbG9zZTogYm9vbGVhbiB8IG51bGwgPSBudWxsO1xuXG4gIHJlbmRlcigpOiBSZWFjdC5SZWFjdFBvcnRhbCB8IG51bGwge1xuICAgIGlmICh0eXBlb2YgZG9jdW1lbnQgIT09IFwidW5kZWZpbmVkXCIgJiYgIXRoaXMuZWxlbWVudCkge1xuICAgICAgdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuZWxlbWVudCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuZWxlbWVudCkge1xuICAgICAgY29uc3Qge1xuICAgICAgICBzaG93LCBzaXplLCB0aXRsZSwgY2hpbGRyZW4sIGZvb3RlciwgY29sb3IsIG9uQ2xpY2ssIC4uLnJlc3RcbiAgICAgIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgICByZXR1cm4gY3JlYXRlUG9ydGFsKChcbiAgICAgICAgPENTU1RyYW5zaXRpb25cbiAgICAgICAgICBjbGFzc05hbWVzPVwiZmFkZVwiXG4gICAgICAgICAgdGltZW91dD17MjAwfVxuICAgICAgICAgIGluPXtzaG93fVxuICAgICAgICAgIHVubW91bnRPbkV4aXRcbiAgICAgICAgPlxuICAgICAgICAgIDxXcmFwcGVyIHJvbGU9XCJkb2N1bWVudFwiIHsuLi5yZXN0fT5cbiAgICAgICAgICAgIDxDb2wgY2xhc3NOYW1lPVwidi1tb2RhbC1ib2R5XCIgc2l6ZT17c2l6ZX0gYXV0byByb2xlPVwiZGlhbG9nXCI+XG4gICAgICAgICAgICAgIDxCb3ggY29sb3I9e2NvbG9yfT5cbiAgICAgICAgICAgICAgICB7dGl0bGUgPyB0aXRsZSA6IG51bGx9XG4gICAgICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICAgICAgICAgIHtmb290ZXIgPyBmb290ZXIgOiBudWxsfVxuICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAge3RoaXMucHJvcHMuZXh0ZXJuYWx9XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInYtbW9kYWwtc2hhZG93XCIgb25DbGljaz17dGhpcy5vbkNsaWNrT3ZlcmxheX0gLz5cbiAgICAgICAgICA8L1dyYXBwZXI+XG4gICAgICAgIDwvQ1NTVHJhbnNpdGlvbj5cbiAgICAgICksIHRoaXMuZWxlbWVudCk7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZ2V0Q2hpbGRNYXBwaW5nID0gZ2V0Q2hpbGRNYXBwaW5nO1xuZXhwb3J0cy5tZXJnZUNoaWxkTWFwcGluZ3MgPSBtZXJnZUNoaWxkTWFwcGluZ3M7XG5leHBvcnRzLmdldEluaXRpYWxDaGlsZE1hcHBpbmcgPSBnZXRJbml0aWFsQ2hpbGRNYXBwaW5nO1xuZXhwb3J0cy5nZXROZXh0Q2hpbGRNYXBwaW5nID0gZ2V0TmV4dENoaWxkTWFwcGluZztcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcblxuLyoqXG4gKiBHaXZlbiBgdGhpcy5wcm9wcy5jaGlsZHJlbmAsIHJldHVybiBhbiBvYmplY3QgbWFwcGluZyBrZXkgdG8gY2hpbGQuXG4gKlxuICogQHBhcmFtIHsqfSBjaGlsZHJlbiBgdGhpcy5wcm9wcy5jaGlsZHJlbmBcbiAqIEByZXR1cm4ge29iamVjdH0gTWFwcGluZyBvZiBrZXkgdG8gY2hpbGRcbiAqL1xuZnVuY3Rpb24gZ2V0Q2hpbGRNYXBwaW5nKGNoaWxkcmVuLCBtYXBGbikge1xuICB2YXIgbWFwcGVyID0gZnVuY3Rpb24gbWFwcGVyKGNoaWxkKSB7XG4gICAgcmV0dXJuIG1hcEZuICYmICgwLCBfcmVhY3QuaXNWYWxpZEVsZW1lbnQpKGNoaWxkKSA/IG1hcEZuKGNoaWxkKSA6IGNoaWxkO1xuICB9O1xuXG4gIHZhciByZXN1bHQgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICBpZiAoY2hpbGRyZW4pIF9yZWFjdC5DaGlsZHJlbi5tYXAoY2hpbGRyZW4sIGZ1bmN0aW9uIChjKSB7XG4gICAgcmV0dXJuIGM7XG4gIH0pLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgLy8gcnVuIHRoZSBtYXAgZnVuY3Rpb24gaGVyZSBpbnN0ZWFkIHNvIHRoYXQgdGhlIGtleSBpcyB0aGUgY29tcHV0ZWQgb25lXG4gICAgcmVzdWx0W2NoaWxkLmtleV0gPSBtYXBwZXIoY2hpbGQpO1xuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cbi8qKlxuICogV2hlbiB5b3UncmUgYWRkaW5nIG9yIHJlbW92aW5nIGNoaWxkcmVuIHNvbWUgbWF5IGJlIGFkZGVkIG9yIHJlbW92ZWQgaW4gdGhlXG4gKiBzYW1lIHJlbmRlciBwYXNzLiBXZSB3YW50IHRvIHNob3cgKmJvdGgqIHNpbmNlIHdlIHdhbnQgdG8gc2ltdWx0YW5lb3VzbHlcbiAqIGFuaW1hdGUgZWxlbWVudHMgaW4gYW5kIG91dC4gVGhpcyBmdW5jdGlvbiB0YWtlcyBhIHByZXZpb3VzIHNldCBvZiBrZXlzXG4gKiBhbmQgYSBuZXcgc2V0IG9mIGtleXMgYW5kIG1lcmdlcyB0aGVtIHdpdGggaXRzIGJlc3QgZ3Vlc3Mgb2YgdGhlIGNvcnJlY3RcbiAqIG9yZGVyaW5nLiBJbiB0aGUgZnV0dXJlIHdlIG1heSBleHBvc2Ugc29tZSBvZiB0aGUgdXRpbGl0aWVzIGluXG4gKiBSZWFjdE11bHRpQ2hpbGQgdG8gbWFrZSB0aGlzIGVhc3ksIGJ1dCBmb3Igbm93IFJlYWN0IGl0c2VsZiBkb2VzIG5vdFxuICogZGlyZWN0bHkgaGF2ZSB0aGlzIGNvbmNlcHQgb2YgdGhlIHVuaW9uIG9mIHByZXZDaGlsZHJlbiBhbmQgbmV4dENoaWxkcmVuXG4gKiBzbyB3ZSBpbXBsZW1lbnQgaXQgaGVyZS5cbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gcHJldiBwcmV2IGNoaWxkcmVuIGFzIHJldHVybmVkIGZyb21cbiAqIGBSZWFjdFRyYW5zaXRpb25DaGlsZE1hcHBpbmcuZ2V0Q2hpbGRNYXBwaW5nKClgLlxuICogQHBhcmFtIHtvYmplY3R9IG5leHQgbmV4dCBjaGlsZHJlbiBhcyByZXR1cm5lZCBmcm9tXG4gKiBgUmVhY3RUcmFuc2l0aW9uQ2hpbGRNYXBwaW5nLmdldENoaWxkTWFwcGluZygpYC5cbiAqIEByZXR1cm4ge29iamVjdH0gYSBrZXkgc2V0IHRoYXQgY29udGFpbnMgYWxsIGtleXMgaW4gYHByZXZgIGFuZCBhbGwga2V5c1xuICogaW4gYG5leHRgIGluIGEgcmVhc29uYWJsZSBvcmRlci5cbiAqL1xuXG5cbmZ1bmN0aW9uIG1lcmdlQ2hpbGRNYXBwaW5ncyhwcmV2LCBuZXh0KSB7XG4gIHByZXYgPSBwcmV2IHx8IHt9O1xuICBuZXh0ID0gbmV4dCB8fCB7fTtcblxuICBmdW5jdGlvbiBnZXRWYWx1ZUZvcktleShrZXkpIHtcbiAgICByZXR1cm4ga2V5IGluIG5leHQgPyBuZXh0W2tleV0gOiBwcmV2W2tleV07XG4gIH0gLy8gRm9yIGVhY2gga2V5IG9mIGBuZXh0YCwgdGhlIGxpc3Qgb2Yga2V5cyB0byBpbnNlcnQgYmVmb3JlIHRoYXQga2V5IGluXG4gIC8vIHRoZSBjb21iaW5lZCBsaXN0XG5cblxuICB2YXIgbmV4dEtleXNQZW5kaW5nID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgdmFyIHBlbmRpbmdLZXlzID0gW107XG5cbiAgZm9yICh2YXIgcHJldktleSBpbiBwcmV2KSB7XG4gICAgaWYgKHByZXZLZXkgaW4gbmV4dCkge1xuICAgICAgaWYgKHBlbmRpbmdLZXlzLmxlbmd0aCkge1xuICAgICAgICBuZXh0S2V5c1BlbmRpbmdbcHJldktleV0gPSBwZW5kaW5nS2V5cztcbiAgICAgICAgcGVuZGluZ0tleXMgPSBbXTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcGVuZGluZ0tleXMucHVzaChwcmV2S2V5KTtcbiAgICB9XG4gIH1cblxuICB2YXIgaTtcbiAgdmFyIGNoaWxkTWFwcGluZyA9IHt9O1xuXG4gIGZvciAodmFyIG5leHRLZXkgaW4gbmV4dCkge1xuICAgIGlmIChuZXh0S2V5c1BlbmRpbmdbbmV4dEtleV0pIHtcbiAgICAgIGZvciAoaSA9IDA7IGkgPCBuZXh0S2V5c1BlbmRpbmdbbmV4dEtleV0ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIHBlbmRpbmdOZXh0S2V5ID0gbmV4dEtleXNQZW5kaW5nW25leHRLZXldW2ldO1xuICAgICAgICBjaGlsZE1hcHBpbmdbbmV4dEtleXNQZW5kaW5nW25leHRLZXldW2ldXSA9IGdldFZhbHVlRm9yS2V5KHBlbmRpbmdOZXh0S2V5KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjaGlsZE1hcHBpbmdbbmV4dEtleV0gPSBnZXRWYWx1ZUZvcktleShuZXh0S2V5KTtcbiAgfSAvLyBGaW5hbGx5LCBhZGQgdGhlIGtleXMgd2hpY2ggZGlkbid0IGFwcGVhciBiZWZvcmUgYW55IGtleSBpbiBgbmV4dGBcblxuXG4gIGZvciAoaSA9IDA7IGkgPCBwZW5kaW5nS2V5cy5sZW5ndGg7IGkrKykge1xuICAgIGNoaWxkTWFwcGluZ1twZW5kaW5nS2V5c1tpXV0gPSBnZXRWYWx1ZUZvcktleShwZW5kaW5nS2V5c1tpXSk7XG4gIH1cblxuICByZXR1cm4gY2hpbGRNYXBwaW5nO1xufVxuXG5mdW5jdGlvbiBnZXRQcm9wKGNoaWxkLCBwcm9wLCBwcm9wcykge1xuICByZXR1cm4gcHJvcHNbcHJvcF0gIT0gbnVsbCA/IHByb3BzW3Byb3BdIDogY2hpbGQucHJvcHNbcHJvcF07XG59XG5cbmZ1bmN0aW9uIGdldEluaXRpYWxDaGlsZE1hcHBpbmcocHJvcHMsIG9uRXhpdGVkKSB7XG4gIHJldHVybiBnZXRDaGlsZE1hcHBpbmcocHJvcHMuY2hpbGRyZW4sIGZ1bmN0aW9uIChjaGlsZCkge1xuICAgIHJldHVybiAoMCwgX3JlYWN0LmNsb25lRWxlbWVudCkoY2hpbGQsIHtcbiAgICAgIG9uRXhpdGVkOiBvbkV4aXRlZC5iaW5kKG51bGwsIGNoaWxkKSxcbiAgICAgIGluOiB0cnVlLFxuICAgICAgYXBwZWFyOiBnZXRQcm9wKGNoaWxkLCAnYXBwZWFyJywgcHJvcHMpLFxuICAgICAgZW50ZXI6IGdldFByb3AoY2hpbGQsICdlbnRlcicsIHByb3BzKSxcbiAgICAgIGV4aXQ6IGdldFByb3AoY2hpbGQsICdleGl0JywgcHJvcHMpXG4gICAgfSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBnZXROZXh0Q2hpbGRNYXBwaW5nKG5leHRQcm9wcywgcHJldkNoaWxkTWFwcGluZywgb25FeGl0ZWQpIHtcbiAgdmFyIG5leHRDaGlsZE1hcHBpbmcgPSBnZXRDaGlsZE1hcHBpbmcobmV4dFByb3BzLmNoaWxkcmVuKTtcbiAgdmFyIGNoaWxkcmVuID0gbWVyZ2VDaGlsZE1hcHBpbmdzKHByZXZDaGlsZE1hcHBpbmcsIG5leHRDaGlsZE1hcHBpbmcpO1xuICBPYmplY3Qua2V5cyhjaGlsZHJlbikuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgdmFyIGNoaWxkID0gY2hpbGRyZW5ba2V5XTtcbiAgICBpZiAoISgwLCBfcmVhY3QuaXNWYWxpZEVsZW1lbnQpKGNoaWxkKSkgcmV0dXJuO1xuICAgIHZhciBoYXNQcmV2ID0ga2V5IGluIHByZXZDaGlsZE1hcHBpbmc7XG4gICAgdmFyIGhhc05leHQgPSBrZXkgaW4gbmV4dENoaWxkTWFwcGluZztcbiAgICB2YXIgcHJldkNoaWxkID0gcHJldkNoaWxkTWFwcGluZ1trZXldO1xuICAgIHZhciBpc0xlYXZpbmcgPSAoMCwgX3JlYWN0LmlzVmFsaWRFbGVtZW50KShwcmV2Q2hpbGQpICYmICFwcmV2Q2hpbGQucHJvcHMuaW47IC8vIGl0ZW0gaXMgbmV3IChlbnRlcmluZylcblxuICAgIGlmIChoYXNOZXh0ICYmICghaGFzUHJldiB8fCBpc0xlYXZpbmcpKSB7XG4gICAgICAvLyBjb25zb2xlLmxvZygnZW50ZXJpbmcnLCBrZXkpXG4gICAgICBjaGlsZHJlbltrZXldID0gKDAsIF9yZWFjdC5jbG9uZUVsZW1lbnQpKGNoaWxkLCB7XG4gICAgICAgIG9uRXhpdGVkOiBvbkV4aXRlZC5iaW5kKG51bGwsIGNoaWxkKSxcbiAgICAgICAgaW46IHRydWUsXG4gICAgICAgIGV4aXQ6IGdldFByb3AoY2hpbGQsICdleGl0JywgbmV4dFByb3BzKSxcbiAgICAgICAgZW50ZXI6IGdldFByb3AoY2hpbGQsICdlbnRlcicsIG5leHRQcm9wcylcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAoIWhhc05leHQgJiYgaGFzUHJldiAmJiAhaXNMZWF2aW5nKSB7XG4gICAgICAvLyBpdGVtIGlzIG9sZCAoZXhpdGluZylcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdsZWF2aW5nJywga2V5KVxuICAgICAgY2hpbGRyZW5ba2V5XSA9ICgwLCBfcmVhY3QuY2xvbmVFbGVtZW50KShjaGlsZCwge1xuICAgICAgICBpbjogZmFsc2VcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAoaGFzTmV4dCAmJiBoYXNQcmV2ICYmICgwLCBfcmVhY3QuaXNWYWxpZEVsZW1lbnQpKHByZXZDaGlsZCkpIHtcbiAgICAgIC8vIGl0ZW0gaGFzbid0IGNoYW5nZWQgdHJhbnNpdGlvbiBzdGF0ZXNcbiAgICAgIC8vIGNvcHkgb3ZlciB0aGUgbGFzdCB0cmFuc2l0aW9uIHByb3BzO1xuICAgICAgLy8gY29uc29sZS5sb2coJ3VuY2hhbmdlZCcsIGtleSlcbiAgICAgIGNoaWxkcmVuW2tleV0gPSAoMCwgX3JlYWN0LmNsb25lRWxlbWVudCkoY2hpbGQsIHtcbiAgICAgICAgb25FeGl0ZWQ6IG9uRXhpdGVkLmJpbmQobnVsbCwgY2hpbGQpLFxuICAgICAgICBpbjogcHJldkNoaWxkLnByb3BzLmluLFxuICAgICAgICBleGl0OiBnZXRQcm9wKGNoaWxkLCAnZXhpdCcsIG5leHRQcm9wcyksXG4gICAgICAgIGVudGVyOiBnZXRQcm9wKGNoaWxkLCAnZW50ZXInLCBuZXh0UHJvcHMpXG4gICAgICB9KTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gY2hpbGRyZW47XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBfcHJvcFR5cGVzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicHJvcC10eXBlc1wiKSk7XG5cbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbnZhciBfcmVhY3RMaWZlY3ljbGVzQ29tcGF0ID0gcmVxdWlyZShcInJlYWN0LWxpZmVjeWNsZXMtY29tcGF0XCIpO1xuXG52YXIgX0NoaWxkTWFwcGluZyA9IHJlcXVpcmUoXCIuL3V0aWxzL0NoaWxkTWFwcGluZ1wiKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCkgeyBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTsgdmFyIHRhcmdldCA9IHt9OyB2YXIgc291cmNlS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7IHZhciBrZXksIGk7IGZvciAoaSA9IDA7IGkgPCBzb3VyY2VLZXlzLmxlbmd0aDsgaSsrKSB7IGtleSA9IHNvdXJjZUtleXNbaV07IGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBfZXh0ZW5kcygpIHsgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9OyByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHNMb29zZShzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MucHJvdG90eXBlKTsgc3ViQ2xhc3MucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gc3ViQ2xhc3M7IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7IGlmIChzZWxmID09PSB2b2lkIDApIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBzZWxmOyB9XG5cbnZhciB2YWx1ZXMgPSBPYmplY3QudmFsdWVzIHx8IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIE9iamVjdC5rZXlzKG9iaikubWFwKGZ1bmN0aW9uIChrKSB7XG4gICAgcmV0dXJuIG9ialtrXTtcbiAgfSk7XG59O1xuXG52YXIgZGVmYXVsdFByb3BzID0ge1xuICBjb21wb25lbnQ6ICdkaXYnLFxuICBjaGlsZEZhY3Rvcnk6IGZ1bmN0aW9uIGNoaWxkRmFjdG9yeShjaGlsZCkge1xuICAgIHJldHVybiBjaGlsZDtcbiAgfVxuICAvKipcbiAgICogVGhlIGA8VHJhbnNpdGlvbkdyb3VwPmAgY29tcG9uZW50IG1hbmFnZXMgYSBzZXQgb2YgdHJhbnNpdGlvbiBjb21wb25lbnRzXG4gICAqIChgPFRyYW5zaXRpb24+YCBhbmQgYDxDU1NUcmFuc2l0aW9uPmApIGluIGEgbGlzdC4gTGlrZSB3aXRoIHRoZSB0cmFuc2l0aW9uXG4gICAqIGNvbXBvbmVudHMsIGA8VHJhbnNpdGlvbkdyb3VwPmAgaXMgYSBzdGF0ZSBtYWNoaW5lIGZvciBtYW5hZ2luZyB0aGUgbW91bnRpbmdcbiAgICogYW5kIHVubW91bnRpbmcgb2YgY29tcG9uZW50cyBvdmVyIHRpbWUuXG4gICAqXG4gICAqIENvbnNpZGVyIHRoZSBleGFtcGxlIGJlbG93LiBBcyBpdGVtcyBhcmUgcmVtb3ZlZCBvciBhZGRlZCB0byB0aGUgVG9kb0xpc3QgdGhlXG4gICAqIGBpbmAgcHJvcCBpcyB0b2dnbGVkIGF1dG9tYXRpY2FsbHkgYnkgdGhlIGA8VHJhbnNpdGlvbkdyb3VwPmAuXG4gICAqXG4gICAqIE5vdGUgdGhhdCBgPFRyYW5zaXRpb25Hcm91cD5gICBkb2VzIG5vdCBkZWZpbmUgYW55IGFuaW1hdGlvbiBiZWhhdmlvciFcbiAgICogRXhhY3RseSBfaG93XyBhIGxpc3QgaXRlbSBhbmltYXRlcyBpcyB1cCB0byB0aGUgaW5kaXZpZHVhbCB0cmFuc2l0aW9uXG4gICAqIGNvbXBvbmVudC4gVGhpcyBtZWFucyB5b3UgY2FuIG1peCBhbmQgbWF0Y2ggYW5pbWF0aW9ucyBhY3Jvc3MgZGlmZmVyZW50IGxpc3RcbiAgICogaXRlbXMuXG4gICAqL1xuXG59O1xuXG52YXIgVHJhbnNpdGlvbkdyb3VwID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0c0xvb3NlKFRyYW5zaXRpb25Hcm91cCwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gVHJhbnNpdGlvbkdyb3VwKHByb3BzLCBjb250ZXh0KSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX3RoaXMgPSBfUmVhY3QkQ29tcG9uZW50LmNhbGwodGhpcywgcHJvcHMsIGNvbnRleHQpIHx8IHRoaXM7XG5cbiAgICB2YXIgaGFuZGxlRXhpdGVkID0gX3RoaXMuaGFuZGxlRXhpdGVkLmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSkpOyAvLyBJbml0aWFsIGNoaWxkcmVuIHNob3VsZCBhbGwgYmUgZW50ZXJpbmcsIGRlcGVuZGVudCBvbiBhcHBlYXJcblxuXG4gICAgX3RoaXMuc3RhdGUgPSB7XG4gICAgICBoYW5kbGVFeGl0ZWQ6IGhhbmRsZUV4aXRlZCxcbiAgICAgIGZpcnN0UmVuZGVyOiB0cnVlXG4gICAgfTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gVHJhbnNpdGlvbkdyb3VwLnByb3RvdHlwZTtcblxuICBfcHJvdG8uZ2V0Q2hpbGRDb250ZXh0ID0gZnVuY3Rpb24gZ2V0Q2hpbGRDb250ZXh0KCkge1xuICAgIHJldHVybiB7XG4gICAgICB0cmFuc2l0aW9uR3JvdXA6IHtcbiAgICAgICAgaXNNb3VudGluZzogIXRoaXMuYXBwZWFyZWRcbiAgICAgIH1cbiAgICB9O1xuICB9O1xuXG4gIF9wcm90by5jb21wb25lbnREaWRNb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMuYXBwZWFyZWQgPSB0cnVlO1xuICAgIHRoaXMubW91bnRlZCA9IHRydWU7XG4gIH07XG5cbiAgX3Byb3RvLmNvbXBvbmVudFdpbGxVbm1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5tb3VudGVkID0gZmFsc2U7XG4gIH07XG5cbiAgVHJhbnNpdGlvbkdyb3VwLmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyA9IGZ1bmN0aW9uIGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyhuZXh0UHJvcHMsIF9yZWYpIHtcbiAgICB2YXIgcHJldkNoaWxkTWFwcGluZyA9IF9yZWYuY2hpbGRyZW4sXG4gICAgICAgIGhhbmRsZUV4aXRlZCA9IF9yZWYuaGFuZGxlRXhpdGVkLFxuICAgICAgICBmaXJzdFJlbmRlciA9IF9yZWYuZmlyc3RSZW5kZXI7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNoaWxkcmVuOiBmaXJzdFJlbmRlciA/ICgwLCBfQ2hpbGRNYXBwaW5nLmdldEluaXRpYWxDaGlsZE1hcHBpbmcpKG5leHRQcm9wcywgaGFuZGxlRXhpdGVkKSA6ICgwLCBfQ2hpbGRNYXBwaW5nLmdldE5leHRDaGlsZE1hcHBpbmcpKG5leHRQcm9wcywgcHJldkNoaWxkTWFwcGluZywgaGFuZGxlRXhpdGVkKSxcbiAgICAgIGZpcnN0UmVuZGVyOiBmYWxzZVxuICAgIH07XG4gIH07XG5cbiAgX3Byb3RvLmhhbmRsZUV4aXRlZCA9IGZ1bmN0aW9uIGhhbmRsZUV4aXRlZChjaGlsZCwgbm9kZSkge1xuICAgIHZhciBjdXJyZW50Q2hpbGRNYXBwaW5nID0gKDAsIF9DaGlsZE1hcHBpbmcuZ2V0Q2hpbGRNYXBwaW5nKSh0aGlzLnByb3BzLmNoaWxkcmVuKTtcbiAgICBpZiAoY2hpbGQua2V5IGluIGN1cnJlbnRDaGlsZE1hcHBpbmcpIHJldHVybjtcblxuICAgIGlmIChjaGlsZC5wcm9wcy5vbkV4aXRlZCkge1xuICAgICAgY2hpbGQucHJvcHMub25FeGl0ZWQobm9kZSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMubW91bnRlZCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZShmdW5jdGlvbiAoc3RhdGUpIHtcbiAgICAgICAgdmFyIGNoaWxkcmVuID0gX2V4dGVuZHMoe30sIHN0YXRlLmNoaWxkcmVuKTtcblxuICAgICAgICBkZWxldGUgY2hpbGRyZW5bY2hpbGQua2V5XTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBjaGlsZHJlbjogY2hpbGRyZW5cbiAgICAgICAgfTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8ucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBfdGhpcyRwcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgIENvbXBvbmVudCA9IF90aGlzJHByb3BzLmNvbXBvbmVudCxcbiAgICAgICAgY2hpbGRGYWN0b3J5ID0gX3RoaXMkcHJvcHMuY2hpbGRGYWN0b3J5LFxuICAgICAgICBwcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKF90aGlzJHByb3BzLCBbXCJjb21wb25lbnRcIiwgXCJjaGlsZEZhY3RvcnlcIl0pO1xuXG4gICAgdmFyIGNoaWxkcmVuID0gdmFsdWVzKHRoaXMuc3RhdGUuY2hpbGRyZW4pLm1hcChjaGlsZEZhY3RvcnkpO1xuICAgIGRlbGV0ZSBwcm9wcy5hcHBlYXI7XG4gICAgZGVsZXRlIHByb3BzLmVudGVyO1xuICAgIGRlbGV0ZSBwcm9wcy5leGl0O1xuXG4gICAgaWYgKENvbXBvbmVudCA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIGNoaWxkcmVuO1xuICAgIH1cblxuICAgIHJldHVybiBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KENvbXBvbmVudCwgcHJvcHMsIGNoaWxkcmVuKTtcbiAgfTtcblxuICByZXR1cm4gVHJhbnNpdGlvbkdyb3VwO1xufShfcmVhY3QuZGVmYXVsdC5Db21wb25lbnQpO1xuXG5UcmFuc2l0aW9uR3JvdXAuY2hpbGRDb250ZXh0VHlwZXMgPSB7XG4gIHRyYW5zaXRpb25Hcm91cDogX3Byb3BUeXBlcy5kZWZhdWx0Lm9iamVjdC5pc1JlcXVpcmVkXG59O1xuVHJhbnNpdGlvbkdyb3VwLnByb3BUeXBlcyA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IHtcbiAgLyoqXG4gICAqIGA8VHJhbnNpdGlvbkdyb3VwPmAgcmVuZGVycyBhIGA8ZGl2PmAgYnkgZGVmYXVsdC4gWW91IGNhbiBjaGFuZ2UgdGhpc1xuICAgKiBiZWhhdmlvciBieSBwcm92aWRpbmcgYSBgY29tcG9uZW50YCBwcm9wLlxuICAgKiBJZiB5b3UgdXNlIFJlYWN0IHYxNisgYW5kIHdvdWxkIGxpa2UgdG8gYXZvaWQgYSB3cmFwcGluZyBgPGRpdj5gIGVsZW1lbnRcbiAgICogeW91IGNhbiBwYXNzIGluIGBjb21wb25lbnQ9e251bGx9YC4gVGhpcyBpcyB1c2VmdWwgaWYgdGhlIHdyYXBwaW5nIGRpdlxuICAgKiBib3JrcyB5b3VyIGNzcyBzdHlsZXMuXG4gICAqL1xuICBjb21wb25lbnQ6IF9wcm9wVHlwZXMuZGVmYXVsdC5hbnksXG5cbiAgLyoqXG4gICAqIEEgc2V0IG9mIGA8VHJhbnNpdGlvbj5gIGNvbXBvbmVudHMsIHRoYXQgYXJlIHRvZ2dsZWQgYGluYCBhbmQgb3V0IGFzIHRoZXlcbiAgICogbGVhdmUuIHRoZSBgPFRyYW5zaXRpb25Hcm91cD5gIHdpbGwgaW5qZWN0IHNwZWNpZmljIHRyYW5zaXRpb24gcHJvcHMsIHNvXG4gICAqIHJlbWVtYmVyIHRvIHNwcmVhZCB0aGVtIHRocm91Z2ggaWYgeW91IGFyZSB3cmFwcGluZyB0aGUgYDxUcmFuc2l0aW9uPmAgYXNcbiAgICogd2l0aCBvdXIgYDxGYWRlPmAgZXhhbXBsZS5cbiAgICovXG4gIGNoaWxkcmVuOiBfcHJvcFR5cGVzLmRlZmF1bHQubm9kZSxcblxuICAvKipcbiAgICogQSBjb252ZW5pZW5jZSBwcm9wIHRoYXQgZW5hYmxlcyBvciBkaXNhYmxlcyBhcHBlYXIgYW5pbWF0aW9uc1xuICAgKiBmb3IgYWxsIGNoaWxkcmVuLiBOb3RlIHRoYXQgc3BlY2lmeWluZyB0aGlzIHdpbGwgb3ZlcnJpZGUgYW55IGRlZmF1bHRzIHNldFxuICAgKiBvbiBpbmRpdmlkdWFsIGNoaWxkcmVuIFRyYW5zaXRpb25zLlxuICAgKi9cbiAgYXBwZWFyOiBfcHJvcFR5cGVzLmRlZmF1bHQuYm9vbCxcblxuICAvKipcbiAgICogQSBjb252ZW5pZW5jZSBwcm9wIHRoYXQgZW5hYmxlcyBvciBkaXNhYmxlcyBlbnRlciBhbmltYXRpb25zXG4gICAqIGZvciBhbGwgY2hpbGRyZW4uIE5vdGUgdGhhdCBzcGVjaWZ5aW5nIHRoaXMgd2lsbCBvdmVycmlkZSBhbnkgZGVmYXVsdHMgc2V0XG4gICAqIG9uIGluZGl2aWR1YWwgY2hpbGRyZW4gVHJhbnNpdGlvbnMuXG4gICAqL1xuICBlbnRlcjogX3Byb3BUeXBlcy5kZWZhdWx0LmJvb2wsXG5cbiAgLyoqXG4gICAqIEEgY29udmVuaWVuY2UgcHJvcCB0aGF0IGVuYWJsZXMgb3IgZGlzYWJsZXMgZXhpdCBhbmltYXRpb25zXG4gICAqIGZvciBhbGwgY2hpbGRyZW4uIE5vdGUgdGhhdCBzcGVjaWZ5aW5nIHRoaXMgd2lsbCBvdmVycmlkZSBhbnkgZGVmYXVsdHMgc2V0XG4gICAqIG9uIGluZGl2aWR1YWwgY2hpbGRyZW4gVHJhbnNpdGlvbnMuXG4gICAqL1xuICBleGl0OiBfcHJvcFR5cGVzLmRlZmF1bHQuYm9vbCxcblxuICAvKipcbiAgICogWW91IG1heSBuZWVkIHRvIGFwcGx5IHJlYWN0aXZlIHVwZGF0ZXMgdG8gYSBjaGlsZCBhcyBpdCBpcyBleGl0aW5nLlxuICAgKiBUaGlzIGlzIGdlbmVyYWxseSBkb25lIGJ5IHVzaW5nIGBjbG9uZUVsZW1lbnRgIGhvd2V2ZXIgaW4gdGhlIGNhc2Ugb2YgYW4gZXhpdGluZ1xuICAgKiBjaGlsZCB0aGUgZWxlbWVudCBoYXMgYWxyZWFkeSBiZWVuIHJlbW92ZWQgYW5kIG5vdCBhY2Nlc3NpYmxlIHRvIHRoZSBjb25zdW1lci5cbiAgICpcbiAgICogSWYgeW91IGRvIG5lZWQgdG8gdXBkYXRlIGEgY2hpbGQgYXMgaXQgbGVhdmVzIHlvdSBjYW4gcHJvdmlkZSBhIGBjaGlsZEZhY3RvcnlgXG4gICAqIHRvIHdyYXAgZXZlcnkgY2hpbGQsIGV2ZW4gdGhlIG9uZXMgdGhhdCBhcmUgbGVhdmluZy5cbiAgICpcbiAgICogQHR5cGUgRnVuY3Rpb24oY2hpbGQ6IFJlYWN0RWxlbWVudCkgLT4gUmVhY3RFbGVtZW50XG4gICAqL1xuICBjaGlsZEZhY3Rvcnk6IF9wcm9wVHlwZXMuZGVmYXVsdC5mdW5jXG59IDoge307XG5UcmFuc2l0aW9uR3JvdXAuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzO1xuXG52YXIgX2RlZmF1bHQgPSAoMCwgX3JlYWN0TGlmZWN5Y2xlc0NvbXBhdC5wb2x5ZmlsbCkoVHJhbnNpdGlvbkdyb3VwKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdOyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjcmVhdGVQb3J0YWwgfSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IENTU1RyYW5zaXRpb24gZnJvbSAncmVhY3QtdHJhbnNpdGlvbi1ncm91cC9DU1NUcmFuc2l0aW9uJztcbmltcG9ydCBUcmFuc2l0aW9uR3JvdXAgZnJvbSAncmVhY3QtdHJhbnNpdGlvbi1ncm91cC9UcmFuc2l0aW9uR3JvdXAnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmltcG9ydCBCb3ggZnJvbSAnLi4vQm94JztcbmltcG9ydCB7IENvbG9yVHlwZSB9IGZyb20gJy4uLy4uL3R5cGVzJztcblxudHlwZSBQb3NpdGlvblR5cGUgPSAndG9wJyB8ICd0b3AtbGVmdCcgfCAndG9wLXJpZ2h0JyB8ICdib3R0b20nIHwgJ2JvdHRvbS1sZWZ0JyB8ICdib3R0b20tcmlnaHQnO1xuXG5pbnRlcmZhY2UgVG9hc3RUeXBlIHtcbiAgLyoqIOiqjeitmElEICovXG4gIGlkOiBzdHJpbmc7XG4gIC8qKiDooajnpLrjgZnjgovlhoXlrrkgKi9cbiAgbWVzc2FnZT86IFJlYWN0LlJlYWN0Tm9kZTtcbiAgLyoqIOiDjOaZr+OBruiJsiAqL1xuICBjb2xvcj86IENvbG9yVHlwZTtcbiAgLyoqIOihqOekuuOBleOCjOOCi+aZgumWkyBudWxs44Gu5aC05ZCI44Gv6Ieq5YuV44Gn6ZaJ44GY44KJ44KM44G+44Gb44KTICovXG4gIGR1cmF0aW9uPzogbnVtYmVyIHwgbnVsbDtcbn1cblxuaW50ZXJmYWNlIFRvYXN0UHJvcHMgZXh0ZW5kcyBUb2FzdFR5cGUge1xuICBjbGVhcjogKCkgPT4gdm9pZDtcbn1cblxuY29uc3QgV3JhcHBlciA9IHN0eWxlZChCb3gpYFxuICBwYWRkaW5nOiAwLjM3NWVtIDAuNzVlbTtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICB6LWluZGV4OiA5OTk5O1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG5cbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtLCBvcGFjaXR5O1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAyNTBtcztcblxuICAmLm1vdmUtZW50ZXIge1xuICAgIG9wYWNpdHk6IDAuMDE7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjgpO1xuICB9XG4gICYubW92ZS1lbnRlci1hY3RpdmUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgfVxuICAmLm1vdmUtZXhpdCB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB9XG4gICYubW92ZS1leGl0LWFjdGl2ZSB7XG4gICAgb3BhY2l0eTogMC4wMTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOCk7XG4gIH1cbmA7XG5cbmV4cG9ydCBjbGFzcyBUb2FzdEl0ZW0gZXh0ZW5kcyBQdXJlQ29tcG9uZW50PFRvYXN0UHJvcHM+IHtcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBkdXJhdGlvbjogNTAwMCxcbiAgfTtcblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5kdXJhdGlvbiAhPT0gbnVsbCkge1xuICAgICAgc2V0VGltZW91dCh0aGlzLnByb3BzLmNsZWFyLCB0aGlzLnByb3BzLmR1cmF0aW9uKTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBtZXNzYWdlLCBjb2xvciB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPFdyYXBwZXIgYm9yZGVybGVzcyBjb2xvcj17Y29sb3J9PlxuICAgICAgICB7bWVzc2FnZX1cbiAgICAgIDwvV3JhcHBlcj5cbiAgICApO1xuICB9XG59XG5cbmZ1bmN0aW9uIHNldFBvc2l0aW9uKHBvc2l0aW9uOiBzdHJpbmcsIGlzRml4ZWQ/OiBib29sZWFuKSB7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICBjb25zdCBiYXNlID0gYHBvc2l0aW9uOiAke2lzRml4ZWQgPyAnZml4ZWQnIDogJ2Fic29sdXRlJ307IHotaW5kZXg6IDk5OTk7IGRpc3BsYXk6IGZsZXg7IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IGA7XG4gIHN3aXRjaCAocG9zaXRpb24pIHtcbiAgICBjYXNlICdib3R0b20nOiB7XG4gICAgICByZXR1cm4gYCR7YmFzZX0gYm90dG9tOiAxcmVtOyBsZWZ0OiA1MCU7IGFsaWduLWl0ZW06IGNlbnRlcjsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO2A7XG4gICAgfVxuICAgIGNhc2UgJ2JvdHRvbS1sZWZ0Jzoge1xuICAgICAgcmV0dXJuIGAke2Jhc2V9IGJvdHRvbTogMXJlbTsgbGVmdDogMXJlbTsgYWxpZ24taXRlbTogZmxleC1zdGFydDtgO1xuICAgIH1cbiAgICBjYXNlICdib3R0b20tcmlnaHQnOiB7XG4gICAgICByZXR1cm4gYCR7YmFzZX0gYm90dG9tOiAxcmVtOyByaWdodDogMXJlbTsgYWxpZ24taXRlbTogZmxleC1lbmQ7YDtcbiAgICB9XG4gICAgY2FzZSAndG9wJzoge1xuICAgICAgcmV0dXJuIGAke2Jhc2V9IHRvcDogMXJlbTsgbGVmdDogNTAlOyBhbGlnbi1pdGVtOiBjZW50ZXI7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtgO1xuICAgIH1cbiAgICBjYXNlICd0b3AtbGVmdCc6IHtcbiAgICAgIHJldHVybiBgJHtiYXNlfSB0b3A6IDFyZW07IGxlZnQ6IDFyZW07IGFsaWduLWl0ZW06IGZsZXgtc3RhcnQ7YDtcbiAgICB9XG4gICAgY2FzZSAndG9wLXJpZ2h0JzpcbiAgICBkZWZhdWx0OiB7XG4gICAgICByZXR1cm4gYCR7YmFzZX0gdG9wOiAxcmVtOyByaWdodDogMXJlbTsgYWxpZ24taXRlbTogZmxleC1lbmQ7YDtcbiAgICB9XG4gIH1cbn1cblxuaW50ZXJmYWNlIENvbnRhaW5lclByb3BzIHtcbiAgLyoqIOihqOekuuOBmeOCi1RvYXN044Gu44Oq44K544OIICovXG4gIHRvYXN0czogVG9hc3RUeXBlW107XG4gIC8qKiB0b2FzdOOCkua2iOOBmeOCv+OCpOODn+ODs+OCsOOBruOCs+ODvOODq+ODkOODg+OCryAqL1xuICBjbGVhcjogKGlkOiBzdHJpbmcpID0+IHZvaWQ7XG4gIC8qKiB0b3AsIHRvcC1yaWdodCwgdG9wLWxlZnQsIGJvdHRvbSwgYm90dG9tLXJpZ2h0LCBib3R0b20tbGVmdCAqL1xuICBwb3NpdGlvbj86IFBvc2l0aW9uVHlwZTtcbiAgLyoqIOOCueOCr+ODreODvOODq+OBl+OBpuOCguWbuuWumuOBqOOBl+OBpuihqOekuuOBmeOCiyAqL1xuICBmaXhlZD86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvYXN0Q29udGFpbmVyIGV4dGVuZHMgQ29tcG9uZW50PENvbnRhaW5lclByb3BzPiB7XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgdG9hc3RzOiBbXSxcbiAgICBwb3NpdGlvbjogJ3RvcC1yaWdodCcsXG4gICAgZml4ZWQ6IGZhbHNlLFxuICB9O1xuXG4gIHNob3VsZENvbXBvbmVudFVwZGF0ZShwcm9wczogQ29udGFpbmVyUHJvcHMpIHtcbiAgICByZXR1cm4gcHJvcHMudG9hc3RzLmxlbmd0aCAhPT0gdGhpcy5wcm9wcy50b2FzdHMubGVuZ3RoIHx8XG4gICAgICBwcm9wcy5wb3NpdGlvbiAhPT0gdGhpcy5wcm9wcy5wb3NpdGlvbjtcbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcm9wczogQ29udGFpbmVyUHJvcHMpIHtcbiAgICBpZiAoXG4gICAgICB0aGlzLmVsZW1lbnQgJiZcbiAgICAgIChwcm9wcy5wb3NpdGlvbiAhPT0gdGhpcy5wcm9wcy5wb3NpdGlvbiB8fCBwcm9wcy5maXhlZCAhPT0gdGhpcy5wcm9wcy5maXhlZClcbiAgICApIHtcbiAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5jc3NUZXh0ID0gc2V0UG9zaXRpb24odGhpcy5wcm9wcy5wb3NpdGlvbiEsIHRoaXMucHJvcHMuZml4ZWQpO1xuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIGlmICh0aGlzLmVsZW1lbnQpIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQodGhpcy5lbGVtZW50KTtcbiAgfVxuXG4gIGNsZWFyID0gKGlkOiBzdHJpbmcpID0+ICgpID0+IHtcbiAgICB0aGlzLnByb3BzLmNsZWFyKGlkKTtcbiAgfVxuXG4gIHJlbmRlclRvYXN0ID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgdG9hc3RzIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8VHJhbnNpdGlvbkdyb3VwIGNvbXBvbmVudD17bnVsbH0+XG4gICAgICAgIHt0b2FzdHMubWFwKHByb3BzID0+IChcbiAgICAgICAgICA8Q1NTVHJhbnNpdGlvblxuICAgICAgICAgICAga2V5PXtwcm9wcy5pZH1cbiAgICAgICAgICAgIHRpbWVvdXQ9ezI1MH1cbiAgICAgICAgICAgIGNsYXNzTmFtZXM9XCJtb3ZlXCJcbiAgICAgICAgICAgIHVubW91bnRPbkV4aXRcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8VG9hc3RJdGVtXG4gICAgICAgICAgICAgIGtleT17cHJvcHMuaWR9XG4gICAgICAgICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgICAgICAgY2xlYXI9e3RoaXMuY2xlYXIocHJvcHMuaWQpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0NTU1RyYW5zaXRpb24+XG4gICAgICAgICkpfVxuICAgICAgPC9UcmFuc2l0aW9uR3JvdXA+XG4gICAgKTtcbiAgfVxuXG4gIGVsZW1lbnQ/OiBIVE1MRGl2RWxlbWVudDtcblxuICByZW5kZXIoKTogUmVhY3QuUmVhY3RQb3J0YWwgfCBudWxsIHtcbiAgICBpZiAodHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJyAmJiAhdGhpcy5lbGVtZW50KSB7XG4gICAgICB0aGlzLmVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5jc3NUZXh0ID0gc2V0UG9zaXRpb24odGhpcy5wcm9wcy5wb3NpdGlvbiEsIHRoaXMucHJvcHMuZml4ZWQpO1xuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLmVsZW1lbnQpO1xuICAgIH1cblxuXG4gICAgaWYgKHRoaXMuZWxlbWVudCkge1xuICAgICAgcmV0dXJuIGNyZWF0ZVBvcnRhbCh0aGlzLnJlbmRlclRvYXN0KCksIHRoaXMuZWxlbWVudCk7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIENoaWxkcmVuLCBDU1NQcm9wZXJ0aWVzIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgc2V0QWxpZ24gZnJvbSAnLi4vLi4vdXRpbHMvc2V0QWxpZ24nO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi9CdXR0b24nO1xuaW1wb3J0IHsgQ29sb3JUeXBlLCBUaGVtZVR5cGUsIEFsaWduVHlwZSB9IGZyb20gJy4uLy4uL3R5cGVzJztcblxuY29uc3QgV3JhcHBlciA9IHN0eWxlZC5uYXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogJHtzZXRBbGlnbn07XG5cbiAgLnRhYi1jb250ZW50IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICAkeyh7IGFsaWduIH0pID0+IGFsaWduID8gJycgOiAnZmxleC1ncm93OiAxOyd9XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICB9XG5gO1xuXG5pbnRlcmZhY2UgSXRlbVByb3BzIHtcbiAgYWxpZ24/OiBhbnk7XG4gIGFjdGl2ZTogYm9vbGVhbjtcbn1cblxuY29uc3QgVGFiSXRlbSA9IHN0eWxlZC5kaXY8SXRlbVByb3BzPmBcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZsZXgtZ3JvdzogMTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuXG4gIGEge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUudGV4dH07XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgIHBhZGRpbmc6IDAuMzc1ZW0gMC43NWVtO1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcblxuICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IGJhY2tncm91bmQtY29sb3I7XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMTUwbXM7XG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xuXG4gICAgJjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMDMpO1xuICAgIH1cbiAgfVxuYDtcblxuZnVuY3Rpb24gc2V0Q29sb3IoeyB0aGVtZSwgY29sb3IgfTogeyB0aGVtZTogVGhlbWVUeXBlLCBjb2xvcj86IENvbG9yVHlwZSB9KSB7XG4gIHJldHVybiAhY29sb3IgPyB0aGVtZS5iYWNrZ3JvdW5kIDogdGhlbWVbY29sb3JdO1xufVxuXG5pbnRlcmZhY2UgSW5kaWNhdG9yUHJvcHMge1xuICBjb2xvcj86IENvbG9yVHlwZTtcbiAgc3R5bGU/OiBDU1NQcm9wZXJ0aWVzO1xufVxuXG5jb25zdCBJbmRpY2F0b3IgPSBzdHlsZWQuZGl2PEluZGljYXRvclByb3BzPmBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICR7c2V0Q29sb3J9O1xuICBoZWlnaHQ6IDJweDtcblxuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQ7XG5cbiAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybTtcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAyMDBtcztcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKTtcbmA7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIC8qKiDoibLmjIflrpogKi9cbiAgY29sb3I/OiBDb2xvclR5cGU7XG4gIC8qKiBsZWZ0IHwgcmlnaHQgfCBjZW50ZXIgKi9cbiAgYWxpZ24/OiBBbGlnblR5cGU7XG4gIC8qKiDkuIDmsJfjgavooajnpLrjgZnjgovmnIDlpKfjga7mlbDjga7mjIflrpogKi9cbiAgbWF4SXRlbXM/OiBudW1iZXI7XG5cbiAgY2hpbGRyZW46IGFueTtcbn1cblxuaW50ZXJmYWNlIFN0YXRlIHtcbiAgc3RhcnQ6IG51bWJlcjtcbiAgY3VycmVudD86IG51bWJlcjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFicyBleHRlbmRzIENvbXBvbmVudDxQcm9wcz4ge1xuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIG1heEl0ZW1zOiA1LFxuICB9XG5cbiAgc3RhdGljIGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyhwcm9wczogUHJvcHMsIHN0YXRlOiBTdGF0ZSkge1xuICAgIGxldCBhY3RpdmVJbmRleDtcbiAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gcHJvcHMuY2hpbGRyZW4ubGVuZ3RoOyBpIDwgbGVuOyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IGNoaWxkID0gcHJvcHMuY2hpbGRyZW5baV07XG4gICAgICBpZiAoY2hpbGQucHJvcHMuYWN0aXZlKSB7XG4gICAgICAgIGFjdGl2ZUluZGV4ID0gaTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLnN0YXRlLFxuICAgICAgY3VycmVudDogYWN0aXZlSW5kZXgsXG4gICAgfTtcbiAgfVxuXG4gIHN0YXRpYyBJdGVtID0gVGFiSXRlbTtcblxuICBzdGF0ZSA9IHsgc3RhcnQ6IDAsIGN1cnJlbnQ6IG51bGwgfTtcblxuICBzaG91bGRDb21wb25lbnRVcGRhdGUocHJvcHM6IFByb3BzLCBzdGF0ZTogU3RhdGUpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZS5zdGFydCAhPT0gc3RhdGUuc3RhcnQgfHxcbiAgICAgIHRoaXMuc3RhdGUuY3VycmVudCAhPT0gc3RhdGUuY3VycmVudDtcbiAgfVxuXG4gIG9uTmV4dCA9ICgpID0+IHtcbiAgICBjb25zdCB0aHJlc2hvbGQgPSB0aGlzLnByb3BzLm1heEl0ZW1zITtcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuc3RhdGUuc3RhcnQgKyB0aHJlc2hvbGQ7XG4gICAgY29uc3QgY291bnQgPSBDaGlsZHJlbi5jb3VudCh0aGlzLnByb3BzLmNoaWxkcmVuKVxuICAgIGlmICh2YWx1ZSA8IGNvdW50KSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgc3RhcnQ6IHZhbHVlIH0pO1xuICAgIH1cbiAgfVxuXG4gIG9uUHJldiA9ICgpID0+IHtcbiAgICBpZiAodGhpcy5zdGF0ZS5zdGFydCA9PT0gMCkgcmV0dXJuO1xuXG4gICAgY29uc3QgdGhyZXNob2xkID0gdGhpcy5wcm9wcy5tYXhJdGVtcyE7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLnN0YXRlLnN0YXJ0IC0gdGhyZXNob2xkO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBzdGFydDogdmFsdWUgPCAwID8gMCA6IHZhbHVlIH0pO1xuICB9XG5cbiAgZ2V0SW5kaWNhdG9yUG9zaXRpb24gPSAoKTogQ1NTUHJvcGVydGllcyB8IHVuZGVmaW5lZCA9PiB7XG4gICAgY29uc3QgeyBjdXJyZW50IH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHsgY2hpbGRyZW4sIG1heEl0ZW1zIH0gPSB0aGlzLnByb3BzO1xuICAgIGlmIChjdXJyZW50ID09PSBudWxsIHx8IGN1cnJlbnQgPT09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICBpZiAoIWNoaWxkcmVuIHx8ICFjaGlsZHJlbi5sZW5ndGgpIHJldHVybiB1bmRlZmluZWQ7XG5cbiAgICBjb25zdCB0b3RhbCA9IGNoaWxkcmVuLmxlbmd0aCA+IG1heEl0ZW1zISA/IG1heEl0ZW1zIDogY2hpbGRyZW4ubGVuZ3RoO1xuICAgIGNvbnN0IHZhbHVlID0gKGN1cnJlbnQgKiAxMDApICsgJyUnO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHZpc2liaWxpdHk6ICd2aXNpYmxlJyxcbiAgICAgIHdpZHRoOiBgJHtNYXRoLnJvdW5kKCgxMDAgLyB0b3RhbCkpfSVgLFxuICAgICAgdHJhbnNmb3JtOiBgdHJhbnNsYXRlWCgke3ZhbHVlfSlgXG4gICAgfTtcbiAgfVxuXG4gIC8vIFRPRE86IG1ha2UgdGFiIHNjcm9sbGFibGUgdmlhIGFycm93IGljb25zXG4gIHJlbmRlckNoaWxkcmVuID0gKGNoaWxkOiBSZWFjdC5SZWFjdENoaWxkLCBpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgaWYgKHRoaXMuc3RhdGUuc3RhcnQgPiBpbmRleCkgcmV0dXJuIG51bGw7XG4gICAgaWYgKHRoaXMuc3RhdGUuc3RhcnQgKyBpbmRleCA+PSB0aGlzLnByb3BzLm1heEl0ZW1zISkgcmV0dXJuIG51bGw7XG4gICAgaWYgKHR5cGVvZiBjaGlsZCA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIGNoaWxkID09PSAnbnVtYmVyJykgcmV0dXJuIG51bGw7XG5cbiAgICByZXR1cm4gPFRhYkl0ZW0gey4uLmNoaWxkLnByb3BzfSBhbGlnbj17dGhpcy5wcm9wcy5hbGlnbn0gLz47XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjaGlsZHJlbiwgYWxpZ24sIGNvbG9yLCBtYXhJdGVtcyB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IHN0YXJ0IH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHRvdGFsID0gY2hpbGRyZW4gPyBjaGlsZHJlbi5sZW5ndGggOiAwO1xuICAgIGNvbnN0IHN0eWxlID0gdGhpcy5nZXRJbmRpY2F0b3JQb3NpdGlvbigpO1xuICAgIHJldHVybiAoXG4gICAgICA8V3JhcHBlciBhbGlnbj17YWxpZ259PlxuICAgICAgICB7c3RhcnQgPiBtYXhJdGVtcyEgJiYgKDxCdXR0b24gY29sb3I9XCJ0ZXh0XCI+eyc8J308L0J1dHRvbj4pfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYi1jb250ZW50XCI+XG4gICAgICAgICAge0NoaWxkcmVuLm1hcChjaGlsZHJlbiwgdGhpcy5yZW5kZXJDaGlsZHJlbil9XG4gICAgICAgICAgPEluZGljYXRvciBjb2xvcj17Y29sb3J9IHN0eWxlPXtzdHlsZX0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHt0b3RhbCA+IG1heEl0ZW1zISAmJiBzdGFydCA+IG1heEl0ZW1zISAmJiAoPEJ1dHRvbiBjb2xvcj1cInRleHRcIj57Jz4nfTwvQnV0dG9uPil9XG4gICAgICA8L1dyYXBwZXI+XG4gICAgKTtcbiAgfVxufTtcbiIsImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50LCBIVE1MQXR0cmlidXRlcyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IENTU1RyYW5zaXRpb24gZnJvbSAncmVhY3QtdHJhbnNpdGlvbi1ncm91cC9DU1NUcmFuc2l0aW9uJztcbmltcG9ydCB7IENvbG9yVHlwZSwgQ1NTVHlwZSB9IGZyb20gJy4uLy4uL3R5cGVzJztcblxuaW50ZXJmYWNlIExvYWRpbmdQcm9wcyBleHRlbmRzIEhUTUxBdHRyaWJ1dGVzPEhUTUxEaXZFbGVtZW50PiB7XG4gIC8qKiB0cnVl44Gu5aC05ZCI6ZaL5aeL44GX44G+44GZICovXG4gIGxvYWRpbmc6IGJvb2xlYW47XG4gIC8qKiDjg5Djg7zjga7oibLjga7mjIflrpogKi9cbiAgY29sb3I/OiBDb2xvclR5cGU7XG4gIC8qKiDjg5Djg7zjga5DU1MgcG9zaXRpb27jga7mjIflrpogKi9cbiAgcG9zaXRpb24/OiAnYWJzb2x1dGUnIHwgJ2ZpeGVkJyB8ICdzdGlja3knO1xuICAvKiog44OQ44O844Gu6IOM5pmv44Gu6Imy44Gu6Ieq55Sx5oyH5a6aICovXG4gIGJhY2tncm91bmQ/OiBzdHJpbmc7XG4gIC8qKiDjg5Djg7zjga7nuKbluYXjga7lrprnvqkgKi9cbiAgc2l6ZT86IHN0cmluZztcbiAgLyoqIOODkOODvOOBruOCouODi+ODoeODvOOCt+ODp+ODs+OBrmR1cmF0aW9u5oyH5a6aICjljZjkvY3vvJptcykgKi9cbiAgZHVyYXRpb24/OiBudW1iZXI7XG4gIGNzcz86IENTU1R5cGU7XG59XG5cbmNvbnN0IFdyYXBwZXIgPSBzdHlsZWQuZGl2PExvYWRpbmdQcm9wcz5gXG4gIHBvc2l0aW9uOiAkeyh7IHBvc2l0aW9uIH0pID0+IHBvc2l0aW9ufTtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHsoeyBiYWNrZ3JvdW5kIH0pID0+IGJhY2tncm91bmR9O1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuXG4gIC5sb2FkaW5nLWJhciB7XG4gICAgaGVpZ2h0OiAkeyh7IHNpemUgfSkgPT4gc2l6ZX07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHsoeyBjb2xvciwgdGhlbWUgfSkgPT4gdGhlbWVbY29sb3IhXX07XG5cbiAgICB3aWxsLWNoYW5nZTogd2lkdGgsIG9wYWNpdHk7XG4gICAgei1pbmRleDogMTAwMDAwMDtcblxuICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IHdpZHRoLCBvcGFjaXR5O1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246ICR7KHsgZHVyYXRpb24gfSkgPT4gZHVyYXRpb259bXM7XG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcblxuICAgICYubG9hZC1lbnRlciB7XG4gICAgICB3aWR0aDogMDtcbiAgICB9XG5cbiAgICAmLmxvYWQtZW50ZXItZG9uZSB7XG4gICAgICB3aWR0aDogODUlO1xuICAgIH1cblxuICAgICYubG9hZC1leGl0IHtcbiAgICAgIHdpZHRoOiA4NSU7XG4gICAgfVxuXG4gICAgJi5sb2FkLWV4aXQtYWN0aXZlIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG4gIH1cblxuICAkeyh7IGNzcyB9KSA9PiBjc3MgfHwge319XG5gO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvYWRpbmdCYXIgZXh0ZW5kcyBQdXJlQ29tcG9uZW50PExvYWRpbmdQcm9wcz4ge1xuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgIGNvbG9yOiAncHJpbWFyeScsXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgYmFja2dyb3VuZDogJ3RyYW5zcGFyZW50JyxcbiAgICBzaXplOiAnM3B4JyxcbiAgICBkdXJhdGlvbjogMTUwLFxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8V3JhcHBlciB7Li4udGhpcy5wcm9wc30+XG4gICAgICAgIDxDU1NUcmFuc2l0aW9uXG4gICAgICAgICAgY2xhc3NOYW1lcz1cImxvYWRcIlxuICAgICAgICAgIHRpbWVvdXQ9e3RoaXMucHJvcHMuZHVyYXRpb24hfVxuICAgICAgICAgIGluPXt0aGlzLnByb3BzLmxvYWRpbmd9XG4gICAgICAgICAgdW5tb3VudE9uRXhpdFxuICAgICAgICA+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2FkaW5nLWJhclwiIC8+XG4gICAgICAgIDwvQ1NTVHJhbnNpdGlvbj5cbiAgICAgIDwvV3JhcHBlcj5cbiAgICApO1xuICB9XG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgSFRNTEF0dHJpYnV0ZXMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkLCB7IGNzcywga2V5ZnJhbWVzIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgQ29sb3JUeXBlLCBUaGVtZVR5cGUgfSBmcm9tICcuLi8uLi90eXBlcyc7XG5cbmludGVyZmFjZSBQcm9wcyBleHRlbmRzIEhUTUxBdHRyaWJ1dGVzPEhUTUxEaXZFbGVtZW50PntcbiAgLyoqIOiJsuOBruaMh+WumiAqL1xuICBjb2xvcj86IENvbG9yVHlwZTtcbiAgLyoqIOaoquW5hSAqL1xuICB3aWR0aD86IHN0cmluZztcbiAgLyoqIOe4puW5hSAqL1xuICBoZWlnaHQ/OiBzdHJpbmc7XG4gIC8qKiBzcGlubmVy44Gu5aSq44GVICovXG4gIGJvcmRlclNpemU/OiBzdHJpbmc7XG59XG5cbmZ1bmN0aW9uIGdldENvbG9yKHsgdGhlbWUsIGNvbG9yIH06IHsgdGhlbWU6IFRoZW1lVHlwZSwgY29sb3I/OiBDb2xvclR5cGUgfSkge1xuICBjb25zdCB2YWx1ZSA9ICghY29sb3IgfHwgY29sb3IgPT09ICdsaWdodCcpID8gdGhlbWUuYmFja2dyb3VuZCA6IHRoZW1lW2NvbG9yXTtcblxuICByZXR1cm4gY3NzYFxuICAgIGJvcmRlci1jb2xvcjogJHt2YWx1ZX07XG4gICAgYm9yZGVyLXJpZ2h0LWNvbG9yOiAke3RoZW1lLmJvcmRlcn07XG4gICAgYm9yZGVyLXRvcC1jb2xvcjogJHt0aGVtZS5ib3JkZXJ9O1xuICBgO1xufVxuXG5jb25zdCBzcGluID0ga2V5ZnJhbWVzYFxuICBmcm9tIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxuICB0byB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzU5ZGVnKTtcbiAgfVxuYDtcblxuY29uc3QgU3Bpbm5lciA9IHN0eWxlZC5kaXY8UHJvcHM+YFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAkeyh7IHdpZHRoIH0pID0+IHdpZHRoID8gd2lkdGggOiAnMTAwJSd9O1xuICBoZWlnaHQ6ICR7KHsgaGVpZ2h0IH0pID0+IGhlaWdodCA/IGhlaWdodCA6ICcxMDAlJ307XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICY6YWZ0ZXIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIGFuaW1hdGlvbjogJHtzcGlufSA3NTBtcyBpbmZpbml0ZSBsaW5lYXI7XG4gICAgYm9yZGVyOiAkeyh7IGJvcmRlclNpemUgfSkgPT4gYm9yZGVyU2l6ZX0gc29saWQ7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICAke2dldENvbG9yfVxuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgfVxuYDtcblNwaW5uZXIuZGlzcGxheU5hbWUgPSAnU3Bpbm5lcic7XG5TcGlubmVyLmRlZmF1bHRQcm9wcyA9IHtcbiAgYm9yZGVyU2l6ZTogJzJweCcsXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNwaW5uZXI7XG4iLCIvLyBncmlkICYgbGF5b3V0XG5leHBvcnQgeyBkZWZhdWx0IGFzIEJyZWFrIH0gZnJvbSAnLi9HcmlkL0JyZWFrJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQ29udGFpbmVyIH0gZnJvbSAnLi9HcmlkL0NvbnRhaW5lcic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFJvdyB9IGZyb20gJy4vR3JpZC9Sb3cnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBDb2wgfSBmcm9tICcuL0dyaWQvQ29sJztcblxuXG4vLyBjb21tb25cbmV4cG9ydCB7IGRlZmF1bHQgYXMgQ29udGVudCB9IGZyb20gJy4vQ29udGVudCc7XG5leHBvcnQgKiBmcm9tICcuL0NvbnRlbnQnO1xuXG5leHBvcnQgeyBkZWZhdWx0IGFzIEJ1dHRvbiB9IGZyb20gJy4vQnV0dG9uJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQnV0dG9uR3JvdXAgfSBmcm9tICcuL0J1dHRvbi9CdXR0b25Hcm91cCc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFRhYmxlIH0gZnJvbSAnLi9UYWJsZSc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEJveCB9IGZyb20gJy4vQm94JztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgUHJvZ3Jlc3MgfSBmcm9tICcuL1Byb2dyZXNzJztcblxuLy8gZm9ybVxuZXhwb3J0ICogZnJvbSAnLi9Gb3JtJztcblxuLy8gaWNvbnNcbmV4cG9ydCAqIGZyb20gJy4vSWNvbnMnO1xuXG4vLyBjb21wb25lbnRzXG5leHBvcnQgeyBkZWZhdWx0IGFzIEFwcEJhciB9IGZyb20gJy4vQXBwQmFyJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgVGFnIH0gZnJvbSAnLi9UYWcnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBIZXJvIH0gZnJvbSAnLi9IZXJvJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgVG9vbHRpcCB9IGZyb20gJy4vVG9vbHRpcCc7XG5leHBvcnQgKiBmcm9tICcuL1NpZGVNZW51JztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQ2FyZCB9IGZyb20gJy4vQ2FyZCc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFBvcG92ZXIgfSBmcm9tICcuL1BvcG92ZXInO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBNb2RhbCB9IGZyb20gJy4vTW9kYWwnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBUb2FzdCB9IGZyb20gJy4vVG9hc3QnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBUYWJzIH0gZnJvbSAnLi9UYWJzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTG9hZGluZ0JhciB9IGZyb20gJy4vTG9hZGluZy9CYXInO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBTcGlubmVyIH0gZnJvbSAnLi9Mb2FkaW5nL1NwaW5uZXInO1xuIiwiaW1wb3J0IHsgVGhlbWVUeXBlIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5cbmNvbnN0IHRoZW1lOiBUaGVtZVR5cGUgPSB7XG4gIGZvbnRGYW1pbHk6ICfjg5Ljg6njgq7jg47op5LjgrTjgrfjg4Pjgq8sXCLjg5Ljg6njgq7jg47op5LjgrQgUHJvTiBXM1wiLOODoeOCpOODquOCqixNZWlyeW8sXCLvvK3vvLMg77yw44K044K344OD44KvXCIsXCJNUyBQR290aGljXCIsc2Fucy1zZXJpZicsXG4gIGZvbnRTaXplOiAnMTZweCcsXG5cbiAgcmVzcG9uc2l2ZTogdHJ1ZSxcbiAgZ3V0dGVyOiAyNCxcbiAgc21hbGxHdXR0ZXI6IDE2LFxuICBib3hTaGFkb3c6ICcwIDFweCAycHggMCByZ2JhKDAsIDAsIDAsIDAuMDUpJyxcblxuICBtb2JpbGU6IDU3NixcbiAgdGFibGV0OiA3NjksXG4gIGRlc2t0b3A6IDk2MCxcbiAgZnVsbGhkOiAxMzQ0LFxuXG4gIHJhZGl1czogNCxcblxuICBwcmltYXJ5OiAnIzM3QjE1MScsXG4gIGxpbms6ICcjNTc4YmE5JyxcbiAgaW5mbzogJyMyMDljZWUnLFxuICBzdWNjZXNzOiAnIzBmYTg4NicsXG4gIHdhcm5pbmc6ICcjZjJiNTQxJyxcbiAgZGFuZ2VyOiAnI2YzNTc1YScsXG4gIGRhcms6ICcjMzYzNjM2JyxcbiAgbGlnaHQ6ICcjOWI5YjliJyxcblxuICBibGFjazogJyMwYTBhMGEnLFxuICBibGFja0JpczogJyMxMjEyMTInLFxuICBibGFja1RlcjogJyMyNDI0MjQnLFxuXG4gIHdoaXRlOiAnI2ZmZmZmZicsXG4gIHdoaXRlQmlzOiAnI2ZhZmFmYScsXG4gIHdoaXRlVGVyOiAnI2Y1ZjVmNScsXG5cbiAgZ3JleTogJyM3YTdhN2EnLFxuICBncmV5TGlnaHQ6ICcjOWI5YjliJyxcbiAgZ3JleUxpZ2h0ZXI6ICcjZGJkYmRiJyxcblxuICB0ZXh0OiAnIzRhNGE0YScsXG4gIHRleHREYXJrOiAnIzRhNGE0YScsXG4gIHRleHRMaWdodDogJyM3YTdhN2EnLFxuICB0ZXh0U3Ryb25nOiAnIzRhNGE0YScsXG5cbiAgYmFja2dyb3VuZDogJyNmNWY1ZjUnLFxuXG4gIGJvcmRlcjogJyNkYmRiZGInLFxuICBib3JkZXJIb3ZlcjogJyM5YjliOWInLFxuICBib3JkZXJBY3RpdmU6ICcjNGE0YTRhJyxcblxuICBwbGFjZWhvbGRlcjogJyM3YTdhN2EnLFxufTtcblxuXG5leHBvcnQgZGVmYXVsdCB0aGVtZTtcbiIsImltcG9ydCB7IGNzcyB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuLyohIGJhc2VkIG9uIG5vcm1hbGl6ZS5jc3MgdjguMC4wIHwgTUlUIExpY2Vuc2UgfCBnaXRodWIuY29tL25lY29sYXMvbm9ybWFsaXplLmNzcyAqL1xuY29uc3Qgbm9ybWFsaXplZDogYW55ID0gY3NzYFxuICAqLCA6OmFmdGVyLCA6OmJlZm9yZSB7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgfVxuXG4gIGh0bWwge1xuICAgIGxpbmUtaGVpZ2h0OiAxLjE1O1xuICAgIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTtcbiAgICAtbXMtb3ZlcmZsb3ctc3R5bGU6IHNjcm9sbGJhcjtcbiAgfVxuXG4gIGJvZHkge1xuICAgIG1hcmdpbjogMDtcbiAgICBmb250LWZhbWlseTogJHsoeyB0aGVtZSB9OiBhbnkpID0+IHRoZW1lID8gdGhlbWUuZm9udEZhbWlseSA6ICdcIkhpcmFnaW5vIFNhbnNcIiwg44OS44Op44Ku44OO6KeS44K044K344OD44KvLCBcIkhpcmFnaW5vIEtha3UgR290aGljIFByb05cIiwgXCLjg5Ljg6njgq7jg47op5LjgrQgUHJvTiBXM1wiLCDmuLjjgrTjgrfjg4Pjgq/kvZMsIFwiWXUgR290aGljXCIsIFl1R290aGljLCBcIuODkuODqeOCruODjuinkuOCtOOCt+ODg+OCryBQcm9cIiwgSGlyYUtha3VQcm8tVzMsIFwiSGlyYWdpbm8gS2FrdSBHb3RoaWMgUHJvXCIsIFF1aWNrc2FuZCwg44Oh44Kk44Oq44KqLCBNZWlyeW8sIE9zYWthLCBcIu+8re+8syDvvLDjgrTjgrfjg4Pjgq9cIiwgXCJNUyBQR290aGljXCIsIHNhbnMtc2VyaWYnfTs7XG4gICAgZm9udC1zaXplOiAkeyh7IHRoZW1lIH06IGFueSkgPT4gdGhlbWUgPyB0aGVtZS5mb250U2l6ZSA6ICcxNnB4J307XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgfVxuXG4gIGgxIHtcbiAgICBmb250LXNpemU6IDJlbTtcbiAgICBtYXJnaW46IC42N2VtIDA7XG4gIH1cblxuICBociB7XG4gICAgYm94LXNpemluZzogY29udGVudC1ib3g7XG4gICAgaGVpZ2h0OiAwO1xuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xuICB9XG5cbiAgcHJlIHtcbiAgICBmb250LWZhbWlseTogbW9ub3NwYWNlLG1vbm9zcGFjZTtcbiAgICBmb250LXNpemU6IDFlbTtcbiAgfVxuXG4gIGEge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGNvbG9yOiAkeyh7IHRoZW1lIH06IGFueSkgPT4gdGhlbWUubGlua307XG4gIH1cblxuICBhYmJyW3RpdGxlXSB7XG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSBkb3R0ZWQ7XG4gIH1cblxuICBiLHN0cm9uZyB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgfVxuXG4gIGNvZGUsa2JkLHNhbXAge1xuICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsbW9ub3NwYWNlO1xuICAgIGZvbnQtc2l6ZTogMWVtO1xuICB9XG5cbiAgc21hbGwge1xuICAgIGZvbnQtc2l6ZTogODAlO1xuICB9XG5cbiAgc3ViLHN1cCB7XG4gICAgZm9udC1zaXplOiA3NSU7XG4gICAgbGluZS1oZWlnaHQ6IDA7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbiAgfVxuXG4gIHN1YiB7XG4gICAgYm90dG9tOiAtLjI1ZW07XG4gIH1cblxuICBzdXAge1xuICAgIHRvcDogLS41ZW07XG4gIH1cblxuICBpbWcge1xuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcbiAgfVxuXG4gIGJ1dHRvbixpbnB1dCxvcHRncm91cCxzZWxlY3QsdGV4dGFyZWEge1xuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICAgIGZvbnQtc2l6ZTogMTAwJTtcbiAgICBsaW5lLWhlaWdodDogMS4xNTtcbiAgICBtYXJnaW46IDA7XG4gIH1cblxuICBidXR0b24saW5wdXQge1xuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xuICB9XG5cbiAgYnV0dG9uLHNlbGVjdCB7XG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIH1cblxuICBbdHlwZT1idXR0b25dLFt0eXBlPXJlc2V0XSxbdHlwZT1zdWJtaXRdLGJ1dHRvbiB7XG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247XG4gIH1cblxuICBbdHlwZT1idXR0b25dOjotbW96LWZvY3VzLWlubmVyLFt0eXBlPXJlc2V0XTo6LW1vei1mb2N1cy1pbm5lcixbdHlwZT1zdWJtaXRdOjotbW96LWZvY3VzLWlubmVyLGJ1dHRvbjo6LW1vei1mb2N1cy1pbm5lciB7XG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cblxuICBbdHlwZT1idXR0b25dOi1tb3otZm9jdXNyaW5nLFt0eXBlPXJlc2V0XTotbW96LWZvY3VzcmluZyxbdHlwZT1zdWJtaXRdOi1tb3otZm9jdXNyaW5nLGJ1dHRvbjotbW96LWZvY3VzcmluZyB7XG4gICAgb3V0bGluZTogMXB4IGRvdHRlZCBCdXR0b25UZXh0O1xuICB9XG5cbiAgaW5wdXRbdHlwZT1kYXRlXSxcbiAgaW5wdXRbdHlwZT10aW1lXSxcbiAgaW5wdXRbdHlwZT1kYXRldGltZS1sb2NhbF0sXG4gIGlucHV0W3R5cGU9bW9udGhdIHtcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IGxpc3Rib3g7XG4gIH1cblxuICBmaWVsZHNldCB7XG4gICAgcGFkZGluZzogLjM1ZW0gLjc1ZW0gLjYyNWVtO1xuICB9XG5cbiAgbGVnZW5kIHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGNvbG9yOiBpbmhlcml0O1xuICAgIGRpc3BsYXk6IHRhYmxlO1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAwO1xuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gIH1cblxuICBwcm9ncmVzcyB7XG4gICAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xuICAgIHJlc2l6ZTogdmVydGljYWw7XG4gIH1cblxuICB0ZXh0YXJlYSB7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gIH1cblxuICBbdHlwZT1jaGVja2JveF0sW3R5cGU9cmFkaW9dIHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cblxuICBbdHlwZT1udW1iZXJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFt0eXBlPW51bWJlcl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xuICAgIGhlaWdodDogYXV0bztcbiAgfVxuXG4gIFt0eXBlPXNlYXJjaF0ge1xuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogdGV4dGZpZWxkO1xuICAgIG91dGxpbmUtb2Zmc2V0OiAtMnB4O1xuICB9XG5cbiAgW3R5cGU9c2VhcmNoXTo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbiB7XG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICB9XG5cbiAgOjotd2Via2l0LWZpbGUtdXBsb2FkLWJ1dHRvbiB7XG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247XG4gICAgZm9udDogaW5oZXJpdDtcbiAgfVxuXG4gIGRldGFpbHMge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG5cbiAgc3VtbWFyeSB7XG4gICAgZGlzcGxheTogbGlzdC1pdGVtO1xuICB9XG5cbiAgdGVtcGxhdGUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICBbaGlkZGVuXSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIGJsb2NrcXVvdGUsIGJvZHksIGRkLCBkbCwgZHQsIGZpZWxkc2V0LCBmaWd1cmUsIGgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIGhyLCBodG1sLCBpZnJhbWUsIGxlZ2VuZCwgbGksIG9sLCBwLCBwcmUsIHRleHRhcmVhLCB1bCB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cblxuICBidXR0b24ge1xuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgfVxuXG4gIGFydGljbGUsIGFzaWRlLCBmaWd1cmUsXG4gIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIHNlY3Rpb24ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG5cbiAgaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdLCBpbnB1dFt0eXBlPVwicmFkaW9cIl0ge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgcGFkZGluZzogMDtcbiAgfVxuXG4gIGEge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY29sb3I6ICMzMjczZGM7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIGNvbG9yOiBjdXJyZW50Q29sb3I7XG4gICAgfVxuICB9XG5cbiAgaW1nIHtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcbiAgfVxuXG4gIHN2ZyB7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB9XG5cbiAgc21hbGwge1xuICAgIGZvbnQtc2l6ZTogLjg3NWVtO1xuICB9XG5cbiAgc3BhbiB7XG4gICAgZm9udC1zdHlsZTogaW5oZXJpdDtcbiAgICBmb250LXdlaWdodDogaW5oZXJpdDtcbiAgfVxuXG4gIHN0cm9uZyB7XG4gICAgY29sb3I6ICMzNjM2MzY7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgfVxuXG4gIHRhYmxlIHtcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICAgIGJvcmRlci1zcGFjaW5nOiAwO1xuICB9XG5cbiAgdGgge1xuICAgIHRleHQtYWxpZ246IGluaGVyaXQ7XG4gIH1cblxuICB1bCB7XG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBub3JtYWxpemVkO1xuIl0sIm5hbWVzIjpbIkJyZWFrIiwid2lkdGgiLCJoZWlnaHQiLCJtZWRpYU1vYmlsZSIsInRoZW1lIiwicmVzcG9uc2l2ZSIsIm1vYmlsZSIsIm1lZGlhVGFibGV0IiwidGFibGV0IiwibWVkaWFEZXNrdG9wIiwiZGVza3RvcCIsIm1lZGlhRnVsbEhEIiwiZnVsbGhkIiwibWVkaWFVbnRpbEZ1bGxIRCIsInNldFJlc3BvbnNpdmUiLCJmbHVpZCIsImNzcyIsInNtYWxsR3V0dGVyIiwiZ3V0dGVyIiwiQ29udGFpbmVyIiwic3R5bGVkIiwiZGl2IiwiZGlzcGxheU5hbWUiLCJkZWZhdWx0UHJvcHMiLCJwYXJjZW50YWdlIiwidmFsdWUiLCJNYXRoIiwiY2VpbCIsInJlbmRlclNpemUiLCJzaXplIiwibmFycm93IiwiYXV0byIsIm9mZnNldCIsIm9mZlZhbCIsImF1dG9TaXplIiwiQ29sIiwicmVuZGVyR3V0dGVyIiwibm9HdXR0ZXIiLCJSb3ciLCJ2Y2VudGVyIiwiY2VudGVyIiwiUHJlIiwicHJlIiwiQ29kZSIsImNvZGUiLCJiYWNrZ3JvdW5kIiwiZGFuZ2VyIiwiSDEiLCJoMSIsImJvcmRlciIsIkNvbnRlbnQiLCJ0ZXh0IiwiZXhwb3J0cyIsImN1cnJ5IiwiY3VycmllZCIsImYiLCJsZW5ndGgiLCJhY2MiLCJmbiIsImNvbWJpbmVkIiwiY29uY2F0IiwiQXJyYXkiLCJwcm90b3R5cGUiLCJzbGljZSIsImNhbGwiLCJhcmd1bWVudHMiLCJhcHBseSIsIm1vZHVsZSIsImRlZmF1bHQiLCJndWFyZCIsImxvd2VyQm91bmRhcnkiLCJ1cHBlckJvdW5kYXJ5IiwibWF4IiwibWluIiwiX2RlZmF1bHQiLCJjb2xvclRvSW50IiwiY29sb3IiLCJyb3VuZCIsImNvbnZlcnRUb0ludCIsInJlZCIsImdyZWVuIiwiYmx1ZSIsImhzbFRvUmdiIiwiaHVlIiwic2F0dXJhdGlvbiIsImxpZ2h0bmVzcyIsImNvbnZlcnQiLCJodWVQcmltZSIsImNocm9tYSIsImFicyIsInNlY29uZENvbXBvbmVudCIsImxpZ2h0bmVzc01vZGlmaWNhdGlvbiIsImZpbmFsUmVkIiwiZmluYWxHcmVlbiIsImZpbmFsQmx1ZSIsIm5hbWVkQ29sb3JNYXAiLCJhbGljZWJsdWUiLCJhbnRpcXVld2hpdGUiLCJhcXVhIiwiYXF1YW1hcmluZSIsImF6dXJlIiwiYmVpZ2UiLCJiaXNxdWUiLCJibGFjayIsImJsYW5jaGVkYWxtb25kIiwiYmx1ZXZpb2xldCIsImJyb3duIiwiYnVybHl3b29kIiwiY2FkZXRibHVlIiwiY2hhcnRyZXVzZSIsImNob2NvbGF0ZSIsImNvcmFsIiwiY29ybmZsb3dlcmJsdWUiLCJjb3Juc2lsayIsImNyaW1zb24iLCJjeWFuIiwiZGFya2JsdWUiLCJkYXJrY3lhbiIsImRhcmtnb2xkZW5yb2QiLCJkYXJrZ3JheSIsImRhcmtncmVlbiIsImRhcmtncmV5IiwiZGFya2toYWtpIiwiZGFya21hZ2VudGEiLCJkYXJrb2xpdmVncmVlbiIsImRhcmtvcmFuZ2UiLCJkYXJrb3JjaGlkIiwiZGFya3JlZCIsImRhcmtzYWxtb24iLCJkYXJrc2VhZ3JlZW4iLCJkYXJrc2xhdGVibHVlIiwiZGFya3NsYXRlZ3JheSIsImRhcmtzbGF0ZWdyZXkiLCJkYXJrdHVycXVvaXNlIiwiZGFya3Zpb2xldCIsImRlZXBwaW5rIiwiZGVlcHNreWJsdWUiLCJkaW1ncmF5IiwiZGltZ3JleSIsImRvZGdlcmJsdWUiLCJmaXJlYnJpY2siLCJmbG9yYWx3aGl0ZSIsImZvcmVzdGdyZWVuIiwiZnVjaHNpYSIsImdhaW5zYm9ybyIsImdob3N0d2hpdGUiLCJnb2xkIiwiZ29sZGVucm9kIiwiZ3JheSIsImdyZWVueWVsbG93IiwiZ3JleSIsImhvbmV5ZGV3IiwiaG90cGluayIsImluZGlhbnJlZCIsImluZGlnbyIsIml2b3J5Iiwia2hha2kiLCJsYXZlbmRlciIsImxhdmVuZGVyYmx1c2giLCJsYXduZ3JlZW4iLCJsZW1vbmNoaWZmb24iLCJsaWdodGJsdWUiLCJsaWdodGNvcmFsIiwibGlnaHRjeWFuIiwibGlnaHRnb2xkZW5yb2R5ZWxsb3ciLCJsaWdodGdyYXkiLCJsaWdodGdyZWVuIiwibGlnaHRncmV5IiwibGlnaHRwaW5rIiwibGlnaHRzYWxtb24iLCJsaWdodHNlYWdyZWVuIiwibGlnaHRza3libHVlIiwibGlnaHRzbGF0ZWdyYXkiLCJsaWdodHNsYXRlZ3JleSIsImxpZ2h0c3RlZWxibHVlIiwibGlnaHR5ZWxsb3ciLCJsaW1lIiwibGltZWdyZWVuIiwibGluZW4iLCJtYWdlbnRhIiwibWFyb29uIiwibWVkaXVtYXF1YW1hcmluZSIsIm1lZGl1bWJsdWUiLCJtZWRpdW1vcmNoaWQiLCJtZWRpdW1wdXJwbGUiLCJtZWRpdW1zZWFncmVlbiIsIm1lZGl1bXNsYXRlYmx1ZSIsIm1lZGl1bXNwcmluZ2dyZWVuIiwibWVkaXVtdHVycXVvaXNlIiwibWVkaXVtdmlvbGV0cmVkIiwibWlkbmlnaHRibHVlIiwibWludGNyZWFtIiwibWlzdHlyb3NlIiwibW9jY2FzaW4iLCJuYXZham93aGl0ZSIsIm5hdnkiLCJvbGRsYWNlIiwib2xpdmUiLCJvbGl2ZWRyYWIiLCJvcmFuZ2UiLCJvcmFuZ2VyZWQiLCJvcmNoaWQiLCJwYWxlZ29sZGVucm9kIiwicGFsZWdyZWVuIiwicGFsZXR1cnF1b2lzZSIsInBhbGV2aW9sZXRyZWQiLCJwYXBheWF3aGlwIiwicGVhY2hwdWZmIiwicGVydSIsInBpbmsiLCJwbHVtIiwicG93ZGVyYmx1ZSIsInB1cnBsZSIsInJlYmVjY2FwdXJwbGUiLCJyb3N5YnJvd24iLCJyb3lhbGJsdWUiLCJzYWRkbGVicm93biIsInNhbG1vbiIsInNhbmR5YnJvd24iLCJzZWFncmVlbiIsInNlYXNoZWxsIiwic2llbm5hIiwic2lsdmVyIiwic2t5Ymx1ZSIsInNsYXRlYmx1ZSIsInNsYXRlZ3JheSIsInNsYXRlZ3JleSIsInNub3ciLCJzcHJpbmdncmVlbiIsInN0ZWVsYmx1ZSIsInRhbiIsInRlYWwiLCJ0aGlzdGxlIiwidG9tYXRvIiwidHVycXVvaXNlIiwidmlvbGV0Iiwid2hlYXQiLCJ3aGl0ZSIsIndoaXRlc21va2UiLCJ5ZWxsb3ciLCJ5ZWxsb3dncmVlbiIsIm5hbWVUb0hleCIsIm5vcm1hbGl6ZWRDb2xvck5hbWUiLCJ0b0xvd2VyQ2FzZSIsIl9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQiLCJzZWxmIiwiUmVmZXJlbmNlRXJyb3IiLCJfaW5oZXJpdHNMb29zZSIsInN1YkNsYXNzIiwic3VwZXJDbGFzcyIsIk9iamVjdCIsImNyZWF0ZSIsImNvbnN0cnVjdG9yIiwiX19wcm90b19fIiwiX3dyYXBOYXRpdmVTdXBlciIsIkNsYXNzIiwiX2NhY2hlIiwiTWFwIiwidW5kZWZpbmVkIiwiX2lzTmF0aXZlRnVuY3Rpb24iLCJUeXBlRXJyb3IiLCJoYXMiLCJnZXQiLCJzZXQiLCJXcmFwcGVyIiwiX2NvbnN0cnVjdCIsIl9nZXRQcm90b3R5cGVPZiIsImVudW1lcmFibGUiLCJ3cml0YWJsZSIsImNvbmZpZ3VyYWJsZSIsIl9zZXRQcm90b3R5cGVPZiIsImlzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCIsIlJlZmxlY3QiLCJjb25zdHJ1Y3QiLCJzaGFtIiwiUHJveHkiLCJEYXRlIiwidG9TdHJpbmciLCJlIiwiUGFyZW50IiwiYXJncyIsImEiLCJwdXNoIiwiQ29uc3RydWN0b3IiLCJGdW5jdGlvbiIsImJpbmQiLCJpbnN0YW5jZSIsImluZGV4T2YiLCJvIiwicCIsInNldFByb3RvdHlwZU9mIiwiZ2V0UHJvdG90eXBlT2YiLCJFUlJPUlMiLCJmb3JtYXQiLCJfbGVuIiwiX2tleSIsImIiLCJjIiwiZm9yRWFjaCIsImQiLCJyZXBsYWNlIiwiUG9saXNoZWRFcnJvciIsIl9FcnJvciIsIl90aGlzIiwicHJvY2VzcyIsImVudiIsIk5PREVfRU5WIiwiX2xlbjIiLCJfa2V5MiIsIkVycm9yIiwiX2hzbFRvUmdiIiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsInJlcXVpcmUkJDAiLCJfbmFtZVRvSGV4IiwicmVxdWlyZSQkMSIsIl9lcnJvcnMiLCJyZXF1aXJlJCQyIiwib2JqIiwiX19lc01vZHVsZSIsImhleFJlZ2V4IiwiaGV4UmdiYVJlZ2V4IiwicmVkdWNlZEhleFJlZ2V4IiwicmVkdWNlZFJnYmFIZXhSZWdleCIsInJnYlJlZ2V4IiwicmdiYVJlZ2V4IiwiaHNsUmVnZXgiLCJoc2xhUmVnZXgiLCJwYXJzZVRvUmdiIiwibm9ybWFsaXplZENvbG9yIiwibWF0Y2giLCJwYXJzZUludCIsImFscGhhIiwicGFyc2VGbG9hdCIsInRvRml4ZWQiLCJfYWxwaGEiLCJyZ2JNYXRjaGVkIiwiZXhlYyIsInJnYmFNYXRjaGVkIiwiaHNsTWF0Y2hlZCIsInJnYkNvbG9yU3RyaW5nIiwiaHNsUmdiTWF0Y2hlZCIsImhzbGFNYXRjaGVkIiwiX2h1ZSIsIl9zYXR1cmF0aW9uIiwiX2xpZ2h0bmVzcyIsIl9yZ2JDb2xvclN0cmluZyIsIl9oc2xSZ2JNYXRjaGVkIiwicmdiVG9Ic2wiLCJkZWx0YSIsIl9wYXJzZVRvUmdiIiwiX3JnYlRvSHNsIiwicGFyc2VUb0hzbCIsInJlZHVjZUhleFZhbHVlIiwibnVtYmVyVG9IZXgiLCJoZXgiLCJfcmVkdWNlSGV4VmFsdWUiLCJfbnVtYmVyVG9IZXgiLCJjb2xvclRvSGV4IiwiY29udmVydFRvSGV4IiwiaHNsVG9IZXgiLCJfaHNsVG9IZXgiLCJoc2wiLCJoc2xhIiwicmdiIiwiX3JnYiIsInJnYmEiLCJmaXJzdFZhbHVlIiwic2Vjb25kVmFsdWUiLCJ0aGlyZFZhbHVlIiwiZm91cnRoVmFsdWUiLCJyZ2JWYWx1ZSIsIl9oc2wiLCJfaHNsYSIsIl9yZ2JhIiwicmVxdWlyZSQkMyIsInJlcXVpcmUkJDQiLCJpc1JnYiIsImlzUmdiYSIsImlzSHNsIiwiaXNIc2xhIiwidG9Db2xvclN0cmluZyIsIl9jdXJyeSIsIl9ndWFyZCIsIl9wYXJzZVRvSHNsIiwiX3RvQ29sb3JTdHJpbmciLCJfZXh0ZW5kcyIsImFzc2lnbiIsInRhcmdldCIsImkiLCJzb3VyY2UiLCJrZXkiLCJoYXNPd25Qcm9wZXJ0eSIsImRhcmtlbiIsImFtb3VudCIsImhzbENvbG9yIiwiY3VycmllZERhcmtlbiIsImdldEx1bWluYW5jZSIsInJnYkNvbG9yIiwiX09iamVjdCRrZXlzJG1hcCIsImtleXMiLCJtYXAiLCJjaGFubmVsIiwicG93IiwiciIsImciLCJmaW5kQ29sb3JJbnZlcnQiLCJ0cmFuc3BhcmVudGl6ZSIsInBhcnNlZENvbG9yIiwiY29sb3JXaXRoQWxwaGEiLCJjdXJyaWVkVHJhbnNwYXJlbnRpemUiLCJib3hTaGFkb3ciLCJzaGFkb3dDb2xvciIsInNldFNpemUiLCJuYW1lIiwiZGlzYWJsZWRDb2xvciIsInRleHRDb2xvciIsInRleHREYXJrIiwiYmFja0NvbG9yIiwic2V0Q29sb3IiLCJvdXRsaW5lIiwiZGlzYWJsZWQiLCJib3JkZXJIb3ZlciIsImJvcmRlckFjdGl2ZSIsImludmVydENvbG9yIiwiQnV0dG9uIiwiYnV0dG9uIiwiZnVsbCIsIkJ1dHRvbkdyb3VwIiwic3RyaXBlZFN0eWxlIiwiaG92ZXJTdHlsZSIsIlRhYmxlIiwidGFibGUiLCJib3JkZXJlZCIsInN0cmlwZWQiLCJob3ZlciIsImhlYWRlclN0eWxlIiwiQm94IiwiYm9yZGVybGVzcyIsIlByb2dyZXNzIiwicHJvcHMiLCJwZXJjZW50IiwiUHVyZUNvbXBvbmVudCIsInJlcXVpcmVkIiwicHJpbWFyeSIsIkxhYmVsIiwibGFiZWwiLCJ0ZXh0U3Ryb25nIiwiRmllbGQiLCJjaGlsZHJlbiIsImh0bWxGb3IiLCJyZXN0IiwiaGFtYnVyZ2VyIiwiQXJyb3ciLCJkaXJlY3Rpb24iLCJNZXNzYWdlIiwic3BhbiIsImVycm9yIiwidGV4dExpZ2h0IiwiSGVscE1lc3NhZ2UiLCJoZWxwIiwicmlnaHRJY29uIiwibGVmdEljb24iLCJJY29uIiwicmlnaHQiLCJwbGFjZWhvbGRlciIsIlRleHRJbnB1dCIsImNsYXNzTmFtZSIsInN0eWxlIiwidHlwZSIsIm1heExlbmd0aCIsIm9uQ2hhbmdlIiwiVGV4dGFyZWEiLCJyZWFkT25seSIsIkNvbXBvbmVudCIsImNvbCIsInJvdyIsIkNoZWNrYm94IiwiY2hlY2tlZCIsImlkIiwiSW5wdXRXcmFwcGVyIiwiYXJyb3ciLCJTZWxlY3QiLCJyZW5kZXIiLCJvcHRpb25zIiwiaXRlbSIsImlkeCIsInJlbmRlckxhYmVsIiwiaW5wdXRTaXplIiwiQm9vbGVhbiIsInJlbmRlckl0ZW0iLCJSYWRpb0xhYmVsIiwiQnV0dG9uTGFiZWwiLCJSYWRpbyIsIkFwcHJvdmVkIiwiQ2hldnJvbkxlZnRSb3VuZCIsIkNoZXZyb25SaWdodFJvdW5kIiwiRmlsZVJvdW5kIiwiUGVuY2lsIiwiVXNlciIsIkNsb3NlIiwiUmVmcmVzaCIsInNldEFsaWduIiwiYWxpZ24iLCJiYWNrZHJvcCIsImJhY2tncm91bmRDb2xvciIsInVhIiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwiTmF2QmFyIiwiaGVhZGVyIiwiZml4ZWQiLCJzdGlja3kiLCJCdXJnZXIiLCJoYW1idWdlciIsIk5hdkNvbnRlbnQiLCJBcHBCYXIiLCJzaG93Iiwic2V0U3RhdGUiLCJzdGF0ZSIsImJyYW5kIiwidG9nZ2xlTWVudSIsImdldENvbG9yIiwiYWRkb25Db2xvciIsInN1YkNvbG9yIiwiY2xvc2UiLCJUYWciLCJvbkNsb3NlIiwib25DbGljayIsIkJvZHkiLCJIZXJvIiwiZGVmaW5lUHJvcGVydHkiLCJTeW1ib2wiLCJmb3IiLCJoIiwiayIsImwiLCJtIiwibiIsInEiLCJ0IiwidSIsIiQkdHlwZW9mIiwidiIsImhhc1N5bWJvbCIsIlJFQUNUX0VMRU1FTlRfVFlQRSIsIlJFQUNUX1BPUlRBTF9UWVBFIiwiUkVBQ1RfRlJBR01FTlRfVFlQRSIsIlJFQUNUX1NUUklDVF9NT0RFX1RZUEUiLCJSRUFDVF9QUk9GSUxFUl9UWVBFIiwiUkVBQ1RfUFJPVklERVJfVFlQRSIsIlJFQUNUX0NPTlRFWFRfVFlQRSIsIlJFQUNUX0FTWU5DX01PREVfVFlQRSIsIlJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFIiwiUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSIsIlJFQUNUX1NVU1BFTlNFX1RZUEUiLCJSRUFDVF9NRU1PX1RZUEUiLCJSRUFDVF9MQVpZX1RZUEUiLCJpc1ZhbGlkRWxlbWVudFR5cGUiLCJsb3dQcmlvcml0eVdhcm5pbmciLCJwcmludFdhcm5pbmciLCJhcmdJbmRleCIsIm1lc3NhZ2UiLCJjb25zb2xlIiwid2FybiIsIngiLCJjb25kaXRpb24iLCJsb3dQcmlvcml0eVdhcm5pbmckMSIsInR5cGVPZiIsIm9iamVjdCIsIiQkdHlwZW9mVHlwZSIsIkFzeW5jTW9kZSIsIkNvbmN1cnJlbnRNb2RlIiwiQ29udGV4dENvbnN1bWVyIiwiQ29udGV4dFByb3ZpZGVyIiwiRWxlbWVudCIsIkZvcndhcmRSZWYiLCJGcmFnbWVudCIsIkxhenkiLCJNZW1vIiwiUG9ydGFsIiwiUHJvZmlsZXIiLCJTdHJpY3RNb2RlIiwiU3VzcGVuc2UiLCJoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0FzeW5jTW9kZSIsImlzQXN5bmNNb2RlIiwiaXNDb25jdXJyZW50TW9kZSIsImlzQ29udGV4dENvbnN1bWVyIiwiaXNDb250ZXh0UHJvdmlkZXIiLCJpc0VsZW1lbnQiLCJpc0ZvcndhcmRSZWYiLCJpc0ZyYWdtZW50IiwiaXNMYXp5IiwiaXNNZW1vIiwiaXNQb3J0YWwiLCJpc1Byb2ZpbGVyIiwiaXNTdHJpY3RNb2RlIiwiaXNTdXNwZW5zZSIsImdldE93blByb3BlcnR5U3ltYm9scyIsInByb3BJc0VudW1lcmFibGUiLCJwcm9wZXJ0eUlzRW51bWVyYWJsZSIsInRvT2JqZWN0IiwidmFsIiwic2hvdWxkVXNlTmF0aXZlIiwidGVzdDEiLCJTdHJpbmciLCJnZXRPd25Qcm9wZXJ0eU5hbWVzIiwidGVzdDIiLCJmcm9tQ2hhckNvZGUiLCJvcmRlcjIiLCJqb2luIiwidGVzdDMiLCJzcGxpdCIsImxldHRlciIsImVyciIsImZyb20iLCJ0byIsInN5bWJvbHMiLCJzIiwiUmVhY3RQcm9wVHlwZXNTZWNyZXQiLCJsb2dnZWRUeXBlRmFpbHVyZXMiLCJjaGVja1Byb3BUeXBlcyIsInR5cGVTcGVjcyIsInZhbHVlcyIsImxvY2F0aW9uIiwiY29tcG9uZW50TmFtZSIsImdldFN0YWNrIiwidHlwZVNwZWNOYW1lIiwiZXgiLCJzdGFjayIsInJlc2V0V2FybmluZ0NhY2hlIiwiZW1wdHlGdW5jdGlvblRoYXRSZXR1cm5zTnVsbCIsImlzVmFsaWRFbGVtZW50IiwidGhyb3dPbkRpcmVjdEFjY2VzcyIsIklURVJBVE9SX1NZTUJPTCIsIml0ZXJhdG9yIiwiRkFVWF9JVEVSQVRPUl9TWU1CT0wiLCJnZXRJdGVyYXRvckZuIiwibWF5YmVJdGVyYWJsZSIsIml0ZXJhdG9yRm4iLCJBTk9OWU1PVVMiLCJSZWFjdFByb3BUeXBlcyIsImFycmF5IiwiY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIiLCJib29sIiwiZnVuYyIsIm51bWJlciIsInN0cmluZyIsInN5bWJvbCIsImFueSIsImNyZWF0ZUFueVR5cGVDaGVja2VyIiwiYXJyYXlPZiIsImNyZWF0ZUFycmF5T2ZUeXBlQ2hlY2tlciIsImVsZW1lbnQiLCJjcmVhdGVFbGVtZW50VHlwZUNoZWNrZXIiLCJlbGVtZW50VHlwZSIsImNyZWF0ZUVsZW1lbnRUeXBlVHlwZUNoZWNrZXIiLCJpbnN0YW5jZU9mIiwiY3JlYXRlSW5zdGFuY2VUeXBlQ2hlY2tlciIsIm5vZGUiLCJjcmVhdGVOb2RlQ2hlY2tlciIsIm9iamVjdE9mIiwiY3JlYXRlT2JqZWN0T2ZUeXBlQ2hlY2tlciIsIm9uZU9mIiwiY3JlYXRlRW51bVR5cGVDaGVja2VyIiwib25lT2ZUeXBlIiwiY3JlYXRlVW5pb25UeXBlQ2hlY2tlciIsInNoYXBlIiwiY3JlYXRlU2hhcGVUeXBlQ2hlY2tlciIsImV4YWN0IiwiY3JlYXRlU3RyaWN0U2hhcGVUeXBlQ2hlY2tlciIsImlzIiwieSIsIlByb3BUeXBlRXJyb3IiLCJjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlciIsInZhbGlkYXRlIiwibWFudWFsUHJvcFR5cGVDYWxsQ2FjaGUiLCJtYW51YWxQcm9wVHlwZVdhcm5pbmdDb3VudCIsImNoZWNrVHlwZSIsImlzUmVxdWlyZWQiLCJwcm9wTmFtZSIsInByb3BGdWxsTmFtZSIsInNlY3JldCIsImNhY2hlS2V5IiwiY2hhaW5lZENoZWNrVHlwZSIsImV4cGVjdGVkVHlwZSIsInByb3BWYWx1ZSIsInByb3BUeXBlIiwiZ2V0UHJvcFR5cGUiLCJwcmVjaXNlVHlwZSIsImdldFByZWNpc2VUeXBlIiwidHlwZUNoZWNrZXIiLCJpc0FycmF5IiwiUmVhY3RJcyIsImV4cGVjdGVkQ2xhc3MiLCJleHBlY3RlZENsYXNzTmFtZSIsImFjdHVhbENsYXNzTmFtZSIsImdldENsYXNzTmFtZSIsImV4cGVjdGVkVmFsdWVzIiwidmFsdWVzU3RyaW5nIiwiSlNPTiIsInN0cmluZ2lmeSIsInJlcGxhY2VyIiwiYXJyYXlPZlR5cGVDaGVja2VycyIsImNoZWNrZXIiLCJnZXRQb3N0Zml4Rm9yVHlwZVdhcm5pbmciLCJpc05vZGUiLCJzaGFwZVR5cGVzIiwiYWxsS2V5cyIsImV2ZXJ5Iiwic3RlcCIsImVudHJpZXMiLCJuZXh0IiwiZG9uZSIsImVudHJ5IiwiaXNTeW1ib2wiLCJSZWdFeHAiLCJQcm9wVHlwZXMiLCJlbXB0eUZ1bmN0aW9uIiwiZW1wdHlGdW5jdGlvbldpdGhSZXNldCIsInNoaW0iLCJnZXRTaGltIiwiaGFzQ2xhc3MiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsImJhc2VWYWwiLCJhZGRDbGFzcyIsIl9oYXNDbGFzcyIsImFkZCIsInNldEF0dHJpYnV0ZSIsInJlcGxhY2VDbGFzc05hbWUiLCJvcmlnQ2xhc3MiLCJjbGFzc1RvUmVtb3ZlIiwicmVtb3ZlQ2xhc3MiLCJyZW1vdmUiLCJjb21wb25lbnRXaWxsTW91bnQiLCJnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMiLCJjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzIiwibmV4dFByb3BzIiwidXBkYXRlciIsInByZXZTdGF0ZSIsImNvbXBvbmVudFdpbGxVcGRhdGUiLCJuZXh0U3RhdGUiLCJwcmV2UHJvcHMiLCJfX3JlYWN0SW50ZXJuYWxTbmFwc2hvdEZsYWciLCJfX3JlYWN0SW50ZXJuYWxTbmFwc2hvdCIsImdldFNuYXBzaG90QmVmb3JlVXBkYXRlIiwiX19zdXBwcmVzc0RlcHJlY2F0aW9uV2FybmluZyIsInBvbHlmaWxsIiwiaXNSZWFjdENvbXBvbmVudCIsImZvdW5kV2lsbE1vdW50TmFtZSIsImZvdW5kV2lsbFJlY2VpdmVQcm9wc05hbWUiLCJmb3VuZFdpbGxVcGRhdGVOYW1lIiwiVU5TQUZFX2NvbXBvbmVudFdpbGxNb3VudCIsIlVOU0FGRV9jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzIiwiVU5TQUZFX2NvbXBvbmVudFdpbGxVcGRhdGUiLCJuZXdBcGlOYW1lIiwiY29tcG9uZW50RGlkVXBkYXRlIiwiY29tcG9uZW50RGlkVXBkYXRlUG9seWZpbGwiLCJtYXliZVNuYXBzaG90Iiwic25hcHNob3QiLCJfcHJvcFR5cGVzIiwidGltZW91dHNTaGFwZSIsImVudGVyIiwiZXhpdCIsImNsYXNzTmFtZXNTaGFwZSIsImFjdGl2ZSIsImVudGVyRG9uZSIsImVudGVyQWN0aXZlIiwiZXhpdERvbmUiLCJleGl0QWN0aXZlIiwiX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQiLCJfcmVhY3QiLCJfcmVhY3REb20iLCJuZXdPYmoiLCJkZXNjIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwiX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UiLCJleGNsdWRlZCIsInNvdXJjZUtleXMiLCJVTk1PVU5URUQiLCJFWElURUQiLCJFTlRFUklORyIsIkVOVEVSRUQiLCJFWElUSU5HIiwiVHJhbnNpdGlvbiIsIl9SZWFjdCRDb21wb25lbnQiLCJjb250ZXh0IiwicGFyZW50R3JvdXAiLCJ0cmFuc2l0aW9uR3JvdXAiLCJhcHBlYXIiLCJpc01vdW50aW5nIiwiaW5pdGlhbFN0YXR1cyIsImFwcGVhclN0YXR1cyIsImluIiwidW5tb3VudE9uRXhpdCIsIm1vdW50T25FbnRlciIsInN0YXR1cyIsIm5leHRDYWxsYmFjayIsIl9wcm90byIsImdldENoaWxkQ29udGV4dCIsIl9yZWYiLCJuZXh0SW4iLCJjb21wb25lbnREaWRNb3VudCIsInVwZGF0ZVN0YXR1cyIsIm5leHRTdGF0dXMiLCJjb21wb25lbnRXaWxsVW5tb3VudCIsImNhbmNlbE5leHRDYWxsYmFjayIsImdldFRpbWVvdXRzIiwidGltZW91dCIsIm1vdW50aW5nIiwiZmluZERPTU5vZGUiLCJwZXJmb3JtRW50ZXIiLCJwZXJmb3JtRXhpdCIsIl90aGlzMiIsImFwcGVhcmluZyIsInRpbWVvdXRzIiwic2FmZVNldFN0YXRlIiwib25FbnRlcmVkIiwib25FbnRlciIsIm9uRW50ZXJpbmciLCJvblRyYW5zaXRpb25FbmQiLCJfdGhpczMiLCJvbkV4aXRlZCIsIm9uRXhpdCIsIm9uRXhpdGluZyIsImNhbmNlbCIsImNhbGxiYWNrIiwic2V0TmV4dENhbGxiYWNrIiwiX3RoaXM0IiwiZXZlbnQiLCJoYW5kbGVyIiwiYWRkRW5kTGlzdGVuZXIiLCJzZXRUaW1lb3V0IiwiX3RoaXMkcHJvcHMiLCJjaGlsZFByb3BzIiwiY2hpbGQiLCJDaGlsZHJlbiIsIm9ubHkiLCJjbG9uZUVsZW1lbnQiLCJjb250ZXh0VHlwZXMiLCJjaGlsZENvbnRleHRUeXBlcyIsInByb3BUeXBlcyIsInB0IiwiX1Byb3BUeXBlcyIsIm5vb3AiLCJfcmVhY3RMaWZlY3ljbGVzQ29tcGF0IiwiX2FkZENsYXNzIiwiX3JlbW92ZUNsYXNzIiwiX1RyYW5zaXRpb24iLCJjbGFzc2VzIiwiQ1NTVHJhbnNpdGlvbiIsIl90aGlzJGdldENsYXNzTmFtZXMiLCJnZXRDbGFzc05hbWVzIiwicmVtb3ZlQ2xhc3NlcyIsIl90aGlzJGdldENsYXNzTmFtZXMyIiwiYWN0aXZlQ2xhc3NOYW1lIiwicmVmbG93QW5kQWRkQ2xhc3MiLCJfdGhpcyRnZXRDbGFzc05hbWVzMyIsImRvbmVDbGFzc05hbWUiLCJfdGhpcyRnZXRDbGFzc05hbWVzNCIsIl90aGlzJGdldENsYXNzTmFtZXM1IiwiX3RoaXMkZ2V0Q2xhc3NOYW1lczYiLCJjbGFzc05hbWVzIiwiX3RoaXMkZ2V0Q2xhc3NOYW1lczciLCJzY3JvbGxUb3AiLCJjcmVhdGVFbGVtZW50IiwiZ2V0UG9zaXRpb24iLCJwb3NpdGlvbiIsImJvdHRvbSIsImxlZnQiLCJ0cmFuc2Zvcm0iLCJ0b3AiLCJUb29sdGlwIiwiY3VycmVudCIsIm9mZnNldFdpZHRoIiwib2Zmc2V0SGVpZ2h0IiwiY3JlYXRlUmVmIiwib3BlblRvb2x0aXAiLCJjbG9zZVRvb2x0aXAiLCJTaWRlTWVudSIsImFzaWRlIiwiTWVudUxpc3QiLCJ1bCIsIk1lbnVMYWJlbCIsIkNhcmRCb2R5IiwiQ2FyZEhlYWRlciIsIkNhcmRGb290ZXIiLCJmb290ZXIiLCJDYXJkSW1hZ2UiLCJDYXJkSW1hZ2VIb3Jpem9udGFsIiwidXJsIiwiaG9yaXpvbnRhbFN0eWxlIiwiZmxleERpcmVjdGlvbiIsIkNhcmQiLCJpbWFnZSIsInRpdGxlIiwiaG9yaXpvbnRhbCIsInJlbmRlckhlYWRlciIsIndyYXBwZXJTdHlsZSIsIlJlYWN0IiwiUG9wb3ZlciIsInRvb2x0aXBTdHlsZSIsIm9wZW5Ecm9wZG93biIsImNsb3NlRHJvcGRvd24iLCJkaXNwbGF5IiwiRVNDX0tFWSIsIk1vZGFsIiwiY2xvc2VPbkVzYyIsImtleUNvZGUiLCJjbG9zZU1vZGFsIiwiY2xvc2VPbk92ZXJsYXkiLCJkb2N1bWVudCIsImJvZHkiLCJyZW1vdmVDaGlsZCIsImFwcGVuZENoaWxkIiwiY3JlYXRlUG9ydGFsIiwiZXh0ZXJuYWwiLCJvbkNsaWNrT3ZlcmxheSIsImdldENoaWxkTWFwcGluZyIsIm1lcmdlQ2hpbGRNYXBwaW5ncyIsImdldEluaXRpYWxDaGlsZE1hcHBpbmciLCJnZXROZXh0Q2hpbGRNYXBwaW5nIiwibWFwRm4iLCJtYXBwZXIiLCJyZXN1bHQiLCJwcmV2IiwiZ2V0VmFsdWVGb3JLZXkiLCJuZXh0S2V5c1BlbmRpbmciLCJwZW5kaW5nS2V5cyIsInByZXZLZXkiLCJjaGlsZE1hcHBpbmciLCJuZXh0S2V5IiwicGVuZGluZ05leHRLZXkiLCJnZXRQcm9wIiwicHJvcCIsInByZXZDaGlsZE1hcHBpbmciLCJuZXh0Q2hpbGRNYXBwaW5nIiwiaGFzUHJldiIsImhhc05leHQiLCJwcmV2Q2hpbGQiLCJpc0xlYXZpbmciLCJjb21wb25lbnQiLCJjaGlsZEZhY3RvcnkiLCJUcmFuc2l0aW9uR3JvdXAiLCJoYW5kbGVFeGl0ZWQiLCJmaXJzdFJlbmRlciIsImFwcGVhcmVkIiwibW91bnRlZCIsIl9DaGlsZE1hcHBpbmciLCJjdXJyZW50Q2hpbGRNYXBwaW5nIiwiVG9hc3RJdGVtIiwiZHVyYXRpb24iLCJjbGVhciIsInNldFBvc2l0aW9uIiwiaXNGaXhlZCIsImJhc2UiLCJUb2FzdENvbnRhaW5lciIsInRvYXN0cyIsImNzc1RleHQiLCJyZW5kZXJUb2FzdCIsIm5hdiIsIlRhYkl0ZW0iLCJJbmRpY2F0b3IiLCJUYWJzIiwic3RhcnQiLCJ0aHJlc2hvbGQiLCJtYXhJdGVtcyIsImNvdW50IiwidG90YWwiLCJ2aXNpYmlsaXR5IiwiaW5kZXgiLCJnZXRJbmRpY2F0b3JQb3NpdGlvbiIsInJlbmRlckNoaWxkcmVuIiwiYWN0aXZlSW5kZXgiLCJsZW4iLCJMb2FkaW5nQmFyIiwibG9hZGluZyIsInNwaW4iLCJrZXlmcmFtZXMiLCJTcGlubmVyIiwiYm9yZGVyU2l6ZSIsImZvbnRGYW1pbHkiLCJmb250U2l6ZSIsInJhZGl1cyIsImxpbmsiLCJpbmZvIiwic3VjY2VzcyIsIndhcm5pbmciLCJkYXJrIiwibGlnaHQiLCJibGFja0JpcyIsImJsYWNrVGVyIiwid2hpdGVCaXMiLCJ3aGl0ZVRlciIsImdyZXlMaWdodCIsImdyZXlMaWdodGVyIiwibm9ybWFs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
