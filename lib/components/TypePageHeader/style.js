'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.icon = exports.sectionName = exports.main = exports.title = exports.base = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  text-align: center;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  \n  ', '\n'], ['\n  text-align: center;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  \n  ', '\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  min-height: ', ';\n  margin: 0;\n  display: flex;\n  align-items: center;\n  word-break: break-word;\n\n  span {\n    ', ' \n    color: ', ';\n    line-height: 1.1;\n    margin-left: ', ';\n  }\n  \n  strong {\n    color: ', ';\n  }\n'], ['\n  min-height: ', ';\n  margin: 0;\n  display: flex;\n  align-items: center;\n  word-break: break-word;\n\n  span {\n    ', ' \n    color: ', ';\n    line-height: 1.1;\n    margin-left: ', ';\n  }\n  \n  strong {\n    color: ', ';\n  }\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  position: relative;\n    \n  ', '\n'], ['\n  position: relative;\n    \n  ', '\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n\n  ', '\n'], ['\n\n  ', '\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n  color: ', ';\n  margin-bottom: ', ';\n  \n  ', '\n'], ['\n  color: ', ';\n  margin-bottom: ', ';\n  \n  ', '\n']);

var _styledComponents = require('styled-components');

var _utils = require('../../utils');

var _theme = require('../../config/theme');

var _theme2 = _interopRequireDefault(_theme);

var _typography = require('../../shared/styles/typography');

var _typography2 = _interopRequireDefault(_typography);

var _breakpoints = require('../../config/breakpoints');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var _theme$palettes = _theme2.default.palettes,
    basic = _theme$palettes.basic,
    neutral = _theme$palettes.neutral;
var base = exports.base = (0, _styledComponents.css)(_templateObject, function (props) {
  return props.breakpointsStatus[_breakpoints.SM] && '\n    text-align: left;\n    justify-content: flex-start;\n  ';
});

var title = exports.title = (0, _styledComponents.css)(_templateObject2, (0, _utils.extRem)(60), _typography2.default.header2, neutral.higher, (0, _utils.extRem)(-3), basic.primary);

var main = exports.main = (0, _styledComponents.css)(_templateObject3, function (props) {
  return props.breakpointsStatus[_breakpoints.SM] && '\n    display: inline-block;\n    padding-right: ' + (0, _utils.extRem)(80) + ';\n  ';
});

var sectionName = exports.sectionName = (0, _styledComponents.css)(_templateObject4, function (props) {
  return props.onClick && '\n    text-decoration: underline;\n    cursor: pointer;\n  ';
});

var icon = exports.icon = (0, _styledComponents.css)(_templateObject5, function (props) {
  return props.color;
}, (0, _utils.extRem)(12), function (props) {
  return props.breakpointsStatus[_breakpoints.SM] && '\n    position: absolute;\n    right: 0;\n    top: 0;\n    margin: 0;\n  ';
});