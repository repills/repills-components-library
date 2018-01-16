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

var BookIcon = function BookIcon(_ref) {
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
      d: 'M82.65,4.63h1.83V1H24.57a9,9,0,0,0-9,9.07v78A10.88,10.88,0,0,0,26.39,99h58.1V15.52H82.65a5.44,5.44,0,0,1,0-10.89Zm-58.08,0H75.41A11.17,11.17,0,0,0,73.59,10a12.35,12.35,0,0,0,1.81,5.54H24.57a5.44,5.44,0,0,1,0-10.89ZM30,95.37H26.39a7.23,7.23,0,0,1-7.24-7.23V17.34a9,9,0,0,0,5.42,1.81H30ZM80.85,19.15V95.37H33.67V19.15H80.85Z'
    })
  );
};

BookIcon.defaultProps = {
  color: 'currentColor'
};

BookIcon.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.number
};

exports.default = BookIcon;