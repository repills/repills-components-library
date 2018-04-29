'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.logo = exports.typeBlock = exports.typeList = exports.description = exports.subTitle = exports.title = exports.base = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  padding: ', ' 0;\n  text-align: left;\n  position: relative;\n  \n  ', '\n'], ['\n  padding: ', ' 0;\n  text-align: left;\n  position: relative;\n  \n  ', '\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  ', '\n  color: ', ';\n  margin: 0;\n  line-height: 1.1;\n  font-weight: 600;\n  \n  strong {\n    color: ', ';\n  }\n  \n  ', '\n  \n  ', '\n'], ['\n  ', '\n  color: ', ';\n  margin: 0;\n  line-height: 1.1;\n  font-weight: 600;\n  \n  strong {\n    color: ', ';\n  }\n  \n  ', '\n  \n  ', '\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  ', '\n  color: ', ';\n  font-weight: 500;\n  line-height: 1.2;\n  margin: ', ' 0 0;\n  \n  strong {\n    font-weight: bold;\n  }\n'], ['\n  ', '\n  color: ', ';\n  font-weight: 500;\n  line-height: 1.2;\n  margin: ', ' 0 0;\n  \n  strong {\n    font-weight: bold;\n  }\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  ', '\n  color: ', ';\n  line-height: 1.5;\n  max-width: ', ';\n  margin: ', ' 0 0;\n  \n  ', '\n'], ['\n  ', '\n  color: ', ';\n  line-height: 1.5;\n  max-width: ', ';\n  margin: ', ' 0 0;\n  \n  ', '\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-start;\n  margin-top: ', ';\n    \n  > div + div {\n    margin-left: ', ';\n  }\n  \n  ', '\n'], ['\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-start;\n  margin-top: ', ';\n    \n  > div + div {\n    margin-left: ', ';\n  }\n  \n  ', '\n']),
    _templateObject6 = _taggedTemplateLiteral(['\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  color: ', ';\n  \n  span {\n    ', '\n    color: ', ';\n    margin-top: ', ';\n    line-height: 1;\n  }\n'], ['\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  color: ', ';\n  \n  span {\n    ', '\n    color: ', ';\n    margin-top: ', ';\n    line-height: 1;\n  }\n']),
    _templateObject7 = _taggedTemplateLiteral(['\n  display: none;\n  \n  ', '\n'], ['\n  display: none;\n  \n  ', '\n']);

var _styledComponents = require('styled-components');

var _utils = require('../../utils');

var _theme = require('../../config/theme');

var _theme2 = _interopRequireDefault(_theme);

var _typography = require('../../shared/styles/typography');

var _typography2 = _interopRequireDefault(_typography);

var _breakpoints = require('../../config/breakpoints');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var _theme$palettes = _theme2.default.palettes,
    basic = _theme$palettes.basic,
    neutral = _theme$palettes.neutral;
var base = exports.base = (0, _styledComponents.css)(_templateObject, (0, _utils.extRem)(44), function (props) {
  return props.breakpointsStatus[_breakpoints.MD] && '\n    text-align: center;\n    padding: ' + (0, _utils.extRem)(52, 0, 72) + ';\n  ';
});

var title = exports.title = (0, _styledComponents.css)(_templateObject2, _typography2.default.header2, neutral.lowest, basic.primary, function (props) {
  return props.breakpointsStatus[_breakpoints.LG] && _typography2.default.header1;
}, function (props) {
  return props.breakpointsStatus[_breakpoints.MD] && '\n    margin-top: ' + (0, _utils.extRem)(32) + ';\n  ';
});

var subTitle = exports.subTitle = (0, _styledComponents.css)(_templateObject3, _typography2.default.header4, neutral.medium, (0, _utils.extRem)(20));

var description = exports.description = (0, _styledComponents.css)(_templateObject4, _typography2.default.body, neutral.medium, (0, _utils.extRem)(650), (0, _utils.extRem)(40), function (props) {
  return props.breakpointsStatus[_breakpoints.MD] && '\n      margin: ' + (0, _utils.extRem)(48) + ' auto 0;\n  ';
});

var typeList = exports.typeList = (0, _styledComponents.css)(_templateObject5, (0, _utils.extRem)(40), (0, _utils.extRem)(20), function (props) {
  return props.breakpointsStatus[_breakpoints.MD] && '\n    justify-content: center;\n    \n    > div + div {\n      margin-left: ' + (0, _utils.extRem)(32) + ';\n    }\n  ';
});

var typeBlock = exports.typeBlock = (0, _styledComponents.css)(_templateObject6, basic.primaryHighest, _typography2.default.mini, neutral.medium, (0, _utils.extRem)(12));

var logo = exports.logo = (0, _styledComponents.css)(_templateObject7, function (props) {
  return props.breakpointsStatus[_breakpoints.MD] && '\n    display: block;\n    max-width: ' + (0, _utils.extRem)(180) + ';\n    margin: 0 auto;\n  ';
});