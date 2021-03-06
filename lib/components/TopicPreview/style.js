'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.title = exports.total = exports.base = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  box-sizing: border-box;\n  text-align: left;\n  position: relative;\n  cursor: pointer;\n  background-color: ', ';\n  color: ', ';\n  height: 100%;\n  padding: ', ';\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  border-bottom: 1px solid ', ';\n  border-radius: 5px;\n  ', '\n  \n  ', '\n  \n  &:hover {\n    background-color: ', ';\n    box-shadow: 0 2px 10px 0 rgba(0,0,0,0.05);\n  }\n'], ['\n  box-sizing: border-box;\n  text-align: left;\n  position: relative;\n  cursor: pointer;\n  background-color: ', ';\n  color: ', ';\n  height: 100%;\n  padding: ', ';\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  border-bottom: 1px solid ', ';\n  border-radius: 5px;\n  ', '\n  \n  ', '\n  \n  &:hover {\n    background-color: ', ';\n    box-shadow: 0 2px 10px 0 rgba(0,0,0,0.05);\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  ', '\n  line-height: 1;\n  color: ', ';\n  flex-shrink: 1;\n  padding-left: ', ';\n  font-weight: 400;\n'], ['\n  ', '\n  line-height: 1;\n  color: ', ';\n  flex-shrink: 1;\n  padding-left: ', ';\n  font-weight: 400;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  ', '\n  ', '\n  overflow: hidden;\n  line-height: 1.4;\n  margin: 0;\n  user-select: none;\n'], ['\n  ', '\n  ', '\n  overflow: hidden;\n  line-height: 1.4;\n  margin: 0;\n  user-select: none;\n']);

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

// box-shadow: 0 2px 10px 0 rgba(0,0,0,0.05);

var base = exports.base = (0, _styledComponents.css)(_templateObject, neutral.lowest, neutral.higher, (0, _utils.extRem)(12, 16, 12, 12), neutral.low, _typography2.default.caption, function (props) {
  return props.disabled && '\n    opacity: .6;\n    cursor: default;\n  ';
}, (0, _polished.lighten)(.01, neutral.lower));

var total = exports.total = (0, _styledComponents.css)(_templateObject2, _typography2.default.small, neutral.medium, (0, _utils.extRem)(16));

var title = exports.title = (0, _styledComponents.css)(_templateObject3, _typography2.default.body, (0, _polished.ellipsis)());