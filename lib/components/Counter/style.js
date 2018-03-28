'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.label = exports.count = exports.box = exports.content = exports.base = undefined;

var _templateObject = _taggedTemplateLiteral([''], ['']),
    _templateObject2 = _taggedTemplateLiteral(['\n  ', '\n  align-items: center;\n  justify-content: center;\n'], ['\n  ', '\n  align-items: center;\n  justify-content: center;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  ', '\n  border-right: 1px solid ', ';\n\n  &:first-child {\n    padding-right: ', ';\n  }\n  \n  &:last-child {\n    padding-left: ', ';\n    border-right-width: 0;\n  }\n'], ['\n  ', '\n  border-right: 1px solid ', ';\n\n  &:first-child {\n    padding-right: ', ';\n  }\n  \n  &:last-child {\n    padding-left: ', ';\n    border-right-width: 0;\n  }\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  ', '\n  line-height: 1;\n  color: ', ';\n'], ['\n  ', '\n  line-height: 1;\n  color: ', ';\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n  ', '\n  line-height: 1;\n  font-weight: 400;\n  color: ', ';\n  margin-top: ', ';\n  padding-bottom: ', ';\n'], ['\n  ', '\n  line-height: 1;\n  font-weight: 400;\n  color: ', ';\n  margin-top: ', ';\n  padding-bottom: ', ';\n']);

var _styledComponents = require('styled-components');

var _utils = require('../../utils');

var _theme = require('../../config/theme');

var _theme2 = _interopRequireDefault(_theme);

var _typography = require('../../shared/styles/typography');

var _typography2 = _interopRequireDefault(_typography);

var _styledComponentsGrid = require('styled-components-grid');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var _theme$palettes = _theme2.default.palettes,
    basic = _theme$palettes.basic,
    neutral = _theme$palettes.neutral;
var base = exports.base = (0, _styledComponents.css)(_templateObject);

var content = exports.content = (0, _styledComponents.css)(_templateObject2, (0, _styledComponentsGrid.grid)());

var box = exports.box = (0, _styledComponents.css)(_templateObject3, _styledComponentsGrid.grid.unit({ size: 1 / 2 }), neutral.low, (0, _utils.extRem)(12), (0, _utils.extRem)(12));

var count = exports.count = (0, _styledComponents.css)(_templateObject4, _typography2.default.header2, basic.high);

var label = exports.label = (0, _styledComponents.css)(_templateObject5, _typography2.default.header4, neutral.medium, (0, _utils.extRem)(4), (0, _utils.extRem)(4));