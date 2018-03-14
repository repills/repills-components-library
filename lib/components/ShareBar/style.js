'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.item = exports.base = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  display: flex;\n  color: ', ';\n'], ['\n  display: flex;\n  color: ', ';\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  margin-right: ', ';\n  \n  &:last-child {\n    margin-right: 0;\n  }\n'], ['\n  margin-right: ', ';\n  \n  &:last-child {\n    margin-right: 0;\n  }\n']);

var _styledComponents = require('styled-components');

var _utils = require('../../utils');

var _theme = require('../../config/theme');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var palettes = _theme2.default.palettes;
var neutral = palettes.neutral;
var base = exports.base = (0, _styledComponents.css)(_templateObject, neutral.high);

var item = exports.item = (0, _styledComponents.css)(_templateObject2, (0, _utils.extRem)(4));