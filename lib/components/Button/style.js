'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.base = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  ', ';\n  align-items: center;\n  background: none;\n  // border-radius: ', 'rem;\n  border: 3px solid ', ';\n  box-sizing: border-box;\n  color: ', ';\n  cursor: pointer;\n  display: inline-flex;\n  height: ', ';\n  justify-content: center;\n  min-width: ', ';\n  outline: none;\n  padding: 0 ', ';\n  width: ', ';\n  \n  ', '\n  \n  ', '\n  \n  ', '\n'], ['\n  ', ';\n  align-items: center;\n  background: none;\n  // border-radius: ', 'rem;\n  border: 3px solid ', ';\n  box-sizing: border-box;\n  color: ', ';\n  cursor: pointer;\n  display: inline-flex;\n  height: ', ';\n  justify-content: center;\n  min-width: ', ';\n  outline: none;\n  padding: 0 ', ';\n  width: ', ';\n  \n  ', '\n  \n  ', '\n  \n  ', '\n']);

var _polished = require('polished');

var _styledComponents = require('styled-components');

var _utils = require('../../utils');

var _theme = require('../../config/theme');

var _theme2 = _interopRequireDefault(_theme);

var _typography = require('../../shared/styles/typography');

var _typography2 = _interopRequireDefault(_typography);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var _theme$palettes = _theme2.default.palettes,
    basic = _theme$palettes.basic,
    neutral = _theme$palettes.neutral;


var height = {
  M: (0, _utils.extRem)(40),
  L: (0, _utils.extRem)(60)
};

var minWidth = {
  M: (0, _utils.extRem)(150),
  L: (0, _utils.extRem)(220)
};

var base = exports.base = (0, _styledComponents.css)(_templateObject, _typography2.default.body, function (props) {
  return (0, _polished.stripUnit)(height[props.size]) / 2;
}, basic.primary, neutral.lowest, function (props) {
  return height[props.size];
}, function (props) {
  return minWidth[props.size];
}, (0, _utils.extRem)(30), function (props) {
  return props.expanded ? '100%' : 'auto';
}, function (props) {
  return !props.disabled && '\n    &:hover {\n      color: ' + basic.secondary + '\n  }';
}, function (props) {
  return !props.outline && '\n    background-color: ' + basic.primary + ';\n    color: ' + neutral.lowest + ';\n  ';
}, function (props) {
  return props.disabled && '\n    opacity: .5;\n    cursor: default;\n  ';
});