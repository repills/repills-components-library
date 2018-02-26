'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['', ''], ['', '']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _reactContainerQuery = require('react-container-query');

var _breakpoints = require('../../config/breakpoints');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

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
      last = _ref.last,
      title = _ref.title;


  return _react2.default.createElement(
    _reactContainerQuery.ContainerQuery,
    { query: _breakpoints.query },
    function (params) {
      return _react2.default.createElement(
        BaseStyle,
        null,
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
              className: (0, _classnames2.default)(params),
              last: last
            },
            children
          )
        )
      );
    }
  );
};

StepBox.propTypes = {
  children: _propTypes.any.isRequired,
  index: _propTypes.number.isRequired,
  title: _propTypes.string.isRequired
};

exports.default = StepBox;