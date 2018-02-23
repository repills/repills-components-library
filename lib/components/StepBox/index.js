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
var HeaderStyle = _styledComponents2.default.div(_templateObject, _style.header);
var IndexStyle = _styledComponents2.default.div(_templateObject, _style.index);
var TitleStyle = _styledComponents2.default.h3(_templateObject, _style.title);
var BodyStyle = _styledComponents2.default.div(_templateObject, _style.body);

var StepBox = function StepBox(_ref) {
  var children = _ref.children,
      index = _ref.index,
      title = _ref.title;


  return _react2.default.createElement(
    BaseStyle,
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
      null,
      children
    )
  );
};

StepBox.propTypes = {
  children: _propTypes.element,
  index: _propTypes.number,
  title: _propTypes.string
};

exports.default = StepBox;