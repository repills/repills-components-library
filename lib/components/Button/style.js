'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.base = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  box-sizing: border-box;\n  align-items: center;\n  border: 3px solid transparent;\n  background: none;\n  box-sizing: border-box;\n  cursor: pointer;\n  display: inline-flex;\n  justify-content: center;\n  outline: none;\n  width: ', ';\n  text-transform: uppercase;\n  letter-spacing: .2em;\n  \n  ', ';\n \n  ', ';\n  \n  ', ';\n  \n  ', ';\n  \n  ', ';\n  \n  ', '\n'], ['\n  box-sizing: border-box;\n  align-items: center;\n  border: 3px solid transparent;\n  background: none;\n  box-sizing: border-box;\n  cursor: pointer;\n  display: inline-flex;\n  justify-content: center;\n  outline: none;\n  width: ', ';\n  text-transform: uppercase;\n  letter-spacing: .2em;\n  \n  ', ';\n \n  ', ';\n  \n  ', ';\n  \n  ', ';\n  \n  ', ';\n  \n  ', '\n']);

var _polished = require('polished');

var _styledComponents = require('styled-components');

var _utils = require('../../utils');

var _theme = require('../../config/theme');

var _theme2 = _interopRequireDefault(_theme);

var _typography = require('../../shared/styles/typography');

var _typography2 = _interopRequireDefault(_typography);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var _theme$palettes = _theme2.default.palettes,
    basic = _theme$palettes.basic,
    neutral = _theme$palettes.neutral;


var size = {
  S: {
    height: (0, _utils.extRem)(28),
    minWidth: (0, _utils.extRem)(100),
    padding: (0, _utils.extRem)(0, 20)
  },
  M: {
    height: (0, _utils.extRem)(40),
    minWidth: (0, _utils.extRem)(150),
    padding: (0, _utils.extRem)(0, 24)
  },
  L: {
    height: (0, _utils.extRem)(60),
    minWidth: (0, _utils.extRem)(220),
    padding: (0, _utils.extRem)(0, 32)
  }
};

var skin = {
  default: {
    backgroundColor: basic.primary,
    color: neutral.lowest,
    boxShadow: '0 8px 16px rgba(0,0,0,.1),0 3px 6px rgba(0,0,0,.08)'
  },
  skin: {
    color: neutral.highest
  },
  outline: {
    borderColor: basic.primary,
    color: neutral.highest
  }
};

var tp = {
  S: _typography2.default.small,
  M: _typography2.default.body,
  L: _typography2.default.body
};

var base = exports.base = (0, _styledComponents.css)(_templateObject, function (props) {
  return props.expanded ? '100%' : 'auto';
}, function (props) {
  return size[props.size];
}, function (props) {
  return skin[props.skin];
}, function (props) {
  return tp[props.size];
}, function (props) {
  return props.autoWidth && '\n    min-width: auto;\n  ';
}, function (props) {
  return props.skin === 'ghost' && '\n    padding-left: 0;\n    padding-right: 0;\n    border: 0;\n  ';
}, function (props) {
  return props.disabled && '\n    opacity: .5;\n    cursor: default;\n  ';
});