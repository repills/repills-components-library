'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.commonWrapper = exports.note = exports.form = exports.label = exports.intro = exports.logo = exports.action = exports.content = exports.base = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  text-align: left;\n  box-sizing: border-box;\n  width: 100%;\n'], ['\n  text-align: left;\n  box-sizing: border-box;\n  width: 100%;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  display: flex;\n  flex-wrap: wrap;\n  \n  ', '\n'], ['\n  display: flex;\n  flex-wrap: wrap;\n  \n  ', '\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  margin-top: ', ';\n'], ['\n  margin-top: ', ';\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  max-width: ', ';\n'], ['\n  max-width: ', ';\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n  ', '\n  color: ', ';\n  margin: ', ' 0 0 0;\n  max-width: ', ';\n'], ['\n  ', '\n  color: ', ';\n  margin: ', ' 0 0 0;\n  max-width: ', ';\n']),
    _templateObject6 = _taggedTemplateLiteral(['\n  ', '\n  color: ', ';\n  display: block;\n  line-height: 1.3;\n'], ['\n  ', '\n  color: ', ';\n  display: block;\n  line-height: 1.3;\n']),
    _templateObject7 = _taggedTemplateLiteral(['\n  max-width: ', ';\n  margin-top: ', ';\n'], ['\n  max-width: ', ';\n  margin-top: ', ';\n']),
    _templateObject8 = _taggedTemplateLiteral(['\n  ', '\n  color: ', ';\n  margin: ', ' 0 0 0;\n'], ['\n  ', '\n  color: ', ';\n  margin: ', ' 0 0 0;\n']),
    _templateObject9 = _taggedTemplateLiteral(['\n\n  &:last-child {\n    margin-top: ', ';\n  }\n\n  ', '\n'], ['\n\n  &:last-child {\n    margin-top: ', ';\n  }\n\n  ', '\n']);

var _styledComponents = require('styled-components');

var _utils = require('../../utils');

var _theme = require('../../config/theme');

var _theme2 = _interopRequireDefault(_theme);

var _typography = require('../../shared/styles/typography');

var _typography2 = _interopRequireDefault(_typography);

var _breakpoints = require('../../config/breakpoints');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var palettes = _theme2.default.palettes;
var neutral = palettes.neutral;

var gutter = (0, _utils.extRem)(12);

var base = exports.base = (0, _styledComponents.css)(_templateObject);

var content = exports.content = (0, _styledComponents.css)(_templateObject2, function (props) {
  return props.breakpointsStatus[_breakpoints.MD] && '\n    margin-left: -' + gutter + ';\n    margin-right: -' + gutter + ';\n  ';
});

var action = exports.action = (0, _styledComponents.css)(_templateObject3, (0, _utils.extRem)(20));

var logo = exports.logo = (0, _styledComponents.css)(_templateObject4, (0, _utils.extRem)(180));

var intro = exports.intro = (0, _styledComponents.css)(_templateObject5, _typography2.default.small, neutral.lowest, (0, _utils.extRem)(28), (0, _utils.extRem)(380));

var label = exports.label = (0, _styledComponents.css)(_templateObject6, _typography2.default.header4, neutral.lowest);

var form = exports.form = (0, _styledComponents.css)(_templateObject7, (0, _utils.extRem)(350), (0, _utils.extRem)(32));

var note = exports.note = (0, _styledComponents.css)(_templateObject8, _typography2.default.mini, neutral.medium, (0, _utils.extRem)(16));

var commonWrapper = exports.commonWrapper = (0, _styledComponents.css)(_templateObject9, (0, _utils.extRem)(28), function (props) {
  return props.breakpointsStatus[_breakpoints.MD] && '\n    padding-left: ' + gutter + ';\n    padding-right: ' + gutter + ';\n    flex-basis: 50%;\n    max-width: 50%;\n    box-sizing: border-box;\n    \n    &:last-child {\n      margin-top: 0;\n    }\n  ';
});