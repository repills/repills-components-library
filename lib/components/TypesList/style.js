'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.item = exports.items = exports.itemsWrapper = exports.base = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  box-sizing: border-box;\n  position: relative;\n   \n  ', '\n'], ['\n  box-sizing: border-box;\n  position: relative;\n   \n  ', '\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  overflow-y: scroll;\n'], ['\n  overflow-y: scroll;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  ', '\n  display: flex;\n  flex-wrap: nowrap;\n  margin: 0 -1px;\n'], ['\n  ', '\n  display: flex;\n  flex-wrap: nowrap;\n  margin: 0 -1px;\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  box-sizing: border-box;\n  flex: 1 0 auto;\n  padding: 1px;\n  \n  ', '\n  \n  &.', ' {\n    ', '\n  }\n  \n  &.', ' {\n    ', '\n  }\n  \n  &.', ' {\n    ', '\n  }\n'], ['\n  box-sizing: border-box;\n  flex: 1 0 auto;\n  padding: 1px;\n  \n  ', '\n  \n  &.', ' {\n    ', '\n  }\n  \n  &.', ' {\n    ', '\n  }\n  \n  &.', ' {\n    ', '\n  }\n']);

var _styledComponents = require('styled-components');

var _polished = require('polished');

var _utils = require('../../utils');

var _breakpoints = require('../../config/breakpoints');

var _styledComponentsGrid = require('styled-components-grid');

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
// import theme from '../../config/theme';


// const { neutral } = theme.palettes;

var base = exports.base = (0, _styledComponents.css)(_templateObject, function (props) {
  return props.shadeColor && '\n    &::after {\n      content: \'\';\n      width: ' + (0, _utils.extRem)(35) + ';\n      top: 0;\n      right: 0;\n      bottom: 0;\n      background: linear-gradient(to right, ' + (0, _polished.rgba)(props.shadeColor, 0) + ', ' + props.shadeColor + ');\n      position: absolute;\n    }\n  ';
});

var itemsWrapper = exports.itemsWrapper = (0, _styledComponents.css)(_templateObject2);

var items = exports.items = (0, _styledComponents.css)(_templateObject3, (0, _styledComponentsGrid.grid)());

var item = exports.item = (0, _styledComponents.css)(_templateObject4, _styledComponentsGrid.grid.unit({ size: 3 / 10 }), _breakpoints.SM, _styledComponentsGrid.grid.unit({ size: 3 / 14 }), _breakpoints.MD, _styledComponentsGrid.grid.unit({ size: 3 / 17 }), _breakpoints.LG, _styledComponentsGrid.grid.unit({ size: 3 / 23 }));