'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.item = exports.items = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  display: flex;\n  flex-wrap: wrap;\n  margin-left: -', ';\n  margin-right: -', ';\n  \n  ', '\n'], ['\n  display: flex;\n  flex-wrap: wrap;\n  margin-left: -', ';\n  margin-right: -', ';\n  \n  ', '\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  box-sizing: border-box;\n  \n  ', '\n  \n  ', '\n  \n  ', '\n'], ['\n  box-sizing: border-box;\n  \n  ', '\n  \n  ', '\n  \n  ', '\n']);

var _styledComponents = require('styled-components');

var _utils = require('../../utils');

var _styles = require('../../shared/styles');

var _breakpoints = require('../../config/breakpoints');

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var halfGutterStripUnit = 6;
var gutter = (0, _utils.extRem)(halfGutterStripUnit * 2);
var doubleGutter = (0, _utils.extRem)(halfGutterStripUnit * 4);
var halfGutter = (0, _utils.extRem)(halfGutterStripUnit);

var items = exports.items = (0, _styledComponents.css)(_templateObject, halfGutter, halfGutter, function (props) {
  return props.breakpointsStatus[_breakpoints.SM] && '\n    margin-left: -' + gutter + ';\n    margin-right: -' + gutter + ';\n  ';
});

var item = exports.item = (0, _styledComponents.css)(_templateObject2, function (props) {
  return !props.breakpointsStatus[_breakpoints.SM] && (0, _styles.gridItem)(props.count, 1, halfGutter, gutter);
}, function (props) {
  return props.breakpointsStatus[_breakpoints.SM] && !props.breakpointsStatus[_breakpoints.LG] && (0, _styles.gridItem)(props.count, 2, gutter, doubleGutter);
}, function (props) {
  return props.breakpointsStatus[_breakpoints.LG] && (0, _styles.gridItem)(props.count, 3, gutter, doubleGutter);
});