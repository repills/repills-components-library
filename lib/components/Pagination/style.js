'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.button = exports.base = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  display: inline-flex;\n  align-items: center;\n  // box-shadow: 0 2px 10px 0 rgba(0,0,0,0.05);\n'], ['\n  display: inline-flex;\n  align-items: center;\n  // box-shadow: 0 2px 10px 0 rgba(0,0,0,0.05);\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  ', '\n  ', '\n  outline: 0;\n  border: 0;\n  background: none;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  color: ', ';\n  padding: 0;\n  cursor: pointer;\n  \n  ', '\n  \n  ', '\n  \n  &:first-child {\n    margin-left: 0;\n  }\n'], ['\n  ', '\n  ', '\n  outline: 0;\n  border: 0;\n  background: none;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  color: ', ';\n  padding: 0;\n  cursor: pointer;\n  \n  ', '\n  \n  ', '\n  \n  &:first-child {\n    margin-left: 0;\n  }\n']);

var _styledComponents = require('styled-components');

var _utils = require('../../utils');

var _theme = require('../../config/theme');

var _theme2 = _interopRequireDefault(_theme);

var _polished = require('polished');

var _typography = require('../../shared/styles/typography');

var _typography2 = _interopRequireDefault(_typography);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var palettes = _theme2.default.palettes;
var basic = palettes.basic,
    neutral = palettes.neutral;
var base = exports.base = (0, _styledComponents.css)(_templateObject);

var button = exports.button = (0, _styledComponents.css)(_templateObject2, _typography2.default.body, (0, _polished.size)((0, _utils.extRem)(36)), neutral.high, function (props) {
  return props.active && '\n    background-color: ' + basic.primary + ';\n    color: ' + neutral.lowest + ';\n    border: 1px solid ' + basic.primary + ';\n    position: relative;\n    z-index: 1;\n  ';
}, function (props) {
  return props.disabled && '\n    opacity: .4;\n    cursor: default;\n  ';
});