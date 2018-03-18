'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.body = exports.description = exports.count = exports.title = exports.base = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  text-align: left;\n'], ['\n  text-align: left;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  ', '\n  color: ', ';\n  line-height: 1.2;\n  margin: 0;\n  display: flex;\n  ', ';\n  \n  span {\n    margin-right: ', ';\n  }\n'], ['\n  ', '\n  color: ', ';\n  line-height: 1.2;\n  margin: 0;\n  display: flex;\n  ', ';\n  \n  span {\n    margin-right: ', ';\n  }\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  font-size: 80%;\n  display: inline-block;\n  align-items: center;\n  justify-content: center;\n  height; ', ';\n  line-height: ', ';\n  padding-left: ', ';\n  border-left: 1px solid ', ';\n'], ['\n  font-size: 80%;\n  display: inline-block;\n  align-items: center;\n  justify-content: center;\n  height; ', ';\n  line-height: ', ';\n  padding-left: ', ';\n  border-left: 1px solid ', ';\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  ', '\n  display: flex;\n  color: ', ';\n  margin: ', ' ', ' 0;\n  ', ';\n  \n  div {\n    max-width: ', '\n  }\n'], ['\n  ', '\n  display: flex;\n  color: ', ';\n  margin: ', ' ', ' 0;\n  ', ';\n  \n  div {\n    max-width: ', '\n  }\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n  ', '\n  margin: ', ' 0 0;\n'], ['\n  ', '\n  margin: ', ' 0 0;\n']);

var _styledComponents = require('styled-components');

var _utils = require('../../utils');

var _theme = require('../../config/theme');

var _theme2 = _interopRequireDefault(_theme);

var _typography = require('../../shared/styles/typography');

var _typography2 = _interopRequireDefault(_typography);

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

var sideCount = (0, _utils.extRem)(36);
var base = exports.base = (0, _styledComponents.css)(_templateObject);

var title = exports.title = (0, _styledComponents.css)(_templateObject2, _typography2.default.header3, neutral.high, function (props) {
  return align[props.align];
}, (0, _utils.extRem)(12));

var count = exports.count = (0, _styledComponents.css)(_templateObject3, sideCount, sideCount, (0, _utils.extRem)(12), neutral.medium);

var description = exports.description = (0, _styledComponents.css)(_templateObject4, _typography2.default.body, neutral.mediumHigh, (0, _utils.extRem)(8), function (props) {
  return props.size === 'CENTER' ? 'auto' : '0';
}, function (props) {
  return align[props.align];
}, (0, _utils.extRem)(700));

var body = exports.body = (0, _styledComponents.css)(_templateObject5, _typography2.default.body, (0, _utils.extRem)(28));