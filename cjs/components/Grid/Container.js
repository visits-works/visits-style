"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = __importStar(require("styled-components"));
var media_1 = require("../../utils/media");
function setResponsive(_a) {
    var fluid = _a.fluid;
    if (fluid) {
        return styled_components_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      ", " {\n        padding-right: 0.5rem;\n        padding-left: 0.5rem;\n      }\n      ", " {\n        padding-right: 0.75rem;\n        padding-left: 0.75rem;\n      }\n      ", " {\n        padding-right: 0.75rem;\n        padding-left: 0.75rem;\n      }\n    "], ["\n      ", " {\n        padding-right: 0.5rem;\n        padding-left: 0.5rem;\n      }\n      ", " {\n        padding-right: 0.75rem;\n        padding-left: 0.75rem;\n      }\n      ", " {\n        padding-right: 0.75rem;\n        padding-left: 0.75rem;\n      }\n    "])), media_1.mediaMobile, media_1.mediaDesktop, media_1.mediaFullHD);
    }
    return styled_components_1.css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    margin-right: auto;\n    margin-left: auto;\n    ", " {\n      max-width: ", "px;\n    }\n    ", " {\n      max-width: ", "px;\n    }\n    ", " {\n      max-width: ", "px;\n    }\n    ", " {\n      max-width: ", "px;\n    }\n  "], ["\n    margin-right: auto;\n    margin-left: auto;\n    ", " {\n      max-width: ", "px;\n    }\n    ", " {\n      max-width: ", "px;\n    }\n    ", " {\n      max-width: ", "px;\n    }\n    ", " {\n      max-width: ", "px;\n    }\n  "])), media_1.mediaMobile, function (_a) {
        var theme = _a.theme;
        return theme.mobile - (2 * theme.smallGutter);
    }, media_1.mediaTablet, function (_a) {
        var theme = _a.theme;
        return theme.tablet - (2 * theme.smallGutter);
    }, media_1.mediaDesktop, function (_a) {
        var theme = _a.theme;
        return theme.desktop - (2 * theme.gutter);
    }, media_1.mediaFullHD, function (_a) {
        var theme = _a.theme;
        return theme.fullhd - (2 * theme.gutter);
    });
}
var Container = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  position: relative;\n  width: 100%;\n\n  ", "\n"], ["\n  position: relative;\n  width: 100%;\n\n  ", "\n"])), setResponsive);
Container.displayName = 'Container';
Container.defaultProps = {
    fluid: false,
};
exports.default = Container;
var templateObject_1, templateObject_2, templateObject_3;
