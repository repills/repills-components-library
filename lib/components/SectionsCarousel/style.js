'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.actions = exports.base = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  position: relative;\n'], ['\n  position: relative;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  margin-top: ', ';\n  text-align: center;\n'], ['\n  margin-top: ', ';\n  text-align: center;\n']);

var _styledComponents = require('styled-components');

var _utils = require('../../utils');

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var base = exports.base = (0, _styledComponents.css)(_templateObject);

var actions = exports.actions = (0, _styledComponents.css)(_templateObject2, (0, _utils.extRem)('32'));