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

var FacebookIcon = function FacebookIcon(_ref) {
  var color = _ref.color,
      options = _objectWithoutProperties(_ref, ['color']);

  return _react2.default.createElement(_Base2.default, _extends({
    color: color ? color : _theme2.default.palettes.social.facebook,
    path: 'M91.76,1H8.24A7.13,7.13,0,0,0,1,8V92a7.14,7.14,0,0,0,7.24,7H91.76A7.13,7.13,0,0,0,99,92V8A7.13,7.13,0,0,0,91.76,1Zm-8,28.61H75.95c-6.14,0-7.33,2.92-7.33,7.2v9.44H83.26L81.36,61H68.62V99H53.34V61H40.57V46.26H53.34V35.35c0-12.66,7.73-19.55,19-19.55a104.7,104.7,0,0,1,11.41.58Z'
  }, options));
};

FacebookIcon.propTypes = {
  color: _propTypes.string
};

exports.default = FacebookIcon;