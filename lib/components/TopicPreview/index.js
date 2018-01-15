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

var _style = require('./style');

var _index = require('../../utils/index');

var _Icon = require('../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var BaseStyle = _styledComponents2.default.article(_templateObject, _style.base);
var FrameStyle = _styledComponents2.default.div(_templateObject, _style.frame);
var CounterStyle = _styledComponents2.default.div(_templateObject, _style.counter);
var TotalStyle = _styledComponents2.default.div(_templateObject, _style.total);
var TotalLabelStyle = _styledComponents2.default.div(_templateObject, _style.totalLabel);
var BottomStyle = _styledComponents2.default.div(_templateObject, _style.bottom);
var TitleStyle = _styledComponents2.default.h4(_templateObject, _style.title);
var CompositionStyle = _styledComponents2.default.div(_templateObject, _style.composition);

function TopicPreview(_ref) {
  var title = _ref.title,
      resources = _ref.resources;

  var totalCount = resources.length;
  var stats = (0, _index.getResourcesStats)(resources);
  return _react2.default.createElement(
    BaseStyle,
    null,
    _react2.default.createElement(
      FrameStyle,
      null,
      _react2.default.createElement(
        CounterStyle,
        null,
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
        BottomStyle,
        null,
        _react2.default.createElement(
          CompositionStyle,
          null,
          stats.map(function (stat) {
            return _react2.default.createElement(
              'span',
              {
                key: stat.type,
                style: { color: stat.color }
              },
              _react2.default.createElement(_Icon2.default, { name: 'pill' })
            );
          })
        ),
        _react2.default.createElement(
          TitleStyle,
          null,
          title
        )
      )
    )
  );
}

TopicPreview.propTypes = {
  title: _propTypes.string.isRequired
  // resources: @TODO
};

exports.default = TopicPreview;