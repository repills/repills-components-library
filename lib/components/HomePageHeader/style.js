'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.box = exports.typeBlock = exports.typeList = exports.description = exports.title = exports.content = exports.base = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  position: relative;\n  text-align: left;\n'], ['\n  position: relative;\n  text-align: left;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n'], ['\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  ', '\n  color: ', ';\n  margin: 0;\n  font-weight: 400;\n  \n  ', '\n'], ['\n  ', '\n  color: ', ';\n  margin: 0;\n  font-weight: 400;\n  \n  ', '\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  ', '\n  color: ', ';\n  line-height: 1.5;\n  max-width: 40rem;\n  margin: 1.5rem 0 0;\n'], ['\n  ', '\n  color: ', ';\n  line-height: 1.5;\n  max-width: 40rem;\n  margin: 1.5rem 0 0;\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  margin: 1rem -1rem 0;\n  \n  > div {\n    padding: 0 1rem;\n    flex-basis: 25%;\n    max-width: 25%;\n    box-sizing: border-box;\n  }\n  \n  ', '\n  \n  ', '\n'], ['\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  margin: 1rem -1rem 0;\n  \n  > div {\n    padding: 0 1rem;\n    flex-basis: 25%;\n    max-width: 25%;\n    box-sizing: border-box;\n  }\n  \n  ', '\n  \n  ', '\n']),
    _templateObject6 = _taggedTemplateLiteral(['\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  color: ', ';\n  margin-top: 1.25rem;\n\n  span {\n    ', '\n    color: ', ';\n    margin-top: 0.75rem;\n    line-height: 1;\n  }\n'], ['\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  color: ', ';\n  margin-top: 1.25rem;\n\n  span {\n    ', '\n    color: ', ';\n    margin-top: 0.75rem;\n    line-height: 1;\n  }\n']),
    _templateObject7 = _taggedTemplateLiteral(['\n  flex-basis: 100%;\n  max-width: 100%;\n  box-sizing: border-box;\n\n  ', '\n'], ['\n  flex-basis: 100%;\n  max-width: 100%;\n  box-sizing: border-box;\n\n  ', '\n']);

var _styledComponents = require('styled-components');

var _theme = require('../../config/theme');

var _theme2 = _interopRequireDefault(_theme);

var _polished = require('polished');

var _typography = require('../../shared/styles/typography');

var _typography2 = _interopRequireDefault(_typography);

var _breakpoints = require('../../config/breakpoints');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var _theme$palettes = _theme2.default.palettes,
    basic = _theme$palettes.basic,
    neutral = _theme$palettes.neutral;
var base = exports.base = (0, _styledComponents.css)(_templateObject);

var content = exports.content = (0, _styledComponents.css)(_templateObject2);

var title = exports.title = (0, _styledComponents.css)(_templateObject3, _typography2.default.header3, neutral.lowest, function (props) {
  return props.breakpointsStatus[_breakpoints.LG] && '\n    ' + _typography2.default.header2 + '\n    font-weight: 400;\n  ';
});

var description = exports.description = (0, _styledComponents.css)(_templateObject4, _typography2.default.body, (0, _polished.rgba)(neutral.lowest, .9));

var typeList = exports.typeList = (0, _styledComponents.css)(_templateObject5, function (props) {
  return props.breakpointsStatus[_breakpoints.MD] && '\n    > div {\n      flex-basis: 12.5%;\n      max-width: 12.5%;\n    }\n  ';
}, function (props) {
  return props.breakpointsStatus[_breakpoints.LG] && '\n    justify-content: center;\n    margin-top: -1.25rem;\n    max-width: 25rem;\n    \n    > div {\n      flex-basis: 25%;\n      max-width: 25%;\n    }\n  ';
});

var typeBlock = exports.typeBlock = (0, _styledComponents.css)(_templateObject6, (0, _polished.rgba)(basic.primary, .9), _typography2.default.mini, (0, _polished.rgba)(neutral.lowest, .9));

var box = exports.box = (0, _styledComponents.css)(_templateObject7, function (props) {
  return props.breakpointsStatus[_breakpoints.LG] && '\n    flex-basis: 50%;\n    max-width: 50%;\n    \n    &:last-child {\n      display: flex;\n      align-items: center;\n      flex-direction: column;\n      padding-left: 1rem;\n    }\n  ';
});