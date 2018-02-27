'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['', ''], ['', '']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _style = require('./style');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var BaseStyle = _styledComponents2.default.div(_templateObject, _style.base);
var CompositionStyle = _styledComponents2.default.div(_templateObject, _style.composition);
var CompositionItemStyle = _styledComponents2.default.div(_templateObject, _style.compositionItem);

var CompositionChart = function CompositionChart(_ref) {
  var barWidth = _ref.barWidth,
      maxHeight = _ref.maxHeight,
      stats = _ref.stats;


  return _react2.default.createElement(
    BaseStyle,
    null,
    _react2.default.createElement(
      CompositionStyle,
      {
        height: maxHeight
      },
      stats.map(function (stat) {
        return _react2.default.createElement(CompositionItemStyle, {
          color: stat.color,
          key: stat.type,
          percentage: stat.percentage,
          title: stat.count,
          width: barWidth
        });
      })
    )
  );
};

CompositionChart.propTypes = {
  barWidth: _propTypes.number,
  maxHeight: _propTypes.number,
  stats: (0, _propTypes.arrayOf)((0, _propTypes.shape)({
    color: _propTypes.string.isRequired,
    type: _propTypes.string.isRequired,
    percentage: _propTypes.number.isRequired,
    count: _propTypes.number.isRequired
  })).isRequired
};

CompositionChart.defaultProps = {
  barWidth: 6,
  maxHeight: 25
};

exports.default = CompositionChart;