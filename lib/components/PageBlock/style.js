'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.body = exports.description = exports.count = exports.title = exports.action = exports.info = exports.content = exports.base = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  text-align: left;\n'], ['\n  text-align: left;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  \n  ', '\n'], ['\n  \n  ', '\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  ', '\n'], ['\n  ', '\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  ', '\n  flex: 1 1 auto;\n'], ['\n  ', '\n  flex: 1 1 auto;\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n  ', '\n  flex-shrink: 0;\n'], ['\n  ', '\n  flex-shrink: 0;\n']),
    _templateObject6 = _taggedTemplateLiteral(['\n  ', '\n  color: ', ';\n  line-height: 1.2;\n  margin: 0 0 0.5rem;\n  display: flex;\n  ', ';\n  \n  ', '\n'], ['\n  ', '\n  color: ', ';\n  line-height: 1.2;\n  margin: 0 0 0.5rem;\n  display: flex;\n  ', ';\n  \n  ', '\n']),
    _templateObject7 = _taggedTemplateLiteral(['\n  display: inline-block;\n  align-items: center;\n  justify-content: center;\n  height; ', ';\n  line-height: ', ';\n  color: ', ';\n  padding-left: 0.75rem;\n  border-left: 1px solid ', ';\n'], ['\n  display: inline-block;\n  align-items: center;\n  justify-content: center;\n  height; ', ';\n  line-height: ', ';\n  color: ', ';\n  padding-left: 0.75rem;\n  border-left: 1px solid ', ';\n']),
    _templateObject8 = _taggedTemplateLiteral(['\n  ', '\n  display: flex;\n  color: ', ';\n  margin: 0.5rem ', ' 1rem;\n  line-height: 1.4;\n  ', ';\n  \n  p {\n    margin: 0;\n    max-width: 44rem;\n  }\n'], ['\n  ', '\n  display: flex;\n  color: ', ';\n  margin: 0.5rem ', ' 1rem;\n  line-height: 1.4;\n  ', ';\n  \n  p {\n    margin: 0;\n    max-width: 44rem;\n  }\n']),
    _templateObject9 = _taggedTemplateLiteral(['\n  ', '\n  color: ', ';\n  margin-top: 1.5rem;\n  \n  ', '\n'], ['\n  ', '\n  color: ', ';\n  margin-top: 1.5rem;\n  \n  ', '\n']);

var _styledComponents = require('styled-components');

var _theme = require('../../config/theme');

var _theme2 = _interopRequireDefault(_theme);

var _typography = require('../../shared/styles/typography');

var _typography2 = _interopRequireDefault(_typography);

var _breakpoints = require('../../config/breakpoints');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var align = {
  LEFT: {
    justifyContent: 'flex-start',
    textAlign: 'left'
  },
  CENTER: {
    justifyContent: 'center',
    textAlign: 'center'
  }
};

var neutral = _theme2.default.palettes.neutral;

var sideCount = '1.75rem';
var base = exports.base = (0, _styledComponents.css)(_templateObject);

var content = exports.content = (0, _styledComponents.css)(_templateObject2, function (props) {
  return props.breakpointsStatus[_breakpoints.MD] && '\n    display: flex;\n    flex-wrap: wrap;\n    margin-left: -1rem;\n    margin-right: -1rem;\n  ';
});

var commonBox = (0, _styledComponents.css)(_templateObject3, function (props) {
  return props.breakpointsStatus[_breakpoints.MD] && '\n    padding-left: 1rem;\n    padding-right: 1rem;\n  ';
});

var info = exports.info = (0, _styledComponents.css)(_templateObject4, commonBox);

var action = exports.action = (0, _styledComponents.css)(_templateObject5, commonBox);

var title = exports.title = (0, _styledComponents.css)(_templateObject6, _typography2.default.header4, neutral.higher, function (props) {
  return align[props.align];
}, function (props) {
  return props.count && '\n    span {\n      margin-right: 0.75rem;\n    }\n  ';
});

var count = exports.count = (0, _styledComponents.css)(_templateObject7, sideCount, sideCount, neutral.higher, neutral.low);

var description = exports.description = (0, _styledComponents.css)(_templateObject8, _typography2.default.body, neutral.medium, function (props) {
  return props.size === 'CENTER' ? 'auto' : '0';
}, function (props) {
  return align[props.align];
});

var body = exports.body = (0, _styledComponents.css)(_templateObject9, _typography2.default.body, neutral.high, function (props) {
  return !props.simple && '\n    border-top: 1px solid ' + neutral.low + ';\n    padding-top: 1.5rem;\n  ';
});