'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.text = exports.icon = exports.base = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  color: ', ';\n  text-decoration: none;\n  padding: 1rem;\n  cursor: ', ';\n  position: relative;\n  border: 1px solid ', ';\n  user-select: none;\n  text-align: center;\n  border-radius: 5px;\n  // display: flex;\n  // justify-content: center;\n  \n  &:hover {\n    box-shadow: 0 2px 10px 0 rgba(0,0,0,0.05);\n  }\n\n  &::after {\n    background-color: ', ';\n    content: \'\';\n    position: absolute;\n    right: -1px;\n    left: -1px;\n    bottom: -1px;\n    height: ', ';\n    border-radius: 0 0 5px 5px;\n  }\n'], ['\n  color: ', ';\n  text-decoration: none;\n  padding: 1rem;\n  cursor: ', ';\n  position: relative;\n  border: 1px solid ', ';\n  user-select: none;\n  text-align: center;\n  border-radius: 5px;\n  // display: flex;\n  // justify-content: center;\n  \n  &:hover {\n    box-shadow: 0 2px 10px 0 rgba(0,0,0,0.05);\n  }\n\n  &::after {\n    background-color: ', ';\n    content: \'\';\n    position: absolute;\n    right: -1px;\n    left: -1px;\n    bottom: -1px;\n    height: ', ';\n    border-radius: 0 0 5px 5px;\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  line-height: 0;\n  opacity: ', ';\n'], ['\n  line-height: 0;\n  opacity: ', ';\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  ', '\n  ', '\n  color: ', ';\n  margin-top: ', ';\n  line-height: 1;\n  text-transform: uppercase;\n'], ['\n  ', '\n  ', '\n  color: ', ';\n  margin-top: ', ';\n  line-height: 1;\n  text-transform: uppercase;\n']);

var _styledComponents = require('styled-components');

var _polished = require('polished');

var _theme = require('../../config/theme');

var _theme2 = _interopRequireDefault(_theme);

var _utils = require('../../utils');

var _typography = require('../../shared/styles/typography');

var _typography2 = _interopRequireDefault(_typography);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var neutral = _theme2.default.palettes.neutral;
var base = exports.base = (0, _styledComponents.css)(_templateObject, function (props) {
  return props.active ? props.color : neutral.high;
}, function (props) {
  return props.active ? 'default' : 'pointer';
}, neutral.low, function (props) {
  return props.color;
}, (0, _utils.extRem)(4));

var icon = exports.icon = (0, _styledComponents.css)(_templateObject2, function (props) {
  return props.active ? 1 : 0.4;
});

var text = exports.text = (0, _styledComponents.css)(_templateObject3, (0, _polished.ellipsis)(), _typography2.default.small, neutral.medium, (0, _utils.extRem)(12));