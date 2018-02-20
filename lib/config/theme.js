'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _palettes2 = require('./palettes');

var _palettes3 = _interopRequireDefault(_palettes2);

var _zIndex = require('./zIndex');

var _zIndex2 = _interopRequireDefault(_zIndex);

var _breakpoints = require('./breakpoints');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _palettes = Object.keys(_palettes3.default).reduce(function (acc, key) {
  acc[key] = _palettes3.default[key].colors.reduce(function (colors, color) {
    colors[color.id] = color.value;
    return colors;
  }, {});
  return acc;
}, {});

exports.default = {
  palettes: _palettes,
  breakpoints: _breakpoints.query,
  remBase: 16,
  zIndex: _zIndex2.default
};