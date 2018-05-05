'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.commonWrapper = exports.fieldGroup = exports.note = exports.introWrapper = exports.form = exports.intro = exports.logo = exports.content = exports.base = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  text-align: left;\n  box-sizing: border-box;\n  width: 100%;\n'], ['\n  text-align: left;\n  box-sizing: border-box;\n  width: 100%;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  display: flex;\n  flex-wrap: wrap;\n\n  ', '\n'], ['\n  display: flex;\n  flex-wrap: wrap;\n\n  ', '\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  width: 2.3rem;\n  position: absolute;\n  top: 2px;\n  left: 0;\n'], ['\n  width: 2.3rem;\n  position: absolute;\n  top: 2px;\n  left: 0;\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  ', '\n  color: ', ';\n  margin: 0;\n  max-width: 25rem;\n  padding-left: 4rem;\n  \n  a {\n    text-decoration: underline;\n    color: ', ';\n  }\n'], ['\n  ', '\n  color: ', ';\n  margin: 0;\n  max-width: 25rem;\n  padding-left: 4rem;\n  \n  a {\n    text-decoration: underline;\n    color: ', ';\n  }\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n  max-width: 25rem;\n  margin: 0 auto;\n'], ['\n  max-width: 25rem;\n  margin: 0 auto;\n']),
    _templateObject6 = _taggedTemplateLiteral(['\n  position: relative;\n'], ['\n  position: relative;\n']),
    _templateObject7 = _taggedTemplateLiteral(['\n  ', '\n  color: ', ';\n  margin: 1rem 0 0 0;\n'], ['\n  ', '\n  color: ', ';\n  margin: 1rem 0 0 0;\n']),
    _templateObject8 = _taggedTemplateLiteral(['\n  display: flex;\n  \n  button {\n    margin-left: 0.25rem;\n    flex-shrink: 0;\n  }\n'], ['\n  display: flex;\n  \n  button {\n    margin-left: 0.25rem;\n    flex-shrink: 0;\n  }\n']),
    _templateObject9 = _taggedTemplateLiteral(['\n  \n  &:last-child {\n    margin-top: 1.5rem;\n  }\n\n  ', '\n'], ['\n  \n  &:last-child {\n    margin-top: 1.5rem;\n  }\n\n  ', '\n']);

var _styledComponents = require('styled-components');

var _polished = require('polished');

var _theme = require('../../config/theme');

var _theme2 = _interopRequireDefault(_theme);

var _typography = require('../../shared/styles/typography');

var _typography2 = _interopRequireDefault(_typography);

var _breakpoints = require('../../config/breakpoints');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var palettes = _theme2.default.palettes;
var basic = palettes.basic,
    neutral = palettes.neutral;

var gutter = '2rem';

var base = exports.base = (0, _styledComponents.css)(_templateObject);

var content = exports.content = (0, _styledComponents.css)(_templateObject2, function (props) {
  return props.breakpointsStatus[_breakpoints.MD] && '\n    margin-left: -' + gutter + ';\n    margin-right: -' + gutter + ';\n  ';
});

var logo = exports.logo = (0, _styledComponents.css)(_templateObject3);

var intro = exports.intro = (0, _styledComponents.css)(_templateObject4, _typography2.default.small, neutral.lowest, basic.primary);

var form = exports.form = (0, _styledComponents.css)(_templateObject5);

var introWrapper = exports.introWrapper = (0, _styledComponents.css)(_templateObject6);

var note = exports.note = (0, _styledComponents.css)(_templateObject7, _typography2.default.mini, (0, _polished.rgba)(neutral.lowest, .9));

var fieldGroup = exports.fieldGroup = (0, _styledComponents.css)(_templateObject8);

var commonWrapper = exports.commonWrapper = (0, _styledComponents.css)(_templateObject9, function (props) {
  return props.breakpointsStatus[_breakpoints.MD] && '\n    padding-left: ' + gutter + ';\n    padding-right: ' + gutter + ';\n    flex-basis: 50%;\n    max-width: 50%;\n    box-sizing: border-box;\n    \n    &:last-child {\n      margin-top: 0;\n      border-left: 1px solid ' + (0, _polished.rgba)(neutral.highest, .3) + ';\n    }\n  ';
});