'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Base = require('../Base');

var _Base2 = _interopRequireDefault(_Base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UserIcon = function UserIcon(options) {
  return _react2.default.createElement(_Base2.default, _extends({
    path: 'M50,98A48,48,0,1,1,98,50,48.05,48.05,0,0,1,50,98ZM50,8.17A41.83,41.83,0,1,0,91.83,50,41.88,41.88,0,0,0,50,8.17Zm0,69.45A18.74,18.74,0,0,1,31.79,63.4l-1.11-4.45a3.08,3.08,0,0,1,3-3.86H66.33a3.08,3.08,0,0,1,3,3.85L68.21,63.4A18.8,18.8,0,0,1,50,77.61ZM38,62.55a12.54,12.54,0,0,0,12,8.87h0a12.54,12.54,0,0,0,12-8.87l.4-1.3H37.56ZM74.5,44.92a3.09,3.09,0,0,1-3.08-3.08,5.08,5.08,0,1,0-10.17,0,3.08,3.08,0,0,1-6.17,0,11.25,11.25,0,0,1,22.5,0A3.09,3.09,0,0,1,74.5,44.92Zm-32.67,0a3.09,3.09,0,0,1-3.08-3.08,5.08,5.08,0,1,0-10.17,0,3.08,3.08,0,0,1-6.17,0,11.25,11.25,0,1,1,22.5,0A3.09,3.09,0,0,1,41.83,44.92Z'
  }, options));
};

exports.default = UserIcon;