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

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

// @TODO covert in to class

var Button = function Button(_ref) {
  var autoWidth = _ref.autoWidth,
      disabled = _ref.disabled,
      ellipsis = _ref.ellipsis,
      expanded = _ref.expanded,
      label = _ref.label,
      href = _ref.href,
      onClick = _ref.onClick,
      onMouseEnter = _ref.onMouseEnter,
      onMouseLeave = _ref.onMouseLeave,
      skin = _ref.skin,
      size = _ref.size,
      others = _objectWithoutProperties(_ref, ['autoWidth', 'disabled', 'ellipsis', 'expanded', 'label', 'href', 'onClick', 'onMouseEnter', 'onMouseLeave', 'skin', 'size']);

  var BaseStyle = (0, _styledComponents2.default)(href ? 'a' : 'button')(_templateObject, _style.base);
  var click = function click(e) {
    e.preventDefault();
    e.stopPropagation();
    onClick();
  };
  return _react2.default.createElement(
    BaseStyle,
    _extends({
      autoWidth: autoWidth,
      disabled: disabled,
      ellipsis: ellipsis,
      expanded: expanded,
      href: href ? href : undefined,
      onClick: onClick ? click : undefined,
      onMouseEnter: onMouseEnter,
      onMouseLeave: onMouseLeave,
      size: size,
      skin: skin
    }, others),
    label && _react2.default.createElement(
      'span',
      null,
      label
    )
  );
};

Button.propTypes = {
  autoWidth: _propTypes.bool,
  disabled: _propTypes.bool,
  ellipsis: _propTypes.bool,
  expanded: _propTypes.bool,
  href: _propTypes.string,
  label: _propTypes.string,
  onClick: _propTypes.func,
  onMouseEnter: _propTypes.func,
  onMouseLeave: _propTypes.func,
  size: (0, _propTypes.oneOf)(['S', 'M', 'L']),
  skin: (0, _propTypes.oneOf)(['default', 'ghost', 'primary', 'outline', 'outlineLight', 'outlineTertiary'])
};

Button.defaultProps = {
  size: 'M',
  skin: 'default'
};

exports.default = Button;