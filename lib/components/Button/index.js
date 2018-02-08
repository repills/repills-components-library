'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(['', ''], ['', '']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _style = require('./style');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var BaseStyle = _styledComponents2.default.button(_templateObject, _style.base);

var Button = function Button(_ref) {
  var disabled = _ref.disabled,
      expanded = _ref.expanded,
      id = _ref.id,
      label = _ref.label,
      onClick = _ref.onClick,
      onMouseEnter = _ref.onMouseEnter,
      onMouseLeave = _ref.onMouseLeave,
      outline = _ref.outline,
      size = _ref.size,
      otherOptions = _objectWithoutProperties(_ref, ['disabled', 'expanded', 'id', 'label', 'onClick', 'onMouseEnter', 'onMouseLeave', 'outline', 'size']);

  return _react2.default.createElement(
    BaseStyle,
    _extends({
      disabled: disabled,
      expanded: expanded,
      id: id,
      onClick: onClick,
      onMouseEnter: onMouseEnter,
      onMouseLeave: onMouseLeave,
      outline: outline,
      size: size
    }, otherOptions),
    label && _react2.default.createElement(
      'span',
      null,
      label
    )
  );
};

Button.propTypes = {
  disabled: _propTypes.bool,
  expanded: _propTypes.bool,
  id: _propTypes.string,
  label: _propTypes.string,
  onClick: _propTypes.func,
  onMouseEnter: _propTypes.func,
  onMouseLeave: _propTypes.func,
  outline: _propTypes.bool,
  size: _propTypes.string
};

Button.defaultProps = {
  size: 'M',
  type: 'primary'
};

exports.default = Button;