'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.base = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  position: relative;\n  \n  ', '\n  \n  ', '\n  \n  ', '\n'], ['\n  position: relative;\n  \n  ', '\n  \n  ', '\n  \n  ', '\n']);

var _styledComponents = require('styled-components');

var _theme = require('../../config/theme');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var neutral = _theme2.default.palettes.neutral;
var base = exports.base = (0, _styledComponents.css)(_templateObject, function (props) {
  return (props.position === 'absolute' || props.position === 'fixed') && '\n    background-color: ' + neutral.lowest + ';\n    top: 0;\n    left; 0;\n    bottom: 0;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 100%;\n    z-index: ' + _theme2.default.zIndex.overlay + ';\n  ';
}, function (props) {
  return props.position === 'fixed' && '\n    position: fixed;\n  ';
}, function (props) {
  return props.position === 'absolute' && '\n    position: absolute;\n  ';
});