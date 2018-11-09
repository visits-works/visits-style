"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = require("styled-components");
function hamburger(size) {
    return styled_components_1.css `
    display: block;
    position: relative;
    height: ${size};
    width: ${size};

    cursor: pointer;
    span {
      background-color: currentColor;
      display: block;
      height: 1px;
      left: calc(50% - 8px);
      position: absolute;
      transform-origin: center;
      transition-duration: 100ms;
      transition-property: background-color, opacity, transform;
      transition-timing-function: ease-out;
      width: 16px;

      &:nth-child(1) {
        top: calc(50% - 6px);
      }
      &:nth-child(2) {
        top: calc(50% - 1px);
      }
      &:nth-child(3) {
        top: calc(50% + 4px);
      }

      &:hover {
        background-color: rgba(black, 0.05);
      }
    }

    &.active span {
      &:nth-child(1) {
        transform: translateY(5px) rotate(45deg);
      }
      &:nth-child(2) {
        opacity: 0;
      }
      &:nth-child(3) {
        transform: translateY(-5px) rotate(-45deg);
      }
    }
  `;
}
exports.default = hamburger;
