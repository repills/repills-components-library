'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = extRem;

var _polished = require('polished');

var _theme = require('../config/theme');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function extRem() {

  if (arguments.length > 1) {
    return Array.from(arguments).reduce(function (acc, item) {
      var toPx = ' ' + item + 'px';
      return acc + ' ' + (0, _polished.rem)(toPx, _theme2.default.remBase);
    }, '');
  }

  return (0, _polished.rem)(arguments[0] + 'px', _theme2.default.remBase);
}