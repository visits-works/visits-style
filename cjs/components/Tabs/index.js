"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var setAlign_1 = __importDefault(require("../../utils/setAlign"));
var Button_1 = __importDefault(require("../Button"));
var Wrapper = styled_components_1.default.nav(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  justify-content: ", ";\n\n  .tab-content {\n    position: relative;\n    display: flex;\n    ", "\n    align-items: center;\n    justify-content: center;\n    overflow: hidden;\n  }\n"], ["\n  display: flex;\n  justify-content: ", ";\n\n  .tab-content {\n    position: relative;\n    display: flex;\n    ", "\n    align-items: center;\n    justify-content: center;\n    overflow: hidden;\n  }\n"])), setAlign_1.default, function (_a) {
    var align = _a.align;
    return align ? '' : 'flex-grow: 1;';
});
var TabItem = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: block;\n  flex-grow: 1;\n  cursor: pointer;\n\n  a {\n    display: flex;\n    color: ", ";\n    justify-content: center;\n    align-items: center;\n    vertical-align: top;\n    padding: 0.375em 0.75em;\n    border-bottom: 2px solid transparent;\n\n    transition-property: background-color;\n    transition-duration: 150ms;\n    transition-timing-function: ease-in-out;\n\n    &:hover {\n      background-color: rgba(0, 0, 0, 0.03);\n    }\n  }\n"], ["\n  display: block;\n  flex-grow: 1;\n  cursor: pointer;\n\n  a {\n    display: flex;\n    color: ", ";\n    justify-content: center;\n    align-items: center;\n    vertical-align: top;\n    padding: 0.375em 0.75em;\n    border-bottom: 2px solid transparent;\n\n    transition-property: background-color;\n    transition-duration: 150ms;\n    transition-timing-function: ease-in-out;\n\n    &:hover {\n      background-color: rgba(0, 0, 0, 0.03);\n    }\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.text;
});
function setColor(_a) {
    var theme = _a.theme, color = _a.color;
    return !color ? theme.background : theme[color];
}
var Indicator = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  background-color: ", ";\n  height: 2px;\n\n  visibility: hidden;\n  transform-origin: left;\n\n  will-change: transform;\n  transition-property: transform;\n  transition-duration: 200ms;\n  transition-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);\n"], ["\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  background-color: ", ";\n  height: 2px;\n\n  visibility: hidden;\n  transform-origin: left;\n\n  will-change: transform;\n  transition-property: transform;\n  transition-duration: 200ms;\n  transition-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);\n"])), setColor);
var Tabs = /** @class */ (function (_super) {
    __extends(Tabs, _super);
    function Tabs() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { start: 0, current: null };
        _this.onNext = function () {
            var threshold = _this.props.maxItems;
            var value = _this.state.start + threshold;
            var count = react_1.Children.count(_this.props.children);
            if (value < count) {
                _this.setState({ start: value });
            }
        };
        _this.onPrev = function () {
            if (_this.state.start === 0)
                return;
            var threshold = _this.props.maxItems;
            var value = _this.state.start - threshold;
            _this.setState({ start: value < 0 ? 0 : value });
        };
        _this.getIndicatorPosition = function () {
            var current = _this.state.current;
            var _a = _this.props, children = _a.children, maxItems = _a.maxItems;
            if (current === null || current === undefined)
                return undefined;
            if (!children || !children.length)
                return undefined;
            var total = children.length > maxItems ? maxItems : children.length;
            var value = (current * 100) + '%';
            return {
                visibility: 'visible',
                width: Math.round((100 / total)) + "%",
                transform: "translateX(" + value + ")"
            };
        };
        // TODO: make tab scrollable via arrow icons
        _this.renderChildren = function (child, index) {
            if (_this.state.start > index)
                return null;
            if (_this.state.start + index >= _this.props.maxItems)
                return null;
            if (typeof child === 'string' || typeof child === 'number')
                return null;
            return react_1.default.createElement(TabItem, __assign({}, child.props, { align: _this.props.align }));
        };
        return _this;
    }
    Tabs.getDerivedStateFromProps = function (props, state) {
        var activeIndex;
        for (var i = 0, len = props.children.length; i < len; i += 1) {
            var child = props.children[i];
            if (child.props.active) {
                activeIndex = i;
                break;
            }
        }
        return __assign({}, state, { current: activeIndex });
    };
    Tabs.prototype.shouldComponentUpdate = function (props, state) {
        return this.state.start !== state.start ||
            this.state.current !== state.current;
    };
    Tabs.prototype.render = function () {
        var _a = this.props, children = _a.children, align = _a.align, color = _a.color, maxItems = _a.maxItems;
        var start = this.state.start;
        var total = children ? children.length : 0;
        var style = this.getIndicatorPosition();
        return (react_1.default.createElement(Wrapper, { align: align },
            start > maxItems && (react_1.default.createElement(Button_1.default, { color: "text" }, '<')),
            react_1.default.createElement("div", { className: "tab-content" },
                react_1.Children.map(children, this.renderChildren),
                react_1.default.createElement(Indicator, { color: color, style: style })),
            total > maxItems && start > maxItems && (react_1.default.createElement(Button_1.default, { color: "text" }, '>'))));
    };
    Tabs.defaultProps = {
        maxItems: 5,
    };
    Tabs.Item = TabItem;
    return Tabs;
}(react_1.Component));
exports.default = Tabs;
;
var templateObject_1, templateObject_2, templateObject_3;
