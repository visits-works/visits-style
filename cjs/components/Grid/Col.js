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
function parcentage(value) {
    if (!value)
        return 0;
    if (value >= 12)
        return 100;
    return Math.ceil((value / 12) * 100 * 100000) / 100000;
}
function renderSize(_a) {
    var size = _a.size, narrow = _a.narrow, auto = _a.auto, offset = _a.offset;
    if (narrow)
        return null;
    if (!size || size < 1 || size > 12) {
        return styled_components_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      width: auto;\n      max-width: auto;\n    "], ["\n      width: auto;\n      max-width: auto;\n    "])));
    }
    var value = parcentage(size);
    var offVal = offset ? parcentage(offset) : 0;
    var autoSize = value > 33 ? 100 : value * 3;
    return styled_components_1.css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    width: ", "%;\n    max-width: ", "%;\n    ", "\n    ", "\n  "], ["\n    width: ", "%;\n    max-width: ", "%;\n    ", "\n    ",
        "\n  "])), value, value, offset ? "margin-left: " + offVal + "%;" : '', auto ? media_1.mediaMobile(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n      width: ", "%;\n      max-width: ", "%;\n      ", "\n    "], ["\n      width: ", "%;\n      max-width: ", "%;\n      ", "\n    "])), autoSize, autoSize, offset ? "margin-left: 0;" : '') : '');
}
var Col = styled_components_1.default.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  display: block;\n  min-height: 1px;\n\n  ", "\n  ", "\n\n  ", "\n\n  padding: 0.75rem;\n\n  ", "\n"], ["\n  display: block;\n  min-height: 1px;\n\n  ", "\n  ", "\n\n  ", "\n\n  padding: 0.75rem;\n\n  ",
    "\n"])), function (_a) {
    var narrow = _a.narrow;
    return narrow ? 'flex: none;' : '';
}, function (_a) {
    var offset = _a.offset;
    return offset ? "margin-left: " + parcentage(offset) + "%;" : '';
}, renderSize, media_1.mediaTablet(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    padding: 0.5rem;\n  "], ["\n    padding: 0.5rem;\n  "]))));
Col.displayName = 'Col';
exports.default = Col;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
