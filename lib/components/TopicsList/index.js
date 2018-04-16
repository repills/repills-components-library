'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['', ''], ['', '']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _TopicPreview = require('../TopicPreview');

var _TopicPreview2 = _interopRequireDefault(_TopicPreview);

var _propTypes = require('prop-types');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Button = require('../Button');

var _Button2 = _interopRequireDefault(_Button);

var _breakpoints = require('../../config/breakpoints');

var _style = require('./style');

var _QueryHandler = require('../QueryHandler');

var _QueryHandler2 = _interopRequireDefault(_QueryHandler);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var BaseStyle = _styledComponents2.default.div(_templateObject, _style.base);
var ItemsStyle = _styledComponents2.default.div(_templateObject, _style.items);
var ItemStyle = _styledComponents2.default.div(_templateObject, _style.item);
var ActionsStyle = _styledComponents2.default.div(_templateObject, _style.actions);

var TopicsList = function (_React$Component) {
  _inherits(TopicsList, _React$Component);

  function TopicsList(props) {
    _classCallCheck(this, TopicsList);

    var _this = _possibleConstructorReturn(this, (TopicsList.__proto__ || Object.getPrototypeOf(TopicsList)).call(this, props));

    _this.getCurrentBreakPoint = function (statusBreakpoints) {
      var current = null;

      _breakpoints.queryList.forEach(function (b) {
        if (statusBreakpoints[b]) {
          current = b;
        }
      });

      return current;
    };

    _this.getShowedTopics = function (_ref) {
      var currentBreakpoint = _ref.currentBreakpoint;
      var _this$props = _this.props,
          breaks = _this$props.breaks,
          topics = _this$props.topics;
      var showEntireList = _this.state.showEntireList;


      if (breaks && !showEntireList) {
        if (currentBreakpoint && breaks[currentBreakpoint]) {
          return topics.slice(0, breaks[currentBreakpoint]);
        }
      }

      return topics;
    };

    _this.state = {
      showEntireList: false
    };
    return _this;
  }

  _createClass(TopicsList, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          breakpointsStatus = _props.breakpointsStatus,
          topics = _props.topics,
          _navigateTo = _props.navigateTo,
          showAllAction = _props.showAllAction,
          others = _objectWithoutProperties(_props, ['breakpointsStatus', 'topics', 'navigateTo', 'showAllAction']);

      var count = topics.length;
      var currentBreakpoint = this.getCurrentBreakPoint(breakpointsStatus);
      var showedTopics = this.getShowedTopics({ currentBreakpoint: currentBreakpoint });

      return _react2.default.createElement(
        BaseStyle,
        others,
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            ItemsStyle,
            {
              breakpointsStatus: breakpointsStatus
            },
            showedTopics.map(function (topic, i) {
              return _react2.default.createElement(
                ItemStyle,
                {
                  breakpointsStatus: breakpointsStatus,
                  count: count,
                  key: topic.slug + '-' + i
                },
                _react2.default.createElement(_TopicPreview2.default, _extends({
                  navigateTo: function navigateTo() {
                    return _navigateTo(topic.path);
                  }
                }, topic))
              );
            })
          ),
          topics.length > showedTopics.length && _react2.default.createElement(
            ActionsStyle,
            null,
            _react2.default.createElement(_Button2.default, {
              expanded: currentBreakpoint === 'XS',
              label: 'Show more',
              onClick: function onClick() {
                return _this2.setState({ showEntireList: true });
              }
            })
          ),
          showAllAction && topics.length === showedTopics.length && _react2.default.createElement(
            ActionsStyle,
            null,
            _react2.default.createElement(_Button2.default, {
              expanded: currentBreakpoint === 'XS',
              label: 'Show All',
              onClick: showAllAction.onClick
            })
          )
        )
      );
    }
  }]);

  return TopicsList;
}(_react2.default.Component);

TopicsList.propTypes = {
  breakpointsStatus: _propTypes.object,
  breaks: _propTypes.object,
  navigateTo: _propTypes.func,
  showAllAction: (0, _propTypes.shape)({
    onClick: _propTypes.func.isRequired
  }),
  topics: (0, _propTypes.arrayOf)((0, _propTypes.shape)(_TopicPreview2.default.propTypes)).isRequired
};
TopicsList.defaultProps = {
  breakpointsStatus: {}
};
exports.default = (0, _QueryHandler2.default)(TopicsList);