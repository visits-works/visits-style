"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MenuLabel = exports.MenuList = exports.SideMenu = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _utils = require("../../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SideMenu = _styledComponents.default.aside.withConfig({
  displayName: "SideMenu"
})(["font-size:1rem;"]);

exports.SideMenu = SideMenu;
SideMenu.displayName = 'SideMenu';

var MenuList = _styledComponents.default.ul.withConfig({
  displayName: "SideMenu__MenuList"
})(["line-height:1.25;a{display:block;padding:0.5em 0.75em;border-radius:4px;color:", ";&:hover{background-color:", ";}&.active{background-color:", ";color:white;}}li{ul{border-left:1px solid ", ";margin:0.75em;padding-left:0.75em;}}"], function (_ref) {
  var theme = _ref.theme;
  return theme.text;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.background;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.primary;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.border;
});

exports.MenuList = MenuList;
MenuList.displayName = 'MenuList';

var MenuLabel = _styledComponents.default.p.withConfig({
  displayName: "SideMenu__MenuLabel"
})(["font-size:0.75em;letter-spacing:0.1em;text-transform:uppercase;&:not(:first-child){margin-top:1em;}&:not(:last-child){margin-bottom:1em;}"]);

exports.MenuLabel = MenuLabel;
MenuLabel.displayName = 'MenuLabel';