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

var LibraryIcon = function LibraryIcon(_ref) {
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
      d: 'M75.67,33H23.92l2.1-3.5H73.57Zm2.1,3.5H21.82L19.72,40H79.86Zm-43.71,35a7,7,0,0,1,7-7h17.5a7,7,0,0,1,0,14H41A7,7,0,0,1,34.06,71.5Zm3.5,0A3.48,3.48,0,0,0,41.06,75H58.52a3.5,3.5,0,1,0,0-7H41.06A3.49,3.49,0,0,0,37.55,71.5Zm55.95-28V99.48H6.08V43.53l17.48-28h4.89V1.48h42.7V15.55H76ZM32,22.55h35.7V5H32Zm-21.59,21H89.22L73.92,19.05H71.16v7H28.46v-7H25.66ZM90,47H9.58V96H90Z'
    })
  );
};

LibraryIcon.defaultProps = {
  color: 'currentColor'
};

LibraryIcon.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.number
};

exports.default = LibraryIcon;