'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.description = exports.icon = exports.label = exports.titleContainer = exports.main = exports.title = exports.base = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  padding: ', ' 0;\n  text-align: center;\n  \n  ', '\n'], ['\n  padding: ', ' 0;\n  text-align: center;\n  \n  ', '\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  ', '\n  color: ', ';\n  margin: 0;\n  line-height: 1.1;\n  word-break: break-word;\n  margin-left: ', ';\n'], ['\n  ', '\n  color: ', ';\n  margin: 0;\n  line-height: 1.1;\n  word-break: break-word;\n  margin-left: ', ';\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  position: relative;\n    \n  ', '\n'], ['\n  position: relative;\n    \n  ', '\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n\n'], ['\n\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n  ', '\n  color: ', ';\n  text-transform: uppercase;\n'], ['\n  ', '\n  color: ', ';\n  text-transform: uppercase;\n']),
    _templateObject6 = _taggedTemplateLiteral(['\n  color: ', ';\n  margin-bottom: ', ';\n  \n  ', '\n'], ['\n  color: ', ';\n  margin-bottom: ', ';\n  \n  ', '\n']),
    _templateObject7 = _taggedTemplateLiteral(['\n  ', '\n  color: ', ';\n  margin: ', ' 0 0;\n  line-height: 1.5;\n  max-width: ', ';\n'], ['\n  ', '\n  color: ', ';\n  margin: ', ' 0 0;\n  line-height: 1.5;\n  max-width: ', ';\n']);

var _styledComponents = require('styled-components');

var _utils = require('../../utils');

var _polished = require('polished');

var _theme = require('../../config/theme');

var _theme2 = _interopRequireDefault(_theme);

var _typography = require('../../shared/styles/typography');

var _typography2 = _interopRequireDefault(_typography);

var _styledComponentsGrid = require('styled-components-grid');

var _breakpoints = require('../../config/breakpoints');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var _theme$palettes = _theme2.default.palettes,
    basic = _theme$palettes.basic,
    types = _theme$palettes.types,
    neutral = _theme$palettes.neutral;
var base = exports.base = (0, _styledComponents.css)(_templateObject, (0, _utils.extRem)(40), function (props) {
  return props.breakpointsStatus[_breakpoints.MD] && '\n    text-align: left;\n    padding: ' + (0, _utils.extRem)(60) + ' 0;\n  ';
});

var title = exports.title = (0, _styledComponents.css)(_templateObject2, _typography2.default.header2, neutral.highest, (0, _utils.extRem)(-3));

// ${typography.header1}

var main = exports.main = (0, _styledComponents.css)(_templateObject3, function (props) {
  return props.breakpointsStatus[_breakpoints.MD] && '\n    display: inline-block;\n    padding-right: ' + (0, _utils.extRem)(100) + ';\n  ';
});

var titleContainer = exports.titleContainer = (0, _styledComponents.css)(_templateObject4);

var label = exports.label = (0, _styledComponents.css)(_templateObject5, _typography2.default.body, neutral.mediumHigh);

var icon = exports.icon = (0, _styledComponents.css)(_templateObject6, function (props) {
  return props.color;
}, (0, _utils.extRem)(12), function (props) {
  return props.breakpointsStatus[_breakpoints.MD] && '\n    position: absolute;\n    right: 0;\n    top: 0;\n  ';
});

var description = exports.description = (0, _styledComponents.css)(_templateObject7, _typography2.default.body, neutral.highest, (0, _utils.extRem)(24), (0, _utils.extRem)(500));