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

var PillIcon = function PillIcon(_ref) {
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
      d: 'M50,1h0A49,49,0,1,0,99,50,49,49,0,0,0,50,1ZM65.9,75.08V75l-41-40.94a30,30,0,0,1,9.17-9.17l41,41a30,30,0,0,1-9.16,9.19Z'
    })
  );
};

PillIcon.defaultProps = {
  color: 'currentColor'
};

PillIcon.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.number
};

exports.default = PillIcon;