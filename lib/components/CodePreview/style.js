'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.buttonCopy = exports.title = exports.header = exports.base = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  background-color: #222;\n'], ['\n  background-color: #222;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  display: flex;\n  padding: ', ';\n  align-items: center;\n  justify-content: space-between;\n  border-bottom: 1px solid ', ';\n'], ['\n  display: flex;\n  padding: ', ';\n  align-items: center;\n  justify-content: space-between;\n  border-bottom: 1px solid ', ';\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  ', '\n  color: ', ';\n   ', '\n  span {\n   \n  }\n'], ['\n  ', '\n  color: ', ';\n   ', '\n  span {\n   \n  }\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  ', '\n  color: ', ';\n  padding: ', ';\n  background-color: ', ';\n  height: ', ';\n  line-height: ', ';\n  display: flex;\n  align-items: center;\n  text-transform: uppercase;\n  letter-spacing: .1em;\n  box-sizing: border-box;\n  cursor: pointer;\n  flex-shrink: 1;\n  margin-left: ', ';\n'], ['\n  ', '\n  color: ', ';\n  padding: ', ';\n  background-color: ', ';\n  height: ', ';\n  line-height: ', ';\n  display: flex;\n  align-items: center;\n  text-transform: uppercase;\n  letter-spacing: .1em;\n  box-sizing: border-box;\n  cursor: pointer;\n  flex-shrink: 1;\n  margin-left: ', ';\n']);

var _styledComponents = require('styled-components');

var _utils = require('../../utils');

var _theme = require('../../config/theme');

var _theme2 = _interopRequireDefault(_theme);

var _typography = require('../../shared/styles/typography');

var _typography2 = _interopRequireDefault(_typography);

var _caret = require('../../shared/styles/caret');

var _polished = require('polished');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var _theme$palettes = _theme2.default.palettes,
    neutral = _theme$palettes.neutral,
    basic = _theme$palettes.basic;
var base = exports.base = (0, _styledComponents.css)(_templateObject);

var header = exports.header = (0, _styledComponents.css)(_templateObject2, (0, _utils.extRem)(8, 12), neutral.higher);

var title = exports.title = (0, _styledComponents.css)(_templateObject3, _typography2.default.small, neutral.mediumHigh, (0, _polished.ellipsis)());

var buttonCopy = exports.buttonCopy = (0, _styledComponents.css)(_templateObject4, _typography2.default.mini, neutral.lowest, (0, _utils.extRem)(0, 10), basic.primary, (0, _utils.extRem)(28), (0, _utils.extRem)(28), (0, _utils.extRem)(12));