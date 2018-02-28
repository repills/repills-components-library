'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkIcon = exports.itemText = exports.item = exports.list = exports.selectedText = exports.selected = exports.base = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  ', '\n  position: relative;\n  box-sizing: border-box;\n  width: ', ';\n  display: inline-flex;\n  box-shadow: 0 2px 10px 0 rgba(0,0,0,0.05);\n  cursor: pointer;\n  \n  ', '\n'], ['\n  ', '\n  position: relative;\n  box-sizing: border-box;\n  width: ', ';\n  display: inline-flex;\n  box-shadow: 0 2px 10px 0 rgba(0,0,0,0.05);\n  cursor: pointer;\n  \n  ', '\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  user-select: none;\n  box-sizing: border-box;\n  height: ', ';\n  justify-content: space-between;\n  display: flex;\n  width: 100%;\n  align-items: center;\n  padding: 0 ', ';\n  position: relative;\n  z-index: 1;\n  border: 1px solid ', ';\n  color: ', ';\n  \n  &::after {\n    display: ', ';\n    content: \'\';\n    ', '\n    margin-left: ', ';\n    color: ', '\n  }\n\n  ', '\n'], ['\n  user-select: none;\n  box-sizing: border-box;\n  height: ', ';\n  justify-content: space-between;\n  display: flex;\n  width: 100%;\n  align-items: center;\n  padding: 0 ', ';\n  position: relative;\n  z-index: 1;\n  border: 1px solid ', ';\n  color: ', ';\n  \n  &::after {\n    display: ', ';\n    content: \'\';\n    ', '\n    margin-left: ', ';\n    color: ', '\n  }\n\n  ', '\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  ', '\n  text-align: left;\n'], ['\n  ', '\n  text-align: left;\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  user-select: none;\n  position: absolute;\n  box-shadow: 0 2px 10px 0 rgba(0,0,0,0.05);\n  background-color: ', ';\n  top: ', ';\n  left: 0;\n  right: 0;\n  z-index: ', ';\n  max-height: ', ';\n  overflow-y: auto;\n  border-bottom: 1px solid ', ';\n'], ['\n  user-select: none;\n  position: absolute;\n  box-shadow: 0 2px 10px 0 rgba(0,0,0,0.05);\n  background-color: ', ';\n  top: ', ';\n  left: 0;\n  right: 0;\n  z-index: ', ';\n  max-height: ', ';\n  overflow-y: auto;\n  border-bottom: 1px solid ', ';\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n  color: ', ';\n  box-sizing: border-box;\n  background-color: ', ';\n  border: 1px solid ', ';\n  padding: 0 ', ';\n  height: ', ';\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n  cursor: pointer;\n  box-sizing: border-box;\n  margin-top: -1px;\n  \n  &:last-child {\n    border-bottom: 0;\n  }\n  \n  ', '\n  \n  ', '\n'], ['\n  color: ', ';\n  box-sizing: border-box;\n  background-color: ', ';\n  border: 1px solid ', ';\n  padding: 0 ', ';\n  height: ', ';\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n  cursor: pointer;\n  box-sizing: border-box;\n  margin-top: -1px;\n  \n  &:last-child {\n    border-bottom: 0;\n  }\n  \n  ', '\n  \n  ', '\n']),
    _templateObject6 = _taggedTemplateLiteral(['\n  margin-left: ', ';\n'], ['\n  margin-left: ', ';\n']);

var _styledComponents = require('styled-components');

var _utils = require('../../utils');

var _theme = require('../../config/theme');

var _theme2 = _interopRequireDefault(_theme);

var _typography = require('../../shared/styles/typography');

var _typography2 = _interopRequireDefault(_typography);

var _caret = require('../../shared/styles/caret');

var _polished = require('polished');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var neutral = _theme2.default.palettes.neutral;


var sizes = {
  M: {
    height: (0, _utils.extRem)(36),
    heightItem: (0, _utils.extRem)(32),
    sideSpace: (0, _utils.extRem)(12),
    width: (0, _utils.extRem)(200),
    arrowSize: '5px'
  },
  L: {
    height: (0, _utils.extRem)(56),
    heightItem: (0, _utils.extRem)(52),
    sideSpace: (0, _utils.extRem)(24),
    width: (0, _utils.extRem)(300),
    arrowSize: '7px'
  }
};

var base = exports.base = (0, _styledComponents.css)(_templateObject, _typography2.default.body, function (props) {
  return props.expanded ? '100%' : sizes[props.size].width;
}, function (props) {
  return props.disabled && '\n    cursor: default;\n  ';
});

var selected = exports.selected = (0, _styledComponents.css)(_templateObject2, function (props) {
  return sizes[props.size].height;
}, function (props) {
  return sizes[props.size].sideSpace;
}, neutral.medium, function (props) {
  return props.filled ? neutral.highest : neutral.mediumHigh;
}, function (props) {
  return props.disabled && props.filled ? 'none' : 'block';
}, function (props) {
  return props.open ? (0, _caret.arrowUp)(sizes[props.size].arrowSize) : (0, _caret.arrowDown)(sizes[props.size].arrowSize);
}, (0, _utils.extRem)(10), function (props) {
  return props.disabled ? neutral.mediumHigh : neutral.highest;
}, function (props) {
  return props.disabled && '\n    background-color: ' + neutral.lower + ';\n  ';
});

var selectedText = exports.selectedText = (0, _styledComponents.css)(_templateObject3, (0, _polished.ellipsis)());

var list = exports.list = (0, _styledComponents.css)(_templateObject4, neutral.lowest, function (props) {
  return sizes[props.size].height;
}, _theme2.default.zIndex.inpage, function (props) {
  return props.count >= 7 ? (0, _polished.stripUnit)(sizes[props.size].heightItem) * 4.5 + 'rem' : 'auto';
}, neutral.medium);

var item = exports.item = (0, _styledComponents.css)(_templateObject5, neutral.highest, neutral.lowest, neutral.medium, function (props) {
  return sizes[props.size].sideSpace;
}, function (props) {
  return sizes[props.size].heightItem;
}, function (props) {
  return !props.disabled && '\n    &:hover {\n      background-color: ' + neutral.lower + ';\n    }\n  ';
}, function (props) {
  return props.disabled && '\n    cursor: default;\n    color: ' + neutral.mediumHigh + ';\n  ';
});

var itemText = exports.itemText = (0, _styledComponents.css)(_templateObject3, (0, _polished.ellipsis)());

var checkIcon = exports.checkIcon = (0, _styledComponents.css)(_templateObject6, (0, _utils.extRem)(8));