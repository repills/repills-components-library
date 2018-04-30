'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.total = exports.footer = exports.body = exports.description = exports.title = exports.icon = exports.cover = exports.base = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  text-align: left;\n  position: relative;\n  \n  &:hover {\n    box-shadow: 0 2px 10px 0 rgba(0,0,0,0.05);\n  }\n'], ['\n  text-align: left;\n  position: relative;\n  \n  &:hover {\n    box-shadow: 0 2px 10px 0 rgba(0,0,0,0.05);\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  padding: ', ';\n  background-color: ', ';\n  position: relative;\n  border-radius: 5px 5px 0 0;\n  cursor: pointer;\n  \n  ', '\n'], ['\n  padding: ', ';\n  background-color: ', ';\n  position: relative;\n  border-radius: 5px 5px 0 0;\n  cursor: pointer;\n  \n  ', '\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  ', '\n  position: absolute;\n  top: ', ';\n  color: ', ';\n  right: ', ';\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n'], ['\n  ', '\n  position: absolute;\n  top: ', ';\n  color: ', ';\n  right: ', ';\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  ', '\n  color: ', ';\n  font-weight: 600;\n  overflow: hidden;\n  line-height: 1.4;\n  height: 2.8rem;\n  word-break: break-word;\n  margin: 0;\n  user-select: none;\n'], ['\n  ', '\n  color: ', ';\n  font-weight: 600;\n  overflow: hidden;\n  line-height: 1.4;\n  height: 2.8rem;\n  word-break: break-word;\n  margin: 0;\n  user-select: none;\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n  ', '\n  color: ', ';\n  height: ', ';\n  overflow: hidden;\n  position: relative;\n  margin: 0 0 ', ' 0;\n  user-select: none;\n\n  &::after {\n    content: \'\';\n    height: ', ';\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    background: linear-gradient(to bottom, ', ', ', ');\n  }\n'], ['\n  ', '\n  color: ', ';\n  height: ', ';\n  overflow: hidden;\n  position: relative;\n  margin: 0 0 ', ' 0;\n  user-select: none;\n\n  &::after {\n    content: \'\';\n    height: ', ';\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    background: linear-gradient(to bottom, ', ', ', ');\n  }\n']),
    _templateObject6 = _taggedTemplateLiteral(['\n  padding: 1rem;\n  border: 1px solid ', ';\n  border-top: 0;\n  border-radius: 0 0 5px 5px;\n'], ['\n  padding: 1rem;\n  border: 1px solid ', ';\n  border-top: 0;\n  border-radius: 0 0 5px 5px;\n']),
    _templateObject7 = _taggedTemplateLiteral(['\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n'], ['\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n']),
    _templateObject8 = _taggedTemplateLiteral(['\n  ', '\n  color: ', ';\n  text-transform: uppercase;\n  line-height: 1;\n  user-select: none;\n\n  strong {\n    color: ', ';\n    margin-right: ', ';\n  }\n'], ['\n  ', '\n  color: ', ';\n  text-transform: uppercase;\n  line-height: 1;\n  user-select: none;\n\n  strong {\n    color: ', ';\n    margin-right: ', ';\n  }\n']);

var _styledComponents = require('styled-components');

var _polished = require('polished');

var _theme = require('../../config/theme');

var _theme2 = _interopRequireDefault(_theme);

var _utils = require('../../utils');

var _typography = require('../../shared/styles/typography');

var _typography2 = _interopRequireDefault(_typography);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var neutral = _theme2.default.palettes.neutral;

var mainColor = neutral.lowest;

var base = exports.base = (0, _styledComponents.css)(_templateObject);

var cover = exports.cover = (0, _styledComponents.css)(_templateObject2, (0, _utils.extRem)(20), neutral.higher, function (props) {
  return props.icon && '\n    padding-right: ' + (0, _utils.extRem)(60) + ';\n  ';
});

var icon = exports.icon = (0, _styledComponents.css)(_templateObject3, (0, _polished.size)((0, _utils.extRem)(54)), (0, _utils.extRem)(10), neutral.medium, (0, _utils.extRem)(10));

var title = exports.title = (0, _styledComponents.css)(_templateObject4, _typography2.default.body, neutral.lowest);

var description = exports.description = (0, _styledComponents.css)(_templateObject5, _typography2.default.mini, neutral.high, (0, _utils.extRem)(57), (0, _utils.extRem)(12), (0, _utils.extRem)(21), (0, _polished.rgba)(mainColor, 0), mainColor);

var body = exports.body = (0, _styledComponents.css)(_templateObject6, neutral.low);

var footer = exports.footer = (0, _styledComponents.css)(_templateObject7);

var total = exports.total = (0, _styledComponents.css)(_templateObject8, _typography2.default.small, neutral.medium, neutral.high, (0, _utils.extRem)(8));