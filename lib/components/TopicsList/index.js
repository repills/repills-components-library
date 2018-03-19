'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(['', ''], ['', '']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _TopicPreview = require('../TopicPreview');

var _TopicPreview2 = _interopRequireDefault(_TopicPreview);

var _propTypes = require('prop-types');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactContainerQuery = require('react-container-query');

var _breakpoints = require('../../config/breakpoints');

var _style = require('./style');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var BaseStyle = _styledComponents2.default.div(_templateObject, _style.base);
var ItemsStyle = _styledComponents2.default.div(_templateObject, _style.items);
var ItemStyle = _styledComponents2.default.div(_templateObject, _style.item);

function TopicsList(_ref) {
  var topics = _ref.topics,
      _navigateTo = _ref.navigateTo,
      others = _objectWithoutProperties(_ref, ['topics', 'navigateTo']);

  var count = topics.length;
  return _react2.default.createElement(
    _reactContainerQuery.ContainerQuery,
    { query: _breakpoints.query },
    function (params) {
      return _react2.default.createElement(
        BaseStyle,
        others,
        _react2.default.createElement(
          ItemsStyle,
          {
            breakpointsStatus: params
          },
          topics.map(function (topic) {
            return _react2.default.createElement(
              ItemStyle,
              {
                breakpointsStatus: params,
                count: count,
                key: topic.slug
              },
              _react2.default.createElement(_TopicPreview2.default, _extends({
                navigateTo: function navigateTo() {
                  return _navigateTo(topic.path);
                }
              }, topic))
            );
          })
        )
      );
    }
  );
}

TopicsList.propTypes = {
  navigateTo: _propTypes.func,
  topics: (0, _propTypes.arrayOf)((0, _propTypes.shape)(_TopicPreview2.default.propTypes)).isRequired
};

exports.default = TopicsList;