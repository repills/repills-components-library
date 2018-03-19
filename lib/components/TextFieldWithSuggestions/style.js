'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.item = exports.list = exports.base = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  text-align: left;\n'], ['\n  text-align: left;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  margin-top: ', ';\n  background-color: ', ';\n'], ['\n  margin-top: ', ';\n  background-color: ', ';\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  ', '\n  color: ', ';\n  cursor: pointer;\n  padding: ', ';\n'], ['\n  ', '\n  color: ', ';\n  cursor: pointer;\n  padding: ', ';\n']);

var _styledComponents = require('styled-components');

var _utils = require('../../utils');

var _polished = require('polished');

var _theme = require('../../config/theme');

var _theme2 = _interopRequireDefault(_theme);

var _typography = require('../../shared/styles/typography');

var _typography2 = _interopRequireDefault(_typography);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var palettes = _theme2.default.palettes;
var basic = palettes.basic,
    neutral = palettes.neutral,
    status = palettes.status;
var base = exports.base = (0, _styledComponents.css)(_templateObject);

var list = exports.list = (0, _styledComponents.css)(_templateObject2, (0, _utils.extRem)(10), neutral.lower);

var item = exports.item = (0, _styledComponents.css)(_templateObject3, _typography2.default.body, neutral.medium, (0, _utils.extRem)(4, 12));