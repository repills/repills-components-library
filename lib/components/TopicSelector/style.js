'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.selectedMessage = exports.item = exports.items = exports.base = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  box-sizing: border-box;\n  width: 100%;\n'], ['\n  box-sizing: border-box;\n  width: 100%;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  ', '\n  margin-left: -', ';\n  margin-right: -', ';\n  justify-content: center;\n  \n  &.', ' {\n    margin-left: -', ';\n    margin-right: -', ';\n  }\n'], ['\n  ', '\n  margin-left: -', ';\n  margin-right: -', ';\n  justify-content: center;\n  \n  &.', ' {\n    margin-left: -', ';\n    margin-right: -', ';\n  }\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  ', '\n  padding-left: ', ';\n  padding-right: ', ';\n  padding-bottom: ', ';\n  \n  &:last-child {\n    padding-bottom: 0;\n  }\n    \n  &.', ' {\n    ', '\n    padding-left: ', ';\n    padding-right: ', ';\n    padding-bottom: ', ';\n    \n    &:nth-last-child(-n+', ') {\n      padding-bottom: 0;\n    }\n  }\n  \n  &.', ' {\n    ', '\n    \n    &:nth-last-child(-n+', ') {\n      padding-bottom: 0;\n    }\n  }\n'], ['\n  ', '\n  padding-left: ', ';\n  padding-right: ', ';\n  padding-bottom: ', ';\n  \n  &:last-child {\n    padding-bottom: 0;\n  }\n    \n  &.', ' {\n    ', '\n    padding-left: ', ';\n    padding-right: ', ';\n    padding-bottom: ', ';\n    \n    &:nth-last-child(-n+', ') {\n      padding-bottom: 0;\n    }\n  }\n  \n  &.', ' {\n    ', '\n    \n    &:nth-last-child(-n+', ') {\n      padding-bottom: 0;\n    }\n  }\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  ', '\n  text-align: center;\n  margin: ', '\n'], ['\n  ', '\n  text-align: center;\n  margin: ', '\n']);

var _styledComponents = require('styled-components');

var _index = require('../../utils/index');

var _styledComponentsGrid = require('styled-components-grid');

var _breakpoints = require('../../config/breakpoints');

var _typography = require('../../shared/styles/typography');

var _typography2 = _interopRequireDefault(_typography);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var halfGutterStripUnit = 6;
var gutter = (0, _index.extRem)(halfGutterStripUnit * 2);
var doubleGutter = (0, _index.extRem)(halfGutterStripUnit * 4);
var halfGutter = (0, _index.extRem)(halfGutterStripUnit);

var base = exports.base = (0, _styledComponents.css)(_templateObject);

var items = exports.items = (0, _styledComponents.css)(_templateObject2, (0, _styledComponentsGrid.grid)(), halfGutter, halfGutter, _breakpoints.SM, gutter, gutter);

var item = exports.item = (0, _styledComponents.css)(_templateObject3, _styledComponentsGrid.grid.unit({ size: 1 }), halfGutter, halfGutter, gutter, _breakpoints.SM, _styledComponentsGrid.grid.unit({ size: 1 / 2 }), gutter, gutter, doubleGutter, function (props) {
  return props.count % 2 === 0 ? 2 : props.count % 2;
}, _breakpoints.MD, _styledComponentsGrid.grid.unit({ size: 1 / 3 }), function (props) {
  return props.count % 3 === 0 ? 3 : props.count % 3;
});

var selectedMessage = exports.selectedMessage = (0, _styledComponents.css)(_templateObject4, _typography2.default.header4, (0, _index.extRem)(24, 0, 0));