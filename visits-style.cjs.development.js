'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var styled = require('styled-components');
var styled__default = _interopDefault(styled);
var polished = require('polished');
var reactTransitionGroup = require('react-transition-group');

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

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
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

var Wrapper =
/*#__PURE__*/
styled__default.div.withConfig({
  displayName: "Field__Wrapper",
  componentId: "sc-1ayqhds-0"
})(["display:block;margin:1.5rem 0;"]);
var Label =
/*#__PURE__*/
styled__default.h5.withConfig({
  displayName: "Field__Label",
  componentId: "sc-1ayqhds-1"
})(["display:block;font-size:1rem;font-weight:normal;margin-bottom:0.625rem;text-align:left;color:", ";& > i{color:", ";margin-left:0.325rem;}"], function (_ref2) {
  var theme = _ref2.theme;
  return theme.textStrong;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.primary;
});
function Field(_ref) {
  var label = _ref.label,
      children = _ref.children,
      htmlFor = _ref.htmlFor,
      required = _ref.required,
      rest = _objectWithoutProperties(_ref, ["label", "children", "htmlFor", "required"]);

  return React__default.createElement(Wrapper, Object.assign({}, rest), label && React__default.createElement(Label, {
    htmlFor: htmlFor
  }, label, required && React__default.createElement("i", null, "*")), children);
}

function findColorInvert(_ref, color) {
  var black = _ref.black,
      white = _ref.white;

  if (!color || polished.getLuminance(color) > 0.55) {
    return black;
  }

  return white;
}

function hamburger(size) {
  return styled.css(["display:block;position:relative;height:", ";width:", ";cursor:pointer;span{background-color:currentColor;display:block;height:1px;left:calc(50% - 8px);position:absolute;transform-origin:center;transition-duration:100ms;transition-property:background-color,opacity,transform;transition-timing-function:ease-out;width:16px;&:nth-child(1){top:calc(50% - 6px);}&:nth-child(2){top:calc(50% - 1px);}&:nth-child(3){top:calc(50% + 4px);}&:hover{background-color:rgba(black,0.05);}}&.active span{&:nth-child(1){transform:translateY(5px) rotate(45deg);}&:nth-child(2){opacity:0;}&:nth-child(3){transform:translateY(-5px) rotate(-45deg);}}"], size, size);
}

function boxShadow(size, color, amount) {
  var shadowColor = amount ? polished.transparentize(amount, color) : color;
  return styled.css(["box-shadow:0 0 0 ", " ", ";"], size, shadowColor);
}

function Arrow(color) {
  return styled.css(["position:absolute;border:3px solid ", ";border-radius:2px;border-right:0;border-top:0;content:\" \";display:block;height:0.625em;margin-top:-0.625em;pointer-events:none;top:50%;transform:rotate(-45deg);transform-origin:center;width:0.625em;"], color);
}

function setSize(name, size) {
  switch (size) {
    case 'small':
      return name + ": 0.75rem;";

    case 'medium':
      return name + ": 1.25rem;";

    case 'large':
      return name + ": 1.5rem;";

    default:
      return name + ": 1rem;";
  }
}

function mediaMobile(_ref) {
  var theme = _ref.theme;
  if (!theme.responsive) return '@media (max-width: 0)';
  return "@media screen and (max-width: " + theme.media.mobile + ")";
}
function mediaTablet(_ref2) {
  var theme = _ref2.theme;
  if (!theme.responsive) return '@media (max-width: 0)';
  return "@media screen and (max-width: " + theme.media.tablet + ")";
}
function mediaDesktop(_ref3) {
  var theme = _ref3.theme;
  if (!theme.responsive) return '@media (max-width: 0)';
  return "@media screen and (max-width: " + theme.media.desktop + ")";
}
function mediaFullHD(_ref4) {
  var theme = _ref4.theme;
  if (!theme.responsive) return '@media (max-width: 0)';
  return "@media screen and (max-width: " + theme.media.fullhd + ")";
}
function mediaUntilFullHD(_ref5) {
  var theme = _ref5.theme;
  if (!theme.responsive) return '@media (max-width: 0)';
  return "@media (min-width: " + theme.media.fullhd + ")";
}

function disabledColor(theme) {
  var textColor = polished.transparentize(0.15, theme.textDark);
  var backColor = polished.transparentize(0.55, theme.border);
  return styled.css(["pointer-events:none;box-shadow:none;color:", ";background-color:", ";"], textColor, backColor);
}

var Message =
/*#__PURE__*/
styled__default.small.withConfig({
  displayName: "HelpMessage__Message",
  componentId: "sc-14wou17-0"
})(["font-size:0.8rem;color:", ";"], function (_ref) {
  var error = _ref.error,
      theme = _ref.theme;
  return error ? theme.danger : theme.textLight;
});
function HelpMessage(_ref2) {
  var help = _ref2.help,
      error = _ref2.error;
  if (error) return React__default.createElement(Message, {
    error: true
  }, error);
  if (help) return React__default.createElement(Message, null, help);
  return null;
}

function TextInput(_ref) {
  var className = _ref.className,
      outline = _ref.outline,
      error = _ref.error,
      style = _ref.style,
      help = _ref.help,
      leftIcon = _ref.leftIcon,
      rightIcon = _ref.rightIcon,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'text' : _ref$type,
      _ref$maxLength = _ref.maxLength,
      maxLength = _ref$maxLength === void 0 ? 255 : _ref$maxLength,
      rest = _objectWithoutProperties(_ref, ["className", "outline", "error", "style", "help", "leftIcon", "rightIcon", "type", "maxLength"]);

  return React__default.createElement(Wrapper$1, {
    className: className,
    outline: outline,
    error: error,
    style: style,
    disabled: rest.disabled
  }, leftIcon && React__default.createElement(Icon, null, leftIcon), rightIcon && React__default.createElement(Icon, {
    right: true
  }, rightIcon), React__default.createElement("input", Object.assign({
    type: type,
    maxLength: maxLength
  }, rest)), React__default.createElement(HelpMessage, {
    help: help,
    error: error
  }));
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
  componentId: "sc-1myda3q-0"
})(["position:absolute;top:0.375em;bottom:0;z-index:1;color:", ";", " svg,img{height:1em;width:1em;}"], function (_ref2) {
  var theme = _ref2.theme;
  return theme.border;
}, function (_ref3) {
  var right = _ref3.right;
  return right ? rightIcon : leftIcon;
});
var Wrapper$1 =
/*#__PURE__*/
styled__default.span.withConfig({
  displayName: "TextInput__Wrapper",
  componentId: "sc-1myda3q-1"
})(["position:relative;display:block;input{max-width:100%;width:100%;height:100%;position:relative;display:block;outline:none;box-shadow:none;appearance:none;text-align:left;color:inherit;padding:", ";border:1px solid ", ";", " ", " transition-property:box-shadow;transition-duration:150ms;transition-timing-function:ease-in-out;&:focus{border-color:", ";box-shadow:", ";}&:disabled,[disabled]{resize:none;}&::placeholder{color:", ";}}&:hover{input:not(:disabled):not(:focus):not(:active){border-color:", ";}", "{color:", ";}}", ""], function (_ref4) {
  var theme = _ref4.theme;
  return theme.formPadding;
}, function (_ref5) {
  var error = _ref5.error,
      theme = _ref5.theme;
  return error ? theme.danger : theme.border;
}, function (_ref6) {
  var outline = _ref6.outline,
      theme = _ref6.theme;
  return outline ? {
    borderRadius: theme.radius
  } : {
    borderRadius: 0,
    borderWidth: 0,
    borderBottomWidth: '1px'
  };
},
/*#__PURE__*/
setSize('font-size'), function (_ref7) {
  var error = _ref7.error,
      theme = _ref7.theme;
  return error ? theme.danger : theme.primary;
}, function (_ref8) {
  var theme = _ref8.theme,
      outline = _ref8.outline,
      error = _ref8.error;
  return outline ? "0 0 0 0.1em " + (error ? theme.danger : theme.primary) : "0 0.1em " + (error ? theme.danger : theme.primary);
}, function (_ref9) {
  var theme = _ref9.theme;
  return theme.placeholder;
}, function (_ref10) {
  var theme = _ref10.theme;
  return theme.borderHover;
}, Icon, function (_ref11) {
  var theme = _ref11.theme;
  return theme.borderHover;
}, function (_ref12) {
  var disabled = _ref12.disabled,
      theme = _ref12.theme;
  return disabled ? styled.css(["input{", " border-style:dashed;}"], disabledColor(theme)) : undefined;
});

function Textarea(_ref) {
  var className = _ref.className,
      help = _ref.help,
      error = _ref.error,
      style = _ref.style,
      rest = _objectWithoutProperties(_ref, ["className", "help", "error", "style"]);

  return React__default.createElement(Wrapper$2, {
    className: className,
    error: !!error,
    style: style,
    disabled: rest.disabled
  }, React__default.createElement("textarea", Object.assign({}, rest)), React__default.createElement(HelpMessage, {
    help: help,
    error: error
  }));
}
var Wrapper$2 =
/*#__PURE__*/
styled__default.span.withConfig({
  displayName: "Textarea__Wrapper",
  componentId: "z9p0uf-0"
})(["display:block;position:relative;textarea{max-width:100%;width:100%;height:100%;padding:0.625em;resize:vertical;appearance:none;overflow:auto;outline:none;text-align:left;color:inherit;border-radius:", ";border:1px solid ", ";transition-property:box-shadow;transition-duration:0.15s;transition-timing-function:ease-in-out;", " &:focus{border-color:", ";", "}&:disabled,[disabled],&:readonly{", "}&:disabled,[disabled]{resize:none;}&::placeholder{color:", ";}}&:hover{textarea:not(:disabled):not(:focus){border-color:", ";}}", ""], function (_ref2) {
  var theme = _ref2.theme;
  return theme.radius;
}, function (_ref3) {
  var theme = _ref3.theme,
      error = _ref3.error;
  return error ? theme.danger : theme.border;
},
/*#__PURE__*/
setSize('font-size'), function (_ref4) {
  var theme = _ref4.theme,
      error = _ref4.error;
  return error ? theme.danger : theme.primary;
}, function (_ref5) {
  var theme = _ref5.theme,
      error = _ref5.error;
  return boxShadow('0.1em', error ? theme.danger : theme.primary);
}, function (_ref6) {
  var theme = _ref6.theme;
  return disabledColor(theme);
}, function (_ref7) {
  var theme = _ref7.theme;
  return theme.placeholder;
}, function (_ref8) {
  var theme = _ref8.theme;
  return theme.borderHover;
}, function (_ref9) {
  var disabled = _ref9.disabled,
      theme = _ref9.theme;
  return disabled ? styled.css(["textarea{", " border-style:dashed;}"], disabledColor(theme)) : undefined;
});

