"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ThemeProvider = exports.keyframes = exports.injectGlobal = exports.css = void 0;

var st = _interopRequireWildcard(require("styled-components"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var styled = st.default,
    css = st.css,
    injectGlobal = st.injectGlobal,
    keyframes = st.keyframes,
    ThemeProvider = st.ThemeProvider;
exports.ThemeProvider = ThemeProvider;
exports.keyframes = keyframes;
exports.injectGlobal = injectGlobal;
exports.css = css;
var _default = styled;
exports.default = _default;