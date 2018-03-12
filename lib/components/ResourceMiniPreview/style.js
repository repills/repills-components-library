'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.type = exports.detail = exports.title = exports.author = exports.source = exports.mainInfo = exports.base = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  text-align: left;\n  background-color: ', ';\n  \n  &:hover {\n    box-shadow: 0 2px 10px 0 rgba(0,0,0,0.05);\n  }\n'], ['\n  text-align: left;\n  background-color: ', ';\n  \n  &:hover {\n    box-shadow: 0 2px 10px 0 rgba(0,0,0,0.05);\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  padding: ', ';\n  border: 1px solid ', ';\n  display: block;\n  text-decoration: none;\n  color: currentColor;\n'], ['\n  padding: ', ';\n  border: 1px solid ', ';\n  display: block;\n  text-decoration: none;\n  color: currentColor;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  ', '\n  color: ', ';\n  display: flex;\n  align-items: center;\n  line-height: 1;\n  \n  span {\n    margin-left: ', ';\n  }\n'], ['\n  ', '\n  color: ', ';\n  display: flex;\n  align-items: center;\n  line-height: 1;\n  \n  span {\n    margin-left: ', ';\n  }\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  ', '\n  ', '\n  color: ', ';\n  margin-left: ', ';\n  \n  span {\n    font-weight: bold;\n  }\n'], ['\n  ', '\n  ', '\n  color: ', ';\n  margin-left: ', ';\n  \n  span {\n    font-weight: bold;\n  }\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n  ', '\n  color: ', ';\n  margin: ', ';\n  height: ', ';\n  position: relative;\n  overflow: hidden;\n  text-decoration: underline;\n\n  a {\n    color: currentColor;\n  }\n  \n  /*\n  &::after {\n    content: \'\';\n    height: ', ';\n    bottom: 0;\n    left: 0;\n    right: 0;\n    background: linear-gradient(to bottom, ', ', ', ');\n    position: absolute;\n  }\n  */\n'], ['\n  ', '\n  color: ', ';\n  margin: ', ';\n  height: ', ';\n  position: relative;\n  overflow: hidden;\n  text-decoration: underline;\n\n  a {\n    color: currentColor;\n  }\n  \n  /*\n  &::after {\n    content: \'\';\n    height: ', ';\n    bottom: 0;\n    left: 0;\n    right: 0;\n    background: linear-gradient(to bottom, ', ', ', ');\n    position: absolute;\n  }\n  */\n']),
    _templateObject6 = _taggedTemplateLiteral(['\n  color: ', ';\n  display: flex;\n  align-items: flex-end;\n'], ['\n  color: ', ';\n  display: flex;\n  align-items: flex-end;\n']),
    _templateObject7 = _taggedTemplateLiteral(['\n  ', '\n  line-height: 1;\n  display: inline-flex;\n  align-items: center;\n  margin-right: ', ';\n  \n  span {\n    margin-left: ', ';\n  }\n'], ['\n  ', '\n  line-height: 1;\n  display: inline-flex;\n  align-items: center;\n  margin-right: ', ';\n  \n  span {\n    margin-left: ', ';\n  }\n']);

var _styledComponents = require('styled-components');

var _theme = require('../../config/theme');

var _theme2 = _interopRequireDefault(_theme);

var _polished = require('polished');

var _utils = require('../../utils');

var _typography = require('../../shared/styles/typography');

var _typography2 = _interopRequireDefault(_typography);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var neutral = _theme2.default.palettes.neutral;

var mainColor = neutral.lowest;

// box-shadow: 0 2px 10px 0 rgba(0,0,0,0.05);

var base = exports.base = (0, _styledComponents.css)(_templateObject, mainColor);

var mainInfo = exports.mainInfo = (0, _styledComponents.css)(_templateObject2, (0, _utils.extRem)(12), neutral.medium);

var source = exports.source = (0, _styledComponents.css)(_templateObject3, _typography2.default.small, neutral.high, (0, _utils.extRem)(5));

var author = exports.author = (0, _styledComponents.css)(_templateObject4, _typography2.default.small, (0, _polished.ellipsis)(), neutral.high, (0, _utils.extRem)(8));

var title = exports.title = (0, _styledComponents.css)(_templateObject5, _typography2.default.caption, neutral.high, (0, _utils.extRem)(0, 0, 12), (0, _utils.extRem)(52), (0, _utils.extRem)(24), (0, _polished.rgba)(mainColor, 0), mainColor);

var detail = exports.detail = (0, _styledComponents.css)(_templateObject6, neutral.high);

var type = exports.type = (0, _styledComponents.css)(_templateObject7, _typography2.default.small, (0, _utils.extRem)(8), (0, _utils.extRem)(8));