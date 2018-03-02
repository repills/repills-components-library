'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.compositionItem = exports.composition = exports.base = undefined;

var _templateObject = _taggedTemplateLiteral([''], ['']),
    _templateObject2 = _taggedTemplateLiteral(['\n  padding: ', ';\n  display: flex;\n  align-items: flex-end;\n  justify-content: center;\n  height: ', ';\n'], ['\n  padding: ', ';\n  display: flex;\n  align-items: flex-end;\n  justify-content: center;\n  height: ', ';\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  background-color: ', ';\n  height: ', '%;\n  width: ', ';\n  margin-right: ', ';\n  \n  &::last-child {\n    margin-right: 0;\n  }\n'], ['\n  background-color: ', ';\n  height: ', '%;\n  width: ', ';\n  margin-right: ', ';\n  \n  &::last-child {\n    margin-right: 0;\n  }\n']);

var _styledComponents = require('styled-components');

var _utils = require('../../utils');

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var base = exports.base = (0, _styledComponents.css)(_templateObject);

var composition = exports.composition = (0, _styledComponents.css)(_templateObject2, (0, _utils.extRem)(0, 12), function (props) {
  return (0, _utils.extRem)(props.height);
});

var compositionItem = exports.compositionItem = (0, _styledComponents.css)(_templateObject3, function (props) {
  return props.color;
}, function (props) {
  return props.percentage;
}, function (props) {
  return (0, _utils.extRem)(props.width);
}, (0, _utils.extRem)(3));