'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _Base = require('../Base');

var _Base2 = _interopRequireDefault(_Base);

var _theme = require('../../../../config/theme');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var TwitterIcon = function TwitterIcon(_ref) {
  var color = _ref.color,
      options = _objectWithoutProperties(_ref, ['color']);

  return _react2.default.createElement(_Base2.default, _extends({
    color: color ? color : _theme2.default.palettes.social.twitter,
    path: 'M91.76,1H8.24A7.13,7.13,0,0,0,1,8V92a7.14,7.14,0,0,0,7.24,7H91.76A7.13,7.13,0,0,0,99,92V8A7.13,7.13,0,0,0,91.76,1ZM78.15,35.56c0,.62,0,1.25,0,1.88,0,19.19-14.61,41.32-41.32,41.32h0a41.11,41.11,0,0,1-22.26-6.51,29.57,29.57,0,0,0,3.46.21,29.14,29.14,0,0,0,18-6.23A14.54,14.54,0,0,1,22.53,56.13a14.5,14.5,0,0,0,6.56-.25A14.53,14.53,0,0,1,17.44,41.64v-.18A14.41,14.41,0,0,0,24,43.28a14.53,14.53,0,0,1-4.5-19.39A41.23,41.23,0,0,0,49.46,39.07,14.54,14.54,0,0,1,74.21,25.82a29.1,29.1,0,0,0,9.22-3.52,14.57,14.57,0,0,1-6.38,8A29,29,0,0,0,85.39,28,29.55,29.55,0,0,1,78.15,35.56Z'
  }, options));
};

TwitterIcon.propTypes = {
  color: _propTypes.string
};

exports.default = TwitterIcon;