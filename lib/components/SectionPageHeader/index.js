'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(['', ''], ['', '']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _sections = require('../Icon/icons/sections');

var sectionsIcons = _interopRequireWildcard(_sections);

var _consumeContainerQuery = require('../../hoc/consume-container-query');

var _consumeContainerQuery2 = _interopRequireDefault(_consumeContainerQuery);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _style = require('./style');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var BaseStyle = _styledComponents2.default.div(_templateObject, _style.base);
var LabelStyle = _styledComponents2.default.div(_templateObject, _style.label);
var IconStyle = _styledComponents2.default.div(_templateObject, _style.icon);
var TitleStyle = _styledComponents2.default.h1(_templateObject, _style.title);
var MainStyle = _styledComponents2.default.div(_templateObject, _style.main);
var DescriptionStyle = _styledComponents2.default.p(_templateObject, _style.description);

var SectionPageHeader = function SectionPageHeader(_ref) {
  var breakpointsStatus = _ref.breakpointsStatus,
      color = _ref.color,
      description = _ref.description,
      icon = _ref.icon,
      label = _ref.label,
      title = _ref.title,
      others = _objectWithoutProperties(_ref, ['breakpointsStatus', 'color', 'description', 'icon', 'label', 'title']);

  var Icon = sectionsIcons[icon];

  return _react2.default.createElement(
    BaseStyle,
    _extends({}, others, {
      breakpointsStatus: breakpointsStatus
    }),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        MainStyle,
        {
          breakpointsStatus: breakpointsStatus
        },
        Icon && _react2.default.createElement(
          IconStyle,
          {
            breakpointsStatus: breakpointsStatus,
            color: color
          },
          _react2.default.createElement(Icon, { size: 56 })
        ),
        label && _react2.default.createElement(
          LabelStyle,
          null,
          label
        ),
        _react2.default.createElement(
          TitleStyle,
          {
            breakpointsStatus: breakpointsStatus
          },
          title
        )
      ),
      description && _react2.default.createElement(
        DescriptionStyle,
        {
          breakpointsStatus: breakpointsStatus,
          icon: icon
        },
        description
      )
    )
  );
};

SectionPageHeader.displayName = 'SectionPageHeader';

SectionPageHeader.propTypes = {
  breakpointsStatus: _propTypes.object,
  color: _propTypes.string.isRequired,
  description: _propTypes.string,
  icon: _propTypes.string.isRequired,
  label: _propTypes.string,
  title: _propTypes.string.isRequired
};

SectionPageHeader.defaultProps = {
  breakpointsStatus: {}
};

exports.default = (0, _consumeContainerQuery2.default)(SectionPageHeader);