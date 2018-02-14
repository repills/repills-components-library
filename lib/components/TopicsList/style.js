'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.item = exports.items = exports.base = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  box-sizing: border-box;\n'], ['\n  box-sizing: border-box;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  ', '\n  margin-left: -', ';\n  margin-right: -', ';\n  \n  &.', ' {\n    margin-left: -', ';\n    margin-right: -', ';\n  }\n'], ['\n  ', '\n  margin-left: -', ';\n  margin-right: -', ';\n  \n  &.', ' {\n    margin-left: -', ';\n    margin-right: -', ';\n  }\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  padding-left: ', ';\n  padding-right: ', ';\n  margin-bottom: ', ';\n  \n  ', '\n  \n  &.', ' {\n    ', '\n    padding-left: ', ';\n    padding-right: ', ';\n    padding-bottom: ', ';\n  }\n  \n  &.', ' {\n    ', '\n  }\n  \n  &.', ' {\n    ', '\n  }\n'], ['\n  padding-left: ', ';\n  padding-right: ', ';\n  margin-bottom: ', ';\n  \n  ', '\n  \n  &.', ' {\n    ', '\n    padding-left: ', ';\n    padding-right: ', ';\n    padding-bottom: ', ';\n  }\n  \n  &.', ' {\n    ', '\n  }\n  \n  &.', ' {\n    ', '\n  }\n']);

var _styledComponents = require('styled-components');

var _utils = require('../../utils');

var _styledComponentsGrid = require('styled-components-grid');

var _breakpoints = require('../../config/breakpoints');

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var halfGutterStripUnit = 6;
var gutter = (0, _utils.extRem)(halfGutterStripUnit * 2);
var doubleGutter = (0, _utils.extRem)(halfGutterStripUnit * 4);
var halfGutter = (0, _utils.extRem)(halfGutterStripUnit);

var base = exports.base = (0, _styledComponents.css)(_templateObject);

var items = exports.items = (0, _styledComponents.css)(_templateObject2, (0, _styledComponentsGrid.grid)(), halfGutter, halfGutter, _breakpoints.SM, gutter, gutter);

var item = exports.item = (0, _styledComponents.css)(_templateObject3, halfGutter, halfGutter, gutter, _styledComponentsGrid.grid.unit({ size: 1 }), _breakpoints.SM, _styledComponentsGrid.grid.unit({ size: 1 / 3 }), gutter, gutter, doubleGutter, _breakpoints.MD, _styledComponentsGrid.grid.unit({ size: 1 / 4 }), _breakpoints.LG, _styledComponentsGrid.grid.unit({ size: 1 / 5 }));