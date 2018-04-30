'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.description = exports.title = exports.action = exports.icon = exports.base = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  position: relative;\n  text-align: center;\n  border: 1px solid ', ';\n  border-top-width: 4px;\n  padding: ', ';\n'], ['\n  position: relative;\n  text-align: center;\n  border: 1px solid ', ';\n  border-top-width: 4px;\n  padding: ', ';\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  color: ', ';\n'], ['\n  color: ', ';\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  margin-top: ', ';\n'], ['\n  margin-top: ', ';\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  ', '\n  color: ', ';\n  margin: ', ' 0 0;\n  line-height: 1.3;\n'], ['\n  ', '\n  color: ', ';\n  margin: ', ' 0 0;\n  line-height: 1.3;\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n  ', '\n  color: ', ';\n  margin: ', ' 0 0;\n  \n  a {\n    font-weight: 600;\n    color: currentColor;\n    text-decoration: underline;\n  }\n'], ['\n  ', '\n  color: ', ';\n  margin: ', ' 0 0;\n  \n  a {\n    font-weight: 600;\n    color: currentColor;\n    text-decoration: underline;\n  }\n']);

var _styledComponents = require('styled-components');

var _utils = require('../../utils');

var _theme = require('../../config/theme');

var _theme2 = _interopRequireDefault(_theme);

var _typography = require('../../shared/styles/typography');

var _typography2 = _interopRequireDefault(_typography);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var neutral = _theme2.default.palettes.neutral;
var base = exports.base = (0, _styledComponents.css)(_templateObject, neutral.low, (0, _utils.extRem)(20, 16));

var icon = exports.icon = (0, _styledComponents.css)(_templateObject2, neutral.high);
var action = exports.action = (0, _styledComponents.css)(_templateObject3, (0, _utils.extRem)(20));

var title = exports.title = (0, _styledComponents.css)(_templateObject4, _typography2.default.caption, neutral.high, (0, _utils.extRem)(16));

var description = exports.description = (0, _styledComponents.css)(_templateObject5, _typography2.default.small, neutral.medium, (0, _utils.extRem)(8));