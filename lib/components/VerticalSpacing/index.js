'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _spacing = require('../../config/spacing');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VerticalSpacing = function VerticalSpacing(_ref) {
  var children = _ref.children,
      size = _ref.size;
  return _react2.default.createElement(
    'div',
    { style: { marginTop: _spacing.SIZE_SCALE_REM[size] } },
    children
  );
};
VerticalSpacing.propTypes = {
  children: _propTypes.node,
  size: (0, _propTypes.oneOf)(['mini', 'small', 'medium', 'large', 'xlarge', 'mega'])
};
exports.default = VerticalSpacing;