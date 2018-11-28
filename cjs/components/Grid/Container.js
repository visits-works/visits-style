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
var variables_1 = require("../../styles/variables");
function setResponsive(_a) {
    var fluid = _a.fluid;
    if (fluid) {
        return styled_components_1.css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n      ", "\n      ", "\n      ", "\n    "], ["\n      ",
            "\n      ",
            "\n      ",
            "\n    "])), media_1.mediaMobile(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n        padding-right: 0.5rem;\n        padding-left: 0.5rem;\n      "], ["\n        padding-right: 0.5rem;\n        padding-left: 0.5rem;\n      "]))), media_1.mediaDesktop(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n        padding-right: 0.75rem;\n        padding-left: 0.75rem;\n      "], ["\n        padding-right: 0.75rem;\n        padding-left: 0.75rem;\n      "]))), media_1.mediaFullHD(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n        padding-right: 0.75rem;\n        padding-left: 0.75rem;\n      "], ["\n        padding-right: 0.75rem;\n        padding-left: 0.75rem;\n      "]))));
    }
    return styled_components_1.css(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n    margin-right: auto;\n    margin-left: auto;\n    ", "\n    ", "\n    ", "\n    ", "\n  "], ["\n    margin-right: auto;\n    margin-left: auto;\n    ",
        "\n    ",
        "\n    ",
        "\n    ",
        "\n  "])), media_1.mediaMobile(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n      max-width: ", "px;\n    "], ["\n      max-width: ", "px;\n    "])), variables_1.mobile - (2 * variables_1.smallGutter)), media_1.mediaTablet(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n      max-width: ", "px;\n    "], ["\n      max-width: ", "px;\n    "])), variables_1.tablet - (2 * variables_1.smallGutter)), media_1.mediaDesktop(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n      max-width: ", "px;\n    "], ["\n      max-width: ", "px;\n    "])), variables_1.desktop - (2 * variables_1.gutter)), media_1.mediaFullHD(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n      max-width: ", "px;\n    "], ["\n      max-width: ", "px;\n    "])), variables_1.fullhd - (2 * variables_1.gutter)));
}
var Container = styled_components_1.default.div(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n  position: relative;\n  width: 100%;\n\n  ", "\n"], ["\n  position: relative;\n  width: 100%;\n\n  ", "\n"])), setResponsive);
Container.displayName = 'Container';
Container.defaultProps = {
    fluid: false,
};
exports.default = Container;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10;
