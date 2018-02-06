'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.item = exports.items = exports.itemsWrapper = exports.base = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  box-sizing: border-box;\n  position: relative;\n  \n  &::after {\n    content: \'\';\n    width: ', ';\n    top: 0;\n    right: 0;\n    bottom: 0;\n    position: absolute;\n    background: linear-gradient(to right, ', ', ', ');\n  }\n'], ['\n  box-sizing: border-box;\n  position: relative;\n  \n  &::after {\n    content: \'\';\n    width: ', ';\n    top: 0;\n    right: 0;\n    bottom: 0;\n    position: absolute;\n    background: linear-gradient(to right, ', ', ', ');\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  overflow-y: scroll;\n'], ['\n  overflow-y: scroll;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  ', '\n  display: flex;\n  flex-wrap: nowrap;\n  margin: 0 -1px;\n'], ['\n  ', '\n  display: flex;\n  flex-wrap: nowrap;\n  margin: 0 -1px;\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  box-sizing: border-box;\n  flex: 1 0 auto;\n  padding: 1px;\n  \n  ', '\n  \n  &.', ' {\n    ', '\n  }\n  \n  &.', ' {\n    ', '\n  }\n  \n  &.', ' {\n    ', '\n  }\n'], ['\n  box-sizing: border-box;\n  flex: 1 0 auto;\n  padding: 1px;\n  \n  ', '\n  \n  &.', ' {\n    ', '\n  }\n  \n  &.', ' {\n    ', '\n  }\n  \n  &.', ' {\n    ', '\n  }\n']);

var _styledComponents = require('styled-components');

var _polished = require('polished');

var _utils = require('../../utils');

var _breakpoints = require('../../config/breakpoints');

var _theme = require('../../config/theme');

var _theme2 = _interopRequireDefault(_theme);

var _styledComponentsGrid = require('styled-components-grid');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var neutral = _theme2.default.palettes.neutral;
var base = exports.base = (0, _styledComponents.css)(_templateObject, (0, _utils.extRem)(35), (0, _polished.rgba)(neutral.medium, 0), (0, _polished.rgba)(neutral.medium, .8));

var itemsWrapper = exports.itemsWrapper = (0, _styledComponents.css)(_templateObject2);

var items = exports.items = (0, _styledComponents.css)(_templateObject3, (0, _styledComponentsGrid.grid)());

var item = exports.item = (0, _styledComponents.css)(_templateObject4, _styledComponentsGrid.grid.unit({ size: 3 / 10 }), _breakpoints.SM, _styledComponentsGrid.grid.unit({ size: 3 / 14 }), _breakpoints.MD, _styledComponentsGrid.grid.unit({ size: 3 / 17 }), _breakpoints.LG, _styledComponentsGrid.grid.unit({ size: 3 / 23 }));