'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.selectButton = exports.title = exports.base = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  user-select: none;\n  box-sizing: border-box;\n  text-align: left;\n  padding: ', ';\n  border: 1px solid ', ';\n  cursor: pointer;\n  background-color: ', ';\n  color: ', ';\n  position: relative;\n  display: flex;\n  align-items: center;\n  height: 100%;\n  \n  &::after {\n    display: ', ';\n    content: \'\';\n    height: ', ';\n    bottom: -1px;\n    left: -1px;\n    right: -1px;\n    position: absolute;\n    background-color: ', ';\n  }\n  \n  ', '\n  \n  &:hover {\n    background-color: ', ';\n    box-shadow: 0 2px 10px 0 rgba(0,0,0,0.05);\n  }\n'], ['\n  user-select: none;\n  box-sizing: border-box;\n  text-align: left;\n  padding: ', ';\n  border: 1px solid ', ';\n  cursor: pointer;\n  background-color: ', ';\n  color: ', ';\n  position: relative;\n  display: flex;\n  align-items: center;\n  height: 100%;\n  \n  &::after {\n    display: ', ';\n    content: \'\';\n    height: ', ';\n    bottom: -1px;\n    left: -1px;\n    right: -1px;\n    position: absolute;\n    background-color: ', ';\n  }\n  \n  ', '\n  \n  &:hover {\n    background-color: ', ';\n    box-shadow: 0 2px 10px 0 rgba(0,0,0,0.05);\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  ', '\n  margin: ', ';\n'], ['\n  ', '\n  margin: ', ';\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  ', '\n  color: ', ';\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n'], ['\n  ', '\n  color: ', ';\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n']);

var _styledComponents = require('styled-components');

var _utils = require('../../utils');

var _theme = require('../../config/theme');

var _theme2 = _interopRequireDefault(_theme);

var _typography = require('../../shared/styles/typography');

var _typography2 = _interopRequireDefault(_typography);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var palettes = _theme2.default.palettes;
var status = palettes.status,
    neutral = palettes.neutral;
var base = exports.base = (0, _styledComponents.css)(_templateObject, (0, _utils.extRem)(16), neutral.low, neutral.lowest, neutral.high, function (props) {
  return props.checked ? 'block' : 'none';
}, (0, _utils.extRem)(4), status.ok, function (props) {
  return props.checked && '\n    box-shadow: 0 2px 10px 0 rgba(0,0,0,0.05);\n  ';
}, neutral.lowest);

var title = exports.title = (0, _styledComponents.css)(_templateObject2, _typography2.default.body, (0, _utils.extRem)(0, 0, 0, 12));

var selectButton = exports.selectButton = (0, _styledComponents.css)(_templateObject3, _typography2.default.small, neutral.high);