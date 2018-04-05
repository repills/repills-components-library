'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SIZE_SCALE_REM = exports.SIZE_SCALE = undefined;

var _utils = require('../utils');

var SIZE_SCALE = exports.SIZE_SCALE = Object.freeze({
  mini: 12,
  small: 20,
  medium: 40,
  large: 60,
  xlarge: 120,
  mega: 240
});

var SIZE_SCALE_REM = exports.SIZE_SCALE_REM = Object.entries(SIZE_SCALE).reduce(function (acc, entry) {
  acc[entry[0]] = (0, _utils.extRem)(entry[1]);
  return acc;
}, {});