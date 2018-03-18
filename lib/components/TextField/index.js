'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['', ''], ['', '']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _propTypes = require('prop-types');

var _basic = require('../Icon/icons/basic');

var _style = require('./style');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var BaseStyle = _styledComponents2.default.div(_templateObject, _style.base);
var InputStyle = _styledComponents2.default.input(_templateObject, _style.input);
var IconStyle = _styledComponents2.default.div(_templateObject, _style.icon);

var TextField = function (_React$Component) {
  _inherits(TextField, _React$Component);

  function TextField(props) {
    _classCallCheck(this, TextField);

    var _this = _possibleConstructorReturn(this, (TextField.__proto__ || Object.getPrototypeOf(TextField)).call(this, props));

    _this.handleOnChange = function (e) {
      var value = e.target.value;
      var update = { value: value, dirty: true };
      _this.props.handleOnChange(update);
      _this.setState(update);
    };

    _this.state = {
      value: _this.props.value,
      dirty: _this.props.dirty || false
    };
    return _this;
  }

  _createClass(TextField, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {

      if (this.state.value !== nextProps.value) {
        this.setState({ value: nextProps.value });
      }

      if (this.state.dirty !== nextProps.dirty) {
        this.setState({ dirty: nextProps.dirty });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          disabled = _props.disabled,
          expanded = _props.expanded,
          handleOnBlur = _props.handleOnBlur,
          handleOnFocus = _props.handleOnFocus,
          hasError = _props.hasError,
          name = _props.name,
          placeholder = _props.placeholder,
          readOnly = _props.readOnly,
          required = _props.required,
          size = _props.size,
          type = _props.type,
          others = _objectWithoutProperties(_props, ['disabled', 'expanded', 'handleOnBlur', 'handleOnFocus', 'hasError', 'name', 'placeholder', 'readOnly', 'required', 'size', 'type']);

      var _state = this.state,
          dirty = _state.dirty,
          value = _state.value;


      var hasIcon = dirty && typeof hasError === 'boolean';

      var iconSize = {
        M: 24,
        L: 28
      };

      return _react2.default.createElement(
        BaseStyle,
        _extends({}, others, {
          disabled: disabled,
          expanded: expanded,
          filled: value && value.length !== 0,
          hasError: hasError,
          size: size
        }),
        hasIcon && _react2.default.createElement(
          IconStyle,
          {
            hasError: hasError,
            size: size
          },
          hasError ? _react2.default.createElement(_basic.ErrorIcon, { size: iconSize[size] }) : _react2.default.createElement(_basic.CheckedIcon, { size: iconSize[size] })
        ),
        _react2.default.createElement(InputStyle, {
          disabled: disabled,
          hasIcon: hasIcon,
          name: name,
          onBlur: handleOnBlur,
          onChange: this.handleOnChange,
          onFocus: handleOnFocus,
          placeholder: placeholder,
          readOnly: readOnly,
          required: required,
          size: size,
          type: type,
          value: value
        })
      );
    }
  }]);

  return TextField;
}(_react2.default.Component);

TextField.propTypes = {
  dirty: _propTypes.bool,
  disabled: _propTypes.bool,
  expanded: _propTypes.bool,
  handleOnBlur: _propTypes.func,
  handleOnChange: _propTypes.func,
  handleOnFocus: _propTypes.func,
  hasError: _propTypes.bool,
  name: _propTypes.string,
  placeholder: _propTypes.string,
  readOnly: _propTypes.bool,
  required: _propTypes.bool,
  size: (0, _propTypes.oneOf)(['M', 'L']),
  type: (0, _propTypes.oneOf)(['text', 'number', 'url', 'date', 'datetime']),
  value: (0, _propTypes.oneOfType)([_propTypes.string, _propTypes.number])
};
exports.default = TextField;