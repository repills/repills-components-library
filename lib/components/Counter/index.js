'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['', ''], ['', '']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _CompositionChart = require('../CompositionChart');

var _CompositionChart2 = _interopRequireDefault(_CompositionChart);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _style = require('./style');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var BaseStyle = _styledComponents2.default.div(_templateObject, _style.base);
var ContentStyle = _styledComponents2.default.div(_templateObject, _style.content);
var CountStyle = _styledComponents2.default.div(_templateObject, _style.count);
var LabelStyle = _styledComponents2.default.div(_templateObject, _style.label);
var BoxStyle = _styledComponents2.default.div(_templateObject, _style.box);

var Counter = function Counter(_ref) {
  var count = _ref.count,
      label = _ref.label,
      stats = _ref.stats;


  return _react2.default.createElement(
    BaseStyle,
    null,
    _react2.default.createElement(
      ContentStyle,
      null,
      _react2.default.createElement(
        BoxStyle,
        null,
        _react2.default.createElement(
          CountStyle,
          null,
          count
        ),
        _react2.default.createElement(
          LabelStyle,
          null,
          label
        )
      ),
      _react2.default.createElement(
        BoxStyle,
        null,
        _react2.default.createElement(_CompositionChart2.default, {
          barWidth: 8,
          maxHeight: 44,
          stats: stats
        })
      )
    )
  );
};

Counter.propTypes = {
  count: _propTypes.number,
  label: _propTypes.string,
  stats: _CompositionChart2.default.propTypes.stats
};

Counter.defaultProps = {};

exports.default = Counter;