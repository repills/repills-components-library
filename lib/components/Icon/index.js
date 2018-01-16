'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['', ''], ['', '']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _style = require('./style');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var BaseStyle = _styledComponents2.default.div(_templateObject, _style.base);

var Icon = function Icon(_ref) {
  var children = _ref.children,
      color = _ref.color,
      size = _ref.size;

  return _react2.default.createElement(
    BaseStyle,
    {
      color: color,
      size: size
    },
    _react2.default.createElement(
      'svg',
      {
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
  children: _propTypes2.default.node,
  color: _propTypes2.default.string,
  size: _propTypes2.default.number
};

exports.default = Icon;