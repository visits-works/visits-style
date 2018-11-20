"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function setAlign(_a) {
    var align = _a.align;
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
exports.default = setAlign;
