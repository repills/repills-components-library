'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.body = exports.title = exports.index = exports.header = exports.base = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  text-align: left;\n  box-sizing: border-box;\n'], ['\n  text-align: left;\n  box-sizing: border-box;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  position: relative;\n  padding: ', ';\n'], ['\n  position: relative;\n  padding: ', ';\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  ', '\n  ', '\n  background-color: ', ';\n  color: ', ';\n  position: absolute;\n  top: 0;\n  left: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n'], ['\n  ', '\n  ', '\n  background-color: ', ';\n  color: ', ';\n  position: absolute;\n  top: 0;\n  left: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  ', '\n  color: ', ';\n  line-height: ', ';\n  margin: 0;\n'], ['\n  ', '\n  color: ', ';\n  line-height: ', ';\n  margin: 0;\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n  ', '\n  padding: ', ';\n  \n  &.', ' {\n    padding: ', ';\n    border-left: ', ';\n    margin: ', ';\n    \n    ', '\n  }\n'], ['\n  ', '\n  padding: ', ';\n  \n  &.', ' {\n    padding: ', ';\n    border-left: ', ';\n    margin: ', ';\n    \n    ', '\n  }\n']);

var _styledComponents = require('styled-components');

var _polished = require('polished');

var _utils = require('../../utils');

var _breakpoints = require('../../config/breakpoints');

var _theme = require('../../config/theme');

var _theme2 = _interopRequireDefault(_theme);

var _styledComponentsGrid = require('styled-components-grid');

var _typography = require('../../shared/styles/typography');

var _typography2 = _interopRequireDefault(_typography);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var palettes = _theme2.default.palettes;
var basic = palettes.basic,
    neutral = palettes.neutral;


var indexSizeStripUnit = 40;
var indexSize = (0, _utils.extRem)(indexSizeStripUnit);

var base = exports.base = (0, _styledComponents.css)(_templateObject);

var header = exports.header = (0, _styledComponents.css)(_templateObject2, (0, _utils.extRem)(5, 0, 5, 52));

var index = exports.index = (0, _styledComponents.css)(_templateObject3, _typography2.default.body, (0, _polished.size)(indexSize), basic.primary, neutral.lowest);

var title = exports.title = (0, _styledComponents.css)(_templateObject4, _typography2.default.header4, neutral.highest, (0, _utils.extRem)(indexSizeStripUnit - 10));

var body = exports.body = (0, _styledComponents.css)(_templateObject5, _typography2.default.body, (0, _utils.extRem)(16, 0, 28), _breakpoints.SM, (0, _utils.extRem)(14, 0, 28, 32), function (props) {
  return props.last ? 0 : '1px dotted ' + neutral.mediumHigh;
}, (0, _utils.extRem)(2, 0, 2, 19), function (props) {
  return props.last && '\n      margin-left: ' + (0, _utils.extRem)(20) + ';\n    ';
});