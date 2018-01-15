'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.composition = exports.title = exports.bottom = exports.totalLabel = exports.total = exports.counter = exports.frame = exports.base = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  box-sizing: border-box;\n  overflow: hidden;\n  border-radius: 3px;\n  position: relative;\n  text-align: center;\n  background: linear-gradient(to bottom, ', ', ', ');\n  color: ', ';\n  \n  &:hover {\n    \n  }\n'], ['\n  box-sizing: border-box;\n  overflow: hidden;\n  border-radius: 3px;\n  position: relative;\n  text-align: center;\n  background: linear-gradient(to bottom, ', ', ', ');\n  color: ', ';\n  \n  &:hover {\n    \n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  position: relative;\n  z-index: 2;\n  display: block;\n  text-decoration: none;\n  text-shadow: ', ' 0 1px 2px;\n  opacity: .9;\n  border: 2px solid ', ';\n'], ['\n  position: relative;\n  z-index: 2;\n  display: block;\n  text-decoration: none;\n  text-shadow: ', ' 0 1px 2px;\n  opacity: .9;\n  border: 2px solid ', ';\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  padding: ', ' 0;\n  text-transform: uppercase;\n  opacity: .9;\n'], ['\n  padding: ', ' 0;\n  text-transform: uppercase;\n  opacity: .9;\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  font-size: ', ';\n'], ['\n  font-size: ', ';\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n  font-size: ', ';\n  margin-top: ', ';\n  letter-spacing: .2em;\n'], ['\n  font-size: ', ';\n  margin-top: ', ';\n  letter-spacing: .2em;\n']),
    _templateObject6 = _taggedTemplateLiteral(['\n  height: ', ';\n  position: relative;\n'], ['\n  height: ', ';\n  position: relative;\n']),
    _templateObject7 = _taggedTemplateLiteral(['\n  ', '\n  padding: 0 ', ' ', ';\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  margin: 0;\n'], ['\n  ', '\n  padding: 0 ', ' ', ';\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  margin: 0;\n']),
    _templateObject8 = _taggedTemplateLiteral(['\n  font-size: ', ';\n  display: flex;\n  align-items: center;\n  justify-content: center;\n'], ['\n  font-size: ', ';\n  display: flex;\n  align-items: center;\n  justify-content: center;\n']);

var _styledComponents = require('styled-components');

var _polished = require('polished');

var _theme = require('../../config/theme');

var _theme2 = _interopRequireDefault(_theme);

var _typography = require('../../shared/styles/typography');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var _theme$palettes = _theme2.default.palettes,
    basic = _theme$palettes.basic,
    neutral = _theme$palettes.neutral;
var base = exports.base = (0, _styledComponents.css)(_templateObject, (0, _polished.lighten)(0.05, basic.primaryHighest), (0, _polished.lighten)(0.2, basic.primaryHighest), neutral.lowest);

var frame = exports.frame = (0, _styledComponents.css)(_templateObject2, (0, _polished.rgba)(neutral.highest, 0.4), (0, _polished.rgba)(basic.primary, 0.2));

var counter = exports.counter = (0, _styledComponents.css)(_templateObject3, (0, _polished.rem)('40px'));

var total = exports.total = (0, _styledComponents.css)(_templateObject4, (0, _polished.rem)('45px'));

var totalLabel = exports.totalLabel = (0, _styledComponents.css)(_templateObject5, (0, _polished.rem)('10px'), (0, _polished.rem)('7px'));

var bottom = exports.bottom = (0, _styledComponents.css)(_templateObject6, (0, _polished.rem)('120px'));

var title = exports.title = (0, _styledComponents.css)(_templateObject7, _typography.H4Style, (0, _polished.rem)('10px'), (0, _polished.rem)('25px'));

var composition = exports.composition = (0, _styledComponents.css)(_templateObject8, (0, _polished.rem)('16px'));