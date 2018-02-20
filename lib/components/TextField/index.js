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

var _basic = require('../Icon/icons/basic');

var _style = require('./style');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var BaseStyle = _styledComponents2.default.div(_templateObject, _style.base);
var InputStyle = _styledComponents2.default.input(_templateObject, _style.input);
var IconStyle = _styledComponents2.default.div(_templateObject, _style.icon);

var TextField = function TextField(_ref) {
  var dirty = _ref.dirty,
      disabled = _ref.disabled,
      expanded = _ref.expanded,
      hasError = _ref.hasError,
      id = _ref.id,
      name = _ref.name,
      onBlur = _ref.onBlur,
      onChange = _ref.onChange,
      onFocus = _ref.onFocus,
      placeholder = _ref.placeholder,
      readOnly = _ref.readOnly,
      required = _ref.required,
      size = _ref.size,
      type = _ref.type,
      value = _ref.value;


  var hasIcon = dirty && typeof hasError === 'boolean';

  return _react2.default.createElement(
    BaseStyle,
    {
      disabled: disabled,
      expanded: expanded,
      filled: value && value.length !== 0,
      hasError: hasError,
      size: size
    },
    hasIcon && _react2.default.createElement(
      IconStyle,
      {
        hasError: hasError,
        size: size
      },
      hasError ? _react2.default.createElement(_basic.ErrorIcon, { size: 16 }) : _react2.default.createElement(_basic.CheckIcon, { size: 16 })
    ),
    _react2.default.createElement(InputStyle, {
      disabled: disabled,
      hasIcon: hasIcon,
      id: id,
      name: name,
      onBlur: onBlur,
      onChange: onChange,
      onFocus: onFocus,
      placeholder: placeholder,
      readOnly: readOnly,
      required: required,
      size: size,
      type: type,
      value: value
    })
  );
};

TextField.defaultProps = {
  placeholder: '',
  type: 'text',
  value: '',
  size: 'M'
};

TextField.propTypes = {
  dirty: _propTypes.bool,
  disabled: _propTypes.bool,
  expanded: _propTypes.bool,
  hasError: _propTypes.bool,
  id: _propTypes.string,
  name: _propTypes.string,
  onBlur: _propTypes.func,
  onChange: _propTypes.func,
  onFocus: _propTypes.func,
  placeholder: _propTypes.string,
  readOnly: _propTypes.bool,
  required: _propTypes.bool,
  size: (0, _propTypes.oneOf)(['M', 'L']),
  type: (0, _propTypes.oneOf)(['text', 'number']),
  value: (0, _propTypes.oneOfType)([_propTypes.string, _propTypes.number])
};

exports.default = TextField;