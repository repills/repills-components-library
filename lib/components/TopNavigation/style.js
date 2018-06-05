'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.navigationItem = exports.navigation = exports.logoContainer = exports.wrapper = exports.base = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  text-align: left;\n  position: relative;\n'], ['\n  text-align: left;\n  position: relative;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  &.', ' {\n    padding: 0.68rem 0;\n    display: flex;\n    flex-wrap: wrap;\n    align-items: center;\n    justify-content: space-between;\n  }\n'], ['\n  &.', ' {\n    padding: 0.68rem 0;\n    display: flex;\n    flex-wrap: wrap;\n    align-items: center;\n    justify-content: space-between;\n  }\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  padding: 0.68rem 1.25rem;\n  \n  span {\n    display: block;\n    line-height: 0;\n    cursor: pointer;\n    width: 7rem;\n  }\n\n  &.', ' {\n    padding: 0;\n    \n    span {\n      width: 8rem;\n    }\n  }\n'], ['\n  padding: 0.68rem 1.25rem;\n  \n  span {\n    display: block;\n    line-height: 0;\n    cursor: pointer;\n    width: 7rem;\n  }\n\n  &.', ' {\n    padding: 0;\n    \n    span {\n      width: 8rem;\n    }\n  }\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  display: flex;\n  flex-wrap: nowrap;\n  overflow-x: auto;\n  -webkit-overflow-scrolling: touch;\n  -ms-overflow-style: -ms-autohiding-scrollbar;\n  background-color: ', ';\n  color: ', ';\n  border-top: 1px solid ', ';\n  \n  &.', ' {\n    background-color: transparent;\n    width: calc(100% - 15rem);\n    border-left: 1px solid ', ';\n    border-top: 0;\n  }\n  \n  &.', ' {\n    flex-wrap: wrap;\n  }\n'], ['\n  display: flex;\n  flex-wrap: nowrap;\n  overflow-x: auto;\n  -webkit-overflow-scrolling: touch;\n  -ms-overflow-style: -ms-autohiding-scrollbar;\n  background-color: ', ';\n  color: ', ';\n  border-top: 1px solid ', ';\n  \n  &.', ' {\n    background-color: transparent;\n    width: calc(100% - 15rem);\n    border-left: 1px solid ', ';\n    border-top: 0;\n  }\n  \n  &.', ' {\n    flex-wrap: wrap;\n  }\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n  ', '\n  padding: 0 1.25rem;\n  line-height: 2.5rem;\n  height: 2.5rem;\n  display: flex;\n  align-items: center;\n  flex: 0 0 auto;\n  color: ', ';\n  text-decoration: none;\n  cursor: pointer;\n'], ['\n  ', '\n  padding: 0 1.25rem;\n  line-height: 2.5rem;\n  height: 2.5rem;\n  display: flex;\n  align-items: center;\n  flex: 0 0 auto;\n  color: ', ';\n  text-decoration: none;\n  cursor: pointer;\n']);

var _styledComponents = require('styled-components');

var _polished = require('polished');

var _theme = require('../../config/theme');

var _theme2 = _interopRequireDefault(_theme);

var _breakpoints = require('../../config/breakpoints');

var _typography = require('../../shared/styles/typography');

var _typography2 = _interopRequireDefault(_typography);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var _theme$palettes = _theme2.default.palettes,
    basic = _theme$palettes.basic,
    neutral = _theme$palettes.neutral;
var base = exports.base = (0, _styledComponents.css)(_templateObject);

var wrapper = exports.wrapper = (0, _styledComponents.css)(_templateObject2, _breakpoints.MD);

var logoContainer = exports.logoContainer = (0, _styledComponents.css)(_templateObject3, _breakpoints.MD);

var navigation = exports.navigation = (0, _styledComponents.css)(_templateObject4, basic.secondary, neutral.high, (0, _polished.rgba)(neutral.highest, .3), _breakpoints.MD, (0, _polished.rgba)(neutral.highest, .3), _breakpoints.LG);

var navigationItem = exports.navigationItem = (0, _styledComponents.css)(_templateObject5, _typography2.default.body, neutral.lowest);