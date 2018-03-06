'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.item = exports.items = exports.title = exports.base = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  text-align: left;\n'], ['\n  text-align: left;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  ', '\n  margin: 0;\n'], ['\n  ', '\n  margin: 0;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  margin-top: ', ';\n'], ['\n  margin-top: ', ';\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  ', '\n  display: flex;\n  align-items: center;\n  position: relative;\n  padding: ', ' 0;\n  color: ', ';\n  text-decoration: none;\n  cursor: pointer;\n  \n  span {\n    margin: 0 ', ';\n    color: ', ';\n  }\n  \n  &:hover {\n    span {\n      text-decoration: underline;\n    }\n  }\n'], ['\n  ', '\n  display: flex;\n  align-items: center;\n  position: relative;\n  padding: ', ' 0;\n  color: ', ';\n  text-decoration: none;\n  cursor: pointer;\n  \n  span {\n    margin: 0 ', ';\n    color: ', ';\n  }\n  \n  &:hover {\n    span {\n      text-decoration: underline;\n    }\n  }\n']);

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

var title = exports.title = (0, _styledComponents.css)(_templateObject2, _typography2.default.header4);

var items = exports.items = (0, _styledComponents.css)(_templateObject3, (0, _utils.extRem)(16));

var item = exports.item = (0, _styledComponents.css)(_templateObject4, _typography2.default.body, (0, _utils.extRem)(8), neutral.high, (0, _utils.extRem)(8), neutral.highest);