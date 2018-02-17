'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.text = exports.icon = exports.base = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  ', '\n  text-decoration: none;\n  padding: ', ';\n  display: block;\n  align-items: center;\n  line-height: 1;\n  text-align: center;\n  background: ', ';\n  cursor: pointer;\n  border: 1px solid ', ';\n  border-top: 0;\n  position: relative;\n  \n  &:hover {\n    background: ', ';\n  }\n  \n  &::after {\n    background-color: ', ';\n    content: \'\';\n    position: absolute;\n    top: 0;\n    left: -1px;\n    right: -1px;\n    height: 3px;\n  }\n'], ['\n  ', '\n  text-decoration: none;\n  padding: ', ';\n  display: block;\n  align-items: center;\n  line-height: 1;\n  text-align: center;\n  background: ', ';\n  cursor: pointer;\n  border: 1px solid ', ';\n  border-top: 0;\n  position: relative;\n  \n  &:hover {\n    background: ', ';\n  }\n  \n  &::after {\n    background-color: ', ';\n    content: \'\';\n    position: absolute;\n    top: 0;\n    left: -1px;\n    right: -1px;\n    height: 3px;\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  font-size: ', ';\n  margin: 0 auto;\n  line-height: 0;\n  color: ', ';\n'], ['\n  font-size: ', ';\n  margin: 0 auto;\n  line-height: 0;\n  color: ', ';\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  ', '\n  margin-top: ', ';\n  line-height: 1;\n  color: ', ';\n  text-transform: uppercase;\n'], ['\n  ', '\n  margin-top: ', ';\n  line-height: 1;\n  color: ', ';\n  text-transform: uppercase;\n']);

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
var base = exports.base = (0, _styledComponents.css)(_templateObject, _typography2.default.body, (0, _utils.extRem)(23, 10, 18), neutral.lower, neutral.medium, (0, _polished.rgba)(neutral.highest, .05), function (props) {
  return props.color;
});

var icon = exports.icon = (0, _styledComponents.css)(_templateObject2, (0, _utils.extRem)(50), neutral.highest);

var text = exports.text = (0, _styledComponents.css)(_templateObject3, (0, _polished.ellipsis)(), (0, _utils.extRem)(15), neutral.highest);