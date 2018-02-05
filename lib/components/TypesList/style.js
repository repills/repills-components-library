'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.item = exports.items = exports.itemsWrapper = exports.base = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  box-sizing: border-box;\n  position: relative;\n  \n  &::after {\n    content: \'\';\n    width: ', ';\n    background-color: red;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    position: absolute;\n    background: linear-gradient(to right, ', ', ', ');\n  }\n'], ['\n  box-sizing: border-box;\n  position: relative;\n  \n  &::after {\n    content: \'\';\n    width: ', ';\n    background-color: red;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    position: absolute;\n    background: linear-gradient(to right, ', ', ', ');\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  overflow-y: scroll;\n'], ['\n  overflow-y: scroll;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  display: flex;\n  flex-wrap: nowrap;\n'], ['\n  display: flex;\n  flex-wrap: nowrap;\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  flex: 1 0 94px;\n  \n  &.', ' {\n    flex-basis: 120px;\n  }\n  \n  &.', ' {\n  }\n  \n  &.', ' {\n  }\n'], ['\n  flex: 1 0 94px;\n  \n  &.', ' {\n    flex-basis: 120px;\n  }\n  \n  &.', ' {\n  }\n  \n  &.', ' {\n  }\n']);

var _styledComponents = require('styled-components');

var _polished = require('polished');

var _breakpoints = require('../../config/breakpoints');

var _theme = require('../../config/theme');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var basic = _theme2.default.palettes.basic;
var base = exports.base = (0, _styledComponents.css)(_templateObject, (0, _polished.rem)('35px'), (0, _polished.rgba)(basic.primaryHighest, 0), (0, _polished.rgba)(basic.primaryHighest, .8));

var itemsWrapper = exports.itemsWrapper = (0, _styledComponents.css)(_templateObject2);

var items = exports.items = (0, _styledComponents.css)(_templateObject3);

var item = exports.item = (0, _styledComponents.css)(_templateObject4, _breakpoints.SM, _breakpoints.LG, _breakpoints.XL);