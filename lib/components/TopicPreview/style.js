'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.title = exports.info = exports.composition = exports.total = exports.counter = exports.frame = exports.base = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  box-sizing: border-box;\n  text-align: center;\n  position: relative;\n  cursor: pointer;\n  background-color: ', ';\n  color: ', ';\n  height: 100%;\n  \n  ', '\n'], ['\n  box-sizing: border-box;\n  text-align: center;\n  position: relative;\n  cursor: pointer;\n  background-color: ', ';\n  color: ', ';\n  height: 100%;\n  \n  ', '\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  ', '\n  box-sizing: border-box;\n  position: relative;\n  z-index: 2;\n  text-decoration: none;\n  height: 100%;\n'], ['\n  ', '\n  box-sizing: border-box;\n  position: relative;\n  z-index: 2;\n  text-decoration: none;\n  height: 100%;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  ', '\n  box-sizing: border-box;\n  text-transform: uppercase;\n  opacity: .9;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n  background-color: ', ';\n  padding: ', ';\n  ', '\n  \n  &.', ' {\n    ', '\n  }\n'], ['\n  ', '\n  box-sizing: border-box;\n  text-transform: uppercase;\n  opacity: .9;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n  background-color: ', ';\n  padding: ', ';\n  ', '\n  \n  &.', ' {\n    ', '\n  }\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  line-height: 1;\n'], ['\n  line-height: 1;\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n  margin-top: ', ';\n'], ['\n  margin-top: ', ';\n']),
    _templateObject6 = _taggedTemplateLiteral(['\n  ', '\n  box-sizing: border-box;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: center;\n  text-align: left;\n  \n  &.', ' {\n    ', '\n  }\n'], ['\n  ', '\n  box-sizing: border-box;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: center;\n  text-align: left;\n  \n  &.', ' {\n    ', '\n  }\n']),
    _templateObject7 = _taggedTemplateLiteral(['\n  ', '\n  color: ', ';\n  box-sizing: border-box;\n  font-weight: 600;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  overflow: hidden;\n  line-height: 1.2;\n  \n  position: relative;\n  margin: ', ';\n'], ['\n  ', '\n  color: ', ';\n  box-sizing: border-box;\n  font-weight: 600;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  overflow: hidden;\n  line-height: 1.2;\n  \n  position: relative;\n  margin: ', ';\n']);

var _styledComponents = require('styled-components');

var _polished = require('polished');

var _styledComponentsGrid = require('styled-components-grid');

var _theme = require('../../config/theme');

var _theme2 = _interopRequireDefault(_theme);

var _breakpoints = require('../../config/breakpoints');

var _utils = require('../../utils');

var _typography = require('../../shared/styles/typography');

var _typography2 = _interopRequireDefault(_typography);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var neutral = _theme2.default.palettes.neutral;

var mainColor = (0, _polished.lighten)(0.2, neutral.lowest);

// box-shadow: 0 2px 10px 0 rgba(0,0,0,0.05);
var base = exports.base = (0, _styledComponents.css)(_templateObject, neutral.lower, neutral.highest, function (props) {
  return props.disabled && '\n    opacity: .6;\n    cursor: default;\n  ';
});

var frame = exports.frame = (0, _styledComponents.css)(_templateObject2, (0, _styledComponentsGrid.grid)());

var counter = exports.counter = (0, _styledComponents.css)(_templateObject3, _styledComponentsGrid.grid.unit({ size: 2 / 7 }), neutral.lower, (0, _utils.extRem)(12, 0), _typography2.default.header3, _breakpoints.SM, _styledComponentsGrid.grid.unit({ size: 3 / 8 }));

var total = exports.total = (0, _styledComponents.css)(_templateObject4);

var composition = exports.composition = (0, _styledComponents.css)(_templateObject5, (0, _utils.extRem)(8));

var info = exports.info = (0, _styledComponents.css)(_templateObject6, _styledComponentsGrid.grid.unit({ size: 5 / 7 }), _breakpoints.SM, _styledComponentsGrid.grid.unit({ size: 5 / 8 }));

var title = exports.title = (0, _styledComponents.css)(_templateObject7, _typography2.default.caption, neutral.high, (0, _utils.extRem)(12));