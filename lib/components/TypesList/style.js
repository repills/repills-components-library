'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.item = exports.items = exports.base = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  box-sizing: border-box;\n'], ['\n  box-sizing: border-box;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  ', '\n'], ['\n  ', '\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  ', '\n  \n  &.', ' {\n    ', '\n  }\n  \n  &.', ' {\n    ', '\n  }\n  \n  &.', ' {\n    ', '\n  }\n  \n  &.', ' {\n    ', '\n  }\n'], ['\n  ', '\n  \n  &.', ' {\n    ', '\n  }\n  \n  &.', ' {\n    ', '\n  }\n  \n  &.', ' {\n    ', '\n  }\n  \n  &.', ' {\n    ', '\n  }\n']);

var _styledComponents = require('styled-components');

var _styledComponentsGrid = require('styled-components-grid');

var _breakpoints = require('../../config/breakpoints');

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var base = exports.base = (0, _styledComponents.css)(_templateObject);

var items = exports.items = (0, _styledComponents.css)(_templateObject2, (0, _styledComponentsGrid.grid)());

var item = exports.item = (0, _styledComponents.css)(_templateObject3, _styledComponentsGrid.grid.unit({ width: 1 / 2 }), _breakpoints.SM, _styledComponentsGrid.grid.unit({ width: 1 / 3 }), _breakpoints.MD, _styledComponentsGrid.grid.unit({ width: 1 / 4 }), _breakpoints.LG, _styledComponentsGrid.grid.unit({ width: 1 / 6 }), _breakpoints.XL, _styledComponentsGrid.grid.unit({ width: 1 / 8 }));