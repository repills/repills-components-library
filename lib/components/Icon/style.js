'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.base = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  display: block;\n  line-height: 0;\n  font-size: ', ';\n  \n  & > svg {\n    height: 1em;\n    width: 1em;\n  }\n'], ['\n  display: block;\n  line-height: 0;\n  font-size: ', ';\n  \n  & > svg {\n    height: 1em;\n    width: 1em;\n  }\n']);

var _styledComponents = require('styled-components');

var _utils = require('../../utils');

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var base = exports.base = (0, _styledComponents.css)(_templateObject, function (props) {
  return (0, _utils.extRem)(props.size);
});