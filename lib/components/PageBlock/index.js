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
var TitleStyle = _styledComponents2.default.h2(_templateObject, _style.title);
var BodyStyle = _styledComponents2.default.div(_templateObject, _style.body);
var ContentsCountStyle = _styledComponents2.default.div(_templateObject, _style.count);

var PageBlock = function PageBlock(_ref) {
  var title = _ref.title,
      children = _ref.children,
      contentsCount = _ref.contentsCount;


  return _react2.default.createElement(
    BaseStyle,
    null,
    _react2.default.createElement(
      TitleStyle,
      null,
      _react2.default.createElement(
        'span',
        null,
        title
      ),
      contentsCount && _react2.default.createElement(
        ContentsCountStyle,
        null,
        contentsCount
      )
    ),
    _react2.default.createElement(
      BodyStyle,
      null,
      children
    )
  );
};

PageBlock.propTypes = {
  children: _propTypes.element,
  contentsCount: _propTypes.number,
  title: _propTypes.string
};

exports.default = PageBlock;