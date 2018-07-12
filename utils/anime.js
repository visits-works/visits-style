"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addAnimeListener = exports.dispatchAnimeDone = exports.ANIMATION_DONE_EVENT = void 0;
var ANIMATION_DONE_EVENT = 'anime:done';
exports.ANIMATION_DONE_EVENT = ANIMATION_DONE_EVENT;

var dispatchAnimeDone = function dispatchAnimeDone(node) {
  return node.dispatchEvent(new Event(ANIMATION_DONE_EVENT));
};

exports.dispatchAnimeDone = dispatchAnimeDone;

var addAnimeListener = function addAnimeListener(node, done) {
  return node.addEventListener(ANIMATION_DONE_EVENT, done);
};

exports.addAnimeListener = addAnimeListener;