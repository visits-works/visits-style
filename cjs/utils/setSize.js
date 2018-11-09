"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function setSize(name, size) {
    switch (size) {
        case 'small':
            return name + ': 0.75rem;';
        case 'medium':
            return name + ': 1.25rem;';
        case 'large':
            return name + ': 1.5rem;';
        default:
            return name + ': 1rem;';
    }
}
exports.default = setSize;
