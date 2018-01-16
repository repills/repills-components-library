'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Icon = require('../../../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ToolIcon = function ToolIcon(_ref) {
  var color = _ref.color,
      size = _ref.size;

  return _react2.default.createElement(
    _Icon2.default,
    {
      color: color,
      size: size
    },
    _react2.default.createElement('path', {
      fill: color,
      d: 'M16.06,33.38V29.07c0-12.78,10-27.73,22.93-27.84A1.75,1.75,0,0,1,40.76,3V27.11H59.44V3A1.62,1.62,0,0,1,60,1.73a1.76,1.76,0,0,1,1.24-.51c12.92.12,22.94,15.06,22.94,27.84v4.32c0,10.66-6.91,21.13-16.08,24.34l-.4.14V99h-3.5V56.53a1.75,1.75,0,0,1,1.35-1.71c8.2-1.93,15.13-11.74,15.13-21.43V29.07c0-11.77-9-22.41-17-24.07l-.72-.15v24a1.75,1.75,0,0,1-1.75,1.75H39a1.76,1.76,0,0,1-1.76-1.75v-24L36.53,5c-8,1.66-17,12.3-17,24.07v4.32c0,9.69,6.93,19.51,15.13,21.43A1.75,1.75,0,0,1,36,56.53V99h-3.5V57.86l-.4-.14C23,54.51,16.06,44,16.06,33.38Z'
    })
  );
};

ToolIcon.defaultProps = {
  color: 'currentColor'
};

ToolIcon.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.number
};

exports.default = ToolIcon;