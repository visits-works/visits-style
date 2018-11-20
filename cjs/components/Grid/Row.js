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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = __importStar(require("styled-components"));
var Col_1 = __importDefault(require("./Col"));
var media_1 = require("../../utils/media");
function renderGutter(_a) {
    var noGutter = _a.noGutter;
    if (noGutter) {
        return styled_components_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      margin-right: 0;\n      margin-left: 0;\n\n      > ", " {\n        padding-right: 0;\n        padding-left: 0;\n      }\n    "], ["\n      margin-right: 0;\n      margin-left: 0;\n\n      > ", " {\n        padding-right: 0;\n        padding-left: 0;\n      }\n    "])), Col_1.default);
    }
    else {
        return styled_components_1.css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n      ", "\n\n      ", "\n    "], ["\n      ",
            "\n\n      ",
            "\n    "])), media_1.mediaTablet(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n        margin-left: -0.5rem;\n        margin-right: -0.5rem;\n        margin-top: -0.5rem;\n\n        &:last-child {\n          margin-bottom: -0.5rem;\n        }\n\n        &:not(:last-child) {\n          margin-bottom: 0.5rem;\n        }\n      "], ["\n        margin-left: -0.5rem;\n        margin-right: -0.5rem;\n        margin-top: -0.5rem;\n\n        &:last-child {\n          margin-bottom: -0.5rem;\n        }\n\n        &:not(:last-child) {\n          margin-bottom: 0.5rem;\n        }\n      "]))), media_1.mediaFullHD(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n          margin-left: -0.75rem;\n          margin-right: -0.75rem;\n          margin-top: -0.75rem;\n\n          &:last-child {\n            margin-bottom: -0.75rem;\n          }\n\n          &:not(:last-child) {\n            margin-bottom: 0.75rem;\n          }\n      "], ["\n          margin-left: -0.75rem;\n          margin-right: -0.75rem;\n          margin-top: -0.75rem;\n\n          &:last-child {\n            margin-bottom: -0.75rem;\n          }\n\n          &:not(:last-child) {\n            margin-bottom: 0.75rem;\n          }\n      "]))));
    }
}
var Row = styled_components_1.default.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  display: flex;\n  max-width: 100%;\n  flex-wrap: wrap;\n\n  ", "\n  ", "\n\n  ", "\n"], ["\n  display: flex;\n  max-width: 100%;\n  flex-wrap: wrap;\n\n  ", "\n  ", "\n\n  ", "\n"])), function (_a) {
    var vcenter = _a.vcenter;
    return vcenter ? 'align-items: center;' : '';
}, function (_a) {
    var center = _a.center;
    return center ? 'justify-content: center;' : '';
}, renderGutter);
Row.displayName = 'Row';
// Row.defaultProps = {
//   width: null,
//   multiline: false,
//   vcenter: false,
//   noGutter: false,
// };
exports.default = Row;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
