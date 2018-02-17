'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _index = require('../index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Base = function Base(_ref) {
  var color = _ref.color,
      orientation = _ref.orientation,
      path = _ref.path,
      size = _ref.size;

  return _react2.default.createElement(
    _index2.default,
    {
      orientation: orientation,
      size: size || 20
    },
    _react2.default.createElement('path', {
      d: path,
      fill: color || 'currentColor'
    })
  );
};

Base.propTypes = {
  color: _propTypes.string,
  orientation: _index2.default.propTypes.orientation,
  path: _propTypes.string,
  size: _propTypes.number
};

exports.default = Base;