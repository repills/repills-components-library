'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.item = exports.items = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  display: flex;\n  flex-wrap: wrap;\n  margin-left: -', ';\n  margin-right: -', ';\n  \n  ', '\n'], ['\n  display: flex;\n  flex-wrap: wrap;\n  margin-left: -', ';\n  margin-right: -', ';\n  \n  ', '\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  box-sizing: border-box;\n  padding-top: ', ';\n  padding-bottom: ', ';\n  \n  ', '\n  \n  ', '\n  \n  ', '\n'], ['\n  box-sizing: border-box;\n  padding-top: ', ';\n  padding-bottom: ', ';\n  \n  ', '\n  \n  ', '\n  \n  ', '\n']);

var _styledComponents = require('styled-components');

var _utils = require('../../utils');

var _styles = require('../../shared/styles');

var _breakpoints = require('../../config/breakpoints');

var _theme = require('../../config/theme');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var neutral = _theme2.default.palettes.neutral;


var halfGutterStripUnit = 8;
var gutter = (0, _utils.extRem)(halfGutterStripUnit * 2);
var doubleGutter = (0, _utils.extRem)(halfGutterStripUnit * 4);
var halfGutter = (0, _utils.extRem)(halfGutterStripUnit);

var items = exports.items = (0, _styledComponents.css)(_templateObject, halfGutter, halfGutter, function (props) {
  return props.breakpointsStatus[_breakpoints.SM] && '\n    margin-left: -' + gutter + ';\n    margin-right: -' + gutter + ';\n  ';
});

var item = exports.item = (0, _styledComponents.css)(_templateObject2, (0, _utils.extRem)(12), (0, _utils.extRem)(12), function (props) {
  return !props.breakpointsStatus[_breakpoints.SM] && (0, _styles.gridItem)(props.count, 1, halfGutter, gutter);
}, function (props) {
  return props.breakpointsStatus[_breakpoints.SM] && !props.breakpointsStatus[_breakpoints.LG] && '\n    ' + (0, _styles.gridItem)(props.count, 2, gutter, doubleGutter) + '\n    \n    &:nth-child(2n+1) {\n      border-right: 1px solid ' + neutral.low + ';\n    }\n  ';
}, function (props) {
  return props.breakpointsStatus[_breakpoints.LG] && '\n    ' + (0, _styles.gridItem)(props.count, 3, gutter, doubleGutter) + '\n    border-right: 1px solid ' + neutral.low + ';\n        \n    &:nth-child(3n) {\n      border-right: 0;\n    }\n  ';
});