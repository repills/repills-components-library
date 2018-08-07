'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['', ''], ['', '']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _index = require('../TopicPreviewSelection/index');

var _index2 = _interopRequireDefault(_index);

var _consumeContainerQuery = require('../../hoc/consume-container-query');

var _consumeContainerQuery2 = _interopRequireDefault(_consumeContainerQuery);

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
var SelectedMessageStyle = _styledComponents2.default.p(_templateObject, _style.selectedMessage);

var TopicSelector = function (_React$Component) {
  _inherits(TopicSelector, _React$Component);

  function TopicSelector(props) {
    _classCallCheck(this, TopicSelector);

    var _this = _possibleConstructorReturn(this, (TopicSelector.__proto__ || Object.getPrototypeOf(TopicSelector)).call(this, props));

    _this.transformSelectedToObject = function (selected) {
      return selected.reduce(function (acc, e) {
        acc[e] = true;
        return acc;
      }, {});
    };

    _this.handleOnChange = function (id) {
      return function () {
        return _this.setState(function (state) {
          var handleOnChange = _this.props.handleOnChange;

          state.selected[id] = !state.selected[id];
          var result = Object.entries(state.selected).filter(function (e) {
            return e[1];
          }).map(function (_ref) {
            var _ref2 = _slicedToArray(_ref, 2),
                key = _ref2[0],
                value = _ref2[1];

            return key;
          });
          if (typeof handleOnChange === 'function') {
            handleOnChange({ selected: result });
          }
          return state;
        });
      };
    };

    _this.isChecked = function (id) {
      var selected = _this.state.selected;


      return selected && selected[id];
    };

    _this.state = {
      selected: _this.transformSelectedToObject(_this.props.selected)
    };
    return _this;
  }

  _createClass(TopicSelector, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.selected !== this.state.selected) {
        var selected = this.transformSelectedToObject(nextProps.selected);
        this.setState({ selected: selected });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          breakpointsStatus = _props.breakpointsStatus,
          topics = _props.topics,
          others = _objectWithoutProperties(_props, ['breakpointsStatus', 'topics']);

      var selected = this.state.selected;


      var count = Object.entries(topics).length;

      var selectedCount = Object.keys(selected).length;

      return _react2.default.createElement(
        BaseStyle,
        others,
        _react2.default.createElement(
          ItemsStyle,
          { breakpointsStatus: breakpointsStatus },
          Object.entries(topics).map(function (_ref3, index) {
            var _ref4 = _slicedToArray(_ref3, 2),
                key = _ref4[0],
                topic = _ref4[1];

            return _react2.default.createElement(
              ItemStyle,
              {
                breakpointsStatus: breakpointsStatus,
                count: count,
                key: topic.slug
              },
              _react2.default.createElement(_index2.default, _extends({
                checked: _this2.isChecked(key),
                handleOnChange: _this2.handleOnChange(key)
              }, topic))
            );
          })
        ),
        selectedCount > 0 && _react2.default.createElement(
          SelectedMessageStyle,
          null,
          'Selected ',
          selectedCount,
          ' topic',
          selectedCount === 1 ? '' : 's'
        )
      );
    }
  }]);

  return TopicSelector;
}(_react2.default.Component);

TopicSelector.displayName = 'TopicSelector';

TopicSelector.propTypes = {
  breakpointsStatus: _propTypes.object,
  handleOnChange: _propTypes.func,
  selected: (0, _propTypes.arrayOf)(_propTypes.string),
  topics: _propTypes.object.isRequired
};

TopicSelector.defaultProps = {
  breakpointsStatus: {},
  selected: []
};

exports.default = (0, _consumeContainerQuery2.default)(TopicSelector);