'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.logoLink = exports.base = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  padding: ', ';\n  border-bottom: 3px  solid ', ';\n  text-align: left;\n'], ['\n  padding: ', ';\n  border-bottom: 3px  solid ', ';\n  text-align: left;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  width: ', ';\n  display: block;\n  line-height: 0;\n  \n  &.', ' {\n    width: ', ';\n  }\n'], ['\n  width: ', ';\n  display: block;\n  line-height: 0;\n  \n  &.', ' {\n    width: ', ';\n  }\n']);

var _styledComponents = require('styled-components');

var _theme = require('../../config/theme');

var _theme2 = _interopRequireDefault(_theme);

var _breakpoints = require('../../config/breakpoints');

var _utils = require('../../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
// import { grid } from 'styled-components-grid';


// import typography from '../../shared/styles/typography';

var _theme$palettes = _theme2.default.palettes,
    basic = _theme$palettes.basic,
    neutral = _theme$palettes.neutral;
var base = exports.base = (0, _styledComponents.css)(_templateObject, (0, _utils.extRem)(48, 0, 24), neutral.medium);

var logoLink = exports.logoLink = (0, _styledComponents.css)(_templateObject2, (0, _utils.extRem)(150), _breakpoints.MD, (0, _utils.extRem)(250));