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
  }, props), React.createElement("g", {
    opacity: "0.6"
  }, React.createElement("g", null, React.createElement("path", {
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
    transform: "translate(479.999 716)",
    fill: "currentColor"
  })));
}

function Close(props) {
  return React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "26.998",
    height: "26.998",
    viewBox: "0 0 26.998 26.998",
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

export { theme as defaultTheme, normalized as normalizeStyle, Break, Container, Row, Col, Content, Button, ButtonGroup, Table, Box, Progress, AppBar, Tag, Hero, Tooltip, Card, Popover, Modal, ToastContainer as Toast, Tabs, LoadingBar, Spinner, Pre, Code, H1, Field, TextInput, Textarea, Checkbox, Select, Radio, Approved as IconApproved, ChevronLeftRound as IconChevronLeftRound, ChevronRightRound as IconChevronRightRound, FileRound as IconFileRound, Pencil as IconPencil, User as IconUser, Close as IconClose, SideMenu, MenuList, MenuLabel, findColorInvert, hamburger as hambuger, boxShadow, Arrow as arrow, setSize, mediaMobile, mediaTablet, mediaDesktop, mediaFullHD, mediaUntilFullHD };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlzaXRzLmpzIiwic291cmNlcyI6WyIuLi9zcmMvY29tcG9uZW50cy9HcmlkL0JyZWFrLnRzeCIsIi4uL3NyYy91dGlscy9tZWRpYS50cyIsIi4uL3NyYy9jb21wb25lbnRzL0dyaWQvQ29udGFpbmVyLnRzIiwiLi4vc3JjL2NvbXBvbmVudHMvR3JpZC9Db2wudHMiLCIuLi9zcmMvY29tcG9uZW50cy9HcmlkL1Jvdy50cyIsIi4uL3NyYy9jb21wb25lbnRzL0NvbnRlbnQvUHJlLnRzIiwiLi4vc3JjL2NvbXBvbmVudHMvQ29udGVudC9Db2RlLnRzIiwiLi4vc3JjL2NvbXBvbmVudHMvQ29udGVudC9IMS50cyIsIi4uL3NyYy9jb21wb25lbnRzL0NvbnRlbnQvaW5kZXgudHMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9saXNoZWQvbGliL2ludGVybmFsSGVscGVycy9fY3VycnkuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9saXNoZWQvbGliL2ludGVybmFsSGVscGVycy9fZ3VhcmQuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9saXNoZWQvbGliL2ludGVybmFsSGVscGVycy9faHNsVG9SZ2IuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9saXNoZWQvbGliL2ludGVybmFsSGVscGVycy9fbmFtZVRvSGV4LmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3BvbGlzaGVkL2xpYi9pbnRlcm5hbEhlbHBlcnMvX2Vycm9ycy5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb2xpc2hlZC9saWIvY29sb3IvcGFyc2VUb1JnYi5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb2xpc2hlZC9saWIvaW50ZXJuYWxIZWxwZXJzL19yZ2JUb0hzbC5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb2xpc2hlZC9saWIvY29sb3IvcGFyc2VUb0hzbC5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb2xpc2hlZC9saWIvaW50ZXJuYWxIZWxwZXJzL19yZWR1Y2VIZXhWYWx1ZS5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb2xpc2hlZC9saWIvaW50ZXJuYWxIZWxwZXJzL19udW1iZXJUb0hleC5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb2xpc2hlZC9saWIvaW50ZXJuYWxIZWxwZXJzL19oc2xUb0hleC5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb2xpc2hlZC9saWIvY29sb3IvaHNsLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3BvbGlzaGVkL2xpYi9jb2xvci9oc2xhLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3BvbGlzaGVkL2xpYi9jb2xvci9yZ2IuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9saXNoZWQvbGliL2NvbG9yL3JnYmEuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9saXNoZWQvbGliL2NvbG9yL3RvQ29sb3JTdHJpbmcuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9saXNoZWQvbGliL2NvbG9yL2Rhcmtlbi5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb2xpc2hlZC9saWIvY29sb3IvZ2V0THVtaW5hbmNlLmpzIiwiLi4vc3JjL3V0aWxzL2ZpbmRDb2xvckludmVydC50cyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb2xpc2hlZC9saWIvY29sb3IvdHJhbnNwYXJlbnRpemUuanMiLCIuLi9zcmMvdXRpbHMvYm94U2hhZG93LnRzIiwiLi4vc3JjL3V0aWxzL3NldFNpemUudHMiLCIuLi9zcmMvdXRpbHMvZGlzYWJsZWRDb2xvci50cyIsIi4uL3NyYy9jb21wb25lbnRzL0J1dHRvbi9pbmRleC50cyIsIi4uL3NyYy9jb21wb25lbnRzL0J1dHRvbi9CdXR0b25Hcm91cC50cyIsIi4uL3NyYy9jb21wb25lbnRzL1RhYmxlL2luZGV4LnRzIiwiLi4vc3JjL2NvbXBvbmVudHMvQm94L2luZGV4LnRzeCIsIi4uL3NyYy9jb21wb25lbnRzL1Byb2dyZXNzL2luZGV4LnRzeCIsIi4uL3NyYy9jb21wb25lbnRzL0Zvcm0vRmllbGQudHN4IiwiLi4vc3JjL3V0aWxzL2hhbWJ1Z2VyLnRzIiwiLi4vc3JjL3V0aWxzL2Fycm93LnRzIiwiLi4vc3JjL2NvbXBvbmVudHMvRm9ybS9IZWxwTWVzc2FnZS50c3giLCIuLi9zcmMvY29tcG9uZW50cy9Gb3JtL1RleHRJbnB1dC50c3giLCIuLi9zcmMvY29tcG9uZW50cy9Gb3JtL1RleHRhcmVhLnRzeCIsIi4uL3NyYy9jb21wb25lbnRzL0Zvcm0vQ2hlY2tib3gudHN4IiwiLi4vc3JjL2NvbXBvbmVudHMvRm9ybS9TZWxlY3QudHN4IiwiLi4vc3JjL2NvbXBvbmVudHMvRm9ybS9SYWRpby50c3giLCIuLi9zcmMvY29tcG9uZW50cy9JY29ucy9BcHByb3ZlZC50c3giLCIuLi9zcmMvY29tcG9uZW50cy9JY29ucy9DaGV2cm9uTGVmdFJvdW5kLnRzeCIsIi4uL3NyYy9jb21wb25lbnRzL0ljb25zL0NoZXZyb25SaWdodFJvdW5kLnRzeCIsIi4uL3NyYy9jb21wb25lbnRzL0ljb25zL0ZpbGVSb3VuZC50c3giLCIuLi9zcmMvY29tcG9uZW50cy9JY29ucy9QZW5jaWwudHN4IiwiLi4vc3JjL2NvbXBvbmVudHMvSWNvbnMvVXNlci50c3giLCIuLi9zcmMvY29tcG9uZW50cy9JY29ucy9DbG9zZS50c3giLCIuLi9zcmMvdXRpbHMvc2V0QWxpZ24udHMiLCIuLi9zcmMvY29tcG9uZW50cy9BcHBCYXIvaW5kZXgudHN4IiwiLi4vc3JjL2NvbXBvbmVudHMvVGFnL2luZGV4LnRzeCIsIi4uL3NyYy9jb21wb25lbnRzL0hlcm8vaW5kZXgudHN4IiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3JlYWN0LWlzL2Nqcy9yZWFjdC1pcy5wcm9kdWN0aW9uLm1pbi5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZWFjdC1pcy9janMvcmVhY3QtaXMuZGV2ZWxvcG1lbnQuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVhY3QtaXMvaW5kZXguanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvb2JqZWN0LWFzc2lnbi9pbmRleC5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2xpYi9SZWFjdFByb3BUeXBlc1NlY3JldC5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2NoZWNrUHJvcFR5cGVzLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvZmFjdG9yeVdpdGhUeXBlQ2hlY2tlcnMuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9mYWN0b3J5V2l0aFRocm93aW5nU2hpbXMuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9pbmRleC5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9kb20taGVscGVycy9jbGFzcy9oYXNDbGFzcy5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9kb20taGVscGVycy9jbGFzcy9hZGRDbGFzcy5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9kb20taGVscGVycy9jbGFzcy9yZW1vdmVDbGFzcy5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZWFjdC1saWZlY3ljbGVzLWNvbXBhdC9yZWFjdC1saWZlY3ljbGVzLWNvbXBhdC5lcy5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZWFjdC10cmFuc2l0aW9uLWdyb3VwL3V0aWxzL1Byb3BUeXBlcy5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZWFjdC10cmFuc2l0aW9uLWdyb3VwL1RyYW5zaXRpb24uanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVhY3QtdHJhbnNpdGlvbi1ncm91cC9DU1NUcmFuc2l0aW9uLmpzIiwiLi4vc3JjL2NvbXBvbmVudHMvVG9vbHRpcC9pbmRleC50c3giLCIuLi9zcmMvY29tcG9uZW50cy9TaWRlTWVudS9pbmRleC50c3giLCIuLi9zcmMvY29tcG9uZW50cy9DYXJkL2luZGV4LnRzeCIsIi4uL3NyYy9jb21wb25lbnRzL1BvcG92ZXIvaW5kZXgudHN4IiwiLi4vc3JjL2NvbXBvbmVudHMvTW9kYWwvaW5kZXgudHN4IiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3JlYWN0LXRyYW5zaXRpb24tZ3JvdXAvdXRpbHMvQ2hpbGRNYXBwaW5nLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3JlYWN0LXRyYW5zaXRpb24tZ3JvdXAvVHJhbnNpdGlvbkdyb3VwLmpzIiwiLi4vc3JjL2NvbXBvbmVudHMvVG9hc3QvaW5kZXgudHN4IiwiLi4vc3JjL2NvbXBvbmVudHMvVGFicy9pbmRleC50c3giLCIuLi9zcmMvY29tcG9uZW50cy9Mb2FkaW5nL0Jhci50c3giLCIuLi9zcmMvY29tcG9uZW50cy9Mb2FkaW5nL1NwaW5uZXIudHN4IiwiLi4vc3JjL2NvbXBvbmVudHMvaW5kZXgudHMiLCIuLi9zcmMvdGhlbWUvZGVmYXVsdC50cyIsIi4uL3NyYy9zdHlsZXMvbm9ybWFsaXplLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJyZWFrKCkge1xuICByZXR1cm4gPGRpdiBzdHlsZT17eyB3aWR0aDogJzEwMCUnLCBoZWlnaHQ6IDAgfX0gLz47XG59O1xuIiwiaW1wb3J0IHsgVGhlbWVUeXBlIH0gZnJvbSAnLi4vdHlwZXMnO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICB0aGVtZTogVGhlbWVUeXBlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWVkaWFNb2JpbGUoeyB0aGVtZSB9OiBQcm9wcykge1xuICByZXR1cm4gYEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICR7dGhlbWUucmVzcG9uc2l2ZSA/IHRoZW1lLm1vYmlsZSA6IDB9cHgpYDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1lZGlhVGFibGV0KHsgdGhlbWUgfTogUHJvcHMpIHtcbiAgcmV0dXJuIGBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAke3RoZW1lLnJlc3BvbnNpdmUgPyB0aGVtZS50YWJsZXQgOiAwfXB4KWA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZWRpYURlc2t0b3AoeyB0aGVtZSB9OiBQcm9wcykge1xuICByZXR1cm4gYEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICR7dGhlbWUucmVzcG9uc2l2ZSA/IHRoZW1lLmRlc2t0b3AgOiAwfXB4KWA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZWRpYUZ1bGxIRCh7IHRoZW1lIH06IFByb3BzKSB7XG4gIHJldHVybiBgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJHt0aGVtZS5yZXNwb25zaXZlID8gdGhlbWUuZnVsbGhkIDogMH1weClgO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWVkaWFVbnRpbEZ1bGxIRCh7IHRoZW1lIH06IFByb3BzKSB7XG4gIHJldHVybiBgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogJHt0aGVtZS5yZXNwb25zaXZlID8gdGhlbWUuZnVsbGhkIDogMH1weClgO1xufVxuIiwiaW1wb3J0IHN0eWxlZCwgeyBjc3MgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgeyBtZWRpYUZ1bGxIRCwgbWVkaWFUYWJsZXQsIG1lZGlhRGVza3RvcCwgbWVkaWFNb2JpbGUgfSBmcm9tICcuLi8uLi91dGlscy9tZWRpYSc7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIC8qKiAgKi9cbiAgZmx1aWQ/OiBib29sZWFuO1xufVxuXG5mdW5jdGlvbiBzZXRSZXNwb25zaXZlKHsgZmx1aWQgfTogUHJvcHMpOiBhbnkge1xuICBpZiAoZmx1aWQpIHtcbiAgICByZXR1cm4gY3NzYFxuICAgICAgJHttZWRpYU1vYmlsZX0ge1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwLjVyZW07XG4gICAgICAgIHBhZGRpbmctbGVmdDogMC41cmVtO1xuICAgICAgfVxuICAgICAgJHttZWRpYURlc2t0b3B9IHtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMC43NXJlbTtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwLjc1cmVtO1xuICAgICAgfVxuICAgICAgJHttZWRpYUZ1bGxIRH0ge1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwLjc1cmVtO1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDAuNzVyZW07XG4gICAgICB9XG4gICAgYDtcbiAgfVxuXG4gIHJldHVybiBjc3NgXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICR7bWVkaWFNb2JpbGV9IHtcbiAgICAgIG1heC13aWR0aDogJHsoeyB0aGVtZSB9OiBhbnkpID0+IHRoZW1lLm1vYmlsZSAtICgyICogdGhlbWUuc21hbGxHdXR0ZXIpfXB4O1xuICAgIH1cbiAgICAke21lZGlhVGFibGV0fSB7XG4gICAgICBtYXgtd2lkdGg6ICR7KHsgdGhlbWUgfTogYW55KSA9PiB0aGVtZS50YWJsZXQgLSAoMiAqIHRoZW1lLnNtYWxsR3V0dGVyKX1weDtcbiAgICB9XG4gICAgJHttZWRpYURlc2t0b3B9IHtcbiAgICAgIG1heC13aWR0aDogJHsoeyB0aGVtZSB9OiBhbnkpID0+IHRoZW1lLmRlc2t0b3AgLSAoMiAqIHRoZW1lLmd1dHRlcil9cHg7XG4gICAgfVxuICAgICR7bWVkaWFGdWxsSER9IHtcbiAgICAgIG1heC13aWR0aDogJHsoeyB0aGVtZSB9OiBhbnkpID0+IHRoZW1lLmZ1bGxoZCAtICgyICogdGhlbWUuZ3V0dGVyKX1weDtcbiAgICB9XG4gIGA7XG59XG5cbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXY8UHJvcHM+YFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuXG4gICR7c2V0UmVzcG9uc2l2ZX1cbmA7XG5Db250YWluZXIuZGlzcGxheU5hbWUgPSAnQ29udGFpbmVyJztcbkNvbnRhaW5lci5kZWZhdWx0UHJvcHMgPSB7XG4gIGZsdWlkOiBmYWxzZSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRhaW5lcjtcbiIsImltcG9ydCBzdHlsZWQsIHsgY3NzIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgbWVkaWFNb2JpbGUsIG1lZGlhVGFibGV0IH0gZnJvbSAnLi4vLi4vdXRpbHMvbWVkaWEnO1xuaW1wb3J0IHsgQ29sU2l6ZVR5cGUgfSBmcm9tICcuLi8uLi90eXBlcyc7XG5cbmludGVyZmFjZSBDb2xQcm9wcyB7XG4gIC8qKiDlm7rlrprjga7luYXjgpLmjIflrprjgZnjgovloLTlkIggKi9cbiAgbmFycm93PzogYm9vbGVhbjtcbiAgLyoqIDEtMTLjga7jgrXjgqTjgrogKi9cbiAgc2l6ZT86IENvbFNpemVUeXBlO1xuICAvKiogMS0xMuOBruW3puOBrm9mZnNldCAqL1xuICBvZmZzZXQ/OiBDb2xTaXplVHlwZTtcbiAgLyoqIDEtMTLln7rmupbjga7jgrXjgqTjgrrjgpLnlLvpnaLjgrXjgqTjgrrjga7jgojjgaPjgablj6/lpInjgavjgZnjgosgKi9cbiAgYXV0bz86IGJvb2xlYW47XG59XG5cbmZ1bmN0aW9uIHBhcmNlbnRhZ2UodmFsdWU/OiBDb2xTaXplVHlwZSkge1xuICBpZiAoIXZhbHVlKSByZXR1cm4gMDtcbiAgaWYgKHZhbHVlID49IDEyKSByZXR1cm4gMTAwO1xuICByZXR1cm4gTWF0aC5jZWlsKCh2YWx1ZSAvIDEyKSAqIDEwMCAqIDEwMDAwMCkgLyAxMDAwMDA7XG59XG5cbmZ1bmN0aW9uIHJlbmRlclNpemUoeyBzaXplLCBuYXJyb3csIGF1dG8sIG9mZnNldCB9OiBDb2xQcm9wcykge1xuICBpZiAobmFycm93KSByZXR1cm4gbnVsbDtcbiAgaWYgKCFzaXplIHx8IHNpemUgPCAxIHx8IHNpemUgPiAxMikge1xuICAgIHJldHVybiBjc3NgXG4gICAgICB3aWR0aDogYXV0bztcbiAgICAgIG1heC13aWR0aDogbm9uZTtcbiAgICBgO1xuICB9XG5cbiAgY29uc3QgdmFsdWUgPSBwYXJjZW50YWdlKHNpemUpO1xuICBjb25zdCBvZmZWYWwgPSBvZmZzZXQgPyBwYXJjZW50YWdlKG9mZnNldCkgOiAwO1xuICBjb25zdCBhdXRvU2l6ZSA9IHZhbHVlID4gMzMgPyAxMDAgOiB2YWx1ZSAqIDM7XG4gIHJldHVybiBjc3NgXG4gICAgd2lkdGg6ICR7dmFsdWV9JTtcbiAgICBtYXgtd2lkdGg6ICR7dmFsdWV9JTtcbiAgICAke29mZnNldCA/IGBtYXJnaW4tbGVmdDogJHtvZmZWYWx9JTtgIDoge319XG5cbiAgICAke21lZGlhTW9iaWxlfSB7XG4gICAgICB3aWR0aDogJHthdXRvU2l6ZX0lO1xuICAgICAgbWF4LXdpZHRoOiAke2F1dG9TaXplfSU7XG4gICAgICAke29mZnNldCA/IGBtYXJnaW4tbGVmdDogMDtgIDoge319XG4gICAgfVxuICBgO1xufVxuXG5jb25zdCBDb2wgPSBzdHlsZWQuZGl2PENvbFByb3BzPmBcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1pbi1oZWlnaHQ6IDFweDtcblxuICAkeyh7IG5hcnJvdyB9KSA9PiBuYXJyb3cgPyAnZmxleDogbm9uZTsnIDoge319XG4gICR7KHsgb2Zmc2V0IH0pID0+IG9mZnNldCA/IGBtYXJnaW4tbGVmdDogJHtwYXJjZW50YWdlKG9mZnNldCl9JTtgIDoge319XG5cbiAgJHtyZW5kZXJTaXplfVxuXG4gIHBhZGRpbmc6IDAuNzVyZW07XG5cbiAgJHttZWRpYVRhYmxldH0ge1xuICAgIHBhZGRpbmc6IDAuNXJlbTtcbiAgfVxuYDtcblxuQ29sLmRpc3BsYXlOYW1lID0gJ0NvbCc7XG5cbmV4cG9ydCBkZWZhdWx0IENvbDtcbiIsImltcG9ydCBzdHlsZWQsIHsgY3NzIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IENvbCBmcm9tICcuL0NvbCc7XG5pbXBvcnQgeyBtZWRpYUZ1bGxIRCwgbWVkaWFUYWJsZXQgfSBmcm9tICcuLi8uLi91dGlscy9tZWRpYSc7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIC8qKiDlm7rlrprluYUgKi9cbiAgd2lkdGg/OiBzdHJpbmc7XG4gIC8qKiDlkJHjgY/mlbDjga7ooYzjgaflr77lv5zjgafjgY3jgovjgojjgYbjgavjgZnjgosgKi9cbiAgbXVsdGlsaW5lPzogYm9vbGVhbjtcbiAgLyoqIOe4puOBruS4reWkruaPg+OBiOOBq+OBmeOCiyAqL1xuICB2Y2VudGVyPzogYm9vbGVhbjtcbiAgLyoqIOaoquW5heOBruS4reWkruaPg+OBiOOBq+OBmeOCiyAqL1xuICBjZW50ZXI/OiBib29sZWFuO1xuICAvKiogQ29s44Gu6ZaT6ZqU44KS44Gq44GP44GZICovXG4gIG5vR3V0dGVyPzogYm9vbGVhbjtcbn1cblxuZnVuY3Rpb24gcmVuZGVyR3V0dGVyKHsgbm9HdXR0ZXIgfTogUHJvcHMpIHtcbiAgaWYgKG5vR3V0dGVyKSB7XG4gICAgcmV0dXJuIGNzc2BcbiAgICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuXG4gICAgICA+ICR7Q29sfSB7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDA7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICAgIH1cbiAgICBgO1xuICB9XG4gIHJldHVybiBjc3NgXG4gICAgJHttZWRpYVRhYmxldH0ge1xuICAgICAgbWFyZ2luLWxlZnQ6IC0wLjVyZW07XG4gICAgICBtYXJnaW4tcmlnaHQ6IC0wLjVyZW07XG4gICAgICBtYXJnaW4tdG9wOiAtMC41cmVtO1xuXG4gICAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAtMC41cmVtO1xuICAgICAgfVxuXG4gICAgICAmOm5vdCg6bGFzdC1jaGlsZCkge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG4gICAgICB9XG4gICAgfVxuXG4gICAgJHttZWRpYUZ1bGxIRH0ge1xuICAgICAgbWFyZ2luLWxlZnQ6IC0wLjc1cmVtO1xuICAgICAgbWFyZ2luLXJpZ2h0OiAtMC43NXJlbTtcbiAgICAgIG1hcmdpbi10b3A6IC0wLjc1cmVtO1xuXG4gICAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAtMC43NXJlbTtcbiAgICAgIH1cblxuICAgICAgJjpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMC43NXJlbTtcbiAgICAgIH1cbiAgICB9XG4gIGA7XG59XG5cbmNvbnN0IFJvdyA9IHN0eWxlZC5kaXY8UHJvcHM+YFxuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAgZmxleC13cmFwOiB3cmFwO1xuXG4gICR7KHsgdmNlbnRlciB9KSA9PiB2Y2VudGVyID8gJ2FsaWduLWl0ZW1zOiBjZW50ZXI7JyA6ICcnfVxuICAkeyh7IGNlbnRlciB9KSA9PiBjZW50ZXIgPyAnanVzdGlmeS1jb250ZW50OiBjZW50ZXI7JyA6ICcnfVxuXG4gICR7cmVuZGVyR3V0dGVyfVxuYDtcblxuUm93LmRpc3BsYXlOYW1lID0gJ1Jvdyc7XG5cbmV4cG9ydCBkZWZhdWx0IFJvdztcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5jb25zdCBQcmUgPSBzdHlsZWQucHJlYFxuICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XG4gIG92ZXJmbG93LXg6IGF1dG87XG4gIHBhZGRpbmc6IDEuMjVlbSAxLjVlbTtcbiAgd2hpdGUtc3BhY2U6IHByZTtcbiAgd29yZC13cmFwOiBub3JtYWw7XG5cbiAgJjpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XG4gIH1cbmA7XG5QcmUuZGlzcGxheU5hbWUgPSAnUHJlJztcblxuZXhwb3J0IGRlZmF1bHQgUHJlO1xuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmNvbnN0IENvZGUgPSBzdHlsZWQuY29kZWBcbiAgYmFja2dyb3VuZC1jb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5iYWNrZ3JvdW5kfTtcbiAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuZGFuZ2VyfTtcbiAgZm9udC1zaXplOiAuODc1ZW07XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHBhZGRpbmc6IC4yNWVtIC41ZW0gLjI1ZW07XG5gO1xuXG5Db2RlLmRpc3BsYXlOYW1lID0gJ0NvZGUnO1xuXG5leHBvcnQgZGVmYXVsdCBDb2RlO1xuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmNvbnN0IEgxID0gc3R5bGVkLmgxYFxuICBmb250LXNpemU6IDJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMC41ZW07XG4gIHBhZGRpbmctbGVmdDogMXJlbTtcblxuICBib3JkZXItbGVmdDogMXJlbSBzb2xpZDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkO1xuICBib3JkZXItY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuYm9yZGVyfTtcbmA7XG5IMS5kaXNwbGF5TmFtZSA9ICdIMSc7XG5cbmV4cG9ydCBkZWZhdWx0IEgxO1xuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmNvbnN0IENvbnRlbnQgPSBzdHlsZWQuZGl2YFxuICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS50ZXh0fTtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcblxuICBsaSArIGxpIHtcbiAgICBtYXJnaW4tdG9wOiAwLjI1ZW07XG4gIH1cblxuICBwLFxuICBkbCxcbiAgb2wsXG4gIHVsLFxuICBibG9ja3F1b3RlLFxuICBwcmUsXG4gIHRhYmxlIHtcbiAgICAmOm5vdCg6bGFzdC1jaGlsZCkge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMWVtO1xuICAgIH1cbiAgfVxuXG4gIGgxLFxuICBoMixcbiAgaDMsXG4gIGg0LFxuICBoNSxcbiAgaDYge1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgbGluZS1oZWlnaHQ6IDEuMTI1O1xuICB9XG5cbiAgaDEge1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcbiAgfVxuXG4gIGgyIHtcbiAgICBmb250LXNpemU6IDEuNzVlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjU3MTRlbTtcblxuICAgICY6bm90KDpmaXJzdC1jaGlsZCkge1xuICAgICAgbWFyZ2luLXRvcDogMS4xNDI4ZW07XG4gICAgfVxuICB9XG5cbiAgaDMge1xuICAgIGZvbnQtc2l6ZTogMS41ZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMC42NjY2ZW07XG5cbiAgICAmOm5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgICAgIG1hcmdpbi10b3A6IDEuMzMzM2VtO1xuICAgIH1cbiAgfVxuXG4gIGg0IHtcbiAgICBmb250LXNpemU6IDEuMjVlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjhlbTtcbiAgfVxuXG4gIGg1IHtcbiAgICBmb250LXNpemU6IDEuMTI1ZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMC44ODg4ZW07XG4gIH1cblxuICBoNiB7XG4gICAgZm9udC1zaXplOiAxZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMWVtO1xuICB9XG5cbiAgb2wge1xuICAgIGxpc3Qtc3R5bGU6IGRlY2ltYWwgb3V0c2lkZTtcbiAgICBtYXJnaW4tbGVmdDogMmVtO1xuICAgIG1hcmdpbi10b3A6IDFlbTtcbiAgfVxuXG4gIHVsIHtcbiAgICBsaXN0LXN0eWxlOiBkaXNjIG91dHNpZGU7XG4gICAgbWFyZ2luLWxlZnQ6IDJlbTtcbiAgICBtYXJnaW4tdG9wOiAxZW07XG4gICAgdWwge1xuICAgICAgbGlzdC1zdHlsZS10eXBlOiBjaXJjbGU7XG4gICAgICBtYXJnaW4tdG9wOiAwLjVlbTtcbiAgICAgIHVsIHtcbiAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBzcXVhcmU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZGQge1xuICAgIG1hcmdpbi1sZWZ0OiAyZW07XG4gIH1cblxuICB0YWJsZSB7XG4gICAgd2lkdGg6IDEwMCU7XG5cbiAgICB0ZCwgdGgge1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5ib3JkZXJ9O1xuICAgICAgYm9yZGVyLXdpZHRoOiAwIDAgMXB4O1xuICAgICAgcGFkZGluZzogMC41ZW0gMC43NWVtO1xuICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICB9XG5cbiAgICB0aCB7XG4gICAgICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS50ZXh0fTtcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgfVxuXG4gICAgdGhlYWQge1xuICAgICAgdGQsIHRoIHtcbiAgICAgICAgYm9yZGVyLXdpZHRoOiAwIDAgMnB4O1xuICAgICAgICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS50ZXh0fTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0Zm9vdCB7XG4gICAgICB0ZCwgdGgge1xuICAgICAgICBib3JkZXItd2lkdGg6IDJweCAwIDA7XG4gICAgICAgIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnRleHR9O1xuICAgICAgfVxuICAgIH1cblxuICAgIHRib2R5ID4gdHI6bGFzdC1jaGlsZHtcbiAgICAgIHRkLCB0aCB7XG4gICAgICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDA7XG4gICAgICB9XG4gICAgfVxuICB9XG5gO1xuQ29udGVudC5kaXNwbGF5TmFtZSA9ICdDb250ZW50JztcblxuZXhwb3J0IHsgZGVmYXVsdCBhcyBQcmUgfSBmcm9tICcuL1ByZSc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIENvZGUgfSBmcm9tICcuL0NvZGUnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBIMSB9IGZyb20gJy4vSDEnO1xuXG5leHBvcnQgZGVmYXVsdCBDb250ZW50O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSBjdXJyeTtcblxuLy8gVHlwZSBkZWZpbml0aW9ucyB0YWtlbiBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9nY2FudGkvZmxvdy1zdGF0aWMtbGFuZC9ibG9iL21hc3Rlci9zcmMvRnVuLmpzXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlZGVjbGFyZVxuZnVuY3Rpb24gY3VycmllZChmLCBsZW5ndGgsIGFjYykge1xuICByZXR1cm4gZnVuY3Rpb24gZm4oKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1yZXN0LXBhcmFtc1xuICAgIHZhciBjb21iaW5lZCA9IGFjYy5jb25jYXQoQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKSk7XG4gICAgcmV0dXJuIGNvbWJpbmVkLmxlbmd0aCA+PSBsZW5ndGggPyBmLmFwcGx5KHRoaXMsIGNvbWJpbmVkKSA6IGN1cnJpZWQoZiwgbGVuZ3RoLCBjb21iaW5lZCk7XG4gIH07XG59IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZWRlY2xhcmVcblxuXG5mdW5jdGlvbiBjdXJyeShmKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tcmVkZWNsYXJlXG4gIHJldHVybiBjdXJyaWVkKGYsIGYubGVuZ3RoLCBbXSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG5mdW5jdGlvbiBndWFyZChsb3dlckJvdW5kYXJ5LCB1cHBlckJvdW5kYXJ5LCB2YWx1ZSkge1xuICByZXR1cm4gTWF0aC5tYXgobG93ZXJCb3VuZGFyeSwgTWF0aC5taW4odXBwZXJCb3VuZGFyeSwgdmFsdWUpKTtcbn1cblxudmFyIF9kZWZhdWx0ID0gZ3VhcmQ7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG5mdW5jdGlvbiBjb2xvclRvSW50KGNvbG9yKSB7XG4gIHJldHVybiBNYXRoLnJvdW5kKGNvbG9yICogMjU1KTtcbn1cblxuZnVuY3Rpb24gY29udmVydFRvSW50KHJlZCwgZ3JlZW4sIGJsdWUpIHtcbiAgcmV0dXJuIGNvbG9yVG9JbnQocmVkKSArIFwiLFwiICsgY29sb3JUb0ludChncmVlbikgKyBcIixcIiArIGNvbG9yVG9JbnQoYmx1ZSk7XG59XG5cbmZ1bmN0aW9uIGhzbFRvUmdiKGh1ZSwgc2F0dXJhdGlvbiwgbGlnaHRuZXNzLCBjb252ZXJ0KSB7XG4gIGlmIChjb252ZXJ0ID09PSB2b2lkIDApIHtcbiAgICBjb252ZXJ0ID0gY29udmVydFRvSW50O1xuICB9XG5cbiAgaWYgKHNhdHVyYXRpb24gPT09IDApIHtcbiAgICAvLyBhY2hyb21hdGljXG4gICAgcmV0dXJuIGNvbnZlcnQobGlnaHRuZXNzLCBsaWdodG5lc3MsIGxpZ2h0bmVzcyk7XG4gIH0gLy8gZm9ybXVsYXIgZnJvbSBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9IU0xfYW5kX0hTVlxuXG5cbiAgdmFyIGh1ZVByaW1lID0gaHVlICUgMzYwIC8gNjA7XG4gIHZhciBjaHJvbWEgPSAoMSAtIE1hdGguYWJzKDIgKiBsaWdodG5lc3MgLSAxKSkgKiBzYXR1cmF0aW9uO1xuICB2YXIgc2Vjb25kQ29tcG9uZW50ID0gY2hyb21hICogKDEgLSBNYXRoLmFicyhodWVQcmltZSAlIDIgLSAxKSk7XG4gIHZhciByZWQgPSAwO1xuICB2YXIgZ3JlZW4gPSAwO1xuICB2YXIgYmx1ZSA9IDA7XG5cbiAgaWYgKGh1ZVByaW1lID49IDAgJiYgaHVlUHJpbWUgPCAxKSB7XG4gICAgcmVkID0gY2hyb21hO1xuICAgIGdyZWVuID0gc2Vjb25kQ29tcG9uZW50O1xuICB9IGVsc2UgaWYgKGh1ZVByaW1lID49IDEgJiYgaHVlUHJpbWUgPCAyKSB7XG4gICAgcmVkID0gc2Vjb25kQ29tcG9uZW50O1xuICAgIGdyZWVuID0gY2hyb21hO1xuICB9IGVsc2UgaWYgKGh1ZVByaW1lID49IDIgJiYgaHVlUHJpbWUgPCAzKSB7XG4gICAgZ3JlZW4gPSBjaHJvbWE7XG4gICAgYmx1ZSA9IHNlY29uZENvbXBvbmVudDtcbiAgfSBlbHNlIGlmIChodWVQcmltZSA+PSAzICYmIGh1ZVByaW1lIDwgNCkge1xuICAgIGdyZWVuID0gc2Vjb25kQ29tcG9uZW50O1xuICAgIGJsdWUgPSBjaHJvbWE7XG4gIH0gZWxzZSBpZiAoaHVlUHJpbWUgPj0gNCAmJiBodWVQcmltZSA8IDUpIHtcbiAgICByZWQgPSBzZWNvbmRDb21wb25lbnQ7XG4gICAgYmx1ZSA9IGNocm9tYTtcbiAgfSBlbHNlIGlmIChodWVQcmltZSA+PSA1ICYmIGh1ZVByaW1lIDwgNikge1xuICAgIHJlZCA9IGNocm9tYTtcbiAgICBibHVlID0gc2Vjb25kQ29tcG9uZW50O1xuICB9XG5cbiAgdmFyIGxpZ2h0bmVzc01vZGlmaWNhdGlvbiA9IGxpZ2h0bmVzcyAtIGNocm9tYSAvIDI7XG4gIHZhciBmaW5hbFJlZCA9IHJlZCArIGxpZ2h0bmVzc01vZGlmaWNhdGlvbjtcbiAgdmFyIGZpbmFsR3JlZW4gPSBncmVlbiArIGxpZ2h0bmVzc01vZGlmaWNhdGlvbjtcbiAgdmFyIGZpbmFsQmx1ZSA9IGJsdWUgKyBsaWdodG5lc3NNb2RpZmljYXRpb247XG4gIHJldHVybiBjb252ZXJ0KGZpbmFsUmVkLCBmaW5hbEdyZWVuLCBmaW5hbEJsdWUpO1xufVxuXG52YXIgX2RlZmF1bHQgPSBoc2xUb1JnYjtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG52YXIgbmFtZWRDb2xvck1hcCA9IHtcbiAgYWxpY2VibHVlOiAnZjBmOGZmJyxcbiAgYW50aXF1ZXdoaXRlOiAnZmFlYmQ3JyxcbiAgYXF1YTogJzAwZmZmZicsXG4gIGFxdWFtYXJpbmU6ICc3ZmZmZDQnLFxuICBhenVyZTogJ2YwZmZmZicsXG4gIGJlaWdlOiAnZjVmNWRjJyxcbiAgYmlzcXVlOiAnZmZlNGM0JyxcbiAgYmxhY2s6ICcwMDAnLFxuICBibGFuY2hlZGFsbW9uZDogJ2ZmZWJjZCcsXG4gIGJsdWU6ICcwMDAwZmYnLFxuICBibHVldmlvbGV0OiAnOGEyYmUyJyxcbiAgYnJvd246ICdhNTJhMmEnLFxuICBidXJseXdvb2Q6ICdkZWI4ODcnLFxuICBjYWRldGJsdWU6ICc1ZjllYTAnLFxuICBjaGFydHJldXNlOiAnN2ZmZjAwJyxcbiAgY2hvY29sYXRlOiAnZDI2OTFlJyxcbiAgY29yYWw6ICdmZjdmNTAnLFxuICBjb3JuZmxvd2VyYmx1ZTogJzY0OTVlZCcsXG4gIGNvcm5zaWxrOiAnZmZmOGRjJyxcbiAgY3JpbXNvbjogJ2RjMTQzYycsXG4gIGN5YW46ICcwMGZmZmYnLFxuICBkYXJrYmx1ZTogJzAwMDA4YicsXG4gIGRhcmtjeWFuOiAnMDA4YjhiJyxcbiAgZGFya2dvbGRlbnJvZDogJ2I4ODYwYicsXG4gIGRhcmtncmF5OiAnYTlhOWE5JyxcbiAgZGFya2dyZWVuOiAnMDA2NDAwJyxcbiAgZGFya2dyZXk6ICdhOWE5YTknLFxuICBkYXJra2hha2k6ICdiZGI3NmInLFxuICBkYXJrbWFnZW50YTogJzhiMDA4YicsXG4gIGRhcmtvbGl2ZWdyZWVuOiAnNTU2YjJmJyxcbiAgZGFya29yYW5nZTogJ2ZmOGMwMCcsXG4gIGRhcmtvcmNoaWQ6ICc5OTMyY2MnLFxuICBkYXJrcmVkOiAnOGIwMDAwJyxcbiAgZGFya3NhbG1vbjogJ2U5OTY3YScsXG4gIGRhcmtzZWFncmVlbjogJzhmYmM4ZicsXG4gIGRhcmtzbGF0ZWJsdWU6ICc0ODNkOGInLFxuICBkYXJrc2xhdGVncmF5OiAnMmY0ZjRmJyxcbiAgZGFya3NsYXRlZ3JleTogJzJmNGY0ZicsXG4gIGRhcmt0dXJxdW9pc2U6ICcwMGNlZDEnLFxuICBkYXJrdmlvbGV0OiAnOTQwMGQzJyxcbiAgZGVlcHBpbms6ICdmZjE0OTMnLFxuICBkZWVwc2t5Ymx1ZTogJzAwYmZmZicsXG4gIGRpbWdyYXk6ICc2OTY5NjknLFxuICBkaW1ncmV5OiAnNjk2OTY5JyxcbiAgZG9kZ2VyYmx1ZTogJzFlOTBmZicsXG4gIGZpcmVicmljazogJ2IyMjIyMicsXG4gIGZsb3JhbHdoaXRlOiAnZmZmYWYwJyxcbiAgZm9yZXN0Z3JlZW46ICcyMjhiMjInLFxuICBmdWNoc2lhOiAnZmYwMGZmJyxcbiAgZ2FpbnNib3JvOiAnZGNkY2RjJyxcbiAgZ2hvc3R3aGl0ZTogJ2Y4ZjhmZicsXG4gIGdvbGQ6ICdmZmQ3MDAnLFxuICBnb2xkZW5yb2Q6ICdkYWE1MjAnLFxuICBncmF5OiAnODA4MDgwJyxcbiAgZ3JlZW46ICcwMDgwMDAnLFxuICBncmVlbnllbGxvdzogJ2FkZmYyZicsXG4gIGdyZXk6ICc4MDgwODAnLFxuICBob25leWRldzogJ2YwZmZmMCcsXG4gIGhvdHBpbms6ICdmZjY5YjQnLFxuICBpbmRpYW5yZWQ6ICdjZDVjNWMnLFxuICBpbmRpZ286ICc0YjAwODInLFxuICBpdm9yeTogJ2ZmZmZmMCcsXG4gIGtoYWtpOiAnZjBlNjhjJyxcbiAgbGF2ZW5kZXI6ICdlNmU2ZmEnLFxuICBsYXZlbmRlcmJsdXNoOiAnZmZmMGY1JyxcbiAgbGF3bmdyZWVuOiAnN2NmYzAwJyxcbiAgbGVtb25jaGlmZm9uOiAnZmZmYWNkJyxcbiAgbGlnaHRibHVlOiAnYWRkOGU2JyxcbiAgbGlnaHRjb3JhbDogJ2YwODA4MCcsXG4gIGxpZ2h0Y3lhbjogJ2UwZmZmZicsXG4gIGxpZ2h0Z29sZGVucm9keWVsbG93OiAnZmFmYWQyJyxcbiAgbGlnaHRncmF5OiAnZDNkM2QzJyxcbiAgbGlnaHRncmVlbjogJzkwZWU5MCcsXG4gIGxpZ2h0Z3JleTogJ2QzZDNkMycsXG4gIGxpZ2h0cGluazogJ2ZmYjZjMScsXG4gIGxpZ2h0c2FsbW9uOiAnZmZhMDdhJyxcbiAgbGlnaHRzZWFncmVlbjogJzIwYjJhYScsXG4gIGxpZ2h0c2t5Ymx1ZTogJzg3Y2VmYScsXG4gIGxpZ2h0c2xhdGVncmF5OiAnNzg5JyxcbiAgbGlnaHRzbGF0ZWdyZXk6ICc3ODknLFxuICBsaWdodHN0ZWVsYmx1ZTogJ2IwYzRkZScsXG4gIGxpZ2h0eWVsbG93OiAnZmZmZmUwJyxcbiAgbGltZTogJzBmMCcsXG4gIGxpbWVncmVlbjogJzMyY2QzMicsXG4gIGxpbmVuOiAnZmFmMGU2JyxcbiAgbWFnZW50YTogJ2YwZicsXG4gIG1hcm9vbjogJzgwMDAwMCcsXG4gIG1lZGl1bWFxdWFtYXJpbmU6ICc2NmNkYWEnLFxuICBtZWRpdW1ibHVlOiAnMDAwMGNkJyxcbiAgbWVkaXVtb3JjaGlkOiAnYmE1NWQzJyxcbiAgbWVkaXVtcHVycGxlOiAnOTM3MGRiJyxcbiAgbWVkaXVtc2VhZ3JlZW46ICczY2IzNzEnLFxuICBtZWRpdW1zbGF0ZWJsdWU6ICc3YjY4ZWUnLFxuICBtZWRpdW1zcHJpbmdncmVlbjogJzAwZmE5YScsXG4gIG1lZGl1bXR1cnF1b2lzZTogJzQ4ZDFjYycsXG4gIG1lZGl1bXZpb2xldHJlZDogJ2M3MTU4NScsXG4gIG1pZG5pZ2h0Ymx1ZTogJzE5MTk3MCcsXG4gIG1pbnRjcmVhbTogJ2Y1ZmZmYScsXG4gIG1pc3R5cm9zZTogJ2ZmZTRlMScsXG4gIG1vY2Nhc2luOiAnZmZlNGI1JyxcbiAgbmF2YWpvd2hpdGU6ICdmZmRlYWQnLFxuICBuYXZ5OiAnMDAwMDgwJyxcbiAgb2xkbGFjZTogJ2ZkZjVlNicsXG4gIG9saXZlOiAnODA4MDAwJyxcbiAgb2xpdmVkcmFiOiAnNmI4ZTIzJyxcbiAgb3JhbmdlOiAnZmZhNTAwJyxcbiAgb3JhbmdlcmVkOiAnZmY0NTAwJyxcbiAgb3JjaGlkOiAnZGE3MGQ2JyxcbiAgcGFsZWdvbGRlbnJvZDogJ2VlZThhYScsXG4gIHBhbGVncmVlbjogJzk4ZmI5OCcsXG4gIHBhbGV0dXJxdW9pc2U6ICdhZmVlZWUnLFxuICBwYWxldmlvbGV0cmVkOiAnZGI3MDkzJyxcbiAgcGFwYXlhd2hpcDogJ2ZmZWZkNScsXG4gIHBlYWNocHVmZjogJ2ZmZGFiOScsXG4gIHBlcnU6ICdjZDg1M2YnLFxuICBwaW5rOiAnZmZjMGNiJyxcbiAgcGx1bTogJ2RkYTBkZCcsXG4gIHBvd2RlcmJsdWU6ICdiMGUwZTYnLFxuICBwdXJwbGU6ICc4MDAwODAnLFxuICByZWJlY2NhcHVycGxlOiAnNjM5JyxcbiAgcmVkOiAnZjAwJyxcbiAgcm9zeWJyb3duOiAnYmM4ZjhmJyxcbiAgcm95YWxibHVlOiAnNDE2OWUxJyxcbiAgc2FkZGxlYnJvd246ICc4YjQ1MTMnLFxuICBzYWxtb246ICdmYTgwNzInLFxuICBzYW5keWJyb3duOiAnZjRhNDYwJyxcbiAgc2VhZ3JlZW46ICcyZThiNTcnLFxuICBzZWFzaGVsbDogJ2ZmZjVlZScsXG4gIHNpZW5uYTogJ2EwNTIyZCcsXG4gIHNpbHZlcjogJ2MwYzBjMCcsXG4gIHNreWJsdWU6ICc4N2NlZWInLFxuICBzbGF0ZWJsdWU6ICc2YTVhY2QnLFxuICBzbGF0ZWdyYXk6ICc3MDgwOTAnLFxuICBzbGF0ZWdyZXk6ICc3MDgwOTAnLFxuICBzbm93OiAnZmZmYWZhJyxcbiAgc3ByaW5nZ3JlZW46ICcwMGZmN2YnLFxuICBzdGVlbGJsdWU6ICc0NjgyYjQnLFxuICB0YW46ICdkMmI0OGMnLFxuICB0ZWFsOiAnMDA4MDgwJyxcbiAgdGhpc3RsZTogJ2Q4YmZkOCcsXG4gIHRvbWF0bzogJ2ZmNjM0NycsXG4gIHR1cnF1b2lzZTogJzQwZTBkMCcsXG4gIHZpb2xldDogJ2VlODJlZScsXG4gIHdoZWF0OiAnZjVkZWIzJyxcbiAgd2hpdGU6ICdmZmYnLFxuICB3aGl0ZXNtb2tlOiAnZjVmNWY1JyxcbiAgeWVsbG93OiAnZmYwJyxcbiAgeWVsbG93Z3JlZW46ICc5YWNkMzInXG4gIC8qKlxuICAgKiBDaGVja3MgaWYgYSBzdHJpbmcgaXMgYSBDU1MgbmFtZWQgY29sb3IgYW5kIHJldHVybnMgaXRzIGVxdWl2YWxlbnQgaGV4IHZhbHVlLCBvdGhlcndpc2UgcmV0dXJucyB0aGUgb3JpZ2luYWwgY29sb3IuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuXG59O1xuXG5mdW5jdGlvbiBuYW1lVG9IZXgoY29sb3IpIHtcbiAgaWYgKHR5cGVvZiBjb2xvciAhPT0gJ3N0cmluZycpIHJldHVybiBjb2xvcjtcbiAgdmFyIG5vcm1hbGl6ZWRDb2xvck5hbWUgPSBjb2xvci50b0xvd2VyQ2FzZSgpO1xuICByZXR1cm4gbmFtZWRDb2xvck1hcFtub3JtYWxpemVkQ29sb3JOYW1lXSA/IFwiI1wiICsgbmFtZWRDb2xvck1hcFtub3JtYWxpemVkQ29sb3JOYW1lXSA6IGNvbG9yO1xufVxuXG52YXIgX2RlZmF1bHQgPSBuYW1lVG9IZXg7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHsgaWYgKHNlbGYgPT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzTG9vc2Uoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzLnByb3RvdHlwZSk7IHN1YkNsYXNzLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IHN1YkNsYXNzOyBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbmZ1bmN0aW9uIF93cmFwTmF0aXZlU3VwZXIoQ2xhc3MpIHsgdmFyIF9jYWNoZSA9IHR5cGVvZiBNYXAgPT09IFwiZnVuY3Rpb25cIiA/IG5ldyBNYXAoKSA6IHVuZGVmaW5lZDsgX3dyYXBOYXRpdmVTdXBlciA9IGZ1bmN0aW9uIF93cmFwTmF0aXZlU3VwZXIoQ2xhc3MpIHsgaWYgKENsYXNzID09PSBudWxsIHx8ICFfaXNOYXRpdmVGdW5jdGlvbihDbGFzcykpIHJldHVybiBDbGFzczsgaWYgKHR5cGVvZiBDbGFzcyAhPT0gXCJmdW5jdGlvblwiKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTsgfSBpZiAodHlwZW9mIF9jYWNoZSAhPT0gXCJ1bmRlZmluZWRcIikgeyBpZiAoX2NhY2hlLmhhcyhDbGFzcykpIHJldHVybiBfY2FjaGUuZ2V0KENsYXNzKTsgX2NhY2hlLnNldChDbGFzcywgV3JhcHBlcik7IH0gZnVuY3Rpb24gV3JhcHBlcigpIHsgcmV0dXJuIF9jb25zdHJ1Y3QoQ2xhc3MsIGFyZ3VtZW50cywgX2dldFByb3RvdHlwZU9mKHRoaXMpLmNvbnN0cnVjdG9yKTsgfSBXcmFwcGVyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBXcmFwcGVyLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyByZXR1cm4gX3NldFByb3RvdHlwZU9mKFdyYXBwZXIsIENsYXNzKTsgfTsgcmV0dXJuIF93cmFwTmF0aXZlU3VwZXIoQ2xhc3MpOyB9XG5cbmZ1bmN0aW9uIGlzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpIHsgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcInVuZGVmaW5lZFwiIHx8ICFSZWZsZWN0LmNvbnN0cnVjdCkgcmV0dXJuIGZhbHNlOyBpZiAoUmVmbGVjdC5jb25zdHJ1Y3Quc2hhbSkgcmV0dXJuIGZhbHNlOyBpZiAodHlwZW9mIFByb3h5ID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiB0cnVlOyB0cnkgeyBEYXRlLnByb3RvdHlwZS50b1N0cmluZy5jYWxsKFJlZmxlY3QuY29uc3RydWN0KERhdGUsIFtdLCBmdW5jdGlvbiAoKSB7fSkpOyByZXR1cm4gdHJ1ZTsgfSBjYXRjaCAoZSkgeyByZXR1cm4gZmFsc2U7IH0gfVxuXG5mdW5jdGlvbiBfY29uc3RydWN0KFBhcmVudCwgYXJncywgQ2xhc3MpIHsgaWYgKGlzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpKSB7IF9jb25zdHJ1Y3QgPSBSZWZsZWN0LmNvbnN0cnVjdDsgfSBlbHNlIHsgX2NvbnN0cnVjdCA9IGZ1bmN0aW9uIF9jb25zdHJ1Y3QoUGFyZW50LCBhcmdzLCBDbGFzcykgeyB2YXIgYSA9IFtudWxsXTsgYS5wdXNoLmFwcGx5KGEsIGFyZ3MpOyB2YXIgQ29uc3RydWN0b3IgPSBGdW5jdGlvbi5iaW5kLmFwcGx5KFBhcmVudCwgYSk7IHZhciBpbnN0YW5jZSA9IG5ldyBDb25zdHJ1Y3RvcigpOyBpZiAoQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihpbnN0YW5jZSwgQ2xhc3MucHJvdG90eXBlKTsgcmV0dXJuIGluc3RhbmNlOyB9OyB9IHJldHVybiBfY29uc3RydWN0LmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7IH1cblxuZnVuY3Rpb24gX2lzTmF0aXZlRnVuY3Rpb24oZm4pIHsgcmV0dXJuIEZ1bmN0aW9uLnRvU3RyaW5nLmNhbGwoZm4pLmluZGV4T2YoXCJbbmF0aXZlIGNvZGVdXCIpICE9PSAtMTsgfVxuXG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxuXG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pOyB9OyByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pOyB9XG5cbi8vIGJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9zdHlsZWQtY29tcG9uZW50cy9zdHlsZWQtY29tcG9uZW50cy9ibG9iL2ZjZjZmMzgwNGM1N2ExNGRkNzk4NGRmYWI3YmMwNmVlMmVkY2EwNDQvc3JjL3V0aWxzL2Vycm9yLmpzXG5cbi8qKlxuICogUGFyc2UgZXJyb3JzLm1kIGFuZCB0dXJuIGl0IGludG8gYSBzaW1wbGUgaGFzaCBvZiBjb2RlOiBtZXNzYWdlXG4gKiBAcHJpdmF0ZVxuICovXG52YXIgRVJST1JTID0ge1xuICBcIjFcIjogXCJQYXNzZWQgaW52YWxpZCBhcmd1bWVudHMgdG8gaHNsLCBwbGVhc2UgcGFzcyBtdWx0aXBsZSBudW1iZXJzIGUuZy4gaHNsKDM2MCwgMC43NSwgMC40KSBvciBhbiBvYmplY3QgZS5nLiByZ2IoeyBodWU6IDI1NSwgc2F0dXJhdGlvbjogMC40LCBsaWdodG5lc3M6IDAuNzUgfSkuXFxuXFxuXCIsXG4gIFwiMlwiOiBcIlBhc3NlZCBpbnZhbGlkIGFyZ3VtZW50cyB0byBoc2xhLCBwbGVhc2UgcGFzcyBtdWx0aXBsZSBudW1iZXJzIGUuZy4gaHNsYSgzNjAsIDAuNzUsIDAuNCwgMC43KSBvciBhbiBvYmplY3QgZS5nLiByZ2IoeyBodWU6IDI1NSwgc2F0dXJhdGlvbjogMC40LCBsaWdodG5lc3M6IDAuNzUsIGFscGhhOiAwLjcgfSkuXFxuXFxuXCIsXG4gIFwiM1wiOiBcIlBhc3NlZCBhbiBpbmNvcnJlY3QgYXJndW1lbnQgdG8gYSBjb2xvciBmdW5jdGlvbiwgcGxlYXNlIHBhc3MgYSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgYSBjb2xvci5cXG5cXG5cIixcbiAgXCI0XCI6IFwiQ291bGRuJ3QgZ2VuZXJhdGUgdmFsaWQgcmdiIHN0cmluZyBmcm9tICVzLCBpdCByZXR1cm5lZCAlcy5cXG5cXG5cIixcbiAgXCI1XCI6IFwiQ291bGRuJ3QgcGFyc2UgdGhlIGNvbG9yIHN0cmluZy4gUGxlYXNlIHByb3ZpZGUgdGhlIGNvbG9yIGFzIGEgc3RyaW5nIGluIGhleCwgcmdiLCByZ2JhLCBoc2wgb3IgaHNsYSBub3RhdGlvbi5cXG5cXG5cIixcbiAgXCI2XCI6IFwiUGFzc2VkIGludmFsaWQgYXJndW1lbnRzIHRvIHJnYiwgcGxlYXNlIHBhc3MgbXVsdGlwbGUgbnVtYmVycyBlLmcuIHJnYigyNTUsIDIwNSwgMTAwKSBvciBhbiBvYmplY3QgZS5nLiByZ2IoeyByZWQ6IDI1NSwgZ3JlZW46IDIwNSwgYmx1ZTogMTAwIH0pLlxcblxcblwiLFxuICBcIjdcIjogXCJQYXNzZWQgaW52YWxpZCBhcmd1bWVudHMgdG8gcmdiYSwgcGxlYXNlIHBhc3MgbXVsdGlwbGUgbnVtYmVycyBlLmcuIHJnYigyNTUsIDIwNSwgMTAwLCAwLjc1KSBvciBhbiBvYmplY3QgZS5nLiByZ2IoeyByZWQ6IDI1NSwgZ3JlZW46IDIwNSwgYmx1ZTogMTAwLCBhbHBoYTogMC43NSB9KS5cXG5cXG5cIixcbiAgXCI4XCI6IFwiUGFzc2VkIGludmFsaWQgYXJndW1lbnQgdG8gdG9Db2xvclN0cmluZywgcGxlYXNlIHBhc3MgYSBSZ2JDb2xvciwgUmdiYUNvbG9yLCBIc2xDb2xvciBvciBIc2xhQ29sb3Igb2JqZWN0LlxcblxcblwiLFxuICBcIjlcIjogXCJQbGVhc2UgcHJvdmlkZSBhIG51bWJlciBvZiBzdGVwcyB0byB0aGUgbW9kdWxhclNjYWxlIGhlbHBlci5cXG5cXG5cIixcbiAgXCIxMFwiOiBcIlBsZWFzZSBwYXNzIGEgbnVtYmVyIG9yIG9uZSBvZiB0aGUgcHJlZGVmaW5lZCBzY2FsZXMgdG8gdGhlIG1vZHVsYXJTY2FsZSBoZWxwZXIgYXMgdGhlIHJhdGlvLlxcblxcblwiLFxuICBcIjExXCI6IFwiSW52YWxpZCB2YWx1ZSBwYXNzZWQgYXMgYmFzZSB0byBtb2R1bGFyU2NhbGUsIGV4cGVjdGVkIG51bWJlciBvciBlbSBzdHJpbmcgYnV0IGdvdCBcXFwiJXNcXFwiXFxuXFxuXCIsXG4gIFwiMTJcIjogXCJFeHBlY3RlZCBhIHN0cmluZyBlbmRpbmcgaW4gXFxcInB4XFxcIiBvciBhIG51bWJlciBwYXNzZWQgYXMgdGhlIGZpcnN0IGFyZ3VtZW50IHRvICVzKCksIGdvdCBcXFwiJXNcXFwiIGluc3RlYWQuXFxuXFxuXCIsXG4gIFwiMTNcIjogXCJFeHBlY3RlZCBhIHN0cmluZyBlbmRpbmcgaW4gXFxcInB4XFxcIiBvciBhIG51bWJlciBwYXNzZWQgYXMgdGhlIHNlY29uZCBhcmd1bWVudCB0byAlcygpLCBnb3QgXFxcIiVzXFxcIiBpbnN0ZWFkLlxcblxcblwiLFxuICBcIjE0XCI6IFwiUGFzc2VkIGludmFsaWQgcGl4ZWwgdmFsdWUgKFxcXCIlc1xcXCIpIHRvICVzKCksIHBsZWFzZSBwYXNzIGEgdmFsdWUgbGlrZSBcXFwiMTJweFxcXCIgb3IgMTIuXFxuXFxuXCIsXG4gIFwiMTVcIjogXCJQYXNzZWQgaW52YWxpZCBiYXNlIHZhbHVlIChcXFwiJXNcXFwiKSB0byAlcygpLCBwbGVhc2UgcGFzcyBhIHZhbHVlIGxpa2UgXFxcIjEycHhcXFwiIG9yIDEyLlxcblxcblwiLFxuICBcIjE2XCI6IFwiWW91IG11c3QgcHJvdmlkZSBhIHRlbXBsYXRlIHRvIHRoaXMgbWV0aG9kLlxcblxcblwiLFxuICBcIjE3XCI6IFwiWW91IHBhc3NlZCBhbiB1bnN1cHBvcnRlZCBzZWxlY3RvciBzdGF0ZSB0byB0aGlzIG1ldGhvZC5cXG5cXG5cIixcbiAgXCIxOFwiOiBcIm1pblNjcmVlbiBhbmQgbWF4U2NyZWVuIG11c3QgYmUgcHJvdmlkZWQgYXMgc3RyaW5naWZpZWQgbnVtYmVycyB3aXRoIHRoZSBzYW1lIHVuaXRzLlxcblxcblwiLFxuICBcIjE5XCI6IFwiZnJvbVNpemUgYW5kIHRvU2l6ZSBtdXN0IGJlIHByb3ZpZGVkIGFzIHN0cmluZ2lmaWVkIG51bWJlcnMgd2l0aCB0aGUgc2FtZSB1bml0cy5cXG5cXG5cIixcbiAgXCIyMFwiOiBcImV4cGVjdHMgZWl0aGVyIGFuIGFycmF5IG9mIG9iamVjdHMgb3IgYSBzaW5nbGUgb2JqZWN0IHdpdGggdGhlIHByb3BlcnRpZXMgcHJvcCwgZnJvbVNpemUsIGFuZCB0b1NpemUuXFxuXFxuXCIsXG4gIFwiMjFcIjogXCJleHBlY3RzIHRoZSBvYmplY3RzIGluIHRoZSBmaXJzdCBhcmd1bWVudCBhcnJheSB0byBoYXZlIHRoZSBwcm9wZXJ0aWVzIGBwcm9wYCwgYGZyb21TaXplYCwgYW5kIGB0b1NpemVgLlxcblxcblwiLFxuICBcIjIyXCI6IFwiZXhwZWN0cyB0aGUgZmlyc3QgYXJndW1lbnQgb2JqZWN0IHRvIGhhdmUgdGhlIHByb3BlcnRpZXMgYHByb3BgLCBgZnJvbVNpemVgLCBhbmQgYHRvU2l6ZWAuXFxuXFxuXCIsXG4gIFwiMjNcIjogXCJmb250RmFjZSBleHBlY3RzIGEgbmFtZSBvZiBhIGZvbnQtZmFtaWx5LlxcblxcblwiLFxuICBcIjI0XCI6IFwiZm9udEZhY2UgZXhwZWN0cyBlaXRoZXIgdGhlIHBhdGggdG8gdGhlIGZvbnQgZmlsZShzKSBvciBhIG5hbWUgb2YgYSBsb2NhbCBjb3B5LlxcblxcblwiLFxuICBcIjI1XCI6IFwiZm9udEZhY2UgZXhwZWN0cyBsb2NhbEZvbnRzIHRvIGJlIGFuIGFycmF5LlxcblxcblwiLFxuICBcIjI2XCI6IFwiZm9udEZhY2UgZXhwZWN0cyBmaWxlRm9ybWF0cyB0byBiZSBhbiBhcnJheS5cXG5cXG5cIixcbiAgXCIyN1wiOiBcInJhZGlhbEdyYWRpZW50IHJlcXVyaWVzIGF0IGxlYXN0IDIgY29sb3Itc3RvcHMgdG8gcHJvcGVybHkgcmVuZGVyLlxcblxcblwiLFxuICBcIjI4XCI6IFwiUGxlYXNlIHN1cHBseSBhIGZpbGVuYW1lIHRvIHJldGluYUltYWdlKCkgYXMgdGhlIGZpcnN0IGFyZ3VtZW50LlxcblxcblwiLFxuICBcIjI5XCI6IFwiUGFzc2VkIGludmFsaWQgYXJndW1lbnQgdG8gdHJpYW5nbGUsIHBsZWFzZSBwYXNzIGNvcnJlY3QgcG9pbnRpbmdEaXJlY3Rpb24gZS5nLiAncmlnaHQnLlxcblxcblwiLFxuICBcIjMwXCI6IFwiUGFzc2VkIGFuIGludmFsaWQgdmFsdWUgdG8gYGhlaWdodGAgb3IgYHdpZHRoYC4gUGxlYXNlIHByb3ZpZGUgYSBwaXhlbCBiYXNlZCB1bml0LlxcblxcblwiLFxuICBcIjMxXCI6IFwiVGhlIGFuaW1hdGlvbiBzaG9ydGhhbmQgb25seSB0YWtlcyA4IGFyZ3VtZW50cy4gU2VlIHRoZSBzcGVjaWZpY2F0aW9uIGZvciBtb3JlIGluZm9ybWF0aW9uOiBodHRwOi8vbWRuLmlvL2FuaW1hdGlvblxcblxcblwiLFxuICBcIjMyXCI6IFwiVG8gcGFzcyBtdWx0aXBsZSBhbmltYXRpb25zIHBsZWFzZSBzdXBwbHkgdGhlbSBpbiBhcnJheXMsIGUuZy4gYW5pbWF0aW9uKFsncm90YXRlJywgJzJzJ10sIFsnbW92ZScsICcxcyddKVxcblRvIHBhc3MgYSBzaW5nbGUgYW5pbWF0aW9uIHBsZWFzZSBzdXBwbHkgdGhlbSBpbiBzaW1wbGUgdmFsdWVzLCBlLmcuIGFuaW1hdGlvbigncm90YXRlJywgJzJzJylcXG5cXG5cIixcbiAgXCIzM1wiOiBcIlRoZSBhbmltYXRpb24gc2hvcnRoYW5kIGFycmF5cyBjYW4gb25seSBoYXZlIDggZWxlbWVudHMuIFNlZSB0aGUgc3BlY2lmaWNhdGlvbiBmb3IgbW9yZSBpbmZvcm1hdGlvbjogaHR0cDovL21kbi5pby9hbmltYXRpb25cXG5cXG5cIixcbiAgXCIzNFwiOiBcImJvcmRlclJhZGl1cyBleHBlY3RzIGEgcmFkaXVzIHZhbHVlIGFzIGEgc3RyaW5nIG9yIG51bWJlciBhcyB0aGUgc2Vjb25kIGFyZ3VtZW50LlxcblxcblwiLFxuICBcIjM1XCI6IFwiYm9yZGVyUmFkaXVzIGV4cGVjdHMgb25lIG9mIFxcXCJ0b3BcXFwiLCBcXFwiYm90dG9tXFxcIiwgXFxcImxlZnRcXFwiIG9yIFxcXCJyaWdodFxcXCIgYXMgdGhlIGZpcnN0IGFyZ3VtZW50LlxcblxcblwiLFxuICBcIjM2XCI6IFwiUHJvcGVydHkgbXVzdCBiZSBhIHN0cmluZyB2YWx1ZS5cXG5cXG5cIixcbiAgXCIzN1wiOiBcIlN5bnRheCBFcnJvciBhdCAlcy5cXG5cXG5cIixcbiAgXCIzOFwiOiBcIkZvcm11bGEgY29udGFpbnMgYSBmdW5jdGlvbiB0aGF0IG5lZWRzIHBhcmVudGhlc2VzIGF0ICVzLlxcblxcblwiLFxuICBcIjM5XCI6IFwiRm9ybXVsYSBpcyBtaXNzaW5nIGNsb3NpbmcgcGFyZW50aGVzaXMgYXQgJXMuXFxuXFxuXCIsXG4gIFwiNDBcIjogXCJGb3JtdWxhIGhhcyB0b28gbWFueSBjbG9zaW5nIHBhcmVudGhlc2VzIGF0ICVzLlxcblxcblwiLFxuICBcIjQxXCI6IFwiQWxsIHZhbHVlcyBpbiBhIGZvcm11bGEgbXVzdCBoYXZlIHRoZSBzYW1lIHVuaXQgb3IgYmUgdW5pdGxlc3MuXFxuXFxuXCIsXG4gIFwiNDJcIjogXCJQbGVhc2UgcHJvdmlkZSBhIG51bWJlciBvZiBzdGVwcyB0byB0aGUgbW9kdWxhclNjYWxlIGhlbHBlci5cXG5cXG5cIixcbiAgXCI0M1wiOiBcIlBsZWFzZSBwYXNzIGEgbnVtYmVyIG9yIG9uZSBvZiB0aGUgcHJlZGVmaW5lZCBzY2FsZXMgdG8gdGhlIG1vZHVsYXJTY2FsZSBoZWxwZXIgYXMgdGhlIHJhdGlvLlxcblxcblwiLFxuICBcIjQ0XCI6IFwiSW52YWxpZCB2YWx1ZSBwYXNzZWQgYXMgYmFzZSB0byBtb2R1bGFyU2NhbGUsIGV4cGVjdGVkIG51bWJlciBvciBlbS9yZW0gc3RyaW5nIGJ1dCBnb3QgJXMuXFxuXFxuXCIsXG4gIFwiNDVcIjogXCJQYXNzZWQgaW52YWxpZCBhcmd1bWVudCB0byBoc2xUb0NvbG9yU3RyaW5nLCBwbGVhc2UgcGFzcyBhIEhzbENvbG9yIG9yIEhzbGFDb2xvciBvYmplY3QuXFxuXFxuXCIsXG4gIFwiNDZcIjogXCJQYXNzZWQgaW52YWxpZCBhcmd1bWVudCB0byByZ2JUb0NvbG9yU3RyaW5nLCBwbGVhc2UgcGFzcyBhIFJnYkNvbG9yIG9yIFJnYmFDb2xvciBvYmplY3QuXFxuXFxuXCIsXG4gIFwiNDdcIjogXCJtaW5TY3JlZW4gYW5kIG1heFNjcmVlbiBtdXN0IGJlIHByb3ZpZGVkIGFzIHN0cmluZ2lmaWVkIG51bWJlcnMgd2l0aCB0aGUgc2FtZSB1bml0cy5cXG5cXG5cIixcbiAgXCI0OFwiOiBcImZyb21TaXplIGFuZCB0b1NpemUgbXVzdCBiZSBwcm92aWRlZCBhcyBzdHJpbmdpZmllZCBudW1iZXJzIHdpdGggdGhlIHNhbWUgdW5pdHMuXFxuXFxuXCIsXG4gIFwiNDlcIjogXCJFeHBlY3RzIGVpdGhlciBhbiBhcnJheSBvZiBvYmplY3RzIG9yIGEgc2luZ2xlIG9iamVjdCB3aXRoIHRoZSBwcm9wZXJ0aWVzIHByb3AsIGZyb21TaXplLCBhbmQgdG9TaXplLlxcblxcblwiLFxuICBcIjUwXCI6IFwiRXhwZWN0cyB0aGUgb2JqZWN0cyBpbiB0aGUgZmlyc3QgYXJndW1lbnQgYXJyYXkgdG8gaGF2ZSB0aGUgcHJvcGVydGllcyBwcm9wLCBmcm9tU2l6ZSwgYW5kIHRvU2l6ZS5cXG5cXG5cIixcbiAgXCI1MVwiOiBcIkV4cGVjdHMgdGhlIGZpcnN0IGFyZ3VtZW50IG9iamVjdCB0byBoYXZlIHRoZSBwcm9wZXJ0aWVzIHByb3AsIGZyb21TaXplLCBhbmQgdG9TaXplLlxcblxcblwiLFxuICBcIjUyXCI6IFwiZm9udEZhY2UgZXhwZWN0cyBlaXRoZXIgdGhlIHBhdGggdG8gdGhlIGZvbnQgZmlsZShzKSBvciBhIG5hbWUgb2YgYSBsb2NhbCBjb3B5LlxcblxcblwiLFxuICBcIjUzXCI6IFwiZm9udEZhY2UgZXhwZWN0cyBsb2NhbEZvbnRzIHRvIGJlIGFuIGFycmF5LlxcblxcblwiLFxuICBcIjU0XCI6IFwiZm9udEZhY2UgZXhwZWN0cyBmaWxlRm9ybWF0cyB0byBiZSBhbiBhcnJheS5cXG5cXG5cIixcbiAgXCI1NVwiOiBcImZvbnRGYWNlIGV4cGVjdHMgYSBuYW1lIG9mIGEgZm9udC1mYW1pbHkuXFxuXFxuXCIsXG4gIFwiNTZcIjogXCJsaW5lYXJHcmFkaWVudCByZXF1cmllcyBhdCBsZWFzdCAyIGNvbG9yLXN0b3BzIHRvIHByb3Blcmx5IHJlbmRlci5cXG5cXG5cIixcbiAgXCI1N1wiOiBcInJhZGlhbEdyYWRpZW50IHJlcXVyaWVzIGF0IGxlYXN0IDIgY29sb3Itc3RvcHMgdG8gcHJvcGVybHkgcmVuZGVyLlxcblxcblwiLFxuICBcIjU4XCI6IFwiUGxlYXNlIHN1cHBseSBhIGZpbGVuYW1lIHRvIHJldGluYUltYWdlKCkgYXMgdGhlIGZpcnN0IGFyZ3VtZW50LlxcblxcblwiLFxuICBcIjU5XCI6IFwiUGFzc2VkIGludmFsaWQgYXJndW1lbnQgdG8gdHJpYW5nbGUsIHBsZWFzZSBwYXNzIGNvcnJlY3QgcG9pbnRpbmdEaXJlY3Rpb24gZS5nLiAncmlnaHQnLlxcblxcblwiLFxuICBcIjYwXCI6IFwiUGFzc2VkIGFuIGludmFsaWQgdmFsdWUgdG8gYGhlaWdodGAgb3IgYHdpZHRoYC4gUGxlYXNlIHByb3ZpZGUgYSBwaXhlbCBiYXNlZCB1bml0LlxcblxcblwiLFxuICBcIjYxXCI6IFwiUHJvcGVydHkgbXVzdCBiZSBhIHN0cmluZyB2YWx1ZS5cXG5cXG5cIixcbiAgXCI2MlwiOiBcImJvcmRlclJhZGl1cyBleHBlY3RzIGEgcmFkaXVzIHZhbHVlIGFzIGEgc3RyaW5nIG9yIG51bWJlciBhcyB0aGUgc2Vjb25kIGFyZ3VtZW50LlxcblxcblwiLFxuICBcIjYzXCI6IFwiYm9yZGVyUmFkaXVzIGV4cGVjdHMgb25lIG9mIFxcXCJ0b3BcXFwiLCBcXFwiYm90dG9tXFxcIiwgXFxcImxlZnRcXFwiIG9yIFxcXCJyaWdodFxcXCIgYXMgdGhlIGZpcnN0IGFyZ3VtZW50LlxcblxcblwiLFxuICBcIjY0XCI6IFwiVGhlIGFuaW1hdGlvbiBzaG9ydGhhbmQgb25seSB0YWtlcyA4IGFyZ3VtZW50cy4gU2VlIHRoZSBzcGVjaWZpY2F0aW9uIGZvciBtb3JlIGluZm9ybWF0aW9uOiBodHRwOi8vbWRuLmlvL2FuaW1hdGlvbi5cXG5cXG5cIixcbiAgXCI2NVwiOiBcIlRvIHBhc3MgbXVsdGlwbGUgYW5pbWF0aW9ucyBwbGVhc2Ugc3VwcGx5IHRoZW0gaW4gYXJyYXlzLCBlLmcuIGFuaW1hdGlvbihbJ3JvdGF0ZScsICcycyddLCBbJ21vdmUnLCAnMXMnXSlcXFxcblRvIHBhc3MgYSBzaW5nbGUgYW5pbWF0aW9uIHBsZWFzZSBzdXBwbHkgdGhlbSBpbiBzaW1wbGUgdmFsdWVzLCBlLmcuIGFuaW1hdGlvbigncm90YXRlJywgJzJzJykuXFxuXFxuXCIsXG4gIFwiNjZcIjogXCJUaGUgYW5pbWF0aW9uIHNob3J0aGFuZCBhcnJheXMgY2FuIG9ubHkgaGF2ZSA4IGVsZW1lbnRzLiBTZWUgdGhlIHNwZWNpZmljYXRpb24gZm9yIG1vcmUgaW5mb3JtYXRpb246IGh0dHA6Ly9tZG4uaW8vYW5pbWF0aW9uLlxcblxcblwiLFxuICBcIjY3XCI6IFwiWW91IG11c3QgcHJvdmlkZSBhIHRlbXBsYXRlIHRvIHRoaXMgbWV0aG9kLlxcblxcblwiLFxuICBcIjY4XCI6IFwiWW91IHBhc3NlZCBhbiB1bnN1cHBvcnRlZCBzZWxlY3RvciBzdGF0ZSB0byB0aGlzIG1ldGhvZC5cXG5cXG5cIixcbiAgXCI2OVwiOiBcIkV4cGVjdGVkIGEgc3RyaW5nIGVuZGluZyBpbiBcXFwicHhcXFwiIG9yIGEgbnVtYmVyIHBhc3NlZCBhcyB0aGUgZmlyc3QgYXJndW1lbnQgdG8gJXMoKSwgZ290ICVzIGluc3RlYWQuXFxuXFxuXCIsXG4gIFwiNzBcIjogXCJFeHBlY3RlZCBhIHN0cmluZyBlbmRpbmcgaW4gXFxcInB4XFxcIiBvciBhIG51bWJlciBwYXNzZWQgYXMgdGhlIHNlY29uZCBhcmd1bWVudCB0byAlcygpLCBnb3QgJXMgaW5zdGVhZC5cXG5cXG5cIixcbiAgXCI3MVwiOiBcIlBhc3NlZCBpbnZhbGlkIHBpeGVsIHZhbHVlICVzIHRvICVzKCksIHBsZWFzZSBwYXNzIGEgdmFsdWUgbGlrZSBcXFwiMTJweFxcXCIgb3IgMTIuXFxuXFxuXCIsXG4gIFwiNzJcIjogXCJQYXNzZWQgaW52YWxpZCBiYXNlIHZhbHVlICVzIHRvICVzKCksIHBsZWFzZSBwYXNzIGEgdmFsdWUgbGlrZSBcXFwiMTJweFxcXCIgb3IgMTIuXFxuXCJcbn07XG4vKipcbiAqIHN1cGVyIGJhc2ljIHZlcnNpb24gb2Ygc3ByaW50ZlxuICogQHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBmb3JtYXQoKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICB2YXIgYSA9IGFyZ3NbMF07XG4gIHZhciBiID0gW107XG4gIHZhciBjO1xuXG4gIGZvciAoYyA9IDE7IGMgPCBhcmdzLmxlbmd0aDsgYyArPSAxKSB7XG4gICAgYi5wdXNoKGFyZ3NbY10pO1xuICB9XG5cbiAgYi5mb3JFYWNoKGZ1bmN0aW9uIChkKSB7XG4gICAgYSA9IGEucmVwbGFjZSgvJVthLXpdLywgZCk7XG4gIH0pO1xuICByZXR1cm4gYTtcbn1cbi8qKlxuICogQ3JlYXRlIGFuIGVycm9yIGZpbGUgb3V0IG9mIGVycm9ycy5tZCBmb3IgZGV2ZWxvcG1lbnQgYW5kIGEgc2ltcGxlIHdlYiBsaW5rIHRvIHRoZSBmdWxsIGVycm9yc1xuICogaW4gcHJvZHVjdGlvbiBtb2RlLlxuICogQHByaXZhdGVcbiAqL1xuXG5cbnZhciBQb2xpc2hlZEVycm9yID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uIChfRXJyb3IpIHtcbiAgX2luaGVyaXRzTG9vc2UoUG9saXNoZWRFcnJvciwgX0Vycm9yKTtcblxuICBmdW5jdGlvbiBQb2xpc2hlZEVycm9yKGNvZGUpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgX3RoaXMgPSBfRXJyb3IuY2FsbCh0aGlzLCBcIkFuIGVycm9yIG9jY3VycmVkLiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3N0eWxlZC1jb21wb25lbnRzL3BvbGlzaGVkL2Jsb2IvbWFzdGVyL3NyYy9lcnJvci9lcnJvcnMubWQjXCIgKyBjb2RlICsgXCIgZm9yIG1vcmUgaW5mb3JtYXRpb24uXCIpIHx8IHRoaXM7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuMiA+IDEgPyBfbGVuMiAtIDEgOiAwKSwgX2tleTIgPSAxOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICAgIGFyZ3NbX2tleTIgLSAxXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgICB9XG5cbiAgICAgIF90aGlzID0gX0Vycm9yLmNhbGwodGhpcywgZm9ybWF0LmFwcGx5KHZvaWQgMCwgW0VSUk9SU1tjb2RlXV0uY29uY2F0KGFyZ3MpKSkgfHwgdGhpcztcbiAgICB9XG5cbiAgICByZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyk7XG4gIH1cblxuICByZXR1cm4gUG9saXNoZWRFcnJvcjtcbn0oXG4vKiNfX1BVUkVfXyovXG5fd3JhcE5hdGl2ZVN1cGVyKEVycm9yKSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IFBvbGlzaGVkRXJyb3I7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIF9oc2xUb1JnYiA9XG4vKiNfX1BVUkVfXyovXG5faW50ZXJvcFJlcXVpcmVEZWZhdWx0KFxuLyojX19QVVJFX18qL1xucmVxdWlyZShcIi4uL2ludGVybmFsSGVscGVycy9faHNsVG9SZ2JcIikpO1xuXG52YXIgX25hbWVUb0hleCA9XG4vKiNfX1BVUkVfXyovXG5faW50ZXJvcFJlcXVpcmVEZWZhdWx0KFxuLyojX19QVVJFX18qL1xucmVxdWlyZShcIi4uL2ludGVybmFsSGVscGVycy9fbmFtZVRvSGV4XCIpKTtcblxudmFyIF9lcnJvcnMgPVxuLyojX19QVVJFX18qL1xuX2ludGVyb3BSZXF1aXJlRGVmYXVsdChcbi8qI19fUFVSRV9fKi9cbnJlcXVpcmUoXCIuLi9pbnRlcm5hbEhlbHBlcnMvX2Vycm9yc1wiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBoZXhSZWdleCA9IC9eI1thLWZBLUYwLTldezZ9JC87XG52YXIgaGV4UmdiYVJlZ2V4ID0gL14jW2EtZkEtRjAtOV17OH0kLztcbnZhciByZWR1Y2VkSGV4UmVnZXggPSAvXiNbYS1mQS1GMC05XXszfSQvO1xudmFyIHJlZHVjZWRSZ2JhSGV4UmVnZXggPSAvXiNbYS1mQS1GMC05XXs0fSQvO1xudmFyIHJnYlJlZ2V4ID0gL15yZ2JcXChcXHMqKFxcZHsxLDN9KVxccyosXFxzKihcXGR7MSwzfSlcXHMqLFxccyooXFxkezEsM30pXFxzKlxcKSQvO1xudmFyIHJnYmFSZWdleCA9IC9ecmdiYVxcKFxccyooXFxkezEsM30pXFxzKixcXHMqKFxcZHsxLDN9KVxccyosXFxzKihcXGR7MSwzfSlcXHMqLFxccyooWy0rXT9bMC05XSpbLl0/WzAtOV0rKVxccypcXCkkLztcbnZhciBoc2xSZWdleCA9IC9eaHNsXFwoXFxzKihcXGR7MCwzfVsuXT9bMC05XSspXFxzKixcXHMqKFxcZHsxLDN9KSVcXHMqLFxccyooXFxkezEsM30pJVxccypcXCkkLztcbnZhciBoc2xhUmVnZXggPSAvXmhzbGFcXChcXHMqKFxcZHswLDN9Wy5dP1swLTldKylcXHMqLFxccyooXFxkezEsM30pJVxccyosXFxzKihcXGR7MSwzfSklXFxzKixcXHMqKFstK10/WzAtOV0qWy5dP1swLTldKylcXHMqXFwpJC87XG4vKipcbiAqIFJldHVybnMgYW4gUmdiQ29sb3Igb3IgUmdiYUNvbG9yIG9iamVjdC4gVGhpcyB1dGlsaXR5IGZ1bmN0aW9uIGlzIG9ubHkgdXNlZnVsXG4gKiBpZiB3YW50IHRvIGV4dHJhY3QgYSBjb2xvciBjb21wb25lbnQuIFdpdGggdGhlIGNvbG9yIHV0aWwgYHRvQ29sb3JTdHJpbmdgIHlvdVxuICogY2FuIGNvbnZlcnQgYSBSZ2JDb2xvciBvciBSZ2JhQ29sb3Igb2JqZWN0IGJhY2sgdG8gYSBzdHJpbmcuXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFzc2lnbnMgYHsgcmVkOiAyNTUsIGdyZWVuOiAwLCBibHVlOiAwIH1gIHRvIGNvbG9yMVxuICogY29uc3QgY29sb3IxID0gcGFyc2VUb1JnYigncmdiKDI1NSwgMCwgMCknKTtcbiAqIC8vIEFzc2lnbnMgYHsgcmVkOiA5MiwgZ3JlZW46IDEwMiwgYmx1ZTogMTEyLCBhbHBoYTogMC43NSB9YCB0byBjb2xvcjJcbiAqIGNvbnN0IGNvbG9yMiA9IHBhcnNlVG9SZ2IoJ2hzbGEoMjEwLCAxMCUsIDQwJSwgMC43NSknKTtcbiAqL1xuXG5mdW5jdGlvbiBwYXJzZVRvUmdiKGNvbG9yKSB7XG4gIGlmICh0eXBlb2YgY29sb3IgIT09ICdzdHJpbmcnKSB7XG4gICAgdGhyb3cgbmV3IF9lcnJvcnMuZGVmYXVsdCgzKTtcbiAgfVxuXG4gIHZhciBub3JtYWxpemVkQ29sb3IgPSAoMCwgX25hbWVUb0hleC5kZWZhdWx0KShjb2xvcik7XG5cbiAgaWYgKG5vcm1hbGl6ZWRDb2xvci5tYXRjaChoZXhSZWdleCkpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcmVkOiBwYXJzZUludChcIlwiICsgbm9ybWFsaXplZENvbG9yWzFdICsgbm9ybWFsaXplZENvbG9yWzJdLCAxNiksXG4gICAgICBncmVlbjogcGFyc2VJbnQoXCJcIiArIG5vcm1hbGl6ZWRDb2xvclszXSArIG5vcm1hbGl6ZWRDb2xvcls0XSwgMTYpLFxuICAgICAgYmx1ZTogcGFyc2VJbnQoXCJcIiArIG5vcm1hbGl6ZWRDb2xvcls1XSArIG5vcm1hbGl6ZWRDb2xvcls2XSwgMTYpXG4gICAgfTtcbiAgfVxuXG4gIGlmIChub3JtYWxpemVkQ29sb3IubWF0Y2goaGV4UmdiYVJlZ2V4KSkge1xuICAgIHZhciBhbHBoYSA9IHBhcnNlRmxvYXQoKHBhcnNlSW50KFwiXCIgKyBub3JtYWxpemVkQ29sb3JbN10gKyBub3JtYWxpemVkQ29sb3JbOF0sIDE2KSAvIDI1NSkudG9GaXhlZCgyKSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJlZDogcGFyc2VJbnQoXCJcIiArIG5vcm1hbGl6ZWRDb2xvclsxXSArIG5vcm1hbGl6ZWRDb2xvclsyXSwgMTYpLFxuICAgICAgZ3JlZW46IHBhcnNlSW50KFwiXCIgKyBub3JtYWxpemVkQ29sb3JbM10gKyBub3JtYWxpemVkQ29sb3JbNF0sIDE2KSxcbiAgICAgIGJsdWU6IHBhcnNlSW50KFwiXCIgKyBub3JtYWxpemVkQ29sb3JbNV0gKyBub3JtYWxpemVkQ29sb3JbNl0sIDE2KSxcbiAgICAgIGFscGhhOiBhbHBoYVxuICAgIH07XG4gIH1cblxuICBpZiAobm9ybWFsaXplZENvbG9yLm1hdGNoKHJlZHVjZWRIZXhSZWdleCkpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcmVkOiBwYXJzZUludChcIlwiICsgbm9ybWFsaXplZENvbG9yWzFdICsgbm9ybWFsaXplZENvbG9yWzFdLCAxNiksXG4gICAgICBncmVlbjogcGFyc2VJbnQoXCJcIiArIG5vcm1hbGl6ZWRDb2xvclsyXSArIG5vcm1hbGl6ZWRDb2xvclsyXSwgMTYpLFxuICAgICAgYmx1ZTogcGFyc2VJbnQoXCJcIiArIG5vcm1hbGl6ZWRDb2xvclszXSArIG5vcm1hbGl6ZWRDb2xvclszXSwgMTYpXG4gICAgfTtcbiAgfVxuXG4gIGlmIChub3JtYWxpemVkQ29sb3IubWF0Y2gocmVkdWNlZFJnYmFIZXhSZWdleCkpIHtcbiAgICB2YXIgX2FscGhhID0gcGFyc2VGbG9hdCgocGFyc2VJbnQoXCJcIiArIG5vcm1hbGl6ZWRDb2xvcls0XSArIG5vcm1hbGl6ZWRDb2xvcls0XSwgMTYpIC8gMjU1KS50b0ZpeGVkKDIpKTtcblxuICAgIHJldHVybiB7XG4gICAgICByZWQ6IHBhcnNlSW50KFwiXCIgKyBub3JtYWxpemVkQ29sb3JbMV0gKyBub3JtYWxpemVkQ29sb3JbMV0sIDE2KSxcbiAgICAgIGdyZWVuOiBwYXJzZUludChcIlwiICsgbm9ybWFsaXplZENvbG9yWzJdICsgbm9ybWFsaXplZENvbG9yWzJdLCAxNiksXG4gICAgICBibHVlOiBwYXJzZUludChcIlwiICsgbm9ybWFsaXplZENvbG9yWzNdICsgbm9ybWFsaXplZENvbG9yWzNdLCAxNiksXG4gICAgICBhbHBoYTogX2FscGhhXG4gICAgfTtcbiAgfVxuXG4gIHZhciByZ2JNYXRjaGVkID0gcmdiUmVnZXguZXhlYyhub3JtYWxpemVkQ29sb3IpO1xuXG4gIGlmIChyZ2JNYXRjaGVkKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJlZDogcGFyc2VJbnQoXCJcIiArIHJnYk1hdGNoZWRbMV0sIDEwKSxcbiAgICAgIGdyZWVuOiBwYXJzZUludChcIlwiICsgcmdiTWF0Y2hlZFsyXSwgMTApLFxuICAgICAgYmx1ZTogcGFyc2VJbnQoXCJcIiArIHJnYk1hdGNoZWRbM10sIDEwKVxuICAgIH07XG4gIH1cblxuICB2YXIgcmdiYU1hdGNoZWQgPSByZ2JhUmVnZXguZXhlYyhub3JtYWxpemVkQ29sb3IpO1xuXG4gIGlmIChyZ2JhTWF0Y2hlZCkge1xuICAgIHJldHVybiB7XG4gICAgICByZWQ6IHBhcnNlSW50KFwiXCIgKyByZ2JhTWF0Y2hlZFsxXSwgMTApLFxuICAgICAgZ3JlZW46IHBhcnNlSW50KFwiXCIgKyByZ2JhTWF0Y2hlZFsyXSwgMTApLFxuICAgICAgYmx1ZTogcGFyc2VJbnQoXCJcIiArIHJnYmFNYXRjaGVkWzNdLCAxMCksXG4gICAgICBhbHBoYTogcGFyc2VGbG9hdChcIlwiICsgcmdiYU1hdGNoZWRbNF0pXG4gICAgfTtcbiAgfVxuXG4gIHZhciBoc2xNYXRjaGVkID0gaHNsUmVnZXguZXhlYyhub3JtYWxpemVkQ29sb3IpO1xuXG4gIGlmIChoc2xNYXRjaGVkKSB7XG4gICAgdmFyIGh1ZSA9IHBhcnNlSW50KFwiXCIgKyBoc2xNYXRjaGVkWzFdLCAxMCk7XG4gICAgdmFyIHNhdHVyYXRpb24gPSBwYXJzZUludChcIlwiICsgaHNsTWF0Y2hlZFsyXSwgMTApIC8gMTAwO1xuICAgIHZhciBsaWdodG5lc3MgPSBwYXJzZUludChcIlwiICsgaHNsTWF0Y2hlZFszXSwgMTApIC8gMTAwO1xuICAgIHZhciByZ2JDb2xvclN0cmluZyA9IFwicmdiKFwiICsgKDAsIF9oc2xUb1JnYi5kZWZhdWx0KShodWUsIHNhdHVyYXRpb24sIGxpZ2h0bmVzcykgKyBcIilcIjtcbiAgICB2YXIgaHNsUmdiTWF0Y2hlZCA9IHJnYlJlZ2V4LmV4ZWMocmdiQ29sb3JTdHJpbmcpO1xuXG4gICAgaWYgKCFoc2xSZ2JNYXRjaGVkKSB7XG4gICAgICB0aHJvdyBuZXcgX2Vycm9ycy5kZWZhdWx0KDQsIG5vcm1hbGl6ZWRDb2xvciwgcmdiQ29sb3JTdHJpbmcpO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICByZWQ6IHBhcnNlSW50KFwiXCIgKyBoc2xSZ2JNYXRjaGVkWzFdLCAxMCksXG4gICAgICBncmVlbjogcGFyc2VJbnQoXCJcIiArIGhzbFJnYk1hdGNoZWRbMl0sIDEwKSxcbiAgICAgIGJsdWU6IHBhcnNlSW50KFwiXCIgKyBoc2xSZ2JNYXRjaGVkWzNdLCAxMClcbiAgICB9O1xuICB9XG5cbiAgdmFyIGhzbGFNYXRjaGVkID0gaHNsYVJlZ2V4LmV4ZWMobm9ybWFsaXplZENvbG9yKTtcblxuICBpZiAoaHNsYU1hdGNoZWQpIHtcbiAgICB2YXIgX2h1ZSA9IHBhcnNlSW50KFwiXCIgKyBoc2xhTWF0Y2hlZFsxXSwgMTApO1xuXG4gICAgdmFyIF9zYXR1cmF0aW9uID0gcGFyc2VJbnQoXCJcIiArIGhzbGFNYXRjaGVkWzJdLCAxMCkgLyAxMDA7XG5cbiAgICB2YXIgX2xpZ2h0bmVzcyA9IHBhcnNlSW50KFwiXCIgKyBoc2xhTWF0Y2hlZFszXSwgMTApIC8gMTAwO1xuXG4gICAgdmFyIF9yZ2JDb2xvclN0cmluZyA9IFwicmdiKFwiICsgKDAsIF9oc2xUb1JnYi5kZWZhdWx0KShfaHVlLCBfc2F0dXJhdGlvbiwgX2xpZ2h0bmVzcykgKyBcIilcIjtcblxuICAgIHZhciBfaHNsUmdiTWF0Y2hlZCA9IHJnYlJlZ2V4LmV4ZWMoX3JnYkNvbG9yU3RyaW5nKTtcblxuICAgIGlmICghX2hzbFJnYk1hdGNoZWQpIHtcbiAgICAgIHRocm93IG5ldyBfZXJyb3JzLmRlZmF1bHQoNCwgbm9ybWFsaXplZENvbG9yLCBfcmdiQ29sb3JTdHJpbmcpO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICByZWQ6IHBhcnNlSW50KFwiXCIgKyBfaHNsUmdiTWF0Y2hlZFsxXSwgMTApLFxuICAgICAgZ3JlZW46IHBhcnNlSW50KFwiXCIgKyBfaHNsUmdiTWF0Y2hlZFsyXSwgMTApLFxuICAgICAgYmx1ZTogcGFyc2VJbnQoXCJcIiArIF9oc2xSZ2JNYXRjaGVkWzNdLCAxMCksXG4gICAgICBhbHBoYTogcGFyc2VGbG9hdChcIlwiICsgaHNsYU1hdGNoZWRbNF0pXG4gICAgfTtcbiAgfVxuXG4gIHRocm93IG5ldyBfZXJyb3JzLmRlZmF1bHQoNSk7XG59XG5cbnZhciBfZGVmYXVsdCA9IHBhcnNlVG9SZ2I7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG5mdW5jdGlvbiByZ2JUb0hzbChjb2xvcikge1xuICAvLyBtYWtlIHN1cmUgcmdiIGFyZSBjb250YWluZWQgaW4gYSBzZXQgb2YgWzAsIDI1NV1cbiAgdmFyIHJlZCA9IGNvbG9yLnJlZCAvIDI1NTtcbiAgdmFyIGdyZWVuID0gY29sb3IuZ3JlZW4gLyAyNTU7XG4gIHZhciBibHVlID0gY29sb3IuYmx1ZSAvIDI1NTtcbiAgdmFyIG1heCA9IE1hdGgubWF4KHJlZCwgZ3JlZW4sIGJsdWUpO1xuICB2YXIgbWluID0gTWF0aC5taW4ocmVkLCBncmVlbiwgYmx1ZSk7XG4gIHZhciBsaWdodG5lc3MgPSAobWF4ICsgbWluKSAvIDI7XG5cbiAgaWYgKG1heCA9PT0gbWluKSB7XG4gICAgLy8gYWNocm9tYXRpY1xuICAgIGlmIChjb2xvci5hbHBoYSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBodWU6IDAsXG4gICAgICAgIHNhdHVyYXRpb246IDAsXG4gICAgICAgIGxpZ2h0bmVzczogbGlnaHRuZXNzLFxuICAgICAgICBhbHBoYTogY29sb3IuYWxwaGFcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGh1ZTogMCxcbiAgICAgICAgc2F0dXJhdGlvbjogMCxcbiAgICAgICAgbGlnaHRuZXNzOiBsaWdodG5lc3NcbiAgICAgIH07XG4gICAgfVxuICB9XG5cbiAgdmFyIGh1ZTtcbiAgdmFyIGRlbHRhID0gbWF4IC0gbWluO1xuICB2YXIgc2F0dXJhdGlvbiA9IGxpZ2h0bmVzcyA+IDAuNSA/IGRlbHRhIC8gKDIgLSBtYXggLSBtaW4pIDogZGVsdGEgLyAobWF4ICsgbWluKTtcblxuICBzd2l0Y2ggKG1heCkge1xuICAgIGNhc2UgcmVkOlxuICAgICAgaHVlID0gKGdyZWVuIC0gYmx1ZSkgLyBkZWx0YSArIChncmVlbiA8IGJsdWUgPyA2IDogMCk7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgZ3JlZW46XG4gICAgICBodWUgPSAoYmx1ZSAtIHJlZCkgLyBkZWx0YSArIDI7XG4gICAgICBicmVhaztcblxuICAgIGRlZmF1bHQ6XG4gICAgICAvLyBibHVlIGNhc2VcbiAgICAgIGh1ZSA9IChyZWQgLSBncmVlbikgLyBkZWx0YSArIDQ7XG4gICAgICBicmVhaztcbiAgfVxuXG4gIGh1ZSAqPSA2MDtcblxuICBpZiAoY29sb3IuYWxwaGEgIT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiB7XG4gICAgICBodWU6IGh1ZSxcbiAgICAgIHNhdHVyYXRpb246IHNhdHVyYXRpb24sXG4gICAgICBsaWdodG5lc3M6IGxpZ2h0bmVzcyxcbiAgICAgIGFscGhhOiBjb2xvci5hbHBoYVxuICAgIH07XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGh1ZTogaHVlLFxuICAgIHNhdHVyYXRpb246IHNhdHVyYXRpb24sXG4gICAgbGlnaHRuZXNzOiBsaWdodG5lc3NcbiAgfTtcbn1cblxudmFyIF9kZWZhdWx0ID0gcmdiVG9Ic2w7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX3BhcnNlVG9SZ2IgPVxuLyojX19QVVJFX18qL1xuX2ludGVyb3BSZXF1aXJlRGVmYXVsdChcbi8qI19fUFVSRV9fKi9cbnJlcXVpcmUoXCIuL3BhcnNlVG9SZ2JcIikpO1xuXG52YXIgX3JnYlRvSHNsID1cbi8qI19fUFVSRV9fKi9cbl9pbnRlcm9wUmVxdWlyZURlZmF1bHQoXG4vKiNfX1BVUkVfXyovXG5yZXF1aXJlKFwiLi4vaW50ZXJuYWxIZWxwZXJzL19yZ2JUb0hzbFwiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbi8qKlxuICogUmV0dXJucyBhbiBIc2xDb2xvciBvciBIc2xhQ29sb3Igb2JqZWN0LiBUaGlzIHV0aWxpdHkgZnVuY3Rpb24gaXMgb25seSB1c2VmdWxcbiAqIGlmIHdhbnQgdG8gZXh0cmFjdCBhIGNvbG9yIGNvbXBvbmVudC4gV2l0aCB0aGUgY29sb3IgdXRpbCBgdG9Db2xvclN0cmluZ2AgeW91XG4gKiBjYW4gY29udmVydCBhIEhzbENvbG9yIG9yIEhzbGFDb2xvciBvYmplY3QgYmFjayB0byBhIHN0cmluZy5cbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQXNzaWducyBgeyBodWU6IDAsIHNhdHVyYXRpb246IDEsIGxpZ2h0bmVzczogMC41IH1gIHRvIGNvbG9yMVxuICogY29uc3QgY29sb3IxID0gcGFyc2VUb0hzbCgncmdiKDI1NSwgMCwgMCknKTtcbiAqIC8vIEFzc2lnbnMgYHsgaHVlOiAxMjgsIHNhdHVyYXRpb246IDEsIGxpZ2h0bmVzczogMC41LCBhbHBoYTogMC43NSB9YCB0byBjb2xvcjJcbiAqIGNvbnN0IGNvbG9yMiA9IHBhcnNlVG9Ic2woJ2hzbGEoMTI4LCAxMDAlLCA1MCUsIDAuNzUpJyk7XG4gKi9cbmZ1bmN0aW9uIHBhcnNlVG9Ic2woY29sb3IpIHtcbiAgLy8gTm90ZTogQXQgYSBsYXRlciBzdGFnZSB3ZSBjYW4gb3B0aW1pemUgdGhpcyBmdW5jdGlvbiBhcyByaWdodCBub3cgYSBoc2xcbiAgLy8gY29sb3Igd291bGQgYmUgcGFyc2VkIGNvbnZlcnRlZCB0byByZ2IgdmFsdWVzIGFuZCBjb252ZXJ0ZWQgYmFjayB0byBoc2wuXG4gIHJldHVybiAoMCwgX3JnYlRvSHNsLmRlZmF1bHQpKCgwLCBfcGFyc2VUb1JnYi5kZWZhdWx0KShjb2xvcikpO1xufVxuXG52YXIgX2RlZmF1bHQgPSBwYXJzZVRvSHNsO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxuLyoqXG4gKiBSZWR1Y2VzIGhleCB2YWx1ZXMgaWYgcG9zc2libGUgZS5nLiAjZmY4ODY2IHRvICNmODZcbiAqIEBwcml2YXRlXG4gKi9cbnZhciByZWR1Y2VIZXhWYWx1ZSA9IGZ1bmN0aW9uIHJlZHVjZUhleFZhbHVlKHZhbHVlKSB7XG4gIGlmICh2YWx1ZS5sZW5ndGggPT09IDcgJiYgdmFsdWVbMV0gPT09IHZhbHVlWzJdICYmIHZhbHVlWzNdID09PSB2YWx1ZVs0XSAmJiB2YWx1ZVs1XSA9PT0gdmFsdWVbNl0pIHtcbiAgICByZXR1cm4gXCIjXCIgKyB2YWx1ZVsxXSArIHZhbHVlWzNdICsgdmFsdWVbNV07XG4gIH1cblxuICByZXR1cm4gdmFsdWU7XG59O1xuXG52YXIgX2RlZmF1bHQgPSByZWR1Y2VIZXhWYWx1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbmZ1bmN0aW9uIG51bWJlclRvSGV4KHZhbHVlKSB7XG4gIHZhciBoZXggPSB2YWx1ZS50b1N0cmluZygxNik7XG4gIHJldHVybiBoZXgubGVuZ3RoID09PSAxID8gXCIwXCIgKyBoZXggOiBoZXg7XG59XG5cbnZhciBfZGVmYXVsdCA9IG51bWJlclRvSGV4O1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIF9oc2xUb1JnYiA9XG4vKiNfX1BVUkVfXyovXG5faW50ZXJvcFJlcXVpcmVEZWZhdWx0KFxuLyojX19QVVJFX18qL1xucmVxdWlyZShcIi4vX2hzbFRvUmdiXCIpKTtcblxudmFyIF9yZWR1Y2VIZXhWYWx1ZSA9XG4vKiNfX1BVUkVfXyovXG5faW50ZXJvcFJlcXVpcmVEZWZhdWx0KFxuLyojX19QVVJFX18qL1xucmVxdWlyZShcIi4vX3JlZHVjZUhleFZhbHVlXCIpKTtcblxudmFyIF9udW1iZXJUb0hleCA9XG4vKiNfX1BVUkVfXyovXG5faW50ZXJvcFJlcXVpcmVEZWZhdWx0KFxuLyojX19QVVJFX18qL1xucmVxdWlyZShcIi4vX251bWJlclRvSGV4XCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gY29sb3JUb0hleChjb2xvcikge1xuICByZXR1cm4gKDAsIF9udW1iZXJUb0hleC5kZWZhdWx0KShNYXRoLnJvdW5kKGNvbG9yICogMjU1KSk7XG59XG5cbmZ1bmN0aW9uIGNvbnZlcnRUb0hleChyZWQsIGdyZWVuLCBibHVlKSB7XG4gIHJldHVybiAoMCwgX3JlZHVjZUhleFZhbHVlLmRlZmF1bHQpKFwiI1wiICsgY29sb3JUb0hleChyZWQpICsgY29sb3JUb0hleChncmVlbikgKyBjb2xvclRvSGV4KGJsdWUpKTtcbn1cblxuZnVuY3Rpb24gaHNsVG9IZXgoaHVlLCBzYXR1cmF0aW9uLCBsaWdodG5lc3MpIHtcbiAgcmV0dXJuICgwLCBfaHNsVG9SZ2IuZGVmYXVsdCkoaHVlLCBzYXR1cmF0aW9uLCBsaWdodG5lc3MsIGNvbnZlcnRUb0hleCk7XG59XG5cbnZhciBfZGVmYXVsdCA9IGhzbFRvSGV4O1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMuZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIF9oc2xUb0hleCA9XG4vKiNfX1BVUkVfXyovXG5faW50ZXJvcFJlcXVpcmVEZWZhdWx0KFxuLyojX19QVVJFX18qL1xucmVxdWlyZShcIi4uL2ludGVybmFsSGVscGVycy9faHNsVG9IZXhcIikpO1xuXG52YXIgX2Vycm9ycyA9XG4vKiNfX1BVUkVfXyovXG5faW50ZXJvcFJlcXVpcmVEZWZhdWx0KFxuLyojX19QVVJFX18qL1xucmVxdWlyZShcIi4uL2ludGVybmFsSGVscGVycy9fZXJyb3JzXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuLyoqXG4gKiBSZXR1cm5zIGEgc3RyaW5nIHZhbHVlIGZvciB0aGUgY29sb3IuIFRoZSByZXR1cm5lZCByZXN1bHQgaXMgdGhlIHNtYWxsZXN0IHBvc3NpYmxlIGhleCBub3RhdGlvbi5cbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gU3R5bGVzIGFzIG9iamVjdCB1c2FnZVxuICogY29uc3Qgc3R5bGVzID0ge1xuICogICBiYWNrZ3JvdW5kOiBoc2woMzU5LCAwLjc1LCAwLjQpLFxuICogICBiYWNrZ3JvdW5kOiBoc2woeyBodWU6IDM2MCwgc2F0dXJhdGlvbjogMC43NSwgbGlnaHRuZXNzOiAwLjQgfSksXG4gKiB9XG4gKlxuICogLy8gc3R5bGVkLWNvbXBvbmVudHMgdXNhZ2VcbiAqIGNvbnN0IGRpdiA9IHN0eWxlZC5kaXZgXG4gKiAgIGJhY2tncm91bmQ6ICR7aHNsKDM1OSwgMC43NSwgMC40KX07XG4gKiAgIGJhY2tncm91bmQ6ICR7aHNsKHsgaHVlOiAzNjAsIHNhdHVyYXRpb246IDAuNzUsIGxpZ2h0bmVzczogMC40IH0pfTtcbiAqIGBcbiAqXG4gKiAvLyBDU1MgaW4gSlMgT3V0cHV0XG4gKlxuICogZWxlbWVudCB7XG4gKiAgIGJhY2tncm91bmQ6IFwiI2IzMTkxY1wiO1xuICogICBiYWNrZ3JvdW5kOiBcIiNiMzE5MWNcIjtcbiAqIH1cbiAqL1xuZnVuY3Rpb24gaHNsKHZhbHVlLCBzYXR1cmF0aW9uLCBsaWdodG5lc3MpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicgJiYgdHlwZW9mIHNhdHVyYXRpb24gPT09ICdudW1iZXInICYmIHR5cGVvZiBsaWdodG5lc3MgPT09ICdudW1iZXInKSB7XG4gICAgcmV0dXJuICgwLCBfaHNsVG9IZXguZGVmYXVsdCkodmFsdWUsIHNhdHVyYXRpb24sIGxpZ2h0bmVzcyk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiBzYXR1cmF0aW9uID09PSB1bmRlZmluZWQgJiYgbGlnaHRuZXNzID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gKDAsIF9oc2xUb0hleC5kZWZhdWx0KSh2YWx1ZS5odWUsIHZhbHVlLnNhdHVyYXRpb24sIHZhbHVlLmxpZ2h0bmVzcyk7XG4gIH1cblxuICB0aHJvdyBuZXcgX2Vycm9ycy5kZWZhdWx0KDEpO1xufVxuXG52YXIgX2RlZmF1bHQgPSBoc2w7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX2hzbFRvSGV4ID1cbi8qI19fUFVSRV9fKi9cbl9pbnRlcm9wUmVxdWlyZURlZmF1bHQoXG4vKiNfX1BVUkVfXyovXG5yZXF1aXJlKFwiLi4vaW50ZXJuYWxIZWxwZXJzL19oc2xUb0hleFwiKSk7XG5cbnZhciBfaHNsVG9SZ2IgPVxuLyojX19QVVJFX18qL1xuX2ludGVyb3BSZXF1aXJlRGVmYXVsdChcbi8qI19fUFVSRV9fKi9cbnJlcXVpcmUoXCIuLi9pbnRlcm5hbEhlbHBlcnMvX2hzbFRvUmdiXCIpKTtcblxudmFyIF9lcnJvcnMgPVxuLyojX19QVVJFX18qL1xuX2ludGVyb3BSZXF1aXJlRGVmYXVsdChcbi8qI19fUFVSRV9fKi9cbnJlcXVpcmUoXCIuLi9pbnRlcm5hbEhlbHBlcnMvX2Vycm9yc1wiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbi8qKlxuICogUmV0dXJucyBhIHN0cmluZyB2YWx1ZSBmb3IgdGhlIGNvbG9yLiBUaGUgcmV0dXJuZWQgcmVzdWx0IGlzIHRoZSBzbWFsbGVzdCBwb3NzaWJsZSByZ2JhIG9yIGhleCBub3RhdGlvbi5cbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gU3R5bGVzIGFzIG9iamVjdCB1c2FnZVxuICogY29uc3Qgc3R5bGVzID0ge1xuICogICBiYWNrZ3JvdW5kOiBoc2xhKDM1OSwgMC43NSwgMC40LCAwLjcpLFxuICogICBiYWNrZ3JvdW5kOiBoc2xhKHsgaHVlOiAzNjAsIHNhdHVyYXRpb246IDAuNzUsIGxpZ2h0bmVzczogMC40LCBhbHBoYTogMCw3IH0pLFxuICogICBiYWNrZ3JvdW5kOiBoc2xhKDM1OSwgMC43NSwgMC40LCAxKSxcbiAqIH1cbiAqXG4gKiAvLyBzdHlsZWQtY29tcG9uZW50cyB1c2FnZVxuICogY29uc3QgZGl2ID0gc3R5bGVkLmRpdmBcbiAqICAgYmFja2dyb3VuZDogJHtoc2xhKDM1OSwgMC43NSwgMC40LCAwLjcpfTtcbiAqICAgYmFja2dyb3VuZDogJHtoc2xhKHsgaHVlOiAzNjAsIHNhdHVyYXRpb246IDAuNzUsIGxpZ2h0bmVzczogMC40LCBhbHBoYTogMCw3IH0pfTtcbiAqICAgYmFja2dyb3VuZDogJHtoc2xhKDM1OSwgMC43NSwgMC40LCAxKX07XG4gKiBgXG4gKlxuICogLy8gQ1NTIGluIEpTIE91dHB1dFxuICpcbiAqIGVsZW1lbnQge1xuICogICBiYWNrZ3JvdW5kOiBcInJnYmEoMTc5LDI1LDI4LDAuNylcIjtcbiAqICAgYmFja2dyb3VuZDogXCJyZ2JhKDE3OSwyNSwyOCwwLjcpXCI7XG4gKiAgIGJhY2tncm91bmQ6IFwiI2IzMTkxY1wiO1xuICogfVxuICovXG5mdW5jdGlvbiBoc2xhKHZhbHVlLCBzYXR1cmF0aW9uLCBsaWdodG5lc3MsIGFscGhhKSB7XG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInICYmIHR5cGVvZiBzYXR1cmF0aW9uID09PSAnbnVtYmVyJyAmJiB0eXBlb2YgbGlnaHRuZXNzID09PSAnbnVtYmVyJyAmJiB0eXBlb2YgYWxwaGEgPT09ICdudW1iZXInKSB7XG4gICAgcmV0dXJuIGFscGhhID49IDEgPyAoMCwgX2hzbFRvSGV4LmRlZmF1bHQpKHZhbHVlLCBzYXR1cmF0aW9uLCBsaWdodG5lc3MpIDogXCJyZ2JhKFwiICsgKDAsIF9oc2xUb1JnYi5kZWZhdWx0KSh2YWx1ZSwgc2F0dXJhdGlvbiwgbGlnaHRuZXNzKSArIFwiLFwiICsgYWxwaGEgKyBcIilcIjtcbiAgfSBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHNhdHVyYXRpb24gPT09IHVuZGVmaW5lZCAmJiBsaWdodG5lc3MgPT09IHVuZGVmaW5lZCAmJiBhbHBoYSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIHZhbHVlLmFscGhhID49IDEgPyAoMCwgX2hzbFRvSGV4LmRlZmF1bHQpKHZhbHVlLmh1ZSwgdmFsdWUuc2F0dXJhdGlvbiwgdmFsdWUubGlnaHRuZXNzKSA6IFwicmdiYShcIiArICgwLCBfaHNsVG9SZ2IuZGVmYXVsdCkodmFsdWUuaHVlLCB2YWx1ZS5zYXR1cmF0aW9uLCB2YWx1ZS5saWdodG5lc3MpICsgXCIsXCIgKyB2YWx1ZS5hbHBoYSArIFwiKVwiO1xuICB9XG5cbiAgdGhyb3cgbmV3IF9lcnJvcnMuZGVmYXVsdCgyKTtcbn1cblxudmFyIF9kZWZhdWx0ID0gaHNsYTtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBfcmVkdWNlSGV4VmFsdWUgPVxuLyojX19QVVJFX18qL1xuX2ludGVyb3BSZXF1aXJlRGVmYXVsdChcbi8qI19fUFVSRV9fKi9cbnJlcXVpcmUoXCIuLi9pbnRlcm5hbEhlbHBlcnMvX3JlZHVjZUhleFZhbHVlXCIpKTtcblxudmFyIF9udW1iZXJUb0hleCA9XG4vKiNfX1BVUkVfXyovXG5faW50ZXJvcFJlcXVpcmVEZWZhdWx0KFxuLyojX19QVVJFX18qL1xucmVxdWlyZShcIi4uL2ludGVybmFsSGVscGVycy9fbnVtYmVyVG9IZXhcIikpO1xuXG52YXIgX2Vycm9ycyA9XG4vKiNfX1BVUkVfXyovXG5faW50ZXJvcFJlcXVpcmVEZWZhdWx0KFxuLyojX19QVVJFX18qL1xucmVxdWlyZShcIi4uL2ludGVybmFsSGVscGVycy9fZXJyb3JzXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuLyoqXG4gKiBSZXR1cm5zIGEgc3RyaW5nIHZhbHVlIGZvciB0aGUgY29sb3IuIFRoZSByZXR1cm5lZCByZXN1bHQgaXMgdGhlIHNtYWxsZXN0IHBvc3NpYmxlIGhleCBub3RhdGlvbi5cbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gU3R5bGVzIGFzIG9iamVjdCB1c2FnZVxuICogY29uc3Qgc3R5bGVzID0ge1xuICogICBiYWNrZ3JvdW5kOiByZ2IoMjU1LCAyMDUsIDEwMCksXG4gKiAgIGJhY2tncm91bmQ6IHJnYih7IHJlZDogMjU1LCBncmVlbjogMjA1LCBibHVlOiAxMDAgfSksXG4gKiB9XG4gKlxuICogLy8gc3R5bGVkLWNvbXBvbmVudHMgdXNhZ2VcbiAqIGNvbnN0IGRpdiA9IHN0eWxlZC5kaXZgXG4gKiAgIGJhY2tncm91bmQ6ICR7cmdiKDI1NSwgMjA1LCAxMDApfTtcbiAqICAgYmFja2dyb3VuZDogJHtyZ2IoeyByZWQ6IDI1NSwgZ3JlZW46IDIwNSwgYmx1ZTogMTAwIH0pfTtcbiAqIGBcbiAqXG4gKiAvLyBDU1MgaW4gSlMgT3V0cHV0XG4gKlxuICogZWxlbWVudCB7XG4gKiAgIGJhY2tncm91bmQ6IFwiI2ZmY2Q2NFwiO1xuICogICBiYWNrZ3JvdW5kOiBcIiNmZmNkNjRcIjtcbiAqIH1cbiAqL1xuZnVuY3Rpb24gcmdiKHZhbHVlLCBncmVlbiwgYmx1ZSkge1xuICBpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJyAmJiB0eXBlb2YgZ3JlZW4gPT09ICdudW1iZXInICYmIHR5cGVvZiBibHVlID09PSAnbnVtYmVyJykge1xuICAgIHJldHVybiAoMCwgX3JlZHVjZUhleFZhbHVlLmRlZmF1bHQpKFwiI1wiICsgKDAsIF9udW1iZXJUb0hleC5kZWZhdWx0KSh2YWx1ZSkgKyAoMCwgX251bWJlclRvSGV4LmRlZmF1bHQpKGdyZWVuKSArICgwLCBfbnVtYmVyVG9IZXguZGVmYXVsdCkoYmx1ZSkpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgZ3JlZW4gPT09IHVuZGVmaW5lZCAmJiBibHVlID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gKDAsIF9yZWR1Y2VIZXhWYWx1ZS5kZWZhdWx0KShcIiNcIiArICgwLCBfbnVtYmVyVG9IZXguZGVmYXVsdCkodmFsdWUucmVkKSArICgwLCBfbnVtYmVyVG9IZXguZGVmYXVsdCkodmFsdWUuZ3JlZW4pICsgKDAsIF9udW1iZXJUb0hleC5kZWZhdWx0KSh2YWx1ZS5ibHVlKSk7XG4gIH1cblxuICB0aHJvdyBuZXcgX2Vycm9ycy5kZWZhdWx0KDYpO1xufVxuXG52YXIgX2RlZmF1bHQgPSByZ2I7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX3BhcnNlVG9SZ2IgPVxuLyojX19QVVJFX18qL1xuX2ludGVyb3BSZXF1aXJlRGVmYXVsdChcbi8qI19fUFVSRV9fKi9cbnJlcXVpcmUoXCIuL3BhcnNlVG9SZ2JcIikpO1xuXG52YXIgX3JnYiA9XG4vKiNfX1BVUkVfXyovXG5faW50ZXJvcFJlcXVpcmVEZWZhdWx0KFxuLyojX19QVVJFX18qL1xucmVxdWlyZShcIi4vcmdiXCIpKTtcblxudmFyIF9lcnJvcnMgPVxuLyojX19QVVJFX18qL1xuX2ludGVyb3BSZXF1aXJlRGVmYXVsdChcbi8qI19fUFVSRV9fKi9cbnJlcXVpcmUoXCIuLi9pbnRlcm5hbEhlbHBlcnMvX2Vycm9yc1wiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbi8qKlxuICogUmV0dXJucyBhIHN0cmluZyB2YWx1ZSBmb3IgdGhlIGNvbG9yLiBUaGUgcmV0dXJuZWQgcmVzdWx0IGlzIHRoZSBzbWFsbGVzdCBwb3NzaWJsZSByZ2JhIG9yIGhleCBub3RhdGlvbi5cbiAqXG4gKiBDYW4gYWxzbyBiZSB1c2VkIHRvIGZhZGUgYSBjb2xvciBieSBwYXNzaW5nIGEgaGV4IHZhbHVlIG9yIG5hbWVkIENTUyBjb2xvciBhbG9uZyB3aXRoIGFuIGFscGhhIHZhbHVlLlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBTdHlsZXMgYXMgb2JqZWN0IHVzYWdlXG4gKiBjb25zdCBzdHlsZXMgPSB7XG4gKiAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyMDUsIDEwMCwgMC43KSxcbiAqICAgYmFja2dyb3VuZDogcmdiYSh7IHJlZDogMjU1LCBncmVlbjogMjA1LCBibHVlOiAxMDAsIGFscGhhOiAwLjcgfSksXG4gKiAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyMDUsIDEwMCwgMSksXG4gKiAgIGJhY2tncm91bmQ6IHJnYmEoJyNmZmZmZmYnLCAwLjQpLFxuICogICBiYWNrZ3JvdW5kOiByZ2JhKCdibGFjaycsIDAuNyksXG4gKiB9XG4gKlxuICogLy8gc3R5bGVkLWNvbXBvbmVudHMgdXNhZ2VcbiAqIGNvbnN0IGRpdiA9IHN0eWxlZC5kaXZgXG4gKiAgIGJhY2tncm91bmQ6ICR7cmdiYSgyNTUsIDIwNSwgMTAwLCAwLjcpfTtcbiAqICAgYmFja2dyb3VuZDogJHtyZ2JhKHsgcmVkOiAyNTUsIGdyZWVuOiAyMDUsIGJsdWU6IDEwMCwgYWxwaGE6IDAuNyB9KX07XG4gKiAgIGJhY2tncm91bmQ6ICR7cmdiYSgyNTUsIDIwNSwgMTAwLCAxKX07XG4gKiAgIGJhY2tncm91bmQ6ICR7cmdiYSgnI2ZmZmZmZicsIDAuNCl9O1xuICogICBiYWNrZ3JvdW5kOiAke3JnYmEoJ2JsYWNrJywgMC43KX07XG4gKiBgXG4gKlxuICogLy8gQ1NTIGluIEpTIE91dHB1dFxuICpcbiAqIGVsZW1lbnQge1xuICogICBiYWNrZ3JvdW5kOiBcInJnYmEoMjU1LDIwNSwxMDAsMC43KVwiO1xuICogICBiYWNrZ3JvdW5kOiBcInJnYmEoMjU1LDIwNSwxMDAsMC43KVwiO1xuICogICBiYWNrZ3JvdW5kOiBcIiNmZmNkNjRcIjtcbiAqICAgYmFja2dyb3VuZDogXCJyZ2JhKDI1NSwyNTUsMjU1LDAuNClcIjtcbiAqICAgYmFja2dyb3VuZDogXCJyZ2JhKDAsMCwwLDAuNylcIjtcbiAqIH1cbiAqL1xuZnVuY3Rpb24gcmdiYShmaXJzdFZhbHVlLCBzZWNvbmRWYWx1ZSwgdGhpcmRWYWx1ZSwgZm91cnRoVmFsdWUpIHtcbiAgaWYgKHR5cGVvZiBmaXJzdFZhbHVlID09PSAnc3RyaW5nJyAmJiB0eXBlb2Ygc2Vjb25kVmFsdWUgPT09ICdudW1iZXInKSB7XG4gICAgdmFyIHJnYlZhbHVlID0gKDAsIF9wYXJzZVRvUmdiLmRlZmF1bHQpKGZpcnN0VmFsdWUpO1xuICAgIHJldHVybiBcInJnYmEoXCIgKyByZ2JWYWx1ZS5yZWQgKyBcIixcIiArIHJnYlZhbHVlLmdyZWVuICsgXCIsXCIgKyByZ2JWYWx1ZS5ibHVlICsgXCIsXCIgKyBzZWNvbmRWYWx1ZSArIFwiKVwiO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBmaXJzdFZhbHVlID09PSAnbnVtYmVyJyAmJiB0eXBlb2Ygc2Vjb25kVmFsdWUgPT09ICdudW1iZXInICYmIHR5cGVvZiB0aGlyZFZhbHVlID09PSAnbnVtYmVyJyAmJiB0eXBlb2YgZm91cnRoVmFsdWUgPT09ICdudW1iZXInKSB7XG4gICAgcmV0dXJuIGZvdXJ0aFZhbHVlID49IDEgPyAoMCwgX3JnYi5kZWZhdWx0KShmaXJzdFZhbHVlLCBzZWNvbmRWYWx1ZSwgdGhpcmRWYWx1ZSkgOiBcInJnYmEoXCIgKyBmaXJzdFZhbHVlICsgXCIsXCIgKyBzZWNvbmRWYWx1ZSArIFwiLFwiICsgdGhpcmRWYWx1ZSArIFwiLFwiICsgZm91cnRoVmFsdWUgKyBcIilcIjtcbiAgfSBlbHNlIGlmICh0eXBlb2YgZmlyc3RWYWx1ZSA9PT0gJ29iamVjdCcgJiYgc2Vjb25kVmFsdWUgPT09IHVuZGVmaW5lZCAmJiB0aGlyZFZhbHVlID09PSB1bmRlZmluZWQgJiYgZm91cnRoVmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBmaXJzdFZhbHVlLmFscGhhID49IDEgPyAoMCwgX3JnYi5kZWZhdWx0KShmaXJzdFZhbHVlLnJlZCwgZmlyc3RWYWx1ZS5ncmVlbiwgZmlyc3RWYWx1ZS5ibHVlKSA6IFwicmdiYShcIiArIGZpcnN0VmFsdWUucmVkICsgXCIsXCIgKyBmaXJzdFZhbHVlLmdyZWVuICsgXCIsXCIgKyBmaXJzdFZhbHVlLmJsdWUgKyBcIixcIiArIGZpcnN0VmFsdWUuYWxwaGEgKyBcIilcIjtcbiAgfVxuXG4gIHRocm93IG5ldyBfZXJyb3JzLmRlZmF1bHQoNyk7XG59XG5cbnZhciBfZGVmYXVsdCA9IHJnYmE7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX2hzbCA9XG4vKiNfX1BVUkVfXyovXG5faW50ZXJvcFJlcXVpcmVEZWZhdWx0KFxuLyojX19QVVJFX18qL1xucmVxdWlyZShcIi4vaHNsXCIpKTtcblxudmFyIF9oc2xhID1cbi8qI19fUFVSRV9fKi9cbl9pbnRlcm9wUmVxdWlyZURlZmF1bHQoXG4vKiNfX1BVUkVfXyovXG5yZXF1aXJlKFwiLi9oc2xhXCIpKTtcblxudmFyIF9yZ2IgPVxuLyojX19QVVJFX18qL1xuX2ludGVyb3BSZXF1aXJlRGVmYXVsdChcbi8qI19fUFVSRV9fKi9cbnJlcXVpcmUoXCIuL3JnYlwiKSk7XG5cbnZhciBfcmdiYSA9XG4vKiNfX1BVUkVfXyovXG5faW50ZXJvcFJlcXVpcmVEZWZhdWx0KFxuLyojX19QVVJFX18qL1xucmVxdWlyZShcIi4vcmdiYVwiKSk7XG5cbnZhciBfZXJyb3JzID1cbi8qI19fUFVSRV9fKi9cbl9pbnRlcm9wUmVxdWlyZURlZmF1bHQoXG4vKiNfX1BVUkVfXyovXG5yZXF1aXJlKFwiLi4vaW50ZXJuYWxIZWxwZXJzL19lcnJvcnNcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgaXNSZ2IgPSBmdW5jdGlvbiBpc1JnYihjb2xvcikge1xuICByZXR1cm4gdHlwZW9mIGNvbG9yLnJlZCA9PT0gJ251bWJlcicgJiYgdHlwZW9mIGNvbG9yLmdyZWVuID09PSAnbnVtYmVyJyAmJiB0eXBlb2YgY29sb3IuYmx1ZSA9PT0gJ251bWJlcicgJiYgKHR5cGVvZiBjb2xvci5hbHBoYSAhPT0gJ251bWJlcicgfHwgdHlwZW9mIGNvbG9yLmFscGhhID09PSAndW5kZWZpbmVkJyk7XG59O1xuXG52YXIgaXNSZ2JhID0gZnVuY3Rpb24gaXNSZ2JhKGNvbG9yKSB7XG4gIHJldHVybiB0eXBlb2YgY29sb3IucmVkID09PSAnbnVtYmVyJyAmJiB0eXBlb2YgY29sb3IuZ3JlZW4gPT09ICdudW1iZXInICYmIHR5cGVvZiBjb2xvci5ibHVlID09PSAnbnVtYmVyJyAmJiB0eXBlb2YgY29sb3IuYWxwaGEgPT09ICdudW1iZXInO1xufTtcblxudmFyIGlzSHNsID0gZnVuY3Rpb24gaXNIc2woY29sb3IpIHtcbiAgcmV0dXJuIHR5cGVvZiBjb2xvci5odWUgPT09ICdudW1iZXInICYmIHR5cGVvZiBjb2xvci5zYXR1cmF0aW9uID09PSAnbnVtYmVyJyAmJiB0eXBlb2YgY29sb3IubGlnaHRuZXNzID09PSAnbnVtYmVyJyAmJiAodHlwZW9mIGNvbG9yLmFscGhhICE9PSAnbnVtYmVyJyB8fCB0eXBlb2YgY29sb3IuYWxwaGEgPT09ICd1bmRlZmluZWQnKTtcbn07XG5cbnZhciBpc0hzbGEgPSBmdW5jdGlvbiBpc0hzbGEoY29sb3IpIHtcbiAgcmV0dXJuIHR5cGVvZiBjb2xvci5odWUgPT09ICdudW1iZXInICYmIHR5cGVvZiBjb2xvci5zYXR1cmF0aW9uID09PSAnbnVtYmVyJyAmJiB0eXBlb2YgY29sb3IubGlnaHRuZXNzID09PSAnbnVtYmVyJyAmJiB0eXBlb2YgY29sb3IuYWxwaGEgPT09ICdudW1iZXInO1xufTtcbi8qKlxuICogQ29udmVydHMgYSBSZ2JDb2xvciwgUmdiYUNvbG9yLCBIc2xDb2xvciBvciBIc2xhQ29sb3Igb2JqZWN0IHRvIGEgY29sb3Igc3RyaW5nLlxuICogVGhpcyB1dGlsIGlzIHVzZWZ1bCBpbiBjYXNlIHlvdSBvbmx5IGtub3cgb24gcnVudGltZSB3aGljaCBjb2xvciBvYmplY3QgaXNcbiAqIHVzZWQuIE90aGVyd2lzZSB3ZSByZWNvbW1lbmQgdG8gcmVseSBvbiBgcmdiYCwgYHJnYmFgLCBgaHNsYCBvciBgaHNsYWAuXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFN0eWxlcyBhcyBvYmplY3QgdXNhZ2VcbiAqIGNvbnN0IHN0eWxlcyA9IHtcbiAqICAgYmFja2dyb3VuZDogdG9Db2xvclN0cmluZyh7IHJlZDogMjU1LCBncmVlbjogMjA1LCBibHVlOiAxMDAgfSksXG4gKiAgIGJhY2tncm91bmQ6IHRvQ29sb3JTdHJpbmcoeyByZWQ6IDI1NSwgZ3JlZW46IDIwNSwgYmx1ZTogMTAwLCBhbHBoYTogMC43MiB9KSxcbiAqICAgYmFja2dyb3VuZDogdG9Db2xvclN0cmluZyh7IGh1ZTogMjQwLCBzYXR1cmF0aW9uOiAxLCBsaWdodG5lc3M6IDAuNSB9KSxcbiAqICAgYmFja2dyb3VuZDogdG9Db2xvclN0cmluZyh7IGh1ZTogMzYwLCBzYXR1cmF0aW9uOiAwLjc1LCBsaWdodG5lc3M6IDAuNCwgYWxwaGE6IDAuNzIgfSksXG4gKiB9XG4gKlxuICogLy8gc3R5bGVkLWNvbXBvbmVudHMgdXNhZ2VcbiAqIGNvbnN0IGRpdiA9IHN0eWxlZC5kaXZgXG4gKiAgIGJhY2tncm91bmQ6ICR7dG9Db2xvclN0cmluZyh7IHJlZDogMjU1LCBncmVlbjogMjA1LCBibHVlOiAxMDAgfSl9O1xuICogICBiYWNrZ3JvdW5kOiAke3RvQ29sb3JTdHJpbmcoeyByZWQ6IDI1NSwgZ3JlZW46IDIwNSwgYmx1ZTogMTAwLCBhbHBoYTogMC43MiB9KX07XG4gKiAgIGJhY2tncm91bmQ6ICR7dG9Db2xvclN0cmluZyh7IGh1ZTogMjQwLCBzYXR1cmF0aW9uOiAxLCBsaWdodG5lc3M6IDAuNSB9KX07XG4gKiAgIGJhY2tncm91bmQ6ICR7dG9Db2xvclN0cmluZyh7IGh1ZTogMzYwLCBzYXR1cmF0aW9uOiAwLjc1LCBsaWdodG5lc3M6IDAuNCwgYWxwaGE6IDAuNzIgfSl9O1xuICogYFxuICpcbiAqIC8vIENTUyBpbiBKUyBPdXRwdXRcbiAqIGVsZW1lbnQge1xuICogICBiYWNrZ3JvdW5kOiBcIiNmZmNkNjRcIjtcbiAqICAgYmFja2dyb3VuZDogXCJyZ2JhKDI1NSwyMDUsMTAwLDAuNzIpXCI7XG4gKiAgIGJhY2tncm91bmQ6IFwiIzAwZlwiO1xuICogICBiYWNrZ3JvdW5kOiBcInJnYmEoMTc5LDI1LDI1LDAuNzIpXCI7XG4gKiB9XG4gKi9cblxuXG5mdW5jdGlvbiB0b0NvbG9yU3RyaW5nKGNvbG9yKSB7XG4gIGlmICh0eXBlb2YgY29sb3IgIT09ICdvYmplY3QnKSB0aHJvdyBuZXcgX2Vycm9ycy5kZWZhdWx0KDgpO1xuICBpZiAoaXNSZ2JhKGNvbG9yKSkgcmV0dXJuICgwLCBfcmdiYS5kZWZhdWx0KShjb2xvcik7XG4gIGlmIChpc1JnYihjb2xvcikpIHJldHVybiAoMCwgX3JnYi5kZWZhdWx0KShjb2xvcik7XG4gIGlmIChpc0hzbGEoY29sb3IpKSByZXR1cm4gKDAsIF9oc2xhLmRlZmF1bHQpKGNvbG9yKTtcbiAgaWYgKGlzSHNsKGNvbG9yKSkgcmV0dXJuICgwLCBfaHNsLmRlZmF1bHQpKGNvbG9yKTtcbiAgdGhyb3cgbmV3IF9lcnJvcnMuZGVmYXVsdCg4KTtcbn1cblxudmFyIF9kZWZhdWx0ID0gdG9Db2xvclN0cmluZztcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBfY3VycnkgPVxuLyojX19QVVJFX18qL1xuX2ludGVyb3BSZXF1aXJlRGVmYXVsdChcbi8qI19fUFVSRV9fKi9cbnJlcXVpcmUoXCIuLi9pbnRlcm5hbEhlbHBlcnMvX2N1cnJ5XCIpKTtcblxudmFyIF9ndWFyZCA9XG4vKiNfX1BVUkVfXyovXG5faW50ZXJvcFJlcXVpcmVEZWZhdWx0KFxuLyojX19QVVJFX18qL1xucmVxdWlyZShcIi4uL2ludGVybmFsSGVscGVycy9fZ3VhcmRcIikpO1xuXG52YXIgX3BhcnNlVG9Ic2wgPVxuLyojX19QVVJFX18qL1xuX2ludGVyb3BSZXF1aXJlRGVmYXVsdChcbi8qI19fUFVSRV9fKi9cbnJlcXVpcmUoXCIuL3BhcnNlVG9Ic2xcIikpO1xuXG52YXIgX3RvQ29sb3JTdHJpbmcgPVxuLyojX19QVVJFX18qL1xuX2ludGVyb3BSZXF1aXJlRGVmYXVsdChcbi8qI19fUFVSRV9fKi9cbnJlcXVpcmUoXCIuL3RvQ29sb3JTdHJpbmdcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfZXh0ZW5kcygpIHsgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9OyByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfVxuXG4vKipcbiAqIFJldHVybnMgYSBzdHJpbmcgdmFsdWUgZm9yIHRoZSBkYXJrZW5lZCBjb2xvci5cbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gU3R5bGVzIGFzIG9iamVjdCB1c2FnZVxuICogY29uc3Qgc3R5bGVzID0ge1xuICogICBiYWNrZ3JvdW5kOiBkYXJrZW4oMC4yLCAnI0ZGQ0Q2NCcpLFxuICogICBiYWNrZ3JvdW5kOiBkYXJrZW4oJzAuMicsICdyZ2JhKDI1NSwyMDUsMTAwLDAuNyknKSxcbiAqIH1cbiAqXG4gKiAvLyBzdHlsZWQtY29tcG9uZW50cyB1c2FnZVxuICogY29uc3QgZGl2ID0gc3R5bGVkLmRpdmBcbiAqICAgYmFja2dyb3VuZDogJHtkYXJrZW4oMC4yLCAnI0ZGQ0Q2NCcpfTtcbiAqICAgYmFja2dyb3VuZDogJHtkYXJrZW4oJzAuMicsICdyZ2JhKDI1NSwyMDUsMTAwLDAuNyknKX07XG4gKiBgXG4gKlxuICogLy8gQ1NTIGluIEpTIE91dHB1dFxuICpcbiAqIGVsZW1lbnQge1xuICogICBiYWNrZ3JvdW5kOiBcIiNmZmJkMzFcIjtcbiAqICAgYmFja2dyb3VuZDogXCJyZ2JhKDI1NSwxODksNDksMC43KVwiO1xuICogfVxuICovXG5mdW5jdGlvbiBkYXJrZW4oYW1vdW50LCBjb2xvcikge1xuICBpZiAoY29sb3IgPT09ICd0cmFuc3BhcmVudCcpIHJldHVybiBjb2xvcjtcbiAgdmFyIGhzbENvbG9yID0gKDAsIF9wYXJzZVRvSHNsLmRlZmF1bHQpKGNvbG9yKTtcbiAgcmV0dXJuICgwLCBfdG9Db2xvclN0cmluZy5kZWZhdWx0KShfZXh0ZW5kcyh7fSwgaHNsQ29sb3IsIHtcbiAgICBsaWdodG5lc3M6ICgwLCBfZ3VhcmQuZGVmYXVsdCkoMCwgMSwgaHNsQ29sb3IubGlnaHRuZXNzIC0gcGFyc2VGbG9hdChhbW91bnQpKVxuICB9KSk7XG59IC8vIHByZXR0aWVyLWlnbm9yZVxuXG5cbnZhciBjdXJyaWVkRGFya2VuID1cbi8qI19fUFVSRV9fKi9cbigwLCBfY3VycnkuZGVmYXVsdFxuLyogOjo8bnVtYmVyIHwgc3RyaW5nLCBzdHJpbmcsIHN0cmluZz4gKi9cbikoZGFya2VuKTtcbnZhciBfZGVmYXVsdCA9IGN1cnJpZWREYXJrZW47XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX3BhcnNlVG9SZ2IgPVxuLyojX19QVVJFX18qL1xuX2ludGVyb3BSZXF1aXJlRGVmYXVsdChcbi8qI19fUFVSRV9fKi9cbnJlcXVpcmUoXCIuL3BhcnNlVG9SZ2JcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG4vKipcbiAqIFJldHVybnMgYSBudW1iZXIgKGZsb2F0KSByZXByZXNlbnRpbmcgdGhlIGx1bWluYW5jZSBvZiBhIGNvbG9yLlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBTdHlsZXMgYXMgb2JqZWN0IHVzYWdlXG4gKiBjb25zdCBzdHlsZXMgPSB7XG4gKiAgIGJhY2tncm91bmQ6IGdldEx1bWluYW5jZSgnI0NDQ0Q2NCcpID49IGdldEx1bWluYW5jZSgnIzAwMDBmZicpID8gJyNDQ0NENjQnIDogJyMwMDAwZmYnLFxuICogICBiYWNrZ3JvdW5kOiBnZXRMdW1pbmFuY2UoJ3JnYmEoNTgsIDEzMywgMjU1LCAxKScpID49IGdldEx1bWluYW5jZSgncmdiYSgyNTUsIDU3LCAxNDksIDEpJykgP1xuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICdyZ2JhKDU4LCAxMzMsIDI1NSwgMSknIDpcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAncmdiYSgyNTUsIDU3LCAxNDksIDEpJyxcbiAqIH1cbiAqXG4gKiAvLyBzdHlsZWQtY29tcG9uZW50cyB1c2FnZVxuICogY29uc3QgZGl2ID0gc3R5bGVkLmRpdmBcbiAqICAgYmFja2dyb3VuZDogJHtnZXRMdW1pbmFuY2UoJyNDQ0NENjQnKSA+PSBnZXRMdW1pbmFuY2UoJyMwMDAwZmYnKSA/ICcjQ0NDRDY0JyA6ICcjMDAwMGZmJ307XG4gKiAgIGJhY2tncm91bmQ6ICR7Z2V0THVtaW5hbmNlKCdyZ2JhKDU4LCAxMzMsIDI1NSwgMSknKSA+PSBnZXRMdW1pbmFuY2UoJ3JnYmEoMjU1LCA1NywgMTQ5LCAxKScpID9cbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAncmdiYSg1OCwgMTMzLCAyNTUsIDEpJyA6XG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3JnYmEoMjU1LCA1NywgMTQ5LCAxKSd9O1xuICpcbiAqIC8vIENTUyBpbiBKUyBPdXRwdXRcbiAqXG4gKiBkaXYge1xuICogICBiYWNrZ3JvdW5kOiBcIiNDQ0NENjRcIjtcbiAqICAgYmFja2dyb3VuZDogXCJyZ2JhKDU4LCAxMzMsIDI1NSwgMSlcIjtcbiAqIH1cbiAqL1xuZnVuY3Rpb24gZ2V0THVtaW5hbmNlKGNvbG9yKSB7XG4gIGlmIChjb2xvciA9PT0gJ3RyYW5zcGFyZW50JykgcmV0dXJuIDA7XG4gIHZhciByZ2JDb2xvciA9ICgwLCBfcGFyc2VUb1JnYi5kZWZhdWx0KShjb2xvcik7XG5cbiAgdmFyIF9PYmplY3Qka2V5cyRtYXAgPSBPYmplY3Qua2V5cyhyZ2JDb2xvcikubWFwKGZ1bmN0aW9uIChrZXkpIHtcbiAgICB2YXIgY2hhbm5lbCA9IHJnYkNvbG9yW2tleV0gLyAyNTU7XG4gICAgcmV0dXJuIGNoYW5uZWwgPD0gMC4wMzkyOCA/IGNoYW5uZWwgLyAxMi45MiA6IE1hdGgucG93KChjaGFubmVsICsgMC4wNTUpIC8gMS4wNTUsIDIuNCk7XG4gIH0pLFxuICAgICAgciA9IF9PYmplY3Qka2V5cyRtYXBbMF0sXG4gICAgICBnID0gX09iamVjdCRrZXlzJG1hcFsxXSxcbiAgICAgIGIgPSBfT2JqZWN0JGtleXMkbWFwWzJdO1xuXG4gIHJldHVybiBwYXJzZUZsb2F0KCgwLjIxMjYgKiByICsgMC43MTUyICogZyArIDAuMDcyMiAqIGIpLnRvRml4ZWQoMykpO1xufVxuXG52YXIgX2RlZmF1bHQgPSBnZXRMdW1pbmFuY2U7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0OyIsImltcG9ydCBnZXRMdW1pbmFuY2UgZnJvbSAncG9saXNoZWQvbGliL2NvbG9yL2dldEx1bWluYW5jZSc7XG5pbXBvcnQgeyBUaGVtZVR5cGUgfSBmcm9tICcuLi90eXBlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZpbmRDb2xvckludmVydCh7IGJsYWNrLCB3aGl0ZSB9OiBUaGVtZVR5cGUsIGNvbG9yOiBzdHJpbmcpIHtcbiAgaWYgKCFjb2xvciB8fCBnZXRMdW1pbmFuY2UoY29sb3IpID4gMC41NSkge1xuICAgIHJldHVybiBibGFjaztcbiAgfVxuICByZXR1cm4gd2hpdGU7XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIF9jdXJyeSA9XG4vKiNfX1BVUkVfXyovXG5faW50ZXJvcFJlcXVpcmVEZWZhdWx0KFxuLyojX19QVVJFX18qL1xucmVxdWlyZShcIi4uL2ludGVybmFsSGVscGVycy9fY3VycnlcIikpO1xuXG52YXIgX2d1YXJkID1cbi8qI19fUFVSRV9fKi9cbl9pbnRlcm9wUmVxdWlyZURlZmF1bHQoXG4vKiNfX1BVUkVfXyovXG5yZXF1aXJlKFwiLi4vaW50ZXJuYWxIZWxwZXJzL19ndWFyZFwiKSk7XG5cbnZhciBfcmdiYSA9XG4vKiNfX1BVUkVfXyovXG5faW50ZXJvcFJlcXVpcmVEZWZhdWx0KFxuLyojX19QVVJFX18qL1xucmVxdWlyZShcIi4vcmdiYVwiKSk7XG5cbnZhciBfcGFyc2VUb1JnYiA9XG4vKiNfX1BVUkVfXyovXG5faW50ZXJvcFJlcXVpcmVEZWZhdWx0KFxuLyojX19QVVJFX18qL1xucmVxdWlyZShcIi4vcGFyc2VUb1JnYlwiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9leHRlbmRzKCkgeyBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07IHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9XG5cbi8qKlxuICogRGVjcmVhc2VzIHRoZSBvcGFjaXR5IG9mIGEgY29sb3IuIEl0cyByYW5nZSBmb3IgdGhlIGFtb3VudCBpcyBiZXR3ZWVuIDAgdG8gMS5cbiAqXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFN0eWxlcyBhcyBvYmplY3QgdXNhZ2VcbiAqIGNvbnN0IHN0eWxlcyA9IHtcbiAqICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnRpemUoMC4xLCAnI2ZmZicpO1xuICogICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudGl6ZSgwLjIsICdoc2woMCwgMCUsIDEwMCUpJyksXG4gKiAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50aXplKCcwLjUnLCAncmdiYSgyNTUsIDAsIDAsIDAuOCknKSxcbiAqIH1cbiAqXG4gKiAvLyBzdHlsZWQtY29tcG9uZW50cyB1c2FnZVxuICogY29uc3QgZGl2ID0gc3R5bGVkLmRpdmBcbiAqICAgYmFja2dyb3VuZDogJHt0cmFuc3BhcmVudGl6ZSgwLjEsICcjZmZmJyl9O1xuICogICBiYWNrZ3JvdW5kOiAke3RyYW5zcGFyZW50aXplKDAuMiwgJ2hzbCgwLCAwJSwgMTAwJSknKX0sXG4gKiAgIGJhY2tncm91bmQ6ICR7dHJhbnNwYXJlbnRpemUoJzAuNScsICdyZ2JhKDI1NSwgMCwgMCwgMC44KScpfSxcbiAqIGBcbiAqXG4gKiAvLyBDU1MgaW4gSlMgT3V0cHV0XG4gKlxuICogZWxlbWVudCB7XG4gKiAgIGJhY2tncm91bmQ6IFwicmdiYSgyNTUsMjU1LDI1NSwwLjkpXCI7XG4gKiAgIGJhY2tncm91bmQ6IFwicmdiYSgyNTUsMjU1LDI1NSwwLjgpXCI7XG4gKiAgIGJhY2tncm91bmQ6IFwicmdiYSgyNTUsMCwwLDAuMylcIjtcbiAqIH1cbiAqL1xuZnVuY3Rpb24gdHJhbnNwYXJlbnRpemUoYW1vdW50LCBjb2xvcikge1xuICBpZiAoY29sb3IgPT09ICd0cmFuc3BhcmVudCcpIHJldHVybiBjb2xvcjtcbiAgdmFyIHBhcnNlZENvbG9yID0gKDAsIF9wYXJzZVRvUmdiLmRlZmF1bHQpKGNvbG9yKTtcbiAgdmFyIGFscGhhID0gdHlwZW9mIHBhcnNlZENvbG9yLmFscGhhID09PSAnbnVtYmVyJyA/IHBhcnNlZENvbG9yLmFscGhhIDogMTtcblxuICB2YXIgY29sb3JXaXRoQWxwaGEgPSBfZXh0ZW5kcyh7fSwgcGFyc2VkQ29sb3IsIHtcbiAgICBhbHBoYTogKDAsIF9ndWFyZC5kZWZhdWx0KSgwLCAxLCAoYWxwaGEgKiAxMDAgLSBwYXJzZUZsb2F0KGFtb3VudCkgKiAxMDApIC8gMTAwKVxuICB9KTtcblxuICByZXR1cm4gKDAsIF9yZ2JhLmRlZmF1bHQpKGNvbG9yV2l0aEFscGhhKTtcbn0gLy8gcHJldHRpZXItaWdub3JlXG5cblxudmFyIGN1cnJpZWRUcmFuc3BhcmVudGl6ZSA9XG4vKiNfX1BVUkVfXyovXG4oMCwgX2N1cnJ5LmRlZmF1bHRcbi8qIDo6PG51bWJlciB8IHN0cmluZywgc3RyaW5nLCBzdHJpbmc+ICovXG4pKHRyYW5zcGFyZW50aXplKTtcbnZhciBfZGVmYXVsdCA9IGN1cnJpZWRUcmFuc3BhcmVudGl6ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7IiwiaW1wb3J0IHsgY3NzIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHRyYW5zcGFyZW50aXplIGZyb20gJ3BvbGlzaGVkL2xpYi9jb2xvci90cmFuc3BhcmVudGl6ZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJveFNoYWRvdyhzaXplOiBzdHJpbmcsIGNvbG9yOiBzdHJpbmcsIGFtb3VudD86IG51bWJlcikge1xuICBjb25zdCBzaGFkb3dDb2xvciA9IGFtb3VudCA/IHRyYW5zcGFyZW50aXplKGFtb3VudCwgY29sb3IpIDogY29sb3I7XG4gIHJldHVybiBjc3NgYm94LXNoYWRvdzogMCAwIDAgJHtzaXplfSAke3NoYWRvd0NvbG9yfTtgO1xufVxuIiwiaW1wb3J0IHsgU2l6ZVR5cGUgfSBmcm9tICcuLi90eXBlcyc7XG5cbnR5cGUgU2l6ZVByb3BzTmFtZVR5cGUgPSAnZm9udC1zaXplJyB8ICdoZWlnaHQnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzZXRTaXplKG5hbWU6IFNpemVQcm9wc05hbWVUeXBlLCBzaXplPzogU2l6ZVR5cGUpIHtcbiAgc3dpdGNoIChzaXplKSB7XG4gICAgY2FzZSAnc21hbGwnOlxuICAgICAgcmV0dXJuIGAke25hbWV9OiAwLjc1cmVtO2A7XG4gICAgY2FzZSAnbWVkaXVtJzpcbiAgICAgIHJldHVybiBgJHtuYW1lfTogMS4yNXJlbTtgO1xuICAgIGNhc2UgJ2xhcmdlJzpcbiAgICAgIHJldHVybiBgJHtuYW1lfTogMS41cmVtO2A7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBgJHtuYW1lfTogMXJlbTtgO1xuICB9XG59XG4iLCJpbXBvcnQgeyBjc3MgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgdHJhbnNwYXJlbnRpemUgZnJvbSAncG9saXNoZWQvbGliL2NvbG9yL3RyYW5zcGFyZW50aXplJztcbmltcG9ydCB7IFRoZW1lVHlwZSwgQ1NTVHlwZSB9IGZyb20gJy4uL3R5cGVzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGlzYWJsZWRDb2xvcih0aGVtZTogVGhlbWVUeXBlKTogQ1NTVHlwZSB7XG4gIGNvbnN0IHRleHRDb2xvciA9IHRyYW5zcGFyZW50aXplKDAuMTUsIHRoZW1lLnRleHREYXJrKTtcbiAgY29uc3QgYmFja0NvbG9yID0gdHJhbnNwYXJlbnRpemUoMC41NSwgdGhlbWUuYm9yZGVyKTtcbiAgcmV0dXJuIGNzc2BcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICAgIGNvbG9yOiAke3RleHRDb2xvcn07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHtiYWNrQ29sb3J9O1xuICBgO1xufVxuIiwiaW1wb3J0IHN0eWxlZCwgeyBjc3MgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgeyBIVE1MQXR0cmlidXRlcyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBkYXJrZW4gZnJvbSAncG9saXNoZWQvbGliL2NvbG9yL2Rhcmtlbic7XG5pbXBvcnQgZmluZENvbG9ySW52ZXJ0IGZyb20gJy4uLy4uL3V0aWxzL2ZpbmRDb2xvckludmVydCc7XG5pbXBvcnQgYm94U2hhZG93IGZyb20gJy4uLy4uL3V0aWxzL2JveFNoYWRvdyc7XG5pbXBvcnQgc2V0U2l6ZSBmcm9tICcuLi8uLi91dGlscy9zZXRTaXplJztcbmltcG9ydCBkaXNhYmxlZENvbG9yIGZyb20gJy4uLy4uL3V0aWxzL2Rpc2FibGVkQ29sb3InO1xuaW1wb3J0IHsgQ29sb3JUeXBlLCBUaGVtZVR5cGUsIFNpemVUeXBlIH0gZnJvbSAnLi4vLi4vdHlwZXMnO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICB0aGVtZTogVGhlbWVUeXBlO1xuICBjb2xvcj86IENvbG9yVHlwZTtcbiAgb3V0bGluZT86IGJvb2xlYW47XG4gIGRpc2FibGVkPzogYm9vbGVhbjtcbn1cblxuZnVuY3Rpb24gc2V0Q29sb3IoeyB0aGVtZSwgY29sb3IsIG91dGxpbmUsIGRpc2FibGVkIH06IFByb3BzKSB7XG4gIGlmIChkaXNhYmxlZCkge1xuICAgIHJldHVybiBkaXNhYmxlZENvbG9yKHRoZW1lKTtcbiAgfVxuICBpZiAoIWNvbG9yKSB7XG4gICAgcmV0dXJuIGNzc2BcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7dGhlbWUud2hpdGV9O1xuICAgICAgYm9yZGVyLWNvbG9yOiAke3RoZW1lLmJvcmRlcn07XG4gICAgICBjb2xvcjogJHt0aGVtZS50ZXh0fTtcblxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGJvcmRlci1jb2xvcjogJHt0aGVtZS5ib3JkZXJIb3Zlcn07XG4gICAgICB9XG5cbiAgICAgICY6YWN0aXZlIHtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAke3RoZW1lLmJvcmRlckFjdGl2ZX07XG4gICAgICB9XG4gICAgYDtcbiAgfVxuICBpZiAoY29sb3IgPT09ICd0ZXh0Jykge1xuICAgIHJldHVybiBjc3NgXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICBjb2xvcjogJHt0aGVtZS50ZXh0fTtcblxuICAgICAgJjpob3ZlcntcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICB9XG4gICAgYDtcbiAgfVxuXG4gIGNvbnN0IHRhcmdldCA9IHRoZW1lW2NvbG9yXSB8fCBjb2xvcjtcbiAgY29uc3QgaW52ZXJ0Q29sb3IgPSBmaW5kQ29sb3JJbnZlcnQodGhlbWUsIHRhcmdldCk7XG4gIGlmIChvdXRsaW5lKSB7XG4gICAgcmV0dXJuIGNzc2BcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgYm9yZGVyLWNvbG9yOiAke3RhcmdldH07XG4gICAgICBjb2xvcjogJHt0YXJnZXR9O1xuXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHt0YXJnZXR9O1xuICAgICAgICBjb2xvcjogJHtpbnZlcnRDb2xvcn07XG4gICAgICB9XG5cbiAgICAgICY6Zm9jdXMge1xuICAgICAgICAke2JveFNoYWRvdygnMC4ycmVtJywgdGFyZ2V0LCAwLjIpfVxuICAgICAgfVxuICAgIGA7XG4gIH1cblxuICByZXR1cm4gY3NzYFxuICAgIGJhY2tncm91bmQtY29sb3I6ICR7dGFyZ2V0fTtcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGNvbG9yOiAke2ludmVydENvbG9yfTtcbiAgICBib3gtc2hhZG93OiBub25lO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICBjb2xvcjogJHtpbnZlcnRDb2xvcn07XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke2RhcmtlbigwLjAyNSwgdGFyZ2V0KX07XG4gICAgfVxuXG4gICAgJjphY3RpdmUge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtkYXJrZW4oMC4wNSwgdGFyZ2V0KX07XG4gICAgfVxuXG4gICAgJjpmb2N1cyB7XG4gICAgICAke2JveFNoYWRvdygnMC4ycmVtJywgdGFyZ2V0LCAwLjIpfVxuICAgIH1cbiAgYDtcbn1cblxuaW50ZXJmYWNlIEJ1dHRvblByb3BzIGV4dGVuZHMgSFRNTEF0dHJpYnV0ZXM8SFRNTEJ1dHRvbkVsZW1lbnQ+IHtcbiAgLyoqIOODnOOCv+ODs+OBruiJsiAqL1xuICBjb2xvcj86IENvbG9yVHlwZTtcbiAgLyoqIOODnOOCv+ODs+OBruOCteOCpOOCuiAqL1xuICBzaXplPzogU2l6ZVR5cGU7XG4gIC8qKiDog4zmma/jgYzpgI/mmI7jgarjg5zjgr/jg7PjgafjgZnjgosgKi9cbiAgb3V0bGluZT86IGJvb2xlYW47XG4gIC8qKiDlhajkvZPluYXjga7jg5zjgr/jg7PjgafoqK3lrpogKi9cbiAgZnVsbD86IGJvb2xlYW47XG59XG5cbmNvbnN0IEJ1dHRvbiA9IHN0eWxlZC5idXR0b248QnV0dG9uUHJvcHM+YFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGFwcGVhcmFuY2U6IG5vbmU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgcGFkZGluZzogMC4zNzVlbSAwLjc1ZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG5cbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYmFja2dyb3VuZC1jb2xvciwgY29sb3IsIGJveC1zaGFkb3c7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDE1MG1zO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XG5cbiAgJHtzZXRDb2xvcn1cbiAgJHsoeyBzaXplIH0pID0+IHNldFNpemUoJ2ZvbnQtc2l6ZScsIHNpemUpfVxuICAkeyh7IGZ1bGwgfSkgPT4gZnVsbCA/ICd3aWR0aDogMTAwJTsnIDogJyd9XG5gO1xuQnV0dG9uLmRpc3BsYXlOYW1lID0gJ0J1dHRvbic7XG5cbmV4cG9ydCBkZWZhdWx0IEJ1dHRvbjtcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuJztcblxuY29uc3QgQnV0dG9uR3JvdXAgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cbiAgJjpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcbiAgfVxuXG4gICR7QnV0dG9ufSB7XG4gICAgbWFyZ2luOiAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG5cbiAgICAmOmZpcnN0LWNoaWxkIHtcbiAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDRweDtcbiAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDRweDtcbiAgICB9XG5cbiAgICAmOm5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgICAgIG1hcmdpbi1sZWZ0OiAtMXB4O1xuICAgIH1cblxuICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNHB4O1xuICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDRweDtcbiAgICB9XG4gIH1cbmA7XG5CdXR0b25Hcm91cC5kaXNwbGF5TmFtZSA9ICdCdXR0b25Hcm91cCc7XG5cbmV4cG9ydCBkZWZhdWx0IEJ1dHRvbkdyb3VwO1xuIiwiaW1wb3J0IHN0eWxlZCwgeyBjc3MgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgeyBTaXplVHlwZSB9IGZyb20gJy4uLy4uL3R5cGVzJztcblxuY29uc3Qgc3RyaXBlZFN0eWxlID0gY3NzYFxuICB0Ym9keSA+IHRyOm50aC1jaGlsZChvZGQpIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMDIpO1xuICB9XG5gO1xuXG5jb25zdCBob3ZlclN0eWxlID0gY3NzYFxuICB0Ym9keSA+IHRyOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMDQpO1xuICB9XG5gO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBzaXplPzogU2l6ZVR5cGU7XG4gIGZ1bGw/OiBib29sZWFuO1xuICBoZWFkZXJTdHlsZT86IGFueTtcbiAgYm9yZGVyZWQ/OiBib29sZWFuO1xuICBib3JkZXJsZXNzPzogYm9vbGVhbjtcbiAgc3RyaXBlZD86IGJvb2xlYW47XG4gIGhvdmVyPzogYm9vbGVhbjtcbn1cblxuY29uc3QgVGFibGUgPSBzdHlsZWQudGFibGU8UHJvcHM+YFxuICBkaXNwbGF5OiBibG9jaztcbiAgJHsoeyBmdWxsIH0pID0+IGZ1bGwgPyBjc3Ngd2lkdGg6IDEwMCU7YCA6ICcnfVxuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuXG4gIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcbiAgLW1zLW92ZXJmbG93LXN0eWxlOiAtbXMtYXV0b2hpZGluZy1zY3JvbGxiYXI7XG5cbiAgdGQsIHRoIHtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgIHBhZGRpbmc6IDAuNzVyZW07XG4gICAgJHsoeyB0aGVtZSwgYm9yZGVyZWQgfSkgPT4gYm9yZGVyZWQgPyBjc3NgXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAke3RoZW1lLmJvcmRlcn07XG4gICAgYCA6ICcnfVxuICAgIGJvcmRlci13aWR0aDogMCAwIDFweDtcbiAgfVxuXG4gIHRoIHsgd2hpdGUtc3BhY2U6IG5vd3JhcDsgfVxuXG4gICR7KHsgc3RyaXBlZCB9KSA9PiBzdHJpcGVkID8gc3RyaXBlZFN0eWxlIDogJyd9XG4gICR7KHsgaG92ZXIgfSkgPT4gaG92ZXIgPyBob3ZlclN0eWxlIDogJyd9XG5cbiAgJHsoeyBoZWFkZXJTdHlsZSB9KSA9PiBoZWFkZXJTdHlsZSA/IGNzc2BcbiAgICB0aCB7XG4gICAgICAke2hlYWRlclN0eWxlfVxuICAgIH1cbiAgYCA6ICcnfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgVGFibGU7XG4iLCJpbXBvcnQgeyBIVE1MQXR0cmlidXRlcyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQsIHsgY3NzIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IGZpbmRDb2xvckludmVydCBmcm9tICcuLi8uLi91dGlscy9maW5kQ29sb3JJbnZlcnQnO1xuaW1wb3J0IHsgQ29sb3JUeXBlIH0gZnJvbSAnLi4vLi4vdHlwZXMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFByb3BzIGV4dGVuZHMgSFRNTEF0dHJpYnV0ZXM8SFRNTERpdkVsZW1lbnQ+IHtcbiAgLyoqIOiJsuaMh+WumiAqL1xuICBjb2xvcj86IENvbG9yVHlwZTtcbiAgLyoqIGJvcmRlcuOCkumdnuihqOekuuOBmeOCiyAqL1xuICBib3JkZXJsZXNzPzogYm9vbGVhbjtcbiAgc3R5bGU/OiBhbnk7XG59XG5cbmZ1bmN0aW9uIHNldENvbG9yKHsgY29sb3IsIHRoZW1lIH06IGFueSkge1xuICBpZiAoIWNvbG9yKSByZXR1cm4ge307XG5cbiAgY29uc3QgdGFyZ2V0ID0gdGhlbWVbY29sb3JdIHx8IGNvbG9yO1xuICBjb25zdCBpbnZlcnRDb2xvciA9IGZpbmRDb2xvckludmVydCh0aGVtZSwgdGFyZ2V0KTtcbiAgcmV0dXJuIGNzc2BiYWNrZ3JvdW5kLWNvbG9yOiAke3RhcmdldH07IGNvbG9yOiAke2ludmVydENvbG9yfTtgO1xufVxuXG5jb25zdCBCb3ggPSBzdHlsZWQuZGl2PFByb3BzPmBcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAkeyh7IGJvcmRlcmxlc3MsIHRoZW1lIH0pID0+IGJvcmRlcmxlc3MgPyBgYCA6IGBib3JkZXI6IDFweCBzb2xpZCAke3RoZW1lLmJvcmRlcn07YH1cbiAgYm94LXNoYWRvdzogMCAxcHggMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjA1KTtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICB3aWR0aDogMTAwJTtcblxuICBtaW4td2lkdGg6IDA7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcblxuICAke3NldENvbG9yfVxuYDtcbkJveC5kaXNwbGF5TmFtZSA9ICdCb3gnO1xuXG5leHBvcnQgZGVmYXVsdCBCb3g7XG4iLCJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCwgSFRNTEF0dHJpYnV0ZXMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBzZXRTaXplIGZyb20gJy4uLy4uL3V0aWxzL3NldFNpemUnO1xuaW1wb3J0IHsgQ29sb3JUeXBlLCBTaXplVHlwZSwgQ1NTVHlwZSB9IGZyb20gJy4uLy4uL3R5cGVzJztcblxuaW50ZXJmYWNlIFByb2dyZXNzUHJvcHMgZXh0ZW5kcyBIVE1MQXR0cmlidXRlczxIVE1MRGl2RWxlbWVudD57XG4gIC8qKiDnj77nirbjga7pgLLmjZcgKi9cbiAgdmFsdWU6IG51bWJlcjtcbiAgLyoqIOmAsuaNl+OBruacgOWkp+WApCAqL1xuICBtYXg6IG51bWJlcjtcbiAgLyoqIOODkOODvOOBruOCteOCpOOCuiAqL1xuICBzaXplPzogU2l6ZVR5cGU7XG4gIC8qKiBzaXpl44KS5L2/44KP44Gq44GE44Go44GN44Gu57im5bmF44KS5oyH5a6a44GZ44KLICovXG4gIGhlaWdodD86IHN0cmluZztcbiAgLyoqIOODkOODvOOBruiJsiAqL1xuICBjb2xvcj86IENvbG9yVHlwZTtcbiAgLyoqIOOCq+OCueOCv+ODoENTU+Wumue+qSAqL1xuICBjc3M/OiBDU1NUeXBlO1xufVxuXG5jb25zdCBXcmFwcGVyID0gc3R5bGVkLmRpdjxQcm9ncmVzc1Byb3BzPmBcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5iYWNrZ3JvdW5kfTtcblxuICAkeyh7IHNpemUgfSkgPT4gc2V0U2l6ZSgnaGVpZ2h0Jywgc2l6ZSl9XG4gICR7KHsgc2l6ZSwgaGVpZ2h0IH0pID0+ICFzaXplICYmIGhlaWdodCA/IGBoZWlnaHQ6ICR7aGVpZ2h0fTtgIDogJyd9XG5cbiAgJiA+IGRpdltyb2xlPVwicHJvZ3Jlc3NiYXJcIl0ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICR7KHsgdmFsdWUsIG1heCB9KSA9PiAodmFsdWUgPT09IG1heCkgPyAnJyA6ICdib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDsgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7J31cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyh7IGNvbG9yLCB0aGVtZSB9KSA9PiAodGhlbWVbY29sb3IhXSB8fCBjb2xvcil9O1xuXG4gICAgd2lsbC1jaGFuZ2U6IHdpZHRoO1xuXG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogd2lkdGg7XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMzUwbXM7XG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKTtcbiAgICB6LWluZGV4OiAxO1xuICB9XG4gICR7KHsgY3NzIH0pID0+IChjc3MgfHwgJycpfVxuYDtcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9ncmVzcyBleHRlbmRzIFB1cmVDb21wb25lbnQ8UHJvZ3Jlc3NQcm9wcz4ge1xuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGNvbG9yOiAncHJpbWFyeScsXG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIGNvbnN0IHsgdmFsdWUsIG1heCB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBwZXJjZW50ID0gTWF0aC5yb3VuZCgodmFsdWUvbWF4KSAqIDEwMCk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxXcmFwcGVyIHsuLi50aGlzLnByb3BzfT5cbiAgICAgICAgPGRpdiByb2xlPVwicHJvZ3Jlc3NiYXJcIiBzdHlsZT17eyB3aWR0aDogYCR7cGVyY2VudCA+IDEwMCA/IDEwMCA6IHBlcmNlbnR9JWAgfX0gPjwvZGl2PlxuICAgICAgPC9XcmFwcGVyPlxuICAgICk7XG4gIH1cbn07XG4iLCJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCwgUmVhY3ROb2RlLCBIVE1MQXR0cmlidXRlcyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQsIHsgY3NzIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgQ1NTVHlwZSB9IGZyb20gJy4uLy4uL3R5cGVzJztcblxuY29uc3QgV3JhcHBlciA9IHN0eWxlZC5kaXY8eyByZXF1aXJlZD86IGJvb2xlYW4sIGNzcz86IENTU1R5cGUgfT5gXG4gIGRpc3BsYXk6IGJsb2NrO1xuICAmOm5vdCg6bGFzdC1jaGlsZCkge1xuICAgIG1hcmdpbi1ib3R0b206IDAuNzVyZW07XG4gIH1cbiAgJHsoeyByZXF1aXJlZCwgdGhlbWUgfSkgPT4gcmVxdWlyZWQgPyBjc3NgXG4gICAgbGFiZWw6OmFmdGVyIHtcbiAgICAgIGNvbnRlbnQ6ICcqJztcbiAgICAgIGNvbG9yOiAke3RoZW1lLnByaW1hcnl9O1xuICAgICAgbWFyZ2luLWxlZnQ6IDAuMzI1cmVtO1xuICAgIH1cbiAgYCA6IHt9fVxuXG4gICR7KHsgY3NzIH0pID0+IGNzcyB8fCB7fX1cbmA7XG5cbmNvbnN0IExhYmVsID0gc3R5bGVkLmxhYmVsYFxuICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS50ZXh0U3Ryb25nfTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMC4zMjVyZW07XG5gO1xuXG5pbnRlcmZhY2UgUHJvcHMgZXh0ZW5kcyBIVE1MQXR0cmlidXRlczxIVE1MRGl2RWxlbWVudD4ge1xuICBsYWJlbD86IHN0cmluZztcbiAgY2hpbGRyZW46IFJlYWN0Tm9kZTtcbiAgcmVxdWlyZWQ/OiBib29sZWFuO1xuICBjc3M/OiBDU1NUeXBlO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGaWVsZCBleHRlbmRzIFB1cmVDb21wb25lbnQ8UHJvcHM+IHtcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgbGFiZWwsIGNoaWxkcmVuLCAuLi5yZXN0IH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8V3JhcHBlciB7Li4ucmVzdH0+XG4gICAgICAgIHtsYWJlbCAmJiAoPExhYmVsPntsYWJlbH08L0xhYmVsPil9XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvV3JhcHBlcj5cbiAgICApO1xuICB9XG59XG4iLCJpbXBvcnQgeyBjc3MgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgeyBDU1NUeXBlIH0gZnJvbSAnLi4vdHlwZXMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW1idXJnZXIoc2l6ZTogc3RyaW5nKTogQ1NTVHlwZSB7XG4gIHJldHVybiBjc3NgXG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGhlaWdodDogJHtzaXplfTtcbiAgICB3aWR0aDogJHtzaXplfTtcblxuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBzcGFuIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGN1cnJlbnRDb2xvcjtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgaGVpZ2h0OiAxcHg7XG4gICAgICBsZWZ0OiBjYWxjKDUwJSAtIDhweCk7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XG4gICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAxMDBtcztcbiAgICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IGJhY2tncm91bmQtY29sb3IsIG9wYWNpdHksIHRyYW5zZm9ybTtcbiAgICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcbiAgICAgIHdpZHRoOiAxNnB4O1xuXG4gICAgICAmOm50aC1jaGlsZCgxKSB7XG4gICAgICAgIHRvcDogY2FsYyg1MCUgLSA2cHgpO1xuICAgICAgfVxuICAgICAgJjpudGgtY2hpbGQoMikge1xuICAgICAgICB0b3A6IGNhbGMoNTAlIC0gMXB4KTtcbiAgICAgIH1cbiAgICAgICY6bnRoLWNoaWxkKDMpIHtcbiAgICAgICAgdG9wOiBjYWxjKDUwJSArIDRweCk7XG4gICAgICB9XG5cbiAgICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKGJsYWNrLCAwLjA1KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmLmFjdGl2ZSBzcGFuIHtcbiAgICAgICY6bnRoLWNoaWxkKDEpIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDVweCkgcm90YXRlKDQ1ZGVnKTtcbiAgICAgIH1cbiAgICAgICY6bnRoLWNoaWxkKDIpIHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgIH1cbiAgICAgICY6bnRoLWNoaWxkKDMpIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01cHgpIHJvdGF0ZSgtNDVkZWcpO1xuICAgICAgfVxuICAgIH1cbiAgYDtcbn1cbiIsImltcG9ydCB7IGNzcyB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7IENTU1R5cGUgfSBmcm9tICcuLi90eXBlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFycm93KGNvbG9yOiBzdHJpbmcsIGRpcmVjdGlvbj86IHN0cmluZyk6IENTU1R5cGUge1xuICByZXR1cm4gY3NzYFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3JkZXI6IDNweCBzb2xpZCAke2NvbG9yfTtcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgYm9yZGVyLXJpZ2h0OiAwO1xuICAgIGJvcmRlci10b3A6IDA7XG4gICAgY29udGVudDogXCIgXCI7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgaGVpZ2h0OiAwLjYyNWVtO1xuICAgIG1hcmdpbi10b3A6IC0wLjYyNWVtO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIHRvcDogNTAlO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xuICAgIHdpZHRoOiAwLjYyNWVtO1xuICBgO1xufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5pbnRlcmZhY2UgTXNnUHJvcHMge1xuICBlcnJvcj86IGJvb2xlYW47XG59XG5cbmNvbnN0IE1lc3NhZ2UgPSBzdHlsZWQuc3BhbjxNc2dQcm9wcz5gXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xuICBjb2xvcjogJHsoeyBlcnJvciwgdGhlbWUgfSkgPT4gZXJyb3IgPyB0aGVtZS5kYW5nZXIgOiB0aGVtZS50ZXh0TGlnaHR9O1xuYDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGVscE1lc3NhZ2UoaGVscD86IHN0cmluZywgZXJyb3I/OiBzdHJpbmcpIHtcbiAgaWYgKGVycm9yKSB7XG4gICAgcmV0dXJuICg8TWVzc2FnZSBlcnJvcj57ZXJyb3J9PC9NZXNzYWdlPik7XG4gIH1cbiAgaWYgKGhlbHApIHtcbiAgICByZXR1cm4gKDxNZXNzYWdlPntoZWxwfTwvTWVzc2FnZT4pO1xuICB9XG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCwgSW5wdXRIVE1MQXR0cmlidXRlcyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQsIHsgY3NzIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgc2V0U2l6ZSB9IGZyb20gJy4uLy4uL3V0aWxzJztcbmltcG9ydCBkaXNhYmxlZENvbG9yIGZyb20gJy4uLy4uL3V0aWxzL2Rpc2FibGVkQ29sb3InO1xuaW1wb3J0IEhlbHBNZXNzYWdlIGZyb20gJy4vSGVscE1lc3NhZ2UnO1xuaW1wb3J0IHsgQ1NTVHlwZSB9IGZyb20gJy4uLy4uL3R5cGVzJztcblxuaW50ZXJmYWNlIFdyYXBwZXJQcm9wcyB7XG4gIG91dGxpbmU/OiBib29sZWFuO1xuICBlcnJvcj86IGFueTtcbiAgY3NzPzogQ1NTVHlwZTtcbn1cblxuaW50ZXJmYWNlIEljb25Qcm9wcyB7XG4gIHJpZ2h0PzogYm9vbGVhbjtcbn1cblxuY29uc3QgcmlnaHRJY29uID0gY3NzYFxuICByaWdodDogMC4zNzVlbTtcbiAgJiB+IGlucHV0IHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxLjU1NWVtICFpbXBvcnRhbnQ7XG4gIH1cbmA7XG5cbmNvbnN0IGxlZnRJY29uID0gY3NzYFxuICBsZWZ0OiAwLjM3NWVtO1xuICAmIH4gaW5wdXQge1xuICAgIHBhZGRpbmctbGVmdDogMS41NWVtICFpbXBvcnRhbnQ7XG4gIH1cbmA7XG5cbmNvbnN0IEljb24gPSBzdHlsZWQuc3BhbjxJY29uUHJvcHM+YFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMC4zNzVlbTtcbiAgYm90dG9tOiAwO1xuICB6LWluZGV4OiAxO1xuICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5ib3JkZXJ9O1xuICAkeyh7IHJpZ2h0IH0pID0+IHJpZ2h0ID8gcmlnaHRJY29uIDogbGVmdEljb259XG5cbiAgc3ZnLCBpbWcge1xuICAgIGhlaWdodDogMWVtO1xuICAgIHdpZHRoOiAxZW07XG4gIH1cbmA7XG5cbmNvbnN0IFdyYXBwZXIgPSBzdHlsZWQuc3BhbjxXcmFwcGVyUHJvcHM+YFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuXG4gIGlucHV0IHtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgYXBwZWFyYW5jZTogbm9uZTtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGNvbG9yOiBpbmhlcml0O1xuXG4gICAgcGFkZGluZzogMC4zNzVlbSAwLjYyNWVtO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICAkeyh7IG91dGxpbmUsIHRoZW1lLCBlcnJvciB9KSA9PiBvdXRsaW5lID9cbiAgICAgIGBib3JkZXI6IDFweCBzb2xpZCAke2Vycm9yID8gdGhlbWUuZGFuZ2VyIDogdGhlbWUuYm9yZGVyfTsgYm9yZGVyLXJhZGl1czogNHB4O2AgOlxuICAgICAgYGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAke2Vycm9yID8gdGhlbWUuZGFuZ2VyIDogdGhlbWUuYm9yZGVyfTsgYm9yZGVyLXJhZGl1czogMDtgXG4gICAgfVxuICAgICR7c2V0U2l6ZSgnZm9udC1zaXplJyl9XG5cbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBib3gtc2hhZG93O1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDE1MG1zO1xuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcblxuICAgICY6Zm9jdXMge1xuICAgICAgYm9yZGVyLWNvbG9yOiAkeyh7IGVycm9yLCB0aGVtZSB9KSA9PiAoZXJyb3IgPyB0aGVtZS5kYW5nZXIgOiB0aGVtZS5wcmltYXJ5KX07XG4gICAgICAkeyh7IHRoZW1lLCBvdXRsaW5lLCBlcnJvciB9KSA9PiBvdXRsaW5lID9cbiAgICAgICAgYGJveC1zaGFkb3c6IDAgMCAwIDAuMWVtICR7ZXJyb3IgPyB0aGVtZS5kYW5nZXIgOiB0aGVtZS5wcmltYXJ5fTtgIDpcbiAgICAgICAgYGJveC1zaGFkb3c6IDAgMC4xZW0gJHtlcnJvciA/IHRoZW1lLmRhbmdlciA6IHRoZW1lLnByaW1hcnl9O2BcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmOmRpc2FibGVkLCBbZGlzYWJsZWRdLCAmOnJlYWRvbmx5IHtcbiAgICAgICR7KHsgdGhlbWUgfSkgPT4gZGlzYWJsZWRDb2xvcih0aGVtZSl9XG4gICAgfVxuXG4gICAgJjpkaXNhYmxlZCwgW2Rpc2FibGVkXSB7XG4gICAgICByZXNpemU6IG5vbmU7XG4gICAgfVxuXG4gICAgJjo6cGxhY2Vob2xkZXIge1xuICAgICAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUucGxhY2Vob2xkZXJ9O1xuICAgIH1cbiAgfVxuXG4gICY6aG92ZXIge1xuICAgIGlucHV0Om5vdCg6ZGlzYWJsZWQpOm5vdCg6Zm9jdXMpOm5vdCg6YWN0aXZlKSB7XG4gICAgICBib3JkZXItY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuYm9yZGVySG92ZXJ9O1xuICAgIH1cbiAgICAke0ljb259IHtcbiAgICAgIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmJvcmRlckhvdmVyfTtcbiAgICB9XG4gIH1cbiAgJHsoeyBjc3MgfSkgPT4gY3NzIHx8ICcnfVxuYDtcblxuaW50ZXJmYWNlIFByb3BzIGV4dGVuZHMgSW5wdXRIVE1MQXR0cmlidXRlczxIVE1MSW5wdXRFbGVtZW50PiB7XG4gIHBsYWNlaG9sZGVyPzogc3RyaW5nO1xuICAvKiogJ3RleHQnIHwgJ251bWJlcicgfCAncGFzc3dvcmQnIHwgJ2VtYWlsJyB8ICd0ZWwnIHwgJ3NlYXJjaCcgKi9cbiAgdHlwZTogJ3RleHQnIHwgJ251bWJlcicgfCAncGFzc3dvcmQnIHwgJ2VtYWlsJyB8ICd0ZWwnIHwgJ3NlYXJjaCc7XG4gIC8qKiDjgqjjg6njg7zjga7nmbrnlJ/mmYLjga7ooajnpLrjg4bjgq3jgrnjg4ggKi9cbiAgZXJyb3I/OiBzdHJpbmcgfCBhbnk7XG4gIC8qKiDmjZXmjYnjg4bjgq3jgrnjg4ggKi9cbiAgaGVscD86IHN0cmluZyB8IGFueTtcbiAgLyoqIOODnOODg+OCr+OCueezu+OBruODh+OCtuOCpOODs+OBp+OBmeOCiyAqL1xuICBvdXRsaW5lPzogYm9vbGVhbjtcbiAgLyoqIOW3puWBtOOBruOCouOCpOOCs+ODsyAqL1xuICBsZWZ0SWNvbj86IGFueTtcbiAgLyoqIOWPs+WBtOOBruOCouOCpOOCs+ODsyAqL1xuICByaWdodEljb24/OiBhbnk7XG4gIC8qKiDjgqvjgrnjgr/jg6BDU1PlrprnvqkgKi9cbiAgY3NzPzogQ1NTVHlwZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGV4dElucHV0IGV4dGVuZHMgUHVyZUNvbXBvbmVudDxQcm9wcz4ge1xuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIHR5cGU6ICd0ZXh0JyxcbiAgICB2YWx1ZTogJycsXG4gICAgbWF4TGVuZ3RoOiAyNTUsXG4gICAgb25DaGFuZ2U6ICgpID0+IHt9LFxuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBjbGFzc05hbWUsIG91dGxpbmUsIGVycm9yLCBoZWxwLCBsZWZ0SWNvbiwgcmlnaHRJY29uLCBzdHlsZSwgY3NzLCAuLi5yZXN0XG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxXcmFwcGVyIGNsYXNzTmFtZT17Y2xhc3NOYW1lfSBvdXRsaW5lPXtvdXRsaW5lfSBlcnJvcj17ZXJyb3J9IHN0eWxlPXtzdHlsZX0gY3NzPXtjc3N9PlxuICAgICAgICB7bGVmdEljb24gJiYgKDxJY29uPntsZWZ0SWNvbn08L0ljb24+KX1cbiAgICAgICAge3JpZ2h0SWNvbiAmJiAoPEljb24gcmlnaHQ+e3JpZ2h0SWNvbn08L0ljb24+KX1cbiAgICAgICAgPGlucHV0IHsuLi5yZXN0fSAvPlxuICAgICAgICB7SGVscE1lc3NhZ2UoaGVscCwgZXJyb3IpfVxuICAgICAgPC9XcmFwcGVyPlxuICAgICk7XG4gIH1cbn1cbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIFRleHRhcmVhSFRNTEF0dHJpYnV0ZXMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBib3hTaGFkb3cgZnJvbSAnLi4vLi4vdXRpbHMvYm94U2hhZG93JztcbmltcG9ydCBzZXRTaXplIGZyb20gJy4uLy4uL3V0aWxzL3NldFNpemUnO1xuaW1wb3J0IGRpc2FibGVkQ29sb3IgZnJvbSAnLi4vLi4vdXRpbHMvZGlzYWJsZWRDb2xvcic7XG5pbXBvcnQgSGVscE1lc3NhZ2UgZnJvbSAnLi9IZWxwTWVzc2FnZSc7XG5pbXBvcnQgeyBDU1NUeXBlIH0gZnJvbSAnLi4vLi4vdHlwZXMnO1xuXG5pbnRlcmZhY2UgV3JhcHBlclByb3BzIHtcbiAgZXJyb3I/OiBzdHJpbmc7XG4gIGNzcz86IENTU1R5cGU7XG59XG5cbmNvbnN0IFdyYXBwZXIgPSBzdHlsZWQuc3BhbjxXcmFwcGVyUHJvcHM+YFxuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gIHRleHRhcmVhIHtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHBhZGRpbmc6IDAuNjI1ZW07XG4gICAgcmVzaXplOiB2ZXJ0aWNhbDtcbiAgICBhcHBlYXJhbmNlOiBub25lO1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBjb2xvcjogaW5oZXJpdDtcblxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAkeyh7IHRoZW1lLCBlcnJvciB9KSA9PiBlcnJvciA/IHRoZW1lLmRhbmdlciA6IHRoZW1lLmJvcmRlcn07XG5cbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBib3gtc2hhZG93O1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMTVzO1xuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcblxuICAgICR7c2V0U2l6ZSgnZm9udC1zaXplJyl9XG5cbiAgICAmOmZvY3VzIHtcbiAgICAgIGJvcmRlci1jb2xvcjogJHsoeyB0aGVtZSwgZXJyb3IgfSkgPT4gZXJyb3IgPyB0aGVtZS5kYW5nZXIgOiB0aGVtZS5wcmltYXJ5fTtcbiAgICAgICR7KHsgdGhlbWUsIGVycm9yIH0pID0+IGJveFNoYWRvdygnMC4xZW0nLCBlcnJvciA/IHRoZW1lLmRhbmdlciA6IHRoZW1lLnByaW1hcnkpfVxuICAgIH1cblxuICAgICY6ZGlzYWJsZWQsIFtkaXNhYmxlZF0sICY6cmVhZG9ubHkge1xuICAgICAgJHsoeyB0aGVtZSB9KSA9PiBkaXNhYmxlZENvbG9yKHRoZW1lKX1cbiAgICB9XG5cbiAgICAmOmRpc2FibGVkLCBbZGlzYWJsZWRdIHtcbiAgICAgIHJlc2l6ZTogbm9uZTtcbiAgICB9XG5cbiAgICAmOjpwbGFjZWhvbGRlciB7XG4gICAgICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5wbGFjZWhvbGRlcn07XG4gICAgfVxuICB9XG5cbiAgJjpob3ZlciB7XG4gICAgdGV4dGFyZWE6bm90KDpkaXNhYmxlZCk6bm90KDpmb2N1cykge1xuICAgICAgYm9yZGVyLWNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmJvcmRlckhvdmVyfTtcbiAgICB9XG4gIH1cbiAgJHsoeyBjc3MgfSkgPT4gY3NzIHx8IHt9fVxuYDtcblxuaW50ZXJmYWNlIFByb3BzIGV4dGVuZHMgVGV4dGFyZWFIVE1MQXR0cmlidXRlczxIVE1MVGV4dEFyZWFFbGVtZW50PiB7XG4gIC8qKiDjgqjjg6njg7zjga7nmbrnlJ/mmYLjga7ooajnpLrjg4bjgq3jgrnjg4ggKi9cbiAgZXJyb3I/OiBzdHJpbmcgfCBhbnk7XG4gIC8qKiDmjZXmjYnjg4bjgq3jgrnjg4ggKi9cbiAgaGVscD86IHN0cmluZyB8IGFueTtcbiAgLyoqIOOCq+OCueOCv+ODoENTU+Wumue+qSAqL1xuICBjc3M/OiBDU1NUeXBlO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXh0YXJlYSBleHRlbmRzIENvbXBvbmVudDxQcm9wcz4ge1xuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIHZhbHVlOiAnJyxcbiAgICBjb2w6IDIsXG4gICAgcm93OiA1LFxuICAgIG9uQ2hhbmdlOiAoKSA9PiB7fSxcbiAgfTtcblxuICBzaG91bGRDb21wb25lbnRVcGRhdGUocHJvcHM6IFByb3BzKSB7XG4gICAgcmV0dXJuIHByb3BzLnZhbHVlICE9PSB0aGlzLnByb3BzLnZhbHVlIHx8XG4gICAgICBwcm9wcy5oZWxwICE9PSB0aGlzLnByb3BzLmhlbHAgfHxcbiAgICAgIHByb3BzLmVycm9yICE9PSB0aGlzLnByb3BzLmVycm9yIHx8XG4gICAgICBwcm9wcy5kaXNhYmxlZCAhPT0gdGhpcy5wcm9wcy5kaXNhYmxlZCB8fFxuICAgICAgcHJvcHMucmVhZE9ubHkgIT09IHRoaXMucHJvcHMucmVhZE9ubHk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjbGFzc05hbWUsIGhlbHAsIGVycm9yLCBzdHlsZSwgY3NzLCAuLi5yZXN0IH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8V3JhcHBlciBjbGFzc05hbWU9e2NsYXNzTmFtZX0gZXJyb3I9e2Vycm9yfSBzdHlsZT17c3R5bGV9IGNzcz17Y3NzfT5cbiAgICAgICAgPHRleHRhcmVhIHsuLi5yZXN0fSAvPlxuICAgICAgICB7SGVscE1lc3NhZ2UoaGVscCwgZXJyb3IpfVxuICAgICAgPC9XcmFwcGVyPlxuICAgICk7XG4gIH1cbn1cbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIElucHV0SFRNTEF0dHJpYnV0ZXMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdHJhbnNwYXJlbnRpemUgZnJvbSAncG9saXNoZWQvbGliL2NvbG9yL3RyYW5zcGFyZW50aXplJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5jb25zdCBXcmFwcGVyID0gc3R5bGVkLnNwYW5gXG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiBhdXRvO1xuXG4gIGxhYmVsIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgcGFkZGluZy1sZWZ0OiAwLjYyNWVtO1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBsaW5lLWhlaWdodDogMS4yNTtcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNjI1cmVtO1xuXG4gICAgJjpiZWZvcmUsICY6YWZ0ZXIge1xuICAgICAgY29udGVudDogXCJcIjtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB9XG5cbiAgICAmOmFmdGVyIHtcbiAgICAgIHRvcDogMC4yNWVtO1xuICAgICAgbGVmdDogMC4yZW07XG4gICAgICB3aWR0aDogMC44NWVtO1xuICAgICAgaGVpZ2h0OiAwLjVlbTtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG4gICAgICBib3JkZXI6IDAuMWVtIHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgYm9yZGVyLXRvcC1zdHlsZTogbm9uZTtcbiAgICAgIGJvcmRlci1yaWdodC1zdHlsZTogbm9uZTtcbiAgICB9XG5cbiAgICAmOmJlZm9yZSB7XG4gICAgICB3aWR0aDogMS4yNWVtO1xuICAgICAgaGVpZ2h0OiAxLjI1ZW07XG4gICAgICBsZWZ0OjA7XG4gICAgICB0b3A6IDA7XG4gICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuYm9yZGVyfTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgICAgd2lsbC1jaGFuZ2U6IGJhY2tncm91bmQ7XG4gICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDE1MG1zIGVhc2Utb3V0O1xuICAgIH1cbiAgfVxuXG4gIGlucHV0IHtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG5cbiAgICAmOmNoZWNrZWQgKyBsYWJlbCB7XG4gICAgICAmOmJlZm9yZXtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnByaW1hcnl9O1xuICAgICAgICBiYWNrZ3JvdW5kOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnByaW1hcnl9O1xuICAgICAgfVxuICAgICAgJjphZnRlciB7XG4gICAgICAgIGJvcmRlci1jb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS53aGl0ZX07XG4gICAgICB9XG4gICAgfVxuXG4gICAgJjppbmRldGVybWluYXRlICsgbGFiZWwge1xuICAgICAgJjpiZWZvcmUge1xuICAgICAgICBib3JkZXItY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUucHJpbWFyeX07XG4gICAgICAgIGJhY2tncm91bmQ6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUucHJpbWFyeX07XG4gICAgICB9XG4gICAgICAmOmFmdGVyIHtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLndoaXRlfTtcbiAgICAgICAgYm9yZGVyLWxlZnQtc3R5bGU6IG5vbmU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgJjpkaXNhYmxlZCB7XG4gICAgICArIGxhYmVsIHtcbiAgICAgICAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdHJhbnNwYXJlbnRpemUoMC4yNSwgdGhlbWUudGV4dERhcmspfTtcbiAgICAgICAgJjpiZWZvcmUge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICR7KHsgdGhlbWUgfSkgPT4gdHJhbnNwYXJlbnRpemUoMC41NSwgdGhlbWUuYm9yZGVyKX07XG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmJvcmRlcn07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgICY6Y2hlY2tlZCArIGxhYmVsOmFmdGVyIHtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRyYW5zcGFyZW50aXplKDAuMTUsIHRoZW1lLnRleHREYXJrKX07XG4gICAgICB9XG4gICAgfVxuICB9XG5gO1xuXG5pbnRlcmZhY2UgUHJvcHMgZXh0ZW5kcyBJbnB1dEhUTUxBdHRyaWJ1dGVzPEhUTUxJbnB1dEVsZW1lbnQ+IHtcbiAgY2hpbGRyZW4/OiBhbnk7XG4gIGNoZWNrZWQ/OiBib29sZWFuO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaGVja2JveCBleHRlbmRzIENvbXBvbmVudDxQcm9wcz4ge1xuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIG5hbWU6IG51bGwsXG4gICAgY2hpbGRyZW46IG51bGwsXG4gICAgY2hlY2tlZDogZmFsc2UsXG4gICAgb25DaGFuZ2U6ICgpID0+IHt9LFxuICB9O1xuXG4gIGlkID0gYGNoZWNrYm94XyR7dGhpcy5wcm9wcy5uYW1lfWA7XG5cbiAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKHByb3BzOiBQcm9wcykge1xuICAgIHJldHVybiBwcm9wcy5jaGVja2VkICE9PSB0aGlzLnByb3BzLmNoZWNrZWQgfHxcbiAgICAgIHByb3BzLmNoaWxkcmVuICE9PSB0aGlzLnByb3BzLmNoaWxkcmVuO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY2xhc3NOYW1lLCBjaGlsZHJlbiwgLi4ucmVzdCB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPFdyYXBwZXIgY2xhc3NOYW1lPXtjbGFzc05hbWV9ID5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGlkPXt0aGlzLmlkfSB7Li4ucmVzdH0gLz5cbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9e3RoaXMuaWR9PntjaGlsZHJlbn08L2xhYmVsPlxuICAgICAgPC9XcmFwcGVyPlxuICAgICk7XG4gIH1cbn1cbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIFNlbGVjdEhUTUxBdHRyaWJ1dGVzIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVkLCB7IGNzcyB9IGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IGFycm93IGZyb20gXCIuLi8uLi91dGlscy9hcnJvd1wiO1xuaW1wb3J0IHNldFNpemUgZnJvbSBcIi4uLy4uL3V0aWxzL3NldFNpemVcIjtcbmltcG9ydCBIZWxwTWVzc2FnZSBmcm9tIFwiLi9IZWxwTWVzc2FnZVwiO1xuaW1wb3J0IHsgU2l6ZVR5cGUsIENTU1R5cGUgfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcbmltcG9ydCBkaXNhYmxlZENvbG9yIGZyb20gXCIuLi8uLi91dGlscy9kaXNhYmxlZENvbG9yXCI7XG5cbmludGVyZmFjZSBXcmFwcGVyUHJvcHMge1xuICBzaXplPzogU2l6ZVR5cGU7XG4gIG91dGxpbmU/OiBib29sZWFuO1xuICBlcnJvcj86IHN0cmluZztcbiAgZGlzYWJsZWQ/OiBib29sZWFuO1xuICBjc3M/OiBDU1NUeXBlO1xufVxuXG5jb25zdCBJbnB1dFdyYXBwZXIgPSBzdHlsZWQuc3BhbjxXcmFwcGVyUHJvcHM+YFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuXG4gIHNlbGVjdCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGFwcGVhcmFuY2U6IG5vbmU7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIHBhZGRpbmc6IDAuMzc1ZW0gMC42MjVlbTtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGNvbG9yOiBpbmhlcml0O1xuXG4gICAgJHsoeyBzaXplIH0pID0+IHNldFNpemUoXCJmb250LXNpemVcIiwgc2l6ZSl9XG5cbiAgICBib3JkZXI6IG5vbmU7XG4gICAgJHsoeyBvdXRsaW5lLCB0aGVtZSwgZXJyb3IgfSkgPT5cbiAgICAgIG91dGxpbmUgPyBjc3NgXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICR7ZXJyb3IgPyB0aGVtZS5kYW5nZXIgOiB0aGVtZS5ib3JkZXJ9O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICBgIDogY3NzYFxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJHtlcnJvciA/IHRoZW1lLmRhbmdlciA6IHRoZW1lLmJvcmRlcn07XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgICBgfVxuXG4gICAgd2lsbC1jaGFuZ2U6IGJveC1zaGFkb3c7XG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYm94LXNoYWRvdztcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAxNTBtcztcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XG5cbiAgICAmOmZvY3VzIHtcbiAgICAgIGJvcmRlci1jb2xvcjogJHsoeyBlcnJvciwgdGhlbWUgfSkgPT4gZXJyb3IgPyB0aGVtZS5kYW5nZXIgOiB0aGVtZS5wcmltYXJ5fTtcbiAgICAgIGJveC1zaGFkb3c6ICR7XG4gICAgICAgICh7IHRoZW1lLCBvdXRsaW5lLCBlcnJvciB9KSA9PiBvdXRsaW5lID9cbiAgICAgICAgICAoZXJyb3IgPyB0aGVtZS5kYW5nZXIgOiB0aGVtZS5wcmltYXJ5KSA6XG4gICAgICAgICAgKGVycm9yID8gdGhlbWUuZGFuZ2VyIDogdGhlbWUucHJpbWFyeSlcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAmOjotbXMtZXhwYW5kIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICAgICY6LW1vei1mb2N1c3Jpbmcge1xuICAgICAgY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgdGV4dC1zaGFkb3c6IDAgMCAwICMwMDA7XG4gICAgfVxuXG4gICAgJjpkaXNhYmxlZCwgW2Rpc2FibGVkXSwgJjpyZWFkb25seSB7XG4gICAgICAkeyh7IHRoZW1lIH0pID0+IGRpc2FibGVkQ29sb3IodGhlbWUpfVxuICAgIH1cblxuICAgICY6aW52YWxpZCB7XG4gICAgICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5wbGFjZWhvbGRlcn07XG4gICAgfVxuICB9XG5cbiAgJjo6YWZ0ZXIge1xuICAgICR7KHsgdGhlbWUgfSkgPT4gYXJyb3codGhlbWUuYm9yZGVyKX1cbiAgICB0b3A6IDEuMjVlbTtcbiAgICByaWdodDogMC42MjVlbTtcbiAgICB6LWluZGV4OiA0O1xuICB9XG5cbiAgJHsoeyB0aGVtZSwgZGlzYWJsZWQgfSkgPT5cbiAgICBkaXNhYmxlZFxuICAgICAgPyB7fVxuICAgICAgOiBjc3NgXG4gICAgJjpob3ZlciB7XG4gICAgICBzZWxlY3Q6bm90KDpkaXNhYmxlZCk6bm90KDpmb2N1cykge1xuICAgICAgICBib3JkZXItY29sb3I6ICR7dGhlbWUuYm9yZGVySG92ZXJ9O1xuICAgICAgfVxuXG4gICAgICAmOjphZnRlciB7XG4gICAgICAgIGJvcmRlci1jb2xvcjogJHt0aGVtZS5ib3JkZXJIb3Zlcn07XG4gICAgICB9XG4gICAgfVxuICBgfVxuXG4gICR7KHsgY3NzIH0pID0+IGNzcyB8fCB7fX1cbmA7XG5cbnR5cGUgSXRlbVR5cGUgPVxuICB8IHsgaWQ6IHN0cmluZyB8IG51bWJlcjsgbmFtZTogc3RyaW5nOyBba2V5OiBzdHJpbmddOiBhbnkgfVxuICB8IHN0cmluZztcblxuaW50ZXJmYWNlIFByb3BzIGV4dGVuZHMgU2VsZWN0SFRNTEF0dHJpYnV0ZXM8SFRNTFNlbGVjdEVsZW1lbnQ+IHtcbiAgcGxhY2Vob2xkZXI/OiBzdHJpbmc7XG4gIG9wdGlvbnM6IEl0ZW1UeXBlW107XG4gIG91dGxpbmU/OiBib29sZWFuO1xuICBlcnJvcj86IHN0cmluZyB8IGFueTtcbiAgaGVscD86IHN0cmluZyB8IGFueTtcbiAgaW5wdXRTaXplPzogU2l6ZVR5cGU7XG4gIHJlbmRlcj86IChsYWJlbDogc3RyaW5nKSA9PiBhbnk7XG4gIGRpc2FibGVkPzogYm9vbGVhbjtcbiAgY3NzPzogQ1NTVHlwZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VsZWN0IGV4dGVuZHMgQ29tcG9uZW50PFByb3BzPiB7XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgbmFtZTogbnVsbCxcbiAgICB2YWx1ZTogJycsXG4gICAgb25DaGFuZ2U6ICgpID0+IHt9LFxuICAgIG9wdGlvbnM6IFtdLFxuICB9O1xuXG4gIHNob3VsZENvbXBvbmVudFVwZGF0ZShwcm9wczogUHJvcHMpIHtcbiAgICByZXR1cm4gKFxuICAgICAgcHJvcHMub3B0aW9ucy5sZW5ndGggIT09IHRoaXMucHJvcHMub3B0aW9ucy5sZW5ndGggfHxcbiAgICAgIHByb3BzLnZhbHVlICE9PSB0aGlzLnByb3BzLnZhbHVlIHx8XG4gICAgICBwcm9wcy5kaXNhYmxlZCAhPT0gdGhpcy5wcm9wcy5kaXNhYmxlZCB8fFxuICAgICAgcHJvcHMuaGVscCAhPT0gdGhpcy5wcm9wcy5oZWxwIHx8XG4gICAgICBwcm9wcy5lcnJvciAhPT0gdGhpcy5wcm9wcy5lcnJvclxuICAgICk7XG4gIH1cblxuICByZW5kZXJMYWJlbCA9IChsYWJlbDogc3RyaW5nKSA9PiB7XG4gICAgaWYgKHRoaXMucHJvcHMucmVuZGVyKSB7XG4gICAgICByZXR1cm4gdGhpcy5wcm9wcy5yZW5kZXIobGFiZWwpO1xuICAgIH1cbiAgICByZXR1cm4gbGFiZWw7XG4gIH1cblxuICByZW5kZXJJdGVtID0gKCkgPT4ge1xuICAgIHJldHVybiB0aGlzLnByb3BzLm9wdGlvbnMubWFwKChpdGVtLCBpZHgpID0+IHtcbiAgICAgIGlmICh0eXBlb2YgaXRlbSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8b3B0aW9uIGtleT17aXRlbX0gdmFsdWU9e2l0ZW19PlxuICAgICAgICAgICAge3RoaXMucmVuZGVyTGFiZWwoaXRlbSl9XG4gICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICBjb25zdCB7IGlkLCBuYW1lIH0gPSBpdGVtO1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPG9wdGlvbiBrZXk9e2Ake2lkfV8ke2lkeH1gfSB2YWx1ZT17aWR9PlxuICAgICAgICAgIHt0aGlzLnJlbmRlckxhYmVsKG5hbWUpfVxuICAgICAgICA8L29wdGlvbj5cbiAgICAgICk7XG4gICAgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgY3NzLFxuICAgICAgY2xhc3NOYW1lLFxuICAgICAgaW5wdXRTaXplLFxuICAgICAgb3V0bGluZSxcbiAgICAgIG9wdGlvbnMsXG4gICAgICBlcnJvcixcbiAgICAgIGhlbHAsXG4gICAgICBwbGFjZWhvbGRlcixcbiAgICAgIGRpc2FibGVkLFxuICAgICAgLi4ucmVzdFxuICAgIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxJbnB1dFdyYXBwZXJcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XG4gICAgICAgIHNpemU9e2lucHV0U2l6ZX1cbiAgICAgICAgb3V0bGluZT17b3V0bGluZX1cbiAgICAgICAgZXJyb3I9e2Vycm9yfVxuICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICAgIGNzcz17Y3NzfVxuICAgICAgPlxuICAgICAgICA8c2VsZWN0IHsuLi5yZXN0fSBkaXNhYmxlZD17ZGlzYWJsZWR9IHJlcXVpcmVkPXtCb29sZWFuKHBsYWNlaG9sZGVyKX0+XG4gICAgICAgICAge3BsYWNlaG9sZGVyICYmIChcbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj5cbiAgICAgICAgICAgICAge3BsYWNlaG9sZGVyfVxuICAgICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICAgKX1cbiAgICAgICAgICB7dGhpcy5yZW5kZXJJdGVtKCl9XG4gICAgICAgIDwvc2VsZWN0PlxuICAgICAgICB7SGVscE1lc3NhZ2UoaGVscCwgZXJyb3IpfVxuICAgICAgPC9JbnB1dFdyYXBwZXI+XG4gICAgKTtcbiAgfVxufVxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgSW5wdXRIVE1MQXR0cmlidXRlcyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB0cmFuc3BhcmVudGl6ZSBmcm9tICdwb2xpc2hlZC9saWIvY29sb3IvdHJhbnNwYXJlbnRpemUnO1xuaW1wb3J0IHN0eWxlZCwgeyBjc3MgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgeyBDb2xvclR5cGUgfSBmcm9tICcuLi8uLi90eXBlcyc7XG5cbmNvbnN0IFJhZGlvTGFiZWwgPSBjc3NgXG4gIGxhYmVsIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgcGFkZGluZy1sZWZ0OiAxLjYyNWVtO1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBsaW5lLWhlaWdodDogMS4yNTtcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNjI1cmVtO1xuXG4gICAgJjpiZWZvcmUsICY6YWZ0ZXIge1xuICAgICAgY29udGVudDogXCJcIjtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB9XG5cbiAgICAmOmFmdGVyIHtcbiAgICAgIHRvcDogMC4zNzVlbTtcbiAgICAgIGxlZnQ6IDAuMzc1ZW07XG4gICAgICB3aWR0aDogMC41ZW07XG4gICAgICBoZWlnaHQ6IDAuNWVtO1xuICAgICAgYmFja2dyb3VuZDogJHsoeyB0aGVtZSB9OiBhbnkpID0+IHRoZW1lLnByaW1hcnl9O1xuICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcblxuICAgICAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybTtcbiAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxNTBtcyBlYXNlLW91dDtcbiAgICB9XG5cbiAgICAmOmJlZm9yZSB7XG4gICAgICB3aWR0aDogMS4yNWVtO1xuICAgICAgaGVpZ2h0OiAxLjI1ZW07XG4gICAgICBsZWZ0OjA7XG4gICAgICB0b3A6IDA7XG4gICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgIGJvcmRlcjogMC4xZW0gc29saWQgJHsoeyB0aGVtZSB9OiBhbnkpID0+IHRoZW1lLmJvcmRlcn07XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG5cbiAgICAgIHdpbGwtY2hhbmdlOiBiYWNrZ3JvdW5kO1xuICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAxNTBtcyBlYXNlLW91dDtcbiAgICB9XG4gIH1cblxuICBpbnB1dCB7XG4gICAgZGlzcGxheTogbm9uZTtcblxuICAgICY6Y2hlY2tlZCB7XG4gICAgICArIGxhYmVsOmJlZm9yZSB7XG4gICAgICAgIGJvcmRlci1jb2xvcjogJHsoeyB0aGVtZSB9OiBhbnkpID0+IHRoZW1lLnByaW1hcnl9O1xuICAgICAgfVxuICAgICAgKyBsYWJlbDphZnRlcntcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmOmRpc2FibGVkIHtcbiAgICAgICsgbGFiZWwge1xuICAgICAgICBjb2xvcjogJHsoeyB0aGVtZSB9OiBhbnkpID0+IHRyYW5zcGFyZW50aXplKDAuMjUsIHRoZW1lLnRleHREYXJrKX07XG4gICAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAkeyh7IHRoZW1lIH06IGFueSkgPT4gdHJhbnNwYXJlbnRpemUoMC41NSwgdGhlbWUuYm9yZGVyKX07XG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiAkeyh7IHRoZW1lIH06IGFueSkgPT4gdGhlbWUuYm9yZGVyfTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgJjpjaGVja2VkICsgbGFiZWw6YWZ0ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiAkeyh7IHRoZW1lIH06IGFueSkgPT4gdHJhbnNwYXJlbnRpemUoMC4xNSwgdGhlbWUudGV4dERhcmspfTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbmA7XG5cbmNvbnN0IEJ1dHRvbkxhYmVsID0gY3NzYFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcblxuICBsYWJlbCB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHBhZGRpbmc6IDAuMzc1ZW0gMC43NWVtO1xuICAgIGhlaWdodDogMi4yNWVtO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICR7KHsgdGhlbWUgfTogYW55KSA9PiB0aGVtZS5ib3JkZXJ9O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcblxuICAgICY6aG92ZXIge1xuICAgICAgYm9yZGVyLWNvbG9yOiAkeyh7IHRoZW1lIH06IGFueSkgPT4gdGhlbWUuYm9yZGVySG92ZXJ9O1xuICAgIH1cbiAgfVxuXG4gIGlucHV0IHtcbiAgICBkaXNwbGF5OiBub25lO1xuXG4gICAgJjpjaGVja2VkICsgbGFiZWwge1xuICAgICAgei1pbmRleDogMTtcbiAgICAgIGJvcmRlci1jb2xvcjogJHsoeyB0aGVtZSB9OiBhbnkpID0+IHRoZW1lLnByaW1hcnl9O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHsoeyB0aGVtZSB9OiBhbnkpID0+IHRyYW5zcGFyZW50aXplKDAuNTUsIHRoZW1lLnByaW1hcnkpfTtcbiAgICB9XG5cbiAgICAmOmRpc2FibGVkIHtcbiAgICAgICsgbGFiZWwge1xuICAgICAgICBjdXJzb3I6IGRlZmF1bHQ7XG4gICAgICAgIGNvbG9yOiAkeyh7IHRoZW1lIH06IGFueSkgPT4gdHJhbnNwYXJlbnRpemUoMC4yNSwgdGhlbWUudGV4dERhcmspfTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHsoeyB0aGVtZSB9OiBhbnkpID0+IHRyYW5zcGFyZW50aXplKDAuNTUsIHRoZW1lLmJvcmRlcil9O1xuICAgICAgICBib3JkZXItY29sb3I6ICR7KHsgdGhlbWUgfTogYW55KSA9PiB0aGVtZS5ib3JkZXJ9O1xuICAgICAgfVxuXG4gICAgICAmOmNoZWNrZWQgKyBsYWJlbCB7XG4gICAgICAgIGJvcmRlci1jb2xvcjogJHsoeyB0aGVtZSB9OiBhbnkpID0+IHRoZW1lLnRleHREYXJrfTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHsoeyB0aGVtZSB9OiBhbnkpID0+IHRyYW5zcGFyZW50aXplKDAuNjUsIHRoZW1lLnRleHREYXJrKX07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgJiArICYge1xuICAgIG1hcmdpbi1sZWZ0OiAtMXB4O1xuICB9XG5cbiAgJjpmaXJzdC1jaGlsZCBsYWJlbCB7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNHB4O1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDRweDtcbiAgfVxuXG4gICY6bGFzdC1jaGlsZCBsYWJlbCB7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDRweDtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNHB4O1xuICB9XG5gO1xuXG5cbmNvbnN0IFdyYXBwZXIgPSBzdHlsZWQuc3Bhbjx7IGJ1dHRvbjogYm9vbGVhbiwgY29sb3I/OiBDb2xvclR5cGUgfT5gXG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiBhdXRvO1xuXG4gICR7KHsgYnV0dG9uIH0pID0+IGJ1dHRvbiA/IEJ1dHRvbkxhYmVsIDogUmFkaW9MYWJlbH1cbmA7XG5cbmludGVyZmFjZSBQcm9wcyBleHRlbmRzIElucHV0SFRNTEF0dHJpYnV0ZXM8SFRNTElucHV0RWxlbWVudD4ge1xuICB2YWx1ZTogc3RyaW5nIHwgbnVtYmVyO1xuICBjaGlsZHJlbj86IGFueTtcbiAgY2hlY2tlZD86IGJvb2xlYW47XG4gIGJ1dHRvbj86IGJvb2xlYW47XG4gIGNvbG9yPzogQ29sb3JUeXBlO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSYWRpbyBleHRlbmRzIENvbXBvbmVudDxQcm9wcz4ge1xuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIG5hbWU6IG51bGwsXG4gICAgY2hpbGRyZW46IG51bGwsXG4gICAgY2hlY2tlZDogZmFsc2UsXG4gICAgYnV0dG9uOiBmYWxzZSxcbiAgICBvbkNoYW5nZTogKCkgPT4ge30sXG4gIH07XG5cbiAgaWQgPSBgcmFkaW9fJHt0aGlzLnByb3BzLm5hbWV9OiR7dGhpcy5wcm9wcy52YWx1ZX1gO1xuXG4gIHNob3VsZENvbXBvbmVudFVwZGF0ZShwcm9wczogUHJvcHMpIHtcbiAgICByZXR1cm4gcHJvcHMuY2hlY2tlZCAhPT0gdGhpcy5wcm9wcy5jaGVja2VkO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY2xhc3NOYW1lLCBjaGlsZHJlbiwgYnV0dG9uLCBjb2xvciwgc3R5bGUsIC4uLnJlc3QgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxXcmFwcGVyIGNsYXNzTmFtZT17Y2xhc3NOYW1lfSBidXR0b249e2J1dHRvbiF9IGNvbG9yPXtjb2xvcn0gc3R5bGU9e3N0eWxlfT5cbiAgICAgICAgPGlucHV0IGlkPXt0aGlzLmlkfSB0eXBlPVwicmFkaW9cIiB7Li4ucmVzdH0gLz5cbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9e3RoaXMuaWR9PntjaGlsZHJlbn08L2xhYmVsPlxuICAgICAgPC9XcmFwcGVyPlxuICAgICk7XG4gIH1cbn1cbiIsIi8qIHRzbGludDpkaXNhYmxlIG1heC1saW5lLWxlbmd0aCAqL1xuaW1wb3J0IFJlYWN0LCB7IFNWR0F0dHJpYnV0ZXMgfSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcHJvdmVkKHByb3BzOiBTVkdBdHRyaWJ1dGVzPFNWR1NWR0VsZW1lbnQ+KSB7XG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICB3aWR0aD1cIjMwXCJcbiAgICAgIGhlaWdodD1cIjMwXCJcbiAgICAgIHZpZXdCb3g9XCIwIDAgMzAgMzBcIlxuICAgICAgey4uLnByb3BzfVxuICAgID5cbiAgICAgIDxnIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgtODAgLTIxNSlcIj5cbiAgICAgICAgPGcgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDE3IDM5KVwiPlxuICAgICAgICAgIDxnIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSg2MyAxNzYpXCIgZmlsbD1cIm5vbmVcIj5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgIGQ9XCJNIDE1IDI5IEMgMTEuMjYwNDcwMzkwMzE5ODIgMjkgNy43NDQ3NjAwMzY0Njg1MDYgMjcuNTQzNzUwNzYyOTM5NDUgNS4xMDA1MTAxMjAzOTE4NDYgMjQuODk5NDkwMzU2NDQ1MzEgQyAyLjQ1NjI0OTk1MjMxNjI4NCAyMi4yNTUyMzk0ODY2OTQzNCAxIDE4LjczOTUzMDU2MzM1NDQ5IDEgMTUgQyAxIDExLjI2MDQ3MDM5MDMxOTgyIDIuNDU2MjQ5OTUyMzE2Mjg0IDcuNzQ0NzYwMDM2NDY4NTA2IDUuMTAwNTEwMTIwMzkxODQ2IDUuMTAwNTEwMTIwMzkxODQ2IEMgNy43NDQ3NjAwMzY0Njg1MDYgMi40NTYyNDk5NTIzMTYyODQgMTEuMjYwNDcwMzkwMzE5ODIgMSAxNSAxIEMgMTguNzM5NTMwNTYzMzU0NDkgMSAyMi4yNTUyMzk0ODY2OTQzNCAyLjQ1NjI0OTk1MjMxNjI4NCAyNC44OTk0OTAzNTY0NDUzMSA1LjEwMDUxMDEyMDM5MTg0NiBDIDI3LjU0Mzc1MDc2MjkzOTQ1IDcuNzQ0NzYwMDM2NDY4NTA2IDI5IDExLjI2MDQ3MDM5MDMxOTgyIDI5IDE1IEMgMjkgMTguNzM5NTMwNTYzMzU0NDkgMjcuNTQzNzUwNzYyOTM5NDUgMjIuMjU1MjM5NDg2Njk0MzQgMjQuODk5NDkwMzU2NDQ1MzEgMjQuODk5NDkwMzU2NDQ1MzEgQyAyMi4yNTUyMzk0ODY2OTQzNCAyNy41NDM3NTA3NjI5Mzk0NSAxOC43Mzk1MzA1NjMzNTQ0OSAyOSAxNSAyOSBaXCJcbiAgICAgICAgICAgICAgc3Ryb2tlPVwibm9uZVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgZD1cIk0gMTUgMiBDIDExLjUyNzU3MDcyNDQ4NzMgMiA4LjI2Mjk5MDk1MTUzODA4NiAzLjM1MjIzOTYwODc2NDY0OCA1LjgwNzYwOTU1ODEwNTQ2OSA1LjgwNzYwOTU1ODEwNTQ2OSBDIDMuMzUyMjM5NjA4NzY0NjQ4IDguMjYyOTkwOTUxNTM4MDg2IDIgMTEuNTI3NTcwNzI0NDg3MyAyIDE1IEMgMiAxOC40NzI0MzExODI4NjEzMyAzLjM1MjIzOTYwODc2NDY0OCAyMS43MzcwMTA5NTU4MTA1NSA1LjgwNzYwOTU1ODEwNTQ2OSAyNC4xOTIzOTA0NDE4OTQ1MyBDIDguMjYyOTkwOTUxNTM4MDg2IDI2LjY0Nzc2MDM5MTIzNTM1IDExLjUyNzU3MDcyNDQ4NzMgMjggMTUgMjggQyAxOC40NzI0MzExODI4NjEzMyAyOCAyMS43MzcwMTA5NTU4MTA1NSAyNi42NDc3NjAzOTEyMzUzNSAyNC4xOTIzOTA0NDE4OTQ1MyAyNC4xOTIzOTA0NDE4OTQ1MyBDIDI2LjY0Nzc2MDM5MTIzNTM1IDIxLjczNzAxMDk1NTgxMDU1IDI4IDE4LjQ3MjQzMTE4Mjg2MTMzIDI4IDE1IEMgMjggMTEuNTI3NTcwNzI0NDg3MyAyNi42NDc3NjAzOTEyMzUzNSA4LjI2Mjk5MDk1MTUzODA4NiAyNC4xOTIzOTA0NDE4OTQ1MyA1LjgwNzYwOTU1ODEwNTQ2OSBDIDIxLjczNzAxMDk1NTgxMDU1IDMuMzUyMjM5NjA4NzY0NjQ4IDE4LjQ3MjQzMTE4Mjg2MTMzIDIgMTUgMiBNIDE1IDAgQyAyMy4yODQyNjkzMzI4ODU3NCAwIDMwIDYuNzE1NzMwNjY3MTE0MjU4IDMwIDE1IEMgMzAgMjMuMjg0MjY5MzMyODg1NzQgMjMuMjg0MjY5MzMyODg1NzQgMzAgMTUgMzAgQyA2LjcxNTczMDY2NzExNDI1OCAzMCAwIDIzLjI4NDI2OTMzMjg4NTc0IDAgMTUgQyAwIDYuNzE1NzMwNjY3MTE0MjU4IDYuNzE1NzMwNjY3MTE0MjU4IDAgMTUgMCBaXCJcbiAgICAgICAgICAgICAgc3Ryb2tlPVwibm9uZVwiXG4gICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2c+XG4gICAgICAgIDwvZz5cbiAgICAgICAgPHBhdGhcbiAgICAgICAgICBkPVwiTTguOTI1LDE1Ljg3MSw1LjA0NywxMS44ODYsMy40MSwxMy40MSw5LDE5LDIwLjU2Miw3LjQ2N2wtMS43LTEuNTk1WlwiXG4gICAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDgyLjU5IDIxNy41OTUpXCJcbiAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgLz5cbiAgICAgIDwvZz5cbiAgICA8L3N2Zz5cbiAgKTtcbn1cbiIsImltcG9ydCBSZWFjdCwgeyBTVkdBdHRyaWJ1dGVzIH0gZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDaGV2cm9uTGVmdFJvdW5kKHByb3BzOiBTVkdBdHRyaWJ1dGVzPFNWR1NWR0VsZW1lbnQ+KSB7XG4gIHJldHVybiAoXG4gICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIzMFwiIGhlaWdodD1cIjMwXCIgdmlld0JveD1cIjAgMCAzMCAzMFwiIHsuLi5wcm9wc30+XG4gICAgICA8ZyB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTM2IC0zNilcIj5cbiAgICAgICAgPGcgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDM2IDM2KVwiIGZpbGw9XCJub25lXCI+XG4gICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgIGQ9XCJNIDE1IDI5IEMgMTEuMjYwNDcwMzkwMzE5ODIgMjkgNy43NDQ3NjAwMzY0Njg1MDYgMjcuNTQzNzUwNzYyOTM5NDUgNS4xMDA1MTAxMjAzOTE4NDYgMjQuODk5NDkwMzU2NDQ1MzEgQyAyLjQ1NjI0OTk1MjMxNjI4NCAyMi4yNTUyMzk0ODY2OTQzNCAxIDE4LjczOTUzMDU2MzM1NDQ5IDEgMTUgQyAxIDExLjI2MDQ3MDM5MDMxOTgyIDIuNDU2MjQ5OTUyMzE2Mjg0IDcuNzQ0NzYwMDM2NDY4NTA2IDUuMTAwNTEwMTIwMzkxODQ2IDUuMTAwNTEwMTIwMzkxODQ2IEMgNy43NDQ3NjAwMzY0Njg1MDYgMi40NTYyNDk5NTIzMTYyODQgMTEuMjYwNDcwMzkwMzE5ODIgMSAxNSAxIEMgMTguNzM5NTMwNTYzMzU0NDkgMSAyMi4yNTUyMzk0ODY2OTQzNCAyLjQ1NjI0OTk1MjMxNjI4NCAyNC44OTk0OTAzNTY0NDUzMSA1LjEwMDUxMDEyMDM5MTg0NiBDIDI3LjU0Mzc1MDc2MjkzOTQ1IDcuNzQ0NzYwMDM2NDY4NTA2IDI5IDExLjI2MDQ3MDM5MDMxOTgyIDI5IDE1IEMgMjkgMTguNzM5NTMwNTYzMzU0NDkgMjcuNTQzNzUwNzYyOTM5NDUgMjIuMjU1MjM5NDg2Njk0MzQgMjQuODk5NDkwMzU2NDQ1MzEgMjQuODk5NDkwMzU2NDQ1MzEgQyAyMi4yNTUyMzk0ODY2OTQzNCAyNy41NDM3NTA3NjI5Mzk0NSAxOC43Mzk1MzA1NjMzNTQ0OSAyOSAxNSAyOSBaXCJcbiAgICAgICAgICAgIHN0cm9rZT1cIm5vbmVcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgIGQ9XCJNIDE1IDIgQyAxMS41Mjc1NzA3MjQ0ODczIDIgOC4yNjI5OTA5NTE1MzgwODYgMy4zNTIyMzk2MDg3NjQ2NDggNS44MDc2MDk1NTgxMDU0NjkgNS44MDc2MDk1NTgxMDU0NjkgQyAzLjM1MjIzOTYwODc2NDY0OCA4LjI2Mjk5MDk1MTUzODA4NiAyIDExLjUyNzU3MDcyNDQ4NzMgMiAxNSBDIDIgMTguNDcyNDMxMTgyODYxMzMgMy4zNTIyMzk2MDg3NjQ2NDggMjEuNzM3MDEwOTU1ODEwNTUgNS44MDc2MDk1NTgxMDU0NjkgMjQuMTkyMzkwNDQxODk0NTMgQyA4LjI2Mjk5MDk1MTUzODA4NiAyNi42NDc3NjAzOTEyMzUzNSAxMS41Mjc1NzA3MjQ0ODczIDI4IDE1IDI4IEMgMTguNDcyNDMxMTgyODYxMzMgMjggMjEuNzM3MDEwOTU1ODEwNTUgMjYuNjQ3NzYwMzkxMjM1MzUgMjQuMTkyMzkwNDQxODk0NTMgMjQuMTkyMzkwNDQxODk0NTMgQyAyNi42NDc3NjAzOTEyMzUzNSAyMS43MzcwMTA5NTU4MTA1NSAyOCAxOC40NzI0MzExODI4NjEzMyAyOCAxNSBDIDI4IDExLjUyNzU3MDcyNDQ4NzMgMjYuNjQ3NzYwMzkxMjM1MzUgOC4yNjI5OTA5NTE1MzgwODYgMjQuMTkyMzkwNDQxODk0NTMgNS44MDc2MDk1NTgxMDU0NjkgQyAyMS43MzcwMTA5NTU4MTA1NSAzLjM1MjIzOTYwODc2NDY0OCAxOC40NzI0MzExODI4NjEzMyAyIDE1IDIgTSAxNSAwIEMgMjMuMjg0MjY5MzMyODg1NzQgMCAzMCA2LjcxNTczMDY2NzExNDI1OCAzMCAxNSBDIDMwIDIzLjI4NDI2OTMzMjg4NTc0IDIzLjI4NDI2OTMzMjg4NTc0IDMwIDE1IDMwIEMgNi43MTU3MzA2NjcxMTQyNTggMzAgMCAyMy4yODQyNjkzMzI4ODU3NCAwIDE1IEMgMCA2LjcxNTczMDY2NzExNDI1OCA2LjcxNTczMDY2NzExNDI1OCAwIDE1IDAgWlwiXG4gICAgICAgICAgICBzdHJva2U9XCJub25lXCJcbiAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZz5cbiAgICAgICAgPGcgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC0yMDcgLTIxMzYpXCI+XG4gICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgIGQ9XCJNMTgxMS4xODIsNDM2Mi4zNDJsLTcuNTY3LDYuNzMxLDcuNTY3LDYuMlwiXG4gICAgICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTE1NTAuMTE2IC0yMTgxLjg0MilcIlxuICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAgIHN0cm9rZVdpZHRoPVwiMlwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9nPlxuICAgICAgPC9nPlxuICAgIDwvc3ZnPlxuICApO1xufVxuIiwiLyogdHNsaW50OmRpc2FibGUgbWF4LWxpbmUtbGVuZ3RoICovXG5pbXBvcnQgUmVhY3QsIHsgU1ZHQXR0cmlidXRlcyB9IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2hldnJvblJpZ2h0Um91bmQocHJvcHM6IFNWR0F0dHJpYnV0ZXM8U1ZHU1ZHRWxlbWVudD4pIHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjMwXCIgaGVpZ2h0PVwiMzBcIiB2aWV3Qm94PVwiMCAwIDMwIDMwXCIgey4uLnByb3BzfT5cbiAgICAgIDxnIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSg5MyAyMDYpIHJvdGF0ZSgxODApXCI+XG4gICAgICAgIDxnIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSg2MyAxNzYpXCIgZmlsbD1cIm5vbmVcIj5cbiAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgZD1cIk0gMTUgMjkgQyAxMS4yNjA0NzAzOTAzMTk4MiAyOSA3Ljc0NDc2MDAzNjQ2ODUwNiAyNy41NDM3NTA3NjI5Mzk0NSA1LjEwMDUxMDEyMDM5MTg0NiAyNC44OTk0OTAzNTY0NDUzMSBDIDIuNDU2MjQ5OTUyMzE2Mjg0IDIyLjI1NTIzOTQ4NjY5NDM0IDEgMTguNzM5NTMwNTYzMzU0NDkgMSAxNSBDIDEgMTEuMjYwNDcwMzkwMzE5ODIgMi40NTYyNDk5NTIzMTYyODQgNy43NDQ3NjAwMzY0Njg1MDYgNS4xMDA1MTAxMjAzOTE4NDYgNS4xMDA1MTAxMjAzOTE4NDYgQyA3Ljc0NDc2MDAzNjQ2ODUwNiAyLjQ1NjI0OTk1MjMxNjI4NCAxMS4yNjA0NzAzOTAzMTk4MiAxIDE1IDEgQyAxOC43Mzk1MzA1NjMzNTQ0OSAxIDIyLjI1NTIzOTQ4NjY5NDM0IDIuNDU2MjQ5OTUyMzE2Mjg0IDI0Ljg5OTQ5MDM1NjQ0NTMxIDUuMTAwNTEwMTIwMzkxODQ2IEMgMjcuNTQzNzUwNzYyOTM5NDUgNy43NDQ3NjAwMzY0Njg1MDYgMjkgMTEuMjYwNDcwMzkwMzE5ODIgMjkgMTUgQyAyOSAxOC43Mzk1MzA1NjMzNTQ0OSAyNy41NDM3NTA3NjI5Mzk0NSAyMi4yNTUyMzk0ODY2OTQzNCAyNC44OTk0OTAzNTY0NDUzMSAyNC44OTk0OTAzNTY0NDUzMSBDIDIyLjI1NTIzOTQ4NjY5NDM0IDI3LjU0Mzc1MDc2MjkzOTQ1IDE4LjczOTUzMDU2MzM1NDQ5IDI5IDE1IDI5IFpcIlxuICAgICAgICAgICAgc3Ryb2tlPVwibm9uZVwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgZD1cIk0gMTUgMiBDIDExLjUyNzU3MDcyNDQ4NzMgMiA4LjI2Mjk5MDk1MTUzODA4NiAzLjM1MjIzOTYwODc2NDY0OCA1LjgwNzYwOTU1ODEwNTQ2OSA1LjgwNzYwOTU1ODEwNTQ2OSBDIDMuMzUyMjM5NjA4NzY0NjQ4IDguMjYyOTkwOTUxNTM4MDg2IDIgMTEuNTI3NTcwNzI0NDg3MyAyIDE1IEMgMiAxOC40NzI0MzExODI4NjEzMyAzLjM1MjIzOTYwODc2NDY0OCAyMS43MzcwMTA5NTU4MTA1NSA1LjgwNzYwOTU1ODEwNTQ2OSAyNC4xOTIzOTA0NDE4OTQ1MyBDIDguMjYyOTkwOTUxNTM4MDg2IDI2LjY0Nzc2MDM5MTIzNTM1IDExLjUyNzU3MDcyNDQ4NzMgMjggMTUgMjggQyAxOC40NzI0MzExODI4NjEzMyAyOCAyMS43MzcwMTA5NTU4MTA1NSAyNi42NDc3NjAzOTEyMzUzNSAyNC4xOTIzOTA0NDE4OTQ1MyAyNC4xOTIzOTA0NDE4OTQ1MyBDIDI2LjY0Nzc2MDM5MTIzNTM1IDIxLjczNzAxMDk1NTgxMDU1IDI4IDE4LjQ3MjQzMTE4Mjg2MTMzIDI4IDE1IEMgMjggMTEuNTI3NTcwNzI0NDg3MyAyNi42NDc3NjAzOTEyMzUzNSA4LjI2Mjk5MDk1MTUzODA4NiAyNC4xOTIzOTA0NDE4OTQ1MyA1LjgwNzYwOTU1ODEwNTQ2OSBDIDIxLjczNzAxMDk1NTgxMDU1IDMuMzUyMjM5NjA4NzY0NjQ4IDE4LjQ3MjQzMTE4Mjg2MTMzIDIgMTUgMiBNIDE1IDAgQyAyMy4yODQyNjkzMzI4ODU3NCAwIDMwIDYuNzE1NzMwNjY3MTE0MjU4IDMwIDE1IEMgMzAgMjMuMjg0MjY5MzMyODg1NzQgMjMuMjg0MjY5MzMyODg1NzQgMzAgMTUgMzAgQyA2LjcxNTczMDY2NzExNDI1OCAzMCAwIDIzLjI4NDI2OTMzMjg4NTc0IDAgMTUgQyAwIDYuNzE1NzMwNjY3MTE0MjU4IDYuNzE1NzMwNjY3MTE0MjU4IDAgMTUgMCBaXCJcbiAgICAgICAgICAgIHN0cm9rZT1cIm5vbmVcIlxuICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9nPlxuICAgICAgICA8ZyB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTE4MCAtMTk5NilcIj5cbiAgICAgICAgICA8cGF0aCBkPVwiTTE4MTEuMTgyLDQzNjIuMzQybC03LjU2Nyw2LjczMSw3LjU2Nyw2LjJcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTE1NTAuMTE2IC0yMTgxLjg0MilcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZVdpZHRoPVwiMlwiLz5cbiAgICAgICAgPC9nPlxuICAgICAgPC9nPlxuICAgIDwvc3ZnPlxuICApO1xufVxuIiwiaW1wb3J0IFJlYWN0LCB7IFNWR0F0dHJpYnV0ZXMgfSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZpbGVSb3VuZChwcm9wczogU1ZHQXR0cmlidXRlczxTVkdTVkdFbGVtZW50Pikge1xuICByZXR1cm4gKFxuICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMzBcIiBoZWlnaHQ9XCIzMFwiIHZpZXdCb3g9XCIwIDAgMzAgMzBcIiB7Li4ucHJvcHN9PlxuICAgICAgPGcgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC00NjggLTM4MylcIj5cbiAgICAgICAgPGcgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDQwNSAyMDcpXCI+XG4gICAgICAgICAgPGcgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDYzIDE3NilcIiBmaWxsPVwibm9uZVwiPlxuICAgICAgICAgICAgPHBhdGggZD1cIk0gMTUgMjkgQyAxMS4yNjA0NzAzOTAzMTk4MiAyOSA3Ljc0NDc2MDAzNjQ2ODUwNiAyNy41NDM3NTA3NjI5Mzk0NSA1LjEwMDUxMDEyMDM5MTg0NiAyNC44OTk0OTAzNTY0NDUzMSBDIDIuNDU2MjQ5OTUyMzE2Mjg0IDIyLjI1NTIzOTQ4NjY5NDM0IDEgMTguNzM5NTMwNTYzMzU0NDkgMSAxNSBDIDEgMTEuMjYwNDcwMzkwMzE5ODIgMi40NTYyNDk5NTIzMTYyODQgNy43NDQ3NjAwMzY0Njg1MDYgNS4xMDA1MTAxMjAzOTE4NDYgNS4xMDA1MTAxMjAzOTE4NDYgQyA3Ljc0NDc2MDAzNjQ2ODUwNiAyLjQ1NjI0OTk1MjMxNjI4NCAxMS4yNjA0NzAzOTAzMTk4MiAxIDE1IDEgQyAxOC43Mzk1MzA1NjMzNTQ0OSAxIDIyLjI1NTIzOTQ4NjY5NDM0IDIuNDU2MjQ5OTUyMzE2Mjg0IDI0Ljg5OTQ5MDM1NjQ0NTMxIDUuMTAwNTEwMTIwMzkxODQ2IEMgMjcuNTQzNzUwNzYyOTM5NDUgNy43NDQ3NjAwMzY0Njg1MDYgMjkgMTEuMjYwNDcwMzkwMzE5ODIgMjkgMTUgQyAyOSAxOC43Mzk1MzA1NjMzNTQ0OSAyNy41NDM3NTA3NjI5Mzk0NSAyMi4yNTUyMzk0ODY2OTQzNCAyNC44OTk0OTAzNTY0NDUzMSAyNC44OTk0OTAzNTY0NDUzMSBDIDIyLjI1NTIzOTQ4NjY5NDM0IDI3LjU0Mzc1MDc2MjkzOTQ1IDE4LjczOTUzMDU2MzM1NDQ5IDI5IDE1IDI5IFpcIiBzdHJva2U9XCJub25lXCIvPlxuICAgICAgICAgICAgPHBhdGggZD1cIk0gMTUgMiBDIDExLjUyNzU3MDcyNDQ4NzMgMiA4LjI2Mjk5MDk1MTUzODA4NiAzLjM1MjIzOTYwODc2NDY0OCA1LjgwNzYwOTU1ODEwNTQ2OSA1LjgwNzYwOTU1ODEwNTQ2OSBDIDMuMzUyMjM5NjA4NzY0NjQ4IDguMjYyOTkwOTUxNTM4MDg2IDIgMTEuNTI3NTcwNzI0NDg3MyAyIDE1IEMgMiAxOC40NzI0MzExODI4NjEzMyAzLjM1MjIzOTYwODc2NDY0OCAyMS43MzcwMTA5NTU4MTA1NSA1LjgwNzYwOTU1ODEwNTQ2OSAyNC4xOTIzOTA0NDE4OTQ1MyBDIDguMjYyOTkwOTUxNTM4MDg2IDI2LjY0Nzc2MDM5MTIzNTM1IDExLjUyNzU3MDcyNDQ4NzMgMjggMTUgMjggQyAxOC40NzI0MzExODI4NjEzMyAyOCAyMS43MzcwMTA5NTU4MTA1NSAyNi42NDc3NjAzOTEyMzUzNSAyNC4xOTIzOTA0NDE4OTQ1MyAyNC4xOTIzOTA0NDE4OTQ1MyBDIDI2LjY0Nzc2MDM5MTIzNTM1IDIxLjczNzAxMDk1NTgxMDU1IDI4IDE4LjQ3MjQzMTE4Mjg2MTMzIDI4IDE1IEMgMjggMTEuNTI3NTcwNzI0NDg3MyAyNi42NDc3NjAzOTEyMzUzNSA4LjI2Mjk5MDk1MTUzODA4NiAyNC4xOTIzOTA0NDE4OTQ1MyA1LjgwNzYwOTU1ODEwNTQ2OSBDIDIxLjczNzAxMDk1NTgxMDU1IDMuMzUyMjM5NjA4NzY0NjQ4IDE4LjQ3MjQzMTE4Mjg2MTMzIDIgMTUgMiBNIDE1IDAgQyAyMy4yODQyNjkzMzI4ODU3NCAwIDMwIDYuNzE1NzMwNjY3MTE0MjU4IDMwIDE1IEMgMzAgMjMuMjg0MjY5MzMyODg1NzQgMjMuMjg0MjY5MzMyODg1NzQgMzAgMTUgMzAgQyA2LjcxNTczMDY2NzExNDI1OCAzMCAwIDIzLjI4NDI2OTMzMjg4NTc0IDAgMTUgQyAwIDYuNzE1NzMwNjY3MTE0MjU4IDYuNzE1NzMwNjY3MTE0MjU4IDAgMTUgMCBaXCIgc3Ryb2tlPVwibm9uZVwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIi8+XG4gICAgICAgICAgPC9nPlxuICAgICAgICA8L2c+XG4gICAgICAgIDxnIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgzODQgMjA4KVwiPlxuICAgICAgICAgIDxnIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSg5MyAxODIpXCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2VXaWR0aD1cIjJcIj5cbiAgICAgICAgICAgIDxyZWN0IHdpZHRoPVwiMTJcIiBoZWlnaHQ9XCIxNlwiIHJ4PVwiMVwiIHN0cm9rZT1cIm5vbmVcIi8+XG4gICAgICAgICAgICA8cmVjdCB4PVwiMVwiIHk9XCIxXCIgd2lkdGg9XCIxMFwiIGhlaWdodD1cIjE0XCIgZmlsbD1cIm5vbmVcIi8+XG4gICAgICAgICAgPC9nPlxuICAgICAgICAgIDxyZWN0IHdpZHRoPVwiNFwiIGhlaWdodD1cIjEuM1wiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSg5NyAxODYpXCIgZmlsbD1cImN1cnJlbnRDb2xvclwiLz5cbiAgICAgICAgICA8cmVjdCB3aWR0aD1cIjRcIiBoZWlnaHQ9XCIxLjNcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoOTcgMTg5KVwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIi8+XG4gICAgICAgICAgPHJlY3Qgd2lkdGg9XCI0XCIgaGVpZ2h0PVwiMS4zXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDk3IDE5MilcIiBmaWxsPVwiY3VycmVudENvbG9yXCIvPlxuICAgICAgICA8L2c+XG4gICAgICA8L2c+XG4gICAgPC9zdmc+XG4gICk7XG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgU1ZHQXR0cmlidXRlcyB9IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGVuY2lsKHByb3BzOiBTVkdBdHRyaWJ1dGVzPFNWR1NWR0VsZW1lbnQ+KSB7XG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICB3aWR0aD1cIjE3Ljc5NlwiXG4gICAgICBoZWlnaHQ9XCIxNy45MDhcIlxuICAgICAgdmlld0JveD1cIjAgMCAxNy43OTYgMTcuOTA4XCJcbiAgICAgIHsuLi5wcm9wc31cbiAgICA+XG4gICAgICA8ZyBvcGFjaXR5PVwiMC42XCI+XG4gICAgICAgIDxnPlxuICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICBkPVwiTTEuMjU0LDEyLjY3NC41LDE3LjQwOGw0LjcyNi0uOEwxNy4zLDQuNDcyLDEzLjI4MS41WlwiXG4gICAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcbiAgICAgICAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxuICAgICAgICAgICAgc3Ryb2tlV2lkdGg9XCIxXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L2c+XG4gICAgICAgIDxsaW5lXG4gICAgICAgICAgeDI9XCIzLjg1MVwiXG4gICAgICAgICAgeTI9XCIzLjgzOFwiXG4gICAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDEuMzc1IDEyLjc2NilcIlxuICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXG4gICAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXG4gICAgICAgICAgc3Ryb2tlV2lkdGg9XCIxXCJcbiAgICAgICAgLz5cbiAgICAgICAgPGxpbmVcbiAgICAgICAgICB4Mj1cIjMuODM2XCJcbiAgICAgICAgICB5Mj1cIjMuODAxXCJcbiAgICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMTAuOTQ5IDIuOTU5KVwiXG4gICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcbiAgICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcbiAgICAgICAgICBzdHJva2VXaWR0aD1cIjFcIlxuICAgICAgICAvPlxuICAgICAgPC9nPlxuICAgIDwvc3ZnPlxuICApO1xufVxuIiwiLyogdHNsaW50OmRpc2FibGUgbWF4LWxpbmUtbGVuZ3RoICovXG5pbXBvcnQgUmVhY3QsIHsgU1ZHQXR0cmlidXRlcyB9IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVXNlcihwcm9wczogU1ZHQXR0cmlidXRlczxTVkdTVkdFbGVtZW50Pikge1xuICByZXR1cm4oXG4gICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIzMFwiIGhlaWdodD1cIjMwXCIgdmlld0JveD1cIjAgMCAzMCAzMFwiIHsuLi5wcm9wc30+XG4gICAgPGcgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC00NjggLTM4MylcIj5cbiAgICAgIDxnIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSg0NjggMzgzKVwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlV2lkdGg9XCIyXCI+XG4gICAgICAgIDxjaXJjbGUgY3g9XCIxNVwiIGN5PVwiMTVcIiByPVwiMTVcIiBzdHJva2U9XCJub25lXCIvPlxuICAgICAgICA8Y2lyY2xlIGN4PVwiMTVcIiBjeT1cIjE1XCIgcj1cIjE0XCIgZmlsbD1cIm5vbmVcIi8+XG4gICAgICA8L2c+XG4gICAgICA8cGF0aFxuICAgICAgICBkPVwiTS00LTMxMGE2LjAxOCw2LjAxOCwwLDAsMSw2LTZINGE2LjAxOCw2LjAxOCwwLDAsMSw2LDZabTIuNi0ySDcuNUE0LjAzMyw0LjAzMywwLDAsMCw0LTMxNEgyLjFBNC4wMzUsNC4wMzUsMCwwLDAtMS40LTMxMlptLjQtOXYtMWE0LjAxMiw0LjAxMiwwLDAsMSw0LTQsNC4wMTIsNC4wMTIsMCwwLDEsNCw0djFhNC4wMTIsNC4wMTIsMCwwLDEtNCw0QTQuMDEyLDQuMDEyLDAsMCwxLTEtMzIxWm0yLTF2MWEyLjAwNiwyLjAwNiwwLDAsMCwyLDIsMi4wMDYsMi4wMDYsMCwwLDAsMi0ydi0xYTIuMDA2LDIuMDA2LDAsMCwwLTItMkEyLjAwNiwyLjAwNiwwLDAsMCwxLTMyMlpcIlxuICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoNDc5Ljk5OSA3MTYpXCJcbiAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICAvPlxuICAgIDwvZz5cbiAgPC9zdmc+XG4gICk7XG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgU1ZHQXR0cmlidXRlcyB9IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2xvc2UocHJvcHM6IFNWR0F0dHJpYnV0ZXM8U1ZHU1ZHRWxlbWVudD4pIHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgIHdpZHRoPVwiMjYuOTk4XCJcbiAgICAgIGhlaWdodD1cIjI2Ljk5OFwiXG4gICAgICB2aWV3Qm94PVwiMCAwIDI2Ljk5OCAyNi45OThcIlxuICAgICAgcG9pbnRlckV2ZW50cz1cImJvdW5kaW5nLWJveFwiXG4gICAgICB7Li4ucHJvcHN9XG4gICAgPlxuICAgICAgPGcgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC0xMzEgLTU3MSlcIj5cbiAgICAgICAgPGcgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDEzMiA1NzIpXCI+XG4gICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgIGQ9XCJNMjguNSwyNiwxNiwxMy41LDI4LjUsMVwiXG4gICAgICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTMuNTAxIC0xKVwiXG4gICAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcbiAgICAgICAgICAgIHN0cm9rZU1pdGVybGltaXQ9XCIxMFwiXG4gICAgICAgICAgICBzdHJva2VXaWR0aD1cIjJcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgIGQ9XCJNMSwyNiwxMy41LDEzLjUsMSwxXCJcbiAgICAgICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgtMSAtMSlcIlxuICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXG4gICAgICAgICAgICBzdHJva2VNaXRlcmxpbWl0PVwiMTBcIlxuICAgICAgICAgICAgc3Ryb2tlV2lkdGg9XCIyXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L2c+XG4gICAgICA8L2c+XG4gICAgPC9zdmc+XG4gICk7XG59XG4iLCJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNldEFsaWduKHsgYWxpZ24gfTogeyBhbGlnbj86ICdsZWZ0JyB8ICdyaWdodCcgfCAnY2VudGVyJyB9KSB7XG4gIHN3aXRjaCAoYWxpZ24pIHtcbiAgICBjYXNlICdsZWZ0JzpcbiAgICAgIHJldHVybiAnZmxleC1zdGFydCc7XG4gICAgY2FzZSAncmlnaHQnOlxuICAgICAgcmV0dXJuICdmbGV4LWVuZCc7XG4gICAgY2FzZSAnY2VudGVyJzpcbiAgICAgIHJldHVybiAnY2VudGVyJztcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuICdzcGFjZS1ldmVubHknO1xuICB9XG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCwgSFRNTEF0dHJpYnV0ZXMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdHJhbnNwYXJlbnRpemUgZnJvbSAncG9saXNoZWQvbGliL2NvbG9yL3RyYW5zcGFyZW50aXplJztcbmltcG9ydCBzdHlsZWQsIHsgY3NzIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IGZpbmRDb2xvckludmVydCBmcm9tICcuLi8uLi91dGlscy9maW5kQ29sb3JJbnZlcnQnO1xuaW1wb3J0IGhhbWJ1Z2VyIGZyb20gJy4uLy4uL3V0aWxzL2hhbWJ1Z2VyJztcbmltcG9ydCBzZXRBbGlnbiBmcm9tICcuLi8uLi91dGlscy9zZXRBbGlnbic7XG5pbXBvcnQgeyBtZWRpYVRhYmxldCwgbWVkaWFVbnRpbEZ1bGxIRCwgbWVkaWFNb2JpbGUgfSBmcm9tICcuLi8uLi91dGlscy9tZWRpYSc7XG5pbXBvcnQgeyBDb2xvclR5cGUsIEFsaWduVHlwZSwgQ1NTVHlwZSwgVGhlbWVUeXBlIH0gZnJvbSAnLi4vLi4vdHlwZXMnO1xuXG5mdW5jdGlvbiBzZXRDb2xvcihcbiAgeyBjb2xvciwgdGhlbWUsIGJhY2tkcm9wIH06IHsgY29sb3I/OiBDb2xvclR5cGUsIHRoZW1lOiBUaGVtZVR5cGUsIGJhY2tkcm9wPzogYm9vbGVhbiB9LFxuKSB7XG4gIGNvbnN0IGJhY2tncm91bmRDb2xvciA9IGNvbG9yID8gdGhlbWVbY29sb3JdIDogJ3RyYW5zcGFyZW50JztcbiAgY29uc3QgdGV4dENvbG9yID1cbiAgICBmaW5kQ29sb3JJbnZlcnQodGhlbWUsIGJhY2tncm91bmRDb2xvciA9PT0gJ3RyYW5zcGFyZW50JyA/IHRoZW1lLmJhY2tncm91bmQgOiBiYWNrZ3JvdW5kQ29sb3IpO1xuXG4gIGlmIChiYWNrZHJvcCkge1xuICAgIGNvbnN0IGJhY2tDb2xvciA9XG4gICAgICB0cmFuc3BhcmVudGl6ZSgwLjIsIChiYWNrZ3JvdW5kQ29sb3IgPT09ICd0cmFuc3BhcmVudCcgPyB0aGVtZS53aGl0ZSA6IGJhY2tncm91bmRDb2xvcikpO1xuICAgIGNvbnN0IHVhID0gbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpO1xuICAgIGlmICh1YS5pbmRleE9mKCdzYWZhcmknKSA+IC0xICYmIHVhLmluZGV4T2YoJ2Nocm9tZScpID09PSAtMSkge1xuICAgICAgcmV0dXJuIGNzc2BiYWNrZ3JvdW5kLWNvbG9yOiAke2JhY2tDb2xvcn07IGNvbG9yOiAke3RleHRDb2xvcn07IGJhY2tkcm9wLWZpbHRlcjogYmx1cig4cHgpO2A7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNzc2BcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7YmFja0NvbG9yfTtcbiAgICAgIGNvbG9yOiAke3RleHRDb2xvcn07XG4gICAgYDtcbiAgfVxuXG4gIHJldHVybiBjc3NgYmFja2dyb3VuZC1jb2xvcjogJHtiYWNrZ3JvdW5kQ29sb3J9OyBjb2xvcjogJHt0ZXh0Q29sb3J9O2A7XG59XG5cbmludGVyZmFjZSBOYXZQcm9wcyB7XG4gIGNvbG9yPzogQ29sb3JUeXBlO1xuICBiYWNrZHJvcD86IGJvb2xlYW47XG4gIGZpeGVkPzogYm9vbGVhbjtcbiAgc3RpY2t5PzogYm9vbGVhbjtcbiAgZmx1aWQ/OiBib29sZWFuO1xuICBzaG93PzogYm9vbGVhbjtcbiAgc3R5bGU/OiBhbnk7XG4gIGFsaWduPzogQWxpZ25UeXBlO1xuICByb2xlOiBzdHJpbmc7XG4gIGNzcz86IENTU1R5cGU7XG59XG5cbmNvbnN0IE5hdkJhciA9IHN0eWxlZC5oZWFkZXI8TmF2UHJvcHM+YFxuICBwb3NpdGlvbjogJHtcbiAgICAoeyBmaXhlZCwgc3RpY2t5IH0pID0+ICghKHN0aWNreSB8fCBmaXhlZCkgPyAncmVsYXRpdmUnIDogKGZpeGVkID8gJ2ZpeGVkJyA6ICdzdGlja3knKSlcbiAgfTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0cmV0Y2g7XG4gIHRvcDogLTFweDtcblxuICBtaW4taGVpZ2h0OiAzLjI1cmVtO1xuICB3aWR0aDogMTAwJTtcbiAgei1pbmRleDogMzA7XG5cbiAgJHtzZXRDb2xvcn1cblxuICBhIHsgY29sb3I6IGluaGVyaXQ7IH1cblxuICAke21lZGlhVGFibGV0fSB7XG4gICAgcGFkZGluZzogJHsoeyBmbHVpZCB9OiBOYXZQcm9wcykgPT4gZmx1aWQgPyAnMCAwLjVyZW0nIDogJzAgMyUnfTtcbiAgfVxuICAke21lZGlhVW50aWxGdWxsSER9IHtcbiAgICBwYWRkaW5nOiAkeyh7IGZsdWlkIH06IE5hdlByb3BzKSA9PiBmbHVpZCA/ICcwIDAuNzVyZW0nIDogJzAgNSUnfTtcbiAgfVxuICAkeyh7IGNzcyB9KSA9PiBjc3MgfHwge319XG5gO1xuXG5jb25zdCBCdXJnZXIgPSBzdHlsZWQuYnV0dG9uYFxuICAke2hhbWJ1Z2VyKCczLjI1cmVtJyl9XG4gIGRpc3BsYXk6IG5vbmU7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogaW5oZXJpdDtcblxuICBvdXRsaW5lOiBub25lO1xuXG4gICY6aG92ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAuMDUpO1xuICB9XG5cbiAgJHttZWRpYU1vYmlsZX0ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG5gO1xuXG5pbnRlcmZhY2UgQ29udGVudFByb3BzIHtcbiAgY29sb3I/OiBDb2xvclR5cGU7XG4gIHNob3c/OiBib29sZWFuO1xuICBhbGlnbj86ICdsZWZ0JyB8ICdyaWdodCc7XG59XG5cbmNvbnN0IE5hdkNvbnRlbnQgPSBzdHlsZWQuZGl2PENvbnRlbnRQcm9wcz5gXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1iYXNpczogYXV0bztcbiAgZmxleC1ncm93OiAxO1xuXG4gICYgPiB1bCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgZmxleC1ncm93OiAxO1xuICAgIGp1c3RpZnktY29udGVudDogJHtzZXRBbGlnbn07XG5cbiAgICBsaSB7XG4gICAgICBwYWRkaW5nOiAwIDAuNzVyZW07XG4gICAgfVxuICB9XG5cbiAgJiA+IGRpdiwgJiA+IHNwYW4sICYgPiBmb3JtIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgICR7KHsgY29sb3IgfSkgPT4gKGNvbG9yID8gYGNvbG9yOiAke2NvbG9yfTtgIDogJycpfVxuICB9XG5cbiAgJHttZWRpYU1vYmlsZX0ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG5cbiAgICBwYWRkaW5nLWJvdHRvbTogMC41cmVtO1xuXG4gICAgYnV0dG9uOm5vdCguYWN0aXZlKSsmIHtcbiAgICAgIGRpc3BsYXk6bm9uZTtcbiAgICB9XG5cbiAgICAmID4gdWwge1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgbGkge1xuICAgICAgICBwYWRkaW5nOiAuNXJlbSAwO1xuICAgICAgfVxuICAgIH1cblxuICAgICYgPiBkaXYsICYgPiBzcGFuLCAmID4gZm9ybSB7XG4gICAgICBwYWRkaW5nOiAuNXJlbSAwO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICB9XG5gO1xuXG5cbmludGVyZmFjZSBQcm9wcyBleHRlbmRzIEhUTUxBdHRyaWJ1dGVzPEhUTUxEaXZFbGVtZW50PiB7XG4gIC8qKiBiYWNrZ3JvdW5k6ImyICovXG4gIGNvbG9yPzogQ29sb3JUeXBlO1xuICAvKiog44Ot44K044Gu44Kk44Oh44O844K444CB44OX44Ot44K444Kn44Kv44OI5ZCN44Gq44GpICovXG4gIGJyYW5kPzogUmVhY3QuUmVhY3RFbGVtZW50PGFueT4gfCBzdHJpbmc7XG4gIC8qKiDlrprnvqnjgZXjgozjgZ/kvY3nva7jgpLlm7rlrprjgavjgZnjgosgKi9cbiAgZml4ZWQ/OiBib29sZWFuO1xuICAvKiogKElFMTHkuI3lj68p55S76Z2i44GM44K544Kv44Ot44O844Or44GV44KM44Gm44KC5LiK44Gn6LK844KK5LuY44GR44GE44KL44KI44GG44Gr44GZ44KLICovXG4gIHN0aWNreT86IGJvb2xlYW47XG4gIC8qKiDkuK3lpK7kuKbjgbPjgYvjgonoh6rli5XluYXjgafooajnpLrjgZfjgb7jgZkgKi9cbiAgZmx1aWQ/OiBib29sZWFuO1xuICAvKiog6IOM5pmv44GMYmx1cuOBleOCjOOBvuOBme+8iHNhZmFyaeWwgueUqOOAgeS7luOBr+mAj+aYjuW6pu+8iSAqL1xuICBiYWNrZHJvcD86IGJvb2xlYW47XG4gIC8qKiBjaGlsZHJlbuOBq+Wumue+qeOBmeOCi0VsZW1lbnTjga7kuKbjgbPpoIbjgpLmjIflrprjgZfjgb7jgZnjgILmnKrlrprnvqnjga/oh6rli5XkuKbjgbMgKi9cbiAgYWxpZ24/OiAnbGVmdCcgfCAncmlnaHQnO1xuICAvKiog44Kr44K544K/44OgQ1NT5a6a576pICovXG4gIGNzcz86IENTU1R5cGU7XG59XG5cbnR5cGUgU3RhdGUgPSB7XG4gIHNob3c6IGJvb2xlYW4sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcHBCYXIgZXh0ZW5kcyBQdXJlQ29tcG9uZW50PFByb3BzLCBTdGF0ZT4ge1xuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGNvbG9yOiBudWxsLFxuICAgIGJyYW5kOiBudWxsLFxuICAgIGZpeGVkOiBmYWxzZSxcbiAgICBzdGlja3k6IGZhbHNlLFxuICAgIGZsdWlkOiBmYWxzZSxcbiAgICBiYWNrZHJvcDogZmFsc2UsXG4gIH07XG5cbiAgc3RhdGUgPSB7IHNob3c6IGZhbHNlIH07XG5cbiAgdG9nZ2xlTWVudSA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgc2hvdzogIXRoaXMuc3RhdGUuc2hvdyB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNoaWxkcmVuLCBhbGlnbiwgYnJhbmQsIC4uLnJlc3QgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBzaG93IH0gPSB0aGlzLnN0YXRlO1xuICAgIHJldHVybiAoXG4gICAgICA8TmF2QmFyXG4gICAgICAgIHJvbGU9XCJuYXZpZ2F0aW9uXCJcbiAgICAgICAgey4uLnJlc3R9XG4gICAgICA+XG4gICAgICAgIHticmFuZH1cbiAgICAgICAgPEJ1cmdlciBjbGFzc05hbWU9e3Nob3cgPyAnYWN0aXZlJyA6ICcnfSBvbkNsaWNrPXt0aGlzLnRvZ2dsZU1lbnV9PlxuICAgICAgICAgIDxzcGFuIC8+XG4gICAgICAgICAgPHNwYW4gLz5cbiAgICAgICAgICA8c3BhbiAvPlxuICAgICAgICA8L0J1cmdlcj5cbiAgICAgICAgPE5hdkNvbnRlbnQgYWxpZ249e2FsaWdufT5cbiAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvTmF2Q29udGVudD5cbiAgICAgIDwvTmF2QmFyPlxuICAgICk7XG4gIH1cbn1cbiIsImltcG9ydCBSZWFjdCwgeyBIVE1MQXR0cmlidXRlcywgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQsIHsgY3NzIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IGRhcmtlbiBmcm9tICdwb2xpc2hlZC9saWIvY29sb3IvZGFya2VuJztcbmltcG9ydCBmaW5kQ29sb3JJbnZlcnQgZnJvbSAnLi4vLi4vdXRpbHMvZmluZENvbG9ySW52ZXJ0JztcbmltcG9ydCB7IENvbG9yVHlwZSwgVGhlbWVUeXBlLCBDU1NUeXBlIH0gZnJvbSAnLi4vLi4vdHlwZXMnO1xuXG5pbnRlcmZhY2UgV3JhcHBlclByb3BzIHtcbiAgY29sb3I/OiBDb2xvclR5cGU7XG4gIGFkZG9uQ29sb3I/OiBDb2xvclR5cGU7XG4gIGNsb3NlOiBib29sZWFuO1xuICBjc3M/OiBDU1NUeXBlO1xufVxuXG5mdW5jdGlvbiBnZXRDb2xvcih0aGVtZTogVGhlbWVUeXBlLCBjb2xvcj86IENvbG9yVHlwZSkge1xuICByZXR1cm4gKCFjb2xvciB8fCBjb2xvciA9PT0gJ2xpZ2h0JykgPyB0aGVtZS5iYWNrZ3JvdW5kIDogdGhlbWVbY29sb3JdO1xufVxuXG5mdW5jdGlvbiBzZXRDb2xvcih7IHRoZW1lLCBjb2xvciwgYWRkb25Db2xvciB9OlxuICAgIHsgdGhlbWU6IFRoZW1lVHlwZSwgY29sb3I/OiBDb2xvclR5cGUsIGFkZG9uQ29sb3I/OiBDb2xvclR5cGUgfSkge1xuICBjb25zdCB0YXJnZXQgPSBnZXRDb2xvcih0aGVtZSwgY29sb3IpO1xuICBjb25zdCBpbnZlcnRDb2xvciA9IGZpbmRDb2xvckludmVydCh0aGVtZSwgdGFyZ2V0KTtcblxuICBjb25zdCBzdWJDb2xvciA9IGFkZG9uQ29sb3IgPyBnZXRDb2xvcih0aGVtZSwgYWRkb25Db2xvcikgOiBkYXJrZW4oMC4wNSwgdGFyZ2V0KTtcblxuICByZXR1cm4gY3NzYFxuICAgIGNvbG9yOiAke2ludmVydENvbG9yfTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RhcmdldH07XG5cbiAgICBhLCBzcGFuIHtcbiAgICAgIGNvbG9yOiAke2ludmVydENvbG9yfTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7c3ViQ29sb3J9O1xuICAgIH1cblxuICAgIGE6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtkYXJrZW4oMC4wNSwgc3ViQ29sb3IpfTtcbiAgICB9XG4gIGA7XG59XG5cbmNvbnN0IFdyYXBwZXIgPSBzdHlsZWQuZGl2PFdyYXBwZXJQcm9wcz5gXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBmb250LXNpemU6IDAuNzVyZW07XG4gIGN1cnNvcjogZGVmYXVsdDtcbiAgcGFkZGluZzogMCAuNXJlbTtcbiAgaGVpZ2h0OiAyZW07XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBsaW5lLWhlaWdodDogMS41O1xuXG4gICR7c2V0Q29sb3J9XG5cbiAgJjpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcbiAgfVxuXG4gIGEsIHNwYW4ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICBmbGV4LWdyb3c6IDA7XG4gICAgZmxleC1zaHJpbms6IDA7XG4gICAgbWluLXdpZHRoOiAxLjVyZW07XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1hcmdpbi1yaWdodDogLTAuNXJlbTtcbiAgICBtYXJnaW4tbGVmdDogMC41cmVtO1xuICAgIHBhZGRpbmc6IDAgLjVyZW07XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogM3B4O1xuICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDNweDtcbiAgICB9XG5cbiAgICAmOmZvY3VzIHtcbiAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgfVxuXG4gICAgJHtwcm9wcyA9PiAocHJvcHMuY2xvc2UgPyBjc3NgXG4gICAgICAmOmJlZm9yZSwgJjphZnRlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGN1cnJlbnRDb2xvcjtcbiAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoLTUwJSkgcm90YXRlKDQ1ZGVnKTtcbiAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGNlbnRlcjtcbiAgICAgIH1cblxuICAgICAgJjpiZWZvcmUge1xuICAgICAgICBoZWlnaHQ6IDFweDtcbiAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgIH1cblxuICAgICAgJjphZnRlciB7XG4gICAgICAgIGhlaWdodDogNTAlO1xuICAgICAgICB3aWR0aDogMXB4O1xuICAgICAgfVxuXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgIH1cbiAgICBgIDogJycpfVxuICB9XG5cbiAgJHsoeyBjc3MgfSkgPT4gY3NzIHx8ICcnfVxuYDtcblxuaW50ZXJmYWNlIFByb3BzIGV4dGVuZHMgSFRNTEF0dHJpYnV0ZXM8SFRNTERpdkVsZW1lbnQ+IHtcbiAgLyoqIOOCv+OCsOOBruWGheWuuSAqL1xuICBjaGlsZHJlbjogYW55O1xuICAvKiogWOODnOOCv+ODs+OBrui/veWKoO+8i+OCr+ODquODg+OCr+aZguOBruOCpOODmeODs+ODiOODj+ODs+ODieODqeODvCAqL1xuICBvbkNsb3NlPzogKCkgPT4gdm9pZDtcbiAgLyoqIOOCr+ODquODg+OCr+aZguOBruOCpOODmeODs+ODiOODj+ODs+ODieODqeODvCAqL1xuICBvbkNsaWNrPzogKCkgPT4gdm9pZDtcbiAgLyoqIOiJsuOBruaMh+WumiAqL1xuICBjb2xvcj86IENvbG9yVHlwZTtcbiAgLyoqIOOCq+OCueOCv+ODoENTU+Wumue+qSAqL1xuICBjc3M/OiBDU1NUeXBlO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUYWcgZXh0ZW5kcyBQdXJlQ29tcG9uZW50PFByb3BzPiB7XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgY2hpbGRyZW46IG51bGwsXG4gICAgb25DbG9zZTogbnVsbCxcbiAgICBvbkNsaWNrOiBudWxsLFxuICAgIGNvbG9yOiBudWxsLFxuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNoaWxkcmVuLCBvbkNsb3NlLCAuLi5yZXN0IH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8V3JhcHBlciBjbG9zZT17b25DbG9zZSAhPT0gbnVsbH0gey4uLnJlc3R9PlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIHtvbkNsb3NlICYmICg8YSB0YWJJbmRleD17MH0gcm9sZT1cImxpbmtcIiBvbkNsaWNrPXtvbkNsb3NlfT4mbmJzcDs8L2E+KX1cbiAgICAgIDwvV3JhcHBlcj5cbiAgICApO1xuICB9XG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgSFRNTEF0dHJpYnV0ZXMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkLCB7IGNzcyB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBDb250YWluZXIgZnJvbSAnLi4vR3JpZC9Db250YWluZXInO1xuaW1wb3J0IGZpbmRDb2xvckludmVydCBmcm9tICcuLi8uLi91dGlscy9maW5kQ29sb3JJbnZlcnQnO1xuaW1wb3J0IHsgbWVkaWFEZXNrdG9wIH0gZnJvbSAnLi4vLi4vdXRpbHMvbWVkaWEnO1xuaW1wb3J0IHsgQ29sb3JUeXBlLCBUaGVtZVR5cGUsIFNpemVUeXBlIH0gZnJvbSAnLi4vLi4vdHlwZXMnO1xuXG5pbnRlcmZhY2UgUHJvcHMgZXh0ZW5kcyBIVE1MQXR0cmlidXRlczxIVE1MRGl2RWxlbWVudD4ge1xuICAvKiog6IOM5pmv44Gu6ImyICovXG4gIGNvbG9yPzogQ29sb3JUeXBlO1xuICAvKiogc21hbGwgfCBtZWRpdW0gfCBsYXJnZSB8IGZ1bGwgKi9cbiAgc2l6ZT86IFNpemVUeXBlIHwgJ2Z1bGwnO1xuICAvKiogICovXG4gIGNoaWxkcmVuPzogUmVhY3QuUmVhY3RDaGlsZDtcbiAgLyoqIGNoaWxkcmVu44Gu5Lit5aSu5o+D44GIICovXG4gIGNlbnRlcj86IGJvb2xlYW47XG4gIC8qKiDjgqvjgrnjgr/jg6Djg5jjg4Pjg4Djg7wgKi9cbiAgaGVhZGVyPzogUmVhY3QuUmVhY3RFbGVtZW50PGFueT47XG59XG5cbmZ1bmN0aW9uIHNldENvbG9yKHsgY29sb3IsIHRoZW1lIH06IHsgY29sb3I/OiBDb2xvclR5cGUsIHRoZW1lOiBUaGVtZVR5cGUgfSkge1xuICBpZiAoIWNvbG9yKSByZXR1cm4gJyc7XG5cbiAgY29uc3QgdGFyZ2V0ID0gdGhlbWVbY29sb3JdIHx8IGNvbG9yO1xuICBjb25zdCBpbnZlcnRDb2xvciA9IGZpbmRDb2xvckludmVydCh0aGVtZSwgdGFyZ2V0KTtcbiAgcmV0dXJuIGNzc2BiYWNrZ3JvdW5kLWNvbG9yOiAke3RhcmdldH07IGNvbG9yOiAke2ludmVydENvbG9yfTtgO1xufVxuXG5mdW5jdGlvbiBzZXRTaXplKHsgc2l6ZSwgdGhlbWUgfTogeyBzaXplPzogU2l6ZVR5cGUgfCAnZnVsbCcsIHRoZW1lOiBUaGVtZVR5cGUgfSkge1xuICBpZiAoIXNpemUgfHwgc2l6ZSA9PT0gJ3NtYWxsJykgcmV0dXJuICcnO1xuXG4gIHN3aXRjaCAoc2l6ZSkge1xuICAgIGNhc2UgJ21lZGl1bScgOlxuICAgICAgcmV0dXJuIGNzc2BwYWRkaW5nLWJvdHRvbTogOXJlbTsgcGFkZGluZy10b3A6IDlyZW07YDtcbiAgICBjYXNlICdsYXJnZScgOlxuICAgICAgcmV0dXJuIGNzc2BwYWRkaW5nLWJvdHRvbTogMThyZW07IHBhZGRpbmctdG9wOiAxOHJlbTtgO1xuICAgIGNhc2UgJ2Z1bGwnIDpcbiAgICAgIHJldHVybiBjc3NgXG4gICAgICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuXG4gICAgICAgICR7Qm9keX0ge1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgfVxuICAgICAgYDtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuICcnO1xuICB9XG59XG5cbmludGVyZmFjZSBCb2R5UHJvcHMge1xuICBjZW50ZXI/OiBib29sZWFuO1xufVxuXG5jb25zdCBCb2R5ID0gc3R5bGVkLmRpdjxCb2R5UHJvcHM+YFxuICBmbGV4LWdyb3c6IDE7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICBwYWRkaW5nOiAzcmVtIDEuNXJlbTtcblxuICAkeyh7IGNlbnRlciB9KSA9PiBjZW50ZXIgPyAndGV4dC1hbGlnbjogY2VudGVyOycgOiAnJ31cblxuICBoMSB7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgbGluZS1oZWlnaHQ6IDEuMTI1O1xuXG4gICAgJjpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcbiAgICB9XG4gIH1cblxuICBoMiB7XG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgbGluZS1oZWlnaHQ6IDEuMjU7XG4gIH1cblxuICBoMStoMiB7XG4gICAgbWFyZ2luLXRvcDogLTEuMjVyZW07XG4gIH1cbmA7XG5cbmludGVyZmFjZSBXcmFwcGVyUHJvcHMge1xuICBjb2xvcj86IENvbG9yVHlwZTtcbiAgc2l6ZT86IFNpemVUeXBlIHwgJ2Z1bGwnO1xufVxuXG5jb25zdCBXcmFwcGVyID0gc3R5bGVkLmRpdjxXcmFwcGVyUHJvcHM+YFxuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAke3NldENvbG9yfVxuICAke3NldFNpemV9XG5cbiAgaGVhZGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xuICAgIGNvbG9yOiBpbmhlcml0O1xuICB9XG5cbiAgaGVhZGVyKyR7Qm9keX0ge1xuICAgIG1hcmdpbi10b3A6IDMuMjVyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMy4yNXJlbTtcbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGVybyh7IGNoaWxkcmVuLCBjb2xvciwgc2l6ZSwgY2VudGVyLCBoZWFkZXIsIC4uLnJlc3QgfTogUHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8V3JhcHBlciBjb2xvcj17Y29sb3J9IHNpemU9e3NpemV9IHsuLi5yZXN0fT5cbiAgICAgIHtoZWFkZXJ9XG4gICAgICA8Qm9keSBjZW50ZXI9e2NlbnRlcn0+XG4gICAgICAgIDxDb250YWluZXI+XG4gICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgIDwvQm9keT5cbiAgICA8L1dyYXBwZXI+XG4gICk7XG59XG4iLCIvKiogQGxpY2Vuc2UgUmVhY3QgdjE2LjguMVxuICogcmVhY3QtaXMucHJvZHVjdGlvbi5taW4uanNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7XG52YXIgYj1cImZ1bmN0aW9uXCI9PT10eXBlb2YgU3ltYm9sJiZTeW1ib2wuZm9yLGM9Yj9TeW1ib2wuZm9yKFwicmVhY3QuZWxlbWVudFwiKTo2MDEwMyxkPWI/U3ltYm9sLmZvcihcInJlYWN0LnBvcnRhbFwiKTo2MDEwNixlPWI/U3ltYm9sLmZvcihcInJlYWN0LmZyYWdtZW50XCIpOjYwMTA3LGY9Yj9TeW1ib2wuZm9yKFwicmVhY3Quc3RyaWN0X21vZGVcIik6NjAxMDgsZz1iP1N5bWJvbC5mb3IoXCJyZWFjdC5wcm9maWxlclwiKTo2MDExNCxoPWI/U3ltYm9sLmZvcihcInJlYWN0LnByb3ZpZGVyXCIpOjYwMTA5LGs9Yj9TeW1ib2wuZm9yKFwicmVhY3QuY29udGV4dFwiKTo2MDExMCxsPWI/U3ltYm9sLmZvcihcInJlYWN0LmFzeW5jX21vZGVcIik6NjAxMTEsbT1iP1N5bWJvbC5mb3IoXCJyZWFjdC5jb25jdXJyZW50X21vZGVcIik6NjAxMTEsbj1iP1N5bWJvbC5mb3IoXCJyZWFjdC5mb3J3YXJkX3JlZlwiKTo2MDExMixwPWI/U3ltYm9sLmZvcihcInJlYWN0LnN1c3BlbnNlXCIpOjYwMTEzLHE9Yj9TeW1ib2wuZm9yKFwicmVhY3QubWVtb1wiKTpcbjYwMTE1LHI9Yj9TeW1ib2wuZm9yKFwicmVhY3QubGF6eVwiKTo2MDExNjtmdW5jdGlvbiB0KGEpe2lmKFwib2JqZWN0XCI9PT10eXBlb2YgYSYmbnVsbCE9PWEpe3ZhciB1PWEuJCR0eXBlb2Y7c3dpdGNoKHUpe2Nhc2UgYzpzd2l0Y2goYT1hLnR5cGUsYSl7Y2FzZSBsOmNhc2UgbTpjYXNlIGU6Y2FzZSBnOmNhc2UgZjpjYXNlIHA6cmV0dXJuIGE7ZGVmYXVsdDpzd2l0Y2goYT1hJiZhLiQkdHlwZW9mLGEpe2Nhc2UgazpjYXNlIG46Y2FzZSBoOnJldHVybiBhO2RlZmF1bHQ6cmV0dXJuIHV9fWNhc2UgcjpjYXNlIHE6Y2FzZSBkOnJldHVybiB1fX19ZnVuY3Rpb24gdihhKXtyZXR1cm4gdChhKT09PW19ZXhwb3J0cy50eXBlT2Y9dDtleHBvcnRzLkFzeW5jTW9kZT1sO2V4cG9ydHMuQ29uY3VycmVudE1vZGU9bTtleHBvcnRzLkNvbnRleHRDb25zdW1lcj1rO2V4cG9ydHMuQ29udGV4dFByb3ZpZGVyPWg7ZXhwb3J0cy5FbGVtZW50PWM7ZXhwb3J0cy5Gb3J3YXJkUmVmPW47XG5leHBvcnRzLkZyYWdtZW50PWU7ZXhwb3J0cy5MYXp5PXI7ZXhwb3J0cy5NZW1vPXE7ZXhwb3J0cy5Qb3J0YWw9ZDtleHBvcnRzLlByb2ZpbGVyPWc7ZXhwb3J0cy5TdHJpY3RNb2RlPWY7ZXhwb3J0cy5TdXNwZW5zZT1wO2V4cG9ydHMuaXNWYWxpZEVsZW1lbnRUeXBlPWZ1bmN0aW9uKGEpe3JldHVyblwic3RyaW5nXCI9PT10eXBlb2YgYXx8XCJmdW5jdGlvblwiPT09dHlwZW9mIGF8fGE9PT1lfHxhPT09bXx8YT09PWd8fGE9PT1mfHxhPT09cHx8XCJvYmplY3RcIj09PXR5cGVvZiBhJiZudWxsIT09YSYmKGEuJCR0eXBlb2Y9PT1yfHxhLiQkdHlwZW9mPT09cXx8YS4kJHR5cGVvZj09PWh8fGEuJCR0eXBlb2Y9PT1rfHxhLiQkdHlwZW9mPT09bil9O2V4cG9ydHMuaXNBc3luY01vZGU9ZnVuY3Rpb24oYSl7cmV0dXJuIHYoYSl8fHQoYSk9PT1sfTtleHBvcnRzLmlzQ29uY3VycmVudE1vZGU9djtleHBvcnRzLmlzQ29udGV4dENvbnN1bWVyPWZ1bmN0aW9uKGEpe3JldHVybiB0KGEpPT09a307XG5leHBvcnRzLmlzQ29udGV4dFByb3ZpZGVyPWZ1bmN0aW9uKGEpe3JldHVybiB0KGEpPT09aH07ZXhwb3J0cy5pc0VsZW1lbnQ9ZnVuY3Rpb24oYSl7cmV0dXJuXCJvYmplY3RcIj09PXR5cGVvZiBhJiZudWxsIT09YSYmYS4kJHR5cGVvZj09PWN9O2V4cG9ydHMuaXNGb3J3YXJkUmVmPWZ1bmN0aW9uKGEpe3JldHVybiB0KGEpPT09bn07ZXhwb3J0cy5pc0ZyYWdtZW50PWZ1bmN0aW9uKGEpe3JldHVybiB0KGEpPT09ZX07ZXhwb3J0cy5pc0xhenk9ZnVuY3Rpb24oYSl7cmV0dXJuIHQoYSk9PT1yfTtleHBvcnRzLmlzTWVtbz1mdW5jdGlvbihhKXtyZXR1cm4gdChhKT09PXF9O2V4cG9ydHMuaXNQb3J0YWw9ZnVuY3Rpb24oYSl7cmV0dXJuIHQoYSk9PT1kfTtleHBvcnRzLmlzUHJvZmlsZXI9ZnVuY3Rpb24oYSl7cmV0dXJuIHQoYSk9PT1nfTtleHBvcnRzLmlzU3RyaWN0TW9kZT1mdW5jdGlvbihhKXtyZXR1cm4gdChhKT09PWZ9O1xuZXhwb3J0cy5pc1N1c3BlbnNlPWZ1bmN0aW9uKGEpe3JldHVybiB0KGEpPT09cH07XG4iLCIvKiogQGxpY2Vuc2UgUmVhY3QgdjE2LjguMVxuICogcmVhY3QtaXMuZGV2ZWxvcG1lbnQuanNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cblxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIChmdW5jdGlvbigpIHtcbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxuLy8gVGhlIFN5bWJvbCB1c2VkIHRvIHRhZyB0aGUgUmVhY3RFbGVtZW50LWxpa2UgdHlwZXMuIElmIHRoZXJlIGlzIG5vIG5hdGl2ZSBTeW1ib2xcbi8vIG5vciBwb2x5ZmlsbCwgdGhlbiBhIHBsYWluIG51bWJlciBpcyB1c2VkIGZvciBwZXJmb3JtYW5jZS5cbnZhciBoYXNTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC5mb3I7XG5cbnZhciBSRUFDVF9FTEVNRU5UX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5lbGVtZW50JykgOiAweGVhYzc7XG52YXIgUkVBQ1RfUE9SVEFMX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5wb3J0YWwnKSA6IDB4ZWFjYTtcbnZhciBSRUFDVF9GUkFHTUVOVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuZnJhZ21lbnQnKSA6IDB4ZWFjYjtcbnZhciBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3Quc3RyaWN0X21vZGUnKSA6IDB4ZWFjYztcbnZhciBSRUFDVF9QUk9GSUxFUl9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QucHJvZmlsZXInKSA6IDB4ZWFkMjtcbnZhciBSRUFDVF9QUk9WSURFUl9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QucHJvdmlkZXInKSA6IDB4ZWFjZDtcbnZhciBSRUFDVF9DT05URVhUX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5jb250ZXh0JykgOiAweGVhY2U7XG52YXIgUkVBQ1RfQVNZTkNfTU9ERV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuYXN5bmNfbW9kZScpIDogMHhlYWNmO1xudmFyIFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuY29uY3VycmVudF9tb2RlJykgOiAweGVhY2Y7XG52YXIgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmZvcndhcmRfcmVmJykgOiAweGVhZDA7XG52YXIgUkVBQ1RfU1VTUEVOU0VfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnN1c3BlbnNlJykgOiAweGVhZDE7XG52YXIgUkVBQ1RfTUVNT19UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QubWVtbycpIDogMHhlYWQzO1xudmFyIFJFQUNUX0xBWllfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmxhenknKSA6IDB4ZWFkNDtcblxuZnVuY3Rpb24gaXNWYWxpZEVsZW1lbnRUeXBlKHR5cGUpIHtcbiAgcmV0dXJuIHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJyB8fFxuICAvLyBOb3RlOiBpdHMgdHlwZW9mIG1pZ2h0IGJlIG90aGVyIHRoYW4gJ3N5bWJvbCcgb3IgJ251bWJlcicgaWYgaXQncyBhIHBvbHlmaWxsLlxuICB0eXBlID09PSBSRUFDVF9GUkFHTUVOVF9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1BST0ZJTEVSX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVVNQRU5TRV9UWVBFIHx8IHR5cGVvZiB0eXBlID09PSAnb2JqZWN0JyAmJiB0eXBlICE9PSBudWxsICYmICh0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9MQVpZX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTUVNT19UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX1BST1ZJREVSX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfQ09OVEVYVF9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUpO1xufVxuXG4vKipcbiAqIEZvcmtlZCBmcm9tIGZianMvd2FybmluZzpcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9mYmpzL2Jsb2IvZTY2YmEyMGFkNWJlNDMzZWI1NDQyM2YyYjA5N2Q4MjkzMjRkOWRlNi9wYWNrYWdlcy9mYmpzL3NyYy9fX2ZvcmtzX18vd2FybmluZy5qc1xuICpcbiAqIE9ubHkgY2hhbmdlIGlzIHdlIHVzZSBjb25zb2xlLndhcm4gaW5zdGVhZCBvZiBjb25zb2xlLmVycm9yLFxuICogYW5kIGRvIG5vdGhpbmcgd2hlbiAnY29uc29sZScgaXMgbm90IHN1cHBvcnRlZC5cbiAqIFRoaXMgcmVhbGx5IHNpbXBsaWZpZXMgdGhlIGNvZGUuXG4gKiAtLS1cbiAqIFNpbWlsYXIgdG8gaW52YXJpYW50IGJ1dCBvbmx5IGxvZ3MgYSB3YXJuaW5nIGlmIHRoZSBjb25kaXRpb24gaXMgbm90IG1ldC5cbiAqIFRoaXMgY2FuIGJlIHVzZWQgdG8gbG9nIGlzc3VlcyBpbiBkZXZlbG9wbWVudCBlbnZpcm9ubWVudHMgaW4gY3JpdGljYWxcbiAqIHBhdGhzLiBSZW1vdmluZyB0aGUgbG9nZ2luZyBjb2RlIGZvciBwcm9kdWN0aW9uIGVudmlyb25tZW50cyB3aWxsIGtlZXAgdGhlXG4gKiBzYW1lIGxvZ2ljIGFuZCBmb2xsb3cgdGhlIHNhbWUgY29kZSBwYXRocy5cbiAqL1xuXG52YXIgbG93UHJpb3JpdHlXYXJuaW5nID0gZnVuY3Rpb24gKCkge307XG5cbntcbiAgdmFyIHByaW50V2FybmluZyA9IGZ1bmN0aW9uIChmb3JtYXQpIHtcbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHZhciBhcmdJbmRleCA9IDA7XG4gICAgdmFyIG1lc3NhZ2UgPSAnV2FybmluZzogJyArIGZvcm1hdC5yZXBsYWNlKC8lcy9nLCBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gYXJnc1thcmdJbmRleCsrXTtcbiAgICB9KTtcbiAgICBpZiAodHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25zb2xlLndhcm4obWVzc2FnZSk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAvLyAtLS0gV2VsY29tZSB0byBkZWJ1Z2dpbmcgUmVhY3QgLS0tXG4gICAgICAvLyBUaGlzIGVycm9yIHdhcyB0aHJvd24gYXMgYSBjb252ZW5pZW5jZSBzbyB0aGF0IHlvdSBjYW4gdXNlIHRoaXMgc3RhY2tcbiAgICAgIC8vIHRvIGZpbmQgdGhlIGNhbGxzaXRlIHRoYXQgY2F1c2VkIHRoaXMgd2FybmluZyB0byBmaXJlLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgIH0gY2F0Y2ggKHgpIHt9XG4gIH07XG5cbiAgbG93UHJpb3JpdHlXYXJuaW5nID0gZnVuY3Rpb24gKGNvbmRpdGlvbiwgZm9ybWF0KSB7XG4gICAgaWYgKGZvcm1hdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2Bsb3dQcmlvcml0eVdhcm5pbmcoY29uZGl0aW9uLCBmb3JtYXQsIC4uLmFyZ3MpYCByZXF1aXJlcyBhIHdhcm5pbmcgJyArICdtZXNzYWdlIGFyZ3VtZW50Jyk7XG4gICAgfVxuICAgIGlmICghY29uZGl0aW9uKSB7XG4gICAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuMiA+IDIgPyBfbGVuMiAtIDIgOiAwKSwgX2tleTIgPSAyOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICAgIGFyZ3NbX2tleTIgLSAyXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgICB9XG5cbiAgICAgIHByaW50V2FybmluZy5hcHBseSh1bmRlZmluZWQsIFtmb3JtYXRdLmNvbmNhdChhcmdzKSk7XG4gICAgfVxuICB9O1xufVxuXG52YXIgbG93UHJpb3JpdHlXYXJuaW5nJDEgPSBsb3dQcmlvcml0eVdhcm5pbmc7XG5cbmZ1bmN0aW9uIHR5cGVPZihvYmplY3QpIHtcbiAgaWYgKHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmIG9iamVjdCAhPT0gbnVsbCkge1xuICAgIHZhciAkJHR5cGVvZiA9IG9iamVjdC4kJHR5cGVvZjtcbiAgICBzd2l0Y2ggKCQkdHlwZW9mKSB7XG4gICAgICBjYXNlIFJFQUNUX0VMRU1FTlRfVFlQRTpcbiAgICAgICAgdmFyIHR5cGUgPSBvYmplY3QudHlwZTtcblxuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICBjYXNlIFJFQUNUX0FTWU5DX01PREVfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfRlJBR01FTlRfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1BST0ZJTEVSX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfVFlQRTpcbiAgICAgICAgICAgIHJldHVybiB0eXBlO1xuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICB2YXIgJCR0eXBlb2ZUeXBlID0gdHlwZSAmJiB0eXBlLiQkdHlwZW9mO1xuXG4gICAgICAgICAgICBzd2l0Y2ggKCQkdHlwZW9mVHlwZSkge1xuICAgICAgICAgICAgICBjYXNlIFJFQUNUX0NPTlRFWFRfVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX1BST1ZJREVSX1RZUEU6XG4gICAgICAgICAgICAgICAgcmV0dXJuICQkdHlwZW9mVHlwZTtcbiAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gJCR0eXBlb2Y7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIGNhc2UgUkVBQ1RfTEFaWV9UWVBFOlxuICAgICAgY2FzZSBSRUFDVF9NRU1PX1RZUEU6XG4gICAgICBjYXNlIFJFQUNUX1BPUlRBTF9UWVBFOlxuICAgICAgICByZXR1cm4gJCR0eXBlb2Y7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cblxuLy8gQXN5bmNNb2RlIGlzIGRlcHJlY2F0ZWQgYWxvbmcgd2l0aCBpc0FzeW5jTW9kZVxudmFyIEFzeW5jTW9kZSA9IFJFQUNUX0FTWU5DX01PREVfVFlQRTtcbnZhciBDb25jdXJyZW50TW9kZSA9IFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFO1xudmFyIENvbnRleHRDb25zdW1lciA9IFJFQUNUX0NPTlRFWFRfVFlQRTtcbnZhciBDb250ZXh0UHJvdmlkZXIgPSBSRUFDVF9QUk9WSURFUl9UWVBFO1xudmFyIEVsZW1lbnQgPSBSRUFDVF9FTEVNRU5UX1RZUEU7XG52YXIgRm9yd2FyZFJlZiA9IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU7XG52YXIgRnJhZ21lbnQgPSBSRUFDVF9GUkFHTUVOVF9UWVBFO1xudmFyIExhenkgPSBSRUFDVF9MQVpZX1RZUEU7XG52YXIgTWVtbyA9IFJFQUNUX01FTU9fVFlQRTtcbnZhciBQb3J0YWwgPSBSRUFDVF9QT1JUQUxfVFlQRTtcbnZhciBQcm9maWxlciA9IFJFQUNUX1BST0ZJTEVSX1RZUEU7XG52YXIgU3RyaWN0TW9kZSA9IFJFQUNUX1NUUklDVF9NT0RFX1RZUEU7XG52YXIgU3VzcGVuc2UgPSBSRUFDVF9TVVNQRU5TRV9UWVBFO1xuXG52YXIgaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNBc3luY01vZGUgPSBmYWxzZTtcblxuLy8gQXN5bmNNb2RlIHNob3VsZCBiZSBkZXByZWNhdGVkXG5mdW5jdGlvbiBpc0FzeW5jTW9kZShvYmplY3QpIHtcbiAge1xuICAgIGlmICghaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNBc3luY01vZGUpIHtcbiAgICAgIGhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQXN5bmNNb2RlID0gdHJ1ZTtcbiAgICAgIGxvd1ByaW9yaXR5V2FybmluZyQxKGZhbHNlLCAnVGhlIFJlYWN0SXMuaXNBc3luY01vZGUoKSBhbGlhcyBoYXMgYmVlbiBkZXByZWNhdGVkLCAnICsgJ2FuZCB3aWxsIGJlIHJlbW92ZWQgaW4gUmVhY3QgMTcrLiBVcGRhdGUgeW91ciBjb2RlIHRvIHVzZSAnICsgJ1JlYWN0SXMuaXNDb25jdXJyZW50TW9kZSgpIGluc3RlYWQuIEl0IGhhcyB0aGUgZXhhY3Qgc2FtZSBBUEkuJyk7XG4gICAgfVxuICB9XG4gIHJldHVybiBpc0NvbmN1cnJlbnRNb2RlKG9iamVjdCkgfHwgdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0FTWU5DX01PREVfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzQ29uY3VycmVudE1vZGUob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEU7XG59XG5mdW5jdGlvbiBpc0NvbnRleHRDb25zdW1lcihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9DT05URVhUX1RZUEU7XG59XG5mdW5jdGlvbiBpc0NvbnRleHRQcm92aWRlcihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9QUk9WSURFUl9UWVBFO1xufVxuZnVuY3Rpb24gaXNFbGVtZW50KG9iamVjdCkge1xuICByZXR1cm4gdHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgJiYgb2JqZWN0ICE9PSBudWxsICYmIG9iamVjdC4kJHR5cGVvZiA9PT0gUkVBQ1RfRUxFTUVOVF9UWVBFO1xufVxuZnVuY3Rpb24gaXNGb3J3YXJkUmVmKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU7XG59XG5mdW5jdGlvbiBpc0ZyYWdtZW50KG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0ZSQUdNRU5UX1RZUEU7XG59XG5mdW5jdGlvbiBpc0xhenkob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfTEFaWV9UWVBFO1xufVxuZnVuY3Rpb24gaXNNZW1vKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX01FTU9fVFlQRTtcbn1cbmZ1bmN0aW9uIGlzUG9ydGFsKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1BPUlRBTF9UWVBFO1xufVxuZnVuY3Rpb24gaXNQcm9maWxlcihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9QUk9GSUxFUl9UWVBFO1xufVxuZnVuY3Rpb24gaXNTdHJpY3RNb2RlKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1NUUklDVF9NT0RFX1RZUEU7XG59XG5mdW5jdGlvbiBpc1N1c3BlbnNlKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1NVU1BFTlNFX1RZUEU7XG59XG5cbmV4cG9ydHMudHlwZU9mID0gdHlwZU9mO1xuZXhwb3J0cy5Bc3luY01vZGUgPSBBc3luY01vZGU7XG5leHBvcnRzLkNvbmN1cnJlbnRNb2RlID0gQ29uY3VycmVudE1vZGU7XG5leHBvcnRzLkNvbnRleHRDb25zdW1lciA9IENvbnRleHRDb25zdW1lcjtcbmV4cG9ydHMuQ29udGV4dFByb3ZpZGVyID0gQ29udGV4dFByb3ZpZGVyO1xuZXhwb3J0cy5FbGVtZW50ID0gRWxlbWVudDtcbmV4cG9ydHMuRm9yd2FyZFJlZiA9IEZvcndhcmRSZWY7XG5leHBvcnRzLkZyYWdtZW50ID0gRnJhZ21lbnQ7XG5leHBvcnRzLkxhenkgPSBMYXp5O1xuZXhwb3J0cy5NZW1vID0gTWVtbztcbmV4cG9ydHMuUG9ydGFsID0gUG9ydGFsO1xuZXhwb3J0cy5Qcm9maWxlciA9IFByb2ZpbGVyO1xuZXhwb3J0cy5TdHJpY3RNb2RlID0gU3RyaWN0TW9kZTtcbmV4cG9ydHMuU3VzcGVuc2UgPSBTdXNwZW5zZTtcbmV4cG9ydHMuaXNWYWxpZEVsZW1lbnRUeXBlID0gaXNWYWxpZEVsZW1lbnRUeXBlO1xuZXhwb3J0cy5pc0FzeW5jTW9kZSA9IGlzQXN5bmNNb2RlO1xuZXhwb3J0cy5pc0NvbmN1cnJlbnRNb2RlID0gaXNDb25jdXJyZW50TW9kZTtcbmV4cG9ydHMuaXNDb250ZXh0Q29uc3VtZXIgPSBpc0NvbnRleHRDb25zdW1lcjtcbmV4cG9ydHMuaXNDb250ZXh0UHJvdmlkZXIgPSBpc0NvbnRleHRQcm92aWRlcjtcbmV4cG9ydHMuaXNFbGVtZW50ID0gaXNFbGVtZW50O1xuZXhwb3J0cy5pc0ZvcndhcmRSZWYgPSBpc0ZvcndhcmRSZWY7XG5leHBvcnRzLmlzRnJhZ21lbnQgPSBpc0ZyYWdtZW50O1xuZXhwb3J0cy5pc0xhenkgPSBpc0xhenk7XG5leHBvcnRzLmlzTWVtbyA9IGlzTWVtbztcbmV4cG9ydHMuaXNQb3J0YWwgPSBpc1BvcnRhbDtcbmV4cG9ydHMuaXNQcm9maWxlciA9IGlzUHJvZmlsZXI7XG5leHBvcnRzLmlzU3RyaWN0TW9kZSA9IGlzU3RyaWN0TW9kZTtcbmV4cG9ydHMuaXNTdXNwZW5zZSA9IGlzU3VzcGVuc2U7XG4gIH0pKCk7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QtaXMucHJvZHVjdGlvbi5taW4uanMnKTtcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QtaXMuZGV2ZWxvcG1lbnQuanMnKTtcbn1cbiIsIi8qXG5vYmplY3QtYXNzaWduXG4oYykgU2luZHJlIFNvcmh1c1xuQGxpY2Vuc2UgTUlUXG4qL1xuXG4ndXNlIHN0cmljdCc7XG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xudmFyIGdldE93blByb3BlcnR5U3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG52YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xudmFyIHByb3BJc0VudW1lcmFibGUgPSBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuXG5mdW5jdGlvbiB0b09iamVjdCh2YWwpIHtcblx0aWYgKHZhbCA9PT0gbnVsbCB8fCB2YWwgPT09IHVuZGVmaW5lZCkge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ09iamVjdC5hc3NpZ24gY2Fubm90IGJlIGNhbGxlZCB3aXRoIG51bGwgb3IgdW5kZWZpbmVkJyk7XG5cdH1cblxuXHRyZXR1cm4gT2JqZWN0KHZhbCk7XG59XG5cbmZ1bmN0aW9uIHNob3VsZFVzZU5hdGl2ZSgpIHtcblx0dHJ5IHtcblx0XHRpZiAoIU9iamVjdC5hc3NpZ24pIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBEZXRlY3QgYnVnZ3kgcHJvcGVydHkgZW51bWVyYXRpb24gb3JkZXIgaW4gb2xkZXIgVjggdmVyc2lvbnMuXG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD00MTE4XG5cdFx0dmFyIHRlc3QxID0gbmV3IFN0cmluZygnYWJjJyk7ICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLW5ldy13cmFwcGVyc1xuXHRcdHRlc3QxWzVdID0gJ2RlJztcblx0XHRpZiAoT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGVzdDEpWzBdID09PSAnNScpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0zMDU2XG5cdFx0dmFyIHRlc3QyID0ge307XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG5cdFx0XHR0ZXN0MlsnXycgKyBTdHJpbmcuZnJvbUNoYXJDb2RlKGkpXSA9IGk7XG5cdFx0fVxuXHRcdHZhciBvcmRlcjIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0ZXN0MikubWFwKGZ1bmN0aW9uIChuKSB7XG5cdFx0XHRyZXR1cm4gdGVzdDJbbl07XG5cdFx0fSk7XG5cdFx0aWYgKG9yZGVyMi5qb2luKCcnKSAhPT0gJzAxMjM0NTY3ODknKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzA1NlxuXHRcdHZhciB0ZXN0MyA9IHt9O1xuXHRcdCdhYmNkZWZnaGlqa2xtbm9wcXJzdCcuc3BsaXQoJycpLmZvckVhY2goZnVuY3Rpb24gKGxldHRlcikge1xuXHRcdFx0dGVzdDNbbGV0dGVyXSA9IGxldHRlcjtcblx0XHR9KTtcblx0XHRpZiAoT2JqZWN0LmtleXMoT2JqZWN0LmFzc2lnbih7fSwgdGVzdDMpKS5qb2luKCcnKSAhPT1cblx0XHRcdFx0J2FiY2RlZmdoaWprbG1ub3BxcnN0Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdHJldHVybiB0cnVlO1xuXHR9IGNhdGNoIChlcnIpIHtcblx0XHQvLyBXZSBkb24ndCBleHBlY3QgYW55IG9mIHRoZSBhYm92ZSB0byB0aHJvdywgYnV0IGJldHRlciB0byBiZSBzYWZlLlxuXHRcdHJldHVybiBmYWxzZTtcblx0fVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNob3VsZFVzZU5hdGl2ZSgpID8gT2JqZWN0LmFzc2lnbiA6IGZ1bmN0aW9uICh0YXJnZXQsIHNvdXJjZSkge1xuXHR2YXIgZnJvbTtcblx0dmFyIHRvID0gdG9PYmplY3QodGFyZ2V0KTtcblx0dmFyIHN5bWJvbHM7XG5cblx0Zm9yICh2YXIgcyA9IDE7IHMgPCBhcmd1bWVudHMubGVuZ3RoOyBzKyspIHtcblx0XHRmcm9tID0gT2JqZWN0KGFyZ3VtZW50c1tzXSk7XG5cblx0XHRmb3IgKHZhciBrZXkgaW4gZnJvbSkge1xuXHRcdFx0aWYgKGhhc093blByb3BlcnR5LmNhbGwoZnJvbSwga2V5KSkge1xuXHRcdFx0XHR0b1trZXldID0gZnJvbVtrZXldO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmIChnZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcblx0XHRcdHN5bWJvbHMgPSBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoZnJvbSk7XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHN5bWJvbHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0aWYgKHByb3BJc0VudW1lcmFibGUuY2FsbChmcm9tLCBzeW1ib2xzW2ldKSkge1xuXHRcdFx0XHRcdHRvW3N5bWJvbHNbaV1dID0gZnJvbVtzeW1ib2xzW2ldXTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiB0bztcbn07XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIFJlYWN0UHJvcFR5cGVzU2VjcmV0ID0gJ1NFQ1JFVF9ET19OT1RfUEFTU19USElTX09SX1lPVV9XSUxMX0JFX0ZJUkVEJztcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdFByb3BUeXBlc1NlY3JldDtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgcHJpbnRXYXJuaW5nID0gZnVuY3Rpb24oKSB7fTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgdmFyIFJlYWN0UHJvcFR5cGVzU2VjcmV0ID0gcmVxdWlyZSgnLi9saWIvUmVhY3RQcm9wVHlwZXNTZWNyZXQnKTtcbiAgdmFyIGxvZ2dlZFR5cGVGYWlsdXJlcyA9IHt9O1xuICB2YXIgaGFzID0gRnVuY3Rpb24uY2FsbC5iaW5kKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkpO1xuXG4gIHByaW50V2FybmluZyA9IGZ1bmN0aW9uKHRleHQpIHtcbiAgICB2YXIgbWVzc2FnZSA9ICdXYXJuaW5nOiAnICsgdGV4dDtcbiAgICBpZiAodHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25zb2xlLmVycm9yKG1lc3NhZ2UpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgLy8gLS0tIFdlbGNvbWUgdG8gZGVidWdnaW5nIFJlYWN0IC0tLVxuICAgICAgLy8gVGhpcyBlcnJvciB3YXMgdGhyb3duIGFzIGEgY29udmVuaWVuY2Ugc28gdGhhdCB5b3UgY2FuIHVzZSB0aGlzIHN0YWNrXG4gICAgICAvLyB0byBmaW5kIHRoZSBjYWxsc2l0ZSB0aGF0IGNhdXNlZCB0aGlzIHdhcm5pbmcgdG8gZmlyZS5cbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICB9IGNhdGNoICh4KSB7fVxuICB9O1xufVxuXG4vKipcbiAqIEFzc2VydCB0aGF0IHRoZSB2YWx1ZXMgbWF0Y2ggd2l0aCB0aGUgdHlwZSBzcGVjcy5cbiAqIEVycm9yIG1lc3NhZ2VzIGFyZSBtZW1vcml6ZWQgYW5kIHdpbGwgb25seSBiZSBzaG93biBvbmNlLlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSB0eXBlU3BlY3MgTWFwIG9mIG5hbWUgdG8gYSBSZWFjdFByb3BUeXBlXG4gKiBAcGFyYW0ge29iamVjdH0gdmFsdWVzIFJ1bnRpbWUgdmFsdWVzIHRoYXQgbmVlZCB0byBiZSB0eXBlLWNoZWNrZWRcbiAqIEBwYXJhbSB7c3RyaW5nfSBsb2NhdGlvbiBlLmcuIFwicHJvcFwiLCBcImNvbnRleHRcIiwgXCJjaGlsZCBjb250ZXh0XCJcbiAqIEBwYXJhbSB7c3RyaW5nfSBjb21wb25lbnROYW1lIE5hbWUgb2YgdGhlIGNvbXBvbmVudCBmb3IgZXJyb3IgbWVzc2FnZXMuXG4gKiBAcGFyYW0gez9GdW5jdGlvbn0gZ2V0U3RhY2sgUmV0dXJucyB0aGUgY29tcG9uZW50IHN0YWNrLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gY2hlY2tQcm9wVHlwZXModHlwZVNwZWNzLCB2YWx1ZXMsIGxvY2F0aW9uLCBjb21wb25lbnROYW1lLCBnZXRTdGFjaykge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGZvciAodmFyIHR5cGVTcGVjTmFtZSBpbiB0eXBlU3BlY3MpIHtcbiAgICAgIGlmIChoYXModHlwZVNwZWNzLCB0eXBlU3BlY05hbWUpKSB7XG4gICAgICAgIHZhciBlcnJvcjtcbiAgICAgICAgLy8gUHJvcCB0eXBlIHZhbGlkYXRpb24gbWF5IHRocm93LiBJbiBjYXNlIHRoZXkgZG8sIHdlIGRvbid0IHdhbnQgdG9cbiAgICAgICAgLy8gZmFpbCB0aGUgcmVuZGVyIHBoYXNlIHdoZXJlIGl0IGRpZG4ndCBmYWlsIGJlZm9yZS4gU28gd2UgbG9nIGl0LlxuICAgICAgICAvLyBBZnRlciB0aGVzZSBoYXZlIGJlZW4gY2xlYW5lZCB1cCwgd2UnbGwgbGV0IHRoZW0gdGhyb3cuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyBpcyBpbnRlbnRpb25hbGx5IGFuIGludmFyaWFudCB0aGF0IGdldHMgY2F1Z2h0LiBJdCdzIHRoZSBzYW1lXG4gICAgICAgICAgLy8gYmVoYXZpb3IgYXMgd2l0aG91dCB0aGlzIHN0YXRlbWVudCBleGNlcHQgd2l0aCBhIGJldHRlciBtZXNzYWdlLlxuICAgICAgICAgIGlmICh0eXBlb2YgdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHZhciBlcnIgPSBFcnJvcihcbiAgICAgICAgICAgICAgKGNvbXBvbmVudE5hbWUgfHwgJ1JlYWN0IGNsYXNzJykgKyAnOiAnICsgbG9jYXRpb24gKyAnIHR5cGUgYCcgKyB0eXBlU3BlY05hbWUgKyAnYCBpcyBpbnZhbGlkOyAnICtcbiAgICAgICAgICAgICAgJ2l0IG11c3QgYmUgYSBmdW5jdGlvbiwgdXN1YWxseSBmcm9tIHRoZSBgcHJvcC10eXBlc2AgcGFja2FnZSwgYnV0IHJlY2VpdmVkIGAnICsgdHlwZW9mIHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdICsgJ2AuJ1xuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGVyci5uYW1lID0gJ0ludmFyaWFudCBWaW9sYXRpb24nO1xuICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlcnJvciA9IHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdKHZhbHVlcywgdHlwZVNwZWNOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgbnVsbCwgUmVhY3RQcm9wVHlwZXNTZWNyZXQpO1xuICAgICAgICB9IGNhdGNoIChleCkge1xuICAgICAgICAgIGVycm9yID0gZXg7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVycm9yICYmICEoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikpIHtcbiAgICAgICAgICBwcmludFdhcm5pbmcoXG4gICAgICAgICAgICAoY29tcG9uZW50TmFtZSB8fCAnUmVhY3QgY2xhc3MnKSArICc6IHR5cGUgc3BlY2lmaWNhdGlvbiBvZiAnICtcbiAgICAgICAgICAgIGxvY2F0aW9uICsgJyBgJyArIHR5cGVTcGVjTmFtZSArICdgIGlzIGludmFsaWQ7IHRoZSB0eXBlIGNoZWNrZXIgJyArXG4gICAgICAgICAgICAnZnVuY3Rpb24gbXVzdCByZXR1cm4gYG51bGxgIG9yIGFuIGBFcnJvcmAgYnV0IHJldHVybmVkIGEgJyArIHR5cGVvZiBlcnJvciArICcuICcgK1xuICAgICAgICAgICAgJ1lvdSBtYXkgaGF2ZSBmb3Jnb3R0ZW4gdG8gcGFzcyBhbiBhcmd1bWVudCB0byB0aGUgdHlwZSBjaGVja2VyICcgK1xuICAgICAgICAgICAgJ2NyZWF0b3IgKGFycmF5T2YsIGluc3RhbmNlT2YsIG9iamVjdE9mLCBvbmVPZiwgb25lT2ZUeXBlLCBhbmQgJyArXG4gICAgICAgICAgICAnc2hhcGUgYWxsIHJlcXVpcmUgYW4gYXJndW1lbnQpLidcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yICYmICEoZXJyb3IubWVzc2FnZSBpbiBsb2dnZWRUeXBlRmFpbHVyZXMpKSB7XG4gICAgICAgICAgLy8gT25seSBtb25pdG9yIHRoaXMgZmFpbHVyZSBvbmNlIGJlY2F1c2UgdGhlcmUgdGVuZHMgdG8gYmUgYSBsb3Qgb2YgdGhlXG4gICAgICAgICAgLy8gc2FtZSBlcnJvci5cbiAgICAgICAgICBsb2dnZWRUeXBlRmFpbHVyZXNbZXJyb3IubWVzc2FnZV0gPSB0cnVlO1xuXG4gICAgICAgICAgdmFyIHN0YWNrID0gZ2V0U3RhY2sgPyBnZXRTdGFjaygpIDogJyc7XG5cbiAgICAgICAgICBwcmludFdhcm5pbmcoXG4gICAgICAgICAgICAnRmFpbGVkICcgKyBsb2NhdGlvbiArICcgdHlwZTogJyArIGVycm9yLm1lc3NhZ2UgKyAoc3RhY2sgIT0gbnVsbCA/IHN0YWNrIDogJycpXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIFJlc2V0cyB3YXJuaW5nIGNhY2hlIHdoZW4gdGVzdGluZy5cbiAqXG4gKiBAcHJpdmF0ZVxuICovXG5jaGVja1Byb3BUeXBlcy5yZXNldFdhcm5pbmdDYWNoZSA9IGZ1bmN0aW9uKCkge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGxvZ2dlZFR5cGVGYWlsdXJlcyA9IHt9O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2hlY2tQcm9wVHlwZXM7XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIFJlYWN0SXMgPSByZXF1aXJlKCdyZWFjdC1pcycpO1xudmFyIGFzc2lnbiA9IHJlcXVpcmUoJ29iamVjdC1hc3NpZ24nKTtcblxudmFyIFJlYWN0UHJvcFR5cGVzU2VjcmV0ID0gcmVxdWlyZSgnLi9saWIvUmVhY3RQcm9wVHlwZXNTZWNyZXQnKTtcbnZhciBjaGVja1Byb3BUeXBlcyA9IHJlcXVpcmUoJy4vY2hlY2tQcm9wVHlwZXMnKTtcblxudmFyIGhhcyA9IEZ1bmN0aW9uLmNhbGwuYmluZChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5KTtcbnZhciBwcmludFdhcm5pbmcgPSBmdW5jdGlvbigpIHt9O1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICBwcmludFdhcm5pbmcgPSBmdW5jdGlvbih0ZXh0KSB7XG4gICAgdmFyIG1lc3NhZ2UgPSAnV2FybmluZzogJyArIHRleHQ7XG4gICAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uc29sZS5lcnJvcihtZXNzYWdlKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIC8vIC0tLSBXZWxjb21lIHRvIGRlYnVnZ2luZyBSZWFjdCAtLS1cbiAgICAgIC8vIFRoaXMgZXJyb3Igd2FzIHRocm93biBhcyBhIGNvbnZlbmllbmNlIHNvIHRoYXQgeW91IGNhbiB1c2UgdGhpcyBzdGFja1xuICAgICAgLy8gdG8gZmluZCB0aGUgY2FsbHNpdGUgdGhhdCBjYXVzZWQgdGhpcyB3YXJuaW5nIHRvIGZpcmUuXG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgfSBjYXRjaCAoeCkge31cbiAgfTtcbn1cblxuZnVuY3Rpb24gZW1wdHlGdW5jdGlvblRoYXRSZXR1cm5zTnVsbCgpIHtcbiAgcmV0dXJuIG51bGw7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXNWYWxpZEVsZW1lbnQsIHRocm93T25EaXJlY3RBY2Nlc3MpIHtcbiAgLyogZ2xvYmFsIFN5bWJvbCAqL1xuICB2YXIgSVRFUkFUT1JfU1lNQk9MID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wuaXRlcmF0b3I7XG4gIHZhciBGQVVYX0lURVJBVE9SX1NZTUJPTCA9ICdAQGl0ZXJhdG9yJzsgLy8gQmVmb3JlIFN5bWJvbCBzcGVjLlxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBpdGVyYXRvciBtZXRob2QgZnVuY3Rpb24gY29udGFpbmVkIG9uIHRoZSBpdGVyYWJsZSBvYmplY3QuXG4gICAqXG4gICAqIEJlIHN1cmUgdG8gaW52b2tlIHRoZSBmdW5jdGlvbiB3aXRoIHRoZSBpdGVyYWJsZSBhcyBjb250ZXh0OlxuICAgKlxuICAgKiAgICAgdmFyIGl0ZXJhdG9yRm4gPSBnZXRJdGVyYXRvckZuKG15SXRlcmFibGUpO1xuICAgKiAgICAgaWYgKGl0ZXJhdG9yRm4pIHtcbiAgICogICAgICAgdmFyIGl0ZXJhdG9yID0gaXRlcmF0b3JGbi5jYWxsKG15SXRlcmFibGUpO1xuICAgKiAgICAgICAuLi5cbiAgICogICAgIH1cbiAgICpcbiAgICogQHBhcmFtIHs/b2JqZWN0fSBtYXliZUl0ZXJhYmxlXG4gICAqIEByZXR1cm4gez9mdW5jdGlvbn1cbiAgICovXG4gIGZ1bmN0aW9uIGdldEl0ZXJhdG9yRm4obWF5YmVJdGVyYWJsZSkge1xuICAgIHZhciBpdGVyYXRvckZuID0gbWF5YmVJdGVyYWJsZSAmJiAoSVRFUkFUT1JfU1lNQk9MICYmIG1heWJlSXRlcmFibGVbSVRFUkFUT1JfU1lNQk9MXSB8fCBtYXliZUl0ZXJhYmxlW0ZBVVhfSVRFUkFUT1JfU1lNQk9MXSk7XG4gICAgaWYgKHR5cGVvZiBpdGVyYXRvckZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gaXRlcmF0b3JGbjtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ29sbGVjdGlvbiBvZiBtZXRob2RzIHRoYXQgYWxsb3cgZGVjbGFyYXRpb24gYW5kIHZhbGlkYXRpb24gb2YgcHJvcHMgdGhhdCBhcmVcbiAgICogc3VwcGxpZWQgdG8gUmVhY3QgY29tcG9uZW50cy4gRXhhbXBsZSB1c2FnZTpcbiAgICpcbiAgICogICB2YXIgUHJvcHMgPSByZXF1aXJlKCdSZWFjdFByb3BUeXBlcycpO1xuICAgKiAgIHZhciBNeUFydGljbGUgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gICAqICAgICBwcm9wVHlwZXM6IHtcbiAgICogICAgICAgLy8gQW4gb3B0aW9uYWwgc3RyaW5nIHByb3AgbmFtZWQgXCJkZXNjcmlwdGlvblwiLlxuICAgKiAgICAgICBkZXNjcmlwdGlvbjogUHJvcHMuc3RyaW5nLFxuICAgKlxuICAgKiAgICAgICAvLyBBIHJlcXVpcmVkIGVudW0gcHJvcCBuYW1lZCBcImNhdGVnb3J5XCIuXG4gICAqICAgICAgIGNhdGVnb3J5OiBQcm9wcy5vbmVPZihbJ05ld3MnLCdQaG90b3MnXSkuaXNSZXF1aXJlZCxcbiAgICpcbiAgICogICAgICAgLy8gQSBwcm9wIG5hbWVkIFwiZGlhbG9nXCIgdGhhdCByZXF1aXJlcyBhbiBpbnN0YW5jZSBvZiBEaWFsb2cuXG4gICAqICAgICAgIGRpYWxvZzogUHJvcHMuaW5zdGFuY2VPZihEaWFsb2cpLmlzUmVxdWlyZWRcbiAgICogICAgIH0sXG4gICAqICAgICByZW5kZXI6IGZ1bmN0aW9uKCkgeyAuLi4gfVxuICAgKiAgIH0pO1xuICAgKlxuICAgKiBBIG1vcmUgZm9ybWFsIHNwZWNpZmljYXRpb24gb2YgaG93IHRoZXNlIG1ldGhvZHMgYXJlIHVzZWQ6XG4gICAqXG4gICAqICAgdHlwZSA6PSBhcnJheXxib29sfGZ1bmN8b2JqZWN0fG51bWJlcnxzdHJpbmd8b25lT2YoWy4uLl0pfGluc3RhbmNlT2YoLi4uKVxuICAgKiAgIGRlY2wgOj0gUmVhY3RQcm9wVHlwZXMue3R5cGV9KC5pc1JlcXVpcmVkKT9cbiAgICpcbiAgICogRWFjaCBhbmQgZXZlcnkgZGVjbGFyYXRpb24gcHJvZHVjZXMgYSBmdW5jdGlvbiB3aXRoIHRoZSBzYW1lIHNpZ25hdHVyZS4gVGhpc1xuICAgKiBhbGxvd3MgdGhlIGNyZWF0aW9uIG9mIGN1c3RvbSB2YWxpZGF0aW9uIGZ1bmN0aW9ucy4gRm9yIGV4YW1wbGU6XG4gICAqXG4gICAqICB2YXIgTXlMaW5rID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICAgKiAgICBwcm9wVHlwZXM6IHtcbiAgICogICAgICAvLyBBbiBvcHRpb25hbCBzdHJpbmcgb3IgVVJJIHByb3AgbmFtZWQgXCJocmVmXCIuXG4gICAqICAgICAgaHJlZjogZnVuY3Rpb24ocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lKSB7XG4gICAqICAgICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgKiAgICAgICAgaWYgKHByb3BWYWx1ZSAhPSBudWxsICYmIHR5cGVvZiBwcm9wVmFsdWUgIT09ICdzdHJpbmcnICYmXG4gICAqICAgICAgICAgICAgIShwcm9wVmFsdWUgaW5zdGFuY2VvZiBVUkkpKSB7XG4gICAqICAgICAgICAgIHJldHVybiBuZXcgRXJyb3IoXG4gICAqICAgICAgICAgICAgJ0V4cGVjdGVkIGEgc3RyaW5nIG9yIGFuIFVSSSBmb3IgJyArIHByb3BOYW1lICsgJyBpbiAnICtcbiAgICogICAgICAgICAgICBjb21wb25lbnROYW1lXG4gICAqICAgICAgICAgICk7XG4gICAqICAgICAgICB9XG4gICAqICAgICAgfVxuICAgKiAgICB9LFxuICAgKiAgICByZW5kZXI6IGZ1bmN0aW9uKCkgey4uLn1cbiAgICogIH0pO1xuICAgKlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG5cbiAgdmFyIEFOT05ZTU9VUyA9ICc8PGFub255bW91cz4+JztcblxuICAvLyBJbXBvcnRhbnQhXG4gIC8vIEtlZXAgdGhpcyBsaXN0IGluIHN5bmMgd2l0aCBwcm9kdWN0aW9uIHZlcnNpb24gaW4gYC4vZmFjdG9yeVdpdGhUaHJvd2luZ1NoaW1zLmpzYC5cbiAgdmFyIFJlYWN0UHJvcFR5cGVzID0ge1xuICAgIGFycmF5OiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignYXJyYXknKSxcbiAgICBib29sOiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignYm9vbGVhbicpLFxuICAgIGZ1bmM6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdmdW5jdGlvbicpLFxuICAgIG51bWJlcjogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ251bWJlcicpLFxuICAgIG9iamVjdDogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ29iamVjdCcpLFxuICAgIHN0cmluZzogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ3N0cmluZycpLFxuICAgIHN5bWJvbDogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ3N5bWJvbCcpLFxuXG4gICAgYW55OiBjcmVhdGVBbnlUeXBlQ2hlY2tlcigpLFxuICAgIGFycmF5T2Y6IGNyZWF0ZUFycmF5T2ZUeXBlQ2hlY2tlcixcbiAgICBlbGVtZW50OiBjcmVhdGVFbGVtZW50VHlwZUNoZWNrZXIoKSxcbiAgICBlbGVtZW50VHlwZTogY3JlYXRlRWxlbWVudFR5cGVUeXBlQ2hlY2tlcigpLFxuICAgIGluc3RhbmNlT2Y6IGNyZWF0ZUluc3RhbmNlVHlwZUNoZWNrZXIsXG4gICAgbm9kZTogY3JlYXRlTm9kZUNoZWNrZXIoKSxcbiAgICBvYmplY3RPZjogY3JlYXRlT2JqZWN0T2ZUeXBlQ2hlY2tlcixcbiAgICBvbmVPZjogY3JlYXRlRW51bVR5cGVDaGVja2VyLFxuICAgIG9uZU9mVHlwZTogY3JlYXRlVW5pb25UeXBlQ2hlY2tlcixcbiAgICBzaGFwZTogY3JlYXRlU2hhcGVUeXBlQ2hlY2tlcixcbiAgICBleGFjdDogY3JlYXRlU3RyaWN0U2hhcGVUeXBlQ2hlY2tlcixcbiAgfTtcblxuICAvKipcbiAgICogaW5saW5lZCBPYmplY3QuaXMgcG9seWZpbGwgdG8gYXZvaWQgcmVxdWlyaW5nIGNvbnN1bWVycyBzaGlwIHRoZWlyIG93blxuICAgKiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9PYmplY3QvaXNcbiAgICovXG4gIC8qZXNsaW50LWRpc2FibGUgbm8tc2VsZi1jb21wYXJlKi9cbiAgZnVuY3Rpb24gaXMoeCwgeSkge1xuICAgIC8vIFNhbWVWYWx1ZSBhbGdvcml0aG1cbiAgICBpZiAoeCA9PT0geSkge1xuICAgICAgLy8gU3RlcHMgMS01LCA3LTEwXG4gICAgICAvLyBTdGVwcyA2LmItNi5lOiArMCAhPSAtMFxuICAgICAgcmV0dXJuIHggIT09IDAgfHwgMSAvIHggPT09IDEgLyB5O1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBTdGVwIDYuYTogTmFOID09IE5hTlxuICAgICAgcmV0dXJuIHggIT09IHggJiYgeSAhPT0geTtcbiAgICB9XG4gIH1cbiAgLyplc2xpbnQtZW5hYmxlIG5vLXNlbGYtY29tcGFyZSovXG5cbiAgLyoqXG4gICAqIFdlIHVzZSBhbiBFcnJvci1saWtlIG9iamVjdCBmb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eSBhcyBwZW9wbGUgbWF5IGNhbGxcbiAgICogUHJvcFR5cGVzIGRpcmVjdGx5IGFuZCBpbnNwZWN0IHRoZWlyIG91dHB1dC4gSG93ZXZlciwgd2UgZG9uJ3QgdXNlIHJlYWxcbiAgICogRXJyb3JzIGFueW1vcmUuIFdlIGRvbid0IGluc3BlY3QgdGhlaXIgc3RhY2sgYW55d2F5LCBhbmQgY3JlYXRpbmcgdGhlbVxuICAgKiBpcyBwcm9oaWJpdGl2ZWx5IGV4cGVuc2l2ZSBpZiB0aGV5IGFyZSBjcmVhdGVkIHRvbyBvZnRlbiwgc3VjaCBhcyB3aGF0XG4gICAqIGhhcHBlbnMgaW4gb25lT2ZUeXBlKCkgZm9yIGFueSB0eXBlIGJlZm9yZSB0aGUgb25lIHRoYXQgbWF0Y2hlZC5cbiAgICovXG4gIGZ1bmN0aW9uIFByb3BUeXBlRXJyb3IobWVzc2FnZSkge1xuICAgIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XG4gICAgdGhpcy5zdGFjayA9ICcnO1xuICB9XG4gIC8vIE1ha2UgYGluc3RhbmNlb2YgRXJyb3JgIHN0aWxsIHdvcmsgZm9yIHJldHVybmVkIGVycm9ycy5cbiAgUHJvcFR5cGVFcnJvci5wcm90b3R5cGUgPSBFcnJvci5wcm90b3R5cGU7XG5cbiAgZnVuY3Rpb24gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgdmFyIG1hbnVhbFByb3BUeXBlQ2FsbENhY2hlID0ge307XG4gICAgICB2YXIgbWFudWFsUHJvcFR5cGVXYXJuaW5nQ291bnQgPSAwO1xuICAgIH1cbiAgICBmdW5jdGlvbiBjaGVja1R5cGUoaXNSZXF1aXJlZCwgcHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lLCBzZWNyZXQpIHtcbiAgICAgIGNvbXBvbmVudE5hbWUgPSBjb21wb25lbnROYW1lIHx8IEFOT05ZTU9VUztcbiAgICAgIHByb3BGdWxsTmFtZSA9IHByb3BGdWxsTmFtZSB8fCBwcm9wTmFtZTtcblxuICAgICAgaWYgKHNlY3JldCAhPT0gUmVhY3RQcm9wVHlwZXNTZWNyZXQpIHtcbiAgICAgICAgaWYgKHRocm93T25EaXJlY3RBY2Nlc3MpIHtcbiAgICAgICAgICAvLyBOZXcgYmVoYXZpb3Igb25seSBmb3IgdXNlcnMgb2YgYHByb3AtdHlwZXNgIHBhY2thZ2VcbiAgICAgICAgICB2YXIgZXJyID0gbmV3IEVycm9yKFxuICAgICAgICAgICAgJ0NhbGxpbmcgUHJvcFR5cGVzIHZhbGlkYXRvcnMgZGlyZWN0bHkgaXMgbm90IHN1cHBvcnRlZCBieSB0aGUgYHByb3AtdHlwZXNgIHBhY2thZ2UuICcgK1xuICAgICAgICAgICAgJ1VzZSBgUHJvcFR5cGVzLmNoZWNrUHJvcFR5cGVzKClgIHRvIGNhbGwgdGhlbS4gJyArXG4gICAgICAgICAgICAnUmVhZCBtb3JlIGF0IGh0dHA6Ly9mYi5tZS91c2UtY2hlY2stcHJvcC10eXBlcydcbiAgICAgICAgICApO1xuICAgICAgICAgIGVyci5uYW1lID0gJ0ludmFyaWFudCBWaW9sYXRpb24nO1xuICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgfSBlbHNlIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIC8vIE9sZCBiZWhhdmlvciBmb3IgcGVvcGxlIHVzaW5nIFJlYWN0LlByb3BUeXBlc1xuICAgICAgICAgIHZhciBjYWNoZUtleSA9IGNvbXBvbmVudE5hbWUgKyAnOicgKyBwcm9wTmFtZTtcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAhbWFudWFsUHJvcFR5cGVDYWxsQ2FjaGVbY2FjaGVLZXldICYmXG4gICAgICAgICAgICAvLyBBdm9pZCBzcGFtbWluZyB0aGUgY29uc29sZSBiZWNhdXNlIHRoZXkgYXJlIG9mdGVuIG5vdCBhY3Rpb25hYmxlIGV4Y2VwdCBmb3IgbGliIGF1dGhvcnNcbiAgICAgICAgICAgIG1hbnVhbFByb3BUeXBlV2FybmluZ0NvdW50IDwgM1xuICAgICAgICAgICkge1xuICAgICAgICAgICAgcHJpbnRXYXJuaW5nKFxuICAgICAgICAgICAgICAnWW91IGFyZSBtYW51YWxseSBjYWxsaW5nIGEgUmVhY3QuUHJvcFR5cGVzIHZhbGlkYXRpb24gJyArXG4gICAgICAgICAgICAgICdmdW5jdGlvbiBmb3IgdGhlIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2AgcHJvcCBvbiBgJyArIGNvbXBvbmVudE5hbWUgICsgJ2AuIFRoaXMgaXMgZGVwcmVjYXRlZCAnICtcbiAgICAgICAgICAgICAgJ2FuZCB3aWxsIHRocm93IGluIHRoZSBzdGFuZGFsb25lIGBwcm9wLXR5cGVzYCBwYWNrYWdlLiAnICtcbiAgICAgICAgICAgICAgJ1lvdSBtYXkgYmUgc2VlaW5nIHRoaXMgd2FybmluZyBkdWUgdG8gYSB0aGlyZC1wYXJ0eSBQcm9wVHlwZXMgJyArXG4gICAgICAgICAgICAgICdsaWJyYXJ5LiBTZWUgaHR0cHM6Ly9mYi5tZS9yZWFjdC13YXJuaW5nLWRvbnQtY2FsbC1wcm9wdHlwZXMgJyArICdmb3IgZGV0YWlscy4nXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgbWFudWFsUHJvcFR5cGVDYWxsQ2FjaGVbY2FjaGVLZXldID0gdHJ1ZTtcbiAgICAgICAgICAgIG1hbnVhbFByb3BUeXBlV2FybmluZ0NvdW50Kys7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAocHJvcHNbcHJvcE5hbWVdID09IG51bGwpIHtcbiAgICAgICAgaWYgKGlzUmVxdWlyZWQpIHtcbiAgICAgICAgICBpZiAocHJvcHNbcHJvcE5hbWVdID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ1RoZSAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2AgaXMgbWFya2VkIGFzIHJlcXVpcmVkICcgKyAoJ2luIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBidXQgaXRzIHZhbHVlIGlzIGBudWxsYC4nKSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignVGhlICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBpcyBtYXJrZWQgYXMgcmVxdWlyZWQgaW4gJyArICgnYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGJ1dCBpdHMgdmFsdWUgaXMgYHVuZGVmaW5lZGAuJykpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGNoYWluZWRDaGVja1R5cGUgPSBjaGVja1R5cGUuYmluZChudWxsLCBmYWxzZSk7XG4gICAgY2hhaW5lZENoZWNrVHlwZS5pc1JlcXVpcmVkID0gY2hlY2tUeXBlLmJpbmQobnVsbCwgdHJ1ZSk7XG5cbiAgICByZXR1cm4gY2hhaW5lZENoZWNrVHlwZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKGV4cGVjdGVkVHlwZSkge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSwgc2VjcmV0KSB7XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgIGlmIChwcm9wVHlwZSAhPT0gZXhwZWN0ZWRUeXBlKSB7XG4gICAgICAgIC8vIGBwcm9wVmFsdWVgIGJlaW5nIGluc3RhbmNlIG9mLCBzYXksIGRhdGUvcmVnZXhwLCBwYXNzIHRoZSAnb2JqZWN0J1xuICAgICAgICAvLyBjaGVjaywgYnV0IHdlIGNhbiBvZmZlciBhIG1vcmUgcHJlY2lzZSBlcnJvciBtZXNzYWdlIGhlcmUgcmF0aGVyIHRoYW5cbiAgICAgICAgLy8gJ29mIHR5cGUgYG9iamVjdGAnLlxuICAgICAgICB2YXIgcHJlY2lzZVR5cGUgPSBnZXRQcmVjaXNlVHlwZShwcm9wVmFsdWUpO1xuXG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIHByZWNpc2VUeXBlICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkICcpICsgKCdgJyArIGV4cGVjdGVkVHlwZSArICdgLicpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlQW55VHlwZUNoZWNrZXIoKSB7XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKGVtcHR5RnVuY3Rpb25UaGF0UmV0dXJuc051bGwpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlQXJyYXlPZlR5cGVDaGVja2VyKHR5cGVDaGVja2VyKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICBpZiAodHlwZW9mIHR5cGVDaGVja2VyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignUHJvcGVydHkgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiBjb21wb25lbnQgYCcgKyBjb21wb25lbnROYW1lICsgJ2AgaGFzIGludmFsaWQgUHJvcFR5cGUgbm90YXRpb24gaW5zaWRlIGFycmF5T2YuJyk7XG4gICAgICB9XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHByb3BWYWx1ZSkpIHtcbiAgICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgcHJvcFR5cGUgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYW4gYXJyYXkuJykpO1xuICAgICAgfVxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wVmFsdWUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGVycm9yID0gdHlwZUNoZWNrZXIocHJvcFZhbHVlLCBpLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lICsgJ1snICsgaSArICddJywgUmVhY3RQcm9wVHlwZXNTZWNyZXQpO1xuICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICAgIHJldHVybiBlcnJvcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVFbGVtZW50VHlwZUNoZWNrZXIoKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgaWYgKCFpc1ZhbGlkRWxlbWVudChwcm9wVmFsdWUpKSB7XG4gICAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIHByb3BUeXBlICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGEgc2luZ2xlIFJlYWN0RWxlbWVudC4nKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnRUeXBlVHlwZUNoZWNrZXIoKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgaWYgKCFSZWFjdElzLmlzVmFsaWRFbGVtZW50VHlwZShwcm9wVmFsdWUpKSB7XG4gICAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIHByb3BUeXBlICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGEgc2luZ2xlIFJlYWN0RWxlbWVudCB0eXBlLicpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlSW5zdGFuY2VUeXBlQ2hlY2tlcihleHBlY3RlZENsYXNzKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICBpZiAoIShwcm9wc1twcm9wTmFtZV0gaW5zdGFuY2VvZiBleHBlY3RlZENsYXNzKSkge1xuICAgICAgICB2YXIgZXhwZWN0ZWRDbGFzc05hbWUgPSBleHBlY3RlZENsYXNzLm5hbWUgfHwgQU5PTllNT1VTO1xuICAgICAgICB2YXIgYWN0dWFsQ2xhc3NOYW1lID0gZ2V0Q2xhc3NOYW1lKHByb3BzW3Byb3BOYW1lXSk7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIGFjdHVhbENsYXNzTmFtZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCAnKSArICgnaW5zdGFuY2Ugb2YgYCcgKyBleHBlY3RlZENsYXNzTmFtZSArICdgLicpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlRW51bVR5cGVDaGVja2VyKGV4cGVjdGVkVmFsdWVzKSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGV4cGVjdGVkVmFsdWVzKSkge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgcHJpbnRXYXJuaW5nKFxuICAgICAgICAgICAgJ0ludmFsaWQgYXJndW1lbnRzIHN1cHBsaWVkIHRvIG9uZU9mLCBleHBlY3RlZCBhbiBhcnJheSwgZ290ICcgKyBhcmd1bWVudHMubGVuZ3RoICsgJyBhcmd1bWVudHMuICcgK1xuICAgICAgICAgICAgJ0EgY29tbW9uIG1pc3Rha2UgaXMgdG8gd3JpdGUgb25lT2YoeCwgeSwgeikgaW5zdGVhZCBvZiBvbmVPZihbeCwgeSwgel0pLidcbiAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHByaW50V2FybmluZygnSW52YWxpZCBhcmd1bWVudCBzdXBwbGllZCB0byBvbmVPZiwgZXhwZWN0ZWQgYW4gYXJyYXkuJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBlbXB0eUZ1bmN0aW9uVGhhdFJldHVybnNOdWxsO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZXhwZWN0ZWRWYWx1ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGlzKHByb3BWYWx1ZSwgZXhwZWN0ZWRWYWx1ZXNbaV0pKSB7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdmFyIHZhbHVlc1N0cmluZyA9IEpTT04uc3RyaW5naWZ5KGV4cGVjdGVkVmFsdWVzLCBmdW5jdGlvbiByZXBsYWNlcihrZXksIHZhbHVlKSB7XG4gICAgICAgIGlmIChnZXRQcm9wVHlwZSh2YWx1ZSkgPT09ICdzeW1ib2wnKSB7XG4gICAgICAgICAgcmV0dXJuIFN0cmluZyh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHZhbHVlIGAnICsgU3RyaW5nKHByb3BWYWx1ZSkgKyAnYCAnICsgKCdzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgb25lIG9mICcgKyB2YWx1ZXNTdHJpbmcgKyAnLicpKTtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZU9iamVjdE9mVHlwZUNoZWNrZXIodHlwZUNoZWNrZXIpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIGlmICh0eXBlb2YgdHlwZUNoZWNrZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdQcm9wZXJ0eSBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIGNvbXBvbmVudCBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCBoYXMgaW52YWxpZCBQcm9wVHlwZSBub3RhdGlvbiBpbnNpZGUgb2JqZWN0T2YuJyk7XG4gICAgICB9XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgIGlmIChwcm9wVHlwZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgcHJvcFR5cGUgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYW4gb2JqZWN0LicpKTtcbiAgICAgIH1cbiAgICAgIGZvciAodmFyIGtleSBpbiBwcm9wVmFsdWUpIHtcbiAgICAgICAgaWYgKGhhcyhwcm9wVmFsdWUsIGtleSkpIHtcbiAgICAgICAgICB2YXIgZXJyb3IgPSB0eXBlQ2hlY2tlcihwcm9wVmFsdWUsIGtleSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSArICcuJyArIGtleSwgUmVhY3RQcm9wVHlwZXNTZWNyZXQpO1xuICAgICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVVuaW9uVHlwZUNoZWNrZXIoYXJyYXlPZlR5cGVDaGVja2Vycykge1xuICAgIGlmICghQXJyYXkuaXNBcnJheShhcnJheU9mVHlwZUNoZWNrZXJzKSkge1xuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IHByaW50V2FybmluZygnSW52YWxpZCBhcmd1bWVudCBzdXBwbGllZCB0byBvbmVPZlR5cGUsIGV4cGVjdGVkIGFuIGluc3RhbmNlIG9mIGFycmF5LicpIDogdm9pZCAwO1xuICAgICAgcmV0dXJuIGVtcHR5RnVuY3Rpb25UaGF0UmV0dXJuc051bGw7XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnJheU9mVHlwZUNoZWNrZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgY2hlY2tlciA9IGFycmF5T2ZUeXBlQ2hlY2tlcnNbaV07XG4gICAgICBpZiAodHlwZW9mIGNoZWNrZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcHJpbnRXYXJuaW5nKFxuICAgICAgICAgICdJbnZhbGlkIGFyZ3VtZW50IHN1cHBsaWVkIHRvIG9uZU9mVHlwZS4gRXhwZWN0ZWQgYW4gYXJyYXkgb2YgY2hlY2sgZnVuY3Rpb25zLCBidXQgJyArXG4gICAgICAgICAgJ3JlY2VpdmVkICcgKyBnZXRQb3N0Zml4Rm9yVHlwZVdhcm5pbmcoY2hlY2tlcikgKyAnIGF0IGluZGV4ICcgKyBpICsgJy4nXG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiBlbXB0eUZ1bmN0aW9uVGhhdFJldHVybnNOdWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnJheU9mVHlwZUNoZWNrZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBjaGVja2VyID0gYXJyYXlPZlR5cGVDaGVja2Vyc1tpXTtcbiAgICAgICAgaWYgKGNoZWNrZXIocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lLCBSZWFjdFByb3BUeXBlc1NlY3JldCkgPT0gbnVsbCkge1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agc3VwcGxpZWQgdG8gJyArICgnYCcgKyBjb21wb25lbnROYW1lICsgJ2AuJykpO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlTm9kZUNoZWNrZXIoKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICBpZiAoIWlzTm9kZShwcm9wc1twcm9wTmFtZV0pKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agc3VwcGxpZWQgdG8gJyArICgnYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGEgUmVhY3ROb2RlLicpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlU2hhcGVUeXBlQ2hlY2tlcihzaGFwZVR5cGVzKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgIGlmIChwcm9wVHlwZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlIGAnICsgcHJvcFR5cGUgKyAnYCAnICsgKCdzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYG9iamVjdGAuJykpO1xuICAgICAgfVxuICAgICAgZm9yICh2YXIga2V5IGluIHNoYXBlVHlwZXMpIHtcbiAgICAgICAgdmFyIGNoZWNrZXIgPSBzaGFwZVR5cGVzW2tleV07XG4gICAgICAgIGlmICghY2hlY2tlcikge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHZhciBlcnJvciA9IGNoZWNrZXIocHJvcFZhbHVlLCBrZXksIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUgKyAnLicgKyBrZXksIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVN0cmljdFNoYXBlVHlwZUNoZWNrZXIoc2hhcGVUeXBlcykge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICBpZiAocHJvcFR5cGUgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSBgJyArIHByb3BUeXBlICsgJ2AgJyArICgnc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGBvYmplY3RgLicpKTtcbiAgICAgIH1cbiAgICAgIC8vIFdlIG5lZWQgdG8gY2hlY2sgYWxsIGtleXMgaW4gY2FzZSBzb21lIGFyZSByZXF1aXJlZCBidXQgbWlzc2luZyBmcm9tXG4gICAgICAvLyBwcm9wcy5cbiAgICAgIHZhciBhbGxLZXlzID0gYXNzaWduKHt9LCBwcm9wc1twcm9wTmFtZV0sIHNoYXBlVHlwZXMpO1xuICAgICAgZm9yICh2YXIga2V5IGluIGFsbEtleXMpIHtcbiAgICAgICAgdmFyIGNoZWNrZXIgPSBzaGFwZVR5cGVzW2tleV07XG4gICAgICAgIGlmICghY2hlY2tlcikge1xuICAgICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcihcbiAgICAgICAgICAgICdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBrZXkgYCcgKyBrZXkgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYC4nICtcbiAgICAgICAgICAgICdcXG5CYWQgb2JqZWN0OiAnICsgSlNPTi5zdHJpbmdpZnkocHJvcHNbcHJvcE5hbWVdLCBudWxsLCAnICAnKSArXG4gICAgICAgICAgICAnXFxuVmFsaWQga2V5czogJyArICBKU09OLnN0cmluZ2lmeShPYmplY3Qua2V5cyhzaGFwZVR5cGVzKSwgbnVsbCwgJyAgJylcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIHZhciBlcnJvciA9IGNoZWNrZXIocHJvcFZhbHVlLCBrZXksIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUgKyAnLicgKyBrZXksIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gaXNOb2RlKHByb3BWYWx1ZSkge1xuICAgIHN3aXRjaCAodHlwZW9mIHByb3BWYWx1ZSkge1xuICAgICAgY2FzZSAnbnVtYmVyJzpcbiAgICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICBjYXNlICd1bmRlZmluZWQnOlxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIGNhc2UgJ2Jvb2xlYW4nOlxuICAgICAgICByZXR1cm4gIXByb3BWYWx1ZTtcbiAgICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHByb3BWYWx1ZSkpIHtcbiAgICAgICAgICByZXR1cm4gcHJvcFZhbHVlLmV2ZXJ5KGlzTm9kZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByb3BWYWx1ZSA9PT0gbnVsbCB8fCBpc1ZhbGlkRWxlbWVudChwcm9wVmFsdWUpKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgaXRlcmF0b3JGbiA9IGdldEl0ZXJhdG9yRm4ocHJvcFZhbHVlKTtcbiAgICAgICAgaWYgKGl0ZXJhdG9yRm4pIHtcbiAgICAgICAgICB2YXIgaXRlcmF0b3IgPSBpdGVyYXRvckZuLmNhbGwocHJvcFZhbHVlKTtcbiAgICAgICAgICB2YXIgc3RlcDtcbiAgICAgICAgICBpZiAoaXRlcmF0b3JGbiAhPT0gcHJvcFZhbHVlLmVudHJpZXMpIHtcbiAgICAgICAgICAgIHdoaWxlICghKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmUpIHtcbiAgICAgICAgICAgICAgaWYgKCFpc05vZGUoc3RlcC52YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gSXRlcmF0b3Igd2lsbCBwcm92aWRlIGVudHJ5IFtrLHZdIHR1cGxlcyByYXRoZXIgdGhhbiB2YWx1ZXMuXG4gICAgICAgICAgICB3aGlsZSAoIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lKSB7XG4gICAgICAgICAgICAgIHZhciBlbnRyeSA9IHN0ZXAudmFsdWU7XG4gICAgICAgICAgICAgIGlmIChlbnRyeSkge1xuICAgICAgICAgICAgICAgIGlmICghaXNOb2RlKGVudHJ5WzFdKSkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBpc1N5bWJvbChwcm9wVHlwZSwgcHJvcFZhbHVlKSB7XG4gICAgLy8gTmF0aXZlIFN5bWJvbC5cbiAgICBpZiAocHJvcFR5cGUgPT09ICdzeW1ib2wnKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyAxOS40LjMuNSBTeW1ib2wucHJvdG90eXBlW0BAdG9TdHJpbmdUYWddID09PSAnU3ltYm9sJ1xuICAgIGlmIChwcm9wVmFsdWVbJ0BAdG9TdHJpbmdUYWcnXSA9PT0gJ1N5bWJvbCcpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIC8vIEZhbGxiYWNrIGZvciBub24tc3BlYyBjb21wbGlhbnQgU3ltYm9scyB3aGljaCBhcmUgcG9seWZpbGxlZC5cbiAgICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBwcm9wVmFsdWUgaW5zdGFuY2VvZiBTeW1ib2wpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8vIEVxdWl2YWxlbnQgb2YgYHR5cGVvZmAgYnV0IHdpdGggc3BlY2lhbCBoYW5kbGluZyBmb3IgYXJyYXkgYW5kIHJlZ2V4cC5cbiAgZnVuY3Rpb24gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKSB7XG4gICAgdmFyIHByb3BUeXBlID0gdHlwZW9mIHByb3BWYWx1ZTtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShwcm9wVmFsdWUpKSB7XG4gICAgICByZXR1cm4gJ2FycmF5JztcbiAgICB9XG4gICAgaWYgKHByb3BWYWx1ZSBpbnN0YW5jZW9mIFJlZ0V4cCkge1xuICAgICAgLy8gT2xkIHdlYmtpdHMgKGF0IGxlYXN0IHVudGlsIEFuZHJvaWQgNC4wKSByZXR1cm4gJ2Z1bmN0aW9uJyByYXRoZXIgdGhhblxuICAgICAgLy8gJ29iamVjdCcgZm9yIHR5cGVvZiBhIFJlZ0V4cC4gV2UnbGwgbm9ybWFsaXplIHRoaXMgaGVyZSBzbyB0aGF0IC9ibGEvXG4gICAgICAvLyBwYXNzZXMgUHJvcFR5cGVzLm9iamVjdC5cbiAgICAgIHJldHVybiAnb2JqZWN0JztcbiAgICB9XG4gICAgaWYgKGlzU3ltYm9sKHByb3BUeXBlLCBwcm9wVmFsdWUpKSB7XG4gICAgICByZXR1cm4gJ3N5bWJvbCc7XG4gICAgfVxuICAgIHJldHVybiBwcm9wVHlwZTtcbiAgfVxuXG4gIC8vIFRoaXMgaGFuZGxlcyBtb3JlIHR5cGVzIHRoYW4gYGdldFByb3BUeXBlYC4gT25seSB1c2VkIGZvciBlcnJvciBtZXNzYWdlcy5cbiAgLy8gU2VlIGBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcmAuXG4gIGZ1bmN0aW9uIGdldFByZWNpc2VUeXBlKHByb3BWYWx1ZSkge1xuICAgIGlmICh0eXBlb2YgcHJvcFZhbHVlID09PSAndW5kZWZpbmVkJyB8fCBwcm9wVmFsdWUgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiAnJyArIHByb3BWYWx1ZTtcbiAgICB9XG4gICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICBpZiAocHJvcFR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgICBpZiAocHJvcFZhbHVlIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgICByZXR1cm4gJ2RhdGUnO1xuICAgICAgfSBlbHNlIGlmIChwcm9wVmFsdWUgaW5zdGFuY2VvZiBSZWdFeHApIHtcbiAgICAgICAgcmV0dXJuICdyZWdleHAnO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcHJvcFR5cGU7XG4gIH1cblxuICAvLyBSZXR1cm5zIGEgc3RyaW5nIHRoYXQgaXMgcG9zdGZpeGVkIHRvIGEgd2FybmluZyBhYm91dCBhbiBpbnZhbGlkIHR5cGUuXG4gIC8vIEZvciBleGFtcGxlLCBcInVuZGVmaW5lZFwiIG9yIFwib2YgdHlwZSBhcnJheVwiXG4gIGZ1bmN0aW9uIGdldFBvc3RmaXhGb3JUeXBlV2FybmluZyh2YWx1ZSkge1xuICAgIHZhciB0eXBlID0gZ2V0UHJlY2lzZVR5cGUodmFsdWUpO1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSAnYXJyYXknOlxuICAgICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgICAgcmV0dXJuICdhbiAnICsgdHlwZTtcbiAgICAgIGNhc2UgJ2Jvb2xlYW4nOlxuICAgICAgY2FzZSAnZGF0ZSc6XG4gICAgICBjYXNlICdyZWdleHAnOlxuICAgICAgICByZXR1cm4gJ2EgJyArIHR5cGU7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gdHlwZTtcbiAgICB9XG4gIH1cblxuICAvLyBSZXR1cm5zIGNsYXNzIG5hbWUgb2YgdGhlIG9iamVjdCwgaWYgYW55LlxuICBmdW5jdGlvbiBnZXRDbGFzc05hbWUocHJvcFZhbHVlKSB7XG4gICAgaWYgKCFwcm9wVmFsdWUuY29uc3RydWN0b3IgfHwgIXByb3BWYWx1ZS5jb25zdHJ1Y3Rvci5uYW1lKSB7XG4gICAgICByZXR1cm4gQU5PTllNT1VTO1xuICAgIH1cbiAgICByZXR1cm4gcHJvcFZhbHVlLmNvbnN0cnVjdG9yLm5hbWU7XG4gIH1cblxuICBSZWFjdFByb3BUeXBlcy5jaGVja1Byb3BUeXBlcyA9IGNoZWNrUHJvcFR5cGVzO1xuICBSZWFjdFByb3BUeXBlcy5yZXNldFdhcm5pbmdDYWNoZSA9IGNoZWNrUHJvcFR5cGVzLnJlc2V0V2FybmluZ0NhY2hlO1xuICBSZWFjdFByb3BUeXBlcy5Qcm9wVHlwZXMgPSBSZWFjdFByb3BUeXBlcztcblxuICByZXR1cm4gUmVhY3RQcm9wVHlwZXM7XG59O1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBSZWFjdFByb3BUeXBlc1NlY3JldCA9IHJlcXVpcmUoJy4vbGliL1JlYWN0UHJvcFR5cGVzU2VjcmV0Jyk7XG5cbmZ1bmN0aW9uIGVtcHR5RnVuY3Rpb24oKSB7fVxuZnVuY3Rpb24gZW1wdHlGdW5jdGlvbldpdGhSZXNldCgpIHt9XG5lbXB0eUZ1bmN0aW9uV2l0aFJlc2V0LnJlc2V0V2FybmluZ0NhY2hlID0gZW1wdHlGdW5jdGlvbjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gc2hpbShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUsIHNlY3JldCkge1xuICAgIGlmIChzZWNyZXQgPT09IFJlYWN0UHJvcFR5cGVzU2VjcmV0KSB7XG4gICAgICAvLyBJdCBpcyBzdGlsbCBzYWZlIHdoZW4gY2FsbGVkIGZyb20gUmVhY3QuXG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciBlcnIgPSBuZXcgRXJyb3IoXG4gICAgICAnQ2FsbGluZyBQcm9wVHlwZXMgdmFsaWRhdG9ycyBkaXJlY3RseSBpcyBub3Qgc3VwcG9ydGVkIGJ5IHRoZSBgcHJvcC10eXBlc2AgcGFja2FnZS4gJyArXG4gICAgICAnVXNlIFByb3BUeXBlcy5jaGVja1Byb3BUeXBlcygpIHRvIGNhbGwgdGhlbS4gJyArXG4gICAgICAnUmVhZCBtb3JlIGF0IGh0dHA6Ly9mYi5tZS91c2UtY2hlY2stcHJvcC10eXBlcydcbiAgICApO1xuICAgIGVyci5uYW1lID0gJ0ludmFyaWFudCBWaW9sYXRpb24nO1xuICAgIHRocm93IGVycjtcbiAgfTtcbiAgc2hpbS5pc1JlcXVpcmVkID0gc2hpbTtcbiAgZnVuY3Rpb24gZ2V0U2hpbSgpIHtcbiAgICByZXR1cm4gc2hpbTtcbiAgfTtcbiAgLy8gSW1wb3J0YW50IVxuICAvLyBLZWVwIHRoaXMgbGlzdCBpbiBzeW5jIHdpdGggcHJvZHVjdGlvbiB2ZXJzaW9uIGluIGAuL2ZhY3RvcnlXaXRoVHlwZUNoZWNrZXJzLmpzYC5cbiAgdmFyIFJlYWN0UHJvcFR5cGVzID0ge1xuICAgIGFycmF5OiBzaGltLFxuICAgIGJvb2w6IHNoaW0sXG4gICAgZnVuYzogc2hpbSxcbiAgICBudW1iZXI6IHNoaW0sXG4gICAgb2JqZWN0OiBzaGltLFxuICAgIHN0cmluZzogc2hpbSxcbiAgICBzeW1ib2w6IHNoaW0sXG5cbiAgICBhbnk6IHNoaW0sXG4gICAgYXJyYXlPZjogZ2V0U2hpbSxcbiAgICBlbGVtZW50OiBzaGltLFxuICAgIGVsZW1lbnRUeXBlOiBzaGltLFxuICAgIGluc3RhbmNlT2Y6IGdldFNoaW0sXG4gICAgbm9kZTogc2hpbSxcbiAgICBvYmplY3RPZjogZ2V0U2hpbSxcbiAgICBvbmVPZjogZ2V0U2hpbSxcbiAgICBvbmVPZlR5cGU6IGdldFNoaW0sXG4gICAgc2hhcGU6IGdldFNoaW0sXG4gICAgZXhhY3Q6IGdldFNoaW0sXG5cbiAgICBjaGVja1Byb3BUeXBlczogZW1wdHlGdW5jdGlvbldpdGhSZXNldCxcbiAgICByZXNldFdhcm5pbmdDYWNoZTogZW1wdHlGdW5jdGlvblxuICB9O1xuXG4gIFJlYWN0UHJvcFR5cGVzLlByb3BUeXBlcyA9IFJlYWN0UHJvcFR5cGVzO1xuXG4gIHJldHVybiBSZWFjdFByb3BUeXBlcztcbn07XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHZhciBSZWFjdElzID0gcmVxdWlyZSgncmVhY3QtaXMnKTtcblxuICAvLyBCeSBleHBsaWNpdGx5IHVzaW5nIGBwcm9wLXR5cGVzYCB5b3UgYXJlIG9wdGluZyBpbnRvIG5ldyBkZXZlbG9wbWVudCBiZWhhdmlvci5cbiAgLy8gaHR0cDovL2ZiLm1lL3Byb3AtdHlwZXMtaW4tcHJvZFxuICB2YXIgdGhyb3dPbkRpcmVjdEFjY2VzcyA9IHRydWU7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9mYWN0b3J5V2l0aFR5cGVDaGVja2VycycpKFJlYWN0SXMuaXNFbGVtZW50LCB0aHJvd09uRGlyZWN0QWNjZXNzKTtcbn0gZWxzZSB7XG4gIC8vIEJ5IGV4cGxpY2l0bHkgdXNpbmcgYHByb3AtdHlwZXNgIHlvdSBhcmUgb3B0aW5nIGludG8gbmV3IHByb2R1Y3Rpb24gYmVoYXZpb3IuXG4gIC8vIGh0dHA6Ly9mYi5tZS9wcm9wLXR5cGVzLWluLXByb2RcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2ZhY3RvcnlXaXRoVGhyb3dpbmdTaGltcycpKCk7XG59XG4iLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIGRlZmF1bHQ6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSBoYXNDbGFzcztcblxuZnVuY3Rpb24gaGFzQ2xhc3MoZWxlbWVudCwgY2xhc3NOYW1lKSB7XG4gIGlmIChlbGVtZW50LmNsYXNzTGlzdCkgcmV0dXJuICEhY2xhc3NOYW1lICYmIGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSk7ZWxzZSByZXR1cm4gKFwiIFwiICsgKGVsZW1lbnQuY2xhc3NOYW1lLmJhc2VWYWwgfHwgZWxlbWVudC5jbGFzc05hbWUpICsgXCIgXCIpLmluZGV4T2YoXCIgXCIgKyBjbGFzc05hbWUgKyBcIiBcIikgIT09IC0xO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdOyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IGFkZENsYXNzO1xuXG52YXIgX2hhc0NsYXNzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9oYXNDbGFzc1wiKSk7XG5cbmZ1bmN0aW9uIGFkZENsYXNzKGVsZW1lbnQsIGNsYXNzTmFtZSkge1xuICBpZiAoZWxlbWVudC5jbGFzc0xpc3QpIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO2Vsc2UgaWYgKCEoMCwgX2hhc0NsYXNzLmRlZmF1bHQpKGVsZW1lbnQsIGNsYXNzTmFtZSkpIGlmICh0eXBlb2YgZWxlbWVudC5jbGFzc05hbWUgPT09ICdzdHJpbmcnKSBlbGVtZW50LmNsYXNzTmFtZSA9IGVsZW1lbnQuY2xhc3NOYW1lICsgJyAnICsgY2xhc3NOYW1lO2Vsc2UgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgKGVsZW1lbnQuY2xhc3NOYW1lICYmIGVsZW1lbnQuY2xhc3NOYW1lLmJhc2VWYWwgfHwgJycpICsgJyAnICsgY2xhc3NOYW1lKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzW1wiZGVmYXVsdFwiXTsiLCIndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIHJlcGxhY2VDbGFzc05hbWUob3JpZ0NsYXNzLCBjbGFzc1RvUmVtb3ZlKSB7XG4gIHJldHVybiBvcmlnQ2xhc3MucmVwbGFjZShuZXcgUmVnRXhwKCcoXnxcXFxccyknICsgY2xhc3NUb1JlbW92ZSArICcoPzpcXFxcc3wkKScsICdnJyksICckMScpLnJlcGxhY2UoL1xccysvZywgJyAnKS5yZXBsYWNlKC9eXFxzKnxcXHMqJC9nLCAnJyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gcmVtb3ZlQ2xhc3MoZWxlbWVudCwgY2xhc3NOYW1lKSB7XG4gIGlmIChlbGVtZW50LmNsYXNzTGlzdCkgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7ZWxzZSBpZiAodHlwZW9mIGVsZW1lbnQuY2xhc3NOYW1lID09PSAnc3RyaW5nJykgZWxlbWVudC5jbGFzc05hbWUgPSByZXBsYWNlQ2xhc3NOYW1lKGVsZW1lbnQuY2xhc3NOYW1lLCBjbGFzc05hbWUpO2Vsc2UgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgcmVwbGFjZUNsYXNzTmFtZShlbGVtZW50LmNsYXNzTmFtZSAmJiBlbGVtZW50LmNsYXNzTmFtZS5iYXNlVmFsIHx8ICcnLCBjbGFzc05hbWUpKTtcbn07IiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG5mdW5jdGlvbiBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gIC8vIENhbGwgdGhpcy5jb25zdHJ1Y3Rvci5nRFNGUCB0byBzdXBwb3J0IHN1Yi1jbGFzc2VzLlxuICB2YXIgc3RhdGUgPSB0aGlzLmNvbnN0cnVjdG9yLmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyh0aGlzLnByb3BzLCB0aGlzLnN0YXRlKTtcbiAgaWYgKHN0YXRlICE9PSBudWxsICYmIHN0YXRlICE9PSB1bmRlZmluZWQpIHtcbiAgICB0aGlzLnNldFN0YXRlKHN0YXRlKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAvLyBDYWxsIHRoaXMuY29uc3RydWN0b3IuZ0RTRlAgdG8gc3VwcG9ydCBzdWItY2xhc3Nlcy5cbiAgLy8gVXNlIHRoZSBzZXRTdGF0ZSgpIHVwZGF0ZXIgdG8gZW5zdXJlIHN0YXRlIGlzbid0IHN0YWxlIGluIGNlcnRhaW4gZWRnZSBjYXNlcy5cbiAgZnVuY3Rpb24gdXBkYXRlcihwcmV2U3RhdGUpIHtcbiAgICB2YXIgc3RhdGUgPSB0aGlzLmNvbnN0cnVjdG9yLmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyhuZXh0UHJvcHMsIHByZXZTdGF0ZSk7XG4gICAgcmV0dXJuIHN0YXRlICE9PSBudWxsICYmIHN0YXRlICE9PSB1bmRlZmluZWQgPyBzdGF0ZSA6IG51bGw7XG4gIH1cbiAgLy8gQmluZGluZyBcInRoaXNcIiBpcyBpbXBvcnRhbnQgZm9yIHNoYWxsb3cgcmVuZGVyZXIgc3VwcG9ydC5cbiAgdGhpcy5zZXRTdGF0ZSh1cGRhdGVyLmJpbmQodGhpcykpO1xufVxuXG5mdW5jdGlvbiBjb21wb25lbnRXaWxsVXBkYXRlKG5leHRQcm9wcywgbmV4dFN0YXRlKSB7XG4gIHRyeSB7XG4gICAgdmFyIHByZXZQcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgdmFyIHByZXZTdGF0ZSA9IHRoaXMuc3RhdGU7XG4gICAgdGhpcy5wcm9wcyA9IG5leHRQcm9wcztcbiAgICB0aGlzLnN0YXRlID0gbmV4dFN0YXRlO1xuICAgIHRoaXMuX19yZWFjdEludGVybmFsU25hcHNob3RGbGFnID0gdHJ1ZTtcbiAgICB0aGlzLl9fcmVhY3RJbnRlcm5hbFNuYXBzaG90ID0gdGhpcy5nZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZShcbiAgICAgIHByZXZQcm9wcyxcbiAgICAgIHByZXZTdGF0ZVxuICAgICk7XG4gIH0gZmluYWxseSB7XG4gICAgdGhpcy5wcm9wcyA9IHByZXZQcm9wcztcbiAgICB0aGlzLnN0YXRlID0gcHJldlN0YXRlO1xuICB9XG59XG5cbi8vIFJlYWN0IG1heSB3YXJuIGFib3V0IGNXTS9jV1JQL2NXVSBtZXRob2RzIGJlaW5nIGRlcHJlY2F0ZWQuXG4vLyBBZGQgYSBmbGFnIHRvIHN1cHByZXNzIHRoZXNlIHdhcm5pbmdzIGZvciB0aGlzIHNwZWNpYWwgY2FzZS5cbmNvbXBvbmVudFdpbGxNb3VudC5fX3N1cHByZXNzRGVwcmVjYXRpb25XYXJuaW5nID0gdHJ1ZTtcbmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMuX19zdXBwcmVzc0RlcHJlY2F0aW9uV2FybmluZyA9IHRydWU7XG5jb21wb25lbnRXaWxsVXBkYXRlLl9fc3VwcHJlc3NEZXByZWNhdGlvbldhcm5pbmcgPSB0cnVlO1xuXG5mdW5jdGlvbiBwb2x5ZmlsbChDb21wb25lbnQpIHtcbiAgdmFyIHByb3RvdHlwZSA9IENvbXBvbmVudC5wcm90b3R5cGU7XG5cbiAgaWYgKCFwcm90b3R5cGUgfHwgIXByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdDYW4gb25seSBwb2x5ZmlsbCBjbGFzcyBjb21wb25lbnRzJyk7XG4gIH1cblxuICBpZiAoXG4gICAgdHlwZW9mIENvbXBvbmVudC5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMgIT09ICdmdW5jdGlvbicgJiZcbiAgICB0eXBlb2YgcHJvdG90eXBlLmdldFNuYXBzaG90QmVmb3JlVXBkYXRlICE9PSAnZnVuY3Rpb24nXG4gICkge1xuICAgIHJldHVybiBDb21wb25lbnQ7XG4gIH1cblxuICAvLyBJZiBuZXcgY29tcG9uZW50IEFQSXMgYXJlIGRlZmluZWQsIFwidW5zYWZlXCIgbGlmZWN5Y2xlcyB3b24ndCBiZSBjYWxsZWQuXG4gIC8vIEVycm9yIGlmIGFueSBvZiB0aGVzZSBsaWZlY3ljbGVzIGFyZSBwcmVzZW50LFxuICAvLyBCZWNhdXNlIHRoZXkgd291bGQgd29yayBkaWZmZXJlbnRseSBiZXR3ZWVuIG9sZGVyIGFuZCBuZXdlciAoMTYuMyspIHZlcnNpb25zIG9mIFJlYWN0LlxuICB2YXIgZm91bmRXaWxsTW91bnROYW1lID0gbnVsbDtcbiAgdmFyIGZvdW5kV2lsbFJlY2VpdmVQcm9wc05hbWUgPSBudWxsO1xuICB2YXIgZm91bmRXaWxsVXBkYXRlTmFtZSA9IG51bGw7XG4gIGlmICh0eXBlb2YgcHJvdG90eXBlLmNvbXBvbmVudFdpbGxNb3VudCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGZvdW5kV2lsbE1vdW50TmFtZSA9ICdjb21wb25lbnRXaWxsTW91bnQnO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBwcm90b3R5cGUuVU5TQUZFX2NvbXBvbmVudFdpbGxNb3VudCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGZvdW5kV2lsbE1vdW50TmFtZSA9ICdVTlNBRkVfY29tcG9uZW50V2lsbE1vdW50JztcbiAgfVxuICBpZiAodHlwZW9mIHByb3RvdHlwZS5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgZm91bmRXaWxsUmVjZWl2ZVByb3BzTmFtZSA9ICdjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzJztcbiAgfSBlbHNlIGlmICh0eXBlb2YgcHJvdG90eXBlLlVOU0FGRV9jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgZm91bmRXaWxsUmVjZWl2ZVByb3BzTmFtZSA9ICdVTlNBRkVfY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyc7XG4gIH1cbiAgaWYgKHR5cGVvZiBwcm90b3R5cGUuY29tcG9uZW50V2lsbFVwZGF0ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGZvdW5kV2lsbFVwZGF0ZU5hbWUgPSAnY29tcG9uZW50V2lsbFVwZGF0ZSc7XG4gIH0gZWxzZSBpZiAodHlwZW9mIHByb3RvdHlwZS5VTlNBRkVfY29tcG9uZW50V2lsbFVwZGF0ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGZvdW5kV2lsbFVwZGF0ZU5hbWUgPSAnVU5TQUZFX2NvbXBvbmVudFdpbGxVcGRhdGUnO1xuICB9XG4gIGlmIChcbiAgICBmb3VuZFdpbGxNb3VudE5hbWUgIT09IG51bGwgfHxcbiAgICBmb3VuZFdpbGxSZWNlaXZlUHJvcHNOYW1lICE9PSBudWxsIHx8XG4gICAgZm91bmRXaWxsVXBkYXRlTmFtZSAhPT0gbnVsbFxuICApIHtcbiAgICB2YXIgY29tcG9uZW50TmFtZSA9IENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb25lbnQubmFtZTtcbiAgICB2YXIgbmV3QXBpTmFtZSA9XG4gICAgICB0eXBlb2YgQ29tcG9uZW50LmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICA/ICdnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMoKSdcbiAgICAgICAgOiAnZ2V0U25hcHNob3RCZWZvcmVVcGRhdGUoKSc7XG5cbiAgICB0aHJvdyBFcnJvcihcbiAgICAgICdVbnNhZmUgbGVnYWN5IGxpZmVjeWNsZXMgd2lsbCBub3QgYmUgY2FsbGVkIGZvciBjb21wb25lbnRzIHVzaW5nIG5ldyBjb21wb25lbnQgQVBJcy5cXG5cXG4nICtcbiAgICAgICAgY29tcG9uZW50TmFtZSArXG4gICAgICAgICcgdXNlcyAnICtcbiAgICAgICAgbmV3QXBpTmFtZSArXG4gICAgICAgICcgYnV0IGFsc28gY29udGFpbnMgdGhlIGZvbGxvd2luZyBsZWdhY3kgbGlmZWN5Y2xlczonICtcbiAgICAgICAgKGZvdW5kV2lsbE1vdW50TmFtZSAhPT0gbnVsbCA/ICdcXG4gICcgKyBmb3VuZFdpbGxNb3VudE5hbWUgOiAnJykgK1xuICAgICAgICAoZm91bmRXaWxsUmVjZWl2ZVByb3BzTmFtZSAhPT0gbnVsbFxuICAgICAgICAgID8gJ1xcbiAgJyArIGZvdW5kV2lsbFJlY2VpdmVQcm9wc05hbWVcbiAgICAgICAgICA6ICcnKSArXG4gICAgICAgIChmb3VuZFdpbGxVcGRhdGVOYW1lICE9PSBudWxsID8gJ1xcbiAgJyArIGZvdW5kV2lsbFVwZGF0ZU5hbWUgOiAnJykgK1xuICAgICAgICAnXFxuXFxuVGhlIGFib3ZlIGxpZmVjeWNsZXMgc2hvdWxkIGJlIHJlbW92ZWQuIExlYXJuIG1vcmUgYWJvdXQgdGhpcyB3YXJuaW5nIGhlcmU6XFxuJyArXG4gICAgICAgICdodHRwczovL2ZiLm1lL3JlYWN0LWFzeW5jLWNvbXBvbmVudC1saWZlY3ljbGUtaG9va3MnXG4gICAgKTtcbiAgfVxuXG4gIC8vIFJlYWN0IDw9IDE2LjIgZG9lcyBub3Qgc3VwcG9ydCBzdGF0aWMgZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzLlxuICAvLyBBcyBhIHdvcmthcm91bmQsIHVzZSBjV00gYW5kIGNXUlAgdG8gaW52b2tlIHRoZSBuZXcgc3RhdGljIGxpZmVjeWNsZS5cbiAgLy8gTmV3ZXIgdmVyc2lvbnMgb2YgUmVhY3Qgd2lsbCBpZ25vcmUgdGhlc2UgbGlmZWN5Y2xlcyBpZiBnRFNGUCBleGlzdHMuXG4gIGlmICh0eXBlb2YgQ29tcG9uZW50LmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHByb3RvdHlwZS5jb21wb25lbnRXaWxsTW91bnQgPSBjb21wb25lbnRXaWxsTW91bnQ7XG4gICAgcHJvdG90eXBlLmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMgPSBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzO1xuICB9XG5cbiAgLy8gUmVhY3QgPD0gMTYuMiBkb2VzIG5vdCBzdXBwb3J0IGdldFNuYXBzaG90QmVmb3JlVXBkYXRlLlxuICAvLyBBcyBhIHdvcmthcm91bmQsIHVzZSBjV1UgdG8gaW52b2tlIHRoZSBuZXcgbGlmZWN5Y2xlLlxuICAvLyBOZXdlciB2ZXJzaW9ucyBvZiBSZWFjdCB3aWxsIGlnbm9yZSB0aGF0IGxpZmVjeWNsZSBpZiBnU0JVIGV4aXN0cy5cbiAgaWYgKHR5cGVvZiBwcm90b3R5cGUuZ2V0U25hcHNob3RCZWZvcmVVcGRhdGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICBpZiAodHlwZW9mIHByb3RvdHlwZS5jb21wb25lbnREaWRVcGRhdGUgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgJ0Nhbm5vdCBwb2x5ZmlsbCBnZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZSgpIGZvciBjb21wb25lbnRzIHRoYXQgZG8gbm90IGRlZmluZSBjb21wb25lbnREaWRVcGRhdGUoKSBvbiB0aGUgcHJvdG90eXBlJ1xuICAgICAgKTtcbiAgICB9XG5cbiAgICBwcm90b3R5cGUuY29tcG9uZW50V2lsbFVwZGF0ZSA9IGNvbXBvbmVudFdpbGxVcGRhdGU7XG5cbiAgICB2YXIgY29tcG9uZW50RGlkVXBkYXRlID0gcHJvdG90eXBlLmNvbXBvbmVudERpZFVwZGF0ZTtcblxuICAgIHByb3RvdHlwZS5jb21wb25lbnREaWRVcGRhdGUgPSBmdW5jdGlvbiBjb21wb25lbnREaWRVcGRhdGVQb2x5ZmlsbChcbiAgICAgIHByZXZQcm9wcyxcbiAgICAgIHByZXZTdGF0ZSxcbiAgICAgIG1heWJlU25hcHNob3RcbiAgICApIHtcbiAgICAgIC8vIDE2LjMrIHdpbGwgbm90IGV4ZWN1dGUgb3VyIHdpbGwtdXBkYXRlIG1ldGhvZDtcbiAgICAgIC8vIEl0IHdpbGwgcGFzcyBhIHNuYXBzaG90IHZhbHVlIHRvIGRpZC11cGRhdGUgdGhvdWdoLlxuICAgICAgLy8gT2xkZXIgdmVyc2lvbnMgd2lsbCByZXF1aXJlIG91ciBwb2x5ZmlsbGVkIHdpbGwtdXBkYXRlIHZhbHVlLlxuICAgICAgLy8gV2UgbmVlZCB0byBoYW5kbGUgYm90aCBjYXNlcywgYnV0IGNhbid0IGp1c3QgY2hlY2sgZm9yIHRoZSBwcmVzZW5jZSBvZiBcIm1heWJlU25hcHNob3RcIixcbiAgICAgIC8vIEJlY2F1c2UgZm9yIDw9IDE1LnggdmVyc2lvbnMgdGhpcyBtaWdodCBiZSBhIFwicHJldkNvbnRleHRcIiBvYmplY3QuXG4gICAgICAvLyBXZSBhbHNvIGNhbid0IGp1c3QgY2hlY2sgXCJfX3JlYWN0SW50ZXJuYWxTbmFwc2hvdFwiLFxuICAgICAgLy8gQmVjYXVzZSBnZXQtc25hcHNob3QgbWlnaHQgcmV0dXJuIGEgZmFsc3kgdmFsdWUuXG4gICAgICAvLyBTbyBjaGVjayBmb3IgdGhlIGV4cGxpY2l0IF9fcmVhY3RJbnRlcm5hbFNuYXBzaG90RmxhZyBmbGFnIHRvIGRldGVybWluZSBiZWhhdmlvci5cbiAgICAgIHZhciBzbmFwc2hvdCA9IHRoaXMuX19yZWFjdEludGVybmFsU25hcHNob3RGbGFnXG4gICAgICAgID8gdGhpcy5fX3JlYWN0SW50ZXJuYWxTbmFwc2hvdFxuICAgICAgICA6IG1heWJlU25hcHNob3Q7XG5cbiAgICAgIGNvbXBvbmVudERpZFVwZGF0ZS5jYWxsKHRoaXMsIHByZXZQcm9wcywgcHJldlN0YXRlLCBzbmFwc2hvdCk7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBDb21wb25lbnQ7XG59XG5cbmV4cG9ydCB7IHBvbHlmaWxsIH07XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuY2xhc3NOYW1lc1NoYXBlID0gZXhwb3J0cy50aW1lb3V0c1NoYXBlID0gdm9pZCAwO1xuXG52YXIgX3Byb3BUeXBlcyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInByb3AtdHlwZXNcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgdGltZW91dHNTaGFwZSA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyBfcHJvcFR5cGVzLmRlZmF1bHQub25lT2ZUeXBlKFtfcHJvcFR5cGVzLmRlZmF1bHQubnVtYmVyLCBfcHJvcFR5cGVzLmRlZmF1bHQuc2hhcGUoe1xuICBlbnRlcjogX3Byb3BUeXBlcy5kZWZhdWx0Lm51bWJlcixcbiAgZXhpdDogX3Byb3BUeXBlcy5kZWZhdWx0Lm51bWJlclxufSkuaXNSZXF1aXJlZF0pIDogbnVsbDtcbmV4cG9ydHMudGltZW91dHNTaGFwZSA9IHRpbWVvdXRzU2hhcGU7XG52YXIgY2xhc3NOYW1lc1NoYXBlID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IF9wcm9wVHlwZXMuZGVmYXVsdC5vbmVPZlR5cGUoW19wcm9wVHlwZXMuZGVmYXVsdC5zdHJpbmcsIF9wcm9wVHlwZXMuZGVmYXVsdC5zaGFwZSh7XG4gIGVudGVyOiBfcHJvcFR5cGVzLmRlZmF1bHQuc3RyaW5nLFxuICBleGl0OiBfcHJvcFR5cGVzLmRlZmF1bHQuc3RyaW5nLFxuICBhY3RpdmU6IF9wcm9wVHlwZXMuZGVmYXVsdC5zdHJpbmdcbn0pLCBfcHJvcFR5cGVzLmRlZmF1bHQuc2hhcGUoe1xuICBlbnRlcjogX3Byb3BUeXBlcy5kZWZhdWx0LnN0cmluZyxcbiAgZW50ZXJEb25lOiBfcHJvcFR5cGVzLmRlZmF1bHQuc3RyaW5nLFxuICBlbnRlckFjdGl2ZTogX3Byb3BUeXBlcy5kZWZhdWx0LnN0cmluZyxcbiAgZXhpdDogX3Byb3BUeXBlcy5kZWZhdWx0LnN0cmluZyxcbiAgZXhpdERvbmU6IF9wcm9wVHlwZXMuZGVmYXVsdC5zdHJpbmcsXG4gIGV4aXRBY3RpdmU6IF9wcm9wVHlwZXMuZGVmYXVsdC5zdHJpbmdcbn0pXSkgOiBudWxsO1xuZXhwb3J0cy5jbGFzc05hbWVzU2hhcGUgPSBjbGFzc05hbWVzU2hhcGU7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSBleHBvcnRzLkVYSVRJTkcgPSBleHBvcnRzLkVOVEVSRUQgPSBleHBvcnRzLkVOVEVSSU5HID0gZXhwb3J0cy5FWElURUQgPSBleHBvcnRzLlVOTU9VTlRFRCA9IHZvaWQgMDtcblxudmFyIFByb3BUeXBlcyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpKTtcblxudmFyIF9yZWFjdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcblxudmFyIF9yZWFjdERvbSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0LWRvbVwiKSk7XG5cbnZhciBfcmVhY3RMaWZlY3ljbGVzQ29tcGF0ID0gcmVxdWlyZShcInJlYWN0LWxpZmVjeWNsZXMtY29tcGF0XCIpO1xuXG52YXIgX1Byb3BUeXBlcyA9IHJlcXVpcmUoXCIuL3V0aWxzL1Byb3BUeXBlc1wiKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7IGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHsgcmV0dXJuIG9iajsgfSBlbHNlIHsgdmFyIG5ld09iaiA9IHt9OyBpZiAob2JqICE9IG51bGwpIHsgZm9yICh2YXIga2V5IGluIG9iaikgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkgeyB2YXIgZGVzYyA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiB7fTsgaWYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7IH0gZWxzZSB7IG5ld09ialtrZXldID0gb2JqW2tleV07IH0gfSB9IH0gbmV3T2JqLmRlZmF1bHQgPSBvYmo7IHJldHVybiBuZXdPYmo7IH0gfVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKSB7IGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9OyB2YXIgdGFyZ2V0ID0ge307IHZhciBzb3VyY2VLZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTsgdmFyIGtleSwgaTsgZm9yIChpID0gMDsgaSA8IHNvdXJjZUtleXMubGVuZ3RoOyBpKyspIHsga2V5ID0gc291cmNlS2V5c1tpXTsgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0c0xvb3NlKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcy5wcm90b3R5cGUpOyBzdWJDbGFzcy5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBzdWJDbGFzczsgc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgVU5NT1VOVEVEID0gJ3VubW91bnRlZCc7XG5leHBvcnRzLlVOTU9VTlRFRCA9IFVOTU9VTlRFRDtcbnZhciBFWElURUQgPSAnZXhpdGVkJztcbmV4cG9ydHMuRVhJVEVEID0gRVhJVEVEO1xudmFyIEVOVEVSSU5HID0gJ2VudGVyaW5nJztcbmV4cG9ydHMuRU5URVJJTkcgPSBFTlRFUklORztcbnZhciBFTlRFUkVEID0gJ2VudGVyZWQnO1xuZXhwb3J0cy5FTlRFUkVEID0gRU5URVJFRDtcbnZhciBFWElUSU5HID0gJ2V4aXRpbmcnO1xuLyoqXG4gKiBUaGUgVHJhbnNpdGlvbiBjb21wb25lbnQgbGV0cyB5b3UgZGVzY3JpYmUgYSB0cmFuc2l0aW9uIGZyb20gb25lIGNvbXBvbmVudFxuICogc3RhdGUgdG8gYW5vdGhlciBfb3ZlciB0aW1lXyB3aXRoIGEgc2ltcGxlIGRlY2xhcmF0aXZlIEFQSS4gTW9zdCBjb21tb25seVxuICogaXQncyB1c2VkIHRvIGFuaW1hdGUgdGhlIG1vdW50aW5nIGFuZCB1bm1vdW50aW5nIG9mIGEgY29tcG9uZW50LCBidXQgY2FuIGFsc29cbiAqIGJlIHVzZWQgdG8gZGVzY3JpYmUgaW4tcGxhY2UgdHJhbnNpdGlvbiBzdGF0ZXMgYXMgd2VsbC5cbiAqXG4gKiBCeSBkZWZhdWx0IHRoZSBgVHJhbnNpdGlvbmAgY29tcG9uZW50IGRvZXMgbm90IGFsdGVyIHRoZSBiZWhhdmlvciBvZiB0aGVcbiAqIGNvbXBvbmVudCBpdCByZW5kZXJzLCBpdCBvbmx5IHRyYWNrcyBcImVudGVyXCIgYW5kIFwiZXhpdFwiIHN0YXRlcyBmb3IgdGhlIGNvbXBvbmVudHMuXG4gKiBJdCdzIHVwIHRvIHlvdSB0byBnaXZlIG1lYW5pbmcgYW5kIGVmZmVjdCB0byB0aG9zZSBzdGF0ZXMuIEZvciBleGFtcGxlIHdlIGNhblxuICogYWRkIHN0eWxlcyB0byBhIGNvbXBvbmVudCB3aGVuIGl0IGVudGVycyBvciBleGl0czpcbiAqXG4gKiBgYGBqc3hcbiAqIGltcG9ydCBUcmFuc2l0aW9uIGZyb20gJ3JlYWN0LXRyYW5zaXRpb24tZ3JvdXAvVHJhbnNpdGlvbic7XG4gKlxuICogY29uc3QgZHVyYXRpb24gPSAzMDA7XG4gKlxuICogY29uc3QgZGVmYXVsdFN0eWxlID0ge1xuICogICB0cmFuc2l0aW9uOiBgb3BhY2l0eSAke2R1cmF0aW9ufW1zIGVhc2UtaW4tb3V0YCxcbiAqICAgb3BhY2l0eTogMCxcbiAqIH1cbiAqXG4gKiBjb25zdCB0cmFuc2l0aW9uU3R5bGVzID0ge1xuICogICBlbnRlcmluZzogeyBvcGFjaXR5OiAwIH0sXG4gKiAgIGVudGVyZWQ6ICB7IG9wYWNpdHk6IDEgfSxcbiAqIH07XG4gKlxuICogY29uc3QgRmFkZSA9ICh7IGluOiBpblByb3AgfSkgPT4gKFxuICogICA8VHJhbnNpdGlvbiBpbj17aW5Qcm9wfSB0aW1lb3V0PXtkdXJhdGlvbn0+XG4gKiAgICAgeyhzdGF0ZSkgPT4gKFxuICogICAgICAgPGRpdiBzdHlsZT17e1xuICogICAgICAgICAuLi5kZWZhdWx0U3R5bGUsXG4gKiAgICAgICAgIC4uLnRyYW5zaXRpb25TdHlsZXNbc3RhdGVdXG4gKiAgICAgICB9fT5cbiAqICAgICAgICAgSSdtIGEgZmFkZSBUcmFuc2l0aW9uIVxuICogICAgICAgPC9kaXY+XG4gKiAgICAgKX1cbiAqICAgPC9UcmFuc2l0aW9uPlxuICogKTtcbiAqIGBgYFxuICpcbiAqIEFzIG5vdGVkIHRoZSBgVHJhbnNpdGlvbmAgY29tcG9uZW50IGRvZXNuJ3QgX2RvXyBhbnl0aGluZyBieSBpdHNlbGYgdG8gaXRzIGNoaWxkIGNvbXBvbmVudC5cbiAqIFdoYXQgaXQgZG9lcyBkbyBpcyB0cmFjayB0cmFuc2l0aW9uIHN0YXRlcyBvdmVyIHRpbWUgc28geW91IGNhbiB1cGRhdGUgdGhlXG4gKiBjb21wb25lbnQgKHN1Y2ggYXMgYnkgYWRkaW5nIHN0eWxlcyBvciBjbGFzc2VzKSB3aGVuIGl0IGNoYW5nZXMgc3RhdGVzLlxuICpcbiAqIFRoZXJlIGFyZSA0IG1haW4gc3RhdGVzIGEgVHJhbnNpdGlvbiBjYW4gYmUgaW46XG4gKiAgLSBgJ2VudGVyaW5nJ2BcbiAqICAtIGAnZW50ZXJlZCdgXG4gKiAgLSBgJ2V4aXRpbmcnYFxuICogIC0gYCdleGl0ZWQnYFxuICpcbiAqIFRyYW5zaXRpb24gc3RhdGUgaXMgdG9nZ2xlZCB2aWEgdGhlIGBpbmAgcHJvcC4gV2hlbiBgdHJ1ZWAgdGhlIGNvbXBvbmVudCBiZWdpbnMgdGhlXG4gKiBcIkVudGVyXCIgc3RhZ2UuIER1cmluZyB0aGlzIHN0YWdlLCB0aGUgY29tcG9uZW50IHdpbGwgc2hpZnQgZnJvbSBpdHMgY3VycmVudCB0cmFuc2l0aW9uIHN0YXRlLFxuICogdG8gYCdlbnRlcmluZydgIGZvciB0aGUgZHVyYXRpb24gb2YgdGhlIHRyYW5zaXRpb24gYW5kIHRoZW4gdG8gdGhlIGAnZW50ZXJlZCdgIHN0YWdlIG9uY2VcbiAqIGl0J3MgY29tcGxldGUuIExldCdzIHRha2UgdGhlIGZvbGxvd2luZyBleGFtcGxlOlxuICpcbiAqIGBgYGpzeFxuICogc3RhdGUgPSB7IGluOiBmYWxzZSB9O1xuICpcbiAqIHRvZ2dsZUVudGVyU3RhdGUgPSAoKSA9PiB7XG4gKiAgIHRoaXMuc2V0U3RhdGUoeyBpbjogdHJ1ZSB9KTtcbiAqIH1cbiAqXG4gKiByZW5kZXIoKSB7XG4gKiAgIHJldHVybiAoXG4gKiAgICAgPGRpdj5cbiAqICAgICAgIDxUcmFuc2l0aW9uIGluPXt0aGlzLnN0YXRlLmlufSB0aW1lb3V0PXs1MDB9IC8+XG4gKiAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMudG9nZ2xlRW50ZXJTdGF0ZX0+Q2xpY2sgdG8gRW50ZXI8L2J1dHRvbj5cbiAqICAgICA8L2Rpdj5cbiAqICAgKTtcbiAqIH1cbiAqIGBgYFxuICpcbiAqIFdoZW4gdGhlIGJ1dHRvbiBpcyBjbGlja2VkIHRoZSBjb21wb25lbnQgd2lsbCBzaGlmdCB0byB0aGUgYCdlbnRlcmluZydgIHN0YXRlIGFuZFxuICogc3RheSB0aGVyZSBmb3IgNTAwbXMgKHRoZSB2YWx1ZSBvZiBgdGltZW91dGApIGJlZm9yZSBpdCBmaW5hbGx5IHN3aXRjaGVzIHRvIGAnZW50ZXJlZCdgLlxuICpcbiAqIFdoZW4gYGluYCBpcyBgZmFsc2VgIHRoZSBzYW1lIHRoaW5nIGhhcHBlbnMgZXhjZXB0IHRoZSBzdGF0ZSBtb3ZlcyBmcm9tIGAnZXhpdGluZydgIHRvIGAnZXhpdGVkJ2AuXG4gKlxuICogIyMgVGltaW5nXG4gKlxuICogVGltaW5nIGlzIG9mdGVuIHRoZSB0cmlja2llc3QgcGFydCBvZiBhbmltYXRpb24sIG1pc3Rha2VzIGNhbiByZXN1bHQgaW4gc2xpZ2h0IGRlbGF5c1xuICogdGhhdCBhcmUgaGFyZCB0byBwaW4gZG93bi4gQSBjb21tb24gZXhhbXBsZSBpcyB3aGVuIHlvdSB3YW50IHRvIGFkZCBhbiBleGl0IHRyYW5zaXRpb24sXG4gKiB5b3Ugc2hvdWxkIHNldCB0aGUgZGVzaXJlZCBmaW5hbCBzdHlsZXMgd2hlbiB0aGUgc3RhdGUgaXMgYCdleGl0aW5nJ2AuIFRoYXQncyB3aGVuIHRoZVxuICogdHJhbnNpdGlvbiB0byB0aG9zZSBzdHlsZXMgd2lsbCBzdGFydCBhbmQsIGlmIHlvdSBtYXRjaGVkIHRoZSBgdGltZW91dGAgcHJvcCB3aXRoIHRoZVxuICogQ1NTIFRyYW5zaXRpb24gZHVyYXRpb24sIGl0IHdpbGwgZW5kIGV4YWN0bHkgd2hlbiB0aGUgc3RhdGUgY2hhbmdlcyB0byBgJ2V4aXRlZCdgLlxuICpcbiAqID4gKipOb3RlKio6IEZvciBzaW1wbGVyIHRyYW5zaXRpb25zIHRoZSBgVHJhbnNpdGlvbmAgY29tcG9uZW50IG1pZ2h0IGJlIGVub3VnaCwgYnV0XG4gKiA+IHRha2UgaW50byBhY2NvdW50IHRoYXQgaXQncyBwbGF0Zm9ybS1hZ25vc3RpYywgd2hpbGUgdGhlIGBDU1NUcmFuc2l0aW9uYCBjb21wb25lbnRcbiAqID4gW2ZvcmNlcyByZWZsb3dzXShodHRwczovL2dpdGh1Yi5jb20vcmVhY3Rqcy9yZWFjdC10cmFuc2l0aW9uLWdyb3VwL2Jsb2IvNTAwNzMwM2U3MjlhNzRiZTY2YTIxYzNlMjIwNWU0OTE2ODIxNTI0Yi9zcmMvQ1NTVHJhbnNpdGlvbi5qcyNMMjA4LUwyMTUpXG4gKiA+IGluIG9yZGVyIHRvIG1ha2UgbW9yZSBjb21wbGV4IHRyYW5zaXRpb25zIG1vcmUgcHJlZGljdGFibGUuIEZvciBleGFtcGxlLCBldmVuIHRob3VnaFxuICogPiBjbGFzc2VzIGBleGFtcGxlLWVudGVyYCBhbmQgYGV4YW1wbGUtZW50ZXItYWN0aXZlYCBhcmUgYXBwbGllZCBpbW1lZGlhdGVseSBvbmUgYWZ0ZXJcbiAqID4gYW5vdGhlciwgeW91IGNhbiBzdGlsbCB0cmFuc2l0aW9uIGZyb20gb25lIHRvIHRoZSBvdGhlciBiZWNhdXNlIG9mIHRoZSBmb3JjZWQgcmVmbG93XG4gKiA+IChyZWFkIFt0aGlzIGlzc3VlXShodHRwczovL2dpdGh1Yi5jb20vcmVhY3Rqcy9yZWFjdC10cmFuc2l0aW9uLWdyb3VwL2lzc3Vlcy8xNTkjaXNzdWVjb21tZW50LTMyMjc2MTE3MSlcbiAqID4gZm9yIG1vcmUgaW5mbykuIFRha2UgdGhpcyBpbnRvIGFjY291bnQgd2hlbiBjaG9vc2luZyBiZXR3ZWVuIGBUcmFuc2l0aW9uYCBhbmRcbiAqID4gYENTU1RyYW5zaXRpb25gLlxuICovXG5cbmV4cG9ydHMuRVhJVElORyA9IEVYSVRJTkc7XG5cbnZhciBUcmFuc2l0aW9uID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0c0xvb3NlKFRyYW5zaXRpb24sIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIFRyYW5zaXRpb24ocHJvcHMsIGNvbnRleHQpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfdGhpcyA9IF9SZWFjdCRDb21wb25lbnQuY2FsbCh0aGlzLCBwcm9wcywgY29udGV4dCkgfHwgdGhpcztcbiAgICB2YXIgcGFyZW50R3JvdXAgPSBjb250ZXh0LnRyYW5zaXRpb25Hcm91cDsgLy8gSW4gdGhlIGNvbnRleHQgb2YgYSBUcmFuc2l0aW9uR3JvdXAgYWxsIGVudGVycyBhcmUgcmVhbGx5IGFwcGVhcnNcblxuICAgIHZhciBhcHBlYXIgPSBwYXJlbnRHcm91cCAmJiAhcGFyZW50R3JvdXAuaXNNb3VudGluZyA/IHByb3BzLmVudGVyIDogcHJvcHMuYXBwZWFyO1xuICAgIHZhciBpbml0aWFsU3RhdHVzO1xuICAgIF90aGlzLmFwcGVhclN0YXR1cyA9IG51bGw7XG5cbiAgICBpZiAocHJvcHMuaW4pIHtcbiAgICAgIGlmIChhcHBlYXIpIHtcbiAgICAgICAgaW5pdGlhbFN0YXR1cyA9IEVYSVRFRDtcbiAgICAgICAgX3RoaXMuYXBwZWFyU3RhdHVzID0gRU5URVJJTkc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpbml0aWFsU3RhdHVzID0gRU5URVJFRDtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHByb3BzLnVubW91bnRPbkV4aXQgfHwgcHJvcHMubW91bnRPbkVudGVyKSB7XG4gICAgICAgIGluaXRpYWxTdGF0dXMgPSBVTk1PVU5URUQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpbml0aWFsU3RhdHVzID0gRVhJVEVEO1xuICAgICAgfVxuICAgIH1cblxuICAgIF90aGlzLnN0YXRlID0ge1xuICAgICAgc3RhdHVzOiBpbml0aWFsU3RhdHVzXG4gICAgfTtcbiAgICBfdGhpcy5uZXh0Q2FsbGJhY2sgPSBudWxsO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBUcmFuc2l0aW9uLnByb3RvdHlwZTtcblxuICBfcHJvdG8uZ2V0Q2hpbGRDb250ZXh0ID0gZnVuY3Rpb24gZ2V0Q2hpbGRDb250ZXh0KCkge1xuICAgIHJldHVybiB7XG4gICAgICB0cmFuc2l0aW9uR3JvdXA6IG51bGwgLy8gYWxsb3dzIGZvciBuZXN0ZWQgVHJhbnNpdGlvbnNcblxuICAgIH07XG4gIH07XG5cbiAgVHJhbnNpdGlvbi5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMgPSBmdW5jdGlvbiBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMoX3JlZiwgcHJldlN0YXRlKSB7XG4gICAgdmFyIG5leHRJbiA9IF9yZWYuaW47XG5cbiAgICBpZiAobmV4dEluICYmIHByZXZTdGF0ZS5zdGF0dXMgPT09IFVOTU9VTlRFRCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc3RhdHVzOiBFWElURURcbiAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH07IC8vIGdldFNuYXBzaG90QmVmb3JlVXBkYXRlKHByZXZQcm9wcykge1xuICAvLyAgIGxldCBuZXh0U3RhdHVzID0gbnVsbFxuICAvLyAgIGlmIChwcmV2UHJvcHMgIT09IHRoaXMucHJvcHMpIHtcbiAgLy8gICAgIGNvbnN0IHsgc3RhdHVzIH0gPSB0aGlzLnN0YXRlXG4gIC8vICAgICBpZiAodGhpcy5wcm9wcy5pbikge1xuICAvLyAgICAgICBpZiAoc3RhdHVzICE9PSBFTlRFUklORyAmJiBzdGF0dXMgIT09IEVOVEVSRUQpIHtcbiAgLy8gICAgICAgICBuZXh0U3RhdHVzID0gRU5URVJJTkdcbiAgLy8gICAgICAgfVxuICAvLyAgICAgfSBlbHNlIHtcbiAgLy8gICAgICAgaWYgKHN0YXR1cyA9PT0gRU5URVJJTkcgfHwgc3RhdHVzID09PSBFTlRFUkVEKSB7XG4gIC8vICAgICAgICAgbmV4dFN0YXR1cyA9IEVYSVRJTkdcbiAgLy8gICAgICAgfVxuICAvLyAgICAgfVxuICAvLyAgIH1cbiAgLy8gICByZXR1cm4geyBuZXh0U3RhdHVzIH1cbiAgLy8gfVxuXG5cbiAgX3Byb3RvLmNvbXBvbmVudERpZE1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy51cGRhdGVTdGF0dXModHJ1ZSwgdGhpcy5hcHBlYXJTdGF0dXMpO1xuICB9O1xuXG4gIF9wcm90by5jb21wb25lbnREaWRVcGRhdGUgPSBmdW5jdGlvbiBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XG4gICAgdmFyIG5leHRTdGF0dXMgPSBudWxsO1xuXG4gICAgaWYgKHByZXZQcm9wcyAhPT0gdGhpcy5wcm9wcykge1xuICAgICAgdmFyIHN0YXR1cyA9IHRoaXMuc3RhdGUuc3RhdHVzO1xuXG4gICAgICBpZiAodGhpcy5wcm9wcy5pbikge1xuICAgICAgICBpZiAoc3RhdHVzICE9PSBFTlRFUklORyAmJiBzdGF0dXMgIT09IEVOVEVSRUQpIHtcbiAgICAgICAgICBuZXh0U3RhdHVzID0gRU5URVJJTkc7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChzdGF0dXMgPT09IEVOVEVSSU5HIHx8IHN0YXR1cyA9PT0gRU5URVJFRCkge1xuICAgICAgICAgIG5leHRTdGF0dXMgPSBFWElUSU5HO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy51cGRhdGVTdGF0dXMoZmFsc2UsIG5leHRTdGF0dXMpO1xuICB9O1xuXG4gIF9wcm90by5jb21wb25lbnRXaWxsVW5tb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMuY2FuY2VsTmV4dENhbGxiYWNrKCk7XG4gIH07XG5cbiAgX3Byb3RvLmdldFRpbWVvdXRzID0gZnVuY3Rpb24gZ2V0VGltZW91dHMoKSB7XG4gICAgdmFyIHRpbWVvdXQgPSB0aGlzLnByb3BzLnRpbWVvdXQ7XG4gICAgdmFyIGV4aXQsIGVudGVyLCBhcHBlYXI7XG4gICAgZXhpdCA9IGVudGVyID0gYXBwZWFyID0gdGltZW91dDtcblxuICAgIGlmICh0aW1lb3V0ICE9IG51bGwgJiYgdHlwZW9mIHRpbWVvdXQgIT09ICdudW1iZXInKSB7XG4gICAgICBleGl0ID0gdGltZW91dC5leGl0O1xuICAgICAgZW50ZXIgPSB0aW1lb3V0LmVudGVyO1xuICAgICAgYXBwZWFyID0gdGltZW91dC5hcHBlYXI7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIGV4aXQ6IGV4aXQsXG4gICAgICBlbnRlcjogZW50ZXIsXG4gICAgICBhcHBlYXI6IGFwcGVhclxuICAgIH07XG4gIH07XG5cbiAgX3Byb3RvLnVwZGF0ZVN0YXR1cyA9IGZ1bmN0aW9uIHVwZGF0ZVN0YXR1cyhtb3VudGluZywgbmV4dFN0YXR1cykge1xuICAgIGlmIChtb3VudGluZyA9PT0gdm9pZCAwKSB7XG4gICAgICBtb3VudGluZyA9IGZhbHNlO1xuICAgIH1cblxuICAgIGlmIChuZXh0U3RhdHVzICE9PSBudWxsKSB7XG4gICAgICAvLyBuZXh0U3RhdHVzIHdpbGwgYWx3YXlzIGJlIEVOVEVSSU5HIG9yIEVYSVRJTkcuXG4gICAgICB0aGlzLmNhbmNlbE5leHRDYWxsYmFjaygpO1xuXG4gICAgICB2YXIgbm9kZSA9IF9yZWFjdERvbS5kZWZhdWx0LmZpbmRET01Ob2RlKHRoaXMpO1xuXG4gICAgICBpZiAobmV4dFN0YXR1cyA9PT0gRU5URVJJTkcpIHtcbiAgICAgICAgdGhpcy5wZXJmb3JtRW50ZXIobm9kZSwgbW91bnRpbmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5wZXJmb3JtRXhpdChub2RlKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHRoaXMucHJvcHMudW5tb3VudE9uRXhpdCAmJiB0aGlzLnN0YXRlLnN0YXR1cyA9PT0gRVhJVEVEKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgc3RhdHVzOiBVTk1PVU5URURcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8ucGVyZm9ybUVudGVyID0gZnVuY3Rpb24gcGVyZm9ybUVudGVyKG5vZGUsIG1vdW50aW5nKSB7XG4gICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICB2YXIgZW50ZXIgPSB0aGlzLnByb3BzLmVudGVyO1xuICAgIHZhciBhcHBlYXJpbmcgPSB0aGlzLmNvbnRleHQudHJhbnNpdGlvbkdyb3VwID8gdGhpcy5jb250ZXh0LnRyYW5zaXRpb25Hcm91cC5pc01vdW50aW5nIDogbW91bnRpbmc7XG4gICAgdmFyIHRpbWVvdXRzID0gdGhpcy5nZXRUaW1lb3V0cygpOyAvLyBubyBlbnRlciBhbmltYXRpb24gc2tpcCByaWdodCB0byBFTlRFUkVEXG4gICAgLy8gaWYgd2UgYXJlIG1vdW50aW5nIGFuZCBydW5uaW5nIHRoaXMgaXQgbWVhbnMgYXBwZWFyIF9tdXN0XyBiZSBzZXRcblxuICAgIGlmICghbW91bnRpbmcgJiYgIWVudGVyKSB7XG4gICAgICB0aGlzLnNhZmVTZXRTdGF0ZSh7XG4gICAgICAgIHN0YXR1czogRU5URVJFRFxuICAgICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICBfdGhpczIucHJvcHMub25FbnRlcmVkKG5vZGUpO1xuICAgICAgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5wcm9wcy5vbkVudGVyKG5vZGUsIGFwcGVhcmluZyk7XG4gICAgdGhpcy5zYWZlU2V0U3RhdGUoe1xuICAgICAgc3RhdHVzOiBFTlRFUklOR1xuICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgIF90aGlzMi5wcm9wcy5vbkVudGVyaW5nKG5vZGUsIGFwcGVhcmluZyk7IC8vIEZJWE1FOiBhcHBlYXIgdGltZW91dD9cblxuXG4gICAgICBfdGhpczIub25UcmFuc2l0aW9uRW5kKG5vZGUsIHRpbWVvdXRzLmVudGVyLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIF90aGlzMi5zYWZlU2V0U3RhdGUoe1xuICAgICAgICAgIHN0YXR1czogRU5URVJFRFxuICAgICAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgX3RoaXMyLnByb3BzLm9uRW50ZXJlZChub2RlLCBhcHBlYXJpbmcpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIF9wcm90by5wZXJmb3JtRXhpdCA9IGZ1bmN0aW9uIHBlcmZvcm1FeGl0KG5vZGUpIHtcbiAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgIHZhciBleGl0ID0gdGhpcy5wcm9wcy5leGl0O1xuICAgIHZhciB0aW1lb3V0cyA9IHRoaXMuZ2V0VGltZW91dHMoKTsgLy8gbm8gZXhpdCBhbmltYXRpb24gc2tpcCByaWdodCB0byBFWElURURcblxuICAgIGlmICghZXhpdCkge1xuICAgICAgdGhpcy5zYWZlU2V0U3RhdGUoe1xuICAgICAgICBzdGF0dXM6IEVYSVRFRFxuICAgICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICBfdGhpczMucHJvcHMub25FeGl0ZWQobm9kZSk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnByb3BzLm9uRXhpdChub2RlKTtcbiAgICB0aGlzLnNhZmVTZXRTdGF0ZSh7XG4gICAgICBzdGF0dXM6IEVYSVRJTkdcbiAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICBfdGhpczMucHJvcHMub25FeGl0aW5nKG5vZGUpO1xuXG4gICAgICBfdGhpczMub25UcmFuc2l0aW9uRW5kKG5vZGUsIHRpbWVvdXRzLmV4aXQsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgX3RoaXMzLnNhZmVTZXRTdGF0ZSh7XG4gICAgICAgICAgc3RhdHVzOiBFWElURURcbiAgICAgICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIF90aGlzMy5wcm9wcy5vbkV4aXRlZChub2RlKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICBfcHJvdG8uY2FuY2VsTmV4dENhbGxiYWNrID0gZnVuY3Rpb24gY2FuY2VsTmV4dENhbGxiYWNrKCkge1xuICAgIGlmICh0aGlzLm5leHRDYWxsYmFjayAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5uZXh0Q2FsbGJhY2suY2FuY2VsKCk7XG4gICAgICB0aGlzLm5leHRDYWxsYmFjayA9IG51bGw7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5zYWZlU2V0U3RhdGUgPSBmdW5jdGlvbiBzYWZlU2V0U3RhdGUobmV4dFN0YXRlLCBjYWxsYmFjaykge1xuICAgIC8vIFRoaXMgc2hvdWxkbid0IGJlIG5lY2Vzc2FyeSwgYnV0IHRoZXJlIGFyZSB3ZWlyZCByYWNlIGNvbmRpdGlvbnMgd2l0aFxuICAgIC8vIHNldFN0YXRlIGNhbGxiYWNrcyBhbmQgdW5tb3VudGluZyBpbiB0ZXN0aW5nLCBzbyBhbHdheXMgbWFrZSBzdXJlIHRoYXRcbiAgICAvLyB3ZSBjYW4gY2FuY2VsIGFueSBwZW5kaW5nIHNldFN0YXRlIGNhbGxiYWNrcyBhZnRlciB3ZSB1bm1vdW50LlxuICAgIGNhbGxiYWNrID0gdGhpcy5zZXROZXh0Q2FsbGJhY2soY2FsbGJhY2spO1xuICAgIHRoaXMuc2V0U3RhdGUobmV4dFN0YXRlLCBjYWxsYmFjayk7XG4gIH07XG5cbiAgX3Byb3RvLnNldE5leHRDYWxsYmFjayA9IGZ1bmN0aW9uIHNldE5leHRDYWxsYmFjayhjYWxsYmFjaykge1xuICAgIHZhciBfdGhpczQgPSB0aGlzO1xuXG4gICAgdmFyIGFjdGl2ZSA9IHRydWU7XG5cbiAgICB0aGlzLm5leHRDYWxsYmFjayA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgaWYgKGFjdGl2ZSkge1xuICAgICAgICBhY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgX3RoaXM0Lm5leHRDYWxsYmFjayA9IG51bGw7XG4gICAgICAgIGNhbGxiYWNrKGV2ZW50KTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgdGhpcy5uZXh0Q2FsbGJhY2suY2FuY2VsID0gZnVuY3Rpb24gKCkge1xuICAgICAgYWN0aXZlID0gZmFsc2U7XG4gICAgfTtcblxuICAgIHJldHVybiB0aGlzLm5leHRDYWxsYmFjaztcbiAgfTtcblxuICBfcHJvdG8ub25UcmFuc2l0aW9uRW5kID0gZnVuY3Rpb24gb25UcmFuc2l0aW9uRW5kKG5vZGUsIHRpbWVvdXQsIGhhbmRsZXIpIHtcbiAgICB0aGlzLnNldE5leHRDYWxsYmFjayhoYW5kbGVyKTtcblxuICAgIGlmIChub2RlKSB7XG4gICAgICBpZiAodGhpcy5wcm9wcy5hZGRFbmRMaXN0ZW5lcikge1xuICAgICAgICB0aGlzLnByb3BzLmFkZEVuZExpc3RlbmVyKG5vZGUsIHRoaXMubmV4dENhbGxiYWNrKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRpbWVvdXQgIT0gbnVsbCkge1xuICAgICAgICBzZXRUaW1lb3V0KHRoaXMubmV4dENhbGxiYWNrLCB0aW1lb3V0KTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgc2V0VGltZW91dCh0aGlzLm5leHRDYWxsYmFjaywgMCk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIHN0YXR1cyA9IHRoaXMuc3RhdGUuc3RhdHVzO1xuXG4gICAgaWYgKHN0YXR1cyA9PT0gVU5NT1VOVEVEKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICB2YXIgX3RoaXMkcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICBjaGlsZHJlbiA9IF90aGlzJHByb3BzLmNoaWxkcmVuLFxuICAgICAgICBjaGlsZFByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UoX3RoaXMkcHJvcHMsIFtcImNoaWxkcmVuXCJdKTsgLy8gZmlsdGVyIHByb3BzIGZvciBUcmFuc3RpdGlvblxuXG5cbiAgICBkZWxldGUgY2hpbGRQcm9wcy5pbjtcbiAgICBkZWxldGUgY2hpbGRQcm9wcy5tb3VudE9uRW50ZXI7XG4gICAgZGVsZXRlIGNoaWxkUHJvcHMudW5tb3VudE9uRXhpdDtcbiAgICBkZWxldGUgY2hpbGRQcm9wcy5hcHBlYXI7XG4gICAgZGVsZXRlIGNoaWxkUHJvcHMuZW50ZXI7XG4gICAgZGVsZXRlIGNoaWxkUHJvcHMuZXhpdDtcbiAgICBkZWxldGUgY2hpbGRQcm9wcy50aW1lb3V0O1xuICAgIGRlbGV0ZSBjaGlsZFByb3BzLmFkZEVuZExpc3RlbmVyO1xuICAgIGRlbGV0ZSBjaGlsZFByb3BzLm9uRW50ZXI7XG4gICAgZGVsZXRlIGNoaWxkUHJvcHMub25FbnRlcmluZztcbiAgICBkZWxldGUgY2hpbGRQcm9wcy5vbkVudGVyZWQ7XG4gICAgZGVsZXRlIGNoaWxkUHJvcHMub25FeGl0O1xuICAgIGRlbGV0ZSBjaGlsZFByb3BzLm9uRXhpdGluZztcbiAgICBkZWxldGUgY2hpbGRQcm9wcy5vbkV4aXRlZDtcblxuICAgIGlmICh0eXBlb2YgY2hpbGRyZW4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiBjaGlsZHJlbihzdGF0dXMsIGNoaWxkUHJvcHMpO1xuICAgIH1cblxuICAgIHZhciBjaGlsZCA9IF9yZWFjdC5kZWZhdWx0LkNoaWxkcmVuLm9ubHkoY2hpbGRyZW4pO1xuXG4gICAgcmV0dXJuIF9yZWFjdC5kZWZhdWx0LmNsb25lRWxlbWVudChjaGlsZCwgY2hpbGRQcm9wcyk7XG4gIH07XG5cbiAgcmV0dXJuIFRyYW5zaXRpb247XG59KF9yZWFjdC5kZWZhdWx0LkNvbXBvbmVudCk7XG5cblRyYW5zaXRpb24uY29udGV4dFR5cGVzID0ge1xuICB0cmFuc2l0aW9uR3JvdXA6IFByb3BUeXBlcy5vYmplY3Rcbn07XG5UcmFuc2l0aW9uLmNoaWxkQ29udGV4dFR5cGVzID0ge1xuICB0cmFuc2l0aW9uR3JvdXA6IGZ1bmN0aW9uIHRyYW5zaXRpb25Hcm91cCgpIHt9XG59O1xuVHJhbnNpdGlvbi5wcm9wVHlwZXMgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyB7XG4gIC8qKlxuICAgKiBBIGBmdW5jdGlvbmAgY2hpbGQgY2FuIGJlIHVzZWQgaW5zdGVhZCBvZiBhIFJlYWN0IGVsZW1lbnQuXG4gICAqIFRoaXMgZnVuY3Rpb24gaXMgY2FsbGVkIHdpdGggdGhlIGN1cnJlbnQgdHJhbnNpdGlvbiBzdGF0dXNcbiAgICogKCdlbnRlcmluZycsICdlbnRlcmVkJywgJ2V4aXRpbmcnLCAnZXhpdGVkJywgJ3VubW91bnRlZCcpLCB3aGljaCBjYW4gYmUgdXNlZFxuICAgKiB0byBhcHBseSBjb250ZXh0IHNwZWNpZmljIHByb3BzIHRvIGEgY29tcG9uZW50LlxuICAgKlxuICAgKiBgYGBqc3hcbiAgICogPFRyYW5zaXRpb24gdGltZW91dD17MTUwfT5cbiAgICogICB7KHN0YXR1cykgPT4gKFxuICAgKiAgICAgPE15Q29tcG9uZW50IGNsYXNzTmFtZT17YGZhZGUgZmFkZS0ke3N0YXR1c31gfSAvPlxuICAgKiAgICl9XG4gICAqIDwvVHJhbnNpdGlvbj5cbiAgICogYGBgXG4gICAqL1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCwgUHJvcFR5cGVzLmVsZW1lbnQuaXNSZXF1aXJlZF0pLmlzUmVxdWlyZWQsXG5cbiAgLyoqXG4gICAqIFNob3cgdGhlIGNvbXBvbmVudDsgdHJpZ2dlcnMgdGhlIGVudGVyIG9yIGV4aXQgc3RhdGVzXG4gICAqL1xuICBpbjogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIEJ5IGRlZmF1bHQgdGhlIGNoaWxkIGNvbXBvbmVudCBpcyBtb3VudGVkIGltbWVkaWF0ZWx5IGFsb25nIHdpdGhcbiAgICogdGhlIHBhcmVudCBgVHJhbnNpdGlvbmAgY29tcG9uZW50LiBJZiB5b3Ugd2FudCB0byBcImxhenkgbW91bnRcIiB0aGUgY29tcG9uZW50IG9uIHRoZVxuICAgKiBmaXJzdCBgaW49e3RydWV9YCB5b3UgY2FuIHNldCBgbW91bnRPbkVudGVyYC4gQWZ0ZXIgdGhlIGZpcnN0IGVudGVyIHRyYW5zaXRpb24gdGhlIGNvbXBvbmVudCB3aWxsIHN0YXlcbiAgICogbW91bnRlZCwgZXZlbiBvbiBcImV4aXRlZFwiLCB1bmxlc3MgeW91IGFsc28gc3BlY2lmeSBgdW5tb3VudE9uRXhpdGAuXG4gICAqL1xuICBtb3VudE9uRW50ZXI6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBCeSBkZWZhdWx0IHRoZSBjaGlsZCBjb21wb25lbnQgc3RheXMgbW91bnRlZCBhZnRlciBpdCByZWFjaGVzIHRoZSBgJ2V4aXRlZCdgIHN0YXRlLlxuICAgKiBTZXQgYHVubW91bnRPbkV4aXRgIGlmIHlvdSdkIHByZWZlciB0byB1bm1vdW50IHRoZSBjb21wb25lbnQgYWZ0ZXIgaXQgZmluaXNoZXMgZXhpdGluZy5cbiAgICovXG4gIHVubW91bnRPbkV4aXQ6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBOb3JtYWxseSBhIGNvbXBvbmVudCBpcyBub3QgdHJhbnNpdGlvbmVkIGlmIGl0IGlzIHNob3duIHdoZW4gdGhlIGA8VHJhbnNpdGlvbj5gIGNvbXBvbmVudCBtb3VudHMuXG4gICAqIElmIHlvdSB3YW50IHRvIHRyYW5zaXRpb24gb24gdGhlIGZpcnN0IG1vdW50IHNldCBgYXBwZWFyYCB0byBgdHJ1ZWAsIGFuZCB0aGVcbiAgICogY29tcG9uZW50IHdpbGwgdHJhbnNpdGlvbiBpbiBhcyBzb29uIGFzIHRoZSBgPFRyYW5zaXRpb24+YCBtb3VudHMuXG4gICAqXG4gICAqID4gTm90ZTogdGhlcmUgYXJlIG5vIHNwZWNpZmljIFwiYXBwZWFyXCIgc3RhdGVzLiBgYXBwZWFyYCBvbmx5IGFkZHMgYW4gYWRkaXRpb25hbCBgZW50ZXJgIHRyYW5zaXRpb24uXG4gICAqL1xuICBhcHBlYXI6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBFbmFibGUgb3IgZGlzYWJsZSBlbnRlciB0cmFuc2l0aW9ucy5cbiAgICovXG4gIGVudGVyOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogRW5hYmxlIG9yIGRpc2FibGUgZXhpdCB0cmFuc2l0aW9ucy5cbiAgICovXG4gIGV4aXQ6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBUaGUgZHVyYXRpb24gb2YgdGhlIHRyYW5zaXRpb24sIGluIG1pbGxpc2Vjb25kcy5cbiAgICogUmVxdWlyZWQgdW5sZXNzIGBhZGRFbmRMaXN0ZW5lcmAgaXMgcHJvdmlkZWRcbiAgICpcbiAgICogWW91IG1heSBzcGVjaWZ5IGEgc2luZ2xlIHRpbWVvdXQgZm9yIGFsbCB0cmFuc2l0aW9ucyBsaWtlOiBgdGltZW91dD17NTAwfWAsXG4gICAqIG9yIGluZGl2aWR1YWxseSBsaWtlOlxuICAgKlxuICAgKiBgYGBqc3hcbiAgICogdGltZW91dD17e1xuICAgKiAgZW50ZXI6IDMwMCxcbiAgICogIGV4aXQ6IDUwMCxcbiAgICogfX1cbiAgICogYGBgXG4gICAqXG4gICAqIEB0eXBlIHtudW1iZXIgfCB7IGVudGVyPzogbnVtYmVyLCBleGl0PzogbnVtYmVyIH19XG4gICAqL1xuICB0aW1lb3V0OiBmdW5jdGlvbiB0aW1lb3V0KHByb3BzKSB7XG4gICAgdmFyIHB0ID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gX1Byb3BUeXBlcy50aW1lb3V0c1NoYXBlIDoge307O1xuICAgIGlmICghcHJvcHMuYWRkRW5kTGlzdGVuZXIpIHB0ID0gcHQuaXNSZXF1aXJlZDtcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHJldHVybiBwdC5hcHBseSh2b2lkIDAsIFtwcm9wc10uY29uY2F0KGFyZ3MpKTtcbiAgfSxcblxuICAvKipcbiAgICogQWRkIGEgY3VzdG9tIHRyYW5zaXRpb24gZW5kIHRyaWdnZXIuIENhbGxlZCB3aXRoIHRoZSB0cmFuc2l0aW9uaW5nXG4gICAqIERPTSBub2RlIGFuZCBhIGBkb25lYCBjYWxsYmFjay4gQWxsb3dzIGZvciBtb3JlIGZpbmUgZ3JhaW5lZCB0cmFuc2l0aW9uIGVuZFxuICAgKiBsb2dpYy4gKipOb3RlOioqIFRpbWVvdXRzIGFyZSBzdGlsbCB1c2VkIGFzIGEgZmFsbGJhY2sgaWYgcHJvdmlkZWQuXG4gICAqXG4gICAqIGBgYGpzeFxuICAgKiBhZGRFbmRMaXN0ZW5lcj17KG5vZGUsIGRvbmUpID0+IHtcbiAgICogICAvLyB1c2UgdGhlIGNzcyB0cmFuc2l0aW9uZW5kIGV2ZW50IHRvIG1hcmsgdGhlIGZpbmlzaCBvZiBhIHRyYW5zaXRpb25cbiAgICogICBub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCBkb25lLCBmYWxzZSk7XG4gICAqIH19XG4gICAqIGBgYFxuICAgKi9cbiAgYWRkRW5kTGlzdGVuZXI6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmaXJlZCBiZWZvcmUgdGhlIFwiZW50ZXJpbmdcIiBzdGF0dXMgaXMgYXBwbGllZC4gQW4gZXh0cmEgcGFyYW1ldGVyXG4gICAqIGBpc0FwcGVhcmluZ2AgaXMgc3VwcGxpZWQgdG8gaW5kaWNhdGUgaWYgdGhlIGVudGVyIHN0YWdlIGlzIG9jY3VycmluZyBvbiB0aGUgaW5pdGlhbCBtb3VudFxuICAgKlxuICAgKiBAdHlwZSBGdW5jdGlvbihub2RlOiBIdG1sRWxlbWVudCwgaXNBcHBlYXJpbmc6IGJvb2wpIC0+IHZvaWRcbiAgICovXG4gIG9uRW50ZXI6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmaXJlZCBhZnRlciB0aGUgXCJlbnRlcmluZ1wiIHN0YXR1cyBpcyBhcHBsaWVkLiBBbiBleHRyYSBwYXJhbWV0ZXJcbiAgICogYGlzQXBwZWFyaW5nYCBpcyBzdXBwbGllZCB0byBpbmRpY2F0ZSBpZiB0aGUgZW50ZXIgc3RhZ2UgaXMgb2NjdXJyaW5nIG9uIHRoZSBpbml0aWFsIG1vdW50XG4gICAqXG4gICAqIEB0eXBlIEZ1bmN0aW9uKG5vZGU6IEh0bWxFbGVtZW50LCBpc0FwcGVhcmluZzogYm9vbClcbiAgICovXG4gIG9uRW50ZXJpbmc6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmaXJlZCBhZnRlciB0aGUgXCJlbnRlcmVkXCIgc3RhdHVzIGlzIGFwcGxpZWQuIEFuIGV4dHJhIHBhcmFtZXRlclxuICAgKiBgaXNBcHBlYXJpbmdgIGlzIHN1cHBsaWVkIHRvIGluZGljYXRlIGlmIHRoZSBlbnRlciBzdGFnZSBpcyBvY2N1cnJpbmcgb24gdGhlIGluaXRpYWwgbW91bnRcbiAgICpcbiAgICogQHR5cGUgRnVuY3Rpb24obm9kZTogSHRtbEVsZW1lbnQsIGlzQXBwZWFyaW5nOiBib29sKSAtPiB2b2lkXG4gICAqL1xuICBvbkVudGVyZWQ6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmaXJlZCBiZWZvcmUgdGhlIFwiZXhpdGluZ1wiIHN0YXR1cyBpcyBhcHBsaWVkLlxuICAgKlxuICAgKiBAdHlwZSBGdW5jdGlvbihub2RlOiBIdG1sRWxlbWVudCkgLT4gdm9pZFxuICAgKi9cbiAgb25FeGl0OiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQ2FsbGJhY2sgZmlyZWQgYWZ0ZXIgdGhlIFwiZXhpdGluZ1wiIHN0YXR1cyBpcyBhcHBsaWVkLlxuICAgKlxuICAgKiBAdHlwZSBGdW5jdGlvbihub2RlOiBIdG1sRWxlbWVudCkgLT4gdm9pZFxuICAgKi9cbiAgb25FeGl0aW5nOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQ2FsbGJhY2sgZmlyZWQgYWZ0ZXIgdGhlIFwiZXhpdGVkXCIgc3RhdHVzIGlzIGFwcGxpZWQuXG4gICAqXG4gICAqIEB0eXBlIEZ1bmN0aW9uKG5vZGU6IEh0bWxFbGVtZW50KSAtPiB2b2lkXG4gICAqL1xuICBvbkV4aXRlZDogUHJvcFR5cGVzLmZ1bmMgLy8gTmFtZSB0aGUgZnVuY3Rpb24gc28gaXQgaXMgY2xlYXJlciBpbiB0aGUgZG9jdW1lbnRhdGlvblxuXG59IDoge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5UcmFuc2l0aW9uLmRlZmF1bHRQcm9wcyA9IHtcbiAgaW46IGZhbHNlLFxuICBtb3VudE9uRW50ZXI6IGZhbHNlLFxuICB1bm1vdW50T25FeGl0OiBmYWxzZSxcbiAgYXBwZWFyOiBmYWxzZSxcbiAgZW50ZXI6IHRydWUsXG4gIGV4aXQ6IHRydWUsXG4gIG9uRW50ZXI6IG5vb3AsXG4gIG9uRW50ZXJpbmc6IG5vb3AsXG4gIG9uRW50ZXJlZDogbm9vcCxcbiAgb25FeGl0OiBub29wLFxuICBvbkV4aXRpbmc6IG5vb3AsXG4gIG9uRXhpdGVkOiBub29wXG59O1xuVHJhbnNpdGlvbi5VTk1PVU5URUQgPSAwO1xuVHJhbnNpdGlvbi5FWElURUQgPSAxO1xuVHJhbnNpdGlvbi5FTlRFUklORyA9IDI7XG5UcmFuc2l0aW9uLkVOVEVSRUQgPSAzO1xuVHJhbnNpdGlvbi5FWElUSU5HID0gNDtcblxudmFyIF9kZWZhdWx0ID0gKDAsIF9yZWFjdExpZmVjeWNsZXNDb21wYXQucG9seWZpbGwpKFRyYW5zaXRpb24pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIFByb3BUeXBlcyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpKTtcblxudmFyIF9hZGRDbGFzcyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcImRvbS1oZWxwZXJzL2NsYXNzL2FkZENsYXNzXCIpKTtcblxudmFyIF9yZW1vdmVDbGFzcyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcImRvbS1oZWxwZXJzL2NsYXNzL3JlbW92ZUNsYXNzXCIpKTtcblxudmFyIF9yZWFjdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcblxudmFyIF9UcmFuc2l0aW9uID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9UcmFuc2l0aW9uXCIpKTtcblxudmFyIF9Qcm9wVHlwZXMgPSByZXF1aXJlKFwiLi91dGlscy9Qcm9wVHlwZXNcIik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikgeyBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7IHJldHVybiBvYmo7IH0gZWxzZSB7IHZhciBuZXdPYmogPSB7fTsgaWYgKG9iaiAhPSBudWxsKSB7IGZvciAodmFyIGtleSBpbiBvYmopIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHsgdmFyIGRlc2MgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDoge307IGlmIChkZXNjLmdldCB8fCBkZXNjLnNldCkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpOyB9IGVsc2UgeyBuZXdPYmpba2V5XSA9IG9ialtrZXldOyB9IH0gfSB9IG5ld09iai5kZWZhdWx0ID0gb2JqOyByZXR1cm4gbmV3T2JqOyB9IH1cblxuZnVuY3Rpb24gX2V4dGVuZHMoKSB7IF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTsgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzTG9vc2Uoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzLnByb3RvdHlwZSk7IHN1YkNsYXNzLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IHN1YkNsYXNzOyBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBhZGRDbGFzcyA9IGZ1bmN0aW9uIGFkZENsYXNzKG5vZGUsIGNsYXNzZXMpIHtcbiAgcmV0dXJuIG5vZGUgJiYgY2xhc3NlcyAmJiBjbGFzc2VzLnNwbGl0KCcgJykuZm9yRWFjaChmdW5jdGlvbiAoYykge1xuICAgIHJldHVybiAoMCwgX2FkZENsYXNzLmRlZmF1bHQpKG5vZGUsIGMpO1xuICB9KTtcbn07XG5cbnZhciByZW1vdmVDbGFzcyA9IGZ1bmN0aW9uIHJlbW92ZUNsYXNzKG5vZGUsIGNsYXNzZXMpIHtcbiAgcmV0dXJuIG5vZGUgJiYgY2xhc3NlcyAmJiBjbGFzc2VzLnNwbGl0KCcgJykuZm9yRWFjaChmdW5jdGlvbiAoYykge1xuICAgIHJldHVybiAoMCwgX3JlbW92ZUNsYXNzLmRlZmF1bHQpKG5vZGUsIGMpO1xuICB9KTtcbn07XG4vKipcbiAqIEEgYFRyYW5zaXRpb25gIGNvbXBvbmVudCB1c2luZyBDU1MgdHJhbnNpdGlvbnMgYW5kIGFuaW1hdGlvbnMuXG4gKiBJdCdzIGluc3BpcmVkIGJ5IHRoZSBleGNlbGxlbnQgW25nLWFuaW1hdGVdKGh0dHA6Ly93d3cubmdhbmltYXRlLm9yZy8pIGxpYnJhcnkuXG4gKlxuICogYENTU1RyYW5zaXRpb25gIGFwcGxpZXMgYSBwYWlyIG9mIGNsYXNzIG5hbWVzIGR1cmluZyB0aGUgYGFwcGVhcmAsIGBlbnRlcmAsXG4gKiBhbmQgYGV4aXRgIHN0YWdlcyBvZiB0aGUgdHJhbnNpdGlvbi4gVGhlIGZpcnN0IGNsYXNzIGlzIGFwcGxpZWQgYW5kIHRoZW4gYVxuICogc2Vjb25kIFwiYWN0aXZlXCIgY2xhc3MgaW4gb3JkZXIgdG8gYWN0aXZhdGUgdGhlIGNzcyBhbmltYXRpb24uIEFmdGVyIHRoZSBhbmltYXRpb24sXG4gKiBtYXRjaGluZyBgZG9uZWAgY2xhc3MgbmFtZXMgYXJlIGFwcGxpZWQgdG8gcGVyc2lzdCB0aGUgYW5pbWF0aW9uIHN0YXRlLlxuICpcbiAqIFdoZW4gdGhlIGBpbmAgcHJvcCBpcyB0b2dnbGVkIHRvIGB0cnVlYCB0aGUgQ29tcG9uZW50IHdpbGwgZ2V0XG4gKiB0aGUgYGV4YW1wbGUtZW50ZXJgIENTUyBjbGFzcyBhbmQgdGhlIGBleGFtcGxlLWVudGVyLWFjdGl2ZWAgQ1NTIGNsYXNzXG4gKiBhZGRlZCBpbiB0aGUgbmV4dCB0aWNrLiBUaGlzIGlzIGEgY29udmVudGlvbiBiYXNlZCBvbiB0aGUgYGNsYXNzTmFtZXNgIHByb3AuXG4gKi9cblxuXG52YXIgQ1NTVHJhbnNpdGlvbiA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHNMb29zZShDU1NUcmFuc2l0aW9uLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBDU1NUcmFuc2l0aW9uKCkge1xuICAgIHZhciBfdGhpcztcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICBfdGhpcyA9IF9SZWFjdCRDb21wb25lbnQuY2FsbC5hcHBseShfUmVhY3QkQ29tcG9uZW50LCBbdGhpc10uY29uY2F0KGFyZ3MpKSB8fCB0aGlzO1xuXG4gICAgX3RoaXMub25FbnRlciA9IGZ1bmN0aW9uIChub2RlLCBhcHBlYXJpbmcpIHtcbiAgICAgIHZhciBfdGhpcyRnZXRDbGFzc05hbWVzID0gX3RoaXMuZ2V0Q2xhc3NOYW1lcyhhcHBlYXJpbmcgPyAnYXBwZWFyJyA6ICdlbnRlcicpLFxuICAgICAgICAgIGNsYXNzTmFtZSA9IF90aGlzJGdldENsYXNzTmFtZXMuY2xhc3NOYW1lO1xuXG4gICAgICBfdGhpcy5yZW1vdmVDbGFzc2VzKG5vZGUsICdleGl0Jyk7XG5cbiAgICAgIGFkZENsYXNzKG5vZGUsIGNsYXNzTmFtZSk7XG5cbiAgICAgIGlmIChfdGhpcy5wcm9wcy5vbkVudGVyKSB7XG4gICAgICAgIF90aGlzLnByb3BzLm9uRW50ZXIobm9kZSwgYXBwZWFyaW5nKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3RoaXMub25FbnRlcmluZyA9IGZ1bmN0aW9uIChub2RlLCBhcHBlYXJpbmcpIHtcbiAgICAgIHZhciBfdGhpcyRnZXRDbGFzc05hbWVzMiA9IF90aGlzLmdldENsYXNzTmFtZXMoYXBwZWFyaW5nID8gJ2FwcGVhcicgOiAnZW50ZXInKSxcbiAgICAgICAgICBhY3RpdmVDbGFzc05hbWUgPSBfdGhpcyRnZXRDbGFzc05hbWVzMi5hY3RpdmVDbGFzc05hbWU7XG5cbiAgICAgIF90aGlzLnJlZmxvd0FuZEFkZENsYXNzKG5vZGUsIGFjdGl2ZUNsYXNzTmFtZSk7XG5cbiAgICAgIGlmIChfdGhpcy5wcm9wcy5vbkVudGVyaW5nKSB7XG4gICAgICAgIF90aGlzLnByb3BzLm9uRW50ZXJpbmcobm9kZSwgYXBwZWFyaW5nKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3RoaXMub25FbnRlcmVkID0gZnVuY3Rpb24gKG5vZGUsIGFwcGVhcmluZykge1xuICAgICAgdmFyIF90aGlzJGdldENsYXNzTmFtZXMzID0gX3RoaXMuZ2V0Q2xhc3NOYW1lcygnZW50ZXInKSxcbiAgICAgICAgICBkb25lQ2xhc3NOYW1lID0gX3RoaXMkZ2V0Q2xhc3NOYW1lczMuZG9uZUNsYXNzTmFtZTtcblxuICAgICAgX3RoaXMucmVtb3ZlQ2xhc3Nlcyhub2RlLCBhcHBlYXJpbmcgPyAnYXBwZWFyJyA6ICdlbnRlcicpO1xuXG4gICAgICBhZGRDbGFzcyhub2RlLCBkb25lQ2xhc3NOYW1lKTtcblxuICAgICAgaWYgKF90aGlzLnByb3BzLm9uRW50ZXJlZCkge1xuICAgICAgICBfdGhpcy5wcm9wcy5vbkVudGVyZWQobm9kZSwgYXBwZWFyaW5nKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3RoaXMub25FeGl0ID0gZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgIHZhciBfdGhpcyRnZXRDbGFzc05hbWVzNCA9IF90aGlzLmdldENsYXNzTmFtZXMoJ2V4aXQnKSxcbiAgICAgICAgICBjbGFzc05hbWUgPSBfdGhpcyRnZXRDbGFzc05hbWVzNC5jbGFzc05hbWU7XG5cbiAgICAgIF90aGlzLnJlbW92ZUNsYXNzZXMobm9kZSwgJ2FwcGVhcicpO1xuXG4gICAgICBfdGhpcy5yZW1vdmVDbGFzc2VzKG5vZGUsICdlbnRlcicpO1xuXG4gICAgICBhZGRDbGFzcyhub2RlLCBjbGFzc05hbWUpO1xuXG4gICAgICBpZiAoX3RoaXMucHJvcHMub25FeGl0KSB7XG4gICAgICAgIF90aGlzLnByb3BzLm9uRXhpdChub2RlKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3RoaXMub25FeGl0aW5nID0gZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgIHZhciBfdGhpcyRnZXRDbGFzc05hbWVzNSA9IF90aGlzLmdldENsYXNzTmFtZXMoJ2V4aXQnKSxcbiAgICAgICAgICBhY3RpdmVDbGFzc05hbWUgPSBfdGhpcyRnZXRDbGFzc05hbWVzNS5hY3RpdmVDbGFzc05hbWU7XG5cbiAgICAgIF90aGlzLnJlZmxvd0FuZEFkZENsYXNzKG5vZGUsIGFjdGl2ZUNsYXNzTmFtZSk7XG5cbiAgICAgIGlmIChfdGhpcy5wcm9wcy5vbkV4aXRpbmcpIHtcbiAgICAgICAgX3RoaXMucHJvcHMub25FeGl0aW5nKG5vZGUpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfdGhpcy5vbkV4aXRlZCA9IGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICB2YXIgX3RoaXMkZ2V0Q2xhc3NOYW1lczYgPSBfdGhpcy5nZXRDbGFzc05hbWVzKCdleGl0JyksXG4gICAgICAgICAgZG9uZUNsYXNzTmFtZSA9IF90aGlzJGdldENsYXNzTmFtZXM2LmRvbmVDbGFzc05hbWU7XG5cbiAgICAgIF90aGlzLnJlbW92ZUNsYXNzZXMobm9kZSwgJ2V4aXQnKTtcblxuICAgICAgYWRkQ2xhc3Mobm9kZSwgZG9uZUNsYXNzTmFtZSk7XG5cbiAgICAgIGlmIChfdGhpcy5wcm9wcy5vbkV4aXRlZCkge1xuICAgICAgICBfdGhpcy5wcm9wcy5vbkV4aXRlZChub2RlKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3RoaXMuZ2V0Q2xhc3NOYW1lcyA9IGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgICB2YXIgY2xhc3NOYW1lcyA9IF90aGlzLnByb3BzLmNsYXNzTmFtZXM7XG4gICAgICB2YXIgY2xhc3NOYW1lID0gdHlwZW9mIGNsYXNzTmFtZXMgIT09ICdzdHJpbmcnID8gY2xhc3NOYW1lc1t0eXBlXSA6IGNsYXNzTmFtZXMgKyAnLScgKyB0eXBlO1xuICAgICAgdmFyIGFjdGl2ZUNsYXNzTmFtZSA9IHR5cGVvZiBjbGFzc05hbWVzICE9PSAnc3RyaW5nJyA/IGNsYXNzTmFtZXNbdHlwZSArICdBY3RpdmUnXSA6IGNsYXNzTmFtZSArICctYWN0aXZlJztcbiAgICAgIHZhciBkb25lQ2xhc3NOYW1lID0gdHlwZW9mIGNsYXNzTmFtZXMgIT09ICdzdHJpbmcnID8gY2xhc3NOYW1lc1t0eXBlICsgJ0RvbmUnXSA6IGNsYXNzTmFtZSArICctZG9uZSc7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBjbGFzc05hbWU6IGNsYXNzTmFtZSxcbiAgICAgICAgYWN0aXZlQ2xhc3NOYW1lOiBhY3RpdmVDbGFzc05hbWUsXG4gICAgICAgIGRvbmVDbGFzc05hbWU6IGRvbmVDbGFzc05hbWVcbiAgICAgIH07XG4gICAgfTtcblxuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBDU1NUcmFuc2l0aW9uLnByb3RvdHlwZTtcblxuICBfcHJvdG8ucmVtb3ZlQ2xhc3NlcyA9IGZ1bmN0aW9uIHJlbW92ZUNsYXNzZXMobm9kZSwgdHlwZSkge1xuICAgIHZhciBfdGhpcyRnZXRDbGFzc05hbWVzNyA9IHRoaXMuZ2V0Q2xhc3NOYW1lcyh0eXBlKSxcbiAgICAgICAgY2xhc3NOYW1lID0gX3RoaXMkZ2V0Q2xhc3NOYW1lczcuY2xhc3NOYW1lLFxuICAgICAgICBhY3RpdmVDbGFzc05hbWUgPSBfdGhpcyRnZXRDbGFzc05hbWVzNy5hY3RpdmVDbGFzc05hbWUsXG4gICAgICAgIGRvbmVDbGFzc05hbWUgPSBfdGhpcyRnZXRDbGFzc05hbWVzNy5kb25lQ2xhc3NOYW1lO1xuXG4gICAgY2xhc3NOYW1lICYmIHJlbW92ZUNsYXNzKG5vZGUsIGNsYXNzTmFtZSk7XG4gICAgYWN0aXZlQ2xhc3NOYW1lICYmIHJlbW92ZUNsYXNzKG5vZGUsIGFjdGl2ZUNsYXNzTmFtZSk7XG4gICAgZG9uZUNsYXNzTmFtZSAmJiByZW1vdmVDbGFzcyhub2RlLCBkb25lQ2xhc3NOYW1lKTtcbiAgfTtcblxuICBfcHJvdG8ucmVmbG93QW5kQWRkQ2xhc3MgPSBmdW5jdGlvbiByZWZsb3dBbmRBZGRDbGFzcyhub2RlLCBjbGFzc05hbWUpIHtcbiAgICAvLyBUaGlzIGlzIGZvciB0byBmb3JjZSBhIHJlcGFpbnQsXG4gICAgLy8gd2hpY2ggaXMgbmVjZXNzYXJ5IGluIG9yZGVyIHRvIHRyYW5zaXRpb24gc3R5bGVzIHdoZW4gYWRkaW5nIGEgY2xhc3MgbmFtZS5cbiAgICBpZiAoY2xhc3NOYW1lKSB7XG4gICAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtZXhwcmVzc2lvbnMgKi9cbiAgICAgIG5vZGUgJiYgbm9kZS5zY3JvbGxUb3A7XG4gICAgICAvKiBlc2xpbnQtZW5hYmxlIG5vLXVudXNlZC1leHByZXNzaW9ucyAqL1xuXG4gICAgICBhZGRDbGFzcyhub2RlLCBjbGFzc05hbWUpO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8ucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBwcm9wcyA9IF9leHRlbmRzKHt9LCB0aGlzLnByb3BzKTtcblxuICAgIGRlbGV0ZSBwcm9wcy5jbGFzc05hbWVzO1xuICAgIHJldHVybiBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9UcmFuc2l0aW9uLmRlZmF1bHQsIF9leHRlbmRzKHt9LCBwcm9wcywge1xuICAgICAgb25FbnRlcjogdGhpcy5vbkVudGVyLFxuICAgICAgb25FbnRlcmVkOiB0aGlzLm9uRW50ZXJlZCxcbiAgICAgIG9uRW50ZXJpbmc6IHRoaXMub25FbnRlcmluZyxcbiAgICAgIG9uRXhpdDogdGhpcy5vbkV4aXQsXG4gICAgICBvbkV4aXRpbmc6IHRoaXMub25FeGl0aW5nLFxuICAgICAgb25FeGl0ZWQ6IHRoaXMub25FeGl0ZWRcbiAgICB9KSk7XG4gIH07XG5cbiAgcmV0dXJuIENTU1RyYW5zaXRpb247XG59KF9yZWFjdC5kZWZhdWx0LkNvbXBvbmVudCk7XG5cbkNTU1RyYW5zaXRpb24ucHJvcFR5cGVzID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gX2V4dGVuZHMoe30sIF9UcmFuc2l0aW9uLmRlZmF1bHQucHJvcFR5cGVzLCB7XG4gIC8qKlxuICAgKiBUaGUgYW5pbWF0aW9uIGNsYXNzTmFtZXMgYXBwbGllZCB0byB0aGUgY29tcG9uZW50IGFzIGl0IGVudGVycywgZXhpdHMgb3IgaGFzIGZpbmlzaGVkIHRoZSB0cmFuc2l0aW9uLlxuICAgKiBBIHNpbmdsZSBuYW1lIGNhbiBiZSBwcm92aWRlZCBhbmQgaXQgd2lsbCBiZSBzdWZmaXhlZCBmb3IgZWFjaCBzdGFnZTogZS5nLlxuICAgKlxuICAgKiBgY2xhc3NOYW1lcz1cImZhZGVcImAgYXBwbGllcyBgZmFkZS1lbnRlcmAsIGBmYWRlLWVudGVyLWFjdGl2ZWAsIGBmYWRlLWVudGVyLWRvbmVgLFxuICAgKiBgZmFkZS1leGl0YCwgYGZhZGUtZXhpdC1hY3RpdmVgLCBgZmFkZS1leGl0LWRvbmVgLCBgZmFkZS1hcHBlYXJgLCBhbmQgYGZhZGUtYXBwZWFyLWFjdGl2ZWAuXG4gICAqIEVhY2ggaW5kaXZpZHVhbCBjbGFzc05hbWVzIGNhbiBhbHNvIGJlIHNwZWNpZmllZCBpbmRlcGVuZGVudGx5IGxpa2U6XG4gICAqXG4gICAqIGBgYGpzXG4gICAqIGNsYXNzTmFtZXM9e3tcbiAgICogIGFwcGVhcjogJ215LWFwcGVhcicsXG4gICAqICBhcHBlYXJBY3RpdmU6ICdteS1hY3RpdmUtYXBwZWFyJyxcbiAgICogIGVudGVyOiAnbXktZW50ZXInLFxuICAgKiAgZW50ZXJBY3RpdmU6ICdteS1hY3RpdmUtZW50ZXInLFxuICAgKiAgZW50ZXJEb25lOiAnbXktZG9uZS1lbnRlcicsXG4gICAqICBleGl0OiAnbXktZXhpdCcsXG4gICAqICBleGl0QWN0aXZlOiAnbXktYWN0aXZlLWV4aXQnLFxuICAgKiAgZXhpdERvbmU6ICdteS1kb25lLWV4aXQnLFxuICAgKiB9fVxuICAgKiBgYGBcbiAgICpcbiAgICogSWYgeW91IHdhbnQgdG8gc2V0IHRoZXNlIGNsYXNzZXMgdXNpbmcgQ1NTIE1vZHVsZXM6XG4gICAqXG4gICAqIGBgYGpzXG4gICAqIGltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMuY3NzJztcbiAgICogYGBgXG4gICAqXG4gICAqIHlvdSBtaWdodCB3YW50IHRvIHVzZSBjYW1lbENhc2UgaW4geW91ciBDU1MgZmlsZSwgdGhhdCB3YXkgY291bGQgc2ltcGx5IHNwcmVhZFxuICAgKiB0aGVtIGluc3RlYWQgb2YgbGlzdGluZyB0aGVtIG9uZSBieSBvbmU6XG4gICAqXG4gICAqIGBgYGpzXG4gICAqIGNsYXNzTmFtZXM9e3sgLi4uc3R5bGVzIH19XG4gICAqIGBgYFxuICAgKlxuICAgKiBAdHlwZSB7c3RyaW5nIHwge1xuICAgKiAgYXBwZWFyPzogc3RyaW5nLFxuICAgKiAgYXBwZWFyQWN0aXZlPzogc3RyaW5nLFxuICAgKiAgZW50ZXI/OiBzdHJpbmcsXG4gICAqICBlbnRlckFjdGl2ZT86IHN0cmluZyxcbiAgICogIGVudGVyRG9uZT86IHN0cmluZyxcbiAgICogIGV4aXQ/OiBzdHJpbmcsXG4gICAqICBleGl0QWN0aXZlPzogc3RyaW5nLFxuICAgKiAgZXhpdERvbmU/OiBzdHJpbmcsXG4gICAqIH19XG4gICAqL1xuICBjbGFzc05hbWVzOiBfUHJvcFR5cGVzLmNsYXNzTmFtZXNTaGFwZSxcblxuICAvKipcbiAgICogQSBgPFRyYW5zaXRpb24+YCBjYWxsYmFjayBmaXJlZCBpbW1lZGlhdGVseSBhZnRlciB0aGUgJ2VudGVyJyBvciAnYXBwZWFyJyBjbGFzcyBpc1xuICAgKiBhcHBsaWVkLlxuICAgKlxuICAgKiBAdHlwZSBGdW5jdGlvbihub2RlOiBIdG1sRWxlbWVudCwgaXNBcHBlYXJpbmc6IGJvb2wpXG4gICAqL1xuICBvbkVudGVyOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQSBgPFRyYW5zaXRpb24+YCBjYWxsYmFjayBmaXJlZCBpbW1lZGlhdGVseSBhZnRlciB0aGUgJ2VudGVyLWFjdGl2ZScgb3JcbiAgICogJ2FwcGVhci1hY3RpdmUnIGNsYXNzIGlzIGFwcGxpZWQuXG4gICAqXG4gICAqIEB0eXBlIEZ1bmN0aW9uKG5vZGU6IEh0bWxFbGVtZW50LCBpc0FwcGVhcmluZzogYm9vbClcbiAgICovXG4gIG9uRW50ZXJpbmc6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBBIGA8VHJhbnNpdGlvbj5gIGNhbGxiYWNrIGZpcmVkIGltbWVkaWF0ZWx5IGFmdGVyIHRoZSAnZW50ZXInIG9yXG4gICAqICdhcHBlYXInIGNsYXNzZXMgYXJlICoqcmVtb3ZlZCoqIGFuZCB0aGUgYGRvbmVgIGNsYXNzIGlzIGFkZGVkIHRvIHRoZSBET00gbm9kZS5cbiAgICpcbiAgICogQHR5cGUgRnVuY3Rpb24obm9kZTogSHRtbEVsZW1lbnQsIGlzQXBwZWFyaW5nOiBib29sKVxuICAgKi9cbiAgb25FbnRlcmVkOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQSBgPFRyYW5zaXRpb24+YCBjYWxsYmFjayBmaXJlZCBpbW1lZGlhdGVseSBhZnRlciB0aGUgJ2V4aXQnIGNsYXNzIGlzXG4gICAqIGFwcGxpZWQuXG4gICAqXG4gICAqIEB0eXBlIEZ1bmN0aW9uKG5vZGU6IEh0bWxFbGVtZW50KVxuICAgKi9cbiAgb25FeGl0OiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQSBgPFRyYW5zaXRpb24+YCBjYWxsYmFjayBmaXJlZCBpbW1lZGlhdGVseSBhZnRlciB0aGUgJ2V4aXQtYWN0aXZlJyBpcyBhcHBsaWVkLlxuICAgKlxuICAgKiBAdHlwZSBGdW5jdGlvbihub2RlOiBIdG1sRWxlbWVudClcbiAgICovXG4gIG9uRXhpdGluZzogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIEEgYDxUcmFuc2l0aW9uPmAgY2FsbGJhY2sgZmlyZWQgaW1tZWRpYXRlbHkgYWZ0ZXIgdGhlICdleGl0JyBjbGFzc2VzXG4gICAqIGFyZSAqKnJlbW92ZWQqKiBhbmQgdGhlIGBleGl0LWRvbmVgIGNsYXNzIGlzIGFkZGVkIHRvIHRoZSBET00gbm9kZS5cbiAgICpcbiAgICogQHR5cGUgRnVuY3Rpb24obm9kZTogSHRtbEVsZW1lbnQpXG4gICAqL1xuICBvbkV4aXRlZDogUHJvcFR5cGVzLmZ1bmNcbn0pIDoge307XG52YXIgX2RlZmF1bHQgPSBDU1NUcmFuc2l0aW9uO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdOyIsImltcG9ydCBSZWFjdCwgeyBjcmVhdGVSZWYsIFJlZk9iamVjdCwgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBDU1NUcmFuc2l0aW9uIGZyb20gJ3JlYWN0LXRyYW5zaXRpb24tZ3JvdXAvQ1NTVHJhbnNpdGlvbic7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7IENvbG9yVHlwZSwgQ1NTVHlwZSB9IGZyb20gJy4uLy4uL3R5cGVzJztcblxuY29uc3QgV3JhcHBlciA9IHN0eWxlZC5kaXY8eyBjc3M/OiBDU1NUeXBlIH0+YFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcblxuICBkaXZbcm9sZT1cInRvb2x0aXBcIl0ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBjbGVhcjogYm90aDtcbiAgICBib3gtc2hhZG93OiAwIDFweCAycHggMCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuICAgIHotaW5kZXg6IDk5OTk7XG4gICAgcGFkZGluZzogMC4zNzVyZW0gMC42MjVyZW07XG4gICAgY3Vyc29yOiBkZWZhdWx0O1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIHdoaXRlLXNwYWNlOiBwcmU7XG4gICAgZm9udC1zaXplOiAwLjg1cmVtO1xuXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjgpO1xuICAgIG9wYWNpdHk6IDA7XG5cbiAgICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtLCBvcGFjaXR5O1xuICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybSwgb3BhY2l0eTtcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAxMDBtcztcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpO1xuXG4gICAgJi5zdGFydCB7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG5cbiAgICAmLmVuZCB7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOCk7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbiAgfVxuICAkeyh7IGNzcyB9KSA9PiBjc3MgfHwgJyd9XG5gO1xuXG5pbnRlcmZhY2UgVG9vbHRpcFByb3BzIHtcbiAgLyoqIOWQueOBjeWHuuOBl+OBqOOBl+OBpuihqOekuuOBl+OBn+OBhOWGheWuuSAqL1xuICBsYWJlbDogYW55O1xuICAvKiog44Oe44Km44K544Kq44O844OQ44O844Gu5a++6LGh44Gr44Gq44KLZWxlbWVudCAqL1xuICBjaGlsZHJlbjogYW55O1xuICAvKiog5ZC544GN5Ye644GX44Gu6IOM5pmv6Imy44Gu5oyH5a6aICovXG4gIGNvbG9yPzogQ29sb3JUeXBlO1xuICAvKiog6KGo56S644GV44KM44KL5aC05omAICovXG4gIHBvc2l0aW9uPzogJ3RvcCcgfCAnbGVmdCcgfCAncmlnaHQnIHwgJ2JvdHRvbSc7XG4gIC8qKiDjgqvjgrnjgr/jg6BDU1PlrprnvqkgKi9cbiAgY3NzPzogQ1NTVHlwZTtcbn1cblxuaW50ZXJmYWNlIFN0YXRlIHtcbiAgc2hvdzogYm9vbGVhbjtcbiAgc3R5bGU6IGFueTtcbn1cblxuZnVuY3Rpb24gZ2V0UG9zaXRpb24oaGVpZ2h0OiBudW1iZXIsIHdpZHRoOiBudW1iZXIsIHBvc2l0aW9uPzogYW55KSB7XG4gIHN3aXRjaCAocG9zaXRpb24pIHtcbiAgICBjYXNlICd0b3AnOiB7XG4gICAgICByZXR1cm4geyBib3R0b206IGAke2hlaWdodH1weGAsIGxlZnQ6ICc1MCUnLCB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKC01MCUpJyB9O1xuICAgIH1cbiAgICBjYXNlICdsZWZ0Jzoge1xuICAgICAgcmV0dXJuIHsgcmlnaHQ6IGAke3dpZHRofXB4YCwgdG9wOiAnNTAlJywgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgtNTAlKScgfTtcbiAgICB9XG4gICAgY2FzZSAncmlnaHQnOiB7XG4gICAgICByZXR1cm4geyBsZWZ0OiBgJHt3aWR0aH1weGAsIHRvcDogJzUwJScsIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoLTUwJSknIH07XG4gICAgfVxuICAgIGRlZmF1bHQ6IHtcbiAgICAgIHJldHVybiB7IHRvcDogYCR7aGVpZ2h0fXB4YCwgbGVmdDogJzUwJScsIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoLTUwJSknICB9O1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb29sdGlwIGV4dGVuZHMgUHVyZUNvbXBvbmVudDxUb29sdGlwUHJvcHMsIFN0YXRlPiB7XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgcG9zaXRpb246ICdib3R0b20nLFxuICAgIGNvbG9yOiAnZGFyaycsXG4gIH07XG5cbiAgc3RhdGUgPSB7XG4gICAgc2hvdzogZmFsc2UsXG4gICAgc3R5bGU6IHt9LFxuICB9O1xuXG4gIG9wZW5Ub29sdGlwID0gKCkgPT4ge1xuICAgIGlmICh0aGlzLnN0YXRlLnNob3cgfHwgIXRoaXMuZWxlbWVudC5jdXJyZW50KSByZXR1cm47XG5cbiAgICBjb25zdCB3aWR0aCA9IHRoaXMuZWxlbWVudC5jdXJyZW50Lm9mZnNldFdpZHRoICsgODtcbiAgICBjb25zdCBoZWlnaHQgPSB0aGlzLmVsZW1lbnQuY3VycmVudC5vZmZzZXRIZWlnaHQgKyA4O1xuICAgIGNvbnN0IHN0eWxlID0gZ2V0UG9zaXRpb24oaGVpZ2h0LCB3aWR0aCwgdGhpcy5wcm9wcy5wb3NpdGlvbik7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHN0eWxlLCBzaG93OiB0cnVlIH0pO1xuICB9XG5cbiAgY2xvc2VUb29sdGlwID0gKCkgPT4ge1xuICAgIGlmICh0aGlzLnN0YXRlLnNob3cgJiYgdGhpcy5lbGVtZW50LmN1cnJlbnQpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93OiBmYWxzZSB9KTtcbiAgICB9XG4gIH1cblxuICBlbGVtZW50OiBSZWZPYmplY3Q8SFRNTERpdkVsZW1lbnQ+ID0gY3JlYXRlUmVmKCk7XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgbGFiZWwsIGNoaWxkcmVuLCAuLi5yZXN0IH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgc2hvdywgc3R5bGUgfSA9IHRoaXMuc3RhdGU7XG4gICAgcmV0dXJuIChcbiAgICAgIDxXcmFwcGVyXG4gICAgICAgIHJlZj17dGhpcy5lbGVtZW50fVxuICAgICAgICBvbk1vdXNlT3Zlcj17dGhpcy5vcGVuVG9vbHRpcH1cbiAgICAgICAgb25Nb3VzZU91dD17dGhpcy5jbG9zZVRvb2x0aXB9XG4gICAgICAgIHsuLi5yZXN0fVxuICAgICAgPlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDxDU1NUcmFuc2l0aW9uXG4gICAgICAgICAgY2xhc3NOYW1lcz17e1xuICAgICAgICAgICAgYXBwZWFyOiAnc3RhcnQnLFxuICAgICAgICAgICAgZW50ZXJEb25lOiAnc3RhcnQnLFxuICAgICAgICAgICAgZXhpdDogJ2VuZCcsXG4gICAgICAgICAgfX1cbiAgICAgICAgICBpbj17c2hvd31cbiAgICAgICAgICB0aW1lb3V0PXsxNTB9XG4gICAgICAgICAgdW5tb3VudE9uRXhpdFxuICAgICAgICA+XG4gICAgICAgICAgPGRpdiByb2xlPVwidG9vbHRpcFwiPlxuICAgICAgICAgICAge2xhYmVsfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0NTU1RyYW5zaXRpb24+XG4gICAgICA8L1dyYXBwZXI+XG4gICAgKTtcbiAgfVxufVxuXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmV4cG9ydCBjb25zdCBTaWRlTWVudSA9IHN0eWxlZC5hc2lkZWBcbiAgZm9udC1zaXplOiAxcmVtO1xuYDtcblNpZGVNZW51LmRpc3BsYXlOYW1lID0gJ1NpZGVNZW51JztcblxuZXhwb3J0IGNvbnN0IE1lbnVMaXN0ID0gc3R5bGVkLnVsYFxuICBsaW5lLWhlaWdodDogMS4yNTtcblxuICBhIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwYWRkaW5nOiAwLjVlbTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUudGV4dH07XG4gICAgJjpob3ZlciB7XG4gICAgICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5wcmltYXJ5fTtcbiAgICB9XG4gICAgJi5hY3RpdmUge1xuICAgICAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUucHJpbWFyeX07XG4gICAgfVxuICB9XG5cbiAgbGkge1xuICAgIHVsIHtcbiAgICAgIG1hcmdpbjogMC43NWVtO1xuICAgICAgcGFkZGluZy1sZWZ0OiAwLjc1ZW07XG4gICAgfVxuICB9XG5gO1xuTWVudUxpc3QuZGlzcGxheU5hbWUgPSAnTWVudUxpc3QnO1xuXG5leHBvcnQgY29uc3QgTWVudUxhYmVsID0gc3R5bGVkLnBgXG4gIGZvbnQtc2l6ZTogMC43NWVtO1xuICBsZXR0ZXItc3BhY2luZzogMC4xZW07XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG5cbiAgJjpub3QoOmZpcnN0LWNoaWxkKSB7XG4gICAgbWFyZ2luLXRvcDogMWVtO1xuICB9XG4gICY6bm90KDpsYXN0LWNoaWxkKSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMWVtO1xuICB9XG5gO1xuTWVudUxhYmVsLmRpc3BsYXlOYW1lID0gJ01lbnVMYWJlbCc7XG5cbiIsImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50LCBDU1NQcm9wZXJ0aWVzIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCwgeyBjc3MgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgQm94IGZyb20gJy4uL0JveCc7XG5pbXBvcnQgeyBDb2xvclR5cGUgfSBmcm9tICcuLi8uLi90eXBlcyc7XG5cbmNvbnN0IENhcmRCb2R5ID0gc3R5bGVkLmRpdmBcbiAgcGFkZGluZzogMS4yNXJlbTtcbiAgbWFyZ2luOiAwO1xuYDtcblxuY29uc3QgQ2FyZEhlYWRlciA9IHN0eWxlZC5oZWFkZXJgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmc6IDAuNXJlbSAxLjVyZW07XG4gIG1pbi1oZWlnaHQ6IDMuNXJlbTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuYm9yZGVyfTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuYDtcblxuY29uc3QgQ2FyZEZvb3RlciA9IHN0eWxlZC5mb290ZXJgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmc6IDAuNXJlbSAxLjVyZW07XG4gIG1pbi1oZWlnaHQ6IDMuNXJlbTtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuYm9yZGVyfTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuYDtcblxuY29uc3QgQ2FyZEltYWdlID0gc3R5bGVkLmFgXG4gIHdpZHRoOiAxMDAlO1xuXG4gIGltZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IDA7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogM3B4O1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAzcHg7XG4gIH1cbmA7XG5cbmludGVyZmFjZSBJbWFnZVByb3BzIHtcbiAgdXJsPzogc3RyaW5nO1xufVxuXG5jb25zdCBDYXJkSW1hZ2VIb3Jpem9udGFsID0gc3R5bGVkLmE8SW1hZ2VQcm9wcz5gXG4gIGZsZXg6IDAgMCAzMCU7XG4gIG1pbi13aWR0aDogNXJlbTtcbiAgd2lkdGg6IDMwJTtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogM3B4O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAzcHg7XG5cbiAgYmFja2dyb3VuZDogbm8tcmVwZWF0IGNlbnRlci9jb3ZlcjtcbiAgJHsoeyB1cmwgfSkgPT4gdXJsID8gY3NzYGJhY2tncm91bmQtaW1hZ2U6IHVybCgke3VybH0pO2AgOiB7fX1cbmA7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIC8qKiDjg6zjgrnjg53jg7Pjgrfjg5bjgarjgqTjg6Hjg7zjgrjjgpLov73liqDjgZnjgosgKi9cbiAgaW1hZ2U/OiBzdHJpbmc7XG4gIC8qKiDjgr/jgqTjg4jjg6sgKi9cbiAgdGl0bGU/OiBzdHJpbmc7XG4gIC8qKiDjg5jjg4Pjg4Djg7zjga7lj7PlgbTjgavov73liqDjgZnjgosgKi9cbiAgaGVhZGVyT3B0aW9ucz86IGFueTtcbiAgLyoqIGhlYWRlcumDqOWIhu+8iOOCpOODoeODvOOCuO+8ieOCkuaoquS4puOBs+OBq+OBmeOCiyAqL1xuICBob3Jpem9udGFsPzogYm9vbGVhbjtcbiAgLyoqIGZvb3RlciAqL1xuICBmb290ZXI/OiBhbnk7XG4gIC8qKiDoibLjga7mjIflrpogKi9cbiAgY29sb3I/OiBDb2xvclR5cGU7XG4gIC8qKiDjg5jjg4Pjg4DjgpIgKi9cbiAgaGVhZGVyT25Ub3A/OiBib29sZWFuO1xuICAvKiog44Kr44K544K/aW5saW5lIHN0eWxlICovXG4gIHN0eWxlPzogYW55O1xufVxuXG5jb25zdCBob3Jpem9udGFsU3R5bGU6IENTU1Byb3BlcnRpZXMgPSB7IGZsZXhEaXJlY3Rpb246ICdyb3cnIH07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhcmQgZXh0ZW5kcyBQdXJlQ29tcG9uZW50PFByb3BzPiB7XG4gIHJlbmRlckhlYWRlciA9ICgpID0+IHtcbiAgICBjb25zdCB7IGltYWdlLCB0aXRsZSwgaG9yaXpvbnRhbCB9ID0gdGhpcy5wcm9wcztcblxuICAgIGlmIChpbWFnZSAmJiAhaG9yaXpvbnRhbCkgcmV0dXJuICg8Q2FyZEltYWdlPjxpbWcgc3JjPXtpbWFnZX0gLz48L0NhcmRJbWFnZT4pO1xuICAgIGlmIChpbWFnZSAmJiBob3Jpem9udGFsKSByZXR1cm4gKDxDYXJkSW1hZ2VIb3Jpem9udGFsIHVybD17aW1hZ2V9IC8+KTtcbiAgICBpZiAodGl0bGUgJiYgIWhvcml6b250YWwpIHJldHVybiAoPENhcmRIZWFkZXI+PGgzPnt0aXRsZX08L2gzPjwvQ2FyZEhlYWRlcj4pO1xuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjaGlsZHJlbiwgaG9yaXpvbnRhbCwgZm9vdGVyLCBjb2xvciB9ID0gdGhpcy5wcm9wcztcblxuICAgIGNvbnN0IGhlYWRlciA9IHRoaXMucmVuZGVySGVhZGVyKCk7XG4gICAgY29uc3Qgd3JhcHBlclN0eWxlID0gaG9yaXpvbnRhbCA/IGhvcml6b250YWxTdHlsZSA6IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gKFxuICAgICAgPEJveCBzdHlsZT17d3JhcHBlclN0eWxlfSBjb2xvcj17Y29sb3J9PlxuICAgICAgICB7aGVhZGVyfVxuICAgICAgICA8Q2FyZEJvZHk+XG4gICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L0NhcmRCb2R5PlxuICAgICAgICB7Zm9vdGVyICYmICg8Q2FyZEZvb3Rlcj57UmVhY3QuQ2hpbGRyZW4ub25seShmb290ZXIpfTwvQ2FyZEZvb3Rlcj4pfVxuICAgICAgPC9Cb3g+XG4gICAgKTtcbiAgfVxufVxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IENTU1RyYW5zaXRpb24gZnJvbSAncmVhY3QtdHJhbnNpdGlvbi1ncm91cC9DU1NUcmFuc2l0aW9uJztcbmltcG9ydCBCb3gsIHsgUHJvcHMgYXMgQm94UHJvcHMgfSBmcm9tICcuLi9Cb3gnO1xuaW1wb3J0IHsgQ1NTVHlwZSB9IGZyb20gJy4uLy4uL3R5cGVzJztcblxuY29uc3QgV3JhcHBlciA9IHN0eWxlZC5kaXY8eyBjc3M/OiBDU1NUeXBlIH0+YFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGNvbG9yOiBpbmhlcml0O1xuXG4gICY6aG92ZXIge1xuICAgIGNvbG9yOiBpbmhlcml0O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgfVxuXG4gICR7KHsgY3NzIH0pID0+IGNzcyB8fCAnJ31cbmA7XG5cbmNvbnN0IFRvb2x0aXAgPSBzdHlsZWQoQm94KWBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBjbGVhcjogYm90aDtcbiAgYm94LXNoYWRvdzogMCAxcHggMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjA1KTtcbiAgei1pbmRleDogOTk5OTtcbiAgcGFkZGluZzogMC41cmVtIDA7XG4gIHdpZHRoOiBhdXRvO1xuICBoZWlnaHQ6IGF1dG87XG4gIGN1cnNvcjogYXV0bztcblxuICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtLCBvcGFjaXR5O1xuICB0cmFuc2Zvcm06IHNjYWxlKDAuOCk7XG4gIG9wYWNpdHk6IDA7XG5cbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtLCBvcGFjaXR5O1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAxMDBtcztcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKTtcblxuICAmLnN0YXJ0IHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cblxuICAmLmVuZCB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjgpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbmA7XG5cbmludGVyZmFjZSBQcm9wcyBleHRlbmRzIEJveFByb3BzIHtcbiAgLyoqIOODnOOCv+ODs+OBruWGheWuuSAqL1xuICBsYWJlbDogUmVhY3QuUmVhY3ROb2RlO1xuICAvKiog5YaF5a6544Gu44Oq44K544OIICovXG4gIGNoaWxkcmVuPzogUmVhY3QuUmVhY3ROb2RlIHwgUmVhY3QuUmVhY3ROb2RlO1xuICAvKiog5Y+z44Gu5Z+65rqW44Gn44Oq44K544OI44KS6KGo56S644GZ44KLICovXG4gIHJpZ2h0PzogYm9vbGVhbjtcbiAgLyoqIOWQueOBjeWHuuOBl+OBjOihqOekuuOBleOCjOOCi+WgtOaJgCAqL1xuICBwb3NpdGlvbj86ICd0b3AtbGVmdCcgfCAndG9wJyB8ICd0b3AtcmlnaHQnIHwgJ2JvdHRvbS1sZWZ0JyB8ICdib3R0b20nIHwgJ2JvdHRvbS1yaWdodCc7XG4gIC8qKiDjgqvjgrnjgr/jg6BDU1PlrprnvqkgKi9cbiAgY3NzPzogQ1NTVHlwZTtcbn1cblxuaW50ZXJmYWNlIFN0YXRlIHtcbiAgc2hvdzogYm9vbGVhbjtcbiAgc3R5bGU6IGFueTtcbn1cblxuZnVuY3Rpb24gZ2V0UG9zaXRpb24ocG9zaXRpb24/OiBhbnkpIHtcbiAgc3dpdGNoIChwb3NpdGlvbikge1xuICAgIGNhc2UgJ3RvcC1sZWZ0Jzoge1xuICAgICAgcmV0dXJuIHsgdG9wOiAwLCBsZWZ0OiAwLCB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKC0xMDAlKScgfTtcbiAgICB9XG4gICAgY2FzZSAndG9wLXJpZ2h0Jzoge1xuICAgICAgcmV0dXJuIHsgdG9wOiAwLCByaWdodDogMCwgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgtMTAwJSknIH07XG4gICAgfVxuICAgIGNhc2UgJ3RvcCc6IHtcbiAgICAgIHJldHVybiB7IHRvcDogIDAsIGxlZnQ6ICc1MCUnLCB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoLTUwJSwgLTEwMCUpJyB9O1xuICAgIH1cbiAgICBjYXNlICdib3R0b20tbGVmdCc6IHtcbiAgICAgIHJldHVybiB7IGJvdHRvbTogMCwgbGVmdDogMCwgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgxMDAlKScgfTtcbiAgICB9XG4gICAgY2FzZSAnYm90dG9tLXJpZ2h0Jzoge1xuICAgICAgcmV0dXJuIHsgYm90dG9tOiAwLCByaWdodDogMCwgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgxMDAlKScgfTtcbiAgICB9XG4gICAgY2FzZSAnYm90dG9tJzoge1xuICAgICAgcmV0dXJuIHsgYm90dG9tOiAwLCBsZWZ0OiAnNTAlJywgdHJhbnNmb3JtOiAndHJhbnNsYXRlKC01MCUsIDEwMCUpJyB9O1xuICAgIH1cbiAgICBkZWZhdWx0OiB7XG4gICAgICByZXR1cm4geyB0b3A6IDAsIGxlZnQ6IDAsIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoMTAwJSknIH07XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvcG92ZXIgZXh0ZW5kcyBDb21wb25lbnQ8UHJvcHMsIFN0YXRlPiB7XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgcG9zaXRpb246ICdib3R0b20tbGVmdCcsXG4gICAgY29sb3I6ICd3aGl0ZScsXG4gICAgc3R5bGU6IHt9LFxuICB9O1xuXG4gIHN0YXRlID0geyBzaG93OiBmYWxzZSwgc3R5bGU6IHt9IH07XG5cbiAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKHByb3BzOiBQcm9wcywgc3RhdGU6IFN0YXRlKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGUuc2hvdyAhPT0gc3RhdGUuc2hvdyB8fCB0aGlzLnByb3BzLmxhYmVsICE9PSBwcm9wcy5sYWJlbDtcbiAgfVxuXG4gIG9wZW5Ecm9wZG93biA9ICgpID0+IHtcbiAgICBpZiAodGhpcy5zdGF0ZS5zaG93KSByZXR1cm47XG5cbiAgICBjb25zdCBzdHlsZSA9IGdldFBvc2l0aW9uKHRoaXMucHJvcHMucG9zaXRpb24pO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBzdHlsZSwgc2hvdzogdHJ1ZSB9KTtcbiAgfVxuXG4gIGNsb3NlRHJvcGRvd24gPSAoKSA9PiB7XG4gICAgaWYgKHRoaXMuc3RhdGUuc2hvdykgdGhpcy5zZXRTdGF0ZSh7IHNob3c6IGZhbHNlIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgbGFiZWwsIGNoaWxkcmVuLCBzdHlsZSwgY3NzLCAuLi5yZXN0IH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgc2hvdyB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCB0b29sdGlwU3R5bGUgPSB7IC4uLnN0eWxlLCAuLi50aGlzLnN0YXRlLnN0eWxlIH07XG4gICAgcmV0dXJuIChcbiAgICAgIDxXcmFwcGVyXG4gICAgICAgIHRhYkluZGV4PXswfVxuICAgICAgICByb2xlPVwiYnV0dG9uXCJcbiAgICAgICAgb25Gb2N1cz17dGhpcy5vcGVuRHJvcGRvd259XG4gICAgICAgIG9uQmx1cj17dGhpcy5jbG9zZURyb3Bkb3dufVxuICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiAnYmxvY2snLCBwb3NpdGlvbjogJ3JlbGF0aXZlJyB9fVxuICAgICAgICBjc3M9e2Nzc31cbiAgICAgID5cbiAgICAgICAge2xhYmVsfVxuICAgICAgICA8Q1NTVHJhbnNpdGlvblxuICAgICAgICAgIGNsYXNzTmFtZXM9e3tcbiAgICAgICAgICAgIGFwcGVhcjogJ3N0YXJ0JyxcbiAgICAgICAgICAgIGVudGVyRG9uZTogJ3N0YXJ0JyxcbiAgICAgICAgICAgIGV4aXQ6ICdlbmQnLFxuICAgICAgICAgIH19XG4gICAgICAgICAgaW49e3Nob3d9XG4gICAgICAgICAgdGltZW91dD17MTUwfVxuICAgICAgICAgIHVubW91bnRPbkV4aXRcbiAgICAgICAgPlxuICAgICAgICAgIDxUb29sdGlwIHJvbGU9XCJ0b29sdGlwXCIgc3R5bGU9e3Rvb2x0aXBTdHlsZX0gey4uLnJlc3R9PlxuICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICAgIDwvVG9vbHRpcD5cbiAgICAgICAgPC9DU1NUcmFuc2l0aW9uPlxuICAgICAgPC9XcmFwcGVyPlxuICAgICk7XG4gIH1cbn1cbiIsImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50LCBIVE1MQXR0cmlidXRlcywgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjcmVhdGVQb3J0YWwgfSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IENTU1RyYW5zaXRpb24gZnJvbSAncmVhY3QtdHJhbnNpdGlvbi1ncm91cC9DU1NUcmFuc2l0aW9uJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IEJveCBmcm9tICcuLi9Cb3gnO1xuaW1wb3J0IENvbCBmcm9tICcuLi9HcmlkL0NvbCc7XG5pbXBvcnQgeyBDb2xvclR5cGUsIENvbFNpemVUeXBlLCBDU1NUeXBlIH0gZnJvbSAnLi4vLi4vdHlwZXMnO1xuXG5jb25zdCBFU0NfS0VZID0gMjc7XG5cbmNvbnN0IFdyYXBwZXIgPSBzdHlsZWQuZGl2PHsgY3NzPzogQ1NTVHlwZSwgc2hhZG93Q29sb3I/OiBzdHJpbmcgfT5gXG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICB6LWluZGV4OiA5OTk3O1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcGFkZGluZzogMC43NXJlbTtcblxuICAudi1tb2RhbC1ib2R5IHtcbiAgICB6LWluZGV4OiA5OTk5O1xuICAgIG1hcmdpbjogMDtcbiAgICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtLCBvcGFjaXR5O1xuICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybSwgb3BhY2l0eTtcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpO1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDIwMG1zO1xuICB9XG5cbiAgJi5mYWRlLWVudGVyID4gLnYtbW9kYWwtYm9keSB7XG4gICAgb3BhY2l0eTogMC4wMTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOCk7XG4gIH1cbiAgJi5mYWRlLWVudGVyLWFjdGl2ZSA+IC52LW1vZGFsLWJvZHkge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgfVxuICAmLmZhZGUtZXhpdCA+IC52LW1vZGFsLWJvZHkge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgfVxuICAmLmZhZGUtZXhpdC1hY3RpdmUgPiAudi1tb2RhbC1ib2R5IHtcbiAgICBvcGFjaXR5OiAwLjAxO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC44KTtcbiAgfVxuXG4gIC52LW1vZGFsLXNoYWRvdyB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIHRvcDogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyh7IHNoYWRvd0NvbG9yIH0pID0+IHNoYWRvd0NvbG9yIHx8ICd0cmFuc3BhcmVudCd9O1xuICB9XG5cbiAgJHsoeyBjc3MgfSkgPT4gY3NzIHx8IHt9fVxuYDtcblxuaW50ZXJmYWNlIFByb3BzIGV4dGVuZHMgSFRNTEF0dHJpYnV0ZXM8SFRNTERpdkVsZW1lbnQ+IHtcbiAgLyoqIOODmOODg+ODgOODvOOBruOCv+OCpOODiOODq+aWh+iogCAqL1xuICB0aXRsZT86IGFueTtcbiAgLyoqIDF+MTLjga7jg6Ljg7zjg4Djg6vjgrXjgqTjgrogKi9cbiAgc2l6ZT86IENvbFNpemVUeXBlO1xuICAvKiogdHJ1ZeOBruWgtOWQiOOAgeODouODvOODgOODq+OCkuihqOekuuOBl+OBvuOBmeOAgiAqL1xuICBzaG93PzogYm9vbGVhbjtcbiAgLyoqIOODouODvOODgOODq+OBrmJvZHnjgavlhaXjgozjgovlhoXlrrkgKi9cbiAgY2hpbGRyZW4/OiBhbnk7XG4gIC8qKiDjg6Ljg7zjg4Djg6vjga5mb290ZXLjgavlhaXjgozjgovlhoXlrrkgKi9cbiAgZm9vdGVyPzogYW55O1xuICAvKiog44Oi44O844OA44Or44Gu6ImyICovXG4gIGNvbG9yPzogQ29sb3JUeXBlO1xuICAvKiog44Oi44O844OA44Or44KS6ZaJ44GY44KL5Yem55CGICovXG4gIGNsb3NlTW9kYWw6ICgpID0+IHZvaWQ7XG4gIC8qKiDjgqrjg7zjg5Djg7zjg6zjgqTjga7jgq/jg6rjg4Pjgq/jgafjg6Ljg7zjg4Djg6vjgq/jg63jg7zjgrogKi9cbiAgY2xvc2VPbk92ZXJsYXk/OiBib29sZWFuO1xuICAvKiogZXNj44Oc44K/44Oz44Gn44Kv44Ot44O844K6ICovXG4gIGNsb3NlT25Fc2M/OiBib29sZWFuO1xuICAvKiogb3ZlcmxheeOBruiDjOaZr+OBruioreWumiAqL1xuICBzaGFkb3dDb2xvcj86IHN0cmluZztcbiAgLyoqIOODouODvOODgOODq+WkluOBq+ihqOekuuOBmeOCi0VsZW1lbnRzICovXG4gIGV4dGVybmFsPzogYW55O1xuICAvKiog44Kr44K544K/44OgQ1NT5a6a576pICovXG4gIGNzcz86IENTU1R5cGU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vZGFsIGV4dGVuZHMgUHVyZUNvbXBvbmVudDxQcm9wcz4ge1xuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIHNob3c6IGZhbHNlLFxuICAgIGNvbG9yOiAnd2hpdGUnLFxuICAgIHNpemU6IDYsXG4gICAgc2hhZG93Q29sb3I6ICdyZ2JhKDEwLDEwLDEwLC44NiknLFxuICB9O1xuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIGlmICh0aGlzLmVsZW1lbnQpIHtcbiAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQodGhpcy5lbGVtZW50KTtcbiAgICB9XG4gIH1cblxuICBvbktleURvd24gPSAoZTogYW55KSA9PiB7XG4gICAgaWYgKHRoaXMucHJvcHMuY2xvc2VPbkVzYyAmJiBlLmtleUNvZGUgPT09IEVTQ19LRVkgJiYgdGhpcy5wcm9wcy5jbG9zZU1vZGFsKSB7XG4gICAgICB0aGlzLnByb3BzLmNsb3NlTW9kYWwoKTtcbiAgICB9XG4gIH1cblxuICBvbkNsaWNrT3ZlcmxheSA9ICgpID0+IHtcbiAgICBpZiAodGhpcy5wcm9wcy5jbG9zZU9uT3ZlcmxheSAmJiB0aGlzLnByb3BzLmNsb3NlTW9kYWwpIHtcbiAgICAgIHRoaXMucHJvcHMuY2xvc2VNb2RhbCgpO1xuICAgIH1cbiAgfVxuXG4gIGVsZW1lbnQ/OiBIVE1MRGl2RWxlbWVudDtcbiAgc2hvdWxkQ2xvc2U6IGJvb2xlYW4gfCBudWxsID0gbnVsbDtcblxuICByZW5kZXIoKTogUmVhY3QuUmVhY3RQb3J0YWwgfCBudWxsIHtcbiAgICBpZiAodHlwZW9mIGRvY3VtZW50ICE9PSBcInVuZGVmaW5lZFwiICYmICF0aGlzLmVsZW1lbnQpIHtcbiAgICAgIHRoaXMuZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLmVsZW1lbnQpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmVsZW1lbnQpIHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgc2hvdywgc2l6ZSwgdGl0bGUsIGNoaWxkcmVuLCBmb290ZXIsIGNvbG9yLCBvbkNsaWNrLCAuLi5yZXN0XG4gICAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgICAgcmV0dXJuIGNyZWF0ZVBvcnRhbCgoXG4gICAgICAgIDxDU1NUcmFuc2l0aW9uXG4gICAgICAgICAgY2xhc3NOYW1lcz1cImZhZGVcIlxuICAgICAgICAgIHRpbWVvdXQ9ezIwMH1cbiAgICAgICAgICBpbj17c2hvd31cbiAgICAgICAgICB1bm1vdW50T25FeGl0XG4gICAgICAgID5cbiAgICAgICAgICA8V3JhcHBlciByb2xlPVwiZG9jdW1lbnRcIiB7Li4ucmVzdH0+XG4gICAgICAgICAgICA8Q29sIGNsYXNzTmFtZT1cInYtbW9kYWwtYm9keVwiIHNpemU9e3NpemV9IGF1dG8gcm9sZT1cImRpYWxvZ1wiPlxuICAgICAgICAgICAgICA8Qm94IGNvbG9yPXtjb2xvcn0+XG4gICAgICAgICAgICAgICAge3RpdGxlID8gdGl0bGUgOiBudWxsfVxuICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgICAgICAgICB7Zm9vdGVyID8gZm9vdGVyIDogbnVsbH1cbiAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgIHt0aGlzLnByb3BzLmV4dGVybmFsfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2LW1vZGFsLXNoYWRvd1wiIG9uQ2xpY2s9e3RoaXMub25DbGlja092ZXJsYXl9IC8+XG4gICAgICAgICAgPC9XcmFwcGVyPlxuICAgICAgICA8L0NTU1RyYW5zaXRpb24+XG4gICAgICApLCB0aGlzLmVsZW1lbnQpO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmdldENoaWxkTWFwcGluZyA9IGdldENoaWxkTWFwcGluZztcbmV4cG9ydHMubWVyZ2VDaGlsZE1hcHBpbmdzID0gbWVyZ2VDaGlsZE1hcHBpbmdzO1xuZXhwb3J0cy5nZXRJbml0aWFsQ2hpbGRNYXBwaW5nID0gZ2V0SW5pdGlhbENoaWxkTWFwcGluZztcbmV4cG9ydHMuZ2V0TmV4dENoaWxkTWFwcGluZyA9IGdldE5leHRDaGlsZE1hcHBpbmc7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKFwicmVhY3RcIik7XG5cbi8qKlxuICogR2l2ZW4gYHRoaXMucHJvcHMuY2hpbGRyZW5gLCByZXR1cm4gYW4gb2JqZWN0IG1hcHBpbmcga2V5IHRvIGNoaWxkLlxuICpcbiAqIEBwYXJhbSB7Kn0gY2hpbGRyZW4gYHRoaXMucHJvcHMuY2hpbGRyZW5gXG4gKiBAcmV0dXJuIHtvYmplY3R9IE1hcHBpbmcgb2Yga2V5IHRvIGNoaWxkXG4gKi9cbmZ1bmN0aW9uIGdldENoaWxkTWFwcGluZyhjaGlsZHJlbiwgbWFwRm4pIHtcbiAgdmFyIG1hcHBlciA9IGZ1bmN0aW9uIG1hcHBlcihjaGlsZCkge1xuICAgIHJldHVybiBtYXBGbiAmJiAoMCwgX3JlYWN0LmlzVmFsaWRFbGVtZW50KShjaGlsZCkgPyBtYXBGbihjaGlsZCkgOiBjaGlsZDtcbiAgfTtcblxuICB2YXIgcmVzdWx0ID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgaWYgKGNoaWxkcmVuKSBfcmVhY3QuQ2hpbGRyZW4ubWFwKGNoaWxkcmVuLCBmdW5jdGlvbiAoYykge1xuICAgIHJldHVybiBjO1xuICB9KS5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xuICAgIC8vIHJ1biB0aGUgbWFwIGZ1bmN0aW9uIGhlcmUgaW5zdGVhZCBzbyB0aGF0IHRoZSBrZXkgaXMgdGhlIGNvbXB1dGVkIG9uZVxuICAgIHJlc3VsdFtjaGlsZC5rZXldID0gbWFwcGVyKGNoaWxkKTtcbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59XG4vKipcbiAqIFdoZW4geW91J3JlIGFkZGluZyBvciByZW1vdmluZyBjaGlsZHJlbiBzb21lIG1heSBiZSBhZGRlZCBvciByZW1vdmVkIGluIHRoZVxuICogc2FtZSByZW5kZXIgcGFzcy4gV2Ugd2FudCB0byBzaG93ICpib3RoKiBzaW5jZSB3ZSB3YW50IHRvIHNpbXVsdGFuZW91c2x5XG4gKiBhbmltYXRlIGVsZW1lbnRzIGluIGFuZCBvdXQuIFRoaXMgZnVuY3Rpb24gdGFrZXMgYSBwcmV2aW91cyBzZXQgb2Yga2V5c1xuICogYW5kIGEgbmV3IHNldCBvZiBrZXlzIGFuZCBtZXJnZXMgdGhlbSB3aXRoIGl0cyBiZXN0IGd1ZXNzIG9mIHRoZSBjb3JyZWN0XG4gKiBvcmRlcmluZy4gSW4gdGhlIGZ1dHVyZSB3ZSBtYXkgZXhwb3NlIHNvbWUgb2YgdGhlIHV0aWxpdGllcyBpblxuICogUmVhY3RNdWx0aUNoaWxkIHRvIG1ha2UgdGhpcyBlYXN5LCBidXQgZm9yIG5vdyBSZWFjdCBpdHNlbGYgZG9lcyBub3RcbiAqIGRpcmVjdGx5IGhhdmUgdGhpcyBjb25jZXB0IG9mIHRoZSB1bmlvbiBvZiBwcmV2Q2hpbGRyZW4gYW5kIG5leHRDaGlsZHJlblxuICogc28gd2UgaW1wbGVtZW50IGl0IGhlcmUuXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IHByZXYgcHJldiBjaGlsZHJlbiBhcyByZXR1cm5lZCBmcm9tXG4gKiBgUmVhY3RUcmFuc2l0aW9uQ2hpbGRNYXBwaW5nLmdldENoaWxkTWFwcGluZygpYC5cbiAqIEBwYXJhbSB7b2JqZWN0fSBuZXh0IG5leHQgY2hpbGRyZW4gYXMgcmV0dXJuZWQgZnJvbVxuICogYFJlYWN0VHJhbnNpdGlvbkNoaWxkTWFwcGluZy5nZXRDaGlsZE1hcHBpbmcoKWAuXG4gKiBAcmV0dXJuIHtvYmplY3R9IGEga2V5IHNldCB0aGF0IGNvbnRhaW5zIGFsbCBrZXlzIGluIGBwcmV2YCBhbmQgYWxsIGtleXNcbiAqIGluIGBuZXh0YCBpbiBhIHJlYXNvbmFibGUgb3JkZXIuXG4gKi9cblxuXG5mdW5jdGlvbiBtZXJnZUNoaWxkTWFwcGluZ3MocHJldiwgbmV4dCkge1xuICBwcmV2ID0gcHJldiB8fCB7fTtcbiAgbmV4dCA9IG5leHQgfHwge307XG5cbiAgZnVuY3Rpb24gZ2V0VmFsdWVGb3JLZXkoa2V5KSB7XG4gICAgcmV0dXJuIGtleSBpbiBuZXh0ID8gbmV4dFtrZXldIDogcHJldltrZXldO1xuICB9IC8vIEZvciBlYWNoIGtleSBvZiBgbmV4dGAsIHRoZSBsaXN0IG9mIGtleXMgdG8gaW5zZXJ0IGJlZm9yZSB0aGF0IGtleSBpblxuICAvLyB0aGUgY29tYmluZWQgbGlzdFxuXG5cbiAgdmFyIG5leHRLZXlzUGVuZGluZyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gIHZhciBwZW5kaW5nS2V5cyA9IFtdO1xuXG4gIGZvciAodmFyIHByZXZLZXkgaW4gcHJldikge1xuICAgIGlmIChwcmV2S2V5IGluIG5leHQpIHtcbiAgICAgIGlmIChwZW5kaW5nS2V5cy5sZW5ndGgpIHtcbiAgICAgICAgbmV4dEtleXNQZW5kaW5nW3ByZXZLZXldID0gcGVuZGluZ0tleXM7XG4gICAgICAgIHBlbmRpbmdLZXlzID0gW107XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHBlbmRpbmdLZXlzLnB1c2gocHJldktleSk7XG4gICAgfVxuICB9XG5cbiAgdmFyIGk7XG4gIHZhciBjaGlsZE1hcHBpbmcgPSB7fTtcblxuICBmb3IgKHZhciBuZXh0S2V5IGluIG5leHQpIHtcbiAgICBpZiAobmV4dEtleXNQZW5kaW5nW25leHRLZXldKSB7XG4gICAgICBmb3IgKGkgPSAwOyBpIDwgbmV4dEtleXNQZW5kaW5nW25leHRLZXldLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBwZW5kaW5nTmV4dEtleSA9IG5leHRLZXlzUGVuZGluZ1tuZXh0S2V5XVtpXTtcbiAgICAgICAgY2hpbGRNYXBwaW5nW25leHRLZXlzUGVuZGluZ1tuZXh0S2V5XVtpXV0gPSBnZXRWYWx1ZUZvcktleShwZW5kaW5nTmV4dEtleSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY2hpbGRNYXBwaW5nW25leHRLZXldID0gZ2V0VmFsdWVGb3JLZXkobmV4dEtleSk7XG4gIH0gLy8gRmluYWxseSwgYWRkIHRoZSBrZXlzIHdoaWNoIGRpZG4ndCBhcHBlYXIgYmVmb3JlIGFueSBrZXkgaW4gYG5leHRgXG5cblxuICBmb3IgKGkgPSAwOyBpIDwgcGVuZGluZ0tleXMubGVuZ3RoOyBpKyspIHtcbiAgICBjaGlsZE1hcHBpbmdbcGVuZGluZ0tleXNbaV1dID0gZ2V0VmFsdWVGb3JLZXkocGVuZGluZ0tleXNbaV0pO1xuICB9XG5cbiAgcmV0dXJuIGNoaWxkTWFwcGluZztcbn1cblxuZnVuY3Rpb24gZ2V0UHJvcChjaGlsZCwgcHJvcCwgcHJvcHMpIHtcbiAgcmV0dXJuIHByb3BzW3Byb3BdICE9IG51bGwgPyBwcm9wc1twcm9wXSA6IGNoaWxkLnByb3BzW3Byb3BdO1xufVxuXG5mdW5jdGlvbiBnZXRJbml0aWFsQ2hpbGRNYXBwaW5nKHByb3BzLCBvbkV4aXRlZCkge1xuICByZXR1cm4gZ2V0Q2hpbGRNYXBwaW5nKHByb3BzLmNoaWxkcmVuLCBmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICByZXR1cm4gKDAsIF9yZWFjdC5jbG9uZUVsZW1lbnQpKGNoaWxkLCB7XG4gICAgICBvbkV4aXRlZDogb25FeGl0ZWQuYmluZChudWxsLCBjaGlsZCksXG4gICAgICBpbjogdHJ1ZSxcbiAgICAgIGFwcGVhcjogZ2V0UHJvcChjaGlsZCwgJ2FwcGVhcicsIHByb3BzKSxcbiAgICAgIGVudGVyOiBnZXRQcm9wKGNoaWxkLCAnZW50ZXInLCBwcm9wcyksXG4gICAgICBleGl0OiBnZXRQcm9wKGNoaWxkLCAnZXhpdCcsIHByb3BzKVxuICAgIH0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gZ2V0TmV4dENoaWxkTWFwcGluZyhuZXh0UHJvcHMsIHByZXZDaGlsZE1hcHBpbmcsIG9uRXhpdGVkKSB7XG4gIHZhciBuZXh0Q2hpbGRNYXBwaW5nID0gZ2V0Q2hpbGRNYXBwaW5nKG5leHRQcm9wcy5jaGlsZHJlbik7XG4gIHZhciBjaGlsZHJlbiA9IG1lcmdlQ2hpbGRNYXBwaW5ncyhwcmV2Q2hpbGRNYXBwaW5nLCBuZXh0Q2hpbGRNYXBwaW5nKTtcbiAgT2JqZWN0LmtleXMoY2hpbGRyZW4pLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHZhciBjaGlsZCA9IGNoaWxkcmVuW2tleV07XG4gICAgaWYgKCEoMCwgX3JlYWN0LmlzVmFsaWRFbGVtZW50KShjaGlsZCkpIHJldHVybjtcbiAgICB2YXIgaGFzUHJldiA9IGtleSBpbiBwcmV2Q2hpbGRNYXBwaW5nO1xuICAgIHZhciBoYXNOZXh0ID0ga2V5IGluIG5leHRDaGlsZE1hcHBpbmc7XG4gICAgdmFyIHByZXZDaGlsZCA9IHByZXZDaGlsZE1hcHBpbmdba2V5XTtcbiAgICB2YXIgaXNMZWF2aW5nID0gKDAsIF9yZWFjdC5pc1ZhbGlkRWxlbWVudCkocHJldkNoaWxkKSAmJiAhcHJldkNoaWxkLnByb3BzLmluOyAvLyBpdGVtIGlzIG5ldyAoZW50ZXJpbmcpXG5cbiAgICBpZiAoaGFzTmV4dCAmJiAoIWhhc1ByZXYgfHwgaXNMZWF2aW5nKSkge1xuICAgICAgLy8gY29uc29sZS5sb2coJ2VudGVyaW5nJywga2V5KVxuICAgICAgY2hpbGRyZW5ba2V5XSA9ICgwLCBfcmVhY3QuY2xvbmVFbGVtZW50KShjaGlsZCwge1xuICAgICAgICBvbkV4aXRlZDogb25FeGl0ZWQuYmluZChudWxsLCBjaGlsZCksXG4gICAgICAgIGluOiB0cnVlLFxuICAgICAgICBleGl0OiBnZXRQcm9wKGNoaWxkLCAnZXhpdCcsIG5leHRQcm9wcyksXG4gICAgICAgIGVudGVyOiBnZXRQcm9wKGNoaWxkLCAnZW50ZXInLCBuZXh0UHJvcHMpXG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKCFoYXNOZXh0ICYmIGhhc1ByZXYgJiYgIWlzTGVhdmluZykge1xuICAgICAgLy8gaXRlbSBpcyBvbGQgKGV4aXRpbmcpXG4gICAgICAvLyBjb25zb2xlLmxvZygnbGVhdmluZycsIGtleSlcbiAgICAgIGNoaWxkcmVuW2tleV0gPSAoMCwgX3JlYWN0LmNsb25lRWxlbWVudCkoY2hpbGQsIHtcbiAgICAgICAgaW46IGZhbHNlXG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKGhhc05leHQgJiYgaGFzUHJldiAmJiAoMCwgX3JlYWN0LmlzVmFsaWRFbGVtZW50KShwcmV2Q2hpbGQpKSB7XG4gICAgICAvLyBpdGVtIGhhc24ndCBjaGFuZ2VkIHRyYW5zaXRpb24gc3RhdGVzXG4gICAgICAvLyBjb3B5IG92ZXIgdGhlIGxhc3QgdHJhbnNpdGlvbiBwcm9wcztcbiAgICAgIC8vIGNvbnNvbGUubG9nKCd1bmNoYW5nZWQnLCBrZXkpXG4gICAgICBjaGlsZHJlbltrZXldID0gKDAsIF9yZWFjdC5jbG9uZUVsZW1lbnQpKGNoaWxkLCB7XG4gICAgICAgIG9uRXhpdGVkOiBvbkV4aXRlZC5iaW5kKG51bGwsIGNoaWxkKSxcbiAgICAgICAgaW46IHByZXZDaGlsZC5wcm9wcy5pbixcbiAgICAgICAgZXhpdDogZ2V0UHJvcChjaGlsZCwgJ2V4aXQnLCBuZXh0UHJvcHMpLFxuICAgICAgICBlbnRlcjogZ2V0UHJvcChjaGlsZCwgJ2VudGVyJywgbmV4dFByb3BzKVxuICAgICAgfSk7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIGNoaWxkcmVuO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX3Byb3BUeXBlcyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInByb3AtdHlwZXNcIikpO1xuXG52YXIgX3JlYWN0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgX3JlYWN0TGlmZWN5Y2xlc0NvbXBhdCA9IHJlcXVpcmUoXCJyZWFjdC1saWZlY3ljbGVzLWNvbXBhdFwiKTtcblxudmFyIF9DaGlsZE1hcHBpbmcgPSByZXF1aXJlKFwiLi91dGlscy9DaGlsZE1hcHBpbmdcIik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpIHsgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307IHZhciB0YXJnZXQgPSB7fTsgdmFyIHNvdXJjZUtleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpOyB2YXIga2V5LCBpOyBmb3IgKGkgPSAwOyBpIDwgc291cmNlS2V5cy5sZW5ndGg7IGkrKykgeyBrZXkgPSBzb3VyY2VLZXlzW2ldOyBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlOyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX2V4dGVuZHMoKSB7IF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTsgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzTG9vc2Uoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzLnByb3RvdHlwZSk7IHN1YkNsYXNzLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IHN1YkNsYXNzOyBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuXG52YXIgdmFsdWVzID0gT2JqZWN0LnZhbHVlcyB8fCBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiBPYmplY3Qua2V5cyhvYmopLm1hcChmdW5jdGlvbiAoaykge1xuICAgIHJldHVybiBvYmpba107XG4gIH0pO1xufTtcblxudmFyIGRlZmF1bHRQcm9wcyA9IHtcbiAgY29tcG9uZW50OiAnZGl2JyxcbiAgY2hpbGRGYWN0b3J5OiBmdW5jdGlvbiBjaGlsZEZhY3RvcnkoY2hpbGQpIHtcbiAgICByZXR1cm4gY2hpbGQ7XG4gIH1cbiAgLyoqXG4gICAqIFRoZSBgPFRyYW5zaXRpb25Hcm91cD5gIGNvbXBvbmVudCBtYW5hZ2VzIGEgc2V0IG9mIHRyYW5zaXRpb24gY29tcG9uZW50c1xuICAgKiAoYDxUcmFuc2l0aW9uPmAgYW5kIGA8Q1NTVHJhbnNpdGlvbj5gKSBpbiBhIGxpc3QuIExpa2Ugd2l0aCB0aGUgdHJhbnNpdGlvblxuICAgKiBjb21wb25lbnRzLCBgPFRyYW5zaXRpb25Hcm91cD5gIGlzIGEgc3RhdGUgbWFjaGluZSBmb3IgbWFuYWdpbmcgdGhlIG1vdW50aW5nXG4gICAqIGFuZCB1bm1vdW50aW5nIG9mIGNvbXBvbmVudHMgb3ZlciB0aW1lLlxuICAgKlxuICAgKiBDb25zaWRlciB0aGUgZXhhbXBsZSBiZWxvdy4gQXMgaXRlbXMgYXJlIHJlbW92ZWQgb3IgYWRkZWQgdG8gdGhlIFRvZG9MaXN0IHRoZVxuICAgKiBgaW5gIHByb3AgaXMgdG9nZ2xlZCBhdXRvbWF0aWNhbGx5IGJ5IHRoZSBgPFRyYW5zaXRpb25Hcm91cD5gLlxuICAgKlxuICAgKiBOb3RlIHRoYXQgYDxUcmFuc2l0aW9uR3JvdXA+YCAgZG9lcyBub3QgZGVmaW5lIGFueSBhbmltYXRpb24gYmVoYXZpb3IhXG4gICAqIEV4YWN0bHkgX2hvd18gYSBsaXN0IGl0ZW0gYW5pbWF0ZXMgaXMgdXAgdG8gdGhlIGluZGl2aWR1YWwgdHJhbnNpdGlvblxuICAgKiBjb21wb25lbnQuIFRoaXMgbWVhbnMgeW91IGNhbiBtaXggYW5kIG1hdGNoIGFuaW1hdGlvbnMgYWNyb3NzIGRpZmZlcmVudCBsaXN0XG4gICAqIGl0ZW1zLlxuICAgKi9cblxufTtcblxudmFyIFRyYW5zaXRpb25Hcm91cCA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHNMb29zZShUcmFuc2l0aW9uR3JvdXAsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIFRyYW5zaXRpb25Hcm91cChwcm9wcywgY29udGV4dCkge1xuICAgIHZhciBfdGhpcztcblxuICAgIF90aGlzID0gX1JlYWN0JENvbXBvbmVudC5jYWxsKHRoaXMsIHByb3BzLCBjb250ZXh0KSB8fCB0aGlzO1xuXG4gICAgdmFyIGhhbmRsZUV4aXRlZCA9IF90aGlzLmhhbmRsZUV4aXRlZC5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpKTsgLy8gSW5pdGlhbCBjaGlsZHJlbiBzaG91bGQgYWxsIGJlIGVudGVyaW5nLCBkZXBlbmRlbnQgb24gYXBwZWFyXG5cblxuICAgIF90aGlzLnN0YXRlID0ge1xuICAgICAgaGFuZGxlRXhpdGVkOiBoYW5kbGVFeGl0ZWQsXG4gICAgICBmaXJzdFJlbmRlcjogdHJ1ZVxuICAgIH07XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IFRyYW5zaXRpb25Hcm91cC5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLmdldENoaWxkQ29udGV4dCA9IGZ1bmN0aW9uIGdldENoaWxkQ29udGV4dCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdHJhbnNpdGlvbkdyb3VwOiB7XG4gICAgICAgIGlzTW91bnRpbmc6ICF0aGlzLmFwcGVhcmVkXG4gICAgICB9XG4gICAgfTtcbiAgfTtcblxuICBfcHJvdG8uY29tcG9uZW50RGlkTW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLmFwcGVhcmVkID0gdHJ1ZTtcbiAgICB0aGlzLm1vdW50ZWQgPSB0cnVlO1xuICB9O1xuXG4gIF9wcm90by5jb21wb25lbnRXaWxsVW5tb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMubW91bnRlZCA9IGZhbHNlO1xuICB9O1xuXG4gIFRyYW5zaXRpb25Hcm91cC5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMgPSBmdW5jdGlvbiBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMobmV4dFByb3BzLCBfcmVmKSB7XG4gICAgdmFyIHByZXZDaGlsZE1hcHBpbmcgPSBfcmVmLmNoaWxkcmVuLFxuICAgICAgICBoYW5kbGVFeGl0ZWQgPSBfcmVmLmhhbmRsZUV4aXRlZCxcbiAgICAgICAgZmlyc3RSZW5kZXIgPSBfcmVmLmZpcnN0UmVuZGVyO1xuICAgIHJldHVybiB7XG4gICAgICBjaGlsZHJlbjogZmlyc3RSZW5kZXIgPyAoMCwgX0NoaWxkTWFwcGluZy5nZXRJbml0aWFsQ2hpbGRNYXBwaW5nKShuZXh0UHJvcHMsIGhhbmRsZUV4aXRlZCkgOiAoMCwgX0NoaWxkTWFwcGluZy5nZXROZXh0Q2hpbGRNYXBwaW5nKShuZXh0UHJvcHMsIHByZXZDaGlsZE1hcHBpbmcsIGhhbmRsZUV4aXRlZCksXG4gICAgICBmaXJzdFJlbmRlcjogZmFsc2VcbiAgICB9O1xuICB9O1xuXG4gIF9wcm90by5oYW5kbGVFeGl0ZWQgPSBmdW5jdGlvbiBoYW5kbGVFeGl0ZWQoY2hpbGQsIG5vZGUpIHtcbiAgICB2YXIgY3VycmVudENoaWxkTWFwcGluZyA9ICgwLCBfQ2hpbGRNYXBwaW5nLmdldENoaWxkTWFwcGluZykodGhpcy5wcm9wcy5jaGlsZHJlbik7XG4gICAgaWYgKGNoaWxkLmtleSBpbiBjdXJyZW50Q2hpbGRNYXBwaW5nKSByZXR1cm47XG5cbiAgICBpZiAoY2hpbGQucHJvcHMub25FeGl0ZWQpIHtcbiAgICAgIGNoaWxkLnByb3BzLm9uRXhpdGVkKG5vZGUpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLm1vdW50ZWQpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoZnVuY3Rpb24gKHN0YXRlKSB7XG4gICAgICAgIHZhciBjaGlsZHJlbiA9IF9leHRlbmRzKHt9LCBzdGF0ZS5jaGlsZHJlbik7XG5cbiAgICAgICAgZGVsZXRlIGNoaWxkcmVuW2NoaWxkLmtleV07XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgY2hpbGRyZW46IGNoaWxkcmVuXG4gICAgICAgIH07XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgX3RoaXMkcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICBDb21wb25lbnQgPSBfdGhpcyRwcm9wcy5jb21wb25lbnQsXG4gICAgICAgIGNoaWxkRmFjdG9yeSA9IF90aGlzJHByb3BzLmNoaWxkRmFjdG9yeSxcbiAgICAgICAgcHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShfdGhpcyRwcm9wcywgW1wiY29tcG9uZW50XCIsIFwiY2hpbGRGYWN0b3J5XCJdKTtcblxuICAgIHZhciBjaGlsZHJlbiA9IHZhbHVlcyh0aGlzLnN0YXRlLmNoaWxkcmVuKS5tYXAoY2hpbGRGYWN0b3J5KTtcbiAgICBkZWxldGUgcHJvcHMuYXBwZWFyO1xuICAgIGRlbGV0ZSBwcm9wcy5lbnRlcjtcbiAgICBkZWxldGUgcHJvcHMuZXhpdDtcblxuICAgIGlmIChDb21wb25lbnQgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiBjaGlsZHJlbjtcbiAgICB9XG5cbiAgICByZXR1cm4gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChDb21wb25lbnQsIHByb3BzLCBjaGlsZHJlbik7XG4gIH07XG5cbiAgcmV0dXJuIFRyYW5zaXRpb25Hcm91cDtcbn0oX3JlYWN0LmRlZmF1bHQuQ29tcG9uZW50KTtcblxuVHJhbnNpdGlvbkdyb3VwLmNoaWxkQ29udGV4dFR5cGVzID0ge1xuICB0cmFuc2l0aW9uR3JvdXA6IF9wcm9wVHlwZXMuZGVmYXVsdC5vYmplY3QuaXNSZXF1aXJlZFxufTtcblRyYW5zaXRpb25Hcm91cC5wcm9wVHlwZXMgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyB7XG4gIC8qKlxuICAgKiBgPFRyYW5zaXRpb25Hcm91cD5gIHJlbmRlcnMgYSBgPGRpdj5gIGJ5IGRlZmF1bHQuIFlvdSBjYW4gY2hhbmdlIHRoaXNcbiAgICogYmVoYXZpb3IgYnkgcHJvdmlkaW5nIGEgYGNvbXBvbmVudGAgcHJvcC5cbiAgICogSWYgeW91IHVzZSBSZWFjdCB2MTYrIGFuZCB3b3VsZCBsaWtlIHRvIGF2b2lkIGEgd3JhcHBpbmcgYDxkaXY+YCBlbGVtZW50XG4gICAqIHlvdSBjYW4gcGFzcyBpbiBgY29tcG9uZW50PXtudWxsfWAuIFRoaXMgaXMgdXNlZnVsIGlmIHRoZSB3cmFwcGluZyBkaXZcbiAgICogYm9ya3MgeW91ciBjc3Mgc3R5bGVzLlxuICAgKi9cbiAgY29tcG9uZW50OiBfcHJvcFR5cGVzLmRlZmF1bHQuYW55LFxuXG4gIC8qKlxuICAgKiBBIHNldCBvZiBgPFRyYW5zaXRpb24+YCBjb21wb25lbnRzLCB0aGF0IGFyZSB0b2dnbGVkIGBpbmAgYW5kIG91dCBhcyB0aGV5XG4gICAqIGxlYXZlLiB0aGUgYDxUcmFuc2l0aW9uR3JvdXA+YCB3aWxsIGluamVjdCBzcGVjaWZpYyB0cmFuc2l0aW9uIHByb3BzLCBzb1xuICAgKiByZW1lbWJlciB0byBzcHJlYWQgdGhlbSB0aHJvdWdoIGlmIHlvdSBhcmUgd3JhcHBpbmcgdGhlIGA8VHJhbnNpdGlvbj5gIGFzXG4gICAqIHdpdGggb3VyIGA8RmFkZT5gIGV4YW1wbGUuXG4gICAqL1xuICBjaGlsZHJlbjogX3Byb3BUeXBlcy5kZWZhdWx0Lm5vZGUsXG5cbiAgLyoqXG4gICAqIEEgY29udmVuaWVuY2UgcHJvcCB0aGF0IGVuYWJsZXMgb3IgZGlzYWJsZXMgYXBwZWFyIGFuaW1hdGlvbnNcbiAgICogZm9yIGFsbCBjaGlsZHJlbi4gTm90ZSB0aGF0IHNwZWNpZnlpbmcgdGhpcyB3aWxsIG92ZXJyaWRlIGFueSBkZWZhdWx0cyBzZXRcbiAgICogb24gaW5kaXZpZHVhbCBjaGlsZHJlbiBUcmFuc2l0aW9ucy5cbiAgICovXG4gIGFwcGVhcjogX3Byb3BUeXBlcy5kZWZhdWx0LmJvb2wsXG5cbiAgLyoqXG4gICAqIEEgY29udmVuaWVuY2UgcHJvcCB0aGF0IGVuYWJsZXMgb3IgZGlzYWJsZXMgZW50ZXIgYW5pbWF0aW9uc1xuICAgKiBmb3IgYWxsIGNoaWxkcmVuLiBOb3RlIHRoYXQgc3BlY2lmeWluZyB0aGlzIHdpbGwgb3ZlcnJpZGUgYW55IGRlZmF1bHRzIHNldFxuICAgKiBvbiBpbmRpdmlkdWFsIGNoaWxkcmVuIFRyYW5zaXRpb25zLlxuICAgKi9cbiAgZW50ZXI6IF9wcm9wVHlwZXMuZGVmYXVsdC5ib29sLFxuXG4gIC8qKlxuICAgKiBBIGNvbnZlbmllbmNlIHByb3AgdGhhdCBlbmFibGVzIG9yIGRpc2FibGVzIGV4aXQgYW5pbWF0aW9uc1xuICAgKiBmb3IgYWxsIGNoaWxkcmVuLiBOb3RlIHRoYXQgc3BlY2lmeWluZyB0aGlzIHdpbGwgb3ZlcnJpZGUgYW55IGRlZmF1bHRzIHNldFxuICAgKiBvbiBpbmRpdmlkdWFsIGNoaWxkcmVuIFRyYW5zaXRpb25zLlxuICAgKi9cbiAgZXhpdDogX3Byb3BUeXBlcy5kZWZhdWx0LmJvb2wsXG5cbiAgLyoqXG4gICAqIFlvdSBtYXkgbmVlZCB0byBhcHBseSByZWFjdGl2ZSB1cGRhdGVzIHRvIGEgY2hpbGQgYXMgaXQgaXMgZXhpdGluZy5cbiAgICogVGhpcyBpcyBnZW5lcmFsbHkgZG9uZSBieSB1c2luZyBgY2xvbmVFbGVtZW50YCBob3dldmVyIGluIHRoZSBjYXNlIG9mIGFuIGV4aXRpbmdcbiAgICogY2hpbGQgdGhlIGVsZW1lbnQgaGFzIGFscmVhZHkgYmVlbiByZW1vdmVkIGFuZCBub3QgYWNjZXNzaWJsZSB0byB0aGUgY29uc3VtZXIuXG4gICAqXG4gICAqIElmIHlvdSBkbyBuZWVkIHRvIHVwZGF0ZSBhIGNoaWxkIGFzIGl0IGxlYXZlcyB5b3UgY2FuIHByb3ZpZGUgYSBgY2hpbGRGYWN0b3J5YFxuICAgKiB0byB3cmFwIGV2ZXJ5IGNoaWxkLCBldmVuIHRoZSBvbmVzIHRoYXQgYXJlIGxlYXZpbmcuXG4gICAqXG4gICAqIEB0eXBlIEZ1bmN0aW9uKGNoaWxkOiBSZWFjdEVsZW1lbnQpIC0+IFJlYWN0RWxlbWVudFxuICAgKi9cbiAgY2hpbGRGYWN0b3J5OiBfcHJvcFR5cGVzLmRlZmF1bHQuZnVuY1xufSA6IHt9O1xuVHJhbnNpdGlvbkdyb3VwLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcztcblxudmFyIF9kZWZhdWx0ID0gKDAsIF9yZWFjdExpZmVjeWNsZXNDb21wYXQucG9seWZpbGwpKFRyYW5zaXRpb25Hcm91cCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzW1wiZGVmYXVsdFwiXTsiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY3JlYXRlUG9ydGFsIH0gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBDU1NUcmFuc2l0aW9uIGZyb20gJ3JlYWN0LXRyYW5zaXRpb24tZ3JvdXAvQ1NTVHJhbnNpdGlvbic7XG5pbXBvcnQgVHJhbnNpdGlvbkdyb3VwIGZyb20gJ3JlYWN0LXRyYW5zaXRpb24tZ3JvdXAvVHJhbnNpdGlvbkdyb3VwJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5pbXBvcnQgQm94IGZyb20gJy4uL0JveCc7XG5pbXBvcnQgeyBDb2xvclR5cGUgfSBmcm9tICcuLi8uLi90eXBlcyc7XG5cbnR5cGUgUG9zaXRpb25UeXBlID0gJ3RvcCcgfCAndG9wLWxlZnQnIHwgJ3RvcC1yaWdodCcgfCAnYm90dG9tJyB8ICdib3R0b20tbGVmdCcgfCAnYm90dG9tLXJpZ2h0JztcblxuaW50ZXJmYWNlIFRvYXN0VHlwZSB7XG4gIC8qKiDoqo3orZhJRCAqL1xuICBpZDogc3RyaW5nO1xuICAvKiog6KGo56S644GZ44KL5YaF5a65ICovXG4gIG1lc3NhZ2U/OiBSZWFjdC5SZWFjdE5vZGU7XG4gIC8qKiDog4zmma/jga7oibIgKi9cbiAgY29sb3I/OiBDb2xvclR5cGU7XG4gIC8qKiDooajnpLrjgZXjgozjgovmmYLplpMgbnVsbOOBruWgtOWQiOOBr+iHquWLleOBp+mWieOBmOOCieOCjOOBvuOBm+OCkyAqL1xuICBkdXJhdGlvbj86IG51bWJlciB8IG51bGw7XG59XG5cbmludGVyZmFjZSBUb2FzdFByb3BzIGV4dGVuZHMgVG9hc3RUeXBlIHtcbiAgY2xlYXI6ICgpID0+IHZvaWQ7XG59XG5cbmNvbnN0IFdyYXBwZXIgPSBzdHlsZWQoQm94KWBcbiAgcGFkZGluZzogMC4zNzVlbSAwLjc1ZW07XG4gIG1heC13aWR0aDogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgei1pbmRleDogOTk5OTtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xuXG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybSwgb3BhY2l0eTtcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKTtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMjUwbXM7XG5cbiAgJi5tb3ZlLWVudGVyIHtcbiAgICBvcGFjaXR5OiAwLjAxO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC44KTtcbiAgfVxuICAmLm1vdmUtZW50ZXItYWN0aXZlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIH1cbiAgJi5tb3ZlLWV4aXQge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgfVxuICAmLm1vdmUtZXhpdC1hY3RpdmUge1xuICAgIG9wYWNpdHk6IDAuMDE7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjgpO1xuICB9XG5gO1xuXG5leHBvcnQgY2xhc3MgVG9hc3RJdGVtIGV4dGVuZHMgUHVyZUNvbXBvbmVudDxUb2FzdFByb3BzPiB7XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgZHVyYXRpb246IDUwMDAsXG4gIH07XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgaWYgKHRoaXMucHJvcHMuZHVyYXRpb24gIT09IG51bGwpIHtcbiAgICAgIHNldFRpbWVvdXQodGhpcy5wcm9wcy5jbGVhciwgdGhpcy5wcm9wcy5kdXJhdGlvbik7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgbWVzc2FnZSwgY29sb3IgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxXcmFwcGVyIGJvcmRlcmxlc3MgY29sb3I9e2NvbG9yfT5cbiAgICAgICAge21lc3NhZ2V9XG4gICAgICA8L1dyYXBwZXI+XG4gICAgKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBzZXRQb3NpdGlvbihwb3NpdGlvbjogc3RyaW5nLCBpc0ZpeGVkPzogYm9vbGVhbikge1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgY29uc3QgYmFzZSA9IGBwb3NpdGlvbjogJHtpc0ZpeGVkID8gJ2ZpeGVkJyA6ICdhYnNvbHV0ZSd9OyB6LWluZGV4OiA5OTk5OyBkaXNwbGF5OiBmbGV4OyBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBgO1xuICBzd2l0Y2ggKHBvc2l0aW9uKSB7XG4gICAgY2FzZSAnYm90dG9tJzoge1xuICAgICAgcmV0dXJuIGAke2Jhc2V9IGJvdHRvbTogMXJlbTsgbGVmdDogNTAlOyBhbGlnbi1pdGVtOiBjZW50ZXI7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtgO1xuICAgIH1cbiAgICBjYXNlICdib3R0b20tbGVmdCc6IHtcbiAgICAgIHJldHVybiBgJHtiYXNlfSBib3R0b206IDFyZW07IGxlZnQ6IDFyZW07IGFsaWduLWl0ZW06IGZsZXgtc3RhcnQ7YDtcbiAgICB9XG4gICAgY2FzZSAnYm90dG9tLXJpZ2h0Jzoge1xuICAgICAgcmV0dXJuIGAke2Jhc2V9IGJvdHRvbTogMXJlbTsgcmlnaHQ6IDFyZW07IGFsaWduLWl0ZW06IGZsZXgtZW5kO2A7XG4gICAgfVxuICAgIGNhc2UgJ3RvcCc6IHtcbiAgICAgIHJldHVybiBgJHtiYXNlfSB0b3A6IDFyZW07IGxlZnQ6IDUwJTsgYWxpZ24taXRlbTogY2VudGVyOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7YDtcbiAgICB9XG4gICAgY2FzZSAndG9wLWxlZnQnOiB7XG4gICAgICByZXR1cm4gYCR7YmFzZX0gdG9wOiAxcmVtOyBsZWZ0OiAxcmVtOyBhbGlnbi1pdGVtOiBmbGV4LXN0YXJ0O2A7XG4gICAgfVxuICAgIGNhc2UgJ3RvcC1yaWdodCc6XG4gICAgZGVmYXVsdDoge1xuICAgICAgcmV0dXJuIGAke2Jhc2V9IHRvcDogMXJlbTsgcmlnaHQ6IDFyZW07IGFsaWduLWl0ZW06IGZsZXgtZW5kO2A7XG4gICAgfVxuICB9XG59XG5cbmludGVyZmFjZSBDb250YWluZXJQcm9wcyB7XG4gIC8qKiDooajnpLrjgZnjgotUb2FzdOOBruODquOCueODiCAqL1xuICB0b2FzdHM6IFRvYXN0VHlwZVtdO1xuICAvKiogdG9hc3TjgpLmtojjgZnjgr/jgqTjg5/jg7PjgrDjga7jgrPjg7zjg6vjg5Djg4Pjgq8gKi9cbiAgY2xlYXI6IChpZDogc3RyaW5nKSA9PiB2b2lkO1xuICAvKiogdG9wLCB0b3AtcmlnaHQsIHRvcC1sZWZ0LCBib3R0b20sIGJvdHRvbS1yaWdodCwgYm90dG9tLWxlZnQgKi9cbiAgcG9zaXRpb24/OiBQb3NpdGlvblR5cGU7XG4gIC8qKiDjgrnjgq/jg63jg7zjg6vjgZfjgabjgoLlm7rlrprjgajjgZfjgabooajnpLrjgZnjgosgKi9cbiAgZml4ZWQ/OiBib29sZWFuO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb2FzdENvbnRhaW5lciBleHRlbmRzIENvbXBvbmVudDxDb250YWluZXJQcm9wcz4ge1xuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIHRvYXN0czogW10sXG4gICAgcG9zaXRpb246ICd0b3AtcmlnaHQnLFxuICAgIGZpeGVkOiBmYWxzZSxcbiAgfTtcblxuICBzaG91bGRDb21wb25lbnRVcGRhdGUocHJvcHM6IENvbnRhaW5lclByb3BzKSB7XG4gICAgcmV0dXJuIHByb3BzLnRvYXN0cy5sZW5ndGggIT09IHRoaXMucHJvcHMudG9hc3RzLmxlbmd0aCB8fFxuICAgICAgcHJvcHMucG9zaXRpb24gIT09IHRoaXMucHJvcHMucG9zaXRpb247XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUocHJvcHM6IENvbnRhaW5lclByb3BzKSB7XG4gICAgaWYgKFxuICAgICAgdGhpcy5lbGVtZW50ICYmXG4gICAgICAocHJvcHMucG9zaXRpb24gIT09IHRoaXMucHJvcHMucG9zaXRpb24gfHwgcHJvcHMuZml4ZWQgIT09IHRoaXMucHJvcHMuZml4ZWQpXG4gICAgKSB7XG4gICAgICB0aGlzLmVsZW1lbnQuc3R5bGUuY3NzVGV4dCA9IHNldFBvc2l0aW9uKHRoaXMucHJvcHMucG9zaXRpb24hLCB0aGlzLnByb3BzLmZpeGVkKTtcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICBpZiAodGhpcy5lbGVtZW50KSBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHRoaXMuZWxlbWVudCk7XG4gIH1cblxuICBjbGVhciA9IChpZDogc3RyaW5nKSA9PiAoKSA9PiB7XG4gICAgdGhpcy5wcm9wcy5jbGVhcihpZCk7XG4gIH1cblxuICByZW5kZXJUb2FzdCA9ICgpID0+IHtcbiAgICBjb25zdCB7IHRvYXN0cyB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPFRyYW5zaXRpb25Hcm91cCBjb21wb25lbnQ9e251bGx9PlxuICAgICAgICB7dG9hc3RzLm1hcChwcm9wcyA9PiAoXG4gICAgICAgICAgPENTU1RyYW5zaXRpb25cbiAgICAgICAgICAgIGtleT17cHJvcHMuaWR9XG4gICAgICAgICAgICB0aW1lb3V0PXsyNTB9XG4gICAgICAgICAgICBjbGFzc05hbWVzPVwibW92ZVwiXG4gICAgICAgICAgICB1bm1vdW50T25FeGl0XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPFRvYXN0SXRlbVxuICAgICAgICAgICAgICBrZXk9e3Byb3BzLmlkfVxuICAgICAgICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAgICAgICAgIGNsZWFyPXt0aGlzLmNsZWFyKHByb3BzLmlkKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9DU1NUcmFuc2l0aW9uPlxuICAgICAgICApKX1cbiAgICAgIDwvVHJhbnNpdGlvbkdyb3VwPlxuICAgICk7XG4gIH1cblxuICBlbGVtZW50PzogSFRNTERpdkVsZW1lbnQ7XG5cbiAgcmVuZGVyKCk6IFJlYWN0LlJlYWN0UG9ydGFsIHwgbnVsbCB7XG4gICAgaWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcgJiYgIXRoaXMuZWxlbWVudCkge1xuICAgICAgdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICB0aGlzLmVsZW1lbnQuc3R5bGUuY3NzVGV4dCA9IHNldFBvc2l0aW9uKHRoaXMucHJvcHMucG9zaXRpb24hLCB0aGlzLnByb3BzLmZpeGVkKTtcbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5lbGVtZW50KTtcbiAgICB9XG5cblxuICAgIGlmICh0aGlzLmVsZW1lbnQpIHtcbiAgICAgIHJldHVybiBjcmVhdGVQb3J0YWwodGhpcy5yZW5kZXJUb2FzdCgpLCB0aGlzLmVsZW1lbnQpO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBDaGlsZHJlbiwgQ1NTUHJvcGVydGllcyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHNldEFsaWduIGZyb20gJy4uLy4uL3V0aWxzL3NldEFsaWduJztcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vQnV0dG9uJztcbmltcG9ydCB7IENvbG9yVHlwZSwgVGhlbWVUeXBlLCBBbGlnblR5cGUgfSBmcm9tICcuLi8uLi90eXBlcyc7XG5cbmNvbnN0IFdyYXBwZXIgPSBzdHlsZWQubmF2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6ICR7c2V0QWxpZ259O1xuXG4gIC50YWItY29udGVudCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgJHsoeyBhbGlnbiB9KSA9PiBhbGlnbiA/ICcnIDogJ2ZsZXgtZ3JvdzogMTsnfVxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgfVxuYDtcblxuaW50ZXJmYWNlIEl0ZW1Qcm9wcyB7XG4gIGFsaWduPzogYW55O1xuICBhY3RpdmU6IGJvb2xlYW47XG59XG5cbmNvbnN0IFRhYkl0ZW0gPSBzdHlsZWQuZGl2PEl0ZW1Qcm9wcz5gXG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmbGV4LWdyb3c6IDE7XG4gIGN1cnNvcjogcG9pbnRlcjtcblxuICBhIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnRleHR9O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICBwYWRkaW5nOiAwLjM3NWVtIDAuNzVlbTtcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XG5cbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBiYWNrZ3JvdW5kLWNvbG9yO1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDE1MG1zO1xuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcblxuICAgICY6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjAzKTtcbiAgICB9XG4gIH1cbmA7XG5cbmZ1bmN0aW9uIHNldENvbG9yKHsgdGhlbWUsIGNvbG9yIH06IHsgdGhlbWU6IFRoZW1lVHlwZSwgY29sb3I/OiBDb2xvclR5cGUgfSkge1xuICByZXR1cm4gIWNvbG9yID8gdGhlbWUuYmFja2dyb3VuZCA6IHRoZW1lW2NvbG9yXTtcbn1cblxuaW50ZXJmYWNlIEluZGljYXRvclByb3BzIHtcbiAgY29sb3I/OiBDb2xvclR5cGU7XG4gIHN0eWxlPzogQ1NTUHJvcGVydGllcztcbn1cblxuY29uc3QgSW5kaWNhdG9yID0gc3R5bGVkLmRpdjxJbmRpY2F0b3JQcm9wcz5gXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAke3NldENvbG9yfTtcbiAgaGVpZ2h0OiAycHg7XG5cbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0O1xuXG4gIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm07XG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybTtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMjAwbXM7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSk7XG5gO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICAvKiog6Imy5oyH5a6aICovXG4gIGNvbG9yPzogQ29sb3JUeXBlO1xuICAvKiogbGVmdCB8IHJpZ2h0IHwgY2VudGVyICovXG4gIGFsaWduPzogQWxpZ25UeXBlO1xuICAvKiog5LiA5rCX44Gr6KGo56S644GZ44KL5pyA5aSn44Gu5pWw44Gu5oyH5a6aICovXG4gIG1heEl0ZW1zPzogbnVtYmVyO1xuXG4gIGNoaWxkcmVuOiBhbnk7XG59XG5cbmludGVyZmFjZSBTdGF0ZSB7XG4gIHN0YXJ0OiBudW1iZXI7XG4gIGN1cnJlbnQ/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhYnMgZXh0ZW5kcyBDb21wb25lbnQ8UHJvcHM+IHtcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBtYXhJdGVtczogNSxcbiAgfVxuXG4gIHN0YXRpYyBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMocHJvcHM6IFByb3BzLCBzdGF0ZTogU3RhdGUpIHtcbiAgICBsZXQgYWN0aXZlSW5kZXg7XG4gICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHByb3BzLmNoaWxkcmVuLmxlbmd0aDsgaSA8IGxlbjsgaSArPSAxKSB7XG4gICAgICBjb25zdCBjaGlsZCA9IHByb3BzLmNoaWxkcmVuW2ldO1xuICAgICAgaWYgKGNoaWxkLnByb3BzLmFjdGl2ZSkge1xuICAgICAgICBhY3RpdmVJbmRleCA9IGk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAuLi5zdGF0ZSxcbiAgICAgIGN1cnJlbnQ6IGFjdGl2ZUluZGV4LFxuICAgIH07XG4gIH1cblxuICBzdGF0aWMgSXRlbSA9IFRhYkl0ZW07XG5cbiAgc3RhdGUgPSB7IHN0YXJ0OiAwLCBjdXJyZW50OiBudWxsIH07XG5cbiAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKHByb3BzOiBQcm9wcywgc3RhdGU6IFN0YXRlKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGUuc3RhcnQgIT09IHN0YXRlLnN0YXJ0IHx8XG4gICAgICB0aGlzLnN0YXRlLmN1cnJlbnQgIT09IHN0YXRlLmN1cnJlbnQ7XG4gIH1cblxuICBvbk5leHQgPSAoKSA9PiB7XG4gICAgY29uc3QgdGhyZXNob2xkID0gdGhpcy5wcm9wcy5tYXhJdGVtcyE7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLnN0YXRlLnN0YXJ0ICsgdGhyZXNob2xkO1xuICAgIGNvbnN0IGNvdW50ID0gQ2hpbGRyZW4uY291bnQodGhpcy5wcm9wcy5jaGlsZHJlbilcbiAgICBpZiAodmFsdWUgPCBjb3VudCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHN0YXJ0OiB2YWx1ZSB9KTtcbiAgICB9XG4gIH1cblxuICBvblByZXYgPSAoKSA9PiB7XG4gICAgaWYgKHRoaXMuc3RhdGUuc3RhcnQgPT09IDApIHJldHVybjtcblxuICAgIGNvbnN0IHRocmVzaG9sZCA9IHRoaXMucHJvcHMubWF4SXRlbXMhO1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5zdGF0ZS5zdGFydCAtIHRocmVzaG9sZDtcbiAgICB0aGlzLnNldFN0YXRlKHsgc3RhcnQ6IHZhbHVlIDwgMCA/IDAgOiB2YWx1ZSB9KTtcbiAgfVxuXG4gIGdldEluZGljYXRvclBvc2l0aW9uID0gKCk6IENTU1Byb3BlcnRpZXMgfCB1bmRlZmluZWQgPT4ge1xuICAgIGNvbnN0IHsgY3VycmVudCB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCB7IGNoaWxkcmVuLCBtYXhJdGVtcyB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAoY3VycmVudCA9PT0gbnVsbCB8fCBjdXJyZW50ID09PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWQ7XG4gICAgaWYgKCFjaGlsZHJlbiB8fCAhY2hpbGRyZW4ubGVuZ3RoKSByZXR1cm4gdW5kZWZpbmVkO1xuXG4gICAgY29uc3QgdG90YWwgPSBjaGlsZHJlbi5sZW5ndGggPiBtYXhJdGVtcyEgPyBtYXhJdGVtcyA6IGNoaWxkcmVuLmxlbmd0aDtcbiAgICBjb25zdCB2YWx1ZSA9IChjdXJyZW50ICogMTAwKSArICclJztcblxuICAgIHJldHVybiB7XG4gICAgICB2aXNpYmlsaXR5OiAndmlzaWJsZScsXG4gICAgICB3aWR0aDogYCR7TWF0aC5yb3VuZCgoMTAwIC8gdG90YWwpKX0lYCxcbiAgICAgIHRyYW5zZm9ybTogYHRyYW5zbGF0ZVgoJHt2YWx1ZX0pYFxuICAgIH07XG4gIH1cblxuICAvLyBUT0RPOiBtYWtlIHRhYiBzY3JvbGxhYmxlIHZpYSBhcnJvdyBpY29uc1xuICByZW5kZXJDaGlsZHJlbiA9IChjaGlsZDogUmVhY3QuUmVhY3RDaGlsZCwgaW5kZXg6IG51bWJlcikgPT4ge1xuICAgIGlmICh0aGlzLnN0YXRlLnN0YXJ0ID4gaW5kZXgpIHJldHVybiBudWxsO1xuICAgIGlmICh0aGlzLnN0YXRlLnN0YXJ0ICsgaW5kZXggPj0gdGhpcy5wcm9wcy5tYXhJdGVtcyEpIHJldHVybiBudWxsO1xuICAgIGlmICh0eXBlb2YgY2hpbGQgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiBjaGlsZCA9PT0gJ251bWJlcicpIHJldHVybiBudWxsO1xuXG4gICAgcmV0dXJuIDxUYWJJdGVtIHsuLi5jaGlsZC5wcm9wc30gYWxpZ249e3RoaXMucHJvcHMuYWxpZ259IC8+O1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY2hpbGRyZW4sIGFsaWduLCBjb2xvciwgbWF4SXRlbXMgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBzdGFydCB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCB0b3RhbCA9IGNoaWxkcmVuID8gY2hpbGRyZW4ubGVuZ3RoIDogMDtcbiAgICBjb25zdCBzdHlsZSA9IHRoaXMuZ2V0SW5kaWNhdG9yUG9zaXRpb24oKTtcbiAgICByZXR1cm4gKFxuICAgICAgPFdyYXBwZXIgYWxpZ249e2FsaWdufT5cbiAgICAgICAge3N0YXJ0ID4gbWF4SXRlbXMhICYmICg8QnV0dG9uIGNvbG9yPVwidGV4dFwiPnsnPCd9PC9CdXR0b24+KX1cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWItY29udGVudFwiPlxuICAgICAgICAgIHtDaGlsZHJlbi5tYXAoY2hpbGRyZW4sIHRoaXMucmVuZGVyQ2hpbGRyZW4pfVxuICAgICAgICAgIDxJbmRpY2F0b3IgY29sb3I9e2NvbG9yfSBzdHlsZT17c3R5bGV9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7dG90YWwgPiBtYXhJdGVtcyEgJiYgc3RhcnQgPiBtYXhJdGVtcyEgJiYgKDxCdXR0b24gY29sb3I9XCJ0ZXh0XCI+eyc+J308L0J1dHRvbj4pfVxuICAgICAgPC9XcmFwcGVyPlxuICAgICk7XG4gIH1cbn07XG4iLCJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCwgSFRNTEF0dHJpYnV0ZXMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBDU1NUcmFuc2l0aW9uIGZyb20gJ3JlYWN0LXRyYW5zaXRpb24tZ3JvdXAvQ1NTVHJhbnNpdGlvbic7XG5pbXBvcnQgeyBDb2xvclR5cGUsIENTU1R5cGUgfSBmcm9tICcuLi8uLi90eXBlcyc7XG5cbmludGVyZmFjZSBMb2FkaW5nUHJvcHMgZXh0ZW5kcyBIVE1MQXR0cmlidXRlczxIVE1MRGl2RWxlbWVudD4ge1xuICAvKiogdHJ1ZeOBruWgtOWQiOmWi+Wni+OBl+OBvuOBmSAqL1xuICBsb2FkaW5nOiBib29sZWFuO1xuICAvKiog44OQ44O844Gu6Imy44Gu5oyH5a6aICovXG4gIGNvbG9yPzogQ29sb3JUeXBlO1xuICAvKiog44OQ44O844GuQ1NTIHBvc2l0aW9u44Gu5oyH5a6aICovXG4gIHBvc2l0aW9uPzogJ2Fic29sdXRlJyB8ICdmaXhlZCcgfCAnc3RpY2t5JztcbiAgLyoqIOODkOODvOOBruiDjOaZr+OBruiJsuOBruiHqueUseaMh+WumiAqL1xuICBiYWNrZ3JvdW5kPzogc3RyaW5nO1xuICAvKiog44OQ44O844Gu57im5bmF44Gu5a6a576pICovXG4gIHNpemU/OiBzdHJpbmc7XG4gIC8qKiDjg5Djg7zjga7jgqLjg4vjg6Hjg7zjgrfjg6fjg7Pjga5kdXJhdGlvbuaMh+WumiAo5Y2Y5L2N77yabXMpICovXG4gIGR1cmF0aW9uPzogbnVtYmVyO1xuICBjc3M/OiBDU1NUeXBlO1xufVxuXG5jb25zdCBXcmFwcGVyID0gc3R5bGVkLmRpdjxMb2FkaW5nUHJvcHM+YFxuICBwb3NpdGlvbjogJHsoeyBwb3NpdGlvbiB9KSA9PiBwb3NpdGlvbn07XG4gIGJhY2tncm91bmQtY29sb3I6ICR7KHsgYmFja2dyb3VuZCB9KSA9PiBiYWNrZ3JvdW5kfTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcblxuICAubG9hZGluZy1iYXIge1xuICAgIGhlaWdodDogJHsoeyBzaXplIH0pID0+IHNpemV9O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR7KHsgY29sb3IsIHRoZW1lIH0pID0+IHRoZW1lW2NvbG9yIV19O1xuXG4gICAgd2lsbC1jaGFuZ2U6IHdpZHRoLCBvcGFjaXR5O1xuICAgIHotaW5kZXg6IDEwMDAwMDA7XG5cbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiB3aWR0aCwgb3BhY2l0eTtcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAkeyh7IGR1cmF0aW9uIH0pID0+IGR1cmF0aW9ufW1zO1xuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XG5cbiAgICAmLmxvYWQtZW50ZXIge1xuICAgICAgd2lkdGg6IDA7XG4gICAgfVxuXG4gICAgJi5sb2FkLWVudGVyLWRvbmUge1xuICAgICAgd2lkdGg6IDg1JTtcbiAgICB9XG5cbiAgICAmLmxvYWQtZXhpdCB7XG4gICAgICB3aWR0aDogODUlO1xuICAgIH1cblxuICAgICYubG9hZC1leGl0LWFjdGl2ZSB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuICB9XG5cbiAgJHsoeyBjc3MgfSkgPT4gY3NzIHx8IHt9fVxuYDtcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2FkaW5nQmFyIGV4dGVuZHMgUHVyZUNvbXBvbmVudDxMb2FkaW5nUHJvcHM+IHtcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICBjb2xvcjogJ3ByaW1hcnknLFxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIGJhY2tncm91bmQ6ICd0cmFuc3BhcmVudCcsXG4gICAgc2l6ZTogJzNweCcsXG4gICAgZHVyYXRpb246IDE1MCxcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPFdyYXBwZXIgey4uLnRoaXMucHJvcHN9PlxuICAgICAgICA8Q1NTVHJhbnNpdGlvblxuICAgICAgICAgIGNsYXNzTmFtZXM9XCJsb2FkXCJcbiAgICAgICAgICB0aW1lb3V0PXt0aGlzLnByb3BzLmR1cmF0aW9uIX1cbiAgICAgICAgICBpbj17dGhpcy5wcm9wcy5sb2FkaW5nfVxuICAgICAgICAgIHVubW91bnRPbkV4aXRcbiAgICAgICAgPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9hZGluZy1iYXJcIiAvPlxuICAgICAgICA8L0NTU1RyYW5zaXRpb24+XG4gICAgICA8L1dyYXBwZXI+XG4gICAgKTtcbiAgfVxufVxuIiwiaW1wb3J0IFJlYWN0LCB7IEhUTUxBdHRyaWJ1dGVzIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCwgeyBjc3MsIGtleWZyYW1lcyB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7IENvbG9yVHlwZSwgVGhlbWVUeXBlIH0gZnJvbSAnLi4vLi4vdHlwZXMnO1xuXG5pbnRlcmZhY2UgUHJvcHMgZXh0ZW5kcyBIVE1MQXR0cmlidXRlczxIVE1MRGl2RWxlbWVudD57XG4gIC8qKiDoibLjga7mjIflrpogKi9cbiAgY29sb3I/OiBDb2xvclR5cGU7XG4gIC8qKiDmqKrluYUgKi9cbiAgd2lkdGg/OiBzdHJpbmc7XG4gIC8qKiDnuKbluYUgKi9cbiAgaGVpZ2h0Pzogc3RyaW5nO1xuICAvKiogc3Bpbm5lcuOBruWkquOBlSAqL1xuICBib3JkZXJTaXplPzogc3RyaW5nO1xufVxuXG5mdW5jdGlvbiBnZXRDb2xvcih7IHRoZW1lLCBjb2xvciB9OiB7IHRoZW1lOiBUaGVtZVR5cGUsIGNvbG9yPzogQ29sb3JUeXBlIH0pIHtcbiAgY29uc3QgdmFsdWUgPSAoIWNvbG9yIHx8IGNvbG9yID09PSAnbGlnaHQnKSA/IHRoZW1lLmJhY2tncm91bmQgOiB0aGVtZVtjb2xvcl07XG5cbiAgcmV0dXJuIGNzc2BcbiAgICBib3JkZXItY29sb3I6ICR7dmFsdWV9O1xuICAgIGJvcmRlci1yaWdodC1jb2xvcjogJHt0aGVtZS5ib3JkZXJ9O1xuICAgIGJvcmRlci10b3AtY29sb3I6ICR7dGhlbWUuYm9yZGVyfTtcbiAgYDtcbn1cblxuY29uc3Qgc3BpbiA9IGtleWZyYW1lc2BcbiAgZnJvbSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIH1cbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM1OWRlZyk7XG4gIH1cbmA7XG5cbmNvbnN0IFNwaW5uZXIgPSBzdHlsZWQuZGl2PFByb3BzPmBcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogJHsoeyB3aWR0aCB9KSA9PiB3aWR0aCA/IHdpZHRoIDogJzEwMCUnfTtcbiAgaGVpZ2h0OiAkeyh7IGhlaWdodCB9KSA9PiBoZWlnaHQgPyBoZWlnaHQgOiAnMTAwJSd9O1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAmOmFmdGVyIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICBhbmltYXRpb246ICR7c3Bpbn0gNzUwbXMgaW5maW5pdGUgbGluZWFyO1xuICAgIGJvcmRlcjogJHsoeyBib3JkZXJTaXplIH0pID0+IGJvcmRlclNpemV9IHNvbGlkO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgJHtnZXRDb2xvcn1cbiAgICBjb250ZW50OiBcIlwiO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIH1cbmA7XG5TcGlubmVyLmRpc3BsYXlOYW1lID0gJ1NwaW5uZXInO1xuU3Bpbm5lci5kZWZhdWx0UHJvcHMgPSB7XG4gIGJvcmRlclNpemU6ICcycHgnLFxufVxuXG5leHBvcnQgZGVmYXVsdCBTcGlubmVyO1xuIiwiLy8gZ3JpZCAmIGxheW91dFxuZXhwb3J0IHsgZGVmYXVsdCBhcyBCcmVhayB9IGZyb20gJy4vR3JpZC9CcmVhayc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIENvbnRhaW5lciB9IGZyb20gJy4vR3JpZC9Db250YWluZXInO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBSb3cgfSBmcm9tICcuL0dyaWQvUm93JztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQ29sIH0gZnJvbSAnLi9HcmlkL0NvbCc7XG5cblxuLy8gY29tbW9uXG5leHBvcnQgeyBkZWZhdWx0IGFzIENvbnRlbnQgfSBmcm9tICcuL0NvbnRlbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9Db250ZW50JztcblxuZXhwb3J0IHsgZGVmYXVsdCBhcyBCdXR0b24gfSBmcm9tICcuL0J1dHRvbic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEJ1dHRvbkdyb3VwIH0gZnJvbSAnLi9CdXR0b24vQnV0dG9uR3JvdXAnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBUYWJsZSB9IGZyb20gJy4vVGFibGUnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBCb3ggfSBmcm9tICcuL0JveCc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFByb2dyZXNzIH0gZnJvbSAnLi9Qcm9ncmVzcyc7XG5cbi8vIGZvcm1cbmV4cG9ydCAqIGZyb20gJy4vRm9ybSc7XG5cbi8vIGljb25zXG5leHBvcnQgKiBmcm9tICcuL0ljb25zJztcblxuLy8gY29tcG9uZW50c1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBBcHBCYXIgfSBmcm9tICcuL0FwcEJhcic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFRhZyB9IGZyb20gJy4vVGFnJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgSGVybyB9IGZyb20gJy4vSGVybyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFRvb2x0aXAgfSBmcm9tICcuL1Rvb2x0aXAnO1xuZXhwb3J0ICogZnJvbSAnLi9TaWRlTWVudSc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIENhcmQgfSBmcm9tICcuL0NhcmQnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBQb3BvdmVyIH0gZnJvbSAnLi9Qb3BvdmVyJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTW9kYWwgfSBmcm9tICcuL01vZGFsJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgVG9hc3QgfSBmcm9tICcuL1RvYXN0JztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgVGFicyB9IGZyb20gJy4vVGFicyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIExvYWRpbmdCYXIgfSBmcm9tICcuL0xvYWRpbmcvQmFyJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgU3Bpbm5lciB9IGZyb20gJy4vTG9hZGluZy9TcGlubmVyJztcbiIsImltcG9ydCB7IFRoZW1lVHlwZSB9IGZyb20gXCIuLi90eXBlc1wiO1xuXG5jb25zdCB0aGVtZTogVGhlbWVUeXBlID0ge1xuICBmb250RmFtaWx5OiAn44OS44Op44Ku44OO6KeS44K044K344OD44KvLFwi44OS44Op44Ku44OO6KeS44K0IFByb04gVzNcIizjg6HjgqTjg6rjgqosTWVpcnlvLFwi77yt77yzIO+8sOOCtOOCt+ODg+OCr1wiLFwiTVMgUEdvdGhpY1wiLHNhbnMtc2VyaWYnLFxuICBmb250U2l6ZTogJzE2cHgnLFxuXG4gIHJlc3BvbnNpdmU6IHRydWUsXG4gIGd1dHRlcjogMjQsXG4gIHNtYWxsR3V0dGVyOiAxNixcbiAgYm94U2hhZG93OiAnMCAxcHggMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjA1KScsXG5cbiAgbW9iaWxlOiA1NzYsXG4gIHRhYmxldDogNzY5LFxuICBkZXNrdG9wOiA5NjAsXG4gIGZ1bGxoZDogMTM0NCxcblxuICByYWRpdXM6IDQsXG5cbiAgcHJpbWFyeTogJyMzN0IxNTEnLFxuICBsaW5rOiAnIzU3OGJhOScsXG4gIGluZm86ICcjMjA5Y2VlJyxcbiAgc3VjY2VzczogJyMwZmE4ODYnLFxuICB3YXJuaW5nOiAnI2YyYjU0MScsXG4gIGRhbmdlcjogJyNmMzU3NWEnLFxuICBkYXJrOiAnIzM2MzYzNicsXG4gIGxpZ2h0OiAnIzliOWI5YicsXG5cbiAgYmxhY2s6ICcjMGEwYTBhJyxcbiAgYmxhY2tCaXM6ICcjMTIxMjEyJyxcbiAgYmxhY2tUZXI6ICcjMjQyNDI0JyxcblxuICB3aGl0ZTogJyNmZmZmZmYnLFxuICB3aGl0ZUJpczogJyNmYWZhZmEnLFxuICB3aGl0ZVRlcjogJyNmNWY1ZjUnLFxuXG4gIGdyZXk6ICcjN2E3YTdhJyxcbiAgZ3JleUxpZ2h0OiAnIzliOWI5YicsXG4gIGdyZXlMaWdodGVyOiAnI2RiZGJkYicsXG5cbiAgdGV4dDogJyM0YTRhNGEnLFxuICB0ZXh0RGFyazogJyM0YTRhNGEnLFxuICB0ZXh0TGlnaHQ6ICcjN2E3YTdhJyxcbiAgdGV4dFN0cm9uZzogJyM0YTRhNGEnLFxuXG4gIGJhY2tncm91bmQ6ICcjZjVmNWY1JyxcblxuICBib3JkZXI6ICcjZGJkYmRiJyxcbiAgYm9yZGVySG92ZXI6ICcjOWI5YjliJyxcbiAgYm9yZGVyQWN0aXZlOiAnIzRhNGE0YScsXG5cbiAgcGxhY2Vob2xkZXI6ICcjN2E3YTdhJyxcbn07XG5cblxuZXhwb3J0IGRlZmF1bHQgdGhlbWU7XG4iLCJpbXBvcnQgeyBjc3MgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbi8qISBiYXNlZCBvbiBub3JtYWxpemUuY3NzIHY4LjAuMCB8IE1JVCBMaWNlbnNlIHwgZ2l0aHViLmNvbS9uZWNvbGFzL25vcm1hbGl6ZS5jc3MgKi9cbmNvbnN0IG5vcm1hbGl6ZWQ6IGFueSA9IGNzc2BcbiAgKiwgOjphZnRlciwgOjpiZWZvcmUge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIH1cblxuICBodG1sIHtcbiAgICBsaW5lLWhlaWdodDogMS4xNTtcbiAgICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XG4gICAgLW1zLW92ZXJmbG93LXN0eWxlOiBzY3JvbGxiYXI7XG4gIH1cblxuICBib2R5IHtcbiAgICBtYXJnaW46IDA7XG4gICAgZm9udC1mYW1pbHk6ICR7KHsgdGhlbWUgfTogYW55KSA9PiB0aGVtZSA/IHRoZW1lLmZvbnRGYW1pbHkgOiAnXCJIaXJhZ2lubyBTYW5zXCIsIOODkuODqeOCruODjuinkuOCtOOCt+ODg+OCrywgXCJIaXJhZ2lubyBLYWt1IEdvdGhpYyBQcm9OXCIsIFwi44OS44Op44Ku44OO6KeS44K0IFByb04gVzNcIiwg5ri444K044K344OD44Kv5L2TLCBcIll1IEdvdGhpY1wiLCBZdUdvdGhpYywgXCLjg5Ljg6njgq7jg47op5LjgrTjgrfjg4Pjgq8gUHJvXCIsIEhpcmFLYWt1UHJvLVczLCBcIkhpcmFnaW5vIEtha3UgR290aGljIFByb1wiLCBRdWlja3NhbmQsIOODoeOCpOODquOCqiwgTWVpcnlvLCBPc2FrYSwgXCLvvK3vvLMg77yw44K044K344OD44KvXCIsIFwiTVMgUEdvdGhpY1wiLCBzYW5zLXNlcmlmJ307O1xuICAgIGZvbnQtc2l6ZTogJHsoeyB0aGVtZSB9OiBhbnkpID0+IHRoZW1lID8gdGhlbWUuZm9udFNpemUgOiAnMTZweCd9O1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gIH1cblxuICBoMSB7XG4gICAgZm9udC1zaXplOiAyZW07XG4gICAgbWFyZ2luOiAuNjdlbSAwO1xuICB9XG5cbiAgaHIge1xuICAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xuICAgIGhlaWdodDogMDtcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgfVxuXG4gIHByZSB7XG4gICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSxtb25vc3BhY2U7XG4gICAgZm9udC1zaXplOiAxZW07XG4gIH1cblxuICBhIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBjb2xvcjogJHsoeyB0aGVtZSB9OiBhbnkpID0+IHRoZW1lLmxpbmt9O1xuICB9XG5cbiAgYWJiclt0aXRsZV0ge1xuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgZG90dGVkO1xuICB9XG5cbiAgYixzdHJvbmcge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gIH1cblxuICBjb2RlLGtiZCxzYW1wIHtcbiAgICBmb250LWZhbWlseTogbW9ub3NwYWNlLG1vbm9zcGFjZTtcbiAgICBmb250LXNpemU6IDFlbTtcbiAgfVxuXG4gIHNtYWxsIHtcbiAgICBmb250LXNpemU6IDgwJTtcbiAgfVxuXG4gIHN1YixzdXAge1xuICAgIGZvbnQtc2l6ZTogNzUlO1xuICAgIGxpbmUtaGVpZ2h0OiAwO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG4gIH1cblxuICBzdWIge1xuICAgIGJvdHRvbTogLS4yNWVtO1xuICB9XG5cbiAgc3VwIHtcbiAgICB0b3A6IC0uNWVtO1xuICB9XG5cbiAgaW1nIHtcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XG4gIH1cblxuICBidXR0b24saW5wdXQsb3B0Z3JvdXAsc2VsZWN0LHRleHRhcmVhIHtcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgICBmb250LXNpemU6IDEwMCU7XG4gICAgbGluZS1oZWlnaHQ6IDEuMTU7XG4gICAgbWFyZ2luOiAwO1xuICB9XG5cbiAgYnV0dG9uLGlucHV0IHtcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgfVxuXG4gIGJ1dHRvbixzZWxlY3Qge1xuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICB9XG5cbiAgW3R5cGU9YnV0dG9uXSxbdHlwZT1yZXNldF0sW3R5cGU9c3VibWl0XSxidXR0b24ge1xuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uO1xuICB9XG5cbiAgW3R5cGU9YnV0dG9uXTo6LW1vei1mb2N1cy1pbm5lcixbdHlwZT1yZXNldF06Oi1tb3otZm9jdXMtaW5uZXIsW3R5cGU9c3VibWl0XTo6LW1vei1mb2N1cy1pbm5lcixidXR0b246Oi1tb3otZm9jdXMtaW5uZXIge1xuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG5cbiAgW3R5cGU9YnV0dG9uXTotbW96LWZvY3VzcmluZyxbdHlwZT1yZXNldF06LW1vei1mb2N1c3JpbmcsW3R5cGU9c3VibWl0XTotbW96LWZvY3VzcmluZyxidXR0b246LW1vei1mb2N1c3Jpbmcge1xuICAgIG91dGxpbmU6IDFweCBkb3R0ZWQgQnV0dG9uVGV4dDtcbiAgfVxuXG4gIGlucHV0W3R5cGU9ZGF0ZV0sXG4gIGlucHV0W3R5cGU9dGltZV0sXG4gIGlucHV0W3R5cGU9ZGF0ZXRpbWUtbG9jYWxdLFxuICBpbnB1dFt0eXBlPW1vbnRoXSB7XG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBsaXN0Ym94O1xuICB9XG5cbiAgZmllbGRzZXQge1xuICAgIHBhZGRpbmc6IC4zNWVtIC43NWVtIC42MjVlbTtcbiAgfVxuXG4gIGxlZ2VuZCB7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBjb2xvcjogaW5oZXJpdDtcbiAgICBkaXNwbGF5OiB0YWJsZTtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMDtcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICB9XG5cbiAgcHJvZ3Jlc3Mge1xuICAgIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbiAgICByZXNpemU6IHZlcnRpY2FsO1xuICB9XG5cbiAgdGV4dGFyZWEge1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICB9XG5cbiAgW3R5cGU9Y2hlY2tib3hdLFt0eXBlPXJhZGlvXSB7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG5cbiAgW3R5cGU9bnVtYmVyXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixbdHlwZT1udW1iZXJdOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcbiAgICBoZWlnaHQ6IGF1dG87XG4gIH1cblxuICBbdHlwZT1zZWFyY2hdIHtcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IHRleHRmaWVsZDtcbiAgICBvdXRsaW5lLW9mZnNldDogLTJweDtcbiAgfVxuXG4gIFt0eXBlPXNlYXJjaF06Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24ge1xuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgfVxuXG4gIDo6LXdlYmtpdC1maWxlLXVwbG9hZC1idXR0b24ge1xuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uO1xuICAgIGZvbnQ6IGluaGVyaXQ7XG4gIH1cblxuICBkZXRhaWxzIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuXG4gIHN1bW1hcnkge1xuICAgIGRpc3BsYXk6IGxpc3QtaXRlbTtcbiAgfVxuXG4gIHRlbXBsYXRlIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgW2hpZGRlbl0ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICBibG9ja3F1b3RlLCBib2R5LCBkZCwgZGwsIGR0LCBmaWVsZHNldCwgZmlndXJlLCBoMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBociwgaHRtbCwgaWZyYW1lLCBsZWdlbmQsIGxpLCBvbCwgcCwgcHJlLCB0ZXh0YXJlYSwgdWwge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG5cbiAgYnV0dG9uIHtcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XG4gIH1cblxuICBhcnRpY2xlLCBhc2lkZSwgZmlndXJlLFxuICBmb290ZXIsIGhlYWRlciwgaGdyb3VwLCBzZWN0aW9uIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuXG4gIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXSwgaW5wdXRbdHlwZT1cInJhZGlvXCJdIHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cblxuICBhIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOiAjMzI3M2RjO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICBjb2xvcjogY3VycmVudENvbG9yO1xuICAgIH1cbiAgfVxuXG4gIGltZyB7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XG4gIH1cblxuICBzdmcge1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgfVxuXG4gIHNtYWxsIHtcbiAgICBmb250LXNpemU6IC44NzVlbTtcbiAgfVxuXG4gIHNwYW4ge1xuICAgIGZvbnQtc3R5bGU6IGluaGVyaXQ7XG4gICAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XG4gIH1cblxuICBzdHJvbmcge1xuICAgIGNvbG9yOiAjMzYzNjM2O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIH1cblxuICB0YWJsZSB7XG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgICBib3JkZXItc3BhY2luZzogMDtcbiAgfVxuXG4gIHRoIHtcbiAgICB0ZXh0LWFsaWduOiBpbmhlcml0O1xuICB9XG5cbiAgdWwge1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgbm9ybWFsaXplZDtcbiJdLCJuYW1lcyI6WyJCcmVhayIsIndpZHRoIiwiaGVpZ2h0IiwibWVkaWFNb2JpbGUiLCJ0aGVtZSIsInJlc3BvbnNpdmUiLCJtb2JpbGUiLCJtZWRpYVRhYmxldCIsInRhYmxldCIsIm1lZGlhRGVza3RvcCIsImRlc2t0b3AiLCJtZWRpYUZ1bGxIRCIsImZ1bGxoZCIsIm1lZGlhVW50aWxGdWxsSEQiLCJzZXRSZXNwb25zaXZlIiwiZmx1aWQiLCJjc3MiLCJzbWFsbEd1dHRlciIsImd1dHRlciIsIkNvbnRhaW5lciIsInN0eWxlZCIsImRpdiIsImRpc3BsYXlOYW1lIiwiZGVmYXVsdFByb3BzIiwicGFyY2VudGFnZSIsInZhbHVlIiwiTWF0aCIsImNlaWwiLCJyZW5kZXJTaXplIiwic2l6ZSIsIm5hcnJvdyIsImF1dG8iLCJvZmZzZXQiLCJvZmZWYWwiLCJhdXRvU2l6ZSIsIkNvbCIsInJlbmRlckd1dHRlciIsIm5vR3V0dGVyIiwiUm93IiwidmNlbnRlciIsImNlbnRlciIsIlByZSIsInByZSIsIkNvZGUiLCJjb2RlIiwiYmFja2dyb3VuZCIsImRhbmdlciIsIkgxIiwiaDEiLCJib3JkZXIiLCJDb250ZW50IiwidGV4dCIsImV4cG9ydHMiLCJjdXJyeSIsImN1cnJpZWQiLCJmIiwibGVuZ3RoIiwiYWNjIiwiZm4iLCJjb21iaW5lZCIsImNvbmNhdCIsIkFycmF5IiwicHJvdG90eXBlIiwic2xpY2UiLCJjYWxsIiwiYXJndW1lbnRzIiwiYXBwbHkiLCJtb2R1bGUiLCJkZWZhdWx0IiwiZ3VhcmQiLCJsb3dlckJvdW5kYXJ5IiwidXBwZXJCb3VuZGFyeSIsIm1heCIsIm1pbiIsIl9kZWZhdWx0IiwiY29sb3JUb0ludCIsImNvbG9yIiwicm91bmQiLCJjb252ZXJ0VG9JbnQiLCJyZWQiLCJncmVlbiIsImJsdWUiLCJoc2xUb1JnYiIsImh1ZSIsInNhdHVyYXRpb24iLCJsaWdodG5lc3MiLCJjb252ZXJ0IiwiaHVlUHJpbWUiLCJjaHJvbWEiLCJhYnMiLCJzZWNvbmRDb21wb25lbnQiLCJsaWdodG5lc3NNb2RpZmljYXRpb24iLCJmaW5hbFJlZCIsImZpbmFsR3JlZW4iLCJmaW5hbEJsdWUiLCJuYW1lZENvbG9yTWFwIiwiYWxpY2VibHVlIiwiYW50aXF1ZXdoaXRlIiwiYXF1YSIsImFxdWFtYXJpbmUiLCJhenVyZSIsImJlaWdlIiwiYmlzcXVlIiwiYmxhY2siLCJibGFuY2hlZGFsbW9uZCIsImJsdWV2aW9sZXQiLCJicm93biIsImJ1cmx5d29vZCIsImNhZGV0Ymx1ZSIsImNoYXJ0cmV1c2UiLCJjaG9jb2xhdGUiLCJjb3JhbCIsImNvcm5mbG93ZXJibHVlIiwiY29ybnNpbGsiLCJjcmltc29uIiwiY3lhbiIsImRhcmtibHVlIiwiZGFya2N5YW4iLCJkYXJrZ29sZGVucm9kIiwiZGFya2dyYXkiLCJkYXJrZ3JlZW4iLCJkYXJrZ3JleSIsImRhcmtraGFraSIsImRhcmttYWdlbnRhIiwiZGFya29saXZlZ3JlZW4iLCJkYXJrb3JhbmdlIiwiZGFya29yY2hpZCIsImRhcmtyZWQiLCJkYXJrc2FsbW9uIiwiZGFya3NlYWdyZWVuIiwiZGFya3NsYXRlYmx1ZSIsImRhcmtzbGF0ZWdyYXkiLCJkYXJrc2xhdGVncmV5IiwiZGFya3R1cnF1b2lzZSIsImRhcmt2aW9sZXQiLCJkZWVwcGluayIsImRlZXBza3libHVlIiwiZGltZ3JheSIsImRpbWdyZXkiLCJkb2RnZXJibHVlIiwiZmlyZWJyaWNrIiwiZmxvcmFsd2hpdGUiLCJmb3Jlc3RncmVlbiIsImZ1Y2hzaWEiLCJnYWluc2Jvcm8iLCJnaG9zdHdoaXRlIiwiZ29sZCIsImdvbGRlbnJvZCIsImdyYXkiLCJncmVlbnllbGxvdyIsImdyZXkiLCJob25leWRldyIsImhvdHBpbmsiLCJpbmRpYW5yZWQiLCJpbmRpZ28iLCJpdm9yeSIsImtoYWtpIiwibGF2ZW5kZXIiLCJsYXZlbmRlcmJsdXNoIiwibGF3bmdyZWVuIiwibGVtb25jaGlmZm9uIiwibGlnaHRibHVlIiwibGlnaHRjb3JhbCIsImxpZ2h0Y3lhbiIsImxpZ2h0Z29sZGVucm9keWVsbG93IiwibGlnaHRncmF5IiwibGlnaHRncmVlbiIsImxpZ2h0Z3JleSIsImxpZ2h0cGluayIsImxpZ2h0c2FsbW9uIiwibGlnaHRzZWFncmVlbiIsImxpZ2h0c2t5Ymx1ZSIsImxpZ2h0c2xhdGVncmF5IiwibGlnaHRzbGF0ZWdyZXkiLCJsaWdodHN0ZWVsYmx1ZSIsImxpZ2h0eWVsbG93IiwibGltZSIsImxpbWVncmVlbiIsImxpbmVuIiwibWFnZW50YSIsIm1hcm9vbiIsIm1lZGl1bWFxdWFtYXJpbmUiLCJtZWRpdW1ibHVlIiwibWVkaXVtb3JjaGlkIiwibWVkaXVtcHVycGxlIiwibWVkaXVtc2VhZ3JlZW4iLCJtZWRpdW1zbGF0ZWJsdWUiLCJtZWRpdW1zcHJpbmdncmVlbiIsIm1lZGl1bXR1cnF1b2lzZSIsIm1lZGl1bXZpb2xldHJlZCIsIm1pZG5pZ2h0Ymx1ZSIsIm1pbnRjcmVhbSIsIm1pc3R5cm9zZSIsIm1vY2Nhc2luIiwibmF2YWpvd2hpdGUiLCJuYXZ5Iiwib2xkbGFjZSIsIm9saXZlIiwib2xpdmVkcmFiIiwib3JhbmdlIiwib3JhbmdlcmVkIiwib3JjaGlkIiwicGFsZWdvbGRlbnJvZCIsInBhbGVncmVlbiIsInBhbGV0dXJxdW9pc2UiLCJwYWxldmlvbGV0cmVkIiwicGFwYXlhd2hpcCIsInBlYWNocHVmZiIsInBlcnUiLCJwaW5rIiwicGx1bSIsInBvd2RlcmJsdWUiLCJwdXJwbGUiLCJyZWJlY2NhcHVycGxlIiwicm9zeWJyb3duIiwicm95YWxibHVlIiwic2FkZGxlYnJvd24iLCJzYWxtb24iLCJzYW5keWJyb3duIiwic2VhZ3JlZW4iLCJzZWFzaGVsbCIsInNpZW5uYSIsInNpbHZlciIsInNreWJsdWUiLCJzbGF0ZWJsdWUiLCJzbGF0ZWdyYXkiLCJzbGF0ZWdyZXkiLCJzbm93Iiwic3ByaW5nZ3JlZW4iLCJzdGVlbGJsdWUiLCJ0YW4iLCJ0ZWFsIiwidGhpc3RsZSIsInRvbWF0byIsInR1cnF1b2lzZSIsInZpb2xldCIsIndoZWF0Iiwid2hpdGUiLCJ3aGl0ZXNtb2tlIiwieWVsbG93IiwieWVsbG93Z3JlZW4iLCJuYW1lVG9IZXgiLCJub3JtYWxpemVkQ29sb3JOYW1lIiwidG9Mb3dlckNhc2UiLCJfYXNzZXJ0VGhpc0luaXRpYWxpemVkIiwic2VsZiIsIlJlZmVyZW5jZUVycm9yIiwiX2luaGVyaXRzTG9vc2UiLCJzdWJDbGFzcyIsInN1cGVyQ2xhc3MiLCJPYmplY3QiLCJjcmVhdGUiLCJjb25zdHJ1Y3RvciIsIl9fcHJvdG9fXyIsIl93cmFwTmF0aXZlU3VwZXIiLCJDbGFzcyIsIl9jYWNoZSIsIk1hcCIsInVuZGVmaW5lZCIsIl9pc05hdGl2ZUZ1bmN0aW9uIiwiVHlwZUVycm9yIiwiaGFzIiwiZ2V0Iiwic2V0IiwiV3JhcHBlciIsIl9jb25zdHJ1Y3QiLCJfZ2V0UHJvdG90eXBlT2YiLCJlbnVtZXJhYmxlIiwid3JpdGFibGUiLCJjb25maWd1cmFibGUiLCJfc2V0UHJvdG90eXBlT2YiLCJpc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QiLCJSZWZsZWN0IiwiY29uc3RydWN0Iiwic2hhbSIsIlByb3h5IiwiRGF0ZSIsInRvU3RyaW5nIiwiZSIsIlBhcmVudCIsImFyZ3MiLCJhIiwicHVzaCIsIkNvbnN0cnVjdG9yIiwiRnVuY3Rpb24iLCJiaW5kIiwiaW5zdGFuY2UiLCJpbmRleE9mIiwibyIsInAiLCJzZXRQcm90b3R5cGVPZiIsImdldFByb3RvdHlwZU9mIiwiRVJST1JTIiwiZm9ybWF0IiwiX2xlbiIsIl9rZXkiLCJiIiwiYyIsImZvckVhY2giLCJkIiwicmVwbGFjZSIsIlBvbGlzaGVkRXJyb3IiLCJfRXJyb3IiLCJfdGhpcyIsInByb2Nlc3MiLCJlbnYiLCJOT0RFX0VOViIsIl9sZW4yIiwiX2tleTIiLCJFcnJvciIsIl9oc2xUb1JnYiIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJyZXF1aXJlJCQwIiwiX25hbWVUb0hleCIsInJlcXVpcmUkJDEiLCJfZXJyb3JzIiwicmVxdWlyZSQkMiIsIm9iaiIsIl9fZXNNb2R1bGUiLCJoZXhSZWdleCIsImhleFJnYmFSZWdleCIsInJlZHVjZWRIZXhSZWdleCIsInJlZHVjZWRSZ2JhSGV4UmVnZXgiLCJyZ2JSZWdleCIsInJnYmFSZWdleCIsImhzbFJlZ2V4IiwiaHNsYVJlZ2V4IiwicGFyc2VUb1JnYiIsIm5vcm1hbGl6ZWRDb2xvciIsIm1hdGNoIiwicGFyc2VJbnQiLCJhbHBoYSIsInBhcnNlRmxvYXQiLCJ0b0ZpeGVkIiwiX2FscGhhIiwicmdiTWF0Y2hlZCIsImV4ZWMiLCJyZ2JhTWF0Y2hlZCIsImhzbE1hdGNoZWQiLCJyZ2JDb2xvclN0cmluZyIsImhzbFJnYk1hdGNoZWQiLCJoc2xhTWF0Y2hlZCIsIl9odWUiLCJfc2F0dXJhdGlvbiIsIl9saWdodG5lc3MiLCJfcmdiQ29sb3JTdHJpbmciLCJfaHNsUmdiTWF0Y2hlZCIsInJnYlRvSHNsIiwiZGVsdGEiLCJfcGFyc2VUb1JnYiIsIl9yZ2JUb0hzbCIsInBhcnNlVG9Ic2wiLCJyZWR1Y2VIZXhWYWx1ZSIsIm51bWJlclRvSGV4IiwiaGV4IiwiX3JlZHVjZUhleFZhbHVlIiwiX251bWJlclRvSGV4IiwiY29sb3JUb0hleCIsImNvbnZlcnRUb0hleCIsImhzbFRvSGV4IiwiX2hzbFRvSGV4IiwiaHNsIiwiaHNsYSIsInJnYiIsIl9yZ2IiLCJyZ2JhIiwiZmlyc3RWYWx1ZSIsInNlY29uZFZhbHVlIiwidGhpcmRWYWx1ZSIsImZvdXJ0aFZhbHVlIiwicmdiVmFsdWUiLCJfaHNsIiwiX2hzbGEiLCJfcmdiYSIsInJlcXVpcmUkJDMiLCJyZXF1aXJlJCQ0IiwiaXNSZ2IiLCJpc1JnYmEiLCJpc0hzbCIsImlzSHNsYSIsInRvQ29sb3JTdHJpbmciLCJfY3VycnkiLCJfZ3VhcmQiLCJfcGFyc2VUb0hzbCIsIl90b0NvbG9yU3RyaW5nIiwiX2V4dGVuZHMiLCJhc3NpZ24iLCJ0YXJnZXQiLCJpIiwic291cmNlIiwia2V5IiwiaGFzT3duUHJvcGVydHkiLCJkYXJrZW4iLCJhbW91bnQiLCJoc2xDb2xvciIsImN1cnJpZWREYXJrZW4iLCJnZXRMdW1pbmFuY2UiLCJyZ2JDb2xvciIsIl9PYmplY3Qka2V5cyRtYXAiLCJrZXlzIiwibWFwIiwiY2hhbm5lbCIsInBvdyIsInIiLCJnIiwiZmluZENvbG9ySW52ZXJ0IiwidHJhbnNwYXJlbnRpemUiLCJwYXJzZWRDb2xvciIsImNvbG9yV2l0aEFscGhhIiwiY3VycmllZFRyYW5zcGFyZW50aXplIiwiYm94U2hhZG93Iiwic2hhZG93Q29sb3IiLCJzZXRTaXplIiwibmFtZSIsImRpc2FibGVkQ29sb3IiLCJ0ZXh0Q29sb3IiLCJ0ZXh0RGFyayIsImJhY2tDb2xvciIsInNldENvbG9yIiwib3V0bGluZSIsImRpc2FibGVkIiwiYm9yZGVySG92ZXIiLCJib3JkZXJBY3RpdmUiLCJpbnZlcnRDb2xvciIsIkJ1dHRvbiIsImJ1dHRvbiIsImZ1bGwiLCJCdXR0b25Hcm91cCIsInN0cmlwZWRTdHlsZSIsImhvdmVyU3R5bGUiLCJUYWJsZSIsInRhYmxlIiwiYm9yZGVyZWQiLCJzdHJpcGVkIiwiaG92ZXIiLCJoZWFkZXJTdHlsZSIsIkJveCIsImJvcmRlcmxlc3MiLCJQcm9ncmVzcyIsInByb3BzIiwicGVyY2VudCIsIlB1cmVDb21wb25lbnQiLCJyZXF1aXJlZCIsInByaW1hcnkiLCJMYWJlbCIsImxhYmVsIiwidGV4dFN0cm9uZyIsIkZpZWxkIiwiY2hpbGRyZW4iLCJyZXN0IiwiaGFtYnVyZ2VyIiwiQXJyb3ciLCJkaXJlY3Rpb24iLCJNZXNzYWdlIiwic3BhbiIsImVycm9yIiwidGV4dExpZ2h0IiwiSGVscE1lc3NhZ2UiLCJoZWxwIiwicmlnaHRJY29uIiwibGVmdEljb24iLCJJY29uIiwicmlnaHQiLCJwbGFjZWhvbGRlciIsIlRleHRJbnB1dCIsImNsYXNzTmFtZSIsInN0eWxlIiwidHlwZSIsIm1heExlbmd0aCIsIm9uQ2hhbmdlIiwiVGV4dGFyZWEiLCJyZWFkT25seSIsIkNvbXBvbmVudCIsImNvbCIsInJvdyIsIkNoZWNrYm94IiwiY2hlY2tlZCIsImlkIiwiSW5wdXRXcmFwcGVyIiwiYXJyb3ciLCJTZWxlY3QiLCJyZW5kZXIiLCJvcHRpb25zIiwiaXRlbSIsImlkeCIsInJlbmRlckxhYmVsIiwiaW5wdXRTaXplIiwiQm9vbGVhbiIsInJlbmRlckl0ZW0iLCJSYWRpb0xhYmVsIiwiQnV0dG9uTGFiZWwiLCJSYWRpbyIsIkFwcHJvdmVkIiwiQ2hldnJvbkxlZnRSb3VuZCIsIkNoZXZyb25SaWdodFJvdW5kIiwiRmlsZVJvdW5kIiwiUGVuY2lsIiwiVXNlciIsIkNsb3NlIiwic2V0QWxpZ24iLCJhbGlnbiIsImJhY2tkcm9wIiwiYmFja2dyb3VuZENvbG9yIiwidWEiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJOYXZCYXIiLCJoZWFkZXIiLCJmaXhlZCIsInN0aWNreSIsIkJ1cmdlciIsImhhbWJ1Z2VyIiwiTmF2Q29udGVudCIsIkFwcEJhciIsInNob3ciLCJzZXRTdGF0ZSIsInN0YXRlIiwiYnJhbmQiLCJ0b2dnbGVNZW51IiwiZ2V0Q29sb3IiLCJhZGRvbkNvbG9yIiwic3ViQ29sb3IiLCJjbG9zZSIsIlRhZyIsIm9uQ2xvc2UiLCJvbkNsaWNrIiwiQm9keSIsIkhlcm8iLCJkZWZpbmVQcm9wZXJ0eSIsIlN5bWJvbCIsImZvciIsImgiLCJrIiwibCIsIm0iLCJuIiwicSIsInQiLCJ1IiwiJCR0eXBlb2YiLCJ2IiwiaGFzU3ltYm9sIiwiUkVBQ1RfRUxFTUVOVF9UWVBFIiwiUkVBQ1RfUE9SVEFMX1RZUEUiLCJSRUFDVF9GUkFHTUVOVF9UWVBFIiwiUkVBQ1RfU1RSSUNUX01PREVfVFlQRSIsIlJFQUNUX1BST0ZJTEVSX1RZUEUiLCJSRUFDVF9QUk9WSURFUl9UWVBFIiwiUkVBQ1RfQ09OVEVYVF9UWVBFIiwiUkVBQ1RfQVNZTkNfTU9ERV9UWVBFIiwiUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEUiLCJSRUFDVF9GT1JXQVJEX1JFRl9UWVBFIiwiUkVBQ1RfU1VTUEVOU0VfVFlQRSIsIlJFQUNUX01FTU9fVFlQRSIsIlJFQUNUX0xBWllfVFlQRSIsImlzVmFsaWRFbGVtZW50VHlwZSIsImxvd1ByaW9yaXR5V2FybmluZyIsInByaW50V2FybmluZyIsImFyZ0luZGV4IiwibWVzc2FnZSIsImNvbnNvbGUiLCJ3YXJuIiwieCIsImNvbmRpdGlvbiIsImxvd1ByaW9yaXR5V2FybmluZyQxIiwidHlwZU9mIiwib2JqZWN0IiwiJCR0eXBlb2ZUeXBlIiwiQXN5bmNNb2RlIiwiQ29uY3VycmVudE1vZGUiLCJDb250ZXh0Q29uc3VtZXIiLCJDb250ZXh0UHJvdmlkZXIiLCJFbGVtZW50IiwiRm9yd2FyZFJlZiIsIkZyYWdtZW50IiwiTGF6eSIsIk1lbW8iLCJQb3J0YWwiLCJQcm9maWxlciIsIlN0cmljdE1vZGUiLCJTdXNwZW5zZSIsImhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQXN5bmNNb2RlIiwiaXNBc3luY01vZGUiLCJpc0NvbmN1cnJlbnRNb2RlIiwiaXNDb250ZXh0Q29uc3VtZXIiLCJpc0NvbnRleHRQcm92aWRlciIsImlzRWxlbWVudCIsImlzRm9yd2FyZFJlZiIsImlzRnJhZ21lbnQiLCJpc0xhenkiLCJpc01lbW8iLCJpc1BvcnRhbCIsImlzUHJvZmlsZXIiLCJpc1N0cmljdE1vZGUiLCJpc1N1c3BlbnNlIiwiZ2V0T3duUHJvcGVydHlTeW1ib2xzIiwicHJvcElzRW51bWVyYWJsZSIsInByb3BlcnR5SXNFbnVtZXJhYmxlIiwidG9PYmplY3QiLCJ2YWwiLCJzaG91bGRVc2VOYXRpdmUiLCJ0ZXN0MSIsIlN0cmluZyIsImdldE93blByb3BlcnR5TmFtZXMiLCJ0ZXN0MiIsImZyb21DaGFyQ29kZSIsIm9yZGVyMiIsImpvaW4iLCJ0ZXN0MyIsInNwbGl0IiwibGV0dGVyIiwiZXJyIiwiZnJvbSIsInRvIiwic3ltYm9scyIsInMiLCJSZWFjdFByb3BUeXBlc1NlY3JldCIsImxvZ2dlZFR5cGVGYWlsdXJlcyIsImNoZWNrUHJvcFR5cGVzIiwidHlwZVNwZWNzIiwidmFsdWVzIiwibG9jYXRpb24iLCJjb21wb25lbnROYW1lIiwiZ2V0U3RhY2siLCJ0eXBlU3BlY05hbWUiLCJleCIsInN0YWNrIiwicmVzZXRXYXJuaW5nQ2FjaGUiLCJlbXB0eUZ1bmN0aW9uVGhhdFJldHVybnNOdWxsIiwiaXNWYWxpZEVsZW1lbnQiLCJ0aHJvd09uRGlyZWN0QWNjZXNzIiwiSVRFUkFUT1JfU1lNQk9MIiwiaXRlcmF0b3IiLCJGQVVYX0lURVJBVE9SX1NZTUJPTCIsImdldEl0ZXJhdG9yRm4iLCJtYXliZUl0ZXJhYmxlIiwiaXRlcmF0b3JGbiIsIkFOT05ZTU9VUyIsIlJlYWN0UHJvcFR5cGVzIiwiYXJyYXkiLCJjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlciIsImJvb2wiLCJmdW5jIiwibnVtYmVyIiwic3RyaW5nIiwic3ltYm9sIiwiYW55IiwiY3JlYXRlQW55VHlwZUNoZWNrZXIiLCJhcnJheU9mIiwiY3JlYXRlQXJyYXlPZlR5cGVDaGVja2VyIiwiZWxlbWVudCIsImNyZWF0ZUVsZW1lbnRUeXBlQ2hlY2tlciIsImVsZW1lbnRUeXBlIiwiY3JlYXRlRWxlbWVudFR5cGVUeXBlQ2hlY2tlciIsImluc3RhbmNlT2YiLCJjcmVhdGVJbnN0YW5jZVR5cGVDaGVja2VyIiwibm9kZSIsImNyZWF0ZU5vZGVDaGVja2VyIiwib2JqZWN0T2YiLCJjcmVhdGVPYmplY3RPZlR5cGVDaGVja2VyIiwib25lT2YiLCJjcmVhdGVFbnVtVHlwZUNoZWNrZXIiLCJvbmVPZlR5cGUiLCJjcmVhdGVVbmlvblR5cGVDaGVja2VyIiwic2hhcGUiLCJjcmVhdGVTaGFwZVR5cGVDaGVja2VyIiwiZXhhY3QiLCJjcmVhdGVTdHJpY3RTaGFwZVR5cGVDaGVja2VyIiwiaXMiLCJ5IiwiUHJvcFR5cGVFcnJvciIsImNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyIiwidmFsaWRhdGUiLCJtYW51YWxQcm9wVHlwZUNhbGxDYWNoZSIsIm1hbnVhbFByb3BUeXBlV2FybmluZ0NvdW50IiwiY2hlY2tUeXBlIiwiaXNSZXF1aXJlZCIsInByb3BOYW1lIiwicHJvcEZ1bGxOYW1lIiwic2VjcmV0IiwiY2FjaGVLZXkiLCJjaGFpbmVkQ2hlY2tUeXBlIiwiZXhwZWN0ZWRUeXBlIiwicHJvcFZhbHVlIiwicHJvcFR5cGUiLCJnZXRQcm9wVHlwZSIsInByZWNpc2VUeXBlIiwiZ2V0UHJlY2lzZVR5cGUiLCJ0eXBlQ2hlY2tlciIsImlzQXJyYXkiLCJSZWFjdElzIiwiZXhwZWN0ZWRDbGFzcyIsImV4cGVjdGVkQ2xhc3NOYW1lIiwiYWN0dWFsQ2xhc3NOYW1lIiwiZ2V0Q2xhc3NOYW1lIiwiZXhwZWN0ZWRWYWx1ZXMiLCJ2YWx1ZXNTdHJpbmciLCJKU09OIiwic3RyaW5naWZ5IiwicmVwbGFjZXIiLCJhcnJheU9mVHlwZUNoZWNrZXJzIiwiY2hlY2tlciIsImdldFBvc3RmaXhGb3JUeXBlV2FybmluZyIsImlzTm9kZSIsInNoYXBlVHlwZXMiLCJhbGxLZXlzIiwiZXZlcnkiLCJzdGVwIiwiZW50cmllcyIsIm5leHQiLCJkb25lIiwiZW50cnkiLCJpc1N5bWJvbCIsIlJlZ0V4cCIsIlByb3BUeXBlcyIsImVtcHR5RnVuY3Rpb24iLCJlbXB0eUZ1bmN0aW9uV2l0aFJlc2V0Iiwic2hpbSIsImdldFNoaW0iLCJoYXNDbGFzcyIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwiYmFzZVZhbCIsImFkZENsYXNzIiwiX2hhc0NsYXNzIiwiYWRkIiwic2V0QXR0cmlidXRlIiwicmVwbGFjZUNsYXNzTmFtZSIsIm9yaWdDbGFzcyIsImNsYXNzVG9SZW1vdmUiLCJyZW1vdmVDbGFzcyIsInJlbW92ZSIsImNvbXBvbmVudFdpbGxNb3VudCIsImdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyIsImNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMiLCJuZXh0UHJvcHMiLCJ1cGRhdGVyIiwicHJldlN0YXRlIiwiY29tcG9uZW50V2lsbFVwZGF0ZSIsIm5leHRTdGF0ZSIsInByZXZQcm9wcyIsIl9fcmVhY3RJbnRlcm5hbFNuYXBzaG90RmxhZyIsIl9fcmVhY3RJbnRlcm5hbFNuYXBzaG90IiwiZ2V0U25hcHNob3RCZWZvcmVVcGRhdGUiLCJfX3N1cHByZXNzRGVwcmVjYXRpb25XYXJuaW5nIiwicG9seWZpbGwiLCJpc1JlYWN0Q29tcG9uZW50IiwiZm91bmRXaWxsTW91bnROYW1lIiwiZm91bmRXaWxsUmVjZWl2ZVByb3BzTmFtZSIsImZvdW5kV2lsbFVwZGF0ZU5hbWUiLCJVTlNBRkVfY29tcG9uZW50V2lsbE1vdW50IiwiVU5TQUZFX2NvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMiLCJVTlNBRkVfY29tcG9uZW50V2lsbFVwZGF0ZSIsIm5ld0FwaU5hbWUiLCJjb21wb25lbnREaWRVcGRhdGUiLCJjb21wb25lbnREaWRVcGRhdGVQb2x5ZmlsbCIsIm1heWJlU25hcHNob3QiLCJzbmFwc2hvdCIsIl9wcm9wVHlwZXMiLCJ0aW1lb3V0c1NoYXBlIiwiZW50ZXIiLCJleGl0IiwiY2xhc3NOYW1lc1NoYXBlIiwiYWN0aXZlIiwiZW50ZXJEb25lIiwiZW50ZXJBY3RpdmUiLCJleGl0RG9uZSIsImV4aXRBY3RpdmUiLCJfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCIsIl9yZWFjdCIsIl9yZWFjdERvbSIsIm5ld09iaiIsImRlc2MiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZSIsImV4Y2x1ZGVkIiwic291cmNlS2V5cyIsIlVOTU9VTlRFRCIsIkVYSVRFRCIsIkVOVEVSSU5HIiwiRU5URVJFRCIsIkVYSVRJTkciLCJUcmFuc2l0aW9uIiwiX1JlYWN0JENvbXBvbmVudCIsImNvbnRleHQiLCJwYXJlbnRHcm91cCIsInRyYW5zaXRpb25Hcm91cCIsImFwcGVhciIsImlzTW91bnRpbmciLCJpbml0aWFsU3RhdHVzIiwiYXBwZWFyU3RhdHVzIiwiaW4iLCJ1bm1vdW50T25FeGl0IiwibW91bnRPbkVudGVyIiwic3RhdHVzIiwibmV4dENhbGxiYWNrIiwiX3Byb3RvIiwiZ2V0Q2hpbGRDb250ZXh0IiwiX3JlZiIsIm5leHRJbiIsImNvbXBvbmVudERpZE1vdW50IiwidXBkYXRlU3RhdHVzIiwibmV4dFN0YXR1cyIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwiY2FuY2VsTmV4dENhbGxiYWNrIiwiZ2V0VGltZW91dHMiLCJ0aW1lb3V0IiwibW91bnRpbmciLCJmaW5kRE9NTm9kZSIsInBlcmZvcm1FbnRlciIsInBlcmZvcm1FeGl0IiwiX3RoaXMyIiwiYXBwZWFyaW5nIiwidGltZW91dHMiLCJzYWZlU2V0U3RhdGUiLCJvbkVudGVyZWQiLCJvbkVudGVyIiwib25FbnRlcmluZyIsIm9uVHJhbnNpdGlvbkVuZCIsIl90aGlzMyIsIm9uRXhpdGVkIiwib25FeGl0Iiwib25FeGl0aW5nIiwiY2FuY2VsIiwiY2FsbGJhY2siLCJzZXROZXh0Q2FsbGJhY2siLCJfdGhpczQiLCJldmVudCIsImhhbmRsZXIiLCJhZGRFbmRMaXN0ZW5lciIsInNldFRpbWVvdXQiLCJfdGhpcyRwcm9wcyIsImNoaWxkUHJvcHMiLCJjaGlsZCIsIkNoaWxkcmVuIiwib25seSIsImNsb25lRWxlbWVudCIsImNvbnRleHRUeXBlcyIsImNoaWxkQ29udGV4dFR5cGVzIiwicHJvcFR5cGVzIiwicHQiLCJfUHJvcFR5cGVzIiwibm9vcCIsIl9yZWFjdExpZmVjeWNsZXNDb21wYXQiLCJfYWRkQ2xhc3MiLCJfcmVtb3ZlQ2xhc3MiLCJfVHJhbnNpdGlvbiIsImNsYXNzZXMiLCJDU1NUcmFuc2l0aW9uIiwiX3RoaXMkZ2V0Q2xhc3NOYW1lcyIsImdldENsYXNzTmFtZXMiLCJyZW1vdmVDbGFzc2VzIiwiX3RoaXMkZ2V0Q2xhc3NOYW1lczIiLCJhY3RpdmVDbGFzc05hbWUiLCJyZWZsb3dBbmRBZGRDbGFzcyIsIl90aGlzJGdldENsYXNzTmFtZXMzIiwiZG9uZUNsYXNzTmFtZSIsIl90aGlzJGdldENsYXNzTmFtZXM0IiwiX3RoaXMkZ2V0Q2xhc3NOYW1lczUiLCJfdGhpcyRnZXRDbGFzc05hbWVzNiIsImNsYXNzTmFtZXMiLCJfdGhpcyRnZXRDbGFzc05hbWVzNyIsInNjcm9sbFRvcCIsImNyZWF0ZUVsZW1lbnQiLCJnZXRQb3NpdGlvbiIsInBvc2l0aW9uIiwiYm90dG9tIiwibGVmdCIsInRyYW5zZm9ybSIsInRvcCIsIlRvb2x0aXAiLCJjdXJyZW50Iiwib2Zmc2V0V2lkdGgiLCJvZmZzZXRIZWlnaHQiLCJjcmVhdGVSZWYiLCJvcGVuVG9vbHRpcCIsImNsb3NlVG9vbHRpcCIsIlNpZGVNZW51IiwiYXNpZGUiLCJNZW51TGlzdCIsInVsIiwiTWVudUxhYmVsIiwiQ2FyZEJvZHkiLCJDYXJkSGVhZGVyIiwiQ2FyZEZvb3RlciIsImZvb3RlciIsIkNhcmRJbWFnZSIsIkNhcmRJbWFnZUhvcml6b250YWwiLCJ1cmwiLCJob3Jpem9udGFsU3R5bGUiLCJmbGV4RGlyZWN0aW9uIiwiQ2FyZCIsImltYWdlIiwidGl0bGUiLCJob3Jpem9udGFsIiwicmVuZGVySGVhZGVyIiwid3JhcHBlclN0eWxlIiwiUmVhY3QiLCJQb3BvdmVyIiwidG9vbHRpcFN0eWxlIiwib3BlbkRyb3Bkb3duIiwiY2xvc2VEcm9wZG93biIsImRpc3BsYXkiLCJFU0NfS0VZIiwiTW9kYWwiLCJjbG9zZU9uRXNjIiwia2V5Q29kZSIsImNsb3NlTW9kYWwiLCJjbG9zZU9uT3ZlcmxheSIsImRvY3VtZW50IiwiYm9keSIsInJlbW92ZUNoaWxkIiwiYXBwZW5kQ2hpbGQiLCJjcmVhdGVQb3J0YWwiLCJleHRlcm5hbCIsIm9uQ2xpY2tPdmVybGF5IiwiZ2V0Q2hpbGRNYXBwaW5nIiwibWVyZ2VDaGlsZE1hcHBpbmdzIiwiZ2V0SW5pdGlhbENoaWxkTWFwcGluZyIsImdldE5leHRDaGlsZE1hcHBpbmciLCJtYXBGbiIsIm1hcHBlciIsInJlc3VsdCIsInByZXYiLCJnZXRWYWx1ZUZvcktleSIsIm5leHRLZXlzUGVuZGluZyIsInBlbmRpbmdLZXlzIiwicHJldktleSIsImNoaWxkTWFwcGluZyIsIm5leHRLZXkiLCJwZW5kaW5nTmV4dEtleSIsImdldFByb3AiLCJwcm9wIiwicHJldkNoaWxkTWFwcGluZyIsIm5leHRDaGlsZE1hcHBpbmciLCJoYXNQcmV2IiwiaGFzTmV4dCIsInByZXZDaGlsZCIsImlzTGVhdmluZyIsImNvbXBvbmVudCIsImNoaWxkRmFjdG9yeSIsIlRyYW5zaXRpb25Hcm91cCIsImhhbmRsZUV4aXRlZCIsImZpcnN0UmVuZGVyIiwiYXBwZWFyZWQiLCJtb3VudGVkIiwiX0NoaWxkTWFwcGluZyIsImN1cnJlbnRDaGlsZE1hcHBpbmciLCJUb2FzdEl0ZW0iLCJkdXJhdGlvbiIsImNsZWFyIiwic2V0UG9zaXRpb24iLCJpc0ZpeGVkIiwiYmFzZSIsIlRvYXN0Q29udGFpbmVyIiwidG9hc3RzIiwiY3NzVGV4dCIsInJlbmRlclRvYXN0IiwibmF2IiwiVGFiSXRlbSIsIkluZGljYXRvciIsIlRhYnMiLCJzdGFydCIsInRocmVzaG9sZCIsIm1heEl0ZW1zIiwiY291bnQiLCJ0b3RhbCIsInZpc2liaWxpdHkiLCJpbmRleCIsImdldEluZGljYXRvclBvc2l0aW9uIiwicmVuZGVyQ2hpbGRyZW4iLCJhY3RpdmVJbmRleCIsImxlbiIsIkxvYWRpbmdCYXIiLCJsb2FkaW5nIiwic3BpbiIsImtleWZyYW1lcyIsIlNwaW5uZXIiLCJib3JkZXJTaXplIiwiZm9udEZhbWlseSIsImZvbnRTaXplIiwicmFkaXVzIiwibGluayIsImluZm8iLCJzdWNjZXNzIiwid2FybmluZyIsImRhcmsiLCJsaWdodCIsImJsYWNrQmlzIiwiYmxhY2tUZXIiLCJ3aGl0ZUJpcyIsIndoaXRlVGVyIiwiZ3JleUxpZ2h0IiwiZ3JleUxpZ2h0ZXIiLCJub3JtYWxpemVkIl0sIm1hcHBpbmdzIjoiOzs7O0FBRWUsU0FBU0EsS0FBVCxHQUFpQjtTQUN2QjtJQUFLLEtBQUssRUFBRTtNQUFFQyxLQUFLLEVBQUUsTUFBVDtNQUFpQkMsTUFBTSxFQUFFOztJQUE1Qzs7O0FDR0ssU0FBU0MsV0FBVCxPQUF1QztNQUFoQkMsS0FBZ0IsUUFBaEJBLEtBQWdCO2lEQUNKQSxLQUFLLENBQUNDLFVBQU4sR0FBbUJELEtBQUssQ0FBQ0UsTUFBekIsR0FBa0MsQ0FBMUU7O0FBR0YsQUFBTyxTQUFTQyxXQUFULFFBQXVDO01BQWhCSCxLQUFnQixTQUFoQkEsS0FBZ0I7aURBQ0pBLEtBQUssQ0FBQ0MsVUFBTixHQUFtQkQsS0FBSyxDQUFDSSxNQUF6QixHQUFrQyxDQUExRTs7QUFHRixBQUFPLFNBQVNDLFlBQVQsUUFBd0M7TUFBaEJMLEtBQWdCLFNBQWhCQSxLQUFnQjtpREFDTEEsS0FBSyxDQUFDQyxVQUFOLEdBQW1CRCxLQUFLLENBQUNNLE9BQXpCLEdBQW1DLENBQTNFOztBQUdGLEFBQU8sU0FBU0MsV0FBVCxRQUF1QztNQUFoQlAsS0FBZ0IsU0FBaEJBLEtBQWdCO2lEQUNKQSxLQUFLLENBQUNDLFVBQU4sR0FBbUJELEtBQUssQ0FBQ1EsTUFBekIsR0FBa0MsQ0FBMUU7O0FBR0YsQUFBTyxTQUFTQyxnQkFBVCxRQUE0QztNQUFoQlQsS0FBZ0IsU0FBaEJBLEtBQWdCO2lEQUNUQSxLQUFLLENBQUNDLFVBQU4sR0FBbUJELEtBQUssQ0FBQ1EsTUFBekIsR0FBa0Ms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
