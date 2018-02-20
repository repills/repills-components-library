'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.arrowLeft = exports.arrowRight = exports.arrowDown = exports.arrowUp = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  width: 0;\n  height: 0;\n  border-left: ', ' solid transparent;\n  border-right: ', ' solid transparent;\n  border-bottom: ', ' solid currentColor;\n'], ['\n  width: 0;\n  height: 0;\n  border-left: ', ' solid transparent;\n  border-right: ', ' solid transparent;\n  border-bottom: ', ' solid currentColor;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  width: 0;\n  height: 0;\n  border-left: ', ' solid transparent;\n  border-right: ', ' solid transparent;\n  border-top: ', ' solid currentColor;\n'], ['\n  width: 0;\n  height: 0;\n  border-left: ', ' solid transparent;\n  border-right: ', ' solid transparent;\n  border-top: ', ' solid currentColor;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  width: 0;\n  height: 0;\n  border-top: ', ' solid transparent;\n  border-bottom: ', ' solid transparent;\n  border-right: ', ' solid currentColor;\n'], ['\n  width: 0;\n  height: 0;\n  border-top: ', ' solid transparent;\n  border-bottom: ', ' solid transparent;\n  border-right: ', ' solid currentColor;\n']);

var _styledComponents = require('styled-components');

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var arrowUp = exports.arrowUp = function arrowUp(size) {
  return (0, _styledComponents.css)(_templateObject, size, size, size);
};

var arrowDown = exports.arrowDown = function arrowDown(size) {
  return (0, _styledComponents.css)(_templateObject2, size, size, size);
};

var arrowRight = exports.arrowRight = function arrowRight(size) {
  return (0, _styledComponents.css)(_templateObject2, size, size, size);
};

var arrowLeft = exports.arrowLeft = function arrowLeft(size) {
  return (0, _styledComponents.css)(_templateObject3, size, size, size);
};