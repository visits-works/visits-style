"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styled = _interopRequireDefault(require("../../styled"));

var _CSSTransition = _interopRequireDefault(require("react-transition-group/CSSTransition"));

var _findColorInvert = _interopRequireDefault(require("../../utils/findColorInvert"));

var _Button = _interopRequireDefault(require("../Button"));

var _Box = _interopRequireDefault(require("../Box"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Wrapper = (0, _styled.default)(_Button.default).withConfig({
  displayName: "Dropdown__Wrapper"
})(["display:inline-flex;position:relative;vertical-align:top;"]);
var Tooltip = (0, _styled.default)(_Box.default).withConfig({
  displayName: "Dropdown__Tooltip"
})(["position:absolute;display:flex;clear:both;top:0;left:0;background-color:white;box-shadow:0 1px 2px 0 rgba(0,0,0,0.05);z-index:9999;padding:0.5rem 0;width:auto;will-change:transform,opacity;transform:scaleY(0.75);transform-origin:top;opacity:0;transition-property:transform,opacity;transition-duration:150ms;transition-timing-function:cubic-bezier(0.645,0.045,0.355,1);&.start{transform:scaleY(1);opacity:1;}&.end{transform:scaleY(0.75);opacity:0;}"]);

var Divider = _styled.default.div.withConfig({
  displayName: "Dropdown__Divider"
})(["height:0;margin:0.5rem 0;overflow:hidden;border-top:1px solid ", ";"], function (_ref) {
  var theme = _ref.theme;
  return theme.border;
});

var MenuItem = _styled.default.a.withConfig({
  displayName: "Dropdown__MenuItem"
})(["display:block;width:100%;padding:0.25rem 1.5rem;text-align:left;white-space:nowrap;background-color:transparent;color:", ";border:0;svg{margin-left:-1rem;padding-right:0.5rem;font-size:1.5rem;}&:hover,&:focus{color:", ";background-color:rgba(0,0,0,0.05);}&:active{", ";}"], function (_ref2) {
  var theme = _ref2.theme;
  return theme.text;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.text;
}, function (_ref4) {
  var theme = _ref4.theme;
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
        top: "".concat(height, "px"),
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

    _this.element = _react.default.createRef();
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
      return _react.default.createElement(Wrapper, {
        innerRef: this.element,
        color: color || 'text',
        size: size,
        onFocus: this.openDropdown,
        onBlur: this.closeDropdown
      }, label, _react.default.createElement(_CSSTransition.default, {
        classNames: {
          appear: 'start',
          enterDone: 'start',
          exit: 'end'
        },
        in: show,
        timeout: 150,
        unmountOnExit: true
      }, _react.default.createElement(Tooltip, {
        style: style
      }, _react.default.Children.map(children, function (child) {
        // @ts-ignore
        if (child.props.divider) {
          return _react.default.createElement(Divider, null);
        } // @ts-ignore


        return _react.default.createElement(MenuItem, Object.assign({}, child.props, {
          onClick: _this2.onClickChild(child.props)
        }));
      }))));
    }
  }]);

  return Dropdown;
}(_react.default.Component);

exports.default = Dropdown;