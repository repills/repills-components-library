'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.media = undefined;

var _templateObject = _taggedTemplateLiteral(['\n    @media (min-width: ', ') {\n      ', '\n    }\n  '], ['\n    @media (min-width: ', ') {\n      ', '\n    }\n  ']);

var _styledComponents = require('styled-components');

var _theme = require('../config/theme');

var _theme2 = _interopRequireDefault(_theme);

var _extRem = require('./extRem');

var _extRem2 = _interopRequireDefault(_extRem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var media = exports.media = Object.keys(_theme2.default.breakpoints).reduce(function (accumulator, label) {
  accumulator[label] = function () {
    return (0, _styledComponents.css)(_templateObject, (0, _extRem2.default)(_theme2.default.breakpoints[label]), _styledComponents.css.apply(undefined, arguments));
  };
  return accumulator;
}, {});