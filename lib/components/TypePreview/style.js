'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.count = exports.text = exports.icon = exports.base = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  ', '\n  color: ', ';\n  text-decoration: none;\n  padding: ', ';\n  display: flex;\n  align-items: center;\n  cursor: ', ';\n  position: relative;\n  border-top: 1px solid ', ';\n  user-select: none;\n  font-weight: normal;\n\n  &::after {\n    background-color: ', ';\n    content: \'\';\n    position: absolute;\n    top: -1px;\n    left: 0;\n    bottom: 0;\n    width: ', ';\n  }\n'], ['\n  ', '\n  color: ', ';\n  text-decoration: none;\n  padding: ', ';\n  display: flex;\n  align-items: center;\n  cursor: ', ';\n  position: relative;\n  border-top: 1px solid ', ';\n  user-select: none;\n  font-weight: normal;\n\n  &::after {\n    background-color: ', ';\n    content: \'\';\n    position: absolute;\n    top: -1px;\n    left: 0;\n    bottom: 0;\n    width: ', ';\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  line-height: 0;\n  opacity: ', ';\n  margin-right: ', ';\n'], ['\n  line-height: 0;\n  opacity: ', ';\n  margin-right: ', ';\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  ', '\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-right: ', ';\n'], ['\n  ', '\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-right: ', ';\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  right: ', ';\n  display: flex;\n  align-items: center;\n  opacity: ', ';\n'], ['\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  right: ', ';\n  display: flex;\n  align-items: center;\n  opacity: ', ';\n']);

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
var base = exports.base = (0, _styledComponents.css)(_templateObject, _typography2.default.caption, function (props) {
  return props.active ? props.color : neutral.high;
}, (0, _utils.extRem)(12, 12, 12, 20), function (props) {
  return props.active ? 'default' : 'pointer';
}, neutral.low, function (props) {
  return props.color;
}, (0, _utils.extRem)(4));

var icon = exports.icon = (0, _styledComponents.css)(_templateObject2, function (props) {
  return props.active ? 1 : 0.4;
}, (0, _utils.extRem)(16));

var text = exports.text = (0, _styledComponents.css)(_templateObject3, (0, _polished.ellipsis)(), (0, _utils.extRem)(32));

var count = exports.count = (0, _styledComponents.css)(_templateObject4, (0, _utils.extRem)(12), function (props) {
  return props.active ? 1 : 0.4;
});