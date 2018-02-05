'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.text = exports.icon = exports.base = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  ', '\n  text-decoration: none;\n  padding: 20px 10px;\n  display: block;\n  align-items: center;\n  line-height: 1;\n  text-align: center;\n  background: ', ';\n  border-top: 5px solid ', ';\n  outline: 1px solid ', ';\n  cursor: pointer;\n  \n  &:hover {\n    background: ', ';\n  }\n'], ['\n  ', '\n  text-decoration: none;\n  padding: 20px 10px;\n  display: block;\n  align-items: center;\n  line-height: 1;\n  text-align: center;\n  background: ', ';\n  border-top: 5px solid ', ';\n  outline: 1px solid ', ';\n  cursor: pointer;\n  \n  &:hover {\n    background: ', ';\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  font-size: ', ';\n  margin: 0 auto;\n  line-height: 0;\n  color: ', '; \n  opacity: .75;\n  \n  &.', ' {\n    font-size: ', ';\n  }\n'], ['\n  font-size: ', ';\n  margin: 0 auto;\n  line-height: 0;\n  color: ', '; \n  opacity: .75;\n  \n  &.', ' {\n    font-size: ', ';\n  }\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  margin-top: 15px;\n  line-height: 1;\n  color: ', '; \n'], ['\n  margin-top: 15px;\n  line-height: 1;\n  color: ', '; \n']);

var _styledComponents = require('styled-components');

var _polished = require('polished');

var _theme = require('../../config/theme');

var _theme2 = _interopRequireDefault(_theme);

var _typography = require('../../shared/styles/typography');

var _breakpoints = require('../../config/breakpoints');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var _theme$palettes = _theme2.default.palettes,
    basic = _theme$palettes.basic,
    neutral = _theme$palettes.neutral;
var base = exports.base = (0, _styledComponents.css)(_templateObject, _typography.H4Style, (0, _polished.darken)(0.05, basic.primary), function (props) {
  return props.color;
}, neutral.highest, basic.primary);

var icon = exports.icon = (0, _styledComponents.css)(_templateObject2, (0, _polished.rem)('50px'), basic.primaryHighest, _breakpoints.XS, (0, _polished.rem)('62px'));

var text = exports.text = (0, _styledComponents.css)(_templateObject3, basic.primaryHighest);