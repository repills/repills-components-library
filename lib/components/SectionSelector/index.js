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

var _SectionPreviewSelection = require('../SectionPreviewSelection');

var _SectionPreviewSelection2 = _interopRequireDefault(_SectionPreviewSelection);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactContainerQuery = require('react-container-query');

var _breakpoints = require('../../config/breakpoints');

var _style = require('./style');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var BaseStyle = _styledComponents2.default.div(_templateObject, _style.base);
var ItemsStyle = _styledComponents2.default.div(_templateObject, _style.items);
var ItemStyle = _styledComponents2.default.div(_templateObject, _style.item);

var SectionSelector = function (_React$Component) {
  _inherits(SectionSelector, _React$Component);

  function SectionSelector(props) {
    _classCallCheck(this, SectionSelector);

    var _this = _possibleConstructorReturn(this, (SectionSelector.__proto__ || Object.getPrototypeOf(SectionSelector)).call(this, props));

    _this.handleOnChange = function (index) {
      return function () {
        return _this.setState(function (state) {
          var _index = index === _this.state.selected ? null : index;
          var update = { selected: _index };
          _this.props.handleOnChange(update);
          return update;
        });
      };
    };

    _this.state = {
      selected: _this.props.selected
    };
    return _this;
  }

  _createClass(SectionSelector, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.selected !== this.state.selected) {
        this.setState({ selected: nextProps.selected });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          sections = _props.sections,
          others = _objectWithoutProperties(_props, ['sections']);

      var selected = this.state.selected;


      return _react2.default.createElement(
        _reactContainerQuery.ContainerQuery,
        { query: _breakpoints.query },
        function (params) {
          return _react2.default.createElement(
            BaseStyle,
            others,
            _react2.default.createElement(
              ItemsStyle,
              { className: (0, _classnames2.default)(params) },
              sections.map(function (section, index) {
                return _react2.default.createElement(
                  ItemStyle,
                  {
                    className: (0, _classnames2.default)(params),
                    key: section.id
                  },
                  _react2.default.createElement(_SectionPreviewSelection2.default, _extends({
                    checked: index === selected,
                    handleOnChange: _this2.handleOnChange(index)
                  }, section))
                );
              })
            )
          );
        }
      );
    }
  }]);

  return SectionSelector;
}(_react2.default.Component);

SectionSelector.propTypes = {
  handleOnChange: _propTypes.func,
  sections: (0, _propTypes.arrayOf)((0, _propTypes.shape)(_SectionPreviewSelection2.default.propTypes)).isRequired,
  selected: _propTypes.number
};
exports.default = SectionSelector;