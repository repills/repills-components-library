'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.base = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  box-sizing: border-box;\n  align-items: center;\n  border: 1px solid transparent;\n  background: none;\n  box-sizing: border-box;\n  cursor: ', ';\n  display: inline-flex;\n  justify-content: center;\n  border-radius: 3px;\n  outline: none;\n  width: ', ';\n  transition: all .3s ease-in-out;\n  word-break: break-word;\n  \n  ', ';\n   \n  ', ';\n  \n  ', ';\n    \n  ', ';\n  \n  ', '\n  \n  &:hover {\n    ', '\n  }\n  \n  & + & {\n    margin-left: ', ';\n  }\n'], ['\n  box-sizing: border-box;\n  align-items: center;\n  border: 1px solid transparent;\n  background: none;\n  box-sizing: border-box;\n  cursor: ', ';\n  display: inline-flex;\n  justify-content: center;\n  border-radius: 3px;\n  outline: none;\n  width: ', ';\n  transition: all .3s ease-in-out;\n  word-break: break-word;\n  \n  ', ';\n   \n  ', ';\n  \n  ', ';\n    \n  ', ';\n  \n  ', '\n  \n  &:hover {\n    ', '\n  }\n  \n  & + & {\n    margin-left: ', ';\n  }\n']);

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


var mainHoverColor = (0, _polished.lighten)(0.2, basic.primary);

var size = {
  S: {
    minHeight: (0, _utils.extRem)(28),
    lineHeight: (0, _utils.extRem)(20),
    minWidth: (0, _utils.extRem)(100),
    padding: (0, _utils.extRem)(4, 20)
  },
  M: {
    minHeight: (0, _utils.extRem)(40),
    lineHeight: (0, _utils.extRem)(24),
    minWidth: (0, _utils.extRem)(150),
    padding: (0, _utils.extRem)(8, 24)
  },
  L: {
    minHeight: (0, _utils.extRem)(60),
    lineHeight: (0, _utils.extRem)(28),
    minWidth: (0, _utils.extRem)(220),
    padding: (0, _utils.extRem)(16, 32)
  }
};

var skin = {
  default: {
    backgroundColor: basic.primary,
    color: neutral.higher,
    // boxShadow: '0 8px 16px rgba(0,0,0,.1),0 3px 6px rgba(0,0,0,.08)',
    textTransform: 'uppercase',
    fontWeight: 600,
    letterSpacing: '0.1em'
  },
  ghost: {
    color: neutral.higher,
    paddingLeft: 0,
    paddingRight: 0,
    fontWeight: 600,
    border: 0,
    backgroundColor: 'transparent'
  },
  outline: {
    borderColor: neutral.low,
    color: neutral.higher,
    fontWeight: 600,
    textTransform: 'uppercase',
    letterSpacing: '0.1em'
  }
};

var skinHover = {
  default: {
    backgroundColor: mainHoverColor
  },
  ghost: {
    color: basic.primary,
    backgroundColor: 'transparent'
  },
  outline: {
    color: mainHoverColor,
    borderColor: mainHoverColor
  }
};

var skinDisabled = {
  default: {
    backgroundColor: neutral.lower,
    color: neutral.medium,
    boxShadow: 'none'
  },
  ghost: {
    opacity: '0.6'
  },
  outline: {
    opacity: '0.6'
  }
};

var tp = {
  S: _typography2.default.small,
  M: _typography2.default.small,
  L: _typography2.default.body
};

var base = exports.base = (0, _styledComponents.css)(_templateObject, function (props) {
  return props.disabled ? 'default' : 'pointer';
}, function (props) {
  return props.expanded ? '100%' : 'auto';
}, function (props) {
  return size[props.size];
}, function (props) {
  return tp[props.size];
}, function (props) {
  return skin[props.skin];
}, function (props) {
  return props.autoWidth && '\n    min-width: auto;\n  ';
}, function (props) {
  return props.disabled && skinDisabled[props.skin];
}, function (props) {
  return !props.disabled && skinHover[props.skin];
}, (0, _utils.extRem)(12));