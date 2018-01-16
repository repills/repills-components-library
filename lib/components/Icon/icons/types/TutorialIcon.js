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

var TutorialIcon = function TutorialIcon(_ref) {
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
      d: 'M32.52,99V34.26a17.49,17.49,0,1,1,35,0V99ZM50,20.21A14.06,14.06,0,0,0,36,34.27V95.54H64V34.27A14.06,14.06,0,0,0,50,20.21ZM40.39,71.42V68H59.61v3.46Zm0-7.88V60.09H59.61v3.46Zm31.52-9.12a29.79,29.79,0,1,0-43.82,0v4.82a33.24,33.24,0,1,1,43.82,0ZM40.39,47.79V34.28a9.61,9.61,0,1,1,19.21,0V47.79ZM50,28.09a6.16,6.16,0,0,0-6.15,6.15V44.33h12.3V34.25A6.16,6.16,0,0,0,50,28.09Z'
    })
  );
};

TutorialIcon.defaultProps = {
  color: 'currentColor'
};

TutorialIcon.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.number
};

exports.default = TutorialIcon;