function Approved() {
  return React__default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "30",
    height: "30",
    viewBox: "0 0 30 30"
  }, React__default.createElement("g", {
    transform: "translate(-80 -215)"
  }, React__default.createElement("path", {
    d: "M8.925,15.871,5.047,11.886,3.41,13.41,9,19,20.562,7.467l-1.7-1.595Z",
    transform: "translate(82.59 217.595)",
    fill: "currentColor"
  })));
}

function Checkbox(_ref) {
  var className = _ref.className,
      children = _ref.children,
      rest = _objectWithoutProperties(_ref, ["className", "children"]);

  var id = "checkbox_" + rest.name + "_" + rest.value;
  var innerClass = React.useMemo(function () {
    var arr = [];
    if (rest.checked) arr.push('checked');
    if (rest.disabled) arr.push('disabled');
    return arr.join(' ');
  }, [rest.checked, rest.disabled]);
  return React__default.createElement(Wrapper$3, {
    className: className
  }, React__default.createElement("input", Object.assign({
    type: "checkbox",
    id: id
  }, rest)), React__default.createElement("label", {
    htmlFor: id
  }, React__default.createElement(Shape, {
    className: innerClass
  }, React__default.createElement(Approved, null)), children));
}
var Shape =
/*#__PURE__*/
styled__default.div.withConfig({
  displayName: "Checkbox__Shape",
  componentId: "sc-1lh5swj-0"
})(["display:inline-flex;margin:0.5rem;width:1.25em;height:1.25em;background:transparent;border:0.1em solid ", ";border-radius:", ";justify-content:center;align-items:center;will-change:background-color;transition:background-color 150ms ease-out;svg{opacity:0;stroke-width:0.1em;stroke:currentColor;}&.checked{border-color:", ";background-color:", ";svg{opacity:1;color:", ";}&.disabled svg{color:", ";}}&.disabled{background:", ";border-color:", ";}"], function (_ref2) {
  var theme = _ref2.theme;
  return theme.border;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.radius;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.primary;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.primary;
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.white;
}, function (_ref7) {
  var theme = _ref7.theme;
  return polished.transparentize(0.15, theme.textDark);
}, function (_ref8) {
  var theme = _ref8.theme;
  return polished.transparentize(0.55, theme.border);
}, function (_ref9) {
  var theme = _ref9.theme;
  return theme.border;
});
var Wrapper$3 =
/*#__PURE__*/
styled__default.span.withConfig({
  displayName: "Checkbox__Wrapper",
  componentId: "sc-1lh5swj-1"
})(["display:block;position:relative;width:auto;label{display:flex;align-items:center;cursor:pointer;padding-left:0.625em;max-width:100%;width:100%;line-height:1.25;margin-right:0.625rem;}input{display:none;&:indeterminate + label{&:before{border-color:", ";background:", ";}&:after{border-color:", ";border-left-style:none;}}&:disabled + label{color:", ";}}"], function (_ref10) {
  var theme = _ref10.theme;
  return theme.primary;
}, function (_ref11) {
  var theme = _ref11.theme;
  return theme.primary;
}, function (_ref12) {
  var theme = _ref12.theme;
  return theme.white;
}, function (_ref13) {
  var theme = _ref13.theme;
  return polished.transparentize(0.25, theme.textDark);
});

