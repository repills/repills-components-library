'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = require('./palettes/index');

var _index2 = _interopRequireDefault(_index);

var _zIndex = require('./zIndex');

var _zIndex2 = _interopRequireDefault(_zIndex);

var _breakpoints2 = require('./breakpoints');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _palettes = Object.keys(_index2.default).reduce(function (acc, key) {
  acc[key] = _index2.default[key].colors.reduce(function (colors, color) {
    colors[color.id] = color.value;
    return colors;
  }, {});
  return acc;
}, {});

var _breakpoints = Object.keys(_breakpoints2.query).reduce(function (acc, key) {
  acc[key] = _breakpoints2.query[key].minWidth;
  return acc;
}, {});

exports.default = {
  palettes: _palettes,
  breakpoints: _breakpoints,
  remBase: 16,
  zIndex: _zIndex2.default
};