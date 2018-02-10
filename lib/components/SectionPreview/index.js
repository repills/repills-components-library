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

var _Button = require('../Button');

var _Button2 = _interopRequireDefault(_Button);

var _style = require('./style');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var BaseStyle = _styledComponents2.default.article(_templateObject, _style.base);
var NameStyle = _styledComponents2.default.h3(_templateObject, _style.name);
var AbstractStyle = _styledComponents2.default.p(_templateObject, _style.abstract);
var IconStyle = _styledComponents2.default.div(_templateObject, _style.icon);

function SectionPreview(_ref) {
  var abstract = _ref.abstract,
      icon = _ref.icon,
      name = _ref.name,
      navigateTo = _ref.navigateTo;

  return _react2.default.createElement(
    BaseStyle,
    null,
    _react2.default.createElement(
      NameStyle,
      null,
      name
    ),
    _react2.default.createElement(
      AbstractStyle,
      null,
      abstract
    ),
    _react2.default.createElement(_Button2.default, {
      label: 'Learn',
      onClick: navigateTo,
      outline: true
    })
  );
}

SectionPreview.propTypes = {
  abstract: _propTypes.string,
  icon: _propTypes.string.isRequired,
  name: _propTypes.string.isRequired,
  navigateTo: _propTypes.func.isRequired
};

exports.default = SectionPreview;