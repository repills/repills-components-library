'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.actions = exports.detail = exports.date = exports.type = exports.secondaryInfo = exports.title = exports.author = exports.source = exports.mainInfoBottom = exports.mainInfoTop = exports.mainInfo = exports.base = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  text-align: left;\n  background-color: ', ';\n'], ['\n  text-align: left;\n  background-color: ', ';\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  padding: ', ';\n  background-color: ', ';\n  border: 1px solid ', ';\n'], ['\n  padding: ', ';\n  background-color: ', ';\n  border: 1px solid ', ';\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  ', '\n  color: ', ';\n  display: flex;\n  align-items: center;\n  line-height: 1;\n  justify-content: space-between;\n'], ['\n  ', '\n  color: ', ';\n  display: flex;\n  align-items: center;\n  line-height: 1;\n  justify-content: space-between;\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  ', '\n  color: ', ';\n  display: flex;\n  align-items: center;\n'], ['\n  ', '\n  color: ', ';\n  display: flex;\n  align-items: center;\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n  ', '\n  display: flex;\n  align-items: center;\n  line-height: 1;\n  \n  span {\n    margin-left: ', ';\n  }\n'], ['\n  ', '\n  display: flex;\n  align-items: center;\n  line-height: 1;\n  \n  span {\n    margin-left: ', ';\n  }\n']),
    _templateObject6 = _taggedTemplateLiteral(['\n  ', '\n  \n  span {\n    margin: ', ';\n  }\n'], ['\n  ', '\n  \n  span {\n    margin: ', ';\n  }\n']),
    _templateObject7 = _taggedTemplateLiteral(['\n  ', '\n  color: ', ';\n  margin: ', ';\n  cursor: pointer;\n'], ['\n  ', '\n  color: ', ';\n  margin: ', ';\n  cursor: pointer;\n']),
    _templateObject8 = _taggedTemplateLiteral(['\n  border: 1px solid ', ';\n  border-top: 0;\n'], ['\n  border: 1px solid ', ';\n  border-top: 0;\n']),
    _templateObject9 = _taggedTemplateLiteral(['\n  display: inline-flex;\n  align-items: center;\n  line-height: 1;\n  \n  span {\n    margin-left: ', ';\n  }\n'], ['\n  display: inline-flex;\n  align-items: center;\n  line-height: 1;\n  \n  span {\n    margin-left: ', ';\n  }\n']),
    _templateObject10 = _taggedTemplateLiteral(['\n  margin-left: ', ';\n  flex: 1 0 auto;\n'], ['\n  margin-left: ', ';\n  flex: 1 0 auto;\n']),
    _templateObject11 = _taggedTemplateLiteral(['\n  ', '\n  color: ', ';\n  padding: ', ';\n  border-top: 1px dotted ', ';\n  \n  &:first-child {\n    border-top: 0;\n  }\n  \n  a, span {\n    text-decoration: underline;\n    margin-left: ', ';\n    color: currentColor;\n    cursor: pointer;\n  }\n'], ['\n  ', '\n  color: ', ';\n  padding: ', ';\n  border-top: 1px dotted ', ';\n  \n  &:first-child {\n    border-top: 0;\n  }\n  \n  a, span {\n    text-decoration: underline;\n    margin-left: ', ';\n    color: currentColor;\n    cursor: pointer;\n  }\n']),
    _templateObject12 = _taggedTemplateLiteral(['\n  padding: ', ';\n  border: 1px solid ', ';\n  margin-top: -1px;\n  background-color: ', ';\n  display: flex;\n  justify-content: space-between;\n'], ['\n  padding: ', ';\n  border: 1px solid ', ';\n  margin-top: -1px;\n  background-color: ', ';\n  display: flex;\n  justify-content: space-between;\n']);

var _styledComponents = require('styled-components');

var _theme = require('../../config/theme');

var _theme2 = _interopRequireDefault(_theme);

var _polished = require('polished');

var _utils = require('../../utils');

var _typography = require('../../shared/styles/typography');

var _typography2 = _interopRequireDefault(_typography);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var neutral = _theme2.default.palettes.neutral;

var mainColor = neutral.lower;

var base = exports.base = (0, _styledComponents.css)(_templateObject, neutral.lowest);

var mainInfo = exports.mainInfo = (0, _styledComponents.css)(_templateObject2, (0, _utils.extRem)(12, 12, 24), mainColor, neutral.low);

var mainInfoTop = exports.mainInfoTop = (0, _styledComponents.css)(_templateObject3, _typography2.default.small, neutral.high);

var mainInfoBottom = exports.mainInfoBottom = (0, _styledComponents.css)(_templateObject4, _typography2.default.small, neutral.high);

var source = exports.source = (0, _styledComponents.css)(_templateObject5, _typography2.default.small, (0, _utils.extRem)(5));

var author = exports.author = (0, _styledComponents.css)(_templateObject6, (0, _polished.ellipsis)(), (0, _utils.extRem)(0, 5));

var title = exports.title = (0, _styledComponents.css)(_templateObject7, _typography2.default.header3, neutral.highest, (0, _utils.extRem)(16, 0));

var secondaryInfo = exports.secondaryInfo = (0, _styledComponents.css)(_templateObject8, neutral.low);

var type = exports.type = (0, _styledComponents.css)(_templateObject9, (0, _utils.extRem)(5));

var date = exports.date = (0, _styledComponents.css)(_templateObject10, (0, _utils.extRem)(8));

var detail = exports.detail = (0, _styledComponents.css)(_templateObject11, _typography2.default.small, neutral.high, (0, _utils.extRem)(12), neutral.low, (0, _utils.extRem)(12));

var actions = exports.actions = (0, _styledComponents.css)(_templateObject12, (0, _utils.extRem)(12), neutral.low, neutral.lower);