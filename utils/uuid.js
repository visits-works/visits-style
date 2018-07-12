"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = uuid;

function uuid() {
  var firstPart = (Math.random() * 46656 | 0).toString(36);
  var secondPart = (Math.random() * 46656 | 0).toString(36);
  firstPart = ("000" + firstPart).slice(-3);
  secondPart = ("000" + secondPart).slice(-3);
  return firstPart + secondPart;
}