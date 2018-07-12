"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _findColorInvert = _interopRequireDefault(require("../../utils/findColorInvert"));

var _Button = _interopRequireDefault(require("../Button"));

var _Box = _interopRequireDefault(require("../Box"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Wrapper = (0, _styledComponents.default)(_Button.default).withConfig({
  displayName: "Dropdown__Wrapper"
})(["display:inline-flex;position:relative;vertical-align:top;"]);
var Tooltip = (0, _styledComponents.default)(_Box.default).withConfig({
  displayName: "Dropdown__Tooltip"
})(["position:absolute;display:none;clear:both;top:0;left:0;background-color:white;box-shadow:0 1px 2px 0 rgba(0,0,0,0.05);z-index:9999;will-change:transform;padding:0.5rem 0;width:auto;", ""], function (_ref) {
  var show = _ref.show;
  return show ? 'display: flex;' : '';
});

var Divider = _styledComponents.default.div.withConfig({
  displayName: "Dropdown__Divider"
})(["height:0;margin:0.5rem 0;overflow:hidden;border-top:1px solid ", ";"], function (_ref2) {
  var theme = _ref2.theme;
  return theme.border;
});

var MenuItem = _styledComponents.default.a.withConfig({
  displayName: "Dropdown__MenuItem"
})(["display:block;width:100%;padding:0.25rem 1.5rem;text-align:left;white-space:nowrap;background-color:transparent;color:", ";border:0;svg{margin-left:-1rem;padding-right:0.5rem;font-size:1.5rem;}&:hover,&:focus{color:", ";background-color:rgba(0,0,0,0.05);}&:active{", ";}"], function (_ref3) {
  var theme = _ref3.theme;
  return theme.text;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.text;
}, function (_ref5) {
  var theme = _ref5.theme;
  return "\n      background-color: ".concat(theme.primary, ";\n      color: ").concat((0, _findColorInvert.default)(theme.primary), "\n    ");
});

var Dropdown =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Dropdown, _React$Component);

  function Dropdown() {
    var _this;

    _classCallCheck(this, Dropdown);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Dropdown).apply(this, arguments));
    _this.state = {
      show: false,
      style: {}
    };

    _this.openDropdown = function () {
      if (_this.state.show || !_this.element.current) return;
      var height = _this.element.current.offsetHeight + 2;
      var style = {
        transform: "translate3d(0px, ".concat(height, "px, 0px)"),
        top: 0,
        left: 0
      };

      _this.setState({
        show: true,
        style: style
      });
    };

    _this.closeDropdown = function () {
      if (_this.state.show) _this.setState({
        show: false
      });
    };

    _this.onClickChild = function (props) {
      return function () {
        if (props.onClick) props.onClick();
        if (_this.element.current) _this.element.current.blur();
      };
    };

    _this.element = React.createRef();
    return _this;
  }

  _createClass(Dropdown, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(props, state) {
      return this.state.show !== state.show;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          label = _this$props.label,
          color = _this$props.color,
          size = _this$props.size,
          children = _this$props.children;
      var _this$state = this.state,
          show = _this$state.show,
          style = _this$state.style;
      return React.createElement(Wrapper, {
        innerRef: this.element,
        color: color || 'text',
        size: size,
        onFocus: this.openDropdown,
        onBlur: this.closeDropdown
      }, label, React.createElement(Tooltip, {
        show: show,
        style: style
      }, React.Children.map(children, function (child) {
        // @ts-ignore
        if (child.props.divider) {
          return React.createElement(Divider, null);
        } // @ts-ignore


        return React.createElement(MenuItem, Object.assign({}, child.props, {
          onClick: _this2.onClickChild(child.props)
        }));
      })));
    }
  }]);

  return Dropdown;
}(React.Component);

exports.default = Dropdown;