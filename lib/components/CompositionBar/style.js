'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.compositionItem = exports.composition = exports.base = undefined;

var _templateObject = _taggedTemplateLiteral([''], ['']),
    _templateObject2 = _taggedTemplateLiteral(['\n  display: flex;\n  overflow: hidden;\n'], ['\n  display: flex;\n  overflow: hidden;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  height: ', ';  \n  position: relative;  \n  width: ', '%;\n  background-color: ', ';\n'], ['\n  height: ', ';  \n  position: relative;  \n  width: ', '%;\n  background-color: ', ';\n']);

var _styledComponents = require('styled-components');

var _utils = require('../../utils');

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var base = exports.base = (0, _styledComponents.css)(_templateObject);

var composition = exports.composition = (0, _styledComponents.css)(_templateObject2);

var compositionItem = exports.compositionItem = (0, _styledComponents.css)(_templateObject3, function (props) {
  return (0, _utils.extRem)(props.height);
}, function (props) {
  return props.percentage;
}, function (props) {
  return props.color;
});