'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['', ''], ['', '']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _sections = require('../Icon/icons/sections');

var sectionsIcons = _interopRequireWildcard(_sections);

var _reactContainerQuery = require('react-container-query');

var _utils = require('../../utils');

var _breakpoints = require('../../config/breakpoints');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _style = require('./style');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var BaseStyle = _styledComponents2.default.div(_templateObject, _style.base);
var LabelStyle = _styledComponents2.default.div(_templateObject, _style.label);
var IconStyle = _styledComponents2.default.div(_templateObject, _style.icon);
var TitleStyle = _styledComponents2.default.h1(_templateObject, _style.title);
var MainStyle = _styledComponents2.default.div(_templateObject, _style.main);
var TitleContainerStyle = _styledComponents2.default.div(_templateObject, _style.titleContainer);
var DescriptionStyle = _styledComponents2.default.p(_templateObject, _style.description);

var SectionPageHeader = function SectionPageHeader(_ref) {
  var color = _ref.color,
      description = _ref.description,
      icon = _ref.icon,
      title = _ref.title;


  var Icon = sectionsIcons[icon];

  return _react2.default.createElement(
    _reactContainerQuery.ContainerQuery,
    { query: _breakpoints.query },
    function (params) {
      return _react2.default.createElement(
        BaseStyle,
        {
          breakpointsStatus: params
        },
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
            _react2.default.createElement(Icon, { size: params[_breakpoints.MD] ? 80 : 100 })
          ),
          _react2.default.createElement(
            LabelStyle,
            null,
            'Section'
          ),
          _react2.default.createElement(
            TitleStyle,
            null,
            title
          )
        ),
        description && _react2.default.createElement(
          DescriptionStyle,
          { icon: icon },
          description
        )
      );
    }
  );
};

SectionPageHeader.propTypes = {
  color: _propTypes.string.isRequired,
  description: _propTypes.string,
  icon: _propTypes.string.isRequired,
  title: _propTypes.string.isRequired
};

exports.default = SectionPageHeader;