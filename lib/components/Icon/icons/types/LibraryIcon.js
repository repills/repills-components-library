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

var LibraryIcon = function LibraryIcon(options) {
  return _react2.default.createElement(_Base2.default, _extends({
    path: 'M41.22,77.46H58.37a6.85,6.85,0,0,0,0-13.71H41.22a6.85,6.85,0,0,0,0,13.71Zm0-10.28H58.35a3.43,3.43,0,1,1,0,6.85H41.24a3.43,3.43,0,1,1,0-6.85ZM75.15,32.91H24.43l2.06-3.43H73.09Zm4.11,6.85H20.32l2.06-3.43H77.21ZM76,14.8H71.71V1H27.91V14.8H23.55L6,42.91V99H93.61V42.91ZM32.31,5.41h35V22.63h-35ZM26.15,19.2h2.74v6.85H70.73V19.2h2.71l15,24H11.15ZM89.2,94.59H10.38v-48H89.2Z'
  }, options));
};

exports.default = LibraryIcon;