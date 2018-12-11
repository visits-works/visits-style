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
    };
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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
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
var transparentize_1 = __importDefault(require("polished/lib/color/transparentize"));
var styled_components_1 = __importStar(require("styled-components"));
var findColorInvert_1 = __importDefault(require("../../utils/findColorInvert"));
var hambuger_1 = __importDefault(require("../../utils/hambuger"));
var setAlign_1 = __importDefault(require("../../utils/setAlign"));
var media_1 = require("../../utils/media");
function setColor(_a) {
    var color = _a.color, theme = _a.theme, backdrop = _a.backdrop;
    var backgroundColor = color ? theme[color] : 'transparent';
    var textColor = findColorInvert_1.default(theme, backgroundColor === 'transparent' ? theme.background : backgroundColor);
    if (backdrop) {
        var backColor = transparentize_1.default(0.2, (backgroundColor === 'transparent' ? theme.white : backgroundColor));
        var ua = navigator.userAgent.toLowerCase();
        if (ua.indexOf('safari') > -1 && ua.indexOf('chrome') === -1) {
            return "background-color: " + backColor + "; color: " + textColor + "; backdrop-filter: blur(8px);";
        }
        return styled_components_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      background-color: ", ";\n      color: ", ";\n    "], ["\n      background-color: ", ";\n      color: ", ";\n    "])), backColor, textColor);
    }
    return "background-color: " + backgroundColor + "; color: " + textColor + ";";
}
var NavBar = styled_components_1.default.header(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  position: ", ";\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: stretch;\n  top: -1px;\n\n  min-height: 3.25rem;\n  width: 100%;\n  z-index: 30;\n\n  ", "\n\n  a { color: inherit; }\n\n  ", "\n  ", "\n  ", "\n"], ["\n  position: ",
    ";\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: stretch;\n  top: -1px;\n\n  min-height: 3.25rem;\n  width: 100%;\n  z-index: 30;\n\n  ", "\n\n  a { color: inherit; }\n\n  ", "\n  ", "\n  ", "\n"])), function (_a) {
    var fixed = _a.fixed, sticky = _a.sticky;
    return (!(sticky || fixed) ? 'relative' : (fixed ? 'fixed' : 'sticky'));
}, setColor, media_1.mediaTablet(templateObject_2 || (templateObject_2 = __makeTemplateObject(["padding: ", ";"], ["padding: ", ";"])), function (_a) {
    var fluid = _a.fluid;
    return fluid ? '0 0.5rem' : '0 3%';
}), media_1.mediaUntilFullHD(templateObject_3 || (templateObject_3 = __makeTemplateObject(["padding: ", ";"], ["padding: ", ";"])), function (_a) {
    var fluid = _a.fluid;
    return fluid ? '0 0.75rem' : '0 5%';
}), function (_a) {
    var css = _a.css;
    return css || '';
});
var Burger = styled_components_1.default.button(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  ", "\n  display: none;\n  margin-left: auto;\n  border: none;\n  background-color: transparent;\n  color: inherit;\n\n  outline: none;\n\n  &:hover{\n    background-color: rgba(0, 0, 0, .05);\n  }\n\n  ", "\n"], ["\n  ", "\n  display: none;\n  margin-left: auto;\n  border: none;\n  background-color: transparent;\n  color: inherit;\n\n  outline: none;\n\n  &:hover{\n    background-color: rgba(0, 0, 0, .05);\n  }\n\n  ", "\n"])), hambuger_1.default('3.25rem'), media_1.mediaMobile(templateObject_5 || (templateObject_5 = __makeTemplateObject(["display: block;"], ["display: block;"]))));
var NavContent = styled_components_1.default.div(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-basis: auto;\n  flex-grow: 1;\n\n  & > ul {\n    display: flex;\n    flex-direction: row;\n    list-style: none;\n    flex-grow: 1;\n    justify-content: ", ";\n\n    li {\n      padding: 0 0.75rem;\n    }\n  }\n\n  & > div, & > span, & > form {\n    display: flex;\n    ", "\n  }\n\n  ", "\n"], ["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-basis: auto;\n  flex-grow: 1;\n\n  & > ul {\n    display: flex;\n    flex-direction: row;\n    list-style: none;\n    flex-grow: 1;\n    justify-content: ", ";\n\n    li {\n      padding: 0 0.75rem;\n    }\n  }\n\n  & > div, & > span, & > form {\n    display: flex;\n    ", "\n  }\n\n  ",
    "\n"])), setAlign_1.default, function (_a) {
    var color = _a.color;
    return (color ? "color: " + color + ";" : '');
}, media_1.mediaMobile(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n    width: 100%;\n    flex-direction: column;\n    align-items: flex-start;\n\n    padding-bottom: 0.5rem;\n\n    button:not(.active)+& {\n      display:none;\n    }\n\n    & > ul {\n      flex-direction: column;\n      width: 100%;\n      li {\n        padding: .5rem 0;\n      }\n    }\n\n    & > div, & > span, & > form {\n      padding: .5rem 0;\n      width: 100%;\n    }\n  "], ["\n    width: 100%;\n    flex-direction: column;\n    align-items: flex-start;\n\n    padding-bottom: 0.5rem;\n\n    button:not(.active)+& {\n      display:none;\n    }\n\n    & > ul {\n      flex-direction: column;\n      width: 100%;\n      li {\n        padding: .5rem 0;\n      }\n    }\n\n    & > div, & > span, & > form {\n      padding: .5rem 0;\n      width: 100%;\n    }\n  "]))));
var AppBar = /** @class */ (function (_super) {
    __extends(AppBar, _super);
    function AppBar() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { show: false };
        _this.toggleMenu = function () {
            _this.setState({ show: !_this.state.show });
        };
        return _this;
    }
    AppBar.prototype.render = function () {
        var _a = this.props, children = _a.children, align = _a.align, brand = _a.brand, rest = __rest(_a, ["children", "align", "brand"]);
        var show = this.state.show;
        return (react_1.default.createElement(NavBar, __assign({ role: "navigation" }, rest),
            brand,
            react_1.default.createElement(Burger, { className: show ? 'active' : '', onClick: this.toggleMenu },
                react_1.default.createElement("span", null),
                react_1.default.createElement("span", null),
                react_1.default.createElement("span", null)),
            react_1.default.createElement(NavContent, { align: align }, children)));
    };
    AppBar.defaultProps = {
        color: null,
        brand: null,
        fixed: false,
        sticky: false,
        fluid: false,
        backdrop: false,
    };
    return AppBar;
}(react_1.PureComponent));
exports.default = AppBar;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8;
