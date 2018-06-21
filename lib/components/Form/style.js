"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = require("styled-components");

var _default = (0, _styledComponents.css)(["font-size:1em;position:relative;text-align:left;", " &[disabeld]{box-shadow:none;}&[readonly]{box-shadow:none;}"], {
  "&::after": {
    clear: "both",
    content: "\"\"",
    display: "table"
  }
});

exports.default = _default;