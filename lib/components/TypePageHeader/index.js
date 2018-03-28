'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(['', ''], ['', '']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _types = require('../Icon/icons/types');

var sectionsIcons = _interopRequireWildcard(_types);

var _reactContainerQuery = require('react-container-query');

var _breakpoints = require('../../config/breakpoints');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _style = require('./style');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var BaseStyle = _styledComponents2.default.div(_templateObject, _style.base);
var IconStyle = _styledComponents2.default.div(_templateObject, _style.icon);
var TitleStyle = _styledComponents2.default.h1(_templateObject, _style.title);
var MainStyle = _styledComponents2.default.div(_templateObject, _style.main);
var SectionNameStyle = _styledComponents2.default.span(_templateObject, _style.sectionName);

var SectionName = function SectionName(_ref) {
  var topicAction = _ref.topicAction,
      topicName = _ref.topicName;
  return _react2.default.createElement(
    'span',
    null,
    'in ',
    _react2.default.createElement(
      SectionNameStyle,
      { onClick: topicAction },
      topicName
    )
  );
};

var TypePageHeader = function TypePageHeader(_ref2) {
  var color = _ref2.color,
      icon = _ref2.icon,
      topicName = _ref2.topicName,
      topicAction = _ref2.topicAction,
      typeName = _ref2.typeName,
      others = _objectWithoutProperties(_ref2, ['color', 'icon', 'topicName', 'topicAction', 'typeName']);

  var Icon = sectionsIcons[icon + 'Icon'];

  return _react2.default.createElement(
    _reactContainerQuery.ContainerQuery,
    { query: _breakpoints.query },
    function (params) {
      return _react2.default.createElement(
        BaseStyle,
        _extends({}, others, {
          breakpointsStatus: params
        }),
        _react2.default.createElement(
          MainStyle,
          {
            breakpointsStatus: params
          },
          Icon && _react2.default.createElement(
            IconStyle,
            {
              breakpointsStatus: params,
              color: color
            },
            _react2.default.createElement(Icon, { size: 60 })
          ),
          _react2.default.createElement(
            TitleStyle,
            {
              breakpointsStatus: params
            },
            _react2.default.createElement(
              'span',
              null,
              typeName,
              ' ',
              topicName && _react2.default.createElement(SectionName, {
                topicAction: topicAction,
                topicName: topicName
              })
            )
          )
        )
      );
    }
  );
};

TypePageHeader.propTypes = {
  color: _propTypes.string.isRequired,
  icon: _propTypes.string.isRequired,
  topicAction: _propTypes.func,
  topicName: _propTypes.string,
  typeName: _propTypes.string.isRequired
};

exports.default = TypePageHeader;