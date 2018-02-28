'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.description = exports.icon = exports.title = exports.base = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  padding: ', ' 0;\n  text-align: center;\n'], ['\n  padding: ', ' 0;\n  text-align: center;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  ', '\n  color: ', ';\n  margin: 0;\n  line-height: 1.1;\n'], ['\n  ', '\n  color: ', ';\n  margin: 0;\n  line-height: 1.1;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  color: ', ';\n'], ['\n  color: ', ';\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  ', '\n  color: ', ';\n  line-height: 1.5;\n  max-width: ', ';\n  margin: ', ' auto 0;\n'], ['\n  ', '\n  color: ', ';\n  line-height: 1.5;\n  max-width: ', ';\n  margin: ', ' auto 0;\n']);

var _styledComponents = require('styled-components');

var _utils = require('../../utils');

var _theme = require('../../config/theme');

var _theme2 = _interopRequireDefault(_theme);

var _typography = require('../../shared/styles/typography');

var _typography2 = _interopRequireDefault(_typography);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var _theme$palettes = _theme2.default.palettes,
    basic = _theme$palettes.basic,
    types = _theme$palettes.types,
    neutral = _theme$palettes.neutral;
var base = exports.base = (0, _styledComponents.css)(_templateObject, (0, _utils.extRem)(60));

var title = exports.title = (0, _styledComponents.css)(_templateObject2, _typography2.default.header1, neutral.highest);

var icon = exports.icon = (0, _styledComponents.css)(_templateObject3, function (props) {
  return props.color;
});

var description = exports.description = (0, _styledComponents.css)(_templateObject4, _typography2.default.body, neutral.highest, (0, _utils.extRem)(500), (0, _utils.extRem)(40));