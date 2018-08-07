'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _utils = require('../../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var availableVariants = ['full', 'minimal'];

function getVariant(variant) {
  return availableVariants.includes(variant) ? variant : 'full';
}

var Logo = function Logo(_ref) {
  var color = _ref.color,
      secondaryColor = _ref.secondaryColor,
      size = _ref.size,
      variant = _ref.variant;


  var _fileName = getVariant(variant);

  var _require = require('./assets/' + _fileName),
      path = _require.path,
      secondaryPath = _require.secondaryPath,
      viewBox = _require.viewBox;

  return _react2.default.createElement(
    'div',
    { style: { display: 'block', lineHeight: 0 } },
    _react2.default.createElement(
      'svg',
      {
        style: { width: size ? (0, _utils.extRem)(size) : '100%' },
        viewBox: viewBox
      },
      _react2.default.createElement('path', {
        d: path,
        fill: color || 'currentColor'
      }),
      secondaryPath && _react2.default.createElement('path', {
        d: secondaryPath,
        fill: secondaryColor || 'currentColor'
      })
    )
  );
};

Logo.displayName = 'Logo';

Logo.propTypes = {
  color: _propTypes.string,
  secondaryColor: _propTypes.string,
  size: _propTypes.number,
  variant: (0, _propTypes.oneOf)(availableVariants)
};

exports.default = Logo;