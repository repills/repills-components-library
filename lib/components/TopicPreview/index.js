'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['', ''], ['', '']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _basic = require('../Icon/icons/basic');

var _propTypes = require('prop-types');

var _reactContainerQuery = require('react-container-query');

var _breakpoints = require('../../config/breakpoints');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _style = require('./style');

var _index = require('../../utils/index');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var BaseStyle = _styledComponents2.default.article(_templateObject, _style.base);
var FrameStyle = _styledComponents2.default.div(_templateObject, _style.frame);
var CounterStyle = _styledComponents2.default.div(_templateObject, _style.counter);
var TotalStyle = _styledComponents2.default.div(_templateObject, _style.total);
var TotalLabelStyle = _styledComponents2.default.div(_templateObject, _style.totalLabel);
var InfoStyle = _styledComponents2.default.div(_templateObject, _style.info);
var TitleStyle = _styledComponents2.default.h4(_templateObject, _style.title);
var CompositionStyle = _styledComponents2.default.div(_templateObject, _style.composition);

function TopicPreview(_ref) {
  var title = _ref.title,
      resources = _ref.resources;

  var totalCount = resources.length;
  var stats = (0, _index.getResourcesStats)(resources);
  return _react2.default.createElement(
    _reactContainerQuery.ContainerQuery,
    { query: _breakpoints.query },
    function (params) {
      return _react2.default.createElement(
        BaseStyle,
        {
          disabled: totalCount === 0
        },
        _react2.default.createElement(
          FrameStyle,
          null,
          _react2.default.createElement(
            CounterStyle,
            { className: (0, _classnames2.default)(params) },
            _react2.default.createElement(
              TotalStyle,
              null,
              totalCount
            ),
            _react2.default.createElement(
              TotalLabelStyle,
              null,
              'Pill',
              totalCount !== 1 ? 's' : ''
            )
          ),
          _react2.default.createElement(
            InfoStyle,
            { className: (0, _classnames2.default)(params) },
            _react2.default.createElement(
              CompositionStyle,
              null,
              stats.map(function (stat) {
                return _react2.default.createElement(_basic.PillIcon, {
                  color: stat.color,
                  key: stat.type,
                  size: 14
                });
              })
            ),
            _react2.default.createElement(
              TitleStyle,
              { className: (0, _classnames2.default)(params) },
              title
            )
          )
        )
      );
    }
  );
}

TopicPreview.propTypes = {
  title: _propTypes.string.isRequired
  // resources: @TODO
};

exports.default = TopicPreview;