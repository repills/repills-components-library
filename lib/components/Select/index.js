'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['', ''], ['', '']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _basic = require('../Icon/icons/basic');

var _style = require('./style');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// Styled block
var BaseStyle = _styledComponents2.default.div(_templateObject, _style.base);
var SelectedStyle = _styledComponents2.default.div(_templateObject, _style.selected);
var SelectedTextStyle = _styledComponents2.default.div(_templateObject, _style.selectedText);
var ListStyle = _styledComponents2.default.div(_templateObject, _style.list);
var ItemStyle = _styledComponents2.default.div(_templateObject, _style.item);
var ItemTextStyle = _styledComponents2.default.div(_templateObject, _style.itemText);
var CheckIconStyle = _styledComponents2.default.div(_templateObject, _style.checkIcon);

var Select = function (_React$Component) {
  _inherits(Select, _React$Component);

  function Select(props) {
    _classCallCheck(this, Select);

    var _this = _possibleConstructorReturn(this, (Select.__proto__ || Object.getPrototypeOf(Select)).call(this, props));

    _this.handleOnChange = function (_ref) {
      var index = _ref.index,
          disabled = _ref.disabled;
      return function () {

        if (disabled) {
          return;
        }

        var _this$props = _this.props,
            handleOnChange = _this$props.handleOnChange,
            options = _this$props.options;


        _this.setState({ selectedIndex: index, open: false });
        handleOnChange({ value: options[index].value, index: index });
      };
    };

    _this.handleOpen = function () {
      if (_this.props.disabled) {
        return;
      }

      _this.setState(function (state) {
        return { open: !state.open };
      });
    };

    _this.state = {
      selectedIndex: _this.props.selectedIndex,
      open: false
    };
    return _this;
  }

  _createClass(Select, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (this.props.selectedIndex !== nextProps.selectedIndex) {
        this.setState({ selectedIndex: nextProps.selectedIndex });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          disabled = _props.disabled,
          expanded = _props.expanded,
          id = _props.id,
          options = _props.options,
          placeholder = _props.placeholder,
          size = _props.size;
      var _state = this.state,
          selectedIndex = _state.selectedIndex,
          open = _state.open;


      var isFilled = selectedIndex !== null && selectedIndex !== undefined;

      var currentSelectionLabel = isFilled ? options[selectedIndex].label : _react2.default.createElement(
        'span',
        null,
        placeholder && placeholder.length !== 0 ? placeholder : 'Select...'
      );

      return _react2.default.createElement(
        BaseStyle,
        {
          disabled: disabled,
          expanded: expanded,
          id: id,
          size: size
        },
        _react2.default.createElement(
          SelectedStyle,
          {
            disabled: disabled,
            filled: isFilled,
            onClick: this.handleOpen,
            open: open,
            size: size
          },
          _react2.default.createElement(
            SelectedTextStyle,
            null,
            currentSelectionLabel
          )
        ),
        !disabled && open && _react2.default.createElement(
          ListStyle,
          {
            size: size
          },
          options.map(function (item, index) {
            return _react2.default.createElement(
              ItemStyle,
              {
                disabled: item.disabled,
                key: 'option-' + index,
                onClick: _this2.handleOnChange({ index: index, disabled: item.disabled }),
                size: size,
                title: item.label
              },
              _react2.default.createElement(
                ItemTextStyle,
                null,
                item.label
              ),
              index === selectedIndex && _react2.default.createElement(
                CheckIconStyle,
                null,
                _react2.default.createElement(_basic.CheckIcon, {
                  size: size === 'M' ? 16 : 20
                })
              )
            );
          })
        )
      );
    }
  }]);

  return Select;
}(_react2.default.Component);

Select.propTypes = {
  disabled: _propTypes.bool,
  expanded: _propTypes.bool,
  handleOnChange: _propTypes.func.isRequired,
  id: _propTypes.string,
  options: (0, _propTypes.arrayOf)((0, _propTypes.shape)({
    label: _propTypes.string.isRequired,
    value: _propTypes.any.isRequired,
    disabled: _propTypes.bool
  })).isRequired,
  placeholder: _propTypes.string,
  selectedIndex: _propTypes.number,
  size: (0, _propTypes.oneOf)(['M', 'L'])
};
Select.defaultProps = {
  size: 'M',
  selectedIndex: null
};
exports.default = Select;