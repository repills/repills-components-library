'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.text = exports.icon = exports.base = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  text-decoration: none;\n  padding: ', ';\n  display: flex;\n  align-items: center;\n  background: ', ';\n  cursor: pointer;\n  position: relative;\n  border-top: 1px solid ', ';\n  \n  &::after {\n    background-color: ', ';\n    content: \'\';\n    position: absolute;\n    top: -1px;\n    left: 0;\n    bottom: 0;\n    width: ', ';\n  }\n'], ['\n  text-decoration: none;\n  padding: ', ';\n  display: flex;\n  align-items: center;\n  background: ', ';\n  cursor: pointer;\n  position: relative;\n  border-top: 1px solid ', ';\n  \n  &::after {\n    background-color: ', ';\n    content: \'\';\n    position: absolute;\n    top: -1px;\n    left: 0;\n    bottom: 0;\n    width: ', ';\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  line-height: 0;\n  color: ', ';\n  margin-right: ', ';\n'], ['\n  line-height: 0;\n  color: ', ';\n  margin-right: ', ';\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  ', '\n  font-weight: normal;\n  ', '\n  line-height: 1;\n  color: ', ';\n  text-transform: uppercase;\n'], ['\n  ', '\n  font-weight: normal;\n  ', '\n  line-height: 1;\n  color: ', ';\n  text-transform: uppercase;\n']);

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
var base = exports.base = (0, _styledComponents.css)(_templateObject, (0, _utils.extRem)(12, 12, 12, 20), neutral.lower, neutral.medium, function (props) {
  return props.color;
}, (0, _utils.extRem)(8));

var icon = exports.icon = (0, _styledComponents.css)(_templateObject2, neutral.highest, (0, _utils.extRem)(12));

var text = exports.text = (0, _styledComponents.css)(_templateObject3, _typography2.default.caption, (0, _polished.ellipsis)(), neutral.highest);