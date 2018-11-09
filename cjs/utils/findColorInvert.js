"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const getLuminance_1 = __importDefault(require("polished/lib/color/getLuminance"));
function findColorInvert({ black, white }, color) {
    if (getLuminance_1.default(color) > 0.55) {
        return black;
    }
    else {
        return white;
    }
}
exports.default = findColorInvert;
