'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.description = exports.icon = exports.title = exports.base = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  box-sizing: border-box;\n  text-align: left;\n  background-color: ', ';\n  padding: ', ';\n  position: relative;\n  padding-right: ', ';\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  min-height: ', ';\n'], ['\n  box-sizing: border-box;\n  text-align: left;\n  background-color: ', ';\n  padding: ', ';\n  position: relative;\n  padding-right: ', ';\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  min-height: ', ';\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  ', '\n  color: ', ';\n  line-height: 1.2;\n  margin: 0;\n  display: flex;\n  \n  span {\n    margin-right: ', ';\n  }\n'], ['\n  ', '\n  color: ', ';\n  line-height: 1.2;\n  margin: 0;\n  display: flex;\n  \n  span {\n    margin-right: ', ';\n  }\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  position: absolute;\n  top: ', ';\n  right: ', ';\n'], ['\n  position: absolute;\n  top: ', ';\n  right: ', ';\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  ', '\n  display: flex;\n  color: ', ';\n  margin: ', ' 0 0;\n  max-width: ', '\n'], ['\n  ', '\n  display: flex;\n  color: ', ';\n  margin: ', ' 0 0;\n  max-width: ', '\n']);

var _styledComponents = require('styled-components');

var _utils = require('../../utils');

var _theme = require('../../config/theme');

var _theme2 = _interopRequireDefault(_theme);

var _typography = require('../../shared/styles/typography');

var _typography2 = _interopRequireDefault(_typography);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var neutral = _theme2.default.palettes.neutral;
var base = exports.base = (0, _styledComponents.css)(_templateObject, neutral.lower, (0, _utils.extRem)(12, 16), (0, _utils.extRem)(80), (0, _utils.extRem)(68));

var title = exports.title = (0, _styledComponents.css)(_templateObject2, _typography2.default.caption, neutral.high, (0, _utils.extRem)(12));

var icon = exports.icon = (0, _styledComponents.css)(_templateObject3, (0, _utils.extRem)(12), (0, _utils.extRem)(16));

var description = exports.description = (0, _styledComponents.css)(_templateObject4, _typography2.default.body, neutral.mediumHigh, (0, _utils.extRem)(8), (0, _utils.extRem)(700));