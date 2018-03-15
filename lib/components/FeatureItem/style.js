'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.description = exports.title = exports.icon = exports.base = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  position: relative;\n  padding-left: ', ';\n  text-align: left;\n'], ['\n  position: relative;\n  padding-left: ', ';\n  text-align: left;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  position: absolute;\n  top: ', ';\n  left: 0;\n'], ['\n  position: absolute;\n  top: ', ';\n  left: 0;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  ', '\n  color: ', ';\n  margin: 0;\n'], ['\n  ', '\n  color: ', ';\n  margin: 0;\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  ', '\n  color: ', ';\n  margin: ', ' 0 0;\n'], ['\n  ', '\n  color: ', ';\n  margin: ', ' 0 0;\n']);

var _styledComponents = require('styled-components');

var _utils = require('../../utils');

var _theme = require('../../config/theme');

var _theme2 = _interopRequireDefault(_theme);

var _typography = require('../../shared/styles/typography');

var _typography2 = _interopRequireDefault(_typography);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var neutral = _theme2.default.palettes.neutral;
var base = exports.base = (0, _styledComponents.css)(_templateObject, (0, _utils.extRem)(60));

var icon = exports.icon = (0, _styledComponents.css)(_templateObject2, (0, _utils.extRem)(4));

var title = exports.title = (0, _styledComponents.css)(_templateObject3, _typography2.default.header4, neutral.high);

var description = exports.description = (0, _styledComponents.css)(_templateObject4, _typography2.default.body, neutral.high, (0, _utils.extRem)(8));