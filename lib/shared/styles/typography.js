'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = require('../../utils');

var _typography = require('../../config/typography');

var _typography2 = _interopRequireDefault(_typography);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getTypographyCss(config) {
  return {
    fontSize: (0, _utils.extRem)(config.size),
    fontWeight: config.weight || 400,
    fontFamily: config.family
  };
}

exports.default = _typography2.default.reduce(function (styles, config) {
  styles[config.id] = getTypographyCss(config);
  return styles;
}, {});