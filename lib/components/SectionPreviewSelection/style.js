'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.selectButton = exports.name = exports.icon = exports.base = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  user-select: none;\n  box-sizing: border-box;\n  text-align: center;\n  padding: ', ';\n  border: 1px solid ', ';\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  cursor: pointer;\n  background-color: ', ';\n  color: ', ';\n  position: relative;\n\n  &::after {\n    display: ', ';\n    content: \'\';\n    height: ', ';\n    bottom: -1px;\n    left: -1px;\n    right: -1px;\n    position: absolute;\n    background-color: ', ';\n  }\n  \n  ', '\n  \n  &:hover {\n    background-color: ', ';\n    box-shadow: 0 2px 10px 0 rgba(0,0,0,0.05);\n  }\n'], ['\n  user-select: none;\n  box-sizing: border-box;\n  text-align: center;\n  padding: ', ';\n  border: 1px solid ', ';\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  cursor: pointer;\n  background-color: ', ';\n  color: ', ';\n  position: relative;\n\n  &::after {\n    display: ', ';\n    content: \'\';\n    height: ', ';\n    bottom: -1px;\n    left: -1px;\n    right: -1px;\n    position: absolute;\n    background-color: ', ';\n  }\n  \n  ', '\n  \n  &:hover {\n    background-color: ', ';\n    box-shadow: 0 2px 10px 0 rgba(0,0,0,0.05);\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  ', '\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto;\n  \n  ', '\n'], ['\n  ', '\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto;\n  \n  ', '\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  ', '\n  ', '\n  text-transform: uppercase;\n  margin: ', ';\n'], ['\n  ', '\n  ', '\n  text-transform: uppercase;\n  margin: ', ';\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  ', '\n  display: inline-flex;\n  align-items: center;\n  justify-content: flex-start;\n  margin: ', ' auto 0;\n  width: ', ';\n  \n  span {\n    margin-left: ', ';\n  }\n'], ['\n  ', '\n  display: inline-flex;\n  align-items: center;\n  justify-content: flex-start;\n  margin: ', ' auto 0;\n  width: ', ';\n  \n  span {\n    margin-left: ', ';\n  }\n']);

var _styledComponents = require('styled-components');

var _utils = require('../../utils');

var _theme = require('../../config/theme');

var _theme2 = _interopRequireDefault(_theme);

var _polished = require('polished');

var _typography = require('../../shared/styles/typography');

var _typography2 = _interopRequireDefault(_typography);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var palettes = _theme2.default.palettes;
var status = palettes.status,
    neutral = palettes.neutral;
var base = exports.base = (0, _styledComponents.css)(_templateObject, (0, _utils.extRem)(24, 16), neutral.medium, neutral.lowest, neutral.highest, function (props) {
  return props.checked ? 'block' : 'none';
}, (0, _utils.extRem)(4), status.ok, function (props) {
  return props.checked && '\n    box-shadow: 0 2px 10px 0 rgba(0,0,0,0.05);\n  ';
}, neutral.lowest);

var icon = exports.icon = (0, _styledComponents.css)(_templateObject2, (0, _polished.size)((0, _utils.extRem)(52)), function (props) {
  return props.checked && '\n    color: ' + status.ok + ';\n  ';
});

var name = exports.name = (0, _styledComponents.css)(_templateObject3, _typography2.default.header4, (0, _polished.ellipsis)(), (0, _utils.extRem)(12, 0, 0, 0));

var selectButton = exports.selectButton = (0, _styledComponents.css)(_templateObject4, _typography2.default.small, (0, _utils.extRem)(12), (0, _utils.extRem)(140), (0, _utils.extRem)(8));