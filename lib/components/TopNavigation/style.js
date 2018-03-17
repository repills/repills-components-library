'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.navigationItem = exports.navigation = exports.logoContainer = exports.base = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  text-align: left;\n\n  &.', ' {\n    padding: ', ';\n    display: flex;\n    flex-wrap: wrap;\n    align-items: center;\n    justify-content: space-between;\n  }\n'], ['\n  text-align: left;\n\n  &.', ' {\n    padding: ', ';\n    display: flex;\n    flex-wrap: wrap;\n    align-items: center;\n    justify-content: space-between;\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  background-color: ', ';\n  padding: ', ';\n  \n  a {\n    display: block;\n    line-height: 0;\n    margin: 0 auto;\n    width: ', ';\n  }\n\n  &.', ' {\n    padding: 0;\n    background-color: transparent;\n    \n    a {\n      width: ', ';\n    }\n  }\n'], ['\n  background-color: ', ';\n  padding: ', ';\n  \n  a {\n    display: block;\n    line-height: 0;\n    margin: 0 auto;\n    width: ', ';\n  }\n\n  &.', ' {\n    padding: 0;\n    background-color: transparent;\n    \n    a {\n      width: ', ';\n    }\n  }\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  display: flex;\n  flex-wrap: nowrap;\n  overflow-x: auto;\n  -webkit-overflow-scrolling: touch;\n  -ms-overflow-style: -ms-autohiding-scrollbar;\n  background-color: ', ';\n  color: ', ';\n  \n  &.', ' {\n    padding: 0;\n    background-color: transparent;\n    width: calc(100% - ', ');\n  }\n  \n  &.', ' {\n    flex-wrap: wrap;\n  }\n'], ['\n  display: flex;\n  flex-wrap: nowrap;\n  overflow-x: auto;\n  -webkit-overflow-scrolling: touch;\n  -ms-overflow-style: -ms-autohiding-scrollbar;\n  background-color: ', ';\n  color: ', ';\n  \n  &.', ' {\n    padding: 0;\n    background-color: transparent;\n    width: calc(100% - ', ');\n  }\n  \n  &.', ' {\n    flex-wrap: wrap;\n  }\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  ', '\n  padding: ', ';\n  line-height: ', ';\n  height: ', ';\n  display: flex;\n  align-items: center;\n  flex: 0 0 auto;\n  color: currentColor;\n  text-decoration: underline;\n  cursor: pointer;\n'], ['\n  ', '\n  padding: ', ';\n  line-height: ', ';\n  height: ', ';\n  display: flex;\n  align-items: center;\n  flex: 0 0 auto;\n  color: currentColor;\n  text-decoration: underline;\n  cursor: pointer;\n']);

var _styledComponents = require('styled-components');

var _theme = require('../../config/theme');

var _theme2 = _interopRequireDefault(_theme);

var _breakpoints = require('../../config/breakpoints');

var _utils = require('../../utils');

var _typography = require('../../shared/styles/typography');

var _typography2 = _interopRequireDefault(_typography);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var _theme$palettes = _theme2.default.palettes,
    basic = _theme$palettes.basic,
    neutral = _theme$palettes.neutral;
var base = exports.base = (0, _styledComponents.css)(_templateObject, _breakpoints.MD, (0, _utils.extRem)(20, 0));

var logoContainer = exports.logoContainer = (0, _styledComponents.css)(_templateObject2, neutral.lower, (0, _utils.extRem)(16, 12), (0, _utils.extRem)(150), _breakpoints.MD, (0, _utils.extRem)(220));

var navigation = exports.navigation = (0, _styledComponents.css)(_templateObject3, basic.lowest, neutral.highest, _breakpoints.MD, (0, _utils.extRem)(240), _breakpoints.LG);

var navigationItem = exports.navigationItem = (0, _styledComponents.css)(_templateObject4, _typography2.default.body, (0, _utils.extRem)(0, 12), (0, _utils.extRem)(32), (0, _utils.extRem)(44));