function ChevronDown(props) {
  return React__default.createElement("svg", Object.assign({
    width: "12",
    height: "8",
    viewBox: "0 0 12 8",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), React__default.createElement("path", {
    d: "M10.6 0L6 4.6L1.4 0L0 1.4L6 7.4L12 1.4L10.6 0Z",
    fill: "currentColor"
  }));
}

function Select(_ref) {
  var _ref$options = _ref.options,
      options = _ref$options === void 0 ? [] : _ref$options,
      placeholder = _ref.placeholder,
      render = _ref.render,
      help = _ref.help,
      error = _ref.error,
      className = _ref.className,
      inputSize = _ref.inputSize,
      outline = _ref.outline,
      optional = _ref.optional,
      rest = _objectWithoutProperties(_ref, ["options", "placeholder", "render", "help", "error", "className", "inputSize", "outline", "optional"]);

  var list = React.useMemo(function () {
    return options.map(function (item) {
      return typeof item === 'string' ? React__default.createElement("option", {
        key: item,
        value: item
      }, render ? render(item) : item) : React__default.createElement("option", {
        key: item.id,
        value: item.id
      }, render ? render(item.name) : item.name);
    });
  }, [options, render]);
  return React__default.createElement(InputWrapper, {
    className: className,
    size: inputSize,
    outline: outline,
    error: !!error,
    disabled: rest.disabled
  }, React__default.createElement("select", Object.assign({}, rest), placeholder && React__default.createElement("option", {
    value: "",
    disabled: !optional
  }, placeholder), list), React__default.createElement(ChevronDown, null), React__default.createElement(HelpMessage, {
    help: help,
    error: error
  }));
}
var InputWrapper =
/*#__PURE__*/
styled__default.span.withConfig({
  displayName: "Select__InputWrapper",
  componentId: "gevlx8-0"
})(["position:relative;display:block;select{display:block;cursor:pointer;appearance:none;outline:none;max-width:100%;width:100%;height:100%;background-color:transparent;padding:", ";padding-right:1.85rem;text-align:left;color:inherit;", " border:1px solid ", ";", " will-change:box-shadow;transition-property:box-shadow;transition-duration:150ms;transition-timing-function:ease-in-out;&:hover{border-color:", ";}&:focus{border-color:", ";box-shadow:", ";}&::-ms-expand{display:none;}&:-moz-focusring{color:transparent;text-shadow:0 0 0 #000;}&:invalid{color:", ";}}svg{position:absolute;right:0.75rem;top:50%;transform:translateY(-50%);color:", ";}select:hover + svg{color:", ";}", ""], function (_ref2) {
  var theme = _ref2.theme;
  return theme.formPadding;
}, function (_ref3) {
  var size = _ref3.size;
  return setSize('font-size', size);
}, function (_ref4) {
  var error = _ref4.error,
      theme = _ref4.theme;
  return error ? theme.danger : theme.border;
}, function (_ref5) {
  var outline = _ref5.outline,
      theme = _ref5.theme;
  return outline ? styled.css(["border-radius:", ";"], theme.radius) : styled.css(["border-width:0;border-radius:0;border-bottom-width:1px;"]);
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.borderHover;
}, function (_ref7) {
  var error = _ref7.error,
      theme = _ref7.theme;
  return error ? theme.danger : theme.primary;
}, function (_ref8) {
  var theme = _ref8.theme,
      outline = _ref8.outline,
      error = _ref8.error;
  return outline ? "0 0 0 0.1em " + (error ? theme.danger : theme.primary) : "0 0.1em " + (error ? theme.danger : theme.primary);
}, function (_ref9) {
  var theme = _ref9.theme;
  return theme.placeholder;
}, function (_ref10) {
  var theme = _ref10.theme;
  return theme.border;
}, function (_ref11) {
  var theme = _ref11.theme;
  return theme.borderHover;
}, function (_ref12) {
  var disabled = _ref12.disabled,
      theme = _ref12.theme;
  return disabled ? styled.css(["select{", " border-style:dashed;}svg{display:none;}"], disabledColor(theme)) : undefined;
});

function Radio(_ref) {
  var className = _ref.className,
      style = _ref.style,
      children = _ref.children,
      rest = _objectWithoutProperties(_ref, ["className", "style", "children"]);

  var id = "radio_" + rest.name + "_" + rest.value;
  var innerClass = React.useMemo(function () {
    var arr = [];
    if (rest.checked) arr.push('checked');
    if (rest.disabled) arr.push('disabled');
    return arr.join(' ');
  }, [rest.checked, rest.disabled]);
  return React__default.createElement(Wrapper$4, {
    className: className,
    style: style
  }, React__default.createElement("label", {
    htmlFor: id
  }, React__default.createElement(Shape$1, {
    className: innerClass
  }, React__default.createElement("i", null)), children), React__default.createElement("input", Object.assign({
    id: id,
    type: "radio"
  }, rest)));
}
var Shape$1 =
/*#__PURE__*/
styled__default.div.withConfig({
  displayName: "Radio__Shape",
  componentId: "sc-13m0vd4-0"
})(["display:inline-flex;margin:0.5rem;width:1.25em;height:1.25em;background:transparent;border:0.1em solid ", ";border-radius:50%;justify-content:center;align-items:center;will-change:background-color,border-color;transition-property:background-color,border-color;transition-duration:150ms;transition-timing-function:ease-out;&.checked{border-color:", ";& > i{transform:scale(1);}&.disabled > i{background-color:", ";}}&.disabled{background:", ";border-color:", ";}& > i{display:block;width:0.5em;height:0.5em;background:", ";border:none;transform:scale(0);border-radius:50%;will-change:transform;transition:transform 150ms ease-out;}"], function (_ref2) {
  var theme = _ref2.theme;
  return theme.border;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.primary;
}, function (_ref4) {
  var theme = _ref4.theme;
  return polished.transparentize(0.15, theme.textDark);
}, function (_ref5) {
  var theme = _ref5.theme;
  return polished.transparentize(0.55, theme.border);
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.border;
}, function (_ref7) {
  var theme = _ref7.theme;
  return theme.primary;
});
var Wrapper$4 =
/*#__PURE__*/
styled__default.span.withConfig({
  displayName: "Radio__Wrapper",
  componentId: "sc-13m0vd4-1"
})(["display:block;width:auto;label{cursor:pointer;max-width:100%;width:100%;line-height:1.25;margin-right:0.625rem;display:flex;align-items:center;&:hover > div:not(.checked):not(.disabled){border-color:", ";}}input{display:none;}"], function (_ref8) {
  var theme = _ref8.theme;
  return theme.borderHover;
});

function Switch(_ref) {
  var className = _ref.className,
      height = _ref.height,
      showLabel = _ref.showLabel,
      background = _ref.background,
      anchorColor = _ref.anchorColor,
      rest = _objectWithoutProperties(_ref, ["className", "height", "showLabel", "background", "anchorColor"]);

  var id = React.useRef("switch_" + rest.name);
  return React__default.createElement(Wrapper$5, {
    className: className,
    height: height,
    showLabel: showLabel,
    background: background,
    anchorColor: anchorColor,
    disabled: rest.disabled
  }, React__default.createElement("input", Object.assign({
    id: id.current,
    type: "checkbox"
  }, rest)), React__default.createElement("label", {
    htmlFor: id.current
  }));
}
var labelStyle =
/*#__PURE__*/
styled.css(["label:before{position:absolute;display:block;content:'OFF';top:0.45rem;right:0.6875rem;font-size:0.75rem;color:", ";}input:checked ~ label:before{content:'ON';right:unset;left:0.6875rem;color:", ";}"], function (_ref2) {
  var theme = _ref2.theme;
  return theme.textLight;
}, function (_ref3) {
  var theme = _ref3.theme;
  return findColorInvert(theme, theme.primary);
});
var Wrapper$5 =
/*#__PURE__*/
styled__default.span.withConfig({
  displayName: "Switch__Wrapper",
  componentId: "sc-1ljdf1-0"
})(["display:inline-block;cursor:pointer;line-height:1.25;position:relative;input{display:none;}label{position:relative;display:block;height:1.875rem;min-width:5rem;background:transparent;border:1px solid ", ";border-radius:1.25rem;cursor:pointer;will-change:background-color;transition:background-color 300ms ease;box-shadow:inset 0 0.25rem 0.25rem rgba(0,0,0,0.05);&:after{position:absolute;display:block;left:0.375rem;top:0.2rem;width:1.375rem;height:1.375rem;border-radius:100%;background:", ";content:'';text-align:right;border:1px solid ", ";will-change:left;transition:left 300ms ease;box-shadow:0 0 0.375rem rgba(0,0,0,0.1);}}input:checked ~ label{background:", ";box-shadow:inset 0 0.25rem 0.25rem rgba(0,0,0,0.15);&:after{left:calc(100% - 1.75rem);box-shadow:0 0 0.375rem rgba(0,0,0,0.15);}}", " ", ""], function (_ref4) {
  var theme = _ref4.theme;
  return theme.border;
}, function (_ref5) {
  var theme = _ref5.theme,
      anchorColor = _ref5.anchorColor;
  return anchorColor || theme.white;
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.border;
}, function (_ref7) {
  var theme = _ref7.theme,
      background = _ref7.background;
  return background || theme.primary;
}, function (_ref8) {
  var showLabel = _ref8.showLabel;
  return showLabel ? labelStyle : undefined;
}, function (_ref9) {
  var disabled = _ref9.disabled,
      theme = _ref9.theme;
  return disabled ? styled.css(["cursor:default;label{", " &:after{background:", ";}}input:checked ~ label{background:", ";}"], disabledColor(theme), theme.disabled, theme.grey) : undefined;
});

function Accordion(_ref) {
  var header = _ref.header,
      show = _ref.show,
      children = _ref.children,
      _ref$timeout = _ref.timeout,
      timeout = _ref$timeout === void 0 ? 300 : _ref$timeout,
      rest = _objectWithoutProperties(_ref, ["header", "show", "children", "timeout"]);

  return React__default.createElement("div", Object.assign({}, rest), header, React__default.createElement(reactTransitionGroup.Transition, {
    timeout: timeout,
    "in": show,
    unmountOnExit: true
  }, function (state) {
    return React__default.createElement(AnimatedContent, {
      className: state,
      timeout: timeout
    }, children);
  }));
}
var AnimatedContent =
/*#__PURE__*/
styled__default.div.withConfig({
  displayName: "Accordion__AnimatedContent",
  componentId: "sc-1yjowun-0"
})(["transform-origin:top;will-change:transform,max-height;transition-property:transform,max-height;transition-duration:", "ms;transition-timing-function:ease-in-out;height:auto;overflow:hidden;max-height:auto;&.entering{max-height:0;transform:scaleY(0);}&.entered{max-height:15rem;transform:scaleY(1);}&.exiting{max-height:0px;transform:scaleY(0);}"], function (_ref2) {
  var timeout = _ref2.timeout;
  return timeout;
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

function AppBar(_ref) {
  var children = _ref.children,
      align = _ref.align,
      brand = _ref.brand,
      rest = _objectWithoutProperties(_ref, ["children", "align", "brand"]);

  var _useState = React.useState(false),
      show = _useState[0],
      setShow = _useState[1];

  var toggleMenu = React.useCallback(function () {
    return setShow(!show);
  }, [show]);
  return React__default.createElement(NavBar, Object.assign({
    role: "navigation"
  }, rest), React__default.createElement("nav", null, brand, React__default.createElement(Burger, {
    className: show ? 'active' : undefined,
    onClick: toggleMenu
  }, React__default.createElement("span", null), React__default.createElement("span", null), React__default.createElement("span", null)), React__default.createElement(NavContent, {
    className: show ? 'active' : undefined,
    align: align
  }, children)));
}

function setColor(_ref2) {
  var color = _ref2.color,
      theme = _ref2.theme,
      backdrop = _ref2.backdrop;
  var backgroundColor = color ? theme[color] : 'transparent';
  var textColor = findColorInvert(theme, backgroundColor === 'transparent' ? theme.background : backgroundColor);

  if (backdrop) {
    var backColor = polished.transparentize(0.2, backgroundColor === 'transparent' ? theme.white : backgroundColor);
    return styled.css(["background-color:", ";color:", ";"], backColor, textColor);
  }

  return styled.css(["background-color:", ";color:", ";"], backgroundColor, textColor);
}

var NavBar =
/*#__PURE__*/
styled__default.header.withConfig({
  displayName: "AppBar__NavBar",
  componentId: "t8gqca-0"
})(["position:", ";display:flex;top:-1px;min-height:3.25rem;width:100%;z-index:30;padding:", ";& > nav{display:flex;flex-direction:row;flex-wrap:wrap;align-items:center;flex:1 0 auto;}", " a{color:inherit;}", "{padding:", ";}"], function (_ref3) {
  var fixed = _ref3.fixed,
      sticky = _ref3.sticky;
  if (sticky) return 'sticky';
  if (fixed) return 'fixed';
  return 'relative';
}, function (_ref4) {
  var fluid = _ref4.fluid;
  return fluid ? '0 0.75rem' : '0 5%';
}, setColor, mediaTablet, function (_ref5) {
  var fluid = _ref5.fluid;
  return fluid ? '0 0.5rem' : '0 3%';
});
var Burger =
/*#__PURE__*/
styled__default.button.withConfig({
  displayName: "AppBar__Burger",
  componentId: "t8gqca-1"
})(["", " display:none;margin-left:auto;border:none;background-color:transparent;color:inherit;outline:none;&:hover{background-color:rgba(0,0,0,.05);}", "{display:block;}"],
/*#__PURE__*/
hamburger('3.25rem'), mediaMobile);
var NavContent =
/*#__PURE__*/
styled__default.div.withConfig({
  displayName: "AppBar__NavContent",
  componentId: "t8gqca-2"
})(["display:flex;flex-direction:row;justify-content:space-between;align-items:center;flex-basis:auto;flex-grow:1;height:100%;& > ul{display:flex;flex-direction:row;list-style:none;flex-grow:1;flex-basis:100%;height:inherit;align-items:center;justify-content:", ";li{padding:0.85rem;}}& > div,& > span,& > form{display:flex;", "}", "{width:100%;flex-direction:column;align-items:flex-start;height:auto;padding-bottom:0.5rem;&:not(.active){display:none;}& > ul{flex-direction:column;align-items:flex-start;width:100%;flex-basis:auto;li{padding:.5rem 0;}}& > div,& > span,& > form{padding:.5rem 0;width:100%;}}"], setAlign, function (_ref6) {
  var color = _ref6.color;
  return color ? "color: " + color + ";" : '';
}, mediaMobile);

function setResponsive(_ref) {
  var fluid = _ref.fluid;

  if (fluid) {
    return styled.css(["", "{padding-right:0.75rem;padding-left:0.75rem;}", "{padding-right:0.75rem;padding-left:0.75rem;}", "{padding-right:0.5rem;padding-left:0.5rem;}"], mediaFullHD, mediaDesktop, mediaMobile);
  }

  return styled.css(["margin-right:auto;margin-left:auto;", "{max-width:", "px;}", "{max-width:", "px;}", "{max-width:", "px;}", "{max-width:", "px;}"], mediaFullHD, function (_ref2) {
    var theme = _ref2.theme;
    return theme.fullhd - 2 * theme.gutter;
  }, mediaDesktop, function (_ref3) {
    var theme = _ref3.theme;
    return theme.desktop - 2 * theme.gutter;
  }, mediaTablet, function (_ref4) {
    var theme = _ref4.theme;
    return theme.tablet - 2 * theme.smallGutter;
  }, mediaMobile, function (_ref5) {
    var theme = _ref5.theme;
    return theme.mobile - 2 * theme.smallGutter;
  });
}

var Container = /*#__PURE__*/
styled__default.div.withConfig({
  displayName: "Container",
  componentId: "sc-1308ay5-0"
})(["position:relative;width:100%;", ""], setResponsive);

var Body =
/*#__PURE__*/
styled__default.div.withConfig({
  displayName: "Hero__Body",
  componentId: "sc-12m9apf-0"
})(["flex-grow:1;flex-shrink:0;width:100%;padding:3rem 1.5rem;", " h1{font-size:2rem;font-weight:600;line-height:1.125;&:not(:last-child){margin-bottom:1.5rem;}}h2{font-size:1.25rem;font-weight:400;line-height:1.25;}h1+h2{margin-top:-1.25rem;}"], function (_ref2) {
  var center = _ref2.center;
  return center ? 'text-align: center;' : '';
});

function setColor$1(_ref3) {
  var color = _ref3.color,
      theme = _ref3.theme;
  if (!color) return '';
  var target = theme[color] || color;
  var invertColor = findColorInvert(theme, target);
  return styled.css(["background-color:", ";color:", ";"], target, invertColor);
}

function setSize$1(_ref4) {
  var size = _ref4.size;
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

var Wrapper$6 =
/*#__PURE__*/
styled__default.div.withConfig({
  displayName: "Hero__Wrapper",
  componentId: "sc-12m9apf-1"
})(["align-items:stretch;display:flex;flex-direction:column;justify-content:space-between;width:100%;", " ", " header{background-color:inherit;color:inherit;}header + ", "{margin-top:3.25rem;margin-bottom:3.25rem;}"], setColor$1, setSize$1, Body);
function Hero(_ref) {
  var children = _ref.children,
      color = _ref.color,
      size = _ref.size,
      center = _ref.center,
      header = _ref.header,
      rest = _objectWithoutProperties(_ref, ["children", "color", "size", "center", "header"]);

  return React__default.createElement(Wrapper$6, Object.assign({
    color: color,
    size: size
  }, rest), header, React__default.createElement(Body, {
    center: center
  }, React__default.createElement(Container, null, children)));
}

function Tooltip(_ref) {
  var children = _ref.children,
      _ref$position = _ref.position,
      position = _ref$position === void 0 ? 'bottom' : _ref$position,
      label = _ref.label,
      color = _ref.color,
      rest = _objectWithoutProperties(_ref, ["children", "position", "label", "color"]);

  var parent = React.useRef(null);
  var tooltip = React.useRef(null);

  var _useState = React.useState(false),
      show = _useState[0],
      setShow = _useState[1];

  var _useState2 = React.useState({}),
      tooltipStyle = _useState2[0],
      setStyle = _useState2[1];

  var openTooltip = React.useCallback(function () {
    if (show || !parent.current || !tooltip.current) return;
    var parentRect = parent.current.getBoundingClientRect();
    var rect = tooltip.current.getBoundingClientRect();
    var left = parentRect.width + 8;
    var top = parentRect.height + 8;
    var width = parentRect.width - rect.width >> 1;
    var height = parentRect.height - rect.height >> 1;

    switch (position) {
      case 'top':
        {
          setStyle({
            bottom: top + "px",
            left: width + "px"
          });
          break;
        }

      case 'left':
        {
          setStyle({
            right: left + "px",
            top: height + "px"
          });
          break;
        }

      case 'right':
        {
          setStyle({
            left: left + "px",
            top: height + "px"
          });
          break;
        }

      default:
        {
          setStyle({
            top: top + "px",
            left: width + "px"
          });
          break;
        }
    }

    setShow(true); // eslint-disable-next-line
  }, [position]);
  var closeTooltip = React.useCallback(function () {
    return setShow(false);
  }, []);
  return React__default.createElement(Wrapper$7, Object.assign({
    ref: parent,
    onMouseOver: openTooltip,
    onFocus: openTooltip,
    onMouseOut: closeTooltip,
    onBlur: closeTooltip
  }, rest), children, React__default.createElement(TooltipWrapper, {
    ref: tooltip,
    show: show,
    role: "tooltip",
    color: color,
    style: tooltipStyle
  }, label));
}
var Wrapper$7 =
/*#__PURE__*/
styled__default.div.withConfig({
  displayName: "Tooltip__Wrapper",
  componentId: "sc-1xyhucq-0"
})(["position:relative;display:inline-block;"]);
var TooltipWrapper =
/*#__PURE__*/
styled__default.div.withConfig({
  displayName: "Tooltip__TooltipWrapper",
  componentId: "sc-1xyhucq-1"
})(["position:absolute;clear:both;box-shadow:0 1px 2px 0 rgba(0,0,0,0.05);z-index:9999;padding:0.375rem 0.625rem;cursor:default;width:auto;white-space:pre;font-size:0.85rem;z-index:9999;transform:scale(0.8);opacity:0;visibility:hidden;will-change:transform,opacity,visibility;transition-property:transform,opacity,visibility;transition-duration:100ms;transition-timing-function:cubic-bezier(0.645,0.045,0.355,1);background-color:", ";", ""], function (_ref2) {
  var color = _ref2.color,
      theme = _ref2.theme;
  return theme[color] || 'white';
}, function (_ref3) {
  var show = _ref3.show;
  return show && styled.css(["transform:scale(1);opacity:1;visibility:visible;"]);
});

var Box = /*#__PURE__*/
styled__default.div.withConfig({
  displayName: "Box",
  componentId: "kc6ybp-0"
})(["position:relative;display:flex;flex-direction:column;border:", ";border-radius:", ";width:100%;min-width:0;word-wrap:break-word;", ""], function (_ref) {
  var borderless = _ref.borderless,
      theme = _ref.theme;
  return borderless ? 'none' : "1px solid " + theme.border;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.radius;
}, function (_ref3) {
  var color = _ref3.color,
      theme = _ref3.theme;
  if (!color) return undefined;
  var target = theme[color] || color;
  var invertColor = findColorInvert(theme, target);
  return {
    backgroundColor: target,
    color: invertColor
  };
});

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
})(["display:flex;padding:0.5rem 1.5rem;min-height:3.5rem;border-bottom:1px solid ", ";align-items:center;justify-content:space-between;"], function (_ref2) {
  var theme = _ref2.theme;
  return theme.border;
});
var CardFooter =
/*#__PURE__*/
styled__default.footer.withConfig({
  displayName: "Card__CardFooter",
  componentId: "sc-1xqn2rf-2"
})(["display:flex;padding:0.5rem 1.5rem;min-height:3.5rem;border-top:1px solid ", ";align-items:center;justify-content:space-between;"], function (_ref3) {
  var theme = _ref3.theme;
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
})(["flex:0 0 30%;min-width:5rem;width:30%;border-top-left-radius:3px;border-bottom-left-radius:3px;background:no-repeat center/cover;", ""], function (_ref4) {
  var url = _ref4.url;
  return url ? {
    backgroundImage: "url(" + url + ")"
  } : undefined;
});
function Card(_ref) {
  var image = _ref.image,
      title = _ref.title,
      children = _ref.children,
      horizontal = _ref.horizontal,
      footer = _ref.footer,
      color = _ref.color,
      _ref$style = _ref.style,
      style = _ref$style === void 0 ? {} : _ref$style,
      rest = _objectWithoutProperties(_ref, ["image", "title", "children", "horizontal", "footer", "color", "style"]);

  var header = React.useMemo(function () {
    if (image && !horizontal) return React__default.createElement(CardImage, null, React__default.createElement("img", {
      src: image,
      alt: ""
    }));
    if (image && horizontal) return React__default.createElement(CardImageHorizontal, {
      url: image
    });
    if (title && !horizontal) return React__default.createElement(CardHeader, null, React__default.createElement("h3", null, title));
    return null;
  }, [image, title, horizontal]);
  var styles = React.useMemo(function () {
    return _objectSpread({
      flexDirection: horizontal ? 'row' : 'column'
    }, style);
  }, [style, horizontal]);
  return React__default.createElement(Box, Object.assign({
    color: color
  }, rest, {
    style: styles
  }), header, React__default.createElement(CardBody, null, children), footer && React__default.createElement(CardFooter, null, React__default.Children.only(footer)));
} // export default class Card extends PureComponent<Props> {
//   renderHeader = () => {
//     const { image, title, horizontal } = this.props;
//     if (image && !horizontal) return (<CardImage><img src={image} /></CardImage>);
//     if (image && horizontal) return (<CardImageHorizontal url={image} />);
//     if (title && !horizontal) return (<CardHeader><h3>{title}</h3></CardHeader>);
//     return null;
//   }
//   render() {
//     const { children, horizontal, footer, color } = this.props;
//     const header = this.renderHeader();
//     const wrapperStyle = horizontal ? horizontalStyle : undefined;
//     return (
//       <Box style={wrapperStyle} color={color}>
//         {header}
//         <CardBody>
//           {children}
//         </CardBody>
//         {footer && (<CardFooter>{React.Children.only(footer)}</CardFooter>)}
//       </Box>
//     );
//   }
// }

function Popover(_ref) {
  var position = _ref.position,
      label = _ref.label,
      children = _ref.children,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'white' : _ref$color,
      onOpen = _ref.onOpen,
      onClose = _ref.onClose,
      disabled = _ref.disabled,
      rest = _objectWithoutProperties(_ref, ["position", "label", "children", "color", "onOpen", "onClose", "disabled"]);

  var parent = React.useRef(null);
  var tooltip = React.useRef(null);

  var _useState = React.useState(false),
      show = _useState[0],
      setShow = _useState[1];

  var _useState2 = React.useState({}),
      tooltipStyle = _useState2[0],
      setStyle = _useState2[1];

  React.useEffect(function () {
    if (show && disabled) setShow(false);
  }, [show, disabled]);
  var handleFocus = React.useCallback(function () {
    if (show || !parent.current || !tooltip.current || !!disabled) return;
    var parentRect = parent.current.getBoundingClientRect();
    var tooltipRect = tooltip.current.getBoundingClientRect();

    switch (position) {
      case 'top-left':
        {
          setStyle({
            bottom: parentRect.height + 8 + "px",
            left: 0
          });
          break;
        }

      case 'top-right':
        {
          setStyle({
            bottom: parentRect.height + 8 + "px",
            right: 0
          });
          break;
        }

      case 'top':
        {
          setStyle({
            bottom: parentRect.height + 8 + "px",
            left: (parentRect.width - tooltipRect.width >> 1) + "px"
          });
          break;
        }

      case 'bottom-right':
        {
          setStyle({
            top: parentRect.height + 8 + "px",
            right: 0
          });
          break;
        }

      case 'bottom':
        {
          setStyle({
            top: parentRect.height + 8 + "px",
            left: (parentRect.width - tooltipRect.width >> 1) + "px"
          });
          break;
        }
      // bottom-left

      default:
        {
          setStyle({
            top: parentRect.height + 8 + "px",
            left: 0
          });
          break;
        }
    }

    if (onOpen) onOpen();
    setShow(true);
  }, [show, position, onOpen, disabled]);
  var handleBlur = React.useCallback(function () {
    if (onClose) onClose();
    if (show) setShow(false);
  }, [show, onClose]);
  return React__default.createElement(Wrapper$8, {
    tabIndex: 0,
    role: "button",
    ref: parent,
    onClick: handleFocus
  }, label, React__default.createElement(Tooltip$1, Object.assign({
    show: show,
    role: "tooltip",
    ref: tooltip,
    style: tooltipStyle,
    color: color
  }, rest), children), show && React__default.createElement(Shadow, {
    onClick: handleBlur
  }));
}
var Wrapper$8 =
/*#__PURE__*/
styled__default.div.withConfig({
  displayName: "Popover__Wrapper",
  componentId: "sc-1huajr8-0"
})(["display:block;outline:none;color:inherit;position:relative;&:hover{color:inherit;text-decoration:none;}"]);
var Tooltip$1 =
/*#__PURE__*/
styled__default(Box).withConfig({
  displayName: "Popover__Tooltip",
  componentId: "sc-1huajr8-1"
})(["position:absolute;display:flex;clear:both;box-shadow:0 1px 2px 0 rgba(0,0,0,0.05);z-index:9999;padding:0.5rem 0;width:auto;height:auto;cursor:auto;will-change:transform,opacity,visibility;transform:scale(0.8);opacity:0;visibility:hidden;transition-property:transform,opacity,visibility;transition-duration:100ms;transition-timing-function:cubic-bezier(0.645,0.045,0.355,1);", ""], function (_ref2) {
  var show = _ref2.show;
  return show && styled.css(["transform:scale(1);opacity:1;visibility:visible;"]);
});
var Shadow =
/*#__PURE__*/
styled__default.div.withConfig({
  displayName: "Popover__Shadow",
  componentId: "sc-1huajr8-2"
})(["position:fixed;z-index:9998;top:0;left:0;bottom:0;right:0;width:100%;height:100%;"]);

var Shadow$1 =
/*#__PURE__*/
styled__default.div.withConfig({
  displayName: "Modal__Shadow",
  componentId: "pb7lhx-0"
})(["position:fixed;top:0;right:0;left:0;bottom:0;width:100%;height:100%;"]);
var Wrapper$9 =
/*#__PURE__*/
styled__default(Shadow$1).withConfig({
  displayName: "Modal__Wrapper",
  componentId: "pb7lhx-1"
})(["display:flex;z-index:9997;overflow-y:auto;overflow-x:hidden;background-color:", ";padding:0.85rem;"], function (_ref2) {
  var theme = _ref2.theme;
  return theme.backdrop;
});
var AnimatedBox =
/*#__PURE__*/
styled__default(Box).withConfig({
  displayName: "Modal__AnimatedBox",
  componentId: "pb7lhx-2"
})(["width:auto;margin:auto;z-index:100;will-change:transform,opacity;transition-property:transform,opacity;transition-timing-function:cubic-bezier(0.645,0.045,0.355,1);transition-duration:200ms;&.entering{opacity:0.01;transform:scale(0.8);}&.entered{opacity:1;transform:scale(1);}&.exiting{opacity:0.01;transform:scale(0.8);}"]);
function Modal(_ref) {
  var show = _ref.show,
      children = _ref.children,
      _ref$timeout = _ref.timeout,
      timeout = _ref$timeout === void 0 ? 200 : _ref$timeout,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'white' : _ref$color,
      closeModal = _ref.closeModal,
      external = _ref.external,
      className = _ref.className,
      closeOnOverlay = _ref.closeOnOverlay,
      closeOnEsc = _ref.closeOnEsc,
      rest = _objectWithoutProperties(_ref, ["show", "children", "timeout", "color", "closeModal", "external", "className", "closeOnOverlay", "closeOnEsc"]);

  return React__default.createElement(reactTransitionGroup.Transition, {
    "in": show,
    timeout: timeout,
    unmountOnExit: true,
    mountOnEnter: true
  }, function (state) {
    return React__default.createElement(Wrapper$9, {
      role: "dialog",
      "aria-modal": "true",
      className: className
    }, React__default.createElement(AnimatedBox, Object.assign({
      className: state,
      color: color,
      borderless: true
    }, rest, {
      role: "document"
    }), children), external, React__default.createElement(Shadow$1, {
      onClick: closeOnOverlay ? closeModal : undefined,
      style: {
        zIndex: -1
      }
    }));
  });
}

/* tslint:disable max-line-length */
function Close(props) {
  return React__default.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    width: "30",
    height: "30",
    viewBox: "0 0 30 30",
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

var Wrapper$a =
/*#__PURE__*/
styled__default(Box).withConfig({
  displayName: "Toast__Wrapper",
  componentId: "sc-8192b2-0"
})(["position:relative;padding:0.375em 0.75em;max-width:100%;margin-bottom:1rem;z-index:9999;width:fit-content;transition-property:transform,opacity;transition-timing-function:cubic-bezier(0.645,0.045,0.355,1);transition-duration:250ms;&.entering{opacity:0.01;transform:scale(0.8);}&.entered{opacity:1;transform:scale(1);}&.exiting{opacity:0.01;transform:scale(0.8);}", ""], function (_ref3) {
  var clear = _ref3.clear;
  return clear ? {
    paddingRight: '2.25rem'
  } : undefined;
});
var ClearButton =
/*#__PURE__*/
styled__default.button.withConfig({
  displayName: "Toast__ClearButton",
  componentId: "sc-8192b2-1"
})(["position:absolute;top:0;right:0;bottom:0;margin:0;padding:0;border:none;background:transparent;color:inherit;cursor:pointer;width:2rem;svg{width:1rem;height:1rem;}&:hover{background:rgba(0,0,0,0.15);}"]);

function ToastItem(_ref) {
  var color = _ref.color,
      message = _ref.message,
      _ref$duration = _ref.duration,
      duration = _ref$duration === void 0 ? 5000 : _ref$duration,
      clear = _ref.clear,
      clearOnClick = _ref.clearOnClick,
      id = _ref.id,
      rest = _objectWithoutProperties(_ref, ["color", "message", "duration", "clear", "clearOnClick", "id"]);

  var onClear = React.useCallback(function () {
    return clear(id);
  }, [clear, id]);
  React.useEffect(function () {
    var timeout = null;
    if (duration) timeout = setTimeout(onClear, duration);
    return function () {
      if (timeout) clearTimeout(timeout);
    }; // eslint-disable-next-line
  }, []);
  return React__default.createElement(reactTransitionGroup.Transition, {
    timeout: 250,
    "in": true,
    unmountOnExit: true
  }, function (state) {
    return React__default.createElement(Wrapper$a, Object.assign({
      className: state,
      borderless: true,
      color: color,
      clear: clearOnClick
    }, rest), message, clearOnClick && React__default.createElement(ClearButton, {
      onClick: onClear
    }, React__default.createElement(Close, null)));
  });
}

function Toast(_ref2) {
  var toasts = _ref2.toasts,
      clear = _ref2.clear,
      fixed = _ref2.fixed,
      style = _ref2.style,
      _ref2$margin = _ref2.margin,
      margin = _ref2$margin === void 0 ? '1rem' : _ref2$margin,
      rest = _objectWithoutProperties(_ref2, ["toasts", "clear", "fixed", "style", "margin"]);

  // const element = useRef<HTMLDivElement | null>(null);
  // useLayoutEffect(() => {
  //   if (!element.current) element.current = document.createElement('div');
  //   document.body.appendChild(element.current);
  //   return () => {
  //     if (element.current) document.body.removeChild(element.current);
  //   };
  return React__default.createElement(Container$1, Object.assign({}, rest, {
    margin: margin,
    style: _objectSpread({
      position: fixed ? 'fixed' : 'absolute'
    }, style)
  }), toasts.map(function (props) {
    return React__default.createElement(ToastItem, Object.assign({}, props, {
      key: props.id,
      clear: clear
    }));
  }));
}
var Container$1 =
/*#__PURE__*/
styled__default.div.withConfig({
  displayName: "Toast__Container",
  componentId: "sc-8192b2-2"
})(["display:flex;flex-direction:column;z-index:9999;", ""], function (_ref4) {
  var position = _ref4.position,
      margin = _ref4.margin;

  switch (position) {
    case 'bottom':
      {
        return {
          bottom: margin,
          left: '50%',
          alignItems: 'center',
          transform: 'translateX(-50%)'
        };
      }

    case 'bottom-left':
      {
        return {
          bottom: margin,
          left: margin,
          alignItems: 'flex-start'
        };
      }

    case 'bottom-right':
      {
        return {
          bottom: margin,
          right: margin,
          alignItems: 'flex-end'
        };
      }

    case 'top':
      {
        return {
          top: margin,
          left: '50%',
          alignItems: 'center',
          transform: 'translateX(-50%)'
        };
      }

    case 'top-right':
    default:
      {
        return {
          top: margin,
          right: margin,
          alignItems: 'flex-end'
        };
      }
  }
});

function setColor$2(_ref) {
  var theme = _ref.theme,
      color = _ref.color,
      outline = _ref.outline,
      disabled = _ref.disabled;

  if (disabled) {
    return disabledColor(theme);
  }

  if (!color) {
    return styled.css(["border-color:", ";color:", ";&:hover{border-color:", ";}&:active{border-color:", ";}"], theme.border, theme.text, theme.borderHover, theme.borderActive);
  }

  var target = theme[color] || color;
  var invertColor = findColorInvert(theme, target);

  if (outline) {
    return styled.css(["background-color:transparent;border-color:", ";color:", ";&:hover{background-color:", ";color:", ";}&:focus:not(:active){", "}"], target, target, target, invertColor, boxShadow('0.2rem', target, 0.2));
  }

  return styled.css(["background-color:", ";border-color:transparent;color:", ";box-shadow:none;&:hover{color:", ";background-color:", ";}&:active{background-color:", ";}&:focus:not(:active){", "}"], target, invertColor, invertColor, polished.darken(0.05, target), polished.darken(0.085, target), boxShadow('0.2rem', target, 0.2));
}

var Button = /*#__PURE__*/
styled__default.button.withConfig({
  displayName: "Button",
  componentId: "f6cc58-0"
})(["position:relative;outline:none;appearance:none;box-sizing:border-box;display:inline-block;text-align:center;white-space:nowrap;cursor:pointer;justify-content:center;vertical-align:middle;user-select:none;background:transparent;border:1px solid transparent;border-radius:", ";padding:0.375em 0.75em;line-height:1.5;transition-property:background-color,color,box-shadow;transition-duration:150ms;transition-timing-function:ease-in-out;", " ", ""], function (_ref2) {
  var theme = _ref2.theme;
  return theme.radius;
}, setColor$2, function (_ref3) {
  var size = _ref3.size;
  return setSize('font-size', size);
});

var Wrapper$b =
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

function setColor$3(_ref3) {
  var theme = _ref3.theme,
      color = _ref3.color;
  return !color ? theme.background : theme[color];
}

var Indicator =
/*#__PURE__*/
styled__default.div.withConfig({
  displayName: "Tabs__Indicator",
  componentId: "sc-1qmwdm1-2"
})(["position:absolute;bottom:0;left:0;background-color:", ";height:2px;visibility:hidden;transform-origin:left;will-change:transform;transition-property:transform;transition-duration:200ms;transition-timing-function:cubic-bezier(0.645,0.045,0.355,1);"], setColor$3);

var Tabs =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(Tabs, _Component);

  function Tabs() {
    var _this;

    _this = _Component.apply(this, arguments) || this;
    _this.state = {
      start: 0,
      current: null
    };

    _this.onNext = function () {
      var threshold = _this.props.maxItems;
      var value = _this.state.start + threshold;
      var count = React.Children.count(_this.props.children);

      if (value < count) {
        _this.setState({
          start: value
        });
      }
    };

    _this.onPrev = function () {
      if (_this.state.start === 0) return;
      var threshold = _this.props.maxItems;
      var value = _this.state.start - threshold;

      _this.setState({
        start: value < 0 ? 0 : value
      });
    };

    _this.getIndicatorPosition = function () {
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
        width: Math.round(100 / total) + "%",
        transform: "translateX(" + value + ")"
      };
    }; // TODO: make tab scrollable via arrow icons


    _this.renderChildren = function (child, index) {
      if (_this.state.start > index) return null;
      if (_this.state.start + index >= _this.props.maxItems) return null;
      if (typeof child === 'string' || typeof child === 'number') return null;
      return React__default.createElement(TabItem, Object.assign({}, child.props, {
        align: _this.props.align
      }));
    };

    return _this;
  }

  Tabs.getDerivedStateFromProps = function getDerivedStateFromProps(props, state) {
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
  };

  var _proto = Tabs.prototype;

  _proto.shouldComponentUpdate = function shouldComponentUpdate(_, state) {
    return this.state.start !== state.start || this.state.current !== state.current;
  };

  _proto.render = function render() {
    var _this$props2 = this.props,
        children = _this$props2.children,
        align = _this$props2.align,
        color = _this$props2.color,
        maxItems = _this$props2.maxItems;
    var start = this.state.start;
    var total = children ? children.length : 0;
    var style = this.getIndicatorPosition();
    return React__default.createElement(Wrapper$b, {
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
  };

  return Tabs;
}(React.Component);
Tabs.defaultProps = {
  maxItems: 5
};
Tabs.Item = TabItem;

function getColor(_ref) {
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
  componentId: "sc-34g0il-0"
})(["display:inline-block;width:", ";height:", ";margin:0;padding:0;position:relative;&:after{display:block;top:0;left:0;animation:", " 750ms infinite linear;border:", " solid;border-radius:100%;", " content:\"\";height:100%;width:100%;position:absolute;}"], function (_ref2) {
  var size = _ref2.size;
  return size || '100%';
}, function (_ref3) {
  var size = _ref3.size;
  return size || '100%';
}, spin, function (_ref4) {
  var borderSize = _ref4.borderSize;
  return borderSize;
}, getColor);
Spinner.defaultProps = {
  borderSize: '2px'
};

// form

var Row = /*#__PURE__*/
styled__default.div.withConfig({
  displayName: "Row",
  componentId: "sc-1qqbtdw-0"
})(["display:flex;flex:0 1 auto;flex-direction:row;flex-wrap:wrap;margin:-", "px;padding:", "px;", "{margin:-", "px;padding:", "px;}"], function (_ref) {
  var theme = _ref.theme;
  return theme.gutter / 2;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.gutter / 2;
}, mediaTablet, function (_ref3) {
  var theme = _ref3.theme;
  return theme.smallGutter / 2;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.smallGutter / 2;
});

var sizes = ['auto', '8.3333333%', '16.666667%', '25%', '33.333333%', '41.666667%', '50%', '58.333333%', '66.666667%', '75%', '83.333333%', '91.666667%', '100%'];

function setAutoSize(_ref) {
  var size = _ref.size,
      auto = _ref.auto;
  if (!auto || !size) return undefined;
  var mobileSize = size >= 4 ? sizes[12] : sizes[Math.round(size * 3)];
  var desktopSize = size >= 8 ? sizes[12] : sizes[Math.round(size * 1.5)];
  return styled.css(["", "{flex-basis:", ";max-width:", ";}", "{flex-basis:", ";max-width:", ";}"], mediaDesktop, desktopSize, desktopSize, mediaMobile, mobileSize, mobileSize);
}

var Col =
/*#__PURE__*/
styled__default.div.withConfig({
  displayName: "Col",
  componentId: "sc-16i9d04-0"
})(["display:flex;flex:0 0 auto;flex-direction:row;flex-wrap:wrap;padding:", "px;", " ", " ", "{padding:", "px;}", ""], function (_ref2) {
  var theme = _ref2.theme;
  return theme.gutter / 2;
}, function (_ref3) {
  var size = _ref3.size;
  return size ? {
    flexBasis: sizes[size],
    maxWidth: sizes[size]
  } : {
    flexGrow: 1,
    flexBasis: 0,
    maxWidth: '100%'
  };
}, function (_ref4) {
  var offset = _ref4.offset;
  return offset ? {
    marginLeft: sizes[offset]
  } : undefined;
}, mediaTablet, function (_ref5) {
  var theme = _ref5.theme;
  return theme.smallGutter / 2;
}, setAutoSize);
Col.defaultProps = {
  size: 0,
  offset: 0
};

var index = /*#__PURE__*/
styled__default.div.withConfig({
  displayName: "Content",
  componentId: "sc-180oh4h-0"
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

var setAnimation = function setAnimation(_ref) {
  var theme = _ref.theme;
  return styled.keyframes(["0%{background-color:", ";}50%{background-color:", ";}100%{background-color:", ";}"], theme.greyLighter, theme.grey, theme.greyLighter);
};

var index$1 = /*#__PURE__*/
styled__default.span.withConfig({
  displayName: "Placeholder",
  componentId: "sc-1091c0n-0"
})(["display:inline-block;height:1rem;width:100%;animation:", " 3.5s ease infinite;border-radius:", ";opacity:0.125;"], setAnimation, function (_ref2) {
  var theme = _ref2.theme;
  return theme.radius;
});

var TextButton = /*#__PURE__*/
styled__default.button.withConfig({
  displayName: "TextButton",
  componentId: "sc-14wzat7-0"
})(["background-color:transparent;border:none;cursor:pointer;display:inline;margin:0;border-radius:", ";padding:", ";line-height:1.5;color:", ";", " &:hover,&:focus{", " ", "}&:focus,&:active{outline:none;}&:active{", "}", ""], function (_ref) {
  var theme = _ref.theme;
  return theme.radius;
}, function (_ref2) {
  var pure = _ref2.pure;
  return pure ? '0' : '0.375em 0.75em';
}, function (_ref3) {
  var color = _ref3.color,
      theme = _ref3.theme;
  return color ? theme[color] : theme.text;
}, function (_ref4) {
  var size = _ref4.size;
  return setSize('font-size', size);
}, function (_ref5) {
  var underline = _ref5.underline;
  return underline ? {
    textDecoration: 'underline'
  } : undefined;
}, function (_ref6) {
  var pure = _ref6.pure,
      theme = _ref6.theme,
      color = _ref6.color;
  return pure ? undefined : {
    background: polished.transparentize(0.9, theme[color] || theme.text)
  };
}, function (_ref7) {
  var pure = _ref7.pure,
      theme = _ref7.theme,
      color = _ref7.color;
  return pure ? undefined : {
    background: polished.transparentize(0.8, theme[color] || theme.text)
  };
}, function (_ref8) {
  var disabled = _ref8.disabled,
      theme = _ref8.theme;
  return disabled ? styled.css(["color:", ";cursor:default;&:hover{background:transparent;text-decoration:none;}"], polished.transparentize(0.75, theme.textDark)) : undefined;
});

var ButtonGroup = /*#__PURE__*/
styled__default.div.withConfig({
  displayName: "ButtonGroup",
  componentId: "b4d11t-0"
})(["display:inline-block;&:not(:last-child){margin-right:0.5rem;}", "{margin:0;border-radius:0;&:first-child{border-top-left-radius:4px;border-bottom-left-radius:4px;}&:not(:first-child){margin-left:-1px;}&:last-child{border-top-right-radius:4px;border-bottom-right-radius:4px;}}"], Button);

var stripedStyle =
/*#__PURE__*/
styled.css(["tbody > tr:nth-child(odd){background-color:rgba(0,0,0,0.02);}"]);
var hoverStyle =
/*#__PURE__*/
styled.css(["tbody > tr:hover{background-color:rgba(0,0,0,0.04);}"]);
var index$2 = /*#__PURE__*/
styled__default.table.withConfig({
  displayName: "Table",
  componentId: "sc-1x2nuaf-0"
})(["", " max-width:100%;margin-bottom:1rem;background-color:transparent;-webkit-overflow-scrolling:touch;-ms-overflow-style:-ms-autohiding-scrollbar;td,th{vertical-align:top;padding:0.75rem;", " border-width:0 0 1px;}th{white-space:nowrap;}", " ", " ", ""], function (_ref) {
  var full = _ref.full;
  return full ? styled.css(["width:100%;"]) : undefined;
}, function (_ref2) {
  var theme = _ref2.theme,
      bordered = _ref2.bordered;
  return bordered ? styled.css(["border:1px solid ", ";"], theme.border) : undefined;
}, function (_ref3) {
  var striped = _ref3.striped;
  return striped ? stripedStyle : undefined;
}, function (_ref4) {
  var hover = _ref4.hover;
  return hover ? hoverStyle : undefined;
}, function (_ref5) {
  var headerStyle = _ref5.headerStyle;
  return headerStyle ? styled.css(["th{", "}"], headerStyle) : undefined;
});

function Progress(_ref) {
  var value = _ref.value,
      max = _ref.max,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'primary' : _ref$color,
      rest = _objectWithoutProperties(_ref, ["value", "max", "color"]);

  var percent = React.useMemo(function () {
    return Math.round(value / max * 100);
  }, [value, max]);
  return React__default.createElement(Wrapper$c, Object.assign({
    color: color
  }, rest), React__default.createElement("div", {
    role: "progressbar",
    className: value !== max ? 'in-progress' : undefined,
    style: {
      width: (percent > 100 ? 100 : percent) + "%"
    }
  }));
}
var Wrapper$c =
/*#__PURE__*/
styled__default.div.withConfig({
  displayName: "Progress__Wrapper",
  componentId: "sc-807hhi-0"
})(["position:relative;display:block;width:100%;border-radius:", ";background-color:", ";", " & > div[role=\"progressbar\"]{position:relative;height:100%;border-radius:", ";background-color:", ";&.in-progress{border-bottom-right-radius:0;border-top-right-radius:0;}will-change:width;transition-property:width;transition-duration:350ms;transition-timing-function:cubic-bezier(0.645,0.045,0.355,1);z-index:1;}"], function (_ref2) {
  var theme = _ref2.theme;
  return theme.radius;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.background;
}, function (_ref4) {
  var size = _ref4.size,
      height = _ref4.height;
  return height || setSize('height', size);
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.radius;
}, function (_ref6) {
  var color = _ref6.color,
      theme = _ref6.theme;
  return theme[color] || color;
});

function getColor$1(theme, color) {
  return !color || color === 'light' ? theme.background : theme[color];
}

var closeCss =
/*#__PURE__*/
styled.css(["padding-right:0;", "{color:inherit;height:100%;margin-left:0.25rem;svg{width:50%;height:50%;}&:hover{background-color:rgba(0,0,0,0.15);}}"], TextButton);
var Wrapper$d =
/*#__PURE__*/
styled__default.div.withConfig({
  displayName: "Tag__Wrapper",
  componentId: "sc-10pvl04-0"
})(["display:inline-flex;font-size:0.75rem;cursor:default;padding:0 0.5rem;height:1.5rem;user-select:none;border-radius:", ";justify-content:center;align-items:center;white-space:nowrap;line-height:1.5;", " &:not(:last-child){margin-right:0.5rem;}", "{border-radius:0;border-top-right-radius:", ";border-bottom-right-radius:", ";}", ""], function (_ref2) {
  var theme = _ref2.theme,
      round = _ref2.round;
  return round ? '50rem' : theme.radius;
}, function (_ref3) {
  var color = _ref3.color,
      theme = _ref3.theme,
      addonColor = _ref3.addonColor;
  var target = getColor$1(theme, color);
  var invertColor = findColorInvert(theme, target);
  var subColor = addonColor ? getColor$1(theme, addonColor) : polished.darken(0.05, target);
  return styled.css(["color:", ";background-color:", ";a,span{color:", ";background-color:", ";}a:hover{background-color:", ";}"], invertColor, target, invertColor, subColor, polished.darken(0.05, subColor));
}, TextButton, function (_ref4) {
  var theme = _ref4.theme,
      round = _ref4.round;
  return round ? '50rem' : theme.radius;
}, function (_ref5) {
  var theme = _ref5.theme,
      round = _ref5.round;
  return round ? '50rem' : theme.radius;
}, function (_ref6) {
  var close = _ref6.close;
  return close ? closeCss : undefined;
});
function Tag(_ref) {
  var children = _ref.children,
      onClose = _ref.onClose,
      rest = _objectWithoutProperties(_ref, ["children", "onClose"]);

  return React__default.createElement(Wrapper$d, Object.assign({
    close: !!onClose
  }, rest), children, onClose && React__default.createElement(TextButton, {
    onClick: onClose,
    pure: true
  }, React__default.createElement(Close, null)));
}

/* tslint:disable max-line-length */
function Approved$1(props) {
  return React__default.createElement("svg", Object.assign({
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

/* tslint:disable max-line-length */
function ChevronLeftRound(props) {
  return React__default.createElement("svg", Object.assign({
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

/* tslint:disable max-line-length */
function ChevronRightRound(props) {
  return React__default.createElement("svg", Object.assign({
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

/* tslint:disable max-line-length */
function FileRound(props) {
  return React__default.createElement("svg", Object.assign({
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
  return React__default.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    width: "17.796",
    height: "17.908",
    viewBox: "0 0 17.796 17.908"
  }, props), React__default.createElement("g", null, React__default.createElement("g", null, React__default.createElement("path", {
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

function PencilSimple(props) {
  return React__default.createElement("svg", Object.assign({
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), React__default.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M9.96967 0.21967C10.2626 -0.0732233 10.7374 -0.0732233 11.0303 0.21967L14.7803 3.96967C15.0732 4.26256 15.0732 4.73744 14.7803 5.03033L5.03033 14.7803C4.88968 14.921 4.69891 15 4.5 15H0.75C0.335786 15 0 14.6642 0 14.25V10.5C0 10.3011 0.0790176 10.1103 0.21967 9.96967L9.96967 0.21967ZM1.5 10.8107V13.5H4.18934L13.1893 4.5L10.5 1.81066L1.5 10.8107Z",
    fill: "currentColor"
  }));
}

/* tslint:disable max-line-length */
function User(props) {
  return React__default.createElement("svg", Object.assign({
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
    transform: "translate(480 716)",
    fill: "currentColor"
  })));
}

/* tslint:disable max-line-length */
function Refresh(props) {
  return React__default.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    width: "30",
    height: "30",
    viewBox: "0 0 30 30"
  }, props), React__default.createElement("path", {
    d: "M24.065,9A15.069,15.069,0,0,0,9.142,22.105a1.256,1.256,0,1,0,2.478.406c0-.027.008-.055.01-.082a12.52,12.52,0,0,1,21.3-7.226l-2.584,2.584,7.532,1.255-1.255-7.532-1.92,1.92A15,15,0,0,0,24.065,9Zm13.7,15.589A1.255,1.255,0,0,0,36.5,25.7a12.512,12.512,0,0,1-21.893,6.569l1.927-1.927L9,29.086l1.255,7.532,2.572-2.572a15.02,15.02,0,0,0,26.16-8.023A1.256,1.256,0,0,0,37.923,24.6,1.273,1.273,0,0,0,37.763,24.589Z",
    transform: "translate(-9 -9)",
    fill: "currentColor"
  }));
}

function Plus(props) {
  return React__default.createElement("svg", Object.assign({
    width: "21",
    height: "21",
    viewBox: "0 0 21 21",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), React__default.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M9 0V9H0V12H9V21H12V12H21V9H12V0H9Z",
    fill: "currentColor"
  }));
}

function Camera(props) {
  return React__default.createElement("svg", Object.assign({
    width: "24",
    height: "20",
    viewBox: "0 0 24 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), React__default.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M8.16795 0.4453C8.35342 0.167101 8.66565 0 9 0H15C15.3344 0 15.6466 0.167101 15.8321 0.4453L17.5352 3H21C21.7957 3 22.5587 3.31607 23.1213 3.87868C23.6839 4.44129 24 5.20435 24 6V17C24 17.7957 23.6839 18.5587 23.1213 19.1213C22.5587 19.6839 21.7957 20 21 20H3C2.20435 20 1.44129 19.6839 0.87868 19.1213C0.316071 18.5587 0 17.7957 0 17V6C0 5.20435 0.316071 4.44129 0.87868 3.87868C1.44129 3.31607 2.20435 3 3 3H6.46482L8.16795 0.4453ZM9.53518 2L7.83205 4.5547C7.64658 4.8329 7.33435 5 7 5H3C2.73478 5 2.48043 5.10536 2.29289 5.29289C2.10536 5.48043 2 5.73478 2 6V17C2 17.2652 2.10536 17.5196 2.29289 17.7071C2.48043 17.8946 2.73478 18 3 18H21C21.2652 18 21.5196 17.8946 21.7071 17.7071C21.8946 17.5196 22 17.2652 22 17V6C22 5.73478 21.8946 5.48043 21.7071 5.29289C21.5196 5.10536 21.2652 5 21 5H17C16.6656 5 16.3534 4.8329 16.1679 4.5547L14.4648 2H9.53518Z",
    fill: "currentColor"
  }), React__default.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 8C10.3431 8 9 9.34315 9 11C9 12.6569 10.3431 14 12 14C13.6569 14 15 12.6569 15 11C15 9.34315 13.6569 8 12 8ZM7 11C7 8.23858 9.23858 6 12 6C14.7614 6 17 8.23858 17 11C17 13.7614 14.7614 16 12 16C9.23858 16 7 13.7614 7 11Z",
    fill: "currentColor"
  }));
}

function Share(props) {
  return React__default.createElement("svg", Object.assign({
    width: "15",
    height: "16",
    viewBox: "0 0 15 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), React__default.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M2.25 3.83627C2.05109 3.83627 1.86032 3.91711 1.71967 4.061C1.57902 4.20489 1.5 4.40004 1.5 4.60353V13.0433C1.5 13.2468 1.57902 13.442 1.71967 13.5859C1.86032 13.7297 2.05109 13.8106 2.25 13.8106H10.5C10.6989 13.8106 10.8897 13.7297 11.0303 13.5859C11.171 13.442 11.25 13.2468 11.25 13.0433V8.4398C11.25 8.01606 11.5858 7.67255 12 7.67255C12.4142 7.67255 12.75 8.01606 12.75 8.4398V13.0433C12.75 13.6538 12.5129 14.2393 12.091 14.6709C11.669 15.1026 11.0967 15.3451 10.5 15.3451H2.25C1.65326 15.3451 1.08097 15.1026 0.65901 14.6709C0.237053 14.2393 0 13.6538 0 13.0433V4.60353C0 3.99306 0.237053 3.4076 0.65901 2.97593C1.08097 2.54427 1.65326 2.30176 2.25 2.30176H6.75C7.16421 2.30176 7.5 2.64528 7.5 3.06902C7.5 3.49276 7.16421 3.83627 6.75 3.83627H2.25Z",
    fill: "currentColor"
  }), React__default.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M9 0.767255C9 0.343512 9.33579 1.1433e-08 9.75 1.1433e-08H14.25C14.6642 1.1433e-08 15 0.343512 15 0.767255V5.37078C15 5.79453 14.6642 6.13804 14.25 6.13804C13.8358 6.13804 13.5 5.79453 13.5 5.37078V1.53451H9.75C9.33579 1.53451 9 1.191 9 0.767255Z",
    fill: "currentColor"
  }), React__default.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M14.7803 0.224724C15.0732 0.524355 15.0732 1.01015 14.7803 1.30979L6.53033 9.74959C6.23744 10.0492 5.76256 10.0492 5.46967 9.74959C5.17678 9.44995 5.17678 8.96416 5.46967 8.66453L13.7197 0.224724C14.0126 -0.0749079 14.4874 -0.0749079 14.7803 0.224724Z",
    fill: "currentColor"
  }));
}

// grid & layout

var theme = {
  fontFamily: 'ヒラギノ角ゴシック,"ヒラギノ角ゴ ProN W3",メイリオ,Meiryo,"ＭＳ Ｐゴシック","MS PGothic",sans-serif',
  fontSize: '16px',
  gutter: 24,
  smallGutter: 16,
  media: {
    mobile: '576px',
    tablet: '769px',
    desktop: '960px',
    fullhd: '1344px'
  },
  radius: '4px',
  formPadding: '0.75rem 0.625rem',
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
  placeholder: '#7a7a7a',
  backdrop: 'rgba(10,10,10,0.25)',
  responsive: true
};

/*! based on normalize.css v8.0.0 | MIT License | github.com/necolas/normalize.css */

var normalized =
/*#__PURE__*/
styled.css(["*,::after,::before{box-sizing:border-box;}html{line-height:1.15;-webkit-text-size-adjust:100%;-ms-overflow-style:scrollbar;}body{margin:0;font-family:", ";font-size:", ";text-align:left;}h1{font-size:2em;margin:.67em 0;}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace,monospace;font-size:1em;}a{background-color:transparent;color:", ";}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted;}b,strong{font-weight:bolder;}code,kbd,samp{font-family:monospace,monospace;font-size:1em;}small{font-size:80%;}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline;}sub{bottom:-.25em;}sup{top:-.5em;}img{border-style:none;}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible;}button,select{text-transform:none;}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button;}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0;}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText;}input[type=date],input[type=time],input[type=datetime-local],input[type=month]{-webkit-appearance:listbox;}fieldset{padding:.35em .75em .625em;}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline;resize:vertical;}textarea{overflow:auto;}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0;}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto;}[type=search]{-webkit-appearance:textfield;outline-offset:-2px;}[type=search]::-webkit-search-decoration{-webkit-appearance:none;}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block;}summary{display:list-item;}template{display:none;}[hidden]{display:none;}blockquote,body,dd,dl,dt,fieldset,figure,h1,h2,h3,h4,h5,h6,hr,html,iframe,legend,li,ol,p,pre,textarea,ul{margin:0;padding:0;}button{font-size:inherit;}article,aside,figure,footer,header,hgroup,section{display:block;}input[type=\"checkbox\"],input[type=\"radio\"]{box-sizing:border-box;padding:0;}a{cursor:pointer;text-decoration:none;color:#3273dc;&:hover{color:currentColor;}}img{vertical-align:middle;border-style:none;}svg{overflow:hidden;vertical-align:middle;}small{font-size:.875em;}span{font-style:inherit;font-weight:inherit;}strong{color:#363636;font-weight:700;}table{border-collapse:collapse;border-spacing:0;}th{text-align:inherit;}ul{list-style-type:none;}"], function (_ref) {
  var theme = _ref.theme;
  return theme ? theme.fontFamily : '"Hiragino Sans", ヒラギノ角ゴシック, "Hiragino Kaku Gothic ProN", "ヒラギノ角ゴ ProN W3", 游ゴシック体, "Yu Gothic", YuGothic, "ヒラギノ角ゴシック Pro", HiraKakuPro-W3, "Hiragino Kaku Gothic Pro", Quicksand, メイリオ, Meiryo, Osaka, "ＭＳ Ｐゴシック", "MS PGothic", sans-serif';
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme ? theme.fontSize : '16px';
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.link;
});

exports.Accordion = Accordion;
exports.AppBar = AppBar;
exports.Box = Box;
exports.Button = Button;
exports.ButtonGroup = ButtonGroup;
exports.Card = Card;
exports.Checkbox = Checkbox;
exports.Col = Col;
exports.Container = Container;
exports.Content = index;
exports.Field = Field;
exports.Hero = Hero;
exports.IconApproved = Approved$1;
exports.IconArrowDown = ChevronDown;
exports.IconCamera = Camera;
exports.IconChevronLeftRound = ChevronLeftRound;
exports.IconChevronRightRound = ChevronRightRound;
exports.IconClose = Close;
exports.IconFileRound = FileRound;
exports.IconPencil = Pencil;
exports.IconPencilSimple = PencilSimple;
exports.IconPlus = Plus;
exports.IconRefresh = Refresh;
exports.IconShare = Share;
exports.IconUser = User;
exports.Modal = Modal;
exports.Placeholder = index$1;
exports.Popover = Popover;
exports.Progress = Progress;
exports.Radio = Radio;
exports.Row = Row;
exports.Select = Select;
exports.Spinner = Spinner;
exports.Switch = Switch;
exports.Table = index$2;
exports.Tabs = Tabs;
exports.Tag = Tag;
exports.TextButton = TextButton;
exports.TextInput = TextInput;
exports.Textarea = Textarea;
exports.Toast = Toast;
exports.Tooltip = Tooltip;
exports.arrow = Arrow;
exports.boxShadow = boxShadow;
exports.defaultTheme = theme;
exports.findColorInvert = findColorInvert;
exports.hambuger = hamburger;
exports.mediaDesktop = mediaDesktop;
exports.mediaFullHD = mediaFullHD;
exports.mediaMobile = mediaMobile;
exports.mediaTablet = mediaTablet;
exports.mediaUntilFullHD = mediaUntilFullHD;
exports.normalizeStyle = normalized;
exports.setSize = setSize;
//# sourceMappingURL=visits-style.cjs.development.js.map
