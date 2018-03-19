'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pill = exports.pillsAnimation = exports.description = exports.subTitle = exports.title = exports.base = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  from {\n    opacity: 1;\n    transform: translateY(0);\n  }\n  to {\n    opacity: 0.8;\n    transform: translateY(-1rem);\n  }\n'], ['\n  from {\n    opacity: 1;\n    transform: translateY(0);\n  }\n  to {\n    opacity: 0.8;\n    transform: translateY(-1rem);\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  padding: ', ' 0;\n  text-align: center;\n'], ['\n  padding: ', ' 0;\n  text-align: center;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  ', '\n  color: ', ';\n  margin: ', ' 0 0;\n  line-height: 1.1;\n  \n  ', '\n'], ['\n  ', '\n  color: ', ';\n  margin: ', ' 0 0;\n  line-height: 1.1;\n  \n  ', '\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  ', '\n  color: ', ';\n  font-weight: 500;\n  line-height: 1.2;\n  margin: ', ' 0 0;\n  \n  strong {\n    font-weight: bold;\n  }\n'], ['\n  ', '\n  color: ', ';\n  font-weight: 500;\n  line-height: 1.2;\n  margin: ', ' 0 0;\n  \n  strong {\n    font-weight: bold;\n  }\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n  ', '\n  color: ', ';\n  line-height: 1.5;\n  max-width: ', ';\n  margin: ', ' auto 0;\n'], ['\n  ', '\n  color: ', ';\n  line-height: 1.5;\n  max-width: ', ';\n  margin: ', ' auto 0;\n']),
    _templateObject6 = _taggedTemplateLiteral(['\n  display: flex;\n  align-items: center;\n  justify-content: center;\n'], ['\n  display: flex;\n  align-items: center;\n  justify-content: center;\n']),
    _templateObject7 = _taggedTemplateLiteral(['\n  animation: ', ' 0.6s infinite alternate;\n  ', '\n'], ['\n  animation: ', ' 0.6s infinite alternate;\n  ', '\n']);

var _styledComponents = require('styled-components');

var _utils = require('../../utils');

var _theme = require('../../config/theme');

var _theme2 = _interopRequireDefault(_theme);

var _typography = require('../../shared/styles/typography');

var _typography2 = _interopRequireDefault(_typography);

var _breakpoints = require('../../config/breakpoints');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var _theme$palettes = _theme2.default.palettes,
    basic = _theme$palettes.basic,
    types = _theme$palettes.types,
    neutral = _theme$palettes.neutral;


var bouncing = (0, _styledComponents.keyframes)(_templateObject);

var pillSettings = {
  1: {
    color: types.article,
    animationDelay: '0'
  },
  2: {
    color: basic.primary,
    animationDelay: '0.2s',
    margin: (0, _utils.extRem)(0, 16)
  },
  3: {
    color: types.video,
    animationDelay: '0.4s'
  }
};

var base = exports.base = (0, _styledComponents.css)(_templateObject2, (0, _utils.extRem)(60));

var title = exports.title = (0, _styledComponents.css)(_templateObject3, _typography2.default.header2, neutral.highest, (0, _utils.extRem)(32), function (props) {
  return props.breakpointsStatus[_breakpoints.MD] && _typography2.default.header1;
});

var subTitle = exports.subTitle = (0, _styledComponents.css)(_templateObject4, _typography2.default.header4, neutral.high, (0, _utils.extRem)(20));

var description = exports.description = (0, _styledComponents.css)(_templateObject5, _typography2.default.body, neutral.medium, (0, _utils.extRem)(650), (0, _utils.extRem)(48));

var pillsAnimation = exports.pillsAnimation = (0, _styledComponents.css)(_templateObject6);

var pill = exports.pill = (0, _styledComponents.css)(_templateObject7, bouncing, function (props) {
  return pillSettings[props.index];
});