'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['', ''], ['', '']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Icon = require('../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _propTypes = require('prop-types');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _style = require('./style');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var BaseStyle = _styledComponents2.default.div(_templateObject, _style.base);
var IconStyle = _styledComponents2.default.div(_templateObject, _style.icon);
var TextStyle = _styledComponents2.default.div(_templateObject, _style.text);

function TypePreview(_ref) {
  var color = _ref.color,
      label = _ref.label,
      count = _ref.count,
      icon = _ref.icon;

  return _react2.default.createElement(
    BaseStyle,
    { color: color },
    _react2.default.createElement(
      IconStyle,
      null,
      _react2.default.createElement(_Icon2.default, { name: icon })
    ),
    _react2.default.createElement(
      TextStyle,
      null,
      _react2.default.createElement(
        'strong',
        null,
        count
      ),
      ' ',
      count === 1 ? label.singular : label.plural
    )
  );
}

TypePreview.propTypes = {
  color: _propTypes.string,
  count: _propTypes.number.isRequired,
  icon: _propTypes.string.isRequired,
  label: _propTypes.string.isRequired
};

exports.default = TypePreview;