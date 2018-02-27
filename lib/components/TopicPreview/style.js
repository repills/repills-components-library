'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.title = exports.info = exports.composition = exports.totalLabel = exports.total = exports.counter = exports.frame = exports.base = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  box-sizing: border-box;\n  text-align: center;\n  border: 1px solid ', ';\n  position: relative;\n  cursor: pointer;\n  background-color: ', ';\n  color: ', ';\n  box-shadow: 0 2px 10px 0 rgba(0,0,0,0.05);\n  \n  ', '\n'], ['\n  box-sizing: border-box;\n  text-align: center;\n  border: 1px solid ', ';\n  position: relative;\n  cursor: pointer;\n  background-color: ', ';\n  color: ', ';\n  box-shadow: 0 2px 10px 0 rgba(0,0,0,0.05);\n  \n  ', '\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  ', '\n  box-sizing: border-box;\n  position: relative;\n  z-index: 2;\n  text-decoration: none;\n'], ['\n  ', '\n  box-sizing: border-box;\n  position: relative;\n  z-index: 2;\n  text-decoration: none;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  ', '\n  box-sizing: border-box;\n  text-transform: uppercase;\n  opacity: .9;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  background-color: ', ';\n  padding: ', ';\n  ', '\n  border-left: 1px solid ', ';\n  \n  &.', ' {\n    ', '\n  }\n'], ['\n  ', '\n  box-sizing: border-box;\n  text-transform: uppercase;\n  opacity: .9;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  background-color: ', ';\n  padding: ', ';\n  ', '\n  border-left: 1px solid ', ';\n  \n  &.', ' {\n    ', '\n  }\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  line-height: 1;\n'], ['\n  line-height: 1;\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n  ', '\n  margin-top: ', ';\n'], ['\n  ', '\n  margin-top: ', ';\n']),
    _templateObject6 = _taggedTemplateLiteral(['\n  background-color: ', ';\n'], ['\n  background-color: ', ';\n']),
    _templateObject7 = _taggedTemplateLiteral(['\n  ', '\n  box-sizing: border-box;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: flex-start;\n  text-align: left;\n  padding-bottom: ', ';\n  \n  &.', ' {\n    ', '\n  }\n'], ['\n  ', '\n  box-sizing: border-box;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: flex-start;\n  text-align: left;\n  padding-bottom: ', ';\n  \n  &.', ' {\n    ', '\n  }\n']),
    _templateObject8 = _taggedTemplateLiteral(['\n  ', '\n  margin: ', ';\n  box-sizing: border-box;\n  font-weight: 600;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  height: ', ';\n  overflow: hidden;\n  \n  position: relative;\n  margin: ', ';\n  \n  &::after {\n    content: \'\';\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    height: ', ';\n    background: linear-gradient(to bottom, ', ', ', ');\n  }\n'], ['\n  ', '\n  margin: ', ';\n  box-sizing: border-box;\n  font-weight: 600;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  height: ', ';\n  overflow: hidden;\n  \n  position: relative;\n  margin: ', ';\n  \n  &::after {\n    content: \'\';\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    height: ', ';\n    background: linear-gradient(to bottom, ', ', ', ');\n  }\n']);

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

var _theme$palettes = _theme2.default.palettes,
    basic = _theme$palettes.basic,
    neutral = _theme$palettes.neutral;

var mainColor = (0, _polished.lighten)(0.2, neutral.lowest);

var base = exports.base = (0, _styledComponents.css)(_templateObject, neutral.medium, mainColor, neutral.highest, function (props) {
  return props.disabled && '\n    opacity: .6;\n    cursor: default;\n  ';
});

var frame = exports.frame = (0, _styledComponents.css)(_templateObject2, (0, _styledComponentsGrid.grid)());

var counter = exports.counter = (0, _styledComponents.css)(_templateObject3, _styledComponentsGrid.grid.unit({ size: 2 / 7 }), neutral.lower, (0, _utils.extRem)(16, 0), _typography2.default.header3, neutral.low, _breakpoints.SM, _styledComponentsGrid.grid.unit({ size: 3 / 8 }));

var total = exports.total = (0, _styledComponents.css)(_templateObject4);

var totalLabel = exports.totalLabel = (0, _styledComponents.css)(_templateObject5, _typography2.default.mini, (0, _utils.extRem)(7));

var composition = exports.composition = (0, _styledComponents.css)(_templateObject6, neutral.lowest);

var info = exports.info = (0, _styledComponents.css)(_templateObject7, _styledComponentsGrid.grid.unit({ size: 5 / 7 }), (0, _utils.extRem)(16), _breakpoints.SM, _styledComponentsGrid.grid.unit({ size: 5 / 8 }));

var title = exports.title = (0, _styledComponents.css)(_templateObject8, _typography2.default.body, (0, _utils.extRem)(0, 12, 20), (0, _utils.extRem)(45), (0, _utils.extRem)(16, 12), (0, _utils.extRem)(20), (0, _polished.rgba)(mainColor, 0), mainColor);