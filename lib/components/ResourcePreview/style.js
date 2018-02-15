'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.date = exports.type = exports.detail = exports.secondaryInfo = exports.title = exports.author = exports.source = exports.mainInfo = exports.base = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  text-align: left;\n  background-color: ', ';\n  cursor: pointer;\n  border-top: 4px solid ', ';\n'], ['\n  text-align: left;\n  background-color: ', ';\n  cursor: pointer;\n  border-top: 4px solid ', ';\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  padding: ', ';\n  background-color: ', ';\n'], ['\n  padding: ', ';\n  background-color: ', ';\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  ', '\n  color: ', ';\n  display: flex;\n  align-items: center;\n  line-height: 1;\n  \n  span {\n    margin-left: ', ';\n  }\n'], ['\n  ', '\n  color: ', ';\n  display: flex;\n  align-items: center;\n  line-height: 1;\n  \n  span {\n    margin-left: ', ';\n  }\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  ', '\n  ', '\n  color: ', ';\n  margin-left: ', ';\n  \n  span {\n    color: ', ';\n  }\n'], ['\n  ', '\n  ', '\n  color: ', ';\n  margin-left: ', ';\n  \n  span {\n    color: ', ';\n  }\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n  ', '\n  color: ', ';\n  margin: ', ';\n  height: ', ';\n  position: relative;\n  overflow: hidden;\n  \n  a {\n    color: currentColor;\n    text-decoration: none;\n  }\n  \n  &::after {\n    content: \'\';\n    height: ', ';\n    bottom: 0;\n    left: 0;\n    right: 0;\n    background: linear-gradient(to bottom, ', ', ', ');\n    position: absolute;\n  }\n'], ['\n  ', '\n  color: ', ';\n  margin: ', ';\n  height: ', ';\n  position: relative;\n  overflow: hidden;\n  \n  a {\n    color: currentColor;\n    text-decoration: none;\n  }\n  \n  &::after {\n    content: \'\';\n    height: ', ';\n    bottom: 0;\n    left: 0;\n    right: 0;\n    background: linear-gradient(to bottom, ', ', ', ');\n    position: absolute;\n  }\n']),
    _templateObject6 = _taggedTemplateLiteral(['\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: ', ';\n  border: 1px solid ', ';\n  border-top: 0;\n'], ['\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: ', ';\n  border: 1px solid ', ';\n  border-top: 0;\n']),
    _templateObject7 = _taggedTemplateLiteral(['\n  ', '\n  color: ', ';\n  display: flex;\n  align-items: center;\n  // justify-content: space-between;\n'], ['\n  ', '\n  color: ', ';\n  display: flex;\n  align-items: center;\n  // justify-content: space-between;\n']),
    _templateObject8 = _taggedTemplateLiteral(['\n  line-height: 1;\n  display: inline-flex;\n  align-items: center;\n  margin-right: ', ';\n  \n  span {\n    margin-left: ', ';\n  }\n'], ['\n  line-height: 1;\n  display: inline-flex;\n  align-items: center;\n  margin-right: ', ';\n  \n  span {\n    margin-left: ', ';\n  }\n']),
    _templateObject9 = _taggedTemplateLiteral(['\n  ', '\n  line-height: 1;\n  color: ', ';\n'], ['\n  ', '\n  line-height: 1;\n  color: ', ';\n']);

var _styledComponents = require('styled-components');

var _theme = require('../../config/theme');

var _theme2 = _interopRequireDefault(_theme);

var _polished = require('polished');

var _utils = require('../../utils');

var _typography = require('../../shared/styles/typography');

var _typography2 = _interopRequireDefault(_typography);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var _theme$palettes = _theme2.default.palettes,
    basic = _theme$palettes.basic,
    neutral = _theme$palettes.neutral;

var mainColor = basic.primary;

var base = exports.base = (0, _styledComponents.css)(_templateObject, neutral.lowest, function (props) {
  return props.color;
});

var mainInfo = exports.mainInfo = (0, _styledComponents.css)(_templateObject2, (0, _utils.extRem)(12, 12, 24), mainColor);

var source = exports.source = (0, _styledComponents.css)(_templateObject3, _typography2.default.small, neutral.medium, (0, _utils.extRem)(5));

var author = exports.author = (0, _styledComponents.css)(_templateObject4, _typography2.default.small, (0, _polished.ellipsis)(), neutral.medium, (0, _utils.extRem)(8), neutral.lowest);

var title = exports.title = (0, _styledComponents.css)(_templateObject5, _typography2.default.header4, neutral.lowest, (0, _utils.extRem)(16, 0), (0, _utils.extRem)(90), (0, _utils.extRem)(30), (0, _polished.rgba)(mainColor, 0), mainColor);

var secondaryInfo = exports.secondaryInfo = (0, _styledComponents.css)(_templateObject6, (0, _utils.extRem)(12), neutral.medium);

var detail = exports.detail = (0, _styledComponents.css)(_templateObject7, _typography2.default.small, neutral.lowest);

var type = exports.type = (0, _styledComponents.css)(_templateObject8, (0, _utils.extRem)(8), (0, _utils.extRem)(5));

var date = exports.date = (0, _styledComponents.css)(_templateObject9, _typography2.default.small, neutral.high);