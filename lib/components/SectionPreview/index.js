'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['', ''], ['', '']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _sections = require('../Icon/icons/sections');

var icons = _interopRequireWildcard(_sections);

var _propTypes = require('prop-types');

var _Button = require('../Button');

var _Button2 = _interopRequireDefault(_Button);

var _style = require('./style');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var BaseStyle = _styledComponents2.default.article(_templateObject, _style.base);
var NameStyle = _styledComponents2.default.h3(_templateObject, _style.name);
var DescriptionStyle = _styledComponents2.default.p(_templateObject, _style.description);
var IconStyle = _styledComponents2.default.div(_templateObject, _style.icon);
var DetailsStyle = _styledComponents2.default.div(_templateObject, _style.details);
var DetailStyle = _styledComponents2.default.span(_templateObject, _style.detail);

function SectionPreview(_ref) {
  var color = _ref.color,
      description = _ref.description,
      icon = _ref.icon,
      name = _ref.name,
      navigateTo = _ref.navigateTo,
      resourcesCount = _ref.resourcesCount,
      topicsCount = _ref.topicsCount;

  var Icon = icon && icons[icon];

  return _react2.default.createElement(
    BaseStyle,
    null,
    _react2.default.createElement(
      IconStyle,
      null,
      _react2.default.createElement(Icon, {
        color: color,
        size: 100
      })
    ),
    _react2.default.createElement(
      NameStyle,
      null,
      name
    ),
    _react2.default.createElement(
      DescriptionStyle,
      null,
      description
    ),
    _react2.default.createElement(
      DetailsStyle,
      null,
      _react2.default.createElement(
        DetailStyle,
        null,
        _react2.default.createElement(
          'strong',
          null,
          resourcesCount
        ),
        ' pill',
        resourcesCount === 1 ? '' : 's'
      ),
      '/',
      _react2.default.createElement(
        DetailStyle,
        null,
        _react2.default.createElement(
          'strong',
          null,
          topicsCount
        ),
        ' topic',
        topicsCount === 1 ? '' : 's'
      )
    ),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(_Button2.default, {
        label: 'Learn',
        onClick: navigateTo,
        outline: true
      })
    )
  );
}

SectionPreview.propTypes = {
  color: _propTypes.string,
  description: _propTypes.string,
  icon: _propTypes.string.isRequired,
  name: _propTypes.string.isRequired,
  navigateTo: _propTypes.func.isRequired,
  resourcesCount: _propTypes.number,
  topicsCount: _propTypes.number
};

exports.default = SectionPreview;