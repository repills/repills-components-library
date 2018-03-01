'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n    font-size: ', ';\n    font-weight: ', ';\n    font-family: ', ';\n  '], ['\n    font-size: ', ';\n    font-weight: ', ';\n    font-family: ', ';\n  ']);

var _styledComponents = require('styled-components');

var _utils = require('../../utils');

var _typography = require('../../config/typography');

var _typography2 = _interopRequireDefault(_typography);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function getTypographyCss(config) {
  return (0, _styledComponents.css)(_templateObject, (0, _utils.extRem)(config.size), config.weight || 400, config.family);
}

exports.default = _typography2.default.reduce(function (styles, config) {
  styles[config.id] = getTypographyCss(config);
  return styles;
}, {});