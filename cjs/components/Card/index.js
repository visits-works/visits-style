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
var Box_1 = __importDefault(require("../Box"));
var CardBody = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  padding: 1.25rem;\n  margin: 0;\n"], ["\n  padding: 1.25rem;\n  margin: 0;\n"])));
var CardHeader = styled_components_1.default.header(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  padding: 0.5rem 1.5rem;\n  min-height: 3.5rem;\n  border-bottom: 1px solid ", ";\n  align-items: center;\n  justify-content: space-between;\n"], ["\n  display: flex;\n  padding: 0.5rem 1.5rem;\n  min-height: 3.5rem;\n  border-bottom: 1px solid ", ";\n  align-items: center;\n  justify-content: space-between;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.border;
});
var CardFooter = styled_components_1.default.footer(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: flex;\n  padding: 0.5rem 1.5rem;\n  min-height: 3.5rem;\n  border-top: 1px solid ", ";\n  align-items: center;\n  justify-content: space-between;\n"], ["\n  display: flex;\n  padding: 0.5rem 1.5rem;\n  min-height: 3.5rem;\n  border-top: 1px solid ", ";\n  align-items: center;\n  justify-content: space-between;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.border;
});
var CardImage = styled_components_1.default.a(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  width: 100%;\n\n  img {\n    width: 100%;\n    padding: 0;\n    margin: 0;\n    border-top-left-radius: 3px;\n    border-top-right-radius: 3px;\n  }\n"], ["\n  width: 100%;\n\n  img {\n    width: 100%;\n    padding: 0;\n    margin: 0;\n    border-top-left-radius: 3px;\n    border-top-right-radius: 3px;\n  }\n"])));
var CardImageHorizontal = styled_components_1.default.a(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  flex: 0 0 30%;\n  min-width: 5rem;\n  width: 30%;\n  border-top-left-radius: 3px;\n  border-bottom-left-radius: 3px;\n\n  background: no-repeat center/cover;\n  ", "\n"], ["\n  flex: 0 0 30%;\n  min-width: 5rem;\n  width: 30%;\n  border-top-left-radius: 3px;\n  border-bottom-left-radius: 3px;\n\n  background: no-repeat center/cover;\n  ", "\n"])), function (_a) {
    var url = _a.url;
    return url ? "background-image: url(" + url + ");" : '';
});
var horizontalStyle = { flexDirection: 'row' };
var Card = /** @class */ (function (_super) {
    __extends(Card, _super);
    function Card() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.renderHeader = function () {
            var _a = _this.props, image = _a.image, title = _a.title, horizontal = _a.horizontal;
            if (image && !horizontal)
                return (react_1.default.createElement(CardImage, null,
                    react_1.default.createElement("img", { src: image })));
            if (image && horizontal)
                return (react_1.default.createElement(CardImageHorizontal, { url: image }));
            if (title && !horizontal)
                return (react_1.default.createElement(CardHeader, null,
                    react_1.default.createElement("h3", null, title)));
            return null;
        };
        return _this;
    }
    Card.prototype.render = function () {
        var _a = this.props, children = _a.children, horizontal = _a.horizontal, footer = _a.footer, color = _a.color;
        var header = this.renderHeader();
        var wrapperStyle = horizontal ? horizontalStyle : undefined;
        return (react_1.default.createElement(Box_1.default, { style: wrapperStyle, color: color },
            header,
            react_1.default.createElement(CardBody, null, children),
            footer && (react_1.default.createElement(CardFooter, null, react_1.default.Children.only(footer)))));
    };
    return Card;
}(react_1.PureComponent));
exports.default = Card;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
