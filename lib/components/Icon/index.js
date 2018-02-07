'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['', ''], ['', '']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _style = require('./style');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var BaseStyle = _styledComponents2.default.div(_templateObject, _style.base);

var Icon = function Icon(_ref) {
  var children = _ref.children,
      size = _ref.size,
      orientation = _ref.orientation;


  var orientations = {
    top: 0,
    right: 90,
    bottom: 180,
    left: -90
  };

  return _react2.default.createElement(
    BaseStyle,
    {
      size: size || 20
    },
    _react2.default.createElement(
      'svg',
      {
        transform: 'rotate(' + orientations[orientation] + ')',
        version: '1.1',
        viewBox: '0 0 100 100',
        xmlns: 'http://www.w3.org/2000/svg',
        xmlnsXlink: 'http://www.w3.org/1999/xlink'
      },
      children
    )
  );
};

Icon.propTypes = {
  children: _propTypes.node,
  orientation: (0, _propTypes.oneOf)(['top', 'left', 'bottom', 'right']),
  size: _propTypes.number
};

Icon.defaultProps = {
  orientation: 'top'
};

exports.default = Icon;