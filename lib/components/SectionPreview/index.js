'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

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

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var BaseStyle = _styledComponents2.default.article(_templateObject, _style.base);
var InfoStyle = _styledComponents2.default.div(_templateObject, _style.info);
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
      path = _ref.path,
      navigateTo = _ref.navigateTo,
      resourcesCount = _ref.resourcesCount,
      topicsCount = _ref.topicsCount,
      disabled = _ref.disabled,
      others = _objectWithoutProperties(_ref, ['color', 'description', 'icon', 'name', 'path', 'navigateTo', 'resourcesCount', 'topicsCount', 'disabled']);

  var Icon = icon && icons[icon];
  var navigate = function navigate(e) {
    e.preventDefault();
    e.stopPropagation();
    navigateTo();
  };

  var CoverStyle = _styledComponents2.default[!disabled && navigate ? 'a' : 'div'](_templateObject, _style.cover);

  return _react2.default.createElement(
    BaseStyle,
    _extends({}, others, {
      disabled: disabled
    }),
    _react2.default.createElement(
      CoverStyle,
      {
        disabled: disabled,
        onClick: !disabled ? navigate : undefined
      },
      _react2.default.createElement(
        IconStyle,
        null,
        _react2.default.createElement(Icon, {
          color: color,
          size: 88
        })
      ),
      _react2.default.createElement(
        NameStyle,
        null,
        name
      )
    ),
    _react2.default.createElement(
      InfoStyle,
      null,
      _react2.default.createElement(
        DescriptionStyle,
        null,
        description
      ),
      _react2.default.createElement(
        DetailsStyle,
        null,
        resourcesCount !== 'undefined' && _react2.default.createElement(
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
        topicsCount !== 'undefined' && _react2.default.createElement(
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
          disabled: disabled,
          ellipsis: true,
          expanded: true,
          href: !disabled ? path : undefined,
          label: disabled ? 'Coming soon' : 'Learn',
          onClick: navigateTo
        })
      )
    )
  );
}

SectionPreview.propTypes = {
  color: _propTypes.string,
  description: _propTypes.string,
  disabled: _propTypes.bool,
  icon: _propTypes.string.isRequired,
  name: _propTypes.string.isRequired,
  navigateTo: _propTypes.func,
  path: _propTypes.string.isRequired,
  resourcesCount: _propTypes.number,
  topicsCount: _propTypes.number
};

exports.default = SectionPreview;