'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tag = exports.list = exports.base = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  text-align: left;\n'], ['\n  text-align: left;\n']),
    _templateObject2 = _taggedTemplateLiteral([''], ['']),
    _templateObject3 = _taggedTemplateLiteral(['\n  ', '\n  color: ', ';\n  border-radius: 3px;\n  display: inline-block;\n  padding: ', ';\n  background-color: ', ';\n  margin: ', ';\n  word-break: break-all;\n  \n  &:last-child {\n    margin-right: 0;\n  }\n'], ['\n  ', '\n  color: ', ';\n  border-radius: 3px;\n  display: inline-block;\n  padding: ', ';\n  background-color: ', ';\n  margin: ', ';\n  word-break: break-all;\n  \n  &:last-child {\n    margin-right: 0;\n  }\n']);

var _styledComponents = require('styled-components');

var _utils = require('../../utils');

var _theme = require('../../config/theme');

var _theme2 = _interopRequireDefault(_theme);

var _typography = require('../../shared/styles/typography');

var _typography2 = _interopRequireDefault(_typography);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var neutral = _theme2.default.palettes.neutral;
var base = exports.base = (0, _styledComponents.css)(_templateObject);

var list = exports.list = (0, _styledComponents.css)(_templateObject2);

var tag = exports.tag = (0, _styledComponents.css)(_templateObject3, _typography2.default.mini, neutral.medium, (0, _utils.extRem)(0, 4), neutral.lower, (0, _utils.extRem)(0, 4, 4, 0));