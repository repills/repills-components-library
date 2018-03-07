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

var GooglePlusIcon = function GooglePlusIcon(_ref) {
  var color = _ref.color,
      options = _objectWithoutProperties(_ref, ['color']);

  return _react2.default.createElement(_Base2.default, _extends({
    color: color ? color : _theme2.default.palettes.social.google,
    path: 'M53.91,70.07c0,5.32-4.38,9.29-12.62,9.29-9.18,0-15.1-4.39-15.1-10.5S31.68,60.7,33.57,60a34,34,0,0,1,9-1.38,13.79,13.79,0,0,1,2,.09C51.07,63.36,53.91,65.68,53.91,70.07Zm-4.72-34c0-6.19-3.69-15.82-10.81-15.82a8,8,0,0,0-6,2.84,9.93,9.93,0,0,0-1.88,6.36c0,5.76,3.34,15.3,10.73,15.3A8.77,8.77,0,0,0,47,42.38,8.71,8.71,0,0,0,49.18,36.1ZM99,8V92a7.13,7.13,0,0,1-7.24,7H8.24A7.14,7.14,0,0,1,1,92V8A7.13,7.13,0,0,1,8.24,1H91.76A7.13,7.13,0,0,1,99,8ZM59.65,66.72c0-5.94-3.43-8.86-7.21-12l-3.09-2.4c-.94-.78-2.23-1.81-2.23-3.7s1.29-3.1,2.41-4.21c3.6-2.83,7.2-5.85,7.2-12.21,0-6.54-4.11-10-6.09-11.61H56L61.54,17H44.64c-4.64,0-11.32,1.1-16.22,5.14a15.48,15.48,0,0,0-5.49,11.52c0,6.71,5.15,13.5,14.24,13.5.86,0,1.8-.08,2.74-.17a7.79,7.79,0,0,0-.85,3.35c0,2.66,1.37,4.3,2.57,5.84-3.86.27-11.08.69-16.39,4-5.06,3-6.6,7.39-6.6,10.49,0,6.37,6,12.3,18.44,12.3C51.84,83,59.65,74.8,59.65,66.72ZM82.74,44.66H74.11v-8.6H69.87v8.6H61.28v4.29h8.58V57.6h4.25V48.95h8.63Z'
  }, options));
};

GooglePlusIcon.propTypes = {
  color: _propTypes.string
};

exports.default = GooglePlusIcon;