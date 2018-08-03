'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['', ''], ['', '']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _consumeContainerQuery = require('../../hoc/consume-container-query');

var _consumeContainerQuery2 = _interopRequireDefault(_consumeContainerQuery);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _style = require('./style');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var BaseStyle = _styledComponents2.default.div(_templateObject, _style.base);
var HeaderStyle = _styledComponents2.default.div(_templateObject, _style.header);
var IndexStyle = _styledComponents2.default.div(_templateObject, _style.index);
var TitleStyle = _styledComponents2.default.h3(_templateObject, _style.title);
var BodyStyle = _styledComponents2.default.div(_templateObject, _style.body);

var StepBox = function StepBox(_ref) {
  var breakpointsStatus = _ref.breakpointsStatus,
      children = _ref.children,
      index = _ref.index,
      last = _ref.last,
      title = _ref.title,
      others = _objectWithoutProperties(_ref, ['breakpointsStatus', 'children', 'index', 'last', 'title']);

  return _react2.default.createElement(
    BaseStyle,
    others,
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        HeaderStyle,
        null,
        _react2.default.createElement(
          IndexStyle,
          null,
          index
        ),
        _react2.default.createElement(
          TitleStyle,
          null,
          title
        )
      ),
      _react2.default.createElement(
        BodyStyle,
        {
          breakpointsStatus: breakpointsStatus,
          last: last
        },
        children
      )
    )
  );
};

StepBox.propTypes = {
  breakpointsStatus: _propTypes.object,
  children: _propTypes.any.isRequired,
  index: _propTypes.number.isRequired,
  last: _propTypes.bool,
  title: _propTypes.string.isRequired
};

StepBox.defaultProps = {
  breakpointsStatus: {}
};

exports.default = (0, _consumeContainerQuery2.default)(StepBox);