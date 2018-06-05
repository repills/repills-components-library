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

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var BaseStyle = _styledComponents2.default.div(_templateObject, _style.base);
var CountStyle = _styledComponents2.default.div(_templateObject, _style.count);
var LabelStyle = _styledComponents2.default.div(_templateObject, _style.label);

var Counter = function Counter(_ref) {
  var count = _ref.count,
      label = _ref.label,
      others = _objectWithoutProperties(_ref, ['count', 'label']);

  return _react2.default.createElement(
    BaseStyle,
    others,
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
  );
};

Counter.propTypes = {
  count: _propTypes.number,
  label: _propTypes.string
};

Counter.defaultProps = {};

exports.default = Counter;