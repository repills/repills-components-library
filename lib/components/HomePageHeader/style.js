'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pill = exports.pillsAnimation = exports.description = exports.subTitle = exports.title = exports.base = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  padding: ', ' 0;\n  text-align: center;\n'], ['\n  padding: ', ' 0;\n  text-align: center;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  ', '\n  color: ', ';\n  margin: ', ' 0 0;\n  line-height: 1.1;\n'], ['\n  ', '\n  color: ', ';\n  margin: ', ' 0 0;\n  line-height: 1.1;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  ', '\n  color: ', ';\n  font-weight: 500;\n  line-height: 1.2;\n  margin: ', ' 0 0;\n  \n  strong {\n    font-weight: bold;\n  }\n'], ['\n  ', '\n  color: ', ';\n  font-weight: 500;\n  line-height: 1.2;\n  margin: ', ' 0 0;\n  \n  strong {\n    font-weight: bold;\n  }\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  ', '\n  color: ', ';\n  line-height: 1.5;\n  max-width: ', ';\n  margin: ', ' auto 0;\n'], ['\n  ', '\n  color: ', ';\n  line-height: 1.5;\n  max-width: ', ';\n  margin: ', ' auto 0;\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n  display: flex;\n  align-items: center;\n  justify-content: center;\n'], ['\n  display: flex;\n  align-items: center;\n  justify-content: center;\n']),
    _templateObject6 = _taggedTemplateLiteral(['\n  display: inline-block;\n  animation-timing-function: cubic-bezier(0.030, 0.615, 0.995, 0.415);\n  animation-fill-mode: both;\n  \n  ', '\n'], ['\n  display: inline-block;\n  animation-timing-function: cubic-bezier(0.030, 0.615, 0.995, 0.415);\n  animation-fill-mode: both;\n  \n  ', '\n']);

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
    types = _theme$palettes.types,
    neutral = _theme$palettes.neutral;

/*
TBD
const spinner = keyframes`
  0% {
  }
  50% {
  }
  100% {
  }
`;
*/

var pillSettings = {
  1: {
    color: types.article,
    animationDelay: '3s'
  },
  2: {
    color: basic.primary,
    animationDelay: '0',
    margin: (0, _utils.extRem)(0, 28)
  },
  3: {
    color: types.video,
    animationDelay: '6s'
  }
};

var base = exports.base = (0, _styledComponents.css)(_templateObject, (0, _utils.extRem)(60));

var title = exports.title = (0, _styledComponents.css)(_templateObject2, _typography2.default.header1, neutral.highest, (0, _utils.extRem)(50));

var subTitle = exports.subTitle = (0, _styledComponents.css)(_templateObject3, _typography2.default.header4, neutral.highest, (0, _utils.extRem)(20));

var description = exports.description = (0, _styledComponents.css)(_templateObject4, _typography2.default.body, neutral.highest, (0, _utils.extRem)(650), (0, _utils.extRem)(60));

var pillsAnimation = exports.pillsAnimation = (0, _styledComponents.css)(_templateObject5);

/* TBD: animation: ${spinner} 3s infinite; */
var pill = exports.pill = (0, _styledComponents.css)(_templateObject6, function (props) {
  return pillSettings[props.index];
});