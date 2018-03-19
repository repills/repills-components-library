'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.detail = exports.details = exports.description = exports.name = exports.info = exports.cover = exports.icon = exports.base = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  background-color: ', ';\n  text-align: center;\n  \n  &:hover {\n    box-shadow: 0 2px 10px 0 rgba(0,0,0,0.05);\n  }\n'], ['\n  background-color: ', ';\n  text-align: center;\n  \n  &:hover {\n    box-shadow: 0 2px 10px 0 rgba(0,0,0,0.05);\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral([''], ['']),
    _templateObject3 = _taggedTemplateLiteral(['\n  background-color: ', ';\n  padding: ', ';\n  border: 1px solid ', ';\n  border-bottom: 0;\n  cursor: pointer;\n'], ['\n  background-color: ', ';\n  padding: ', ';\n  border: 1px solid ', ';\n  border-bottom: 0;\n  cursor: pointer;\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  border: 1px solid ', ';\n  border-top: 0;\n  padding: ', ';\n'], ['\n  border: 1px solid ', ';\n  border-top: 0;\n  padding: ', ';\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n  ', '\n  color: ', ';\n  margin: ', ';\n  line-height: 1;\n'], ['\n  ', '\n  color: ', ';\n  margin: ', ';\n  line-height: 1;\n']),
    _templateObject6 = _taggedTemplateLiteral(['\n  ', '\n  color: ', ';\n  margin: 0;\n  height: ', ';\n  overflow: hidden;\n  position: relative;\n  \n  &::after {\n    content: \'\';\n    height: ', ';\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    background: linear-gradient(to bottom, ', ', ', ');\n  }\n'], ['\n  ', '\n  color: ', ';\n  margin: 0;\n  height: ', ';\n  overflow: hidden;\n  position: relative;\n  \n  &::after {\n    content: \'\';\n    height: ', ';\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    background: linear-gradient(to bottom, ', ', ', ');\n  }\n']),
    _templateObject7 = _taggedTemplateLiteral(['\n  ', '\n  color: ', ';\n  margin-top: ', ';\n'], ['\n  ', '\n  color: ', ';\n  margin-top: ', ';\n']),
    _templateObject8 = _taggedTemplateLiteral(['\n  display: inline-block;\n  padding: ', ';\n  line-height: 1;\n  \n  &:first-child {\n    border-right: 1px solid ', '\n  }\n'], ['\n  display: inline-block;\n  padding: ', ';\n  line-height: 1;\n  \n  &:first-child {\n    border-right: 1px solid ', '\n  }\n']);

var _styledComponents = require('styled-components');

var _polished = require('polished');

var _theme = require('../../config/theme');

var _theme2 = _interopRequireDefault(_theme);

var _utils = require('../../utils');

var _typography = require('../../shared/styles/typography');

var _typography2 = _interopRequireDefault(_typography);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var neutral = _theme2.default.palettes.neutral;

var mainColor = neutral.lowest;

// box-shadow: 0 2px 10px 0 rgba(0,0,0,0.05);

var base = exports.base = (0, _styledComponents.css)(_templateObject, mainColor);

var icon = exports.icon = (0, _styledComponents.css)(_templateObject2);

var cover = exports.cover = (0, _styledComponents.css)(_templateObject3, neutral.lower, (0, _utils.extRem)(24, 16), neutral.low);

var info = exports.info = (0, _styledComponents.css)(_templateObject4, neutral.low, (0, _utils.extRem)(20, 16));

var name = exports.name = (0, _styledComponents.css)(_templateObject5, _typography2.default.header3, neutral.highest, (0, _utils.extRem)(16, 0, 0));

var description = exports.description = (0, _styledComponents.css)(_templateObject6, _typography2.default.small, neutral.medium, (0, _utils.extRem)(80), (0, _utils.extRem)(40), (0, _polished.rgba)(mainColor, 0), mainColor);

var details = exports.details = (0, _styledComponents.css)(_templateObject7, _typography2.default.body, neutral.high, (0, _utils.extRem)(16));

var detail = exports.detail = (0, _styledComponents.css)(_templateObject8, (0, _utils.extRem)(0, 12), neutral.high);