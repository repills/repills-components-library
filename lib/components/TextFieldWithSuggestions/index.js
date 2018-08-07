'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['', ''], ['', '']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _TextField = require('../TextField');

var _TextField2 = _interopRequireDefault(_TextField);

var _style = require('./style');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var BaseStyle = _styledComponents2.default.div(_templateObject, _style.base);
var ListStyle = _styledComponents2.default.div(_templateObject, _style.list);
var ItemStyle = _styledComponents2.default.div(_templateObject, _style.item);

var TextFieldWithSuggestions = function (_React$Component) {
  _inherits(TextFieldWithSuggestions, _React$Component);

  function TextFieldWithSuggestions(props) {
    _classCallCheck(this, TextFieldWithSuggestions);

    var _this = _possibleConstructorReturn(this, (TextFieldWithSuggestions.__proto__ || Object.getPrototypeOf(TextFieldWithSuggestions)).call(this, props));

    _this.onHandleOnChange = function (_ref) {
      var value = _ref.value,
          dirty = _ref.dirty;

      _this.setState({ value: value, dirty: dirty });
      _this.props.handleOnChange({ value: value, dirty: dirty });
    };

    _this.onItemClick = function (value) {
      return function () {
        return _this.onHandleOnChange({ value: value, dirty: true });
      };
    };

    _this.state = {
      value: _this.props.value,
      dirty: false
    };
    return _this;
  }

  _createClass(TextFieldWithSuggestions, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (this.state.value !== nextProps.value) {
        this.setState({ value: nextProps.value });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          suggestions = _props.suggestions,
          others = _objectWithoutProperties(_props, ['suggestions']);

      var _state = this.state,
          value = _state.value,
          dirty = _state.dirty;


      return _react2.default.createElement(
        BaseStyle,
        null,
        _react2.default.createElement(_TextField2.default, _extends({}, others, {
          expanded: true,
          handleOnChange: this.onHandleOnChange,
          value: value
        })),
        (!dirty || value === '') && suggestions.length > 0 && _react2.default.createElement(
          ListStyle,
          null,
          suggestions.map(function (s, i) {
            return s !== value && _react2.default.createElement(
              ItemStyle,
              {
                key: 's-' + i,
                onClick: _this2.onItemClick(s)
              },
              s
            );
          })
        )
      );
    }
  }]);

  return TextFieldWithSuggestions;
}(_react2.default.Component);

TextFieldWithSuggestions.displayName = 'TextFieldWithSuggestions';

TextFieldWithSuggestions.propTypes = {
  handleOnChange: _propTypes.func,
  suggestions: (0, _propTypes.arrayOf)(_propTypes.string),
  value: _propTypes.string

};

exports.default = TextFieldWithSuggestions;