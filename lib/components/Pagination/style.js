'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.button = exports.base = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  display: flex;\n  align-items: center;\n  justify-content: center;\n'], ['\n  display: flex;\n  align-items: center;\n  justify-content: center;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  ', '\n  ', '\n  outline: 0;\n  border: 0;\n  background: none;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0;\n  cursor: pointer;\n  text-decoration: none;\n  color: ', ';\n  border-radius: 5px;\n\n  ', '\n  \n  ', '\n  \n  ', '\n  \n  &:first-child {\n    margin-left: 0;\n  }\n'], ['\n  ', '\n  ', '\n  outline: 0;\n  border: 0;\n  background: none;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0;\n  cursor: pointer;\n  text-decoration: none;\n  color: ', ';\n  border-radius: 5px;\n\n  ', '\n  \n  ', '\n  \n  ', '\n  \n  &:first-child {\n    margin-left: 0;\n  }\n']);

var _styledComponents = require('styled-components');

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

var button = exports.button = (0, _styledComponents.css)(_templateObject2, _typography2.default.body, (0, _polished.size)('2.25rem'), neutral.higher, function (props) {
  return props.active && '\n    background-color: ' + basic.tertiary + ';\n    color: ' + neutral.lowest + ';\n    position: relative;\n    z-index: 1;\n  ';
}, function (props) {
  return props.disabled && '\n    opacity: .4;\n    cursor: default;\n  ';
}, function (props) {
  return !props.disabled && !props.active && '\n    &:hover {\n      background-color: ' + neutral.lower + ';\n    }\n  ';
});