'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.input = exports.icon = exports.base = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  box-sizing: border-box;\n  border: 1px solid ', ';\n  border-bottom: 0;\n  padding-bottom: 3px;\n  width: ', ';\n  position: relative;\n  box-shadow: 0 2px 10px 0 rgba(0,0,0,0.05);\n  \n  &::after {\n    content: \'\';\n    height: 3px;\n    position: absolute;\n    bottom: 0;\n    right: -1px;\n    left: -1px;\n    background-color: ', ';\n    \n    ', '    \n    \n    ', '\n  }\n'], ['\n  box-sizing: border-box;\n  border: 1px solid ', ';\n  border-bottom: 0;\n  padding-bottom: 3px;\n  width: ', ';\n  position: relative;\n  box-shadow: 0 2px 10px 0 rgba(0,0,0,0.05);\n  \n  &::after {\n    content: \'\';\n    height: 3px;\n    position: absolute;\n    bottom: 0;\n    right: -1px;\n    left: -1px;\n    background-color: ', ';\n    \n    ', '    \n    \n    ', '\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  ', '\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: absolute;\n  top: 0;\n  right: 0;\n  \n  color: ', ';\n'], ['\n  ', '\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: absolute;\n  top: 0;\n  right: 0;\n  \n  color: ', ';\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  ', '\n  box-sizing: border-box;\n  border: 0;\n  width: 100%;\n  color: ', ';\n  height: ', ';\n  line-height: ', ';\n  padding: 0 ', ';\n  display: inline-flex;\n  align-items: center;\n  box-shadow: none;\n  width: 100%;\n  \n  ', '\n    \n  ', '\n  \n  &:focus {\n    outline: 0;\n    box-shadow: 0;\n  }\n  \n  &::placeholder {\n    color: ', ';\n  }\n  \n  ', '\n'], ['\n  ', '\n  box-sizing: border-box;\n  border: 0;\n  width: 100%;\n  color: ', ';\n  height: ', ';\n  line-height: ', ';\n  padding: 0 ', ';\n  display: inline-flex;\n  align-items: center;\n  box-shadow: none;\n  width: 100%;\n  \n  ', '\n    \n  ', '\n  \n  &:focus {\n    outline: 0;\n    box-shadow: 0;\n  }\n  \n  &::placeholder {\n    color: ', ';\n  }\n  \n  ', '\n']);

var _styledComponents = require('styled-components');

var _utils = require('../../utils');

var _polished = require('polished');

var _theme = require('../../config/theme');

var _theme2 = _interopRequireDefault(_theme);

var _typography = require('../../shared/styles/typography');

var _typography2 = _interopRequireDefault(_typography);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var palettes = _theme2.default.palettes;
var basic = palettes.basic,
    neutral = palettes.neutral,
    status = palettes.status;


var variant = {
  'M': {
    height: (0, _utils.extRem)(36),
    sidePadding: (0, _utils.extRem)(12),
    maxWidth: (0, _utils.extRem)(200)
  },
  'L': {
    height: (0, _utils.extRem)(56),
    sidePadding: (0, _utils.extRem)(24),
    maxWidth: (0, _utils.extRem)(300)
  }
};

var base = exports.base = (0, _styledComponents.css)(_templateObject, neutral.medium, function (props) {
  return props.expanded ? '100%' : variant[props.size].maxWidth;
}, neutral.medium, function (props) {
  return props.filled && '\n      background-color: ' + (props.disabled ? neutral.medium : basic.primary) + ';\n    ';
}, function (props) {
  return typeof props.hasError === 'boolean' && '\n      background-color: ' + (props.hasError ? status.danger : status.ok) + ';\n    ';
});

var icon = exports.icon = (0, _styledComponents.css)(_templateObject2, function (props) {
  return (0, _polished.size)(variant[props.size].height);
}, function (props) {
  return props.hasError ? status.danger : status.ok;
});

var input = exports.input = (0, _styledComponents.css)(_templateObject3, _typography2.default.body, neutral.highest, function (props) {
  return variant[props.size].height;
}, function (props) {
  return variant[props.size].height;
}, function (props) {
  return variant[props.size].sidePadding;
}, function (props) {
  return props.hasIcon && '\n    padding-right: ' + variant[props.size].height + ';\n  ';
}, function (props) {
  return !props.disabled && !props.readOnly && '\n  &:hover {\n    border-color: ' + basic.primary + ';\n  }';
}, neutral.mediumHigh, function (props) {
  return (props.disabled || props.readOnly) && '\n    background-color: ' + neutral.lower + ';\n  ';
});