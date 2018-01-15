'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['', ''], ['', '']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _propTypes = require('prop-types');

var _style = require('./style');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var BaseStyle = _styledComponents2.default.div(_templateObject, _style.base);

function Icon(_ref) {
  var name = _ref.name;

  return _react2.default.createElement(
    BaseStyle,
    null,
    _react2.default.createElement(
      'svg',
      { viewBox: '0 0 100 100' },
      _react2.default.createElement('use', { xlinkHref: 'images/sprite.svg#icons_' + name })
    )
  );
}

Icon.propTypes = {
  name: _propTypes.string.isRequired
};

exports.default = Icon;