'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.label = exports.count = exports.base = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n'], ['\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  ', '\n  font-weight: 600;\n  line-height: 1;\n  color: ', ';\n'], ['\n  ', '\n  font-weight: 600;\n  line-height: 1;\n  color: ', ';\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  ', '\n  text-transform: uppercase;\n  line-height: 1;\n  font-weight: 400;\n  color: ', ';\n  margin-top: 0.25rem;\n  padding-bottom: 0.25rem;\n'], ['\n  ', '\n  text-transform: uppercase;\n  line-height: 1;\n  font-weight: 400;\n  color: ', ';\n  margin-top: 0.25rem;\n  padding-bottom: 0.25rem;\n']);

var _styledComponents = require('styled-components');

var _polished = require('polished');

var _theme = require('../../config/theme');

var _theme2 = _interopRequireDefault(_theme);

var _typography = require('../../shared/styles/typography');

var _typography2 = _interopRequireDefault(_typography);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var neutral = _theme2.default.palettes.neutral;
var base = exports.base = (0, _styledComponents.css)(_templateObject);

var count = exports.count = (0, _styledComponents.css)(_templateObject2, _typography2.default.header2, neutral.lowest);

var label = exports.label = (0, _styledComponents.css)(_templateObject3, _typography2.default.small, (0, _polished.rgba)(neutral.lowest, .9));