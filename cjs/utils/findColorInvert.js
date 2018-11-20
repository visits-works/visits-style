"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var getLuminance_1 = __importDefault(require("polished/lib/color/getLuminance"));
function findColorInvert(_a, color) {
    var black = _a.black, white = _a.white;
    if (!color || getLuminance_1.default(color) > 0.55) {
        return black;
    }
    else {
        return white;
    }
}
exports.default = findColorInvert;
