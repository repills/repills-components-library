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

var BaseStyle = _styledComponents2.default.div(_templateObject, _style.base);
var NameStyle = _styledComponents2.default.h3(_templateObject, _style.title);
var SelectionButtonStyle = _styledComponents2.default.div(_templateObject, _style.selectButton);

var TopicPreviewSelection = function (_React$Component) {
  _inherits(TopicPreviewSelection, _React$Component);

  function TopicPreviewSelection(props) {
    _classCallCheck(this, TopicPreviewSelection);

    var _this = _possibleConstructorReturn(this, (TopicPreviewSelection.__proto__ || Object.getPrototypeOf(TopicPreviewSelection)).call(this, props));

    _this.handleOnChange = function () {
      return _this.setState(function (state) {
        var update = { checked: !state.checked };
        _this.props.handleOnChange(update);
        return update;
      });
    };

    _this.state = {
      checked: _this.props.checked
    };
    return _this;
  }

  _createClass(TopicPreviewSelection, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.checked !== this.state.checked) {
        this.setState({ checked: nextProps.checked });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var title = this.props.title;
      var checked = this.state.checked;


      return _react2.default.createElement(
        BaseStyle,
        {
          checked: checked,
          onClick: this.handleOnChange
        },
        _react2.default.createElement(
          SelectionButtonStyle,
          null,
          checked ? _react2.default.createElement(_basic.CheckIcon, { size: 24 }) : _react2.default.createElement(_basic.UncheckedIcon, { size: 24 }),
          _react2.default.createElement(
            NameStyle,
            null,
            title
          )
        )
      );
    }
  }]);

  return TopicPreviewSelection;
}(_react2.default.Component);

TopicPreviewSelection.propTypes = {
  checked: _propTypes.bool,
  handleOnChange: _propTypes.func,
  title: _propTypes.string.isRequired
};
exports.default = TopicPreviewSelection;