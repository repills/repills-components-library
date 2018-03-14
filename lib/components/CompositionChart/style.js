'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.compositionItem = exports.composition = exports.base = undefined;

var _templateObject = _taggedTemplateLiteral([''], ['']),
    _templateObject2 = _taggedTemplateLiteral(['\n  padding: ', ';\n  display: flex;\n  align-items: flex-end;\n  justify-content: center;\n  height: ', ';\n'], ['\n  padding: ', ';\n  display: flex;\n  align-items: flex-end;\n  justify-content: center;\n  height: ', ';\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  background-color: ', ';\n  height: 100%;\n  width: ', ';\n  margin-right: ', ';\n  \n  position: relative;\n  \n  &::last-child {\n    margin-right: 0;\n  }\n  \n  &::after {\n    content: \'\';\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    background-color: ', ';\n    height: ', '%;\n  }\n'], ['\n  background-color: ', ';\n  height: 100%;\n  width: ', ';\n  margin-right: ', ';\n  \n  position: relative;\n  \n  &::last-child {\n    margin-right: 0;\n  }\n  \n  &::after {\n    content: \'\';\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    background-color: ', ';\n    height: ', '%;\n  }\n']);

var _styledComponents = require('styled-components');

var _polished = require('polished');

var _utils = require('../../utils');

var _theme = require('../../config/theme');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var neutral = _theme2.default.palettes.neutral;
var base = exports.base = (0, _styledComponents.css)(_templateObject);

var composition = exports.composition = (0, _styledComponents.css)(_templateObject2, (0, _utils.extRem)(0, 12), function (props) {
  return (0, _utils.extRem)(props.height);
});

var compositionItem = exports.compositionItem = (0, _styledComponents.css)(_templateObject3, (0, _polished.darken)(0.04, neutral.lower), function (props) {
  return (0, _utils.extRem)(props.width);
}, (0, _utils.extRem)(2), function (props) {
  return props.color;
}, function (props) {
  return props.percentage;
});