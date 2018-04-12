'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.main = exports.title = exports.base = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  text-align: left;\n'], ['\n  text-align: left;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  ', ' \n  word-break: break-word;\n  color: ', ';\n  line-height: 1.1;\n  \n  strong {\n    color: ', ';\n  }\n'], ['\n  ', ' \n  word-break: break-word;\n  color: ', ';\n  line-height: 1.1;\n  \n  strong {\n    color: ', ';\n  }\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  position: relative;\n'], ['\n  position: relative;\n']);

var _styledComponents = require('styled-components');

var _theme = require('../../config/theme');

var _theme2 = _interopRequireDefault(_theme);

var _typography = require('../../shared/styles/typography');

var _typography2 = _interopRequireDefault(_typography);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var _theme$palettes = _theme2.default.palettes,
    basic = _theme$palettes.basic,
    neutral = _theme$palettes.neutral;
var base = exports.base = (0, _styledComponents.css)(_templateObject);

var title = exports.title = (0, _styledComponents.css)(_templateObject2, _typography2.default.header2, neutral.higher, basic.primary);

var main = exports.main = (0, _styledComponents.css)(_templateObject3);