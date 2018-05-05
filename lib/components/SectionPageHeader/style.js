'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.description = exports.icon = exports.label = exports.main = exports.title = exports.base = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  text-align: center;\n  position: relative;\n  \n  ', '\n'], ['\n  text-align: center;\n  position: relative;\n  \n  ', '\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  color: ', ';\n  margin: 0;\n  line-height: 1.1;\n  word-break: break-word;\n  ', '\n  font-weight: 600;\n'], ['\n  color: ', ';\n  margin: 0;\n  line-height: 1.1;\n  word-break: break-word;\n  ', '\n  font-weight: 600;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  position: relative;\n    \n  ', '\n'], ['\n  position: relative;\n    \n  ', '\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  ', '\n  color: ', ';\n  text-transform: uppercase;\n'], ['\n  ', '\n  color: ', ';\n  text-transform: uppercase;\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n  color: ', ';\n  margin-bottom: 0.75rem;\n  \n  ', '\n'], ['\n  color: ', ';\n  margin-bottom: 0.75rem;\n  \n  ', '\n']),
    _templateObject6 = _taggedTemplateLiteral(['\n  ', '\n  color: ', ';\n  margin: 1rem 0 0;\n  line-height: 1.5;\n  max-width: 30rem;\n'], ['\n  ', '\n  color: ', ';\n  margin: 1rem 0 0;\n  line-height: 1.5;\n  max-width: 30rem;\n']);

var _styledComponents = require('styled-components');

var _theme = require('../../config/theme');

var _theme2 = _interopRequireDefault(_theme);

var _typography = require('../../shared/styles/typography');

var _typography2 = _interopRequireDefault(_typography);

var _breakpoints = require('../../config/breakpoints');

var _polished = require('polished');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var _theme$palettes = _theme2.default.palettes,
    basic = _theme$palettes.basic,
    neutral = _theme$palettes.neutral;
var base = exports.base = (0, _styledComponents.css)(_templateObject, function (props) {
  return props.breakpointsStatus[_breakpoints.SM] && '\n    text-align: left;\n  ';
});

var title = exports.title = (0, _styledComponents.css)(_templateObject2, neutral.lowest, function (props) {
  return props.breakpointsStatus[_breakpoints.SM] ? _typography2.default.header2 : _typography2.default.header3;
});

var main = exports.main = (0, _styledComponents.css)(_templateObject3, function (props) {
  return props.breakpointsStatus[_breakpoints.SM] && '\n    display: inline-block;\n    padding-right: 5.5rem;\n  ';
});

var label = exports.label = (0, _styledComponents.css)(_templateObject4, _typography2.default.small, (0, _polished.rgba)(neutral.lowest, .9));

var icon = exports.icon = (0, _styledComponents.css)(_templateObject5, basic.tertiary, function (props) {
  return props.breakpointsStatus[_breakpoints.SM] && '\n    position: absolute;\n    right: 0;\n    top: 0;\n    margin: 0;\n  ';
});

var description = exports.description = (0, _styledComponents.css)(_templateObject6, _typography2.default.small, (0, _polished.rgba)(neutral.lowest, .9));