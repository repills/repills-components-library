'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.navigationItem = exports.navigation = exports.logoContainer = exports.wrapper = exports.base = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  text-align: left;\n'], ['\n  text-align: left;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  &.', ' {\n    padding: ', ';\n    display: flex;\n    flex-wrap: wrap;\n    align-items: center;\n    justify-content: space-between;\n  }\n'], ['\n  &.', ' {\n    padding: ', ';\n    display: flex;\n    flex-wrap: wrap;\n    align-items: center;\n    justify-content: space-between;\n  }\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  background-color: ', ';\n  padding: ', ';\n  \n  span {\n    display: block;\n    line-height: 0;\n    cursor: pointer;\n    width: ', ';\n  }\n\n  &.', ' {\n    padding: 0;\n    background-color: transparent;\n    \n    span {\n      width: ', ';\n    }\n  }\n'], ['\n  background-color: ', ';\n  padding: ', ';\n  \n  span {\n    display: block;\n    line-height: 0;\n    cursor: pointer;\n    width: ', ';\n  }\n\n  &.', ' {\n    padding: 0;\n    background-color: transparent;\n    \n    span {\n      width: ', ';\n    }\n  }\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  display: flex;\n  flex-wrap: nowrap;\n  overflow-x: auto;\n  -webkit-overflow-scrolling: touch;\n  -ms-overflow-style: -ms-autohiding-scrollbar;\n  background-color: ', ';\n  color: ', ';\n  \n  &.', ' {\n    background-color: transparent;\n    width: calc(100% - ', ');\n    border-left: 1px solid ', ';\n  }\n  \n  &.', ' {\n    flex-wrap: wrap;\n  }\n'], ['\n  display: flex;\n  flex-wrap: nowrap;\n  overflow-x: auto;\n  -webkit-overflow-scrolling: touch;\n  -ms-overflow-style: -ms-autohiding-scrollbar;\n  background-color: ', ';\n  color: ', ';\n  \n  &.', ' {\n    background-color: transparent;\n    width: calc(100% - ', ');\n    border-left: 1px solid ', ';\n  }\n  \n  &.', ' {\n    flex-wrap: wrap;\n  }\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n  ', '\n  padding: ', ';\n  line-height: ', ';\n  height: ', ';\n  display: flex;\n  align-items: center;\n  flex: 0 0 auto;\n  color: currentColor;\n  text-decoration: none;\n  cursor: pointer;\n'], ['\n  ', '\n  padding: ', ';\n  line-height: ', ';\n  height: ', ';\n  display: flex;\n  align-items: center;\n  flex: 0 0 auto;\n  color: currentColor;\n  text-decoration: none;\n  cursor: pointer;\n']);

var _styledComponents = require('styled-components');

var _theme = require('../../config/theme');

var _theme2 = _interopRequireDefault(_theme);

var _breakpoints = require('../../config/breakpoints');

var _utils = require('../../utils');

var _typography = require('../../shared/styles/typography');

var _typography2 = _interopRequireDefault(_typography);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var neutral = _theme2.default.palettes.neutral;
var base = exports.base = (0, _styledComponents.css)(_templateObject);

var wrapper = exports.wrapper = (0, _styledComponents.css)(_templateObject2, _breakpoints.MD, (0, _utils.extRem)(16, 0));

var logoContainer = exports.logoContainer = (0, _styledComponents.css)(_templateObject3, neutral.lower, (0, _utils.extRem)(16, 20), (0, _utils.extRem)(150), _breakpoints.MD, (0, _utils.extRem)(180));

var navigation = exports.navigation = (0, _styledComponents.css)(_templateObject4, neutral.lowest, neutral.high, _breakpoints.MD, (0, _utils.extRem)(240), neutral.low, _breakpoints.LG);

var navigationItem = exports.navigationItem = (0, _styledComponents.css)(_templateObject5, _typography2.default.body, (0, _utils.extRem)(0, 20), (0, _utils.extRem)(40), (0, _utils.extRem)(40));