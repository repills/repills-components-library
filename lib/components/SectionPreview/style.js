'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.detail = exports.details = exports.description = exports.name = exports.icon = exports.base = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  background-color: ', ';\n  padding: ', ';\n  border-radius: 5px;\n  text-align: center;\n'], ['\n  background-color: ', ';\n  padding: ', ';\n  border-radius: 5px;\n  text-align: center;\n']),
    _templateObject2 = _taggedTemplateLiteral([''], ['']),
    _templateObject3 = _taggedTemplateLiteral(['\n  ', '\n  color: ', ';\n  margin: ', ';\n'], ['\n  ', '\n  color: ', ';\n  margin: ', ';\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  ', '\n  color: ', ';\n  margin: ', ';\n  height: ', ';\n  overflow: hidden;\n  position: relative;\n  \n  &::after {\n    content: \'\';\n    height: ', ';\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    background: linear-gradient(to bottom, ', ', ', ');\n  }\n'], ['\n  ', '\n  color: ', ';\n  margin: ', ';\n  height: ', ';\n  overflow: hidden;\n  position: relative;\n  \n  &::after {\n    content: \'\';\n    height: ', ';\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    background: linear-gradient(to bottom, ', ', ', ');\n  }\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n  display: inline-block;\n  margin: ', ';\n  line-height: 1;\n'], ['\n  display: inline-block;\n  margin: ', ';\n  line-height: 1;\n']);

var _styledComponents = require('styled-components');

var _polished = require('polished');

var _theme = require('../../config/theme');

var _theme2 = _interopRequireDefault(_theme);

var _utils = require('../../utils');

var _typography = require('../../shared/styles/typography');

var _typography2 = _interopRequireDefault(_typography);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var _theme$palettes = _theme2.default.palettes,
    basic = _theme$palettes.basic,
    neutral = _theme$palettes.neutral;

var mainColor = basic.primaryHighest;

var base = exports.base = (0, _styledComponents.css)(_templateObject, mainColor, (0, _utils.extRem)(28, 20, 32));

var icon = exports.icon = (0, _styledComponents.css)(_templateObject2);

var name = exports.name = (0, _styledComponents.css)(_templateObject3, _typography2.default.header4, neutral.lowest, (0, _utils.extRem)(16, 0, 0));

var description = exports.description = (0, _styledComponents.css)(_templateObject4, _typography2.default.small, (0, _polished.rgba)(neutral.lowest, .6), (0, _utils.extRem)(16, 0, 0), (0, _utils.extRem)(80), (0, _utils.extRem)(40), (0, _polished.rgba)(mainColor, 0), mainColor);

var details = exports.details = (0, _styledComponents.css)(_templateObject3, _typography2.default.body, (0, _polished.rgba)(neutral.lowest, .6), (0, _utils.extRem)(16, 0, 28));

var detail = exports.detail = (0, _styledComponents.css)(_templateObject5, (0, _utils.extRem)(0, 8));